export const id = 157;
export const ids = [157];
export const modules = {
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  8774: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(8776),
      wC = ZC(600),
      bC = ZC(113);

    function nC(CC) {
      var zC, ZC;
      if ((0, wC.H)(CC)) return !0;
      const nC = null !== (zC = null === (ZC = bC.s[bC.y]) || void 0 === ZC ? void 0 : ZC.adConfig.showRewardedAds) && void 0 !== zC && zC;
      for (const wC in CC) {
        const zC = CC[wC];
        if (null !== zC && void 0 !== zC && zC.items)
          for (const CC in zC.items)
            if ((0, QC.k)(zC.items[CC], nC)) return !1
      }
      return !0
    }
  },
  60264: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      getClientGameMapKey: () => QC.o,
      shopIsEmpty: () => wC.d
    });
    var QC = ZC(36488),
      wC = ZC(8774)
  },
  8776: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return !CC.hidden && (zC || !CC.isRewardedAd)
    }

    function wC(CC) {
      return "object" === typeof CC ? CC.option : CC
    }

    function bC(CC, zC) {
      var ZC;
      if ("dropdown" === (null === (ZC = CC.userInput) || void 0 === ZC ? void 0 : ZC.type) && "object" === typeof CC.userInput.dropdownOptions[0]) {
        for (const ZC of CC.userInput.dropdownOptions)
          if (wC(ZC) === zC) return "object" === typeof ZC ? ZC.cost : CC.cost;
        console.error("Didn't find matching option for dropdown item. Item:", CC, "input:", zC)
      }
      return CC.cost
    }

    function nC(CC, zC, ZC) {
      var QC;
      const wC = null !== (QC = ZC.excludedPlayers) && void 0 !== QC ? QC : [zC];
      return CC.filter((CC => !wC.includes(CC)))
    }
    ZC.d(zC, {
      b: () => bC,
      f: () => wC,
      i: () => nC,
      k: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);