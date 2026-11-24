export const id = 247;
export const ids = [247];
export const modules = {
  38281: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp,
      h: () => Op,
      i: () => xp,
      l: () => op,
      o: () => Sp,
      q: () => Ip
    });
    const Op = 1.001,
      op = .501,
      Ip = .025,
      Sp = .75,
      xp = .08,
      Lp = 4;

    function Yp() {
      const pp = op,
        ip = Ip,
        cp = pp - ip / 2,
        Op = (2 * pp - 2 * ip) / (2 * Lp - 1),
        Sp = [];
      for (const op of [-cp, cp])
        for (const Ip of [-cp, cp])
          for (let cp = 0; cp < Lp; cp++) {
            const xp = -pp + ip + Op * (2 * cp + .5);
            Sp.push([Op, ip, ip, xp, op, Ip]), Sp.push([ip, Op, ip, op, xp, Ip]), Sp.push([ip, ip, Op, op, Ip, xp])
          }
      for (const op of [-cp, cp])
        for (const pp of [-cp, cp])
          for (const Op of [-cp, cp]) Sp.push([ip, ip, ip, op, pp, Op]);
      return Sp
    }
  },
  38636: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => Pp,
      D: () => Up,
      G: () => vp,
      J: () => op,
      b: () => Dp,
      e: () => Lp,
      h: () => Hp,
      i: () => Yp,
      k: () => xp,
      m: () => Sp,
      o: () => Ip,
      p: () => kp,
      s: () => Wp,
      t: () => jp,
      x: () => mp,
      y: () => ep,
      z: () => dp
    });
    var Op = cp(9427);

    function op(pp) {
      return Math.floor(pp).toLocaleString("en-US")
    }
    const Ip = 2e3,
      Sp = .005,
      xp = .001,
      Lp = 2,
      Yp = "Fluid Tank",
      Dp = "Coolant Mixer",
      Ap = 144;

    function Pp(pp) {
      const ip = pp.split("|")[0];
      return (0, Op.i)(ip) ? ip === Op.c ? "cryo" : "water" : null
    }
    const Wp = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      yp = 63;

    function Up(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const cp = ip ? function(pp, ip, cp) {
        const Op = Wp.findIndex((Op => {
          let [op, Ip, Sp] = Op;
          return op === pp && Ip === ip && Sp === cp
        }));
        return Op < 0 ? 0 : 1 << Op
      }(ip[0], ip[1], ip[2]) : 0;
      return "maker" === pp ? {
        kind: pp,
        faces: cp
      } : "user" === pp ? {
        kind: pp,
        faces: yp & ~cp
      } : {
        kind: pp,
        faces: yp
      }
    }

    function wp(pp) {
      return "pipe" === pp || "tank" === pp || "maker" === pp
    }

    function vp(pp, ip, cp) {
      return 0 !== (pp.faces & 1 << cp) && 0 !== (ip.faces & 1 << (1 ^ cp)) && (wp(pp.kind) || wp(ip.kind))
    }
    const tp = (pp, ip, cp, Op) => ({
        input: pp,
        inputAmount: Op,
        output: ip,
        outputAmount: cp
      }),
      Hp = {
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
          recipes: [tp("Uranium Grit", "Uranium Pellet", 1, 12), tp("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [tp("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Ap,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function dp(pp, ip) {
      return 1e3 * (null !== ip && void 0 !== ip ? ip : 0) / pp.opMs
    }

    function ep(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cp = dp(Hp["Coolant Mixer"], Ap) * ip;
      return pp <= 0 ? 0 : Math.ceil(pp / cp - 1e-9)
    }
    const jp = "baf2Water",
      kp = "baf2waterclose",
      mp = "baf2wateropen"
  },
  38624: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Qp,
      e: () => Jp
    });
    var Op = cp(9338),
      op = cp(9375);
    const Ip = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Sp = cp(9392),
      xp = cp(38438),
      Lp = cp(9385);
    const Yp = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Dp(pp) {
      let [ip, cp] = pp;
      return [-cp, ip]
    }

    function Ap(pp, ip) {
      return pp[0] === ip[0] && pp[1] === ip[1]
    }

    function Pp(pp, ip) {
      return pp[0] * ip[0] + pp[1] * ip[1] === 0
    }
    const Wp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var yp = cp(9422);

    function Up(pp, ip, cp, Op, op) {
      return ip < yp.v || ip >= yp.v + yp.w || Math.floor(pp / yp.B) === Math.floor(Op / yp.B) && Math.floor(cp / yp.B) === Math.floor(op / yp.B)
    }
    const wp = "Splitter",
      vp = "Sorting Gate",
      tp = new Set(yp.N),
      Hp = new Set([...yp.N, "Belt Loader", "Fast Loader", vp]),
      dp = new Set(yp.z),
      ep = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function jp(pp) {
      var ip, cp;
      return null !== (ip = null === (cp = Op.e[pp]) || void 0 === cp ? void 0 : cp.meta.rootName) && void 0 !== ip ? ip : ""
    }

    function kp(pp) {
      return jp(pp) === yp.l && (0, yp.U)(Op.e[pp].name)
    }
    var mp = cp(9383),
      Rp = cp(9404);
    const qp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Mp(pp) {
      var ip, cp;
      const op = null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta;
      return (null === op || void 0 === op ? void 0 : op.rootName) !== Rp.p ? null : {
        rot: null !== (cp = op.rot) && void 0 !== cp ? cp : 1,
        half: (0, Rp.i)(op.rootName, op.metaStr)
      }
    }

    function Cp(pp, ip, cp, Op) {
      return Mp(pp(ip, cp, Op))
    }

    function Ep(pp, ip, cp, Op, op) {
      let {
        rot: Ip,
        half: Sp
      } = op;
      const [xp, Lp] = (0, Rp.o)(Ip, Sp), Yp = Cp(pp, ip + xp, cp, Op + Lp);
      return null !== Yp && Yp.rot === Ip && Yp.half === Rp.q[Sp]
    }
    var Xp = cp(38633);
    const lp = [new class {
      constructor() {
        this.reshapeOffsets = Wp
      }
      handles(pp) {
        var ip;
        return "Stairs" === (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.model)
      }
      affects(pp) {
        return this.handles(pp)
      }
      shape(pp, ip, cp, op, Ip) {
        const Sp = this.stairsOf(Ip),
          xp = this.cornerAt(pp, ip, cp, op, Sp),
          Yp = Sp.half === Lp.c.top ? "top" : "bot";
        return (0, Op.f)(`${Op.e[Ip].meta.rootName}|meta|rot${Sp.rot}|${Yp}${null===xp?"":`|${xp}`}`)
      }
      stairsOf(pp) {
        const {
          rot: ip,
          halfblockPlacement: cp
        } = Op.e[pp].meta;
        return {
          rot: ip,
          half: cp
        }
      }
      stairsAt(pp, ip, cp, Op) {
        const op = pp(ip, cp, Op);
        return this.handles(op) ? this.stairsOf(op) : null
      }
      cornerAt(pp, ip, cp, Op, op) {
        let {
          rot: Ip,
          half: Sp
        } = op;
        const xp = Yp[Ip],
          Lp = op => {
            let [xp, Lp] = op;
            const Yp = this.stairsAt(pp, ip + xp, cp, Op + Lp);
            return null !== Yp && Yp.rot === Ip && Yp.half === Sp
          },
          Wp = this.stairsAt(pp, ip + xp[0], cp, Op + xp[1]);
        if (null !== Wp && Wp.half === Sp) {
          const pp = Yp[Wp.rot];
          if (Pp(xp, pp) && !Lp([-pp[0], -pp[1]])) return Ap(pp, Dp(xp)) ? "outerLeft" : "outerRight"
        }
        const yp = this.stairsAt(pp, ip - xp[0], cp, Op - xp[1]);
        if (null !== yp && yp.half === Sp) {
          const pp = Yp[yp.rot];
          if (Pp(xp, pp) && !Lp(pp)) return Ap(pp, Dp(xp)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Ip, this.rootIds = new Set(op.i.map((pp => (0, Op.f)(pp))))
      }
      handles(pp) {
        var ip;
        const cp = null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta;
        return void 0 !== cp && this.rootIds.has(cp.rootId)
      }
      affects(pp) {
        return this.handles(pp)
      }
      placedBy(pp) {
        return Op.e[pp].meta.rootName === op.p ? null : op.p
      }
      shape(pp, ip, cp, Ip, Sp) {
        const {
          rootId: xp,
          rootName: Lp,
          rot: Yp
        } = Op.e[Sp].meta;
        let Dp = 0;
        return op.x[Yp].forEach(((op, Sp) => {
          var Lp;
          let [Ap, Pp, Wp] = op;
          const yp = null === (Lp = Op.e[pp(ip + Ap, cp + Pp, Ip + Wp)]) || void 0 === Lp ? void 0 : Lp.meta;
          (null === yp || void 0 === yp ? void 0 : yp.rootId) === xp && yp.rot === Yp && (Dp |= 1 << Sp)
        })), (0, Op.f)((0, op.f)(Lp, Yp, Dp))
      }
    }, ...Sp.b.map((pp => new xp.e(pp))), new class {
      constructor() {
        this.reshapeOffsets = ep
      }
      handles(pp) {
        const ip = jp(pp);
        return tp.has(ip) || ip === yp.l
      }
      affects(pp) {
        const ip = jp(pp);
        return Hp.has(ip) || dp.has(ip) || ip === wp || ip === yp.l || void 0 !== yp.e[ip]
      }
      shape(pp, ip, cp, op, Ip, Sp) {
        const {
          rootName: xp,
          rot: Lp
        } = Op.e[Ip].meta;
        return xp === yp.l ? Sp ? Ip : function(pp, ip, cp, op, Ip) {
          const [Sp, xp] = yp.h[Ip - 1];
          for (let Lp = 1; Lp <= yp.J; Lp++) {
            const [Yp, Dp] = [ip - Sp * Lp, op - xp * Lp], Ap = pp(Yp, cp, Dp);
            if (jp(Ap) === yp.l && Op.e[Ap].meta.rot === Ip && Up(ip, cp, op, Yp, Dp)) return (0, Op.f)((0, yp.ab)(Ip, !kp(Ap)))
          }
          return (0, Op.f)((0, yp.ab)(Ip, !1))
        }(pp, ip, cp, op, Lp) : (0, Op.f)((0, yp.P)(xp, Lp, function(pp, ip, cp, op, Ip) {
          const [Sp, xp] = yp.h[Ip - 1], Lp = (Ip, Sp) => function(pp, ip, cp) {
            var op;
            const Ip = null === (op = Op.e[pp]) || void 0 === op ? void 0 : op.meta;
            if (!Ip) return !1;
            const Sp = Ip.rootName,
              xp = Hp.has(Sp) || kp(pp);
            if (!xp && !dp.has(Sp) && Sp !== wp) return !1;
            const [Lp, Yp] = yp.h[Ip.rot - 1];
            if (xp && Lp === -ip && Yp === -cp) return !0;
            if (dp.has(Sp)) return Lp === ip && Yp === cp;
            const Dp = Op.e[pp].name;
            return (Sp === wp ? (0, yp.Y)(Dp, Lp, Yp) : Sp === vp ? [(0, yp.S)(Dp, Lp, Yp)] : []).some((pp => {
              let [Op, op] = pp;
              return Op === -ip && op === -cp
            }))
          }(pp(ip + Ip, cp, op + Sp), Ip, Sp), Yp = pp(ip - Sp, cp, op - xp), Dp = jp(Yp) === wp && Op.e[Yp].meta.rot === Ip, Ap = 1 === yp.e[jp(pp(ip, cp - 1, op))] || -1 === yp.e[jp(pp(ip, cp + 1, op))];
          if (Ap || Dp || Lp(-Sp, -xp)) return null;
          const Pp = Lp(-xp, Sp),
            Wp = Lp(xp, -Sp);
          if (Pp === Wp) return null;
          return Pp ? "turnLeft" : "turnRight"
        }(pp, ip, cp, op, Lp)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = qp, this.rootId = (0, Op.f)(Rp.p)
      }
      handles(pp) {
        var ip;
        return (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta.rootId) === this.rootId
      }
      affects(pp) {
        return this.handles(pp)
      }
      shape(pp, ip, cp, op, Ip, Sp) {
        const xp = Mp(Ip);
        return (0, Op.f)((Lp = xp.rot, null !== (Yp = Sp ? this.reshapedHalf(pp, ip, cp, op, xp) : this.placedHalf(pp, ip, cp, op, xp.rot)) ? (0, Rp.e)(Rp.p, Lp, Yp) : 1 === Lp ? Rp.p : `${Rp.p}|meta|rot${Lp}`));
        var Lp, Yp
      }
      placedHalf(pp, ip, cp, Op, op) {
        const [Ip, Sp] = mp.e[op];
        for (const [xp, Lp] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Yp = ip + Lp * Ip,
            Dp = Op + Lp * Sp,
            Ap = Cp(pp, Yp, cp, Dp);
          if (null !== Ap && Ap.rot === op && (null === Ap.half || !Ep(pp, Yp, cp, Dp, Ap))) return xp
        }
        return null
      }
      reshapedHalf(pp, ip, cp, Op, op) {
        if (null !== op.half && Ep(pp, ip, cp, Op, op)) return op.half;
        for (const Ip of ["right", "left"]) {
          const [Sp, xp] = (0, Rp.o)(op.rot, Ip), Lp = Cp(pp, ip + Sp, cp, Op + xp);
          if (null !== Lp && Lp.rot === op.rot && Lp.half === Rp.q[Ip]) return Ip
        }
        return null
      }
    }, new Xp.c];

    function Qp(pp, ip, cp, Op, op) {
      let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Sp of lp)
        if (Sp.handles(op)) return Sp.shape(pp, ip, cp, Op, op, Ip);
      return op
    }

    function Jp(pp) {
      for (const Op of lp) {
        var ip, cp;
        if (Op.handles(pp)) return null !== (ip = null === (cp = Op.placedBy) || void 0 === cp ? void 0 : cp.call(Op, pp)) && void 0 !== ip ? ip : null
      }
      return null
    }
  },
  38633: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Rp,
      e: () => dp,
      h: () => Hp
    });
    var Op = cp(9338),
      op = cp(9359),
      Ip = cp(9427),
      Sp = cp(38636),
      xp = cp(9422);
    const Lp = (0, Sp.D)("pipe"),
      Yp = (0, Sp.D)("tank"),
      Dp = (0, Sp.D)("port"),
      Ap = "Reactor Port";

    function Pp(pp, ip, cp) {
      const Op = new Set([Ip.d, Ip.c, Ap, ...ip, ...cp, ...pp ? [Sp.i] : []]);
      return {
        makers: new Set(ip),
        roots: Op
      }
    }
    const Wp = {
        water: Pp(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Sp.b]),
        cryo: Pp(!1, [Sp.b], [])
      },
      yp = new Set([...Wp.water.roots, ...Wp.cryo.roots]),
      Up = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      wp = op.g.map((pp => Up[pp])),
      vp = wp.map((pp => {
        let [ip, cp, Op] = pp;
        return Sp.s.findIndex((pp => {
          let [op, Ip, Sp] = pp;
          return op === ip && Ip === cp && Sp === Op
        }))
      }));

    function tp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const cp = Op.e[pp],
        op = null === cp || void 0 === cp ? void 0 : cp.meta.rootName,
        Pp = Wp[ip];
      if (!op || !Pp.roots.has(op)) return null;
      if ((0, Ip.i)(op)) return (0, Sp.B)(cp.name) === ip ? Lp : null;
      if (op === Sp.i) return Yp;
      if (op === Ap) return cp.name.endsWith("|Water") ? Dp : null;
      const [yp, Up] = xp.h[(cp.meta.rot || 1) - 1];
      return (0, Sp.D)(Pp.makers.has(op) ? "maker" : "user", [-yp, 0, -Up])
    }

    function Hp(pp, ip, cp, op) {
      let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: xp
      } = Wp[Ip];
      return wp.some(((Yp, Dp) => {
        var Ap, Pp;
        let [Wp, yp, Up] = Yp;
        const wp = pp(ip + Wp, cp + yp, op + Up),
          Hp = tp(wp, Ip);
        return null !== Hp && xp.has(null !== (Ap = null === (Pp = Op.e[wp]) || void 0 === Pp ? void 0 : Pp.meta.rootName) && void 0 !== Ap ? Ap : "") && !(0, Sp.G)(Lp, Hp, vp[Dp])
      }))
    }

    function dp(pp) {
      const ip = Op.e[pp];
      return ip ? (0, Sp.B)(ip.name) : null
    }
    let ep = null;

    function jp(pp) {
      if (!ep) {
        ep = new Map;
        for (const pp of ["water", "cryo"])
          for (let ip = 0; ip < 64; ip++)
            for (const cp of [!1, !0]) ep.set((0, Ip.j)(pp, ip, cp), {
              tW: pp,
              mask: ip,
              full: cp
            })
      }
      return ep.get(pp)
    }
    const kp = new Map(Array.from({
      length: Ip.h + 1
    }, ((pp, ip) => [(0, Ip.m)(ip), ip])));

    function mp(pp, ip, cp, op, Ip, Sp) {
      return wp.some(((xp, Lp) => {
        var Yp, Dp, Ap;
        let [Pp, Wp, yp] = xp;
        if (0 === (Sp >> Lp & 1)) return !1;
        const Up = null !== (Yp = null === (Dp = Op.e[pp(ip + Pp, cp + Wp, op + yp)]) || void 0 === Dp ? void 0 : Dp.name) && void 0 !== Yp ? Yp : "",
          wp = jp(Up);
        return wp ? wp.tW === Ip && wp.full : (null !== (Ap = function(pp) {
          var ip;
          return null !== (ip = kp.get(pp)) && void 0 !== ip ? ip : null
        }(Up)) && void 0 !== Ap ? Ap : 0) > 0
      }))
    }
    class Rp {
      constructor() {
        this.reshapeOffsets = wp
      }
      handles(pp) {
        return null !== dp(pp)
      }
      affects(pp) {
        var ip, cp;
        return yp.has(null !== (ip = null === (cp = Op.e[pp]) || void 0 === cp ? void 0 : cp.meta.rootName) && void 0 !== ip ? ip : "")
      }
      placedBy(pp) {
        var ip;
        return (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta.rootName) === Ip.c ? Ip.d : null
      }
      shape(pp, ip, cp, op, xp, Yp) {
        var Dp, Ap, Pp;
        const Wp = null !== (Dp = null === (Ap = Op.e[xp]) || void 0 === Ap ? void 0 : Ap.name) && void 0 !== Dp ? Dp : "",
          yp = Yp || Wp !== Ip.d ? null !== (Pp = (0, Sp.B)(Wp)) && void 0 !== Pp ? Pp : "water" : function(pp, ip, cp, Op) {
            return wp.some(((op, Ip) => {
              let [xp, Yp, Dp] = op;
              const Ap = tp(pp(ip + xp, cp + Yp, Op + Dp), "cryo");
              return null !== Ap && "port" !== Ap.kind && (0, Sp.G)(Lp, Ap, vp[Ip])
            })) ? "cryo" : "water"
          }(pp, ip, cp, op),
          Up = function(pp, ip, cp, Op) {
            let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Ip = 0;
            return wp.forEach(((xp, Yp) => {
              let [Dp, Ap, Pp] = xp;
              const Wp = tp(pp(ip + Dp, cp + Ap, Op + Pp), op);
              Wp && (0, Sp.G)(Lp, Wp, vp[Yp]) && (Ip |= 1 << Yp)
            })), Ip
          }(pp, ip, cp, op, yp),
          Hp = Yp ? function(pp) {
            var ip;
            return !0 === (null === (ip = jp(pp)) || void 0 === ip ? void 0 : ip.full)
          }(Wp) : mp(pp, ip, cp, op, yp, Up);
        return (0, Op.f)((0, Ip.j)(yp, Up, Hp))
      }
    }
  },
  38399: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      e: () => Ip
    });
    const Op = ["Chest", "Loot Chest", "Moonstone Chest"],
      op = [{
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

    function Ip(pp) {
      return op.find((ip => ip.exactMatch ? pp === ip.name : pp.includes(ip.name)))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);