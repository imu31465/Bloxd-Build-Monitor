export const id = 139;
export const ids = [139];
export const modules = {
  7940: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BloxdDiscordSDK: () => Od,
      DiscordLoginCancelledError: () => Ld,
      discordPopupTimeoutMs: () => Qd
    });
    var pd = kd(149),
      Nd = kd(1250),
      Wd = kd(1147),
      Pd = kd(1165),
      Zd = kd.n(Pd),
      gd = kd(1220),
      Cd = kd(33),
      Kd = kd(610),
      od = kd(1371),
      ld = kd(1227);
    const Qd = 6e5;
    class Ld extends Error {
      constructor() {
        super(...arguments), this.name = Wd.discordLoginCancelledErrorName
      }
    }
    class Od {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Nd.r[ld.b.clientEnvironment];
        const dd = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Jd => {
          var kd;
          if (Jd.origin !== dd || "oauth_authentication_discord" !== (null === (kd = Jd.data) || void 0 === kd ? void 0 : kd.type)) return;
          if ("string" !== typeof Jd.data.code || !Jd.data.code) return void this.failPopup(new Ld("Discord authentication was cancelled on Discord"));
          const pd = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === pd || void 0 === pd || pd(Jd.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(dd) {
        var Jd;
        const kd = this.popupWindowPromiseReject;
        null === (Jd = this.popupWindow) || void 0 === Jd || Jd.close(), this.resetPopupState(), null === kd || void 0 === kd || kd(dd)
      }
      openDiscordOAuthWindow() {
        const dd = ld.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${dd}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((dd, Jd) => {
          od.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((kd => {
            !0 === kd ? dd() : Jd(new Ld("Discord login was cancelled"))
          })).catch(Jd)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const dd = new Promise(((dd, Jd) => {
          this.popupWindowPromiseResolve = dd, this.popupWindowPromiseReject = Jd
        }));
        return this.popupWindowPromise = dd, Cd.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Qd), this.openPopup(dd).catch((Jd => {
          this.popupWindowPromise === dd && this.failPopup(Jd instanceof Error ? Jd : new Error(String(Jd)))
        })), dd
      }
      async openPopup(dd) {
        let Jd = this.openDiscordOAuthWindow();
        if (!Jd) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== dd) return;
          Jd = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Jd), !Jd) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Jd;
        const kd = window.setInterval((() => {
          Jd.closed && this.popupWindowPromise === dd && (window.clearInterval(kd), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === dd && this.failPopup(new Ld("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = kd
      }
      async exchangeAuthorizationCodeForAccessToken(dd, Jd) {
        const {
          accessToken: kd,
          refreshToken: pd
        } = await Zd()((async () => await (0, Wd.postJsonWithMetricsCookiesAndJsonResponse)(`${gd.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: dd,
          bloxdClientEnvironment: ld.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Jd.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", pd, this.bloxdDiscordRefreshTokenKey), Cd.d.setItem(this.bloxdDiscordRefreshTokenKey, pd), kd
      }
      hasCurrentUser() {
        const dd = Cd.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Kd.I)(dd)
      }
      async getCurrentUser(dd) {
        const Jd = Cd.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Jd) return null;
        let kd;
        try {
          const pd = await Zd()((async () => {
            try {
              return await (0, Wd.postJsonWithMetricsCookiesAndJsonResponse)(`${gd.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Jd
              }, {
                retries: 0
              }, dd.getMetricsCookies())
            } catch (kd) {
              if (ed(kd)) throw new(Zd().AbortError)(kd);
              throw kd
            }
          }), {
            retries: 3
          });
          kd = pd.accessToken, Cd.d.setItem(this.bloxdDiscordRefreshTokenKey, pd.refreshToken)
        } catch (pd) {
          return ed(pd) ? (Cd.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", pd), null)
        }
        return {
          accessToken: kd
        }
      }
      signOut() {
        this.failPopup(new Ld("Signed out of Discord during login")), Cd.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function ed(dd) {
      return dd instanceof pd.c && 435 === dd.httpCode
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);