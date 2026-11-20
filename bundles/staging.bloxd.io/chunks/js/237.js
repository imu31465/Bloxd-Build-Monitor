export const id = 237;
export const ids = [237];
export const modules = {
  40168: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      g: () => Tb
    });
    var kb = sb(1881);
    let Wb = !1;

    function ab() {
      Wb = !0
    }

    function Tb() {
      Wb && (Wb = !1, (0, kb.e)())
    }
  },
  40143: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => mb,
      h: () => Xb,
      j: () => nb
    });
    var kb = sb(1889),
      Wb = sb(1289),
      ab = sb(40014),
      Tb = sb(40043),
      Ub = sb(40047),
      Ib = sb(40066);
    const Hb = new Wb.b;
    let fb = !1;

    function Mb(bb) {
      const cb = (0, ab.h)();
      return null !== cb && +bb === cb.api.localId
    }

    function Xb() {
      fb || (fb = !0, (0, Ib.k)(Tb.q, (bb => {
        var cb, sb;
        const kb = (0, Ub.g)(Tb.q, bb);
        if (!(0, Ub.c)(kb)) return;
        const Wb = kb;
        Mb(Wb.nc) && nb(Wb.mc, {
          icon: Wb.Qc,
          level: Wb.Nc,
          displayName: null !== (cb = Wb.lc) && void 0 !== cb ? cb : null,
          durationMs: null !== (sb = Wb.Cc) && void 0 !== sb ? sb : null
        })
      })), (0, Ib.k)(Tb.W, (bb => {
        const cb = (0, Ub.g)(Tb.W, bb);
        if (!(0, Ub.c)(cb)) return;
        const sb = cb;
        Mb(sb.nc) && kb.b.remove(sb.mc)
      })), (0, Ib.g)((() => {
        kb.b.clear()
      })))
    }

    function nb(bb, cb) {
      kb.b.update(bb, cb), Hb.forEach((cb => {
        cb(bb)
      }))
    }
    const mb = {
      localEffectUpdated: {
        watch: bb => Hb.add(bb)
      }
    }
  },
  40145: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb
    });
    var kb = sb(4517),
      Wb = sb(4512),
      ab = sb(40054),
      Tb = sb(40066);
    const Ub = new Set(kb.D),
      Ib = kb.D.map((bb => (new TextEncoder).encode(bb))),
      Hb = new Map;

    function fb(bb, cb) {
      var sb;
      return null === (sb = Hb.get(bb)) || void 0 === sb ? void 0 : sb[cb]
    }(0, Tb.k)(kb.Yb.NewOtherEntitySettings, (bb => {
      bb.payloadKind === Wb.lc.Msgpack && Ib.some((cb => function(bb, cb) {
        const sb = cb[0];
        for (let kb = bb.indexOf(sb); - 1 !== kb && kb + cb.length <= bb.length; kb = bb.indexOf(sb, kb + 1)) {
          let sb = 1;
          for (; sb < cb.length && bb[kb + sb] === cb[sb];) sb++;
          if (sb === cb.length) return !0
        }
        return !1
      }(bb.payload, cb))) && function(bb) {
        if (null === bb || "object" !== typeof bb || null === bb.settings || "object" !== typeof bb.settings) return;
        const cb = String(bb.eId),
          sb = bb.settings;
        let kb = Hb.get(cb);
        for (const Wb in sb) {
          if (!Ub.has(Wb)) continue;
          const bb = sb[Wb];
          null === bb || void 0 === bb ? kb && delete kb[Wb] : (kb ??= {}, kb[Wb] = bb)
        }
        kb && Hb.set(cb, kb)
      }((0, ab.d)(bb.payload))
    })), (0, Tb.g)((() => {
      Hb.clear()
    }))
  },
  40134: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => nb,
      f: () => Hb,
      h: () => Mb
    });
    var kb = sb(38578),
      Wb = sb(1876),
      ab = sb(1289),
      Tb = sb(40043),
      Ub = sb(40047),
      Ib = sb(40066);
    const Hb = new kb.e;
    let fb = {};

    function Mb(bb) {
      return fb[bb]
    }
    const Xb = new ab.b;

    function nb(bb) {
      return Xb.add(bb)
    }

    function mb(bb) {
      Xb.callEach(bb, "a roster listener")
    }(0, Ib.k)(Tb.cb, (bb => {
      const cb = (0, Ub.g)(Tb.cb, bb);
      if (void 0 === cb) return;
      const sb = cb.Ok.some((bb => {
          let {
            Gk: cb,
            Kk: sb
          } = bb;
          return null !== sb && Hb.has(cb) && Hb.getName(cb) !== sb
        })),
        {
          added: kb,
          removed: ab,
          settingChanges: Ib
        } = Hb.apply(cb),
        fb = new Set;
      for (const Wb of Ib)
        for (const bb in Wb.settings) fb.add(bb);
      const Mb = sb || kb.length > 0 || ab.length > 0;
      (Mb || fb.has("hideNameSeed")) && function() {
        const bb = new Map;
        for (const cb of Hb.ids()) {
          const sb = Hb.getName(cb),
            kb = Hb.getSetting(cb, "hideNameSeed");
          void 0 !== sb && void 0 !== kb && null !== kb && bb.set(sb, kb)
        }
        Wb.b.replaceAll(bb)
      }(), mb({
        kind: "roster",
        members: Mb,
        settings: fb
      })
    })), (0, Ib.k)(Tb.U, (bb => {
      const cb = (0, Ub.g)(Tb.U, bb);
      if (void 0 !== cb) {
        for (const {
            nk: bb,
            mk: sb,
            lk: kb
          }
          of cb) fb[bb] = {
          ...fb[bb],
          [sb]: kb
        };
        mb({
          kind: "cosmetics",
          updates: cb
        })
      }
    })), (0, Ib.g)((() => {
      Hb.clear(), fb = {}, Wb.b.clear(), mb({
        kind: "reset"
      })
    })), (0, Ib.j)((() => {
      Hb.clear(), mb({
        kind: "reset"
      })
    }))
  },
  40154: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Bb,
      f: () => Qb,
      j: () => Db,
      l: () => Eb
    });
    var kb = sb(1271),
      Wb = sb(620),
      ab = sb(117),
      Tb = sb(4517),
      Ub = sb(40002),
      Ib = sb(40035),
      Hb = sb(40014),
      fb = sb(40145),
      Mb = sb(40134),
      Xb = sb(40047),
      nb = sb(40066);

    function mb(bb) {
      let {
        deadEId: cb,
        killerEId: sb,
        killerLifeformType: kb,
        withItem: Wb,
        killstreak: ab
      } = bb;
      return {
        killer: Vb({
          eId: sb,
          lifeformType: kb
        }),
        victim: Vb({
          eId: cb
        }),
        withItem: Wb,
        killstreak: ab
      }
    }

    function lb(bb) {
      let {
        killer: cb,
        victim: sb,
        withItem: kb
      } = bb;
      return {
        killer: Vb(cb),
        victim: Vb(sb),
        withItem: kb,
        killstreak: 0
      }
    }

    function Qb(bb) {
      hb && gb((() => "killed" === bb.kind ? mb(bb.body) : lb(bb.body)))
    }
    const eb = "#2727f1",
      Cb = "#912c2c";

    function Nb(bb, cb) {
      var sb;
      return Mb.f.has(bb) ? null === (sb = Mb.f.getSettings(bb)) || void 0 === sb ? void 0 : sb[cb] : (0, fb.d)(bb, cb)
    }

    function Vb(bb) {
      var cb, sb, Tb, Ub, fb;
      let {
        eId: Xb,
        name: nb,
        colour: mb,
        lifeformType: lb
      } = bb;
      if (void 0 === Xb || null === Xb || "" === Xb) {
        const bb = nb || null;
        return {
          id: null,
          shownName: bb,
          lifeformType: null === bb && null !== lb && void 0 !== lb ? lb : null,
          colour: mb || null,
          local: !1,
          realName: null
        }
      }
      const Qb = String(Xb),
        Vb = null === (cb = (0, Hb.h)()) || void 0 === cb ? void 0 : cb.api,
        Lb = void 0 !== Vb && String(Vb.localId) === Qb,
        ub = null !== (sb = Mb.f.getName(Qb)) && void 0 !== sb ? sb : null,
        Yb = null !== (Tb = Nb(Qb, "hideNameSeed")) && void 0 !== Tb ? Tb : null;
      let hb = null === ub ? null : (0, kb.d)(ub, !ab.featureFlags.canSeeRealPlayerNames, Yb) || null,
        Jb = null;
      if (null === hb && void 0 !== Vb) {
        const bb = Vb.getEntityType(Qb);
        "Player" !== bb && (hb = (0, Ib.j)(Vb, +Qb) || null), Jb = Wb.m.includes(bb) ? bb : null
      }
      return {
        id: Qb,
        shownName: hb,
        lifeformType: null === hb && null !== (Ub = null !== (fb = Jb) && void 0 !== fb ? fb : lb) && void 0 !== Ub ? Ub : null,
        colour: mb || Nb(Qb, "killfeedColour") || (Lb ? eb : Cb),
        local: Lb,
        realName: ub
      }
    }
    const Lb = 32;
    let ub = [],
      Yb = null,
      hb = !1,
      Jb = !1;

    function gb(bb) {
      null === Yb ? (ub.length === Lb && ub.shift(), ub.push(bb)) : Yb(bb())
    }

    function Bb() {
      Jb || (Jb = !0, (0, nb.k)(Tb.Yb.PlayerKilled, (bb => {
        const cb = (0, Xb.j)(bb);
        (0, Xb.c)(cb) && gb((() => mb(cb)))
      })), (0, nb.k)(Tb.Yb.CustomKillfeed, (bb => {
        const cb = (0, Xb.j)(bb);
        (0, Xb.c)(cb) && (0, Xb.c)(cb.killer) && (0, Xb.c)(cb.victim) && gb((() => lb(cb)))
      })), (0, nb.g)((() => {
        ub = []
      })))
    }
    const tb = Object.freeze([0, 0, 0]),
      yb = [0, 0, 0],
      Pb = [0, 0, 0],
      Db = {
        kill: {
          watch(bb) {
            if (hb = !0, 0 === ub.length) return Yb = bb, () => {
              hb = !1, Yb = null
            };
            const cb = setTimeout((() => {
              const cb = ub;
              ub = [], Yb = bb;
              for (const kb of cb) try {
                bb(kb())
              } catch (sb) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", sb)
              }
            }), 0);
            return () => {
              clearTimeout(cb), hb = !1, Yb = null
            }
          }
        }
      },
      Eb = {
        localPos() {
          const bb = (0, Hb.h)();
          if (null === bb) return tb;
          const cb = bb.api.apiView;
          for (let sb = 0; sb < 3; sb++) yb[sb] = Ub.n.localPos(cb, 0, sb);
          return yb
        },
        targetedBlockPos() {
          const bb = (0, Hb.h)();
          if (null === bb || Ub.n.targetBlockId(bb.api.apiView, 0) === Ub.cd) return null;
          for (let cb = 0; cb < 3; cb++) Pb[cb] = Ub.n.targetBlock(bb.api.apiView, 0, cb);
          return Pb
        }
      }
  },
  38578: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const cb = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const kb of bb.Ok) {
          let bb = this.members.get(kb.Gk);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(kb.Gk, bb), cb.added.push(kb.Gk)), null !== kb.Kk && (bb.name = kb.Kk), null !== kb.Zk || kb.zk.length > 0) {
            const sb = null === kb.Zk ? {} : JSON.parse(kb.Zk);
            Object.assign(bb.settings, sb);
            for (const cb of kb.zk) delete bb.settings[cb], sb[cb] = void 0;
            cb.settingChanges.push({
              playerId: kb.Gk,
              settings: sb
            })
          }
        }
        for (const kb of bb.qk) {
          const bb = this.members.get(kb);
          var sb;
          if (bb) this.members.delete(kb), cb.removed.push({
            playerId: kb,
            name: null !== (sb = bb.name) && void 0 !== sb ? sb : void 0
          })
        }
        return cb
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var cb, sb;
        return null !== (cb = null === (sb = this.members.get(bb)) || void 0 === sb ? void 0 : sb.name) && void 0 !== cb ? cb : void 0
      }
      getSettings(bb) {
        var cb;
        return null === (cb = this.members.get(bb)) || void 0 === cb ? void 0 : cb.settings
      }
      getSetting(bb, cb) {
        var sb;
        return null === (sb = this.members.get(bb)) || void 0 === sb ? void 0 : sb.settings[cb]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);