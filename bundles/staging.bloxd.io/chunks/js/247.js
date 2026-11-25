export const id = 247;
export const ids = [247];
export const modules = {
  38123: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      c: () => TB,
      e: () => vB,
      i: () => JB,
      k: () => GB,
      m: () => oB
    });
    const TB = 1.001,
      JB = .501,
      oB = .025,
      GB = .75,
      vB = .08,
      kB = 4;

    function cB() {
      const BB = JB,
        IB = oB,
        ZB = BB - IB / 2,
        TB = (2 * BB - 2 * IB) / (2 * kB - 1),
        GB = [];
      for (const JB of [-ZB, ZB])
        for (const oB of [-ZB, ZB])
          for (let ZB = 0; ZB < kB; ZB++) {
            const vB = -BB + IB + TB * (2 * ZB + .5);
            GB.push([TB, IB, IB, vB, JB, oB]), GB.push([IB, TB, IB, JB, vB, oB]), GB.push([IB, IB, TB, JB, oB, vB])
          }
      for (const JB of [-ZB, ZB])
        for (const BB of [-ZB, ZB])
          for (const TB of [-ZB, ZB]) GB.push([IB, IB, IB, JB, BB, TB]);
      return GB
    }
  },
  38468: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => FB,
      E: () => QB,
      H: () => wB,
      I: () => CB,
      K: () => dB,
      N: () => zB,
      R: () => gB,
      U: () => yB,
      W: () => JB,
      e: () => nB,
      f: () => kB,
      h: () => WB,
      j: () => cB,
      n: () => vB,
      q: () => GB,
      t: () => oB,
      x: () => sB
    });
    var TB = ZB(9380);

    function JB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const oB = 2e3,
      GB = .005,
      vB = .001,
      kB = 2,
      cB = "Fluid Tank",
      nB = "Coolant Mixer",
      hB = 144;

    function zB(BB) {
      const IB = BB.split("|")[0];
      return (0, TB.j)(IB) ? IB === TB.d ? "cryo" : "water" : null
    }
    const FB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      NB = 63;

    function gB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ZB = IB ? function(BB, IB, ZB) {
        const TB = FB.findIndex((TB => {
          let [JB, oB, GB] = TB;
          return JB === BB && oB === IB && GB === ZB
        }));
        return TB < 0 ? 0 : 1 << TB
      }(IB[0], IB[1], IB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: ZB
      } : "user" === BB ? {
        kind: BB,
        faces: NB & ~ZB
      } : {
        kind: BB,
        faces: NB
      }
    }

    function qB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function yB(BB, IB, ZB) {
      return 0 !== (BB.faces & 1 << ZB) && 0 !== (IB.faces & 1 << (1 ^ ZB)) && (qB(BB.kind) || qB(IB.kind))
    }
    const UB = (BB, IB, ZB, TB) => ({
        input: BB,
        inputAmount: TB,
        output: IB,
        outputAmount: ZB
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
          recipes: [UB("Uranium Grit", "Uranium Pellet", 1, 12), UB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [UB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: hB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function dB(BB, IB) {
      return 1e3 * (null !== IB && void 0 !== IB ? IB : 0) / BB.opMs
    }

    function CB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZB = dB(WB["Coolant Mixer"], hB) * IB;
      return BB <= 0 ? 0 : Math.ceil(BB / ZB - 1e-9)
    }
    const QB = "baf2Water",
      sB = "baf2waterclose",
      wB = "baf2wateropen"
  },
  38463: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => jB,
      f: () => PB
    });
    var TB = ZB(9296),
      JB = ZB(9328);
    const oB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var GB = ZB(9347),
      vB = ZB(38284),
      kB = ZB(9340);
    const cB = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function nB(BB) {
      let [IB, ZB] = BB;
      return [-ZB, IB]
    }

    function hB(BB, IB) {
      return BB[0] === IB[0] && BB[1] === IB[1]
    }

    function zB(BB, IB) {
      return BB[0] * IB[0] + BB[1] * IB[1] === 0
    }
    const FB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var NB = ZB(9375);

    function gB(BB, IB, ZB, TB, JB) {
      return IB < NB.o || IB >= NB.o + NB.s || Math.floor(BB / NB.x) === Math.floor(TB / NB.x) && Math.floor(ZB / NB.x) === Math.floor(JB / NB.x)
    }
    const qB = "Splitter",
      yB = "Sorting Gate",
      UB = new Set(NB.J),
      WB = new Set([...NB.J, "Belt Loader", "Fast Loader", yB]),
      dB = new Set(NB.t),
      CB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function QB(BB) {
      var IB, ZB;
      return null !== (IB = null === (ZB = TB.f[BB]) || void 0 === ZB ? void 0 : ZB.meta.rootName) && void 0 !== IB ? IB : ""
    }

    function sB(BB) {
      return QB(BB) === NB.g && (0, NB.W)(TB.f[BB].name)
    }
    var wB = ZB(9336),
      OB = ZB(9358);
    const YB = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function iB(BB) {
      var IB, ZB;
      const JB = null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta;
      return (null === JB || void 0 === JB ? void 0 : JB.rootName) !== OB.o ? null : {
        rot: null !== (ZB = JB.rot) && void 0 !== ZB ? ZB : 1,
        half: (0, OB.f)(JB.rootName, JB.metaStr)
      }
    }

    function pB(BB, IB, ZB, TB) {
      return iB(BB(IB, ZB, TB))
    }

    function aB(BB, IB, ZB, TB, JB) {
      let {
        rot: oB,
        half: GB
      } = JB;
      const [vB, kB] = (0, OB.n)(oB, GB), cB = pB(BB, IB + vB, ZB, TB + kB);
      return null !== cB && cB.rot === oB && cB.half === OB.q[GB]
    }
    var HB = ZB(38466);
    const MB = [new class {
      constructor() {
        this.reshapeOffsets = FB
      }
      handles(BB) {
        var IB;
        return "Stairs" === (null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.model)
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, IB, ZB, JB, oB) {
        const GB = this.stairsOf(oB),
          vB = this.cornerAt(BB, IB, ZB, JB, GB),
          cB = GB.half === kB.e.top ? "top" : "bot";
        return (0, TB.g)(`${TB.f[oB].meta.rootName}|meta|rot${GB.rot}|${cB}${null===vB?"":`|${vB}`}`)
      }
      stairsOf(BB) {
        const {
          rot: IB,
          halfblockPlacement: ZB
        } = TB.f[BB].meta;
        return {
          rot: IB,
          half: ZB
        }
      }
      stairsAt(BB, IB, ZB, TB) {
        const JB = BB(IB, ZB, TB);
        return this.handles(JB) ? this.stairsOf(JB) : null
      }
      cornerAt(BB, IB, ZB, TB, JB) {
        let {
          rot: oB,
          half: GB
        } = JB;
        const vB = cB[oB],
          kB = JB => {
            let [vB, kB] = JB;
            const cB = this.stairsAt(BB, IB + vB, ZB, TB + kB);
            return null !== cB && cB.rot === oB && cB.half === GB
          },
          FB = this.stairsAt(BB, IB + vB[0], ZB, TB + vB[1]);
        if (null !== FB && FB.half === GB) {
          const BB = cB[FB.rot];
          if (zB(vB, BB) && !kB([-BB[0], -BB[1]])) return hB(BB, nB(vB)) ? "outerLeft" : "outerRight"
        }
        const NB = this.stairsAt(BB, IB - vB[0], ZB, TB - vB[1]);
        if (null !== NB && NB.half === GB) {
          const BB = cB[NB.rot];
          if (zB(vB, BB) && !kB(BB)) return hB(BB, nB(vB)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = oB, this.rootIds = new Set(JB.i.map((BB => (0, TB.g)(BB))))
      }
      handles(BB) {
        var IB;
        const ZB = null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta;
        return void 0 !== ZB && this.rootIds.has(ZB.rootId)
      }
      affects(BB) {
        return this.handles(BB)
      }
      placedBy(BB) {
        return TB.f[BB].meta.rootName === JB.n ? null : JB.n
      }
      shape(BB, IB, ZB, oB, GB) {
        const {
          rootId: vB,
          rootName: kB,
          rot: cB
        } = TB.f[GB].meta;
        let nB = 0;
        return JB.r[cB].forEach(((JB, GB) => {
          var kB;
          let [hB, zB, FB] = JB;
          const NB = null === (kB = TB.f[BB(IB + hB, ZB + zB, oB + FB)]) || void 0 === kB ? void 0 : kB.meta;
          (null === NB || void 0 === NB ? void 0 : NB.rootId) === vB && NB.rot === cB && (nB |= 1 << GB)
        })), (0, TB.g)((0, JB.g)(kB, cB, nB))
      }
    }, ...GB.b.map((BB => new vB.d(BB))), new class {
      constructor() {
        this.reshapeOffsets = CB
      }
      handles(BB) {
        const IB = QB(BB);
        return UB.has(IB) || IB === NB.g
      }
      affects(BB) {
        const IB = QB(BB);
        return WB.has(IB) || dB.has(IB) || IB === qB || IB === NB.g || void 0 !== NB.e[IB]
      }
      shape(BB, IB, ZB, JB, oB, GB) {
        const {
          rootName: vB,
          rot: kB
        } = TB.f[oB].meta;
        return vB === NB.g ? GB ? oB : function(BB, IB, ZB, JB, oB) {
          const [GB, vB] = NB.f[oB - 1];
          for (let kB = 1; kB <= NB.F; kB++) {
            const [cB, nB] = [IB - GB * kB, JB - vB * kB], hB = BB(cB, ZB, nB);
            if (QB(hB) === NB.g && TB.f[hB].meta.rot === oB && gB(IB, ZB, JB, cB, nB)) return (0, TB.g)((0, NB.ab)(oB, !sB(hB)))
          }
          return (0, TB.g)((0, NB.ab)(oB, !1))
        }(BB, IB, ZB, JB, kB) : (0, TB.g)((0, NB.N)(vB, kB, function(BB, IB, ZB, JB, oB) {
          const [GB, vB] = NB.f[oB - 1], kB = (oB, GB) => function(BB, IB, ZB) {
            var JB;
            const oB = null === (JB = TB.f[BB]) || void 0 === JB ? void 0 : JB.meta;
            if (!oB) return !1;
            const GB = oB.rootName,
              vB = WB.has(GB) || sB(BB);
            if (!vB && !dB.has(GB) && GB !== qB) return !1;
            const [kB, cB] = NB.f[oB.rot - 1];
            if (vB && kB === -IB && cB === -ZB) return !0;
            if (dB.has(GB)) return kB === IB && cB === ZB;
            const nB = TB.f[BB].name;
            return (GB === qB ? (0, NB._)(nB, kB, cB) : GB === yB ? [(0, NB.R)(nB, kB, cB)] : []).some((BB => {
              let [TB, JB] = BB;
              return TB === -IB && JB === -ZB
            }))
          }(BB(IB + oB, ZB, JB + GB), oB, GB), cB = BB(IB - GB, ZB, JB - vB), nB = QB(cB) === qB && TB.f[cB].meta.rot === oB, hB = 1 === NB.e[QB(BB(IB, ZB - 1, JB))] || -1 === NB.e[QB(BB(IB, ZB + 1, JB))];
          if (hB || nB || kB(-GB, -vB)) return null;
          const zB = kB(-vB, GB),
            FB = kB(vB, -GB);
          if (zB === FB) return null;
          return zB ? "turnLeft" : "turnRight"
        }(BB, IB, ZB, JB, kB)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = YB, this.rootId = (0, TB.g)(OB.o)
      }
      handles(BB) {
        var IB;
        return (null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta.rootId) === this.rootId
      }
      affects(BB) {
        return this.handles(BB)
      }
      shape(BB, IB, ZB, JB, oB, GB) {
        const vB = iB(oB);
        return (0, TB.g)((kB = vB.rot, null !== (cB = GB ? this.reshapedHalf(BB, IB, ZB, JB, vB) : this.placedHalf(BB, IB, ZB, JB, vB.rot)) ? (0, OB.b)(OB.o, kB, cB) : 1 === kB ? OB.o : `${OB.o}|meta|rot${kB}`));
        var kB, cB
      }
      placedHalf(BB, IB, ZB, TB, JB) {
        const [oB, GB] = wB.c[JB];
        for (const [vB, kB] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const cB = IB + kB * oB,
            nB = TB + kB * GB,
            hB = pB(BB, cB, ZB, nB);
          if (null !== hB && hB.rot === JB && (null === hB.half || !aB(BB, cB, ZB, nB, hB))) return vB
        }
        return null
      }
      reshapedHalf(BB, IB, ZB, TB, JB) {
        if (null !== JB.half && aB(BB, IB, ZB, TB, JB)) return JB.half;
        for (const oB of ["right", "left"]) {
          const [GB, vB] = (0, OB.n)(JB.rot, oB), kB = pB(BB, IB + GB, ZB, TB + vB);
          if (null !== kB && kB.rot === JB.rot && kB.half === OB.q[oB]) return oB
        }
        return null
      }
    }, new HB.c];

    function jB(BB, IB, ZB, TB, JB) {
      let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const GB of MB)
        if (GB.handles(JB)) return GB.shape(BB, IB, ZB, TB, JB, oB);
      return JB
    }

    function PB(BB) {
      for (const TB of MB) {
        var IB, ZB;
        if (TB.handles(BB)) return null !== (IB = null === (ZB = TB.placedBy) || void 0 === ZB ? void 0 : ZB.call(TB, BB)) && void 0 !== IB ? IB : null
      }
      return null
    }
  },
  38466: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => OB,
      e: () => dB,
      f: () => WB
    });
    var TB = ZB(9296),
      JB = ZB(9316),
      oB = ZB(9380),
      GB = ZB(38468),
      vB = ZB(9375);
    const kB = (0, GB.R)("pipe"),
      cB = (0, GB.R)("tank"),
      nB = (0, GB.R)("port"),
      hB = "Reactor Port";

    function zB(BB, IB, ZB) {
      const TB = new Set([oB.f, oB.d, hB, ...IB, ...ZB, ...BB ? [GB.j] : []]);
      return {
        makers: new Set(IB),
        roots: TB
      }
    }
    const FB = {
        water: zB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", GB.e]),
        cryo: zB(!1, [GB.e], [])
      },
      NB = new Set([...FB.water.roots, ...FB.cryo.roots]),
      gB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      qB = JB.f.map((BB => gB[BB])),
      yB = qB.map((BB => {
        let [IB, ZB, TB] = BB;
        return GB.B.findIndex((BB => {
          let [JB, oB, GB] = BB;
          return JB === IB && oB === ZB && GB === TB
        }))
      }));

    function UB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ZB = TB.f[BB],
        JB = null === ZB || void 0 === ZB ? void 0 : ZB.meta.rootName,
        zB = FB[IB];
      if (!JB || !zB.roots.has(JB)) return null;
      if ((0, oB.j)(JB)) return (0, GB.N)(ZB.name) === IB ? kB : null;
      if (JB === GB.j) return cB;
      if (JB === hB) return ZB.name.endsWith("|Water") ? nB : null;
      const [NB, gB] = vB.f[(ZB.meta.rot || 1) - 1];
      return (0, GB.R)(zB.makers.has(JB) ? "maker" : "user", [-NB, 0, -gB])
    }

    function WB(BB, IB, ZB, JB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: vB
      } = FB[oB];
      return qB.some(((cB, nB) => {
        var hB, zB;
        let [FB, NB, gB] = cB;
        const qB = BB(IB + FB, ZB + NB, JB + gB),
          WB = UB(qB, oB);
        return null !== WB && vB.has(null !== (hB = null === (zB = TB.f[qB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== hB ? hB : "") && !(0, GB.U)(kB, WB, yB[nB])
      }))
    }

    function dB(BB) {
      const IB = TB.f[BB];
      return IB ? (0, GB.N)(IB.name) : null
    }
    let CB = null;

    function QB(BB) {
      if (!CB) {
        CB = new Map;
        for (const BB of ["water", "cryo"])
          for (let IB = 0; IB < 64; IB++)
            for (const ZB of [!1, !0]) CB.set((0, oB.n)(BB, IB, ZB), {
              gF: BB,
              mask: IB,
              full: ZB
            })
      }
      return CB.get(BB)
    }
    const sB = new Map(Array.from({
      length: oB.i + 1
    }, ((BB, IB) => [(0, oB.o)(IB), IB])));

    function wB(BB, IB, ZB, JB, oB, GB) {
      return qB.some(((vB, kB) => {
        var cB, nB, hB;
        let [zB, FB, NB] = vB;
        if (0 === (GB >> kB & 1)) return !1;
        const gB = null !== (cB = null === (nB = TB.f[BB(IB + zB, ZB + FB, JB + NB)]) || void 0 === nB ? void 0 : nB.name) && void 0 !== cB ? cB : "",
          qB = QB(gB);
        return qB ? qB.gF === oB && qB.full : (null !== (hB = function(BB) {
          var IB;
          return null !== (IB = sB.get(BB)) && void 0 !== IB ? IB : null
        }(gB)) && void 0 !== hB ? hB : 0) > 0
      }))
    }
    class OB {
      constructor() {
        this.reshapeOffsets = qB
      }
      handles(BB) {
        return null !== dB(BB)
      }
      affects(BB) {
        var IB, ZB;
        return NB.has(null !== (IB = null === (ZB = TB.f[BB]) || void 0 === ZB ? void 0 : ZB.meta.rootName) && void 0 !== IB ? IB : "")
      }
      placedBy(BB) {
        var IB;
        return (null === (IB = TB.f[BB]) || void 0 === IB ? void 0 : IB.meta.rootName) === oB.d ? oB.f : null
      }
      shape(BB, IB, ZB, JB, vB, cB) {
        var nB, hB, zB;
        const FB = null !== (nB = null === (hB = TB.f[vB]) || void 0 === hB ? void 0 : hB.name) && void 0 !== nB ? nB : "",
          NB = cB || FB !== oB.f ? null !== (zB = (0, GB.N)(FB)) && void 0 !== zB ? zB : "water" : function(BB, IB, ZB, TB) {
            return qB.some(((JB, oB) => {
              let [vB, cB, nB] = JB;
              const hB = UB(BB(IB + vB, ZB + cB, TB + nB), "cryo");
              return null !== hB && "port" !== hB.kind && (0, GB.U)(kB, hB, yB[oB])
            })) ? "cryo" : "water"
          }(BB, IB, ZB, JB),
          gB = function(BB, IB, ZB, TB) {
            let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              oB = 0;
            return qB.forEach(((vB, cB) => {
              let [nB, hB, zB] = vB;
              const FB = UB(BB(IB + nB, ZB + hB, TB + zB), JB);
              FB && (0, GB.U)(kB, FB, yB[cB]) && (oB |= 1 << cB)
            })), oB
          }(BB, IB, ZB, JB, NB),
          WB = cB ? function(BB) {
            var IB;
            return !0 === (null === (IB = QB(BB)) || void 0 === IB ? void 0 : IB.full)
          }(FB) : wB(BB, IB, ZB, JB, NB, gB);
        return (0, TB.g)((0, oB.n)(NB, gB, WB))
      }
    }
  },
  38249: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      g: () => oB
    });
    const TB = ["Chest", "Loot Chest", "Moonstone Chest"],
      JB = [{
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

    function oB(BB) {
      return JB.find((IB => IB.exactMatch ? BB === IB.name : BB.includes(IB.name)))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);