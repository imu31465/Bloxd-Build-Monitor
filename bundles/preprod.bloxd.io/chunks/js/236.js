export const id = 236;
export const ids = [236];
export const modules = {
  38040: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq,
      g: () => Yq,
      j: () => xq,
      l: () => lq,
      n: () => mq,
      r: () => Oq
    });
    const Yq = 1.001,
      lq = .501,
      Oq = .025,
      mq = .75,
      xq = .08,
      Aq = 4;

    function cq() {
      const qq = lq,
        Eq = Oq,
        gq = qq - Eq / 2,
        Yq = (2 * qq - 2 * Eq) / (2 * Aq - 1),
        mq = [];
      for (const lq of [-gq, gq])
        for (const Oq of [-gq, gq])
          for (let gq = 0; gq < Aq; gq++) {
            const xq = -qq + Eq + Yq * (2 * gq + .5);
            mq.push([Yq, Eq, Eq, xq, lq, Oq]), mq.push([Eq, Yq, Eq, lq, xq, Oq]), mq.push([Eq, Eq, Yq, lq, Oq, xq])
          }
      for (const lq of [-gq, gq])
        for (const qq of [-gq, gq])
          for (const Yq of [-gq, gq]) mq.push([Eq, Eq, Eq, lq, qq, Yq]);
      return mq
    }
  },
  38412: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => yq,
      E: () => rq,
      G: () => Qq,
      H: () => Pq,
      I: () => Wq,
      K: () => Vq,
      M: () => jq,
      P: () => lq,
      d: () => uq,
      h: () => Aq,
      j: () => oq,
      m: () => cq,
      q: () => xq,
      r: () => mq,
      t: () => Oq,
      x: () => tq,
      y: () => Nq
    });
    var Yq = gq(9460);

    function lq(qq) {
      return Math.floor(qq).toLocaleString("en-US")
    }
    const Oq = 2e3,
      mq = .005,
      xq = .001,
      Aq = 2,
      cq = "Fluid Tank",
      uq = "Coolant Mixer",
      Bq = 144;

    function Wq(qq) {
      const Eq = qq.split("|")[0];
      return (0, Yq.g)(Eq) ? Eq === Yq.b ? "cryo" : "water" : null
    }
    const Nq = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      aq = 63;

    function Vq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const gq = Eq ? function(qq, Eq, gq) {
        const Yq = Nq.findIndex((Yq => {
          let [lq, Oq, mq] = Yq;
          return lq === qq && Oq === Eq && mq === gq
        }));
        return Yq < 0 ? 0 : 1 << Yq
      }(Eq[0], Eq[1], Eq[2]) : 0;
      return "maker" === qq ? {
        kind: qq,
        faces: gq
      } : "user" === qq ? {
        kind: qq,
        faces: aq & ~gq
      } : {
        kind: qq,
        faces: aq
      }
    }

    function dq(qq) {
      return "pipe" === qq || "tank" === qq || "maker" === qq
    }

    function jq(qq, Eq, gq) {
      return 0 !== (qq.faces & 1 << gq) && 0 !== (Eq.faces & 1 << (1 ^ gq)) && (dq(qq.kind) || dq(Eq.kind))
    }
    const Hq = (qq, Eq, gq, Yq) => ({
        input: qq,
        inputAmount: Yq,
        output: Eq,
        outputAmount: gq
      }),
      oq = {
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
          recipes: [Hq("Uranium Grit", "Uranium Pellet", 1, 12), Hq("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Hq("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Bq,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Pq(qq, Eq) {
      return 1e3 * (null !== Eq && void 0 !== Eq ? Eq : 0) / qq.opMs
    }

    function Qq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gq = Pq(oq["Coolant Mixer"], Bq) * Eq;
      return qq <= 0 ? 0 : Math.ceil(qq / gq - 1e-9)
    }
    const yq = "baf2Water",
      tq = "baf2waterclose",
      rq = "baf2wateropen"
  },
  38399: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Mq,
      f: () => Tq
    });
    var Yq = gq(9379),
      lq = gq(9419);
    const Oq = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var mq = gq(9438),
      xq = gq(38207),
      Aq = gq(9433);
    const cq = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function uq(qq) {
      let [Eq, gq] = qq;
      return [-gq, Eq]
    }

    function Bq(qq, Eq) {
      return qq[0] === Eq[0] && qq[1] === Eq[1]
    }

    function Wq(qq, Eq) {
      return qq[0] * Eq[0] + qq[1] * Eq[1] === 0
    }
    const Nq = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var aq = gq(9457);

    function Vq(qq, Eq, gq, Yq, lq) {
      return Eq < aq.o || Eq >= aq.o + aq.p || Math.floor(qq / aq.t) === Math.floor(Yq / aq.t) && Math.floor(gq / aq.t) === Math.floor(lq / aq.t)
    }
    const dq = "Splitter",
      jq = "Sorting Gate",
      Hq = new Set(aq.F),
      oq = new Set([...aq.F, "Belt Loader", "Fast Loader", jq]),
      Pq = new Set(aq.r),
      Qq = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function yq(qq) {
      var Eq, gq;
      return null !== (Eq = null === (gq = Yq.i[qq]) || void 0 === gq ? void 0 : gq.meta.rootName) && void 0 !== Eq ? Eq : ""
    }

    function tq(qq) {
      return yq(qq) === aq.g && (0, aq.Q)(Yq.i[qq].name)
    }
    var rq = gq(9424),
      vq = gq(9443);
    const hq = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function nq(qq) {
      var Eq, gq;
      const lq = null === (Eq = Yq.i[qq]) || void 0 === Eq ? void 0 : Eq.meta;
      return (null === lq || void 0 === lq ? void 0 : lq.rootName) !== vq.k ? null : {
        rot: null !== (gq = lq.rot) && void 0 !== gq ? gq : 1,
        half: (0, vq.e)(lq.rootName, lq.metaStr)
      }
    }

    function bq(qq, Eq, gq, Yq) {
      return nq(qq(Eq, gq, Yq))
    }

    function iq(qq, Eq, gq, Yq, lq) {
      let {
        rot: Oq,
        half: mq
      } = lq;
      const [xq, Aq] = (0, vq.j)(Oq, mq), cq = bq(qq, Eq + xq, gq, Yq + Aq);
      return null !== cq && cq.rot === Oq && cq.half === vq.o[mq]
    }
    var Zq = gq(38408);
    const fq = [new class {
      constructor() {
        this.reshapeOffsets = Nq
      }
      handles(qq) {
        var Eq;
        return "Stairs" === (null === (Eq = Yq.i[qq]) || void 0 === Eq ? void 0 : Eq.model)
      }
      affects(qq) {
        return this.handles(qq)
      }
      shape(qq, Eq, gq, lq, Oq) {
        const mq = this.stairsOf(Oq),
          xq = this.cornerAt(qq, Eq, gq, lq, mq),
          cq = mq.half === Aq.c.top ? "top" : "bot";
        return (0, Yq.k)(`${Yq.i[Oq].meta.rootName}|meta|rot${mq.rot}|${cq}${null===xq?"":`|${xq}`}`)
      }
      stairsOf(qq) {
        const {
          rot: Eq,
          halfblockPlacement: gq
        } = Yq.i[qq].meta;
        return {
          rot: Eq,
          half: gq
        }
      }
      stairsAt(qq, Eq, gq, Yq) {
        const lq = qq(Eq, gq, Yq);
        return this.handles(lq) ? this.stairsOf(lq) : null
      }
      cornerAt(qq, Eq, gq, Yq, lq) {
        let {
          rot: Oq,
          half: mq
        } = lq;
        const xq = cq[Oq],
          Aq = lq => {
            let [xq, Aq] = lq;
            const cq = this.stairsAt(qq, Eq + xq, gq, Yq + Aq);
            return null !== cq && cq.rot === Oq && cq.half === mq
          },
          Nq = this.stairsAt(qq, Eq + xq[0], gq, Yq + xq[1]);
        if (null !== Nq && Nq.half === mq) {
          const qq = cq[Nq.rot];
          if (Wq(xq, qq) && !Aq([-qq[0], -qq[1]])) return Bq(qq, uq(xq)) ? "outerLeft" : "outerRight"
        }
        const aq = this.stairsAt(qq, Eq - xq[0], gq, Yq - xq[1]);
        if (null !== aq && aq.half === mq) {
          const qq = cq[aq.rot];
          if (Wq(xq, qq) && !Aq(qq)) return Bq(qq, uq(xq)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Oq, this.rootIds = new Set(lq.g.map((qq => (0, Yq.k)(qq))))
      }
      handles(qq) {
        var Eq;
        const gq = null === (Eq = Yq.i[qq]) || void 0 === Eq ? void 0 : Eq.meta;
        return void 0 !== gq && this.rootIds.has(gq.rootId)
      }
      affects(qq) {
        return this.handles(qq)
      }
      placedBy(qq) {
        return Yq.i[qq].meta.rootName === lq.p ? null : lq.p
      }
      shape(qq, Eq, gq, Oq, mq) {
        const {
          rootId: xq,
          rootName: Aq,
          rot: cq
        } = Yq.i[mq].meta;
        let uq = 0;
        return lq.u[cq].forEach(((lq, mq) => {
          var Aq;
          let [Bq, Wq, Nq] = lq;
          const aq = null === (Aq = Yq.i[qq(Eq + Bq, gq + Wq, Oq + Nq)]) || void 0 === Aq ? void 0 : Aq.meta;
          (null === aq || void 0 === aq ? void 0 : aq.rootId) === xq && aq.rot === cq && (uq |= 1 << mq)
        })), (0, Yq.k)((0, lq.e)(Aq, cq, uq))
      }
    }, ...mq.c.map((qq => new xq.c(qq))), new class {
      constructor() {
        this.reshapeOffsets = Qq
      }
      handles(qq) {
        const Eq = yq(qq);
        return Hq.has(Eq) || Eq === aq.g
      }
      affects(qq) {
        const Eq = yq(qq);
        return oq.has(Eq) || Pq.has(Eq) || Eq === dq || Eq === aq.g || void 0 !== aq.b[Eq]
      }
      shape(qq, Eq, gq, lq, Oq, mq) {
        const {
          rootName: xq,
          rot: Aq
        } = Yq.i[Oq].meta;
        return xq === aq.g ? mq ? Oq : function(qq, Eq, gq, lq, Oq) {
          const [mq, xq] = aq.f[Oq - 1];
          for (let Aq = 1; Aq <= aq.E; Aq++) {
            const [cq, uq] = [Eq - mq * Aq, lq - xq * Aq], Bq = qq(cq, gq, uq);
            if (yq(Bq) === aq.g && Yq.i[Bq].meta.rot === Oq && Vq(Eq, gq, lq, cq, uq)) return (0, Yq.k)((0, aq.X)(Oq, !tq(Bq)))
          }
          return (0, Yq.k)((0, aq.X)(Oq, !1))
        }(qq, Eq, gq, lq, Aq) : (0, Yq.k)((0, aq.H)(xq, Aq, function(qq, Eq, gq, lq, Oq) {
          const [mq, xq] = aq.f[Oq - 1], Aq = (Oq, Aq) => function(qq, Eq, gq, lq, Oq) {
            var mq;
            const xq = null === (mq = Yq.i[qq]) || void 0 === mq ? void 0 : mq.meta;
            if (!xq) return !1;
            const Aq = xq.rootName,
              cq = oq.has(Aq) || tq(qq);
            if (!cq && !Pq.has(Aq) && Aq !== dq) return !1;
            const [uq, Bq] = aq.f[xq.rot - 1];
            return cq ? uq === -Eq && Bq === -gq : Pq.has(Aq) ? uq === Eq && Bq === gq : (0, aq.W)(Yq.i[qq].name, uq, Bq).some((qq => {
              let [Yq, lq] = qq;
              return Yq === -Eq && lq === -gq
            })) && !(lq === Eq && Oq === gq)
          }(qq(Eq + Oq, gq, lq + Aq), Oq, Aq, mq, xq), cq = qq(Eq - mq, gq, lq - xq), uq = yq(cq) === dq && Yq.i[cq].meta.rot === Oq, Bq = 1 === aq.b[yq(qq(Eq, gq - 1, lq))] || -1 === aq.b[yq(qq(Eq, gq + 1, lq))];
          if (Bq || uq || function(qq, Eq, gq) {
              if (yq(qq) !== jq) return !1;
              const [lq, Oq] = aq.f[Yq.i[qq].meta.rot - 1], [mq, xq] = (0, aq.L)(Yq.i[qq].name, lq, Oq);
              return Eq === mq && gq === xq
            }(cq, mq, xq) || Aq(-mq, -xq)) return null;
          const Wq = Aq(-xq, mq),
            Nq = Aq(xq, -mq);
          if (Wq === Nq) return null;
          return Wq ? "turnLeft" : "turnRight"
        }(qq, Eq, gq, lq, Aq)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = hq, this.rootId = (0, Yq.k)(vq.k)
      }
      handles(qq) {
        var Eq;
        return (null === (Eq = Yq.i[qq]) || void 0 === Eq ? void 0 : Eq.meta.rootId) === this.rootId
      }
      affects(qq) {
        return this.handles(qq)
      }
      shape(qq, Eq, gq, lq, Oq, mq) {
        const xq = nq(Oq);
        return (0, Yq.k)((Aq = xq.rot, null !== (cq = mq ? this.reshapedHalf(qq, Eq, gq, lq, xq) : this.placedHalf(qq, Eq, gq, lq, xq.rot)) ? (0, vq.c)(vq.k, Aq, cq) : 1 === Aq ? vq.k : `${vq.k}|meta|rot${Aq}`));
        var Aq, cq
      }
      placedHalf(qq, Eq, gq, Yq, lq) {
        const [Oq, mq] = rq.b[lq];
        for (const [xq, Aq] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const cq = Eq + Aq * Oq,
            uq = Yq + Aq * mq,
            Bq = bq(qq, cq, gq, uq);
          if (null !== Bq && Bq.rot === lq && (null === Bq.half || !iq(qq, cq, gq, uq, Bq))) return xq
        }
        return null
      }
      reshapedHalf(qq, Eq, gq, Yq, lq) {
        if (null !== lq.half && iq(qq, Eq, gq, Yq, lq)) return lq.half;
        for (const Oq of ["right", "left"]) {
          const [mq, xq] = (0, vq.j)(lq.rot, Oq), Aq = bq(qq, Eq + mq, gq, Yq + xq);
          if (null !== Aq && Aq.rot === lq.rot && Aq.half === vq.o[Oq]) return Oq
        }
        return null
      }
    }, new Zq.c];

    function Mq(qq, Eq, gq, Yq, lq) {
      let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const mq of fq)
        if (mq.handles(lq)) return mq.shape(qq, Eq, gq, Yq, lq, Oq);
      return lq
    }

    function Tq(qq) {
      for (const Yq of fq) {
        var Eq, gq;
        if (Yq.handles(qq)) return null !== (Eq = null === (gq = Yq.placedBy) || void 0 === gq ? void 0 : gq.call(Yq, qq)) && void 0 !== Eq ? Eq : null
      }
      return null
    }
  },
  38408: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => vq,
      d: () => Pq,
      e: () => oq
    });
    var Yq = gq(9379),
      lq = gq(9406),
      Oq = gq(9460),
      mq = gq(38412),
      xq = gq(9457);
    const Aq = (0, mq.K)("pipe"),
      cq = (0, mq.K)("tank"),
      uq = (0, mq.K)("port"),
      Bq = "Reactor Port";

    function Wq(qq, Eq, gq) {
      const Yq = new Set([Oq.d, Oq.b, Bq, ...Eq, ...gq, ...qq ? [mq.m] : []]);
      return {
        makers: new Set(Eq),
        roots: Yq
      }
    }
    const Nq = {
        water: Wq(!0, ["Condenser"], ["Centrifuge", "Synthesizer", mq.d]),
        cryo: Wq(!1, [mq.d], [])
      },
      aq = new Set([...Nq.water.roots, ...Nq.cryo.roots]),
      Vq = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      dq = lq.i.map((qq => Vq[qq])),
      jq = dq.map((qq => {
        let [Eq, gq, Yq] = qq;
        return mq.y.findIndex((qq => {
          let [lq, Oq, mq] = qq;
          return lq === Eq && Oq === gq && mq === Yq
        }))
      }));

    function Hq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const gq = Yq.i[qq],
        lq = null === gq || void 0 === gq ? void 0 : gq.meta.rootName,
        Wq = Nq[Eq];
      if (!lq || !Wq.roots.has(lq)) return null;
      if ((0, Oq.g)(lq)) return (0, mq.I)(gq.name) === Eq ? Aq : null;
      if (lq === mq.m) return cq;
      if (lq === Bq) return gq.name.endsWith("|Water") ? uq : null;
      const [aq, Vq] = xq.f[(gq.meta.rot || 1) - 1];
      return (0, mq.K)(Wq.makers.has(lq) ? "maker" : "user", [-aq, 0, -Vq])
    }

    function oq(qq, Eq, gq, lq) {
      let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: xq
      } = Nq[Oq];
      return dq.some(((cq, uq) => {
        var Bq, Wq;
        let [Nq, aq, Vq] = cq;
        const dq = qq(Eq + Nq, gq + aq, lq + Vq),
          oq = Hq(dq, Oq);
        return null !== oq && xq.has(null !== (Bq = null === (Wq = Yq.i[dq]) || void 0 === Wq ? void 0 : Wq.meta.rootName) && void 0 !== Bq ? Bq : "") && !(0, mq.M)(Aq, oq, jq[uq])
      }))
    }

    function Pq(qq) {
      const Eq = Yq.i[qq];
      return Eq ? (0, mq.I)(Eq.name) : null
    }
    let Qq = null;

    function yq(qq) {
      if (!Qq) {
        Qq = new Map;
        for (const qq of ["water", "cryo"])
          for (let Eq = 0; Eq < 64; Eq++)
            for (const gq of [!1, !0]) Qq.set((0, Oq.h)(qq, Eq, gq), {
              wW: qq,
              mask: Eq,
              full: gq
            })
      }
      return Qq.get(qq)
    }
    const tq = new Map(Array.from({
      length: Oq.f + 1
    }, ((qq, Eq) => [(0, Oq.j)(Eq), Eq])));

    function rq(qq, Eq, gq, lq, Oq, mq) {
      return dq.some(((xq, Aq) => {
        var cq, uq, Bq;
        let [Wq, Nq, aq] = xq;
        if (0 === (mq >> Aq & 1)) return !1;
        const Vq = null !== (cq = null === (uq = Yq.i[qq(Eq + Wq, gq + Nq, lq + aq)]) || void 0 === uq ? void 0 : uq.name) && void 0 !== cq ? cq : "",
          dq = yq(Vq);
        return dq ? dq.wW === Oq && dq.full : (null !== (Bq = function(qq) {
          var Eq;
          return null !== (Eq = tq.get(qq)) && void 0 !== Eq ? Eq : null
        }(Vq)) && void 0 !== Bq ? Bq : 0) > 0
      }))
    }
    class vq {
      constructor() {
        this.reshapeOffsets = dq
      }
      handles(qq) {
        return null !== Pq(qq)
      }
      affects(qq) {
        var Eq, gq;
        return aq.has(null !== (Eq = null === (gq = Yq.i[qq]) || void 0 === gq ? void 0 : gq.meta.rootName) && void 0 !== Eq ? Eq : "")
      }
      placedBy(qq) {
        var Eq;
        return (null === (Eq = Yq.i[qq]) || void 0 === Eq ? void 0 : Eq.meta.rootName) === Oq.b ? Oq.d : null
      }
      shape(qq, Eq, gq, lq, xq, cq) {
        var uq, Bq, Wq;
        const Nq = null !== (uq = null === (Bq = Yq.i[xq]) || void 0 === Bq ? void 0 : Bq.name) && void 0 !== uq ? uq : "",
          aq = cq || Nq !== Oq.d ? null !== (Wq = (0, mq.I)(Nq)) && void 0 !== Wq ? Wq : "water" : function(qq, Eq, gq, Yq) {
            return dq.some(((lq, Oq) => {
              let [xq, cq, uq] = lq;
              const Bq = Hq(qq(Eq + xq, gq + cq, Yq + uq), "cryo");
              return null !== Bq && "port" !== Bq.kind && (0, mq.M)(Aq, Bq, jq[Oq])
            })) ? "cryo" : "water"
          }(qq, Eq, gq, lq),
          Vq = function(qq, Eq, gq, Yq) {
            let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Oq = 0;
            return dq.forEach(((xq, cq) => {
              let [uq, Bq, Wq] = xq;
              const Nq = Hq(qq(Eq + uq, gq + Bq, Yq + Wq), lq);
              Nq && (0, mq.M)(Aq, Nq, jq[cq]) && (Oq |= 1 << cq)
            })), Oq
          }(qq, Eq, gq, lq, aq),
          oq = cq ? function(qq) {
            var Eq;
            return !0 === (null === (Eq = yq(qq)) || void 0 === Eq ? void 0 : Eq.full)
          }(Nq) : rq(qq, Eq, gq, lq, aq, Vq);
        return (0, Yq.k)((0, Oq.h)(aq, Vq, oq))
      }
    }
  },
  38160: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      g: () => Oq
    });
    const Yq = ["Chest", "Loot Chest", "Moonstone Chest"],
      lq = [{
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

    function Oq(qq) {
      return lq.find((Eq => Eq.exactMatch ? qq === Eq.name : qq.includes(Eq.name)))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);