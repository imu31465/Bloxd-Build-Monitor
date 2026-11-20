export const id = 138;
export const ids = [138];
export const modules = {
  7662: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BloxdDiscordSDK: () => Rb,
      DiscordLoginCancelledError: () => jb,
      discordPopupTimeoutMs: () => Xb
    });
    var Ab = Ub(166),
      Mb = Ub(1171),
      Tb = Ub(1065),
      Eb = Ub(1084),
      Yb = Ub.n(Eb),
      Bb = Ub(1142),
      eb = Ub(31),
      vb = Ub(591),
      Lb = Ub(1260),
      Pb = Ub(1145);
    const Xb = 6e5;
    class jb extends Error {
      constructor() {
        super(...arguments), this.name = Tb.discordLoginCancelledErrorName
      }
    }
    class Rb {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Mb.k[Pb.c.clientEnvironment];
        const bb = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (ab => {
          var Ub;
          if (ab.origin !== bb || "oauth_authentication_discord" !== (null === (Ub = ab.data) || void 0 === Ub ? void 0 : Ub.type)) return;
          if ("string" !== typeof ab.data.code || !ab.data.code) return void this.failPopup(new jb("Discord authentication was cancelled on Discord"));
          const Ab = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Ab || void 0 === Ab || Ab(ab.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(bb) {
        var ab;
        const Ub = this.popupWindowPromiseReject;
        null === (ab = this.popupWindow) || void 0 === ab || ab.close(), this.resetPopupState(), null === Ub || void 0 === Ub || Ub(bb)
      }
      openDiscordOAuthWindow() {
        const bb = Pb.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${bb}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((bb, ab) => {
          Lb.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Ub => {
            !0 === Ub ? bb() : ab(new jb("Discord login was cancelled"))
          })).catch(ab)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const bb = new Promise(((bb, ab) => {
          this.popupWindowPromiseResolve = bb, this.popupWindowPromiseReject = ab
        }));
        return this.popupWindowPromise = bb, eb.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Xb), this.openPopup(bb).catch((ab => {
          this.popupWindowPromise === bb && this.failPopup(ab instanceof Error ? ab : new Error(String(ab)))
        })), bb
      }
      async openPopup(bb) {
        let ab = this.openDiscordOAuthWindow();
        if (!ab) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== bb) return;
          ab = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", ab), !ab) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = ab;
        const Ub = window.setInterval((() => {
          ab.closed && this.popupWindowPromise === bb && (window.clearInterval(Ub), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === bb && this.failPopup(new jb("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Ub
      }
      async exchangeAuthorizationCodeForAccessToken(bb, ab) {
        const {
          accessToken: Ub,
          refreshToken: Ab
        } = await Yb()((async () => await (0, Tb.postJsonWithMetricsCookiesAndJsonResponse)(`${Bb.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: bb,
          bloxdClientEnvironment: Pb.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, ab.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Ab, this.bloxdDiscordRefreshTokenKey), eb.b.setItem(this.bloxdDiscordRefreshTokenKey, Ab), Ub
      }
      hasCurrentUser() {
        const bb = eb.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, vb.I)(bb)
      }
      async getCurrentUser(bb) {
        const ab = eb.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!ab) return null;
        let Ub;
        try {
          const Ab = await Yb()((async () => {
            try {
              return await (0, Tb.postJsonWithMetricsCookiesAndJsonResponse)(`${Bb.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: ab
              }, {
                retries: 0
              }, bb.getMetricsCookies())
            } catch (Ub) {
              if (kb(Ub)) throw new(Yb().AbortError)(Ub);
              throw Ub
            }
          }), {
            retries: 3
          });
          Ub = Ab.accessToken, eb.b.setItem(this.bloxdDiscordRefreshTokenKey, Ab.refreshToken)
        } catch (Ab) {
          return kb(Ab) ? (eb.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Ab), null)
        }
        return {
          accessToken: Ub
        }
      }
      signOut() {
        this.failPopup(new jb("Signed out of Discord during login")), eb.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function kb(bb) {
      return bb instanceof Ab.c && 435 === bb.httpCode
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);