export const id = 152;
export const ids = [152];
export const modules = {
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  8802: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(8808),
      MT = cT(617),
      KT = cT(159);

    function OT(TT) {
      var kT, cT;
      if ((0, MT.R)(TT)) return !0;
      const OT = null !== (kT = null === (cT = KT.p[KT.u]) || void 0 === cT ? void 0 : cT.adConfig.showRewardedAds) && void 0 !== kT && kT;
      for (const MT in TT) {
        const kT = TT[MT];
        if (null !== kT && void 0 !== kT && kT.items)
          for (const TT in kT.items)
            if ((0, lT.p)(kT.items[TT], OT)) return !1
      }
      return !0
    }
  },
  42149: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      getClientGameMapKey: () => lT.h,
      shopIsEmpty: () => MT.b
    });
    var lT = cT(36423),
      MT = cT(8802)
  },
  8808: (TT, kT, cT) => {
    function lT(TT, kT) {
      return !TT.hidden && (kT || !TT.isRewardedAd)
    }

    function MT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function KT(TT, kT) {
      var cT;
      if ("dropdown" === (null === (cT = TT.userInput) || void 0 === cT ? void 0 : cT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const cT of TT.userInput.dropdownOptions)
          if (MT(cT) === kT) return "object" === typeof cT ? cT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", kT)
      }
      return TT.cost
    }

    function OT(TT, kT, cT) {
      var lT;
      const MT = null !== (lT = cT.excludedPlayers) && void 0 !== lT ? lT : [kT];
      return TT.filter((TT => !MT.includes(TT)))
    }
    cT.d(kT, {
      e: () => KT,
      h: () => MT,
      l: () => OT,
      p: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);