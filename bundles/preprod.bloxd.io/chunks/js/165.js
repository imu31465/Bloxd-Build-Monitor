export const id = 165;
export const ids = [165];
export const modules = {
  7699: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BloxdDiscordSDK: () => bW,
      DiscordLoginCancelledError: () => AW,
      discordPopupTimeoutMs: () => lW
    });
    var mW = OW(154),
      EW = OW(1220),
      NW = OW(1111),
      PW = OW(1126),
      LW = OW.n(PW),
      cW = OW(1185),
      wW = OW(39),
      tW = OW(643),
      ZW = OW(1422),
      xW = OW(1189);
    const lW = 6e5;
    class AW extends Error {
      constructor() {
        super(...arguments), this.name = NW.discordLoginCancelledErrorName
      }
    }
    class bW {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = EW.m[xW.d.clientEnvironment];
        const WW = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (iW => {
          var OW;
          if (iW.origin !== WW || "oauth_authentication_discord" !== (null === (OW = iW.data) || void 0 === OW ? void 0 : OW.type)) return;
          if ("string" !== typeof iW.data.code || !iW.data.code) return void this.failPopup(new AW("Discord authentication was cancelled on Discord"));
          const mW = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === mW || void 0 === mW || mW(iW.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(WW) {
        var iW;
        const OW = this.popupWindowPromiseReject;
        null === (iW = this.popupWindow) || void 0 === iW || iW.close(), this.resetPopupState(), null === OW || void 0 === OW || OW(WW)
      }
      openDiscordOAuthWindow() {
        const WW = xW.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${WW}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((WW, iW) => {
          ZW.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((OW => {
            !0 === OW ? WW() : iW(new AW("Discord login was cancelled"))
          })).catch(iW)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const WW = new Promise(((WW, iW) => {
          this.popupWindowPromiseResolve = WW, this.popupWindowPromiseReject = iW
        }));
        return this.popupWindowPromise = WW, wW.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), lW), this.openPopup(WW).catch((iW => {
          this.popupWindowPromise === WW && this.failPopup(iW instanceof Error ? iW : new Error(String(iW)))
        })), WW
      }
      async openPopup(WW) {
        let iW = this.openDiscordOAuthWindow();
        if (!iW) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== WW) return;
          iW = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", iW), !iW) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = iW;
        const OW = window.setInterval((() => {
          iW.closed && this.popupWindowPromise === WW && (window.clearInterval(OW), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === WW && this.failPopup(new AW("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = OW
      }
      async exchangeAuthorizationCodeForAccessToken(WW, iW) {
        const {
          accessToken: OW,
          refreshToken: mW
        } = await LW()((async () => await (0, NW.postJsonWithMetricsCookiesAndJsonResponse)(`${cW.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: WW,
          bloxdClientEnvironment: xW.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, iW.getMetricsCookies())), {
          retries: 3
        });
        return wW.e.setItem(this.bloxdDiscordRefreshTokenKey, mW), OW
      }
      hasCurrentUser() {
        const WW = wW.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, tW.K)(WW)
      }
      async getCurrentUser(WW) {
        const iW = wW.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!iW) return null;
        let OW;
        try {
          const mW = await LW()((async () => {
            try {
              return await (0, NW.postJsonWithMetricsCookiesAndJsonResponse)(`${cW.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: iW
              }, {
                retries: 0
              }, WW.getMetricsCookies())
            } catch (OW) {
              if (jW(OW)) throw new(LW().AbortError)(OW);
              throw OW
            }
          }), {
            retries: 3
          });
          OW = mW.accessToken, wW.e.setItem(this.bloxdDiscordRefreshTokenKey, mW.refreshToken)
        } catch (mW) {
          return jW(mW) ? (wW.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", mW), null)
        }
        return {
          accessToken: OW
        }
      }
      signOut() {
        this.failPopup(new AW("Signed out of Discord during login")), wW.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function jW(WW) {
      return WW instanceof mW.c && 435 === WW.httpCode
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);