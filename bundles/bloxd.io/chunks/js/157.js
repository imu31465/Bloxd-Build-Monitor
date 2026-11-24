export const id = 157;
export const ids = [157];
export const modules = {
  36689: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Ym,
      e: () => qm,
      h: () => wm,
      i: () => Em,
      m: () => jm,
      p: () => pm,
      r: () => Im,
      u: () => Om,
      v: () => Vm
    });
    var hm = fm(23),
      Am = fm(31);
    const am = "clientGameInventoryButtonsChanged",
      xm = new Map;

    function wm() {
      return [...xm.values()].sort(((mm, Tm) => {
        var fm, hm;
        return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
      }))
    }
    let Dm = null;

    function im(mm) {
      Dm = mm
    }
    let Rm = !1;

    function pm(mm) {
      Rm = !0;
      try {
        mm.onClick()
      } finally {
        Rm = !1
      }
      mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
    }

    function Em() {
      return Rm
    }

    function om() {
      return wm().filter((mm => mm.panel && !mm.disabled))
    }

    function Om(mm) {
      const Tm = om(),
        fm = Tm.findIndex((mm => mm.id === Dm));
      return !(fm < 0 || Tm.length < 2) && (pm(Tm[(fm + mm + Tm.length) % Tm.length]), !0)
    }

    function Ym() {
      return null !== Dm && om().length > 1
    }

    function qm() {
      im(null)
    }

    function jm() {
      "inventory" !== hm.c.get("openInGameMenuName") && im(null)
    }

    function Vm() {
      const mm = Dm;
      return im(null), mm
    }

    function Im(mm) {
      return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
        xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
      }
    }
  },
  36686: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      h: () => qm,
      j: () => jm,
      m: () => Em,
      p: () => im,
      s: () => Ym,
      u: () => om,
      w: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(36689);
    const wm = "clientGameUiChanged";
    let Dm = null;

    function im() {
      return Dm
    }

    function Rm(mm, Tm) {
      const fm = {
        content: mm,
        menu: Tm
      };
      return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
        Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
      }
    }
    let pm = null;

    function Em() {
      return pm
    }

    function om(mm) {
      return pm = mm, () => {
        pm === mm && (pm = null)
      }
    }
    let Om = !1;

    function Ym() {
      const mm = hm.c.get("openInGameMenuName");
      "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qm() {
      Vm(!1)
    }

    function jm() {
      Vm(Om)
    }

    function Vm(mm) {
      "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
        openInGameMenuName: mm ? "inventory" : null
      }), mm || (0, xm.e)(), Om = !1
    }
  },
  8702: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(8709),
      Am = fm(653),
      am = fm(135);

    function xm(mm) {
      var Tm, fm;
      if ((0, Am.H)(mm)) return !0;
      const xm = null !== (Tm = null === (fm = am.k[am.q]) || void 0 === fm ? void 0 : fm.adConfig.showRewardedAds) && void 0 !== Tm && Tm;
      for (const Am in mm) {
        const Tm = mm[Am];
        if (null !== Tm && void 0 !== Tm && Tm.items)
          for (const mm in Tm.items)
            if ((0, hm.l)(Tm.items[mm], xm)) return !1
      }
      return !0
    }
  },
  60672: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      getClientGameMapKey: () => hm.m,
      shopIsEmpty: () => Am.e
    });
    var hm = fm(36686),
      Am = fm(8702)
  },
  8709: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return !mm.hidden && (Tm || !mm.isRewardedAd)
    }

    function Am(mm) {
      return "object" === typeof mm ? mm.option : mm
    }

    function am(mm, Tm) {
      var fm;
      if ("dropdown" === (null === (fm = mm.userInput) || void 0 === fm ? void 0 : fm.type) && "object" === typeof mm.userInput.dropdownOptions[0]) {
        for (const fm of mm.userInput.dropdownOptions)
          if (Am(fm) === Tm) return "object" === typeof fm ? fm.cost : mm.cost;
        console.error("Didn't find matching option for dropdown item. Item:", mm, "input:", Tm)
      }
      return mm.cost
    }

    function xm(mm, Tm, fm) {
      var hm;
      const Am = null !== (hm = fm.excludedPlayers) && void 0 !== hm ? hm : [Tm];
      return mm.filter((mm => !Am.includes(mm)))
    }
    fm.d(Tm, {
      e: () => am,
      g: () => Am,
      i: () => xm,
      l: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);