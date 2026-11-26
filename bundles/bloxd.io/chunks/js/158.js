export const id = 158;
export const ids = [158];
export const modules = {
  7234: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BloxdDiscordSDK: () => qB,
      DiscordLoginCancelledError: () => pB,
      discordPopupTimeoutMs: () => lB
    });
    var YB = GB(162),
      DB = GB(1225),
      QB = GB(1121),
      oB = GB(1134),
      jB = GB.n(oB),
      yB = GB(1186),
      JB = GB(31),
      MB = GB(641),
      PB = GB(1400),
      zB = GB(1195);
    const lB = 6e5;
    class pB extends Error {
      constructor() {
        super(...arguments), this.name = QB.discordLoginCancelledErrorName
      }
    }
    class qB {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = DB.n[zB.e.clientEnvironment];
        const BB = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (OB => {
          var GB;
          if (OB.origin !== BB || "oauth_authentication_discord" !== (null === (GB = OB.data) || void 0 === GB ? void 0 : GB.type)) return;
          if ("string" !== typeof OB.data.code || !OB.data.code) return void this.failPopup(new pB("Discord authentication was cancelled on Discord"));
          const YB = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === YB || void 0 === YB || YB(OB.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(BB) {
        var OB;
        const GB = this.popupWindowPromiseReject;
        null === (OB = this.popupWindow) || void 0 === OB || OB.close(), this.resetPopupState(), null === GB || void 0 === GB || GB(BB)
      }
      openDiscordOAuthWindow() {
        const BB = zB.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${BB}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((BB, OB) => {
          PB.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((GB => {
            !0 === GB ? BB() : OB(new pB("Discord login was cancelled"))
          })).catch(OB)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const BB = new Promise(((BB, OB) => {
          this.popupWindowPromiseResolve = BB, this.popupWindowPromiseReject = OB
        }));
        return this.popupWindowPromise = BB, JB.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), lB), this.openPopup(BB).catch((OB => {
          this.popupWindowPromise === BB && this.failPopup(OB instanceof Error ? OB : new Error(String(OB)))
        })), BB
      }
      async openPopup(BB) {
        let OB = this.openDiscordOAuthWindow();
        if (!OB) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== BB) return;
          OB = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", OB), !OB) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = OB;
        const GB = window.setInterval((() => {
          OB.closed && this.popupWindowPromise === BB && (window.clearInterval(GB), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === BB && this.failPopup(new pB("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = GB
      }
      async exchangeAuthorizationCodeForAccessToken(BB, OB) {
        const {
          accessToken: GB,
          refreshToken: YB
        } = await jB()((async () => await (0, QB.postJsonWithMetricsCookiesAndJsonResponse)(`${yB.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: BB,
          bloxdClientEnvironment: zB.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, OB.getMetricsCookies())), {
          retries: 3
        });
        return JB.c.setItem(this.bloxdDiscordRefreshTokenKey, YB), GB
      }
      hasCurrentUser() {
        const BB = JB.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, MB.Q)(BB)
      }
      async getCurrentUser(BB) {
        const OB = JB.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!OB) return null;
        let GB;
        try {
          const YB = await jB()((async () => {
            try {
              return await (0, QB.postJsonWithMetricsCookiesAndJsonResponse)(`${yB.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: OB
              }, {
                retries: 0
              }, BB.getMetricsCookies())
            } catch (GB) {
              if (ZB(GB)) throw new(jB().AbortError)(GB);
              throw GB
            }
          }), {
            retries: 3
          });
          GB = YB.accessToken, JB.c.setItem(this.bloxdDiscordRefreshTokenKey, YB.refreshToken)
        } catch (YB) {
          return ZB(YB) ? (JB.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", YB), null)
        }
        return {
          accessToken: GB
        }
      }
      signOut() {
        this.failPopup(new pB("Signed out of Discord during login")), JB.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function ZB(BB) {
      return BB instanceof YB.d && 435 === BB.httpCode
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);