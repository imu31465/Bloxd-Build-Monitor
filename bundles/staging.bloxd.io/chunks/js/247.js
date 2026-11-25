export const id = 247;
export const ids = [247];
export const modules = {
  38432: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      e: () => su,
      g: () => lu,
      h: () => Uu,
      j: () => Xu,
      l: () => Zu
    });
    const su = 1.001,
      Uu = .501,
      Zu = .025,
      Xu = .75,
      lu = .08,
      qu = 4;

    function fu() {
      const uu = Uu,
        Eu = Zu,
        ju = uu - Eu / 2,
        su = (2 * uu - 2 * Eu) / (2 * qu - 1),
        Xu = [];
      for (const Uu of [-ju, ju])
        for (const Zu of [-ju, ju])
          for (let ju = 0; ju < qu; ju++) {
            const lu = -uu + Eu + su * (2 * ju + .5);
            Xu.push([su, Eu, Eu, lu, Uu, Zu]), Xu.push([Eu, su, Eu, Uu, lu, Zu]), Xu.push([Eu, Eu, su, Uu, Zu, lu])
          }
      for (const Uu of [-ju, ju])
        for (const uu of [-ju, ju])
          for (const su of [-ju, ju]) Xu.push([Eu, Eu, Eu, Uu, uu, su]);
      return Xu
    }
  },
  38754: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => eu,
      D: () => cu,
      H: () => Yu,
      J: () => Du,
      L: () => Uu,
      b: () => Cu,
      e: () => qu,
      f: () => Mu,
      j: () => fu,
      l: () => lu,
      m: () => Xu,
      n: () => Zu,
      r: () => wu,
      s: () => Nu,
      v: () => pu,
      w: () => Ju,
      y: () => Gu
    });
    var su = ju(9490);

    function Uu(uu) {
      return Math.floor(uu).toLocaleString("en-US")
    }
    const Zu = 2e3,
      Xu = .005,
      lu = .001,
      qu = 2,
      fu = "Fluid Tank",
      Cu = "Coolant Mixer",
      bu = 144;

    function cu(uu) {
      const Eu = uu.split("|")[0];
      return (0, su.h)(Eu) ? Eu === su.c ? "cryo" : "water" : null
    }
    const Nu = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Ou = 63;

    function Yu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const ju = Eu ? function(uu, Eu, ju) {
        const su = Nu.findIndex((su => {
          let [Uu, Zu, Xu] = su;
          return Uu === uu && Zu === Eu && Xu === ju
        }));
        return su < 0 ? 0 : 1 << su
      }(Eu[0], Eu[1], Eu[2]) : 0;
      return "maker" === uu ? {
        kind: uu,
        faces: ju
      } : "user" === uu ? {
        kind: uu,
        faces: Ou & ~ju
      } : {
        kind: uu,
        faces: Ou
      }
    }

    function hu(uu) {
      return "pipe" === uu || "tank" === uu || "maker" === uu
    }

    function Du(uu, Eu, ju) {
      return 0 !== (uu.faces & 1 << ju) && 0 !== (Eu.faces & 1 << (1 ^ ju)) && (hu(uu.kind) || hu(Eu.kind))
    }
    const gu = (uu, Eu, ju, su) => ({
        input: uu,
        inputAmount: su,
        output: Eu,
        outputAmount: ju
      }),
      Mu = {
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
          recipes: [gu("Uranium Grit", "Uranium Pellet", 1, 12), gu("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [gu("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: bu,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function eu(uu, Eu) {
      return 1e3 * (null !== Eu && void 0 !== Eu ? Eu : 0) / uu.opMs
    }

    function Gu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const ju = eu(Mu["Coolant Mixer"], bu) * Eu;
      return uu <= 0 ? 0 : Math.ceil(uu / ju - 1e-9)
    }
    const pu = "baf2Water",
      wu = "baf2waterclose",
      Ju = "baf2wateropen"
  },
  38745: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ku,
      f: () => Vu
    });
    var su = ju(9409),
      Uu = ju(9442);
    const Zu = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Xu = ju(9459),
      lu = ju(38582),
      qu = ju(9456);
    const fu = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Cu(uu) {
      let [Eu, ju] = uu;
      return [-ju, Eu]
    }

    function bu(uu, Eu) {
      return uu[0] === Eu[0] && uu[1] === Eu[1]
    }

    function cu(uu, Eu) {
      return uu[0] * Eu[0] + uu[1] * Eu[1] === 0
    }
    const Nu = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Ou = ju(9485);

    function Yu(uu, Eu, ju, su, Uu) {
      return Eu < Ou.p || Eu >= Ou.p + Ou.q || Math.floor(uu / Ou.w) === Math.floor(su / Ou.w) && Math.floor(ju / Ou.w) === Math.floor(Uu / Ou.w)
    }
    const hu = "Splitter",
      Du = "Sorting Gate",
      gu = new Set(Ou.G),
      Mu = new Set([...Ou.G, "Belt Loader", "Fast Loader", Du]),
      eu = new Set(Ou.s),
      Gu = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function pu(uu) {
      var Eu, ju;
      return null !== (Eu = null === (ju = su.f[uu]) || void 0 === ju ? void 0 : ju.meta.rootName) && void 0 !== Eu ? Eu : ""
    }

    function wu(uu) {
      return pu(uu) === Ou.f && (0, Ou.P)(su.f[uu].name)
    }
    var Ju = ju(9448),
      du = ju(9467);
    const au = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Pu(uu) {
      var Eu, ju;
      const Uu = null === (Eu = su.f[uu]) || void 0 === Eu ? void 0 : Eu.meta;
      return (null === Uu || void 0 === Uu ? void 0 : Uu.rootName) !== du.m ? null : {
        rot: null !== (ju = Uu.rot) && void 0 !== ju ? ju : 1,
        half: (0, du.f)(Uu.rootName, Uu.metaStr)
      }
    }

    function ou(uu, Eu, ju, su) {
      return Pu(uu(Eu, ju, su))
    }

    function ku(uu, Eu, ju, su, Uu) {
      let {
        rot: Zu,
        half: Xu
      } = Uu;
      const [lu, qu] = (0, du.l)(Zu, Xu), fu = ou(uu, Eu + lu, ju, su + qu);
      return null !== fu && fu.rot === Zu && fu.half === du.o[Xu]
    }
    var mu = ju(38751);
    const vu = [new class {
      constructor() {
        this.reshapeOffsets = Nu
      }
      handles(uu) {
        var Eu;
        return "Stairs" === (null === (Eu = su.f[uu]) || void 0 === Eu ? void 0 : Eu.model)
      }
      affects(uu) {
        return this.handles(uu)
      }
      shape(uu, Eu, ju, Uu, Zu) {
        const Xu = this.stairsOf(Zu),
          lu = this.cornerAt(uu, Eu, ju, Uu, Xu),
          fu = Xu.half === qu.d.top ? "top" : "bot";
        return (0, su.g)(`${su.f[Zu].meta.rootName}|meta|rot${Xu.rot}|${fu}${null===lu?"":`|${lu}`}`)
      }
      stairsOf(uu) {
        const {
          rot: Eu,
          halfblockPlacement: ju
        } = su.f[uu].meta;
        return {
          rot: Eu,
          half: ju
        }
      }
      stairsAt(uu, Eu, ju, su) {
        const Uu = uu(Eu, ju, su);
        return this.handles(Uu) ? this.stairsOf(Uu) : null
      }
      cornerAt(uu, Eu, ju, su, Uu) {
        let {
          rot: Zu,
          half: Xu
        } = Uu;
        const lu = fu[Zu],
          qu = Uu => {
            let [lu, qu] = Uu;
            const fu = this.stairsAt(uu, Eu + lu, ju, su + qu);
            return null !== fu && fu.rot === Zu && fu.half === Xu
          },
          Nu = this.stairsAt(uu, Eu + lu[0], ju, su + lu[1]);
        if (null !== Nu && Nu.half === Xu) {
          const uu = fu[Nu.rot];
          if (cu(lu, uu) && !qu([-uu[0], -uu[1]])) return bu(uu, Cu(lu)) ? "outerLeft" : "outerRight"
        }
        const Ou = this.stairsAt(uu, Eu - lu[0], ju, su - lu[1]);
        if (null !== Ou && Ou.half === Xu) {
          const uu = fu[Ou.rot];
          if (cu(lu, uu) && !qu(uu)) return bu(uu, Cu(lu)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Zu, this.rootIds = new Set(Uu.h.map((uu => (0, su.g)(uu))))
      }
      handles(uu) {
        var Eu;
        const ju = null === (Eu = su.f[uu]) || void 0 === Eu ? void 0 : Eu.meta;
        return void 0 !== ju && this.rootIds.has(ju.rootId)
      }
      affects(uu) {
        return this.handles(uu)
      }
      placedBy(uu) {
        return su.f[uu].meta.rootName === Uu.t ? null : Uu.t
      }
      shape(uu, Eu, ju, Zu, Xu) {
        const {
          rootId: lu,
          rootName: qu,
          rot: fu
        } = su.f[Xu].meta;
        let Cu = 0;
        return Uu.z[fu].forEach(((Uu, Xu) => {
          var qu;
          let [bu, cu, Nu] = Uu;
          const Ou = null === (qu = su.f[uu(Eu + bu, ju + cu, Zu + Nu)]) || void 0 === qu ? void 0 : qu.meta;
          (null === Ou || void 0 === Ou ? void 0 : Ou.rootId) === lu && Ou.rot === fu && (Cu |= 1 << Xu)
        })), (0, su.g)((0, Uu.f)(qu, fu, Cu))
      }
    }, ...Xu.b.map((uu => new lu.e(uu))), new class {
      constructor() {
        this.reshapeOffsets = Gu
      }
      handles(uu) {
        const Eu = pu(uu);
        return gu.has(Eu) || Eu === Ou.f
      }
      affects(uu) {
        const Eu = pu(uu);
        return Mu.has(Eu) || eu.has(Eu) || Eu === hu || Eu === Ou.f || void 0 !== Ou.c[Eu]
      }
      shape(uu, Eu, ju, Uu, Zu, Xu) {
        const {
          rootName: lu,
          rot: qu
        } = su.f[Zu].meta;
        return lu === Ou.f ? Xu ? Zu : function(uu, Eu, ju, Uu, Zu) {
          const [Xu, lu] = Ou.e[Zu - 1];
          for (let qu = 1; qu <= Ou.F; qu++) {
            const [fu, Cu] = [Eu - Xu * qu, Uu - lu * qu], bu = uu(fu, ju, Cu);
            if (pu(bu) === Ou.f && su.f[bu].meta.rot === Zu && Yu(Eu, ju, Uu, fu, Cu)) return (0, su.g)((0, Ou.$)(Zu, !wu(bu)))
          }
          return (0, su.g)((0, Ou.$)(Zu, !1))
        }(uu, Eu, ju, Uu, qu) : (0, su.g)((0, Ou.H)(lu, qu, function(uu, Eu, ju, Uu, Zu) {
          const [Xu, lu] = Ou.e[Zu - 1], qu = (Zu, Xu) => function(uu, Eu, ju) {
            var Uu;
            const Zu = null === (Uu = su.f[uu]) || void 0 === Uu ? void 0 : Uu.meta;
            if (!Zu) return !1;
            const Xu = Zu.rootName,
              lu = Mu.has(Xu) || wu(uu);
            if (!lu && !eu.has(Xu) && Xu !== hu) return !1;
            const [qu, fu] = Ou.e[Zu.rot - 1];
            if (lu && qu === -Eu && fu === -ju) return !0;
            if (eu.has(Xu)) return qu === Eu && fu === ju;
            const Cu = su.f[uu].name;
            return (Xu === hu ? (0, Ou.X)(Cu, qu, fu) : Xu === Du ? [(0, Ou.K)(Cu, qu, fu)] : []).some((uu => {
              let [su, Uu] = uu;
              return su === -Eu && Uu === -ju
            }))
          }(uu(Eu + Zu, ju, Uu + Xu), Zu, Xu), fu = uu(Eu - Xu, ju, Uu - lu), Cu = pu(fu) === hu && su.f[fu].meta.rot === Zu, bu = 1 === Ou.c[pu(uu(Eu, ju - 1, Uu))] || -1 === Ou.c[pu(uu(Eu, ju + 1, Uu))];
          if (bu || Cu || qu(-Xu, -lu)) return null;
          const cu = qu(-lu, Xu),
            Nu = qu(lu, -Xu);
          if (cu === Nu) return null;
          return cu ? "turnLeft" : "turnRight"
        }(uu, Eu, ju, Uu, qu)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = au, this.rootId = (0, su.g)(du.m)
      }
      handles(uu) {
        var Eu;
        return (null === (Eu = su.f[uu]) || void 0 === Eu ? void 0 : Eu.meta.rootId) === this.rootId
      }
      affects(uu) {
        return this.handles(uu)
      }
      shape(uu, Eu, ju, Uu, Zu, Xu) {
        const lu = Pu(Zu);
        return (0, su.g)((qu = lu.rot, null !== (fu = Xu ? this.reshapedHalf(uu, Eu, ju, Uu, lu) : this.placedHalf(uu, Eu, ju, Uu, lu.rot)) ? (0, du.e)(du.m, qu, fu) : 1 === qu ? du.m : `${du.m}|meta|rot${qu}`));
        var qu, fu
      }
      placedHalf(uu, Eu, ju, su, Uu) {
        const [Zu, Xu] = Ju.e[Uu];
        for (const [lu, qu] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const fu = Eu + qu * Zu,
            Cu = su + qu * Xu,
            bu = ou(uu, fu, ju, Cu);
          if (null !== bu && bu.rot === Uu && (null === bu.half || !ku(uu, fu, ju, Cu, bu))) return lu
        }
        return null
      }
      reshapedHalf(uu, Eu, ju, su, Uu) {
        if (null !== Uu.half && ku(uu, Eu, ju, su, Uu)) return Uu.half;
        for (const Zu of ["right", "left"]) {
          const [Xu, lu] = (0, du.l)(Uu.rot, Zu), qu = ou(uu, Eu + Xu, ju, su + lu);
          if (null !== qu && qu.rot === Uu.rot && qu.half === du.o[Zu]) return Zu
        }
        return null
      }
    }, new mu.b];

    function Ku(uu, Eu, ju, su, Uu) {
      let Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Xu of vu)
        if (Xu.handles(Uu)) return Xu.shape(uu, Eu, ju, su, Uu, Zu);
      return Uu
    }

    function Vu(uu) {
      for (const su of vu) {
        var Eu, ju;
        if (su.handles(uu)) return null !== (Eu = null === (ju = su.placedBy) || void 0 === ju ? void 0 : ju.call(su, uu)) && void 0 !== Eu ? Eu : null
      }
      return null
    }
  },
  38751: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => du,
      f: () => eu,
      h: () => Mu
    });
    var su = ju(9409),
      Uu = ju(9429),
      Zu = ju(9490),
      Xu = ju(38754),
      lu = ju(9485);
    const qu = (0, Xu.H)("pipe"),
      fu = (0, Xu.H)("tank"),
      Cu = (0, Xu.H)("port"),
      bu = "Reactor Port";

    function cu(uu, Eu, ju) {
      const su = new Set([Zu.e, Zu.c, bu, ...Eu, ...ju, ...uu ? [Xu.j] : []]);
      return {
        makers: new Set(Eu),
        roots: su
      }
    }
    const Nu = {
        water: cu(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Xu.b]),
        cryo: cu(!1, [Xu.b], [])
      },
      Ou = new Set([...Nu.water.roots, ...Nu.cryo.roots]),
      Yu = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      hu = Uu.e.map((uu => Yu[uu])),
      Du = hu.map((uu => {
        let [Eu, ju, su] = uu;
        return Xu.s.findIndex((uu => {
          let [Uu, Zu, Xu] = uu;
          return Uu === Eu && Zu === ju && Xu === su
        }))
      }));

    function gu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const ju = su.f[uu],
        Uu = null === ju || void 0 === ju ? void 0 : ju.meta.rootName,
        cu = Nu[Eu];
      if (!Uu || !cu.roots.has(Uu)) return null;
      if ((0, Zu.h)(Uu)) return (0, Xu.D)(ju.name) === Eu ? qu : null;
      if (Uu === Xu.j) return fu;
      if (Uu === bu) return ju.name.endsWith("|Water") ? Cu : null;
      const [Ou, Yu] = lu.e[(ju.meta.rot || 1) - 1];
      return (0, Xu.H)(cu.makers.has(Uu) ? "maker" : "user", [-Ou, 0, -Yu])
    }

    function Mu(uu, Eu, ju, Uu) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: lu
      } = Nu[Zu];
      return hu.some(((fu, Cu) => {
        var bu, cu;
        let [Nu, Ou, Yu] = fu;
        const hu = uu(Eu + Nu, ju + Ou, Uu + Yu),
          Mu = gu(hu, Zu);
        return null !== Mu && lu.has(null !== (bu = null === (cu = su.f[hu]) || void 0 === cu ? void 0 : cu.meta.rootName) && void 0 !== bu ? bu : "") && !(0, Xu.J)(qu, Mu, Du[Cu])
      }))
    }

    function eu(uu) {
      const Eu = su.f[uu];
      return Eu ? (0, Xu.D)(Eu.name) : null
    }
    let Gu = null;

    function pu(uu) {
      if (!Gu) {
        Gu = new Map;
        for (const uu of ["water", "cryo"])
          for (let Eu = 0; Eu < 64; Eu++)
            for (const ju of [!1, !0]) Gu.set((0, Zu.l)(uu, Eu, ju), {
              XN: uu,
              mask: Eu,
              full: ju
            })
      }
      return Gu.get(uu)
    }
    const wu = new Map(Array.from({
      length: Zu.g + 1
    }, ((uu, Eu) => [(0, Zu.p)(Eu), Eu])));

    function Ju(uu, Eu, ju, Uu, Zu, Xu) {
      return hu.some(((lu, qu) => {
        var fu, Cu, bu;
        let [cu, Nu, Ou] = lu;
        if (0 === (Xu >> qu & 1)) return !1;
        const Yu = null !== (fu = null === (Cu = su.f[uu(Eu + cu, ju + Nu, Uu + Ou)]) || void 0 === Cu ? void 0 : Cu.name) && void 0 !== fu ? fu : "",
          hu = pu(Yu);
        return hu ? hu.XN === Zu && hu.full : (null !== (bu = function(uu) {
          var Eu;
          return null !== (Eu = wu.get(uu)) && void 0 !== Eu ? Eu : null
        }(Yu)) && void 0 !== bu ? bu : 0) > 0
      }))
    }
    class du {
      constructor() {
        this.reshapeOffsets = hu
      }
      handles(uu) {
        return null !== eu(uu)
      }
      affects(uu) {
        var Eu, ju;
        return Ou.has(null !== (Eu = null === (ju = su.f[uu]) || void 0 === ju ? void 0 : ju.meta.rootName) && void 0 !== Eu ? Eu : "")
      }
      placedBy(uu) {
        var Eu;
        return (null === (Eu = su.f[uu]) || void 0 === Eu ? void 0 : Eu.meta.rootName) === Zu.c ? Zu.e : null
      }
      shape(uu, Eu, ju, Uu, lu, fu) {
        var Cu, bu, cu;
        const Nu = null !== (Cu = null === (bu = su.f[lu]) || void 0 === bu ? void 0 : bu.name) && void 0 !== Cu ? Cu : "",
          Ou = fu || Nu !== Zu.e ? null !== (cu = (0, Xu.D)(Nu)) && void 0 !== cu ? cu : "water" : function(uu, Eu, ju, su) {
            return hu.some(((Uu, Zu) => {
              let [lu, fu, Cu] = Uu;
              const bu = gu(uu(Eu + lu, ju + fu, su + Cu), "cryo");
              return null !== bu && "port" !== bu.kind && (0, Xu.J)(qu, bu, Du[Zu])
            })) ? "cryo" : "water"
          }(uu, Eu, ju, Uu),
          Yu = function(uu, Eu, ju, su) {
            let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Zu = 0;
            return hu.forEach(((lu, fu) => {
              let [Cu, bu, cu] = lu;
              const Nu = gu(uu(Eu + Cu, ju + bu, su + cu), Uu);
              Nu && (0, Xu.J)(qu, Nu, Du[fu]) && (Zu |= 1 << fu)
            })), Zu
          }(uu, Eu, ju, Uu, Ou),
          Mu = fu ? function(uu) {
            var Eu;
            return !0 === (null === (Eu = pu(uu)) || void 0 === Eu ? void 0 : Eu.full)
          }(Nu) : Ju(uu, Eu, ju, Uu, Ou, Yu);
        return (0, su.g)((0, Zu.l)(Ou, Yu, Mu))
      }
    }
  },
  38533: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => Zu
    });
    const su = ["Chest", "Loot Chest", "Moonstone Chest"],
      Uu = [{
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

    function Zu(uu) {
      return Uu.find((Eu => Eu.exactMatch ? uu === Eu.name : uu.includes(Eu.name)))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);