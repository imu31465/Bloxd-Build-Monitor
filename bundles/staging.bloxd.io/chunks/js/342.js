export const id = 342;
export const ids = [342, 343];
export const modules = {
  42118: (TT, oT, IT) => {
    IT.d(oT, {
      gamePackSource: () => kT
    });
    var iT = IT(4465),
      zT = IT(1451);

    function kT(TT) {
      return {
        packKey: async oT => (await zT.e.getGame(TT, oT, !0)).customTexturePackKey,
        fetchPack: iT.c
      }
    }
  },
  42116: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      fetchGuestContext: () => LT,
      guestJoinTarget: () => gT,
      guestJoinWithPack: () => cT,
      guestPackForGame: () => xT,
      invalidateGuestTrafficCode: () => AT
    });
    var iT = IT(1183),
      zT = IT(1451),
      kT = IT(90),
      WT = IT(35465),
      XT = IT(1117),
      BT = IT(39745),
      FT = IT(42118),
      ST = IT(39682);

    function DT() {
      if (kT.featureFlags.useTurnstile) throw new BT.TurnstilePageError
    }

    function LT() {
      return (0, XT.fetchAnonymousUserContext)().catch((TT => (console.warn("the guest context didn't load", TT), null)))
    }
    async function xT(TT, oT, IT, iT) {
      try {
        const zT = await IT;
        if (null === zT) return void console.warn(`the texture pack step for ${TT} has no guest context: the pack in play stays`);
        await oT.packForGame(TT, (0, FT.gamePackSource)(zT), iT)
      } catch (zT) {
        console.warn(`the texture pack step for ${TT} failed: the pack in play stays`, zT)
      }
    }
    async function cT(TT, oT, IT, iT) {
      DT();
      const zT = LT();
      return await IT(((oT, IT) => xT(TT, oT, zT, IT))), gT(TT, oT, iT(), await zT)
    }
    let KT = null,
      MT = null;
    async function rT() {
      if ((null === KT || KT.hasExpired()) && (MT ??= (0, XT.fetchAnonymousUserContext)().then((TT => {
          KT = TT
        })).finally((() => {
          MT = null
        })), await MT), null === KT) throw new Error("no guest context to post as");
      return KT.getMetricsCookies()
    }
    async function AT() {
      var TT;
      await (null === (TT = KT) || void 0 === TT ? void 0 : TT.invalidateTrafficCode())
    }
    async function gT(TT, oT, IT) {
      let kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      DT();
      const BT = null !== kT && void 0 !== kT ? kT : await (0, XT.fetchAnonymousUserContext)();
      if (KT = BT, BT.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const FT = await zT.e.matchmakePlayer(BT, oT, TT, (0, WT.e)()),
        LT = performance.now();
      if (!("gameServerHost" in FT)) throw new Error(`matchmaking refused: ${FT.failReason}`);
      const xT = iT.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(FT.gameServerHost);
      if (xT.isError()) throw new Error(`no socket URL for ${FT.gameServerHost}: ${xT.asError().message}`);
      const cT = {
        endpoint: xT.getValue(),
        gameNameWithVariation: FT.gameNameWithVariation,
        lobbyName: FT.lobbyName
      };
      return {
        target: {
          ...await (0, ST.f)(BT, cT, IT, !1),
          postCookies: rT
        },
        matchedAt: LT,
        freshMs: ST.d
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);