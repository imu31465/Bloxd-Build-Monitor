export const id = 252;
export const ids = [252];
export const modules = {
  41169: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      f: () => gT
    });
    var WT = mT(2057);
    let zT = !1;

    function MT() {
      zT = !0
    }

    function gT() {
      zT && (zT = !1, (0, WT.c)())
    }
  },
  41163: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT,
      d: () => MT,
      f: () => nT
    });
    var WT = mT(40709),
      zT = mT(40724);

    function MT(TT) {
      if (TT.queries.drawCensus() < WT.Bb.BYTES) return null;
      const UT = TT.memoryData(TT.scratch(), WT.Bb.BYTES, 4, "the draw census");
      return null === UT ? null : {
        terrainOpaque: WT.Bb.terrainOpaque(UT, 0),
        terrainTransparent: WT.Bb.terrainTransparent(UT, 0),
        terrainPack: WT.Bb.terrainPack(UT, 0),
        earthSky: WT.Bb.earthSky(UT, 0),
        skyMeshes: WT.Bb.skyMeshes(UT, 0),
        regular: WT.Bb.regular(UT, 0),
        thin: WT.Bb.thin(UT, 0),
        line: WT.Bb.line(UT, 0),
        text: WT.Bb.text(UT, 0),
        particles: WT.Bb.particles(UT, 0),
        terrainParts: WT.Bb.terrainParts(UT, 0),
        terrainCompiling: WT.Bb.terrainCompiling(UT, 0),
        ringCopiesMax: WT.Bb.ringCopiesMax(UT, 0),
        ringBusyWrites: WT.Bb.ringBusyWrites(UT, 0)
      }
    }

    function gT(TT) {
      const {
        terrainOpaque: UT,
        terrainTransparent: mT,
        earthSky: WT,
        skyMeshes: zT,
        regular: MT,
        thin: gT,
        line: nT,
        text: HT,
        particles: kT
      } = TT;
      return UT + mT + WT + zT + MT + gT + nT + HT + kT
    }

    function nT() {
      const TT = (0, zT.i)();
      return !0 === (null === TT || void 0 === TT ? void 0 : TT.isCoreRunning) ? function(TT) {
        const UT = MT(TT);
        if (null === UT) return [];
        const {
          terrainOpaque: mT,
          terrainTransparent: WT,
          terrainPack: zT,
          earthSky: nT,
          skyMeshes: HT,
          regular: kT,
          thin: jT,
          line: lT,
          text: LT,
          particles: pT
        } = UT;
        return [{
          label: "Drawn",
          value: `${gT(UT)}`
        }, {
          label: "Terrain",
          value: `${mT} opaque / ${WT} transparent (${zT} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${kT} / ${jT}`
        }, {
          label: "Text / Lines",
          value: `${LT} / ${lT}`
        }, {
          label: "Sky / Particles",
          value: `${nT+HT} / ${pT}`
        }]
      }(TT.api) : []
    }
  },
  41153: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => BT,
      f: () => LT,
      i: () => pT
    });
    var WT = mT(2060),
      zT = mT(1392),
      MT = mT(40724),
      gT = mT(40752),
      nT = mT(40756),
      HT = mT(40780);
    const kT = new zT.d;
    let jT = !1;

    function lT(TT) {
      const UT = (0, MT.i)();
      return null !== UT && +TT === UT.api.localId
    }

    function LT() {
      jT || (jT = !0, (0, HT.m)(gT.m, (TT => {
        var UT, mT;
        const WT = (0, nT.h)(gT.m, TT);
        if (!(0, nT.d)(WT)) return;
        const zT = WT;
        lT(zT.XT) && pT(zT.IT, {
          icon: zT.VU,
          level: zT.CU,
          displayName: null !== (UT = zT.QT) && void 0 !== UT ? UT : null,
          durationMs: null !== (mT = zT.uU) && void 0 !== mT ? mT : null
        })
      })), (0, HT.m)(gT.U, (TT => {
        const UT = (0, nT.h)(gT.U, TT);
        if (!(0, nT.d)(UT)) return;
        const mT = UT;
        lT(mT.XT) && WT.b.remove(mT.IT)
      })), (0, HT.h)((() => {
        WT.b.clear()
      })))
    }

    function pT(TT, UT) {
      WT.b.update(TT, UT), kT.forEach((UT => {
        UT(TT)
      }))
    }
    const BT = {
      localEffectUpdated: {
        watch: TT => kT.add(TT)
      }
    }
  },
  41156: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT
    });
    var WT = mT(4904),
      zT = mT(4895),
      MT = mT(40765),
      gT = mT(40780);
    const nT = new Set(WT.K),
      HT = WT.K.map((TT => (new TextEncoder).encode(TT))),
      kT = new Map;

    function jT(TT, UT) {
      var mT;
      return null === (mT = kT.get(TT)) || void 0 === mT ? void 0 : mT[UT]
    }(0, gT.m)(WT.$b.NewOtherEntitySettings, (TT => {
      TT.payloadKind === zT.lc.Msgpack && HT.some((UT => function(TT, UT) {
        const mT = UT[0];
        for (let WT = TT.indexOf(mT); - 1 !== WT && WT + UT.length <= TT.length; WT = TT.indexOf(mT, WT + 1)) {
          let mT = 1;
          for (; mT < UT.length && TT[WT + mT] === UT[mT];) mT++;
          if (mT === UT.length) return !0
        }
        return !1
      }(TT.payload, UT))) && function(TT) {
        if (null === TT || "object" !== typeof TT || null === TT.settings || "object" !== typeof TT.settings) return;
        const UT = String(TT.eId),
          mT = TT.settings;
        let WT = kT.get(UT);
        for (const zT in mT) {
          if (!nT.has(zT)) continue;
          const TT = mT[zT];
          null === TT || void 0 === TT ? WT && delete WT[zT] : (WT ??= {}, WT[zT] = TT)
        }
        WT && kT.set(UT, WT)
      }((0, MT.c)(TT.payload))
    })), (0, gT.h)((() => {
      kT.clear()
    }))
  },
  41145: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => pT,
      h: () => kT,
      k: () => lT
    });
    var WT = mT(39137),
      zT = mT(2054),
      MT = mT(1392),
      gT = mT(40752),
      nT = mT(40756),
      HT = mT(40780);
    const kT = new WT.e;
    let jT = {};

    function lT(TT) {
      return jT[TT]
    }
    const LT = new MT.d;

    function pT(TT) {
      return LT.add(TT)
    }

    function BT(TT) {
      LT.callEach(TT, "a roster listener")
    }(0, HT.m)(gT.bb, (TT => {
      const UT = (0, nT.h)(gT.bb, TT);
      if (void 0 === UT) return;
      const mT = UT.sT.some((TT => {
          let {
            FT: UT,
            PT: mT
          } = TT;
          return null !== mT && kT.has(UT) && kT.getName(UT) !== mT
        })),
        {
          added: WT,
          removed: MT,
          settingChanges: HT
        } = kT.apply(UT),
        jT = new Set;
      for (const zT of HT)
        for (const TT in zT.settings) jT.add(TT);
      const lT = mT || WT.length > 0 || MT.length > 0;
      (lT || jT.has("hideNameSeed")) && function() {
        const TT = new Map;
        for (const UT of kT.ids()) {
          const mT = kT.getName(UT),
            WT = kT.getSetting(UT, "hideNameSeed");
          void 0 !== mT && void 0 !== WT && null !== WT && TT.set(mT, WT)
        }
        zT.d.replaceAll(TT)
      }(), BT({
        kind: "roster",
        members: lT,
        settings: jT
      })
    })), (0, HT.m)(gT.Q, (TT => {
      const UT = (0, nT.h)(gT.Q, TT);
      if (void 0 !== UT) {
        for (const {
            dM: TT,
            wM: mT,
            tM: WT
          }
          of UT) jT[TT] = {
          ...jT[TT],
          [mT]: WT
        };
        BT({
          kind: "cosmetics",
          updates: UT
        })
      }
    })), (0, HT.h)((() => {
      kT.clear(), jT = {}, zT.d.clear(), BT({
        kind: "reset"
      })
    })), (0, HT.l)((() => {
      kT.clear(), BT({
        kind: "reset"
      })
    }))
  },
  41160: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => dT,
      c: () => cT,
      f: () => yT,
      i: () => XT
    });
    var WT = mT(1367),
      zT = mT(643),
      MT = mT(102),
      gT = mT(4904),
      nT = mT(40709),
      HT = mT(40743),
      kT = mT(40724),
      jT = mT(41156),
      lT = mT(41145),
      LT = mT(40756),
      pT = mT(40780);

    function BT(TT) {
      let {
        deadEId: UT,
        killerEId: mT,
        killerLifeformType: WT,
        withItem: zT,
        killstreak: MT
      } = TT;
      return {
        killer: iT({
          eId: mT,
          lifeformType: WT
        }),
        victim: iT({
          eId: UT
        }),
        withItem: zT,
        killstreak: MT
      }
    }

    function ZT(TT) {
      let {
        killer: UT,
        victim: mT,
        withItem: WT
      } = TT;
      return {
        killer: iT(UT),
        victim: iT(mT),
        withItem: WT,
        killstreak: 0
      }
    }

    function cT(TT) {
      YT && xT((() => "killed" === TT.kind ? BT(TT.body) : ZT(TT.body)))
    }
    const vT = "#2727f1",
      fT = "#912c2c";

    function qT(TT, UT) {
      var mT;
      return lT.h.has(TT) ? null === (mT = lT.h.getSettings(TT)) || void 0 === mT ? void 0 : mT[UT] : (0, jT.e)(TT, UT)
    }

    function iT(TT) {
      var UT, mT, gT, nT, jT;
      let {
        eId: LT,
        name: pT,
        colour: BT,
        lifeformType: ZT
      } = TT;
      if (void 0 === LT || null === LT || "" === LT) {
        const TT = pT || null;
        return {
          id: null,
          shownName: TT,
          lifeformType: null === TT && null !== ZT && void 0 !== ZT ? ZT : null,
          colour: BT || null,
          local: !1,
          realName: null
        }
      }
      const cT = String(LT),
        iT = null === (UT = (0, kT.i)()) || void 0 === UT ? void 0 : UT.api,
        bT = void 0 !== iT && String(iT.localId) === cT,
        OT = null !== (mT = lT.h.getName(cT)) && void 0 !== mT ? mT : null,
        eT = null !== (gT = qT(cT, "hideNameSeed")) && void 0 !== gT ? gT : null;
      let YT = null === OT ? null : (0, WT.d)(OT, !MT.featureFlags.canSeeRealPlayerNames, eT) || null,
        JT = null;
      if (null === YT && void 0 !== iT) {
        const TT = iT.getEntityType(cT);
        "Player" !== TT && (YT = (0, HT.j)(iT, +cT) || null), JT = zT.j.includes(TT) ? TT : null
      }
      return {
        id: cT,
        shownName: YT,
        lifeformType: null === YT && null !== (nT = null !== (jT = JT) && void 0 !== jT ? jT : ZT) && void 0 !== nT ? nT : null,
        colour: BT || qT(cT, "killfeedColour") || (bT ? vT : fT),
        local: bT,
        realName: OT
      }
    }
    const bT = 32;
    let OT = [],
      eT = null,
      YT = !1,
      JT = !1;

    function xT(TT) {
      null === eT ? (OT.length === bT && OT.shift(), OT.push(TT)) : eT(TT())
    }

    function dT() {
      JT || (JT = !0, (0, pT.m)(gT.$b.PlayerKilled, (TT => {
        const UT = (0, LT.k)(TT);
        (0, LT.d)(UT) && xT((() => BT(UT)))
      })), (0, pT.m)(gT.$b.CustomKillfeed, (TT => {
        const UT = (0, LT.k)(TT);
        (0, LT.d)(UT) && (0, LT.d)(UT.killer) && (0, LT.d)(UT.victim) && xT((() => ZT(UT)))
      })), (0, pT.h)((() => {
        OT = []
      })))
    }
    const wT = Object.freeze([0, 0, 0]),
      tT = [0, 0, 0],
      aT = [0, 0, 0],
      yT = {
        kill: {
          watch(TT) {
            if (YT = !0, 0 === OT.length) return eT = TT, () => {
              YT = !1, eT = null
            };
            const UT = setTimeout((() => {
              const UT = OT;
              OT = [], eT = TT;
              for (const WT of UT) try {
                TT(WT())
              } catch (mT) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", mT)
              }
            }), 0);
            return () => {
              clearTimeout(UT), YT = !1, eT = null
            }
          }
        }
      },
      XT = {
        localPos() {
          const TT = (0, kT.i)();
          if (null === TT) return wT;
          const UT = TT.api.apiView;
          for (let mT = 0; mT < 3; mT++) tT[mT] = nT.x.localPos(UT, 0, mT);
          return tT
        },
        targetedBlockPos() {
          const TT = (0, kT.i)();
          if (null === TT || nT.x.targetBlockId(TT.api.apiView, 0) === nT.Wc) return null;
          for (let UT = 0; UT < 3; UT++) aT[UT] = nT.x.targetBlock(TT.api.apiView, 0, UT);
          return aT
        }
      }
  },
  39137: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      constructor() {
        this.members = new Map
      }
      apply(TT) {
        const UT = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const WT of TT.sT) {
          let TT = this.members.get(WT.FT);
          if (TT || (TT = {
              name: null,
              settings: {}
            }, this.members.set(WT.FT, TT), UT.added.push(WT.FT)), null !== WT.PT && (TT.name = WT.PT), null !== WT.VT || WT.uT.length > 0) {
            const mT = null === WT.VT ? {} : JSON.parse(WT.VT);
            Object.assign(TT.settings, mT);
            for (const UT of WT.uT) delete TT.settings[UT], mT[UT] = void 0;
            UT.settingChanges.push({
              playerId: WT.FT,
              settings: mT
            })
          }
        }
        for (const WT of TT.CT) {
          const TT = this.members.get(WT);
          var mT;
          if (TT) this.members.delete(WT), UT.removed.push({
            playerId: WT,
            name: null !== (mT = TT.name) && void 0 !== mT ? mT : void 0
          })
        }
        return UT
      }
      has(TT) {
        return this.members.has(TT)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(TT) {
        var UT, mT;
        return null !== (UT = null === (mT = this.members.get(TT)) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : void 0
      }
      getSettings(TT) {
        var UT;
        return null === (UT = this.members.get(TT)) || void 0 === UT ? void 0 : UT.settings
      }
      getSetting(TT, UT) {
        var mT;
        return null === (mT = this.members.get(TT)) || void 0 === mT ? void 0 : mT.settings[UT]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);