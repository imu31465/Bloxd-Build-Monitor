export const id = 127;
export const ids = [127];
export const modules = {
  7029: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BloxdDiscordSDK: () => rW,
      DiscordLoginCancelledError: () => QF,
      discordPopupTimeoutMs: () => EF
    });
    var CF = SF(138),
      AF = SF(1090),
      uF = SF(1001),
      hF = SF(1014),
      bW = SF.n(hF),
      dF = SF(1056),
      PF = SF(33),
      RF = SF(568),
      iW = SF(1189),
      eF = SF(1065);
    const EF = 6e5;
    class QF extends Error {
      constructor() {
        super(...arguments), this.name = uF.discordLoginCancelledErrorName
      }
    }
    class rW {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = AF.p[eF.b.clientEnvironment];
        const FF = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (WF => {
          var SF;
          if (WF.origin !== FF || "oauth_authentication_discord" !== (null === (SF = WF.data) || void 0 === SF ? void 0 : SF.type)) return;
          if ("string" !== typeof WF.data.code || !WF.data.code) return void this.failPopup(new QF("Discord authentication was cancelled on Discord"));
          const CF = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === CF || void 0 === CF || CF(WF.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(FF) {
        var WF;
        const SF = this.popupWindowPromiseReject;
        null === (WF = this.popupWindow) || void 0 === WF || WF.close(), this.resetPopupState(), null === SF || void 0 === SF || SF(FF)
      }
      openDiscordOAuthWindow() {
        const FF = eF.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${FF}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((FF, WF) => {
          iW.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((SF => {
            SF ? FF() : WF(new QF("Discord login was cancelled"))
          })).catch(WF)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const FF = new Promise(((FF, WF) => {
          this.popupWindowPromiseResolve = FF, this.popupWindowPromiseReject = WF
        }));
        return this.popupWindowPromise = FF, PF.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), EF), this.openPopup(FF).catch((WF => {
          this.popupWindowPromise === FF && this.failPopup(WF instanceof Error ? WF : new Error(String(WF)))
        })), FF
      }
      async openPopup(FF) {
        let WF = this.openDiscordOAuthWindow();
        if (!WF) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== FF) return;
          WF = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", WF), !WF) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = WF;
        const SF = window.setInterval((() => {
          WF.closed && this.popupWindowPromise === FF && (window.clearInterval(SF), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === FF && this.failPopup(new QF("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = SF
      }
      async exchangeAuthorizationCodeForAccessToken(FF, WF) {
        const {
          accessToken: SF,
          refreshToken: CF
        } = await bW()((async () => await (0, uF.postJsonWithMetricsCookiesAndJsonResponse)(`${dF.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: FF,
          bloxdClientEnvironment: eF.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, WF.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", CF, this.bloxdDiscordRefreshTokenKey), PF.d.setItem(this.bloxdDiscordRefreshTokenKey, CF), SF
      }
      hasCurrentUser() {
        const FF = PF.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, RF.Q)(FF)
      }
      async getCurrentUser(FF) {
        const WF = PF.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!WF) return null;
        let SF;
        try {
          const CF = await bW()((async () => {
            try {
              return await (0, uF.postJsonWithMetricsCookiesAndJsonResponse)(`${dF.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: WF
              }, {
                retries: 0
              }, FF.getMetricsCookies())
            } catch (SF) {
              if (gW(SF)) throw new(bW().AbortError)(SF);
              throw SF
            }
          }), {
            retries: 3
          });
          SF = CF.accessToken, PF.d.setItem(this.bloxdDiscordRefreshTokenKey, CF.refreshToken)
        } catch (CF) {
          return gW(CF) ? (PF.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", CF), null)
        }
        return {
          accessToken: SF
        }
      }
      signOut() {
        this.failPopup(new QF("Signed out of Discord during login")), PF.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function gW(FF) {
      return FF instanceof CF.c && 435 === FF.httpCode
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);