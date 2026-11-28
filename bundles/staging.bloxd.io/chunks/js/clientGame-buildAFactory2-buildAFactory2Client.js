export const id = 11;
export const ids = [11];
export const modules = {
  37898: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      d: () => Bb,
      e: () => Ub,
      g: () => Ob
    });
    var eb = Mb(35320),
      Hb = Mb(3531),
      pb = Mb(3538),
      Vb = Mb(10064),
      gb = Mb(1611),
      lb = Mb(64),
      Lb = Mb(81),
      Ib = Mb(1364);

    function Ob() {
      var bb;
      return (0, gb.h)(Hb.e, (0, Hb.x)()), (0, Ib.jsx)(Ib.Fragment, {
        children: null === (bb = (0, Hb.x)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Ub(bb) {
      var wb;
      let {
        show: Mb
      } = bb;
      (0, gb.h)(Hb.e, (0, Hb.x)());
      const Lb = null === (wb = (0, Hb.x)()) || void 0 === wb ? void 0 : wb.menu;
      return (0, lb.useEffect)((() => {
        var bb;
        Mb || (null === Lb || void 0 === Lb || null === (bb = Lb.onClose) || void 0 === bb || bb.call(Lb), (0, pb.l)())
      }), [Mb, Lb]), (0, lb.useEffect)((() => Mb ? (0, Vb.g)(pb.u, pb.g) : void 0), [Mb]), (0, Ib.jsx)(eb.c, {
        showing: Mb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Lb || void 0 === Lb ? void 0 : Lb.content
      })
    }
    const tb = new Map,
      Cb = new Set;

    function Eb(bb, wb) {
      wb ? tb.set(bb, wb) : tb.delete(bb);
      for (const Mb of Cb) Mb()
    }

    function Fb(bb) {
      let {
        placement: wb = "bottom"
      } = bb;
      const Mb = (0, lb.useRef)(null);
      return (0, lb.useLayoutEffect)((() => {
        const bb = Mb.current;
        return Eb(wb, bb), () => {
          tb.get(wb) === bb && Eb(wb, null)
        }
      }), [wb]), (0, Ib.jsx)("div", {
        ref: Mb,
        id: `clientGameHud-${wb}`,
        style: {
          display: "contents"
        }
      })
    }

    function Bb(bb) {
      let {
        children: wb,
        placement: Mb = "bottom"
      } = bb;
      const [eb, Hb] = (0, lb.useState)((() => {
        var bb;
        return null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null
      }));
      return (0, lb.useEffect)((() => {
        const bb = () => {
          var bb;
          Hb(null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null)
        };
        return Cb.add(bb), bb(), () => {
          Cb.delete(bb)
        }
      }), [Mb]), eb ? (0, Lb.createPortal)(wb, eb) : null
    }
  },
  35320: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(5387),
      Hb = Mb(5395);

    function pb(bb) {
      let {
        children: wb,
        showing: Mb,
        globallyUniqueKey: pb,
        alwaysMountChildren: Vb = !1,
        doGameplayStartStopOnShow: gb = !0,
        keepsMovement: lb = !1
      } = bb;
      return (0, Hb.d)(!0, Mb, pb, lb), (0, eb.b)(gb, Mb), Mb || Vb ? wb : null
    }
  },
  10064: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Hb
    });
    let eb = null;
    const Hb = function(bb) {
        const wb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return eb = wb, () => {
          eb === wb && (eb = null)
        }
      },
      pb = () => {
        var bb;
        return null !== (bb = eb) && void 0 !== bb && bb.canCycle() ? eb.cycle : null
      }
  },
  38047: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      f: () => pb
    });
    const eb = new Map;

    function Hb(bb) {
      var wb;
      return null === bb ? null : null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : null
    }

    function pb(bb, wb) {
      return eb.set(bb, wb), () => {
        eb.get(bb) === wb && eb.delete(bb)
      }
    }
  },
  39637: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => tb,
      B: () => Xb,
      E: () => jb,
      I: () => zb,
      J: () => hb,
      M: () => Ub,
      Q: () => Eb,
      R: () => Bb,
      T: () => Hb,
      c: () => Ib,
      g: () => lb,
      i: () => mb,
      l: () => Lb,
      o: () => gb,
      q: () => Vb,
      u: () => pb,
      w: () => xb
    });
    var eb = Mb(5953);

    function Hb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    const pb = 2e3,
      Vb = .005,
      gb = .001,
      lb = 2,
      Lb = "Fluid Tank",
      Ib = "Coolant Mixer",
      Ob = 144;

    function Ub(bb) {
      const wb = bb.split("|")[0];
      return (0, eb.j)(wb) ? wb === eb.e ? "cryo" : "water" : null
    }
    const tb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Cb = 63;

    function Eb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Mb = wb ? function(bb, wb, Mb) {
        const eb = tb.findIndex((eb => {
          let [Hb, pb, Vb] = eb;
          return Hb === bb && pb === wb && Vb === Mb
        }));
        return eb < 0 ? 0 : 1 << eb
      }(wb[0], wb[1], wb[2]) : 0;
      return "maker" === bb ? {
        kind: bb,
        faces: Mb
      } : "user" === bb ? {
        kind: bb,
        faces: Cb & ~Mb
      } : {
        kind: bb,
        faces: Cb
      }
    }

    function Fb(bb) {
      return "pipe" === bb || "tank" === bb || "maker" === bb
    }

    function Bb(bb, wb, Mb) {
      return 0 !== (bb.faces & 1 << Mb) && 0 !== (wb.faces & 1 << (1 ^ Mb)) && (Fb(bb.kind) || Fb(wb.kind))
    }
    const sb = (bb, wb, Mb, eb) => ({
        input: bb,
        inputAmount: eb,
        output: wb,
        outputAmount: Mb
      }),
      mb = {
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
          recipes: [sb("Uranium Grit", "Uranium Pellet", 1, 12), sb("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [sb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Ob,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function hb(bb, wb) {
      return 1e3 * (null !== wb && void 0 !== wb ? wb : 0) / bb.opMs
    }

    function zb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Mb = hb(mb["Coolant Mixer"], Ob) * wb;
      return bb <= 0 ? 0 : Math.ceil(bb / Mb - 1e-9)
    }
    const Xb = "baf2Water",
      xb = "baf2waterclose",
      jb = "baf2wateropen"
  },
  39635: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Kb,
      f: () => hb,
      j: () => mb
    });
    var eb = Mb(5868),
      Hb = Mb(5890),
      pb = Mb(5953),
      Vb = Mb(39637),
      gb = Mb(5945);
    const lb = (0, Vb.Q)("pipe"),
      Lb = (0, Vb.Q)("tank"),
      Ib = (0, Vb.Q)("port"),
      Ob = "Reactor Port";

    function Ub(bb, wb, Mb) {
      const eb = new Set([pb.f, pb.e, Ob, ...wb, ...Mb, ...bb ? [Vb.l] : []]);
      return {
        makers: new Set(wb),
        roots: eb
      }
    }
    const tb = {
        water: Ub(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Vb.c]),
        cryo: Ub(!1, [Vb.c], [])
      },
      Cb = new Set([...tb.water.roots, ...tb.cryo.roots]),
      Eb = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Fb = Hb.g.map((bb => Eb[bb])),
      Bb = Fb.map((bb => {
        let [wb, Mb, eb] = bb;
        return Vb.A.findIndex((bb => {
          let [Hb, pb, Vb] = bb;
          return Hb === wb && pb === Mb && Vb === eb
        }))
      }));

    function sb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const Mb = eb.g[bb],
        Hb = null === Mb || void 0 === Mb ? void 0 : Mb.meta.rootName,
        Ub = tb[wb];
      if (!Hb || !Ub.roots.has(Hb)) return null;
      if ((0, pb.j)(Hb)) return (0, Vb.M)(Mb.name) === wb ? lb : null;
      if (Hb === Vb.l) return Lb;
      if (Hb === Ob) return Mb.name.endsWith("|Water") ? Ib : null;
      const [Cb, Eb] = gb.d[(Mb.meta.rot || 1) - 1];
      return (0, Vb.Q)(Ub.makers.has(Hb) ? "maker" : "user", [-Cb, 0, -Eb])
    }

    function mb(bb, wb, Mb, Hb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: gb
      } = tb[pb];
      return Fb.some(((Lb, Ib) => {
        var Ob, Ub;
        let [tb, Cb, Eb] = Lb;
        const Fb = bb(wb + tb, Mb + Cb, Hb + Eb),
          mb = sb(Fb, pb);
        return null !== mb && gb.has(null !== (Ob = null === (Ub = eb.g[Fb]) || void 0 === Ub ? void 0 : Ub.meta.rootName) && void 0 !== Ob ? Ob : "") && !(0, Vb.R)(lb, mb, Bb[Ib])
      }))
    }

    function hb(bb) {
      const wb = eb.g[bb];
      return wb ? (0, Vb.M)(wb.name) : null
    }
    let zb = null;

    function Xb(bb) {
      if (!zb) {
        zb = new Map;
        for (const bb of ["water", "cryo"])
          for (let wb = 0; wb < 64; wb++)
            for (const Mb of [!1, !0]) zb.set((0, pb.l)(bb, wb, Mb), {
              ht: bb,
              mask: wb,
              full: Mb
            })
      }
      return zb.get(bb)
    }
    const xb = new Map(Array.from({
      length: pb.h + 1
    }, ((bb, wb) => [(0, pb.n)(wb), wb])));

    function jb(bb, wb, Mb, Hb, pb, Vb) {
      return Fb.some(((gb, lb) => {
        var Lb, Ib, Ob;
        let [Ub, tb, Cb] = gb;
        if (0 === (Vb >> lb & 1)) return !1;
        const Eb = null !== (Lb = null === (Ib = eb.g[bb(wb + Ub, Mb + tb, Hb + Cb)]) || void 0 === Ib ? void 0 : Ib.name) && void 0 !== Lb ? Lb : "",
          Fb = Xb(Eb);
        return Fb ? Fb.ht === pb && Fb.full : (null !== (Ob = function(bb) {
          var wb;
          return null !== (wb = xb.get(bb)) && void 0 !== wb ? wb : null
        }(Eb)) && void 0 !== Ob ? Ob : 0) > 0
      }))
    }
    class Kb {
      constructor() {
        this.reshapeOffsets = Fb
      }
      handles(bb) {
        return null !== hb(bb)
      }
      affects(bb) {
        var wb, Mb;
        return Cb.has(null !== (wb = null === (Mb = eb.g[bb]) || void 0 === Mb ? void 0 : Mb.meta.rootName) && void 0 !== wb ? wb : "")
      }
      placedBy(bb) {
        var wb;
        return (null === (wb = eb.g[bb]) || void 0 === wb ? void 0 : wb.meta.rootName) === pb.e ? pb.f : null
      }
      shape(bb, wb, Mb, Hb, gb, Lb) {
        var Ib, Ob, Ub;
        const tb = null !== (Ib = null === (Ob = eb.g[gb]) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Ib ? Ib : "",
          Cb = Lb || tb !== pb.f ? null !== (Ub = (0, Vb.M)(tb)) && void 0 !== Ub ? Ub : "water" : function(bb, wb, Mb, eb) {
            return Fb.some(((Hb, pb) => {
              let [gb, Lb, Ib] = Hb;
              const Ob = sb(bb(wb + gb, Mb + Lb, eb + Ib), "cryo");
              return null !== Ob && "port" !== Ob.kind && (0, Vb.R)(lb, Ob, Bb[pb])
            })) ? "cryo" : "water"
          }(bb, wb, Mb, Hb),
          Eb = function(bb, wb, Mb, eb) {
            let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              pb = 0;
            return Fb.forEach(((gb, Lb) => {
              let [Ib, Ob, Ub] = gb;
              const tb = sb(bb(wb + Ib, Mb + Ob, eb + Ub), Hb);
              tb && (0, Vb.R)(lb, tb, Bb[Lb]) && (pb |= 1 << Lb)
            })), pb
          }(bb, wb, Mb, Hb, Cb),
          mb = Lb ? function(bb) {
            var wb;
            return !0 === (null === (wb = Xb(bb)) || void 0 === wb ? void 0 : wb.full)
          }(tb) : jb(bb, wb, Mb, Hb, Cb, Eb);
        return (0, eb.i)((0, pb.l)(Cb, Eb, mb))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);