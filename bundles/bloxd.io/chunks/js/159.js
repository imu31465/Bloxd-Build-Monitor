export const id = 159;
export const ids = [159];
export const modules = {
  36998: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Yu,
      j: () => hu,
      k: () => lu,
      o: () => cu,
      q: () => Du,
      r: () => bu,
      t: () => Mu,
      x: () => Ou,
      y: () => gu
    });
    var su = ju(22),
      Uu = ju(24);
    const Zu = "clientGameInventoryButtonsChanged",
      Xu = new Map;

    function lu() {
      return [...Xu.values()].sort(((uu, Eu) => {
        var ju, su;
        return (null !== (ju = uu.order) && void 0 !== ju ? ju : 0) - (null !== (su = Eu.order) && void 0 !== su ? su : 0)
      }))
    }
    let qu = null;

    function fu(uu) {
      qu = uu
    }
    let Cu = !1;

    function bu(uu) {
      Cu = !0;
      try {
        uu.onClick()
      } finally {
        Cu = !1
      }
      uu.panel && "clientGame" === su.d.get("openInGameMenuName") && fu(uu.id)
    }

    function cu() {
      return Cu
    }

    function Nu() {
      return lu().filter((uu => uu.panel && !uu.disabled))
    }

    function Ou(uu) {
      const Eu = Nu(),
        ju = Eu.findIndex((uu => uu.id === qu));
      return !(ju < 0 || Eu.length < 2) && (bu(Eu[(ju + uu + Eu.length) % Eu.length]), !0)
    }

    function Yu() {
      return null !== qu && Nu().length > 1
    }

    function hu() {
      fu(null)
    }

    function Du() {
      "inventory" !== su.d.get("openInGameMenuName") && fu(null)
    }

    function gu() {
      const uu = qu;
      return fu(null), uu
    }

    function Mu(uu) {
      return Xu.set(uu.id, uu), Uu.h.TY(Zu, lu(), !0), () => {
        Xu.get(uu.id) === uu && (Xu.delete(uu.id), Uu.h.TY(Zu, lu()))
      }
    }
  },
  36992: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => hu,
      g: () => Du,
      k: () => cu,
      l: () => fu,
      m: () => Yu,
      n: () => Nu,
      o: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(1343),
      Xu = ju(36998);
    const lu = "clientGameUiChanged";
    let qu = null;

    function fu() {
      return qu
    }

    function Cu(uu, Eu) {
      const ju = {
        content: uu,
        menu: Eu
      };
      return qu = ju, Uu.h.TY(lu, qu, !0), () => {
        qu === ju && (qu = null, Ou = !1, hu(), Uu.h.TY(lu, null))
      }
    }
    let bu = null;

    function cu() {
      return bu
    }

    function Nu(uu) {
      return bu = uu, () => {
        bu === uu && (bu = null)
      }
    }
    let Ou = !1;

    function Yu() {
      const uu = su.d.get("openInGameMenuName");
      "clientGame" !== uu && (Ou = "inventory" === uu), (0, Xu.o)() || (0, Xu.j)(), (0, Zu.t)(Zu.b), su.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hu() {
      gu(!1)
    }

    function Du() {
      gu(Ou)
    }

    function gu(uu) {
      "clientGame" === su.d.get("openInGameMenuName") && su.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, Xu.j)(), Ou = !1
    }
  },
  8992: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(8995),
      Uu = ju(649),
      Zu = ju(131);

    function Xu(uu) {
      var Eu, ju;
      if ((0, Uu.H)(uu)) return !0;
      const Xu = null !== (Eu = null === (ju = Zu.siteUsedData[Zu.siteUsed]) || void 0 === ju ? void 0 : ju.adConfig.showRewardedAds) && void 0 !== Eu && Eu;
      for (const Uu in uu) {
        const Eu = uu[Uu];
        if (null !== Eu && void 0 !== Eu && Eu.items)
          for (const uu in Eu.items)
            if ((0, su.l)(Eu.items[uu], Xu)) return !1
      }
      return !0
    }
  },
  60866: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      getClientGameMapKey: () => su.k,
      shopIsEmpty: () => Uu.b
    });
    var su = ju(36992),
      Uu = ju(8992)
  },
  8995: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return !uu.hidden && (Eu || !uu.isRewardedAd)
    }

    function Uu(uu) {
      return "object" === typeof uu ? uu.option : uu
    }

    function Zu(uu, Eu) {
      var ju;
      if ("dropdown" === (null === (ju = uu.userInput) || void 0 === ju ? void 0 : ju.type) && "object" === typeof uu.userInput.dropdownOptions[0]) {
        for (const ju of uu.userInput.dropdownOptions)
          if (Uu(ju) === Eu) return "object" === typeof ju ? ju.cost : uu.cost;
        console.error("Didn't find matching option for dropdown item. Item:", uu, "input:", Eu)
      }
      return uu.cost
    }

    function Xu(uu, Eu, ju) {
      var su;
      const Uu = null !== (su = ju.excludedPlayers) && void 0 !== su ? su : [Eu];
      return uu.filter((uu => !Uu.includes(uu)))
    }
    ju.d(Eu, {
      d: () => Zu,
      g: () => Uu,
      j: () => Xu,
      l: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);