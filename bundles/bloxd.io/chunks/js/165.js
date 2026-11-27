export const id = 165;
export const ids = [165];
export const modules = {
  7647: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BloxdDiscordSDK: () => tr,
      DiscordLoginCancelledError: () => Ur,
      discordPopupTimeoutMs: () => Nr
    });
    var Zr = Qr(161),
      Wr = Qr(1281),
      ar = Qr(1187),
      jr = Qr(1204),
      Ir = Qr.n(jr),
      fr = Qr(1262),
      Er = Qr(43),
      pr = Qr(688),
      xr = Qr(1475),
      mr = Qr(1264);
    const Nr = 6e5;
    class Ur extends Error {
      constructor() {
        super(...arguments), this.name = ar.discordLoginCancelledErrorName
      }
    }
    class tr {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Wr.q[mr.c.clientEnvironment];
        const rr = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Sr => {
          var Qr;
          if (Sr.origin !== rr || "oauth_authentication_discord" !== (null === (Qr = Sr.data) || void 0 === Qr ? void 0 : Qr.type)) return;
          if ("string" !== typeof Sr.data.code || !Sr.data.code) return void this.failPopup(new Ur("Discord authentication was cancelled on Discord"));
          const Zr = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Zr || void 0 === Zr || Zr(Sr.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(rr) {
        var Sr;
        const Qr = this.popupWindowPromiseReject;
        null === (Sr = this.popupWindow) || void 0 === Sr || Sr.close(), this.resetPopupState(), null === Qr || void 0 === Qr || Qr(rr)
      }
      openDiscordOAuthWindow() {
        const rr = mr.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${rr}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((rr, Sr) => {
          xr.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Qr => {
            !0 === Qr ? rr() : Sr(new Ur("Discord login was cancelled"))
          })).catch(Sr)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const rr = new Promise(((rr, Sr) => {
          this.popupWindowPromiseResolve = rr, this.popupWindowPromiseReject = Sr
        }));
        return this.popupWindowPromise = rr, Er.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Nr), this.openPopup(rr).catch((Sr => {
          this.popupWindowPromise === rr && this.failPopup(Sr instanceof Error ? Sr : new Error(String(Sr)))
        })), rr
      }
      async openPopup(rr) {
        let Sr = this.openDiscordOAuthWindow();
        if (!Sr) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== rr) return;
          Sr = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Sr), !Sr) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Sr;
        const Qr = window.setInterval((() => {
          Sr.closed && this.popupWindowPromise === rr && (window.clearInterval(Qr), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === rr && this.failPopup(new Ur("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Qr
      }
      async exchangeAuthorizationCodeForAccessToken(rr, Sr) {
        const {
          accessToken: Qr,
          refreshToken: Zr
        } = await Ir()((async () => await (0, ar.postJsonWithMetricsCookiesAndJsonResponse)(`${fr.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: rr,
          bloxdClientEnvironment: mr.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Sr.getMetricsCookies())), {
          retries: 3
        });
        return Er.d.setItem(this.bloxdDiscordRefreshTokenKey, Zr), Qr
      }
      hasCurrentUser() {
        const rr = Er.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, pr.L)(rr)
      }
      async getCurrentUser(rr) {
        const Sr = Er.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Sr) return null;
        let Qr;
        try {
          const Zr = await Ir()((async () => {
            try {
              return await (0, ar.postJsonWithMetricsCookiesAndJsonResponse)(`${fr.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Sr
              }, {
                retries: 0
              }, rr.getMetricsCookies())
            } catch (Qr) {
              if (hr(Qr)) throw new(Ir().AbortError)(Qr);
              throw Qr
            }
          }), {
            retries: 3
          });
          Qr = Zr.accessToken, Er.d.setItem(this.bloxdDiscordRefreshTokenKey, Zr.refreshToken)
        } catch (Zr) {
          return hr(Zr) ? (Er.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Zr), null)
        }
        return {
          accessToken: Qr
        }
      }
      signOut() {
        this.failPopup(new Ur("Signed out of Discord during login")), Er.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function hr(rr) {
      return rr instanceof Zr.b && 435 === rr.httpCode
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);