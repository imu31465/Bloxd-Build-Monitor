export const id = 327;
export const ids = [327, 328];
export const modules = {
  41222: (cB, Bc, nc) => {
    nc.d(Bc, {
      gamePackSource: () => rB
    });
    var Vc = nc(4031),
      Ic = nc(1314);

    function rB(cB) {
      return {
        packKey: async Bc => (await Ic.e.getGame(cB, Bc, !0)).customTexturePackKey,
        fetchPack: Vc.b
      }
    }
  },
  41218: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      fetchGuestContext: () => Tc,
      guestJoinTarget: () => zB,
      guestJoinWithPack: () => mB,
      guestPackForGame: () => fc,
      invalidateGuestTrafficCode: () => yB
    });
    var Vc = nc(1062),
      Ic = nc(1314),
      rB = nc(107),
      uc = nc(35121),
      sc = nc(988),
      Mc = nc(38900),
      Pc = nc(41222),
      qB = nc(38849);

    function Oc() {
      if (rB.featureFlags.useTurnstile) throw new Mc.TurnstilePageError
    }

    function Tc() {
      return (0, sc.fetchAnonymousUserContext)().catch((cB => (console.warn("the guest context didn't load", cB), null)))
    }
    async function fc(cB, Bc, nc, Vc) {
      try {
        const Ic = await nc;
        if (null === Ic) return void console.warn(`the texture pack step for ${cB} has no guest context: the pack in play stays`);
        await Bc.packForGame(cB, (0, Pc.gamePackSource)(Ic), Vc)
      } catch (Ic) {
        console.warn(`the texture pack step for ${cB} failed: the pack in play stays`, Ic)
      }
    }
    async function mB(cB, Bc, nc, Vc) {
      Oc();
      const Ic = Tc();
      return await nc(((Bc, nc) => fc(cB, Bc, Ic, nc))), zB(cB, Bc, Vc(), await Ic)
    }
    let ec = null,
      tB = null;
    async function Sc() {
      if ((null === ec || ec.hasExpired()) && (tB ??= (0, sc.fetchAnonymousUserContext)().then((cB => {
          ec = cB
        })).finally((() => {
          tB = null
        })), await tB), null === ec) throw new Error("no guest context to post as");
      return ec.getMetricsCookies()
    }
    async function yB() {
      var cB;
      await (null === (cB = ec) || void 0 === cB ? void 0 : cB.invalidateTrafficCode())
    }
    async function zB(cB, Bc, nc) {
      let rB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Oc();
      const Mc = null !== rB && void 0 !== rB ? rB : await (0, sc.fetchAnonymousUserContext)();
      if (ec = Mc, Mc.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Pc = await Ic.e.matchmakePlayer(Mc, Bc, cB, (0, uc.c)()),
        Tc = performance.now();
      if (!("gameServerHost" in Pc)) throw new Error(`matchmaking refused: ${Pc.failReason}`);
      const fc = Vc.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Pc.gameServerHost);
      if (fc.isError()) throw new Error(`no socket URL for ${Pc.gameServerHost}: ${fc.asError().message}`);
      const mB = {
        endpoint: fc.getValue(),
        gameNameWithVariation: Pc.gameNameWithVariation,
        lobbyName: Pc.lobbyName
      };
      return {
        target: {
          ...await (0, qB.c)(Mc, mB, nc),
          postCookies: Sc
        },
        matchedAt: Tc,
        freshMs: qB.b
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);