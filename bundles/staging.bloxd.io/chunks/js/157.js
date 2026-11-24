export const id = 157;
export const ids = [157];
export const modules = {
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
  8743: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(8752),
      Tk = Ik(628),
      ik = Ik(129);

    function yk(kk) {
      var Fk, Ik;
      if ((0, Tk.Q)(kk)) return !0;
      const yk = null !== (Fk = null === (Ik = ik.r[ik.v]) || void 0 === Ik ? void 0 : Ik.adConfig.showRewardedAds) && void 0 !== Fk && Fk;
      for (const Tk in kk) {
        const Fk = kk[Tk];
        if (null !== Fk && void 0 !== Fk && Fk.items)
          for (const kk in Fk.items)
            if ((0, Xk.j)(Fk.items[kk], yk)) return !1
      }
      return !0
    }
  },
  60599: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      getClientGameMapKey: () => Xk.j,
      shopIsEmpty: () => Tk.d
    });
    var Xk = Ik(36600),
      Tk = Ik(8743)
  },
  8752: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return !kk.hidden && (Fk || !kk.isRewardedAd)
    }

    function Tk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function ik(kk, Fk) {
      var Ik;
      if ("dropdown" === (null === (Ik = kk.userInput) || void 0 === Ik ? void 0 : Ik.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const Ik of kk.userInput.dropdownOptions)
          if (Tk(Ik) === Fk) return "object" === typeof Ik ? Ik.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", Fk)
      }
      return kk.cost
    }

    function yk(kk, Fk, Ik) {
      var Xk;
      const Tk = null !== (Xk = Ik.excludedPlayers) && void 0 !== Xk ? Xk : [Fk];
      return kk.filter((kk => !Tk.includes(kk)))
    }
    Ik.d(Fk, {
      b: () => ik,
      e: () => Tk,
      f: () => yk,
      j: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);