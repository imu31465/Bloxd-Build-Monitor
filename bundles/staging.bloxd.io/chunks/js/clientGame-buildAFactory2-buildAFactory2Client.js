export const id = 11;
export const ids = [11];
export const modules = {
  36616: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      g: () => KS,
      j: () => kS,
      k: () => fS
    });
    var tS = gS(34223),
      bS = gS(36624),
      XS = gS(36632),
      xS = gS(8920),
      NS = gS(1522),
      qS = gS(64),
      uS = gS(77),
      IS = gS(1181);

    function fS() {
      var SS;
      return (0, NS.i)(bS.e, (0, bS.s)()), (0, IS.jsx)(IS.Fragment, {
        children: null === (SS = (0, bS.s)()) || void 0 === SS ? void 0 : SS.content
      })
    }

    function kS(SS) {
      var HS;
      let {
        show: gS
      } = SS;
      (0, NS.i)(bS.e, (0, bS.s)());
      const uS = null === (HS = (0, bS.s)()) || void 0 === HS ? void 0 : HS.menu;
      return (0, qS.useEffect)((() => {
        var SS;
        gS || (null === uS || void 0 === uS || null === (SS = uS.onClose) || void 0 === SS || SS.call(uS), (0, XS.s)())
      }), [gS, uS]), (0, qS.useEffect)((() => gS ? (0, xS.c)(XS.v, XS.h) : void 0), [gS]), (0, IS.jsx)(tS.b, {
        showing: gS,
        globallyUniqueKey: "clientGameMenu",
        children: null === uS || void 0 === uS ? void 0 : uS.content
      })
    }

    function aS(SS) {
      let {
        placement: HS = "bottom"
      } = SS;
      return (0, IS.jsx)("div", {
        id: `clientGameHud-${HS}`,
        style: {
          display: "contents"
        }
      })
    }

    function KS(SS) {
      let {
        children: HS,
        placement: gS = "bottom"
      } = SS;
      const [tS, bS] = (0, qS.useState)(null);
      return (0, qS.useEffect)((() => {
        bS(document.getElementById(`clientGameHud-${gS}`))
      }), [gS]), tS ? (0, uS.createPortal)(HS, tS) : null
    }
  },
  34223: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS
    });
    var tS = gS(4669),
      bS = gS(4675);

    function XS(SS) {
      let {
        children: HS,
        showing: gS,
        globallyUniqueKey: XS,
        alwaysMountChildren: xS = !1,
        doGameplayStartStopOnShow: NS = !0,
        keepsMovement: qS = !1
      } = SS;
      return (0, bS.c)(!0, gS, XS, qS), (0, tS.c)(NS, gS), gS || xS ? HS : null
    }
  },
  5182: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1181);

    function xS(SS) {
      let {
        options: HS,
        value: gS,
        onChange: tS,
        ariaLabel: xS,
        className: NS,
        reselectable: qS = !1,
        keepsFocus: uS = !1,
        padTabs: IS
      } = SS;
      const fS = void 0 !== IS;
      return (0, XS.jsx)("div", {
        className: bS()("SegmentedToggle", NS),
        role: "group",
        "aria-label": xS,
        "data-pad-tabs": IS,
        children: HS.map((SS => {
          const HS = SS.value === gS;
          return (0, XS.jsx)("button", {
            type: "button",
            "aria-pressed": HS,
            "data-pad-tab": fS || void 0,
            "data-pad-selected": fS && HS ? "true" : void 0,
            "data-pad-default-focus": fS && HS || void 0,
            "aria-label": SS.ariaLabel,
            title: SS.ariaLabel,
            className: bS()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: HS
            }),
            onMouseDown: uS ? SS => {
              SS.preventDefault()
            } : void 0,
            onClick: () => {
              HS && !qS || tS(SS.value)
            },
            children: SS.label
          }, SS.value)
        }))
      })
    }
  },
  8920: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      c: () => bS
    });
    let tS = null;
    const bS = function(SS) {
        const HS = {
          cycle: SS,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tS = HS, () => {
          tS === HS && (tS = null)
        }
      },
      XS = () => {
        var SS;
        return null !== (SS = tS) && void 0 !== SS && SS.canCycle() ? tS.cycle : null
      }
  },
  36854: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      d: () => XS
    });
    const tS = new Map;

    function bS(SS) {
      var HS;
      return null === SS ? null : null !== (HS = tS.get(SS)) && void 0 !== HS ? HS : null
    }

    function XS(SS, HS) {
      return tS.set(SS, HS), () => {
        tS.get(SS) === HS && tS.delete(SS)
      }
    }
  },
  36632: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => jS,
      l: () => GS,
      m: () => NS,
      p: () => kS,
      s: () => CS,
      t: () => fS,
      u: () => PS,
      v: () => KS,
      w: () => nS
    });
    var tS = gS(24),
      bS = gS(31);
    const XS = "clientGameInventoryButtonsChanged",
      xS = new Map;

    function NS() {
      return [...xS.values()].sort(((SS, HS) => {
        var gS, tS;
        return (null !== (gS = SS.order) && void 0 !== gS ? gS : 0) - (null !== (tS = HS.order) && void 0 !== tS ? tS : 0)
      }))
    }
    let qS = null;

    function uS(SS) {
      qS = SS
    }
    let IS = !1;

    function fS(SS) {
      IS = !0;
      try {
        SS.onClick()
      } finally {
        IS = !1
      }
      SS.panel && "clientGame" === tS.b.get("openInGameMenuName") && uS(SS.id)
    }

    function kS() {
      return IS
    }

    function aS() {
      return NS().filter((SS => SS.panel && !SS.disabled))
    }

    function KS(SS) {
      const HS = aS(),
        gS = HS.findIndex((SS => SS.id === qS));
      return !(gS < 0 || HS.length < 2) && (fS(HS[(gS + SS + HS.length) % HS.length]), !0)
    }

    function jS() {
      return null !== qS && aS().length > 1
    }

    function GS() {
      uS(null)
    }

    function CS() {
      "inventory" !== tS.b.get("openInGameMenuName") && uS(null)
    }

    function nS() {
      const SS = qS;
      return uS(null), SS
    }

    function PS(SS) {
      return xS.set(SS.id, SS), bS.k.cj(XS, NS(), !0), () => {
        xS.get(SS.id) === SS && (xS.delete(SS.id), bS.k.cj(XS, NS()))
      }
    }
  },
  36624: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => GS,
      k: () => CS,
      o: () => kS,
      s: () => uS,
      u: () => jS,
      w: () => aS,
      y: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(36632);
    const NS = "clientGameUiChanged";
    let qS = null;

    function uS() {
      return qS
    }

    function IS(SS, HS) {
      const gS = {
        content: SS,
        menu: HS
      };
      return qS = gS, bS.k.cj(NS, qS, !0), () => {
        qS === gS && (qS = null, KS = !1, GS(), bS.k.cj(NS, null))
      }
    }
    let fS = null;

    function kS() {
      return fS
    }

    function aS(SS) {
      return fS = SS, () => {
        fS === SS && (fS = null)
      }
    }
    let KS = !1;

    function jS() {
      const SS = tS.b.get("openInGameMenuName");
      "clientGame" !== SS && (KS = "inventory" === SS), (0, xS.p)() || (0, xS.l)(), (0, XS.u)(XS.d), tS.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GS() {
      nS(!1)
    }

    function CS() {
      nS(KS)
    }

    function nS(SS) {
      "clientGame" === tS.b.get("openInGameMenuName") && tS.b.set({
        openInGameMenuName: SS ? "inventory" : null
      }), SS || (0, xS.l)(), KS = !1
    }
  },
  38462: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => aS,
      C: () => wS,
      D: () => ZS,
      H: () => DS,
      L: () => QS,
      M: () => kS,
      Q: () => jS,
      T: () => CS,
      U: () => bS,
      e: () => IS,
      i: () => qS,
      l: () => PS,
      m: () => uS,
      n: () => NS,
      q: () => xS,
      u: () => XS,
      x: () => hS
    });
    var tS = gS(9453);

    function bS(SS) {
      return Math.floor(SS).toLocaleString("en-US")
    }
    const XS = 2e3,
      xS = .005,
      NS = .001,
      qS = 2,
      uS = "Fluid Tank",
      IS = "Coolant Mixer",
      fS = 144;

    function kS(SS) {
      const HS = SS.split("|")[0];
      return (0, tS.m)(HS) ? HS === tS.e ? "cryo" : "water" : null
    }
    const aS = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      KS = 63;

    function jS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const gS = HS ? function(SS, HS, gS) {
        const tS = aS.findIndex((tS => {
          let [bS, XS, xS] = tS;
          return bS === SS && XS === HS && xS === gS
        }));
        return tS < 0 ? 0 : 1 << tS
      }(HS[0], HS[1], HS[2]) : 0;
      return "maker" === SS ? {
        kind: SS,
        faces: gS
      } : "user" === SS ? {
        kind: SS,
        faces: KS & ~gS
      } : {
        kind: SS,
        faces: KS
      }
    }

    function GS(SS) {
      return "pipe" === SS || "tank" === SS || "maker" === SS
    }

    function CS(SS, HS, gS) {
      return 0 !== (SS.faces & 1 << gS) && 0 !== (HS.faces & 1 << (1 ^ gS)) && (GS(SS.kind) || GS(HS.kind))
    }
    const nS = (SS, HS, gS, tS) => ({
        input: SS,
        inputAmount: tS,
        output: HS,
        outputAmount: gS
      }),
      PS = {
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
          recipes: [nS("Uranium Grit", "Uranium Pellet", 1, 12), nS("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [nS("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: fS,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function QS(SS, HS) {
      return 1e3 * (null !== HS && void 0 !== HS ? HS : 0) / SS.opMs
    }

    function DS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gS = QS(PS["Coolant Mixer"], fS) * HS;
      return SS <= 0 ? 0 : Math.ceil(SS / gS - 1e-9)
    }
    const wS = "baf2Water",
      hS = "baf2waterclose",
      ZS = "baf2wateropen"
  },
  38460: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => JS,
      h: () => QS,
      i: () => PS
    });
    var tS = gS(9361),
      bS = gS(9379),
      XS = gS(9453),
      xS = gS(38462),
      NS = gS(9447);
    const qS = (0, xS.Q)("pipe"),
      uS = (0, xS.Q)("tank"),
      IS = (0, xS.Q)("port"),
      fS = "Reactor Port";

    function kS(SS, HS, gS) {
      const tS = new Set([XS.f, XS.e, fS, ...HS, ...gS, ...SS ? [xS.m] : []]);
      return {
        makers: new Set(HS),
        roots: tS
      }
    }
    const aS = {
        water: kS(!0, ["Condenser"], ["Centrifuge", "Synthesizer", xS.e]),
        cryo: kS(!1, [xS.e], [])
      },
      KS = new Set([...aS.water.roots, ...aS.cryo.roots]),
      jS = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      GS = bS.d.map((SS => jS[SS])),
      CS = GS.map((SS => {
        let [HS, gS, tS] = SS;
        return xS.A.findIndex((SS => {
          let [bS, XS, xS] = SS;
          return bS === HS && XS === gS && xS === tS
        }))
      }));

    function nS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const gS = tS.j[SS],
        bS = null === gS || void 0 === gS ? void 0 : gS.meta.rootName,
        kS = aS[HS];
      if (!bS || !kS.roots.has(bS)) return null;
      if ((0, XS.m)(bS)) return (0, xS.M)(gS.name) === HS ? qS : null;
      if (bS === xS.m) return uS;
      if (bS === fS) return gS.name.endsWith("|Water") ? IS : null;
      const [KS, jS] = NS.f[(gS.meta.rot || 1) - 1];
      return (0, xS.Q)(kS.makers.has(bS) ? "maker" : "user", [-KS, 0, -jS])
    }

    function PS(SS, HS, gS, bS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: NS
      } = aS[XS];
      return GS.some(((uS, IS) => {
        var fS, kS;
        let [aS, KS, jS] = uS;
        const GS = SS(HS + aS, gS + KS, bS + jS),
          PS = nS(GS, XS);
        return null !== PS && NS.has(null !== (fS = null === (kS = tS.j[GS]) || void 0 === kS ? void 0 : kS.meta.rootName) && void 0 !== fS ? fS : "") && !(0, xS.T)(qS, PS, CS[IS])
      }))
    }

    function QS(SS) {
      const HS = tS.j[SS];
      return HS ? (0, xS.M)(HS.name) : null
    }
    let DS = null;

    function wS(SS) {
      if (!DS) {
        DS = new Map;
        for (const SS of ["water", "cryo"])
          for (let HS = 0; HS < 64; HS++)
            for (const gS of [!1, !0]) DS.set((0, XS.q)(SS, HS, gS), {
              aa: SS,
              mask: HS,
              full: gS
            })
      }
      return DS.get(SS)
    }
    const hS = new Map(Array.from({
      length: XS.j + 1
    }, ((SS, HS) => [(0, XS.t)(HS), HS])));

    function ZS(SS, HS, gS, bS, XS, xS) {
      return GS.some(((NS, qS) => {
        var uS, IS, fS;
        let [kS, aS, KS] = NS;
        if (0 === (xS >> qS & 1)) return !1;
        const jS = null !== (uS = null === (IS = tS.j[SS(HS + kS, gS + aS, bS + KS)]) || void 0 === IS ? void 0 : IS.name) && void 0 !== uS ? uS : "",
          GS = wS(jS);
        return GS ? GS.aa === XS && GS.full : (null !== (fS = function(SS) {
          var HS;
          return null !== (HS = hS.get(SS)) && void 0 !== HS ? HS : null
        }(jS)) && void 0 !== fS ? fS : 0) > 0
      }))
    }
    class JS {
      constructor() {
        this.reshapeOffsets = GS
      }
      handles(SS) {
        return null !== QS(SS)
      }
      affects(SS) {
        var HS, gS;
        return KS.has(null !== (HS = null === (gS = tS.j[SS]) || void 0 === gS ? void 0 : gS.meta.rootName) && void 0 !== HS ? HS : "")
      }
      placedBy(SS) {
        var HS;
        return (null === (HS = tS.j[SS]) || void 0 === HS ? void 0 : HS.meta.rootName) === XS.e ? XS.f : null
      }
      shape(SS, HS, gS, bS, NS, uS) {
        var IS, fS, kS;
        const aS = null !== (IS = null === (fS = tS.j[NS]) || void 0 === fS ? void 0 : fS.name) && void 0 !== IS ? IS : "",
          KS = uS || aS !== XS.f ? null !== (kS = (0, xS.M)(aS)) && void 0 !== kS ? kS : "water" : function(SS, HS, gS, tS) {
            return GS.some(((bS, XS) => {
              let [NS, uS, IS] = bS;
              const fS = nS(SS(HS + NS, gS + uS, tS + IS), "cryo");
              return null !== fS && "port" !== fS.kind && (0, xS.T)(qS, fS, CS[XS])
            })) ? "cryo" : "water"
          }(SS, HS, gS, bS),
          jS = function(SS, HS, gS, tS) {
            let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              XS = 0;
            return GS.forEach(((NS, uS) => {
              let [IS, fS, kS] = NS;
              const aS = nS(SS(HS + IS, gS + fS, tS + kS), bS);
              aS && (0, xS.T)(qS, aS, CS[uS]) && (XS |= 1 << uS)
            })), XS
          }(SS, HS, gS, bS, KS),
          PS = uS ? function(SS) {
            var HS;
            return !0 === (null === (HS = wS(SS)) || void 0 === HS ? void 0 : HS.full)
          }(aS) : ZS(SS, HS, gS, bS, KS, jS);
        return (0, tS.n)((0, XS.q)(KS, jS, PS))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);