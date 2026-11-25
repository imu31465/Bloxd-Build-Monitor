export const id = 265;
export const ids = [265];
export const modules = {
  39040: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => QM,
      g: () => OM,
      i: () => PM,
      k: () => SM,
      l: () => aM,
      m: () => jM
    });
    const OM = 1.001,
      SM = .501,
      jM = .025,
      aM = .75,
      PM = .08,
      nM = 4;

    function QM() {
      const MM = SM,
        rM = jM,
        iM = MM - rM / 2,
        OM = (2 * MM - 2 * rM) / (2 * nM - 1),
        aM = [];
      for (const SM of [-iM, iM])
        for (const jM of [-iM, iM])
          for (let iM = 0; iM < nM; iM++) {
            const PM = -MM + rM + OM * (2 * iM + .5);
            aM.push([OM, rM, rM, PM, SM, jM]), aM.push([rM, OM, rM, SM, PM, jM]), aM.push([rM, rM, OM, SM, jM, PM])
          }
      for (const SM of [-iM, iM])
        for (const MM of [-iM, iM])
          for (const OM of [-iM, iM]) aM.push([rM, rM, rM, SM, MM, OM]);
      return aM
    }
  },
  39426: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => eM,
      D: () => HM,
      F: () => CM,
      J: () => bM,
      L: () => GM,
      P: () => UM,
      Q: () => mM,
      S: () => JM,
      V: () => yM,
      X: () => SM,
      d: () => zM,
      h: () => nM,
      k: () => EM,
      o: () => QM,
      s: () => PM,
      u: () => aM,
      y: () => jM
    });
    var OM = iM(9904);

    function SM(MM) {
      return Math.floor(MM).toLocaleString("en-US")
    }
    const jM = 2e3,
      aM = .005,
      PM = .001,
      nM = 2,
      QM = "Fluid Tank",
      zM = "Coolant Mixer",
      LM = 144;

    function mM(MM) {
      const rM = MM.split("|")[0];
      return (0, OM.p)(rM) ? rM === OM.e ? "cryo" : "water" : null
    }
    const HM = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      hM = 63;

    function JM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const iM = rM ? function(MM, rM, iM) {
        const OM = HM.findIndex((OM => {
          let [SM, jM, aM] = OM;
          return SM === MM && jM === rM && aM === iM
        }));
        return OM < 0 ? 0 : 1 << OM
      }(rM[0], rM[1], rM[2]) : 0;
      return "maker" === MM ? {
        kind: MM,
        faces: iM
      } : "user" === MM ? {
        kind: MM,
        faces: hM & ~iM
      } : {
        kind: MM,
        faces: hM
      }
    }

    function dM(MM) {
      return "pipe" === MM || "tank" === MM || "maker" === MM
    }

    function yM(MM, rM, iM) {
      return 0 !== (MM.faces & 1 << iM) && 0 !== (rM.faces & 1 << (1 ^ iM)) && (dM(MM.kind) || dM(rM.kind))
    }
    const lM = (MM, rM, iM, OM) => ({
        input: MM,
        inputAmount: OM,
        output: rM,
        outputAmount: iM
      }),
      EM = {
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
          recipes: [lM("Uranium Grit", "Uranium Pellet", 1, 12), lM("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [lM("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: LM,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function UM(MM, rM) {
      return 1e3 * (null !== rM && void 0 !== rM ? rM : 0) / MM.opMs
    }

    function GM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const iM = UM(EM["Coolant Mixer"], LM) * rM;
      return MM <= 0 ? 0 : Math.ceil(MM / iM - 1e-9)
    }
    const CM = "baf2Water",
      eM = "baf2waterclose",
      bM = "baf2wateropen"
  },
  39414: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => sM,
      h: () => DM
    });
    var OM = iM(9816),
      SM = iM(9852);
    const jM = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var aM = iM(9866),
      PM = iM(39224),
      nM = iM(9863);
    const QM = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function zM(MM) {
      let [rM, iM] = MM;
      return [-iM, rM]
    }

    function LM(MM, rM) {
      return MM[0] === rM[0] && MM[1] === rM[1]
    }

    function mM(MM, rM) {
      return MM[0] * rM[0] + MM[1] * rM[1] === 0
    }
    const HM = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var hM = iM(9895);

    function JM(MM, rM, iM, OM, SM) {
      return rM < hM.q || rM >= hM.q + hM.t || Math.floor(MM / hM.y) === Math.floor(OM / hM.y) && Math.floor(iM / hM.y) === Math.floor(SM / hM.y)
    }
    const dM = "Splitter",
      yM = "Sorting Gate",
      lM = new Set(hM.M),
      EM = new Set([...hM.M, "Belt Loader", "Fast Loader", yM]),
      UM = new Set(hM.x),
      GM = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function CM(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.meta.rootName) && void 0 !== rM ? rM : ""
    }

    function eM(MM) {
      return CM(MM) === hM.j && (0, hM.V)(OM.k[MM].name)
    }
    var bM = iM(9855),
      wM = iM(9877);
    const tM = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function gM(MM) {
      var rM, iM;
      const SM = null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta;
      return (null === SM || void 0 === SM ? void 0 : SM.rootName) !== wM.g ? null : {
        rot: null !== (iM = SM.rot) && void 0 !== iM ? iM : 1,
        half: (0, wM.c)(SM.rootName, SM.metaStr)
      }
    }

    function uM(MM, rM, iM, OM) {
      return gM(MM(rM, iM, OM))
    }

    function RM(MM, rM, iM, OM, SM) {
      let {
        rot: jM,
        half: aM
      } = SM;
      const [PM, nM] = (0, wM.e)(jM, aM), QM = uM(MM, rM + PM, iM, OM + nM);
      return null !== QM && QM.rot === jM && QM.half === wM.i[aM]
    }
    var pM = iM(39420);
    const WM = [new class {
      constructor() {
        this.reshapeOffsets = HM
      }
      handles(MM) {
        var rM;
        return "Stairs" === (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.model)
      }
      affects(MM) {
        return this.handles(MM)
      }
      shape(MM, rM, iM, SM, jM) {
        const aM = this.stairsOf(jM),
          PM = this.cornerAt(MM, rM, iM, SM, aM),
          QM = aM.half === nM.b.top ? "top" : "bot";
        return (0, OM.l)(`${OM.k[jM].meta.rootName}|meta|rot${aM.rot}|${QM}${null===PM?"":`|${PM}`}`)
      }
      stairsOf(MM) {
        const {
          rot: rM,
          halfblockPlacement: iM
        } = OM.k[MM].meta;
        return {
          rot: rM,
          half: iM
        }
      }
      stairsAt(MM, rM, iM, OM) {
        const SM = MM(rM, iM, OM);
        return this.handles(SM) ? this.stairsOf(SM) : null
      }
      cornerAt(MM, rM, iM, OM, SM) {
        let {
          rot: jM,
          half: aM
        } = SM;
        const PM = QM[jM],
          nM = SM => {
            let [PM, nM] = SM;
            const QM = this.stairsAt(MM, rM + PM, iM, OM + nM);
            return null !== QM && QM.rot === jM && QM.half === aM
          },
          HM = this.stairsAt(MM, rM + PM[0], iM, OM + PM[1]);
        if (null !== HM && HM.half === aM) {
          const MM = QM[HM.rot];
          if (mM(PM, MM) && !nM([-MM[0], -MM[1]])) return LM(MM, zM(PM)) ? "outerLeft" : "outerRight"
        }
        const hM = this.stairsAt(MM, rM - PM[0], iM, OM - PM[1]);
        if (null !== hM && hM.half === aM) {
          const MM = QM[hM.rot];
          if (mM(PM, MM) && !nM(MM)) return LM(MM, zM(PM)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = jM, this.rootIds = new Set(SM.h.map((MM => (0, OM.l)(MM))))
      }
      handles(MM) {
        var rM;
        const iM = null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta;
        return void 0 !== iM && this.rootIds.has(iM.rootId)
      }
      affects(MM) {
        return this.handles(MM)
      }
      placedBy(MM) {
        return OM.k[MM].meta.rootName === SM.t ? null : SM.t
      }
      shape(MM, rM, iM, jM, aM) {
        const {
          rootId: PM,
          rootName: nM,
          rot: QM
        } = OM.k[aM].meta;
        let zM = 0;
        return SM.C[QM].forEach(((SM, aM) => {
          var nM;
          let [LM, mM, HM] = SM;
          const hM = null === (nM = OM.k[MM(rM + LM, iM + mM, jM + HM)]) || void 0 === nM ? void 0 : nM.meta;
          (null === hM || void 0 === hM ? void 0 : hM.rootId) === PM && hM.rot === QM && (zM |= 1 << aM)
        })), (0, OM.l)((0, SM.e)(nM, QM, zM))
      }
    }, ...aM.b.map((MM => new PM.e(MM))), new class {
      constructor() {
        this.reshapeOffsets = GM
      }
      handles(MM) {
        const rM = CM(MM);
        return lM.has(rM) || rM === hM.j
      }
      affects(MM) {
        const rM = CM(MM);
        return EM.has(rM) || UM.has(rM) || rM === dM || rM === hM.j || void 0 !== hM.e[rM]
      }
      shape(MM, rM, iM, SM, jM, aM) {
        const {
          rootName: PM,
          rot: nM
        } = OM.k[jM].meta;
        return PM === hM.j ? aM ? jM : function(MM, rM, iM, SM, jM) {
          const [aM, PM] = hM.i[jM - 1];
          for (let nM = 1; nM <= hM.J; nM++) {
            const [QM, zM] = [rM - aM * nM, SM - PM * nM], LM = MM(QM, iM, zM);
            if (CM(LM) === hM.j && OM.k[LM].meta.rot === jM && JM(rM, iM, SM, QM, zM)) return (0, OM.l)((0, hM.bb)(jM, !eM(LM)))
          }
          return (0, OM.l)((0, hM.bb)(jM, !1))
        }(MM, rM, iM, SM, nM) : (0, OM.l)((0, hM.O)(PM, nM, function(MM, rM, iM, SM, jM) {
          const [aM, PM] = hM.i[jM - 1], nM = (jM, aM) => function(MM, rM, iM) {
            var SM;
            const jM = null === (SM = OM.k[MM]) || void 0 === SM ? void 0 : SM.meta;
            if (!jM) return !1;
            const aM = jM.rootName,
              PM = EM.has(aM) || eM(MM);
            if (!PM && !UM.has(aM) && aM !== dM) return !1;
            const [nM, QM] = hM.i[jM.rot - 1];
            if (PM && nM === -rM && QM === -iM) return !0;
            if (UM.has(aM)) return nM === rM && QM === iM;
            const zM = OM.k[MM].name;
            return (aM === dM ? (0, hM.ab)(zM, nM, QM) : aM === yM ? [(0, hM.P)(zM, nM, QM)] : []).some((MM => {
              let [OM, SM] = MM;
              return OM === -rM && SM === -iM
            }))
          }(MM(rM + jM, iM, SM + aM), jM, aM), QM = MM(rM - aM, iM, SM - PM), zM = CM(QM) === dM && OM.k[QM].meta.rot === jM, LM = 1 === hM.e[CM(MM(rM, iM - 1, SM))] || -1 === hM.e[CM(MM(rM, iM + 1, SM))];
          if (LM || zM || nM(-aM, -PM)) return null;
          const mM = nM(-PM, aM),
            HM = nM(PM, -aM);
          if (mM === HM) return null;
          return mM ? "turnLeft" : "turnRight"
        }(MM, rM, iM, SM, nM)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = tM, this.rootId = (0, OM.l)(wM.g)
      }
      handles(MM) {
        var rM;
        return (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta.rootId) === this.rootId
      }
      affects(MM) {
        return this.handles(MM)
      }
      shape(MM, rM, iM, SM, jM, aM) {
        const PM = gM(jM);
        return (0, OM.l)((nM = PM.rot, null !== (QM = aM ? this.reshapedHalf(MM, rM, iM, SM, PM) : this.placedHalf(MM, rM, iM, SM, PM.rot)) ? (0, wM.b)(wM.g, nM, QM) : 1 === nM ? wM.g : `${wM.g}|meta|rot${nM}`));
        var nM, QM
      }
      placedHalf(MM, rM, iM, OM, SM) {
        const [jM, aM] = bM.c[SM];
        for (const [PM, nM] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const QM = rM + nM * jM,
            zM = OM + nM * aM,
            LM = uM(MM, QM, iM, zM);
          if (null !== LM && LM.rot === SM && (null === LM.half || !RM(MM, QM, iM, zM, LM))) return PM
        }
        return null
      }
      reshapedHalf(MM, rM, iM, OM, SM) {
        if (null !== SM.half && RM(MM, rM, iM, OM, SM)) return SM.half;
        for (const jM of ["right", "left"]) {
          const [aM, PM] = (0, wM.e)(SM.rot, jM), nM = uM(MM, rM + aM, iM, OM + PM);
          if (null !== nM && nM.rot === SM.rot && nM.half === wM.i[jM]) return jM
        }
        return null
      }
    }, new pM.e];

    function sM(MM, rM, iM, OM, SM) {
      let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const aM of WM)
        if (aM.handles(SM)) return aM.shape(MM, rM, iM, OM, SM, jM);
      return SM
    }

    function DM(MM) {
      for (const OM of WM) {
        var rM, iM;
        if (OM.handles(MM)) return null !== (rM = null === (iM = OM.placedBy) || void 0 === iM ? void 0 : iM.call(OM, MM)) && void 0 !== rM ? rM : null
      }
      return null
    }
  },
  39420: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => wM,
      i: () => UM,
      m: () => EM
    });
    var OM = iM(9816),
      SM = iM(9839),
      jM = iM(9904),
      aM = iM(39426),
      PM = iM(9895);
    const nM = (0, aM.S)("pipe"),
      QM = (0, aM.S)("tank"),
      zM = (0, aM.S)("port"),
      LM = "Reactor Port";

    function mM(MM, rM, iM) {
      const OM = new Set([jM.h, jM.e, LM, ...rM, ...iM, ...MM ? [aM.o] : []]);
      return {
        makers: new Set(rM),
        roots: OM
      }
    }
    const HM = {
        water: mM(!0, ["Condenser"], ["Centrifuge", "Synthesizer", aM.d]),
        cryo: mM(!1, [aM.d], [])
      },
      hM = new Set([...HM.water.roots, ...HM.cryo.roots]),
      JM = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      dM = SM.h.map((MM => JM[MM])),
      yM = dM.map((MM => {
        let [rM, iM, OM] = MM;
        return aM.D.findIndex((MM => {
          let [SM, jM, aM] = MM;
          return SM === rM && jM === iM && aM === OM
        }))
      }));

    function lM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const iM = OM.k[MM],
        SM = null === iM || void 0 === iM ? void 0 : iM.meta.rootName,
        mM = HM[rM];
      if (!SM || !mM.roots.has(SM)) return null;
      if ((0, jM.p)(SM)) return (0, aM.Q)(iM.name) === rM ? nM : null;
      if (SM === aM.o) return QM;
      if (SM === LM) return iM.name.endsWith("|Water") ? zM : null;
      const [hM, JM] = PM.i[(iM.meta.rot || 1) - 1];
      return (0, aM.S)(mM.makers.has(SM) ? "maker" : "user", [-hM, 0, -JM])
    }

    function EM(MM, rM, iM, SM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: PM
      } = HM[jM];
      return dM.some(((QM, zM) => {
        var LM, mM;
        let [HM, hM, JM] = QM;
        const dM = MM(rM + HM, iM + hM, SM + JM),
          EM = lM(dM, jM);
        return null !== EM && PM.has(null !== (LM = null === (mM = OM.k[dM]) || void 0 === mM ? void 0 : mM.meta.rootName) && void 0 !== LM ? LM : "") && !(0, aM.V)(nM, EM, yM[zM])
      }))
    }

    function UM(MM) {
      const rM = OM.k[MM];
      return rM ? (0, aM.Q)(rM.name) : null
    }
    let GM = null;

    function CM(MM) {
      if (!GM) {
        GM = new Map;
        for (const MM of ["water", "cryo"])
          for (let rM = 0; rM < 64; rM++)
            for (const iM of [!1, !0]) GM.set((0, jM.t)(MM, rM, iM), {
              CH: MM,
              mask: rM,
              full: iM
            })
      }
      return GM.get(MM)
    }
    const eM = new Map(Array.from({
      length: jM.l + 1
    }, ((MM, rM) => [(0, jM.u)(rM), rM])));

    function bM(MM, rM, iM, SM, jM, aM) {
      return dM.some(((PM, nM) => {
        var QM, zM, LM;
        let [mM, HM, hM] = PM;
        if (0 === (aM >> nM & 1)) return !1;
        const JM = null !== (QM = null === (zM = OM.k[MM(rM + mM, iM + HM, SM + hM)]) || void 0 === zM ? void 0 : zM.name) && void 0 !== QM ? QM : "",
          dM = CM(JM);
        return dM ? dM.CH === jM && dM.full : (null !== (LM = function(MM) {
          var rM;
          return null !== (rM = eM.get(MM)) && void 0 !== rM ? rM : null
        }(JM)) && void 0 !== LM ? LM : 0) > 0
      }))
    }
    class wM {
      constructor() {
        this.reshapeOffsets = dM
      }
      handles(MM) {
        return null !== UM(MM)
      }
      affects(MM) {
        var rM, iM;
        return hM.has(null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.meta.rootName) && void 0 !== rM ? rM : "")
      }
      placedBy(MM) {
        var rM;
        return (null === (rM = OM.k[MM]) || void 0 === rM ? void 0 : rM.meta.rootName) === jM.e ? jM.h : null
      }
      shape(MM, rM, iM, SM, PM, QM) {
        var zM, LM, mM;
        const HM = null !== (zM = null === (LM = OM.k[PM]) || void 0 === LM ? void 0 : LM.name) && void 0 !== zM ? zM : "",
          hM = QM || HM !== jM.h ? null !== (mM = (0, aM.Q)(HM)) && void 0 !== mM ? mM : "water" : function(MM, rM, iM, OM) {
            return dM.some(((SM, jM) => {
              let [PM, QM, zM] = SM;
              const LM = lM(MM(rM + PM, iM + QM, OM + zM), "cryo");
              return null !== LM && "port" !== LM.kind && (0, aM.V)(nM, LM, yM[jM])
            })) ? "cryo" : "water"
          }(MM, rM, iM, SM),
          JM = function(MM, rM, iM, OM) {
            let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              jM = 0;
            return dM.forEach(((PM, QM) => {
              let [zM, LM, mM] = PM;
              const HM = lM(MM(rM + zM, iM + LM, OM + mM), SM);
              HM && (0, aM.V)(nM, HM, yM[QM]) && (jM |= 1 << QM)
            })), jM
          }(MM, rM, iM, SM, hM),
          EM = QM ? function(MM) {
            var rM;
            return !0 === (null === (rM = CM(MM)) || void 0 === rM ? void 0 : rM.full)
          }(HM) : bM(MM, rM, iM, SM, hM, JM);
        return (0, OM.l)((0, jM.t)(hM, JM, EM))
      }
    }
  },
  39168: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => jM
    });
    const OM = ["Chest", "Loot Chest", "Moonstone Chest"],
      SM = [{
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

    function jM(MM) {
      return SM.find((rM => rM.exactMatch ? MM === rM.name : MM.includes(rM.name)))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);