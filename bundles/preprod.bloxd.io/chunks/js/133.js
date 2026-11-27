export const id = 133;
export const ids = [132, 133];
export const modules = {
  5897: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(1185);
    async function EW(WW) {
      const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === iW.status || 403 === iW.status) return null;
      if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
      return await iW.json()
    }
  },
  42537: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      gamePackSource: () => NW
    });
    var mW = OW(5897),
      EW = OW(1584);

    function NW(WW) {
      return {
        packKey: async iW => (await EW.e.getGame(WW, iW, !0)).customTexturePackKey,
        fetchPack: mW.b
      }
    }
  },
  54807: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      fetchGuestContext: () => xW,
      guestJoinTarget: () => sW,
      guestJoinWithPack: () => AW,
      guestPackForGame: () => lW,
      invalidateGuestTrafficCode: () => kW
    });
    var mW = OW(1185),
      EW = OW(1584),
      NW = OW(100),
      PW = OW(37707),
      LW = OW(1111),
      cW = OW(42266),
      wW = OW(42537),
      tW = OW(42375);

    function ZW() {
      if (NW.featureFlags.useTurnstile) throw new cW.TurnstilePageError
    }

    function xW() {
      return (0, LW.fetchAnonymousUserContext)(!0).catch((WW => (console.warn("the guest context didn't load", WW), null)))
    }
    async function lW(WW, iW, OW, mW) {
      try {
        const EW = await OW;
        if (null === EW) return void console.warn(`the texture pack step for ${WW} has no guest context: the pack in play stays`);
        await iW.packForGame(WW, (0, wW.gamePackSource)(EW), mW)
      } catch (EW) {
        console.warn(`the texture pack step for ${WW} failed: the pack in play stays`, EW)
      }
    }
    async function AW(WW, iW, OW, mW) {
      ZW();
      const EW = xW();
      return await OW(((iW, OW) => lW(WW, iW, EW, OW))), sW(WW, iW, mW(), await EW)
    }
    let bW = null,
      jW = null;
    async function UW() {
      if ((null === bW || bW.hasExpired()) && (jW ??= (0, LW.fetchAnonymousUserContext)(!0).then((WW => {
          bW = WW
        })).finally((() => {
          jW = null
        })), await jW), null === bW) throw new Error("no guest context to post as");
      return bW.getMetricsCookies()
    }
    async function kW() {
      var WW;
      await (null === (WW = bW) || void 0 === WW ? void 0 : WW.invalidateTrafficCode())
    }
    async function sW(WW, iW, OW) {
      let NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      ZW();
      const cW = null !== NW && void 0 !== NW ? NW : await (0, LW.fetchAnonymousUserContext)(!0);
      if (bW = cW, cW.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const wW = await EW.e.matchmakePlayer(cW, iW, WW, (0, PW.c)()),
        xW = performance.now();
      if (!("gameServerHost" in wW)) throw new Error(`matchmaking refused: ${wW.failReason}`);
      const lW = mW.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(wW.gameServerHost);
      if (lW.isError()) throw new Error(`no socket URL for ${wW.gameServerHost}: ${lW.asError().message}`);
      const AW = {
        endpoint: lW.getValue(),
        gameNameWithVariation: wW.gameNameWithVariation,
        lobbyName: wW.lobbyName
      };
      return {
        target: {
          ...await (0, tW.c)(cW, AW, OW, !1),
          postCookies: UW
        },
        matchedAt: xW,
        freshMs: tW.b
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);