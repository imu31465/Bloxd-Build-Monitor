export const id = 22;
export const ids = [22];
export const modules = {
  36228: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => xQ,
      g: () => bQ,
      j: () => HQ
    });
    var LQ = wQ(9094),
      qQ = wQ(36235),
      oQ = wQ(36238),
      DQ = wQ(8464),
      kQ = wQ(1447),
      vQ = wQ(53),
      mQ = wQ(71),
      uQ = wQ(1107);

    function HQ() {
      var QQ;
      return (0, kQ.i)(qQ.b, (0, qQ.k)()), (0, uQ.jsx)(uQ.Fragment, {
        children: null === (QQ = (0, qQ.k)()) || void 0 === QQ ? void 0 : QQ.content
      })
    }

    function bQ(QQ) {
      var FQ;
      let {
        show: wQ
      } = QQ;
      (0, kQ.i)(qQ.b, (0, qQ.k)());
      const mQ = null === (FQ = (0, qQ.k)()) || void 0 === FQ ? void 0 : FQ.menu;
      return (0, vQ.useEffect)((() => {
        var QQ;
        wQ || (null === mQ || void 0 === mQ || null === (QQ = mQ.onClose) || void 0 === QQ || QQ.call(mQ), (0, oQ.o)())
      }), [wQ, mQ]), (0, vQ.useEffect)((() => wQ ? (0, DQ.h)(oQ.v, oQ.g) : void 0), [wQ]), (0, uQ.jsx)(LQ.c, {
        showing: wQ,
        globallyUniqueKey: "clientGameMenu",
        children: null === mQ || void 0 === mQ ? void 0 : mQ.content
      })
    }

    function YQ(QQ) {
      let {
        placement: FQ = "bottom"
      } = QQ;
      return (0, uQ.jsx)("div", {
        id: `clientGameHud-${FQ}`,
        style: {
          display: "contents"
        }
      })
    }

    function xQ(QQ) {
      let {
        children: FQ,
        placement: wQ = "bottom"
      } = QQ;
      const [LQ, qQ] = (0, vQ.useState)(null);
      return (0, vQ.useEffect)((() => {
        qQ(document.getElementById(`clientGameHud-${wQ}`))
      }), [wQ]), LQ ? (0, mQ.createPortal)(FQ, LQ) : null
    }
  },
  9094: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ
    });
    var LQ = wQ(4380),
      qQ = wQ(4388);

    function oQ(QQ) {
      let {
        children: FQ,
        showing: wQ,
        globallyUniqueKey: oQ,
        alwaysMountChildren: DQ = !1,
        doGameplayStartStopOnShow: kQ = !0,
        keepsMovement: vQ = !1
      } = QQ;
      return (0, qQ.d)(!0, wQ, oQ, vQ), (0, LQ.b)(kQ, wQ), wQ || DQ ? FQ : null
    }
  },
  36313: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      d: () => DQ,
      f: () => kQ,
      h: () => vQ
    });
    var LQ = wQ(53),
      qQ = wQ(3002);
    const oQ = 8,
      DQ = "InGameHeaderContainer",
      kQ = "TopRightElements";

    function vQ(QQ) {
      const [FQ] = (0, qQ.b)(), [wQ, vQ] = (0, LQ.useState)(!1);
      return (0, LQ.useLayoutEffect)((() => {
        if (!QQ) return;
        const FQ = document.querySelector(`.${DQ}`),
          wQ = document.querySelector(`.${kQ}`),
          LQ = () => {
            const LQ = QQ.getBoundingClientRect(),
              qQ = FQ ? FQ.getBoundingClientRect().right : 0,
              DQ = wQ ? wQ.getBoundingClientRect().left : window.innerWidth,
              kQ = LQ.left < qQ + oQ,
              mQ = LQ.right > DQ - oQ;
            vQ(kQ || mQ)
          };
        LQ();
        const qQ = new ResizeObserver(LQ);
        return qQ.observe(QQ), FQ && qQ.observe(FQ), wQ && qQ.observe(wQ), () => {
          qQ.disconnect()
        }
      }), [QQ, FQ]), wQ
    }
  },
  8464: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      h: () => qQ
    });
    let LQ = null;
    const qQ = function(QQ) {
        const FQ = {
          cycle: QQ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return LQ = FQ, () => {
          LQ === FQ && (LQ = null)
        }
      },
      oQ = () => {
        var QQ;
        return null !== (QQ = LQ) && void 0 !== QQ && QQ.canCycle() ? LQ.cycle : null
      }
  },
  36238: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => AQ,
      i: () => tQ,
      m: () => kQ,
      n: () => bQ,
      o: () => eQ,
      q: () => HQ,
      u: () => GQ,
      v: () => xQ,
      w: () => MQ
    });
    var LQ = wQ(17),
      qQ = wQ(22);
    const oQ = "clientGameInventoryButtonsChanged",
      DQ = new Map;

    function kQ() {
      return [...DQ.values()].sort(((QQ, FQ) => {
        var wQ, LQ;
        return (null !== (wQ = QQ.order) && void 0 !== wQ ? wQ : 0) - (null !== (LQ = FQ.order) && void 0 !== LQ ? LQ : 0)
      }))
    }
    let vQ = null;

    function mQ(QQ) {
      vQ = QQ
    }
    let uQ = !1;

    function HQ(QQ) {
      uQ = !0;
      try {
        QQ.onClick()
      } finally {
        uQ = !1
      }
      QQ.panel && "clientGame" === LQ.c.get("openInGameMenuName") && mQ(QQ.id)
    }

    function bQ() {
      return uQ
    }

    function YQ() {
      return kQ().filter((QQ => QQ.panel && !QQ.disabled))
    }

    function xQ(QQ) {
      const FQ = YQ(),
        wQ = FQ.findIndex((QQ => QQ.id === vQ));
      return !(wQ < 0 || FQ.length < 2) && (HQ(FQ[(wQ + QQ + FQ.length) % FQ.length]), !0)
    }

    function AQ() {
      return null !== vQ && YQ().length > 1
    }

    function tQ() {
      mQ(null)
    }

    function eQ() {
      "inventory" !== LQ.c.get("openInGameMenuName") && mQ(null)
    }

    function MQ() {
      const QQ = vQ;
      return mQ(null), QQ
    }

    function GQ(QQ) {
      return DQ.set(QQ.id, QQ), qQ.l.GA(oQ, kQ(), !0), () => {
        DQ.get(QQ.id) === QQ && (DQ.delete(QQ.id), qQ.l.GA(oQ, kQ()))
      }
    }
  },
  36235: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      i: () => eQ,
      j: () => bQ,
      k: () => mQ,
      o: () => AQ,
      q: () => YQ,
      u: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(1302),
      DQ = wQ(36238);
    const kQ = "clientGameUiChanged";
    let vQ = null;

    function mQ() {
      return vQ
    }

    function uQ(QQ, FQ) {
      const wQ = {
        content: QQ,
        menu: FQ
      };
      return vQ = wQ, qQ.l.GA(kQ, vQ, !0), () => {
        vQ === wQ && (vQ = null, xQ = !1, tQ(), qQ.l.GA(kQ, null))
      }
    }
    let HQ = null;

    function bQ() {
      return HQ
    }

    function YQ(QQ) {
      return HQ = QQ, () => {
        HQ === QQ && (HQ = null)
      }
    }
    let xQ = !1;

    function AQ() {
      const QQ = LQ.c.get("openInGameMenuName");
      "clientGame" !== QQ && (xQ = "inventory" === QQ), (0, DQ.n)() || (0, DQ.i)(), (0, oQ.n)(oQ.d), LQ.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tQ() {
      MQ(!1)
    }

    function eQ() {
      MQ(xQ)
    }

    function MQ(QQ) {
      "clientGame" === LQ.c.get("openInGameMenuName") && LQ.c.set({
        openInGameMenuName: QQ ? "inventory" : null
      }), QQ || (0, DQ.i)(), xQ = !1
    }
  },
  38046: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      e: () => kQ,
      h: () => vQ
    });
    const LQ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      qQ = [0, 1, 2, 0, 2, 3],
      oQ = [4, 5];

    function DQ(QQ, FQ, wQ, LQ, qQ) {
      for (let DQ = 0; DQ < 6; DQ++) oQ.includes(DQ) === qQ && mQ(QQ, FQ, wQ, LQ, DQ)
    }

    function kQ(QQ, FQ, wQ, LQ) {
      for (let qQ = 0; qQ < 6; qQ++) mQ(QQ, FQ, wQ, LQ, qQ)
    }

    function vQ(QQ, FQ, wQ, oQ, DQ) {
      for (let kQ = 0; kQ < 6; kQ++)
        for (const vQ of [0, 1]) {
          const [mQ, uQ, HQ] = [vQ + 2, vQ + 1, (vQ + 3) % 4], bQ = QQ.length / 3;
          for (const [FQ, qQ] of [
              [vQ, uQ],
              [mQ, uQ],
              [mQ, HQ],
              [vQ, HQ]
            ])
            for (let vQ = 0; vQ < 3; vQ++) {
              const mQ = LQ[3 * (4 * kQ + FQ) + vQ],
                uQ = LQ[3 * (4 * kQ + qQ) + vQ];
              QQ.push((mQ + (uQ - mQ) * DQ) * oQ / 2 + wQ[vQ])
            }
          for (const QQ of qQ) FQ.push(bQ + QQ)
        }
    }

    function mQ(QQ, FQ, wQ, oQ, DQ) {
      let [kQ, vQ, mQ] = wQ, [uQ, HQ, bQ] = oQ;
      const YQ = QQ.length / 3;
      for (let qQ = 4 * DQ; qQ < 4 * DQ + 4; qQ++) QQ.push(LQ[3 * qQ] * uQ / 2 + kQ, LQ[3 * qQ + 1] * HQ / 2 + vQ, LQ[3 * qQ + 2] * bQ / 2 + mQ);
      for (const LQ of qQ) FQ.push(YQ + LQ)
    }
  },
  36523: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return null === QQ || null === FQ ? QQ === FQ : QQ[0] === FQ[0] && QQ[1] === FQ[1] && QQ[2] === FQ[2]
    }

    function qQ(QQ) {
      return [QQ[0] + .5, QQ[1] + .5, QQ[2] + .5]
    }
    wQ.d(FQ, {
      d: () => qQ,
      g: () => LQ
    })
  },
  36561: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !LQ(QQ)
    }

    function oQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function DQ(QQ) {
      return LQ(QQ) || qQ(QQ) || oQ(QQ)
    }
    wQ.d(FQ, {
      e: () => DQ,
      i: () => LQ,
      m: () => oQ,
      q: () => qQ
    })
  },
  36554: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ
    });
    var LQ = wQ(36561),
      qQ = wQ(9195);
    const oQ = [],
      DQ = [],
      kQ = [],
      vQ = [];
    for (const uQ of Object.keys(qQ.k))(0, LQ.i)(uQ) ? oQ.push(uQ) : (0, LQ.q)(uQ) && DQ.push(uQ), (0, LQ.m)(uQ) && kQ.push(uQ), (uQ.includes(" Bed Head") || uQ.includes(" Strongbed Head")) && vQ.push(uQ);
    const mQ = {
      leafBeds: oQ,
      woolBeds: DQ,
      strongBeds: kQ,
      beds: [...oQ, ...DQ, ...kQ],
      bedHeads: vQ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);