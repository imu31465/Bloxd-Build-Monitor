export const id = 234;
export const ids = [234];
export const modules = {
  37812: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu,
      f: () => Eu,
      j: () => Ju,
      m: () => Ku,
      q: () => mu,
      s: () => Qu
    });
    const Eu = 1.001,
      Ku = .501,
      Qu = .025,
      mu = .75,
      Ju = .08,
      Nu = 4;

    function Xu() {
      const uu = Ku,
        Ru = Qu,
        yu = uu - Ru / 2,
        Eu = (2 * uu - 2 * Ru) / (2 * Nu - 1),
        mu = [];
      for (const Ku of [-yu, yu])
        for (const Qu of [-yu, yu])
          for (let yu = 0; yu < Nu; yu++) {
            const Ju = -uu + Ru + Eu * (2 * yu + .5);
            mu.push([Eu, Ru, Ru, Ju, Ku, Qu]), mu.push([Ru, Eu, Ru, Ku, Ju, Qu]), mu.push([Ru, Ru, Eu, Ku, Qu, Ju])
          }
      for (const Ku of [-yu, yu])
        for (const uu of [-yu, yu])
          for (const Eu of [-yu, yu]) mu.push([Ru, Ru, Ru, Ku, uu, Eu]);
      return mu
    }
  },
  38198: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => xu,
      C: () => Cu,
      F: () => eu,
      I: () => bu,
      J: () => du,
      K: () => Bu,
      M: () => pu,
      O: () => Wu,
      Q: () => Ku,
      d: () => Vu,
      g: () => Nu,
      h: () => Hu,
      k: () => Xu,
      o: () => Ju,
      q: () => mu,
      u: () => Qu,
      w: () => ku
    });
    var Eu = yu(9243);

    function Ku(uu) {
      return Math.floor(uu).toLocaleString("en-US")
    }
    const Qu = 2e3,
      mu = .005,
      Ju = .001,
      Nu = 2,
      Xu = "Fluid Tank",
      Vu = "Coolant Mixer",
      ru = 144;

    function Bu(uu) {
      const Ru = uu.split("|")[0];
      return (0, Eu.k)(Ru) ? Ru === Eu.e ? "cryo" : "water" : null
    }
    const xu = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Su = 63;

    function pu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const yu = Ru ? function(uu, Ru, yu) {
        const Eu = xu.findIndex((Eu => {
          let [Ku, Qu, mu] = Eu;
          return Ku === uu && Qu === Ru && mu === yu
        }));
        return Eu < 0 ? 0 : 1 << Eu
      }(Ru[0], Ru[1], Ru[2]) : 0;
      return "maker" === uu ? {
        kind: uu,
        faces: yu
      } : "user" === uu ? {
        kind: uu,
        faces: Su & ~yu
      } : {
        kind: uu,
        faces: Su
      }
    }

    function Tu(uu) {
      return "pipe" === uu || "tank" === uu || "maker" === uu
    }

    function Wu(uu, Ru, yu) {
      return 0 !== (uu.faces & 1 << yu) && 0 !== (Ru.faces & 1 << (1 ^ yu)) && (Tu(uu.kind) || Tu(Ru.kind))
    }
    const ju = (uu, Ru, yu, Eu) => ({
        input: uu,
        inputAmount: Eu,
        output: Ru,
        outputAmount: yu
      }),
      Hu = {
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
          recipes: [ju("Uranium Grit", "Uranium Pellet", 1, 12), ju("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [ju("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: ru,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function du(uu, Ru) {
      return 1e3 * (null !== Ru && void 0 !== Ru ? Ru : 0) / uu.opMs
    }

    function bu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const yu = du(Hu["Coolant Mixer"], ru) * Ru;
      return uu <= 0 ? 0 : Math.ceil(uu / yu - 1e-9)
    }
    const Cu = "baf2Water",
      ku = "baf2waterclose",
      eu = "baf2wateropen"
  },
  38185: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => su,
      g: () => tu
    });
    var Eu = yu(9158),
      Ku = yu(9195);
    const Qu = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var mu = yu(9211),
      Ju = yu(37981),
      Nu = yu(9205);
    const Xu = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Vu(uu) {
      let [Ru, yu] = uu;
      return [-yu, Ru]
    }

    function ru(uu, Ru) {
      return uu[0] === Ru[0] && uu[1] === Ru[1]
    }

    function Bu(uu, Ru) {
      return uu[0] * Ru[0] + uu[1] * Ru[1] === 0
    }
    const xu = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Su = yu(9237);

    function pu(uu, Ru, yu, Eu, Ku) {
      return Ru < Su.r || Ru >= Su.r + Su.s || Math.floor(uu / Su.y) === Math.floor(Eu / Su.y) && Math.floor(yu / Su.y) === Math.floor(Ku / Su.y)
    }
    const Tu = "Splitter",
      Wu = "Sorting Gate",
      ju = new Set(Su.L),
      Hu = new Set([...Su.L, "Belt Loader", "Fast Loader", Wu]),
      du = new Set(Su.w),
      bu = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function Cu(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Eu.j[uu]) || void 0 === yu ? void 0 : yu.meta.rootName) && void 0 !== Ru ? Ru : ""
    }

    function ku(uu) {
      return Cu(uu) === Su.i && (0, Su.U)(Eu.j[uu].name)
    }
    var eu = yu(9200),
      Au = yu(9219);
    const Du = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Mu(uu) {
      var Ru, yu;
      const Ku = null === (Ru = Eu.j[uu]) || void 0 === Ru ? void 0 : Ru.meta;
      return (null === Ku || void 0 === Ku ? void 0 : Ku.rootName) !== Au.q ? null : {
        rot: null !== (yu = Ku.rot) && void 0 !== yu ? yu : 1,
        half: (0, Au.g)(Ku.rootName, Ku.metaStr)
      }
    }

    function Iu(uu, Ru, yu, Eu) {
      return Mu(uu(Ru, yu, Eu))
    }

    function Gu(uu, Ru, yu, Eu, Ku) {
      let {
        rot: Qu,
        half: mu
      } = Ku;
      const [Ju, Nu] = (0, Au.m)(Qu, mu), Xu = Iu(uu, Ru + Ju, yu, Eu + Nu);
      return null !== Xu && Xu.rot === Qu && Xu.half === Au.r[mu]
    }
    var Uu = yu(38189);
    const nu = [new class {
      constructor() {
        this.reshapeOffsets = xu
      }
      handles(uu) {
        var Ru;
        return "Stairs" === (null === (Ru = Eu.j[uu]) || void 0 === Ru ? void 0 : Ru.model)
      }
      affects(uu) {
        return this.handles(uu)
      }
      shape(uu, Ru, yu, Ku, Qu) {
        const mu = this.stairsOf(Qu),
          Ju = this.cornerAt(uu, Ru, yu, Ku, mu),
          Xu = mu.half === Nu.d.top ? "top" : "bot";
        return (0, Eu.n)(`${Eu.j[Qu].meta.rootName}|meta|rot${mu.rot}|${Xu}${null===Ju?"":`|${Ju}`}`)
      }
      stairsOf(uu) {
        const {
          rot: Ru,
          halfblockPlacement: yu
        } = Eu.j[uu].meta;
        return {
          rot: Ru,
          half: yu
        }
      }
      stairsAt(uu, Ru, yu, Eu) {
        const Ku = uu(Ru, yu, Eu);
        return this.handles(Ku) ? this.stairsOf(Ku) : null
      }
      cornerAt(uu, Ru, yu, Eu, Ku) {
        let {
          rot: Qu,
          half: mu
        } = Ku;
        const Ju = Xu[Qu],
          Nu = Ku => {
            let [Ju, Nu] = Ku;
            const Xu = this.stairsAt(uu, Ru + Ju, yu, Eu + Nu);
            return null !== Xu && Xu.rot === Qu && Xu.half === mu
          },
          xu = this.stairsAt(uu, Ru + Ju[0], yu, Eu + Ju[1]);
        if (null !== xu && xu.half === mu) {
          const uu = Xu[xu.rot];
          if (Bu(Ju, uu) && !Nu([-uu[0], -uu[1]])) return ru(uu, Vu(Ju)) ? "outerLeft" : "outerRight"
        }
        const Su = this.stairsAt(uu, Ru - Ju[0], yu, Eu - Ju[1]);
        if (null !== Su && Su.half === mu) {
          const uu = Xu[Su.rot];
          if (Bu(Ju, uu) && !Nu(uu)) return ru(uu, Vu(Ju)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Qu, this.rootIds = new Set(Ku.f.map((uu => (0, Eu.n)(uu))))
      }
      handles(uu) {
        var Ru;
        const yu = null === (Ru = Eu.j[uu]) || void 0 === Ru ? void 0 : Ru.meta;
        return void 0 !== yu && this.rootIds.has(yu.rootId)
      }
      affects(uu) {
        return this.handles(uu)
      }
      placedBy(uu) {
        return Eu.j[uu].meta.rootName === Ku.j ? null : Ku.j
      }
      shape(uu, Ru, yu, Qu, mu) {
        const {
          rootId: Ju,
          rootName: Nu,
          rot: Xu
        } = Eu.j[mu].meta;
        let Vu = 0;
        return Ku.q[Xu].forEach(((Ku, mu) => {
          var Nu;
          let [ru, Bu, xu] = Ku;
          const Su = null === (Nu = Eu.j[uu(Ru + ru, yu + Bu, Qu + xu)]) || void 0 === Nu ? void 0 : Nu.meta;
          (null === Su || void 0 === Su ? void 0 : Su.rootId) === Ju && Su.rot === Xu && (Vu |= 1 << mu)
        })), (0, Eu.n)((0, Ku.c)(Nu, Xu, Vu))
      }
    }, ...mu.e.map((uu => new Ju.c(uu))), new class {
      constructor() {
        this.reshapeOffsets = bu
      }
      handles(uu) {
        const Ru = Cu(uu);
        return ju.has(Ru) || Ru === Su.i
      }
      affects(uu) {
        const Ru = Cu(uu);
        return Hu.has(Ru) || du.has(Ru) || Ru === Tu || Ru === Su.i || void 0 !== Su.b[Ru]
      }
      shape(uu, Ru, yu, Ku, Qu, mu) {
        const {
          rootName: Ju,
          rot: Nu
        } = Eu.j[Qu].meta;
        return Ju === Su.i ? mu ? Qu : function(uu, Ru, yu, Ku, Qu) {
          const [mu, Ju] = Su.f[Qu - 1];
          for (let Nu = 1; Nu <= Su.K; Nu++) {
            const [Xu, Vu] = [Ru - mu * Nu, Ku - Ju * Nu], ru = uu(Xu, yu, Vu);
            if (Cu(ru) === Su.i && Eu.j[ru].meta.rot === Qu && pu(Ru, yu, Ku, Xu, Vu)) return (0, Eu.n)((0, Su.$)(Qu, !ku(ru)))
          }
          return (0, Eu.n)((0, Su.$)(Qu, !1))
        }(uu, Ru, yu, Ku, Nu) : (0, Eu.n)((0, Su.M)(Ju, Nu, function(uu, Ru, yu, Ku, Qu) {
          const [mu, Ju] = Su.f[Qu - 1], Nu = (Qu, Nu) => function(uu, Ru, yu, Ku, Qu) {
            var mu;
            const Ju = null === (mu = Eu.j[uu]) || void 0 === mu ? void 0 : mu.meta;
            if (!Ju) return !1;
            const Nu = Ju.rootName,
              Xu = Hu.has(Nu) || ku(uu);
            if (!Xu && !du.has(Nu) && Nu !== Tu) return !1;
            const [Vu, ru] = Su.f[Ju.rot - 1];
            return Xu ? Vu === -Ru && ru === -yu : du.has(Nu) ? Vu === Ru && ru === yu : (0, Su.Y)(Eu.j[uu].name, Vu, ru).some((uu => {
              let [Eu, Ku] = uu;
              return Eu === -Ru && Ku === -yu
            })) && !(Ku === Ru && Qu === yu)
          }(uu(Ru + Qu, yu, Ku + Nu), Qu, Nu, mu, Ju), Xu = uu(Ru - mu, yu, Ku - Ju), Vu = Cu(Xu) === Tu && Eu.j[Xu].meta.rot === Qu, ru = 1 === Su.b[Cu(uu(Ru, yu - 1, Ku))] || -1 === Su.b[Cu(uu(Ru, yu + 1, Ku))];
          if (ru || Vu || function(uu, Ru, yu) {
              if (Cu(uu) !== Wu) return !1;
              const [Ku, Qu] = Su.f[Eu.j[uu].meta.rot - 1], [mu, Ju] = (0, Su.P)(Eu.j[uu].name, Ku, Qu);
              return Ru === mu && yu === Ju
            }(Xu, mu, Ju) || Nu(-mu, -Ju)) return null;
          const Bu = Nu(-Ju, mu),
            xu = Nu(Ju, -mu);
          if (Bu === xu) return null;
          return Bu ? "turnLeft" : "turnRight"
        }(uu, Ru, yu, Ku, Nu)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Du, this.rootId = (0, Eu.n)(Au.q)
      }
      handles(uu) {
        var Ru;
        return (null === (Ru = Eu.j[uu]) || void 0 === Ru ? void 0 : Ru.meta.rootId) === this.rootId
      }
      affects(uu) {
        return this.handles(uu)
      }
      shape(uu, Ru, yu, Ku, Qu, mu) {
        const Ju = Mu(Qu);
        return (0, Eu.n)((Nu = Ju.rot, null !== (Xu = mu ? this.reshapedHalf(uu, Ru, yu, Ku, Ju) : this.placedHalf(uu, Ru, yu, Ku, Ju.rot)) ? (0, Au.d)(Au.q, Nu, Xu) : 1 === Nu ? Au.q : `${Au.q}|meta|rot${Nu}`));
        var Nu, Xu
      }
      placedHalf(uu, Ru, yu, Eu, Ku) {
        const [Qu, mu] = eu.e[Ku];
        for (const [Ju, Nu] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Xu = Ru + Nu * Qu,
            Vu = Eu + Nu * mu,
            ru = Iu(uu, Xu, yu, Vu);
          if (null !== ru && ru.rot === Ku && (null === ru.half || !Gu(uu, Xu, yu, Vu, ru))) return Ju
        }
        return null
      }
      reshapedHalf(uu, Ru, yu, Eu, Ku) {
        if (null !== Ku.half && Gu(uu, Ru, yu, Eu, Ku)) return Ku.half;
        for (const Qu of ["right", "left"]) {
          const [mu, Ju] = (0, Au.m)(Ku.rot, Qu), Nu = Iu(uu, Ru + mu, yu, Eu + Ju);
          if (null !== Nu && Nu.rot === Ku.rot && Nu.half === Au.r[Qu]) return Qu
        }
        return null
      }
    }, new Uu.b];

    function su(uu, Ru, yu, Eu, Ku) {
      let Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const mu of nu)
        if (mu.handles(Ku)) return mu.shape(uu, Ru, yu, Eu, Ku, Qu);
      return Ku
    }

    function tu(uu) {
      for (const Eu of nu) {
        var Ru, yu;
        if (Eu.handles(uu)) return null !== (Ru = null === (yu = Eu.placedBy) || void 0 === yu ? void 0 : yu.call(Eu, uu)) && void 0 !== Ru ? Ru : null
      }
      return null
    }
  },
  38189: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Au,
      e: () => du,
      i: () => Hu
    });
    var Eu = yu(9158),
      Ku = yu(9183),
      Qu = yu(9243),
      mu = yu(38198),
      Ju = yu(9237);
    const Nu = (0, mu.M)("pipe"),
      Xu = (0, mu.M)("tank"),
      Vu = (0, mu.M)("port"),
      ru = "Reactor Port";

    function Bu(uu, Ru, yu) {
      const Eu = new Set([Qu.f, Qu.e, ru, ...Ru, ...yu, ...uu ? [mu.k] : []]);
      return {
        makers: new Set(Ru),
        roots: Eu
      }
    }
    const xu = {
        water: Bu(!0, ["Condenser"], ["Centrifuge", "Synthesizer", mu.d]),
        cryo: Bu(!1, [mu.d], [])
      },
      Su = new Set([...xu.water.roots, ...xu.cryo.roots]),
      pu = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      Tu = Ku.g.map((uu => pu[uu])),
      Wu = Tu.map((uu => {
        let [Ru, yu, Eu] = uu;
        return mu.A.findIndex((uu => {
          let [Ku, Qu, mu] = uu;
          return Ku === Ru && Qu === yu && mu === Eu
        }))
      }));

    function ju(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const yu = Eu.j[uu],
        Ku = null === yu || void 0 === yu ? void 0 : yu.meta.rootName,
        Bu = xu[Ru];
      if (!Ku || !Bu.roots.has(Ku)) return null;
      if ((0, Qu.k)(Ku)) return (0, mu.K)(yu.name) === Ru ? Nu : null;
      if (Ku === mu.k) return Xu;
      if (Ku === ru) return yu.name.endsWith("|Water") ? Vu : null;
      const [Su, pu] = Ju.f[(yu.meta.rot || 1) - 1];
      return (0, mu.M)(Bu.makers.has(Ku) ? "maker" : "user", [-Su, 0, -pu])
    }

    function Hu(uu, Ru, yu, Ku) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ju
      } = xu[Qu];
      return Tu.some(((Xu, Vu) => {
        var ru, Bu;
        let [xu, Su, pu] = Xu;
        const Tu = uu(Ru + xu, yu + Su, Ku + pu),
          Hu = ju(Tu, Qu);
        return null !== Hu && Ju.has(null !== (ru = null === (Bu = Eu.j[Tu]) || void 0 === Bu ? void 0 : Bu.meta.rootName) && void 0 !== ru ? ru : "") && !(0, mu.O)(Nu, Hu, Wu[Vu])
      }))
    }

    function du(uu) {
      const Ru = Eu.j[uu];
      return Ru ? (0, mu.K)(Ru.name) : null
    }
    let bu = null;

    function Cu(uu) {
      if (!bu) {
        bu = new Map;
        for (const uu of ["water", "cryo"])
          for (let Ru = 0; Ru < 64; Ru++)
            for (const yu of [!1, !0]) bu.set((0, Qu.o)(uu, Ru, yu), {
              OB: uu,
              mask: Ru,
              full: yu
            })
      }
      return bu.get(uu)
    }
    const ku = new Map(Array.from({
      length: Qu.g + 1
    }, ((uu, Ru) => [(0, Qu.q)(Ru), Ru])));

    function eu(uu, Ru, yu, Ku, Qu, mu) {
      return Tu.some(((Ju, Nu) => {
        var Xu, Vu, ru;
        let [Bu, xu, Su] = Ju;
        if (0 === (mu >> Nu & 1)) return !1;
        const pu = null !== (Xu = null === (Vu = Eu.j[uu(Ru + Bu, yu + xu, Ku + Su)]) || void 0 === Vu ? void 0 : Vu.name) && void 0 !== Xu ? Xu : "",
          Tu = Cu(pu);
        return Tu ? Tu.OB === Qu && Tu.full : (null !== (ru = function(uu) {
          var Ru;
          return null !== (Ru = ku.get(uu)) && void 0 !== Ru ? Ru : null
        }(pu)) && void 0 !== ru ? ru : 0) > 0
      }))
    }
    class Au {
      constructor() {
        this.reshapeOffsets = Tu
      }
      handles(uu) {
        return null !== du(uu)
      }
      affects(uu) {
        var Ru, yu;
        return Su.has(null !== (Ru = null === (yu = Eu.j[uu]) || void 0 === yu ? void 0 : yu.meta.rootName) && void 0 !== Ru ? Ru : "")
      }
      placedBy(uu) {
        var Ru;
        return (null === (Ru = Eu.j[uu]) || void 0 === Ru ? void 0 : Ru.meta.rootName) === Qu.e ? Qu.f : null
      }
      shape(uu, Ru, yu, Ku, Ju, Xu) {
        var Vu, ru, Bu;
        const xu = null !== (Vu = null === (ru = Eu.j[Ju]) || void 0 === ru ? void 0 : ru.name) && void 0 !== Vu ? Vu : "",
          Su = Xu || xu !== Qu.f ? null !== (Bu = (0, mu.K)(xu)) && void 0 !== Bu ? Bu : "water" : function(uu, Ru, yu, Eu) {
            return Tu.some(((Ku, Qu) => {
              let [Ju, Xu, Vu] = Ku;
              const ru = ju(uu(Ru + Ju, yu + Xu, Eu + Vu), "cryo");
              return null !== ru && "port" !== ru.kind && (0, mu.O)(Nu, ru, Wu[Qu])
            })) ? "cryo" : "water"
          }(uu, Ru, yu, Ku),
          pu = function(uu, Ru, yu, Eu) {
            let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Qu = 0;
            return Tu.forEach(((Ju, Xu) => {
              let [Vu, ru, Bu] = Ju;
              const xu = ju(uu(Ru + Vu, yu + ru, Eu + Bu), Ku);
              xu && (0, mu.O)(Nu, xu, Wu[Xu]) && (Qu |= 1 << Xu)
            })), Qu
          }(uu, Ru, yu, Ku, Su),
          Hu = Xu ? function(uu) {
            var Ru;
            return !0 === (null === (Ru = Cu(uu)) || void 0 === Ru ? void 0 : Ru.full)
          }(xu) : eu(uu, Ru, yu, Ku, Su, pu);
        return (0, Eu.n)((0, Qu.o)(Su, pu, Hu))
      }
    }
  },
  37936: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu,
      f: () => Qu
    });
    const Eu = ["Chest", "Loot Chest", "Moonstone Chest"],
      Ku = [{
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

    function Qu(uu) {
      return Ku.find((Ru => Ru.exactMatch ? uu === Ru.name : uu.includes(Ru.name)))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);