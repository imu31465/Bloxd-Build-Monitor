export const id = 237;
export const ids = [237];
export const modules = {
  40124: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      f: () => PU
    });
    var tU = gU(1808);
    let pU = !1;

    function EU() {
      pU = !0
    }

    function PU() {
      pU && (pU = !1, (0, tU.c)())
    }
  },
  40081: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => CU,
      i: () => jU,
      l: () => uU
    });
    var tU = gU(1813),
      pU = gU(1291),
      EU = gU(39971),
      PU = gU(39991),
      TU = gU(39994),
      qU = gU(40016);
    const KU = new pU.d;
    let cU = !1;

    function GU(UU) {
      const RU = (0, EU.i)();
      return null !== RU && +UU === RU.api.localId
    }

    function jU() {
      cU || (cU = !0, (0, qU.h)(PU.p, (UU => {
        var RU, gU;
        const tU = (0, TU.e)(PU.p, UU);
        if (!(0, TU.c)(tU)) return;
        const pU = tU;
        GU(pU.gR) && uU(pU.tR, {
          icon: pU.ER,
          level: pU.TR,
          displayName: null !== (RU = pU.pR) && void 0 !== RU ? RU : null,
          durationMs: null !== (gU = pU.PR) && void 0 !== gU ? gU : null
        })
      })), (0, qU.h)(PU.W, (UU => {
        const RU = (0, TU.e)(PU.W, UU);
        if (!(0, TU.c)(RU)) return;
        const gU = RU;
        GU(gU.gR) && tU.c.remove(gU.tR)
      })), (0, qU.f)((() => {
        tU.c.clear()
      })))
    }

    function uU(UU, RU) {
      tU.c.update(UU, RU), KU.forEach((RU => {
        RU(UU)
      }))
    }
    const CU = {
      localEffectUpdated: {
        watch: UU => KU.add(UU)
      }
    }
  },
  40088: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => cU
    });
    var tU = gU(4456),
      pU = gU(4449),
      EU = gU(40003),
      PU = gU(40016);
    const TU = new Set(tU.F),
      qU = tU.F.map((UU => (new TextEncoder).encode(UU))),
      KU = new Map;

    function cU(UU, RU) {
      var gU;
      return null === (gU = KU.get(UU)) || void 0 === gU ? void 0 : gU[RU]
    }(0, PU.h)(tU.dc.NewOtherEntitySettings, (UU => {
      UU.payloadKind === pU.kc.Msgpack && qU.some((RU => function(UU, RU) {
        const gU = RU[0];
        for (let tU = UU.indexOf(gU); - 1 !== tU && tU + RU.length <= UU.length; tU = UU.indexOf(gU, tU + 1)) {
          let gU = 1;
          for (; gU < RU.length && UU[tU + gU] === RU[gU];) gU++;
          if (gU === RU.length) return !0
        }
        return !1
      }(UU.payload, RU))) && function(UU) {
        if (null === UU || "object" !== typeof UU || null === UU.settings || "object" !== typeof UU.settings) return;
        const RU = String(UU.eId),
          gU = UU.settings;
        let tU = KU.get(RU);
        for (const pU in gU) {
          if (!TU.has(pU)) continue;
          const UU = gU[pU];
          null === UU || void 0 === UU ? tU && delete tU[pU] : (tU ??= {}, tU[pU] = UU)
        }
        tU && KU.set(RU, tU)
      }((0, EU.b)(UU.payload))
    })), (0, PU.f)((() => {
      KU.clear()
    }))
  },
  40079: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => uU,
      c: () => KU,
      g: () => GU
    });
    var tU = gU(38561),
      pU = gU(1802),
      EU = gU(1291),
      PU = gU(39991),
      TU = gU(39994),
      qU = gU(40016);
    const KU = new tU.b;
    let cU = {};

    function GU(UU) {
      return cU[UU]
    }
    const jU = new EU.d;

    function uU(UU) {
      return jU.add(UU)
    }

    function CU(UU) {
      jU.callEach(UU, "a roster listener")
    }(0, qU.h)(PU.db, (UU => {
      const RU = (0, TU.e)(PU.db, UU);
      if (void 0 === RU) return;
      const gU = RU.gt.some((UU => {
          let {
            tt: RU,
            Et: gU
          } = UU;
          return null !== gU && KU.has(RU) && KU.getName(RU) !== gU
        })),
        {
          added: tU,
          removed: EU,
          settingChanges: qU
        } = KU.apply(RU),
        cU = new Set;
      for (const pU of qU)
        for (const UU in pU.settings) cU.add(UU);
      const GU = gU || tU.length > 0 || EU.length > 0;
      (GU || cU.has("hideNameSeed")) && function() {
        const UU = new Map;
        for (const RU of KU.ids()) {
          const gU = KU.getName(RU),
            tU = KU.getSetting(RU, "hideNameSeed");
          void 0 !== gU && void 0 !== tU && null !== tU && UU.set(gU, tU)
        }
        pU.b.replaceAll(UU)
      }(), CU({
        kind: "roster",
        members: GU,
        settings: cU
      })
    })), (0, qU.h)(PU.S, (UU => {
      const RU = (0, TU.e)(PU.S, UU);
      if (void 0 !== RU) {
        for (const {
            rg: UU,
            Xg: gU,
            vg: tU
          }
          of RU) cU[UU] = {
          ...cU[UU],
          [gU]: tU
        };
        CU({
          kind: "cosmetics",
          updates: RU
        })
      }
    })), (0, qU.f)((() => {
      KU.clear(), cU = {}, pU.b.clear(), CU({
        kind: "reset"
      })
    })), (0, qU.g)((() => {
      KU.clear(), CU({
        kind: "reset"
      })
    }))
  },
  40105: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => oU,
      c: () => QU,
      g: () => BU,
      j: () => VU
    });
    var tU = gU(1271),
      pU = gU(567),
      EU = gU(96),
      PU = gU(4456),
      TU = gU(39955),
      qU = gU(39984),
      KU = gU(39971),
      cU = gU(40088),
      GU = gU(40079),
      jU = gU(39994),
      uU = gU(40016);

    function CU(UU) {
      let {
        deadEId: RU,
        killerEId: gU,
        killerLifeformType: tU,
        withItem: pU,
        killstreak: EU
      } = UU;
      return {
        killer: xU({
          eId: gU,
          lifeformType: tU
        }),
        victim: xU({
          eId: RU
        }),
        withItem: pU,
        killstreak: EU
      }
    }

    function hU(UU) {
      let {
        killer: RU,
        victim: gU,
        withItem: tU
      } = UU;
      return {
        killer: xU(RU),
        victim: xU(gU),
        withItem: tU,
        killstreak: 0
      }
    }

    function QU(UU) {
      wU && bU((() => "killed" === UU.kind ? CU(UU.body) : hU(UU.body)))
    }
    const eU = "#2727f1",
      WU = "#912c2c";

    function fU(UU, RU) {
      var gU;
      return GU.c.has(UU) ? null === (gU = GU.c.getSettings(UU)) || void 0 === gU ? void 0 : gU[RU] : (0, cU.e)(UU, RU)
    }

    function xU(UU) {
      var RU, gU, PU, TU, cU;
      let {
        eId: jU,
        name: uU,
        colour: CU,
        lifeformType: hU
      } = UU;
      if (void 0 === jU || null === jU || "" === jU) {
        const UU = uU || null;
        return {
          id: null,
          shownName: UU,
          lifeformType: null === UU && null !== hU && void 0 !== hU ? hU : null,
          colour: CU || null,
          local: !1,
          realName: null
        }
      }
      const QU = String(jU),
        xU = null === (RU = (0, KU.i)()) || void 0 === RU ? void 0 : RU.api,
        mU = void 0 !== xU && String(xU.localId) === QU,
        IU = null !== (gU = GU.c.getName(QU)) && void 0 !== gU ? gU : null,
        JU = null !== (PU = fU(QU, "hideNameSeed")) && void 0 !== PU ? PU : null;
      let wU = null === IU ? null : (0, tU.c)(IU, !EU.featureFlags.canSeeRealPlayerNames, JU) || null,
        nU = null;
      if (null === wU && void 0 !== xU) {
        const UU = xU.getEntityType(QU);
        "Player" !== UU && (wU = (0, qU.e)(xU, +QU) || null), nU = pU.m.includes(UU) ? UU : null
      }
      return {
        id: QU,
        shownName: wU,
        lifeformType: null === wU && null !== (TU = null !== (cU = nU) && void 0 !== cU ? cU : hU) && void 0 !== TU ? TU : null,
        colour: CU || fU(QU, "killfeedColour") || (mU ? eU : WU),
        local: mU,
        realName: IU
      }
    }
    const mU = 32;
    let IU = [],
      JU = null,
      wU = !1,
      nU = !1;

    function bU(UU) {
      null === JU ? (IU.length === mU && IU.shift(), IU.push(UU)) : JU(UU())
    }

    function oU() {
      nU || (nU = !0, (0, uU.h)(PU.dc.PlayerKilled, (UU => {
        const RU = (0, jU.f)(UU);
        (0, jU.c)(RU) && bU((() => CU(RU)))
      })), (0, uU.h)(PU.dc.CustomKillfeed, (UU => {
        const RU = (0, jU.f)(UU);
        (0, jU.c)(RU) && (0, jU.c)(RU.killer) && (0, jU.c)(RU.victim) && bU((() => hU(RU)))
      })), (0, uU.f)((() => {
        IU = []
      })))
    }
    const ZU = Object.freeze([0, 0, 0]),
      aU = [0, 0, 0],
      YU = [0, 0, 0],
      BU = {
        kill: {
          watch(UU) {
            if (wU = !0, 0 === IU.length) return JU = UU, () => {
              wU = !1, JU = null
            };
            const RU = setTimeout((() => {
              const RU = IU;
              IU = [], JU = UU;
              for (const tU of RU) try {
                UU(tU())
              } catch (gU) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", gU)
              }
            }), 0);
            return () => {
              clearTimeout(RU), wU = !1, JU = null
            }
          }
        }
      },
      VU = {
        localPos() {
          const UU = (0, KU.i)();
          if (null === UU) return ZU;
          const RU = UU.api.apiView;
          for (let gU = 0; gU < 3; gU++) aU[gU] = TU.w.localPos(RU, 0, gU);
          return aU
        },
        targetedBlockPos() {
          const UU = (0, KU.i)();
          if (null === UU || TU.w.targetBlockId(UU.api.apiView, 0) === TU.fd) return null;
          for (let RU = 0; RU < 3; RU++) YU[RU] = TU.w.targetBlock(UU.api.apiView, 0, RU);
          return YU
        }
      }
  },
  38561: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor() {
        this.members = new Map
      }
      apply(UU) {
        const RU = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const tU of UU.gt) {
          let UU = this.members.get(tU.tt);
          if (UU || (UU = {
              name: null,
              settings: {}
            }, this.members.set(tU.tt, UU), RU.added.push(tU.tt)), null !== tU.Et && (UU.name = tU.Et), null !== tU.Pt || tU.Tt.length > 0) {
            const gU = null === tU.Pt ? {} : JSON.parse(tU.Pt);
            Object.assign(UU.settings, gU);
            for (const RU of tU.Tt) delete UU.settings[RU], gU[RU] = void 0;
            RU.settingChanges.push({
              playerId: tU.tt,
              settings: gU
            })
          }
        }
        for (const tU of UU.qt) {
          const UU = this.members.get(tU);
          var gU;
          if (UU) this.members.delete(tU), RU.removed.push({
            playerId: tU,
            name: null !== (gU = UU.name) && void 0 !== gU ? gU : void 0
          })
        }
        return RU
      }
      has(UU) {
        return this.members.has(UU)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(UU) {
        var RU, gU;
        return null !== (RU = null === (gU = this.members.get(UU)) || void 0 === gU ? void 0 : gU.name) && void 0 !== RU ? RU : void 0
      }
      getSettings(UU) {
        var RU;
        return null === (RU = this.members.get(UU)) || void 0 === RU ? void 0 : RU.settings
      }
      getSetting(UU, RU) {
        var gU;
        return null === (gU = this.members.get(UU)) || void 0 === gU ? void 0 : gU.settings[RU]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);