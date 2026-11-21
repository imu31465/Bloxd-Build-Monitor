export const id = 153;
export const ids = [153];
export const modules = {
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  8673: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(8681),
      Nd = kd(610),
      Wd = kd(126);

    function Pd(dd) {
      var Jd, kd;
      if ((0, Nd.I)(dd)) return !0;
      const Pd = null !== (Jd = null === (kd = Wd.q[Wd.t]) || void 0 === kd ? void 0 : kd.adConfig.showRewardedAds) && void 0 !== Jd && Jd;
      for (const Nd in dd) {
        const Jd = dd[Nd];
        if (null !== Jd && void 0 !== Jd && Jd.items)
          for (const dd in Jd.items)
            if ((0, pd.k)(Jd.items[dd], Pd)) return !1
      }
      return !0
    }
  },
  42522: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      getClientGameMapKey: () => pd.m,
      shopIsEmpty: () => Nd.e
    });
    var pd = kd(36779),
      Nd = kd(8673)
  },
  8681: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return !dd.hidden && (Jd || !dd.isRewardedAd)
    }

    function Nd(dd) {
      return "object" === typeof dd ? dd.option : dd
    }

    function Wd(dd, Jd) {
      var kd;
      if ("dropdown" === (null === (kd = dd.userInput) || void 0 === kd ? void 0 : kd.type) && "object" === typeof dd.userInput.dropdownOptions[0]) {
        for (const kd of dd.userInput.dropdownOptions)
          if (Nd(kd) === Jd) return "object" === typeof kd ? kd.cost : dd.cost;
        console.error("Didn't find matching option for dropdown item. Item:", dd, "input:", Jd)
      }
      return dd.cost
    }

    function Pd(dd, Jd, kd) {
      var pd;
      const Nd = null !== (pd = kd.excludedPlayers) && void 0 !== pd ? pd : [Jd];
      return dd.filter((dd => !Nd.includes(dd)))
    }
    kd.d(Jd, {
      d: () => Wd,
      h: () => Nd,
      i: () => Pd,
      k: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);