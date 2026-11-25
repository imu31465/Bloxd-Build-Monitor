export const id = 252;
export const ids = [252];
export const modules = {
  41427: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      f: () => yG
    });
    var wG = ZG(1910);
    let SG = !1;

    function LG() {
      SG = !0
    }

    function yG() {
      SG && (SG = !1, (0, wG.d)())
    }
  },
  41423: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      f: () => LG,
      j: () => kG
    });
    var wG = ZG(40954),
      SG = ZG(40971);

    function LG(GG) {
      if (GG.queries.drawCensus() < wG.Bb.BYTES) return null;
      const bG = GG.memoryData(GG.scratch(), wG.Bb.BYTES, 4, "the draw census");
      return null === bG ? null : {
        terrainOpaque: wG.Bb.terrainOpaque(bG, 0),
        terrainTransparent: wG.Bb.terrainTransparent(bG, 0),
        terrainPack: wG.Bb.terrainPack(bG, 0),
        earthSky: wG.Bb.earthSky(bG, 0),
        skyMeshes: wG.Bb.skyMeshes(bG, 0),
        regular: wG.Bb.regular(bG, 0),
        thin: wG.Bb.thin(bG, 0),
        line: wG.Bb.line(bG, 0),
        text: wG.Bb.text(bG, 0),
        particles: wG.Bb.particles(bG, 0),
        terrainParts: wG.Bb.terrainParts(bG, 0),
        terrainCompiling: wG.Bb.terrainCompiling(bG, 0),
        ringCopiesMax: wG.Bb.ringCopiesMax(bG, 0),
        ringBusyWrites: wG.Bb.ringBusyWrites(bG, 0)
      }
    }

    function yG(GG) {
      const {
        terrainOpaque: bG,
        terrainTransparent: ZG,
        earthSky: wG,
        skyMeshes: SG,
        regular: LG,
        thin: yG,
        line: kG,
        text: UG,
        particles: YG
      } = GG;
      return bG + ZG + wG + SG + LG + yG + kG + UG + YG
    }

    function kG() {
      const GG = (0, SG.f)();
      return !0 === (null === GG || void 0 === GG ? void 0 : GG.isCoreRunning) ? function(GG) {
        const bG = LG(GG);
        if (null === bG) return [];
        const {
          terrainOpaque: ZG,
          terrainTransparent: wG,
          terrainPack: SG,
          earthSky: kG,
          skyMeshes: UG,
          regular: YG,
          thin: VG,
          line: pG,
          text: fG,
          particles: QG
        } = bG;
        return [{
          label: "Drawn",
          value: `${yG(bG)}`
        }, {
          label: "Terrain",
          value: `${ZG} opaque / ${wG} transparent (${SG} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${YG} / ${VG}`
        }, {
          label: "Text / Lines",
          value: `${fG} / ${pG}`
        }, {
          label: "Sky / Particles",
          value: `${kG+UG} / ${QG}`
        }]
      }(GG.api) : []
    }
  },
  41410: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => KG,
      f: () => fG,
      i: () => QG
    });
    var wG = ZG(1915),
      SG = ZG(1257),
      LG = ZG(40971),
      yG = ZG(40989),
      kG = ZG(40993),
      UG = ZG(41012);
    const YG = new SG.c;
    let VG = !1;

    function pG(GG) {
      const bG = (0, LG.f)();
      return null !== bG && +GG === bG.api.localId
    }

    function fG() {
      VG || (VG = !0, (0, UG.l)(yG.j, (GG => {
        var bG, ZG;
        const wG = (0, kG.f)(yG.j, GG);
        if (!(0, kG.d)(wG)) return;
        const SG = wG;
        pG(SG.cG) && QG(SG.lG, {
          icon: SG.Rb,
          level: SG.Hb,
          displayName: null !== (bG = SG.jG) && void 0 !== bG ? bG : null,
          durationMs: null !== (ZG = SG.Tb) && void 0 !== ZG ? ZG : null
        })
      })), (0, UG.l)(yG.U, (GG => {
        const bG = (0, kG.f)(yG.U, GG);
        if (!(0, kG.d)(bG)) return;
        const ZG = bG;
        pG(ZG.cG) && wG.e.remove(ZG.lG)
      })), (0, UG.f)((() => {
        wG.e.clear()
      })))
    }

    function QG(GG, bG) {
      wG.e.update(GG, bG), YG.forEach((bG => {
        bG(GG)
      }))
    }
    const KG = {
      localEffectUpdated: {
        watch: GG => YG.add(GG)
      }
    }
  },
  41413: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG
    });
    var wG = ZG(4818),
      SG = ZG(4810),
      LG = ZG(40999),
      yG = ZG(41012);
    const kG = new Set(wG.Q),
      UG = wG.Q.map((GG => (new TextEncoder).encode(GG))),
      YG = new Map;

    function VG(GG, bG) {
      var ZG;
      return null === (ZG = YG.get(GG)) || void 0 === ZG ? void 0 : ZG[bG]
    }(0, yG.l)(wG.jc.NewOtherEntitySettings, (GG => {
      GG.payloadKind === SG.jc.Msgpack && UG.some((bG => function(GG, bG) {
        const ZG = bG[0];
        for (let wG = GG.indexOf(ZG); - 1 !== wG && wG + bG.length <= GG.length; wG = GG.indexOf(ZG, wG + 1)) {
          let ZG = 1;
          for (; ZG < bG.length && GG[wG + ZG] === bG[ZG];) ZG++;
          if (ZG === bG.length) return !0
        }
        return !1
      }(GG.payload, bG))) && function(GG) {
        if (null === GG || "object" !== typeof GG || null === GG.settings || "object" !== typeof GG.settings) return;
        const bG = String(GG.eId),
          ZG = GG.settings;
        let wG = YG.get(bG);
        for (const SG in ZG) {
          if (!kG.has(SG)) continue;
          const GG = ZG[SG];
          null === GG || void 0 === GG ? wG && delete wG[SG] : (wG ??= {}, wG[SG] = GG)
        }
        wG && YG.set(bG, wG)
      }((0, LG.e)(GG.payload))
    })), (0, yG.f)((() => {
      YG.clear()
    }))
  },
  41404: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => QG,
      f: () => YG,
      g: () => pG
    });
    var wG = ZG(39396),
      SG = ZG(1903),
      LG = ZG(1257),
      yG = ZG(40989),
      kG = ZG(40993),
      UG = ZG(41012);
    const YG = new wG.c;
    let VG = {};

    function pG(GG) {
      return VG[GG]
    }
    const fG = new LG.c;

    function QG(GG) {
      return fG.add(GG)
    }

    function KG(GG) {
      fG.callEach(GG, "a roster listener")
    }(0, UG.l)(yG.$, (GG => {
      const bG = (0, kG.f)(yG.$, GG);
      if (void 0 === bG) return;
      const ZG = bG.PG.some((GG => {
          let {
            MG: bG,
            AG: ZG
          } = GG;
          return null !== ZG && YG.has(bG) && YG.getName(bG) !== ZG
        })),
        {
          added: wG,
          removed: LG,
          settingChanges: UG
        } = YG.apply(bG),
        VG = new Set;
      for (const SG of UG)
        for (const GG in SG.settings) VG.add(GG);
      const pG = ZG || wG.length > 0 || LG.length > 0;
      (pG || VG.has("hideNameSeed")) && function() {
        const GG = new Map;
        for (const bG of YG.ids()) {
          const ZG = YG.getName(bG),
            wG = YG.getSetting(bG, "hideNameSeed");
          void 0 !== ZG && void 0 !== wG && null !== wG && GG.set(ZG, wG)
        }
        SG.b.replaceAll(GG)
      }(), KG({
        kind: "roster",
        members: pG,
        settings: VG
      })
    })), (0, UG.l)(yG.T, (GG => {
      const bG = (0, kG.f)(yG.T, GG);
      if (void 0 !== bG) {
        for (const {
            IL: GG,
            FL: ZG,
            vL: wG
          }
          of bG) VG[GG] = {
          ...VG[GG],
          [ZG]: wG
        };
        KG({
          kind: "cosmetics",
          updates: bG
        })
      }
    })), (0, UG.f)((() => {
      YG.clear(), VG = {}, SG.b.clear(), KG({
        kind: "reset"
      })
    })), (0, UG.j)((() => {
      YG.clear(), KG({
        kind: "reset"
      })
    }))
  },
  41421: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => mG,
      d: () => dG,
      g: () => aG,
      i: () => cG
    });
    var wG = ZG(1230),
      SG = ZG(589),
      LG = ZG(80),
      yG = ZG(4818),
      kG = ZG(40954),
      UG = ZG(40986),
      YG = ZG(40971),
      VG = ZG(41413),
      pG = ZG(41404),
      fG = ZG(40993),
      QG = ZG(41012);

    function KG(GG) {
      let {
        deadEId: bG,
        killerEId: ZG,
        killerLifeformType: wG,
        withItem: SG,
        killstreak: LG
      } = GG;
      return {
        killer: EG({
          eId: ZG,
          lifeformType: wG
        }),
        victim: EG({
          eId: bG
        }),
        withItem: SG,
        killstreak: LG
      }
    }

    function hG(GG) {
      let {
        killer: bG,
        victim: ZG,
        withItem: wG
      } = GG;
      return {
        killer: EG(bG),
        victim: EG(ZG),
        withItem: wG,
        killstreak: 0
      }
    }

    function dG(GG) {
      iG && WG((() => "killed" === GG.kind ? KG(GG.body) : hG(GG.body)))
    }
    const JG = "#2727f1",
      rG = "#912c2c";

    function zG(GG, bG) {
      var ZG;
      return pG.f.has(GG) ? null === (ZG = pG.f.getSettings(GG)) || void 0 === ZG ? void 0 : ZG[bG] : (0, VG.b)(GG, bG)
    }

    function EG(GG) {
      var bG, ZG, yG, kG, VG;
      let {
        eId: fG,
        name: QG,
        colour: KG,
        lifeformType: hG
      } = GG;
      if (void 0 === fG || null === fG || "" === fG) {
        const GG = QG || null;
        return {
          id: null,
          shownName: GG,
          lifeformType: null === GG && null !== hG && void 0 !== hG ? hG : null,
          colour: KG || null,
          local: !1,
          realName: null
        }
      }
      const dG = String(fG),
        EG = null === (bG = (0, YG.f)()) || void 0 === bG ? void 0 : bG.api,
        oG = void 0 !== EG && String(EG.localId) === dG,
        XG = null !== (ZG = pG.f.getName(dG)) && void 0 !== ZG ? ZG : null,
        uG = null !== (yG = zG(dG, "hideNameSeed")) && void 0 !== yG ? yG : null;
      let iG = null === XG ? null : (0, wG.b)(XG, !LG.featureFlags.canSeeRealPlayerNames, uG) || null,
        CG = null;
      if (null === iG && void 0 !== EG) {
        const GG = EG.getEntityType(dG);
        "Player" !== GG && (iG = (0, UG.i)(EG, +dG) || null), CG = SG.m.includes(GG) ? GG : null
      }
      return {
        id: dG,
        shownName: iG,
        lifeformType: null === iG && null !== (kG = null !== (VG = CG) && void 0 !== VG ? VG : hG) && void 0 !== kG ? kG : null,
        colour: KG || zG(dG, "killfeedColour") || (oG ? JG : rG),
        local: oG,
        realName: XG
      }
    }
    const oG = 32;
    let XG = [],
      uG = null,
      iG = !1,
      CG = !1;

    function WG(GG) {
      null === uG ? (XG.length === oG && XG.shift(), XG.push(GG)) : uG(GG())
    }

    function mG() {
      CG || (CG = !0, (0, QG.l)(yG.jc.PlayerKilled, (GG => {
        const bG = (0, fG.j)(GG);
        (0, fG.d)(bG) && WG((() => KG(bG)))
      })), (0, QG.l)(yG.jc.CustomKillfeed, (GG => {
        const bG = (0, fG.j)(GG);
        (0, fG.d)(bG) && (0, fG.d)(bG.killer) && (0, fG.d)(bG.victim) && WG((() => hG(bG)))
      })), (0, QG.f)((() => {
        XG = []
      })))
    }
    const IG = Object.freeze([0, 0, 0]),
      FG = [0, 0, 0],
      vG = [0, 0, 0],
      aG = {
        kill: {
          watch(GG) {
            if (iG = !0, 0 === XG.length) return uG = GG, () => {
              iG = !1, uG = null
            };
            const bG = setTimeout((() => {
              const bG = XG;
              XG = [], uG = GG;
              for (const wG of bG) try {
                GG(wG())
              } catch (ZG) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", ZG)
              }
            }), 0);
            return () => {
              clearTimeout(bG), iG = !1, uG = null
            }
          }
        }
      },
      cG = {
        localPos() {
          const GG = (0, YG.f)();
          if (null === GG) return IG;
          const bG = GG.api.apiView;
          for (let ZG = 0; ZG < 3; ZG++) FG[ZG] = kG.v.localPos(bG, 0, ZG);
          return FG
        },
        targetedBlockPos() {
          const GG = (0, YG.f)();
          if (null === GG || kG.v.targetBlockId(GG.api.apiView, 0) === kG.Yc) return null;
          for (let bG = 0; bG < 3; bG++) vG[bG] = kG.v.targetBlock(GG.api.apiView, 0, bG);
          return vG
        }
      }
  },
  39396: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor() {
        this.members = new Map
      }
      apply(GG) {
        const bG = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const wG of GG.PG) {
          let GG = this.members.get(wG.MG);
          if (GG || (GG = {
              name: null,
              settings: {}
            }, this.members.set(wG.MG, GG), bG.added.push(wG.MG)), null !== wG.AG && (GG.name = wG.AG), null !== wG.sG || wG.qG.length > 0) {
            const ZG = null === wG.sG ? {} : JSON.parse(wG.sG);
            Object.assign(GG.settings, ZG);
            for (const bG of wG.qG) delete GG.settings[bG], ZG[bG] = void 0;
            bG.settingChanges.push({
              playerId: wG.MG,
              settings: ZG
            })
          }
        }
        for (const wG of GG.nG) {
          const GG = this.members.get(wG);
          var ZG;
          if (GG) this.members.delete(wG), bG.removed.push({
            playerId: wG,
            name: null !== (ZG = GG.name) && void 0 !== ZG ? ZG : void 0
          })
        }
        return bG
      }
      has(GG) {
        return this.members.has(GG)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(GG) {
        var bG, ZG;
        return null !== (bG = null === (ZG = this.members.get(GG)) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : void 0
      }
      getSettings(GG) {
        var bG;
        return null === (bG = this.members.get(GG)) || void 0 === bG ? void 0 : bG.settings
      }
      getSetting(GG, bG) {
        var ZG;
        return null === (ZG = this.members.get(GG)) || void 0 === ZG ? void 0 : ZG.settings[bG]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);