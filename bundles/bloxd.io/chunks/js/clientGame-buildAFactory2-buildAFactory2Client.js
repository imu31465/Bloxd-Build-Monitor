export const id = 11;
export const ids = [11];
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
  4636: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(1087);

    function Oz(zz) {
      let {
        options: tz,
        value: sz,
        onChange: Fz,
        ariaLabel: Oz,
        className: oz,
        reselectable: vz = !1,
        keepsFocus: Uz = !1
      } = zz;
      return (0, Xz.jsx)("div", {
        className: Wz()("SegmentedToggle", oz),
        role: "group",
        "aria-label": Oz,
        children: tz.map((zz => {
          const tz = zz.value === sz;
          return (0, Xz.jsx)("button", {
            type: "button",
            "aria-pressed": tz,
            "aria-label": zz.ariaLabel,
            title: zz.ariaLabel,
            className: Wz()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: tz
            }),
            onMouseDown: Uz ? zz => {
              zz.preventDefault()
            } : void 0,
            onClick: () => {
              tz && !vz || Fz(zz.value)
            },
            children: zz.label
          }, zz.value)
        }))
      })
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
  36252: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      g: () => Xz
    });
    const Fz = new Map;

    function Wz(zz) {
      var tz;
      return null === zz ? null : null !== (tz = Fz.get(zz)) && void 0 !== tz ? tz : null
    }

    function Xz(zz, tz) {
      return Fz.set(zz, tz), () => {
        Fz.get(zz) === tz && Fz.delete(zz)
      }
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
  37849: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Jz,
      D: () => Yz,
      E: () => rz,
      I: () => Nz,
      J: () => Dz,
      M: () => Hz,
      N: () => Wz,
      c: () => Kz,
      g: () => vz,
      i: () => Pz,
      k: () => Uz,
      m: () => oz,
      n: () => Oz,
      q: () => Xz,
      u: () => mz,
      w: () => bz,
      z: () => xz
    });
    var Fz = sz(9014);

    function Wz(zz) {
      return Math.floor(zz).toLocaleString("en-US")
    }
    const Xz = 2e3,
      Oz = .005,
      oz = .001,
      vz = 2,
      Uz = "Fluid Tank",
      Kz = "Coolant Mixer",
      uz = 144;

    function Nz(zz) {
      const tz = zz.split("|")[0];
      return (0, Fz.k)(tz) ? tz === Fz.c ? "cryo" : "water" : null
    }
    const bz = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      wz = 63;

    function Dz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const sz = tz ? function(zz, tz, sz) {
        const Fz = bz.findIndex((Fz => {
          let [Wz, Xz, Oz] = Fz;
          return Wz === zz && Xz === tz && Oz === sz
        }));
        return Fz < 0 ? 0 : 1 << Fz
      }(tz[0], tz[1], tz[2]) : 0;
      return "maker" === zz ? {
        kind: zz,
        faces: sz
      } : "user" === zz ? {
        kind: zz,
        faces: wz & ~sz
      } : {
        kind: zz,
        faces: wz
      }
    }

    function gz(zz) {
      return "pipe" === zz || "tank" === zz || "maker" === zz
    }

    function Hz(zz, tz, sz) {
      return 0 !== (zz.faces & 1 << sz) && 0 !== (tz.faces & 1 << (1 ^ sz)) && (gz(zz.kind) || gz(tz.kind))
    }
    const Bz = (zz, tz, sz, Fz) => ({
        input: zz,
        inputAmount: Fz,
        output: tz,
        outputAmount: sz
      }),
      Pz = {
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
          recipes: [Bz("Uranium Grit", "Uranium Pellet", 1, 12), Bz("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Bz("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: uz,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function rz(zz, tz) {
      return 1e3 * (null !== tz && void 0 !== tz ? tz : 0) / zz.opMs
    }

    function Yz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const sz = rz(Pz["Coolant Mixer"], uz) * tz;
      return zz <= 0 ? 0 : Math.ceil(zz / sz - 1e-9)
    }
    const xz = "baf2Water",
      mz = "baf2waterclose",
      Jz = "baf2wateropen"
  },
  37840: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Iz,
      d: () => rz,
      g: () => Pz
    });
    var Fz = sz(8940),
      Wz = sz(8960),
      Xz = sz(9014),
      Oz = sz(37849),
      oz = sz(9009);
    const vz = (0, Oz.J)("pipe"),
      Uz = (0, Oz.J)("tank"),
      Kz = (0, Oz.J)("port"),
      uz = "Reactor Port";

    function Nz(zz, tz, sz) {
      const Fz = new Set([Xz.d, Xz.c, uz, ...tz, ...sz, ...zz ? [Oz.k] : []]);
      return {
        makers: new Set(tz),
        roots: Fz
      }
    }
    const bz = {
        water: Nz(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Oz.c]),
        cryo: Nz(!1, [Oz.c], [])
      },
      wz = new Set([...bz.water.roots, ...bz.cryo.roots]),
      Dz = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      gz = Wz.f.map((zz => Dz[zz])),
      Hz = gz.map((zz => {
        let [tz, sz, Fz] = zz;
        return Oz.w.findIndex((zz => {
          let [Wz, Xz, Oz] = zz;
          return Wz === tz && Xz === sz && Oz === Fz
        }))
      }));

    function Bz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const sz = Fz.j[zz],
        Wz = null === sz || void 0 === sz ? void 0 : sz.meta.rootName,
        Nz = bz[tz];
      if (!Wz || !Nz.roots.has(Wz)) return null;
      if ((0, Xz.k)(Wz)) return (0, Oz.I)(sz.name) === tz ? vz : null;
      if (Wz === Oz.k) return Uz;
      if (Wz === uz) return sz.name.endsWith("|Water") ? Kz : null;
      const [wz, Dz] = oz.f[(sz.meta.rot || 1) - 1];
      return (0, Oz.J)(Nz.makers.has(Wz) ? "maker" : "user", [-wz, 0, -Dz])
    }

    function Pz(zz, tz, sz, Wz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: oz
      } = bz[Xz];
      return gz.some(((Uz, Kz) => {
        var uz, Nz;
        let [bz, wz, Dz] = Uz;
        const gz = zz(tz + bz, sz + wz, Wz + Dz),
          Pz = Bz(gz, Xz);
        return null !== Pz && oz.has(null !== (uz = null === (Nz = Fz.j[gz]) || void 0 === Nz ? void 0 : Nz.meta.rootName) && void 0 !== uz ? uz : "") && !(0, Oz.M)(vz, Pz, Hz[Kz])
      }))
    }

    function rz(zz) {
      const tz = Fz.j[zz];
      return tz ? (0, Oz.I)(tz.name) : null
    }
    let Yz = null;

    function xz(zz) {
      if (!Yz) {
        Yz = new Map;
        for (const zz of ["water", "cryo"])
          for (let tz = 0; tz < 64; tz++)
            for (const sz of [!1, !0]) Yz.set((0, Xz.m)(zz, tz, sz), {
              cb: zz,
              mask: tz,
              full: sz
            })
      }
      return Yz.get(zz)
    }
    const mz = new Map(Array.from({
      length: Xz.h + 1
    }, ((zz, tz) => [(0, Xz.p)(tz), tz])));

    function Jz(zz, tz, sz, Wz, Xz, Oz) {
      return gz.some(((oz, vz) => {
        var Uz, Kz, uz;
        let [Nz, bz, wz] = oz;
        if (0 === (Oz >> vz & 1)) return !1;
        const Dz = null !== (Uz = null === (Kz = Fz.j[zz(tz + Nz, sz + bz, Wz + wz)]) || void 0 === Kz ? void 0 : Kz.name) && void 0 !== Uz ? Uz : "",
          gz = xz(Dz);
        return gz ? gz.cb === Xz && gz.full : (null !== (uz = function(zz) {
          var tz;
          return null !== (tz = mz.get(zz)) && void 0 !== tz ? tz : null
        }(Dz)) && void 0 !== uz ? uz : 0) > 0
      }))
    }
    class Iz {
      constructor() {
        this.reshapeOffsets = gz
      }
      handles(zz) {
        return null !== rz(zz)
      }
      affects(zz) {
        var tz, sz;
        return wz.has(null !== (tz = null === (sz = Fz.j[zz]) || void 0 === sz ? void 0 : sz.meta.rootName) && void 0 !== tz ? tz : "")
      }
      placedBy(zz) {
        var tz;
        return (null === (tz = Fz.j[zz]) || void 0 === tz ? void 0 : tz.meta.rootName) === Xz.c ? Xz.d : null
      }
      shape(zz, tz, sz, Wz, oz, Uz) {
        var Kz, uz, Nz;
        const bz = null !== (Kz = null === (uz = Fz.j[oz]) || void 0 === uz ? void 0 : uz.name) && void 0 !== Kz ? Kz : "",
          wz = Uz || bz !== Xz.d ? null !== (Nz = (0, Oz.I)(bz)) && void 0 !== Nz ? Nz : "water" : function(zz, tz, sz, Fz) {
            return gz.some(((Wz, Xz) => {
              let [oz, Uz, Kz] = Wz;
              const uz = Bz(zz(tz + oz, sz + Uz, Fz + Kz), "cryo");
              return null !== uz && "port" !== uz.kind && (0, Oz.M)(vz, uz, Hz[Xz])
            })) ? "cryo" : "water"
          }(zz, tz, sz, Wz),
          Dz = function(zz, tz, sz, Fz) {
            let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Xz = 0;
            return gz.forEach(((oz, Uz) => {
              let [Kz, uz, Nz] = oz;
              const bz = Bz(zz(tz + Kz, sz + uz, Fz + Nz), Wz);
              bz && (0, Oz.M)(vz, bz, Hz[Uz]) && (Xz |= 1 << Uz)
            })), Xz
          }(zz, tz, sz, Wz, wz),
          Pz = Uz ? function(zz) {
            var tz;
            return !0 === (null === (tz = xz(zz)) || void 0 === tz ? void 0 : tz.full)
          }(bz) : Jz(zz, tz, sz, Wz, wz, Dz);
        return (0, Fz.k)((0, Xz.m)(wz, Dz, Pz))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);