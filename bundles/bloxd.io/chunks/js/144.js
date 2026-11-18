export const id = 144;
export const ids = [144];
export const modules = {
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  8070: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(8075),
      yB = dB(572),
      pB = dB(138);

    function lB(BB) {
      var TB, dB;
      if ((0, yB.M)(BB)) return !0;
      const lB = null !== (TB = null === (dB = pB.q[pB.v]) || void 0 === dB ? void 0 : dB.adConfig.showRewardedAds) && void 0 !== TB && TB;
      for (const yB in BB) {
        const TB = BB[yB];
        if (null !== TB && void 0 !== TB && TB.items)
          for (const BB in TB.items)
            if ((0, VB.m)(TB.items[BB], lB)) return !1
      }
      return !0
    }
  },
  41295: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      getClientGameMapKey: () => VB.j,
      shopIsEmpty: () => yB.e
    });
    var VB = dB(35595),
      yB = dB(8070)
  },
  8075: (BB, TB, dB) => {
    function VB(BB, TB) {
      return !BB.hidden && (TB || !BB.isRewardedAd)
    }

    function yB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function pB(BB, TB) {
      var dB;
      if ("dropdown" === (null === (dB = BB.userInput) || void 0 === dB ? void 0 : dB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const dB of BB.userInput.dropdownOptions)
          if (yB(dB) === TB) return "object" === typeof dB ? dB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", TB)
      }
      return BB.cost
    }

    function lB(BB, TB, dB) {
      var VB;
      const yB = null !== (VB = dB.excludedPlayers) && void 0 !== VB ? VB : [TB];
      return BB.filter((BB => !yB.includes(BB)))
    }
    dB.d(TB, {
      e: () => pB,
      i: () => yB,
      k: () => lB,
      m: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);