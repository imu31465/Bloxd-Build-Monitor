export const id = 330;
export const ids = [330, 331];
export const modules = {
  41833: (yb, bb, Wy) => {
    Wy.d(bb, {
      gamePackSource: () => fy
    });
    var Uy = Wy(4191),
      hy = Wy(1339);

    function fy(yb) {
      return {
        packKey: async bb => (await hy.c.getGame(yb, bb, !0)).customTexturePackKey,
        fetchPack: Uy.c
      }
    }
  },
  41830: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      fetchGuestContext: () => ey,
      guestJoinTarget: () => Cy,
      guestJoinWithPack: () => sy,
      guestPackForGame: () => qb,
      invalidateGuestTrafficCode: () => mb
    });
    var Uy = Wy(1052),
      hy = Wy(1339),
      fy = Wy(94),
      Zy = Wy(35269),
      cb = Wy(987),
      Py = Wy(39441),
      oy = Wy(41833),
      By = Wy(39368);

    function Ky() {
      if (fy.featureFlags.useTurnstile) throw new Py.TurnstilePageError
    }

    function ey() {
      return (0, cb.fetchAnonymousUserContext)().catch((yb => (console.warn("the guest context didn't load", yb), null)))
    }
    async function qb(yb, bb, Wy, Uy) {
      try {
        const hy = await Wy;
        if (null === hy) return void console.warn(`the texture pack step for ${yb} has no guest context: the pack in play stays`);
        await bb.packForGame(yb, (0, oy.gamePackSource)(hy), Uy)
      } catch (hy) {
        console.warn(`the texture pack step for ${yb} failed: the pack in play stays`, hy)
      }
    }
    async function sy(yb, bb, Wy, Uy) {
      Ky();
      const hy = ey();
      return await Wy(((bb, Wy) => qb(yb, bb, hy, Wy))), Cy(yb, bb, Uy(), await hy)
    }
    let Sy = null,
      Ey = null;
    async function ly() {
      if ((null === Sy || Sy.hasExpired()) && (Ey ??= (0, cb.fetchAnonymousUserContext)().then((yb => {
          Sy = yb
        })).finally((() => {
          Ey = null
        })), await Ey), null === Sy) throw new Error("no guest context to post as");
      return Sy.getMetricsCookies()
    }
    async function mb() {
      var yb;
      await (null === (yb = Sy) || void 0 === yb ? void 0 : yb.invalidateTrafficCode())
    }
    async function Cy(yb, bb, Wy) {
      let fy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Ky();
      const Py = null !== fy && void 0 !== fy ? fy : await (0, cb.fetchAnonymousUserContext)();
      if (Sy = Py, Py.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const oy = await hy.c.matchmakePlayer(Py, bb, yb, (0, Zy.e)()),
        ey = performance.now();
      if (!("gameServerHost" in oy)) throw new Error(`matchmaking refused: ${oy.failReason}`);
      const qb = Uy.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(oy.gameServerHost);
      if (qb.isError()) throw new Error(`no socket URL for ${oy.gameServerHost}: ${qb.asError().message}`);
      const sy = {
        endpoint: qb.getValue(),
        gameNameWithVariation: oy.gameNameWithVariation,
        lobbyName: oy.lobbyName
      };
      return {
        target: {
          ...await (0, By.f)(Py, sy, Wy),
          postCookies: ly
        },
        matchedAt: ey,
        freshMs: By.b
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);