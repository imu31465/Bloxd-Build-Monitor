export const id = 332;
export const ids = [332, 333];
export const modules = {
  41982: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      gamePackSource: () => eJ
    });
    var FJ = ZJ(4392),
      UJ = ZJ(1389);

    function eJ(JJ) {
      return {
        packKey: async cJ => (await UJ.c.getGame(JJ, cJ, !0)).customTexturePackKey,
        fetchPack: FJ.d
      }
    }
  },
  41973: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      fetchGuestContext: () => DJ,
      guestJoinTarget: () => vJ,
      guestJoinWithPack: () => nJ,
      guestPackForGame: () => sJ,
      invalidateGuestTrafficCode: () => rJ
    });
    var FJ = ZJ(1098),
      UJ = ZJ(1389),
      eJ = ZJ(80),
      XJ = ZJ(35551),
      AJ = ZJ(1028),
      qJ = ZJ(39705),
      jJ = ZJ(41982),
      YJ = ZJ(39630);

    function hJ() {
      if (eJ.featureFlags.useTurnstile) throw new qJ.TurnstilePageError
    }

    function DJ() {
      return (0, AJ.fetchAnonymousUserContext)().catch((JJ => (console.warn("the guest context didn't load", JJ), null)))
    }
    async function sJ(JJ, cJ, ZJ, FJ) {
      try {
        const UJ = await ZJ;
        if (null === UJ) return void console.warn(`the texture pack step for ${JJ} has no guest context: the pack in play stays`);
        await cJ.packForGame(JJ, (0, jJ.gamePackSource)(UJ), FJ)
      } catch (UJ) {
        console.warn(`the texture pack step for ${JJ} failed: the pack in play stays`, UJ)
      }
    }
    async function nJ(JJ, cJ, ZJ, FJ) {
      hJ();
      const UJ = DJ();
      return await ZJ(((cJ, ZJ) => sJ(JJ, cJ, UJ, ZJ))), vJ(JJ, cJ, FJ(), await UJ)
    }
    let GJ = null,
      fJ = null;
    async function xJ() {
      if ((null === GJ || GJ.hasExpired()) && (fJ ??= (0, AJ.fetchAnonymousUserContext)().then((JJ => {
          GJ = JJ
        })).finally((() => {
          fJ = null
        })), await fJ), null === GJ) throw new Error("no guest context to post as");
      return GJ.getMetricsCookies()
    }
    async function rJ() {
      var JJ;
      await (null === (JJ = GJ) || void 0 === JJ ? void 0 : JJ.invalidateTrafficCode())
    }
    async function vJ(JJ, cJ, ZJ) {
      let eJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      hJ();
      const qJ = null !== eJ && void 0 !== eJ ? eJ : await (0, AJ.fetchAnonymousUserContext)();
      if (GJ = qJ, qJ.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const jJ = await UJ.c.matchmakePlayer(qJ, cJ, JJ, (0, XJ.b)()),
        DJ = performance.now();
      if (!("gameServerHost" in jJ)) throw new Error(`matchmaking refused: ${jJ.failReason}`);
      const sJ = FJ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(jJ.gameServerHost);
      if (sJ.isError()) throw new Error(`no socket URL for ${jJ.gameServerHost}: ${sJ.asError().message}`);
      const nJ = {
        endpoint: sJ.getValue(),
        gameNameWithVariation: jJ.gameNameWithVariation,
        lobbyName: jJ.lobbyName
      };
      return {
        target: {
          ...await (0, YJ.g)(qJ, nJ, ZJ),
          postCookies: xJ
        },
        matchedAt: DJ,
        freshMs: YJ.d
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);