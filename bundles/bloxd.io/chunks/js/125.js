export const id = 125;
export const ids = [124, 125];
export const modules = {
  5491: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(1141);
    async function be(ee) {
      const ie = await fetch(`${ye.clientSideServerUrls.s3Url}/${ee}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ie.status || 403 === ie.status) return null;
      if (!ie.ok) throw new Error(`Failed to download the texture pack (${ie.status})`);
      return await ie.json()
    }
  },
  42130: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      gamePackSource: () => Me
    });
    var ye = He(5491),
      be = He(1490);

    function Me(ee) {
      return {
        packKey: async ie => (await be.b.getGame(ee, ie, !0)).customTexturePackKey,
        fetchPack: ye.e
      }
    }
  },
  54263: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      fetchGuestContext: () => ke,
      guestJoinTarget: () => Be,
      guestJoinWithPack: () => fe,
      guestPackForGame: () => qe,
      invalidateGuestTrafficCode: () => ze
    });
    var ye = He(1141),
      be = He(1490),
      Me = He(97),
      Ke = He(37252),
      Ue = He(1083),
      Fe = He(41864),
      Je = He(42130),
      oe = He(41814);

    function Re() {
      if (Me.featureFlags.useTurnstile) throw new Fe.TurnstilePageError
    }

    function ke() {
      return (0, Ue.fetchAnonymousUserContext)(!0).catch((ee => (console.warn("the guest context didn't load", ee), null)))
    }
    async function qe(ee, ie, He, ye) {
      try {
        const be = await He;
        if (null === be) return void console.warn(`the texture pack step for ${ee} has no guest context: the pack in play stays`);
        await ie.packForGame(ee, (0, Je.gamePackSource)(be), ye)
      } catch (be) {
        console.warn(`the texture pack step for ${ee} failed: the pack in play stays`, be)
      }
    }
    async function fe(ee, ie, He, ye) {
      Re();
      const be = ke();
      return await He(((ie, He) => qe(ee, ie, be, He))), Be(ee, ie, ye(), await be)
    }
    let Te = null,
      pe = null;
    async function Xe() {
      if ((null === Te || Te.hasExpired()) && (pe ??= (0, Ue.fetchAnonymousUserContext)(!0).then((ee => {
          Te = ee
        })).finally((() => {
          pe = null
        })), await pe), null === Te) throw new Error("no guest context to post as");
      return Te.getMetricsCookies()
    }
    async function ze() {
      var ee;
      await (null === (ee = Te) || void 0 === ee ? void 0 : ee.invalidateTrafficCode())
    }
    async function Be(ee, ie, He) {
      let Me = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Re();
      const Fe = null !== Me && void 0 !== Me ? Me : await (0, Ue.fetchAnonymousUserContext)(!0);
      if (Te = Fe, Fe.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Je = await be.b.matchmakePlayer(Fe, ie, ee, (0, Ke.e)()),
        ke = performance.now();
      if (!("gameServerHost" in Je)) throw new Error(`matchmaking refused: ${Je.failReason}`);
      const qe = ye.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Je.gameServerHost);
      if (qe.isError()) throw new Error(`no socket URL for ${Je.gameServerHost}: ${qe.asError().message}`);
      const fe = {
        endpoint: qe.getValue(),
        gameNameWithVariation: Je.gameNameWithVariation,
        lobbyName: Je.lobbyName
      };
      return {
        target: {
          ...await (0, oe.h)(Fe, fe, He, !1),
          postCookies: Xe
        },
        matchedAt: ke,
        freshMs: oe.e
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);