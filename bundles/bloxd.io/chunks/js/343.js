export const id = 343;
export const ids = [343, 344];
export const modules = {
  42804: (TT, kT, cT) => {
    cT.d(kT, {
      gamePackSource: () => KT
    });
    var lT = cT(4939),
      MT = cT(1518);

    function KT(TT) {
      return {
        packKey: async kT => (await MT.d.getGame(TT, kT, !0)).customTexturePackKey,
        fetchPack: lT.b
      }
    }
  },
  42796: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      fetchGuestContext: () => CT,
      guestJoinTarget: () => ST,
      guestJoinWithPack: () => vT,
      guestPackForGame: () => jT,
      invalidateGuestTrafficCode: () => QT
    });
    var lT = cT(1202),
      MT = cT(1518),
      KT = cT(118),
      OT = cT(36278),
      yT = cT(1136),
      fT = cT(40557),
      xT = cT(42804),
      IT = cT(40515);

    function AT() {
      if (KT.featureFlags.useTurnstile) throw new fT.TurnstilePageError
    }

    function CT() {
      return (0, yT.fetchAnonymousUserContext)().catch((TT => (console.warn("the guest context didn't load", TT), null)))
    }
    async function jT(TT, kT, cT, lT) {
      try {
        const MT = await cT;
        if (null === MT) return void console.warn(`the texture pack step for ${TT} has no guest context: the pack in play stays`);
        await kT.packForGame(TT, (0, xT.gamePackSource)(MT), lT)
      } catch (MT) {
        console.warn(`the texture pack step for ${TT} failed: the pack in play stays`, MT)
      }
    }
    async function vT(TT, kT, cT, lT) {
      AT();
      const MT = CT();
      return await cT(((kT, cT) => jT(TT, kT, MT, cT))), ST(TT, kT, lT(), await MT)
    }
    let tT = null,
      hT = null;
    async function NT() {
      if ((null === tT || tT.hasExpired()) && (hT ??= (0, yT.fetchAnonymousUserContext)().then((TT => {
          tT = TT
        })).finally((() => {
          hT = null
        })), await hT), null === tT) throw new Error("no guest context to post as");
      return tT.getMetricsCookies()
    }
    async function QT() {
      var TT;
      await (null === (TT = tT) || void 0 === TT ? void 0 : TT.invalidateTrafficCode())
    }
    async function ST(TT, kT, cT) {
      let KT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      AT();
      const fT = null !== KT && void 0 !== KT ? KT : await (0, yT.fetchAnonymousUserContext)();
      if (tT = fT, fT.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const xT = await MT.d.matchmakePlayer(fT, kT, TT, (0, OT.e)()),
        CT = performance.now();
      if (!("gameServerHost" in xT)) throw new Error(`matchmaking refused: ${xT.failReason}`);
      const jT = lT.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(xT.gameServerHost);
      if (jT.isError()) throw new Error(`no socket URL for ${xT.gameServerHost}: ${jT.asError().message}`);
      const vT = {
        endpoint: jT.getValue(),
        gameNameWithVariation: xT.gameNameWithVariation,
        lobbyName: xT.lobbyName
      };
      return {
        target: {
          ...await (0, IT.d)(fT, vT, cT, !1),
          postCookies: NT
        },
        matchedAt: CT,
        freshMs: IT.c
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);