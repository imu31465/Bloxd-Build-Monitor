export const id = 247;
export const ids = [247];
export const modules = {
  38198: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      f: () => WT,
      h: () => nT,
      j: () => zT,
      m: () => gT,
      n: () => MT
    });
    const WT = 1.001,
      zT = .501,
      MT = .025,
      gT = .75,
      nT = .08,
      HT = 4;

    function kT() {
      const TT = zT,
        UT = MT,
        mT = TT - UT / 2,
        WT = (2 * TT - 2 * UT) / (2 * HT - 1),
        gT = [];
      for (const zT of [-mT, mT])
        for (const MT of [-mT, mT])
          for (let mT = 0; mT < HT; mT++) {
            const nT = -TT + UT + WT * (2 * mT + .5);
            gT.push([WT, UT, UT, nT, zT, MT]), gT.push([UT, WT, UT, zT, nT, MT]), gT.push([UT, UT, WT, zT, MT, nT])
          }
      for (const zT of [-mT, mT])
        for (const TT of [-mT, mT])
          for (const WT of [-mT, mT]) gT.push([UT, UT, UT, zT, TT, WT]);
      return gT
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
  38545: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => XT,
      g: () => IT
    });
    var WT = mT(9330),
      zT = mT(9360);
    const MT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var gT = mT(9376),
      nT = mT(38364),
      HT = mT(9369);
    const kT = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function jT(TT) {
      let [UT, mT] = TT;
      return [-mT, UT]
    }

    function lT(TT, UT) {
      return TT[0] === UT[0] && TT[1] === UT[1]
    }

    function LT(TT, UT) {
      return TT[0] * UT[0] + TT[1] * UT[1] === 0
    }
    const pT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var BT = mT(9402);

    function ZT(TT, UT, mT, WT, zT) {
      return UT < BT.p || UT >= BT.p + BT.t || Math.floor(TT / BT.z) === Math.floor(WT / BT.z) && Math.floor(mT / BT.z) === Math.floor(zT / BT.z)
    }
    const cT = "Splitter",
      vT = "Sorting Gate",
      fT = new Set(BT.O),
      qT = new Set([...BT.O, "Belt Loader", "Fast Loader", vT]),
      iT = new Set(BT.x),
      bT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function OT(TT) {
      var UT, mT;
      return null !== (UT = null === (mT = WT.g[TT]) || void 0 === mT ? void 0 : mT.meta.rootName) && void 0 !== UT ? UT : ""
    }

    function eT(TT) {
      return OT(TT) === BT.j && (0, BT.X)(WT.g[TT].name)
    }
    var YT = mT(9364),
      JT = mT(9387);
    const xT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function dT(TT) {
      var UT, mT;
      const zT = null === (UT = WT.g[TT]) || void 0 === UT ? void 0 : UT.meta;
      return (null === zT || void 0 === zT ? void 0 : zT.rootName) !== JT.p ? null : {
        rot: null !== (mT = zT.rot) && void 0 !== mT ? mT : 1,
        half: (0, JT.f)(zT.rootName, zT.metaStr)
      }
    }

    function wT(TT, UT, mT, WT) {
      return dT(TT(UT, mT, WT))
    }

    function tT(TT, UT, mT, WT, zT) {
      let {
        rot: MT,
        half: gT
      } = zT;
      const [nT, HT] = (0, JT.m)(MT, gT), kT = wT(TT, UT + nT, mT, WT + HT);
      return null !== kT && kT.rot === MT && kT.half === JT.t[gT]
    }
    var aT = mT(38550);
    const yT = [new class {
      constructor() {
        this.reshapeOffsets = pT
      }
      handles(TT) {
        var UT;
        return "Stairs" === (null === (UT = WT.g[TT]) || void 0 === UT ? void 0 : UT.model)
      }
      affects(TT) {
        return this.handles(TT)
      }
      shape(TT, UT, mT, zT, MT) {
        const gT = this.stairsOf(MT),
          nT = this.cornerAt(TT, UT, mT, zT, gT),
          kT = gT.half === HT.d.top ? "top" : "bot";
        return (0, WT.j)(`${WT.g[MT].meta.rootName}|meta|rot${gT.rot}|${kT}${null===nT?"":`|${nT}`}`)
      }
      stairsOf(TT) {
        const {
          rot: UT,
          halfblockPlacement: mT
        } = WT.g[TT].meta;
        return {
          rot: UT,
          half: mT
        }
      }
      stairsAt(TT, UT, mT, WT) {
        const zT = TT(UT, mT, WT);
        return this.handles(zT) ? this.stairsOf(zT) : null
      }
      cornerAt(TT, UT, mT, WT, zT) {
        let {
          rot: MT,
          half: gT
        } = zT;
        const nT = kT[MT],
          HT = zT => {
            let [nT, HT] = zT;
            const kT = this.stairsAt(TT, UT + nT, mT, WT + HT);
            return null !== kT && kT.rot === MT && kT.half === gT
          },
          pT = this.stairsAt(TT, UT + nT[0], mT, WT + nT[1]);
        if (null !== pT && pT.half === gT) {
          const TT = kT[pT.rot];
          if (LT(nT, TT) && !HT([-TT[0], -TT[1]])) return lT(TT, jT(nT)) ? "outerLeft" : "outerRight"
        }
        const BT = this.stairsAt(TT, UT - nT[0], mT, WT - nT[1]);
        if (null !== BT && BT.half === gT) {
          const TT = kT[BT.rot];
          if (LT(nT, TT) && !HT(TT)) return lT(TT, jT(nT)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = MT, this.rootIds = new Set(zT.j.map((TT => (0, WT.j)(TT))))
      }
      handles(TT) {
        var UT;
        const mT = null === (UT = WT.g[TT]) || void 0 === UT ? void 0 : UT.meta;
        return void 0 !== mT && this.rootIds.has(mT.rootId)
      }
      affects(TT) {
        return this.handles(TT)
      }
      placedBy(TT) {
        return WT.g[TT].meta.rootName === zT.q ? null : zT.q
      }
      shape(TT, UT, mT, MT, gT) {
        const {
          rootId: nT,
          rootName: HT,
          rot: kT
        } = WT.g[gT].meta;
        let jT = 0;
        return zT.A[kT].forEach(((zT, gT) => {
          var HT;
          let [lT, LT, pT] = zT;
          const BT = null === (HT = WT.g[TT(UT + lT, mT + LT, MT + pT)]) || void 0 === HT ? void 0 : HT.meta;
          (null === BT || void 0 === BT ? void 0 : BT.rootId) === nT && BT.rot === kT && (jT |= 1 << gT)
        })), (0, WT.j)((0, zT.f)(HT, kT, jT))
      }
    }, ...gT.e.map((TT => new nT.c(TT))), new class {
      constructor() {
        this.reshapeOffsets = bT
      }
      handles(TT) {
        const UT = OT(TT);
        return fT.has(UT) || UT === BT.j
      }
      affects(TT) {
        const UT = OT(TT);
        return qT.has(UT) || iT.has(UT) || UT === cT || UT === BT.j || void 0 !== BT.d[UT]
      }
      shape(TT, UT, mT, zT, MT, gT) {
        const {
          rootName: nT,
          rot: HT
        } = WT.g[MT].meta;
        return nT === BT.j ? gT ? MT : function(TT, UT, mT, zT, MT) {
          const [gT, nT] = BT.f[MT - 1];
          for (let HT = 1; HT <= BT.M; HT++) {
            const [kT, jT] = [UT - gT * HT, zT - nT * HT], lT = TT(kT, mT, jT);
            if (OT(lT) === BT.j && WT.g[lT].meta.rot === MT && ZT(UT, mT, zT, kT, jT)) return (0, WT.j)((0, BT.bb)(MT, !eT(lT)))
          }
          return (0, WT.j)((0, BT.bb)(MT, !1))
        }(TT, UT, mT, zT, HT) : (0, WT.j)((0, BT.Q)(nT, HT, function(TT, UT, mT, zT, MT) {
          const [gT, nT] = BT.f[MT - 1], HT = (MT, gT) => function(TT, UT, mT) {
            var zT;
            const MT = null === (zT = WT.g[TT]) || void 0 === zT ? void 0 : zT.meta;
            if (!MT) return !1;
            const gT = MT.rootName,
              nT = qT.has(gT) || eT(TT);
            if (!nT && !iT.has(gT) && gT !== cT) return !1;
            const [HT, kT] = BT.f[MT.rot - 1];
            if (nT && HT === -UT && kT === -mT) return !0;
            if (iT.has(gT)) return HT === UT && kT === mT;
            const jT = WT.g[TT].name;
            return (gT === cT ? (0, BT.ab)(jT, HT, kT) : gT === vT ? [(0, BT.T)(jT, HT, kT)] : []).some((TT => {
              let [WT, zT] = TT;
              return WT === -UT && zT === -mT
            }))
          }(TT(UT + MT, mT, zT + gT), MT, gT), kT = TT(UT - gT, mT, zT - nT), jT = OT(kT) === cT && WT.g[kT].meta.rot === MT, lT = 1 === BT.d[OT(TT(UT, mT - 1, zT))] || -1 === BT.d[OT(TT(UT, mT + 1, zT))];
          if (lT || jT || HT(-gT, -nT)) return null;
          const LT = HT(-nT, gT),
            pT = HT(nT, -gT);
          if (LT === pT) return null;
          return LT ? "turnLeft" : "turnRight"
        }(TT, UT, mT, zT, HT)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = xT, this.rootId = (0, WT.j)(JT.p)
      }
      handles(TT) {
        var UT;
        return (null === (UT = WT.g[TT]) || void 0 === UT ? void 0 : UT.meta.rootId) === this.rootId
      }
      affects(TT) {
        return this.handles(TT)
      }
      shape(TT, UT, mT, zT, MT, gT) {
        const nT = dT(MT);
        return (0, WT.j)((HT = nT.rot, null !== (kT = gT ? this.reshapedHalf(TT, UT, mT, zT, nT) : this.placedHalf(TT, UT, mT, zT, nT.rot)) ? (0, JT.b)(JT.p, HT, kT) : 1 === HT ? JT.p : `${JT.p}|meta|rot${HT}`));
        var HT, kT
      }
      placedHalf(TT, UT, mT, WT, zT) {
        const [MT, gT] = YT.e[zT];
        for (const [nT, HT] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const kT = UT + HT * MT,
            jT = WT + HT * gT,
            lT = wT(TT, kT, mT, jT);
          if (null !== lT && lT.rot === zT && (null === lT.half || !tT(TT, kT, mT, jT, lT))) return nT
        }
        return null
      }
      reshapedHalf(TT, UT, mT, WT, zT) {
        if (null !== zT.half && tT(TT, UT, mT, WT, zT)) return zT.half;
        for (const MT of ["right", "left"]) {
          const [gT, nT] = (0, JT.m)(zT.rot, MT), HT = wT(TT, UT + gT, mT, WT + nT);
          if (null !== HT && HT.rot === zT.rot && HT.half === JT.t[MT]) return MT
        }
        return null
      }
    }, new aT.e];

    function XT(TT, UT, mT, WT, zT) {
      let MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const gT of yT)
        if (gT.handles(zT)) return gT.shape(TT, UT, mT, WT, zT, MT);
      return zT
    }

    function IT(TT) {
      for (const WT of yT) {
        var UT, mT;
        if (WT.handles(TT)) return null !== (UT = null === (mT = WT.placedBy) || void 0 === mT ? void 0 : mT.call(WT, TT)) && void 0 !== UT ? UT : null
      }
      return null
    }
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
  },
  38316: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      e: () => MT
    });
    const WT = ["Chest", "Loot Chest", "Moonstone Chest"],
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

    function MT(TT) {
      return zT.find((UT => UT.exactMatch ? TT === UT.name : TT.includes(UT.name)))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);