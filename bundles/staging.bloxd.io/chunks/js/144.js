export const id = 144;
export const ids = [144];
export const modules = {
  8068: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BloxdDiscordSDK: () => wk,
      DiscordLoginCancelledError: () => ek,
      discordPopupTimeoutMs: () => jk
    });
    var Xk = Ik(149),
      Tk = Ik(1220),
      ik = Ik(1120),
      yk = Ik(1140),
      lk = Ik.n(yk),
      ak = Ik(1194),
      qk = Ik(41),
      Lk = Ik(628),
      tk = Ik(1324),
      Zk = Ik(1078);
    const jk = 6e5;
    class ek extends Error {
      constructor() {
        super(...arguments), this.name = ik.discordLoginCancelledErrorName
      }
    }
    class wk {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Tk.k[Zk.e.clientEnvironment];
        const kk = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Fk => {
          var Ik;
          if (Fk.origin !== kk || "oauth_authentication_discord" !== (null === (Ik = Fk.data) || void 0 === Ik ? void 0 : Ik.type)) return;
          if ("string" !== typeof Fk.data.code || !Fk.data.code) return void this.failPopup(new ek("Discord authentication was cancelled on Discord"));
          const Xk = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Xk || void 0 === Xk || Xk(Fk.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(kk) {
        var Fk;
        const Ik = this.popupWindowPromiseReject;
        null === (Fk = this.popupWindow) || void 0 === Fk || Fk.close(), this.resetPopupState(), null === Ik || void 0 === Ik || Ik(kk)
      }
      openDiscordOAuthWindow() {
        const kk = Zk.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${kk}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((kk, Fk) => {
          tk.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Ik => {
            !0 === Ik ? kk() : Fk(new ek("Discord login was cancelled"))
          })).catch(Fk)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const kk = new Promise(((kk, Fk) => {
          this.popupWindowPromiseResolve = kk, this.popupWindowPromiseReject = Fk
        }));
        return this.popupWindowPromise = kk, qk.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), jk), this.openPopup(kk).catch((Fk => {
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
        const Ik = window.setInterval((() => {
          Fk.closed && this.popupWindowPromise === kk && (window.clearInterval(Ik), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === kk && this.failPopup(new ek("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Ik
      }
      async exchangeAuthorizationCodeForAccessToken(kk, Fk) {
        const {
          accessToken: Ik,
          refreshToken: Xk
        } = await lk()((async () => await (0, ik.postJsonWithMetricsCookiesAndJsonResponse)(`${ak.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: kk,
          bloxdClientEnvironment: Zk.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Fk.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Xk, this.bloxdDiscordRefreshTokenKey), qk.c.setItem(this.bloxdDiscordRefreshTokenKey, Xk), Ik
      }
      hasCurrentUser() {
        const kk = qk.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Lk.Q)(kk)
      }
      async getCurrentUser(kk) {
        const Fk = qk.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Fk) return null;
        let Ik;
        try {
          const Xk = await lk()((async () => {
            try {
              return await (0, ik.postJsonWithMetricsCookiesAndJsonResponse)(`${ak.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Fk
              }, {
                retries: 0
              }, kk.getMetricsCookies())
            } catch (Ik) {
              if (Hk(Ik)) throw new(lk().AbortError)(Ik);
              throw Ik
            }
          }), {
            retries: 3
          });
          Ik = Xk.accessToken, qk.c.setItem(this.bloxdDiscordRefreshTokenKey, Xk.refreshToken)
        } catch (Xk) {
          return Hk(Xk) ? (qk.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Xk), null)
        }
        return {
          accessToken: Ik
        }
      }
      signOut() {
        this.failPopup(new ek("Signed out of Discord during login")), qk.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function Hk(kk) {
      return kk instanceof Xk.b && 435 === kk.httpCode
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);