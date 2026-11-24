export const id = 146;
export const ids = [146];
export const modules = {
  8195: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BloxdDiscordSDK: () => ZT,
      DiscordLoginCancelledError: () => BT,
      discordPopupTimeoutMs: () => pT
    });
    var WT = mT(166),
      zT = mT(1324),
      MT = mT(1231),
      gT = mT(1242),
      nT = mT.n(gT),
      HT = mT(1302),
      kT = mT(44),
      jT = mT(653),
      lT = mT(1457),
      LT = mT(1160);
    const pT = 6e5;
    class BT extends Error {
      constructor() {
        super(...arguments), this.name = MT.discordLoginCancelledErrorName
      }
    }
    class ZT {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = zT.l[LT.b.clientEnvironment];
        const TT = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (UT => {
          var mT;
          if (UT.origin !== TT || "oauth_authentication_discord" !== (null === (mT = UT.data) || void 0 === mT ? void 0 : mT.type)) return;
          if ("string" !== typeof UT.data.code || !UT.data.code) return void this.failPopup(new BT("Discord authentication was cancelled on Discord"));
          const WT = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === WT || void 0 === WT || WT(UT.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(TT) {
        var UT;
        const mT = this.popupWindowPromiseReject;
        null === (UT = this.popupWindow) || void 0 === UT || UT.close(), this.resetPopupState(), null === mT || void 0 === mT || mT(TT)
      }
      openDiscordOAuthWindow() {
        const TT = LT.b.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${TT}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((TT, UT) => {
          lT.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((mT => {
            !0 === mT ? TT() : UT(new BT("Discord login was cancelled"))
          })).catch(UT)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const TT = new Promise(((TT, UT) => {
          this.popupWindowPromiseResolve = TT, this.popupWindowPromiseReject = UT
        }));
        return this.popupWindowPromise = TT, kT.d.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), pT), this.openPopup(TT).catch((UT => {
          this.popupWindowPromise === TT && this.failPopup(UT instanceof Error ? UT : new Error(String(UT)))
        })), TT
      }
      async openPopup(TT) {
        let UT = this.openDiscordOAuthWindow();
        if (!UT) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== TT) return;
          UT = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", UT), !UT) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = UT;
        const mT = window.setInterval((() => {
          UT.closed && this.popupWindowPromise === TT && (window.clearInterval(mT), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === TT && this.failPopup(new BT("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = mT
      }
      async exchangeAuthorizationCodeForAccessToken(TT, UT) {
        const {
          accessToken: mT,
          refreshToken: WT
        } = await nT()((async () => await (0, MT.postJsonWithMetricsCookiesAndJsonResponse)(`${HT.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: TT,
          bloxdClientEnvironment: LT.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, UT.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", WT, this.bloxdDiscordRefreshTokenKey), kT.d.setItem(this.bloxdDiscordRefreshTokenKey, WT), mT
      }
      hasCurrentUser() {
        const TT = kT.d.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, jT.E)(TT)
      }
      async getCurrentUser(TT) {
        const UT = kT.d.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!UT) return null;
        let mT;
        try {
          const WT = await nT()((async () => {
            try {
              return await (0, MT.postJsonWithMetricsCookiesAndJsonResponse)(`${HT.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: UT
              }, {
                retries: 0
              }, TT.getMetricsCookies())
            } catch (mT) {
              if (cT(mT)) throw new(nT().AbortError)(mT);
              throw mT
            }
          }), {
            retries: 3
          });
          mT = WT.accessToken, kT.d.setItem(this.bloxdDiscordRefreshTokenKey, WT.refreshToken)
        } catch (WT) {
          return cT(WT) ? (kT.d.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", WT), null)
        }
        return {
          accessToken: mT
        }
      }
      signOut() {
        this.failPopup(new BT("Signed out of Discord during login")), kT.d.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function cT(TT) {
      return TT instanceof WT.d && 435 === TT.httpCode
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);