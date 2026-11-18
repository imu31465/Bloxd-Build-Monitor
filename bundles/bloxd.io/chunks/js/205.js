export const id = 205;
export const ids = [205];
export const modules = {
  37025: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ,
      g: () => FJ,
      h: () => AJ,
      i: () => UJ,
      l: () => XJ,
      n: () => eJ
    });
    const FJ = 1.001,
      UJ = .501,
      eJ = .025,
      XJ = .75,
      AJ = .08,
      qJ = 4;

    function jJ() {
      const JJ = UJ,
        cJ = eJ,
        ZJ = JJ - cJ / 2,
        FJ = (2 * JJ - 2 * cJ) / (2 * qJ - 1),
        XJ = [];
      for (const UJ of [-ZJ, ZJ])
        for (const eJ of [-ZJ, ZJ])
          for (let ZJ = 0; ZJ < qJ; ZJ++) {
            const AJ = -JJ + cJ + FJ * (2 * ZJ + .5);
            XJ.push([FJ, cJ, cJ, AJ, UJ, eJ]), XJ.push([cJ, FJ, cJ, UJ, AJ, eJ]), XJ.push([cJ, cJ, FJ, UJ, eJ, AJ])
          }
      for (const UJ of [-ZJ, ZJ])
        for (const JJ of [-ZJ, ZJ])
          for (const FJ of [-ZJ, ZJ]) XJ.push([cJ, cJ, cJ, UJ, JJ, FJ]);
      return XJ
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
  37403: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => gJ,
      f: () => HJ
    });
    var FJ = ZJ(8636),
      UJ = ZJ(8677);
    const eJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var XJ = ZJ(8692),
      AJ = ZJ(37208),
      qJ = ZJ(8687);
    const jJ = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function YJ(JJ) {
      let [cJ, ZJ] = JJ;
      return [-ZJ, cJ]
    }

    function hJ(JJ, cJ) {
      return JJ[0] === cJ[0] && JJ[1] === cJ[1]
    }

    function DJ(JJ, cJ) {
      return JJ[0] * cJ[0] + JJ[1] * cJ[1] === 0
    }
    const sJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var nJ = ZJ(8715);

    function GJ(JJ, cJ, ZJ, FJ, UJ) {
      return cJ < nJ.p || cJ >= nJ.p + nJ.r || Math.floor(JJ / nJ.w) === Math.floor(FJ / nJ.w) && Math.floor(ZJ / nJ.w) === Math.floor(UJ / nJ.w)
    }
    const fJ = "Splitter",
      xJ = "Sorting Gate",
      rJ = new Set(nJ.I),
      vJ = new Set([...nJ.I, "Belt Loader", "Fast Loader", xJ]),
      mJ = new Set(nJ.t),
      QJ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function EJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = FJ.m[JJ]) || void 0 === ZJ ? void 0 : ZJ.meta.rootName) && void 0 !== cJ ? cJ : ""
    }

    function VJ(JJ) {
      return EJ(JJ) === nJ.i && (0, nJ.Q)(FJ.m[JJ].name)
    }
    var KJ = ZJ(8682),
      yJ = ZJ(8703);
    const SJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function IJ(JJ) {
      var cJ, ZJ;
      const UJ = null === (cJ = FJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.meta;
      return (null === UJ || void 0 === UJ ? void 0 : UJ.rootName) !== yJ.o ? null : {
        rot: null !== (ZJ = UJ.rot) && void 0 !== ZJ ? ZJ : 1,
        half: (0, yJ.d)(UJ.rootName, UJ.metaStr)
      }
    }

    function MJ(JJ, cJ, ZJ, FJ) {
      return IJ(JJ(cJ, ZJ, FJ))
    }

    function bJ(JJ, cJ, ZJ, FJ, UJ) {
      let {
        rot: eJ,
        half: XJ
      } = UJ;
      const [AJ, qJ] = (0, yJ.l)(eJ, XJ), jJ = MJ(JJ, cJ + AJ, ZJ, FJ + qJ);
      return null !== jJ && jJ.rot === eJ && jJ.half === yJ.q[XJ]
    }
    var wJ = ZJ(37407);
    const WJ = [new class {
      constructor() {
        this.reshapeOffsets = sJ
      }
      handles(JJ) {
        var cJ;
        return "Stairs" === (null === (cJ = FJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.model)
      }
      affects(JJ) {
        return this.handles(JJ)
      }
      shape(JJ, cJ, ZJ, UJ, eJ) {
        const XJ = this.stairsOf(eJ),
          AJ = this.cornerAt(JJ, cJ, ZJ, UJ, XJ),
          jJ = XJ.half === qJ.d.top ? "top" : "bot";
        return (0, FJ.n)(`${FJ.m[eJ].meta.rootName}|meta|rot${XJ.rot}|${jJ}${null===AJ?"":`|${AJ}`}`)
      }
      stairsOf(JJ) {
        const {
          rot: cJ,
          halfblockPlacement: ZJ
        } = FJ.m[JJ].meta;
        return {
          rot: cJ,
          half: ZJ
        }
      }
      stairsAt(JJ, cJ, ZJ, FJ) {
        const UJ = JJ(cJ, ZJ, FJ);
        return this.handles(UJ) ? this.stairsOf(UJ) : null
      }
      cornerAt(JJ, cJ, ZJ, FJ, UJ) {
        let {
          rot: eJ,
          half: XJ
        } = UJ;
        const AJ = jJ[eJ],
          qJ = UJ => {
            let [AJ, qJ] = UJ;
            const jJ = this.stairsAt(JJ, cJ + AJ, ZJ, FJ + qJ);
            return null !== jJ && jJ.rot === eJ && jJ.half === XJ
          },
          sJ = this.stairsAt(JJ, cJ + AJ[0], ZJ, FJ + AJ[1]);
        if (null !== sJ && sJ.half === XJ) {
          const JJ = jJ[sJ.rot];
          if (DJ(AJ, JJ) && !qJ([-JJ[0], -JJ[1]])) return hJ(JJ, YJ(AJ)) ? "outerLeft" : "outerRight"
        }
        const nJ = this.stairsAt(JJ, cJ - AJ[0], ZJ, FJ - AJ[1]);
        if (null !== nJ && nJ.half === XJ) {
          const JJ = jJ[nJ.rot];
          if (DJ(AJ, JJ) && !qJ(JJ)) return hJ(JJ, YJ(AJ)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = eJ, this.rootIds = new Set(UJ.h.map((JJ => (0, FJ.n)(JJ))))
      }
      handles(JJ) {
        var cJ;
        const ZJ = null === (cJ = FJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.meta;
        return void 0 !== ZJ && this.rootIds.has(ZJ.rootId)
      }
      affects(JJ) {
        return this.handles(JJ)
      }
      placedBy(JJ) {
        return FJ.m[JJ].meta.rootName === UJ.m ? null : UJ.m
      }
      shape(JJ, cJ, ZJ, eJ, XJ) {
        const {
          rootId: AJ,
          rootName: qJ,
          rot: jJ
        } = FJ.m[XJ].meta;
        let YJ = 0;
        return UJ.s[jJ].forEach(((UJ, XJ) => {
          var qJ;
          let [hJ, DJ, sJ] = UJ;
          const nJ = null === (qJ = FJ.m[JJ(cJ + hJ, ZJ + DJ, eJ + sJ)]) || void 0 === qJ ? void 0 : qJ.meta;
          (null === nJ || void 0 === nJ ? void 0 : nJ.rootId) === AJ && nJ.rot === jJ && (YJ |= 1 << XJ)
        })), (0, FJ.n)((0, UJ.e)(qJ, jJ, YJ))
      }
    }, ...XJ.e.map((JJ => new AJ.e(JJ))), new class {
      constructor() {
        this.reshapeOffsets = QJ
      }
      handles(JJ) {
        const cJ = EJ(JJ);
        return rJ.has(cJ) || cJ === nJ.i
      }
      affects(JJ) {
        const cJ = EJ(JJ);
        return vJ.has(cJ) || mJ.has(cJ) || cJ === fJ || cJ === nJ.i || void 0 !== nJ.b[cJ]
      }
      shape(JJ, cJ, ZJ, UJ, eJ, XJ) {
        const {
          rootName: AJ,
          rot: qJ
        } = FJ.m[eJ].meta;
        return AJ === nJ.i ? XJ ? eJ : function(JJ, cJ, ZJ, UJ, eJ) {
          const [XJ, AJ] = nJ.e[eJ - 1];
          for (let qJ = 1; qJ <= nJ.E; qJ++) {
            const [jJ, YJ] = [cJ - XJ * qJ, UJ - AJ * qJ], hJ = JJ(jJ, ZJ, YJ);
            if (EJ(hJ) === nJ.i && FJ.m[hJ].meta.rot === eJ && GJ(cJ, ZJ, UJ, jJ, YJ)) return (0, FJ.n)((0, nJ.X)(eJ, !VJ(hJ)))
          }
          return (0, FJ.n)((0, nJ.X)(eJ, !1))
        }(JJ, cJ, ZJ, UJ, qJ) : (0, FJ.n)((0, nJ.J)(AJ, qJ, function(JJ, cJ, ZJ, UJ, eJ) {
          const [XJ, AJ] = nJ.e[eJ - 1], qJ = (eJ, qJ) => function(JJ, cJ, ZJ, UJ, eJ) {
            var XJ;
            const AJ = null === (XJ = FJ.m[JJ]) || void 0 === XJ ? void 0 : XJ.meta;
            if (!AJ) return !1;
            const qJ = AJ.rootName,
              jJ = vJ.has(qJ) || VJ(JJ);
            if (!jJ && !mJ.has(qJ) && qJ !== fJ) return !1;
            const [YJ, hJ] = nJ.e[AJ.rot - 1];
            return jJ ? YJ === -cJ && hJ === -ZJ : mJ.has(qJ) ? YJ === cJ && hJ === ZJ : (0, nJ.V)(FJ.m[JJ].name, YJ, hJ).some((JJ => {
              let [FJ, UJ] = JJ;
              return FJ === -cJ && UJ === -ZJ
            })) && !(UJ === cJ && eJ === ZJ)
          }(JJ(cJ + eJ, ZJ, UJ + qJ), eJ, qJ, XJ, AJ), jJ = JJ(cJ - XJ, ZJ, UJ - AJ), YJ = EJ(jJ) === fJ && FJ.m[jJ].meta.rot === eJ, hJ = 1 === nJ.b[EJ(JJ(cJ, ZJ - 1, UJ))] || -1 === nJ.b[EJ(JJ(cJ, ZJ + 1, UJ))];
          if (hJ || YJ || function(JJ, cJ, ZJ) {
              if (EJ(JJ) !== xJ) return !1;
              const [UJ, eJ] = nJ.e[FJ.m[JJ].meta.rot - 1], [XJ, AJ] = (0, nJ.N)(FJ.m[JJ].name, UJ, eJ);
              return cJ === XJ && ZJ === AJ
            }(jJ, XJ, AJ) || qJ(-XJ, -AJ)) return null;
          const DJ = qJ(-AJ, XJ),
            sJ = qJ(AJ, -XJ);
          if (DJ === sJ) return null;
          return DJ ? "turnLeft" : "turnRight"
        }(JJ, cJ, ZJ, UJ, qJ)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = SJ, this.rootId = (0, FJ.n)(yJ.o)
      }
      handles(JJ) {
        var cJ;
        return (null === (cJ = FJ.m[JJ]) || void 0 === cJ ? void 0 : cJ.meta.rootId) === this.rootId
      }
      affects(JJ) {
        return this.handles(JJ)
      }
      shape(JJ, cJ, ZJ, UJ, eJ, XJ) {
        const AJ = IJ(eJ);
        return (0, FJ.n)((qJ = AJ.rot, null !== (jJ = XJ ? this.reshapedHalf(JJ, cJ, ZJ, UJ, AJ) : this.placedHalf(JJ, cJ, ZJ, UJ, AJ.rot)) ? (0, yJ.c)(yJ.o, qJ, jJ) : 1 === qJ ? yJ.o : `${yJ.o}|meta|rot${qJ}`));
        var qJ, jJ
      }
      placedHalf(JJ, cJ, ZJ, FJ, UJ) {
        const [eJ, XJ] = KJ.d[UJ];
        for (const [AJ, qJ] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const jJ = cJ + qJ * eJ,
            YJ = FJ + qJ * XJ,
            hJ = MJ(JJ, jJ, ZJ, YJ);
          if (null !== hJ && hJ.rot === UJ && (null === hJ.half || !bJ(JJ, jJ, ZJ, YJ, hJ))) return AJ
        }
        return null
      }
      reshapedHalf(JJ, cJ, ZJ, FJ, UJ) {
        if (null !== UJ.half && bJ(JJ, cJ, ZJ, FJ, UJ)) return UJ.half;
        for (const eJ of ["right", "left"]) {
          const [XJ, AJ] = (0, yJ.l)(UJ.rot, eJ), qJ = MJ(JJ, cJ + XJ, ZJ, FJ + AJ);
          if (null !== qJ && qJ.rot === UJ.rot && qJ.half === yJ.q[eJ]) return eJ
        }
        return null
      }
    }, new wJ.d];

    function gJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const XJ of WJ)
        if (XJ.handles(UJ)) return XJ.shape(JJ, cJ, ZJ, FJ, UJ, eJ);
      return UJ
    }

    function HJ(JJ) {
      for (const FJ of WJ) {
        var cJ, ZJ;
        if (FJ.handles(JJ)) return null !== (cJ = null === (ZJ = FJ.placedBy) || void 0 === ZJ ? void 0 : ZJ.call(FJ, JJ)) && void 0 !== cJ ? cJ : null
      }
      return null
    }
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
  },
  37170: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      d: () => eJ
    });
    const FJ = ["Chest", "Loot Chest", "Moonstone Chest"],
      UJ = [{
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

    function eJ(JJ) {
      return UJ.find((cJ => cJ.exactMatch ? JJ === cJ.name : JJ.includes(cJ.name)))
    }
  },
  35948: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return JJ.includes("Leaf Bed")
    }

    function UJ(JJ) {
      return / Bed(?: Head)?(?:\||$)/.test(JJ) && !FJ(JJ)
    }

    function eJ(JJ) {
      return JJ.includes(" Strongbed")
    }

    function XJ(JJ) {
      return FJ(JJ) || UJ(JJ) || eJ(JJ)
    }
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => FJ,
      l: () => eJ,
      m: () => UJ
    })
  },
  35944: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(35948),
      UJ = ZJ(8636);
    const eJ = [],
      XJ = [],
      AJ = [],
      qJ = [];
    for (const YJ of Object.keys(UJ.o))(0, FJ.h)(YJ) ? eJ.push(YJ) : (0, FJ.m)(YJ) && XJ.push(YJ), (0, FJ.l)(YJ) && AJ.push(YJ), (YJ.includes(" Bed Head") || YJ.includes(" Strongbed Head")) && qJ.push(YJ);
    const jJ = {
      leafBeds: eJ,
      woolBeds: XJ,
      strongBeds: AJ,
      beds: [...eJ, ...XJ, ...AJ],
      bedHeads: qJ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);