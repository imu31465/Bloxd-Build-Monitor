export const id = 235;
export const ids = [235];
export const modules = {
  39849: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      e: () => RY
    });
    var FY = DY(1818);
    let AY = !1;

    function IY() {
      AY = !0
    }

    function RY() {
      AY && (AY = !1, (0, FY.e)())
    }
  },
  39806: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => yY,
      f: () => sY,
      g: () => iY
    });
    var FY = DY(1820),
      AY = DY(1289),
      IY = DY(39693),
      RY = DY(39725),
      OY = DY(39728),
      gY = DY(39739);
    const aY = new AY.d;
    let vY = !1;

    function uY(YY) {
      const rY = (0, IY.g)();
      return null !== rY && +YY === rY.api.localId
    }

    function sY() {
      vY || (vY = !0, (0, gY.l)(RY.p, (YY => {
        var rY, DY;
        const FY = (0, OY.f)(RY.p, YY);
        if (!(0, OY.c)(FY)) return;
        const AY = FY;
        uY(AY.VY) && iY(AY.SY, {
          icon: AY.TY,
          level: AY.NY,
          displayName: null !== (rY = AY.lY) && void 0 !== rY ? rY : null,
          durationMs: null !== (DY = AY.eY) && void 0 !== DY ? DY : null
        })
      })), (0, gY.l)(RY.W, (YY => {
        const rY = (0, OY.f)(RY.W, YY);
        if (!(0, OY.c)(rY)) return;
        const DY = rY;
        uY(DY.VY) && FY.c.remove(DY.SY)
      })), (0, gY.g)((() => {
        FY.c.clear()
      })))
    }

    function iY(YY, rY) {
      FY.c.update(YY, rY), aY.forEach((rY => {
        rY(YY)
      }))
    }
    const yY = {
      localEffectUpdated: {
        watch: YY => aY.add(YY)
      }
    }
  },
  39812: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY
    });
    var FY = DY(4382),
      AY = DY(4376),
      IY = DY(39731),
      RY = DY(39739);
    const OY = new Set(FY.F),
      gY = FY.F.map((YY => (new TextEncoder).encode(YY))),
      aY = new Map;

    function vY(YY, rY) {
      var DY;
      return null === (DY = aY.get(YY)) || void 0 === DY ? void 0 : DY[rY]
    }(0, RY.l)(FY._b.NewOtherEntitySettings, (YY => {
      YY.payloadKind === AY.dc.Msgpack && gY.some((rY => function(YY, rY) {
        const DY = rY[0];
        for (let FY = YY.indexOf(DY); - 1 !== FY && FY + rY.length <= YY.length; FY = YY.indexOf(DY, FY + 1)) {
          let DY = 1;
          for (; DY < rY.length && YY[FY + DY] === rY[DY];) DY++;
          if (DY === rY.length) return !0
        }
        return !1
      }(YY.payload, rY))) && function(YY) {
        if (null === YY || "object" !== typeof YY || null === YY.settings || "object" !== typeof YY.settings) return;
        const rY = String(YY.eId),
          DY = YY.settings;
        let FY = aY.get(rY);
        for (const AY in DY) {
          if (!OY.has(AY)) continue;
          const YY = DY[AY];
          null === YY || void 0 === YY ? FY && delete FY[AY] : (FY ??= {}, FY[AY] = YY)
        }
        FY && aY.set(rY, FY)
      }((0, IY.e)(YY.payload))
    })), (0, RY.g)((() => {
      aY.clear()
    }))
  },
  39798: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => iY,
      c: () => aY,
      g: () => uY
    });
    var FY = DY(38367),
      AY = DY(1816),
      IY = DY(1289),
      RY = DY(39725),
      OY = DY(39728),
      gY = DY(39739);
    const aY = new FY.b;
    let vY = {};

    function uY(YY) {
      return vY[YY]
    }
    const sY = new IY.d;

    function iY(YY) {
      return sY.add(YY)
    }

    function yY(YY) {
      sY.callEach(YY, "a roster listener")
    }(0, gY.l)(RY.eb, (YY => {
      const rY = (0, OY.f)(RY.eb, YY);
      if (void 0 === rY) return;
      const DY = rY.jr.some((YY => {
          let {
            hr: rY,
            dr: DY
          } = YY;
          return null !== DY && aY.has(rY) && aY.getName(rY) !== DY
        })),
        {
          added: FY,
          removed: IY,
          settingChanges: gY
        } = aY.apply(rY),
        vY = new Set;
      for (const AY of gY)
        for (const YY in AY.settings) vY.add(YY);
      const uY = DY || FY.length > 0 || IY.length > 0;
      (uY || vY.has("hideNameSeed")) && function() {
        const YY = new Map;
        for (const rY of aY.ids()) {
          const DY = aY.getName(rY),
            FY = aY.getSetting(rY, "hideNameSeed");
          void 0 !== DY && void 0 !== FY && null !== FY && YY.set(DY, FY)
        }
        AY.e.replaceAll(YY)
      }(), yY({
        kind: "roster",
        members: uY,
        settings: vY
      })
    })), (0, gY.l)(RY.T, (YY => {
      const rY = (0, OY.f)(RY.T, YY);
      if (void 0 !== rY) {
        for (const {
            YY: YY,
            rY: DY,
            DY: FY
          }
          of rY) vY[YY] = {
          ...vY[YY],
          [DY]: FY
        };
        yY({
          kind: "cosmetics",
          updates: rY
        })
      }
    })), (0, gY.g)((() => {
      aY.clear(), vY = {}, AY.e.clear(), yY({
        kind: "reset"
      })
    })), (0, gY.h)((() => {
      aY.clear(), yY({
        kind: "reset"
      })
    }))
  },
  39823: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => cY,
      e: () => oY,
      g: () => ZY,
      i: () => CY
    });
    var FY = DY(1270),
      AY = DY(614),
      IY = DY(99),
      RY = DY(4382),
      OY = DY(39683),
      gY = DY(39717),
      aY = DY(39693),
      vY = DY(39812),
      uY = DY(39798),
      sY = DY(39728),
      iY = DY(39739);

    function yY(YY) {
      let {
        deadEId: rY,
        killerEId: DY,
        killerLifeformType: FY,
        withItem: AY,
        killstreak: IY
      } = YY;
      return {
        killer: VY({
          eId: DY,
          lifeformType: FY
        }),
        victim: VY({
          eId: rY
        }),
        withItem: AY,
        killstreak: IY
      }
    }

    function QY(YY) {
      let {
        killer: rY,
        victim: DY,
        withItem: FY
      } = YY;
      return {
        killer: VY(rY),
        victim: VY(DY),
        withItem: FY,
        killstreak: 0
      }
    }

    function oY(YY) {
      eY && BY((() => "killed" === YY.kind ? yY(YY.body) : QY(YY.body)))
    }
    const WY = "#2727f1",
      EY = "#912c2c";

    function mY(YY, rY) {
      var DY;
      return uY.c.has(YY) ? null === (DY = uY.c.getSettings(YY)) || void 0 === DY ? void 0 : DY[rY] : (0, vY.b)(YY, rY)
    }

    function VY(YY) {
      var rY, DY, RY, OY, vY;
      let {
        eId: sY,
        name: iY,
        colour: yY,
        lifeformType: QY
      } = YY;
      if (void 0 === sY || null === sY || "" === sY) {
        const YY = iY || null;
        return {
          id: null,
          shownName: YY,
          lifeformType: null === YY && null !== QY && void 0 !== QY ? QY : null,
          colour: yY || null,
          local: !1,
          realName: null
        }
      }
      const oY = String(sY),
        VY = null === (rY = (0, aY.g)()) || void 0 === rY ? void 0 : rY.api,
        SY = void 0 !== VY && String(VY.localId) === oY,
        lY = null !== (DY = uY.c.getName(oY)) && void 0 !== DY ? DY : null,
        TY = null !== (RY = mY(oY, "hideNameSeed")) && void 0 !== RY ? RY : null;
      let eY = null === lY ? null : (0, FY.d)(lY, !IY.featureFlags.canSeeRealPlayerNames, TY) || null,
        NY = null;
      if (null === eY && void 0 !== VY) {
        const YY = VY.getEntityType(oY);
        "Player" !== YY && (eY = (0, gY.l)(VY, +oY) || null), NY = AY.j.includes(YY) ? YY : null
      }
      return {
        id: oY,
        shownName: eY,
        lifeformType: null === eY && null !== (OY = null !== (vY = NY) && void 0 !== vY ? vY : QY) && void 0 !== OY ? OY : null,
        colour: yY || mY(oY, "killfeedColour") || (SY ? WY : EY),
        local: SY,
        realName: lY
      }
    }
    const SY = 32;
    let lY = [],
      TY = null,
      eY = !1,
      NY = !1;

    function BY(YY) {
      null === TY ? (lY.length === SY && lY.shift(), lY.push(YY)) : TY(YY())
    }

    function cY() {
      NY || (NY = !0, (0, iY.l)(RY._b.PlayerKilled, (YY => {
        const rY = (0, sY.g)(YY);
        (0, sY.c)(rY) && BY((() => yY(rY)))
      })), (0, iY.l)(RY._b.CustomKillfeed, (YY => {
        const rY = (0, sY.g)(YY);
        (0, sY.c)(rY) && (0, sY.c)(rY.killer) && (0, sY.c)(rY.victim) && BY((() => QY(rY)))
      })), (0, iY.g)((() => {
        lY = []
      })))
    }
    const KY = Object.freeze([0, 0, 0]),
      HY = [0, 0, 0],
      zY = [0, 0, 0],
      ZY = {
        kill: {
          watch(YY) {
            if (eY = !0, 0 === lY.length) return TY = YY, () => {
              eY = !1, TY = null
            };
            const rY = setTimeout((() => {
              const rY = lY;
              lY = [], TY = YY;
              for (const FY of rY) try {
                YY(FY())
              } catch (DY) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", DY)
              }
            }), 0);
            return () => {
              clearTimeout(rY), eY = !1, TY = null
            }
          }
        }
      },
      CY = {
        localPos() {
          const YY = (0, aY.g)();
          if (null === YY) return KY;
          const rY = YY.api.apiView;
          for (let DY = 0; DY < 3; DY++) HY[DY] = OY.s.localPos(rY, 0, DY);
          return HY
        },
        targetedBlockPos() {
          const YY = (0, aY.g)();
          if (null === YY || OY.s.targetBlockId(YY.api.apiView, 0) === OY.$c) return null;
          for (let rY = 0; rY < 3; rY++) zY[rY] = OY.s.targetBlock(YY.api.apiView, 0, rY);
          return zY
        }
      }
  },
  38367: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor() {
        this.members = new Map
      }
      apply(YY) {
        const rY = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const FY of YY.jr) {
          let YY = this.members.get(FY.hr);
          if (YY || (YY = {
              name: null,
              settings: {}
            }, this.members.set(FY.hr, YY), rY.added.push(FY.hr)), null !== FY.dr && (YY.name = FY.dr), null !== FY.Jr || FY.Mr.length > 0) {
            const DY = null === FY.Jr ? {} : JSON.parse(FY.Jr);
            Object.assign(YY.settings, DY);
            for (const rY of FY.Mr) delete YY.settings[rY], DY[rY] = void 0;
            rY.settingChanges.push({
              playerId: FY.hr,
              settings: DY
            })
          }
        }
        for (const FY of YY.wr) {
          const YY = this.members.get(FY);
          var DY;
          if (YY) this.members.delete(FY), rY.removed.push({
            playerId: FY,
            name: null !== (DY = YY.name) && void 0 !== DY ? DY : void 0
          })
        }
        return rY
      }
      has(YY) {
        return this.members.has(YY)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(YY) {
        var rY, DY;
        return null !== (rY = null === (DY = this.members.get(YY)) || void 0 === DY ? void 0 : DY.name) && void 0 !== rY ? rY : void 0
      }
      getSettings(YY) {
        var rY;
        return null === (rY = this.members.get(YY)) || void 0 === rY ? void 0 : rY.settings
      }
      getSetting(YY, rY) {
        var DY;
        return null === (DY = this.members.get(YY)) || void 0 === DY ? void 0 : DY.settings[rY]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);