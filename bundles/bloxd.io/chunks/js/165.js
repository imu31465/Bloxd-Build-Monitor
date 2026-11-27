export const id = 165;
export const ids = [165];
export const modules = {
  7834: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BloxdDiscordSDK: () => aR,
      DiscordLoginCancelledError: () => eR,
      discordPopupTimeoutMs: () => rR
    });
    var yR = GR(163),
      tR = GR(1322),
      uR = GR(1201),
      ZR = GR(1218),
      qR = GR.n(ZR),
      iR = GR(1282),
      fR = GR(46),
      VR = GR(679),
      KR = GR(1493),
      wR = GR(1287);
    const rR = 6e5;
    class eR extends Error {
      constructor() {
        super(...arguments), this.name = uR.discordLoginCancelledErrorName
      }
    }
    class aR {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = tR.p[wR.e.clientEnvironment];
        const RR = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (JR => {
          var GR;
          if (JR.origin !== RR || "oauth_authentication_discord" !== (null === (GR = JR.data) || void 0 === GR ? void 0 : GR.type)) return;
          if ("string" !== typeof JR.data.code || !JR.data.code) return void this.failPopup(new eR("Discord authentication was cancelled on Discord"));
          const yR = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === yR || void 0 === yR || yR(JR.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(RR) {
        var JR;
        const GR = this.popupWindowPromiseReject;
        null === (JR = this.popupWindow) || void 0 === JR || JR.close(), this.resetPopupState(), null === GR || void 0 === GR || GR(RR)
      }
      openDiscordOAuthWindow() {
        const RR = wR.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${RR}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((RR, JR) => {
          KR.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((GR => {
            !0 === GR ? RR() : JR(new eR("Discord login was cancelled"))
          })).catch(JR)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const RR = new Promise(((RR, JR) => {
          this.popupWindowPromiseResolve = RR, this.popupWindowPromiseReject = JR
        }));
        return this.popupWindowPromise = RR, fR.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), rR), this.openPopup(RR).catch((JR => {
          this.popupWindowPromise === RR && this.failPopup(JR instanceof Error ? JR : new Error(String(JR)))
        })), RR
      }
      async openPopup(RR) {
        let JR = this.openDiscordOAuthWindow();
        if (!JR) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== RR) return;
          JR = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", JR), !JR) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = JR;
        const GR = window.setInterval((() => {
          JR.closed && this.popupWindowPromise === RR && (window.clearInterval(GR), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === RR && this.failPopup(new eR("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = GR
      }
      async exchangeAuthorizationCodeForAccessToken(RR, JR) {
        const {
          accessToken: GR,
          refreshToken: yR
        } = await qR()((async () => await (0, uR.postJsonWithMetricsCookiesAndJsonResponse)(`${iR.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: RR,
          bloxdClientEnvironment: wR.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, JR.getMetricsCookies())), {
          retries: 3
        });
        return fR.e.setItem(this.bloxdDiscordRefreshTokenKey, yR), GR
      }
      hasCurrentUser() {
        const RR = fR.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, VR.I)(RR)
      }
      async getCurrentUser(RR) {
        const JR = fR.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!JR) return null;
        let GR;
        try {
          const yR = await qR()((async () => {
            try {
              return await (0, uR.postJsonWithMetricsCookiesAndJsonResponse)(`${iR.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: JR
              }, {
                retries: 0
              }, RR.getMetricsCookies())
            } catch (GR) {
              if (LR(GR)) throw new(qR().AbortError)(GR);
              throw GR
            }
          }), {
            retries: 3
          });
          GR = yR.accessToken, fR.e.setItem(this.bloxdDiscordRefreshTokenKey, yR.refreshToken)
        } catch (yR) {
          return LR(yR) ? (fR.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", yR), null)
        }
        return {
          accessToken: GR
        }
      }
      signOut() {
        this.failPopup(new eR("Signed out of Discord during login")), fR.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function LR(RR) {
      return RR instanceof yR.d && 435 === RR.httpCode
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);