export const id = 343;
export const ids = [343, 344];
export const modules = {
  42714: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      gamePackSource: () => oQ
    });
    var LQ = wQ(4832),
      qQ = wQ(1489);

    function oQ(QQ) {
      return {
        packKey: async FQ => (await qQ.b.getGame(QQ, FQ, !0)).customTexturePackKey,
        fetchPack: LQ.d
      }
    }
  },
  42707: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      fetchGuestContext: () => bQ,
      guestJoinTarget: () => GQ,
      guestJoinWithPack: () => xQ,
      guestPackForGame: () => YQ,
      invalidateGuestTrafficCode: () => MQ
    });
    var LQ = wQ(1213),
      qQ = wQ(1489),
      oQ = wQ(96),
      DQ = wQ(36102),
      kQ = wQ(1147),
      vQ = wQ(40369),
      mQ = wQ(42714),
      uQ = wQ(40314);

    function HQ() {
      if (oQ.featureFlags.useTurnstile) throw new vQ.TurnstilePageError
    }

    function bQ() {
      return (0, kQ.fetchAnonymousUserContext)().catch((QQ => (console.warn("the guest context didn't load", QQ), null)))
    }
    async function YQ(QQ, FQ, wQ, LQ) {
      try {
        const qQ = await wQ;
        if (null === qQ) return void console.warn(`the texture pack step for ${QQ} has no guest context: the pack in play stays`);
        await FQ.packForGame(QQ, (0, mQ.gamePackSource)(qQ), LQ)
      } catch (qQ) {
        console.warn(`the texture pack step for ${QQ} failed: the pack in play stays`, qQ)
      }
    }
    async function xQ(QQ, FQ, wQ, LQ) {
      HQ();
      const qQ = bQ();
      return await wQ(((FQ, wQ) => YQ(QQ, FQ, qQ, wQ))), GQ(QQ, FQ, LQ(), await qQ)
    }
    let AQ = null,
      tQ = null;
    async function eQ() {
      if ((null === AQ || AQ.hasExpired()) && (tQ ??= (0, kQ.fetchAnonymousUserContext)().then((QQ => {
          AQ = QQ
        })).finally((() => {
          tQ = null
        })), await tQ), null === AQ) throw new Error("no guest context to post as");
      return AQ.getMetricsCookies()
    }
    async function MQ() {
      var QQ;
      await (null === (QQ = AQ) || void 0 === QQ ? void 0 : QQ.invalidateTrafficCode())
    }
    async function GQ(QQ, FQ, wQ) {
      let oQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      HQ();
      const vQ = null !== oQ && void 0 !== oQ ? oQ : await (0, kQ.fetchAnonymousUserContext)();
      if (AQ = vQ, vQ.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const mQ = await qQ.b.matchmakePlayer(vQ, FQ, QQ, (0, DQ.d)()),
        bQ = performance.now();
      if (!("gameServerHost" in mQ)) throw new Error(`matchmaking refused: ${mQ.failReason}`);
      const YQ = LQ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(mQ.gameServerHost);
      if (YQ.isError()) throw new Error(`no socket URL for ${mQ.gameServerHost}: ${YQ.asError().message}`);
      const xQ = {
        endpoint: YQ.getValue(),
        gameNameWithVariation: mQ.gameNameWithVariation,
        lobbyName: mQ.lobbyName
      };
      return {
        target: {
          ...await (0, uQ.i)(vQ, xQ, wQ, !1),
          postCookies: eQ
        },
        matchedAt: bQ,
        freshMs: uQ.e
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);