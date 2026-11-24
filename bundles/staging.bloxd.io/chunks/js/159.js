export const id = 159;
export const ids = [159];
export const modules = {
  36625: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => gB,
      g: () => qB,
      h: () => vB,
      l: () => zB,
      p: () => yB,
      q: () => hB,
      s: () => WB,
      t: () => NB,
      w: () => UB
    });
    var TB = ZB(20),
      JB = ZB(24);
    const oB = "clientGameInventoryButtonsChanged",
      GB = new Map;

    function vB() {
      return [...GB.values()].sort(((BB, IB) => {
        var ZB, TB;
        return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
      }))
    }
    let kB = null;

    function cB(BB) {
      kB = BB
    }
    let nB = !1;

    function hB(BB) {
      nB = !0;
      try {
        BB.onClick()
      } finally {
        nB = !1
      }
      BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
    }

    function zB() {
      return nB
    }

    function FB() {
      return vB().filter((BB => BB.panel && !BB.disabled))
    }

    function NB(BB) {
      const IB = FB(),
        ZB = IB.findIndex((BB => BB.id === kB));
      return !(ZB < 0 || IB.length < 2) && (hB(IB[(ZB + BB + IB.length) % IB.length]), !0)
    }

    function gB() {
      return null !== kB && FB().length > 1
    }

    function qB() {
      cB(null)
    }

    function yB() {
      "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
    }

    function UB() {
      const BB = kB;
      return cB(null), BB
    }

    function WB(BB) {
      return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
        GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
      }
    }
  },
  36619: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => qB,
      i: () => yB,
      m: () => zB,
      q: () => cB,
      t: () => gB,
      v: () => FB,
      x: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(36625);
    const vB = "clientGameUiChanged";
    let kB = null;

    function cB() {
      return kB
    }

    function nB(BB, IB) {
      const ZB = {
        content: BB,
        menu: IB
      };
      return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
        kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
      }
    }
    let hB = null;

    function zB() {
      return hB
    }

    function FB(BB) {
      return hB = BB, () => {
        hB === BB && (hB = null)
      }
    }
    let NB = !1;

    function gB() {
      const BB = TB.d.get("openInGameMenuName");
      "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qB() {
      UB(!1)
    }

    function yB() {
      UB(NB)
    }

    function UB(BB) {
      "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, GB.g)(), NB = !1
    }
  },
  8885: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(8890),
      JB = ZB(665),
      oB = ZB(140);

    function GB(BB) {
      var IB, ZB;
      if ((0, JB.L)(BB)) return !0;
      const GB = null !== (IB = null === (ZB = oB.siteUsedData[oB.siteUsed]) || void 0 === ZB ? void 0 : ZB.adConfig.showRewardedAds) && void 0 !== IB && IB;
      for (const JB in BB) {
        const IB = BB[JB];
        if (null !== IB && void 0 !== IB && IB.items)
          for (const BB in IB.items)
            if ((0, TB.o)(IB.items[BB], GB)) return !1
      }
      return !0
    }
  },
  60666: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      getClientGameMapKey: () => TB.m,
      shopIsEmpty: () => JB.d
    });
    var TB = ZB(36619),
      JB = ZB(8885)
  },
  8890: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return !BB.hidden && (IB || !BB.isRewardedAd)
    }

    function JB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function oB(BB, IB) {
      var ZB;
      if ("dropdown" === (null === (ZB = BB.userInput) || void 0 === ZB ? void 0 : ZB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const ZB of BB.userInput.dropdownOptions)
          if (JB(ZB) === IB) return "object" === typeof ZB ? ZB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", IB)
      }
      return BB.cost
    }

    function GB(BB, IB, ZB) {
      var TB;
      const JB = null !== (TB = ZB.excludedPlayers) && void 0 !== TB ? TB : [IB];
      return BB.filter((BB => !JB.includes(BB)))
    }
    ZB.d(IB, {
      e: () => oB,
      i: () => JB,
      l: () => GB,
      o: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);