export const id = 11;
export const ids = [11];
export const modules = {
  35692: BB => {
    BB.exports = function BB(TB, dB) {
      if (TB === dB) return !0;
      if (TB && dB && "object" == typeof TB && "object" == typeof dB) {
        if (TB.constructor !== dB.constructor) return !1;
        var VB, yB, pB;
        if (Array.isArray(TB)) {
          if ((VB = TB.length) != dB.length) return !1;
          for (yB = VB; 0 !== yB--;)
            if (!BB(TB[yB], dB[yB])) return !1;
          return !0
        }
        if (TB.constructor === RegExp) return TB.source === dB.source && TB.flags === dB.flags;
        if (TB.valueOf !== Object.prototype.valueOf) return TB.valueOf() === dB.valueOf();
        if (TB.toString !== Object.prototype.toString) return TB.toString() === dB.toString();
        if ((VB = (pB = Object.keys(TB)).length) !== Object.keys(dB).length) return !1;
        for (yB = VB; 0 !== yB--;)
          if (!Object.prototype.hasOwnProperty.call(dB, pB[yB])) return !1;
        for (yB = VB; 0 !== yB--;) {
          var lB = pB[yB];
          if (!BB(TB[lB], dB[lB])) return !1
        }
        return !0
      }
      return TB !== TB && dB !== dB
    }
  },
  35589: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      e: () => DB,
      h: () => LB,
      l: () => kB
    });
    var VB = dB(8570),
      yB = dB(35595),
      pB = dB(35601),
      lB = dB(8103),
      JB = dB(1317),
      YB = dB(62),
      gB = dB(72),
      oB = dB(980);

    function kB() {
      var BB;
      return (0, JB.f)(yB.c, (0, yB.k)()), (0, oB.jsx)(oB.Fragment, {
        children: null === (BB = (0, yB.k)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function LB(BB) {
      var TB;
      let {
        show: dB
      } = BB;
      (0, JB.f)(yB.c, (0, yB.k)());
      const gB = null === (TB = (0, yB.k)()) || void 0 === TB ? void 0 : TB.menu;
      return (0, YB.useEffect)((() => {
        var BB;
        dB || (null === gB || void 0 === gB || null === (BB = gB.onClose) || void 0 === BB || BB.call(gB), (0, pB.r)())
      }), [dB, gB]), (0, YB.useEffect)((() => dB ? (0, lB.c)(pB.x, pB.e) : void 0), [dB]), (0, oB.jsx)(VB.d, {
        showing: dB,
        globallyUniqueKey: "clientGameMenu",
        children: null === gB || void 0 === gB ? void 0 : gB.content
      })
    }

    function OB(BB) {
      let {
        placement: TB = "bottom"
      } = BB;
      return (0, oB.jsx)("div", {
        id: `clientGameHud-${TB}`,
        style: {
          display: "contents"
        }
      })
    }

    function DB(BB) {
      let {
        children: TB,
        placement: dB = "bottom"
      } = BB;
      const [VB, yB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        yB(document.getElementById(`clientGameHud-${dB}`))
      }), [dB]), VB ? (0, gB.createPortal)(TB, VB) : null
    }
  },
  8570: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(3948),
      yB = dB(3951);

    function pB(BB) {
      let {
        children: TB,
        showing: dB,
        globallyUniqueKey: pB,
        alwaysMountChildren: lB = !1,
        doGameplayStartStopOnShow: JB = !0,
        keepsMovement: YB = !1
      } = BB;
      return (0, yB.d)(!0, dB, pB, YB), (0, VB.e)(JB, dB), dB || lB ? TB : null
    }
  },
  8103: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => yB
    });
    let VB = null;
    const yB = function(BB) {
        const TB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return VB = TB, () => {
          VB === TB && (VB = null)
        }
      },
      pB = () => {
        var BB;
        return null !== (BB = VB) && void 0 !== BB && BB.canCycle() ? VB.cycle : null
      }
  },
  35805: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      g: () => pB
    });
    const VB = new Map;

    function yB(BB) {
      var TB;
      return null === BB ? null : null !== (TB = VB.get(BB)) && void 0 !== TB ? TB : null
    }

    function pB(BB, TB) {
      return VB.set(BB, TB), () => {
        VB.get(BB) === TB && VB.delete(BB)
      }
    }
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  37372: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => OB,
      B: () => tB,
      E: () => sB,
      I: () => NB,
      K: () => iB,
      M: () => LB,
      P: () => uB,
      S: () => EB,
      W: () => yB,
      c: () => oB,
      e: () => YB,
      h: () => mB,
      l: () => gB,
      p: () => JB,
      t: () => lB,
      v: () => pB,
      x: () => fB
    });
    var VB = dB(8743);

    function yB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    const pB = 2e3,
      lB = .005,
      JB = .001,
      YB = 2,
      gB = "Fluid Tank",
      oB = "Coolant Mixer",
      kB = 144;

    function LB(BB) {
      const TB = BB.split("|")[0];
      return (0, VB.j)(TB) ? TB === VB.e ? "cryo" : "water" : null
    }
    const OB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      DB = 63;

    function uB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const dB = TB ? function(BB, TB, dB) {
        const VB = OB.findIndex((VB => {
          let [yB, pB, lB] = VB;
          return yB === BB && pB === TB && lB === dB
        }));
        return VB < 0 ? 0 : 1 << VB
      }(TB[0], TB[1], TB[2]) : 0;
      return "maker" === BB ? {
        kind: BB,
        faces: dB
      } : "user" === BB ? {
        kind: BB,
        faces: DB & ~dB
      } : {
        kind: BB,
        faces: DB
      }
    }

    function HB(BB) {
      return "pipe" === BB || "tank" === BB || "maker" === BB
    }

    function EB(BB, TB, dB) {
      return 0 !== (BB.faces & 1 << dB) && 0 !== (TB.faces & 1 << (1 ^ dB)) && (HB(BB.kind) || HB(TB.kind))
    }
    const vB = (BB, TB, dB, VB) => ({
        input: BB,
        inputAmount: VB,
        output: TB,
        outputAmount: dB
      }),
      mB = {
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
          recipes: [vB("Uranium Grit", "Uranium Pellet", 1, 12), vB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [vB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: kB,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function iB(BB, TB) {
      return 1e3 * (null !== TB && void 0 !== TB ? TB : 0) / BB.opMs
    }

    function NB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const dB = iB(mB["Coolant Mixer"], kB) * TB;
      return BB <= 0 ? 0 : Math.ceil(BB / dB - 1e-9)
    }
    const tB = "baf2Water",
      fB = "baf2waterclose",
      sB = "baf2wateropen"
  },
  37363: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => MB,
      f: () => iB,
      g: () => mB
    });
    var VB = dB(8653),
      yB = dB(8679),
      pB = dB(8743),
      lB = dB(37372),
      JB = dB(8737);
    const YB = (0, lB.P)("pipe"),
      gB = (0, lB.P)("tank"),
      oB = (0, lB.P)("port"),
      kB = "Reactor Port";

    function LB(BB, TB, dB) {
      const VB = new Set([pB.f, pB.e, kB, ...TB, ...dB, ...BB ? [lB.l] : []]);
      return {
        makers: new Set(TB),
        roots: VB
      }
    }
    const OB = {
        water: LB(!0, ["Condenser"], ["Centrifuge", "Synthesizer", lB.c]),
        cryo: LB(!1, [lB.c], [])
      },
      DB = new Set([...OB.water.roots, ...OB.cryo.roots]),
      uB = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      HB = yB.e.map((BB => uB[BB])),
      EB = HB.map((BB => {
        let [TB, dB, VB] = BB;
        return lB.A.findIndex((BB => {
          let [yB, pB, lB] = BB;
          return yB === TB && pB === dB && lB === VB
        }))
      }));

    function vB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const dB = VB.h[BB],
        yB = null === dB || void 0 === dB ? void 0 : dB.meta.rootName,
        LB = OB[TB];
      if (!yB || !LB.roots.has(yB)) return null;
      if ((0, pB.j)(yB)) return (0, lB.M)(dB.name) === TB ? YB : null;
      if (yB === lB.l) return gB;
      if (yB === kB) return dB.name.endsWith("|Water") ? oB : null;
      const [DB, uB] = JB.f[(dB.meta.rot || 1) - 1];
      return (0, lB.P)(LB.makers.has(yB) ? "maker" : "user", [-DB, 0, -uB])
    }

    function mB(BB, TB, dB, yB) {
      let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: JB
      } = OB[pB];
      return HB.some(((gB, oB) => {
        var kB, LB;
        let [OB, DB, uB] = gB;
        const HB = BB(TB + OB, dB + DB, yB + uB),
          mB = vB(HB, pB);
        return null !== mB && JB.has(null !== (kB = null === (LB = VB.h[HB]) || void 0 === LB ? void 0 : LB.meta.rootName) && void 0 !== kB ? kB : "") && !(0, lB.S)(YB, mB, EB[oB])
      }))
    }

    function iB(BB) {
      const TB = VB.h[BB];
      return TB ? (0, lB.M)(TB.name) : null
    }
    let NB = null;

    function tB(BB) {
      if (!NB) {
        NB = new Map;
        for (const BB of ["water", "cryo"])
          for (let TB = 0; TB < 64; TB++)
            for (const dB of [!1, !0]) NB.set((0, pB.m)(BB, TB, dB), {
              DO: BB,
              mask: TB,
              full: dB
            })
      }
      return NB.get(BB)
    }
    const fB = new Map(Array.from({
      length: pB.i + 1
    }, ((BB, TB) => [(0, pB.n)(TB), TB])));

    function sB(BB, TB, dB, yB, pB, lB) {
      return HB.some(((JB, YB) => {
        var gB, oB, kB;
        let [LB, OB, DB] = JB;
        if (0 === (lB >> YB & 1)) return !1;
        const uB = null !== (gB = null === (oB = VB.h[BB(TB + LB, dB + OB, yB + DB)]) || void 0 === oB ? void 0 : oB.name) && void 0 !== gB ? gB : "",
          HB = tB(uB);
        return HB ? HB.DO === pB && HB.full : (null !== (kB = function(BB) {
          var TB;
          return null !== (TB = fB.get(BB)) && void 0 !== TB ? TB : null
        }(uB)) && void 0 !== kB ? kB : 0) > 0
      }))
    }
    class MB {
      constructor() {
        this.reshapeOffsets = HB
      }
      handles(BB) {
        return null !== iB(BB)
      }
      affects(BB) {
        var TB, dB;
        return DB.has(null !== (TB = null === (dB = VB.h[BB]) || void 0 === dB ? void 0 : dB.meta.rootName) && void 0 !== TB ? TB : "")
      }
      placedBy(BB) {
        var TB;
        return (null === (TB = VB.h[BB]) || void 0 === TB ? void 0 : TB.meta.rootName) === pB.e ? pB.f : null
      }
      shape(BB, TB, dB, yB, JB, gB) {
        var oB, kB, LB;
        const OB = null !== (oB = null === (kB = VB.h[JB]) || void 0 === kB ? void 0 : kB.name) && void 0 !== oB ? oB : "",
          DB = gB || OB !== pB.f ? null !== (LB = (0, lB.M)(OB)) && void 0 !== LB ? LB : "water" : function(BB, TB, dB, VB) {
            return HB.some(((yB, pB) => {
              let [JB, gB, oB] = yB;
              const kB = vB(BB(TB + JB, dB + gB, VB + oB), "cryo");
              return null !== kB && "port" !== kB.kind && (0, lB.S)(YB, kB, EB[pB])
            })) ? "cryo" : "water"
          }(BB, TB, dB, yB),
          uB = function(BB, TB, dB, VB) {
            let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              pB = 0;
            return HB.forEach(((JB, gB) => {
              let [oB, kB, LB] = JB;
              const OB = vB(BB(TB + oB, dB + kB, VB + LB), yB);
              OB && (0, lB.S)(YB, OB, EB[gB]) && (pB |= 1 << gB)
            })), pB
          }(BB, TB, dB, yB, DB),
          mB = gB ? function(BB) {
            var TB;
            return !0 === (null === (TB = tB(BB)) || void 0 === TB ? void 0 : TB.full)
          }(OB) : sB(BB, TB, dB, yB, DB, uB);
        return (0, VB.j)((0, pB.m)(DB, uB, mB))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);