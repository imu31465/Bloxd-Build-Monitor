export const id = 269;
export const ids = [269];
export const modules = {
  38891: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      e: () => ye,
      i: () => Ue,
      k: () => be,
      n: () => Ke,
      p: () => Me
    });
    const ye = 1.001,
      be = .501,
      Me = .025,
      Ke = .75,
      Ue = .08,
      Fe = 4;

    function Je() {
      const ee = be,
        ie = Me,
        He = ee - ie / 2,
        ye = (2 * ee - 2 * ie) / (2 * Fe - 1),
        Ke = [];
      for (const be of [-He, He])
        for (const Me of [-He, He])
          for (let He = 0; He < Fe; He++) {
            const Ue = -ee + ie + ye * (2 * He + .5);
            Ke.push([ye, ie, ie, Ue, be, Me]), Ke.push([ie, ye, ie, be, Ue, Me]), Ke.push([ie, ie, ye, be, Me, Ue])
          }
      for (const be of [-He, He])
        for (const ee of [-He, He])
          for (const ye of [-He, He]) Ke.push([ie, ie, ie, be, ee, ye]);
      return Ke
    }
  },
  39214: (ee, ie, He) => {
    He.d(ie, {
      A: () => Oe,
      E: () => We,
      H: () => ge,
      I: () => Ee,
      L: () => ke,
      P: () => Te,
      T: () => Xe,
      V: () => be,
      e: () => oe,
      f: () => Fe,
      j: () => Be,
      l: () => Je,
      o: () => Ue,
      s: () => Ke,
      u: () => Me,
      v: () => de,
      w: () => qe
    });
    var ye = He(10049);

    function be(ee) {
      return Math.floor(ee).toLocaleString("en-US")
    }
    const Me = 2e3,
      Ke = .005,
      Ue = .001,
      Fe = 2,
      Je = "Fluid Tank",
      oe = "Coolant Mixer",
      Re = 144;

    function ke(ee) {
      const ie = ee.split("|")[0];
      return (0, ye.n)(ie) ? ie === ye.e ? "cryo" : "water" : null
    }
    const qe = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      fe = 63;

    function Te(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const He = ie ? function(ee, ie, He) {
        const ye = qe.findIndex((ye => {
          let [be, Me, Ke] = ye;
          return be === ee && Me === ie && Ke === He
        }));
        return ye < 0 ? 0 : 1 << ye
      }(ie[0], ie[1], ie[2]) : 0;
      return "maker" === ee ? {
        kind: ee,
        faces: He
      } : "user" === ee ? {
        kind: ee,
        faces: fe & ~He
      } : {
        kind: ee,
        faces: fe
      }
    }

    function pe(ee) {
      return "pipe" === ee || "tank" === ee || "maker" === ee
    }

    function Xe(ee, ie, He) {
      return 0 !== (ee.faces & 1 << He) && 0 !== (ie.faces & 1 << (1 ^ He)) && (pe(ee.kind) || pe(ie.kind))
    }
    const ze = (ee, ie, He, ye) => ({
        input: ee,
        inputAmount: ye,
        output: ie,
        outputAmount: He
      }),
      Be = {
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
          recipes: [ze("Uranium Grit", "Uranium Pellet", 1, 12), ze("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [ze("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Re,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Ee(ee, ie) {
      return 1e3 * (null !== ie && void 0 !== ie ? ie : 0) / ee.opMs
    }

    function ge(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const He = Ee(Be["Coolant Mixer"], Re) * ie;
      return ee <= 0 ? 0 : Math.ceil(ee / He - 1e-9)
    }
    const Oe = "baf2Water",
      de = "baf2waterclose",
      We = "baf2wateropen"
  },
  39208: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ve,
      e: () => ae
    });
    var ye = He(9961),
      be = He(1e4);
    const Me = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var Ke = He(10012),
      Ue = He(39031),
      Fe = He(10008);
    const Je = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function oe(ee) {
      let [ie, He] = ee;
      return [-He, ie]
    }

    function Re(ee, ie) {
      return ee[0] === ie[0] && ee[1] === ie[1]
    }

    function ke(ee, ie) {
      return ee[0] * ie[0] + ee[1] * ie[1] === 0
    }
    const qe = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var fe = He(10046);

    function Te(ee, ie, He, ye, be) {
      return ie < fe.o || ie >= fe.o + fe.p || Math.floor(ee / fe.v) === Math.floor(ye / fe.v) && Math.floor(He / fe.v) === Math.floor(be / fe.v)
    }
    const pe = "Splitter",
      Xe = "Sorting Gate",
      ze = new Set(fe.J),
      Be = new Set([...fe.J, "Belt Loader", "Fast Loader", Xe]),
      Ee = new Set(fe.r),
      ge = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function Oe(ee) {
      var ie, He;
      return null !== (ie = null === (He = ye.i[ee]) || void 0 === He ? void 0 : He.meta.rootName) && void 0 !== ie ? ie : ""
    }

    function de(ee) {
      return Oe(ee) === fe.i && (0, fe.V)(ye.i[ee].name)
    }
    var We = He(10003),
      te = He(10026);
    const Ze = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function we(ee) {
      var ie, He;
      const be = null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.meta;
      return (null === be || void 0 === be ? void 0 : be.rootName) !== te.n ? null : {
        rot: null !== (He = be.rot) && void 0 !== He ? He : 1,
        half: (0, te.h)(be.rootName, be.metaStr)
      }
    }

    function De(ee, ie, He, ye) {
      return we(ee(ie, He, ye))
    }

    function Pe(ee, ie, He, ye, be) {
      let {
        rot: Me,
        half: Ke
      } = be;
      const [Ue, Fe] = (0, te.m)(Me, Ke), Je = De(ee, ie + Ue, He, ye + Fe);
      return null !== Je && Je.rot === Me && Je.half === te.p[Ke]
    }
    var Ae = He(39211);
    const Ye = [new class {
      constructor() {
        this.reshapeOffsets = qe
      }
      handles(ee) {
        var ie;
        return "Stairs" === (null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.model)
      }
      affects(ee) {
        return this.handles(ee)
      }
      shape(ee, ie, He, be, Me) {
        const Ke = this.stairsOf(Me),
          Ue = this.cornerAt(ee, ie, He, be, Ke),
          Je = Ke.half === Fe.d.top ? "top" : "bot";
        return (0, ye.j)(`${ye.i[Me].meta.rootName}|meta|rot${Ke.rot}|${Je}${null===Ue?"":`|${Ue}`}`)
      }
      stairsOf(ee) {
        const {
          rot: ie,
          halfblockPlacement: He
        } = ye.i[ee].meta;
        return {
          rot: ie,
          half: He
        }
      }
      stairsAt(ee, ie, He, ye) {
        const be = ee(ie, He, ye);
        return this.handles(be) ? this.stairsOf(be) : null
      }
      cornerAt(ee, ie, He, ye, be) {
        let {
          rot: Me,
          half: Ke
        } = be;
        const Ue = Je[Me],
          Fe = be => {
            let [Ue, Fe] = be;
            const Je = this.stairsAt(ee, ie + Ue, He, ye + Fe);
            return null !== Je && Je.rot === Me && Je.half === Ke
          },
          qe = this.stairsAt(ee, ie + Ue[0], He, ye + Ue[1]);
        if (null !== qe && qe.half === Ke) {
          const ee = Je[qe.rot];
          if (ke(Ue, ee) && !Fe([-ee[0], -ee[1]])) return Re(ee, oe(Ue)) ? "outerLeft" : "outerRight"
        }
        const fe = this.stairsAt(ee, ie - Ue[0], He, ye - Ue[1]);
        if (null !== fe && fe.half === Ke) {
          const ee = Je[fe.rot];
          if (ke(Ue, ee) && !Fe(ee)) return Re(ee, oe(Ue)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Me, this.rootIds = new Set(be.g.map((ee => (0, ye.j)(ee))))
      }
      handles(ee) {
        var ie;
        const He = null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.meta;
        return void 0 !== He && this.rootIds.has(He.rootId)
      }
      affects(ee) {
        return this.handles(ee)
      }
      placedBy(ee) {
        return ye.i[ee].meta.rootName === be.n ? null : be.n
      }
      shape(ee, ie, He, Me, Ke) {
        const {
          rootId: Ue,
          rootName: Fe,
          rot: Je
        } = ye.i[Ke].meta;
        let oe = 0;
        return be.s[Je].forEach(((be, Ke) => {
          var Fe;
          let [Re, ke, qe] = be;
          const fe = null === (Fe = ye.i[ee(ie + Re, He + ke, Me + qe)]) || void 0 === Fe ? void 0 : Fe.meta;
          (null === fe || void 0 === fe ? void 0 : fe.rootId) === Ue && fe.rot === Je && (oe |= 1 << Ke)
        })), (0, ye.j)((0, be.e)(Fe, Je, oe))
      }
    }, ...Ke.e.map((ee => new Ue.c(ee))), new class {
      constructor() {
        this.reshapeOffsets = ge
      }
      handles(ee) {
        const ie = Oe(ee);
        return ze.has(ie) || ie === fe.i
      }
      affects(ee) {
        const ie = Oe(ee);
        return Be.has(ie) || Ee.has(ie) || ie === pe || ie === fe.i || void 0 !== fe.b[ie]
      }
      shape(ee, ie, He, be, Me, Ke) {
        const {
          rootName: Ue,
          rot: Fe
        } = ye.i[Me].meta;
        return Ue === fe.i ? Ke ? Me : function(ee, ie, He, be, Me) {
          const [Ke, Ue] = fe.e[Me - 1];
          for (let Fe = 1; Fe <= fe.G; Fe++) {
            const [Je, oe] = [ie - Ke * Fe, be - Ue * Fe], Re = ee(Je, He, oe);
            if (Oe(Re) === fe.i && ye.i[Re].meta.rot === Me && Te(ie, He, be, Je, oe)) return (0, ye.j)((0, fe.eb)(Me, !de(Re)))
          }
          return (0, ye.j)((0, fe.eb)(Me, !1))
        }(ee, ie, He, be, Fe) : (0, ye.j)((0, fe.M)(Ue, Fe, function(ee, ie, He, be, Me) {
          const [Ke, Ue] = fe.e[Me - 1], Fe = (Me, Ke) => function(ee, ie, He) {
            var be;
            const Me = null === (be = ye.i[ee]) || void 0 === be ? void 0 : be.meta;
            if (!Me) return !1;
            const Ke = Me.rootName,
              Ue = Be.has(Ke) || de(ee);
            if (!Ue && !Ee.has(Ke) && Ke !== pe) return !1;
            const [Fe, Je] = fe.e[Me.rot - 1];
            if (Ue && Fe === -ie && Je === -He) return !0;
            if (Ee.has(Ke)) return Fe === ie && Je === He;
            const oe = ye.i[ee].name;
            return (Ke === pe ? (0, fe.ab)(oe, Fe, Je) : Ke === Xe ? [(0, fe.O)(oe, Fe, Je)] : []).some((ee => {
              let [ye, be] = ee;
              return ye === -ie && be === -He
            }))
          }(ee(ie + Me, He, be + Ke), Me, Ke), Je = ee(ie - Ke, He, be - Ue), oe = Oe(Je) === pe && ye.i[Je].meta.rot === Me, Re = 1 === fe.b[Oe(ee(ie, He - 1, be))] || -1 === fe.b[Oe(ee(ie, He + 1, be))];
          if (Re || oe || Fe(-Ke, -Ue)) return null;
          const ke = Fe(-Ue, Ke),
            qe = Fe(Ue, -Ke);
          if (ke === qe) return null;
          return ke ? "turnLeft" : "turnRight"
        }(ee, ie, He, be, Fe)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Ze, this.rootId = (0, ye.j)(te.n)
      }
      handles(ee) {
        var ie;
        return (null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.meta.rootId) === this.rootId
      }
      affects(ee) {
        return this.handles(ee)
      }
      shape(ee, ie, He, be, Me, Ke) {
        const Ue = we(Me);
        return (0, ye.j)((Fe = Ue.rot, null !== (Je = Ke ? this.reshapedHalf(ee, ie, He, be, Ue) : this.placedHalf(ee, ie, He, be, Ue.rot)) ? (0, te.e)(te.n, Fe, Je) : 1 === Fe ? te.n : `${te.n}|meta|rot${Fe}`));
        var Fe, Je
      }
      placedHalf(ee, ie, He, ye, be) {
        const [Me, Ke] = We.d[be];
        for (const [Ue, Fe] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const Je = ie + Fe * Me,
            oe = ye + Fe * Ke,
            Re = De(ee, Je, He, oe);
          if (null !== Re && Re.rot === be && (null === Re.half || !Pe(ee, Je, He, oe, Re))) return Ue
        }
        return null
      }
      reshapedHalf(ee, ie, He, ye, be) {
        if (null !== be.half && Pe(ee, ie, He, ye, be)) return be.half;
        for (const Me of ["right", "left"]) {
          const [Ke, Ue] = (0, te.m)(be.rot, Me), Fe = De(ee, ie + Ke, He, ye + Ue);
          if (null !== Fe && Fe.rot === be.rot && Fe.half === te.p[Me]) return Me
        }
        return null
      }
    }, new Ae.d];

    function Ve(ee, ie, He, ye, be) {
      let Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const Ke of Ye)
        if (Ke.handles(be)) return Ke.shape(ee, ie, He, ye, be, Me);
      return be
    }

    function ae(ee) {
      for (const ye of Ye) {
        var ie, He;
        if (ye.handles(ee)) return null !== (ie = null === (He = ye.placedBy) || void 0 === He ? void 0 : He.call(ye, ee)) && void 0 !== ie ? ie : null
      }
      return null
    }
  },
  39211: (ee, ie, He) => {
    He.d(ie, {
      d: () => te,
      e: () => Ee,
      h: () => Be
    });
    var ye = He(9961),
      be = He(9985),
      Me = He(10049),
      Ke = He(39214),
      Ue = He(10046);
    const Fe = (0, Ke.P)("pipe"),
      Je = (0, Ke.P)("tank"),
      oe = (0, Ke.P)("port"),
      Re = "Reactor Port";

    function ke(ee, ie, He) {
      const ye = new Set([Me.i, Me.e, Re, ...ie, ...He, ...ee ? [Ke.l] : []]);
      return {
        makers: new Set(ie),
        roots: ye
      }
    }
    const qe = {
        water: ke(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Ke.e]),
        cryo: ke(!1, [Ke.e], [])
      },
      fe = new Set([...qe.water.roots, ...qe.cryo.roots]),
      Te = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      pe = be.d.map((ee => Te[ee])),
      Xe = pe.map((ee => {
        let [ie, He, ye] = ee;
        return Ke.w.findIndex((ee => {
          let [be, Me, Ke] = ee;
          return be === ie && Me === He && Ke === ye
        }))
      }));

    function ze(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const He = ye.i[ee],
        be = null === He || void 0 === He ? void 0 : He.meta.rootName,
        ke = qe[ie];
      if (!be || !ke.roots.has(be)) return null;
      if ((0, Me.n)(be)) return (0, Ke.L)(He.name) === ie ? Fe : null;
      if (be === Ke.l) return Je;
      if (be === Re) return He.name.endsWith("|Water") ? oe : null;
      const [fe, Te] = Ue.e[(He.meta.rot || 1) - 1];
      return (0, Ke.P)(ke.makers.has(be) ? "maker" : "user", [-fe, 0, -Te])
    }

    function Be(ee, ie, He, be) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: Ue
      } = qe[Me];
      return pe.some(((Je, oe) => {
        var Re, ke;
        let [qe, fe, Te] = Je;
        const pe = ee(ie + qe, He + fe, be + Te),
          Be = ze(pe, Me);
        return null !== Be && Ue.has(null !== (Re = null === (ke = ye.i[pe]) || void 0 === ke ? void 0 : ke.meta.rootName) && void 0 !== Re ? Re : "") && !(0, Ke.T)(Fe, Be, Xe[oe])
      }))
    }

    function Ee(ee) {
      const ie = ye.i[ee];
      return ie ? (0, Ke.L)(ie.name) : null
    }
    let ge = null;

    function Oe(ee) {
      if (!ge) {
        ge = new Map;
        for (const ee of ["water", "cryo"])
          for (let ie = 0; ie < 64; ie++)
            for (const He of [!1, !0]) ge.set((0, Me.o)(ee, ie, He), {
              Lq: ee,
              mask: ie,
              full: He
            })
      }
      return ge.get(ee)
    }
    const de = new Map(Array.from({
      length: Me.j + 1
    }, ((ee, ie) => [(0, Me.p)(ie), ie])));

    function We(ee, ie, He, be, Me, Ke) {
      return pe.some(((Ue, Fe) => {
        var Je, oe, Re;
        let [ke, qe, fe] = Ue;
        if (0 === (Ke >> Fe & 1)) return !1;
        const Te = null !== (Je = null === (oe = ye.i[ee(ie + ke, He + qe, be + fe)]) || void 0 === oe ? void 0 : oe.name) && void 0 !== Je ? Je : "",
          pe = Oe(Te);
        return pe ? pe.Lq === Me && pe.full : (null !== (Re = function(ee) {
          var ie;
          return null !== (ie = de.get(ee)) && void 0 !== ie ? ie : null
        }(Te)) && void 0 !== Re ? Re : 0) > 0
      }))
    }
    class te {
      constructor() {
        this.reshapeOffsets = pe
      }
      handles(ee) {
        return null !== Ee(ee)
      }
      affects(ee) {
        var ie, He;
        return fe.has(null !== (ie = null === (He = ye.i[ee]) || void 0 === He ? void 0 : He.meta.rootName) && void 0 !== ie ? ie : "")
      }
      placedBy(ee) {
        var ie;
        return (null === (ie = ye.i[ee]) || void 0 === ie ? void 0 : ie.meta.rootName) === Me.e ? Me.i : null
      }
      shape(ee, ie, He, be, Ue, Je) {
        var oe, Re, ke;
        const qe = null !== (oe = null === (Re = ye.i[Ue]) || void 0 === Re ? void 0 : Re.name) && void 0 !== oe ? oe : "",
          fe = Je || qe !== Me.i ? null !== (ke = (0, Ke.L)(qe)) && void 0 !== ke ? ke : "water" : function(ee, ie, He, ye) {
            return pe.some(((be, Me) => {
              let [Ue, Je, oe] = be;
              const Re = ze(ee(ie + Ue, He + Je, ye + oe), "cryo");
              return null !== Re && "port" !== Re.kind && (0, Ke.T)(Fe, Re, Xe[Me])
            })) ? "cryo" : "water"
          }(ee, ie, He, be),
          Te = function(ee, ie, He, ye) {
            let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              Me = 0;
            return pe.forEach(((Ue, Je) => {
              let [oe, Re, ke] = Ue;
              const qe = ze(ee(ie + oe, He + Re, ye + ke), be);
              qe && (0, Ke.T)(Fe, qe, Xe[Je]) && (Me |= 1 << Je)
            })), Me
          }(ee, ie, He, be, fe),
          Be = Je ? function(ee) {
            var ie;
            return !0 === (null === (ie = Oe(ee)) || void 0 === ie ? void 0 : ie.full)
          }(qe) : We(ee, ie, He, be, fe, Te);
        return (0, ye.j)((0, Me.o)(fe, Te, Be))
      }
    }
  },
  38990: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      e: () => Me
    });
    const ye = ["Chest", "Loot Chest", "Moonstone Chest"],
      be = [{
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

    function Me(ee) {
      return be.find((ie => ie.exactMatch ? ee === ie.name : ee.includes(ie.name)))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);