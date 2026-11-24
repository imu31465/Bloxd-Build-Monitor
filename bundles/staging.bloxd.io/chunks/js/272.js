export const id = 272;
export const ids = [271, 272];
export const modules = {
  41120: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      gamePackSource: () => am
    });
    var hm = fm(4938),
      Am = fm(1494);

    function am(mm) {
      return {
        packKey: async Tm => (await Am.d.getGame(mm, Tm, !0)).customTexturePackKey,
        fetchPack: hm.e
      }
    }
  },
  50975: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      fetchGuestContext: () => Em,
      guestJoinTarget: () => Im,
      guestJoinWithPack: () => Om,
      guestPackForGame: () => om,
      invalidateGuestTrafficCode: () => Vm
    });
    var hm = fm(1214),
      Am = fm(1494),
      am = fm(105),
      xm = fm(36545),
      wm = fm(1162),
      Dm = fm(40821),
      im = fm(41120),
      Rm = fm(40783);

    function pm() {
      if (am.featureFlags.useTurnstile) throw new Dm.TurnstilePageError
    }

    function Em() {
      return (0, wm.fetchAnonymousUserContext)().catch((mm => (console.warn("the guest context didn't load", mm), null)))
    }
    async function om(mm, Tm, fm, hm) {
      try {
        const Am = await fm;
        if (null === Am) return void console.warn(`the texture pack step for ${mm} has no guest context: the pack in play stays`);
        await Tm.packForGame(mm, (0, im.gamePackSource)(Am), hm)
      } catch (Am) {
        console.warn(`the texture pack step for ${mm} failed: the pack in play stays`, Am)
      }
    }
    async function Om(mm, Tm, fm, hm) {
      pm();
      const Am = Em();
      return await fm(((Tm, fm) => om(mm, Tm, Am, fm))), Im(mm, Tm, hm(), await Am)
    }
    let Ym = null,
      qm = null;
    async function jm() {
      if ((null === Ym || Ym.hasExpired()) && (qm ??= (0, wm.fetchAnonymousUserContext)().then((mm => {
          Ym = mm
        })).finally((() => {
          qm = null
        })), await qm), null === Ym) throw new Error("no guest context to post as");
      return Ym.getMetricsCookies()
    }
    async function Vm() {
      var mm;
      await (null === (mm = Ym) || void 0 === mm ? void 0 : mm.invalidateTrafficCode())
    }
    async function Im(mm, Tm, fm) {
      let am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      pm();
      const Dm = null !== am && void 0 !== am ? am : await (0, wm.fetchAnonymousUserContext)();
      if (Ym = Dm, Dm.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const im = await Am.d.matchmakePlayer(Dm, Tm, mm, (0, xm.c)()),
        Em = performance.now();
      if (!("gameServerHost" in im)) throw new Error(`matchmaking refused: ${im.failReason}`);
      const om = hm.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(im.gameServerHost);
      if (om.isError()) throw new Error(`no socket URL for ${im.gameServerHost}: ${om.asError().message}`);
      const Om = {
        endpoint: om.getValue(),
        gameNameWithVariation: im.gameNameWithVariation,
        lobbyName: im.lobbyName
      };
      return {
        target: {
          ...await (0, Rm.e)(Dm, Om, fm, !1),
          postCookies: jm
        },
        matchedAt: Em,
        freshMs: Rm.c
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);