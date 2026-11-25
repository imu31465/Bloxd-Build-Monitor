export const id = 252;
export const ids = [252];
export const modules = {
  41252: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      d: () => Xu
    });
    var su = ju(1999);
    let Uu = !1;

    function Zu() {
      Uu = !0
    }

    function Xu() {
      Uu && (Uu = !1, (0, su.c)())
    }
  },
  41247: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Zu,
      h: () => lu
    });
    var su = ju(40833),
      Uu = ju(40847);

    function Zu(uu) {
      if (uu.queries.drawCensus() < su.vb.BYTES) return null;
      const Eu = uu.memoryData(uu.scratch(), su.vb.BYTES, 4, "the draw census");
      return null === Eu ? null : {
        terrainOpaque: su.vb.terrainOpaque(Eu, 0),
        terrainTransparent: su.vb.terrainTransparent(Eu, 0),
        terrainPack: su.vb.terrainPack(Eu, 0),
        earthSky: su.vb.earthSky(Eu, 0),
        skyMeshes: su.vb.skyMeshes(Eu, 0),
        regular: su.vb.regular(Eu, 0),
        thin: su.vb.thin(Eu, 0),
        line: su.vb.line(Eu, 0),
        text: su.vb.text(Eu, 0),
        particles: su.vb.particles(Eu, 0),
        terrainParts: su.vb.terrainParts(Eu, 0),
        terrainCompiling: su.vb.terrainCompiling(Eu, 0),
        ringCopiesMax: su.vb.ringCopiesMax(Eu, 0),
        ringBusyWrites: su.vb.ringBusyWrites(Eu, 0)
      }
    }

    function Xu(uu) {
      const {
        terrainOpaque: Eu,
        terrainTransparent: ju,
        earthSky: su,
        skyMeshes: Uu,
        regular: Zu,
        thin: Xu,
        line: lu,
        text: qu,
        particles: fu
      } = uu;
      return Eu + ju + su + Uu + Zu + Xu + lu + qu + fu
    }

    function lu() {
      const uu = (0, Uu.l)();
      return !0 === (null === uu || void 0 === uu ? void 0 : uu.isCoreRunning) ? function(uu) {
        const Eu = Zu(uu);
        if (null === Eu) return [];
        const {
          terrainOpaque: ju,
          terrainTransparent: su,
          terrainPack: Uu,
          earthSky: lu,
          skyMeshes: qu,
          regular: fu,
          thin: Cu,
          line: bu,
          text: cu,
          particles: Nu
        } = Eu;
        return [{
          label: "Drawn",
          value: `${Xu(Eu)}`
        }, {
          label: "Terrain",
          value: `${ju} opaque / ${su} transparent (${Uu} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${fu} / ${Cu}`
        }, {
          label: "Text / Lines",
          value: `${cu} / ${bu}`
        }, {
          label: "Sky / Particles",
          value: `${lu+qu} / ${Nu}`
        }]
      }(uu.api) : []
    }
  },
  41230: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ou,
      c: () => cu,
      g: () => Nu
    });
    var su = ju(2007),
      Uu = ju(1345),
      Zu = ju(40847),
      Xu = ju(40864),
      lu = ju(40873),
      qu = ju(40889);
    const fu = new Uu.d;
    let Cu = !1;

    function bu(uu) {
      const Eu = (0, Zu.l)();
      return null !== Eu && +uu === Eu.api.localId
    }

    function cu() {
      Cu || (Cu = !0, (0, qu.n)(Xu.k, (uu => {
        var Eu, ju;
        const su = (0, lu.g)(Xu.k, uu);
        if (!(0, lu.e)(su)) return;
        const Uu = su;
        bu(Uu.Qu) && Nu(Uu.iu, {
          icon: Uu.BE,
          level: Uu.tE,
          displayName: null !== (Eu = Uu.Wu) && void 0 !== Eu ? Eu : null,
          durationMs: null !== (ju = Uu.LE) && void 0 !== ju ? ju : null
        })
      })), (0, qu.n)(Xu.V, (uu => {
        const Eu = (0, lu.g)(Xu.V, uu);
        if (!(0, lu.e)(Eu)) return;
        const ju = Eu;
        bu(ju.Qu) && su.c.remove(ju.iu)
      })), (0, qu.i)((() => {
        su.c.clear()
      })))
    }

    function Nu(uu, Eu) {
      su.c.update(uu, Eu), fu.forEach((Eu => {
        Eu(uu)
      }))
    }
    const Ou = {
      localEffectUpdated: {
        watch: uu => fu.add(uu)
      }
    }
  },
  41235: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Cu
    });
    var su = ju(4976),
      Uu = ju(4970),
      Zu = ju(40877),
      Xu = ju(40889);
    const lu = new Set(su.O),
      qu = su.O.map((uu => (new TextEncoder).encode(uu))),
      fu = new Map;

    function Cu(uu, Eu) {
      var ju;
      return null === (ju = fu.get(uu)) || void 0 === ju ? void 0 : ju[Eu]
    }(0, Xu.n)(su.mc.NewOtherEntitySettings, (uu => {
      uu.payloadKind === Uu.ic.Msgpack && qu.some((Eu => function(uu, Eu) {
        const ju = Eu[0];
        for (let su = uu.indexOf(ju); - 1 !== su && su + Eu.length <= uu.length; su = uu.indexOf(ju, su + 1)) {
          let ju = 1;
          for (; ju < Eu.length && uu[su + ju] === Eu[ju];) ju++;
          if (ju === Eu.length) return !0
        }
        return !1
      }(uu.payload, Eu))) && function(uu) {
        if (null === uu || "object" !== typeof uu || null === uu.settings || "object" !== typeof uu.settings) return;
        const Eu = String(uu.eId),
          ju = uu.settings;
        let su = fu.get(Eu);
        for (const Uu in ju) {
          if (!lu.has(Uu)) continue;
          const uu = ju[Uu];
          null === uu || void 0 === uu ? su && delete su[Uu] : (su ??= {}, su[Uu] = uu)
        }
        su && fu.set(Eu, su)
      }((0, Zu.d)(uu.payload))
    })), (0, Xu.i)((() => {
      fu.clear()
    }))
  },
  41223: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Nu,
      f: () => fu,
      h: () => bu
    });
    var su = ju(39312),
      Uu = ju(1995),
      Zu = ju(1345),
      Xu = ju(40864),
      lu = ju(40873),
      qu = ju(40889);
    const fu = new su.c;
    let Cu = {};

    function bu(uu) {
      return Cu[uu]
    }
    const cu = new Zu.d;

    function Nu(uu) {
      return cu.add(uu)
    }

    function Ou(uu) {
      cu.callEach(uu, "a roster listener")
    }(0, qu.n)(Xu.db, (uu => {
      const Eu = (0, lu.g)(Xu.db, uu);
      if (void 0 === Eu) return;
      const ju = Eu.Su.some((uu => {
          let {
            Iu: Eu,
            Fu: ju
          } = uu;
          return null !== ju && fu.has(Eu) && fu.getName(Eu) !== ju
        })),
        {
          added: su,
          removed: Zu,
          settingChanges: qu
        } = fu.apply(Eu),
        Cu = new Set;
      for (const Uu of qu)
        for (const uu in Uu.settings) Cu.add(uu);
      const bu = ju || su.length > 0 || Zu.length > 0;
      (bu || Cu.has("hideNameSeed")) && function() {
        const uu = new Map;
        for (const Eu of fu.ids()) {
          const ju = fu.getName(Eu),
            su = fu.getSetting(Eu, "hideNameSeed");
          void 0 !== ju && void 0 !== su && null !== su && uu.set(ju, su)
        }
        Uu.e.replaceAll(uu)
      }(), Ou({
        kind: "roster",
        members: bu,
        settings: Cu
      })
    })), (0, qu.n)(Xu.R, (uu => {
      const Eu = (0, lu.g)(Xu.R, uu);
      if (void 0 !== Eu) {
        for (const {
            QZ: uu,
            iZ: ju,
            WZ: su
          }
          of Eu) Cu[uu] = {
          ...Cu[uu],
          [ju]: su
        };
        Ou({
          kind: "cosmetics",
          updates: Eu
        })
      }
    })), (0, qu.i)((() => {
      fu.clear(), Cu = {}, Uu.e.clear(), Ou({
        kind: "reset"
      })
    })), (0, qu.k)((() => {
      fu.clear(), Ou({
        kind: "reset"
      })
    }))
  },
  41242: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Pu,
      f: () => hu,
      j: () => vu,
      l: () => Ku
    });
    var su = ju(1320),
      Uu = ju(636),
      Zu = ju(91),
      Xu = ju(4976),
      lu = ju(40833),
      qu = ju(40860),
      fu = ju(40847),
      Cu = ju(41235),
      bu = ju(41223),
      cu = ju(40873),
      Nu = ju(40889);

    function Ou(uu) {
      let {
        deadEId: Eu,
        killerEId: ju,
        killerLifeformType: su,
        withItem: Uu,
        killstreak: Zu
      } = uu;
      return {
        killer: eu({
          eId: ju,
          lifeformType: su
        }),
        victim: eu({
          eId: Eu
        }),
        withItem: Uu,
        killstreak: Zu
      }
    }

    function Yu(uu) {
      let {
        killer: Eu,
        victim: ju,
        withItem: su
      } = uu;
      return {
        killer: eu(Eu),
        victim: eu(ju),
        withItem: su,
        killstreak: 0
      }
    }

    function hu(uu) {
      Ju && au((() => "killed" === uu.kind ? Ou(uu.body) : Yu(uu.body)))
    }
    const Du = "#2727f1",
      gu = "#912c2c";

    function Mu(uu, Eu) {
      var ju;
      return bu.f.has(uu) ? null === (ju = bu.f.getSettings(uu)) || void 0 === ju ? void 0 : ju[Eu] : (0, Cu.c)(uu, Eu)
    }

    function eu(uu) {
      var Eu, ju, Xu, lu, Cu;
      let {
        eId: cu,
        name: Nu,
        colour: Ou,
        lifeformType: Yu
      } = uu;
      if (void 0 === cu || null === cu || "" === cu) {
        const uu = Nu || null;
        return {
          id: null,
          shownName: uu,
          lifeformType: null === uu && null !== Yu && void 0 !== Yu ? Yu : null,
          colour: Ou || null,
          local: !1,
          realName: null
        }
      }
      const hu = String(cu),
        eu = null === (Eu = (0, fu.l)()) || void 0 === Eu ? void 0 : Eu.api,
        Gu = void 0 !== eu && String(eu.localId) === hu,
        pu = null !== (ju = bu.f.getName(hu)) && void 0 !== ju ? ju : null,
        wu = null !== (Xu = Mu(hu, "hideNameSeed")) && void 0 !== Xu ? Xu : null;
      let Ju = null === pu ? null : (0, su.e)(pu, !Zu.featureFlags.canSeeRealPlayerNames, wu) || null,
        du = null;
      if (null === Ju && void 0 !== eu) {
        const uu = eu.getEntityType(hu);
        "Player" !== uu && (Ju = (0, qu.h)(eu, +hu) || null), du = Uu.n.includes(uu) ? uu : null
      }
      return {
        id: hu,
        shownName: Ju,
        lifeformType: null === Ju && null !== (lu = null !== (Cu = du) && void 0 !== Cu ? Cu : Yu) && void 0 !== lu ? lu : null,
        colour: Ou || Mu(hu, "killfeedColour") || (Gu ? Du : gu),
        local: Gu,
        realName: pu
      }
    }
    const Gu = 32;
    let pu = [],
      wu = null,
      Ju = !1,
      du = !1;

    function au(uu) {
      null === wu ? (pu.length === Gu && pu.shift(), pu.push(uu)) : wu(uu())
    }

    function Pu() {
      du || (du = !0, (0, Nu.n)(Xu.mc.PlayerKilled, (uu => {
        const Eu = (0, cu.i)(uu);
        (0, cu.e)(Eu) && au((() => Ou(Eu)))
      })), (0, Nu.n)(Xu.mc.CustomKillfeed, (uu => {
        const Eu = (0, cu.i)(uu);
        (0, cu.e)(Eu) && (0, cu.e)(Eu.killer) && (0, cu.e)(Eu.victim) && au((() => Yu(Eu)))
      })), (0, Nu.i)((() => {
        pu = []
      })))
    }
    const ou = Object.freeze([0, 0, 0]),
      ku = [0, 0, 0],
      mu = [0, 0, 0],
      vu = {
        kill: {
          watch(uu) {
            if (Ju = !0, 0 === pu.length) return wu = uu, () => {
              Ju = !1, wu = null
            };
            const Eu = setTimeout((() => {
              const Eu = pu;
              pu = [], wu = uu;
              for (const su of Eu) try {
                uu(su())
              } catch (ju) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", ju)
              }
            }), 0);
            return () => {
              clearTimeout(Eu), Ju = !1, wu = null
            }
          }
        }
      },
      Ku = {
        localPos() {
          const uu = (0, fu.l)();
          if (null === uu) return ou;
          const Eu = uu.api.apiView;
          for (let ju = 0; ju < 3; ju++) ku[ju] = lu.u.localPos(Eu, 0, ju);
          return ku
        },
        targetedBlockPos() {
          const uu = (0, fu.l)();
          if (null === uu || lu.u.targetBlockId(uu.api.apiView, 0) === lu.Tc) return null;
          for (let Eu = 0; Eu < 3; Eu++) mu[Eu] = lu.u.targetBlock(uu.api.apiView, 0, Eu);
          return mu
        }
      }
  },
  39312: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    class su {
      constructor() {
        this.members = new Map
      }
      apply(uu) {
        const Eu = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const su of uu.Su) {
          let uu = this.members.get(su.Iu);
          if (uu || (uu = {
              name: null,
              settings: {}
            }, this.members.set(su.Iu, uu), Eu.added.push(su.Iu)), null !== su.Fu && (uu.name = su.Fu), null !== su.Bu || su.Lu.length > 0) {
            const ju = null === su.Bu ? {} : JSON.parse(su.Bu);
            Object.assign(uu.settings, ju);
            for (const Eu of su.Lu) delete uu.settings[Eu], ju[Eu] = void 0;
            Eu.settingChanges.push({
              playerId: su.Iu,
              settings: ju
            })
          }
        }
        for (const su of uu.tu) {
          const uu = this.members.get(su);
          var ju;
          if (uu) this.members.delete(su), Eu.removed.push({
            playerId: su,
            name: null !== (ju = uu.name) && void 0 !== ju ? ju : void 0
          })
        }
        return Eu
      }
      has(uu) {
        return this.members.has(uu)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(uu) {
        var Eu, ju;
        return null !== (Eu = null === (ju = this.members.get(uu)) || void 0 === ju ? void 0 : ju.name) && void 0 !== Eu ? Eu : void 0
      }
      getSettings(uu) {
        var Eu;
        return null === (Eu = this.members.get(uu)) || void 0 === Eu ? void 0 : Eu.settings
      }
      getSetting(uu, Eu) {
        var ju;
        return null === (ju = this.members.get(uu)) || void 0 === ju ? void 0 : ju.settings[Eu]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);