export const id = 11;
export const ids = [11];
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
  4770: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(1089);

    function lz(zz) {
      let {
        options: uz,
        value: bz,
        onChange: Ez,
        ariaLabel: lz,
        className: Mz,
        reselectable: tz = !1,
        keepsFocus: Hz = !1
      } = zz;
      return (0, iz.jsx)("div", {
        className: nz()("SegmentedToggle", Mz),
        role: "group",
        "aria-label": lz,
        children: uz.map((zz => {
          const uz = zz.value === bz;
          return (0, iz.jsx)("button", {
            type: "button",
            "aria-pressed": uz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: nz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: uz
            }),
            onMouseDown: Hz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              uz && !tz || Ez(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
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
  36262: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    const Ez = new Map;

    function nz(zz) {
      var uz;
      return null === zz ? null : null !== (uz = Ez.get(zz)) && void 0 !== uz ? uz : null
    }

    function iz(zz, uz) {
      return Ez.set(zz, uz), () => {
        Ez.get(zz) === uz && Ez.delete(zz)
      }
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
  37819: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => rz,
      B: () => sz,
      D: () => dz,
      F: () => Rz,
      G: () => wz,
      I: () => nz,
      e: () => Oz,
      h: () => tz,
      l: () => fz,
      m: () => Hz,
      n: () => Mz,
      q: () => lz,
      s: () => iz,
      t: () => Nz,
      v: () => Fz,
      w: () => oz,
      x: () => vz
    });
    var Ez = bz(9160);

    function nz(zz) {
      return Math.floor(zz).toLocaleString("en-US")
    }
    const iz = 2e3,
      lz = .005,
      Mz = .001,
      tz = 2,
      Hz = "Fluid Tank",
      Oz = "Coolant Mixer",
      pz = 144;

    function dz(zz) {
      const uz = zz.split("|")[0];
      return (0, Ez.k)(uz) ? uz === Ez.b ? "cryo" : "water" : null
    }
    const Fz = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Zz = 63;

    function Rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const bz = uz ? function(zz, uz, bz) {
        const Ez = Fz.findIndex((Ez => {
          let [nz, iz, lz] = Ez;
          return nz === zz && iz === uz && lz === bz
        }));
        return Ez < 0 ? 0 : 1 << Ez
      }(uz[0], uz[1], uz[2]) : 0;
      return "maker" === zz ? {
        kind: zz,
        faces: bz
      } : "user" === zz ? {
        kind: zz,
        faces: Zz & ~bz
      } : {
        kind: zz,
        faces: Zz
      }
    }

    function Kz(zz) {
      return "pipe" === zz || "tank" === zz || "maker" === zz
    }

    function wz(zz, uz, bz) {
      return 0 !== (zz.faces & 1 << bz) && 0 !== (uz.faces & 1 << (1 ^ bz)) && (Kz(zz.kind) || Kz(uz.kind))
    }
    const Xz = (zz, uz, bz, Ez) => ({
        input: zz,
        inputAmount: Ez,
        output: uz,
        outputAmount: bz
      }),
      fz = {
        Condenser: {
          kind: "Condenser",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [],
          recipes: [],
          powerPerOp: 60,
          fluidMade: 12,
          couplable: !0,
          couplerSlot: 0
        },
        Centrifuge: {
          kind: "Centrifuge",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Xz("Uranium Grit", "Uranium Pellet", 1, 12), Xz("Spent Pellet", "Plutonium Pellet", 1, 4)],
          powerPerOp: 600,
          waterPerOp: 24
        },
        Synthesizer: {
          kind: "Synthesizer",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 120,
          waterPerOp: 12,
          synth: !0
        },
        "Coolant Mixer": {
          kind: "Coolant Mixer",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [],
          recipes: [Xz("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pz,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function sz(zz, uz) {
      return 1e3 * (null !== uz && void 0 !== uz ? uz : 0) / zz.opMs
    }

    function rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const bz = sz(fz["Coolant Mixer"], pz) * uz;
      return zz <= 0 ? 0 : Math.ceil(zz / bz - 1e-9)
    }
    const oz = "baf2Water",
      Nz = "baf2waterclose",
      vz = "baf2wateropen"
  },
  37817: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => xz,
      e: () => sz,
      g: () => fz
    });
    var Ez = bz(9078),
      nz = bz(9104),
      iz = bz(9160),
      lz = bz(37819),
      Mz = bz(9155);
    const tz = (0, lz.F)("pipe"),
      Hz = (0, lz.F)("tank"),
      Oz = (0, lz.F)("port"),
      pz = "Reactor Port";

    function dz(zz, uz, bz) {
      const Ez = new Set([iz.e, iz.b, pz, ...uz, ...bz, ...zz ? [lz.m] : []]);
      return {
        makers: new Set(uz),
        roots: Ez
      }
    }
    const Fz = {
        water: dz(!0, ["Condenser"], ["Centrifuge", "Synthesizer", lz.e]),
        cryo: dz(!1, [lz.e], [])
      },
      Zz = new Set([...Fz.water.roots, ...Fz.cryo.roots]),
      Rz = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Kz = nz.h.map((zz => Rz[zz])),
      wz = Kz.map((zz => {
        let [uz, bz, Ez] = zz;
        return lz.v.findIndex((zz => {
          let [nz, iz, lz] = zz;
          return nz === uz && iz === bz && lz === Ez
        }))
      }));

    function Xz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const bz = Ez.k[zz],
        nz = null === bz || void 0 === bz ? void 0 : bz.meta.rootName,
        dz = Fz[uz];
      if (!nz || !dz.roots.has(nz)) return null;
      if ((0, iz.k)(nz)) return (0, lz.D)(bz.name) === uz ? tz : null;
      if (nz === lz.m) return Hz;
      if (nz === pz) return bz.name.endsWith("|Water") ? Oz : null;
      const [Zz, Rz] = Mz.g[(bz.meta.rot || 1) - 1];
      return (0, lz.F)(dz.makers.has(nz) ? "maker" : "user", [-Zz, 0, -Rz])
    }

    function fz(zz, uz, bz, nz) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Mz
      } = Fz[iz];
      return Kz.some(((Hz, Oz) => {
        var pz, dz;
        let [Fz, Zz, Rz] = Hz;
        const Kz = zz(uz + Fz, bz + Zz, nz + Rz),
          fz = Xz(Kz, iz);
        return null !== fz && Mz.has(null !== (pz = null === (dz = Ez.k[Kz]) || void 0 === dz ? void 0 : dz.meta.rootName) && void 0 !== pz ? pz : "") && !(0, lz.G)(tz, fz, wz[Oz])
      }))
    }

    function sz(zz) {
      const uz = Ez.k[zz];
      return uz ? (0, lz.D)(uz.name) : null
    }
    let rz = null;

    function oz(zz) {
      if (!rz) {
        rz = new Map;
        for (const zz of ["water", "cryo"])
          for (let uz = 0; uz < 64; uz++)
            for (const bz of [!1, !0]) rz.set((0, iz.l)(zz, uz, bz), {
              hF: zz,
              mask: uz,
              full: bz
            })
      }
      return rz.get(zz)
    }
    const Nz = new Map(Array.from({
      length: iz.h + 1
    }, ((zz, uz) => [(0, iz.p)(uz), uz])));

    function vz(zz, uz, bz, nz, iz, lz) {
      return Kz.some(((Mz, tz) => {
        var Hz, Oz, pz;
        let [dz, Fz, Zz] = Mz;
        if (0 === (lz >> tz & 1)) return !1;
        const Rz = null !== (Hz = null === (Oz = Ez.k[zz(uz + dz, bz + Fz, nz + Zz)]) || void 0 === Oz ? void 0 : Oz.name) && void 0 !== Hz ? Hz : "",
          Kz = oz(Rz);
        return Kz ? Kz.hF === iz && Kz.full : (null !== (pz = function(zz) {
          var uz;
          return null !== (uz = Nz.get(zz)) && void 0 !== uz ? uz : null
        }(Rz)) && void 0 !== pz ? pz : 0) > 0
      }))
    }
    class xz {
      constructor() {
        this.reshapeOffsets = Kz
      }
      handles(zz) {
        return null !== sz(zz)
      }
      affects(zz) {
        var uz, bz;
        return Zz.has(null !== (uz = null === (bz = Ez.k[zz]) || void 0 === bz ? void 0 : bz.meta.rootName) && void 0 !== uz ? uz : "")
      }
      placedBy(zz) {
        var uz;
        return (null === (uz = Ez.k[zz]) || void 0 === uz ? void 0 : uz.meta.rootName) === iz.b ? iz.e : null
      }
      shape(zz, uz, bz, nz, Mz, Hz) {
        var Oz, pz, dz;
        const Fz = null !== (Oz = null === (pz = Ez.k[Mz]) || void 0 === pz ? void 0 : pz.name) && void 0 !== Oz ? Oz : "",
          Zz = Hz || Fz !== iz.e ? null !== (dz = (0, lz.D)(Fz)) && void 0 !== dz ? dz : "water" : function(zz, uz, bz, Ez) {
            return Kz.some(((nz, iz) => {
              let [Mz, Hz, Oz] = nz;
              const pz = Xz(zz(uz + Mz, bz + Hz, Ez + Oz), "cryo");
              return null !== pz && "port" !== pz.kind && (0, lz.G)(tz, pz, wz[iz])
            })) ? "cryo" : "water"
          }(zz, uz, bz, nz),
          Rz = function(zz, uz, bz, Ez) {
            let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              iz = 0;
            return Kz.forEach(((Mz, Hz) => {
              let [Oz, pz, dz] = Mz;
              const Fz = Xz(zz(uz + Oz, bz + pz, Ez + dz), nz);
              Fz && (0, lz.G)(tz, Fz, wz[Hz]) && (iz |= 1 << Hz)
            })), iz
          }(zz, uz, bz, nz, Zz),
          fz = Hz ? function(zz) {
            var uz;
            return !0 === (null === (uz = oz(zz)) || void 0 === uz ? void 0 : uz.full)
          }(Fz) : vz(zz, uz, bz, nz, Zz, Rz);
        return (0, Ez.l)((0, iz.l)(Zz, Rz, fz))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);