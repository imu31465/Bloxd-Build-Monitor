export const id = 146;
export const ids = [146];
export const modules = {
  8295: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BloxdDiscordSDK: () => Yu,
      DiscordLoginCancelledError: () => Ou,
      discordPopupTimeoutMs: () => Nu
    });
    var su = ju(166),
      Uu = ju(1285),
      Zu = ju(1183),
      Xu = ju(1191),
      lu = ju.n(Xu),
      qu = ju(1255),
      fu = ju(31),
      Cu = ju(649),
      bu = ju(1405),
      cu = ju(1135);
    const Nu = 6e5;
    class Ou extends Error {
      constructor() {
        super(...arguments), this.name = Zu.discordLoginCancelledErrorName
      }
    }
    class Yu {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Uu.o[cu.e.clientEnvironment];
        const uu = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Eu => {
          var ju;
          if (Eu.origin !== uu || "oauth_authentication_discord" !== (null === (ju = Eu.data) || void 0 === ju ? void 0 : ju.type)) return;
          if ("string" !== typeof Eu.data.code || !Eu.data.code) return void this.failPopup(new Ou("Discord authentication was cancelled on Discord"));
          const su = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === su || void 0 === su || su(Eu.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(uu) {
        var Eu;
        const ju = this.popupWindowPromiseReject;
        null === (Eu = this.popupWindow) || void 0 === Eu || Eu.close(), this.resetPopupState(), null === ju || void 0 === ju || ju(uu)
      }
      openDiscordOAuthWindow() {
        const uu = cu.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${uu}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((uu, Eu) => {
          bu.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((ju => {
            !0 === ju ? uu() : Eu(new Ou("Discord login was cancelled"))
          })).catch(Eu)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const uu = new Promise(((uu, Eu) => {
          this.popupWindowPromiseResolve = uu, this.popupWindowPromiseReject = Eu
        }));
        return this.popupWindowPromise = uu, fu.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), Nu), this.openPopup(uu).catch((Eu => {
          this.popupWindowPromise === uu && this.failPopup(Eu instanceof Error ? Eu : new Error(String(Eu)))
        })), uu
      }
      async openPopup(uu) {
        let Eu = this.openDiscordOAuthWindow();
        if (!Eu) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== uu) return;
          Eu = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Eu), !Eu) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Eu;
        const ju = window.setInterval((() => {
          Eu.closed && this.popupWindowPromise === uu && (window.clearInterval(ju), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === uu && this.failPopup(new Ou("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = ju
      }
      async exchangeAuthorizationCodeForAccessToken(uu, Eu) {
        const {
          accessToken: ju,
          refreshToken: su
        } = await lu()((async () => await (0, Zu.postJsonWithMetricsCookiesAndJsonResponse)(`${qu.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: uu,
          bloxdClientEnvironment: cu.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Eu.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", su, this.bloxdDiscordRefreshTokenKey), fu.e.setItem(this.bloxdDiscordRefreshTokenKey, su), ju
      }
      hasCurrentUser() {
        const uu = fu.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Cu.H)(uu)
      }
      async getCurrentUser(uu) {
        const Eu = fu.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Eu) return null;
        let ju;
        try {
          const su = await lu()((async () => {
            try {
              return await (0, Zu.postJsonWithMetricsCookiesAndJsonResponse)(`${qu.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Eu
              }, {
                retries: 0
              }, uu.getMetricsCookies())
            } catch (ju) {
              if (hu(ju)) throw new(lu().AbortError)(ju);
              throw ju
            }
          }), {
            retries: 3
          });
          ju = su.accessToken, fu.e.setItem(this.bloxdDiscordRefreshTokenKey, su.refreshToken)
        } catch (su) {
          return hu(su) ? (fu.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", su), null)
        }
        return {
          accessToken: ju
        }
      }
      signOut() {
        this.failPopup(new Ou("Signed out of Discord during login")), fu.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function hu(uu) {
      return uu instanceof su.b && 435 === uu.httpCode
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);