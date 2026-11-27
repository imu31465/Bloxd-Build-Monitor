export const id = 11;
export const ids = [11];
export const modules = {
  37796: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR,
      d: () => nR,
      g: () => wR,
      j: () => KR
    });
    var yR = GR(35140),
      tR = GR(3494),
      uR = GR(3498),
      ZR = GR(10048),
      qR = GR(1581),
      iR = GR(66),
      fR = GR(83),
      VR = GR(1378);

    function KR() {
      var RR;
      return (0, qR.h)(tR.e, (0, tR.r)()), (0, VR.jsx)(VR.Fragment, {
        children: null === (RR = (0, tR.r)()) || void 0 === RR ? void 0 : RR.content
      })
    }

    function wR(RR) {
      var JR;
      let {
        show: GR
      } = RR;
      (0, qR.h)(tR.e, (0, tR.r)());
      const fR = null === (JR = (0, tR.r)()) || void 0 === JR ? void 0 : JR.menu;
      return (0, iR.useEffect)((() => {
        var RR;
        GR || (null === fR || void 0 === fR || null === (RR = fR.onClose) || void 0 === RR || RR.call(fR), (0, uR.m)())
      }), [GR, fR]), (0, iR.useEffect)((() => GR ? (0, ZR.e)(uR.q, uR.e) : void 0), [GR]), (0, VR.jsx)(yR.b, {
        showing: GR,
        globallyUniqueKey: "clientGameMenu",
        children: null === fR || void 0 === fR ? void 0 : fR.content
      })
    }
    const rR = new Map,
      eR = new Set;

    function aR(RR, JR) {
      JR ? rR.set(RR, JR) : rR.delete(RR);
      for (const GR of eR) GR()
    }

    function LR(RR) {
      let {
        placement: JR = "bottom"
      } = RR;
      const GR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const RR = GR.current;
        return aR(JR, RR), () => {
          rR.get(JR) === RR && aR(JR, null)
        }
      }), [JR]), (0, VR.jsx)("div", {
        ref: GR,
        id: `clientGameHud-${JR}`,
        style: {
          display: "contents"
        }
      })
    }

    function nR(RR) {
      let {
        children: JR,
        placement: GR = "bottom"
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => {
        var RR;
        return null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null
      }));
      return (0, iR.useEffect)((() => {
        const RR = () => {
          var RR;
          tR(null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null)
        };
        return eR.add(RR), RR(), () => {
          eR.delete(RR)
        }
      }), [GR]), yR ? (0, fR.createPortal)(JR, yR) : null
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  37942: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      h: () => uR
    });
    const yR = new Map;

    function tR(RR) {
      var JR;
      return null === RR ? null : null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
    }

    function uR(RR, JR) {
      return yR.set(RR, JR), () => {
        yR.get(RR) === JR && yR.delete(RR)
      }
    }
  },
  39585: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => CR,
      E: () => AR,
      H: () => wR,
      J: () => aR,
      N: () => nR,
      R: () => tR,
      b: () => VR,
      c: () => iR,
      d: () => WR,
      e: () => fR,
      g: () => qR,
      i: () => ZR,
      l: () => uR,
      o: () => MR,
      s: () => rR,
      v: () => XR,
      y: () => BR
    });
    var yR = GR(5938);

    function tR(RR) {
      return Math.floor(RR).toLocaleString("en-US")
    }
    const uR = 2e3,
      ZR = .005,
      qR = .001,
      iR = 2,
      fR = "Fluid Tank",
      VR = "Coolant Mixer",
      KR = 144;

    function wR(RR) {
      const JR = RR.split("|")[0];
      return (0, yR.i)(JR) ? JR === yR.c ? "cryo" : "water" : null
    }
    const rR = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      eR = 63;

    function aR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const GR = JR ? function(RR, JR, GR) {
        const yR = rR.findIndex((yR => {
          let [tR, uR, ZR] = yR;
          return tR === RR && uR === JR && ZR === GR
        }));
        return yR < 0 ? 0 : 1 << yR
      }(JR[0], JR[1], JR[2]) : 0;
      return "maker" === RR ? {
        kind: RR,
        faces: GR
      } : "user" === RR ? {
        kind: RR,
        faces: eR & ~GR
      } : {
        kind: RR,
        faces: eR
      }
    }

    function LR(RR) {
      return "pipe" === RR || "tank" === RR || "maker" === RR
    }

    function nR(RR, JR, GR) {
      return 0 !== (RR.faces & 1 << GR) && 0 !== (JR.faces & 1 << (1 ^ GR)) && (LR(RR.kind) || LR(JR.kind))
    }
    const UR = (RR, JR, GR, yR) => ({
        input: RR,
        inputAmount: yR,
        output: JR,
        outputAmount: GR
      }),
      WR = {
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
          recipes: [UR("Uranium Grit", "Uranium Pellet", 1, 12), UR("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [UR("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: KR,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function AR(RR, JR) {
      return 1e3 * (null !== JR && void 0 !== JR ? JR : 0) / RR.opMs
    }

    function CR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GR = AR(WR["Coolant Mixer"], KR) * JR;
      return RR <= 0 ? 0 : Math.ceil(RR / GR - 1e-9)
    }
    const XR = "baf2Water",
      MR = "baf2waterclose",
      BR = "baf2wateropen"
  },
  39576: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => lR,
      e: () => AR,
      g: () => WR
    });
    var yR = GR(5844),
      tR = GR(5871),
      uR = GR(5938),
      ZR = GR(39585),
      qR = GR(5935);
    const iR = (0, ZR.J)("pipe"),
      fR = (0, ZR.J)("tank"),
      VR = (0, ZR.J)("port"),
      KR = "Reactor Port";

    function wR(RR, JR, GR) {
      const yR = new Set([uR.f, uR.c, KR, ...JR, ...GR, ...RR ? [ZR.e] : []]);
      return {
        makers: new Set(JR),
        roots: yR
      }
    }
    const rR = {
        water: wR(!0, ["Condenser"], ["Centrifuge", "Synthesizer", ZR.b]),
        cryo: wR(!1, [ZR.b], [])
      },
      eR = new Set([...rR.water.roots, ...rR.cryo.roots]),
      aR = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      LR = tR.f.map((RR => aR[RR])),
      nR = LR.map((RR => {
        let [JR, GR, yR] = RR;
        return ZR.s.findIndex((RR => {
          let [tR, uR, ZR] = RR;
          return tR === JR && uR === GR && ZR === yR
        }))
      }));

    function UR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const GR = yR.l[RR],
        tR = null === GR || void 0 === GR ? void 0 : GR.meta.rootName,
        wR = rR[JR];
      if (!tR || !wR.roots.has(tR)) return null;
      if ((0, uR.i)(tR)) return (0, ZR.H)(GR.name) === JR ? iR : null;
      if (tR === ZR.e) return fR;
      if (tR === KR) return GR.name.endsWith("|Water") ? VR : null;
      const [eR, aR] = qR.h[(GR.meta.rot || 1) - 1];
      return (0, ZR.J)(wR.makers.has(tR) ? "maker" : "user", [-eR, 0, -aR])
    }

    function WR(RR, JR, GR, tR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: qR
      } = rR[uR];
      return LR.some(((fR, VR) => {
        var KR, wR;
        let [rR, eR, aR] = fR;
        const LR = RR(JR + rR, GR + eR, tR + aR),
          WR = UR(LR, uR);
        return null !== WR && qR.has(null !== (KR = null === (wR = yR.l[LR]) || void 0 === wR ? void 0 : wR.meta.rootName) && void 0 !== KR ? KR : "") && !(0, ZR.N)(iR, WR, nR[VR])
      }))
    }

    function AR(RR) {
      const JR = yR.l[RR];
      return JR ? (0, ZR.H)(JR.name) : null
    }
    let CR = null;

    function XR(RR) {
      if (!CR) {
        CR = new Map;
        for (const RR of ["water", "cryo"])
          for (let JR = 0; JR < 64; JR++)
            for (const GR of [!1, !0]) CR.set((0, uR.l)(RR, JR, GR), {
              Nr: RR,
              mask: JR,
              full: GR
            })
      }
      return CR.get(RR)
    }
    const MR = new Map(Array.from({
      length: uR.g + 1
    }, ((RR, JR) => [(0, uR.p)(JR), JR])));

    function BR(RR, JR, GR, tR, uR, ZR) {
      return LR.some(((qR, iR) => {
        var fR, VR, KR;
        let [wR, rR, eR] = qR;
        if (0 === (ZR >> iR & 1)) return !1;
        const aR = null !== (fR = null === (VR = yR.l[RR(JR + wR, GR + rR, tR + eR)]) || void 0 === VR ? void 0 : VR.name) && void 0 !== fR ? fR : "",
          LR = XR(aR);
        return LR ? LR.Nr === uR && LR.full : (null !== (KR = function(RR) {
          var JR;
          return null !== (JR = MR.get(RR)) && void 0 !== JR ? JR : null
        }(aR)) && void 0 !== KR ? KR : 0) > 0
      }))
    }
    class lR {
      constructor() {
        this.reshapeOffsets = LR
      }
      handles(RR) {
        return null !== AR(RR)
      }
      affects(RR) {
        var JR, GR;
        return eR.has(null !== (JR = null === (GR = yR.l[RR]) || void 0 === GR ? void 0 : GR.meta.rootName) && void 0 !== JR ? JR : "")
      }
      placedBy(RR) {
        var JR;
        return (null === (JR = yR.l[RR]) || void 0 === JR ? void 0 : JR.meta.rootName) === uR.c ? uR.f : null
      }
      shape(RR, JR, GR, tR, qR, fR) {
        var VR, KR, wR;
        const rR = null !== (VR = null === (KR = yR.l[qR]) || void 0 === KR ? void 0 : KR.name) && void 0 !== VR ? VR : "",
          eR = fR || rR !== uR.f ? null !== (wR = (0, ZR.H)(rR)) && void 0 !== wR ? wR : "water" : function(RR, JR, GR, yR) {
            return LR.some(((tR, uR) => {
              let [qR, fR, VR] = tR;
              const KR = UR(RR(JR + qR, GR + fR, yR + VR), "cryo");
              return null !== KR && "port" !== KR.kind && (0, ZR.N)(iR, KR, nR[uR])
            })) ? "cryo" : "water"
          }(RR, JR, GR, tR),
          aR = function(RR, JR, GR, yR) {
            let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              uR = 0;
            return LR.forEach(((qR, fR) => {
              let [VR, KR, wR] = qR;
              const rR = UR(RR(JR + VR, GR + KR, yR + wR), tR);
              rR && (0, ZR.N)(iR, rR, nR[fR]) && (uR |= 1 << fR)
            })), uR
          }(RR, JR, GR, tR, eR),
          WR = fR ? function(RR) {
            var JR;
            return !0 === (null === (JR = XR(RR)) || void 0 === JR ? void 0 : JR.full)
          }(rR) : BR(RR, JR, GR, tR, eR, aR);
        return (0, yR.n)((0, uR.l)(eR, aR, WR))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);