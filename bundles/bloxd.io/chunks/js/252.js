export const id = 252;
export const ids = [252];
export const modules = {
  41229: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      d: () => mt
    });
    var Ot = Vt(2034);
    let qt = !1;

    function Dt() {
      qt = !0
    }

    function mt() {
      qt && (qt = !1, (0, Ot.e)())
    }
  },
  41222: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      h: () => Dt,
      k: () => dt
    });
    var Ot = Vt(40761),
      qt = Vt(40769);

    function Dt(tt) {
      if (tt.queries.drawCensus() < Ot.Cb.BYTES) return null;
      const et = tt.memoryData(tt.scratch(), Ot.Cb.BYTES, 4, "the draw census");
      return null === et ? null : {
        terrainOpaque: Ot.Cb.terrainOpaque(et, 0),
        terrainTransparent: Ot.Cb.terrainTransparent(et, 0),
        terrainPack: Ot.Cb.terrainPack(et, 0),
        earthSky: Ot.Cb.earthSky(et, 0),
        skyMeshes: Ot.Cb.skyMeshes(et, 0),
        regular: Ot.Cb.regular(et, 0),
        thin: Ot.Cb.thin(et, 0),
        line: Ot.Cb.line(et, 0),
        text: Ot.Cb.text(et, 0),
        particles: Ot.Cb.particles(et, 0),
        terrainParts: Ot.Cb.terrainParts(et, 0),
        terrainCompiling: Ot.Cb.terrainCompiling(et, 0),
        ringCopiesMax: Ot.Cb.ringCopiesMax(et, 0),
        ringBusyWrites: Ot.Cb.ringBusyWrites(et, 0)
      }
    }

    function mt(tt) {
      const {
        terrainOpaque: et,
        terrainTransparent: Vt,
        earthSky: Ot,
        skyMeshes: qt,
        regular: Dt,
        thin: mt,
        line: dt,
        text: jt,
        particles: Ht
      } = tt;
      return et + Vt + Ot + qt + Dt + mt + dt + jt + Ht
    }

    function dt() {
      const tt = (0, qt.g)();
      return !0 === (null === tt || void 0 === tt ? void 0 : tt.isCoreRunning) ? function(tt) {
        const et = Dt(tt);
        if (null === et) return [];
        const {
          terrainOpaque: Vt,
          terrainTransparent: Ot,
          terrainPack: qt,
          earthSky: dt,
          skyMeshes: jt,
          regular: Ht,
          thin: Xt,
          line: Qt,
          text: lt,
          particles: Et
        } = et;
        return [{
          label: "Drawn",
          value: `${mt(et)}`
        }, {
          label: "Terrain",
          value: `${Vt} opaque / ${Ot} transparent (${qt} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Ht} / ${Xt}`
        }, {
          label: "Text / Lines",
          value: `${lt} / ${Qt}`
        }, {
          label: "Sky / Particles",
          value: `${dt+jt} / ${Et}`
        }]
      }(tt.api) : []
    }
  },
  41206: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => ft,
      e: () => lt,
      g: () => Et
    });
    var Ot = Vt(2037),
      qt = Vt(1391),
      Dt = Vt(40769),
      mt = Vt(40797),
      dt = Vt(40804),
      jt = Vt(40824);
    const Ht = new qt.b;
    let Xt = !1;

    function Qt(tt) {
      const et = (0, Dt.g)();
      return null !== et && +tt === et.api.localId
    }

    function lt() {
      Xt || (Xt = !0, (0, jt.j)(mt.l, (tt => {
        var et, Vt;
        const Ot = (0, dt.h)(mt.l, tt);
        if (!(0, dt.d)(Ot)) return;
        const qt = Ot;
        Qt(qt.Ft) && Et(qt.kt, {
          icon: qt.tV,
          level: qt.VV,
          displayName: null !== (et = qt.Gt) && void 0 !== et ? et : null,
          durationMs: null !== (Vt = qt.eV) && void 0 !== Vt ? Vt : null
        })
      })), (0, jt.j)(mt.O, (tt => {
        const et = (0, dt.h)(mt.O, tt);
        if (!(0, dt.d)(et)) return;
        const Vt = et;
        Qt(Vt.Ft) && Ot.d.remove(Vt.kt)
      })), (0, jt.f)((() => {
        Ot.d.clear()
      })))
    }

    function Et(tt, et) {
      Ot.d.update(tt, et), Ht.forEach((et => {
        et(tt)
      }))
    }
    const ft = {
      localEffectUpdated: {
        watch: tt => Ht.add(tt)
      }
    }
  },
  41215: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt
    });
    var Ot = Vt(4963),
      qt = Vt(4960),
      Dt = Vt(40812),
      mt = Vt(40824);
    const dt = new Set(Ot.M),
      jt = Ot.M.map((tt => (new TextEncoder).encode(tt))),
      Ht = new Map;

    function Xt(tt, et) {
      var Vt;
      return null === (Vt = Ht.get(tt)) || void 0 === Vt ? void 0 : Vt[et]
    }(0, mt.j)(Ot.gc.NewOtherEntitySettings, (tt => {
      tt.payloadKind === qt.wc.Msgpack && jt.some((et => function(tt, et) {
        const Vt = et[0];
        for (let Ot = tt.indexOf(Vt); - 1 !== Ot && Ot + et.length <= tt.length; Ot = tt.indexOf(Vt, Ot + 1)) {
          let Vt = 1;
          for (; Vt < et.length && tt[Ot + Vt] === et[Vt];) Vt++;
          if (Vt === et.length) return !0
        }
        return !1
      }(tt.payload, et))) && function(tt) {
        if (null === tt || "object" !== typeof tt || null === tt.settings || "object" !== typeof tt.settings) return;
        const et = String(tt.eId),
          Vt = tt.settings;
        let Ot = Ht.get(et);
        for (const qt in Vt) {
          if (!dt.has(qt)) continue;
          const tt = Vt[qt];
          null === tt || void 0 === tt ? Ot && delete Ot[qt] : (Ot ??= {}, Ot[qt] = tt)
        }
        Ot && Ht.set(et, Ot)
      }((0, Dt.c)(tt.payload))
    })), (0, mt.f)((() => {
      Ht.clear()
    }))
  },
  41201: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Et,
      c: () => Ht,
      d: () => Qt
    });
    var Ot = Vt(39196),
      qt = Vt(2026),
      Dt = Vt(1391),
      mt = Vt(40797),
      dt = Vt(40804),
      jt = Vt(40824);
    const Ht = new Ot.b;
    let Xt = {};

    function Qt(tt) {
      return Xt[tt]
    }
    const lt = new Dt.b;

    function Et(tt) {
      return lt.add(tt)
    }

    function ft(tt) {
      lt.callEach(tt, "a roster listener")
    }(0, jt.j)(mt.X, (tt => {
      const et = (0, dt.h)(mt.X, tt);
      if (void 0 === et) return;
      const Vt = et.zt.some((tt => {
          let {
            ot: et,
            rt: Vt
          } = tt;
          return null !== Vt && Ht.has(et) && Ht.getName(et) !== Vt
        })),
        {
          added: Ot,
          removed: Dt,
          settingChanges: jt
        } = Ht.apply(et),
        Xt = new Set;
      for (const qt of jt)
        for (const tt in qt.settings) Xt.add(tt);
      const Qt = Vt || Ot.length > 0 || Dt.length > 0;
      (Qt || Xt.has("hideNameSeed")) && function() {
        const tt = new Map;
        for (const et of Ht.ids()) {
          const Vt = Ht.getName(et),
            Ot = Ht.getSetting(et, "hideNameSeed");
          void 0 !== Vt && void 0 !== Ot && null !== Ot && tt.set(Vt, Ot)
        }
        qt.d.replaceAll(tt)
      }(), ft({
        kind: "roster",
        members: Qt,
        settings: Xt
      })
    })), (0, jt.j)(mt.K, (tt => {
      const et = (0, dt.h)(mt.K, tt);
      if (void 0 !== et) {
        for (const {
            FD: tt,
            kD: Vt,
            GD: Ot
          }
          of et) Xt[tt] = {
          ...Xt[tt],
          [Vt]: Ot
        };
        ft({
          kind: "cosmetics",
          updates: et
        })
      }
    })), (0, jt.f)((() => {
      Ht.clear(), Xt = {}, qt.d.clear(), ft({
        kind: "reset"
      })
    })), (0, jt.g)((() => {
      Ht.clear(), ft({
        kind: "reset"
      })
    }))
  },
  41219: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => St,
      e: () => yt,
      g: () => Pt,
      h: () => Zt
    });
    var Ot = Vt(1363),
      qt = Vt(705),
      Dt = Vt(106),
      mt = Vt(4963),
      dt = Vt(40761),
      jt = Vt(40792),
      Ht = Vt(40769),
      Xt = Vt(41215),
      Qt = Vt(41201),
      lt = Vt(40804),
      Et = Vt(40824);

    function ft(tt) {
      let {
        deadEId: et,
        killerEId: Vt,
        killerLifeformType: Ot,
        withItem: qt,
        killstreak: Dt
      } = tt;
      return {
        killer: Jt({
          eId: Vt,
          lifeformType: Ot
        }),
        victim: Jt({
          eId: et
        }),
        withItem: qt,
        killstreak: Dt
      }
    }

    function wt(tt) {
      let {
        killer: et,
        victim: Vt,
        withItem: Ot
      } = tt;
      return {
        killer: Jt(et),
        victim: Jt(Vt),
        withItem: Ot,
        killstreak: 0
      }
    }

    function yt(tt) {
      ht && Wt((() => "killed" === tt.kind ? ft(tt.body) : wt(tt.body)))
    }
    const Nt = "#2727f1",
      Mt = "#912c2c";

    function bt(tt, et) {
      var Vt;
      return Qt.c.has(tt) ? null === (Vt = Qt.c.getSettings(tt)) || void 0 === Vt ? void 0 : Vt[et] : (0, Xt.b)(tt, et)
    }

    function Jt(tt) {
      var et, Vt, mt, dt, Xt;
      let {
        eId: lt,
        name: Et,
        colour: ft,
        lifeformType: wt
      } = tt;
      if (void 0 === lt || null === lt || "" === lt) {
        const tt = Et || null;
        return {
          id: null,
          shownName: tt,
          lifeformType: null === tt && null !== wt && void 0 !== wt ? wt : null,
          colour: ft || null,
          local: !1,
          realName: null
        }
      }
      const yt = String(lt),
        Jt = null === (et = (0, Ht.g)()) || void 0 === et ? void 0 : et.api,
        Ct = void 0 !== Jt && String(Jt.localId) === yt,
        ut = null !== (Vt = Qt.c.getName(yt)) && void 0 !== Vt ? Vt : null,
        Kt = null !== (mt = bt(yt, "hideNameSeed")) && void 0 !== mt ? mt : null;
      let ht = null === ut ? null : (0, Ot.e)(ut, !Dt.featureFlags.canSeeRealPlayerNames, Kt) || null,
        vt = null;
      if (null === ht && void 0 !== Jt) {
        const tt = Jt.getEntityType(yt);
        "Player" !== tt && (ht = (0, jt.h)(Jt, +yt) || null), vt = qt.f.includes(tt) ? tt : null
      }
      return {
        id: yt,
        shownName: ht,
        lifeformType: null === ht && null !== (dt = null !== (Xt = vt) && void 0 !== Xt ? Xt : wt) && void 0 !== dt ? dt : null,
        colour: ft || bt(yt, "killfeedColour") || (Ct ? Nt : Mt),
        local: Ct,
        realName: ut
      }
    }
    const Ct = 32;
    let ut = [],
      Kt = null,
      ht = !1,
      vt = !1;

    function Wt(tt) {
      null === Kt ? (ut.length === Ct && ut.shift(), ut.push(tt)) : Kt(tt())
    }

    function St() {
      vt || (vt = !0, (0, Et.j)(mt.gc.PlayerKilled, (tt => {
        const et = (0, lt.k)(tt);
        (0, lt.d)(et) && Wt((() => ft(et)))
      })), (0, Et.j)(mt.gc.CustomKillfeed, (tt => {
        const et = (0, lt.k)(tt);
        (0, lt.d)(et) && (0, lt.d)(et.killer) && (0, lt.d)(et.victim) && Wt((() => wt(et)))
      })), (0, Et.f)((() => {
        ut = []
      })))
    }
    const ct = Object.freeze([0, 0, 0]),
      Rt = [0, 0, 0],
      It = [0, 0, 0],
      Pt = {
        kill: {
          watch(tt) {
            if (ht = !0, 0 === ut.length) return Kt = tt, () => {
              ht = !1, Kt = null
            };
            const et = setTimeout((() => {
              const et = ut;
              ut = [], Kt = tt;
              for (const Ot of et) try {
                tt(Ot())
              } catch (Vt) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Vt)
              }
            }), 0);
            return () => {
              clearTimeout(et), ht = !1, Kt = null
            }
          }
        }
      },
      Zt = {
        localPos() {
          const tt = (0, Ht.g)();
          if (null === tt) return ct;
          const et = tt.api.apiView;
          for (let Vt = 0; Vt < 3; Vt++) Rt[Vt] = dt.x.localPos(et, 0, Vt);
          return Rt
        },
        targetedBlockPos() {
          const tt = (0, Ht.g)();
          if (null === tt || dt.x.targetBlockId(tt.api.apiView, 0) === dt.ld) return null;
          for (let et = 0; et < 3; et++) It[et] = dt.x.targetBlock(tt.api.apiView, 0, et);
          return It
        }
      }
  },
  39196: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor() {
        this.members = new Map
      }
      apply(tt) {
        const et = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Ot of tt.zt) {
          let tt = this.members.get(Ot.ot);
          if (tt || (tt = {
              name: null,
              settings: {}
            }, this.members.set(Ot.ot, tt), et.added.push(Ot.ot)), null !== Ot.rt && (tt.name = Ot.rt), null !== Ot.Ut || Ot.Yt.length > 0) {
            const Vt = null === Ot.Ut ? {} : JSON.parse(Ot.Ut);
            Object.assign(tt.settings, Vt);
            for (const et of Ot.Yt) delete tt.settings[et], Vt[et] = void 0;
            et.settingChanges.push({
              playerId: Ot.ot,
              settings: Vt
            })
          }
        }
        for (const Ot of tt.Bt) {
          const tt = this.members.get(Ot);
          var Vt;
          if (tt) this.members.delete(Ot), et.removed.push({
            playerId: Ot,
            name: null !== (Vt = tt.name) && void 0 !== Vt ? Vt : void 0
          })
        }
        return et
      }
      has(tt) {
        return this.members.has(tt)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(tt) {
        var et, Vt;
        return null !== (et = null === (Vt = this.members.get(tt)) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : void 0
      }
      getSettings(tt) {
        var et;
        return null === (et = this.members.get(tt)) || void 0 === et ? void 0 : et.settings
      }
      getSetting(tt, et) {
        var Vt;
        return null === (Vt = this.members.get(tt)) || void 0 === Vt ? void 0 : Vt.settings[et]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);