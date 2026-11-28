export const id = 133;
export const ids = [132, 133];
export const modules = {
  6039: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(1271);
    async function Hb(bb) {
      const wb = await fetch(`${eb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === wb.status || 403 === wb.status) return null;
      if (!wb.ok) throw new Error(`Failed to download the texture pack (${wb.status})`);
      return await wb.json()
    }
  },
  42721: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      gamePackSource: () => pb
    });
    var eb = Mb(6039),
      Hb = Mb(1677);

    function pb(bb) {
      return {
        packKey: async wb => (await Hb.e.getGame(bb, wb, !0)).customTexturePackKey,
        fetchPack: eb.e
      }
    }
  },
  54873: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      fetchGuestContext: () => Ub,
      guestJoinTarget: () => mb,
      guestJoinWithPack: () => Cb,
      guestPackForGame: () => tb,
      invalidateGuestTrafficCode: () => sb
    });
    var eb = Mb(1271),
      Hb = Mb(1677),
      pb = Mb(110),
      Vb = Mb(37746),
      gb = Mb(1186),
      lb = Mb(42434),
      Lb = Mb(42721),
      Ib = Mb(42538);

    function Ob() {
      if (pb.featureFlags.useTurnstile) throw new lb.TurnstilePageError
    }

    function Ub() {
      return (0, gb.fetchAnonymousUserContext)(!0).catch((bb => (console.warn("the guest context didn't load", bb), null)))
    }
    async function tb(bb, wb, Mb, eb) {
      try {
        const Hb = await Mb;
        if (null === Hb) return void console.warn(`the texture pack step for ${bb} has no guest context: the pack in play stays`);
        await wb.packForGame(bb, (0, Lb.gamePackSource)(Hb), eb)
      } catch (Hb) {
        console.warn(`the texture pack step for ${bb} failed: the pack in play stays`, Hb)
      }
    }
    async function Cb(bb, wb, Mb, eb) {
      Ob();
      const Hb = Ub();
      return await Mb(((wb, Mb) => tb(bb, wb, Hb, Mb))), mb(bb, wb, eb(), await Hb)
    }
    let Eb = null,
      Fb = null;
    async function Bb() {
      if ((null === Eb || Eb.hasExpired()) && (Fb ??= (0, gb.fetchAnonymousUserContext)(!0).then((bb => {
          Eb = bb
        })).finally((() => {
          Fb = null
        })), await Fb), null === Eb) throw new Error("no guest context to post as");
      return Eb.getMetricsCookies()
    }
    async function sb() {
      var bb;
      await (null === (bb = Eb) || void 0 === bb ? void 0 : bb.invalidateTrafficCode())
    }
    async function mb(bb, wb, Mb) {
      let pb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Ob();
      const lb = null !== pb && void 0 !== pb ? pb : await (0, gb.fetchAnonymousUserContext)(!0);
      if (Eb = lb, lb.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Lb = await Hb.e.matchmakePlayer(lb, wb, bb, (0, Vb.e)()),
        Ub = performance.now();
      if (!("gameServerHost" in Lb)) throw new Error(`matchmaking refused: ${Lb.failReason}`);
      const tb = eb.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Lb.gameServerHost);
      if (tb.isError()) throw new Error(`no socket URL for ${Lb.gameServerHost}: ${tb.asError().message}`);
      const Cb = {
        endpoint: tb.getValue(),
        gameNameWithVariation: Lb.gameNameWithVariation,
        lobbyName: Lb.lobbyName
      };
      return {
        target: {
          ...await (0, Ib.g)(lb, Cb, Mb, !1),
          postCookies: Bb
        },
        matchedAt: Ub,
        freshMs: Ib.c
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);