export const id = 342;
export const ids = [342, 343];
export const modules = {
  42416: (bb, ab, Ub) => {
    Ub.d(ab, {
      gamePackSource: () => Tb
    });
    var Ab = Ub(4659),
      Mb = Ub(1413);

    function Tb(bb) {
      return {
        packKey: async ab => (await Mb.b.getGame(bb, ab, !0)).customTexturePackKey,
        fetchPack: Ab.e
      }
    }
  },
  42410: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      fetchGuestContext: () => Pb,
      guestJoinTarget: () => Db,
      guestJoinWithPack: () => jb,
      guestPackForGame: () => Xb,
      invalidateGuestTrafficCode: () => Zb
    });
    var Ab = Ub(1142),
      Mb = Ub(1413),
      Tb = Ub(101),
      Eb = Ub(35900),
      Yb = Ub(1065),
      Bb = Ub(40052),
      eb = Ub(42416),
      vb = Ub(40009);

    function Lb() {
      if (Tb.featureFlags.useTurnstile) throw new Bb.TurnstilePageError
    }

    function Pb() {
      return (0, Yb.fetchAnonymousUserContext)().catch((bb => (console.warn("the guest context didn't load", bb), null)))
    }
    async function Xb(bb, ab, Ub, Ab) {
      try {
        const Mb = await Ub;
        if (null === Mb) return void console.warn(`the texture pack step for ${bb} has no guest context: the pack in play stays`);
        await ab.packForGame(bb, (0, eb.gamePackSource)(Mb), Ab)
      } catch (Mb) {
        console.warn(`the texture pack step for ${bb} failed: the pack in play stays`, Mb)
      }
    }
    async function jb(bb, ab, Ub, Ab) {
      Lb();
      const Mb = Pb();
      return await Ub(((ab, Ub) => Xb(bb, ab, Mb, Ub))), Db(bb, ab, Ab(), await Mb)
    }
    let Rb = null,
      kb = null;
    async function yb() {
      if ((null === Rb || Rb.hasExpired()) && (kb ??= (0, Yb.fetchAnonymousUserContext)().then((bb => {
          Rb = bb
        })).finally((() => {
          kb = null
        })), await kb), null === Rb) throw new Error("no guest context to post as");
      return Rb.getMetricsCookies()
    }
    async function Zb() {
      var bb;
      await (null === (bb = Rb) || void 0 === bb ? void 0 : bb.invalidateTrafficCode())
    }
    async function Db(bb, ab, Ub) {
      let Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Lb();
      const Bb = null !== Tb && void 0 !== Tb ? Tb : await (0, Yb.fetchAnonymousUserContext)();
      if (Rb = Bb, Bb.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const eb = await Mb.b.matchmakePlayer(Bb, ab, bb, (0, Eb.e)()),
        Pb = performance.now();
      if (!("gameServerHost" in eb)) throw new Error(`matchmaking refused: ${eb.failReason}`);
      const Xb = Ab.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(eb.gameServerHost);
      if (Xb.isError()) throw new Error(`no socket URL for ${eb.gameServerHost}: ${Xb.asError().message}`);
      const jb = {
        endpoint: Xb.getValue(),
        gameNameWithVariation: eb.gameNameWithVariation,
        lobbyName: eb.lobbyName
      };
      return {
        target: {
          ...await (0, vb.e)(Bb, jb, Ub, !1),
          postCookies: yb
        },
        matchedAt: Pb,
        freshMs: vb.b
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);