export const id = 138;
export const ids = [138];
export const modules = {
  7775: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BloxdDiscordSDK: () => sv,
      DiscordLoginCancelledError: () => av,
      discordPopupTimeoutMs: () => wv
    });
    var hv = Pv(144),
      Sv = Pv(1212),
      ev = Pv(1114),
      gv = Pv(1135),
      pv = Pv.n(gv),
      dv = Pv(1184),
      Nv = Pv(39),
      lv = Pv(626),
      Tv = Pv(1336),
      Wv = Pv(1192);
    const wv = 6e5;
    class av extends Error {
      constructor() {
        super(...arguments), this.name = ev.discordLoginCancelledErrorName
      }
    }
    class sv {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Sv.n[Wv.b.clientEnvironment];
        const vv = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (zv => {
          var Pv;
          if (zv.origin !== vv || "oauth_authentication_discord" !== (null === (Pv = zv.data) || void 0 === Pv ? void 0 : Pv.type)) return;
          if ("string" !== typeof zv.data.code || !zv.data.code) return void this.failPopup(new av("Discord authentication was cancelled on Discord"));
          const hv = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === hv || void 0 === hv || hv(zv.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(vv) {
        var zv;
        const Pv = this.popupWindowPromiseReject;
        null === (zv = this.popupWindow) || void 0 === zv || zv.close(), this.resetPopupState(), null === Pv || void 0 === Pv || Pv(vv)
      }
      openDiscordOAuthWindow() {
        const vv = Wv.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${vv}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((vv, zv) => {
          Tv.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Pv => {
            !0 === Pv ? vv() : zv(new av("Discord login was cancelled"))
          })).catch(zv)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const vv = new Promise(((vv, zv) => {
          this.popupWindowPromiseResolve = vv, this.popupWindowPromiseReject = zv
        }));
        return this.popupWindowPromise = vv, Nv.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), wv), this.openPopup(vv).catch((zv => {
          this.popupWindowPromise === vv && this.failPopup(zv instanceof Error ? zv : new Error(String(zv)))
        })), vv
      }
      async openPopup(vv) {
        let zv = this.openDiscordOAuthWindow();
        if (!zv) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== vv) return;
          zv = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", zv), !zv) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = zv;
        const Pv = window.setInterval((() => {
          zv.closed && this.popupWindowPromise === vv && (window.clearInterval(Pv), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === vv && this.failPopup(new av("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Pv
      }
      async exchangeAuthorizationCodeForAccessToken(vv, zv) {
        const {
          accessToken: Pv,
          refreshToken: hv
        } = await pv()((async () => await (0, ev.postJsonWithMetricsCookiesAndJsonResponse)(`${dv.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: vv,
          bloxdClientEnvironment: Wv.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, zv.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", hv, this.bloxdDiscordRefreshTokenKey), Nv.b.setItem(this.bloxdDiscordRefreshTokenKey, hv), Pv
      }
      hasCurrentUser() {
        const vv = Nv.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, lv.N)(vv)
      }
      async getCurrentUser(vv) {
        const zv = Nv.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!zv) return null;
        let Pv;
        try {
          const hv = await pv()((async () => {
            try {
              return await (0, ev.postJsonWithMetricsCookiesAndJsonResponse)(`${dv.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: zv
              }, {
                retries: 0
              }, vv.getMetricsCookies())
            } catch (Pv) {
              if (Cv(Pv)) throw new(pv().AbortError)(Pv);
              throw Pv
            }
          }), {
            retries: 3
          });
          Pv = hv.accessToken, Nv.b.setItem(this.bloxdDiscordRefreshTokenKey, hv.refreshToken)
        } catch (hv) {
          return Cv(hv) ? (Nv.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", hv), null)
        }
        return {
          accessToken: Pv
        }
      }
      signOut() {
        this.failPopup(new av("Signed out of Discord during login")), Nv.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function Cv(vv) {
      return vv instanceof hv.c && 435 === vv.httpCode
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);