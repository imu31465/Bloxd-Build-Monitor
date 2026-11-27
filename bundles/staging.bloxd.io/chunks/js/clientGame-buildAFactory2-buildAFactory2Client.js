export const id = 11;
export const ids = [11];
export const modules = {
  37868: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => UW,
      l: () => xW,
      o: () => ZW
    });
    var mW = OW(35220),
      EW = OW(3361),
      NW = OW(3368),
      PW = OW(9954),
      LW = OW(1526),
      cW = OW(62),
      wW = OW(80),
      tW = OW(1283);

    function ZW() {
      var WW;
      return (0, LW.g)(EW.g, (0, EW.F)()), (0, tW.jsx)(tW.Fragment, {
        children: null === (WW = (0, EW.F)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function xW(WW) {
      var iW;
      let {
        show: OW
      } = WW;
      (0, LW.g)(EW.g, (0, EW.F)());
      const wW = null === (iW = (0, EW.F)()) || void 0 === iW ? void 0 : iW.menu;
      return (0, cW.useEffect)((() => {
        var WW;
        OW || (null === wW || void 0 === wW || null === (WW = wW.onClose) || void 0 === WW || WW.call(wW), (0, NW.s)())
      }), [OW, wW]), (0, cW.useEffect)((() => OW ? (0, PW.e)(NW.C, NW.f) : void 0), [OW]), (0, tW.jsx)(mW.d, {
        showing: OW,
        globallyUniqueKey: "clientGameMenu",
        children: null === wW || void 0 === wW ? void 0 : wW.content
      })
    }
    const lW = new Map,
      AW = new Set;

    function bW(WW, iW) {
      iW ? lW.set(WW, iW) : lW.delete(WW);
      for (const OW of AW) OW()
    }

    function jW(WW) {
      let {
        placement: iW = "bottom"
      } = WW;
      const OW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const WW = OW.current;
        return bW(iW, WW), () => {
          lW.get(iW) === WW && bW(iW, null)
        }
      }), [iW]), (0, tW.jsx)("div", {
        ref: OW,
        id: `clientGameHud-${iW}`,
        style: {
          display: "contents"
        }
      })
    }

    function UW(WW) {
      let {
        children: iW,
        placement: OW = "bottom"
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => {
        var WW;
        return null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null
      }));
      return (0, cW.useEffect)((() => {
        const WW = () => {
          var WW;
          EW(null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null)
        };
        return AW.add(WW), WW(), () => {
          AW.delete(WW)
        }
      }), [OW]), mW ? (0, wW.createPortal)(iW, mW) : null
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  37980: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      c: () => NW
    });
    const mW = new Map;

    function EW(WW) {
      var iW;
      return null === WW ? null : null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
    }

    function NW(WW, iW) {
      return mW.set(WW, iW), () => {
        mW.get(WW) === iW && mW.delete(WW)
      }
    }
  },
  39606: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => yW,
      F: () => KW,
      G: () => MW,
      J: () => xW,
      M: () => bW,
      N: () => UW,
      O: () => EW,
      c: () => tW,
      f: () => cW,
      j: () => sW,
      l: () => wW,
      n: () => LW,
      q: () => PW,
      t: () => NW,
      w: () => YW,
      x: () => lW,
      y: () => SW
    });
    var mW = OW(5797);

    function EW(WW) {
      return Math.floor(WW).toLocaleString("en-US")
    }
    const NW = 2e3,
      PW = .005,
      LW = .001,
      cW = 2,
      wW = "Fluid Tank",
      tW = "Coolant Mixer",
      ZW = 144;

    function xW(WW) {
      const iW = WW.split("|")[0];
      return (0, mW.p)(iW) ? iW === mW.e ? "cryo" : "water" : null
    }
    const lW = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      AW = 63;

    function bW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const OW = iW ? function(WW, iW, OW) {
        const mW = lW.findIndex((mW => {
          let [EW, NW, PW] = mW;
          return EW === WW && NW === iW && PW === OW
        }));
        return mW < 0 ? 0 : 1 << mW
      }(iW[0], iW[1], iW[2]) : 0;
      return "maker" === WW ? {
        kind: WW,
        faces: OW
      } : "user" === WW ? {
        kind: WW,
        faces: AW & ~OW
      } : {
        kind: WW,
        faces: AW
      }
    }

    function jW(WW) {
      return "pipe" === WW || "tank" === WW || "maker" === WW
    }

    function UW(WW, iW, OW) {
      return 0 !== (WW.faces & 1 << OW) && 0 !== (iW.faces & 1 << (1 ^ OW)) && (jW(WW.kind) || jW(iW.kind))
    }
    const kW = (WW, iW, OW, mW) => ({
        input: WW,
        inputAmount: mW,
        output: iW,
        outputAmount: OW
      }),
      sW = {
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
          recipes: [kW("Uranium Grit", "Uranium Pellet", 1, 12), kW("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [kW("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: ZW,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function MW(WW, iW) {
      return 1e3 * (null !== iW && void 0 !== iW ? iW : 0) / WW.opMs
    }

    function KW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const OW = MW(sW["Coolant Mixer"], ZW) * iW;
      return WW <= 0 ? 0 : Math.ceil(WW / OW - 1e-9)
    }
    const SW = "baf2Water",
      YW = "baf2waterclose",
      yW = "baf2wateropen"
  },
  39602: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => TW,
      g: () => MW,
      i: () => sW
    });
    var mW = OW(5725),
      EW = OW(5745),
      NW = OW(5797),
      PW = OW(39606),
      LW = OW(5790);
    const cW = (0, PW.M)("pipe"),
      wW = (0, PW.M)("tank"),
      tW = (0, PW.M)("port"),
      ZW = "Reactor Port";

    function xW(WW, iW, OW) {
      const mW = new Set([NW.h, NW.e, ZW, ...iW, ...OW, ...WW ? [PW.l] : []]);
      return {
        makers: new Set(iW),
        roots: mW
      }
    }
    const lW = {
        water: xW(!0, ["Condenser"], ["Centrifuge", "Synthesizer", PW.c]),
        cryo: xW(!1, [PW.c], [])
      },
      AW = new Set([...lW.water.roots, ...lW.cryo.roots]),
      bW = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      jW = EW.g.map((WW => bW[WW])),
      UW = jW.map((WW => {
        let [iW, OW, mW] = WW;
        return PW.x.findIndex((WW => {
          let [EW, NW, PW] = WW;
          return EW === iW && NW === OW && PW === mW
        }))
      }));

    function kW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const OW = mW.j[WW],
        EW = null === OW || void 0 === OW ? void 0 : OW.meta.rootName,
        xW = lW[iW];
      if (!EW || !xW.roots.has(EW)) return null;
      if ((0, NW.p)(EW)) return (0, PW.J)(OW.name) === iW ? cW : null;
      if (EW === PW.l) return wW;
      if (EW === ZW) return OW.name.endsWith("|Water") ? tW : null;
      const [AW, bW] = LW.h[(OW.meta.rot || 1) - 1];
      return (0, PW.M)(xW.makers.has(EW) ? "maker" : "user", [-AW, 0, -bW])
    }

    function sW(WW, iW, OW, EW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: LW
      } = lW[NW];
      return jW.some(((wW, tW) => {
        var ZW, xW;
        let [lW, AW, bW] = wW;
        const jW = WW(iW + lW, OW + AW, EW + bW),
          sW = kW(jW, NW);
        return null !== sW && LW.has(null !== (ZW = null === (xW = mW.j[jW]) || void 0 === xW ? void 0 : xW.meta.rootName) && void 0 !== ZW ? ZW : "") && !(0, PW.N)(cW, sW, UW[tW])
      }))
    }

    function MW(WW) {
      const iW = mW.j[WW];
      return iW ? (0, PW.J)(iW.name) : null
    }
    let KW = null;

    function SW(WW) {
      if (!KW) {
        KW = new Map;
        for (const WW of ["water", "cryo"])
          for (let iW = 0; iW < 64; iW++)
            for (const OW of [!1, !0]) KW.set((0, NW.s)(WW, iW, OW), {
              dl: WW,
              mask: iW,
              full: OW
            })
      }
      return KW.get(WW)
    }
    const YW = new Map(Array.from({
      length: NW.l + 1
    }, ((WW, iW) => [(0, NW.u)(iW), iW])));

    function yW(WW, iW, OW, EW, NW, PW) {
      return jW.some(((LW, cW) => {
        var wW, tW, ZW;
        let [xW, lW, AW] = LW;
        if (0 === (PW >> cW & 1)) return !1;
        const bW = null !== (wW = null === (tW = mW.j[WW(iW + xW, OW + lW, EW + AW)]) || void 0 === tW ? void 0 : tW.name) && void 0 !== wW ? wW : "",
          jW = SW(bW);
        return jW ? jW.dl === NW && jW.full : (null !== (ZW = function(WW) {
          var iW;
          return null !== (iW = YW.get(WW)) && void 0 !== iW ? iW : null
        }(bW)) && void 0 !== ZW ? ZW : 0) > 0
      }))
    }
    class TW {
      constructor() {
        this.reshapeOffsets = jW
      }
      handles(WW) {
        return null !== MW(WW)
      }
      affects(WW) {
        var iW, OW;
        return AW.has(null !== (iW = null === (OW = mW.j[WW]) || void 0 === OW ? void 0 : OW.meta.rootName) && void 0 !== iW ? iW : "")
      }
      placedBy(WW) {
        var iW;
        return (null === (iW = mW.j[WW]) || void 0 === iW ? void 0 : iW.meta.rootName) === NW.e ? NW.h : null
      }
      shape(WW, iW, OW, EW, LW, wW) {
        var tW, ZW, xW;
        const lW = null !== (tW = null === (ZW = mW.j[LW]) || void 0 === ZW ? void 0 : ZW.name) && void 0 !== tW ? tW : "",
          AW = wW || lW !== NW.h ? null !== (xW = (0, PW.J)(lW)) && void 0 !== xW ? xW : "water" : function(WW, iW, OW, mW) {
            return jW.some(((EW, NW) => {
              let [LW, wW, tW] = EW;
              const ZW = kW(WW(iW + LW, OW + wW, mW + tW), "cryo");
              return null !== ZW && "port" !== ZW.kind && (0, PW.N)(cW, ZW, UW[NW])
            })) ? "cryo" : "water"
          }(WW, iW, OW, EW),
          bW = function(WW, iW, OW, mW) {
            let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              NW = 0;
            return jW.forEach(((LW, wW) => {
              let [tW, ZW, xW] = LW;
              const lW = kW(WW(iW + tW, OW + ZW, mW + xW), EW);
              lW && (0, PW.N)(cW, lW, UW[wW]) && (NW |= 1 << wW)
            })), NW
          }(WW, iW, OW, EW, AW),
          sW = wW ? function(WW) {
            var iW;
            return !0 === (null === (iW = SW(WW)) || void 0 === iW ? void 0 : iW.full)
          }(lW) : yW(WW, iW, OW, EW, AW, bW);
        return (0, mW.l)((0, NW.s)(AW, bW, sW))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);