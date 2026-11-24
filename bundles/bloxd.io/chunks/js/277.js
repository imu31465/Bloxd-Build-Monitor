export const id = 277;
export const ids = [276, 277];
export const modules = {
  41194: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      gamePackSource: () => MT
    });
    var WT = mT(5078),
      zT = mT(1613);

    function MT(TT) {
      return {
        packKey: async UT => (await zT.b.getGame(TT, UT, !0)).customTexturePackKey,
        fetchPack: WT.c
      }
    }
  },
  51121: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      fetchGuestContext: () => LT,
      guestJoinTarget: () => qT,
      guestJoinWithPack: () => BT,
      guestPackForGame: () => pT,
      invalidateGuestTrafficCode: () => fT
    });
    var WT = mT(1302),
      zT = mT(1613),
      MT = mT(102),
      gT = mT(36534),
      nT = mT(1231),
      HT = mT(40887),
      kT = mT(41194),
      jT = mT(40848);

    function lT() {
      if (MT.featureFlags.useTurnstile) throw new HT.TurnstilePageError
    }

    function LT() {
      return (0, nT.fetchAnonymousUserContext)().catch((TT => (console.warn("the guest context didn't load", TT), null)))
    }
    async function pT(TT, UT, mT, WT) {
      try {
        const zT = await mT;
        if (null === zT) return void console.warn(`the texture pack step for ${TT} has no guest context: the pack in play stays`);
        await UT.packForGame(TT, (0, kT.gamePackSource)(zT), WT)
      } catch (zT) {
        console.warn(`the texture pack step for ${TT} failed: the pack in play stays`, zT)
      }
    }
    async function BT(TT, UT, mT, WT) {
      lT();
      const zT = LT();
      return await mT(((UT, mT) => pT(TT, UT, zT, mT))), qT(TT, UT, WT(), await zT)
    }
    let ZT = null,
      cT = null;
    async function vT() {
      if ((null === ZT || ZT.hasExpired()) && (cT ??= (0, nT.fetchAnonymousUserContext)().then((TT => {
          ZT = TT
        })).finally((() => {
          cT = null
        })), await cT), null === ZT) throw new Error("no guest context to post as");
      return ZT.getMetricsCookies()
    }
    async function fT() {
      var TT;
      await (null === (TT = ZT) || void 0 === TT ? void 0 : TT.invalidateTrafficCode())
    }
    async function qT(TT, UT, mT) {
      let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      lT();
      const HT = null !== MT && void 0 !== MT ? MT : await (0, nT.fetchAnonymousUserContext)();
      if (ZT = HT, HT.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const kT = await zT.b.matchmakePlayer(HT, UT, TT, (0, gT.b)()),
        LT = performance.now();
      if (!("gameServerHost" in kT)) throw new Error(`matchmaking refused: ${kT.failReason}`);
      const pT = WT.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(kT.gameServerHost);
      if (pT.isError()) throw new Error(`no socket URL for ${kT.gameServerHost}: ${pT.asError().message}`);
      const BT = {
        endpoint: pT.getValue(),
        gameNameWithVariation: kT.gameNameWithVariation,
        lobbyName: kT.lobbyName
      };
      return {
        target: {
          ...await (0, jT.c)(HT, BT, mT, !1),
          postCookies: vT
        },
        matchedAt: LT,
        freshMs: jT.b
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);