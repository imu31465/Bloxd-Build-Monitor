export const id = 151;
export const ids = [151];
export const modules = {
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
  8437: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(8445),
      tk = Bk(606),
      ak = Bk(132);

    function Xk(kk) {
      var Fk, Bk;
      if ((0, tk.F)(kk)) return !0;
      const Xk = null !== (Fk = null === (Bk = ak.l[ak.q]) || void 0 === Bk ? void 0 : Bk.adConfig.showRewardedAds) && void 0 !== Fk && Fk;
      for (const tk in kk) {
        const Fk = kk[tk];
        if (null !== Fk && void 0 !== Fk && Fk.items)
          for (const kk in Fk.items)
            if ((0, Rk.k)(Fk.items[kk], Xk)) return !1
      }
      return !0
    }
  },
  42018: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      getClientGameMapKey: () => Rk.l,
      shopIsEmpty: () => tk.b
    });
    var Rk = Bk(36332),
      tk = Bk(8437)
  },
  8445: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return !kk.hidden && (Fk || !kk.isRewardedAd)
    }

    function tk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function ak(kk, Fk) {
      var Bk;
      if ("dropdown" === (null === (Bk = kk.userInput) || void 0 === Bk ? void 0 : Bk.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const Bk of kk.userInput.dropdownOptions)
          if (tk(Bk) === Fk) return "object" === typeof Bk ? Bk.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", Fk)
      }
      return kk.cost
    }

    function Xk(kk, Fk, Bk) {
      var Rk;
      const tk = null !== (Rk = Bk.excludedPlayers) && void 0 !== Rk ? Rk : [Fk];
      return kk.filter((kk => !tk.includes(kk)))
    }
    Bk.d(Fk, {
      c: () => ak,
      g: () => tk,
      i: () => Xk,
      k: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);