export const id = 173;
export const ids = [173];
export const modules = {
  37544: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => lM,
      b: () => jM,
      f: () => JM,
      i: () => dM,
      j: () => PM,
      m: () => mM,
      q: () => yM,
      u: () => LM,
      x: () => EM,
      y: () => hM
    });
    var OM = iM(19),
      SM = iM(22);
    const jM = "clientGameInventoryButtonsChanged",
      aM = new Map;

    function PM() {
      return [...aM.values()].sort(((MM, rM) => {
        var iM, OM;
        return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
      }))
    }
    let nM = null;

    function QM(MM) {
      nM = MM
    }
    let zM = !1;

    function LM(MM) {
      zM = !0;
      try {
        MM.onClick()
      } finally {
        zM = !1
      }
      MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
    }

    function mM() {
      return zM
    }

    function HM() {
      return PM().filter((MM => MM.panel && !MM.disabled))
    }

    function hM(MM) {
      const rM = HM(),
        iM = rM.findIndex((MM => MM.id === nM));
      return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
    }

    function JM() {
      return null !== nM && HM().length > 1
    }

    function dM() {
      QM(null)
    }

    function yM() {
      "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
    }

    function lM() {
      const MM = nM;
      return QM(null), MM
    }

    function EM(MM) {
      return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
        aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
      }
    }
  },
  37542: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      C: () => zM,
      e: () => PM,
      g: () => lM,
      k: () => dM,
      n: () => yM,
      p: () => mM,
      t: () => QM,
      w: () => JM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(37544);
    const PM = "clientGameUiChanged";
    let nM = null;

    function QM() {
      return nM
    }

    function zM(MM, rM) {
      const iM = {
        content: MM,
        menu: rM
      };
      return nM = iM, SM.i.Tz(PM, nM, !0), () => {
        nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
      }
    }
    let LM = null;

    function mM() {
      return LM
    }

    function HM(MM) {
      return LM = MM, () => {
        LM === MM && (LM = null)
      }
    }
    let hM = !1;

    function JM() {
      const MM = OM.d.get("openInGameMenuName");
      "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dM() {
      EM(!1)
    }

    function yM() {
      EM(hM)
    }

    function lM() {
      hM && EM(!1)
    }

    function EM(MM) {
      "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
        openInGameMenuName: MM ? "inventory" : null
      }), MM || (0, aM.i)(), hM = !1
    }
  },
  9366: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(9374),
      SM = iM(625),
      jM = iM(119);

    function aM(MM) {
      var rM, iM;
      if ((0, SM.J)(MM)) return !0;
      const aM = null !== (rM = null === (iM = jM.siteUsedData[jM.siteUsed]) || void 0 === iM ? void 0 : iM.adConfig.showRewardedAds) && void 0 !== rM && rM;
      for (const SM in MM) {
        const rM = MM[SM];
        if (null !== rM && void 0 !== rM && rM.items)
          for (const MM in rM.items)
            if ((0, OM.i)(rM.items[MM], aM)) return !1
      }
      return !0
    }
  },
  63222: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      getClientGameMapKey: () => OM.p,
      shopIsEmpty: () => SM.d
    });
    var OM = iM(37542),
      SM = iM(9366)
  },
  9374: (MM, rM, iM) => {
    function OM(MM, rM) {
      return !MM.hidden && (rM || !MM.isRewardedAd)
    }

    function SM(MM) {
      return "object" === typeof MM ? MM.option : MM
    }

    function jM(MM, rM) {
      var iM;
      if ("dropdown" === (null === (iM = MM.userInput) || void 0 === iM ? void 0 : iM.type) && "object" === typeof MM.userInput.dropdownOptions[0]) {
        for (const iM of MM.userInput.dropdownOptions)
          if (SM(iM) === rM) return "object" === typeof iM ? iM.cost : MM.cost;
        console.error("Didn't find matching option for dropdown item. Item:", MM, "input:", rM)
      }
      return MM.cost
    }

    function aM(MM, rM, iM) {
      var OM;
      const SM = null !== (OM = iM.excludedPlayers) && void 0 !== OM ? OM : [rM];
      return MM.filter((MM => !SM.includes(MM)))
    }
    iM.d(rM, {
      c: () => jM,
      d: () => SM,
      g: () => aM,
      i: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);