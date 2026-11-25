export const id = 300;
export const ids = [299, 300];
export const modules = {
  42165: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      gamePackSource: () => jM
    });
    var OM = iM(5388),
      SM = iM(1573);

    function jM(MM) {
      return {
        packKey: async rM => (await SM.c.getGame(MM, rM, !0)).customTexturePackKey,
        fetchPack: OM.d
      }
    }
  },
  53755: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      fetchGuestContext: () => mM,
      guestJoinTarget: () => EM,
      guestJoinWithPack: () => hM,
      guestPackForGame: () => HM,
      invalidateGuestTrafficCode: () => lM
    });
    var OM = iM(1202),
      SM = iM(1573),
      jM = iM(83),
      aM = iM(37414),
      PM = iM(1144),
      nM = iM(41833),
      QM = iM(42165),
      zM = iM(41787);

    function LM() {
      if (jM.featureFlags.useTurnstile) throw new nM.TurnstilePageError
    }

    function mM() {
      return (0, PM.fetchAnonymousUserContext)(!0).catch((MM => (console.warn("the guest context didn't load", MM), null)))
    }
    async function HM(MM, rM, iM, OM) {
      try {
        const SM = await iM;
        if (null === SM) return void console.warn(`the texture pack step for ${MM} has no guest context: the pack in play stays`);
        await rM.packForGame(MM, (0, QM.gamePackSource)(SM), OM)
      } catch (SM) {
        console.warn(`the texture pack step for ${MM} failed: the pack in play stays`, SM)
      }
    }
    async function hM(MM, rM, iM, OM) {
      LM();
      const SM = mM();
      return await iM(((rM, iM) => HM(MM, rM, SM, iM))), EM(MM, rM, OM(), await SM)
    }
    let JM = null,
      dM = null;
    async function yM() {
      if ((null === JM || JM.hasExpired()) && (dM ??= (0, PM.fetchAnonymousUserContext)(!0).then((MM => {
          JM = MM
        })).finally((() => {
          dM = null
        })), await dM), null === JM) throw new Error("no guest context to post as");
      return JM.getMetricsCookies()
    }
    async function lM() {
      var MM;
      await (null === (MM = JM) || void 0 === MM ? void 0 : MM.invalidateTrafficCode())
    }
    async function EM(MM, rM, iM) {
      let jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      LM();
      const nM = null !== jM && void 0 !== jM ? jM : await (0, PM.fetchAnonymousUserContext)(!0);
      if (JM = nM, nM.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const QM = await SM.c.matchmakePlayer(nM, rM, MM, (0, aM.c)()),
        mM = performance.now();
      if (!("gameServerHost" in QM)) throw new Error(`matchmaking refused: ${QM.failReason}`);
      const HM = OM.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(QM.gameServerHost);
      if (HM.isError()) throw new Error(`no socket URL for ${QM.gameServerHost}: ${HM.asError().message}`);
      const hM = {
        endpoint: HM.getValue(),
        gameNameWithVariation: QM.gameNameWithVariation,
        lobbyName: QM.lobbyName
      };
      return {
        target: {
          ...await (0, zM.d)(nM, hM, iM, !1),
          postCookies: yM
        },
        matchedAt: mM,
        freshMs: zM.b
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);