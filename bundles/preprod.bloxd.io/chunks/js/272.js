export const id = 272;
export const ids = [271, 272];
export const modules = {
  40888: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      gamePackSource: () => bC
    });
    var QC = ZC(4925),
      wC = ZC(1439);

    function bC(CC) {
      return {
        packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
        fetchPack: QC.d
      }
    }
  },
  50720: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      fetchGuestContext: () => NC,
      guestJoinTarget: () => RC,
      guestJoinWithPack: () => gC,
      guestPackForGame: () => MC,
      invalidateGuestTrafficCode: () => GC
    });
    var QC = ZC(1149),
      wC = ZC(1439),
      bC = ZC(77),
      nC = ZC(36342),
      fC = ZC(1078),
      oC = ZC(40574),
      qC = ZC(40888),
      FC = ZC(40538);

    function WC() {
      if (bC.featureFlags.useTurnstile) throw new oC.TurnstilePageError
    }

    function NC() {
      return (0, fC.fetchAnonymousUserContext)().catch((CC => (console.warn("the guest context didn't load", CC), null)))
    }
    async function MC(CC, zC, ZC, QC) {
      try {
        const wC = await ZC;
        if (null === wC) return void console.warn(`the texture pack step for ${CC} has no guest context: the pack in play stays`);
        await zC.packForGame(CC, (0, qC.gamePackSource)(wC), QC)
      } catch (wC) {
        console.warn(`the texture pack step for ${CC} failed: the pack in play stays`, wC)
      }
    }
    async function gC(CC, zC, ZC, QC) {
      WC();
      const wC = NC();
      return await ZC(((zC, ZC) => MC(CC, zC, wC, ZC))), RC(CC, zC, QC(), await wC)
    }
    let SC = null,
      pC = null;
    async function PC() {
      if ((null === SC || SC.hasExpired()) && (pC ??= (0, fC.fetchAnonymousUserContext)().then((CC => {
          SC = CC
        })).finally((() => {
          pC = null
        })), await pC), null === SC) throw new Error("no guest context to post as");
      return SC.getMetricsCookies()
    }
    async function GC() {
      var CC;
      await (null === (CC = SC) || void 0 === CC ? void 0 : CC.invalidateTrafficCode())
    }
    async function RC(CC, zC, ZC) {
      let bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      WC();
      const oC = null !== bC && void 0 !== bC ? bC : await (0, fC.fetchAnonymousUserContext)();
      if (SC = oC, oC.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const qC = await wC.d.matchmakePlayer(oC, zC, CC, (0, nC.b)()),
        NC = performance.now();
      if (!("gameServerHost" in qC)) throw new Error(`matchmaking refused: ${qC.failReason}`);
      const MC = QC.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(qC.gameServerHost);
      if (MC.isError()) throw new Error(`no socket URL for ${qC.gameServerHost}: ${MC.asError().message}`);
      const gC = {
        endpoint: MC.getValue(),
        gameNameWithVariation: qC.gameNameWithVariation,
        lobbyName: qC.lobbyName
      };
      return {
        target: {
          ...await (0, FC.c)(oC, gC, ZC, !1),
          postCookies: PC
        },
        matchedAt: NC,
        freshMs: FC.b
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);