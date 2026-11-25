export const id = 11;
export const ids = [11];
export const modules = {
  37538: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      i: () => hM,
      m: () => mM,
      p: () => LM
    });
    var OM = iM(35017),
      SM = iM(37542),
      jM = iM(37544),
      aM = iM(9328),
      PM = iM(1516),
      nM = iM(44),
      QM = iM(65),
      zM = iM(1303);

    function LM() {
      var MM;
      return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
        children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
      })
    }

    function mM(MM) {
      var rM;
      let {
        show: iM
      } = MM;
      (0, PM.e)(SM.e, (0, SM.t)());
      const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
      return (0, nM.useEffect)((() => {
        var MM;
        iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
      }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
        showing: iM,
        globallyUniqueKey: "clientGameMenu",
        children: null === QM || void 0 === QM ? void 0 : QM.content
      })
    }

    function HM(MM) {
      let {
        placement: rM = "bottom"
      } = MM;
      return (0, zM.jsx)("div", {
        id: `clientGameHud-${rM}`,
        style: {
          display: "contents"
        }
      })
    }

    function hM(MM) {
      let {
        children: rM,
        placement: iM = "bottom"
      } = MM;
      const [OM, SM] = (0, nM.useState)(null);
      return (0, nM.useEffect)((() => {
        SM(document.getElementById(`clientGameHud-${iM}`))
      }), [iM]), OM ? (0, QM.createPortal)(rM, OM) : null
    }
  },
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  5417: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1303);

    function aM(MM) {
      let {
        options: rM,
        value: iM,
        onChange: OM,
        ariaLabel: aM,
        className: PM,
        reselectable: nM = !1,
        keepsFocus: QM = !1,
        padTabs: zM
      } = MM;
      const LM = void 0 !== zM;
      return (0, jM.jsx)("div", {
        className: SM()("SegmentedToggle", PM),
        role: "group",
        "aria-label": aM,
        "data-pad-tabs": zM,
        children: rM.map((MM => {
          const rM = MM.value === iM;
          return (0, jM.jsx)("button", {
            type: "button",
            "aria-pressed": rM,
            "data-pad-tab": LM || void 0,
            "data-pad-selected": LM && rM ? "true" : void 0,
            "data-pad-default-focus": LM && rM || void 0,
            "aria-label": MM.ariaLabel,
            title: MM.ariaLabel,
            className: SM()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: rM
            }),
            onMouseDown: QM ? MM => {
              MM.preventDefault()
            } : void 0,
            onClick: () => {
              rM && !nM || OM(MM.value)
            },
            children: MM.label
          }, MM.value)
        }))
      })
    }
  },
  9328: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => SM
    });
    let OM = null;
    const SM = function(MM) {
        const rM = {
          cycle: MM,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return OM = rM, () => {
          OM === rM && (OM = null)
        }
      },
      jM = () => {
        var MM;
        return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
      }
  },
  37776: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      e: () => jM
    });
    const OM = new Map;

    function SM(MM) {
      var rM;
      return null === MM ? null : null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
    }

    function jM(MM, rM) {
      return OM.set(MM, rM), () => {
        OM.get(MM) === rM && OM.delete(MM)
      }
    }
  },
  37544: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => lM,
      b: () => jM,
      f: () => JM,
      i: () => dM,
      j: () => PM,
      m: () => mM,
      q: () => yM,
      u: () => LM,
      x: () => EM,
      y: () => hM
    });
    var OM = iM(19),
      SM = iM(22);
    const jM = "clientGameInventoryButtonsChanged",
      aM = new Map;

    function PM() {
      return [...aM.values()].sort(((MM, rM) => {
        var iM, OM;
        return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
      }))
    }
    let nM = null;

    function QM(MM) {
      nM = MM
    }
    let zM = !1;

    function LM(MM) {
      zM = !0;
      try {
        MM.onClick()
      } finally {
        zM = !1
      }
      MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
    }

    function mM() {
      return zM
    }

    function HM() {
      return PM().filter((MM => MM.panel && !MM.disabled))
    }

    function hM(MM) {
      const rM = HM(),
        iM = rM.findIndex((MM => MM.id === nM));
      return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
    }

    function JM() {
      return null !== nM && HM().length > 1
    }

    function dM() {
      QM(null)
    }

    function yM() {
      "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
    }

    function lM() {
      const MM = nM;
      return QM(null), MM
    }

    function EM(MM) {
      return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
        aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
      }
    }
  },
  37542: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      C: () => zM,
      e: () => PM,
      g: () => lM,
      k: () => dM,
      n: () => yM,
      p: () => mM,
      t: () => QM,
      w: () => JM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(37544);
    const PM = "clientGameUiChanged";
    let nM = null;

    function QM() {
      return nM
    }

    function zM(MM, rM) {
      const iM = {
        content: MM,
        menu: rM
      };
      return nM = iM, SM.i.Tz(PM, nM, !0), () => {
        nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
      }
    }
    let LM = null;

    function mM() {
      return LM
    }

    function HM(MM) {
      return LM = MM, () => {
        LM === MM && (LM = null)
      }
    }
    let hM = !1;

    function JM() {
      const MM = OM.d.get("openInGameMenuName");
      "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dM() {
      EM(!1)
    }

    function yM() {
      EM(hM)
    }

    function lM() {
      hM && EM(!1)
    }

    function EM(MM) {
      "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
        openInGameMenuName: MM ? "inventory" : null
      }), MM || (0, aM.i)(), hM = !1
    }
  },
  39426: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => eM,
      D: () => HM,
      F: () => CM,
      J: () => bM,
      L: () => GM,
      P: () => UM,
      Q: () => mM,
      S: () => JM,
      V: () => yM,
      X: () => SM,
      d: () => zM,
      h: () => nM,
      k: () => EM,
      o: () => QM,
      s: () => PM,
      u: () => aM,
      y: () => jM
    });
    var OM = iM(9904);

    function SM(MM) {
      return Math.floor(MM).toLocaleString("en-US")
    }
    const jM = 2e3,
      aM = .005,
      PM = .001,
      nM = 2,
      QM = "Fluid Tank",
      zM = "Coolant Mixer",
      LM = 144;

    function mM(MM) {
      const rM = MM.split("|")[0];
      return (0, OM.p)(rM) ? rM === OM.e ? "cryo" : "water" : null
    }
    const HM = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      hM = 63;

    function JM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const iM = rM ? function(MM, rM, iM) {
        const OM = HM.findIndex((OM => {
          let [SM, jM, aM] = OM;
          return SM === MM && jM === rM && aM === iM
        }));
        return OM < 0 ? 0 : 1 << OM
      }(rM[0], rM[1], rM[2]) : 0;
      return "maker" === MM ? {
        kind: MM,
        faces: iM
      } : "user" === MM ? {
        kind: MM,
        faces: hM & ~iM
      } : {
        kind: MM,
        faces: hM
      }
    }

    function dM(MM) {
      return "pipe" === MM || "tank" === MM || "maker" === MM
    }

    function yM(MM, rM, iM) {
      return 0 !== (MM.faces & 1 << iM) && 0 !== (rM.faces & 1 << (1 ^ iM)) && (dM(MM.kind) || dM(rM.kind))
    }
    const lM = (MM, rM, iM, OM) => ({
        input: MM,
        inputAmount: OM,
        output: rM,
        outputAmount: iM
      }),
      EM = {
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
          recipes: [lM("Uranium Grit", "Uranium Pellet", 1, 12), lM("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [lM("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: LM,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function UM(MM, rM) {
      return 1e3 * (null !== rM && void 0 !== rM ? rM : 0) / MM.opMs
    }

    function GM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const iM = UM(EM["Coolant Mixer"], LM) * rM;
      return MM <= 0 ? 0 : Math.ceil(MM / iM - 1e-9)
    }
    const CM = "baf2Water",
      eM = "baf2waterclose",
      bM = "baf2wateropen"
  },
  39420: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => wM,
      i: () => UM,
      m: () => EM
    });
    var OM = iM(9816),
      SM = iM(9839),
      jM = iM(9904),
      aM = iM(39426),
      PM = iM(9895);
    const nM = (0, aM.S)("pipe"),
      QM = (0, aM.S)("tank"),
      zM = (0, aM.S)("port"),
      LM = "Reactor Port";

    function mM(MM, rM, iM) {
      const OM = new Set([jM.h, jM.e, LM, ...rM, ...iM, ...MM ? [aM.o] : []]);
      return {
        makers: new Set(rM),
        roots: OM
      }
    }
    const HM = {
        water: mM(!0, ["Condenser"], ["Centrifuge", "Synthesizer", aM.d]),
        cryo: mM(!1, [aM.d], [])
      },
      hM = new Set([...HM.water.roots, ...HM.cryo.roots]),
      JM = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      dM = SM.h.map((MM => JM[MM])),
      yM = dM.map((MM => {
        let [rM, iM, OM] = MM;
        return aM.D.findIndex((MM => {
          let [SM, jM, aM] = MM;
          return SM === rM && jM === iM && aM === OM
        }))
      }));

    function lM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const iM = OM.k[MM],
        SM = null === iM || void 0 === iM ? void 0 : iM.meta.rootName,
        mM = HM[rM];
      if (!SM || !mM.roots.has(SM)) return null;
      if ((0, jM.p)(SM)) return (0, aM.Q)(iM.name) === rM ? nM : null;
      if (SM === aM.o) return QM;
      if (SM === LM) return iM.name.endsWith("|Water") ? zM : null;
      const [hM, JM] = PM.i[(iM.meta.rot || 1) - 1];
      return (0, aM.S)(mM.makers.has(SM) ? "maker" : "user", [-hM, 0, -JM])
    }

    function EM(MM, rM, iM, SM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: PM
      } = HM[jM];
      return dM.some(((QM, zM) => {
        var LM, mM;
        let [HM, hM, JM] = QM;
        const dM = MM(rM + HM, iM + hM, SM + JM),
          EM = lM(dM, jM);
        return null !== EM && PM.has(null !== (LM = null === (mM = OM.k[dM]) || void 0 === mM ? void 0 : mM.meta.rootName) && void 0 !== LM ? LM : "") && !(0, aM.V)(nM, EM, yM[zM])
      }))
    }

    function UM(MM) {
      const rM = OM.k[MM];
      return rM ? (0, aM.Q)(rM.name) : null
    }
    let GM = null;

    function CM(MM) {
      if (!GM) {
        GM = new Map;
        for (const MM of ["water", "cryo"])
          for (let rM = 0; rM < 64; rM++)
            for (const iM of [!1, !0]) GM.set((0, jM.t)(MM, rM, iM), {
              CH: MM,
              mask: rM,
              full: iM
            })
      }
      return GM.get(MM)
    }
    const eM = new Map(Array.from({
      length: jM.l + 1
    }, ((MM, rM) => [(0, jM.u)(rM), rM])));

    function bM(MM, rM, iM, SM, jM, aM) {
      return dM.some(((PM, nM) => {
        var QM, zM, LM;
        let [mM, HM, hM] = PM;
        if (0 === (aM >> nM & 1)) return !1;
        const JM = null !== (QM = null === (zM = OM.k[MM(rM + mM, iM + HM, SM + hM)]) || void 0 === zM ? void 0 : zM.name) && void 0 !== QM ? QM : "",
          dM = CM(JM);
        return dM ? dM.CH === jM && dM.full : (null !== (LM = function(MM) {
          var rM;
          return null !== (rM = eM.get(MM)) && void 0 !== rM ? rM : null
        }(JM)) && void 0 !== LM ? LM : 0) > 0
      }))
    }
    class wM {
      constructor() {
        this.reshapeOffsets = dM
      }
      handles(MM) {
        return null !== UM(MM)
      }
      affects(MM) {
        var rM, iM;
        return hM.has(null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.meta.rootName) && void 0 !== rM ? rM : "")
      }
      placedBy(MM) {
        var rM;
        return (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta.rootName) === jM.e ? jM.h : null
      }
      shape(MM, rM, iM, SM, PM, QM) {
        var zM, LM, mM;
        const HM = null !== (zM = null === (LM = OM.k[PM]) || void 0 === LM ? void 0 : LM.name) && void 0 !== zM ? zM : "",
          hM = QM || HM !== jM.h ? null !== (mM = (0, aM.Q)(HM)) && void 0 !== mM ? mM : "water" : function(MM, rM, iM, OM) {
            return dM.some(((SM, jM) => {
              let [PM, QM, zM] = SM;
              const LM = lM(MM(rM + PM, iM + QM, OM + zM), "cryo");
              return null !== LM && "port" !== LM.kind && (0, aM.V)(nM, LM, yM[jM])
            })) ? "cryo" : "water"
          }(MM, rM, iM, SM),
          JM = function(MM, rM, iM, OM) {
            let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              jM = 0;
            return dM.forEach(((PM, QM) => {
              let [zM, LM, mM] = PM;
              const HM = lM(MM(rM + zM, iM + LM, OM + mM), SM);
              HM && (0, aM.V)(nM, HM, yM[QM]) && (jM |= 1 << QM)
            })), jM
          }(MM, rM, iM, SM, hM),
          EM = QM ? function(MM) {
            var rM;
            return !0 === (null === (rM = CM(MM)) || void 0 === rM ? void 0 : rM.full)
          }(HM) : bM(MM, rM, iM, SM, hM, JM);
        return (0, OM.l)((0, jM.t)(hM, JM, EM))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);