export const id = 247;
export const ids = [247];
export const modules = {
  41050: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      g: () => yk
    });
    var Xk = Ik(1886);
    let Tk = !1;

    function ik() {
      Tk = !0
    }

    function yk() {
      Tk && (Tk = !1, (0, Xk.c)())
    }
  },
  41047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      g: () => ik,
      j: () => lk
    });
    var Xk = Ik(40583),
      Tk = Ik(40596);

    function ik(kk) {
      if (kk.queries.drawCensus() < Xk.xb.BYTES) return null;
      const Fk = kk.memoryData(kk.scratch(), Xk.xb.BYTES, 4, "the draw census");
      return null === Fk ? null : {
        terrainOpaque: Xk.xb.terrainOpaque(Fk, 0),
        terrainTransparent: Xk.xb.terrainTransparent(Fk, 0),
        terrainPack: Xk.xb.terrainPack(Fk, 0),
        earthSky: Xk.xb.earthSky(Fk, 0),
        skyMeshes: Xk.xb.skyMeshes(Fk, 0),
        regular: Xk.xb.regular(Fk, 0),
        thin: Xk.xb.thin(Fk, 0),
        line: Xk.xb.line(Fk, 0),
        text: Xk.xb.text(Fk, 0),
        particles: Xk.xb.particles(Fk, 0),
        terrainParts: Xk.xb.terrainParts(Fk, 0),
        terrainCompiling: Xk.xb.terrainCompiling(Fk, 0),
        ringCopiesMax: Xk.xb.ringCopiesMax(Fk, 0),
        ringBusyWrites: Xk.xb.ringBusyWrites(Fk, 0)
      }
    }

    function yk(kk) {
      const {
        terrainOpaque: Fk,
        terrainTransparent: Ik,
        earthSky: Xk,
        skyMeshes: Tk,
        regular: ik,
        thin: yk,
        line: lk,
        text: ak,
        particles: qk
      } = kk;
      return Fk + Ik + Xk + Tk + ik + yk + lk + ak + qk
    }

    function lk() {
      const kk = (0, Tk.k)();
      return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
        const Fk = ik(kk);
        if (null === Fk) return [];
        const {
          terrainOpaque: Ik,
          terrainTransparent: Xk,
          terrainPack: Tk,
          earthSky: lk,
          skyMeshes: ak,
          regular: qk,
          thin: Lk,
          line: tk,
          text: Zk,
          particles: jk
        } = Fk;
        return [{
          label: "Drawn",
          value: `${yk(Fk)}`
        }, {
          label: "Terrain",
          value: `${Ik} opaque / ${Xk} transparent (${Tk} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${qk} / ${Lk}`
        }, {
          label: "Text / Lines",
          value: `${Zk} / ${tk}`
        }, {
          label: "Sky / Particles",
          value: `${lk+ak} / ${jk}`
        }]
      }(kk.api) : []
    }
  },
  41029: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ek,
      i: () => Zk,
      m: () => jk
    });
    var Xk = Ik(1891),
      Tk = Ik(1272),
      ik = Ik(40596),
      yk = Ik(40609),
      lk = Ik(40614),
      ak = Ik(40636);
    const qk = new Tk.d;
    let Lk = !1;

    function tk(kk) {
      const Fk = (0, ik.k)();
      return null !== Fk && +kk === Fk.api.localId
    }

    function Zk() {
      Lk || (Lk = !0, (0, ak.l)(yk.m, (kk => {
        var Fk, Ik;
        const Xk = (0, lk.e)(yk.m, kk);
        if (!(0, lk.c)(Xk)) return;
        const Tk = Xk;
        tk(Tk.wX) && jk(Tk.HX, {
          icon: Tk.sT,
          level: Tk.zT,
          displayName: null !== (Fk = Tk.JX) && void 0 !== Fk ? Fk : null,
          durationMs: null !== (Ik = Tk.VT) && void 0 !== Ik ? Ik : null
        })
      })), (0, ak.l)(yk.J, (kk => {
        const Fk = (0, lk.e)(yk.J, kk);
        if (!(0, lk.c)(Fk)) return;
        const Ik = Fk;
        tk(Ik.wX) && Xk.e.remove(Ik.HX)
      })), (0, ak.f)((() => {
        Xk.e.clear()
      })))
    }

    function jk(kk, Fk) {
      Xk.e.update(kk, Fk), qk.forEach((Fk => {
        Fk(kk)
      }))
    }
    const ek = {
      localEffectUpdated: {
        watch: kk => qk.add(kk)
      }
    }
  },
  41037: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk
    });
    var Xk = Ik(4799),
      Tk = Ik(4797),
      ik = Ik(40623),
      yk = Ik(40636);
    const lk = new Set(Xk.M),
      ak = Xk.M.map((kk => (new TextEncoder).encode(kk))),
      qk = new Map;

    function Lk(kk, Fk) {
      var Ik;
      return null === (Ik = qk.get(kk)) || void 0 === Ik ? void 0 : Ik[Fk]
    }(0, yk.l)(Xk.sc.NewOtherEntitySettings, (kk => {
      kk.payloadKind === Tk.fc.Msgpack && ak.some((Fk => function(kk, Fk) {
        const Ik = Fk[0];
        for (let Xk = kk.indexOf(Ik); - 1 !== Xk && Xk + Fk.length <= kk.length; Xk = kk.indexOf(Ik, Xk + 1)) {
          let Ik = 1;
          for (; Ik < Fk.length && kk[Xk + Ik] === Fk[Ik];) Ik++;
          if (Ik === Fk.length) return !0
        }
        return !1
      }(kk.payload, Fk))) && function(kk) {
        if (null === kk || "object" !== typeof kk || null === kk.settings || "object" !== typeof kk.settings) return;
        const Fk = String(kk.eId),
          Ik = kk.settings;
        let Xk = qk.get(Fk);
        for (const Tk in Ik) {
          if (!lk.has(Tk)) continue;
          const kk = Ik[Tk];
          null === kk || void 0 === kk ? Xk && delete Xk[Tk] : (Xk ??= {}, Xk[Tk] = kk)
        }
        Xk && qk.set(Fk, Xk)
      }((0, ik.b)(kk.payload))
    })), (0, yk.f)((() => {
      qk.clear()
    }))
  },
  41020: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => jk,
      f: () => qk,
      g: () => tk
    });
    var Xk = Ik(38986),
      Tk = Ik(1881),
      ik = Ik(1272),
      yk = Ik(40609),
      lk = Ik(40614),
      ak = Ik(40636);
    const qk = new Xk.d;
    let Lk = {};

    function tk(kk) {
      return Lk[kk]
    }
    const Zk = new ik.d;

    function jk(kk) {
      return Zk.add(kk)
    }

    function ek(kk) {
      Zk.callEach(kk, "a roster listener")
    }(0, ak.l)(yk.T, (kk => {
      const Fk = (0, lk.e)(yk.T, kk);
      if (void 0 === Fk) return;
      const Ik = Fk.DI.some((kk => {
          let {
            MI: Fk,
            kX: Ik
          } = kk;
          return null !== Ik && qk.has(Fk) && qk.getName(Fk) !== Ik
        })),
        {
          added: Xk,
          removed: ik,
          settingChanges: ak
        } = qk.apply(Fk),
        Lk = new Set;
      for (const Tk of ak)
        for (const kk in Tk.settings) Lk.add(kk);
      const tk = Ik || Xk.length > 0 || ik.length > 0;
      (tk || Lk.has("hideNameSeed")) && function() {
        const kk = new Map;
        for (const Fk of qk.ids()) {
          const Ik = qk.getName(Fk),
            Xk = qk.getSetting(Fk, "hideNameSeed");
          void 0 !== Ik && void 0 !== Xk && null !== Xk && kk.set(Ik, Xk)
        }
        Tk.d.replaceAll(kk)
      }(), ek({
        kind: "roster",
        members: tk,
        settings: Lk
      })
    })), (0, ak.l)(yk.I, (kk => {
      const Fk = (0, lk.e)(yk.I, kk);
      if (void 0 !== Fk) {
        for (const {
            sX: kk,
            VX: Ik,
            zX: Xk
          }
          of Fk) Lk[kk] = {
          ...Lk[kk],
          [Ik]: Xk
        };
        ek({
          kind: "cosmetics",
          updates: Fk
        })
      }
    })), (0, ak.f)((() => {
      qk.clear(), Lk = {}, Tk.d.clear(), ek({
        kind: "reset"
      })
    })), (0, ak.j)((() => {
      qk.clear(), ek({
        kind: "reset"
      })
    }))
  },
  41045: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Ek,
      i: () => Hk,
      l: () => pk,
      m: () => uk
    });
    var Xk = Ik(1253),
      Tk = Ik(614),
      ik = Ik(95),
      yk = Ik(4799),
      lk = Ik(40583),
      ak = Ik(40604),
      qk = Ik(40596),
      Lk = Ik(41037),
      tk = Ik(41020),
      Zk = Ik(40614),
      jk = Ik(40636);

    function ek(kk) {
      let {
        deadEId: Fk,
        killerEId: Ik,
        killerLifeformType: Xk,
        withItem: Tk,
        killstreak: ik
      } = kk;
      return {
        killer: Kk({
          eId: Ik,
          lifeformType: Xk
        }),
        victim: Kk({
          eId: Fk
        }),
        withItem: Tk,
        killstreak: ik
      }
    }

    function wk(kk) {
      let {
        killer: Fk,
        victim: Ik,
        withItem: Xk
      } = kk;
      return {
        killer: Kk(Fk),
        victim: Kk(Ik),
        withItem: Xk,
        killstreak: 0
      }
    }

    function Hk(kk) {
      zk && vk((() => "killed" === kk.kind ? ek(kk.body) : wk(kk.body)))
    }
    const Jk = "#2727f1",
      xk = "#912c2c";

    function Pk(kk, Fk) {
      var Ik;
      return tk.f.has(kk) ? null === (Ik = tk.f.getSettings(kk)) || void 0 === Ik ? void 0 : Ik[Fk] : (0, Lk.c)(kk, Fk)
    }

    function Kk(kk) {
      var Fk, Ik, yk, lk, Lk;
      let {
        eId: Zk,
        name: jk,
        colour: ek,
        lifeformType: wk
      } = kk;
      if (void 0 === Zk || null === Zk || "" === Zk) {
        const kk = jk || null;
        return {
          id: null,
          shownName: kk,
          lifeformType: null === kk && null !== wk && void 0 !== wk ? wk : null,
          colour: ek || null,
          local: !1,
          realName: null
        }
      }
      const Hk = String(Zk),
        Kk = null === (Fk = (0, qk.k)()) || void 0 === Fk ? void 0 : Fk.api,
        Qk = void 0 !== Kk && String(Kk.localId) === Hk,
        sk = null !== (Ik = tk.f.getName(Hk)) && void 0 !== Ik ? Ik : null,
        Vk = null !== (yk = Pk(Hk, "hideNameSeed")) && void 0 !== yk ? yk : null;
      let zk = null === sk ? null : (0, Xk.e)(sk, !ik.featureFlags.canSeeRealPlayerNames, Vk) || null,
        Sk = null;
      if (null === zk && void 0 !== Kk) {
        const kk = Kk.getEntityType(Hk);
        "Player" !== kk && (zk = (0, ak.l)(Kk, +Hk) || null), Sk = Tk.m.includes(kk) ? kk : null
      }
      return {
        id: Hk,
        shownName: zk,
        lifeformType: null === zk && null !== (lk = null !== (Lk = Sk) && void 0 !== Lk ? Lk : wk) && void 0 !== lk ? lk : null,
        colour: ek || Pk(Hk, "killfeedColour") || (Qk ? Jk : xk),
        local: Qk,
        realName: sk
      }
    }
    const Qk = 32;
    let sk = [],
      Vk = null,
      zk = !1,
      Sk = !1;

    function vk(kk) {
      null === Vk ? (sk.length === Qk && sk.shift(), sk.push(kk)) : Vk(kk())
    }

    function Ek() {
      Sk || (Sk = !0, (0, jk.l)(yk.sc.PlayerKilled, (kk => {
        const Fk = (0, Zk.g)(kk);
        (0, Zk.c)(Fk) && vk((() => ek(Fk)))
      })), (0, jk.l)(yk.sc.CustomKillfeed, (kk => {
        const Fk = (0, Zk.g)(kk);
        (0, Zk.c)(Fk) && (0, Zk.c)(Fk.killer) && (0, Zk.c)(Fk.victim) && vk((() => wk(Fk)))
      })), (0, jk.f)((() => {
        sk = []
      })))
    }
    const Ok = Object.freeze([0, 0, 0]),
      nk = [0, 0, 0],
      Gk = [0, 0, 0],
      pk = {
        kill: {
          watch(kk) {
            if (zk = !0, 0 === sk.length) return Vk = kk, () => {
              zk = !1, Vk = null
            };
            const Fk = setTimeout((() => {
              const Fk = sk;
              sk = [], Vk = kk;
              for (const Xk of Fk) try {
                kk(Xk())
              } catch (Ik) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Ik)
              }
            }), 0);
            return () => {
              clearTimeout(Fk), zk = !1, Vk = null
            }
          }
        }
      },
      uk = {
        localPos() {
          const kk = (0, qk.k)();
          if (null === kk) return Ok;
          const Fk = kk.api.apiView;
          for (let Ik = 0; Ik < 3; Ik++) nk[Ik] = lk.y.localPos(Fk, 0, Ik);
          return nk
        },
        targetedBlockPos() {
          const kk = (0, qk.k)();
          if (null === kk || lk.y.targetBlockId(kk.api.apiView, 0) === lk._c) return null;
          for (let Fk = 0; Fk < 3; Fk++) Gk[Fk] = lk.y.targetBlock(kk.api.apiView, 0, Fk);
          return Gk
        }
      }
  },
  38986: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      constructor() {
        this.members = new Map
      }
      apply(kk) {
        const Fk = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Xk of kk.DI) {
          let kk = this.members.get(Xk.MI);
          if (kk || (kk = {
              name: null,
              settings: {}
            }, this.members.set(Xk.MI, kk), Fk.added.push(Xk.MI)), null !== Xk.kX && (kk.name = Xk.kX), null !== Xk.FX || Xk.IX.length > 0) {
            const Ik = null === Xk.FX ? {} : JSON.parse(Xk.FX);
            Object.assign(kk.settings, Ik);
            for (const Fk of Xk.IX) delete kk.settings[Fk], Ik[Fk] = void 0;
            Fk.settingChanges.push({
              playerId: Xk.MI,
              settings: Ik
            })
          }
        }
        for (const Xk of kk.XX) {
          const kk = this.members.get(Xk);
          var Ik;
          if (kk) this.members.delete(Xk), Fk.removed.push({
            playerId: Xk,
            name: null !== (Ik = kk.name) && void 0 !== Ik ? Ik : void 0
          })
        }
        return Fk
      }
      has(kk) {
        return this.members.has(kk)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(kk) {
        var Fk, Ik;
        return null !== (Fk = null === (Ik = this.members.get(kk)) || void 0 === Ik ? void 0 : Ik.name) && void 0 !== Fk ? Fk : void 0
      }
      getSettings(kk) {
        var Fk;
        return null === (Fk = this.members.get(kk)) || void 0 === Fk ? void 0 : Fk.settings
      }
      getSetting(kk, Fk) {
        var Ik;
        return null === (Ik = this.members.get(kk)) || void 0 === Ik ? void 0 : Ik.settings[Fk]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);