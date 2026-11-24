export const id = 277;
export const ids = [276, 277];
export const modules = {
  41273: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      gamePackSource: () => Ip
    });
    var Op = cp(5103),
      op = cp(1520);

    function Ip(pp) {
      return {
        packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
        fetchPack: Op.d
      }
    }
  },
  51202: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      fetchGuestContext: () => Pp,
      guestJoinTarget: () => Hp,
      guestJoinWithPack: () => yp,
      guestPackForGame: () => Wp,
      invalidateGuestTrafficCode: () => tp
    });
    var Op = cp(1211),
      op = cp(1520),
      Ip = cp(104),
      Sp = cp(36674),
      xp = cp(1149),
      Lp = cp(40945),
      Yp = cp(41273),
      Dp = cp(40900);

    function Ap() {
      if (Ip.featureFlags.useTurnstile) throw new Lp.TurnstilePageError
    }

    function Pp() {
      return (0, xp.fetchAnonymousUserContext)().catch((pp => (console.warn("the guest context didn't load", pp), null)))
    }
    async function Wp(pp, ip, cp, Op) {
      try {
        const op = await cp;
        if (null === op) return void console.warn(`the texture pack step for ${pp} has no guest context: the pack in play stays`);
        await ip.packForGame(pp, (0, Yp.gamePackSource)(op), Op)
      } catch (op) {
        console.warn(`the texture pack step for ${pp} failed: the pack in play stays`, op)
      }
    }
    async function yp(pp, ip, cp, Op) {
      Ap();
      const op = Pp();
      return await cp(((ip, cp) => Wp(pp, ip, op, cp))), Hp(pp, ip, Op(), await op)
    }
    let Up = null,
      wp = null;
    async function vp() {
      if ((null === Up || Up.hasExpired()) && (wp ??= (0, xp.fetchAnonymousUserContext)().then((pp => {
          Up = pp
        })).finally((() => {
          wp = null
        })), await wp), null === Up) throw new Error("no guest context to post as");
      return Up.getMetricsCookies()
    }
    async function tp() {
      var pp;
      await (null === (pp = Up) || void 0 === pp ? void 0 : pp.invalidateTrafficCode())
    }
    async function Hp(pp, ip, cp) {
      let Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Ap();
      const Lp = null !== Ip && void 0 !== Ip ? Ip : await (0, xp.fetchAnonymousUserContext)();
      if (Up = Lp, Lp.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Yp = await op.b.matchmakePlayer(Lp, ip, pp, (0, Sp.c)()),
        Pp = performance.now();
      if (!("gameServerHost" in Yp)) throw new Error(`matchmaking refused: ${Yp.failReason}`);
      const Wp = Op.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Yp.gameServerHost);
      if (Wp.isError()) throw new Error(`no socket URL for ${Yp.gameServerHost}: ${Wp.asError().message}`);
      const yp = {
        endpoint: Wp.getValue(),
        gameNameWithVariation: Yp.gameNameWithVariation,
        lobbyName: Yp.lobbyName
      };
      return {
        target: {
          ...await (0, Dp.c)(Lp, yp, cp, !1),
          postCookies: vp
        },
        matchedAt: Pp,
        freshMs: Dp.b
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);