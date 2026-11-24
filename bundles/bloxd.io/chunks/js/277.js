export const id = 277;
export const ids = [276, 277];
export const modules = {
  41150: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      gamePackSource: () => dB
    });
    var QB = zB(5066),
      nB = zB(1532);

    function dB(BB) {
      return {
        packKey: async jB => (await nB.b.getGame(BB, jB, !0)).customTexturePackKey,
        fetchPack: QB.e
      }
    }
  },
  51154: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      fetchGuestContext: () => rB,
      guestJoinTarget: () => LB,
      guestJoinWithPack: () => JB,
      guestPackForGame: () => sB,
      invalidateGuestTrafficCode: () => GB
    });
    var QB = zB(1244),
      nB = zB(1532),
      dB = zB(106),
      IB = zB(36533),
      NB = zB(1173),
      uB = zB(40830),
      UB = zB(41150),
      aB = zB(40791);

    function pB() {
      if (dB.featureFlags.useTurnstile) throw new uB.TurnstilePageError
    }

    function rB() {
      return (0, NB.fetchAnonymousUserContext)().catch((BB => (console.warn("the guest context didn't load", BB), null)))
    }
    async function sB(BB, jB, zB, QB) {
      try {
        const nB = await zB;
        if (null === nB) return void console.warn(`the texture pack step for ${BB} has no guest context: the pack in play stays`);
        await jB.packForGame(BB, (0, UB.gamePackSource)(nB), QB)
      } catch (nB) {
        console.warn(`the texture pack step for ${BB} failed: the pack in play stays`, nB)
      }
    }
    async function JB(BB, jB, zB, QB) {
      pB();
      const nB = rB();
      return await zB(((jB, zB) => sB(BB, jB, nB, zB))), LB(BB, jB, QB(), await nB)
    }
    let mB = null,
      yB = null;
    async function kB() {
      if ((null === mB || mB.hasExpired()) && (yB ??= (0, NB.fetchAnonymousUserContext)().then((BB => {
          mB = BB
        })).finally((() => {
          yB = null
        })), await yB), null === mB) throw new Error("no guest context to post as");
      return mB.getMetricsCookies()
    }
    async function GB() {
      var BB;
      await (null === (BB = mB) || void 0 === BB ? void 0 : BB.invalidateTrafficCode())
    }
    async function LB(BB, jB, zB) {
      let dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      pB();
      const uB = null !== dB && void 0 !== dB ? dB : await (0, NB.fetchAnonymousUserContext)();
      if (mB = uB, uB.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const UB = await nB.b.matchmakePlayer(uB, jB, BB, (0, IB.e)()),
        rB = performance.now();
      if (!("gameServerHost" in UB)) throw new Error(`matchmaking refused: ${UB.failReason}`);
      const sB = QB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(UB.gameServerHost);
      if (sB.isError()) throw new Error(`no socket URL for ${UB.gameServerHost}: ${sB.asError().message}`);
      const JB = {
        endpoint: sB.getValue(),
        gameNameWithVariation: UB.gameNameWithVariation,
        lobbyName: UB.lobbyName
      };
      return {
        target: {
          ...await (0, aB.c)(uB, JB, zB, !1),
          postCookies: kB
        },
        matchedAt: rB,
        freshMs: aB.b
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);