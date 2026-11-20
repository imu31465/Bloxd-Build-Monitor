export const id = 138;
export const ids = [138];
export const modules = {
  7731: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BloxdDiscordSDK: () => yk,
      DiscordLoginCancelledError: () => ek,
      discordPopupTimeoutMs: () => Ak
    });
    var Rk = Bk(152),
      tk = Bk(1175),
      ak = Bk(1101),
      Xk = Bk(1116),
      bk = Bk.n(Xk),
      wk = Bk(1154),
      dk = Bk(42),
      sk = Bk(606),
      Vk = Bk(1300),
      Jk = Bk(1157);
    const Ak = 6e5;
    class ek extends Error {
      constructor() {
        super(...arguments), this.name = ak.discordLoginCancelledErrorName
      }
    }
    class yk {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = tk.q[Jk.b.clientEnvironment];
        const kk = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Fk => {
          var Bk;
          if (Fk.origin !== kk || "oauth_authentication_discord" !== (null === (Bk = Fk.data) || void 0 === Bk ? void 0 : Bk.type)) return;
          if ("string" !== typeof Fk.data.code || !Fk.data.code) return void this.failPopup(new ek("Discord authentication was cancelled on Discord"));
          const Rk = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Rk || void 0 === Rk || Rk(Fk.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(kk) {
        var Fk;
        const Bk = this.popupWindowPromiseReject;
        null === (Fk = this.popupWindow) || void 0 === Fk || Fk.close(), this.resetPopupState(), null === Bk || void 0 === Bk || Bk(kk)
      }
      openDiscordOAuthWindow() {
        const kk = Jk.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${kk}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((kk, Fk) => {
          Vk.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Bk => {
            !0 === Bk ? kk() : Fk(new ek("Discord login was cancelled"))
          })).catch(Fk)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const kk = new Promise(((kk, Fk) => {
          this.popupWindowPromiseResolve = kk, this.popupWindowPromiseReject = Fk
        }));
        return this.popupWindowPromise = kk, dk.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Ak), this.openPopup(kk).catch((Fk => {
          this.popupWindowPromise === kk && this.failPopup(Fk instanceof Error ? Fk : new Error(String(Fk)))
        })), kk
      }
      async openPopup(kk) {
        let Fk = this.openDiscordOAuthWindow();
        if (!Fk) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== kk) return;
          Fk = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Fk), !Fk) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Fk;
        const Bk = window.setInterval((() => {
          Fk.closed && this.popupWindowPromise === kk && (window.clearInterval(Bk), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === kk && this.failPopup(new ek("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Bk
      }
      async exchangeAuthorizationCodeForAccessToken(kk, Fk) {
        const {
          accessToken: Bk,
          refreshToken: Rk
        } = await bk()((async () => await (0, ak.postJsonWithMetricsCookiesAndJsonResponse)(`${wk.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: kk,
          bloxdClientEnvironment: Jk.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Fk.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Rk, this.bloxdDiscordRefreshTokenKey), dk.c.setItem(this.bloxdDiscordRefreshTokenKey, Rk), Bk
      }
      hasCurrentUser() {
        const kk = dk.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, sk.F)(kk)
      }
      async getCurrentUser(kk) {
        const Fk = dk.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Fk) return null;
        let Bk;
        try {
          const Rk = await bk()((async () => {
            try {
              return await (0, ak.postJsonWithMetricsCookiesAndJsonResponse)(`${wk.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Fk
              }, {
                retries: 0
              }, kk.getMetricsCookies())
            } catch (Bk) {
              if (fk(Bk)) throw new(bk().AbortError)(Bk);
              throw Bk
            }
          }), {
            retries: 3
          });
          Bk = Rk.accessToken, dk.c.setItem(this.bloxdDiscordRefreshTokenKey, Rk.refreshToken)
        } catch (Rk) {
          return fk(Rk) ? (dk.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Rk), null)
        }
        return {
          accessToken: Bk
        }
      }
      signOut() {
        this.failPopup(new ek("Signed out of Discord during login")), dk.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function fk(kk) {
      return kk instanceof Rk.c && 435 === kk.httpCode
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);