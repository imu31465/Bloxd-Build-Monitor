export const id = 151;
export const ids = [151];
export const modules = {
  36080: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => Rz,
      g: () => Kz,
      h: () => Mz,
      i: () => dz,
      j: () => wz,
      n: () => pz,
      q: () => fz,
      u: () => Zz,
      x: () => Xz
    });
    var Ez = bz(20),
      nz = bz(22);
    const iz = "clientGameInventoryButtonsChanged",
      lz = new Map;

    function Mz() {
      return [...lz.values()].sort(((zz, uz) => {
        var bz, Ez;
        return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
      }))
    }
    let tz = null;

    function Hz(zz) {
      tz = zz
    }
    let Oz = !1;

    function pz(zz) {
      Oz = !0;
      try {
        zz.onClick()
      } finally {
        Oz = !1
      }
      zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
    }

    function dz() {
      return Oz
    }

    function Fz() {
      return Mz().filter((zz => zz.panel && !zz.disabled))
    }

    function Zz(zz) {
      const uz = Fz(),
        bz = uz.findIndex((zz => zz.id === tz));
      return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
    }

    function Rz() {
      return null !== tz && Fz().length > 1
    }

    function Kz() {
      Hz(null)
    }

    function wz() {
      "inventory" !== Ez.e.get("openInGameMenuName") && Hz(null)
    }

    function Xz() {
      const zz = tz;
      return Hz(null), zz
    }

    function fz(zz) {
      return lz.set(zz.id, zz), nz.k.sK(iz, Mz(), !0), () => {
        lz.get(zz.id) === zz && (lz.delete(zz.id), nz.k.sK(iz, Mz()))
      }
    }
  },
  36071: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => Kz,
      l: () => wz,
      n: () => dz,
      o: () => Hz,
      p: () => Rz,
      t: () => Fz,
      x: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(36080);
    const Mz = "clientGameUiChanged";
    let tz = null;

    function Hz() {
      return tz
    }

    function Oz(zz, uz) {
      const bz = {
        content: zz,
        menu: uz
      };
      return tz = bz, nz.k.sK(Mz, tz, !0), () => {
        tz === bz && (tz = null, Zz = !1, Kz(), nz.k.sK(Mz, null))
      }
    }
    let pz = null;

    function dz() {
      return pz
    }

    function Fz(zz) {
      return pz = zz, () => {
        pz === zz && (pz = null)
      }
    }
    let Zz = !1;

    function Rz() {
      const zz = Ez.e.get("openInGameMenuName");
      "clientGame" !== zz && (Zz = "inventory" === zz), (0, lz.i)() || (0, lz.g)(), (0, iz.m)(iz.b), Ez.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Kz() {
      Xz(!1)
    }

    function wz() {
      Xz(Zz)
    }

    function Xz(zz) {
      "clientGame" === Ez.e.get("openInGameMenuName") && Ez.e.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, lz.g)(), Zz = !1
    }
  },
  8427: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(8434),
      nz = bz(588),
      iz = bz(128);

    function lz(zz) {
      var uz, bz;
      if ((0, nz.F)(zz)) return !0;
      const lz = null !== (uz = null === (bz = iz.r[iz.x]) || void 0 === bz ? void 0 : bz.adConfig.showRewardedAds) && void 0 !== uz && uz;
      for (const nz in zz) {
        const uz = zz[nz];
        if (null !== uz && void 0 !== uz && uz.items)
          for (const zz in uz.items)
            if ((0, Ez.j)(uz.items[zz], lz)) return !1
      }
      return !0
    }
  },
  41833: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      getClientGameMapKey: () => Ez.n,
      shopIsEmpty: () => nz.e
    });
    var Ez = bz(36071),
      nz = bz(8427)
  },
  8434: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return !zz.hidden && (uz || !zz.isRewardedAd)
    }

    function nz(zz) {
      return "object" === typeof zz ? zz.option : zz
    }

    function iz(zz, uz) {
      var bz;
      if ("dropdown" === (null === (bz = zz.userInput) || void 0 === bz ? void 0 : bz.type) && "object" === typeof zz.userInput.dropdownOptions[0]) {
        for (const bz of zz.userInput.dropdownOptions)
          if (nz(bz) === uz) return "object" === typeof bz ? bz.cost : zz.cost;
        console.error("Didn't find matching option for dropdown item. Item:", zz, "input:", uz)
      }
      return zz.cost
    }

    function lz(zz, uz, bz) {
      var Ez;
      const nz = null !== (Ez = bz.excludedPlayers) && void 0 !== Ez ? Ez : [uz];
      return zz.filter((zz => !nz.includes(zz)))
    }
    bz.d(uz, {
      b: () => iz,
      e: () => nz,
      f: () => lz,
      j: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);