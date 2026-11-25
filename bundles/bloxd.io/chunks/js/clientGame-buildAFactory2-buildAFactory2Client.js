export const id = 11;
export const ids = [11];
export const modules = {
  36990: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      h: () => Ou,
      k: () => cu,
      n: () => bu
    });
    var su = ju(34547),
      Uu = ju(36992),
      Zu = ju(36998),
      Xu = ju(8942),
      lu = ju(1499),
      qu = ju(58),
      fu = ju(65),
      Cu = ju(1154);

    function bu() {
      var uu;
      return (0, lu.g)(Uu.c, (0, Uu.l)()), (0, Cu.jsx)(Cu.Fragment, {
        children: null === (uu = (0, Uu.l)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function cu(uu) {
      var Eu;
      let {
        show: ju
      } = uu;
      (0, lu.g)(Uu.c, (0, Uu.l)());
      const fu = null === (Eu = (0, Uu.l)()) || void 0 === Eu ? void 0 : Eu.menu;
      return (0, qu.useEffect)((() => {
        var uu;
        ju || (null === fu || void 0 === fu || null === (uu = fu.onClose) || void 0 === uu || uu.call(fu), (0, Zu.q)())
      }), [ju, fu]), (0, qu.useEffect)((() => ju ? (0, Xu.f)(Zu.x, Zu.h) : void 0), [ju]), (0, Cu.jsx)(su.b, {
        showing: ju,
        globallyUniqueKey: "clientGameMenu",
        children: null === fu || void 0 === fu ? void 0 : fu.content
      })
    }

    function Nu(uu) {
      let {
        placement: Eu = "bottom"
      } = uu;
      return (0, Cu.jsx)("div", {
        id: `clientGameHud-${Eu}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ou(uu) {
      let {
        children: Eu,
        placement: ju = "bottom"
      } = uu;
      const [su, Uu] = (0, qu.useState)(null);
      return (0, qu.useEffect)((() => {
        Uu(document.getElementById(`clientGameHud-${ju}`))
      }), [ju]), su ? (0, fu.createPortal)(Eu, su) : null
    }
  },
  34547: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(4723),
      Uu = ju(4726);

    function Zu(uu) {
      let {
        children: Eu,
        showing: ju,
        globallyUniqueKey: Zu,
        alwaysMountChildren: Xu = !1,
        doGameplayStartStopOnShow: lu = !0,
        keepsMovement: qu = !1
      } = uu;
      return (0, Uu.e)(!0, ju, Zu, qu), (0, su.e)(lu, ju), ju || Xu ? Eu : null
    }
  },
  5179: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1154);

    function Xu(uu) {
      let {
        options: Eu,
        value: ju,
        onChange: su,
        ariaLabel: Xu,
        className: lu,
        reselectable: qu = !1,
        keepsFocus: fu = !1,
        padTabs: Cu
      } = uu;
      const bu = void 0 !== Cu;
      return (0, Zu.jsx)("div", {
        className: Uu()("SegmentedToggle", lu),
        role: "group",
        "aria-label": Xu,
        "data-pad-tabs": Cu,
        children: Eu.map((uu => {
          const Eu = uu.value === ju;
          return (0, Zu.jsx)("button", {
            type: "button",
            "aria-pressed": Eu,
            "data-pad-tab": bu || void 0,
            "data-pad-selected": bu && Eu ? "true" : void 0,
            "data-pad-default-focus": bu && Eu || void 0,
            "aria-label": uu.ariaLabel,
            title: uu.ariaLabel,
            className: Uu()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: Eu
            }),
            onMouseDown: fu ? uu => {
              uu.preventDefault()
            } : void 0,
            onClick: () => {
              Eu && !qu || su(uu.value)
            },
            children: uu.label
          }, uu.value)
        }))
      })
    }
  },
  8942: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    let su = null;
    const Uu = function(uu) {
        const Eu = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return su = Eu, () => {
          su === Eu && (su = null)
        }
      },
      Zu = () => {
        var uu;
        return null !== (uu = su) && void 0 !== uu && uu.canCycle() ? su.cycle : null
      }
  },
  37224: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      g: () => Zu
    });
    const su = new Map;

    function Uu(uu) {
      var Eu;
      return null === uu ? null : null !== (Eu = su.get(uu)) && void 0 !== Eu ? Eu : null
    }

    function Zu(uu, Eu) {
      return su.set(uu, Eu), () => {
        su.get(uu) === Eu && su.delete(uu)
      }
    }
  },
  38754: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => eu,
      D: () => cu,
      H: () => Yu,
      J: () => Du,
      L: () => Uu,
      b: () => Cu,
      e: () => qu,
      f: () => Mu,
      j: () => fu,
      l: () => lu,
      m: () => Xu,
      n: () => Zu,
      r: () => wu,
      s: () => Nu,
      v: () => pu,
      w: () => Ju,
      y: () => Gu
    });
    var su = ju(9490);

    function Uu(uu) {
      return Math.floor(uu).toLocaleString("en-US")
    }
    const Zu = 2e3,
      Xu = .005,
      lu = .001,
      qu = 2,
      fu = "Fluid Tank",
      Cu = "Coolant Mixer",
      bu = 144;

    function cu(uu) {
      const Eu = uu.split("|")[0];
      return (0, su.h)(Eu) ? Eu === su.c ? "cryo" : "water" : null
    }
    const Nu = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Ou = 63;

    function Yu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ju = Eu ? function(uu, Eu, ju) {
        const su = Nu.findIndex((su => {
          let [Uu, Zu, Xu] = su;
          return Uu === uu && Zu === Eu && Xu === ju
        }));
        return su < 0 ? 0 : 1 << su
      }(Eu[0], Eu[1], Eu[2]) : 0;
      return "maker" === uu ? {
        kind: uu,
        faces: ju
      } : "user" === uu ? {
        kind: uu,
        faces: Ou & ~ju
      } : {
        kind: uu,
        faces: Ou
      }
    }

    function hu(uu) {
      return "pipe" === uu || "tank" === uu || "maker" === uu
    }

    function Du(uu, Eu, ju) {
      return 0 !== (uu.faces & 1 << ju) && 0 !== (Eu.faces & 1 << (1 ^ ju)) && (hu(uu.kind) || hu(Eu.kind))
    }
    const gu = (uu, Eu, ju, su) => ({
        input: uu,
        inputAmount: su,
        output: Eu,
        outputAmount: ju
      }),
      Mu = {
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
          recipes: [gu("Uranium Grit", "Uranium Pellet", 1, 12), gu("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [gu("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: bu,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function eu(uu, Eu) {
      return 1e3 * (null !== Eu && void 0 !== Eu ? Eu : 0) / uu.opMs
    }

    function Gu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ju = eu(Mu["Coolant Mixer"], bu) * Eu;
      return uu <= 0 ? 0 : Math.ceil(uu / ju - 1e-9)
    }
    const pu = "baf2Water",
      wu = "baf2waterclose",
      Ju = "baf2wateropen"
  },
  38751: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => du,
      f: () => eu,
      h: () => Mu
    });
    var su = ju(9409),
      Uu = ju(9429),
      Zu = ju(9490),
      Xu = ju(38754),
      lu = ju(9485);
    const qu = (0, Xu.H)("pipe"),
      fu = (0, Xu.H)("tank"),
      Cu = (0, Xu.H)("port"),
      bu = "Reactor Port";

    function cu(uu, Eu, ju) {
      const su = new Set([Zu.e, Zu.c, bu, ...Eu, ...ju, ...uu ? [Xu.j] : []]);
      return {
        makers: new Set(Eu),
        roots: su
      }
    }
    const Nu = {
        water: cu(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Xu.b]),
        cryo: cu(!1, [Xu.b], [])
      },
      Ou = new Set([...Nu.water.roots, ...Nu.cryo.roots]),
      Yu = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      hu = Uu.e.map((uu => Yu[uu])),
      Du = hu.map((uu => {
        let [Eu, ju, su] = uu;
        return Xu.s.findIndex((uu => {
          let [Uu, Zu, Xu] = uu;
          return Uu === Eu && Zu === ju && Xu === su
        }))
      }));

    function gu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ju = su.f[uu],
        Uu = null === ju || void 0 === ju ? void 0 : ju.meta.rootName,
        cu = Nu[Eu];
      if (!Uu || !cu.roots.has(Uu)) return null;
      if ((0, Zu.h)(Uu)) return (0, Xu.D)(ju.name) === Eu ? qu : null;
      if (Uu === Xu.j) return fu;
      if (Uu === bu) return ju.name.endsWith("|Water") ? Cu : null;
      const [Ou, Yu] = lu.e[(ju.meta.rot || 1) - 1];
      return (0, Xu.H)(cu.makers.has(Uu) ? "maker" : "user", [-Ou, 0, -Yu])
    }

    function Mu(uu, Eu, ju, Uu) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: lu
      } = Nu[Zu];
      return hu.some(((fu, Cu) => {
        var bu, cu;
        let [Nu, Ou, Yu] = fu;
        const hu = uu(Eu + Nu, ju + Ou, Uu + Yu),
          Mu = gu(hu, Zu);
        return null !== Mu && lu.has(null !== (bu = null === (cu = su.f[hu]) || void 0 === cu ? void 0 : cu.meta.rootName) && void 0 !== bu ? bu : "") && !(0, Xu.J)(qu, Mu, Du[Cu])
      }))
    }

    function eu(uu) {
      const Eu = su.f[uu];
      return Eu ? (0, Xu.D)(Eu.name) : null
    }
    let Gu = null;

    function pu(uu) {
      if (!Gu) {
        Gu = new Map;
        for (const uu of ["water", "cryo"])
          for (let Eu = 0; Eu < 64; Eu++)
            for (const ju of [!1, !0]) Gu.set((0, Zu.l)(uu, Eu, ju), {
              XN: uu,
              mask: Eu,
              full: ju
            })
      }
      return Gu.get(uu)
    }
    const wu = new Map(Array.from({
      length: Zu.g + 1
    }, ((uu, Eu) => [(0, Zu.p)(Eu), Eu])));

    function Ju(uu, Eu, ju, Uu, Zu, Xu) {
      return hu.some(((lu, qu) => {
        var fu, Cu, bu;
        let [cu, Nu, Ou] = lu;
        if (0 === (Xu >> qu & 1)) return !1;
        const Yu = null !== (fu = null === (Cu = su.f[uu(Eu + cu, ju + Nu, Uu + Ou)]) || void 0 === Cu ? void 0 : Cu.name) && void 0 !== fu ? fu : "",
          hu = pu(Yu);
        return hu ? hu.XN === Zu && hu.full : (null !== (bu = function(uu) {
          var Eu;
          return null !== (Eu = wu.get(uu)) && void 0 !== Eu ? Eu : null
        }(Yu)) && void 0 !== bu ? bu : 0) > 0
      }))
    }
    class du {
      constructor() {
        this.reshapeOffsets = hu
      }
      handles(uu) {
        return null !== eu(uu)
      }
      affects(uu) {
        var Eu, ju;
        return Ou.has(null !== (Eu = null === (ju = su.f[uu]) || void 0 === ju ? void 0 : ju.meta.rootName) && void 0 !== Eu ? Eu : "")
      }
      placedBy(uu) {
        var Eu;
        return (null === (Eu = su.f[uu]) || void 0 === Eu ? void 0 : Eu.meta.rootName) === Zu.c ? Zu.e : null
      }
      shape(uu, Eu, ju, Uu, lu, fu) {
        var Cu, bu, cu;
        const Nu = null !== (Cu = null === (bu = su.f[lu]) || void 0 === bu ? void 0 : bu.name) && void 0 !== Cu ? Cu : "",
          Ou = fu || Nu !== Zu.e ? null !== (cu = (0, Xu.D)(Nu)) && void 0 !== cu ? cu : "water" : function(uu, Eu, ju, su) {
            return hu.some(((Uu, Zu) => {
              let [lu, fu, Cu] = Uu;
              const bu = gu(uu(Eu + lu, ju + fu, su + Cu), "cryo");
              return null !== bu && "port" !== bu.kind && (0, Xu.J)(qu, bu, Du[Zu])
            })) ? "cryo" : "water"
          }(uu, Eu, ju, Uu),
          Yu = function(uu, Eu, ju, su) {
            let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Zu = 0;
            return hu.forEach(((lu, fu) => {
              let [Cu, bu, cu] = lu;
              const Nu = gu(uu(Eu + Cu, ju + bu, su + cu), Uu);
              Nu && (0, Xu.J)(qu, Nu, Du[fu]) && (Zu |= 1 << fu)
            })), Zu
          }(uu, Eu, ju, Uu, Ou),
          Mu = fu ? function(uu) {
            var Eu;
            return !0 === (null === (Eu = pu(uu)) || void 0 === Eu ? void 0 : Eu.full)
          }(Nu) : Ju(uu, Eu, ju, Uu, Ou, Yu);
        return (0, su.g)((0, Zu.l)(Ou, Yu, Mu))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);