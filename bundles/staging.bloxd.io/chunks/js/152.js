export const id = 152;
export const ids = [152];
export const modules = {
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  8467: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(8470),
      Sv = Pv(626),
      ev = Pv(108);

    function gv(vv) {
      var zv, Pv;
      if ((0, Sv.N)(vv)) return !0;
      const gv = null !== (zv = null === (Pv = ev.k[ev.o]) || void 0 === Pv ? void 0 : Pv.adConfig.showRewardedAds) && void 0 !== zv && zv;
      for (const Sv in vv) {
        const zv = vv[Sv];
        if (null !== zv && void 0 !== zv && zv.items)
          for (const vv in zv.items)
            if ((0, hv.k)(zv.items[vv], gv)) return !1
      }
      return !0
    }
  },
  41931: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      getClientGameMapKey: () => hv.m,
      shopIsEmpty: () => Sv.b
    });
    var hv = Pv(36137),
      Sv = Pv(8467)
  },
  8470: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return !vv.hidden && (zv || !vv.isRewardedAd)
    }

    function Sv(vv) {
      return "object" === typeof vv ? vv.option : vv
    }

    function ev(vv, zv) {
      var Pv;
      if ("dropdown" === (null === (Pv = vv.userInput) || void 0 === Pv ? void 0 : Pv.type) && "object" === typeof vv.userInput.dropdownOptions[0]) {
        for (const Pv of vv.userInput.dropdownOptions)
          if (Sv(Pv) === zv) return "object" === typeof Pv ? Pv.cost : vv.cost;
        console.error("Didn't find matching option for dropdown item. Item:", vv, "input:", zv)
      }
      return vv.cost
    }

    function gv(vv, zv, Pv) {
      var hv;
      const Sv = null !== (hv = Pv.excludedPlayers) && void 0 !== hv ? hv : [zv];
      return vv.filter((vv => !Sv.includes(vv)))
    }
    Pv.d(zv, {
      d: () => ev,
      f: () => Sv,
      h: () => gv,
      k: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);