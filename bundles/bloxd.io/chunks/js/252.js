export const id = 252;
export const ids = [252];
export const modules = {
  41123: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => IB
    });
    var QB = zB(1995);
    let nB = !1;

    function dB() {
      nB = !0
    }

    function IB() {
      nB && (nB = !1, (0, QB.e)())
    }
  },
  41117: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      e: () => dB,
      h: () => NB
    });
    var QB = zB(40682),
      nB = zB(40695);

    function dB(BB) {
      if (BB.queries.drawCensus() < QB.Kb.BYTES) return null;
      const jB = BB.memoryData(BB.scratch(), QB.Kb.BYTES, 4, "the draw census");
      return null === jB ? null : {
        terrainOpaque: QB.Kb.terrainOpaque(jB, 0),
        terrainTransparent: QB.Kb.terrainTransparent(jB, 0),
        terrainPack: QB.Kb.terrainPack(jB, 0),
        earthSky: QB.Kb.earthSky(jB, 0),
        skyMeshes: QB.Kb.skyMeshes(jB, 0),
        regular: QB.Kb.regular(jB, 0),
        thin: QB.Kb.thin(jB, 0),
        line: QB.Kb.line(jB, 0),
        text: QB.Kb.text(jB, 0),
        particles: QB.Kb.particles(jB, 0),
        terrainParts: QB.Kb.terrainParts(jB, 0),
        terrainCompiling: QB.Kb.terrainCompiling(jB, 0),
        ringCopiesMax: QB.Kb.ringCopiesMax(jB, 0),
        ringBusyWrites: QB.Kb.ringBusyWrites(jB, 0)
      }
    }

    function IB(BB) {
      const {
        terrainOpaque: jB,
        terrainTransparent: zB,
        earthSky: QB,
        skyMeshes: nB,
        regular: dB,
        thin: IB,
        line: NB,
        text: uB,
        particles: UB
      } = BB;
      return jB + zB + QB + nB + dB + IB + NB + uB + UB
    }

    function NB() {
      const BB = (0, nB.g)();
      return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
        const jB = dB(BB);
        if (null === jB) return [];
        const {
          terrainOpaque: zB,
          terrainTransparent: QB,
          terrainPack: nB,
          earthSky: NB,
          skyMeshes: uB,
          regular: UB,
          thin: aB,
          line: pB,
          text: rB,
          particles: sB
        } = jB;
        return [{
          label: "Drawn",
          value: `${IB(jB)}`
        }, {
          label: "Terrain",
          value: `${zB} opaque / ${QB} transparent (${nB} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${UB} / ${aB}`
        }, {
          label: "Text / Lines",
          value: `${rB} / ${pB}`
        }, {
          label: "Sky / Particles",
          value: `${NB+uB} / ${sB}`
        }]
      }(BB.api) : []
    }
  },
  41096: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => JB,
      i: () => rB,
      k: () => sB
    });
    var QB = zB(2002),
      nB = zB(1319),
      dB = zB(40695),
      IB = zB(40709),
      NB = zB(40713),
      uB = zB(40725);
    const UB = new nB.c;
    let aB = !1;

    function pB(BB) {
      const jB = (0, dB.g)();
      return null !== jB && +BB === jB.api.localId
    }

    function rB() {
      aB || (aB = !0, (0, uB.l)(IB.j, (BB => {
        var jB, zB;
        const QB = (0, NB.d)(IB.j, BB);
        if (!(0, NB.c)(QB)) return;
        const nB = QB;
        pB(nB.VB) && sB(nB.hB, {
          icon: nB.ej,
          level: nB.wj,
          displayName: null !== (jB = nB.XB) && void 0 !== jB ? jB : null,
          durationMs: null !== (zB = nB.lj) && void 0 !== zB ? zB : null
        })
      })), (0, uB.l)(IB.M, (BB => {
        const jB = (0, NB.d)(IB.M, BB);
        if (!(0, NB.c)(jB)) return;
        const zB = jB;
        pB(zB.VB) && QB.c.remove(zB.hB)
      })), (0, uB.e)((() => {
        QB.c.clear()
      })))
    }

    function sB(BB, jB) {
      QB.c.update(BB, jB), UB.forEach((jB => {
        jB(BB)
      }))
    }
    const JB = {
      localEffectUpdated: {
        watch: BB => UB.add(BB)
      }
    }
  },
  41099: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB
    });
    var QB = zB(4893),
      nB = zB(4887),
      dB = zB(40718),
      IB = zB(40725);
    const NB = new Set(QB.E),
      uB = QB.E.map((BB => (new TextEncoder).encode(BB))),
      UB = new Map;

    function aB(BB, jB) {
      var zB;
      return null === (zB = UB.get(BB)) || void 0 === zB ? void 0 : zB[jB]
    }(0, IB.l)(QB.Wb.NewOtherEntitySettings, (BB => {
      BB.payloadKind === nB.fc.Msgpack && uB.some((jB => function(BB, jB) {
        const zB = jB[0];
        for (let QB = BB.indexOf(zB); - 1 !== QB && QB + jB.length <= BB.length; QB = BB.indexOf(zB, QB + 1)) {
          let zB = 1;
          for (; zB < jB.length && BB[QB + zB] === jB[zB];) zB++;
          if (zB === jB.length) return !0
        }
        return !1
      }(BB.payload, jB))) && function(BB) {
        if (null === BB || "object" !== typeof BB || null === BB.settings || "object" !== typeof BB.settings) return;
        const jB = String(BB.eId),
          zB = BB.settings;
        let QB = UB.get(jB);
        for (const nB in zB) {
          if (!NB.has(nB)) continue;
          const BB = zB[nB];
          null === BB || void 0 === BB ? QB && delete QB[nB] : (QB ??= {}, QB[nB] = BB)
        }
        QB && UB.set(jB, QB)
      }((0, dB.c)(BB.payload))
    })), (0, IB.e)((() => {
      UB.clear()
    }))
  },
  41090: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => sB,
      e: () => UB,
      i: () => pB
    });
    var QB = zB(39117),
      nB = zB(1991),
      dB = zB(1319),
      IB = zB(40709),
      NB = zB(40713),
      uB = zB(40725);
    const UB = new QB.c;
    let aB = {};

    function pB(BB) {
      return aB[BB]
    }
    const rB = new dB.c;

    function sB(BB) {
      return rB.add(BB)
    }

    function JB(BB) {
      rB.callEach(BB, "a roster listener")
    }(0, uB.l)(IB.X, (BB => {
      const jB = (0, NB.d)(IB.X, BB);
      if (void 0 === jB) return;
      const zB = jB.ZB.some((BB => {
          let {
            AB: jB,
            TB: zB
          } = BB;
          return null !== zB && UB.has(jB) && UB.getName(jB) !== zB
        })),
        {
          added: QB,
          removed: dB,
          settingChanges: uB
        } = UB.apply(jB),
        aB = new Set;
      for (const nB of uB)
        for (const BB in nB.settings) aB.add(BB);
      const pB = zB || QB.length > 0 || dB.length > 0;
      (pB || aB.has("hideNameSeed")) && function() {
        const BB = new Map;
        for (const jB of UB.ids()) {
          const zB = UB.getName(jB),
            QB = UB.getSetting(jB, "hideNameSeed");
          void 0 !== zB && void 0 !== QB && null !== QB && BB.set(zB, QB)
        }
        nB.b.replaceAll(BB)
      }(), JB({
        kind: "roster",
        members: pB,
        settings: aB
      })
    })), (0, uB.l)(IB.I, (BB => {
      const jB = (0, NB.d)(IB.I, BB);
      if (void 0 !== jB) {
        for (const {
            Pd: BB,
            Wd: zB,
            ld: QB
          }
          of jB) aB[BB] = {
          ...aB[BB],
          [zB]: QB
        };
        JB({
          kind: "cosmetics",
          updates: jB
        })
      }
    })), (0, uB.e)((() => {
      UB.clear(), aB = {}, nB.b.clear(), JB({
        kind: "reset"
      })
    })), (0, uB.h)((() => {
      UB.clear(), JB({
        kind: "reset"
      })
    }))
  },
  41108: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => fB,
      e: () => yB,
      g: () => FB,
      j: () => YB
    });
    var QB = zB(1297),
      nB = zB(644),
      dB = zB(106),
      IB = zB(4893),
      NB = zB(40682),
      uB = zB(40705),
      UB = zB(40695),
      aB = zB(41099),
      pB = zB(41090),
      rB = zB(40713),
      sB = zB(40725);

    function JB(BB) {
      let {
        deadEId: jB,
        killerEId: zB,
        killerLifeformType: QB,
        withItem: nB,
        killstreak: dB
      } = BB;
      return {
        killer: gB({
          eId: zB,
          lifeformType: QB
        }),
        victim: gB({
          eId: jB
        }),
        withItem: nB,
        killstreak: dB
      }
    }

    function mB(BB) {
      let {
        killer: jB,
        victim: zB,
        withItem: QB
      } = BB;
      return {
        killer: gB(jB),
        victim: gB(zB),
        withItem: QB,
        killstreak: 0
      }
    }

    function yB(BB) {
      EB && qB((() => "killed" === BB.kind ? JB(BB.body) : mB(BB.body)))
    }
    const kB = "#2727f1",
      GB = "#912c2c";

    function LB(BB, jB) {
      var zB;
      return pB.e.has(BB) ? null === (zB = pB.e.getSettings(BB)) || void 0 === zB ? void 0 : zB[jB] : (0, aB.c)(BB, jB)
    }

    function gB(BB) {
      var jB, zB, IB, NB, aB;
      let {
        eId: rB,
        name: sB,
        colour: JB,
        lifeformType: mB
      } = BB;
      if (void 0 === rB || null === rB || "" === rB) {
        const BB = sB || null;
        return {
          id: null,
          shownName: BB,
          lifeformType: null === BB && null !== mB && void 0 !== mB ? mB : null,
          colour: JB || null,
          local: !1,
          realName: null
        }
      }
      const yB = String(rB),
        gB = null === (jB = (0, UB.g)()) || void 0 === jB ? void 0 : jB.api,
        tB = void 0 !== gB && String(gB.localId) === yB,
        SB = null !== (zB = pB.e.getName(yB)) && void 0 !== zB ? zB : null,
        MB = null !== (IB = LB(yB, "hideNameSeed")) && void 0 !== IB ? IB : null;
      let EB = null === SB ? null : (0, QB.d)(SB, !dB.featureFlags.canSeeRealPlayerNames, MB) || null,
        iB = null;
      if (null === EB && void 0 !== gB) {
        const BB = gB.getEntityType(yB);
        "Player" !== BB && (EB = (0, uB.g)(gB, +yB) || null), iB = nB.i.includes(BB) ? BB : null
      }
      return {
        id: yB,
        shownName: EB,
        lifeformType: null === EB && null !== (NB = null !== (aB = iB) && void 0 !== aB ? aB : mB) && void 0 !== NB ? NB : null,
        colour: JB || LB(yB, "killfeedColour") || (tB ? kB : GB),
        local: tB,
        realName: SB
      }
    }
    const tB = 32;
    let SB = [],
      MB = null,
      EB = !1,
      iB = !1;

    function qB(BB) {
      null === MB ? (SB.length === tB && SB.shift(), SB.push(BB)) : MB(BB())
    }

    function fB() {
      iB || (iB = !0, (0, sB.l)(IB.Wb.PlayerKilled, (BB => {
        const jB = (0, rB.e)(BB);
        (0, rB.c)(jB) && qB((() => JB(jB)))
      })), (0, sB.l)(IB.Wb.CustomKillfeed, (BB => {
        const jB = (0, rB.e)(BB);
        (0, rB.c)(jB) && (0, rB.c)(jB.killer) && (0, rB.c)(jB.victim) && qB((() => mB(jB)))
      })), (0, sB.e)((() => {
        SB = []
      })))
    }
    const oB = Object.freeze([0, 0, 0]),
      HB = [0, 0, 0],
      DB = [0, 0, 0],
      FB = {
        kill: {
          watch(BB) {
            if (EB = !0, 0 === SB.length) return MB = BB, () => {
              EB = !1, MB = null
            };
            const jB = setTimeout((() => {
              const jB = SB;
              SB = [], MB = BB;
              for (const QB of jB) try {
                BB(QB())
              } catch (zB) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", zB)
              }
            }), 0);
            return () => {
              clearTimeout(jB), EB = !1, MB = null
            }
          }
        }
      },
      YB = {
        localPos() {
          const BB = (0, UB.g)();
          if (null === BB) return oB;
          const jB = BB.api.apiView;
          for (let zB = 0; zB < 3; zB++) HB[zB] = NB.w.localPos(jB, 0, zB);
          return HB
        },
        targetedBlockPos() {
          const BB = (0, UB.g)();
          if (null === BB || NB.w.targetBlockId(BB.api.apiView, 0) === NB.ld) return null;
          for (let jB = 0; jB < 3; jB++) DB[jB] = NB.w.targetBlock(BB.api.apiView, 0, jB);
          return DB
        }
      }
  },
  39117: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const jB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const QB of BB.ZB) {
          let BB = this.members.get(QB.AB);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(QB.AB, BB), jB.added.push(QB.AB)), null !== QB.TB && (BB.name = QB.TB), null !== QB.PB || QB.WB.length > 0) {
            const zB = null === QB.PB ? {} : JSON.parse(QB.PB);
            Object.assign(BB.settings, zB);
            for (const jB of QB.WB) delete BB.settings[jB], zB[jB] = void 0;
            jB.settingChanges.push({
              playerId: QB.AB,
              settings: zB
            })
          }
        }
        for (const QB of BB.eB) {
          const BB = this.members.get(QB);
          var zB;
          if (BB) this.members.delete(QB), jB.removed.push({
            playerId: QB,
            name: null !== (zB = BB.name) && void 0 !== zB ? zB : void 0
          })
        }
        return jB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var jB, zB;
        return null !== (jB = null === (zB = this.members.get(BB)) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : void 0
      }
      getSettings(BB) {
        var jB;
        return null === (jB = this.members.get(BB)) || void 0 === jB ? void 0 : jB.settings
      }
      getSetting(BB, jB) {
        var zB;
        return null === (zB = this.members.get(BB)) || void 0 === zB ? void 0 : zB.settings[jB]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);