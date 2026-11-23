export const id = 247;
export const ids = [247];
export const modules = {
  40866: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      g: () => nC
    });
    var QC = ZC(1851);
    let wC = !1;

    function bC() {
      wC = !0
    }

    function nC() {
      wC && (wC = !1, (0, QC.c)())
    }
  },
  40858: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => bC,
      e: () => fC
    });
    var QC = ZC(40412),
      wC = ZC(40423);

    function bC(CC) {
      if (CC.queries.drawCensus() < QC.Gb.BYTES) return null;
      const zC = CC.memoryData(CC.scratch(), QC.Gb.BYTES, 4, "the draw census");
      return null === zC ? null : {
        terrainOpaque: QC.Gb.terrainOpaque(zC, 0),
        terrainTransparent: QC.Gb.terrainTransparent(zC, 0),
        terrainPack: QC.Gb.terrainPack(zC, 0),
        earthSky: QC.Gb.earthSky(zC, 0),
        skyMeshes: QC.Gb.skyMeshes(zC, 0),
        regular: QC.Gb.regular(zC, 0),
        thin: QC.Gb.thin(zC, 0),
        line: QC.Gb.line(zC, 0),
        text: QC.Gb.text(zC, 0),
        particles: QC.Gb.particles(zC, 0),
        terrainParts: QC.Gb.terrainParts(zC, 0),
        terrainCompiling: QC.Gb.terrainCompiling(zC, 0),
        ringCopiesMax: QC.Gb.ringCopiesMax(zC, 0),
        ringBusyWrites: QC.Gb.ringBusyWrites(zC, 0)
      }
    }

    function nC(CC) {
      const {
        terrainOpaque: zC,
        terrainTransparent: ZC,
        earthSky: QC,
        skyMeshes: wC,
        regular: bC,
        thin: nC,
        line: fC,
        text: oC,
        particles: qC
      } = CC;
      return zC + ZC + QC + wC + bC + nC + fC + oC + qC
    }

    function fC() {
      const CC = (0, wC.k)();
      return !0 === (null === CC || void 0 === CC ? void 0 : CC.isCoreRunning) ? function(CC) {
        const zC = bC(CC);
        if (null === zC) return [];
        const {
          terrainOpaque: ZC,
          terrainTransparent: QC,
          terrainPack: wC,
          earthSky: fC,
          skyMeshes: oC,
          regular: qC,
          thin: FC,
          line: WC,
          text: NC,
          particles: MC
        } = zC;
        return [{
          label: "Drawn",
          value: `${nC(zC)}`
        }, {
          label: "Terrain",
          value: `${ZC} opaque / ${QC} transparent (${wC} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${qC} / ${FC}`
        }, {
          label: "Text / Lines",
          value: `${NC} / ${WC}`
        }, {
          label: "Sky / Particles",
          value: `${fC+oC} / ${MC}`
        }]
      }(CC.api) : []
    }
  },
  40842: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => gC,
      g: () => NC,
      k: () => MC
    });
    var QC = ZC(1858),
      wC = ZC(1248),
      bC = ZC(40423),
      nC = ZC(40446),
      fC = ZC(40449),
      oC = ZC(40470);
    const qC = new wC.d;
    let FC = !1;

    function WC(CC) {
      const zC = (0, bC.k)();
      return null !== zC && +CC === zC.api.localId
    }

    function NC() {
      FC || (FC = !0, (0, oC.l)(nC.m, (CC => {
        var zC, ZC;
        const QC = (0, fC.h)(nC.m, CC);
        if (!(0, fC.e)(QC)) return;
        const wC = QC;
        WC(wC.gQ) && MC(wC.SQ, {
          icon: wC.Aw,
          level: wC.Jw,
          displayName: null !== (zC = wC.pQ) && void 0 !== zC ? zC : null,
          durationMs: null !== (ZC = wC.xw) && void 0 !== ZC ? ZC : null
        })
      })), (0, oC.l)(nC.T, (CC => {
        const zC = (0, fC.h)(nC.T, CC);
        if (!(0, fC.e)(zC)) return;
        const ZC = zC;
        WC(ZC.gQ) && QC.c.remove(ZC.SQ)
      })), (0, oC.i)((() => {
        QC.c.clear()
      })))
    }

    function MC(CC, zC) {
      QC.c.update(CC, zC), qC.forEach((zC => {
        zC(CC)
      }))
    }
    const gC = {
      localEffectUpdated: {
        watch: CC => qC.add(CC)
      }
    }
  },
  40845: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => FC
    });
    var QC = ZC(4733),
      wC = ZC(4727),
      bC = ZC(40457),
      nC = ZC(40470);
    const fC = new Set(QC.S),
      oC = QC.S.map((CC => (new TextEncoder).encode(CC))),
      qC = new Map;

    function FC(CC, zC) {
      var ZC;
      return null === (ZC = qC.get(CC)) || void 0 === ZC ? void 0 : ZC[zC]
    }(0, nC.l)(QC.Bc.NewOtherEntitySettings, (CC => {
      CC.payloadKind === wC.hc.Msgpack && oC.some((zC => function(CC, zC) {
        const ZC = zC[0];
        for (let QC = CC.indexOf(ZC); - 1 !== QC && QC + zC.length <= CC.length; QC = CC.indexOf(ZC, QC + 1)) {
          let ZC = 1;
          for (; ZC < zC.length && CC[QC + ZC] === zC[ZC];) ZC++;
          if (ZC === zC.length) return !0
        }
        return !1
      }(CC.payload, zC))) && function(CC) {
        if (null === CC || "object" !== typeof CC || null === CC.settings || "object" !== typeof CC.settings) return;
        const zC = String(CC.eId),
          ZC = CC.settings;
        let QC = qC.get(zC);
        for (const wC in ZC) {
          if (!fC.has(wC)) continue;
          const CC = ZC[wC];
          null === CC || void 0 === CC ? QC && delete QC[wC] : (QC ??= {}, QC[wC] = CC)
        }
        QC && qC.set(zC, QC)
      }((0, bC.c)(CC.payload))
    })), (0, nC.i)((() => {
      qC.clear()
    }))
  },
  40838: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => MC,
      f: () => qC,
      j: () => WC
    });
    var QC = ZC(38832),
      wC = ZC(1843),
      bC = ZC(1248),
      nC = ZC(40446),
      fC = ZC(40449),
      oC = ZC(40470);
    const qC = new QC.c;
    let FC = {};

    function WC(CC) {
      return FC[CC]
    }
    const NC = new bC.d;

    function MC(CC) {
      return NC.add(CC)
    }

    function gC(CC) {
      NC.callEach(CC, "a roster listener")
    }(0, oC.l)(nC.cb, (CC => {
      const zC = (0, fC.h)(nC.cb, CC);
      if (void 0 === zC) return;
      const ZC = zC.OZ.some((CC => {
          let {
            kZ: zC,
            VZ: ZC
          } = CC;
          return null !== ZC && qC.has(zC) && qC.getName(zC) !== ZC
        })),
        {
          added: QC,
          removed: bC,
          settingChanges: oC
        } = qC.apply(zC),
        FC = new Set;
      for (const wC of oC)
        for (const CC in wC.settings) FC.add(CC);
      const WC = ZC || QC.length > 0 || bC.length > 0;
      (WC || FC.has("hideNameSeed")) && function() {
        const CC = new Map;
        for (const zC of qC.ids()) {
          const ZC = qC.getName(zC),
            QC = qC.getSetting(zC, "hideNameSeed");
          void 0 !== ZC && void 0 !== QC && null !== QC && CC.set(ZC, QC)
        }
        wC.d.replaceAll(CC)
      }(), gC({
        kind: "roster",
        members: WC,
        settings: FC
      })
    })), (0, oC.l)(nC.Q, (CC => {
      const zC = (0, fC.h)(nC.Q, CC);
      if (void 0 !== zC) {
        for (const {
            xQ: CC,
            JQ: ZC,
            IQ: QC
          }
          of zC) FC[CC] = {
          ...FC[CC],
          [ZC]: QC
        };
        gC({
          kind: "cosmetics",
          updates: zC
        })
      }
    })), (0, oC.i)((() => {
      qC.clear(), FC = {}, wC.d.clear(), gC({
        kind: "reset"
      })
    })), (0, oC.j)((() => {
      qC.clear(), gC({
        kind: "reset"
      })
    }))
  },
  40854: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => hC,
      g: () => pC,
      k: () => mC,
      m: () => HC
    });
    var QC = ZC(1211),
      wC = ZC(590),
      bC = ZC(77),
      nC = ZC(4733),
      fC = ZC(40412),
      oC = ZC(40440),
      qC = ZC(40423),
      FC = ZC(40845),
      WC = ZC(40838),
      NC = ZC(40449),
      MC = ZC(40470);

    function gC(CC) {
      let {
        deadEId: zC,
        killerEId: ZC,
        killerLifeformType: QC,
        withItem: wC,
        killstreak: bC
      } = CC;
      return {
        killer: AC({
          eId: ZC,
          lifeformType: QC
        }),
        victim: AC({
          eId: zC
        }),
        withItem: wC,
        killstreak: bC
      }
    }

    function SC(CC) {
      let {
        killer: zC,
        victim: ZC,
        withItem: QC
      } = CC;
      return {
        killer: AC(zC),
        victim: AC(ZC),
        withItem: QC,
        killstreak: 0
      }
    }

    function pC(CC) {
      iC && eC((() => "killed" === CC.kind ? gC(CC.body) : SC(CC.body)))
    }
    const PC = "#2727f1",
      GC = "#912c2c";

    function RC(CC, zC) {
      var ZC;
      return WC.f.has(CC) ? null === (ZC = WC.f.getSettings(CC)) || void 0 === ZC ? void 0 : ZC[zC] : (0, FC.c)(CC, zC)
    }

    function AC(CC) {
      var zC, ZC, nC, fC, FC;
      let {
        eId: NC,
        name: MC,
        colour: gC,
        lifeformType: SC
      } = CC;
      if (void 0 === NC || null === NC || "" === NC) {
        const CC = MC || null;
        return {
          id: null,
          shownName: CC,
          lifeformType: null === CC && null !== SC && void 0 !== SC ? SC : null,
          colour: gC || null,
          local: !1,
          realName: null
        }
      }
      const pC = String(NC),
        AC = null === (zC = (0, qC.k)()) || void 0 === zC ? void 0 : zC.api,
        xC = void 0 !== AC && String(AC.localId) === pC,
        JC = null !== (ZC = WC.f.getName(pC)) && void 0 !== ZC ? ZC : null,
        IC = null !== (nC = RC(pC, "hideNameSeed")) && void 0 !== nC ? nC : null;
      let iC = null === JC ? null : (0, QC.b)(JC, !bC.featureFlags.canSeeRealPlayerNames, IC) || null,
        vC = null;
      if (null === iC && void 0 !== AC) {
        const CC = AC.getEntityType(pC);
        "Player" !== CC && (iC = (0, oC.j)(AC, +pC) || null), vC = wC.i.includes(CC) ? CC : null
      }
      return {
        id: pC,
        shownName: iC,
        lifeformType: null === iC && null !== (fC = null !== (FC = vC) && void 0 !== FC ? FC : SC) && void 0 !== fC ? fC : null,
        colour: gC || RC(pC, "killfeedColour") || (xC ? PC : GC),
        local: xC,
        realName: JC
      }
    }
    const xC = 32;
    let JC = [],
      IC = null,
      iC = !1,
      vC = !1;

    function eC(CC) {
      null === IC ? (JC.length === xC && JC.shift(), JC.push(CC)) : IC(CC())
    }

    function hC() {
      vC || (vC = !0, (0, MC.l)(nC.Bc.PlayerKilled, (CC => {
        const zC = (0, NC.j)(CC);
        (0, NC.e)(zC) && eC((() => gC(zC)))
      })), (0, MC.l)(nC.Bc.CustomKillfeed, (CC => {
        const zC = (0, NC.j)(CC);
        (0, NC.e)(zC) && (0, NC.e)(zC.killer) && (0, NC.e)(zC.victim) && eC((() => SC(zC)))
      })), (0, MC.i)((() => {
        JC = []
      })))
    }
    const KC = Object.freeze([0, 0, 0]),
      YC = [0, 0, 0],
      dC = [0, 0, 0],
      mC = {
        kill: {
          watch(CC) {
            if (iC = !0, 0 === JC.length) return IC = CC, () => {
              iC = !1, IC = null
            };
            const zC = setTimeout((() => {
              const zC = JC;
              JC = [], IC = CC;
              for (const QC of zC) try {
                CC(QC())
              } catch (ZC) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", ZC)
              }
            }), 0);
            return () => {
              clearTimeout(zC), iC = !1, IC = null
            }
          }
        }
      },
      HC = {
        localPos() {
          const CC = (0, qC.k)();
          if (null === CC) return KC;
          const zC = CC.api.apiView;
          for (let ZC = 0; ZC < 3; ZC++) YC[ZC] = fC.w.localPos(zC, 0, ZC);
          return YC
        },
        targetedBlockPos() {
          const CC = (0, qC.k)();
          if (null === CC || fC.w.targetBlockId(CC.api.apiView, 0) === fC.rd) return null;
          for (let zC = 0; zC < 3; zC++) dC[zC] = fC.w.targetBlock(CC.api.apiView, 0, zC);
          return dC
        }
      }
  },
  38832: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      constructor() {
        this.members = new Map
      }
      apply(CC) {
        const zC = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const QC of CC.OZ) {
          let CC = this.members.get(QC.kZ);
          if (CC || (CC = {
              name: null,
              settings: {}
            }, this.members.set(QC.kZ, CC), zC.added.push(QC.kZ)), null !== QC.VZ && (CC.name = QC.VZ), null !== QC.CQ || QC.zQ.length > 0) {
            const ZC = null === QC.CQ ? {} : JSON.parse(QC.CQ);
            Object.assign(CC.settings, ZC);
            for (const zC of QC.zQ) delete CC.settings[zC], ZC[zC] = void 0;
            zC.settingChanges.push({
              playerId: QC.kZ,
              settings: ZC
            })
          }
        }
        for (const QC of CC.ZQ) {
          const CC = this.members.get(QC);
          var ZC;
          if (CC) this.members.delete(QC), zC.removed.push({
            playerId: QC,
            name: null !== (ZC = CC.name) && void 0 !== ZC ? ZC : void 0
          })
        }
        return zC
      }
      has(CC) {
        return this.members.has(CC)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(CC) {
        var zC, ZC;
        return null !== (zC = null === (ZC = this.members.get(CC)) || void 0 === ZC ? void 0 : ZC.name) && void 0 !== zC ? zC : void 0
      }
      getSettings(CC) {
        var zC;
        return null === (zC = this.members.get(CC)) || void 0 === zC ? void 0 : zC.settings
      }
      getSetting(CC, zC) {
        var ZC;
        return null === (ZC = this.members.get(CC)) || void 0 === ZC ? void 0 : ZC.settings[zC]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);