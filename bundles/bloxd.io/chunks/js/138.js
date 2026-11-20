export const id = 138;
export const ids = [138];
export const modules = {
  8107: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BloxdDiscordSDK: () => tT,
      DiscordLoginCancelledError: () => vT,
      discordPopupTimeoutMs: () => jT
    });
    var lT = cT(184),
      MT = cT(1235),
      KT = cT(1136),
      OT = cT(1154),
      yT = cT.n(OT),
      fT = cT(1202),
      xT = cT(47),
      IT = cT(617),
      AT = cT(1363),
      CT = cT(1210);
    const jT = 6e5;
    class vT extends Error {
      constructor() {
        super(...arguments), this.name = KT.discordLoginCancelledErrorName
      }
    }
    class tT {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = MT.l[CT.c.clientEnvironment];
        const TT = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (kT => {
          var cT;
          if (kT.origin !== TT || "oauth_authentication_discord" !== (null === (cT = kT.data) || void 0 === cT ? void 0 : cT.type)) return;
          if ("string" !== typeof kT.data.code || !kT.data.code) return void this.failPopup(new vT("Discord authentication was cancelled on Discord"));
          const lT = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === lT || void 0 === lT || lT(kT.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(TT) {
        var kT;
        const cT = this.popupWindowPromiseReject;
        null === (kT = this.popupWindow) || void 0 === kT || kT.close(), this.resetPopupState(), null === cT || void 0 === cT || cT(TT)
      }
      openDiscordOAuthWindow() {
        const TT = CT.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${TT}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((TT, kT) => {
          AT.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((cT => {
            !0 === cT ? TT() : kT(new vT("Discord login was cancelled"))
          })).catch(kT)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const TT = new Promise(((TT, kT) => {
          this.popupWindowPromiseResolve = TT, this.popupWindowPromiseReject = kT
        }));
        return this.popupWindowPromise = TT, xT.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), jT), this.openPopup(TT).catch((kT => {
          this.popupWindowPromise === TT && this.failPopup(kT instanceof Error ? kT : new Error(String(kT)))
        })), TT
      }
      async openPopup(TT) {
        let kT = this.openDiscordOAuthWindow();
        if (!kT) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== TT) return;
          kT = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", kT), !kT) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = kT;
        const cT = window.setInterval((() => {
          kT.closed && this.popupWindowPromise === TT && (window.clearInterval(cT), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === TT && this.failPopup(new vT("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = cT
      }
      async exchangeAuthorizationCodeForAccessToken(TT, kT) {
        const {
          accessToken: cT,
          refreshToken: lT
        } = await yT()((async () => await (0, KT.postJsonWithMetricsCookiesAndJsonResponse)(`${fT.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: TT,
          bloxdClientEnvironment: CT.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, kT.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", lT, this.bloxdDiscordRefreshTokenKey), xT.c.setItem(this.bloxdDiscordRefreshTokenKey, lT), cT
      }
      hasCurrentUser() {
        const TT = xT.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, IT.R)(TT)
      }
      async getCurrentUser(TT) {
        const kT = xT.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!kT) return null;
        let cT;
        try {
          const lT = await yT()((async () => {
            try {
              return await (0, KT.postJsonWithMetricsCookiesAndJsonResponse)(`${fT.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: kT
              }, {
                retries: 0
              }, TT.getMetricsCookies())
            } catch (cT) {
              if (hT(cT)) throw new(yT().AbortError)(cT);
              throw cT
            }
          }), {
            retries: 3
          });
          cT = lT.accessToken, xT.c.setItem(this.bloxdDiscordRefreshTokenKey, lT.refreshToken)
        } catch (lT) {
          return hT(lT) ? (xT.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", lT), null)
        }
        return {
          accessToken: cT
        }
      }
      signOut() {
        this.failPopup(new vT("Signed out of Discord during login")), xT.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function hT(TT) {
      return TT instanceof lT.c && 435 === TT.httpCode
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);