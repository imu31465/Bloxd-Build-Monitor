export const id = 11;
export const ids = [11];
export const modules = {
  36891: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      g: () => jQ,
      k: () => rQ,
      o: () => JQ
    });
    var wQ = XQ(34500),
      qQ = XQ(36900),
      TQ = XQ(36906),
      zQ = XQ(9099),
      sQ = XQ(1498),
      FQ = XQ(61),
      PQ = XQ(78),
      gQ = XQ(1145);

    function JQ() {
      var QQ;
      return (0, sQ.j)(qQ.c, (0, qQ.s)()), (0, gQ.jsx)(gQ.Fragment, {
        children: null === (QQ = (0, qQ.s)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function rQ(QQ) {
      var WQ;
      let {
        show: XQ
      } = QQ;
      (0, sQ.j)(qQ.c, (0, qQ.s)());
      const PQ = null === (WQ = (0, qQ.s)()) || void 0 === WQ ? void 0 : WQ.menu;
      return (0, FQ.useEffect)((() => {
        var QQ;
        XQ || (null === PQ || void 0 === PQ || null === (QQ = PQ.onClose) || void 0 === QQ || QQ.call(PQ), (0, TQ.r)())
      }), [XQ, PQ]), (0, FQ.useEffect)((() => XQ ? (0, zQ.e)(TQ.y, TQ.f) : void 0), [XQ]), (0, gQ.jsx)(wQ.c, {
        showing: XQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === PQ || void 0 === PQ ? void 0 : PQ.content
      })
    }

    function IQ(QQ) {
      let {
        placement: WQ = "bottom"
      } = QQ;
      return (0, gQ.jsx)("div", {
        id: `clientGameHud-${WQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function jQ(QQ) {
      let {
        children: WQ,
        placement: XQ = "bottom"
      } = QQ;
      const [wQ, qQ] = (0, FQ.useState)(null);
      return (0, FQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${XQ}`))
      }), [XQ]), wQ ? (0, PQ.createPortal)(WQ, wQ) : null
    }
  },
  34500: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(4859),
      qQ = XQ(4863);

    function TQ(QQ) {
      let {
        children: WQ,
        showing: XQ,
        globallyUniqueKey: TQ,
        alwaysMountChildren: zQ = !1,
        doGameplayStartStopOnShow: sQ = !0,
        keepsMovement: FQ = !1
      } = QQ;
      return (0, qQ.c)(!0, XQ, TQ, FQ), (0, wQ.c)(sQ, XQ), XQ || zQ ? WQ : null
    }
  },
  5376: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1145);

    function zQ(QQ) {
      let {
        options: WQ,
        value: XQ,
        onChange: wQ,
        ariaLabel: zQ,
        className: sQ,
        reselectable: FQ = !1,
        keepsFocus: PQ = !1,
        padTabs: gQ
      } = QQ;
      const JQ = void 0 !== gQ;
      return (0, TQ.jsx)("div", {
        className: qQ()("SegmentedToggle", sQ),
        role: "group",
        "aria-label": zQ,
        "data-pad-tabs": gQ,
        children: WQ.map((QQ => {
          const WQ = QQ.value === XQ;
          return (0, TQ.jsx)("button", {
            type: "button",
            "aria-pressed": WQ,
            "data-pad-tab": JQ || void 0,
            "data-pad-selected": JQ && WQ ? "true" : void 0,
            "data-pad-default-focus": JQ && WQ || void 0,
            "aria-label": QQ.ariaLabel,
            title: QQ.ariaLabel,
            className: qQ()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: WQ
            }),
            onMouseDown: PQ ? QQ => {
              QQ.preventDefault()
            } : void 0,
            onClick: () => {
              WQ && !FQ || wQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value)
        }))
      })
    }
  },
  9099: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => qQ
    });
    let wQ = null;
    const qQ = function(QQ) {
        const WQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wQ = WQ, () => {
          wQ === WQ && (wQ = null)
        }
      },
      TQ = () => {
        var QQ;
        return null !== (QQ = wQ) && void 0 !== QQ && QQ.canCycle() ? wQ.cycle : null
      }
  },
  37131: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      g: () => TQ
    });
    const wQ = new Map;

    function qQ(QQ) {
      var WQ;
      return null === QQ ? null : null !== (WQ = wQ.get(QQ)) && void 0 !== WQ ? WQ : null
    }

    function TQ(QQ, WQ) {
      return wQ.set(QQ, WQ), () => {
        wQ.get(QQ) === WQ && wQ.delete(QQ)
      }
    }
  },
  38711: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => UQ,
      B: () => GQ,
      D: () => rQ,
      E: () => BQ,
      G: () => VQ,
      J: () => qQ,
      d: () => gQ,
      f: () => FQ,
      i: () => pQ,
      k: () => PQ,
      l: () => sQ,
      n: () => zQ,
      o: () => TQ,
      r: () => vQ,
      v: () => IQ,
      w: () => bQ,
      x: () => dQ
    });
    var wQ = XQ(9664);

    function qQ(QQ) {
      return Math.floor(QQ).toLocaleString("en-US")
    }
    const TQ = 2e3,
      zQ = .005,
      sQ = .001,
      FQ = 2,
      PQ = "Fluid Tank",
      gQ = "Coolant Mixer",
      JQ = 144;

    function rQ(QQ) {
      const WQ = QQ.split("|")[0];
      return (0, wQ.n)(WQ) ? WQ === wQ.d ? "cryo" : "water" : null
    }
    const IQ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      jQ = 63;

    function BQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const XQ = WQ ? function(QQ, WQ, XQ) {
        const wQ = IQ.findIndex((wQ => {
          let [qQ, TQ, zQ] = wQ;
          return qQ === QQ && TQ === WQ && zQ === XQ
        }));
        return wQ < 0 ? 0 : 1 << wQ
      }(WQ[0], WQ[1], WQ[2]) : 0;
      return "maker" === QQ ? {
        kind: QQ,
        faces: XQ
      } : "user" === QQ ? {
        kind: QQ,
        faces: jQ & ~XQ
      } : {
        kind: QQ,
        faces: jQ
      }
    }

    function yQ(QQ) {
      return "pipe" === QQ || "tank" === QQ || "maker" === QQ
    }

    function VQ(QQ, WQ, XQ) {
      return 0 !== (QQ.faces & 1 << XQ) && 0 !== (WQ.faces & 1 << (1 ^ XQ)) && (yQ(QQ.kind) || yQ(WQ.kind))
    }
    const DQ = (QQ, WQ, XQ, wQ) => ({
        input: QQ,
        inputAmount: wQ,
        output: WQ,
        outputAmount: XQ
      }),
      pQ = {
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
          recipes: [DQ("Uranium Grit", "Uranium Pellet", 1, 12), DQ("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [DQ("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: JQ,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function GQ(QQ, WQ) {
      return 1e3 * (null !== WQ && void 0 !== WQ ? WQ : 0) / QQ.opMs
    }

    function UQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const XQ = GQ(pQ["Coolant Mixer"], JQ) * WQ;
      return QQ <= 0 ? 0 : Math.ceil(QQ / XQ - 1e-9)
    }
    const bQ = "baf2Water",
      vQ = "baf2waterclose",
      dQ = "baf2wateropen"
  },
  38703: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => HQ,
      c: () => GQ,
      g: () => pQ
    });
    var wQ = XQ(9580),
      qQ = XQ(9608),
      TQ = XQ(9664),
      zQ = XQ(38711),
      sQ = XQ(9660);
    const FQ = (0, zQ.E)("pipe"),
      PQ = (0, zQ.E)("tank"),
      gQ = (0, zQ.E)("port"),
      JQ = "Reactor Port";

    function rQ(QQ, WQ, XQ) {
      const wQ = new Set([TQ.g, TQ.d, JQ, ...WQ, ...XQ, ...QQ ? [zQ.k] : []]);
      return {
        makers: new Set(WQ),
        roots: wQ
      }
    }
    const IQ = {
        water: rQ(!0, ["Condenser"], ["Centrifuge", "Synthesizer", zQ.d]),
        cryo: rQ(!1, [zQ.d], [])
      },
      jQ = new Set([...IQ.water.roots, ...IQ.cryo.roots]),
      BQ = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      yQ = qQ.e.map((QQ => BQ[QQ])),
      VQ = yQ.map((QQ => {
        let [WQ, XQ, wQ] = QQ;
        return zQ.v.findIndex((QQ => {
          let [qQ, TQ, zQ] = QQ;
          return qQ === WQ && TQ === XQ && zQ === wQ
        }))
      }));

    function DQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const XQ = wQ.h[QQ],
        qQ = null === XQ || void 0 === XQ ? void 0 : XQ.meta.rootName,
        rQ = IQ[WQ];
      if (!qQ || !rQ.roots.has(qQ)) return null;
      if ((0, TQ.n)(qQ)) return (0, zQ.D)(XQ.name) === WQ ? FQ : null;
      if (qQ === zQ.k) return PQ;
      if (qQ === JQ) return XQ.name.endsWith("|Water") ? gQ : null;
      const [jQ, BQ] = sQ.g[(XQ.meta.rot || 1) - 1];
      return (0, zQ.E)(rQ.makers.has(qQ) ? "maker" : "user", [-jQ, 0, -BQ])
    }

    function pQ(QQ, WQ, XQ, qQ) {
      let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: sQ
      } = IQ[TQ];
      return yQ.some(((PQ, gQ) => {
        var JQ, rQ;
        let [IQ, jQ, BQ] = PQ;
        const yQ = QQ(WQ + IQ, XQ + jQ, qQ + BQ),
          pQ = DQ(yQ, TQ);
        return null !== pQ && sQ.has(null !== (JQ = null === (rQ = wQ.h[yQ]) || void 0 === rQ ? void 0 : rQ.meta.rootName) && void 0 !== JQ ? JQ : "") && !(0, zQ.G)(FQ, pQ, VQ[gQ])
      }))
    }

    function GQ(QQ) {
      const WQ = wQ.h[QQ];
      return WQ ? (0, zQ.D)(WQ.name) : null
    }
    let UQ = null;

    function bQ(QQ) {
      if (!UQ) {
        UQ = new Map;
        for (const QQ of ["water", "cryo"])
          for (let WQ = 0; WQ < 64; WQ++)
            for (const XQ of [!1, !0]) UQ.set((0, TQ.p)(QQ, WQ, XQ), {
              XI: QQ,
              mask: WQ,
              full: XQ
            })
      }
      return UQ.get(QQ)
    }
    const vQ = new Map(Array.from({
      length: TQ.k + 1
    }, ((QQ, WQ) => [(0, TQ.q)(WQ), WQ])));

    function dQ(QQ, WQ, XQ, qQ, TQ, zQ) {
      return yQ.some(((sQ, FQ) => {
        var PQ, gQ, JQ;
        let [rQ, IQ, jQ] = sQ;
        if (0 === (zQ >> FQ & 1)) return !1;
        const BQ = null !== (PQ = null === (gQ = wQ.h[QQ(WQ + rQ, XQ + IQ, qQ + jQ)]) || void 0 === gQ ? void 0 : gQ.name) && void 0 !== PQ ? PQ : "",
          yQ = bQ(BQ);
        return yQ ? yQ.XI === TQ && yQ.full : (null !== (JQ = function(QQ) {
          var WQ;
          return null !== (WQ = vQ.get(QQ)) && void 0 !== WQ ? WQ : null
        }(BQ)) && void 0 !== JQ ? JQ : 0) > 0
      }))
    }
    class HQ {
      constructor() {
        this.reshapeOffsets = yQ
      }
      handles(QQ) {
        return null !== GQ(QQ)
      }
      affects(QQ) {
        var WQ, XQ;
        return jQ.has(null !== (WQ = null === (XQ = wQ.h[QQ]) || void 0 === XQ ? void 0 : XQ.meta.rootName) && void 0 !== WQ ? WQ : "")
      }
      placedBy(QQ) {
        var WQ;
        return (null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta.rootName) === TQ.d ? TQ.g : null
      }
      shape(QQ, WQ, XQ, qQ, sQ, PQ) {
        var gQ, JQ, rQ;
        const IQ = null !== (gQ = null === (JQ = wQ.h[sQ]) || void 0 === JQ ? void 0 : JQ.name) && void 0 !== gQ ? gQ : "",
          jQ = PQ || IQ !== TQ.g ? null !== (rQ = (0, zQ.D)(IQ)) && void 0 !== rQ ? rQ : "water" : function(QQ, WQ, XQ, wQ) {
            return yQ.some(((qQ, TQ) => {
              let [sQ, PQ, gQ] = qQ;
              const JQ = DQ(QQ(WQ + sQ, XQ + PQ, wQ + gQ), "cryo");
              return null !== JQ && "port" !== JQ.kind && (0, zQ.G)(FQ, JQ, VQ[TQ])
            })) ? "cryo" : "water"
          }(QQ, WQ, XQ, qQ),
          BQ = function(QQ, WQ, XQ, wQ) {
            let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              TQ = 0;
            return yQ.forEach(((sQ, PQ) => {
              let [gQ, JQ, rQ] = sQ;
              const IQ = DQ(QQ(WQ + gQ, XQ + JQ, wQ + rQ), qQ);
              IQ && (0, zQ.G)(FQ, IQ, VQ[PQ]) && (TQ |= 1 << PQ)
            })), TQ
          }(QQ, WQ, XQ, qQ, jQ),
          pQ = PQ ? function(QQ) {
            var WQ;
            return !0 === (null === (WQ = bQ(QQ)) || void 0 === WQ ? void 0 : WQ.full)
          }(IQ) : dQ(QQ, WQ, XQ, qQ, jQ, BQ);
        return (0, wQ.k)((0, TQ.p)(jQ, BQ, pQ))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);