export const id = 22;
export const ids = [22];
export const modules = {
  36132: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => wv,
      g: () => av,
      i: () => Wv,
      m: () => Tv
    });
    var hv = Pv(8997),
      Sv = Pv(36137),
      ev = Pv(36139),
      gv = Pv(8413),
      pv = Pv(1439),
      dv = Pv(52),
      Nv = Pv(62),
      lv = Pv(1082);

    function Tv() {
      var vv;
      return (0, pv.j)(Sv.d, (0, Sv.q)()), (0, lv.jsx)(lv.Fragment, {
        children: null === (vv = (0, Sv.q)()) || void 0 === vv ? void 0 : vv.content
      })
    }

    function Wv(vv) {
      var zv;
      let {
        show: Pv
      } = vv;
      (0, pv.j)(Sv.d, (0, Sv.q)());
      const Nv = null === (zv = (0, Sv.q)()) || void 0 === zv ? void 0 : zv.menu;
      return (0, dv.useEffect)((() => {
        var vv;
        Pv || (null === Nv || void 0 === Nv || null === (vv = Nv.onClose) || void 0 === vv || vv.call(Nv), (0, ev.o)())
      }), [Pv, Nv]), (0, dv.useEffect)((() => Pv ? (0, gv.f)(ev.y, ev.c) : void 0), [Pv]), (0, lv.jsx)(hv.d, {
        showing: Pv,
        globallyUniqueKey: "clientGameMenu",
        children: null === Nv || void 0 === Nv ? void 0 : Nv.content
      })
    }

    function wv(vv) {
      let {
        placement: zv = "bottom"
      } = vv;
      return (0, lv.jsx)("div", {
        id: `clientGameHud-${zv}`,
        style: {
          display: "contents"
        }
      })
    }

    function av(vv) {
      let {
        children: zv,
        placement: Pv = "bottom"
      } = vv;
      const [hv, Sv] = (0, dv.useState)(null);
      return (0, dv.useEffect)((() => {
        Sv(document.getElementById(`clientGameHud-${Pv}`))
      }), [Pv]), hv ? (0, Nv.createPortal)(zv, hv) : null
    }
  },
  8997: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(4287),
      Sv = Pv(4292);

    function ev(vv) {
      let {
        children: zv,
        showing: Pv,
        globallyUniqueKey: ev,
        alwaysMountChildren: gv = !1,
        doGameplayStartStopOnShow: pv = !0,
        keepsMovement: dv = !1
      } = vv;
      return (0, Sv.e)(!0, Pv, ev, dv), (0, hv.b)(pv, Pv), Pv || gv ? zv : null
    }
  },
  36198: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => gv,
      m: () => pv,
      q: () => dv
    });
    var hv = Pv(52),
      Sv = Pv(2899);
    const ev = 8,
      gv = "InGameHeaderContainer",
      pv = "TopRightElements";

    function dv(vv) {
      const [zv] = (0, Sv.d)(), [Pv, dv] = (0, hv.useState)(!1);
      return (0, hv.useLayoutEffect)((() => {
        if (!vv) return;
        const zv = document.querySelector(`.${gv}`),
          Pv = document.querySelector(`.${pv}`),
          hv = () => {
            const hv = vv.getBoundingClientRect(),
              Sv = zv ? zv.getBoundingClientRect().right : 0,
              gv = Pv ? Pv.getBoundingClientRect().left : window.innerWidth,
              pv = hv.left < Sv + ev,
              Nv = hv.right > gv - ev;
            dv(pv || Nv)
          };
        hv();
        const Sv = new ResizeObserver(hv);
        return Sv.observe(vv), zv && Sv.observe(zv), Pv && Sv.observe(Pv), () => {
          Sv.disconnect()
        }
      }), [vv, zv]), Pv
    }
  },
  8413: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      f: () => Sv
    });
    let hv = null;
    const Sv = function(vv) {
        const zv = {
          cycle: vv,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hv = zv, () => {
          hv === zv && (hv = null)
        }
      },
      ev = () => {
        var vv;
        return null !== (vv = hv) && void 0 !== vv && vv.canCycle() ? hv.cycle : null
      }
  },
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
  38051: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      g: () => pv,
      i: () => dv
    });
    const hv = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Sv = [0, 1, 2, 0, 2, 3],
      ev = [4, 5];

    function gv(vv, zv, Pv, hv, Sv) {
      for (let gv = 0; gv < 6; gv++) ev.includes(gv) === Sv && Nv(vv, zv, Pv, hv, gv)
    }

    function pv(vv, zv, Pv, hv) {
      for (let Sv = 0; Sv < 6; Sv++) Nv(vv, zv, Pv, hv, Sv)
    }

    function dv(vv, zv, Pv, ev, gv) {
      for (let pv = 0; pv < 6; pv++)
        for (const dv of [0, 1]) {
          const [Nv, lv, Tv] = [dv + 2, dv + 1, (dv + 3) % 4], Wv = vv.length / 3;
          for (const [zv, Sv] of [
              [dv, lv],
              [Nv, lv],
              [Nv, Tv],
              [dv, Tv]
            ])
            for (let dv = 0; dv < 3; dv++) {
              const Nv = hv[3 * (4 * pv + zv) + dv],
                lv = hv[3 * (4 * pv + Sv) + dv];
              vv.push((Nv + (lv - Nv) * gv) * ev / 2 + Pv[dv])
            }
          for (const vv of Sv) zv.push(Wv + vv)
        }
    }

    function Nv(vv, zv, Pv, ev, gv) {
      let [pv, dv, Nv] = Pv, [lv, Tv, Wv] = ev;
      const wv = vv.length / 3;
      for (let Sv = 4 * gv; Sv < 4 * gv + 4; Sv++) vv.push(hv[3 * Sv] * lv / 2 + pv, hv[3 * Sv + 1] * Tv / 2 + dv, hv[3 * Sv + 2] * Wv / 2 + Nv);
      for (const hv of Sv) zv.push(wv + hv)
    }
  },
  36395: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return null === vv || null === zv ? vv === zv : vv[0] === zv[0] && vv[1] === zv[1] && vv[2] === zv[2]
    }

    function Sv(vv) {
      return [vv[0] + .5, vv[1] + .5, vv[2] + .5]
    }
    Pv.d(zv, {
      b: () => Sv,
      d: () => hv
    })
  },
  36443: (vv, zv, Pv) => {
    function hv(vv) {
      return vv.includes("Leaf Bed")
    }

    function Sv(vv) {
      return / Bed(?: Head)?(?:\||$)/.test(vv) && !hv(vv)
    }

    function ev(vv) {
      return vv.includes(" Strongbed")
    }

    function gv(vv) {
      return hv(vv) || Sv(vv) || ev(vv)
    }
    Pv.d(zv, {
      e: () => gv,
      h: () => hv,
      k: () => ev,
      n: () => Sv
    })
  },
  36434: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Nv
    });
    var hv = Pv(36443),
      Sv = Pv(9101);
    const ev = [],
      gv = [],
      pv = [],
      dv = [];
    for (const lv of Object.keys(Sv.k))(0, hv.h)(lv) ? ev.push(lv) : (0, hv.n)(lv) && gv.push(lv), (0, hv.k)(lv) && pv.push(lv), (lv.includes(" Bed Head") || lv.includes(" Strongbed Head")) && dv.push(lv);
    const Nv = {
      leafBeds: ev,
      woolBeds: gv,
      strongBeds: pv,
      beds: [...ev, ...gv, ...pv],
      bedHeads: dv,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);