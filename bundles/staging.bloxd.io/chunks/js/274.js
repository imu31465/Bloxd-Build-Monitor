export const id = 274;
export const ids = [274];
export const modules = {
  42120: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      f: () => Ke
    });
    var ye = He(1992);
    let be = !1;

    function Me() {
      be = !0
    }

    function Ke() {
      be && (be = !1, (0, ye.d)())
    }
  },
  42116: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => Me,
      g: () => Ue
    });
    var ye = He(41694),
      be = He(41704);

    function Me(ee) {
      if (ee.queries.drawCensus() < ye.vb.BYTES) return null;
      const ie = ee.memoryData(ee.scratch(), ye.vb.BYTES, 4, "the draw census");
      return null === ie ? null : {
        terrainOpaque: ye.vb.terrainOpaque(ie, 0),
        terrainTransparent: ye.vb.terrainTransparent(ie, 0),
        terrainPack: ye.vb.terrainPack(ie, 0),
        earthSky: ye.vb.earthSky(ie, 0),
        skyMeshes: ye.vb.skyMeshes(ie, 0),
        regular: ye.vb.regular(ie, 0),
        thin: ye.vb.thin(ie, 0),
        line: ye.vb.line(ie, 0),
        text: ye.vb.text(ie, 0),
        particles: ye.vb.particles(ie, 0),
        terrainParts: ye.vb.terrainParts(ie, 0),
        terrainCompiling: ye.vb.terrainCompiling(ie, 0),
        ringCopiesMax: ye.vb.ringCopiesMax(ie, 0),
        ringBusyWrites: ye.vb.ringBusyWrites(ie, 0)
      }
    }

    function Ke(ee) {
      const {
        terrainOpaque: ie,
        terrainTransparent: He,
        earthSky: ye,
        skyMeshes: be,
        regular: Me,
        thin: Ke,
        line: Ue,
        text: Fe,
        particles: Je
      } = ee;
      return ie + He + ye + be + Me + Ke + Ue + Fe + Je
    }

    function Ue() {
      const ee = (0, be.h)();
      return !0 === (null === ee || void 0 === ee ? void 0 : ee.isCoreRunning) ? function(ee) {
        const ie = Me(ee);
        if (null === ie) return [];
        const {
          terrainOpaque: He,
          terrainTransparent: ye,
          terrainPack: be,
          earthSky: Ue,
          skyMeshes: Fe,
          regular: Je,
          thin: oe,
          line: Re,
          text: ke,
          particles: qe
        } = ie;
        return [{
          label: "Drawn",
          value: `${Ke(ie)}`
        }, {
          label: "Terrain",
          value: `${He} opaque / ${ye} transparent (${be} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Je} / ${oe}`
        }, {
          label: "Text / Lines",
          value: `${ke} / ${Re}`
        }, {
          label: "Sky / Particles",
          value: `${Ue+Fe} / ${qe}`
        }]
      }(ee.api) : []
    }
  },
  42105: (ee, ie, He) => {
    He.d(ie, {
      e: () => fe,
      i: () => ke,
      l: () => qe
    });
    var ye = He(2e3),
      be = He(1253),
      Me = He(41704),
      Ke = He(41725),
      Ue = He(41728),
      Fe = He(41739);
    const Je = new be.b;
    let oe = !1;

    function Re(ee) {
      const ie = (0, Me.h)();
      return null !== ie && +ee === ie.api.localId
    }

    function ke() {
      oe || (oe = !0, (0, Fe.j)(Ke.l, (ee => {
        var ie, He;
        const ye = (0, Ue.g)(Ke.l, ee);
        if (!(0, Ue.c)(ye)) return;
        const be = ye;
        Re(be.Oy) && qe(be.Wy, {
          icon: be.Zy,
          level: be.Dy,
          displayName: null !== (ie = be.ty) && void 0 !== ie ? ie : null,
          durationMs: null !== (He = be.wy) && void 0 !== He ? He : null
        })
      })), (0, Fe.j)(Ke.N, (ee => {
        const ie = (0, Ue.g)(Ke.N, ee);
        if (!(0, Ue.c)(ie)) return;
        const He = ie;
        Re(He.Oy) && ye.b.remove(He.Wy)
      })), (0, Fe.g)((() => {
        ye.b.clear()
      })))
    }

    function qe(ee, ie) {
      ye.b.update(ee, ie), Je.forEach((ie => {
        ie(ee)
      }))
    }
    const fe = {
      localEffectUpdated: {
        watch: ee => Je.add(ee)
      }
    }
  },
  42109: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe
    });
    var ye = He(5279),
      be = He(5271),
      Me = He(41734),
      Ke = He(41739);
    const Ue = new Set(ye.N),
      Fe = ye.N.map((ee => (new TextEncoder).encode(ee))),
      Je = new Map;

    function oe(ee, ie) {
      var He;
      return null === (He = Je.get(ee)) || void 0 === He ? void 0 : He[ie]
    }(0, Ke.j)(ye.ic.NewOtherEntitySettings, (ee => {
      ee.payloadKind === be.dc.Msgpack && Fe.some((ie => function(ee, ie) {
        const He = ie[0];
        for (let ye = ee.indexOf(He); - 1 !== ye && ye + ie.length <= ee.length; ye = ee.indexOf(He, ye + 1)) {
          let He = 1;
          for (; He < ie.length && ee[ye + He] === ie[He];) He++;
          if (He === ie.length) return !0
        }
        return !1
      }(ee.payload, ie))) && function(ee) {
        if (null === ee || "object" !== typeof ee || null === ee.settings || "object" !== typeof ee.settings) return;
        const ie = String(ee.eId),
          He = ee.settings;
        let ye = Je.get(ie);
        for (const be in He) {
          if (!Ue.has(be)) continue;
          const ee = He[be];
          null === ee || void 0 === ee ? ye && delete ye[be] : (ye ??= {}, ye[be] = ee)
        }
        ye && Je.set(ie, ye)
      }((0, Me.b)(ee.payload))
    })), (0, Ke.g)((() => {
      Je.clear()
    }))
  },
  42103: (ee, ie, He) => {
    He.d(ie, {
      d: () => qe,
      f: () => Je,
      h: () => Re
    });
    var ye = He(39793),
      be = He(1988),
      Me = He(1253),
      Ke = He(41725),
      Ue = He(41728),
      Fe = He(41739);
    const Je = new ye.c;
    let oe = {};

    function Re(ee) {
      return oe[ee]
    }
    const ke = new Me.b;

    function qe(ee) {
      return ke.add(ee)
    }

    function fe(ee) {
      ke.callEach(ee, "a roster listener")
    }(0, Fe.j)(Ke.X, (ee => {
      const ie = (0, Ue.g)(Ke.X, ee);
      if (void 0 === ie) return;
      const He = ie.oy.some((ee => {
          let {
            Ry: ie,
            ky: He
          } = ee;
          return null !== He && Je.has(ie) && Je.getName(ie) !== He
        })),
        {
          added: ye,
          removed: Me,
          settingChanges: Fe
        } = Je.apply(ie),
        oe = new Set;
      for (const be of Fe)
        for (const ee in be.settings) oe.add(ee);
      const Re = He || ye.length > 0 || Me.length > 0;
      (Re || oe.has("hideNameSeed")) && function() {
        const ee = new Map;
        for (const ie of Je.ids()) {
          const He = Je.getName(ie),
            ye = Je.getSetting(ie, "hideNameSeed");
          void 0 !== He && void 0 !== ye && null !== ye && ee.set(He, ye)
        }
        be.c.replaceAll(ee)
      }(), fe({
        kind: "roster",
        members: Re,
        settings: oe
      })
    })), (0, Fe.j)(Ke.K, (ee => {
      const ie = (0, Ue.g)(Ke.K, ee);
      if (void 0 !== ie) {
        for (const {
            de: ee,
            te: He,
            Ze: ye
          }
          of ie) oe[ee] = {
          ...oe[ee],
          [He]: ye
        };
        fe({
          kind: "cosmetics",
          updates: ie
        })
      }
    })), (0, Fe.g)((() => {
      Je.clear(), oe = {}, be.c.clear(), fe({
        kind: "reset"
      })
    })), (0, Fe.i)((() => {
      Je.clear(), fe({
        kind: "reset"
      })
    }))
  },
  42113: (ee, ie, He) => {
    He.d(ie, {
      b: () => we,
      f: () => pe,
      i: () => Ye,
      m: () => Ve
    });
    var ye = He(1207),
      be = He(604),
      Me = He(97),
      Ke = He(5279),
      Ue = He(41694),
      Fe = He(41721),
      Je = He(41704),
      oe = He(42109),
      Re = He(42103),
      ke = He(41728),
      qe = He(41739);

    function fe(ee) {
      let {
        deadEId: ie,
        killerEId: He,
        killerLifeformType: ye,
        withItem: be,
        killstreak: Me
      } = ee;
      return {
        killer: Ee({
          eId: He,
          lifeformType: ye
        }),
        victim: Ee({
          eId: ie
        }),
        withItem: be,
        killstreak: Me
      }
    }

    function Te(ee) {
      let {
        killer: ie,
        victim: He,
        withItem: ye
      } = ee;
      return {
        killer: Ee(ie),
        victim: Ee(He),
        withItem: ye,
        killstreak: 0
      }
    }

    function pe(ee) {
      We && Ze((() => "killed" === ee.kind ? fe(ee.body) : Te(ee.body)))
    }
    const Xe = "#2727f1",
      ze = "#912c2c";

    function Be(ee, ie) {
      var He;
      return Re.f.has(ee) ? null === (He = Re.f.getSettings(ee)) || void 0 === He ? void 0 : He[ie] : (0, oe.c)(ee, ie)
    }

    function Ee(ee) {
      var ie, He, Ke, Ue, oe;
      let {
        eId: ke,
        name: qe,
        colour: fe,
        lifeformType: Te
      } = ee;
      if (void 0 === ke || null === ke || "" === ke) {
        const ee = qe || null;
        return {
          id: null,
          shownName: ee,
          lifeformType: null === ee && null !== Te && void 0 !== Te ? Te : null,
          colour: fe || null,
          local: !1,
          realName: null
        }
      }
      const pe = String(ke),
        Ee = null === (ie = (0, Je.h)()) || void 0 === ie ? void 0 : ie.api,
        ge = void 0 !== Ee && String(Ee.localId) === pe,
        Oe = null !== (He = Re.f.getName(pe)) && void 0 !== He ? He : null,
        de = null !== (Ke = Be(pe, "hideNameSeed")) && void 0 !== Ke ? Ke : null;
      let We = null === Oe ? null : (0, ye.e)(Oe, !Me.featureFlags.canSeeRealPlayerNames, de) || null,
        te = null;
      if (null === We && void 0 !== Ee) {
        const ee = Ee.getEntityType(pe);
        "Player" !== ee && (We = (0, Fe.i)(Ee, +pe) || null), te = be.j.includes(ee) ? ee : null
      }
      return {
        id: pe,
        shownName: We,
        lifeformType: null === We && null !== (Ue = null !== (oe = te) && void 0 !== oe ? oe : Te) && void 0 !== Ue ? Ue : null,
        colour: fe || Be(pe, "killfeedColour") || (ge ? Xe : ze),
        local: ge,
        realName: Oe
      }
    }
    const ge = 32;
    let Oe = [],
      de = null,
      We = !1,
      te = !1;

    function Ze(ee) {
      null === de ? (Oe.length === ge && Oe.shift(), Oe.push(ee)) : de(ee())
    }

    function we() {
      te || (te = !0, (0, qe.j)(Ke.ic.PlayerKilled, (ee => {
        const ie = (0, ke.h)(ee);
        (0, ke.c)(ie) && Ze((() => fe(ie)))
      })), (0, qe.j)(Ke.ic.CustomKillfeed, (ee => {
        const ie = (0, ke.h)(ee);
        (0, ke.c)(ie) && (0, ke.c)(ie.killer) && (0, ke.c)(ie.victim) && Ze((() => Te(ie)))
      })), (0, qe.g)((() => {
        Oe = []
      })))
    }
    const De = Object.freeze([0, 0, 0]),
      Pe = [0, 0, 0],
      Ae = [0, 0, 0],
      Ye = {
        kill: {
          watch(ee) {
            if (We = !0, 0 === Oe.length) return de = ee, () => {
              We = !1, de = null
            };
            const ie = setTimeout((() => {
              const ie = Oe;
              Oe = [], de = ee;
              for (const ye of ie) try {
                ee(ye())
              } catch (He) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", He)
              }
            }), 0);
            return () => {
              clearTimeout(ie), We = !1, de = null
            }
          }
        }
      },
      Ve = {
        localPos() {
          const ee = (0, Je.h)();
          if (null === ee) return De;
          const ie = ee.api.apiView;
          for (let He = 0; He < 3; He++) Pe[He] = Ue.v.localPos(ie, 0, He);
          return Pe
        },
        targetedBlockPos() {
          const ee = (0, Je.h)();
          if (null === ee || Ue.v.targetBlockId(ee.api.apiView, 0) === Ue.ad) return null;
          for (let ie = 0; ie < 3; ie++) Ae[ie] = Ue.v.targetBlock(ee.api.apiView, 0, ie);
          return Ae
        }
      }
  },
  39793: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {
      constructor() {
        this.members = new Map
      }
      apply(ee) {
        const ie = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const ye of ee.oy) {
          let ee = this.members.get(ye.Ry);
          if (ee || (ee = {
              name: null,
              settings: {}
            }, this.members.set(ye.Ry, ee), ie.added.push(ye.Ry)), null !== ye.ky && (ee.name = ye.ky), null !== ye.qy || ye.Ty.length > 0) {
            const He = null === ye.qy ? {} : JSON.parse(ye.qy);
            Object.assign(ee.settings, He);
            for (const ie of ye.Ty) delete ee.settings[ie], He[ie] = void 0;
            ie.settingChanges.push({
              playerId: ye.Ry,
              settings: He
            })
          }
        }
        for (const ye of ee.py) {
          const ee = this.members.get(ye);
          var He;
          if (ee) this.members.delete(ye), ie.removed.push({
            playerId: ye,
            name: null !== (He = ee.name) && void 0 !== He ? He : void 0
          })
        }
        return ie
      }
      has(ee) {
        return this.members.has(ee)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(ee) {
        var ie, He;
        return null !== (ie = null === (He = this.members.get(ee)) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : void 0
      }
      getSettings(ee) {
        var ie;
        return null === (ie = this.members.get(ee)) || void 0 === ie ? void 0 : ie.settings
      }
      getSetting(ee, ie) {
        var He;
        return null === (He = this.members.get(ee)) || void 0 === He ? void 0 : He.settings[ie]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);