export const id = 237;
export const ids = [237];
export const modules = {
  39859: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Eb
    });
    var Ab = Ub(1838);
    let Mb = !1;

    function Tb() {
      Mb = !0
    }

    function Eb() {
      Mb && (Mb = !1, (0, Ab.c)())
    }
  },
  39822: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => jb,
      f: () => Pb,
      j: () => Xb
    });
    var Ab = Ub(1840),
      Mb = Ub(1225),
      Tb = Ub(39714),
      Eb = Ub(39740),
      Yb = Ub(39742),
      Bb = Ub(39762);
    const eb = new Mb.d;
    let vb = !1;

    function Lb(bb) {
      const ab = (0, Tb.i)();
      return null !== ab && +bb === ab.api.localId
    }

    function Pb() {
      vb || (vb = !0, (0, Bb.k)(Eb.j, (bb => {
        var ab, Ub;
        const Ab = (0, Yb.f)(Eb.j, bb);
        if (!(0, Yb.e)(Ab)) return;
        const Mb = Ab;
        Lb(Mb.Pa) && Xb(Mb.Xa, {
          icon: Mb.Ra,
          level: Mb.ya,
          displayName: null !== (ab = Mb.ja) && void 0 !== ab ? ab : null,
          durationMs: null !== (Ub = Mb.ka) && void 0 !== Ub ? Ub : null
        })
      })), (0, Bb.k)(Eb.M, (bb => {
        const ab = (0, Yb.f)(Eb.M, bb);
        if (!(0, Yb.e)(ab)) return;
        const Ub = ab;
        Lb(Ub.Pa) && Ab.c.remove(Ub.Xa)
      })), (0, Bb.d)((() => {
        Ab.c.clear()
      })))
    }

    function Xb(bb, ab) {
      Ab.c.update(bb, ab), eb.forEach((ab => {
        ab(bb)
      }))
    }
    const jb = {
      localEffectUpdated: {
        watch: bb => eb.add(bb)
      }
    }
  },
  39825: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb
    });
    var Ab = Ub(4485),
      Mb = Ub(4479),
      Tb = Ub(39751),
      Eb = Ub(39762);
    const Yb = new Set(Ab.L),
      Bb = Ab.L.map((bb => (new TextEncoder).encode(bb))),
      eb = new Map;

    function vb(bb, ab) {
      var Ub;
      return null === (Ub = eb.get(bb)) || void 0 === Ub ? void 0 : Ub[ab]
    }(0, Eb.k)(Ab.Tb.NewOtherEntitySettings, (bb => {
      bb.payloadKind === Mb._b.Msgpack && Bb.some((ab => function(bb, ab) {
        const Ub = ab[0];
        for (let Ab = bb.indexOf(Ub); - 1 !== Ab && Ab + ab.length <= bb.length; Ab = bb.indexOf(Ub, Ab + 1)) {
          let Ub = 1;
          for (; Ub < ab.length && bb[Ab + Ub] === ab[Ub];) Ub++;
          if (Ub === ab.length) return !0
        }
        return !1
      }(bb.payload, ab))) && function(bb) {
        if (null === bb || "object" !== typeof bb || null === bb.settings || "object" !== typeof bb.settings) return;
        const ab = String(bb.eId),
          Ub = bb.settings;
        let Ab = eb.get(ab);
        for (const Mb in Ub) {
          if (!Yb.has(Mb)) continue;
          const bb = Ub[Mb];
          null === bb || void 0 === bb ? Ab && delete Ab[Mb] : (Ab ??= {}, Ab[Mb] = bb)
        }
        Ab && eb.set(ab, Ab)
      }((0, Tb.c)(bb.payload))
    })), (0, Eb.d)((() => {
      eb.clear()
    }))
  },
  39815: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Xb,
      e: () => eb,
      i: () => Lb
    });
    var Ab = Ub(38312),
      Mb = Ub(1829),
      Tb = Ub(1225),
      Eb = Ub(39740),
      Yb = Ub(39742),
      Bb = Ub(39762);
    const eb = new Ab.e;
    let vb = {};

    function Lb(bb) {
      return vb[bb]
    }
    const Pb = new Tb.d;

    function Xb(bb) {
      return Pb.add(bb)
    }

    function jb(bb) {
      Pb.callEach(bb, "a roster listener")
    }(0, Bb.k)(Eb.V, (bb => {
      const ab = (0, Yb.f)(Eb.V, bb);
      if (void 0 === ab) return;
      const Ub = ab.PA.some((bb => {
          let {
            XA: ab,
            jA: Ub
          } = bb;
          return null !== Ub && eb.has(ab) && eb.getName(ab) !== Ub
        })),
        {
          added: Ab,
          removed: Tb,
          settingChanges: Bb
        } = eb.apply(ab),
        vb = new Set;
      for (const Mb of Bb)
        for (const bb in Mb.settings) vb.add(bb);
      const Lb = Ub || Ab.length > 0 || Tb.length > 0;
      (Lb || vb.has("hideNameSeed")) && function() {
        const bb = new Map;
        for (const ab of eb.ids()) {
          const Ub = eb.getName(ab),
            Ab = eb.getSetting(ab, "hideNameSeed");
          void 0 !== Ub && void 0 !== Ab && null !== Ab && bb.set(Ub, Ab)
        }
        Mb.c.replaceAll(bb)
      }(), jb({
        kind: "roster",
        members: Lb,
        settings: vb
      })
    })), (0, Bb.k)(Eb.L, (bb => {
      const ab = (0, Yb.f)(Eb.L, bb);
      if (void 0 !== ab) {
        for (const {
            gU: bb,
            CU: Ub,
            VU: Ab
          }
          of ab) vb[bb] = {
          ...vb[bb],
          [Ub]: Ab
        };
        jb({
          kind: "cosmetics",
          updates: ab
        })
      }
    })), (0, Bb.d)((() => {
      eb.clear(), vb = {}, Mb.c.clear(), jb({
        kind: "reset"
      })
    })), (0, Bb.g)((() => {
      eb.clear(), jb({
        kind: "reset"
      })
    }))
  },
  39841: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Wb,
      g: () => kb,
      j: () => Fb,
      m: () => hb
    });
    var Ab = Ub(1208),
      Mb = Ub(580),
      Tb = Ub(101),
      Eb = Ub(4485),
      Yb = Ub(39701),
      Bb = Ub(39731),
      eb = Ub(39714),
      vb = Ub(39825),
      Lb = Ub(39815),
      Pb = Ub(39742),
      Xb = Ub(39762);

    function jb(bb) {
      let {
        deadEId: ab,
        killerEId: Ub,
        killerLifeformType: Ab,
        withItem: Mb,
        killstreak: Tb
      } = bb;
      return {
        killer: zb({
          eId: Ub,
          lifeformType: Ab
        }),
        victim: zb({
          eId: ab
        }),
        withItem: Mb,
        killstreak: Tb
      }
    }

    function Rb(bb) {
      let {
        killer: ab,
        victim: Ub,
        withItem: Ab
      } = bb;
      return {
        killer: zb(ab),
        victim: zb(Ub),
        withItem: Ab,
        killstreak: 0
      }
    }

    function kb(bb) {
      mb && Nb((() => "killed" === bb.kind ? jb(bb.body) : Rb(bb.body)))
    }
    const yb = "#2727f1",
      Zb = "#912c2c";

    function Db(bb, ab) {
      var Ub;
      return Lb.e.has(bb) ? null === (Ub = Lb.e.getSettings(bb)) || void 0 === Ub ? void 0 : Ub[ab] : (0, vb.e)(bb, ab)
    }

    function zb(bb) {
      var ab, Ub, Eb, Yb, vb;
      let {
        eId: Pb,
        name: Xb,
        colour: jb,
        lifeformType: Rb
      } = bb;
      if (void 0 === Pb || null === Pb || "" === Pb) {
        const bb = Xb || null;
        return {
          id: null,
          shownName: bb,
          lifeformType: null === bb && null !== Rb && void 0 !== Rb ? Rb : null,
          colour: jb || null,
          local: !1,
          realName: null
        }
      }
      const kb = String(Pb),
        zb = null === (ab = (0, eb.i)()) || void 0 === ab ? void 0 : ab.api,
        xb = void 0 !== zb && String(zb.localId) === kb,
        ib = null !== (Ub = Lb.e.getName(kb)) && void 0 !== Ub ? Ub : null,
        fb = null !== (Eb = Db(kb, "hideNameSeed")) && void 0 !== Eb ? Eb : null;
      let mb = null === ib ? null : (0, Ab.d)(ib, !Tb.featureFlags.canSeeRealPlayerNames, fb) || null,
        pb = null;
      if (null === mb && void 0 !== zb) {
        const bb = zb.getEntityType(kb);
        "Player" !== bb && (mb = (0, Bb.f)(zb, +kb) || null), pb = Mb.n.includes(bb) ? bb : null
      }
      return {
        id: kb,
        shownName: mb,
        lifeformType: null === mb && null !== (Yb = null !== (vb = pb) && void 0 !== vb ? vb : Rb) && void 0 !== Yb ? Yb : null,
        colour: jb || Db(kb, "killfeedColour") || (xb ? yb : Zb),
        local: xb,
        realName: ib
      }
    }
    const xb = 32;
    let ib = [],
      fb = null,
      mb = !1,
      pb = !1;

    function Nb(bb) {
      null === fb ? (ib.length === xb && ib.shift(), ib.push(bb)) : fb(bb())
    }

    function Wb() {
      pb || (pb = !0, (0, Xb.k)(Eb.Tb.PlayerKilled, (bb => {
        const ab = (0, Pb.i)(bb);
        (0, Pb.e)(ab) && Nb((() => jb(ab)))
      })), (0, Xb.k)(Eb.Tb.CustomKillfeed, (bb => {
        const ab = (0, Pb.i)(bb);
        (0, Pb.e)(ab) && (0, Pb.e)(ab.killer) && (0, Pb.e)(ab.victim) && Nb((() => Rb(ab)))
      })), (0, Xb.d)((() => {
        ib = []
      })))
    }
    const Hb = Object.freeze([0, 0, 0]),
      Ib = [0, 0, 0],
      db = [0, 0, 0],
      Fb = {
        kill: {
          watch(bb) {
            if (mb = !0, 0 === ib.length) return fb = bb, () => {
              mb = !1, fb = null
            };
            const ab = setTimeout((() => {
              const ab = ib;
              ib = [], fb = bb;
              for (const Ab of ab) try {
                bb(Ab())
              } catch (Ub) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Ub)
              }
            }), 0);
            return () => {
              clearTimeout(ab), mb = !1, fb = null
            }
          }
        }
      },
      hb = {
        localPos() {
          const bb = (0, eb.i)();
          if (null === bb) return Hb;
          const ab = bb.api.apiView;
          for (let Ub = 0; Ub < 3; Ub++) Ib[Ub] = Yb.t.localPos(ab, 0, Ub);
          return Ib
        },
        targetedBlockPos() {
          const bb = (0, eb.i)();
          if (null === bb || Yb.t.targetBlockId(bb.api.apiView, 0) === Yb.Wc) return null;
          for (let ab = 0; ab < 3; ab++) db[ab] = Yb.t.targetBlock(bb.api.apiView, 0, ab);
          return db
        }
      }
  },
  38312: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const ab = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Ab of bb.PA) {
          let bb = this.members.get(Ab.XA);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(Ab.XA, bb), ab.added.push(Ab.XA)), null !== Ab.jA && (bb.name = Ab.jA), null !== Ab.RA || Ab.kA.length > 0) {
            const Ub = null === Ab.RA ? {} : JSON.parse(Ab.RA);
            Object.assign(bb.settings, Ub);
            for (const ab of Ab.kA) delete bb.settings[ab], Ub[ab] = void 0;
            ab.settingChanges.push({
              playerId: Ab.XA,
              settings: Ub
            })
          }
        }
        for (const Ab of bb.yA) {
          const bb = this.members.get(Ab);
          var Ub;
          if (bb) this.members.delete(Ab), ab.removed.push({
            playerId: Ab,
            name: null !== (Ub = bb.name) && void 0 !== Ub ? Ub : void 0
          })
        }
        return ab
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var ab, Ub;
        return null !== (ab = null === (Ub = this.members.get(bb)) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== ab ? ab : void 0
      }
      getSettings(bb) {
        var ab;
        return null === (ab = this.members.get(bb)) || void 0 === ab ? void 0 : ab.settings
      }
      getSetting(bb, ab) {
        var Ub;
        return null === (Ub = this.members.get(bb)) || void 0 === Ub ? void 0 : Ub.settings[ab]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);