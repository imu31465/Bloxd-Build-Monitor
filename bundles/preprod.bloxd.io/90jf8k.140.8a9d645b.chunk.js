export const id = 140;
export const ids = [140];
export const modules = {
  35133: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => QF,
      D: () => TF,
      e: () => uF,
      h: () => rW,
      i: () => gW,
      l: () => bW,
      p: () => eF,
      r: () => tW,
      t: () => iW,
      w: () => aW
    });
    var CF = SF(11),
      AF = SF(20);
    const uF = "clientGameInventoryButtonsChanged",
      hF = new Map;

    function bW() {
      return [...hF.values()].sort(((FF, WF) => {
        var SF, CF;
        return (null !== (SF = FF.order) && void 0 !== SF ? SF : 0) - (null !== (CF = WF.order) && void 0 !== CF ? CF : 0)
      }))
    }
    let dF = null;

    function PF(FF) {
      dF = FF
    }
    let RF = !1;

    function iW(FF) {
      RF = !0;
      try {
        FF.onClick()
      } finally {
        RF = !1
      }
      FF.panel && "clientGame" === CF.b.get("openInGameMenuName") && PF(FF.id)
    }

    function eF() {
      return RF
    }

    function EF() {
      return bW().filter((FF => FF.panel && !FF.disabled))
    }

    function QF(FF) {
      const WF = EF(),
        SF = WF.findIndex((FF => FF.id === dF));
      return !(SF < 0 || WF.length < 2) && (iW(WF[(SF + FF + WF.length) % WF.length]), !0)
    }

    function rW() {
      return null !== dF && EF().length > 1
    }

    function gW() {
      PF(null)
    }

    function tW() {
      "inventory" !== CF.b.get("openInGameMenuName") && PF(null)
    }

    function TF() {
      const FF = dF;
      return PF(null), FF
    }

    function aW(FF) {
      return hF.set(FF.id, FF), AF.j.Uu(uF, bW(), !0), () => {
        hF.get(FF.id) === FF && (hF.delete(FF.id), AF.j.Uu(uF, bW()))
      }
    }
  },
  35131: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => gW,
      e: () => tW,
      h: () => eF,
      j: () => PF,
      n: () => rW,
      p: () => EF,
      r: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(1144),
      hF = SF(35133);
    const bW = "clientGameUiChanged";
    let dF = null;

    function PF() {
      return dF
    }

    function RF(FF, WF) {
      const SF = {
        content: FF,
        menu: WF
      };
      return dF = SF, AF.j.Uu(bW, dF, !0), () => {
        dF === SF && (dF = null, QF = !1, gW(), AF.j.Uu(bW, null))
      }
    }
    let iW = null;

    function eF() {
      return iW
    }

    function EF(FF) {
      return iW = FF, () => {
        iW === FF && (iW = null)
      }
    }
    let QF = !1;

    function rW() {
      const FF = CF.b.get("openInGameMenuName");
      "clientGame" !== FF && (QF = "inventory" === FF), (0, hF.p)() || (0, hF.i)(), (0, uF.h)("InGameMenu"), CF.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gW() {
      TF(!1)
    }

    function tW() {
      TF(QF)
    }

    function TF(FF) {
      "clientGame" === CF.b.get("openInGameMenuName") && CF.b.set({
        openInGameMenuName: FF ? "inventory" : null
      }), FF || (0, hF.i)(), QF = !1
    }
  },
  7670: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(7675),
      AF = SF(568),
      uF = SF(132);

    function hF(FF) {
      var WF, SF;
      if ((0, AF.Q)(FF)) return !0;
      const hF = null !== (WF = null === (SF = uF.n[uF.s]) || void 0 === SF ? void 0 : SF.adConfig.showRewardedAds) && void 0 !== WF && WF;
      for (const AF in FF) {
        const WF = FF[AF];
        if (null !== WF && void 0 !== WF && WF.items)
          for (const FF in WF.items)
            if ((0, CF.m)(WF.items[FF], hF)) return !1
      }
      return !0
    }
  },
  40460: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      getClientGameMapKey: () => CF.h,
      shopIsEmpty: () => AF.e
    });
    var CF = SF(35131),
      AF = SF(7670)
  },
  7675: (FF, WF, SF) => {
    function CF(FF, WF) {
      return !FF.hidden && (WF || !FF.isRewardedAd)
    }

    function AF(FF) {
      return "object" === typeof FF ? FF.option : FF
    }

    function uF(FF, WF) {
      var SF;
      if ("dropdown" === (null === (SF = FF.userInput) || void 0 === SF ? void 0 : SF.type) && "object" === typeof FF.userInput.dropdownOptions[0]) {
        for (const SF of FF.userInput.dropdownOptions)
          if (AF(SF) === WF) return "object" === typeof SF ? SF.cost : FF.cost;
        console.error("Didn't find matching option for dropdown item. Item:", FF, "input:", WF)
      }
      return FF.cost
    }

    function hF(FF, WF, SF) {
      var CF;
      const AF = null !== (CF = SF.excludedPlayers) && void 0 !== CF ? CF : [WF];
      return FF.filter((FF => !AF.includes(FF)))
    }
    SF.d(WF, {
      b: () => uF,
      e: () => AF,
      i: () => hF,
      m: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);