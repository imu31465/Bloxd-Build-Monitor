export const id = 236;
export const ids = [236];
export const modules = {
  38251: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      i: () => pd,
      k: () => Zd,
      m: () => Nd,
      p: () => Pd,
      r: () => Wd
    });
    const pd = 1.001,
      Nd = .501,
      Wd = .025,
      Pd = .75,
      Zd = .08,
      gd = 4;

    function Cd() {
      const dd = Nd,
        Jd = Wd,
        kd = dd - Jd / 2,
        pd = (2 * dd - 2 * Jd) / (2 * gd - 1),
        Pd = [];
      for (const Nd of [-kd, kd])
        for (const Wd of [-kd, kd])
          for (let kd = 0; kd < gd; kd++) {
            const Zd = -dd + Jd + pd * (2 * kd + .5);
            Pd.push([pd, Jd, Jd, Zd, Nd, Wd]), Pd.push([Jd, pd, Jd, Nd, Zd, Wd]), Pd.push([Jd, Jd, pd, Nd, Wd, Zd])
          }
      for (const Nd of [-kd, kd])
        for (const dd of [-kd, kd])
          for (const pd of [-kd, kd]) Pd.push([Jd, Jd, Jd, Nd, dd, pd]);
      return Pd
    }
  },
  38571: (dd, Jd, kd) => {
    kd.d(Jd, {
      D: () => qd,
      G: () => sd,
      H: () => xd,
      L: () => vd,
      M: () => ld,
      P: () => Od,
      Q: () => Rd,
      S: () => Nd,
      d: () => Kd,
      g: () => gd,
      j: () => Gd,
      n: () => Cd,
      r: () => Zd,
      t: () => Pd,
      v: () => Wd,
      w: () => Bd,
      z: () => Qd
    });
    var pd = kd(9417);

    function Nd(dd) {
      return Math.floor(dd).toLocaleString("en-US")
    }
    const Wd = 2e3,
      Pd = .005,
      Zd = .001,
      gd = 2,
      Cd = "Fluid Tank",
      Kd = "Coolant Mixer",
      od = 144;

    function ld(dd) {
      const Jd = dd.split("|")[0];
      return (0, pd.l)(Jd) ? Jd === pd.e ? "cryo" : "water" : null
    }
    const Qd = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Ld = 63;

    function Od(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const kd = Jd ? function(dd, Jd, kd) {
        const pd = Qd.findIndex((pd => {
          let [Nd, Wd, Pd] = pd;
          return Nd === dd && Wd === Jd && Pd === kd
        }));
        return pd < 0 ? 0 : 1 << pd
      }(Jd[0], Jd[1], Jd[2]) : 0;
      return "maker" === dd ? {
        kind: dd,
        faces: kd
      } : "user" === dd ? {
        kind: dd,
        faces: Ld & ~kd
      } : {
        kind: dd,
        faces: Ld
      }
    }

    function ed(dd) {
      return "pipe" === dd || "tank" === dd || "maker" === dd
    }

    function Rd(dd, Jd, kd) {
      return 0 !== (dd.faces & 1 << kd) && 0 !== (Jd.faces & 1 << (1 ^ kd)) && (ed(dd.kind) || ed(Jd.kind))
    }
    const Id = (dd, Jd, kd, pd) => ({
        input: dd,
        inputAmount: pd,
        output: Jd,
        outputAmount: kd
      }),
      Gd = {
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
          recipes: [Id("Uranium Grit", "Uranium Pellet", 1, 12), Id("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Id("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: od,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function vd(dd, Jd) {
      return 1e3 * (null !== Jd && void 0 !== Jd ? Jd : 0) / dd.opMs
    }

    function xd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const kd = vd(Gd["Coolant Mixer"], od) * Jd;
      return dd <= 0 ? 0 : Math.ceil(dd / kd - 1e-9)
    }
    const qd = "baf2Water",
      Bd = "baf2waterclose",
      sd = "baf2wateropen"
  },
  38556: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => jd,
      h: () => Xd
    });
    var pd = kd(9331),
      Nd = kd(9374);
    const Wd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Pd = kd(9385),
      Zd = kd(38394),
      gd = kd(9383);
    const Cd = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Kd(dd) {
      let [Jd, kd] = dd;
      return [-kd, Jd]
    }

    function od(dd, Jd) {
      return dd[0] === Jd[0] && dd[1] === Jd[1]
    }

    function ld(dd, Jd) {
      return dd[0] * Jd[0] + dd[1] * Jd[1] === 0
    }
    const Qd = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Ld = kd(9413);

    function Od(dd, Jd, kd, pd, Nd) {
      return Jd < Ld.u || Jd >= Ld.u + Ld.v || Math.floor(dd / Ld.A) === Math.floor(pd / Ld.A) && Math.floor(kd / Ld.A) === Math.floor(Nd / Ld.A)
    }
    const ed = "Splitter",
      Rd = "Sorting Gate",
      Id = new Set(Ld.J),
      Gd = new Set([...Ld.J, "Belt Loader", "Fast Loader", Rd]),
      vd = new Set(Ld.w),
      xd = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function qd(dd) {
      var Jd, kd;
      return null !== (Jd = null === (kd = pd.g[dd]) || void 0 === kd ? void 0 : kd.meta.rootName) && void 0 !== Jd ? Jd : ""
    }

    function Bd(dd) {
      return qd(dd) === Ld.l && (0, Ld.U)(pd.g[dd].name)
    }
    var sd = kd(9381),
      ad = kd(9396);
    const Md = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Fd(dd) {
      var Jd, kd;
      const Nd = null === (Jd = pd.g[dd]) || void 0 === Jd ? void 0 : Jd.meta;
      return (null === Nd || void 0 === Nd ? void 0 : Nd.rootName) !== ad.k ? null : {
        rot: null !== (kd = Nd.rot) && void 0 !== kd ? kd : 1,
        half: (0, ad.e)(Nd.rootName, Nd.metaStr)
      }
    }

    function Yd(dd, Jd, kd, pd) {
      return Fd(dd(Jd, kd, pd))
    }

    function md(dd, Jd, kd, pd, Nd) {
      let {
        rot: Wd,
        half: Pd
      } = Nd;
      const [Zd, gd] = (0, ad.g)(Wd, Pd), Cd = Yd(dd, Jd + Zd, kd, pd + gd);
      return null !== Cd && Cd.rot === Wd && Cd.half === ad.l[Pd]
    }
    var bd = kd(38562);
    const Sd = [new class {
      constructor() {
        this.reshapeOffsets = Qd
      }
      handles(dd) {
        var Jd;
        return "Stairs" === (null === (Jd = pd.g[dd]) || void 0 === Jd ? void 0 : Jd.model)
      }
      affects(dd) {
        return this.handles(dd)
      }
      shape(dd, Jd, kd, Nd, Wd) {
        const Pd = this.stairsOf(Wd),
          Zd = this.cornerAt(dd, Jd, kd, Nd, Pd),
          Cd = Pd.half === gd.c.top ? "top" : "bot";
        return (0, pd.j)(`${pd.g[Wd].meta.rootName}|meta|rot${Pd.rot}|${Cd}${null===Zd?"":`|${Zd}`}`)
      }
      stairsOf(dd) {
        const {
          rot: Jd,
          halfblockPlacement: kd
        } = pd.g[dd].meta;
        return {
          rot: Jd,
          half: kd
        }
      }
      stairsAt(dd, Jd, kd, pd) {
        const Nd = dd(Jd, kd, pd);
        return this.handles(Nd) ? this.stairsOf(Nd) : null
      }
      cornerAt(dd, Jd, kd, pd, Nd) {
        let {
          rot: Wd,
          half: Pd
        } = Nd;
        const Zd = Cd[Wd],
          gd = Nd => {
            let [Zd, gd] = Nd;
            const Cd = this.stairsAt(dd, Jd + Zd, kd, pd + gd);
            return null !== Cd && Cd.rot === Wd && Cd.half === Pd
          },
          Qd = this.stairsAt(dd, Jd + Zd[0], kd, pd + Zd[1]);
        if (null !== Qd && Qd.half === Pd) {
          const dd = Cd[Qd.rot];
          if (ld(Zd, dd) && !gd([-dd[0], -dd[1]])) return od(dd, Kd(Zd)) ? "outerLeft" : "outerRight"
        }
        const Ld = this.stairsAt(dd, Jd - Zd[0], kd, pd - Zd[1]);
        if (null !== Ld && Ld.half === Pd) {
          const dd = Cd[Ld.rot];
          if (ld(Zd, dd) && !gd(dd)) return od(dd, Kd(Zd)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Wd, this.rootIds = new Set(Nd.g.map((dd => (0, pd.j)(dd))))
      }
      handles(dd) {
        var Jd;
        const kd = null === (Jd = pd.g[dd]) || void 0 === Jd ? void 0 : Jd.meta;
        return void 0 !== kd && this.rootIds.has(kd.rootId)
      }
      affects(dd) {
        return this.handles(dd)
      }
      placedBy(dd) {
        return pd.g[dd].meta.rootName === Nd.m ? null : Nd.m
      }
      shape(dd, Jd, kd, Wd, Pd) {
        const {
          rootId: Zd,
          rootName: gd,
          rot: Cd
        } = pd.g[Pd].meta;
        let Kd = 0;
        return Nd.r[Cd].forEach(((Nd, Pd) => {
          var gd;
          let [od, ld, Qd] = Nd;
          const Ld = null === (gd = pd.g[dd(Jd + od, kd + ld, Wd + Qd)]) || void 0 === gd ? void 0 : gd.meta;
          (null === Ld || void 0 === Ld ? void 0 : Ld.rootId) === Zd && Ld.rot === Cd && (Kd |= 1 << Pd)
        })), (0, pd.j)((0, Nd.c)(gd, Cd, Kd))
      }
    }, ...Pd.c.map((dd => new Zd.b(dd))), new class {
      constructor() {
        this.reshapeOffsets = xd
      }
      handles(dd) {
        const Jd = qd(dd);
        return Id.has(Jd) || Jd === Ld.l
      }
      affects(dd) {
        const Jd = qd(dd);
        return Gd.has(Jd) || vd.has(Jd) || Jd === ed || Jd === Ld.l || void 0 !== Ld.e[Jd]
      }
      shape(dd, Jd, kd, Nd, Wd, Pd) {
        const {
          rootName: Zd,
          rot: gd
        } = pd.g[Wd].meta;
        return Zd === Ld.l ? Pd ? Wd : function(dd, Jd, kd, Nd, Wd) {
          const [Pd, Zd] = Ld.h[Wd - 1];
          for (let gd = 1; gd <= Ld.F; gd++) {
            const [Cd, Kd] = [Jd - Pd * gd, Nd - Zd * gd], od = dd(Cd, kd, Kd);
            if (qd(od) === Ld.l && pd.g[od].meta.rot === Wd && Od(Jd, kd, Nd, Cd, Kd)) return (0, pd.j)((0, Ld.Z)(Wd, !Bd(od)))
          }
          return (0, pd.j)((0, Ld.Z)(Wd, !1))
        }(dd, Jd, kd, Nd, gd) : (0, pd.j)((0, Ld.N)(Zd, gd, function(dd, Jd, kd, Nd, Wd) {
          const [Pd, Zd] = Ld.h[Wd - 1], gd = (Wd, gd) => function(dd, Jd, kd, Nd, Wd) {
            var Pd;
            const Zd = null === (Pd = pd.g[dd]) || void 0 === Pd ? void 0 : Pd.meta;
            if (!Zd) return !1;
            const gd = Zd.rootName,
              Cd = Gd.has(gd) || Bd(dd);
            if (!Cd && !vd.has(gd) && gd !== ed) return !1;
            const [Kd, od] = Ld.h[Zd.rot - 1];
            return Cd ? Kd === -Jd && od === -kd : vd.has(gd) ? Kd === Jd && od === kd : (0, Ld.Y)(pd.g[dd].name, Kd, od).some((dd => {
              let [pd, Nd] = dd;
              return pd === -Jd && Nd === -kd
            })) && !(Nd === Jd && Wd === kd)
          }(dd(Jd + Wd, kd, Nd + gd), Wd, gd, Pd, Zd), Cd = dd(Jd - Pd, kd, Nd - Zd), Kd = qd(Cd) === ed && pd.g[Cd].meta.rot === Wd, od = 1 === Ld.e[qd(dd(Jd, kd - 1, Nd))] || -1 === Ld.e[qd(dd(Jd, kd + 1, Nd))];
          if (od || Kd || function(dd, Jd, kd) {
              if (qd(dd) !== Rd) return !1;
              const [Nd, Wd] = Ld.h[pd.g[dd].meta.rot - 1], [Pd, Zd] = (0, Ld.O)(pd.g[dd].name, Nd, Wd);
              return Jd === Pd && kd === Zd
            }(Cd, Pd, Zd) || gd(-Pd, -Zd)) return null;
          const ld = gd(-Zd, Pd),
            Qd = gd(Zd, -Pd);
          if (ld === Qd) return null;
          return ld ? "turnLeft" : "turnRight"
        }(dd, Jd, kd, Nd, gd)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Md, this.rootId = (0, pd.j)(ad.k)
      }
      handles(dd) {
        var Jd;
        return (null === (Jd = pd.g[dd]) || void 0 === Jd ? void 0 : Jd.meta.rootId) === this.rootId
      }
      affects(dd) {
        return this.handles(dd)
      }
      shape(dd, Jd, kd, Nd, Wd, Pd) {
        const Zd = Fd(Wd);
        return (0, pd.j)((gd = Zd.rot, null !== (Cd = Pd ? this.reshapedHalf(dd, Jd, kd, Nd, Zd) : this.placedHalf(dd, Jd, kd, Nd, Zd.rot)) ? (0, ad.c)(ad.k, gd, Cd) : 1 === gd ? ad.k : `${ad.k}|meta|rot${gd}`));
        var gd, Cd
      }
      placedHalf(dd, Jd, kd, pd, Nd) {
        const [Wd, Pd] = sd.c[Nd];
        for (const [Zd, gd] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Cd = Jd + gd * Wd,
            Kd = pd + gd * Pd,
            od = Yd(dd, Cd, kd, Kd);
          if (null !== od && od.rot === Nd && (null === od.half || !md(dd, Cd, kd, Kd, od))) return Zd
        }
        return null
      }
      reshapedHalf(dd, Jd, kd, pd, Nd) {
        if (null !== Nd.half && md(dd, Jd, kd, pd, Nd)) return Nd.half;
        for (const Wd of ["right", "left"]) {
          const [Pd, Zd] = (0, ad.g)(Nd.rot, Wd), gd = Yd(dd, Jd + Pd, kd, pd + Zd);
          if (null !== gd && gd.rot === Nd.rot && gd.half === ad.l[Wd]) return Wd
        }
        return null
      }
    }, new bd.e];

    function jd(dd, Jd, kd, pd, Nd) {
      let Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Pd of Sd)
        if (Pd.handles(Nd)) return Pd.shape(dd, Jd, kd, pd, Nd, Wd);
      return Nd
    }

    function Xd(dd) {
      for (const pd of Sd) {
        var Jd, kd;
        if (pd.handles(dd)) return null !== (Jd = null === (kd = pd.placedBy) || void 0 === kd ? void 0 : kd.call(pd, dd)) && void 0 !== Jd ? Jd : null
      }
      return null
    }
  },
  38562: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ad,
      h: () => vd,
      j: () => Gd
    });
    var pd = kd(9331),
      Nd = kd(9361),
      Wd = kd(9417),
      Pd = kd(38571),
      Zd = kd(9413);
    const gd = (0, Pd.P)("pipe"),
      Cd = (0, Pd.P)("tank"),
      Kd = (0, Pd.P)("port"),
      od = "Reactor Port";

    function ld(dd, Jd, kd) {
      const pd = new Set([Wd.g, Wd.e, od, ...Jd, ...kd, ...dd ? [Pd.n] : []]);
      return {
        makers: new Set(Jd),
        roots: pd
      }
    }
    const Qd = {
        water: ld(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Pd.d]),
        cryo: ld(!1, [Pd.d], [])
      },
      Ld = new Set([...Qd.water.roots, ...Qd.cryo.roots]),
      Od = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      ed = Nd.e.map((dd => Od[dd])),
      Rd = ed.map((dd => {
        let [Jd, kd, pd] = dd;
        return Pd.z.findIndex((dd => {
          let [Nd, Wd, Pd] = dd;
          return Nd === Jd && Wd === kd && Pd === pd
        }))
      }));

    function Id(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const kd = pd.g[dd],
        Nd = null === kd || void 0 === kd ? void 0 : kd.meta.rootName,
        ld = Qd[Jd];
      if (!Nd || !ld.roots.has(Nd)) return null;
      if ((0, Wd.l)(Nd)) return (0, Pd.M)(kd.name) === Jd ? gd : null;
      if (Nd === Pd.n) return Cd;
      if (Nd === od) return kd.name.endsWith("|Water") ? Kd : null;
      const [Ld, Od] = Zd.h[(kd.meta.rot || 1) - 1];
      return (0, Pd.P)(ld.makers.has(Nd) ? "maker" : "user", [-Ld, 0, -Od])
    }

    function Gd(dd, Jd, kd, Nd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Zd
      } = Qd[Wd];
      return ed.some(((Cd, Kd) => {
        var od, ld;
        let [Qd, Ld, Od] = Cd;
        const ed = dd(Jd + Qd, kd + Ld, Nd + Od),
          Gd = Id(ed, Wd);
        return null !== Gd && Zd.has(null !== (od = null === (ld = pd.g[ed]) || void 0 === ld ? void 0 : ld.meta.rootName) && void 0 !== od ? od : "") && !(0, Pd.Q)(gd, Gd, Rd[Kd])
      }))
    }

    function vd(dd) {
      const Jd = pd.g[dd];
      return Jd ? (0, Pd.M)(Jd.name) : null
    }
    let xd = null;

    function qd(dd) {
      if (!xd) {
        xd = new Map;
        for (const dd of ["water", "cryo"])
          for (let Jd = 0; Jd < 64; Jd++)
            for (const kd of [!1, !0]) xd.set((0, Wd.o)(dd, Jd, kd), {
              dQ: dd,
              mask: Jd,
              full: kd
            })
      }
      return xd.get(dd)
    }
    const Bd = new Map(Array.from({
      length: Wd.i + 1
    }, ((dd, Jd) => [(0, Wd.s)(Jd), Jd])));

    function sd(dd, Jd, kd, Nd, Wd, Pd) {
      return ed.some(((Zd, gd) => {
        var Cd, Kd, od;
        let [ld, Qd, Ld] = Zd;
        if (0 === (Pd >> gd & 1)) return !1;
        const Od = null !== (Cd = null === (Kd = pd.g[dd(Jd + ld, kd + Qd, Nd + Ld)]) || void 0 === Kd ? void 0 : Kd.name) && void 0 !== Cd ? Cd : "",
          ed = qd(Od);
        return ed ? ed.dQ === Wd && ed.full : (null !== (od = function(dd) {
          var Jd;
          return null !== (Jd = Bd.get(dd)) && void 0 !== Jd ? Jd : null
        }(Od)) && void 0 !== od ? od : 0) > 0
      }))
    }
    class ad {
      constructor() {
        this.reshapeOffsets = ed
      }
      handles(dd) {
        return null !== vd(dd)
      }
      affects(dd) {
        var Jd, kd;
        return Ld.has(null !== (Jd = null === (kd = pd.g[dd]) || void 0 === kd ? void 0 : kd.meta.rootName) && void 0 !== Jd ? Jd : "")
      }
      placedBy(dd) {
        var Jd;
        return (null === (Jd = pd.g[dd]) || void 0 === Jd ? void 0 : Jd.meta.rootName) === Wd.e ? Wd.g : null
      }
      shape(dd, Jd, kd, Nd, Zd, Cd) {
        var Kd, od, ld;
        const Qd = null !== (Kd = null === (od = pd.g[Zd]) || void 0 === od ? void 0 : od.name) && void 0 !== Kd ? Kd : "",
          Ld = Cd || Qd !== Wd.g ? null !== (ld = (0, Pd.M)(Qd)) && void 0 !== ld ? ld : "water" : function(dd, Jd, kd, pd) {
            return ed.some(((Nd, Wd) => {
              let [Zd, Cd, Kd] = Nd;
              const od = Id(dd(Jd + Zd, kd + Cd, pd + Kd), "cryo");
              return null !== od && "port" !== od.kind && (0, Pd.Q)(gd, od, Rd[Wd])
            })) ? "cryo" : "water"
          }(dd, Jd, kd, Nd),
          Od = function(dd, Jd, kd, pd) {
            let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Wd = 0;
            return ed.forEach(((Zd, Cd) => {
              let [Kd, od, ld] = Zd;
              const Qd = Id(dd(Jd + Kd, kd + od, pd + ld), Nd);
              Qd && (0, Pd.Q)(gd, Qd, Rd[Cd]) && (Wd |= 1 << Cd)
            })), Wd
          }(dd, Jd, kd, Nd, Ld),
          Gd = Cd ? function(dd) {
            var Jd;
            return !0 === (null === (Jd = qd(dd)) || void 0 === Jd ? void 0 : Jd.full)
          }(Qd) : sd(dd, Jd, kd, Nd, Ld, Od);
        return (0, pd.j)((0, Wd.o)(Ld, Od, Gd))
      }
    }
  },
  38363: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      e: () => Wd
    });
    const pd = ["Chest", "Loot Chest", "Moonstone Chest"],
      Nd = [{
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

    function Wd(dd) {
      return Nd.find((Jd => Jd.exactMatch ? dd === Jd.name : dd.includes(Jd.name)))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);