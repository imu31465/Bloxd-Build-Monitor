export const id = 151;
export const ids = [151];
export const modules = {
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  8495: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(8502),
      Ku = yu(610),
      Qu = yu(145);

    function mu(uu) {
      var Ru, yu;
      if ((0, Ku.E)(uu)) return !0;
      const mu = null !== (Ru = null === (yu = Qu.q[Qu.v]) || void 0 === yu ? void 0 : yu.adConfig.showRewardedAds) && void 0 !== Ru && Ru;
      for (const Ku in uu) {
        const Ru = uu[Ku];
        if (null !== Ru && void 0 !== Ru && Ru.items)
          for (const uu in Ru.items)
            if ((0, Eu.l)(Ru.items[uu], mu)) return !1
      }
      return !0
    }
  },
  42160: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      getClientGameMapKey: () => Eu.m,
      shopIsEmpty: () => Ku.c
    });
    var Eu = yu(36445),
      Ku = yu(8495)
  },
  8502: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return !uu.hidden && (Ru || !uu.isRewardedAd)
    }

    function Ku(uu) {
      return "object" === typeof uu ? uu.option : uu
    }

    function Qu(uu, Ru) {
      var yu;
      if ("dropdown" === (null === (yu = uu.userInput) || void 0 === yu ? void 0 : yu.type) && "object" === typeof uu.userInput.dropdownOptions[0]) {
        for (const yu of uu.userInput.dropdownOptions)
          if (Ku(yu) === Ru) return "object" === typeof yu ? yu.cost : uu.cost;
        console.error("Didn't find matching option for dropdown item. Item:", uu, "input:", Ru)
      }
      return uu.cost
    }

    function mu(uu, Ru, yu) {
      var Eu;
      const Ku = null !== (Eu = yu.excludedPlayers) && void 0 !== Eu ? Eu : [Ru];
      return uu.filter((uu => !Ku.includes(uu)))
    }
    yu.d(Ru, {
      e: () => Qu,
      h: () => Ku,
      i: () => mu,
      l: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);