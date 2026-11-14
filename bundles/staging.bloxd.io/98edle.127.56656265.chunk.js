export const id = 127;
export const ids = [127];
export const modules = {
  7012: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BloxdDiscordSDK: () => iR,
      DiscordLoginCancelledError: () => gR,
      discordPopupTimeoutMs: () => TW
    });
    var wW = MW(156),
      CW = MW(1057),
      zR = MW(975),
      AW = MW(988),
      bR = MW.n(AW),
      yR = MW(1033),
      NW = MW(50),
      eW = MW(564),
      BW = MW(1166),
      tR = MW(1041);
    const TW = 6e5;
    class gR extends Error {
      constructor() {
        super(...arguments), this.name = zR.discordLoginCancelledErrorName
      }
    }
    class iR {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = CW.g[tR.c.clientEnvironment];
        const WW = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (RW => {
          var MW;
          if (RW.origin !== WW || "oauth_authentication_discord" !== (null === (MW = RW.data) || void 0 === MW ? void 0 : MW.type)) return;
          if ("string" !== typeof RW.data.code || !RW.data.code) return void this.failPopup(new gR("Discord authentication was cancelled on Discord"));
          const wW = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === wW || void 0 === wW || wW(RW.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(WW) {
        var RW;
        const MW = this.popupWindowPromiseReject;
        null === (RW = this.popupWindow) || void 0 === RW || RW.close(), this.resetPopupState(), null === MW || void 0 === MW || MW(WW)
      }
      openDiscordOAuthWindow() {
        const WW = tR.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${WW}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((WW, RW) => {
          BW.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((MW => {
            MW ? WW() : RW(new gR("Discord login was cancelled"))
          })).catch(RW)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const WW = new Promise(((WW, RW) => {
          this.popupWindowPromiseResolve = WW, this.popupWindowPromiseReject = RW
        }));
        return this.popupWindowPromise = WW, NW.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), TW), this.openPopup(WW).catch((RW => {
          this.popupWindowPromise === WW && this.failPopup(RW instanceof Error ? RW : new Error(String(RW)))
        })), WW
      }
      async openPopup(WW) {
        let RW = this.openDiscordOAuthWindow();
        if (!RW) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== WW) return;
          RW = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", RW), !RW) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = RW;
        const MW = window.setInterval((() => {
          RW.closed && this.popupWindowPromise === WW && (window.clearInterval(MW), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === WW && this.failPopup(new gR("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = MW
      }
      async exchangeAuthorizationCodeForAccessToken(WW, RW) {
        const {
          accessToken: MW,
          refreshToken: wW
        } = await bR()((async () => await (0, zR.postJsonWithMetricsCookiesAndJsonResponse)(`${yR.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: WW,
          bloxdClientEnvironment: tR.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, RW.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", wW, this.bloxdDiscordRefreshTokenKey), NW.b.setItem(this.bloxdDiscordRefreshTokenKey, wW), MW
      }
      hasCurrentUser() {
        const WW = NW.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, eW.S)(WW)
      }
      async getCurrentUser(WW) {
        const RW = NW.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!RW) return null;
        let MW;
        try {
          const wW = await bR()((async () => {
            try {
              return await (0, zR.postJsonWithMetricsCookiesAndJsonResponse)(`${yR.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: RW
              }, {
                retries: 0
              }, WW.getMetricsCookies())
            } catch (MW) {
              if (YW(MW)) throw new(bR().AbortError)(MW);
              throw MW
            }
          }), {
            retries: 3
          });
          MW = wW.accessToken, NW.b.setItem(this.bloxdDiscordRefreshTokenKey, wW.refreshToken)
        } catch (wW) {
          return YW(wW) ? (NW.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", wW), null)
        }
        return {
          accessToken: MW
        }
      }
      signOut() {
        this.failPopup(new gR("Signed out of Discord during login")), NW.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function YW(WW) {
      return WW instanceof wW.d && 435 === WW.httpCode
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);