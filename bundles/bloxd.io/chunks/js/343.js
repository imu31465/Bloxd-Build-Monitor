export const id = 343;
export const ids = [343, 344];
export const modules = {
  42704: (vv, zv, Pv) => {
    Pv.d(zv, {
      gamePackSource: () => ev
    });
    var hv = Pv(4719),
      Sv = Pv(1482);

    function ev(vv) {
      return {
        packKey: async zv => (await Sv.e.getGame(vv, zv, !0)).customTexturePackKey,
        fetchPack: hv.d
      }
    }
  },
  42699: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      fetchGuestContext: () => Wv,
      guestJoinTarget: () => Gv,
      guestJoinWithPack: () => av,
      guestPackForGame: () => wv,
      invalidateGuestTrafficCode: () => cv
    });
    var hv = Pv(1184),
      Sv = Pv(1482),
      ev = Pv(73),
      gv = Pv(36003),
      pv = Pv(1114),
      dv = Pv(40235),
      Nv = Pv(42704),
      lv = Pv(40183);

    function Tv() {
      if (ev.featureFlags.useTurnstile) throw new dv.TurnstilePageError
    }

    function Wv() {
      return (0, pv.fetchAnonymousUserContext)().catch((vv => (console.warn("the guest context didn't load", vv), null)))
    }
    async function wv(vv, zv, Pv, hv) {
      try {
        const Sv = await Pv;
        if (null === Sv) return void console.warn(`the texture pack step for ${vv} has no guest context: the pack in play stays`);
        await zv.packForGame(vv, (0, Nv.gamePackSource)(Sv), hv)
      } catch (Sv) {
        console.warn(`the texture pack step for ${vv} failed: the pack in play stays`, Sv)
      }
    }
    async function av(vv, zv, Pv, hv) {
      Tv();
      const Sv = Wv();
      return await Pv(((zv, Pv) => wv(vv, zv, Sv, Pv))), Gv(vv, zv, hv(), await Sv)
    }
    let sv = null,
      Cv = null;
    async function iv() {
      if ((null === sv || sv.hasExpired()) && (Cv ??= (0, pv.fetchAnonymousUserContext)().then((vv => {
          sv = vv
        })).finally((() => {
          Cv = null
        })), await Cv), null === sv) throw new Error("no guest context to post as");
      return sv.getMetricsCookies()
    }
    async function cv() {
      var vv;
      await (null === (vv = sv) || void 0 === vv ? void 0 : vv.invalidateTrafficCode())
    }
    async function Gv(vv, zv, Pv) {
      let ev = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Tv();
      const dv = null !== ev && void 0 !== ev ? ev : await (0, pv.fetchAnonymousUserContext)();
      if (sv = dv, dv.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Nv = await Sv.e.matchmakePlayer(dv, zv, vv, (0, gv.e)()),
        Wv = performance.now();
      if (!("gameServerHost" in Nv)) throw new Error(`matchmaking refused: ${Nv.failReason}`);
      const wv = hv.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Nv.gameServerHost);
      if (wv.isError()) throw new Error(`no socket URL for ${Nv.gameServerHost}: ${wv.asError().message}`);
      const av = {
        endpoint: wv.getValue(),
        gameNameWithVariation: Nv.gameNameWithVariation,
        lobbyName: Nv.lobbyName
      };
      return {
        target: {
          ...await (0, lv.c)(dv, av, Pv, !1),
          postCookies: iv
        },
        matchedAt: Wv,
        freshMs: lv.b
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);