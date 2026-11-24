export const id = 241;
export const ids = [241];
export const modules = {
  38124: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      h: () => hm,
      k: () => wm,
      o: () => Am,
      p: () => xm,
      q: () => am
    });
    const hm = 1.001,
      Am = .501,
      am = .025,
      xm = .75,
      wm = .08,
      Dm = 4;

    function im() {
      const mm = Am,
        Tm = am,
        fm = mm - Tm / 2,
        hm = (2 * mm - 2 * Tm) / (2 * Dm - 1),
        xm = [];
      for (const Am of [-fm, fm])
        for (const am of [-fm, fm])
          for (let fm = 0; fm < Dm; fm++) {
            const wm = -mm + Tm + hm * (2 * fm + .5);
            xm.push([hm, Tm, Tm, wm, Am, am]), xm.push([Tm, hm, Tm, Am, wm, am]), xm.push([Tm, Tm, hm, Am, am, wm])
          }
      for (const Am of [-fm, fm])
        for (const mm of [-fm, fm])
          for (const hm of [-fm, fm]) xm.push([Tm, Tm, Tm, Am, mm, hm]);
      return xm
    }
  },
  38521: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => nm,
      B: () => cm,
      C: () => Qm,
      E: () => Km,
      F: () => Em,
      I: () => Ym,
      L: () => jm,
      P: () => Am,
      e: () => Rm,
      g: () => Dm,
      h: () => Im,
      i: () => im,
      m: () => wm,
      o: () => xm,
      s: () => am,
      w: () => Jm,
      x: () => om
    });
    var hm = fm(9231);

    function Am(mm) {
      return Math.floor(mm).toLocaleString("en-US")
    }
    const am = 2e3,
      xm = .005,
      wm = .001,
      Dm = 2,
      im = "Fluid Tank",
      Rm = "Coolant Mixer",
      pm = 144;

    function Em(mm) {
      const Tm = mm.split("|")[0];
      return (0, hm.k)(Tm) ? Tm === hm.c ? "cryo" : "water" : null
    }
    const om = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      Om = 63;

    function Ym(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const fm = Tm ? function(mm, Tm, fm) {
        const hm = om.findIndex((hm => {
          let [Am, am, xm] = hm;
          return Am === mm && am === Tm && xm === fm
        }));
        return hm < 0 ? 0 : 1 << hm
      }(Tm[0], Tm[1], Tm[2]) : 0;
      return "maker" === mm ? {
        kind: mm,
        faces: fm
      } : "user" === mm ? {
        kind: mm,
        faces: Om & ~fm
      } : {
        kind: mm,
        faces: Om
      }
    }

    function qm(mm) {
      return "pipe" === mm || "tank" === mm || "maker" === mm
    }

    function jm(mm, Tm, fm) {
      return 0 !== (mm.faces & 1 << fm) && 0 !== (Tm.faces & 1 << (1 ^ fm)) && (qm(mm.kind) || qm(Tm.kind))
    }
    const Vm = (mm, Tm, fm, hm) => ({
        input: mm,
        inputAmount: hm,
        output: Tm,
        outputAmount: fm
      }),
      Im = {
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
          recipes: [Vm("Uranium Grit", "Uranium Pellet", 1, 12), Vm("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [Vm("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: pm,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function Km(mm, Tm) {
      return 1e3 * (null !== Tm && void 0 !== Tm ? Tm : 0) / mm.opMs
    }

    function Qm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const fm = Km(Im["Coolant Mixer"], pm) * Tm;
      return mm <= 0 ? 0 : Math.ceil(mm / fm - 1e-9)
    }
    const nm = "baf2Water",
      Jm = "baf2waterclose",
      cm = "baf2wateropen"
  },
  38509: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Gm,
      i: () => Xm
    });
    var hm = fm(9141),
      Am = fm(9167);
    const am = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0],
      [0, -1, 0]
    ];
    var xm = fm(9193),
      wm = fm(38308),
      Dm = fm(9184);
    const im = {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 0]
    };

    function Rm(mm) {
      let [Tm, fm] = mm;
      return [-fm, Tm]
    }

    function pm(mm, Tm) {
      return mm[0] === Tm[0] && mm[1] === Tm[1]
    }

    function Em(mm, Tm) {
      return mm[0] * Tm[0] + mm[1] * Tm[1] === 0
    }
    const om = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    var Om = fm(9222);

    function Ym(mm, Tm, fm, hm, Am) {
      return Tm < Om.k || Tm >= Om.k + Om.o || Math.floor(mm / Om.r) === Math.floor(hm / Om.r) && Math.floor(fm / Om.r) === Math.floor(Am / Om.r)
    }
    const qm = "Splitter",
      jm = "Sorting Gate",
      Vm = new Set(Om.F),
      Im = new Set([...Om.F, "Belt Loader", "Fast Loader", jm]),
      Km = new Set(Om.q),
      Qm = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 0, 1],
        [0, 0, -1],
        [0, 1, 0],
        [0, -1, 0]
      ];

    function nm(mm) {
      var Tm, fm;
      return null !== (Tm = null === (fm = hm.i[mm]) || void 0 === fm ? void 0 : fm.meta.rootName) && void 0 !== Tm ? Tm : ""
    }

    function Jm(mm) {
      return nm(mm) === Om.e && (0, Om.M)(hm.i[mm].name)
    }
    var cm = fm(9176),
      zm = fm(9208);
    const Zm = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function km(mm) {
      var Tm, fm;
      const Am = null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta;
      return (null === Am || void 0 === Am ? void 0 : Am.rootName) !== zm.o ? null : {
        rot: null !== (fm = Am.rot) && void 0 !== fm ? fm : 1,
        half: (0, zm.g)(Am.rootName, Am.metaStr)
      }
    }

    function bm(mm, Tm, fm, hm) {
      return km(mm(Tm, fm, hm))
    }

    function Sm(mm, Tm, fm, hm, Am) {
      let {
        rot: am,
        half: xm
      } = Am;
      const [wm, Dm] = (0, zm.k)(am, xm), im = bm(mm, Tm + wm, fm, hm + Dm);
      return null !== im && im.rot === am && im.half === zm.q[xm]
    }
    var em = fm(38518);
    const Nm = [new class {
      constructor() {
        this.reshapeOffsets = om
      }
      handles(mm) {
        var Tm;
        return "Stairs" === (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.model)
      }
      affects(mm) {
        return this.handles(mm)
      }
      shape(mm, Tm, fm, Am, am) {
        const xm = this.stairsOf(am),
          wm = this.cornerAt(mm, Tm, fm, Am, xm),
          im = xm.half === Dm.e.top ? "top" : "bot";
        return (0, hm.k)(`${hm.i[am].meta.rootName}|meta|rot${xm.rot}|${im}${null===wm?"":`|${wm}`}`)
      }
      stairsOf(mm) {
        const {
          rot: Tm,
          halfblockPlacement: fm
        } = hm.i[mm].meta;
        return {
          rot: Tm,
          half: fm
        }
      }
      stairsAt(mm, Tm, fm, hm) {
        const Am = mm(Tm, fm, hm);
        return this.handles(Am) ? this.stairsOf(Am) : null
      }
      cornerAt(mm, Tm, fm, hm, Am) {
        let {
          rot: am,
          half: xm
        } = Am;
        const wm = im[am],
          Dm = Am => {
            let [wm, Dm] = Am;
            const im = this.stairsAt(mm, Tm + wm, fm, hm + Dm);
            return null !== im && im.rot === am && im.half === xm
          },
          om = this.stairsAt(mm, Tm + wm[0], fm, hm + wm[1]);
        if (null !== om && om.half === xm) {
          const mm = im[om.rot];
          if (Em(wm, mm) && !Dm([-mm[0], -mm[1]])) return pm(mm, Rm(wm)) ? "outerLeft" : "outerRight"
        }
        const Om = this.stairsAt(mm, Tm - wm[0], fm, hm - wm[1]);
        if (null !== Om && Om.half === xm) {
          const mm = im[Om.rot];
          if (Em(wm, mm) && !Dm(mm)) return pm(mm, Rm(wm)) ? "innerLeft" : "innerRight"
        }
        return null
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = am, this.rootIds = new Set(Am.h.map((mm => (0, hm.k)(mm))))
      }
      handles(mm) {
        var Tm;
        const fm = null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta;
        return void 0 !== fm && this.rootIds.has(fm.rootId)
      }
      affects(mm) {
        return this.handles(mm)
      }
      placedBy(mm) {
        return hm.i[mm].meta.rootName === Am.n ? null : Am.n
      }
      shape(mm, Tm, fm, am, xm) {
        const {
          rootId: wm,
          rootName: Dm,
          rot: im
        } = hm.i[xm].meta;
        let Rm = 0;
        return Am.t[im].forEach(((Am, xm) => {
          var Dm;
          let [pm, Em, om] = Am;
          const Om = null === (Dm = hm.i[mm(Tm + pm, fm + Em, am + om)]) || void 0 === Dm ? void 0 : Dm.meta;
          (null === Om || void 0 === Om ? void 0 : Om.rootId) === wm && Om.rot === im && (Rm |= 1 << xm)
        })), (0, hm.k)((0, Am.f)(Dm, im, Rm))
      }
    }, ...xm.d.map((mm => new wm.b(mm))), new class {
      constructor() {
        this.reshapeOffsets = Qm
      }
      handles(mm) {
        const Tm = nm(mm);
        return Vm.has(Tm) || Tm === Om.e
      }
      affects(mm) {
        const Tm = nm(mm);
        return Im.has(Tm) || Km.has(Tm) || Tm === qm || Tm === Om.e || void 0 !== Om.c[Tm]
      }
      shape(mm, Tm, fm, Am, am, xm) {
        const {
          rootName: wm,
          rot: Dm
        } = hm.i[am].meta;
        return wm === Om.e ? xm ? am : function(mm, Tm, fm, Am, am) {
          const [xm, wm] = Om.d[am - 1];
          for (let Dm = 1; Dm <= Om.C; Dm++) {
            const [im, Rm] = [Tm - xm * Dm, Am - wm * Dm], pm = mm(im, fm, Rm);
            if (nm(pm) === Om.e && hm.i[pm].meta.rot === am && Ym(Tm, fm, Am, im, Rm)) return (0, hm.k)((0, Om.Q)(am, !Jm(pm)))
          }
          return (0, hm.k)((0, Om.Q)(am, !1))
        }(mm, Tm, fm, Am, Dm) : (0, hm.k)((0, Om.I)(wm, Dm, function(mm, Tm, fm, Am, am) {
          const [xm, wm] = Om.d[am - 1], Dm = (am, xm) => function(mm, Tm, fm) {
            var Am;
            const am = null === (Am = hm.i[mm]) || void 0 === Am ? void 0 : Am.meta;
            if (!am) return !1;
            const xm = am.rootName,
              wm = Im.has(xm) || Jm(mm);
            if (!wm && !Km.has(xm) && xm !== qm) return !1;
            const [Dm, im] = Om.d[am.rot - 1];
            if (wm && Dm === -Tm && im === -fm) return !0;
            if (Km.has(xm)) return Dm === Tm && im === fm;
            const Rm = hm.i[mm].name;
            return (xm === qm ? (0, Om.O)(Rm, Dm, im) : xm === jm ? [(0, Om.J)(Rm, Dm, im)] : []).some((mm => {
              let [hm, Am] = mm;
              return hm === -Tm && Am === -fm
            }))
          }(mm(Tm + am, fm, Am + xm), am, xm), im = mm(Tm - xm, fm, Am - wm), Rm = nm(im) === qm && hm.i[im].meta.rot === am, pm = 1 === Om.c[nm(mm(Tm, fm - 1, Am))] || -1 === Om.c[nm(mm(Tm, fm + 1, Am))];
          if (pm || Rm || Dm(-xm, -wm)) return null;
          const Em = Dm(-wm, xm),
            om = Dm(wm, -xm);
          if (Em === om) return null;
          return Em ? "turnLeft" : "turnRight"
        }(mm, Tm, fm, Am, Dm)))
      }
    }, new class {
      constructor() {
        this.reshapeOffsets = Zm, this.rootId = (0, hm.k)(zm.o)
      }
      handles(mm) {
        var Tm;
        return (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta.rootId) === this.rootId
      }
      affects(mm) {
        return this.handles(mm)
      }
      shape(mm, Tm, fm, Am, am, xm) {
        const wm = km(am);
        return (0, hm.k)((Dm = wm.rot, null !== (im = xm ? this.reshapedHalf(mm, Tm, fm, Am, wm) : this.placedHalf(mm, Tm, fm, Am, wm.rot)) ? (0, zm.d)(zm.o, Dm, im) : 1 === Dm ? zm.o : `${zm.o}|meta|rot${Dm}`));
        var Dm, im
      }
      placedHalf(mm, Tm, fm, hm, Am) {
        const [am, xm] = cm.c[Am];
        for (const [wm, Dm] of [
            ["right", 1],
            ["left", -1]
          ]) {
          const im = Tm + Dm * am,
            Rm = hm + Dm * xm,
            pm = bm(mm, im, fm, Rm);
          if (null !== pm && pm.rot === Am && (null === pm.half || !Sm(mm, im, fm, Rm, pm))) return wm
        }
        return null
      }
      reshapedHalf(mm, Tm, fm, hm, Am) {
        if (null !== Am.half && Sm(mm, Tm, fm, hm, Am)) return Am.half;
        for (const am of ["right", "left"]) {
          const [xm, wm] = (0, zm.k)(Am.rot, am), Dm = bm(mm, Tm + xm, fm, hm + wm);
          if (null !== Dm && Dm.rot === Am.rot && Dm.half === zm.q[am]) return am
        }
        return null
      }
    }, new em.d];

    function Gm(mm, Tm, fm, hm, Am) {
      let am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      for (const xm of Nm)
        if (xm.handles(Am)) return xm.shape(mm, Tm, fm, hm, Am, am);
      return Am
    }

    function Xm(mm) {
      for (const hm of Nm) {
        var Tm, fm;
        if (hm.handles(mm)) return null !== (Tm = null === (fm = hm.placedBy) || void 0 === fm ? void 0 : fm.call(hm, mm)) && void 0 !== Tm ? Tm : null
      }
      return null
    }
  },
  38518: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => zm,
      f: () => Km,
      i: () => Im
    });
    var hm = fm(9141),
      Am = fm(9159),
      am = fm(9231),
      xm = fm(38521),
      wm = fm(9222);
    const Dm = (0, xm.I)("pipe"),
      im = (0, xm.I)("tank"),
      Rm = (0, xm.I)("port"),
      pm = "Reactor Port";

    function Em(mm, Tm, fm) {
      const hm = new Set([am.e, am.c, pm, ...Tm, ...fm, ...mm ? [xm.i] : []]);
      return {
        makers: new Set(Tm),
        roots: hm
      }
    }
    const om = {
        water: Em(!0, ["Condenser"], ["Centrifuge", "Synthesizer", xm.e]),
        cryo: Em(!1, [xm.e], [])
      },
      Om = new Set([...om.water.roots, ...om.cryo.roots]),
      Ym = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      qm = Am.f.map((mm => Ym[mm])),
      jm = qm.map((mm => {
        let [Tm, fm, hm] = mm;
        return xm.x.findIndex((mm => {
          let [Am, am, xm] = mm;
          return Am === Tm && am === fm && xm === hm
        }))
      }));

    function Vm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const fm = hm.i[mm],
        Am = null === fm || void 0 === fm ? void 0 : fm.meta.rootName,
        Em = om[Tm];
      if (!Am || !Em.roots.has(Am)) return null;
      if ((0, am.k)(Am)) return (0, xm.F)(fm.name) === Tm ? Dm : null;
      if (Am === xm.i) return im;
      if (Am === pm) return fm.name.endsWith("|Water") ? Rm : null;
      const [Om, Ym] = wm.d[(fm.meta.rot || 1) - 1];
      return (0, xm.I)(Em.makers.has(Am) ? "maker" : "user", [-Om, 0, -Ym])
    }

    function Im(mm, Tm, fm, Am) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: wm
      } = om[am];
      return qm.some(((im, Rm) => {
        var pm, Em;
        let [om, Om, Ym] = im;
        const qm = mm(Tm + om, fm + Om, Am + Ym),
          Im = Vm(qm, am);
        return null !== Im && wm.has(null !== (pm = null === (Em = hm.i[qm]) || void 0 === Em ? void 0 : Em.meta.rootName) && void 0 !== pm ? pm : "") && !(0, xm.L)(Dm, Im, jm[Rm])
      }))
    }

    function Km(mm) {
      const Tm = hm.i[mm];
      return Tm ? (0, xm.F)(Tm.name) : null
    }
    let Qm = null;

    function nm(mm) {
      if (!Qm) {
        Qm = new Map;
        for (const mm of ["water", "cryo"])
          for (let Tm = 0; Tm < 64; Tm++)
            for (const fm of [!1, !0]) Qm.set((0, am.l)(mm, Tm, fm), {
              Qo: mm,
              mask: Tm,
              full: fm
            })
      }
      return Qm.get(mm)
    }
    const Jm = new Map(Array.from({
      length: am.g + 1
    }, ((mm, Tm) => [(0, am.o)(Tm), Tm])));

    function cm(mm, Tm, fm, Am, am, xm) {
      return qm.some(((wm, Dm) => {
        var im, Rm, pm;
        let [Em, om, Om] = wm;
        if (0 === (xm >> Dm & 1)) return !1;
        const Ym = null !== (im = null === (Rm = hm.i[mm(Tm + Em, fm + om, Am + Om)]) || void 0 === Rm ? void 0 : Rm.name) && void 0 !== im ? im : "",
          qm = nm(Ym);
        return qm ? qm.Qo === am && qm.full : (null !== (pm = function(mm) {
          var Tm;
          return null !== (Tm = Jm.get(mm)) && void 0 !== Tm ? Tm : null
        }(Ym)) && void 0 !== pm ? pm : 0) > 0
      }))
    }
    class zm {
      constructor() {
        this.reshapeOffsets = qm
      }
      handles(mm) {
        return null !== Km(mm)
      }
      affects(mm) {
        var Tm, fm;
        return Om.has(null !== (Tm = null === (fm = hm.i[mm]) || void 0 === fm ? void 0 : fm.meta.rootName) && void 0 !== Tm ? Tm : "")
      }
      placedBy(mm) {
        var Tm;
        return (null === (Tm = hm.i[mm]) || void 0 === Tm ? void 0 : Tm.meta.rootName) === am.c ? am.e : null
      }
      shape(mm, Tm, fm, Am, wm, im) {
        var Rm, pm, Em;
        const om = null !== (Rm = null === (pm = hm.i[wm]) || void 0 === pm ? void 0 : pm.name) && void 0 !== Rm ? Rm : "",
          Om = im || om !== am.e ? null !== (Em = (0, xm.F)(om)) && void 0 !== Em ? Em : "water" : function(mm, Tm, fm, hm) {
            return qm.some(((Am, am) => {
              let [wm, im, Rm] = Am;
              const pm = Vm(mm(Tm + wm, fm + im, hm + Rm), "cryo");
              return null !== pm && "port" !== pm.kind && (0, xm.L)(Dm, pm, jm[am])
            })) ? "cryo" : "water"
          }(mm, Tm, fm, Am),
          Ym = function(mm, Tm, fm, hm) {
            let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              am = 0;
            return qm.forEach(((wm, im) => {
              let [Rm, pm, Em] = wm;
              const om = Vm(mm(Tm + Rm, fm + pm, hm + Em), Am);
              om && (0, xm.L)(Dm, om, jm[im]) && (am |= 1 << im)
            })), am
          }(mm, Tm, fm, Am, Om),
          Im = im ? function(mm) {
            var Tm;
            return !0 === (null === (Tm = nm(mm)) || void 0 === Tm ? void 0 : Tm.full)
          }(om) : cm(mm, Tm, fm, Am, Om, Ym);
        return (0, hm.k)((0, am.l)(Om, Ym, Im))
      }
    }
  },
  38254: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      g: () => am
    });
    const hm = ["Chest", "Loot Chest", "Moonstone Chest"],
      Am = [{
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

    function am(mm) {
      return Am.find((Tm => Tm.exactMatch ? mm === Tm.name : mm.includes(Tm.name)))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);