export const id = 11;
export const ids = [11];
export const modules = {
  36613: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => FB,
      h: () => NB,
      l: () => zB,
      n: () => hB
    });
    var TB = ZB(34184),
      JB = ZB(36619),
      oB = ZB(36625),
      GB = ZB(8840),
      vB = ZB(1507),
      kB = ZB(63),
      cB = ZB(82),
      nB = ZB(1153);

    function hB() {
      var BB;
      return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
        children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var IB;
      let {
        show: ZB
      } = BB;
      (0, vB.h)(JB.d, (0, JB.q)());
      const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
      return (0, kB.useEffect)((() => {
        var BB;
        ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
      }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
        showing: ZB,
        globallyUniqueKey: "clientGameMenu",
        children: null === cB || void 0 === cB ? void 0 : cB.content
      })
    }

    function FB(BB) {
      let {
        placement: IB = "bottom"
      } = BB;
      return (0, nB.jsx)("div", {
        id: `clientGameHud-${IB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: IB,
        placement: ZB = "bottom"
      } = BB;
      const [TB, JB] = (0, kB.useState)(null);
      return (0, kB.useEffect)((() => {
        JB(document.getElementById(`clientGameHud-${ZB}`))
      }), [ZB]), TB ? (0, cB.createPortal)(IB, TB) : null
    }
  },
  34184: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(4721),
      JB = ZB(4728);

    function oB(BB) {
      let {
        children: IB,
        showing: ZB,
        globallyUniqueKey: oB,
        alwaysMountChildren: GB = !1,
        doGameplayStartStopOnShow: vB = !0,
        keepsMovement: kB = !1
      } = BB;
      return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
    }
  },
  5177: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1153);

    function GB(BB) {
      let {
        options: IB,
        value: ZB,
        onChange: TB,
        ariaLabel: GB,
        className: vB,
        reselectable: kB = !1,
        keepsFocus: cB = !1,
        padTabs: nB
      } = BB;
      const hB = void 0 !== nB;
      return (0, oB.jsx)("div", {
        className: JB()("SegmentedToggle", vB),
        role: "group",
        "aria-label": GB,
        "data-pad-tabs": nB,
        children: IB.map((BB => {
          const IB = BB.value === ZB;
          return (0, oB.jsx)("button", {
            type: "button",
            "aria-pressed": IB,
            "data-pad-tab": hB || void 0,
            "data-pad-selected": hB && IB ? "true" : void 0,
            "data-pad-default-focus": hB && IB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: JB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: IB
            }),
            onMouseDown: cB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              IB && !kB || TB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  8840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => JB
    });
    let TB = null;
    const JB = function(BB) {
        const IB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return TB = IB, () => {
          TB === IB && (TB = null)
        }
      },
      oB = () => {
        var BB;
        return null !== (BB = TB) && void 0 !== BB && BB.canCycle() ? TB.cycle : null
      }
  },
  36856: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      f: () => oB
    });
    const TB = new Map;

    function JB(BB) {
      var IB;
      return null === BB ? null : null !== (IB = TB.get(BB)) && void 0 !== IB ? IB : null
    }

    function oB(BB, IB) {
      return TB.set(BB, IB), () => {
        TB.get(BB) === IB && TB.delete(BB)
      }
    }
  },
  38468: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => FB,
      E: () => QB,
      H: () => wB,
      I: () => CB,
      K: () => dB,
      N: () => zB,
      R: () => gB,
      U: () => yB,
      W: () => JB,
      e: () => nB,
      f: () => kB,
      h: () => WB,
      j: () => cB,
      n: () => vB,
      q: () => GB,
      t: () => oB,
      x: () => sB
    });
    var TB = ZB(9380);

    function JB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const oB = 2e3,
      GB = .005,
      vB = .001,
      kB = 2,
      cB = "Fluid Tank",
      nB = "Coolant Mixer",
      hB = 144;

    function zB(BB) {
      const IB = BB.split("|")[0];
      return (0, TB.j)(IB) ? IB === TB.d ? "cryo" : "water" : null
    }
    const FB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      NB = 63;

    function gB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ZB = IB ? function(BB, IB, ZB) {
        const TB = FB.findIndex((TB => {
          let [JB, oB, GB] = TB;
          return JB === BB && oB === IB && GB === ZB
        }));
        return TB < 0 ? 0 : 1 << TB
      }(IB[0], IB[1], IB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: ZB
      } : "user" === BB ? {
        kind: BB,
        faces: NB & ~ZB
      } : {
        kind: BB,
        faces: NB
      }
    }

    function qB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function yB(BB, IB, ZB) {
      return 0 !== (BB.faces & 1 << ZB) && 0 !== (IB.faces & 1 << (1 ^ ZB)) && (qB(BB.kind) || qB(IB.kind))
    }
    const UB = (BB, IB, ZB, TB) => ({
        input: BB,
        inputAmount: TB,
        output: IB,
        outputAmount: ZB
      }),
      WB = {
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
          recipes: [UB("Uranium Grit", "Uranium Pellet", 1, 12), UB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [UB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: hB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function dB(BB, IB) {
      return 1e3 * (null !== IB && void 0 !== IB ? IB : 0) / BB.opMs
    }

    function CB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZB = dB(WB["Coolant Mixer"], hB) * IB;
      return BB <= 0 ? 0 : Math.ceil(BB / ZB - 1e-9)
    }
    const QB = "baf2Water",
      sB = "baf2waterclose",
      wB = "baf2wateropen"
  },
  38466: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => OB,
      e: () => dB,
      f: () => WB
    });
    var TB = ZB(9296),
      JB = ZB(9316),
      oB = ZB(9380),
      GB = ZB(38468),
      vB = ZB(9375);
    const kB = (0, GB.R)("pipe"),
      cB = (0, GB.R)("tank"),
      nB = (0, GB.R)("port"),
      hB = "Reactor Port";

    function zB(BB, IB, ZB) {
      const TB = new Set([oB.f, oB.d, hB, ...IB, ...ZB, ...BB ? [GB.j] : []]);
      return {
        makers: new Set(IB),
        roots: TB
      }
    }
    const FB = {
        water: zB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", GB.e]),
        cryo: zB(!1, [GB.e], [])
      },
      NB = new Set([...FB.water.roots, ...FB.cryo.roots]),
      gB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      qB = JB.f.map((BB => gB[BB])),
      yB = qB.map((BB => {
        let [IB, ZB, TB] = BB;
        return GB.B.findIndex((BB => {
          let [JB, oB, GB] = BB;
          return JB === IB && oB === ZB && GB === TB
        }))
      }));

    function UB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ZB = TB.f[BB],
        JB = null === ZB || void 0 === ZB ? void 0 : ZB.meta.rootName,
        zB = FB[IB];
      if (!JB || !zB.roots.has(JB)) return null;
      if ((0, oB.j)(JB)) return (0, GB.N)(ZB.name) === IB ? kB : null;
      if (JB === GB.j) return cB;
      if (JB === hB) return ZB.name.endsWith("|Water") ? nB : null;
      const [NB, gB] = vB.f[(ZB.meta.rot || 1) - 1];
      return (0, GB.R)(zB.makers.has(JB) ? "maker" : "user", [-NB, 0, -gB])
    }

    function WB(BB, IB, ZB, JB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: vB
      } = FB[oB];
      return qB.some(((cB, nB) => {
        var hB, zB;
        let [FB, NB, gB] = cB;
        const qB = BB(IB + FB, ZB + NB, JB + gB),
          WB = UB(qB, oB);
        return null !== WB && vB.has(null !== (hB = null === (zB = TB.f[qB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== hB ? hB : "") && !(0, GB.U)(kB, WB, yB[nB])
      }))
    }

    function dB(BB) {
      const IB = TB.f[BB];
      return IB ? (0, GB.N)(IB.name) : null
    }
    let CB = null;

    function QB(BB) {
      if (!CB) {
        CB = new Map;
        for (const BB of ["water", "cryo"])
          for (let IB = 0; IB < 64; IB++)
            for (const ZB of [!1, !0]) CB.set((0, oB.n)(BB, IB, ZB), {
              gF: BB,
              mask: IB,
              full: ZB
            })
      }
      return CB.get(BB)
    }
    const sB = new Map(Array.from({
      length: oB.i + 1
    }, ((BB, IB) => [(0, oB.o)(IB), IB])));

    function wB(BB, IB, ZB, JB, oB, GB) {
      return qB.some(((vB, kB) => {
        var cB, nB, hB;
        let [zB, FB, NB] = vB;
        if (0 === (GB >> kB & 1)) return !1;
        const gB = null !== (cB = null === (nB = TB.f[BB(IB + zB, ZB + FB, JB + NB)]) || void 0 === nB ? void 0 : nB.name) && void 0 !== cB ? cB : "",
          qB = QB(gB);
        return qB ? qB.gF === oB && qB.full : (null !== (hB = function(BB) {
          var IB;
          return null !== (IB = sB.get(BB)) && void 0 !== IB ? IB : null
        }(gB)) && void 0 !== hB ? hB : 0) > 0
      }))
    }
    class OB {
      constructor() {
        this.reshapeOffsets = qB
      }
      handles(BB) {
        return null !== dB(BB)
      }
      affects(BB) {
        var IB, ZB;
        return NB.has(null !== (IB = null === (ZB = TB.f[BB]) || void 0 === ZB ? void 0 : ZB.meta.rootName) && void 0 !== IB ? IB : "")
      }
      placedBy(BB) {
        var IB;
        return (null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta.rootName) === oB.d ? oB.f : null
      }
      shape(BB, IB, ZB, JB, vB, cB) {
        var nB, hB, zB;
        const FB = null !== (nB = null === (hB = TB.f[vB]) || void 0 === hB ? void 0 : hB.name) && void 0 !== nB ? nB : "",
          NB = cB || FB !== oB.f ? null !== (zB = (0, GB.N)(FB)) && void 0 !== zB ? zB : "water" : function(BB, IB, ZB, TB) {
            return qB.some(((JB, oB) => {
              let [vB, cB, nB] = JB;
              const hB = UB(BB(IB + vB, ZB + cB, TB + nB), "cryo");
              return null !== hB && "port" !== hB.kind && (0, GB.U)(kB, hB, yB[oB])
            })) ? "cryo" : "water"
          }(BB, IB, ZB, JB),
          gB = function(BB, IB, ZB, TB) {
            let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              oB = 0;
            return qB.forEach(((vB, cB) => {
              let [nB, hB, zB] = vB;
              const FB = UB(BB(IB + nB, ZB + hB, TB + zB), JB);
              FB && (0, GB.U)(kB, FB, yB[cB]) && (oB |= 1 << cB)
            })), oB
          }(BB, IB, ZB, JB, NB),
          WB = cB ? function(BB) {
            var IB;
            return !0 === (null === (IB = QB(BB)) || void 0 === IB ? void 0 : IB.full)
          }(FB) : wB(BB, IB, ZB, JB, NB, gB);
        return (0, TB.g)((0, oB.n)(NB, gB, WB))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);