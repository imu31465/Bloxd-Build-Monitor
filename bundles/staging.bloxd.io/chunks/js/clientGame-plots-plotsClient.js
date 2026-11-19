export const id = 22;
export const ids = [22];
export const modules = {
  35594: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => xT,
      e: () => cT,
      h: () => LT,
      l: () => DT
    });
    var iT = IT(8743),
      zT = IT(35599),
      kT = IT(35601),
      WT = IT(8139),
      XT = IT(1403),
      BT = IT(46),
      FT = IT(68),
      ST = IT(1083);

    function DT() {
      var TT;
      return (0, XT.i)(zT.c, (0, zT.k)()), (0, ST.jsx)(ST.Fragment, {
        children: null === (TT = (0, zT.k)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function LT(TT) {
      var oT;
      let {
        show: IT
      } = TT;
      (0, XT.i)(zT.c, (0, zT.k)());
      const FT = null === (oT = (0, zT.k)()) || void 0 === oT ? void 0 : oT.menu;
      return (0, BT.useEffect)((() => {
        var TT;
        IT || (null === FT || void 0 === FT || null === (TT = FT.onClose) || void 0 === TT || TT.call(FT), (0, kT.r)())
      }), [IT, FT]), (0, BT.useEffect)((() => IT ? (0, WT.f)(kT.x, kT.g) : void 0), [IT]), (0, ST.jsx)(iT.c, {
        showing: IT,
        globallyUniqueKey: "clientGameMenu",
        children: null === FT || void 0 === FT ? void 0 : FT.content
      })
    }

    function xT(TT) {
      let {
        placement: oT = "bottom"
      } = TT;
      return (0, ST.jsx)("div", {
        id: `clientGameHud-${oT}`,
        style: {
          display: "contents"
        }
      })
    }

    function cT(TT) {
      let {
        children: oT,
        placement: IT = "bottom"
      } = TT;
      const [iT, zT] = (0, BT.useState)(null);
      return (0, BT.useEffect)((() => {
        zT(document.getElementById(`clientGameHud-${IT}`))
      }), [IT]), iT ? (0, FT.createPortal)(oT, iT) : null
    }
  },
  8743: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(4057),
      zT = IT(4061);

    function kT(TT) {
      let {
        children: oT,
        showing: IT,
        globallyUniqueKey: kT,
        alwaysMountChildren: WT = !1,
        doGameplayStartStopOnShow: XT = !0,
        keepsMovement: BT = !1
      } = TT;
      return (0, zT.d)(!0, IT, kT, BT), (0, iT.e)(XT, IT), IT || WT ? oT : null
    }
  },
  35692: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      g: () => WT,
      k: () => XT,
      l: () => BT
    });
    var iT = IT(46),
      zT = IT(1108);
    const kT = 8,
      WT = "InGameHeaderContainer",
      XT = "TopRightElements";

    function BT(TT) {
      const [oT] = (0, zT.e)(), [IT, BT] = (0, iT.useState)(!1);
      return (0, iT.useLayoutEffect)((() => {
        if (!TT) return;
        const oT = document.querySelector(`.${WT}`),
          IT = document.querySelector(`.${XT}`),
          iT = () => {
            const iT = TT.getBoundingClientRect(),
              zT = oT ? oT.getBoundingClientRect().right : 0,
              WT = IT ? IT.getBoundingClientRect().left : window.innerWidth,
              XT = iT.left < zT + kT,
              FT = iT.right > WT - kT;
            BT(XT || FT)
          };
        iT();
        const zT = new ResizeObserver(iT);
        return zT.observe(TT), oT && zT.observe(oT), IT && zT.observe(IT), () => {
          zT.disconnect()
        }
      }), [TT, oT]), IT
    }
  },
  8139: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => zT
    });
    let iT = null;
    const zT = function(TT) {
        const oT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return iT = oT, () => {
          iT === oT && (iT = null)
        }
      },
      kT = () => {
        var TT;
        return null !== (TT = iT) && void 0 !== TT && TT.canCycle() ? iT.cycle : null
      }
  },
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  37491: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      i: () => XT,
      m: () => BT
    });
    const iT = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      zT = [0, 1, 2, 0, 2, 3],
      kT = [4, 5];

    function WT(TT, oT, IT, iT, zT) {
      for (let WT = 0; WT < 6; WT++) kT.includes(WT) === zT && FT(TT, oT, IT, iT, WT)
    }

    function XT(TT, oT, IT, iT) {
      for (let zT = 0; zT < 6; zT++) FT(TT, oT, IT, iT, zT)
    }

    function BT(TT, oT, IT, kT, WT) {
      for (let XT = 0; XT < 6; XT++)
        for (const BT of [0, 1]) {
          const [FT, ST, DT] = [BT + 2, BT + 1, (BT + 3) % 4], LT = TT.length / 3;
          for (const [oT, zT] of [
              [BT, ST],
              [FT, ST],
              [FT, DT],
              [BT, DT]
            ])
            for (let BT = 0; BT < 3; BT++) {
              const FT = iT[3 * (4 * XT + oT) + BT],
                ST = iT[3 * (4 * XT + zT) + BT];
              TT.push((FT + (ST - FT) * WT) * kT / 2 + IT[BT])
            }
          for (const TT of zT) oT.push(LT + TT)
        }
    }

    function FT(TT, oT, IT, kT, WT) {
      let [XT, BT, FT] = IT, [ST, DT, LT] = kT;
      const xT = TT.length / 3;
      for (let zT = 4 * WT; zT < 4 * WT + 4; zT++) TT.push(iT[3 * zT] * ST / 2 + XT, iT[3 * zT + 1] * DT / 2 + BT, iT[3 * zT + 2] * LT / 2 + FT);
      for (const iT of zT) oT.push(xT + iT)
    }
  },
  35852: (TT, oT, IT) => {
    function iT(TT, oT) {
      return null === TT || null === oT ? TT === oT : TT[0] === oT[0] && TT[1] === oT[1] && TT[2] === oT[2]
    }

    function zT(TT) {
      return [TT[0] + .5, TT[1] + .5, TT[2] + .5]
    }
    IT.d(oT, {
      b: () => zT,
      c: () => iT
    })
  },
  35882: (TT, oT, IT) => {
    function iT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !iT(TT)
    }

    function kT(TT) {
      return TT.includes(" Strongbed")
    }

    function WT(TT) {
      return iT(TT) || zT(TT) || kT(TT)
    }
    IT.d(oT, {
      d: () => WT,
      f: () => iT,
      g: () => kT,
      i: () => zT
    })
  },
  35877: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT
    });
    var iT = IT(35882),
      zT = IT(8829);
    const kT = [],
      WT = [],
      XT = [],
      BT = [];
    for (const ST of Object.keys(zT.o))(0, iT.f)(ST) ? kT.push(ST) : (0, iT.i)(ST) && WT.push(ST), (0, iT.g)(ST) && XT.push(ST), (ST.includes(" Bed Head") || ST.includes(" Strongbed Head")) && BT.push(ST);
    const FT = {
      leafBeds: kT,
      woolBeds: WT,
      strongBeds: XT,
      beds: [...kT, ...WT, ...XT],
      bedHeads: BT,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);