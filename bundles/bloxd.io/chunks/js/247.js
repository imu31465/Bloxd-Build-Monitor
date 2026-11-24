export const id = 247;
export const ids = [247];
export const modules = {
  41055: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      d: () => xS
    });
    var tS = gS(2073);
    let bS = !1;

    function XS() {
      bS = !0
    }

    function xS() {
      bS && (bS = !1, (0, tS.c)())
    }
  },
  41053: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      f: () => XS,
      i: () => NS
    });
    var tS = gS(40612),
      bS = gS(40625);

    function XS(SS) {
      if (SS.queries.drawCensus() < tS.kb.BYTES) return null;
      const HS = SS.memoryData(SS.scratch(), tS.kb.BYTES, 4, "the draw census");
      return null === HS ? null : {
        terrainOpaque: tS.kb.terrainOpaque(HS, 0),
        terrainTransparent: tS.kb.terrainTransparent(HS, 0),
        terrainPack: tS.kb.terrainPack(HS, 0),
        earthSky: tS.kb.earthSky(HS, 0),
        skyMeshes: tS.kb.skyMeshes(HS, 0),
        regular: tS.kb.regular(HS, 0),
        thin: tS.kb.thin(HS, 0),
        line: tS.kb.line(HS, 0),
        text: tS.kb.text(HS, 0),
        particles: tS.kb.particles(HS, 0),
        terrainParts: tS.kb.terrainParts(HS, 0),
        terrainCompiling: tS.kb.terrainCompiling(HS, 0),
        ringCopiesMax: tS.kb.ringCopiesMax(HS, 0),
        ringBusyWrites: tS.kb.ringBusyWrites(HS, 0)
      }
    }

    function xS(SS) {
      const {
        terrainOpaque: HS,
        terrainTransparent: gS,
        earthSky: tS,
        skyMeshes: bS,
        regular: XS,
        thin: xS,
        line: NS,
        text: qS,
        particles: uS
      } = SS;
      return HS + gS + tS + bS + XS + xS + NS + qS + uS
    }

    function NS() {
      const SS = (0, bS.h)();
      return !0 === (null === SS || void 0 === SS ? void 0 : SS.isCoreRunning) ? function(SS) {
        const HS = XS(SS);
        if (null === HS) return [];
        const {
          terrainOpaque: gS,
          terrainTransparent: tS,
          terrainPack: bS,
          earthSky: NS,
          skyMeshes: qS,
          regular: uS,
          thin: IS,
          line: fS,
          text: kS,
          particles: aS
        } = HS;
        return [{
          label: "Drawn",
          value: `${xS(HS)}`
        }, {
          label: "Terrain",
          value: `${gS} opaque / ${tS} transparent (${bS} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${uS} / ${IS}`
        }, {
          label: "Text / Lines",
          value: `${kS} / ${fS}`
        }, {
          label: "Sky / Particles",
          value: `${NS+qS} / ${aS}`
        }]
      }(SS.api) : []
    }
  },
  41042: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => KS,
      c: () => kS,
      f: () => aS
    });
    var tS = gS(2077),
      bS = gS(1371),
      XS = gS(40625),
      xS = gS(40649),
      NS = gS(40655),
      qS = gS(40666);
    const uS = new bS.d;
    let IS = !1;

    function fS(SS) {
      const HS = (0, XS.h)();
      return null !== HS && +SS === HS.api.localId
    }

    function kS() {
      IS || (IS = !0, (0, qS.l)(xS.s, (SS => {
        var HS, gS;
        const tS = (0, NS.e)(xS.s, SS);
        if (!(0, NS.b)(tS)) return;
        const bS = tS;
        fS(bS.Kt) && aS(bS.jt, {
          icon: bS.Ob,
          level: bS.Eb,
          displayName: null !== (HS = bS.Gt) && void 0 !== HS ? HS : null,
          durationMs: null !== (gS = bS.cb) && void 0 !== gS ? gS : null
        })
      })), (0, qS.l)(xS.X, (SS => {
        const HS = (0, NS.e)(xS.X, SS);
        if (!(0, NS.b)(HS)) return;
        const gS = HS;
        fS(gS.Kt) && tS.e.remove(gS.jt)
      })), (0, qS.f)((() => {
        tS.e.clear()
      })))
    }

    function aS(SS, HS) {
      tS.e.update(SS, HS), uS.forEach((HS => {
        HS(SS)
      }))
    }
    const KS = {
      localEffectUpdated: {
        watch: SS => uS.add(SS)
      }
    }
  },
  41046: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => IS
    });
    var tS = gS(4935),
      bS = gS(4926),
      XS = gS(40658),
      xS = gS(40666);
    const NS = new Set(tS.O),
      qS = tS.O.map((SS => (new TextEncoder).encode(SS))),
      uS = new Map;

    function IS(SS, HS) {
      var gS;
      return null === (gS = uS.get(SS)) || void 0 === gS ? void 0 : gS[HS]
    }(0, xS.l)(tS.kc.NewOtherEntitySettings, (SS => {
      SS.payloadKind === bS.xc.Msgpack && qS.some((HS => function(SS, HS) {
        const gS = HS[0];
        for (let tS = SS.indexOf(gS); - 1 !== tS && tS + HS.length <= SS.length; tS = SS.indexOf(gS, tS + 1)) {
          let gS = 1;
          for (; gS < HS.length && SS[tS + gS] === HS[gS];) gS++;
          if (gS === HS.length) return !0
        }
        return !1
      }(SS.payload, HS))) && function(SS) {
        if (null === SS || "object" !== typeof SS || null === SS.settings || "object" !== typeof SS.settings) return;
        const HS = String(SS.eId),
          gS = SS.settings;
        let tS = uS.get(HS);
        for (const bS in gS) {
          if (!NS.has(bS)) continue;
          const SS = gS[bS];
          null === SS || void 0 === SS ? tS && delete tS[bS] : (tS ??= {}, tS[bS] = SS)
        }
        tS && uS.set(HS, tS)
      }((0, XS.c)(SS.payload))
    })), (0, xS.f)((() => {
      uS.clear()
    }))
  },
  41035: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => aS,
      g: () => uS,
      j: () => fS
    });
    var tS = gS(39023),
      bS = gS(2069),
      XS = gS(1371),
      xS = gS(40649),
      NS = gS(40655),
      qS = gS(40666);
    const uS = new tS.c;
    let IS = {};

    function fS(SS) {
      return IS[SS]
    }
    const kS = new XS.d;

    function aS(SS) {
      return kS.add(SS)
    }

    function KS(SS) {
      kS.callEach(SS, "a roster listener")
    }(0, qS.l)(xS.cb, (SS => {
      const HS = (0, NS.e)(xS.cb, SS);
      if (void 0 === HS) return;
      const gS = HS.og.some((SS => {
          let {
            lg: HS,
            mg: gS
          } = SS;
          return null !== gS && uS.has(HS) && uS.getName(HS) !== gS
        })),
        {
          added: tS,
          removed: XS,
          settingChanges: qS
        } = uS.apply(HS),
        IS = new Set;
      for (const bS of qS)
        for (const SS in bS.settings) IS.add(SS);
      const fS = gS || tS.length > 0 || XS.length > 0;
      (fS || IS.has("hideNameSeed")) && function() {
        const SS = new Map;
        for (const HS of uS.ids()) {
          const gS = uS.getName(HS),
            tS = uS.getSetting(HS, "hideNameSeed");
          void 0 !== gS && void 0 !== tS && null !== tS && SS.set(gS, tS)
        }
        bS.c.replaceAll(SS)
      }(), KS({
        kind: "roster",
        members: fS,
        settings: IS
      })
    })), (0, qS.l)(xS.W, (SS => {
      const HS = (0, NS.e)(xS.W, SS);
      if (void 0 !== HS) {
        for (const {
            Dt: SS,
            wt: gS,
            ht: tS
          }
          of HS) IS[SS] = {
          ...IS[SS],
          [gS]: tS
        };
        KS({
          kind: "cosmetics",
          updates: HS
        })
      }
    })), (0, qS.f)((() => {
      uS.clear(), IS = {}, bS.c.clear(), KS({
        kind: "reset"
      })
    })), (0, qS.h)((() => {
      uS.clear(), KS({
        kind: "reset"
      })
    }))
  },
  41049: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => dS,
      e: () => GS,
      i: () => LS,
      j: () => YS
    });
    var tS = gS(1348),
      bS = gS(665),
      XS = gS(104),
      xS = gS(4935),
      NS = gS(40612),
      qS = gS(40643),
      uS = gS(40625),
      IS = gS(41046),
      fS = gS(41035),
      kS = gS(40655),
      aS = gS(40666);

    function KS(SS) {
      let {
        deadEId: HS,
        killerEId: gS,
        killerLifeformType: tS,
        withItem: bS,
        killstreak: XS
      } = SS;
      return {
        killer: QS({
          eId: gS,
          lifeformType: tS
        }),
        victim: QS({
          eId: HS
        }),
        withItem: bS,
        killstreak: XS
      }
    }

    function jS(SS) {
      let {
        killer: HS,
        victim: gS,
        withItem: tS
      } = SS;
      return {
        killer: QS(HS),
        victim: QS(gS),
        withItem: tS,
        killstreak: 0
      }
    }

    function GS(SS) {
      ZS && OS((() => "killed" === SS.kind ? KS(SS.body) : jS(SS.body)))
    }
    const CS = "#2727f1",
      nS = "#912c2c";

    function PS(SS, HS) {
      var gS;
      return fS.g.has(SS) ? null === (gS = fS.g.getSettings(SS)) || void 0 === gS ? void 0 : gS[HS] : (0, IS.b)(SS, HS)
    }

    function QS(SS) {
      var HS, gS, xS, NS, IS;
      let {
        eId: kS,
        name: aS,
        colour: KS,
        lifeformType: jS
      } = SS;
      if (void 0 === kS || null === kS || "" === kS) {
        const SS = aS || null;
        return {
          id: null,
          shownName: SS,
          lifeformType: null === SS && null !== jS && void 0 !== jS ? jS : null,
          colour: KS || null,
          local: !1,
          realName: null
        }
      }
      const GS = String(kS),
        QS = null === (HS = (0, uS.h)()) || void 0 === HS ? void 0 : HS.api,
        DS = void 0 !== QS && String(QS.localId) === GS,
        wS = null !== (gS = fS.g.getName(GS)) && void 0 !== gS ? gS : null,
        hS = null !== (xS = PS(GS, "hideNameSeed")) && void 0 !== xS ? xS : null;
      let ZS = null === wS ? null : (0, tS.d)(wS, !XS.featureFlags.canSeeRealPlayerNames, hS) || null,
        JS = null;
      if (null === ZS && void 0 !== QS) {
        const SS = QS.getEntityType(GS);
        "Player" !== SS && (ZS = (0, qS.h)(QS, +GS) || null), JS = bS.j.includes(SS) ? SS : null
      }
      return {
        id: GS,
        shownName: ZS,
        lifeformType: null === ZS && null !== (NS = null !== (IS = JS) && void 0 !== IS ? IS : jS) && void 0 !== NS ? NS : null,
        colour: KS || PS(GS, "killfeedColour") || (DS ? CS : nS),
        local: DS,
        realName: wS
      }
    }
    const DS = 32;
    let wS = [],
      hS = null,
      ZS = !1,
      JS = !1;

    function OS(SS) {
      null === hS ? (wS.length === DS && wS.shift(), wS.push(SS)) : hS(SS())
    }

    function dS() {
      JS || (JS = !0, (0, aS.l)(xS.kc.PlayerKilled, (SS => {
        const HS = (0, kS.g)(SS);
        (0, kS.b)(HS) && OS((() => KS(HS)))
      })), (0, aS.l)(xS.kc.CustomKillfeed, (SS => {
        const HS = (0, kS.g)(SS);
        (0, kS.b)(HS) && (0, kS.b)(HS.killer) && (0, kS.b)(HS.victim) && OS((() => jS(HS)))
      })), (0, aS.f)((() => {
        wS = []
      })))
    }
    const cS = Object.freeze([0, 0, 0]),
      vS = [0, 0, 0],
      ES = [0, 0, 0],
      LS = {
        kill: {
          watch(SS) {
            if (ZS = !0, 0 === wS.length) return hS = SS, () => {
              ZS = !1, hS = null
            };
            const HS = setTimeout((() => {
              const HS = wS;
              wS = [], hS = SS;
              for (const tS of HS) try {
                SS(tS())
              } catch (gS) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", gS)
              }
            }), 0);
            return () => {
              clearTimeout(HS), ZS = !1, hS = null
            }
          }
        }
      },
      YS = {
        localPos() {
          const SS = (0, uS.h)();
          if (null === SS) return cS;
          const HS = SS.api.apiView;
          for (let gS = 0; gS < 3; gS++) vS[gS] = NS.t.localPos(HS, 0, gS);
          return vS
        },
        targetedBlockPos() {
          const SS = (0, uS.h)();
          if (null === SS || NS.t.targetBlockId(SS.api.apiView, 0) === NS.Tc) return null;
          for (let HS = 0; HS < 3; HS++) ES[HS] = NS.t.targetBlock(SS.api.apiView, 0, HS);
          return ES
        }
      }
  },
  39023: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor() {
        this.members = new Map
      }
      apply(SS) {
        const HS = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const tS of SS.og) {
          let SS = this.members.get(tS.lg);
          if (SS || (SS = {
              name: null,
              settings: {}
            }, this.members.set(tS.lg, SS), HS.added.push(tS.lg)), null !== tS.mg && (SS.name = tS.mg), null !== tS.eg || tS.rg.length > 0) {
            const gS = null === tS.eg ? {} : JSON.parse(tS.eg);
            Object.assign(SS.settings, gS);
            for (const HS of tS.rg) delete SS.settings[HS], gS[HS] = void 0;
            HS.settingChanges.push({
              playerId: tS.lg,
              settings: gS
            })
          }
        }
        for (const tS of SS.St) {
          const SS = this.members.get(tS);
          var gS;
          if (SS) this.members.delete(tS), HS.removed.push({
            playerId: tS,
            name: null !== (gS = SS.name) && void 0 !== gS ? gS : void 0
          })
        }
        return HS
      }
      has(SS) {
        return this.members.has(SS)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(SS) {
        var HS, gS;
        return null !== (HS = null === (gS = this.members.get(SS)) || void 0 === gS ? void 0 : gS.name) && void 0 !== HS ? HS : void 0
      }
      getSettings(SS) {
        var HS;
        return null === (HS = this.members.get(SS)) || void 0 === HS ? void 0 : HS.settings
      }
      getSetting(SS, HS) {
        var gS;
        return null === (gS = this.members.get(SS)) || void 0 === gS ? void 0 : gS.settings[HS]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);