export const id = 173;
export const ids = [173];
export const modules = {
  37771: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => bV,
      j: () => EV,
      m: () => pV,
      o: () => vV,
      q: () => BV,
      r: () => ZV,
      s: () => qV,
      t: () => kV,
      u: () => jV
    });
    var JV = xV(27),
      YV = xV(32);
    const UV = "clientGameInventoryButtonsChanged",
      yV = new Map;

    function pV() {
      return [...yV.values()].sort(((VV, eV) => {
        var xV, JV;
        return (null !== (xV = VV.order) && void 0 !== xV ? xV : 0) - (null !== (JV = eV.order) && void 0 !== JV ? JV : 0)
      }))
    }
    let QV = null;

    function nV(VV) {
      QV = VV
    }
    let wV = !1;

    function ZV(VV) {
      wV = !0;
      try {
        VV.onClick()
      } finally {
        wV = !1
      }
      VV.panel && "clientGame" === JV.b.get("openInGameMenuName") && nV(VV.id)
    }

    function vV() {
      return wV
    }

    function rV() {
      return pV().filter((VV => VV.panel && !VV.disabled))
    }

    function kV(VV) {
      const eV = rV(),
        xV = eV.findIndex((VV => VV.id === QV));
      return !(xV < 0 || eV.length < 2) && (ZV(eV[(xV + VV + eV.length) % eV.length]), !0)
    }

    function bV() {
      return null !== QV && rV().length > 1
    }

    function EV() {
      nV(null)
    }

    function BV() {
      "inventory" !== JV.b.get("openInGameMenuName") && nV(null)
    }

    function jV() {
      const VV = QV;
      return nV(null), VV
    }

    function qV(VV) {
      return yV.set(VV.id, VV), YV.h.QZ(UV, pV(), !0), () => {
        yV.get(VV.id) === VV && (yV.delete(VV.id), YV.h.QZ(UV, pV()))
      }
    }
  },
  37762: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      h: () => jV,
      i: () => EV,
      m: () => BV,
      o: () => vV,
      p: () => nV,
      r: () => bV,
      v: () => rV,
      z: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(37771);
    const pV = "clientGameUiChanged";
    let QV = null;

    function nV() {
      return QV
    }

    function wV(VV, eV) {
      const xV = {
        content: VV,
        menu: eV
      };
      return QV = xV, YV.h.QZ(pV, QV, !0), () => {
        QV === xV && (QV = null, kV = !1, EV(), YV.h.QZ(pV, null))
      }
    }
    let ZV = null;

    function vV() {
      return ZV
    }

    function rV(VV) {
      return ZV = VV, () => {
        ZV === VV && (ZV = null)
      }
    }
    let kV = !1;

    function bV() {
      const VV = JV.b.get("openInGameMenuName");
      "clientGame" !== VV && (kV = "inventory" === VV), (0, yV.o)() || (0, yV.j)(), (0, UV.p)(UV.d), JV.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function EV() {
      qV(!1)
    }

    function BV() {
      qV(kV)
    }

    function jV() {
      kV && qV(!1)
    }

    function qV(VV) {
      "clientGame" === JV.b.get("openInGameMenuName") && JV.b.set({
        openInGameMenuName: VV ? "inventory" : null
      }), VV || (0, yV.j)(), kV = !1
    }
  },
  9396: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(9403),
      YV = xV(657),
      UV = xV(138);

    function yV(VV) {
      var eV, xV;
      if ((0, YV.J)(VV)) return !0;
      const yV = null !== (eV = null === (xV = UV.siteUsedData[UV.siteUsed]) || void 0 === xV ? void 0 : xV.adConfig.showRewardedAds) && void 0 !== eV && eV;
      for (const YV in VV) {
        const eV = VV[YV];
        if (null !== eV && void 0 !== eV && eV.items)
          for (const VV in eV.items)
            if ((0, JV.p)(eV.items[VV], yV)) return !1
      }
      return !0
    }
  },
  63628: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      getClientGameMapKey: () => JV.o,
      shopIsEmpty: () => YV.c
    });
    var JV = xV(37762),
      YV = xV(9396)
  },
  9403: (VV, eV, xV) => {
    function JV(VV, eV) {
      return !VV.hidden && (eV || !VV.isRewardedAd)
    }

    function YV(VV) {
      return "object" === typeof VV ? VV.option : VV
    }

    function UV(VV, eV) {
      var xV;
      if ("dropdown" === (null === (xV = VV.userInput) || void 0 === xV ? void 0 : xV.type) && "object" === typeof VV.userInput.dropdownOptions[0]) {
        for (const xV of VV.userInput.dropdownOptions)
          if (YV(xV) === eV) return "object" === typeof xV ? xV.cost : VV.cost;
        console.error("Didn't find matching option for dropdown item. Item:", VV, "input:", eV)
      }
      return VV.cost
    }

    function yV(VV, eV, xV) {
      var JV;
      const YV = null !== (JV = xV.excludedPlayers) && void 0 !== JV ? JV : [eV];
      return VV.filter((VV => !YV.includes(VV)))
    }
    xV.d(eV, {
      e: () => UV,
      h: () => YV,
      l: () => yV,
      p: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);