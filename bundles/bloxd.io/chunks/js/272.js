export const id = 272;
export const ids = [272];
export const modules = {
  42344: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      f: () => yV
    });
    var JV = xV(2066);
    let YV = !1;

    function UV() {
      YV = !0
    }

    function yV() {
      YV && (YV = !1, (0, JV.d)())
    }
  },
  42341: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      f: () => UV,
      g: () => pV
    });
    var JV = xV(41852),
      YV = xV(41861);

    function UV(VV) {
      if (VV.queries.drawCensus() < JV.xb.BYTES) return null;
      const eV = VV.memoryData(VV.scratch(), JV.xb.BYTES, 4, "the draw census");
      return null === eV ? null : {
        terrainOpaque: JV.xb.terrainOpaque(eV, 0),
        terrainTransparent: JV.xb.terrainTransparent(eV, 0),
        terrainPack: JV.xb.terrainPack(eV, 0),
        earthSky: JV.xb.earthSky(eV, 0),
        skyMeshes: JV.xb.skyMeshes(eV, 0),
        regular: JV.xb.regular(eV, 0),
        thin: JV.xb.thin(eV, 0),
        line: JV.xb.line(eV, 0),
        text: JV.xb.text(eV, 0),
        particles: JV.xb.particles(eV, 0),
        terrainParts: JV.xb.terrainParts(eV, 0),
        terrainCompiling: JV.xb.terrainCompiling(eV, 0),
        ringCopiesMax: JV.xb.ringCopiesMax(eV, 0),
        ringBusyWrites: JV.xb.ringBusyWrites(eV, 0)
      }
    }

    function yV(VV) {
      const {
        terrainOpaque: eV,
        terrainTransparent: xV,
        earthSky: JV,
        skyMeshes: YV,
        regular: UV,
        thin: yV,
        line: pV,
        text: QV,
        particles: nV
      } = VV;
      return eV + xV + JV + YV + UV + yV + pV + QV + nV
    }

    function pV() {
      const VV = (0, YV.k)();
      return !0 === (null === VV || void 0 === VV ? void 0 : VV.isCoreRunning) ? function(VV) {
        const eV = UV(VV);
        if (null === eV) return [];
        const {
          terrainOpaque: xV,
          terrainTransparent: JV,
          terrainPack: YV,
          earthSky: pV,
          skyMeshes: QV,
          regular: nV,
          thin: wV,
          line: ZV,
          text: vV,
          particles: rV
        } = eV;
        return [{
          label: "Drawn",
          value: `${yV(eV)}`
        }, {
          label: "Terrain",
          value: `${xV} opaque / ${JV} transparent (${YV} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${nV} / ${wV}`
        }, {
          label: "Text / Lines",
          value: `${vV} / ${ZV}`
        }, {
          label: "Sky / Particles",
          value: `${pV+QV} / ${rV}`
        }]
      }(VV.api) : []
    }
  },
  42322: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => kV,
      f: () => vV,
      i: () => rV
    });
    var JV = xV(2070),
      YV = xV(1339),
      UV = xV(41861),
      yV = xV(41880),
      pV = xV(41885),
      QV = xV(41909);
    const nV = new YV.c;
    let wV = !1;

    function ZV(VV) {
      const eV = (0, UV.k)();
      return null !== eV && +VV === eV.api.localId
    }

    function vV() {
      wV || (wV = !0, (0, QV.l)(yV.o, (VV => {
        var eV, xV;
        const JV = (0, pV.i)(yV.o, VV);
        if (!(0, pV.e)(JV)) return;
        const YV = JV;
        ZV(YV.bx) && rV(YV.Ex, {
          icon: YV.zx,
          level: YV.Wx,
          displayName: null !== (eV = YV.Bx) && void 0 !== eV ? eV : null,
          durationMs: null !== (xV = YV.Gx) && void 0 !== xV ? xV : null
        })
      })), (0, QV.l)(yV.P, (VV => {
        const eV = (0, pV.i)(yV.P, VV);
        if (!(0, pV.e)(eV)) return;
        const xV = eV;
        ZV(xV.bx) && JV.d.remove(xV.Ex)
      })), (0, QV.f)((() => {
        JV.d.clear()
      })))
    }

    function rV(VV, eV) {
      JV.d.update(VV, eV), nV.forEach((eV => {
        eV(VV)
      }))
    }
    const kV = {
      localEffectUpdated: {
        watch: VV => nV.add(VV)
      }
    }
  },
  42326: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV
    });
    var JV = xV(5301),
      YV = xV(5297),
      UV = xV(41893),
      yV = xV(41909);
    const pV = new Set(JV.W),
      QV = JV.W.map((VV => (new TextEncoder).encode(VV))),
      nV = new Map;

    function wV(VV, eV) {
      var xV;
      return null === (xV = nV.get(VV)) || void 0 === xV ? void 0 : xV[eV]
    }(0, yV.l)(JV.mc.NewOtherEntitySettings, (VV => {
      VV.payloadKind === YV.sc.Msgpack && QV.some((eV => function(VV, eV) {
        const xV = eV[0];
        for (let JV = VV.indexOf(xV); - 1 !== JV && JV + eV.length <= VV.length; JV = VV.indexOf(xV, JV + 1)) {
          let xV = 1;
          for (; xV < eV.length && VV[JV + xV] === eV[xV];) xV++;
          if (xV === eV.length) return !0
        }
        return !1
      }(VV.payload, eV))) && function(VV) {
        if (null === VV || "object" !== typeof VV || null === VV.settings || "object" !== typeof VV.settings) return;
        const eV = String(VV.eId),
          xV = VV.settings;
        let JV = nV.get(eV);
        for (const YV in xV) {
          if (!pV.has(YV)) continue;
          const VV = xV[YV];
          null === VV || void 0 === VV ? JV && delete JV[YV] : (JV ??= {}, JV[YV] = VV)
        }
        JV && nV.set(eV, JV)
      }((0, UV.e)(VV.payload))
    })), (0, yV.f)((() => {
      nV.clear()
    }))
  },
  42314: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => rV,
      e: () => nV,
      f: () => ZV
    });
    var JV = xV(40197),
      YV = xV(2059),
      UV = xV(1339),
      yV = xV(41880),
      pV = xV(41885),
      QV = xV(41909);
    const nV = new JV.d;
    let wV = {};

    function ZV(VV) {
      return wV[VV]
    }
    const vV = new UV.c;

    function rV(VV) {
      return vV.add(VV)
    }

    function kV(VV) {
      vV.callEach(VV, "a roster listener")
    }(0, QV.l)(yV.Y, (VV => {
      const eV = (0, pV.i)(yV.Y, VV);
      if (void 0 === eV) return;
      const xV = eV.VV.some((VV => {
          let {
            eV: eV,
            xV: xV
          } = VV;
          return null !== xV && nV.has(eV) && nV.getName(eV) !== xV
        })),
        {
          added: JV,
          removed: UV,
          settingChanges: QV
        } = nV.apply(eV),
        wV = new Set;
      for (const YV of QV)
        for (const VV in YV.settings) wV.add(VV);
      const ZV = xV || JV.length > 0 || UV.length > 0;
      (ZV || wV.has("hideNameSeed")) && function() {
        const VV = new Map;
        for (const eV of nV.ids()) {
          const xV = nV.getName(eV),
            JV = nV.getSetting(eV, "hideNameSeed");
          void 0 !== xV && void 0 !== JV && null !== JV && VV.set(xV, JV)
        }
        YV.e.replaceAll(VV)
      }(), kV({
        kind: "roster",
        members: ZV,
        settings: wV
      })
    })), (0, QV.l)(yV.O, (VV => {
      const eV = (0, pV.i)(yV.O, VV);
      if (void 0 !== eV) {
        for (const {
            JJ: VV,
            YJ: xV,
            UJ: JV
          }
          of eV) wV[VV] = {
          ...wV[VV],
          [xV]: JV
        };
        kV({
          kind: "cosmetics",
          updates: eV
        })
      }
    })), (0, QV.f)((() => {
      nV.clear(), wV = {}, YV.e.clear(), kV({
        kind: "reset"
      })
    })), (0, QV.h)((() => {
      nV.clear(), kV({
        kind: "reset"
      })
    }))
  },
  42334: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => MV,
      h: () => EV,
      k: () => RV,
      m: () => gV
    });
    var JV = xV(1293),
      YV = xV(648),
      UV = xV(99),
      yV = xV(5301),
      pV = xV(41852),
      QV = xV(41876),
      nV = xV(41861),
      wV = xV(42326),
      ZV = xV(42314),
      vV = xV(41885),
      rV = xV(41909);

    function kV(VV) {
      let {
        deadEId: eV,
        killerEId: xV,
        killerLifeformType: JV,
        withItem: YV,
        killstreak: UV
      } = VV;
      return {
        killer: tV({
          eId: xV,
          lifeformType: JV
        }),
        victim: tV({
          eId: eV
        }),
        withItem: YV,
        killstreak: UV
      }
    }

    function bV(VV) {
      let {
        killer: eV,
        victim: xV,
        withItem: JV
      } = VV;
      return {
        killer: tV(eV),
        victim: tV(xV),
        withItem: JV,
        killstreak: 0
      }
    }

    function EV(VV) {
      AV && XV((() => "killed" === VV.kind ? kV(VV.body) : bV(VV.body)))
    }
    const BV = "#2727f1",
      jV = "#912c2c";

    function qV(VV, eV) {
      var xV;
      return ZV.e.has(VV) ? null === (xV = ZV.e.getSettings(VV)) || void 0 === xV ? void 0 : xV[eV] : (0, wV.d)(VV, eV)
    }

    function tV(VV) {
      var eV, xV, yV, pV, wV;
      let {
        eId: vV,
        name: rV,
        colour: kV,
        lifeformType: bV
      } = VV;
      if (void 0 === vV || null === vV || "" === vV) {
        const VV = rV || null;
        return {
          id: null,
          shownName: VV,
          lifeformType: null === VV && null !== bV && void 0 !== bV ? bV : null,
          colour: kV || null,
          local: !1,
          realName: null
        }
      }
      const EV = String(vV),
        tV = null === (eV = (0, nV.k)()) || void 0 === eV ? void 0 : eV.api,
        FV = void 0 !== tV && String(tV.localId) === EV,
        TV = null !== (xV = ZV.e.getName(EV)) && void 0 !== xV ? xV : null,
        PV = null !== (yV = qV(EV, "hideNameSeed")) && void 0 !== yV ? yV : null;
      let AV = null === TV ? null : (0, JV.b)(TV, !UV.featureFlags.canSeeRealPlayerNames, PV) || null,
        NV = null;
      if (null === AV && void 0 !== tV) {
        const VV = tV.getEntityType(EV);
        "Player" !== VV && (AV = (0, QV.k)(tV, +EV) || null), NV = YV.m.includes(VV) ? VV : null
      }
      return {
        id: EV,
        shownName: AV,
        lifeformType: null === AV && null !== (pV = null !== (wV = NV) && void 0 !== wV ? wV : bV) && void 0 !== pV ? pV : null,
        colour: kV || qV(EV, "killfeedColour") || (FV ? BV : jV),
        local: FV,
        realName: TV
      }
    }
    const FV = 32;
    let TV = [],
      PV = null,
      AV = !1,
      NV = !1;

    function XV(VV) {
      null === PV ? (TV.length === FV && TV.shift(), TV.push(VV)) : PV(VV())
    }

    function MV() {
      NV || (NV = !0, (0, rV.l)(yV.mc.PlayerKilled, (VV => {
        const eV = (0, vV.j)(VV);
        (0, vV.e)(eV) && XV((() => kV(eV)))
      })), (0, rV.l)(yV.mc.CustomKillfeed, (VV => {
        const eV = (0, vV.j)(VV);
        (0, vV.e)(eV) && (0, vV.e)(eV.killer) && (0, vV.e)(eV.victim) && XV((() => bV(eV)))
      })), (0, rV.f)((() => {
        TV = []
      })))
    }
    const zV = Object.freeze([0, 0, 0]),
      GV = [0, 0, 0],
      WV = [0, 0, 0],
      RV = {
        kill: {
          watch(VV) {
            if (AV = !0, 0 === TV.length) return PV = VV, () => {
              AV = !1, PV = null
            };
            const eV = setTimeout((() => {
              const eV = TV;
              TV = [], PV = VV;
              for (const JV of eV) try {
                VV(JV())
              } catch (xV) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", xV)
              }
            }), 0);
            return () => {
              clearTimeout(eV), AV = !1, PV = null
            }
          }
        }
      },
      gV = {
        localPos() {
          const VV = (0, nV.k)();
          if (null === VV) return zV;
          const eV = VV.api.apiView;
          for (let xV = 0; xV < 3; xV++) GV[xV] = pV.s.localPos(eV, 0, xV);
          return GV
        },
        targetedBlockPos() {
          const VV = (0, nV.k)();
          if (null === VV || pV.s.targetBlockId(VV.api.apiView, 0) === pV.Yc) return null;
          for (let eV = 0; eV < 3; eV++) WV[eV] = pV.s.targetBlock(VV.api.apiView, 0, eV);
          return WV
        }
      }
  },
  40197: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      constructor() {
        this.members = new Map
      }
      apply(VV) {
        const eV = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const JV of VV.VV) {
          let VV = this.members.get(JV.eV);
          if (VV || (VV = {
              name: null,
              settings: {}
            }, this.members.set(JV.eV, VV), eV.added.push(JV.eV)), null !== JV.xV && (VV.name = JV.xV), null !== JV.JV || JV.YV.length > 0) {
            const xV = null === JV.JV ? {} : JSON.parse(JV.JV);
            Object.assign(VV.settings, xV);
            for (const eV of JV.YV) delete VV.settings[eV], xV[eV] = void 0;
            eV.settingChanges.push({
              playerId: JV.eV,
              settings: xV
            })
          }
        }
        for (const JV of VV.yV) {
          const VV = this.members.get(JV);
          var xV;
          if (VV) this.members.delete(JV), eV.removed.push({
            playerId: JV,
            name: null !== (xV = VV.name) && void 0 !== xV ? xV : void 0
          })
        }
        return eV
      }
      has(VV) {
        return this.members.has(VV)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(VV) {
        var eV, xV;
        return null !== (eV = null === (xV = this.members.get(VV)) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : void 0
      }
      getSettings(VV) {
        var eV;
        return null === (eV = this.members.get(VV)) || void 0 === eV ? void 0 : eV.settings
      }
      getSetting(VV, eV) {
        var xV;
        return null === (xV = this.members.get(VV)) || void 0 === xV ? void 0 : xV.settings[eV]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);