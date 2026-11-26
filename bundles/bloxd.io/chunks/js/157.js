export const id = 157;
export const ids = [157];
export const modules = {
  7248: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BloxdDiscordSDK: () => bV,
      DiscordLoginCancelledError: () => kV,
      discordPopupTimeoutMs: () => rV
    });
    var JV = xV(165),
      YV = xV(1260),
      UV = xV(1173),
      yV = xV(1189),
      pV = xV.n(yV),
      QV = xV(1230),
      nV = xV(40),
      wV = xV(657),
      ZV = xV(1439),
      vV = xV(1238);
    const rV = 6e5;
    class kV extends Error {
      constructor() {
        super(...arguments), this.name = UV.discordLoginCancelledErrorName
      }
    }
    class bV {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = YV.s[vV.e.clientEnvironment];
        const VV = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (eV => {
          var xV;
          if (eV.origin !== VV || "oauth_authentication_discord" !== (null === (xV = eV.data) || void 0 === xV ? void 0 : xV.type)) return;
          if ("string" !== typeof eV.data.code || !eV.data.code) return void this.failPopup(new kV("Discord authentication was cancelled on Discord"));
          const JV = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === JV || void 0 === JV || JV(eV.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(VV) {
        var eV;
        const xV = this.popupWindowPromiseReject;
        null === (eV = this.popupWindow) || void 0 === eV || eV.close(), this.resetPopupState(), null === xV || void 0 === xV || xV(VV)
      }
      openDiscordOAuthWindow() {
        const VV = vV.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${VV}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((VV, eV) => {
          ZV.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((xV => {
            !0 === xV ? VV() : eV(new kV("Discord login was cancelled"))
          })).catch(eV)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const VV = new Promise(((VV, eV) => {
          this.popupWindowPromiseResolve = VV, this.popupWindowPromiseReject = eV
        }));
        return this.popupWindowPromise = VV, nV.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), rV), this.openPopup(VV).catch((eV => {
          this.popupWindowPromise === VV && this.failPopup(eV instanceof Error ? eV : new Error(String(eV)))
        })), VV
      }
      async openPopup(VV) {
        let eV = this.openDiscordOAuthWindow();
        if (!eV) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== VV) return;
          eV = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", eV), !eV) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = eV;
        const xV = window.setInterval((() => {
          eV.closed && this.popupWindowPromise === VV && (window.clearInterval(xV), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === VV && this.failPopup(new kV("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = xV
      }
      async exchangeAuthorizationCodeForAccessToken(VV, eV) {
        const {
          accessToken: xV,
          refreshToken: JV
        } = await pV()((async () => await (0, UV.postJsonWithMetricsCookiesAndJsonResponse)(`${QV.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: VV,
          bloxdClientEnvironment: vV.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, eV.getMetricsCookies())), {
          retries: 3
        });
        return nV.e.setItem(this.bloxdDiscordRefreshTokenKey, JV), xV
      }
      hasCurrentUser() {
        const VV = nV.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, wV.J)(VV)
      }
      async getCurrentUser(VV) {
        const eV = nV.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!eV) return null;
        let xV;
        try {
          const JV = await pV()((async () => {
            try {
              return await (0, UV.postJsonWithMetricsCookiesAndJsonResponse)(`${QV.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: eV
              }, {
                retries: 0
              }, VV.getMetricsCookies())
            } catch (xV) {
              if (EV(xV)) throw new(pV().AbortError)(xV);
              throw xV
            }
          }), {
            retries: 3
          });
          xV = JV.accessToken, nV.e.setItem(this.bloxdDiscordRefreshTokenKey, JV.refreshToken)
        } catch (JV) {
          return EV(JV) ? (nV.e.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", JV), null)
        }
        return {
          accessToken: xV
        }
      }
      signOut() {
        this.failPopup(new kV("Signed out of Discord during login")), nV.e.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function EV(VV) {
      return VV instanceof JV.b && 435 === VV.httpCode
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);