export const id = 183;
export const ids = [183];
export const modules = {
  9888: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(9890),
      Wr = Qr(688),
      ar = Qr(139);

    function jr(rr) {
      var Sr, Qr;
      if ((0, Wr.L)(rr)) return !0;
      const jr = null !== (Sr = null === (Qr = ar.siteUsedData[ar.siteUsed]) || void 0 === Qr ? void 0 : Qr.adConfig.showRewardedAds) && void 0 !== Sr && Sr;
      for (const Wr in rr) {
        const Sr = rr[Wr];
        if (null !== Sr && void 0 !== Sr && Sr.items)
          for (const rr in Sr.items)
            if ((0, Zr.m)(Sr.items[rr], jr)) return !1
      }
      return !0
    }
  },
  64569: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      getClientGameLeaderboardKey: () => Zr.o,
      getClientGameMapKey: () => Zr.r,
      shopIsEmpty: () => Wr.b
    });
    var Zr = Qr(3425),
      Wr = Qr(9888)
  },
  9890: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return !rr.hidden && (Sr || !rr.isRewardedAd)
    }

    function Wr(rr) {
      return "object" === typeof rr ? rr.option : rr
    }

    function ar(rr, Sr) {
      var Qr;
      if ("dropdown" === (null === (Qr = rr.userInput) || void 0 === Qr ? void 0 : Qr.type) && "object" === typeof rr.userInput.dropdownOptions[0]) {
        for (const Qr of rr.userInput.dropdownOptions)
          if (Wr(Qr) === Sr) return "object" === typeof Qr ? Qr.cost : rr.cost;
        console.error("Didn't find matching option for dropdown item. Item:", rr, "input:", Sr)
      }
      return rr.cost
    }

    function jr(rr, Sr, Qr) {
      var Zr;
      const Wr = null !== (Zr = Qr.excludedPlayers) && void 0 !== Zr ? Zr : [Sr];
      return rr.filter((rr => !Wr.includes(rr)))
    }
    Qr.d(Sr, {
      e: () => ar,
      f: () => Wr,
      j: () => jr,
      m: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);