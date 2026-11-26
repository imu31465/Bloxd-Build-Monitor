export const id = 261;
export const ids = [261];
export const modules = {
  38809: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      f: () => cU,
      j: () => FU,
      m: () => yU,
      o: () => AU,
      r: () => QU
    });
    const cU = 1.001,
      yU = .501,
      QU = .025,
      AU = .75,
      FU = .08,
      oU = 4;

    function DU() {
      const UU = yU,
        XU = QU,
        zU = UU - XU / 2,
        cU = (2 * UU - 2 * XU) / (2 * oU - 1),
        AU = [];
      for (const yU of [-zU, zU])
        for (const QU of [-zU, zU])
          for (let zU = 0; zU < oU; zU++) {
            const FU = -UU + XU + cU * (2 * zU + .5);
            AU.push([cU, XU, XU, FU, yU, QU]), AU.push([XU, cU, XU, yU, FU, QU]), AU.push([XU, XU, cU, yU, QU, FU])
          }
      for (const yU of [-zU, zU])
        for (const UU of [-zU, zU])
          for (const cU of [-zU, zU]) AU.push([XU, XU, XU, yU, UU, cU]);
      return AU
    }
  },
  39203: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => RU,
      B: () => WU,
      C: () => ZU,
      E: () => BU,
      G: () => NU,
      H: () => aU,
      J: () => gU,
      K: () => yU,
      b: () => EU,
      d: () => oU,
      h: () => GU,
      j: () => DU,
      m: () => FU,
      p: () => AU,
      r: () => QU,
      s: () => PU,
      w: () => IU
    });
    var cU = zU(9874);

    function yU(UU) {
      return Math.floor(UU).toLocaleString("en-US")
    }
    const QU = 2e3,
      AU = .005,
      FU = .001,
      oU = 2,
      DU = "Fluid Tank",
      EU = "Coolant Mixer",
      YU = 144;

    function NU(UU) {
      const XU = UU.split("|")[0];
      return (0, cU.o)(XU) ? XU === cU.e ? "cryo" : "water" : null
    }
    const IU = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      pU = 63;

    function aU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const zU = XU ? function(UU, XU, zU) {
        const cU = IU.findIndex((cU => {
          let [yU, QU, AU] = cU;
          return yU === UU && QU === XU && AU === zU
        }));
        return cU < 0 ? 0 : 1 << cU
      }(XU[0], XU[1], XU[2]) : 0;
      return "maker" === UU ? {
        kind: UU,
        faces: zU
      } : "user" === UU ? {
        kind: UU,
        faces: pU & ~zU
      } : {
        kind: UU,
        faces: pU
      }
    }

    function tU(UU) {
      return "pipe" === UU || "tank" === UU || "maker" === UU
    }

    function gU(UU, XU, zU) {
      return 0 !== (UU.faces & 1 << zU) && 0 !== (XU.faces & 1 << (1 ^ zU)) && (tU(UU.kind) || tU(XU.kind))
    }
    const kU = (UU, XU, zU, cU) => ({
        input: UU,
        inputAmount: cU,
        output: XU,
        outputAmount: zU
      }),
      GU = {
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
          recipes: [kU("Uranium Grit", "Uranium Pellet", 1, 12), kU("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [kU("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: YU,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function BU(UU, XU) {
      return 1e3 * (null !== XU && void 0 !== XU ? XU : 0) / UU.opMs
    }

    function ZU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const zU = BU(GU["Coolant Mixer"], YU) * XU;
      return UU <= 0 ? 0 : Math.ceil(UU / zU - 1e-9)
    }
    const RU = "baf2Water",
      PU = "baf2waterclose",
      WU = "baf2wateropen"
  },
  39196: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => SU,
      i: () => rU
    });
    var cU = zU(9782),
      yU = zU(9821);
    const QU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var AU = zU(9836),
      FU = zU(38994),
      oU = zU(9834);
    const DU = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function EU(UU) {
      let [XU, zU] = UU;
      return [-zU, XU]
    }

    function YU(UU, XU) {
      return UU[0] === XU[0] && UU[1] === XU[1]
    }

    function NU(UU, XU) {
      return UU[0] * XU[0] + UU[1] * XU[1] === 0
    }
    const IU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var pU = zU(9867);

    function aU(UU, XU, zU, cU, yU) {
      return XU < pU.n || XU >= pU.n + pU.r || Math.floor(UU / pU.w) === Math.floor(cU / pU.w) && Math.floor(zU / pU.w) === Math.floor(yU / pU.w)
    }
    const tU = "Splitter",
      gU = "Sorting Gate",
      kU = new Set(pU.J),
      GU = new Set([...pU.J, "Belt Loader", "Fast Loader", gU]),
      BU = new Set(pU.u),
      ZU = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function RU(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = cU.h[UU]) || void 0 === zU ? void 0 : zU.meta.rootName) && void 0 !== XU ? XU : ""
    }

    function PU(UU) {
      return RU(UU) === pU.h && (0, pU.T)(cU.h[UU].name)
    }
    var WU = zU(9827),
      dU = zU(9848);
    const LU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function eU(UU) {
      var XU, zU;
      const yU = null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta;
      return (null === yU || void 0 === yU ? void 0 : yU.rootName) !== dU.o ? null : {
        rot: null !== (zU = yU.rot) && void 0 !== zU ? zU : 1,
        half: (0, dU.f)(yU.rootName, yU.metaStr)
      }
    }

    function CU(UU, XU, zU, cU) {
      return eU(UU(XU, zU, cU))
    }

    function wU(UU, XU, zU, cU, yU) {
      let {
        rot: QU,
        half: AU
      } = yU;
      const [FU, oU] = (0, dU.l)(QU, AU), DU = CU(UU, XU + FU, zU, cU + oU);
      return null !== DU && DU.rot === QU && DU.half === dU.q[AU]
    }
    var qU = zU(39200);
    const OU = [new class {
      constructor() {
        this.reshapeOffsets = IU
      }
      handles(UU) {
        var XU;
        return "Stairs" === (null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.model)
      }
      affects(UU) {
        return this.handles(UU)
      }
      shape(UU, XU, zU, yU, QU) {
        const AU = this.stairsOf(QU),
          FU = this.cornerAt(UU, XU, zU, yU, AU),
          DU = AU.half === oU.e.top ? "top" : "bot";
        return (0, cU.j)(`${cU.h[QU].meta.rootName}|meta|rot${AU.rot}|${DU}${null===FU?"":`|${FU}`}`)
      }
      stairsOf(UU) {
        const {
          rot: XU,
          halfblockPlacement: zU
        } = cU.h[UU].meta;
        return {
          rot: XU,
          half: zU
        }
      }
      stairsAt(UU, XU, zU, cU) {
        const yU = UU(XU, zU, cU);
        return this.handles(yU) ? this.stairsOf(yU) : null
      }
      cornerAt(UU, XU, zU, cU, yU) {
        let {
          rot: QU,
          half: AU
        } = yU;
        const FU = DU[QU],
          oU = yU => {
            let [FU, oU] = yU;
            const DU = this.stairsAt(UU, XU + FU, zU, cU + oU);
            return null !== DU && DU.rot === QU && DU.half === AU
          },
          IU = this.stairsAt(UU, XU + FU[0], zU, cU + FU[1]);
        if (null !== IU && IU.half === AU) {
          const UU = DU[IU.rot];
          if (NU(FU, UU) && !oU([-UU[0], -UU[1]])) return YU(UU, EU(FU)) ? "outerLeft" : "outerRight"
        }
        const pU = this.stairsAt(UU, XU - FU[0], zU, cU - FU[1]);
        if (null !== pU && pU.half === AU) {
          const UU = DU[pU.rot];
          if (NU(FU, UU) && !oU(UU)) return YU(UU, EU(FU)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = QU, this.rootIds = new Set(yU.e.map((UU => (0, cU.j)(UU))))
      }
      handles(UU) {
        var XU;
        const zU = null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta;
        return void 0 !== zU && this.rootIds.has(zU.rootId)
      }
      affects(UU) {
        return this.handles(UU)
      }
      placedBy(UU) {
        return cU.h[UU].meta.rootName === yU.k ? null : yU.k
      }
      shape(UU, XU, zU, QU, AU) {
        const {
          rootId: FU,
          rootName: oU,
          rot: DU
        } = cU.h[AU].meta;
        let EU = 0;
        return yU.s[DU].forEach(((yU, AU) => {
          var oU;
          let [YU, NU, IU] = yU;
          const pU = null === (oU = cU.h[UU(XU + YU, zU + NU, QU + IU)]) || void 0 === oU ? void 0 : oU.meta;
          (null === pU || void 0 === pU ? void 0 : pU.rootId) === FU && pU.rot === DU && (EU |= 1 << AU)
        })), (0, cU.j)((0, yU.c)(oU, DU, EU))
      }
    }, ...AU.d.map((UU => new FU.e(UU))), new class {
      constructor() {
        this.reshapeOffsets = ZU
      }
      handles(UU) {
        const XU = RU(UU);
        return kU.has(XU) || XU === pU.h
      }
      affects(UU) {
        const XU = RU(UU);
        return GU.has(XU) || BU.has(XU) || XU === tU || XU === pU.h || void 0 !== pU.b[XU]
      }
      shape(UU, XU, zU, yU, QU, AU) {
        const {
          rootName: FU,
          rot: oU
        } = cU.h[QU].meta;
        return FU === pU.h ? AU ? QU : function(UU, XU, zU, yU, QU) {
          const [AU, FU] = pU.e[QU - 1];
          for (let oU = 1; oU <= pU.F; oU++) {
            const [DU, EU] = [XU - AU * oU, yU - FU * oU], YU = UU(DU, zU, EU);
            if (RU(YU) === pU.h && cU.h[YU].meta.rot === QU && aU(XU, zU, yU, DU, EU)) return (0, cU.j)((0, pU._)(QU, !PU(YU)))
          }
          return (0, cU.j)((0, pU._)(QU, !1))
        }(UU, XU, zU, yU, oU) : (0, cU.j)((0, pU.L)(FU, oU, function(UU, XU, zU, yU, QU) {
          const [AU, FU] = pU.e[QU - 1], oU = (QU, AU) => function(UU, XU, zU) {
            var yU;
            const QU = null === (yU = cU.h[UU]) || void 0 === yU ? void 0 : yU.meta;
            if (!QU) return !1;
            const AU = QU.rootName,
              FU = GU.has(AU) || PU(UU);
            if (!FU && !BU.has(AU) && AU !== tU) return !1;
            const [oU, DU] = pU.e[QU.rot - 1];
            if (FU && oU === -XU && DU === -zU) return !0;
            if (BU.has(AU)) return oU === XU && DU === zU;
            const EU = cU.h[UU].name;
            return (AU === tU ? (0, pU.W)(EU, oU, DU) : AU === gU ? [(0, pU.M)(EU, oU, DU)] : []).some((UU => {
              let [cU, yU] = UU;
              return cU === -XU && yU === -zU
            }))
          }(UU(XU + QU, zU, yU + AU), QU, AU), DU = UU(XU - AU, zU, yU - FU), EU = RU(DU) === tU && cU.h[DU].meta.rot === QU, YU = 1 === pU.b[RU(UU(XU, zU - 1, yU))] || -1 === pU.b[RU(UU(XU, zU + 1, yU))];
          if (YU || EU || oU(-AU, -FU)) return null;
          const NU = oU(-FU, AU),
            IU = oU(FU, -AU);
          if (NU === IU) return null;
          return NU ? "turnLeft" : "turnRight"
        }(UU, XU, zU, yU, oU)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = LU, this.rootId = (0, cU.j)(dU.o)
      }
      handles(UU) {
        var XU;
        return (null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta.rootId) === this.rootId
      }
      affects(UU) {
        return this.handles(UU)
      }
      shape(UU, XU, zU, yU, QU, AU) {
        const FU = eU(QU);
        return (0, cU.j)((oU = FU.rot, null !== (DU = AU ? this.reshapedHalf(UU, XU, zU, yU, FU) : this.placedHalf(UU, XU, zU, yU, FU.rot)) ? (0, dU.b)(dU.o, oU, DU) : 1 === oU ? dU.o : `${dU.o}|meta|rot${oU}`));
        var oU, DU
      }
      placedHalf(UU, XU, zU, cU, yU) {
        const [QU, AU] = WU.d[yU];
        for (const [FU, oU] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const DU = XU + oU * QU,
            EU = cU + oU * AU,
            YU = CU(UU, DU, zU, EU);
          if (null !== YU && YU.rot === yU && (null === YU.half || !wU(UU, DU, zU, EU, YU))) return FU
        }
        return null
      }
      reshapedHalf(UU, XU, zU, cU, yU) {
        if (null !== yU.half && wU(UU, XU, zU, cU, yU)) return yU.half;
        for (const QU of ["right", "left"]) {
          const [AU, FU] = (0, dU.l)(yU.rot, QU), oU = CU(UU, XU + AU, zU, cU + FU);
          if (null !== oU && oU.rot === yU.rot && oU.half === dU.q[QU]) return QU
        }
        return null
      }
    }, new qU.b];

    function SU(UU, XU, zU, cU, yU) {
      let QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const AU of OU)
        if (AU.handles(yU)) return AU.shape(UU, XU, zU, cU, yU, QU);
      return yU
    }

    function rU(UU) {
      for (const cU of OU) {
        var XU, zU;
        if (cU.handles(UU)) return null !== (XU = null === (zU = cU.placedBy) || void 0 === zU ? void 0 : zU.call(cU, UU)) && void 0 !== XU ? XU : null
      }
      return null
    }
  },
  39200: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => dU,
      e: () => BU,
      g: () => GU
    });
    var cU = zU(9782),
      yU = zU(9808),
      QU = zU(9874),
      AU = zU(39203),
      FU = zU(9867);
    const oU = (0, AU.H)("pipe"),
      DU = (0, AU.H)("tank"),
      EU = (0, AU.H)("port"),
      YU = "Reactor Port";

    function NU(UU, XU, zU) {
      const cU = new Set([QU.i, QU.e, YU, ...XU, ...zU, ...UU ? [AU.j] : []]);
      return {
        makers: new Set(XU),
        roots: cU
      }
    }
    const IU = {
        water: NU(!0, ["Condenser"], ["Centrifuge", "Synthesizer", AU.b]),
        cryo: NU(!1, [AU.b], [])
      },
      pU = new Set([...IU.water.roots, ...IU.cryo.roots]),
      aU = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      tU = yU.h.map((UU => aU[UU])),
      gU = tU.map((UU => {
        let [XU, zU, cU] = UU;
        return AU.w.findIndex((UU => {
          let [yU, QU, AU] = UU;
          return yU === XU && QU === zU && AU === cU
        }))
      }));

    function kU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const zU = cU.h[UU],
        yU = null === zU || void 0 === zU ? void 0 : zU.meta.rootName,
        NU = IU[XU];
      if (!yU || !NU.roots.has(yU)) return null;
      if ((0, QU.o)(yU)) return (0, AU.G)(zU.name) === XU ? oU : null;
      if (yU === AU.j) return DU;
      if (yU === YU) return zU.name.endsWith("|Water") ? EU : null;
      const [pU, aU] = FU.e[(zU.meta.rot || 1) - 1];
      return (0, AU.H)(NU.makers.has(yU) ? "maker" : "user", [-pU, 0, -aU])
    }

    function GU(UU, XU, zU, yU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: FU
      } = IU[QU];
      return tU.some(((DU, EU) => {
        var YU, NU;
        let [IU, pU, aU] = DU;
        const tU = UU(XU + IU, zU + pU, yU + aU),
          GU = kU(tU, QU);
        return null !== GU && FU.has(null !== (YU = null === (NU = cU.h[tU]) || void 0 === NU ? void 0 : NU.meta.rootName) && void 0 !== YU ? YU : "") && !(0, AU.J)(oU, GU, gU[EU])
      }))
    }

    function BU(UU) {
      const XU = cU.h[UU];
      return XU ? (0, AU.G)(XU.name) : null
    }
    let ZU = null;

    function RU(UU) {
      if (!ZU) {
        ZU = new Map;
        for (const UU of ["water", "cryo"])
          for (let XU = 0; XU < 64; XU++)
            for (const zU of [!1, !0]) ZU.set((0, QU.r)(UU, XU, zU), {
              BI: UU,
              mask: XU,
              full: zU
            })
      }
      return ZU.get(UU)
    }
    const PU = new Map(Array.from({
      length: QU.m + 1
    }, ((UU, XU) => [(0, QU.s)(XU), XU])));

    function WU(UU, XU, zU, yU, QU, AU) {
      return tU.some(((FU, oU) => {
        var DU, EU, YU;
        let [NU, IU, pU] = FU;
        if (0 === (AU >> oU & 1)) return !1;
        const aU = null !== (DU = null === (EU = cU.h[UU(XU + NU, zU + IU, yU + pU)]) || void 0 === EU ? void 0 : EU.name) && void 0 !== DU ? DU : "",
          tU = RU(aU);
        return tU ? tU.BI === QU && tU.full : (null !== (YU = function(UU) {
          var XU;
          return null !== (XU = PU.get(UU)) && void 0 !== XU ? XU : null
        }(aU)) && void 0 !== YU ? YU : 0) > 0
      }))
    }
    class dU {
      constructor() {
        this.reshapeOffsets = tU
      }
      handles(UU) {
        return null !== BU(UU)
      }
      affects(UU) {
        var XU, zU;
        return pU.has(null !== (XU = null === (zU = cU.h[UU]) || void 0 === zU ? void 0 : zU.meta.rootName) && void 0 !== XU ? XU : "")
      }
      placedBy(UU) {
        var XU;
        return (null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta.rootName) === QU.e ? QU.i : null
      }
      shape(UU, XU, zU, yU, FU, DU) {
        var EU, YU, NU;
        const IU = null !== (EU = null === (YU = cU.h[FU]) || void 0 === YU ? void 0 : YU.name) && void 0 !== EU ? EU : "",
          pU = DU || IU !== QU.i ? null !== (NU = (0, AU.G)(IU)) && void 0 !== NU ? NU : "water" : function(UU, XU, zU, cU) {
            return tU.some(((yU, QU) => {
              let [FU, DU, EU] = yU;
              const YU = kU(UU(XU + FU, zU + DU, cU + EU), "cryo");
              return null !== YU && "port" !== YU.kind && (0, AU.J)(oU, YU, gU[QU])
            })) ? "cryo" : "water"
          }(UU, XU, zU, yU),
          aU = function(UU, XU, zU, cU) {
            let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              QU = 0;
            return tU.forEach(((FU, DU) => {
              let [EU, YU, NU] = FU;
              const IU = kU(UU(XU + EU, zU + YU, cU + NU), yU);
              IU && (0, AU.J)(oU, IU, gU[DU]) && (QU |= 1 << DU)
            })), QU
          }(UU, XU, zU, yU, pU),
          GU = DU ? function(UU) {
            var XU;
            return !0 === (null === (XU = RU(UU)) || void 0 === XU ? void 0 : XU.full)
          }(IU) : WU(UU, XU, zU, yU, pU, aU);
        return (0, cU.j)((0, QU.r)(pU, aU, GU))
      }
    }
  },
  38938: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      g: () => QU
    });
    const cU = ["Chest", "Loot Chest", "Moonstone Chest"],
      yU = [{
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

    function QU(UU) {
      return yU.find((XU => XU.exactMatch ? UU === XU.name : UU.includes(XU.name)))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);