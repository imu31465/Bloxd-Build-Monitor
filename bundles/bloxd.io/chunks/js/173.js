export const id = 173;
export const ids = [173];
export const modules = {
  37427: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => Te,
      f: () => pe,
      h: () => Ue,
      j: () => ke,
      l: () => Xe,
      n: () => Re,
      p: () => Be,
      r: () => fe,
      u: () => ze
    });
    var ye = He(18),
      be = He(27);
    const Me = "clientGameInventoryButtonsChanged",
      Ke = new Map;

    function Ue() {
      return [...Ke.values()].sort(((ee, ie) => {
        var He, ye;
        return (null !== (He = ee.order) && void 0 !== He ? He : 0) - (null !== (ye = ie.order) && void 0 !== ye ? ye : 0)
      }))
    }
    let Fe = null;

    function Je(ee) {
      Fe = ee
    }
    let oe = !1;

    function Re(ee) {
      oe = !0;
      try {
        ee.onClick()
      } finally {
        oe = !1
      }
      ee.panel && "clientGame" === ye.e.get("openInGameMenuName") && Je(ee.id)
    }

    function ke() {
      return oe
    }

    function qe() {
      return Ue().filter((ee => ee.panel && !ee.disabled))
    }

    function fe(ee) {
      const ie = qe(),
        He = ie.findIndex((ee => ee.id === Fe));
      return !(He < 0 || ie.length < 2) && (Re(ie[(He + ee + ie.length) % ie.length]), !0)
    }

    function Te() {
      return null !== Fe && qe().length > 1
    }

    function pe() {
      Je(null)
    }

    function Xe() {
      "inventory" !== ye.e.get("openInGameMenuName") && Je(null)
    }

    function ze() {
      const ee = Fe;
      return Je(null), ee
    }

    function Be(ee) {
      return Ke.set(ee.id, ee), be.h.yR(Me, Ue(), !0), () => {
        Ke.get(ee.id) === ee && (Ke.delete(ee.id), be.h.yR(Me, Ue()))
      }
    }
  },
  37424: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => ze,
      h: () => pe,
      l: () => Xe,
      m: () => ke,
      p: () => Je,
      s: () => Te,
      v: () => qe,
      z: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(37427);
    const Ue = "clientGameUiChanged";
    let Fe = null;

    function Je() {
      return Fe
    }

    function oe(ee, ie) {
      const He = {
        content: ee,
        menu: ie
      };
      return Fe = He, be.h.yR(Ue, Fe, !0), () => {
        Fe === He && (Fe = null, fe = !1, pe(), be.h.yR(Ue, null))
      }
    }
    let Re = null;

    function ke() {
      return Re
    }

    function qe(ee) {
      return Re = ee, () => {
        Re === ee && (Re = null)
      }
    }
    let fe = !1;

    function Te() {
      const ee = ye.e.get("openInGameMenuName");
      "clientGame" !== ee && (fe = "inventory" === ee), (0, Ke.j)() || (0, Ke.f)(), (0, Me.w)(Me.c), ye.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pe() {
      Be(!1)
    }

    function Xe() {
      Be(fe)
    }

    function ze() {
      fe && Be(!1)
    }

    function Be(ee) {
      "clientGame" === ye.e.get("openInGameMenuName") && ye.e.set({
        openInGameMenuName: ee ? "inventory" : null
      }), ee || (0, Ke.f)(), fe = !1
    }
  },
  9505: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(9509),
      be = He(610),
      Me = He(125);

    function Ke(ee) {
      var ie, He;
      if ((0, be.P)(ee)) return !0;
      const Ke = null !== (ie = null === (He = Me.siteUsedData[Me.siteUsed]) || void 0 === He ? void 0 : He.adConfig.showRewardedAds) && void 0 !== ie && ie;
      for (const be in ee) {
        const ie = ee[be];
        if (null !== ie && void 0 !== ie && ie.items)
          for (const ee in ie.items)
            if ((0, ye.i)(ie.items[ee], Ke)) return !1
      }
      return !0
    }
  },
  63776: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      getClientGameMapKey: () => ye.m,
      shopIsEmpty: () => be.b
    });
    var ye = He(37424),
      be = He(9505)
  },
  9509: (ee, ie, He) => {
    function ye(ee, ie) {
      return !ee.hidden && (ie || !ee.isRewardedAd)
    }

    function be(ee) {
      return "object" === typeof ee ? ee.option : ee
    }

    function Me(ee, ie) {
      var He;
      if ("dropdown" === (null === (He = ee.userInput) || void 0 === He ? void 0 : He.type) && "object" === typeof ee.userInput.dropdownOptions[0]) {
        for (const He of ee.userInput.dropdownOptions)
          if (be(He) === ie) return "object" === typeof He ? He.cost : ee.cost;
        console.error("Didn't find matching option for dropdown item. Item:", ee, "input:", ie)
      }
      return ee.cost
    }

    function Ke(ee, ie, He) {
      var ye;
      const be = null !== (ye = He.excludedPlayers) && void 0 !== ye ? ye : [ie];
      return ee.filter((ee => !be.includes(ee)))
    }
    He.d(ie, {
      d: () => Me,
      f: () => be,
      h: () => Ke,
      i: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);