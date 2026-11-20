export const id = 234;
export const ids = [234];
export const modules = {
  37657: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      c: () => kb,
      e: () => Ub,
      g: () => Wb,
      i: () => Tb,
      j: () => ab
    });
    const kb = 1.001,
      Wb = .501,
      ab = .025,
      Tb = .75,
      Ub = .08,
      Ib = 4;

    function Hb() {
      const bb = Wb,
        cb = ab,
        sb = bb - cb / 2,
        kb = (2 * bb - 2 * cb) / (2 * Ib - 1),
        Tb = [];
      for (const Wb of [-sb, sb])
        for (const ab of [-sb, sb])
          for (let sb = 0; sb < Ib; sb++) {
            const Ub = -bb + cb + kb * (2 * sb + .5);
            Tb.push([kb, cb, cb, Ub, Wb, ab]), Tb.push([cb, kb, cb, Wb, Ub, ab]), Tb.push([cb, cb, kb, Wb, ab, Ub])
          }
      for (const Wb of [-sb, sb])
        for (const bb of [-sb, sb])
          for (const kb of [-sb, sb]) Tb.push([cb, cb, cb, Wb, bb, kb]);
      return Tb
    }
  },
  38029: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => ub,
      D: () => hb,
      G: () => Lb,
      J: () => Vb,
      K: () => Xb,
      M: () => lb,
      N: () => eb,
      P: () => Wb,
      e: () => fb,
      h: () => Ib,
      j: () => Nb,
      k: () => Hb,
      l: () => Ub,
      o: () => Tb,
      r: () => ab,
      u: () => Yb,
      y: () => nb
    });
    var kb = sb(9096);

    function Wb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    const ab = 2e3,
      Tb = .005,
      Ub = .001,
      Ib = 2,
      Hb = "Fluid Tank",
      fb = "Coolant Mixer",
      Mb = 144;

    function Xb(bb) {
      const cb = bb.split("|")[0];
      return (0, kb.k)(cb) ? cb === kb.e ? "cryo" : "water" : null
    }
    const nb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      mb = 63;

    function lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const sb = cb ? function(bb, cb, sb) {
        const kb = nb.findIndex((kb => {
          let [Wb, ab, Tb] = kb;
          return Wb === bb && ab === cb && Tb === sb
        }));
        return kb < 0 ? 0 : 1 << kb
      }(cb[0], cb[1], cb[2]) : 0;
      return "maker" === bb ? {
        kind: bb,
        faces: sb
      } : "user" === bb ? {
        kind: bb,
        faces: mb & ~sb
      } : {
        kind: bb,
        faces: mb
      }
    }

    function Qb(bb) {
      return "pipe" === bb || "tank" === bb || "maker" === bb
    }

    function eb(bb, cb, sb) {
      return 0 !== (bb.faces & 1 << sb) && 0 !== (cb.faces & 1 << (1 ^ sb)) && (Qb(bb.kind) || Qb(cb.kind))
    }
    const Cb = (bb, cb, sb, kb) => ({
        input: bb,
        inputAmount: kb,
        output: cb,
        outputAmount: sb
      }),
      Nb = {
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
          recipes: [Cb("Uranium Grit", "Uranium Pellet", 1, 12), Cb("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Cb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Mb,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Vb(bb, cb) {
      return 1e3 * (null !== cb && void 0 !== cb ? cb : 0) / bb.opMs
    }

    function Lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const sb = Vb(Nb["Coolant Mixer"], Mb) * cb;
      return bb <= 0 ? 0 : Math.ceil(bb / sb - 1e-9)
    }
    const ub = "baf2Water",
      Yb = "baf2waterclose",
      hb = "baf2wateropen"
  },
  38020: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Eb,
      e: () => ib
    });
    var kb = sb(9017),
      Wb = sb(9057);
    const ab = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Tb = sb(9067),
      Ub = sb(37832),
      Ib = sb(9064);
    const Hb = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function fb(bb) {
      let [cb, sb] = bb;
      return [-sb, cb]
    }

    function Mb(bb, cb) {
      return bb[0] === cb[0] && bb[1] === cb[1]
    }

    function Xb(bb, cb) {
      return bb[0] * cb[0] + bb[1] * cb[1] === 0
    }
    const nb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var mb = sb(9091);

    function lb(bb, cb, sb, kb, Wb) {
      return cb < mb.p || cb >= mb.p + mb.s || Math.floor(bb / mb.v) === Math.floor(kb / mb.v) && Math.floor(sb / mb.v) === Math.floor(Wb / mb.v)
    }
    const Qb = "Splitter",
      eb = "Sorting Gate",
      Cb = new Set(mb.E),
      Nb = new Set([...mb.E, "Belt Loader", "Fast Loader", eb]),
      Vb = new Set(mb.t),
      Lb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function ub(bb) {
      var cb, sb;
      return null !== (cb = null === (sb = kb.g[bb]) || void 0 === sb ? void 0 : sb.meta.rootName) && void 0 !== cb ? cb : ""
    }

    function Yb(bb) {
      return ub(bb) === mb.h && (0, mb.N)(kb.g[bb].name)
    }
    var hb = sb(9059),
      Jb = sb(9078);
    const gb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Bb(bb) {
      var cb, sb;
      const Wb = null === (cb = kb.g[bb]) || void 0 === cb ? void 0 : cb.meta;
      return (null === Wb || void 0 === Wb ? void 0 : Wb.rootName) !== Jb.q ? null : {
        rot: null !== (sb = Wb.rot) && void 0 !== sb ? sb : 1,
        half: (0, Jb.i)(Wb.rootName, Wb.metaStr)
      }
    }

    function tb(bb, cb, sb, kb) {
      return Bb(bb(cb, sb, kb))
    }

    function yb(bb, cb, sb, kb, Wb) {
      let {
        rot: ab,
        half: Tb
      } = Wb;
      const [Ub, Ib] = (0, Jb.n)(ab, Tb), Hb = tb(bb, cb + Ub, sb, kb + Ib);
      return null !== Hb && Hb.rot === ab && Hb.half === Jb.r[Tb]
    }
    var Pb = sb(38027);
    const Db = [new class {
      constructor() {
        this.reshapeOffsets = nb
      }
      handles(bb) {
        var cb;
        return "Stairs" === (null === (cb = kb.g[bb]) || void 0 === cb ? void 0 : cb.model)
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, cb, sb, Wb, ab) {
        const Tb = this.stairsOf(ab),
          Ub = this.cornerAt(bb, cb, sb, Wb, Tb),
          Hb = Tb.half === Ib.e.top ? "top" : "bot";
        return (0, kb.j)(`${kb.g[ab].meta.rootName}|meta|rot${Tb.rot}|${Hb}${null===Ub?"":`|${Ub}`}`)
      }
      stairsOf(bb) {
        const {
          rot: cb,
          halfblockPlacement: sb
        } = kb.g[bb].meta;
        return {
          rot: cb,
          half: sb
        }
      }
      stairsAt(bb, cb, sb, kb) {
        const Wb = bb(cb, sb, kb);
        return this.handles(Wb) ? this.stairsOf(Wb) : null
      }
      cornerAt(bb, cb, sb, kb, Wb) {
        let {
          rot: ab,
          half: Tb
        } = Wb;
        const Ub = Hb[ab],
          Ib = Wb => {
            let [Ub, Ib] = Wb;
            const Hb = this.stairsAt(bb, cb + Ub, sb, kb + Ib);
            return null !== Hb && Hb.rot === ab && Hb.half === Tb
          },
          nb = this.stairsAt(bb, cb + Ub[0], sb, kb + Ub[1]);
        if (null !== nb && nb.half === Tb) {
          const bb = Hb[nb.rot];
          if (Xb(Ub, bb) && !Ib([-bb[0], -bb[1]])) return Mb(bb, fb(Ub)) ? "outerLeft" : "outerRight"
        }
        const mb = this.stairsAt(bb, cb - Ub[0], sb, kb - Ub[1]);
        if (null !== mb && mb.half === Tb) {
          const bb = Hb[mb.rot];
          if (Xb(Ub, bb) && !Ib(bb)) return Mb(bb, fb(Ub)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = ab, this.rootIds = new Set(Wb.k.map((bb => (0, kb.j)(bb))))
      }
      handles(bb) {
        var cb;
        const sb = null === (cb = kb.g[bb]) || void 0 === cb ? void 0 : cb.meta;
        return void 0 !== sb && this.rootIds.has(sb.rootId)
      }
      affects(bb) {
        return this.handles(bb)
      }
      placedBy(bb) {
        return kb.g[bb].meta.rootName === Wb.t ? null : Wb.t
      }
      shape(bb, cb, sb, ab, Tb) {
        const {
          rootId: Ub,
          rootName: Ib,
          rot: Hb
        } = kb.g[Tb].meta;
        let fb = 0;
        return Wb.z[Hb].forEach(((Wb, Tb) => {
          var Ib;
          let [Mb, Xb, nb] = Wb;
          const mb = null === (Ib = kb.g[bb(cb + Mb, sb + Xb, ab + nb)]) || void 0 === Ib ? void 0 : Ib.meta;
          (null === mb || void 0 === mb ? void 0 : mb.rootId) === Ub && mb.rot === Hb && (fb |= 1 << Tb)
        })), (0, kb.j)((0, Wb.i)(Ib, Hb, fb))
      }
    }, ...Tb.c.map((bb => new Ub.e(bb))), new class {
      constructor() {
        this.reshapeOffsets = Lb
      }
      handles(bb) {
        const cb = ub(bb);
        return Cb.has(cb) || cb === mb.h
      }
      affects(bb) {
        const cb = ub(bb);
        return Nb.has(cb) || Vb.has(cb) || cb === Qb || cb === mb.h || void 0 !== mb.d[cb]
      }
      shape(bb, cb, sb, Wb, ab, Tb) {
        const {
          rootName: Ub,
          rot: Ib
        } = kb.g[ab].meta;
        return Ub === mb.h ? Tb ? ab : function(bb, cb, sb, Wb, ab) {
          const [Tb, Ub] = mb.f[ab - 1];
          for (let Ib = 1; Ib <= mb.C; Ib++) {
            const [Hb, fb] = [cb - Tb * Ib, Wb - Ub * Ib], Mb = bb(Hb, sb, fb);
            if (ub(Mb) === mb.h && kb.g[Mb].meta.rot === ab && lb(cb, sb, Wb, Hb, fb)) return (0, kb.j)((0, mb.T)(ab, !Yb(Mb)))
          }
          return (0, kb.j)((0, mb.T)(ab, !1))
        }(bb, cb, sb, Wb, Ib) : (0, kb.j)((0, mb.H)(Ub, Ib, function(bb, cb, sb, Wb, ab) {
          const [Tb, Ub] = mb.f[ab - 1], Ib = (ab, Ib) => function(bb, cb, sb, Wb, ab) {
            var Tb;
            const Ub = null === (Tb = kb.g[bb]) || void 0 === Tb ? void 0 : Tb.meta;
            if (!Ub) return !1;
            const Ib = Ub.rootName,
              Hb = Nb.has(Ib) || Yb(bb);
            if (!Hb && !Vb.has(Ib) && Ib !== Qb) return !1;
            const [fb, Mb] = mb.f[Ub.rot - 1];
            return Hb ? fb === -cb && Mb === -sb : Vb.has(Ib) ? fb === cb && Mb === sb : (0, mb.S)(kb.g[bb].name, fb, Mb).some((bb => {
              let [kb, Wb] = bb;
              return kb === -cb && Wb === -sb
            })) && !(Wb === cb && ab === sb)
          }(bb(cb + ab, sb, Wb + Ib), ab, Ib, Tb, Ub), Hb = bb(cb - Tb, sb, Wb - Ub), fb = ub(Hb) === Qb && kb.g[Hb].meta.rot === ab, Mb = 1 === mb.d[ub(bb(cb, sb - 1, Wb))] || -1 === mb.d[ub(bb(cb, sb + 1, Wb))];
          if (Mb || fb || function(bb, cb, sb) {
              if (ub(bb) !== eb) return !1;
              const [Wb, ab] = mb.f[kb.g[bb].meta.rot - 1], [Tb, Ub] = (0, mb.K)(kb.g[bb].name, Wb, ab);
              return cb === Tb && sb === Ub
            }(Hb, Tb, Ub) || Ib(-Tb, -Ub)) return null;
          const Xb = Ib(-Ub, Tb),
            nb = Ib(Ub, -Tb);
          if (Xb === nb) return null;
          return Xb ? "turnLeft" : "turnRight"
        }(bb, cb, sb, Wb, Ib)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = gb, this.rootId = (0, kb.j)(Jb.q)
      }
      handles(bb) {
        var cb;
        return (null === (cb = kb.g[bb]) || void 0 === cb ? void 0 : cb.meta.rootId) === this.rootId
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, cb, sb, Wb, ab, Tb) {
        const Ub = Bb(ab);
        return (0, kb.j)((Ib = Ub.rot, null !== (Hb = Tb ? this.reshapedHalf(bb, cb, sb, Wb, Ub) : this.placedHalf(bb, cb, sb, Wb, Ub.rot)) ? (0, Jb.e)(Jb.q, Ib, Hb) : 1 === Ib ? Jb.q : `${Jb.q}|meta|rot${Ib}`));
        var Ib, Hb
      }
      placedHalf(bb, cb, sb, kb, Wb) {
        const [ab, Tb] = hb.d[Wb];
        for (const [Ub, Ib] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Hb = cb + Ib * ab,
            fb = kb + Ib * Tb,
            Mb = tb(bb, Hb, sb, fb);
          if (null !== Mb && Mb.rot === Wb && (null === Mb.half || !yb(bb, Hb, sb, fb, Mb))) return Ub
        }
        return null
      }
      reshapedHalf(bb, cb, sb, kb, Wb) {
        if (null !== Wb.half && yb(bb, cb, sb, kb, Wb)) return Wb.half;
        for (const ab of ["right", "left"]) {
          const [Tb, Ub] = (0, Jb.n)(Wb.rot, ab), Ib = tb(bb, cb + Tb, sb, kb + Ub);
          if (null !== Ib && Ib.rot === Wb.rot && Ib.half === Jb.r[ab]) return ab
        }
        return null
      }
    }, new Pb.e];

    function Eb(bb, cb, sb, kb, Wb) {
      let ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Tb of Db)
        if (Tb.handles(Wb)) return Tb.shape(bb, cb, sb, kb, Wb, ab);
      return Wb
    }

    function ib(bb) {
      for (const kb of Db) {
        var cb, sb;
        if (kb.handles(bb)) return null !== (cb = null === (sb = kb.placedBy) || void 0 === sb ? void 0 : sb.call(kb, bb)) && void 0 !== cb ? cb : null
      }
      return null
    }
  },
  38027: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Jb,
      i: () => Vb,
      k: () => Nb
    });
    var kb = sb(9017),
      Wb = sb(9044),
      ab = sb(9096),
      Tb = sb(38029),
      Ub = sb(9091);
    const Ib = (0, Tb.M)("pipe"),
      Hb = (0, Tb.M)("tank"),
      fb = (0, Tb.M)("port"),
      Mb = "Reactor Port";

    function Xb(bb, cb, sb) {
      const kb = new Set([ab.f, ab.e, Mb, ...cb, ...sb, ...bb ? [Tb.k] : []]);
      return {
        makers: new Set(cb),
        roots: kb
      }
    }
    const nb = {
        water: Xb(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Tb.e]),
        cryo: Xb(!1, [Tb.e], [])
      },
      mb = new Set([...nb.water.roots, ...nb.cryo.roots]),
      lb = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Qb = Wb.c.map((bb => lb[bb])),
      eb = Qb.map((bb => {
        let [cb, sb, kb] = bb;
        return Tb.y.findIndex((bb => {
          let [Wb, ab, Tb] = bb;
          return Wb === cb && ab === sb && Tb === kb
        }))
      }));

    function Cb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const sb = kb.g[bb],
        Wb = null === sb || void 0 === sb ? void 0 : sb.meta.rootName,
        Xb = nb[cb];
      if (!Wb || !Xb.roots.has(Wb)) return null;
      if ((0, ab.k)(Wb)) return (0, Tb.K)(sb.name) === cb ? Ib : null;
      if (Wb === Tb.k) return Hb;
      if (Wb === Mb) return sb.name.endsWith("|Water") ? fb : null;
      const [mb, lb] = Ub.f[(sb.meta.rot || 1) - 1];
      return (0, Tb.M)(Xb.makers.has(Wb) ? "maker" : "user", [-mb, 0, -lb])
    }

    function Nb(bb, cb, sb, Wb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ub
      } = nb[ab];
      return Qb.some(((Hb, fb) => {
        var Mb, Xb;
        let [nb, mb, lb] = Hb;
        const Qb = bb(cb + nb, sb + mb, Wb + lb),
          Nb = Cb(Qb, ab);
        return null !== Nb && Ub.has(null !== (Mb = null === (Xb = kb.g[Qb]) || void 0 === Xb ? void 0 : Xb.meta.rootName) && void 0 !== Mb ? Mb : "") && !(0, Tb.N)(Ib, Nb, eb[fb])
      }))
    }

    function Vb(bb) {
      const cb = kb.g[bb];
      return cb ? (0, Tb.K)(cb.name) : null
    }
    let Lb = null;

    function ub(bb) {
      if (!Lb) {
        Lb = new Map;
        for (const bb of ["water", "cryo"])
          for (let cb = 0; cb < 64; cb++)
            for (const sb of [!1, !0]) Lb.set((0, ab.m)(bb, cb, sb), {
              Nn: bb,
              mask: cb,
              full: sb
            })
      }
      return Lb.get(bb)
    }
    const Yb = new Map(Array.from({
      length: ab.j + 1
    }, ((bb, cb) => [(0, ab.n)(cb), cb])));

    function hb(bb, cb, sb, Wb, ab, Tb) {
      return Qb.some(((Ub, Ib) => {
        var Hb, fb, Mb;
        let [Xb, nb, mb] = Ub;
        if (0 === (Tb >> Ib & 1)) return !1;
        const lb = null !== (Hb = null === (fb = kb.g[bb(cb + Xb, sb + nb, Wb + mb)]) || void 0 === fb ? void 0 : fb.name) && void 0 !== Hb ? Hb : "",
          Qb = ub(lb);
        return Qb ? Qb.Nn === ab && Qb.full : (null !== (Mb = function(bb) {
          var cb;
          return null !== (cb = Yb.get(bb)) && void 0 !== cb ? cb : null
        }(lb)) && void 0 !== Mb ? Mb : 0) > 0
      }))
    }
    class Jb {
      constructor() {
        this.reshapeOffsets = Qb
      }
      handles(bb) {
        return null !== Vb(bb)
      }
      affects(bb) {
        var cb, sb;
        return mb.has(null !== (cb = null === (sb = kb.g[bb]) || void 0 === sb ? void 0 : sb.meta.rootName) && void 0 !== cb ? cb : "")
      }
      placedBy(bb) {
        var cb;
        return (null === (cb = kb.g[bb]) || void 0 === cb ? void 0 : cb.meta.rootName) === ab.e ? ab.f : null
      }
      shape(bb, cb, sb, Wb, Ub, Hb) {
        var fb, Mb, Xb;
        const nb = null !== (fb = null === (Mb = kb.g[Ub]) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== fb ? fb : "",
          mb = Hb || nb !== ab.f ? null !== (Xb = (0, Tb.K)(nb)) && void 0 !== Xb ? Xb : "water" : function(bb, cb, sb, kb) {
            return Qb.some(((Wb, ab) => {
              let [Ub, Hb, fb] = Wb;
              const Mb = Cb(bb(cb + Ub, sb + Hb, kb + fb), "cryo");
              return null !== Mb && "port" !== Mb.kind && (0, Tb.N)(Ib, Mb, eb[ab])
            })) ? "cryo" : "water"
          }(bb, cb, sb, Wb),
          lb = function(bb, cb, sb, kb) {
            let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              ab = 0;
            return Qb.forEach(((Ub, Hb) => {
              let [fb, Mb, Xb] = Ub;
              const nb = Cb(bb(cb + fb, sb + Mb, kb + Xb), Wb);
              nb && (0, Tb.N)(Ib, nb, eb[Hb]) && (ab |= 1 << Hb)
            })), ab
          }(bb, cb, sb, Wb, mb),
          Nb = Hb ? function(bb) {
            var cb;
            return !0 === (null === (cb = ub(bb)) || void 0 === cb ? void 0 : cb.full)
          }(nb) : hb(bb, cb, sb, Wb, mb, lb);
        return (0, kb.j)((0, ab.m)(mb, lb, Nb))
      }
    }
  },
  37780: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      f: () => ab
    });
    const kb = ["Chest", "Loot Chest", "Moonstone Chest"],
      Wb = [{
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

    function ab(bb) {
      return Wb.find((cb => cb.exactMatch ? bb === cb.name : bb.includes(cb.name)))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);