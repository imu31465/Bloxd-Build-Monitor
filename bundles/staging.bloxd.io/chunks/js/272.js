export const id = 272;
export const ids = [271, 272];
export const modules = {
  40972: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      gamePackSource: () => KD
    });
    var pD = wD(5011),
      sD = wD(1495);

    function KD(DD) {
      return {
        packKey: async zD => (await sD.d.getGame(DD, zD, !0)).customTexturePackKey,
        fetchPack: pD.c
      }
    }
  },
  50777: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      fetchGuestContext: () => UD,
      guestJoinTarget: () => MD,
      guestJoinWithPack: () => ID,
      guestPackForGame: () => fD,
      invalidateGuestTrafficCode: () => nD
    });
    var pD = wD(1211),
      sD = wD(1495),
      KD = wD(103),
      rD = wD(36463),
      LD = wD(1130),
      cD = wD(40666),
      gD = wD(40972),
      RD = wD(40622);

    function AD() {
      if (KD.featureFlags.useTurnstile) throw new cD.TurnstilePageError
    }

    function UD() {
      return (0, LD.fetchAnonymousUserContext)().catch((DD => (console.warn("the guest context didn't load", DD), null)))
    }
    async function fD(DD, zD, wD, pD) {
      try {
        const sD = await wD;
        if (null === sD) return void console.warn(`the texture pack step for ${DD} has no guest context: the pack in play stays`);
        await zD.packForGame(DD, (0, gD.gamePackSource)(sD), pD)
      } catch (sD) {
        console.warn(`the texture pack step for ${DD} failed: the pack in play stays`, sD)
      }
    }
    async function ID(DD, zD, wD, pD) {
      AD();
      const sD = UD();
      return await wD(((zD, wD) => fD(DD, zD, sD, wD))), MD(DD, zD, pD(), await sD)
    }
    let BD = null,
      GD = null;
    async function hD() {
      if ((null === BD || BD.hasExpired()) && (GD ??= (0, LD.fetchAnonymousUserContext)().then((DD => {
          BD = DD
        })).finally((() => {
          GD = null
        })), await GD), null === BD) throw new Error("no guest context to post as");
      return BD.getMetricsCookies()
    }
    async function nD() {
      var DD;
      await (null === (DD = BD) || void 0 === DD ? void 0 : DD.invalidateTrafficCode())
    }
    async function MD(DD, zD, wD) {
      let KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      AD();
      const cD = null !== KD && void 0 !== KD ? KD : await (0, LD.fetchAnonymousUserContext)();
      if (BD = cD, cD.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const gD = await sD.d.matchmakePlayer(cD, zD, DD, (0, rD.b)()),
        UD = performance.now();
      if (!("gameServerHost" in gD)) throw new Error(`matchmaking refused: ${gD.failReason}`);
      const fD = pD.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(gD.gameServerHost);
      if (fD.isError()) throw new Error(`no socket URL for ${gD.gameServerHost}: ${fD.asError().message}`);
      const ID = {
        endpoint: fD.getValue(),
        gameNameWithVariation: gD.gameNameWithVariation,
        lobbyName: gD.lobbyName
      };
      return {
        target: {
          ...await (0, RD.e)(cD, ID, wD, !1),
          postCookies: hD
        },
        matchedAt: UD,
        freshMs: RD.d
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);