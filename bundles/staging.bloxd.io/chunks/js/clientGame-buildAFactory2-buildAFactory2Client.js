export const id = 11;
export const ids = [11];
export const modules = {
  37420: (ee, ie, He) => {
    He.d(ie, {
      b: () => pe,
      d: () => Xe,
      h: () => ke,
      j: () => Re
    });
    var ye = He(34867),
      be = He(37424),
      Me = He(37427),
      Ke = He(9446),
      Ue = He(1432),
      Fe = He(59),
      Je = He(77),
      oe = He(1228);

    function Re() {
      var ee;
      return (0, Ue.j)(be.b, (0, be.p)()), (0, oe.jsx)(oe.Fragment, {
        children: null === (ee = (0, be.p)()) || void 0 === ee ? void 0 : ee.content
      })
    }

    function ke(ee) {
      var ie;
      let {
        show: He
      } = ee;
      (0, Ue.j)(be.b, (0, be.p)());
      const Je = null === (ie = (0, be.p)()) || void 0 === ie ? void 0 : ie.menu;
      return (0, Fe.useEffect)((() => {
        var ee;
        He || (null === Je || void 0 === Je || null === (ee = Je.onClose) || void 0 === ee || ee.call(Je), (0, Me.l)())
      }), [He, Je]), (0, Fe.useEffect)((() => He ? (0, Ke.g)(Me.r, Me.e) : void 0), [He]), (0, oe.jsx)(ye.e, {
        showing: He,
        globallyUniqueKey: "clientGameMenu",
        children: null === Je || void 0 === Je ? void 0 : Je.content
      })
    }
    const qe = new Map,
      fe = new Set;

    function Te(ee, ie) {
      ie ? qe.set(ee, ie) : qe.delete(ee);
      for (const He of fe) He()
    }

    function pe(ee) {
      let {
        placement: ie = "bottom"
      } = ee;
      const He = (0, Fe.useRef)(null);
      return (0, Fe.useLayoutEffect)((() => {
        const ee = He.current;
        return Te(ie, ee), () => {
          qe.get(ie) === ee && Te(ie, null)
        }
      }), [ie]), (0, oe.jsx)("div", {
        ref: He,
        id: `clientGameHud-${ie}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xe(ee) {
      let {
        children: ie,
        placement: He = "bottom"
      } = ee;
      const [ye, be] = (0, Fe.useState)((() => {
        var ee;
        return null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null
      }));
      return (0, Fe.useEffect)((() => {
        const ee = () => {
          var ee;
          be(null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null)
        };
        return fe.add(ee), ee(), () => {
          fe.delete(ee)
        }
      }), [He]), ye ? (0, Je.createPortal)(ie, ye) : null
    }
  },
  34867: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(4931),
      be = He(4937);

    function Me(ee) {
      let {
        children: ie,
        showing: He,
        globallyUniqueKey: Me,
        alwaysMountChildren: Ke = !1,
        doGameplayStartStopOnShow: Ue = !0,
        keepsMovement: Fe = !1
      } = ee;
      return (0, be.e)(!0, He, Me, Fe), (0, ye.c)(Ue, He), He || Ke ? ie : null
    }
  },
  5537: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1228);

    function Ke(ee) {
      let {
        options: ie,
        value: He,
        onChange: ye,
        ariaLabel: Ke,
        className: Ue,
        reselectable: Fe = !1,
        keepsFocus: Je = !1,
        padTabs: oe
      } = ee;
      const Re = void 0 !== oe;
      return (0, Me.jsx)("div", {
        className: be()("SegmentedToggle", Ue),
        role: "group",
        "aria-label": Ke,
        "data-pad-tabs": oe,
        children: ie.map((ee => {
          const ie = ee.value === He;
          return (0, Me.jsx)("button", {
            type: "button",
            "aria-pressed": ie,
            "data-pad-tab": Re || void 0,
            "data-pad-selected": Re && ie ? "true" : void 0,
            "data-pad-default-focus": Re && ie || void 0,
            "aria-label": ee.ariaLabel,
            title: ee.ariaLabel,
            className: be()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: ie
            }),
            onMouseDown: Je ? ee => {
              ee.preventDefault()
            } : void 0,
            onClick: () => {
              ie && !Fe || ye(ee.value)
            },
            children: ee.label
          }, ee.value)
        }))
      })
    }
  },
  9446: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = null;
    const be = function(ee) {
        const ie = {
          cycle: ee,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ye = ie, () => {
          ye === ie && (ye = null)
        }
      },
      Me = () => {
        var ee;
        return null !== (ee = ye) && void 0 !== ee && ee.canCycle() ? ye.cycle : null
      }
  },
  37652: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Me
    });
    const ye = new Map;

    function be(ee) {
      var ie;
      return null === ee ? null : null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : null
    }

    function Me(ee, ie) {
      return ye.set(ee, ie), () => {
        ye.get(ee) === ie && ye.delete(ee)
      }
    }
  },
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
  39214: (ee, ie, He) => {
    He.d(ie, {
      A: () => Oe,
      E: () => We,
      H: () => ge,
      I: () => Ee,
      L: () => ke,
      P: () => Te,
      T: () => Xe,
      V: () => be,
      e: () => oe,
      f: () => Fe,
      j: () => Be,
      l: () => Je,
      o: () => Ue,
      s: () => Ke,
      u: () => Me,
      v: () => de,
      w: () => qe
    });
    var ye = He(10049);

    function be(ee) {
      return Math.floor(ee).toLocaleString("en-US")
    }
    const Me = 2e3,
      Ke = .005,
      Ue = .001,
      Fe = 2,
      Je = "Fluid Tank",
      oe = "Coolant Mixer",
      Re = 144;

    function ke(ee) {
      const ie = ee.split("|")[0];
      return (0, ye.n)(ie) ? ie === ye.e ? "cryo" : "water" : null
    }
    const qe = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      fe = 63;

    function Te(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const He = ie ? function(ee, ie, He) {
        const ye = qe.findIndex((ye => {
          let [be, Me, Ke] = ye;
          return be === ee && Me === ie && Ke === He
        }));
        return ye < 0 ? 0 : 1 << ye
      }(ie[0], ie[1], ie[2]) : 0;
      return "maker" === ee ? {
        kind: ee,
        faces: He
      } : "user" === ee ? {
        kind: ee,
        faces: fe & ~He
      } : {
        kind: ee,
        faces: fe
      }
    }

    function pe(ee) {
      return "pipe" === ee || "tank" === ee || "maker" === ee
    }

    function Xe(ee, ie, He) {
      return 0 !== (ee.faces & 1 << He) && 0 !== (ie.faces & 1 << (1 ^ He)) && (pe(ee.kind) || pe(ie.kind))
    }
    const ze = (ee, ie, He, ye) => ({
        input: ee,
        inputAmount: ye,
        output: ie,
        outputAmount: He
      }),
      Be = {
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
          recipes: [ze("Uranium Grit", "Uranium Pellet", 1, 12), ze("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [ze("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Re,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Ee(ee, ie) {
      return 1e3 * (null !== ie && void 0 !== ie ? ie : 0) / ee.opMs
    }

    function ge(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const He = Ee(Be["Coolant Mixer"], Re) * ie;
      return ee <= 0 ? 0 : Math.ceil(ee / He - 1e-9)
    }
    const Oe = "baf2Water",
      de = "baf2waterclose",
      We = "baf2wateropen"
  },
  39211: (ee, ie, He) => {
    He.d(ie, {
      d: () => te,
      e: () => Ee,
      h: () => Be
    });
    var ye = He(9961),
      be = He(9985),
      Me = He(10049),
      Ke = He(39214),
      Ue = He(10046);
    const Fe = (0, Ke.P)("pipe"),
      Je = (0, Ke.P)("tank"),
      oe = (0, Ke.P)("port"),
      Re = "Reactor Port";

    function ke(ee, ie, He) {
      const ye = new Set([Me.i, Me.e, Re, ...ie, ...He, ...ee ? [Ke.l] : []]);
      return {
        makers: new Set(ie),
        roots: ye
      }
    }
    const qe = {
        water: ke(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Ke.e]),
        cryo: ke(!1, [Ke.e], [])
      },
      fe = new Set([...qe.water.roots, ...qe.cryo.roots]),
      Te = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      pe = be.d.map((ee => Te[ee])),
      Xe = pe.map((ee => {
        let [ie, He, ye] = ee;
        return Ke.w.findIndex((ee => {
          let [be, Me, Ke] = ee;
          return be === ie && Me === He && Ke === ye
        }))
      }));

    function ze(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const He = ye.i[ee],
        be = null === He || void 0 === He ? void 0 : He.meta.rootName,
        ke = qe[ie];
      if (!be || !ke.roots.has(be)) return null;
      if ((0, Me.n)(be)) return (0, Ke.L)(He.name) === ie ? Fe : null;
      if (be === Ke.l) return Je;
      if (be === Re) return He.name.endsWith("|Water") ? oe : null;
      const [fe, Te] = Ue.e[(He.meta.rot || 1) - 1];
      return (0, Ke.P)(ke.makers.has(be) ? "maker" : "user", [-fe, 0, -Te])
    }

    function Be(ee, ie, He, be) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ue
      } = qe[Me];
      return pe.some(((Je, oe) => {
        var Re, ke;
        let [qe, fe, Te] = Je;
        const pe = ee(ie + qe, He + fe, be + Te),
          Be = ze(pe, Me);
        return null !== Be && Ue.has(null !== (Re = null === (ke = ye.i[pe]) || void 0 === ke ? void 0 : ke.meta.rootName) && void 0 !== Re ? Re : "") && !(0, Ke.T)(Fe, Be, Xe[oe])
      }))
    }

    function Ee(ee) {
      const ie = ye.i[ee];
      return ie ? (0, Ke.L)(ie.name) : null
    }
    let ge = null;

    function Oe(ee) {
      if (!ge) {
        ge = new Map;
        for (const ee of ["water", "cryo"])
          for (let ie = 0; ie < 64; ie++)
            for (const He of [!1, !0]) ge.set((0, Me.o)(ee, ie, He), {
              Lq: ee,
              mask: ie,
              full: He
            })
      }
      return ge.get(ee)
    }
    const de = new Map(Array.from({
      length: Me.j + 1
    }, ((ee, ie) => [(0, Me.p)(ie), ie])));

    function We(ee, ie, He, be, Me, Ke) {
      return pe.some(((Ue, Fe) => {
        var Je, oe, Re;
        let [ke, qe, fe] = Ue;
        if (0 === (Ke >> Fe & 1)) return !1;
        const Te = null !== (Je = null === (oe = ye.i[ee(ie + ke, He + qe, be + fe)]) || void 0 === oe ? void 0 : oe.name) && void 0 !== Je ? Je : "",
          pe = Oe(Te);
        return pe ? pe.Lq === Me && pe.full : (null !== (Re = function(ee) {
          var ie;
          return null !== (ie = de.get(ee)) && void 0 !== ie ? ie : null
        }(Te)) && void 0 !== Re ? Re : 0) > 0
      }))
    }
    class te {
      constructor() {
        this.reshapeOffsets = pe
      }
      handles(ee) {
        return null !== Ee(ee)
      }
      affects(ee) {
        var ie, He;
        return fe.has(null !== (ie = null === (He = ye.i[ee]) || void 0 === He ? void 0 : He.meta.rootName) && void 0 !== ie ? ie : "")
      }
      placedBy(ee) {
        var ie;
        return (null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.meta.rootName) === Me.e ? Me.i : null
      }
      shape(ee, ie, He, be, Ue, Je) {
        var oe, Re, ke;
        const qe = null !== (oe = null === (Re = ye.i[Ue]) || void 0 === Re ? void 0 : Re.name) && void 0 !== oe ? oe : "",
          fe = Je || qe !== Me.i ? null !== (ke = (0, Ke.L)(qe)) && void 0 !== ke ? ke : "water" : function(ee, ie, He, ye) {
            return pe.some(((be, Me) => {
              let [Ue, Je, oe] = be;
              const Re = ze(ee(ie + Ue, He + Je, ye + oe), "cryo");
              return null !== Re && "port" !== Re.kind && (0, Ke.T)(Fe, Re, Xe[Me])
            })) ? "cryo" : "water"
          }(ee, ie, He, be),
          Te = function(ee, ie, He, ye) {
            let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Me = 0;
            return pe.forEach(((Ue, Je) => {
              let [oe, Re, ke] = Ue;
              const qe = ze(ee(ie + oe, He + Re, ye + ke), be);
              qe && (0, Ke.T)(Fe, qe, Xe[Je]) && (Me |= 1 << Je)
            })), Me
          }(ee, ie, He, be, fe),
          Be = Je ? function(ee) {
            var ie;
            return !0 === (null === (ie = Oe(ee)) || void 0 === ie ? void 0 : ie.full)
          }(qe) : We(ee, ie, He, be, fe, Te);
        return (0, ye.j)((0, Me.o)(fe, Te, Be))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);