export const id = 158;
export const ids = [158];
export const modules = {
  7325: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BloxdDiscordSDK: () => Te,
      DiscordLoginCancelledError: () => fe,
      discordPopupTimeoutMs: () => qe
    });
    var ye = He(153),
      be = He(1178),
      Me = He(1083),
      Ke = He(1097),
      Ue = He.n(Ke),
      Fe = He(1141),
      Je = He(35),
      oe = He(610),
      Re = He(1340),
      ke = He(1150);
    const qe = 6e5;
    class fe extends Error {
      constructor() {
        super(...arguments), this.name = Me.discordLoginCancelledErrorName
      }
    }
    class Te {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = be.m[ke.d.clientEnvironment];
        const ee = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (ie => {
          var He;
          if (ie.origin !== ee || "oauth_authentication_discord" !== (null === (He = ie.data) || void 0 === He ? void 0 : He.type)) return;
          if ("string" !== typeof ie.data.code || !ie.data.code) return void this.failPopup(new fe("Discord authentication was cancelled on Discord"));
          const ye = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === ye || void 0 === ye || ye(ie.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(ee) {
        var ie;
        const He = this.popupWindowPromiseReject;
        null === (ie = this.popupWindow) || void 0 === ie || ie.close(), this.resetPopupState(), null === He || void 0 === He || He(ee)
      }
      openDiscordOAuthWindow() {
        const ee = ke.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${ee}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((ee, ie) => {
          Re.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((He => {
            !0 === He ? ee() : ie(new fe("Discord login was cancelled"))
          })).catch(ie)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const ee = new Promise(((ee, ie) => {
          this.popupWindowPromiseResolve = ee, this.popupWindowPromiseReject = ie
        }));
        return this.popupWindowPromise = ee, Je.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), qe), this.openPopup(ee).catch((ie => {
          this.popupWindowPromise === ee && this.failPopup(ie instanceof Error ? ie : new Error(String(ie)))
        })), ee
      }
      async openPopup(ee) {
        let ie = this.openDiscordOAuthWindow();
        if (!ie) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== ee) return;
          ie = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", ie), !ie) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = ie;
        const He = window.setInterval((() => {
          ie.closed && this.popupWindowPromise === ee && (window.clearInterval(He), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === ee && this.failPopup(new fe("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = He
      }
      async exchangeAuthorizationCodeForAccessToken(ee, ie) {
        const {
          accessToken: He,
          refreshToken: ye
        } = await Ue()((async () => await (0, Me.postJsonWithMetricsCookiesAndJsonResponse)(`${Fe.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: ee,
          bloxdClientEnvironment: ke.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, ie.getMetricsCookies())), {
          retries: 3
        });
        return Je.c.setItem(this.bloxdDiscordRefreshTokenKey, ye), He
      }
      hasCurrentUser() {
        const ee = Je.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, oe.P)(ee)
      }
      async getCurrentUser(ee) {
        const ie = Je.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!ie) return null;
        let He;
        try {
          const ye = await Ue()((async () => {
            try {
              return await (0, Me.postJsonWithMetricsCookiesAndJsonResponse)(`${Fe.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: ie
              }, {
                retries: 0
              }, ee.getMetricsCookies())
            } catch (He) {
              if (pe(He)) throw new(Ue().AbortError)(He);
              throw He
            }
          }), {
            retries: 3
          });
          He = ye.accessToken, Je.c.setItem(this.bloxdDiscordRefreshTokenKey, ye.refreshToken)
        } catch (ye) {
          return pe(ye) ? (Je.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", ye), null)
        }
        return {
          accessToken: He
        }
      }
      signOut() {
        this.failPopup(new fe("Signed out of Discord during login")), Je.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function pe(ee) {
      return ee instanceof ye.b && 435 === ee.httpCode
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);