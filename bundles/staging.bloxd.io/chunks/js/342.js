export const id = 342;
export const ids = [342, 343];
export const modules = {
  42770: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      gamePackSource: () => ak
    });
    var Rk = Bk(4681),
      tk = Bk(1441);

    function ak(kk) {
      return {
        packKey: async Fk => (await tk.b.getGame(kk, Fk, !0)).customTexturePackKey,
        fetchPack: Rk.d
      }
    }
  },
  42762: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      fetchGuestContext: () => Jk,
      guestJoinTarget: () => vk,
      guestJoinWithPack: () => ek,
      guestPackForGame: () => Ak,
      invalidateGuestTrafficCode: () => Wk
    });
    var Rk = Bk(1154),
      tk = Bk(1441),
      ak = Bk(98),
      Xk = Bk(36194),
      bk = Bk(1101),
      wk = Bk(40355),
      dk = Bk(42770),
      sk = Bk(40297);

    function Vk() {
      if (ak.featureFlags.useTurnstile) throw new wk.TurnstilePageError
    }

    function Jk() {
      return (0, bk.fetchAnonymousUserContext)().catch((kk => (console.warn("the guest context didn't load", kk), null)))
    }
    async function Ak(kk, Fk, Bk, Rk) {
      try {
        const tk = await Bk;
        if (null === tk) return void console.warn(`the texture pack step for ${kk} has no guest context: the pack in play stays`);
        await Fk.packForGame(kk, (0, dk.gamePackSource)(tk), Rk)
      } catch (tk) {
        console.warn(`the texture pack step for ${kk} failed: the pack in play stays`, tk)
      }
    }
    async function ek(kk, Fk, Bk, Rk) {
      Vk();
      const tk = Jk();
      return await Bk(((Fk, Bk) => Ak(kk, Fk, tk, Bk))), vk(kk, Fk, Rk(), await tk)
    }
    let yk = null,
      fk = null;
    async function mk() {
      if ((null === yk || yk.hasExpired()) && (fk ??= (0, bk.fetchAnonymousUserContext)().then((kk => {
          yk = kk
        })).finally((() => {
          fk = null
        })), await fk), null === yk) throw new Error("no guest context to post as");
      return yk.getMetricsCookies()
    }
    async function Wk() {
      var kk;
      await (null === (kk = yk) || void 0 === kk ? void 0 : kk.invalidateTrafficCode())
    }
    async function vk(kk, Fk, Bk) {
      let ak = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Vk();
      const wk = null !== ak && void 0 !== ak ? ak : await (0, bk.fetchAnonymousUserContext)();
      if (yk = wk, wk.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const dk = await tk.b.matchmakePlayer(wk, Fk, kk, (0, Xk.b)()),
        Jk = performance.now();
      if (!("gameServerHost" in dk)) throw new Error(`matchmaking refused: ${dk.failReason}`);
      const Ak = Rk.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(dk.gameServerHost);
      if (Ak.isError()) throw new Error(`no socket URL for ${dk.gameServerHost}: ${Ak.asError().message}`);
      const ek = {
        endpoint: Ak.getValue(),
        gameNameWithVariation: dk.gameNameWithVariation,
        lobbyName: dk.lobbyName
      };
      return {
        target: {
          ...await (0, sk.e)(wk, ek, Bk, !1),
          postCookies: mk
        },
        matchedAt: Jk,
        freshMs: sk.c
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);