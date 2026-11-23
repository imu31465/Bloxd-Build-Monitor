export const id = 144;
export const ids = [144];
export const modules = {
  8093: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BloxdDiscordSDK: () => SC,
      DiscordLoginCancelledError: () => gC,
      discordPopupTimeoutMs: () => MC
    });
    var QC = ZC(134),
      wC = ZC(1171),
      bC = ZC(1078),
      nC = ZC(1094),
      fC = ZC.n(nC),
      oC = ZC(1149),
      qC = ZC(38),
      FC = ZC(600),
      WC = ZC(1307),
      NC = ZC(1032);
    const MC = 6e5;
    class gC extends Error {
      constructor() {
        super(...arguments), this.name = bC.discordLoginCancelledErrorName
      }
    }
    class SC {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = wC.k[NC.c.clientEnvironment];
        const CC = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (zC => {
          var ZC;
          if (zC.origin !== CC || "oauth_authentication_discord" !== (null === (ZC = zC.data) || void 0 === ZC ? void 0 : ZC.type)) return;
          if ("string" !== typeof zC.data.code || !zC.data.code) return void this.failPopup(new gC("Discord authentication was cancelled on Discord"));
          const QC = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === QC || void 0 === QC || QC(zC.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(CC) {
        var zC;
        const ZC = this.popupWindowPromiseReject;
        null === (zC = this.popupWindow) || void 0 === zC || zC.close(), this.resetPopupState(), null === ZC || void 0 === ZC || ZC(CC)
      }
      openDiscordOAuthWindow() {
        const CC = NC.c.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${CC}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((CC, zC) => {
          WC.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((ZC => {
            !0 === ZC ? CC() : zC(new gC("Discord login was cancelled"))
          })).catch(zC)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const CC = new Promise(((CC, zC) => {
          this.popupWindowPromiseResolve = CC, this.popupWindowPromiseReject = zC
        }));
        return this.popupWindowPromise = CC, qC.c.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), MC), this.openPopup(CC).catch((zC => {
          this.popupWindowPromise === CC && this.failPopup(zC instanceof Error ? zC : new Error(String(zC)))
        })), CC
      }
      async openPopup(CC) {
        let zC = this.openDiscordOAuthWindow();
        if (!zC) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== CC) return;
          zC = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", zC), !zC) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = zC;
        const ZC = window.setInterval((() => {
          zC.closed && this.popupWindowPromise === CC && (window.clearInterval(ZC), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === CC && this.failPopup(new gC("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = ZC
      }
      async exchangeAuthorizationCodeForAccessToken(CC, zC) {
        const {
          accessToken: ZC,
          refreshToken: QC
        } = await fC()((async () => await (0, bC.postJsonWithMetricsCookiesAndJsonResponse)(`${oC.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: CC,
          bloxdClientEnvironment: NC.c.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, zC.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", QC, this.bloxdDiscordRefreshTokenKey), qC.c.setItem(this.bloxdDiscordRefreshTokenKey, QC), ZC
      }
      hasCurrentUser() {
        const CC = qC.c.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, FC.H)(CC)
      }
      async getCurrentUser(CC) {
        const zC = qC.c.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!zC) return null;
        let ZC;
        try {
          const QC = await fC()((async () => {
            try {
              return await (0, bC.postJsonWithMetricsCookiesAndJsonResponse)(`${oC.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: zC
              }, {
                retries: 0
              }, CC.getMetricsCookies())
            } catch (ZC) {
              if (pC(ZC)) throw new(fC().AbortError)(ZC);
              throw ZC
            }
          }), {
            retries: 3
          });
          ZC = QC.accessToken, qC.c.setItem(this.bloxdDiscordRefreshTokenKey, QC.refreshToken)
        } catch (QC) {
          return pC(QC) ? (qC.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", QC), null)
        }
        return {
          accessToken: ZC
        }
      }
      signOut() {
        this.failPopup(new gC("Signed out of Discord during login")), qC.c.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function pC(CC) {
      return CC instanceof QC.d && 435 === CC.httpCode
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);