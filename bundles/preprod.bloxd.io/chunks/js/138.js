export const id = 138;
export const ids = [138];
export const modules = {
  7774: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BloxdDiscordSDK: () => Rz,
      DiscordLoginCancelledError: () => Zz,
      discordPopupTimeoutMs: () => Fz
    });
    var Ez = bz(158),
      nz = bz(1219),
      iz = bz(1118),
      lz = bz(1139),
      Mz = bz.n(lz),
      tz = bz(1195),
      Hz = bz(33),
      Oz = bz(588),
      pz = bz(1322),
      dz = bz(1197);
    const Fz = 6e5;
    class Zz extends Error {
      constructor() {
        super(...arguments), this.name = iz.discordLoginCancelledErrorName
      }
    }
    class Rz {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = nz.n[dz.c.clientEnvironment];
        const zz = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (uz => {
          var bz;
          if (uz.origin !== zz || "oauth_authentication_discord" !== (null === (bz = uz.data) || void 0 === bz ? void 0 : bz.type)) return;
          if ("string" !== typeof uz.data.code || !uz.data.code) return void this.failPopup(new Zz("Discord authentication was cancelled on Discord"));
          const Ez = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Ez || void 0 === Ez || Ez(uz.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(zz) {
        var uz;
        const bz = this.popupWindowPromiseReject;
        null === (uz = this.popupWindow) || void 0 === uz || uz.close(), this.resetPopupState(), null === bz || void 0 === bz || bz(zz)
      }
      openDiscordOAuthWindow() {
        const zz = dz.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${zz}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((zz, uz) => {
          pz.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((bz => {
            !0 === bz ? zz() : uz(new Zz("Discord login was cancelled"))
          })).catch(uz)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const zz = new Promise(((zz, uz) => {
          this.popupWindowPromiseResolve = zz, this.popupWindowPromiseReject = uz
        }));
        return this.popupWindowPromise = zz, Hz.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Fz), this.openPopup(zz).catch((uz => {
          this.popupWindowPromise === zz && this.failPopup(uz instanceof Error ? uz : new Error(String(uz)))
        })), zz
      }
      async openPopup(zz) {
        let uz = this.openDiscordOAuthWindow();
        if (!uz) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== zz) return;
          uz = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", uz), !uz) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = uz;
        const bz = window.setInterval((() => {
          uz.closed && this.popupWindowPromise === zz && (window.clearInterval(bz), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === zz && this.failPopup(new Zz("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = bz
      }
      async exchangeAuthorizationCodeForAccessToken(zz, uz) {
        const {
          accessToken: bz,
          refreshToken: Ez
        } = await Mz()((async () => await (0, iz.postJsonWithMetricsCookiesAndJsonResponse)(`${tz.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: zz,
          bloxdClientEnvironment: dz.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, uz.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Ez, this.bloxdDiscordRefreshTokenKey), Hz.c.setItem(this.bloxdDiscordRefreshTokenKey, Ez), bz
      }
      hasCurrentUser() {
        const zz = Hz.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Oz.F)(zz)
      }
      async getCurrentUser(zz) {
        const uz = Hz.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!uz) return null;
        let bz;
        try {
          const Ez = await Mz()((async () => {
            try {
              return await (0, iz.postJsonWithMetricsCookiesAndJsonResponse)(`${tz.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: uz
              }, {
                retries: 0
              }, zz.getMetricsCookies())
            } catch (bz) {
              if (Kz(bz)) throw new(Mz().AbortError)(bz);
              throw bz
            }
          }), {
            retries: 3
          });
          bz = Ez.accessToken, Hz.c.setItem(this.bloxdDiscordRefreshTokenKey, Ez.refreshToken)
        } catch (Ez) {
          return Kz(Ez) ? (Hz.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Ez), null)
        }
        return {
          accessToken: bz
        }
      }
      signOut() {
        this.failPopup(new Zz("Signed out of Discord during login")), Hz.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function Kz(zz) {
      return zz instanceof Ez.c && 435 === zz.httpCode
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);