export const id = 239;
export const ids = [239];
export const modules = {
  40375: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      f: () => OT
    });
    var lT = cT(1964);
    let MT = !1;

    function KT() {
      MT = !0
    }

    function OT() {
      MT && (MT = !1, (0, lT.b)())
    }
  },
  40369: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT,
      g: () => KT,
      k: () => yT
    });
    var lT = cT(40204),
      MT = cT(40215);

    function KT(TT) {
      if (TT.queries.drawCensus() < lT.Kb.BYTES) return null;
      const kT = TT.memoryData(TT.scratch(), lT.Kb.BYTES, 4, "the draw census");
      return null === kT ? null : {
        terrainOpaque: lT.Kb.terrainOpaque(kT, 0),
        terrainTransparent: lT.Kb.terrainTransparent(kT, 0),
        terrainPack: lT.Kb.terrainPack(kT, 0),
        earthSky: lT.Kb.earthSky(kT, 0),
        skyMeshes: lT.Kb.skyMeshes(kT, 0),
        regular: lT.Kb.regular(kT, 0),
        thin: lT.Kb.thin(kT, 0),
        line: lT.Kb.line(kT, 0),
        text: lT.Kb.text(kT, 0),
        particles: lT.Kb.particles(kT, 0),
        terrainParts: lT.Kb.terrainParts(kT, 0),
        terrainCompiling: lT.Kb.terrainCompiling(kT, 0)
      }
    }

    function OT(TT) {
      const {
        terrainOpaque: kT,
        terrainTransparent: cT,
        earthSky: lT,
        skyMeshes: MT,
        regular: KT,
        thin: OT,
        line: yT,
        text: fT,
        particles: xT
      } = TT;
      return kT + cT + lT + MT + KT + OT + yT + fT + xT
    }

    function yT() {
      const TT = (0, MT.g)();
      return !0 === (null === TT || void 0 === TT ? void 0 : TT.isCoreRunning) ? function(TT) {
        const kT = KT(TT);
        if (null === kT) return [];
        const {
          terrainOpaque: cT,
          terrainTransparent: lT,
          terrainPack: MT,
          earthSky: yT,
          skyMeshes: fT,
          regular: xT,
          thin: IT,
          line: AT,
          text: CT,
          particles: jT
        } = kT;
        return [{
          label: "Drawn",
          value: `${OT(kT)}`
        }, {
          label: "Terrain",
          value: `${cT} opaque / ${lT} transparent (${MT} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${xT} / ${IT}`
        }, {
          label: "Text / Lines",
          value: `${CT} / ${AT}`
        }, {
          label: "Sky / Particles",
          value: `${yT+fT} / ${jT}`
        }]
      }(TT.api) : []
    }
  },
  40329: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => vT,
      f: () => CT,
      h: () => jT
    });
    var lT = cT(1967),
      MT = cT(1298),
      KT = cT(40215),
      OT = cT(40239),
      yT = cT(40246),
      fT = cT(40264);
    const xT = new MT.e;
    let IT = !1;

    function AT(TT) {
      const kT = (0, KT.g)();
      return null !== kT && +TT === kT.api.localId
    }

    function CT() {
      IT || (IT = !0, (0, fT.m)(OT.n, (TT => {
        var kT, cT;
        const lT = (0, yT.e)(OT.n, TT);
        if (!(0, yT.b)(lT)) return;
        const MT = lT;
        AT(MT.tT) && jT(MT.hT, {
          icon: MT.QT,
          level: MT.DT,
          displayName: null !== (kT = MT.NT) && void 0 !== kT ? kT : null,
          durationMs: null !== (cT = MT.ST) && void 0 !== cT ? cT : null
        })
      })), (0, fT.m)(OT.U, (TT => {
        const kT = (0, yT.e)(OT.U, TT);
        if (!(0, yT.b)(kT)) return;
        const cT = kT;
        AT(cT.tT) && lT.c.remove(cT.hT)
      })), (0, fT.h)((() => {
        lT.c.clear()
      })))
    }

    function jT(TT, kT) {
      lT.c.update(TT, kT), xT.forEach((kT => {
        kT(TT)
      }))
    }
    const vT = {
      localEffectUpdated: {
        watch: TT => xT.add(TT)
      }
    }
  },
  40335: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT
    });
    var lT = cT(4769),
      MT = cT(4761),
      KT = cT(40254),
      OT = cT(40264);
    const yT = new Set(lT.D),
      fT = lT.D.map((TT => (new TextEncoder).encode(TT))),
      xT = new Map;

    function IT(TT, kT) {
      var cT;
      return null === (cT = xT.get(TT)) || void 0 === cT ? void 0 : cT[kT]
    }(0, OT.m)(lT.Xb.NewOtherEntitySettings, (TT => {
      TT.payloadKind === MT.ac.Msgpack && fT.some((kT => function(TT, kT) {
        const cT = kT[0];
        for (let lT = TT.indexOf(cT); - 1 !== lT && lT + kT.length <= TT.length; lT = TT.indexOf(cT, lT + 1)) {
          let cT = 1;
          for (; cT < kT.length && TT[lT + cT] === kT[cT];) cT++;
          if (cT === kT.length) return !0
        }
        return !1
      }(TT.payload, kT))) && function(TT) {
        if (null === TT || "object" !== typeof TT || null === TT.settings || "object" !== typeof TT.settings) return;
        const kT = String(TT.eId),
          cT = TT.settings;
        let lT = xT.get(kT);
        for (const MT in cT) {
          if (!yT.has(MT)) continue;
          const TT = cT[MT];
          null === TT || void 0 === TT ? lT && delete lT[MT] : (lT ??= {}, lT[MT] = TT)
        }
        lT && xT.set(kT, lT)
      }((0, KT.c)(TT.payload))
    })), (0, OT.h)((() => {
      xT.clear()
    }))
  },
  40325: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => jT,
      h: () => xT,
      j: () => AT
    });
    var lT = cT(38832),
      MT = cT(1960),
      KT = cT(1298),
      OT = cT(40239),
      yT = cT(40246),
      fT = cT(40264);
    const xT = new lT.d;
    let IT = {};

    function AT(TT) {
      return IT[TT]
    }
    const CT = new KT.e;

    function jT(TT) {
      return CT.add(TT)
    }

    function vT(TT) {
      CT.callEach(TT, "a roster listener")
    }(0, fT.m)(OT.ib, (TT => {
      const kT = (0, yT.e)(OT.ib, TT);
      if (void 0 === kT) return;
      const cT = kT.yk.some((TT => {
          let {
            fk: kT,
            xk: cT
          } = TT;
          return null !== cT && xT.has(kT) && xT.getName(kT) !== cT
        })),
        {
          added: lT,
          removed: KT,
          settingChanges: fT
        } = xT.apply(kT),
        IT = new Set;
      for (const MT of fT)
        for (const TT in MT.settings) IT.add(TT);
      const AT = cT || lT.length > 0 || KT.length > 0;
      (AT || IT.has("hideNameSeed")) && function() {
        const TT = new Map;
        for (const kT of xT.ids()) {
          const cT = xT.getName(kT),
            lT = xT.getSetting(kT, "hideNameSeed");
          void 0 !== cT && void 0 !== lT && null !== lT && TT.set(cT, lT)
        }
        MT.c.replaceAll(TT)
      }(), vT({
        kind: "roster",
        members: AT,
        settings: IT
      })
    })), (0, fT.m)(OT.Q, (TT => {
      const kT = (0, yT.e)(OT.Q, TT);
      if (void 0 !== kT) {
        for (const {
            Nc: TT,
            Qc: cT,
            Sc: lT
          }
          of kT) IT[TT] = {
          ...IT[TT],
          [cT]: lT
        };
        vT({
          kind: "cosmetics",
          updates: kT
        })
      }
    })), (0, fT.h)((() => {
      xT.clear(), IT = {}, MT.c.clear(), vT({
        kind: "reset"
      })
    })), (0, fT.l)((() => {
      xT.clear(), vT({
        kind: "reset"
      })
    }))
  },
  40356: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => bT,
      h: () => hT,
      i: () => HT,
      j: () => eT
    });
    var lT = cT(1279),
      MT = cT(606),
      KT = cT(118),
      OT = cT(4769),
      yT = cT(40204),
      fT = cT(40230),
      xT = cT(40215),
      IT = cT(40335),
      AT = cT(40325),
      CT = cT(40246),
      jT = cT(40264);

    function vT(TT) {
      let {
        deadEId: kT,
        killerEId: cT,
        killerLifeformType: lT,
        withItem: MT,
        killstreak: KT
      } = TT;
      return {
        killer: DT({
          eId: cT,
          lifeformType: lT
        }),
        victim: DT({
          eId: kT
        }),
        withItem: MT,
        killstreak: KT
      }
    }

    function tT(TT) {
      let {
        killer: kT,
        victim: cT,
        withItem: lT
      } = TT;
      return {
        killer: DT(kT),
        victim: DT(cT),
        withItem: lT,
        killstreak: 0
      }
    }

    function hT(TT) {
      PT && mT((() => "killed" === TT.kind ? vT(TT.body) : tT(TT.body)))
    }
    const NT = "#2727f1",
      QT = "#912c2c";

    function ST(TT, kT) {
      var cT;
      return AT.h.has(TT) ? null === (cT = AT.h.getSettings(TT)) || void 0 === cT ? void 0 : cT[kT] : (0, IT.e)(TT, kT)
    }

    function DT(TT) {
      var kT, cT, OT, yT, IT;
      let {
        eId: CT,
        name: jT,
        colour: vT,
        lifeformType: tT
      } = TT;
      if (void 0 === CT || null === CT || "" === CT) {
        const TT = jT || null;
        return {
          id: null,
          shownName: TT,
          lifeformType: null === TT && null !== tT && void 0 !== tT ? tT : null,
          colour: vT || null,
          local: !1,
          realName: null
        }
      }
      const hT = String(CT),
        DT = null === (kT = (0, xT.g)()) || void 0 === kT ? void 0 : kT.api,
        aT = void 0 !== DT && String(DT.localId) === hT,
        FT = null !== (cT = AT.h.getName(hT)) && void 0 !== cT ? cT : null,
        rT = null !== (OT = ST(hT, "hideNameSeed")) && void 0 !== OT ? OT : null;
      let PT = null === FT ? null : (0, lT.c)(FT, !KT.featureFlags.canSeeRealPlayerNames, rT) || null,
        wT = null;
      if (null === PT && void 0 !== DT) {
        const TT = DT.getEntityType(hT);
        "Player" !== TT && (PT = (0, fT.j)(DT, +hT) || null), wT = MT.i.includes(TT) ? TT : null
      }
      return {
        id: hT,
        shownName: PT,
        lifeformType: null === PT && null !== (yT = null !== (IT = wT) && void 0 !== IT ? IT : tT) && void 0 !== yT ? yT : null,
        colour: vT || ST(hT, "killfeedColour") || (aT ? NT : QT),
        local: aT,
        realName: FT
      }
    }
    const aT = 32;
    let FT = [],
      rT = null,
      PT = !1,
      wT = !1;

    function mT(TT) {
      null === rT ? (FT.length === aT && FT.shift(), FT.push(TT)) : rT(TT())
    }

    function bT() {
      wT || (wT = !0, (0, jT.m)(OT.Xb.PlayerKilled, (TT => {
        const kT = (0, CT.g)(TT);
        (0, CT.b)(kT) && mT((() => vT(kT)))
      })), (0, jT.m)(OT.Xb.CustomKillfeed, (TT => {
        const kT = (0, CT.g)(TT);
        (0, CT.b)(kT) && (0, CT.b)(kT.killer) && (0, CT.b)(kT.victim) && mT((() => tT(kT)))
      })), (0, jT.h)((() => {
        FT = []
      })))
    }
    const zT = Object.freeze([0, 0, 0]),
      JT = [0, 0, 0],
      oT = [0, 0, 0],
      HT = {
        kill: {
          watch(TT) {
            if (PT = !0, 0 === FT.length) return rT = TT, () => {
              PT = !1, rT = null
            };
            const kT = setTimeout((() => {
              const kT = FT;
              FT = [], rT = TT;
              for (const lT of kT) try {
                TT(lT())
              } catch (cT) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", cT)
              }
            }), 0);
            return () => {
              clearTimeout(kT), PT = !1, rT = null
            }
          }
        }
      },
      eT = {
        localPos() {
          const TT = (0, xT.g)();
          if (null === TT) return zT;
          const kT = TT.api.apiView;
          for (let cT = 0; cT < 3; cT++) JT[cT] = yT.A.localPos(kT, 0, cT);
          return JT
        },
        targetedBlockPos() {
          const TT = (0, xT.g)();
          if (null === TT || yT.A.targetBlockId(TT.api.apiView, 0) === yT.dd) return null;
          for (let kT = 0; kT < 3; kT++) oT[kT] = yT.A.targetBlock(TT.api.apiView, 0, kT);
          return oT
        }
      }
  },
  38832: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    class lT {
      constructor() {
        this.members = new Map
      }
      apply(TT) {
        const kT = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const lT of TT.yk) {
          let TT = this.members.get(lT.fk);
          if (TT || (TT = {
              name: null,
              settings: {}
            }, this.members.set(lT.fk, TT), kT.added.push(lT.fk)), null !== lT.xk && (TT.name = lT.xk), null !== lT.Ik || lT.Ak.length > 0) {
            const cT = null === lT.Ik ? {} : JSON.parse(lT.Ik);
            Object.assign(TT.settings, cT);
            for (const kT of lT.Ak) delete TT.settings[kT], cT[kT] = void 0;
            kT.settingChanges.push({
              playerId: lT.fk,
              settings: cT
            })
          }
        }
        for (const lT of TT.Ck) {
          const TT = this.members.get(lT);
          var cT;
          if (TT) this.members.delete(lT), kT.removed.push({
            playerId: lT,
            name: null !== (cT = TT.name) && void 0 !== cT ? cT : void 0
          })
        }
        return kT
      }
      has(TT) {
        return this.members.has(TT)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(TT) {
        var kT, cT;
        return null !== (kT = null === (cT = this.members.get(TT)) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : void 0
      }
      getSettings(TT) {
        var kT;
        return null === (kT = this.members.get(TT)) || void 0 === kT ? void 0 : kT.settings
      }
      getSetting(TT, kT) {
        var cT;
        return null === (cT = this.members.get(TT)) || void 0 === cT ? void 0 : cT.settings[kT]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);