export const id = 22;
export const ids = [22];
export const modules = {
  35370: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => qb,
      f: () => sy,
      g: () => ey,
      k: () => Ky
    });
    var Uy = Wy(8408),
      hy = Wy(35379),
      fy = Wy(35383),
      Zy = Wy(7911),
      cb = Wy(1268),
      Py = Wy(55),
      oy = Wy(70),
      By = Wy(952);

    function Ky() {
      var yb;
      return (0, cb.m)(hy.e, (0, hy.s)()), (0, By.jsx)(By.Fragment, {
        children: null === (yb = (0, hy.s)()) || void 0 === yb ? void 0 : yb.content
      })
    }

    function ey(yb) {
      var bb;
      let {
        show: Wy
      } = yb;
      (0, cb.m)(hy.e, (0, hy.s)());
      const oy = null === (bb = (0, hy.s)()) || void 0 === bb ? void 0 : bb.menu;
      return (0, Py.useEffect)((() => {
        var yb;
        Wy || (null === oy || void 0 === oy || null === (yb = oy.onClose) || void 0 === yb || yb.call(oy), (0, fy.l)())
      }), [Wy, oy]), (0, Py.useEffect)((() => Wy ? (0, Zy.f)(fy.t, fy.e) : void 0), [Wy]), (0, By.jsx)(Uy.b, {
        showing: Wy,
        globallyUniqueKey: "clientGameMenu",
        children: null === oy || void 0 === oy ? void 0 : oy.content
      })
    }

    function qb(yb) {
      let {
        placement: bb = "bottom"
      } = yb;
      return (0, By.jsx)("div", {
        id: `clientGameHud-${bb}`,
        style: {
          display: "contents"
        }
      })
    }

    function sy(yb) {
      let {
        children: bb,
        placement: Wy = "bottom"
      } = yb;
      const [Uy, hy] = (0, Py.useState)(null);
      return (0, Py.useEffect)((() => {
        hy(document.getElementById(`clientGameHud-${Wy}`))
      }), [Wy]), Uy ? (0, oy.createPortal)(bb, Uy) : null
    }
  },
  8408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(3739),
      hy = Wy(3742);

    function fy(yb) {
      let {
        children: bb,
        showing: Wy,
        globallyUniqueKey: fy,
        alwaysMountChildren: Zy = !1,
        doGameplayStartStopOnShow: cb = !0,
        keepsMovement: Py = !1
      } = yb;
      return (0, hy.b)(!0, Wy, fy, Py), (0, Uy.b)(cb, Wy), Wy || Zy ? bb : null
    }
  },
  35490: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      g: () => Zy,
      i: () => cb,
      m: () => Py
    });
    var Uy = Wy(55),
      hy = Wy(974);
    const fy = 8,
      Zy = "InGameHeaderContainer",
      cb = "TopRightElements";

    function Py(yb) {
      const [bb] = (0, hy.d)(), [Wy, Py] = (0, Uy.useState)(!1);
      return (0, Uy.useLayoutEffect)((() => {
        if (!yb) return;
        const bb = document.querySelector(`.${Zy}`),
          Wy = document.querySelector(`.${cb}`),
          Uy = () => {
            const Uy = yb.getBoundingClientRect(),
              hy = bb ? bb.getBoundingClientRect().right : 0,
              Zy = Wy ? Wy.getBoundingClientRect().left : window.innerWidth,
              cb = Uy.left < hy + fy,
              oy = Uy.right > Zy - fy;
            Py(cb || oy)
          };
        Uy();
        const hy = new ResizeObserver(Uy);
        return hy.observe(yb), bb && hy.observe(bb), Wy && hy.observe(Wy), () => {
          hy.disconnect()
        }
      }), [yb, bb]), Wy
    }
  },
  7911: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    let Uy = null;
    const hy = function(yb) {
        const bb = {
          cycle: yb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Uy = bb, () => {
          Uy === bb && (Uy = null)
        }
      },
      fy = () => {
        var yb;
        return null !== (yb = Uy) && void 0 !== yb && yb.canCycle() ? Uy.cycle : null
      }
  },
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
  37200: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => cb,
      i: () => Py
    });
    const Uy = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      hy = [0, 1, 2, 0, 2, 3],
      fy = [4, 5];

    function Zy(yb, bb, Wy, Uy, hy) {
      for (let Zy = 0; Zy < 6; Zy++) fy.includes(Zy) === hy && oy(yb, bb, Wy, Uy, Zy)
    }

    function cb(yb, bb, Wy, Uy) {
      for (let hy = 0; hy < 6; hy++) oy(yb, bb, Wy, Uy, hy)
    }

    function Py(yb, bb, Wy, fy, Zy) {
      for (let cb = 0; cb < 6; cb++)
        for (const Py of [0, 1]) {
          const [oy, By, Ky] = [Py + 2, Py + 1, (Py + 3) % 4], ey = yb.length / 3;
          for (const [bb, hy] of [
              [Py, By],
              [oy, By],
              [oy, Ky],
              [Py, Ky]
            ])
            for (let Py = 0; Py < 3; Py++) {
              const oy = Uy[3 * (4 * cb + bb) + Py],
                By = Uy[3 * (4 * cb + hy) + Py];
              yb.push((oy + (By - oy) * Zy) * fy / 2 + Wy[Py])
            }
          for (const yb of hy) bb.push(ey + yb)
        }
    }

    function oy(yb, bb, Wy, fy, Zy) {
      let [cb, Py, oy] = Wy, [By, Ky, ey] = fy;
      const qb = yb.length / 3;
      for (let hy = 4 * Zy; hy < 4 * Zy + 4; hy++) yb.push(Uy[3 * hy] * By / 2 + cb, Uy[3 * hy + 1] * Ky / 2 + Py, Uy[3 * hy + 2] * ey / 2 + oy);
      for (const Uy of hy) bb.push(qb + Uy)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);