export const id = 156;
export const ids = [156];
export const modules = {
  7294: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BloxdDiscordSDK: () => aU,
      DiscordLoginCancelledError: () => pU,
      discordPopupTimeoutMs: () => IU
    });
    var cU = zU(173),
      yU = zU(1241),
      QU = zU(1131),
      AU = zU(1151),
      FU = zU.n(AU),
      oU = zU(1203),
      DU = zU(42),
      EU = zU(646),
      YU = zU(1410),
      NU = zU(1211);
    const IU = 6e5;
    class pU extends Error {
      constructor() {
        super(...arguments), this.name = QU.discordLoginCancelledErrorName
      }
    }
    class aU {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = yU.p[NU.d.clientEnvironment];
        const UU = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (XU => {
          var zU;
          if (XU.origin !== UU || "oauth_authentication_discord" !== (null === (zU = XU.data) || void 0 === zU ? void 0 : zU.type)) return;
          if ("string" !== typeof XU.data.code || !XU.data.code) return void this.failPopup(new pU("Discord authentication was cancelled on Discord"));
          const cU = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === cU || void 0 === cU || cU(XU.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(UU) {
        var XU;
        const zU = this.popupWindowPromiseReject;
        null === (XU = this.popupWindow) || void 0 === XU || XU.close(), this.resetPopupState(), null === zU || void 0 === zU || zU(UU)
      }
      openDiscordOAuthWindow() {
        const UU = NU.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${UU}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((UU, XU) => {
          YU.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((zU => {
            !0 === zU ? UU() : XU(new pU("Discord login was cancelled"))
          })).catch(XU)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const UU = new Promise(((UU, XU) => {
          this.popupWindowPromiseResolve = UU, this.popupWindowPromiseReject = XU
        }));
        return this.popupWindowPromise = UU, DU.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), IU), this.openPopup(UU).catch((XU => {
          this.popupWindowPromise === UU && this.failPopup(XU instanceof Error ? XU : new Error(String(XU)))
        })), UU
      }
      async openPopup(UU) {
        let XU = this.openDiscordOAuthWindow();
        if (!XU) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== UU) return;
          XU = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", XU), !XU) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = XU;
        const zU = window.setInterval((() => {
          XU.closed && this.popupWindowPromise === UU && (window.clearInterval(zU), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === UU && this.failPopup(new pU("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = zU
      }
      async exchangeAuthorizationCodeForAccessToken(UU, XU) {
        const {
          accessToken: zU,
          refreshToken: cU
        } = await FU()((async () => await (0, QU.postJsonWithMetricsCookiesAndJsonResponse)(`${oU.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: UU,
          bloxdClientEnvironment: NU.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, XU.getMetricsCookies())), {
          retries: 3
        });
        return DU.c.setItem(this.bloxdDiscordRefreshTokenKey, cU), zU
      }
      hasCurrentUser() {
        const UU = DU.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, EU.P)(UU)
      }
      async getCurrentUser(UU) {
        const XU = DU.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!XU) return null;
        let zU;
        try {
          const cU = await FU()((async () => {
            try {
              return await (0, QU.postJsonWithMetricsCookiesAndJsonResponse)(`${oU.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: XU
              }, {
                retries: 0
              }, UU.getMetricsCookies())
            } catch (zU) {
              if (tU(zU)) throw new(FU().AbortError)(zU);
              throw zU
            }
          }), {
            retries: 3
          });
          zU = cU.accessToken, DU.c.setItem(this.bloxdDiscordRefreshTokenKey, cU.refreshToken)
        } catch (cU) {
          return tU(cU) ? (DU.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", cU), null)
        }
        return {
          accessToken: zU
        }
      }
      signOut() {
        this.failPopup(new pU("Signed out of Discord during login")), DU.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function tU(UU) {
      return UU instanceof cU.e && 435 === UU.httpCode
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);