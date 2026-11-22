export const id = 157;
export const ids = [157];
export const modules = {
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
  8607: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    var Dk = ik(8611),
      fk = ik(594),
      Sk = ik(131);

    function bk(kk) {
      var ek, ik;
      if ((0, fk.F)(kk)) return !0;
      const bk = null !== (ek = null === (ik = Sk.p[Sk.t]) || void 0 === ik ? void 0 : ik.adConfig.showRewardedAds) && void 0 !== ek && ek;
      for (const fk in kk) {
        const ek = kk[fk];
        if (null !== ek && void 0 !== ek && ek.items)
          for (const kk in ek.items)
            if ((0, Dk.m)(ek.items[kk], bk)) return !1
      }
      return !0
    }
  },
  59985: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      getClientGameMapKey: () => Dk.j,
      shopIsEmpty: () => fk.c
    });
    var Dk = ik(36143),
      fk = ik(8607)
  },
  8611: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return !kk.hidden && (ek || !kk.isRewardedAd)
    }

    function fk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function Sk(kk, ek) {
      var ik;
      if ("dropdown" === (null === (ik = kk.userInput) || void 0 === ik ? void 0 : ik.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const ik of kk.userInput.dropdownOptions)
          if (fk(ik) === ek) return "object" === typeof ik ? ik.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", ek)
      }
      return kk.cost
    }

    function bk(kk, ek, ik) {
      var Dk;
      const fk = null !== (Dk = ik.excludedPlayers) && void 0 !== Dk ? Dk : [ek];
      return kk.filter((kk => !fk.includes(kk)))
    }
    ik.d(ek, {
      c: () => Sk,
      e: () => fk,
      i: () => bk,
      m: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);