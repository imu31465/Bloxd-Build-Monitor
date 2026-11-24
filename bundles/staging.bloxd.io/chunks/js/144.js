export const id = 144;
export const ids = [144];
export const modules = {
  8243: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BloxdDiscordSDK: () => jS,
      DiscordLoginCancelledError: () => KS,
      discordPopupTimeoutMs: () => aS
    });
    var tS = gS(160),
      bS = gS(1312),
      XS = gS(1216),
      xS = gS(1235),
      NS = gS.n(xS),
      qS = gS(1286),
      uS = gS(45),
      IS = gS(680),
      fS = gS(1435),
      kS = gS(1158);
    const aS = 6e5;
    class KS extends Error {
      constructor() {
        super(...arguments), this.name = XS.discordLoginCancelledErrorName
      }
    }
    class jS {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = bS.m[kS.b.clientEnvironment];
        const SS = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (HS => {
          var gS;
          if (HS.origin !== SS || "oauth_authentication_discord" !== (null === (gS = HS.data) || void 0 === gS ? void 0 : gS.type)) return;
          if ("string" !== typeof HS.data.code || !HS.data.code) return void this.failPopup(new KS("Discord authentication was cancelled on Discord"));
          const tS = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === tS || void 0 === tS || tS(HS.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(SS) {
        var HS;
        const gS = this.popupWindowPromiseReject;
        null === (HS = this.popupWindow) || void 0 === HS || HS.close(), this.resetPopupState(), null === gS || void 0 === gS || gS(SS)
      }
      openDiscordOAuthWindow() {
        const SS = kS.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${SS}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((SS, HS) => {
          fS.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((gS => {
            !0 === gS ? SS() : HS(new KS("Discord login was cancelled"))
          })).catch(HS)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const SS = new Promise(((SS, HS) => {
          this.popupWindowPromiseResolve = SS, this.popupWindowPromiseReject = HS
        }));
        return this.popupWindowPromise = SS, uS.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), aS), this.openPopup(SS).catch((HS => {
          this.popupWindowPromise === SS && this.failPopup(HS instanceof Error ? HS : new Error(String(HS)))
        })), SS
      }
      async openPopup(SS) {
        let HS = this.openDiscordOAuthWindow();
        if (!HS) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== SS) return;
          HS = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", HS), !HS) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = HS;
        const gS = window.setInterval((() => {
          HS.closed && this.popupWindowPromise === SS && (window.clearInterval(gS), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === SS && this.failPopup(new KS("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = gS
      }
      async exchangeAuthorizationCodeForAccessToken(SS, HS) {
        const {
          accessToken: gS,
          refreshToken: tS
        } = await NS()((async () => await (0, XS.postJsonWithMetricsCookiesAndJsonResponse)(`${qS.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: SS,
          bloxdClientEnvironment: kS.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, HS.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", tS, this.bloxdDiscordRefreshTokenKey), uS.b.setItem(this.bloxdDiscordRefreshTokenKey, tS), gS
      }
      hasCurrentUser() {
        const SS = uS.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, IS.K)(SS)
      }
      async getCurrentUser(SS) {
        const HS = uS.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!HS) return null;
        let gS;
        try {
          const tS = await NS()((async () => {
            try {
              return await (0, XS.postJsonWithMetricsCookiesAndJsonResponse)(`${qS.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: HS
              }, {
                retries: 0
              }, SS.getMetricsCookies())
            } catch (gS) {
              if (GS(gS)) throw new(NS().AbortError)(gS);
              throw gS
            }
          }), {
            retries: 3
          });
          gS = tS.accessToken, uS.b.setItem(this.bloxdDiscordRefreshTokenKey, tS.refreshToken)
        } catch (tS) {
          return GS(tS) ? (uS.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", tS), null)
        }
        return {
          accessToken: gS
        }
      }
      signOut() {
        this.failPopup(new KS("Signed out of Discord during login")), uS.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function GS(SS) {
      return SS instanceof tS.b && 435 === SS.httpCode
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);