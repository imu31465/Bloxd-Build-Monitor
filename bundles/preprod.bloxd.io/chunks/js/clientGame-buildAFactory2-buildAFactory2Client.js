export const id = 11;
export const ids = [11];
export const modules = {
  37263: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB,
      e: () => NB,
      h: () => zB,
      l: () => PB
    });
    var YB = GB(34790),
      DB = GB(37267),
      QB = GB(37270),
      oB = GB(9391),
      jB = GB(1480),
      yB = GB(56),
      JB = GB(70),
      MB = GB(1282);

    function PB() {
      var BB;
      return (0, jB.i)(DB.d, (0, DB.n)()), (0, MB.jsx)(MB.Fragment, {
        children: null === (BB = (0, DB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var OB;
      let {
        show: GB
      } = BB;
      (0, jB.i)(DB.d, (0, DB.n)());
      const JB = null === (OB = (0, DB.n)()) || void 0 === OB ? void 0 : OB.menu;
      return (0, yB.useEffect)((() => {
        var BB;
        GB || (null === JB || void 0 === JB || null === (BB = JB.onClose) || void 0 === BB || BB.call(JB), (0, QB.u)())
      }), [GB, JB]), (0, yB.useEffect)((() => GB ? (0, oB.d)(QB.D, QB.i) : void 0), [GB]), (0, MB.jsx)(YB.d, {
        showing: GB,
        globallyUniqueKey: "clientGameMenu",
        children: null === JB || void 0 === JB ? void 0 : JB.content
      })
    }
    const lB = new Map,
      pB = new Set;

    function qB(BB, OB) {
      OB ? lB.set(BB, OB) : lB.delete(BB);
      for (const GB of pB) GB()
    }

    function ZB(BB) {
      let {
        placement: OB = "bottom"
      } = BB;
      const GB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = GB.current;
        return qB(OB, BB), () => {
          lB.get(OB) === BB && qB(OB, null)
        }
      }), [OB]), (0, MB.jsx)("div", {
        ref: GB,
        id: `clientGameHud-${OB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: OB,
        placement: GB = "bottom"
      } = BB;
      const [YB, DB] = (0, yB.useState)((() => {
        var BB;
        return null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null
      }));
      return (0, yB.useEffect)((() => {
        const BB = () => {
          var BB;
          DB(null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null)
        };
        return pB.add(BB), BB(), () => {
          pB.delete(BB)
        }
      }), [GB]), YB ? (0, JB.createPortal)(OB, YB) : null
    }
  },
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  5512: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1282);

    function oB(BB) {
      let {
        options: OB,
        value: GB,
        onChange: YB,
        ariaLabel: oB,
        className: jB,
        reselectable: yB = !1,
        keepsFocus: JB = !1,
        padTabs: MB
      } = BB;
      const PB = void 0 !== MB;
      return (0, QB.jsx)("div", {
        className: DB()("SegmentedToggle", jB),
        role: "group",
        "aria-label": oB,
        "data-pad-tabs": MB,
        children: OB.map((BB => {
          const OB = BB.value === GB;
          return (0, QB.jsx)("button", {
            type: "button",
            "aria-pressed": OB,
            "data-pad-tab": PB || void 0,
            "data-pad-selected": PB && OB ? "true" : void 0,
            "data-pad-default-focus": PB && OB || void 0,
            "aria-label": BB.ariaLabel,
            title: BB.ariaLabel,
            className: DB()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: OB
            }),
            onMouseDown: JB ? BB => {
              BB.preventDefault()
            } : void 0,
            onClick: () => {
              OB && !yB || YB(BB.value)
            },
            children: BB.label
          }, BB.value)
        }))
      })
    }
  },
  9391: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = null;
    const DB = function(BB) {
        const OB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return YB = OB, () => {
          YB === OB && (YB = null)
        }
      },
      QB = () => {
        var BB;
        return null !== (BB = YB) && void 0 !== BB && BB.canCycle() ? YB.cycle : null
      }
  },
  37523: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      h: () => QB
    });
    const YB = new Map;

    function DB(BB) {
      var OB;
      return null === BB ? null : null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : null
    }

    function QB(BB, OB) {
      return YB.set(BB, OB), () => {
        YB.get(BB) === OB && YB.delete(BB)
      }
    }
  },
  37270: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => pB,
      G: () => RB,
      e: () => QB,
      i: () => qB,
      l: () => ZB,
      m: () => jB,
      q: () => zB,
      u: () => NB,
      y: () => PB,
      z: () => WB
    });
    var YB = GB(16),
      DB = GB(25);
    const QB = "clientGameInventoryButtonsChanged",
      oB = new Map;

    function jB() {
      return [...oB.values()].sort(((BB, OB) => {
        var GB, YB;
        return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
      }))
    }
    let yB = null;

    function JB(BB) {
      yB = BB
    }
    let MB = !1;

    function PB(BB) {
      MB = !0;
      try {
        BB.onClick()
      } finally {
        MB = !1
      }
      BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
    }

    function zB() {
      return MB
    }

    function lB() {
      return jB().filter((BB => BB.panel && !BB.disabled))
    }

    function pB(BB) {
      const OB = lB(),
        GB = OB.findIndex((BB => BB.id === yB));
      return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
    }

    function qB() {
      return null !== yB && lB().length > 1
    }

    function ZB() {
      JB(null)
    }

    function NB() {
      "inventory" !== YB.c.get("openInGameMenuName") && JB(null)
    }

    function RB() {
      const BB = yB;
      return JB(null), BB
    }

    function WB(BB) {
      return oB.set(BB.id, BB), DB.o.tM(QB, jB(), !0), () => {
        oB.get(BB.id) === BB && (oB.delete(BB.id), DB.o.tM(QB, jB()))
      }
    }
  },
  37267: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      f: () => RB,
      g: () => ZB,
      i: () => NB,
      m: () => zB,
      n: () => JB,
      o: () => qB,
      r: () => lB,
      s: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(37270);
    const jB = "clientGameUiChanged";
    let yB = null;

    function JB() {
      return yB
    }

    function MB(BB, OB) {
      const GB = {
        content: BB,
        menu: OB
      };
      return yB = GB, DB.o.tM(jB, yB, !0), () => {
        yB === GB && (yB = null, pB = !1, ZB(), DB.o.tM(jB, null))
      }
    }
    let PB = null;

    function zB() {
      return PB
    }

    function lB(BB) {
      return PB = BB, () => {
        PB === BB && (PB = null)
      }
    }
    let pB = !1;

    function qB() {
      const BB = YB.c.get("openInGameMenuName");
      "clientGame" !== BB && (pB = "inventory" === BB), (0, oB.q)() || (0, oB.l)(), (0, QB.p)(QB.b), YB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ZB() {
      WB(!1)
    }

    function NB() {
      WB(pB)
    }

    function RB() {
      pB && WB(!1)
    }

    function WB(BB) {
      "clientGame" === YB.c.get("openInGameMenuName") && YB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, oB.l)(), pB = !1
    }
  },
  39084: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => lB,
      C: () => SB,
      F: () => UB,
      J: () => VB,
      L: () => AB,
      O: () => zB,
      S: () => qB,
      V: () => NB,
      W: () => DB,
      b: () => MB,
      e: () => yB,
      g: () => WB,
      j: () => JB,
      m: () => jB,
      q: () => oB,
      u: () => QB,
      x: () => nB
    });
    var YB = GB(10010);

    function DB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const QB = 2e3,
      oB = .005,
      jB = .001,
      yB = 2,
      JB = "Fluid Tank",
      MB = "Coolant Mixer",
      PB = 144;

    function zB(BB) {
      const OB = BB.split("|")[0];
      return (0, YB.n)(OB) ? OB === YB.e ? "cryo" : "water" : null
    }
    const lB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      pB = 63;

    function qB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const GB = OB ? function(BB, OB, GB) {
        const YB = lB.findIndex((YB => {
          let [DB, QB, oB] = YB;
          return DB === BB && QB === OB && oB === GB
        }));
        return YB < 0 ? 0 : 1 << YB
      }(OB[0], OB[1], OB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: GB
      } : "user" === BB ? {
        kind: BB,
        faces: pB & ~GB
      } : {
        kind: BB,
        faces: pB
      }
    }

    function ZB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function NB(BB, OB, GB) {
      return 0 !== (BB.faces & 1 << GB) && 0 !== (OB.faces & 1 << (1 ^ GB)) && (ZB(BB.kind) || ZB(OB.kind))
    }
    const RB = (BB, OB, GB, YB) => ({
        input: BB,
        inputAmount: YB,
        output: OB,
        outputAmount: GB
      }),
      WB = {
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
          recipes: [RB("Uranium Grit", "Uranium Pellet", 1, 12), RB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [RB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: PB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function AB(BB, OB) {
      return 1e3 * (null !== OB && void 0 !== OB ? OB : 0) / BB.opMs
    }

    function VB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GB = AB(WB["Coolant Mixer"], PB) * OB;
      return BB <= 0 ? 0 : Math.ceil(BB / GB - 1e-9)
    }
    const SB = "baf2Water",
      nB = "baf2waterclose",
      UB = "baf2wateropen"
  },
  39081: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => fB,
      g: () => AB,
      k: () => WB
    });
    var YB = GB(9927),
      DB = GB(9955),
      QB = GB(10010),
      oB = GB(39084),
      jB = GB(10004);
    const yB = (0, oB.S)("pipe"),
      JB = (0, oB.S)("tank"),
      MB = (0, oB.S)("port"),
      PB = "Reactor Port";

    function zB(BB, OB, GB) {
      const YB = new Set([QB.g, QB.e, PB, ...OB, ...GB, ...BB ? [oB.j] : []]);
      return {
        makers: new Set(OB),
        roots: YB
      }
    }
    const lB = {
        water: zB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", oB.b]),
        cryo: zB(!1, [oB.b], [])
      },
      pB = new Set([...lB.water.roots, ...lB.cryo.roots]),
      qB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      ZB = DB.c.map((BB => qB[BB])),
      NB = ZB.map((BB => {
        let [OB, GB, YB] = BB;
        return oB.B.findIndex((BB => {
          let [DB, QB, oB] = BB;
          return DB === OB && QB === GB && oB === YB
        }))
      }));

    function RB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const GB = YB.h[BB],
        DB = null === GB || void 0 === GB ? void 0 : GB.meta.rootName,
        zB = lB[OB];
      if (!DB || !zB.roots.has(DB)) return null;
      if ((0, QB.n)(DB)) return (0, oB.O)(GB.name) === OB ? yB : null;
      if (DB === oB.j) return JB;
      if (DB === PB) return GB.name.endsWith("|Water") ? MB : null;
      const [pB, qB] = jB.d[(GB.meta.rot || 1) - 1];
      return (0, oB.S)(zB.makers.has(DB) ? "maker" : "user", [-pB, 0, -qB])
    }

    function WB(BB, OB, GB, DB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: jB
      } = lB[QB];
      return ZB.some(((JB, MB) => {
        var PB, zB;
        let [lB, pB, qB] = JB;
        const ZB = BB(OB + lB, GB + pB, DB + qB),
          WB = RB(ZB, QB);
        return null !== WB && jB.has(null !== (PB = null === (zB = YB.h[ZB]) || void 0 === zB ? void 0 : zB.meta.rootName) && void 0 !== PB ? PB : "") && !(0, oB.V)(yB, WB, NB[MB])
      }))
    }

    function AB(BB) {
      const OB = YB.h[BB];
      return OB ? (0, oB.O)(OB.name) : null
    }
    let VB = null;

    function SB(BB) {
      if (!VB) {
        VB = new Map;
        for (const BB of ["water", "cryo"])
          for (let OB = 0; OB < 64; OB++)
            for (const GB of [!1, !0]) VB.set((0, QB.p)(BB, OB, GB), {
              fl: BB,
              mask: OB,
              full: GB
            })
      }
      return VB.get(BB)
    }
    const nB = new Map(Array.from({
      length: QB.k + 1
    }, ((BB, OB) => [(0, QB.q)(OB), OB])));

    function UB(BB, OB, GB, DB, QB, oB) {
      return ZB.some(((jB, yB) => {
        var JB, MB, PB;
        let [zB, lB, pB] = jB;
        if (0 === (oB >> yB & 1)) return !1;
        const qB = null !== (JB = null === (MB = YB.h[BB(OB + zB, GB + lB, DB + pB)]) || void 0 === MB ? void 0 : MB.name) && void 0 !== JB ? JB : "",
          ZB = SB(qB);
        return ZB ? ZB.fl === QB && ZB.full : (null !== (PB = function(BB) {
          var OB;
          return null !== (OB = nB.get(BB)) && void 0 !== OB ? OB : null
        }(qB)) && void 0 !== PB ? PB : 0) > 0
      }))
    }
    class fB {
      constructor() {
        this.reshapeOffsets = ZB
      }
      handles(BB) {
        return null !== AB(BB)
      }
      affects(BB) {
        var OB, GB;
        return pB.has(null !== (OB = null === (GB = YB.h[BB]) || void 0 === GB ? void 0 : GB.meta.rootName) && void 0 !== OB ? OB : "")
      }
      placedBy(BB) {
        var OB;
        return (null === (OB = YB.h[BB]) || void 0 === OB ? void 0 : OB.meta.rootName) === QB.e ? QB.g : null
      }
      shape(BB, OB, GB, DB, jB, JB) {
        var MB, PB, zB;
        const lB = null !== (MB = null === (PB = YB.h[jB]) || void 0 === PB ? void 0 : PB.name) && void 0 !== MB ? MB : "",
          pB = JB || lB !== QB.g ? null !== (zB = (0, oB.O)(lB)) && void 0 !== zB ? zB : "water" : function(BB, OB, GB, YB) {
            return ZB.some(((DB, QB) => {
              let [jB, JB, MB] = DB;
              const PB = RB(BB(OB + jB, GB + JB, YB + MB), "cryo");
              return null !== PB && "port" !== PB.kind && (0, oB.V)(yB, PB, NB[QB])
            })) ? "cryo" : "water"
          }(BB, OB, GB, DB),
          qB = function(BB, OB, GB, YB) {
            let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              QB = 0;
            return ZB.forEach(((jB, JB) => {
              let [MB, PB, zB] = jB;
              const lB = RB(BB(OB + MB, GB + PB, YB + zB), DB);
              lB && (0, oB.V)(yB, lB, NB[JB]) && (QB |= 1 << JB)
            })), QB
          }(BB, OB, GB, DB, pB),
          WB = JB ? function(BB) {
            var OB;
            return !0 === (null === (OB = SB(BB)) || void 0 === OB ? void 0 : OB.full)
          }(lB) : UB(BB, OB, GB, DB, pB, qB);
        return (0, YB.j)((0, QB.p)(pB, qB, WB))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);