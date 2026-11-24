export const id = 241;
export const ids = [241];
export const modules = {
  38084: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS,
      c: () => tS,
      g: () => NS,
      h: () => bS,
      j: () => xS,
      l: () => XS
    });
    const tS = 1.001,
      bS = .501,
      XS = .025,
      xS = .75,
      NS = .08,
      qS = 4;

    function uS() {
      const SS = bS,
        HS = XS,
        gS = SS - HS / 2,
        tS = (2 * SS - 2 * HS) / (2 * qS - 1),
        xS = [];
      for (const bS of [-gS, gS])
        for (const XS of [-gS, gS])
          for (let gS = 0; gS < qS; gS++) {
            const NS = -SS + HS + tS * (2 * gS + .5);
            xS.push([tS, HS, HS, NS, bS, XS]), xS.push([HS, tS, HS, bS, NS, XS]), xS.push([HS, HS, tS, bS, XS, NS])
          }
      for (const bS of [-gS, gS])
        for (const SS of [-gS, gS])
          for (const tS of [-gS, gS]) xS.push([HS, HS, HS, bS, SS, tS]);
      return xS
    }
  },
  38462: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => aS,
      C: () => wS,
      D: () => ZS,
      H: () => DS,
      L: () => QS,
      M: () => kS,
      Q: () => jS,
      T: () => CS,
      U: () => bS,
      e: () => IS,
      i: () => qS,
      l: () => PS,
      m: () => uS,
      n: () => NS,
      q: () => xS,
      u: () => XS,
      x: () => hS
    });
    var tS = gS(9453);

    function bS(SS) {
      return Math.floor(SS).toLocaleString("en-US")
    }
    const XS = 2e3,
      xS = .005,
      NS = .001,
      qS = 2,
      uS = "Fluid Tank",
      IS = "Coolant Mixer",
      fS = 144;

    function kS(SS) {
      const HS = SS.split("|")[0];
      return (0, tS.m)(HS) ? HS === tS.e ? "cryo" : "water" : null
    }
    const aS = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      KS = 63;

    function jS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const gS = HS ? function(SS, HS, gS) {
        const tS = aS.findIndex((tS => {
          let [bS, XS, xS] = tS;
          return bS === SS && XS === HS && xS === gS
        }));
        return tS < 0 ? 0 : 1 << tS
      }(HS[0], HS[1], HS[2]) : 0;
      return "maker" === SS ? {
        kind: SS,
        faces: gS
      } : "user" === SS ? {
        kind: SS,
        faces: KS & ~gS
      } : {
        kind: SS,
        faces: KS
      }
    }

    function GS(SS) {
      return "pipe" === SS || "tank" === SS || "maker" === SS
    }

    function CS(SS, HS, gS) {
      return 0 !== (SS.faces & 1 << gS) && 0 !== (HS.faces & 1 << (1 ^ gS)) && (GS(SS.kind) || GS(HS.kind))
    }
    const nS = (SS, HS, gS, tS) => ({
        input: SS,
        inputAmount: tS,
        output: HS,
        outputAmount: gS
      }),
      PS = {
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
          recipes: [nS("Uranium Grit", "Uranium Pellet", 1, 12), nS("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [nS("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: fS,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function QS(SS, HS) {
      return 1e3 * (null !== HS && void 0 !== HS ? HS : 0) / SS.opMs
    }

    function DS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gS = QS(PS["Coolant Mixer"], fS) * HS;
      return SS <= 0 ? 0 : Math.ceil(SS / gS - 1e-9)
    }
    const wS = "baf2Water",
      hS = "baf2waterclose",
      ZS = "baf2wateropen"
  },
  38455: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => YS,
      d: () => AS
    });
    var tS = gS(9361),
      bS = gS(9395);
    const XS = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var xS = gS(9416),
      NS = gS(38251),
      qS = gS(9411);
    const uS = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function IS(SS) {
      let [HS, gS] = SS;
      return [-gS, HS]
    }

    function fS(SS, HS) {
      return SS[0] === HS[0] && SS[1] === HS[1]
    }

    function kS(SS, HS) {
      return SS[0] * HS[0] + SS[1] * HS[1] === 0
    }
    const aS = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var KS = gS(9447);

    function jS(SS, HS, gS, tS, bS) {
      return HS < KS.p || HS >= KS.p + KS.r || Math.floor(SS / KS.w) === Math.floor(tS / KS.w) && Math.floor(gS / KS.w) === Math.floor(bS / KS.w)
    }
    const GS = "Splitter",
      CS = "Sorting Gate",
      nS = new Set(KS.F),
      PS = new Set([...KS.F, "Belt Loader", "Fast Loader", CS]),
      QS = new Set(KS.u),
      DS = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function wS(SS) {
      var HS, gS;
      return null !== (HS = null === (gS = tS.j[SS]) || void 0 === gS ? void 0 : gS.meta.rootName) && void 0 !== HS ? HS : ""
    }

    function hS(SS) {
      return wS(SS) === KS.j && (0, KS.M)(tS.j[SS].name)
    }
    var ZS = gS(9403),
      JS = gS(9425);
    const OS = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function dS(SS) {
      var HS, gS;
      const bS = null === (HS = tS.j[SS]) || void 0 === HS ? void 0 : HS.meta;
      return (null === bS || void 0 === bS ? void 0 : bS.rootName) !== JS.l ? null : {
        rot: null !== (gS = bS.rot) && void 0 !== gS ? gS : 1,
        half: (0, JS.f)(bS.rootName, bS.metaStr)
      }
    }

    function cS(SS, HS, gS, tS) {
      return dS(SS(HS, gS, tS))
    }

    function vS(SS, HS, gS, tS, bS) {
      let {
        rot: XS,
        half: xS
      } = bS;
      const [NS, qS] = (0, JS.k)(XS, xS), uS = cS(SS, HS + NS, gS, tS + qS);
      return null !== uS && uS.rot === XS && uS.half === JS.n[xS]
    }
    var ES = gS(38460);
    const LS = [new class {
      constructor() {
        this.reshapeOffsets = aS
      }
      handles(SS) {
        var HS;
        return "Stairs" === (null === (HS = tS.j[SS]) || void 0 === HS ? void 0 : HS.model)
      }
      affects(SS) {
        return this.handles(SS)
      }
      shape(SS, HS, gS, bS, XS) {
        const xS = this.stairsOf(XS),
          NS = this.cornerAt(SS, HS, gS, bS, xS),
          uS = xS.half === qS.b.top ? "top" : "bot";
        return (0, tS.n)(`${tS.j[XS].meta.rootName}|meta|rot${xS.rot}|${uS}${null===NS?"":`|${NS}`}`)
      }
      stairsOf(SS) {
        const {
          rot: HS,
          halfblockPlacement: gS
        } = tS.j[SS].meta;
        return {
          rot: HS,
          half: gS
        }
      }
      stairsAt(SS, HS, gS, tS) {
        const bS = SS(HS, gS, tS);
        return this.handles(bS) ? this.stairsOf(bS) : null
      }
      cornerAt(SS, HS, gS, tS, bS) {
        let {
          rot: XS,
          half: xS
        } = bS;
        const NS = uS[XS],
          qS = bS => {
            let [NS, qS] = bS;
            const uS = this.stairsAt(SS, HS + NS, gS, tS + qS);
            return null !== uS && uS.rot === XS && uS.half === xS
          },
          aS = this.stairsAt(SS, HS + NS[0], gS, tS + NS[1]);
        if (null !== aS && aS.half === xS) {
          const SS = uS[aS.rot];
          if (kS(NS, SS) && !qS([-SS[0], -SS[1]])) return fS(SS, IS(NS)) ? "outerLeft" : "outerRight"
        }
        const KS = this.stairsAt(SS, HS - NS[0], gS, tS - NS[1]);
        if (null !== KS && KS.half === xS) {
          const SS = uS[KS.rot];
          if (kS(NS, SS) && !qS(SS)) return fS(SS, IS(NS)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = XS, this.rootIds = new Set(bS.l.map((SS => (0, tS.n)(SS))))
      }
      handles(SS) {
        var HS;
        const gS = null === (HS = tS.j[SS]) || void 0 === HS ? void 0 : HS.meta;
        return void 0 !== gS && this.rootIds.has(gS.rootId)
      }
      affects(SS) {
        return this.handles(SS)
      }
      placedBy(SS) {
        return tS.j[SS].meta.rootName === bS.t ? null : bS.t
      }
      shape(SS, HS, gS, XS, xS) {
        const {
          rootId: NS,
          rootName: qS,
          rot: uS
        } = tS.j[xS].meta;
        let IS = 0;
        return bS.B[uS].forEach(((bS, xS) => {
          var qS;
          let [fS, kS, aS] = bS;
          const KS = null === (qS = tS.j[SS(HS + fS, gS + kS, XS + aS)]) || void 0 === qS ? void 0 : qS.meta;
          (null === KS || void 0 === KS ? void 0 : KS.rootId) === NS && KS.rot === uS && (IS |= 1 << xS)
        })), (0, tS.n)((0, bS.h)(qS, uS, IS))
      }
    }, ...xS.c.map((SS => new NS.b(SS))), new class {
      constructor() {
        this.reshapeOffsets = DS
      }
      handles(SS) {
        const HS = wS(SS);
        return nS.has(HS) || HS === KS.j
      }
      affects(SS) {
        const HS = wS(SS);
        return PS.has(HS) || QS.has(HS) || HS === GS || HS === KS.j || void 0 !== KS.c[HS]
      }
      shape(SS, HS, gS, bS, XS, xS) {
        const {
          rootName: NS,
          rot: qS
        } = tS.j[XS].meta;
        return NS === KS.j ? xS ? XS : function(SS, HS, gS, bS, XS) {
          const [xS, NS] = KS.f[XS - 1];
          for (let qS = 1; qS <= KS.E; qS++) {
            const [uS, IS] = [HS - xS * qS, bS - NS * qS], fS = SS(uS, gS, IS);
            if (wS(fS) === KS.j && tS.j[fS].meta.rot === XS && jS(HS, gS, bS, uS, IS)) return (0, tS.n)((0, KS.R)(XS, !hS(fS)))
          }
          return (0, tS.n)((0, KS.R)(XS, !1))
        }(SS, HS, gS, bS, qS) : (0, tS.n)((0, KS.G)(NS, qS, function(SS, HS, gS, bS, XS) {
          const [xS, NS] = KS.f[XS - 1], qS = (XS, xS) => function(SS, HS, gS) {
            var bS;
            const XS = null === (bS = tS.j[SS]) || void 0 === bS ? void 0 : bS.meta;
            if (!XS) return !1;
            const xS = XS.rootName,
              NS = PS.has(xS) || hS(SS);
            if (!NS && !QS.has(xS) && xS !== GS) return !1;
            const [qS, uS] = KS.f[XS.rot - 1];
            if (NS && qS === -HS && uS === -gS) return !0;
            if (QS.has(xS)) return qS === HS && uS === gS;
            const IS = tS.j[SS].name;
            return (xS === GS ? (0, KS.Q)(IS, qS, uS) : xS === CS ? [(0, KS.K)(IS, qS, uS)] : []).some((SS => {
              let [tS, bS] = SS;
              return tS === -HS && bS === -gS
            }))
          }(SS(HS + XS, gS, bS + xS), XS, xS), uS = SS(HS - xS, gS, bS - NS), IS = wS(uS) === GS && tS.j[uS].meta.rot === XS, fS = 1 === KS.c[wS(SS(HS, gS - 1, bS))] || -1 === KS.c[wS(SS(HS, gS + 1, bS))];
          if (fS || IS || qS(-xS, -NS)) return null;
          const kS = qS(-NS, xS),
            aS = qS(NS, -xS);
          if (kS === aS) return null;
          return kS ? "turnLeft" : "turnRight"
        }(SS, HS, gS, bS, qS)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = OS, this.rootId = (0, tS.n)(JS.l)
      }
      handles(SS) {
        var HS;
        return (null === (HS = tS.j[SS]) || void 0 === HS ? void 0 : HS.meta.rootId) === this.rootId
      }
      affects(SS) {
        return this.handles(SS)
      }
      shape(SS, HS, gS, bS, XS, xS) {
        const NS = dS(XS);
        return (0, tS.n)((qS = NS.rot, null !== (uS = xS ? this.reshapedHalf(SS, HS, gS, bS, NS) : this.placedHalf(SS, HS, gS, bS, NS.rot)) ? (0, JS.e)(JS.l, qS, uS) : 1 === qS ? JS.l : `${JS.l}|meta|rot${qS}`));
        var qS, uS
      }
      placedHalf(SS, HS, gS, tS, bS) {
        const [XS, xS] = ZS.b[bS];
        for (const [NS, qS] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const uS = HS + qS * XS,
            IS = tS + qS * xS,
            fS = cS(SS, uS, gS, IS);
          if (null !== fS && fS.rot === bS && (null === fS.half || !vS(SS, uS, gS, IS, fS))) return NS
        }
        return null
      }
      reshapedHalf(SS, HS, gS, tS, bS) {
        if (null !== bS.half && vS(SS, HS, gS, tS, bS)) return bS.half;
        for (const XS of ["right", "left"]) {
          const [xS, NS] = (0, JS.k)(bS.rot, XS), qS = cS(SS, HS + xS, gS, tS + NS);
          if (null !== qS && qS.rot === bS.rot && qS.half === JS.n[XS]) return XS
        }
        return null
      }
    }, new ES.e];

    function YS(SS, HS, gS, tS, bS) {
      let XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const xS of LS)
        if (xS.handles(bS)) return xS.shape(SS, HS, gS, tS, bS, XS);
      return bS
    }

    function AS(SS) {
      for (const tS of LS) {
        var HS, gS;
        if (tS.handles(SS)) return null !== (HS = null === (gS = tS.placedBy) || void 0 === gS ? void 0 : gS.call(tS, SS)) && void 0 !== HS ? HS : null
      }
      return null
    }
  },
  38460: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => JS,
      h: () => QS,
      i: () => PS
    });
    var tS = gS(9361),
      bS = gS(9379),
      XS = gS(9453),
      xS = gS(38462),
      NS = gS(9447);
    const qS = (0, xS.Q)("pipe"),
      uS = (0, xS.Q)("tank"),
      IS = (0, xS.Q)("port"),
      fS = "Reactor Port";

    function kS(SS, HS, gS) {
      const tS = new Set([XS.f, XS.e, fS, ...HS, ...gS, ...SS ? [xS.m] : []]);
      return {
        makers: new Set(HS),
        roots: tS
      }
    }
    const aS = {
        water: kS(!0, ["Condenser"], ["Centrifuge", "Synthesizer", xS.e]),
        cryo: kS(!1, [xS.e], [])
      },
      KS = new Set([...aS.water.roots, ...aS.cryo.roots]),
      jS = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      GS = bS.d.map((SS => jS[SS])),
      CS = GS.map((SS => {
        let [HS, gS, tS] = SS;
        return xS.A.findIndex((SS => {
          let [bS, XS, xS] = SS;
          return bS === HS && XS === gS && xS === tS
        }))
      }));

    function nS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const gS = tS.j[SS],
        bS = null === gS || void 0 === gS ? void 0 : gS.meta.rootName,
        kS = aS[HS];
      if (!bS || !kS.roots.has(bS)) return null;
      if ((0, XS.m)(bS)) return (0, xS.M)(gS.name) === HS ? qS : null;
      if (bS === xS.m) return uS;
      if (bS === fS) return gS.name.endsWith("|Water") ? IS : null;
      const [KS, jS] = NS.f[(gS.meta.rot || 1) - 1];
      return (0, xS.Q)(kS.makers.has(bS) ? "maker" : "user", [-KS, 0, -jS])
    }

    function PS(SS, HS, gS, bS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: NS
      } = aS[XS];
      return GS.some(((uS, IS) => {
        var fS, kS;
        let [aS, KS, jS] = uS;
        const GS = SS(HS + aS, gS + KS, bS + jS),
          PS = nS(GS, XS);
        return null !== PS && NS.has(null !== (fS = null === (kS = tS.j[GS]) || void 0 === kS ? void 0 : kS.meta.rootName) && void 0 !== fS ? fS : "") && !(0, xS.T)(qS, PS, CS[IS])
      }))
    }

    function QS(SS) {
      const HS = tS.j[SS];
      return HS ? (0, xS.M)(HS.name) : null
    }
    let DS = null;

    function wS(SS) {
      if (!DS) {
        DS = new Map;
        for (const SS of ["water", "cryo"])
          for (let HS = 0; HS < 64; HS++)
            for (const gS of [!1, !0]) DS.set((0, XS.q)(SS, HS, gS), {
              aa: SS,
              mask: HS,
              full: gS
            })
      }
      return DS.get(SS)
    }
    const hS = new Map(Array.from({
      length: XS.j + 1
    }, ((SS, HS) => [(0, XS.t)(HS), HS])));

    function ZS(SS, HS, gS, bS, XS, xS) {
      return GS.some(((NS, qS) => {
        var uS, IS, fS;
        let [kS, aS, KS] = NS;
        if (0 === (xS >> qS & 1)) return !1;
        const jS = null !== (uS = null === (IS = tS.j[SS(HS + kS, gS + aS, bS + KS)]) || void 0 === IS ? void 0 : IS.name) && void 0 !== uS ? uS : "",
          GS = wS(jS);
        return GS ? GS.aa === XS && GS.full : (null !== (fS = function(SS) {
          var HS;
          return null !== (HS = hS.get(SS)) && void 0 !== HS ? HS : null
        }(jS)) && void 0 !== fS ? fS : 0) > 0
      }))
    }
    class JS {
      constructor() {
        this.reshapeOffsets = GS
      }
      handles(SS) {
        return null !== QS(SS)
      }
      affects(SS) {
        var HS, gS;
        return KS.has(null !== (HS = null === (gS = tS.j[SS]) || void 0 === gS ? void 0 : gS.meta.rootName) && void 0 !== HS ? HS : "")
      }
      placedBy(SS) {
        var HS;
        return (null === (HS = tS.j[SS]) || void 0 === HS ? void 0 : HS.meta.rootName) === XS.e ? XS.f : null
      }
      shape(SS, HS, gS, bS, NS, uS) {
        var IS, fS, kS;
        const aS = null !== (IS = null === (fS = tS.j[NS]) || void 0 === fS ? void 0 : fS.name) && void 0 !== IS ? IS : "",
          KS = uS || aS !== XS.f ? null !== (kS = (0, xS.M)(aS)) && void 0 !== kS ? kS : "water" : function(SS, HS, gS, tS) {
            return GS.some(((bS, XS) => {
              let [NS, uS, IS] = bS;
              const fS = nS(SS(HS + NS, gS + uS, tS + IS), "cryo");
              return null !== fS && "port" !== fS.kind && (0, xS.T)(qS, fS, CS[XS])
            })) ? "cryo" : "water"
          }(SS, HS, gS, bS),
          jS = function(SS, HS, gS, tS) {
            let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              XS = 0;
            return GS.forEach(((NS, uS) => {
              let [IS, fS, kS] = NS;
              const aS = nS(SS(HS + IS, gS + fS, tS + kS), bS);
              aS && (0, xS.T)(qS, aS, CS[uS]) && (XS |= 1 << uS)
            })), XS
          }(SS, HS, gS, bS, KS),
          PS = uS ? function(SS) {
            var HS;
            return !0 === (null === (HS = wS(SS)) || void 0 === HS ? void 0 : HS.full)
          }(aS) : ZS(SS, HS, gS, bS, KS, jS);
        return (0, tS.n)((0, XS.q)(KS, jS, PS))
      }
    }
  },
  38205: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      g: () => XS
    });
    const tS = ["Chest", "Loot Chest", "Moonstone Chest"],
      bS = [{
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

    function XS(SS) {
      return bS.find((HS => HS.exactMatch ? SS === HS.name : SS.includes(HS.name)))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);