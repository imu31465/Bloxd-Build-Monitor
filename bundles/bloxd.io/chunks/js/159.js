export const id = 159;
export const ids = [159];
export const modules = {
  36867: (tt, et, Vt) => {
    Vt.d(et, {
      A: () => ft,
      E: () => Mt,
      d: () => Dt,
      f: () => wt,
      j: () => yt,
      n: () => dt,
      q: () => lt,
      t: () => Nt,
      w: () => Qt,
      y: () => bt
    });
    var Ot = Vt(26),
      qt = Vt(31);
    const Dt = "clientGameInventoryButtonsChanged",
      mt = new Map;

    function dt() {
      return [...mt.values()].sort(((tt, et) => {
        var Vt, Ot;
        return (null !== (Vt = tt.order) && void 0 !== Vt ? Vt : 0) - (null !== (Ot = et.order) && void 0 !== Ot ? Ot : 0)
      }))
    }
    let jt = null;

    function Ht(tt) {
      jt = tt
    }
    let Xt = !1;

    function Qt(tt) {
      Xt = !0;
      try {
        tt.onClick()
      } finally {
        Xt = !1
      }
      tt.panel && "clientGame" === Ot.b.get("openInGameMenuName") && Ht(tt.id)
    }

    function lt() {
      return Xt
    }

    function Et() {
      return dt().filter((tt => tt.panel && !tt.disabled))
    }

    function ft(tt) {
      const et = Et(),
        Vt = et.findIndex((tt => tt.id === jt));
      return !(Vt < 0 || et.length < 2) && (Qt(et[(Vt + tt + et.length) % et.length]), !0)
    }

    function wt() {
      return null !== jt && Et().length > 1
    }

    function yt() {
      Ht(null)
    }

    function Nt() {
      "inventory" !== Ot.b.get("openInGameMenuName") && Ht(null)
    }

    function Mt() {
      const tt = jt;
      return Ht(null), tt
    }

    function bt(tt) {
      return mt.set(tt.id, tt), qt.j.sw(Dt, dt(), !0), () => {
        mt.get(tt.id) === tt && (mt.delete(tt.id), qt.j.sw(Dt, dt()))
      }
    }
  },
  36861: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      c: () => yt,
      g: () => Nt,
      i: () => lt,
      l: () => Ht,
      m: () => wt,
      o: () => Et,
      q: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(1387),
      mt = Vt(36867);
    const dt = "clientGameUiChanged";
    let jt = null;

    function Ht() {
      return jt
    }

    function Xt(tt, et) {
      const Vt = {
        content: tt,
        menu: et
      };
      return jt = Vt, qt.j.sw(dt, jt, !0), () => {
        jt === Vt && (jt = null, ft = !1, yt(), qt.j.sw(dt, null))
      }
    }
    let Qt = null;

    function lt() {
      return Qt
    }

    function Et(tt) {
      return Qt = tt, () => {
        Qt === tt && (Qt = null)
      }
    }
    let ft = !1;

    function wt() {
      const tt = Ot.b.get("openInGameMenuName");
      "clientGame" !== tt && (ft = "inventory" === tt), (0, mt.q)() || (0, mt.j)(), (0, Dt.p)(Dt.c), Ot.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yt() {
      Mt(!1)
    }

    function Nt() {
      Mt(ft)
    }

    function Mt(tt) {
      "clientGame" === Ot.b.get("openInGameMenuName") && Ot.b.set({
        openInGameMenuName: tt ? "inventory" : null
      }), tt || (0, mt.j)(), ft = !1
    }
  },
  9005: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(9014),
      qt = Vt(710),
      Dt = Vt(153);

    function mt(tt) {
      var et, Vt;
      if ((0, qt.B)(tt)) return !0;
      const mt = null !== (et = null === (Vt = Dt.siteUsedData[Dt.siteUsed]) || void 0 === Vt ? void 0 : Vt.adConfig.showRewardedAds) && void 0 !== et && et;
      for (const qt in tt) {
        const et = tt[qt];
        if (null !== et && void 0 !== et && et.items)
          for (const tt in et.items)
            if ((0, Ot.m)(et.items[tt], mt)) return !1
      }
      return !0
    }
  },
  60836: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      getClientGameMapKey: () => Ot.i,
      shopIsEmpty: () => qt.c
    });
    var Ot = Vt(36861),
      qt = Vt(9005)
  },
  9014: (tt, et, Vt) => {
    function Ot(tt, et) {
      return !tt.hidden && (et || !tt.isRewardedAd)
    }

    function qt(tt) {
      return "object" === typeof tt ? tt.option : tt
    }

    function Dt(tt, et) {
      var Vt;
      if ("dropdown" === (null === (Vt = tt.userInput) || void 0 === Vt ? void 0 : Vt.type) && "object" === typeof tt.userInput.dropdownOptions[0]) {
        for (const Vt of tt.userInput.dropdownOptions)
          if (qt(Vt) === et) return "object" === typeof Vt ? Vt.cost : tt.cost;
        console.error("Didn't find matching option for dropdown item. Item:", tt, "input:", et)
      }
      return tt.cost
    }

    function mt(tt, et, Vt) {
      var Ot;
      const qt = null !== (Ot = Vt.excludedPlayers) && void 0 !== Ot ? Ot : [et];
      return tt.filter((tt => !qt.includes(tt)))
    }
    Vt.d(et, {
      d: () => Dt,
      e: () => qt,
      i: () => mt,
      m: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);