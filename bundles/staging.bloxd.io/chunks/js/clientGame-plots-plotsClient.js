export const id = 22;
export const ids = [22];
export const modules = {
  36187: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => uU,
      e: () => CU,
      h: () => jU,
      l: () => GU
    });
    var tU = gU(8982),
      pU = gU(36191),
      EU = gU(36197),
      PU = gU(8340),
      TU = gU(1410),
      qU = gU(56),
      KU = gU(74),
      cU = gU(1090);

    function GU() {
      var UU;
      return (0, TU.h)(pU.e, (0, pU.t)()), (0, cU.jsx)(cU.Fragment, {
        children: null === (UU = (0, pU.t)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function jU(UU) {
      var RU;
      let {
        show: gU
      } = UU;
      (0, TU.h)(pU.e, (0, pU.t)());
      const KU = null === (RU = (0, pU.t)()) || void 0 === RU ? void 0 : RU.menu;
      return (0, qU.useEffect)((() => {
        var UU;
        gU || (null === KU || void 0 === KU || null === (UU = KU.onClose) || void 0 === UU || UU.call(KU), (0, EU.q)())
      }), [gU, KU]), (0, qU.useEffect)((() => gU ? (0, PU.f)(EU.w, EU.e) : void 0), [gU]), (0, cU.jsx)(tU.d, {
        showing: gU,
        globallyUniqueKey: "clientGameMenu",
        children: null === KU || void 0 === KU ? void 0 : KU.content
      })
    }

    function uU(UU) {
      let {
        placement: RU = "bottom"
      } = UU;
      return (0, cU.jsx)("div", {
        id: `clientGameHud-${RU}`,
        style: {
          display: "contents"
        }
      })
    }

    function CU(UU) {
      let {
        children: RU,
        placement: gU = "bottom"
      } = UU;
      const [tU, pU] = (0, qU.useState)(null);
      return (0, qU.useEffect)((() => {
        pU(document.getElementById(`clientGameHud-${gU}`))
      }), [gU]), tU ? (0, KU.createPortal)(RU, tU) : null
    }
  },
  8982: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(4200),
      pU = gU(4206);

    function EU(UU) {
      let {
        children: RU,
        showing: gU,
        globallyUniqueKey: EU,
        alwaysMountChildren: PU = !1,
        doGameplayStartStopOnShow: TU = !0,
        keepsMovement: qU = !1
      } = UU;
      return (0, pU.e)(!0, gU, EU, qU), (0, tU.c)(TU, gU), gU || PU ? RU : null
    }
  },
  36280: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      f: () => PU,
      i: () => TU,
      m: () => qU
    });
    var tU = gU(56),
      pU = gU(1106);
    const EU = 8,
      PU = "InGameHeaderContainer",
      TU = "TopRightElements";

    function qU(UU) {
      const [RU] = (0, pU.d)(), [gU, qU] = (0, tU.useState)(!1);
      return (0, tU.useLayoutEffect)((() => {
        if (!UU) return;
        const RU = document.querySelector(`.${PU}`),
          gU = document.querySelector(`.${TU}`),
          tU = () => {
            const tU = UU.getBoundingClientRect(),
              pU = RU ? RU.getBoundingClientRect().right : 0,
              PU = gU ? gU.getBoundingClientRect().left : window.innerWidth,
              TU = tU.left < pU + EU,
              KU = tU.right > PU - EU;
            qU(TU || KU)
          };
        tU();
        const pU = new ResizeObserver(tU);
        return pU.observe(UU), RU && pU.observe(RU), gU && pU.observe(gU), () => {
          pU.disconnect()
        }
      }), [UU, RU]), gU
    }
  },
  8340: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      f: () => pU
    });
    let tU = null;
    const pU = function(UU) {
        const RU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tU = RU, () => {
          tU === RU && (tU = null)
        }
      },
      EU = () => {
        var UU;
        return null !== (UU = tU) && void 0 !== UU && UU.canCycle() ? tU.cycle : null
      }
  },
  36197: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => hU,
      g: () => QU,
      j: () => TU,
      n: () => jU,
      q: () => eU,
      r: () => GU,
      t: () => fU,
      w: () => CU,
      x: () => WU
    });
    var tU = gU(21),
      pU = gU(24);
    const EU = "clientGameInventoryButtonsChanged",
      PU = new Map;

    function TU() {
      return [...PU.values()].sort(((UU, RU) => {
        var gU, tU;
        return (null !== (gU = UU.order) && void 0 !== gU ? gU : 0) - (null !== (tU = RU.order) && void 0 !== tU ? tU : 0)
      }))
    }
    let qU = null;

    function KU(UU) {
      qU = UU
    }
    let cU = !1;

    function GU(UU) {
      cU = !0;
      try {
        UU.onClick()
      } finally {
        cU = !1
      }
      UU.panel && "clientGame" === tU.b.get("openInGameMenuName") && KU(UU.id)
    }

    function jU() {
      return cU
    }

    function uU() {
      return TU().filter((UU => UU.panel && !UU.disabled))
    }

    function CU(UU) {
      const RU = uU(),
        gU = RU.findIndex((UU => UU.id === qU));
      return !(gU < 0 || RU.length < 2) && (GU(RU[(gU + UU + RU.length) % RU.length]), !0)
    }

    function hU() {
      return null !== qU && uU().length > 1
    }

    function QU() {
      KU(null)
    }

    function eU() {
      "inventory" !== tU.b.get("openInGameMenuName") && KU(null)
    }

    function WU() {
      const UU = qU;
      return KU(null), UU
    }

    function fU(UU) {
      return PU.set(UU.id, UU), pU.p.yh(EU, TU(), !0), () => {
        PU.get(UU.id) === UU && (PU.delete(UU.id), pU.p.yh(EU, TU()))
      }
    }
  },
  36191: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => QU,
      l: () => eU,
      p: () => jU,
      t: () => KU,
      w: () => hU,
      x: () => uU,
      y: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(36197);
    const TU = "clientGameUiChanged";
    let qU = null;

    function KU() {
      return qU
    }

    function cU(UU, RU) {
      const gU = {
        content: UU,
        menu: RU
      };
      return qU = gU, pU.p.yh(TU, qU, !0), () => {
        qU === gU && (qU = null, CU = !1, QU(), pU.p.yh(TU, null))
      }
    }
    let GU = null;

    function jU() {
      return GU
    }

    function uU(UU) {
      return GU = UU, () => {
        GU === UU && (GU = null)
      }
    }
    let CU = !1;

    function hU() {
      const UU = tU.b.get("openInGameMenuName");
      "clientGame" !== UU && (CU = "inventory" === UU), (0, PU.n)() || (0, PU.g)(), (0, EU.o)(EU.c), tU.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function QU() {
      WU(!1)
    }

    function eU() {
      WU(CU)
    }

    function WU(UU) {
      "clientGame" === tU.b.get("openInGameMenuName") && tU.b.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, PU.g)(), CU = !1
    }
  },
  38069: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      f: () => TU,
      j: () => qU
    });
    const tU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      pU = [0, 1, 2, 0, 2, 3],
      EU = [4, 5];

    function PU(UU, RU, gU, tU, pU) {
      for (let PU = 0; PU < 6; PU++) EU.includes(PU) === pU && KU(UU, RU, gU, tU, PU)
    }

    function TU(UU, RU, gU, tU) {
      for (let pU = 0; pU < 6; pU++) KU(UU, RU, gU, tU, pU)
    }

    function qU(UU, RU, gU, EU, PU) {
      for (let TU = 0; TU < 6; TU++)
        for (const qU of [0, 1]) {
          const [KU, cU, GU] = [qU + 2, qU + 1, (qU + 3) % 4], jU = UU.length / 3;
          for (const [RU, pU] of [
              [qU, cU],
              [KU, cU],
              [KU, GU],
              [qU, GU]
            ])
            for (let qU = 0; qU < 3; qU++) {
              const KU = tU[3 * (4 * TU + RU) + qU],
                cU = tU[3 * (4 * TU + pU) + qU];
              UU.push((KU + (cU - KU) * PU) * EU / 2 + gU[qU])
            }
          for (const UU of pU) RU.push(jU + UU)
        }
    }

    function KU(UU, RU, gU, EU, PU) {
      let [TU, qU, KU] = gU, [cU, GU, jU] = EU;
      const uU = UU.length / 3;
      for (let pU = 4 * PU; pU < 4 * PU + 4; pU++) UU.push(tU[3 * pU] * cU / 2 + TU, tU[3 * pU + 1] * GU / 2 + qU, tU[3 * pU + 2] * jU / 2 + KU);
      for (const tU of pU) RU.push(uU + tU)
    }
  },
  36437: (UU, RU, gU) => {
    function tU(UU, RU) {
      return null === UU || null === RU ? UU === RU : UU[0] === RU[0] && UU[1] === RU[1] && UU[2] === RU[2]
    }

    function pU(UU) {
      return [UU[0] + .5, UU[1] + .5, UU[2] + .5]
    }
    gU.d(RU, {
      b: () => pU,
      c: () => tU
    })
  },
  36470: (UU, RU, gU) => {
    function tU(UU) {
      return UU.includes("Leaf Bed")
    }

    function pU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !tU(UU)
    }

    function EU(UU) {
      return UU.includes(" Strongbed")
    }

    function PU(UU) {
      return tU(UU) || pU(UU) || EU(UU)
    }
    gU.d(RU, {
      d: () => PU,
      e: () => tU,
      i: () => EU,
      m: () => pU
    })
  },
  36467: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU
    });
    var tU = gU(36470),
      pU = gU(9078);
    const EU = [],
      PU = [],
      TU = [],
      qU = [];
    for (const cU of Object.keys(pU.k))(0, tU.e)(cU) ? EU.push(cU) : (0, tU.m)(cU) && PU.push(cU), (0, tU.i)(cU) && TU.push(cU), (cU.includes(" Bed Head") || cU.includes(" Strongbed Head")) && qU.push(cU);
    const KU = {
      leafBeds: EU,
      woolBeds: PU,
      strongBeds: TU,
      beds: [...EU, ...PU, ...TU],
      bedHeads: qU,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);