export const id = 247;
export const ids = [247];
export const modules = {
  38309: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      e: () => Ot,
      f: () => dt,
      j: () => qt,
      n: () => mt,
      o: () => Dt
    });
    const Ot = 1.001,
      qt = .501,
      Dt = .025,
      mt = .75,
      dt = .08,
      jt = 4;

    function Ht() {
      const tt = qt,
        et = Dt,
        Vt = tt - et / 2,
        Ot = (2 * tt - 2 * et) / (2 * jt - 1),
        mt = [];
      for (const qt of [-Vt, Vt])
        for (const Dt of [-Vt, Vt])
          for (let Vt = 0; Vt < jt; Vt++) {
            const dt = -tt + et + Ot * (2 * Vt + .5);
            mt.push([Ot, et, et, dt, qt, Dt]), mt.push([et, Ot, et, qt, dt, Dt]), mt.push([et, et, Ot, qt, Dt, dt])
          }
      for (const qt of [-Vt, Vt])
        for (const tt of [-Vt, Vt])
          for (const Ot of [-Vt, Vt]) mt.push([et, et, et, qt, tt, Ot]);
      return mt
    }
  },
  38641: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ht,
      E: () => Ct,
      I: () => Jt,
      K: () => lt,
      N: () => wt,
      O: () => Nt,
      Q: () => qt,
      b: () => Xt,
      f: () => jt,
      j: () => bt,
      k: () => Ht,
      m: () => dt,
      o: () => mt,
      s: () => Dt,
      t: () => Kt,
      u: () => Et,
      w: () => ut
    });
    var Ot = Vt(9497);

    function qt(tt) {
      return Math.floor(tt).toLocaleString("en-US")
    }
    const Dt = 2e3,
      mt = .005,
      dt = .001,
      jt = 2,
      Ht = "Fluid Tank",
      Xt = "Coolant Mixer",
      Qt = 144;

    function lt(tt) {
      const et = tt.split("|")[0];
      return (0, Ot.n)(et) ? et === Ot.e ? "cryo" : "water" : null
    }
    const Et = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      ft = 63;

    function wt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Vt = et ? function(tt, et, Vt) {
        const Ot = Et.findIndex((Ot => {
          let [qt, Dt, mt] = Ot;
          return qt === tt && Dt === et && mt === Vt
        }));
        return Ot < 0 ? 0 : 1 << Ot
      }(et[0], et[1], et[2]) : 0;
      return "maker" === tt ? {
        kind: tt,
        faces: Vt
      } : "user" === tt ? {
        kind: tt,
        faces: ft & ~Vt
      } : {
        kind: tt,
        faces: ft
      }
    }

    function yt(tt) {
      return "pipe" === tt || "tank" === tt || "maker" === tt
    }

    function Nt(tt, et, Vt) {
      return 0 !== (tt.faces & 1 << Vt) && 0 !== (et.faces & 1 << (1 ^ Vt)) && (yt(tt.kind) || yt(et.kind))
    }
    const Mt = (tt, et, Vt, Ot) => ({
        input: tt,
        inputAmount: Ot,
        output: et,
        outputAmount: Vt
      }),
      bt = {
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
          recipes: [Mt("Uranium Grit", "Uranium Pellet", 1, 12), Mt("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Mt("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Qt,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Jt(tt, et) {
      return 1e3 * (null !== et && void 0 !== et ? et : 0) / tt.opMs
    }

    function Ct(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Vt = Jt(bt["Coolant Mixer"], Qt) * et;
      return tt <= 0 ? 0 : Math.ceil(tt / Vt - 1e-9)
    }
    const ut = "baf2Water",
      Kt = "baf2waterclose",
      ht = "baf2wateropen"
  },
  38634: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Zt,
      h: () => Lt
    });
    var Ot = Vt(9425),
      qt = Vt(9454);
    const Dt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var mt = Vt(9475),
      dt = Vt(38467),
      jt = Vt(9466);
    const Ht = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Xt(tt) {
      let [et, Vt] = tt;
      return [-Vt, et]
    }

    function Qt(tt, et) {
      return tt[0] === et[0] && tt[1] === et[1]
    }

    function lt(tt, et) {
      return tt[0] * et[0] + tt[1] * et[1] === 0
    }
    const Et = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var ft = Vt(9492);

    function wt(tt, et, Vt, Ot, qt) {
      return et < ft.l || et >= ft.l + ft.n || Math.floor(tt / ft.q) === Math.floor(Ot / ft.q) && Math.floor(Vt / ft.q) === Math.floor(qt / ft.q)
    }
    const yt = "Splitter",
      Nt = "Sorting Gate",
      Mt = new Set(ft.C),
      bt = new Set([...ft.C, "Belt Loader", "Fast Loader", Nt]),
      Jt = new Set(ft.o),
      Ct = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function ut(tt) {
      var et, Vt;
      return null !== (et = null === (Vt = Ot.h[tt]) || void 0 === Vt ? void 0 : Vt.meta.rootName) && void 0 !== et ? et : ""
    }

    function Kt(tt) {
      return ut(tt) === ft.f && (0, ft.L)(Ot.h[tt].name)
    }
    var ht = Vt(9462),
      vt = Vt(9480);
    const Wt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function St(tt) {
      var et, Vt;
      const qt = null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.meta;
      return (null === qt || void 0 === qt ? void 0 : qt.rootName) !== vt.n ? null : {
        rot: null !== (Vt = qt.rot) && void 0 !== Vt ? Vt : 1,
        half: (0, vt.g)(qt.rootName, qt.metaStr)
      }
    }

    function ct(tt, et, Vt, Ot) {
      return St(tt(et, Vt, Ot))
    }

    function Rt(tt, et, Vt, Ot, qt) {
      let {
        rot: Dt,
        half: mt
      } = qt;
      const [dt, jt] = (0, vt.l)(Dt, mt), Ht = ct(tt, et + dt, Vt, Ot + jt);
      return null !== Ht && Ht.rot === Dt && Ht.half === vt.r[mt]
    }
    var It = Vt(38639);
    const Pt = [new class {
      constructor() {
        this.reshapeOffsets = Et
      }
      handles(tt) {
        var et;
        return "Stairs" === (null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.model)
      }
      affects(tt) {
        return this.handles(tt)
      }
      shape(tt, et, Vt, qt, Dt) {
        const mt = this.stairsOf(Dt),
          dt = this.cornerAt(tt, et, Vt, qt, mt),
          Ht = mt.half === jt.b.top ? "top" : "bot";
        return (0, Ot.k)(`${Ot.h[Dt].meta.rootName}|meta|rot${mt.rot}|${Ht}${null===dt?"":`|${dt}`}`)
      }
      stairsOf(tt) {
        const {
          rot: et,
          halfblockPlacement: Vt
        } = Ot.h[tt].meta;
        return {
          rot: et,
          half: Vt
        }
      }
      stairsAt(tt, et, Vt, Ot) {
        const qt = tt(et, Vt, Ot);
        return this.handles(qt) ? this.stairsOf(qt) : null
      }
      cornerAt(tt, et, Vt, Ot, qt) {
        let {
          rot: Dt,
          half: mt
        } = qt;
        const dt = Ht[Dt],
          jt = qt => {
            let [dt, jt] = qt;
            const Ht = this.stairsAt(tt, et + dt, Vt, Ot + jt);
            return null !== Ht && Ht.rot === Dt && Ht.half === mt
          },
          Et = this.stairsAt(tt, et + dt[0], Vt, Ot + dt[1]);
        if (null !== Et && Et.half === mt) {
          const tt = Ht[Et.rot];
          if (lt(dt, tt) && !jt([-tt[0], -tt[1]])) return Qt(tt, Xt(dt)) ? "outerLeft" : "outerRight"
        }
        const ft = this.stairsAt(tt, et - dt[0], Vt, Ot - dt[1]);
        if (null !== ft && ft.half === mt) {
          const tt = Ht[ft.rot];
          if (lt(dt, tt) && !jt(tt)) return Qt(tt, Xt(dt)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Dt, this.rootIds = new Set(qt.f.map((tt => (0, Ot.k)(tt))))
      }
      handles(tt) {
        var et;
        const Vt = null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.meta;
        return void 0 !== Vt && this.rootIds.has(Vt.rootId)
      }
      affects(tt) {
        return this.handles(tt)
      }
      placedBy(tt) {
        return Ot.h[tt].meta.rootName === qt.m ? null : qt.m
      }
      shape(tt, et, Vt, Dt, mt) {
        const {
          rootId: dt,
          rootName: jt,
          rot: Ht
        } = Ot.h[mt].meta;
        let Xt = 0;
        return qt.u[Ht].forEach(((qt, mt) => {
          var jt;
          let [Qt, lt, Et] = qt;
          const ft = null === (jt = Ot.h[tt(et + Qt, Vt + lt, Dt + Et)]) || void 0 === jt ? void 0 : jt.meta;
          (null === ft || void 0 === ft ? void 0 : ft.rootId) === dt && ft.rot === Ht && (Xt |= 1 << mt)
        })), (0, Ot.k)((0, qt.e)(jt, Ht, Xt))
      }
    }, ...mt.e.map((tt => new dt.b(tt))), new class {
      constructor() {
        this.reshapeOffsets = Ct
      }
      handles(tt) {
        const et = ut(tt);
        return Mt.has(et) || et === ft.f
      }
      affects(tt) {
        const et = ut(tt);
        return bt.has(et) || Jt.has(et) || et === yt || et === ft.f || void 0 !== ft.c[et]
      }
      shape(tt, et, Vt, qt, Dt, mt) {
        const {
          rootName: dt,
          rot: jt
        } = Ot.h[Dt].meta;
        return dt === ft.f ? mt ? Dt : function(tt, et, Vt, qt, Dt) {
          const [mt, dt] = ft.e[Dt - 1];
          for (let jt = 1; jt <= ft.y; jt++) {
            const [Ht, Xt] = [et - mt * jt, qt - dt * jt], Qt = tt(Ht, Vt, Xt);
            if (ut(Qt) === ft.f && Ot.h[Qt].meta.rot === Dt && wt(et, Vt, qt, Ht, Xt)) return (0, Ot.k)((0, ft.S)(Dt, !Kt(Qt)))
          }
          return (0, Ot.k)((0, ft.S)(Dt, !1))
        }(tt, et, Vt, qt, jt) : (0, Ot.k)((0, ft.D)(dt, jt, function(tt, et, Vt, qt, Dt) {
          const [mt, dt] = ft.e[Dt - 1], jt = (Dt, mt) => function(tt, et, Vt) {
            var qt;
            const Dt = null === (qt = Ot.h[tt]) || void 0 === qt ? void 0 : qt.meta;
            if (!Dt) return !1;
            const mt = Dt.rootName,
              dt = bt.has(mt) || Kt(tt);
            if (!dt && !Jt.has(mt) && mt !== yt) return !1;
            const [jt, Ht] = ft.e[Dt.rot - 1];
            if (dt && jt === -et && Ht === -Vt) return !0;
            if (Jt.has(mt)) return jt === et && Ht === Vt;
            const Xt = Ot.h[tt].name;
            return (mt === yt ? (0, ft.O)(Xt, jt, Ht) : mt === Nt ? [(0, ft.F)(Xt, jt, Ht)] : []).some((tt => {
              let [Ot, qt] = tt;
              return Ot === -et && qt === -Vt
            }))
          }(tt(et + Dt, Vt, qt + mt), Dt, mt), Ht = tt(et - mt, Vt, qt - dt), Xt = ut(Ht) === yt && Ot.h[Ht].meta.rot === Dt, Qt = 1 === ft.c[ut(tt(et, Vt - 1, qt))] || -1 === ft.c[ut(tt(et, Vt + 1, qt))];
          if (Qt || Xt || jt(-mt, -dt)) return null;
          const lt = jt(-dt, mt),
            Et = jt(dt, -mt);
          if (lt === Et) return null;
          return lt ? "turnLeft" : "turnRight"
        }(tt, et, Vt, qt, jt)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Wt, this.rootId = (0, Ot.k)(vt.n)
      }
      handles(tt) {
        var et;
        return (null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.meta.rootId) === this.rootId
      }
      affects(tt) {
        return this.handles(tt)
      }
      shape(tt, et, Vt, qt, Dt, mt) {
        const dt = St(Dt);
        return (0, Ot.k)((jt = dt.rot, null !== (Ht = mt ? this.reshapedHalf(tt, et, Vt, qt, dt) : this.placedHalf(tt, et, Vt, qt, dt.rot)) ? (0, vt.e)(vt.n, jt, Ht) : 1 === jt ? vt.n : `${vt.n}|meta|rot${jt}`));
        var jt, Ht
      }
      placedHalf(tt, et, Vt, Ot, qt) {
        const [Dt, mt] = ht.e[qt];
        for (const [dt, jt] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Ht = et + jt * Dt,
            Xt = Ot + jt * mt,
            Qt = ct(tt, Ht, Vt, Xt);
          if (null !== Qt && Qt.rot === qt && (null === Qt.half || !Rt(tt, Ht, Vt, Xt, Qt))) return dt
        }
        return null
      }
      reshapedHalf(tt, et, Vt, Ot, qt) {
        if (null !== qt.half && Rt(tt, et, Vt, Ot, qt)) return qt.half;
        for (const Dt of ["right", "left"]) {
          const [mt, dt] = (0, vt.l)(qt.rot, Dt), jt = ct(tt, et + mt, Vt, Ot + dt);
          if (null !== jt && jt.rot === qt.rot && jt.half === vt.r[Dt]) return Dt
        }
        return null
      }
    }, new It.e];

    function Zt(tt, et, Vt, Ot, qt) {
      let Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const mt of Pt)
        if (mt.handles(qt)) return mt.shape(tt, et, Vt, Ot, qt, Dt);
      return qt
    }

    function Lt(tt) {
      for (const Ot of Pt) {
        var et, Vt;
        if (Ot.handles(tt)) return null !== (et = null === (Vt = Ot.placedBy) || void 0 === Vt ? void 0 : Vt.call(Ot, tt)) && void 0 !== et ? et : null
      }
      return null
    }
  },
  38639: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => vt,
      h: () => Jt,
      i: () => bt
    });
    var Ot = Vt(9425),
      qt = Vt(9443),
      Dt = Vt(9497),
      mt = Vt(38641),
      dt = Vt(9492);
    const jt = (0, mt.N)("pipe"),
      Ht = (0, mt.N)("tank"),
      Xt = (0, mt.N)("port"),
      Qt = "Reactor Port";

    function lt(tt, et, Vt) {
      const Ot = new Set([Dt.i, Dt.e, Qt, ...et, ...Vt, ...tt ? [mt.k] : []]);
      return {
        makers: new Set(et),
        roots: Ot
      }
    }
    const Et = {
        water: lt(!0, ["Condenser"], ["Centrifuge", "Synthesizer", mt.b]),
        cryo: lt(!1, [mt.b], [])
      },
      ft = new Set([...Et.water.roots, ...Et.cryo.roots]),
      wt = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      yt = qt.d.map((tt => wt[tt])),
      Nt = yt.map((tt => {
        let [et, Vt, Ot] = tt;
        return mt.u.findIndex((tt => {
          let [qt, Dt, mt] = tt;
          return qt === et && Dt === Vt && mt === Ot
        }))
      }));

    function Mt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Vt = Ot.h[tt],
        qt = null === Vt || void 0 === Vt ? void 0 : Vt.meta.rootName,
        lt = Et[et];
      if (!qt || !lt.roots.has(qt)) return null;
      if ((0, Dt.n)(qt)) return (0, mt.K)(Vt.name) === et ? jt : null;
      if (qt === mt.k) return Ht;
      if (qt === Qt) return Vt.name.endsWith("|Water") ? Xt : null;
      const [ft, wt] = dt.e[(Vt.meta.rot || 1) - 1];
      return (0, mt.N)(lt.makers.has(qt) ? "maker" : "user", [-ft, 0, -wt])
    }

    function bt(tt, et, Vt, qt) {
      let Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: dt
      } = Et[Dt];
      return yt.some(((Ht, Xt) => {
        var Qt, lt;
        let [Et, ft, wt] = Ht;
        const yt = tt(et + Et, Vt + ft, qt + wt),
          bt = Mt(yt, Dt);
        return null !== bt && dt.has(null !== (Qt = null === (lt = Ot.h[yt]) || void 0 === lt ? void 0 : lt.meta.rootName) && void 0 !== Qt ? Qt : "") && !(0, mt.O)(jt, bt, Nt[Xt])
      }))
    }

    function Jt(tt) {
      const et = Ot.h[tt];
      return et ? (0, mt.K)(et.name) : null
    }
    let Ct = null;

    function ut(tt) {
      if (!Ct) {
        Ct = new Map;
        for (const tt of ["water", "cryo"])
          for (let et = 0; et < 64; et++)
            for (const Vt of [!1, !0]) Ct.set((0, Dt.o)(tt, et, Vt), {
              OE: tt,
              mask: et,
              full: Vt
            })
      }
      return Ct.get(tt)
    }
    const Kt = new Map(Array.from({
      length: Dt.l + 1
    }, ((tt, et) => [(0, Dt.p)(et), et])));

    function ht(tt, et, Vt, qt, Dt, mt) {
      return yt.some(((dt, jt) => {
        var Ht, Xt, Qt;
        let [lt, Et, ft] = dt;
        if (0 === (mt >> jt & 1)) return !1;
        const wt = null !== (Ht = null === (Xt = Ot.h[tt(et + lt, Vt + Et, qt + ft)]) || void 0 === Xt ? void 0 : Xt.name) && void 0 !== Ht ? Ht : "",
          yt = ut(wt);
        return yt ? yt.OE === Dt && yt.full : (null !== (Qt = function(tt) {
          var et;
          return null !== (et = Kt.get(tt)) && void 0 !== et ? et : null
        }(wt)) && void 0 !== Qt ? Qt : 0) > 0
      }))
    }
    class vt {
      constructor() {
        this.reshapeOffsets = yt
      }
      handles(tt) {
        return null !== Jt(tt)
      }
      affects(tt) {
        var et, Vt;
        return ft.has(null !== (et = null === (Vt = Ot.h[tt]) || void 0 === Vt ? void 0 : Vt.meta.rootName) && void 0 !== et ? et : "")
      }
      placedBy(tt) {
        var et;
        return (null === (et = Ot.h[tt]) || void 0 === et ? void 0 : et.meta.rootName) === Dt.e ? Dt.i : null
      }
      shape(tt, et, Vt, qt, dt, Ht) {
        var Xt, Qt, lt;
        const Et = null !== (Xt = null === (Qt = Ot.h[dt]) || void 0 === Qt ? void 0 : Qt.name) && void 0 !== Xt ? Xt : "",
          ft = Ht || Et !== Dt.i ? null !== (lt = (0, mt.K)(Et)) && void 0 !== lt ? lt : "water" : function(tt, et, Vt, Ot) {
            return yt.some(((qt, Dt) => {
              let [dt, Ht, Xt] = qt;
              const Qt = Mt(tt(et + dt, Vt + Ht, Ot + Xt), "cryo");
              return null !== Qt && "port" !== Qt.kind && (0, mt.O)(jt, Qt, Nt[Dt])
            })) ? "cryo" : "water"
          }(tt, et, Vt, qt),
          wt = function(tt, et, Vt, Ot) {
            let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Dt = 0;
            return yt.forEach(((dt, Ht) => {
              let [Xt, Qt, lt] = dt;
              const Et = Mt(tt(et + Xt, Vt + Qt, Ot + lt), qt);
              Et && (0, mt.O)(jt, Et, Nt[Ht]) && (Dt |= 1 << Ht)
            })), Dt
          }(tt, et, Vt, qt, ft),
          bt = Ht ? function(tt) {
            var et;
            return !0 === (null === (et = ut(tt)) || void 0 === et ? void 0 : et.full)
          }(Et) : ht(tt, et, Vt, qt, ft, wt);
        return (0, Ot.k)((0, Dt.o)(ft, wt, bt))
      }
    }
  },
  38428: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      f: () => Dt
    });
    const Ot = ["Chest", "Loot Chest", "Moonstone Chest"],
      qt = [{
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

    function Dt(tt) {
      return qt.find((et => et.exactMatch ? tt === et.name : tt.includes(et.name)))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);