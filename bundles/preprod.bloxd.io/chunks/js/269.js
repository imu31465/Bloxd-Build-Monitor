export const id = 269;
export const ids = [269];
export const modules = {
  38739: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      f: () => YB,
      j: () => jB,
      l: () => DB,
      o: () => oB,
      q: () => QB
    });
    const YB = 1.001,
      DB = .501,
      QB = .025,
      oB = .75,
      jB = .08,
      yB = 4;

    function JB() {
      const BB = DB,
        OB = QB,
        GB = BB - OB / 2,
        YB = (2 * BB - 2 * OB) / (2 * yB - 1),
        oB = [];
      for (const DB of [-GB, GB])
        for (const QB of [-GB, GB])
          for (let GB = 0; GB < yB; GB++) {
            const jB = -BB + OB + YB * (2 * GB + .5);
            oB.push([YB, OB, OB, jB, DB, QB]), oB.push([OB, YB, OB, DB, jB, QB]), oB.push([OB, OB, YB, DB, QB, jB])
          }
      for (const DB of [-GB, GB])
        for (const BB of [-GB, GB])
          for (const YB of [-GB, GB]) oB.push([OB, OB, OB, DB, BB, YB]);
      return oB
    }
  },
  39084: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => lB,
      C: () => SB,
      F: () => UB,
      J: () => VB,
      L: () => AB,
      O: () => zB,
      S: () => qB,
      V: () => NB,
      W: () => DB,
      b: () => MB,
      e: () => yB,
      g: () => WB,
      j: () => JB,
      m: () => jB,
      q: () => oB,
      u: () => QB,
      x: () => nB
    });
    var YB = GB(10010);

    function DB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const QB = 2e3,
      oB = .005,
      jB = .001,
      yB = 2,
      JB = "Fluid Tank",
      MB = "Coolant Mixer",
      PB = 144;

    function zB(BB) {
      const OB = BB.split("|")[0];
      return (0, YB.n)(OB) ? OB === YB.e ? "cryo" : "water" : null
    }
    const lB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      pB = 63;

    function qB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const GB = OB ? function(BB, OB, GB) {
        const YB = lB.findIndex((YB => {
          let [DB, QB, oB] = YB;
          return DB === BB && QB === OB && oB === GB
        }));
        return YB < 0 ? 0 : 1 << YB
      }(OB[0], OB[1], OB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: GB
      } : "user" === BB ? {
        kind: BB,
        faces: pB & ~GB
      } : {
        kind: BB,
        faces: pB
      }
    }

    function ZB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function NB(BB, OB, GB) {
      return 0 !== (BB.faces & 1 << GB) && 0 !== (OB.faces & 1 << (1 ^ GB)) && (ZB(BB.kind) || ZB(OB.kind))
    }
    const RB = (BB, OB, GB, YB) => ({
        input: BB,
        inputAmount: YB,
        output: OB,
        outputAmount: GB
      }),
      WB = {
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
          recipes: [RB("Uranium Grit", "Uranium Pellet", 1, 12), RB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [RB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: PB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function AB(BB, OB) {
      return 1e3 * (null !== OB && void 0 !== OB ? OB : 0) / BB.opMs
    }

    function VB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GB = AB(WB["Coolant Mixer"], PB) * OB;
      return BB <= 0 ? 0 : Math.ceil(BB / GB - 1e-9)
    }
    const SB = "baf2Water",
      nB = "baf2waterclose",
      UB = "baf2wateropen"
  },
  39074: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => FB,
      d: () => iB
    });
    var YB = GB(9927),
      DB = GB(9965);
    const QB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var oB = GB(9983),
      jB = GB(38888),
      yB = GB(9974);
    const JB = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function MB(BB) {
      let [OB, GB] = BB;
      return [-GB, OB]
    }

    function PB(BB, OB) {
      return BB[0] === OB[0] && BB[1] === OB[1]
    }

    function zB(BB, OB) {
      return BB[0] * OB[0] + BB[1] * OB[1] === 0
    }
    const lB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var pB = GB(10004);

    function qB(BB, OB, GB, YB, DB) {
      return OB < pB.k || OB >= pB.k + pB.o || Math.floor(BB / pB.t) === Math.floor(YB / pB.t) && Math.floor(GB / pB.t) === Math.floor(DB / pB.t)
    }
    const ZB = "Splitter",
      NB = "Sorting Gate",
      RB = new Set(pB.E),
      WB = new Set([...pB.E, "Belt Loader", "Fast Loader", NB]),
      AB = new Set(pB.s),
      VB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function SB(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = YB.h[BB]) || void 0 === GB ? void 0 : GB.meta.rootName) && void 0 !== OB ? OB : ""
    }

    function nB(BB) {
      return SB(BB) === pB.e && (0, pB.O)(YB.h[BB].name)
    }
    var UB = GB(9967),
      fB = GB(9993);
    const kB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function dB(BB) {
      var OB, GB;
      const DB = null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.meta;
      return (null === DB || void 0 === DB ? void 0 : DB.rootName) !== fB.p ? null : {
        rot: null !== (GB = DB.rot) && void 0 !== GB ? GB : 1,
        half: (0, fB.h)(DB.rootName, DB.metaStr)
      }
    }

    function KB(BB, OB, GB, YB) {
      return dB(BB(OB, GB, YB))
    }

    function uB(BB, OB, GB, YB, DB) {
      let {
        rot: QB,
        half: oB
      } = DB;
      const [jB, yB] = (0, fB.l)(QB, oB), JB = KB(BB, OB + jB, GB, YB + yB);
      return null !== JB && JB.rot === QB && JB.half === fB.s[oB]
    }
    var mB = GB(39081);
    const IB = [new class {
      constructor() {
        this.reshapeOffsets = lB
      }
      handles(BB) {
        var OB;
        return "Stairs" === (null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.model)
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, OB, GB, DB, QB) {
        const oB = this.stairsOf(QB),
          jB = this.cornerAt(BB, OB, GB, DB, oB),
          JB = oB.half === yB.d.top ? "top" : "bot";
        return (0, YB.j)(`${YB.h[QB].meta.rootName}|meta|rot${oB.rot}|${JB}${null===jB?"":`|${jB}`}`)
      }
      stairsOf(BB) {
        const {
          rot: OB,
          halfblockPlacement: GB
        } = YB.h[BB].meta;
        return {
          rot: OB,
          half: GB
        }
      }
      stairsAt(BB, OB, GB, YB) {
        const DB = BB(OB, GB, YB);
        return this.handles(DB) ? this.stairsOf(DB) : null
      }
      cornerAt(BB, OB, GB, YB, DB) {
        let {
          rot: QB,
          half: oB
        } = DB;
        const jB = JB[QB],
          yB = DB => {
            let [jB, yB] = DB;
            const JB = this.stairsAt(BB, OB + jB, GB, YB + yB);
            return null !== JB && JB.rot === QB && JB.half === oB
          },
          lB = this.stairsAt(BB, OB + jB[0], GB, YB + jB[1]);
        if (null !== lB && lB.half === oB) {
          const BB = JB[lB.rot];
          if (zB(jB, BB) && !yB([-BB[0], -BB[1]])) return PB(BB, MB(jB)) ? "outerLeft" : "outerRight"
        }
        const pB = this.stairsAt(BB, OB - jB[0], GB, YB - jB[1]);
        if (null !== pB && pB.half === oB) {
          const BB = JB[pB.rot];
          if (zB(jB, BB) && !yB(BB)) return PB(BB, MB(jB)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = QB, this.rootIds = new Set(DB.i.map((BB => (0, YB.j)(BB))))
      }
      handles(BB) {
        var OB;
        const GB = null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.meta;
        return void 0 !== GB && this.rootIds.has(GB.rootId)
      }
      affects(BB) {
        return this.handles(BB)
      }
      placedBy(BB) {
        return YB.h[BB].meta.rootName === DB.s ? null : DB.s
      }
      shape(BB, OB, GB, QB, oB) {
        const {
          rootId: jB,
          rootName: yB,
          rot: JB
        } = YB.h[oB].meta;
        let MB = 0;
        return DB.z[JB].forEach(((DB, oB) => {
          var yB;
          let [PB, zB, lB] = DB;
          const pB = null === (yB = YB.h[BB(OB + PB, GB + zB, QB + lB)]) || void 0 === yB ? void 0 : yB.meta;
          (null === pB || void 0 === pB ? void 0 : pB.rootId) === jB && pB.rot === JB && (MB |= 1 << oB)
        })), (0, YB.j)((0, DB.e)(yB, JB, MB))
      }
    }, ...oB.b.map((BB => new jB.e(BB))), new class {
      constructor() {
        this.reshapeOffsets = VB
      }
      handles(BB) {
        const OB = SB(BB);
        return RB.has(OB) || OB === pB.e
      }
      affects(BB) {
        const OB = SB(BB);
        return WB.has(OB) || AB.has(OB) || OB === ZB || OB === pB.e || void 0 !== pB.b[OB]
      }
      shape(BB, OB, GB, DB, QB, oB) {
        const {
          rootName: jB,
          rot: yB
        } = YB.h[QB].meta;
        return jB === pB.e ? oB ? QB : function(BB, OB, GB, DB, QB) {
          const [oB, jB] = pB.d[QB - 1];
          for (let yB = 1; yB <= pB.C; yB++) {
            const [JB, MB] = [OB - oB * yB, DB - jB * yB], PB = BB(JB, GB, MB);
            if (SB(PB) === pB.e && YB.h[PB].meta.rot === QB && qB(OB, GB, DB, JB, MB)) return (0, YB.j)((0, pB.Y)(QB, !nB(PB)))
          }
          return (0, YB.j)((0, pB.Y)(QB, !1))
        }(BB, OB, GB, DB, yB) : (0, YB.j)((0, pB.F)(jB, yB, function(BB, OB, GB, DB, QB) {
          const [oB, jB] = pB.d[QB - 1], yB = (QB, oB) => function(BB, OB, GB) {
            var DB;
            const QB = null === (DB = YB.h[BB]) || void 0 === DB ? void 0 : DB.meta;
            if (!QB) return !1;
            const oB = QB.rootName,
              jB = WB.has(oB) || nB(BB);
            if (!jB && !AB.has(oB) && oB !== ZB) return !1;
            const [yB, JB] = pB.d[QB.rot - 1];
            if (jB && yB === -OB && JB === -GB) return !0;
            if (AB.has(oB)) return yB === OB && JB === GB;
            const MB = YB.h[BB].name;
            return (oB === ZB ? (0, pB.U)(MB, yB, JB) : oB === NB ? [(0, pB.J)(MB, yB, JB)] : []).some((BB => {
              let [YB, DB] = BB;
              return YB === -OB && DB === -GB
            }))
          }(BB(OB + QB, GB, DB + oB), QB, oB), JB = BB(OB - oB, GB, DB - jB), MB = SB(JB) === ZB && YB.h[JB].meta.rot === QB, PB = 1 === pB.b[SB(BB(OB, GB - 1, DB))] || -1 === pB.b[SB(BB(OB, GB + 1, DB))];
          if (PB || MB || yB(-oB, -jB)) return null;
          const zB = yB(-jB, oB),
            lB = yB(jB, -oB);
          if (zB === lB) return null;
          return zB ? "turnLeft" : "turnRight"
        }(BB, OB, GB, DB, yB)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = kB, this.rootId = (0, YB.j)(fB.p)
      }
      handles(BB) {
        var OB;
        return (null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.meta.rootId) === this.rootId
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, OB, GB, DB, QB, oB) {
        const jB = dB(QB);
        return (0, YB.j)((yB = jB.rot, null !== (JB = oB ? this.reshapedHalf(BB, OB, GB, DB, jB) : this.placedHalf(BB, OB, GB, DB, jB.rot)) ? (0, fB.e)(fB.p, yB, JB) : 1 === yB ? fB.p : `${fB.p}|meta|rot${yB}`));
        var yB, JB
      }
      placedHalf(BB, OB, GB, YB, DB) {
        const [QB, oB] = UB.d[DB];
        for (const [jB, yB] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const JB = OB + yB * QB,
            MB = YB + yB * oB,
            PB = KB(BB, JB, GB, MB);
          if (null !== PB && PB.rot === DB && (null === PB.half || !uB(BB, JB, GB, MB, PB))) return jB
        }
        return null
      }
      reshapedHalf(BB, OB, GB, YB, DB) {
        if (null !== DB.half && uB(BB, OB, GB, YB, DB)) return DB.half;
        for (const QB of ["right", "left"]) {
          const [oB, jB] = (0, fB.l)(DB.rot, QB), yB = KB(BB, OB + oB, GB, YB + jB);
          if (null !== yB && yB.rot === DB.rot && yB.half === fB.s[QB]) return QB
        }
        return null
      }
    }, new mB.e];

    function FB(BB, OB, GB, YB, DB) {
      let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const oB of IB)
        if (oB.handles(DB)) return oB.shape(BB, OB, GB, YB, DB, QB);
      return DB
    }

    function iB(BB) {
      for (const YB of IB) {
        var OB, GB;
        if (YB.handles(BB)) return null !== (OB = null === (GB = YB.placedBy) || void 0 === GB ? void 0 : GB.call(YB, BB)) && void 0 !== OB ? OB : null
      }
      return null
    }
  },
  39081: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => fB,
      g: () => AB,
      k: () => WB
    });
    var YB = GB(9927),
      DB = GB(9955),
      QB = GB(10010),
      oB = GB(39084),
      jB = GB(10004);
    const yB = (0, oB.S)("pipe"),
      JB = (0, oB.S)("tank"),
      MB = (0, oB.S)("port"),
      PB = "Reactor Port";

    function zB(BB, OB, GB) {
      const YB = new Set([QB.g, QB.e, PB, ...OB, ...GB, ...BB ? [oB.j] : []]);
      return {
        makers: new Set(OB),
        roots: YB
      }
    }
    const lB = {
        water: zB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", oB.b]),
        cryo: zB(!1, [oB.b], [])
      },
      pB = new Set([...lB.water.roots, ...lB.cryo.roots]),
      qB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      ZB = DB.c.map((BB => qB[BB])),
      NB = ZB.map((BB => {
        let [OB, GB, YB] = BB;
        return oB.B.findIndex((BB => {
          let [DB, QB, oB] = BB;
          return DB === OB && QB === GB && oB === YB
        }))
      }));

    function RB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const GB = YB.h[BB],
        DB = null === GB || void 0 === GB ? void 0 : GB.meta.rootName,
        zB = lB[OB];
      if (!DB || !zB.roots.has(DB)) return null;
      if ((0, QB.n)(DB)) return (0, oB.O)(GB.name) === OB ? yB : null;
      if (DB === oB.j) return JB;
      if (DB === PB) return GB.name.endsWith("|Water") ? MB : null;
      const [pB, qB] = jB.d[(GB.meta.rot || 1) - 1];
      return (0, oB.S)(zB.makers.has(DB) ? "maker" : "user", [-pB, 0, -qB])
    }

    function WB(BB, OB, GB, DB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: jB
      } = lB[QB];
      return ZB.some(((JB, MB) => {
        var PB, zB;
        let [lB, pB, qB] = JB;
        const ZB = BB(OB + lB, GB + pB, DB + qB),
          WB = RB(ZB, QB);
        return null !== WB && jB.has(null !== (PB = null === (zB = YB.h[ZB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== PB ? PB : "") && !(0, oB.V)(yB, WB, NB[MB])
      }))
    }

    function AB(BB) {
      const OB = YB.h[BB];
      return OB ? (0, oB.O)(OB.name) : null
    }
    let VB = null;

    function SB(BB) {
      if (!VB) {
        VB = new Map;
        for (const BB of ["water", "cryo"])
          for (let OB = 0; OB < 64; OB++)
            for (const GB of [!1, !0]) VB.set((0, QB.p)(BB, OB, GB), {
              fl: BB,
              mask: OB,
              full: GB
            })
      }
      return VB.get(BB)
    }
    const nB = new Map(Array.from({
      length: QB.k + 1
    }, ((BB, OB) => [(0, QB.q)(OB), OB])));

    function UB(BB, OB, GB, DB, QB, oB) {
      return ZB.some(((jB, yB) => {
        var JB, MB, PB;
        let [zB, lB, pB] = jB;
        if (0 === (oB >> yB & 1)) return !1;
        const qB = null !== (JB = null === (MB = YB.h[BB(OB + zB, GB + lB, DB + pB)]) || void 0 === MB ? void 0 : MB.name) && void 0 !== JB ? JB : "",
          ZB = SB(qB);
        return ZB ? ZB.fl === QB && ZB.full : (null !== (PB = function(BB) {
          var OB;
          return null !== (OB = nB.get(BB)) && void 0 !== OB ? OB : null
        }(qB)) && void 0 !== PB ? PB : 0) > 0
      }))
    }
    class fB {
      constructor() {
        this.reshapeOffsets = ZB
      }
      handles(BB) {
        return null !== AB(BB)
      }
      affects(BB) {
        var OB, GB;
        return pB.has(null !== (OB = null === (GB = YB.h[BB]) || void 0 === GB ? void 0 : GB.meta.rootName) && void 0 !== OB ? OB : "")
      }
      placedBy(BB) {
        var OB;
        return (null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.meta.rootName) === QB.e ? QB.g : null
      }
      shape(BB, OB, GB, DB, jB, JB) {
        var MB, PB, zB;
        const lB = null !== (MB = null === (PB = YB.h[jB]) || void 0 === PB ? void 0 : PB.name) && void 0 !== MB ? MB : "",
          pB = JB || lB !== QB.g ? null !== (zB = (0, oB.O)(lB)) && void 0 !== zB ? zB : "water" : function(BB, OB, GB, YB) {
            return ZB.some(((DB, QB) => {
              let [jB, JB, MB] = DB;
              const PB = RB(BB(OB + jB, GB + JB, YB + MB), "cryo");
              return null !== PB && "port" !== PB.kind && (0, oB.V)(yB, PB, NB[QB])
            })) ? "cryo" : "water"
          }(BB, OB, GB, DB),
          qB = function(BB, OB, GB, YB) {
            let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              QB = 0;
            return ZB.forEach(((jB, JB) => {
              let [MB, PB, zB] = jB;
              const lB = RB(BB(OB + MB, GB + PB, YB + zB), DB);
              lB && (0, oB.V)(yB, lB, NB[JB]) && (QB |= 1 << JB)
            })), QB
          }(BB, OB, GB, DB, pB),
          WB = JB ? function(BB) {
            var OB;
            return !0 === (null === (OB = SB(BB)) || void 0 === OB ? void 0 : OB.full)
          }(lB) : UB(BB, OB, GB, DB, pB, qB);
        return (0, YB.j)((0, QB.p)(pB, qB, WB))
      }
    }
  },
  38836: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      h: () => QB
    });
    const YB = ["Chest", "Loot Chest", "Moonstone Chest"],
      DB = [{
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

    function QB(BB) {
      return DB.find((OB => OB.exactMatch ? BB === OB.name : BB.includes(OB.name)))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);