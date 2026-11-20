export const id = 138;
export const ids = [138];
export const modules = {
  7705: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BloxdDiscordSDK: () => lb,
      DiscordLoginCancelledError: () => mb,
      discordPopupTimeoutMs: () => nb
    });
    var kb = sb(195),
      Wb = sb(1241),
      ab = sb(1126),
      Tb = sb(1145),
      Ub = sb.n(Tb),
      Ib = sb(1208),
      Hb = sb(37),
      fb = sb(628),
      Mb = sb(1332),
      Xb = sb(1217);
    const nb = 6e5;
    class mb extends Error {
      constructor() {
        super(...arguments), this.name = ab.discordLoginCancelledErrorName
      }
    }
    class lb {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirectUrl = Wb.q[Xb.d.clientEnvironment];
        const bb = new URL(this.discordRedirectUrl).origin;
        window.addEventListener("message", (cb => {
          var sb;
          if (cb.origin !== bb || "oauth_authentication_discord" !== (null === (sb = cb.data) || void 0 === sb ? void 0 : sb.type)) return;
          if ("string" !== typeof cb.data.code || !cb.data.code) return void this.failPopup(new mb("Discord authentication was cancelled on Discord"));
          const kb = this.popupWindowPromiseResolve;
          this.resetPopupState(), null === kb || void 0 === kb || kb(cb.data.code)
        }))
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null
      }
      failPopup(bb) {
        var cb;
        const sb = this.popupWindowPromiseReject;
        null === (cb = this.popupWindow) || void 0 === cb || cb.close(), this.resetPopupState(), null === sb || void 0 === sb || sb(bb)
      }
      openDiscordOAuthWindow() {
        const bb = Xb.d.discordClientID;
        return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${bb}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${window.screen.width/2-240}`)
      }
      async showDiscordAuthPrompt() {
        return new Promise(((bb, cb) => {
          Mb.NotificationProvider.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then((sb => {
            !0 === sb ? bb() : cb(new mb("Discord login was cancelled"))
          })).catch(cb)
        }))
      }
      signInWithPopup() {
        if (null !== this.popupWindowPromise) return this.popupWindowPromise;
        const bb = new Promise(((bb, cb) => {
          this.popupWindowPromiseResolve = bb, this.popupWindowPromiseReject = cb
        }));
        return this.popupWindowPromise = bb, Hb.b.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
          this.failPopup(new Error("Discord authentication timed out"))
        }), nb), this.openPopup(bb).catch((cb => {
          this.popupWindowPromise === bb && this.failPopup(cb instanceof Error ? cb : new Error(String(cb)))
        })), bb
      }
      async openPopup(bb) {
        let cb = this.openDiscordOAuthWindow();
        if (!cb) {
          if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== bb) return;
          cb = this.openDiscordOAuthWindow()
        }
        if (console.log("Discord OAuth window opened:", cb), !cb) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
        this.popupWindow = cb;
        const sb = window.setInterval((() => {
          cb.closed && this.popupWindowPromise === bb && (window.clearInterval(sb), this.popupWindowCheckInterval = null, window.setTimeout((() => {
            this.popupWindowPromise === bb && this.failPopup(new mb("Discord authentication was cancelled - popup window was closed"))
          }), 1e3))
        }), 200);
        this.popupWindowCheckInterval = sb
      }
      async exchangeAuthorizationCodeForAccessToken(bb, cb) {
        const {
          accessToken: sb,
          refreshToken: kb
        } = await Ub()((async () => await (0, ab.postJsonWithMetricsCookiesAndJsonResponse)(`${Ib.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
          authorizationCode: bb,
          bloxdClientEnvironment: Xb.d.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, cb.getMetricsCookies())), {
          retries: 3
        });
        return console.log("Discord access token received:", kb, this.bloxdDiscordRefreshTokenKey), Hb.b.setItem(this.bloxdDiscordRefreshTokenKey, kb), sb
      }
      hasCurrentUser() {
        const bb = Hb.b.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, fb.L)(bb)
      }
      async getCurrentUser(bb) {
        const cb = Hb.b.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!cb) return null;
        let sb;
        try {
          const kb = await Ub()((async () => {
            try {
              return await (0, ab.postJsonWithMetricsCookiesAndJsonResponse)(`${Ib.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
                refreshToken: cb
              }, {
                retries: 0
              }, bb.getMetricsCookies())
            } catch (sb) {
              if (Qb(sb)) throw new(Ub().AbortError)(sb);
              throw sb
            }
          }), {
            retries: 3
          });
          sb = kb.accessToken, Hb.b.setItem(this.bloxdDiscordRefreshTokenKey, kb.refreshToken)
        } catch (kb) {
          return Qb(kb) ? (Hb.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", kb), null)
        }
        return {
          accessToken: sb
        }
      }
      signOut() {
        this.failPopup(new mb("Signed out of Discord during login")), Hb.b.removeItem(this.bloxdDiscordRefreshTokenKey)
      }
    }

    function Qb(bb) {
      return bb instanceof kb.d && 435 === bb.httpCode
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);