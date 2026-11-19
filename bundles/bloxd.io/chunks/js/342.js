export const id = 342;
export const ids = [342, 343];
export const modules = {
  42594: (zz, uz, bz) => {
    bz.d(uz, {
      gamePackSource: () => iz
    });
    var Ez = bz(4737),
      nz = bz(1473);

    function iz(zz) {
      return {
        packKey: async uz => (await nz.c.getGame(zz, uz, !0)).customTexturePackKey,
        fetchPack: Ez.c
      }
    }
  },
  42586: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      fetchGuestContext: () => dz,
      guestJoinTarget: () => fz,
      guestJoinWithPack: () => Zz,
      guestPackForGame: () => Fz,
      invalidateGuestTrafficCode: () => Xz
    });
    var Ez = bz(1195),
      nz = bz(1473),
      iz = bz(96),
      lz = bz(35945),
      Mz = bz(1118),
      tz = bz(40140),
      Hz = bz(42594),
      Oz = bz(40077);

    function pz() {
      if (iz.featureFlags.useTurnstile) throw new tz.TurnstilePageError
    }

    function dz() {
      return (0, Mz.fetchAnonymousUserContext)().catch((zz => (console.warn("the guest context didn't load", zz), null)))
    }
    async function Fz(zz, uz, bz, Ez) {
      try {
        const nz = await bz;
        if (null === nz) return void console.warn(`the texture pack step for ${zz} has no guest context: the pack in play stays`);
        await uz.packForGame(zz, (0, Hz.gamePackSource)(nz), Ez)
      } catch (nz) {
        console.warn(`the texture pack step for ${zz} failed: the pack in play stays`, nz)
      }
    }
    async function Zz(zz, uz, bz, Ez) {
      pz();
      const nz = dz();
      return await bz(((uz, bz) => Fz(zz, uz, nz, bz))), fz(zz, uz, Ez(), await nz)
    }
    let Rz = null,
      Kz = null;
    async function wz() {
      if ((null === Rz || Rz.hasExpired()) && (Kz ??= (0, Mz.fetchAnonymousUserContext)().then((zz => {
          Rz = zz
        })).finally((() => {
          Kz = null
        })), await Kz), null === Rz) throw new Error("no guest context to post as");
      return Rz.getMetricsCookies()
    }
    async function Xz() {
      var zz;
      await (null === (zz = Rz) || void 0 === zz ? void 0 : zz.invalidateTrafficCode())
    }
    async function fz(zz, uz, bz) {
      let iz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      pz();
      const tz = null !== iz && void 0 !== iz ? iz : await (0, Mz.fetchAnonymousUserContext)();
      if (Rz = tz, tz.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Hz = await nz.c.matchmakePlayer(tz, uz, zz, (0, lz.b)()),
        dz = performance.now();
      if (!("gameServerHost" in Hz)) throw new Error(`matchmaking refused: ${Hz.failReason}`);
      const Fz = Ez.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Hz.gameServerHost);
      if (Fz.isError()) throw new Error(`no socket URL for ${Hz.gameServerHost}: ${Fz.asError().message}`);
      const Zz = {
        endpoint: Fz.getValue(),
        gameNameWithVariation: Hz.gameNameWithVariation,
        lobbyName: Hz.lobbyName
      };
      return {
        target: {
          ...await (0, Oz.i)(tz, Zz, bz, !1),
          postCookies: wz
        },
        matchedAt: dz,
        freshMs: Oz.e
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);