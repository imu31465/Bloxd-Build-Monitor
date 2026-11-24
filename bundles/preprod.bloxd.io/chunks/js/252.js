export const id = 252;
export const ids = [252];
export const modules = {
  41251: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      f: () => Sp
    });
    var Op = cp(1971);
    let op = !1;

    function Ip() {
      op = !0
    }

    function Sp() {
      op && (op = !1, (0, Op.b)())
    }
  },
  41248: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      c: () => Ip,
      d: () => xp
    });
    var Op = cp(40769),
      op = cp(40783);

    function Ip(pp) {
      if (pp.queries.drawCensus() < Op.ob.BYTES) return null;
      const ip = pp.memoryData(pp.scratch(), Op.ob.BYTES, 4, "the draw census");
      return null === ip ? null : {
        terrainOpaque: Op.ob.terrainOpaque(ip, 0),
        terrainTransparent: Op.ob.terrainTransparent(ip, 0),
        terrainPack: Op.ob.terrainPack(ip, 0),
        earthSky: Op.ob.earthSky(ip, 0),
        skyMeshes: Op.ob.skyMeshes(ip, 0),
        regular: Op.ob.regular(ip, 0),
        thin: Op.ob.thin(ip, 0),
        line: Op.ob.line(ip, 0),
        text: Op.ob.text(ip, 0),
        particles: Op.ob.particles(ip, 0),
        terrainParts: Op.ob.terrainParts(ip, 0),
        terrainCompiling: Op.ob.terrainCompiling(ip, 0),
        ringCopiesMax: Op.ob.ringCopiesMax(ip, 0),
        ringBusyWrites: Op.ob.ringBusyWrites(ip, 0)
      }
    }

    function Sp(pp) {
      const {
        terrainOpaque: ip,
        terrainTransparent: cp,
        earthSky: Op,
        skyMeshes: op,
        regular: Ip,
        thin: Sp,
        line: xp,
        text: Lp,
        particles: Yp
      } = pp;
      return ip + cp + Op + op + Ip + Sp + xp + Lp + Yp
    }

    function xp() {
      const pp = (0, op.k)();
      return !0 === (null === pp || void 0 === pp ? void 0 : pp.isCoreRunning) ? function(pp) {
        const ip = Ip(pp);
        if (null === ip) return [];
        const {
          terrainOpaque: cp,
          terrainTransparent: Op,
          terrainPack: op,
          earthSky: xp,
          skyMeshes: Lp,
          regular: Yp,
          thin: Dp,
          line: Ap,
          text: Pp,
          particles: Wp
        } = ip;
        return [{
          label: "Drawn",
          value: `${Sp(ip)}`
        }, {
          label: "Terrain",
          value: `${cp} opaque / ${Op} transparent (${op} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Yp} / ${Dp}`
        }, {
          label: "Text / Lines",
          value: `${Pp} / ${Ap}`
        }, {
          label: "Sky / Particles",
          value: `${xp+Lp} / ${Wp}`
        }]
      }(pp.api) : []
    }
  },
  41225: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => yp,
      d: () => Pp,
      h: () => Wp
    });
    var Op = cp(1975),
      op = cp(1313),
      Ip = cp(40783),
      Sp = cp(40813),
      xp = cp(40818),
      Lp = cp(40837);
    const Yp = new op.c;
    let Dp = !1;

    function Ap(pp) {
      const ip = (0, Ip.k)();
      return null !== ip && +pp === ip.api.localId
    }

    function Pp() {
      Dp || (Dp = !0, (0, Lp.h)(Sp.p, (pp => {
        var ip, cp;
        const Op = (0, xp.f)(Sp.p, pp);
        if (!(0, xp.b)(Op)) return;
        const op = Op;
        Ap(op.Np) && Wp(op.Tp, {
          icon: op.Oc,
          level: op.Ic,
          displayName: null !== (ip = op.bp) && void 0 !== ip ? ip : null,
          durationMs: null !== (cp = op.oc) && void 0 !== cp ? cp : null
        })
      })), (0, Lp.h)(Sp.P, (pp => {
        const ip = (0, xp.f)(Sp.P, pp);
        if (!(0, xp.b)(ip)) return;
        const cp = ip;
        Ap(cp.Np) && Op.e.remove(cp.Tp)
      })), (0, Lp.d)((() => {
        Op.e.clear()
      })))
    }

    function Wp(pp, ip) {
      Op.e.update(pp, ip), Yp.forEach((ip => {
        ip(pp)
      }))
    }
    const yp = {
      localEffectUpdated: {
        watch: pp => Yp.add(pp)
      }
    }
  },
  41233: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp
    });
    var Op = cp(4911),
      op = cp(4903),
      Ip = cp(40824),
      Sp = cp(40837);
    const xp = new Set(Op.A),
      Lp = Op.A.map((pp => (new TextEncoder).encode(pp))),
      Yp = new Map;

    function Dp(pp, ip) {
      var cp;
      return null === (cp = Yp.get(pp)) || void 0 === cp ? void 0 : cp[ip]
    }(0, Sp.h)(Op.Zb.NewOtherEntitySettings, (pp => {
      pp.payloadKind === op.kc.Msgpack && Lp.some((ip => function(pp, ip) {
        const cp = ip[0];
        for (let Op = pp.indexOf(cp); - 1 !== Op && Op + ip.length <= pp.length; Op = pp.indexOf(cp, Op + 1)) {
          let cp = 1;
          for (; cp < ip.length && pp[Op + cp] === ip[cp];) cp++;
          if (cp === ip.length) return !0
        }
        return !1
      }(pp.payload, ip))) && function(pp) {
        if (null === pp || "object" !== typeof pp || null === pp.settings || "object" !== typeof pp.settings) return;
        const ip = String(pp.eId),
          cp = pp.settings;
        let Op = Yp.get(ip);
        for (const op in cp) {
          if (!xp.has(op)) continue;
          const pp = cp[op];
          null === pp || void 0 === pp ? Op && delete Op[op] : (Op ??= {}, Op[op] = pp)
        }
        Op && Yp.set(ip, Op)
      }((0, Ip.c)(pp.payload))
    })), (0, Sp.d)((() => {
      Yp.clear()
    }))
  },
  41221: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Wp,
      d: () => Yp,
      e: () => Ap
    });
    var Op = cp(39182),
      op = cp(1963),
      Ip = cp(1313),
      Sp = cp(40813),
      xp = cp(40818),
      Lp = cp(40837);
    const Yp = new Op.e;
    let Dp = {};

    function Ap(pp) {
      return Dp[pp]
    }
    const Pp = new Ip.c;

    function Wp(pp) {
      return Pp.add(pp)
    }

    function yp(pp) {
      Pp.callEach(pp, "a roster listener")
    }(0, Lp.h)(Sp.X, (pp => {
      const ip = (0, xp.f)(Sp.X, pp);
      if (void 0 === ip) return;
      const cp = ip.hp.some((pp => {
          let {
            ap: ip,
            np: cp
          } = pp;
          return null !== cp && Yp.has(ip) && Yp.getName(ip) !== cp
        })),
        {
          added: Op,
          removed: Ip,
          settingChanges: Lp
        } = Yp.apply(ip),
        Dp = new Set;
      for (const op of Lp)
        for (const pp in op.settings) Dp.add(pp);
      const Ap = cp || Op.length > 0 || Ip.length > 0;
      (Ap || Dp.has("hideNameSeed")) && function() {
        const pp = new Map;
        for (const ip of Yp.ids()) {
          const cp = Yp.getName(ip),
            Op = Yp.getSetting(ip, "hideNameSeed");
          void 0 !== cp && void 0 !== Op && null !== Op && pp.set(cp, Op)
        }
        op.d.replaceAll(pp)
      }(), yp({
        kind: "roster",
        members: Ap,
        settings: Dp
      })
    })), (0, Lp.h)(Sp.O, (pp => {
      const ip = (0, xp.f)(Sp.O, pp);
      if (void 0 !== ip) {
        for (const {
            sI: pp,
            KI: cp,
            VI: Op
          }
          of ip) Dp[pp] = {
          ...Dp[pp],
          [cp]: Op
        };
        yp({
          kind: "cosmetics",
          updates: ip
        })
      }
    })), (0, Lp.d)((() => {
      Yp.clear(), Dp = {}, op.d.clear(), yp({
        kind: "reset"
      })
    })), (0, Lp.e)((() => {
      Yp.clear(), yp({
        kind: "reset"
      })
    }))
  },
  41240: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Mp,
      h: () => wp,
      j: () => lp,
      k: () => Qp
    });
    var Op = cp(1284),
      op = cp(629),
      Ip = cp(104),
      Sp = cp(4911),
      xp = cp(40769),
      Lp = cp(40806),
      Yp = cp(40783),
      Dp = cp(41233),
      Ap = cp(41221),
      Pp = cp(40818),
      Wp = cp(40837);

    function yp(pp) {
      let {
        deadEId: ip,
        killerEId: cp,
        killerLifeformType: Op,
        withItem: op,
        killstreak: Ip
      } = pp;
      return {
        killer: dp({
          eId: cp,
          lifeformType: Op
        }),
        victim: dp({
          eId: ip
        }),
        withItem: op,
        killstreak: Ip
      }
    }

    function Up(pp) {
      let {
        killer: ip,
        victim: cp,
        withItem: Op
      } = pp;
      return {
        killer: dp(ip),
        victim: dp(cp),
        withItem: Op,
        killstreak: 0
      }
    }

    function wp(pp) {
      mp && qp((() => "killed" === pp.kind ? yp(pp.body) : Up(pp.body)))
    }
    const vp = "#2727f1",
      tp = "#912c2c";

    function Hp(pp, ip) {
      var cp;
      return Ap.d.has(pp) ? null === (cp = Ap.d.getSettings(pp)) || void 0 === cp ? void 0 : cp[ip] : (0, Dp.c)(pp, ip)
    }

    function dp(pp) {
      var ip, cp, Sp, xp, Dp;
      let {
        eId: Pp,
        name: Wp,
        colour: yp,
        lifeformType: Up
      } = pp;
      if (void 0 === Pp || null === Pp || "" === Pp) {
        const pp = Wp || null;
        return {
          id: null,
          shownName: pp,
          lifeformType: null === pp && null !== Up && void 0 !== Up ? Up : null,
          colour: yp || null,
          local: !1,
          realName: null
        }
      }
      const wp = String(Pp),
        dp = null === (ip = (0, Yp.k)()) || void 0 === ip ? void 0 : ip.api,
        ep = void 0 !== dp && String(dp.localId) === wp,
        jp = null !== (cp = Ap.d.getName(wp)) && void 0 !== cp ? cp : null,
        kp = null !== (Sp = Hp(wp, "hideNameSeed")) && void 0 !== Sp ? Sp : null;
      let mp = null === jp ? null : (0, Op.d)(jp, !Ip.featureFlags.canSeeRealPlayerNames, kp) || null,
        Rp = null;
      if (null === mp && void 0 !== dp) {
        const pp = dp.getEntityType(wp);
        "Player" !== pp && (mp = (0, Lp.k)(dp, +wp) || null), Rp = op.i.includes(pp) ? pp : null
      }
      return {
        id: wp,
        shownName: mp,
        lifeformType: null === mp && null !== (xp = null !== (Dp = Rp) && void 0 !== Dp ? Dp : Up) && void 0 !== xp ? xp : null,
        colour: yp || Hp(wp, "killfeedColour") || (ep ? vp : tp),
        local: ep,
        realName: jp
      }
    }
    const ep = 32;
    let jp = [],
      kp = null,
      mp = !1,
      Rp = !1;

    function qp(pp) {
      null === kp ? (jp.length === ep && jp.shift(), jp.push(pp)) : kp(pp())
    }

    function Mp() {
      Rp || (Rp = !0, (0, Wp.h)(Sp.Zb.PlayerKilled, (pp => {
        const ip = (0, Pp.i)(pp);
        (0, Pp.b)(ip) && qp((() => yp(ip)))
      })), (0, Wp.h)(Sp.Zb.CustomKillfeed, (pp => {
        const ip = (0, Pp.i)(pp);
        (0, Pp.b)(ip) && (0, Pp.b)(ip.killer) && (0, Pp.b)(ip.victim) && qp((() => Up(ip)))
      })), (0, Wp.d)((() => {
        jp = []
      })))
    }
    const Cp = Object.freeze([0, 0, 0]),
      Ep = [0, 0, 0],
      Xp = [0, 0, 0],
      lp = {
        kill: {
          watch(pp) {
            if (mp = !0, 0 === jp.length) return kp = pp, () => {
              mp = !1, kp = null
            };
            const ip = setTimeout((() => {
              const ip = jp;
              jp = [], kp = pp;
              for (const Op of ip) try {
                pp(Op())
              } catch (cp) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", cp)
              }
            }), 0);
            return () => {
              clearTimeout(ip), mp = !1, kp = null
            }
          }
        }
      },
      Qp = {
        localPos() {
          const pp = (0, Yp.k)();
          if (null === pp) return Cp;
          const ip = pp.api.apiView;
          for (let cp = 0; cp < 3; cp++) Ep[cp] = xp.q.localPos(ip, 0, cp);
          return Ep
        },
        targetedBlockPos() {
          const pp = (0, Yp.k)();
          if (null === pp || xp.q.targetBlockId(pp.api.apiView, 0) === xp.Rc) return null;
          for (let ip = 0; ip < 3; ip++) Xp[ip] = xp.q.targetBlock(pp.api.apiView, 0, ip);
          return Xp
        }
      }
  },
  39182: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      constructor() {
        this.members = new Map
      }
      apply(pp) {
        const ip = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Op of pp.hp) {
          let pp = this.members.get(Op.ap);
          if (pp || (pp = {
              name: null,
              settings: {}
            }, this.members.set(Op.ap, pp), ip.added.push(Op.ap)), null !== Op.np && (pp.name = Op.np), null !== Op.Fp || Op.Gp.length > 0) {
            const cp = null === Op.Fp ? {} : JSON.parse(Op.Fp);
            Object.assign(pp.settings, cp);
            for (const ip of Op.Gp) delete pp.settings[ip], cp[ip] = void 0;
            ip.settingChanges.push({
              playerId: Op.ap,
              settings: cp
            })
          }
        }
        for (const Op of pp.rp) {
          const pp = this.members.get(Op);
          var cp;
          if (pp) this.members.delete(Op), ip.removed.push({
            playerId: Op,
            name: null !== (cp = pp.name) && void 0 !== cp ? cp : void 0
          })
        }
        return ip
      }
      has(pp) {
        return this.members.has(pp)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(pp) {
        var ip, cp;
        return null !== (ip = null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : void 0
      }
      getSettings(pp) {
        var ip;
        return null === (ip = this.members.get(pp)) || void 0 === ip ? void 0 : ip.settings
      }
      getSetting(pp, ip) {
        var cp;
        return null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.settings[ip]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);