export const id = 140;
export const ids = [140];
export const modules = {
  34838: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => IW,
      D: () => gR,
      E: () => PW,
      c: () => zR,
      e: () => iR,
      i: () => YW,
      m: () => bR,
      q: () => tR,
      s: () => JW,
      w: () => BW
    });
    var wW = MW(27),
      CW = MW(33);
    const zR = "clientGameInventoryButtonsChanged",
      AW = new Map;

    function bR() {
      return [...AW.values()].sort(((WW, RW) => {
        var MW, wW;
        return (null !== (MW = WW.order) && void 0 !== MW ? MW : 0) - (null !== (wW = RW.order) && void 0 !== wW ? wW : 0)
      }))
    }
    let yR = null;

    function NW(WW) {
      yR = WW
    }
    let eW = !1;

    function BW(WW) {
      eW = !0;
      try {
        WW.onClick()
      } finally {
        eW = !1
      }
      WW.panel && "clientGame" === wW.b.get("openInGameMenuName") && NW(WW.id)
    }

    function tR() {
      return eW
    }

    function TW() {
      return bR().filter((WW => WW.panel && !WW.disabled))
    }

    function gR(WW) {
      const RW = TW(),
        MW = RW.findIndex((WW => WW.id === yR));
      return !(MW < 0 || RW.length < 2) && (BW(RW[(MW + WW + RW.length) % RW.length]), !0)
    }

    function iR() {
      return null !== yR && TW().length > 1
    }

    function YW() {
      NW(null)
    }

    function JW() {
      "inventory" !== wW.b.get("openInGameMenuName") && NW(null)
    }

    function PW() {
      const WW = yR;
      return NW(null), WW
    }

    function IW(WW) {
      return AW.set(WW.id, WW), CW.k.Sz(zR, bR(), !0), () => {
        AW.get(WW.id) === WW && (AW.delete(WW.id), CW.k.Sz(zR, bR()))
      }
    }
  },
  34830: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      e: () => YW,
      f: () => JW,
      g: () => tR,
      h: () => NW,
      j: () => iR,
      k: () => TW,
      l: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(1115),
      AW = MW(34838);
    const bR = "clientGameUiChanged";
    let yR = null;

    function NW() {
      return yR
    }

    function eW(WW, RW) {
      const MW = {
        content: WW,
        menu: RW
      };
      return yR = MW, CW.k.Sz(bR, yR, !0), () => {
        yR === MW && (yR = null, gR = !1, YW(), CW.k.Sz(bR, null))
      }
    }
    let BW = null;

    function tR() {
      return BW
    }

    function TW(WW) {
      return BW = WW, () => {
        BW === WW && (BW = null)
      }
    }
    let gR = !1;

    function iR() {
      const WW = wW.b.get("openInGameMenuName");
      "clientGame" !== WW && (gR = "inventory" === WW), (0, AW.q)() || (0, AW.i)(), (0, zR.n)("InGameMenu"), wW.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function YW() {
      PW(!1)
    }

    function JW() {
      PW(gR)
    }

    function PW(WW) {
      "clientGame" === wW.b.get("openInGameMenuName") && wW.b.set({
        openInGameMenuName: WW ? "inventory" : null
      }), WW || (0, AW.i)(), gR = !1
    }
  },
  7642: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(7651),
      CW = MW(564),
      zR = MW(151);

    function AW(WW) {
      var RW, MW;
      if ((0, CW.S)(WW)) return !0;
      const AW = null !== (RW = null === (MW = zR.r[zR.u]) || void 0 === MW ? void 0 : MW.adConfig.showRewardedAds) && void 0 !== RW && RW;
      for (const CW in WW) {
        const RW = WW[CW];
        if (null !== RW && void 0 !== RW && RW.items)
          for (const WW in RW.items)
            if ((0, wW.m)(RW.items[WW], AW)) return !1
      }
      return !0
    }
  },
  40037: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      getClientGameMapKey: () => wW.g,
      shopIsEmpty: () => CW.e
    });
    var wW = MW(34830),
      CW = MW(7642)
  },
  7651: (WW, RW, MW) => {
    function wW(WW, RW) {
      return !WW.hidden && (RW || !WW.isRewardedAd)
    }

    function CW(WW) {
      return "object" === typeof WW ? WW.option : WW
    }

    function zR(WW, RW) {
      var MW;
      if ("dropdown" === (null === (MW = WW.userInput) || void 0 === MW ? void 0 : MW.type) && "object" === typeof WW.userInput.dropdownOptions[0]) {
        for (const MW of WW.userInput.dropdownOptions)
          if (CW(MW) === RW) return "object" === typeof MW ? MW.cost : WW.cost;
        console.error("Didn't find matching option for dropdown item. Item:", WW, "input:", RW)
      }
      return WW.cost
    }

    function AW(WW, RW, MW) {
      var wW;
      const CW = null !== (wW = MW.excludedPlayers) && void 0 !== wW ? wW : [RW];
      return WW.filter((WW => !CW.includes(WW)))
    }
    MW.d(RW, {
      e: () => zR,
      h: () => CW,
      l: () => AW,
      m: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);