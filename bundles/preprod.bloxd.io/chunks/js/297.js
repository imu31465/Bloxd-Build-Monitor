export const id = 297;
export const ids = [296, 297];
export const modules = {
  42154: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      gamePackSource: () => QU
    });
    var cU = zU(5527),
      yU = zU(1545);

    function QU(UU) {
      return {
        packKey: async XU => (await yU.c.getGame(UU, XU, !0)).customTexturePackKey,
        fetchPack: cU.c
      }
    }
  },
  53747: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      fetchGuestContext: () => NU,
      guestJoinTarget: () => GU,
      guestJoinWithPack: () => pU,
      guestPackForGame: () => IU,
      invalidateGuestTrafficCode: () => kU
    });
    var cU = zU(1203),
      yU = zU(1545),
      QU = zU(97),
      AU = zU(37172),
      FU = zU(1131),
      oU = zU(41840),
      DU = zU(42154),
      EU = zU(41778);

    function YU() {
      if (QU.featureFlags.useTurnstile) throw new oU.TurnstilePageError
    }

    function NU() {
      return (0, FU.fetchAnonymousUserContext)(!0).catch((UU => (console.warn("the guest context didn't load", UU), null)))
    }
    async function IU(UU, XU, zU, cU) {
      try {
        const yU = await zU;
        if (null === yU) return void console.warn(`the texture pack step for ${UU} has no guest context: the pack in play stays`);
        await XU.packForGame(UU, (0, DU.gamePackSource)(yU), cU)
      } catch (yU) {
        console.warn(`the texture pack step for ${UU} failed: the pack in play stays`, yU)
      }
    }
    async function pU(UU, XU, zU, cU) {
      YU();
      const yU = NU();
      return await zU(((XU, zU) => IU(UU, XU, yU, zU))), GU(UU, XU, cU(), await yU)
    }
    let aU = null,
      tU = null;
    async function gU() {
      if ((null === aU || aU.hasExpired()) && (tU ??= (0, FU.fetchAnonymousUserContext)(!0).then((UU => {
          aU = UU
        })).finally((() => {
          tU = null
        })), await tU), null === aU) throw new Error("no guest context to post as");
      return aU.getMetricsCookies()
    }
    async function kU() {
      var UU;
      await (null === (UU = aU) || void 0 === UU ? void 0 : UU.invalidateTrafficCode())
    }
    async function GU(UU, XU, zU) {
      let QU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      YU();
      const oU = null !== QU && void 0 !== QU ? QU : await (0, FU.fetchAnonymousUserContext)(!0);
      if (aU = oU, oU.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const DU = await yU.c.matchmakePlayer(oU, XU, UU, (0, AU.c)()),
        NU = performance.now();
      if (!("gameServerHost" in DU)) throw new Error(`matchmaking refused: ${DU.failReason}`);
      const IU = cU.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(DU.gameServerHost);
      if (IU.isError()) throw new Error(`no socket URL for ${DU.gameServerHost}: ${IU.asError().message}`);
      const pU = {
        endpoint: IU.getValue(),
        gameNameWithVariation: DU.gameNameWithVariation,
        lobbyName: DU.lobbyName
      };
      return {
        target: {
          ...await (0, EU.f)(oU, pU, zU, !1),
          postCookies: gU
        },
        matchedAt: NU,
        freshMs: EU.b
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);