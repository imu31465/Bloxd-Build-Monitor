export const id = 11;
export const ids = [11];
export const modules = {
  36416: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => jT,
      g: () => vT,
      j: () => CT,
      k: () => AT
    });
    var lT = cT(9359),
      MT = cT(36423),
      KT = cT(36432),
      OT = cT(8746),
      yT = cT(1461),
      fT = cT(71),
      xT = cT(94),
      IT = cT(1099);

    function AT() {
      var TT;
      return (0, yT.i)(MT.b, (0, MT.j)()), (0, IT.jsx)(IT.Fragment, {
        children: null === (TT = (0, MT.j)()) || void 0 === TT ? void 0 : TT.content
      })
    }

    function CT(TT) {
      var kT;
      let {
        show: cT
      } = TT;
      (0, yT.i)(MT.b, (0, MT.j)());
      const xT = null === (kT = (0, MT.j)()) || void 0 === kT ? void 0 : kT.menu;
      return (0, fT.useEffect)((() => {
        var TT;
        cT || (null === xT || void 0 === xT || null === (TT = xT.onClose) || void 0 === TT || TT.call(xT), (0, KT.q)())
      }), [cT, xT]), (0, fT.useEffect)((() => cT ? (0, OT.e)(KT.A, KT.h) : void 0), [cT]), (0, IT.jsx)(lT.b, {
        showing: cT,
        globallyUniqueKey: "clientGameMenu",
        children: null === xT || void 0 === xT ? void 0 : xT.content
      })
    }

    function jT(TT) {
      let {
        placement: kT = "bottom"
      } = TT;
      return (0, IT.jsx)("div", {
        id: `clientGameHud-${kT}`,
        style: {
          display: "contents"
        }
      })
    }

    function vT(TT) {
      let {
        children: kT,
        placement: cT = "bottom"
      } = TT;
      const [lT, MT] = (0, fT.useState)(null);
      return (0, fT.useEffect)((() => {
        MT(document.getElementById(`clientGameHud-${cT}`))
      }), [cT]), lT ? (0, xT.createPortal)(kT, lT) : null
    }
  },
  9359: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(4521),
      MT = cT(4528);

    function KT(TT) {
      let {
        children: kT,
        showing: cT,
        globallyUniqueKey: KT,
        alwaysMountChildren: OT = !1,
        doGameplayStartStopOnShow: yT = !0,
        keepsMovement: fT = !1
      } = TT;
      return (0, MT.c)(!0, cT, KT, fT), (0, lT.e)(yT, cT), cT || OT ? kT : null
    }
  },
  4968: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1099);

    function OT(TT) {
      let {
        options: kT,
        value: cT,
        onChange: lT,
        ariaLabel: OT,
        className: yT,
        reselectable: fT = !1,
        keepsFocus: xT = !1,
        padTabs: IT
      } = TT;
      const AT = void 0 !== IT;
      return (0, KT.jsx)("div", {
        className: MT()("SegmentedToggle", yT),
        role: "group",
        "aria-label": OT,
        "data-pad-tabs": IT,
        children: kT.map((TT => {
          const kT = TT.value === cT;
          return (0, KT.jsx)("button", {
            type: "button",
            "aria-pressed": kT,
            "data-pad-tab": AT || void 0,
            "data-pad-selected": AT && kT ? "true" : void 0,
            "data-pad-default-focus": AT && kT || void 0,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: MT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: kT
            }),
            onMouseDown: xT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              kT && !fT || lT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  8746: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      e: () => MT
    });
    let lT = null;
    const MT = function(TT) {
        const kT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return lT = kT, () => {
          lT === kT && (lT = null)
        }
      },
      KT = () => {
        var TT;
        return null !== (TT = lT) && void 0 !== TT && TT.canCycle() ? lT.cycle : null
      }
  },
  36653: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      e: () => KT
    });
    const lT = new Map;

    function MT(TT) {
      var kT;
      return null === TT ? null : null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : null
    }

    function KT(TT, kT) {
      return lT.set(TT, kT), () => {
        lT.get(TT) === kT && lT.delete(TT)
      }
    }
  },
  36432: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => vT,
      B: () => QT,
      d: () => KT,
      h: () => tT,
      k: () => hT,
      l: () => yT,
      p: () => CT,
      q: () => NT,
      s: () => AT,
      w: () => ST
    });
    var lT = cT(31),
      MT = cT(36);
    const KT = "clientGameInventoryButtonsChanged",
      OT = new Map;

    function yT() {
      return [...OT.values()].sort(((TT, kT) => {
        var cT, lT;
        return (null !== (cT = TT.order) && void 0 !== cT ? cT : 0) - (null !== (lT = kT.order) && void 0 !== lT ? lT : 0)
      }))
    }
    let fT = null;

    function xT(TT) {
      fT = TT
    }
    let IT = !1;

    function AT(TT) {
      IT = !0;
      try {
        TT.onClick()
      } finally {
        IT = !1
      }
      TT.panel && "clientGame" === lT.e.get("openInGameMenuName") && xT(TT.id)
    }

    function CT() {
      return IT
    }

    function jT() {
      return yT().filter((TT => TT.panel && !TT.disabled))
    }

    function vT(TT) {
      const kT = jT(),
        cT = kT.findIndex((TT => TT.id === fT));
      return !(cT < 0 || kT.length < 2) && (AT(kT[(cT + TT + kT.length) % kT.length]), !0)
    }

    function tT() {
      return null !== fT && jT().length > 1
    }

    function hT() {
      xT(null)
    }

    function NT() {
      "inventory" !== lT.e.get("openInGameMenuName") && xT(null)
    }

    function QT() {
      const TT = fT;
      return xT(null), TT
    }

    function ST(TT) {
      return OT.set(TT.id, TT), MT.k.nt(KT, yT(), !0), () => {
        OT.get(TT.id) === TT && (OT.delete(TT.id), MT.k.nt(KT, yT()))
      }
    }
  },
  36423: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT,
      d: () => hT,
      f: () => NT,
      h: () => CT,
      j: () => xT,
      m: () => tT,
      p: () => jT,
      q: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(36432);
    const yT = "clientGameUiChanged";
    let fT = null;

    function xT() {
      return fT
    }

    function IT(TT, kT) {
      const cT = {
        content: TT,
        menu: kT
      };
      return fT = cT, MT.k.nt(yT, fT, !0), () => {
        fT === cT && (fT = null, vT = !1, hT(), MT.k.nt(yT, null))
      }
    }
    let AT = null;

    function CT() {
      return AT
    }

    function jT(TT) {
      return AT = TT, () => {
        AT === TT && (AT = null)
      }
    }
    let vT = !1;

    function tT() {
      const TT = lT.e.get("openInGameMenuName");
      "clientGame" !== TT && (vT = "inventory" === TT), (0, OT.p)() || (0, OT.k)(), (0, KT.p)(KT.c), lT.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function hT() {
      QT(!1)
    }

    function NT() {
      QT(vT)
    }

    function QT(TT) {
      "clientGame" === lT.e.get("openInGameMenuName") && lT.e.set({
        openInGameMenuName: TT ? "inventory" : null
      }), TT || (0, OT.k)(), vT = !1
    }
  },
  38263: (TT, kT, cT) => {
    cT.d(kT, {
      C: () => PT,
      E: () => aT,
      F: () => DT,
      H: () => CT,
      L: () => tT,
      N: () => NT,
      Q: () => MT,
      d: () => IT,
      e: () => fT,
      h: () => ST,
      j: () => xT,
      m: () => yT,
      o: () => OT,
      p: () => KT,
      t: () => rT,
      x: () => jT,
      y: () => FT
    });
    var lT = cT(9537);

    function MT(TT) {
      return Math.floor(TT).toLocaleString("en-US")
    }
    const KT = 2e3,
      OT = .005,
      yT = .001,
      fT = 2,
      xT = "Fluid Tank",
      IT = "Coolant Mixer",
      AT = 144;

    function CT(TT) {
      const kT = TT.split("|")[0];
      return (0, lT.l)(kT) ? kT === lT.c ? "cryo" : "water" : null
    }
    const jT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      vT = 63;

    function tT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const cT = kT ? function(TT, kT, cT) {
        const lT = jT.findIndex((lT => {
          let [MT, KT, OT] = lT;
          return MT === TT && KT === kT && OT === cT
        }));
        return lT < 0 ? 0 : 1 << lT
      }(kT[0], kT[1], kT[2]) : 0;
      return "maker" === TT ? {
        kind: TT,
        faces: cT
      } : "user" === TT ? {
        kind: TT,
        faces: vT & ~cT
      } : {
        kind: TT,
        faces: vT
      }
    }

    function hT(TT) {
      return "pipe" === TT || "tank" === TT || "maker" === TT
    }

    function NT(TT, kT, cT) {
      return 0 !== (TT.faces & 1 << cT) && 0 !== (kT.faces & 1 << (1 ^ cT)) && (hT(TT.kind) || hT(kT.kind))
    }
    const QT = (TT, kT, cT, lT) => ({
        input: TT,
        inputAmount: lT,
        output: kT,
        outputAmount: cT
      }),
      ST = {
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
          recipes: [QT("Uranium Grit", "Uranium Pellet", 1, 12), QT("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [QT("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: AT,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function DT(TT, kT) {
      return 1e3 * (null !== kT && void 0 !== kT ? kT : 0) / TT.opMs
    }

    function aT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cT = DT(ST["Coolant Mixer"], AT) * kT;
      return TT <= 0 ? 0 : Math.ceil(TT / cT - 1e-9)
    }
    const FT = "baf2Water",
      rT = "baf2waterclose",
      PT = "baf2wateropen"
  },
  38258: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => wT,
      d: () => DT,
      f: () => ST
    });
    var lT = cT(9447),
      MT = cT(9472),
      KT = cT(9537),
      OT = cT(38263),
      yT = cT(9533);
    const fT = (0, OT.L)("pipe"),
      xT = (0, OT.L)("tank"),
      IT = (0, OT.L)("port"),
      AT = "Reactor Port";

    function CT(TT, kT, cT) {
      const lT = new Set([KT.g, KT.c, AT, ...kT, ...cT, ...TT ? [OT.j] : []]);
      return {
        makers: new Set(kT),
        roots: lT
      }
    }
    const jT = {
        water: CT(!0, ["Condenser"], ["Centrifuge", "Synthesizer", OT.d]),
        cryo: CT(!1, [OT.d], [])
      },
      vT = new Set([...jT.water.roots, ...jT.cryo.roots]),
      tT = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      hT = MT.c.map((TT => tT[TT])),
      NT = hT.map((TT => {
        let [kT, cT, lT] = TT;
        return OT.x.findIndex((TT => {
          let [MT, KT, OT] = TT;
          return MT === kT && KT === cT && OT === lT
        }))
      }));

    function QT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const cT = lT.i[TT],
        MT = null === cT || void 0 === cT ? void 0 : cT.meta.rootName,
        CT = jT[kT];
      if (!MT || !CT.roots.has(MT)) return null;
      if ((0, KT.l)(MT)) return (0, OT.H)(cT.name) === kT ? fT : null;
      if (MT === OT.j) return xT;
      if (MT === AT) return cT.name.endsWith("|Water") ? IT : null;
      const [vT, tT] = yT.d[(cT.meta.rot || 1) - 1];
      return (0, OT.L)(CT.makers.has(MT) ? "maker" : "user", [-vT, 0, -tT])
    }

    function ST(TT, kT, cT, MT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: yT
      } = jT[KT];
      return hT.some(((xT, IT) => {
        var AT, CT;
        let [jT, vT, tT] = xT;
        const hT = TT(kT + jT, cT + vT, MT + tT),
          ST = QT(hT, KT);
        return null !== ST && yT.has(null !== (AT = null === (CT = lT.i[hT]) || void 0 === CT ? void 0 : CT.meta.rootName) && void 0 !== AT ? AT : "") && !(0, OT.N)(fT, ST, NT[IT])
      }))
    }

    function DT(TT) {
      const kT = lT.i[TT];
      return kT ? (0, OT.H)(kT.name) : null
    }
    let aT = null;

    function FT(TT) {
      if (!aT) {
        aT = new Map;
        for (const TT of ["water", "cryo"])
          for (let kT = 0; kT < 64; kT++)
            for (const cT of [!1, !0]) aT.set((0, KT.m)(TT, kT, cT), {
              lj: TT,
              mask: kT,
              full: cT
            })
      }
      return aT.get(TT)
    }
    const rT = new Map(Array.from({
      length: KT.i + 1
    }, ((TT, kT) => [(0, KT.n)(kT), kT])));

    function PT(TT, kT, cT, MT, KT, OT) {
      return hT.some(((yT, fT) => {
        var xT, IT, AT;
        let [CT, jT, vT] = yT;
        if (0 === (OT >> fT & 1)) return !1;
        const tT = null !== (xT = null === (IT = lT.i[TT(kT + CT, cT + jT, MT + vT)]) || void 0 === IT ? void 0 : IT.name) && void 0 !== xT ? xT : "",
          hT = FT(tT);
        return hT ? hT.lj === KT && hT.full : (null !== (AT = function(TT) {
          var kT;
          return null !== (kT = rT.get(TT)) && void 0 !== kT ? kT : null
        }(tT)) && void 0 !== AT ? AT : 0) > 0
      }))
    }
    class wT {
      constructor() {
        this.reshapeOffsets = hT
      }
      handles(TT) {
        return null !== DT(TT)
      }
      affects(TT) {
        var kT, cT;
        return vT.has(null !== (kT = null === (cT = lT.i[TT]) || void 0 === cT ? void 0 : cT.meta.rootName) && void 0 !== kT ? kT : "")
      }
      placedBy(TT) {
        var kT;
        return (null === (kT = lT.i[TT]) || void 0 === kT ? void 0 : kT.meta.rootName) === KT.c ? KT.g : null
      }
      shape(TT, kT, cT, MT, yT, xT) {
        var IT, AT, CT;
        const jT = null !== (IT = null === (AT = lT.i[yT]) || void 0 === AT ? void 0 : AT.name) && void 0 !== IT ? IT : "",
          vT = xT || jT !== KT.g ? null !== (CT = (0, OT.H)(jT)) && void 0 !== CT ? CT : "water" : function(TT, kT, cT, lT) {
            return hT.some(((MT, KT) => {
              let [yT, xT, IT] = MT;
              const AT = QT(TT(kT + yT, cT + xT, lT + IT), "cryo");
              return null !== AT && "port" !== AT.kind && (0, OT.N)(fT, AT, NT[KT])
            })) ? "cryo" : "water"
          }(TT, kT, cT, MT),
          tT = function(TT, kT, cT, lT) {
            let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              KT = 0;
            return hT.forEach(((yT, xT) => {
              let [IT, AT, CT] = yT;
              const jT = QT(TT(kT + IT, cT + AT, lT + CT), MT);
              jT && (0, OT.N)(fT, jT, NT[xT]) && (KT |= 1 << xT)
            })), KT
          }(TT, kT, cT, MT, vT),
          ST = xT ? function(TT) {
            var kT;
            return !0 === (null === (kT = FT(TT)) || void 0 === kT ? void 0 : kT.full)
          }(jT) : PT(TT, kT, cT, MT, vT, tT);
        return (0, lT.l)((0, KT.m)(vT, tT, ST))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);