export const id = 138;
export const ids = [138];
export const modules = {
  7777: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BloxdDiscordSDK: () => ZD,
      DiscordLoginCancelledError: () => tD,
      discordPopupTimeoutMs: () => MD
    });
    var ID = cD(162),
      pD = cD(1227),
      iD = cD(1127),
      fD = cD(1147),
      bD = cD.n(fD),
      QD = cD(1199),
      wD = cD(36),
      SD = cD(624),
      BD = cD(1340),
      yD = cD(1202);
    const MD = 6e5;
    class tD extends Error {
      constructor() {
        super(...arguments), this.name = iD.discordLoginCancelledErrorName
      }
    }
    class ZD {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = pD.l[yD.d.clientEnvironment];
        const DD = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (CD => {
          var cD;
          if (CD.origin !== DD || "oauth_authentication_discord" !== (null === (cD = CD.data) || void 0 === cD ? void 0 : cD.type)) return;
          if ("string" !== typeof CD.data.code || !CD.data.code) return void this.failPopup(new tD("Discord authentication was cancelled on Discord"));
          const ID = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === ID || void 0 === ID || ID(CD.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(DD) {
        var CD;
        const cD = this.popupWindowPromiseReject;
        null === (CD = this.popupWindow) || void 0 === CD || CD.close(), this.resetPopupState(), null === cD || void 0 === cD || cD(DD)
      }
      openDiscordOAuthWindow() {
        const DD = yD.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${DD}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((DD, CD) => {
          BD.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((cD => {
            !0 === cD ? DD() : CD(new tD("Discord login was cancelled"))
          })).catch(CD)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const DD = new Promise(((DD, CD) => {
          this.popupWindowPromiseResolve = DD, this.popupWindowPromiseReject = CD
        }));
        return this.popupWindowPromise = DD, wD.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), MD), this.openPopup(DD).catch((CD => {
          this.popupWindowPromise === DD && this.failPopup(CD instanceof Error ? CD : new Error(String(CD)))
        })), DD
      }
      async openPopup(DD) {
        let CD = this.openDiscordOAuthWindow();
        if (!CD) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== DD) return;
          CD = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", CD), !CD) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = CD;
        const cD = window.setInterval((() => {
          CD.closed && this.popupWindowPromise === DD && (window.clearInterval(cD), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === DD && this.failPopup(new tD("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = cD
      }
      async exchangeAuthorizationCodeForAccessToken(DD, CD) {
        const {
          accessToken: cD,
          refreshToken: ID
        } = await bD()((async () => await (0, iD.postJsonWithMetricsCookiesAndJsonResponse)(`${QD.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: DD,
          bloxdClientEnvironment: yD.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, CD.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", ID, this.bloxdDiscordRefreshTokenKey), wD.c.setItem(this.bloxdDiscordRefreshTokenKey, ID), cD
      }
      hasCurrentUser() {
        const DD = wD.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, SD.C)(DD)
      }
      async getCurrentUser(DD) {
        const CD = wD.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!CD) return null;
        let cD;
        try {
          const ID = await bD()((async () => {
            try {
              return await (0, iD.postJsonWithMetricsCookiesAndJsonResponse)(`${QD.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: CD
              }, {
                retries: 0
              }, DD.getMetricsCookies())
            } catch (cD) {
              if (oD(cD)) throw new(bD().AbortError)(cD);
              throw cD
            }
          }), {
            retries: 3
          });
          cD = ID.accessToken, wD.c.setItem(this.bloxdDiscordRefreshTokenKey, ID.refreshToken)
        } catch (ID) {
          return oD(ID) ? (wD.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", ID), null)
        }
        return {
          accessToken: cD
        }
      }
      signOut() {
        this.failPopup(new tD("Signed out of Discord during login")), wD.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function oD(DD) {
      return DD instanceof ID.d && 435 === DD.httpCode
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);