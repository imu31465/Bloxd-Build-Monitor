export const id = 272;
export const ids = [272];
export const modules = {
  42144: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      h: () => aM
    });
    var OM = iM(2050);
    let SM = !1;

    function jM() {
      SM = !0
    }

    function aM() {
      SM && (SM = !1, (0, OM.c)())
    }
  },
  42135: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      f: () => jM,
      j: () => PM
    });
    var OM = iM(41669),
      SM = iM(41677);

    function jM(MM) {
      if (MM.queries.drawCensus() < OM.wb.BYTES) return null;
      const rM = MM.memoryData(MM.scratch(), OM.wb.BYTES, 4, "the draw census");
      return null === rM ? null : {
        terrainOpaque: OM.wb.terrainOpaque(rM, 0),
        terrainTransparent: OM.wb.terrainTransparent(rM, 0),
        terrainPack: OM.wb.terrainPack(rM, 0),
        earthSky: OM.wb.earthSky(rM, 0),
        skyMeshes: OM.wb.skyMeshes(rM, 0),
        regular: OM.wb.regular(rM, 0),
        thin: OM.wb.thin(rM, 0),
        line: OM.wb.line(rM, 0),
        text: OM.wb.text(rM, 0),
        particles: OM.wb.particles(rM, 0),
        terrainParts: OM.wb.terrainParts(rM, 0),
        terrainCompiling: OM.wb.terrainCompiling(rM, 0),
        ringCopiesMax: OM.wb.ringCopiesMax(rM, 0),
        ringBusyWrites: OM.wb.ringBusyWrites(rM, 0)
      }
    }

    function aM(MM) {
      const {
        terrainOpaque: rM,
        terrainTransparent: iM,
        earthSky: OM,
        skyMeshes: SM,
        regular: jM,
        thin: aM,
        line: PM,
        text: nM,
        particles: QM
      } = MM;
      return rM + iM + OM + SM + jM + aM + PM + nM + QM
    }

    function PM() {
      const MM = (0, SM.e)();
      return !0 === (null === MM || void 0 === MM ? void 0 : MM.isCoreRunning) ? function(MM) {
        const rM = jM(MM);
        if (null === rM) return [];
        const {
          terrainOpaque: iM,
          terrainTransparent: OM,
          terrainPack: SM,
          earthSky: PM,
          skyMeshes: nM,
          regular: QM,
          thin: zM,
          line: LM,
          text: mM,
          particles: HM
        } = rM;
        return [{
          label: "Drawn",
          value: `${aM(rM)}`
        }, {
          label: "Terrain",
          value: `${iM} opaque / ${OM} transparent (${SM} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${QM} / ${zM}`
        }, {
          label: "Text / Lines",
          value: `${mM} / ${LM}`
        }, {
          label: "Sky / Particles",
          value: `${PM+nM} / ${HM}`
        }]
      }(MM.api) : []
    }
  },
  42111: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => hM,
      e: () => mM,
      f: () => HM
    });
    var OM = iM(2058),
      SM = iM(1319),
      jM = iM(41677),
      aM = iM(41697),
      PM = iM(41704),
      nM = iM(41712);
    const QM = new SM.d;
    let zM = !1;

    function LM(MM) {
      const rM = (0, jM.e)();
      return null !== rM && +MM === rM.api.localId
    }

    function mM() {
      zM || (zM = !0, (0, nM.h)(aM.k, (MM => {
        var rM, iM;
        const OM = (0, PM.d)(aM.k, MM);
        if (!(0, PM.c)(OM)) return;
        const SM = OM;
        LM(SM.Pi) && HM(SM.ni, {
          icon: SM.Ui,
          level: SM.Ci,
          displayName: null !== (rM = SM.Qi) && void 0 !== rM ? rM : null,
          durationMs: null !== (iM = SM.Gi) && void 0 !== iM ? iM : null
        })
      })), (0, nM.h)(aM.P, (MM => {
        const rM = (0, PM.d)(aM.P, MM);
        if (!(0, PM.c)(rM)) return;
        const iM = rM;
        LM(iM.Pi) && OM.d.remove(iM.ni)
      })), (0, nM.c)((() => {
        OM.d.clear()
      })))
    }

    function HM(MM, rM) {
      OM.d.update(MM, rM), QM.forEach((rM => {
        rM(MM)
      }))
    }
    const hM = {
      localEffectUpdated: {
        watch: MM => QM.add(MM)
      }
    }
  },
  42119: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM
    });
    var OM = iM(5200),
      SM = iM(5198),
      jM = iM(41706),
      aM = iM(41712);
    const PM = new Set(OM.M),
      nM = OM.M.map((MM => (new TextEncoder).encode(MM))),
      QM = new Map;

    function zM(MM, rM) {
      var iM;
      return null === (iM = QM.get(MM)) || void 0 === iM ? void 0 : iM[rM]
    }(0, aM.h)(OM.hc.NewOtherEntitySettings, (MM => {
      MM.payloadKind === SM.hc.Msgpack && nM.some((rM => function(MM, rM) {
        const iM = rM[0];
        for (let OM = MM.indexOf(iM); - 1 !== OM && OM + rM.length <= MM.length; OM = MM.indexOf(iM, OM + 1)) {
          let iM = 1;
          for (; iM < rM.length && MM[OM + iM] === rM[iM];) iM++;
          if (iM === rM.length) return !0
        }
        return !1
      }(MM.payload, rM))) && function(MM) {
        if (null === MM || "object" !== typeof MM || null === MM.settings || "object" !== typeof MM.settings) return;
        const rM = String(MM.eId),
          iM = MM.settings;
        let OM = QM.get(rM);
        for (const SM in iM) {
          if (!PM.has(SM)) continue;
          const MM = iM[SM];
          null === MM || void 0 === MM ? OM && delete OM[SM] : (OM ??= {}, OM[SM] = MM)
        }
        OM && QM.set(rM, OM)
      }((0, jM.c)(MM.payload))
    })), (0, aM.c)((() => {
      QM.clear()
    }))
  },
  42106: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => HM,
      e: () => QM,
      g: () => LM
    });
    var OM = iM(40036),
      SM = iM(2045),
      jM = iM(1319),
      aM = iM(41697),
      PM = iM(41704),
      nM = iM(41712);
    const QM = new OM.c;
    let zM = {};

    function LM(MM) {
      return zM[MM]
    }
    const mM = new jM.d;

    function HM(MM) {
      return mM.add(MM)
    }

    function hM(MM) {
      mM.callEach(MM, "a roster listener")
    }(0, nM.h)(aM.W, (MM => {
      const rM = (0, PM.d)(aM.W, MM);
      if (void 0 === rM) return;
      const iM = rM.MM.some((MM => {
          let {
            rM: rM,
            iM: iM
          } = MM;
          return null !== iM && QM.has(rM) && QM.getName(rM) !== iM
        })),
        {
          added: OM,
          removed: jM,
          settingChanges: nM
        } = QM.apply(rM),
        zM = new Set;
      for (const SM of nM)
        for (const MM in SM.settings) zM.add(MM);
      const LM = iM || OM.length > 0 || jM.length > 0;
      (LM || zM.has("hideNameSeed")) && function() {
        const MM = new Map;
        for (const rM of QM.ids()) {
          const iM = QM.getName(rM),
            OM = QM.getSetting(rM, "hideNameSeed");
          void 0 !== iM && void 0 !== OM && null !== OM && MM.set(iM, OM)
        }
        SM.c.replaceAll(MM)
      }(), hM({
        kind: "roster",
        members: LM,
        settings: zM
      })
    })), (0, nM.h)(aM.O, (MM => {
      const rM = (0, PM.d)(aM.O, MM);
      if (void 0 !== rM) {
        for (const {
            Xi: MM,
            Ii: iM,
            Ki: OM
          }
          of rM) zM[MM] = {
          ...zM[MM],
          [iM]: OM
        };
        hM({
          kind: "cosmetics",
          updates: rM
        })
      }
    })), (0, nM.c)((() => {
      QM.clear(), zM = {}, SM.c.clear(), hM({
        kind: "reset"
      })
    })), (0, nM.e)((() => {
      QM.clear(), hM({
        kind: "reset"
      })
    }))
  },
  42126: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => gM,
      d: () => dM,
      e: () => WM,
      i: () => sM
    });
    var OM = iM(1279),
      SM = iM(613),
      jM = iM(83),
      aM = iM(5200),
      PM = iM(41669),
      nM = iM(41695),
      QM = iM(41677),
      zM = iM(42119),
      LM = iM(42106),
      mM = iM(41704),
      HM = iM(41712);

    function hM(MM) {
      let {
        deadEId: rM,
        killerEId: iM,
        killerLifeformType: OM,
        withItem: SM,
        killstreak: jM
      } = MM;
      return {
        killer: UM({
          eId: iM,
          lifeformType: OM
        }),
        victim: UM({
          eId: rM
        }),
        withItem: SM,
        killstreak: jM
      }
    }

    function JM(MM) {
      let {
        killer: rM,
        victim: iM,
        withItem: OM
      } = MM;
      return {
        killer: UM(rM),
        victim: UM(iM),
        withItem: OM,
        killstreak: 0
      }
    }

    function dM(MM) {
      bM && tM((() => "killed" === MM.kind ? hM(MM.body) : JM(MM.body)))
    }
    const yM = "#2727f1",
      lM = "#912c2c";

    function EM(MM, rM) {
      var iM;
      return LM.e.has(MM) ? null === (iM = LM.e.getSettings(MM)) || void 0 === iM ? void 0 : iM[rM] : (0, zM.d)(MM, rM)
    }

    function UM(MM) {
      var rM, iM, aM, PM, zM;
      let {
        eId: mM,
        name: HM,
        colour: hM,
        lifeformType: JM
      } = MM;
      if (void 0 === mM || null === mM || "" === mM) {
        const MM = HM || null;
        return {
          id: null,
          shownName: MM,
          lifeformType: null === MM && null !== JM && void 0 !== JM ? JM : null,
          colour: hM || null,
          local: !1,
          realName: null
        }
      }
      const dM = String(mM),
        UM = null === (rM = (0, QM.e)()) || void 0 === rM ? void 0 : rM.api,
        GM = void 0 !== UM && String(UM.localId) === dM,
        CM = null !== (iM = LM.e.getName(dM)) && void 0 !== iM ? iM : null,
        eM = null !== (aM = EM(dM, "hideNameSeed")) && void 0 !== aM ? aM : null;
      let bM = null === CM ? null : (0, OM.e)(CM, !jM.featureFlags.canSeeRealPlayerNames, eM) || null,
        wM = null;
      if (null === bM && void 0 !== UM) {
        const MM = UM.getEntityType(dM);
        "Player" !== MM && (bM = (0, nM.j)(UM, +dM) || null), wM = SM.j.includes(MM) ? MM : null
      }
      return {
        id: dM,
        shownName: bM,
        lifeformType: null === bM && null !== (PM = null !== (zM = wM) && void 0 !== zM ? zM : JM) && void 0 !== PM ? PM : null,
        colour: hM || EM(dM, "killfeedColour") || (GM ? yM : lM),
        local: GM,
        realName: CM
      }
    }
    const GM = 32;
    let CM = [],
      eM = null,
      bM = !1,
      wM = !1;

    function tM(MM) {
      null === eM ? (CM.length === GM && CM.shift(), CM.push(MM)) : eM(MM())
    }

    function gM() {
      wM || (wM = !0, (0, HM.h)(aM.hc.PlayerKilled, (MM => {
        const rM = (0, mM.f)(MM);
        (0, mM.c)(rM) && tM((() => hM(rM)))
      })), (0, HM.h)(aM.hc.CustomKillfeed, (MM => {
        const rM = (0, mM.f)(MM);
        (0, mM.c)(rM) && (0, mM.c)(rM.killer) && (0, mM.c)(rM.victim) && tM((() => JM(rM)))
      })), (0, HM.c)((() => {
        CM = []
      })))
    }
    const uM = Object.freeze([0, 0, 0]),
      RM = [0, 0, 0],
      pM = [0, 0, 0],
      WM = {
        kill: {
          watch(MM) {
            if (bM = !0, 0 === CM.length) return eM = MM, () => {
              bM = !1, eM = null
            };
            const rM = setTimeout((() => {
              const rM = CM;
              CM = [], eM = MM;
              for (const OM of rM) try {
                MM(OM())
              } catch (iM) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", iM)
              }
            }), 0);
            return () => {
              clearTimeout(rM), bM = !1, eM = null
            }
          }
        }
      },
      sM = {
        localPos() {
          const MM = (0, QM.e)();
          if (null === MM) return uM;
          const rM = MM.api.apiView;
          for (let iM = 0; iM < 3; iM++) RM[iM] = PM.v.localPos(rM, 0, iM);
          return RM
        },
        targetedBlockPos() {
          const MM = (0, QM.e)();
          if (null === MM || PM.v.targetBlockId(MM.api.apiView, 0) === PM.Pc) return null;
          for (let rM = 0; rM < 3; rM++) pM[rM] = PM.v.targetBlock(MM.api.apiView, 0, rM);
          return pM
        }
      }
  },
  40036: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      constructor() {
        this.members = new Map
      }
      apply(MM) {
        const rM = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const OM of MM.MM) {
          let MM = this.members.get(OM.rM);
          if (MM || (MM = {
              name: null,
              settings: {}
            }, this.members.set(OM.rM, MM), rM.added.push(OM.rM)), null !== OM.iM && (MM.name = OM.iM), null !== OM.OM || OM.SM.length > 0) {
            const iM = null === OM.OM ? {} : JSON.parse(OM.OM);
            Object.assign(MM.settings, iM);
            for (const rM of OM.SM) delete MM.settings[rM], iM[rM] = void 0;
            rM.settingChanges.push({
              playerId: OM.rM,
              settings: iM
            })
          }
        }
        for (const OM of MM.jM) {
          const MM = this.members.get(OM);
          var iM;
          if (MM) this.members.delete(OM), rM.removed.push({
            playerId: OM,
            name: null !== (iM = MM.name) && void 0 !== iM ? iM : void 0
          })
        }
        return rM
      }
      has(MM) {
        return this.members.has(MM)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(MM) {
        var rM, iM;
        return null !== (rM = null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : void 0
      }
      getSettings(MM) {
        var rM;
        return null === (rM = this.members.get(MM)) || void 0 === rM ? void 0 : rM.settings
      }
      getSetting(MM, rM) {
        var iM;
        return null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.settings[rM]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);