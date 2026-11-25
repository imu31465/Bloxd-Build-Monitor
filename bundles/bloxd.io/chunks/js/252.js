export const id = 252;
export const ids = [252];
export const modules = {
  41058: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      e: () => GB
    });
    var TB = ZB(2012);
    let JB = !1;

    function oB() {
      JB = !0
    }

    function GB() {
      JB && (JB = !1, (0, TB.d)())
    }
  },
  41052: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      e: () => oB,
      h: () => vB
    });
    var TB = ZB(40633),
      JB = ZB(40643);

    function oB(BB) {
      if (BB.queries.drawCensus() < TB.qb.BYTES) return null;
      const IB = BB.memoryData(BB.scratch(), TB.qb.BYTES, 4, "the draw census");
      return null === IB ? null : {
        terrainOpaque: TB.qb.terrainOpaque(IB, 0),
        terrainTransparent: TB.qb.terrainTransparent(IB, 0),
        terrainPack: TB.qb.terrainPack(IB, 0),
        earthSky: TB.qb.earthSky(IB, 0),
        skyMeshes: TB.qb.skyMeshes(IB, 0),
        regular: TB.qb.regular(IB, 0),
        thin: TB.qb.thin(IB, 0),
        line: TB.qb.line(IB, 0),
        text: TB.qb.text(IB, 0),
        particles: TB.qb.particles(IB, 0),
        terrainParts: TB.qb.terrainParts(IB, 0),
        terrainCompiling: TB.qb.terrainCompiling(IB, 0),
        ringCopiesMax: TB.qb.ringCopiesMax(IB, 0),
        ringBusyWrites: TB.qb.ringBusyWrites(IB, 0)
      }
    }

    function GB(BB) {
      const {
        terrainOpaque: IB,
        terrainTransparent: ZB,
        earthSky: TB,
        skyMeshes: JB,
        regular: oB,
        thin: GB,
        line: vB,
        text: kB,
        particles: cB
      } = BB;
      return IB + ZB + TB + JB + oB + GB + vB + kB + cB
    }

    function vB() {
      const BB = (0, JB.j)();
      return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
        const IB = oB(BB);
        if (null === IB) return [];
        const {
          terrainOpaque: ZB,
          terrainTransparent: TB,
          terrainPack: JB,
          earthSky: vB,
          skyMeshes: kB,
          regular: cB,
          thin: nB,
          line: hB,
          text: zB,
          particles: FB
        } = IB;
        return [{
          label: "Drawn",
          value: `${GB(IB)}`
        }, {
          label: "Terrain",
          value: `${ZB} opaque / ${TB} transparent (${JB} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${cB} / ${nB}`
        }, {
          label: "Text / Lines",
          value: `${zB} / ${hB}`
        }, {
          label: "Sky / Particles",
          value: `${vB+kB} / ${FB}`
        }]
      }(BB.api) : []
    }
  },
  41045: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => NB,
      e: () => zB,
      i: () => FB
    });
    var TB = ZB(2020),
      JB = ZB(1358),
      oB = ZB(40643),
      GB = ZB(40666),
      vB = ZB(40675),
      kB = ZB(40692);
    const cB = new JB.e;
    let nB = !1;

    function hB(BB) {
      const IB = (0, oB.j)();
      return null !== IB && +BB === IB.api.localId
    }

    function zB() {
      nB || (nB = !0, (0, kB.l)(GB.n, (BB => {
        var IB, ZB;
        const TB = (0, vB.e)(GB.n, BB);
        if (!(0, vB.d)(TB)) return;
        const JB = TB;
        hB(JB.PB) && FB(JB.RB, {
          icon: JB.fI,
          level: JB.AI,
          displayName: null !== (IB = JB.rB) && void 0 !== IB ? IB : null,
          durationMs: null !== (ZB = JB.lI) && void 0 !== ZB ? ZB : null
        })
      })), (0, kB.l)(GB.H, (BB => {
        const IB = (0, vB.e)(GB.H, BB);
        if (!(0, vB.d)(IB)) return;
        const ZB = IB;
        hB(ZB.PB) && TB.c.remove(ZB.RB)
      })), (0, kB.g)((() => {
        TB.c.clear()
      })))
    }

    function FB(BB, IB) {
      TB.c.update(BB, IB), cB.forEach((IB => {
        IB(BB)
      }))
    }
    const NB = {
      localEffectUpdated: {
        watch: BB => cB.add(BB)
      }
    }
  },
  41047: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => nB
    });
    var TB = ZB(4975),
      JB = ZB(4969),
      oB = ZB(40682),
      GB = ZB(40692);
    const vB = new Set(TB.N),
      kB = TB.N.map((BB => (new TextEncoder).encode(BB))),
      cB = new Map;

    function nB(BB, IB) {
      var ZB;
      return null === (ZB = cB.get(BB)) || void 0 === ZB ? void 0 : ZB[IB]
    }(0, GB.l)(TB.nc.NewOtherEntitySettings, (BB => {
      BB.payloadKind === JB.nc.Msgpack && kB.some((IB => function(BB, IB) {
        const ZB = IB[0];
        for (let TB = BB.indexOf(ZB); - 1 !== TB && TB + IB.length <= BB.length; TB = BB.indexOf(ZB, TB + 1)) {
          let ZB = 1;
          for (; ZB < IB.length && BB[TB + ZB] === IB[ZB];) ZB++;
          if (ZB === IB.length) return !0
        }
        return !1
      }(BB.payload, IB))) && function(BB) {
        if (null === BB || "object" !== typeof BB || null === BB.settings || "object" !== typeof BB.settings) return;
        const IB = String(BB.eId),
          ZB = BB.settings;
        let TB = cB.get(IB);
        for (const JB in ZB) {
          if (!vB.has(JB)) continue;
          const BB = ZB[JB];
          null === BB || void 0 === BB ? TB && delete TB[JB] : (TB ??= {}, TB[JB] = BB)
        }
        TB && cB.set(IB, TB)
      }((0, oB.e)(BB.payload))
    })), (0, GB.g)((() => {
      cB.clear()
    }))
  },
  41037: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => FB,
      f: () => cB,
      j: () => hB
    });
    var TB = ZB(39061),
      JB = ZB(2003),
      oB = ZB(1358),
      GB = ZB(40666),
      vB = ZB(40675),
      kB = ZB(40692);
    const cB = new TB.c;
    let nB = {};

    function hB(BB) {
      return nB[BB]
    }
    const zB = new oB.e;

    function FB(BB) {
      return zB.add(BB)
    }

    function NB(BB) {
      zB.callEach(BB, "a roster listener")
    }(0, kB.l)(GB.O, (BB => {
      const IB = (0, vB.e)(GB.O, BB);
      if (void 0 === IB) return;
      const ZB = IB.mB.some((BB => {
          let {
            XB: IB,
            LB: ZB
          } = BB;
          return null !== ZB && cB.has(IB) && cB.getName(IB) !== ZB
        })),
        {
          added: TB,
          removed: oB,
          settingChanges: kB
        } = cB.apply(IB),
        nB = new Set;
      for (const JB of kB)
        for (const BB in JB.settings) nB.add(BB);
      const hB = ZB || TB.length > 0 || oB.length > 0;
      (hB || nB.has("hideNameSeed")) && function() {
        const BB = new Map;
        for (const IB of cB.ids()) {
          const ZB = cB.getName(IB),
            TB = cB.getSetting(IB, "hideNameSeed");
          void 0 !== ZB && void 0 !== TB && null !== TB && BB.set(ZB, TB)
        }
        JB.b.replaceAll(BB)
      }(), NB({
        kind: "roster",
        members: hB,
        settings: nB
      })
    })), (0, kB.l)(GB.F, (BB => {
      const IB = (0, vB.e)(GB.F, BB);
      if (void 0 !== IB) {
        for (const {
            ao: BB,
            Ho: ZB,
            Mo: TB
          }
          of IB) nB[BB] = {
          ...nB[BB],
          [ZB]: TB
        };
        NB({
          kind: "cosmetics",
          updates: IB
        })
      }
    })), (0, kB.g)((() => {
      cB.clear(), nB = {}, JB.b.clear(), NB({
        kind: "reset"
      })
    })), (0, kB.j)((() => {
      cB.clear(), NB({
        kind: "reset"
      })
    }))
  },
  41049: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => iB,
      c: () => qB,
      f: () => MB,
      g: () => jB
    });
    var TB = ZB(1333),
      JB = ZB(655),
      oB = ZB(105),
      GB = ZB(4975),
      vB = ZB(40633),
      kB = ZB(40664),
      cB = ZB(40643),
      nB = ZB(41047),
      hB = ZB(41037),
      zB = ZB(40675),
      FB = ZB(40692);

    function NB(BB) {
      let {
        deadEId: IB,
        killerEId: ZB,
        killerLifeformType: TB,
        withItem: JB,
        killstreak: oB
      } = BB;
      return {
        killer: dB({
          eId: ZB,
          lifeformType: TB
        }),
        victim: dB({
          eId: IB
        }),
        withItem: JB,
        killstreak: oB
      }
    }

    function gB(BB) {
      let {
        killer: IB,
        victim: ZB,
        withItem: TB
      } = BB;
      return {
        killer: dB(IB),
        victim: dB(ZB),
        withItem: TB,
        killstreak: 0
      }
    }

    function qB(BB) {
      wB && YB((() => "killed" === BB.kind ? NB(BB.body) : gB(BB.body)))
    }
    const yB = "#2727f1",
      UB = "#912c2c";

    function WB(BB, IB) {
      var ZB;
      return hB.f.has(BB) ? null === (ZB = hB.f.getSettings(BB)) || void 0 === ZB ? void 0 : ZB[IB] : (0, nB.b)(BB, IB)
    }

    function dB(BB) {
      var IB, ZB, GB, vB, nB;
      let {
        eId: zB,
        name: FB,
        colour: NB,
        lifeformType: gB
      } = BB;
      if (void 0 === zB || null === zB || "" === zB) {
        const BB = FB || null;
        return {
          id: null,
          shownName: BB,
          lifeformType: null === BB && null !== gB && void 0 !== gB ? gB : null,
          colour: NB || null,
          local: !1,
          realName: null
        }
      }
      const qB = String(zB),
        dB = null === (IB = (0, cB.j)()) || void 0 === IB ? void 0 : IB.api,
        CB = void 0 !== dB && String(dB.localId) === qB,
        QB = null !== (ZB = hB.f.getName(qB)) && void 0 !== ZB ? ZB : null,
        sB = null !== (GB = WB(qB, "hideNameSeed")) && void 0 !== GB ? GB : null;
      let wB = null === QB ? null : (0, TB.c)(QB, !oB.featureFlags.canSeeRealPlayerNames, sB) || null,
        OB = null;
      if (null === wB && void 0 !== dB) {
        const BB = dB.getEntityType(qB);
        "Player" !== BB && (wB = (0, kB.k)(dB, +qB) || null), OB = JB.i.includes(BB) ? BB : null
      }
      return {
        id: qB,
        shownName: wB,
        lifeformType: null === wB && null !== (vB = null !== (nB = OB) && void 0 !== nB ? nB : gB) && void 0 !== vB ? vB : null,
        colour: NB || WB(qB, "killfeedColour") || (CB ? yB : UB),
        local: CB,
        realName: QB
      }
    }
    const CB = 32;
    let QB = [],
      sB = null,
      wB = !1,
      OB = !1;

    function YB(BB) {
      null === sB ? (QB.length === CB && QB.shift(), QB.push(BB)) : sB(BB())
    }

    function iB() {
      OB || (OB = !0, (0, FB.l)(GB.nc.PlayerKilled, (BB => {
        const IB = (0, zB.f)(BB);
        (0, zB.d)(IB) && YB((() => NB(IB)))
      })), (0, FB.l)(GB.nc.CustomKillfeed, (BB => {
        const IB = (0, zB.f)(BB);
        (0, zB.d)(IB) && (0, zB.d)(IB.killer) && (0, zB.d)(IB.victim) && YB((() => gB(IB)))
      })), (0, FB.g)((() => {
        QB = []
      })))
    }
    const pB = Object.freeze([0, 0, 0]),
      aB = [0, 0, 0],
      HB = [0, 0, 0],
      MB = {
        kill: {
          watch(BB) {
            if (wB = !0, 0 === QB.length) return sB = BB, () => {
              wB = !1, sB = null
            };
            const IB = setTimeout((() => {
              const IB = QB;
              QB = [], sB = BB;
              for (const TB of IB) try {
                BB(TB())
              } catch (ZB) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", ZB)
              }
            }), 0);
            return () => {
              clearTimeout(IB), wB = !1, sB = null
            }
          }
        }
      },
      jB = {
        localPos() {
          const BB = (0, cB.j)();
          if (null === BB) return pB;
          const IB = BB.api.apiView;
          for (let ZB = 0; ZB < 3; ZB++) aB[ZB] = vB.p.localPos(IB, 0, ZB);
          return aB
        },
        targetedBlockPos() {
          const BB = (0, cB.j)();
          if (null === BB || vB.p.targetBlockId(BB.api.apiView, 0) === vB.Tc) return null;
          for (let IB = 0; IB < 3; IB++) HB[IB] = vB.p.targetBlock(BB.api.apiView, 0, IB);
          return HB
        }
      }
  },
  39061: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const IB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const TB of BB.mB) {
          let BB = this.members.get(TB.XB);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(TB.XB, BB), IB.added.push(TB.XB)), null !== TB.LB && (BB.name = TB.LB), null !== TB.eB || TB.uB.length > 0) {
            const ZB = null === TB.eB ? {} : JSON.parse(TB.eB);
            Object.assign(BB.settings, ZB);
            for (const IB of TB.uB) delete BB.settings[IB], ZB[IB] = void 0;
            IB.settingChanges.push({
              playerId: TB.XB,
              settings: ZB
            })
          }
        }
        for (const TB of BB.fB) {
          const BB = this.members.get(TB);
          var ZB;
          if (BB) this.members.delete(TB), IB.removed.push({
            playerId: TB,
            name: null !== (ZB = BB.name) && void 0 !== ZB ? ZB : void 0
          })
        }
        return IB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var IB, ZB;
        return null !== (IB = null === (ZB = this.members.get(BB)) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : void 0
      }
      getSettings(BB) {
        var IB;
        return null === (IB = this.members.get(BB)) || void 0 === IB ? void 0 : IB.settings
      }
      getSetting(BB, IB) {
        var ZB;
        return null === (ZB = this.members.get(BB)) || void 0 === ZB ? void 0 : ZB.settings[IB]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);