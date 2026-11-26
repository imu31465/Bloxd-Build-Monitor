export const id = 125;
export const ids = [124, 125];
export const modules = {
  5473: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(1131);
    async function rH(HH) {
      const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === BH.status || 403 === BH.status) return null;
      if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
      return await BH.json()
    }
  },
  42361: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      gamePackSource: () => SH
    });
    var AH = LH(5473),
      rH = LH(1502);

    function SH(HH) {
      return {
        packKey: async BH => (await rH.d.getGame(HH, BH, !0)).customTexturePackKey,
        fetchPack: AH.b
      }
    }
  },
  54549: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      fetchGuestContext: () => GH,
      guestJoinTarget: () => vH,
      guestJoinWithPack: () => uH,
      guestPackForGame: () => YH,
      invalidateGuestTrafficCode: () => xH
    });
    var AH = LH(1131),
      rH = LH(1502),
      SH = LH(81),
      hH = LH(37341),
      tH = LH(1070),
      zH = LH(42075),
      CH = LH(42361),
      EH = LH(42027);

    function XH() {
      if (SH.featureFlags.useTurnstile) throw new zH.TurnstilePageError
    }

    function GH() {
      return (0, tH.fetchAnonymousUserContext)(!0).catch((HH => (console.warn("the guest context didn't load", HH), null)))
    }
    async function YH(HH, BH, LH, AH) {
      try {
        const rH = await LH;
        if (null === rH) return void console.warn(`the texture pack step for ${HH} has no guest context: the pack in play stays`);
        await BH.packForGame(HH, (0, CH.gamePackSource)(rH), AH)
      } catch (rH) {
        console.warn(`the texture pack step for ${HH} failed: the pack in play stays`, rH)
      }
    }
    async function uH(HH, BH, LH, AH) {
      XH();
      const rH = GH();
      return await LH(((BH, LH) => YH(HH, BH, rH, LH))), vH(HH, BH, AH(), await rH)
    }
    let QH = null,
      WH = null;
    async function MH() {
      if ((null === QH || QH.hasExpired()) && (WH ??= (0, tH.fetchAnonymousUserContext)(!0).then((HH => {
          QH = HH
        })).finally((() => {
          WH = null
        })), await WH), null === QH) throw new Error("no guest context to post as");
      return QH.getMetricsCookies()
    }
    async function xH() {
      var HH;
      await (null === (HH = QH) || void 0 === HH ? void 0 : HH.invalidateTrafficCode())
    }
    async function vH(HH, BH, LH) {
      let SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      XH();
      const zH = null !== SH && void 0 !== SH ? SH : await (0, tH.fetchAnonymousUserContext)(!0);
      if (QH = zH, zH.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const CH = await rH.d.matchmakePlayer(zH, BH, HH, (0, hH.e)()),
        GH = performance.now();
      if (!("gameServerHost" in CH)) throw new Error(`matchmaking refused: ${CH.failReason}`);
      const YH = AH.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(CH.gameServerHost);
      if (YH.isError()) throw new Error(`no socket URL for ${CH.gameServerHost}: ${YH.asError().message}`);
      const uH = {
        endpoint: YH.getValue(),
        gameNameWithVariation: CH.gameNameWithVariation,
        lobbyName: CH.lobbyName
      };
      return {
        target: {
          ...await (0, EH.e)(zH, uH, LH, !1),
          postCookies: MH
        },
        matchedAt: GH,
        freshMs: EH.d
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);