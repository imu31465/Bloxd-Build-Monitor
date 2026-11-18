export const id = 144;
export const ids = [144];
export const modules = {
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  8043: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(8052),
      UJ = ZJ(535),
      eJ = ZJ(112);

    function XJ(JJ) {
      var cJ, ZJ;
      if ((0, UJ.P)(JJ)) return !0;
      const XJ = null !== (cJ = null === (ZJ = eJ.i[eJ.n]) || void 0 === ZJ ? void 0 : ZJ.adConfig.showRewardedAds) && void 0 !== cJ && cJ;
      for (const UJ in JJ) {
        const cJ = JJ[UJ];
        if (null !== cJ && void 0 !== cJ && cJ.items)
          for (const JJ in cJ.items)
            if ((0, FJ.n)(cJ.items[JJ], XJ)) return !1
      }
      return !0
    }
  },
  41258: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      getClientGameMapKey: () => FJ.k,
      shopIsEmpty: () => UJ.e
    });
    var FJ = ZJ(35661),
      UJ = ZJ(8043)
  },
  8052: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return !JJ.hidden && (cJ || !JJ.isRewardedAd)
    }

    function UJ(JJ) {
      return "object" === typeof JJ ? JJ.option : JJ
    }

    function eJ(JJ, cJ) {
      var ZJ;
      if ("dropdown" === (null === (ZJ = JJ.userInput) || void 0 === ZJ ? void 0 : ZJ.type) && "object" === typeof JJ.userInput.dropdownOptions[0]) {
        for (const ZJ of JJ.userInput.dropdownOptions)
          if (UJ(ZJ) === cJ) return "object" === typeof ZJ ? ZJ.cost : JJ.cost;
        console.error("Didn't find matching option for dropdown item. Item:", JJ, "input:", cJ)
      }
      return JJ.cost
    }

    function XJ(JJ, cJ, ZJ) {
      var FJ;
      const UJ = null !== (FJ = ZJ.excludedPlayers) && void 0 !== FJ ? FJ : [cJ];
      return JJ.filter((JJ => !UJ.includes(JJ)))
    }
    ZJ.d(cJ, {
      e: () => eJ,
      g: () => UJ,
      k: () => XJ,
      n: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);