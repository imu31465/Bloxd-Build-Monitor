export const id = 138;
export const ids = [138];
export const modules = {
  7602: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BloxdDiscordSDK: () => Dz,
      DiscordLoginCancelledError: () => wz,
      discordPopupTimeoutMs: () => bz
    });
    var Fz = sz(161),
      Wz = sz(1215),
      Xz = sz(1120),
      Oz = sz(1137),
      oz = sz.n(Oz),
      vz = sz(1191),
      Uz = sz(44),
      Kz = sz(580),
      uz = sz(1319),
      Nz = sz(1198);
    const bz = 6e5;
    class wz extends Error {
      constructor() {
        super(...arguments), this.name = Xz.discordLoginCancelledErrorName
      }
    }
    class Dz {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Wz.p[Nz.c.clientEnvironment];
        const zz = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (tz => {
          var sz;
          if (tz.origin !== zz || "oauth_authentication_discord" !== (null === (sz = tz.data) || void 0 === sz ? void 0 : sz.type)) return;
          if ("string" !== typeof tz.data.code || !tz.data.code) return void this.failPopup(new wz("Discord authentication was cancelled on Discord"));
          const Fz = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Fz || void 0 === Fz || Fz(tz.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(zz) {
        var tz;
        const sz = this.popupWindowPromiseReject;
        null === (tz = this.popupWindow) || void 0 === tz || tz.close(), this.resetPopupState(), null === sz || void 0 === sz || sz(zz)
      }
      openDiscordOAuthWindow() {
        const zz = Nz.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${zz}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((zz, tz) => {
          uz.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((sz => {
            !0 === sz ? zz() : tz(new wz("Discord login was cancelled"))
          })).catch(tz)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const zz = new Promise(((zz, tz) => {
          this.popupWindowPromiseResolve = zz, this.popupWindowPromiseReject = tz
        }));
        return this.popupWindowPromise = zz, Uz.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), bz), this.openPopup(zz).catch((tz => {
          this.popupWindowPromise === zz && this.failPopup(tz instanceof Error ? tz : new Error(String(tz)))
        })), zz
      }
      async openPopup(zz) {
        let tz = this.openDiscordOAuthWindow();
        if (!tz) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== zz) return;
          tz = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", tz), !tz) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = tz;
        const sz = window.setInterval((() => {
          tz.closed && this.popupWindowPromise === zz && (window.clearInterval(sz), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === zz && this.failPopup(new wz("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = sz
      }
      async exchangeAuthorizationCodeForAccessToken(zz, tz) {
        const {
          accessToken: sz,
          refreshToken: Fz
        } = await oz()((async () => await (0, Xz.postJsonWithMetricsCookiesAndJsonResponse)(`${vz.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: zz,
          bloxdClientEnvironment: Nz.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, tz.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Fz, this.bloxdDiscordRefreshTokenKey), Uz.d.setItem(this.bloxdDiscordRefreshTokenKey, Fz), sz
      }
      hasCurrentUser() {
        const zz = Uz.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Kz.G)(zz)
      }
      async getCurrentUser(zz) {
        const tz = Uz.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!tz) return null;
        let sz;
        try {
          const Fz = await oz()((async () => {
            try {
              return await (0, Xz.postJsonWithMetricsCookiesAndJsonResponse)(`${vz.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: tz
              }, {
                retries: 0
              }, zz.getMetricsCookies())
            } catch (sz) {
              if (gz(sz)) throw new(oz().AbortError)(sz);
              throw sz
            }
          }), {
            retries: 3
          });
          sz = Fz.accessToken, Uz.d.setItem(this.bloxdDiscordRefreshTokenKey, Fz.refreshToken)
        } catch (Fz) {
          return gz(Fz) ? (Uz.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Fz), null)
        }
        return {
          accessToken: sz
        }
      }
      signOut() {
        this.failPopup(new wz("Signed out of Discord during login")), Uz.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function gz(zz) {
      return zz instanceof Fz.e && 435 === zz.httpCode
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);