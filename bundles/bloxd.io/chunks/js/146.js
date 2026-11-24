export const id = 146;
export const ids = [146];
export const modules = {
  8046: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BloxdDiscordSDK: () => mB,
      DiscordLoginCancelledError: () => JB,
      discordPopupTimeoutMs: () => sB
    });
    var QB = zB(174),
      nB = zB(1265),
      dB = zB(1173),
      IB = zB(1191),
      NB = zB.n(IB),
      uB = zB(1244),
      UB = zB(41),
      aB = zB(658),
      pB = zB(1381),
      rB = zB(1126);
    const sB = 6e5;
    class JB extends Error {
      constructor() {
        super(...arguments), this.name = dB.discordLoginCancelledErrorName
      }
    }
    class mB {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = nB.n[rB.e.clientEnvironment];
        const BB = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (jB => {
          var zB;
          if (jB.origin !== BB || "oauth_authentication_discord" !== (null === (zB = jB.data) || void 0 === zB ? void 0 : zB.type)) return;
          if ("string" !== typeof jB.data.code || !jB.data.code) return void this.failPopup(new JB("Discord authentication was cancelled on Discord"));
          const QB = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === QB || void 0 === QB || QB(jB.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(BB) {
        var jB;
        const zB = this.popupWindowPromiseReject;
        null === (jB = this.popupWindow) || void 0 === jB || jB.close(), this.resetPopupState(), null === zB || void 0 === zB || zB(BB)
      }
      openDiscordOAuthWindow() {
        const BB = rB.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${BB}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((BB, jB) => {
          pB.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((zB => {
            !0 === zB ? BB() : jB(new JB("Discord login was cancelled"))
          })).catch(jB)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const BB = new Promise(((BB, jB) => {
          this.popupWindowPromiseResolve = BB, this.popupWindowPromiseReject = jB
        }));
        return this.popupWindowPromise = BB, UB.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), sB), this.openPopup(BB).catch((jB => {
          this.popupWindowPromise === BB && this.failPopup(jB instanceof Error ? jB : new Error(String(jB)))
        })), BB
      }
      async openPopup(BB) {
        let jB = this.openDiscordOAuthWindow();
        if (!jB) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== BB) return;
          jB = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", jB), !jB) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = jB;
        const zB = window.setInterval((() => {
          jB.closed && this.popupWindowPromise === BB && (window.clearInterval(zB), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === BB && this.failPopup(new JB("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = zB
      }
      async exchangeAuthorizationCodeForAccessToken(BB, jB) {
        const {
          accessToken: zB,
          refreshToken: QB
        } = await NB()((async () => await (0, dB.postJsonWithMetricsCookiesAndJsonResponse)(`${uB.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: BB,
          bloxdClientEnvironment: rB.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, jB.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", QB, this.bloxdDiscordRefreshTokenKey), UB.d.setItem(this.bloxdDiscordRefreshTokenKey, QB), zB
      }
      hasCurrentUser() {
        const BB = UB.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, aB.I)(BB)
      }
      async getCurrentUser(BB) {
        const jB = UB.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!jB) return null;
        let zB;
        try {
          const QB = await NB()((async () => {
            try {
              return await (0, dB.postJsonWithMetricsCookiesAndJsonResponse)(`${uB.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: jB
              }, {
                retries: 0
              }, BB.getMetricsCookies())
            } catch (zB) {
              if (yB(zB)) throw new(NB().AbortError)(zB);
              throw zB
            }
          }), {
            retries: 3
          });
          zB = QB.accessToken, UB.d.setItem(this.bloxdDiscordRefreshTokenKey, QB.refreshToken)
        } catch (QB) {
          return yB(QB) ? (UB.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", QB), null)
        }
        return {
          accessToken: zB
        }
      }
      signOut() {
        this.failPopup(new JB("Signed out of Discord during login")), UB.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function yB(BB) {
      return BB instanceof QB.c && 435 === BB.httpCode
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);