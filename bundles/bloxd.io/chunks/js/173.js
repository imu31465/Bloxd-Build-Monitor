export const id = 173;
export const ids = [173];
export const modules = {
  37270: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => pB,
      G: () => RB,
      e: () => QB,
      i: () => qB,
      l: () => ZB,
      m: () => jB,
      q: () => zB,
      u: () => NB,
      y: () => PB,
      z: () => WB
    });
    var YB = GB(16),
      DB = GB(25);
    const QB = "clientGameInventoryButtonsChanged",
      oB = new Map;

    function jB() {
      return [...oB.values()].sort(((BB, OB) => {
        var GB, YB;
        return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
      }))
    }
    let yB = null;

    function JB(BB) {
      yB = BB
    }
    let MB = !1;

    function PB(BB) {
      MB = !0;
      try {
        BB.onClick()
      } finally {
        MB = !1
      }
      BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
    }

    function zB() {
      return MB
    }

    function lB() {
      return jB().filter((BB => BB.panel && !BB.disabled))
    }

    function pB(BB) {
      const OB = lB(),
        GB = OB.findIndex((BB => BB.id === yB));
      return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
    }

    function qB() {
      return null !== yB && lB().length > 1
    }

    function ZB() {
      JB(null)
    }

    function NB() {
      "inventory" !== YB.c.get("openInGameMenuName") && JB(null)
    }

    function RB() {
      const BB = yB;
      return JB(null), BB
    }

    function WB(BB) {
      return oB.set(BB.id, BB), DB.o.tM(QB, jB(), !0), () => {
        oB.get(BB.id) === BB && (oB.delete(BB.id), DB.o.tM(QB, jB()))
      }
    }
  },
  37267: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      f: () => RB,
      g: () => ZB,
      i: () => NB,
      m: () => zB,
      n: () => JB,
      o: () => qB,
      r: () => lB,
      s: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(37270);
    const jB = "clientGameUiChanged";
    let yB = null;

    function JB() {
      return yB
    }

    function MB(BB, OB) {
      const GB = {
        content: BB,
        menu: OB
      };
      return yB = GB, DB.o.tM(jB, yB, !0), () => {
        yB === GB && (yB = null, pB = !1, ZB(), DB.o.tM(jB, null))
      }
    }
    let PB = null;

    function zB() {
      return PB
    }

    function lB(BB) {
      return PB = BB, () => {
        PB === BB && (PB = null)
      }
    }
    let pB = !1;

    function qB() {
      const BB = YB.c.get("openInGameMenuName");
      "clientGame" !== BB && (pB = "inventory" === BB), (0, oB.q)() || (0, oB.l)(), (0, QB.p)(QB.b), YB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ZB() {
      WB(!1)
    }

    function NB() {
      WB(pB)
    }

    function RB() {
      pB && WB(!1)
    }

    function WB(BB) {
      "clientGame" === YB.c.get("openInGameMenuName") && YB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, oB.l)(), pB = !1
    }
  },
  9439: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(9448),
      DB = GB(641),
      QB = GB(120);

    function oB(BB) {
      var OB, GB;
      if ((0, DB.Q)(BB)) return !0;
      const oB = null !== (OB = null === (GB = QB.siteUsedData[QB.siteUsed]) || void 0 === GB ? void 0 : GB.adConfig.showRewardedAds) && void 0 !== OB && OB;
      for (const DB in BB) {
        const OB = BB[DB];
        if (null !== OB && void 0 !== OB && OB.items)
          for (const BB in OB.items)
            if ((0, YB.h)(OB.items[BB], oB)) return !1
      }
      return !0
    }
  },
  63844: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      getClientGameMapKey: () => YB.m,
      shopIsEmpty: () => DB.e
    });
    var YB = GB(37267),
      DB = GB(9439)
  },
  9448: (BB, OB, GB) => {
    function YB(BB, OB) {
      return !BB.hidden && (OB || !BB.isRewardedAd)
    }

    function DB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function QB(BB, OB) {
      var GB;
      if ("dropdown" === (null === (GB = BB.userInput) || void 0 === GB ? void 0 : GB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const GB of BB.userInput.dropdownOptions)
          if (DB(GB) === OB) return "object" === typeof GB ? GB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", OB)
      }
      return BB.cost
    }

    function oB(BB, OB, GB) {
      var YB;
      const DB = null !== (YB = GB.excludedPlayers) && void 0 !== YB ? YB : [OB];
      return BB.filter((BB => !DB.includes(BB)))
    }
    GB.d(OB, {
      b: () => QB,
      f: () => DB,
      g: () => oB,
      h: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);