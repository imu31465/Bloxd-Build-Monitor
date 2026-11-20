export const id = 234;
export const ids = [234];
export const modules = {
  37394: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb,
      f: () => Ab,
      h: () => Yb,
      j: () => Mb,
      n: () => Eb,
      q: () => Tb
    });
    const Ab = 1.001,
      Mb = .501,
      Tb = .025,
      Eb = .75,
      Yb = .08,
      Bb = 4;

    function eb() {
      const bb = Mb,
        ab = Tb,
        Ub = bb - ab / 2,
        Ab = (2 * bb - 2 * ab) / (2 * Bb - 1),
        Eb = [];
      for (const Mb of [-Ub, Ub])
        for (const Tb of [-Ub, Ub])
          for (let Ub = 0; Ub < Bb; Ub++) {
            const Yb = -bb + ab + Ab * (2 * Ub + .5);
            Eb.push([Ab, ab, ab, Yb, Mb, Tb]), Eb.push([ab, Ab, ab, Mb, Yb, Tb]), Eb.push([ab, ab, Ab, Mb, Tb, Yb])
          }
      for (const Mb of [-Ub, Ub])
        for (const bb of [-Ub, Ub])
          for (const Ab of [-Ub, Ub]) Eb.push([ab, ab, ab, Mb, bb, Ab]);
      return Eb
    }
  },
  37760: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => Pb,
      C: () => Rb,
      D: () => yb,
      H: () => Mb,
      c: () => vb,
      d: () => Bb,
      e: () => Db,
      f: () => eb,
      h: () => Yb,
      k: () => Eb,
      l: () => Tb,
      p: () => fb,
      r: () => Xb,
      s: () => ib,
      u: () => mb,
      w: () => xb,
      y: () => zb
    });
    var Ab = Ub(9086);

    function Mb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    const Tb = 2e3,
      Eb = .005,
      Yb = .001,
      Bb = 2,
      eb = "Fluid Tank",
      vb = "Coolant Mixer",
      Lb = 144;

    function Pb(bb) {
      const ab = bb.split("|")[0];
      return (0, Ab.k)(ab) ? ab === Ab.c ? "cryo" : "water" : null
    }
    const Xb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      jb = 63;

    function Rb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Ub = ab ? function(bb, ab, Ub) {
        const Ab = Xb.findIndex((Ab => {
          let [Mb, Tb, Eb] = Ab;
          return Mb === bb && Tb === ab && Eb === Ub
        }));
        return Ab < 0 ? 0 : 1 << Ab
      }(ab[0], ab[1], ab[2]) : 0;
      return "maker" === bb ? {
        kind: bb,
        faces: Ub
      } : "user" === bb ? {
        kind: bb,
        faces: jb & ~Ub
      } : {
        kind: bb,
        faces: jb
      }
    }

    function kb(bb) {
      return "pipe" === bb || "tank" === bb || "maker" === bb
    }

    function yb(bb, ab, Ub) {
      return 0 !== (bb.faces & 1 << Ub) && 0 !== (ab.faces & 1 << (1 ^ Ub)) && (kb(bb.kind) || kb(ab.kind))
    }
    const Zb = (bb, ab, Ub, Ab) => ({
        input: bb,
        inputAmount: Ab,
        output: ab,
        outputAmount: Ub
      }),
      Db = {
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
          recipes: [Zb("Uranium Grit", "Uranium Pellet", 1, 12), Zb("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Zb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Lb,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function zb(bb, ab) {
      return 1e3 * (null !== ab && void 0 !== ab ? ab : 0) / bb.opMs
    }

    function xb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Ub = zb(Db["Coolant Mixer"], Lb) * ab;
      return bb <= 0 ? 0 : Math.ceil(bb / Ub - 1e-9)
    }
    const ib = "baf2Water",
      fb = "baf2waterclose",
      mb = "baf2wateropen"
  },
  37748: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => hb,
      h: () => Gb
    });
    var Ab = Ub(9007),
      Mb = Ub(9036);
    const Tb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Eb = Ub(9048),
      Yb = Ub(37556),
      Bb = Ub(9043);
    const eb = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function vb(bb) {
      let [ab, Ub] = bb;
      return [-Ub, ab]
    }

    function Lb(bb, ab) {
      return bb[0] === ab[0] && bb[1] === ab[1]
    }

    function Pb(bb, ab) {
      return bb[0] * ab[0] + bb[1] * ab[1] === 0
    }
    const Xb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var jb = Ub(9077);

    function Rb(bb, ab, Ub, Ab, Mb) {
      return ab < jb.q || ab >= jb.q + jb.r || Math.floor(bb / jb.y) === Math.floor(Ab / jb.y) && Math.floor(Ub / jb.y) === Math.floor(Mb / jb.y)
    }
    const kb = "Splitter",
      yb = "Sorting Gate",
      Zb = new Set(jb.O),
      Db = new Set([...jb.O, "Belt Loader", "Fast Loader", yb]),
      zb = new Set(jb.v),
      xb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function ib(bb) {
      var ab, Ub;
      return null !== (ab = null === (Ub = Ab.h[bb]) || void 0 === Ub ? void 0 : Ub.meta.rootName) && void 0 !== ab ? ab : ""
    }

    function fb(bb) {
      return ib(bb) === jb.k && (0, jb.Z)(Ab.h[bb].name)
    }
    var mb = Ub(9040),
      pb = Ub(9063);
    const Nb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Wb(bb) {
      var ab, Ub;
      const Mb = null === (ab = Ab.h[bb]) || void 0 === ab ? void 0 : ab.meta;
      return (null === Mb || void 0 === Mb ? void 0 : Mb.rootName) !== pb.r ? null : {
        rot: null !== (Ub = Mb.rot) && void 0 !== Ub ? Ub : 1,
        half: (0, pb.g)(Mb.rootName, Mb.metaStr)
      }
    }

    function Hb(bb, ab, Ub, Ab) {
      return Wb(bb(ab, Ub, Ab))
    }

    function Ib(bb, ab, Ub, Ab, Mb) {
      let {
        rot: Tb,
        half: Eb
      } = Mb;
      const [Yb, Bb] = (0, pb.n)(Tb, Eb), eb = Hb(bb, ab + Yb, Ub, Ab + Bb);
      return null !== eb && eb.rot === Tb && eb.half === pb.v[Eb]
    }
    var db = Ub(37757);
    const Fb = [new class {
      constructor() {
        this.reshapeOffsets = Xb
      }
      handles(bb) {
        var ab;
        return "Stairs" === (null === (ab = Ab.h[bb]) || void 0 === ab ? void 0 : ab.model)
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, ab, Ub, Mb, Tb) {
        const Eb = this.stairsOf(Tb),
          Yb = this.cornerAt(bb, ab, Ub, Mb, Eb),
          eb = Eb.half === Bb.e.top ? "top" : "bot";
        return (0, Ab.l)(`${Ab.h[Tb].meta.rootName}|meta|rot${Eb.rot}|${eb}${null===Yb?"":`|${Yb}`}`)
      }
      stairsOf(bb) {
        const {
          rot: ab,
          halfblockPlacement: Ub
        } = Ab.h[bb].meta;
        return {
          rot: ab,
          half: Ub
        }
      }
      stairsAt(bb, ab, Ub, Ab) {
        const Mb = bb(ab, Ub, Ab);
        return this.handles(Mb) ? this.stairsOf(Mb) : null
      }
      cornerAt(bb, ab, Ub, Ab, Mb) {
        let {
          rot: Tb,
          half: Eb
        } = Mb;
        const Yb = eb[Tb],
          Bb = Mb => {
            let [Yb, Bb] = Mb;
            const eb = this.stairsAt(bb, ab + Yb, Ub, Ab + Bb);
            return null !== eb && eb.rot === Tb && eb.half === Eb
          },
          Xb = this.stairsAt(bb, ab + Yb[0], Ub, Ab + Yb[1]);
        if (null !== Xb && Xb.half === Eb) {
          const bb = eb[Xb.rot];
          if (Pb(Yb, bb) && !Bb([-bb[0], -bb[1]])) return Lb(bb, vb(Yb)) ? "outerLeft" : "outerRight"
        }
        const jb = this.stairsAt(bb, ab - Yb[0], Ub, Ab - Yb[1]);
        if (null !== jb && jb.half === Eb) {
          const bb = eb[jb.rot];
          if (Pb(Yb, bb) && !Bb(bb)) return Lb(bb, vb(Yb)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Tb, this.rootIds = new Set(Mb.g.map((bb => (0, Ab.l)(bb))))
      }
      handles(bb) {
        var ab;
        const Ub = null === (ab = Ab.h[bb]) || void 0 === ab ? void 0 : ab.meta;
        return void 0 !== Ub && this.rootIds.has(Ub.rootId)
      }
      affects(bb) {
        return this.handles(bb)
      }
      placedBy(bb) {
        return Ab.h[bb].meta.rootName === Mb.m ? null : Mb.m
      }
      shape(bb, ab, Ub, Tb, Eb) {
        const {
          rootId: Yb,
          rootName: Bb,
          rot: eb
        } = Ab.h[Eb].meta;
        let vb = 0;
        return Mb.v[eb].forEach(((Mb, Eb) => {
          var Bb;
          let [Lb, Pb, Xb] = Mb;
          const jb = null === (Bb = Ab.h[bb(ab + Lb, Ub + Pb, Tb + Xb)]) || void 0 === Bb ? void 0 : Bb.meta;
          (null === jb || void 0 === jb ? void 0 : jb.rootId) === Yb && jb.rot === eb && (vb |= 1 << Eb)
        })), (0, Ab.l)((0, Mb.e)(Bb, eb, vb))
      }
    }, ...Eb.e.map((bb => new Yb.e(bb))), new class {
      constructor() {
        this.reshapeOffsets = xb
      }
      handles(bb) {
        const ab = ib(bb);
        return Zb.has(ab) || ab === jb.k
      }
      affects(bb) {
        const ab = ib(bb);
        return Db.has(ab) || zb.has(ab) || ab === kb || ab === jb.k || void 0 !== jb.d[ab]
      }
      shape(bb, ab, Ub, Mb, Tb, Eb) {
        const {
          rootName: Yb,
          rot: Bb
        } = Ab.h[Tb].meta;
        return Yb === jb.k ? Eb ? Tb : function(bb, ab, Ub, Mb, Tb) {
          const [Eb, Yb] = jb.h[Tb - 1];
          for (let Bb = 1; Bb <= jb.K; Bb++) {
            const [eb, vb] = [ab - Eb * Bb, Mb - Yb * Bb], Lb = bb(eb, Ub, vb);
            if (ib(Lb) === jb.k && Ab.h[Lb].meta.rot === Tb && Rb(ab, Ub, Mb, eb, vb)) return (0, Ab.l)((0, jb.hb)(Tb, !fb(Lb)))
          }
          return (0, Ab.l)((0, jb.hb)(Tb, !1))
        }(bb, ab, Ub, Mb, Bb) : (0, Ab.l)((0, jb.P)(Yb, Bb, function(bb, ab, Ub, Mb, Tb) {
          const [Eb, Yb] = jb.h[Tb - 1], Bb = (Tb, Bb) => function(bb, ab, Ub, Mb, Tb) {
            var Eb;
            const Yb = null === (Eb = Ab.h[bb]) || void 0 === Eb ? void 0 : Eb.meta;
            if (!Yb) return !1;
            const Bb = Yb.rootName,
              eb = Db.has(Bb) || fb(bb);
            if (!eb && !zb.has(Bb) && Bb !== kb) return !1;
            const [vb, Lb] = jb.h[Yb.rot - 1];
            return eb ? vb === -ab && Lb === -Ub : zb.has(Bb) ? vb === ab && Lb === Ub : (0, jb.db)(Ab.h[bb].name, vb, Lb).some((bb => {
              let [Ab, Mb] = bb;
              return Ab === -ab && Mb === -Ub
            })) && !(Mb === ab && Tb === Ub)
          }(bb(ab + Tb, Ub, Mb + Bb), Tb, Bb, Eb, Yb), eb = bb(ab - Eb, Ub, Mb - Yb), vb = ib(eb) === kb && Ab.h[eb].meta.rot === Tb, Lb = 1 === jb.d[ib(bb(ab, Ub - 1, Mb))] || -1 === jb.d[ib(bb(ab, Ub + 1, Mb))];
          if (Lb || vb || function(bb, ab, Ub) {
              if (ib(bb) !== yb) return !1;
              const [Mb, Tb] = jb.h[Ab.h[bb].meta.rot - 1], [Eb, Yb] = (0, jb.R)(Ab.h[bb].name, Mb, Tb);
              return ab === Eb && Ub === Yb
            }(eb, Eb, Yb) || Bb(-Eb, -Yb)) return null;
          const Pb = Bb(-Yb, Eb),
            Xb = Bb(Yb, -Eb);
          if (Pb === Xb) return null;
          return Pb ? "turnLeft" : "turnRight"
        }(bb, ab, Ub, Mb, Bb)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Nb, this.rootId = (0, Ab.l)(pb.r)
      }
      handles(bb) {
        var ab;
        return (null === (ab = Ab.h[bb]) || void 0 === ab ? void 0 : ab.meta.rootId) === this.rootId
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, ab, Ub, Mb, Tb, Eb) {
        const Yb = Wb(Tb);
        return (0, Ab.l)((Bb = Yb.rot, null !== (eb = Eb ? this.reshapedHalf(bb, ab, Ub, Mb, Yb) : this.placedHalf(bb, ab, Ub, Mb, Yb.rot)) ? (0, pb.d)(pb.r, Bb, eb) : 1 === Bb ? pb.r : `${pb.r}|meta|rot${Bb}`));
        var Bb, eb
      }
      placedHalf(bb, ab, Ub, Ab, Mb) {
        const [Tb, Eb] = mb.d[Mb];
        for (const [Yb, Bb] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const eb = ab + Bb * Tb,
            vb = Ab + Bb * Eb,
            Lb = Hb(bb, eb, Ub, vb);
          if (null !== Lb && Lb.rot === Mb && (null === Lb.half || !Ib(bb, eb, Ub, vb, Lb))) return Yb
        }
        return null
      }
      reshapedHalf(bb, ab, Ub, Ab, Mb) {
        if (null !== Mb.half && Ib(bb, ab, Ub, Ab, Mb)) return Mb.half;
        for (const Tb of ["right", "left"]) {
          const [Eb, Yb] = (0, pb.n)(Mb.rot, Tb), Bb = Hb(bb, ab + Eb, Ub, Ab + Yb);
          if (null !== Bb && Bb.rot === Mb.rot && Bb.half === pb.v[Tb]) return Tb
        }
        return null
      }
    }, new db.b];

    function hb(bb, ab, Ub, Ab, Mb) {
      let Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Eb of Fb)
        if (Eb.handles(Mb)) return Eb.shape(bb, ab, Ub, Ab, Mb, Tb);
      return Mb
    }

    function Gb(bb) {
      for (const Ab of Fb) {
        var ab, Ub;
        if (Ab.handles(bb)) return null !== (ab = null === (Ub = Ab.placedBy) || void 0 === Ub ? void 0 : Ub.call(Ab, bb)) && void 0 !== ab ? ab : null
      }
      return null
    }
  },
  37757: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => pb,
      d: () => zb,
      g: () => Db
    });
    var Ab = Ub(9007),
      Mb = Ub(9028),
      Tb = Ub(9086),
      Eb = Ub(37760),
      Yb = Ub(9077);
    const Bb = (0, Eb.C)("pipe"),
      eb = (0, Eb.C)("tank"),
      vb = (0, Eb.C)("port"),
      Lb = "Reactor Port";

    function Pb(bb, ab, Ub) {
      const Ab = new Set([Tb.f, Tb.c, Lb, ...ab, ...Ub, ...bb ? [Eb.f] : []]);
      return {
        makers: new Set(ab),
        roots: Ab
      }
    }
    const Xb = {
        water: Pb(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Eb.c]),
        cryo: Pb(!1, [Eb.c], [])
      },
      jb = new Set([...Xb.water.roots, ...Xb.cryo.roots]),
      Rb = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      kb = Mb.c.map((bb => Rb[bb])),
      yb = kb.map((bb => {
        let [ab, Ub, Ab] = bb;
        return Eb.r.findIndex((bb => {
          let [Mb, Tb, Eb] = bb;
          return Mb === ab && Tb === Ub && Eb === Ab
        }))
      }));

    function Zb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Ub = Ab.h[bb],
        Mb = null === Ub || void 0 === Ub ? void 0 : Ub.meta.rootName,
        Pb = Xb[ab];
      if (!Mb || !Pb.roots.has(Mb)) return null;
      if ((0, Tb.k)(Mb)) return (0, Eb.B)(Ub.name) === ab ? Bb : null;
      if (Mb === Eb.f) return eb;
      if (Mb === Lb) return Ub.name.endsWith("|Water") ? vb : null;
      const [jb, Rb] = Yb.h[(Ub.meta.rot || 1) - 1];
      return (0, Eb.C)(Pb.makers.has(Mb) ? "maker" : "user", [-jb, 0, -Rb])
    }

    function Db(bb, ab, Ub, Mb) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Yb
      } = Xb[Tb];
      return kb.some(((eb, vb) => {
        var Lb, Pb;
        let [Xb, jb, Rb] = eb;
        const kb = bb(ab + Xb, Ub + jb, Mb + Rb),
          Db = Zb(kb, Tb);
        return null !== Db && Yb.has(null !== (Lb = null === (Pb = Ab.h[kb]) || void 0 === Pb ? void 0 : Pb.meta.rootName) && void 0 !== Lb ? Lb : "") && !(0, Eb.D)(Bb, Db, yb[vb])
      }))
    }

    function zb(bb) {
      const ab = Ab.h[bb];
      return ab ? (0, Eb.B)(ab.name) : null
    }
    let xb = null;

    function ib(bb) {
      if (!xb) {
        xb = new Map;
        for (const bb of ["water", "cryo"])
          for (let ab = 0; ab < 64; ab++)
            for (const Ub of [!1, !0]) xb.set((0, Tb.n)(bb, ab, Ub), {
              CP: bb,
              mask: ab,
              full: Ub
            })
      }
      return xb.get(bb)
    }
    const fb = new Map(Array.from({
      length: Tb.g + 1
    }, ((bb, ab) => [(0, Tb.r)(ab), ab])));

    function mb(bb, ab, Ub, Mb, Tb, Eb) {
      return kb.some(((Yb, Bb) => {
        var eb, vb, Lb;
        let [Pb, Xb, jb] = Yb;
        if (0 === (Eb >> Bb & 1)) return !1;
        const Rb = null !== (eb = null === (vb = Ab.h[bb(ab + Pb, Ub + Xb, Mb + jb)]) || void 0 === vb ? void 0 : vb.name) && void 0 !== eb ? eb : "",
          kb = ib(Rb);
        return kb ? kb.CP === Tb && kb.full : (null !== (Lb = function(bb) {
          var ab;
          return null !== (ab = fb.get(bb)) && void 0 !== ab ? ab : null
        }(Rb)) && void 0 !== Lb ? Lb : 0) > 0
      }))
    }
    class pb {
      constructor() {
        this.reshapeOffsets = kb
      }
      handles(bb) {
        return null !== zb(bb)
      }
      affects(bb) {
        var ab, Ub;
        return jb.has(null !== (ab = null === (Ub = Ab.h[bb]) || void 0 === Ub ? void 0 : Ub.meta.rootName) && void 0 !== ab ? ab : "")
      }
      placedBy(bb) {
        var ab;
        return (null === (ab = Ab.h[bb]) || void 0 === ab ? void 0 : ab.meta.rootName) === Tb.c ? Tb.f : null
      }
      shape(bb, ab, Ub, Mb, Yb, eb) {
        var vb, Lb, Pb;
        const Xb = null !== (vb = null === (Lb = Ab.h[Yb]) || void 0 === Lb ? void 0 : Lb.name) && void 0 !== vb ? vb : "",
          jb = eb || Xb !== Tb.f ? null !== (Pb = (0, Eb.B)(Xb)) && void 0 !== Pb ? Pb : "water" : function(bb, ab, Ub, Ab) {
            return kb.some(((Mb, Tb) => {
              let [Yb, eb, vb] = Mb;
              const Lb = Zb(bb(ab + Yb, Ub + eb, Ab + vb), "cryo");
              return null !== Lb && "port" !== Lb.kind && (0, Eb.D)(Bb, Lb, yb[Tb])
            })) ? "cryo" : "water"
          }(bb, ab, Ub, Mb),
          Rb = function(bb, ab, Ub, Ab) {
            let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Tb = 0;
            return kb.forEach(((Yb, eb) => {
              let [vb, Lb, Pb] = Yb;
              const Xb = Zb(bb(ab + vb, Ub + Lb, Ab + Pb), Mb);
              Xb && (0, Eb.D)(Bb, Xb, yb[eb]) && (Tb |= 1 << eb)
            })), Tb
          }(bb, ab, Ub, Mb, jb),
          Db = eb ? function(bb) {
            var ab;
            return !0 === (null === (ab = ib(bb)) || void 0 === ab ? void 0 : ab.full)
          }(Xb) : mb(bb, ab, Ub, Mb, jb, Rb);
        return (0, Ab.l)((0, Tb.n)(jb, Rb, Db))
      }
    }
  },
  37509: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      d: () => Tb
    });
    const Ab = ["Chest", "Loot Chest", "Moonstone Chest"],
      Mb = [{
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

    function Tb(bb) {
      return Mb.find((ab => ab.exactMatch ? bb === ab.name : bb.includes(ab.name)))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);