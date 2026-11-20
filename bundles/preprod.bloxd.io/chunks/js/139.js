export const id = 139;
export const ids = [139];
export const modules = {
  7983: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BloxdDiscordSDK: () => Vq,
      DiscordLoginCancelledError: () => aq,
      discordPopupTimeoutMs: () => Nq
    });
    var Yq = gq(163),
      lq = gq(1216),
      Oq = gq(1109),
      mq = gq(1131),
      xq = gq.n(mq),
      Aq = gq(1195),
      cq = gq(38),
      uq = gq(598),
      Bq = gq(1336),
      Wq = gq(1201);
    const Nq = 6e5;
    class aq extends Error {
      constructor() {
        super(...arguments), this.name = Oq.discordLoginCancelledErrorName
      }
    }
    class Vq {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = lq.k[Wq.d.clientEnvironment];
        const qq = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Eq => {
          var gq;
          if (Eq.origin !== qq || "oauth_authentication_discord" !== (null === (gq = Eq.data) || void 0 === gq ? void 0 : gq.type)) return;
          if ("string" !== typeof Eq.data.code || !Eq.data.code) return void this.failPopup(new aq("Discord authentication was cancelled on Discord"));
          const Yq = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Yq || void 0 === Yq || Yq(Eq.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(qq) {
        var Eq;
        const gq = this.popupWindowPromiseReject;
        null === (Eq = this.popupWindow) || void 0 === Eq || Eq.close(), this.resetPopupState(), null === gq || void 0 === gq || gq(qq)
      }
      openDiscordOAuthWindow() {
        const qq = Wq.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${qq}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((qq, Eq) => {
          Bq.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((gq => {
            !0 === gq ? qq() : Eq(new aq("Discord login was cancelled"))
          })).catch(Eq)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const qq = new Promise(((qq, Eq) => {
          this.popupWindowPromiseResolve = qq, this.popupWindowPromiseReject = Eq
        }));
        return this.popupWindowPromise = qq, cq.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Nq), this.openPopup(qq).catch((Eq => {
          this.popupWindowPromise === qq && this.failPopup(Eq instanceof Error ? Eq : new Error(String(Eq)))
        })), qq
      }
      async openPopup(qq) {
        let Eq = this.openDiscordOAuthWindow();
        if (!Eq) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== qq) return;
          Eq = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Eq), !Eq) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Eq;
        const gq = window.setInterval((() => {
          Eq.closed && this.popupWindowPromise === qq && (window.clearInterval(gq), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === qq && this.failPopup(new aq("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = gq
      }
      async exchangeAuthorizationCodeForAccessToken(qq, Eq) {
        const {
          accessToken: gq,
          refreshToken: Yq
        } = await xq()((async () => await (0, Oq.postJsonWithMetricsCookiesAndJsonResponse)(`${Aq.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: qq,
          bloxdClientEnvironment: Wq.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Eq.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Yq, this.bloxdDiscordRefreshTokenKey), cq.c.setItem(this.bloxdDiscordRefreshTokenKey, Yq), gq
      }
      hasCurrentUser() {
        const qq = cq.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, uq.H)(qq)
      }
      async getCurrentUser(qq) {
        const Eq = cq.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Eq) return null;
        let gq;
        try {
          const Yq = await xq()((async () => {
            try {
              return await (0, Oq.postJsonWithMetricsCookiesAndJsonResponse)(`${Aq.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Eq
              }, {
                retries: 0
              }, qq.getMetricsCookies())
            } catch (gq) {
              if (dq(gq)) throw new(xq().AbortError)(gq);
              throw gq
            }
          }), {
            retries: 3
          });
          gq = Yq.accessToken, cq.c.setItem(this.bloxdDiscordRefreshTokenKey, Yq.refreshToken)
        } catch (Yq) {
          return dq(Yq) ? (cq.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Yq), null)
        }
        return {
          accessToken: gq
        }
      }
      signOut() {
        this.failPopup(new aq("Signed out of Discord during login")), cq.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function dq(qq) {
      return qq instanceof Yq.b && 435 === qq.httpCode
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);