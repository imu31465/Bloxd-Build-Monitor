export const id = 11;
export const ids = [11];
export const modules = {
  37472: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH,
      e: () => MH,
      i: () => GH,
      k: () => XH
    });
    var AH = LH(34986),
      rH = LH(37474),
      SH = LH(37479),
      hH = LH(9412),
      tH = LH(1450),
      zH = LH(45),
      CH = LH(69),
      EH = LH(1225);

    function XH() {
      var HH;
      return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
        children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
      })
    }

    function GH(HH) {
      var BH;
      let {
        show: LH
      } = HH;
      (0, tH.e)(rH.b, (0, rH.p)());
      const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
      return (0, zH.useEffect)((() => {
        var HH;
        LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
      }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
        showing: LH,
        globallyUniqueKey: "clientGameMenu",
        children: null === CH || void 0 === CH ? void 0 : CH.content
      })
    }
    const YH = new Map,
      uH = new Set;

    function QH(HH, BH) {
      BH ? YH.set(HH, BH) : YH.delete(HH);
      for (const LH of uH) LH()
    }

    function WH(HH) {
      let {
        placement: BH = "bottom"
      } = HH;
      const LH = (0, zH.useRef)(null);
      return (0, zH.useLayoutEffect)((() => {
        const HH = LH.current;
        return QH(BH, HH), () => {
          YH.get(BH) === HH && QH(BH, null)
        }
      }), [BH]), (0, EH.jsx)("div", {
        ref: LH,
        id: `clientGameHud-${BH}`,
        style: {
          display: "contents"
        }
      })
    }

    function MH(HH) {
      let {
        children: BH,
        placement: LH = "bottom"
      } = HH;
      const [AH, rH] = (0, zH.useState)((() => {
        var HH;
        return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
      }));
      return (0, zH.useEffect)((() => {
        const HH = () => {
          var HH;
          rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
        };
        return uH.add(HH), HH(), () => {
          uH.delete(HH)
        }
      }), [LH]), AH ? (0, CH.createPortal)(BH, AH) : null
    }
  },
  34986: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(4947),
      rH = LH(4951);

    function SH(HH) {
      let {
        children: BH,
        showing: LH,
        globallyUniqueKey: SH,
        alwaysMountChildren: hH = !1,
        doGameplayStartStopOnShow: tH = !0,
        keepsMovement: zH = !1
      } = HH;
      return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
    }
  },
  5506: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1225);

    function hH(HH) {
      let {
        options: BH,
        value: LH,
        onChange: AH,
        ariaLabel: hH,
        className: tH,
        reselectable: zH = !1,
        keepsFocus: CH = !1,
        padTabs: EH
      } = HH;
      const XH = void 0 !== EH;
      return (0, SH.jsx)("div", {
        className: rH()("SegmentedToggle", tH),
        role: "group",
        "aria-label": hH,
        "data-pad-tabs": EH,
        children: BH.map((HH => {
          const BH = HH.value === LH;
          return (0, SH.jsx)("button", {
            type: "button",
            "aria-pressed": BH,
            "data-pad-tab": XH || void 0,
            "data-pad-selected": XH && BH ? "true" : void 0,
            "data-pad-default-focus": XH && BH || void 0,
            "aria-label": HH.ariaLabel,
            title: HH.ariaLabel,
            className: rH()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: BH
            }),
            onMouseDown: CH ? HH => {
              HH.preventDefault()
            } : void 0,
            onClick: () => {
              BH && !zH || AH(HH.value)
            },
            children: HH.label
          }, HH.value)
        }))
      })
    }
  },
  9412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      e: () => rH
    });
    let AH = null;
    const rH = function(HH) {
        const BH = {
          cycle: HH,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return AH = BH, () => {
          AH === BH && (AH = null)
        }
      },
      SH = () => {
        var HH;
        return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
      }
  },
  37685: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      f: () => SH
    });
    const AH = new Map;

    function rH(HH) {
      var BH;
      return null === HH ? null : null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : null
    }

    function SH(HH, BH) {
      return AH.set(HH, BH), () => {
        AH.get(HH) === BH && AH.delete(HH)
      }
    }
  },
  37479: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => uH,
      C: () => xH,
      c: () => SH,
      g: () => QH,
      j: () => WH,
      k: () => tH,
      n: () => GH,
      r: () => MH,
      t: () => XH,
      x: () => vH
    });
    var AH = LH(15),
      rH = LH(18);
    const SH = "clientGameInventoryButtonsChanged",
      hH = new Map;

    function tH() {
      return [...hH.values()].sort(((HH, BH) => {
        var LH, AH;
        return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
      }))
    }
    let zH = null;

    function CH(HH) {
      zH = HH
    }
    let EH = !1;

    function XH(HH) {
      EH = !0;
      try {
        HH.onClick()
      } finally {
        EH = !1
      }
      HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
    }

    function GH() {
      return EH
    }

    function YH() {
      return tH().filter((HH => HH.panel && !HH.disabled))
    }

    function uH(HH) {
      const BH = YH(),
        LH = BH.findIndex((HH => HH.id === zH));
      return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
    }

    function QH() {
      return null !== zH && YH().length > 1
    }

    function WH() {
      CH(null)
    }

    function MH() {
      "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
    }

    function xH() {
      const HH = zH;
      return CH(null), HH
    }

    function vH(HH) {
      return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
        hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
      }
    }
  },
  37474: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => xH,
      g: () => WH,
      j: () => MH,
      n: () => GH,
      p: () => CH,
      t: () => QH,
      u: () => YH,
      v: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(37479);
    const tH = "clientGameUiChanged";
    let zH = null;

    function CH() {
      return zH
    }

    function EH(HH, BH) {
      const LH = {
        content: HH,
        menu: BH
      };
      return zH = LH, rH.k.AX(tH, zH, !0), () => {
        zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
      }
    }
    let XH = null;

    function GH() {
      return XH
    }

    function YH(HH) {
      return XH = HH, () => {
        XH === HH && (XH = null)
      }
    }
    let uH = !1;

    function QH() {
      const HH = AH.c.get("openInGameMenuName");
      "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function WH() {
      vH(!1)
    }

    function MH() {
      vH(uH)
    }

    function xH() {
      uH && vH(!1)
    }

    function vH(HH) {
      "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
        openInGameMenuName: HH ? "inventory" : null
      }), HH || (0, hH.j)(), uH = !1
    }
  },
  39297: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => UH,
      E: () => OH,
      G: () => TH,
      I: () => PH,
      K: () => GH,
      L: () => QH,
      P: () => MH,
      R: () => rH,
      d: () => EH,
      h: () => zH,
      i: () => vH,
      m: () => CH,
      n: () => tH,
      p: () => hH,
      t: () => SH,
      x: () => VH,
      y: () => YH
    });
    var AH = LH(10015);

    function rH(HH) {
      return Math.floor(HH).toLocaleString("en-US")
    }
    const SH = 2e3,
      hH = .005,
      tH = .001,
      zH = 2,
      CH = "Fluid Tank",
      EH = "Coolant Mixer",
      XH = 144;

    function GH(HH) {
      const BH = HH.split("|")[0];
      return (0, AH.i)(BH) ? BH === AH.b ? "cryo" : "water" : null
    }
    const YH = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      uH = 63;

    function QH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const LH = BH ? function(HH, BH, LH) {
        const AH = YH.findIndex((AH => {
          let [rH, SH, hH] = AH;
          return rH === HH && SH === BH && hH === LH
        }));
        return AH < 0 ? 0 : 1 << AH
      }(BH[0], BH[1], BH[2]) : 0;
      return "maker" === HH ? {
        kind: HH,
        faces: LH
      } : "user" === HH ? {
        kind: HH,
        faces: uH & ~LH
      } : {
        kind: HH,
        faces: uH
      }
    }

    function WH(HH) {
      return "pipe" === HH || "tank" === HH || "maker" === HH
    }

    function MH(HH, BH, LH) {
      return 0 !== (HH.faces & 1 << LH) && 0 !== (BH.faces & 1 << (1 ^ LH)) && (WH(HH.kind) || WH(BH.kind))
    }
    const xH = (HH, BH, LH, AH) => ({
        input: HH,
        inputAmount: AH,
        output: BH,
        outputAmount: LH
      }),
      vH = {
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
          recipes: [xH("Uranium Grit", "Uranium Pellet", 1, 12), xH("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [xH("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: XH,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function PH(HH, BH) {
      return 1e3 * (null !== BH && void 0 !== BH ? BH : 0) / HH.opMs
    }

    function TH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const LH = PH(vH["Coolant Mixer"], XH) * BH;
      return HH <= 0 ? 0 : Math.ceil(HH / LH - 1e-9)
    }
    const UH = "baf2Water",
      VH = "baf2waterclose",
      OH = "baf2wateropen"
  },
  39288: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => bH,
      c: () => PH,
      d: () => vH
    });
    var AH = LH(9940),
      rH = LH(9955),
      SH = LH(10015),
      hH = LH(39297),
      tH = LH(10009);
    const zH = (0, hH.L)("pipe"),
      CH = (0, hH.L)("tank"),
      EH = (0, hH.L)("port"),
      XH = "Reactor Port";

    function GH(HH, BH, LH) {
      const AH = new Set([SH.c, SH.b, XH, ...BH, ...LH, ...HH ? [hH.m] : []]);
      return {
        makers: new Set(BH),
        roots: AH
      }
    }
    const YH = {
        water: GH(!0, ["Condenser"], ["Centrifuge", "Synthesizer", hH.d]),
        cryo: GH(!1, [hH.d], [])
      },
      uH = new Set([...YH.water.roots, ...YH.cryo.roots]),
      QH = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      WH = rH.d.map((HH => QH[HH])),
      MH = WH.map((HH => {
        let [BH, LH, AH] = HH;
        return hH.y.findIndex((HH => {
          let [rH, SH, hH] = HH;
          return rH === BH && SH === LH && hH === AH
        }))
      }));

    function xH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const LH = AH.g[HH],
        rH = null === LH || void 0 === LH ? void 0 : LH.meta.rootName,
        GH = YH[BH];
      if (!rH || !GH.roots.has(rH)) return null;
      if ((0, SH.i)(rH)) return (0, hH.K)(LH.name) === BH ? zH : null;
      if (rH === hH.m) return CH;
      if (rH === XH) return LH.name.endsWith("|Water") ? EH : null;
      const [uH, QH] = tH.h[(LH.meta.rot || 1) - 1];
      return (0, hH.L)(GH.makers.has(rH) ? "maker" : "user", [-uH, 0, -QH])
    }

    function vH(HH, BH, LH, rH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: tH
      } = YH[SH];
      return WH.some(((CH, EH) => {
        var XH, GH;
        let [YH, uH, QH] = CH;
        const WH = HH(BH + YH, LH + uH, rH + QH),
          vH = xH(WH, SH);
        return null !== vH && tH.has(null !== (XH = null === (GH = AH.g[WH]) || void 0 === GH ? void 0 : GH.meta.rootName) && void 0 !== XH ? XH : "") && !(0, hH.P)(zH, vH, MH[EH])
      }))
    }

    function PH(HH) {
      const BH = AH.g[HH];
      return BH ? (0, hH.K)(BH.name) : null
    }
    let TH = null;

    function UH(HH) {
      if (!TH) {
        TH = new Map;
        for (const HH of ["water", "cryo"])
          for (let BH = 0; BH < 64; BH++)
            for (const LH of [!1, !0]) TH.set((0, SH.l)(HH, BH, LH), {
              UY: HH,
              mask: BH,
              full: LH
            })
      }
      return TH.get(HH)
    }
    const VH = new Map(Array.from({
      length: SH.g + 1
    }, ((HH, BH) => [(0, SH.m)(BH), BH])));

    function OH(HH, BH, LH, rH, SH, hH) {
      return WH.some(((tH, zH) => {
        var CH, EH, XH;
        let [GH, YH, uH] = tH;
        if (0 === (hH >> zH & 1)) return !1;
        const QH = null !== (CH = null === (EH = AH.g[HH(BH + GH, LH + YH, rH + uH)]) || void 0 === EH ? void 0 : EH.name) && void 0 !== CH ? CH : "",
          WH = UH(QH);
        return WH ? WH.UY === SH && WH.full : (null !== (XH = function(HH) {
          var BH;
          return null !== (BH = VH.get(HH)) && void 0 !== BH ? BH : null
        }(QH)) && void 0 !== XH ? XH : 0) > 0
      }))
    }
    class bH {
      constructor() {
        this.reshapeOffsets = WH
      }
      handles(HH) {
        return null !== PH(HH)
      }
      affects(HH) {
        var BH, LH;
        return uH.has(null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.meta.rootName) && void 0 !== BH ? BH : "")
      }
      placedBy(HH) {
        var BH;
        return (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta.rootName) === SH.b ? SH.c : null
      }
      shape(HH, BH, LH, rH, tH, CH) {
        var EH, XH, GH;
        const YH = null !== (EH = null === (XH = AH.g[tH]) || void 0 === XH ? void 0 : XH.name) && void 0 !== EH ? EH : "",
          uH = CH || YH !== SH.c ? null !== (GH = (0, hH.K)(YH)) && void 0 !== GH ? GH : "water" : function(HH, BH, LH, AH) {
            return WH.some(((rH, SH) => {
              let [tH, CH, EH] = rH;
              const XH = xH(HH(BH + tH, LH + CH, AH + EH), "cryo");
              return null !== XH && "port" !== XH.kind && (0, hH.P)(zH, XH, MH[SH])
            })) ? "cryo" : "water"
          }(HH, BH, LH, rH),
          QH = function(HH, BH, LH, AH) {
            let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              SH = 0;
            return WH.forEach(((tH, CH) => {
              let [EH, XH, GH] = tH;
              const YH = xH(HH(BH + EH, LH + XH, AH + GH), rH);
              YH && (0, hH.P)(zH, YH, MH[CH]) && (SH |= 1 << CH)
            })), SH
          }(HH, BH, LH, rH, uH),
          vH = CH ? function(HH) {
            var BH;
            return !0 === (null === (BH = UH(HH)) || void 0 === BH ? void 0 : BH.full)
          }(YH) : OH(HH, BH, LH, rH, uH, QH);
        return (0, AH.h)((0, SH.l)(uH, QH, vH))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);