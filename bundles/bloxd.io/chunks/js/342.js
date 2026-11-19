export const id = 342;
export const ids = [342, 343];
export const modules = {
  42472: (DD, CD, cD) => {
    cD.d(CD, {
      gamePackSource: () => iD
    });
    var ID = cD(4762),
      pD = cD(1497);

    function iD(DD) {
      return {
        packKey: async CD => (await pD.c.getGame(DD, CD, !0)).customTexturePackKey,
        fetchPack: ID.c
      }
    }
  },
  42463: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      fetchGuestContext: () => yD,
      guestJoinTarget: () => gD,
      guestJoinWithPack: () => tD,
      guestPackForGame: () => MD,
      invalidateGuestTrafficCode: () => ND
    });
    var ID = cD(1199),
      pD = cD(1497),
      iD = cD(90),
      fD = cD(35879),
      bD = cD(1127),
      QD = cD(40032),
      wD = cD(42472),
      SD = cD(39968);

    function BD() {
      if (iD.featureFlags.useTurnstile) throw new QD.TurnstilePageError
    }

    function yD() {
      return (0, bD.fetchAnonymousUserContext)().catch((DD => (console.warn("the guest context didn't load", DD), null)))
    }
    async function MD(DD, CD, cD, ID) {
      try {
        const pD = await cD;
        if (null === pD) return void console.warn(`the texture pack step for ${DD} has no guest context: the pack in play stays`);
        await CD.packForGame(DD, (0, wD.gamePackSource)(pD), ID)
      } catch (pD) {
        console.warn(`the texture pack step for ${DD} failed: the pack in play stays`, pD)
      }
    }
    async function tD(DD, CD, cD, ID) {
      BD();
      const pD = yD();
      return await cD(((CD, cD) => MD(DD, CD, pD, cD))), gD(DD, CD, ID(), await pD)
    }
    let ZD = null,
      oD = null;
    async function vD() {
      if ((null === ZD || ZD.hasExpired()) && (oD ??= (0, bD.fetchAnonymousUserContext)().then((DD => {
          ZD = DD
        })).finally((() => {
          oD = null
        })), await oD), null === ZD) throw new Error("no guest context to post as");
      return ZD.getMetricsCookies()
    }
    async function ND() {
      var DD;
      await (null === (DD = ZD) || void 0 === DD ? void 0 : DD.invalidateTrafficCode())
    }
    async function gD(DD, CD, cD) {
      let iD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      BD();
      const QD = null !== iD && void 0 !== iD ? iD : await (0, bD.fetchAnonymousUserContext)();
      if (ZD = QD, QD.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const wD = await pD.c.matchmakePlayer(QD, CD, DD, (0, fD.d)()),
        yD = performance.now();
      if (!("gameServerHost" in wD)) throw new Error(`matchmaking refused: ${wD.failReason}`);
      const MD = ID.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(wD.gameServerHost);
      if (MD.isError()) throw new Error(`no socket URL for ${wD.gameServerHost}: ${MD.asError().message}`);
      const tD = {
        endpoint: MD.getValue(),
        gameNameWithVariation: wD.gameNameWithVariation,
        lobbyName: wD.lobbyName
      };
      return {
        target: {
          ...await (0, SD.h)(QD, tD, cD, !1),
          postCookies: vD
        },
        matchedAt: yD,
        freshMs: SD.d
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);