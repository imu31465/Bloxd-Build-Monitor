export const id = 146;
export const ids = [146];
export const modules = {
  8127: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BloxdDiscordSDK: () => hG,
      DiscordLoginCancelledError: () => KG,
      discordPopupTimeoutMs: () => QG
    });
    var wG = ZG(140),
      SG = ZG(1185),
      LG = ZG(1096),
      yG = ZG(1117),
      kG = ZG.n(yG),
      UG = ZG(1163),
      YG = ZG(29),
      VG = ZG(604),
      pG = ZG(1311),
      fG = ZG(1036);
    const QG = 6e5;
    class KG extends Error {
      constructor() {
        super(...arguments), this.name = LG.discordLoginCancelledErrorName
      }
    }
    class hG {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = SG.m[fG.c.clientEnvironment];
        const GG = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (bG => {
          var ZG;
          if (bG.origin !== GG || "oauth_authentication_discord" !== (null === (ZG = bG.data) || void 0 === ZG ? void 0 : ZG.type)) return;
          if ("string" !== typeof bG.data.code || !bG.data.code) return void this.failPopup(new KG("Discord authentication was cancelled on Discord"));
          const wG = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === wG || void 0 === wG || wG(bG.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(GG) {
        var bG;
        const ZG = this.popupWindowPromiseReject;
        null === (bG = this.popupWindow) || void 0 === bG || bG.close(), this.resetPopupState(), null === ZG || void 0 === ZG || ZG(GG)
      }
      openDiscordOAuthWindow() {
        const GG = fG.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${GG}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((GG, bG) => {
          pG.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((ZG => {
            !0 === ZG ? GG() : bG(new KG("Discord login was cancelled"))
          })).catch(bG)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const GG = new Promise(((GG, bG) => {
          this.popupWindowPromiseResolve = GG, this.popupWindowPromiseReject = bG
        }));
        return this.popupWindowPromise = GG, YG.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), QG), this.openPopup(GG).catch((bG => {
          this.popupWindowPromise === GG && this.failPopup(bG instanceof Error ? bG : new Error(String(bG)))
        })), GG
      }
      async openPopup(GG) {
        let bG = this.openDiscordOAuthWindow();
        if (!bG) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== GG) return;
          bG = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", bG), !bG) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = bG;
        const ZG = window.setInterval((() => {
          bG.closed && this.popupWindowPromise === GG && (window.clearInterval(ZG), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === GG && this.failPopup(new KG("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = ZG
      }
      async exchangeAuthorizationCodeForAccessToken(GG, bG) {
        const {
          accessToken: ZG,
          refreshToken: wG
        } = await kG()((async () => await (0, LG.postJsonWithMetricsCookiesAndJsonResponse)(`${UG.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: GG,
          bloxdClientEnvironment: fG.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, bG.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", wG, this.bloxdDiscordRefreshTokenKey), YG.c.setItem(this.bloxdDiscordRefreshTokenKey, wG), ZG
      }
      hasCurrentUser() {
        const GG = YG.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, VG.L)(GG)
      }
      async getCurrentUser(GG) {
        const bG = YG.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!bG) return null;
        let ZG;
        try {
          const wG = await kG()((async () => {
            try {
              return await (0, LG.postJsonWithMetricsCookiesAndJsonResponse)(`${UG.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: bG
              }, {
                retries: 0
              }, GG.getMetricsCookies())
            } catch (ZG) {
              if (dG(ZG)) throw new(kG().AbortError)(ZG);
              throw ZG
            }
          }), {
            retries: 3
          });
          ZG = wG.accessToken, YG.c.setItem(this.bloxdDiscordRefreshTokenKey, wG.refreshToken)
        } catch (wG) {
          return dG(wG) ? (YG.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", wG), null)
        }
        return {
          accessToken: ZG
        }
      }
      signOut() {
        this.failPopup(new KG("Signed out of Discord during login")), YG.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function dG(GG) {
      return GG instanceof wG.b && 435 === GG.httpCode
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);