export const id = 139;
export const ids = [139];
export const modules = {
  7525: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BloxdDiscordSDK: () => KT,
      DiscordLoginCancelledError: () => cT,
      discordPopupTimeoutMs: () => xT
    });
    var iT = IT(159),
      zT = IT(1199),
      kT = IT(1117),
      WT = IT(1129),
      XT = IT.n(WT),
      BT = IT(1183),
      FT = IT(26),
      ST = IT(618),
      DT = IT(1325),
      LT = IT(1185);
    const xT = 6e5;
    class cT extends Error {
      constructor() {
        super(...arguments), this.name = kT.discordLoginCancelledErrorName
      }
    }
    class KT {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = zT.t[LT.c.clientEnvironment];
        const TT = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (oT => {
          var IT;
          if (oT.origin !== TT || "oauth_authentication_discord" !== (null === (IT = oT.data) || void 0 === IT ? void 0 : IT.type)) return;
          if ("string" !== typeof oT.data.code || !oT.data.code) return void this.failPopup(new cT("Discord authentication was cancelled on Discord"));
          const iT = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === iT || void 0 === iT || iT(oT.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(TT) {
        var oT;
        const IT = this.popupWindowPromiseReject;
        null === (oT = this.popupWindow) || void 0 === oT || oT.close(), this.resetPopupState(), null === IT || void 0 === IT || IT(TT)
      }
      openDiscordOAuthWindow() {
        const TT = LT.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${TT}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((TT, oT) => {
          DT.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((IT => {
            !0 === IT ? TT() : oT(new cT("Discord login was cancelled"))
          })).catch(oT)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const TT = new Promise(((TT, oT) => {
          this.popupWindowPromiseResolve = TT, this.popupWindowPromiseReject = oT
        }));
        return this.popupWindowPromise = TT, FT.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), xT), this.openPopup(TT).catch((oT => {
          this.popupWindowPromise === TT && this.failPopup(oT instanceof Error ? oT : new Error(String(oT)))
        })), TT
      }
      async openPopup(TT) {
        let oT = this.openDiscordOAuthWindow();
        if (!oT) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== TT) return;
          oT = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", oT), !oT) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = oT;
        const IT = window.setInterval((() => {
          oT.closed && this.popupWindowPromise === TT && (window.clearInterval(IT), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === TT && this.failPopup(new cT("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = IT
      }
      async exchangeAuthorizationCodeForAccessToken(TT, oT) {
        const {
          accessToken: IT,
          refreshToken: iT
        } = await XT()((async () => await (0, kT.postJsonWithMetricsCookiesAndJsonResponse)(`${BT.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: TT,
          bloxdClientEnvironment: LT.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, oT.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", iT, this.bloxdDiscordRefreshTokenKey), FT.b.setItem(this.bloxdDiscordRefreshTokenKey, iT), IT
      }
      hasCurrentUser() {
        const TT = FT.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, ST.K)(TT)
      }
      async getCurrentUser(TT) {
        const oT = FT.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!oT) return null;
        let IT;
        try {
          const iT = await XT()((async () => {
            try {
              return await (0, kT.postJsonWithMetricsCookiesAndJsonResponse)(`${BT.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: oT
              }, {
                retries: 0
              }, TT.getMetricsCookies())
            } catch (IT) {
              if (MT(IT)) throw new(XT().AbortError)(IT);
              throw IT
            }
          }), {
            retries: 3
          });
          IT = iT.accessToken, FT.b.setItem(this.bloxdDiscordRefreshTokenKey, iT.refreshToken)
        } catch (iT) {
          return MT(iT) ? (FT.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", iT), null)
        }
        return {
          accessToken: IT
        }
      }
      signOut() {
        this.failPopup(new cT("Signed out of Discord during login")), FT.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function MT(TT) {
      return TT instanceof iT.d && 435 === TT.httpCode
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);