export const id = 22;
export const ids = [22];
export const modules = {
  36616: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      g: () => KS,
      j: () => kS,
      k: () => fS
    });
    var tS = gS(34223),
      bS = gS(36624),
      XS = gS(36632),
      xS = gS(8920),
      NS = gS(1522),
      qS = gS(64),
      uS = gS(77),
      IS = gS(1181);

    function fS() {
      var SS;
      return (0, NS.i)(bS.e, (0, bS.s)()), (0, IS.jsx)(IS.Fragment, {
        children: null === (SS = (0, bS.s)()) || void 0 === SS ? void 0 : SS.content
      })
    }

    function kS(SS) {
      var HS;
      let {
        show: gS
      } = SS;
      (0, NS.i)(bS.e, (0, bS.s)());
      const uS = null === (HS = (0, bS.s)()) || void 0 === HS ? void 0 : HS.menu;
      return (0, qS.useEffect)((() => {
        var SS;
        gS || (null === uS || void 0 === uS || null === (SS = uS.onClose) || void 0 === SS || SS.call(uS), (0, XS.s)())
      }), [gS, uS]), (0, qS.useEffect)((() => gS ? (0, xS.c)(XS.v, XS.h) : void 0), [gS]), (0, IS.jsx)(tS.b, {
        showing: gS,
        globallyUniqueKey: "clientGameMenu",
        children: null === uS || void 0 === uS ? void 0 : uS.content
      })
    }

    function aS(SS) {
      let {
        placement: HS = "bottom"
      } = SS;
      return (0, IS.jsx)("div", {
        id: `clientGameHud-${HS}`,
        style: {
          display: "contents"
        }
      })
    }

    function KS(SS) {
      let {
        children: HS,
        placement: gS = "bottom"
      } = SS;
      const [tS, bS] = (0, qS.useState)(null);
      return (0, qS.useEffect)((() => {
        bS(document.getElementById(`clientGameHud-${gS}`))
      }), [gS]), tS ? (0, uS.createPortal)(HS, tS) : null
    }
  },
  34223: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(4669),
      bS = gS(4675);

    function XS(SS) {
      let {
        children: HS,
        showing: gS,
        globallyUniqueKey: XS,
        alwaysMountChildren: xS = !1,
        doGameplayStartStopOnShow: NS = !0,
        keepsMovement: qS = !1
      } = SS;
      return (0, bS.c)(!0, gS, XS, qS), (0, tS.c)(NS, gS), gS || xS ? HS : null
    }
  },
  36710: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      f: () => xS,
      j: () => NS,
      m: () => qS
    });
    var tS = gS(64),
      bS = gS(3283);
    const XS = 8,
      xS = "InGameHeaderContainer",
      NS = "TopRightElements";

    function qS(SS) {
      const [HS] = (0, bS.d)(), [gS, qS] = (0, tS.useState)(!1);
      return (0, tS.useLayoutEffect)((() => {
        if (!SS) return;
        const HS = document.querySelector(`.${xS}`),
          gS = document.querySelector(`.${NS}`),
          tS = () => {
            const tS = SS.getBoundingClientRect(),
              bS = HS ? HS.getBoundingClientRect().right : 0,
              xS = gS ? gS.getBoundingClientRect().left : window.innerWidth,
              NS = tS.left < bS + XS,
              uS = tS.right > xS - XS;
            qS(NS || uS)
          };
        tS();
        const bS = new ResizeObserver(tS);
        return bS.observe(SS), HS && bS.observe(HS), gS && bS.observe(gS), () => {
          bS.disconnect()
        }
      }), [SS, HS]), gS
    }
  },
  8920: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      c: () => bS
    });
    let tS = null;
    const bS = function(SS) {
        const HS = {
          cycle: SS,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tS = HS, () => {
          tS === HS && (tS = null)
        }
      },
      XS = () => {
        var SS;
        return null !== (SS = tS) && void 0 !== SS && SS.canCycle() ? tS.cycle : null
      }
  },
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  38541: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      e: () => NS,
      g: () => qS
    });
    const tS = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      bS = [0, 1, 2, 0, 2, 3],
      XS = [4, 5];

    function xS(SS, HS, gS, tS, bS) {
      for (let xS = 0; xS < 6; xS++) XS.includes(xS) === bS && uS(SS, HS, gS, tS, xS)
    }

    function NS(SS, HS, gS, tS) {
      for (let bS = 0; bS < 6; bS++) uS(SS, HS, gS, tS, bS)
    }

    function qS(SS, HS, gS, XS, xS) {
      for (let NS = 0; NS < 6; NS++)
        for (const qS of [0, 1]) {
          const [uS, IS, fS] = [qS + 2, qS + 1, (qS + 3) % 4], kS = SS.length / 3;
          for (const [HS, bS] of [
              [qS, IS],
              [uS, IS],
              [uS, fS],
              [qS, fS]
            ])
            for (let qS = 0; qS < 3; qS++) {
              const uS = tS[3 * (4 * NS + HS) + qS],
                IS = tS[3 * (4 * NS + bS) + qS];
              SS.push((uS + (IS - uS) * xS) * XS / 2 + gS[qS])
            }
          for (const SS of bS) HS.push(kS + SS)
        }
    }

    function uS(SS, HS, gS, XS, xS) {
      let [NS, qS, uS] = gS, [IS, fS, kS] = XS;
      const aS = SS.length / 3;
      for (let bS = 4 * xS; bS < 4 * xS + 4; bS++) SS.push(tS[3 * bS] * IS / 2 + NS, tS[3 * bS + 1] * fS / 2 + qS, tS[3 * bS + 2] * kS / 2 + uS);
      for (const tS of bS) HS.push(aS + tS)
    }
  },
  36922: (SS, HS, gS) => {
    function tS(SS, HS) {
      return null === SS || null === HS ? SS === HS : SS[0] === HS[0] && SS[1] === HS[1] && SS[2] === HS[2]
    }

    function bS(SS) {
      return [SS[0] + .5, SS[1] + .5, SS[2] + .5]
    }
    gS.d(HS, {
      b: () => bS,
      c: () => tS
    })
  },
  36961: (SS, HS, gS) => {
    function tS(SS) {
      return SS.includes("Leaf Bed")
    }

    function bS(SS) {
      return / Bed(?: Head)?(?:\||$)/.test(SS) && !tS(SS)
    }

    function XS(SS) {
      return SS.includes(" Strongbed")
    }

    function xS(SS) {
      return tS(SS) || bS(SS) || XS(SS)
    }
    gS.d(HS, {
      e: () => xS,
      g: () => tS,
      k: () => XS,
      l: () => bS
    })
  },
  36959: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS
    });
    var tS = gS(36961),
      bS = gS(9361);
    const XS = [],
      xS = [],
      NS = [],
      qS = [];
    for (const IS of Object.keys(bS.o))(0, tS.g)(IS) ? XS.push(IS) : (0, tS.l)(IS) && xS.push(IS), (0, tS.k)(IS) && NS.push(IS), (IS.includes(" Bed Head") || IS.includes(" Strongbed Head")) && qS.push(IS);
    const uS = {
      leafBeds: XS,
      woolBeds: xS,
      strongBeds: NS,
      beds: [...XS, ...xS, ...NS],
      bedHeads: qS,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);