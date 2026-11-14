export const id = 143;
export const ids = [143];
export const modules = {
  35253: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => ec,
      i: () => tB,
      m: () => sc,
      p: () => Tc,
      q: () => Sc,
      t: () => Oc,
      w: () => zB,
      x: () => mB,
      y: () => yB
    });
    var Vc = nc(27),
      Ic = nc(35);
    const rB = "clientGameInventoryButtonsChanged",
      uc = new Map;

    function sc() {
      return [...uc.values()].sort(((cB, Bc) => {
        var nc, Vc;
        return (null !== (nc = cB.order) && void 0 !== nc ? nc : 0) - (null !== (Vc = Bc.order) && void 0 !== Vc ? Vc : 0)
      }))
    }
    let Mc = null;

    function Pc(cB) {
      Mc = cB
    }
    let qB = !1;

    function Oc(cB) {
      qB = !0;
      try {
        cB.onClick()
      } finally {
        qB = !1
      }
      cB.panel && "clientGame" === Vc.d.get("openInGameMenuName") && Pc(cB.id)
    }

    function Tc() {
      return qB
    }

    function fc() {
      return sc().filter((cB => cB.panel && !cB.disabled))
    }

    function mB(cB) {
      const Bc = fc(),
        nc = Bc.findIndex((cB => cB.id === Mc));
      return !(nc < 0 || Bc.length < 2) && (Oc(Bc[(nc + cB + Bc.length) % Bc.length]), !0)
    }

    function ec() {
      return null !== Mc && fc().length > 1
    }

    function tB() {
      Pc(null)
    }

    function Sc() {
      "inventory" !== Vc.d.get("openInGameMenuName") && Pc(null)
    }

    function yB() {
      const cB = Mc;
      return Pc(null), cB
    }

    function zB(cB) {
      return uc.set(cB.id, cB), Ic.i.Vu(rB, sc(), !0), () => {
        uc.get(cB.id) === cB && (uc.delete(cB.id), Ic.i.Vu(rB, sc()))
      }
    }
  },
  35247: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => tB,
      j: () => Sc,
      m: () => Tc,
      o: () => Pc,
      s: () => ec,
      w: () => fc,
      x: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(35253);
    const sc = "clientGameUiChanged";
    let Mc = null;

    function Pc() {
      return Mc
    }

    function qB(cB, Bc) {
      const nc = {
        content: cB,
        menu: Bc
      };
      return Mc = nc, Ic.i.Vu(sc, Mc, !0), () => {
        Mc === nc && (Mc = null, mB = !1, tB(), Ic.i.Vu(sc, null))
      }
    }
    let Oc = null;

    function Tc() {
      return Oc
    }

    function fc(cB) {
      return Oc = cB, () => {
        Oc === cB && (Oc = null)
      }
    }
    let mB = !1;

    function ec() {
      const cB = Vc.d.get("openInGameMenuName");
      "clientGame" !== cB && (mB = "inventory" === cB), (0, uc.p)() || (0, uc.i)(), (0, rB.o)("InGameMenu"), Vc.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tB() {
      yB(!1)
    }

    function Sc() {
      yB(mB)
    }

    function yB(cB) {
      "clientGame" === Vc.d.get("openInGameMenuName") && Vc.d.set({
        openInGameMenuName: cB ? "inventory" : null
      }), cB || (0, uc.i)(), mB = !1
    }
  },
  7656: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(7665),
      Ic = nc(569),
      rB = nc(145);

    function uc(cB) {
      var Bc, nc;
      if ((0, Ic.E)(cB)) return !0;
      const uc = null !== (Bc = null === (nc = rB.m[rB.r]) || void 0 === nc ? void 0 : nc.adConfig.showRewardedAds) && void 0 !== Bc && Bc;
      for (const Ic in cB) {
        const Bc = cB[Ic];
        if (null !== Bc && void 0 !== Bc && Bc.items)
          for (const cB in Bc.items)
            if ((0, Vc.f)(Bc.items[cB], uc)) return !1
      }
      return !0
    }
  },
  40556: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      getClientGameMapKey: () => Vc.m,
      shopIsEmpty: () => Ic.e
    });
    var Vc = nc(35247),
      Ic = nc(7656)
  },
  7665: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return !cB.hidden && (Bc || !cB.isRewardedAd)
    }

    function Ic(cB) {
      return "object" === typeof cB ? cB.option : cB
    }

    function rB(cB, Bc) {
      var nc;
      if ("dropdown" === (null === (nc = cB.userInput) || void 0 === nc ? void 0 : nc.type) && "object" === typeof cB.userInput.dropdownOptions[0]) {
        for (const nc of cB.userInput.dropdownOptions)
          if (Ic(nc) === Bc) return "object" === typeof nc ? nc.cost : cB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", cB, "input:", Bc)
      }
      return cB.cost
    }

    function uc(cB, Bc, nc) {
      var Vc;
      const Ic = null !== (Vc = nc.excludedPlayers) && void 0 !== Vc ? Vc : [Bc];
      return cB.filter((cB => !Ic.includes(cB)))
    }
    nc.d(Bc, {
      c: () => rB,
      d: () => Ic,
      e: () => uc,
      f: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);