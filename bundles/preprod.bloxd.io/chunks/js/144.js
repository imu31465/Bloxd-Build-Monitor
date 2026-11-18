export const id = 144;
export const ids = [144];
export const modules = {
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  7884: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(7892),
      hy = Wy(547),
      fy = Wy(139);

    function Zy(yb) {
      var bb, Wy;
      if ((0, hy.D)(yb)) return !0;
      const Zy = null !== (bb = null === (Wy = fy.r[fy.u]) || void 0 === Wy ? void 0 : Wy.adConfig.showRewardedAds) && void 0 !== bb && bb;
      for (const hy in yb) {
        const bb = yb[hy];
        if (null !== bb && void 0 !== bb && bb.items)
          for (const yb in bb.items)
            if ((0, Uy.k)(bb.items[yb], Zy)) return !1
      }
      return !0
    }
  },
  41092: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      getClientGameMapKey: () => Uy.o,
      shopIsEmpty: () => hy.d
    });
    var Uy = Wy(35379),
      hy = Wy(7884)
  },
  7892: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return !yb.hidden && (bb || !yb.isRewardedAd)
    }

    function hy(yb) {
      return "object" === typeof yb ? yb.option : yb
    }

    function fy(yb, bb) {
      var Wy;
      if ("dropdown" === (null === (Wy = yb.userInput) || void 0 === Wy ? void 0 : Wy.type) && "object" === typeof yb.userInput.dropdownOptions[0]) {
        for (const Wy of yb.userInput.dropdownOptions)
          if (hy(Wy) === bb) return "object" === typeof Wy ? Wy.cost : yb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", yb, "input:", bb)
      }
      return yb.cost
    }

    function Zy(yb, bb, Wy) {
      var Uy;
      const hy = null !== (Uy = Wy.excludedPlayers) && void 0 !== Uy ? Uy : [bb];
      return yb.filter((yb => !hy.includes(yb)))
    }
    Wy.d(bb, {
      b: () => fy,
      d: () => hy,
      h: () => Zy,
      k: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);