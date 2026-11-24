export const id = 159;
export const ids = [159];
export const modules = {
  36687: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => GB,
      e: () => dB,
      f: () => mB,
      i: () => yB,
      l: () => NB,
      m: () => rB,
      n: () => kB,
      r: () => pB,
      t: () => LB,
      w: () => JB
    });
    var QB = zB(28),
      nB = zB(31);
    const dB = "clientGameInventoryButtonsChanged",
      IB = new Map;

    function NB() {
      return [...IB.values()].sort(((BB, jB) => {
        var zB, QB;
        return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
      }))
    }
    let uB = null;

    function UB(BB) {
      uB = BB
    }
    let aB = !1;

    function pB(BB) {
      aB = !0;
      try {
        BB.onClick()
      } finally {
        aB = !1
      }
      BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
    }

    function rB() {
      return aB
    }

    function sB() {
      return NB().filter((BB => BB.panel && !BB.disabled))
    }

    function JB(BB) {
      const jB = sB(),
        zB = jB.findIndex((BB => BB.id === uB));
      return !(zB < 0 || jB.length < 2) && (pB(jB[(zB + BB + jB.length) % jB.length]), !0)
    }

    function mB() {
      return null !== uB && sB().length > 1
    }

    function yB() {
      UB(null)
    }

    function kB() {
      "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
    }

    function GB() {
      const BB = uB;
      return UB(null), BB
    }

    function LB(BB) {
      return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
        IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
      }
    }
  },
  36682: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      d: () => yB,
      f: () => kB,
      j: () => rB,
      n: () => UB,
      o: () => mB,
      r: () => sB,
      t: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(36687);
    const NB = "clientGameUiChanged";
    let uB = null;

    function UB() {
      return uB
    }

    function aB(BB, jB) {
      const zB = {
        content: BB,
        menu: jB
      };
      return uB = zB, nB.n.Ly(NB, uB, !0), () => {
        uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
      }
    }
    let pB = null;

    function rB() {
      return pB
    }

    function sB(BB) {
      return pB = BB, () => {
        pB === BB && (pB = null)
      }
    }
    let JB = !1;

    function mB() {
      const BB = QB.c.get("openInGameMenuName");
      "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yB() {
      GB(!1)
    }

    function kB() {
      GB(JB)
    }

    function GB(BB) {
      "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, IB.i)(), JB = !1
    }
  },
  8769: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(8773),
      nB = zB(658),
      dB = zB(145);

    function IB(BB) {
      var jB, zB;
      if ((0, nB.I)(BB)) return !0;
      const IB = null !== (jB = null === (zB = dB.siteUsedData[dB.siteUsed]) || void 0 === zB ? void 0 : zB.adConfig.showRewardedAds) && void 0 !== jB && jB;
      for (const nB in BB) {
        const jB = BB[nB];
        if (null !== jB && void 0 !== jB && jB.items)
          for (const BB in jB.items)
            if ((0, QB.h)(jB.items[BB], IB)) return !1
      }
      return !0
    }
  },
  60748: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      getClientGameMapKey: () => QB.j,
      shopIsEmpty: () => nB.b
    });
    var QB = zB(36682),
      nB = zB(8769)
  },
  8773: (BB, jB, zB) => {
    function QB(BB, jB) {
      return !BB.hidden && (jB || !BB.isRewardedAd)
    }

    function nB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function dB(BB, jB) {
      var zB;
      if ("dropdown" === (null === (zB = BB.userInput) || void 0 === zB ? void 0 : zB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const zB of BB.userInput.dropdownOptions)
          if (nB(zB) === jB) return "object" === typeof zB ? zB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", jB)
      }
      return BB.cost
    }

    function IB(BB, jB, zB) {
      var QB;
      const nB = null !== (QB = zB.excludedPlayers) && void 0 !== QB ? QB : [jB];
      return BB.filter((BB => !nB.includes(BB)))
    }
    zB.d(jB, {
      b: () => dB,
      d: () => nB,
      g: () => IB,
      h: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);