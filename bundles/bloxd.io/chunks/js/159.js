export const id = 159;
export const ids = [159];
export const modules = {
  36698: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => ZT,
      h: () => cT,
      j: () => nT,
      l: () => LT,
      n: () => vT,
      p: () => lT,
      r: () => qT,
      s: () => BT,
      v: () => fT
    });
    var WT = mT(25),
      zT = mT(31);
    const MT = "clientGameInventoryButtonsChanged",
      gT = new Map;

    function nT() {
      return [...gT.values()].sort(((TT, UT) => {
        var mT, WT;
        return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
      }))
    }
    let HT = null;

    function kT(TT) {
      HT = TT
    }
    let jT = !1;

    function lT(TT) {
      jT = !0;
      try {
        TT.onClick()
      } finally {
        jT = !1
      }
      TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
    }

    function LT() {
      return jT
    }

    function pT() {
      return nT().filter((TT => TT.panel && !TT.disabled))
    }

    function BT(TT) {
      const UT = pT(),
        mT = UT.findIndex((TT => TT.id === HT));
      return !(mT < 0 || UT.length < 2) && (lT(UT[(mT + TT + UT.length) % UT.length]), !0)
    }

    function ZT() {
      return null !== HT && pT().length > 1
    }

    function cT() {
      kT(null)
    }

    function vT() {
      "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
    }

    function fT() {
      const TT = HT;
      return kT(null), TT
    }

    function qT(TT) {
      return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
        gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
      }
    }
  },
  36693: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      d: () => cT,
      f: () => vT,
      i: () => LT,
      j: () => kT,
      l: () => ZT,
      n: () => pT,
      q: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(36698);
    const nT = "clientGameUiChanged";
    let HT = null;

    function kT() {
      return HT
    }

    function jT(TT, UT) {
      const mT = {
        content: TT,
        menu: UT
      };
      return HT = mT, zT.j.EZ(nT, HT, !0), () => {
        HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
      }
    }
    let lT = null;

    function LT() {
      return lT
    }

    function pT(TT) {
      return lT = TT, () => {
        lT === TT && (lT = null)
      }
    }
    let BT = !1;

    function ZT() {
      const TT = WT.b.get("openInGameMenuName");
      "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function cT() {
      fT(!1)
    }

    function vT() {
      fT(BT)
    }

    function fT(TT) {
      "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, gT.h)(), BT = !1
    }
  },
  8894: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(8901),
      zT = mT(653),
      MT = mT(133);

    function gT(TT) {
      var UT, mT;
      if ((0, zT.E)(TT)) return !0;
      const gT = null !== (UT = null === (mT = MT.siteUsedData[MT.siteUsed]) || void 0 === mT ? void 0 : mT.adConfig.showRewardedAds) && void 0 !== UT && UT;
      for (const zT in TT) {
        const UT = TT[zT];
        if (null !== UT && void 0 !== UT && UT.items)
          for (const TT in UT.items)
            if ((0, WT.j)(UT.items[TT], gT)) return !1
      }
      return !0
    }
  },
  60481: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      getClientGameMapKey: () => WT.i,
      shopIsEmpty: () => zT.d
    });
    var WT = mT(36693),
      zT = mT(8894)
  },
  8901: (TT, UT, mT) => {
    function WT(TT, UT) {
      return !TT.hidden && (UT || !TT.isRewardedAd)
    }

    function zT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function MT(TT, UT) {
      var mT;
      if ("dropdown" === (null === (mT = TT.userInput) || void 0 === mT ? void 0 : mT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const mT of TT.userInput.dropdownOptions)
          if (zT(mT) === UT) return "object" === typeof mT ? mT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", UT)
      }
      return TT.cost
    }

    function gT(TT, UT, mT) {
      var WT;
      const zT = null !== (WT = mT.excludedPlayers) && void 0 !== WT ? WT : [UT];
      return TT.filter((TT => !zT.includes(TT)))
    }
    mT.d(UT, {
      e: () => MT,
      g: () => zT,
      i: () => gT,
      j: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);