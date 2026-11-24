export const id = 157;
export const ids = [157];
export const modules = {
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  8785: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(8792),
      sD = wD(619),
      KD = wD(128);

    function rD(DD) {
      var zD, wD;
      if ((0, sD.B)(DD)) return !0;
      const rD = null !== (zD = null === (wD = KD.n[KD.v]) || void 0 === wD ? void 0 : wD.adConfig.showRewardedAds) && void 0 !== zD && zD;
      for (const sD in DD) {
        const zD = DD[sD];
        if (null !== zD && void 0 !== zD && zD.items)
          for (const DD in zD.items)
            if ((0, pD.o)(zD.items[DD], rD)) return !1
      }
      return !0
    }
  },
  60381: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      getClientGameMapKey: () => pD.m,
      shopIsEmpty: () => sD.e
    });
    var pD = wD(36580),
      sD = wD(8785)
  },
  8792: (DD, zD, wD) => {
    function pD(DD, zD) {
      return !DD.hidden && (zD || !DD.isRewardedAd)
    }

    function sD(DD) {
      return "object" === typeof DD ? DD.option : DD
    }

    function KD(DD, zD) {
      var wD;
      if ("dropdown" === (null === (wD = DD.userInput) || void 0 === wD ? void 0 : wD.type) && "object" === typeof DD.userInput.dropdownOptions[0]) {
        for (const wD of DD.userInput.dropdownOptions)
          if (sD(wD) === zD) return "object" === typeof wD ? wD.cost : DD.cost;
        console.error("Didn't find matching option for dropdown item. Item:", DD, "input:", zD)
      }
      return DD.cost
    }

    function rD(DD, zD, wD) {
      var pD;
      const sD = null !== (pD = wD.excludedPlayers) && void 0 !== pD ? pD : [zD];
      return DD.filter((DD => !sD.includes(DD)))
    }
    wD.d(zD, {
      d: () => KD,
      h: () => sD,
      l: () => rD,
      o: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);