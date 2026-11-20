export const id = 138;
export const ids = [138];
export const modules = {
  7728: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BloxdDiscordSDK: () => hU,
      DiscordLoginCancelledError: () => CU,
      discordPopupTimeoutMs: () => uU
    });
    var tU = gU(165),
      pU = gU(1223),
      EU = gU(1120),
      PU = gU(1135),
      TU = gU.n(PU),
      qU = gU(1196),
      KU = gU(34),
      cU = gU(581),
      GU = gU(1333),
      jU = gU(1203);
    const uU = 6e5;
    class CU extends Error {
      constructor() {
        super(...arguments), this.name = EU.discordLoginCancelledErrorName
      }
    }
    class hU {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = pU.p[jU.e.clientEnvironment];
        const UU = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (RU => {
          var gU;
          if (RU.origin !== UU || "oauth_authentication_discord" !== (null === (gU = RU.data) || void 0 === gU ? void 0 : gU.type)) return;
          if ("string" !== typeof RU.data.code || !RU.data.code) return void this.failPopup(new CU("Discord authentication was cancelled on Discord"));
          const tU = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === tU || void 0 === tU || tU(RU.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(UU) {
        var RU;
        const gU = this.popupWindowPromiseReject;
        null === (RU = this.popupWindow) || void 0 === RU || RU.close(), this.resetPopupState(), null === gU || void 0 === gU || gU(UU)
      }
      openDiscordOAuthWindow() {
        const UU = jU.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${UU}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((UU, RU) => {
          GU.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((gU => {
            !0 === gU ? UU() : RU(new CU("Discord login was cancelled"))
          })).catch(RU)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const UU = new Promise(((UU, RU) => {
          this.popupWindowPromiseResolve = UU, this.popupWindowPromiseReject = RU
        }));
        return this.popupWindowPromise = UU, KU.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), uU), this.openPopup(UU).catch((RU => {
          this.popupWindowPromise === UU && this.failPopup(RU instanceof Error ? RU : new Error(String(RU)))
        })), UU
      }
      async openPopup(UU) {
        let RU = this.openDiscordOAuthWindow();
        if (!RU) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== UU) return;
          RU = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", RU), !RU) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = RU;
        const gU = window.setInterval((() => {
          RU.closed && this.popupWindowPromise === UU && (window.clearInterval(gU), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === UU && this.failPopup(new CU("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = gU
      }
      async exchangeAuthorizationCodeForAccessToken(UU, RU) {
        const {
          accessToken: gU,
          refreshToken: tU
        } = await TU()((async () => await (0, EU.postJsonWithMetricsCookiesAndJsonResponse)(`${qU.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: UU,
          bloxdClientEnvironment: jU.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, RU.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", tU, this.bloxdDiscordRefreshTokenKey), KU.c.setItem(this.bloxdDiscordRefreshTokenKey, tU), gU
      }
      hasCurrentUser() {
        const UU = KU.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, cU.E)(UU)
      }
      async getCurrentUser(UU) {
        const RU = KU.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!RU) return null;
        let gU;
        try {
          const tU = await TU()((async () => {
            try {
              return await (0, EU.postJsonWithMetricsCookiesAndJsonResponse)(`${qU.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: RU
              }, {
                retries: 0
              }, UU.getMetricsCookies())
            } catch (gU) {
              if (QU(gU)) throw new(TU().AbortError)(gU);
              throw gU
            }
          }), {
            retries: 3
          });
          gU = tU.accessToken, KU.c.setItem(this.bloxdDiscordRefreshTokenKey, tU.refreshToken)
        } catch (tU) {
          return QU(tU) ? (KU.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", tU), null)
        }
        return {
          accessToken: gU
        }
      }
      signOut() {
        this.failPopup(new CU("Signed out of Discord during login")), KU.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function QU(UU) {
      return UU instanceof tU.e && 435 === UU.httpCode
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);