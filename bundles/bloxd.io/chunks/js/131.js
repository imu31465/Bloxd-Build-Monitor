export const id = 131;
export const ids = [131];
export const modules = {
  7406: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BloxdDiscordSDK: () => GJ,
      DiscordLoginCancelledError: () => nJ,
      discordPopupTimeoutMs: () => sJ
    });
    var FJ = ZJ(143),
      UJ = ZJ(1126),
      eJ = ZJ(1028),
      XJ = ZJ(1039),
      AJ = ZJ.n(XJ),
      qJ = ZJ(1098),
      jJ = ZJ(29),
      YJ = ZJ(535),
      hJ = ZJ(1247),
      DJ = ZJ(1106);
    const sJ = 6e5;
    class nJ extends Error {
      constructor() {
        super(...arguments), this.name = eJ.discordLoginCancelledErrorName
      }
    }
    class GJ {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = UJ.n[DJ.c.clientEnvironment];
        const JJ = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (cJ => {
          var ZJ;
          if (cJ.origin !== JJ || "oauth_authentication_discord" !== (null === (ZJ = cJ.data) || void 0 === ZJ ? void 0 : ZJ.type)) return;
          if ("string" !== typeof cJ.data.code || !cJ.data.code) return void this.failPopup(new nJ("Discord authentication was cancelled on Discord"));
          const FJ = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === FJ || void 0 === FJ || FJ(cJ.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(JJ) {
        var cJ;
        const ZJ = this.popupWindowPromiseReject;
        null === (cJ = this.popupWindow) || void 0 === cJ || cJ.close(), this.resetPopupState(), null === ZJ || void 0 === ZJ || ZJ(JJ)
      }
      openDiscordOAuthWindow() {
        const JJ = DJ.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${JJ}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((JJ, cJ) => {
          hJ.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((ZJ => {
            !0 === ZJ ? JJ() : cJ(new nJ("Discord login was cancelled"))
          })).catch(cJ)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const JJ = new Promise(((JJ, cJ) => {
          this.popupWindowPromiseResolve = JJ, this.popupWindowPromiseReject = cJ
        }));
        return this.popupWindowPromise = JJ, jJ.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), sJ), this.openPopup(JJ).catch((cJ => {
          this.popupWindowPromise === JJ && this.failPopup(cJ instanceof Error ? cJ : new Error(String(cJ)))
        })), JJ
      }
      async openPopup(JJ) {
        let cJ = this.openDiscordOAuthWindow();
        if (!cJ) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== JJ) return;
          cJ = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", cJ), !cJ) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = cJ;
        const ZJ = window.setInterval((() => {
          cJ.closed && this.popupWindowPromise === JJ && (window.clearInterval(ZJ), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === JJ && this.failPopup(new nJ("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = ZJ
      }
      async exchangeAuthorizationCodeForAccessToken(JJ, cJ) {
        const {
          accessToken: ZJ,
          refreshToken: FJ
        } = await AJ()((async () => await (0, eJ.postJsonWithMetricsCookiesAndJsonResponse)(`${qJ.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: JJ,
          bloxdClientEnvironment: DJ.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, cJ.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", FJ, this.bloxdDiscordRefreshTokenKey), jJ.c.setItem(this.bloxdDiscordRefreshTokenKey, FJ), ZJ
      }
      hasCurrentUser() {
        const JJ = jJ.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, YJ.P)(JJ)
      }
      async getCurrentUser(JJ) {
        const cJ = jJ.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!cJ) return null;
        let ZJ;
        try {
          const FJ = await AJ()((async () => {
            try {
              return await (0, eJ.postJsonWithMetricsCookiesAndJsonResponse)(`${qJ.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: cJ
              }, {
                retries: 0
              }, JJ.getMetricsCookies())
            } catch (ZJ) {
              if (fJ(ZJ)) throw new(AJ().AbortError)(ZJ);
              throw ZJ
            }
          }), {
            retries: 3
          });
          ZJ = FJ.accessToken, jJ.c.setItem(this.bloxdDiscordRefreshTokenKey, FJ.refreshToken)
        } catch (FJ) {
          return fJ(FJ) ? (jJ.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", FJ), null)
        }
        return {
          accessToken: ZJ
        }
      }
      signOut() {
        this.failPopup(new nJ("Signed out of Discord during login")), jJ.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function fJ(JJ) {
      return JJ instanceof FJ.b && 435 === JJ.httpCode
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);