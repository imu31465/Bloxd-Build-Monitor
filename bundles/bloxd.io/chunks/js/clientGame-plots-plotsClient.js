export const id = 22;
export const ids = [22];
export const modules = {
  36772: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      g: () => Ld,
      h: () => ld,
      j: () => od
    });
    var pd = kd(9234),
      Nd = kd(36779),
      Wd = kd(36783),
      Pd = kd(8620),
      Zd = kd(1459),
      gd = kd(56),
      Cd = kd(72),
      Kd = kd(1103);

    function od() {
      var dd;
      return (0, Zd.i)(Nd.e, (0, Nd.o)()), (0, Kd.jsx)(Kd.Fragment, {
        children: null === (dd = (0, Nd.o)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function ld(dd) {
      var Jd;
      let {
        show: kd
      } = dd;
      (0, Zd.i)(Nd.e, (0, Nd.o)());
      const Cd = null === (Jd = (0, Nd.o)()) || void 0 === Jd ? void 0 : Jd.menu;
      return (0, gd.useEffect)((() => {
        var dd;
        kd || (null === Cd || void 0 === Cd || null === (dd = Cd.onClose) || void 0 === dd || dd.call(Cd), (0, Wd.s)())
      }), [kd, Cd]), (0, gd.useEffect)((() => kd ? (0, Pd.g)(Wd.B, Wd.h) : void 0), [kd]), (0, Kd.jsx)(pd.b, {
        showing: kd,
        globallyUniqueKey: "clientGameMenu",
        children: null === Cd || void 0 === Cd ? void 0 : Cd.content
      })
    }

    function Qd(dd) {
      let {
        placement: Jd = "bottom"
      } = dd;
      return (0, Kd.jsx)("div", {
        id: `clientGameHud-${Jd}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ld(dd) {
      let {
        children: Jd,
        placement: kd = "bottom"
      } = dd;
      const [pd, Nd] = (0, gd.useState)(null);
      return (0, gd.useEffect)((() => {
        Nd(document.getElementById(`clientGameHud-${kd}`))
      }), [kd]), pd ? (0, Cd.createPortal)(Jd, pd) : null
    }
  },
  9234: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(4393),
      Nd = kd(4397);

    function Wd(dd) {
      let {
        children: Jd,
        showing: kd,
        globallyUniqueKey: Wd,
        alwaysMountChildren: Pd = !1,
        doGameplayStartStopOnShow: Zd = !0,
        keepsMovement: gd = !1
      } = dd;
      return (0, Nd.d)(!0, kd, Wd, gd), (0, pd.c)(Zd, kd), kd || Pd ? Jd : null
    }
  },
  36857: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      h: () => Pd,
      k: () => Zd,
      m: () => gd
    });
    var pd = kd(56),
      Nd = kd(2974);
    const Wd = 8,
      Pd = "InGameHeaderContainer",
      Zd = "TopRightElements";

    function gd(dd) {
      const [Jd] = (0, Nd.b)(), [kd, gd] = (0, pd.useState)(!1);
      return (0, pd.useLayoutEffect)((() => {
        if (!dd) return;
        const Jd = document.querySelector(`.${Pd}`),
          kd = document.querySelector(`.${Zd}`),
          pd = () => {
            const pd = dd.getBoundingClientRect(),
              Nd = Jd ? Jd.getBoundingClientRect().right : 0,
              Pd = kd ? kd.getBoundingClientRect().left : window.innerWidth,
              Zd = pd.left < Nd + Wd,
              Cd = pd.right > Pd - Wd;
            gd(Zd || Cd)
          };
        pd();
        const Nd = new ResizeObserver(pd);
        return Nd.observe(dd), Jd && Nd.observe(Jd), kd && Nd.observe(kd), () => {
          Nd.disconnect()
        }
      }), [dd, Jd]), kd
    }
  },
  8620: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      g: () => Nd
    });
    let pd = null;
    const Nd = function(dd) {
        const Jd = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pd = Jd, () => {
          pd === Jd && (pd = null)
        }
      },
      Wd = () => {
        var dd;
        return null !== (dd = pd) && void 0 !== dd && dd.canCycle() ? pd.cycle : null
      }
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  38660: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      f: () => Zd,
      h: () => gd
    });
    const pd = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Nd = [0, 1, 2, 0, 2, 3],
      Wd = [4, 5];

    function Pd(dd, Jd, kd, pd, Nd) {
      for (let Pd = 0; Pd < 6; Pd++) Wd.includes(Pd) === Nd && Cd(dd, Jd, kd, pd, Pd)
    }

    function Zd(dd, Jd, kd, pd) {
      for (let Nd = 0; Nd < 6; Nd++) Cd(dd, Jd, kd, pd, Nd)
    }

    function gd(dd, Jd, kd, Wd, Pd) {
      for (let Zd = 0; Zd < 6; Zd++)
        for (const gd of [0, 1]) {
          const [Cd, Kd, od] = [gd + 2, gd + 1, (gd + 3) % 4], ld = dd.length / 3;
          for (const [Jd, Nd] of [
              [gd, Kd],
              [Cd, Kd],
              [Cd, od],
              [gd, od]
            ])
            for (let gd = 0; gd < 3; gd++) {
              const Cd = pd[3 * (4 * Zd + Jd) + gd],
                Kd = pd[3 * (4 * Zd + Nd) + gd];
              dd.push((Cd + (Kd - Cd) * Pd) * Wd / 2 + kd[gd])
            }
          for (const dd of Nd) Jd.push(ld + dd)
        }
    }

    function Cd(dd, Jd, kd, Wd, Pd) {
      let [Zd, gd, Cd] = kd, [Kd, od, ld] = Wd;
      const Qd = dd.length / 3;
      for (let Nd = 4 * Pd; Nd < 4 * Pd + 4; Nd++) dd.push(pd[3 * Nd] * Kd / 2 + Zd, pd[3 * Nd + 1] * od / 2 + gd, pd[3 * Nd + 2] * ld / 2 + Cd);
      for (const pd of Nd) Jd.push(Qd + pd)
    }
  },
  37072: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return null === dd || null === Jd ? dd === Jd : dd[0] === Jd[0] && dd[1] === Jd[1] && dd[2] === Jd[2]
    }

    function Nd(dd) {
      return [dd[0] + .5, dd[1] + .5, dd[2] + .5]
    }
    kd.d(Jd, {
      e: () => Nd,
      h: () => pd
    })
  },
  37106: (dd, Jd, kd) => {
    function pd(dd) {
      return dd.includes("Leaf Bed")
    }

    function Nd(dd) {
      return / Bed(?: Head)?(?:\||$)/.test(dd) && !pd(dd)
    }

    function Wd(dd) {
      return dd.includes(" Strongbed")
    }

    function Pd(dd) {
      return pd(dd) || Nd(dd) || Wd(dd)
    }
    kd.d(Jd, {
      c: () => Pd,
      f: () => pd,
      j: () => Wd,
      n: () => Nd
    })
  },
  37101: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd
    });
    var pd = kd(37106),
      Nd = kd(9331);
    const Wd = [],
      Pd = [],
      Zd = [],
      gd = [];
    for (const Kd of Object.keys(Nd.n))(0, pd.f)(Kd) ? Wd.push(Kd) : (0, pd.n)(Kd) && Pd.push(Kd), (0, pd.j)(Kd) && Zd.push(Kd), (Kd.includes(" Bed Head") || Kd.includes(" Strongbed Head")) && gd.push(Kd);
    const Cd = {
      leafBeds: Wd,
      woolBeds: Pd,
      strongBeds: Zd,
      beds: [...Wd, ...Pd, ...Zd],
      bedHeads: gd,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);