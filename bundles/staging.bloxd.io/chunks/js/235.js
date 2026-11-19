export const id = 235;
export const ids = [235];
export const modules = {
  39524: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      e: () => WT
    });
    var iT = IT(1762);
    let zT = !1;

    function kT() {
      zT = !0
    }

    function WT() {
      zT && (zT = !1, (0, iT.d)())
    }
  },
  39478: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => cT,
      e: () => LT,
      i: () => xT
    });
    var iT = IT(1766),
      zT = IT(1257),
      kT = IT(39371),
      WT = IT(39392),
      XT = IT(39400),
      BT = IT(39415);
    const FT = new zT.d;
    let ST = !1;

    function DT(TT) {
      const oT = (0, kT.i)();
      return null !== oT && +TT === oT.api.localId
    }

    function LT() {
      ST || (ST = !0, (0, BT.i)(WT.s, (TT => {
        var oT, IT;
        const iT = (0, XT.h)(WT.s, TT);
        if (!(0, XT.d)(iT)) return;
        const zT = iT;
        DT(zT.hT) && xT(zT.wT, {
          icon: zT.eT,
          level: zT.uT,
          displayName: null !== (oT = zT.mT) && void 0 !== oT ? oT : null,
          durationMs: null !== (IT = zT.RT) && void 0 !== IT ? IT : null
        })
      })), (0, BT.i)(WT.ab, (TT => {
        const oT = (0, XT.h)(WT.ab, TT);
        if (!(0, XT.d)(oT)) return;
        const IT = oT;
        DT(IT.hT) && iT.b.remove(IT.wT)
      })), (0, BT.e)((() => {
        iT.b.clear()
      })))
    }

    function xT(TT, oT) {
      iT.b.update(TT, oT), FT.forEach((oT => {
        oT(TT)
      }))
    }
    const cT = {
      localEffectUpdated: {
        watch: TT => FT.add(TT)
      }
    }
  },
  39483: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => ST
    });
    var iT = IT(4285),
      zT = IT(4276),
      kT = IT(39403),
      WT = IT(39415);
    const XT = new Set(iT.F),
      BT = iT.F.map((TT => (new TextEncoder).encode(TT))),
      FT = new Map;

    function ST(TT, oT) {
      var IT;
      return null === (IT = FT.get(TT)) || void 0 === IT ? void 0 : IT[oT]
    }(0, WT.i)(iT.$b.NewOtherEntitySettings, (TT => {
      TT.payloadKind === zT.fc.Msgpack && BT.some((oT => function(TT, oT) {
        const IT = oT[0];
        for (let iT = TT.indexOf(IT); - 1 !== iT && iT + oT.length <= TT.length; iT = TT.indexOf(IT, iT + 1)) {
          let IT = 1;
          for (; IT < oT.length && TT[iT + IT] === oT[IT];) IT++;
          if (IT === oT.length) return !0
        }
        return !1
      }(TT.payload, oT))) && function(TT) {
        if (null === TT || "object" !== typeof TT || null === TT.settings || "object" !== typeof TT.settings) return;
        const oT = String(TT.eId),
          IT = TT.settings;
        let iT = FT.get(oT);
        for (const zT in IT) {
          if (!XT.has(zT)) continue;
          const TT = IT[zT];
          null === TT || void 0 === TT ? iT && delete iT[zT] : (iT ??= {}, iT[zT] = TT)
        }
        iT && FT.set(oT, iT)
      }((0, kT.e)(TT.payload))
    })), (0, WT.e)((() => {
      FT.clear()
    }))
  },
  39476: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => xT,
      g: () => FT,
      k: () => DT
    });
    var iT = IT(37973),
      zT = IT(1755),
      kT = IT(1257),
      WT = IT(39392),
      XT = IT(39400),
      BT = IT(39415);
    const FT = new iT.b;
    let ST = {};

    function DT(TT) {
      return ST[TT]
    }
    const LT = new kT.d;

    function xT(TT) {
      return LT.add(TT)
    }

    function cT(TT) {
      LT.callEach(TT, "a roster listener")
    }(0, BT.i)(WT.nb, (TT => {
      const oT = (0, XT.h)(WT.nb, TT);
      if (void 0 === oT) return;
      const IT = oT.Qo.some((TT => {
          let {
            Oo: oT,
            Ho: IT
          } = TT;
          return null !== IT && FT.has(oT) && FT.getName(oT) !== IT
        })),
        {
          added: iT,
          removed: kT,
          settingChanges: BT
        } = FT.apply(oT),
        ST = new Set;
      for (const zT of BT)
        for (const TT in zT.settings) ST.add(TT);
      const DT = IT || iT.length > 0 || kT.length > 0;
      (DT || ST.has("hideNameSeed")) && function() {
        const TT = new Map;
        for (const oT of FT.ids()) {
          const IT = FT.getName(oT),
            iT = FT.getSetting(oT, "hideNameSeed");
          void 0 !== IT && void 0 !== iT && null !== iT && TT.set(IT, iT)
        }
        zT.e.replaceAll(TT)
      }(), cT({
        kind: "roster",
        members: DT,
        settings: ST
      })
    })), (0, BT.i)(WT.Z, (TT => {
      const oT = (0, XT.h)(WT.Z, TT);
      if (void 0 !== oT) {
        for (const {
            TT: TT,
            oT: IT,
            IT: iT
          }
          of oT) ST[TT] = {
          ...ST[TT],
          [IT]: iT
        };
        cT({
          kind: "cosmetics",
          updates: oT
        })
      }
    })), (0, BT.e)((() => {
      FT.clear(), ST = {}, zT.e.clear(), cT({
        kind: "reset"
      })
    })), (0, BT.h)((() => {
      FT.clear(), cT({
        kind: "reset"
      })
    }))
  },
  39498: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ET,
      d: () => MT,
      h: () => JT,
      j: () => UT
    });
    var iT = IT(1236),
      zT = IT(601),
      kT = IT(90),
      WT = IT(4285),
      XT = IT(39354),
      BT = IT(39386),
      FT = IT(39371),
      ST = IT(39483),
      DT = IT(39476),
      LT = IT(39400),
      xT = IT(39415);

    function cT(TT) {
      let {
        deadEId: oT,
        killerEId: IT,
        killerLifeformType: iT,
        withItem: zT,
        killstreak: kT
      } = TT;
      return {
        killer: hT({
          eId: IT,
          lifeformType: iT
        }),
        victim: hT({
          eId: oT
        }),
        withItem: zT,
        killstreak: kT
      }
    }

    function KT(TT) {
      let {
        killer: oT,
        victim: IT,
        withItem: iT
      } = TT;
      return {
        killer: hT(oT),
        victim: hT(IT),
        withItem: iT,
        killstreak: 0
      }
    }

    function MT(TT) {
      RT && vT((() => "killed" === TT.kind ? cT(TT.body) : KT(TT.body)))
    }
    const rT = "#2727f1",
      AT = "#912c2c";

    function gT(TT, oT) {
      var IT;
      return DT.g.has(TT) ? null === (IT = DT.g.getSettings(TT)) || void 0 === IT ? void 0 : IT[oT] : (0, ST.b)(TT, oT)
    }

    function hT(TT) {
      var oT, IT, WT, XT, ST;
      let {
        eId: LT,
        name: xT,
        colour: cT,
        lifeformType: KT
      } = TT;
      if (void 0 === LT || null === LT || "" === LT) {
        const TT = xT || null;
        return {
          id: null,
          shownName: TT,
          lifeformType: null === TT && null !== KT && void 0 !== KT ? KT : null,
          colour: cT || null,
          local: !1,
          realName: null
        }
      }
      const MT = String(LT),
        hT = null === (oT = (0, FT.i)()) || void 0 === oT ? void 0 : oT.api,
        wT = void 0 !== hT && String(hT.localId) === MT,
        mT = null !== (IT = DT.g.getName(MT)) && void 0 !== IT ? IT : null,
        eT = null !== (WT = gT(MT, "hideNameSeed")) && void 0 !== WT ? WT : null;
      let RT = null === mT ? null : (0, iT.b)(mT, !kT.featureFlags.canSeeRealPlayerNames, eT) || null,
        uT = null;
      if (null === RT && void 0 !== hT) {
        const TT = hT.getEntityType(MT);
        "Player" !== TT && (RT = (0, BT.i)(hT, +MT) || null), uT = zT.h.includes(TT) ? TT : null
      }
      return {
        id: MT,
        shownName: RT,
        lifeformType: null === RT && null !== (XT = null !== (ST = uT) && void 0 !== ST ? ST : KT) && void 0 !== XT ? XT : null,
        colour: cT || gT(MT, "killfeedColour") || (wT ? rT : AT),
        local: wT,
        realName: mT
      }
    }
    const wT = 32;
    let mT = [],
      eT = null,
      RT = !1,
      uT = !1;

    function vT(TT) {
      null === eT ? (mT.length === wT && mT.shift(), mT.push(TT)) : eT(TT())
    }

    function ET() {
      uT || (uT = !0, (0, xT.i)(WT.$b.PlayerKilled, (TT => {
        const oT = (0, LT.l)(TT);
        (0, LT.d)(oT) && vT((() => cT(oT)))
      })), (0, xT.i)(WT.$b.CustomKillfeed, (TT => {
        const oT = (0, LT.l)(TT);
        (0, LT.d)(oT) && (0, LT.d)(oT.killer) && (0, LT.d)(oT.victim) && vT((() => KT(oT)))
      })), (0, xT.e)((() => {
        mT = []
      })))
    }
    const fT = Object.freeze([0, 0, 0]),
      CT = [0, 0, 0],
      jT = [0, 0, 0],
      JT = {
        kill: {
          watch(TT) {
            if (RT = !0, 0 === mT.length) return eT = TT, () => {
              RT = !1, eT = null
            };
            const oT = setTimeout((() => {
              const oT = mT;
              mT = [], eT = TT;
              for (const iT of oT) try {
                TT(iT())
              } catch (IT) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", IT)
              }
            }), 0);
            return () => {
              clearTimeout(oT), RT = !1, eT = null
            }
          }
        }
      },
      UT = {
        localPos() {
          const TT = (0, FT.i)();
          if (null === TT) return fT;
          const oT = TT.api.apiView;
          for (let IT = 0; IT < 3; IT++) CT[IT] = XT.s.localPos(oT, 0, IT);
          return CT
        },
        targetedBlockPos() {
          const TT = (0, FT.i)();
          if (null === TT || XT.s.targetBlockId(TT.api.apiView, 0) === XT.Zc) return null;
          for (let oT = 0; oT < 3; oT++) jT[oT] = XT.s.targetBlock(TT.api.apiView, 0, oT);
          return jT
        }
      }
  },
  37973: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor() {
        this.members = new Map
      }
      apply(TT) {
        const oT = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const iT of TT.Qo) {
          let TT = this.members.get(iT.Oo);
          if (TT || (TT = {
              name: null,
              settings: {}
            }, this.members.set(iT.Oo, TT), oT.added.push(iT.Oo)), null !== iT.Ho && (TT.name = iT.Ho), null !== iT.qo || iT.Zo.length > 0) {
            const IT = null === iT.qo ? {} : JSON.parse(iT.qo);
            Object.assign(TT.settings, IT);
            for (const oT of iT.Zo) delete TT.settings[oT], IT[oT] = void 0;
            oT.settingChanges.push({
              playerId: iT.Oo,
              settings: IT
            })
          }
        }
        for (const iT of TT.Go) {
          const TT = this.members.get(iT);
          var IT;
          if (TT) this.members.delete(iT), oT.removed.push({
            playerId: iT,
            name: null !== (IT = TT.name) && void 0 !== IT ? IT : void 0
          })
        }
        return oT
      }
      has(TT) {
        return this.members.has(TT)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(TT) {
        var oT, IT;
        return null !== (oT = null === (IT = this.members.get(TT)) || void 0 === IT ? void 0 : IT.name) && void 0 !== oT ? oT : void 0
      }
      getSettings(TT) {
        var oT;
        return null === (oT = this.members.get(TT)) || void 0 === oT ? void 0 : oT.settings
      }
      getSetting(TT, oT) {
        var IT;
        return null === (IT = this.members.get(TT)) || void 0 === IT ? void 0 : IT.settings[oT]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);