export const id = 133;
export const ids = [132, 133];
export const modules = {
  6028: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(1282);
    async function tR(RR) {
      const JR = await fetch(`${yR.clientSideServerUrls.s3Url}/${RR}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === JR.status || 403 === JR.status) return null;
      if (!JR.ok) throw new Error(`Failed to download the texture pack (${JR.status})`);
      return await JR.json()
    }
  },
  42579: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      gamePackSource: () => uR
    });
    var yR = GR(6028),
      tR = GR(1647);

    function uR(RR) {
      return {
        packKey: async JR => (await tR.c.getGame(RR, JR, !0)).customTexturePackKey,
        fetchPack: yR.c
      }
    }
  },
  54642: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      fetchGuestContext: () => wR,
      guestJoinTarget: () => WR,
      guestJoinWithPack: () => eR,
      guestPackForGame: () => rR,
      invalidateGuestTrafficCode: () => UR
    });
    var yR = GR(1282),
      tR = GR(1647),
      uR = GR(103),
      ZR = GR(37616),
      qR = GR(1201),
      iR = GR(42288),
      fR = GR(42579),
      VR = GR(42402);

    function KR() {
      if (uR.featureFlags.useTurnstile) throw new iR.TurnstilePageError
    }

    function wR() {
      return (0, qR.fetchAnonymousUserContext)(!0).catch((RR => (console.warn("the guest context didn't load", RR), null)))
    }
    async function rR(RR, JR, GR, yR) {
      try {
        const tR = await GR;
        if (null === tR) return void console.warn(`the texture pack step for ${RR} has no guest context: the pack in play stays`);
        await JR.packForGame(RR, (0, fR.gamePackSource)(tR), yR)
      } catch (tR) {
        console.warn(`the texture pack step for ${RR} failed: the pack in play stays`, tR)
      }
    }
    async function eR(RR, JR, GR, yR) {
      KR();
      const tR = wR();
      return await GR(((JR, GR) => rR(RR, JR, tR, GR))), WR(RR, JR, yR(), await tR)
    }
    let aR = null,
      LR = null;
    async function nR() {
      if ((null === aR || aR.hasExpired()) && (LR ??= (0, qR.fetchAnonymousUserContext)(!0).then((RR => {
          aR = RR
        })).finally((() => {
          LR = null
        })), await LR), null === aR) throw new Error("no guest context to post as");
      return aR.getMetricsCookies()
    }
    async function UR() {
      var RR;
      await (null === (RR = aR) || void 0 === RR ? void 0 : RR.invalidateTrafficCode())
    }
    async function WR(RR, JR, GR) {
      let uR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      KR();
      const iR = null !== uR && void 0 !== uR ? uR : await (0, qR.fetchAnonymousUserContext)(!0);
      if (aR = iR, iR.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const fR = await tR.c.matchmakePlayer(iR, JR, RR, (0, ZR.c)()),
        wR = performance.now();
      if (!("gameServerHost" in fR)) throw new Error(`matchmaking refused: ${fR.failReason}`);
      const rR = yR.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(fR.gameServerHost);
      if (rR.isError()) throw new Error(`no socket URL for ${fR.gameServerHost}: ${rR.asError().message}`);
      const eR = {
        endpoint: rR.getValue(),
        gameNameWithVariation: fR.gameNameWithVariation,
        lobbyName: fR.lobbyName
      };
      return {
        target: {
          ...await (0, VR.f)(iR, eR, GR, !1),
          postCookies: nR
        },
        matchedAt: wR,
        freshMs: VR.c
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);