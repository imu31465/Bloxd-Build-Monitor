export const id = 281;
export const ids = [280, 281];
export const modules = {
  41265: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      gamePackSource: () => TQ
    });
    var wQ = XQ(5340),
      qQ = XQ(1548);

    function TQ(QQ) {
      return {
        packKey: async WQ => (await qQ.e.getGame(QQ, WQ, !0)).customTexturePackKey,
        fetchPack: wQ.e
      }
    }
  },
  51222: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      fetchGuestContext: () => rQ,
      guestJoinTarget: () => pQ,
      guestJoinWithPack: () => jQ,
      guestPackForGame: () => IQ,
      invalidateGuestTrafficCode: () => DQ
    });
    var wQ = XQ(1238),
      qQ = XQ(1548),
      TQ = XQ(105),
      zQ = XQ(36766),
      sQ = XQ(1165),
      FQ = XQ(40963),
      PQ = XQ(41265),
      gQ = XQ(40926);

    function JQ() {
      if (TQ.featureFlags.useTurnstile) throw new FQ.TurnstilePageError
    }

    function rQ() {
      return (0, sQ.fetchAnonymousUserContext)(!0).catch((QQ => (console.warn("the guest context didn't load", QQ), null)))
    }
    async function IQ(QQ, WQ, XQ, wQ) {
      try {
        const qQ = await XQ;
        if (null === qQ) return void console.warn(`the texture pack step for ${QQ} has no guest context: the pack in play stays`);
        await WQ.packForGame(QQ, (0, PQ.gamePackSource)(qQ), wQ)
      } catch (qQ) {
        console.warn(`the texture pack step for ${QQ} failed: the pack in play stays`, qQ)
      }
    }
    async function jQ(QQ, WQ, XQ, wQ) {
      JQ();
      const qQ = rQ();
      return await XQ(((WQ, XQ) => IQ(QQ, WQ, qQ, XQ))), pQ(QQ, WQ, wQ(), await qQ)
    }
    let BQ = null,
      yQ = null;
    async function VQ() {
      if ((null === BQ || BQ.hasExpired()) && (yQ ??= (0, sQ.fetchAnonymousUserContext)(!0).then((QQ => {
          BQ = QQ
        })).finally((() => {
          yQ = null
        })), await yQ), null === BQ) throw new Error("no guest context to post as");
      return BQ.getMetricsCookies()
    }
    async function DQ() {
      var QQ;
      await (null === (QQ = BQ) || void 0 === QQ ? void 0 : QQ.invalidateTrafficCode())
    }
    async function pQ(QQ, WQ, XQ) {
      let TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      JQ();
      const FQ = null !== TQ && void 0 !== TQ ? TQ : await (0, sQ.fetchAnonymousUserContext)(!0);
      if (BQ = FQ, FQ.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const PQ = await qQ.e.matchmakePlayer(FQ, WQ, QQ, (0, zQ.c)()),
        rQ = performance.now();
      if (!("gameServerHost" in PQ)) throw new Error(`matchmaking refused: ${PQ.failReason}`);
      const IQ = wQ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(PQ.gameServerHost);
      if (IQ.isError()) throw new Error(`no socket URL for ${PQ.gameServerHost}: ${IQ.asError().message}`);
      const jQ = {
        endpoint: IQ.getValue(),
        gameNameWithVariation: PQ.gameNameWithVariation,
        lobbyName: PQ.lobbyName
      };
      return {
        target: {
          ...await (0, gQ.d)(FQ, jQ, XQ, !1),
          postCookies: VQ
        },
        matchedAt: rQ,
        freshMs: gQ.b
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);