export const id = 11;
export const ids = [11];
export const modules = {
  36187: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => uU,
      e: () => CU,
      h: () => jU,
      l: () => GU
    });
    var tU = gU(8982),
      pU = gU(36191),
      EU = gU(36197),
      PU = gU(8340),
      TU = gU(1410),
      qU = gU(56),
      KU = gU(74),
      cU = gU(1090);

    function GU() {
      var UU;
      return (0, TU.h)(pU.e, (0, pU.t)()), (0, cU.jsx)(cU.Fragment, {
        children: null === (UU = (0, pU.t)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function jU(UU) {
      var RU;
      let {
        show: gU
      } = UU;
      (0, TU.h)(pU.e, (0, pU.t)());
      const KU = null === (RU = (0, pU.t)()) || void 0 === RU ? void 0 : RU.menu;
      return (0, qU.useEffect)((() => {
        var UU;
        gU || (null === KU || void 0 === KU || null === (UU = KU.onClose) || void 0 === UU || UU.call(KU), (0, EU.q)())
      }), [gU, KU]), (0, qU.useEffect)((() => gU ? (0, PU.f)(EU.w, EU.e) : void 0), [gU]), (0, cU.jsx)(tU.d, {
        showing: gU,
        globallyUniqueKey: "clientGameMenu",
        children: null === KU || void 0 === KU ? void 0 : KU.content
      })
    }

    function uU(UU) {
      let {
        placement: RU = "bottom"
      } = UU;
      return (0, cU.jsx)("div", {
        id: `clientGameHud-${RU}`,
        style: {
          display: "contents"
        }
      })
    }

    function CU(UU) {
      let {
        children: RU,
        placement: gU = "bottom"
      } = UU;
      const [tU, pU] = (0, qU.useState)(null);
      return (0, qU.useEffect)((() => {
        pU(document.getElementById(`clientGameHud-${gU}`))
      }), [gU]), tU ? (0, KU.createPortal)(RU, tU) : null
    }
  },
  8982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(4200),
      pU = gU(4206);

    function EU(UU) {
      let {
        children: RU,
        showing: gU,
        globallyUniqueKey: EU,
        alwaysMountChildren: PU = !1,
        doGameplayStartStopOnShow: TU = !0,
        keepsMovement: qU = !1
      } = UU;
      return (0, pU.e)(!0, gU, EU, qU), (0, tU.c)(TU, gU), gU || PU ? RU : null
    }
  },
  4693: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1090);

    function PU(UU) {
      let {
        options: RU,
        value: gU,
        onChange: tU,
        ariaLabel: PU,
        className: TU,
        reselectable: qU = !1,
        keepsFocus: KU = !1
      } = UU;
      return (0, EU.jsx)("div", {
        className: pU()("SegmentedToggle", TU),
        role: "group",
        "aria-label": PU,
        children: RU.map((UU => {
          const RU = UU.value === gU;
          return (0, EU.jsx)("button", {
            type: "button",
            "aria-pressed": RU,
            "aria-label": UU.ariaLabel,
            title: UU.ariaLabel,
            className: pU()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: RU
            }),
            onMouseDown: KU ? UU => {
              UU.preventDefault()
            } : void 0,
            onClick: () => {
              RU && !qU || tU(UU.value)
            },
            children: UU.label
          }, UU.value)
        }))
      })
    }
  },
  8340: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      f: () => pU
    });
    let tU = null;
    const pU = function(UU) {
        const RU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tU = RU, () => {
          tU === RU && (tU = null)
        }
      },
      EU = () => {
        var UU;
        return null !== (UU = tU) && void 0 !== UU && UU.canCycle() ? tU.cycle : null
      }
  },
  36373: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      h: () => EU
    });
    const tU = new Map;

    function pU(UU) {
      var RU;
      return null === UU ? null : null !== (RU = tU.get(UU)) && void 0 !== RU ? RU : null
    }

    function EU(UU, RU) {
      return tU.set(UU, RU), () => {
        tU.get(UU) === RU && tU.delete(UU)
      }
    }
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  37989: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => IU,
      D: () => wU,
      H: () => mU,
      L: () => xU,
      P: () => jU,
      T: () => hU,
      V: () => eU,
      Y: () => pU,
      e: () => cU,
      i: () => qU,
      l: () => fU,
      o: () => KU,
      r: () => TU,
      s: () => PU,
      w: () => EU,
      x: () => JU,
      z: () => uU
    });
    var tU = gU(9152);

    function pU(UU) {
      return Math.floor(UU).toLocaleString("en-US")
    }
    const EU = 2e3,
      PU = .005,
      TU = .001,
      qU = 2,
      KU = "Fluid Tank",
      cU = "Coolant Mixer",
      GU = 144;

    function jU(UU) {
      const RU = UU.split("|")[0];
      return (0, tU.h)(RU) ? RU === tU.d ? "cryo" : "water" : null
    }
    const uU = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      CU = 63;

    function hU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const gU = RU ? function(UU, RU, gU) {
        const tU = uU.findIndex((tU => {
          let [pU, EU, PU] = tU;
          return pU === UU && EU === RU && PU === gU
        }));
        return tU < 0 ? 0 : 1 << tU
      }(RU[0], RU[1], RU[2]) : 0;
      return "maker" === UU ? {
        kind: UU,
        faces: gU
      } : "user" === UU ? {
        kind: UU,
        faces: CU & ~gU
      } : {
        kind: UU,
        faces: CU
      }
    }

    function QU(UU) {
      return "pipe" === UU || "tank" === UU || "maker" === UU
    }

    function eU(UU, RU, gU) {
      return 0 !== (UU.faces & 1 << gU) && 0 !== (RU.faces & 1 << (1 ^ gU)) && (QU(UU.kind) || QU(RU.kind))
    }
    const WU = (UU, RU, gU, tU) => ({
        input: UU,
        inputAmount: tU,
        output: RU,
        outputAmount: gU
      }),
      fU = {
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
          recipes: [WU("Uranium Grit", "Uranium Pellet", 1, 12), WU("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [WU("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: GU,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function xU(UU, RU) {
      return 1e3 * (null !== RU && void 0 !== RU ? RU : 0) / UU.opMs
    }

    function mU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gU = xU(fU["Coolant Mixer"], GU) * RU;
      return UU <= 0 ? 0 : Math.ceil(UU / gU - 1e-9)
    }
    const IU = "baf2Water",
      JU = "baf2waterclose",
      wU = "baf2wateropen"
  },
  37985: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => nU,
      g: () => xU,
      k: () => fU
    });
    var tU = gU(9078),
      pU = gU(9101),
      EU = gU(9152),
      PU = gU(37989),
      TU = gU(9149);
    const qU = (0, PU.T)("pipe"),
      KU = (0, PU.T)("tank"),
      cU = (0, PU.T)("port"),
      GU = "Reactor Port";

    function jU(UU, RU, gU) {
      const tU = new Set([EU.f, EU.d, GU, ...RU, ...gU, ...UU ? [PU.o] : []]);
      return {
        makers: new Set(RU),
        roots: tU
      }
    }
    const uU = {
        water: jU(!0, ["Condenser"], ["Centrifuge", "Synthesizer", PU.e]),
        cryo: jU(!1, [PU.e], [])
      },
      CU = new Set([...uU.water.roots, ...uU.cryo.roots]),
      hU = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      QU = pU.c.map((UU => hU[UU])),
      eU = QU.map((UU => {
        let [RU, gU, tU] = UU;
        return PU.z.findIndex((UU => {
          let [pU, EU, PU] = UU;
          return pU === RU && EU === gU && PU === tU
        }))
      }));

    function WU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const gU = tU.f[UU],
        pU = null === gU || void 0 === gU ? void 0 : gU.meta.rootName,
        jU = uU[RU];
      if (!pU || !jU.roots.has(pU)) return null;
      if ((0, EU.h)(pU)) return (0, PU.P)(gU.name) === RU ? qU : null;
      if (pU === PU.o) return KU;
      if (pU === GU) return gU.name.endsWith("|Water") ? cU : null;
      const [CU, hU] = TU.g[(gU.meta.rot || 1) - 1];
      return (0, PU.T)(jU.makers.has(pU) ? "maker" : "user", [-CU, 0, -hU])
    }

    function fU(UU, RU, gU, pU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: TU
      } = uU[EU];
      return QU.some(((KU, cU) => {
        var GU, jU;
        let [uU, CU, hU] = KU;
        const QU = UU(RU + uU, gU + CU, pU + hU),
          fU = WU(QU, EU);
        return null !== fU && TU.has(null !== (GU = null === (jU = tU.f[QU]) || void 0 === jU ? void 0 : jU.meta.rootName) && void 0 !== GU ? GU : "") && !(0, PU.V)(qU, fU, eU[cU])
      }))
    }

    function xU(UU) {
      const RU = tU.f[UU];
      return RU ? (0, PU.P)(RU.name) : null
    }
    let mU = null;

    function IU(UU) {
      if (!mU) {
        mU = new Map;
        for (const UU of ["water", "cryo"])
          for (let RU = 0; RU < 64; RU++)
            for (const gU of [!1, !0]) mU.set((0, EU.j)(UU, RU, gU), {
              Nj: UU,
              mask: RU,
              full: gU
            })
      }
      return mU.get(UU)
    }
    const JU = new Map(Array.from({
      length: EU.g + 1
    }, ((UU, RU) => [(0, EU.k)(RU), RU])));

    function wU(UU, RU, gU, pU, EU, PU) {
      return QU.some(((TU, qU) => {
        var KU, cU, GU;
        let [jU, uU, CU] = TU;
        if (0 === (PU >> qU & 1)) return !1;
        const hU = null !== (KU = null === (cU = tU.f[UU(RU + jU, gU + uU, pU + CU)]) || void 0 === cU ? void 0 : cU.name) && void 0 !== KU ? KU : "",
          QU = IU(hU);
        return QU ? QU.Nj === EU && QU.full : (null !== (GU = function(UU) {
          var RU;
          return null !== (RU = JU.get(UU)) && void 0 !== RU ? RU : null
        }(hU)) && void 0 !== GU ? GU : 0) > 0
      }))
    }
    class nU {
      constructor() {
        this.reshapeOffsets = QU
      }
      handles(UU) {
        return null !== xU(UU)
      }
      affects(UU) {
        var RU, gU;
        return CU.has(null !== (RU = null === (gU = tU.f[UU]) || void 0 === gU ? void 0 : gU.meta.rootName) && void 0 !== RU ? RU : "")
      }
      placedBy(UU) {
        var RU;
        return (null === (RU = tU.f[UU]) || void 0 === RU ? void 0 : RU.meta.rootName) === EU.d ? EU.f : null
      }
      shape(UU, RU, gU, pU, TU, KU) {
        var cU, GU, jU;
        const uU = null !== (cU = null === (GU = tU.f[TU]) || void 0 === GU ? void 0 : GU.name) && void 0 !== cU ? cU : "",
          CU = KU || uU !== EU.f ? null !== (jU = (0, PU.P)(uU)) && void 0 !== jU ? jU : "water" : function(UU, RU, gU, tU) {
            return QU.some(((pU, EU) => {
              let [TU, KU, cU] = pU;
              const GU = WU(UU(RU + TU, gU + KU, tU + cU), "cryo");
              return null !== GU && "port" !== GU.kind && (0, PU.V)(qU, GU, eU[EU])
            })) ? "cryo" : "water"
          }(UU, RU, gU, pU),
          hU = function(UU, RU, gU, tU) {
            let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              EU = 0;
            return QU.forEach(((TU, KU) => {
              let [cU, GU, jU] = TU;
              const uU = WU(UU(RU + cU, gU + GU, tU + jU), pU);
              uU && (0, PU.V)(qU, uU, eU[KU]) && (EU |= 1 << KU)
            })), EU
          }(UU, RU, gU, pU, CU),
          fU = KU ? function(UU) {
            var RU;
            return !0 === (null === (RU = IU(UU)) || void 0 === RU ? void 0 : RU.full)
          }(uU) : wU(UU, RU, gU, pU, CU, hU);
        return (0, tU.i)((0, EU.j)(CU, hU, fU))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);