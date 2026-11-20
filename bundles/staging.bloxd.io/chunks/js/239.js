export const id = 239;
export const ids = [239];
export const modules = {
  40040: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      h: () => gv
    });
    var hv = Pv(1889);
    let Sv = !1;

    function ev() {
      Sv = !0
    }

    function gv() {
      Sv && (Sv = !1, (0, hv.e)())
    }
  },
  40038: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      c: () => ev,
      g: () => pv
    });
    var hv = Pv(39889),
      Sv = Pv(39898);

    function ev(vv) {
      if (vv.queries.drawCensus() < hv.zb.BYTES) return null;
      const zv = vv.memoryData(vv.scratch(), hv.zb.BYTES, 4, "the draw census");
      return null === zv ? null : {
        terrainOpaque: hv.zb.terrainOpaque(zv, 0),
        terrainTransparent: hv.zb.terrainTransparent(zv, 0),
        terrainPack: hv.zb.terrainPack(zv, 0),
        earthSky: hv.zb.earthSky(zv, 0),
        skyMeshes: hv.zb.skyMeshes(zv, 0),
        regular: hv.zb.regular(zv, 0),
        thin: hv.zb.thin(zv, 0),
        line: hv.zb.line(zv, 0),
        text: hv.zb.text(zv, 0),
        particles: hv.zb.particles(zv, 0),
        terrainParts: hv.zb.terrainParts(zv, 0),
        terrainCompiling: hv.zb.terrainCompiling(zv, 0)
      }
    }

    function gv(vv) {
      const {
        terrainOpaque: zv,
        terrainTransparent: Pv,
        earthSky: hv,
        skyMeshes: Sv,
        regular: ev,
        thin: gv,
        line: pv,
        text: dv,
        particles: Nv
      } = vv;
      return zv + Pv + hv + Sv + ev + gv + pv + dv + Nv
    }

    function pv() {
      const vv = (0, Sv.h)();
      return !0 === (null === vv || void 0 === vv ? void 0 : vv.isCoreRunning) ? function(vv) {
        const zv = ev(vv);
        if (null === zv) return [];
        const {
          terrainOpaque: Pv,
          terrainTransparent: hv,
          terrainPack: Sv,
          earthSky: pv,
          skyMeshes: dv,
          regular: Nv,
          thin: lv,
          line: Tv,
          text: Wv,
          particles: wv
        } = zv;
        return [{
          label: "Drawn",
          value: `${gv(zv)}`
        }, {
          label: "Terrain",
          value: `${Pv} opaque / ${hv} transparent (${Sv} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Nv} / ${lv}`
        }, {
          label: "Text / Lines",
          value: `${Wv} / ${Tv}`
        }, {
          label: "Sky / Particles",
          value: `${pv+dv} / ${wv}`
        }]
      }(vv.api) : []
    }
  },
  40007: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => av,
      h: () => Wv,
      i: () => wv
    });
    var hv = Pv(1897),
      Sv = Pv(1279),
      ev = Pv(39898),
      gv = Pv(39927),
      pv = Pv(39933),
      dv = Pv(39949);
    const Nv = new Sv.c;
    let lv = !1;

    function Tv(vv) {
      const zv = (0, ev.h)();
      return null !== zv && +vv === zv.api.localId
    }

    function Wv() {
      lv || (lv = !0, (0, dv.m)(gv.p, (vv => {
        var zv, Pv;
        const hv = (0, pv.f)(gv.p, vv);
        if (!(0, pv.d)(hv)) return;
        const Sv = hv;
        Tv(Sv.Cv) && wv(Sv.iv, {
          icon: Sv.Gv,
          level: Sv.jv,
          displayName: null !== (zv = Sv.cv) && void 0 !== zv ? zv : null,
          durationMs: null !== (Pv = Sv.mv) && void 0 !== Pv ? Pv : null
        })
      })), (0, dv.m)(gv._, (vv => {
        const zv = (0, pv.f)(gv._, vv);
        if (!(0, pv.d)(zv)) return;
        const Pv = zv;
        Tv(Pv.Cv) && hv.e.remove(Pv.iv)
      })), (0, dv.i)((() => {
        hv.e.clear()
      })))
    }

    function wv(vv, zv) {
      hv.e.update(vv, zv), Nv.forEach((zv => {
        zv(vv)
      }))
    }
    const av = {
      localEffectUpdated: {
        watch: vv => Nv.add(vv)
      }
    }
  },
  40015: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lv
    });
    var hv = Pv(4542),
      Sv = Pv(4535),
      ev = Pv(39940),
      gv = Pv(39949);
    const pv = new Set(hv.E),
      dv = hv.E.map((vv => (new TextEncoder).encode(vv))),
      Nv = new Map;

    function lv(vv, zv) {
      var Pv;
      return null === (Pv = Nv.get(vv)) || void 0 === Pv ? void 0 : Pv[zv]
    }(0, gv.m)(hv.Xb.NewOtherEntitySettings, (vv => {
      vv.payloadKind === Sv.pc.Msgpack && dv.some((zv => function(vv, zv) {
        const Pv = zv[0];
        for (let hv = vv.indexOf(Pv); - 1 !== hv && hv + zv.length <= vv.length; hv = vv.indexOf(Pv, hv + 1)) {
          let Pv = 1;
          for (; Pv < zv.length && vv[hv + Pv] === zv[Pv];) Pv++;
          if (Pv === zv.length) return !0
        }
        return !1
      }(vv.payload, zv))) && function(vv) {
        if (null === vv || "object" !== typeof vv || null === vv.settings || "object" !== typeof vv.settings) return;
        const zv = String(vv.eId),
          Pv = vv.settings;
        let hv = Nv.get(zv);
        for (const Sv in Pv) {
          if (!pv.has(Sv)) continue;
          const vv = Pv[Sv];
          null === vv || void 0 === vv ? hv && delete hv[Sv] : (hv ??= {}, hv[Sv] = vv)
        }
        hv && Nv.set(zv, hv)
      }((0, ev.d)(vv.payload))
    })), (0, gv.i)((() => {
      Nv.clear()
    }))
  },
  40002: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => wv,
      e: () => Nv,
      i: () => Tv
    });
    var hv = Pv(38531),
      Sv = Pv(1884),
      ev = Pv(1279),
      gv = Pv(39927),
      pv = Pv(39933),
      dv = Pv(39949);
    const Nv = new hv.c;
    let lv = {};

    function Tv(vv) {
      return lv[vv]
    }
    const Wv = new ev.c;

    function wv(vv) {
      return Wv.add(vv)
    }

    function av(vv) {
      Wv.callEach(vv, "a roster listener")
    }(0, dv.m)(gv.ib, (vv => {
      const zv = (0, pv.f)(gv.ib, vv);
      if (void 0 === zv) return;
      const Pv = zv.dz.some((vv => {
          let {
            Nz: zv,
            lz: Pv
          } = vv;
          return null !== Pv && Nv.has(zv) && Nv.getName(zv) !== Pv
        })),
        {
          added: hv,
          removed: ev,
          settingChanges: dv
        } = Nv.apply(zv),
        lv = new Set;
      for (const Sv of dv)
        for (const vv in Sv.settings) lv.add(vv);
      const Tv = Pv || hv.length > 0 || ev.length > 0;
      (Tv || lv.has("hideNameSeed")) && function() {
        const vv = new Map;
        for (const zv of Nv.ids()) {
          const Pv = Nv.getName(zv),
            hv = Nv.getSetting(zv, "hideNameSeed");
          void 0 !== Pv && void 0 !== hv && null !== hv && vv.set(Pv, hv)
        }
        Sv.b.replaceAll(vv)
      }(), av({
        kind: "roster",
        members: Tv,
        settings: lv
      })
    })), (0, dv.m)(gv.Y, (vv => {
      const zv = (0, pv.f)(gv.Y, vv);
      if (void 0 !== zv) {
        for (const {
            cP: vv,
            GP: Pv,
            mP: hv
          }
          of zv) lv[vv] = {
          ...lv[vv],
          [Pv]: hv
        };
        av({
          kind: "cosmetics",
          updates: zv
        })
      }
    })), (0, dv.i)((() => {
      Nv.clear(), lv = {}, Sv.b.clear(), av({
        kind: "reset"
      })
    })), (0, dv.l)((() => {
      Nv.clear(), av({
        kind: "reset"
      })
    }))
  },
  40025: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Dv,
      e: () => Cv,
      g: () => Rv,
      k: () => xv
    });
    var hv = Pv(1250),
      Sv = Pv(609),
      ev = Pv(73),
      gv = Pv(4542),
      pv = Pv(39889),
      dv = Pv(39918),
      Nv = Pv(39898),
      lv = Pv(40015),
      Tv = Pv(40002),
      Wv = Pv(39933),
      wv = Pv(39949);

    function av(vv) {
      let {
        deadEId: zv,
        killerEId: Pv,
        killerLifeformType: hv,
        withItem: Sv,
        killstreak: ev
      } = vv;
      return {
        killer: mv({
          eId: Pv,
          lifeformType: hv
        }),
        victim: mv({
          eId: zv
        }),
        withItem: Sv,
        killstreak: ev
      }
    }

    function sv(vv) {
      let {
        killer: zv,
        victim: Pv,
        withItem: hv
      } = vv;
      return {
        killer: mv(zv),
        victim: mv(Pv),
        withItem: hv,
        killstreak: 0
      }
    }

    function Cv(vv) {
      Yv && Ov((() => "killed" === vv.kind ? av(vv.body) : sv(vv.body)))
    }
    const iv = "#2727f1",
      cv = "#912c2c";

    function Gv(vv, zv) {
      var Pv;
      return Tv.e.has(vv) ? null === (Pv = Tv.e.getSettings(vv)) || void 0 === Pv ? void 0 : Pv[zv] : (0, lv.e)(vv, zv)
    }

    function mv(vv) {
      var zv, Pv, gv, pv, lv;
      let {
        eId: Wv,
        name: wv,
        colour: av,
        lifeformType: sv
      } = vv;
      if (void 0 === Wv || null === Wv || "" === Wv) {
        const vv = wv || null;
        return {
          id: null,
          shownName: vv,
          lifeformType: null === vv && null !== sv && void 0 !== sv ? sv : null,
          colour: av || null,
          local: !1,
          realName: null
        }
      }
      const Cv = String(Wv),
        mv = null === (zv = (0, Nv.h)()) || void 0 === zv ? void 0 : zv.api,
        jv = void 0 !== mv && String(mv.localId) === Cv,
        fv = null !== (Pv = Tv.e.getName(Cv)) && void 0 !== Pv ? Pv : null,
        Fv = null !== (gv = Gv(Cv, "hideNameSeed")) && void 0 !== gv ? gv : null;
      let Yv = null === fv ? null : (0, hv.c)(fv, !ev.featureFlags.canSeeRealPlayerNames, Fv) || null,
        nv = null;
      if (null === Yv && void 0 !== mv) {
        const vv = mv.getEntityType(Cv);
        "Player" !== vv && (Yv = (0, dv.h)(mv, +Cv) || null), nv = Sv.i.includes(vv) ? vv : null
      }
      return {
        id: Cv,
        shownName: Yv,
        lifeformType: null === Yv && null !== (pv = null !== (lv = nv) && void 0 !== lv ? lv : sv) && void 0 !== pv ? pv : null,
        colour: av || Gv(Cv, "killfeedColour") || (jv ? iv : cv),
        local: jv,
        realName: fv
      }
    }
    const jv = 32;
    let fv = [],
      Fv = null,
      Yv = !1,
      nv = !1;

    function Ov(vv) {
      null === Fv ? (fv.length === jv && fv.shift(), fv.push(vv)) : Fv(vv())
    }

    function Dv() {
      nv || (nv = !0, (0, wv.m)(gv.Xb.PlayerKilled, (vv => {
        const zv = (0, Wv.j)(vv);
        (0, Wv.d)(zv) && Ov((() => av(zv)))
      })), (0, wv.m)(gv.Xb.CustomKillfeed, (vv => {
        const zv = (0, Wv.j)(vv);
        (0, Wv.d)(zv) && (0, Wv.d)(zv.killer) && (0, Wv.d)(zv.victim) && Ov((() => sv(zv)))
      })), (0, wv.i)((() => {
        fv = []
      })))
    }
    const Kv = Object.freeze([0, 0, 0]),
      Vv = [0, 0, 0],
      Uv = [0, 0, 0],
      Rv = {
        kill: {
          watch(vv) {
            if (Yv = !0, 0 === fv.length) return Fv = vv, () => {
              Yv = !1, Fv = null
            };
            const zv = setTimeout((() => {
              const zv = fv;
              fv = [], Fv = vv;
              for (const hv of zv) try {
                vv(hv())
              } catch (Pv) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Pv)
              }
            }), 0);
            return () => {
              clearTimeout(zv), Yv = !1, Fv = null
            }
          }
        }
      },
      xv = {
        localPos() {
          const vv = (0, Nv.h)();
          if (null === vv) return Kv;
          const zv = vv.api.apiView;
          for (let Pv = 0; Pv < 3; Pv++) Vv[Pv] = pv.t.localPos(zv, 0, Pv);
          return Vv
        },
        targetedBlockPos() {
          const vv = (0, Nv.h)();
          if (null === vv || pv.t.targetBlockId(vv.api.apiView, 0) === pv.dd) return null;
          for (let zv = 0; zv < 3; zv++) Uv[zv] = pv.t.targetBlock(vv.api.apiView, 0, zv);
          return Uv
        }
      }
  },
  38531: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    class hv {
      constructor() {
        this.members = new Map
      }
      apply(vv) {
        const zv = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const hv of vv.dz) {
          let vv = this.members.get(hv.Nz);
          if (vv || (vv = {
              name: null,
              settings: {}
            }, this.members.set(hv.Nz, vv), zv.added.push(hv.Nz)), null !== hv.lz && (vv.name = hv.lz), null !== hv.Tz || hv.Wz.length > 0) {
            const Pv = null === hv.Tz ? {} : JSON.parse(hv.Tz);
            Object.assign(vv.settings, Pv);
            for (const zv of hv.Wz) delete vv.settings[zv], Pv[zv] = void 0;
            zv.settingChanges.push({
              playerId: hv.Nz,
              settings: Pv
            })
          }
        }
        for (const hv of vv.wz) {
          const vv = this.members.get(hv);
          var Pv;
          if (vv) this.members.delete(hv), zv.removed.push({
            playerId: hv,
            name: null !== (Pv = vv.name) && void 0 !== Pv ? Pv : void 0
          })
        }
        return zv
      }
      has(vv) {
        return this.members.has(vv)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(vv) {
        var zv, Pv;
        return null !== (zv = null === (Pv = this.members.get(vv)) || void 0 === Pv ? void 0 : Pv.name) && void 0 !== zv ? zv : void 0
      }
      getSettings(vv) {
        var zv;
        return null === (zv = this.members.get(vv)) || void 0 === zv ? void 0 : zv.settings
      }
      getSetting(vv, zv) {
        var Pv;
        return null === (Pv = this.members.get(vv)) || void 0 === Pv ? void 0 : Pv.settings[zv]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);