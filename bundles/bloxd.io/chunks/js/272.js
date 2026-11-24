export const id = 272;
export const ids = [271, 272];
export const modules = {
  41075: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      gamePackSource: () => XS
    });
    var tS = gS(5133),
      bS = gS(1588);

    function XS(SS) {
      return {
        packKey: async HS => (await bS.b.getGame(SS, HS, !0)).customTexturePackKey,
        fetchPack: tS.e
      }
    }
  },
  51007: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      fetchGuestContext: () => kS,
      guestJoinTarget: () => PS,
      guestJoinWithPack: () => KS,
      guestPackForGame: () => aS,
      invalidateGuestTrafficCode: () => nS
    });
    var tS = gS(1286),
      bS = gS(1588),
      XS = gS(104),
      xS = gS(36471),
      NS = gS(1216),
      qS = gS(40782),
      uS = gS(41075),
      IS = gS(40743);

    function fS() {
      if (XS.featureFlags.useTurnstile) throw new qS.TurnstilePageError
    }

    function kS() {
      return (0, NS.fetchAnonymousUserContext)().catch((SS => (console.warn("the guest context didn't load", SS), null)))
    }
    async function aS(SS, HS, gS, tS) {
      try {
        const bS = await gS;
        if (null === bS) return void console.warn(`the texture pack step for ${SS} has no guest context: the pack in play stays`);
        await HS.packForGame(SS, (0, uS.gamePackSource)(bS), tS)
      } catch (bS) {
        console.warn(`the texture pack step for ${SS} failed: the pack in play stays`, bS)
      }
    }
    async function KS(SS, HS, gS, tS) {
      fS();
      const bS = kS();
      return await gS(((HS, gS) => aS(SS, HS, bS, gS))), PS(SS, HS, tS(), await bS)
    }
    let jS = null,
      GS = null;
    async function CS() {
      if ((null === jS || jS.hasExpired()) && (GS ??= (0, NS.fetchAnonymousUserContext)().then((SS => {
          jS = SS
        })).finally((() => {
          GS = null
        })), await GS), null === jS) throw new Error("no guest context to post as");
      return jS.getMetricsCookies()
    }
    async function nS() {
      var SS;
      await (null === (SS = jS) || void 0 === SS ? void 0 : SS.invalidateTrafficCode())
    }
    async function PS(SS, HS, gS) {
      let XS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      fS();
      const qS = null !== XS && void 0 !== XS ? XS : await (0, NS.fetchAnonymousUserContext)();
      if (jS = qS, qS.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const uS = await bS.b.matchmakePlayer(qS, HS, SS, (0, xS.b)()),
        kS = performance.now();
      if (!("gameServerHost" in uS)) throw new Error(`matchmaking refused: ${uS.failReason}`);
      const aS = tS.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(uS.gameServerHost);
      if (aS.isError()) throw new Error(`no socket URL for ${uS.gameServerHost}: ${aS.asError().message}`);
      const KS = {
        endpoint: aS.getValue(),
        gameNameWithVariation: uS.gameNameWithVariation,
        lobbyName: uS.lobbyName
      };
      return {
        target: {
          ...await (0, IS.h)(qS, KS, gS, !1),
          postCookies: CS
        },
        matchedAt: kS,
        freshMs: IS.d
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);