export const id = 234;
export const ids = [234];
export const modules = {
  37448: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      g: () => ID,
      h: () => bD,
      l: () => pD,
      p: () => fD,
      t: () => iD
    });
    const ID = 1.001,
      pD = .501,
      iD = .025,
      fD = .75,
      bD = .08,
      QD = 4;

    function wD() {
      const DD = pD,
        CD = iD,
        cD = DD - CD / 2,
        ID = (2 * DD - 2 * CD) / (2 * QD - 1),
        fD = [];
      for (const pD of [-cD, cD])
        for (const iD of [-cD, cD])
          for (let cD = 0; cD < QD; cD++) {
            const bD = -DD + CD + ID * (2 * cD + .5);
            fD.push([ID, CD, CD, bD, pD, iD]), fD.push([CD, ID, CD, pD, bD, iD]), fD.push([CD, CD, ID, pD, iD, bD])
          }
      for (const pD of [-cD, cD])
        for (const DD of [-cD, cD])
          for (const ID of [-cD, cD]) fD.push([CD, CD, CD, pD, DD, ID]);
      return fD
    }
  },
  37804: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => PD,
      C: () => mD,
      D: () => XD,
      F: () => yD,
      I: () => ZD,
      M: () => vD,
      O: () => pD,
      c: () => SD,
      d: () => QD,
      e: () => gD,
      f: () => wD,
      j: () => bD,
      n: () => fD,
      q: () => iD,
      r: () => OD,
      u: () => MD,
      x: () => nD
    });
    var ID = cD(9230);

    function pD(DD) {
      return Math.floor(DD).toLocaleString("en-US")
    }
    const iD = 2e3,
      fD = .005,
      bD = .001,
      QD = 2,
      wD = "Fluid Tank",
      SD = "Coolant Mixer",
      BD = 144;

    function yD(DD) {
      const CD = DD.split("|")[0];
      return (0, ID.n)(CD) ? CD === ID.c ? "cryo" : "water" : null
    }
    const MD = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      tD = 63;

    function ZD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const cD = CD ? function(DD, CD, cD) {
        const ID = MD.findIndex((ID => {
          let [pD, iD, fD] = ID;
          return pD === DD && iD === CD && fD === cD
        }));
        return ID < 0 ? 0 : 1 << ID
      }(CD[0], CD[1], CD[2]) : 0;
      return "maker" === DD ? {
        kind: DD,
        faces: cD
      } : "user" === DD ? {
        kind: DD,
        faces: tD & ~cD
      } : {
        kind: DD,
        faces: tD
      }
    }

    function oD(DD) {
      return "pipe" === DD || "tank" === DD || "maker" === DD
    }

    function vD(DD, CD, cD) {
      return 0 !== (DD.faces & 1 << cD) && 0 !== (CD.faces & 1 << (1 ^ cD)) && (oD(DD.kind) || oD(CD.kind))
    }
    const ND = (DD, CD, cD, ID) => ({
        input: DD,
        inputAmount: ID,
        output: CD,
        outputAmount: cD
      }),
      gD = {
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
          recipes: [ND("Uranium Grit", "Uranium Pellet", 1, 12), ND("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [ND("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: BD,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function XD(DD, CD) {
      return 1e3 * (null !== CD && void 0 !== CD ? CD : 0) / DD.opMs
    }

    function mD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const cD = XD(gD["Coolant Mixer"], BD) * CD;
      return DD <= 0 ? 0 : Math.ceil(DD / cD - 1e-9)
    }
    const nD = "baf2Water",
      OD = "baf2waterclose",
      PD = "baf2wateropen"
  },
  37789: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => VD,
      f: () => zD
    });
    var ID = cD(9141),
      pD = cD(9173);
    const iD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var fD = cD(9198),
      bD = cD(37589),
      QD = cD(9189);
    const wD = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function SD(DD) {
      let [CD, cD] = DD;
      return [-cD, CD]
    }

    function BD(DD, CD) {
      return DD[0] === CD[0] && DD[1] === CD[1]
    }

    function yD(DD, CD) {
      return DD[0] * CD[0] + DD[1] * CD[1] === 0
    }
    const MD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var tD = cD(9226);

    function ZD(DD, CD, cD, ID, pD) {
      return CD < tD.p || CD >= tD.p + tD.t || Math.floor(DD / tD.z) === Math.floor(ID / tD.z) && Math.floor(cD / tD.z) === Math.floor(pD / tD.z)
    }
    const oD = "Splitter",
      vD = "Sorting Gate",
      ND = new Set(tD.J),
      gD = new Set([...tD.J, "Belt Loader", "Fast Loader", vD]),
      XD = new Set(tD.x),
      mD = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function nD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = ID.g[DD]) || void 0 === cD ? void 0 : cD.meta.rootName) && void 0 !== CD ? CD : ""
    }

    function OD(DD) {
      return nD(DD) === tD.g && (0, tD.T)(ID.g[DD].name)
    }
    var PD = cD(9181),
      HD = cD(9204);
    const UD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function xD(DD) {
      var CD, cD;
      const pD = null === (CD = ID.g[DD]) || void 0 === CD ? void 0 : CD.meta;
      return (null === pD || void 0 === pD ? void 0 : pD.rootName) !== HD.r ? null : {
        rot: null !== (cD = pD.rot) && void 0 !== cD ? cD : 1,
        half: (0, HD.h)(pD.rootName, pD.metaStr)
      }
    }

    function qD(DD, CD, cD, ID) {
      return xD(DD(CD, cD, ID))
    }

    function JD(DD, CD, cD, ID, pD) {
      let {
        rot: iD,
        half: fD
      } = pD;
      const [bD, QD] = (0, HD.n)(iD, fD), wD = qD(DD, CD + bD, cD, ID + QD);
      return null !== wD && wD.rot === iD && wD.half === HD.t[fD]
    }
    var KD = cD(37797);
    const aD = [new class {
      constructor() {
        this.reshapeOffsets = MD
      }
      handles(DD) {
        var CD;
        return "Stairs" === (null === (CD = ID.g[DD]) || void 0 === CD ? void 0 : CD.model)
      }
      affects(DD) {
        return this.handles(DD)
      }
      shape(DD, CD, cD, pD, iD) {
        const fD = this.stairsOf(iD),
          bD = this.cornerAt(DD, CD, cD, pD, fD),
          wD = fD.half === QD.b.top ? "top" : "bot";
        return (0, ID.k)(`${ID.g[iD].meta.rootName}|meta|rot${fD.rot}|${wD}${null===bD?"":`|${bD}`}`)
      }
      stairsOf(DD) {
        const {
          rot: CD,
          halfblockPlacement: cD
        } = ID.g[DD].meta;
        return {
          rot: CD,
          half: cD
        }
      }
      stairsAt(DD, CD, cD, ID) {
        const pD = DD(CD, cD, ID);
        return this.handles(pD) ? this.stairsOf(pD) : null
      }
      cornerAt(DD, CD, cD, ID, pD) {
        let {
          rot: iD,
          half: fD
        } = pD;
        const bD = wD[iD],
          QD = pD => {
            let [bD, QD] = pD;
            const wD = this.stairsAt(DD, CD + bD, cD, ID + QD);
            return null !== wD && wD.rot === iD && wD.half === fD
          },
          MD = this.stairsAt(DD, CD + bD[0], cD, ID + bD[1]);
        if (null !== MD && MD.half === fD) {
          const DD = wD[MD.rot];
          if (yD(bD, DD) && !QD([-DD[0], -DD[1]])) return BD(DD, SD(bD)) ? "outerLeft" : "outerRight"
        }
        const tD = this.stairsAt(DD, CD - bD[0], cD, ID - bD[1]);
        if (null !== tD && tD.half === fD) {
          const DD = wD[tD.rot];
          if (yD(bD, DD) && !QD(DD)) return BD(DD, SD(bD)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = iD, this.rootIds = new Set(pD.g.map((DD => (0, ID.k)(DD))))
      }
      handles(DD) {
        var CD;
        const cD = null === (CD = ID.g[DD]) || void 0 === CD ? void 0 : CD.meta;
        return void 0 !== cD && this.rootIds.has(cD.rootId)
      }
      affects(DD) {
        return this.handles(DD)
      }
      placedBy(DD) {
        return ID.g[DD].meta.rootName === pD.n ? null : pD.n
      }
      shape(DD, CD, cD, iD, fD) {
        const {
          rootId: bD,
          rootName: QD,
          rot: wD
        } = ID.g[fD].meta;
        let SD = 0;
        return pD.u[wD].forEach(((pD, fD) => {
          var QD;
          let [BD, yD, MD] = pD;
          const tD = null === (QD = ID.g[DD(CD + BD, cD + yD, iD + MD)]) || void 0 === QD ? void 0 : QD.meta;
          (null === tD || void 0 === tD ? void 0 : tD.rootId) === bD && tD.rot === wD && (SD |= 1 << fD)
        })), (0, ID.k)((0, pD.f)(QD, wD, SD))
      }
    }, ...fD.e.map((DD => new bD.c(DD))), new class {
      constructor() {
        this.reshapeOffsets = mD
      }
      handles(DD) {
        const CD = nD(DD);
        return ND.has(CD) || CD === tD.g
      }
      affects(DD) {
        const CD = nD(DD);
        return gD.has(CD) || XD.has(CD) || CD === oD || CD === tD.g || void 0 !== tD.b[CD]
      }
      shape(DD, CD, cD, pD, iD, fD) {
        const {
          rootName: bD,
          rot: QD
        } = ID.g[iD].meta;
        return bD === tD.g ? fD ? iD : function(DD, CD, cD, pD, iD) {
          const [fD, bD] = tD.f[iD - 1];
          for (let QD = 1; QD <= tD.G; QD++) {
            const [wD, SD] = [CD - fD * QD, pD - bD * QD], BD = DD(wD, cD, SD);
            if (nD(BD) === tD.g && ID.g[BD].meta.rot === iD && ZD(CD, cD, pD, wD, SD)) return (0, ID.k)((0, tD._)(iD, !OD(BD)))
          }
          return (0, ID.k)((0, tD._)(iD, !1))
        }(DD, CD, cD, pD, QD) : (0, ID.k)((0, tD.K)(bD, QD, function(DD, CD, cD, pD, iD) {
          const [fD, bD] = tD.f[iD - 1], QD = (iD, QD) => function(DD, CD, cD, pD, iD) {
            var fD;
            const bD = null === (fD = ID.g[DD]) || void 0 === fD ? void 0 : fD.meta;
            if (!bD) return !1;
            const QD = bD.rootName,
              wD = gD.has(QD) || OD(DD);
            if (!wD && !XD.has(QD) && QD !== oD) return !1;
            const [SD, BD] = tD.f[bD.rot - 1];
            return wD ? SD === -CD && BD === -cD : XD.has(QD) ? SD === CD && BD === cD : (0, tD.Z)(ID.g[DD].name, SD, BD).some((DD => {
              let [ID, pD] = DD;
              return ID === -CD && pD === -cD
            })) && !(pD === CD && iD === cD)
          }(DD(CD + iD, cD, pD + QD), iD, QD, fD, bD), wD = DD(CD - fD, cD, pD - bD), SD = nD(wD) === oD && ID.g[wD].meta.rot === iD, BD = 1 === tD.b[nD(DD(CD, cD - 1, pD))] || -1 === tD.b[nD(DD(CD, cD + 1, pD))];
          if (BD || SD || function(DD, CD, cD) {
              if (nD(DD) !== vD) return !1;
              const [pD, iD] = tD.f[ID.g[DD].meta.rot - 1], [fD, bD] = (0, tD.N)(ID.g[DD].name, pD, iD);
              return CD === fD && cD === bD
            }(wD, fD, bD) || QD(-fD, -bD)) return null;
          const yD = QD(-bD, fD),
            MD = QD(bD, -fD);
          if (yD === MD) return null;
          return yD ? "turnLeft" : "turnRight"
        }(DD, CD, cD, pD, QD)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = UD, this.rootId = (0, ID.k)(HD.r)
      }
      handles(DD) {
        var CD;
        return (null === (CD = ID.g[DD]) || void 0 === CD ? void 0 : CD.meta.rootId) === this.rootId
      }
      affects(DD) {
        return this.handles(DD)
      }
      shape(DD, CD, cD, pD, iD, fD) {
        const bD = xD(iD);
        return (0, ID.k)((QD = bD.rot, null !== (wD = fD ? this.reshapedHalf(DD, CD, cD, pD, bD) : this.placedHalf(DD, CD, cD, pD, bD.rot)) ? (0, HD.e)(HD.r, QD, wD) : 1 === QD ? HD.r : `${HD.r}|meta|rot${QD}`));
        var QD, wD
      }
      placedHalf(DD, CD, cD, ID, pD) {
        const [iD, fD] = PD.e[pD];
        for (const [bD, QD] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const wD = CD + QD * iD,
            SD = ID + QD * fD,
            BD = qD(DD, wD, cD, SD);
          if (null !== BD && BD.rot === pD && (null === BD.half || !JD(DD, wD, cD, SD, BD))) return bD
        }
        return null
      }
      reshapedHalf(DD, CD, cD, ID, pD) {
        if (null !== pD.half && JD(DD, CD, cD, ID, pD)) return pD.half;
        for (const iD of ["right", "left"]) {
          const [fD, bD] = (0, HD.n)(pD.rot, iD), QD = qD(DD, CD + fD, cD, ID + bD);
          if (null !== QD && QD.rot === pD.rot && QD.half === HD.t[iD]) return iD
        }
        return null
      }
    }, new KD.c];

    function VD(DD, CD, cD, ID, pD) {
      let iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const fD of aD)
        if (fD.handles(pD)) return fD.shape(DD, CD, cD, ID, pD, iD);
      return pD
    }

    function zD(DD) {
      for (const ID of aD) {
        var CD, cD;
        if (ID.handles(DD)) return null !== (CD = null === (cD = ID.placedBy) || void 0 === cD ? void 0 : cD.call(ID, DD)) && void 0 !== CD ? CD : null
      }
      return null
    }
  },
  37797: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => HD,
      g: () => XD,
      j: () => gD
    });
    var ID = cD(9141),
      pD = cD(9162),
      iD = cD(9230),
      fD = cD(37804),
      bD = cD(9226);
    const QD = (0, fD.I)("pipe"),
      wD = (0, fD.I)("tank"),
      SD = (0, fD.I)("port"),
      BD = "Reactor Port";

    function yD(DD, CD, cD) {
      const ID = new Set([iD.f, iD.c, BD, ...CD, ...cD, ...DD ? [fD.f] : []]);
      return {
        makers: new Set(CD),
        roots: ID
      }
    }
    const MD = {
        water: yD(!0, ["Condenser"], ["Centrifuge", "Synthesizer", fD.c]),
        cryo: yD(!1, [fD.c], [])
      },
      tD = new Set([...MD.water.roots, ...MD.cryo.roots]),
      ZD = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      oD = pD.d.map((DD => ZD[DD])),
      vD = oD.map((DD => {
        let [CD, cD, ID] = DD;
        return fD.u.findIndex((DD => {
          let [pD, iD, fD] = DD;
          return pD === CD && iD === cD && fD === ID
        }))
      }));

    function ND(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const cD = ID.g[DD],
        pD = null === cD || void 0 === cD ? void 0 : cD.meta.rootName,
        yD = MD[CD];
      if (!pD || !yD.roots.has(pD)) return null;
      if ((0, iD.n)(pD)) return (0, fD.F)(cD.name) === CD ? QD : null;
      if (pD === fD.f) return wD;
      if (pD === BD) return cD.name.endsWith("|Water") ? SD : null;
      const [tD, ZD] = bD.f[(cD.meta.rot || 1) - 1];
      return (0, fD.I)(yD.makers.has(pD) ? "maker" : "user", [-tD, 0, -ZD])
    }

    function gD(DD, CD, cD, pD) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: bD
      } = MD[iD];
      return oD.some(((wD, SD) => {
        var BD, yD;
        let [MD, tD, ZD] = wD;
        const oD = DD(CD + MD, cD + tD, pD + ZD),
          gD = ND(oD, iD);
        return null !== gD && bD.has(null !== (BD = null === (yD = ID.g[oD]) || void 0 === yD ? void 0 : yD.meta.rootName) && void 0 !== BD ? BD : "") && !(0, fD.M)(QD, gD, vD[SD])
      }))
    }

    function XD(DD) {
      const CD = ID.g[DD];
      return CD ? (0, fD.F)(CD.name) : null
    }
    let mD = null;

    function nD(DD) {
      if (!mD) {
        mD = new Map;
        for (const DD of ["water", "cryo"])
          for (let CD = 0; CD < 64; CD++)
            for (const cD of [!1, !0]) mD.set((0, iD.r)(DD, CD, cD), {
              HM: DD,
              mask: CD,
              full: cD
            })
      }
      return mD.get(DD)
    }
    const OD = new Map(Array.from({
      length: iD.j + 1
    }, ((DD, CD) => [(0, iD.u)(CD), CD])));

    function PD(DD, CD, cD, pD, iD, fD) {
      return oD.some(((bD, QD) => {
        var wD, SD, BD;
        let [yD, MD, tD] = bD;
        if (0 === (fD >> QD & 1)) return !1;
        const ZD = null !== (wD = null === (SD = ID.g[DD(CD + yD, cD + MD, pD + tD)]) || void 0 === SD ? void 0 : SD.name) && void 0 !== wD ? wD : "",
          oD = nD(ZD);
        return oD ? oD.HM === iD && oD.full : (null !== (BD = function(DD) {
          var CD;
          return null !== (CD = OD.get(DD)) && void 0 !== CD ? CD : null
        }(ZD)) && void 0 !== BD ? BD : 0) > 0
      }))
    }
    class HD {
      constructor() {
        this.reshapeOffsets = oD
      }
      handles(DD) {
        return null !== XD(DD)
      }
      affects(DD) {
        var CD, cD;
        return tD.has(null !== (CD = null === (cD = ID.g[DD]) || void 0 === cD ? void 0 : cD.meta.rootName) && void 0 !== CD ? CD : "")
      }
      placedBy(DD) {
        var CD;
        return (null === (CD = ID.g[DD]) || void 0 === CD ? void 0 : CD.meta.rootName) === iD.c ? iD.f : null
      }
      shape(DD, CD, cD, pD, bD, wD) {
        var SD, BD, yD;
        const MD = null !== (SD = null === (BD = ID.g[bD]) || void 0 === BD ? void 0 : BD.name) && void 0 !== SD ? SD : "",
          tD = wD || MD !== iD.f ? null !== (yD = (0, fD.F)(MD)) && void 0 !== yD ? yD : "water" : function(DD, CD, cD, ID) {
            return oD.some(((pD, iD) => {
              let [bD, wD, SD] = pD;
              const BD = ND(DD(CD + bD, cD + wD, ID + SD), "cryo");
              return null !== BD && "port" !== BD.kind && (0, fD.M)(QD, BD, vD[iD])
            })) ? "cryo" : "water"
          }(DD, CD, cD, pD),
          ZD = function(DD, CD, cD, ID) {
            let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              iD = 0;
            return oD.forEach(((bD, wD) => {
              let [SD, BD, yD] = bD;
              const MD = ND(DD(CD + SD, cD + BD, ID + yD), pD);
              MD && (0, fD.M)(QD, MD, vD[wD]) && (iD |= 1 << wD)
            })), iD
          }(DD, CD, cD, pD, tD),
          gD = wD ? function(DD) {
            var CD;
            return !0 === (null === (CD = nD(DD)) || void 0 === CD ? void 0 : CD.full)
          }(MD) : PD(DD, CD, cD, pD, tD, ZD);
        return (0, ID.k)((0, iD.r)(tD, ZD, gD))
      }
    }
  },
  37548: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      g: () => iD
    });
    const ID = ["Chest", "Loot Chest", "Moonstone Chest"],
      pD = [{
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

    function iD(DD) {
      return pD.find((CD => CD.exactMatch ? DD === CD.name : DD.includes(CD.name)))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);