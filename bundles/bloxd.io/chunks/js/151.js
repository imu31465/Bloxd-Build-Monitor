export const id = 151;
export const ids = [151];
export const modules = {
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  8383: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(8389),
      Wb = sb(628),
      ab = sb(167);

    function Tb(bb) {
      var cb, sb;
      if ((0, Wb.L)(bb)) return !0;
      const Tb = null !== (cb = null === (sb = ab.n[ab.r]) || void 0 === sb ? void 0 : sb.adConfig.showRewardedAds) && void 0 !== cb && cb;
      for (const Wb in bb) {
        const cb = bb[Wb];
        if (null !== cb && void 0 !== cb && cb.items)
          for (const bb in cb.items)
            if ((0, kb.o)(cb.items[bb], Tb)) return !1
      }
      return !0
    }
  },
  41956: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      getClientGameMapKey: () => kb.i,
      shopIsEmpty: () => Wb.d
    });
    var kb = sb(36240),
      Wb = sb(8383)
  },
  8389: (bb, cb, sb) => {
    function kb(bb, cb) {
      return !bb.hidden && (cb || !bb.isRewardedAd)
    }

    function Wb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function ab(bb, cb) {
      var sb;
      if ("dropdown" === (null === (sb = bb.userInput) || void 0 === sb ? void 0 : sb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const sb of bb.userInput.dropdownOptions)
          if (Wb(sb) === cb) return "object" === typeof sb ? sb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", cb)
      }
      return bb.cost
    }

    function Tb(bb, cb, sb) {
      var kb;
      const Wb = null !== (kb = sb.excludedPlayers) && void 0 !== kb ? kb : [cb];
      return bb.filter((bb => !Wb.includes(bb)))
    }
    sb.d(cb, {
      e: () => ab,
      g: () => Wb,
      k: () => Tb,
      o: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);