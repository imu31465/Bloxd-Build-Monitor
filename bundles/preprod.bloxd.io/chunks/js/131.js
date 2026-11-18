export const id = 131;
export const ids = [131];
export const modules = {
  7238: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BloxdDiscordSDK: () => Sy,
      DiscordLoginCancelledError: () => sy,
      discordPopupTimeoutMs: () => qb
    });
    var Uy = Wy(143),
      hy = Wy(1086),
      fy = Wy(987),
      Zy = Wy(1e3),
      cb = Wy.n(Zy),
      Py = Wy(1052),
      oy = Wy(33),
      By = Wy(547),
      Ky = Wy(1207),
      ey = Wy(1057);
    const qb = 6e5;
    class sy extends Error {
      constructor() {
        super(...arguments), this.name = fy.discordLoginCancelledErrorName
      }
    }
    class Sy {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = hy.q[ey.b.clientEnvironment];
        const yb = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (bb => {
          var Wy;
          if (bb.origin !== yb || "oauth_authentication_discord" !== (null === (Wy = bb.data) || void 0 === Wy ? void 0 : Wy.type)) return;
          if ("string" !== typeof bb.data.code || !bb.data.code) return void this.failPopup(new sy("Discord authentication was cancelled on Discord"));
          const Uy = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === Uy || void 0 === Uy || Uy(bb.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(yb) {
        var bb;
        const Wy = this.popupWindowPromiseReject;
        null === (bb = this.popupWindow) || void 0 === bb || bb.close(), this.resetPopupState(), null === Wy || void 0 === Wy || Wy(yb)
      }
      openDiscordOAuthWindow() {
        const yb = ey.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${yb}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((yb, bb) => {
          Ky.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((Wy => {
            Wy ? yb() : bb(new sy("Discord login was cancelled"))
          })).catch(bb)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const yb = new Promise(((yb, bb) => {
          this.popupWindowPromiseResolve = yb, this.popupWindowPromiseReject = bb
        }));
        return this.popupWindowPromise = yb, oy.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), qb), this.openPopup(yb).catch((bb => {
          this.popupWindowPromise === yb && this.failPopup(bb instanceof Error ? bb : new Error(String(bb)))
        })), yb
      }
      async openPopup(yb) {
        let bb = this.openDiscordOAuthWindow();
        if (!bb) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== yb) return;
          bb = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", bb), !bb) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = bb;
        const Wy = window.setInterval((() => {
          bb.closed && this.popupWindowPromise === yb && (window.clearInterval(Wy), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === yb && this.failPopup(new sy("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = Wy
      }
      async exchangeAuthorizationCodeForAccessToken(yb, bb) {
        const {
          accessToken: Wy,
          refreshToken: Uy
        } = await cb()((async () => await (0, fy.postJsonWithMetricsCookiesAndJsonResponse)(`${Py.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: yb,
          bloxdClientEnvironment: ey.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, bb.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", Uy, this.bloxdDiscordRefreshTokenKey), oy.b.setItem(this.bloxdDiscordRefreshTokenKey, Uy), Wy
      }
      hasCurrentUser() {
        const yb = oy.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, By.D)(yb)
      }
      async getCurrentUser(yb) {
        const bb = oy.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!bb) return null;
        let Wy;
        try {
          const Uy = await cb()((async () => {
            try {
              return await (0, fy.postJsonWithMetricsCookiesAndJsonResponse)(`${Py.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: bb
              }, {
                retries: 0
              }, yb.getMetricsCookies())
            } catch (Wy) {
              if (Ey(Wy)) throw new(cb().AbortError)(Wy);
              throw Wy
            }
          }), {
            retries: 3
          });
          Wy = Uy.accessToken, oy.b.setItem(this.bloxdDiscordRefreshTokenKey, Uy.refreshToken)
        } catch (Uy) {
          return Ey(Uy) ? (oy.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Uy), null)
        }
        return {
          accessToken: Wy
        }
      }
      signOut() {
        this.failPopup(new sy("Signed out of Discord during login")), oy.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function Ey(yb) {
      return yb instanceof Uy.c && 435 === yb.httpCode
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);