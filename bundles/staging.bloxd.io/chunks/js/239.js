export const id = 239;
export const ids = [239];
export const modules = {
  40173: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      i: () => Ub
    });
    var Bb = hb(1824);
    let Ob = !1;

    function Gb() {
      Ob = !0
    }

    function Ub() {
      Ob && (Ob = !1, (0, Bb.e)())
    }
  },
  40171: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      d: () => Gb,
      f: () => Lb
    });
    var Bb = hb(40035),
      Ob = hb(40049);

    function Gb(bb) {
      if (bb.queries.drawCensus() < Bb.vb.BYTES) return null;
      const ub = bb.memoryData(bb.scratch(), Bb.vb.BYTES, 4, "the draw census");
      return null === ub ? null : {
        terrainOpaque: Bb.vb.terrainOpaque(ub, 0),
        terrainTransparent: Bb.vb.terrainTransparent(ub, 0),
        terrainPack: Bb.vb.terrainPack(ub, 0),
        earthSky: Bb.vb.earthSky(ub, 0),
        skyMeshes: Bb.vb.skyMeshes(ub, 0),
        regular: Bb.vb.regular(ub, 0),
        thin: Bb.vb.thin(ub, 0),
        line: Bb.vb.line(ub, 0),
        text: Bb.vb.text(ub, 0),
        particles: Bb.vb.particles(ub, 0),
        terrainParts: Bb.vb.terrainParts(ub, 0),
        terrainCompiling: Bb.vb.terrainCompiling(ub, 0)
      }
    }

    function Ub(bb) {
      const {
        terrainOpaque: ub,
        terrainTransparent: hb,
        earthSky: Bb,
        skyMeshes: Ob,
        regular: Gb,
        thin: Ub,
        line: Lb,
        text: Yb,
        particles: Sb
      } = bb;
      return ub + hb + Bb + Ob + Gb + Ub + Lb + Yb + Sb
    }

    function Lb() {
      const bb = (0, Ob.l)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const ub = Gb(bb);
        if (null === ub) return [];
        const {
          terrainOpaque: hb,
          terrainTransparent: Bb,
          terrainPack: Ob,
          earthSky: Lb,
          skyMeshes: Yb,
          regular: Sb,
          thin: ab,
          line: Hb,
          text: wb,
          particles: Zb
        } = ub;
        return [{
          label: "Drawn",
          value: `${Ub(ub)}`
        }, {
          label: "Terrain",
          value: `${hb} opaque / ${Bb} transparent (${Ob} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Sb} / ${ab}`
        }, {
          label: "Text / Lines",
          value: `${wb} / ${Hb}`
        }, {
          label: "Sky / Particles",
          value: `${Lb+Yb} / ${Zb}`
        }]
      }(bb.api) : []
    }
  },
  40143: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Xb,
      d: () => wb,
      f: () => Zb
    });
    var Bb = hb(1829),
      Ob = hb(1187),
      Gb = hb(40049),
      Ub = hb(40063),
      Lb = hb(40066),
      Yb = hb(40087);
    const Sb = new Ob.e;
    let ab = !1;

    function Hb(bb) {
      const ub = (0, Gb.l)();
      return null !== ub && +bb === ub.api.localId
    }

    function wb() {
      ab || (ab = !0, (0, Yb.n)(Ub.j, (bb => {
        var ub, hb;
        const Bb = (0, Lb.g)(Ub.j, bb);
        if (!(0, Lb.d)(Bb)) return;
        const Ob = Bb;
        Hb(Ob.fu) && Zb(Ob.ku, {
          icon: Ob.cu,
          level: Ob.Ru,
          displayName: null !== (ub = Ob.Tu) && void 0 !== ub ? ub : null,
          durationMs: null !== (hb = Ob.Qu) && void 0 !== hb ? hb : null
        })
      })), (0, Yb.n)(Ub.O, (bb => {
        const ub = (0, Lb.g)(Ub.O, bb);
        if (!(0, Lb.d)(ub)) return;
        const hb = ub;
        Hb(hb.fu) && Bb.c.remove(hb.ku)
      })), (0, Yb.i)((() => {
        Bb.c.clear()
      })))
    }

    function Zb(bb, ub) {
      Bb.c.update(bb, ub), Sb.forEach((ub => {
        ub(bb)
      }))
    }
    const Xb = {
      localEffectUpdated: {
        watch: bb => Sb.add(bb)
      }
    }
  },
  40152: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab
    });
    var Bb = hb(4564),
      Ob = hb(4555),
      Gb = hb(40071),
      Ub = hb(40087);
    const Lb = new Set(Bb.D),
      Yb = Bb.D.map((bb => (new TextEncoder).encode(bb))),
      Sb = new Map;

    function ab(bb, ub) {
      var hb;
      return null === (hb = Sb.get(bb)) || void 0 === hb ? void 0 : hb[ub]
    }(0, Ub.n)(Bb.fc.NewOtherEntitySettings, (bb => {
      bb.payloadKind === Ob.Zb.Msgpack && Yb.some((ub => function(bb, ub) {
        const hb = ub[0];
        for (let Bb = bb.indexOf(hb); - 1 !== Bb && Bb + ub.length <= bb.length; Bb = bb.indexOf(hb, Bb + 1)) {
          let hb = 1;
          for (; hb < ub.length && bb[Bb + hb] === ub[hb];) hb++;
          if (hb === ub.length) return !0
        }
        return !1
      }(bb.payload, ub))) && function(bb) {
        if (null === bb || "object" !== typeof bb || null === bb.settings || "object" !== typeof bb.settings) return;
        const ub = String(bb.eId),
          hb = bb.settings;
        let Bb = Sb.get(ub);
        for (const Ob in hb) {
          if (!Lb.has(Ob)) continue;
          const bb = hb[Ob];
          null === bb || void 0 === bb ? Bb && delete Bb[Ob] : (Bb ??= {}, Bb[Ob] = bb)
        }
        Bb && Sb.set(ub, Bb)
      }((0, Gb.e)(bb.payload))
    })), (0, Ub.i)((() => {
      Sb.clear()
    }))
  },
  40138: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Zb,
      c: () => Sb,
      g: () => Hb
    });
    var Bb = hb(38632),
      Ob = hb(1819),
      Gb = hb(1187),
      Ub = hb(40063),
      Lb = hb(40066),
      Yb = hb(40087);
    const Sb = new Bb.d;
    let ab = {};

    function Hb(bb) {
      return ab[bb]
    }
    const wb = new Gb.e;

    function Zb(bb) {
      return wb.add(bb)
    }

    function Xb(bb) {
      wb.callEach(bb, "a roster listener")
    }(0, Yb.n)(Ub.W, (bb => {
      const ub = (0, Lb.g)(Ub.W, bb);
      if (void 0 === ub) return;
      const hb = ub.Zh.some((bb => {
          let {
            Xh: ub,
            ph: hb
          } = bb;
          return null !== hb && Sb.has(ub) && Sb.getName(ub) !== hb
        })),
        {
          added: Bb,
          removed: Gb,
          settingChanges: Yb
        } = Sb.apply(ub),
        ab = new Set;
      for (const Ob of Yb)
        for (const bb in Ob.settings) ab.add(bb);
      const Hb = hb || Bb.length > 0 || Gb.length > 0;
      (Hb || ab.has("hideNameSeed")) && function() {
        const bb = new Map;
        for (const ub of Sb.ids()) {
          const hb = Sb.getName(ub),
            Bb = Sb.getSetting(ub, "hideNameSeed");
          void 0 !== hb && void 0 !== Bb && null !== Bb && bb.set(hb, Bb)
        }
        Ob.d.replaceAll(bb)
      }(), Xb({
        kind: "roster",
        members: Hb,
        settings: ab
      })
    })), (0, Yb.n)(Ub.L, (bb => {
      const ub = (0, Lb.g)(Ub.L, bb);
      if (void 0 !== ub) {
        for (const {
            vB: bb,
            tB: hb,
            JB: Bb
          }
          of ub) ab[bb] = {
          ...ab[bb],
          [hb]: Bb
        };
        Xb({
          kind: "cosmetics",
          updates: ub
        })
      }
    })), (0, Yb.i)((() => {
      Sb.clear(), ab = {}, Ob.d.clear(), Xb({
        kind: "reset"
      })
    })), (0, Yb.j)((() => {
      Sb.clear(), Xb({
        kind: "reset"
      })
    }))
  },
  40159: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => xb,
      f: () => ob,
      i: () => vb,
      m: () => tb
    });
    var Bb = hb(1166),
      Ob = hb(571),
      Gb = hb(86),
      Ub = hb(4564),
      Lb = hb(40035),
      Yb = hb(40061),
      Sb = hb(40049),
      ab = hb(40152),
      Hb = hb(40138),
      wb = hb(40066),
      Zb = hb(40087);

    function Xb(bb) {
      let {
        deadEId: ub,
        killerEId: hb,
        killerLifeformType: Bb,
        withItem: Ob,
        killstreak: Gb
      } = bb;
      return {
        killer: Wb({
          eId: hb,
          lifeformType: Bb
        }),
        victim: Wb({
          eId: ub
        }),
        withItem: Ob,
        killstreak: Gb
      }
    }

    function pb(bb) {
      let {
        killer: ub,
        victim: hb,
        withItem: Bb
      } = bb;
      return {
        killer: Wb(ub),
        victim: Wb(hb),
        withItem: Bb,
        killstreak: 0
      }
    }

    function ob(bb) {
      jb && Db((() => "killed" === bb.kind ? Xb(bb.body) : pb(bb.body)))
    }
    const Ab = "#2727f1",
      lb = "#912c2c";

    function Kb(bb, ub) {
      var hb;
      return Hb.c.has(bb) ? null === (hb = Hb.c.getSettings(bb)) || void 0 === hb ? void 0 : hb[ub] : (0, ab.b)(bb, ub)
    }

    function Wb(bb) {
      var ub, hb, Ub, Lb, ab;
      let {
        eId: wb,
        name: Zb,
        colour: Xb,
        lifeformType: pb
      } = bb;
      if (void 0 === wb || null === wb || "" === wb) {
        const bb = Zb || null;
        return {
          id: null,
          shownName: bb,
          lifeformType: null === bb && null !== pb && void 0 !== pb ? pb : null,
          colour: Xb || null,
          local: !1,
          realName: null
        }
      }
      const ob = String(wb),
        Wb = null === (ub = (0, Sb.l)()) || void 0 === ub ? void 0 : ub.api,
        Cb = void 0 !== Wb && String(Wb.localId) === ob,
        db = null !== (hb = Hb.c.getName(ob)) && void 0 !== hb ? hb : null,
        rb = null !== (Ub = Kb(ob, "hideNameSeed")) && void 0 !== Ub ? Ub : null;
      let jb = null === db ? null : (0, Bb.e)(db, !Gb.featureFlags.canSeeRealPlayerNames, rb) || null,
        nb = null;
      if (null === jb && void 0 !== Wb) {
        const bb = Wb.getEntityType(ob);
        "Player" !== bb && (jb = (0, Yb.i)(Wb, +ob) || null), nb = Ob.i.includes(bb) ? bb : null
      }
      return {
        id: ob,
        shownName: jb,
        lifeformType: null === jb && null !== (Lb = null !== (ab = nb) && void 0 !== ab ? ab : pb) && void 0 !== Lb ? Lb : null,
        colour: Xb || Kb(ob, "killfeedColour") || (Cb ? Ab : lb),
        local: Cb,
        realName: db
      }
    }
    const Cb = 32;
    let db = [],
      rb = null,
      jb = !1,
      nb = !1;

    function Db(bb) {
      null === rb ? (db.length === Cb && db.shift(), db.push(bb)) : rb(bb())
    }

    function xb() {
      nb || (nb = !0, (0, Zb.n)(Ub.fc.PlayerKilled, (bb => {
        const ub = (0, wb.i)(bb);
        (0, wb.d)(ub) && Db((() => Xb(ub)))
      })), (0, Zb.n)(Ub.fc.CustomKillfeed, (bb => {
        const ub = (0, wb.i)(bb);
        (0, wb.d)(ub) && (0, wb.d)(ub.killer) && (0, wb.d)(ub.victim) && Db((() => pb(ub)))
      })), (0, Zb.i)((() => {
        db = []
      })))
    }
    const zb = Object.freeze([0, 0, 0]),
      gb = [0, 0, 0],
      ib = [0, 0, 0],
      vb = {
        kill: {
          watch(bb) {
            if (jb = !0, 0 === db.length) return rb = bb, () => {
              jb = !1, rb = null
            };
            const ub = setTimeout((() => {
              const ub = db;
              db = [], rb = bb;
              for (const Bb of ub) try {
                bb(Bb())
              } catch (hb) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", hb)
              }
            }), 0);
            return () => {
              clearTimeout(ub), jb = !1, rb = null
            }
          }
        }
      },
      tb = {
        localPos() {
          const bb = (0, Sb.l)();
          if (null === bb) return zb;
          const ub = bb.api.apiView;
          for (let hb = 0; hb < 3; hb++) gb[hb] = Lb.o.localPos(ub, 0, hb);
          return gb
        },
        targetedBlockPos() {
          const bb = (0, Sb.l)();
          if (null === bb || Lb.o.targetBlockId(bb.api.apiView, 0) === Lb.dd) return null;
          for (let ub = 0; ub < 3; ub++) ib[ub] = Lb.o.targetBlock(bb.api.apiView, 0, ub);
          return ib
        }
      }
  },
  38632: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const ub = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Bb of bb.Zh) {
          let bb = this.members.get(Bb.Xh);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(Bb.Xh, bb), ub.added.push(Bb.Xh)), null !== Bb.ph && (bb.name = Bb.ph), null !== Bb.oh || Bb.Ah.length > 0) {
            const hb = null === Bb.oh ? {} : JSON.parse(Bb.oh);
            Object.assign(bb.settings, hb);
            for (const ub of Bb.Ah) delete bb.settings[ub], hb[ub] = void 0;
            ub.settingChanges.push({
              playerId: Bb.Xh,
              settings: hb
            })
          }
        }
        for (const Bb of bb.Kh) {
          const bb = this.members.get(Bb);
          var hb;
          if (bb) this.members.delete(Bb), ub.removed.push({
            playerId: Bb,
            name: null !== (hb = bb.name) && void 0 !== hb ? hb : void 0
          })
        }
        return ub
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var ub, hb;
        return null !== (ub = null === (hb = this.members.get(bb)) || void 0 === hb ? void 0 : hb.name) && void 0 !== ub ? ub : void 0
      }
      getSettings(bb) {
        var ub;
        return null === (ub = this.members.get(bb)) || void 0 === ub ? void 0 : ub.settings
      }
      getSetting(bb, ub) {
        var hb;
        return null === (hb = this.members.get(bb)) || void 0 === hb ? void 0 : hb.settings[ub]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);