export const id = 247;
export const ids = [247];
export const modules = {
  38142: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB,
      f: () => QB,
      g: () => NB,
      j: () => nB,
      m: () => IB,
      o: () => dB
    });
    const QB = 1.001,
      nB = .501,
      dB = .025,
      IB = .75,
      NB = .08,
      uB = 4;

    function UB() {
      const BB = nB,
        jB = dB,
        zB = BB - jB / 2,
        QB = (2 * BB - 2 * jB) / (2 * uB - 1),
        IB = [];
      for (const nB of [-zB, zB])
        for (const dB of [-zB, zB])
          for (let zB = 0; zB < uB; zB++) {
            const NB = -BB + jB + QB * (2 * zB + .5);
            IB.push([QB, jB, jB, NB, nB, dB]), IB.push([jB, QB, jB, nB, NB, dB]), IB.push([jB, jB, QB, nB, dB, NB])
          }
      for (const nB of [-zB, zB])
        for (const BB of [-zB, zB])
          for (const QB of [-zB, zB]) IB.push([jB, jB, jB, nB, BB, QB]);
      return IB
    }
  },
  38517: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => SB,
      C: () => EB,
      E: () => tB,
      I: () => gB,
      M: () => rB,
      Q: () => mB,
      T: () => kB,
      V: () => nB,
      b: () => aB,
      f: () => uB,
      j: () => LB,
      k: () => UB,
      o: () => NB,
      s: () => IB,
      u: () => dB,
      v: () => MB,
      x: () => sB
    });
    var QB = zB(9354);

    function nB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const dB = 2e3,
      IB = .005,
      NB = .001,
      uB = 2,
      UB = "Fluid Tank",
      aB = "Coolant Mixer",
      pB = 144;

    function rB(BB) {
      const jB = BB.split("|")[0];
      return (0, QB.j)(jB) ? jB === QB.d ? "cryo" : "water" : null
    }
    const sB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      JB = 63;

    function mB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const zB = jB ? function(BB, jB, zB) {
        const QB = sB.findIndex((QB => {
          let [nB, dB, IB] = QB;
          return nB === BB && dB === jB && IB === zB
        }));
        return QB < 0 ? 0 : 1 << QB
      }(jB[0], jB[1], jB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: zB
      } : "user" === BB ? {
        kind: BB,
        faces: JB & ~zB
      } : {
        kind: BB,
        faces: JB
      }
    }

    function yB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function kB(BB, jB, zB) {
      return 0 !== (BB.faces & 1 << zB) && 0 !== (jB.faces & 1 << (1 ^ zB)) && (yB(BB.kind) || yB(jB.kind))
    }
    const GB = (BB, jB, zB, QB) => ({
        input: BB,
        inputAmount: QB,
        output: jB,
        outputAmount: zB
      }),
      LB = {
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
          recipes: [GB("Uranium Grit", "Uranium Pellet", 1, 12), GB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [GB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function gB(BB, jB) {
      return 1e3 * (null !== jB && void 0 !== jB ? jB : 0) / BB.opMs
    }

    function tB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const zB = gB(LB["Coolant Mixer"], pB) * jB;
      return BB <= 0 ? 0 : Math.ceil(BB / zB - 1e-9)
    }
    const SB = "baf2Water",
      MB = "baf2waterclose",
      EB = "baf2wateropen"
  },
  38507: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => YB,
      h: () => VB
    });
    var QB = zB(9266),
      nB = zB(9297);
    const dB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var IB = zB(9319),
      NB = zB(38300),
      uB = zB(9311);
    const UB = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function aB(BB) {
      let [jB, zB] = BB;
      return [-zB, jB]
    }

    function pB(BB, jB) {
      return BB[0] === jB[0] && BB[1] === jB[1]
    }

    function rB(BB, jB) {
      return BB[0] * jB[0] + BB[1] * jB[1] === 0
    }
    const sB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var JB = zB(9345);

    function mB(BB, jB, zB, QB, nB) {
      return jB < JB.q || jB >= JB.q + JB.u || Math.floor(BB / JB.B) === Math.floor(QB / JB.B) && Math.floor(zB / JB.B) === Math.floor(nB / JB.B)
    }
    const yB = "Splitter",
      kB = "Sorting Gate",
      GB = new Set(JB.R),
      LB = new Set([...JB.R, "Belt Loader", "Fast Loader", kB]),
      gB = new Set(JB.x),
      tB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function SB(BB) {
      var jB, zB;
      return null !== (jB = null === (zB = QB.i[BB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== jB ? jB : ""
    }

    function MB(BB) {
      return SB(BB) === JB.h && (0, JB.$)(QB.i[BB].name)
    }
    var EB = zB(9304),
      iB = zB(9329);
    const qB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function fB(BB) {
      var jB, zB;
      const nB = null === (jB = QB.i[BB]) || void 0 === jB ? void 0 : jB.meta;
      return (null === nB || void 0 === nB ? void 0 : nB.rootName) !== iB.q ? null : {
        rot: null !== (zB = nB.rot) && void 0 !== zB ? zB : 1,
        half: (0, iB.h)(nB.rootName, nB.metaStr)
      }
    }

    function oB(BB, jB, zB, QB) {
      return fB(BB(jB, zB, QB))
    }

    function HB(BB, jB, zB, QB, nB) {
      let {
        rot: dB,
        half: IB
      } = nB;
      const [NB, uB] = (0, iB.n)(dB, IB), UB = oB(BB, jB + NB, zB, QB + uB);
      return null !== UB && UB.rot === dB && UB.half === iB.r[IB]
    }
    var DB = zB(38513);
    const FB = [new class {
      constructor() {
        this.reshapeOffsets = sB
      }
      handles(BB) {
        var jB;
        return "Stairs" === (null === (jB = QB.i[BB]) || void 0 === jB ? void 0 : jB.model)
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, jB, zB, nB, dB) {
        const IB = this.stairsOf(dB),
          NB = this.cornerAt(BB, jB, zB, nB, IB),
          UB = IB.half === uB.d.top ? "top" : "bot";
        return (0, QB.k)(`${QB.i[dB].meta.rootName}|meta|rot${IB.rot}|${UB}${null===NB?"":`|${NB}`}`)
      }
      stairsOf(BB) {
        const {
          rot: jB,
          halfblockPlacement: zB
        } = QB.i[BB].meta;
        return {
          rot: jB,
          half: zB
        }
      }
      stairsAt(BB, jB, zB, QB) {
        const nB = BB(jB, zB, QB);
        return this.handles(nB) ? this.stairsOf(nB) : null
      }
      cornerAt(BB, jB, zB, QB, nB) {
        let {
          rot: dB,
          half: IB
        } = nB;
        const NB = UB[dB],
          uB = nB => {
            let [NB, uB] = nB;
            const UB = this.stairsAt(BB, jB + NB, zB, QB + uB);
            return null !== UB && UB.rot === dB && UB.half === IB
          },
          sB = this.stairsAt(BB, jB + NB[0], zB, QB + NB[1]);
        if (null !== sB && sB.half === IB) {
          const BB = UB[sB.rot];
          if (rB(NB, BB) && !uB([-BB[0], -BB[1]])) return pB(BB, aB(NB)) ? "outerLeft" : "outerRight"
        }
        const JB = this.stairsAt(BB, jB - NB[0], zB, QB - NB[1]);
        if (null !== JB && JB.half === IB) {
          const BB = UB[JB.rot];
          if (rB(NB, BB) && !uB(BB)) return pB(BB, aB(NB)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = dB, this.rootIds = new Set(nB.g.map((BB => (0, QB.k)(BB))))
      }
      handles(BB) {
        var jB;
        const zB = null === (jB = QB.i[BB]) || void 0 === jB ? void 0 : jB.meta;
        return void 0 !== zB && this.rootIds.has(zB.rootId)
      }
      affects(BB) {
        return this.handles(BB)
      }
      placedBy(BB) {
        return QB.i[BB].meta.rootName === nB.o ? null : nB.o
      }
      shape(BB, jB, zB, dB, IB) {
        const {
          rootId: NB,
          rootName: uB,
          rot: UB
        } = QB.i[IB].meta;
        let aB = 0;
        return nB.y[UB].forEach(((nB, IB) => {
          var uB;
          let [pB, rB, sB] = nB;
          const JB = null === (uB = QB.i[BB(jB + pB, zB + rB, dB + sB)]) || void 0 === uB ? void 0 : uB.meta;
          (null === JB || void 0 === JB ? void 0 : JB.rootId) === NB && JB.rot === UB && (aB |= 1 << IB)
        })), (0, QB.k)((0, nB.d)(uB, UB, aB))
      }
    }, ...IB.e.map((BB => new NB.b(BB))), new class {
      constructor() {
        this.reshapeOffsets = tB
      }
      handles(BB) {
        const jB = SB(BB);
        return GB.has(jB) || jB === JB.h
      }
      affects(BB) {
        const jB = SB(BB);
        return LB.has(jB) || gB.has(jB) || jB === yB || jB === JB.h || void 0 !== JB.b[jB]
      }
      shape(BB, jB, zB, nB, dB, IB) {
        const {
          rootName: NB,
          rot: uB
        } = QB.i[dB].meta;
        return NB === JB.h ? IB ? dB : function(BB, jB, zB, nB, dB) {
          const [IB, NB] = JB.d[dB - 1];
          for (let uB = 1; uB <= JB.N; uB++) {
            const [UB, aB] = [jB - IB * uB, nB - NB * uB], pB = BB(UB, zB, aB);
            if (SB(pB) === JB.h && QB.i[pB].meta.rot === dB && mB(jB, zB, nB, UB, aB)) return (0, QB.k)((0, JB.ib)(dB, !MB(pB)))
          }
          return (0, QB.k)((0, JB.ib)(dB, !1))
        }(BB, jB, zB, nB, uB) : (0, QB.k)((0, JB.S)(NB, uB, function(BB, jB, zB, nB, dB) {
          const [IB, NB] = JB.d[dB - 1], uB = (dB, IB) => function(BB, jB, zB) {
            var nB;
            const dB = null === (nB = QB.i[BB]) || void 0 === nB ? void 0 : nB.meta;
            if (!dB) return !1;
            const IB = dB.rootName,
              NB = LB.has(IB) || MB(BB);
            if (!NB && !gB.has(IB) && IB !== yB) return !1;
            const [uB, UB] = JB.d[dB.rot - 1];
            if (NB && uB === -jB && UB === -zB) return !0;
            if (gB.has(IB)) return uB === jB && UB === zB;
            const aB = QB.i[BB].name;
            return (IB === yB ? (0, JB.fb)(aB, uB, UB) : IB === kB ? [(0, JB.V)(aB, uB, UB)] : []).some((BB => {
              let [QB, nB] = BB;
              return QB === -jB && nB === -zB
            }))
          }(BB(jB + dB, zB, nB + IB), dB, IB), UB = BB(jB - IB, zB, nB - NB), aB = SB(UB) === yB && QB.i[UB].meta.rot === dB, pB = 1 === JB.b[SB(BB(jB, zB - 1, nB))] || -1 === JB.b[SB(BB(jB, zB + 1, nB))];
          if (pB || aB || uB(-IB, -NB)) return null;
          const rB = uB(-NB, IB),
            sB = uB(NB, -IB);
          if (rB === sB) return null;
          return rB ? "turnLeft" : "turnRight"
        }(BB, jB, zB, nB, uB)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = qB, this.rootId = (0, QB.k)(iB.q)
      }
      handles(BB) {
        var jB;
        return (null === (jB = QB.i[BB]) || void 0 === jB ? void 0 : jB.meta.rootId) === this.rootId
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, jB, zB, nB, dB, IB) {
        const NB = fB(dB);
        return (0, QB.k)((uB = NB.rot, null !== (UB = IB ? this.reshapedHalf(BB, jB, zB, nB, NB) : this.placedHalf(BB, jB, zB, nB, NB.rot)) ? (0, iB.d)(iB.q, uB, UB) : 1 === uB ? iB.q : `${iB.q}|meta|rot${uB}`));
        var uB, UB
      }
      placedHalf(BB, jB, zB, QB, nB) {
        const [dB, IB] = EB.e[nB];
        for (const [NB, uB] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const UB = jB + uB * dB,
            aB = QB + uB * IB,
            pB = oB(BB, UB, zB, aB);
          if (null !== pB && pB.rot === nB && (null === pB.half || !HB(BB, UB, zB, aB, pB))) return NB
        }
        return null
      }
      reshapedHalf(BB, jB, zB, QB, nB) {
        if (null !== nB.half && HB(BB, jB, zB, QB, nB)) return nB.half;
        for (const dB of ["right", "left"]) {
          const [IB, NB] = (0, iB.n)(nB.rot, dB), uB = oB(BB, jB + IB, zB, QB + NB);
          if (null !== uB && uB.rot === nB.rot && uB.half === iB.r[dB]) return dB
        }
        return null
      }
    }, new DB.e];

    function YB(BB, jB, zB, QB, nB) {
      let dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const IB of FB)
        if (IB.handles(nB)) return IB.shape(BB, jB, zB, QB, nB, dB);
      return nB
    }

    function VB(BB) {
      for (const QB of FB) {
        var jB, zB;
        if (QB.handles(BB)) return null !== (jB = null === (zB = QB.placedBy) || void 0 === zB ? void 0 : zB.call(QB, BB)) && void 0 !== jB ? jB : null
      }
      return null
    }
  },
  38513: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => iB,
      g: () => gB,
      j: () => LB
    });
    var QB = zB(9266),
      nB = zB(9283),
      dB = zB(9354),
      IB = zB(38517),
      NB = zB(9345);
    const uB = (0, IB.Q)("pipe"),
      UB = (0, IB.Q)("tank"),
      aB = (0, IB.Q)("port"),
      pB = "Reactor Port";

    function rB(BB, jB, zB) {
      const QB = new Set([dB.f, dB.d, pB, ...jB, ...zB, ...BB ? [IB.k] : []]);
      return {
        makers: new Set(jB),
        roots: QB
      }
    }
    const sB = {
        water: rB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", IB.b]),
        cryo: rB(!1, [IB.b], [])
      },
      JB = new Set([...sB.water.roots, ...sB.cryo.roots]),
      mB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      yB = nB.e.map((BB => mB[BB])),
      kB = yB.map((BB => {
        let [jB, zB, QB] = BB;
        return IB.x.findIndex((BB => {
          let [nB, dB, IB] = BB;
          return nB === jB && dB === zB && IB === QB
        }))
      }));

    function GB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const zB = QB.i[BB],
        nB = null === zB || void 0 === zB ? void 0 : zB.meta.rootName,
        rB = sB[jB];
      if (!nB || !rB.roots.has(nB)) return null;
      if ((0, dB.j)(nB)) return (0, IB.M)(zB.name) === jB ? uB : null;
      if (nB === IB.k) return UB;
      if (nB === pB) return zB.name.endsWith("|Water") ? aB : null;
      const [JB, mB] = NB.d[(zB.meta.rot || 1) - 1];
      return (0, IB.Q)(rB.makers.has(nB) ? "maker" : "user", [-JB, 0, -mB])
    }

    function LB(BB, jB, zB, nB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: NB
      } = sB[dB];
      return yB.some(((UB, aB) => {
        var pB, rB;
        let [sB, JB, mB] = UB;
        const yB = BB(jB + sB, zB + JB, nB + mB),
          LB = GB(yB, dB);
        return null !== LB && NB.has(null !== (pB = null === (rB = QB.i[yB]) || void 0 === rB ? void 0 : rB.meta.rootName) && void 0 !== pB ? pB : "") && !(0, IB.T)(uB, LB, kB[aB])
      }))
    }

    function gB(BB) {
      const jB = QB.i[BB];
      return jB ? (0, IB.M)(jB.name) : null
    }
    let tB = null;

    function SB(BB) {
      if (!tB) {
        tB = new Map;
        for (const BB of ["water", "cryo"])
          for (let jB = 0; jB < 64; jB++)
            for (const zB of [!1, !0]) tB.set((0, dB.m)(BB, jB, zB), {
              Ss: BB,
              mask: jB,
              full: zB
            })
      }
      return tB.get(BB)
    }
    const MB = new Map(Array.from({
      length: dB.g + 1
    }, ((BB, jB) => [(0, dB.p)(jB), jB])));

    function EB(BB, jB, zB, nB, dB, IB) {
      return yB.some(((NB, uB) => {
        var UB, aB, pB;
        let [rB, sB, JB] = NB;
        if (0 === (IB >> uB & 1)) return !1;
        const mB = null !== (UB = null === (aB = QB.i[BB(jB + rB, zB + sB, nB + JB)]) || void 0 === aB ? void 0 : aB.name) && void 0 !== UB ? UB : "",
          yB = SB(mB);
        return yB ? yB.Ss === dB && yB.full : (null !== (pB = function(BB) {
          var jB;
          return null !== (jB = MB.get(BB)) && void 0 !== jB ? jB : null
        }(mB)) && void 0 !== pB ? pB : 0) > 0
      }))
    }
    class iB {
      constructor() {
        this.reshapeOffsets = yB
      }
      handles(BB) {
        return null !== gB(BB)
      }
      affects(BB) {
        var jB, zB;
        return JB.has(null !== (jB = null === (zB = QB.i[BB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== jB ? jB : "")
      }
      placedBy(BB) {
        var jB;
        return (null === (jB = QB.i[BB]) || void 0 === jB ? void 0 : jB.meta.rootName) === dB.d ? dB.f : null
      }
      shape(BB, jB, zB, nB, NB, UB) {
        var aB, pB, rB;
        const sB = null !== (aB = null === (pB = QB.i[NB]) || void 0 === pB ? void 0 : pB.name) && void 0 !== aB ? aB : "",
          JB = UB || sB !== dB.f ? null !== (rB = (0, IB.M)(sB)) && void 0 !== rB ? rB : "water" : function(BB, jB, zB, QB) {
            return yB.some(((nB, dB) => {
              let [NB, UB, aB] = nB;
              const pB = GB(BB(jB + NB, zB + UB, QB + aB), "cryo");
              return null !== pB && "port" !== pB.kind && (0, IB.T)(uB, pB, kB[dB])
            })) ? "cryo" : "water"
          }(BB, jB, zB, nB),
          mB = function(BB, jB, zB, QB) {
            let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              dB = 0;
            return yB.forEach(((NB, UB) => {
              let [aB, pB, rB] = NB;
              const sB = GB(BB(jB + aB, zB + pB, QB + rB), nB);
              sB && (0, IB.T)(uB, sB, kB[UB]) && (dB |= 1 << UB)
            })), dB
          }(BB, jB, zB, nB, JB),
          LB = UB ? function(BB) {
            var jB;
            return !0 === (null === (jB = SB(BB)) || void 0 === jB ? void 0 : jB.full)
          }(sB) : EB(BB, jB, zB, nB, JB, mB);
        return (0, QB.k)((0, dB.m)(JB, mB, LB))
      }
    }
  },
  38264: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      f: () => dB
    });
    const QB = ["Chest", "Loot Chest", "Moonstone Chest"],
      nB = [{
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

    function dB(BB) {
      return nB.find((jB => jB.exactMatch ? BB === jB.name : BB.includes(jB.name)))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);