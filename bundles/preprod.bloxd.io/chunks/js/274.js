export const id = 274;
export const ids = [274];
export const modules = {
  42352: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH
    });
    var AH = LH(2010);
    let rH = !1;

    function SH() {
      rH = !0
    }

    function hH() {
      rH && (rH = !1, (0, AH.e)())
    }
  },
  42343: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => SH,
      j: () => tH
    });
    var AH = LH(41898),
      rH = LH(41911);

    function SH(HH) {
      if (HH.queries.drawCensus() < AH.Gb.BYTES) return null;
      const BH = HH.memoryData(HH.scratch(), AH.Gb.BYTES, 4, "the draw census");
      return null === BH ? null : {
        terrainOpaque: AH.Gb.terrainOpaque(BH, 0),
        terrainTransparent: AH.Gb.terrainTransparent(BH, 0),
        terrainPack: AH.Gb.terrainPack(BH, 0),
        earthSky: AH.Gb.earthSky(BH, 0),
        skyMeshes: AH.Gb.skyMeshes(BH, 0),
        regular: AH.Gb.regular(BH, 0),
        thin: AH.Gb.thin(BH, 0),
        line: AH.Gb.line(BH, 0),
        text: AH.Gb.text(BH, 0),
        particles: AH.Gb.particles(BH, 0),
        terrainParts: AH.Gb.terrainParts(BH, 0),
        terrainCompiling: AH.Gb.terrainCompiling(BH, 0),
        ringCopiesMax: AH.Gb.ringCopiesMax(BH, 0),
        ringBusyWrites: AH.Gb.ringBusyWrites(BH, 0)
      }
    }

    function hH(HH) {
      const {
        terrainOpaque: BH,
        terrainTransparent: LH,
        earthSky: AH,
        skyMeshes: rH,
        regular: SH,
        thin: hH,
        line: tH,
        text: zH,
        particles: CH
      } = HH;
      return BH + LH + AH + rH + SH + hH + tH + zH + CH
    }

    function tH() {
      const HH = (0, rH.i)();
      return !0 === (null === HH || void 0 === HH ? void 0 : HH.isCoreRunning) ? function(HH) {
        const BH = SH(HH);
        if (null === BH) return [];
        const {
          terrainOpaque: LH,
          terrainTransparent: AH,
          terrainPack: rH,
          earthSky: tH,
          skyMeshes: zH,
          regular: CH,
          thin: EH,
          line: XH,
          text: GH,
          particles: YH
        } = BH;
        return [{
          label: "Drawn",
          value: `${hH(BH)}`
        }, {
          label: "Terrain",
          value: `${LH} opaque / ${AH} transparent (${rH} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${CH} / ${EH}`
        }, {
          label: "Text / Lines",
          value: `${GH} / ${XH}`
        }, {
          label: "Sky / Particles",
          value: `${tH+zH} / ${YH}`
        }]
      }(HH.api) : []
    }
  },
  42330: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => uH,
      d: () => GH,
      e: () => YH
    });
    var AH = LH(2018),
      rH = LH(1245),
      SH = LH(41911),
      hH = LH(41933),
      tH = LH(41940),
      zH = LH(41954);
    const CH = new rH.c;
    let EH = !1;

    function XH(HH) {
      const BH = (0, SH.i)();
      return null !== BH && +HH === BH.api.localId
    }

    function GH() {
      EH || (EH = !0, (0, zH.k)(hH.k, (HH => {
        var BH, LH;
        const AH = (0, tH.f)(hH.k, HH);
        if (!(0, tH.c)(AH)) return;
        const rH = AH;
        XH(rH.fH) && YH(rH.lH, {
          icon: rH.VA,
          level: rH.bA,
          displayName: null !== (BH = rH.KH) && void 0 !== BH ? BH : null,
          durationMs: null !== (LH = rH.OA) && void 0 !== LH ? LH : null
        })
      })), (0, zH.k)(hH.N, (HH => {
        const BH = (0, tH.f)(hH.N, HH);
        if (!(0, tH.c)(BH)) return;
        const LH = BH;
        XH(LH.fH) && AH.c.remove(LH.lH)
      })), (0, zH.g)((() => {
        AH.c.clear()
      })))
    }

    function YH(HH, BH) {
      AH.c.update(HH, BH), CH.forEach((BH => {
        BH(HH)
      }))
    }
    const uH = {
      localEffectUpdated: {
        watch: HH => CH.add(HH)
      }
    }
  },
  42337: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH
    });
    var AH = LH(5268),
      rH = LH(5265),
      SH = LH(41946),
      hH = LH(41954);
    const tH = new Set(AH.Q),
      zH = AH.Q.map((HH => (new TextEncoder).encode(HH))),
      CH = new Map;

    function EH(HH, BH) {
      var LH;
      return null === (LH = CH.get(HH)) || void 0 === LH ? void 0 : LH[BH]
    }(0, hH.k)(AH.nc.NewOtherEntitySettings, (HH => {
      HH.payloadKind === rH.jc.Msgpack && zH.some((BH => function(HH, BH) {
        const LH = BH[0];
        for (let AH = HH.indexOf(LH); - 1 !== AH && AH + BH.length <= HH.length; AH = HH.indexOf(LH, AH + 1)) {
          let LH = 1;
          for (; LH < BH.length && HH[AH + LH] === BH[LH];) LH++;
          if (LH === BH.length) return !0
        }
        return !1
      }(HH.payload, BH))) && function(HH) {
        if (null === HH || "object" !== typeof HH || null === HH.settings || "object" !== typeof HH.settings) return;
        const BH = String(HH.eId),
          LH = HH.settings;
        let AH = CH.get(BH);
        for (const rH in LH) {
          if (!tH.has(rH)) continue;
          const HH = LH[rH];
          null === HH || void 0 === HH ? AH && delete AH[rH] : (AH ??= {}, AH[rH] = HH)
        }
        AH && CH.set(BH, AH)
      }((0, SH.e)(HH.payload))
    })), (0, hH.g)((() => {
      CH.clear()
    }))
  },
  42327: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => YH,
      f: () => CH,
      j: () => XH
    });
    var AH = LH(39919),
      rH = LH(2003),
      SH = LH(1245),
      hH = LH(41933),
      tH = LH(41940),
      zH = LH(41954);
    const CH = new AH.e;
    let EH = {};

    function XH(HH) {
      return EH[HH]
    }
    const GH = new SH.c;

    function YH(HH) {
      return GH.add(HH)
    }

    function uH(HH) {
      GH.callEach(HH, "a roster listener")
    }(0, zH.k)(hH.Z, (HH => {
      const BH = (0, tH.f)(hH.Z, HH);
      if (void 0 === BH) return;
      const LH = BH.RA.some((HH => {
          let {
            jA: BH,
            nA: LH
          } = HH;
          return null !== LH && CH.has(BH) && CH.getName(BH) !== LH
        })),
        {
          added: AH,
          removed: SH,
          settingChanges: zH
        } = CH.apply(BH),
        EH = new Set;
      for (const rH of zH)
        for (const HH in rH.settings) EH.add(HH);
      const XH = LH || AH.length > 0 || SH.length > 0;
      (XH || EH.has("hideNameSeed")) && function() {
        const HH = new Map;
        for (const BH of CH.ids()) {
          const LH = CH.getName(BH),
            AH = CH.getSetting(BH, "hideNameSeed");
          void 0 !== LH && void 0 !== AH && null !== AH && HH.set(LH, AH)
        }
        rH.c.replaceAll(HH)
      }(), uH({
        kind: "roster",
        members: XH,
        settings: EH
      })
    })), (0, zH.k)(hH.K, (HH => {
      const BH = (0, tH.f)(hH.K, HH);
      if (void 0 !== BH) {
        for (const {
            Ah: HH,
            rh: LH,
            Sh: AH
          }
          of BH) EH[HH] = {
          ...EH[HH],
          [LH]: AH
        };
        uH({
          kind: "cosmetics",
          updates: BH
        })
      }
    })), (0, zH.g)((() => {
      CH.clear(), EH = {}, rH.c.clear(), uH({
        kind: "reset"
      })
    })), (0, zH.j)((() => {
      CH.clear(), uH({
        kind: "reset"
      })
    }))
  },
  42339: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => mH,
      e: () => WH,
      g: () => lH,
      k: () => KH
    });
    var AH = LH(1206),
      rH = LH(609),
      SH = LH(81),
      hH = LH(5268),
      tH = LH(41898),
      zH = LH(41928),
      CH = LH(41911),
      EH = LH(42337),
      XH = LH(42327),
      GH = LH(41940),
      YH = LH(41954);

    function uH(HH) {
      let {
        deadEId: BH,
        killerEId: LH,
        killerLifeformType: AH,
        withItem: rH,
        killstreak: SH
      } = HH;
      return {
        killer: PH({
          eId: LH,
          lifeformType: AH
        }),
        victim: PH({
          eId: BH
        }),
        withItem: rH,
        killstreak: SH
      }
    }

    function QH(HH) {
      let {
        killer: BH,
        victim: LH,
        withItem: AH
      } = HH;
      return {
        killer: PH(BH),
        victim: PH(LH),
        withItem: AH,
        killstreak: 0
      }
    }

    function WH(HH) {
      OH && kH((() => "killed" === HH.kind ? uH(HH.body) : QH(HH.body)))
    }
    const MH = "#2727f1",
      xH = "#912c2c";

    function vH(HH, BH) {
      var LH;
      return XH.f.has(HH) ? null === (LH = XH.f.getSettings(HH)) || void 0 === LH ? void 0 : LH[BH] : (0, EH.d)(HH, BH)
    }

    function PH(HH) {
      var BH, LH, hH, tH, EH;
      let {
        eId: GH,
        name: YH,
        colour: uH,
        lifeformType: QH
      } = HH;
      if (void 0 === GH || null === GH || "" === GH) {
        const HH = YH || null;
        return {
          id: null,
          shownName: HH,
          lifeformType: null === HH && null !== QH && void 0 !== QH ? QH : null,
          colour: uH || null,
          local: !1,
          realName: null
        }
      }
      const WH = String(GH),
        PH = null === (BH = (0, CH.i)()) || void 0 === BH ? void 0 : BH.api,
        TH = void 0 !== PH && String(PH.localId) === WH,
        UH = null !== (LH = XH.f.getName(WH)) && void 0 !== LH ? LH : null,
        VH = null !== (hH = vH(WH, "hideNameSeed")) && void 0 !== hH ? hH : null;
      let OH = null === UH ? null : (0, AH.b)(UH, !SH.featureFlags.canSeeRealPlayerNames, VH) || null,
        bH = null;
      if (null === OH && void 0 !== PH) {
        const HH = PH.getEntityType(WH);
        "Player" !== HH && (OH = (0, zH.k)(PH, +WH) || null), bH = rH.j.includes(HH) ? HH : null
      }
      return {
        id: WH,
        shownName: OH,
        lifeformType: null === OH && null !== (tH = null !== (EH = bH) && void 0 !== EH ? EH : QH) && void 0 !== tH ? tH : null,
        colour: uH || vH(WH, "killfeedColour") || (TH ? MH : xH),
        local: TH,
        realName: UH
      }
    }
    const TH = 32;
    let UH = [],
      VH = null,
      OH = !1,
      bH = !1;

    function kH(HH) {
      null === VH ? (UH.length === TH && UH.shift(), UH.push(HH)) : VH(HH())
    }

    function mH() {
      bH || (bH = !0, (0, YH.k)(hH.nc.PlayerKilled, (HH => {
        const BH = (0, GH.i)(HH);
        (0, GH.c)(BH) && kH((() => uH(BH)))
      })), (0, YH.k)(hH.nc.CustomKillfeed, (HH => {
        const BH = (0, GH.i)(HH);
        (0, GH.c)(BH) && (0, GH.c)(BH.killer) && (0, GH.c)(BH.victim) && kH((() => QH(BH)))
      })), (0, YH.g)((() => {
        UH = []
      })))
    }
    const oH = Object.freeze([0, 0, 0]),
      IH = [0, 0, 0],
      fH = [0, 0, 0],
      lH = {
        kill: {
          watch(HH) {
            if (OH = !0, 0 === UH.length) return VH = HH, () => {
              OH = !1, VH = null
            };
            const BH = setTimeout((() => {
              const BH = UH;
              UH = [], VH = HH;
              for (const AH of BH) try {
                HH(AH())
              } catch (LH) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", LH)
              }
            }), 0);
            return () => {
              clearTimeout(BH), OH = !1, VH = null
            }
          }
        }
      },
      KH = {
        localPos() {
          const HH = (0, CH.i)();
          if (null === HH) return oH;
          const BH = HH.api.apiView;
          for (let LH = 0; LH < 3; LH++) IH[LH] = tH.y.localPos(BH, 0, LH);
          return IH
        },
        targetedBlockPos() {
          const HH = (0, CH.i)();
          if (null === HH || tH.y.targetBlockId(HH.api.apiView, 0) === tH.cd) return null;
          for (let BH = 0; BH < 3; BH++) fH[BH] = tH.y.targetBlock(HH.api.apiView, 0, BH);
          return fH
        }
      }
  },
  39919: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      constructor() {
        this.members = new Map
      }
      apply(HH) {
        const BH = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const AH of HH.RA) {
          let HH = this.members.get(AH.jA);
          if (HH || (HH = {
              name: null,
              settings: {}
            }, this.members.set(AH.jA, HH), BH.added.push(AH.jA)), null !== AH.nA && (HH.name = AH.nA), null !== AH.FA || AH.DA.length > 0) {
            const LH = null === AH.FA ? {} : JSON.parse(AH.FA);
            Object.assign(HH.settings, LH);
            for (const BH of AH.DA) delete HH.settings[BH], LH[BH] = void 0;
            BH.settingChanges.push({
              playerId: AH.jA,
              settings: LH
            })
          }
        }
        for (const AH of HH.wA) {
          const HH = this.members.get(AH);
          var LH;
          if (HH) this.members.delete(AH), BH.removed.push({
            playerId: AH,
            name: null !== (LH = HH.name) && void 0 !== LH ? LH : void 0
          })
        }
        return BH
      }
      has(HH) {
        return this.members.has(HH)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(HH) {
        var BH, LH;
        return null !== (BH = null === (LH = this.members.get(HH)) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : void 0
      }
      getSettings(HH) {
        var BH;
        return null === (BH = this.members.get(HH)) || void 0 === BH ? void 0 : BH.settings
      }
      getSetting(HH, BH) {
        var LH;
        return null === (LH = this.members.get(HH)) || void 0 === LH ? void 0 : LH.settings[BH]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);