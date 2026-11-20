export const id = 343;
export const ids = [343, 344];
export const modules = {
  42707: (bb, ub, hb) => {
    hb.d(ub, {
      gamePackSource: () => Gb
    });
    var Bb = hb(4756),
      Ob = hb(1398);

    function Gb(bb) {
      return {
        packKey: async ub => (await Ob.e.getGame(bb, ub, !0)).customTexturePackKey,
        fetchPack: Bb.e
      }
    }
  },
  42702: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      fetchGuestContext: () => wb,
      guestJoinTarget: () => Kb,
      guestJoinWithPack: () => Xb,
      guestPackForGame: () => Zb,
      invalidateGuestTrafficCode: () => lb
    });
    var Bb = hb(1103),
      Ob = hb(1398),
      Gb = hb(86),
      Ub = hb(36074),
      Lb = hb(1038),
      Yb = hb(40369),
      Sb = hb(42707),
      ab = hb(40326);

    function Hb() {
      if (Gb.featureFlags.useTurnstile) throw new Yb.TurnstilePageError
    }

    function wb() {
      return (0, Lb.fetchAnonymousUserContext)().catch((bb => (console.warn("the guest context didn't load", bb), null)))
    }
    async function Zb(bb, ub, hb, Bb) {
      try {
        const Ob = await hb;
        if (null === Ob) return void console.warn(`the texture pack step for ${bb} has no guest context: the pack in play stays`);
        await ub.packForGame(bb, (0, Sb.gamePackSource)(Ob), Bb)
      } catch (Ob) {
        console.warn(`the texture pack step for ${bb} failed: the pack in play stays`, Ob)
      }
    }
    async function Xb(bb, ub, hb, Bb) {
      Hb();
      const Ob = wb();
      return await hb(((ub, hb) => Zb(bb, ub, Ob, hb))), Kb(bb, ub, Bb(), await Ob)
    }
    let pb = null,
      ob = null;
    async function Ab() {
      if ((null === pb || pb.hasExpired()) && (ob ??= (0, Lb.fetchAnonymousUserContext)().then((bb => {
          pb = bb
        })).finally((() => {
          ob = null
        })), await ob), null === pb) throw new Error("no guest context to post as");
      return pb.getMetricsCookies()
    }
    async function lb() {
      var bb;
      await (null === (bb = pb) || void 0 === bb ? void 0 : bb.invalidateTrafficCode())
    }
    async function Kb(bb, ub, hb) {
      let Gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Hb();
      const Yb = null !== Gb && void 0 !== Gb ? Gb : await (0, Lb.fetchAnonymousUserContext)();
      if (pb = Yb, Yb.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Sb = await Ob.e.matchmakePlayer(Yb, ub, bb, (0, Ub.c)()),
        wb = performance.now();
      if (!("gameServerHost" in Sb)) throw new Error(`matchmaking refused: ${Sb.failReason}`);
      const Zb = Bb.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Sb.gameServerHost);
      if (Zb.isError()) throw new Error(`no socket URL for ${Sb.gameServerHost}: ${Zb.asError().message}`);
      const Xb = {
        endpoint: Zb.getValue(),
        gameNameWithVariation: Sb.gameNameWithVariation,
        lobbyName: Sb.lobbyName
      };
      return {
        target: {
          ...await (0, ab.c)(Yb, Xb, hb, !1),
          postCookies: Ab
        },
        matchedAt: wb,
        freshMs: ab.b
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);