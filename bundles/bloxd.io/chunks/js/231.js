export const id = 231;
export const ids = [231];
export const modules = {
  37399: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY,
      i: () => FY,
      l: () => OY,
      o: () => AY,
      s: () => RY,
      w: () => IY
    });
    const FY = 1.001,
      AY = .501,
      IY = .025,
      RY = .75,
      OY = .08,
      gY = 4;

    function aY() {
      const YY = AY,
        rY = IY,
        DY = YY - rY / 2,
        FY = (2 * YY - 2 * rY) / (2 * gY - 1),
        RY = [];
      for (const AY of [-DY, DY])
        for (const IY of [-DY, DY])
          for (let DY = 0; DY < gY; DY++) {
            const OY = -YY + rY + FY * (2 * DY + .5);
            RY.push([FY, rY, rY, OY, AY, IY]), RY.push([rY, FY, rY, AY, OY, IY]), RY.push([rY, rY, FY, AY, IY, OY])
          }
      for (const AY of [-DY, DY])
        for (const YY of [-DY, DY])
          for (const FY of [-DY, DY]) RY.push([rY, rY, rY, AY, YY, FY]);
      return RY
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
  37798: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => CY,
      g: () => fY
    });
    var FY = DY(8830),
      AY = DY(8862);
    const IY = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var RY = DY(8873),
      OY = DY(37605),
      gY = DY(8870);
    const aY = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function vY(YY) {
      let [rY, DY] = YY;
      return [-DY, rY]
    }

    function uY(YY, rY) {
      return YY[0] === rY[0] && YY[1] === rY[1]
    }

    function sY(YY, rY) {
      return YY[0] * rY[0] + YY[1] * rY[1] === 0
    }
    const iY = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var yY = DY(8900);

    function QY(YY, rY, DY, FY, AY) {
      return rY < yY.s || rY >= yY.s + yY.v || Math.floor(YY / yY.A) === Math.floor(FY / yY.A) && Math.floor(DY / yY.A) === Math.floor(AY / yY.A)
    }
    const oY = "Splitter",
      WY = "Sorting Gate",
      EY = new Set(yY.P),
      mY = new Set([...yY.P, "Belt Loader", "Fast Loader", WY]),
      VY = new Set(yY.z),
      SY = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function lY(YY) {
      var rY, DY;
      return null !== (rY = null === (DY = FY.h[YY]) || void 0 === DY ? void 0 : DY.meta.rootName) && void 0 !== rY ? rY : ""
    }

    function TY(YY) {
      return lY(YY) === yY.k && (0, yY.Y)(FY.h[YY].name)
    }
    var eY = DY(8865),
      NY = DY(8884);
    const BY = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function cY(YY) {
      var rY, DY;
      const AY = null === (rY = FY.h[YY]) || void 0 === rY ? void 0 : rY.meta;
      return (null === AY || void 0 === AY ? void 0 : AY.rootName) !== NY.m ? null : {
        rot: null !== (DY = AY.rot) && void 0 !== DY ? DY : 1,
        half: (0, NY.d)(AY.rootName, AY.metaStr)
      }
    }

    function KY(YY, rY, DY, FY) {
      return cY(YY(rY, DY, FY))
    }

    function HY(YY, rY, DY, FY, AY) {
      let {
        rot: IY,
        half: RY
      } = AY;
      const [OY, gY] = (0, NY.k)(IY, RY), aY = KY(YY, rY + OY, DY, FY + gY);
      return null !== aY && aY.rot === IY && aY.half === NY.q[RY]
    }
    var zY = DY(37805);
    const ZY = [new class {
      constructor() {
        this.reshapeOffsets = iY
      }
      handles(YY) {
        var rY;
        return "Stairs" === (null === (rY = FY.h[YY]) || void 0 === rY ? void 0 : rY.model)
      }
      affects(YY) {
        return this.handles(YY)
      }
      shape(YY, rY, DY, AY, IY) {
        const RY = this.stairsOf(IY),
          OY = this.cornerAt(YY, rY, DY, AY, RY),
          aY = RY.half === gY.e.top ? "top" : "bot";
        return (0, FY.k)(`${FY.h[IY].meta.rootName}|meta|rot${RY.rot}|${aY}${null===OY?"":`|${OY}`}`)
      }
      stairsOf(YY) {
        const {
          rot: rY,
          halfblockPlacement: DY
        } = FY.h[YY].meta;
        return {
          rot: rY,
          half: DY
        }
      }
      stairsAt(YY, rY, DY, FY) {
        const AY = YY(rY, DY, FY);
        return this.handles(AY) ? this.stairsOf(AY) : null
      }
      cornerAt(YY, rY, DY, FY, AY) {
        let {
          rot: IY,
          half: RY
        } = AY;
        const OY = aY[IY],
          gY = AY => {
            let [OY, gY] = AY;
            const aY = this.stairsAt(YY, rY + OY, DY, FY + gY);
            return null !== aY && aY.rot === IY && aY.half === RY
          },
          iY = this.stairsAt(YY, rY + OY[0], DY, FY + OY[1]);
        if (null !== iY && iY.half === RY) {
          const YY = aY[iY.rot];
          if (sY(OY, YY) && !gY([-YY[0], -YY[1]])) return uY(YY, vY(OY)) ? "outerLeft" : "outerRight"
        }
        const yY = this.stairsAt(YY, rY - OY[0], DY, FY - OY[1]);
        if (null !== yY && yY.half === RY) {
          const YY = aY[yY.rot];
          if (sY(OY, YY) && !gY(YY)) return uY(YY, vY(OY)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = IY, this.rootIds = new Set(AY.h.map((YY => (0, FY.k)(YY))))
      }
      handles(YY) {
        var rY;
        const DY = null === (rY = FY.h[YY]) || void 0 === rY ? void 0 : rY.meta;
        return void 0 !== DY && this.rootIds.has(DY.rootId)
      }
      affects(YY) {
        return this.handles(YY)
      }
      placedBy(YY) {
        return FY.h[YY].meta.rootName === AY.n ? null : AY.n
      }
      shape(YY, rY, DY, IY, RY) {
        const {
          rootId: OY,
          rootName: gY,
          rot: aY
        } = FY.h[RY].meta;
        let vY = 0;
        return AY.w[aY].forEach(((AY, RY) => {
          var gY;
          let [uY, sY, iY] = AY;
          const yY = null === (gY = FY.h[YY(rY + uY, DY + sY, IY + iY)]) || void 0 === gY ? void 0 : gY.meta;
          (null === yY || void 0 === yY ? void 0 : yY.rootId) === OY && yY.rot === aY && (vY |= 1 << RY)
        })), (0, FY.k)((0, AY.f)(gY, aY, vY))
      }
    }, ...RY.e.map((YY => new OY.d(YY))), new class {
      constructor() {
        this.reshapeOffsets = SY
      }
      handles(YY) {
        const rY = lY(YY);
        return EY.has(rY) || rY === yY.k
      }
      affects(YY) {
        const rY = lY(YY);
        return mY.has(rY) || VY.has(rY) || rY === oY || rY === yY.k || void 0 !== yY.c[rY]
      }
      shape(YY, rY, DY, AY, IY, RY) {
        const {
          rootName: OY,
          rot: gY
        } = FY.h[IY].meta;
        return OY === yY.k ? RY ? IY : function(YY, rY, DY, AY, IY) {
          const [RY, OY] = yY.g[IY - 1];
          for (let gY = 1; gY <= yY.L; gY++) {
            const [aY, vY] = [rY - RY * gY, AY - OY * gY], uY = YY(aY, DY, vY);
            if (lY(uY) === yY.k && FY.h[uY].meta.rot === IY && QY(rY, DY, AY, aY, vY)) return (0, FY.k)((0, yY.cb)(IY, !TY(uY)))
          }
          return (0, FY.k)((0, yY.cb)(IY, !1))
        }(YY, rY, DY, AY, gY) : (0, FY.k)((0, yY.R)(OY, gY, function(YY, rY, DY, AY, IY) {
          const [RY, OY] = yY.g[IY - 1], gY = (IY, gY) => function(YY, rY, DY, AY, IY) {
            var RY;
            const OY = null === (RY = FY.h[YY]) || void 0 === RY ? void 0 : RY.meta;
            if (!OY) return !1;
            const gY = OY.rootName,
              aY = mY.has(gY) || TY(YY);
            if (!aY && !VY.has(gY) && gY !== oY) return !1;
            const [vY, uY] = yY.g[OY.rot - 1];
            return aY ? vY === -rY && uY === -DY : VY.has(gY) ? vY === rY && uY === DY : (0, yY.$)(FY.h[YY].name, vY, uY).some((YY => {
              let [FY, AY] = YY;
              return FY === -rY && AY === -DY
            })) && !(AY === rY && IY === DY)
          }(YY(rY + IY, DY, AY + gY), IY, gY, RY, OY), aY = YY(rY - RY, DY, AY - OY), vY = lY(aY) === oY && FY.h[aY].meta.rot === IY, uY = 1 === yY.c[lY(YY(rY, DY - 1, AY))] || -1 === yY.c[lY(YY(rY, DY + 1, AY))];
          if (uY || vY || function(YY, rY, DY) {
              if (lY(YY) !== WY) return !1;
              const [AY, IY] = yY.g[FY.h[YY].meta.rot - 1], [RY, OY] = (0, yY.U)(FY.h[YY].name, AY, IY);
              return rY === RY && DY === OY
            }(aY, RY, OY) || gY(-RY, -OY)) return null;
          const sY = gY(-OY, RY),
            iY = gY(OY, -RY);
          if (sY === iY) return null;
          return sY ? "turnLeft" : "turnRight"
        }(YY, rY, DY, AY, gY)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = BY, this.rootId = (0, FY.k)(NY.m)
      }
      handles(YY) {
        var rY;
        return (null === (rY = FY.h[YY]) || void 0 === rY ? void 0 : rY.meta.rootId) === this.rootId
      }
      affects(YY) {
        return this.handles(YY)
      }
      shape(YY, rY, DY, AY, IY, RY) {
        const OY = cY(IY);
        return (0, FY.k)((gY = OY.rot, null !== (aY = RY ? this.reshapedHalf(YY, rY, DY, AY, OY) : this.placedHalf(YY, rY, DY, AY, OY.rot)) ? (0, NY.c)(NY.m, gY, aY) : 1 === gY ? NY.m : `${NY.m}|meta|rot${gY}`));
        var gY, aY
      }
      placedHalf(YY, rY, DY, FY, AY) {
        const [IY, RY] = eY.d[AY];
        for (const [OY, gY] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const aY = rY + gY * IY,
            vY = FY + gY * RY,
            uY = KY(YY, aY, DY, vY);
          if (null !== uY && uY.rot === AY && (null === uY.half || !HY(YY, aY, DY, vY, uY))) return OY
        }
        return null
      }
      reshapedHalf(YY, rY, DY, FY, AY) {
        if (null !== AY.half && HY(YY, rY, DY, FY, AY)) return AY.half;
        for (const IY of ["right", "left"]) {
          const [RY, OY] = (0, NY.k)(AY.rot, IY), gY = KY(YY, rY + RY, DY, FY + OY);
          if (null !== gY && gY.rot === AY.rot && gY.half === NY.q[IY]) return IY
        }
        return null
      }
    }, new zY.d];

    function CY(YY, rY, DY, FY, AY) {
      let IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const RY of ZY)
        if (RY.handles(AY)) return RY.shape(YY, rY, DY, FY, AY, IY);
      return AY
    }

    function fY(YY) {
      for (const FY of ZY) {
        var rY, DY;
        if (FY.handles(YY)) return null !== (rY = null === (DY = FY.placedBy) || void 0 === DY ? void 0 : DY.call(FY, YY)) && void 0 !== rY ? rY : null
      }
      return null
    }
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
  },
  37570: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      f: () => IY
    });
    const FY = ["Chest", "Loot Chest", "Moonstone Chest"],
      AY = [{
        name: "Workbench",
        exactMatch: !0
      }, {
        name: "Furnace",
        exactMatch: !0
      }, {
        name: "Artisan Bench",
        exactMatch: !0
      }, {
        name: "Potion Table",
        exactMatch: !0
      }, {
        name: "Salvaging Table",
        exactMatch: !0
      }, {
        name: "Enchanting Table",
        exactMatch: !1
      }];

    function IY(YY) {
      return AY.find((rY => rY.exactMatch ? YY === rY.name : YY.includes(rY.name)))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);