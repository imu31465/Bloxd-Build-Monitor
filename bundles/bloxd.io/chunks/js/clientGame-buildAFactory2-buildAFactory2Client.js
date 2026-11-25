export const id = 11;
export const ids = [11];
export const modules = {
  36946: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => QG,
      d: () => KG,
      g: () => fG,
      j: () => pG
    });
    var wG = ZG(34472),
      SG = ZG(36951),
      LG = ZG(36955),
      yG = ZG(8759),
      kG = ZG(1389),
      UG = ZG(51),
      YG = ZG(59),
      VG = ZG(1067);

    function pG() {
      var GG;
      return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
        children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
      })
    }

    function fG(GG) {
      var bG;
      let {
        show: ZG
      } = GG;
      (0, kG.j)(SG.c, (0, SG.l)());
      const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
      return (0, UG.useEffect)((() => {
        var GG;
        ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
      }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
        showing: ZG,
        globallyUniqueKey: "clientGameMenu",
        children: null === YG || void 0 === YG ? void 0 : YG.content
      })
    }

    function QG(GG) {
      let {
        placement: bG = "bottom"
      } = GG;
      return (0, VG.jsx)("div", {
        id: `clientGameHud-${bG}`,
        style: {
          display: "contents"
        }
      })
    }

    function KG(GG) {
      let {
        children: bG,
        placement: ZG = "bottom"
      } = GG;
      const [wG, SG] = (0, UG.useState)(null);
      return (0, UG.useEffect)((() => {
        SG(document.getElementById(`clientGameHud-${ZG}`))
      }), [ZG]), wG ? (0, YG.createPortal)(bG, wG) : null
    }
  },
  34472: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(4558),
      SG = ZG(4561);

    function LG(GG) {
      let {
        children: bG,
        showing: ZG,
        globallyUniqueKey: LG,
        alwaysMountChildren: yG = !1,
        doGameplayStartStopOnShow: kG = !0,
        keepsMovement: UG = !1
      } = GG;
      return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
    }
  },
  5039: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1067);

    function yG(GG) {
      let {
        options: bG,
        value: ZG,
        onChange: wG,
        ariaLabel: yG,
        className: kG,
        reselectable: UG = !1,
        keepsFocus: YG = !1,
        padTabs: VG
      } = GG;
      const pG = void 0 !== VG;
      return (0, LG.jsx)("div", {
        className: SG()("SegmentedToggle", kG),
        role: "group",
        "aria-label": yG,
        "data-pad-tabs": VG,
        children: bG.map((GG => {
          const bG = GG.value === ZG;
          return (0, LG.jsx)("button", {
            type: "button",
            "aria-pressed": bG,
            "data-pad-tab": pG || void 0,
            "data-pad-selected": pG && bG ? "true" : void 0,
            "data-pad-default-focus": pG && bG || void 0,
            "aria-label": GG.ariaLabel,
            title: GG.ariaLabel,
            className: SG()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: bG
            }),
            onMouseDown: YG ? GG => {
              GG.preventDefault()
            } : void 0,
            onClick: () => {
              bG && !UG || wG(GG.value)
            },
            children: GG.label
          }, GG.value)
        }))
      })
    }
  },
  8759: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = null;
    const SG = function(GG) {
        const bG = {
          cycle: GG,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wG = bG, () => {
          wG === bG && (wG = null)
        }
      },
      LG = () => {
        var GG;
        return null !== (GG = wG) && void 0 !== GG && GG.canCycle() ? wG.cycle : null
      }
  },
  37180: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      g: () => LG
    });
    const wG = new Map;

    function SG(GG) {
      var bG;
      return null === GG ? null : null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : null
    }

    function LG(GG, bG) {
      return wG.set(GG, bG), () => {
        wG.get(GG) === bG && wG.delete(GG)
      }
    }
  },
  38837: (GG, bG, ZG) => {
    ZG.d(bG, {
      D: () => fG,
      E: () => hG,
      I: () => JG,
      K: () => SG,
      d: () => VG,
      e: () => UG,
      f: () => zG,
      g: () => YG,
      j: () => kG,
      k: () => yG,
      m: () => LG,
      o: () => uG,
      p: () => QG,
      t: () => XG,
      x: () => iG,
      y: () => oG,
      z: () => EG
    });
    var wG = ZG(9341);

    function SG(GG) {
      return Math.floor(GG).toLocaleString("en-US")
    }
    const LG = 2e3,
      yG = .005,
      kG = .001,
      UG = 2,
      YG = "Fluid Tank",
      VG = "Coolant Mixer",
      pG = 144;

    function fG(GG) {
      const bG = GG.split("|")[0];
      return (0, wG.l)(bG) ? bG === wG.e ? "cryo" : "water" : null
    }
    const QG = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      KG = 63;

    function hG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ZG = bG ? function(GG, bG, ZG) {
        const wG = QG.findIndex((wG => {
          let [SG, LG, yG] = wG;
          return SG === GG && LG === bG && yG === ZG
        }));
        return wG < 0 ? 0 : 1 << wG
      }(bG[0], bG[1], bG[2]) : 0;
      return "maker" === GG ? {
        kind: GG,
        faces: ZG
      } : "user" === GG ? {
        kind: GG,
        faces: KG & ~ZG
      } : {
        kind: GG,
        faces: KG
      }
    }

    function dG(GG) {
      return "pipe" === GG || "tank" === GG || "maker" === GG
    }

    function JG(GG, bG, ZG) {
      return 0 !== (GG.faces & 1 << ZG) && 0 !== (bG.faces & 1 << (1 ^ ZG)) && (dG(GG.kind) || dG(bG.kind))
    }
    const rG = (GG, bG, ZG, wG) => ({
        input: GG,
        inputAmount: wG,
        output: bG,
        outputAmount: ZG
      }),
      zG = {
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
          recipes: [rG("Uranium Grit", "Uranium Pellet", 1, 12), rG("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [rG("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pG,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function EG(GG, bG) {
      return 1e3 * (null !== bG && void 0 !== bG ? bG : 0) / GG.opMs
    }

    function oG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZG = EG(zG["Coolant Mixer"], pG) * bG;
      return GG <= 0 ? 0 : Math.ceil(GG / ZG - 1e-9)
    }
    const XG = "baf2Water",
      uG = "baf2waterclose",
      iG = "baf2wateropen"
  },
  38829: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => CG,
      c: () => EG,
      g: () => zG
    });
    var wG = ZG(9249),
      SG = ZG(9280),
      LG = ZG(9341),
      yG = ZG(38837),
      kG = ZG(9334);
    const UG = (0, yG.E)("pipe"),
      YG = (0, yG.E)("tank"),
      VG = (0, yG.E)("port"),
      pG = "Reactor Port";

    function fG(GG, bG, ZG) {
      const wG = new Set([LG.f, LG.e, pG, ...bG, ...ZG, ...GG ? [yG.g] : []]);
      return {
        makers: new Set(bG),
        roots: wG
      }
    }
    const QG = {
        water: fG(!0, ["Condenser"], ["Centrifuge", "Synthesizer", yG.d]),
        cryo: fG(!1, [yG.d], [])
      },
      KG = new Set([...QG.water.roots, ...QG.cryo.roots]),
      hG = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      dG = SG.f.map((GG => hG[GG])),
      JG = dG.map((GG => {
        let [bG, ZG, wG] = GG;
        return yG.p.findIndex((GG => {
          let [SG, LG, yG] = GG;
          return SG === bG && LG === ZG && yG === wG
        }))
      }));

    function rG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ZG = wG.l[GG],
        SG = null === ZG || void 0 === ZG ? void 0 : ZG.meta.rootName,
        fG = QG[bG];
      if (!SG || !fG.roots.has(SG)) return null;
      if ((0, LG.l)(SG)) return (0, yG.D)(ZG.name) === bG ? UG : null;
      if (SG === yG.g) return YG;
      if (SG === pG) return ZG.name.endsWith("|Water") ? VG : null;
      const [KG, hG] = kG.e[(ZG.meta.rot || 1) - 1];
      return (0, yG.E)(fG.makers.has(SG) ? "maker" : "user", [-KG, 0, -hG])
    }

    function zG(GG, bG, ZG, SG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: kG
      } = QG[LG];
      return dG.some(((YG, VG) => {
        var pG, fG;
        let [QG, KG, hG] = YG;
        const dG = GG(bG + QG, ZG + KG, SG + hG),
          zG = rG(dG, LG);
        return null !== zG && kG.has(null !== (pG = null === (fG = wG.l[dG]) || void 0 === fG ? void 0 : fG.meta.rootName) && void 0 !== pG ? pG : "") && !(0, yG.I)(UG, zG, JG[VG])
      }))
    }

    function EG(GG) {
      const bG = wG.l[GG];
      return bG ? (0, yG.D)(bG.name) : null
    }
    let oG = null;

    function XG(GG) {
      if (!oG) {
        oG = new Map;
        for (const GG of ["water", "cryo"])
          for (let bG = 0; bG < 64; bG++)
            for (const ZG of [!1, !0]) oG.set((0, LG.m)(GG, bG, ZG), {
              UQ: GG,
              mask: bG,
              full: ZG
            })
      }
      return oG.get(GG)
    }
    const uG = new Map(Array.from({
      length: LG.j + 1
    }, ((GG, bG) => [(0, LG.q)(bG), bG])));

    function iG(GG, bG, ZG, SG, LG, yG) {
      return dG.some(((kG, UG) => {
        var YG, VG, pG;
        let [fG, QG, KG] = kG;
        if (0 === (yG >> UG & 1)) return !1;
        const hG = null !== (YG = null === (VG = wG.l[GG(bG + fG, ZG + QG, SG + KG)]) || void 0 === VG ? void 0 : VG.name) && void 0 !== YG ? YG : "",
          dG = XG(hG);
        return dG ? dG.UQ === LG && dG.full : (null !== (pG = function(GG) {
          var bG;
          return null !== (bG = uG.get(GG)) && void 0 !== bG ? bG : null
        }(hG)) && void 0 !== pG ? pG : 0) > 0
      }))
    }
    class CG {
      constructor() {
        this.reshapeOffsets = dG
      }
      handles(GG) {
        return null !== EG(GG)
      }
      affects(GG) {
        var bG, ZG;
        return KG.has(null !== (bG = null === (ZG = wG.l[GG]) || void 0 === ZG ? void 0 : ZG.meta.rootName) && void 0 !== bG ? bG : "")
      }
      placedBy(GG) {
        var bG;
        return (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta.rootName) === LG.e ? LG.f : null
      }
      shape(GG, bG, ZG, SG, kG, YG) {
        var VG, pG, fG;
        const QG = null !== (VG = null === (pG = wG.l[kG]) || void 0 === pG ? void 0 : pG.name) && void 0 !== VG ? VG : "",
          KG = YG || QG !== LG.f ? null !== (fG = (0, yG.D)(QG)) && void 0 !== fG ? fG : "water" : function(GG, bG, ZG, wG) {
            return dG.some(((SG, LG) => {
              let [kG, YG, VG] = SG;
              const pG = rG(GG(bG + kG, ZG + YG, wG + VG), "cryo");
              return null !== pG && "port" !== pG.kind && (0, yG.I)(UG, pG, JG[LG])
            })) ? "cryo" : "water"
          }(GG, bG, ZG, SG),
          hG = function(GG, bG, ZG, wG) {
            let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              LG = 0;
            return dG.forEach(((kG, YG) => {
              let [VG, pG, fG] = kG;
              const QG = rG(GG(bG + VG, ZG + pG, wG + fG), SG);
              QG && (0, yG.I)(UG, QG, JG[YG]) && (LG |= 1 << YG)
            })), LG
          }(GG, bG, ZG, SG, KG),
          zG = YG ? function(GG) {
            var bG;
            return !0 === (null === (bG = XG(GG)) || void 0 === bG ? void 0 : bG.full)
          }(QG) : iG(GG, bG, ZG, SG, KG, hG);
        return (0, wG.p)((0, LG.m)(KG, hG, zG))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);