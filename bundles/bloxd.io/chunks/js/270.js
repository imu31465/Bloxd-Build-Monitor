export const id = 270;
export const ids = [269, 270];
export const modules = {
  40641: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      gamePackSource: () => Sk
    });
    var Dk = ik(4915),
      fk = ik(1459);

    function Sk(kk) {
      return {
        packKey: async ek => (await fk.b.getGame(kk, ek, !0)).customTexturePackKey,
        fetchPack: Dk.e
      }
    }
  },
  50545: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      fetchGuestContext: () => xk,
      guestJoinTarget: () => yk,
      guestJoinWithPack: () => Uk,
      guestPackForGame: () => nk,
      invalidateGuestTrafficCode: () => pk
    });
    var Dk = ik(1177),
      fk = ik(1459),
      Sk = ik(99),
      bk = ik(35986),
      rk = ik(1104),
      Pk = ik(40326),
      mk = ik(40641),
      Mk = ik(40289);

    function Kk() {
      if (Sk.featureFlags.useTurnstile) throw new Pk.TurnstilePageError
    }

    function xk() {
      return (0, rk.fetchAnonymousUserContext)().catch((kk => (console.warn("the guest context didn't load", kk), null)))
    }
    async function nk(kk, ek, ik, Dk) {
      try {
        const fk = await ik;
        if (null === fk) return void console.warn(`the texture pack step for ${kk} has no guest context: the pack in play stays`);
        await ek.packForGame(kk, (0, mk.gamePackSource)(fk), Dk)
      } catch (fk) {
        console.warn(`the texture pack step for ${kk} failed: the pack in play stays`, fk)
      }
    }
    async function Uk(kk, ek, ik, Dk) {
      Kk();
      const fk = xk();
      return await ik(((ek, ik) => nk(kk, ek, fk, ik))), yk(kk, ek, Dk(), await fk)
    }
    let Hk = null,
      wk = null;
    async function lk() {
      if ((null === Hk || Hk.hasExpired()) && (wk ??= (0, rk.fetchAnonymousUserContext)().then((kk => {
          Hk = kk
        })).finally((() => {
          wk = null
        })), await wk), null === Hk) throw new Error("no guest context to post as");
      return Hk.getMetricsCookies()
    }
    async function pk() {
      var kk;
      await (null === (kk = Hk) || void 0 === kk ? void 0 : kk.invalidateTrafficCode())
    }
    async function yk(kk, ek, ik) {
      let Sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Kk();
      const Pk = null !== Sk && void 0 !== Sk ? Sk : await (0, rk.fetchAnonymousUserContext)();
      if (Hk = Pk, Pk.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const mk = await fk.b.matchmakePlayer(Pk, ek, kk, (0, bk.d)()),
        xk = performance.now();
      if (!("gameServerHost" in mk)) throw new Error(`matchmaking refused: ${mk.failReason}`);
      const nk = Dk.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(mk.gameServerHost);
      if (nk.isError()) throw new Error(`no socket URL for ${mk.gameServerHost}: ${nk.asError().message}`);
      const Uk = {
        endpoint: nk.getValue(),
        gameNameWithVariation: mk.gameNameWithVariation,
        lobbyName: mk.lobbyName
      };
      return {
        target: {
          ...await (0, Mk.i)(Pk, Uk, ik, !1),
          postCookies: lk
        },
        matchedAt: xk,
        freshMs: Mk.e
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);