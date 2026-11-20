export const id = 237;
export const ids = [237];
export const modules = {
  40154: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      g: () => Xk
    });
    var Rk = Bk(1858);
    let tk = !1;

    function ak() {
      tk = !0
    }

    function Xk() {
      tk && (tk = !1, (0, Rk.b)())
    }
  },
  40109: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ek,
      i: () => Jk,
      j: () => Ak
    });
    var Rk = Bk(1861),
      tk = Bk(1241),
      ak = Bk(40015),
      Xk = Bk(40037),
      bk = Bk(40043),
      wk = Bk(40063);
    const dk = new tk.c;
    let sk = !1;

    function Vk(kk) {
      const Fk = (0, ak.g)();
      return null !== Fk && +kk === Fk.api.localId
    }

    function Jk() {
      sk || (sk = !0, (0, wk.k)(Xk.l, (kk => {
        var Fk, Bk;
        const Rk = (0, bk.f)(Xk.l, kk);
        if (!(0, bk.e)(Rk)) return;
        const tk = Rk;
        Vk(tk.bF) && Ak(tk.wF, {
          icon: tk.sF,
          level: tk.JF,
          displayName: null !== (Fk = tk.dF) && void 0 !== Fk ? Fk : null,
          durationMs: null !== (Bk = tk.VF) && void 0 !== Bk ? Bk : null
        })
      })), (0, wk.k)(Xk.T, (kk => {
        const Fk = (0, bk.f)(Xk.T, kk);
        if (!(0, bk.e)(Fk)) return;
        const Bk = Fk;
        Vk(Bk.bF) && Rk.d.remove(Bk.wF)
      })), (0, wk.d)((() => {
        Rk.d.clear()
      })))
    }

    function Ak(kk, Fk) {
      Rk.d.update(kk, Fk), dk.forEach((Fk => {
        Fk(kk)
      }))
    }
    const ek = {
      localEffectUpdated: {
        watch: kk => dk.add(kk)
      }
    }
  },
  40114: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk
    });
    var Rk = Bk(4531),
      tk = Bk(4524),
      ak = Bk(40051),
      Xk = Bk(40063);
    const bk = new Set(Rk.D),
      wk = Rk.D.map((kk => (new TextEncoder).encode(kk))),
      dk = new Map;

    function sk(kk, Fk) {
      var Bk;
      return null === (Bk = dk.get(kk)) || void 0 === Bk ? void 0 : Bk[Fk]
    }(0, Xk.k)(Rk.Tb.NewOtherEntitySettings, (kk => {
      kk.payloadKind === tk.Nb.Msgpack && wk.some((Fk => function(kk, Fk) {
        const Bk = Fk[0];
        for (let Rk = kk.indexOf(Bk); - 1 !== Rk && Rk + Fk.length <= kk.length; Rk = kk.indexOf(Bk, Rk + 1)) {
          let Bk = 1;
          for (; Bk < Fk.length && kk[Rk + Bk] === Fk[Bk];) Bk++;
          if (Bk === Fk.length) return !0
        }
        return !1
      }(kk.payload, Fk))) && function(kk) {
        if (null === kk || "object" !== typeof kk || null === kk.settings || "object" !== typeof kk.settings) return;
        const Fk = String(kk.eId),
          Bk = kk.settings;
        let Rk = dk.get(Fk);
        for (const tk in Bk) {
          if (!bk.has(tk)) continue;
          const kk = Bk[tk];
          null === kk || void 0 === kk ? Rk && delete Rk[tk] : (Rk ??= {}, Rk[tk] = kk)
        }
        Rk && dk.set(Fk, Rk)
      }((0, ak.e)(kk.payload))
    })), (0, Xk.d)((() => {
      dk.clear()
    }))
  },
  40107: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ak,
      g: () => dk,
      i: () => Vk
    });
    var Rk = Bk(38668),
      tk = Bk(1849),
      ak = Bk(1241),
      Xk = Bk(40037),
      bk = Bk(40043),
      wk = Bk(40063);
    const dk = new Rk.e;
    let sk = {};

    function Vk(kk) {
      return sk[kk]
    }
    const Jk = new ak.c;

    function Ak(kk) {
      return Jk.add(kk)
    }

    function ek(kk) {
      Jk.callEach(kk, "a roster listener")
    }(0, wk.k)(Xk.eb, (kk => {
      const Fk = (0, bk.f)(Xk.eb, kk);
      if (void 0 === Fk) return;
      const Bk = Fk.wR.some((kk => {
          let {
            dR: Fk,
            sR: Bk
          } = kk;
          return null !== Bk && dk.has(Fk) && dk.getName(Fk) !== Bk
        })),
        {
          added: Rk,
          removed: ak,
          settingChanges: wk
        } = dk.apply(Fk),
        sk = new Set;
      for (const tk of wk)
        for (const kk in tk.settings) sk.add(kk);
      const Vk = Bk || Rk.length > 0 || ak.length > 0;
      (Vk || sk.has("hideNameSeed")) && function() {
        const kk = new Map;
        for (const Fk of dk.ids()) {
          const Bk = dk.getName(Fk),
            Rk = dk.getSetting(Fk, "hideNameSeed");
          void 0 !== Bk && void 0 !== Rk && null !== Rk && kk.set(Bk, Rk)
        }
        tk.b.replaceAll(kk)
      }(), ek({
        kind: "roster",
        members: Vk,
        settings: sk
      })
    })), (0, wk.k)(Xk.P, (kk => {
      const Fk = (0, bk.f)(Xk.P, kk);
      if (void 0 !== Fk) {
        for (const {
            PB: kk,
            hB: Bk,
            qB: Rk
          }
          of Fk) sk[kk] = {
          ...sk[kk],
          [Bk]: Rk
        };
        ek({
          kind: "cosmetics",
          updates: Fk
        })
      }
    })), (0, wk.d)((() => {
      dk.clear(), sk = {}, tk.b.clear(), ek({
        kind: "reset"
      })
    })), (0, wk.g)((() => {
      dk.clear(), ek({
        kind: "reset"
      })
    }))
  },
  40137: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Hk,
      i: () => fk,
      j: () => Uk,
      l: () => ck
    });
    var Rk = Bk(1219),
      tk = Bk(594),
      ak = Bk(98),
      Xk = Bk(4531),
      bk = Bk(4e4),
      wk = Bk(40029),
      dk = Bk(40015),
      sk = Bk(40114),
      Vk = Bk(40107),
      Jk = Bk(40043),
      Ak = Bk(40063);

    function ek(kk) {
      let {
        deadEId: Fk,
        killerEId: Bk,
        killerLifeformType: Rk,
        withItem: tk,
        killstreak: ak
      } = kk;
      return {
        killer: ik({
          eId: Bk,
          lifeformType: Rk
        }),
        victim: ik({
          eId: Fk
        }),
        withItem: tk,
        killstreak: ak
      }
    }

    function yk(kk) {
      let {
        killer: Fk,
        victim: Bk,
        withItem: Rk
      } = kk;
      return {
        killer: ik(Fk),
        victim: ik(Bk),
        withItem: Rk,
        killstreak: 0
      }
    }

    function fk(kk) {
      Ek && Nk((() => "killed" === kk.kind ? ek(kk.body) : yk(kk.body)))
    }
    const mk = "#2727f1",
      Wk = "#912c2c";

    function vk(kk, Fk) {
      var Bk;
      return Vk.g.has(kk) ? null === (Bk = Vk.g.getSettings(kk)) || void 0 === Bk ? void 0 : Bk[Fk] : (0, sk.c)(kk, Fk)
    }

    function ik(kk) {
      var Fk, Bk, Xk, bk, sk;
      let {
        eId: Jk,
        name: Ak,
        colour: ek,
        lifeformType: yk
      } = kk;
      if (void 0 === Jk || null === Jk || "" === Jk) {
        const kk = Ak || null;
        return {
          id: null,
          shownName: kk,
          lifeformType: null === kk && null !== yk && void 0 !== yk ? yk : null,
          colour: ek || null,
          local: !1,
          realName: null
        }
      }
      const fk = String(Jk),
        ik = null === (Fk = (0, dk.g)()) || void 0 === Fk ? void 0 : Fk.api,
        Yk = void 0 !== ik && String(ik.localId) === fk,
        Lk = null !== (Bk = Vk.g.getName(fk)) && void 0 !== Bk ? Bk : null,
        Ok = null !== (Xk = vk(fk, "hideNameSeed")) && void 0 !== Xk ? Xk : null;
      let Ek = null === Lk ? null : (0, Rk.d)(Lk, !ak.featureFlags.canSeeRealPlayerNames, Ok) || null,
        Sk = null;
      if (null === Ek && void 0 !== ik) {
        const kk = ik.getEntityType(fk);
        "Player" !== kk && (Ek = (0, wk.e)(ik, +fk) || null), Sk = tk.i.includes(kk) ? kk : null
      }
      return {
        id: fk,
        shownName: Ek,
        lifeformType: null === Ek && null !== (bk = null !== (sk = Sk) && void 0 !== sk ? sk : yk) && void 0 !== bk ? bk : null,
        colour: ek || vk(fk, "killfeedColour") || (Yk ? mk : Wk),
        local: Yk,
        realName: Lk
      }
    }
    const Yk = 32;
    let Lk = [],
      Ok = null,
      Ek = !1,
      Sk = !1;

    function Nk(kk) {
      null === Ok ? (Lk.length === Yk && Lk.shift(), Lk.push(kk)) : Ok(kk())
    }

    function Hk() {
      Sk || (Sk = !0, (0, Ak.k)(Xk.Tb.PlayerKilled, (kk => {
        const Fk = (0, Jk.j)(kk);
        (0, Jk.e)(Fk) && Nk((() => ek(Fk)))
      })), (0, Ak.k)(Xk.Tb.CustomKillfeed, (kk => {
        const Fk = (0, Jk.j)(kk);
        (0, Jk.e)(Fk) && (0, Jk.e)(Fk.killer) && (0, Jk.e)(Fk.victim) && Nk((() => yk(Fk)))
      })), (0, Ak.d)((() => {
        Lk = []
      })))
    }
    const uk = Object.freeze([0, 0, 0]),
      Mk = [0, 0, 0],
      gk = [0, 0, 0],
      Uk = {
        kill: {
          watch(kk) {
            if (Ek = !0, 0 === Lk.length) return Ok = kk, () => {
              Ek = !1, Ok = null
            };
            const Fk = setTimeout((() => {
              const Fk = Lk;
              Lk = [], Ok = kk;
              for (const Rk of Fk) try {
                kk(Rk())
              } catch (Bk) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Bk)
              }
            }), 0);
            return () => {
              clearTimeout(Fk), Ek = !1, Ok = null
            }
          }
        }
      },
      ck = {
        localPos() {
          const kk = (0, dk.g)();
          if (null === kk) return uk;
          const Fk = kk.api.apiView;
          for (let Bk = 0; Bk < 3; Bk++) Mk[Bk] = bk.w.localPos(Fk, 0, Bk);
          return Mk
        },
        targetedBlockPos() {
          const kk = (0, dk.g)();
          if (null === kk || bk.w.targetBlockId(kk.api.apiView, 0) === bk._c) return null;
          for (let Fk = 0; Fk < 3; Fk++) gk[Fk] = bk.w.targetBlock(kk.api.apiView, 0, Fk);
          return gk
        }
      }
  },
  38668: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor() {
        this.members = new Map
      }
      apply(kk) {
        const Fk = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Rk of kk.wR) {
          let kk = this.members.get(Rk.dR);
          if (kk || (kk = {
              name: null,
              settings: {}
            }, this.members.set(Rk.dR, kk), Fk.added.push(Rk.dR)), null !== Rk.sR && (kk.name = Rk.sR), null !== Rk.VR || Rk.JR.length > 0) {
            const Bk = null === Rk.VR ? {} : JSON.parse(Rk.VR);
            Object.assign(kk.settings, Bk);
            for (const Fk of Rk.JR) delete kk.settings[Fk], Bk[Fk] = void 0;
            Fk.settingChanges.push({
              playerId: Rk.dR,
              settings: Bk
            })
          }
        }
        for (const Rk of kk.AR) {
          const kk = this.members.get(Rk);
          var Bk;
          if (kk) this.members.delete(Rk), Fk.removed.push({
            playerId: Rk,
            name: null !== (Bk = kk.name) && void 0 !== Bk ? Bk : void 0
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
        var Fk, Bk;
        return null !== (Fk = null === (Bk = this.members.get(kk)) || void 0 === Bk ? void 0 : Bk.name) && void 0 !== Fk ? Fk : void 0
      }
      getSettings(kk) {
        var Fk;
        return null === (Fk = this.members.get(kk)) || void 0 === Fk ? void 0 : Fk.settings
      }
      getSetting(kk, Fk) {
        var Bk;
        return null === (Bk = this.members.get(kk)) || void 0 === Bk ? void 0 : Bk.settings[Fk]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);