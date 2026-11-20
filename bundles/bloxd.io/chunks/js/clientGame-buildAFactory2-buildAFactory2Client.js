export const id = 11;
export const ids = [11];
export const modules = {
  36208: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Zb,
      e: () => Xb,
      f: () => wb,
      h: () => Hb
    });
    var Bb = hb(9085),
      Ob = hb(36214),
      Gb = hb(36217),
      Ub = hb(8444),
      Lb = hb(1348),
      Yb = hb(49),
      Sb = hb(65),
      ab = hb(1007);

    function Hb() {
      var bb;
      return (0, Lb.k)(Ob.c, (0, Ob.m)()), (0, ab.jsx)(ab.Fragment, {
        children: null === (bb = (0, Ob.m)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function wb(bb) {
      var ub;
      let {
        show: hb
      } = bb;
      (0, Lb.k)(Ob.c, (0, Ob.m)());
      const Sb = null === (ub = (0, Ob.m)()) || void 0 === ub ? void 0 : ub.menu;
      return (0, Yb.useEffect)((() => {
        var bb;
        hb || (null === Sb || void 0 === Sb || null === (bb = Sb.onClose) || void 0 === bb || bb.call(Sb), (0, Gb.o)())
      }), [hb, Sb]), (0, Yb.useEffect)((() => hb ? (0, Ub.f)(Gb.u, Gb.e) : void 0), [hb]), (0, ab.jsx)(Bb.b, {
        showing: hb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Sb || void 0 === Sb ? void 0 : Sb.content
      })
    }

    function Zb(bb) {
      let {
        placement: ub = "bottom"
      } = bb;
      return (0, ab.jsx)("div", {
        id: `clientGameHud-${ub}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xb(bb) {
      let {
        children: ub,
        placement: hb = "bottom"
      } = bb;
      const [Bb, Ob] = (0, Yb.useState)(null);
      return (0, Yb.useEffect)((() => {
        Ob(document.getElementById(`clientGameHud-${hb}`))
      }), [hb]), Bb ? (0, Sb.createPortal)(ub, Bb) : null
    }
  },
  9085: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(4296),
      Ob = hb(4302);

    function Gb(bb) {
      let {
        children: ub,
        showing: hb,
        globallyUniqueKey: Gb,
        alwaysMountChildren: Ub = !1,
        doGameplayStartStopOnShow: Lb = !0,
        keepsMovement: Yb = !1
      } = bb;
      return (0, Ob.c)(!0, hb, Gb, Yb), (0, Bb.c)(Lb, hb), hb || Ub ? ub : null
    }
  },
  4791: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(1007);

    function Ub(bb) {
      let {
        options: ub,
        value: hb,
        onChange: Bb,
        ariaLabel: Ub,
        className: Lb,
        reselectable: Yb = !1,
        keepsFocus: Sb = !1,
        padTabs: ab
      } = bb;
      const Hb = void 0 !== ab;
      return (0, Gb.jsx)("div", {
        className: Ob()("SegmentedToggle", Lb),
        role: "group",
        "aria-label": Ub,
        "data-pad-tabs": ab,
        children: ub.map((bb => {
          const ub = bb.value === hb;
          return (0, Gb.jsx)("button", {
            type: "button",
            "aria-pressed": ub,
            "data-pad-tab": Hb || void 0,
            "data-pad-selected": Hb && ub ? "true" : void 0,
            "data-pad-default-focus": Hb && ub || void 0,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Ob()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ub
            }),
            onMouseDown: Sb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              ub && !Yb || Bb(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  8444: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    let Bb = null;
    const Ob = function(bb) {
        const ub = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Bb = ub, () => {
          Bb === ub && (Bb = null)
        }
      },
      Gb = () => {
        var bb;
        return null !== (bb = Bb) && void 0 !== bb && bb.canCycle() ? Bb.cycle : null
      }
  },
  36476: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      f: () => Gb
    });
    const Bb = new Map;

    function Ob(bb) {
      var ub;
      return null === bb ? null : null !== (ub = Bb.get(bb)) && void 0 !== ub ? ub : null
    }

    function Gb(bb, ub) {
      return Bb.set(bb, ub), () => {
        Bb.get(bb) === ub && Bb.delete(bb)
      }
    }
  },
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);