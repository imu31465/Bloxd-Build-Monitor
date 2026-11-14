export const id = 322;
export const ids = [322, 323];
export const modules = {
  41176: (FF, WF, SF) => {
    SF.d(WF, {
      gamePackSource: () => uF
    });
    var CF = SF(3987),
      AF = SF(1336);

    function uF(FF) {
      return {
        packKey: async WF => (await AF.b.getGame(FF, WF, !0)).customTexturePackKey,
        fetchPack: CF.e
      }
    }
  },
  41174: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      fetchGuestContext: () => eF,
      guestJoinTarget: () => aW,
      guestJoinWithPack: () => QF,
      guestPackForGame: () => EF,
      invalidateGuestTrafficCode: () => TF
    });
    var CF = SF(1056),
      AF = SF(1336),
      uF = SF(89),
      hF = SF(34989),
      bW = SF(1001),
      dF = SF(38806),
      PF = SF(41176),
      RF = SF(38741);

    function iW() {
      if (uF.featureFlags.useTurnstile) throw new dF.TurnstilePageError
    }

    function eF() {
      return (0, bW.fetchAnonymousUserContext)().catch((FF => (console.warn("the guest context didn't load", FF), null)))
    }
    async function EF(FF, WF, SF, CF) {
      try {
        const AF = await SF;
        if (null === AF) return void console.warn(`the texture pack step for ${FF} has no guest context: the pack in play stays`);
        await WF.packForGame(FF, (0, PF.gamePackSource)(AF), CF)
      } catch (AF) {
        console.warn(`the texture pack step for ${FF} failed: the pack in play stays`, AF)
      }
    }
    async function QF(FF, WF, SF, CF) {
      iW();
      const AF = eF();
      return await SF(((WF, SF) => EF(FF, WF, AF, SF))), aW(FF, WF, CF(), await AF)
    }
    let rW = null,
      gW = null;
    async function tW() {
      if ((null === rW || rW.hasExpired()) && (gW ??= (0, bW.fetchAnonymousUserContext)().then((FF => {
          rW = FF
        })).finally((() => {
          gW = null
        })), await gW), null === rW) throw new Error("no guest context to post as");
      return rW.getMetricsCookies()
    }
    async function TF() {
      var FF;
      await (null === (FF = rW) || void 0 === FF ? void 0 : FF.invalidateTrafficCode())
    }
    async function aW(FF, WF, SF) {
      let uF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      iW();
      const dF = null !== uF && void 0 !== uF ? uF : await (0, bW.fetchAnonymousUserContext)();
      if (rW = dF, dF.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const PF = await AF.b.matchmakePlayer(dF, WF, FF, (0, hF.e)()),
        eF = performance.now();
      if (!("gameServerHost" in PF)) throw new Error(`matchmaking refused: ${PF.failReason}`);
      const EF = CF.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(PF.gameServerHost);
      if (EF.isError()) throw new Error(`no socket URL for ${PF.gameServerHost}: ${EF.asError().message}`);
      const QF = {
        endpoint: EF.getValue(),
        gameNameWithVariation: PF.gameNameWithVariation,
        lobbyName: PF.lobbyName
      };
      return {
        target: {
          ...await (0, RF.h)(dF, QF, SF),
          postCookies: tW
        },
        matchedAt: eF,
        freshMs: RF.d
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);