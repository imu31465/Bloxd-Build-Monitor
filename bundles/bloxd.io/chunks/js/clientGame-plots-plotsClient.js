export const id = 22;
export const ids = [22];
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
  36334: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      i: () => Tb,
      l: () => Ub,
      n: () => Ib
    });
    var kb = sb(64),
      Wb = sb(1113);
    const ab = 8,
      Tb = "InGameHeaderContainer",
      Ub = "TopRightElements";

    function Ib(bb) {
      const [cb] = (0, Wb.c)(), [sb, Ib] = (0, kb.useState)(!1);
      return (0, kb.useLayoutEffect)((() => {
        if (!bb) return;
        const cb = document.querySelector(`.${Tb}`),
          sb = document.querySelector(`.${Ub}`),
          kb = () => {
            const kb = bb.getBoundingClientRect(),
              Wb = cb ? cb.getBoundingClientRect().right : 0,
              Tb = sb ? sb.getBoundingClientRect().left : window.innerWidth,
              Ub = kb.left < Wb + ab,
              Hb = kb.right > Tb - ab;
            Ib(Ub || Hb)
          };
        kb();
        const Wb = new ResizeObserver(kb);
        return Wb.observe(bb), cb && Wb.observe(cb), sb && Wb.observe(sb), () => {
          Wb.disconnect()
        }
      }), [bb, cb]), sb
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
  38126: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => Ub,
      j: () => Ib
    });
    const kb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Wb = [0, 1, 2, 0, 2, 3],
      ab = [4, 5];

    function Tb(bb, cb, sb, kb, Wb) {
      for (let Tb = 0; Tb < 6; Tb++) ab.includes(Tb) === Wb && Hb(bb, cb, sb, kb, Tb)
    }

    function Ub(bb, cb, sb, kb) {
      for (let Wb = 0; Wb < 6; Wb++) Hb(bb, cb, sb, kb, Wb)
    }

    function Ib(bb, cb, sb, ab, Tb) {
      for (let Ub = 0; Ub < 6; Ub++)
        for (const Ib of [0, 1]) {
          const [Hb, fb, Mb] = [Ib + 2, Ib + 1, (Ib + 3) % 4], Xb = bb.length / 3;
          for (const [cb, Wb] of [
              [Ib, fb],
              [Hb, fb],
              [Hb, Mb],
              [Ib, Mb]
            ])
            for (let Ib = 0; Ib < 3; Ib++) {
              const Hb = kb[3 * (4 * Ub + cb) + Ib],
                fb = kb[3 * (4 * Ub + Wb) + Ib];
              bb.push((Hb + (fb - Hb) * Tb) * ab / 2 + sb[Ib])
            }
          for (const bb of Wb) cb.push(Xb + bb)
        }
    }

    function Hb(bb, cb, sb, ab, Tb) {
      let [Ub, Ib, Hb] = sb, [fb, Mb, Xb] = ab;
      const nb = bb.length / 3;
      for (let Wb = 4 * Tb; Wb < 4 * Tb + 4; Wb++) bb.push(kb[3 * Wb] * fb / 2 + Ub, kb[3 * Wb + 1] * Mb / 2 + Ib, kb[3 * Wb + 2] * Xb / 2 + Hb);
      for (const kb of Wb) cb.push(nb + kb)
    }
  },
  36469: (bb, cb, sb) => {
    function kb(bb, cb) {
      return null === bb || null === cb ? bb === cb : bb[0] === cb[0] && bb[1] === cb[1] && bb[2] === cb[2]
    }

    function Wb(bb) {
      return [bb[0] + .5, bb[1] + .5, bb[2] + .5]
    }
    sb.d(cb, {
      e: () => Wb,
      f: () => kb
    })
  },
  36505: (bb, cb, sb) => {
    function kb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Wb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !kb(bb)
    }

    function ab(bb) {
      return bb.includes(" Strongbed")
    }

    function Tb(bb) {
      return kb(bb) || Wb(bb) || ab(bb)
    }
    sb.d(cb, {
      e: () => Tb,
      f: () => kb,
      h: () => ab,
      j: () => Wb
    })
  },
  36502: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb
    });
    var kb = sb(36505),
      Wb = sb(9017);
    const ab = [],
      Tb = [],
      Ub = [],
      Ib = [];
    for (const fb of Object.keys(Wb.k))(0, kb.f)(fb) ? ab.push(fb) : (0, kb.j)(fb) && Tb.push(fb), (0, kb.h)(fb) && Ub.push(fb), (fb.includes(" Bed Head") || fb.includes(" Strongbed Head")) && Ib.push(fb);
    const Hb = {
      leafBeds: ab,
      woolBeds: Tb,
      strongBeds: Ub,
      beds: [...ab, ...Tb, ...Ub],
      bedHeads: Ib,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);