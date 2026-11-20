export const id = 22;
export const ids = [22];
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
  36309: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      d: () => Ub,
      g: () => Lb,
      h: () => Yb
    });
    var Bb = hb(49),
      Ob = hb(2903);
    const Gb = 8,
      Ub = "InGameHeaderContainer",
      Lb = "TopRightElements";

    function Yb(bb) {
      const [ub] = (0, Ob.e)(), [hb, Yb] = (0, Bb.useState)(!1);
      return (0, Bb.useLayoutEffect)((() => {
        if (!bb) return;
        const ub = document.querySelector(`.${Ub}`),
          hb = document.querySelector(`.${Lb}`),
          Bb = () => {
            const Bb = bb.getBoundingClientRect(),
              Ob = ub ? ub.getBoundingClientRect().right : 0,
              Ub = hb ? hb.getBoundingClientRect().left : window.innerWidth,
              Lb = Bb.left < Ob + Gb,
              Sb = Bb.right > Ub - Gb;
            Yb(Lb || Sb)
          };
        Bb();
        const Ob = new ResizeObserver(Bb);
        return Ob.observe(bb), ub && Ob.observe(ub), hb && Ob.observe(hb), () => {
          Ob.disconnect()
        }
      }), [bb, ub]), hb
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
  38142: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      e: () => Lb,
      f: () => Yb
    });
    const Bb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Ob = [0, 1, 2, 0, 2, 3],
      Gb = [4, 5];

    function Ub(bb, ub, hb, Bb, Ob) {
      for (let Ub = 0; Ub < 6; Ub++) Gb.includes(Ub) === Ob && Sb(bb, ub, hb, Bb, Ub)
    }

    function Lb(bb, ub, hb, Bb) {
      for (let Ob = 0; Ob < 6; Ob++) Sb(bb, ub, hb, Bb, Ob)
    }

    function Yb(bb, ub, hb, Gb, Ub) {
      for (let Lb = 0; Lb < 6; Lb++)
        for (const Yb of [0, 1]) {
          const [Sb, ab, Hb] = [Yb + 2, Yb + 1, (Yb + 3) % 4], wb = bb.length / 3;
          for (const [ub, Ob] of [
              [Yb, ab],
              [Sb, ab],
              [Sb, Hb],
              [Yb, Hb]
            ])
            for (let Yb = 0; Yb < 3; Yb++) {
              const Sb = Bb[3 * (4 * Lb + ub) + Yb],
                ab = Bb[3 * (4 * Lb + Ob) + Yb];
              bb.push((Sb + (ab - Sb) * Ub) * Gb / 2 + hb[Yb])
            }
          for (const bb of Ob) ub.push(wb + bb)
        }
    }

    function Sb(bb, ub, hb, Gb, Ub) {
      let [Lb, Yb, Sb] = hb, [ab, Hb, wb] = Gb;
      const Zb = bb.length / 3;
      for (let Ob = 4 * Ub; Ob < 4 * Ub + 4; Ob++) bb.push(Bb[3 * Ob] * ab / 2 + Lb, Bb[3 * Ob + 1] * Hb / 2 + Yb, Bb[3 * Ob + 2] * wb / 2 + Sb);
      for (const Bb of Ob) ub.push(Zb + Bb)
    }
  },
  36549: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return null === bb || null === ub ? bb === ub : bb[0] === ub[0] && bb[1] === ub[1] && bb[2] === ub[2]
    }

    function Ob(bb) {
      return [bb[0] + .5, bb[1] + .5, bb[2] + .5]
    }
    hb.d(ub, {
      d: () => Ob,
      h: () => Bb
    })
  },
  36591: (bb, ub, hb) => {
    function Bb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Ob(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Bb(bb)
    }

    function Gb(bb) {
      return bb.includes(" Strongbed")
    }

    function Ub(bb) {
      return Bb(bb) || Ob(bb) || Gb(bb)
    }
    hb.d(ub, {
      b: () => Ub,
      f: () => Bb,
      g: () => Gb,
      i: () => Ob
    })
  },
  36584: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb
    });
    var Bb = hb(36591),
      Ob = hb(9181);
    const Gb = [],
      Ub = [],
      Lb = [],
      Yb = [];
    for (const ab of Object.keys(Ob.l))(0, Bb.f)(ab) ? Gb.push(ab) : (0, Bb.i)(ab) && Ub.push(ab), (0, Bb.g)(ab) && Lb.push(ab), (ab.includes(" Bed Head") || ab.includes(" Strongbed Head")) && Yb.push(ab);
    const Sb = {
      leafBeds: Gb,
      woolBeds: Ub,
      strongBeds: Lb,
      beds: [...Gb, ...Ub, ...Lb],
      bedHeads: Yb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);