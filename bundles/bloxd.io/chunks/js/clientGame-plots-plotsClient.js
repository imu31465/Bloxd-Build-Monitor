export const id = 22;
export const ids = [22];
export const modules = {
  36597: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => jk,
      f: () => ek,
      g: () => Zk,
      j: () => tk
    });
    var Xk = Ik(34164),
      Tk = Ik(36600),
      ik = Ik(36607),
      yk = Ik(8691),
      lk = Ik(1402),
      ak = Ik(58),
      qk = Ik(74),
      Lk = Ik(1096);

    function tk() {
      var kk;
      return (0, lk.f)(Tk.c, (0, Tk.m)()), (0, Lk.jsx)(Lk.Fragment, {
        children: null === (kk = (0, Tk.m)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Zk(kk) {
      var Fk;
      let {
        show: Ik
      } = kk;
      (0, lk.f)(Tk.c, (0, Tk.m)());
      const qk = null === (Fk = (0, Tk.m)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, ak.useEffect)((() => {
        var kk;
        Ik || (null === qk || void 0 === qk || null === (kk = qk.onClose) || void 0 === kk || kk.call(qk), (0, ik.r)())
      }), [Ik, qk]), (0, ak.useEffect)((() => Ik ? (0, yk.f)(ik.y, ik.i) : void 0), [Ik]), (0, Lk.jsx)(Xk.e, {
        showing: Ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === qk || void 0 === qk ? void 0 : qk.content
      })
    }

    function jk(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, Lk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Ik = "bottom"
      } = kk;
      const [Xk, Tk] = (0, ak.useState)(null);
      return (0, ak.useEffect)((() => {
        Tk(document.getElementById(`clientGameHud-${Ik}`))
      }), [Ik]), Xk ? (0, qk.createPortal)(Fk, Xk) : null
    }
  },
  34164: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(4525),
      Tk = Ik(4529);

    function ik(kk) {
      let {
        children: Fk,
        showing: Ik,
        globallyUniqueKey: ik,
        alwaysMountChildren: yk = !1,
        doGameplayStartStopOnShow: lk = !0,
        keepsMovement: ak = !1
      } = kk;
      return (0, Tk.e)(!0, Ik, ik, ak), (0, Xk.b)(lk, Ik), Ik || yk ? Fk : null
    }
  },
  36691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      g: () => yk,
      k: () => lk,
      m: () => ak
    });
    var Xk = Ik(58),
      Tk = Ik(3042);
    const ik = 8,
      yk = "InGameHeaderContainer",
      lk = "TopRightElements";

    function ak(kk) {
      const [Fk] = (0, Tk.c)(), [Ik, ak] = (0, Xk.useState)(!1);
      return (0, Xk.useLayoutEffect)((() => {
        if (!kk) return;
        const Fk = document.querySelector(`.${yk}`),
          Ik = document.querySelector(`.${lk}`),
          Xk = () => {
            const Xk = kk.getBoundingClientRect(),
              Tk = Fk ? Fk.getBoundingClientRect().right : 0,
              yk = Ik ? Ik.getBoundingClientRect().left : window.innerWidth,
              lk = Xk.left < Tk + ik,
              qk = Xk.right > yk - ik;
            ak(lk || qk)
          };
        Xk();
        const Tk = new ResizeObserver(Xk);
        return Tk.observe(kk), Fk && Tk.observe(Fk), Ik && Tk.observe(Ik), () => {
          Tk.disconnect()
        }
      }), [kk, Fk]), Ik
    }
  },
  8691: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      f: () => Tk
    });
    let Xk = null;
    const Tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Xk = Fk, () => {
          Xk === Fk && (Xk = null)
        }
      },
      ik = () => {
        var kk;
        return null !== (kk = Xk) && void 0 !== kk && kk.canCycle() ? Xk.cycle : null
      }
  },
  36607: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => xk,
      e: () => ik,
      i: () => wk,
      k: () => Hk,
      o: () => lk,
      q: () => Zk,
      r: () => Jk,
      v: () => tk,
      x: () => Pk,
      y: () => ek
    });
    var Xk = Ik(25),
      Tk = Ik(34);
    const ik = "clientGameInventoryButtonsChanged",
      yk = new Map;

    function lk() {
      return [...yk.values()].sort(((kk, Fk) => {
        var Ik, Xk;
        return (null !== (Ik = kk.order) && void 0 !== Ik ? Ik : 0) - (null !== (Xk = Fk.order) && void 0 !== Xk ? Xk : 0)
      }))
    }
    let ak = null;

    function qk(kk) {
      ak = kk
    }
    let Lk = !1;

    function tk(kk) {
      Lk = !0;
      try {
        kk.onClick()
      } finally {
        Lk = !1
      }
      kk.panel && "clientGame" === Xk.d.get("openInGameMenuName") && qk(kk.id)
    }

    function Zk() {
      return Lk
    }

    function jk() {
      return lk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = jk(),
        Ik = Fk.findIndex((kk => kk.id === ak));
      return !(Ik < 0 || Fk.length < 2) && (tk(Fk[(Ik + kk + Fk.length) % Fk.length]), !0)
    }

    function wk() {
      return null !== ak && jk().length > 1
    }

    function Hk() {
      qk(null)
    }

    function Jk() {
      "inventory" !== Xk.d.get("openInGameMenuName") && qk(null)
    }

    function xk() {
      const kk = ak;
      return qk(null), kk
    }

    function Pk(kk) {
      return yk.set(kk.id, kk), Tk.g.GL(ik, lk(), !0), () => {
        yk.get(kk.id) === kk && (yk.delete(kk.id), Tk.g.GL(ik, lk()))
      }
    }
  },
  36600: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      e: () => Hk,
      f: () => Jk,
      j: () => Zk,
      m: () => qk,
      p: () => wk,
      r: () => jk,
      v: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(36607);
    const lk = "clientGameUiChanged";
    let ak = null;

    function qk() {
      return ak
    }

    function Lk(kk, Fk) {
      const Ik = {
        content: kk,
        menu: Fk
      };
      return ak = Ik, Tk.g.GL(lk, ak, !0), () => {
        ak === Ik && (ak = null, ek = !1, Hk(), Tk.g.GL(lk, null))
      }
    }
    let tk = null;

    function Zk() {
      return tk
    }

    function jk(kk) {
      return tk = kk, () => {
        tk === kk && (tk = null)
      }
    }
    let ek = !1;

    function wk() {
      const kk = Xk.d.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, yk.q)() || (0, yk.k)(), (0, ik.m)(ik.c), Xk.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Hk() {
      xk(!1)
    }

    function Jk() {
      xk(ek)
    }

    function xk(kk) {
      "clientGame" === Xk.d.get("openInGameMenuName") && Xk.d.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, yk.k)(), ek = !1
    }
  },
  38509: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      f: () => lk,
      h: () => ak
    });
    const Xk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Tk = [0, 1, 2, 0, 2, 3],
      ik = [4, 5];

    function yk(kk, Fk, Ik, Xk, Tk) {
      for (let yk = 0; yk < 6; yk++) ik.includes(yk) === Tk && qk(kk, Fk, Ik, Xk, yk)
    }

    function lk(kk, Fk, Ik, Xk) {
      for (let Tk = 0; Tk < 6; Tk++) qk(kk, Fk, Ik, Xk, Tk)
    }

    function ak(kk, Fk, Ik, ik, yk) {
      for (let lk = 0; lk < 6; lk++)
        for (const ak of [0, 1]) {
          const [qk, Lk, tk] = [ak + 2, ak + 1, (ak + 3) % 4], Zk = kk.length / 3;
          for (const [Fk, Tk] of [
              [ak, Lk],
              [qk, Lk],
              [qk, tk],
              [ak, tk]
            ])
            for (let ak = 0; ak < 3; ak++) {
              const qk = Xk[3 * (4 * lk + Fk) + ak],
                Lk = Xk[3 * (4 * lk + Tk) + ak];
              kk.push((qk + (Lk - qk) * yk) * ik / 2 + Ik[ak])
            }
          for (const kk of Tk) Fk.push(Zk + kk)
        }
    }

    function qk(kk, Fk, Ik, ik, yk) {
      let [lk, ak, qk] = Ik, [Lk, tk, Zk] = ik;
      const jk = kk.length / 3;
      for (let Tk = 4 * yk; Tk < 4 * yk + 4; Tk++) kk.push(Xk[3 * Tk] * Lk / 2 + lk, Xk[3 * Tk + 1] * tk / 2 + ak, Xk[3 * Tk + 2] * Zk / 2 + qk);
      for (const Xk of Tk) Fk.push(jk + Xk)
    }
  },
  36936: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return null === kk || null === Fk ? kk === Fk : kk[0] === Fk[0] && kk[1] === Fk[1] && kk[2] === Fk[2]
    }

    function Tk(kk) {
      return [kk[0] + .5, kk[1] + .5, kk[2] + .5]
    }
    Ik.d(Fk, {
      c: () => Tk,
      f: () => Xk
    })
  },
  36976: (kk, Fk, Ik) => {
    function Xk(kk) {
      return kk.includes("Leaf Bed")
    }

    function Tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Xk(kk)
    }

    function ik(kk) {
      return kk.includes(" Strongbed")
    }

    function yk(kk) {
      return Xk(kk) || Tk(kk) || ik(kk)
    }
    Ik.d(Fk, {
      e: () => yk,
      h: () => Xk,
      i: () => ik,
      l: () => Tk
    })
  },
  36969: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk
    });
    var Xk = Ik(36976),
      Tk = Ik(9183);
    const ik = [],
      yk = [],
      lk = [],
      ak = [];
    for (const Lk of Object.keys(Tk.n))(0, Xk.h)(Lk) ? ik.push(Lk) : (0, Xk.l)(Lk) && yk.push(Lk), (0, Xk.i)(Lk) && lk.push(Lk), (Lk.includes(" Bed Head") || Lk.includes(" Strongbed Head")) && ak.push(Lk);
    const qk = {
      leafBeds: ik,
      woolBeds: yk,
      strongBeds: lk,
      beds: [...ik, ...yk, ...lk],
      bedHeads: ak,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);