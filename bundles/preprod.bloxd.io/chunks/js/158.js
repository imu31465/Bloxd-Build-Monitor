export const id = 158;
export const ids = [158];
export const modules = {
  7246: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BloxdDiscordSDK: () => QH,
      DiscordLoginCancelledError: () => uH,
      discordPopupTimeoutMs: () => YH
    });
    var AH = LH(152),
      rH = LH(1177),
      SH = LH(1070),
      hH = LH(1080),
      tH = LH.n(hH),
      zH = LH(1131),
      CH = LH(30),
      EH = LH(619),
      XH = LH(1352),
      GH = LH(1139);
    const YH = 6e5;
    class uH extends Error {
      constructor() {
        super(...arguments), this.name = SH.discordLoginCancelledErrorName
      }
    }
    class QH {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = rH.l[GH.e.clientEnvironment];
        const HH = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (BH => {
          var LH;
          if (BH.origin !== HH || "oauth_authentication_discord" !== (null === (LH = BH.data) || void 0 === LH ? void 0 : LH.type)) return;
          if ("string" !== typeof BH.data.code || !BH.data.code) return void this.failPopup(new uH("Discord authentication was cancelled on Discord"));
          const AH = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === AH || void 0 === AH || AH(BH.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(HH) {
        var BH;
        const LH = this.popupWindowPromiseReject;
        null === (BH = this.popupWindow) || void 0 === BH || BH.close(), this.resetPopupState(), null === LH || void 0 === LH || LH(HH)
      }
      openDiscordOAuthWindow() {
        const HH = GH.e.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${HH}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((HH, BH) => {
          XH.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((LH => {
            !0 === LH ? HH() : BH(new uH("Discord login was cancelled"))
          })).catch(BH)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const HH = new Promise(((HH, BH) => {
          this.popupWindowPromiseResolve = HH, this.popupWindowPromiseReject = BH
        }));
        return this.popupWindowPromise = HH, CH.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), YH), this.openPopup(HH).catch((BH => {
          this.popupWindowPromise === HH && this.failPopup(BH instanceof Error ? BH : new Error(String(BH)))
        })), HH
      }
      async openPopup(HH) {
        let BH = this.openDiscordOAuthWindow();
        if (!BH) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== HH) return;
          BH = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", BH), !BH) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = BH;
        const LH = window.setInterval((() => {
          BH.closed && this.popupWindowPromise === HH && (window.clearInterval(LH), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === HH && this.failPopup(new uH("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = LH
      }
      async exchangeAuthorizationCodeForAccessToken(HH, BH) {
        const {
          accessToken: LH,
          refreshToken: AH
        } = await tH()((async () => await (0, SH.postJsonWithMetricsCookiesAndJsonResponse)(`${zH.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: HH,
          bloxdClientEnvironment: GH.e.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, BH.getMetricsCookies())), {
          retries: 3
        });
        return CH.b.setItem(this.bloxdDiscordRefreshTokenKey, AH), LH
      }
      hasCurrentUser() {
        const HH = CH.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, EH.M)(HH)
      }
      async getCurrentUser(HH) {
        const BH = CH.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!BH) return null;
        let LH;
        try {
          const AH = await tH()((async () => {
            try {
              return await (0, SH.postJsonWithMetricsCookiesAndJsonResponse)(`${zH.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: BH
              }, {
                retries: 0
              }, HH.getMetricsCookies())
            } catch (LH) {
              if (WH(LH)) throw new(tH().AbortError)(LH);
              throw LH
            }
          }), {
            retries: 3
          });
          LH = AH.accessToken, CH.b.setItem(this.bloxdDiscordRefreshTokenKey, AH.refreshToken)
        } catch (AH) {
          return WH(AH) ? (CH.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", AH), null)
        }
        return {
          accessToken: LH
        }
      }
      signOut() {
        this.failPopup(new uH("Signed out of Discord during login")), CH.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function WH(HH) {
      return HH instanceof AH.e && 435 === HH.httpCode
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);