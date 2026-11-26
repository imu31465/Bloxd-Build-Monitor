export const id = 274;
export const ids = [274];
export const modules = {
  42048: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      e: () => oB
    });
    var YB = GB(2034);
    let DB = !1;

    function QB() {
      DB = !0
    }

    function oB() {
      DB && (DB = !1, (0, YB.b)())
    }
  },
  42045: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => QB,
      i: () => jB
    });
    var YB = GB(41579),
      DB = GB(41593);

    function QB(BB) {
      if (BB.queries.drawCensus() < YB.Cb.BYTES) return null;
      const OB = BB.memoryData(BB.scratch(), YB.Cb.BYTES, 4, "the draw census");
      return null === OB ? null : {
        terrainOpaque: YB.Cb.terrainOpaque(OB, 0),
        terrainTransparent: YB.Cb.terrainTransparent(OB, 0),
        terrainPack: YB.Cb.terrainPack(OB, 0),
        earthSky: YB.Cb.earthSky(OB, 0),
        skyMeshes: YB.Cb.skyMeshes(OB, 0),
        regular: YB.Cb.regular(OB, 0),
        thin: YB.Cb.thin(OB, 0),
        line: YB.Cb.line(OB, 0),
        text: YB.Cb.text(OB, 0),
        particles: YB.Cb.particles(OB, 0),
        terrainParts: YB.Cb.terrainParts(OB, 0),
        terrainCompiling: YB.Cb.terrainCompiling(OB, 0),
        ringCopiesMax: YB.Cb.ringCopiesMax(OB, 0),
        ringBusyWrites: YB.Cb.ringBusyWrites(OB, 0)
      }
    }

    function oB(BB) {
      const {
        terrainOpaque: OB,
        terrainTransparent: GB,
        earthSky: YB,
        skyMeshes: DB,
        regular: QB,
        thin: oB,
        line: jB,
        text: yB,
        particles: JB
      } = BB;
      return OB + GB + YB + DB + QB + oB + jB + yB + JB
    }

    function jB() {
      const BB = (0, DB.j)();
      return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
        const OB = QB(BB);
        if (null === OB) return [];
        const {
          terrainOpaque: GB,
          terrainTransparent: YB,
          terrainPack: DB,
          earthSky: jB,
          skyMeshes: yB,
          regular: JB,
          thin: MB,
          line: PB,
          text: zB,
          particles: lB
        } = OB;
        return [{
          label: "Drawn",
          value: `${oB(OB)}`
        }, {
          label: "Terrain",
          value: `${GB} opaque / ${YB} transparent (${DB} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${JB} / ${MB}`
        }, {
          label: "Text / Lines",
          value: `${zB} / ${PB}`
        }, {
          label: "Sky / Particles",
          value: `${jB+yB} / ${lB}`
        }]
      }(BB.api) : []
    }
  },
  42031: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => pB,
      h: () => zB,
      k: () => lB
    });
    var YB = GB(2038),
      DB = GB(1296),
      QB = GB(41593),
      oB = GB(41616),
      jB = GB(41624),
      yB = GB(41637);
    const JB = new DB.d;
    let MB = !1;

    function PB(BB) {
      const OB = (0, QB.j)();
      return null !== OB && +BB === OB.api.localId
    }

    function zB() {
      MB || (MB = !0, (0, yB.g)(oB.n, (BB => {
        var OB, GB;
        const YB = (0, jB.h)(oB.n, BB);
        if (!(0, jB.e)(YB)) return;
        const DB = YB;
        PB(DB.pY) && lB(DB.qY, {
          icon: DB.NY,
          level: DB.WY,
          displayName: null !== (OB = DB.ZY) && void 0 !== OB ? OB : null,
          durationMs: null !== (GB = DB.RY) && void 0 !== GB ? GB : null
        })
      })), (0, yB.g)(oB.P, (BB => {
        const OB = (0, jB.h)(oB.P, BB);
        if (!(0, jB.e)(OB)) return;
        const GB = OB;
        PB(GB.pY) && YB.c.remove(GB.qY)
      })), (0, yB.d)((() => {
        YB.c.clear()
      })))
    }

    function lB(BB, OB) {
      YB.c.update(BB, OB), JB.forEach((OB => {
        OB(BB)
      }))
    }
    const pB = {
      localEffectUpdated: {
        watch: BB => JB.add(BB)
      }
    }
  },
  42039: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB
    });
    var YB = GB(5287),
      DB = GB(5281),
      QB = GB(41630),
      oB = GB(41637);
    const jB = new Set(YB.R),
      yB = YB.R.map((BB => (new TextEncoder).encode(BB))),
      JB = new Map;

    function MB(BB, OB) {
      var GB;
      return null === (GB = JB.get(BB)) || void 0 === GB ? void 0 : GB[OB]
    }(0, oB.g)(YB.oc.NewOtherEntitySettings, (BB => {
      BB.payloadKind === DB.sc.Msgpack && yB.some((OB => function(BB, OB) {
        const GB = OB[0];
        for (let YB = BB.indexOf(GB); - 1 !== YB && YB + OB.length <= BB.length; YB = BB.indexOf(GB, YB + 1)) {
          let GB = 1;
          for (; GB < OB.length && BB[YB + GB] === OB[GB];) GB++;
          if (GB === OB.length) return !0
        }
        return !1
      }(BB.payload, OB))) && function(BB) {
        if (null === BB || "object" !== typeof BB || null === BB.settings || "object" !== typeof BB.settings) return;
        const OB = String(BB.eId),
          GB = BB.settings;
        let YB = JB.get(OB);
        for (const DB in GB) {
          if (!jB.has(DB)) continue;
          const BB = GB[DB];
          null === BB || void 0 === BB ? YB && delete YB[DB] : (YB ??= {}, YB[DB] = BB)
        }
        YB && JB.set(OB, YB)
      }((0, QB.b)(BB.payload))
    })), (0, oB.d)((() => {
      JB.clear()
    }))
  },
  42023: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => lB,
      d: () => JB,
      f: () => PB
    });
    var YB = GB(39710),
      DB = GB(2027),
      QB = GB(1296),
      oB = GB(41616),
      jB = GB(41624),
      yB = GB(41637);
    const JB = new YB.c;
    let MB = {};

    function PB(BB) {
      return MB[BB]
    }
    const zB = new QB.d;

    function lB(BB) {
      return zB.add(BB)
    }

    function pB(BB) {
      zB.callEach(BB, "a roster listener")
    }(0, yB.g)(oB.X, (BB => {
      const OB = (0, jB.h)(oB.X, BB);
      if (void 0 === OB) return;
      const GB = OB.YY.some((BB => {
          let {
            DY: OB,
            QY: GB
          } = BB;
          return null !== GB && JB.has(OB) && JB.getName(OB) !== GB
        })),
        {
          added: YB,
          removed: QB,
          settingChanges: yB
        } = JB.apply(OB),
        MB = new Set;
      for (const DB of yB)
        for (const BB in DB.settings) MB.add(BB);
      const PB = GB || YB.length > 0 || QB.length > 0;
      (PB || MB.has("hideNameSeed")) && function() {
        const BB = new Map;
        for (const OB of JB.ids()) {
          const GB = JB.getName(OB),
            YB = JB.getSetting(OB, "hideNameSeed");
          void 0 !== GB && void 0 !== YB && null !== YB && BB.set(GB, YB)
        }
        DB.d.replaceAll(BB)
      }(), pB({
        kind: "roster",
        members: PB,
        settings: MB
      })
    })), (0, yB.g)(oB.M, (BB => {
      const OB = (0, jB.h)(oB.M, BB);
      if (void 0 !== OB) {
        for (const {
            nB: BB,
            UB: GB,
            fB: YB
          }
          of OB) MB[BB] = {
          ...MB[BB],
          [GB]: YB
        };
        pB({
          kind: "cosmetics",
          updates: OB
        })
      }
    })), (0, yB.d)((() => {
      JB.clear(), MB = {}, DB.d.clear(), pB({
        kind: "reset"
      })
    })), (0, yB.e)((() => {
      JB.clear(), pB({
        kind: "reset"
      })
    }))
  },
  42042: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => dB,
      f: () => ZB,
      j: () => IB,
      n: () => FB
    });
    var YB = GB(1262),
      DB = GB(633),
      QB = GB(92),
      oB = GB(5287),
      jB = GB(41579),
      yB = GB(41611),
      JB = GB(41593),
      MB = GB(42039),
      PB = GB(42023),
      zB = GB(41624),
      lB = GB(41637);

    function pB(BB) {
      let {
        deadEId: OB,
        killerEId: GB,
        killerLifeformType: YB,
        withItem: DB,
        killstreak: QB
      } = BB;
      return {
        killer: AB({
          eId: GB,
          lifeformType: YB
        }),
        victim: AB({
          eId: OB
        }),
        withItem: DB,
        killstreak: QB
      }
    }

    function qB(BB) {
      let {
        killer: OB,
        victim: GB,
        withItem: YB
      } = BB;
      return {
        killer: AB(OB),
        victim: AB(GB),
        withItem: YB,
        killstreak: 0
      }
    }

    function ZB(BB) {
      UB && kB((() => "killed" === BB.kind ? pB(BB.body) : qB(BB.body)))
    }
    const NB = "#2727f1",
      RB = "#912c2c";

    function WB(BB, OB) {
      var GB;
      return PB.d.has(BB) ? null === (GB = PB.d.getSettings(BB)) || void 0 === GB ? void 0 : GB[OB] : (0, MB.c)(BB, OB)
    }

    function AB(BB) {
      var OB, GB, oB, jB, MB;
      let {
        eId: zB,
        name: lB,
        colour: pB,
        lifeformType: qB
      } = BB;
      if (void 0 === zB || null === zB || "" === zB) {
        const BB = lB || null;
        return {
          id: null,
          shownName: BB,
          lifeformType: null === BB && null !== qB && void 0 !== qB ? qB : null,
          colour: pB || null,
          local: !1,
          realName: null
        }
      }
      const ZB = String(zB),
        AB = null === (OB = (0, JB.j)()) || void 0 === OB ? void 0 : OB.api,
        VB = void 0 !== AB && String(AB.localId) === ZB,
        SB = null !== (GB = PB.d.getName(ZB)) && void 0 !== GB ? GB : null,
        nB = null !== (oB = WB(ZB, "hideNameSeed")) && void 0 !== oB ? oB : null;
      let UB = null === SB ? null : (0, YB.e)(SB, !QB.featureFlags.canSeeRealPlayerNames, nB) || null,
        fB = null;
      if (null === UB && void 0 !== AB) {
        const BB = AB.getEntityType(ZB);
        "Player" !== BB && (UB = (0, yB.j)(AB, +ZB) || null), fB = DB.j.includes(BB) ? BB : null
      }
      return {
        id: ZB,
        shownName: UB,
        lifeformType: null === UB && null !== (jB = null !== (MB = fB) && void 0 !== MB ? MB : qB) && void 0 !== jB ? jB : null,
        colour: pB || WB(ZB, "killfeedColour") || (VB ? NB : RB),
        local: VB,
        realName: SB
      }
    }
    const VB = 32;
    let SB = [],
      nB = null,
      UB = !1,
      fB = !1;

    function kB(BB) {
      null === nB ? (SB.length === VB && SB.shift(), SB.push(BB)) : nB(BB())
    }

    function dB() {
      fB || (fB = !0, (0, lB.g)(oB.oc.PlayerKilled, (BB => {
        const OB = (0, zB.l)(BB);
        (0, zB.e)(OB) && kB((() => pB(OB)))
      })), (0, lB.g)(oB.oc.CustomKillfeed, (BB => {
        const OB = (0, zB.l)(BB);
        (0, zB.e)(OB) && (0, zB.e)(OB.killer) && (0, zB.e)(OB.victim) && kB((() => qB(OB)))
      })), (0, lB.d)((() => {
        SB = []
      })))
    }
    const KB = Object.freeze([0, 0, 0]),
      uB = [0, 0, 0],
      mB = [0, 0, 0],
      IB = {
        kill: {
          watch(BB) {
            if (UB = !0, 0 === SB.length) return nB = BB, () => {
              UB = !1, nB = null
            };
            const OB = setTimeout((() => {
              const OB = SB;
              SB = [], nB = BB;
              for (const YB of OB) try {
                BB(YB())
              } catch (GB) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", GB)
              }
            }), 0);
            return () => {
              clearTimeout(OB), UB = !1, nB = null
            }
          }
        }
      },
      FB = {
        localPos() {
          const BB = (0, JB.j)();
          if (null === BB) return KB;
          const OB = BB.api.apiView;
          for (let GB = 0; GB < 3; GB++) uB[GB] = jB.u.localPos(OB, 0, GB);
          return uB
        },
        targetedBlockPos() {
          const BB = (0, JB.j)();
          if (null === BB || jB.u.targetBlockId(BB.api.apiView, 0) === jB.fd) return null;
          for (let OB = 0; OB < 3; OB++) mB[OB] = jB.u.targetBlock(BB.api.apiView, 0, OB);
          return mB
        }
      }
  },
  39710: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const OB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const YB of BB.YY) {
          let BB = this.members.get(YB.DY);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(YB.DY, BB), OB.added.push(YB.DY)), null !== YB.QY && (BB.name = YB.QY), null !== YB.oY || YB.jY.length > 0) {
            const GB = null === YB.oY ? {} : JSON.parse(YB.oY);
            Object.assign(BB.settings, GB);
            for (const OB of YB.jY) delete BB.settings[OB], GB[OB] = void 0;
            OB.settingChanges.push({
              playerId: YB.DY,
              settings: GB
            })
          }
        }
        for (const YB of BB.yY) {
          const BB = this.members.get(YB);
          var GB;
          if (BB) this.members.delete(YB), OB.removed.push({
            playerId: YB,
            name: null !== (GB = BB.name) && void 0 !== GB ? GB : void 0
          })
        }
        return OB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var OB, GB;
        return null !== (OB = null === (GB = this.members.get(BB)) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : void 0
      }
      getSettings(BB) {
        var OB;
        return null === (OB = this.members.get(BB)) || void 0 === OB ? void 0 : OB.settings
      }
      getSetting(BB, OB) {
        var GB;
        return null === (GB = this.members.get(BB)) || void 0 === GB ? void 0 : GB.settings[OB]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);