export const id = 133;
export const ids = [132, 133];
export const modules = {
  5889: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(1253);
    async function Fd(dd) {
      const Od = await fetch(`${Wd.clientSideServerUrls.s3Url}/${dd}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Od.status || 403 === Od.status) return null;
      if (!Od.ok) throw new Error(`Failed to download the texture pack (${Od.status})`);
      return await Od.json()
    }
  },
  42999: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      gamePackSource: () => Rd
    });
    var Wd = md(5889),
      Fd = md(1627);

    function Rd(dd) {
      return {
        packKey: async Od => (await Fd.e.getGame(dd, Od, !0)).customTexturePackKey,
        fetchPack: Wd.b
      }
    }
  },
  55071: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      fetchGuestContext: () => od,
      guestJoinTarget: () => pd,
      guestJoinWithPack: () => qd,
      guestPackForGame: () => Nd,
      invalidateGuestTrafficCode: () => Td
    });
    var Wd = md(1253),
      Fd = md(1627),
      Rd = md(107),
      Xd = md(38074),
      Kd = md(1189),
      hd = md(42709),
      vd = md(42999),
      Qd = md(42835);

    function td() {
      if (Rd.featureFlags.useTurnstile) throw new hd.TurnstilePageError
    }

    function od() {
      return (0, Kd.fetchAnonymousUserContext)(!0).catch((dd => (console.warn("the guest context didn't load", dd), null)))
    }
    async function Nd(dd, Od, md, Wd) {
      try {
        const Fd = await md;
        if (null === Fd) return void console.warn(`the texture pack step for ${dd} has no guest context: the pack in play stays`);
        await Od.packForGame(dd, (0, vd.gamePackSource)(Fd), Wd)
      } catch (Fd) {
        console.warn(`the texture pack step for ${dd} failed: the pack in play stays`, Fd)
      }
    }
    async function qd(dd, Od, md, Wd) {
      td();
      const Fd = od();
      return await md(((Od, md) => Nd(dd, Od, Fd, md))), pd(dd, Od, Wd(), await Fd)
    }
    let Hd = null,
      yd = null;
    async function bd() {
      if ((null === Hd || Hd.hasExpired()) && (yd ??= (0, Kd.fetchAnonymousUserContext)(!0).then((dd => {
          Hd = dd
        })).finally((() => {
          yd = null
        })), await yd), null === Hd) throw new Error("no guest context to post as");
      return Hd.getMetricsCookies()
    }
    async function Td() {
      var dd;
      await (null === (dd = Hd) || void 0 === dd ? void 0 : dd.invalidateTrafficCode())
    }
    async function pd(dd, Od, md) {
      let Rd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      td();
      const hd = null !== Rd && void 0 !== Rd ? Rd : await (0, Kd.fetchAnonymousUserContext)(!0);
      if (Hd = hd, hd.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const vd = await Fd.e.matchmakePlayer(hd, Od, dd, (0, Xd.d)()),
        od = performance.now();
      if (!("gameServerHost" in vd)) throw new Error(`matchmaking refused: ${vd.failReason}`);
      const Nd = Wd.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(vd.gameServerHost);
      if (Nd.isError()) throw new Error(`no socket URL for ${vd.gameServerHost}: ${Nd.asError().message}`);
      const qd = {
        endpoint: Nd.getValue(),
        gameNameWithVariation: vd.gameNameWithVariation,
        lobbyName: vd.lobbyName
      };
      return {
        target: {
          ...await (0, Qd.d)(hd, qd, md, !1),
          postCookies: bd
        },
        matchedAt: od,
        freshMs: Qd.c
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);