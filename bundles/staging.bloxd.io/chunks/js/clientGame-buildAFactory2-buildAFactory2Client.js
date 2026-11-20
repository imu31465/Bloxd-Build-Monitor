export const id = 11;
export const ids = [11];
export const modules = {
  36235: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => nb,
      e: () => mb,
      i: () => Xb,
      j: () => Mb
    });
    var kb = sb(8917),
      Wb = sb(36240),
      ab = sb(36247),
      Tb = sb(8330),
      Ub = sb(1423),
      Ib = sb(64),
      Hb = sb(89),
      fb = sb(1087);

    function Mb() {
      var bb;
      return (0, Ub.h)(Wb.c, (0, Wb.l)()), (0, fb.jsx)(fb.Fragment, {
        children: null === (bb = (0, Wb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Xb(bb) {
      var cb;
      let {
        show: sb
      } = bb;
      (0, Ub.h)(Wb.c, (0, Wb.l)());
      const Hb = null === (cb = (0, Wb.l)()) || void 0 === cb ? void 0 : cb.menu;
      return (0, Ib.useEffect)((() => {
        var bb;
        sb || (null === Hb || void 0 === Hb || null === (bb = Hb.onClose) || void 0 === bb || bb.call(Hb), (0, ab.o)())
      }), [sb, Hb]), (0, Ib.useEffect)((() => sb ? (0, Tb.e)(ab.v, ab.g) : void 0), [sb]), (0, fb.jsx)(kb.b, {
        showing: sb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hb || void 0 === Hb ? void 0 : Hb.content
      })
    }

    function nb(bb) {
      let {
        placement: cb = "bottom"
      } = bb;
      return (0, fb.jsx)("div", {
        id: `clientGameHud-${cb}`,
        style: {
          display: "contents"
        }
      })
    }

    function mb(bb) {
      let {
        children: cb,
        placement: sb = "bottom"
      } = bb;
      const [kb, Wb] = (0, Ib.useState)(null);
      return (0, Ib.useEffect)((() => {
        Wb(document.getElementById(`clientGameHud-${sb}`))
      }), [sb]), kb ? (0, Hb.createPortal)(cb, kb) : null
    }
  },
  8917: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(4275),
      Wb = sb(4282);

    function ab(bb) {
      let {
        children: cb,
        showing: sb,
        globallyUniqueKey: ab,
        alwaysMountChildren: Tb = !1,
        doGameplayStartStopOnShow: Ub = !0,
        keepsMovement: Ib = !1
      } = bb;
      return (0, Wb.d)(!0, sb, ab, Ib), (0, kb.e)(Ub, sb), sb || Tb ? cb : null
    }
  },
  4728: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1087);

    function Tb(bb) {
      let {
        options: cb,
        value: sb,
        onChange: kb,
        ariaLabel: Tb,
        className: Ub,
        reselectable: Ib = !1,
        keepsFocus: Hb = !1
      } = bb;
      return (0, ab.jsx)("div", {
        className: Wb()("SegmentedToggle", Ub),
        role: "group",
        "aria-label": Tb,
        children: cb.map((bb => {
          const cb = bb.value === sb;
          return (0, ab.jsx)("button", {
            type: "button",
            "aria-pressed": cb,
            "aria-label": bb.ariaLabel,
            title: bb.ariaLabel,
            className: Wb()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: cb
            }),
            onMouseDown: Hb ? bb => {
              bb.preventDefault()
            } : void 0,
            onClick: () => {
              cb && !Ib || kb(bb.value)
            },
            children: bb.label
          }, bb.value)
        }))
      })
    }
  },
  8330: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      e: () => Wb
    });
    let kb = null;
    const Wb = function(bb) {
        const cb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return kb = cb, () => {
          kb === cb && (kb = null)
        }
      },
      ab = () => {
        var bb;
        return null !== (bb = kb) && void 0 !== bb && bb.canCycle() ? kb.cycle : null
      }
  },
  36410: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      f: () => ab
    });
    const kb = new Map;

    function Wb(bb) {
      var cb;
      return null === bb ? null : null !== (cb = kb.get(bb)) && void 0 !== cb ? cb : null
    }

    function ab(bb, cb) {
      return kb.set(bb, cb), () => {
        kb.get(bb) === cb && kb.delete(bb)
      }
    }
  },
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  38029: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => ub,
      D: () => hb,
      G: () => Lb,
      J: () => Vb,
      K: () => Xb,
      M: () => lb,
      N: () => eb,
      P: () => Wb,
      e: () => fb,
      h: () => Ib,
      j: () => Nb,
      k: () => Hb,
      l: () => Ub,
      o: () => Tb,
      r: () => ab,
      u: () => Yb,
      y: () => nb
    });
    var kb = sb(9096);

    function Wb(bb) {
      return Math.floor(bb).toLocaleString("en-US")
    }
    const ab = 2e3,
      Tb = .005,
      Ub = .001,
      Ib = 2,
      Hb = "Fluid Tank",
      fb = "Coolant Mixer",
      Mb = 144;

    function Xb(bb) {
      const cb = bb.split("|")[0];
      return (0, kb.k)(cb) ? cb === kb.e ? "cryo" : "water" : null
    }
    const nb = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      mb = 63;

    function lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const sb = cb ? function(bb, cb, sb) {
        const kb = nb.findIndex((kb => {
          let [Wb, ab, Tb] = kb;
          return Wb === bb && ab === cb && Tb === sb
        }));
        return kb < 0 ? 0 : 1 << kb
      }(cb[0], cb[1], cb[2]) : 0;
      return "maker" === bb ? {
        kind: bb,
        faces: sb
      } : "user" === bb ? {
        kind: bb,
        faces: mb & ~sb
      } : {
        kind: bb,
        faces: mb
      }
    }

    function Qb(bb) {
      return "pipe" === bb || "tank" === bb || "maker" === bb
    }

    function eb(bb, cb, sb) {
      return 0 !== (bb.faces & 1 << sb) && 0 !== (cb.faces & 1 << (1 ^ sb)) && (Qb(bb.kind) || Qb(cb.kind))
    }
    const Cb = (bb, cb, sb, kb) => ({
        input: bb,
        inputAmount: kb,
        output: cb,
        outputAmount: sb
      }),
      Nb = {
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
          recipes: [Cb("Uranium Grit", "Uranium Pellet", 1, 12), Cb("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Cb("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Mb,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Vb(bb, cb) {
      return 1e3 * (null !== cb && void 0 !== cb ? cb : 0) / bb.opMs
    }

    function Lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const sb = Vb(Nb["Coolant Mixer"], Mb) * cb;
      return bb <= 0 ? 0 : Math.ceil(bb / sb - 1e-9)
    }
    const ub = "baf2Water",
      Yb = "baf2waterclose",
      hb = "baf2wateropen"
  },
  38027: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Jb,
      i: () => Vb,
      k: () => Nb
    });
    var kb = sb(9017),
      Wb = sb(9044),
      ab = sb(9096),
      Tb = sb(38029),
      Ub = sb(9091);
    const Ib = (0, Tb.M)("pipe"),
      Hb = (0, Tb.M)("tank"),
      fb = (0, Tb.M)("port"),
      Mb = "Reactor Port";

    function Xb(bb, cb, sb) {
      const kb = new Set([ab.f, ab.e, Mb, ...cb, ...sb, ...bb ? [Tb.k] : []]);
      return {
        makers: new Set(cb),
        roots: kb
      }
    }
    const nb = {
        water: Xb(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Tb.e]),
        cryo: Xb(!1, [Tb.e], [])
      },
      mb = new Set([...nb.water.roots, ...nb.cryo.roots]),
      lb = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Qb = Wb.c.map((bb => lb[bb])),
      eb = Qb.map((bb => {
        let [cb, sb, kb] = bb;
        return Tb.y.findIndex((bb => {
          let [Wb, ab, Tb] = bb;
          return Wb === cb && ab === sb && Tb === kb
        }))
      }));

    function Cb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const sb = kb.g[bb],
        Wb = null === sb || void 0 === sb ? void 0 : sb.meta.rootName,
        Xb = nb[cb];
      if (!Wb || !Xb.roots.has(Wb)) return null;
      if ((0, ab.k)(Wb)) return (0, Tb.K)(sb.name) === cb ? Ib : null;
      if (Wb === Tb.k) return Hb;
      if (Wb === Mb) return sb.name.endsWith("|Water") ? fb : null;
      const [mb, lb] = Ub.f[(sb.meta.rot || 1) - 1];
      return (0, Tb.M)(Xb.makers.has(Wb) ? "maker" : "user", [-mb, 0, -lb])
    }

    function Nb(bb, cb, sb, Wb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ub
      } = nb[ab];
      return Qb.some(((Hb, fb) => {
        var Mb, Xb;
        let [nb, mb, lb] = Hb;
        const Qb = bb(cb + nb, sb + mb, Wb + lb),
          Nb = Cb(Qb, ab);
        return null !== Nb && Ub.has(null !== (Mb = null === (Xb = kb.g[Qb]) || void 0 === Xb ? void 0 : Xb.meta.rootName) && void 0 !== Mb ? Mb : "") && !(0, Tb.N)(Ib, Nb, eb[fb])
      }))
    }

    function Vb(bb) {
      const cb = kb.g[bb];
      return cb ? (0, Tb.K)(cb.name) : null
    }
    let Lb = null;

    function ub(bb) {
      if (!Lb) {
        Lb = new Map;
        for (const bb of ["water", "cryo"])
          for (let cb = 0; cb < 64; cb++)
            for (const sb of [!1, !0]) Lb.set((0, ab.m)(bb, cb, sb), {
              Nn: bb,
              mask: cb,
              full: sb
            })
      }
      return Lb.get(bb)
    }
    const Yb = new Map(Array.from({
      length: ab.j + 1
    }, ((bb, cb) => [(0, ab.n)(cb), cb])));

    function hb(bb, cb, sb, Wb, ab, Tb) {
      return Qb.some(((Ub, Ib) => {
        var Hb, fb, Mb;
        let [Xb, nb, mb] = Ub;
        if (0 === (Tb >> Ib & 1)) return !1;
        const lb = null !== (Hb = null === (fb = kb.g[bb(cb + Xb, sb + nb, Wb + mb)]) || void 0 === fb ? void 0 : fb.name) && void 0 !== Hb ? Hb : "",
          Qb = ub(lb);
        return Qb ? Qb.Nn === ab && Qb.full : (null !== (Mb = function(bb) {
          var cb;
          return null !== (cb = Yb.get(bb)) && void 0 !== cb ? cb : null
        }(lb)) && void 0 !== Mb ? Mb : 0) > 0
      }))
    }
    class Jb {
      constructor() {
        this.reshapeOffsets = Qb
      }
      handles(bb) {
        return null !== Vb(bb)
      }
      affects(bb) {
        var cb, sb;
        return mb.has(null !== (cb = null === (sb = kb.g[bb]) || void 0 === sb ? void 0 : sb.meta.rootName) && void 0 !== cb ? cb : "")
      }
      placedBy(bb) {
        var cb;
        return (null === (cb = kb.g[bb]) || void 0 === cb ? void 0 : cb.meta.rootName) === ab.e ? ab.f : null
      }
      shape(bb, cb, sb, Wb, Ub, Hb) {
        var fb, Mb, Xb;
        const nb = null !== (fb = null === (Mb = kb.g[Ub]) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== fb ? fb : "",
          mb = Hb || nb !== ab.f ? null !== (Xb = (0, Tb.K)(nb)) && void 0 !== Xb ? Xb : "water" : function(bb, cb, sb, kb) {
            return Qb.some(((Wb, ab) => {
              let [Ub, Hb, fb] = Wb;
              const Mb = Cb(bb(cb + Ub, sb + Hb, kb + fb), "cryo");
              return null !== Mb && "port" !== Mb.kind && (0, Tb.N)(Ib, Mb, eb[ab])
            })) ? "cryo" : "water"
          }(bb, cb, sb, Wb),
          lb = function(bb, cb, sb, kb) {
            let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              ab = 0;
            return Qb.forEach(((Ub, Hb) => {
              let [fb, Mb, Xb] = Ub;
              const nb = Cb(bb(cb + fb, sb + Mb, kb + Xb), Wb);
              nb && (0, Tb.N)(Ib, nb, eb[Hb]) && (ab |= 1 << Hb)
            })), ab
          }(bb, cb, sb, Wb, mb),
          Nb = Hb ? function(bb) {
            var cb;
            return !0 === (null === (cb = ub(bb)) || void 0 === cb ? void 0 : cb.full)
          }(nb) : hb(bb, cb, sb, Wb, mb, lb);
        return (0, kb.j)((0, ab.m)(mb, lb, Nb))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);