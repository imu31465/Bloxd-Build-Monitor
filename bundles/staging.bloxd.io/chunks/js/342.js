export const id = 342;
export const ids = [342, 343];
export const modules = {
  42668: (bb, cb, sb) => {
    sb.d(cb, {
      gamePackSource: () => ab
    });
    var kb = sb(4688),
      Wb = sb(1474);

    function ab(bb) {
      return {
        packKey: async cb => (await Wb.b.getGame(bb, cb, !0)).customTexturePackKey,
        fetchPack: kb.e
      }
    }
  },
  42664: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      fetchGuestContext: () => Xb,
      guestJoinTarget: () => Nb,
      guestJoinWithPack: () => mb,
      guestPackForGame: () => nb,
      invalidateGuestTrafficCode: () => Cb
    });
    var kb = sb(1208),
      Wb = sb(1474),
      ab = sb(117),
      Tb = sb(36112),
      Ub = sb(1126),
      Ib = sb(40373),
      Hb = sb(42668),
      fb = sb(40314);

    function Mb() {
      if (ab.featureFlags.useTurnstile) throw new Ib.TurnstilePageError
    }

    function Xb() {
      return (0, Ub.fetchAnonymousUserContext)().catch((bb => (console.warn("the guest context didn't load", bb), null)))
    }
    async function nb(bb, cb, sb, kb) {
      try {
        const Wb = await sb;
        if (null === Wb) return void console.warn(`the texture pack step for ${bb} has no guest context: the pack in play stays`);
        await cb.packForGame(bb, (0, Hb.gamePackSource)(Wb), kb)
      } catch (Wb) {
        console.warn(`the texture pack step for ${bb} failed: the pack in play stays`, Wb)
      }
    }
    async function mb(bb, cb, sb, kb) {
      Mb();
      const Wb = Xb();
      return await sb(((cb, sb) => nb(bb, cb, Wb, sb))), Nb(bb, cb, kb(), await Wb)
    }
    let lb = null,
      Qb = null;
    async function eb() {
      if ((null === lb || lb.hasExpired()) && (Qb ??= (0, Ub.fetchAnonymousUserContext)().then((bb => {
          lb = bb
        })).finally((() => {
          Qb = null
        })), await Qb), null === lb) throw new Error("no guest context to post as");
      return lb.getMetricsCookies()
    }
    async function Cb() {
      var bb;
      await (null === (bb = lb) || void 0 === bb ? void 0 : bb.invalidateTrafficCode())
    }
    async function Nb(bb, cb, sb) {
      let ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Mb();
      const Ib = null !== ab && void 0 !== ab ? ab : await (0, Ub.fetchAnonymousUserContext)();
      if (lb = Ib, Ib.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Hb = await Wb.b.matchmakePlayer(Ib, cb, bb, (0, Tb.e)()),
        Xb = performance.now();
      if (!("gameServerHost" in Hb)) throw new Error(`matchmaking refused: ${Hb.failReason}`);
      const nb = kb.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Hb.gameServerHost);
      if (nb.isError()) throw new Error(`no socket URL for ${Hb.gameServerHost}: ${nb.asError().message}`);
      const mb = {
        endpoint: nb.getValue(),
        gameNameWithVariation: Hb.gameNameWithVariation,
        lobbyName: Hb.lobbyName
      };
      return {
        target: {
          ...await (0, fb.e)(Ib, mb, sb, !1),
          postCookies: eb
        },
        matchedAt: Xb,
        freshMs: fb.d
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);