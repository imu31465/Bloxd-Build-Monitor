export const id = 130;
export const ids = [130];
export const modules = {
  6969: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdDiscordSDK: () => ec,
      DiscordLoginCancelledError: () => mB,
      discordPopupTimeoutMs: () => fc
    });
    var Vc = nc(152),
      Ic = nc(1094),
      rB = nc(988),
      uc = nc(999),
      sc = nc.n(uc),
      Mc = nc(1062),
      Pc = nc(51),
      qB = nc(569),
      Oc = nc(1194),
      Tc = nc(1070);
    const fc = 6e5;
    class mB extends Error {
      constructor() {
        super(...arguments), this.name = rB.discordLoginCancelledErrorName
      }
    }
    class ec {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Ic.n[Tc.d.clientEnvironment];
        const cB = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (Bc => {
          var nc;
          if (Bc.origin !== cB || "oauth_authentication_discord" !== (null === (nc = Bc.data) || void 0 === nc ? void 0 : nc.type)) return;
          if ("string" !== typeof Bc.data.code || !Bc.data.code) return void this.failPopup(new mB("Discord authentication was cancelled on Discord"));
          const Vc = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Vc || void 0 === Vc || Vc(Bc.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(cB) {
        var Bc;
        const nc = this.popupWindowPromiseReject;
        null === (Bc = this.popupWindow) || void 0 === Bc || Bc.close(), this.resetPopupState(), null === nc || void 0 === nc || nc(cB)
      }
      openDiscordOAuthWindow() {
        const cB = Tc.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${cB}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((cB, Bc) => {
          Oc.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((nc => {
            nc ? cB() : Bc(new mB("Discord login was cancelled"))
          })).catch(Bc)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const cB = new Promise(((cB, Bc) => {
          this.popupWindowPromiseResolve = cB, this.popupWindowPromiseReject = Bc
        }));
        return this.popupWindowPromise = cB, Pc.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), fc), this.openPopup(cB).catch((Bc => {
          this.popupWindowPromise === cB && this.failPopup(Bc instanceof Error ? Bc : new Error(String(Bc)))
        })), cB
      }
      async openPopup(cB) {
        let Bc = this.openDiscordOAuthWindow();
        if (!Bc) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== cB) return;
          Bc = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", Bc), !Bc) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = Bc;
        const nc = window.setInterval((() => {
          Bc.closed && this.popupWindowPromise === cB && (window.clearInterval(nc), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === cB && this.failPopup(new mB("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = nc
      }
      async exchangeAuthorizationCodeForAccessToken(cB, Bc) {
        const {
          accessToken: nc,
          refreshToken: Vc
        } = await sc()((async () => await (0, rB.postJsonWithMetricsCookiesAndJsonResponse)(`${Mc.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: cB,
          bloxdClientEnvironment: Tc.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, Bc.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Vc, this.bloxdDiscordRefreshTokenKey), Pc.c.setItem(this.bloxdDiscordRefreshTokenKey, Vc), nc
      }
      hasCurrentUser() {
        const cB = Pc.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, qB.E)(cB)
      }
      async getCurrentUser(cB) {
        const Bc = Pc.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!Bc) return null;
        let nc;
        try {
          const Vc = await sc()((async () => {
            try {
              return await (0, rB.postJsonWithMetricsCookiesAndJsonResponse)(`${Mc.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: Bc
              }, {
                retries: 0
              }, cB.getMetricsCookies())
            } catch (nc) {
              if (tB(nc)) throw new(sc().AbortError)(nc);
              throw nc
            }
          }), {
            retries: 3
          });
          nc = Vc.accessToken, Pc.c.setItem(this.bloxdDiscordRefreshTokenKey, Vc.refreshToken)
        } catch (Vc) {
          return tB(Vc) ? (Pc.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Vc), null)
        }
        return {
          accessToken: nc
        }
      }
      signOut() {
        this.failPopup(new mB("Signed out of Discord during login")), Pc.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function tB(cB) {
      return cB instanceof Vc.c && 435 === cB.httpCode
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);