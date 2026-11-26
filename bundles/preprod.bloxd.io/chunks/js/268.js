export const id = 268;
export const ids = [268];
export const modules = {
  42138: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      f: () => AU
    });
    var cU = zU(2014);
    let yU = !1;

    function QU() {
      yU = !0
    }

    function AU() {
      yU && (yU = !1, (0, cU.e)())
    }
  },
  42133: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      h: () => QU,
      k: () => FU
    });
    var cU = zU(41652),
      yU = zU(41660);

    function QU(UU) {
      if (UU.queries.drawCensus() < cU.Cb.BYTES) return null;
      const XU = UU.memoryData(UU.scratch(), cU.Cb.BYTES, 4, "the draw census");
      return null === XU ? null : {
        terrainOpaque: cU.Cb.terrainOpaque(XU, 0),
        terrainTransparent: cU.Cb.terrainTransparent(XU, 0),
        terrainPack: cU.Cb.terrainPack(XU, 0),
        earthSky: cU.Cb.earthSky(XU, 0),
        skyMeshes: cU.Cb.skyMeshes(XU, 0),
        regular: cU.Cb.regular(XU, 0),
        thin: cU.Cb.thin(XU, 0),
        line: cU.Cb.line(XU, 0),
        text: cU.Cb.text(XU, 0),
        particles: cU.Cb.particles(XU, 0),
        terrainParts: cU.Cb.terrainParts(XU, 0),
        terrainCompiling: cU.Cb.terrainCompiling(XU, 0),
        ringCopiesMax: cU.Cb.ringCopiesMax(XU, 0),
        ringBusyWrites: cU.Cb.ringBusyWrites(XU, 0)
      }
    }

    function AU(UU) {
      const {
        terrainOpaque: XU,
        terrainTransparent: zU,
        earthSky: cU,
        skyMeshes: yU,
        regular: QU,
        thin: AU,
        line: FU,
        text: oU,
        particles: DU
      } = UU;
      return XU + zU + cU + yU + QU + AU + FU + oU + DU
    }

    function FU() {
      const UU = (0, yU.f)();
      return !0 === (null === UU || void 0 === UU ? void 0 : UU.isCoreRunning) ? function(UU) {
        const XU = QU(UU);
        if (null === XU) return [];
        const {
          terrainOpaque: zU,
          terrainTransparent: cU,
          terrainPack: yU,
          earthSky: FU,
          skyMeshes: oU,
          regular: DU,
          thin: EU,
          line: YU,
          text: NU,
          particles: IU
        } = XU;
        return [{
          label: "Drawn",
          value: `${AU(XU)}`
        }, {
          label: "Terrain",
          value: `${zU} opaque / ${cU} transparent (${yU} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${DU} / ${EU}`
        }, {
          label: "Text / Lines",
          value: `${NU} / ${YU}`
        }, {
          label: "Sky / Particles",
          value: `${FU+oU} / ${IU}`
        }]
      }(UU.api) : []
    }
  },
  42121: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => pU,
      f: () => NU,
      j: () => IU
    });
    var cU = zU(2023),
      yU = zU(1319),
      QU = zU(41660),
      AU = zU(41676),
      FU = zU(41680),
      oU = zU(41695);
    const DU = new yU.e;
    let EU = !1;

    function YU(UU) {
      const XU = (0, QU.f)();
      return null !== XU && +UU === XU.api.localId
    }

    function NU() {
      EU || (EU = !0, (0, oU.m)(AU.o, (UU => {
        var XU, zU;
        const cU = (0, FU.d)(AU.o, UU);
        if (!(0, FU.b)(cU)) return;
        const yU = cU;
        YU(yU.iX) && IU(yU.HX, {
          icon: yU.wQ,
          level: yU.OQ,
          displayName: null !== (XU = yU.MX) && void 0 !== XU ? XU : null,
          durationMs: null !== (zU = yU.qQ) && void 0 !== zU ? zU : null
        })
      })), (0, oU.m)(AU.O, (UU => {
        const XU = (0, FU.d)(AU.O, UU);
        if (!(0, FU.b)(XU)) return;
        const zU = XU;
        YU(zU.iX) && cU.b.remove(zU.HX)
      })), (0, oU.e)((() => {
        cU.b.clear()
      })))
    }

    function IU(UU, XU) {
      cU.b.update(UU, XU), DU.forEach((XU => {
        XU(UU)
      }))
    }
    const pU = {
      localEffectUpdated: {
        watch: UU => DU.add(UU)
      }
    }
  },
  42125: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU
    });
    var cU = zU(5326),
      yU = zU(5318),
      QU = zU(41685),
      AU = zU(41695);
    const FU = new Set(cU.O),
      oU = cU.O.map((UU => (new TextEncoder).encode(UU))),
      DU = new Map;

    function EU(UU, XU) {
      var zU;
      return null === (zU = DU.get(UU)) || void 0 === zU ? void 0 : zU[XU]
    }(0, AU.m)(cU.oc.NewOtherEntitySettings, (UU => {
      UU.payloadKind === yU.jc.Msgpack && oU.some((XU => function(UU, XU) {
        const zU = XU[0];
        for (let cU = UU.indexOf(zU); - 1 !== cU && cU + XU.length <= UU.length; cU = UU.indexOf(zU, cU + 1)) {
          let zU = 1;
          for (; zU < XU.length && UU[cU + zU] === XU[zU];) zU++;
          if (zU === XU.length) return !0
        }
        return !1
      }(UU.payload, XU))) && function(UU) {
        if (null === UU || "object" !== typeof UU || null === UU.settings || "object" !== typeof UU.settings) return;
        const XU = String(UU.eId),
          zU = UU.settings;
        let cU = DU.get(XU);
        for (const yU in zU) {
          if (!FU.has(yU)) continue;
          const UU = zU[yU];
          null === UU || void 0 === UU ? cU && delete cU[yU] : (cU ??= {}, cU[yU] = UU)
        }
        cU && DU.set(XU, cU)
      }((0, QU.d)(UU.payload))
    })), (0, AU.e)((() => {
      DU.clear()
    }))
  },
  42112: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => IU,
      d: () => DU,
      g: () => YU
    });
    var cU = zU(39835),
      yU = zU(2012),
      QU = zU(1319),
      AU = zU(41676),
      FU = zU(41680),
      oU = zU(41695);
    const DU = new cU.c;
    let EU = {};

    function YU(UU) {
      return EU[UU]
    }
    const NU = new QU.e;

    function IU(UU) {
      return NU.add(UU)
    }

    function pU(UU) {
      NU.callEach(UU, "a roster listener")
    }(0, oU.m)(AU.Z, (UU => {
      const XU = (0, FU.d)(AU.Z, UU);
      if (void 0 === XU) return;
      const zU = XU.KQ.some((UU => {
          let {
            bQ: XU,
            TQ: zU
          } = UU;
          return null !== zU && DU.has(XU) && DU.getName(XU) !== zU
        })),
        {
          added: cU,
          removed: QU,
          settingChanges: oU
        } = DU.apply(XU),
        EU = new Set;
      for (const yU of oU)
        for (const UU in yU.settings) EU.add(UU);
      const YU = zU || cU.length > 0 || QU.length > 0;
      (YU || EU.has("hideNameSeed")) && function() {
        const UU = new Map;
        for (const XU of DU.ids()) {
          const zU = DU.getName(XU),
            cU = DU.getSetting(XU, "hideNameSeed");
          void 0 !== zU && void 0 !== cU && null !== cU && UU.set(zU, cU)
        }
        yU.c.replaceAll(UU)
      }(), pU({
        kind: "roster",
        members: YU,
        settings: EU
      })
    })), (0, oU.m)(AU.N, (UU => {
      const XU = (0, FU.d)(AU.N, UU);
      if (void 0 !== XU) {
        for (const {
            AU: UU,
            FU: zU,
            oU: cU
          }
          of XU) EU[UU] = {
          ...EU[UU],
          [zU]: cU
        };
        pU({
          kind: "cosmetics",
          updates: XU
        })
      }
    })), (0, oU.e)((() => {
      DU.clear(), EU = {}, yU.c.clear(), pU({
        kind: "reset"
      })
    })), (0, oU.i)((() => {
      DU.clear(), pU({
        kind: "reset"
      })
    }))
  },
  42127: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => eU,
      c: () => tU,
      f: () => OU,
      j: () => SU
    });
    var cU = zU(1280),
      yU = zU(633),
      QU = zU(97),
      AU = zU(5326),
      FU = zU(41652),
      oU = zU(41674),
      DU = zU(41660),
      EU = zU(42125),
      YU = zU(42112),
      NU = zU(41680),
      IU = zU(41695);

    function pU(UU) {
      let {
        deadEId: XU,
        killerEId: zU,
        killerLifeformType: cU,
        withItem: yU,
        killstreak: QU
      } = UU;
      return {
        killer: BU({
          eId: zU,
          lifeformType: cU
        }),
        victim: BU({
          eId: XU
        }),
        withItem: yU,
        killstreak: QU
      }
    }

    function aU(UU) {
      let {
        killer: XU,
        victim: zU,
        withItem: cU
      } = UU;
      return {
        killer: BU(XU),
        victim: BU(zU),
        withItem: cU,
        killstreak: 0
      }
    }

    function tU(UU) {
      WU && LU((() => "killed" === UU.kind ? pU(UU.body) : aU(UU.body)))
    }
    const gU = "#2727f1",
      kU = "#912c2c";

    function GU(UU, XU) {
      var zU;
      return YU.d.has(UU) ? null === (zU = YU.d.getSettings(UU)) || void 0 === zU ? void 0 : zU[XU] : (0, EU.b)(UU, XU)
    }

    function BU(UU) {
      var XU, zU, AU, FU, EU;
      let {
        eId: NU,
        name: IU,
        colour: pU,
        lifeformType: aU
      } = UU;
      if (void 0 === NU || null === NU || "" === NU) {
        const UU = IU || null;
        return {
          id: null,
          shownName: UU,
          lifeformType: null === UU && null !== aU && void 0 !== aU ? aU : null,
          colour: pU || null,
          local: !1,
          realName: null
        }
      }
      const tU = String(NU),
        BU = null === (XU = (0, DU.f)()) || void 0 === XU ? void 0 : XU.api,
        ZU = void 0 !== BU && String(BU.localId) === tU,
        RU = null !== (zU = YU.d.getName(tU)) && void 0 !== zU ? zU : null,
        PU = null !== (AU = GU(tU, "hideNameSeed")) && void 0 !== AU ? AU : null;
      let WU = null === RU ? null : (0, cU.b)(RU, !QU.featureFlags.canSeeRealPlayerNames, PU) || null,
        dU = null;
      if (null === WU && void 0 !== BU) {
        const UU = BU.getEntityType(tU);
        "Player" !== UU && (WU = (0, oU.h)(BU, +tU) || null), dU = yU.h.includes(UU) ? UU : null
      }
      return {
        id: tU,
        shownName: WU,
        lifeformType: null === WU && null !== (FU = null !== (EU = dU) && void 0 !== EU ? EU : aU) && void 0 !== FU ? FU : null,
        colour: pU || GU(tU, "killfeedColour") || (ZU ? gU : kU),
        local: ZU,
        realName: RU
      }
    }
    const ZU = 32;
    let RU = [],
      PU = null,
      WU = !1,
      dU = !1;

    function LU(UU) {
      null === PU ? (RU.length === ZU && RU.shift(), RU.push(UU)) : PU(UU())
    }

    function eU() {
      dU || (dU = !0, (0, IU.m)(AU.oc.PlayerKilled, (UU => {
        const XU = (0, NU.f)(UU);
        (0, NU.b)(XU) && LU((() => pU(XU)))
      })), (0, IU.m)(AU.oc.CustomKillfeed, (UU => {
        const XU = (0, NU.f)(UU);
        (0, NU.b)(XU) && (0, NU.b)(XU.killer) && (0, NU.b)(XU.victim) && LU((() => aU(XU)))
      })), (0, IU.e)((() => {
        RU = []
      })))
    }
    const CU = Object.freeze([0, 0, 0]),
      wU = [0, 0, 0],
      qU = [0, 0, 0],
      OU = {
        kill: {
          watch(UU) {
            if (WU = !0, 0 === RU.length) return PU = UU, () => {
              WU = !1, PU = null
            };
            const XU = setTimeout((() => {
              const XU = RU;
              RU = [], PU = UU;
              for (const cU of XU) try {
                UU(cU())
              } catch (zU) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", zU)
              }
            }), 0);
            return () => {
              clearTimeout(XU), WU = !1, PU = null
            }
          }
        }
      },
      SU = {
        localPos() {
          const UU = (0, DU.f)();
          if (null === UU) return CU;
          const XU = UU.api.apiView;
          for (let zU = 0; zU < 3; zU++) wU[zU] = FU.w.localPos(XU, 0, zU);
          return wU
        },
        targetedBlockPos() {
          const UU = (0, DU.f)();
          if (null === UU || FU.w.targetBlockId(UU.api.apiView, 0) === FU.cd) return null;
          for (let XU = 0; XU < 3; XU++) qU[XU] = FU.w.targetBlock(UU.api.apiView, 0, XU);
          return qU
        }
      }
  },
  39835: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    class cU {
      constructor() {
        this.members = new Map
      }
      apply(UU) {
        const XU = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const cU of UU.KQ) {
          let UU = this.members.get(cU.bQ);
          if (UU || (UU = {
              name: null,
              settings: {}
            }, this.members.set(cU.bQ, UU), XU.added.push(cU.bQ)), null !== cU.TQ && (UU.name = cU.TQ), null !== cU.hQ || cU.UA.length > 0) {
            const zU = null === cU.hQ ? {} : JSON.parse(cU.hQ);
            Object.assign(UU.settings, zU);
            for (const XU of cU.UA) delete UU.settings[XU], zU[XU] = void 0;
            XU.settingChanges.push({
              playerId: cU.bQ,
              settings: zU
            })
          }
        }
        for (const cU of UU.XA) {
          const UU = this.members.get(cU);
          var zU;
          if (UU) this.members.delete(cU), XU.removed.push({
            playerId: cU,
            name: null !== (zU = UU.name) && void 0 !== zU ? zU : void 0
          })
        }
        return XU
      }
      has(UU) {
        return this.members.has(UU)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(UU) {
        var XU, zU;
        return null !== (XU = null === (zU = this.members.get(UU)) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : void 0
      }
      getSettings(UU) {
        var XU;
        return null === (XU = this.members.get(UU)) || void 0 === XU ? void 0 : XU.settings
      }
      getSetting(UU, XU) {
        var zU;
        return null === (zU = this.members.get(UU)) || void 0 === zU ? void 0 : zU.settings[XU]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);