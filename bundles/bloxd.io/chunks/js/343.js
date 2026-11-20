export const id = 343;
export const ids = [343, 344];
export const modules = {
  43063: (qq, Eq, gq) => {
    gq.d(Eq, {
      gamePackSource: () => Oq
    });
    var Yq = gq(4821),
      lq = gq(1477);

    function Oq(qq) {
      return {
        packKey: async Eq => (await lq.e.getGame(qq, Eq, !0)).customTexturePackKey,
        fetchPack: Yq.e
      }
    }
  },
  43055: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      fetchGuestContext: () => Wq,
      guestJoinTarget: () => oq,
      guestJoinWithPack: () => aq,
      guestPackForGame: () => Nq,
      invalidateGuestTrafficCode: () => Hq
    });
    var Yq = gq(1195),
      lq = gq(1477),
      Oq = gq(96),
      mq = gq(36515),
      xq = gq(1109),
      Aq = gq(40687),
      cq = gq(43063),
      uq = gq(40628);

    function Bq() {
      if (Oq.featureFlags.useTurnstile) throw new Aq.TurnstilePageError
    }

    function Wq() {
      return (0, xq.fetchAnonymousUserContext)().catch((qq => (console.warn("the guest context didn't load", qq), null)))
    }
    async function Nq(qq, Eq, gq, Yq) {
      try {
        const lq = await gq;
        if (null === lq) return void console.warn(`the texture pack step for ${qq} has no guest context: the pack in play stays`);
        await Eq.packForGame(qq, (0, cq.gamePackSource)(lq), Yq)
      } catch (lq) {
        console.warn(`the texture pack step for ${qq} failed: the pack in play stays`, lq)
      }
    }
    async function aq(qq, Eq, gq, Yq) {
      Bq();
      const lq = Wq();
      return await gq(((Eq, gq) => Nq(qq, Eq, lq, gq))), oq(qq, Eq, Yq(), await lq)
    }
    let Vq = null,
      dq = null;
    async function jq() {
      if ((null === Vq || Vq.hasExpired()) && (dq ??= (0, xq.fetchAnonymousUserContext)().then((qq => {
          Vq = qq
        })).finally((() => {
          dq = null
        })), await dq), null === Vq) throw new Error("no guest context to post as");
      return Vq.getMetricsCookies()
    }
    async function Hq() {
      var qq;
      await (null === (qq = Vq) || void 0 === qq ? void 0 : qq.invalidateTrafficCode())
    }
    async function oq(qq, Eq, gq) {
      let Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Bq();
      const Aq = null !== Oq && void 0 !== Oq ? Oq : await (0, xq.fetchAnonymousUserContext)();
      if (Vq = Aq, Aq.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const cq = await lq.e.matchmakePlayer(Aq, Eq, qq, (0, mq.b)()),
        Wq = performance.now();
      if (!("gameServerHost" in cq)) throw new Error(`matchmaking refused: ${cq.failReason}`);
      const Nq = Yq.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(cq.gameServerHost);
      if (Nq.isError()) throw new Error(`no socket URL for ${cq.gameServerHost}: ${Nq.asError().message}`);
      const aq = {
        endpoint: Nq.getValue(),
        gameNameWithVariation: cq.gameNameWithVariation,
        lobbyName: cq.lobbyName
      };
      return {
        target: {
          ...await (0, uq.h)(Aq, aq, gq, !1),
          postCookies: jq
        },
        matchedAt: Wq,
        freshMs: uq.d
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);