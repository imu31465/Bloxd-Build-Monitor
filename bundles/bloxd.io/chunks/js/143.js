export const id = 143;
export const ids = [143];
export const modules = {
  7898: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BloxdDiscordSDK: () => Hk,
      DiscordLoginCancelledError: () => Uk,
      discordPopupTimeoutMs: () => nk
    });
    var Dk = ik(165),
      fk = ik(1212),
      Sk = ik(1104),
      bk = ik(1120),
      rk = ik.n(bk),
      Pk = ik(1177),
      mk = ik(38),
      Mk = ik(594),
      Kk = ik(1333),
      xk = ik(1181);
    const nk = 6e5;
    class Uk extends Error {
      constructor() {
        super(...arguments), this.name = Sk.discordLoginCancelledErrorName
      }
    }
    class Hk {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = fk.k[xk.e.clientEnvironment];
        const kk = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (ek => {
          var ik;
          if (ek.origin !== kk || "oauth_authentication_discord" !== (null === (ik = ek.data) || void 0 === ik ? void 0 : ik.type)) return;
          if ("string" !== typeof ek.data.code || !ek.data.code) return void this.failPopup(new Uk("Discord authentication was cancelled on Discord"));
          const Dk = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Dk || void 0 === Dk || Dk(ek.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(kk) {
        var ek;
        const ik = this.popupWindowPromiseReject;
        null === (ek = this.popupWindow) || void 0 === ek || ek.close(), this.resetPopupState(), null === ik || void 0 === ik || ik(kk)
      }
      openDiscordOAuthWindow() {
        const kk = xk.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${kk}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((kk, ek) => {
          Kk.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((ik => {
            !0 === ik ? kk() : ek(new Uk("Discord login was cancelled"))
          })).catch(ek)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const kk = new Promise(((kk, ek) => {
          this.popupWindowPromiseResolve = kk, this.popupWindowPromiseReject = ek
        }));
        return this.popupWindowPromise = kk, mk.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), nk), this.openPopup(kk).catch((ek => {
          this.popupWindowPromise === kk && this.failPopup(ek instanceof Error ? ek : new Error(String(ek)))
        })), kk
      }
      async openPopup(kk) {
        let ek = this.openDiscordOAuthWindow();
        if (!ek) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== kk) return;
          ek = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", ek), !ek) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = ek;
        const ik = window.setInterval((() => {
          ek.closed && this.popupWindowPromise === kk && (window.clearInterval(ik), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === kk && this.failPopup(new Uk("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = ik
      }
      async exchangeAuthorizationCodeForAccessToken(kk, ek) {
        const {
          accessToken: ik,
          refreshToken: Dk
        } = await rk()((async () => await (0, Sk.postJsonWithMetricsCookiesAndJsonResponse)(`${Pk.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: kk,
          bloxdClientEnvironment: xk.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, ek.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Dk, this.bloxdDiscordRefreshTokenKey), mk.c.setItem(this.bloxdDiscordRefreshTokenKey, Dk), ik
      }
      hasCurrentUser() {
        const kk = mk.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Mk.F)(kk)
      }
      async getCurrentUser(kk) {
        const ek = mk.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!ek) return null;
        let ik;
        try {
          const Dk = await rk()((async () => {
            try {
              return await (0, Sk.postJsonWithMetricsCookiesAndJsonResponse)(`${Pk.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: ek
              }, {
                retries: 0
              }, kk.getMetricsCookies())
            } catch (ik) {
              if (wk(ik)) throw new(rk().AbortError)(ik);
              throw ik
            }
          }), {
            retries: 3
          });
          ik = Dk.accessToken, mk.c.setItem(this.bloxdDiscordRefreshTokenKey, Dk.refreshToken)
        } catch (Dk) {
          return wk(Dk) ? (mk.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Dk), null)
        }
        return {
          accessToken: ik
        }
      }
      signOut() {
        this.failPopup(new Uk("Signed out of Discord during login")), mk.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function wk(kk) {
      return kk instanceof Dk.d && 435 === kk.httpCode
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);