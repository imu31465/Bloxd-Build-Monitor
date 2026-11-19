export const id = 342;
export const ids = [342, 343];
export const modules = {
  42364: (YY, rY, DY) => {
    DY.d(rY, {
      gamePackSource: () => IY
    });
    var FY = DY(4569),
      AY = DY(1471);

    function IY(YY) {
      return {
        packKey: async rY => (await AY.e.getGame(YY, rY, !0)).customTexturePackKey,
        fetchPack: FY.d
      }
    }
  },
  42356: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      fetchGuestContext: () => sY,
      guestJoinTarget: () => mY,
      guestJoinWithPack: () => yY,
      guestPackForGame: () => iY,
      invalidateGuestTrafficCode: () => EY
    });
    var FY = DY(1222),
      AY = DY(1471),
      IY = DY(99),
      RY = DY(35894),
      OY = DY(1159),
      gY = DY(40046),
      aY = DY(42364),
      vY = DY(39990);

    function uY() {
      if (IY.featureFlags.useTurnstile) throw new gY.TurnstilePageError
    }

    function sY() {
      return (0, OY.fetchAnonymousUserContext)().catch((YY => (console.warn("the guest context didn't load", YY), null)))
    }
    async function iY(YY, rY, DY, FY) {
      try {
        const AY = await DY;
        if (null === AY) return void console.warn(`the texture pack step for ${YY} has no guest context: the pack in play stays`);
        await rY.packForGame(YY, (0, aY.gamePackSource)(AY), FY)
      } catch (AY) {
        console.warn(`the texture pack step for ${YY} failed: the pack in play stays`, AY)
      }
    }
    async function yY(YY, rY, DY, FY) {
      uY();
      const AY = sY();
      return await DY(((rY, DY) => iY(YY, rY, AY, DY))), mY(YY, rY, FY(), await AY)
    }
    let QY = null,
      oY = null;
    async function WY() {
      if ((null === QY || QY.hasExpired()) && (oY ??= (0, OY.fetchAnonymousUserContext)().then((YY => {
          QY = YY
        })).finally((() => {
          oY = null
        })), await oY), null === QY) throw new Error("no guest context to post as");
      return QY.getMetricsCookies()
    }
    async function EY() {
      var YY;
      await (null === (YY = QY) || void 0 === YY ? void 0 : YY.invalidateTrafficCode())
    }
    async function mY(YY, rY, DY) {
      let IY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      uY();
      const gY = null !== IY && void 0 !== IY ? IY : await (0, OY.fetchAnonymousUserContext)();
      if (QY = gY, gY.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const aY = await AY.e.matchmakePlayer(gY, rY, YY, (0, RY.b)()),
        sY = performance.now();
      if (!("gameServerHost" in aY)) throw new Error(`matchmaking refused: ${aY.failReason}`);
      const iY = FY.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(aY.gameServerHost);
      if (iY.isError()) throw new Error(`no socket URL for ${aY.gameServerHost}: ${iY.asError().message}`);
      const yY = {
        endpoint: iY.getValue(),
        gameNameWithVariation: aY.gameNameWithVariation,
        lobbyName: aY.lobbyName
      };
      return {
        target: {
          ...await (0, vY.d)(gY, yY, DY, !1),
          postCookies: WY
        },
        matchedAt: sY,
        freshMs: vY.c
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);