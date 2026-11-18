export const id = 205;
export const ids = [205];
export const modules = {
  36946: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      g: () => VB,
      j: () => JB,
      k: () => yB,
      o: () => lB,
      p: () => pB
    });
    const VB = 1.001,
      yB = .501,
      pB = .025,
      lB = .75,
      JB = .08,
      YB = 4;

    function gB() {
      const BB = yB,
        TB = pB,
        dB = BB - TB / 2,
        VB = (2 * BB - 2 * TB) / (2 * YB - 1),
        lB = [];
      for (const yB of [-dB, dB])
        for (const pB of [-dB, dB])
          for (let dB = 0; dB < YB; dB++) {
            const JB = -BB + TB + VB * (2 * dB + .5);
            lB.push([VB, TB, TB, JB, yB, pB]), lB.push([TB, VB, TB, yB, JB, pB]), lB.push([TB, TB, VB, yB, pB, JB])
          }
      for (const yB of [-dB, dB])
        for (const BB of [-dB, dB])
          for (const VB of [-dB, dB]) lB.push([TB, TB, TB, yB, BB, VB]);
      return lB
    }
  },
  37372: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => OB,
      B: () => tB,
      E: () => sB,
      I: () => NB,
      K: () => iB,
      M: () => LB,
      P: () => uB,
      S: () => EB,
      W: () => yB,
      c: () => oB,
      e: () => YB,
      h: () => mB,
      l: () => gB,
      p: () => JB,
      t: () => lB,
      v: () => pB,
      x: () => fB
    });
    var VB = dB(8743);

    function yB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const pB = 2e3,
      lB = .005,
      JB = .001,
      YB = 2,
      gB = "Fluid Tank",
      oB = "Coolant Mixer",
      kB = 144;

    function LB(BB) {
      const TB = BB.split("|")[0];
      return (0, VB.j)(TB) ? TB === VB.e ? "cryo" : "water" : null
    }
    const OB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      DB = 63;

    function uB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const dB = TB ? function(BB, TB, dB) {
        const VB = OB.findIndex((VB => {
          let [yB, pB, lB] = VB;
          return yB === BB && pB === TB && lB === dB
        }));
        return VB < 0 ? 0 : 1 << VB
      }(TB[0], TB[1], TB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: dB
      } : "user" === BB ? {
        kind: BB,
        faces: DB & ~dB
      } : {
        kind: BB,
        faces: DB
      }
    }

    function HB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function EB(BB, TB, dB) {
      return 0 !== (BB.faces & 1 << dB) && 0 !== (TB.faces & 1 << (1 ^ dB)) && (HB(BB.kind) || HB(TB.kind))
    }
    const vB = (BB, TB, dB, VB) => ({
        input: BB,
        inputAmount: VB,
        output: TB,
        outputAmount: dB
      }),
      mB = {
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
          recipes: [vB("Uranium Grit", "Uranium Pellet", 1, 12), vB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [vB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: kB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function iB(BB, TB) {
      return 1e3 * (null !== TB && void 0 !== TB ? TB : 0) / BB.opMs
    }

    function NB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const dB = iB(mB["Coolant Mixer"], kB) * TB;
      return BB <= 0 ? 0 : Math.ceil(BB / dB - 1e-9)
    }
    const tB = "baf2Water",
      fB = "baf2waterclose",
      sB = "baf2wateropen"
  },
  37361: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => IB,
      d: () => cB
    });
    var VB = dB(8653),
      yB = dB(8690);
    const pB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var lB = dB(8701),
      JB = dB(37162),
      YB = dB(8698);
    const gB = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function oB(BB) {
      let [TB, dB] = BB;
      return [-dB, TB]
    }

    function kB(BB, TB) {
      return BB[0] === TB[0] && BB[1] === TB[1]
    }

    function LB(BB, TB) {
      return BB[0] * TB[0] + BB[1] * TB[1] === 0
    }
    const OB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var DB = dB(8737);

    function uB(BB, TB, dB, VB, yB) {
      return TB < DB.t || TB >= DB.t + DB.w || Math.floor(BB / DB.y) === Math.floor(VB / DB.y) && Math.floor(dB / DB.y) === Math.floor(yB / DB.y)
    }
    const HB = "Splitter",
      EB = "Sorting Gate",
      vB = new Set(DB.Q),
      mB = new Set([...DB.Q, "Belt Loader", "Fast Loader", EB]),
      iB = new Set(DB.x),
      NB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function tB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = VB.h[BB]) || void 0 === dB ? void 0 : dB.meta.rootName) && void 0 !== TB ? TB : ""
    }

    function fB(BB) {
      return tB(BB) === DB.j && (0, DB.ab)(VB.h[BB].name)
    }
    var sB = dB(8696),
      MB = dB(8716);
    const zB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function wB(BB) {
      var TB, dB;
      const yB = null === (TB = VB.h[BB]) || void 0 === TB ? void 0 : TB.meta;
      return (null === yB || void 0 === yB ? void 0 : yB.rootName) !== MB.m ? null : {
        rot: null !== (dB = yB.rot) && void 0 !== dB ? dB : 1,
        half: (0, MB.f)(yB.rootName, yB.metaStr)
      }
    }

    function UB(BB, TB, dB, VB) {
      return wB(BB(TB, dB, VB))
    }

    function FB(BB, TB, dB, VB, yB) {
      let {
        rot: pB,
        half: lB
      } = yB;
      const [JB, YB] = (0, MB.k)(pB, lB), gB = UB(BB, TB + JB, dB, VB + YB);
      return null !== gB && gB.rot === pB && gB.half === MB.q[lB]
    }
    var KB = dB(37363);
    const rB = [new class {
      constructor() {
        this.reshapeOffsets = OB
      }
      handles(BB) {
        var TB;
        return "Stairs" === (null === (TB = VB.h[BB]) || void 0 === TB ? void 0 : TB.model)
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, TB, dB, yB, pB) {
        const lB = this.stairsOf(pB),
          JB = this.cornerAt(BB, TB, dB, yB, lB),
          gB = lB.half === YB.e.top ? "top" : "bot";
        return (0, VB.j)(`${VB.h[pB].meta.rootName}|meta|rot${lB.rot}|${gB}${null===JB?"":`|${JB}`}`)
      }
      stairsOf(BB) {
        const {
          rot: TB,
          halfblockPlacement: dB
        } = VB.h[BB].meta;
        return {
          rot: TB,
          half: dB
        }
      }
      stairsAt(BB, TB, dB, VB) {
        const yB = BB(TB, dB, VB);
        return this.handles(yB) ? this.stairsOf(yB) : null
      }
      cornerAt(BB, TB, dB, VB, yB) {
        let {
          rot: pB,
          half: lB
        } = yB;
        const JB = gB[pB],
          YB = yB => {
            let [JB, YB] = yB;
            const gB = this.stairsAt(BB, TB + JB, dB, VB + YB);
            return null !== gB && gB.rot === pB && gB.half === lB
          },
          OB = this.stairsAt(BB, TB + JB[0], dB, VB + JB[1]);
        if (null !== OB && OB.half === lB) {
          const BB = gB[OB.rot];
          if (LB(JB, BB) && !YB([-BB[0], -BB[1]])) return kB(BB, oB(JB)) ? "outerLeft" : "outerRight"
        }
        const DB = this.stairsAt(BB, TB - JB[0], dB, VB - JB[1]);
        if (null !== DB && DB.half === lB) {
          const BB = gB[DB.rot];
          if (LB(JB, BB) && !YB(BB)) return kB(BB, oB(JB)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = pB, this.rootIds = new Set(yB.k.map((BB => (0, VB.j)(BB))))
      }
      handles(BB) {
        var TB;
        const dB = null === (TB = VB.h[BB]) || void 0 === TB ? void 0 : TB.meta;
        return void 0 !== dB && this.rootIds.has(dB.rootId)
      }
      affects(BB) {
        return this.handles(BB)
      }
      placedBy(BB) {
        return VB.h[BB].meta.rootName === yB.r ? null : yB.r
      }
      shape(BB, TB, dB, pB, lB) {
        const {
          rootId: JB,
          rootName: YB,
          rot: gB
        } = VB.h[lB].meta;
        let oB = 0;
        return yB.y[gB].forEach(((yB, lB) => {
          var YB;
          let [kB, LB, OB] = yB;
          const DB = null === (YB = VB.h[BB(TB + kB, dB + LB, pB + OB)]) || void 0 === YB ? void 0 : YB.meta;
          (null === DB || void 0 === DB ? void 0 : DB.rootId) === JB && DB.rot === gB && (oB |= 1 << lB)
        })), (0, VB.j)((0, yB.g)(YB, gB, oB))
      }
    }, ...lB.d.map((BB => new JB.c(BB))), new class {
      constructor() {
        this.reshapeOffsets = NB
      }
      handles(BB) {
        const TB = tB(BB);
        return vB.has(TB) || TB === DB.j
      }
      affects(BB) {
        const TB = tB(BB);
        return mB.has(TB) || iB.has(TB) || TB === HB || TB === DB.j || void 0 !== DB.b[TB]
      }
      shape(BB, TB, dB, yB, pB, lB) {
        const {
          rootName: JB,
          rot: YB
        } = VB.h[pB].meta;
        return JB === DB.j ? lB ? pB : function(BB, TB, dB, yB, pB) {
          const [lB, JB] = DB.f[pB - 1];
          for (let YB = 1; YB <= DB.M; YB++) {
            const [gB, oB] = [TB - lB * YB, yB - JB * YB], kB = BB(gB, dB, oB);
            if (tB(kB) === DB.j && VB.h[kB].meta.rot === pB && uB(TB, dB, yB, gB, oB)) return (0, VB.j)((0, DB.jb)(pB, !fB(kB)))
          }
          return (0, VB.j)((0, DB.jb)(pB, !1))
        }(BB, TB, dB, yB, YB) : (0, VB.j)((0, DB.U)(JB, YB, function(BB, TB, dB, yB, pB) {
          const [lB, JB] = DB.f[pB - 1], YB = (pB, YB) => function(BB, TB, dB, yB, pB) {
            var lB;
            const JB = null === (lB = VB.h[BB]) || void 0 === lB ? void 0 : lB.meta;
            if (!JB) return !1;
            const YB = JB.rootName,
              gB = mB.has(YB) || fB(BB);
            if (!gB && !iB.has(YB) && YB !== HB) return !1;
            const [oB, kB] = DB.f[JB.rot - 1];
            return gB ? oB === -TB && kB === -dB : iB.has(YB) ? oB === TB && kB === dB : (0, DB.hb)(VB.h[BB].name, oB, kB).some((BB => {
              let [VB, yB] = BB;
              return VB === -TB && yB === -dB
            })) && !(yB === TB && pB === dB)
          }(BB(TB + pB, dB, yB + YB), pB, YB, lB, JB), gB = BB(TB - lB, dB, yB - JB), oB = tB(gB) === HB && VB.h[gB].meta.rot === pB, kB = 1 === DB.b[tB(BB(TB, dB - 1, yB))] || -1 === DB.b[tB(BB(TB, dB + 1, yB))];
          if (kB || oB || function(BB, TB, dB) {
              if (tB(BB) !== EB) return !1;
              const [yB, pB] = DB.f[VB.h[BB].meta.rot - 1], [lB, JB] = (0, DB.W)(VB.h[BB].name, yB, pB);
              return TB === lB && dB === JB
            }(gB, lB, JB) || YB(-lB, -JB)) return null;
          const LB = YB(-JB, lB),
            OB = YB(JB, -lB);
          if (LB === OB) return null;
          return LB ? "turnLeft" : "turnRight"
        }(BB, TB, dB, yB, YB)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = zB, this.rootId = (0, VB.j)(MB.m)
      }
      handles(BB) {
        var TB;
        return (null === (TB = VB.h[BB]) || void 0 === TB ? void 0 : TB.meta.rootId) === this.rootId
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, TB, dB, yB, pB, lB) {
        const JB = wB(pB);
        return (0, VB.j)((YB = JB.rot, null !== (gB = lB ? this.reshapedHalf(BB, TB, dB, yB, JB) : this.placedHalf(BB, TB, dB, yB, JB.rot)) ? (0, MB.b)(MB.m, YB, gB) : 1 === YB ? MB.m : `${MB.m}|meta|rot${YB}`));
        var YB, gB
      }
      placedHalf(BB, TB, dB, VB, yB) {
        const [pB, lB] = sB.d[yB];
        for (const [JB, YB] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const gB = TB + YB * pB,
            oB = VB + YB * lB,
            kB = UB(BB, gB, dB, oB);
          if (null !== kB && kB.rot === yB && (null === kB.half || !FB(BB, gB, dB, oB, kB))) return JB
        }
        return null
      }
      reshapedHalf(BB, TB, dB, VB, yB) {
        if (null !== yB.half && FB(BB, TB, dB, VB, yB)) return yB.half;
        for (const pB of ["right", "left"]) {
          const [lB, JB] = (0, MB.k)(yB.rot, pB), YB = UB(BB, TB + lB, dB, VB + JB);
          if (null !== YB && YB.rot === yB.rot && YB.half === MB.q[pB]) return pB
        }
        return null
      }
    }, new KB.b];

    function IB(BB, TB, dB, VB, yB) {
      let pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const lB of rB)
        if (lB.handles(yB)) return lB.shape(BB, TB, dB, VB, yB, pB);
      return yB
    }

    function cB(BB) {
      for (const VB of rB) {
        var TB, dB;
        if (VB.handles(BB)) return null !== (TB = null === (dB = VB.placedBy) || void 0 === dB ? void 0 : dB.call(VB, BB)) && void 0 !== TB ? TB : null
      }
      return null
    }
  },
  37363: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => MB,
      f: () => iB,
      g: () => mB
    });
    var VB = dB(8653),
      yB = dB(8679),
      pB = dB(8743),
      lB = dB(37372),
      JB = dB(8737);
    const YB = (0, lB.P)("pipe"),
      gB = (0, lB.P)("tank"),
      oB = (0, lB.P)("port"),
      kB = "Reactor Port";

    function LB(BB, TB, dB) {
      const VB = new Set([pB.f, pB.e, kB, ...TB, ...dB, ...BB ? [lB.l] : []]);
      return {
        makers: new Set(TB),
        roots: VB
      }
    }
    const OB = {
        water: LB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", lB.c]),
        cryo: LB(!1, [lB.c], [])
      },
      DB = new Set([...OB.water.roots, ...OB.cryo.roots]),
      uB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      HB = yB.e.map((BB => uB[BB])),
      EB = HB.map((BB => {
        let [TB, dB, VB] = BB;
        return lB.A.findIndex((BB => {
          let [yB, pB, lB] = BB;
          return yB === TB && pB === dB && lB === VB
        }))
      }));

    function vB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const dB = VB.h[BB],
        yB = null === dB || void 0 === dB ? void 0 : dB.meta.rootName,
        LB = OB[TB];
      if (!yB || !LB.roots.has(yB)) return null;
      if ((0, pB.j)(yB)) return (0, lB.M)(dB.name) === TB ? YB : null;
      if (yB === lB.l) return gB;
      if (yB === kB) return dB.name.endsWith("|Water") ? oB : null;
      const [DB, uB] = JB.f[(dB.meta.rot || 1) - 1];
      return (0, lB.P)(LB.makers.has(yB) ? "maker" : "user", [-DB, 0, -uB])
    }

    function mB(BB, TB, dB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: JB
      } = OB[pB];
      return HB.some(((gB, oB) => {
        var kB, LB;
        let [OB, DB, uB] = gB;
        const HB = BB(TB + OB, dB + DB, yB + uB),
          mB = vB(HB, pB);
        return null !== mB && JB.has(null !== (kB = null === (LB = VB.h[HB]) || void 0 === LB ? void 0 : LB.meta.rootName) && void 0 !== kB ? kB : "") && !(0, lB.S)(YB, mB, EB[oB])
      }))
    }

    function iB(BB) {
      const TB = VB.h[BB];
      return TB ? (0, lB.M)(TB.name) : null
    }
    let NB = null;

    function tB(BB) {
      if (!NB) {
        NB = new Map;
        for (const BB of ["water", "cryo"])
          for (let TB = 0; TB < 64; TB++)
            for (const dB of [!1, !0]) NB.set((0, pB.m)(BB, TB, dB), {
              DO: BB,
              mask: TB,
              full: dB
            })
      }
      return NB.get(BB)
    }
    const fB = new Map(Array.from({
      length: pB.i + 1
    }, ((BB, TB) => [(0, pB.n)(TB), TB])));

    function sB(BB, TB, dB, yB, pB, lB) {
      return HB.some(((JB, YB) => {
        var gB, oB, kB;
        let [LB, OB, DB] = JB;
        if (0 === (lB >> YB & 1)) return !1;
        const uB = null !== (gB = null === (oB = VB.h[BB(TB + LB, dB + OB, yB + DB)]) || void 0 === oB ? void 0 : oB.name) && void 0 !== gB ? gB : "",
          HB = tB(uB);
        return HB ? HB.DO === pB && HB.full : (null !== (kB = function(BB) {
          var TB;
          return null !== (TB = fB.get(BB)) && void 0 !== TB ? TB : null
        }(uB)) && void 0 !== kB ? kB : 0) > 0
      }))
    }
    class MB {
      constructor() {
        this.reshapeOffsets = HB
      }
      handles(BB) {
        return null !== iB(BB)
      }
      affects(BB) {
        var TB, dB;
        return DB.has(null !== (TB = null === (dB = VB.h[BB]) || void 0 === dB ? void 0 : dB.meta.rootName) && void 0 !== TB ? TB : "")
      }
      placedBy(BB) {
        var TB;
        return (null === (TB = VB.h[BB]) || void 0 === TB ? void 0 : TB.meta.rootName) === pB.e ? pB.f : null
      }
      shape(BB, TB, dB, yB, JB, gB) {
        var oB, kB, LB;
        const OB = null !== (oB = null === (kB = VB.h[JB]) || void 0 === kB ? void 0 : kB.name) && void 0 !== oB ? oB : "",
          DB = gB || OB !== pB.f ? null !== (LB = (0, lB.M)(OB)) && void 0 !== LB ? LB : "water" : function(BB, TB, dB, VB) {
            return HB.some(((yB, pB) => {
              let [JB, gB, oB] = yB;
              const kB = vB(BB(TB + JB, dB + gB, VB + oB), "cryo");
              return null !== kB && "port" !== kB.kind && (0, lB.S)(YB, kB, EB[pB])
            })) ? "cryo" : "water"
          }(BB, TB, dB, yB),
          uB = function(BB, TB, dB, VB) {
            let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              pB = 0;
            return HB.forEach(((JB, gB) => {
              let [oB, kB, LB] = JB;
              const OB = vB(BB(TB + oB, dB + kB, VB + LB), yB);
              OB && (0, lB.S)(YB, OB, EB[gB]) && (pB |= 1 << gB)
            })), pB
          }(BB, TB, dB, yB, DB),
          mB = gB ? function(BB) {
            var TB;
            return !0 === (null === (TB = tB(BB)) || void 0 === TB ? void 0 : TB.full)
          }(OB) : sB(BB, TB, dB, yB, DB, uB);
        return (0, VB.j)((0, pB.m)(DB, uB, mB))
      }
    }
  },
  37120: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      d: () => pB
    });
    const VB = ["Chest", "Loot Chest", "Moonstone Chest"],
      yB = [{
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

    function pB(BB) {
      return yB.find((TB => TB.exactMatch ? BB === TB.name : BB.includes(TB.name)))
    }
  },
  35894: (BB, TB, dB) => {
    function VB(BB) {
      return BB.includes("Leaf Bed")
    }

    function yB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !VB(BB)
    }

    function pB(BB) {
      return BB.includes(" Strongbed")
    }

    function lB(BB) {
      return VB(BB) || yB(BB) || pB(BB)
    }
    dB.d(TB, {
      e: () => lB,
      h: () => VB,
      l: () => pB,
      p: () => yB
    })
  },
  35886: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB
    });
    var VB = dB(35894),
      yB = dB(8653);
    const pB = [],
      lB = [],
      JB = [],
      YB = [];
    for (const oB of Object.keys(yB.n))(0, VB.h)(oB) ? pB.push(oB) : (0, VB.p)(oB) && lB.push(oB), (0, VB.l)(oB) && JB.push(oB), (oB.includes(" Bed Head") || oB.includes(" Strongbed Head")) && YB.push(oB);
    const gB = {
      leafBeds: pB,
      woolBeds: lB,
      strongBeds: JB,
      beds: [...pB, ...lB, ...JB],
      bedHeads: YB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);