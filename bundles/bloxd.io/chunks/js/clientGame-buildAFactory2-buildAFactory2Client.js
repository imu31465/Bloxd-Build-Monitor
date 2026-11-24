export const id = 11;
export const ids = [11];
export const modules = {
  36577: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      g: () => ID,
      i: () => UD,
      l: () => AD
    });
    var pD = wD(34206),
      sD = wD(36580),
      KD = wD(36586),
      rD = wD(8726),
      LD = wD(1442),
      cD = wD(58),
      gD = wD(79),
      RD = wD(1096);

    function AD() {
      var DD;
      return (0, LD.k)(sD.c, (0, sD.p)()), (0, RD.jsx)(RD.Fragment, {
        children: null === (DD = (0, sD.p)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function UD(DD) {
      var zD;
      let {
        show: wD
      } = DD;
      (0, LD.k)(sD.c, (0, sD.p)());
      const gD = null === (zD = (0, sD.p)()) || void 0 === zD ? void 0 : zD.menu;
      return (0, cD.useEffect)((() => {
        var DD;
        wD || (null === gD || void 0 === gD || null === (DD = gD.onClose) || void 0 === DD || DD.call(gD), (0, KD.q)())
      }), [wD, gD]), (0, cD.useEffect)((() => wD ? (0, rD.g)(KD.y, KD.h) : void 0), [wD]), (0, RD.jsx)(pD.d, {
        showing: wD,
        globallyUniqueKey: "clientGameMenu",
        children: null === gD || void 0 === gD ? void 0 : gD.content
      })
    }

    function fD(DD) {
      let {
        placement: zD = "bottom"
      } = DD;
      return (0, RD.jsx)("div", {
        id: `clientGameHud-${zD}`,
        style: {
          display: "contents"
        }
      })
    }

    function ID(DD) {
      let {
        children: zD,
        placement: wD = "bottom"
      } = DD;
      const [pD, sD] = (0, cD.useState)(null);
      return (0, cD.useEffect)((() => {
        sD(document.getElementById(`clientGameHud-${wD}`))
      }), [wD]), pD ? (0, gD.createPortal)(zD, pD) : null
    }
  },
  34206: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(4555),
      sD = wD(4562);

    function KD(DD) {
      let {
        children: zD,
        showing: wD,
        globallyUniqueKey: KD,
        alwaysMountChildren: rD = !1,
        doGameplayStartStopOnShow: LD = !0,
        keepsMovement: cD = !1
      } = DD;
      return (0, sD.e)(!0, wD, KD, cD), (0, pD.b)(LD, wD), wD || rD ? zD : null
    }
  },
  5049: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1096);

    function rD(DD) {
      let {
        options: zD,
        value: wD,
        onChange: pD,
        ariaLabel: rD,
        className: LD,
        reselectable: cD = !1,
        keepsFocus: gD = !1,
        padTabs: RD
      } = DD;
      const AD = void 0 !== RD;
      return (0, KD.jsx)("div", {
        className: sD()("SegmentedToggle", LD),
        role: "group",
        "aria-label": rD,
        "data-pad-tabs": RD,
        children: zD.map((DD => {
          const zD = DD.value === wD;
          return (0, KD.jsx)("button", {
            type: "button",
            "aria-pressed": zD,
            "data-pad-tab": AD || void 0,
            "data-pad-selected": AD && zD ? "true" : void 0,
            "data-pad-default-focus": AD && zD || void 0,
            "aria-label": DD.ariaLabel,
            title: DD.ariaLabel,
            className: sD()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: zD
            }),
            onMouseDown: gD ? DD => {
              DD.preventDefault()
            } : void 0,
            onClick: () => {
              zD && !cD || pD(DD.value)
            },
            children: DD.label
          }, DD.value)
        }))
      })
    }
  },
  8726: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      g: () => sD
    });
    let pD = null;
    const sD = function(DD) {
        const zD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pD = zD, () => {
          pD === zD && (pD = null)
        }
      },
      KD = () => {
        var DD;
        return null !== (DD = pD) && void 0 !== DD && DD.canCycle() ? pD.cycle : null
      }
  },
  36791: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      d: () => KD
    });
    const pD = new Map;

    function sD(DD) {
      var zD;
      return null === DD ? null : null !== (zD = pD.get(DD)) && void 0 !== zD ? zD : null
    }

    function KD(DD, zD) {
      return pD.set(DD, zD), () => {
        pD.get(DD) === zD && pD.delete(DD)
      }
    }
  },
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  38413: (DD, zD, wD) => {
    wD.d(zD, {
      B: () => fD,
      F: () => ED,
      G: () => XD,
      H: () => JD,
      I: () => OD,
      J: () => UD,
      L: () => BD,
      P: () => hD,
      R: () => sD,
      e: () => RD,
      i: () => cD,
      m: () => MD,
      o: () => gD,
      p: () => LD,
      t: () => rD,
      w: () => KD,
      z: () => QD
    });
    var pD = wD(9271);

    function sD(DD) {
      return Math.floor(DD).toLocaleString("en-US")
    }
    const KD = 2e3,
      rD = .005,
      LD = .001,
      cD = 2,
      gD = "Fluid Tank",
      RD = "Coolant Mixer",
      AD = 144;

    function UD(DD) {
      const zD = DD.split("|")[0];
      return (0, pD.l)(zD) ? zD === pD.e ? "cryo" : "water" : null
    }
    const fD = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      ID = 63;

    function BD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const wD = zD ? function(DD, zD, wD) {
        const pD = fD.findIndex((pD => {
          let [sD, KD, rD] = pD;
          return sD === DD && KD === zD && rD === wD
        }));
        return pD < 0 ? 0 : 1 << pD
      }(zD[0], zD[1], zD[2]) : 0;
      return "maker" === DD ? {
        kind: DD,
        faces: wD
      } : "user" === DD ? {
        kind: DD,
        faces: ID & ~wD
      } : {
        kind: DD,
        faces: ID
      }
    }

    function GD(DD) {
      return "pipe" === DD || "tank" === DD || "maker" === DD
    }

    function hD(DD, zD, wD) {
      return 0 !== (DD.faces & 1 << wD) && 0 !== (zD.faces & 1 << (1 ^ wD)) && (GD(DD.kind) || GD(zD.kind))
    }
    const nD = (DD, zD, wD, pD) => ({
        input: DD,
        inputAmount: pD,
        output: zD,
        outputAmount: wD
      }),
      MD = {
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
          recipes: [nD("Uranium Grit", "Uranium Pellet", 1, 12), nD("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [nD("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: AD,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function OD(DD, zD) {
      return 1e3 * (null !== zD && void 0 !== zD ? zD : 0) / DD.opMs
    }

    function JD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const wD = OD(MD["Coolant Mixer"], AD) * zD;
      return DD <= 0 ? 0 : Math.ceil(DD / wD - 1e-9)
    }
    const ED = "baf2Water",
      QD = "baf2waterclose",
      XD = "baf2wateropen"
  },
  38409: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => VD,
      f: () => OD,
      i: () => MD
    });
    var pD = wD(9198),
      sD = wD(9220),
      KD = wD(9271),
      rD = wD(38413),
      LD = wD(9264);
    const cD = (0, rD.L)("pipe"),
      gD = (0, rD.L)("tank"),
      RD = (0, rD.L)("port"),
      AD = "Reactor Port";

    function UD(DD, zD, wD) {
      const pD = new Set([KD.f, KD.e, AD, ...zD, ...wD, ...DD ? [rD.o] : []]);
      return {
        makers: new Set(zD),
        roots: pD
      }
    }
    const fD = {
        water: UD(!0, ["Condenser"], ["Centrifuge", "Synthesizer", rD.e]),
        cryo: UD(!1, [rD.e], [])
      },
      ID = new Set([...fD.water.roots, ...fD.cryo.roots]),
      BD = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      GD = sD.f.map((DD => BD[DD])),
      hD = GD.map((DD => {
        let [zD, wD, pD] = DD;
        return rD.B.findIndex((DD => {
          let [sD, KD, rD] = DD;
          return sD === zD && KD === wD && rD === pD
        }))
      }));

    function nD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const wD = pD.l[DD],
        sD = null === wD || void 0 === wD ? void 0 : wD.meta.rootName,
        UD = fD[zD];
      if (!sD || !UD.roots.has(sD)) return null;
      if ((0, KD.l)(sD)) return (0, rD.J)(wD.name) === zD ? cD : null;
      if (sD === rD.o) return gD;
      if (sD === AD) return wD.name.endsWith("|Water") ? RD : null;
      const [ID, BD] = LD.c[(wD.meta.rot || 1) - 1];
      return (0, rD.L)(UD.makers.has(sD) ? "maker" : "user", [-ID, 0, -BD])
    }

    function MD(DD, zD, wD, sD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: LD
      } = fD[KD];
      return GD.some(((gD, RD) => {
        var AD, UD;
        let [fD, ID, BD] = gD;
        const GD = DD(zD + fD, wD + ID, sD + BD),
          MD = nD(GD, KD);
        return null !== MD && LD.has(null !== (AD = null === (UD = pD.l[GD]) || void 0 === UD ? void 0 : UD.meta.rootName) && void 0 !== AD ? AD : "") && !(0, rD.P)(cD, MD, hD[RD])
      }))
    }

    function OD(DD) {
      const zD = pD.l[DD];
      return zD ? (0, rD.J)(zD.name) : null
    }
    let JD = null;

    function ED(DD) {
      if (!JD) {
        JD = new Map;
        for (const DD of ["water", "cryo"])
          for (let zD = 0; zD < 64; zD++)
            for (const wD of [!1, !0]) JD.set((0, KD.m)(DD, zD, wD), {
              Af: DD,
              mask: zD,
              full: wD
            })
      }
      return JD.get(DD)
    }
    const QD = new Map(Array.from({
      length: KD.j + 1
    }, ((DD, zD) => [(0, KD.p)(zD), zD])));

    function XD(DD, zD, wD, sD, KD, rD) {
      return GD.some(((LD, cD) => {
        var gD, RD, AD;
        let [UD, fD, ID] = LD;
        if (0 === (rD >> cD & 1)) return !1;
        const BD = null !== (gD = null === (RD = pD.l[DD(zD + UD, wD + fD, sD + ID)]) || void 0 === RD ? void 0 : RD.name) && void 0 !== gD ? gD : "",
          GD = ED(BD);
        return GD ? GD.Af === KD && GD.full : (null !== (AD = function(DD) {
          var zD;
          return null !== (zD = QD.get(DD)) && void 0 !== zD ? zD : null
        }(BD)) && void 0 !== AD ? AD : 0) > 0
      }))
    }
    class VD {
      constructor() {
        this.reshapeOffsets = GD
      }
      handles(DD) {
        return null !== OD(DD)
      }
      affects(DD) {
        var zD, wD;
        return ID.has(null !== (zD = null === (wD = pD.l[DD]) || void 0 === wD ? void 0 : wD.meta.rootName) && void 0 !== zD ? zD : "")
      }
      placedBy(DD) {
        var zD;
        return (null === (zD = pD.l[DD]) || void 0 === zD ? void 0 : zD.meta.rootName) === KD.e ? KD.f : null
      }
      shape(DD, zD, wD, sD, LD, gD) {
        var RD, AD, UD;
        const fD = null !== (RD = null === (AD = pD.l[LD]) || void 0 === AD ? void 0 : AD.name) && void 0 !== RD ? RD : "",
          ID = gD || fD !== KD.f ? null !== (UD = (0, rD.J)(fD)) && void 0 !== UD ? UD : "water" : function(DD, zD, wD, pD) {
            return GD.some(((sD, KD) => {
              let [LD, gD, RD] = sD;
              const AD = nD(DD(zD + LD, wD + gD, pD + RD), "cryo");
              return null !== AD && "port" !== AD.kind && (0, rD.P)(cD, AD, hD[KD])
            })) ? "cryo" : "water"
          }(DD, zD, wD, sD),
          BD = function(DD, zD, wD, pD) {
            let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              KD = 0;
            return GD.forEach(((LD, gD) => {
              let [RD, AD, UD] = LD;
              const fD = nD(DD(zD + RD, wD + AD, pD + UD), sD);
              fD && (0, rD.P)(cD, fD, hD[gD]) && (KD |= 1 << gD)
            })), KD
          }(DD, zD, wD, sD, ID),
          MD = gD ? function(DD) {
            var zD;
            return !0 === (null === (zD = ED(DD)) || void 0 === zD ? void 0 : zD.full)
          }(fD) : XD(DD, zD, wD, sD, ID, BD);
        return (0, pD.p)((0, KD.m)(ID, BD, MD))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);