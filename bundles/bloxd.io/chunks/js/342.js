export const id = 342;
export const ids = [342, 343];
export const modules = {
  42885: (uu, Ru, yu) => {
    yu.d(Ru, {
      gamePackSource: () => Qu
    });
    var Eu = yu(4771),
      Ku = yu(1447);

    function Qu(uu) {
      return {
        packKey: async Ru => (await Ku.e.getGame(uu, Ru, !0)).customTexturePackKey,
        fetchPack: Eu.d
      }
    }
  },
  42876: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      fetchGuestContext: () => Bu,
      guestJoinTarget: () => Hu,
      guestJoinWithPack: () => Su,
      guestPackForGame: () => xu,
      invalidateGuestTrafficCode: () => ju
    });
    var Eu = yu(1176),
      Ku = yu(1447),
      Qu = yu(106),
      mu = yu(36316),
      Ju = yu(1110),
      Nu = yu(40513),
      Xu = yu(42885),
      Vu = yu(40446);

    function ru() {
      if (Qu.featureFlags.useTurnstile) throw new Nu.TurnstilePageError
    }

    function Bu() {
      return (0, Ju.fetchAnonymousUserContext)().catch((uu => (console.warn("the guest context didn't load", uu), null)))
    }
    async function xu(uu, Ru, yu, Eu) {
      try {
        const Ku = await yu;
        if (null === Ku) return void console.warn(`the texture pack step for ${uu} has no guest context: the pack in play stays`);
        await Ru.packForGame(uu, (0, Xu.gamePackSource)(Ku), Eu)
      } catch (Ku) {
        console.warn(`the texture pack step for ${uu} failed: the pack in play stays`, Ku)
      }
    }
    async function Su(uu, Ru, yu, Eu) {
      ru();
      const Ku = Bu();
      return await yu(((Ru, yu) => xu(uu, Ru, Ku, yu))), Hu(uu, Ru, Eu(), await Ku)
    }
    let pu = null,
      Tu = null;
    async function Wu() {
      if ((null === pu || pu.hasExpired()) && (Tu ??= (0, Ju.fetchAnonymousUserContext)().then((uu => {
          pu = uu
        })).finally((() => {
          Tu = null
        })), await Tu), null === pu) throw new Error("no guest context to post as");
      return pu.getMetricsCookies()
    }
    async function ju() {
      var uu;
      await (null === (uu = pu) || void 0 === uu ? void 0 : uu.invalidateTrafficCode())
    }
    async function Hu(uu, Ru, yu) {
      let Qu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      ru();
      const Nu = null !== Qu && void 0 !== Qu ? Qu : await (0, Ju.fetchAnonymousUserContext)();
      if (pu = Nu, Nu.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Xu = await Ku.e.matchmakePlayer(Nu, Ru, uu, (0, mu.b)()),
        Bu = performance.now();
      if (!("gameServerHost" in Xu)) throw new Error(`matchmaking refused: ${Xu.failReason}`);
      const xu = Eu.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Xu.gameServerHost);
      if (xu.isError()) throw new Error(`no socket URL for ${Xu.gameServerHost}: ${xu.asError().message}`);
      const Su = {
        endpoint: xu.getValue(),
        gameNameWithVariation: Xu.gameNameWithVariation,
        lobbyName: Xu.lobbyName
      };
      return {
        target: {
          ...await (0, Vu.e)(Nu, Su, yu, !1),
          postCookies: Wu
        },
        matchedAt: Bu,
        freshMs: Vu.b
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);