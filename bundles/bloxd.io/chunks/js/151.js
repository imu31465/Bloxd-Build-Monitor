export const id = 151;
export const ids = [151];
export const modules = {
  36090: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Dz,
      i: () => gz,
      k: () => oz,
      m: () => Nz,
      p: () => Hz,
      r: () => uz,
      t: () => Pz,
      w: () => wz,
      z: () => Bz
    });
    var Fz = sz(30),
      Wz = sz(34);
    const Xz = "clientGameInventoryButtonsChanged",
      Oz = new Map;

    function oz() {
      return [...Oz.values()].sort(((zz, tz) => {
        var sz, Fz;
        return (null !== (sz = zz.order) && void 0 !== sz ? sz : 0) - (null !== (Fz = tz.order) && void 0 !== Fz ? Fz : 0)
      }))
    }
    let vz = null;

    function Uz(zz) {
      vz = zz
    }
    let Kz = !1;

    function uz(zz) {
      Kz = !0;
      try {
        zz.onClick()
      } finally {
        Kz = !1
      }
      zz.panel && "clientGame" === Fz.b.get("openInGameMenuName") && Uz(zz.id)
    }

    function Nz() {
      return Kz
    }

    function bz() {
      return oz().filter((zz => zz.panel && !zz.disabled))
    }

    function wz(zz) {
      const tz = bz(),
        sz = tz.findIndex((zz => zz.id === vz));
      return !(sz < 0 || tz.length < 2) && (uz(tz[(sz + zz + tz.length) % tz.length]), !0)
    }

    function Dz() {
      return null !== vz && bz().length > 1
    }

    function gz() {
      Uz(null)
    }

    function Hz() {
      "inventory" !== Fz.b.get("openInGameMenuName") && Uz(null)
    }

    function Bz() {
      const zz = vz;
      return Uz(null), zz
    }

    function Pz(zz) {
      return Oz.set(zz.id, zz), Wz.o.Yg(Xz, oz(), !0), () => {
        Oz.get(zz.id) === zz && (Oz.delete(zz.id), Wz.o.Yg(Xz, oz()))
      }
    }
  },
  36086: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => gz,
      j: () => Hz,
      l: () => Nz,
      o: () => Uz,
      s: () => Dz,
      w: () => bz,
      x: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(36090);
    const oz = "clientGameUiChanged";
    let vz = null;

    function Uz() {
      return vz
    }

    function Kz(zz, tz) {
      const sz = {
        content: zz,
        menu: tz
      };
      return vz = sz, Wz.o.Yg(oz, vz, !0), () => {
        vz === sz && (vz = null, wz = !1, gz(), Wz.o.Yg(oz, null))
      }
    }
    let uz = null;

    function Nz() {
      return uz
    }

    function bz(zz) {
      return uz = zz, () => {
        uz === zz && (uz = null)
      }
    }
    let wz = !1;

    function Dz() {
      const zz = Fz.b.get("openInGameMenuName");
      "clientGame" !== zz && (wz = "inventory" === zz), (0, Oz.m)() || (0, Oz.i)(), (0, Xz.n)(Xz.c), Fz.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gz() {
      Bz(!1)
    }

    function Hz() {
      Bz(wz)
    }

    function Bz(zz) {
      "clientGame" === Fz.b.get("openInGameMenuName") && Fz.b.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, Oz.i)(), wz = !1
    }
  },
  8275: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(8279),
      Wz = sz(580),
      Xz = sz(133);

    function Oz(zz) {
      var tz, sz;
      if ((0, Wz.G)(zz)) return !0;
      const Oz = null !== (tz = null === (sz = Xz.r[Xz.t]) || void 0 === sz ? void 0 : sz.adConfig.showRewardedAds) && void 0 !== tz && tz;
      for (const Wz in zz) {
        const tz = zz[Wz];
        if (null !== tz && void 0 !== tz && tz.items)
          for (const zz in tz.items)
            if ((0, Fz.k)(tz.items[zz], Oz)) return !1
      }
      return !0
    }
  },
  41676: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      getClientGameMapKey: () => Fz.l,
      shopIsEmpty: () => Wz.b
    });
    var Fz = sz(36086),
      Wz = sz(8275)
  },
  8279: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return !zz.hidden && (tz || !zz.isRewardedAd)
    }

    function Wz(zz) {
      return "object" === typeof zz ? zz.option : zz
    }

    function Xz(zz, tz) {
      var sz;
      if ("dropdown" === (null === (sz = zz.userInput) || void 0 === sz ? void 0 : sz.type) && "object" === typeof zz.userInput.dropdownOptions[0]) {
        for (const sz of zz.userInput.dropdownOptions)
          if (Wz(sz) === tz) return "object" === typeof sz ? sz.cost : zz.cost;
        console.error("Didn't find matching option for dropdown item. Item:", zz, "input:", tz)
      }
      return zz.cost
    }

    function Oz(zz, tz, sz) {
      var Fz;
      const Wz = null !== (Fz = sz.excludedPlayers) && void 0 !== Fz ? Fz : [tz];
      return zz.filter((zz => !Wz.includes(zz)))
    }
    sz.d(tz, {
      b: () => Xz,
      e: () => Wz,
      i: () => Oz,
      k: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);