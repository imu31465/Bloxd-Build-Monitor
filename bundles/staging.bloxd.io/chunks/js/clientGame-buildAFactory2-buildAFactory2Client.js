export const id = 11;
export const ids = [11];
export const modules = {
  36687: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => pT,
      d: () => BT,
      h: () => LT,
      i: () => lT
    });
    var WT = mT(34270),
      zT = mT(36693),
      MT = mT(36698),
      gT = mT(8852),
      nT = mT(1567),
      HT = mT(63),
      kT = mT(85),
      jT = mT(1188);

    function lT() {
      var TT;
      return (0, nT.j)(zT.b, (0, zT.j)()), (0, jT.jsx)(jT.Fragment, {
        children: null === (TT = (0, zT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var UT;
      let {
        show: mT
      } = TT;
      (0, nT.j)(zT.b, (0, zT.j)());
      const kT = null === (UT = (0, zT.j)()) || void 0 === UT ? void 0 : UT.menu;
      return (0, HT.useEffect)((() => {
        var TT;
        mT || (null === kT || void 0 === kT || null === (TT = kT.onClose) || void 0 === TT || TT.call(kT), (0, MT.n)())
      }), [mT, kT]), (0, HT.useEffect)((() => mT ? (0, gT.f)(MT.s, MT.d) : void 0), [mT]), (0, jT.jsx)(WT.e, {
        showing: mT,
        globallyUniqueKey: "clientGameMenu",
        children: null === kT || void 0 === kT ? void 0 : kT.content
      })
    }

    function pT(TT) {
      let {
        placement: UT = "bottom"
      } = TT;
      return (0, jT.jsx)("div", {
        id: `clientGameHud-${UT}`,
        style: {
          display: "contents"
        }
      })
    }

    function BT(TT) {
      let {
        children: UT,
        placement: mT = "bottom"
      } = TT;
      const [WT, zT] = (0, HT.useState)(null);
      return (0, HT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${mT}`))
      }), [mT]), WT ? (0, kT.createPortal)(UT, WT) : null
    }
  },
  34270: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT
    });
    var WT = mT(4641),
      zT = mT(4650);

    function MT(TT) {
      let {
        children: UT,
        showing: mT,
        globallyUniqueKey: MT,
        alwaysMountChildren: gT = !1,
        doGameplayStartStopOnShow: nT = !0,
        keepsMovement: HT = !1
      } = TT;
      return (0, zT.d)(!0, mT, MT, HT), (0, WT.c)(nT, mT), mT || gT ? UT : null
    }
  },
  5116: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1188);

    function gT(TT) {
      let {
        options: UT,
        value: mT,
        onChange: WT,
        ariaLabel: gT,
        className: nT,
        reselectable: HT = !1,
        keepsFocus: kT = !1,
        padTabs: jT
      } = TT;
      const lT = void 0 !== jT;
      return (0, MT.jsx)("div", {
        className: zT()("SegmentedToggle", nT),
        role: "group",
        "aria-label": gT,
        "data-pad-tabs": jT,
        children: UT.map((TT => {
          const UT = TT.value === mT;
          return (0, MT.jsx)("button", {
            type: "button",
            "aria-pressed": UT,
            "data-pad-tab": lT || void 0,
            "data-pad-selected": lT && UT ? "true" : void 0,
            "data-pad-default-focus": lT && UT || void 0,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: zT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: UT
            }),
            onMouseDown: kT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              UT && !HT || WT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  8852: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      f: () => zT
    });
    let WT = null;
    const zT = function(TT) {
        const UT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return WT = UT, () => {
          WT === UT && (WT = null)
        }
      },
      MT = () => {
        var TT;
        return null !== (TT = WT) && void 0 !== TT && TT.canCycle() ? WT.cycle : null
      }
  },
  36923: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT,
      c: () => MT
    });
    const WT = new Map;

    function zT(TT) {
      var UT;
      return null === TT ? null : null !== (UT = WT.get(TT)) && void 0 !== UT ? UT : null
    }

    function MT(TT, UT) {
      return WT.set(TT, UT), () => {
        WT.get(TT) === UT && WT.delete(TT)
      }
    }
  },
  38553: (TT, UT, mT) => {
    mT.d(UT, {
      B: () => YT,
      E: () => bT,
      G: () => iT,
      H: () => LT,
      L: () => ZT,
      N: () => vT,
      O: () => zT,
      b: () => jT,
      f: () => HT,
      g: () => qT,
      h: () => kT,
      l: () => nT,
      o: () => gT,
      s: () => MT,
      t: () => eT,
      v: () => pT,
      y: () => OT
    });
    var WT = mT(9406);

    function zT(TT) {
      return Math.floor(TT).toLocaleString("en-US")
    }
    const MT = 2e3,
      gT = .005,
      nT = .001,
      HT = 2,
      kT = "Fluid Tank",
      jT = "Coolant Mixer",
      lT = 144;

    function LT(TT) {
      const UT = TT.split("|")[0];
      return (0, WT.k)(UT) ? UT === WT.d ? "cryo" : "water" : null
    }
    const pT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      BT = 63;

    function ZT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const mT = UT ? function(TT, UT, mT) {
        const WT = pT.findIndex((WT => {
          let [zT, MT, gT] = WT;
          return zT === TT && MT === UT && gT === mT
        }));
        return WT < 0 ? 0 : 1 << WT
      }(UT[0], UT[1], UT[2]) : 0;
      return "maker" === TT ? {
        kind: TT,
        faces: mT
      } : "user" === TT ? {
        kind: TT,
        faces: BT & ~mT
      } : {
        kind: TT,
        faces: BT
      }
    }

    function cT(TT) {
      return "pipe" === TT || "tank" === TT || "maker" === TT
    }

    function vT(TT, UT, mT) {
      return 0 !== (TT.faces & 1 << mT) && 0 !== (UT.faces & 1 << (1 ^ mT)) && (cT(TT.kind) || cT(UT.kind))
    }
    const fT = (TT, UT, mT, WT) => ({
        input: TT,
        inputAmount: WT,
        output: UT,
        outputAmount: mT
      }),
      qT = {
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
          recipes: [fT("Uranium Grit", "Uranium Pellet", 1, 12), fT("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [fT("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: lT,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function iT(TT, UT) {
      return 1e3 * (null !== UT && void 0 !== UT ? UT : 0) / TT.opMs
    }

    function bT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const mT = iT(qT["Coolant Mixer"], lT) * UT;
      return TT <= 0 ? 0 : Math.ceil(TT / mT - 1e-9)
    }
    const OT = "baf2Water",
      eT = "baf2waterclose",
      YT = "baf2wateropen"
  },
  38550: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => JT,
      i: () => iT,
      k: () => qT
    });
    var WT = mT(9330),
      zT = mT(9351),
      MT = mT(9406),
      gT = mT(38553),
      nT = mT(9402);
    const HT = (0, gT.L)("pipe"),
      kT = (0, gT.L)("tank"),
      jT = (0, gT.L)("port"),
      lT = "Reactor Port";

    function LT(TT, UT, mT) {
      const WT = new Set([MT.h, MT.d, lT, ...UT, ...mT, ...TT ? [gT.h] : []]);
      return {
        makers: new Set(UT),
        roots: WT
      }
    }
    const pT = {
        water: LT(!0, ["Condenser"], ["Centrifuge", "Synthesizer", gT.b]),
        cryo: LT(!1, [gT.b], [])
      },
      BT = new Set([...pT.water.roots, ...pT.cryo.roots]),
      ZT = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      cT = zT.g.map((TT => ZT[TT])),
      vT = cT.map((TT => {
        let [UT, mT, WT] = TT;
        return gT.v.findIndex((TT => {
          let [zT, MT, gT] = TT;
          return zT === UT && MT === mT && gT === WT
        }))
      }));

    function fT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const mT = WT.g[TT],
        zT = null === mT || void 0 === mT ? void 0 : mT.meta.rootName,
        LT = pT[UT];
      if (!zT || !LT.roots.has(zT)) return null;
      if ((0, MT.k)(zT)) return (0, gT.H)(mT.name) === UT ? HT : null;
      if (zT === gT.h) return kT;
      if (zT === lT) return mT.name.endsWith("|Water") ? jT : null;
      const [BT, ZT] = nT.f[(mT.meta.rot || 1) - 1];
      return (0, gT.L)(LT.makers.has(zT) ? "maker" : "user", [-BT, 0, -ZT])
    }

    function qT(TT, UT, mT, zT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: nT
      } = pT[MT];
      return cT.some(((kT, jT) => {
        var lT, LT;
        let [pT, BT, ZT] = kT;
        const cT = TT(UT + pT, mT + BT, zT + ZT),
          qT = fT(cT, MT);
        return null !== qT && nT.has(null !== (lT = null === (LT = WT.g[cT]) || void 0 === LT ? void 0 : LT.meta.rootName) && void 0 !== lT ? lT : "") && !(0, gT.N)(HT, qT, vT[jT])
      }))
    }

    function iT(TT) {
      const UT = WT.g[TT];
      return UT ? (0, gT.H)(UT.name) : null
    }
    let bT = null;

    function OT(TT) {
      if (!bT) {
        bT = new Map;
        for (const TT of ["water", "cryo"])
          for (let UT = 0; UT < 64; UT++)
            for (const mT of [!1, !0]) bT.set((0, MT.m)(TT, UT, mT), {
              RL: TT,
              mask: UT,
              full: mT
            })
      }
      return bT.get(TT)
    }
    const eT = new Map(Array.from({
      length: MT.i + 1
    }, ((TT, UT) => [(0, MT.o)(UT), UT])));

    function YT(TT, UT, mT, zT, MT, gT) {
      return cT.some(((nT, HT) => {
        var kT, jT, lT;
        let [LT, pT, BT] = nT;
        if (0 === (gT >> HT & 1)) return !1;
        const ZT = null !== (kT = null === (jT = WT.g[TT(UT + LT, mT + pT, zT + BT)]) || void 0 === jT ? void 0 : jT.name) && void 0 !== kT ? kT : "",
          cT = OT(ZT);
        return cT ? cT.RL === MT && cT.full : (null !== (lT = function(TT) {
          var UT;
          return null !== (UT = eT.get(TT)) && void 0 !== UT ? UT : null
        }(ZT)) && void 0 !== lT ? lT : 0) > 0
      }))
    }
    class JT {
      constructor() {
        this.reshapeOffsets = cT
      }
      handles(TT) {
        return null !== iT(TT)
      }
      affects(TT) {
        var UT, mT;
        return BT.has(null !== (UT = null === (mT = WT.g[TT]) || void 0 === mT ? void 0 : mT.meta.rootName) && void 0 !== UT ? UT : "")
      }
      placedBy(TT) {
        var UT;
        return (null === (UT = WT.g[TT]) || void 0 === UT ? void 0 : UT.meta.rootName) === MT.d ? MT.h : null
      }
      shape(TT, UT, mT, zT, nT, kT) {
        var jT, lT, LT;
        const pT = null !== (jT = null === (lT = WT.g[nT]) || void 0 === lT ? void 0 : lT.name) && void 0 !== jT ? jT : "",
          BT = kT || pT !== MT.h ? null !== (LT = (0, gT.H)(pT)) && void 0 !== LT ? LT : "water" : function(TT, UT, mT, WT) {
            return cT.some(((zT, MT) => {
              let [nT, kT, jT] = zT;
              const lT = fT(TT(UT + nT, mT + kT, WT + jT), "cryo");
              return null !== lT && "port" !== lT.kind && (0, gT.N)(HT, lT, vT[MT])
            })) ? "cryo" : "water"
          }(TT, UT, mT, zT),
          ZT = function(TT, UT, mT, WT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              MT = 0;
            return cT.forEach(((nT, kT) => {
              let [jT, lT, LT] = nT;
              const pT = fT(TT(UT + jT, mT + lT, WT + LT), zT);
              pT && (0, gT.N)(HT, pT, vT[kT]) && (MT |= 1 << kT)
            })), MT
          }(TT, UT, mT, zT, BT),
          qT = kT ? function(TT) {
            var UT;
            return !0 === (null === (UT = OT(TT)) || void 0 === UT ? void 0 : UT.full)
          }(pT) : YT(TT, UT, mT, zT, BT, ZT);
        return (0, WT.j)((0, MT.m)(BT, ZT, qT))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);