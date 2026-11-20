export const id = 153;
export const ids = [153];
export const modules = {
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
    }
  },
  8487: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(8493),
      Ob = hb(588),
      Gb = hb(115);

    function Ub(bb) {
      var ub, hb;
      if ((0, Ob.J)(bb)) return !0;
      const Ub = null !== (ub = null === (hb = Gb.n[Gb.s]) || void 0 === hb ? void 0 : hb.adConfig.showRewardedAds) && void 0 !== ub && ub;
      for (const Ob in bb) {
        const ub = bb[Ob];
        if (null !== ub && void 0 !== ub && ub.items)
          for (const bb in ub.items)
            if ((0, Bb.j)(ub.items[bb], Ub)) return !1
      }
      return !0
    }
  },
  42019: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      getClientGameMapKey: () => Bb.l,
      shopIsEmpty: () => Ob.d
    });
    var Bb = hb(36214),
      Ob = hb(8487)
  },
  8493: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return !bb.hidden && (ub || !bb.isRewardedAd)
    }

    function Ob(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function Gb(bb, ub) {
      var hb;
      if ("dropdown" === (null === (hb = bb.userInput) || void 0 === hb ? void 0 : hb.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const hb of bb.userInput.dropdownOptions)
          if (Ob(hb) === ub) return "object" === typeof hb ? hb.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", ub)
      }
      return bb.cost
    }

    function Ub(bb, ub, hb) {
      var Bb;
      const Ob = null !== (Bb = hb.excludedPlayers) && void 0 !== Bb ? Bb : [ub];
      return bb.filter((bb => !Ob.includes(bb)))
    }
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob,
      g: () => Ub,
      j: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);