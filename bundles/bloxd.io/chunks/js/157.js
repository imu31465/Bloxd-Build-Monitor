export const id = 157;
export const ids = [157];
export const modules = {
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  8970: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(8975),
      bS = gS(680),
      XS = gS(138);

    function xS(SS) {
      var HS, gS;
      if ((0, bS.K)(SS)) return !0;
      const xS = null !== (HS = null === (gS = XS.m[XS.r]) || void 0 === gS ? void 0 : gS.adConfig.showRewardedAds) && void 0 !== HS && HS;
      for (const bS in SS) {
        const HS = SS[bS];
        if (null !== HS && void 0 !== HS && HS.items)
          for (const SS in HS.items)
            if ((0, tS.i)(HS.items[SS], xS)) return !1
      }
      return !0
    }
  },
  60664: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      getClientGameMapKey: () => tS.o,
      shopIsEmpty: () => bS.e
    });
    var tS = gS(36624),
      bS = gS(8970)
  },
  8975: (SS, HS, gS) => {
    function tS(SS, HS) {
      return !SS.hidden && (HS || !SS.isRewardedAd)
    }

    function bS(SS) {
      return "object" === typeof SS ? SS.option : SS
    }

    function XS(SS, HS) {
      var gS;
      if ("dropdown" === (null === (gS = SS.userInput) || void 0 === gS ? void 0 : gS.type) && "object" === typeof SS.userInput.dropdownOptions[0]) {
        for (const gS of SS.userInput.dropdownOptions)
          if (bS(gS) === HS) return "object" === typeof gS ? gS.cost : SS.cost;
        console.error("Didn't find matching option for dropdown item. Item:", SS, "input:", HS)
      }
      return SS.cost
    }

    function xS(SS, HS, gS) {
      var tS;
      const bS = null !== (tS = gS.excludedPlayers) && void 0 !== tS ? tS : [HS];
      return SS.filter((SS => !bS.includes(SS)))
    }
    gS.d(HS, {
      b: () => XS,
      c: () => bS,
      e: () => xS,
      i: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);