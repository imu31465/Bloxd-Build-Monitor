export const id = 332;
export const ids = [332, 333];
export const modules = {
  42032: (BB, TB, dB) => {
    dB.d(TB, {
      gamePackSource: () => pB
    });
    var VB = dB(4400),
      yB = dB(1393);

    function pB(BB) {
      return {
        packKey: async TB => (await yB.c.getGame(BB, TB, !0)).customTexturePackKey,
        fetchPack: VB.c
      }
    }
  },
  42025: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      fetchGuestContext: () => LB,
      guestJoinTarget: () => mB,
      guestJoinWithPack: () => DB,
      guestPackForGame: () => OB,
      invalidateGuestTrafficCode: () => vB
    });
    var VB = dB(1089),
      yB = dB(1393),
      pB = dB(95),
      lB = dB(35476),
      JB = dB(1020),
      YB = dB(39676),
      gB = dB(42032),
      oB = dB(39601);

    function kB() {
      if (pB.featureFlags.useTurnstile) throw new YB.TurnstilePageError
    }

    function LB() {
      return (0, JB.fetchAnonymousUserContext)().catch((BB => (console.warn("the guest context didn't load", BB), null)))
    }
    async function OB(BB, TB, dB, VB) {
      try {
        const yB = await dB;
        if (null === yB) return void console.warn(`the texture pack step for ${BB} has no guest context: the pack in play stays`);
        await TB.packForGame(BB, (0, gB.gamePackSource)(yB), VB)
      } catch (yB) {
        console.warn(`the texture pack step for ${BB} failed: the pack in play stays`, yB)
      }
    }
    async function DB(BB, TB, dB, VB) {
      kB();
      const yB = LB();
      return await dB(((TB, dB) => OB(BB, TB, yB, dB))), mB(BB, TB, VB(), await yB)
    }
    let uB = null,
      HB = null;
    async function EB() {
      if ((null === uB || uB.hasExpired()) && (HB ??= (0, JB.fetchAnonymousUserContext)().then((BB => {
          uB = BB
        })).finally((() => {
          HB = null
        })), await HB), null === uB) throw new Error("no guest context to post as");
      return uB.getMetricsCookies()
    }
    async function vB() {
      var BB;
      await (null === (BB = uB) || void 0 === BB ? void 0 : BB.invalidateTrafficCode())
    }
    async function mB(BB, TB, dB) {
      let pB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      kB();
      const YB = null !== pB && void 0 !== pB ? pB : await (0, JB.fetchAnonymousUserContext)();
      if (uB = YB, YB.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const gB = await yB.c.matchmakePlayer(YB, TB, BB, (0, lB.d)()),
        LB = performance.now();
      if (!("gameServerHost" in gB)) throw new Error(`matchmaking refused: ${gB.failReason}`);
      const OB = VB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(gB.gameServerHost);
      if (OB.isError()) throw new Error(`no socket URL for ${gB.gameServerHost}: ${OB.asError().message}`);
      const DB = {
        endpoint: OB.getValue(),
        gameNameWithVariation: gB.gameNameWithVariation,
        lobbyName: gB.lobbyName
      };
      return {
        target: {
          ...await (0, oB.f)(YB, DB, dB),
          postCookies: EB
        },
        matchedAt: LB,
        freshMs: oB.e
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);