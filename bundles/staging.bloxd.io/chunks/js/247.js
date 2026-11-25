export const id = 247;
export const ids = [247];
export const modules = {
  38468: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG,
      f: () => wG,
      j: () => kG,
      n: () => SG,
      r: () => yG,
      s: () => LG
    });
    const wG = 1.001,
      SG = .501,
      LG = .025,
      yG = .75,
      kG = .08,
      UG = 4;

    function YG() {
      const GG = SG,
        bG = LG,
        ZG = GG - bG / 2,
        wG = (2 * GG - 2 * bG) / (2 * UG - 1),
        yG = [];
      for (const SG of [-ZG, ZG])
        for (const LG of [-ZG, ZG])
          for (let ZG = 0; ZG < UG; ZG++) {
            const kG = -GG + bG + wG * (2 * ZG + .5);
            yG.push([wG, bG, bG, kG, SG, LG]), yG.push([bG, wG, bG, SG, kG, LG]), yG.push([bG, bG, wG, SG, LG, kG])
          }
      for (const SG of [-ZG, ZG])
        for (const GG of [-ZG, ZG])
          for (const wG of [-ZG, ZG]) yG.push([bG, bG, bG, SG, GG, wG]);
      return yG
    }
  },
  38837: (GG, bG, ZG) => {
    ZG.d(bG, {
      D: () => fG,
      E: () => hG,
      I: () => JG,
      K: () => SG,
      d: () => VG,
      e: () => UG,
      f: () => zG,
      g: () => YG,
      j: () => kG,
      k: () => yG,
      m: () => LG,
      o: () => uG,
      p: () => QG,
      t: () => XG,
      x: () => iG,
      y: () => oG,
      z: () => EG
    });
    var wG = ZG(9341);

    function SG(GG) {
      return Math.floor(GG).toLocaleString("en-US")
    }
    const LG = 2e3,
      yG = .005,
      kG = .001,
      UG = 2,
      YG = "Fluid Tank",
      VG = "Coolant Mixer",
      pG = 144;

    function fG(GG) {
      const bG = GG.split("|")[0];
      return (0, wG.l)(bG) ? bG === wG.e ? "cryo" : "water" : null
    }
    const QG = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      KG = 63;

    function hG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ZG = bG ? function(GG, bG, ZG) {
        const wG = QG.findIndex((wG => {
          let [SG, LG, yG] = wG;
          return SG === GG && LG === bG && yG === ZG
        }));
        return wG < 0 ? 0 : 1 << wG
      }(bG[0], bG[1], bG[2]) : 0;
      return "maker" === GG ? {
        kind: GG,
        faces: ZG
      } : "user" === GG ? {
        kind: GG,
        faces: KG & ~ZG
      } : {
        kind: GG,
        faces: KG
      }
    }

    function dG(GG) {
      return "pipe" === GG || "tank" === GG || "maker" === GG
    }

    function JG(GG, bG, ZG) {
      return 0 !== (GG.faces & 1 << ZG) && 0 !== (bG.faces & 1 << (1 ^ ZG)) && (dG(GG.kind) || dG(bG.kind))
    }
    const rG = (GG, bG, ZG, wG) => ({
        input: GG,
        inputAmount: wG,
        output: bG,
        outputAmount: ZG
      }),
      zG = {
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
          recipes: [rG("Uranium Grit", "Uranium Pellet", 1, 12), rG("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [rG("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pG,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function EG(GG, bG) {
      return 1e3 * (null !== bG && void 0 !== bG ? bG : 0) / GG.opMs
    }

    function oG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZG = EG(zG["Coolant Mixer"], pG) * bG;
      return GG <= 0 ? 0 : Math.ceil(GG / ZG - 1e-9)
    }
    const XG = "baf2Water",
      uG = "baf2waterclose",
      iG = "baf2wateropen"
  },
  38822: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => cG,
      f: () => lG
    });
    var wG = ZG(9249),
      SG = ZG(9292);
    const LG = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var yG = ZG(9309),
      kG = ZG(38641),
      UG = ZG(9303);
    const YG = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function VG(GG) {
      let [bG, ZG] = GG;
      return [-ZG, bG]
    }

    function pG(GG, bG) {
      return GG[0] === bG[0] && GG[1] === bG[1]
    }

    function fG(GG, bG) {
      return GG[0] * bG[0] + GG[1] * bG[1] === 0
    }
    const QG = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var KG = ZG(9334);

    function hG(GG, bG, ZG, wG, SG) {
      return bG < KG.n || bG >= KG.n + KG.q || Math.floor(GG / KG.s) === Math.floor(wG / KG.s) && Math.floor(ZG / KG.s) === Math.floor(SG / KG.s)
    }
    const dG = "Splitter",
      JG = "Sorting Gate",
      rG = new Set(KG.G),
      zG = new Set([...KG.G, "Belt Loader", "Fast Loader", JG]),
      EG = new Set(KG.r),
      oG = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function XG(GG) {
      var bG, ZG;
      return null !== (bG = null === (ZG = wG.l[GG]) || void 0 === ZG ? void 0 : ZG.meta.rootName) && void 0 !== bG ? bG : ""
    }

    function uG(GG) {
      return XG(GG) === KG.g && (0, KG.Q)(wG.l[GG].name)
    }
    var iG = ZG(9295),
      CG = ZG(9320);
    const WG = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function mG(GG) {
      var bG, ZG;
      const SG = null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta;
      return (null === SG || void 0 === SG ? void 0 : SG.rootName) !== CG.q ? null : {
        rot: null !== (ZG = SG.rot) && void 0 !== ZG ? ZG : 1,
        half: (0, CG.i)(SG.rootName, SG.metaStr)
      }
    }

    function IG(GG, bG, ZG, wG) {
      return mG(GG(bG, ZG, wG))
    }

    function FG(GG, bG, ZG, wG, SG) {
      let {
        rot: LG,
        half: yG
      } = SG;
      const [kG, UG] = (0, CG.m)(LG, yG), YG = IG(GG, bG + kG, ZG, wG + UG);
      return null !== YG && YG.rot === LG && YG.half === CG.s[yG]
    }
    var vG = ZG(38829);
    const aG = [new class {
      constructor() {
        this.reshapeOffsets = QG
      }
      handles(GG) {
        var bG;
        return "Stairs" === (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.model)
      }
      affects(GG) {
        return this.handles(GG)
      }
      shape(GG, bG, ZG, SG, LG) {
        const yG = this.stairsOf(LG),
          kG = this.cornerAt(GG, bG, ZG, SG, yG),
          YG = yG.half === UG.d.top ? "top" : "bot";
        return (0, wG.p)(`${wG.l[LG].meta.rootName}|meta|rot${yG.rot}|${YG}${null===kG?"":`|${kG}`}`)
      }
      stairsOf(GG) {
        const {
          rot: bG,
          halfblockPlacement: ZG
        } = wG.l[GG].meta;
        return {
          rot: bG,
          half: ZG
        }
      }
      stairsAt(GG, bG, ZG, wG) {
        const SG = GG(bG, ZG, wG);
        return this.handles(SG) ? this.stairsOf(SG) : null
      }
      cornerAt(GG, bG, ZG, wG, SG) {
        let {
          rot: LG,
          half: yG
        } = SG;
        const kG = YG[LG],
          UG = SG => {
            let [kG, UG] = SG;
            const YG = this.stairsAt(GG, bG + kG, ZG, wG + UG);
            return null !== YG && YG.rot === LG && YG.half === yG
          },
          QG = this.stairsAt(GG, bG + kG[0], ZG, wG + kG[1]);
        if (null !== QG && QG.half === yG) {
          const GG = YG[QG.rot];
          if (fG(kG, GG) && !UG([-GG[0], -GG[1]])) return pG(GG, VG(kG)) ? "outerLeft" : "outerRight"
        }
        const KG = this.stairsAt(GG, bG - kG[0], ZG, wG - kG[1]);
        if (null !== KG && KG.half === yG) {
          const GG = YG[KG.rot];
          if (fG(kG, GG) && !UG(GG)) return pG(GG, VG(kG)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = LG, this.rootIds = new Set(SG.g.map((GG => (0, wG.p)(GG))))
      }
      handles(GG) {
        var bG;
        const ZG = null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta;
        return void 0 !== ZG && this.rootIds.has(ZG.rootId)
      }
      affects(GG) {
        return this.handles(GG)
      }
      placedBy(GG) {
        return wG.l[GG].meta.rootName === SG.n ? null : SG.n
      }
      shape(GG, bG, ZG, LG, yG) {
        const {
          rootId: kG,
          rootName: UG,
          rot: YG
        } = wG.l[yG].meta;
        let VG = 0;
        return SG.v[YG].forEach(((SG, yG) => {
          var UG;
          let [pG, fG, QG] = SG;
          const KG = null === (UG = wG.l[GG(bG + pG, ZG + fG, LG + QG)]) || void 0 === UG ? void 0 : UG.meta;
          (null === KG || void 0 === KG ? void 0 : KG.rootId) === kG && KG.rot === YG && (VG |= 1 << yG)
        })), (0, wG.p)((0, SG.f)(UG, YG, VG))
      }
    }, ...yG.d.map((GG => new kG.c(GG))), new class {
      constructor() {
        this.reshapeOffsets = oG
      }
      handles(GG) {
        const bG = XG(GG);
        return rG.has(bG) || bG === KG.g
      }
      affects(GG) {
        const bG = XG(GG);
        return zG.has(bG) || EG.has(bG) || bG === dG || bG === KG.g || void 0 !== KG.b[bG]
      }
      shape(GG, bG, ZG, SG, LG, yG) {
        const {
          rootName: kG,
          rot: UG
        } = wG.l[LG].meta;
        return kG === KG.g ? yG ? LG : function(GG, bG, ZG, SG, LG) {
          const [yG, kG] = KG.e[LG - 1];
          for (let UG = 1; UG <= KG.C; UG++) {
            const [YG, VG] = [bG - yG * UG, SG - kG * UG], pG = GG(YG, ZG, VG);
            if (XG(pG) === KG.g && wG.l[pG].meta.rot === LG && hG(bG, ZG, SG, YG, VG)) return (0, wG.p)((0, KG.V)(LG, !uG(pG)))
          }
          return (0, wG.p)((0, KG.V)(LG, !1))
        }(GG, bG, ZG, SG, UG) : (0, wG.p)((0, KG.K)(kG, UG, function(GG, bG, ZG, SG, LG) {
          const [yG, kG] = KG.e[LG - 1], UG = (LG, yG) => function(GG, bG, ZG) {
            var SG;
            const LG = null === (SG = wG.l[GG]) || void 0 === SG ? void 0 : SG.meta;
            if (!LG) return !1;
            const yG = LG.rootName,
              kG = zG.has(yG) || uG(GG);
            if (!kG && !EG.has(yG) && yG !== dG) return !1;
            const [UG, YG] = KG.e[LG.rot - 1];
            if (kG && UG === -bG && YG === -ZG) return !0;
            if (EG.has(yG)) return UG === bG && YG === ZG;
            const VG = wG.l[GG].name;
            return (yG === dG ? (0, KG.U)(VG, UG, YG) : yG === JG ? [(0, KG.N)(VG, UG, YG)] : []).some((GG => {
              let [wG, SG] = GG;
              return wG === -bG && SG === -ZG
            }))
          }(GG(bG + LG, ZG, SG + yG), LG, yG), YG = GG(bG - yG, ZG, SG - kG), VG = XG(YG) === dG && wG.l[YG].meta.rot === LG, pG = 1 === KG.b[XG(GG(bG, ZG - 1, SG))] || -1 === KG.b[XG(GG(bG, ZG + 1, SG))];
          if (pG || VG || UG(-yG, -kG)) return null;
          const fG = UG(-kG, yG),
            QG = UG(kG, -yG);
          if (fG === QG) return null;
          return fG ? "turnLeft" : "turnRight"
        }(GG, bG, ZG, SG, UG)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = WG, this.rootId = (0, wG.p)(CG.q)
      }
      handles(GG) {
        var bG;
        return (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta.rootId) === this.rootId
      }
      affects(GG) {
        return this.handles(GG)
      }
      shape(GG, bG, ZG, SG, LG, yG) {
        const kG = mG(LG);
        return (0, wG.p)((UG = kG.rot, null !== (YG = yG ? this.reshapedHalf(GG, bG, ZG, SG, kG) : this.placedHalf(GG, bG, ZG, SG, kG.rot)) ? (0, CG.e)(CG.q, UG, YG) : 1 === UG ? CG.q : `${CG.q}|meta|rot${UG}`));
        var UG, YG
      }
      placedHalf(GG, bG, ZG, wG, SG) {
        const [LG, yG] = iG.c[SG];
        for (const [kG, UG] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const YG = bG + UG * LG,
            VG = wG + UG * yG,
            pG = IG(GG, YG, ZG, VG);
          if (null !== pG && pG.rot === SG && (null === pG.half || !FG(GG, YG, ZG, VG, pG))) return kG
        }
        return null
      }
      reshapedHalf(GG, bG, ZG, wG, SG) {
        if (null !== SG.half && FG(GG, bG, ZG, wG, SG)) return SG.half;
        for (const LG of ["right", "left"]) {
          const [yG, kG] = (0, CG.m)(SG.rot, LG), UG = IG(GG, bG + yG, ZG, wG + kG);
          if (null !== UG && UG.rot === SG.rot && UG.half === CG.s[LG]) return LG
        }
        return null
      }
    }, new vG.b];

    function cG(GG, bG, ZG, wG, SG) {
      let LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const yG of aG)
        if (yG.handles(SG)) return yG.shape(GG, bG, ZG, wG, SG, LG);
      return SG
    }

    function lG(GG) {
      for (const wG of aG) {
        var bG, ZG;
        if (wG.handles(GG)) return null !== (bG = null === (ZG = wG.placedBy) || void 0 === ZG ? void 0 : ZG.call(wG, GG)) && void 0 !== bG ? bG : null
      }
      return null
    }
  },
  38829: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => CG,
      c: () => EG,
      g: () => zG
    });
    var wG = ZG(9249),
      SG = ZG(9280),
      LG = ZG(9341),
      yG = ZG(38837),
      kG = ZG(9334);
    const UG = (0, yG.E)("pipe"),
      YG = (0, yG.E)("tank"),
      VG = (0, yG.E)("port"),
      pG = "Reactor Port";

    function fG(GG, bG, ZG) {
      const wG = new Set([LG.f, LG.e, pG, ...bG, ...ZG, ...GG ? [yG.g] : []]);
      return {
        makers: new Set(bG),
        roots: wG
      }
    }
    const QG = {
        water: fG(!0, ["Condenser"], ["Centrifuge", "Synthesizer", yG.d]),
        cryo: fG(!1, [yG.d], [])
      },
      KG = new Set([...QG.water.roots, ...QG.cryo.roots]),
      hG = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      dG = SG.f.map((GG => hG[GG])),
      JG = dG.map((GG => {
        let [bG, ZG, wG] = GG;
        return yG.p.findIndex((GG => {
          let [SG, LG, yG] = GG;
          return SG === bG && LG === ZG && yG === wG
        }))
      }));

    function rG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ZG = wG.l[GG],
        SG = null === ZG || void 0 === ZG ? void 0 : ZG.meta.rootName,
        fG = QG[bG];
      if (!SG || !fG.roots.has(SG)) return null;
      if ((0, LG.l)(SG)) return (0, yG.D)(ZG.name) === bG ? UG : null;
      if (SG === yG.g) return YG;
      if (SG === pG) return ZG.name.endsWith("|Water") ? VG : null;
      const [KG, hG] = kG.e[(ZG.meta.rot || 1) - 1];
      return (0, yG.E)(fG.makers.has(SG) ? "maker" : "user", [-KG, 0, -hG])
    }

    function zG(GG, bG, ZG, SG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: kG
      } = QG[LG];
      return dG.some(((YG, VG) => {
        var pG, fG;
        let [QG, KG, hG] = YG;
        const dG = GG(bG + QG, ZG + KG, SG + hG),
          zG = rG(dG, LG);
        return null !== zG && kG.has(null !== (pG = null === (fG = wG.l[dG]) || void 0 === fG ? void 0 : fG.meta.rootName) && void 0 !== pG ? pG : "") && !(0, yG.I)(UG, zG, JG[VG])
      }))
    }

    function EG(GG) {
      const bG = wG.l[GG];
      return bG ? (0, yG.D)(bG.name) : null
    }
    let oG = null;

    function XG(GG) {
      if (!oG) {
        oG = new Map;
        for (const GG of ["water", "cryo"])
          for (let bG = 0; bG < 64; bG++)
            for (const ZG of [!1, !0]) oG.set((0, LG.m)(GG, bG, ZG), {
              UQ: GG,
              mask: bG,
              full: ZG
            })
      }
      return oG.get(GG)
    }
    const uG = new Map(Array.from({
      length: LG.j + 1
    }, ((GG, bG) => [(0, LG.q)(bG), bG])));

    function iG(GG, bG, ZG, SG, LG, yG) {
      return dG.some(((kG, UG) => {
        var YG, VG, pG;
        let [fG, QG, KG] = kG;
        if (0 === (yG >> UG & 1)) return !1;
        const hG = null !== (YG = null === (VG = wG.l[GG(bG + fG, ZG + QG, SG + KG)]) || void 0 === VG ? void 0 : VG.name) && void 0 !== YG ? YG : "",
          dG = XG(hG);
        return dG ? dG.UQ === LG && dG.full : (null !== (pG = function(GG) {
          var bG;
          return null !== (bG = uG.get(GG)) && void 0 !== bG ? bG : null
        }(hG)) && void 0 !== pG ? pG : 0) > 0
      }))
    }
    class CG {
      constructor() {
        this.reshapeOffsets = dG
      }
      handles(GG) {
        return null !== EG(GG)
      }
      affects(GG) {
        var bG, ZG;
        return KG.has(null !== (bG = null === (ZG = wG.l[GG]) || void 0 === ZG ? void 0 : ZG.meta.rootName) && void 0 !== bG ? bG : "")
      }
      placedBy(GG) {
        var bG;
        return (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta.rootName) === LG.e ? LG.f : null
      }
      shape(GG, bG, ZG, SG, kG, YG) {
        var VG, pG, fG;
        const QG = null !== (VG = null === (pG = wG.l[kG]) || void 0 === pG ? void 0 : pG.name) && void 0 !== VG ? VG : "",
          KG = YG || QG !== LG.f ? null !== (fG = (0, yG.D)(QG)) && void 0 !== fG ? fG : "water" : function(GG, bG, ZG, wG) {
            return dG.some(((SG, LG) => {
              let [kG, YG, VG] = SG;
              const pG = rG(GG(bG + kG, ZG + YG, wG + VG), "cryo");
              return null !== pG && "port" !== pG.kind && (0, yG.I)(UG, pG, JG[LG])
            })) ? "cryo" : "water"
          }(GG, bG, ZG, SG),
          hG = function(GG, bG, ZG, wG) {
            let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              LG = 0;
            return dG.forEach(((kG, YG) => {
              let [VG, pG, fG] = kG;
              const QG = rG(GG(bG + VG, ZG + pG, wG + fG), SG);
              QG && (0, yG.I)(UG, QG, JG[YG]) && (LG |= 1 << YG)
            })), LG
          }(GG, bG, ZG, SG, KG),
          zG = YG ? function(GG) {
            var bG;
            return !0 === (null === (bG = XG(GG)) || void 0 === bG ? void 0 : bG.full)
          }(QG) : iG(GG, bG, ZG, SG, KG, hG);
        return (0, wG.p)((0, LG.m)(KG, hG, zG))
      }
    }
  },
  38602: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      f: () => LG
    });
    const wG = ["Chest", "Loot Chest", "Moonstone Chest"],
      SG = [{
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

    function LG(GG) {
      return SG.find((bG => bG.exactMatch ? GG === bG.name : GG.includes(bG.name)))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);