export const id = 11;
export const ids = [11];
export const modules = {
  36013: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xb,
      e: () => jb,
      h: () => Pb,
      k: () => Lb
    });
    var Ab = Ub(8906),
      Mb = Ub(36017),
      Tb = Ub(36023),
      Eb = Ub(8280),
      Yb = Ub(1345),
      Bb = Ub(52),
      eb = Ub(75),
      vb = Ub(1023);

    function Lb() {
      var bb;
      return (0, Yb.i)(Mb.c, (0, Mb.l)()), (0, vb.jsx)(vb.Fragment, {
        children: null === (bb = (0, Mb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Pb(bb) {
      var ab;
      let {
        show: Ub
      } = bb;
      (0, Yb.i)(Mb.c, (0, Mb.l)());
      const eb = null === (ab = (0, Mb.l)()) || void 0 === ab ? void 0 : ab.menu;
      return (0, Bb.useEffect)((() => {
        var bb;
        Ub || (null === eb || void 0 === eb || null === (bb = eb.onClose) || void 0 === bb || bb.call(eb), (0, Tb.p)())
      }), [Ub, eb]), (0, Bb.useEffect)((() => Ub ? (0, Eb.g)(Tb.v, Tb.i) : void 0), [Ub]), (0, vb.jsx)(Ab.d, {
        showing: Ub,
        globallyUniqueKey: "clientGameMenu",
        children: null === eb || void 0 === eb ? void 0 : eb.content
      })
    }

    function Xb(bb) {
      let {
        placement: ab = "bottom"
      } = bb;
      return (0, vb.jsx)("div", {
        id: `clientGameHud-${ab}`,
        style: {
          display: "contents"
        }
      })
    }

    function jb(bb) {
      let {
        children: ab,
        placement: Ub = "bottom"
      } = bb;
      const [Ab, Mb] = (0, Bb.useState)(null);
      return (0, Bb.useEffect)((() => {
        Mb(document.getElementById(`clientGameHud-${Ub}`))
      }), [Ub]), Ab ? (0, eb.createPortal)(ab, Ab) : null
    }
  },
  8906: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(4218),
      Mb = Ub(4225);

    function Tb(bb) {
      let {
        children: ab,
        showing: Ub,
        globallyUniqueKey: Tb,
        alwaysMountChildren: Eb = !1,
        doGameplayStartStopOnShow: Yb = !0,
        keepsMovement: Bb = !1
      } = bb;
      return (0, Mb.b)(!0, Ub, Tb, Bb), (0, Ab.c)(Yb, Ub), Ub || Eb ? ab : null
    }
  },
  4690: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(1023);

    function Eb(bb) {
      let {
        options: ab,
        value: Ub,
        onChange: Ab,
        ariaLabel: Eb,
        className: Yb,
        reselectable: Bb = !1,
        keepsFocus: eb = !1
      } = bb;
      return (0, Tb.jsx)("div", {
        className: Mb()("SegmentedToggle", Yb),
        role: "group",
        "aria-label": Eb,
        children: ab.map((bb => {
          const ab = bb.value === Ub;
          return (0, Tb.jsx)("button", {
            type: "button",
            "aria-pressed": ab,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Mb()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ab
            }),
            onMouseDown: eb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              ab && !Bb || Ab(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  8280: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      g: () => Mb
    });
    let Ab = null;
    const Mb = function(bb) {
        const ab = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ab = ab, () => {
          Ab === ab && (Ab = null)
        }
      },
      Tb = () => {
        var bb;
        return null !== (bb = Ab) && void 0 !== bb && bb.canCycle() ? Ab.cycle : null
      }
  },
  36160: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb
    });
    const Ab = new Map;

    function Mb(bb) {
      var ab;
      return null === bb ? null : null !== (ab = Ab.get(bb)) && void 0 !== ab ? ab : null
    }

    function Tb(bb, ab) {
      return Ab.set(bb, ab), () => {
        Ab.get(bb) === ab && Ab.delete(bb)
      }
    }
  },
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);