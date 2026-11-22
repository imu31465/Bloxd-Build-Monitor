export const id = 22;
export const ids = [22];
export const modules = {
  36140: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => nk,
      h: () => Uk,
      l: () => xk,
      p: () => Kk
    });
    var Dk = ik(33763),
      fk = ik(36143),
      Sk = ik(36151),
      bk = ik(8560),
      rk = ik(1406),
      Pk = ik(60),
      mk = ik(75),
      Mk = ik(1066);

    function Kk() {
      var kk;
      return (0, rk.e)(fk.c, (0, fk.n)()), (0, Mk.jsx)(Mk.Fragment, {
        children: null === (kk = (0, fk.n)()) || void 0 === kk ? void 0 : kk.content
      })
    }

    function xk(kk) {
      var ek;
      let {
        show: ik
      } = kk;
      (0, rk.e)(fk.c, (0, fk.n)());
      const mk = null === (ek = (0, fk.n)()) || void 0 === ek ? void 0 : ek.menu;
      return (0, Pk.useEffect)((() => {
        var kk;
        ik || (null === mk || void 0 === mk || null === (kk = mk.onClose) || void 0 === kk || kk.call(mk), (0, Sk.t)())
      }), [ik, mk]), (0, Pk.useEffect)((() => ik ? (0, bk.f)(Sk.w, Sk.g) : void 0), [ik]), (0, Mk.jsx)(Dk.d, {
        showing: ik,
        globallyUniqueKey: "clientGameMenu",
        children: null === mk || void 0 === mk ? void 0 : mk.content
      })
    }

    function nk(kk) {
      let {
        placement: ek = "bottom"
      } = kk;
      return (0, Mk.jsx)("div", {
        id: `clientGameHud-${ek}`,
        style: {
          display: "contents"
        }
      })
    }

    function Uk(kk) {
      let {
        children: ek,
        placement: ik = "bottom"
      } = kk;
      const [Dk, fk] = (0, Pk.useState)(null);
      return (0, Pk.useEffect)((() => {
        fk(document.getElementById(`clientGameHud-${ik}`))
      }), [ik]), Dk ? (0, mk.createPortal)(ek, Dk) : null
    }
  },
  33763: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(4479),
      fk = ik(4482);

    function Sk(kk) {
      let {
        children: ek,
        showing: ik,
        globallyUniqueKey: Sk,
        alwaysMountChildren: bk = !1,
        doGameplayStartStopOnShow: rk = !0,
        keepsMovement: Pk = !1
      } = kk;
      return (0, fk.c)(!0, ik, Sk, Pk), (0, Dk.c)(rk, ik), ik || bk ? ek : null
    }
  },
  36249: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk,
      i: () => rk,
      m: () => Pk
    });
    var Dk = ik(60),
      fk = ik(3079);
    const Sk = 8,
      bk = "InGameHeaderContainer",
      rk = "TopRightElements";

    function Pk(kk) {
      const [ek] = (0, fk.c)(), [ik, Pk] = (0, Dk.useState)(!1);
      return (0, Dk.useLayoutEffect)((() => {
        if (!kk) return;
        const ek = document.querySelector(`.${bk}`),
          ik = document.querySelector(`.${rk}`),
          Dk = () => {
            const Dk = kk.getBoundingClientRect(),
              fk = ek ? ek.getBoundingClientRect().right : 0,
              bk = ik ? ik.getBoundingClientRect().left : window.innerWidth,
              rk = Dk.left < fk + Sk,
              mk = Dk.right > bk - Sk;
            Pk(rk || mk)
          };
        Dk();
        const fk = new ResizeObserver(Dk);
        return fk.observe(kk), ek && fk.observe(ek), ik && fk.observe(ik), () => {
          fk.disconnect()
        }
      }), [kk, ek]), ik
    }
  },
  8560: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => fk
    });
    let Dk = null;
    const fk = function(kk) {
        const ek = {
          cycle: kk,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Dk = ek, () => {
          Dk === ek && (Dk = null)
        }
      },
      Sk = () => {
        var kk;
        return null !== (kk = Dk) && void 0 !== kk && kk.canCycle() ? Dk.cycle : null
      }
  },
  36151: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      g: () => Hk,
      i: () => wk,
      m: () => rk,
      p: () => xk,
      t: () => lk,
      u: () => Kk,
      v: () => yk,
      w: () => Uk,
      x: () => pk
    });
    var Dk = ik(22),
      fk = ik(26);
    const Sk = "clientGameInventoryButtonsChanged",
      bk = new Map;

    function rk() {
      return [...bk.values()].sort(((kk, ek) => {
        var ik, Dk;
        return (null !== (ik = kk.order) && void 0 !== ik ? ik : 0) - (null !== (Dk = ek.order) && void 0 !== Dk ? Dk : 0)
      }))
    }
    let Pk = null;

    function mk(kk) {
      Pk = kk
    }
    let Mk = !1;

    function Kk(kk) {
      Mk = !0;
      try {
        kk.onClick()
      } finally {
        Mk = !1
      }
      kk.panel && "clientGame" === Dk.b.get("openInGameMenuName") && mk(kk.id)
    }

    function xk() {
      return Mk
    }

    function nk() {
      return rk().filter((kk => kk.panel && !kk.disabled))
    }

    function Uk(kk) {
      const ek = nk(),
        ik = ek.findIndex((kk => kk.id === Pk));
      return !(ik < 0 || ek.length < 2) && (Kk(ek[(ik + kk + ek.length) % ek.length]), !0)
    }

    function Hk() {
      return null !== Pk && nk().length > 1
    }

    function wk() {
      mk(null)
    }

    function lk() {
      "inventory" !== Dk.b.get("openInGameMenuName") && mk(null)
    }

    function pk() {
      const kk = Pk;
      return mk(null), kk
    }

    function yk(kk) {
      return bk.set(kk.id, kk), fk.j.tm(Sk, rk(), !0), () => {
        bk.get(kk.id) === kk && (bk.delete(kk.id), fk.j.tm(Sk, rk()))
      }
    }
  },
  36143: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      d: () => wk,
      h: () => lk,
      j: () => xk,
      n: () => mk,
      r: () => Hk,
      v: () => nk,
      z: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(36151);
    const rk = "clientGameUiChanged";
    let Pk = null;

    function mk() {
      return Pk
    }

    function Mk(kk, ek) {
      const ik = {
        content: kk,
        menu: ek
      };
      return Pk = ik, fk.j.tm(rk, Pk, !0), () => {
        Pk === ik && (Pk = null, Uk = !1, wk(), fk.j.tm(rk, null))
      }
    }
    let Kk = null;

    function xk() {
      return Kk
    }

    function nk(kk) {
      return Kk = kk, () => {
        Kk === kk && (Kk = null)
      }
    }
    let Uk = !1;

    function Hk() {
      const kk = Dk.b.get("openInGameMenuName");
      "clientGame" !== kk && (Uk = "inventory" === kk), (0, bk.p)() || (0, bk.i)(), (0, Sk.s)(Sk.c), Dk.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wk() {
      pk(!1)
    }

    function lk() {
      pk(Uk)
    }

    function pk(kk) {
      "clientGame" === Dk.b.get("openInGameMenuName") && Dk.b.set({
        openInGameMenuName: kk ? "inventory" : null
      }), kk || (0, bk.i)(), Uk = !1
    }
  },
  38092: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      d: () => rk,
      e: () => Pk
    });
    const Dk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      fk = [0, 1, 2, 0, 2, 3],
      Sk = [4, 5];

    function bk(kk, ek, ik, Dk, fk) {
      for (let bk = 0; bk < 6; bk++) Sk.includes(bk) === fk && mk(kk, ek, ik, Dk, bk)
    }

    function rk(kk, ek, ik, Dk) {
      for (let fk = 0; fk < 6; fk++) mk(kk, ek, ik, Dk, fk)
    }

    function Pk(kk, ek, ik, Sk, bk) {
      for (let rk = 0; rk < 6; rk++)
        for (const Pk of [0, 1]) {
          const [mk, Mk, Kk] = [Pk + 2, Pk + 1, (Pk + 3) % 4], xk = kk.length / 3;
          for (const [ek, fk] of [
              [Pk, Mk],
              [mk, Mk],
              [mk, Kk],
              [Pk, Kk]
            ])
            for (let Pk = 0; Pk < 3; Pk++) {
              const mk = Dk[3 * (4 * rk + ek) + Pk],
                Mk = Dk[3 * (4 * rk + fk) + Pk];
              kk.push((mk + (Mk - mk) * bk) * Sk / 2 + ik[Pk])
            }
          for (const kk of fk) ek.push(xk + kk)
        }
    }

    function mk(kk, ek, ik, Sk, bk) {
      let [rk, Pk, mk] = ik, [Mk, Kk, xk] = Sk;
      const nk = kk.length / 3;
      for (let fk = 4 * bk; fk < 4 * bk + 4; fk++) kk.push(Dk[3 * fk] * Mk / 2 + rk, Dk[3 * fk + 1] * Kk / 2 + Pk, Dk[3 * fk + 2] * xk / 2 + mk);
      for (const Dk of fk) ek.push(nk + Dk)
    }
  },
  36502: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return null === kk || null === ek ? kk === ek : kk[0] === ek[0] && kk[1] === ek[1] && kk[2] === ek[2]
    }

    function fk(kk) {
      return [kk[0] + .5, kk[1] + .5, kk[2] + .5]
    }
    ik.d(ek, {
      c: () => fk,
      f: () => Dk
    })
  },
  36530: (kk, ek, ik) => {
    function Dk(kk) {
      return kk.includes("Leaf Bed")
    }

    function fk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Dk(kk)
    }

    function Sk(kk) {
      return kk.includes(" Strongbed")
    }

    function bk(kk) {
      return Dk(kk) || fk(kk) || Sk(kk)
    }
    ik.d(ek, {
      d: () => bk,
      h: () => Dk,
      i: () => Sk,
      l: () => fk
    })
  },
  36528: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(36530),
      fk = ik(9020);
    const Sk = [],
      bk = [],
      rk = [],
      Pk = [];
    for (const Mk of Object.keys(fk.j))(0, Dk.h)(Mk) ? Sk.push(Mk) : (0, Dk.l)(Mk) && bk.push(Mk), (0, Dk.i)(Mk) && rk.push(Mk), (Mk.includes(" Bed Head") || Mk.includes(" Strongbed Head")) && Pk.push(Mk);
    const mk = {
      leafBeds: Sk,
      woolBeds: bk,
      strongBeds: rk,
      beds: [...Sk, ...bk, ...rk],
      bedHeads: Pk,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);