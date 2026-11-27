export const id = 183;
export const ids = [183];
export const modules = {
  9997: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(10006),
      EW = OW(643),
      NW = OW(136);

    function PW(WW) {
      var iW, OW;
      if ((0, EW.K)(WW)) return !0;
      const PW = null !== (iW = null === (OW = NW.siteUsedData[NW.siteUsed]) || void 0 === OW ? void 0 : OW.adConfig.showRewardedAds) && void 0 !== iW && iW;
      for (const EW in WW) {
        const iW = WW[EW];
        if (null !== iW && void 0 !== iW && iW.items)
          for (const WW in iW.items)
            if ((0, mW.g)(iW.items[WW], PW)) return !1
      }
      return !0
    }
  },
  64355: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      getClientGameLeaderboardKey: () => mW.u,
      getClientGameMapKey: () => mW.x,
      shopIsEmpty: () => EW.b
    });
    var mW = OW(3361),
      EW = OW(9997)
  },
  10006: (WW, iW, OW) => {
    function mW(WW, iW) {
      return !WW.hidden && (iW || !WW.isRewardedAd)
    }

    function EW(WW) {
      return "object" === typeof WW ? WW.option : WW
    }

    function NW(WW, iW) {
      var OW;
      if ("dropdown" === (null === (OW = WW.userInput) || void 0 === OW ? void 0 : OW.type) && "object" === typeof WW.userInput.dropdownOptions[0]) {
        for (const OW of WW.userInput.dropdownOptions)
          if (EW(OW) === iW) return "object" === typeof OW ? OW.cost : WW.cost;
        console.error("Didn't find matching option for dropdown item. Item:", WW, "input:", iW)
      }
      return WW.cost
    }

    function PW(WW, iW, OW) {
      var mW;
      const EW = null !== (mW = OW.excludedPlayers) && void 0 !== mW ? mW : [iW];
      return WW.filter((WW => !EW.includes(WW)))
    }
    OW.d(iW, {
      b: () => NW,
      c: () => EW,
      d: () => PW,
      g: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);