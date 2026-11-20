export const id = 342;
export const ids = [342, 343];
export const modules = {
  42641: (UU, RU, gU) => {
    gU.d(RU, {
      gamePackSource: () => EU
    });
    var tU = gU(4657),
      pU = gU(1461);

    function EU(UU) {
      return {
        packKey: async RU => (await pU.c.getGame(UU, RU, !0)).customTexturePackKey,
        fetchPack: tU.c
      }
    }
  },
  42637: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      fetchGuestContext: () => jU,
      guestJoinTarget: () => fU,
      guestJoinWithPack: () => CU,
      guestPackForGame: () => uU,
      invalidateGuestTrafficCode: () => WU
    });
    var tU = gU(1196),
      pU = gU(1461),
      EU = gU(96),
      PU = gU(36027),
      TU = gU(1120),
      qU = gU(40319),
      KU = gU(42641),
      cU = gU(40273);

    function GU() {
      if (EU.featureFlags.useTurnstile) throw new qU.TurnstilePageError
    }

    function jU() {
      return (0, TU.fetchAnonymousUserContext)().catch((UU => (console.warn("the guest context didn't load", UU), null)))
    }
    async function uU(UU, RU, gU, tU) {
      try {
        const pU = await gU;
        if (null === pU) return void console.warn(`the texture pack step for ${UU} has no guest context: the pack in play stays`);
        await RU.packForGame(UU, (0, KU.gamePackSource)(pU), tU)
      } catch (pU) {
        console.warn(`the texture pack step for ${UU} failed: the pack in play stays`, pU)
      }
    }
    async function CU(UU, RU, gU, tU) {
      GU();
      const pU = jU();
      return await gU(((RU, gU) => uU(UU, RU, pU, gU))), fU(UU, RU, tU(), await pU)
    }
    let hU = null,
      QU = null;
    async function eU() {
      if ((null === hU || hU.hasExpired()) && (QU ??= (0, TU.fetchAnonymousUserContext)().then((UU => {
          hU = UU
        })).finally((() => {
          QU = null
        })), await QU), null === hU) throw new Error("no guest context to post as");
      return hU.getMetricsCookies()
    }
    async function WU() {
      var UU;
      await (null === (UU = hU) || void 0 === UU ? void 0 : UU.invalidateTrafficCode())
    }
    async function fU(UU, RU, gU) {
      let EU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      GU();
      const qU = null !== EU && void 0 !== EU ? EU : await (0, TU.fetchAnonymousUserContext)();
      if (hU = qU, qU.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const KU = await pU.c.matchmakePlayer(qU, RU, UU, (0, PU.b)()),
        jU = performance.now();
      if (!("gameServerHost" in KU)) throw new Error(`matchmaking refused: ${KU.failReason}`);
      const uU = tU.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(KU.gameServerHost);
      if (uU.isError()) throw new Error(`no socket URL for ${KU.gameServerHost}: ${uU.asError().message}`);
      const CU = {
        endpoint: uU.getValue(),
        gameNameWithVariation: KU.gameNameWithVariation,
        lobbyName: KU.lobbyName
      };
      return {
        target: {
          ...await (0, cU.h)(qU, CU, gU, !1),
          postCookies: eU
        },
        matchedAt: jU,
        freshMs: cU.e
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);