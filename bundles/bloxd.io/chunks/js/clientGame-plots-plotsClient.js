export const id = 22;
export const ids = [22];
export const modules = {
  36078: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => bz,
      e: () => wz,
      g: () => Nz,
      h: () => uz
    });
    var Fz = sz(8843),
      Wz = sz(36086),
      Xz = sz(36090),
      Oz = sz(8238),
      oz = sz(1416),
      vz = sz(65),
      Uz = sz(78),
      Kz = sz(1087);

    function uz() {
      var zz;
      return (0, oz.h)(Wz.e, (0, Wz.o)()), (0, Kz.jsx)(Kz.Fragment, {
        children: null === (zz = (0, Wz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function Nz(zz) {
      var tz;
      let {
        show: sz
      } = zz;
      (0, oz.h)(Wz.e, (0, Wz.o)());
      const Uz = null === (tz = (0, Wz.o)()) || void 0 === tz ? void 0 : tz.menu;
      return (0, vz.useEffect)((() => {
        var zz;
        sz || (null === Uz || void 0 === Uz || null === (zz = Uz.onClose) || void 0 === zz || zz.call(Uz), (0, Xz.p)())
      }), [sz, Uz]), (0, vz.useEffect)((() => sz ? (0, Oz.f)(Xz.w, Xz.e) : void 0), [sz]), (0, Kz.jsx)(Fz.c, {
        showing: sz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Uz || void 0 === Uz ? void 0 : Uz.content
      })
    }

    function bz(zz) {
      let {
        placement: tz = "bottom"
      } = zz;
      return (0, Kz.jsx)("div", {
        id: `clientGameHud-${tz}`,
        style: {
          display: "contents"
        }
      })
    }

    function wz(zz) {
      let {
        children: tz,
        placement: sz = "bottom"
      } = zz;
      const [Fz, Wz] = (0, vz.useState)(null);
      return (0, vz.useEffect)((() => {
        Wz(document.getElementById(`clientGameHud-${sz}`))
      }), [sz]), Fz ? (0, Uz.createPortal)(tz, Fz) : null
    }
  },
  8843: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(4178),
      Wz = sz(4180);

    function Xz(zz) {
      let {
        children: tz,
        showing: sz,
        globallyUniqueKey: Xz,
        alwaysMountChildren: Oz = !1,
        doGameplayStartStopOnShow: oz = !0,
        keepsMovement: vz = !1
      } = zz;
      return (0, Wz.b)(!0, sz, Xz, vz), (0, Fz.e)(oz, sz), sz || Oz ? tz : null
    }
  },
  36169: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Oz,
      j: () => oz,
      k: () => vz
    });
    var Fz = sz(65),
      Wz = sz(1113);
    const Xz = 8,
      Oz = "InGameHeaderContainer",
      oz = "TopRightElements";

    function vz(zz) {
      const [tz] = (0, Wz.c)(), [sz, vz] = (0, Fz.useState)(!1);
      return (0, Fz.useLayoutEffect)((() => {
        if (!zz) return;
        const tz = document.querySelector(`.${Oz}`),
          sz = document.querySelector(`.${oz}`),
          Fz = () => {
            const Fz = zz.getBoundingClientRect(),
              Wz = tz ? tz.getBoundingClientRect().right : 0,
              Oz = sz ? sz.getBoundingClientRect().left : window.innerWidth,
              oz = Fz.left < Wz + Xz,
              Uz = Fz.right > Oz - Xz;
            vz(oz || Uz)
          };
        Fz();
        const Wz = new ResizeObserver(Fz);
        return Wz.observe(zz), tz && Wz.observe(tz), sz && Wz.observe(sz), () => {
          Wz.disconnect()
        }
      }), [zz, tz]), sz
    }
  },
  8238: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      f: () => Wz
    });
    let Fz = null;
    const Wz = function(zz) {
        const tz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Fz = tz, () => {
          Fz === tz && (Fz = null)
        }
      },
      Xz = () => {
        var zz;
        return null !== (zz = Fz) && void 0 !== zz && zz.canCycle() ? Fz.cycle : null
      }
  },
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
  37942: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      h: () => oz,
      j: () => vz
    });
    const Fz = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Wz = [0, 1, 2, 0, 2, 3],
      Xz = [4, 5];

    function Oz(zz, tz, sz, Fz, Wz) {
      for (let Oz = 0; Oz < 6; Oz++) Xz.includes(Oz) === Wz && Uz(zz, tz, sz, Fz, Oz)
    }

    function oz(zz, tz, sz, Fz) {
      for (let Wz = 0; Wz < 6; Wz++) Uz(zz, tz, sz, Fz, Wz)
    }

    function vz(zz, tz, sz, Xz, Oz) {
      for (let oz = 0; oz < 6; oz++)
        for (const vz of [0, 1]) {
          const [Uz, Kz, uz] = [vz + 2, vz + 1, (vz + 3) % 4], Nz = zz.length / 3;
          for (const [tz, Wz] of [
              [vz, Kz],
              [Uz, Kz],
              [Uz, uz],
              [vz, uz]
            ])
            for (let vz = 0; vz < 3; vz++) {
              const Uz = Fz[3 * (4 * oz + tz) + vz],
                Kz = Fz[3 * (4 * oz + Wz) + vz];
              zz.push((Uz + (Kz - Uz) * Oz) * Xz / 2 + sz[vz])
            }
          for (const zz of Wz) tz.push(Nz + zz)
        }
    }

    function Uz(zz, tz, sz, Xz, Oz) {
      let [oz, vz, Uz] = sz, [Kz, uz, Nz] = Xz;
      const bz = zz.length / 3;
      for (let Wz = 4 * Oz; Wz < 4 * Oz + 4; Wz++) zz.push(Fz[3 * Wz] * Kz / 2 + oz, Fz[3 * Wz + 1] * uz / 2 + vz, Fz[3 * Wz + 2] * Nz / 2 + Uz);
      for (const Fz of Wz) tz.push(bz + Fz)
    }
  },
  36311: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return null === zz || null === tz ? zz === tz : zz[0] === tz[0] && zz[1] === tz[1] && zz[2] === tz[2]
    }

    function Wz(zz) {
      return [zz[0] + .5, zz[1] + .5, zz[2] + .5]
    }
    sz.d(tz, {
      c: () => Wz,
      e: () => Fz
    })
  },
  36339: (zz, tz, sz) => {
    function Fz(zz) {
      return zz.includes("Leaf Bed")
    }

    function Wz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Fz(zz)
    }

    function Xz(zz) {
      return zz.includes(" Strongbed")
    }

    function Oz(zz) {
      return Fz(zz) || Wz(zz) || Xz(zz)
    }
    sz.d(tz, {
      e: () => Oz,
      i: () => Fz,
      l: () => Xz,
      m: () => Wz
    })
  },
  36336: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz
    });
    var Fz = sz(36339),
      Wz = sz(8940);
    const Xz = [],
      Oz = [],
      oz = [],
      vz = [];
    for (const Kz of Object.keys(Wz.l))(0, Fz.i)(Kz) ? Xz.push(Kz) : (0, Fz.m)(Kz) && Oz.push(Kz), (0, Fz.l)(Kz) && oz.push(Kz), (Kz.includes(" Bed Head") || Kz.includes(" Strongbed Head")) && vz.push(Kz);
    const Uz = {
      leafBeds: Xz,
      woolBeds: Oz,
      strongBeds: oz,
      beds: [...Xz, ...Oz, ...oz],
      bedHeads: vz,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);