export const id = 300;
export const ids = [299, 300];
export const modules = {
  42371: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      gamePackSource: () => UV
    });
    var JV = xV(5486),
      YV = xV(1603);

    function UV(VV) {
      return {
        packKey: async eV => (await YV.b.getGame(VV, eV, !0)).customTexturePackKey,
        fetchPack: JV.d
      }
    }
  },
  53954: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      fetchGuestContext: () => vV,
      guestJoinTarget: () => qV,
      guestJoinWithPack: () => kV,
      guestPackForGame: () => rV,
      invalidateGuestTrafficCode: () => jV
    });
    var JV = xV(1230),
      YV = xV(1603),
      UV = xV(99),
      yV = xV(37612),
      pV = xV(1173),
      QV = xV(42034),
      nV = xV(42371),
      wV = xV(41986);

    function ZV() {
      if (UV.featureFlags.useTurnstile) throw new QV.TurnstilePageError
    }

    function vV() {
      return (0, pV.fetchAnonymousUserContext)(!0).catch((VV => (console.warn("the guest context didn't load", VV), null)))
    }
    async function rV(VV, eV, xV, JV) {
      try {
        const YV = await xV;
        if (null === YV) return void console.warn(`the texture pack step for ${VV} has no guest context: the pack in play stays`);
        await eV.packForGame(VV, (0, nV.gamePackSource)(YV), JV)
      } catch (YV) {
        console.warn(`the texture pack step for ${VV} failed: the pack in play stays`, YV)
      }
    }
    async function kV(VV, eV, xV, JV) {
      ZV();
      const YV = vV();
      return await xV(((eV, xV) => rV(VV, eV, YV, xV))), qV(VV, eV, JV(), await YV)
    }
    let bV = null,
      EV = null;
    async function BV() {
      if ((null === bV || bV.hasExpired()) && (EV ??= (0, pV.fetchAnonymousUserContext)(!0).then((VV => {
          bV = VV
        })).finally((() => {
          EV = null
        })), await EV), null === bV) throw new Error("no guest context to post as");
      return bV.getMetricsCookies()
    }
    async function jV() {
      var VV;
      await (null === (VV = bV) || void 0 === VV ? void 0 : VV.invalidateTrafficCode())
    }
    async function qV(VV, eV, xV) {
      let UV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      ZV();
      const QV = null !== UV && void 0 !== UV ? UV : await (0, pV.fetchAnonymousUserContext)(!0);
      if (bV = QV, QV.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const nV = await YV.b.matchmakePlayer(QV, eV, VV, (0, yV.b)()),
        vV = performance.now();
      if (!("gameServerHost" in nV)) throw new Error(`matchmaking refused: ${nV.failReason}`);
      const rV = JV.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(nV.gameServerHost);
      if (rV.isError()) throw new Error(`no socket URL for ${nV.gameServerHost}: ${rV.asError().message}`);
      const kV = {
        endpoint: rV.getValue(),
        gameNameWithVariation: nV.gameNameWithVariation,
        lobbyName: nV.lobbyName
      };
      return {
        target: {
          ...await (0, wV.f)(QV, kV, xV, !1),
          postCookies: BV
        },
        matchedAt: vV,
        freshMs: wV.b
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);