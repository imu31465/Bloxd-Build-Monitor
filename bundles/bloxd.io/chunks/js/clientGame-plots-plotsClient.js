export const id = 22;
export const ids = [22];
export const modules = {
  36416: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => jT,
      g: () => vT,
      j: () => CT,
      k: () => AT
    });
    var lT = cT(9359),
      MT = cT(36423),
      KT = cT(36432),
      OT = cT(8746),
      yT = cT(1461),
      fT = cT(71),
      xT = cT(94),
      IT = cT(1099);

    function AT() {
      var TT;
      return (0, yT.i)(MT.b, (0, MT.j)()), (0, IT.jsx)(IT.Fragment, {
        children: null === (TT = (0, MT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function CT(TT) {
      var kT;
      let {
        show: cT
      } = TT;
      (0, yT.i)(MT.b, (0, MT.j)());
      const xT = null === (kT = (0, MT.j)()) || void 0 === kT ? void 0 : kT.menu;
      return (0, fT.useEffect)((() => {
        var TT;
        cT || (null === xT || void 0 === xT || null === (TT = xT.onClose) || void 0 === TT || TT.call(xT), (0, KT.q)())
      }), [cT, xT]), (0, fT.useEffect)((() => cT ? (0, OT.e)(KT.A, KT.h) : void 0), [cT]), (0, IT.jsx)(lT.b, {
        showing: cT,
        globallyUniqueKey: "clientGameMenu",
        children: null === xT || void 0 === xT ? void 0 : xT.content
      })
    }

    function jT(TT) {
      let {
        placement: kT = "bottom"
      } = TT;
      return (0, IT.jsx)("div", {
        id: `clientGameHud-${kT}`,
        style: {
          display: "contents"
        }
      })
    }

    function vT(TT) {
      let {
        children: kT,
        placement: cT = "bottom"
      } = TT;
      const [lT, MT] = (0, fT.useState)(null);
      return (0, fT.useEffect)((() => {
        MT(document.getElementById(`clientGameHud-${cT}`))
      }), [cT]), lT ? (0, xT.createPortal)(kT, lT) : null
    }
  },
  9359: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(4521),
      MT = cT(4528);

    function KT(TT) {
      let {
        children: kT,
        showing: cT,
        globallyUniqueKey: KT,
        alwaysMountChildren: OT = !1,
        doGameplayStartStopOnShow: yT = !0,
        keepsMovement: fT = !1
      } = TT;
      return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
    }
  },
  36506: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      g: () => OT,
      j: () => yT,
      m: () => fT
    });
    var lT = cT(71),
      MT = cT(3041);
    const KT = 8,
      OT = "InGameHeaderContainer",
      yT = "TopRightElements";

    function fT(TT) {
      const [kT] = (0, MT.d)(), [cT, fT] = (0, lT.useState)(!1);
      return (0, lT.useLayoutEffect)((() => {
        if (!TT) return;
        const kT = document.querySelector(`.${OT}`),
          cT = document.querySelector(`.${yT}`),
          lT = () => {
            const lT = TT.getBoundingClientRect(),
              MT = kT ? kT.getBoundingClientRect().right : 0,
              OT = cT ? cT.getBoundingClientRect().left : window.innerWidth,
              yT = lT.left < MT + KT,
              xT = lT.right > OT - KT;
            fT(yT || xT)
          };
        lT();
        const MT = new ResizeObserver(lT);
        return MT.observe(TT), kT && MT.observe(kT), cT && MT.observe(cT), () => {
          MT.disconnect()
        }
      }), [TT, kT]), cT
    }
  },
  8746: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      e: () => MT
    });
    let lT = null;
    const MT = function(TT) {
        const kT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return lT = kT, () => {
          lT === kT && (lT = null)
        }
      },
      KT = () => {
        var TT;
        return null !== (TT = lT) && void 0 !== TT && TT.canCycle() ? lT.cycle : null
      }
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  38363: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      d: () => yT,
      f: () => fT
    });
    const lT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      MT = [0, 1, 2, 0, 2, 3],
      KT = [4, 5];

    function OT(TT, kT, cT, lT, MT) {
      for (let OT = 0; OT < 6; OT++) KT.includes(OT) === MT && xT(TT, kT, cT, lT, OT)
    }

    function yT(TT, kT, cT, lT) {
      for (let MT = 0; MT < 6; MT++) xT(TT, kT, cT, lT, MT)
    }

    function fT(TT, kT, cT, KT, OT) {
      for (let yT = 0; yT < 6; yT++)
        for (const fT of [0, 1]) {
          const [xT, IT, AT] = [fT + 2, fT + 1, (fT + 3) % 4], CT = TT.length / 3;
          for (const [kT, MT] of [
              [fT, IT],
              [xT, IT],
              [xT, AT],
              [fT, AT]
            ])
            for (let fT = 0; fT < 3; fT++) {
              const xT = lT[3 * (4 * yT + kT) + fT],
                IT = lT[3 * (4 * yT + MT) + fT];
              TT.push((xT + (IT - xT) * OT) * KT / 2 + cT[fT])
            }
          for (const TT of MT) kT.push(CT + TT)
        }
    }

    function xT(TT, kT, cT, KT, OT) {
      let [yT, fT, xT] = cT, [IT, AT, CT] = KT;
      const jT = TT.length / 3;
      for (let MT = 4 * OT; MT < 4 * OT + 4; MT++) TT.push(lT[3 * MT] * IT / 2 + yT, lT[3 * MT + 1] * AT / 2 + fT, lT[3 * MT + 2] * CT / 2 + xT);
      for (const lT of MT) kT.push(jT + lT)
    }
  },
  36725: (TT, kT, cT) => {
    function lT(TT, kT) {
      return null === TT || null === kT ? TT === kT : TT[0] === kT[0] && TT[1] === kT[1] && TT[2] === kT[2]
    }

    function MT(TT) {
      return [TT[0] + .5, TT[1] + .5, TT[2] + .5]
    }
    cT.d(kT, {
      b: () => MT,
      c: () => lT
    })
  },
  36761: (TT, kT, cT) => {
    function lT(TT) {
      return TT.includes("Leaf Bed")
    }

    function MT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !lT(TT)
    }

    function KT(TT) {
      return TT.includes(" Strongbed")
    }

    function OT(TT) {
      return lT(TT) || MT(TT) || KT(TT)
    }
    cT.d(kT, {
      c: () => OT,
      d: () => lT,
      e: () => KT,
      g: () => MT
    })
  },
  36756: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT
    });
    var lT = cT(36761),
      MT = cT(9447);
    const KT = [],
      OT = [],
      yT = [],
      fT = [];
    for (const IT of Object.keys(MT.n))(0, lT.d)(IT) ? KT.push(IT) : (0, lT.g)(IT) && OT.push(IT), (0, lT.e)(IT) && yT.push(IT), (IT.includes(" Bed Head") || IT.includes(" Strongbed Head")) && fT.push(IT);
    const xT = {
      leafBeds: KT,
      woolBeds: OT,
      strongBeds: yT,
      beds: [...KT, ...OT, ...yT],
      bedHeads: fT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);