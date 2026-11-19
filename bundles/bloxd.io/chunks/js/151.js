export const id = 151;
export const ids = [151];
export const modules = {
  35601: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      g: () => KT,
      j: () => MT,
      m: () => XT,
      n: () => LT,
      r: () => rT,
      s: () => DT,
      w: () => gT,
      x: () => cT,
      y: () => AT
    });
    var iT = IT(12),
      zT = IT(16);
    const kT = "clientGameInventoryButtonsChanged",
      WT = new Map;

    function XT() {
      return [...WT.values()].sort(((TT, oT) => {
        var IT, iT;
        return (null !== (IT = TT.order) && void 0 !== IT ? IT : 0) - (null !== (iT = oT.order) && void 0 !== iT ? iT : 0)
      }))
    }
    let BT = null;

    function FT(TT) {
      BT = TT
    }
    let ST = !1;

    function DT(TT) {
      ST = !0;
      try {
        TT.onClick()
      } finally {
        ST = !1
      }
      TT.panel && "clientGame" === iT.c.get("openInGameMenuName") && FT(TT.id)
    }

    function LT() {
      return ST
    }

    function xT() {
      return XT().filter((TT => TT.panel && !TT.disabled))
    }

    function cT(TT) {
      const oT = xT(),
        IT = oT.findIndex((TT => TT.id === BT));
      return !(IT < 0 || oT.length < 2) && (DT(oT[(IT + TT + oT.length) % oT.length]), !0)
    }

    function KT() {
      return null !== BT && xT().length > 1
    }

    function MT() {
      FT(null)
    }

    function rT() {
      "inventory" !== iT.c.get("openInGameMenuName") && FT(null)
    }

    function AT() {
      const TT = BT;
      return FT(null), TT
    }

    function gT(TT) {
      return WT.set(TT.id, TT), zT.h.XM(kT, XT(), !0), () => {
        WT.get(TT.id) === TT && (WT.delete(TT.id), zT.h.XM(kT, XT()))
      }
    }
  },
  35599: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      e: () => MT,
      h: () => rT,
      i: () => LT,
      k: () => FT,
      o: () => KT,
      s: () => xT,
      u: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(1253),
      WT = IT(35601);
    const XT = "clientGameUiChanged";
    let BT = null;

    function FT() {
      return BT
    }

    function ST(TT, oT) {
      const IT = {
        content: TT,
        menu: oT
      };
      return BT = IT, zT.h.XM(XT, BT, !0), () => {
        BT === IT && (BT = null, cT = !1, MT(), zT.h.XM(XT, null))
      }
    }
    let DT = null;

    function LT() {
      return DT
    }

    function xT(TT) {
      return DT = TT, () => {
        DT === TT && (DT = null)
      }
    }
    let cT = !1;

    function KT() {
      const TT = iT.c.get("openInGameMenuName");
      "clientGame" !== TT && (cT = "inventory" === TT), (0, WT.n)() || (0, WT.j)(), (0, kT.o)(kT.c), iT.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function MT() {
      AT(!1)
    }

    function rT() {
      AT(cT)
    }

    function AT(TT) {
      "clientGame" === iT.c.get("openInGameMenuName") && iT.c.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, WT.j)(), cT = !1
    }
  },
  8193: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(8201),
      zT = IT(618),
      kT = IT(139);

    function WT(TT) {
      var oT, IT;
      if ((0, zT.K)(TT)) return !0;
      const WT = null !== (oT = null === (IT = kT.k[kT.p]) || void 0 === IT ? void 0 : IT.adConfig.showRewardedAds) && void 0 !== oT && oT;
      for (const zT in TT) {
        const oT = TT[zT];
        if (null !== oT && void 0 !== oT && oT.items)
          for (const TT in oT.items)
            if ((0, iT.k)(oT.items[TT], WT)) return !1
      }
      return !0
    }
  },
  41402: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      getClientGameMapKey: () => iT.i,
      shopIsEmpty: () => zT.e
    });
    var iT = IT(35599),
      zT = IT(8193)
  },
  8201: (TT, oT, IT) => {
    function iT(TT, oT) {
      return !TT.hidden && (oT || !TT.isRewardedAd)
    }

    function zT(TT) {
      return "object" === typeof TT ? TT.option : TT
    }

    function kT(TT, oT) {
      var IT;
      if ("dropdown" === (null === (IT = TT.userInput) || void 0 === IT ? void 0 : IT.type) && "object" === typeof TT.userInput.dropdownOptions[0]) {
        for (const IT of TT.userInput.dropdownOptions)
          if (zT(IT) === oT) return "object" === typeof IT ? IT.cost : TT.cost;
        console.error("Didn't find matching option for dropdown item. Item:", TT, "input:", oT)
      }
      return TT.cost
    }

    function WT(TT, oT, IT) {
      var iT;
      const zT = null !== (iT = IT.excludedPlayers) && void 0 !== iT ? iT : [oT];
      return TT.filter((TT => !zT.includes(TT)))
    }
    IT.d(oT, {
      e: () => kT,
      f: () => zT,
      j: () => WT,
      k: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);