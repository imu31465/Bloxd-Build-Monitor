export const id = 322;
export const ids = [322, 323];
export const modules = {
  40760: (WW, RW, MW) => {
    MW.d(RW, {
      gamePackSource: () => zR
    });
    var wW = MW(3955),
      CW = MW(1314);

    function zR(WW) {
      return {
        packKey: async RW => (await CW.c.getGame(WW, RW, !0)).customTexturePackKey,
        fetchPack: wW.b
      }
    }
  },
  40752: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      fetchGuestContext: () => tR,
      guestJoinTarget: () => IW,
      guestJoinWithPack: () => gR,
      guestPackForGame: () => TW,
      invalidateGuestTrafficCode: () => PW
    });
    var wW = MW(1033),
      CW = MW(1314),
      zR = MW(116),
      AW = MW(34703),
      bR = MW(975),
      yR = MW(38425),
      NW = MW(40760),
      eW = MW(38370);

    function BW() {
      if (zR.featureFlags.useTurnstile) throw new yR.TurnstilePageError
    }

    function tR() {
      return (0, bR.fetchAnonymousUserContext)().catch((WW => (console.warn("the guest context didn't load", WW), null)))
    }
    async function TW(WW, RW, MW, wW) {
      try {
        const CW = await MW;
        if (null === CW) return void console.warn(`the texture pack step for ${WW} has no guest context: the pack in play stays`);
        await RW.packForGame(WW, (0, NW.gamePackSource)(CW), wW)
      } catch (CW) {
        console.warn(`the texture pack step for ${WW} failed: the pack in play stays`, CW)
      }
    }
    async function gR(WW, RW, MW, wW) {
      BW();
      const CW = tR();
      return await MW(((RW, MW) => TW(WW, RW, CW, MW))), IW(WW, RW, wW(), await CW)
    }
    let iR = null,
      YW = null;
    async function JW() {
      if ((null === iR || iR.hasExpired()) && (YW ??= (0, bR.fetchAnonymousUserContext)().then((WW => {
          iR = WW
        })).finally((() => {
          YW = null
        })), await YW), null === iR) throw new Error("no guest context to post as");
      return iR.getMetricsCookies()
    }
    async function PW() {
      var WW;
      await (null === (WW = iR) || void 0 === WW ? void 0 : WW.invalidateTrafficCode())
    }
    async function IW(WW, RW, MW) {
      let zR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      BW();
      const yR = null !== zR && void 0 !== zR ? zR : await (0, bR.fetchAnonymousUserContext)();
      if (iR = yR, yR.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const NW = await CW.c.matchmakePlayer(yR, RW, WW, (0, AW.b)()),
        tR = performance.now();
      if (!("gameServerHost" in NW)) throw new Error(`matchmaking refused: ${NW.failReason}`);
      const TW = wW.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(NW.gameServerHost);
      if (TW.isError()) throw new Error(`no socket URL for ${NW.gameServerHost}: ${TW.asError().message}`);
      const gR = {
        endpoint: TW.getValue(),
        gameNameWithVariation: NW.gameNameWithVariation,
        lobbyName: NW.lobbyName
      };
      return {
        target: {
          ...await (0, eW.c)(yR, gR, MW),
          postCookies: JW
        },
        matchedAt: tR,
        freshMs: eW.b
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);