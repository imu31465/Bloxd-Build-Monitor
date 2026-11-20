export const id = 11;
export const ids = [11];
export const modules = {
  36436: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => xu,
      d: () => Su,
      g: () => Bu,
      h: () => ru
    });
    var Eu = yu(9048),
      Ku = yu(36445),
      Qu = yu(36449),
      mu = yu(8447),
      Ju = yu(1400),
      Nu = yu(64),
      Xu = yu(80),
      Vu = yu(1079);

    function ru() {
      var uu;
      return (0, Ju.h)(Ku.c, (0, Ku.o)()), (0, Vu.jsx)(Vu.Fragment, {
        children: null === (uu = (0, Ku.o)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function Bu(uu) {
      var Ru;
      let {
        show: yu
      } = uu;
      (0, Ju.h)(Ku.c, (0, Ku.o)());
      const Xu = null === (Ru = (0, Ku.o)()) || void 0 === Ru ? void 0 : Ru.menu;
      return (0, Nu.useEffect)((() => {
        var uu;
        yu || (null === Xu || void 0 === Xu || null === (uu = Xu.onClose) || void 0 === uu || uu.call(Xu), (0, Qu.p)())
      }), [yu, Xu]), (0, Nu.useEffect)((() => yu ? (0, mu.g)(Qu.v, Qu.d) : void 0), [yu]), (0, Vu.jsx)(Eu.c, {
        showing: yu,
        globallyUniqueKey: "clientGameMenu",
        children: null === Xu || void 0 === Xu ? void 0 : Xu.content
      })
    }

    function xu(uu) {
      let {
        placement: Ru = "bottom"
      } = uu;
      return (0, Vu.jsx)("div", {
        id: `clientGameHud-${Ru}`,
        style: {
          display: "contents"
        }
      })
    }

    function Su(uu) {
      let {
        children: Ru,
        placement: yu = "bottom"
      } = uu;
      const [Eu, Ku] = (0, Nu.useState)(null);
      return (0, Nu.useEffect)((() => {
        Ku(document.getElementById(`clientGameHud-${yu}`))
      }), [yu]), Eu ? (0, Xu.createPortal)(Ru, Eu) : null
    }
  },
  9048: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(4307),
      Ku = yu(4314);

    function Qu(uu) {
      let {
        children: Ru,
        showing: yu,
        globallyUniqueKey: Qu,
        alwaysMountChildren: mu = !1,
        doGameplayStartStopOnShow: Ju = !0,
        keepsMovement: Nu = !1
      } = uu;
      return (0, Ku.c)(!0, yu, Qu, Nu), (0, Eu.e)(Ju, yu), yu || mu ? Ru : null
    }
  },
  4811: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1079);

    function mu(uu) {
      let {
        options: Ru,
        value: yu,
        onChange: Eu,
        ariaLabel: mu,
        className: Ju,
        reselectable: Nu = !1,
        keepsFocus: Xu = !1
      } = uu;
      return (0, Qu.jsx)("div", {
        className: Ku()("SegmentedToggle", Ju),
        role: "group",
        "aria-label": mu,
        children: Ru.map((uu => {
          const Ru = uu.value === yu;
          return (0, Qu.jsx)("button", {
            type: "button",
            "aria-pressed": Ru,
            "aria-label": uu.ariaLabel,
            title: uu.ariaLabel,
            className: Ku()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Ru
            }),
            onMouseDown: Xu ? uu => {
              uu.preventDefault()
            } : void 0,
            onClick: () => {
              Ru && !Nu || Eu(uu.value)
            },
            children: uu.label
          }, uu.value)
        }))
      })
    }
  },
  8447: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => Ku
    });
    let Eu = null;
    const Ku = function(uu) {
        const Ru = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Eu = Ru, () => {
          Eu === Ru && (Eu = null)
        }
      },
      Qu = () => {
        var uu;
        return null !== (uu = Eu) && void 0 !== uu && uu.canCycle() ? Eu.cycle : null
      }
  },
  36602: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      i: () => Qu
    });
    const Eu = new Map;

    function Ku(uu) {
      var Ru;
      return null === uu ? null : null !== (Ru = Eu.get(uu)) && void 0 !== Ru ? Ru : null
    }

    function Qu(uu, Ru) {
      return Eu.set(uu, Ru), () => {
        Eu.get(uu) === Ru && Eu.delete(uu)
      }
    }
  },
  36449: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => pu,
      h: () => Tu,
      k: () => Ju,
      o: () => Bu,
      p: () => Wu,
      q: () => ru,
      u: () => Hu,
      v: () => Su,
      w: () => ju
    });
    var Eu = yu(27),
      Ku = yu(34);
    const Qu = "clientGameInventoryButtonsChanged",
      mu = new Map;

    function Ju() {
      return [...mu.values()].sort(((uu, Ru) => {
        var yu, Eu;
        return (null !== (yu = uu.order) && void 0 !== yu ? yu : 0) - (null !== (Eu = Ru.order) && void 0 !== Eu ? Eu : 0)
      }))
    }
    let Nu = null;

    function Xu(uu) {
      Nu = uu
    }
    let Vu = !1;

    function ru(uu) {
      Vu = !0;
      try {
        uu.onClick()
      } finally {
        Vu = !1
      }
      uu.panel && "clientGame" === Eu.d.get("openInGameMenuName") && Xu(uu.id)
    }

    function Bu() {
      return Vu
    }

    function xu() {
      return Ju().filter((uu => uu.panel && !uu.disabled))
    }

    function Su(uu) {
      const Ru = xu(),
        yu = Ru.findIndex((uu => uu.id === Nu));
      return !(yu < 0 || Ru.length < 2) && (ru(Ru[(yu + uu + Ru.length) % Ru.length]), !0)
    }

    function pu() {
      return null !== Nu && xu().length > 1
    }

    function Tu() {
      Xu(null)
    }

    function Wu() {
      "inventory" !== Eu.d.get("openInGameMenuName") && Xu(null)
    }

    function ju() {
      const uu = Nu;
      return Xu(null), uu
    }

    function Hu(uu) {
      return mu.set(uu.id, uu), Ku.k.Op(Qu, Ju(), !0), () => {
        mu.get(uu.id) === uu && (mu.delete(uu.id), Ku.k.Op(Qu, Ju()))
      }
    }
  },
  36445: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Tu,
      i: () => Wu,
      m: () => Bu,
      o: () => Xu,
      q: () => pu,
      u: () => xu,
      w: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(36449);
    const Ju = "clientGameUiChanged";
    let Nu = null;

    function Xu() {
      return Nu
    }

    function Vu(uu, Ru) {
      const yu = {
        content: uu,
        menu: Ru
      };
      return Nu = yu, Ku.k.Op(Ju, Nu, !0), () => {
        Nu === yu && (Nu = null, Su = !1, Tu(), Ku.k.Op(Ju, null))
      }
    }
    let ru = null;

    function Bu() {
      return ru
    }

    function xu(uu) {
      return ru = uu, () => {
        ru === uu && (ru = null)
      }
    }
    let Su = !1;

    function pu() {
      const uu = Eu.d.get("openInGameMenuName");
      "clientGame" !== uu && (Su = "inventory" === uu), (0, mu.o)() || (0, mu.h)(), (0, Qu.o)(Qu.b), Eu.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Tu() {
      ju(!1)
    }

    function Wu() {
      ju(Su)
    }

    function ju(uu) {
      "clientGame" === Eu.d.get("openInGameMenuName") && Eu.d.set({
        openInGameMenuName: uu ? "inventory" : null
      }), uu || (0, mu.h)(), Su = !1
    }
  },
  38198: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => xu,
      C: () => Cu,
      F: () => eu,
      I: () => bu,
      J: () => du,
      K: () => Bu,
      M: () => pu,
      O: () => Wu,
      Q: () => Ku,
      d: () => Vu,
      g: () => Nu,
      h: () => Hu,
      k: () => Xu,
      o: () => Ju,
      q: () => mu,
      u: () => Qu,
      w: () => ku
    });
    var Eu = yu(9243);

    function Ku(uu) {
      return Math.floor(uu).toLocaleString("en-US")
    }
    const Qu = 2e3,
      mu = .005,
      Ju = .001,
      Nu = 2,
      Xu = "Fluid Tank",
      Vu = "Coolant Mixer",
      ru = 144;

    function Bu(uu) {
      const Ru = uu.split("|")[0];
      return (0, Eu.k)(Ru) ? Ru === Eu.e ? "cryo" : "water" : null
    }
    const xu = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Su = 63;

    function pu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const yu = Ru ? function(uu, Ru, yu) {
        const Eu = xu.findIndex((Eu => {
          let [Ku, Qu, mu] = Eu;
          return Ku === uu && Qu === Ru && mu === yu
        }));
        return Eu < 0 ? 0 : 1 << Eu
      }(Ru[0], Ru[1], Ru[2]) : 0;
      return "maker" === uu ? {
        kind: uu,
        faces: yu
      } : "user" === uu ? {
        kind: uu,
        faces: Su & ~yu
      } : {
        kind: uu,
        faces: Su
      }
    }

    function Tu(uu) {
      return "pipe" === uu || "tank" === uu || "maker" === uu
    }

    function Wu(uu, Ru, yu) {
      return 0 !== (uu.faces & 1 << yu) && 0 !== (Ru.faces & 1 << (1 ^ yu)) && (Tu(uu.kind) || Tu(Ru.kind))
    }
    const ju = (uu, Ru, yu, Eu) => ({
        input: uu,
        inputAmount: Eu,
        output: Ru,
        outputAmount: yu
      }),
      Hu = {
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
          recipes: [ju("Uranium Grit", "Uranium Pellet", 1, 12), ju("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [ju("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: ru,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function du(uu, Ru) {
      return 1e3 * (null !== Ru && void 0 !== Ru ? Ru : 0) / uu.opMs
    }

    function bu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const yu = du(Hu["Coolant Mixer"], ru) * Ru;
      return uu <= 0 ? 0 : Math.ceil(uu / yu - 1e-9)
    }
    const Cu = "baf2Water",
      ku = "baf2waterclose",
      eu = "baf2wateropen"
  },
  38189: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Au,
      e: () => du,
      i: () => Hu
    });
    var Eu = yu(9158),
      Ku = yu(9183),
      Qu = yu(9243),
      mu = yu(38198),
      Ju = yu(9237);
    const Nu = (0, mu.M)("pipe"),
      Xu = (0, mu.M)("tank"),
      Vu = (0, mu.M)("port"),
      ru = "Reactor Port";

    function Bu(uu, Ru, yu) {
      const Eu = new Set([Qu.f, Qu.e, ru, ...Ru, ...yu, ...uu ? [mu.k] : []]);
      return {
        makers: new Set(Ru),
        roots: Eu
      }
    }
    const xu = {
        water: Bu(!0, ["Condenser"], ["Centrifuge", "Synthesizer", mu.d]),
        cryo: Bu(!1, [mu.d], [])
      },
      Su = new Set([...xu.water.roots, ...xu.cryo.roots]),
      pu = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Tu = Ku.g.map((uu => pu[uu])),
      Wu = Tu.map((uu => {
        let [Ru, yu, Eu] = uu;
        return mu.A.findIndex((uu => {
          let [Ku, Qu, mu] = uu;
          return Ku === Ru && Qu === yu && mu === Eu
        }))
      }));

    function ju(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const yu = Eu.j[uu],
        Ku = null === yu || void 0 === yu ? void 0 : yu.meta.rootName,
        Bu = xu[Ru];
      if (!Ku || !Bu.roots.has(Ku)) return null;
      if ((0, Qu.k)(Ku)) return (0, mu.K)(yu.name) === Ru ? Nu : null;
      if (Ku === mu.k) return Xu;
      if (Ku === ru) return yu.name.endsWith("|Water") ? Vu : null;
      const [Su, pu] = Ju.f[(yu.meta.rot || 1) - 1];
      return (0, mu.M)(Bu.makers.has(Ku) ? "maker" : "user", [-Su, 0, -pu])
    }

    function Hu(uu, Ru, yu, Ku) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ju
      } = xu[Qu];
      return Tu.some(((Xu, Vu) => {
        var ru, Bu;
        let [xu, Su, pu] = Xu;
        const Tu = uu(Ru + xu, yu + Su, Ku + pu),
          Hu = ju(Tu, Qu);
        return null !== Hu && Ju.has(null !== (ru = null === (Bu = Eu.j[Tu]) || void 0 === Bu ? void 0 : Bu.meta.rootName) && void 0 !== ru ? ru : "") && !(0, mu.O)(Nu, Hu, Wu[Vu])
      }))
    }

    function du(uu) {
      const Ru = Eu.j[uu];
      return Ru ? (0, mu.K)(Ru.name) : null
    }
    let bu = null;

    function Cu(uu) {
      if (!bu) {
        bu = new Map;
        for (const uu of ["water", "cryo"])
          for (let Ru = 0; Ru < 64; Ru++)
            for (const yu of [!1, !0]) bu.set((0, Qu.o)(uu, Ru, yu), {
              OB: uu,
              mask: Ru,
              full: yu
            })
      }
      return bu.get(uu)
    }
    const ku = new Map(Array.from({
      length: Qu.g + 1
    }, ((uu, Ru) => [(0, Qu.q)(Ru), Ru])));

    function eu(uu, Ru, yu, Ku, Qu, mu) {
      return Tu.some(((Ju, Nu) => {
        var Xu, Vu, ru;
        let [Bu, xu, Su] = Ju;
        if (0 === (mu >> Nu & 1)) return !1;
        const pu = null !== (Xu = null === (Vu = Eu.j[uu(Ru + Bu, yu + xu, Ku + Su)]) || void 0 === Vu ? void 0 : Vu.name) && void 0 !== Xu ? Xu : "",
          Tu = Cu(pu);
        return Tu ? Tu.OB === Qu && Tu.full : (null !== (ru = function(uu) {
          var Ru;
          return null !== (Ru = ku.get(uu)) && void 0 !== Ru ? Ru : null
        }(pu)) && void 0 !== ru ? ru : 0) > 0
      }))
    }
    class Au {
      constructor() {
        this.reshapeOffsets = Tu
      }
      handles(uu) {
        return null !== du(uu)
      }
      affects(uu) {
        var Ru, yu;
        return Su.has(null !== (Ru = null === (yu = Eu.j[uu]) || void 0 === yu ? void 0 : yu.meta.rootName) && void 0 !== Ru ? Ru : "")
      }
      placedBy(uu) {
        var Ru;
        return (null === (Ru = Eu.j[uu]) || void 0 === Ru ? void 0 : Ru.meta.rootName) === Qu.e ? Qu.f : null
      }
      shape(uu, Ru, yu, Ku, Ju, Xu) {
        var Vu, ru, Bu;
        const xu = null !== (Vu = null === (ru = Eu.j[Ju]) || void 0 === ru ? void 0 : ru.name) && void 0 !== Vu ? Vu : "",
          Su = Xu || xu !== Qu.f ? null !== (Bu = (0, mu.K)(xu)) && void 0 !== Bu ? Bu : "water" : function(uu, Ru, yu, Eu) {
            return Tu.some(((Ku, Qu) => {
              let [Ju, Xu, Vu] = Ku;
              const ru = ju(uu(Ru + Ju, yu + Xu, Eu + Vu), "cryo");
              return null !== ru && "port" !== ru.kind && (0, mu.O)(Nu, ru, Wu[Qu])
            })) ? "cryo" : "water"
          }(uu, Ru, yu, Ku),
          pu = function(uu, Ru, yu, Eu) {
            let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Qu = 0;
            return Tu.forEach(((Ju, Xu) => {
              let [Vu, ru, Bu] = Ju;
              const xu = ju(uu(Ru + Vu, yu + ru, Eu + Bu), Ku);
              xu && (0, mu.O)(Nu, xu, Wu[Xu]) && (Qu |= 1 << Xu)
            })), Qu
          }(uu, Ru, yu, Ku, Su),
          Hu = Xu ? function(uu) {
            var Ru;
            return !0 === (null === (Ru = Cu(uu)) || void 0 === Ru ? void 0 : Ru.full)
          }(xu) : eu(uu, Ru, yu, Ku, Su, pu);
        return (0, Eu.n)((0, Qu.o)(Su, pu, Hu))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);