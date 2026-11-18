export const id = 11;
export const ids = [11];
export const modules = {
  35753: JJ => {
    JJ.exports = function JJ(cJ, ZJ) {
      if (cJ === ZJ) return !0;
      if (cJ && ZJ && "object" == typeof cJ && "object" == typeof ZJ) {
        if (cJ.constructor !== ZJ.constructor) return !1;
        var FJ, UJ, eJ;
        if (Array.isArray(cJ)) {
          if ((FJ = cJ.length) != ZJ.length) return !1;
          for (UJ = FJ; 0 !== UJ--;)
            if (!JJ(cJ[UJ], ZJ[UJ])) return !1;
          return !0
        }
        if (cJ.constructor === RegExp) return cJ.source === ZJ.source && cJ.flags === ZJ.flags;
        if (cJ.valueOf !== Object.prototype.valueOf) return cJ.valueOf() === ZJ.valueOf();
        if (cJ.toString !== Object.prototype.toString) return cJ.toString() === ZJ.toString();
        if ((FJ = (eJ = Object.keys(cJ)).length) !== Object.keys(ZJ).length) return !1;
        for (UJ = FJ; 0 !== UJ--;)
          if (!Object.prototype.hasOwnProperty.call(ZJ, eJ[UJ])) return !1;
        for (UJ = FJ; 0 !== UJ--;) {
          var XJ = eJ[UJ];
          if (!JJ(cJ[XJ], ZJ[XJ])) return !1
        }
        return !0
      }
      return cJ !== cJ && ZJ !== ZJ
    }
  },
  35658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      f: () => nJ,
      j: () => DJ,
      m: () => hJ
    });
    var FJ = ZJ(8557),
      UJ = ZJ(35661),
      eJ = ZJ(35665),
      XJ = ZJ(8068),
      AJ = ZJ(1326),
      qJ = ZJ(47),
      jJ = ZJ(60),
      YJ = ZJ(990);

    function hJ() {
      var JJ;
      return (0, AJ.m)(UJ.b, (0, UJ.m)()), (0, YJ.jsx)(YJ.Fragment, {
        children: null === (JJ = (0, UJ.m)()) || void 0 === JJ ? void 0 : JJ.content
      })
    }

    function DJ(JJ) {
      var cJ;
      let {
        show: ZJ
      } = JJ;
      (0, AJ.m)(UJ.b, (0, UJ.m)());
      const jJ = null === (cJ = (0, UJ.m)()) || void 0 === cJ ? void 0 : cJ.menu;
      return (0, qJ.useEffect)((() => {
        var JJ;
        ZJ || (null === jJ || void 0 === jJ || null === (JJ = jJ.onClose) || void 0 === JJ || JJ.call(jJ), (0, eJ.m)())
      }), [ZJ, jJ]), (0, qJ.useEffect)((() => ZJ ? (0, XJ.f)(eJ.v, eJ.c) : void 0), [ZJ]), (0, YJ.jsx)(FJ.c, {
        showing: ZJ,
        globallyUniqueKey: "clientGameMenu",
        children: null === jJ || void 0 === jJ ? void 0 : jJ.content
      })
    }

    function sJ(JJ) {
      let {
        placement: cJ = "bottom"
      } = JJ;
      return (0, YJ.jsx)("div", {
        id: `clientGameHud-${cJ}`,
        style: {
          display: "contents"
        }
      })
    }

    function nJ(JJ) {
      let {
        children: cJ,
        placement: ZJ = "bottom"
      } = JJ;
      const [FJ, UJ] = (0, qJ.useState)(null);
      return (0, qJ.useEffect)((() => {
        UJ(document.getElementById(`clientGameHud-${ZJ}`))
      }), [ZJ]), FJ ? (0, jJ.createPortal)(cJ, FJ) : null
    }
  },
  8557: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3957),
      UJ = ZJ(3966);

    function eJ(JJ) {
      let {
        children: cJ,
        showing: ZJ,
        globallyUniqueKey: eJ,
        alwaysMountChildren: XJ = !1,
        doGameplayStartStopOnShow: AJ = !0,
        keepsMovement: qJ = !1
      } = JJ;
      return (0, UJ.c)(!0, ZJ, eJ, qJ), (0, FJ.c)(AJ, ZJ), ZJ || XJ ? cJ : null
    }
  },
  8068: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      f: () => UJ
    });
    let FJ = null;
    const UJ = function(JJ) {
        const cJ = {
          cycle: JJ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FJ = cJ, () => {
          FJ === cJ && (FJ = null)
        }
      },
      eJ = () => {
        var JJ;
        return null !== (JJ = FJ) && void 0 !== JJ && JJ.canCycle() ? FJ.cycle : null
      }
  },
  35848: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    const FJ = new Map;

    function UJ(JJ) {
      var cJ;
      return null === JJ ? null : null !== (cJ = FJ.get(JJ)) && void 0 !== cJ ? cJ : null
    }

    function eJ(JJ, cJ) {
      return FJ.set(JJ, cJ), () => {
        FJ.get(JJ) === cJ && FJ.delete(JJ)
      }
    }
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  37414: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      C: () => EJ,
      D: () => KJ,
      E: () => QJ,
      G: () => mJ,
      K: () => DJ,
      O: () => GJ,
      R: () => xJ,
      V: () => UJ,
      c: () => YJ,
      e: () => qJ,
      i: () => vJ,
      j: () => jJ,
      m: () => AJ,
      o: () => XJ,
      r: () => eJ,
      u: () => VJ,
      y: () => sJ
    });
    var FJ = ZJ(8717);

    function UJ(JJ) {
      return Math.floor(JJ).toLocaleString("en-US")
    }
    const eJ = 2e3,
      XJ = .005,
      AJ = .001,
      qJ = 2,
      jJ = "Fluid Tank",
      YJ = "Coolant Mixer",
      hJ = 144;

    function DJ(JJ) {
      const cJ = JJ.split("|")[0];
      return (0, FJ.m)(cJ) ? cJ === FJ.d ? "cryo" : "water" : null
    }
    const sJ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      nJ = 63;

    function GJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ZJ = cJ ? function(JJ, cJ, ZJ) {
        const FJ = sJ.findIndex((FJ => {
          let [UJ, eJ, XJ] = FJ;
          return UJ === JJ && eJ === cJ && XJ === ZJ
        }));
        return FJ < 0 ? 0 : 1 << FJ
      }(cJ[0], cJ[1], cJ[2]) : 0;
      return "maker" === JJ ? {
        kind: JJ,
        faces: ZJ
      } : "user" === JJ ? {
        kind: JJ,
        faces: nJ & ~ZJ
      } : {
        kind: JJ,
        faces: nJ
      }
    }

    function fJ(JJ) {
      return "pipe" === JJ || "tank" === JJ || "maker" === JJ
    }

    function xJ(JJ, cJ, ZJ) {
      return 0 !== (JJ.faces & 1 << ZJ) && 0 !== (cJ.faces & 1 << (1 ^ ZJ)) && (fJ(JJ.kind) || fJ(cJ.kind))
    }
    const rJ = (JJ, cJ, ZJ, FJ) => ({
        input: JJ,
        inputAmount: FJ,
        output: cJ,
        outputAmount: ZJ
      }),
      vJ = {
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
          recipes: [rJ("Uranium Grit", "Uranium Pellet", 1, 12), rJ("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [rJ("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: hJ,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function mJ(JJ, cJ) {
      return 1e3 * (null !== cJ && void 0 !== cJ ? cJ : 0) / JJ.opMs
    }

    function QJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZJ = mJ(vJ["Coolant Mixer"], hJ) * cJ;
      return JJ <= 0 ? 0 : Math.ceil(JJ / ZJ - 1e-9)
    }
    const EJ = "baf2Water",
      VJ = "baf2waterclose",
      KJ = "baf2wateropen"
  },
  37407: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => yJ,
      e: () => mJ,
      h: () => vJ
    });
    var FJ = ZJ(8636),
      UJ = ZJ(8662),
      eJ = ZJ(8717),
      XJ = ZJ(37414),
      AJ = ZJ(8715);
    const qJ = (0, XJ.O)("pipe"),
      jJ = (0, XJ.O)("tank"),
      YJ = (0, XJ.O)("port"),
      hJ = "Reactor Port";

    function DJ(JJ, cJ, ZJ) {
      const FJ = new Set([eJ.h, eJ.d, hJ, ...cJ, ...ZJ, ...JJ ? [XJ.j] : []]);
      return {
        makers: new Set(cJ),
        roots: FJ
      }
    }
    const sJ = {
        water: DJ(!0, ["Condenser"], ["Centrifuge", "Synthesizer", XJ.c]),
        cryo: DJ(!1, [XJ.c], [])
      },
      nJ = new Set([...sJ.water.roots, ...sJ.cryo.roots]),
      GJ = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      fJ = UJ.c.map((JJ => GJ[JJ])),
      xJ = fJ.map((JJ => {
        let [cJ, ZJ, FJ] = JJ;
        return XJ.y.findIndex((JJ => {
          let [UJ, eJ, XJ] = JJ;
          return UJ === cJ && eJ === ZJ && XJ === FJ
        }))
      }));

    function rJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ZJ = FJ.m[JJ],
        UJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.meta.rootName,
        DJ = sJ[cJ];
      if (!UJ || !DJ.roots.has(UJ)) return null;
      if ((0, eJ.m)(UJ)) return (0, XJ.K)(ZJ.name) === cJ ? qJ : null;
      if (UJ === XJ.j) return jJ;
      if (UJ === hJ) return ZJ.name.endsWith("|Water") ? YJ : null;
      const [nJ, GJ] = AJ.e[(ZJ.meta.rot || 1) - 1];
      return (0, XJ.O)(DJ.makers.has(UJ) ? "maker" : "user", [-nJ, 0, -GJ])
    }

    function vJ(JJ, cJ, ZJ, UJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: AJ
      } = sJ[eJ];
      return fJ.some(((jJ, YJ) => {
        var hJ, DJ;
        let [sJ, nJ, GJ] = jJ;
        const fJ = JJ(cJ + sJ, ZJ + nJ, UJ + GJ),
          vJ = rJ(fJ, eJ);
        return null !== vJ && AJ.has(null !== (hJ = null === (DJ = FJ.m[fJ]) || void 0 === DJ ? void 0 : DJ.meta.rootName) && void 0 !== hJ ? hJ : "") && !(0, XJ.R)(qJ, vJ, xJ[YJ])
      }))
    }

    function mJ(JJ) {
      const cJ = FJ.m[JJ];
      return cJ ? (0, XJ.K)(cJ.name) : null
    }
    let QJ = null;

    function EJ(JJ) {
      if (!QJ) {
        QJ = new Map;
        for (const JJ of ["water", "cryo"])
          for (let cJ = 0; cJ < 64; cJ++)
            for (const ZJ of [!1, !0]) QJ.set((0, eJ.p)(JJ, cJ, ZJ), {
              LD: JJ,
              mask: cJ,
              full: ZJ
            })
      }
      return QJ.get(JJ)
    }
    const VJ = new Map(Array.from({
      length: eJ.k + 1
    }, ((JJ, cJ) => [(0, eJ.r)(cJ), cJ])));

    function KJ(JJ, cJ, ZJ, UJ, eJ, XJ) {
      return fJ.some(((AJ, qJ) => {
        var jJ, YJ, hJ;
        let [DJ, sJ, nJ] = AJ;
        if (0 === (XJ >> qJ & 1)) return !1;
        const GJ = null !== (jJ = null === (YJ = FJ.m[JJ(cJ + DJ, ZJ + sJ, UJ + nJ)]) || void 0 === YJ ? void 0 : YJ.name) && void 0 !== jJ ? jJ : "",
          fJ = EJ(GJ);
        return fJ ? fJ.LD === eJ && fJ.full : (null !== (hJ = function(JJ) {
          var cJ;
          return null !== (cJ = VJ.get(JJ)) && void 0 !== cJ ? cJ : null
        }(GJ)) && void 0 !== hJ ? hJ : 0) > 0
      }))
    }
    class yJ {
      constructor() {
        this.reshapeOffsets = fJ
      }
      handles(JJ) {
        return null !== mJ(JJ)
      }
      affects(JJ) {
        var cJ, ZJ;
        return nJ.has(null !== (cJ = null === (ZJ = FJ.m[JJ]) || void 0 === ZJ ? void 0 : ZJ.meta.rootName) && void 0 !== cJ ? cJ : "")
      }
      placedBy(JJ) {
        var cJ;
        return (null === (cJ = FJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.meta.rootName) === eJ.d ? eJ.h : null
      }
      shape(JJ, cJ, ZJ, UJ, AJ, jJ) {
        var YJ, hJ, DJ;
        const sJ = null !== (YJ = null === (hJ = FJ.m[AJ]) || void 0 === hJ ? void 0 : hJ.name) && void 0 !== YJ ? YJ : "",
          nJ = jJ || sJ !== eJ.h ? null !== (DJ = (0, XJ.K)(sJ)) && void 0 !== DJ ? DJ : "water" : function(JJ, cJ, ZJ, FJ) {
            return fJ.some(((UJ, eJ) => {
              let [AJ, jJ, YJ] = UJ;
              const hJ = rJ(JJ(cJ + AJ, ZJ + jJ, FJ + YJ), "cryo");
              return null !== hJ && "port" !== hJ.kind && (0, XJ.R)(qJ, hJ, xJ[eJ])
            })) ? "cryo" : "water"
          }(JJ, cJ, ZJ, UJ),
          GJ = function(JJ, cJ, ZJ, FJ) {
            let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              eJ = 0;
            return fJ.forEach(((AJ, jJ) => {
              let [YJ, hJ, DJ] = AJ;
              const sJ = rJ(JJ(cJ + YJ, ZJ + hJ, FJ + DJ), UJ);
              sJ && (0, XJ.R)(qJ, sJ, xJ[jJ]) && (eJ |= 1 << jJ)
            })), eJ
          }(JJ, cJ, ZJ, UJ, nJ),
          vJ = jJ ? function(JJ) {
            var cJ;
            return !0 === (null === (cJ = EJ(JJ)) || void 0 === cJ ? void 0 : cJ.full)
          }(sJ) : KJ(JJ, cJ, ZJ, UJ, nJ, GJ);
        return (0, FJ.n)((0, eJ.p)(nJ, GJ, vJ))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);