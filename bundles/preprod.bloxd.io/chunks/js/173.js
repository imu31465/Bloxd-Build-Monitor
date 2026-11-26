export const id = 173;
export const ids = [173];
export const modules = {
  37479: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => uH,
      C: () => xH,
      c: () => SH,
      g: () => QH,
      j: () => WH,
      k: () => tH,
      n: () => GH,
      r: () => MH,
      t: () => XH,
      x: () => vH
    });
    var AH = LH(15),
      rH = LH(18);
    const SH = "clientGameInventoryButtonsChanged",
      hH = new Map;

    function tH() {
      return [...hH.values()].sort(((HH, BH) => {
        var LH, AH;
        return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
      }))
    }
    let zH = null;

    function CH(HH) {
      zH = HH
    }
    let EH = !1;

    function XH(HH) {
      EH = !0;
      try {
        HH.onClick()
      } finally {
        EH = !1
      }
      HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
    }

    function GH() {
      return EH
    }

    function YH() {
      return tH().filter((HH => HH.panel && !HH.disabled))
    }

    function uH(HH) {
      const BH = YH(),
        LH = BH.findIndex((HH => HH.id === zH));
      return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
    }

    function QH() {
      return null !== zH && YH().length > 1
    }

    function WH() {
      CH(null)
    }

    function MH() {
      "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
    }

    function xH() {
      const HH = zH;
      return CH(null), HH
    }

    function vH(HH) {
      return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
        hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
      }
    }
  },
  37474: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => xH,
      g: () => WH,
      j: () => MH,
      n: () => GH,
      p: () => CH,
      t: () => QH,
      u: () => YH,
      v: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(37479);
    const tH = "clientGameUiChanged";
    let zH = null;

    function CH() {
      return zH
    }

    function EH(HH, BH) {
      const LH = {
        content: HH,
        menu: BH
      };
      return zH = LH, rH.k.AX(tH, zH, !0), () => {
        zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
      }
    }
    let XH = null;

    function GH() {
      return XH
    }

    function YH(HH) {
      return XH = HH, () => {
        XH === HH && (XH = null)
      }
    }
    let uH = !1;

    function QH() {
      const HH = AH.c.get("openInGameMenuName");
      "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function WH() {
      vH(!1)
    }

    function MH() {
      vH(uH)
    }

    function xH() {
      uH && vH(!1)
    }

    function vH(HH) {
      "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
        openInGameMenuName: HH ? "inventory" : null
      }), HH || (0, hH.j)(), uH = !1
    }
  },
  9467: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(9475),
      rH = LH(619),
      SH = LH(120);

    function hH(HH) {
      var BH, LH;
      if ((0, rH.M)(HH)) return !0;
      const hH = null !== (BH = null === (LH = SH.siteUsedData[SH.siteUsed]) || void 0 === LH ? void 0 : LH.adConfig.showRewardedAds) && void 0 !== BH && BH;
      for (const rH in HH) {
        const BH = HH[rH];
        if (null !== BH && void 0 !== BH && BH.items)
          for (const HH in BH.items)
            if ((0, AH.i)(BH.items[HH], hH)) return !1
      }
      return !0
    }
  },
  64066: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      getClientGameMapKey: () => AH.n,
      shopIsEmpty: () => rH.d
    });
    var AH = LH(37474),
      rH = LH(9467)
  },
  9475: (HH, BH, LH) => {
    function AH(HH, BH) {
      return !HH.hidden && (BH || !HH.isRewardedAd)
    }

    function rH(HH) {
      return "object" === typeof HH ? HH.option : HH
    }

    function SH(HH, BH) {
      var LH;
      if ("dropdown" === (null === (LH = HH.userInput) || void 0 === LH ? void 0 : LH.type) && "object" === typeof HH.userInput.dropdownOptions[0]) {
        for (const LH of HH.userInput.dropdownOptions)
          if (rH(LH) === BH) return "object" === typeof LH ? LH.cost : HH.cost;
        console.error("Didn't find matching option for dropdown item. Item:", HH, "input:", BH)
      }
      return HH.cost
    }

    function hH(HH, BH, LH) {
      var AH;
      const rH = null !== (AH = LH.excludedPlayers) && void 0 !== AH ? AH : [BH];
      return HH.filter((HH => !rH.includes(HH)))
    }
    LH.d(BH, {
      c: () => SH,
      f: () => rH,
      g: () => hH,
      i: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);