export const id = 241;
export const ids = [241];
export const modules = {
  37900: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => qC,
      g: () => QC,
      i: () => fC,
      m: () => wC,
      n: () => nC,
      r: () => bC
    });
    const QC = 1.001,
      wC = .501,
      bC = .025,
      nC = .75,
      fC = .08,
      oC = 4;

    function qC() {
      const CC = wC,
        zC = bC,
        ZC = CC - zC / 2,
        QC = (2 * CC - 2 * zC) / (2 * oC - 1),
        nC = [];
      for (const wC of [-ZC, ZC])
        for (const bC of [-ZC, ZC])
          for (let ZC = 0; ZC < oC; ZC++) {
            const fC = -CC + zC + QC * (2 * ZC + .5);
            nC.push([QC, zC, zC, fC, wC, bC]), nC.push([zC, QC, zC, wC, fC, bC]), nC.push([zC, zC, QC, wC, bC, fC])
          }
      for (const wC of [-ZC, ZC])
        for (const CC of [-ZC, ZC])
          for (const QC of [-ZC, ZC]) nC.push([zC, zC, zC, wC, CC, QC]);
      return nC
    }
  },
  38259: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => xC,
      C: () => AC,
      E: () => NC,
      H: () => SC,
      I: () => PC,
      M: () => wC,
      c: () => FC,
      f: () => oC,
      g: () => RC,
      h: () => qC,
      i: () => fC,
      m: () => nC,
      q: () => bC,
      r: () => IC,
      u: () => MC,
      w: () => JC,
      z: () => iC
    });
    var QC = ZC(9285);

    function wC(CC) {
      return Math.floor(CC).toLocaleString("en-US")
    }
    const bC = 2e3,
      nC = .005,
      fC = .001,
      oC = 2,
      qC = "Fluid Tank",
      FC = "Coolant Mixer",
      WC = 144;

    function NC(CC) {
      const zC = CC.split("|")[0];
      return (0, QC.h)(zC) ? zC === QC.b ? "cryo" : "water" : null
    }
    const MC = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      gC = 63;

    function SC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ZC = zC ? function(CC, zC, ZC) {
        const QC = MC.findIndex((QC => {
          let [wC, bC, nC] = QC;
          return wC === CC && bC === zC && nC === ZC
        }));
        return QC < 0 ? 0 : 1 << QC
      }(zC[0], zC[1], zC[2]) : 0;
      return "maker" === CC ? {
        kind: CC,
        faces: ZC
      } : "user" === CC ? {
        kind: CC,
        faces: gC & ~ZC
      } : {
        kind: CC,
        faces: gC
      }
    }

    function pC(CC) {
      return "pipe" === CC || "tank" === CC || "maker" === CC
    }

    function PC(CC, zC, ZC) {
      return 0 !== (CC.faces & 1 << ZC) && 0 !== (zC.faces & 1 << (1 ^ ZC)) && (pC(CC.kind) || pC(zC.kind))
    }
    const GC = (CC, zC, ZC, QC) => ({
        input: CC,
        inputAmount: QC,
        output: zC,
        outputAmount: ZC
      }),
      RC = {
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
          recipes: [GC("Uranium Grit", "Uranium Pellet", 1, 12), GC("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [GC("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: WC,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function AC(CC, zC) {
      return 1e3 * (null !== zC && void 0 !== zC ? zC : 0) / CC.opMs
    }

    function xC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ZC = AC(RC["Coolant Mixer"], WC) * zC;
      return CC <= 0 ? 0 : Math.ceil(CC / ZC - 1e-9)
    }
    const JC = "baf2Water",
      IC = "baf2waterclose",
      iC = "baf2wateropen"
  },
  38254: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => HC,
      g: () => EC
    });
    var QC = ZC(9194),
      wC = ZC(9230);
    const bC = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var nC = ZC(9243),
      fC = ZC(38047),
      oC = ZC(9239);
    const qC = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function FC(CC) {
      let [zC, ZC] = CC;
      return [-ZC, zC]
    }

    function WC(CC, zC) {
      return CC[0] === zC[0] && CC[1] === zC[1]
    }

    function NC(CC, zC) {
      return CC[0] * zC[0] + CC[1] * zC[1] === 0
    }
    const MC = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var gC = ZC(9279);

    function SC(CC, zC, ZC, QC, wC) {
      return zC < gC.s || zC >= gC.s + gC.v || Math.floor(CC / gC.A) === Math.floor(QC / gC.A) && Math.floor(ZC / gC.A) === Math.floor(wC / gC.A)
    }
    const pC = "Splitter",
      PC = "Sorting Gate",
      GC = new Set(gC.K),
      RC = new Set([...gC.K, "Belt Loader", "Fast Loader", PC]),
      AC = new Set(gC.x),
      xC = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function JC(CC) {
      var zC, ZC;
      return null !== (zC = null === (ZC = QC.g[CC]) || void 0 === ZC ? void 0 : ZC.meta.rootName) && void 0 !== zC ? zC : ""
    }

    function IC(CC) {
      return JC(CC) === gC.j && (0, gC.R)(QC.g[CC].name)
    }
    var iC = ZC(9235),
      vC = ZC(9260);
    const eC = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function hC(CC) {
      var zC, ZC;
      const wC = null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta;
      return (null === wC || void 0 === wC ? void 0 : wC.rootName) !== vC.q ? null : {
        rot: null !== (ZC = wC.rot) && void 0 !== ZC ? ZC : 1,
        half: (0, vC.h)(wC.rootName, wC.metaStr)
      }
    }

    function KC(CC, zC, ZC, QC) {
      return hC(CC(zC, ZC, QC))
    }

    function YC(CC, zC, ZC, QC, wC) {
      let {
        rot: bC,
        half: nC
      } = wC;
      const [fC, oC] = (0, vC.n)(bC, nC), qC = KC(CC, zC + fC, ZC, QC + oC);
      return null !== qC && qC.rot === bC && qC.half === vC.u[nC]
    }
    var dC = ZC(38256);
    const mC = [new class {
      constructor() {
        this.reshapeOffsets = MC
      }
      handles(CC) {
        var zC;
        return "Stairs" === (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.model)
      }
      affects(CC) {
        return this.handles(CC)
      }
      shape(CC, zC, ZC, wC, bC) {
        const nC = this.stairsOf(bC),
          fC = this.cornerAt(CC, zC, ZC, wC, nC),
          qC = nC.half === oC.c.top ? "top" : "bot";
        return (0, QC.k)(`${QC.g[bC].meta.rootName}|meta|rot${nC.rot}|${qC}${null===fC?"":`|${fC}`}`)
      }
      stairsOf(CC) {
        const {
          rot: zC,
          halfblockPlacement: ZC
        } = QC.g[CC].meta;
        return {
          rot: zC,
          half: ZC
        }
      }
      stairsAt(CC, zC, ZC, QC) {
        const wC = CC(zC, ZC, QC);
        return this.handles(wC) ? this.stairsOf(wC) : null
      }
      cornerAt(CC, zC, ZC, QC, wC) {
        let {
          rot: bC,
          half: nC
        } = wC;
        const fC = qC[bC],
          oC = wC => {
            let [fC, oC] = wC;
            const qC = this.stairsAt(CC, zC + fC, ZC, QC + oC);
            return null !== qC && qC.rot === bC && qC.half === nC
          },
          MC = this.stairsAt(CC, zC + fC[0], ZC, QC + fC[1]);
        if (null !== MC && MC.half === nC) {
          const CC = qC[MC.rot];
          if (NC(fC, CC) && !oC([-CC[0], -CC[1]])) return WC(CC, FC(fC)) ? "outerLeft" : "outerRight"
        }
        const gC = this.stairsAt(CC, zC - fC[0], ZC, QC - fC[1]);
        if (null !== gC && gC.half === nC) {
          const CC = qC[gC.rot];
          if (NC(fC, CC) && !oC(CC)) return WC(CC, FC(fC)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = bC, this.rootIds = new Set(wC.f.map((CC => (0, QC.k)(CC))))
      }
      handles(CC) {
        var zC;
        const ZC = null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta;
        return void 0 !== ZC && this.rootIds.has(ZC.rootId)
      }
      affects(CC) {
        return this.handles(CC)
      }
      placedBy(CC) {
        return QC.g[CC].meta.rootName === wC.j ? null : wC.j
      }
      shape(CC, zC, ZC, bC, nC) {
        const {
          rootId: fC,
          rootName: oC,
          rot: qC
        } = QC.g[nC].meta;
        let FC = 0;
        return wC.q[qC].forEach(((wC, nC) => {
          var oC;
          let [WC, NC, MC] = wC;
          const gC = null === (oC = QC.g[CC(zC + WC, ZC + NC, bC + MC)]) || void 0 === oC ? void 0 : oC.meta;
          (null === gC || void 0 === gC ? void 0 : gC.rootId) === fC && gC.rot === qC && (FC |= 1 << nC)
        })), (0, QC.k)((0, wC.c)(oC, qC, FC))
      }
    }, ...nC.e.map((CC => new fC.d(CC))), new class {
      constructor() {
        this.reshapeOffsets = xC
      }
      handles(CC) {
        const zC = JC(CC);
        return GC.has(zC) || zC === gC.j
      }
      affects(CC) {
        const zC = JC(CC);
        return RC.has(zC) || AC.has(zC) || zC === pC || zC === gC.j || void 0 !== gC.b[zC]
      }
      shape(CC, zC, ZC, wC, bC, nC) {
        const {
          rootName: fC,
          rot: oC
        } = QC.g[bC].meta;
        return fC === gC.j ? nC ? bC : function(CC, zC, ZC, wC, bC) {
          const [nC, fC] = gC.f[bC - 1];
          for (let oC = 1; oC <= gC.H; oC++) {
            const [qC, FC] = [zC - nC * oC, wC - fC * oC], WC = CC(qC, ZC, FC);
            if (JC(WC) === gC.j && QC.g[WC].meta.rot === bC && SC(zC, ZC, wC, qC, FC)) return (0, QC.k)((0, gC.Y)(bC, !IC(WC)))
          }
          return (0, QC.k)((0, gC.Y)(bC, !1))
        }(CC, zC, ZC, wC, oC) : (0, QC.k)((0, gC.L)(fC, oC, function(CC, zC, ZC, wC, bC) {
          const [nC, fC] = gC.f[bC - 1], oC = (bC, nC) => function(CC, zC, ZC) {
            var wC;
            const bC = null === (wC = QC.g[CC]) || void 0 === wC ? void 0 : wC.meta;
            if (!bC) return !1;
            const nC = bC.rootName,
              fC = RC.has(nC) || IC(CC);
            if (!fC && !AC.has(nC) && nC !== pC) return !1;
            const [oC, qC] = gC.f[bC.rot - 1];
            if (fC && oC === -zC && qC === -ZC) return !0;
            if (AC.has(nC)) return oC === zC && qC === ZC;
            const FC = QC.g[CC].name;
            return (nC === pC ? (0, gC.V)(FC, oC, qC) : nC === PC ? [(0, gC.M)(FC, oC, qC)] : []).some((CC => {
              let [QC, wC] = CC;
              return QC === -zC && wC === -ZC
            }))
          }(CC(zC + bC, ZC, wC + nC), bC, nC), qC = CC(zC - nC, ZC, wC - fC), FC = JC(qC) === pC && QC.g[qC].meta.rot === bC, WC = 1 === gC.b[JC(CC(zC, ZC - 1, wC))] || -1 === gC.b[JC(CC(zC, ZC + 1, wC))];
          if (WC || FC || oC(-nC, -fC)) return null;
          const NC = oC(-fC, nC),
            MC = oC(fC, -nC);
          if (NC === MC) return null;
          return NC ? "turnLeft" : "turnRight"
        }(CC, zC, ZC, wC, oC)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = eC, this.rootId = (0, QC.k)(vC.q)
      }
      handles(CC) {
        var zC;
        return (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta.rootId) === this.rootId
      }
      affects(CC) {
        return this.handles(CC)
      }
      shape(CC, zC, ZC, wC, bC, nC) {
        const fC = hC(bC);
        return (0, QC.k)((oC = fC.rot, null !== (qC = nC ? this.reshapedHalf(CC, zC, ZC, wC, fC) : this.placedHalf(CC, zC, ZC, wC, fC.rot)) ? (0, vC.e)(vC.q, oC, qC) : 1 === oC ? vC.q : `${vC.q}|meta|rot${oC}`));
        var oC, qC
      }
      placedHalf(CC, zC, ZC, QC, wC) {
        const [bC, nC] = iC.b[wC];
        for (const [fC, oC] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const qC = zC + oC * bC,
            FC = QC + oC * nC,
            WC = KC(CC, qC, ZC, FC);
          if (null !== WC && WC.rot === wC && (null === WC.half || !YC(CC, qC, ZC, FC, WC))) return fC
        }
        return null
      }
      reshapedHalf(CC, zC, ZC, QC, wC) {
        if (null !== wC.half && YC(CC, zC, ZC, QC, wC)) return wC.half;
        for (const bC of ["right", "left"]) {
          const [nC, fC] = (0, vC.n)(wC.rot, bC), oC = KC(CC, zC + nC, ZC, QC + fC);
          if (null !== oC && oC.rot === wC.rot && oC.half === vC.u[bC]) return bC
        }
        return null
      }
    }, new dC.d];

    function HC(CC, zC, ZC, QC, wC) {
      let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const nC of mC)
        if (nC.handles(wC)) return nC.shape(CC, zC, ZC, QC, wC, bC);
      return wC
    }

    function EC(CC) {
      for (const QC of mC) {
        var zC, ZC;
        if (QC.handles(CC)) return null !== (zC = null === (ZC = QC.placedBy) || void 0 === ZC ? void 0 : ZC.call(QC, CC)) && void 0 !== zC ? zC : null
      }
      return null
    }
  },
  38256: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => vC,
      f: () => AC,
      g: () => RC
    });
    var QC = ZC(9194),
      wC = ZC(9217),
      bC = ZC(9285),
      nC = ZC(38259),
      fC = ZC(9279);
    const oC = (0, nC.H)("pipe"),
      qC = (0, nC.H)("tank"),
      FC = (0, nC.H)("port"),
      WC = "Reactor Port";

    function NC(CC, zC, ZC) {
      const QC = new Set([bC.c, bC.b, WC, ...zC, ...ZC, ...CC ? [nC.h] : []]);
      return {
        makers: new Set(zC),
        roots: QC
      }
    }
    const MC = {
        water: NC(!0, ["Condenser"], ["Centrifuge", "Synthesizer", nC.c]),
        cryo: NC(!1, [nC.c], [])
      },
      gC = new Set([...MC.water.roots, ...MC.cryo.roots]),
      SC = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      pC = wC.d.map((CC => SC[CC])),
      PC = pC.map((CC => {
        let [zC, ZC, QC] = CC;
        return nC.u.findIndex((CC => {
          let [wC, bC, nC] = CC;
          return wC === zC && bC === ZC && nC === QC
        }))
      }));

    function GC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ZC = QC.g[CC],
        wC = null === ZC || void 0 === ZC ? void 0 : ZC.meta.rootName,
        NC = MC[zC];
      if (!wC || !NC.roots.has(wC)) return null;
      if ((0, bC.h)(wC)) return (0, nC.E)(ZC.name) === zC ? oC : null;
      if (wC === nC.h) return qC;
      if (wC === WC) return ZC.name.endsWith("|Water") ? FC : null;
      const [gC, SC] = fC.f[(ZC.meta.rot || 1) - 1];
      return (0, nC.H)(NC.makers.has(wC) ? "maker" : "user", [-gC, 0, -SC])
    }

    function RC(CC, zC, ZC, wC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: fC
      } = MC[bC];
      return pC.some(((qC, FC) => {
        var WC, NC;
        let [MC, gC, SC] = qC;
        const pC = CC(zC + MC, ZC + gC, wC + SC),
          RC = GC(pC, bC);
        return null !== RC && fC.has(null !== (WC = null === (NC = QC.g[pC]) || void 0 === NC ? void 0 : NC.meta.rootName) && void 0 !== WC ? WC : "") && !(0, nC.I)(oC, RC, PC[FC])
      }))
    }

    function AC(CC) {
      const zC = QC.g[CC];
      return zC ? (0, nC.E)(zC.name) : null
    }
    let xC = null;

    function JC(CC) {
      if (!xC) {
        xC = new Map;
        for (const CC of ["water", "cryo"])
          for (let zC = 0; zC < 64; zC++)
            for (const ZC of [!1, !0]) xC.set((0, bC.l)(CC, zC, ZC), {
              NM: CC,
              mask: zC,
              full: ZC
            })
      }
      return xC.get(CC)
    }
    const IC = new Map(Array.from({
      length: bC.f + 1
    }, ((CC, zC) => [(0, bC.n)(zC), zC])));

    function iC(CC, zC, ZC, wC, bC, nC) {
      return pC.some(((fC, oC) => {
        var qC, FC, WC;
        let [NC, MC, gC] = fC;
        if (0 === (nC >> oC & 1)) return !1;
        const SC = null !== (qC = null === (FC = QC.g[CC(zC + NC, ZC + MC, wC + gC)]) || void 0 === FC ? void 0 : FC.name) && void 0 !== qC ? qC : "",
          pC = JC(SC);
        return pC ? pC.NM === bC && pC.full : (null !== (WC = function(CC) {
          var zC;
          return null !== (zC = IC.get(CC)) && void 0 !== zC ? zC : null
        }(SC)) && void 0 !== WC ? WC : 0) > 0
      }))
    }
    class vC {
      constructor() {
        this.reshapeOffsets = pC
      }
      handles(CC) {
        return null !== AC(CC)
      }
      affects(CC) {
        var zC, ZC;
        return gC.has(null !== (zC = null === (ZC = QC.g[CC]) || void 0 === ZC ? void 0 : ZC.meta.rootName) && void 0 !== zC ? zC : "")
      }
      placedBy(CC) {
        var zC;
        return (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta.rootName) === bC.b ? bC.c : null
      }
      shape(CC, zC, ZC, wC, fC, qC) {
        var FC, WC, NC;
        const MC = null !== (FC = null === (WC = QC.g[fC]) || void 0 === WC ? void 0 : WC.name) && void 0 !== FC ? FC : "",
          gC = qC || MC !== bC.c ? null !== (NC = (0, nC.E)(MC)) && void 0 !== NC ? NC : "water" : function(CC, zC, ZC, QC) {
            return pC.some(((wC, bC) => {
              let [fC, qC, FC] = wC;
              const WC = GC(CC(zC + fC, ZC + qC, QC + FC), "cryo");
              return null !== WC && "port" !== WC.kind && (0, nC.I)(oC, WC, PC[bC])
            })) ? "cryo" : "water"
          }(CC, zC, ZC, wC),
          SC = function(CC, zC, ZC, QC) {
            let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              bC = 0;
            return pC.forEach(((fC, qC) => {
              let [FC, WC, NC] = fC;
              const MC = GC(CC(zC + FC, ZC + WC, QC + NC), wC);
              MC && (0, nC.I)(oC, MC, PC[qC]) && (bC |= 1 << qC)
            })), bC
          }(CC, zC, ZC, wC, gC),
          RC = qC ? function(CC) {
            var zC;
            return !0 === (null === (zC = JC(CC)) || void 0 === zC ? void 0 : zC.full)
          }(MC) : iC(CC, zC, ZC, wC, gC, SC);
        return (0, QC.k)((0, bC.l)(gC, SC, RC))
      }
    }
  },
  38004: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC,
      g: () => bC
    });
    const QC = ["Chest", "Loot Chest", "Moonstone Chest"],
      wC = [{
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

    function bC(CC) {
      return wC.find((zC => zC.exactMatch ? CC === zC.name : CC.includes(zC.name)))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);