export const id = 11;
export const ids = [11];
export const modules = {
  37318: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU,
      e: () => gU,
      f: () => NU,
      h: () => YU
    });
    var cU = zU(34859),
      yU = zU(37325),
      QU = zU(37334),
      AU = zU(9282),
      FU = zU(1492),
      oU = zU(61),
      DU = zU(73),
      EU = zU(1305);

    function YU() {
      var UU;
      return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
        children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function NU(UU) {
      var XU;
      let {
        show: zU
      } = UU;
      (0, FU.j)(yU.d, (0, yU.o)());
      const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
      return (0, oU.useEffect)((() => {
        var UU;
        zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
      }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
        showing: zU,
        globallyUniqueKey: "clientGameMenu",
        children: null === DU || void 0 === DU ? void 0 : DU.content
      })
    }
    const IU = new Map,
      pU = new Set;

    function aU(UU, XU) {
      XU ? IU.set(UU, XU) : IU.delete(UU);
      for (const zU of pU) zU()
    }

    function tU(UU) {
      let {
        placement: XU = "bottom"
      } = UU;
      const zU = (0, oU.useRef)(null);
      return (0, oU.useLayoutEffect)((() => {
        const UU = zU.current;
        return aU(XU, UU), () => {
          IU.get(XU) === UU && aU(XU, null)
        }
      }), [XU]), (0, EU.jsx)("div", {
        ref: zU,
        id: `clientGameHud-${XU}`,
        style: {
          display: "contents"
        }
      })
    }

    function gU(UU) {
      let {
        children: XU,
        placement: zU = "bottom"
      } = UU;
      const [cU, yU] = (0, oU.useState)((() => {
        var UU;
        return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
      }));
      return (0, oU.useEffect)((() => {
        const UU = () => {
          var UU;
          yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
        };
        return pU.add(UU), UU(), () => {
          pU.delete(UU)
        }
      }), [zU]), cU ? (0, DU.createPortal)(XU, cU) : null
    }
  },
  34859: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(4977),
      yU = zU(4982);

    function QU(UU) {
      let {
        children: XU,
        showing: zU,
        globallyUniqueKey: QU,
        alwaysMountChildren: AU = !1,
        doGameplayStartStopOnShow: FU = !0,
        keepsMovement: oU = !1
      } = UU;
      return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
    }
  },
  5581: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1305);

    function AU(UU) {
      let {
        options: XU,
        value: zU,
        onChange: cU,
        ariaLabel: AU,
        className: FU,
        reselectable: oU = !1,
        keepsFocus: DU = !1,
        padTabs: EU
      } = UU;
      const YU = void 0 !== EU;
      return (0, QU.jsx)("div", {
        className: yU()("SegmentedToggle", FU),
        role: "group",
        "aria-label": AU,
        "data-pad-tabs": EU,
        children: XU.map((UU => {
          const XU = UU.value === zU;
          return (0, QU.jsx)("button", {
            type: "button",
            "aria-pressed": XU,
            "data-pad-tab": YU || void 0,
            "data-pad-selected": YU && XU ? "true" : void 0,
            "data-pad-default-focus": YU && XU || void 0,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: yU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: XU
            }),
            onMouseDown: DU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              XU && !oU || cU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  9282: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => yU
    });
    let cU = null;
    const yU = function(UU) {
        const XU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return cU = XU, () => {
          cU === XU && (cU = null)
        }
      },
      QU = () => {
        var UU;
        return null !== (UU = cU) && void 0 !== UU && UU.canCycle() ? cU.cycle : null
      }
  },
  37550: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      f: () => QU
    });
    const cU = new Map;

    function yU(UU) {
      var XU;
      return null === UU ? null : null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : null
    }

    function QU(UU, XU) {
      return cU.set(UU, XU), () => {
        cU.get(UU) === XU && cU.delete(UU)
      }
    }
  },
  37334: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => aU,
      l: () => tU,
      o: () => FU,
      r: () => NU,
      t: () => gU,
      v: () => YU,
      w: () => GU,
      x: () => pU,
      y: () => kU
    });
    var cU = zU(27),
      yU = zU(31);
    const QU = "clientGameInventoryButtonsChanged",
      AU = new Map;

    function FU() {
      return [...AU.values()].sort(((UU, XU) => {
        var zU, cU;
        return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
      }))
    }
    let oU = null;

    function DU(UU) {
      oU = UU
    }
    let EU = !1;

    function YU(UU) {
      EU = !0;
      try {
        UU.onClick()
      } finally {
        EU = !1
      }
      UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
    }

    function NU() {
      return EU
    }

    function IU() {
      return FU().filter((UU => UU.panel && !UU.disabled))
    }

    function pU(UU) {
      const XU = IU(),
        zU = XU.findIndex((UU => UU.id === oU));
      return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
    }

    function aU() {
      return null !== oU && IU().length > 1
    }

    function tU() {
      DU(null)
    }

    function gU() {
      "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
    }

    function kU() {
      const UU = oU;
      return DU(null), UU
    }

    function GU(UU) {
      return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
        AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
      }
    }
  },
  37325: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => kU,
      j: () => tU,
      l: () => gU,
      n: () => NU,
      o: () => DU,
      r: () => aU,
      t: () => IU,
      u: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(37334);
    const FU = "clientGameUiChanged";
    let oU = null;

    function DU() {
      return oU
    }

    function EU(UU, XU) {
      const zU = {
        content: UU,
        menu: XU
      };
      return oU = zU, yU.k.UY(FU, oU, !0), () => {
        oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
      }
    }
    let YU = null;

    function NU() {
      return YU
    }

    function IU(UU) {
      return YU = UU, () => {
        YU === UU && (YU = null)
      }
    }
    let pU = !1;

    function aU() {
      const UU = cU.e.get("openInGameMenuName");
      "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tU() {
      GU(!1)
    }

    function gU() {
      GU(pU)
    }

    function kU() {
      pU && GU(!1)
    }

    function GU(UU) {
      "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, AU.l)(), pU = !1
    }
  },
  39203: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => RU,
      B: () => WU,
      C: () => ZU,
      E: () => BU,
      G: () => NU,
      H: () => aU,
      J: () => gU,
      K: () => yU,
      b: () => EU,
      d: () => oU,
      h: () => GU,
      j: () => DU,
      m: () => FU,
      p: () => AU,
      r: () => QU,
      s: () => PU,
      w: () => IU
    });
    var cU = zU(9874);

    function yU(UU) {
      return Math.floor(UU).toLocaleString("en-US")
    }
    const QU = 2e3,
      AU = .005,
      FU = .001,
      oU = 2,
      DU = "Fluid Tank",
      EU = "Coolant Mixer",
      YU = 144;

    function NU(UU) {
      const XU = UU.split("|")[0];
      return (0, cU.o)(XU) ? XU === cU.e ? "cryo" : "water" : null
    }
    const IU = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      pU = 63;

    function aU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const zU = XU ? function(UU, XU, zU) {
        const cU = IU.findIndex((cU => {
          let [yU, QU, AU] = cU;
          return yU === UU && QU === XU && AU === zU
        }));
        return cU < 0 ? 0 : 1 << cU
      }(XU[0], XU[1], XU[2]) : 0;
      return "maker" === UU ? {
        kind: UU,
        faces: zU
      } : "user" === UU ? {
        kind: UU,
        faces: pU & ~zU
      } : {
        kind: UU,
        faces: pU
      }
    }

    function tU(UU) {
      return "pipe" === UU || "tank" === UU || "maker" === UU
    }

    function gU(UU, XU, zU) {
      return 0 !== (UU.faces & 1 << zU) && 0 !== (XU.faces & 1 << (1 ^ zU)) && (tU(UU.kind) || tU(XU.kind))
    }
    const kU = (UU, XU, zU, cU) => ({
        input: UU,
        inputAmount: cU,
        output: XU,
        outputAmount: zU
      }),
      GU = {
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
          recipes: [kU("Uranium Grit", "Uranium Pellet", 1, 12), kU("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [kU("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: YU,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function BU(UU, XU) {
      return 1e3 * (null !== XU && void 0 !== XU ? XU : 0) / UU.opMs
    }

    function ZU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const zU = BU(GU["Coolant Mixer"], YU) * XU;
      return UU <= 0 ? 0 : Math.ceil(UU / zU - 1e-9)
    }
    const RU = "baf2Water",
      PU = "baf2waterclose",
      WU = "baf2wateropen"
  },
  39200: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => dU,
      e: () => BU,
      g: () => GU
    });
    var cU = zU(9782),
      yU = zU(9808),
      QU = zU(9874),
      AU = zU(39203),
      FU = zU(9867);
    const oU = (0, AU.H)("pipe"),
      DU = (0, AU.H)("tank"),
      EU = (0, AU.H)("port"),
      YU = "Reactor Port";

    function NU(UU, XU, zU) {
      const cU = new Set([QU.i, QU.e, YU, ...XU, ...zU, ...UU ? [AU.j] : []]);
      return {
        makers: new Set(XU),
        roots: cU
      }
    }
    const IU = {
        water: NU(!0, ["Condenser"], ["Centrifuge", "Synthesizer", AU.b]),
        cryo: NU(!1, [AU.b], [])
      },
      pU = new Set([...IU.water.roots, ...IU.cryo.roots]),
      aU = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      tU = yU.h.map((UU => aU[UU])),
      gU = tU.map((UU => {
        let [XU, zU, cU] = UU;
        return AU.w.findIndex((UU => {
          let [yU, QU, AU] = UU;
          return yU === XU && QU === zU && AU === cU
        }))
      }));

    function kU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const zU = cU.h[UU],
        yU = null === zU || void 0 === zU ? void 0 : zU.meta.rootName,
        NU = IU[XU];
      if (!yU || !NU.roots.has(yU)) return null;
      if ((0, QU.o)(yU)) return (0, AU.G)(zU.name) === XU ? oU : null;
      if (yU === AU.j) return DU;
      if (yU === YU) return zU.name.endsWith("|Water") ? EU : null;
      const [pU, aU] = FU.e[(zU.meta.rot || 1) - 1];
      return (0, AU.H)(NU.makers.has(yU) ? "maker" : "user", [-pU, 0, -aU])
    }

    function GU(UU, XU, zU, yU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: FU
      } = IU[QU];
      return tU.some(((DU, EU) => {
        var YU, NU;
        let [IU, pU, aU] = DU;
        const tU = UU(XU + IU, zU + pU, yU + aU),
          GU = kU(tU, QU);
        return null !== GU && FU.has(null !== (YU = null === (NU = cU.h[tU]) || void 0 === NU ? void 0 : NU.meta.rootName) && void 0 !== YU ? YU : "") && !(0, AU.J)(oU, GU, gU[EU])
      }))
    }

    function BU(UU) {
      const XU = cU.h[UU];
      return XU ? (0, AU.G)(XU.name) : null
    }
    let ZU = null;

    function RU(UU) {
      if (!ZU) {
        ZU = new Map;
        for (const UU of ["water", "cryo"])
          for (let XU = 0; XU < 64; XU++)
            for (const zU of [!1, !0]) ZU.set((0, QU.r)(UU, XU, zU), {
              BI: UU,
              mask: XU,
              full: zU
            })
      }
      return ZU.get(UU)
    }
    const PU = new Map(Array.from({
      length: QU.m + 1
    }, ((UU, XU) => [(0, QU.s)(XU), XU])));

    function WU(UU, XU, zU, yU, QU, AU) {
      return tU.some(((FU, oU) => {
        var DU, EU, YU;
        let [NU, IU, pU] = FU;
        if (0 === (AU >> oU & 1)) return !1;
        const aU = null !== (DU = null === (EU = cU.h[UU(XU + NU, zU + IU, yU + pU)]) || void 0 === EU ? void 0 : EU.name) && void 0 !== DU ? DU : "",
          tU = RU(aU);
        return tU ? tU.BI === QU && tU.full : (null !== (YU = function(UU) {
          var XU;
          return null !== (XU = PU.get(UU)) && void 0 !== XU ? XU : null
        }(aU)) && void 0 !== YU ? YU : 0) > 0
      }))
    }
    class dU {
      constructor() {
        this.reshapeOffsets = tU
      }
      handles(UU) {
        return null !== BU(UU)
      }
      affects(UU) {
        var XU, zU;
        return pU.has(null !== (XU = null === (zU = cU.h[UU]) || void 0 === zU ? void 0 : zU.meta.rootName) && void 0 !== XU ? XU : "")
      }
      placedBy(UU) {
        var XU;
        return (null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta.rootName) === QU.e ? QU.i : null
      }
      shape(UU, XU, zU, yU, FU, DU) {
        var EU, YU, NU;
        const IU = null !== (EU = null === (YU = cU.h[FU]) || void 0 === YU ? void 0 : YU.name) && void 0 !== EU ? EU : "",
          pU = DU || IU !== QU.i ? null !== (NU = (0, AU.G)(IU)) && void 0 !== NU ? NU : "water" : function(UU, XU, zU, cU) {
            return tU.some(((yU, QU) => {
              let [FU, DU, EU] = yU;
              const YU = kU(UU(XU + FU, zU + DU, cU + EU), "cryo");
              return null !== YU && "port" !== YU.kind && (0, AU.J)(oU, YU, gU[QU])
            })) ? "cryo" : "water"
          }(UU, XU, zU, yU),
          aU = function(UU, XU, zU, cU) {
            let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              QU = 0;
            return tU.forEach(((FU, DU) => {
              let [EU, YU, NU] = FU;
              const IU = kU(UU(XU + EU, zU + YU, cU + NU), yU);
              IU && (0, AU.J)(oU, IU, gU[DU]) && (QU |= 1 << DU)
            })), QU
          }(UU, XU, zU, yU, pU),
          GU = DU ? function(UU) {
            var XU;
            return !0 === (null === (XU = RU(UU)) || void 0 === XU ? void 0 : XU.full)
          }(IU) : WU(UU, XU, zU, yU, pU, aU);
        return (0, cU.j)((0, QU.r)(pU, aU, GU))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);