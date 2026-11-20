export const id = 237;
export const ids = [237];
export const modules = {
  40316: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      h: () => mu
    });
    var Eu = yu(1867);
    let Ku = !1;

    function Qu() {
      Ku = !0
    }

    function mu() {
      Ku && (Ku = !1, (0, Eu.d)())
    }
  },
  40276: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Su,
      f: () => Bu,
      i: () => xu
    });
    var Eu = yu(1871),
      Ku = yu(1253),
      Qu = yu(40173),
      mu = yu(40197),
      Ju = yu(40199),
      Nu = yu(40217);
    const Xu = new Ku.d;
    let Vu = !1;

    function ru(uu) {
      const Ru = (0, Qu.i)();
      return null !== Ru && +uu === Ru.api.localId
    }

    function Bu() {
      Vu || (Vu = !0, (0, Nu.m)(mu.o, (uu => {
        var Ru, yu;
        const Eu = (0, Ju.f)(mu.o, uu);
        if (!(0, Ju.d)(Eu)) return;
        const Ku = Eu;
        ru(Ku.mR) && xu(Ku.JR, {
          icon: Ku.XR,
          level: Ku.rR,
          displayName: null !== (Ru = Ku.NR) && void 0 !== Ru ? Ru : null,
          durationMs: null !== (yu = Ku.VR) && void 0 !== yu ? yu : null
        })
      })), (0, Nu.m)(mu.T, (uu => {
        const Ru = (0, Ju.f)(mu.T, uu);
        if (!(0, Ju.d)(Ru)) return;
        const yu = Ru;
        ru(yu.mR) && Eu.b.remove(yu.JR)
      })), (0, Nu.g)((() => {
        Eu.b.clear()
      })))
    }

    function xu(uu, Ru) {
      Eu.b.update(uu, Ru), Xu.forEach((Ru => {
        Ru(uu)
      }))
    }
    const Su = {
      localEffectUpdated: {
        watch: uu => Xu.add(uu)
      }
    }
  },
  40280: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu
    });
    var Eu = yu(4564),
      Ku = yu(4562),
      Qu = yu(40205),
      mu = yu(40217);
    const Ju = new Set(Eu.H),
      Nu = Eu.H.map((uu => (new TextEncoder).encode(uu))),
      Xu = new Map;

    function Vu(uu, Ru) {
      var yu;
      return null === (yu = Xu.get(uu)) || void 0 === yu ? void 0 : yu[Ru]
    }(0, mu.m)(Eu.$b.NewOtherEntitySettings, (uu => {
      uu.payloadKind === Ku.ac.Msgpack && Nu.some((Ru => function(uu, Ru) {
        const yu = Ru[0];
        for (let Eu = uu.indexOf(yu); - 1 !== Eu && Eu + Ru.length <= uu.length; Eu = uu.indexOf(yu, Eu + 1)) {
          let yu = 1;
          for (; yu < Ru.length && uu[Eu + yu] === Ru[yu];) yu++;
          if (yu === Ru.length) return !0
        }
        return !1
      }(uu.payload, Ru))) && function(uu) {
        if (null === uu || "object" !== typeof uu || null === uu.settings || "object" !== typeof uu.settings) return;
        const Ru = String(uu.eId),
          yu = uu.settings;
        let Eu = Xu.get(Ru);
        for (const Ku in yu) {
          if (!Ju.has(Ku)) continue;
          const uu = yu[Ku];
          null === uu || void 0 === uu ? Eu && delete Eu[Ku] : (Eu ??= {}, Eu[Ku] = uu)
        }
        Eu && Xu.set(Ru, Eu)
      }((0, Qu.e)(uu.payload))
    })), (0, mu.g)((() => {
      Xu.clear()
    }))
  },
  40274: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => xu,
      g: () => Xu,
      i: () => ru
    });
    var Eu = yu(38760),
      Ku = yu(1862),
      Qu = yu(1253),
      mu = yu(40197),
      Ju = yu(40199),
      Nu = yu(40217);
    const Xu = new Eu.d;
    let Vu = {};

    function ru(uu) {
      return Vu[uu]
    }
    const Bu = new Qu.d;

    function xu(uu) {
      return Bu.add(uu)
    }

    function Su(uu) {
      Bu.callEach(uu, "a roster listener")
    }(0, Nu.m)(mu.cb, (uu => {
      const Ru = (0, Ju.f)(mu.cb, uu);
      if (void 0 === Ru) return;
      const yu = Ru.SE.some((uu => {
          let {
            pE: Ru,
            TE: yu
          } = uu;
          return null !== yu && Xu.has(Ru) && Xu.getName(Ru) !== yu
        })),
        {
          added: Eu,
          removed: Qu,
          settingChanges: Nu
        } = Xu.apply(Ru),
        Vu = new Set;
      for (const Ku of Nu)
        for (const uu in Ku.settings) Vu.add(uu);
      const ru = yu || Eu.length > 0 || Qu.length > 0;
      (ru || Vu.has("hideNameSeed")) && function() {
        const uu = new Map;
        for (const Ru of Xu.ids()) {
          const yu = Xu.getName(Ru),
            Eu = Xu.getSetting(Ru, "hideNameSeed");
          void 0 !== yu && void 0 !== Eu && null !== Eu && uu.set(yu, Eu)
        }
        Ku.d.replaceAll(uu)
      }(), Su({
        kind: "roster",
        members: ru,
        settings: Vu
      })
    })), (0, Nu.m)(mu.Q, (uu => {
      const Ru = (0, Ju.f)(mu.Q, uu);
      if (void 0 !== Ru) {
        for (const {
            hy: uu,
            Py: yu,
            iy: Eu
          }
          of Ru) Vu[uu] = {
          ...Vu[uu],
          [yu]: Eu
        };
        Su({
          kind: "cosmetics",
          updates: Ru
        })
      }
    })), (0, Nu.g)((() => {
      Xu.clear(), Vu = {}, Ku.d.clear(), Su({
        kind: "reset"
      })
    })), (0, Nu.i)((() => {
      Xu.clear(), Su({
        kind: "reset"
      })
    }))
  },
  40298: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Mu,
      i: () => Tu,
      m: () => nu,
      o: () => su
    });
    var Eu = yu(1240),
      Ku = yu(599),
      Qu = yu(106),
      mu = yu(4564),
      Ju = yu(40160),
      Nu = yu(40191),
      Xu = yu(40173),
      Vu = yu(40280),
      ru = yu(40274),
      Bu = yu(40199),
      xu = yu(40217);

    function Su(uu) {
      let {
        deadEId: Ru,
        killerEId: yu,
        killerLifeformType: Eu,
        withItem: Ku,
        killstreak: Qu
      } = uu;
      return {
        killer: du({
          eId: yu,
          lifeformType: Eu
        }),
        victim: du({
          eId: Ru
        }),
        withItem: Ku,
        killstreak: Qu
      }
    }

    function pu(uu) {
      let {
        killer: Ru,
        victim: yu,
        withItem: Eu
      } = uu;
      return {
        killer: du(Ru),
        victim: du(yu),
        withItem: Eu,
        killstreak: 0
      }
    }

    function Tu(uu) {
      eu && Du((() => "killed" === uu.kind ? Su(uu.body) : pu(uu.body)))
    }
    const Wu = "#2727f1",
      ju = "#912c2c";

    function Hu(uu, Ru) {
      var yu;
      return ru.g.has(uu) ? null === (yu = ru.g.getSettings(uu)) || void 0 === yu ? void 0 : yu[Ru] : (0, Vu.e)(uu, Ru)
    }

    function du(uu) {
      var Ru, yu, mu, Ju, Vu;
      let {
        eId: Bu,
        name: xu,
        colour: Su,
        lifeformType: pu
      } = uu;
      if (void 0 === Bu || null === Bu || "" === Bu) {
        const uu = xu || null;
        return {
          id: null,
          shownName: uu,
          lifeformType: null === uu && null !== pu && void 0 !== pu ? pu : null,
          colour: Su || null,
          local: !1,
          realName: null
        }
      }
      const Tu = String(Bu),
        du = null === (Ru = (0, Xu.i)()) || void 0 === Ru ? void 0 : Ru.api,
        bu = void 0 !== du && String(du.localId) === Tu,
        Cu = null !== (yu = ru.g.getName(Tu)) && void 0 !== yu ? yu : null,
        ku = null !== (mu = Hu(Tu, "hideNameSeed")) && void 0 !== mu ? mu : null;
      let eu = null === Cu ? null : (0, Eu.e)(Cu, !Qu.featureFlags.canSeeRealPlayerNames, ku) || null,
        Au = null;
      if (null === eu && void 0 !== du) {
        const uu = du.getEntityType(Tu);
        "Player" !== uu && (eu = (0, Nu.e)(du, +Tu) || null), Au = Ku.l.includes(uu) ? uu : null
      }
      return {
        id: Tu,
        shownName: eu,
        lifeformType: null === eu && null !== (Ju = null !== (Vu = Au) && void 0 !== Vu ? Vu : pu) && void 0 !== Ju ? Ju : null,
        colour: Su || Hu(Tu, "killfeedColour") || (bu ? Wu : ju),
        local: bu,
        realName: Cu
      }
    }
    const bu = 32;
    let Cu = [],
      ku = null,
      eu = !1,
      Au = !1;

    function Du(uu) {
      null === ku ? (Cu.length === bu && Cu.shift(), Cu.push(uu)) : ku(uu())
    }

    function Mu() {
      Au || (Au = !0, (0, xu.m)(mu.$b.PlayerKilled, (uu => {
        const Ru = (0, Bu.g)(uu);
        (0, Bu.d)(Ru) && Du((() => Su(Ru)))
      })), (0, xu.m)(mu.$b.CustomKillfeed, (uu => {
        const Ru = (0, Bu.g)(uu);
        (0, Bu.d)(Ru) && (0, Bu.d)(Ru.killer) && (0, Bu.d)(Ru.victim) && Du((() => pu(Ru)))
      })), (0, xu.g)((() => {
        Cu = []
      })))
    }
    const Iu = Object.freeze([0, 0, 0]),
      Gu = [0, 0, 0],
      Uu = [0, 0, 0],
      nu = {
        kill: {
          watch(uu) {
            if (eu = !0, 0 === Cu.length) return ku = uu, () => {
              eu = !1, ku = null
            };
            const Ru = setTimeout((() => {
              const Ru = Cu;
              Cu = [], ku = uu;
              for (const Eu of Ru) try {
                uu(Eu())
              } catch (yu) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", yu)
              }
            }), 0);
            return () => {
              clearTimeout(Ru), eu = !1, ku = null
            }
          }
        }
      },
      su = {
        localPos() {
          const uu = (0, Xu.i)();
          if (null === uu) return Iu;
          const Ru = uu.api.apiView;
          for (let yu = 0; yu < 3; yu++) Gu[yu] = Ju.v.localPos(Ru, 0, yu);
          return Gu
        },
        targetedBlockPos() {
          const uu = (0, Xu.i)();
          if (null === uu || Ju.v.targetBlockId(uu.api.apiView, 0) === Ju.ad) return null;
          for (let Ru = 0; Ru < 3; Ru++) Uu[Ru] = Ju.v.targetBlock(uu.api.apiView, 0, Ru);
          return Uu
        }
      }
  },
  38760: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      constructor() {
        this.members = new Map
      }
      apply(uu) {
        const Ru = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Eu of uu.SE) {
          let uu = this.members.get(Eu.pE);
          if (uu || (uu = {
              name: null,
              settings: {}
            }, this.members.set(Eu.pE, uu), Ru.added.push(Eu.pE)), null !== Eu.TE && (uu.name = Eu.TE), null !== Eu.WE || Eu.jE.length > 0) {
            const yu = null === Eu.WE ? {} : JSON.parse(Eu.WE);
            Object.assign(uu.settings, yu);
            for (const Ru of Eu.jE) delete uu.settings[Ru], yu[Ru] = void 0;
            Ru.settingChanges.push({
              playerId: Eu.pE,
              settings: yu
            })
          }
        }
        for (const Eu of uu.HE) {
          const uu = this.members.get(Eu);
          var yu;
          if (uu) this.members.delete(Eu), Ru.removed.push({
            playerId: Eu,
            name: null !== (yu = uu.name) && void 0 !== yu ? yu : void 0
          })
        }
        return Ru
      }
      has(uu) {
        return this.members.has(uu)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(uu) {
        var Ru, yu;
        return null !== (Ru = null === (yu = this.members.get(uu)) || void 0 === yu ? void 0 : yu.name) && void 0 !== Ru ? Ru : void 0
      }
      getSettings(uu) {
        var Ru;
        return null === (Ru = this.members.get(uu)) || void 0 === Ru ? void 0 : Ru.settings
      }
      getSetting(uu, Ru) {
        var yu;
        return null === (yu = this.members.get(uu)) || void 0 === yu ? void 0 : yu.settings[Ru]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);