export const id = 269;
export const ids = [269];
export const modules = {
  38935: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => CH,
      d: () => AH,
      g: () => tH,
      i: () => rH,
      l: () => hH,
      m: () => SH
    });
    const AH = 1.001,
      rH = .501,
      SH = .025,
      hH = .75,
      tH = .08,
      zH = 4;

    function CH() {
      const HH = rH,
        BH = SH,
        LH = HH - BH / 2,
        AH = (2 * HH - 2 * BH) / (2 * zH - 1),
        hH = [];
      for (const rH of [-LH, LH])
        for (const SH of [-LH, LH])
          for (let LH = 0; LH < zH; LH++) {
            const tH = -HH + BH + AH * (2 * LH + .5);
            hH.push([AH, BH, BH, tH, rH, SH]), hH.push([BH, AH, BH, rH, tH, SH]), hH.push([BH, BH, AH, rH, SH, tH])
          }
      for (const rH of [-LH, LH])
        for (const HH of [-LH, LH])
          for (const AH of [-LH, LH]) hH.push([BH, BH, BH, rH, HH, AH]);
      return hH
    }
  },
  39297: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => UH,
      E: () => OH,
      G: () => TH,
      I: () => PH,
      K: () => GH,
      L: () => QH,
      P: () => MH,
      R: () => rH,
      d: () => EH,
      h: () => zH,
      i: () => vH,
      m: () => CH,
      n: () => tH,
      p: () => hH,
      t: () => SH,
      x: () => VH,
      y: () => YH
    });
    var AH = LH(10015);

    function rH(HH) {
      return Math.floor(HH).toLocaleString("en-US")
    }
    const SH = 2e3,
      hH = .005,
      tH = .001,
      zH = 2,
      CH = "Fluid Tank",
      EH = "Coolant Mixer",
      XH = 144;

    function GH(HH) {
      const BH = HH.split("|")[0];
      return (0, AH.i)(BH) ? BH === AH.b ? "cryo" : "water" : null
    }
    const YH = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      uH = 63;

    function QH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const LH = BH ? function(HH, BH, LH) {
        const AH = YH.findIndex((AH => {
          let [rH, SH, hH] = AH;
          return rH === HH && SH === BH && hH === LH
        }));
        return AH < 0 ? 0 : 1 << AH
      }(BH[0], BH[1], BH[2]) : 0;
      return "maker" === HH ? {
        kind: HH,
        faces: LH
      } : "user" === HH ? {
        kind: HH,
        faces: uH & ~LH
      } : {
        kind: HH,
        faces: uH
      }
    }

    function WH(HH) {
      return "pipe" === HH || "tank" === HH || "maker" === HH
    }

    function MH(HH, BH, LH) {
      return 0 !== (HH.faces & 1 << LH) && 0 !== (BH.faces & 1 << (1 ^ LH)) && (WH(HH.kind) || WH(BH.kind))
    }
    const xH = (HH, BH, LH, AH) => ({
        input: HH,
        inputAmount: AH,
        output: BH,
        outputAmount: LH
      }),
      vH = {
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
          recipes: [xH("Uranium Grit", "Uranium Pellet", 1, 12), xH("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [xH("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: XH,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function PH(HH, BH) {
      return 1e3 * (null !== BH && void 0 !== BH ? BH : 0) / HH.opMs
    }

    function TH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const LH = PH(vH["Coolant Mixer"], XH) * BH;
      return HH <= 0 ? 0 : Math.ceil(HH / LH - 1e-9)
    }
    const UH = "baf2Water",
      VH = "baf2waterclose",
      OH = "baf2wateropen"
  },
  39279: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => KH,
      e: () => cH
    });
    var AH = LH(9940),
      rH = LH(9965);
    const SH = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var hH = LH(9982),
      tH = LH(39111),
      zH = LH(9979);
    const CH = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function EH(HH) {
      let [BH, LH] = HH;
      return [-LH, BH]
    }

    function XH(HH, BH) {
      return HH[0] === BH[0] && HH[1] === BH[1]
    }

    function GH(HH, BH) {
      return HH[0] * BH[0] + HH[1] * BH[1] === 0
    }
    const YH = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var uH = LH(10009);

    function QH(HH, BH, LH, AH, rH) {
      return BH < uH.s || BH >= uH.s + uH.u || Math.floor(HH / uH.z) === Math.floor(AH / uH.z) && Math.floor(LH / uH.z) === Math.floor(rH / uH.z)
    }
    const WH = "Splitter",
      MH = "Sorting Gate",
      xH = new Set(uH.O),
      vH = new Set([...uH.O, "Belt Loader", "Fast Loader", MH]),
      PH = new Set(uH.x),
      TH = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function UH(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.meta.rootName) && void 0 !== BH ? BH : ""
    }

    function VH(HH) {
      return UH(HH) === uH.k && (0, uH.$)(AH.g[HH].name)
    }
    var OH = LH(9973),
      bH = LH(9994);
    const kH = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function mH(HH) {
      var BH, LH;
      const rH = null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta;
      return (null === rH || void 0 === rH ? void 0 : rH.rootName) !== bH.s ? null : {
        rot: null !== (LH = rH.rot) && void 0 !== LH ? LH : 1,
        half: (0, bH.h)(rH.rootName, rH.metaStr)
      }
    }

    function oH(HH, BH, LH, AH) {
      return mH(HH(BH, LH, AH))
    }

    function IH(HH, BH, LH, AH, rH) {
      let {
        rot: SH,
        half: hH
      } = rH;
      const [tH, zH] = (0, bH.o)(SH, hH), CH = oH(HH, BH + tH, LH, AH + zH);
      return null !== CH && CH.rot === SH && CH.half === bH.t[hH]
    }
    var fH = LH(39288);
    const lH = [new class {
      constructor() {
        this.reshapeOffsets = YH
      }
      handles(HH) {
        var BH;
        return "Stairs" === (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.model)
      }
      affects(HH) {
        return this.handles(HH)
      }
      shape(HH, BH, LH, rH, SH) {
        const hH = this.stairsOf(SH),
          tH = this.cornerAt(HH, BH, LH, rH, hH),
          CH = hH.half === zH.c.top ? "top" : "bot";
        return (0, AH.h)(`${AH.g[SH].meta.rootName}|meta|rot${hH.rot}|${CH}${null===tH?"":`|${tH}`}`)
      }
      stairsOf(HH) {
        const {
          rot: BH,
          halfblockPlacement: LH
        } = AH.g[HH].meta;
        return {
          rot: BH,
          half: LH
        }
      }
      stairsAt(HH, BH, LH, AH) {
        const rH = HH(BH, LH, AH);
        return this.handles(rH) ? this.stairsOf(rH) : null
      }
      cornerAt(HH, BH, LH, AH, rH) {
        let {
          rot: SH,
          half: hH
        } = rH;
        const tH = CH[SH],
          zH = rH => {
            let [tH, zH] = rH;
            const CH = this.stairsAt(HH, BH + tH, LH, AH + zH);
            return null !== CH && CH.rot === SH && CH.half === hH
          },
          YH = this.stairsAt(HH, BH + tH[0], LH, AH + tH[1]);
        if (null !== YH && YH.half === hH) {
          const HH = CH[YH.rot];
          if (GH(tH, HH) && !zH([-HH[0], -HH[1]])) return XH(HH, EH(tH)) ? "outerLeft" : "outerRight"
        }
        const uH = this.stairsAt(HH, BH - tH[0], LH, AH - tH[1]);
        if (null !== uH && uH.half === hH) {
          const HH = CH[uH.rot];
          if (GH(tH, HH) && !zH(HH)) return XH(HH, EH(tH)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = SH, this.rootIds = new Set(rH.j.map((HH => (0, AH.h)(HH))))
      }
      handles(HH) {
        var BH;
        const LH = null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta;
        return void 0 !== LH && this.rootIds.has(LH.rootId)
      }
      affects(HH) {
        return this.handles(HH)
      }
      placedBy(HH) {
        return AH.g[HH].meta.rootName === rH.o ? null : rH.o
      }
      shape(HH, BH, LH, SH, hH) {
        const {
          rootId: tH,
          rootName: zH,
          rot: CH
        } = AH.g[hH].meta;
        let EH = 0;
        return rH.s[CH].forEach(((rH, hH) => {
          var zH;
          let [XH, GH, YH] = rH;
          const uH = null === (zH = AH.g[HH(BH + XH, LH + GH, SH + YH)]) || void 0 === zH ? void 0 : zH.meta;
          (null === uH || void 0 === uH ? void 0 : uH.rootId) === tH && uH.rot === CH && (EH |= 1 << hH)
        })), (0, AH.h)((0, rH.g)(zH, CH, EH))
      }
    }, ...hH.e.map((HH => new tH.b(HH))), new class {
      constructor() {
        this.reshapeOffsets = TH
      }
      handles(HH) {
        const BH = UH(HH);
        return xH.has(BH) || BH === uH.k
      }
      affects(HH) {
        const BH = UH(HH);
        return vH.has(BH) || PH.has(BH) || BH === WH || BH === uH.k || void 0 !== uH.e[BH]
      }
      shape(HH, BH, LH, rH, SH, hH) {
        const {
          rootName: tH,
          rot: zH
        } = AH.g[SH].meta;
        return tH === uH.k ? hH ? SH : function(HH, BH, LH, rH, SH) {
          const [hH, tH] = uH.h[SH - 1];
          for (let zH = 1; zH <= uH.K; zH++) {
            const [CH, EH] = [BH - hH * zH, rH - tH * zH], XH = HH(CH, LH, EH);
            if (UH(XH) === uH.k && AH.g[XH].meta.rot === SH && QH(BH, LH, rH, CH, EH)) return (0, AH.h)((0, uH.fb)(SH, !VH(XH)))
          }
          return (0, AH.h)((0, uH.fb)(SH, !1))
        }(HH, BH, LH, rH, zH) : (0, AH.h)((0, uH.R)(tH, zH, function(HH, BH, LH, rH, SH) {
          const [hH, tH] = uH.h[SH - 1], zH = (SH, hH) => function(HH, BH, LH) {
            var rH;
            const SH = null === (rH = AH.g[HH]) || void 0 === rH ? void 0 : rH.meta;
            if (!SH) return !1;
            const hH = SH.rootName,
              tH = vH.has(hH) || VH(HH);
            if (!tH && !PH.has(hH) && hH !== WH) return !1;
            const [zH, CH] = uH.h[SH.rot - 1];
            if (tH && zH === -BH && CH === -LH) return !0;
            if (PH.has(hH)) return zH === BH && CH === LH;
            const EH = AH.g[HH].name;
            return (hH === WH ? (0, uH.db)(EH, zH, CH) : hH === MH ? [(0, uH.V)(EH, zH, CH)] : []).some((HH => {
              let [AH, rH] = HH;
              return AH === -BH && rH === -LH
            }))
          }(HH(BH + SH, LH, rH + hH), SH, hH), CH = HH(BH - hH, LH, rH - tH), EH = UH(CH) === WH && AH.g[CH].meta.rot === SH, XH = 1 === uH.e[UH(HH(BH, LH - 1, rH))] || -1 === uH.e[UH(HH(BH, LH + 1, rH))];
          if (XH || EH || zH(-hH, -tH)) return null;
          const GH = zH(-tH, hH),
            YH = zH(tH, -hH);
          if (GH === YH) return null;
          return GH ? "turnLeft" : "turnRight"
        }(HH, BH, LH, rH, zH)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = kH, this.rootId = (0, AH.h)(bH.s)
      }
      handles(HH) {
        var BH;
        return (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta.rootId) === this.rootId
      }
      affects(HH) {
        return this.handles(HH)
      }
      shape(HH, BH, LH, rH, SH, hH) {
        const tH = mH(SH);
        return (0, AH.h)((zH = tH.rot, null !== (CH = hH ? this.reshapedHalf(HH, BH, LH, rH, tH) : this.placedHalf(HH, BH, LH, rH, tH.rot)) ? (0, bH.e)(bH.s, zH, CH) : 1 === zH ? bH.s : `${bH.s}|meta|rot${zH}`));
        var zH, CH
      }
      placedHalf(HH, BH, LH, AH, rH) {
        const [SH, hH] = OH.c[rH];
        for (const [tH, zH] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const CH = BH + zH * SH,
            EH = AH + zH * hH,
            XH = oH(HH, CH, LH, EH);
          if (null !== XH && XH.rot === rH && (null === XH.half || !IH(HH, CH, LH, EH, XH))) return tH
        }
        return null
      }
      reshapedHalf(HH, BH, LH, AH, rH) {
        if (null !== rH.half && IH(HH, BH, LH, AH, rH)) return rH.half;
        for (const SH of ["right", "left"]) {
          const [hH, tH] = (0, bH.o)(rH.rot, SH), zH = oH(HH, BH + hH, LH, AH + tH);
          if (null !== zH && zH.rot === rH.rot && zH.half === bH.t[SH]) return SH
        }
        return null
      }
    }, new fH.b];

    function KH(HH, BH, LH, AH, rH) {
      let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const hH of lH)
        if (hH.handles(rH)) return hH.shape(HH, BH, LH, AH, rH, SH);
      return rH
    }

    function cH(HH) {
      for (const AH of lH) {
        var BH, LH;
        if (AH.handles(HH)) return null !== (BH = null === (LH = AH.placedBy) || void 0 === LH ? void 0 : LH.call(AH, HH)) && void 0 !== BH ? BH : null
      }
      return null
    }
  },
  39288: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => bH,
      c: () => PH,
      d: () => vH
    });
    var AH = LH(9940),
      rH = LH(9955),
      SH = LH(10015),
      hH = LH(39297),
      tH = LH(10009);
    const zH = (0, hH.L)("pipe"),
      CH = (0, hH.L)("tank"),
      EH = (0, hH.L)("port"),
      XH = "Reactor Port";

    function GH(HH, BH, LH) {
      const AH = new Set([SH.c, SH.b, XH, ...BH, ...LH, ...HH ? [hH.m] : []]);
      return {
        makers: new Set(BH),
        roots: AH
      }
    }
    const YH = {
        water: GH(!0, ["Condenser"], ["Centrifuge", "Synthesizer", hH.d]),
        cryo: GH(!1, [hH.d], [])
      },
      uH = new Set([...YH.water.roots, ...YH.cryo.roots]),
      QH = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      WH = rH.d.map((HH => QH[HH])),
      MH = WH.map((HH => {
        let [BH, LH, AH] = HH;
        return hH.y.findIndex((HH => {
          let [rH, SH, hH] = HH;
          return rH === BH && SH === LH && hH === AH
        }))
      }));

    function xH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const LH = AH.g[HH],
        rH = null === LH || void 0 === LH ? void 0 : LH.meta.rootName,
        GH = YH[BH];
      if (!rH || !GH.roots.has(rH)) return null;
      if ((0, SH.i)(rH)) return (0, hH.K)(LH.name) === BH ? zH : null;
      if (rH === hH.m) return CH;
      if (rH === XH) return LH.name.endsWith("|Water") ? EH : null;
      const [uH, QH] = tH.h[(LH.meta.rot || 1) - 1];
      return (0, hH.L)(GH.makers.has(rH) ? "maker" : "user", [-uH, 0, -QH])
    }

    function vH(HH, BH, LH, rH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: tH
      } = YH[SH];
      return WH.some(((CH, EH) => {
        var XH, GH;
        let [YH, uH, QH] = CH;
        const WH = HH(BH + YH, LH + uH, rH + QH),
          vH = xH(WH, SH);
        return null !== vH && tH.has(null !== (XH = null === (GH = AH.g[WH]) || void 0 === GH ? void 0 : GH.meta.rootName) && void 0 !== XH ? XH : "") && !(0, hH.P)(zH, vH, MH[EH])
      }))
    }

    function PH(HH) {
      const BH = AH.g[HH];
      return BH ? (0, hH.K)(BH.name) : null
    }
    let TH = null;

    function UH(HH) {
      if (!TH) {
        TH = new Map;
        for (const HH of ["water", "cryo"])
          for (let BH = 0; BH < 64; BH++)
            for (const LH of [!1, !0]) TH.set((0, SH.l)(HH, BH, LH), {
              UY: HH,
              mask: BH,
              full: LH
            })
      }
      return TH.get(HH)
    }
    const VH = new Map(Array.from({
      length: SH.g + 1
    }, ((HH, BH) => [(0, SH.m)(BH), BH])));

    function OH(HH, BH, LH, rH, SH, hH) {
      return WH.some(((tH, zH) => {
        var CH, EH, XH;
        let [GH, YH, uH] = tH;
        if (0 === (hH >> zH & 1)) return !1;
        const QH = null !== (CH = null === (EH = AH.g[HH(BH + GH, LH + YH, rH + uH)]) || void 0 === EH ? void 0 : EH.name) && void 0 !== CH ? CH : "",
          WH = UH(QH);
        return WH ? WH.UY === SH && WH.full : (null !== (XH = function(HH) {
          var BH;
          return null !== (BH = VH.get(HH)) && void 0 !== BH ? BH : null
        }(QH)) && void 0 !== XH ? XH : 0) > 0
      }))
    }
    class bH {
      constructor() {
        this.reshapeOffsets = WH
      }
      handles(HH) {
        return null !== PH(HH)
      }
      affects(HH) {
        var BH, LH;
        return uH.has(null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.meta.rootName) && void 0 !== BH ? BH : "")
      }
      placedBy(HH) {
        var BH;
        return (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta.rootName) === SH.b ? SH.c : null
      }
      shape(HH, BH, LH, rH, tH, CH) {
        var EH, XH, GH;
        const YH = null !== (EH = null === (XH = AH.g[tH]) || void 0 === XH ? void 0 : XH.name) && void 0 !== EH ? EH : "",
          uH = CH || YH !== SH.c ? null !== (GH = (0, hH.K)(YH)) && void 0 !== GH ? GH : "water" : function(HH, BH, LH, AH) {
            return WH.some(((rH, SH) => {
              let [tH, CH, EH] = rH;
              const XH = xH(HH(BH + tH, LH + CH, AH + EH), "cryo");
              return null !== XH && "port" !== XH.kind && (0, hH.P)(zH, XH, MH[SH])
            })) ? "cryo" : "water"
          }(HH, BH, LH, rH),
          QH = function(HH, BH, LH, AH) {
            let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              SH = 0;
            return WH.forEach(((tH, CH) => {
              let [EH, XH, GH] = tH;
              const YH = xH(HH(BH + EH, LH + XH, AH + GH), rH);
              YH && (0, hH.P)(zH, YH, MH[CH]) && (SH |= 1 << CH)
            })), SH
          }(HH, BH, LH, rH, uH),
          vH = CH ? function(HH) {
            var BH;
            return !0 === (null === (BH = UH(HH)) || void 0 === BH ? void 0 : BH.full)
          }(YH) : OH(HH, BH, LH, rH, uH, QH);
        return (0, AH.h)((0, SH.l)(uH, QH, vH))
      }
    }
  },
  39058: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      h: () => SH
    });
    const AH = ["Chest", "Loot Chest", "Moonstone Chest"],
      rH = [{
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

    function SH(HH) {
      return rH.find((BH => BH.exactMatch ? HH === BH.name : HH.includes(BH.name)))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);