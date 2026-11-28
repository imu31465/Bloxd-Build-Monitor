export const id = 281;
export const ids = [281];
export const modules = {
  42993: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      f: () => Xd
    });
    var Wd = md(2100);
    let Fd = !1;

    function Rd() {
      Fd = !0
    }

    function Xd() {
      Fd && (Fd = !1, (0, Wd.d)())
    }
  },
  42856: (dd, Od, md) => {
    md.d(Od, {
      C: () => fd,
      F: () => nd,
      H: () => sd,
      J: () => Gd,
      K: () => Sd,
      O: () => Id,
      S: () => ed,
      V: () => Vd,
      e: () => ld,
      h: () => Pd,
      l: () => xd,
      m: () => Cd,
      n: () => Bd,
      q: () => Ud,
      r: () => Ld,
      u: () => ud,
      v: () => rd,
      z: () => Ad
    });
    var Wd = md(1498),
      Fd = md(32),
      Rd = md(1349),
      Xd = md(3372),
      Kd = md(5590),
      hd = md(5558);
    let vd, Qd = !1,
      td = !1,
      od = !1,
      Nd = !1;
    const qd = 1300,
      Hd = 3e3;
    let yd = 0,
      bd = !1,
      Td = !1,
      pd = 0;
    const Yd = 2;
    let gd = !1,
      wd = !1;
    const Ed = new Set,
      Jd = new Set;

    function Ud() {
      return Qd
    }

    function xd() {
      return Td
    }

    function Bd() {
      return wd
    }

    function Sd() {
      return (0, Rd.y)() && !wd
    }

    function sd(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (dd !== wd) {
        wd = dd;
        for (const dd of [...Jd]) dd(wd);
        Od && ed()
      }
    }

    function ud(dd) {
      return Jd.add(dd), () => {
        Jd.delete(dd)
      }
    }

    function Vd() {
      (0, Kd.i)(Xd.w.Menu, (0, Rd.y)() ? 0 : Xd.w.Menu)
    }

    function Ad() {
      Td = !1, pd = 0, Vd(), ed()
    }

    function rd(dd) {
      return Ed.add(dd), () => {
        Ed.delete(dd)
      }
    }

    function Gd(dd) {
      td = !1, dd !== Qd && (Qd = dd, Nd = !1, clearTimeout(vd), od = !Qd && gd, Qd ? (bd = !1, Td = !1, pd = 0) : Sd() && !gd && (Td = !0), gd = !1, Qd && !Sd() && kd(), Md(), od && ed())
    }

    function nd(dd) {
      dd !== bd && (bd = dd, dd || ed())
    }

    function Ld() {
      td = !1, Nd || !0 !== jd() || (Nd = !0, clearTimeout(vd), vd = setTimeout(zd, qd))
    }

    function Pd() {
      return (!td || performance.now() - yd > Hd) && (td = (0, hd.O)().lockPointer(), yd = performance.now()), td
    }

    function zd() {
      cd() && Dd() && Pd()
    }

    function cd() {
      return Sd() && !Qd && !bd && !(0, Wd.m)()
    }

    function jd() {
      var dd;
      return "undefined" === typeof navigator || null === (dd = navigator.userActivation) || void 0 === dd ? void 0 : dd.isActive
    }

    function Dd() {
      return od && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== jd()
    }

    function ed() {
      Sd() ? cd() && !Td && Dd() && Pd() : Qd && !gd && kd()
    }

    function Id() {
      Td ? navigator.vendor.startsWith("Apple") ? Zd() : pd = Yd : ed()
    }

    function ld() {
      pd > 0 && 0 === --pd && Zd()
    }

    function Cd() {
      pd = 0
    }

    function Zd() {
      cd() && !0 === jd() && Pd()
    }

    function kd() {
      gd = !0, (0, hd.O)().unlockPointer()
    }

    function fd() {
      td = !1, od = !1, Nd = !1, clearTimeout(vd), bd = !1, Td = !1, pd = 0, gd = !1;
      const dd = Qd;
      Qd = !1, dd && Md()
    }

    function Md() {
      for (const dd of [...Ed]) dd(Qd);
      Fd.j.lQ("pointerLockUpdate", Qd)
    }
  },
  42827: (dd, Od, md) => {
    md.d(Od, {
      e: () => od,
      i: () => Kd,
      j: () => td,
      m: () => vd,
      q: () => Xd,
      t: () => Qd,
      x: () => hd
    });
    let Wd = null,
      Fd = null,
      Rd = null;

    function Xd(dd) {
      Wd = dd
    }

    function Kd() {
      return Wd
    }

    function hd(dd) {
      Fd = dd
    }

    function vd() {
      return Fd
    }

    function Qd(dd) {
      Rd = dd
    }

    function td() {
      return Rd
    }

    function od() {
      var dd, Od;
      return !0 === (null === (dd = Fd) || void 0 === dd || null === (Od = dd.currentViewer) || void 0 === Od ? void 0 : Od.inPlayback)
    }
  },
  42991: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      f: () => Rd,
      h: () => Kd
    });
    var Wd = md(42540),
      Fd = md(42552);

    function Rd(dd) {
      if (dd.queries.drawCensus() < Wd.Db.BYTES) return null;
      const Od = dd.memoryData(dd.scratch(), Wd.Db.BYTES, 4, "the draw census");
      return null === Od ? null : {
        terrainOpaque: Wd.Db.terrainOpaque(Od, 0),
        terrainTransparent: Wd.Db.terrainTransparent(Od, 0),
        terrainPack: Wd.Db.terrainPack(Od, 0),
        earthSky: Wd.Db.earthSky(Od, 0),
        skyMeshes: Wd.Db.skyMeshes(Od, 0),
        regular: Wd.Db.regular(Od, 0),
        thin: Wd.Db.thin(Od, 0),
        line: Wd.Db.line(Od, 0),
        text: Wd.Db.text(Od, 0),
        particles: Wd.Db.particles(Od, 0),
        terrainParts: Wd.Db.terrainParts(Od, 0),
        terrainCompiling: Wd.Db.terrainCompiling(Od, 0),
        ringCopiesMax: Wd.Db.ringCopiesMax(Od, 0),
        ringBusyWrites: Wd.Db.ringBusyWrites(Od, 0)
      }
    }

    function Xd(dd) {
      const {
        terrainOpaque: Od,
        terrainTransparent: md,
        earthSky: Wd,
        skyMeshes: Fd,
        regular: Rd,
        thin: Xd,
        line: Kd,
        text: hd,
        particles: vd
      } = dd;
      return Od + md + Wd + Fd + Rd + Xd + Kd + hd + vd
    }

    function Kd() {
      const dd = (0, Fd.l)();
      return !0 === (null === dd || void 0 === dd ? void 0 : dd.isCoreRunning) ? function(dd) {
        const Od = Rd(dd);
        if (null === Od) return [];
        const {
          terrainOpaque: md,
          terrainTransparent: Wd,
          terrainPack: Fd,
          earthSky: Kd,
          skyMeshes: hd,
          regular: vd,
          thin: Qd,
          line: td,
          text: od,
          particles: Nd
        } = Od;
        return [{
          label: "Drawn",
          value: `${Xd(Od)}`
        }, {
          label: "Terrain",
          value: `${md} opaque / ${Wd} transparent (${Fd} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${vd} / ${Qd}`
        }, {
          label: "Text / Lines",
          value: `${od} / ${td}`
        }, {
          label: "Sky / Particles",
          value: `${Kd+hd} / ${Nd}`
        }]
      }(dd.api) : []
    }
  },
  42977: (dd, Od, md) => {
    md.d(Od, {
      d: () => qd,
      h: () => od,
      j: () => Nd
    });
    var Wd = md(2106),
      Fd = md(1354),
      Rd = md(42552),
      Xd = md(42573),
      Kd = md(42578),
      hd = md(42602);
    const vd = new Fd.e;
    let Qd = !1;

    function td(dd) {
      const Od = (0, Rd.l)();
      return null !== Od && +dd === Od.api.localId
    }

    function od() {
      Qd || (Qd = !0, (0, hd.k)(Xd.l, (dd => {
        var Od, md;
        const Wd = (0, Kd.h)(Xd.l, dd);
        if (!(0, Kd.d)(Wd)) return;
        const Fd = Wd;
        td(Fd.MR) && Nd(Fd.dX, {
          icon: Fd.mX,
          level: Fd.FX,
          displayName: null !== (Od = Fd.OX) && void 0 !== Od ? Od : null,
          durationMs: null !== (md = Fd.WX) && void 0 !== md ? md : null
        })
      })), (0, hd.k)(Xd.S, (dd => {
        const Od = (0, Kd.h)(Xd.S, dd);
        if (!(0, Kd.d)(Od)) return;
        const md = Od;
        td(md.MR) && Wd.e.remove(md.dX)
      })), (0, hd.g)((() => {
        Wd.e.clear()
      })))
    }

    function Nd(dd, Od) {
      Wd.e.update(dd, Od), vd.forEach((Od => {
        Od(dd)
      }))
    }
    const qd = {
      localEffectUpdated: {
        watch: dd => vd.add(dd)
      }
    }
  },
  42983: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd
    });
    var Wd = md(5571),
      Fd = md(5568),
      Rd = md(42587),
      Xd = md(42602);
    const Kd = new Set(Wd.N),
      hd = Wd.N.map((dd => (new TextEncoder).encode(dd))),
      vd = new Map;

    function Qd(dd, Od) {
      var md;
      return null === (md = vd.get(dd)) || void 0 === md ? void 0 : md[Od]
    }(0, Xd.k)(Wd.hc.NewOtherEntitySettings, (dd => {
      dd.payloadKind === Fd.mc.Msgpack && hd.some((Od => function(dd, Od) {
        const md = Od[0];
        for (let Wd = dd.indexOf(md); - 1 !== Wd && Wd + Od.length <= dd.length; Wd = dd.indexOf(md, Wd + 1)) {
          let md = 1;
          for (; md < Od.length && dd[Wd + md] === Od[md];) md++;
          if (md === Od.length) return !0
        }
        return !1
      }(dd.payload, Od))) && function(dd) {
        if (null === dd || "object" !== typeof dd || null === dd.settings || "object" !== typeof dd.settings) return;
        const Od = String(dd.eId),
          md = dd.settings;
        let Wd = vd.get(Od);
        for (const Fd in md) {
          if (!Kd.has(Fd)) continue;
          const dd = md[Fd];
          null === dd || void 0 === dd ? Wd && delete Wd[Fd] : (Wd ??= {}, Wd[Fd] = dd)
        }
        Wd && vd.set(Od, Wd)
      }((0, Rd.b)(dd.payload))
    })), (0, Xd.g)((() => {
      vd.clear()
    }))
  },
  42972: (dd, Od, md) => {
    md.d(Od, {
      d: () => Nd,
      f: () => vd,
      i: () => td
    });
    var Wd = md(40565),
      Fd = md(2094),
      Rd = md(1354),
      Xd = md(42573),
      Kd = md(42578),
      hd = md(42602);
    const vd = new Wd.e;
    let Qd = {};

    function td(dd) {
      return Qd[dd]
    }
    const od = new Rd.e;

    function Nd(dd) {
      return od.add(dd)
    }

    function qd(dd) {
      od.callEach(dd, "a roster listener")
    }(0, hd.k)(Xd._, (dd => {
      const Od = (0, Kd.h)(Xd._, dd);
      if (void 0 === Od) return;
      const md = Od.EF.some((dd => {
          let {
            JF: Od,
            UF: md
          } = dd;
          return null !== md && vd.has(Od) && vd.getName(Od) !== md
        })),
        {
          added: Wd,
          removed: Rd,
          settingChanges: hd
        } = vd.apply(Od),
        Qd = new Set;
      for (const Fd of hd)
        for (const dd in Fd.settings) Qd.add(dd);
      const td = md || Wd.length > 0 || Rd.length > 0;
      (td || Qd.has("hideNameSeed")) && function() {
        const dd = new Map;
        for (const Od of vd.ids()) {
          const md = vd.getName(Od),
            Wd = vd.getSetting(Od, "hideNameSeed");
          void 0 !== md && void 0 !== Wd && null !== Wd && dd.set(md, Wd)
        }
        Fd.c.replaceAll(dd)
      }(), qd({
        kind: "roster",
        members: td,
        settings: Qd
      })
    })), (0, hd.k)(Xd.R, (dd => {
      const Od = (0, Kd.h)(Xd.R, dd);
      if (void 0 !== Od) {
        for (const {
            XF: dd,
            KF: md,
            hF: Wd
          }
          of Od) Qd[dd] = {
          ...Qd[dd],
          [md]: Wd
        };
        qd({
          kind: "cosmetics",
          updates: Od
        })
      }
    })), (0, hd.g)((() => {
      vd.clear(), Qd = {}, Fd.c.clear(), qd({
        kind: "reset"
      })
    })), (0, hd.i)((() => {
      vd.clear(), qd({
        kind: "reset"
      })
    }))
  },
  42986: (dd, Od, md) => {
    md.d(Od, {
      d: () => Bd,
      h: () => yd,
      l: () => Vd,
      n: () => Ad
    });
    var Wd = md(1322),
      Fd = md(693),
      Rd = md(107),
      Xd = md(5571),
      Kd = md(42540),
      hd = md(42567),
      vd = md(42552),
      Qd = md(42983),
      td = md(42972),
      od = md(42578),
      Nd = md(42602);

    function qd(dd) {
      let {
        deadEId: Od,
        killerEId: md,
        killerLifeformType: Wd,
        withItem: Fd,
        killstreak: Rd
      } = dd;
      return {
        killer: Yd({
          eId: md,
          lifeformType: Wd
        }),
        victim: Yd({
          eId: Od
        }),
        withItem: Fd,
        killstreak: Rd
      }
    }

    function Hd(dd) {
      let {
        killer: Od,
        victim: md,
        withItem: Wd
      } = dd;
      return {
        killer: Yd(Od),
        victim: Yd(md),
        withItem: Wd,
        killstreak: 0
      }
    }

    function yd(dd) {
      Jd && xd((() => "killed" === dd.kind ? qd(dd.body) : Hd(dd.body)))
    }
    const bd = "#2727f1",
      Td = "#912c2c";

    function pd(dd, Od) {
      var md;
      return td.f.has(dd) ? null === (md = td.f.getSettings(dd)) || void 0 === md ? void 0 : md[Od] : (0, Qd.d)(dd, Od)
    }

    function Yd(dd) {
      var Od, md, Xd, Kd, Qd;
      let {
        eId: od,
        name: Nd,
        colour: qd,
        lifeformType: Hd
      } = dd;
      if (void 0 === od || null === od || "" === od) {
        const dd = Nd || null;
        return {
          id: null,
          shownName: dd,
          lifeformType: null === dd && null !== Hd && void 0 !== Hd ? Hd : null,
          colour: qd || null,
          local: !1,
          realName: null
        }
      }
      const yd = String(od),
        Yd = null === (Od = (0, vd.l)()) || void 0 === Od ? void 0 : Od.api,
        gd = void 0 !== Yd && String(Yd.localId) === yd,
        wd = null !== (md = td.f.getName(yd)) && void 0 !== md ? md : null,
        Ed = null !== (Xd = pd(yd, "hideNameSeed")) && void 0 !== Xd ? Xd : null;
      let Jd = null === wd ? null : (0, Wd.b)(wd, !Rd.featureFlags.canSeeRealPlayerNames, Ed) || null,
        Ud = null;
      if (null === Jd && void 0 !== Yd) {
        const dd = Yd.getEntityType(yd);
        "Player" !== dd && (Jd = (0, hd.f)(Yd, +yd) || null), Ud = Fd.h.includes(dd) ? dd : null
      }
      return {
        id: yd,
        shownName: Jd,
        lifeformType: null === Jd && null !== (Kd = null !== (Qd = Ud) && void 0 !== Qd ? Qd : Hd) && void 0 !== Kd ? Kd : null,
        colour: qd || pd(yd, "killfeedColour") || (gd ? bd : Td),
        local: gd,
        realName: wd
      }
    }
    const gd = 32;
    let wd = [],
      Ed = null,
      Jd = !1,
      Ud = !1;

    function xd(dd) {
      null === Ed ? (wd.length === gd && wd.shift(), wd.push(dd)) : Ed(dd())
    }

    function Bd() {
      Ud || (Ud = !0, (0, Nd.k)(Xd.hc.PlayerKilled, (dd => {
        const Od = (0, od.k)(dd);
        (0, od.d)(Od) && xd((() => qd(Od)))
      })), (0, Nd.k)(Xd.hc.CustomKillfeed, (dd => {
        const Od = (0, od.k)(dd);
        (0, od.d)(Od) && (0, od.d)(Od.killer) && (0, od.d)(Od.victim) && xd((() => Hd(Od)))
      })), (0, Nd.g)((() => {
        wd = []
      })))
    }
    const Sd = Object.freeze([0, 0, 0]),
      sd = [0, 0, 0],
      ud = [0, 0, 0],
      Vd = {
        kill: {
          watch(dd) {
            if (Jd = !0, 0 === wd.length) return Ed = dd, () => {
              Jd = !1, Ed = null
            };
            const Od = setTimeout((() => {
              const Od = wd;
              wd = [], Ed = dd;
              for (const Wd of Od) try {
                dd(Wd())
              } catch (md) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", md)
              }
            }), 0);
            return () => {
              clearTimeout(Od), Jd = !1, Ed = null
            }
          }
        }
      },
      Ad = {
        localPos() {
          const dd = (0, vd.l)();
          if (null === dd) return Sd;
          const Od = dd.api.apiView;
          for (let md = 0; md < 3; md++) sd[md] = Kd.q.localPos(Od, 0, md);
          return sd
        },
        targetedBlockPos() {
          const dd = (0, vd.l)();
          if (null === dd || Kd.q.targetBlockId(dd.api.apiView, 0) === Kd.dd) return null;
          for (let Od = 0; Od < 3; Od++) ud[Od] = Kd.q.targetBlock(dd.api.apiView, 0, Od);
          return ud
        }
      }
  },
  40565: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor() {
        this.members = new Map
      }
      apply(dd) {
        const Od = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Wd of dd.EF) {
          let dd = this.members.get(Wd.JF);
          if (dd || (dd = {
              name: null,
              settings: {}
            }, this.members.set(Wd.JF, dd), Od.added.push(Wd.JF)), null !== Wd.UF && (dd.name = Wd.UF), null !== Wd.xF || Wd.BF.length > 0) {
            const md = null === Wd.xF ? {} : JSON.parse(Wd.xF);
            Object.assign(dd.settings, md);
            for (const Od of Wd.BF) delete dd.settings[Od], md[Od] = void 0;
            Od.settingChanges.push({
              playerId: Wd.JF,
              settings: md
            })
          }
        }
        for (const Wd of dd.SF) {
          const dd = this.members.get(Wd);
          var md;
          if (dd) this.members.delete(Wd), Od.removed.push({
            playerId: Wd,
            name: null !== (md = dd.name) && void 0 !== md ? md : void 0
          })
        }
        return Od
      }
      has(dd) {
        return this.members.has(dd)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(dd) {
        var Od, md;
        return null !== (Od = null === (md = this.members.get(dd)) || void 0 === md ? void 0 : md.name) && void 0 !== Od ? Od : void 0
      }
      getSettings(dd) {
        var Od;
        return null === (Od = this.members.get(dd)) || void 0 === Od ? void 0 : Od.settings
      }
      getSetting(dd, Od) {
        var md;
        return null === (md = this.members.get(dd)) || void 0 === md ? void 0 : md.settings[Od]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);