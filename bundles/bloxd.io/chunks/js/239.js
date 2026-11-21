export const id = 239;
export const ids = [239];
export const modules = {
  40172: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      f: () => DQ
    });
    var LQ = wQ(1904);
    let qQ = !1;

    function oQ() {
      qQ = !0
    }

    function DQ() {
      qQ && (qQ = !1, (0, LQ.b)())
    }
  },
  40169: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => oQ,
      j: () => kQ
    });
    var LQ = wQ(40003),
      qQ = wQ(40009);

    function oQ(QQ) {
      if (QQ.queries.drawCensus() < LQ.Hb.BYTES) return null;
      const FQ = QQ.memoryData(QQ.scratch(), LQ.Hb.BYTES, 4, "the draw census");
      return null === FQ ? null : {
        terrainOpaque: LQ.Hb.terrainOpaque(FQ, 0),
        terrainTransparent: LQ.Hb.terrainTransparent(FQ, 0),
        terrainPack: LQ.Hb.terrainPack(FQ, 0),
        earthSky: LQ.Hb.earthSky(FQ, 0),
        skyMeshes: LQ.Hb.skyMeshes(FQ, 0),
        regular: LQ.Hb.regular(FQ, 0),
        thin: LQ.Hb.thin(FQ, 0),
        line: LQ.Hb.line(FQ, 0),
        text: LQ.Hb.text(FQ, 0),
        particles: LQ.Hb.particles(FQ, 0),
        terrainParts: LQ.Hb.terrainParts(FQ, 0),
        terrainCompiling: LQ.Hb.terrainCompiling(FQ, 0)
      }
    }

    function DQ(QQ) {
      const {
        terrainOpaque: FQ,
        terrainTransparent: wQ,
        earthSky: LQ,
        skyMeshes: qQ,
        regular: oQ,
        thin: DQ,
        line: kQ,
        text: vQ,
        particles: mQ
      } = QQ;
      return FQ + wQ + LQ + qQ + oQ + DQ + kQ + vQ + mQ
    }

    function kQ() {
      const QQ = (0, qQ.k)();
      return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isCoreRunning) ? function(QQ) {
        const FQ = oQ(QQ);
        if (null === FQ) return [];
        const {
          terrainOpaque: wQ,
          terrainTransparent: LQ,
          terrainPack: qQ,
          earthSky: kQ,
          skyMeshes: vQ,
          regular: mQ,
          thin: uQ,
          line: HQ,
          text: bQ,
          particles: YQ
        } = FQ;
        return [{
          label: "Drawn",
          value: `${DQ(FQ)}`
        }, {
          label: "Terrain",
          value: `${wQ} opaque / ${LQ} transparent (${qQ} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${mQ} / ${uQ}`
        }, {
          label: "Text / Lines",
          value: `${bQ} / ${HQ}`
        }, {
          label: "Sky / Particles",
          value: `${kQ+vQ} / ${YQ}`
        }]
      }(QQ.api) : []
    }
  },
  40127: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => xQ,
      h: () => bQ,
      l: () => YQ
    });
    var LQ = wQ(1907),
      qQ = wQ(1306),
      oQ = wQ(40009),
      DQ = wQ(40031),
      kQ = wQ(40040),
      vQ = wQ(40056);
    const mQ = new qQ.c;
    let uQ = !1;

    function HQ(QQ) {
      const FQ = (0, oQ.k)();
      return null !== FQ && +QQ === FQ.api.localId
    }

    function bQ() {
      uQ || (uQ = !0, (0, vQ.h)(DQ.k, (QQ => {
        var FQ, wQ;
        const LQ = (0, kQ.h)(DQ.k, QQ);
        if (!(0, kQ.e)(LQ)) return;
        const qQ = LQ;
        HQ(qQ.fF) && YQ(qQ.VF, {
          icon: qQ.JF,
          level: qQ.nF,
          displayName: null !== (FQ = qQ.hF) && void 0 !== FQ ? FQ : null,
          durationMs: null !== (wQ = qQ.EF) && void 0 !== wQ ? wQ : null
        })
      })), (0, vQ.h)(DQ.T, (QQ => {
        const FQ = (0, kQ.h)(DQ.T, QQ);
        if (!(0, kQ.e)(FQ)) return;
        const wQ = FQ;
        HQ(wQ.fF) && LQ.d.remove(wQ.VF)
      })), (0, vQ.f)((() => {
        LQ.d.clear()
      })))
    }

    function YQ(QQ, FQ) {
      LQ.d.update(QQ, FQ), mQ.forEach((FQ => {
        FQ(QQ)
      }))
    }
    const xQ = {
      localEffectUpdated: {
        watch: QQ => mQ.add(QQ)
      }
    }
  },
  40136: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ
    });
    var LQ = wQ(4638),
      qQ = wQ(4632),
      oQ = wQ(40047),
      DQ = wQ(40056);
    const kQ = new Set(LQ.L),
      vQ = LQ.L.map((QQ => (new TextEncoder).encode(QQ))),
      mQ = new Map;

    function uQ(QQ, FQ) {
      var wQ;
      return null === (wQ = mQ.get(QQ)) || void 0 === wQ ? void 0 : wQ[FQ]
    }(0, DQ.h)(LQ.rc.NewOtherEntitySettings, (QQ => {
      QQ.payloadKind === qQ.Zb.Msgpack && vQ.some((FQ => function(QQ, FQ) {
        const wQ = FQ[0];
        for (let LQ = QQ.indexOf(wQ); - 1 !== LQ && LQ + FQ.length <= QQ.length; LQ = QQ.indexOf(wQ, LQ + 1)) {
          let wQ = 1;
          for (; wQ < FQ.length && QQ[LQ + wQ] === FQ[wQ];) wQ++;
          if (wQ === FQ.length) return !0
        }
        return !1
      }(QQ.payload, FQ))) && function(QQ) {
        if (null === QQ || "object" !== typeof QQ || null === QQ.settings || "object" !== typeof QQ.settings) return;
        const FQ = String(QQ.eId),
          wQ = QQ.settings;
        let LQ = mQ.get(FQ);
        for (const qQ in wQ) {
          if (!kQ.has(qQ)) continue;
          const QQ = wQ[qQ];
          null === QQ || void 0 === QQ ? LQ && delete LQ[qQ] : (LQ ??= {}, LQ[qQ] = QQ)
        }
        LQ && mQ.set(FQ, LQ)
      }((0, oQ.d)(QQ.payload))
    })), (0, DQ.f)((() => {
      mQ.clear()
    }))
  },
  40123: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => YQ,
      h: () => mQ,
      k: () => HQ
    });
    var LQ = wQ(38557),
      qQ = wQ(1899),
      oQ = wQ(1306),
      DQ = wQ(40031),
      kQ = wQ(40040),
      vQ = wQ(40056);
    const mQ = new LQ.e;
    let uQ = {};

    function HQ(QQ) {
      return uQ[QQ]
    }
    const bQ = new oQ.c;

    function YQ(QQ) {
      return bQ.add(QQ)
    }

    function xQ(QQ) {
      bQ.callEach(QQ, "a roster listener")
    }(0, vQ.h)(DQ.$, (QQ => {
      const FQ = (0, kQ.h)(DQ.$, QQ);
      if (void 0 === FQ) return;
      const wQ = FQ.Dw.some((QQ => {
          let {
            kw: FQ,
            mw: wQ
          } = QQ;
          return null !== wQ && mQ.has(FQ) && mQ.getName(FQ) !== wQ
        })),
        {
          added: LQ,
          removed: oQ,
          settingChanges: vQ
        } = mQ.apply(FQ),
        uQ = new Set;
      for (const qQ of vQ)
        for (const QQ in qQ.settings) uQ.add(QQ);
      const HQ = wQ || LQ.length > 0 || oQ.length > 0;
      (HQ || uQ.has("hideNameSeed")) && function() {
        const QQ = new Map;
        for (const FQ of mQ.ids()) {
          const wQ = mQ.getName(FQ),
            LQ = mQ.getSetting(FQ, "hideNameSeed");
          void 0 !== wQ && void 0 !== LQ && null !== LQ && QQ.set(wQ, LQ)
        }
        qQ.b.replaceAll(QQ)
      }(), xQ({
        kind: "roster",
        members: HQ,
        settings: uQ
      })
    })), (0, vQ.h)(DQ.R, (QQ => {
      const FQ = (0, kQ.h)(DQ.R, QQ);
      if (void 0 !== FQ) {
        for (const {
            CL: QQ,
            SL: wQ,
            iL: LQ
          }
          of FQ) uQ[QQ] = {
          ...uQ[QQ],
          [wQ]: LQ
        };
        xQ({
          kind: "cosmetics",
          updates: FQ
        })
      }
    })), (0, vQ.f)((() => {
      mQ.clear(), uQ = {}, qQ.b.clear(), xQ({
        kind: "reset"
      })
    })), (0, vQ.g)((() => {
      mQ.clear(), xQ({
        kind: "reset"
      })
    }))
  },
  40154: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => OQ,
      g: () => tQ,
      h: () => UQ,
      i: () => NQ
    });
    var LQ = wQ(1282),
      qQ = wQ(609),
      oQ = wQ(96),
      DQ = wQ(4638),
      kQ = wQ(40003),
      vQ = wQ(40027),
      mQ = wQ(40009),
      uQ = wQ(40136),
      HQ = wQ(40123),
      bQ = wQ(40040),
      YQ = wQ(40056);

    function xQ(QQ) {
      let {
        deadEId: FQ,
        killerEId: wQ,
        killerLifeformType: LQ,
        withItem: qQ,
        killstreak: oQ
      } = QQ;
      return {
        killer: pQ({
          eId: wQ,
          lifeformType: LQ
        }),
        victim: pQ({
          eId: FQ
        }),
        withItem: qQ,
        killstreak: oQ
      }
    }

    function AQ(QQ) {
      let {
        killer: FQ,
        victim: wQ,
        withItem: LQ
      } = QQ;
      return {
        killer: pQ(FQ),
        victim: pQ(wQ),
        withItem: LQ,
        killstreak: 0
      }
    }

    function tQ(QQ) {
      iQ && RQ((() => "killed" === QQ.kind ? xQ(QQ.body) : AQ(QQ.body)))
    }
    const eQ = "#2727f1",
      MQ = "#912c2c";

    function GQ(QQ, FQ) {
      var wQ;
      return HQ.h.has(QQ) ? null === (wQ = HQ.h.getSettings(QQ)) || void 0 === wQ ? void 0 : wQ[FQ] : (0, uQ.d)(QQ, FQ)
    }

    function pQ(QQ) {
      var FQ, wQ, DQ, kQ, uQ;
      let {
        eId: bQ,
        name: YQ,
        colour: xQ,
        lifeformType: AQ
      } = QQ;
      if (void 0 === bQ || null === bQ || "" === bQ) {
        const QQ = YQ || null;
        return {
          id: null,
          shownName: QQ,
          lifeformType: null === QQ && null !== AQ && void 0 !== AQ ? AQ : null,
          colour: xQ || null,
          local: !1,
          realName: null
        }
      }
      const tQ = String(bQ),
        pQ = null === (FQ = (0, mQ.k)()) || void 0 === FQ ? void 0 : FQ.api,
        cQ = void 0 !== pQ && String(pQ.localId) === tQ,
        CQ = null !== (wQ = HQ.h.getName(tQ)) && void 0 !== wQ ? wQ : null,
        SQ = null !== (DQ = GQ(tQ, "hideNameSeed")) && void 0 !== DQ ? DQ : null;
      let iQ = null === CQ ? null : (0, LQ.e)(CQ, !oQ.featureFlags.canSeeRealPlayerNames, SQ) || null,
        WQ = null;
      if (null === iQ && void 0 !== pQ) {
        const QQ = pQ.getEntityType(tQ);
        "Player" !== QQ && (iQ = (0, vQ.j)(pQ, +tQ) || null), WQ = qQ.l.includes(QQ) ? QQ : null
      }
      return {
        id: tQ,
        shownName: iQ,
        lifeformType: null === iQ && null !== (kQ = null !== (uQ = WQ) && void 0 !== uQ ? uQ : AQ) && void 0 !== kQ ? kQ : null,
        colour: xQ || GQ(tQ, "killfeedColour") || (cQ ? eQ : MQ),
        local: cQ,
        realName: CQ
      }
    }
    const cQ = 32;
    let CQ = [],
      SQ = null,
      iQ = !1,
      WQ = !1;

    function RQ(QQ) {
      null === SQ ? (CQ.length === cQ && CQ.shift(), CQ.push(QQ)) : SQ(QQ())
    }

    function OQ() {
      WQ || (WQ = !0, (0, YQ.h)(DQ.rc.PlayerKilled, (QQ => {
        const FQ = (0, bQ.j)(QQ);
        (0, bQ.e)(FQ) && RQ((() => xQ(FQ)))
      })), (0, YQ.h)(DQ.rc.CustomKillfeed, (QQ => {
        const FQ = (0, bQ.j)(QQ);
        (0, bQ.e)(FQ) && (0, bQ.e)(FQ.killer) && (0, bQ.e)(FQ.victim) && RQ((() => AQ(FQ)))
      })), (0, YQ.f)((() => {
        CQ = []
      })))
    }
    const sQ = Object.freeze([0, 0, 0]),
      rQ = [0, 0, 0],
      IQ = [0, 0, 0],
      UQ = {
        kill: {
          watch(QQ) {
            if (iQ = !0, 0 === CQ.length) return SQ = QQ, () => {
              iQ = !1, SQ = null
            };
            const FQ = setTimeout((() => {
              const FQ = CQ;
              CQ = [], SQ = QQ;
              for (const LQ of FQ) try {
                QQ(LQ())
              } catch (wQ) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", wQ)
              }
            }), 0);
            return () => {
              clearTimeout(FQ), iQ = !1, SQ = null
            }
          }
        }
      },
      NQ = {
        localPos() {
          const QQ = (0, mQ.k)();
          if (null === QQ) return sQ;
          const FQ = QQ.api.apiView;
          for (let wQ = 0; wQ < 3; wQ++) rQ[wQ] = kQ.v.localPos(FQ, 0, wQ);
          return rQ
        },
        targetedBlockPos() {
          const QQ = (0, mQ.k)();
          if (null === QQ || kQ.v.targetBlockId(QQ.api.apiView, 0) === kQ.ed) return null;
          for (let FQ = 0; FQ < 3; FQ++) IQ[FQ] = kQ.v.targetBlock(QQ.api.apiView, 0, FQ);
          return IQ
        }
      }
  },
  38557: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    class LQ {
      constructor() {
        this.members = new Map
      }
      apply(QQ) {
        const FQ = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const LQ of QQ.Dw) {
          let QQ = this.members.get(LQ.kw);
          if (QQ || (QQ = {
              name: null,
              settings: {}
            }, this.members.set(LQ.kw, QQ), FQ.added.push(LQ.kw)), null !== LQ.mw && (QQ.name = LQ.mw), null !== LQ.uw || LQ.Hw.length > 0) {
            const wQ = null === LQ.uw ? {} : JSON.parse(LQ.uw);
            Object.assign(QQ.settings, wQ);
            for (const FQ of LQ.Hw) delete QQ.settings[FQ], wQ[FQ] = void 0;
            FQ.settingChanges.push({
              playerId: LQ.kw,
              settings: wQ
            })
          }
        }
        for (const LQ of QQ.bw) {
          const QQ = this.members.get(LQ);
          var wQ;
          if (QQ) this.members.delete(LQ), FQ.removed.push({
            playerId: LQ,
            name: null !== (wQ = QQ.name) && void 0 !== wQ ? wQ : void 0
          })
        }
        return FQ
      }
      has(QQ) {
        return this.members.has(QQ)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(QQ) {
        var FQ, wQ;
        return null !== (FQ = null === (wQ = this.members.get(QQ)) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : void 0
      }
      getSettings(QQ) {
        var FQ;
        return null === (FQ = this.members.get(QQ)) || void 0 === FQ ? void 0 : FQ.settings
      }
      getSetting(QQ, FQ) {
        var wQ;
        return null === (wQ = this.members.get(QQ)) || void 0 === wQ ? void 0 : wQ.settings[FQ]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);