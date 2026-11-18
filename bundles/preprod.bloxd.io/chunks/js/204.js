export const id = 204;
export const ids = [204];
export const modules = {
  36721: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      g: () => Uy,
      j: () => cb,
      l: () => hy,
      o: () => Zy,
      r: () => fy
    });
    const Uy = 1.001,
      hy = .501,
      fy = .025,
      Zy = .75,
      cb = .08,
      Py = 4;

    function oy() {
      const yb = hy,
        bb = fy,
        Wy = yb - bb / 2,
        Uy = (2 * yb - 2 * bb) / (2 * Py - 1),
        Zy = [];
      for (const hy of [-Wy, Wy])
        for (const fy of [-Wy, Wy])
          for (let Wy = 0; Wy < Py; Wy++) {
            const cb = -yb + bb + Uy * (2 * Wy + .5);
            Zy.push([Uy, bb, bb, cb, hy, fy]), Zy.push([bb, Uy, bb, hy, cb, fy]), Zy.push([bb, bb, Uy, hy, fy, cb])
          }
      for (const hy of [-Wy, Wy])
        for (const yb of [-Wy, Wy])
          for (const Uy of [-Wy, Wy]) Zy.push([bb, bb, bb, hy, yb, Uy]);
      return Zy
    }
  },
  37116: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => Vy,
      C: () => Ty,
      E: () => ey,
      F: () => Sy,
      G: () => ly,
      J: () => hy,
      e: () => By,
      f: () => Py,
      i: () => Cy,
      m: () => oy,
      o: () => cb,
      q: () => Zy,
      s: () => fy,
      u: () => gb,
      v: () => qb,
      w: () => Jy,
      x: () => Gy
    });
    var Uy = Wy(8551);

    function hy(yb) {
      return Math.floor(yb).toLocaleString("en-US")
    }
    const fy = 2e3,
      Zy = .005,
      cb = .001,
      Py = 2,
      oy = "Fluid Tank",
      By = "Coolant Mixer",
      Ky = 144;

    function ey(yb) {
      const bb = yb.split("|")[0];
      return (0, Uy.l)(bb) ? bb === Uy.d ? "cryo" : "water" : null
    }
    const qb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      sy = 63;

    function Sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Wy = bb ? function(yb, bb, Wy) {
        const Uy = qb.findIndex((Uy => {
          let [hy, fy, Zy] = Uy;
          return hy === yb && fy === bb && Zy === Wy
        }));
        return Uy < 0 ? 0 : 1 << Uy
      }(bb[0], bb[1], bb[2]) : 0;
      return "maker" === yb ? {
        kind: yb,
        faces: Wy
      } : "user" === yb ? {
        kind: yb,
        faces: sy & ~Wy
      } : {
        kind: yb,
        faces: sy
      }
    }

    function Ey(yb) {
      return "pipe" === yb || "tank" === yb || "maker" === yb
    }

    function ly(yb, bb, Wy) {
      return 0 !== (yb.faces & 1 << Wy) && 0 !== (bb.faces & 1 << (1 ^ Wy)) && (Ey(yb.kind) || Ey(bb.kind))
    }
    const mb = (yb, bb, Wy, Uy) => ({
        input: yb,
        inputAmount: Uy,
        output: bb,
        outputAmount: Wy
      }),
      Cy = {
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
          recipes: [mb("Uranium Grit", "Uranium Pellet", 1, 12), mb("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [mb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Ky,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Ty(yb, bb) {
      return 1e3 * (null !== bb && void 0 !== bb ? bb : 0) / yb.opMs
    }

    function Vy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Wy = Ty(Cy["Coolant Mixer"], Ky) * bb;
      return yb <= 0 ? 0 : Math.ceil(yb / Wy - 1e-9)
    }
    const Jy = "baf2Water",
      gb = "baf2waterclose",
      Gy = "baf2wateropen"
  },
  37112: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ny,
      h: () => uy
    });
    var Uy = Wy(8459),
      hy = Wy(8496);
    const fy = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Zy = Wy(8508),
      cb = Wy(36923),
      Py = Wy(8504);
    const oy = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function By(yb) {
      let [bb, Wy] = yb;
      return [-Wy, bb]
    }

    function Ky(yb, bb) {
      return yb[0] === bb[0] && yb[1] === bb[1]
    }

    function ey(yb, bb) {
      return yb[0] * bb[0] + yb[1] * bb[1] === 0
    }
    const qb = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var sy = Wy(8543);

    function Sy(yb, bb, Wy, Uy, hy) {
      return bb < sy.p || bb >= sy.p + sy.r || Math.floor(yb / sy.u) === Math.floor(Uy / sy.u) && Math.floor(Wy / sy.u) === Math.floor(hy / sy.u)
    }
    const Ey = "Splitter",
      ly = "Sorting Gate",
      mb = new Set(sy.D),
      Cy = new Set([...sy.D, "Belt Loader", "Fast Loader", ly]),
      Ty = new Set(sy.t),
      Vy = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function Jy(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = Uy.h[yb]) || void 0 === Wy ? void 0 : Wy.meta.rootName) && void 0 !== bb ? bb : ""
    }

    function gb(yb) {
      return Jy(yb) === sy.h && (0, sy.R)(Uy.h[yb].name)
    }
    var Gy = Wy(8499),
      Oy = Wy(8521);
    const Ry = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function vb(yb) {
      var bb, Wy;
      const hy = null === (bb = Uy.h[yb]) || void 0 === bb ? void 0 : bb.meta;
      return (null === hy || void 0 === hy ? void 0 : hy.rootName) !== Oy.j ? null : {
        rot: null !== (Wy = hy.rot) && void 0 !== Wy ? Wy : 1,
        half: (0, Oy.e)(hy.rootName, hy.metaStr)
      }
    }

    function ib(yb, bb, Wy, Uy) {
      return vb(yb(bb, Wy, Uy))
    }

    function My(yb, bb, Wy, Uy, hy) {
      let {
        rot: fy,
        half: Zy
      } = hy;
      const [cb, Py] = (0, Oy.i)(fy, Zy), oy = ib(yb, bb + cb, Wy, Uy + Py);
      return null !== oy && oy.rot === fy && oy.half === Oy.l[Zy]
    }
    var Yy = Wy(37114);
    const Xy = [new class {
      constructor() {
        this.reshapeOffsets = qb
      }
      handles(yb) {
        var bb;
        return "Stairs" === (null === (bb = Uy.h[yb]) || void 0 === bb ? void 0 : bb.model)
      }
      affects(yb) {
        return this.handles(yb)
      }
      shape(yb, bb, Wy, hy, fy) {
        const Zy = this.stairsOf(fy),
          cb = this.cornerAt(yb, bb, Wy, hy, Zy),
          oy = Zy.half === Py.d.top ? "top" : "bot";
        return (0, Uy.l)(`${Uy.h[fy].meta.rootName}|meta|rot${Zy.rot}|${oy}${null===cb?"":`|${cb}`}`)
      }
      stairsOf(yb) {
        const {
          rot: bb,
          halfblockPlacement: Wy
        } = Uy.h[yb].meta;
        return {
          rot: bb,
          half: Wy
        }
      }
      stairsAt(yb, bb, Wy, Uy) {
        const hy = yb(bb, Wy, Uy);
        return this.handles(hy) ? this.stairsOf(hy) : null
      }
      cornerAt(yb, bb, Wy, Uy, hy) {
        let {
          rot: fy,
          half: Zy
        } = hy;
        const cb = oy[fy],
          Py = hy => {
            let [cb, Py] = hy;
            const oy = this.stairsAt(yb, bb + cb, Wy, Uy + Py);
            return null !== oy && oy.rot === fy && oy.half === Zy
          },
          qb = this.stairsAt(yb, bb + cb[0], Wy, Uy + cb[1]);
        if (null !== qb && qb.half === Zy) {
          const yb = oy[qb.rot];
          if (ey(cb, yb) && !Py([-yb[0], -yb[1]])) return Ky(yb, By(cb)) ? "outerLeft" : "outerRight"
        }
        const sy = this.stairsAt(yb, bb - cb[0], Wy, Uy - cb[1]);
        if (null !== sy && sy.half === Zy) {
          const yb = oy[sy.rot];
          if (ey(cb, yb) && !Py(yb)) return Ky(yb, By(cb)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = fy, this.rootIds = new Set(hy.k.map((yb => (0, Uy.l)(yb))))
      }
      handles(yb) {
        var bb;
        const Wy = null === (bb = Uy.h[yb]) || void 0 === bb ? void 0 : bb.meta;
        return void 0 !== Wy && this.rootIds.has(Wy.rootId)
      }
      affects(yb) {
        return this.handles(yb)
      }
      placedBy(yb) {
        return Uy.h[yb].meta.rootName === hy.s ? null : hy.s
      }
      shape(yb, bb, Wy, fy, Zy) {
        const {
          rootId: cb,
          rootName: Py,
          rot: oy
        } = Uy.h[Zy].meta;
        let By = 0;
        return hy.z[oy].forEach(((hy, Zy) => {
          var Py;
          let [Ky, ey, qb] = hy;
          const sy = null === (Py = Uy.h[yb(bb + Ky, Wy + ey, fy + qb)]) || void 0 === Py ? void 0 : Py.meta;
          (null === sy || void 0 === sy ? void 0 : sy.rootId) === cb && sy.rot === oy && (By |= 1 << Zy)
        })), (0, Uy.l)((0, hy.g)(Py, oy, By))
      }
    }, ...Zy.c.map((yb => new cb.b(yb))), new class {
      constructor() {
        this.reshapeOffsets = Vy
      }
      handles(yb) {
        const bb = Jy(yb);
        return mb.has(bb) || bb === sy.h
      }
      affects(yb) {
        const bb = Jy(yb);
        return Cy.has(bb) || Ty.has(bb) || bb === Ey || bb === sy.h || void 0 !== sy.b[bb]
      }
      shape(yb, bb, Wy, hy, fy, Zy) {
        const {
          rootName: cb,
          rot: Py
        } = Uy.h[fy].meta;
        return cb === sy.h ? Zy ? fy : function(yb, bb, Wy, hy, fy) {
          const [Zy, cb] = sy.e[fy - 1];
          for (let Py = 1; Py <= sy.C; Py++) {
            const [oy, By] = [bb - Zy * Py, hy - cb * Py], Ky = yb(oy, Wy, By);
            if (Jy(Ky) === sy.h && Uy.h[Ky].meta.rot === fy && Sy(bb, Wy, hy, oy, By)) return (0, Uy.l)((0, sy.X)(fy, !gb(Ky)))
          }
          return (0, Uy.l)((0, sy.X)(fy, !1))
        }(yb, bb, Wy, hy, Py) : (0, Uy.l)((0, sy.G)(cb, Py, function(yb, bb, Wy, hy, fy) {
          const [Zy, cb] = sy.e[fy - 1], Py = (fy, Py) => function(yb, bb, Wy, hy, fy) {
            var Zy;
            const cb = null === (Zy = Uy.h[yb]) || void 0 === Zy ? void 0 : Zy.meta;
            if (!cb) return !1;
            const Py = cb.rootName,
              oy = Cy.has(Py) || gb(yb);
            if (!oy && !Ty.has(Py) && Py !== Ey) return !1;
            const [By, Ky] = sy.e[cb.rot - 1];
            return oy ? By === -bb && Ky === -Wy : Ty.has(Py) ? By === bb && Ky === Wy : (0, sy.W)(Uy.h[yb].name, By, Ky).some((yb => {
              let [Uy, hy] = yb;
              return Uy === -bb && hy === -Wy
            })) && !(hy === bb && fy === Wy)
          }(yb(bb + fy, Wy, hy + Py), fy, Py, Zy, cb), oy = yb(bb - Zy, Wy, hy - cb), By = Jy(oy) === Ey && Uy.h[oy].meta.rot === fy, Ky = 1 === sy.b[Jy(yb(bb, Wy - 1, hy))] || -1 === sy.b[Jy(yb(bb, Wy + 1, hy))];
          if (Ky || By || function(yb, bb, Wy) {
              if (Jy(yb) !== ly) return !1;
              const [hy, fy] = sy.e[Uy.h[yb].meta.rot - 1], [Zy, cb] = (0, sy.K)(Uy.h[yb].name, hy, fy);
              return bb === Zy && Wy === cb
            }(oy, Zy, cb) || Py(-Zy, -cb)) return null;
          const ey = Py(-cb, Zy),
            qb = Py(cb, -Zy);
          if (ey === qb) return null;
          return ey ? "turnLeft" : "turnRight"
        }(yb, bb, Wy, hy, Py)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Ry, this.rootId = (0, Uy.l)(Oy.j)
      }
      handles(yb) {
        var bb;
        return (null === (bb = Uy.h[yb]) || void 0 === bb ? void 0 : bb.meta.rootId) === this.rootId
      }
      affects(yb) {
        return this.handles(yb)
      }
      shape(yb, bb, Wy, hy, fy, Zy) {
        const cb = vb(fy);
        return (0, Uy.l)((Py = cb.rot, null !== (oy = Zy ? this.reshapedHalf(yb, bb, Wy, hy, cb) : this.placedHalf(yb, bb, Wy, hy, cb.rot)) ? (0, Oy.c)(Oy.j, Py, oy) : 1 === Py ? Oy.j : `${Oy.j}|meta|rot${Py}`));
        var Py, oy
      }
      placedHalf(yb, bb, Wy, Uy, hy) {
        const [fy, Zy] = Gy.e[hy];
        for (const [cb, Py] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const oy = bb + Py * fy,
            By = Uy + Py * Zy,
            Ky = ib(yb, oy, Wy, By);
          if (null !== Ky && Ky.rot === hy && (null === Ky.half || !My(yb, oy, Wy, By, Ky))) return cb
        }
        return null
      }
      reshapedHalf(yb, bb, Wy, Uy, hy) {
        if (null !== hy.half && My(yb, bb, Wy, Uy, hy)) return hy.half;
        for (const fy of ["right", "left"]) {
          const [Zy, cb] = (0, Oy.i)(hy.rot, fy), Py = ib(yb, bb + Zy, Wy, Uy + cb);
          if (null !== Py && Py.rot === hy.rot && Py.half === Oy.l[fy]) return fy
        }
        return null
      }
    }, new Yy.c];

    function ny(yb, bb, Wy, Uy, hy) {
      let fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Zy of Xy)
        if (Zy.handles(hy)) return Zy.shape(yb, bb, Wy, Uy, hy, fy);
      return hy
    }

    function uy(yb) {
      for (const Uy of Xy) {
        var bb, Wy;
        if (Uy.handles(yb)) return null !== (bb = null === (Wy = Uy.placedBy) || void 0 === Wy ? void 0 : Wy.call(Uy, yb)) && void 0 !== bb ? bb : null
      }
      return null
    }
  },
  37114: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Oy,
      d: () => Ty,
      e: () => Cy
    });
    var Uy = Wy(8459),
      hy = Wy(8488),
      fy = Wy(8551),
      Zy = Wy(37116),
      cb = Wy(8543);
    const Py = (0, Zy.F)("pipe"),
      oy = (0, Zy.F)("tank"),
      By = (0, Zy.F)("port"),
      Ky = "Reactor Port";

    function ey(yb, bb, Wy) {
      const Uy = new Set([fy.f, fy.d, Ky, ...bb, ...Wy, ...yb ? [Zy.m] : []]);
      return {
        makers: new Set(bb),
        roots: Uy
      }
    }
    const qb = {
        water: ey(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Zy.e]),
        cryo: ey(!1, [Zy.e], [])
      },
      sy = new Set([...qb.water.roots, ...qb.cryo.roots]),
      Sy = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Ey = hy.g.map((yb => Sy[yb])),
      ly = Ey.map((yb => {
        let [bb, Wy, Uy] = yb;
        return Zy.v.findIndex((yb => {
          let [hy, fy, Zy] = yb;
          return hy === bb && fy === Wy && Zy === Uy
        }))
      }));

    function mb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Wy = Uy.h[yb],
        hy = null === Wy || void 0 === Wy ? void 0 : Wy.meta.rootName,
        ey = qb[bb];
      if (!hy || !ey.roots.has(hy)) return null;
      if ((0, fy.l)(hy)) return (0, Zy.E)(Wy.name) === bb ? Py : null;
      if (hy === Zy.m) return oy;
      if (hy === Ky) return Wy.name.endsWith("|Water") ? By : null;
      const [sy, Sy] = cb.e[(Wy.meta.rot || 1) - 1];
      return (0, Zy.F)(ey.makers.has(hy) ? "maker" : "user", [-sy, 0, -Sy])
    }

    function Cy(yb, bb, Wy, hy) {
      let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: cb
      } = qb[fy];
      return Ey.some(((oy, By) => {
        var Ky, ey;
        let [qb, sy, Sy] = oy;
        const Ey = yb(bb + qb, Wy + sy, hy + Sy),
          Cy = mb(Ey, fy);
        return null !== Cy && cb.has(null !== (Ky = null === (ey = Uy.h[Ey]) || void 0 === ey ? void 0 : ey.meta.rootName) && void 0 !== Ky ? Ky : "") && !(0, Zy.G)(Py, Cy, ly[By])
      }))
    }

    function Ty(yb) {
      const bb = Uy.h[yb];
      return bb ? (0, Zy.E)(bb.name) : null
    }
    let Vy = null;

    function Jy(yb) {
      if (!Vy) {
        Vy = new Map;
        for (const yb of ["water", "cryo"])
          for (let bb = 0; bb < 64; bb++)
            for (const Wy of [!1, !0]) Vy.set((0, fy.n)(yb, bb, Wy), {
              TW: yb,
              mask: bb,
              full: Wy
            })
      }
      return Vy.get(yb)
    }
    const gb = new Map(Array.from({
      length: fy.j + 1
    }, ((yb, bb) => [(0, fy.p)(bb), bb])));

    function Gy(yb, bb, Wy, hy, fy, Zy) {
      return Ey.some(((cb, Py) => {
        var oy, By, Ky;
        let [ey, qb, sy] = cb;
        if (0 === (Zy >> Py & 1)) return !1;
        const Sy = null !== (oy = null === (By = Uy.h[yb(bb + ey, Wy + qb, hy + sy)]) || void 0 === By ? void 0 : By.name) && void 0 !== oy ? oy : "",
          Ey = Jy(Sy);
        return Ey ? Ey.TW === fy && Ey.full : (null !== (Ky = function(yb) {
          var bb;
          return null !== (bb = gb.get(yb)) && void 0 !== bb ? bb : null
        }(Sy)) && void 0 !== Ky ? Ky : 0) > 0
      }))
    }
    class Oy {
      constructor() {
        this.reshapeOffsets = Ey
      }
      handles(yb) {
        return null !== Ty(yb)
      }
      affects(yb) {
        var bb, Wy;
        return sy.has(null !== (bb = null === (Wy = Uy.h[yb]) || void 0 === Wy ? void 0 : Wy.meta.rootName) && void 0 !== bb ? bb : "")
      }
      placedBy(yb) {
        var bb;
        return (null === (bb = Uy.h[yb]) || void 0 === bb ? void 0 : bb.meta.rootName) === fy.d ? fy.f : null
      }
      shape(yb, bb, Wy, hy, cb, oy) {
        var By, Ky, ey;
        const qb = null !== (By = null === (Ky = Uy.h[cb]) || void 0 === Ky ? void 0 : Ky.name) && void 0 !== By ? By : "",
          sy = oy || qb !== fy.f ? null !== (ey = (0, Zy.E)(qb)) && void 0 !== ey ? ey : "water" : function(yb, bb, Wy, Uy) {
            return Ey.some(((hy, fy) => {
              let [cb, oy, By] = hy;
              const Ky = mb(yb(bb + cb, Wy + oy, Uy + By), "cryo");
              return null !== Ky && "port" !== Ky.kind && (0, Zy.G)(Py, Ky, ly[fy])
            })) ? "cryo" : "water"
          }(yb, bb, Wy, hy),
          Sy = function(yb, bb, Wy, Uy) {
            let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              fy = 0;
            return Ey.forEach(((cb, oy) => {
              let [By, Ky, ey] = cb;
              const qb = mb(yb(bb + By, Wy + Ky, Uy + ey), hy);
              qb && (0, Zy.G)(Py, qb, ly[oy]) && (fy |= 1 << oy)
            })), fy
          }(yb, bb, Wy, hy, sy),
          Cy = oy ? function(yb) {
            var bb;
            return !0 === (null === (bb = Jy(yb)) || void 0 === bb ? void 0 : bb.full)
          }(qb) : Gy(yb, bb, Wy, hy, sy, Sy);
        return (0, Uy.l)((0, fy.n)(sy, Sy, Cy))
      }
    }
  },
  36877: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      d: () => fy
    });
    const Uy = ["Chest", "Loot Chest", "Moonstone Chest"],
      hy = [{
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

    function fy(yb) {
      return hy.find((bb => bb.exactMatch ? yb === bb.name : yb.includes(bb.name)))
    }
  },
  35662: (yb, bb, Wy) => {
    function Uy(yb) {
      return yb.includes("Leaf Bed")
    }

    function hy(yb) {
      return / Bed(?: Head)?(?:\||$)/.test(yb) && !Uy(yb)
    }

    function fy(yb) {
      return yb.includes(" Strongbed")
    }

    function Zy(yb) {
      return Uy(yb) || hy(yb) || fy(yb)
    }
    Wy.d(bb, {
      e: () => Zy,
      f: () => Uy,
      g: () => fy,
      k: () => hy
    })
  },
  35658: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy
    });
    var Uy = Wy(35662),
      hy = Wy(8459);
    const fy = [],
      Zy = [],
      cb = [],
      Py = [];
    for (const By of Object.keys(hy.m))(0, Uy.f)(By) ? fy.push(By) : (0, Uy.k)(By) && Zy.push(By), (0, Uy.g)(By) && cb.push(By), (By.includes(" Bed Head") || By.includes(" Strongbed Head")) && Py.push(By);
    const oy = {
      leafBeds: fy,
      woolBeds: Zy,
      strongBeds: cb,
      beds: [...fy, ...Zy, ...cb],
      bedHeads: Py,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);