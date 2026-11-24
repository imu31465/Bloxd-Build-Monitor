export const id = 144;
export const ids = [144];
export const modules = {
  7993: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BloxdDiscordSDK: () => Ym,
      DiscordLoginCancelledError: () => Om,
      discordPopupTimeoutMs: () => om
    });
    var hm = fm(168),
      Am = fm(1238),
      am = fm(1162),
      xm = fm(1170),
      wm = fm.n(xm),
      Dm = fm(1214),
      im = fm(37),
      Rm = fm(653),
      pm = fm(1354),
      Em = fm(1105);
    const om = 6e5;
    class Om extends Error {
      constructor() {
        super(...arguments), this.name = am.discordLoginCancelledErrorName
      }
    }
    class Ym {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Am.l[Em.d.clientEnvironment];
        const mm = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Tm => {
          var fm;
          if (Tm.origin !== mm || "oauth_authentication_discord" !== (null === (fm = Tm.data) || void 0 === fm ? void 0 : fm.type)) return;
          if ("string" !== typeof Tm.data.code || !Tm.data.code) return void this.failPopup(new Om("Discord authentication was cancelled on Discord"));
          const hm = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === hm || void 0 === hm || hm(Tm.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(mm) {
        var Tm;
        const fm = this.popupWindowPromiseReject;
        null === (Tm = this.popupWindow) || void 0 === Tm || Tm.close(), this.resetPopupState(), null === fm || void 0 === fm || fm(mm)
      }
      openDiscordOAuthWindow() {
        const mm = Em.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${mm}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((mm, Tm) => {
          pm.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((fm => {
            !0 === fm ? mm() : Tm(new Om("Discord login was cancelled"))
          })).catch(Tm)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const mm = new Promise(((mm, Tm) => {
          this.popupWindowPromiseResolve = mm, this.popupWindowPromiseReject = Tm
        }));
        return this.popupWindowPromise = mm, im.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), om), this.openPopup(mm).catch((Tm => {
          this.popupWindowPromise === mm && this.failPopup(Tm instanceof Error ? Tm : new Error(String(Tm)))
        })), mm
      }
      async openPopup(mm) {
        let Tm = this.openDiscordOAuthWindow();
        if (!Tm) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== mm) return;
          Tm = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Tm), !Tm) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Tm;
        const fm = window.setInterval((() => {
          Tm.closed && this.popupWindowPromise === mm && (window.clearInterval(fm), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === mm && this.failPopup(new Om("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = fm
      }
      async exchangeAuthorizationCodeForAccessToken(mm, Tm) {
        const {
          accessToken: fm,
          refreshToken: hm
        } = await wm()((async () => await (0, am.postJsonWithMetricsCookiesAndJsonResponse)(`${Dm.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: mm,
          bloxdClientEnvironment: Em.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Tm.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", hm, this.bloxdDiscordRefreshTokenKey), im.d.setItem(this.bloxdDiscordRefreshTokenKey, hm), fm
      }
      hasCurrentUser() {
        const mm = im.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Rm.H)(mm)
      }
      async getCurrentUser(mm) {
        const Tm = im.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Tm) return null;
        let fm;
        try {
          const hm = await wm()((async () => {
            try {
              return await (0, am.postJsonWithMetricsCookiesAndJsonResponse)(`${Dm.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Tm
              }, {
                retries: 0
              }, mm.getMetricsCookies())
            } catch (fm) {
              if (qm(fm)) throw new(wm().AbortError)(fm);
              throw fm
            }
          }), {
            retries: 3
          });
          fm = hm.accessToken, im.d.setItem(this.bloxdDiscordRefreshTokenKey, hm.refreshToken)
        } catch (hm) {
          return qm(hm) ? (im.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", hm), null)
        }
        return {
          accessToken: fm
        }
      }
      signOut() {
        this.failPopup(new Om("Signed out of Discord during login")), im.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function qm(mm) {
      return mm instanceof hm.d && 435 === mm.httpCode
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);