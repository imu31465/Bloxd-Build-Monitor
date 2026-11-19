export const id = 139;
export const ids = [139];
export const modules = {
  7523: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BloxdDiscordSDK: () => QY,
      DiscordLoginCancelledError: () => yY,
      discordPopupTimeoutMs: () => iY
    });
    var FY = DY(183),
      AY = DY(1233),
      IY = DY(1159),
      RY = DY(1170),
      OY = DY.n(RY),
      gY = DY(1222),
      aY = DY(40),
      vY = DY(625),
      uY = DY(1346),
      sY = DY(1224);
    const iY = 6e5;
    class yY extends Error {
      constructor() {
        super(...arguments), this.name = IY.discordLoginCancelledErrorName
      }
    }
    class QY {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = AY.j[sY.e.clientEnvironment];
        const YY = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (rY => {
          var DY;
          if (rY.origin !== YY || "oauth_authentication_discord" !== (null === (DY = rY.data) || void 0 === DY ? void 0 : DY.type)) return;
          if ("string" !== typeof rY.data.code || !rY.data.code) return void this.failPopup(new yY("Discord authentication was cancelled on Discord"));
          const FY = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === FY || void 0 === FY || FY(rY.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(YY) {
        var rY;
        const DY = this.popupWindowPromiseReject;
        null === (rY = this.popupWindow) || void 0 === rY || rY.close(), this.resetPopupState(), null === DY || void 0 === DY || DY(YY)
      }
      openDiscordOAuthWindow() {
        const YY = sY.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${YY}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((YY, rY) => {
          uY.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((DY => {
            !0 === DY ? YY() : rY(new yY("Discord login was cancelled"))
          })).catch(rY)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const YY = new Promise(((YY, rY) => {
          this.popupWindowPromiseResolve = YY, this.popupWindowPromiseReject = rY
        }));
        return this.popupWindowPromise = YY, aY.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), iY), this.openPopup(YY).catch((rY => {
          this.popupWindowPromise === YY && this.failPopup(rY instanceof Error ? rY : new Error(String(rY)))
        })), YY
      }
      async openPopup(YY) {
        let rY = this.openDiscordOAuthWindow();
        if (!rY) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== YY) return;
          rY = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", rY), !rY) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = rY;
        const DY = window.setInterval((() => {
          rY.closed && this.popupWindowPromise === YY && (window.clearInterval(DY), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === YY && this.failPopup(new yY("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = DY
      }
      async exchangeAuthorizationCodeForAccessToken(YY, rY) {
        const {
          accessToken: DY,
          refreshToken: FY
        } = await OY()((async () => await (0, IY.postJsonWithMetricsCookiesAndJsonResponse)(`${gY.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: YY,
          bloxdClientEnvironment: sY.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, rY.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", FY, this.bloxdDiscordRefreshTokenKey), aY.e.setItem(this.bloxdDiscordRefreshTokenKey, FY), DY
      }
      hasCurrentUser() {
        const YY = aY.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, vY.H)(YY)
      }
      async getCurrentUser(YY) {
        const rY = aY.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!rY) return null;
        let DY;
        try {
          const FY = await OY()((async () => {
            try {
              return await (0, IY.postJsonWithMetricsCookiesAndJsonResponse)(`${gY.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: rY
              }, {
                retries: 0
              }, YY.getMetricsCookies())
            } catch (DY) {
              if (oY(DY)) throw new(OY().AbortError)(DY);
              throw DY
            }
          }), {
            retries: 3
          });
          DY = FY.accessToken, aY.e.setItem(this.bloxdDiscordRefreshTokenKey, FY.refreshToken)
        } catch (FY) {
          return oY(FY) ? (aY.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", FY), null)
        }
        return {
          accessToken: DY
        }
      }
      signOut() {
        this.failPopup(new yY("Signed out of Discord during login")), aY.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function oY(YY) {
      return YY instanceof FY.e && 435 === YY.httpCode
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);