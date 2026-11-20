export const id = 236;
export const ids = [236];
export const modules = {
  37661: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb,
      e: () => Bb,
      f: () => Lb,
      g: () => Ob,
      j: () => Ub,
      n: () => Gb
    });
    const Bb = 1.001,
      Ob = .501,
      Gb = .025,
      Ub = .75,
      Lb = .08,
      Yb = 4;

    function Sb() {
      const bb = Ob,
        ub = Gb,
        hb = bb - ub / 2,
        Bb = (2 * bb - 2 * ub) / (2 * Yb - 1),
        Ub = [];
      for (const Ob of [-hb, hb])
        for (const Gb of [-hb, hb])
          for (let hb = 0; hb < Yb; hb++) {
            const Lb = -bb + ub + Bb * (2 * hb + .5);
            Ub.push([Bb, ub, ub, Lb, Ob, Gb]), Ub.push([ub, Bb, ub, Ob, Lb, Gb]), Ub.push([ub, ub, Bb, Ob, Gb, Lb])
          }
      for (const Ob of [-hb, hb])
        for (const bb of [-hb, hb])
          for (const Bb of [-hb, hb]) Ub.push([ub, ub, ub, Ob, bb, Bb]);
      return Ub
    }
  },
  38056: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => Wb,
      E: () => wb,
      H: () => pb,
      J: () => Ab,
      K: () => Ob,
      e: () => ab,
      f: () => Yb,
      h: () => Kb,
      j: () => Sb,
      k: () => Lb,
      m: () => Ub,
      o: () => Gb,
      p: () => rb,
      q: () => Zb,
      s: () => db,
      t: () => jb,
      x: () => Cb
    });
    var Bb = hb(9273);

    function Ob(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    const Gb = 2e3,
      Ub = .005,
      Lb = .001,
      Yb = 2,
      Sb = "Fluid Tank",
      ab = "Coolant Mixer",
      Hb = 144;

    function wb(bb) {
      const ub = bb.split("|")[0];
      return (0, Bb.n)(ub) ? ub === Bb.d ? "cryo" : "water" : null
    }
    const Zb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Xb = 63;

    function pb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const hb = ub ? function(bb, ub, hb) {
        const Bb = Zb.findIndex((Bb => {
          let [Ob, Gb, Ub] = Bb;
          return Ob === bb && Gb === ub && Ub === hb
        }));
        return Bb < 0 ? 0 : 1 << Bb
      }(ub[0], ub[1], ub[2]) : 0;
      return "maker" === bb ? {
        kind: bb,
        faces: hb
      } : "user" === bb ? {
        kind: bb,
        faces: Xb & ~hb
      } : {
        kind: bb,
        faces: Xb
      }
    }

    function ob(bb) {
      return "pipe" === bb || "tank" === bb || "maker" === bb
    }

    function Ab(bb, ub, hb) {
      return 0 !== (bb.faces & 1 << hb) && 0 !== (ub.faces & 1 << (1 ^ hb)) && (ob(bb.kind) || ob(ub.kind))
    }
    const lb = (bb, ub, hb, Bb) => ({
        input: bb,
        inputAmount: Bb,
        output: ub,
        outputAmount: hb
      }),
      Kb = {
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
          recipes: [lb("Uranium Grit", "Uranium Pellet", 1, 12), lb("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [lb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Hb,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Wb(bb, ub) {
      return 1e3 * (null !== ub && void 0 !== ub ? ub : 0) / bb.opMs
    }

    function Cb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const hb = Wb(Kb["Coolant Mixer"], Hb) * ub;
      return bb <= 0 ? 0 : Math.ceil(bb / hb - 1e-9)
    }
    const db = "baf2Water",
      rb = "baf2waterclose",
      jb = "baf2wateropen"
  },
  38042: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => tb,
      d: () => Jb
    });
    var Bb = hb(9181),
      Ob = hb(9221);
    const Gb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Ub = hb(9240),
      Lb = hb(37832),
      Yb = hb(9235);
    const Sb = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function ab(bb) {
      let [ub, hb] = bb;
      return [-hb, ub]
    }

    function Hb(bb, ub) {
      return bb[0] === ub[0] && bb[1] === ub[1]
    }

    function wb(bb, ub) {
      return bb[0] * ub[0] + bb[1] * ub[1] === 0
    }
    const Zb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Xb = hb(9269);

    function pb(bb, ub, hb, Bb, Ob) {
      return ub < Xb.t || ub >= Xb.t + Xb.u || Math.floor(bb / Xb.A) === Math.floor(Bb / Xb.A) && Math.floor(hb / Xb.A) === Math.floor(Ob / Xb.A)
    }
    const ob = "Splitter",
      Ab = "Sorting Gate",
      lb = new Set(Xb.N),
      Kb = new Set([...Xb.N, "Belt Loader", "Fast Loader", Ab]),
      Wb = new Set(Xb.y),
      Cb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function db(bb) {
      var ub, hb;
      return null !== (ub = null === (hb = Bb.i[bb]) || void 0 === hb ? void 0 : hb.meta.rootName) && void 0 !== ub ? ub : ""
    }

    function rb(bb) {
      return db(bb) === Xb.k && (0, Xb.V)(Bb.i[bb].name)
    }
    var jb = hb(9230),
      nb = hb(9253);
    const Db = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function xb(bb) {
      var ub, hb;
      const Ob = null === (ub = Bb.i[bb]) || void 0 === ub ? void 0 : ub.meta;
      return (null === Ob || void 0 === Ob ? void 0 : Ob.rootName) !== nb.j ? null : {
        rot: null !== (hb = Ob.rot) && void 0 !== hb ? hb : 1,
        half: (0, nb.f)(Ob.rootName, Ob.metaStr)
      }
    }

    function zb(bb, ub, hb, Bb) {
      return xb(bb(ub, hb, Bb))
    }

    function gb(bb, ub, hb, Bb, Ob) {
      let {
        rot: Gb,
        half: Ub
      } = Ob;
      const [Lb, Yb] = (0, nb.i)(Gb, Ub), Sb = zb(bb, ub + Lb, hb, Bb + Yb);
      return null !== Sb && Sb.rot === Gb && Sb.half === nb.m[Ub]
    }
    var ib = hb(38048);
    const vb = [new class {
      constructor() {
        this.reshapeOffsets = Zb
      }
      handles(bb) {
        var ub;
        return "Stairs" === (null === (ub = Bb.i[bb]) || void 0 === ub ? void 0 : ub.model)
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, ub, hb, Ob, Gb) {
        const Ub = this.stairsOf(Gb),
          Lb = this.cornerAt(bb, ub, hb, Ob, Ub),
          Sb = Ub.half === Yb.c.top ? "top" : "bot";
        return (0, Bb.k)(`${Bb.i[Gb].meta.rootName}|meta|rot${Ub.rot}|${Sb}${null===Lb?"":`|${Lb}`}`)
      }
      stairsOf(bb) {
        const {
          rot: ub,
          halfblockPlacement: hb
        } = Bb.i[bb].meta;
        return {
          rot: ub,
          half: hb
        }
      }
      stairsAt(bb, ub, hb, Bb) {
        const Ob = bb(ub, hb, Bb);
        return this.handles(Ob) ? this.stairsOf(Ob) : null
      }
      cornerAt(bb, ub, hb, Bb, Ob) {
        let {
          rot: Gb,
          half: Ub
        } = Ob;
        const Lb = Sb[Gb],
          Yb = Ob => {
            let [Lb, Yb] = Ob;
            const Sb = this.stairsAt(bb, ub + Lb, hb, Bb + Yb);
            return null !== Sb && Sb.rot === Gb && Sb.half === Ub
          },
          Zb = this.stairsAt(bb, ub + Lb[0], hb, Bb + Lb[1]);
        if (null !== Zb && Zb.half === Ub) {
          const bb = Sb[Zb.rot];
          if (wb(Lb, bb) && !Yb([-bb[0], -bb[1]])) return Hb(bb, ab(Lb)) ? "outerLeft" : "outerRight"
        }
        const Xb = this.stairsAt(bb, ub - Lb[0], hb, Bb - Lb[1]);
        if (null !== Xb && Xb.half === Ub) {
          const bb = Sb[Xb.rot];
          if (wb(Lb, bb) && !Yb(bb)) return Hb(bb, ab(Lb)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Gb, this.rootIds = new Set(Ob.g.map((bb => (0, Bb.k)(bb))))
      }
      handles(bb) {
        var ub;
        const hb = null === (ub = Bb.i[bb]) || void 0 === ub ? void 0 : ub.meta;
        return void 0 !== hb && this.rootIds.has(hb.rootId)
      }
      affects(bb) {
        return this.handles(bb)
      }
      placedBy(bb) {
        return Bb.i[bb].meta.rootName === Ob.n ? null : Ob.n
      }
      shape(bb, ub, hb, Gb, Ub) {
        const {
          rootId: Lb,
          rootName: Yb,
          rot: Sb
        } = Bb.i[Ub].meta;
        let ab = 0;
        return Ob.t[Sb].forEach(((Ob, Ub) => {
          var Yb;
          let [Hb, wb, Zb] = Ob;
          const Xb = null === (Yb = Bb.i[bb(ub + Hb, hb + wb, Gb + Zb)]) || void 0 === Yb ? void 0 : Yb.meta;
          (null === Xb || void 0 === Xb ? void 0 : Xb.rootId) === Lb && Xb.rot === Sb && (ab |= 1 << Ub)
        })), (0, Bb.k)((0, Ob.e)(Yb, Sb, ab))
      }
    }, ...Ub.e.map((bb => new Lb.b(bb))), new class {
      constructor() {
        this.reshapeOffsets = Cb
      }
      handles(bb) {
        const ub = db(bb);
        return lb.has(ub) || ub === Xb.k
      }
      affects(bb) {
        const ub = db(bb);
        return Kb.has(ub) || Wb.has(ub) || ub === ob || ub === Xb.k || void 0 !== Xb.e[ub]
      }
      shape(bb, ub, hb, Ob, Gb, Ub) {
        const {
          rootName: Lb,
          rot: Yb
        } = Bb.i[Gb].meta;
        return Lb === Xb.k ? Ub ? Gb : function(bb, ub, hb, Ob, Gb) {
          const [Ub, Lb] = Xb.h[Gb - 1];
          for (let Yb = 1; Yb <= Xb.M; Yb++) {
            const [Sb, ab] = [ub - Ub * Yb, Ob - Lb * Yb], Hb = bb(Sb, hb, ab);
            if (db(Hb) === Xb.k && Bb.i[Hb].meta.rot === Gb && pb(ub, hb, Ob, Sb, ab)) return (0, Bb.k)((0, Xb.cb)(Gb, !rb(Hb)))
          }
          return (0, Bb.k)((0, Xb.cb)(Gb, !1))
        }(bb, ub, hb, Ob, Yb) : (0, Bb.k)((0, Xb.P)(Lb, Yb, function(bb, ub, hb, Ob, Gb) {
          const [Ub, Lb] = Xb.h[Gb - 1], Yb = (Gb, Yb) => function(bb, ub, hb, Ob, Gb) {
            var Ub;
            const Lb = null === (Ub = Bb.i[bb]) || void 0 === Ub ? void 0 : Ub.meta;
            if (!Lb) return !1;
            const Yb = Lb.rootName,
              Sb = Kb.has(Yb) || rb(bb);
            if (!Sb && !Wb.has(Yb) && Yb !== ob) return !1;
            const [ab, Hb] = Xb.h[Lb.rot - 1];
            return Sb ? ab === -ub && Hb === -hb : Wb.has(Yb) ? ab === ub && Hb === hb : (0, Xb._)(Bb.i[bb].name, ab, Hb).some((bb => {
              let [Bb, Ob] = bb;
              return Bb === -ub && Ob === -hb
            })) && !(Ob === ub && Gb === hb)
          }(bb(ub + Gb, hb, Ob + Yb), Gb, Yb, Ub, Lb), Sb = bb(ub - Ub, hb, Ob - Lb), ab = db(Sb) === ob && Bb.i[Sb].meta.rot === Gb, Hb = 1 === Xb.e[db(bb(ub, hb - 1, Ob))] || -1 === Xb.e[db(bb(ub, hb + 1, Ob))];
          if (Hb || ab || function(bb, ub, hb) {
              if (db(bb) !== Ab) return !1;
              const [Ob, Gb] = Xb.h[Bb.i[bb].meta.rot - 1], [Ub, Lb] = (0, Xb.Q)(Bb.i[bb].name, Ob, Gb);
              return ub === Ub && hb === Lb
            }(Sb, Ub, Lb) || Yb(-Ub, -Lb)) return null;
          const wb = Yb(-Lb, Ub),
            Zb = Yb(Lb, -Ub);
          if (wb === Zb) return null;
          return wb ? "turnLeft" : "turnRight"
        }(bb, ub, hb, Ob, Yb)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Db, this.rootId = (0, Bb.k)(nb.j)
      }
      handles(bb) {
        var ub;
        return (null === (ub = Bb.i[bb]) || void 0 === ub ? void 0 : ub.meta.rootId) === this.rootId
      }
      affects(bb) {
        return this.handles(bb)
      }
      shape(bb, ub, hb, Ob, Gb, Ub) {
        const Lb = xb(Gb);
        return (0, Bb.k)((Yb = Lb.rot, null !== (Sb = Ub ? this.reshapedHalf(bb, ub, hb, Ob, Lb) : this.placedHalf(bb, ub, hb, Ob, Lb.rot)) ? (0, nb.e)(nb.j, Yb, Sb) : 1 === Yb ? nb.j : `${nb.j}|meta|rot${Yb}`));
        var Yb, Sb
      }
      placedHalf(bb, ub, hb, Bb, Ob) {
        const [Gb, Ub] = jb.c[Ob];
        for (const [Lb, Yb] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Sb = ub + Yb * Gb,
            ab = Bb + Yb * Ub,
            Hb = zb(bb, Sb, hb, ab);
          if (null !== Hb && Hb.rot === Ob && (null === Hb.half || !gb(bb, Sb, hb, ab, Hb))) return Lb
        }
        return null
      }
      reshapedHalf(bb, ub, hb, Bb, Ob) {
        if (null !== Ob.half && gb(bb, ub, hb, Bb, Ob)) return Ob.half;
        for (const Gb of ["right", "left"]) {
          const [Ub, Lb] = (0, nb.i)(Ob.rot, Gb), Yb = zb(bb, ub + Ub, hb, Bb + Lb);
          if (null !== Yb && Yb.rot === Ob.rot && Yb.half === nb.m[Gb]) return Gb
        }
        return null
      }
    }, new ib.b];

    function tb(bb, ub, hb, Bb, Ob) {
      let Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Ub of vb)
        if (Ub.handles(Ob)) return Ub.shape(bb, ub, hb, Bb, Ob, Gb);
      return Ob
    }

    function Jb(bb) {
      for (const Bb of vb) {
        var ub, hb;
        if (Bb.handles(bb)) return null !== (ub = null === (hb = Bb.placedBy) || void 0 === hb ? void 0 : hb.call(Bb, bb)) && void 0 !== ub ? ub : null
      }
      return null
    }
  },
  38048: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => nb,
      e: () => Wb,
      h: () => Kb
    });
    var Bb = hb(9181),
      Ob = hb(9204),
      Gb = hb(9273),
      Ub = hb(38056),
      Lb = hb(9269);
    const Yb = (0, Ub.H)("pipe"),
      Sb = (0, Ub.H)("tank"),
      ab = (0, Ub.H)("port"),
      Hb = "Reactor Port";

    function wb(bb, ub, hb) {
      const Bb = new Set([Gb.g, Gb.d, Hb, ...ub, ...hb, ...bb ? [Ub.j] : []]);
      return {
        makers: new Set(ub),
        roots: Bb
      }
    }
    const Zb = {
        water: wb(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Ub.e]),
        cryo: wb(!1, [Ub.e], [])
      },
      Xb = new Set([...Zb.water.roots, ...Zb.cryo.roots]),
      pb = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      ob = Ob.g.map((bb => pb[bb])),
      Ab = ob.map((bb => {
        let [ub, hb, Bb] = bb;
        return Ub.q.findIndex((bb => {
          let [Ob, Gb, Ub] = bb;
          return Ob === ub && Gb === hb && Ub === Bb
        }))
      }));

    function lb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const hb = Bb.i[bb],
        Ob = null === hb || void 0 === hb ? void 0 : hb.meta.rootName,
        wb = Zb[ub];
      if (!Ob || !wb.roots.has(Ob)) return null;
      if ((0, Gb.n)(Ob)) return (0, Ub.E)(hb.name) === ub ? Yb : null;
      if (Ob === Ub.j) return Sb;
      if (Ob === Hb) return hb.name.endsWith("|Water") ? ab : null;
      const [Xb, pb] = Lb.h[(hb.meta.rot || 1) - 1];
      return (0, Ub.H)(wb.makers.has(Ob) ? "maker" : "user", [-Xb, 0, -pb])
    }

    function Kb(bb, ub, hb, Ob) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Lb
      } = Zb[Gb];
      return ob.some(((Sb, ab) => {
        var Hb, wb;
        let [Zb, Xb, pb] = Sb;
        const ob = bb(ub + Zb, hb + Xb, Ob + pb),
          Kb = lb(ob, Gb);
        return null !== Kb && Lb.has(null !== (Hb = null === (wb = Bb.i[ob]) || void 0 === wb ? void 0 : wb.meta.rootName) && void 0 !== Hb ? Hb : "") && !(0, Ub.J)(Yb, Kb, Ab[ab])
      }))
    }

    function Wb(bb) {
      const ub = Bb.i[bb];
      return ub ? (0, Ub.E)(ub.name) : null
    }
    let Cb = null;

    function db(bb) {
      if (!Cb) {
        Cb = new Map;
        for (const bb of ["water", "cryo"])
          for (let ub = 0; ub < 64; ub++)
            for (const hb of [!1, !0]) Cb.set((0, Gb.q)(bb, ub, hb), {
              Pw: bb,
              mask: ub,
              full: hb
            })
      }
      return Cb.get(bb)
    }
    const rb = new Map(Array.from({
      length: Gb.k + 1
    }, ((bb, ub) => [(0, Gb.r)(ub), ub])));

    function jb(bb, ub, hb, Ob, Gb, Ub) {
      return ob.some(((Lb, Yb) => {
        var Sb, ab, Hb;
        let [wb, Zb, Xb] = Lb;
        if (0 === (Ub >> Yb & 1)) return !1;
        const pb = null !== (Sb = null === (ab = Bb.i[bb(ub + wb, hb + Zb, Ob + Xb)]) || void 0 === ab ? void 0 : ab.name) && void 0 !== Sb ? Sb : "",
          ob = db(pb);
        return ob ? ob.Pw === Gb && ob.full : (null !== (Hb = function(bb) {
          var ub;
          return null !== (ub = rb.get(bb)) && void 0 !== ub ? ub : null
        }(pb)) && void 0 !== Hb ? Hb : 0) > 0
      }))
    }
    class nb {
      constructor() {
        this.reshapeOffsets = ob
      }
      handles(bb) {
        return null !== Wb(bb)
      }
      affects(bb) {
        var ub, hb;
        return Xb.has(null !== (ub = null === (hb = Bb.i[bb]) || void 0 === hb ? void 0 : hb.meta.rootName) && void 0 !== ub ? ub : "")
      }
      placedBy(bb) {
        var ub;
        return (null === (ub = Bb.i[bb]) || void 0 === ub ? void 0 : ub.meta.rootName) === Gb.d ? Gb.g : null
      }
      shape(bb, ub, hb, Ob, Lb, Sb) {
        var ab, Hb, wb;
        const Zb = null !== (ab = null === (Hb = Bb.i[Lb]) || void 0 === Hb ? void 0 : Hb.name) && void 0 !== ab ? ab : "",
          Xb = Sb || Zb !== Gb.g ? null !== (wb = (0, Ub.E)(Zb)) && void 0 !== wb ? wb : "water" : function(bb, ub, hb, Bb) {
            return ob.some(((Ob, Gb) => {
              let [Lb, Sb, ab] = Ob;
              const Hb = lb(bb(ub + Lb, hb + Sb, Bb + ab), "cryo");
              return null !== Hb && "port" !== Hb.kind && (0, Ub.J)(Yb, Hb, Ab[Gb])
            })) ? "cryo" : "water"
          }(bb, ub, hb, Ob),
          pb = function(bb, ub, hb, Bb) {
            let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Gb = 0;
            return ob.forEach(((Lb, Sb) => {
              let [ab, Hb, wb] = Lb;
              const Zb = lb(bb(ub + ab, hb + Hb, Bb + wb), Ob);
              Zb && (0, Ub.J)(Yb, Zb, Ab[Sb]) && (Gb |= 1 << Sb)
            })), Gb
          }(bb, ub, hb, Ob, Xb),
          Kb = Sb ? function(bb) {
            var ub;
            return !0 === (null === (ub = db(bb)) || void 0 === ub ? void 0 : ub.full)
          }(Zb) : jb(bb, ub, hb, Ob, Xb, pb);
        return (0, Bb.k)((0, Gb.q)(Xb, pb, Kb))
      }
    }
  },
  37781: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb,
      g: () => Gb
    });
    const Bb = ["Chest", "Loot Chest", "Moonstone Chest"],
      Ob = [{
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

    function Gb(bb) {
      return Ob.find((ub => ub.exactMatch ? bb === ub.name : bb.includes(ub.name)))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);