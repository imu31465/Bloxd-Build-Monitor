export const id = 236;
export const ids = [236];
export const modules = {
  37593: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => LQ,
      i: () => kQ,
      m: () => qQ,
      p: () => DQ,
      t: () => oQ
    });
    const LQ = 1.001,
      qQ = .501,
      oQ = .025,
      DQ = .75,
      kQ = .08,
      vQ = 4;

    function mQ() {
      const QQ = qQ,
        FQ = oQ,
        wQ = QQ - FQ / 2,
        LQ = (2 * QQ - 2 * FQ) / (2 * vQ - 1),
        DQ = [];
      for (const qQ of [-wQ, wQ])
        for (const oQ of [-wQ, wQ])
          for (let wQ = 0; wQ < vQ; wQ++) {
            const kQ = -QQ + FQ + LQ * (2 * wQ + .5);
            DQ.push([LQ, FQ, FQ, kQ, qQ, oQ]), DQ.push([FQ, LQ, FQ, qQ, kQ, oQ]), DQ.push([FQ, FQ, LQ, qQ, oQ, kQ])
          }
      for (const qQ of [-wQ, wQ])
        for (const QQ of [-wQ, wQ])
          for (const LQ of [-wQ, wQ]) DQ.push([FQ, FQ, FQ, qQ, QQ, LQ]);
      return DQ
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
  37944: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => NQ,
      g: () => TQ
    });
    var LQ = wQ(9195),
      qQ = wQ(9238);
    const oQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var DQ = wQ(9258),
      kQ = wQ(37768),
      vQ = wQ(9252);
    const mQ = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function uQ(QQ) {
      let [FQ, wQ] = QQ;
      return [-wQ, FQ]
    }

    function HQ(QQ, FQ) {
      return QQ[0] === FQ[0] && QQ[1] === FQ[1]
    }

    function bQ(QQ, FQ) {
      return QQ[0] * FQ[0] + QQ[1] * FQ[1] === 0
    }
    const YQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var xQ = wQ(9280);

    function AQ(QQ, FQ, wQ, LQ, qQ) {
      return FQ < xQ.p || FQ >= xQ.p + xQ.r || Math.floor(QQ / xQ.x) === Math.floor(LQ / xQ.x) && Math.floor(wQ / xQ.x) === Math.floor(qQ / xQ.x)
    }
    const tQ = "Splitter",
      eQ = "Sorting Gate",
      MQ = new Set(xQ.M),
      GQ = new Set([...xQ.M, "Belt Loader", "Fast Loader", eQ]),
      pQ = new Set(xQ.v),
      cQ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function CQ(QQ) {
      var FQ, wQ;
      return null !== (FQ = null === (wQ = LQ.h[QQ]) || void 0 === wQ ? void 0 : wQ.meta.rootName) && void 0 !== FQ ? FQ : ""
    }

    function SQ(QQ) {
      return CQ(QQ) === xQ.h && (0, xQ.W)(LQ.h[QQ].name)
    }
    var iQ = wQ(9246),
      WQ = wQ(9268);
    const RQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function OQ(QQ) {
      var FQ, wQ;
      const qQ = null === (FQ = LQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.meta;
      return (null === qQ || void 0 === qQ ? void 0 : qQ.rootName) !== WQ.k ? null : {
        rot: null !== (wQ = qQ.rot) && void 0 !== wQ ? wQ : 1,
        half: (0, WQ.d)(qQ.rootName, qQ.metaStr)
      }
    }

    function sQ(QQ, FQ, wQ, LQ) {
      return OQ(QQ(FQ, wQ, LQ))
    }

    function rQ(QQ, FQ, wQ, LQ, qQ) {
      let {
        rot: oQ,
        half: DQ
      } = qQ;
      const [kQ, vQ] = (0, WQ.i)(oQ, DQ), mQ = sQ(QQ, FQ + kQ, wQ, LQ + vQ);
      return null !== mQ && mQ.rot === oQ && mQ.half === WQ.m[DQ]
    }
    var IQ = wQ(37950);
    const UQ = [new class {
      constructor() {
        this.reshapeOffsets = YQ
      }
      handles(QQ) {
        var FQ;
        return "Stairs" === (null === (FQ = LQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.model)
      }
      affects(QQ) {
        return this.handles(QQ)
      }
      shape(QQ, FQ, wQ, qQ, oQ) {
        const DQ = this.stairsOf(oQ),
          kQ = this.cornerAt(QQ, FQ, wQ, qQ, DQ),
          mQ = DQ.half === vQ.c.top ? "top" : "bot";
        return (0, LQ.j)(`${LQ.h[oQ].meta.rootName}|meta|rot${DQ.rot}|${mQ}${null===kQ?"":`|${kQ}`}`)
      }
      stairsOf(QQ) {
        const {
          rot: FQ,
          halfblockPlacement: wQ
        } = LQ.h[QQ].meta;
        return {
          rot: FQ,
          half: wQ
        }
      }
      stairsAt(QQ, FQ, wQ, LQ) {
        const qQ = QQ(FQ, wQ, LQ);
        return this.handles(qQ) ? this.stairsOf(qQ) : null
      }
      cornerAt(QQ, FQ, wQ, LQ, qQ) {
        let {
          rot: oQ,
          half: DQ
        } = qQ;
        const kQ = mQ[oQ],
          vQ = qQ => {
            let [kQ, vQ] = qQ;
            const mQ = this.stairsAt(QQ, FQ + kQ, wQ, LQ + vQ);
            return null !== mQ && mQ.rot === oQ && mQ.half === DQ
          },
          YQ = this.stairsAt(QQ, FQ + kQ[0], wQ, LQ + kQ[1]);
        if (null !== YQ && YQ.half === DQ) {
          const QQ = mQ[YQ.rot];
          if (bQ(kQ, QQ) && !vQ([-QQ[0], -QQ[1]])) return HQ(QQ, uQ(kQ)) ? "outerLeft" : "outerRight"
        }
        const xQ = this.stairsAt(QQ, FQ - kQ[0], wQ, LQ - kQ[1]);
        if (null !== xQ && xQ.half === DQ) {
          const QQ = mQ[xQ.rot];
          if (bQ(kQ, QQ) && !vQ(QQ)) return HQ(QQ, uQ(kQ)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = oQ, this.rootIds = new Set(qQ.i.map((QQ => (0, LQ.j)(QQ))))
      }
      handles(QQ) {
        var FQ;
        const wQ = null === (FQ = LQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.meta;
        return void 0 !== wQ && this.rootIds.has(wQ.rootId)
      }
      affects(QQ) {
        return this.handles(QQ)
      }
      placedBy(QQ) {
        return LQ.h[QQ].meta.rootName === qQ.r ? null : qQ.r
      }
      shape(QQ, FQ, wQ, oQ, DQ) {
        const {
          rootId: kQ,
          rootName: vQ,
          rot: mQ
        } = LQ.h[DQ].meta;
        let uQ = 0;
        return qQ.z[mQ].forEach(((qQ, DQ) => {
          var vQ;
          let [HQ, bQ, YQ] = qQ;
          const xQ = null === (vQ = LQ.h[QQ(FQ + HQ, wQ + bQ, oQ + YQ)]) || void 0 === vQ ? void 0 : vQ.meta;
          (null === xQ || void 0 === xQ ? void 0 : xQ.rootId) === kQ && xQ.rot === mQ && (uQ |= 1 << DQ)
        })), (0, LQ.j)((0, qQ.h)(vQ, mQ, uQ))
      }
    }, ...DQ.d.map((QQ => new kQ.e(QQ))), new class {
      constructor() {
        this.reshapeOffsets = cQ
      }
      handles(QQ) {
        const FQ = CQ(QQ);
        return MQ.has(FQ) || FQ === xQ.h
      }
      affects(QQ) {
        const FQ = CQ(QQ);
        return GQ.has(FQ) || pQ.has(FQ) || FQ === tQ || FQ === xQ.h || void 0 !== xQ.b[FQ]
      }
      shape(QQ, FQ, wQ, qQ, oQ, DQ) {
        const {
          rootName: kQ,
          rot: vQ
        } = LQ.h[oQ].meta;
        return kQ === xQ.h ? DQ ? oQ : function(QQ, FQ, wQ, qQ, oQ) {
          const [DQ, kQ] = xQ.e[oQ - 1];
          for (let vQ = 1; vQ <= xQ.I; vQ++) {
            const [mQ, uQ] = [FQ - DQ * vQ, qQ - kQ * vQ], HQ = QQ(mQ, wQ, uQ);
            if (CQ(HQ) === xQ.h && LQ.h[HQ].meta.rot === oQ && AQ(FQ, wQ, qQ, mQ, uQ)) return (0, LQ.j)((0, xQ.eb)(oQ, !SQ(HQ)))
          }
          return (0, LQ.j)((0, xQ.eb)(oQ, !1))
        }(QQ, FQ, wQ, qQ, vQ) : (0, LQ.j)((0, xQ.P)(kQ, vQ, function(QQ, FQ, wQ, qQ, oQ) {
          const [DQ, kQ] = xQ.e[oQ - 1], vQ = (oQ, vQ) => function(QQ, FQ, wQ, qQ, oQ) {
            var DQ;
            const kQ = null === (DQ = LQ.h[QQ]) || void 0 === DQ ? void 0 : DQ.meta;
            if (!kQ) return !1;
            const vQ = kQ.rootName,
              mQ = GQ.has(vQ) || SQ(QQ);
            if (!mQ && !pQ.has(vQ) && vQ !== tQ) return !1;
            const [uQ, HQ] = xQ.e[kQ.rot - 1];
            return mQ ? uQ === -FQ && HQ === -wQ : pQ.has(vQ) ? uQ === FQ && HQ === wQ : (0, xQ.bb)(LQ.h[QQ].name, uQ, HQ).some((QQ => {
              let [LQ, qQ] = QQ;
              return LQ === -FQ && qQ === -wQ
            })) && !(qQ === FQ && oQ === wQ)
          }(QQ(FQ + oQ, wQ, qQ + vQ), oQ, vQ, DQ, kQ), mQ = QQ(FQ - DQ, wQ, qQ - kQ), uQ = CQ(mQ) === tQ && LQ.h[mQ].meta.rot === oQ, HQ = 1 === xQ.b[CQ(QQ(FQ, wQ - 1, qQ))] || -1 === xQ.b[CQ(QQ(FQ, wQ + 1, qQ))];
          if (HQ || uQ || function(QQ, FQ, wQ) {
              if (CQ(QQ) !== eQ) return !1;
              const [qQ, oQ] = xQ.e[LQ.h[QQ].meta.rot - 1], [DQ, kQ] = (0, xQ.R)(LQ.h[QQ].name, qQ, oQ);
              return FQ === DQ && wQ === kQ
            }(mQ, DQ, kQ) || vQ(-DQ, -kQ)) return null;
          const bQ = vQ(-kQ, DQ),
            YQ = vQ(kQ, -DQ);
          if (bQ === YQ) return null;
          return bQ ? "turnLeft" : "turnRight"
        }(QQ, FQ, wQ, qQ, vQ)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = RQ, this.rootId = (0, LQ.j)(WQ.k)
      }
      handles(QQ) {
        var FQ;
        return (null === (FQ = LQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.meta.rootId) === this.rootId
      }
      affects(QQ) {
        return this.handles(QQ)
      }
      shape(QQ, FQ, wQ, qQ, oQ, DQ) {
        const kQ = OQ(oQ);
        return (0, LQ.j)((vQ = kQ.rot, null !== (mQ = DQ ? this.reshapedHalf(QQ, FQ, wQ, qQ, kQ) : this.placedHalf(QQ, FQ, wQ, qQ, kQ.rot)) ? (0, WQ.c)(WQ.k, vQ, mQ) : 1 === vQ ? WQ.k : `${WQ.k}|meta|rot${vQ}`));
        var vQ, mQ
      }
      placedHalf(QQ, FQ, wQ, LQ, qQ) {
        const [oQ, DQ] = iQ.e[qQ];
        for (const [kQ, vQ] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const mQ = FQ + vQ * oQ,
            uQ = LQ + vQ * DQ,
            HQ = sQ(QQ, mQ, wQ, uQ);
          if (null !== HQ && HQ.rot === qQ && (null === HQ.half || !rQ(QQ, mQ, wQ, uQ, HQ))) return kQ
        }
        return null
      }
      reshapedHalf(QQ, FQ, wQ, LQ, qQ) {
        if (null !== qQ.half && rQ(QQ, FQ, wQ, LQ, qQ)) return qQ.half;
        for (const oQ of ["right", "left"]) {
          const [DQ, kQ] = (0, WQ.i)(qQ.rot, oQ), vQ = sQ(QQ, FQ + DQ, wQ, LQ + kQ);
          if (null !== vQ && vQ.rot === qQ.rot && vQ.half === WQ.m[oQ]) return oQ
        }
        return null
      }
    }, new IQ.d];

    function NQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const DQ of UQ)
        if (DQ.handles(qQ)) return DQ.shape(QQ, FQ, wQ, LQ, qQ, oQ);
      return qQ
    }

    function TQ(QQ) {
      for (const LQ of UQ) {
        var FQ, wQ;
        if (LQ.handles(QQ)) return null !== (FQ = null === (wQ = LQ.placedBy) || void 0 === wQ ? void 0 : wQ.call(LQ, QQ)) && void 0 !== FQ ? FQ : null
      }
      return null
    }
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
  },
  37723: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      e: () => oQ
    });
    const LQ = ["Chest", "Loot Chest", "Moonstone Chest"],
      qQ = [{
        name: "Workbench",
        exactMatch: !0
      }, {
        name: "Furnace",
        exactMatch: !0
      }, {
        name: "Artisan Bench",
        exactMatch: !0
      }, {
        name: "Potion Table",
        exactMatch: !0
      }, {
        name: "Salvaging Table",
        exactMatch: !0
      }, {
        name: "Enchanting Table",
        exactMatch: !1
      }];

    function oQ(QQ) {
      return qQ.find((FQ => FQ.exactMatch ? QQ === FQ.name : QQ.includes(FQ.name)))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);