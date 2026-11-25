export const id = 277;
export const ids = [276, 277];
export const modules = {
  41276: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      gamePackSource: () => Zu
    });
    var su = ju(5146),
      Uu = ju(1559);

    function Zu(uu) {
      return {
        packKey: async Eu => (await Uu.b.getGame(uu, Eu, !0)).customTexturePackKey,
        fetchPack: su.c
      }
    }
  },
  51254: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      fetchGuestContext: () => cu,
      guestJoinTarget: () => Mu,
      guestJoinWithPack: () => Ou,
      guestPackForGame: () => Nu,
      invalidateGuestTrafficCode: () => gu
    });
    var su = ju(1255),
      Uu = ju(1559),
      Zu = ju(91),
      Xu = ju(36850),
      lu = ju(1183),
      qu = ju(40988),
      fu = ju(41276),
      Cu = ju(40955);

    function bu() {
      if (Zu.featureFlags.useTurnstile) throw new qu.TurnstilePageError
    }

    function cu() {
      return (0, lu.fetchAnonymousUserContext)().catch((uu => (console.warn("the guest context didn't load", uu), null)))
    }
    async function Nu(uu, Eu, ju, su) {
      try {
        const Uu = await ju;
        if (null === Uu) return void console.warn(`the texture pack step for ${uu} has no guest context: the pack in play stays`);
        await Eu.packForGame(uu, (0, fu.gamePackSource)(Uu), su)
      } catch (Uu) {
        console.warn(`the texture pack step for ${uu} failed: the pack in play stays`, Uu)
      }
    }
    async function Ou(uu, Eu, ju, su) {
      bu();
      const Uu = cu();
      return await ju(((Eu, ju) => Nu(uu, Eu, Uu, ju))), Mu(uu, Eu, su(), await Uu)
    }
    let Yu = null,
      hu = null;
    async function Du() {
      if ((null === Yu || Yu.hasExpired()) && (hu ??= (0, lu.fetchAnonymousUserContext)().then((uu => {
          Yu = uu
        })).finally((() => {
          hu = null
        })), await hu), null === Yu) throw new Error("no guest context to post as");
      return Yu.getMetricsCookies()
    }
    async function gu() {
      var uu;
      await (null === (uu = Yu) || void 0 === uu ? void 0 : uu.invalidateTrafficCode())
    }
    async function Mu(uu, Eu, ju) {
      let Zu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      bu();
      const qu = null !== Zu && void 0 !== Zu ? Zu : await (0, lu.fetchAnonymousUserContext)();
      if (Yu = qu, qu.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const fu = await Uu.b.matchmakePlayer(qu, Eu, uu, (0, Xu.c)()),
        cu = performance.now();
      if (!("gameServerHost" in fu)) throw new Error(`matchmaking refused: ${fu.failReason}`);
      const Nu = su.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(fu.gameServerHost);
      if (Nu.isError()) throw new Error(`no socket URL for ${fu.gameServerHost}: ${Nu.asError().message}`);
      const Ou = {
        endpoint: Nu.getValue(),
        gameNameWithVariation: fu.gameNameWithVariation,
        lobbyName: fu.lobbyName
      };
      return {
        target: {
          ...await (0, Cu.h)(qu, Ou, ju, !1),
          postCookies: Du
        },
        matchedAt: cu,
        freshMs: Cu.d
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);