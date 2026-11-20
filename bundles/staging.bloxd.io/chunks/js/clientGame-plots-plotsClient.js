export const id = 22;
export const ids = [22];
export const modules = {
  36329: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => ek,
      j: () => Jk,
      n: () => Vk
    });
    var Rk = Bk(9004),
      tk = Bk(36332),
      ak = Bk(36340),
      Xk = Bk(8372),
      bk = Bk(1387),
      wk = Bk(61),
      dk = Bk(67),
      sk = Bk(1069);

    function Vk() {
      var kk;
      return (0, bk.g)(tk.c, (0, tk.o)()), (0, sk.jsx)(sk.Fragment, {
        children: null === (kk = (0, tk.o)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function Jk(kk) {
      var Fk;
      let {
        show: Bk
      } = kk;
      (0, bk.g)(tk.c, (0, tk.o)());
      const dk = null === (Fk = (0, tk.o)()) || void 0 === Fk ? void 0 : Fk.menu;
      return (0, wk.useEffect)((() => {
        var kk;
        Bk || (null === dk || void 0 === dk || null === (kk = dk.onClose) || void 0 === kk || kk.call(dk), (0, ak.u)())
      }), [Bk, dk]), (0, wk.useEffect)((() => Bk ? (0, Xk.h)(ak.C, ak.h) : void 0), [Bk]), (0, sk.jsx)(Rk.d, {
        showing: Bk,
        globallyUniqueKey: "clientGameMenu",
        children: null === dk || void 0 === dk ? void 0 : dk.content
      })
    }

    function Ak(kk) {
      let {
        placement: Fk = "bottom"
      } = kk;
      return (0, sk.jsx)("div", {
        id: `clientGameHud-${Fk}`,
        style: {
          display: "contents"
        }
      })
    }

    function ek(kk) {
      let {
        children: Fk,
        placement: Bk = "bottom"
      } = kk;
      const [Rk, tk] = (0, wk.useState)(null);
      return (0, wk.useEffect)((() => {
        tk(document.getElementById(`clientGameHud-${Bk}`))
      }), [Bk]), Rk ? (0, dk.createPortal)(Fk, Rk) : null
    }
  },
  9004: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(4277),
      tk = Bk(4283);

    function ak(kk) {
      let {
        children: Fk,
        showing: Bk,
        globallyUniqueKey: ak,
        alwaysMountChildren: Xk = !1,
        doGameplayStartStopOnShow: bk = !0,
        keepsMovement: wk = !1
      } = kk;
      return (0, tk.d)(!0, Bk, ak, wk), (0, Rk.e)(bk, Bk), Bk || Xk ? Fk : null
    }
  },
  36423: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      i: () => Xk,
      m: () => bk,
      q: () => wk
    });
    var Rk = Bk(61),
      tk = Bk(1090);
    const ak = 8,
      Xk = "InGameHeaderContainer",
      bk = "TopRightElements";

    function wk(kk) {
      const [Fk] = (0, tk.c)(), [Bk, wk] = (0, Rk.useState)(!1);
      return (0, Rk.useLayoutEffect)((() => {
        if (!kk) return;
        const Fk = document.querySelector(`.${Xk}`),
          Bk = document.querySelector(`.${bk}`),
          Rk = () => {
            const Rk = kk.getBoundingClientRect(),
              tk = Fk ? Fk.getBoundingClientRect().right : 0,
              Xk = Bk ? Bk.getBoundingClientRect().left : window.innerWidth,
              bk = Rk.left < tk + ak,
              dk = Rk.right > Xk - ak;
            wk(bk || dk)
          };
        Rk();
        const tk = new ResizeObserver(Rk);
        return tk.observe(kk), Fk && tk.observe(Fk), Bk && tk.observe(Bk), () => {
          tk.disconnect()
        }
      }), [kk, Fk]), Bk
    }
  },
  8372: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak,
      h: () => tk
    });
    let Rk = null;
    const tk = function(kk) {
        const Fk = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Rk = Fk, () => {
          Rk === Fk && (Rk = null)
        }
      },
      ak = () => {
        var kk;
        return null !== (kk = Rk) && void 0 !== kk && kk.canCycle() ? Rk.cycle : null
      }
  },
  36340: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      C: () => ek,
      G: () => Wk,
      d: () => ak,
      h: () => yk,
      l: () => fk,
      p: () => bk,
      s: () => Jk,
      u: () => mk,
      w: () => Vk,
      z: () => vk
    });
    var Rk = Bk(22),
      tk = Bk(29);
    const ak = "clientGameInventoryButtonsChanged",
      Xk = new Map;

    function bk() {
      return [...Xk.values()].sort(((kk, Fk) => {
        var Bk, Rk;
        return (null !== (Bk = kk.order) && void 0 !== Bk ? Bk : 0) - (null !== (Rk = Fk.order) && void 0 !== Rk ? Rk : 0)
      }))
    }
    let wk = null;

    function dk(kk) {
      wk = kk
    }
    let sk = !1;

    function Vk(kk) {
      sk = !0;
      try {
        kk.onClick()
      } finally {
        sk = !1
      }
      kk.panel && "clientGame" === Rk.c.get("openInGameMenuName") && dk(kk.id)
    }

    function Jk() {
      return sk
    }

    function Ak() {
      return bk().filter((kk => kk.panel && !kk.disabled))
    }

    function ek(kk) {
      const Fk = Ak(),
        Bk = Fk.findIndex((kk => kk.id === wk));
      return !(Bk < 0 || Fk.length < 2) && (Vk(Fk[(Bk + kk + Fk.length) % Fk.length]), !0)
    }

    function yk() {
      return null !== wk && Ak().length > 1
    }

    function fk() {
      dk(null)
    }

    function mk() {
      "inventory" !== Rk.c.get("openInGameMenuName") && dk(null)
    }

    function Wk() {
      const kk = wk;
      return dk(null), kk
    }

    function vk(kk) {
      return Xk.set(kk.id, kk), tk.o.Hf(ak, bk(), !0), () => {
        Xk.get(kk.id) === kk && (Xk.delete(kk.id), tk.o.Hf(ak, bk()))
      }
    }
  },
  36332: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      f: () => fk,
      i: () => mk,
      l: () => Jk,
      o: () => dk,
      q: () => yk,
      s: () => Ak,
      w: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(36340);
    const bk = "clientGameUiChanged";
    let wk = null;

    function dk() {
      return wk
    }

    function sk(kk, Fk) {
      const Bk = {
        content: kk,
        menu: Fk
      };
      return wk = Bk, tk.o.Hf(bk, wk, !0), () => {
        wk === Bk && (wk = null, ek = !1, fk(), tk.o.Hf(bk, null))
      }
    }
    let Vk = null;

    function Jk() {
      return Vk
    }

    function Ak(kk) {
      return Vk = kk, () => {
        Vk === kk && (Vk = null)
      }
    }
    let ek = !1;

    function yk() {
      const kk = Rk.c.get("openInGameMenuName");
      "clientGame" !== kk && (ek = "inventory" === kk), (0, Xk.s)() || (0, Xk.l)(), (0, ak.m)(ak.e), Rk.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fk() {
      Wk(!1)
    }

    function mk() {
      Wk(ek)
    }

    function Wk(kk) {
      "clientGame" === Rk.c.get("openInGameMenuName") && Rk.c.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, Xk.l)(), ek = !1
    }
  },
  38157: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      g: () => bk,
      k: () => wk
    });
    const Rk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      tk = [0, 1, 2, 0, 2, 3],
      ak = [4, 5];

    function Xk(kk, Fk, Bk, Rk, tk) {
      for (let Xk = 0; Xk < 6; Xk++) ak.includes(Xk) === tk && dk(kk, Fk, Bk, Rk, Xk)
    }

    function bk(kk, Fk, Bk, Rk) {
      for (let tk = 0; tk < 6; tk++) dk(kk, Fk, Bk, Rk, tk)
    }

    function wk(kk, Fk, Bk, ak, Xk) {
      for (let bk = 0; bk < 6; bk++)
        for (const wk of [0, 1]) {
          const [dk, sk, Vk] = [wk + 2, wk + 1, (wk + 3) % 4], Jk = kk.length / 3;
          for (const [Fk, tk] of [
              [wk, sk],
              [dk, sk],
              [dk, Vk],
              [wk, Vk]
            ])
            for (let wk = 0; wk < 3; wk++) {
              const dk = Rk[3 * (4 * bk + Fk) + wk],
                sk = Rk[3 * (4 * bk + tk) + wk];
              kk.push((dk + (sk - dk) * Xk) * ak / 2 + Bk[wk])
            }
          for (const kk of tk) Fk.push(Jk + kk)
        }
    }

    function dk(kk, Fk, Bk, ak, Xk) {
      let [bk, wk, dk] = Bk, [sk, Vk, Jk] = ak;
      const Ak = kk.length / 3;
      for (let tk = 4 * Xk; tk < 4 * Xk + 4; tk++) kk.push(Rk[3 * tk] * sk / 2 + bk, Rk[3 * tk + 1] * Vk / 2 + wk, Rk[3 * tk + 2] * Jk / 2 + dk);
      for (const Rk of tk) Fk.push(Ak + Rk)
    }
  },
  36568: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return null === kk || null === Fk ? kk === Fk : kk[0] === Fk[0] && kk[1] === Fk[1] && kk[2] === Fk[2]
    }

    function tk(kk) {
      return [kk[0] + .5, kk[1] + .5, kk[2] + .5]
    }
    Bk.d(Fk, {
      b: () => tk,
      c: () => Rk
    })
  },
  36614: (kk, Fk, Bk) => {
    function Rk(kk) {
      return kk.includes("Leaf Bed")
    }

    function tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Rk(kk)
    }

    function ak(kk) {
      return kk.includes(" Strongbed")
    }

    function Xk(kk) {
      return Rk(kk) || tk(kk) || ak(kk)
    }
    Bk.d(Fk, {
      b: () => Xk,
      f: () => Rk,
      i: () => ak,
      l: () => tk
    })
  },
  36605: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(36614),
      tk = Bk(9095);
    const ak = [],
      Xk = [],
      bk = [],
      wk = [];
    for (const sk of Object.keys(tk.q))(0, Rk.f)(sk) ? ak.push(sk) : (0, Rk.l)(sk) && Xk.push(sk), (0, Rk.i)(sk) && bk.push(sk), (sk.includes(" Bed Head") || sk.includes(" Strongbed Head")) && wk.push(sk);
    const dk = {
      leafBeds: ak,
      woolBeds: Xk,
      strongBeds: bk,
      beds: [...ak, ...Xk, ...bk],
      bedHeads: wk,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);