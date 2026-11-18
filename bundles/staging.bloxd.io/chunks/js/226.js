export const id = 226;
export const ids = [226];
export const modules = {
  39494: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => XJ
    });
    var FJ = ZJ(1717);
    let UJ = !1;

    function eJ() {
      UJ = !0
    }

    function XJ() {
      UJ && (UJ = !1, (0, FJ.b)())
    }
  },
  39470: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ,
      f: () => DJ,
      g: () => sJ
    });
    var FJ = ZJ(1722),
      UJ = ZJ(1186),
      eJ = ZJ(39360),
      XJ = ZJ(39394),
      AJ = ZJ(39399),
      qJ = ZJ(39410);
    const jJ = new UJ.d;
    let YJ = !1;

    function hJ(JJ) {
      const cJ = (0, eJ.j)();
      return null !== cJ && +JJ === cJ.api.localId
    }

    function DJ() {
      YJ || (YJ = !0, (0, qJ.k)(XJ.m, (JJ => {
        var cJ, ZJ;
        const FJ = (0, AJ.d)(XJ.m, JJ);
        if (!(0, AJ.c)(FJ)) return;
        const UJ = FJ;
        hJ(UJ.vJ) && sJ(UJ.mJ, {
          icon: UJ.GU,
          level: UJ.xU,
          displayName: null !== (cJ = UJ.QJ) && void 0 !== cJ ? cJ : null,
          durationMs: null !== (ZJ = UJ.fU) && void 0 !== ZJ ? ZJ : null
        })
      })), (0, qJ.k)(XJ.T, (JJ => {
        const cJ = (0, AJ.d)(XJ.T, JJ);
        if (!(0, AJ.c)(cJ)) return;
        const ZJ = cJ;
        hJ(ZJ.vJ) && FJ.c.remove(ZJ.mJ)
      })), (0, qJ.e)((() => {
        FJ.c.clear()
      })))
    }

    function sJ(JJ, cJ) {
      FJ.c.update(JJ, cJ), jJ.forEach((cJ => {
        cJ(JJ)
      }))
    }
    const nJ = {
      localEffectUpdated: {
        watch: JJ => jJ.add(JJ)
      }
    }
  },
  39474: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ
    });
    var FJ = ZJ(4198),
      UJ = ZJ(4189),
      eJ = ZJ(39401),
      XJ = ZJ(39410);
    const AJ = new Set(FJ.G),
      qJ = FJ.G.map((JJ => (new TextEncoder).encode(JJ))),
      jJ = new Map;

    function YJ(JJ, cJ) {
      var ZJ;
      return null === (ZJ = jJ.get(JJ)) || void 0 === ZJ ? void 0 : ZJ[cJ]
    }(0, XJ.k)(FJ.Lb.NewOtherEntitySettings, (JJ => {
      JJ.payloadKind === UJ.bc.Msgpack && qJ.some((cJ => function(JJ, cJ) {
        const ZJ = cJ[0];
        for (let FJ = JJ.indexOf(ZJ); - 1 !== FJ && FJ + cJ.length <= JJ.length; FJ = JJ.indexOf(ZJ, FJ + 1)) {
          let ZJ = 1;
          for (; ZJ < cJ.length && JJ[FJ + ZJ] === cJ[ZJ];) ZJ++;
          if (ZJ === cJ.length) return !0
        }
        return !1
      }(JJ.payload, cJ))) && function(JJ) {
        if (null === JJ || "object" !== typeof JJ || null === JJ.settings || "object" !== typeof JJ.settings) return;
        const cJ = String(JJ.eId),
          ZJ = JJ.settings;
        let FJ = jJ.get(cJ);
        for (const UJ in ZJ) {
          if (!AJ.has(UJ)) continue;
          const JJ = ZJ[UJ];
          null === JJ || void 0 === JJ ? FJ && delete FJ[UJ] : (FJ ??= {}, FJ[UJ] = JJ)
        }
        FJ && jJ.set(cJ, FJ)
      }((0, eJ.b)(JJ.payload))
    })), (0, XJ.e)((() => {
      jJ.clear()
    }))
  },
  39465: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => sJ,
      f: () => jJ,
      g: () => hJ
    });
    var FJ = ZJ(37959),
      UJ = ZJ(1712),
      eJ = ZJ(1186),
      XJ = ZJ(39394),
      AJ = ZJ(39399),
      qJ = ZJ(39410);
    const jJ = new FJ.d;
    let YJ = {};

    function hJ(JJ) {
      return YJ[JJ]
    }
    const DJ = new eJ.d;

    function sJ(JJ) {
      return DJ.add(JJ)
    }

    function nJ(JJ) {
      DJ.callEach(JJ, "a roster listener")
    }(0, qJ.k)(XJ.ab, (JJ => {
      const cJ = (0, AJ.d)(XJ.ab, JJ);
      if (void 0 === cJ) return;
      const ZJ = cJ.yF.some((JJ => {
          let {
            SF: cJ,
            IF: ZJ
          } = JJ;
          return null !== ZJ && jJ.has(cJ) && jJ.getName(cJ) !== ZJ
        })),
        {
          added: FJ,
          removed: eJ,
          settingChanges: qJ
        } = jJ.apply(cJ),
        YJ = new Set;
      for (const UJ of qJ)
        for (const JJ in UJ.settings) YJ.add(JJ);
      const hJ = ZJ || FJ.length > 0 || eJ.length > 0;
      (hJ || YJ.has("hideNameSeed")) && function() {
        const JJ = new Map;
        for (const cJ of jJ.ids()) {
          const ZJ = jJ.getName(cJ),
            FJ = jJ.getSetting(cJ, "hideNameSeed");
          void 0 !== ZJ && void 0 !== FJ && null !== FJ && JJ.set(ZJ, FJ)
        }
        UJ.d.replaceAll(JJ)
      }(), nJ({
        kind: "roster",
        members: hJ,
        settings: YJ
      })
    })), (0, qJ.k)(XJ.S, (JJ => {
      const cJ = (0, AJ.d)(XJ.S, JJ);
      if (void 0 !== cJ) {
        for (const {
            EF: JJ,
            VF: ZJ,
            KF: FJ
          }
          of cJ) YJ[JJ] = {
          ...YJ[JJ],
          [ZJ]: FJ
        };
        nJ({
          kind: "cosmetics",
          updates: cJ
        })
      }
    })), (0, qJ.e)((() => {
      jJ.clear(), YJ = {}, UJ.d.clear(), nJ({
        kind: "reset"
      })
    })), (0, qJ.i)((() => {
      jJ.clear(), nJ({
        kind: "reset"
      })
    }))
  },
  39484: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => IJ,
      e: () => fJ,
      f: () => wJ,
      j: () => WJ
    });
    var FJ = ZJ(1168),
      UJ = ZJ(523),
      eJ = ZJ(80),
      XJ = ZJ(4198),
      AJ = ZJ(39354),
      qJ = ZJ(39385),
      jJ = ZJ(39360),
      YJ = ZJ(39474),
      hJ = ZJ(39465),
      DJ = ZJ(39399),
      sJ = ZJ(39410);

    function nJ(JJ) {
      let {
        deadEId: cJ,
        killerEId: ZJ,
        killerLifeformType: FJ,
        withItem: UJ,
        killstreak: eJ
      } = JJ;
      return {
        killer: mJ({
          eId: ZJ,
          lifeformType: FJ
        }),
        victim: mJ({
          eId: cJ
        }),
        withItem: UJ,
        killstreak: eJ
      }
    }

    function GJ(JJ) {
      let {
        killer: cJ,
        victim: ZJ,
        withItem: FJ
      } = JJ;
      return {
        killer: mJ(cJ),
        victim: mJ(ZJ),
        withItem: FJ,
        killstreak: 0
      }
    }

    function fJ(JJ) {
      KJ && SJ((() => "killed" === JJ.kind ? nJ(JJ.body) : GJ(JJ.body)))
    }
    const xJ = "#2727f1",
      rJ = "#912c2c";

    function vJ(JJ, cJ) {
      var ZJ;
      return hJ.f.has(JJ) ? null === (ZJ = hJ.f.getSettings(JJ)) || void 0 === ZJ ? void 0 : ZJ[cJ] : (0, YJ.d)(JJ, cJ)
    }

    function mJ(JJ) {
      var cJ, ZJ, XJ, AJ, YJ;
      let {
        eId: DJ,
        name: sJ,
        colour: nJ,
        lifeformType: GJ
      } = JJ;
      if (void 0 === DJ || null === DJ || "" === DJ) {
        const JJ = sJ || null;
        return {
          id: null,
          shownName: JJ,
          lifeformType: null === JJ && null !== GJ && void 0 !== GJ ? GJ : null,
          colour: nJ || null,
          local: !1,
          realName: null
        }
      }
      const fJ = String(DJ),
        mJ = null === (cJ = (0, jJ.j)()) || void 0 === cJ ? void 0 : cJ.api,
        QJ = void 0 !== mJ && String(mJ.localId) === fJ,
        EJ = null !== (ZJ = hJ.f.getName(fJ)) && void 0 !== ZJ ? ZJ : null,
        VJ = null !== (XJ = vJ(fJ, "hideNameSeed")) && void 0 !== XJ ? XJ : null;
      let KJ = null === EJ ? null : (0, FJ.d)(EJ, !eJ.featureFlags.canSeeRealPlayerNames, VJ) || null,
        yJ = null;
      if (null === KJ && void 0 !== mJ) {
        const JJ = mJ.getEntityType(fJ);
        "Player" !== JJ && (KJ = (0, qJ.d)(mJ, +fJ) || null), yJ = UJ.p.includes(JJ) ? JJ : null
      }
      return {
        id: fJ,
        shownName: KJ,
        lifeformType: null === KJ && null !== (AJ = null !== (YJ = yJ) && void 0 !== YJ ? YJ : GJ) && void 0 !== AJ ? AJ : null,
        colour: nJ || vJ(fJ, "killfeedColour") || (QJ ? xJ : rJ),
        local: QJ,
        realName: EJ
      }
    }
    const QJ = 32;
    let EJ = [],
      VJ = null,
      KJ = !1,
      yJ = !1;

    function SJ(JJ) {
      null === VJ ? (EJ.length === QJ && EJ.shift(), EJ.push(JJ)) : VJ(JJ())
    }

    function IJ() {
      yJ || (yJ = !0, (0, sJ.k)(XJ.Lb.PlayerKilled, (JJ => {
        const cJ = (0, DJ.g)(JJ);
        (0, DJ.c)(cJ) && SJ((() => nJ(cJ)))
      })), (0, sJ.k)(XJ.Lb.CustomKillfeed, (JJ => {
        const cJ = (0, DJ.g)(JJ);
        (0, DJ.c)(cJ) && (0, DJ.c)(cJ.killer) && (0, DJ.c)(cJ.victim) && SJ((() => GJ(cJ)))
      })), (0, sJ.e)((() => {
        EJ = []
      })))
    }
    const MJ = Object.freeze([0, 0, 0]),
      bJ = [0, 0, 0],
      wJ = {
        kill: {
          watch(JJ) {
            if (KJ = !0, 0 === EJ.length) return VJ = JJ, () => {
              KJ = !1, VJ = null
            };
            const cJ = setTimeout((() => {
              const cJ = EJ;
              EJ = [], VJ = JJ;
              for (const FJ of cJ) try {
                JJ(FJ())
              } catch (ZJ) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", ZJ)
              }
            }), 0);
            return () => {
              clearTimeout(cJ), KJ = !1, VJ = null
            }
          }
        }
      },
      WJ = {
        localPos() {
          const JJ = (0, jJ.j)();
          if (null === JJ) return MJ;
          const cJ = JJ.api.apiView;
          for (let ZJ = 0; ZJ < 3; ZJ++) bJ[ZJ] = AJ.s.localPos(cJ, 0, ZJ);
          return bJ
        }
      }
  },
  37959: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor() {
        this.members = new Map
      }
      apply(JJ) {
        const cJ = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const FJ of JJ.yF) {
          let JJ = this.members.get(FJ.SF);
          if (JJ || (JJ = {
              name: null,
              settings: {}
            }, this.members.set(FJ.SF, JJ), cJ.added.push(FJ.SF)), null !== FJ.IF && (JJ.name = FJ.IF), null !== FJ.MF || FJ.bF.length > 0) {
            const ZJ = null === FJ.MF ? {} : JSON.parse(FJ.MF);
            Object.assign(JJ.settings, ZJ);
            for (const cJ of FJ.bF) delete JJ.settings[cJ], ZJ[cJ] = void 0;
            cJ.settingChanges.push({
              playerId: FJ.SF,
              settings: ZJ
            })
          }
        }
        for (const FJ of JJ.wF) {
          const JJ = this.members.get(FJ);
          var ZJ;
          if (JJ) this.members.delete(FJ), cJ.removed.push({
            playerId: FJ,
            name: null !== (ZJ = JJ.name) && void 0 !== ZJ ? ZJ : void 0
          })
        }
        return cJ
      }
      has(JJ) {
        return this.members.has(JJ)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(JJ) {
        var cJ, ZJ;
        return null !== (cJ = null === (ZJ = this.members.get(JJ)) || void 0 === ZJ ? void 0 : ZJ.name) && void 0 !== cJ ? cJ : void 0
      }
      getSettings(JJ) {
        var cJ;
        return null === (cJ = this.members.get(JJ)) || void 0 === cJ ? void 0 : cJ.settings
      }
      getSetting(JJ, cJ) {
        var ZJ;
        return null === (ZJ = this.members.get(JJ)) || void 0 === ZJ ? void 0 : ZJ.settings[cJ]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);