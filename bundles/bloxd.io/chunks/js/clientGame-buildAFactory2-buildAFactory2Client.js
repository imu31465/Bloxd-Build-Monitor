export const id = 11;
export const ids = [11];
export const modules = {
  36483: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => MC,
      c: () => gC,
      d: () => NC,
      f: () => WC
    });
    var QC = ZC(34153),
      wC = ZC(36488),
      bC = ZC(36490),
      nC = ZC(8735),
      fC = ZC(1383),
      oC = ZC(48),
      qC = ZC(60),
      FC = ZC(1056);

    function WC() {
      var CC;
      return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
        children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
      })
    }

    function NC(CC) {
      var zC;
      let {
        show: ZC
      } = CC;
      (0, fC.f)(wC.d, (0, wC.q)());
      const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
      return (0, oC.useEffect)((() => {
        var CC;
        ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
      }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
        showing: ZC,
        globallyUniqueKey: "clientGameMenu",
        children: null === qC || void 0 === qC ? void 0 : qC.content
      })
    }

    function MC(CC) {
      let {
        placement: zC = "bottom"
      } = CC;
      return (0, FC.jsx)("div", {
        id: `clientGameHud-${zC}`,
        style: {
          display: "contents"
        }
      })
    }

    function gC(CC) {
      let {
        children: zC,
        placement: ZC = "bottom"
      } = CC;
      const [QC, wC] = (0, oC.useState)(null);
      return (0, oC.useEffect)((() => {
        wC(document.getElementById(`clientGameHud-${ZC}`))
      }), [ZC]), QC ? (0, qC.createPortal)(zC, QC) : null
    }
  },
  34153: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(4473),
      wC = ZC(4479);

    function bC(CC) {
      let {
        children: zC,
        showing: ZC,
        globallyUniqueKey: bC,
        alwaysMountChildren: nC = !1,
        doGameplayStartStopOnShow: fC = !0,
        keepsMovement: oC = !1
      } = CC;
      return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
    }
  },
  4971: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1056);

    function nC(CC) {
      let {
        options: zC,
        value: ZC,
        onChange: QC,
        ariaLabel: nC,
        className: fC,
        reselectable: oC = !1,
        keepsFocus: qC = !1,
        padTabs: FC
      } = CC;
      const WC = void 0 !== FC;
      return (0, bC.jsx)("div", {
        className: wC()("SegmentedToggle", fC),
        role: "group",
        "aria-label": nC,
        "data-pad-tabs": FC,
        children: zC.map((CC => {
          const zC = CC.value === ZC;
          return (0, bC.jsx)("button", {
            type: "button",
            "aria-pressed": zC,
            "data-pad-tab": WC || void 0,
            "data-pad-selected": WC && zC ? "true" : void 0,
            "data-pad-default-focus": WC && zC || void 0,
            "aria-label": CC.ariaLabel,
            title: CC.ariaLabel,
            className: wC()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zC
            }),
            onMouseDown: qC ? CC => {
              CC.preventDefault()
            } : void 0,
            onClick: () => {
              zC && !oC || QC(CC.value)
            },
            children: CC.label
          }, CC.value)
        }))
      })
    }
  },
  8735: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => wC
    });
    let QC = null;
    const wC = function(CC) {
        const zC = {
          cycle: CC,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QC = zC, () => {
          QC === zC && (QC = null)
        }
      },
      bC = () => {
        var CC;
        return null !== (CC = QC) && void 0 !== CC && CC.canCycle() ? QC.cycle : null
      }
  },
  36699: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => bC
    });
    const QC = new Map;

    function wC(CC) {
      var zC;
      return null === CC ? null : null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
    }

    function bC(CC, zC) {
      return QC.set(CC, zC), () => {
        QC.get(CC) === zC && QC.delete(CC)
      }
    }
  },
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  38259: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => xC,
      C: () => AC,
      E: () => NC,
      H: () => SC,
      I: () => PC,
      M: () => wC,
      c: () => FC,
      f: () => oC,
      g: () => RC,
      h: () => qC,
      i: () => fC,
      m: () => nC,
      q: () => bC,
      r: () => IC,
      u: () => MC,
      w: () => JC,
      z: () => iC
    });
    var QC = ZC(9285);

    function wC(CC) {
      return Math.floor(CC).toLocaleString("en-US")
    }
    const bC = 2e3,
      nC = .005,
      fC = .001,
      oC = 2,
      qC = "Fluid Tank",
      FC = "Coolant Mixer",
      WC = 144;

    function NC(CC) {
      const zC = CC.split("|")[0];
      return (0, QC.h)(zC) ? zC === QC.b ? "cryo" : "water" : null
    }
    const MC = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      gC = 63;

    function SC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ZC = zC ? function(CC, zC, ZC) {
        const QC = MC.findIndex((QC => {
          let [wC, bC, nC] = QC;
          return wC === CC && bC === zC && nC === ZC
        }));
        return QC < 0 ? 0 : 1 << QC
      }(zC[0], zC[1], zC[2]) : 0;
      return "maker" === CC ? {
        kind: CC,
        faces: ZC
      } : "user" === CC ? {
        kind: CC,
        faces: gC & ~ZC
      } : {
        kind: CC,
        faces: gC
      }
    }

    function pC(CC) {
      return "pipe" === CC || "tank" === CC || "maker" === CC
    }

    function PC(CC, zC, ZC) {
      return 0 !== (CC.faces & 1 << ZC) && 0 !== (zC.faces & 1 << (1 ^ ZC)) && (pC(CC.kind) || pC(zC.kind))
    }
    const GC = (CC, zC, ZC, QC) => ({
        input: CC,
        inputAmount: QC,
        output: zC,
        outputAmount: ZC
      }),
      RC = {
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
          recipes: [GC("Uranium Grit", "Uranium Pellet", 1, 12), GC("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [GC("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: WC,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function AC(CC, zC) {
      return 1e3 * (null !== zC && void 0 !== zC ? zC : 0) / CC.opMs
    }

    function xC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZC = AC(RC["Coolant Mixer"], WC) * zC;
      return CC <= 0 ? 0 : Math.ceil(CC / ZC - 1e-9)
    }
    const JC = "baf2Water",
      IC = "baf2waterclose",
      iC = "baf2wateropen"
  },
  38256: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => vC,
      f: () => AC,
      g: () => RC
    });
    var QC = ZC(9194),
      wC = ZC(9217),
      bC = ZC(9285),
      nC = ZC(38259),
      fC = ZC(9279);
    const oC = (0, nC.H)("pipe"),
      qC = (0, nC.H)("tank"),
      FC = (0, nC.H)("port"),
      WC = "Reactor Port";

    function NC(CC, zC, ZC) {
      const QC = new Set([bC.c, bC.b, WC, ...zC, ...ZC, ...CC ? [nC.h] : []]);
      return {
        makers: new Set(zC),
        roots: QC
      }
    }
    const MC = {
        water: NC(!0, ["Condenser"], ["Centrifuge", "Synthesizer", nC.c]),
        cryo: NC(!1, [nC.c], [])
      },
      gC = new Set([...MC.water.roots, ...MC.cryo.roots]),
      SC = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      pC = wC.d.map((CC => SC[CC])),
      PC = pC.map((CC => {
        let [zC, ZC, QC] = CC;
        return nC.u.findIndex((CC => {
          let [wC, bC, nC] = CC;
          return wC === zC && bC === ZC && nC === QC
        }))
      }));

    function GC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ZC = QC.g[CC],
        wC = null === ZC || void 0 === ZC ? void 0 : ZC.meta.rootName,
        NC = MC[zC];
      if (!wC || !NC.roots.has(wC)) return null;
      if ((0, bC.h)(wC)) return (0, nC.E)(ZC.name) === zC ? oC : null;
      if (wC === nC.h) return qC;
      if (wC === WC) return ZC.name.endsWith("|Water") ? FC : null;
      const [gC, SC] = fC.f[(ZC.meta.rot || 1) - 1];
      return (0, nC.H)(NC.makers.has(wC) ? "maker" : "user", [-gC, 0, -SC])
    }

    function RC(CC, zC, ZC, wC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: fC
      } = MC[bC];
      return pC.some(((qC, FC) => {
        var WC, NC;
        let [MC, gC, SC] = qC;
        const pC = CC(zC + MC, ZC + gC, wC + SC),
          RC = GC(pC, bC);
        return null !== RC && fC.has(null !== (WC = null === (NC = QC.g[pC]) || void 0 === NC ? void 0 : NC.meta.rootName) && void 0 !== WC ? WC : "") && !(0, nC.I)(oC, RC, PC[FC])
      }))
    }

    function AC(CC) {
      const zC = QC.g[CC];
      return zC ? (0, nC.E)(zC.name) : null
    }
    let xC = null;

    function JC(CC) {
      if (!xC) {
        xC = new Map;
        for (const CC of ["water", "cryo"])
          for (let zC = 0; zC < 64; zC++)
            for (const ZC of [!1, !0]) xC.set((0, bC.l)(CC, zC, ZC), {
              NM: CC,
              mask: zC,
              full: ZC
            })
      }
      return xC.get(CC)
    }
    const IC = new Map(Array.from({
      length: bC.f + 1
    }, ((CC, zC) => [(0, bC.n)(zC), zC])));

    function iC(CC, zC, ZC, wC, bC, nC) {
      return pC.some(((fC, oC) => {
        var qC, FC, WC;
        let [NC, MC, gC] = fC;
        if (0 === (nC >> oC & 1)) return !1;
        const SC = null !== (qC = null === (FC = QC.g[CC(zC + NC, ZC + MC, wC + gC)]) || void 0 === FC ? void 0 : FC.name) && void 0 !== qC ? qC : "",
          pC = JC(SC);
        return pC ? pC.NM === bC && pC.full : (null !== (WC = function(CC) {
          var zC;
          return null !== (zC = IC.get(CC)) && void 0 !== zC ? zC : null
        }(SC)) && void 0 !== WC ? WC : 0) > 0
      }))
    }
    class vC {
      constructor() {
        this.reshapeOffsets = pC
      }
      handles(CC) {
        return null !== AC(CC)
      }
      affects(CC) {
        var zC, ZC;
        return gC.has(null !== (zC = null === (ZC = QC.g[CC]) || void 0 === ZC ? void 0 : ZC.meta.rootName) && void 0 !== zC ? zC : "")
      }
      placedBy(CC) {
        var zC;
        return (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta.rootName) === bC.b ? bC.c : null
      }
      shape(CC, zC, ZC, wC, fC, qC) {
        var FC, WC, NC;
        const MC = null !== (FC = null === (WC = QC.g[fC]) || void 0 === WC ? void 0 : WC.name) && void 0 !== FC ? FC : "",
          gC = qC || MC !== bC.c ? null !== (NC = (0, nC.E)(MC)) && void 0 !== NC ? NC : "water" : function(CC, zC, ZC, QC) {
            return pC.some(((wC, bC) => {
              let [fC, qC, FC] = wC;
              const WC = GC(CC(zC + fC, ZC + qC, QC + FC), "cryo");
              return null !== WC && "port" !== WC.kind && (0, nC.I)(oC, WC, PC[bC])
            })) ? "cryo" : "water"
          }(CC, zC, ZC, wC),
          SC = function(CC, zC, ZC, QC) {
            let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              bC = 0;
            return pC.forEach(((fC, qC) => {
              let [FC, WC, NC] = fC;
              const MC = GC(CC(zC + FC, ZC + WC, QC + NC), wC);
              MC && (0, nC.I)(oC, MC, PC[qC]) && (bC |= 1 << qC)
            })), bC
          }(CC, zC, ZC, wC, gC),
          RC = qC ? function(CC) {
            var zC;
            return !0 === (null === (zC = JC(CC)) || void 0 === zC ? void 0 : zC.full)
          }(MC) : iC(CC, zC, ZC, wC, gC, SC);
        return (0, QC.k)((0, bC.l)(gC, SC, RC))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);