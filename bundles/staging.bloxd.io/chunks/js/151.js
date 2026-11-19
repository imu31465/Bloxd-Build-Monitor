export const id = 151;
export const ids = [151];
export const modules = {
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  8173: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(8181),
      AY = DY(625),
      IY = DY(144);

    function RY(YY) {
      var rY, DY;
      if ((0, AY.H)(YY)) return !0;
      const RY = null !== (rY = null === (DY = IY.l[IY.s]) || void 0 === DY ? void 0 : DY.adConfig.showRewardedAds) && void 0 !== rY && rY;
      for (const AY in YY) {
        const rY = YY[AY];
        if (null !== rY && void 0 !== rY && rY.items)
          for (const YY in rY.items)
            if ((0, FY.m)(rY.items[YY], RY)) return !1
      }
      return !0
    }
  },
  41656: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      getClientGameMapKey: () => FY.j,
      shopIsEmpty: () => AY.d
    });
    var FY = DY(36032),
      AY = DY(8173)
  },
  8181: (YY, rY, DY) => {
    function FY(YY, rY) {
      return !YY.hidden && (rY || !YY.isRewardedAd)
    }

    function AY(YY) {
      return "object" === typeof YY ? YY.option : YY
    }

    function IY(YY, rY) {
      var DY;
      if ("dropdown" === (null === (DY = YY.userInput) || void 0 === DY ? void 0 : DY.type) && "object" === typeof YY.userInput.dropdownOptions[0]) {
        for (const DY of YY.userInput.dropdownOptions)
          if (AY(DY) === rY) return "object" === typeof DY ? DY.cost : YY.cost;
        console.error("Didn't find matching option for dropdown item. Item:", YY, "input:", rY)
      }
      return YY.cost
    }

    function RY(YY, rY, DY) {
      var FY;
      const AY = null !== (FY = DY.excludedPlayers) && void 0 !== FY ? FY : [rY];
      return YY.filter((YY => !AY.includes(YY)))
    }
    DY.d(rY, {
      c: () => IY,
      e: () => AY,
      i: () => RY,
      m: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);