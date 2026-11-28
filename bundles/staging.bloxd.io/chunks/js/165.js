export const id = 165;
export const ids = [165];
export const modules = {
  7892: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BloxdDiscordSDK: () => Eb,
      DiscordLoginCancelledError: () => Cb,
      discordPopupTimeoutMs: () => tb
    });
    var eb = Mb(192),
      Hb = Mb(1304),
      pb = Mb(1186),
      Vb = Mb(1205),
      gb = Mb.n(Vb),
      lb = Mb(1271),
      Lb = Mb(43),
      Ib = Mb(661),
      Ob = Mb(1504),
      Ub = Mb(1277);
    const tb = 6e5;
    class Cb extends Error {
      constructor() {
        super(...arguments), this.name = pb.discordLoginCancelledErrorName
      }
    }
    class Eb {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Hb.m[Ub.c.clientEnvironment];
        const bb = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (wb => {
          var Mb;
          if (wb.origin !== bb || "oauth_authentication_discord" !== (null === (Mb = wb.data) || void 0 === Mb ? void 0 : Mb.type)) return;
          if ("string" !== typeof wb.data.code || !wb.data.code) return void this.failPopup(new Cb("Discord authentication was cancelled on Discord"));
          const eb = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === eb || void 0 === eb || eb(wb.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(bb) {
        var wb;
        const Mb = this.popupWindowPromiseReject;
        null === (wb = this.popupWindow) || void 0 === wb || wb.close(), this.resetPopupState(), null === Mb || void 0 === Mb || Mb(bb)
      }
      openDiscordOAuthWindow() {
        const bb = Ub.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${bb}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((bb, wb) => {
          Ob.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Mb => {
            !0 === Mb ? bb() : wb(new Cb("Discord login was cancelled"))
          })).catch(wb)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const bb = new Promise(((bb, wb) => {
          this.popupWindowPromiseResolve = bb, this.popupWindowPromiseReject = wb
        }));
        return this.popupWindowPromise = bb, Lb.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), tb), this.openPopup(bb).catch((wb => {
          this.popupWindowPromise === bb && this.failPopup(wb instanceof Error ? wb : new Error(String(wb)))
        })), bb
      }
      async openPopup(bb) {
        let wb = this.openDiscordOAuthWindow();
        if (!wb) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== bb) return;
          wb = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", wb), !wb) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = wb;
        const Mb = window.setInterval((() => {
          wb.closed && this.popupWindowPromise === bb && (window.clearInterval(Mb), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === bb && this.failPopup(new Cb("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Mb
      }
      async exchangeAuthorizationCodeForAccessToken(bb, wb) {
        const {
          accessToken: Mb,
          refreshToken: eb
        } = await gb()((async () => await (0, pb.postJsonWithMetricsCookiesAndJsonResponse)(`${lb.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: bb,
          bloxdClientEnvironment: Ub.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, wb.getMetricsCookies())), {
          retries: 3
        });
        return Lb.d.setItem(this.bloxdDiscordRefreshTokenKey, eb), Mb
      }
      hasCurrentUser() {
        const bb = Lb.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Ib.K)(bb)
      }
      async getCurrentUser(bb) {
        const wb = Lb.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!wb) return null;
        let Mb;
        try {
          const eb = await gb()((async () => {
            try {
              return await (0, pb.postJsonWithMetricsCookiesAndJsonResponse)(`${lb.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: wb
              }, {
                retries: 0
              }, bb.getMetricsCookies())
            } catch (Mb) {
              if (Fb(Mb)) throw new(gb().AbortError)(Mb);
              throw Mb
            }
          }), {
            retries: 3
          });
          Mb = eb.accessToken, Lb.d.setItem(this.bloxdDiscordRefreshTokenKey, eb.refreshToken)
        } catch (eb) {
          return Fb(eb) ? (Lb.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", eb), null)
        }
        return {
          accessToken: Mb
        }
      }
      signOut() {
        this.failPopup(new Cb("Signed out of Discord during login")), Lb.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function Fb(bb) {
      return bb instanceof eb.b && 435 === bb.httpCode
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);