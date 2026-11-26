export const id = 265;
export const ids = [265];
export const modules = {
  39211: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      i: () => JV,
      m: () => pV,
      q: () => YV,
      s: () => yV,
      u: () => UV
    });
    const JV = 1.001,
      YV = .501,
      UV = .025,
      yV = .75,
      pV = .08,
      QV = 4;

    function nV() {
      const VV = YV,
        eV = UV,
        xV = VV - eV / 2,
        JV = (2 * VV - 2 * eV) / (2 * QV - 1),
        yV = [];
      for (const YV of [-xV, xV])
        for (const UV of [-xV, xV])
          for (let xV = 0; xV < QV; xV++) {
            const pV = -VV + eV + JV * (2 * xV + .5);
            yV.push([JV, eV, eV, pV, YV, UV]), yV.push([eV, JV, eV, YV, pV, UV]), yV.push([eV, eV, JV, YV, UV, pV])
          }
      for (const YV of [-xV, xV])
        for (const VV of [-xV, xV])
          for (const JV of [-xV, xV]) yV.push([eV, eV, eV, YV, VV, JV]);
      return yV
    }
  },
  39575: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => AV,
      D: () => FV,
      H: () => tV,
      K: () => vV,
      O: () => bV,
      P: () => BV,
      T: () => YV,
      d: () => wV,
      f: () => QV,
      i: () => qV,
      j: () => nV,
      l: () => pV,
      n: () => yV,
      o: () => UV,
      s: () => PV,
      v: () => rV,
      x: () => TV
    });
    var JV = xV(9906);

    function YV(VV) {
      return Math.floor(VV).toLocaleString("en-US")
    }
    const UV = 2e3,
      yV = .005,
      pV = .001,
      QV = 2,
      nV = "Fluid Tank",
      wV = "Coolant Mixer",
      ZV = 144;

    function vV(VV) {
      const eV = VV.split("|")[0];
      return (0, JV.j)(eV) ? eV === JV.e ? "cryo" : "water" : null
    }
    const rV = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      kV = 63;

    function bV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const xV = eV ? function(VV, eV, xV) {
        const JV = rV.findIndex((JV => {
          let [YV, UV, yV] = JV;
          return YV === VV && UV === eV && yV === xV
        }));
        return JV < 0 ? 0 : 1 << JV
      }(eV[0], eV[1], eV[2]) : 0;
      return "maker" === VV ? {
        kind: VV,
        faces: xV
      } : "user" === VV ? {
        kind: VV,
        faces: kV & ~xV
      } : {
        kind: VV,
        faces: kV
      }
    }

    function EV(VV) {
      return "pipe" === VV || "tank" === VV || "maker" === VV
    }

    function BV(VV, eV, xV) {
      return 0 !== (VV.faces & 1 << xV) && 0 !== (eV.faces & 1 << (1 ^ xV)) && (EV(VV.kind) || EV(eV.kind))
    }
    const jV = (VV, eV, xV, JV) => ({
        input: VV,
        inputAmount: JV,
        output: eV,
        outputAmount: xV
      }),
      qV = {
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
          recipes: [jV("Uranium Grit", "Uranium Pellet", 1, 12), jV("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [jV("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: ZV,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function tV(VV, eV) {
      return 1e3 * (null !== eV && void 0 !== eV ? eV : 0) / VV.opMs
    }

    function FV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const xV = tV(qV["Coolant Mixer"], ZV) * eV;
      return VV <= 0 ? 0 : Math.ceil(VV / xV - 1e-9)
    }
    const TV = "baf2Water",
      PV = "baf2waterclose",
      AV = "baf2wateropen"
  },
  39562: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => gV,
      f: () => DV
    });
    var JV = xV(9820),
      YV = xV(9848);
    const UV = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var yV = xV(9865),
      pV = xV(39360),
      QV = xV(9861);
    const nV = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function wV(VV) {
      let [eV, xV] = VV;
      return [-xV, eV]
    }

    function ZV(VV, eV) {
      return VV[0] === eV[0] && VV[1] === eV[1]
    }

    function vV(VV, eV) {
      return VV[0] * eV[0] + VV[1] * eV[1] === 0
    }
    const rV = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var kV = xV(9902);

    function bV(VV, eV, xV, JV, YV) {
      return eV < kV.p || eV >= kV.p + kV.t || Math.floor(VV / kV.w) === Math.floor(JV / kV.w) && Math.floor(xV / kV.w) === Math.floor(YV / kV.w)
    }
    const EV = "Splitter",
      BV = "Sorting Gate",
      jV = new Set(kV.I),
      qV = new Set([...kV.I, "Belt Loader", "Fast Loader", BV]),
      tV = new Set(kV.u),
      FV = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function TV(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = JV.k[VV]) || void 0 === xV ? void 0 : xV.meta.rootName) && void 0 !== eV ? eV : ""
    }

    function PV(VV) {
      return TV(VV) === kV.i && (0, kV.R)(JV.k[VV].name)
    }
    var AV = xV(9853),
      NV = xV(9881);
    const XV = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function MV(VV) {
      var eV, xV;
      const YV = null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta;
      return (null === YV || void 0 === YV ? void 0 : YV.rootName) !== NV.p ? null : {
        rot: null !== (xV = YV.rot) && void 0 !== xV ? xV : 1,
        half: (0, NV.f)(YV.rootName, YV.metaStr)
      }
    }

    function zV(VV, eV, xV, JV) {
      return MV(VV(eV, xV, JV))
    }

    function GV(VV, eV, xV, JV, YV) {
      let {
        rot: UV,
        half: yV
      } = YV;
      const [pV, QV] = (0, NV.m)(UV, yV), nV = zV(VV, eV + pV, xV, JV + QV);
      return null !== nV && nV.rot === UV && nV.half === NV.t[yV]
    }
    var WV = xV(39568);
    const RV = [new class {
      constructor() {
        this.reshapeOffsets = rV
      }
      handles(VV) {
        var eV;
        return "Stairs" === (null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.model)
      }
      affects(VV) {
        return this.handles(VV)
      }
      shape(VV, eV, xV, YV, UV) {
        const yV = this.stairsOf(UV),
          pV = this.cornerAt(VV, eV, xV, YV, yV),
          nV = yV.half === QV.e.top ? "top" : "bot";
        return (0, JV.n)(`${JV.k[UV].meta.rootName}|meta|rot${yV.rot}|${nV}${null===pV?"":`|${pV}`}`)
      }
      stairsOf(VV) {
        const {
          rot: eV,
          halfblockPlacement: xV
        } = JV.k[VV].meta;
        return {
          rot: eV,
          half: xV
        }
      }
      stairsAt(VV, eV, xV, JV) {
        const YV = VV(eV, xV, JV);
        return this.handles(YV) ? this.stairsOf(YV) : null
      }
      cornerAt(VV, eV, xV, JV, YV) {
        let {
          rot: UV,
          half: yV
        } = YV;
        const pV = nV[UV],
          QV = YV => {
            let [pV, QV] = YV;
            const nV = this.stairsAt(VV, eV + pV, xV, JV + QV);
            return null !== nV && nV.rot === UV && nV.half === yV
          },
          rV = this.stairsAt(VV, eV + pV[0], xV, JV + pV[1]);
        if (null !== rV && rV.half === yV) {
          const VV = nV[rV.rot];
          if (vV(pV, VV) && !QV([-VV[0], -VV[1]])) return ZV(VV, wV(pV)) ? "outerLeft" : "outerRight"
        }
        const kV = this.stairsAt(VV, eV - pV[0], xV, JV - pV[1]);
        if (null !== kV && kV.half === yV) {
          const VV = nV[kV.rot];
          if (vV(pV, VV) && !QV(VV)) return ZV(VV, wV(pV)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = UV, this.rootIds = new Set(YV.h.map((VV => (0, JV.n)(VV))))
      }
      handles(VV) {
        var eV;
        const xV = null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta;
        return void 0 !== xV && this.rootIds.has(xV.rootId)
      }
      affects(VV) {
        return this.handles(VV)
      }
      placedBy(VV) {
        return JV.k[VV].meta.rootName === YV.o ? null : YV.o
      }
      shape(VV, eV, xV, UV, yV) {
        const {
          rootId: pV,
          rootName: QV,
          rot: nV
        } = JV.k[yV].meta;
        let wV = 0;
        return YV.t[nV].forEach(((YV, yV) => {
          var QV;
          let [ZV, vV, rV] = YV;
          const kV = null === (QV = JV.k[VV(eV + ZV, xV + vV, UV + rV)]) || void 0 === QV ? void 0 : QV.meta;
          (null === kV || void 0 === kV ? void 0 : kV.rootId) === pV && kV.rot === nV && (wV |= 1 << yV)
        })), (0, JV.n)((0, YV.f)(QV, nV, wV))
      }
    }, ...yV.d.map((VV => new pV.c(VV))), new class {
      constructor() {
        this.reshapeOffsets = FV
      }
      handles(VV) {
        const eV = TV(VV);
        return jV.has(eV) || eV === kV.i
      }
      affects(VV) {
        const eV = TV(VV);
        return qV.has(eV) || tV.has(eV) || eV === EV || eV === kV.i || void 0 !== kV.d[eV]
      }
      shape(VV, eV, xV, YV, UV, yV) {
        const {
          rootName: pV,
          rot: QV
        } = JV.k[UV].meta;
        return pV === kV.i ? yV ? UV : function(VV, eV, xV, YV, UV) {
          const [yV, pV] = kV.e[UV - 1];
          for (let QV = 1; QV <= kV.H; QV++) {
            const [nV, wV] = [eV - yV * QV, YV - pV * QV], ZV = VV(nV, xV, wV);
            if (TV(ZV) === kV.i && JV.k[ZV].meta.rot === UV && bV(eV, xV, YV, nV, wV)) return (0, JV.n)((0, kV.Y)(UV, !PV(ZV)))
          }
          return (0, JV.n)((0, kV.Y)(UV, !1))
        }(VV, eV, xV, YV, QV) : (0, JV.n)((0, kV.K)(pV, QV, function(VV, eV, xV, YV, UV) {
          const [yV, pV] = kV.e[UV - 1], QV = (UV, yV) => function(VV, eV, xV) {
            var YV;
            const UV = null === (YV = JV.k[VV]) || void 0 === YV ? void 0 : YV.meta;
            if (!UV) return !1;
            const yV = UV.rootName,
              pV = qV.has(yV) || PV(VV);
            if (!pV && !tV.has(yV) && yV !== EV) return !1;
            const [QV, nV] = kV.e[UV.rot - 1];
            if (pV && QV === -eV && nV === -xV) return !0;
            if (tV.has(yV)) return QV === eV && nV === xV;
            const wV = JV.k[VV].name;
            return (yV === EV ? (0, kV.V)(wV, QV, nV) : yV === BV ? [(0, kV.L)(wV, QV, nV)] : []).some((VV => {
              let [JV, YV] = VV;
              return JV === -eV && YV === -xV
            }))
          }(VV(eV + UV, xV, YV + yV), UV, yV), nV = VV(eV - yV, xV, YV - pV), wV = TV(nV) === EV && JV.k[nV].meta.rot === UV, ZV = 1 === kV.d[TV(VV(eV, xV - 1, YV))] || -1 === kV.d[TV(VV(eV, xV + 1, YV))];
          if (ZV || wV || QV(-yV, -pV)) return null;
          const vV = QV(-pV, yV),
            rV = QV(pV, -yV);
          if (vV === rV) return null;
          return vV ? "turnLeft" : "turnRight"
        }(VV, eV, xV, YV, QV)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = XV, this.rootId = (0, JV.n)(NV.p)
      }
      handles(VV) {
        var eV;
        return (null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta.rootId) === this.rootId
      }
      affects(VV) {
        return this.handles(VV)
      }
      shape(VV, eV, xV, YV, UV, yV) {
        const pV = MV(UV);
        return (0, JV.n)((QV = pV.rot, null !== (nV = yV ? this.reshapedHalf(VV, eV, xV, YV, pV) : this.placedHalf(VV, eV, xV, YV, pV.rot)) ? (0, NV.c)(NV.p, QV, nV) : 1 === QV ? NV.p : `${NV.p}|meta|rot${QV}`));
        var QV, nV
      }
      placedHalf(VV, eV, xV, JV, YV) {
        const [UV, yV] = AV.e[YV];
        for (const [pV, QV] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const nV = eV + QV * UV,
            wV = JV + QV * yV,
            ZV = zV(VV, nV, xV, wV);
          if (null !== ZV && ZV.rot === YV && (null === ZV.half || !GV(VV, nV, xV, wV, ZV))) return pV
        }
        return null
      }
      reshapedHalf(VV, eV, xV, JV, YV) {
        if (null !== YV.half && GV(VV, eV, xV, JV, YV)) return YV.half;
        for (const UV of ["right", "left"]) {
          const [yV, pV] = (0, NV.m)(YV.rot, UV), QV = zV(VV, eV + yV, xV, JV + pV);
          if (null !== QV && QV.rot === YV.rot && QV.half === NV.t[UV]) return UV
        }
        return null
      }
    }, new WV.c];

    function gV(VV, eV, xV, JV, YV) {
      let UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const yV of RV)
        if (yV.handles(YV)) return yV.shape(VV, eV, xV, JV, YV, UV);
      return YV
    }

    function DV(VV) {
      for (const JV of RV) {
        var eV, xV;
        if (JV.handles(VV)) return null !== (eV = null === (xV = JV.placedBy) || void 0 === xV ? void 0 : xV.call(JV, VV)) && void 0 !== eV ? eV : null
      }
      return null
    }
  },
  39568: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => NV,
      d: () => tV,
      e: () => qV
    });
    var JV = xV(9820),
      YV = xV(9843),
      UV = xV(9906),
      yV = xV(39575),
      pV = xV(9902);
    const QV = (0, yV.O)("pipe"),
      nV = (0, yV.O)("tank"),
      wV = (0, yV.O)("port"),
      ZV = "Reactor Port";

    function vV(VV, eV, xV) {
      const JV = new Set([UV.f, UV.e, ZV, ...eV, ...xV, ...VV ? [yV.j] : []]);
      return {
        makers: new Set(eV),
        roots: JV
      }
    }
    const rV = {
        water: vV(!0, ["Condenser"], ["Centrifuge", "Synthesizer", yV.d]),
        cryo: vV(!1, [yV.d], [])
      },
      kV = new Set([...rV.water.roots, ...rV.cryo.roots]),
      bV = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      EV = YV.g.map((VV => bV[VV])),
      BV = EV.map((VV => {
        let [eV, xV, JV] = VV;
        return yV.v.findIndex((VV => {
          let [YV, UV, yV] = VV;
          return YV === eV && UV === xV && yV === JV
        }))
      }));

    function jV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const xV = JV.k[VV],
        YV = null === xV || void 0 === xV ? void 0 : xV.meta.rootName,
        vV = rV[eV];
      if (!YV || !vV.roots.has(YV)) return null;
      if ((0, UV.j)(YV)) return (0, yV.K)(xV.name) === eV ? QV : null;
      if (YV === yV.j) return nV;
      if (YV === ZV) return xV.name.endsWith("|Water") ? wV : null;
      const [kV, bV] = pV.e[(xV.meta.rot || 1) - 1];
      return (0, yV.O)(vV.makers.has(YV) ? "maker" : "user", [-kV, 0, -bV])
    }

    function qV(VV, eV, xV, YV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: pV
      } = rV[UV];
      return EV.some(((nV, wV) => {
        var ZV, vV;
        let [rV, kV, bV] = nV;
        const EV = VV(eV + rV, xV + kV, YV + bV),
          qV = jV(EV, UV);
        return null !== qV && pV.has(null !== (ZV = null === (vV = JV.k[EV]) || void 0 === vV ? void 0 : vV.meta.rootName) && void 0 !== ZV ? ZV : "") && !(0, yV.P)(QV, qV, BV[wV])
      }))
    }

    function tV(VV) {
      const eV = JV.k[VV];
      return eV ? (0, yV.K)(eV.name) : null
    }
    let FV = null;

    function TV(VV) {
      if (!FV) {
        FV = new Map;
        for (const VV of ["water", "cryo"])
          for (let eV = 0; eV < 64; eV++)
            for (const xV of [!1, !0]) FV.set((0, UV.n)(VV, eV, xV), {
              Cr: VV,
              mask: eV,
              full: xV
            })
      }
      return FV.get(VV)
    }
    const PV = new Map(Array.from({
      length: UV.g + 1
    }, ((VV, eV) => [(0, UV.p)(eV), eV])));

    function AV(VV, eV, xV, YV, UV, yV) {
      return EV.some(((pV, QV) => {
        var nV, wV, ZV;
        let [vV, rV, kV] = pV;
        if (0 === (yV >> QV & 1)) return !1;
        const bV = null !== (nV = null === (wV = JV.k[VV(eV + vV, xV + rV, YV + kV)]) || void 0 === wV ? void 0 : wV.name) && void 0 !== nV ? nV : "",
          EV = TV(bV);
        return EV ? EV.Cr === UV && EV.full : (null !== (ZV = function(VV) {
          var eV;
          return null !== (eV = PV.get(VV)) && void 0 !== eV ? eV : null
        }(bV)) && void 0 !== ZV ? ZV : 0) > 0
      }))
    }
    class NV {
      constructor() {
        this.reshapeOffsets = EV
      }
      handles(VV) {
        return null !== tV(VV)
      }
      affects(VV) {
        var eV, xV;
        return kV.has(null !== (eV = null === (xV = JV.k[VV]) || void 0 === xV ? void 0 : xV.meta.rootName) && void 0 !== eV ? eV : "")
      }
      placedBy(VV) {
        var eV;
        return (null === (eV = JV.k[VV]) || void 0 === eV ? void 0 : eV.meta.rootName) === UV.e ? UV.f : null
      }
      shape(VV, eV, xV, YV, pV, nV) {
        var wV, ZV, vV;
        const rV = null !== (wV = null === (ZV = JV.k[pV]) || void 0 === ZV ? void 0 : ZV.name) && void 0 !== wV ? wV : "",
          kV = nV || rV !== UV.f ? null !== (vV = (0, yV.K)(rV)) && void 0 !== vV ? vV : "water" : function(VV, eV, xV, JV) {
            return EV.some(((YV, UV) => {
              let [pV, nV, wV] = YV;
              const ZV = jV(VV(eV + pV, xV + nV, JV + wV), "cryo");
              return null !== ZV && "port" !== ZV.kind && (0, yV.P)(QV, ZV, BV[UV])
            })) ? "cryo" : "water"
          }(VV, eV, xV, YV),
          bV = function(VV, eV, xV, JV) {
            let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              UV = 0;
            return EV.forEach(((pV, nV) => {
              let [wV, ZV, vV] = pV;
              const rV = jV(VV(eV + wV, xV + ZV, JV + vV), YV);
              rV && (0, yV.P)(QV, rV, BV[nV]) && (UV |= 1 << nV)
            })), UV
          }(VV, eV, xV, YV, kV),
          qV = nV ? function(VV) {
            var eV;
            return !0 === (null === (eV = TV(VV)) || void 0 === eV ? void 0 : eV.full)
          }(rV) : AV(VV, eV, xV, YV, kV, bV);
        return (0, JV.n)((0, UV.n)(kV, bV, qV))
      }
    }
  },
  39313: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      d: () => UV
    });
    const JV = ["Chest", "Loot Chest", "Moonstone Chest"],
      YV = [{
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

    function UV(VV) {
      return YV.find((eV => eV.exactMatch ? VV === eV.name : VV.includes(eV.name)))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);