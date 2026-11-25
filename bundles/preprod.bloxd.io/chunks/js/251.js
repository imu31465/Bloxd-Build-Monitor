export const id = 251;
export const ids = [251];
export const modules = {
  38344: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      h: () => wQ,
      i: () => sQ,
      m: () => qQ,
      q: () => zQ,
      s: () => TQ
    });
    const wQ = 1.001,
      qQ = .501,
      TQ = .025,
      zQ = .75,
      sQ = .08,
      FQ = 4;

    function PQ() {
      const QQ = qQ,
        WQ = TQ,
        XQ = QQ - WQ / 2,
        wQ = (2 * QQ - 2 * WQ) / (2 * FQ - 1),
        zQ = [];
      for (const qQ of [-XQ, XQ])
        for (const TQ of [-XQ, XQ])
          for (let XQ = 0; XQ < FQ; XQ++) {
            const sQ = -QQ + WQ + wQ * (2 * XQ + .5);
            zQ.push([wQ, WQ, WQ, sQ, qQ, TQ]), zQ.push([WQ, wQ, WQ, qQ, sQ, TQ]), zQ.push([WQ, WQ, wQ, qQ, TQ, sQ])
          }
      for (const qQ of [-XQ, XQ])
        for (const QQ of [-XQ, XQ])
          for (const wQ of [-XQ, XQ]) zQ.push([WQ, WQ, WQ, qQ, QQ, wQ]);
      return zQ
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
  38698: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => RQ,
      d: () => EQ
    });
    var wQ = XQ(9580),
      qQ = XQ(9616);
    const TQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var zQ = XQ(9637),
      sQ = XQ(38505),
      FQ = XQ(9634);
    const PQ = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function gQ(QQ) {
      let [WQ, XQ] = QQ;
      return [-XQ, WQ]
    }

    function JQ(QQ, WQ) {
      return QQ[0] === WQ[0] && QQ[1] === WQ[1]
    }

    function rQ(QQ, WQ) {
      return QQ[0] * WQ[0] + QQ[1] * WQ[1] === 0
    }
    const IQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var jQ = XQ(9660);

    function BQ(QQ, WQ, XQ, wQ, qQ) {
      return WQ < jQ.p || WQ >= jQ.p + jQ.s || Math.floor(QQ / jQ.y) === Math.floor(wQ / jQ.y) && Math.floor(XQ / jQ.y) === Math.floor(qQ / jQ.y)
    }
    const yQ = "Splitter",
      VQ = "Sorting Gate",
      DQ = new Set(jQ.L),
      pQ = new Set([...jQ.L, "Belt Loader", "Fast Loader", VQ]),
      GQ = new Set(jQ.w),
      UQ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function bQ(QQ) {
      var WQ, XQ;
      return null !== (WQ = null === (XQ = wQ.h[QQ]) || void 0 === XQ ? void 0 : XQ.meta.rootName) && void 0 !== WQ ? WQ : ""
    }

    function vQ(QQ) {
      return bQ(QQ) === jQ.k && (0, jQ._)(wQ.h[QQ].name)
    }
    var dQ = XQ(9625),
      HQ = XQ(9648);
    const aQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function lQ(QQ) {
      var WQ, XQ;
      const qQ = null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta;
      return (null === qQ || void 0 === qQ ? void 0 : qQ.rootName) !== HQ.l ? null : {
        rot: null !== (XQ = qQ.rot) && void 0 !== XQ ? XQ : 1,
        half: (0, HQ.g)(qQ.rootName, qQ.metaStr)
      }
    }

    function hQ(QQ, WQ, XQ, wQ) {
      return lQ(QQ(WQ, XQ, wQ))
    }

    function iQ(QQ, WQ, XQ, wQ, qQ) {
      let {
        rot: TQ,
        half: zQ
      } = qQ;
      const [sQ, FQ] = (0, HQ.k)(TQ, zQ), PQ = hQ(QQ, WQ + sQ, XQ, wQ + FQ);
      return null !== PQ && PQ.rot === TQ && PQ.half === HQ.p[zQ]
    }
    var cQ = XQ(38703);
    const AQ = [new class {
      constructor() {
        this.reshapeOffsets = IQ
      }
      handles(QQ) {
        var WQ;
        return "Stairs" === (null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.model)
      }
      affects(QQ) {
        return this.handles(QQ)
      }
      shape(QQ, WQ, XQ, qQ, TQ) {
        const zQ = this.stairsOf(TQ),
          sQ = this.cornerAt(QQ, WQ, XQ, qQ, zQ),
          PQ = zQ.half === FQ.b.top ? "top" : "bot";
        return (0, wQ.k)(`${wQ.h[TQ].meta.rootName}|meta|rot${zQ.rot}|${PQ}${null===sQ?"":`|${sQ}`}`)
      }
      stairsOf(QQ) {
        const {
          rot: WQ,
          halfblockPlacement: XQ
        } = wQ.h[QQ].meta;
        return {
          rot: WQ,
          half: XQ
        }
      }
      stairsAt(QQ, WQ, XQ, wQ) {
        const qQ = QQ(WQ, XQ, wQ);
        return this.handles(qQ) ? this.stairsOf(qQ) : null
      }
      cornerAt(QQ, WQ, XQ, wQ, qQ) {
        let {
          rot: TQ,
          half: zQ
        } = qQ;
        const sQ = PQ[TQ],
          FQ = qQ => {
            let [sQ, FQ] = qQ;
            const PQ = this.stairsAt(QQ, WQ + sQ, XQ, wQ + FQ);
            return null !== PQ && PQ.rot === TQ && PQ.half === zQ
          },
          IQ = this.stairsAt(QQ, WQ + sQ[0], XQ, wQ + sQ[1]);
        if (null !== IQ && IQ.half === zQ) {
          const QQ = PQ[IQ.rot];
          if (rQ(sQ, QQ) && !FQ([-QQ[0], -QQ[1]])) return JQ(QQ, gQ(sQ)) ? "outerLeft" : "outerRight"
        }
        const jQ = this.stairsAt(QQ, WQ - sQ[0], XQ, wQ - sQ[1]);
        if (null !== jQ && jQ.half === zQ) {
          const QQ = PQ[jQ.rot];
          if (rQ(sQ, QQ) && !FQ(QQ)) return JQ(QQ, gQ(sQ)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = TQ, this.rootIds = new Set(qQ.f.map((QQ => (0, wQ.k)(QQ))))
      }
      handles(QQ) {
        var WQ;
        const XQ = null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta;
        return void 0 !== XQ && this.rootIds.has(XQ.rootId)
      }
      affects(QQ) {
        return this.handles(QQ)
      }
      placedBy(QQ) {
        return wQ.h[QQ].meta.rootName === qQ.j ? null : qQ.j
      }
      shape(QQ, WQ, XQ, TQ, zQ) {
        const {
          rootId: sQ,
          rootName: FQ,
          rot: PQ
        } = wQ.h[zQ].meta;
        let gQ = 0;
        return qQ.s[PQ].forEach(((qQ, zQ) => {
          var FQ;
          let [JQ, rQ, IQ] = qQ;
          const jQ = null === (FQ = wQ.h[QQ(WQ + JQ, XQ + rQ, TQ + IQ)]) || void 0 === FQ ? void 0 : FQ.meta;
          (null === jQ || void 0 === jQ ? void 0 : jQ.rootId) === sQ && jQ.rot === PQ && (gQ |= 1 << zQ)
        })), (0, wQ.k)((0, qQ.d)(FQ, PQ, gQ))
      }
    }, ...zQ.b.map((QQ => new sQ.e(QQ))), new class {
      constructor() {
        this.reshapeOffsets = UQ
      }
      handles(QQ) {
        const WQ = bQ(QQ);
        return DQ.has(WQ) || WQ === jQ.k
      }
      affects(QQ) {
        const WQ = bQ(QQ);
        return pQ.has(WQ) || GQ.has(WQ) || WQ === yQ || WQ === jQ.k || void 0 !== jQ.c[WQ]
      }
      shape(QQ, WQ, XQ, qQ, TQ, zQ) {
        const {
          rootName: sQ,
          rot: FQ
        } = wQ.h[TQ].meta;
        return sQ === jQ.k ? zQ ? TQ : function(QQ, WQ, XQ, qQ, TQ) {
          const [zQ, sQ] = jQ.g[TQ - 1];
          for (let FQ = 1; FQ <= jQ.K; FQ++) {
            const [PQ, gQ] = [WQ - zQ * FQ, qQ - sQ * FQ], JQ = QQ(PQ, XQ, gQ);
            if (bQ(JQ) === jQ.k && wQ.h[JQ].meta.rot === TQ && BQ(WQ, XQ, qQ, PQ, gQ)) return (0, wQ.k)((0, jQ.gb)(TQ, !vQ(JQ)))
          }
          return (0, wQ.k)((0, jQ.gb)(TQ, !1))
        }(QQ, WQ, XQ, qQ, FQ) : (0, wQ.k)((0, jQ.P)(sQ, FQ, function(QQ, WQ, XQ, qQ, TQ) {
          const [zQ, sQ] = jQ.g[TQ - 1], FQ = (TQ, zQ) => function(QQ, WQ, XQ) {
            var qQ;
            const TQ = null === (qQ = wQ.h[QQ]) || void 0 === qQ ? void 0 : qQ.meta;
            if (!TQ) return !1;
            const zQ = TQ.rootName,
              sQ = pQ.has(zQ) || vQ(QQ);
            if (!sQ && !GQ.has(zQ) && zQ !== yQ) return !1;
            const [FQ, PQ] = jQ.g[TQ.rot - 1];
            if (sQ && FQ === -WQ && PQ === -XQ) return !0;
            if (GQ.has(zQ)) return FQ === WQ && PQ === XQ;
            const gQ = wQ.h[QQ].name;
            return (zQ === yQ ? (0, jQ.db)(gQ, FQ, PQ) : zQ === VQ ? [(0, jQ.T)(gQ, FQ, PQ)] : []).some((QQ => {
              let [wQ, qQ] = QQ;
              return wQ === -WQ && qQ === -XQ
            }))
          }(QQ(WQ + TQ, XQ, qQ + zQ), TQ, zQ), PQ = QQ(WQ - zQ, XQ, qQ - sQ), gQ = bQ(PQ) === yQ && wQ.h[PQ].meta.rot === TQ, JQ = 1 === jQ.c[bQ(QQ(WQ, XQ - 1, qQ))] || -1 === jQ.c[bQ(QQ(WQ, XQ + 1, qQ))];
          if (JQ || gQ || FQ(-zQ, -sQ)) return null;
          const rQ = FQ(-sQ, zQ),
            IQ = FQ(sQ, -zQ);
          if (rQ === IQ) return null;
          return rQ ? "turnLeft" : "turnRight"
        }(QQ, WQ, XQ, qQ, FQ)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = aQ, this.rootId = (0, wQ.k)(HQ.l)
      }
      handles(QQ) {
        var WQ;
        return (null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta.rootId) === this.rootId
      }
      affects(QQ) {
        return this.handles(QQ)
      }
      shape(QQ, WQ, XQ, qQ, TQ, zQ) {
        const sQ = lQ(TQ);
        return (0, wQ.k)((FQ = sQ.rot, null !== (PQ = zQ ? this.reshapedHalf(QQ, WQ, XQ, qQ, sQ) : this.placedHalf(QQ, WQ, XQ, qQ, sQ.rot)) ? (0, HQ.e)(HQ.l, FQ, PQ) : 1 === FQ ? HQ.l : `${HQ.l}|meta|rot${FQ}`));
        var FQ, PQ
      }
      placedHalf(QQ, WQ, XQ, wQ, qQ) {
        const [TQ, zQ] = dQ.e[qQ];
        for (const [sQ, FQ] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const PQ = WQ + FQ * TQ,
            gQ = wQ + FQ * zQ,
            JQ = hQ(QQ, PQ, XQ, gQ);
          if (null !== JQ && JQ.rot === qQ && (null === JQ.half || !iQ(QQ, PQ, XQ, gQ, JQ))) return sQ
        }
        return null
      }
      reshapedHalf(QQ, WQ, XQ, wQ, qQ) {
        if (null !== qQ.half && iQ(QQ, WQ, XQ, wQ, qQ)) return qQ.half;
        for (const TQ of ["right", "left"]) {
          const [zQ, sQ] = (0, HQ.k)(qQ.rot, TQ), FQ = hQ(QQ, WQ + zQ, XQ, wQ + sQ);
          if (null !== FQ && FQ.rot === qQ.rot && FQ.half === HQ.p[TQ]) return TQ
        }
        return null
      }
    }, new cQ.b];

    function RQ(QQ, WQ, XQ, wQ, qQ) {
      let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const zQ of AQ)
        if (zQ.handles(qQ)) return zQ.shape(QQ, WQ, XQ, wQ, qQ, TQ);
      return qQ
    }

    function EQ(QQ) {
      for (const wQ of AQ) {
        var WQ, XQ;
        if (wQ.handles(QQ)) return null !== (WQ = null === (XQ = wQ.placedBy) || void 0 === XQ ? void 0 : XQ.call(wQ, QQ)) && void 0 !== WQ ? WQ : null
      }
      return null
    }
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
  },
  38473: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      h: () => TQ
    });
    const wQ = ["Chest", "Loot Chest", "Moonstone Chest"],
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

    function TQ(QQ) {
      return qQ.find((WQ => WQ.exactMatch ? QQ === WQ.name : QQ.includes(WQ.name)))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);