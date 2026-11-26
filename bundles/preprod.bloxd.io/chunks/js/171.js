export const id = 171;
export const ids = [171];
export const modules = {
  37334: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => aU,
      l: () => tU,
      o: () => FU,
      r: () => NU,
      t: () => gU,
      v: () => YU,
      w: () => GU,
      x: () => pU,
      y: () => kU
    });
    var cU = zU(27),
      yU = zU(31);
    const QU = "clientGameInventoryButtonsChanged",
      AU = new Map;

    function FU() {
      return [...AU.values()].sort(((UU, XU) => {
        var zU, cU;
        return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
      }))
    }
    let oU = null;

    function DU(UU) {
      oU = UU
    }
    let EU = !1;

    function YU(UU) {
      EU = !0;
      try {
        UU.onClick()
      } finally {
        EU = !1
      }
      UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
    }

    function NU() {
      return EU
    }

    function IU() {
      return FU().filter((UU => UU.panel && !UU.disabled))
    }

    function pU(UU) {
      const XU = IU(),
        zU = XU.findIndex((UU => UU.id === oU));
      return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
    }

    function aU() {
      return null !== oU && IU().length > 1
    }

    function tU() {
      DU(null)
    }

    function gU() {
      "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
    }

    function kU() {
      const UU = oU;
      return DU(null), UU
    }

    function GU(UU) {
      return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
        AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
      }
    }
  },
  37325: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => kU,
      j: () => tU,
      l: () => gU,
      n: () => NU,
      o: () => DU,
      r: () => aU,
      t: () => IU,
      u: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(37334);
    const FU = "clientGameUiChanged";
    let oU = null;

    function DU() {
      return oU
    }

    function EU(UU, XU) {
      const zU = {
        content: UU,
        menu: XU
      };
      return oU = zU, yU.k.UY(FU, oU, !0), () => {
        oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
      }
    }
    let YU = null;

    function NU() {
      return YU
    }

    function IU(UU) {
      return YU = UU, () => {
        YU === UU && (YU = null)
      }
    }
    let pU = !1;

    function aU() {
      const UU = cU.e.get("openInGameMenuName");
      "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tU() {
      GU(!1)
    }

    function gU() {
      GU(pU)
    }

    function kU() {
      pU && GU(!1)
    }

    function GU(UU) {
      "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, AU.l)(), pU = !1
    }
  },
  9339: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(9348),
      yU = zU(646),
      QU = zU(142);

    function AU(UU) {
      var XU, zU;
      if ((0, yU.P)(UU)) return !0;
      const AU = null !== (XU = null === (zU = QU.siteUsedData[QU.siteUsed]) || void 0 === zU ? void 0 : zU.adConfig.showRewardedAds) && void 0 !== XU && XU;
      for (const yU in UU) {
        const XU = UU[yU];
        if (null !== XU && void 0 !== XU && XU.items)
          for (const UU in XU.items)
            if ((0, cU.o)(XU.items[UU], AU)) return !1
      }
      return !0
    }
  },
  63270: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      getClientGameMapKey: () => cU.n,
      shopIsEmpty: () => yU.c
    });
    var cU = zU(37325),
      yU = zU(9339)
  },
  9348: (UU, XU, zU) => {
    function cU(UU, XU) {
      return !UU.hidden && (XU || !UU.isRewardedAd)
    }

    function yU(UU) {
      return "object" === typeof UU ? UU.option : UU
    }

    function QU(UU, XU) {
      var zU;
      if ("dropdown" === (null === (zU = UU.userInput) || void 0 === zU ? void 0 : zU.type) && "object" === typeof UU.userInput.dropdownOptions[0]) {
        for (const zU of UU.userInput.dropdownOptions)
          if (yU(zU) === XU) return "object" === typeof zU ? zU.cost : UU.cost;
        console.error("Didn't find matching option for dropdown item. Item:", UU, "input:", XU)
      }
      return UU.cost
    }

    function AU(UU, XU, zU) {
      var cU;
      const yU = null !== (cU = zU.excludedPlayers) && void 0 !== cU ? cU : [XU];
      return UU.filter((UU => !yU.includes(UU)))
    }
    zU.d(XU, {
      d: () => QU,
      h: () => yU,
      l: () => AU,
      o: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);