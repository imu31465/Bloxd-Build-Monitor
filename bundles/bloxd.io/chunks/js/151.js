export const id = 151;
export const ids = [151];
export const modules = {
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
  8400: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(8405),
      pU = gU(581),
      EU = gU(135);

    function PU(UU) {
      var RU, gU;
      if ((0, pU.E)(UU)) return !0;
      const PU = null !== (RU = null === (gU = EU.p[EU.t]) || void 0 === gU ? void 0 : gU.adConfig.showRewardedAds) && void 0 !== RU && RU;
      for (const pU in UU) {
        const RU = UU[pU];
        if (null !== RU && void 0 !== RU && RU.items)
          for (const UU in RU.items)
            if ((0, tU.l)(RU.items[UU], PU)) return !1
      }
      return !0
    }
  },
  41951: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      getClientGameMapKey: () => tU.p,
      shopIsEmpty: () => pU.c
    });
    var tU = gU(36191),
      pU = gU(8400)
  },
  8405: (UU, RU, gU) => {
    function tU(UU, RU) {
      return !UU.hidden && (RU || !UU.isRewardedAd)
    }

    function pU(UU) {
      return "object" === typeof UU ? UU.option : UU
    }

    function EU(UU, RU) {
      var gU;
      if ("dropdown" === (null === (gU = UU.userInput) || void 0 === gU ? void 0 : gU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
        for (const gU of UU.userInput.dropdownOptions)
          if (pU(gU) === RU) return "object" === typeof gU ? gU.cost : UU.cost;
        console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", RU)
      }
      return UU.cost
    }

    function PU(UU, RU, gU) {
      var tU;
      const pU = null !== (tU = gU.excludedPlayers) && void 0 !== tU ? tU : [RU];
      return UU.filter((UU => !pU.includes(UU)))
    }
    gU.d(RU, {
      e: () => EU,
      h: () => pU,
      i: () => PU,
      l: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);