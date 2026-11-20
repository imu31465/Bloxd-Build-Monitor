export const id = 139;
export const ids = [139];
export const modules = {
  7764: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BloxdDiscordSDK: () => pb,
      DiscordLoginCancelledError: () => Xb,
      discordPopupTimeoutMs: () => Zb
    });
    var Bb = hb(148),
      Ob = hb(1127),
      Gb = hb(1038),
      Ub = hb(1053),
      Lb = hb.n(Ub),
      Yb = hb(1103),
      Sb = hb(29),
      ab = hb(588),
      Hb = hb(1249),
      wb = hb(1108);
    const Zb = 6e5;
    class Xb extends Error {
      constructor() {
        super(...arguments), this.name = Gb.discordLoginCancelledErrorName
      }
    }
    class pb {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Ob.p[wb.b.clientEnvironment];
        const bb = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (ub => {
          var hb;
          if (ub.origin !== bb || "oauth_authentication_discord" !== (null === (hb = ub.data) || void 0 === hb ? void 0 : hb.type)) return;
          if ("string" !== typeof ub.data.code || !ub.data.code) return void this.failPopup(new Xb("Discord authentication was cancelled on Discord"));
          const Bb = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Bb || void 0 === Bb || Bb(ub.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(bb) {
        var ub;
        const hb = this.popupWindowPromiseReject;
        null === (ub = this.popupWindow) || void 0 === ub || ub.close(), this.resetPopupState(), null === hb || void 0 === hb || hb(bb)
      }
      openDiscordOAuthWindow() {
        const bb = wb.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${bb}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((bb, ub) => {
          Hb.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((hb => {
            !0 === hb ? bb() : ub(new Xb("Discord login was cancelled"))
          })).catch(ub)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const bb = new Promise(((bb, ub) => {
          this.popupWindowPromiseResolve = bb, this.popupWindowPromiseReject = ub
        }));
        return this.popupWindowPromise = bb, Sb.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Zb), this.openPopup(bb).catch((ub => {
          this.popupWindowPromise === bb && this.failPopup(ub instanceof Error ? ub : new Error(String(ub)))
        })), bb
      }
      async openPopup(bb) {
        let ub = this.openDiscordOAuthWindow();
        if (!ub) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== bb) return;
          ub = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", ub), !ub) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = ub;
        const hb = window.setInterval((() => {
          ub.closed && this.popupWindowPromise === bb && (window.clearInterval(hb), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === bb && this.failPopup(new Xb("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = hb
      }
      async exchangeAuthorizationCodeForAccessToken(bb, ub) {
        const {
          accessToken: hb,
          refreshToken: Bb
        } = await Lb()((async () => await (0, Gb.postJsonWithMetricsCookiesAndJsonResponse)(`${Yb.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: bb,
          bloxdClientEnvironment: wb.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, ub.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Bb, this.bloxdDiscordRefreshTokenKey), Sb.c.setItem(this.bloxdDiscordRefreshTokenKey, Bb), hb
      }
      hasCurrentUser() {
        const bb = Sb.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, ab.J)(bb)
      }
      async getCurrentUser(bb) {
        const ub = Sb.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!ub) return null;
        let hb;
        try {
          const Bb = await Lb()((async () => {
            try {
              return await (0, Gb.postJsonWithMetricsCookiesAndJsonResponse)(`${Yb.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: ub
              }, {
                retries: 0
              }, bb.getMetricsCookies())
            } catch (hb) {
              if (ob(hb)) throw new(Lb().AbortError)(hb);
              throw hb
            }
          }), {
            retries: 3
          });
          hb = Bb.accessToken, Sb.c.setItem(this.bloxdDiscordRefreshTokenKey, Bb.refreshToken)
        } catch (Bb) {
          return ob(Bb) ? (Sb.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Bb), null)
        }
        return {
          accessToken: hb
        }
      }
      signOut() {
        this.failPopup(new Xb("Signed out of Discord during login")), Sb.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function ob(bb) {
      return bb instanceof Bb.b && 435 === bb.httpCode
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);