export const id = 234;
export const ids = [234];
export const modules = {
  37598: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU,
      g: () => tU,
      i: () => TU,
      j: () => pU,
      m: () => PU,
      p: () => EU
    });
    const tU = 1.001,
      pU = .501,
      EU = .025,
      PU = .75,
      TU = .08,
      qU = 4;

    function KU() {
      const UU = pU,
        RU = EU,
        gU = UU - RU / 2,
        tU = (2 * UU - 2 * RU) / (2 * qU - 1),
        PU = [];
      for (const pU of [-gU, gU])
        for (const EU of [-gU, gU])
          for (let gU = 0; gU < qU; gU++) {
            const TU = -UU + RU + tU * (2 * gU + .5);
            PU.push([tU, RU, RU, TU, pU, EU]), PU.push([RU, tU, RU, pU, TU, EU]), PU.push([RU, RU, tU, pU, EU, TU])
          }
      for (const pU of [-gU, gU])
        for (const UU of [-gU, gU])
          for (const tU of [-gU, gU]) PU.push([RU, RU, RU, pU, UU, tU]);
      return PU
    }
  },
  37989: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => IU,
      D: () => wU,
      H: () => mU,
      L: () => xU,
      P: () => jU,
      T: () => hU,
      V: () => eU,
      Y: () => pU,
      e: () => cU,
      i: () => qU,
      l: () => fU,
      o: () => KU,
      r: () => TU,
      s: () => PU,
      w: () => EU,
      x: () => JU,
      z: () => uU
    });
    var tU = gU(9152);

    function pU(UU) {
      return Math.floor(UU).toLocaleString("en-US")
    }
    const EU = 2e3,
      PU = .005,
      TU = .001,
      qU = 2,
      KU = "Fluid Tank",
      cU = "Coolant Mixer",
      GU = 144;

    function jU(UU) {
      const RU = UU.split("|")[0];
      return (0, tU.h)(RU) ? RU === tU.d ? "cryo" : "water" : null
    }
    const uU = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      CU = 63;

    function hU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const gU = RU ? function(UU, RU, gU) {
        const tU = uU.findIndex((tU => {
          let [pU, EU, PU] = tU;
          return pU === UU && EU === RU && PU === gU
        }));
        return tU < 0 ? 0 : 1 << tU
      }(RU[0], RU[1], RU[2]) : 0;
      return "maker" === UU ? {
        kind: UU,
        faces: gU
      } : "user" === UU ? {
        kind: UU,
        faces: CU & ~gU
      } : {
        kind: UU,
        faces: CU
      }
    }

    function QU(UU) {
      return "pipe" === UU || "tank" === UU || "maker" === UU
    }

    function eU(UU, RU, gU) {
      return 0 !== (UU.faces & 1 << gU) && 0 !== (RU.faces & 1 << (1 ^ gU)) && (QU(UU.kind) || QU(RU.kind))
    }
    const WU = (UU, RU, gU, tU) => ({
        input: UU,
        inputAmount: tU,
        output: RU,
        outputAmount: gU
      }),
      fU = {
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
          recipes: [WU("Uranium Grit", "Uranium Pellet", 1, 12), WU("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [WU("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: GU,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function xU(UU, RU) {
      return 1e3 * (null !== RU && void 0 !== RU ? RU : 0) / UU.opMs
    }

    function mU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gU = xU(fU["Coolant Mixer"], GU) * RU;
      return UU <= 0 ? 0 : Math.ceil(UU / gU - 1e-9)
    }
    const IU = "baf2Water",
      JU = "baf2waterclose",
      wU = "baf2wateropen"
  },
  37980: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => VU,
      e: () => rU
    });
    var tU = gU(9078),
      pU = gU(9110);
    const EU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var PU = gU(9125),
      TU = gU(37781),
      qU = gU(9121);
    const KU = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function cU(UU) {
      let [RU, gU] = UU;
      return [-gU, RU]
    }

    function GU(UU, RU) {
      return UU[0] === RU[0] && UU[1] === RU[1]
    }

    function jU(UU, RU) {
      return UU[0] * RU[0] + UU[1] * RU[1] === 0
    }
    const uU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var CU = gU(9149);

    function hU(UU, RU, gU, tU, pU) {
      return RU < CU.q || RU >= CU.q + CU.s || Math.floor(UU / CU.u) === Math.floor(tU / CU.u) && Math.floor(gU / CU.u) === Math.floor(pU / CU.u)
    }
    const QU = "Splitter",
      eU = "Sorting Gate",
      WU = new Set(CU.J),
      fU = new Set([...CU.J, "Belt Loader", "Fast Loader", eU]),
      xU = new Set(CU.t),
      mU = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function IU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = tU.f[UU]) || void 0 === gU ? void 0 : gU.meta.rootName) && void 0 !== RU ? RU : ""
    }

    function JU(UU) {
      return IU(UU) === CU.h && (0, CU.W)(tU.f[UU].name)
    }
    var wU = gU(9116),
      nU = gU(9130);
    const bU = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function oU(UU) {
      var RU, gU;
      const pU = null === (RU = tU.f[UU]) || void 0 === RU ? void 0 : RU.meta;
      return (null === pU || void 0 === pU ? void 0 : pU.rootName) !== nU.l ? null : {
        rot: null !== (gU = pU.rot) && void 0 !== gU ? gU : 1,
        half: (0, nU.e)(pU.rootName, pU.metaStr)
      }
    }

    function ZU(UU, RU, gU, tU) {
      return oU(UU(RU, gU, tU))
    }

    function aU(UU, RU, gU, tU, pU) {
      let {
        rot: EU,
        half: PU
      } = pU;
      const [TU, qU] = (0, nU.i)(EU, PU), KU = ZU(UU, RU + TU, gU, tU + qU);
      return null !== KU && KU.rot === EU && KU.half === nU.o[PU]
    }
    var YU = gU(37985);
    const BU = [new class {
      constructor() {
        this.reshapeOffsets = uU
      }
      handles(UU) {
        var RU;
        return "Stairs" === (null === (RU = tU.f[UU]) || void 0 === RU ? void 0 : RU.model)
      }
      affects(UU) {
        return this.handles(UU)
      }
      shape(UU, RU, gU, pU, EU) {
        const PU = this.stairsOf(EU),
          TU = this.cornerAt(UU, RU, gU, pU, PU),
          KU = PU.half === qU.d.top ? "top" : "bot";
        return (0, tU.i)(`${tU.f[EU].meta.rootName}|meta|rot${PU.rot}|${KU}${null===TU?"":`|${TU}`}`)
      }
      stairsOf(UU) {
        const {
          rot: RU,
          halfblockPlacement: gU
        } = tU.f[UU].meta;
        return {
          rot: RU,
          half: gU
        }
      }
      stairsAt(UU, RU, gU, tU) {
        const pU = UU(RU, gU, tU);
        return this.handles(pU) ? this.stairsOf(pU) : null
      }
      cornerAt(UU, RU, gU, tU, pU) {
        let {
          rot: EU,
          half: PU
        } = pU;
        const TU = KU[EU],
          qU = pU => {
            let [TU, qU] = pU;
            const KU = this.stairsAt(UU, RU + TU, gU, tU + qU);
            return null !== KU && KU.rot === EU && KU.half === PU
          },
          uU = this.stairsAt(UU, RU + TU[0], gU, tU + TU[1]);
        if (null !== uU && uU.half === PU) {
          const UU = KU[uU.rot];
          if (jU(TU, UU) && !qU([-UU[0], -UU[1]])) return GU(UU, cU(TU)) ? "outerLeft" : "outerRight"
        }
        const CU = this.stairsAt(UU, RU - TU[0], gU, tU - TU[1]);
        if (null !== CU && CU.half === PU) {
          const UU = KU[CU.rot];
          if (jU(TU, UU) && !qU(UU)) return GU(UU, cU(TU)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = EU, this.rootIds = new Set(pU.i.map((UU => (0, tU.i)(UU))))
      }
      handles(UU) {
        var RU;
        const gU = null === (RU = tU.f[UU]) || void 0 === RU ? void 0 : RU.meta;
        return void 0 !== gU && this.rootIds.has(gU.rootId)
      }
      affects(UU) {
        return this.handles(UU)
      }
      placedBy(UU) {
        return tU.f[UU].meta.rootName === pU.o ? null : pU.o
      }
      shape(UU, RU, gU, EU, PU) {
        const {
          rootId: TU,
          rootName: qU,
          rot: KU
        } = tU.f[PU].meta;
        let cU = 0;
        return pU.v[KU].forEach(((pU, PU) => {
          var qU;
          let [GU, jU, uU] = pU;
          const CU = null === (qU = tU.f[UU(RU + GU, gU + jU, EU + uU)]) || void 0 === qU ? void 0 : qU.meta;
          (null === CU || void 0 === CU ? void 0 : CU.rootId) === TU && CU.rot === KU && (cU |= 1 << PU)
        })), (0, tU.i)((0, pU.e)(qU, KU, cU))
      }
    }, ...PU.c.map((UU => new TU.d(UU))), new class {
      constructor() {
        this.reshapeOffsets = mU
      }
      handles(UU) {
        const RU = IU(UU);
        return WU.has(RU) || RU === CU.h
      }
      affects(UU) {
        const RU = IU(UU);
        return fU.has(RU) || xU.has(RU) || RU === QU || RU === CU.h || void 0 !== CU.e[RU]
      }
      shape(UU, RU, gU, pU, EU, PU) {
        const {
          rootName: TU,
          rot: qU
        } = tU.f[EU].meta;
        return TU === CU.h ? PU ? EU : function(UU, RU, gU, pU, EU) {
          const [PU, TU] = CU.g[EU - 1];
          for (let qU = 1; qU <= CU.F; qU++) {
            const [KU, cU] = [RU - PU * qU, pU - TU * qU], GU = UU(KU, gU, cU);
            if (IU(GU) === CU.h && tU.f[GU].meta.rot === EU && hU(RU, gU, pU, KU, cU)) return (0, tU.i)((0, CU.$)(EU, !JU(GU)))
          }
          return (0, tU.i)((0, CU.$)(EU, !1))
        }(UU, RU, gU, pU, qU) : (0, tU.i)((0, CU.N)(TU, qU, function(UU, RU, gU, pU, EU) {
          const [PU, TU] = CU.g[EU - 1], qU = (EU, qU) => function(UU, RU, gU, pU, EU) {
            var PU;
            const TU = null === (PU = tU.f[UU]) || void 0 === PU ? void 0 : PU.meta;
            if (!TU) return !1;
            const qU = TU.rootName,
              KU = fU.has(qU) || JU(UU);
            if (!KU && !xU.has(qU) && qU !== QU) return !1;
            const [cU, GU] = CU.g[TU.rot - 1];
            return KU ? cU === -RU && GU === -gU : xU.has(qU) ? cU === RU && GU === gU : (0, CU.Z)(tU.f[UU].name, cU, GU).some((UU => {
              let [tU, pU] = UU;
              return tU === -RU && pU === -gU
            })) && !(pU === RU && EU === gU)
          }(UU(RU + EU, gU, pU + qU), EU, qU, PU, TU), KU = UU(RU - PU, gU, pU - TU), cU = IU(KU) === QU && tU.f[KU].meta.rot === EU, GU = 1 === CU.e[IU(UU(RU, gU - 1, pU))] || -1 === CU.e[IU(UU(RU, gU + 1, pU))];
          if (GU || cU || function(UU, RU, gU) {
              if (IU(UU) !== eU) return !1;
              const [pU, EU] = CU.g[tU.f[UU].meta.rot - 1], [PU, TU] = (0, CU.Q)(tU.f[UU].name, pU, EU);
              return RU === PU && gU === TU
            }(KU, PU, TU) || qU(-PU, -TU)) return null;
          const jU = qU(-TU, PU),
            uU = qU(TU, -PU);
          if (jU === uU) return null;
          return jU ? "turnLeft" : "turnRight"
        }(UU, RU, gU, pU, qU)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = bU, this.rootId = (0, tU.i)(nU.l)
      }
      handles(UU) {
        var RU;
        return (null === (RU = tU.f[UU]) || void 0 === RU ? void 0 : RU.meta.rootId) === this.rootId
      }
      affects(UU) {
        return this.handles(UU)
      }
      shape(UU, RU, gU, pU, EU, PU) {
        const TU = oU(EU);
        return (0, tU.i)((qU = TU.rot, null !== (KU = PU ? this.reshapedHalf(UU, RU, gU, pU, TU) : this.placedHalf(UU, RU, gU, pU, TU.rot)) ? (0, nU.b)(nU.l, qU, KU) : 1 === qU ? nU.l : `${nU.l}|meta|rot${qU}`));
        var qU, KU
      }
      placedHalf(UU, RU, gU, tU, pU) {
        const [EU, PU] = wU.c[pU];
        for (const [TU, qU] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const KU = RU + qU * EU,
            cU = tU + qU * PU,
            GU = ZU(UU, KU, gU, cU);
          if (null !== GU && GU.rot === pU && (null === GU.half || !aU(UU, KU, gU, cU, GU))) return TU
        }
        return null
      }
      reshapedHalf(UU, RU, gU, tU, pU) {
        if (null !== pU.half && aU(UU, RU, gU, tU, pU)) return pU.half;
        for (const EU of ["right", "left"]) {
          const [PU, TU] = (0, nU.i)(pU.rot, EU), qU = ZU(UU, RU + PU, gU, tU + TU);
          if (null !== qU && qU.rot === pU.rot && qU.half === nU.o[EU]) return EU
        }
        return null
      }
    }, new YU.d];

    function VU(UU, RU, gU, tU, pU) {
      let EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const PU of BU)
        if (PU.handles(pU)) return PU.shape(UU, RU, gU, tU, pU, EU);
      return pU
    }

    function rU(UU) {
      for (const tU of BU) {
        var RU, gU;
        if (tU.handles(UU)) return null !== (RU = null === (gU = tU.placedBy) || void 0 === gU ? void 0 : gU.call(tU, UU)) && void 0 !== RU ? RU : null
      }
      return null
    }
  },
  37985: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => nU,
      g: () => xU,
      k: () => fU
    });
    var tU = gU(9078),
      pU = gU(9101),
      EU = gU(9152),
      PU = gU(37989),
      TU = gU(9149);
    const qU = (0, PU.T)("pipe"),
      KU = (0, PU.T)("tank"),
      cU = (0, PU.T)("port"),
      GU = "Reactor Port";

    function jU(UU, RU, gU) {
      const tU = new Set([EU.f, EU.d, GU, ...RU, ...gU, ...UU ? [PU.o] : []]);
      return {
        makers: new Set(RU),
        roots: tU
      }
    }
    const uU = {
        water: jU(!0, ["Condenser"], ["Centrifuge", "Synthesizer", PU.e]),
        cryo: jU(!1, [PU.e], [])
      },
      CU = new Set([...uU.water.roots, ...uU.cryo.roots]),
      hU = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      QU = pU.c.map((UU => hU[UU])),
      eU = QU.map((UU => {
        let [RU, gU, tU] = UU;
        return PU.z.findIndex((UU => {
          let [pU, EU, PU] = UU;
          return pU === RU && EU === gU && PU === tU
        }))
      }));

    function WU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const gU = tU.f[UU],
        pU = null === gU || void 0 === gU ? void 0 : gU.meta.rootName,
        jU = uU[RU];
      if (!pU || !jU.roots.has(pU)) return null;
      if ((0, EU.h)(pU)) return (0, PU.P)(gU.name) === RU ? qU : null;
      if (pU === PU.o) return KU;
      if (pU === GU) return gU.name.endsWith("|Water") ? cU : null;
      const [CU, hU] = TU.g[(gU.meta.rot || 1) - 1];
      return (0, PU.T)(jU.makers.has(pU) ? "maker" : "user", [-CU, 0, -hU])
    }

    function fU(UU, RU, gU, pU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: TU
      } = uU[EU];
      return QU.some(((KU, cU) => {
        var GU, jU;
        let [uU, CU, hU] = KU;
        const QU = UU(RU + uU, gU + CU, pU + hU),
          fU = WU(QU, EU);
        return null !== fU && TU.has(null !== (GU = null === (jU = tU.f[QU]) || void 0 === jU ? void 0 : jU.meta.rootName) && void 0 !== GU ? GU : "") && !(0, PU.V)(qU, fU, eU[cU])
      }))
    }

    function xU(UU) {
      const RU = tU.f[UU];
      return RU ? (0, PU.P)(RU.name) : null
    }
    let mU = null;

    function IU(UU) {
      if (!mU) {
        mU = new Map;
        for (const UU of ["water", "cryo"])
          for (let RU = 0; RU < 64; RU++)
            for (const gU of [!1, !0]) mU.set((0, EU.j)(UU, RU, gU), {
              Nj: UU,
              mask: RU,
              full: gU
            })
      }
      return mU.get(UU)
    }
    const JU = new Map(Array.from({
      length: EU.g + 1
    }, ((UU, RU) => [(0, EU.k)(RU), RU])));

    function wU(UU, RU, gU, pU, EU, PU) {
      return QU.some(((TU, qU) => {
        var KU, cU, GU;
        let [jU, uU, CU] = TU;
        if (0 === (PU >> qU & 1)) return !1;
        const hU = null !== (KU = null === (cU = tU.f[UU(RU + jU, gU + uU, pU + CU)]) || void 0 === cU ? void 0 : cU.name) && void 0 !== KU ? KU : "",
          QU = IU(hU);
        return QU ? QU.Nj === EU && QU.full : (null !== (GU = function(UU) {
          var RU;
          return null !== (RU = JU.get(UU)) && void 0 !== RU ? RU : null
        }(hU)) && void 0 !== GU ? GU : 0) > 0
      }))
    }
    class nU {
      constructor() {
        this.reshapeOffsets = QU
      }
      handles(UU) {
        return null !== xU(UU)
      }
      affects(UU) {
        var RU, gU;
        return CU.has(null !== (RU = null === (gU = tU.f[UU]) || void 0 === gU ? void 0 : gU.meta.rootName) && void 0 !== RU ? RU : "")
      }
      placedBy(UU) {
        var RU;
        return (null === (RU = tU.f[UU]) || void 0 === RU ? void 0 : RU.meta.rootName) === EU.d ? EU.f : null
      }
      shape(UU, RU, gU, pU, TU, KU) {
        var cU, GU, jU;
        const uU = null !== (cU = null === (GU = tU.f[TU]) || void 0 === GU ? void 0 : GU.name) && void 0 !== cU ? cU : "",
          CU = KU || uU !== EU.f ? null !== (jU = (0, PU.P)(uU)) && void 0 !== jU ? jU : "water" : function(UU, RU, gU, tU) {
            return QU.some(((pU, EU) => {
              let [TU, KU, cU] = pU;
              const GU = WU(UU(RU + TU, gU + KU, tU + cU), "cryo");
              return null !== GU && "port" !== GU.kind && (0, PU.V)(qU, GU, eU[EU])
            })) ? "cryo" : "water"
          }(UU, RU, gU, pU),
          hU = function(UU, RU, gU, tU) {
            let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              EU = 0;
            return QU.forEach(((TU, KU) => {
              let [cU, GU, jU] = TU;
              const uU = WU(UU(RU + cU, gU + GU, tU + jU), pU);
              uU && (0, PU.V)(qU, uU, eU[KU]) && (EU |= 1 << KU)
            })), EU
          }(UU, RU, gU, pU, CU),
          fU = KU ? function(UU) {
            var RU;
            return !0 === (null === (RU = IU(UU)) || void 0 === RU ? void 0 : RU.full)
          }(uU) : wU(UU, RU, gU, pU, CU, hU);
        return (0, tU.i)((0, EU.j)(CU, hU, fU))
      }
    }
  },
  37740: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => EU
    });
    const tU = ["Chest", "Loot Chest", "Moonstone Chest"],
      pU = [{
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

    function EU(UU) {
      return pU.find((RU => RU.exactMatch ? UU === RU.name : UU.includes(RU.name)))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);