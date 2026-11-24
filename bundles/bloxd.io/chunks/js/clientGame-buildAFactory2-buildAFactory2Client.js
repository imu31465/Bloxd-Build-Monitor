export const id = 11;
export const ids = [11];
export const modules = {
  36853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      g: () => ft,
      i: () => lt,
      m: () => Qt
    });
    var Ot = Vt(34371),
      qt = Vt(36861),
      Dt = Vt(36867),
      mt = Vt(8936),
      dt = Vt(1554),
      jt = Vt(63),
      Ht = Vt(83),
      Xt = Vt(1188);

    function Qt() {
      var tt;
      return (0, dt.h)(qt.b, (0, qt.l)()), (0, Xt.jsx)(Xt.Fragment, {
        children: null === (tt = (0, qt.l)()) || void 0 === tt ? void 0 : tt.content
      })
    }

    function lt(tt) {
      var et;
      let {
        show: Vt
      } = tt;
      (0, dt.h)(qt.b, (0, qt.l)());
      const Ht = null === (et = (0, qt.l)()) || void 0 === et ? void 0 : et.menu;
      return (0, jt.useEffect)((() => {
        var tt;
        Vt || (null === Ht || void 0 === Ht || null === (tt = Ht.onClose) || void 0 === tt || tt.call(Ht), (0, Dt.t)())
      }), [Vt, Ht]), (0, jt.useEffect)((() => Vt ? (0, mt.g)(Dt.A, Dt.f) : void 0), [Vt]), (0, Xt.jsx)(Ot.b, {
        showing: Vt,
        globallyUniqueKey: "clientGameMenu",
        children: null === Ht || void 0 === Ht ? void 0 : Ht.content
      })
    }

    function Et(tt) {
      let {
        placement: et = "bottom"
      } = tt;
      return (0, Xt.jsx)("div", {
        id: `clientGameHud-${et}`,
        style: {
          display: "contents"
        }
      })
    }

    function ft(tt) {
      let {
        children: et,
        placement: Vt = "bottom"
      } = tt;
      const [Ot, qt] = (0, jt.useState)(null);
      return (0, jt.useEffect)((() => {
        qt(document.getElementById(`clientGameHud-${Vt}`))
      }), [Vt]), Ot ? (0, Ht.createPortal)(et, Ot) : null
    }
  },
  34371: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt
    });
    var Ot = Vt(4668),
      qt = Vt(4677);

    function Dt(tt) {
      let {
        children: et,
        showing: Vt,
        globallyUniqueKey: Dt,
        alwaysMountChildren: mt = !1,
        doGameplayStartStopOnShow: dt = !0,
        keepsMovement: jt = !1
      } = tt;
      return (0, qt.d)(!0, Vt, Dt, jt), (0, Ot.e)(dt, Vt), Vt || mt ? et : null
    }
  },
  5186: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1188);

    function mt(tt) {
      let {
        options: et,
        value: Vt,
        onChange: Ot,
        ariaLabel: mt,
        className: dt,
        reselectable: jt = !1,
        keepsFocus: Ht = !1,
        padTabs: Xt
      } = tt;
      const Qt = void 0 !== Xt;
      return (0, Dt.jsx)("div", {
        className: qt()("SegmentedToggle", dt),
        role: "group",
        "aria-label": mt,
        "data-pad-tabs": Xt,
        children: et.map((tt => {
          const et = tt.value === Vt;
          return (0, Dt.jsx)("button", {
            type: "button",
            "aria-pressed": et,
            "data-pad-tab": Qt || void 0,
            "data-pad-selected": Qt && et ? "true" : void 0,
            "data-pad-default-focus": Qt && et || void 0,
            "aria-label": tt.ariaLabel,
            title: tt.ariaLabel,
            className: qt()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: et
            }),
            onMouseDown: Ht ? tt => {
              tt.preventDefault()
            } : void 0,
            onClick: () => {
              et && !jt || Ot(tt.value)
            },
            children: tt.label
          }, tt.value)
        }))
      })
    }
  },
  8936: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      g: () => qt
    });
    let Ot = null;
    const qt = function(tt) {
        const et = {
          cycle: tt,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ot = et, () => {
          Ot === et && (Ot = null)
        }
      },
      Dt = () => {
        var tt;
        return null !== (tt = Ot) && void 0 !== tt && tt.canCycle() ? Ot.cycle : null
      }
  },
  37060: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt,
      c: () => Dt
    });
    const Ot = new Map;

    function qt(tt) {
      var et;
      return null === tt ? null : null !== (et = Ot.get(tt)) && void 0 !== et ? et : null
    }

    function Dt(tt, et) {
      return Ot.set(tt, et), () => {
        Ot.get(tt) === et && Ot.delete(tt)
      }
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
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);