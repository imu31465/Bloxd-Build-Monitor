export const id = 125;
export const ids = [124, 125];
export const modules = {
  5473: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(1186);
    async function DB(BB) {
      const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === OB.status || 403 === OB.status) return null;
      if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
      return await OB.json()
    }
  },
  42056: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      gamePackSource: () => QB
    });
    var YB = GB(5473),
      DB = GB(1540);

    function QB(BB) {
      return {
        packKey: async OB => (await DB.b.getGame(BB, OB, !0)).customTexturePackKey,
        fetchPack: YB.e
      }
    }
  },
  54064: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      fetchGuestContext: () => zB,
      guestJoinTarget: () => WB,
      guestJoinWithPack: () => pB,
      guestPackForGame: () => lB,
      invalidateGuestTrafficCode: () => RB
    });
    var YB = GB(1186),
      DB = GB(1540),
      QB = GB(92),
      oB = GB(37132),
      jB = GB(1121),
      yB = GB(41773),
      JB = GB(42056),
      MB = GB(41716);

    function PB() {
      if (QB.featureFlags.useTurnstile) throw new yB.TurnstilePageError
    }

    function zB() {
      return (0, jB.fetchAnonymousUserContext)(!0).catch((BB => (console.warn("the guest context didn't load", BB), null)))
    }
    async function lB(BB, OB, GB, YB) {
      try {
        const DB = await GB;
        if (null === DB) return void console.warn(`the texture pack step for ${BB} has no guest context: the pack in play stays`);
        await OB.packForGame(BB, (0, JB.gamePackSource)(DB), YB)
      } catch (DB) {
        console.warn(`the texture pack step for ${BB} failed: the pack in play stays`, DB)
      }
    }
    async function pB(BB, OB, GB, YB) {
      PB();
      const DB = zB();
      return await GB(((OB, GB) => lB(BB, OB, DB, GB))), WB(BB, OB, YB(), await DB)
    }
    let qB = null,
      ZB = null;
    async function NB() {
      if ((null === qB || qB.hasExpired()) && (ZB ??= (0, jB.fetchAnonymousUserContext)(!0).then((BB => {
          qB = BB
        })).finally((() => {
          ZB = null
        })), await ZB), null === qB) throw new Error("no guest context to post as");
      return qB.getMetricsCookies()
    }
    async function RB() {
      var BB;
      await (null === (BB = qB) || void 0 === BB ? void 0 : BB.invalidateTrafficCode())
    }
    async function WB(BB, OB, GB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      PB();
      const yB = null !== QB && void 0 !== QB ? QB : await (0, jB.fetchAnonymousUserContext)(!0);
      if (qB = yB, yB.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const JB = await DB.b.matchmakePlayer(yB, OB, BB, (0, oB.b)()),
        zB = performance.now();
      if (!("gameServerHost" in JB)) throw new Error(`matchmaking refused: ${JB.failReason}`);
      const lB = YB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(JB.gameServerHost);
      if (lB.isError()) throw new Error(`no socket URL for ${JB.gameServerHost}: ${lB.asError().message}`);
      const pB = {
        endpoint: lB.getValue(),
        gameNameWithVariation: JB.gameNameWithVariation,
        lobbyName: JB.lobbyName
      };
      return {
        target: {
          ...await (0, MB.e)(yB, pB, GB, !1),
          postCookies: NB
        },
        matchedAt: zB,
        freshMs: MB.c
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);