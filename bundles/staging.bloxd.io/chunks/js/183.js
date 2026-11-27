export const id = 183;
export const ids = [183];
export const modules = {
  10118: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(10125),
      tR = GR(679),
      uR = GR(134);

    function ZR(RR) {
      var JR, GR;
      if ((0, tR.I)(RR)) return !0;
      const ZR = null !== (JR = null === (GR = uR.siteUsedData[uR.siteUsed]) || void 0 === GR ? void 0 : GR.adConfig.showRewardedAds) && void 0 !== JR && JR;
      for (const tR in RR) {
        const JR = RR[tR];
        if (null !== JR && void 0 !== JR && JR.items)
          for (const RR in JR.items)
            if ((0, yR.n)(JR.items[RR], ZR)) return !1
      }
      return !0
    }
  },
  64110: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      getClientGameLeaderboardKey: () => yR.l,
      getClientGameMapKey: () => yR.n,
      shopIsEmpty: () => tR.c
    });
    var yR = GR(3494),
      tR = GR(10118)
  },
  10125: (RR, JR, GR) => {
    function yR(RR, JR) {
      return !RR.hidden && (JR || !RR.isRewardedAd)
    }

    function tR(RR) {
      return "object" === typeof RR ? RR.option : RR
    }

    function uR(RR, JR) {
      var GR;
      if ("dropdown" === (null === (GR = RR.userInput) || void 0 === GR ? void 0 : GR.type) && "object" === typeof RR.userInput.dropdownOptions[0]) {
        for (const GR of RR.userInput.dropdownOptions)
          if (tR(GR) === JR) return "object" === typeof GR ? GR.cost : RR.cost;
        console.error("Didn't find matching option for dropdown item. Item:", RR, "input:", JR)
      }
      return RR.cost
    }

    function ZR(RR, JR, GR) {
      var yR;
      const tR = null !== (yR = GR.excludedPlayers) && void 0 !== yR ? yR : [JR];
      return RR.filter((RR => !tR.includes(RR)))
    }
    GR.d(JR, {
      e: () => uR,
      f: () => tR,
      j: () => ZR,
      n: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);