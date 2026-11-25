export const id = 277;
export const ids = [276, 277];
export const modules = {
  41082: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      gamePackSource: () => oB
    });
    var TB = ZB(5134),
      JB = ZB(1561);

    function oB(BB) {
      return {
        packKey: async IB => (await JB.c.getGame(BB, IB, !0)).customTexturePackKey,
        fetchPack: TB.c
      }
    }
  },
  51065: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      fetchGuestContext: () => zB,
      guestJoinTarget: () => WB,
      guestJoinWithPack: () => NB,
      guestPackForGame: () => FB,
      invalidateGuestTrafficCode: () => UB
    });
    var TB = ZB(1258),
      JB = ZB(1561),
      oB = ZB(105),
      GB = ZB(36485),
      vB = ZB(1186),
      kB = ZB(40784),
      cB = ZB(41082),
      nB = ZB(40746);

    function hB() {
      if (oB.featureFlags.useTurnstile) throw new kB.TurnstilePageError
    }

    function zB() {
      return (0, vB.fetchAnonymousUserContext)().catch((BB => (console.warn("the guest context didn't load", BB), null)))
    }
    async function FB(BB, IB, ZB, TB) {
      try {
        const JB = await ZB;
        if (null === JB) return void console.warn(`the texture pack step for ${BB} has no guest context: the pack in play stays`);
        await IB.packForGame(BB, (0, cB.gamePackSource)(JB), TB)
      } catch (JB) {
        console.warn(`the texture pack step for ${BB} failed: the pack in play stays`, JB)
      }
    }
    async function NB(BB, IB, ZB, TB) {
      hB();
      const JB = zB();
      return await ZB(((IB, ZB) => FB(BB, IB, JB, ZB))), WB(BB, IB, TB(), await JB)
    }
    let gB = null,
      qB = null;
    async function yB() {
      if ((null === gB || gB.hasExpired()) && (qB ??= (0, vB.fetchAnonymousUserContext)().then((BB => {
          gB = BB
        })).finally((() => {
          qB = null
        })), await qB), null === gB) throw new Error("no guest context to post as");
      return gB.getMetricsCookies()
    }
    async function UB() {
      var BB;
      await (null === (BB = gB) || void 0 === BB ? void 0 : BB.invalidateTrafficCode())
    }
    async function WB(BB, IB, ZB) {
      let oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      hB();
      const kB = null !== oB && void 0 !== oB ? oB : await (0, vB.fetchAnonymousUserContext)();
      if (gB = kB, kB.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const cB = await JB.c.matchmakePlayer(kB, IB, BB, (0, GB.b)()),
        zB = performance.now();
      if (!("gameServerHost" in cB)) throw new Error(`matchmaking refused: ${cB.failReason}`);
      const FB = TB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(cB.gameServerHost);
      if (FB.isError()) throw new Error(`no socket URL for ${cB.gameServerHost}: ${FB.asError().message}`);
      const NB = {
        endpoint: FB.getValue(),
        gameNameWithVariation: cB.gameNameWithVariation,
        lobbyName: cB.lobbyName
      };
      return {
        target: {
          ...await (0, nB.e)(kB, NB, ZB, !1),
          postCookies: yB
        },
        matchedAt: zB,
        freshMs: nB.c
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);