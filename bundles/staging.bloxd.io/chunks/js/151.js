export const id = 151;
export const ids = [151];
export const modules = {
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
    }
  },
  8326: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(8334),
      Mb = Ub(591),
      Tb = Ub(137);

    function Eb(bb) {
      var ab, Ub;
      if ((0, Mb.I)(bb)) return !0;
      const Eb = null !== (ab = null === (Ub = Tb.l[Tb.p]) || void 0 === Ub ? void 0 : Ub.adConfig.showRewardedAds) && void 0 !== ab && ab;
      for (const Mb in bb) {
        const ab = bb[Mb];
        if (null !== ab && void 0 !== ab && ab.items)
          for (const bb in ab.items)
            if ((0, Ab.n)(ab.items[bb], Eb)) return !1
      }
      return !0
    }
  },
  41693: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      getClientGameMapKey: () => Ab.j,
      shopIsEmpty: () => Mb.e
    });
    var Ab = Ub(36017),
      Mb = Ub(8326)
  },
  8334: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return !bb.hidden && (ab || !bb.isRewardedAd)
    }

    function Mb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function Tb(bb, ab) {
      var Ub;
      if ("dropdown" === (null === (Ub = bb.userInput) || void 0 === Ub ? void 0 : Ub.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const Ub of bb.userInput.dropdownOptions)
          if (Mb(Ub) === ab) return "object" === typeof Ub ? Ub.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", ab)
      }
      return bb.cost
    }

    function Eb(bb, ab, Ub) {
      var Ab;
      const Mb = null !== (Ab = Ub.excludedPlayers) && void 0 !== Ab ? Ab : [ab];
      return bb.filter((bb => !Mb.includes(bb)))
    }
    Ub.d(ab, {
      c: () => Tb,
      g: () => Mb,
      j: () => Eb,
      n: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);