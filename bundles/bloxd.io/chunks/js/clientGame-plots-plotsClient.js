export const id = 22;
export const ids = [22];
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
  36090: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      e: () => Eb,
      g: () => Yb,
      j: () => Bb
    });
    var Ab = Ub(52),
      Mb = Ub(1055);
    const Tb = 8,
      Eb = "InGameHeaderContainer",
      Yb = "TopRightElements";

    function Bb(bb) {
      const [ab] = (0, Mb.e)(), [Ub, Bb] = (0, Ab.useState)(!1);
      return (0, Ab.useLayoutEffect)((() => {
        if (!bb) return;
        const ab = document.querySelector(`.${Eb}`),
          Ub = document.querySelector(`.${Yb}`),
          Ab = () => {
            const Ab = bb.getBoundingClientRect(),
              Mb = ab ? ab.getBoundingClientRect().right : 0,
              Eb = Ub ? Ub.getBoundingClientRect().left : window.innerWidth,
              Yb = Ab.left < Mb + Tb,
              eb = Ab.right > Eb - Tb;
            Bb(Yb || eb)
          };
        Ab();
        const Mb = new ResizeObserver(Ab);
        return Mb.observe(bb), ab && Mb.observe(ab), Ub && Mb.observe(Ub), () => {
          Mb.disconnect()
        }
      }), [bb, ab]), Ub
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
  37849: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      e: () => Yb,
      h: () => Bb
    });
    const Ab = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Mb = [0, 1, 2, 0, 2, 3],
      Tb = [4, 5];

    function Eb(bb, ab, Ub, Ab, Mb) {
      for (let Eb = 0; Eb < 6; Eb++) Tb.includes(Eb) === Mb && eb(bb, ab, Ub, Ab, Eb)
    }

    function Yb(bb, ab, Ub, Ab) {
      for (let Mb = 0; Mb < 6; Mb++) eb(bb, ab, Ub, Ab, Mb)
    }

    function Bb(bb, ab, Ub, Tb, Eb) {
      for (let Yb = 0; Yb < 6; Yb++)
        for (const Bb of [0, 1]) {
          const [eb, vb, Lb] = [Bb + 2, Bb + 1, (Bb + 3) % 4], Pb = bb.length / 3;
          for (const [ab, Mb] of [
              [Bb, vb],
              [eb, vb],
              [eb, Lb],
              [Bb, Lb]
            ])
            for (let Bb = 0; Bb < 3; Bb++) {
              const eb = Ab[3 * (4 * Yb + ab) + Bb],
                vb = Ab[3 * (4 * Yb + Mb) + Bb];
              bb.push((eb + (vb - eb) * Eb) * Tb / 2 + Ub[Bb])
            }
          for (const bb of Mb) ab.push(Pb + bb)
        }
    }

    function eb(bb, ab, Ub, Tb, Eb) {
      let [Yb, Bb, eb] = Ub, [vb, Lb, Pb] = Tb;
      const Xb = bb.length / 3;
      for (let Mb = 4 * Eb; Mb < 4 * Eb + 4; Mb++) bb.push(Ab[3 * Mb] * vb / 2 + Yb, Ab[3 * Mb + 1] * Lb / 2 + Bb, Ab[3 * Mb + 2] * Pb / 2 + eb);
      for (const Ab of Mb) ab.push(Xb + Ab)
    }
  },
  36226: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return null === bb || null === ab ? bb === ab : bb[0] === ab[0] && bb[1] === ab[1] && bb[2] === ab[2]
    }

    function Mb(bb) {
      return [bb[0] + .5, bb[1] + .5, bb[2] + .5]
    }
    Ub.d(ab, {
      d: () => Mb,
      e: () => Ab
    })
  },
  36263: (bb, ab, Ub) => {
    function Ab(bb) {
      return bb.includes("Leaf Bed")
    }

    function Mb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !Ab(bb)
    }

    function Tb(bb) {
      return bb.includes(" Strongbed")
    }

    function Eb(bb) {
      return Ab(bb) || Mb(bb) || Tb(bb)
    }
    Ub.d(ab, {
      d: () => Eb,
      g: () => Ab,
      h: () => Tb,
      i: () => Mb
    })
  },
  36260: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(36263),
      Mb = Ub(9007);
    const Tb = [],
      Eb = [],
      Yb = [],
      Bb = [];
    for (const vb of Object.keys(Mb.p))(0, Ab.g)(vb) ? Tb.push(vb) : (0, Ab.i)(vb) && Eb.push(vb), (0, Ab.h)(vb) && Yb.push(vb), (vb.includes(" Bed Head") || vb.includes(" Strongbed Head")) && Bb.push(vb);
    const eb = {
      leafBeds: Tb,
      woolBeds: Eb,
      strongBeds: Yb,
      beds: [...Tb, ...Eb, ...Yb],
      bedHeads: Bb,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);