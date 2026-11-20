export const id = 22;
export const ids = [22];
export const modules = {
  36648: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => aq,
      h: () => Wq,
      j: () => Bq
    });
    var Yq = gq(9277),
      lq = gq(36657),
      Oq = gq(36662),
      mq = gq(8669),
      xq = gq(1416),
      Aq = gq(57),
      cq = gq(71),
      uq = gq(1070);

    function Bq() {
      var qq;
      return (0, xq.h)(lq.c, (0, lq.l)()), (0, uq.jsx)(uq.Fragment, {
        children: null === (qq = (0, lq.l)()) || void 0 === qq ? void 0 : qq.content
      })
    }

    function Wq(qq) {
      var Eq;
      let {
        show: gq
      } = qq;
      (0, xq.h)(lq.c, (0, lq.l)());
      const cq = null === (Eq = (0, lq.l)()) || void 0 === Eq ? void 0 : Eq.menu;
      return (0, Aq.useEffect)((() => {
        var qq;
        gq || (null === cq || void 0 === cq || null === (qq = cq.onClose) || void 0 === qq || qq.call(cq), (0, Oq.m)())
      }), [gq, cq]), (0, Aq.useEffect)((() => gq ? (0, mq.i)(Oq.r, Oq.d) : void 0), [gq]), (0, uq.jsx)(Yq.b, {
        showing: gq,
        globallyUniqueKey: "clientGameMenu",
        children: null === cq || void 0 === cq ? void 0 : cq.content
      })
    }

    function Nq(qq) {
      let {
        placement: Eq = "bottom"
      } = qq;
      return (0, uq.jsx)("div", {
        id: `clientGameHud-${Eq}`,
        style: {
          display: "contents"
        }
      })
    }

    function aq(qq) {
      let {
        children: Eq,
        placement: gq = "bottom"
      } = qq;
      const [Yq, lq] = (0, Aq.useState)(null);
      return (0, Aq.useEffect)((() => {
        lq(document.getElementById(`clientGameHud-${gq}`))
      }), [gq]), Yq ? (0, cq.createPortal)(Eq, Yq) : null
    }
  },
  9277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(4364),
      lq = gq(4367);

    function Oq(qq) {
      let {
        children: Eq,
        showing: gq,
        globallyUniqueKey: Oq,
        alwaysMountChildren: mq = !1,
        doGameplayStartStopOnShow: xq = !0,
        keepsMovement: Aq = !1
      } = qq;
      return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
    }
  },
  36740: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      e: () => mq,
      i: () => xq,
      j: () => Aq
    });
    var Yq = gq(57),
      lq = gq(3018);
    const Oq = 8,
      mq = "InGameHeaderContainer",
      xq = "TopRightElements";

    function Aq(qq) {
      const [Eq] = (0, lq.b)(), [gq, Aq] = (0, Yq.useState)(!1);
      return (0, Yq.useLayoutEffect)((() => {
        if (!qq) return;
        const Eq = document.querySelector(`.${mq}`),
          gq = document.querySelector(`.${xq}`),
          Yq = () => {
            const Yq = qq.getBoundingClientRect(),
              lq = Eq ? Eq.getBoundingClientRect().right : 0,
              mq = gq ? gq.getBoundingClientRect().left : window.innerWidth,
              xq = Yq.left < lq + Oq,
              cq = Yq.right > mq - Oq;
            Aq(xq || cq)
          };
        Yq();
        const lq = new ResizeObserver(Yq);
        return lq.observe(qq), Eq && lq.observe(Eq), gq && lq.observe(gq), () => {
          lq.disconnect()
        }
      }), [qq, Eq]), gq
    }
  },
  8669: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => lq
    });
    let Yq = null;
    const lq = function(qq) {
        const Eq = {
          cycle: qq,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Yq = Eq, () => {
          Yq === Eq && (Yq = null)
        }
      },
      Oq = () => {
        var qq;
        return null !== (qq = Yq) && void 0 !== qq && qq.canCycle() ? Yq.cycle : null
      }
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  38486: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      g: () => xq,
      i: () => Aq
    });
    const Yq = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      lq = [0, 1, 2, 0, 2, 3],
      Oq = [4, 5];

    function mq(qq, Eq, gq, Yq, lq) {
      for (let mq = 0; mq < 6; mq++) Oq.includes(mq) === lq && cq(qq, Eq, gq, Yq, mq)
    }

    function xq(qq, Eq, gq, Yq) {
      for (let lq = 0; lq < 6; lq++) cq(qq, Eq, gq, Yq, lq)
    }

    function Aq(qq, Eq, gq, Oq, mq) {
      for (let xq = 0; xq < 6; xq++)
        for (const Aq of [0, 1]) {
          const [cq, uq, Bq] = [Aq + 2, Aq + 1, (Aq + 3) % 4], Wq = qq.length / 3;
          for (const [Eq, lq] of [
              [Aq, uq],
              [cq, uq],
              [cq, Bq],
              [Aq, Bq]
            ])
            for (let Aq = 0; Aq < 3; Aq++) {
              const cq = Yq[3 * (4 * xq + Eq) + Aq],
                uq = Yq[3 * (4 * xq + lq) + Aq];
              qq.push((cq + (uq - cq) * mq) * Oq / 2 + gq[Aq])
            }
          for (const qq of lq) Eq.push(Wq + qq)
        }
    }

    function cq(qq, Eq, gq, Oq, mq) {
      let [xq, Aq, cq] = gq, [uq, Bq, Wq] = Oq;
      const Nq = qq.length / 3;
      for (let lq = 4 * mq; lq < 4 * mq + 4; lq++) qq.push(Yq[3 * lq] * uq / 2 + xq, Yq[3 * lq + 1] * Bq / 2 + Aq, Yq[3 * lq + 2] * Wq / 2 + cq);
      for (const Yq of lq) Eq.push(Nq + Yq)
    }
  },
  36949: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return null === qq || null === Eq ? qq === Eq : qq[0] === Eq[0] && qq[1] === Eq[1] && qq[2] === Eq[2]
    }

    function lq(qq) {
      return [qq[0] + .5, qq[1] + .5, qq[2] + .5]
    }
    gq.d(Eq, {
      e: () => lq,
      f: () => Yq
    })
  },
  36985: (qq, Eq, gq) => {
    function Yq(qq) {
      return qq.includes("Leaf Bed")
    }

    function lq(qq) {
      return / Bed(?: Head)?(?:\||$)/.test(qq) && !Yq(qq)
    }

    function Oq(qq) {
      return qq.includes(" Strongbed")
    }

    function mq(qq) {
      return Yq(qq) || lq(qq) || Oq(qq)
    }
    gq.d(Eq, {
      b: () => mq,
      c: () => Yq,
      d: () => Oq,
      f: () => lq
    })
  },
  36979: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq
    });
    var Yq = gq(36985),
      lq = gq(9379);
    const Oq = [],
      mq = [],
      xq = [],
      Aq = [];
    for (const uq of Object.keys(lq.o))(0, Yq.c)(uq) ? Oq.push(uq) : (0, Yq.f)(uq) && mq.push(uq), (0, Yq.d)(uq) && xq.push(uq), (uq.includes(" Bed Head") || uq.includes(" Strongbed Head")) && Aq.push(uq);
    const cq = {
      leafBeds: Oq,
      woolBeds: mq,
      strongBeds: xq,
      beds: [...Oq, ...mq, ...xq],
      bedHeads: Aq,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);