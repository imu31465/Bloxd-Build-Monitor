export const id = 159;
export const ids = [159];
export const modules = {
  36955: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG,
      f: () => hG,
      h: () => dG,
      j: () => kG,
      k: () => fG,
      m: () => JG,
      p: () => pG,
      r: () => zG,
      t: () => KG,
      x: () => rG
    });
    var wG = ZG(17),
      SG = ZG(19);
    const LG = "clientGameInventoryButtonsChanged",
      yG = new Map;

    function kG() {
      return [...yG.values()].sort(((GG, bG) => {
        var ZG, wG;
        return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
      }))
    }
    let UG = null;

    function YG(GG) {
      UG = GG
    }
    let VG = !1;

    function pG(GG) {
      VG = !0;
      try {
        GG.onClick()
      } finally {
        VG = !1
      }
      GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
    }

    function fG() {
      return VG
    }

    function QG() {
      return kG().filter((GG => GG.panel && !GG.disabled))
    }

    function KG(GG) {
      const bG = QG(),
        ZG = bG.findIndex((GG => GG.id === UG));
      return !(ZG < 0 || bG.length < 2) && (pG(bG[(ZG + GG + bG.length) % bG.length]), !0)
    }

    function hG() {
      return null !== UG && QG().length > 1
    }

    function dG() {
      YG(null)
    }

    function JG() {
      "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
    }

    function rG() {
      const GG = UG;
      return YG(null), GG
    }

    function zG(GG) {
      return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
        yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
      }
    }
  },
  36951: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => dG,
      i: () => JG,
      j: () => fG,
      l: () => YG,
      m: () => hG,
      n: () => QG,
      q: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(36955);
    const kG = "clientGameUiChanged";
    let UG = null;

    function YG() {
      return UG
    }

    function VG(GG, bG) {
      const ZG = {
        content: GG,
        menu: bG
      };
      return UG = ZG, SG.l.xh(kG, UG, !0), () => {
        UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
      }
    }
    let pG = null;

    function fG() {
      return pG
    }

    function QG(GG) {
      return pG = GG, () => {
        pG === GG && (pG = null)
      }
    }
    let KG = !1;

    function hG() {
      const GG = wG.e.get("openInGameMenuName");
      "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dG() {
      rG(!1)
    }

    function JG() {
      rG(KG)
    }

    function rG(GG) {
      "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
        openInGameMenuName: GG ? "inventory" : null
      }), GG || (0, yG.h)(), KG = !1
    }
  },
  8825: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(8830),
      SG = ZG(604),
      LG = ZG(116);

    function yG(GG) {
      var bG, ZG;
      if ((0, SG.L)(GG)) return !0;
      const yG = null !== (bG = null === (ZG = LG.siteUsedData[LG.siteUsed]) || void 0 === ZG ? void 0 : ZG.adConfig.showRewardedAds) && void 0 !== bG && bG;
      for (const SG in GG) {
        const bG = GG[SG];
        if (null !== bG && void 0 !== bG && bG.items)
          for (const GG in bG.items)
            if ((0, wG.m)(bG.items[GG], yG)) return !1
      }
      return !0
    }
  },
  61136: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      getClientGameMapKey: () => wG.j,
      shopIsEmpty: () => SG.b
    });
    var wG = ZG(36951),
      SG = ZG(8825)
  },
  8830: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return !GG.hidden && (bG || !GG.isRewardedAd)
    }

    function SG(GG) {
      return "object" === typeof GG ? GG.option : GG
    }

    function LG(GG, bG) {
      var ZG;
      if ("dropdown" === (null === (ZG = GG.userInput) || void 0 === ZG ? void 0 : ZG.type) && "object" === typeof GG.userInput.dropdownOptions[0]) {
        for (const ZG of GG.userInput.dropdownOptions)
          if (SG(ZG) === bG) return "object" === typeof ZG ? ZG.cost : GG.cost;
        console.error("Didn't find matching option for dropdown item. Item:", GG, "input:", bG)
      }
      return GG.cost
    }

    function yG(GG, bG, ZG) {
      var wG;
      const SG = null !== (wG = ZG.excludedPlayers) && void 0 !== wG ? wG : [bG];
      return GG.filter((GG => !SG.includes(GG)))
    }
    ZG.d(bG, {
      d: () => LG,
      h: () => SG,
      k: () => yG,
      m: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);