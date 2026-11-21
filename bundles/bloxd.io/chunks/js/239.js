export const id = 239;
export const ids = [239];
export const modules = {
  40719: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Pd
    });
    var pd = kd(1942);
    let Nd = !1;

    function Wd() {
      Nd = !0
    }

    function Pd() {
      Nd && (Nd = !1, (0, pd.e)())
    }
  },
  40714: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      h: () => Wd,
      k: () => Zd
    });
    var pd = kd(40569),
      Nd = kd(40575);

    function Wd(dd) {
      if (dd.queries.drawCensus() < pd.Gb.BYTES) return null;
      const Jd = dd.memoryData(dd.scratch(), pd.Gb.BYTES, 4, "the draw census");
      return null === Jd ? null : {
        terrainOpaque: pd.Gb.terrainOpaque(Jd, 0),
        terrainTransparent: pd.Gb.terrainTransparent(Jd, 0),
        terrainPack: pd.Gb.terrainPack(Jd, 0),
        earthSky: pd.Gb.earthSky(Jd, 0),
        skyMeshes: pd.Gb.skyMeshes(Jd, 0),
        regular: pd.Gb.regular(Jd, 0),
        thin: pd.Gb.thin(Jd, 0),
        line: pd.Gb.line(Jd, 0),
        text: pd.Gb.text(Jd, 0),
        particles: pd.Gb.particles(Jd, 0),
        terrainParts: pd.Gb.terrainParts(Jd, 0),
        terrainCompiling: pd.Gb.terrainCompiling(Jd, 0)
      }
    }

    function Pd(dd) {
      const {
        terrainOpaque: Jd,
        terrainTransparent: kd,
        earthSky: pd,
        skyMeshes: Nd,
        regular: Wd,
        thin: Pd,
        line: Zd,
        text: gd,
        particles: Cd
      } = dd;
      return Jd + kd + pd + Nd + Wd + Pd + Zd + gd + Cd
    }

    function Zd() {
      const dd = (0, Nd.k)();
      return !0 === (null === dd || void 0 === dd ? void 0 : dd.isCoreRunning) ? function(dd) {
        const Jd = Wd(dd);
        if (null === Jd) return [];
        const {
          terrainOpaque: kd,
          terrainTransparent: pd,
          terrainPack: Nd,
          earthSky: Zd,
          skyMeshes: gd,
          regular: Cd,
          thin: Kd,
          line: od,
          text: ld,
          particles: Qd
        } = Jd;
        return [{
          label: "Drawn",
          value: `${Pd(Jd)}`
        }, {
          label: "Terrain",
          value: `${kd} opaque / ${pd} transparent (${Nd} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Cd} / ${Kd}`
        }, {
          label: "Text / Lines",
          value: `${ld} / ${od}`
        }, {
          label: "Sky / Particles",
          value: `${Zd+gd} / ${Qd}`
        }]
      }(dd.api) : []
    }
  },
  40687: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Ld,
      g: () => ld,
      j: () => Qd
    });
    var pd = kd(1950),
      Nd = kd(1314),
      Wd = kd(40575),
      Pd = kd(40592),
      Zd = kd(40601),
      gd = kd(40624);
    const Cd = new Nd.c;
    let Kd = !1;

    function od(dd) {
      const Jd = (0, Wd.k)();
      return null !== Jd && +dd === Jd.api.localId
    }

    function ld() {
      Kd || (Kd = !0, (0, gd.l)(Pd.r, (dd => {
        var Jd, kd;
        const pd = (0, Zd.e)(Pd.r, dd);
        if (!(0, Zd.d)(pd)) return;
        const Nd = pd;
        od(Nd.tJ) && Qd(Nd.VJ, {
          icon: Nd.HJ,
          level: Nd.AJ,
          displayName: null !== (Jd = Nd.zJ) && void 0 !== Jd ? Jd : null,
          durationMs: null !== (kd = Nd.wJ) && void 0 !== kd ? kd : null
        })
      })), (0, gd.l)(Pd.Y, (dd => {
        const Jd = (0, Zd.e)(Pd.Y, dd);
        if (!(0, Zd.d)(Jd)) return;
        const kd = Jd;
        od(kd.tJ) && pd.b.remove(kd.VJ)
      })), (0, gd.f)((() => {
        pd.b.clear()
      })))
    }

    function Qd(dd, Jd) {
      pd.b.update(dd, Jd), Cd.forEach((Jd => {
        Jd(dd)
      }))
    }
    const Ld = {
      localEffectUpdated: {
        watch: dd => Cd.add(dd)
      }
    }
  },
  40689: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd
    });
    var pd = kd(4688),
      Nd = kd(4680),
      Wd = kd(40610),
      Pd = kd(40624);
    const Zd = new Set(pd.I),
      gd = pd.I.map((dd => (new TextEncoder).encode(dd))),
      Cd = new Map;

    function Kd(dd, Jd) {
      var kd;
      return null === (kd = Cd.get(dd)) || void 0 === kd ? void 0 : kd[Jd]
    }(0, Pd.l)(pd.ac.NewOtherEntitySettings, (dd => {
      dd.payloadKind === Nd.ic.Msgpack && gd.some((Jd => function(dd, Jd) {
        const kd = Jd[0];
        for (let pd = dd.indexOf(kd); - 1 !== pd && pd + Jd.length <= dd.length; pd = dd.indexOf(kd, pd + 1)) {
          let kd = 1;
          for (; kd < Jd.length && dd[pd + kd] === Jd[kd];) kd++;
          if (kd === Jd.length) return !0
        }
        return !1
      }(dd.payload, Jd))) && function(dd) {
        if (null === dd || "object" !== typeof dd || null === dd.settings || "object" !== typeof dd.settings) return;
        const Jd = String(dd.eId),
          kd = dd.settings;
        let pd = Cd.get(Jd);
        for (const Nd in kd) {
          if (!Zd.has(Nd)) continue;
          const dd = kd[Nd];
          null === dd || void 0 === dd ? pd && delete pd[Nd] : (pd ??= {}, pd[Nd] = dd)
        }
        pd && Cd.set(Jd, pd)
      }((0, Wd.c)(dd.payload))
    })), (0, Pd.f)((() => {
      Cd.clear()
    }))
  },
  40680: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Qd,
      h: () => Cd,
      l: () => od
    });
    var pd = kd(39164),
      Nd = kd(1938),
      Wd = kd(1314),
      Pd = kd(40592),
      Zd = kd(40601),
      gd = kd(40624);
    const Cd = new pd.c;
    let Kd = {};

    function od(dd) {
      return Kd[dd]
    }
    const ld = new Wd.c;

    function Qd(dd) {
      return ld.add(dd)
    }

    function Ld(dd) {
      ld.callEach(dd, "a roster listener")
    }(0, gd.l)(Pd.lb, (dd => {
      const Jd = (0, Zd.e)(Pd.lb, dd);
      if (void 0 === Jd) return;
      const kd = Jd.Ok.some((dd => {
          let {
            Rk: Jd,
            Ik: kd
          } = dd;
          return null !== kd && Cd.has(Jd) && Cd.getName(Jd) !== kd
        })),
        {
          added: pd,
          removed: Wd,
          settingChanges: gd
        } = Cd.apply(Jd),
        Kd = new Set;
      for (const Nd of gd)
        for (const dd in Nd.settings) Kd.add(dd);
      const od = kd || pd.length > 0 || Wd.length > 0;
      (od || Kd.has("hideNameSeed")) && function() {
        const dd = new Map;
        for (const Jd of Cd.ids()) {
          const kd = Cd.getName(Jd),
            pd = Cd.getSetting(Jd, "hideNameSeed");
          void 0 !== kd && void 0 !== pd && null !== pd && dd.set(kd, pd)
        }
        Nd.d.replaceAll(dd)
      }(), Ld({
        kind: "roster",
        members: od,
        settings: Kd
      })
    })), (0, gd.l)(Pd.V, (dd => {
      const Jd = (0, Zd.e)(Pd.V, dd);
      if (void 0 !== Jd) {
        for (const {
            Xp: dd,
            np: kd,
            Up: pd
          }
          of Jd) Kd[dd] = {
          ...Kd[dd],
          [kd]: pd
        };
        Ld({
          kind: "cosmetics",
          updates: Jd
        })
      }
    })), (0, gd.f)((() => {
      Cd.clear(), Kd = {}, Nd.d.clear(), Ld({
        kind: "reset"
      })
    })), (0, gd.h)((() => {
      Cd.clear(), Ld({
        kind: "reset"
      })
    }))
  },
  40705: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Fd,
      d: () => ed,
      g: () => Sd,
      k: () => jd
    });
    var pd = kd(1288),
      Nd = kd(597),
      Wd = kd(95),
      Pd = kd(4688),
      Zd = kd(40569),
      gd = kd(40585),
      Cd = kd(40575),
      Kd = kd(40689),
      od = kd(40680),
      ld = kd(40601),
      Qd = kd(40624);

    function Ld(dd) {
      let {
        deadEId: Jd,
        killerEId: kd,
        killerLifeformType: pd,
        withItem: Nd,
        killstreak: Wd
      } = dd;
      return {
        killer: vd({
          eId: kd,
          lifeformType: pd
        }),
        victim: vd({
          eId: Jd
        }),
        withItem: Nd,
        killstreak: Wd
      }
    }

    function Od(dd) {
      let {
        killer: Jd,
        victim: kd,
        withItem: pd
      } = dd;
      return {
        killer: vd(Jd),
        victim: vd(kd),
        withItem: pd,
        killstreak: 0
      }
    }

    function ed(dd) {
      sd && Md((() => "killed" === dd.kind ? Ld(dd.body) : Od(dd.body)))
    }
    const Rd = "#2727f1",
      Id = "#912c2c";

    function Gd(dd, Jd) {
      var kd;
      return od.h.has(dd) ? null === (kd = od.h.getSettings(dd)) || void 0 === kd ? void 0 : kd[Jd] : (0, Kd.d)(dd, Jd)
    }

    function vd(dd) {
      var Jd, kd, Pd, Zd, Kd;
      let {
        eId: ld,
        name: Qd,
        colour: Ld,
        lifeformType: Od
      } = dd;
      if (void 0 === ld || null === ld || "" === ld) {
        const dd = Qd || null;
        return {
          id: null,
          shownName: dd,
          lifeformType: null === dd && null !== Od && void 0 !== Od ? Od : null,
          colour: Ld || null,
          local: !1,
          realName: null
        }
      }
      const ed = String(ld),
        vd = null === (Jd = (0, Cd.k)()) || void 0 === Jd ? void 0 : Jd.api,
        xd = void 0 !== vd && String(vd.localId) === ed,
        qd = null !== (kd = od.h.getName(ed)) && void 0 !== kd ? kd : null,
        Bd = null !== (Pd = Gd(ed, "hideNameSeed")) && void 0 !== Pd ? Pd : null;
      let sd = null === qd ? null : (0, pd.d)(qd, !Wd.featureFlags.canSeeRealPlayerNames, Bd) || null,
        ad = null;
      if (null === sd && void 0 !== vd) {
        const dd = vd.getEntityType(ed);
        "Player" !== dd && (sd = (0, gd.g)(vd, +ed) || null), ad = Nd.k.includes(dd) ? dd : null
      }
      return {
        id: ed,
        shownName: sd,
        lifeformType: null === sd && null !== (Zd = null !== (Kd = ad) && void 0 !== Kd ? Kd : Od) && void 0 !== Zd ? Zd : null,
        colour: Ld || Gd(ed, "killfeedColour") || (xd ? Rd : Id),
        local: xd,
        realName: qd
      }
    }
    const xd = 32;
    let qd = [],
      Bd = null,
      sd = !1,
      ad = !1;

    function Md(dd) {
      null === Bd ? (qd.length === xd && qd.shift(), qd.push(dd)) : Bd(dd())
    }

    function Fd() {
      ad || (ad = !0, (0, Qd.l)(Pd.ac.PlayerKilled, (dd => {
        const Jd = (0, ld.f)(dd);
        (0, ld.d)(Jd) && Md((() => Ld(Jd)))
      })), (0, Qd.l)(Pd.ac.CustomKillfeed, (dd => {
        const Jd = (0, ld.f)(dd);
        (0, ld.d)(Jd) && (0, ld.d)(Jd.killer) && (0, ld.d)(Jd.victim) && Md((() => Od(Jd)))
      })), (0, Qd.f)((() => {
        qd = []
      })))
    }
    const Yd = Object.freeze([0, 0, 0]),
      md = [0, 0, 0],
      bd = [0, 0, 0],
      Sd = {
        kill: {
          watch(dd) {
            if (sd = !0, 0 === qd.length) return Bd = dd, () => {
              sd = !1, Bd = null
            };
            const Jd = setTimeout((() => {
              const Jd = qd;
              qd = [], Bd = dd;
              for (const pd of Jd) try {
                dd(pd())
              } catch (kd) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", kd)
              }
            }), 0);
            return () => {
              clearTimeout(Jd), sd = !1, Bd = null
            }
          }
        }
      },
      jd = {
        localPos() {
          const dd = (0, Cd.k)();
          if (null === dd) return Yd;
          const Jd = dd.api.apiView;
          for (let kd = 0; kd < 3; kd++) md[kd] = Zd.u.localPos(Jd, 0, kd);
          return md
        },
        targetedBlockPos() {
          const dd = (0, Cd.k)();
          if (null === dd || Zd.u.targetBlockId(dd.api.apiView, 0) === Zd.kd) return null;
          for (let Jd = 0; Jd < 3; Jd++) bd[Jd] = Zd.u.targetBlock(dd.api.apiView, 0, Jd);
          return bd
        }
      }
  },
  39164: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      constructor() {
        this.members = new Map
      }
      apply(dd) {
        const Jd = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const pd of dd.Ok) {
          let dd = this.members.get(pd.Rk);
          if (dd || (dd = {
              name: null,
              settings: {}
            }, this.members.set(pd.Rk, dd), Jd.added.push(pd.Rk)), null !== pd.Ik && (dd.name = pd.Ik), null !== pd.Gk || pd.vk.length > 0) {
            const kd = null === pd.Gk ? {} : JSON.parse(pd.Gk);
            Object.assign(dd.settings, kd);
            for (const Jd of pd.vk) delete dd.settings[Jd], kd[Jd] = void 0;
            Jd.settingChanges.push({
              playerId: pd.Rk,
              settings: kd
            })
          }
        }
        for (const pd of dd.xk) {
          const dd = this.members.get(pd);
          var kd;
          if (dd) this.members.delete(pd), Jd.removed.push({
            playerId: pd,
            name: null !== (kd = dd.name) && void 0 !== kd ? kd : void 0
          })
        }
        return Jd
      }
      has(dd) {
        return this.members.has(dd)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(dd) {
        var Jd, kd;
        return null !== (Jd = null === (kd = this.members.get(dd)) || void 0 === kd ? void 0 : kd.name) && void 0 !== Jd ? Jd : void 0
      }
      getSettings(dd) {
        var Jd;
        return null === (Jd = this.members.get(dd)) || void 0 === Jd ? void 0 : Jd.settings
      }
      getSetting(dd, Jd) {
        var kd;
        return null === (kd = this.members.get(dd)) || void 0 === kd ? void 0 : kd.settings[Jd]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);