export const id = 131;
export const ids = [131];
export const modules = {
  7413: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BloxdDiscordSDK: () => uB,
      DiscordLoginCancelledError: () => DB,
      discordPopupTimeoutMs: () => OB
    });
    var VB = dB(163),
      yB = dB(1109),
      pB = dB(1020),
      lB = dB(1030),
      JB = dB.n(lB),
      YB = dB(1089),
      gB = dB(33),
      oB = dB(572),
      kB = dB(1235),
      LB = dB(1092);
    const OB = 6e5;
    class DB extends Error {
      constructor() {
        super(...arguments), this.name = pB.discordLoginCancelledErrorName
      }
    }
    class uB {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = yB.q[LB.e.clientEnvironment];
        const BB = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (TB => {
          var dB;
          if (TB.origin !== BB || "oauth_authentication_discord" !== (null === (dB = TB.data) || void 0 === dB ? void 0 : dB.type)) return;
          if ("string" !== typeof TB.data.code || !TB.data.code) return void this.failPopup(new DB("Discord authentication was cancelled on Discord"));
          const VB = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === VB || void 0 === VB || VB(TB.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(BB) {
        var TB;
        const dB = this.popupWindowPromiseReject;
        null === (TB = this.popupWindow) || void 0 === TB || TB.close(), this.resetPopupState(), null === dB || void 0 === dB || dB(BB)
      }
      openDiscordOAuthWindow() {
        const BB = LB.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${BB}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((BB, TB) => {
          kB.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((dB => {
            !0 === dB ? BB() : TB(new DB("Discord login was cancelled"))
          })).catch(TB)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const BB = new Promise(((BB, TB) => {
          this.popupWindowPromiseResolve = BB, this.popupWindowPromiseReject = TB
        }));
        return this.popupWindowPromise = BB, gB.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), OB), this.openPopup(BB).catch((TB => {
          this.popupWindowPromise === BB && this.failPopup(TB instanceof Error ? TB : new Error(String(TB)))
        })), BB
      }
      async openPopup(BB) {
        let TB = this.openDiscordOAuthWindow();
        if (!TB) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== BB) return;
          TB = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", TB), !TB) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = TB;
        const dB = window.setInterval((() => {
          TB.closed && this.popupWindowPromise === BB && (window.clearInterval(dB), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === BB && this.failPopup(new DB("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = dB
      }
      async exchangeAuthorizationCodeForAccessToken(BB, TB) {
        const {
          accessToken: dB,
          refreshToken: VB
        } = await JB()((async () => await (0, pB.postJsonWithMetricsCookiesAndJsonResponse)(`${YB.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: BB,
          bloxdClientEnvironment: LB.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, TB.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", VB, this.bloxdDiscordRefreshTokenKey), gB.c.setItem(this.bloxdDiscordRefreshTokenKey, VB), dB
      }
      hasCurrentUser() {
        const BB = gB.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, oB.M)(BB)
      }
      async getCurrentUser(BB) {
        const TB = gB.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!TB) return null;
        let dB;
        try {
          const VB = await JB()((async () => {
            try {
              return await (0, pB.postJsonWithMetricsCookiesAndJsonResponse)(`${YB.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: TB
              }, {
                retries: 0
              }, BB.getMetricsCookies())
            } catch (dB) {
              if (HB(dB)) throw new(JB().AbortError)(dB);
              throw dB
            }
          }), {
            retries: 3
          });
          dB = VB.accessToken, gB.c.setItem(this.bloxdDiscordRefreshTokenKey, VB.refreshToken)
        } catch (VB) {
          return HB(VB) ? (gB.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", VB), null)
        }
        return {
          accessToken: dB
        }
      }
      signOut() {
        this.failPopup(new DB("Signed out of Discord during login")), gB.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function HB(BB) {
      return BB instanceof VB.b && 435 === BB.httpCode
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);