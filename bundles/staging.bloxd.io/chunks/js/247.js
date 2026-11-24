export const id = 247;
export const ids = [247];
export const modules = {
  40942: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      d: () => rD
    });
    var pD = wD(1941);
    let sD = !1;

    function KD() {
      sD = !0
    }

    function rD() {
      sD && (sD = !1, (0, pD.b)())
    }
  },
  40940: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => KD,
      j: () => LD
    });
    var pD = wD(40506),
      sD = wD(40516);

    function KD(DD) {
      if (DD.queries.drawCensus() < pD.yb.BYTES) return null;
      const zD = DD.memoryData(DD.scratch(), pD.yb.BYTES, 4, "the draw census");
      return null === zD ? null : {
        terrainOpaque: pD.yb.terrainOpaque(zD, 0),
        terrainTransparent: pD.yb.terrainTransparent(zD, 0),
        terrainPack: pD.yb.terrainPack(zD, 0),
        earthSky: pD.yb.earthSky(zD, 0),
        skyMeshes: pD.yb.skyMeshes(zD, 0),
        regular: pD.yb.regular(zD, 0),
        thin: pD.yb.thin(zD, 0),
        line: pD.yb.line(zD, 0),
        text: pD.yb.text(zD, 0),
        particles: pD.yb.particles(zD, 0),
        terrainParts: pD.yb.terrainParts(zD, 0),
        terrainCompiling: pD.yb.terrainCompiling(zD, 0),
        ringCopiesMax: pD.yb.ringCopiesMax(zD, 0),
        ringBusyWrites: pD.yb.ringBusyWrites(zD, 0)
      }
    }

    function rD(DD) {
      const {
        terrainOpaque: zD,
        terrainTransparent: wD,
        earthSky: pD,
        skyMeshes: sD,
        regular: KD,
        thin: rD,
        line: LD,
        text: cD,
        particles: gD
      } = DD;
      return zD + wD + pD + sD + KD + rD + LD + cD + gD
    }

    function LD() {
      const DD = (0, sD.i)();
      return !0 === (null === DD || void 0 === DD ? void 0 : DD.isCoreRunning) ? function(DD) {
        const zD = KD(DD);
        if (null === zD) return [];
        const {
          terrainOpaque: wD,
          terrainTransparent: pD,
          terrainPack: sD,
          earthSky: LD,
          skyMeshes: cD,
          regular: gD,
          thin: RD,
          line: AD,
          text: UD,
          particles: fD
        } = zD;
        return [{
          label: "Drawn",
          value: `${rD(zD)}`
        }, {
          label: "Terrain",
          value: `${wD} opaque / ${pD} transparent (${sD} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${gD} / ${RD}`
        }, {
          label: "Text / Lines",
          value: `${UD} / ${AD}`
        }, {
          label: "Sky / Particles",
          value: `${LD+cD} / ${fD}`
        }]
      }(DD.api) : []
    }
  },
  40919: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => ID,
      f: () => UD,
      g: () => fD
    });
    var pD = wD(1950),
      sD = wD(1301),
      KD = wD(40516),
      rD = wD(40535),
      LD = wD(40540),
      cD = wD(40558);
    const gD = new sD.b;
    let RD = !1;

    function AD(DD) {
      const zD = (0, KD.i)();
      return null !== zD && +DD === zD.api.localId
    }

    function UD() {
      RD || (RD = !0, (0, cD.l)(rD.j, (DD => {
        var zD, wD;
        const pD = (0, LD.e)(rD.j, DD);
        if (!(0, LD.b)(pD)) return;
        const sD = pD;
        AD(sD.np) && fD(sD.Mp, {
          icon: sD.Ss,
          level: sD.Ws,
          displayName: null !== (zD = sD.Op) && void 0 !== zD ? zD : null,
          durationMs: null !== (wD = sD.ls) && void 0 !== wD ? wD : null
        })
      })), (0, cD.l)(rD.S, (DD => {
        const zD = (0, LD.e)(rD.S, DD);
        if (!(0, LD.b)(zD)) return;
        const wD = zD;
        AD(wD.np) && pD.d.remove(wD.Mp)
      })), (0, cD.f)((() => {
        pD.d.clear()
      })))
    }

    function fD(DD, zD) {
      pD.d.update(DD, zD), gD.forEach((zD => {
        zD(DD)
      }))
    }
    const ID = {
      localEffectUpdated: {
        watch: DD => gD.add(DD)
      }
    }
  },
  40928: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD
    });
    var pD = wD(4820),
      sD = wD(4817),
      KD = wD(40544),
      rD = wD(40558);
    const LD = new Set(pD.M),
      cD = pD.M.map((DD => (new TextEncoder).encode(DD))),
      gD = new Map;

    function RD(DD, zD) {
      var wD;
      return null === (wD = gD.get(DD)) || void 0 === wD ? void 0 : wD[zD]
    }(0, rD.l)(pD.ec.NewOtherEntitySettings, (DD => {
      DD.payloadKind === sD.pc.Msgpack && cD.some((zD => function(DD, zD) {
        const wD = zD[0];
        for (let pD = DD.indexOf(wD); - 1 !== pD && pD + zD.length <= DD.length; pD = DD.indexOf(wD, pD + 1)) {
          let wD = 1;
          for (; wD < zD.length && DD[pD + wD] === zD[wD];) wD++;
          if (wD === zD.length) return !0
        }
        return !1
      }(DD.payload, zD))) && function(DD) {
        if (null === DD || "object" !== typeof DD || null === DD.settings || "object" !== typeof DD.settings) return;
        const zD = String(DD.eId),
          wD = DD.settings;
        let pD = gD.get(zD);
        for (const sD in wD) {
          if (!LD.has(sD)) continue;
          const DD = wD[sD];
          null === DD || void 0 === DD ? pD && delete pD[sD] : (pD ??= {}, pD[sD] = DD)
        }
        pD && gD.set(zD, pD)
      }((0, KD.b)(DD.payload))
    })), (0, rD.f)((() => {
      gD.clear()
    }))
  },
  40916: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => fD,
      e: () => gD,
      g: () => AD
    });
    var pD = wD(38967),
      sD = wD(1932),
      KD = wD(1301),
      rD = wD(40535),
      LD = wD(40540),
      cD = wD(40558);
    const gD = new pD.e;
    let RD = {};

    function AD(DD) {
      return RD[DD]
    }
    const UD = new KD.b;

    function fD(DD) {
      return UD.add(DD)
    }

    function ID(DD) {
      UD.callEach(DD, "a roster listener")
    }(0, cD.l)(rD.cb, (DD => {
      const zD = (0, LD.e)(rD.cb, DD);
      if (void 0 === zD) return;
      const wD = zD.Hw.some((DD => {
          let {
            qw: zD,
            Dp: wD
          } = DD;
          return null !== wD && gD.has(zD) && gD.getName(zD) !== wD
        })),
        {
          added: pD,
          removed: KD,
          settingChanges: cD
        } = gD.apply(zD),
        RD = new Set;
      for (const sD of cD)
        for (const DD in sD.settings) RD.add(DD);
      const AD = wD || pD.length > 0 || KD.length > 0;
      (AD || RD.has("hideNameSeed")) && function() {
        const DD = new Map;
        for (const zD of gD.ids()) {
          const wD = gD.getName(zD),
            pD = gD.getSetting(zD, "hideNameSeed");
          void 0 !== wD && void 0 !== pD && null !== pD && DD.set(wD, pD)
        }
        sD.d.replaceAll(DD)
      }(), ID({
        kind: "roster",
        members: AD,
        settings: RD
      })
    })), (0, cD.l)(rD.O, (DD => {
      const zD = (0, LD.e)(rD.O, DD);
      if (void 0 !== zD) {
        for (const {
            Vp: DD,
            Pp: wD,
            Cp: pD
          }
          of zD) RD[DD] = {
          ...RD[DD],
          [wD]: pD
        };
        ID({
          kind: "cosmetics",
          updates: zD
        })
      }
    })), (0, cD.f)((() => {
      gD.clear(), RD = {}, sD.d.clear(), ID({
        kind: "reset"
      })
    })), (0, cD.h)((() => {
      gD.clear(), ID({
        kind: "reset"
      })
    }))
  },
  40931: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => CD,
      f: () => GD,
      g: () => jD,
      h: () => dD
    });
    var pD = wD(1270),
      sD = wD(608),
      KD = wD(103),
      rD = wD(4820),
      LD = wD(40506),
      cD = wD(40529),
      gD = wD(40516),
      RD = wD(40928),
      AD = wD(40916),
      UD = wD(40540),
      fD = wD(40558);

    function ID(DD) {
      let {
        deadEId: zD,
        killerEId: wD,
        killerLifeformType: pD,
        withItem: sD,
        killstreak: KD
      } = DD;
      return {
        killer: OD({
          eId: wD,
          lifeformType: pD
        }),
        victim: OD({
          eId: zD
        }),
        withItem: sD,
        killstreak: KD
      }
    }

    function BD(DD) {
      let {
        killer: zD,
        victim: wD,
        withItem: pD
      } = DD;
      return {
        killer: OD(zD),
        victim: OD(wD),
        withItem: pD,
        killstreak: 0
      }
    }

    function GD(DD) {
      XD && PD((() => "killed" === DD.kind ? ID(DD.body) : BD(DD.body)))
    }
    const hD = "#2727f1",
      nD = "#912c2c";

    function MD(DD, zD) {
      var wD;
      return AD.e.has(DD) ? null === (wD = AD.e.getSettings(DD)) || void 0 === wD ? void 0 : wD[zD] : (0, RD.d)(DD, zD)
    }

    function OD(DD) {
      var zD, wD, rD, LD, RD;
      let {
        eId: UD,
        name: fD,
        colour: ID,
        lifeformType: BD
      } = DD;
      if (void 0 === UD || null === UD || "" === UD) {
        const DD = fD || null;
        return {
          id: null,
          shownName: DD,
          lifeformType: null === DD && null !== BD && void 0 !== BD ? BD : null,
          colour: ID || null,
          local: !1,
          realName: null
        }
      }
      const GD = String(UD),
        OD = null === (zD = (0, gD.i)()) || void 0 === zD ? void 0 : zD.api,
        JD = void 0 !== OD && String(OD.localId) === GD,
        ED = null !== (wD = AD.e.getName(GD)) && void 0 !== wD ? wD : null,
        QD = null !== (rD = MD(GD, "hideNameSeed")) && void 0 !== rD ? rD : null;
      let XD = null === ED ? null : (0, pD.e)(ED, !KD.featureFlags.canSeeRealPlayerNames, QD) || null,
        VD = null;
      if (null === XD && void 0 !== OD) {
        const DD = OD.getEntityType(GD);
        "Player" !== DD && (XD = (0, cD.h)(OD, +GD) || null), VD = sD.k.includes(DD) ? DD : null
      }
      return {
        id: GD,
        shownName: XD,
        lifeformType: null === XD && null !== (LD = null !== (RD = VD) && void 0 !== RD ? RD : BD) && void 0 !== LD ? LD : null,
        colour: ID || MD(GD, "killfeedColour") || (JD ? hD : nD),
        local: JD,
        realName: ED
      }
    }
    const JD = 32;
    let ED = [],
      QD = null,
      XD = !1,
      VD = !1;

    function PD(DD) {
      null === QD ? (ED.length === JD && ED.shift(), ED.push(DD)) : QD(DD())
    }

    function CD() {
      VD || (VD = !0, (0, fD.l)(rD.ec.PlayerKilled, (DD => {
        const zD = (0, UD.i)(DD);
        (0, UD.b)(zD) && PD((() => ID(zD)))
      })), (0, fD.l)(rD.ec.CustomKillfeed, (DD => {
        const zD = (0, UD.i)(DD);
        (0, UD.b)(zD) && (0, UD.b)(zD.killer) && (0, UD.b)(zD.victim) && PD((() => BD(zD)))
      })), (0, fD.f)((() => {
        ED = []
      })))
    }
    const xD = Object.freeze([0, 0, 0]),
      TD = [0, 0, 0],
      bD = [0, 0, 0],
      jD = {
        kill: {
          watch(DD) {
            if (XD = !0, 0 === ED.length) return QD = DD, () => {
              XD = !1, QD = null
            };
            const zD = setTimeout((() => {
              const zD = ED;
              ED = [], QD = DD;
              for (const pD of zD) try {
                DD(pD())
              } catch (wD) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", wD)
              }
            }), 0);
            return () => {
              clearTimeout(zD), XD = !1, QD = null
            }
          }
        }
      },
      dD = {
        localPos() {
          const DD = (0, gD.i)();
          if (null === DD) return xD;
          const zD = DD.api.apiView;
          for (let wD = 0; wD < 3; wD++) TD[wD] = LD.v.localPos(zD, 0, wD);
          return TD
        },
        targetedBlockPos() {
          const DD = (0, gD.i)();
          if (null === DD || LD.v.targetBlockId(DD.api.apiView, 0) === LD.Xc) return null;
          for (let zD = 0; zD < 3; zD++) bD[zD] = LD.v.targetBlock(DD.api.apiView, 0, zD);
          return bD
        }
      }
  },
  38967: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor() {
        this.members = new Map
      }
      apply(DD) {
        const zD = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const pD of DD.Hw) {
          let DD = this.members.get(pD.qw);
          if (DD || (DD = {
              name: null,
              settings: {}
            }, this.members.set(pD.qw, DD), zD.added.push(pD.qw)), null !== pD.Dp && (DD.name = pD.Dp), null !== pD.zp || pD.wp.length > 0) {
            const wD = null === pD.zp ? {} : JSON.parse(pD.zp);
            Object.assign(DD.settings, wD);
            for (const zD of pD.wp) delete DD.settings[zD], wD[zD] = void 0;
            zD.settingChanges.push({
              playerId: pD.qw,
              settings: wD
            })
          }
        }
        for (const pD of DD.sp) {
          const DD = this.members.get(pD);
          var wD;
          if (DD) this.members.delete(pD), zD.removed.push({
            playerId: pD,
            name: null !== (wD = DD.name) && void 0 !== wD ? wD : void 0
          })
        }
        return zD
      }
      has(DD) {
        return this.members.has(DD)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(DD) {
        var zD, wD;
        return null !== (zD = null === (wD = this.members.get(DD)) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : void 0
      }
      getSettings(DD) {
        var zD;
        return null === (zD = this.members.get(DD)) || void 0 === zD ? void 0 : zD.settings
      }
      getSetting(DD, zD) {
        var wD;
        return null === (wD = this.members.get(DD)) || void 0 === wD ? void 0 : wD.settings[zD]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);