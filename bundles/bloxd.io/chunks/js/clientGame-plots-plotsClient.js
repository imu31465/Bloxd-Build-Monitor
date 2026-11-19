export const id = 22;
export const ids = [22];
export const modules = {
  36066: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz,
      d: () => Zz,
      g: () => dz,
      h: () => pz
    });
    var Ez = bz(8982),
      nz = bz(36071),
      iz = bz(36080),
      lz = bz(8378),
      Mz = bz(1417),
      tz = bz(56),
      Hz = bz(79),
      Oz = bz(1089);

    function pz() {
      var zz;
      return (0, Mz.h)(nz.e, (0, nz.o)()), (0, Oz.jsx)(Oz.Fragment, {
        children: null === (zz = (0, nz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function dz(zz) {
      var uz;
      let {
        show: bz
      } = zz;
      (0, Mz.h)(nz.e, (0, nz.o)());
      const Hz = null === (uz = (0, nz.o)()) || void 0 === uz ? void 0 : uz.menu;
      return (0, tz.useEffect)((() => {
        var zz;
        bz || (null === Hz || void 0 === Hz || null === (zz = Hz.onClose) || void 0 === zz || zz.call(Hz), (0, iz.j)())
      }), [bz, Hz]), (0, tz.useEffect)((() => bz ? (0, lz.e)(iz.u, iz.d) : void 0), [bz]), (0, Oz.jsx)(Ez.d, {
        showing: bz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hz || void 0 === Hz ? void 0 : Hz.content
      })
    }

    function Fz(zz) {
      let {
        placement: uz = "bottom"
      } = zz;
      return (0, Oz.jsx)("div", {
        id: `clientGameHud-${uz}`,
        style: {
          display: "contents"
        }
      })
    }

    function Zz(zz) {
      let {
        children: uz,
        placement: bz = "bottom"
      } = zz;
      const [Ez, nz] = (0, tz.useState)(null);
      return (0, tz.useEffect)((() => {
        nz(document.getElementById(`clientGameHud-${bz}`))
      }), [bz]), Ez ? (0, Hz.createPortal)(uz, Ez) : null
    }
  },
  8982: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(4298),
      nz = bz(4300);

    function iz(zz) {
      let {
        children: uz,
        showing: bz,
        globallyUniqueKey: iz,
        alwaysMountChildren: lz = !1,
        doGameplayStartStopOnShow: Mz = !0,
        keepsMovement: tz = !1
      } = zz;
      return (0, nz.e)(!0, bz, iz, tz), (0, Ez.d)(Mz, bz), bz || lz ? uz : null
    }
  },
  36162: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      d: () => lz,
      g: () => Mz,
      j: () => tz
    });
    var Ez = bz(56),
      nz = bz(1108);
    const iz = 8,
      lz = "InGameHeaderContainer",
      Mz = "TopRightElements";

    function tz(zz) {
      const [uz] = (0, nz.b)(), [bz, tz] = (0, Ez.useState)(!1);
      return (0, Ez.useLayoutEffect)((() => {
        if (!zz) return;
        const uz = document.querySelector(`.${lz}`),
          bz = document.querySelector(`.${Mz}`),
          Ez = () => {
            const Ez = zz.getBoundingClientRect(),
              nz = uz ? uz.getBoundingClientRect().right : 0,
              lz = bz ? bz.getBoundingClientRect().left : window.innerWidth,
              Mz = Ez.left < nz + iz,
              Hz = Ez.right > lz - iz;
            tz(Mz || Hz)
          };
        Ez();
        const nz = new ResizeObserver(Ez);
        return nz.observe(zz), uz && nz.observe(uz), bz && nz.observe(bz), () => {
          nz.disconnect()
        }
      }), [zz, uz]), bz
    }
  },
  8378: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      e: () => nz
    });
    let Ez = null;
    const nz = function(zz) {
        const uz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ez = uz, () => {
          Ez === uz && (Ez = null)
        }
      },
      iz = () => {
        var zz;
        return null !== (zz = Ez) && void 0 !== zz && zz.canCycle() ? Ez.cycle : null
      }
  },
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
  37901: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      e: () => Mz,
      h: () => tz
    });
    const Ez = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      nz = [0, 1, 2, 0, 2, 3],
      iz = [4, 5];

    function lz(zz, uz, bz, Ez, nz) {
      for (let lz = 0; lz < 6; lz++) iz.includes(lz) === nz && Hz(zz, uz, bz, Ez, lz)
    }

    function Mz(zz, uz, bz, Ez) {
      for (let nz = 0; nz < 6; nz++) Hz(zz, uz, bz, Ez, nz)
    }

    function tz(zz, uz, bz, iz, lz) {
      for (let Mz = 0; Mz < 6; Mz++)
        for (const tz of [0, 1]) {
          const [Hz, Oz, pz] = [tz + 2, tz + 1, (tz + 3) % 4], dz = zz.length / 3;
          for (const [uz, nz] of [
              [tz, Oz],
              [Hz, Oz],
              [Hz, pz],
              [tz, pz]
            ])
            for (let tz = 0; tz < 3; tz++) {
              const Hz = Ez[3 * (4 * Mz + uz) + tz],
                Oz = Ez[3 * (4 * Mz + nz) + tz];
              zz.push((Hz + (Oz - Hz) * lz) * iz / 2 + bz[tz])
            }
          for (const zz of nz) uz.push(dz + zz)
        }
    }

    function Hz(zz, uz, bz, iz, lz) {
      let [Mz, tz, Hz] = bz, [Oz, pz, dz] = iz;
      const Fz = zz.length / 3;
      for (let nz = 4 * lz; nz < 4 * lz + 4; nz++) zz.push(Ez[3 * nz] * Oz / 2 + Mz, Ez[3 * nz + 1] * pz / 2 + tz, Ez[3 * nz + 2] * dz / 2 + Hz);
      for (const Ez of nz) uz.push(Fz + Ez)
    }
  },
  36328: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return null === zz || null === uz ? zz === uz : zz[0] === uz[0] && zz[1] === uz[1] && zz[2] === uz[2]
    }

    function nz(zz) {
      return [zz[0] + .5, zz[1] + .5, zz[2] + .5]
    }
    bz.d(uz, {
      d: () => nz,
      e: () => Ez
    })
  },
  36365: (zz, uz, bz) => {
    function Ez(zz) {
      return zz.includes("Leaf Bed")
    }

    function nz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Ez(zz)
    }

    function iz(zz) {
      return zz.includes(" Strongbed")
    }

    function lz(zz) {
      return Ez(zz) || nz(zz) || iz(zz)
    }
    bz.d(uz, {
      e: () => lz,
      g: () => Ez,
      j: () => iz,
      k: () => nz
    })
  },
  36363: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz
    });
    var Ez = bz(36365),
      nz = bz(9078);
    const iz = [],
      lz = [],
      Mz = [],
      tz = [];
    for (const Oz of Object.keys(nz.p))(0, Ez.g)(Oz) ? iz.push(Oz) : (0, Ez.k)(Oz) && lz.push(Oz), (0, Ez.j)(Oz) && Mz.push(Oz), (Oz.includes(" Bed Head") || Oz.includes(" Strongbed Head")) && tz.push(Oz);
    const Hz = {
      leafBeds: iz,
      woolBeds: lz,
      strongBeds: Mz,
      beds: [...iz, ...lz, ...Mz],
      bedHeads: tz,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);