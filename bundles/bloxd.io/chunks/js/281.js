export const id = 281;
export const ids = [281];
export const modules = {
  42714: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Vb
    });
    var eb = Mb(2150);
    let Hb = !1;

    function pb() {
      Hb = !0
    }

    function Vb() {
      Hb && (Hb = !1, (0, eb.d)())
    }
  },
  42561: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => yb,
      D: () => Jb,
      F: () => cb,
      I: () => Wb,
      M: () => Db,
      Q: () => ib,
      R: () => ab,
      T: () => Zb,
      b: () => ub,
      e: () => Nb,
      g: () => rb,
      j: () => db,
      k: () => Rb,
      m: () => Kb,
      p: () => Sb,
      t: () => Yb,
      x: () => Ab,
      y: () => fb
    });
    var eb = Mb(1549),
      Hb = Mb(29),
      pb = Mb(1373),
      Vb = Mb(3470),
      gb = Mb(5706),
      lb = Mb(5672);
    let Lb, Ib = !1,
      Ob = !1,
      Ub = !1,
      tb = !1;
    const Cb = 1300,
      Eb = 3e3;
    let Fb = 0,
      Bb = !1,
      sb = !1,
      mb = 0;
    const hb = 2;
    let zb = !1,
      Xb = !1;
    const xb = new Set,
      jb = new Set;

    function Kb() {
      return Ib
    }

    function rb() {
      return sb
    }

    function Rb() {
      return Xb
    }

    function Db() {
      return (0, pb.B)() && !Xb
    }

    function cb(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (bb !== Xb) {
        Xb = bb;
        for (const bb of [...jb]) bb(Xb);
        wb && ab()
      }
    }

    function Yb(bb) {
      return jb.add(bb), () => {
        jb.delete(bb)
      }
    }

    function Zb() {
      (0, gb.h)(Vb.y.Menu, (0, pb.B)() ? 0 : Vb.y.Menu)
    }

    function fb() {
      sb = !1, mb = 0, Zb(), ab()
    }

    function Ab(bb) {
      return xb.add(bb), () => {
        xb.delete(bb)
      }
    }

    function Wb(bb) {
      Ob = !1, bb !== Ib && (Ib = bb, tb = !1, clearTimeout(Lb), Ub = !Ib && zb, Ib ? (Bb = !1, sb = !1, mb = 0) : Db() && !zb && (sb = !0), zb = !1, Ib && !Db() && nb(), ob(), Ub && ab())
    }

    function Jb(bb) {
      bb !== Bb && (Bb = bb, bb || ab())
    }

    function Sb() {
      Ob = !1, tb || !0 !== Gb() || (tb = !0, clearTimeout(Lb), Lb = setTimeout(vb, Cb))
    }

    function Nb() {
      return (!Ob || performance.now() - Fb > Eb) && (Ob = (0, lb.O)().lockPointer(), Fb = performance.now()), Ob
    }

    function vb() {
      Qb() && qb() && Nb()
    }

    function Qb() {
      return Db() && !Ib && !Bb && !(0, eb.j)()
    }

    function Gb() {
      var bb;
      return "undefined" === typeof navigator || null === (bb = navigator.userActivation) || void 0 === bb ? void 0 : bb.isActive
    }

    function qb() {
      return Ub && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Gb()
    }

    function ab() {
      Db() ? Qb() && !sb && qb() && Nb() : Ib && !zb && nb()
    }

    function ib() {
      sb ? navigator.vendor.startsWith("Apple") ? Pb() : mb = hb : ab()
    }

    function ub() {
      mb > 0 && 0 === --mb && Pb()
    }

    function db() {
      mb = 0
    }

    function Pb() {
      Qb() && !0 === Gb() && Nb()
    }

    function nb() {
      zb = !0, (0, lb.O)().unlockPointer()
    }

    function yb() {
      Ob = !1, Ub = !1, tb = !1, clearTimeout(Lb), Bb = !1, sb = !1, mb = 0, zb = !1;
      const bb = Ib;
      Ib = !1, bb && ob()
    }

    function ob() {
      for (const bb of [...xb]) bb(Ib);
      Hb.k.iI("pointerLockUpdate", Ib)
    }
  },
  42535: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ub,
      e: () => gb,
      i: () => Ob,
      m: () => Lb,
      o: () => Vb,
      p: () => Ib,
      s: () => lb
    });
    let eb = null,
      Hb = null,
      pb = null;

    function Vb(bb) {
      eb = bb
    }

    function gb() {
      return eb
    }

    function lb(bb) {
      Hb = bb
    }

    function Lb() {
      return Hb
    }

    function Ib(bb) {
      pb = bb
    }

    function Ob() {
      return pb
    }

    function Ub() {
      var bb, wb;
      return !0 === (null === (bb = Hb) || void 0 === bb || null === (wb = bb.currentViewer) || void 0 === wb ? void 0 : wb.inPlayback)
    }
  },
  42705: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      d: () => pb,
      g: () => gb
    });
    var eb = Mb(42253),
      Hb = Mb(42263);

    function pb(bb) {
      if (bb.queries.drawCensus() < eb.tb.BYTES) return null;
      const wb = bb.memoryData(bb.scratch(), eb.tb.BYTES, 4, "the draw census");
      return null === wb ? null : {
        terrainOpaque: eb.tb.terrainOpaque(wb, 0),
        terrainTransparent: eb.tb.terrainTransparent(wb, 0),
        terrainPack: eb.tb.terrainPack(wb, 0),
        earthSky: eb.tb.earthSky(wb, 0),
        skyMeshes: eb.tb.skyMeshes(wb, 0),
        regular: eb.tb.regular(wb, 0),
        thin: eb.tb.thin(wb, 0),
        line: eb.tb.line(wb, 0),
        text: eb.tb.text(wb, 0),
        particles: eb.tb.particles(wb, 0),
        terrainParts: eb.tb.terrainParts(wb, 0),
        terrainCompiling: eb.tb.terrainCompiling(wb, 0),
        ringCopiesMax: eb.tb.ringCopiesMax(wb, 0),
        ringBusyWrites: eb.tb.ringBusyWrites(wb, 0)
      }
    }

    function Vb(bb) {
      const {
        terrainOpaque: wb,
        terrainTransparent: Mb,
        earthSky: eb,
        skyMeshes: Hb,
        regular: pb,
        thin: Vb,
        line: gb,
        text: lb,
        particles: Lb
      } = bb;
      return wb + Mb + eb + Hb + pb + Vb + gb + lb + Lb
    }

    function gb() {
      const bb = (0, Hb.m)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const wb = pb(bb);
        if (null === wb) return [];
        const {
          terrainOpaque: Mb,
          terrainTransparent: eb,
          terrainPack: Hb,
          earthSky: gb,
          skyMeshes: lb,
          regular: Lb,
          thin: Ib,
          line: Ob,
          text: Ub,
          particles: tb
        } = wb;
        return [{
          label: "Drawn",
          value: `${Vb(wb)}`
        }, {
          label: "Terrain",
          value: `${Mb} opaque / ${eb} transparent (${Hb} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Lb} / ${Ib}`
        }, {
          label: "Text / Lines",
          value: `${Ub} / ${Ob}`
        }, {
          label: "Sky / Particles",
          value: `${gb+lb} / ${tb}`
        }]
      }(bb.api) : []
    }
  },
  42688: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Cb,
      f: () => Ub,
      j: () => tb
    });
    var eb = Mb(2153),
      Hb = Mb(1382),
      pb = Mb(42263),
      Vb = Mb(42274),
      gb = Mb(42277),
      lb = Mb(42295);
    const Lb = new Hb.b;
    let Ib = !1;

    function Ob(bb) {
      const wb = (0, pb.m)();
      return null !== wb && +bb === wb.api.localId
    }

    function Ub() {
      Ib || (Ib = !0, (0, lb.m)(Vb.l, (bb => {
        var wb, Mb;
        const eb = (0, gb.d)(Vb.l, bb);
        if (!(0, gb.c)(eb)) return;
        const Hb = eb;
        Ob(Hb.bV) && tb(Hb.wV, {
          icon: Hb.eV,
          level: Hb.pV,
          displayName: null !== (wb = Hb.MV) && void 0 !== wb ? wb : null,
          durationMs: null !== (Mb = Hb.HV) && void 0 !== Mb ? Mb : null
        })
      })), (0, lb.m)(Vb.M, (bb => {
        const wb = (0, gb.d)(Vb.M, bb);
        if (!(0, gb.c)(wb)) return;
        const Mb = wb;
        Ob(Mb.bV) && eb.d.remove(Mb.wV)
      })), (0, lb.f)((() => {
        eb.d.clear()
      })))
    }

    function tb(bb, wb) {
      eb.d.update(bb, wb), Lb.forEach((wb => {
        wb(bb)
      }))
    }
    const Cb = {
      localEffectUpdated: {
        watch: bb => Lb.add(bb)
      }
    }
  },
  42691: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ib
    });
    var eb = Mb(5685),
      Hb = Mb(5678),
      pb = Mb(42284),
      Vb = Mb(42295);
    const gb = new Set(eb.Q),
      lb = eb.Q.map((bb => (new TextEncoder).encode(bb))),
      Lb = new Map;

    function Ib(bb, wb) {
      var Mb;
      return null === (Mb = Lb.get(bb)) || void 0 === Mb ? void 0 : Mb[wb]
    }(0, Vb.m)(eb.nc.NewOtherEntitySettings, (bb => {
      bb.payloadKind === Hb.hc.Msgpack && lb.some((wb => function(bb, wb) {
        const Mb = wb[0];
        for (let eb = bb.indexOf(Mb); - 1 !== eb && eb + wb.length <= bb.length; eb = bb.indexOf(Mb, eb + 1)) {
          let Mb = 1;
          for (; Mb < wb.length && bb[eb + Mb] === wb[Mb];) Mb++;
          if (Mb === wb.length) return !0
        }
        return !1
      }(bb.payload, wb))) && function(bb) {
        if (null === bb || "object" !== typeof bb || null === bb.settings || "object" !== typeof bb.settings) return;
        const wb = String(bb.eId),
          Mb = bb.settings;
        let eb = Lb.get(wb);
        for (const Hb in Mb) {
          if (!gb.has(Hb)) continue;
          const bb = Mb[Hb];
          null === bb || void 0 === bb ? eb && delete eb[Hb] : (eb ??= {}, eb[Hb] = bb)
        }
        eb && Lb.set(wb, eb)
      }((0, pb.d)(bb.payload))
    })), (0, Vb.f)((() => {
      Lb.clear()
    }))
  },
  42685: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => tb,
      f: () => Lb,
      h: () => Ob
    });
    var eb = Mb(40306),
      Hb = Mb(2146),
      pb = Mb(1382),
      Vb = Mb(42274),
      gb = Mb(42277),
      lb = Mb(42295);
    const Lb = new eb.c;
    let Ib = {};

    function Ob(bb) {
      return Ib[bb]
    }
    const Ub = new pb.b;

    function tb(bb) {
      return Ub.add(bb)
    }

    function Cb(bb) {
      Ub.callEach(bb, "a roster listener")
    }(0, lb.m)(Vb.W, (bb => {
      const wb = (0, gb.d)(Vb.W, bb);
      if (void 0 === wb) return;
      const Mb = wb.KH.some((bb => {
          let {
            rH: wb,
            RH: Mb
          } = bb;
          return null !== Mb && Lb.has(wb) && Lb.getName(wb) !== Mb
        })),
        {
          added: eb,
          removed: pb,
          settingChanges: lb
        } = Lb.apply(wb),
        Ib = new Set;
      for (const Hb of lb)
        for (const bb in Hb.settings) Ib.add(bb);
      const Ob = Mb || eb.length > 0 || pb.length > 0;
      (Ob || Ib.has("hideNameSeed")) && function() {
        const bb = new Map;
        for (const wb of Lb.ids()) {
          const Mb = Lb.getName(wb),
            eb = Lb.getSetting(wb, "hideNameSeed");
          void 0 !== Mb && void 0 !== eb && null !== eb && bb.set(Mb, eb)
        }
        Hb.d.replaceAll(bb)
      }(), Cb({
        kind: "roster",
        members: Ob,
        settings: Ib
      })
    })), (0, lb.m)(Vb.L, (bb => {
      const wb = (0, gb.d)(Vb.L, bb);
      if (void 0 !== wb) {
        for (const {
            VH: bb,
            gH: Mb,
            lH: eb
          }
          of wb) Ib[bb] = {
          ...Ib[bb],
          [Mb]: eb
        };
        Cb({
          kind: "cosmetics",
          updates: wb
        })
      }
    })), (0, lb.f)((() => {
      Lb.clear(), Ib = {}, Hb.d.clear(), Cb({
        kind: "reset"
      })
    })), (0, lb.i)((() => {
      Lb.clear(), Cb({
        kind: "reset"
      })
    }))
  },
  42699: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Rb,
      e: () => Fb,
      f: () => Zb,
      j: () => fb
    });
    var eb = Mb(1333),
      Hb = Mb(648),
      pb = Mb(110),
      Vb = Mb(5685),
      gb = Mb(42253),
      lb = Mb(42272),
      Lb = Mb(42263),
      Ib = Mb(42691),
      Ob = Mb(42685),
      Ub = Mb(42277),
      tb = Mb(42295);

    function Cb(bb) {
      let {
        deadEId: wb,
        killerEId: Mb,
        killerLifeformType: eb,
        withItem: Hb,
        killstreak: pb
      } = bb;
      return {
        killer: hb({
          eId: Mb,
          lifeformType: eb
        }),
        victim: hb({
          eId: wb
        }),
        withItem: Hb,
        killstreak: pb
      }
    }

    function Eb(bb) {
      let {
        killer: wb,
        victim: Mb,
        withItem: eb
      } = bb;
      return {
        killer: hb(wb),
        victim: hb(Mb),
        withItem: eb,
        killstreak: 0
      }
    }

    function Fb(bb) {
      jb && rb((() => "killed" === bb.kind ? Cb(bb.body) : Eb(bb.body)))
    }
    const Bb = "#2727f1",
      sb = "#912c2c";

    function mb(bb, wb) {
      var Mb;
      return Ob.f.has(bb) ? null === (Mb = Ob.f.getSettings(bb)) || void 0 === Mb ? void 0 : Mb[wb] : (0, Ib.e)(bb, wb)
    }

    function hb(bb) {
      var wb, Mb, Vb, gb, Ib;
      let {
        eId: Ub,
        name: tb,
        colour: Cb,
        lifeformType: Eb
      } = bb;
      if (void 0 === Ub || null === Ub || "" === Ub) {
        const bb = tb || null;
        return {
          id: null,
          shownName: bb,
          lifeformType: null === bb && null !== Eb && void 0 !== Eb ? Eb : null,
          colour: Cb || null,
          local: !1,
          realName: null
        }
      }
      const Fb = String(Ub),
        hb = null === (wb = (0, Lb.m)()) || void 0 === wb ? void 0 : wb.api,
        zb = void 0 !== hb && String(hb.localId) === Fb,
        Xb = null !== (Mb = Ob.f.getName(Fb)) && void 0 !== Mb ? Mb : null,
        xb = null !== (Vb = mb(Fb, "hideNameSeed")) && void 0 !== Vb ? Vb : null;
      let jb = null === Xb ? null : (0, eb.b)(Xb, !pb.featureFlags.canSeeRealPlayerNames, xb) || null,
        Kb = null;
      if (null === jb && void 0 !== hb) {
        const bb = hb.getEntityType(Fb);
        "Player" !== bb && (jb = (0, lb.l)(hb, +Fb) || null), Kb = Hb.j.includes(bb) ? bb : null
      }
      return {
        id: Fb,
        shownName: jb,
        lifeformType: null === jb && null !== (gb = null !== (Ib = Kb) && void 0 !== Ib ? Ib : Eb) && void 0 !== gb ? gb : null,
        colour: Cb || mb(Fb, "killfeedColour") || (zb ? Bb : sb),
        local: zb,
        realName: Xb
      }
    }
    const zb = 32;
    let Xb = [],
      xb = null,
      jb = !1,
      Kb = !1;

    function rb(bb) {
      null === xb ? (Xb.length === zb && Xb.shift(), Xb.push(bb)) : xb(bb())
    }

    function Rb() {
      Kb || (Kb = !0, (0, tb.m)(Vb.nc.PlayerKilled, (bb => {
        const wb = (0, Ub.g)(bb);
        (0, Ub.c)(wb) && rb((() => Cb(wb)))
      })), (0, tb.m)(Vb.nc.CustomKillfeed, (bb => {
        const wb = (0, Ub.g)(bb);
        (0, Ub.c)(wb) && (0, Ub.c)(wb.killer) && (0, Ub.c)(wb.victim) && rb((() => Eb(wb)))
      })), (0, tb.f)((() => {
        Xb = []
      })))
    }
    const Db = Object.freeze([0, 0, 0]),
      cb = [0, 0, 0],
      Yb = [0, 0, 0],
      Zb = {
        kill: {
          watch(bb) {
            if (jb = !0, 0 === Xb.length) return xb = bb, () => {
              jb = !1, xb = null
            };
            const wb = setTimeout((() => {
              const wb = Xb;
              Xb = [], xb = bb;
              for (const eb of wb) try {
                bb(eb())
              } catch (Mb) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Mb)
              }
            }), 0);
            return () => {
              clearTimeout(wb), jb = !1, xb = null
            }
          }
        }
      },
      fb = {
        localPos() {
          const bb = (0, Lb.m)();
          if (null === bb) return Db;
          const wb = bb.api.apiView;
          for (let Mb = 0; Mb < 3; Mb++) cb[Mb] = gb.q.localPos(wb, 0, Mb);
          return cb
        },
        targetedBlockPos() {
          const bb = (0, Lb.m)();
          if (null === bb || gb.q.targetBlockId(bb.api.apiView, 0) === gb.Tc) return null;
          for (let wb = 0; wb < 3; wb++) Yb[wb] = gb.q.targetBlock(bb.api.apiView, 0, wb);
          return Yb
        }
      }
  },
  40306: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const wb = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const eb of bb.KH) {
          let bb = this.members.get(eb.rH);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(eb.rH, bb), wb.added.push(eb.rH)), null !== eb.RH && (bb.name = eb.RH), null !== eb.DH || eb.cH.length > 0) {
            const Mb = null === eb.DH ? {} : JSON.parse(eb.DH);
            Object.assign(bb.settings, Mb);
            for (const wb of eb.cH) delete bb.settings[wb], Mb[wb] = void 0;
            wb.settingChanges.push({
              playerId: eb.rH,
              settings: Mb
            })
          }
        }
        for (const eb of bb.YH) {
          const bb = this.members.get(eb);
          var Mb;
          if (bb) this.members.delete(eb), wb.removed.push({
            playerId: eb,
            name: null !== (Mb = bb.name) && void 0 !== Mb ? Mb : void 0
          })
        }
        return wb
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var wb, Mb;
        return null !== (wb = null === (Mb = this.members.get(bb)) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== wb ? wb : void 0
      }
      getSettings(bb) {
        var wb;
        return null === (wb = this.members.get(bb)) || void 0 === wb ? void 0 : wb.settings
      }
      getSetting(bb, wb) {
        var Mb;
        return null === (Mb = this.members.get(bb)) || void 0 === Mb ? void 0 : Mb.settings[wb]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);