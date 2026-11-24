export const id = 11;
export const ids = [11];
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
  4970: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1135);

    function xm(mm) {
      let {
        options: Tm,
        value: fm,
        onChange: hm,
        ariaLabel: xm,
        className: wm,
        reselectable: Dm = !1,
        keepsFocus: im = !1,
        padTabs: Rm
      } = mm;
      const pm = void 0 !== Rm;
      return (0, am.jsx)("div", {
        className: Am()("SegmentedToggle", wm),
        role: "group",
        "aria-label": xm,
        "data-pad-tabs": Rm,
        children: Tm.map((mm => {
          const Tm = mm.value === fm;
          return (0, am.jsx)("button", {
            type: "button",
            "aria-pressed": Tm,
            "data-pad-tab": pm || void 0,
            "data-pad-selected": pm && Tm ? "true" : void 0,
            "data-pad-default-focus": pm && Tm || void 0,
            "aria-label": mm.ariaLabel,
            title: mm.ariaLabel,
            className: Am()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Tm
            }),
            onMouseDown: im ? mm => {
              mm.preventDefault()
            } : void 0,
            onClick: () => {
              Tm && !Dm || hm(mm.value)
            },
            children: mm.label
          }, mm.value)
        }))
      })
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
  36930: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      f: () => am
    });
    const hm = new Map;

    function Am(mm) {
      var Tm;
      return null === mm ? null : null !== (Tm = hm.get(mm)) && void 0 !== Tm ? Tm : null
    }

    function am(mm, Tm) {
      return hm.set(mm, Tm), () => {
        hm.get(mm) === Tm && hm.delete(mm)
      }
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
  38521: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => nm,
      B: () => cm,
      C: () => Qm,
      E: () => Km,
      F: () => Em,
      I: () => Ym,
      L: () => jm,
      P: () => Am,
      e: () => Rm,
      g: () => Dm,
      h: () => Im,
      i: () => im,
      m: () => wm,
      o: () => xm,
      s: () => am,
      w: () => Jm,
      x: () => om
    });
    var hm = fm(9231);

    function Am(mm) {
      return Math.floor(mm).toLocaleString("en-US")
    }
    const am = 2e3,
      xm = .005,
      wm = .001,
      Dm = 2,
      im = "Fluid Tank",
      Rm = "Coolant Mixer",
      pm = 144;

    function Em(mm) {
      const Tm = mm.split("|")[0];
      return (0, hm.k)(Tm) ? Tm === hm.c ? "cryo" : "water" : null
    }
    const om = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Om = 63;

    function Ym(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const fm = Tm ? function(mm, Tm, fm) {
        const hm = om.findIndex((hm => {
          let [Am, am, xm] = hm;
          return Am === mm && am === Tm && xm === fm
        }));
        return hm < 0 ? 0 : 1 << hm
      }(Tm[0], Tm[1], Tm[2]) : 0;
      return "maker" === mm ? {
        kind: mm,
        faces: fm
      } : "user" === mm ? {
        kind: mm,
        faces: Om & ~fm
      } : {
        kind: mm,
        faces: Om
      }
    }

    function qm(mm) {
      return "pipe" === mm || "tank" === mm || "maker" === mm
    }

    function jm(mm, Tm, fm) {
      return 0 !== (mm.faces & 1 << fm) && 0 !== (Tm.faces & 1 << (1 ^ fm)) && (qm(mm.kind) || qm(Tm.kind))
    }
    const Vm = (mm, Tm, fm, hm) => ({
        input: mm,
        inputAmount: hm,
        output: Tm,
        outputAmount: fm
      }),
      Im = {
        Condenser: {
          kind: "Condenser",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [],
          recipes: [],
          powerPerOp: 60,
          fluidMade: 12,
          couplable: !0,
          couplerSlot: 0
        },
        Centrifuge: {
          kind: "Centrifuge",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [Vm("Uranium Grit", "Uranium Pellet", 1, 12), Vm("Spent Pellet", "Plutonium Pellet", 1, 4)],
          powerPerOp: 600,
          waterPerOp: 24
        },
        Synthesizer: {
          kind: "Synthesizer",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 120,
          waterPerOp: 12,
          synth: !0
        },
        "Coolant Mixer": {
          kind: "Coolant Mixer",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [],
          recipes: [Vm("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pm,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Km(mm, Tm) {
      return 1e3 * (null !== Tm && void 0 !== Tm ? Tm : 0) / mm.opMs
    }

    function Qm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const fm = Km(Im["Coolant Mixer"], pm) * Tm;
      return mm <= 0 ? 0 : Math.ceil(mm / fm - 1e-9)
    }
    const nm = "baf2Water",
      Jm = "baf2waterclose",
      cm = "baf2wateropen"
  },
  38518: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => zm,
      f: () => Km,
      i: () => Im
    });
    var hm = fm(9141),
      Am = fm(9159),
      am = fm(9231),
      xm = fm(38521),
      wm = fm(9222);
    const Dm = (0, xm.I)("pipe"),
      im = (0, xm.I)("tank"),
      Rm = (0, xm.I)("port"),
      pm = "Reactor Port";

    function Em(mm, Tm, fm) {
      const hm = new Set([am.e, am.c, pm, ...Tm, ...fm, ...mm ? [xm.i] : []]);
      return {
        makers: new Set(Tm),
        roots: hm
      }
    }
    const om = {
        water: Em(!0, ["Condenser"], ["Centrifuge", "Synthesizer", xm.e]),
        cryo: Em(!1, [xm.e], [])
      },
      Om = new Set([...om.water.roots, ...om.cryo.roots]),
      Ym = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      qm = Am.f.map((mm => Ym[mm])),
      jm = qm.map((mm => {
        let [Tm, fm, hm] = mm;
        return xm.x.findIndex((mm => {
          let [Am, am, xm] = mm;
          return Am === Tm && am === fm && xm === hm
        }))
      }));

    function Vm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const fm = hm.i[mm],
        Am = null === fm || void 0 === fm ? void 0 : fm.meta.rootName,
        Em = om[Tm];
      if (!Am || !Em.roots.has(Am)) return null;
      if ((0, am.k)(Am)) return (0, xm.F)(fm.name) === Tm ? Dm : null;
      if (Am === xm.i) return im;
      if (Am === pm) return fm.name.endsWith("|Water") ? Rm : null;
      const [Om, Ym] = wm.d[(fm.meta.rot || 1) - 1];
      return (0, xm.I)(Em.makers.has(Am) ? "maker" : "user", [-Om, 0, -Ym])
    }

    function Im(mm, Tm, fm, Am) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: wm
      } = om[am];
      return qm.some(((im, Rm) => {
        var pm, Em;
        let [om, Om, Ym] = im;
        const qm = mm(Tm + om, fm + Om, Am + Ym),
          Im = Vm(qm, am);
        return null !== Im && wm.has(null !== (pm = null === (Em = hm.i[qm]) || void 0 === Em ? void 0 : Em.meta.rootName) && void 0 !== pm ? pm : "") && !(0, xm.L)(Dm, Im, jm[Rm])
      }))
    }

    function Km(mm) {
      const Tm = hm.i[mm];
      return Tm ? (0, xm.F)(Tm.name) : null
    }
    let Qm = null;

    function nm(mm) {
      if (!Qm) {
        Qm = new Map;
        for (const mm of ["water", "cryo"])
          for (let Tm = 0; Tm < 64; Tm++)
            for (const fm of [!1, !0]) Qm.set((0, am.l)(mm, Tm, fm), {
              Qo: mm,
              mask: Tm,
              full: fm
            })
      }
      return Qm.get(mm)
    }
    const Jm = new Map(Array.from({
      length: am.g + 1
    }, ((mm, Tm) => [(0, am.o)(Tm), Tm])));

    function cm(mm, Tm, fm, Am, am, xm) {
      return qm.some(((wm, Dm) => {
        var im, Rm, pm;
        let [Em, om, Om] = wm;
        if (0 === (xm >> Dm & 1)) return !1;
        const Ym = null !== (im = null === (Rm = hm.i[mm(Tm + Em, fm + om, Am + Om)]) || void 0 === Rm ? void 0 : Rm.name) && void 0 !== im ? im : "",
          qm = nm(Ym);
        return qm ? qm.Qo === am && qm.full : (null !== (pm = function(mm) {
          var Tm;
          return null !== (Tm = Jm.get(mm)) && void 0 !== Tm ? Tm : null
        }(Ym)) && void 0 !== pm ? pm : 0) > 0
      }))
    }
    class zm {
      constructor() {
        this.reshapeOffsets = qm
      }
      handles(mm) {
        return null !== Km(mm)
      }
      affects(mm) {
        var Tm, fm;
        return Om.has(null !== (Tm = null === (fm = hm.i[mm]) || void 0 === fm ? void 0 : fm.meta.rootName) && void 0 !== Tm ? Tm : "")
      }
      placedBy(mm) {
        var Tm;
        return (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta.rootName) === am.c ? am.e : null
      }
      shape(mm, Tm, fm, Am, wm, im) {
        var Rm, pm, Em;
        const om = null !== (Rm = null === (pm = hm.i[wm]) || void 0 === pm ? void 0 : pm.name) && void 0 !== Rm ? Rm : "",
          Om = im || om !== am.e ? null !== (Em = (0, xm.F)(om)) && void 0 !== Em ? Em : "water" : function(mm, Tm, fm, hm) {
            return qm.some(((Am, am) => {
              let [wm, im, Rm] = Am;
              const pm = Vm(mm(Tm + wm, fm + im, hm + Rm), "cryo");
              return null !== pm && "port" !== pm.kind && (0, xm.L)(Dm, pm, jm[am])
            })) ? "cryo" : "water"
          }(mm, Tm, fm, Am),
          Ym = function(mm, Tm, fm, hm) {
            let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              am = 0;
            return qm.forEach(((wm, im) => {
              let [Rm, pm, Em] = wm;
              const om = Vm(mm(Tm + Rm, fm + pm, hm + Em), Am);
              om && (0, xm.L)(Dm, om, jm[im]) && (am |= 1 << im)
            })), am
          }(mm, Tm, fm, Am, Om),
          Im = im ? function(mm) {
            var Tm;
            return !0 === (null === (Tm = nm(mm)) || void 0 === Tm ? void 0 : Tm.full)
          }(om) : cm(mm, Tm, fm, Am, Om, Ym);
        return (0, hm.k)((0, am.l)(Om, Ym, Im))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);