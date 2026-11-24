export const id = 146;
export const ids = [146];
export const modules = {
  8218: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BloxdDiscordSDK: () => gB,
      DiscordLoginCancelledError: () => NB,
      discordPopupTimeoutMs: () => FB
    });
    var TB = ZB(168),
      JB = ZB(1290),
      oB = ZB(1186),
      GB = ZB(1207),
      vB = ZB.n(GB),
      kB = ZB(1258),
      cB = ZB(36),
      nB = ZB(665),
      hB = ZB(1403),
      zB = ZB(1131);
    const FB = 6e5;
    class NB extends Error {
      constructor() {
        super(...arguments), this.name = oB.discordLoginCancelledErrorName
      }
    }
    class gB {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = JB.l[zB.e.clientEnvironment];
        const BB = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (IB => {
          var ZB;
          if (IB.origin !== BB || "oauth_authentication_discord" !== (null === (ZB = IB.data) || void 0 === ZB ? void 0 : ZB.type)) return;
          if ("string" !== typeof IB.data.code || !IB.data.code) return void this.failPopup(new NB("Discord authentication was cancelled on Discord"));
          const TB = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === TB || void 0 === TB || TB(IB.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(BB) {
        var IB;
        const ZB = this.popupWindowPromiseReject;
        null === (IB = this.popupWindow) || void 0 === IB || IB.close(), this.resetPopupState(), null === ZB || void 0 === ZB || ZB(BB)
      }
      openDiscordOAuthWindow() {
        const BB = zB.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${BB}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((BB, IB) => {
          hB.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((ZB => {
            !0 === ZB ? BB() : IB(new NB("Discord login was cancelled"))
          })).catch(IB)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const BB = new Promise(((BB, IB) => {
          this.popupWindowPromiseResolve = BB, this.popupWindowPromiseReject = IB
        }));
        return this.popupWindowPromise = BB, cB.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), FB), this.openPopup(BB).catch((IB => {
          this.popupWindowPromise === BB && this.failPopup(IB instanceof Error ? IB : new Error(String(IB)))
        })), BB
      }
      async openPopup(BB) {
        let IB = this.openDiscordOAuthWindow();
        if (!IB) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== BB) return;
          IB = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", IB), !IB) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = IB;
        const ZB = window.setInterval((() => {
          IB.closed && this.popupWindowPromise === BB && (window.clearInterval(ZB), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === BB && this.failPopup(new NB("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = ZB
      }
      async exchangeAuthorizationCodeForAccessToken(BB, IB) {
        const {
          accessToken: ZB,
          refreshToken: TB
        } = await vB()((async () => await (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${kB.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: BB,
          bloxdClientEnvironment: zB.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, IB.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", TB, this.bloxdDiscordRefreshTokenKey), cB.e.setItem(this.bloxdDiscordRefreshTokenKey, TB), ZB
      }
      hasCurrentUser() {
        const BB = cB.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, nB.L)(BB)
      }
      async getCurrentUser(BB) {
        const IB = cB.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!IB) return null;
        let ZB;
        try {
          const TB = await vB()((async () => {
            try {
              return await (0, oB.postJsonWithMetricsCookiesAndJsonResponse)(`${kB.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: IB
              }, {
                retries: 0
              }, BB.getMetricsCookies())
            } catch (ZB) {
              if (qB(ZB)) throw new(vB().AbortError)(ZB);
              throw ZB
            }
          }), {
            retries: 3
          });
          ZB = TB.accessToken, cB.e.setItem(this.bloxdDiscordRefreshTokenKey, TB.refreshToken)
        } catch (TB) {
          return qB(TB) ? (cB.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", TB), null)
        }
        return {
          accessToken: ZB
        }
      }
      signOut() {
        this.failPopup(new NB("Signed out of Discord during login")), cB.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function qB(BB) {
      return BB instanceof TB.d && 435 === BB.httpCode
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);