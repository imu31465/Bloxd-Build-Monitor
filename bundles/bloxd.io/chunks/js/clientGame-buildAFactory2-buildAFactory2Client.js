export const id = 11;
export const ids = [11];
export const modules = {
  36228: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => xQ,
      g: () => bQ,
      j: () => HQ
    });
    var LQ = wQ(9094),
      qQ = wQ(36235),
      oQ = wQ(36238),
      DQ = wQ(8464),
      kQ = wQ(1447),
      vQ = wQ(53),
      mQ = wQ(71),
      uQ = wQ(1107);

    function HQ() {
      var QQ;
      return (0, kQ.i)(qQ.b, (0, qQ.k)()), (0, uQ.jsx)(uQ.Fragment, {
        children: null === (QQ = (0, qQ.k)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function bQ(QQ) {
      var FQ;
      let {
        show: wQ
      } = QQ;
      (0, kQ.i)(qQ.b, (0, qQ.k)());
      const mQ = null === (FQ = (0, qQ.k)()) || void 0 === FQ ? void 0 : FQ.menu;
      return (0, vQ.useEffect)((() => {
        var QQ;
        wQ || (null === mQ || void 0 === mQ || null === (QQ = mQ.onClose) || void 0 === QQ || QQ.call(mQ), (0, oQ.o)())
      }), [wQ, mQ]), (0, vQ.useEffect)((() => wQ ? (0, DQ.h)(oQ.v, oQ.g) : void 0), [wQ]), (0, uQ.jsx)(LQ.c, {
        showing: wQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === mQ || void 0 === mQ ? void 0 : mQ.content
      })
    }

    function YQ(QQ) {
      let {
        placement: FQ = "bottom"
      } = QQ;
      return (0, uQ.jsx)("div", {
        id: `clientGameHud-${FQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function xQ(QQ) {
      let {
        children: FQ,
        placement: wQ = "bottom"
      } = QQ;
      const [LQ, qQ] = (0, vQ.useState)(null);
      return (0, vQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${wQ}`))
      }), [wQ]), LQ ? (0, mQ.createPortal)(FQ, LQ) : null
    }
  },
  9094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(4380),
      qQ = wQ(4388);

    function oQ(QQ) {
      let {
        children: FQ,
        showing: wQ,
        globallyUniqueKey: oQ,
        alwaysMountChildren: DQ = !1,
        doGameplayStartStopOnShow: kQ = !0,
        keepsMovement: vQ = !1
      } = QQ;
      return (0, qQ.d)(!0, wQ, oQ, vQ), (0, LQ.b)(kQ, wQ), wQ || DQ ? FQ : null
    }
  },
  4867: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1107);

    function DQ(QQ) {
      let {
        options: FQ,
        value: wQ,
        onChange: LQ,
        ariaLabel: DQ,
        className: kQ,
        reselectable: vQ = !1,
        keepsFocus: mQ = !1,
        padTabs: uQ
      } = QQ;
      const HQ = void 0 !== uQ;
      return (0, oQ.jsx)("div", {
        className: qQ()("SegmentedToggle", kQ),
        role: "group",
        "aria-label": DQ,
        "data-pad-tabs": uQ,
        children: FQ.map((QQ => {
          const FQ = QQ.value === wQ;
          return (0, oQ.jsx)("button", {
            type: "button",
            "aria-pressed": FQ,
            "data-pad-tab": HQ || void 0,
            "data-pad-selected": HQ && FQ ? "true" : void 0,
            "data-pad-default-focus": HQ && FQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: FQ
            }),
            onMouseDown: mQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              FQ && !vQ || LQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  8464: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => qQ
    });
    let LQ = null;
    const qQ = function(QQ) {
        const FQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return LQ = FQ, () => {
          LQ === FQ && (LQ = null)
        }
      },
      oQ = () => {
        var QQ;
        return null !== (QQ = LQ) && void 0 !== QQ && QQ.canCycle() ? LQ.cycle : null
      }
  },
  36458: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => oQ
    });
    const LQ = new Map;

    function qQ(QQ) {
      var FQ;
      return null === QQ ? null : null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : null
    }

    function oQ(QQ, FQ) {
      return LQ.set(QQ, FQ), () => {
        LQ.get(QQ) === FQ && LQ.delete(QQ)
      }
    }
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  37955: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => CQ,
      E: () => iQ,
      G: () => cQ,
      K: () => pQ,
      M: () => bQ,
      O: () => AQ,
      S: () => eQ,
      U: () => qQ,
      d: () => uQ,
      h: () => vQ,
      i: () => GQ,
      k: () => mQ,
      l: () => kQ,
      o: () => DQ,
      s: () => oQ,
      v: () => SQ,
      x: () => YQ
    });
    var LQ = wQ(9284);

    function qQ(QQ) {
      return Math.floor(QQ).toLocaleString("en-US")
    }
    const oQ = 2e3,
      DQ = .005,
      kQ = .001,
      vQ = 2,
      mQ = "Fluid Tank",
      uQ = "Coolant Mixer",
      HQ = 144;

    function bQ(QQ) {
      const FQ = QQ.split("|")[0];
      return (0, LQ.l)(FQ) ? FQ === LQ.e ? "cryo" : "water" : null
    }
    const YQ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      xQ = 63;

    function AQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const wQ = FQ ? function(QQ, FQ, wQ) {
        const LQ = YQ.findIndex((LQ => {
          let [qQ, oQ, DQ] = LQ;
          return qQ === QQ && oQ === FQ && DQ === wQ
        }));
        return LQ < 0 ? 0 : 1 << LQ
      }(FQ[0], FQ[1], FQ[2]) : 0;
      return "maker" === QQ ? {
        kind: QQ,
        faces: wQ
      } : "user" === QQ ? {
        kind: QQ,
        faces: xQ & ~wQ
      } : {
        kind: QQ,
        faces: xQ
      }
    }

    function tQ(QQ) {
      return "pipe" === QQ || "tank" === QQ || "maker" === QQ
    }

    function eQ(QQ, FQ, wQ) {
      return 0 !== (QQ.faces & 1 << wQ) && 0 !== (FQ.faces & 1 << (1 ^ wQ)) && (tQ(QQ.kind) || tQ(FQ.kind))
    }
    const MQ = (QQ, FQ, wQ, LQ) => ({
        input: QQ,
        inputAmount: LQ,
        output: FQ,
        outputAmount: wQ
      }),
      GQ = {
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
          recipes: [MQ("Uranium Grit", "Uranium Pellet", 1, 12), MQ("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [MQ("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: HQ,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function pQ(QQ, FQ) {
      return 1e3 * (null !== FQ && void 0 !== FQ ? FQ : 0) / QQ.opMs
    }

    function cQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const wQ = pQ(GQ["Coolant Mixer"], HQ) * FQ;
      return QQ <= 0 ? 0 : Math.ceil(QQ / wQ - 1e-9)
    }
    const CQ = "baf2Water",
      SQ = "baf2waterclose",
      iQ = "baf2wateropen"
  },
  37950: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => WQ,
      f: () => pQ,
      g: () => GQ
    });
    var LQ = wQ(9195),
      qQ = wQ(9222),
      oQ = wQ(9284),
      DQ = wQ(37955),
      kQ = wQ(9280);
    const vQ = (0, DQ.O)("pipe"),
      mQ = (0, DQ.O)("tank"),
      uQ = (0, DQ.O)("port"),
      HQ = "Reactor Port";

    function bQ(QQ, FQ, wQ) {
      const LQ = new Set([oQ.g, oQ.e, HQ, ...FQ, ...wQ, ...QQ ? [DQ.k] : []]);
      return {
        makers: new Set(FQ),
        roots: LQ
      }
    }
    const YQ = {
        water: bQ(!0, ["Condenser"], ["Centrifuge", "Synthesizer", DQ.d]),
        cryo: bQ(!1, [DQ.d], [])
      },
      xQ = new Set([...YQ.water.roots, ...YQ.cryo.roots]),
      AQ = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      tQ = qQ.f.map((QQ => AQ[QQ])),
      eQ = tQ.map((QQ => {
        let [FQ, wQ, LQ] = QQ;
        return DQ.x.findIndex((QQ => {
          let [qQ, oQ, DQ] = QQ;
          return qQ === FQ && oQ === wQ && DQ === LQ
        }))
      }));

    function MQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const wQ = LQ.h[QQ],
        qQ = null === wQ || void 0 === wQ ? void 0 : wQ.meta.rootName,
        bQ = YQ[FQ];
      if (!qQ || !bQ.roots.has(qQ)) return null;
      if ((0, oQ.l)(qQ)) return (0, DQ.M)(wQ.name) === FQ ? vQ : null;
      if (qQ === DQ.k) return mQ;
      if (qQ === HQ) return wQ.name.endsWith("|Water") ? uQ : null;
      const [xQ, AQ] = kQ.e[(wQ.meta.rot || 1) - 1];
      return (0, DQ.O)(bQ.makers.has(qQ) ? "maker" : "user", [-xQ, 0, -AQ])
    }

    function GQ(QQ, FQ, wQ, qQ) {
      let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: kQ
      } = YQ[oQ];
      return tQ.some(((mQ, uQ) => {
        var HQ, bQ;
        let [YQ, xQ, AQ] = mQ;
        const tQ = QQ(FQ + YQ, wQ + xQ, qQ + AQ),
          GQ = MQ(tQ, oQ);
        return null !== GQ && kQ.has(null !== (HQ = null === (bQ = LQ.h[tQ]) || void 0 === bQ ? void 0 : bQ.meta.rootName) && void 0 !== HQ ? HQ : "") && !(0, DQ.S)(vQ, GQ, eQ[uQ])
      }))
    }

    function pQ(QQ) {
      const FQ = LQ.h[QQ];
      return FQ ? (0, DQ.M)(FQ.name) : null
    }
    let cQ = null;

    function CQ(QQ) {
      if (!cQ) {
        cQ = new Map;
        for (const QQ of ["water", "cryo"])
          for (let FQ = 0; FQ < 64; FQ++)
            for (const wQ of [!1, !0]) cQ.set((0, oQ.n)(QQ, FQ, wQ), {
              wY: QQ,
              mask: FQ,
              full: wQ
            })
      }
      return cQ.get(QQ)
    }
    const SQ = new Map(Array.from({
      length: oQ.j + 1
    }, ((QQ, FQ) => [(0, oQ.o)(FQ), FQ])));

    function iQ(QQ, FQ, wQ, qQ, oQ, DQ) {
      return tQ.some(((kQ, vQ) => {
        var mQ, uQ, HQ;
        let [bQ, YQ, xQ] = kQ;
        if (0 === (DQ >> vQ & 1)) return !1;
        const AQ = null !== (mQ = null === (uQ = LQ.h[QQ(FQ + bQ, wQ + YQ, qQ + xQ)]) || void 0 === uQ ? void 0 : uQ.name) && void 0 !== mQ ? mQ : "",
          tQ = CQ(AQ);
        return tQ ? tQ.wY === oQ && tQ.full : (null !== (HQ = function(QQ) {
          var FQ;
          return null !== (FQ = SQ.get(QQ)) && void 0 !== FQ ? FQ : null
        }(AQ)) && void 0 !== HQ ? HQ : 0) > 0
      }))
    }
    class WQ {
      constructor() {
        this.reshapeOffsets = tQ
      }
      handles(QQ) {
        return null !== pQ(QQ)
      }
      affects(QQ) {
        var FQ, wQ;
        return xQ.has(null !== (FQ = null === (wQ = LQ.h[QQ]) || void 0 === wQ ? void 0 : wQ.meta.rootName) && void 0 !== FQ ? FQ : "")
      }
      placedBy(QQ) {
        var FQ;
        return (null === (FQ = LQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.meta.rootName) === oQ.e ? oQ.g : null
      }
      shape(QQ, FQ, wQ, qQ, kQ, mQ) {
        var uQ, HQ, bQ;
        const YQ = null !== (uQ = null === (HQ = LQ.h[kQ]) || void 0 === HQ ? void 0 : HQ.name) && void 0 !== uQ ? uQ : "",
          xQ = mQ || YQ !== oQ.g ? null !== (bQ = (0, DQ.M)(YQ)) && void 0 !== bQ ? bQ : "water" : function(QQ, FQ, wQ, LQ) {
            return tQ.some(((qQ, oQ) => {
              let [kQ, mQ, uQ] = qQ;
              const HQ = MQ(QQ(FQ + kQ, wQ + mQ, LQ + uQ), "cryo");
              return null !== HQ && "port" !== HQ.kind && (0, DQ.S)(vQ, HQ, eQ[oQ])
            })) ? "cryo" : "water"
          }(QQ, FQ, wQ, qQ),
          AQ = function(QQ, FQ, wQ, LQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              oQ = 0;
            return tQ.forEach(((kQ, mQ) => {
              let [uQ, HQ, bQ] = kQ;
              const YQ = MQ(QQ(FQ + uQ, wQ + HQ, LQ + bQ), qQ);
              YQ && (0, DQ.S)(vQ, YQ, eQ[mQ]) && (oQ |= 1 << mQ)
            })), oQ
          }(QQ, FQ, wQ, qQ, xQ),
          GQ = mQ ? function(QQ) {
            var FQ;
            return !0 === (null === (FQ = CQ(QQ)) || void 0 === FQ ? void 0 : FQ.full)
          }(YQ) : iQ(QQ, FQ, wQ, qQ, xQ, AQ);
        return (0, LQ.j)((0, oQ.n)(xQ, AQ, GQ))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);