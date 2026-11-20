export const id = 342;
export const ids = [342, 343];
export const modules = {
  42364: (zz, tz, sz) => {
    sz.d(tz, {
      gamePackSource: () => Xz
    });
    var Fz = sz(4605),
      Wz = sz(1466);

    function Xz(zz) {
      return {
        packKey: async tz => (await Wz.d.getGame(zz, tz, !0)).customTexturePackKey,
        fetchPack: Fz.c
      }
    }
  },
  42361: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      fetchGuestContext: () => Nz,
      guestJoinTarget: () => Pz,
      guestJoinWithPack: () => wz,
      guestPackForGame: () => bz,
      invalidateGuestTrafficCode: () => Bz
    });
    var Fz = sz(1191),
      Wz = sz(1466),
      Xz = sz(106),
      Oz = sz(35962),
      oz = sz(1120),
      vz = sz(40033),
      Uz = sz(42364),
      Kz = sz(39979);

    function uz() {
      if (Xz.featureFlags.useTurnstile) throw new vz.TurnstilePageError
    }

    function Nz() {
      return (0, oz.fetchAnonymousUserContext)().catch((zz => (console.warn("the guest context didn't load", zz), null)))
    }
    async function bz(zz, tz, sz, Fz) {
      try {
        const Wz = await sz;
        if (null === Wz) return void console.warn(`the texture pack step for ${zz} has no guest context: the pack in play stays`);
        await tz.packForGame(zz, (0, Uz.gamePackSource)(Wz), Fz)
      } catch (Wz) {
        console.warn(`the texture pack step for ${zz} failed: the pack in play stays`, Wz)
      }
    }
    async function wz(zz, tz, sz, Fz) {
      uz();
      const Wz = Nz();
      return await sz(((tz, sz) => bz(zz, tz, Wz, sz))), Pz(zz, tz, Fz(), await Wz)
    }
    let Dz = null,
      gz = null;
    async function Hz() {
      if ((null === Dz || Dz.hasExpired()) && (gz ??= (0, oz.fetchAnonymousUserContext)().then((zz => {
          Dz = zz
        })).finally((() => {
          gz = null
        })), await gz), null === Dz) throw new Error("no guest context to post as");
      return Dz.getMetricsCookies()
    }
    async function Bz() {
      var zz;
      await (null === (zz = Dz) || void 0 === zz ? void 0 : zz.invalidateTrafficCode())
    }
    async function Pz(zz, tz, sz) {
      let Xz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      uz();
      const vz = null !== Xz && void 0 !== Xz ? Xz : await (0, oz.fetchAnonymousUserContext)();
      if (Dz = vz, vz.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
      const Uz = await Wz.d.matchmakePlayer(vz, tz, zz, (0, Oz.c)()),
        Nz = performance.now();
      if (!("gameServerHost" in Uz)) throw new Error(`matchmaking refused: ${Uz.failReason}`);
      const bz = Fz.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(Uz.gameServerHost);
      if (bz.isError()) throw new Error(`no socket URL for ${Uz.gameServerHost}: ${bz.asError().message}`);
      const wz = {
        endpoint: bz.getValue(),
        gameNameWithVariation: Uz.gameNameWithVariation,
        lobbyName: Uz.lobbyName
      };
      return {
        target: {
          ...await (0, Kz.f)(vz, wz, sz, !1),
          postCookies: Hz
        },
        matchedAt: Nz,
        freshMs: Kz.d
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);