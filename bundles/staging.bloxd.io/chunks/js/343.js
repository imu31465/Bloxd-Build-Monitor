export const id = 343;
export const ids = [343, 344];
export const modules = {
  43223: (dd, Jd, kd) => {
    kd.d(Jd, {
      gamePackSource: () => Wd
    });
    var pd = kd(4867),
      Nd = kd(1520);

    function Wd(dd) {
      return {
        packKey: async Jd => (await Nd.d.getGame(dd, Jd, !0)).customTexturePackKey,
        fetchPack: pd.d
      }
    }
  },
  43215: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      fetchGuestContext: () => ld,
      guestJoinTarget: () => Gd,
      guestJoinWithPack: () => Ld,
      guestPackForGame: () => Qd,
      invalidateGuestTrafficCode: () => Id
    });
    var pd = kd(1220),
      Nd = kd(1520),
      Wd = kd(95),
      Pd = kd(36631),
      Zd = kd(1147),
      gd = kd(40940),
      Cd = kd(43223),
      Kd = kd(40886);

    function od() {
      if (Wd.featureFlags.useTurnstile) throw new gd.TurnstilePageError
    }

    function ld() {
      return (0, Zd.fetchAnonymousUserContext)().catch((dd => (console.warn("the guest context didn't load", dd), null)))
    }
    async function Qd(dd, Jd, kd, pd) {
      try {
        const Nd = await kd;
        if (null === Nd) return void console.warn(`the texture pack step for ${dd} has no guest context: the pack in play stays`);
        await Jd.packForGame(dd, (0, Cd.gamePackSource)(Nd), pd)
      } catch (Nd) {
        console.warn(`the texture pack step for ${dd} failed: the pack in play stays`, Nd)
      }
    }
    async function Ld(dd, Jd, kd, pd) {
      od();
      const Nd = ld();
      return await kd(((Jd, kd) => Qd(dd, Jd, Nd, kd))), Gd(dd, Jd, pd(), await Nd)
    }
    let Od = null,
      ed = null;
    async function Rd() {
      if ((null === Od || Od.hasExpired()) && (ed ??= (0, Zd.fetchAnonymousUserContext)().then((dd => {
          Od = dd
        })).finally((() => {
          ed = null
        })), await ed), null === Od) throw new Error("no guest context to post as");
      return Od.getMetricsCookies()
    }
    async function Id() {
      var dd;
      await (null === (dd = Od) || void 0 === dd ? void 0 : dd.invalidateTrafficCode())
    }
    async function Gd(dd, Jd, kd) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      od();
      const gd = null !== Wd && void 0 !== Wd ? Wd : await (0, Zd.fetchAnonymousUserContext)();
      if (Od = gd, gd.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Cd = await Nd.d.matchmakePlayer(gd, Jd, dd, (0, Pd.d)()),
        ld = performance.now();
      if (!("gameServerHost" in Cd)) throw new Error(`matchmaking refused: ${Cd.failReason}`);
      const Qd = pd.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Cd.gameServerHost);
      if (Qd.isError()) throw new Error(`no socket URL for ${Cd.gameServerHost}: ${Qd.asError().message}`);
      const Ld = {
        endpoint: Qd.getValue(),
        gameNameWithVariation: Cd.gameNameWithVariation,
        lobbyName: Cd.lobbyName
      };
      return {
        target: {
          ...await (0, Kd.c)(gd, Ld, kd, !1),
          postCookies: Rd
        },
        matchedAt: ld,
        freshMs: Kd.b
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);