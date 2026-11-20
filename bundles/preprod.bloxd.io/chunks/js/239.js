export const id = 239;
export const ids = [239];
export const modules = {
  40466: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      f: () => mq
    });
    var Yq = gq(1914);
    let lq = !1;

    function Oq() {
      lq = !0
    }

    function mq() {
      lq && (lq = !1, (0, Yq.d)())
    }
  },
  40462: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      f: () => Oq,
      h: () => xq
    });
    var Yq = gq(40318),
      lq = gq(40325);

    function Oq(qq) {
      if (qq.queries.drawCensus() < Yq.zb.BYTES) return null;
      const Eq = qq.memoryData(qq.scratch(), Yq.zb.BYTES, 4, "the draw census");
      return null === Eq ? null : {
        terrainOpaque: Yq.zb.terrainOpaque(Eq, 0),
        terrainTransparent: Yq.zb.terrainTransparent(Eq, 0),
        terrainPack: Yq.zb.terrainPack(Eq, 0),
        earthSky: Yq.zb.earthSky(Eq, 0),
        skyMeshes: Yq.zb.skyMeshes(Eq, 0),
        regular: Yq.zb.regular(Eq, 0),
        thin: Yq.zb.thin(Eq, 0),
        line: Yq.zb.line(Eq, 0),
        text: Yq.zb.text(Eq, 0),
        particles: Yq.zb.particles(Eq, 0),
        terrainParts: Yq.zb.terrainParts(Eq, 0),
        terrainCompiling: Yq.zb.terrainCompiling(Eq, 0)
      }
    }

    function mq(qq) {
      const {
        terrainOpaque: Eq,
        terrainTransparent: gq,
        earthSky: Yq,
        skyMeshes: lq,
        regular: Oq,
        thin: mq,
        line: xq,
        text: Aq,
        particles: cq
      } = qq;
      return Eq + gq + Yq + lq + Oq + mq + xq + Aq + cq
    }

    function xq() {
      const qq = (0, lq.e)();
      return !0 === (null === qq || void 0 === qq ? void 0 : qq.isCoreRunning) ? function(qq) {
        const Eq = Oq(qq);
        if (null === Eq) return [];
        const {
          terrainOpaque: gq,
          terrainTransparent: Yq,
          terrainPack: lq,
          earthSky: xq,
          skyMeshes: Aq,
          regular: cq,
          thin: uq,
          line: Bq,
          text: Wq,
          particles: Nq
        } = Eq;
        return [{
          label: "Drawn",
          value: `${mq(Eq)}`
        }, {
          label: "Terrain",
          value: `${gq} opaque / ${Yq} transparent (${lq} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${cq} / ${uq}`
        }, {
          label: "Text / Lines",
          value: `${Wq} / ${Bq}`
        }, {
          label: "Sky / Particles",
          value: `${xq+Aq} / ${Nq}`
        }]
      }(qq.api) : []
    }
  },
  40428: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => aq,
      e: () => Wq,
      h: () => Nq
    });
    var Yq = gq(1921),
      lq = gq(1276),
      Oq = gq(40325),
      mq = gq(40343),
      xq = gq(40350),
      Aq = gq(40366);
    const cq = new lq.b;
    let uq = !1;

    function Bq(qq) {
      const Eq = (0, Oq.e)();
      return null !== Eq && +qq === Eq.api.localId
    }

    function Wq() {
      uq || (uq = !0, (0, Aq.l)(mq.m, (qq => {
        var Eq, gq;
        const Yq = (0, xq.d)(mq.m, qq);
        if (!(0, xq.b)(Yq)) return;
        const lq = Yq;
        Bq(lq.RE) && Nq(lq.UE, {
          icon: lq.sE,
          level: lq.wE,
          displayName: null !== (Eq = lq.FE) && void 0 !== Eq ? Eq : null,
          durationMs: null !== (gq = lq.XE) && void 0 !== gq ? gq : null
        })
      })), (0, Aq.l)(mq.H, (qq => {
        const Eq = (0, xq.d)(mq.H, qq);
        if (!(0, xq.b)(Eq)) return;
        const gq = Eq;
        Bq(gq.RE) && Yq.b.remove(gq.UE)
      })), (0, Aq.d)((() => {
        Yq.b.clear()
      })))
    }

    function Nq(qq, Eq) {
      Yq.b.update(qq, Eq), cq.forEach((Eq => {
        Eq(qq)
      }))
    }
    const aq = {
      localEffectUpdated: {
        watch: qq => cq.add(qq)
      }
    }
  },
  40432: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq
    });
    var Yq = gq(4625),
      lq = gq(4622),
      Oq = gq(40353),
      mq = gq(40366);
    const xq = new Set(Yq.G),
      Aq = Yq.G.map((qq => (new TextEncoder).encode(qq))),
      cq = new Map;

    function uq(qq, Eq) {
      var gq;
      return null === (gq = cq.get(qq)) || void 0 === gq ? void 0 : gq[Eq]
    }(0, mq.l)(Yq.ec.NewOtherEntitySettings, (qq => {
      qq.payloadKind === lq.hc.Msgpack && Aq.some((Eq => function(qq, Eq) {
        const gq = Eq[0];
        for (let Yq = qq.indexOf(gq); - 1 !== Yq && Yq + Eq.length <= qq.length; Yq = qq.indexOf(gq, Yq + 1)) {
          let gq = 1;
          for (; gq < Eq.length && qq[Yq + gq] === Eq[gq];) gq++;
          if (gq === Eq.length) return !0
        }
        return !1
      }(qq.payload, Eq))) && function(qq) {
        if (null === qq || "object" !== typeof qq || null === qq.settings || "object" !== typeof qq.settings) return;
        const Eq = String(qq.eId),
          gq = qq.settings;
        let Yq = cq.get(Eq);
        for (const lq in gq) {
          if (!xq.has(lq)) continue;
          const qq = gq[lq];
          null === qq || void 0 === qq ? Yq && delete Yq[lq] : (Yq ??= {}, Yq[lq] = qq)
        }
        Yq && cq.set(Eq, Yq)
      }((0, Oq.e)(qq.payload))
    })), (0, mq.d)((() => {
      cq.clear()
    }))
  },
  40421: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Nq,
      e: () => cq,
      h: () => Bq
    });
    var Yq = gq(38954),
      lq = gq(1906),
      Oq = gq(1276),
      mq = gq(40343),
      xq = gq(40350),
      Aq = gq(40366);
    const cq = new Yq.d;
    let uq = {};

    function Bq(qq) {
      return uq[qq]
    }
    const Wq = new Oq.b;

    function Nq(qq) {
      return Wq.add(qq)
    }

    function aq(qq) {
      Wq.callEach(qq, "a roster listener")
    }(0, Aq.l)(mq.T, (qq => {
      const Eq = (0, xq.d)(mq.T, qq);
      if (void 0 === Eq) return;
      const gq = Eq.xg.some((qq => {
          let {
            Ag: Eq,
            cg: gq
          } = qq;
          return null !== gq && cq.has(Eq) && cq.getName(Eq) !== gq
        })),
        {
          added: Yq,
          removed: Oq,
          settingChanges: Aq
        } = cq.apply(Eq),
        uq = new Set;
      for (const lq of Aq)
        for (const qq in lq.settings) uq.add(qq);
      const Bq = gq || Yq.length > 0 || Oq.length > 0;
      (Bq || uq.has("hideNameSeed")) && function() {
        const qq = new Map;
        for (const Eq of cq.ids()) {
          const gq = cq.getName(Eq),
            Yq = cq.getSetting(Eq, "hideNameSeed");
          void 0 !== gq && void 0 !== Yq && null !== Yq && qq.set(gq, Yq)
        }
        lq.d.replaceAll(qq)
      }(), aq({
        kind: "roster",
        members: Bq,
        settings: uq
      })
    })), (0, Aq.l)(mq.F, (qq => {
      const Eq = (0, xq.d)(mq.F, qq);
      if (void 0 !== Eq) {
        for (const {
            yY: qq,
            tY: gq,
            rY: Yq
          }
          of Eq) uq[qq] = {
          ...uq[qq],
          [gq]: Yq
        };
        aq({
          kind: "cosmetics",
          updates: Eq
        })
      }
    })), (0, Aq.d)((() => {
      cq.clear(), uq = {}, lq.d.clear(), aq({
        kind: "reset"
      })
    })), (0, Aq.h)((() => {
      cq.clear(), aq({
        kind: "reset"
      })
    }))
  },
  40448: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => nq,
      g: () => dq,
      i: () => fq,
      m: () => Mq
    });
    var Yq = gq(1261),
      lq = gq(583),
      Oq = gq(96),
      mq = gq(4625),
      xq = gq(40318),
      Aq = gq(40334),
      cq = gq(40325),
      uq = gq(40432),
      Bq = gq(40421),
      Wq = gq(40350),
      Nq = gq(40366);

    function aq(qq) {
      let {
        deadEId: Eq,
        killerEId: gq,
        killerLifeformType: Yq,
        withItem: lq,
        killstreak: Oq
      } = qq;
      return {
        killer: Pq({
          eId: gq,
          lifeformType: Yq
        }),
        victim: Pq({
          eId: Eq
        }),
        withItem: lq,
        killstreak: Oq
      }
    }

    function Vq(qq) {
      let {
        killer: Eq,
        victim: gq,
        withItem: Yq
      } = qq;
      return {
        killer: Pq(Eq),
        victim: Pq(gq),
        withItem: Yq,
        killstreak: 0
      }
    }

    function dq(qq) {
      rq && hq((() => "killed" === qq.kind ? aq(qq.body) : Vq(qq.body)))
    }
    const jq = "#2727f1",
      Hq = "#912c2c";

    function oq(qq, Eq) {
      var gq;
      return Bq.e.has(qq) ? null === (gq = Bq.e.getSettings(qq)) || void 0 === gq ? void 0 : gq[Eq] : (0, uq.d)(qq, Eq)
    }

    function Pq(qq) {
      var Eq, gq, mq, xq, uq;
      let {
        eId: Wq,
        name: Nq,
        colour: aq,
        lifeformType: Vq
      } = qq;
      if (void 0 === Wq || null === Wq || "" === Wq) {
        const qq = Nq || null;
        return {
          id: null,
          shownName: qq,
          lifeformType: null === qq && null !== Vq && void 0 !== Vq ? Vq : null,
          colour: aq || null,
          local: !1,
          realName: null
        }
      }
      const dq = String(Wq),
        Pq = null === (Eq = (0, cq.e)()) || void 0 === Eq ? void 0 : Eq.api,
        Qq = void 0 !== Pq && String(Pq.localId) === dq,
        yq = null !== (gq = Bq.e.getName(dq)) && void 0 !== gq ? gq : null,
        tq = null !== (mq = oq(dq, "hideNameSeed")) && void 0 !== mq ? mq : null;
      let rq = null === yq ? null : (0, Yq.e)(yq, !Oq.featureFlags.canSeeRealPlayerNames, tq) || null,
        vq = null;
      if (null === rq && void 0 !== Pq) {
        const qq = Pq.getEntityType(dq);
        "Player" !== qq && (rq = (0, Aq.f)(Pq, +dq) || null), vq = lq.m.includes(qq) ? qq : null
      }
      return {
        id: dq,
        shownName: rq,
        lifeformType: null === rq && null !== (xq = null !== (uq = vq) && void 0 !== uq ? uq : Vq) && void 0 !== xq ? xq : null,
        colour: aq || oq(dq, "killfeedColour") || (Qq ? jq : Hq),
        local: Qq,
        realName: yq
      }
    }
    const Qq = 32;
    let yq = [],
      tq = null,
      rq = !1,
      vq = !1;

    function hq(qq) {
      null === tq ? (yq.length === Qq && yq.shift(), yq.push(qq)) : tq(qq())
    }

    function nq() {
      vq || (vq = !0, (0, Nq.l)(mq.ec.PlayerKilled, (qq => {
        const Eq = (0, Wq.e)(qq);
        (0, Wq.b)(Eq) && hq((() => aq(Eq)))
      })), (0, Nq.l)(mq.ec.CustomKillfeed, (qq => {
        const Eq = (0, Wq.e)(qq);
        (0, Wq.b)(Eq) && (0, Wq.b)(Eq.killer) && (0, Wq.b)(Eq.victim) && hq((() => Vq(Eq)))
      })), (0, Nq.d)((() => {
        yq = []
      })))
    }
    const bq = Object.freeze([0, 0, 0]),
      iq = [0, 0, 0],
      Zq = [0, 0, 0],
      fq = {
        kill: {
          watch(qq) {
            if (rq = !0, 0 === yq.length) return tq = qq, () => {
              rq = !1, tq = null
            };
            const Eq = setTimeout((() => {
              const Eq = yq;
              yq = [], tq = qq;
              for (const Yq of Eq) try {
                qq(Yq())
              } catch (gq) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", gq)
              }
            }), 0);
            return () => {
              clearTimeout(Eq), rq = !1, tq = null
            }
          }
        }
      },
      Mq = {
        localPos() {
          const qq = (0, cq.e)();
          if (null === qq) return bq;
          const Eq = qq.api.apiView;
          for (let gq = 0; gq < 3; gq++) iq[gq] = xq.t.localPos(Eq, 0, gq);
          return iq
        },
        targetedBlockPos() {
          const qq = (0, cq.e)();
          if (null === qq || xq.t.targetBlockId(qq.api.apiView, 0) === xq.id) return null;
          for (let Eq = 0; Eq < 3; Eq++) Zq[Eq] = xq.t.targetBlock(qq.api.apiView, 0, Eq);
          return Zq
        }
      }
  },
  38954: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      constructor() {
        this.members = new Map
      }
      apply(qq) {
        const Eq = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Yq of qq.xg) {
          let qq = this.members.get(Yq.Ag);
          if (qq || (qq = {
              name: null,
              settings: {}
            }, this.members.set(Yq.Ag, qq), Eq.added.push(Yq.Ag)), null !== Yq.cg && (qq.name = Yq.cg), null !== Yq.ug || Yq.Bg.length > 0) {
            const gq = null === Yq.ug ? {} : JSON.parse(Yq.ug);
            Object.assign(qq.settings, gq);
            for (const Eq of Yq.Bg) delete qq.settings[Eq], gq[Eq] = void 0;
            Eq.settingChanges.push({
              playerId: Yq.Ag,
              settings: gq
            })
          }
        }
        for (const Yq of qq.Wg) {
          const qq = this.members.get(Yq);
          var gq;
          if (qq) this.members.delete(Yq), Eq.removed.push({
            playerId: Yq,
            name: null !== (gq = qq.name) && void 0 !== gq ? gq : void 0
          })
        }
        return Eq
      }
      has(qq) {
        return this.members.has(qq)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(qq) {
        var Eq, gq;
        return null !== (Eq = null === (gq = this.members.get(qq)) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : void 0
      }
      getSettings(qq) {
        var Eq;
        return null === (Eq = this.members.get(qq)) || void 0 === Eq ? void 0 : Eq.settings
      }
      getSetting(qq, Eq) {
        var gq;
        return null === (gq = this.members.get(qq)) || void 0 === gq ? void 0 : gq.settings[Eq]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);