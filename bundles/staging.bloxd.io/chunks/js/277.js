export const id = 277;
export const ids = [276, 277];
export const modules = {
  41447: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      gamePackSource: () => LG
    });
    var wG = ZG(5008),
      SG = ZG(1431);

    function LG(GG) {
      return {
        packKey: async bG => (await SG.d.getGame(GG, bG, !0)).customTexturePackKey,
        fetchPack: wG.e
      }
    }
  },
  51425: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      fetchGuestContext: () => fG,
      guestJoinTarget: () => zG,
      guestJoinWithPack: () => KG,
      guestPackForGame: () => QG,
      invalidateGuestTrafficCode: () => rG
    });
    var wG = ZG(1163),
      SG = ZG(1431),
      LG = ZG(80),
      yG = ZG(36801),
      kG = ZG(1096),
      UG = ZG(41122),
      YG = ZG(41447),
      VG = ZG(41088);

    function pG() {
      if (LG.featureFlags.useTurnstile) throw new UG.TurnstilePageError
    }

    function fG() {
      return (0, kG.fetchAnonymousUserContext)().catch((GG => (console.warn("the guest context didn't load", GG), null)))
    }
    async function QG(GG, bG, ZG, wG) {
      try {
        const SG = await ZG;
        if (null === SG) return void console.warn(`the texture pack step for ${GG} has no guest context: the pack in play stays`);
        await bG.packForGame(GG, (0, YG.gamePackSource)(SG), wG)
      } catch (SG) {
        console.warn(`the texture pack step for ${GG} failed: the pack in play stays`, SG)
      }
    }
    async function KG(GG, bG, ZG, wG) {
      pG();
      const SG = fG();
      return await ZG(((bG, ZG) => QG(GG, bG, SG, ZG))), zG(GG, bG, wG(), await SG)
    }
    let hG = null,
      dG = null;
    async function JG() {
      if ((null === hG || hG.hasExpired()) && (dG ??= (0, kG.fetchAnonymousUserContext)().then((GG => {
          hG = GG
        })).finally((() => {
          dG = null
        })), await dG), null === hG) throw new Error("no guest context to post as");
      return hG.getMetricsCookies()
    }
    async function rG() {
      var GG;
      await (null === (GG = hG) || void 0 === GG ? void 0 : GG.invalidateTrafficCode())
    }
    async function zG(GG, bG, ZG) {
      let LG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      pG();
      const UG = null !== LG && void 0 !== LG ? LG : await (0, kG.fetchAnonymousUserContext)();
      if (hG = UG, UG.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const YG = await SG.d.matchmakePlayer(UG, bG, GG, (0, yG.e)()),
        fG = performance.now();
      if (!("gameServerHost" in YG)) throw new Error(`matchmaking refused: ${YG.failReason}`);
      const QG = wG.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(YG.gameServerHost);
      if (QG.isError()) throw new Error(`no socket URL for ${YG.gameServerHost}: ${QG.asError().message}`);
      const KG = {
        endpoint: QG.getValue(),
        gameNameWithVariation: YG.gameNameWithVariation,
        lobbyName: YG.lobbyName
      };
      return {
        target: {
          ...await (0, VG.e)(UG, KG, ZG, !1),
          postCookies: JG
        },
        matchedAt: fG,
        freshMs: VG.c
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);