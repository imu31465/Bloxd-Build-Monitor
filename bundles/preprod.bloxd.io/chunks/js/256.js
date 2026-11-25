export const id = 256;
export const ids = [256];
export const modules = {
  41245: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      e: () => zQ
    });
    var wQ = XQ(2015);
    let qQ = !1;

    function TQ() {
      qQ = !0
    }

    function zQ() {
      qQ && (qQ = !1, (0, wQ.c)())
    }
  },
  41238: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      c: () => TQ,
      g: () => sQ
    });
    var wQ = XQ(40813),
      qQ = XQ(40829);

    function TQ(QQ) {
      if (QQ.queries.drawCensus() < wQ.Ob.BYTES) return null;
      const WQ = QQ.memoryData(QQ.scratch(), wQ.Ob.BYTES, 4, "the draw census");
      return null === WQ ? null : {
        terrainOpaque: wQ.Ob.terrainOpaque(WQ, 0),
        terrainTransparent: wQ.Ob.terrainTransparent(WQ, 0),
        terrainPack: wQ.Ob.terrainPack(WQ, 0),
        earthSky: wQ.Ob.earthSky(WQ, 0),
        skyMeshes: wQ.Ob.skyMeshes(WQ, 0),
        regular: wQ.Ob.regular(WQ, 0),
        thin: wQ.Ob.thin(WQ, 0),
        line: wQ.Ob.line(WQ, 0),
        text: wQ.Ob.text(WQ, 0),
        particles: wQ.Ob.particles(WQ, 0),
        terrainParts: wQ.Ob.terrainParts(WQ, 0),
        terrainCompiling: wQ.Ob.terrainCompiling(WQ, 0),
        ringCopiesMax: wQ.Ob.ringCopiesMax(WQ, 0),
        ringBusyWrites: wQ.Ob.ringBusyWrites(WQ, 0)
      }
    }

    function zQ(QQ) {
      const {
        terrainOpaque: WQ,
        terrainTransparent: XQ,
        earthSky: wQ,
        skyMeshes: qQ,
        regular: TQ,
        thin: zQ,
        line: sQ,
        text: FQ,
        particles: PQ
      } = QQ;
      return WQ + XQ + wQ + qQ + TQ + zQ + sQ + FQ + PQ
    }

    function sQ() {
      const QQ = (0, qQ.j)();
      return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isCoreRunning) ? function(QQ) {
        const WQ = TQ(QQ);
        if (null === WQ) return [];
        const {
          terrainOpaque: XQ,
          terrainTransparent: wQ,
          terrainPack: qQ,
          earthSky: sQ,
          skyMeshes: FQ,
          regular: PQ,
          thin: gQ,
          line: JQ,
          text: rQ,
          particles: IQ
        } = WQ;
        return [{
          label: "Drawn",
          value: `${zQ(WQ)}`
        }, {
          label: "Terrain",
          value: `${XQ} opaque / ${wQ} transparent (${qQ} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${PQ} / ${gQ}`
        }, {
          label: "Text / Lines",
          value: `${rQ} / ${JQ}`
        }, {
          label: "Sky / Particles",
          value: `${sQ+FQ} / ${IQ}`
        }]
      }(QQ.api) : []
    }
  },
  41221: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => jQ,
      f: () => rQ,
      j: () => IQ
    });
    var wQ = XQ(2021),
      qQ = XQ(1340),
      TQ = XQ(40829),
      zQ = XQ(40845),
      sQ = XQ(40847),
      FQ = XQ(40857);
    const PQ = new qQ.b;
    let gQ = !1;

    function JQ(QQ) {
      const WQ = (0, TQ.j)();
      return null !== WQ && +QQ === WQ.api.localId
    }

    function rQ() {
      gQ || (gQ = !0, (0, FQ.j)(zQ.l, (QQ => {
        var WQ, XQ;
        const wQ = (0, sQ.d)(zQ.l, QQ);
        if (!(0, sQ.c)(wQ)) return;
        const qQ = wQ;
        JQ(qQ.RQ) && IQ(qQ.EQ, {
          icon: qQ.SW,
          level: qQ.oW,
          displayName: null !== (WQ = qQ.CQ) && void 0 !== WQ ? WQ : null,
          durationMs: null !== (XQ = qQ.tW) && void 0 !== XQ ? XQ : null
        })
      })), (0, FQ.j)(zQ.N, (QQ => {
        const WQ = (0, sQ.d)(zQ.N, QQ);
        if (!(0, sQ.c)(WQ)) return;
        const XQ = WQ;
        JQ(XQ.RQ) && wQ.b.remove(XQ.EQ)
      })), (0, FQ.g)((() => {
        wQ.b.clear()
      })))
    }

    function IQ(QQ, WQ) {
      wQ.b.update(QQ, WQ), PQ.forEach((WQ => {
        WQ(QQ)
      }))
    }
    const jQ = {
      localEffectUpdated: {
        watch: QQ => PQ.add(QQ)
      }
    }
  },
  41224: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ
    });
    var wQ = XQ(5140),
      qQ = XQ(5134),
      TQ = XQ(40850),
      zQ = XQ(40857);
    const sQ = new Set(wQ.I),
      FQ = wQ.I.map((QQ => (new TextEncoder).encode(QQ))),
      PQ = new Map;

    function gQ(QQ, WQ) {
      var XQ;
      return null === (XQ = PQ.get(QQ)) || void 0 === XQ ? void 0 : XQ[WQ]
    }(0, zQ.j)(wQ.gc.NewOtherEntitySettings, (QQ => {
      QQ.payloadKind === qQ.rc.Msgpack && FQ.some((WQ => function(QQ, WQ) {
        const XQ = WQ[0];
        for (let wQ = QQ.indexOf(XQ); - 1 !== wQ && wQ + WQ.length <= QQ.length; wQ = QQ.indexOf(XQ, wQ + 1)) {
          let XQ = 1;
          for (; XQ < WQ.length && QQ[wQ + XQ] === WQ[XQ];) XQ++;
          if (XQ === WQ.length) return !0
        }
        return !1
      }(QQ.payload, WQ))) && function(QQ) {
        if (null === QQ || "object" !== typeof QQ || null === QQ.settings || "object" !== typeof QQ.settings) return;
        const WQ = String(QQ.eId),
          XQ = QQ.settings;
        let wQ = PQ.get(WQ);
        for (const qQ in XQ) {
          if (!sQ.has(qQ)) continue;
          const QQ = XQ[qQ];
          null === QQ || void 0 === QQ ? wQ && delete wQ[qQ] : (wQ ??= {}, wQ[qQ] = QQ)
        }
        wQ && PQ.set(WQ, wQ)
      }((0, TQ.d)(QQ.payload))
    })), (0, zQ.g)((() => {
      PQ.clear()
    }))
  },
  41215: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => IQ,
      f: () => PQ,
      g: () => JQ
    });
    var wQ = XQ(39279),
      qQ = XQ(2010),
      TQ = XQ(1340),
      zQ = XQ(40845),
      sQ = XQ(40847),
      FQ = XQ(40857);
    const PQ = new wQ.c;
    let gQ = {};

    function JQ(QQ) {
      return gQ[QQ]
    }
    const rQ = new TQ.b;

    function IQ(QQ) {
      return rQ.add(QQ)
    }

    function jQ(QQ) {
      rQ.callEach(QQ, "a roster listener")
    }(0, FQ.j)(zQ.W, (QQ => {
      const WQ = (0, sQ.d)(zQ.W, QQ);
      if (void 0 === WQ) return;
      const XQ = WQ.uQ.some((QQ => {
          let {
            LQ: WQ,
            kQ: XQ
          } = QQ;
          return null !== XQ && PQ.has(WQ) && PQ.getName(WQ) !== XQ
        })),
        {
          added: wQ,
          removed: TQ,
          settingChanges: FQ
        } = PQ.apply(WQ),
        gQ = new Set;
      for (const qQ of FQ)
        for (const QQ in qQ.settings) gQ.add(QQ);
      const JQ = XQ || wQ.length > 0 || TQ.length > 0;
      (JQ || gQ.has("hideNameSeed")) && function() {
        const QQ = new Map;
        for (const WQ of PQ.ids()) {
          const XQ = PQ.getName(WQ),
            wQ = PQ.getSetting(WQ, "hideNameSeed");
          void 0 !== XQ && void 0 !== wQ && null !== wQ && QQ.set(XQ, wQ)
        }
        qQ.e.replaceAll(QQ)
      }(), jQ({
        kind: "roster",
        members: JQ,
        settings: gQ
      })
    })), (0, FQ.j)(zQ.J, (QQ => {
      const WQ = (0, sQ.d)(zQ.J, QQ);
      if (void 0 !== WQ) {
        for (const {
            vT: QQ,
            dT: XQ,
            HT: wQ
          }
          of WQ) gQ[QQ] = {
          ...gQ[QQ],
          [XQ]: wQ
        };
        jQ({
          kind: "cosmetics",
          updates: WQ
        })
      }
    })), (0, FQ.g)((() => {
      PQ.clear(), gQ = {}, qQ.e.clear(), jQ({
        kind: "reset"
      })
    })), (0, FQ.h)((() => {
      PQ.clear(), jQ({
        kind: "reset"
      })
    }))
  },
  41229: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => lQ,
      h: () => yQ,
      i: () => AQ,
      j: () => RQ
    });
    var wQ = XQ(1302),
      qQ = XQ(651),
      TQ = XQ(105),
      zQ = XQ(5140),
      sQ = XQ(40813),
      FQ = XQ(40839),
      PQ = XQ(40829),
      gQ = XQ(41224),
      JQ = XQ(41215),
      rQ = XQ(40847),
      IQ = XQ(40857);

    function jQ(QQ) {
      let {
        deadEId: WQ,
        killerEId: XQ,
        killerLifeformType: wQ,
        withItem: qQ,
        killstreak: TQ
      } = QQ;
      return {
        killer: GQ({
          eId: XQ,
          lifeformType: wQ
        }),
        victim: GQ({
          eId: WQ
        }),
        withItem: qQ,
        killstreak: TQ
      }
    }

    function BQ(QQ) {
      let {
        killer: WQ,
        victim: XQ,
        withItem: wQ
      } = QQ;
      return {
        killer: GQ(WQ),
        victim: GQ(XQ),
        withItem: wQ,
        killstreak: 0
      }
    }

    function yQ(QQ) {
      dQ && aQ((() => "killed" === QQ.kind ? jQ(QQ.body) : BQ(QQ.body)))
    }
    const VQ = "#2727f1",
      DQ = "#912c2c";

    function pQ(QQ, WQ) {
      var XQ;
      return JQ.f.has(QQ) ? null === (XQ = JQ.f.getSettings(QQ)) || void 0 === XQ ? void 0 : XQ[WQ] : (0, gQ.b)(QQ, WQ)
    }

    function GQ(QQ) {
      var WQ, XQ, zQ, sQ, gQ;
      let {
        eId: rQ,
        name: IQ,
        colour: jQ,
        lifeformType: BQ
      } = QQ;
      if (void 0 === rQ || null === rQ || "" === rQ) {
        const QQ = IQ || null;
        return {
          id: null,
          shownName: QQ,
          lifeformType: null === QQ && null !== BQ && void 0 !== BQ ? BQ : null,
          colour: jQ || null,
          local: !1,
          realName: null
        }
      }
      const yQ = String(rQ),
        GQ = null === (WQ = (0, PQ.j)()) || void 0 === WQ ? void 0 : WQ.api,
        UQ = void 0 !== GQ && String(GQ.localId) === yQ,
        bQ = null !== (XQ = JQ.f.getName(yQ)) && void 0 !== XQ ? XQ : null,
        vQ = null !== (zQ = pQ(yQ, "hideNameSeed")) && void 0 !== zQ ? zQ : null;
      let dQ = null === bQ ? null : (0, wQ.c)(bQ, !TQ.featureFlags.canSeeRealPlayerNames, vQ) || null,
        HQ = null;
      if (null === dQ && void 0 !== GQ) {
        const QQ = GQ.getEntityType(yQ);
        "Player" !== QQ && (dQ = (0, FQ.i)(GQ, +yQ) || null), HQ = qQ.i.includes(QQ) ? QQ : null
      }
      return {
        id: yQ,
        shownName: dQ,
        lifeformType: null === dQ && null !== (sQ = null !== (gQ = HQ) && void 0 !== gQ ? gQ : BQ) && void 0 !== sQ ? sQ : null,
        colour: jQ || pQ(yQ, "killfeedColour") || (UQ ? VQ : DQ),
        local: UQ,
        realName: bQ
      }
    }
    const UQ = 32;
    let bQ = [],
      vQ = null,
      dQ = !1,
      HQ = !1;

    function aQ(QQ) {
      null === vQ ? (bQ.length === UQ && bQ.shift(), bQ.push(QQ)) : vQ(QQ())
    }

    function lQ() {
      HQ || (HQ = !0, (0, IQ.j)(zQ.gc.PlayerKilled, (QQ => {
        const WQ = (0, rQ.h)(QQ);
        (0, rQ.c)(WQ) && aQ((() => jQ(WQ)))
      })), (0, IQ.j)(zQ.gc.CustomKillfeed, (QQ => {
        const WQ = (0, rQ.h)(QQ);
        (0, rQ.c)(WQ) && (0, rQ.c)(WQ.killer) && (0, rQ.c)(WQ.victim) && aQ((() => BQ(WQ)))
      })), (0, IQ.g)((() => {
        bQ = []
      })))
    }
    const hQ = Object.freeze([0, 0, 0]),
      iQ = [0, 0, 0],
      cQ = [0, 0, 0],
      AQ = {
        kill: {
          watch(QQ) {
            if (dQ = !0, 0 === bQ.length) return vQ = QQ, () => {
              dQ = !1, vQ = null
            };
            const WQ = setTimeout((() => {
              const WQ = bQ;
              bQ = [], vQ = QQ;
              for (const wQ of WQ) try {
                QQ(wQ())
              } catch (XQ) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", XQ)
              }
            }), 0);
            return () => {
              clearTimeout(WQ), dQ = !1, vQ = null
            }
          }
        }
      },
      RQ = {
        localPos() {
          const QQ = (0, PQ.j)();
          if (null === QQ) return hQ;
          const WQ = QQ.api.apiView;
          for (let XQ = 0; XQ < 3; XQ++) iQ[XQ] = sQ.x.localPos(WQ, 0, XQ);
          return iQ
        },
        targetedBlockPos() {
          const QQ = (0, PQ.j)();
          if (null === QQ || sQ.x.targetBlockId(QQ.api.apiView, 0) === sQ.Ad) return null;
          for (let WQ = 0; WQ < 3; WQ++) cQ[WQ] = sQ.x.targetBlock(QQ.api.apiView, 0, WQ);
          return cQ
        }
      }
  },
  39279: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    class wQ {
      constructor() {
        this.members = new Map
      }
      apply(QQ) {
        const WQ = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const wQ of QQ.uQ) {
          let QQ = this.members.get(wQ.LQ);
          if (QQ || (QQ = {
              name: null,
              settings: {}
            }, this.members.set(wQ.LQ, QQ), WQ.added.push(wQ.LQ)), null !== wQ.kQ && (QQ.name = wQ.kQ), null !== wQ.fQ || wQ.SQ.length > 0) {
            const XQ = null === wQ.fQ ? {} : JSON.parse(wQ.fQ);
            Object.assign(QQ.settings, XQ);
            for (const WQ of wQ.SQ) delete QQ.settings[WQ], XQ[WQ] = void 0;
            WQ.settingChanges.push({
              playerId: wQ.LQ,
              settings: XQ
            })
          }
        }
        for (const wQ of QQ.tQ) {
          const QQ = this.members.get(wQ);
          var XQ;
          if (QQ) this.members.delete(wQ), WQ.removed.push({
            playerId: wQ,
            name: null !== (XQ = QQ.name) && void 0 !== XQ ? XQ : void 0
          })
        }
        return WQ
      }
      has(QQ) {
        return this.members.has(QQ)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(QQ) {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = this.members.get(QQ)) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : void 0
      }
      getSettings(QQ) {
        var WQ;
        return null === (WQ = this.members.get(QQ)) || void 0 === WQ ? void 0 : WQ.settings
      }
      getSetting(QQ, WQ) {
        var XQ;
        return null === (XQ = this.members.get(QQ)) || void 0 === XQ ? void 0 : XQ.settings[WQ]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);