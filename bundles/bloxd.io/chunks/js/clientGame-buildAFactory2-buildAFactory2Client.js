export const id = 11;
export const ids = [11];
export const modules = {
  37756: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => rV,
      e: () => kV,
      f: () => vV,
      h: () => ZV
    });
    var JV = xV(35300),
      YV = xV(37762),
      UV = xV(37771),
      yV = xV(9335),
      pV = xV(1542),
      QV = xV(62),
      nV = xV(78),
      wV = xV(1321);

    function ZV() {
      var VV;
      return (0, pV.j)(YV.e, (0, YV.p)()), (0, wV.jsx)(wV.Fragment, {
        children: null === (VV = (0, YV.p)()) || void 0 === VV ? void 0 : VV.content
      })
    }

    function vV(VV) {
      var eV;
      let {
        show: xV
      } = VV;
      (0, pV.j)(YV.e, (0, YV.p)());
      const nV = null === (eV = (0, YV.p)()) || void 0 === eV ? void 0 : eV.menu;
      return (0, QV.useEffect)((() => {
        var VV;
        xV || (null === nV || void 0 === nV || null === (VV = nV.onClose) || void 0 === VV || VV.call(nV), (0, UV.q)())
      }), [xV, nV]), (0, QV.useEffect)((() => xV ? (0, yV.g)(UV.t, UV.g) : void 0), [xV]), (0, wV.jsx)(JV.c, {
        showing: xV,
        globallyUniqueKey: "clientGameMenu",
        children: null === nV || void 0 === nV ? void 0 : nV.content
      })
    }

    function rV(VV) {
      let {
        placement: eV = "bottom"
      } = VV;
      return (0, wV.jsx)("div", {
        id: `clientGameHud-${eV}`,
        style: {
          display: "contents"
        }
      })
    }

    function kV(VV) {
      let {
        children: eV,
        placement: xV = "bottom"
      } = VV;
      const [JV, YV] = (0, QV.useState)(null);
      return (0, QV.useEffect)((() => {
        YV(document.getElementById(`clientGameHud-${xV}`))
      }), [xV]), JV ? (0, nV.createPortal)(eV, JV) : null
    }
  },
  35300: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5015),
      YV = xV(5020);

    function UV(VV) {
      let {
        children: eV,
        showing: xV,
        globallyUniqueKey: UV,
        alwaysMountChildren: yV = !1,
        doGameplayStartStopOnShow: pV = !0,
        keepsMovement: QV = !1
      } = VV;
      return (0, YV.b)(!0, xV, UV, QV), (0, JV.c)(pV, xV), xV || yV ? eV : null
    }
  },
  5529: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1321);

    function yV(VV) {
      let {
        options: eV,
        value: xV,
        onChange: JV,
        ariaLabel: yV,
        className: pV,
        reselectable: QV = !1,
        keepsFocus: nV = !1,
        padTabs: wV
      } = VV;
      const ZV = void 0 !== wV;
      return (0, UV.jsx)("div", {
        className: YV()("SegmentedToggle", pV),
        role: "group",
        "aria-label": yV,
        "data-pad-tabs": wV,
        children: eV.map((VV => {
          const eV = VV.value === xV;
          return (0, UV.jsx)("button", {
            type: "button",
            "aria-pressed": eV,
            "data-pad-tab": ZV || void 0,
            "data-pad-selected": ZV && eV ? "true" : void 0,
            "data-pad-default-focus": ZV && eV || void 0,
            "aria-label": VV.ariaLabel,
            title: VV.ariaLabel,
            className: YV()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: eV
            }),
            onMouseDown: nV ? VV => {
              VV.preventDefault()
            } : void 0,
            onClick: () => {
              eV && !QV || JV(VV.value)
            },
            children: VV.label
          }, VV.value)
        }))
      })
    }
  },
  9335: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => YV
    });
    let JV = null;
    const YV = function(VV) {
        const eV = {
          cycle: VV,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return JV = eV, () => {
          JV === eV && (JV = null)
        }
      },
      UV = () => {
        var VV;
        return null !== (VV = JV) && void 0 !== VV && VV.canCycle() ? JV.cycle : null
      }
  },
  38021: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    const JV = new Map;

    function YV(VV) {
      var eV;
      return null === VV ? null : null !== (eV = JV.get(VV)) && void 0 !== eV ? eV : null
    }

    function UV(VV, eV) {
      return JV.set(VV, eV), () => {
        JV.get(VV) === eV && JV.delete(VV)
      }
    }
  },
  37771: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => bV,
      j: () => EV,
      m: () => pV,
      o: () => vV,
      q: () => BV,
      r: () => ZV,
      s: () => qV,
      t: () => kV,
      u: () => jV
    });
    var JV = xV(27),
      YV = xV(32);
    const UV = "clientGameInventoryButtonsChanged",
      yV = new Map;

    function pV() {
      return [...yV.values()].sort(((VV, eV) => {
        var xV, JV;
        return (null !== (xV = VV.order) && void 0 !== xV ? xV : 0) - (null !== (JV = eV.order) && void 0 !== JV ? JV : 0)
      }))
    }
    let QV = null;

    function nV(VV) {
      QV = VV
    }
    let wV = !1;

    function ZV(VV) {
      wV = !0;
      try {
        VV.onClick()
      } finally {
        wV = !1
      }
      VV.panel && "clientGame" === JV.b.get("openInGameMenuName") && nV(VV.id)
    }

    function vV() {
      return wV
    }

    function rV() {
      return pV().filter((VV => VV.panel && !VV.disabled))
    }

    function kV(VV) {
      const eV = rV(),
        xV = eV.findIndex((VV => VV.id === QV));
      return !(xV < 0 || eV.length < 2) && (ZV(eV[(xV + VV + eV.length) % eV.length]), !0)
    }

    function bV() {
      return null !== QV && rV().length > 1
    }

    function EV() {
      nV(null)
    }

    function BV() {
      "inventory" !== JV.b.get("openInGameMenuName") && nV(null)
    }

    function jV() {
      const VV = QV;
      return nV(null), VV
    }

    function qV(VV) {
      return yV.set(VV.id, VV), YV.h.QZ(UV, pV(), !0), () => {
        yV.get(VV.id) === VV && (yV.delete(VV.id), YV.h.QZ(UV, pV()))
      }
    }
  },
  37762: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      h: () => jV,
      i: () => EV,
      m: () => BV,
      o: () => vV,
      p: () => nV,
      r: () => bV,
      v: () => rV,
      z: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(37771);
    const pV = "clientGameUiChanged";
    let QV = null;

    function nV() {
      return QV
    }

    function wV(VV, eV) {
      const xV = {
        content: VV,
        menu: eV
      };
      return QV = xV, YV.h.QZ(pV, QV, !0), () => {
        QV === xV && (QV = null, kV = !1, EV(), YV.h.QZ(pV, null))
      }
    }
    let ZV = null;

    function vV() {
      return ZV
    }

    function rV(VV) {
      return ZV = VV, () => {
        ZV === VV && (ZV = null)
      }
    }
    let kV = !1;

    function bV() {
      const VV = JV.b.get("openInGameMenuName");
      "clientGame" !== VV && (kV = "inventory" === VV), (0, yV.o)() || (0, yV.j)(), (0, UV.p)(UV.d), JV.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function EV() {
      qV(!1)
    }

    function BV() {
      qV(kV)
    }

    function jV() {
      kV && qV(!1)
    }

    function qV(VV) {
      "clientGame" === JV.b.get("openInGameMenuName") && JV.b.set({
        openInGameMenuName: VV ? "inventory" : null
      }), VV || (0, yV.j)(), kV = !1
    }
  },
  39575: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => AV,
      D: () => FV,
      H: () => tV,
      K: () => vV,
      O: () => bV,
      P: () => BV,
      T: () => YV,
      d: () => wV,
      f: () => QV,
      i: () => qV,
      j: () => nV,
      l: () => pV,
      n: () => yV,
      o: () => UV,
      s: () => PV,
      v: () => rV,
      x: () => TV
    });
    var JV = xV(9906);

    function YV(VV) {
      return Math.floor(VV).toLocaleString("en-US")
    }
    const UV = 2e3,
      yV = .005,
      pV = .001,
      QV = 2,
      nV = "Fluid Tank",
      wV = "Coolant Mixer",
      ZV = 144;

    function vV(VV) {
      const eV = VV.split("|")[0];
      return (0, JV.j)(eV) ? eV === JV.e ? "cryo" : "water" : null
    }
    const rV = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      kV = 63;

    function bV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const xV = eV ? function(VV, eV, xV) {
        const JV = rV.findIndex((JV => {
          let [YV, UV, yV] = JV;
          return YV === VV && UV === eV && yV === xV
        }));
        return JV < 0 ? 0 : 1 << JV
      }(eV[0], eV[1], eV[2]) : 0;
      return "maker" === VV ? {
        kind: VV,
        faces: xV
      } : "user" === VV ? {
        kind: VV,
        faces: kV & ~xV
      } : {
        kind: VV,
        faces: kV
      }
    }

    function EV(VV) {
      return "pipe" === VV || "tank" === VV || "maker" === VV
    }

    function BV(VV, eV, xV) {
      return 0 !== (VV.faces & 1 << xV) && 0 !== (eV.faces & 1 << (1 ^ xV)) && (EV(VV.kind) || EV(eV.kind))
    }
    const jV = (VV, eV, xV, JV) => ({
        input: VV,
        inputAmount: JV,
        output: eV,
        outputAmount: xV
      }),
      qV = {
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
          recipes: [jV("Uranium Grit", "Uranium Pellet", 1, 12), jV("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [jV("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: ZV,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function tV(VV, eV) {
      return 1e3 * (null !== eV && void 0 !== eV ? eV : 0) / VV.opMs
    }

    function FV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const xV = tV(qV["Coolant Mixer"], ZV) * eV;
      return VV <= 0 ? 0 : Math.ceil(VV / xV - 1e-9)
    }
    const TV = "baf2Water",
      PV = "baf2waterclose",
      AV = "baf2wateropen"
  },
  39568: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => NV,
      d: () => tV,
      e: () => qV
    });
    var JV = xV(9820),
      YV = xV(9843),
      UV = xV(9906),
      yV = xV(39575),
      pV = xV(9902);
    const QV = (0, yV.O)("pipe"),
      nV = (0, yV.O)("tank"),
      wV = (0, yV.O)("port"),
      ZV = "Reactor Port";

    function vV(VV, eV, xV) {
      const JV = new Set([UV.f, UV.e, ZV, ...eV, ...xV, ...VV ? [yV.j] : []]);
      return {
        makers: new Set(eV),
        roots: JV
      }
    }
    const rV = {
        water: vV(!0, ["Condenser"], ["Centrifuge", "Synthesizer", yV.d]),
        cryo: vV(!1, [yV.d], [])
      },
      kV = new Set([...rV.water.roots, ...rV.cryo.roots]),
      bV = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      EV = YV.g.map((VV => bV[VV])),
      BV = EV.map((VV => {
        let [eV, xV, JV] = VV;
        return yV.v.findIndex((VV => {
          let [YV, UV, yV] = VV;
          return YV === eV && UV === xV && yV === JV
        }))
      }));

    function jV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const xV = JV.k[VV],
        YV = null === xV || void 0 === xV ? void 0 : xV.meta.rootName,
        vV = rV[eV];
      if (!YV || !vV.roots.has(YV)) return null;
      if ((0, UV.j)(YV)) return (0, yV.K)(xV.name) === eV ? QV : null;
      if (YV === yV.j) return nV;
      if (YV === ZV) return xV.name.endsWith("|Water") ? wV : null;
      const [kV, bV] = pV.e[(xV.meta.rot || 1) - 1];
      return (0, yV.O)(vV.makers.has(YV) ? "maker" : "user", [-kV, 0, -bV])
    }

    function qV(VV, eV, xV, YV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: pV
      } = rV[UV];
      return EV.some(((nV, wV) => {
        var ZV, vV;
        let [rV, kV, bV] = nV;
        const EV = VV(eV + rV, xV + kV, YV + bV),
          qV = jV(EV, UV);
        return null !== qV && pV.has(null !== (ZV = null === (vV = JV.k[EV]) || void 0 === vV ? void 0 : vV.meta.rootName) && void 0 !== ZV ? ZV : "") && !(0, yV.P)(QV, qV, BV[wV])
      }))
    }

    function tV(VV) {
      const eV = JV.k[VV];
      return eV ? (0, yV.K)(eV.name) : null
    }
    let FV = null;

    function TV(VV) {
      if (!FV) {
        FV = new Map;
        for (const VV of ["water", "cryo"])
          for (let eV = 0; eV < 64; eV++)
            for (const xV of [!1, !0]) FV.set((0, UV.n)(VV, eV, xV), {
              Cr: VV,
              mask: eV,
              full: xV
            })
      }
      return FV.get(VV)
    }
    const PV = new Map(Array.from({
      length: UV.g + 1
    }, ((VV, eV) => [(0, UV.p)(eV), eV])));

    function AV(VV, eV, xV, YV, UV, yV) {
      return EV.some(((pV, QV) => {
        var nV, wV, ZV;
        let [vV, rV, kV] = pV;
        if (0 === (yV >> QV & 1)) return !1;
        const bV = null !== (nV = null === (wV = JV.k[VV(eV + vV, xV + rV, YV + kV)]) || void 0 === wV ? void 0 : wV.name) && void 0 !== nV ? nV : "",
          EV = TV(bV);
        return EV ? EV.Cr === UV && EV.full : (null !== (ZV = function(VV) {
          var eV;
          return null !== (eV = PV.get(VV)) && void 0 !== eV ? eV : null
        }(bV)) && void 0 !== ZV ? ZV : 0) > 0
      }))
    }
    class NV {
      constructor() {
        this.reshapeOffsets = EV
      }
      handles(VV) {
        return null !== tV(VV)
      }
      affects(VV) {
        var eV, xV;
        return kV.has(null !== (eV = null === (xV = JV.k[VV]) || void 0 === xV ? void 0 : xV.meta.rootName) && void 0 !== eV ? eV : "")
      }
      placedBy(VV) {
        var eV;
        return (null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta.rootName) === UV.e ? UV.f : null
      }
      shape(VV, eV, xV, YV, pV, nV) {
        var wV, ZV, vV;
        const rV = null !== (wV = null === (ZV = JV.k[pV]) || void 0 === ZV ? void 0 : ZV.name) && void 0 !== wV ? wV : "",
          kV = nV || rV !== UV.f ? null !== (vV = (0, yV.K)(rV)) && void 0 !== vV ? vV : "water" : function(VV, eV, xV, JV) {
            return EV.some(((YV, UV) => {
              let [pV, nV, wV] = YV;
              const ZV = jV(VV(eV + pV, xV + nV, JV + wV), "cryo");
              return null !== ZV && "port" !== ZV.kind && (0, yV.P)(QV, ZV, BV[UV])
            })) ? "cryo" : "water"
          }(VV, eV, xV, YV),
          bV = function(VV, eV, xV, JV) {
            let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              UV = 0;
            return EV.forEach(((pV, nV) => {
              let [wV, ZV, vV] = pV;
              const rV = jV(VV(eV + wV, xV + ZV, JV + vV), YV);
              rV && (0, yV.P)(QV, rV, BV[nV]) && (UV |= 1 << nV)
            })), UV
          }(VV, eV, xV, YV, kV),
          qV = nV ? function(VV) {
            var eV;
            return !0 === (null === (eV = TV(VV)) || void 0 === eV ? void 0 : eV.full)
          }(rV) : AV(VV, eV, xV, YV, kV, bV);
        return (0, JV.n)((0, UV.n)(kV, bV, qV))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);