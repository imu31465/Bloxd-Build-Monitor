export const id = 11;
export const ids = [11];
export const modules = {
  35994: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      e: () => tD,
      f: () => yD,
      h: () => BD
    });
    var ID = cD(9041),
      pD = cD(35996),
      iD = cD(36002),
      fD = cD(8394),
      bD = cD(1440),
      QD = cD(53),
      wD = cD(62),
      SD = cD(1093);

    function BD() {
      var DD;
      return (0, bD.g)(pD.b, (0, pD.o)()), (0, SD.jsx)(SD.Fragment, {
        children: null === (DD = (0, pD.o)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function yD(DD) {
      var CD;
      let {
        show: cD
      } = DD;
      (0, bD.g)(pD.b, (0, pD.o)());
      const wD = null === (CD = (0, pD.o)()) || void 0 === CD ? void 0 : CD.menu;
      return (0, QD.useEffect)((() => {
        var DD;
        cD || (null === wD || void 0 === wD || null === (DD = wD.onClose) || void 0 === DD || DD.call(wD), (0, iD.q)())
      }), [cD, wD]), (0, QD.useEffect)((() => cD ? (0, fD.i)(iD.B, iD.e) : void 0), [cD]), (0, SD.jsx)(ID.c, {
        showing: cD,
        globallyUniqueKey: "clientGameMenu",
        children: null === wD || void 0 === wD ? void 0 : wD.content
      })
    }

    function MD(DD) {
      let {
        placement: CD = "bottom"
      } = DD;
      return (0, SD.jsx)("div", {
        id: `clientGameHud-${CD}`,
        style: {
          display: "contents"
        }
      })
    }

    function tD(DD) {
      let {
        children: CD,
        placement: cD = "bottom"
      } = DD;
      const [ID, pD] = (0, QD.useState)(null);
      return (0, QD.useEffect)((() => {
        pD(document.getElementById(`clientGameHud-${cD}`))
      }), [cD]), ID ? (0, wD.createPortal)(CD, ID) : null
    }
  },
  9041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(4329),
      pD = cD(4337);

    function iD(DD) {
      let {
        children: CD,
        showing: cD,
        globallyUniqueKey: iD,
        alwaysMountChildren: fD = !1,
        doGameplayStartStopOnShow: bD = !0,
        keepsMovement: QD = !1
      } = DD;
      return (0, pD.e)(!0, cD, iD, QD), (0, ID.b)(bD, cD), cD || fD ? CD : null
    }
  },
  4799: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1093);

    function fD(DD) {
      let {
        options: CD,
        value: cD,
        onChange: ID,
        ariaLabel: fD,
        className: bD,
        reselectable: QD = !1,
        keepsFocus: wD = !1
      } = DD;
      return (0, iD.jsx)("div", {
        className: pD()("SegmentedToggle", bD),
        role: "group",
        "aria-label": fD,
        children: CD.map((DD => {
          const CD = DD.value === cD;
          return (0, iD.jsx)("button", {
            type: "button",
            "aria-pressed": CD,
            "aria-label": DD.ariaLabel,
            title: DD.ariaLabel,
            className: pD()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: CD
            }),
            onMouseDown: wD ? DD => {
              DD.preventDefault()
            } : void 0,
            onClick: () => {
              CD && !QD || ID(DD.value)
            },
            children: DD.label
          }, DD.value)
        }))
      })
    }
  },
  8394: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      i: () => pD
    });
    let ID = null;
    const pD = function(DD) {
        const CD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ID = CD, () => {
          ID === CD && (ID = null)
        }
      },
      iD = () => {
        var DD;
        return null !== (DD = ID) && void 0 !== DD && DD.canCycle() ? ID.cycle : null
      }
  },
  36181: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      c: () => iD
    });
    const ID = new Map;

    function pD(DD) {
      var CD;
      return null === DD ? null : null !== (CD = ID.get(DD)) && void 0 !== CD ? CD : null
    }

    function iD(DD, CD) {
      return ID.set(DD, CD), () => {
        ID.get(DD) === CD && ID.delete(DD)
      }
    }
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  37804: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => PD,
      C: () => mD,
      D: () => XD,
      F: () => yD,
      I: () => ZD,
      M: () => vD,
      O: () => pD,
      c: () => SD,
      d: () => QD,
      e: () => gD,
      f: () => wD,
      j: () => bD,
      n: () => fD,
      q: () => iD,
      r: () => OD,
      u: () => MD,
      x: () => nD
    });
    var ID = cD(9230);

    function pD(DD) {
      return Math.floor(DD).toLocaleString("en-US")
    }
    const iD = 2e3,
      fD = .005,
      bD = .001,
      QD = 2,
      wD = "Fluid Tank",
      SD = "Coolant Mixer",
      BD = 144;

    function yD(DD) {
      const CD = DD.split("|")[0];
      return (0, ID.n)(CD) ? CD === ID.c ? "cryo" : "water" : null
    }
    const MD = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      tD = 63;

    function ZD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const cD = CD ? function(DD, CD, cD) {
        const ID = MD.findIndex((ID => {
          let [pD, iD, fD] = ID;
          return pD === DD && iD === CD && fD === cD
        }));
        return ID < 0 ? 0 : 1 << ID
      }(CD[0], CD[1], CD[2]) : 0;
      return "maker" === DD ? {
        kind: DD,
        faces: cD
      } : "user" === DD ? {
        kind: DD,
        faces: tD & ~cD
      } : {
        kind: DD,
        faces: tD
      }
    }

    function oD(DD) {
      return "pipe" === DD || "tank" === DD || "maker" === DD
    }

    function vD(DD, CD, cD) {
      return 0 !== (DD.faces & 1 << cD) && 0 !== (CD.faces & 1 << (1 ^ cD)) && (oD(DD.kind) || oD(CD.kind))
    }
    const ND = (DD, CD, cD, ID) => ({
        input: DD,
        inputAmount: ID,
        output: CD,
        outputAmount: cD
      }),
      gD = {
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
          recipes: [ND("Uranium Grit", "Uranium Pellet", 1, 12), ND("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [ND("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: BD,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function XD(DD, CD) {
      return 1e3 * (null !== CD && void 0 !== CD ? CD : 0) / DD.opMs
    }

    function mD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cD = XD(gD["Coolant Mixer"], BD) * CD;
      return DD <= 0 ? 0 : Math.ceil(DD / cD - 1e-9)
    }
    const nD = "baf2Water",
      OD = "baf2waterclose",
      PD = "baf2wateropen"
  },
  37797: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => HD,
      g: () => XD,
      j: () => gD
    });
    var ID = cD(9141),
      pD = cD(9162),
      iD = cD(9230),
      fD = cD(37804),
      bD = cD(9226);
    const QD = (0, fD.I)("pipe"),
      wD = (0, fD.I)("tank"),
      SD = (0, fD.I)("port"),
      BD = "Reactor Port";

    function yD(DD, CD, cD) {
      const ID = new Set([iD.f, iD.c, BD, ...CD, ...cD, ...DD ? [fD.f] : []]);
      return {
        makers: new Set(CD),
        roots: ID
      }
    }
    const MD = {
        water: yD(!0, ["Condenser"], ["Centrifuge", "Synthesizer", fD.c]),
        cryo: yD(!1, [fD.c], [])
      },
      tD = new Set([...MD.water.roots, ...MD.cryo.roots]),
      ZD = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      oD = pD.d.map((DD => ZD[DD])),
      vD = oD.map((DD => {
        let [CD, cD, ID] = DD;
        return fD.u.findIndex((DD => {
          let [pD, iD, fD] = DD;
          return pD === CD && iD === cD && fD === ID
        }))
      }));

    function ND(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const cD = ID.g[DD],
        pD = null === cD || void 0 === cD ? void 0 : cD.meta.rootName,
        yD = MD[CD];
      if (!pD || !yD.roots.has(pD)) return null;
      if ((0, iD.n)(pD)) return (0, fD.F)(cD.name) === CD ? QD : null;
      if (pD === fD.f) return wD;
      if (pD === BD) return cD.name.endsWith("|Water") ? SD : null;
      const [tD, ZD] = bD.f[(cD.meta.rot || 1) - 1];
      return (0, fD.I)(yD.makers.has(pD) ? "maker" : "user", [-tD, 0, -ZD])
    }

    function gD(DD, CD, cD, pD) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: bD
      } = MD[iD];
      return oD.some(((wD, SD) => {
        var BD, yD;
        let [MD, tD, ZD] = wD;
        const oD = DD(CD + MD, cD + tD, pD + ZD),
          gD = ND(oD, iD);
        return null !== gD && bD.has(null !== (BD = null === (yD = ID.g[oD]) || void 0 === yD ? void 0 : yD.meta.rootName) && void 0 !== BD ? BD : "") && !(0, fD.M)(QD, gD, vD[SD])
      }))
    }

    function XD(DD) {
      const CD = ID.g[DD];
      return CD ? (0, fD.F)(CD.name) : null
    }
    let mD = null;

    function nD(DD) {
      if (!mD) {
        mD = new Map;
        for (const DD of ["water", "cryo"])
          for (let CD = 0; CD < 64; CD++)
            for (const cD of [!1, !0]) mD.set((0, iD.r)(DD, CD, cD), {
              HM: DD,
              mask: CD,
              full: cD
            })
      }
      return mD.get(DD)
    }
    const OD = new Map(Array.from({
      length: iD.j + 1
    }, ((DD, CD) => [(0, iD.u)(CD), CD])));

    function PD(DD, CD, cD, pD, iD, fD) {
      return oD.some(((bD, QD) => {
        var wD, SD, BD;
        let [yD, MD, tD] = bD;
        if (0 === (fD >> QD & 1)) return !1;
        const ZD = null !== (wD = null === (SD = ID.g[DD(CD + yD, cD + MD, pD + tD)]) || void 0 === SD ? void 0 : SD.name) && void 0 !== wD ? wD : "",
          oD = nD(ZD);
        return oD ? oD.HM === iD && oD.full : (null !== (BD = function(DD) {
          var CD;
          return null !== (CD = OD.get(DD)) && void 0 !== CD ? CD : null
        }(ZD)) && void 0 !== BD ? BD : 0) > 0
      }))
    }
    class HD {
      constructor() {
        this.reshapeOffsets = oD
      }
      handles(DD) {
        return null !== XD(DD)
      }
      affects(DD) {
        var CD, cD;
        return tD.has(null !== (CD = null === (cD = ID.g[DD]) || void 0 === cD ? void 0 : cD.meta.rootName) && void 0 !== CD ? CD : "")
      }
      placedBy(DD) {
        var CD;
        return (null === (CD = ID.g[DD]) || void 0 === CD ? void 0 : CD.meta.rootName) === iD.c ? iD.f : null
      }
      shape(DD, CD, cD, pD, bD, wD) {
        var SD, BD, yD;
        const MD = null !== (SD = null === (BD = ID.g[bD]) || void 0 === BD ? void 0 : BD.name) && void 0 !== SD ? SD : "",
          tD = wD || MD !== iD.f ? null !== (yD = (0, fD.F)(MD)) && void 0 !== yD ? yD : "water" : function(DD, CD, cD, ID) {
            return oD.some(((pD, iD) => {
              let [bD, wD, SD] = pD;
              const BD = ND(DD(CD + bD, cD + wD, ID + SD), "cryo");
              return null !== BD && "port" !== BD.kind && (0, fD.M)(QD, BD, vD[iD])
            })) ? "cryo" : "water"
          }(DD, CD, cD, pD),
          ZD = function(DD, CD, cD, ID) {
            let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              iD = 0;
            return oD.forEach(((bD, wD) => {
              let [SD, BD, yD] = bD;
              const MD = ND(DD(CD + SD, cD + BD, ID + yD), pD);
              MD && (0, fD.M)(QD, MD, vD[wD]) && (iD |= 1 << wD)
            })), iD
          }(DD, CD, cD, pD, tD),
          gD = wD ? function(DD) {
            var CD;
            return !0 === (null === (CD = nD(DD)) || void 0 === CD ? void 0 : CD.full)
          }(MD) : PD(DD, CD, cD, pD, tD, ZD);
        return (0, ID.k)((0, iD.r)(tD, ZD, gD))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);