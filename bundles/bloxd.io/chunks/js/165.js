export const id = 165;
export const ids = [165];
export const modules = {
  7633: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BloxdDiscordSDK: () => Hd,
      DiscordLoginCancelledError: () => qd,
      discordPopupTimeoutMs: () => Nd
    });
    var Wd = md(180),
      Fd = md(1289),
      Rd = md(1189),
      Xd = md(1200),
      Kd = md.n(Xd),
      hd = md(1253),
      vd = md(46),
      Qd = md(701),
      td = md(1462),
      od = md(1262);
    const Nd = 6e5;
    class qd extends Error {
      constructor() {
        super(...arguments), this.name = Rd.discordLoginCancelledErrorName
      }
    }
    class Hd {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Fd.t[od.b.clientEnvironment];
        const dd = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Od => {
          var md;
          if (Od.origin !== dd || "oauth_authentication_discord" !== (null === (md = Od.data) || void 0 === md ? void 0 : md.type)) return;
          if ("string" !== typeof Od.data.code || !Od.data.code) return void this.failPopup(new qd("Discord authentication was cancelled on Discord"));
          const Wd = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Wd || void 0 === Wd || Wd(Od.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(dd) {
        var Od;
        const md = this.popupWindowPromiseReject;
        null === (Od = this.popupWindow) || void 0 === Od || Od.close(), this.resetPopupState(), null === md || void 0 === md || md(dd)
      }
      openDiscordOAuthWindow() {
        const dd = od.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${dd}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((dd, Od) => {
          td.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((md => {
            !0 === md ? dd() : Od(new qd("Discord login was cancelled"))
          })).catch(Od)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const dd = new Promise(((dd, Od) => {
          this.popupWindowPromiseResolve = dd, this.popupWindowPromiseReject = Od
        }));
        return this.popupWindowPromise = dd, vd.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Nd), this.openPopup(dd).catch((Od => {
          this.popupWindowPromise === dd && this.failPopup(Od instanceof Error ? Od : new Error(String(Od)))
        })), dd
      }
      async openPopup(dd) {
        let Od = this.openDiscordOAuthWindow();
        if (!Od) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== dd) return;
          Od = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Od), !Od) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Od;
        const md = window.setInterval((() => {
          Od.closed && this.popupWindowPromise === dd && (window.clearInterval(md), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === dd && this.failPopup(new qd("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = md
      }
      async exchangeAuthorizationCodeForAccessToken(dd, Od) {
        const {
          accessToken: md,
          refreshToken: Wd
        } = await Kd()((async () => await (0, Rd.postJsonWithMetricsCookiesAndJsonResponse)(`${hd.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: dd,
          bloxdClientEnvironment: od.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Od.getMetricsCookies())), {
          retries: 3
        });
        return vd.e.setItem(this.bloxdDiscordRefreshTokenKey, Wd), md
      }
      hasCurrentUser() {
        const dd = vd.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Qd.O)(dd)
      }
      async getCurrentUser(dd) {
        const Od = vd.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Od) return null;
        let md;
        try {
          const Wd = await Kd()((async () => {
            try {
              return await (0, Rd.postJsonWithMetricsCookiesAndJsonResponse)(`${hd.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Od
              }, {
                retries: 0
              }, dd.getMetricsCookies())
            } catch (md) {
              if (yd(md)) throw new(Kd().AbortError)(md);
              throw md
            }
          }), {
            retries: 3
          });
          md = Wd.accessToken, vd.e.setItem(this.bloxdDiscordRefreshTokenKey, Wd.refreshToken)
        } catch (Wd) {
          return yd(Wd) ? (vd.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Wd), null)
        }
        return {
          accessToken: md
        }
      }
      signOut() {
        this.failPopup(new qd("Signed out of Discord during login")), vd.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function yd(dd) {
      return dd instanceof Wd.e && 435 === dd.httpCode
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);