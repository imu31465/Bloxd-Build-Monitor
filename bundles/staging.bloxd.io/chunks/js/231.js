export const id = 231;
export const ids = [231];
export const modules = {
  37012: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT,
      h: () => iT,
      j: () => XT,
      l: () => zT,
      m: () => WT,
      n: () => kT
    });
    const iT = 1.001,
      zT = .501,
      kT = .025,
      WT = .75,
      XT = .08,
      BT = 4;

    function FT() {
      const TT = zT,
        oT = kT,
        IT = TT - oT / 2,
        iT = (2 * TT - 2 * oT) / (2 * BT - 1),
        WT = [];
      for (const zT of [-IT, IT])
        for (const kT of [-IT, IT])
          for (let IT = 0; IT < BT; IT++) {
            const XT = -TT + oT + iT * (2 * IT + .5);
            WT.push([iT, oT, oT, XT, zT, kT]), WT.push([oT, iT, oT, zT, XT, kT]), WT.push([oT, oT, iT, zT, kT, XT])
          }
      for (const zT of [-IT, IT])
        for (const TT of [-IT, IT])
          for (const iT of [-IT, IT]) WT.push([oT, oT, oT, zT, TT, iT]);
      return WT
    }
  },
  37405: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => mT,
      C: () => RT,
      E: () => wT,
      F: () => hT,
      G: () => LT,
      J: () => KT,
      L: () => rT,
      O: () => zT,
      b: () => ST,
      d: () => BT,
      h: () => gT,
      k: () => FT,
      n: () => XT,
      r: () => WT,
      s: () => kT,
      v: () => eT,
      x: () => xT
    });
    var iT = IT(8907);

    function zT(TT) {
      return Math.floor(TT).toLocaleString("en-US")
    }
    const kT = 2e3,
      WT = .005,
      XT = .001,
      BT = 2,
      FT = "Fluid Tank",
      ST = "Coolant Mixer",
      DT = 144;

    function LT(TT) {
      const oT = TT.split("|")[0];
      return (0, iT.k)(oT) ? oT === iT.d ? "cryo" : "water" : null
    }
    const xT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      cT = 63;

    function KT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const IT = oT ? function(TT, oT, IT) {
        const iT = xT.findIndex((iT => {
          let [zT, kT, WT] = iT;
          return zT === TT && kT === oT && WT === IT
        }));
        return iT < 0 ? 0 : 1 << iT
      }(oT[0], oT[1], oT[2]) : 0;
      return "maker" === TT ? {
        kind: TT,
        faces: IT
      } : "user" === TT ? {
        kind: TT,
        faces: cT & ~IT
      } : {
        kind: TT,
        faces: cT
      }
    }

    function MT(TT) {
      return "pipe" === TT || "tank" === TT || "maker" === TT
    }

    function rT(TT, oT, IT) {
      return 0 !== (TT.faces & 1 << IT) && 0 !== (oT.faces & 1 << (1 ^ IT)) && (MT(TT.kind) || MT(oT.kind))
    }
    const AT = (TT, oT, IT, iT) => ({
        input: TT,
        inputAmount: iT,
        output: oT,
        outputAmount: IT
      }),
      gT = {
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
          recipes: [AT("Uranium Grit", "Uranium Pellet", 1, 12), AT("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [AT("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: DT,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function hT(TT, oT) {
      return 1e3 * (null !== oT && void 0 !== oT ? oT : 0) / TT.opMs
    }

    function wT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const IT = hT(gT["Coolant Mixer"], DT) * oT;
      return TT <= 0 ? 0 : Math.ceil(TT / IT - 1e-9)
    }
    const mT = "baf2Water",
      eT = "baf2waterclose",
      RT = "baf2wateropen"
  },
  37390: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => UT,
      f: () => aT
    });
    var iT = IT(8829),
      zT = IT(8853);
    const kT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var WT = IT(8876),
      XT = IT(37221),
      BT = IT(8869);
    const FT = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function ST(TT) {
      let [oT, IT] = TT;
      return [-IT, oT]
    }

    function DT(TT, oT) {
      return TT[0] === oT[0] && TT[1] === oT[1]
    }

    function LT(TT, oT) {
      return TT[0] * oT[0] + TT[1] * oT[1] === 0
    }
    const xT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var cT = IT(8901);

    function KT(TT, oT, IT, iT, zT) {
      return oT < cT.s || oT >= cT.s + cT.v || Math.floor(TT / cT.B) === Math.floor(iT / cT.B) && Math.floor(IT / cT.B) === Math.floor(zT / cT.B)
    }
    const MT = "Splitter",
      rT = "Sorting Gate",
      AT = new Set(cT.J),
      gT = new Set([...cT.J, "Belt Loader", "Fast Loader", rT]),
      hT = new Set(cT.y),
      wT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function mT(TT) {
      var oT, IT;
      return null !== (oT = null === (IT = iT.j[TT]) || void 0 === IT ? void 0 : IT.meta.rootName) && void 0 !== oT ? oT : ""
    }

    function eT(TT) {
      return mT(TT) === cT.h && (0, cT.V)(iT.j[TT].name)
    }
    var RT = IT(8860),
      uT = IT(8882);
    const vT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function ET(TT) {
      var oT, IT;
      const zT = null === (oT = iT.j[TT]) || void 0 === oT ? void 0 : oT.meta;
      return (null === zT || void 0 === zT ? void 0 : zT.rootName) !== uT.k ? null : {
        rot: null !== (IT = zT.rot) && void 0 !== IT ? IT : 1,
        half: (0, uT.e)(zT.rootName, zT.metaStr)
      }
    }

    function fT(TT, oT, IT, iT) {
      return ET(TT(oT, IT, iT))
    }

    function CT(TT, oT, IT, iT, zT) {
      let {
        rot: kT,
        half: WT
      } = zT;
      const [XT, BT] = (0, uT.j)(kT, WT), FT = fT(TT, oT + XT, IT, iT + BT);
      return null !== FT && FT.rot === kT && FT.half === uT.o[WT]
    }
    var jT = IT(37399);
    const JT = [new class {
      constructor() {
        this.reshapeOffsets = xT
      }
      handles(TT) {
        var oT;
        return "Stairs" === (null === (oT = iT.j[TT]) || void 0 === oT ? void 0 : oT.model)
      }
      affects(TT) {
        return this.handles(TT)
      }
      shape(TT, oT, IT, zT, kT) {
        const WT = this.stairsOf(kT),
          XT = this.cornerAt(TT, oT, IT, zT, WT),
          FT = WT.half === BT.b.top ? "top" : "bot";
        return (0, iT.m)(`${iT.j[kT].meta.rootName}|meta|rot${WT.rot}|${FT}${null===XT?"":`|${XT}`}`)
      }
      stairsOf(TT) {
        const {
          rot: oT,
          halfblockPlacement: IT
        } = iT.j[TT].meta;
        return {
          rot: oT,
          half: IT
        }
      }
      stairsAt(TT, oT, IT, iT) {
        const zT = TT(oT, IT, iT);
        return this.handles(zT) ? this.stairsOf(zT) : null
      }
      cornerAt(TT, oT, IT, iT, zT) {
        let {
          rot: kT,
          half: WT
        } = zT;
        const XT = FT[kT],
          BT = zT => {
            let [XT, BT] = zT;
            const FT = this.stairsAt(TT, oT + XT, IT, iT + BT);
            return null !== FT && FT.rot === kT && FT.half === WT
          },
          xT = this.stairsAt(TT, oT + XT[0], IT, iT + XT[1]);
        if (null !== xT && xT.half === WT) {
          const TT = FT[xT.rot];
          if (LT(XT, TT) && !BT([-TT[0], -TT[1]])) return DT(TT, ST(XT)) ? "outerLeft" : "outerRight"
        }
        const cT = this.stairsAt(TT, oT - XT[0], IT, iT - XT[1]);
        if (null !== cT && cT.half === WT) {
          const TT = FT[cT.rot];
          if (LT(XT, TT) && !BT(TT)) return DT(TT, ST(XT)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = kT, this.rootIds = new Set(zT.g.map((TT => (0, iT.m)(TT))))
      }
      handles(TT) {
        var oT;
        const IT = null === (oT = iT.j[TT]) || void 0 === oT ? void 0 : oT.meta;
        return void 0 !== IT && this.rootIds.has(IT.rootId)
      }
      affects(TT) {
        return this.handles(TT)
      }
      placedBy(TT) {
        return iT.j[TT].meta.rootName === zT.k ? null : zT.k
      }
      shape(TT, oT, IT, kT, WT) {
        const {
          rootId: XT,
          rootName: BT,
          rot: FT
        } = iT.j[WT].meta;
        let ST = 0;
        return zT.u[FT].forEach(((zT, WT) => {
          var BT;
          let [DT, LT, xT] = zT;
          const cT = null === (BT = iT.j[TT(oT + DT, IT + LT, kT + xT)]) || void 0 === BT ? void 0 : BT.meta;
          (null === cT || void 0 === cT ? void 0 : cT.rootId) === XT && cT.rot === FT && (ST |= 1 << WT)
        })), (0, iT.m)((0, zT.e)(BT, FT, ST))
      }
    }, ...WT.e.map((TT => new XT.e(TT))), new class {
      constructor() {
        this.reshapeOffsets = wT
      }
      handles(TT) {
        const oT = mT(TT);
        return AT.has(oT) || oT === cT.h
      }
      affects(TT) {
        const oT = mT(TT);
        return gT.has(oT) || hT.has(oT) || oT === MT || oT === cT.h || void 0 !== cT.c[oT]
      }
      shape(TT, oT, IT, zT, kT, WT) {
        const {
          rootName: XT,
          rot: BT
        } = iT.j[kT].meta;
        return XT === cT.h ? WT ? kT : function(TT, oT, IT, zT, kT) {
          const [WT, XT] = cT.g[kT - 1];
          for (let BT = 1; BT <= cT.I; BT++) {
            const [FT, ST] = [oT - WT * BT, zT - XT * BT], DT = TT(FT, IT, ST);
            if (mT(DT) === cT.h && iT.j[DT].meta.rot === kT && KT(oT, IT, zT, FT, ST)) return (0, iT.m)((0, cT.db)(kT, !eT(DT)))
          }
          return (0, iT.m)((0, cT.db)(kT, !1))
        }(TT, oT, IT, zT, BT) : (0, iT.m)((0, cT.M)(XT, BT, function(TT, oT, IT, zT, kT) {
          const [WT, XT] = cT.g[kT - 1], BT = (kT, BT) => function(TT, oT, IT, zT, kT) {
            var WT;
            const XT = null === (WT = iT.j[TT]) || void 0 === WT ? void 0 : WT.meta;
            if (!XT) return !1;
            const BT = XT.rootName,
              FT = gT.has(BT) || eT(TT);
            if (!FT && !hT.has(BT) && BT !== MT) return !1;
            const [ST, DT] = cT.g[XT.rot - 1];
            return FT ? ST === -oT && DT === -IT : hT.has(BT) ? ST === oT && DT === IT : (0, cT.$)(iT.j[TT].name, ST, DT).some((TT => {
              let [iT, zT] = TT;
              return iT === -oT && zT === -IT
            })) && !(zT === oT && kT === IT)
          }(TT(oT + kT, IT, zT + BT), kT, BT, WT, XT), FT = TT(oT - WT, IT, zT - XT), ST = mT(FT) === MT && iT.j[FT].meta.rot === kT, DT = 1 === cT.c[mT(TT(oT, IT - 1, zT))] || -1 === cT.c[mT(TT(oT, IT + 1, zT))];
          if (DT || ST || function(TT, oT, IT) {
              if (mT(TT) !== rT) return !1;
              const [zT, kT] = cT.g[iT.j[TT].meta.rot - 1], [WT, XT] = (0, cT.P)(iT.j[TT].name, zT, kT);
              return oT === WT && IT === XT
            }(FT, WT, XT) || BT(-WT, -XT)) return null;
          const LT = BT(-XT, WT),
            xT = BT(XT, -WT);
          if (LT === xT) return null;
          return LT ? "turnLeft" : "turnRight"
        }(TT, oT, IT, zT, BT)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = vT, this.rootId = (0, iT.m)(uT.k)
      }
      handles(TT) {
        var oT;
        return (null === (oT = iT.j[TT]) || void 0 === oT ? void 0 : oT.meta.rootId) === this.rootId
      }
      affects(TT) {
        return this.handles(TT)
      }
      shape(TT, oT, IT, zT, kT, WT) {
        const XT = ET(kT);
        return (0, iT.m)((BT = XT.rot, null !== (FT = WT ? this.reshapedHalf(TT, oT, IT, zT, XT) : this.placedHalf(TT, oT, IT, zT, XT.rot)) ? (0, uT.c)(uT.k, BT, FT) : 1 === BT ? uT.k : `${uT.k}|meta|rot${BT}`));
        var BT, FT
      }
      placedHalf(TT, oT, IT, iT, zT) {
        const [kT, WT] = RT.d[zT];
        for (const [XT, BT] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const FT = oT + BT * kT,
            ST = iT + BT * WT,
            DT = fT(TT, FT, IT, ST);
          if (null !== DT && DT.rot === zT && (null === DT.half || !CT(TT, FT, IT, ST, DT))) return XT
        }
        return null
      }
      reshapedHalf(TT, oT, IT, iT, zT) {
        if (null !== zT.half && CT(TT, oT, IT, iT, zT)) return zT.half;
        for (const kT of ["right", "left"]) {
          const [WT, XT] = (0, uT.j)(zT.rot, kT), BT = fT(TT, oT + WT, IT, iT + XT);
          if (null !== BT && BT.rot === zT.rot && BT.half === uT.o[kT]) return kT
        }
        return null
      }
    }, new jT.e];

    function UT(TT, oT, IT, iT, zT) {
      let kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const WT of JT)
        if (WT.handles(zT)) return WT.shape(TT, oT, IT, iT, zT, kT);
      return zT
    }

    function aT(TT) {
      for (const iT of JT) {
        var oT, IT;
        if (iT.handles(TT)) return null !== (oT = null === (IT = iT.placedBy) || void 0 === IT ? void 0 : IT.call(iT, TT)) && void 0 !== oT ? oT : null
      }
      return null
    }
  },
  37399: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => uT,
      h: () => hT,
      l: () => gT
    });
    var iT = IT(8829),
      zT = IT(8846),
      kT = IT(8907),
      WT = IT(37405),
      XT = IT(8901);
    const BT = (0, WT.J)("pipe"),
      FT = (0, WT.J)("tank"),
      ST = (0, WT.J)("port"),
      DT = "Reactor Port";

    function LT(TT, oT, IT) {
      const iT = new Set([kT.f, kT.d, DT, ...oT, ...IT, ...TT ? [WT.k] : []]);
      return {
        makers: new Set(oT),
        roots: iT
      }
    }
    const xT = {
        water: LT(!0, ["Condenser"], ["Centrifuge", "Synthesizer", WT.b]),
        cryo: LT(!1, [WT.b], [])
      },
      cT = new Set([...xT.water.roots, ...xT.cryo.roots]),
      KT = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      MT = zT.h.map((TT => KT[TT])),
      rT = MT.map((TT => {
        let [oT, IT, iT] = TT;
        return WT.x.findIndex((TT => {
          let [zT, kT, WT] = TT;
          return zT === oT && kT === IT && WT === iT
        }))
      }));

    function AT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const IT = iT.j[TT],
        zT = null === IT || void 0 === IT ? void 0 : IT.meta.rootName,
        LT = xT[oT];
      if (!zT || !LT.roots.has(zT)) return null;
      if ((0, kT.k)(zT)) return (0, WT.G)(IT.name) === oT ? BT : null;
      if (zT === WT.k) return FT;
      if (zT === DT) return IT.name.endsWith("|Water") ? ST : null;
      const [cT, KT] = XT.g[(IT.meta.rot || 1) - 1];
      return (0, WT.J)(LT.makers.has(zT) ? "maker" : "user", [-cT, 0, -KT])
    }

    function gT(TT, oT, IT, zT) {
      let kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: XT
      } = xT[kT];
      return MT.some(((FT, ST) => {
        var DT, LT;
        let [xT, cT, KT] = FT;
        const MT = TT(oT + xT, IT + cT, zT + KT),
          gT = AT(MT, kT);
        return null !== gT && XT.has(null !== (DT = null === (LT = iT.j[MT]) || void 0 === LT ? void 0 : LT.meta.rootName) && void 0 !== DT ? DT : "") && !(0, WT.L)(BT, gT, rT[ST])
      }))
    }

    function hT(TT) {
      const oT = iT.j[TT];
      return oT ? (0, WT.G)(oT.name) : null
    }
    let wT = null;

    function mT(TT) {
      if (!wT) {
        wT = new Map;
        for (const TT of ["water", "cryo"])
          for (let oT = 0; oT < 64; oT++)
            for (const IT of [!1, !0]) wT.set((0, kT.l)(TT, oT, IT), {
              Sx: TT,
              mask: oT,
              full: IT
            })
      }
      return wT.get(TT)
    }
    const eT = new Map(Array.from({
      length: kT.g + 1
    }, ((TT, oT) => [(0, kT.o)(oT), oT])));

    function RT(TT, oT, IT, zT, kT, WT) {
      return MT.some(((XT, BT) => {
        var FT, ST, DT;
        let [LT, xT, cT] = XT;
        if (0 === (WT >> BT & 1)) return !1;
        const KT = null !== (FT = null === (ST = iT.j[TT(oT + LT, IT + xT, zT + cT)]) || void 0 === ST ? void 0 : ST.name) && void 0 !== FT ? FT : "",
          MT = mT(KT);
        return MT ? MT.Sx === kT && MT.full : (null !== (DT = function(TT) {
          var oT;
          return null !== (oT = eT.get(TT)) && void 0 !== oT ? oT : null
        }(KT)) && void 0 !== DT ? DT : 0) > 0
      }))
    }
    class uT {
      constructor() {
        this.reshapeOffsets = MT
      }
      handles(TT) {
        return null !== hT(TT)
      }
      affects(TT) {
        var oT, IT;
        return cT.has(null !== (oT = null === (IT = iT.j[TT]) || void 0 === IT ? void 0 : IT.meta.rootName) && void 0 !== oT ? oT : "")
      }
      placedBy(TT) {
        var oT;
        return (null === (oT = iT.j[TT]) || void 0 === oT ? void 0 : oT.meta.rootName) === kT.d ? kT.f : null
      }
      shape(TT, oT, IT, zT, XT, FT) {
        var ST, DT, LT;
        const xT = null !== (ST = null === (DT = iT.j[XT]) || void 0 === DT ? void 0 : DT.name) && void 0 !== ST ? ST : "",
          cT = FT || xT !== kT.f ? null !== (LT = (0, WT.G)(xT)) && void 0 !== LT ? LT : "water" : function(TT, oT, IT, iT) {
            return MT.some(((zT, kT) => {
              let [XT, FT, ST] = zT;
              const DT = AT(TT(oT + XT, IT + FT, iT + ST), "cryo");
              return null !== DT && "port" !== DT.kind && (0, WT.L)(BT, DT, rT[kT])
            })) ? "cryo" : "water"
          }(TT, oT, IT, zT),
          KT = function(TT, oT, IT, iT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              kT = 0;
            return MT.forEach(((XT, FT) => {
              let [ST, DT, LT] = XT;
              const xT = AT(TT(oT + ST, IT + DT, iT + LT), zT);
              xT && (0, WT.L)(BT, xT, rT[FT]) && (kT |= 1 << FT)
            })), kT
          }(TT, oT, IT, zT, cT),
          gT = FT ? function(TT) {
            var oT;
            return !0 === (null === (oT = mT(TT)) || void 0 === oT ? void 0 : oT.full)
          }(xT) : RT(TT, oT, IT, zT, cT, KT);
        return (0, iT.m)((0, kT.l)(cT, KT, gT))
      }
    }
  },
  37183: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      i: () => kT
    });
    const iT = ["Chest", "Loot Chest", "Moonstone Chest"],
      zT = [{
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

    function kT(TT) {
      return zT.find((oT => oT.exactMatch ? TT === oT.name : TT.includes(oT.name)))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);