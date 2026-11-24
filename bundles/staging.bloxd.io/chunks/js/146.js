export const id = 146;
export const ids = [146];
export const modules = {
  8218: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BloxdDiscordSDK: () => Up,
      DiscordLoginCancelledError: () => yp,
      discordPopupTimeoutMs: () => Wp
    });
    var Op = cp(156),
      op = cp(1236),
      Ip = cp(1149),
      Sp = cp(1162),
      xp = cp.n(Sp),
      Lp = cp(1211),
      Yp = cp(44),
      Dp = cp(640),
      Ap = cp(1372),
      Pp = cp(1087);
    const Wp = 6e5;
    class yp extends Error {
      constructor() {
        super(...arguments), this.name = Ip.discordLoginCancelledErrorName
      }
    }
    class Up {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = op.l[Pp.c.clientEnvironment];
        const pp = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (ip => {
          var cp;
          if (ip.origin !== pp || "oauth_authentication_discord" !== (null === (cp = ip.data) || void 0 === cp ? void 0 : cp.type)) return;
          if ("string" !== typeof ip.data.code || !ip.data.code) return void this.failPopup(new yp("Discord authentication was cancelled on Discord"));
          const Op = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Op || void 0 === Op || Op(ip.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(pp) {
        var ip;
        const cp = this.popupWindowPromiseReject;
        null === (ip = this.popupWindow) || void 0 === ip || ip.close(), this.resetPopupState(), null === cp || void 0 === cp || cp(pp)
      }
      openDiscordOAuthWindow() {
        const pp = Pp.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${pp}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((pp, ip) => {
          Ap.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((cp => {
            !0 === cp ? pp() : ip(new yp("Discord login was cancelled"))
          })).catch(ip)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const pp = new Promise(((pp, ip) => {
          this.popupWindowPromiseResolve = pp, this.popupWindowPromiseReject = ip
        }));
        return this.popupWindowPromise = pp, Yp.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Wp), this.openPopup(pp).catch((ip => {
          this.popupWindowPromise === pp && this.failPopup(ip instanceof Error ? ip : new Error(String(ip)))
        })), pp
      }
      async openPopup(pp) {
        let ip = this.openDiscordOAuthWindow();
        if (!ip) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== pp) return;
          ip = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", ip), !ip) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = ip;
        const cp = window.setInterval((() => {
          ip.closed && this.popupWindowPromise === pp && (window.clearInterval(cp), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === pp && this.failPopup(new yp("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = cp
      }
      async exchangeAuthorizationCodeForAccessToken(pp, ip) {
        const {
          accessToken: cp,
          refreshToken: Op
        } = await xp()((async () => await (0, Ip.postJsonWithMetricsCookiesAndJsonResponse)(`${Lp.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: pp,
          bloxdClientEnvironment: Pp.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, ip.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Op, this.bloxdDiscordRefreshTokenKey), Yp.e.setItem(this.bloxdDiscordRefreshTokenKey, Op), cp
      }
      hasCurrentUser() {
        const pp = Yp.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Dp.G)(pp)
      }
      async getCurrentUser(pp) {
        const ip = Yp.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!ip) return null;
        let cp;
        try {
          const Op = await xp()((async () => {
            try {
              return await (0, Ip.postJsonWithMetricsCookiesAndJsonResponse)(`${Lp.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: ip
              }, {
                retries: 0
              }, pp.getMetricsCookies())
            } catch (cp) {
              if (wp(cp)) throw new(xp().AbortError)(cp);
              throw cp
            }
          }), {
            retries: 3
          });
          cp = Op.accessToken, Yp.e.setItem(this.bloxdDiscordRefreshTokenKey, Op.refreshToken)
        } catch (Op) {
          return wp(Op) ? (Yp.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Op), null)
        }
        return {
          accessToken: cp
        }
      }
      signOut() {
        this.failPopup(new yp("Signed out of Discord during login")), Yp.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function wp(pp) {
      return pp instanceof Op.e && 435 === pp.httpCode
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);