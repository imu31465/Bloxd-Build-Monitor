export const id = 139;
export const ids = [139];
export const modules = {
  7881: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BloxdDiscordSDK: () => AQ,
      DiscordLoginCancelledError: () => xQ,
      discordPopupTimeoutMs: () => YQ
    });
    var LQ = wQ(160),
      qQ = wQ(1243),
      oQ = wQ(1147),
      DQ = wQ(1158),
      kQ = wQ.n(DQ),
      vQ = wQ(1213),
      mQ = wQ(27),
      uQ = wQ(619),
      HQ = wQ(1362),
      bQ = wQ(1221);
    const YQ = 6e5;
    class xQ extends Error {
      constructor() {
        super(...arguments), this.name = oQ.discordLoginCancelledErrorName
      }
    }
    class AQ {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = qQ.q[bQ.d.clientEnvironment];
        const QQ = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (FQ => {
          var wQ;
          if (FQ.origin !== QQ || "oauth_authentication_discord" !== (null === (wQ = FQ.data) || void 0 === wQ ? void 0 : wQ.type)) return;
          if ("string" !== typeof FQ.data.code || !FQ.data.code) return void this.failPopup(new xQ("Discord authentication was cancelled on Discord"));
          const LQ = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === LQ || void 0 === LQ || LQ(FQ.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(QQ) {
        var FQ;
        const wQ = this.popupWindowPromiseReject;
        null === (FQ = this.popupWindow) || void 0 === FQ || FQ.close(), this.resetPopupState(), null === wQ || void 0 === wQ || wQ(QQ)
      }
      openDiscordOAuthWindow() {
        const QQ = bQ.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${QQ}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((QQ, FQ) => {
          HQ.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((wQ => {
            !0 === wQ ? QQ() : FQ(new xQ("Discord login was cancelled"))
          })).catch(FQ)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const QQ = new Promise(((QQ, FQ) => {
          this.popupWindowPromiseResolve = QQ, this.popupWindowPromiseReject = FQ
        }));
        return this.popupWindowPromise = QQ, mQ.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), YQ), this.openPopup(QQ).catch((FQ => {
          this.popupWindowPromise === QQ && this.failPopup(FQ instanceof Error ? FQ : new Error(String(FQ)))
        })), QQ
      }
      async openPopup(QQ) {
        let FQ = this.openDiscordOAuthWindow();
        if (!FQ) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== QQ) return;
          FQ = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", FQ), !FQ) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = FQ;
        const wQ = window.setInterval((() => {
          FQ.closed && this.popupWindowPromise === QQ && (window.clearInterval(wQ), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === QQ && this.failPopup(new xQ("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = wQ
      }
      async exchangeAuthorizationCodeForAccessToken(QQ, FQ) {
        const {
          accessToken: wQ,
          refreshToken: LQ
        } = await kQ()((async () => await (0, oQ.postJsonWithMetricsCookiesAndJsonResponse)(`${vQ.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: QQ,
          bloxdClientEnvironment: bQ.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, FQ.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", LQ, this.bloxdDiscordRefreshTokenKey), mQ.d.setItem(this.bloxdDiscordRefreshTokenKey, LQ), wQ
      }
      hasCurrentUser() {
        const QQ = mQ.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, uQ.F)(QQ)
      }
      async getCurrentUser(QQ) {
        const FQ = mQ.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!FQ) return null;
        let wQ;
        try {
          const LQ = await kQ()((async () => {
            try {
              return await (0, oQ.postJsonWithMetricsCookiesAndJsonResponse)(`${vQ.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: FQ
              }, {
                retries: 0
              }, QQ.getMetricsCookies())
            } catch (wQ) {
              if (tQ(wQ)) throw new(kQ().AbortError)(wQ);
              throw wQ
            }
          }), {
            retries: 3
          });
          wQ = LQ.accessToken, mQ.d.setItem(this.bloxdDiscordRefreshTokenKey, LQ.refreshToken)
        } catch (LQ) {
          return tQ(LQ) ? (mQ.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", LQ), null)
        }
        return {
          accessToken: wQ
        }
      }
      signOut() {
        this.failPopup(new xQ("Signed out of Discord during login")), mQ.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function tQ(QQ) {
      return QQ instanceof LQ.d && 435 === QQ.httpCode
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);