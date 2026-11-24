export const id = 11;
export const ids = [11];
export const modules = {
  36677: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sB,
      e: () => JB,
      g: () => rB,
      h: () => pB
    });
    var QB = zB(34242),
      nB = zB(36682),
      dB = zB(36687),
      IB = zB(8722),
      NB = zB(1471),
      uB = zB(62),
      UB = zB(83),
      aB = zB(1148);

    function pB() {
      var BB;
      return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
        children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function rB(BB) {
      var jB;
      let {
        show: zB
      } = BB;
      (0, NB.h)(nB.c, (0, nB.n)());
      const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
      return (0, uB.useEffect)((() => {
        var BB;
        zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
      }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
        showing: zB,
        globallyUniqueKey: "clientGameMenu",
        children: null === UB || void 0 === UB ? void 0 : UB.content
      })
    }

    function sB(BB) {
      let {
        placement: jB = "bottom"
      } = BB;
      return (0, aB.jsx)("div", {
        id: `clientGameHud-${jB}`,
        style: {
          display: "contents"
        }
      })
    }

    function JB(BB) {
      let {
        children: jB,
        placement: zB = "bottom"
      } = BB;
      const [QB, nB] = (0, uB.useState)(null);
      return (0, uB.useEffect)((() => {
        nB(document.getElementById(`clientGameHud-${zB}`))
      }), [zB]), QB ? (0, UB.createPortal)(jB, QB) : null
    }
  },
  34242: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(4657),
      nB = zB(4664);

    function dB(BB) {
      let {
        children: jB,
        showing: zB,
        globallyUniqueKey: dB,
        alwaysMountChildren: IB = !1,
        doGameplayStartStopOnShow: NB = !0,
        keepsMovement: uB = !1
      } = BB;
      return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
    }
  },
  5097: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1148);

    function IB(BB) {
      let {
        options: jB,
        value: zB,
        onChange: QB,
        ariaLabel: IB,
        className: NB,
        reselectable: uB = !1,
        keepsFocus: UB = !1,
        padTabs: aB
      } = BB;
      const pB = void 0 !== aB;
      return (0, dB.jsx)("div", {
        className: nB()("SegmentedToggle", NB),
        role: "group",
        "aria-label": IB,
        "data-pad-tabs": aB,
        children: jB.map((BB => {
          const jB = BB.value === zB;
          return (0, dB.jsx)("button", {
            type: "button",
            "aria-pressed": jB,
            "data-pad-tab": pB || void 0,
            "data-pad-selected": pB && jB ? "true" : void 0,
            "data-pad-default-focus": pB && jB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: nB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: jB
            }),
            onMouseDown: UB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              jB && !uB || QB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  8722: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    let QB = null;
    const nB = function(BB) {
        const jB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QB = jB, () => {
          QB === jB && (QB = null)
        }
      },
      dB = () => {
        var BB;
        return null !== (BB = QB) && void 0 !== BB && BB.canCycle() ? QB.cycle : null
      }
  },
  36907: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      d: () => dB
    });
    const QB = new Map;

    function nB(BB) {
      var jB;
      return null === BB ? null : null !== (jB = QB.get(BB)) && void 0 !== jB ? jB : null
    }

    function dB(BB, jB) {
      return QB.set(BB, jB), () => {
        QB.get(BB) === jB && QB.delete(BB)
      }
    }
  },
  38517: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => SB,
      C: () => EB,
      E: () => tB,
      I: () => gB,
      M: () => rB,
      Q: () => mB,
      T: () => kB,
      V: () => nB,
      b: () => aB,
      f: () => uB,
      j: () => LB,
      k: () => UB,
      o: () => NB,
      s: () => IB,
      u: () => dB,
      v: () => MB,
      x: () => sB
    });
    var QB = zB(9354);

    function nB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const dB = 2e3,
      IB = .005,
      NB = .001,
      uB = 2,
      UB = "Fluid Tank",
      aB = "Coolant Mixer",
      pB = 144;

    function rB(BB) {
      const jB = BB.split("|")[0];
      return (0, QB.j)(jB) ? jB === QB.d ? "cryo" : "water" : null
    }
    const sB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      JB = 63;

    function mB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const zB = jB ? function(BB, jB, zB) {
        const QB = sB.findIndex((QB => {
          let [nB, dB, IB] = QB;
          return nB === BB && dB === jB && IB === zB
        }));
        return QB < 0 ? 0 : 1 << QB
      }(jB[0], jB[1], jB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: zB
      } : "user" === BB ? {
        kind: BB,
        faces: JB & ~zB
      } : {
        kind: BB,
        faces: JB
      }
    }

    function yB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function kB(BB, jB, zB) {
      return 0 !== (BB.faces & 1 << zB) && 0 !== (jB.faces & 1 << (1 ^ zB)) && (yB(BB.kind) || yB(jB.kind))
    }
    const GB = (BB, jB, zB, QB) => ({
        input: BB,
        inputAmount: QB,
        output: jB,
        outputAmount: zB
      }),
      LB = {
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
          recipes: [GB("Uranium Grit", "Uranium Pellet", 1, 12), GB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [GB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function gB(BB, jB) {
      return 1e3 * (null !== jB && void 0 !== jB ? jB : 0) / BB.opMs
    }

    function tB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const zB = gB(LB["Coolant Mixer"], pB) * jB;
      return BB <= 0 ? 0 : Math.ceil(BB / zB - 1e-9)
    }
    const SB = "baf2Water",
      MB = "baf2waterclose",
      EB = "baf2wateropen"
  },
  38513: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => iB,
      g: () => gB,
      j: () => LB
    });
    var QB = zB(9266),
      nB = zB(9283),
      dB = zB(9354),
      IB = zB(38517),
      NB = zB(9345);
    const uB = (0, IB.Q)("pipe"),
      UB = (0, IB.Q)("tank"),
      aB = (0, IB.Q)("port"),
      pB = "Reactor Port";

    function rB(BB, jB, zB) {
      const QB = new Set([dB.f, dB.d, pB, ...jB, ...zB, ...BB ? [IB.k] : []]);
      return {
        makers: new Set(jB),
        roots: QB
      }
    }
    const sB = {
        water: rB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", IB.b]),
        cryo: rB(!1, [IB.b], [])
      },
      JB = new Set([...sB.water.roots, ...sB.cryo.roots]),
      mB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      yB = nB.e.map((BB => mB[BB])),
      kB = yB.map((BB => {
        let [jB, zB, QB] = BB;
        return IB.x.findIndex((BB => {
          let [nB, dB, IB] = BB;
          return nB === jB && dB === zB && IB === QB
        }))
      }));

    function GB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const zB = QB.i[BB],
        nB = null === zB || void 0 === zB ? void 0 : zB.meta.rootName,
        rB = sB[jB];
      if (!nB || !rB.roots.has(nB)) return null;
      if ((0, dB.j)(nB)) return (0, IB.M)(zB.name) === jB ? uB : null;
      if (nB === IB.k) return UB;
      if (nB === pB) return zB.name.endsWith("|Water") ? aB : null;
      const [JB, mB] = NB.d[(zB.meta.rot || 1) - 1];
      return (0, IB.Q)(rB.makers.has(nB) ? "maker" : "user", [-JB, 0, -mB])
    }

    function LB(BB, jB, zB, nB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: NB
      } = sB[dB];
      return yB.some(((UB, aB) => {
        var pB, rB;
        let [sB, JB, mB] = UB;
        const yB = BB(jB + sB, zB + JB, nB + mB),
          LB = GB(yB, dB);
        return null !== LB && NB.has(null !== (pB = null === (rB = QB.i[yB]) || void 0 === rB ? void 0 : rB.meta.rootName) && void 0 !== pB ? pB : "") && !(0, IB.T)(uB, LB, kB[aB])
      }))
    }

    function gB(BB) {
      const jB = QB.i[BB];
      return jB ? (0, IB.M)(jB.name) : null
    }
    let tB = null;

    function SB(BB) {
      if (!tB) {
        tB = new Map;
        for (const BB of ["water", "cryo"])
          for (let jB = 0; jB < 64; jB++)
            for (const zB of [!1, !0]) tB.set((0, dB.m)(BB, jB, zB), {
              Ss: BB,
              mask: jB,
              full: zB
            })
      }
      return tB.get(BB)
    }
    const MB = new Map(Array.from({
      length: dB.g + 1
    }, ((BB, jB) => [(0, dB.p)(jB), jB])));

    function EB(BB, jB, zB, nB, dB, IB) {
      return yB.some(((NB, uB) => {
        var UB, aB, pB;
        let [rB, sB, JB] = NB;
        if (0 === (IB >> uB & 1)) return !1;
        const mB = null !== (UB = null === (aB = QB.i[BB(jB + rB, zB + sB, nB + JB)]) || void 0 === aB ? void 0 : aB.name) && void 0 !== UB ? UB : "",
          yB = SB(mB);
        return yB ? yB.Ss === dB && yB.full : (null !== (pB = function(BB) {
          var jB;
          return null !== (jB = MB.get(BB)) && void 0 !== jB ? jB : null
        }(mB)) && void 0 !== pB ? pB : 0) > 0
      }))
    }
    class iB {
      constructor() {
        this.reshapeOffsets = yB
      }
      handles(BB) {
        return null !== gB(BB)
      }
      affects(BB) {
        var jB, zB;
        return JB.has(null !== (jB = null === (zB = QB.i[BB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== jB ? jB : "")
      }
      placedBy(BB) {
        var jB;
        return (null === (jB = QB.i[BB]) || void 0 === jB ? void 0 : jB.meta.rootName) === dB.d ? dB.f : null
      }
      shape(BB, jB, zB, nB, NB, UB) {
        var aB, pB, rB;
        const sB = null !== (aB = null === (pB = QB.i[NB]) || void 0 === pB ? void 0 : pB.name) && void 0 !== aB ? aB : "",
          JB = UB || sB !== dB.f ? null !== (rB = (0, IB.M)(sB)) && void 0 !== rB ? rB : "water" : function(BB, jB, zB, QB) {
            return yB.some(((nB, dB) => {
              let [NB, UB, aB] = nB;
              const pB = GB(BB(jB + NB, zB + UB, QB + aB), "cryo");
              return null !== pB && "port" !== pB.kind && (0, IB.T)(uB, pB, kB[dB])
            })) ? "cryo" : "water"
          }(BB, jB, zB, nB),
          mB = function(BB, jB, zB, QB) {
            let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              dB = 0;
            return yB.forEach(((NB, UB) => {
              let [aB, pB, rB] = NB;
              const sB = GB(BB(jB + aB, zB + pB, QB + rB), nB);
              sB && (0, IB.T)(uB, sB, kB[UB]) && (dB |= 1 << UB)
            })), dB
          }(BB, jB, zB, nB, JB),
          LB = UB ? function(BB) {
            var jB;
            return !0 === (null === (jB = SB(BB)) || void 0 === jB ? void 0 : jB.full)
          }(sB) : EB(BB, jB, zB, nB, JB, mB);
        return (0, QB.k)((0, dB.m)(JB, mB, LB))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);