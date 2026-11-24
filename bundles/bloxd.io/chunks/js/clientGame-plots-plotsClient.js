export const id = 22;
export const ids = [22];
export const modules = {
  36681: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      e: () => Om,
      f: () => Em,
      i: () => pm
    });
    var hm = fm(34283),
      Am = fm(36686),
      am = fm(36689),
      xm = fm(8654),
      wm = fm(1449),
      Dm = fm(59),
      im = fm(77),
      Rm = fm(1135);

    function pm() {
      var mm;
      return (0, wm.i)(Am.e, (0, Am.p)()), (0, Rm.jsx)(Rm.Fragment, {
        children: null === (mm = (0, Am.p)()) || void 0 === mm ? void 0 : mm.content
      })
    }

    function Em(mm) {
      var Tm;
      let {
        show: fm
      } = mm;
      (0, wm.i)(Am.e, (0, Am.p)());
      const im = null === (Tm = (0, Am.p)()) || void 0 === Tm ? void 0 : Tm.menu;
      return (0, Dm.useEffect)((() => {
        var mm;
        fm || (null === im || void 0 === im || null === (mm = im.onClose) || void 0 === mm || mm.call(im), (0, am.m)())
      }), [fm, im]), (0, Dm.useEffect)((() => fm ? (0, xm.h)(am.u, am.d) : void 0), [fm]), (0, Rm.jsx)(hm.c, {
        showing: fm,
        globallyUniqueKey: "clientGameMenu",
        children: null === im || void 0 === im ? void 0 : im.content
      })
    }

    function om(mm) {
      let {
        placement: Tm = "bottom"
      } = mm;
      return (0, Rm.jsx)("div", {
        id: `clientGameHud-${Tm}`,
        style: {
          display: "contents"
        }
      })
    }

    function Om(mm) {
      let {
        children: Tm,
        placement: fm = "bottom"
      } = mm;
      const [hm, Am] = (0, Dm.useState)(null);
      return (0, Dm.useEffect)((() => {
        Am(document.getElementById(`clientGameHud-${fm}`))
      }), [fm]), hm ? (0, im.createPortal)(Tm, hm) : null
    }
  },
  34283: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(4477),
      Am = fm(4481);

    function am(mm) {
      let {
        children: Tm,
        showing: fm,
        globallyUniqueKey: am,
        alwaysMountChildren: xm = !1,
        doGameplayStartStopOnShow: wm = !0,
        keepsMovement: Dm = !1
      } = mm;
      return (0, Am.d)(!0, fm, am, Dm), (0, hm.c)(wm, fm), fm || xm ? Tm : null
    }
  },
  36777: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      c: () => xm,
      e: () => wm,
      h: () => Dm
    });
    var hm = fm(59),
      Am = fm(3112);
    const am = 8,
      xm = "InGameHeaderContainer",
      wm = "TopRightElements";

    function Dm(mm) {
      const [Tm] = (0, Am.c)(), [fm, Dm] = (0, hm.useState)(!1);
      return (0, hm.useLayoutEffect)((() => {
        if (!mm) return;
        const Tm = document.querySelector(`.${xm}`),
          fm = document.querySelector(`.${wm}`),
          hm = () => {
            const hm = mm.getBoundingClientRect(),
              Am = Tm ? Tm.getBoundingClientRect().right : 0,
              xm = fm ? fm.getBoundingClientRect().left : window.innerWidth,
              wm = hm.left < Am + am,
              im = hm.right > xm - am;
            Dm(wm || im)
          };
        hm();
        const Am = new ResizeObserver(hm);
        return Am.observe(mm), Tm && Am.observe(Tm), fm && Am.observe(fm), () => {
          Am.disconnect()
        }
      }), [mm, Tm]), fm
    }
  },
  8654: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => Am
    });
    let hm = null;
    const Am = function(mm) {
        const Tm = {
          cycle: mm,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hm = Tm, () => {
          hm === Tm && (hm = null)
        }
      },
      am = () => {
        var mm;
        return null !== (mm = hm) && void 0 !== mm && mm.canCycle() ? hm.cycle : null
      }
  },
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
  38611: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      e: () => wm,
      h: () => Dm
    });
    const hm = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      Am = [0, 1, 2, 0, 2, 3],
      am = [4, 5];

    function xm(mm, Tm, fm, hm, Am) {
      for (let xm = 0; xm < 6; xm++) am.includes(xm) === Am && im(mm, Tm, fm, hm, xm)
    }

    function wm(mm, Tm, fm, hm) {
      for (let Am = 0; Am < 6; Am++) im(mm, Tm, fm, hm, Am)
    }

    function Dm(mm, Tm, fm, am, xm) {
      for (let wm = 0; wm < 6; wm++)
        for (const Dm of [0, 1]) {
          const [im, Rm, pm] = [Dm + 2, Dm + 1, (Dm + 3) % 4], Em = mm.length / 3;
          for (const [Tm, Am] of [
              [Dm, Rm],
              [im, Rm],
              [im, pm],
              [Dm, pm]
            ])
            for (let Dm = 0; Dm < 3; Dm++) {
              const im = hm[3 * (4 * wm + Tm) + Dm],
                Rm = hm[3 * (4 * wm + Am) + Dm];
              mm.push((im + (Rm - im) * xm) * am / 2 + fm[Dm])
            }
          for (const mm of Am) Tm.push(Em + mm)
        }
    }

    function im(mm, Tm, fm, am, xm) {
      let [wm, Dm, im] = fm, [Rm, pm, Em] = am;
      const om = mm.length / 3;
      for (let Am = 4 * xm; Am < 4 * xm + 4; Am++) mm.push(hm[3 * Am] * Rm / 2 + wm, hm[3 * Am + 1] * pm / 2 + Dm, hm[3 * Am + 2] * Em / 2 + im);
      for (const hm of Am) Tm.push(om + hm)
    }
  },
  36999: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return null === mm || null === Tm ? mm === Tm : mm[0] === Tm[0] && mm[1] === Tm[1] && mm[2] === Tm[2]
    }

    function Am(mm) {
      return [mm[0] + .5, mm[1] + .5, mm[2] + .5]
    }
    fm.d(Tm, {
      e: () => Am,
      i: () => hm
    })
  },
  37039: (mm, Tm, fm) => {
    function hm(mm) {
      return mm.includes("Leaf Bed")
    }

    function Am(mm) {
      return / Bed(?: Head)?(?:\||$)/.test(mm) && !hm(mm)
    }

    function am(mm) {
      return mm.includes(" Strongbed")
    }

    function xm(mm) {
      return hm(mm) || Am(mm) || am(mm)
    }
    fm.d(Tm, {
      b: () => xm,
      f: () => hm,
      j: () => am,
      l: () => Am
    })
  },
  37032: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(37039),
      Am = fm(9141);
    const am = [],
      xm = [],
      wm = [],
      Dm = [];
    for (const Rm of Object.keys(Am.m))(0, hm.f)(Rm) ? am.push(Rm) : (0, hm.l)(Rm) && xm.push(Rm), (0, hm.j)(Rm) && wm.push(Rm), (Rm.includes(" Bed Head") || Rm.includes(" Strongbed Head")) && Dm.push(Rm);
    const im = {
      leafBeds: am,
      woolBeds: xm,
      strongBeds: wm,
      beds: [...am, ...xm, ...wm],
      bedHeads: Dm,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);