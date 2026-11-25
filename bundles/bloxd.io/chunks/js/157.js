export const id = 157;
export const ids = [157];
export const modules = {
  7167: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BloxdDiscordSDK: () => JM,
      DiscordLoginCancelledError: () => hM,
      discordPopupTimeoutMs: () => HM
    });
    var OM = iM(143),
      SM = iM(1232),
      jM = iM(1144),
      aM = iM(1154),
      PM = iM.n(aM),
      nM = iM(1202),
      QM = iM(30),
      zM = iM(625),
      LM = iM(1429),
      mM = iM(1211);
    const HM = 6e5;
    class hM extends Error {
      constructor() {
        super(...arguments), this.name = jM.discordLoginCancelledErrorName
      }
    }
    class JM {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = SM.o[mM.e.clientEnvironment];
        const MM = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (rM => {
          var iM;
          if (rM.origin !== MM || "oauth_authentication_discord" !== (null === (iM = rM.data) || void 0 === iM ? void 0 : iM.type)) return;
          if ("string" !== typeof rM.data.code || !rM.data.code) return void this.failPopup(new hM("Discord authentication was cancelled on Discord"));
          const OM = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === OM || void 0 === OM || OM(rM.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(MM) {
        var rM;
        const iM = this.popupWindowPromiseReject;
        null === (rM = this.popupWindow) || void 0 === rM || rM.close(), this.resetPopupState(), null === iM || void 0 === iM || iM(MM)
      }
      openDiscordOAuthWindow() {
        const MM = mM.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${MM}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((MM, rM) => {
          LM.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((iM => {
            !0 === iM ? MM() : rM(new hM("Discord login was cancelled"))
          })).catch(rM)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const MM = new Promise(((MM, rM) => {
          this.popupWindowPromiseResolve = MM, this.popupWindowPromiseReject = rM
        }));
        return this.popupWindowPromise = MM, QM.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), HM), this.openPopup(MM).catch((rM => {
          this.popupWindowPromise === MM && this.failPopup(rM instanceof Error ? rM : new Error(String(rM)))
        })), MM
      }
      async openPopup(MM) {
        let rM = this.openDiscordOAuthWindow();
        if (!rM) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== MM) return;
          rM = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", rM), !rM) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = rM;
        const iM = window.setInterval((() => {
          rM.closed && this.popupWindowPromise === MM && (window.clearInterval(iM), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === MM && this.failPopup(new hM("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = iM
      }
      async exchangeAuthorizationCodeForAccessToken(MM, rM) {
        const {
          accessToken: iM,
          refreshToken: OM
        } = await PM()((async () => await (0, jM.postJsonWithMetricsCookiesAndJsonResponse)(`${nM.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: MM,
          bloxdClientEnvironment: mM.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, rM.getMetricsCookies())), {
          retries: 3
        });
        return QM.e.setItem(this.bloxdDiscordRefreshTokenKey, OM), iM
      }
      hasCurrentUser() {
        const MM = QM.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, zM.J)(MM)
      }
      async getCurrentUser(MM) {
        const rM = QM.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!rM) return null;
        let iM;
        try {
          const OM = await PM()((async () => {
            try {
              return await (0, jM.postJsonWithMetricsCookiesAndJsonResponse)(`${nM.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: rM
              }, {
                retries: 0
              }, MM.getMetricsCookies())
            } catch (iM) {
              if (dM(iM)) throw new(PM().AbortError)(iM);
              throw iM
            }
          }), {
            retries: 3
          });
          iM = OM.accessToken, QM.e.setItem(this.bloxdDiscordRefreshTokenKey, OM.refreshToken)
        } catch (OM) {
          return dM(OM) ? (QM.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", OM), null)
        }
        return {
          accessToken: iM
        }
      }
      signOut() {
        this.failPopup(new hM("Signed out of Discord during login")), QM.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function dM(MM) {
      return MM instanceof OM.e && 435 === MM.httpCode
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);