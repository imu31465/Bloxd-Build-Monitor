export const id = 247;
export const ids = [247];
export const modules = {
  41102: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      f: () => xm
    });
    var hm = fm(1919);
    let Am = !1;

    function am() {
      Am = !0
    }

    function xm() {
      Am && (Am = !1, (0, hm.d)())
    }
  },
  41094: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      h: () => am,
      l: () => wm
    });
    var hm = fm(40663),
      Am = fm(40669);

    function am(mm) {
      if (mm.queries.drawCensus() < hm.Hb.BYTES) return null;
      const Tm = mm.memoryData(mm.scratch(), hm.Hb.BYTES, 4, "the draw census");
      return null === Tm ? null : {
        terrainOpaque: hm.Hb.terrainOpaque(Tm, 0),
        terrainTransparent: hm.Hb.terrainTransparent(Tm, 0),
        terrainPack: hm.Hb.terrainPack(Tm, 0),
        earthSky: hm.Hb.earthSky(Tm, 0),
        skyMeshes: hm.Hb.skyMeshes(Tm, 0),
        regular: hm.Hb.regular(Tm, 0),
        thin: hm.Hb.thin(Tm, 0),
        line: hm.Hb.line(Tm, 0),
        text: hm.Hb.text(Tm, 0),
        particles: hm.Hb.particles(Tm, 0),
        terrainParts: hm.Hb.terrainParts(Tm, 0),
        terrainCompiling: hm.Hb.terrainCompiling(Tm, 0),
        ringCopiesMax: hm.Hb.ringCopiesMax(Tm, 0),
        ringBusyWrites: hm.Hb.ringBusyWrites(Tm, 0)
      }
    }

    function xm(mm) {
      const {
        terrainOpaque: Tm,
        terrainTransparent: fm,
        earthSky: hm,
        skyMeshes: Am,
        regular: am,
        thin: xm,
        line: wm,
        text: Dm,
        particles: im
      } = mm;
      return Tm + fm + hm + Am + am + xm + wm + Dm + im
    }

    function wm() {
      const mm = (0, Am.i)();
      return !0 === (null === mm || void 0 === mm ? void 0 : mm.isCoreRunning) ? function(mm) {
        const Tm = am(mm);
        if (null === Tm) return [];
        const {
          terrainOpaque: fm,
          terrainTransparent: hm,
          terrainPack: Am,
          earthSky: wm,
          skyMeshes: Dm,
          regular: im,
          thin: Rm,
          line: pm,
          text: Em,
          particles: om
        } = Tm;
        return [{
          label: "Drawn",
          value: `${xm(Tm)}`
        }, {
          label: "Terrain",
          value: `${fm} opaque / ${hm} transparent (${Am} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${im} / ${Rm}`
        }, {
          label: "Text / Lines",
          value: `${Em} / ${pm}`
        }, {
          label: "Sky / Particles",
          value: `${wm+Dm} / ${om}`
        }]
      }(mm.api) : []
    }
  },
  41079: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Om,
      e: () => Em,
      f: () => om
    });
    var hm = fm(1921),
      Am = fm(1290),
      am = fm(40669),
      xm = fm(40684),
      wm = fm(40692),
      Dm = fm(40709);
    const im = new Am.d;
    let Rm = !1;

    function pm(mm) {
      const Tm = (0, am.i)();
      return null !== Tm && +mm === Tm.api.localId
    }

    function Em() {
      Rm || (Rm = !0, (0, Dm.g)(xm.o, (mm => {
        var Tm, fm;
        const hm = (0, wm.f)(xm.o, mm);
        if (!(0, wm.b)(hm)) return;
        const Am = hm;
        pm(Am.Kh) && om(Am.Qh, {
          icon: Am.eA,
          level: Am.XA,
          displayName: null !== (Tm = Am.nh) && void 0 !== Tm ? Tm : null,
          durationMs: null !== (fm = Am.NA) && void 0 !== fm ? fm : null
        })
      })), (0, Dm.g)(xm.S, (mm => {
        const Tm = (0, wm.f)(xm.S, mm);
        if (!(0, wm.b)(Tm)) return;
        const fm = Tm;
        pm(fm.Kh) && hm.b.remove(fm.Qh)
      })), (0, Dm.c)((() => {
        hm.b.clear()
      })))
    }

    function om(mm, Tm) {
      hm.b.update(mm, Tm), im.forEach((Tm => {
        Tm(mm)
      }))
    }
    const Om = {
      localEffectUpdated: {
        watch: mm => im.add(mm)
      }
    }
  },
  41084: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm
    });
    var hm = fm(4741),
      Am = fm(4732),
      am = fm(40695),
      xm = fm(40709);
    const wm = new Set(hm.N),
      Dm = hm.N.map((mm => (new TextEncoder).encode(mm))),
      im = new Map;

    function Rm(mm, Tm) {
      var fm;
      return null === (fm = im.get(mm)) || void 0 === fm ? void 0 : fm[Tm]
    }(0, xm.g)(hm.gc.NewOtherEntitySettings, (mm => {
      mm.payloadKind === Am.gc.Msgpack && Dm.some((Tm => function(mm, Tm) {
        const fm = Tm[0];
        for (let hm = mm.indexOf(fm); - 1 !== hm && hm + Tm.length <= mm.length; hm = mm.indexOf(fm, hm + 1)) {
          let fm = 1;
          for (; fm < Tm.length && mm[hm + fm] === Tm[fm];) fm++;
          if (fm === Tm.length) return !0
        }
        return !1
      }(mm.payload, Tm))) && function(mm) {
        if (null === mm || "object" !== typeof mm || null === mm.settings || "object" !== typeof mm.settings) return;
        const Tm = String(mm.eId),
          fm = mm.settings;
        let hm = im.get(Tm);
        for (const Am in fm) {
          if (!wm.has(Am)) continue;
          const mm = fm[Am];
          null === mm || void 0 === mm ? hm && delete hm[Am] : (hm ??= {}, hm[Am] = mm)
        }
        hm && im.set(Tm, hm)
      }((0, am.e)(mm.payload))
    })), (0, xm.c)((() => {
      im.clear()
    }))
  },
  41073: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      f: () => im,
      h: () => pm
    });
    var hm = fm(39121),
      Am = fm(1912),
      am = fm(1290),
      xm = fm(40684),
      wm = fm(40692),
      Dm = fm(40709);
    const im = new hm.b;
    let Rm = {};

    function pm(mm) {
      return Rm[mm]
    }
    const Em = new am.d;

    function om(mm) {
      return Em.add(mm)
    }

    function Om(mm) {
      Em.callEach(mm, "a roster listener")
    }(0, Dm.g)(xm.ab, (mm => {
      const Tm = (0, wm.f)(xm.ab, mm);
      if (void 0 === Tm) return;
      const fm = Tm.fh.some((mm => {
          let {
            hh: Tm,
            Ah: fm
          } = mm;
          return null !== fm && im.has(Tm) && im.getName(Tm) !== fm
        })),
        {
          added: hm,
          removed: am,
          settingChanges: Dm
        } = im.apply(Tm),
        Rm = new Set;
      for (const Am of Dm)
        for (const mm in Am.settings) Rm.add(mm);
      const pm = fm || hm.length > 0 || am.length > 0;
      (pm || Rm.has("hideNameSeed")) && function() {
        const mm = new Map;
        for (const Tm of im.ids()) {
          const fm = im.getName(Tm),
            hm = im.getSetting(Tm, "hideNameSeed");
          void 0 !== fm && void 0 !== hm && null !== hm && mm.set(fm, hm)
        }
        Am.e.replaceAll(mm)
      }(), Om({
        kind: "roster",
        members: pm,
        settings: Rm
      })
    })), (0, Dm.g)(xm.R, (mm => {
      const Tm = (0, wm.f)(xm.R, mm);
      if (void 0 !== Tm) {
        for (const {
            bh: mm,
            Sh: fm,
            eh: hm
          }
          of Tm) Rm[mm] = {
          ...Rm[mm],
          [fm]: hm
        };
        Om({
          kind: "cosmetics",
          updates: Tm
        })
      }
    })), (0, Dm.c)((() => {
      im.clear(), Rm = {}, Am.e.clear(), Om({
        kind: "reset"
      })
    })), (0, Dm.e)((() => {
      im.clear(), Om({
        kind: "reset"
      })
    }))
  },
  41088: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => km,
      e: () => qm,
      g: () => Nm,
      k: () => Gm
    });
    var hm = fm(1270),
      Am = fm(645),
      am = fm(105),
      xm = fm(4741),
      wm = fm(40663),
      Dm = fm(40681),
      im = fm(40669),
      Rm = fm(41084),
      pm = fm(41073),
      Em = fm(40692),
      om = fm(40709);

    function Om(mm) {
      let {
        deadEId: Tm,
        killerEId: fm,
        killerLifeformType: hm,
        withItem: Am,
        killstreak: am
      } = mm;
      return {
        killer: Km({
          eId: fm,
          lifeformType: hm
        }),
        victim: Km({
          eId: Tm
        }),
        withItem: Am,
        killstreak: am
      }
    }

    function Ym(mm) {
      let {
        killer: Tm,
        victim: fm,
        withItem: hm
      } = mm;
      return {
        killer: Km(Tm),
        victim: Km(fm),
        withItem: hm,
        killstreak: 0
      }
    }

    function qm(mm) {
      cm && Zm((() => "killed" === mm.kind ? Om(mm.body) : Ym(mm.body)))
    }
    const jm = "#2727f1",
      Vm = "#912c2c";

    function Im(mm, Tm) {
      var fm;
      return pm.f.has(mm) ? null === (fm = pm.f.getSettings(mm)) || void 0 === fm ? void 0 : fm[Tm] : (0, Rm.e)(mm, Tm)
    }

    function Km(mm) {
      var Tm, fm, xm, wm, Rm;
      let {
        eId: Em,
        name: om,
        colour: Om,
        lifeformType: Ym
      } = mm;
      if (void 0 === Em || null === Em || "" === Em) {
        const mm = om || null;
        return {
          id: null,
          shownName: mm,
          lifeformType: null === mm && null !== Ym && void 0 !== Ym ? Ym : null,
          colour: Om || null,
          local: !1,
          realName: null
        }
      }
      const qm = String(Em),
        Km = null === (Tm = (0, im.i)()) || void 0 === Tm ? void 0 : Tm.api,
        Qm = void 0 !== Km && String(Km.localId) === qm,
        nm = null !== (fm = pm.f.getName(qm)) && void 0 !== fm ? fm : null,
        Jm = null !== (xm = Im(qm, "hideNameSeed")) && void 0 !== xm ? xm : null;
      let cm = null === nm ? null : (0, hm.e)(nm, !am.featureFlags.canSeeRealPlayerNames, Jm) || null,
        zm = null;
      if (null === cm && void 0 !== Km) {
        const mm = Km.getEntityType(qm);
        "Player" !== mm && (cm = (0, Dm.k)(Km, +qm) || null), zm = Am.n.includes(mm) ? mm : null
      }
      return {
        id: qm,
        shownName: cm,
        lifeformType: null === cm && null !== (wm = null !== (Rm = zm) && void 0 !== Rm ? Rm : Ym) && void 0 !== wm ? wm : null,
        colour: Om || Im(qm, "killfeedColour") || (Qm ? jm : Vm),
        local: Qm,
        realName: nm
      }
    }
    const Qm = 32;
    let nm = [],
      Jm = null,
      cm = !1,
      zm = !1;

    function Zm(mm) {
      null === Jm ? (nm.length === Qm && nm.shift(), nm.push(mm)) : Jm(mm())
    }

    function km() {
      zm || (zm = !0, (0, om.g)(xm.gc.PlayerKilled, (mm => {
        const Tm = (0, Em.j)(mm);
        (0, Em.b)(Tm) && Zm((() => Om(Tm)))
      })), (0, om.g)(xm.gc.CustomKillfeed, (mm => {
        const Tm = (0, Em.j)(mm);
        (0, Em.b)(Tm) && (0, Em.b)(Tm.killer) && (0, Em.b)(Tm.victim) && Zm((() => Ym(Tm)))
      })), (0, om.c)((() => {
        nm = []
      })))
    }
    const bm = Object.freeze([0, 0, 0]),
      Sm = [0, 0, 0],
      em = [0, 0, 0],
      Nm = {
        kill: {
          watch(mm) {
            if (cm = !0, 0 === nm.length) return Jm = mm, () => {
              cm = !1, Jm = null
            };
            const Tm = setTimeout((() => {
              const Tm = nm;
              nm = [], Jm = mm;
              for (const hm of Tm) try {
                mm(hm())
              } catch (fm) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", fm)
              }
            }), 0);
            return () => {
              clearTimeout(Tm), cm = !1, Jm = null
            }
          }
        }
      },
      Gm = {
        localPos() {
          const mm = (0, im.i)();
          if (null === mm) return bm;
          const Tm = mm.api.apiView;
          for (let fm = 0; fm < 3; fm++) Sm[fm] = wm.x.localPos(Tm, 0, fm);
          return Sm
        },
        targetedBlockPos() {
          const mm = (0, im.i)();
          if (null === mm || wm.x.targetBlockId(mm.api.apiView, 0) === wm.md) return null;
          for (let Tm = 0; Tm < 3; Tm++) em[Tm] = wm.x.targetBlock(mm.api.apiView, 0, Tm);
          return em
        }
      }
  },
  39121: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor() {
        this.members = new Map
      }
      apply(mm) {
        const Tm = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const hm of mm.fh) {
          let mm = this.members.get(hm.hh);
          if (mm || (mm = {
              name: null,
              settings: {}
            }, this.members.set(hm.hh, mm), Tm.added.push(hm.hh)), null !== hm.Ah && (mm.name = hm.Ah), null !== hm.ah || hm.xh.length > 0) {
            const fm = null === hm.ah ? {} : JSON.parse(hm.ah);
            Object.assign(mm.settings, fm);
            for (const Tm of hm.xh) delete mm.settings[Tm], fm[Tm] = void 0;
            Tm.settingChanges.push({
              playerId: hm.hh,
              settings: fm
            })
          }
        }
        for (const hm of mm.Dh) {
          const mm = this.members.get(hm);
          var fm;
          if (mm) this.members.delete(hm), Tm.removed.push({
            playerId: hm,
            name: null !== (fm = mm.name) && void 0 !== fm ? fm : void 0
          })
        }
        return Tm
      }
      has(mm) {
        return this.members.has(mm)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(mm) {
        var Tm, fm;
        return null !== (Tm = null === (fm = this.members.get(mm)) || void 0 === fm ? void 0 : fm.name) && void 0 !== Tm ? Tm : void 0
      }
      getSettings(mm) {
        var Tm;
        return null === (Tm = this.members.get(mm)) || void 0 === Tm ? void 0 : Tm.settings
      }
      getSetting(mm, Tm) {
        var fm;
        return null === (fm = this.members.get(mm)) || void 0 === fm ? void 0 : fm.settings[Tm]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);