export const id = 243;
export const ids = [243];
export const modules = {
  40617: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk
    });
    var Dk = ik(1903);
    let fk = !1;

    function Sk() {
      fk = !0
    }

    function bk() {
      fk && (fk = !1, (0, Dk.c)())
    }
  },
  40608: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      f: () => Sk,
      i: () => rk
    });
    var Dk = ik(40157),
      fk = ik(40165);

    function Sk(kk) {
      if (kk.queries.drawCensus() < Dk.qb.BYTES) return null;
      const ek = kk.memoryData(kk.scratch(), Dk.qb.BYTES, 4, "the draw census");
      return null === ek ? null : {
        terrainOpaque: Dk.qb.terrainOpaque(ek, 0),
        terrainTransparent: Dk.qb.terrainTransparent(ek, 0),
        terrainPack: Dk.qb.terrainPack(ek, 0),
        earthSky: Dk.qb.earthSky(ek, 0),
        skyMeshes: Dk.qb.skyMeshes(ek, 0),
        regular: Dk.qb.regular(ek, 0),
        thin: Dk.qb.thin(ek, 0),
        line: Dk.qb.line(ek, 0),
        text: Dk.qb.text(ek, 0),
        particles: Dk.qb.particles(ek, 0),
        terrainParts: Dk.qb.terrainParts(ek, 0),
        terrainCompiling: Dk.qb.terrainCompiling(ek, 0),
        ringCopiesMax: Dk.qb.ringCopiesMax(ek, 0),
        ringBusyWrites: Dk.qb.ringBusyWrites(ek, 0)
      }
    }

    function bk(kk) {
      const {
        terrainOpaque: ek,
        terrainTransparent: ik,
        earthSky: Dk,
        skyMeshes: fk,
        regular: Sk,
        thin: bk,
        line: rk,
        text: Pk,
        particles: mk
      } = kk;
      return ek + ik + Dk + fk + Sk + bk + rk + Pk + mk
    }

    function rk() {
      const kk = (0, fk.g)();
      return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
        const ek = Sk(kk);
        if (null === ek) return [];
        const {
          terrainOpaque: ik,
          terrainTransparent: Dk,
          terrainPack: fk,
          earthSky: rk,
          skyMeshes: Pk,
          regular: mk,
          thin: Mk,
          line: Kk,
          text: xk,
          particles: nk
        } = ek;
        return [{
          label: "Drawn",
          value: `${bk(ek)}`
        }, {
          label: "Terrain",
          value: `${ik} opaque / ${Dk} transparent (${fk} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${mk} / ${Mk}`
        }, {
          label: "Text / Lines",
          value: `${xk} / ${Kk}`
        }, {
          label: "Sky / Particles",
          value: `${rk+Pk} / ${nk}`
        }]
      }(kk.api) : []
    }
  },
  40599: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Uk,
      f: () => xk,
      i: () => nk
    });
    var Dk = ik(1905),
      fk = ik(1276),
      Sk = ik(40165),
      bk = ik(40191),
      rk = ik(40196),
      Pk = ik(40218);
    const mk = new fk.d;
    let Mk = !1;

    function Kk(kk) {
      const ek = (0, Sk.g)();
      return null !== ek && +kk === ek.api.localId
    }

    function xk() {
      Mk || (Mk = !0, (0, Pk.m)(bk.o, (kk => {
        var ek, ik;
        const Dk = (0, rk.i)(bk.o, kk);
        if (!(0, rk.e)(Dk)) return;
        const fk = Dk;
        Kk(fk.ee) && nk(fk.ie, {
          icon: fk.fe,
          level: fk.Pe,
          displayName: null !== (ek = fk.De) && void 0 !== ek ? ek : null,
          durationMs: null !== (ik = fk.Se) && void 0 !== ik ? ik : null
        })
      })), (0, Pk.m)(bk.R, (kk => {
        const ek = (0, rk.i)(bk.R, kk);
        if (!(0, rk.e)(ek)) return;
        const ik = ek;
        Kk(ik.ee) && Dk.e.remove(ik.ie)
      })), (0, Pk.g)((() => {
        Dk.e.clear()
      })))
    }

    function nk(kk, ek) {
      Dk.e.update(kk, ek), mk.forEach((ek => {
        ek(kk)
      }))
    }
    const Uk = {
      localEffectUpdated: {
        watch: kk => mk.add(kk)
      }
    }
  },
  40601: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk
    });
    var Dk = ik(4741),
      fk = ik(4735),
      Sk = ik(40201),
      bk = ik(40218);
    const rk = new Set(Dk.P),
      Pk = Dk.P.map((kk => (new TextEncoder).encode(kk))),
      mk = new Map;

    function Mk(kk, ek) {
      var ik;
      return null === (ik = mk.get(kk)) || void 0 === ik ? void 0 : ik[ek]
    }(0, bk.m)(Dk.tc.NewOtherEntitySettings, (kk => {
      kk.payloadKind === fk.zc.Msgpack && Pk.some((ek => function(kk, ek) {
        const ik = ek[0];
        for (let Dk = kk.indexOf(ik); - 1 !== Dk && Dk + ek.length <= kk.length; Dk = kk.indexOf(ik, Dk + 1)) {
          let ik = 1;
          for (; ik < ek.length && kk[Dk + ik] === ek[ik];) ik++;
          if (ik === ek.length) return !0
        }
        return !1
      }(kk.payload, ek))) && function(kk) {
        if (null === kk || "object" !== typeof kk || null === kk.settings || "object" !== typeof kk.settings) return;
        const ek = String(kk.eId),
          ik = kk.settings;
        let Dk = mk.get(ek);
        for (const fk in ik) {
          if (!rk.has(fk)) continue;
          const kk = ik[fk];
          null === kk || void 0 === kk ? Dk && delete Dk[fk] : (Dk ??= {}, Dk[fk] = kk)
        }
        Dk && mk.set(ek, Dk)
      }((0, Sk.b)(kk.payload))
    })), (0, bk.g)((() => {
      mk.clear()
    }))
  },
  40594: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => nk,
      h: () => mk,
      j: () => Kk
    });
    var Dk = ik(38583),
      fk = ik(1895),
      Sk = ik(1276),
      bk = ik(40191),
      rk = ik(40196),
      Pk = ik(40218);
    const mk = new Dk.d;
    let Mk = {};

    function Kk(kk) {
      return Mk[kk]
    }
    const xk = new Sk.d;

    function nk(kk) {
      return xk.add(kk)
    }

    function Uk(kk) {
      xk.callEach(kk, "a roster listener")
    }(0, Pk.m)(bk.$, (kk => {
      const ek = (0, rk.i)(bk.$, kk);
      if (void 0 === ek) return;
      const ik = ek.ri.some((kk => {
          let {
            Pi: ek,
            mi: ik
          } = kk;
          return null !== ik && mk.has(ek) && mk.getName(ek) !== ik
        })),
        {
          added: Dk,
          removed: Sk,
          settingChanges: Pk
        } = mk.apply(ek),
        Mk = new Set;
      for (const fk of Pk)
        for (const kk in fk.settings) Mk.add(kk);
      const Kk = ik || Dk.length > 0 || Sk.length > 0;
      (Kk || Mk.has("hideNameSeed")) && function() {
        const kk = new Map;
        for (const ek of mk.ids()) {
          const ik = mk.getName(ek),
            Dk = mk.getSetting(ek, "hideNameSeed");
          void 0 !== ik && void 0 !== Dk && null !== Dk && kk.set(ik, Dk)
        }
        fk.c.replaceAll(kk)
      }(), Uk({
        kind: "roster",
        members: Kk,
        settings: Mk
      })
    })), (0, Pk.m)(bk.Q, (kk => {
      const ek = (0, rk.i)(bk.Q, kk);
      if (void 0 !== ek) {
        for (const {
            yD: kk,
            YD: ik,
            LD: Dk
          }
          of ek) Mk[kk] = {
          ...Mk[kk],
          [ik]: Dk
        };
        Uk({
          kind: "cosmetics",
          updates: ek
        })
      }
    })), (0, Pk.g)((() => {
      mk.clear(), Mk = {}, fk.c.clear(), Uk({
        kind: "reset"
      })
    })), (0, Pk.k)((() => {
      mk.clear(), Uk({
        kind: "reset"
      })
    }))
  },
  40606: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Vk,
      f: () => wk,
      j: () => Ik,
      l: () => zk
    });
    var Dk = ik(1248),
      fk = ik(585),
      Sk = ik(99),
      bk = ik(4741),
      rk = ik(40157),
      Pk = ik(40186),
      mk = ik(40165),
      Mk = ik(40601),
      Kk = ik(40594),
      xk = ik(40196),
      nk = ik(40218);

    function Uk(kk) {
      let {
        deadEId: ek,
        killerEId: ik,
        killerLifeformType: Dk,
        withItem: fk,
        killstreak: Sk
      } = kk;
      return {
        killer: Yk({
          eId: ik,
          lifeformType: Dk
        }),
        victim: Yk({
          eId: ek
        }),
        withItem: fk,
        killstreak: Sk
      }
    }

    function Hk(kk) {
      let {
        killer: ek,
        victim: ik,
        withItem: Dk
      } = kk;
      return {
        killer: Yk(ek),
        victim: Yk(ik),
        withItem: Dk,
        killstreak: 0
      }
    }

    function wk(kk) {
      jk && dk((() => "killed" === kk.kind ? Uk(kk.body) : Hk(kk.body)))
    }
    const lk = "#2727f1",
      pk = "#912c2c";

    function yk(kk, ek) {
      var ik;
      return Kk.h.has(kk) ? null === (ik = Kk.h.getSettings(kk)) || void 0 === ik ? void 0 : ik[ek] : (0, Mk.b)(kk, ek)
    }

    function Yk(kk) {
      var ek, ik, bk, rk, Mk;
      let {
        eId: xk,
        name: nk,
        colour: Uk,
        lifeformType: Hk
      } = kk;
      if (void 0 === xk || null === xk || "" === xk) {
        const kk = nk || null;
        return {
          id: null,
          shownName: kk,
          lifeformType: null === kk && null !== Hk && void 0 !== Hk ? Hk : null,
          colour: Uk || null,
          local: !1,
          realName: null
        }
      }
      const wk = String(xk),
        Yk = null === (ek = (0, mk.g)()) || void 0 === ek ? void 0 : ek.api,
        Lk = void 0 !== Yk && String(Yk.localId) === wk,
        Ck = null !== (ik = Kk.h.getName(wk)) && void 0 !== ik ? ik : null,
        Ak = null !== (bk = yk(wk, "hideNameSeed")) && void 0 !== bk ? bk : null;
      let jk = null === Ck ? null : (0, Dk.d)(Ck, !Sk.featureFlags.canSeeRealPlayerNames, Ak) || null,
        sk = null;
      if (null === jk && void 0 !== Yk) {
        const kk = Yk.getEntityType(wk);
        "Player" !== kk && (jk = (0, Pk.e)(Yk, +wk) || null), sk = fk.n.includes(kk) ? kk : null
      }
      return {
        id: wk,
        shownName: jk,
        lifeformType: null === jk && null !== (rk = null !== (Mk = sk) && void 0 !== Mk ? Mk : Hk) && void 0 !== rk ? rk : null,
        colour: Uk || yk(wk, "killfeedColour") || (Lk ? lk : pk),
        local: Lk,
        realName: Ck
      }
    }
    const Lk = 32;
    let Ck = [],
      Ak = null,
      jk = !1,
      sk = !1;

    function dk(kk) {
      null === Ak ? (Ck.length === Lk && Ck.shift(), Ck.push(kk)) : Ak(kk())
    }

    function Vk() {
      sk || (sk = !0, (0, nk.m)(bk.tc.PlayerKilled, (kk => {
        const ek = (0, xk.k)(kk);
        (0, xk.e)(ek) && dk((() => Uk(ek)))
      })), (0, nk.m)(bk.tc.CustomKillfeed, (kk => {
        const ek = (0, xk.k)(kk);
        (0, xk.e)(ek) && (0, xk.e)(ek.killer) && (0, xk.e)(ek.victim) && dk((() => Hk(ek)))
      })), (0, nk.g)((() => {
        Ck = []
      })))
    }
    const Fk = Object.freeze([0, 0, 0]),
      uk = [0, 0, 0],
      qk = [0, 0, 0],
      Ik = {
        kill: {
          watch(kk) {
            if (jk = !0, 0 === Ck.length) return Ak = kk, () => {
              jk = !1, Ak = null
            };
            const ek = setTimeout((() => {
              const ek = Ck;
              Ck = [], Ak = kk;
              for (const Dk of ek) try {
                kk(Dk())
              } catch (ik) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", ik)
              }
            }), 0);
            return () => {
              clearTimeout(ek), jk = !1, Ak = null
            }
          }
        }
      },
      zk = {
        localPos() {
          const kk = (0, mk.g)();
          if (null === kk) return Fk;
          const ek = kk.api.apiView;
          for (let ik = 0; ik < 3; ik++) uk[ik] = rk.t.localPos(ek, 0, ik);
          return uk
        },
        targetedBlockPos() {
          const kk = (0, mk.g)();
          if (null === kk || rk.t.targetBlockId(kk.api.apiView, 0) === rk.Vc) return null;
          for (let ek = 0; ek < 3; ek++) qk[ek] = rk.t.targetBlock(kk.api.apiView, 0, ek);
          return qk
        }
      }
  },
  38583: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor() {
        this.members = new Map
      }
      apply(kk) {
        const ek = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Dk of kk.ri) {
          let kk = this.members.get(Dk.Pi);
          if (kk || (kk = {
              name: null,
              settings: {}
            }, this.members.set(Dk.Pi, kk), ek.added.push(Dk.Pi)), null !== Dk.mi && (kk.name = Dk.mi), null !== Dk.Mi || Dk.Ki.length > 0) {
            const ik = null === Dk.Mi ? {} : JSON.parse(Dk.Mi);
            Object.assign(kk.settings, ik);
            for (const ek of Dk.Ki) delete kk.settings[ek], ik[ek] = void 0;
            ek.settingChanges.push({
              playerId: Dk.Pi,
              settings: ik
            })
          }
        }
        for (const Dk of kk.xi) {
          const kk = this.members.get(Dk);
          var ik;
          if (kk) this.members.delete(Dk), ek.removed.push({
            playerId: Dk,
            name: null !== (ik = kk.name) && void 0 !== ik ? ik : void 0
          })
        }
        return ek
      }
      has(kk) {
        return this.members.has(kk)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(kk) {
        var ek, ik;
        return null !== (ek = null === (ik = this.members.get(kk)) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : void 0
      }
      getSettings(kk) {
        var ek;
        return null === (ek = this.members.get(kk)) || void 0 === ek ? void 0 : ek.settings
      }
      getSetting(kk, ek) {
        var ik;
        return null === (ik = this.members.get(kk)) || void 0 === ik ? void 0 : ik.settings[ek]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);