export const id = 236;
export const ids = [236];
export const modules = {
  37902: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT,
      f: () => lT,
      j: () => yT,
      m: () => MT,
      o: () => OT,
      p: () => KT
    });
    const lT = 1.001,
      MT = .501,
      KT = .025,
      OT = .75,
      yT = .08,
      fT = 4;

    function xT() {
      const TT = MT,
        kT = KT,
        cT = TT - kT / 2,
        lT = (2 * TT - 2 * kT) / (2 * fT - 1),
        OT = [];
      for (const MT of [-cT, cT])
        for (const KT of [-cT, cT])
          for (let cT = 0; cT < fT; cT++) {
            const yT = -TT + kT + lT * (2 * cT + .5);
            OT.push([lT, kT, kT, yT, MT, KT]), OT.push([kT, lT, kT, MT, yT, KT]), OT.push([kT, kT, lT, MT, KT, yT])
          }
      for (const MT of [-cT, cT])
        for (const TT of [-cT, cT])
          for (const lT of [-cT, cT]) OT.push([kT, kT, kT, MT, TT, lT]);
      return OT
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
  38251: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => eT,
      f: () => GT
    });
    var lT = cT(9447),
      MT = cT(9485);
    const KT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var OT = cT(9503),
      yT = cT(38064),
      fT = cT(9495);
    const xT = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function IT(TT) {
      let [kT, cT] = TT;
      return [-cT, kT]
    }

    function AT(TT, kT) {
      return TT[0] === kT[0] && TT[1] === kT[1]
    }

    function CT(TT, kT) {
      return TT[0] * kT[0] + TT[1] * kT[1] === 0
    }
    const jT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var vT = cT(9533);

    function tT(TT, kT, cT, lT, MT) {
      return kT < vT.t || kT >= vT.t + vT.w || Math.floor(TT / vT.E) === Math.floor(lT / vT.E) && Math.floor(cT / vT.E) === Math.floor(MT / vT.E)
    }
    const hT = "Splitter",
      NT = "Sorting Gate",
      QT = new Set(vT.T),
      ST = new Set([...vT.T, "Belt Loader", "Fast Loader", NT]),
      DT = new Set(vT.A),
      aT = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function FT(TT) {
      var kT, cT;
      return null !== (kT = null === (cT = lT.i[TT]) || void 0 === cT ? void 0 : cT.meta.rootName) && void 0 !== kT ? kT : ""
    }

    function rT(TT) {
      return FT(TT) === vT.h && (0, vT.$)(lT.i[TT].name)
    }
    var PT = cT(9489),
      wT = cT(9514);
    const mT = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function bT(TT) {
      var kT, cT;
      const MT = null === (kT = lT.i[TT]) || void 0 === kT ? void 0 : kT.meta;
      return (null === MT || void 0 === MT ? void 0 : MT.rootName) !== wT.o ? null : {
        rot: null !== (cT = MT.rot) && void 0 !== cT ? cT : 1,
        half: (0, wT.g)(MT.rootName, MT.metaStr)
      }
    }

    function zT(TT, kT, cT, lT) {
      return bT(TT(kT, cT, lT))
    }

    function JT(TT, kT, cT, lT, MT) {
      let {
        rot: KT,
        half: OT
      } = MT;
      const [yT, fT] = (0, wT.l)(KT, OT), xT = zT(TT, kT + yT, cT, lT + fT);
      return null !== xT && xT.rot === KT && xT.half === wT.p[OT]
    }
    var oT = cT(38258);
    const HT = [new class {
      constructor() {
        this.reshapeOffsets = jT
      }
      handles(TT) {
        var kT;
        return "Stairs" === (null === (kT = lT.i[TT]) || void 0 === kT ? void 0 : kT.model)
      }
      affects(TT) {
        return this.handles(TT)
      }
      shape(TT, kT, cT, MT, KT) {
        const OT = this.stairsOf(KT),
          yT = this.cornerAt(TT, kT, cT, MT, OT),
          xT = OT.half === fT.c.top ? "top" : "bot";
        return (0, lT.l)(`${lT.i[KT].meta.rootName}|meta|rot${OT.rot}|${xT}${null===yT?"":`|${yT}`}`)
      }
      stairsOf(TT) {
        const {
          rot: kT,
          halfblockPlacement: cT
        } = lT.i[TT].meta;
        return {
          rot: kT,
          half: cT
        }
      }
      stairsAt(TT, kT, cT, lT) {
        const MT = TT(kT, cT, lT);
        return this.handles(MT) ? this.stairsOf(MT) : null
      }
      cornerAt(TT, kT, cT, lT, MT) {
        let {
          rot: KT,
          half: OT
        } = MT;
        const yT = xT[KT],
          fT = MT => {
            let [yT, fT] = MT;
            const xT = this.stairsAt(TT, kT + yT, cT, lT + fT);
            return null !== xT && xT.rot === KT && xT.half === OT
          },
          jT = this.stairsAt(TT, kT + yT[0], cT, lT + yT[1]);
        if (null !== jT && jT.half === OT) {
          const TT = xT[jT.rot];
          if (CT(yT, TT) && !fT([-TT[0], -TT[1]])) return AT(TT, IT(yT)) ? "outerLeft" : "outerRight"
        }
        const vT = this.stairsAt(TT, kT - yT[0], cT, lT - yT[1]);
        if (null !== vT && vT.half === OT) {
          const TT = xT[vT.rot];
          if (CT(yT, TT) && !fT(TT)) return AT(TT, IT(yT)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = KT, this.rootIds = new Set(MT.f.map((TT => (0, lT.l)(TT))))
      }
      handles(TT) {
        var kT;
        const cT = null === (kT = lT.i[TT]) || void 0 === kT ? void 0 : kT.meta;
        return void 0 !== cT && this.rootIds.has(cT.rootId)
      }
      affects(TT) {
        return this.handles(TT)
      }
      placedBy(TT) {
        return lT.i[TT].meta.rootName === MT.m ? null : MT.m
      }
      shape(TT, kT, cT, KT, OT) {
        const {
          rootId: yT,
          rootName: fT,
          rot: xT
        } = lT.i[OT].meta;
        let IT = 0;
        return MT.u[xT].forEach(((MT, OT) => {
          var fT;
          let [AT, CT, jT] = MT;
          const vT = null === (fT = lT.i[TT(kT + AT, cT + CT, KT + jT)]) || void 0 === fT ? void 0 : fT.meta;
          (null === vT || void 0 === vT ? void 0 : vT.rootId) === yT && vT.rot === xT && (IT |= 1 << OT)
        })), (0, lT.l)((0, MT.c)(fT, xT, IT))
      }
    }, ...OT.c.map((TT => new yT.b(TT))), new class {
      constructor() {
        this.reshapeOffsets = aT
      }
      handles(TT) {
        const kT = FT(TT);
        return QT.has(kT) || kT === vT.h
      }
      affects(TT) {
        const kT = FT(TT);
        return ST.has(kT) || DT.has(kT) || kT === hT || kT === vT.h || void 0 !== vT.c[kT]
      }
      shape(TT, kT, cT, MT, KT, OT) {
        const {
          rootName: yT,
          rot: fT
        } = lT.i[KT].meta;
        return yT === vT.h ? OT ? KT : function(TT, kT, cT, MT, KT) {
          const [OT, yT] = vT.d[KT - 1];
          for (let fT = 1; fT <= vT.P; fT++) {
            const [xT, IT] = [kT - OT * fT, MT - yT * fT], AT = TT(xT, cT, IT);
            if (FT(AT) === vT.h && lT.i[AT].meta.rot === KT && tT(kT, cT, MT, xT, IT)) return (0, lT.l)((0, vT.hb)(KT, !rT(AT)))
          }
          return (0, lT.l)((0, vT.hb)(KT, !1))
        }(TT, kT, cT, MT, fT) : (0, lT.l)((0, vT.W)(yT, fT, function(TT, kT, cT, MT, KT) {
          const [OT, yT] = vT.d[KT - 1], fT = (KT, fT) => function(TT, kT, cT, MT, KT) {
            var OT;
            const yT = null === (OT = lT.i[TT]) || void 0 === OT ? void 0 : OT.meta;
            if (!yT) return !1;
            const fT = yT.rootName,
              xT = ST.has(fT) || rT(TT);
            if (!xT && !DT.has(fT) && fT !== hT) return !1;
            const [IT, AT] = vT.d[yT.rot - 1];
            return xT ? IT === -kT && AT === -cT : DT.has(fT) ? IT === kT && AT === cT : (0, vT.fb)(lT.i[TT].name, IT, AT).some((TT => {
              let [lT, MT] = TT;
              return lT === -kT && MT === -cT
            })) && !(MT === kT && KT === cT)
          }(TT(kT + KT, cT, MT + fT), KT, fT, OT, yT), xT = TT(kT - OT, cT, MT - yT), IT = FT(xT) === hT && lT.i[xT].meta.rot === KT, AT = 1 === vT.c[FT(TT(kT, cT - 1, MT))] || -1 === vT.c[FT(TT(kT, cT + 1, MT))];
          if (AT || IT || function(TT, kT, cT) {
              if (FT(TT) !== NT) return !1;
              const [MT, KT] = vT.d[lT.i[TT].meta.rot - 1], [OT, yT] = (0, vT.X)(lT.i[TT].name, MT, KT);
              return kT === OT && cT === yT
            }(xT, OT, yT) || fT(-OT, -yT)) return null;
          const CT = fT(-yT, OT),
            jT = fT(yT, -OT);
          if (CT === jT) return null;
          return CT ? "turnLeft" : "turnRight"
        }(TT, kT, cT, MT, fT)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = mT, this.rootId = (0, lT.l)(wT.o)
      }
      handles(TT) {
        var kT;
        return (null === (kT = lT.i[TT]) || void 0 === kT ? void 0 : kT.meta.rootId) === this.rootId
      }
      affects(TT) {
        return this.handles(TT)
      }
      shape(TT, kT, cT, MT, KT, OT) {
        const yT = bT(KT);
        return (0, lT.l)((fT = yT.rot, null !== (xT = OT ? this.reshapedHalf(TT, kT, cT, MT, yT) : this.placedHalf(TT, kT, cT, MT, yT.rot)) ? (0, wT.e)(wT.o, fT, xT) : 1 === fT ? wT.o : `${wT.o}|meta|rot${fT}`));
        var fT, xT
      }
      placedHalf(TT, kT, cT, lT, MT) {
        const [KT, OT] = PT.d[MT];
        for (const [yT, fT] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const xT = kT + fT * KT,
            IT = lT + fT * OT,
            AT = zT(TT, xT, cT, IT);
          if (null !== AT && AT.rot === MT && (null === AT.half || !JT(TT, xT, cT, IT, AT))) return yT
        }
        return null
      }
      reshapedHalf(TT, kT, cT, lT, MT) {
        if (null !== MT.half && JT(TT, kT, cT, lT, MT)) return MT.half;
        for (const KT of ["right", "left"]) {
          const [OT, yT] = (0, wT.l)(MT.rot, KT), fT = zT(TT, kT + OT, cT, lT + yT);
          if (null !== fT && fT.rot === MT.rot && fT.half === wT.p[KT]) return KT
        }
        return null
      }
    }, new oT.b];

    function eT(TT, kT, cT, lT, MT) {
      let KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const OT of HT)
        if (OT.handles(MT)) return OT.shape(TT, kT, cT, lT, MT, KT);
      return MT
    }

    function GT(TT) {
      for (const lT of HT) {
        var kT, cT;
        if (lT.handles(TT)) return null !== (kT = null === (cT = lT.placedBy) || void 0 === cT ? void 0 : cT.call(lT, TT)) && void 0 !== kT ? kT : null
      }
      return null
    }
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
  },
  38028: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      e: () => KT
    });
    const lT = ["Chest", "Loot Chest", "Moonstone Chest"],
      MT = [{
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

    function KT(TT) {
      return MT.find((kT => kT.exactMatch ? TT === kT.name : TT.includes(kT.name)))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);