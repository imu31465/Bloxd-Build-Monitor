export const id = 153;
export const ids = [153];
export const modules = {
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  8723: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(8729),
      lq = gq(598),
      Oq = gq(136);

    function mq(qq) {
      var Eq, gq;
      if ((0, lq.H)(qq)) return !0;
      const mq = null !== (Eq = null === (gq = Oq.k[Oq.n]) || void 0 === gq ? void 0 : gq.adConfig.showRewardedAds) && void 0 !== Eq && Eq;
      for (const lq in qq) {
        const Eq = qq[lq];
        if (null !== Eq && void 0 !== Eq && Eq.items)
          for (const qq in Eq.items)
            if ((0, Yq.h)(Eq.items[qq], mq)) return !1
      }
      return !0
    }
  },
  42369: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      getClientGameMapKey: () => Yq.j,
      shopIsEmpty: () => lq.d
    });
    var Yq = gq(36657),
      lq = gq(8723)
  },
  8729: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return !qq.hidden && (Eq || !qq.isRewardedAd)
    }

    function lq(qq) {
      return "object" === typeof qq ? qq.option : qq
    }

    function Oq(qq, Eq) {
      var gq;
      if ("dropdown" === (null === (gq = qq.userInput) || void 0 === gq ? void 0 : gq.type) && "object" === typeof qq.userInput.dropdownOptions[0]) {
        for (const gq of qq.userInput.dropdownOptions)
          if (lq(gq) === Eq) return "object" === typeof gq ? gq.cost : qq.cost;
        console.error("Didn't find matching option for dropdown item. Item:", qq, "input:", Eq)
      }
      return qq.cost
    }

    function mq(qq, Eq, gq) {
      var Yq;
      const lq = null !== (Yq = gq.excludedPlayers) && void 0 !== Yq ? Yq : [Eq];
      return qq.filter((qq => !lq.includes(qq)))
    }
    gq.d(Eq, {
      d: () => Oq,
      f: () => lq,
      g: () => mq,
      h: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);