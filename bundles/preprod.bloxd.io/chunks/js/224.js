export const id = 224;
export const ids = [224];
export const modules = {
  39247: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      h: () => Zy
    });
    var Uy = Wy(1583);
    let hy = !1;

    function fy() {
      hy = !0
    }

    function Zy() {
      hy && (hy = !1, (0, Uy.b)())
    }
  },
  39210: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => sy,
      e: () => ey,
      f: () => qb
    });
    var Uy = Wy(1589),
      hy = Wy(1154),
      fy = Wy(39108),
      Zy = Wy(39130),
      cb = Wy(39136),
      Py = Wy(39152);
    const oy = new hy.c;
    let By = !1;

    function Ky(yb) {
      const bb = (0, fy.i)();
      return null !== bb && +yb === bb.api.localId
    }

    function ey() {
      By || (By = !0, (0, Py.j)(Zy.q, (yb => {
        var bb, Wy;
        const Uy = (0, cb.e)(Zy.q, yb);
        if (!(0, cb.c)(Uy)) return;
        const hy = Uy;
        Ky(hy.hY) && qb(hy.fY, {
          icon: hy.XN,
          level: hy.yI,
          displayName: null !== (bb = hy.ZY) && void 0 !== bb ? bb : null,
          durationMs: null !== (Wy = hy.pN) && void 0 !== Wy ? Wy : null
        })
      })), (0, Py.j)(Zy.R, (yb => {
        const bb = (0, cb.e)(Zy.R, yb);
        if (!(0, cb.c)(bb)) return;
        const Wy = bb;
        Ky(Wy.hY) && Uy.e.remove(Wy.fY)
      })), (0, Py.f)((() => {
        Uy.e.clear()
      })))
    }

    function qb(yb, bb) {
      Uy.e.update(yb, bb), oy.forEach((bb => {
        bb(yb)
      }))
    }
    const sy = {
      localEffectUpdated: {
        watch: yb => oy.add(yb)
      }
    }
  },
  39217: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => By
    });
    var Uy = Wy(4001),
      hy = Wy(3996),
      fy = Wy(39139),
      Zy = Wy(39152);
    const cb = new Set(Uy.B),
      Py = Uy.B.map((yb => (new TextEncoder).encode(yb))),
      oy = new Map;

    function By(yb, bb) {
      var Wy;
      return null === (Wy = oy.get(yb)) || void 0 === Wy ? void 0 : Wy[bb]
    }(0, Zy.j)(Uy.Tb.NewOtherEntitySettings, (yb => {
      yb.payloadKind === hy.Ub.Msgpack && Py.some((bb => function(yb, bb) {
        const Wy = bb[0];
        for (let Uy = yb.indexOf(Wy); - 1 !== Uy && Uy + bb.length <= yb.length; Uy = yb.indexOf(Wy, Uy + 1)) {
          let Wy = 1;
          for (; Wy < bb.length && yb[Uy + Wy] === bb[Wy];) Wy++;
          if (Wy === bb.length) return !0
        }
        return !1
      }(yb.payload, bb))) && function(yb) {
        if (null === yb || "object" !== typeof yb || null === yb.settings || "object" !== typeof yb.settings) return;
        const bb = String(yb.eId),
          Wy = yb.settings;
        let Uy = oy.get(bb);
        for (const hy in Wy) {
          if (!cb.has(hy)) continue;
          const yb = Wy[hy];
          null === yb || void 0 === yb ? Uy && delete Uy[hy] : (Uy ??= {}, Uy[hy] = yb)
        }
        Uy && oy.set(bb, Uy)
      }((0, fy.c)(yb.payload))
    })), (0, Zy.f)((() => {
      oy.clear()
    }))
  },
  39204: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => qb,
      f: () => oy,
      h: () => Ky
    });
    var Uy = Wy(37692),
      hy = Wy(1580),
      fy = Wy(1154),
      Zy = Wy(39130),
      cb = Wy(39136),
      Py = Wy(39152);
    const oy = new Uy.b;
    let By = {};

    function Ky(yb) {
      return By[yb]
    }
    const ey = new fy.c;

    function qb(yb) {
      return ey.add(yb)
    }

    function sy(yb) {
      ey.callEach(yb, "a roster listener")
    }(0, Py.j)(Zy.bb, (yb => {
      const bb = (0, cb.e)(Zy.bb, yb);
      if (void 0 === bb) return;
      const Wy = bb.Myy.some((yb => {
          let {
            Yyy: bb,
            Xyy: Wy
          } = yb;
          return null !== Wy && oy.has(bb) && oy.getName(bb) !== Wy
        })),
        {
          added: Uy,
          removed: fy,
          settingChanges: Py
        } = oy.apply(bb),
        By = new Set;
      for (const hy of Py)
        for (const yb in hy.settings) By.add(yb);
      const Ky = Wy || Uy.length > 0 || fy.length > 0;
      (Ky || By.has("hideNameSeed")) && function() {
        const yb = new Map;
        for (const bb of oy.ids()) {
          const Wy = oy.getName(bb),
            Uy = oy.getSetting(bb, "hideNameSeed");
          void 0 !== Wy && void 0 !== Uy && null !== Uy && yb.set(Wy, Uy)
        }
        hy.d.replaceAll(yb)
      }(), sy({
        kind: "roster",
        members: Ky,
        settings: By
      })
    })), (0, Py.j)(Zy.O, (yb => {
      const bb = (0, cb.e)(Zy.O, yb);
      if (void 0 !== bb) {
        for (const {
            lyy: yb,
            Kl: Wy,
            qm: Uy
          }
          of bb) By[yb] = {
          ...By[yb],
          [Wy]: Uy
        };
        sy({
          kind: "cosmetics",
          updates: bb
        })
      }
    })), (0, Py.f)((() => {
      oy.clear(), By = {}, hy.d.clear(), sy({
        kind: "reset"
      })
    })), (0, Py.g)((() => {
      oy.clear(), sy({
        kind: "reset"
      })
    }))
  },
  39231: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => vb,
      d: () => Ey,
      g: () => Yy,
      j: () => Xy
    });
    var Uy = Wy(1130),
      hy = Wy(535),
      fy = Wy(94),
      Zy = Wy(4001),
      cb = Wy(39097),
      Py = Wy(39124),
      oy = Wy(39108),
      By = Wy(39217),
      Ky = Wy(39204),
      ey = Wy(39136),
      qb = Wy(39152);

    function sy(yb) {
      let {
        deadEId: bb,
        killerEId: Wy,
        killerLifeformType: Uy,
        withItem: hy,
        killstreak: fy
      } = yb;
      return {
        killer: Ty({
          eId: Wy,
          lifeformType: Uy
        }),
        victim: Ty({
          eId: bb
        }),
        withItem: hy,
        killstreak: fy
      }
    }

    function Sy(yb) {
      let {
        killer: bb,
        victim: Wy,
        withItem: Uy
      } = yb;
      return {
        killer: Ty(bb),
        victim: Ty(Wy),
        withItem: Uy,
        killstreak: 0
      }
    }

    function Ey(yb) {
      Gy && Ry((() => "killed" === yb.kind ? sy(yb.body) : Sy(yb.body)))
    }
    const ly = "#2727f1",
      mb = "#912c2c";

    function Cy(yb, bb) {
      var Wy;
      return Ky.f.has(yb) ? null === (Wy = Ky.f.getSettings(yb)) || void 0 === Wy ? void 0 : Wy[bb] : (0, By.e)(yb, bb)
    }

    function Ty(yb) {
      var bb, Wy, Zy, cb, By;
      let {
        eId: ey,
        name: qb,
        colour: sy,
        lifeformType: Sy
      } = yb;
      if (void 0 === ey || null === ey || "" === ey) {
        const yb = qb || null;
        return {
          id: null,
          shownName: yb,
          lifeformType: null === yb && null !== Sy && void 0 !== Sy ? Sy : null,
          colour: sy || null,
          local: !1,
          realName: null
        }
      }
      const Ey = String(ey),
        Ty = null === (bb = (0, oy.i)()) || void 0 === bb ? void 0 : bb.api,
        Vy = void 0 !== Ty && String(Ty.localId) === Ey,
        Jy = null !== (Wy = Ky.f.getName(Ey)) && void 0 !== Wy ? Wy : null,
        gb = null !== (Zy = Cy(Ey, "hideNameSeed")) && void 0 !== Zy ? Zy : null;
      let Gy = null === Jy ? null : (0, Uy.e)(Jy, !fy.featureFlags.canSeeRealPlayerNames, gb) || null,
        Oy = null;
      if (null === Gy && void 0 !== Ty) {
        const yb = Ty.getEntityType(Ey);
        "Player" !== yb && (Gy = (0, Py.l)(Ty, +Ey) || null), Oy = hy.h.includes(yb) ? yb : null
      }
      return {
        id: Ey,
        shownName: Gy,
        lifeformType: null === Gy && null !== (cb = null !== (By = Oy) && void 0 !== By ? By : Sy) && void 0 !== cb ? cb : null,
        colour: sy || Cy(Ey, "killfeedColour") || (Vy ? ly : mb),
        local: Vy,
        realName: Jy
      }
    }
    const Vy = 32;
    let Jy = [],
      gb = null,
      Gy = !1,
      Oy = !1;

    function Ry(yb) {
      null === gb ? (Jy.length === Vy && Jy.shift(), Jy.push(yb)) : gb(yb())
    }

    function vb() {
      Oy || (Oy = !0, (0, qb.j)(Zy.Tb.PlayerKilled, (yb => {
        const bb = (0, ey.g)(yb);
        (0, ey.c)(bb) && Ry((() => sy(bb)))
      })), (0, qb.j)(Zy.Tb.CustomKillfeed, (yb => {
        const bb = (0, ey.g)(yb);
        (0, ey.c)(bb) && (0, ey.c)(bb.killer) && (0, ey.c)(bb.victim) && Ry((() => Sy(bb)))
      })), (0, qb.f)((() => {
        Jy = []
      })))
    }
    const ib = Object.freeze([0, 0, 0]),
      My = [0, 0, 0],
      Yy = {
        kill: {
          watch(yb) {
            if (Gy = !0, 0 === Jy.length) return gb = yb, () => {
              Gy = !1, gb = null
            };
            const bb = setTimeout((() => {
              const bb = Jy;
              Jy = [], gb = yb;
              for (const Uy of bb) try {
                yb(Uy())
              } catch (Wy) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Wy)
              }
            }), 0);
            return () => {
              clearTimeout(bb), Gy = !1, gb = null
            }
          }
        }
      },
      Xy = {
        localPos() {
          const yb = (0, oy.i)();
          if (null === yb) return ib;
          const bb = yb.api.apiView;
          for (let Wy = 0; Wy < 3; Wy++) My[Wy] = cb.s.localPos(bb, 0, Wy);
          return My
        }
      }
  },
  37692: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      constructor() {
        this.members = new Map
      }
      apply(yb) {
        const bb = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Uy of yb.Myy) {
          let yb = this.members.get(Uy.Yyy);
          if (yb || (yb = {
              name: null,
              settings: {}
            }, this.members.set(Uy.Yyy, yb), bb.added.push(Uy.Yyy)), null !== Uy.Xyy && (yb.name = Uy.Xyy), null !== Uy.nyy || Uy.uyy.length > 0) {
            const Wy = null === Uy.nyy ? {} : JSON.parse(Uy.nyy);
            Object.assign(yb.settings, Wy);
            for (const bb of Uy.uyy) delete yb.settings[bb], Wy[bb] = void 0;
            bb.settingChanges.push({
              playerId: Uy.Yyy,
              settings: Wy
            })
          }
        }
        for (const Uy of yb.rby) {
          const yb = this.members.get(Uy);
          var Wy;
          if (yb) this.members.delete(Uy), bb.removed.push({
            playerId: Uy,
            name: null !== (Wy = yb.name) && void 0 !== Wy ? Wy : void 0
          })
        }
        return bb
      }
      has(yb) {
        return this.members.has(yb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(yb) {
        var bb, Wy;
        return null !== (bb = null === (Wy = this.members.get(yb)) || void 0 === Wy ? void 0 : Wy.name) && void 0 !== bb ? bb : void 0
      }
      getSettings(yb) {
        var bb;
        return null === (bb = this.members.get(yb)) || void 0 === bb ? void 0 : bb.settings
      }
      getSetting(yb, bb) {
        var Wy;
        return null === (Wy = this.members.get(yb)) || void 0 === Wy ? void 0 : Wy.settings[bb]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);