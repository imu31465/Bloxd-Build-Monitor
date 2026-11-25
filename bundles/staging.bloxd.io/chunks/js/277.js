export const id = 277;
export const ids = [276, 277];
export const modules = {
  41257: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      gamePackSource: () => Dt
    });
    var Ot = Vt(5145),
      qt = Vt(1600);

    function Dt(tt) {
      return {
        packKey: async et => (await qt.e.getGame(tt, et, !0)).customTexturePackKey,
        fetchPack: Ot.e
      }
    }
  },
  51285: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      fetchGuestContext: () => lt,
      guestJoinTarget: () => bt,
      guestJoinWithPack: () => ft,
      guestPackForGame: () => Et,
      invalidateGuestTrafficCode: () => Mt
    });
    var Ot = Vt(1293),
      qt = Vt(1600),
      Dt = Vt(106),
      mt = Vt(36701),
      dt = Vt(1223),
      jt = Vt(40933),
      Ht = Vt(41257),
      Xt = Vt(40895);

    function Qt() {
      if (Dt.featureFlags.useTurnstile) throw new jt.TurnstilePageError
    }

    function lt() {
      return (0, dt.fetchAnonymousUserContext)().catch((tt => (console.warn("the guest context didn't load", tt), null)))
    }
    async function Et(tt, et, Vt, Ot) {
      try {
        const qt = await Vt;
        if (null === qt) return void console.warn(`the texture pack step for ${tt} has no guest context: the pack in play stays`);
        await et.packForGame(tt, (0, Ht.gamePackSource)(qt), Ot)
      } catch (qt) {
        console.warn(`the texture pack step for ${tt} failed: the pack in play stays`, qt)
      }
    }
    async function ft(tt, et, Vt, Ot) {
      Qt();
      const qt = lt();
      return await Vt(((et, Vt) => Et(tt, et, qt, Vt))), bt(tt, et, Ot(), await qt)
    }
    let wt = null,
      yt = null;
    async function Nt() {
      if ((null === wt || wt.hasExpired()) && (yt ??= (0, dt.fetchAnonymousUserContext)().then((tt => {
          wt = tt
        })).finally((() => {
          yt = null
        })), await yt), null === wt) throw new Error("no guest context to post as");
      return wt.getMetricsCookies()
    }
    async function Mt() {
      var tt;
      await (null === (tt = wt) || void 0 === tt ? void 0 : tt.invalidateTrafficCode())
    }
    async function bt(tt, et, Vt) {
      let Dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Qt();
      const jt = null !== Dt && void 0 !== Dt ? Dt : await (0, dt.fetchAnonymousUserContext)();
      if (wt = jt, jt.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Ht = await qt.e.matchmakePlayer(jt, et, tt, (0, mt.d)()),
        lt = performance.now();
      if (!("gameServerHost" in Ht)) throw new Error(`matchmaking refused: ${Ht.failReason}`);
      const Et = Ot.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Ht.gameServerHost);
      if (Et.isError()) throw new Error(`no socket URL for ${Ht.gameServerHost}: ${Et.asError().message}`);
      const ft = {
        endpoint: Et.getValue(),
        gameNameWithVariation: Ht.gameNameWithVariation,
        lobbyName: Ht.lobbyName
      };
      return {
        target: {
          ...await (0, Xt.d)(jt, ft, Vt, !1),
          postCookies: Nt
        },
        matchedAt: lt,
        freshMs: Xt.c
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);