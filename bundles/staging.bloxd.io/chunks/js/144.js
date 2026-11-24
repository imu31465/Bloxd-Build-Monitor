export const id = 144;
export const ids = [144];
export const modules = {
  8107: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BloxdDiscordSDK: () => BD,
      DiscordLoginCancelledError: () => ID,
      discordPopupTimeoutMs: () => fD
    });
    var pD = wD(157),
      sD = wD(1234),
      KD = wD(1130),
      rD = wD(1152),
      LD = wD.n(rD),
      cD = wD(1211),
      gD = wD(35),
      RD = wD(619),
      AD = wD(1355),
      UD = wD(1084);
    const fD = 6e5;
    class ID extends Error {
      constructor() {
        super(...arguments), this.name = KD.discordLoginCancelledErrorName
      }
    }
    class BD {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = sD.p[UD.b.clientEnvironment];
        const DD = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (zD => {
          var wD;
          if (zD.origin !== DD || "oauth_authentication_discord" !== (null === (wD = zD.data) || void 0 === wD ? void 0 : wD.type)) return;
          if ("string" !== typeof zD.data.code || !zD.data.code) return void this.failPopup(new ID("Discord authentication was cancelled on Discord"));
          const pD = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === pD || void 0 === pD || pD(zD.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(DD) {
        var zD;
        const wD = this.popupWindowPromiseReject;
        null === (zD = this.popupWindow) || void 0 === zD || zD.close(), this.resetPopupState(), null === wD || void 0 === wD || wD(DD)
      }
      openDiscordOAuthWindow() {
        const DD = UD.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${DD}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((DD, zD) => {
          AD.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((wD => {
            !0 === wD ? DD() : zD(new ID("Discord login was cancelled"))
          })).catch(zD)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const DD = new Promise(((DD, zD) => {
          this.popupWindowPromiseResolve = DD, this.popupWindowPromiseReject = zD
        }));
        return this.popupWindowPromise = DD, gD.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), fD), this.openPopup(DD).catch((zD => {
          this.popupWindowPromise === DD && this.failPopup(zD instanceof Error ? zD : new Error(String(zD)))
        })), DD
      }
      async openPopup(DD) {
        let zD = this.openDiscordOAuthWindow();
        if (!zD) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== DD) return;
          zD = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", zD), !zD) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = zD;
        const wD = window.setInterval((() => {
          zD.closed && this.popupWindowPromise === DD && (window.clearInterval(wD), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === DD && this.failPopup(new ID("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = wD
      }
      async exchangeAuthorizationCodeForAccessToken(DD, zD) {
        const {
          accessToken: wD,
          refreshToken: pD
        } = await LD()((async () => await (0, KD.postJsonWithMetricsCookiesAndJsonResponse)(`${cD.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: DD,
          bloxdClientEnvironment: UD.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, zD.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", pD, this.bloxdDiscordRefreshTokenKey), gD.c.setItem(this.bloxdDiscordRefreshTokenKey, pD), wD
      }
      hasCurrentUser() {
        const DD = gD.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, RD.B)(DD)
      }
      async getCurrentUser(DD) {
        const zD = gD.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!zD) return null;
        let wD;
        try {
          const pD = await LD()((async () => {
            try {
              return await (0, KD.postJsonWithMetricsCookiesAndJsonResponse)(`${cD.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: zD
              }, {
                retries: 0
              }, DD.getMetricsCookies())
            } catch (wD) {
              if (GD(wD)) throw new(LD().AbortError)(wD);
              throw wD
            }
          }), {
            retries: 3
          });
          wD = pD.accessToken, gD.c.setItem(this.bloxdDiscordRefreshTokenKey, pD.refreshToken)
        } catch (pD) {
          return GD(pD) ? (gD.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", pD), null)
        }
        return {
          accessToken: wD
        }
      }
      signOut() {
        this.failPopup(new ID("Signed out of Discord during login")), gD.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function GD(DD) {
      return DD instanceof pD.c && 435 === DD.httpCode
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);