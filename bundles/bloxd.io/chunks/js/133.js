export const id = 133;
export const ids = [132, 133];
export const modules = {
  5943: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(1262);
    async function Wr(rr) {
      const Sr = await fetch(`${Zr.clientSideServerUrls.s3Url}/${rr}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Sr.status || 403 === Sr.status) return null;
      if (!Sr.ok) throw new Error(`Failed to download the texture pack (${Sr.status})`);
      return await Sr.json()
    }
  },
  42906: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      gamePackSource: () => ar
    });
    var Zr = Qr(5943),
      Wr = Qr(1629);

    function ar(rr) {
      return {
        packKey: async Sr => (await Wr.c.getGame(rr, Sr, !0)).customTexturePackKey,
        fetchPack: Zr.b
      }
    }
  },
  55146: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      fetchGuestContext: () => mr,
      guestJoinTarget: () => nr,
      guestJoinWithPack: () => Ur,
      guestPackForGame: () => Nr,
      invalidateGuestTrafficCode: () => Yr
    });
    var Zr = Qr(1262),
      Wr = Qr(1629),
      ar = Qr(109),
      jr = Qr(37992),
      Ir = Qr(1187),
      fr = Qr(42607),
      Er = Qr(42906),
      pr = Qr(42735);

    function xr() {
      if (ar.featureFlags.useTurnstile) throw new fr.TurnstilePageError
    }

    function mr() {
      return (0, Ir.fetchAnonymousUserContext)(!0).catch((rr => (console.warn("the guest context didn't load", rr), null)))
    }
    async function Nr(rr, Sr, Qr, Zr) {
      try {
        const Wr = await Qr;
        if (null === Wr) return void console.warn(`the texture pack step for ${rr} has no guest context: the pack in play stays`);
        await Sr.packForGame(rr, (0, Er.gamePackSource)(Wr), Zr)
      } catch (Wr) {
        console.warn(`the texture pack step for ${rr} failed: the pack in play stays`, Wr)
      }
    }
    async function Ur(rr, Sr, Qr, Zr) {
      xr();
      const Wr = mr();
      return await Qr(((Sr, Qr) => Nr(rr, Sr, Wr, Qr))), nr(rr, Sr, Zr(), await Wr)
    }
    let tr = null,
      hr = null;
    async function zr() {
      if ((null === tr || tr.hasExpired()) && (hr ??= (0, Ir.fetchAnonymousUserContext)(!0).then((rr => {
          tr = rr
        })).finally((() => {
          hr = null
        })), await hr), null === tr) throw new Error("no guest context to post as");
      return tr.getMetricsCookies()
    }
    async function Yr() {
      var rr;
      await (null === (rr = tr) || void 0 === rr ? void 0 : rr.invalidateTrafficCode())
    }
    async function nr(rr, Sr, Qr) {
      let ar = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      xr();
      const fr = null !== ar && void 0 !== ar ? ar : await (0, Ir.fetchAnonymousUserContext)(!0);
      if (tr = fr, fr.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Er = await Wr.c.matchmakePlayer(fr, Sr, rr, (0, jr.e)()),
        mr = performance.now();
      if (!("gameServerHost" in Er)) throw new Error(`matchmaking refused: ${Er.failReason}`);
      const Nr = Zr.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Er.gameServerHost);
      if (Nr.isError()) throw new Error(`no socket URL for ${Er.gameServerHost}: ${Nr.asError().message}`);
      const Ur = {
        endpoint: Nr.getValue(),
        gameNameWithVariation: Er.gameNameWithVariation,
        lobbyName: Er.lobbyName
      };
      return {
        target: {
          ...await (0, pr.g)(fr, Ur, Qr, !1),
          postCookies: zr
        },
        matchedAt: mr,
        freshMs: pr.d
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);