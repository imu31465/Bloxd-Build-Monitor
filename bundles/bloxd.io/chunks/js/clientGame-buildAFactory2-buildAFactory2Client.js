export const id = 11;
export const ids = [11];
export const modules = {
  36116: YY => {
    YY.exports = function YY(rY, DY) {
      if (rY === DY) return !0;
      if (rY && DY && "object" == typeof rY && "object" == typeof DY) {
        if (rY.constructor !== DY.constructor) return !1;
        var FY, AY, IY;
        if (Array.isArray(rY)) {
          if ((FY = rY.length) != DY.length) return !1;
          for (AY = FY; 0 !== AY--;)
            if (!YY(rY[AY], DY[AY])) return !1;
          return !0
        }
        if (rY.constructor === RegExp) return rY.source === DY.source && rY.flags === DY.flags;
        if (rY.valueOf !== Object.prototype.valueOf) return rY.valueOf() === DY.valueOf();
        if (rY.toString !== Object.prototype.toString) return rY.toString() === DY.toString();
        if ((FY = (IY = Object.keys(rY)).length) !== Object.keys(DY).length) return !1;
        for (AY = FY; 0 !== AY--;)
          if (!Object.prototype.hasOwnProperty.call(DY, IY[AY])) return !1;
        for (AY = FY; 0 !== AY--;) {
          var RY = IY[AY];
          if (!YY(rY[RY], DY[RY])) return !1
        }
        return !0
      }
      return rY !== rY && DY !== DY
    }
  },
  36025: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => iY,
      e: () => yY,
      g: () => sY,
      h: () => uY
    });
    var FY = DY(8745),
      AY = DY(36032),
      IY = DY(36034),
      RY = DY(8111),
      OY = DY(1430),
      gY = DY(61),
      aY = DY(76),
      vY = DY(1125);

    function uY() {
      var YY;
      return (0, OY.k)(AY.d, (0, AY.n)()), (0, vY.jsx)(vY.Fragment, {
        children: null === (YY = (0, AY.n)()) || void 0 === YY ? void 0 : YY.content
      })
    }

    function sY(YY) {
      var rY;
      let {
        show: DY
      } = YY;
      (0, OY.k)(AY.d, (0, AY.n)());
      const aY = null === (rY = (0, AY.n)()) || void 0 === rY ? void 0 : rY.menu;
      return (0, gY.useEffect)((() => {
        var YY;
        DY || (null === aY || void 0 === aY || null === (YY = aY.onClose) || void 0 === YY || YY.call(aY), (0, IY.t)())
      }), [DY, aY]), (0, gY.useEffect)((() => DY ? (0, RY.f)(IY.y, IY.i) : void 0), [DY]), (0, vY.jsx)(FY.d, {
        showing: DY,
        globallyUniqueKey: "clientGameMenu",
        children: null === aY || void 0 === aY ? void 0 : aY.content
      })
    }

    function iY(YY) {
      let {
        placement: rY = "bottom"
      } = YY;
      return (0, vY.jsx)("div", {
        id: `clientGameHud-${rY}`,
        style: {
          display: "contents"
        }
      })
    }

    function yY(YY) {
      let {
        children: rY,
        placement: DY = "bottom"
      } = YY;
      const [FY, AY] = (0, gY.useState)(null);
      return (0, gY.useEffect)((() => {
        AY(document.getElementById(`clientGameHud-${DY}`))
      }), [DY]), FY ? (0, aY.createPortal)(rY, FY) : null
    }
  },
  8745: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(4093),
      AY = DY(4097);

    function IY(YY) {
      let {
        children: rY,
        showing: DY,
        globallyUniqueKey: IY,
        alwaysMountChildren: RY = !1,
        doGameplayStartStopOnShow: OY = !0,
        keepsMovement: gY = !1
      } = YY;
      return (0, AY.b)(!0, DY, IY, gY), (0, FY.c)(OY, DY), DY || RY ? rY : null
    }
  },
  8111: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      f: () => AY
    });
    let FY = null;
    const AY = function(YY) {
        const rY = {
          cycle: YY,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FY = rY, () => {
          FY === rY && (FY = null)
        }
      },
      IY = () => {
        var YY;
        return null !== (YY = FY) && void 0 !== YY && YY.canCycle() ? FY.cycle : null
      }
  },
  36206: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      f: () => IY
    });
    const FY = new Map;

    function AY(YY) {
      var rY;
      return null === YY ? null : null !== (rY = FY.get(YY)) && void 0 !== rY ? rY : null
    }

    function IY(YY, rY) {
      return FY.set(YY, rY), () => {
        FY.get(YY) === rY && FY.delete(YY)
      }
    }
  },
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  37812: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => lY,
      D: () => eY,
      F: () => SY,
      G: () => VY,
      H: () => sY,
      L: () => QY,
      M: () => WY,
      Q: () => AY,
      b: () => vY,
      e: () => gY,
      h: () => mY,
      l: () => aY,
      o: () => OY,
      r: () => RY,
      s: () => IY,
      w: () => TY,
      z: () => iY
    });
    var FY = DY(8903);

    function AY(YY) {
      return Math.floor(YY).toLocaleString("en-US")
    }
    const IY = 2e3,
      RY = .005,
      OY = .001,
      gY = 2,
      aY = "Fluid Tank",
      vY = "Coolant Mixer",
      uY = 144;

    function sY(YY) {
      const rY = YY.split("|")[0];
      return (0, FY.h)(rY) ? rY === FY.c ? "cryo" : "water" : null
    }
    const iY = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      yY = 63;

    function QY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const DY = rY ? function(YY, rY, DY) {
        const FY = iY.findIndex((FY => {
          let [AY, IY, RY] = FY;
          return AY === YY && IY === rY && RY === DY
        }));
        return FY < 0 ? 0 : 1 << FY
      }(rY[0], rY[1], rY[2]) : 0;
      return "maker" === YY ? {
        kind: YY,
        faces: DY
      } : "user" === YY ? {
        kind: YY,
        faces: yY & ~DY
      } : {
        kind: YY,
        faces: yY
      }
    }

    function oY(YY) {
      return "pipe" === YY || "tank" === YY || "maker" === YY
    }

    function WY(YY, rY, DY) {
      return 0 !== (YY.faces & 1 << DY) && 0 !== (rY.faces & 1 << (1 ^ DY)) && (oY(YY.kind) || oY(rY.kind))
    }
    const EY = (YY, rY, DY, FY) => ({
        input: YY,
        inputAmount: FY,
        output: rY,
        outputAmount: DY
      }),
      mY = {
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
          recipes: [EY("Uranium Grit", "Uranium Pellet", 1, 12), EY("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [EY("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: uY,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function VY(YY, rY) {
      return 1e3 * (null !== rY && void 0 !== rY ? rY : 0) / YY.opMs
    }

    function SY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const DY = VY(mY["Coolant Mixer"], uY) * rY;
      return YY <= 0 ? 0 : Math.ceil(YY / DY - 1e-9)
    }
    const lY = "baf2Water",
      TY = "baf2waterclose",
      eY = "baf2wateropen"
  },
  37805: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => NY,
      g: () => VY,
      h: () => mY
    });
    var FY = DY(8830),
      AY = DY(8851),
      IY = DY(8903),
      RY = DY(37812),
      OY = DY(8900);
    const gY = (0, RY.L)("pipe"),
      aY = (0, RY.L)("tank"),
      vY = (0, RY.L)("port"),
      uY = "Reactor Port";

    function sY(YY, rY, DY) {
      const FY = new Set([IY.e, IY.c, uY, ...rY, ...DY, ...YY ? [RY.l] : []]);
      return {
        makers: new Set(rY),
        roots: FY
      }
    }
    const iY = {
        water: sY(!0, ["Condenser"], ["Centrifuge", "Synthesizer", RY.b]),
        cryo: sY(!1, [RY.b], [])
      },
      yY = new Set([...iY.water.roots, ...iY.cryo.roots]),
      QY = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      oY = AY.e.map((YY => QY[YY])),
      WY = oY.map((YY => {
        let [rY, DY, FY] = YY;
        return RY.z.findIndex((YY => {
          let [AY, IY, RY] = YY;
          return AY === rY && IY === DY && RY === FY
        }))
      }));

    function EY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const DY = FY.h[YY],
        AY = null === DY || void 0 === DY ? void 0 : DY.meta.rootName,
        sY = iY[rY];
      if (!AY || !sY.roots.has(AY)) return null;
      if ((0, IY.h)(AY)) return (0, RY.H)(DY.name) === rY ? gY : null;
      if (AY === RY.l) return aY;
      if (AY === uY) return DY.name.endsWith("|Water") ? vY : null;
      const [yY, QY] = OY.g[(DY.meta.rot || 1) - 1];
      return (0, RY.L)(sY.makers.has(AY) ? "maker" : "user", [-yY, 0, -QY])
    }

    function mY(YY, rY, DY, AY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: OY
      } = iY[IY];
      return oY.some(((aY, vY) => {
        var uY, sY;
        let [iY, yY, QY] = aY;
        const oY = YY(rY + iY, DY + yY, AY + QY),
          mY = EY(oY, IY);
        return null !== mY && OY.has(null !== (uY = null === (sY = FY.h[oY]) || void 0 === sY ? void 0 : sY.meta.rootName) && void 0 !== uY ? uY : "") && !(0, RY.M)(gY, mY, WY[vY])
      }))
    }

    function VY(YY) {
      const rY = FY.h[YY];
      return rY ? (0, RY.H)(rY.name) : null
    }
    let SY = null;

    function lY(YY) {
      if (!SY) {
        SY = new Map;
        for (const YY of ["water", "cryo"])
          for (let rY = 0; rY < 64; rY++)
            for (const DY of [!1, !0]) SY.set((0, IY.j)(YY, rY, DY), {
              ui: YY,
              mask: rY,
              full: DY
            })
      }
      return SY.get(YY)
    }
    const TY = new Map(Array.from({
      length: IY.g + 1
    }, ((YY, rY) => [(0, IY.l)(rY), rY])));

    function eY(YY, rY, DY, AY, IY, RY) {
      return oY.some(((OY, gY) => {
        var aY, vY, uY;
        let [sY, iY, yY] = OY;
        if (0 === (RY >> gY & 1)) return !1;
        const QY = null !== (aY = null === (vY = FY.h[YY(rY + sY, DY + iY, AY + yY)]) || void 0 === vY ? void 0 : vY.name) && void 0 !== aY ? aY : "",
          oY = lY(QY);
        return oY ? oY.ui === IY && oY.full : (null !== (uY = function(YY) {
          var rY;
          return null !== (rY = TY.get(YY)) && void 0 !== rY ? rY : null
        }(QY)) && void 0 !== uY ? uY : 0) > 0
      }))
    }
    class NY {
      constructor() {
        this.reshapeOffsets = oY
      }
      handles(YY) {
        return null !== VY(YY)
      }
      affects(YY) {
        var rY, DY;
        return yY.has(null !== (rY = null === (DY = FY.h[YY]) || void 0 === DY ? void 0 : DY.meta.rootName) && void 0 !== rY ? rY : "")
      }
      placedBy(YY) {
        var rY;
        return (null === (rY = FY.h[YY]) || void 0 === rY ? void 0 : rY.meta.rootName) === IY.c ? IY.e : null
      }
      shape(YY, rY, DY, AY, OY, aY) {
        var vY, uY, sY;
        const iY = null !== (vY = null === (uY = FY.h[OY]) || void 0 === uY ? void 0 : uY.name) && void 0 !== vY ? vY : "",
          yY = aY || iY !== IY.e ? null !== (sY = (0, RY.H)(iY)) && void 0 !== sY ? sY : "water" : function(YY, rY, DY, FY) {
            return oY.some(((AY, IY) => {
              let [OY, aY, vY] = AY;
              const uY = EY(YY(rY + OY, DY + aY, FY + vY), "cryo");
              return null !== uY && "port" !== uY.kind && (0, RY.M)(gY, uY, WY[IY])
            })) ? "cryo" : "water"
          }(YY, rY, DY, AY),
          QY = function(YY, rY, DY, FY) {
            let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              IY = 0;
            return oY.forEach(((OY, aY) => {
              let [vY, uY, sY] = OY;
              const iY = EY(YY(rY + vY, DY + uY, FY + sY), AY);
              iY && (0, RY.M)(gY, iY, WY[aY]) && (IY |= 1 << aY)
            })), IY
          }(YY, rY, DY, AY, yY),
          mY = aY ? function(YY) {
            var rY;
            return !0 === (null === (rY = lY(YY)) || void 0 === rY ? void 0 : rY.full)
          }(iY) : eY(YY, rY, DY, AY, yY, QY);
        return (0, FY.k)((0, IY.j)(yY, QY, mY))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);