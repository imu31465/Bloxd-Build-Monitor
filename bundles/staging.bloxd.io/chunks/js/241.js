export const id = 241;
export const ids = [241];
export const modules = {
  38039: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      f: () => pD,
      g: () => LD,
      j: () => sD,
      l: () => rD,
      n: () => KD
    });
    const pD = 1.001,
      sD = .501,
      KD = .025,
      rD = .75,
      LD = .08,
      cD = 4;

    function gD() {
      const DD = sD,
        zD = KD,
        wD = DD - zD / 2,
        pD = (2 * DD - 2 * zD) / (2 * cD - 1),
        rD = [];
      for (const sD of [-wD, wD])
        for (const KD of [-wD, wD])
          for (let wD = 0; wD < cD; wD++) {
            const LD = -DD + zD + pD * (2 * wD + .5);
            rD.push([pD, zD, zD, LD, sD, KD]), rD.push([zD, pD, zD, sD, LD, KD]), rD.push([zD, zD, pD, sD, KD, LD])
          }
      for (const sD of [-wD, wD])
        for (const DD of [-wD, wD])
          for (const pD of [-wD, wD]) rD.push([zD, zD, zD, sD, DD, pD]);
      return rD
    }
  },
  38413: (DD, zD, wD) => {
    wD.d(zD, {
      B: () => fD,
      F: () => ED,
      G: () => XD,
      H: () => JD,
      I: () => OD,
      J: () => UD,
      L: () => BD,
      P: () => hD,
      R: () => sD,
      e: () => RD,
      i: () => cD,
      m: () => MD,
      o: () => gD,
      p: () => LD,
      t: () => rD,
      w: () => KD,
      z: () => QD
    });
    var pD = wD(9271);

    function sD(DD) {
      return Math.floor(DD).toLocaleString("en-US")
    }
    const KD = 2e3,
      rD = .005,
      LD = .001,
      cD = 2,
      gD = "Fluid Tank",
      RD = "Coolant Mixer",
      AD = 144;

    function UD(DD) {
      const zD = DD.split("|")[0];
      return (0, pD.l)(zD) ? zD === pD.e ? "cryo" : "water" : null
    }
    const fD = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      ID = 63;

    function BD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const wD = zD ? function(DD, zD, wD) {
        const pD = fD.findIndex((pD => {
          let [sD, KD, rD] = pD;
          return sD === DD && KD === zD && rD === wD
        }));
        return pD < 0 ? 0 : 1 << pD
      }(zD[0], zD[1], zD[2]) : 0;
      return "maker" === DD ? {
        kind: DD,
        faces: wD
      } : "user" === DD ? {
        kind: DD,
        faces: ID & ~wD
      } : {
        kind: DD,
        faces: ID
      }
    }

    function GD(DD) {
      return "pipe" === DD || "tank" === DD || "maker" === DD
    }

    function hD(DD, zD, wD) {
      return 0 !== (DD.faces & 1 << wD) && 0 !== (zD.faces & 1 << (1 ^ wD)) && (GD(DD.kind) || GD(zD.kind))
    }
    const nD = (DD, zD, wD, pD) => ({
        input: DD,
        inputAmount: pD,
        output: zD,
        outputAmount: wD
      }),
      MD = {
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
          recipes: [nD("Uranium Grit", "Uranium Pellet", 1, 12), nD("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [nD("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: AD,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function OD(DD, zD) {
      return 1e3 * (null !== zD && void 0 !== zD ? zD : 0) / DD.opMs
    }

    function JD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const wD = OD(MD["Coolant Mixer"], AD) * zD;
      return DD <= 0 ? 0 : Math.ceil(DD / wD - 1e-9)
    }
    const ED = "baf2Water",
      QD = "baf2waterclose",
      XD = "baf2wateropen"
  },
  38400: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => dD,
      e: () => SD
    });
    var pD = wD(9198),
      sD = wD(9228);
    const KD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var rD = wD(9240),
      LD = wD(38189),
      cD = wD(9236);
    const gD = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function RD(DD) {
      let [zD, wD] = DD;
      return [-wD, zD]
    }

    function AD(DD, zD) {
      return DD[0] === zD[0] && DD[1] === zD[1]
    }

    function UD(DD, zD) {
      return DD[0] * zD[0] + DD[1] * zD[1] === 0
    }
    const fD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var ID = wD(9264);

    function BD(DD, zD, wD, pD, sD) {
      return zD < ID.j || zD >= ID.j + ID.n || Math.floor(DD / ID.u) === Math.floor(pD / ID.u) && Math.floor(wD / ID.u) === Math.floor(sD / ID.u)
    }
    const GD = "Splitter",
      hD = "Sorting Gate",
      nD = new Set(ID.N),
      MD = new Set([...ID.N, "Belt Loader", "Fast Loader", hD]),
      OD = new Set(ID.q),
      JD = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function ED(DD) {
      var zD, wD;
      return null !== (zD = null === (wD = pD.l[DD]) || void 0 === wD ? void 0 : wD.meta.rootName) && void 0 !== zD ? zD : ""
    }

    function QD(DD) {
      return ED(DD) === ID.f && (0, ID.W)(pD.l[DD].name)
    }
    var XD = wD(9232),
      VD = wD(9247);
    const PD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function CD(DD) {
      var zD, wD;
      const sD = null === (zD = pD.l[DD]) || void 0 === zD ? void 0 : zD.meta;
      return (null === sD || void 0 === sD ? void 0 : sD.rootName) !== VD.l ? null : {
        rot: null !== (wD = sD.rot) && void 0 !== wD ? wD : 1,
        half: (0, VD.e)(sD.rootName, sD.metaStr)
      }
    }

    function xD(DD, zD, wD, pD) {
      return CD(DD(zD, wD, pD))
    }

    function TD(DD, zD, wD, pD, sD) {
      let {
        rot: KD,
        half: rD
      } = sD;
      const [LD, cD] = (0, VD.i)(KD, rD), gD = xD(DD, zD + LD, wD, pD + cD);
      return null !== gD && gD.rot === KD && gD.half === VD.p[rD]
    }
    var bD = wD(38409);
    const jD = [new class {
      constructor() {
        this.reshapeOffsets = fD
      }
      handles(DD) {
        var zD;
        return "Stairs" === (null === (zD = pD.l[DD]) || void 0 === zD ? void 0 : zD.model)
      }
      affects(DD) {
        return this.handles(DD)
      }
      shape(DD, zD, wD, sD, KD) {
        const rD = this.stairsOf(KD),
          LD = this.cornerAt(DD, zD, wD, sD, rD),
          gD = rD.half === cD.d.top ? "top" : "bot";
        return (0, pD.p)(`${pD.l[KD].meta.rootName}|meta|rot${rD.rot}|${gD}${null===LD?"":`|${LD}`}`)
      }
      stairsOf(DD) {
        const {
          rot: zD,
          halfblockPlacement: wD
        } = pD.l[DD].meta;
        return {
          rot: zD,
          half: wD
        }
      }
      stairsAt(DD, zD, wD, pD) {
        const sD = DD(zD, wD, pD);
        return this.handles(sD) ? this.stairsOf(sD) : null
      }
      cornerAt(DD, zD, wD, pD, sD) {
        let {
          rot: KD,
          half: rD
        } = sD;
        const LD = gD[KD],
          cD = sD => {
            let [LD, cD] = sD;
            const gD = this.stairsAt(DD, zD + LD, wD, pD + cD);
            return null !== gD && gD.rot === KD && gD.half === rD
          },
          fD = this.stairsAt(DD, zD + LD[0], wD, pD + LD[1]);
        if (null !== fD && fD.half === rD) {
          const DD = gD[fD.rot];
          if (UD(LD, DD) && !cD([-DD[0], -DD[1]])) return AD(DD, RD(LD)) ? "outerLeft" : "outerRight"
        }
        const ID = this.stairsAt(DD, zD - LD[0], wD, pD - LD[1]);
        if (null !== ID && ID.half === rD) {
          const DD = gD[ID.rot];
          if (UD(LD, DD) && !cD(DD)) return AD(DD, RD(LD)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = KD, this.rootIds = new Set(sD.k.map((DD => (0, pD.p)(DD))))
      }
      handles(DD) {
        var zD;
        const wD = null === (zD = pD.l[DD]) || void 0 === zD ? void 0 : zD.meta;
        return void 0 !== wD && this.rootIds.has(wD.rootId)
      }
      affects(DD) {
        return this.handles(DD)
      }
      placedBy(DD) {
        return pD.l[DD].meta.rootName === sD.t ? null : sD.t
      }
      shape(DD, zD, wD, KD, rD) {
        const {
          rootId: LD,
          rootName: cD,
          rot: gD
        } = pD.l[rD].meta;
        let RD = 0;
        return sD.z[gD].forEach(((sD, rD) => {
          var cD;
          let [AD, UD, fD] = sD;
          const ID = null === (cD = pD.l[DD(zD + AD, wD + UD, KD + fD)]) || void 0 === cD ? void 0 : cD.meta;
          (null === ID || void 0 === ID ? void 0 : ID.rootId) === LD && ID.rot === gD && (RD |= 1 << rD)
        })), (0, pD.p)((0, sD.i)(cD, gD, RD))
      }
    }, ...rD.e.map((DD => new LD.e(DD))), new class {
      constructor() {
        this.reshapeOffsets = JD
      }
      handles(DD) {
        const zD = ED(DD);
        return nD.has(zD) || zD === ID.f
      }
      affects(DD) {
        const zD = ED(DD);
        return MD.has(zD) || OD.has(zD) || zD === GD || zD === ID.f || void 0 !== ID.b[zD]
      }
      shape(DD, zD, wD, sD, KD, rD) {
        const {
          rootName: LD,
          rot: cD
        } = pD.l[KD].meta;
        return LD === ID.f ? rD ? KD : function(DD, zD, wD, sD, KD) {
          const [rD, LD] = ID.c[KD - 1];
          for (let cD = 1; cD <= ID.J; cD++) {
            const [gD, RD] = [zD - rD * cD, sD - LD * cD], AD = DD(gD, wD, RD);
            if (ED(AD) === ID.f && pD.l[AD].meta.rot === KD && BD(zD, wD, sD, gD, RD)) return (0, pD.p)((0, ID.ab)(KD, !QD(AD)))
          }
          return (0, pD.p)((0, ID.ab)(KD, !1))
        }(DD, zD, wD, sD, cD) : (0, pD.p)((0, ID.O)(LD, cD, function(DD, zD, wD, sD, KD) {
          const [rD, LD] = ID.c[KD - 1], cD = (KD, rD) => function(DD, zD, wD) {
            var sD;
            const KD = null === (sD = pD.l[DD]) || void 0 === sD ? void 0 : sD.meta;
            if (!KD) return !1;
            const rD = KD.rootName,
              LD = MD.has(rD) || QD(DD);
            if (!LD && !OD.has(rD) && rD !== GD) return !1;
            const [cD, gD] = ID.c[KD.rot - 1];
            if (LD && cD === -zD && gD === -wD) return !0;
            if (OD.has(rD)) return cD === zD && gD === wD;
            const RD = pD.l[DD].name;
            return (rD === GD ? (0, ID._)(RD, cD, gD) : rD === hD ? [(0, ID.R)(RD, cD, gD)] : []).some((DD => {
              let [pD, sD] = DD;
              return pD === -zD && sD === -wD
            }))
          }(DD(zD + KD, wD, sD + rD), KD, rD), gD = DD(zD - rD, wD, sD - LD), RD = ED(gD) === GD && pD.l[gD].meta.rot === KD, AD = 1 === ID.b[ED(DD(zD, wD - 1, sD))] || -1 === ID.b[ED(DD(zD, wD + 1, sD))];
          if (AD || RD || cD(-rD, -LD)) return null;
          const UD = cD(-LD, rD),
            fD = cD(LD, -rD);
          if (UD === fD) return null;
          return UD ? "turnLeft" : "turnRight"
        }(DD, zD, wD, sD, cD)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = PD, this.rootId = (0, pD.p)(VD.l)
      }
      handles(DD) {
        var zD;
        return (null === (zD = pD.l[DD]) || void 0 === zD ? void 0 : zD.meta.rootId) === this.rootId
      }
      affects(DD) {
        return this.handles(DD)
      }
      shape(DD, zD, wD, sD, KD, rD) {
        const LD = CD(KD);
        return (0, pD.p)((cD = LD.rot, null !== (gD = rD ? this.reshapedHalf(DD, zD, wD, sD, LD) : this.placedHalf(DD, zD, wD, sD, LD.rot)) ? (0, VD.c)(VD.l, cD, gD) : 1 === cD ? VD.l : `${VD.l}|meta|rot${cD}`));
        var cD, gD
      }
      placedHalf(DD, zD, wD, pD, sD) {
        const [KD, rD] = XD.c[sD];
        for (const [LD, cD] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const gD = zD + cD * KD,
            RD = pD + cD * rD,
            AD = xD(DD, gD, wD, RD);
          if (null !== AD && AD.rot === sD && (null === AD.half || !TD(DD, gD, wD, RD, AD))) return LD
        }
        return null
      }
      reshapedHalf(DD, zD, wD, pD, sD) {
        if (null !== sD.half && TD(DD, zD, wD, pD, sD)) return sD.half;
        for (const KD of ["right", "left"]) {
          const [rD, LD] = (0, VD.i)(sD.rot, KD), cD = xD(DD, zD + rD, wD, pD + LD);
          if (null !== cD && cD.rot === sD.rot && cD.half === VD.p[KD]) return KD
        }
        return null
      }
    }, new bD.d];

    function dD(DD, zD, wD, pD, sD) {
      let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const rD of jD)
        if (rD.handles(sD)) return rD.shape(DD, zD, wD, pD, sD, KD);
      return sD
    }

    function SD(DD) {
      for (const pD of jD) {
        var zD, wD;
        if (pD.handles(DD)) return null !== (zD = null === (wD = pD.placedBy) || void 0 === wD ? void 0 : wD.call(pD, DD)) && void 0 !== zD ? zD : null
      }
      return null
    }
  },
  38409: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => VD,
      f: () => OD,
      i: () => MD
    });
    var pD = wD(9198),
      sD = wD(9220),
      KD = wD(9271),
      rD = wD(38413),
      LD = wD(9264);
    const cD = (0, rD.L)("pipe"),
      gD = (0, rD.L)("tank"),
      RD = (0, rD.L)("port"),
      AD = "Reactor Port";

    function UD(DD, zD, wD) {
      const pD = new Set([KD.f, KD.e, AD, ...zD, ...wD, ...DD ? [rD.o] : []]);
      return {
        makers: new Set(zD),
        roots: pD
      }
    }
    const fD = {
        water: UD(!0, ["Condenser"], ["Centrifuge", "Synthesizer", rD.e]),
        cryo: UD(!1, [rD.e], [])
      },
      ID = new Set([...fD.water.roots, ...fD.cryo.roots]),
      BD = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      GD = sD.f.map((DD => BD[DD])),
      hD = GD.map((DD => {
        let [zD, wD, pD] = DD;
        return rD.B.findIndex((DD => {
          let [sD, KD, rD] = DD;
          return sD === zD && KD === wD && rD === pD
        }))
      }));

    function nD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const wD = pD.l[DD],
        sD = null === wD || void 0 === wD ? void 0 : wD.meta.rootName,
        UD = fD[zD];
      if (!sD || !UD.roots.has(sD)) return null;
      if ((0, KD.l)(sD)) return (0, rD.J)(wD.name) === zD ? cD : null;
      if (sD === rD.o) return gD;
      if (sD === AD) return wD.name.endsWith("|Water") ? RD : null;
      const [ID, BD] = LD.c[(wD.meta.rot || 1) - 1];
      return (0, rD.L)(UD.makers.has(sD) ? "maker" : "user", [-ID, 0, -BD])
    }

    function MD(DD, zD, wD, sD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: LD
      } = fD[KD];
      return GD.some(((gD, RD) => {
        var AD, UD;
        let [fD, ID, BD] = gD;
        const GD = DD(zD + fD, wD + ID, sD + BD),
          MD = nD(GD, KD);
        return null !== MD && LD.has(null !== (AD = null === (UD = pD.l[GD]) || void 0 === UD ? void 0 : UD.meta.rootName) && void 0 !== AD ? AD : "") && !(0, rD.P)(cD, MD, hD[RD])
      }))
    }

    function OD(DD) {
      const zD = pD.l[DD];
      return zD ? (0, rD.J)(zD.name) : null
    }
    let JD = null;

    function ED(DD) {
      if (!JD) {
        JD = new Map;
        for (const DD of ["water", "cryo"])
          for (let zD = 0; zD < 64; zD++)
            for (const wD of [!1, !0]) JD.set((0, KD.m)(DD, zD, wD), {
              Af: DD,
              mask: zD,
              full: wD
            })
      }
      return JD.get(DD)
    }
    const QD = new Map(Array.from({
      length: KD.j + 1
    }, ((DD, zD) => [(0, KD.p)(zD), zD])));

    function XD(DD, zD, wD, sD, KD, rD) {
      return GD.some(((LD, cD) => {
        var gD, RD, AD;
        let [UD, fD, ID] = LD;
        if (0 === (rD >> cD & 1)) return !1;
        const BD = null !== (gD = null === (RD = pD.l[DD(zD + UD, wD + fD, sD + ID)]) || void 0 === RD ? void 0 : RD.name) && void 0 !== gD ? gD : "",
          GD = ED(BD);
        return GD ? GD.Af === KD && GD.full : (null !== (AD = function(DD) {
          var zD;
          return null !== (zD = QD.get(DD)) && void 0 !== zD ? zD : null
        }(BD)) && void 0 !== AD ? AD : 0) > 0
      }))
    }
    class VD {
      constructor() {
        this.reshapeOffsets = GD
      }
      handles(DD) {
        return null !== OD(DD)
      }
      affects(DD) {
        var zD, wD;
        return ID.has(null !== (zD = null === (wD = pD.l[DD]) || void 0 === wD ? void 0 : wD.meta.rootName) && void 0 !== zD ? zD : "")
      }
      placedBy(DD) {
        var zD;
        return (null === (zD = pD.l[DD]) || void 0 === zD ? void 0 : zD.meta.rootName) === KD.e ? KD.f : null
      }
      shape(DD, zD, wD, sD, LD, gD) {
        var RD, AD, UD;
        const fD = null !== (RD = null === (AD = pD.l[LD]) || void 0 === AD ? void 0 : AD.name) && void 0 !== RD ? RD : "",
          ID = gD || fD !== KD.f ? null !== (UD = (0, rD.J)(fD)) && void 0 !== UD ? UD : "water" : function(DD, zD, wD, pD) {
            return GD.some(((sD, KD) => {
              let [LD, gD, RD] = sD;
              const AD = nD(DD(zD + LD, wD + gD, pD + RD), "cryo");
              return null !== AD && "port" !== AD.kind && (0, rD.P)(cD, AD, hD[KD])
            })) ? "cryo" : "water"
          }(DD, zD, wD, sD),
          BD = function(DD, zD, wD, pD) {
            let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              KD = 0;
            return GD.forEach(((LD, gD) => {
              let [RD, AD, UD] = LD;
              const fD = nD(DD(zD + RD, wD + AD, pD + UD), sD);
              fD && (0, rD.P)(cD, fD, hD[gD]) && (KD |= 1 << gD)
            })), KD
          }(DD, zD, wD, sD, ID),
          MD = gD ? function(DD) {
            var zD;
            return !0 === (null === (zD = ED(DD)) || void 0 === zD ? void 0 : zD.full)
          }(fD) : XD(DD, zD, wD, sD, ID, BD);
        return (0, pD.p)((0, KD.m)(ID, BD, MD))
      }
    }
  },
  38151: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD,
      c: () => KD
    });
    const pD = ["Chest", "Loot Chest", "Moonstone Chest"],
      sD = [{
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

    function KD(DD) {
      return sD.find((zD => zD.exactMatch ? DD === zD.name : DD.includes(zD.name)))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);