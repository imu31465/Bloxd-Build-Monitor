export const id = 138;
export const ids = [138];
export const modules = {
  7835: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BloxdDiscordSDK: () => pu,
      DiscordLoginCancelledError: () => Su,
      discordPopupTimeoutMs: () => xu
    });
    var Eu = yu(174),
      Ku = yu(1207),
      Qu = yu(1110),
      mu = yu(1120),
      Ju = yu.n(mu),
      Nu = yu(1176),
      Xu = yu(47),
      Vu = yu(610),
      ru = yu(1311),
      Bu = yu(1183);
    const xu = 6e5;
    class Su extends Error {
      constructor() {
        super(...arguments), this.name = Qu.discordLoginCancelledErrorName
      }
    }
    class pu {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Ku.k[Bu.c.clientEnvironment];
        const uu = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Ru => {
          var yu;
          if (Ru.origin !== uu || "oauth_authentication_discord" !== (null === (yu = Ru.data) || void 0 === yu ? void 0 : yu.type)) return;
          if ("string" !== typeof Ru.data.code || !Ru.data.code) return void this.failPopup(new Su("Discord authentication was cancelled on Discord"));
          const Eu = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Eu || void 0 === Eu || Eu(Ru.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(uu) {
        var Ru;
        const yu = this.popupWindowPromiseReject;
        null === (Ru = this.popupWindow) || void 0 === Ru || Ru.close(), this.resetPopupState(), null === yu || void 0 === yu || yu(uu)
      }
      openDiscordOAuthWindow() {
        const uu = Bu.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${uu}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((uu, Ru) => {
          ru.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((yu => {
            !0 === yu ? uu() : Ru(new Su("Discord login was cancelled"))
          })).catch(Ru)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const uu = new Promise(((uu, Ru) => {
          this.popupWindowPromiseResolve = uu, this.popupWindowPromiseReject = Ru
        }));
        return this.popupWindowPromise = uu, Xu.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), xu), this.openPopup(uu).catch((Ru => {
          this.popupWindowPromise === uu && this.failPopup(Ru instanceof Error ? Ru : new Error(String(Ru)))
        })), uu
      }
      async openPopup(uu) {
        let Ru = this.openDiscordOAuthWindow();
        if (!Ru) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== uu) return;
          Ru = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Ru), !Ru) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Ru;
        const yu = window.setInterval((() => {
          Ru.closed && this.popupWindowPromise === uu && (window.clearInterval(yu), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === uu && this.failPopup(new Su("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = yu
      }
      async exchangeAuthorizationCodeForAccessToken(uu, Ru) {
        const {
          accessToken: yu,
          refreshToken: Eu
        } = await Ju()((async () => await (0, Qu.postJsonWithMetricsCookiesAndJsonResponse)(`${Nu.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: uu,
          bloxdClientEnvironment: Bu.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Ru.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Eu, this.bloxdDiscordRefreshTokenKey), Xu.c.setItem(this.bloxdDiscordRefreshTokenKey, Eu), yu
      }
      hasCurrentUser() {
        const uu = Xu.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, Vu.E)(uu)
      }
      async getCurrentUser(uu) {
        const Ru = Xu.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Ru) return null;
        let yu;
        try {
          const Eu = await Ju()((async () => {
            try {
              return await (0, Qu.postJsonWithMetricsCookiesAndJsonResponse)(`${Nu.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Ru
              }, {
                retries: 0
              }, uu.getMetricsCookies())
            } catch (yu) {
              if (Tu(yu)) throw new(Ju().AbortError)(yu);
              throw yu
            }
          }), {
            retries: 3
          });
          yu = Eu.accessToken, Xu.c.setItem(this.bloxdDiscordRefreshTokenKey, Eu.refreshToken)
        } catch (Eu) {
          return Tu(Eu) ? (Xu.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Eu), null)
        }
        return {
          accessToken: yu
        }
      }
      signOut() {
        this.failPopup(new Su("Signed out of Discord during login")), Xu.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function Tu(uu) {
      return uu instanceof Eu.e && 435 === uu.httpCode
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);