export const id = 272;
export const ids = [271, 272];
export const modules = {
  41067: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      gamePackSource: () => ik
    });
    var Xk = Ik(4976),
      Tk = Ik(1453);

    function ik(kk) {
      return {
        packKey: async Fk => (await Tk.e.getGame(kk, Fk, !0)).customTexturePackKey,
        fetchPack: Xk.c
      }
    }
  },
  50967: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      fetchGuestContext: () => Zk,
      guestJoinTarget: () => Pk,
      guestJoinWithPack: () => ek,
      guestPackForGame: () => jk,
      invalidateGuestTrafficCode: () => xk
    });
    var Xk = Ik(1194),
      Tk = Ik(1453),
      ik = Ik(95),
      yk = Ik(36449),
      lk = Ik(1120),
      ak = Ik(40757),
      qk = Ik(41067),
      Lk = Ik(40712);

    function tk() {
      if (ik.featureFlags.useTurnstile) throw new ak.TurnstilePageError
    }

    function Zk() {
      return (0, lk.fetchAnonymousUserContext)().catch((kk => (console.warn("the guest context didn't load", kk), null)))
    }
    async function jk(kk, Fk, Ik, Xk) {
      try {
        const Tk = await Ik;
        if (null === Tk) return void console.warn(`the texture pack step for ${kk} has no guest context: the pack in play stays`);
        await Fk.packForGame(kk, (0, qk.gamePackSource)(Tk), Xk)
      } catch (Tk) {
        console.warn(`the texture pack step for ${kk} failed: the pack in play stays`, Tk)
      }
    }
    async function ek(kk, Fk, Ik, Xk) {
      tk();
      const Tk = Zk();
      return await Ik(((Fk, Ik) => jk(kk, Fk, Tk, Ik))), Pk(kk, Fk, Xk(), await Tk)
    }
    let wk = null,
      Hk = null;
    async function Jk() {
      if ((null === wk || wk.hasExpired()) && (Hk ??= (0, lk.fetchAnonymousUserContext)().then((kk => {
          wk = kk
        })).finally((() => {
          Hk = null
        })), await Hk), null === wk) throw new Error("no guest context to post as");
      return wk.getMetricsCookies()
    }
    async function xk() {
      var kk;
      await (null === (kk = wk) || void 0 === kk ? void 0 : kk.invalidateTrafficCode())
    }
    async function Pk(kk, Fk, Ik) {
      let ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      tk();
      const ak = null !== ik && void 0 !== ik ? ik : await (0, lk.fetchAnonymousUserContext)();
      if (wk = ak, ak.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const qk = await Tk.e.matchmakePlayer(ak, Fk, kk, (0, yk.d)()),
        Zk = performance.now();
      if (!("gameServerHost" in qk)) throw new Error(`matchmaking refused: ${qk.failReason}`);
      const jk = Xk.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(qk.gameServerHost);
      if (jk.isError()) throw new Error(`no socket URL for ${qk.gameServerHost}: ${jk.asError().message}`);
      const ek = {
        endpoint: jk.getValue(),
        gameNameWithVariation: qk.gameNameWithVariation,
        lobbyName: qk.lobbyName
      };
      return {
        target: {
          ...await (0, Lk.f)(ak, ek, Ik, !1),
          postCookies: Jk
        },
        matchedAt: Zk,
        freshMs: Lk.c
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);