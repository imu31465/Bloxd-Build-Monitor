export const id = 148;
export const ids = [148];
export const modules = {
  8453: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BloxdDiscordSDK: () => BQ,
      DiscordLoginCancelledError: () => jQ,
      discordPopupTimeoutMs: () => IQ
    });
    var wQ = XQ(193),
      qQ = XQ(1263),
      TQ = XQ(1165),
      zQ = XQ(1186),
      sQ = XQ.n(zQ),
      FQ = XQ(1238),
      PQ = XQ(43),
      gQ = XQ(663),
      JQ = XQ(1404),
      rQ = XQ(1118);
    const IQ = 6e5;
    class jQ extends Error {
      constructor() {
        super(...arguments), this.name = TQ.discordLoginCancelledErrorName
      }
    }
    class BQ {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = qQ.p[rQ.d.clientEnvironment];
        const QQ = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (WQ => {
          var XQ;
          if (WQ.origin !== QQ || "oauth_authentication_discord" !== (null === (XQ = WQ.data) || void 0 === XQ ? void 0 : XQ.type)) return;
          if ("string" !== typeof WQ.data.code || !WQ.data.code) return void this.failPopup(new jQ("Discord authentication was cancelled on Discord"));
          const wQ = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === wQ || void 0 === wQ || wQ(WQ.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(QQ) {
        var WQ;
        const XQ = this.popupWindowPromiseReject;
        null === (WQ = this.popupWindow) || void 0 === WQ || WQ.close(), this.resetPopupState(), null === XQ || void 0 === XQ || XQ(QQ)
      }
      openDiscordOAuthWindow() {
        const QQ = rQ.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${QQ}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((QQ, WQ) => {
          JQ.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((XQ => {
            !0 === XQ ? QQ() : WQ(new jQ("Discord login was cancelled"))
          })).catch(WQ)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const QQ = new Promise(((QQ, WQ) => {
          this.popupWindowPromiseResolve = QQ, this.popupWindowPromiseReject = WQ
        }));
        return this.popupWindowPromise = QQ, PQ.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), IQ), this.openPopup(QQ).catch((WQ => {
          this.popupWindowPromise === QQ && this.failPopup(WQ instanceof Error ? WQ : new Error(String(WQ)))
        })), QQ
      }
      async openPopup(QQ) {
        let WQ = this.openDiscordOAuthWindow();
        if (!WQ) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== QQ) return;
          WQ = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", WQ), !WQ) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = WQ;
        const XQ = window.setInterval((() => {
          WQ.closed && this.popupWindowPromise === QQ && (window.clearInterval(XQ), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === QQ && this.failPopup(new jQ("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = XQ
      }
      async exchangeAuthorizationCodeForAccessToken(QQ, WQ) {
        const {
          accessToken: XQ,
          refreshToken: wQ
        } = await sQ()((async () => await (0, TQ.postJsonWithMetricsCookiesAndJsonResponse)(`${FQ.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: QQ,
          bloxdClientEnvironment: rQ.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, WQ.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", wQ, this.bloxdDiscordRefreshTokenKey), PQ.b.setItem(this.bloxdDiscordRefreshTokenKey, wQ), XQ
      }
      hasCurrentUser() {
        const QQ = PQ.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, gQ.G)(QQ)
      }
      async getCurrentUser(QQ) {
        const WQ = PQ.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!WQ) return null;
        let XQ;
        try {
          const wQ = await sQ()((async () => {
            try {
              return await (0, TQ.postJsonWithMetricsCookiesAndJsonResponse)(`${FQ.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: WQ
              }, {
                retries: 0
              }, QQ.getMetricsCookies())
            } catch (XQ) {
              if (yQ(XQ)) throw new(sQ().AbortError)(XQ);
              throw XQ
            }
          }), {
            retries: 3
          });
          XQ = wQ.accessToken, PQ.b.setItem(this.bloxdDiscordRefreshTokenKey, wQ.refreshToken)
        } catch (wQ) {
          return yQ(wQ) ? (PQ.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", wQ), null)
        }
        return {
          accessToken: XQ
        }
      }
      signOut() {
        this.failPopup(new jQ("Signed out of Discord during login")), PQ.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function yQ(QQ) {
      return QQ instanceof wQ.b && 435 === QQ.httpCode
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);