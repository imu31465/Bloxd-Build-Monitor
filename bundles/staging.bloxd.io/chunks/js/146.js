export const id = 146;
export const ids = [146];
export const modules = {
  8310: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BloxdDiscordSDK: () => wt,
      DiscordLoginCancelledError: () => ft,
      discordPopupTimeoutMs: () => Et
    });
    var Ot = Vt(184),
      qt = Vt(1314),
      Dt = Vt(1223),
      mt = Vt(1240),
      dt = Vt.n(mt),
      jt = Vt(1293),
      Ht = Vt(39),
      Xt = Vt(710),
      Qt = Vt(1450),
      lt = Vt(1169);
    const Et = 6e5;
    class ft extends Error {
      constructor() {
        super(...arguments), this.name = Dt.discordLoginCancelledErrorName
      }
    }
    class wt {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = qt.o[lt.e.clientEnvironment];
        const tt = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (et => {
          var Vt;
          if (et.origin !== tt || "oauth_authentication_discord" !== (null === (Vt = et.data) || void 0 === Vt ? void 0 : Vt.type)) return;
          if ("string" !== typeof et.data.code || !et.data.code) return void this.failPopup(new ft("Discord authentication was cancelled on Discord"));
          const Ot = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Ot || void 0 === Ot || Ot(et.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(tt) {
        var et;
        const Vt = this.popupWindowPromiseReject;
        null === (et = this.popupWindow) || void 0 === et || et.close(), this.resetPopupState(), null === Vt || void 0 === Vt || Vt(tt)
      }
      openDiscordOAuthWindow() {
        const tt = lt.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${tt}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((tt, et) => {
          Qt.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Vt => {
            !0 === Vt ? tt() : et(new ft("Discord login was cancelled"))
          })).catch(et)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const tt = new Promise(((tt, et) => {
          this.popupWindowPromiseResolve = tt, this.popupWindowPromiseReject = et
        }));
        return this.popupWindowPromise = tt, Ht.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Et), this.openPopup(tt).catch((et => {
          this.popupWindowPromise === tt && this.failPopup(et instanceof Error ? et : new Error(String(et)))
        })), tt
      }
      async openPopup(tt) {
        let et = this.openDiscordOAuthWindow();
        if (!et) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== tt) return;
          et = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", et), !et) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = et;
        const Vt = window.setInterval((() => {
          et.closed && this.popupWindowPromise === tt && (window.clearInterval(Vt), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === tt && this.failPopup(new ft("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Vt
      }
      async exchangeAuthorizationCodeForAccessToken(tt, et) {
        const {
          accessToken: Vt,
          refreshToken: Ot
        } = await dt()((async () => await (0, Dt.postJsonWithMetricsCookiesAndJsonResponse)(`${jt.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: tt,
          bloxdClientEnvironment: lt.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, et.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Ot, this.bloxdDiscordRefreshTokenKey), Ht.b.setItem(this.bloxdDiscordRefreshTokenKey, Ot), Vt
      }
      hasCurrentUser() {
        const tt = Ht.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Xt.B)(tt)
      }
      async getCurrentUser(tt) {
        const et = Ht.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!et) return null;
        let Vt;
        try {
          const Ot = await dt()((async () => {
            try {
              return await (0, Dt.postJsonWithMetricsCookiesAndJsonResponse)(`${jt.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: et
              }, {
                retries: 0
              }, tt.getMetricsCookies())
            } catch (Vt) {
              if (yt(Vt)) throw new(dt().AbortError)(Vt);
              throw Vt
            }
          }), {
            retries: 3
          });
          Vt = Ot.accessToken, Ht.b.setItem(this.bloxdDiscordRefreshTokenKey, Ot.refreshToken)
        } catch (Ot) {
          return yt(Ot) ? (Ht.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Ot), null)
        }
        return {
          accessToken: Vt
        }
      }
      signOut() {
        this.failPopup(new ft("Signed out of Discord during login")), Ht.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function yt(tt) {
      return tt instanceof Ot.e && 435 === tt.httpCode
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);