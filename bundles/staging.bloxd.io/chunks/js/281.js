export const id = 281;
export const ids = [281];
export const modules = {
  42904: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      d: () => jr
    });
    var Zr = Qr(2098);
    let Wr = !1;

    function ar() {
      Wr = !0
    }

    function jr() {
      Wr && (Wr = !1, (0, Zr.b)())
    }
  },
  42751: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => Cr,
      G: () => Xr,
      H: () => gr,
      K: () => lr,
      L: () => cr,
      O: () => wr,
      S: () => Hr,
      b: () => Fr,
      e: () => Gr,
      g: () => Or,
      i: () => or,
      m: () => Lr,
      n: () => vr,
      o: () => Mr,
      r: () => Pr,
      v: () => Rr,
      x: () => qr,
      y: () => Dr
    });
    var Zr = Qr(1518),
      Wr = Qr(34),
      ar = Qr(1353),
      jr = Qr(3372),
      Ir = Qr(5628),
      fr = Qr(5602);
    let Er, pr = !1,
      xr = !1,
      mr = !1,
      Nr = !1;
    const Ur = 1300,
      tr = 3e3;
    let hr = 0,
      zr = !1,
      Yr = !1,
      nr = 0;
    const er = 2;
    let Kr = !1,
      yr = !1;
    const Br = new Set,
      Tr = new Set;

    function vr() {
      return pr
    }

    function Or() {
      return Yr
    }

    function Lr() {
      return yr
    }

    function lr() {
      return (0, ar.v)() && !yr
    }

    function Xr(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (rr !== yr) {
        yr = rr;
        for (const rr of [...Tr]) rr(yr);
        Sr && wr()
      }
    }

    function Pr(rr) {
      return Tr.add(rr), () => {
        Tr.delete(rr)
      }
    }

    function Hr() {
      (0, Ir.f)(jr.y.Menu, (0, ar.v)() ? 0 : jr.y.Menu)
    }

    function qr() {
      Yr = !1, nr = 0, Hr(), wr()
    }

    function Rr(rr) {
      return Br.add(rr), () => {
        Br.delete(rr)
      }
    }

    function gr(rr) {
      xr = !1, rr !== pr && (pr = rr, Nr = !1, clearTimeout(Er), mr = !pr && Kr, pr ? (zr = !1, Yr = !1, nr = 0) : lr() && !Kr && (Yr = !0), Kr = !1, pr && !lr() && Jr(), dr(), mr && wr())
    }

    function Cr(rr) {
      rr !== zr && (zr = rr, rr || wr())
    }

    function Mr() {
      xr = !1, Nr || !0 !== Vr() || (Nr = !0, clearTimeout(Er), Er = setTimeout(kr, Ur))
    }

    function Gr() {
      return (!xr || performance.now() - hr > tr) && (xr = (0, fr.N)().lockPointer(), hr = performance.now()), xr
    }

    function kr() {
      Ar() && ir() && Gr()
    }

    function Ar() {
      return lr() && !pr && !zr && !(0, Zr.j)()
    }

    function Vr() {
      var rr;
      return "undefined" === typeof navigator || null === (rr = navigator.userActivation) || void 0 === rr ? void 0 : rr.isActive
    }

    function ir() {
      return mr && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Vr()
    }

    function wr() {
      lr() ? Ar() && !Yr && ir() && Gr() : pr && !Kr && Jr()
    }

    function cr() {
      Yr ? navigator.vendor.startsWith("Apple") ? br() : nr = er : wr()
    }

    function Fr() {
      nr > 0 && 0 === --nr && br()
    }

    function or() {
      nr = 0
    }

    function br() {
      Ar() && !0 === Vr() && Gr()
    }

    function Jr() {
      Kr = !0, (0, fr.N)().unlockPointer()
    }

    function Dr() {
      xr = !1, mr = !1, Nr = !1, clearTimeout(Er), zr = !1, Yr = !1, nr = 0, Kr = !1;
      const rr = pr;
      pr = !1, rr && dr()
    }

    function dr() {
      for (const rr of [...Br]) rr(pr);
      Wr.i.Jp("pointerLockUpdate", pr)
    }
  },
  42726: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      h: () => Ir,
      i: () => xr,
      l: () => Er,
      o: () => jr,
      r: () => pr,
      t: () => fr
    });
    let Zr = null,
      Wr = null,
      ar = null;

    function jr(rr) {
      Zr = rr
    }

    function Ir() {
      return Zr
    }

    function fr(rr) {
      Wr = rr
    }

    function Er() {
      return Wr
    }

    function pr(rr) {
      ar = rr
    }

    function xr() {
      return ar
    }

    function mr() {
      var rr, Sr;
      return !0 === (null === (rr = Wr) || void 0 === rr || null === (Sr = rr.currentViewer) || void 0 === Sr ? void 0 : Sr.inPlayback)
    }
  },
  42895: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar,
      i: () => Ir
    });
    var Zr = Qr(42438),
      Wr = Qr(42451);

    function ar(rr) {
      if (rr.queries.drawCensus() < Zr.lb.BYTES) return null;
      const Sr = rr.memoryData(rr.scratch(), Zr.lb.BYTES, 4, "the draw census");
      return null === Sr ? null : {
        terrainOpaque: Zr.lb.terrainOpaque(Sr, 0),
        terrainTransparent: Zr.lb.terrainTransparent(Sr, 0),
        terrainPack: Zr.lb.terrainPack(Sr, 0),
        earthSky: Zr.lb.earthSky(Sr, 0),
        skyMeshes: Zr.lb.skyMeshes(Sr, 0),
        regular: Zr.lb.regular(Sr, 0),
        thin: Zr.lb.thin(Sr, 0),
        line: Zr.lb.line(Sr, 0),
        text: Zr.lb.text(Sr, 0),
        particles: Zr.lb.particles(Sr, 0),
        terrainParts: Zr.lb.terrainParts(Sr, 0),
        terrainCompiling: Zr.lb.terrainCompiling(Sr, 0),
        ringCopiesMax: Zr.lb.ringCopiesMax(Sr, 0),
        ringBusyWrites: Zr.lb.ringBusyWrites(Sr, 0)
      }
    }

    function jr(rr) {
      const {
        terrainOpaque: Sr,
        terrainTransparent: Qr,
        earthSky: Zr,
        skyMeshes: Wr,
        regular: ar,
        thin: jr,
        line: Ir,
        text: fr,
        particles: Er
      } = rr;
      return Sr + Qr + Zr + Wr + ar + jr + Ir + fr + Er
    }

    function Ir() {
      const rr = (0, Wr.f)();
      return !0 === (null === rr || void 0 === rr ? void 0 : rr.isCoreRunning) ? function(rr) {
        const Sr = ar(rr);
        if (null === Sr) return [];
        const {
          terrainOpaque: Qr,
          terrainTransparent: Zr,
          terrainPack: Wr,
          earthSky: Ir,
          skyMeshes: fr,
          regular: Er,
          thin: pr,
          line: xr,
          text: mr,
          particles: Nr
        } = Sr;
        return [{
          label: "Drawn",
          value: `${jr(Sr)}`
        }, {
          label: "Terrain",
          value: `${Qr} opaque / ${Zr} transparent (${Wr} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Er} / ${pr}`
        }, {
          label: "Text / Lines",
          value: `${mr} / ${xr}`
        }, {
          label: "Sky / Particles",
          value: `${Ir+fr} / ${Nr}`
        }]
      }(rr.api) : []
    }
  },
  42880: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ur,
      g: () => mr,
      i: () => Nr
    });
    var Zr = Qr(2103),
      Wr = Qr(1357),
      ar = Qr(42451),
      jr = Qr(42477),
      Ir = Qr(42479),
      fr = Qr(42495);
    const Er = new Wr.e;
    let pr = !1;

    function xr(rr) {
      const Sr = (0, ar.f)();
      return null !== Sr && +rr === Sr.api.localId
    }

    function mr() {
      pr || (pr = !0, (0, fr.j)(jr.m, (rr => {
        var Sr, Qr;
        const Zr = (0, Ir.d)(jr.m, rr);
        if (!(0, Ir.b)(Zr)) return;
        const Wr = Zr;
        xr(Wr.ua) && Nr(Wr.rj, {
          icon: Wr.Qj,
          level: Wr.Wj,
          displayName: null !== (Sr = Wr.Sj) && void 0 !== Sr ? Sr : null,
          durationMs: null !== (Qr = Wr.Zj) && void 0 !== Qr ? Qr : null
        })
      })), (0, fr.j)(jr.O, (rr => {
        const Sr = (0, Ir.d)(jr.O, rr);
        if (!(0, Ir.b)(Sr)) return;
        const Qr = Sr;
        xr(Qr.ua) && Zr.b.remove(Qr.rj)
      })), (0, fr.d)((() => {
        Zr.b.clear()
      })))
    }

    function Nr(rr, Sr) {
      Zr.b.update(rr, Sr), Er.forEach((Sr => {
        Sr(rr)
      }))
    }
    const Ur = {
      localEffectUpdated: {
        watch: rr => Er.add(rr)
      }
    }
  },
  42884: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => pr
    });
    var Zr = Qr(5617),
      Wr = Qr(5610),
      ar = Qr(42485),
      jr = Qr(42495);
    const Ir = new Set(Zr.N),
      fr = Zr.N.map((rr => (new TextEncoder).encode(rr))),
      Er = new Map;

    function pr(rr, Sr) {
      var Qr;
      return null === (Qr = Er.get(rr)) || void 0 === Qr ? void 0 : Qr[Sr]
    }(0, jr.j)(Zr.pc.NewOtherEntitySettings, (rr => {
      rr.payloadKind === Wr.nc.Msgpack && fr.some((Sr => function(rr, Sr) {
        const Qr = Sr[0];
        for (let Zr = rr.indexOf(Qr); - 1 !== Zr && Zr + Sr.length <= rr.length; Zr = rr.indexOf(Qr, Zr + 1)) {
          let Qr = 1;
          for (; Qr < Sr.length && rr[Zr + Qr] === Sr[Qr];) Qr++;
          if (Qr === Sr.length) return !0
        }
        return !1
      }(rr.payload, Sr))) && function(rr) {
        if (null === rr || "object" !== typeof rr || null === rr.settings || "object" !== typeof rr.settings) return;
        const Sr = String(rr.eId),
          Qr = rr.settings;
        let Zr = Er.get(Sr);
        for (const Wr in Qr) {
          if (!Ir.has(Wr)) continue;
          const rr = Qr[Wr];
          null === rr || void 0 === rr ? Zr && delete Zr[Wr] : (Zr ??= {}, Zr[Wr] = rr)
        }
        Zr && Er.set(Sr, Zr)
      }((0, ar.d)(rr.payload))
    })), (0, jr.d)((() => {
      Er.clear()
    }))
  },
  42876: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Nr,
      g: () => Er,
      j: () => xr
    });
    var Zr = Qr(40568),
      Wr = Qr(2093),
      ar = Qr(1357),
      jr = Qr(42477),
      Ir = Qr(42479),
      fr = Qr(42495);
    const Er = new Zr.b;
    let pr = {};

    function xr(rr) {
      return pr[rr]
    }
    const mr = new ar.e;

    function Nr(rr) {
      return mr.add(rr)
    }

    function Ur(rr) {
      mr.callEach(rr, "a roster listener")
    }(0, fr.j)(jr._, (rr => {
      const Sr = (0, Ir.d)(jr._, rr);
      if (void 0 === Sr) return;
      const Qr = Sr.vW.some((rr => {
          let {
            OW: Sr,
            LW: Qr
          } = rr;
          return null !== Qr && Er.has(Sr) && Er.getName(Sr) !== Qr
        })),
        {
          added: Zr,
          removed: ar,
          settingChanges: fr
        } = Er.apply(Sr),
        pr = new Set;
      for (const Wr of fr)
        for (const rr in Wr.settings) pr.add(rr);
      const xr = Qr || Zr.length > 0 || ar.length > 0;
      (xr || pr.has("hideNameSeed")) && function() {
        const rr = new Map;
        for (const Sr of Er.ids()) {
          const Qr = Er.getName(Sr),
            Zr = Er.getSetting(Sr, "hideNameSeed");
          void 0 !== Qr && void 0 !== Zr && null !== Zr && rr.set(Qr, Zr)
        }
        Wr.b.replaceAll(rr)
      }(), Ur({
        kind: "roster",
        members: xr,
        settings: pr
      })
    })), (0, fr.j)(jr.M, (rr => {
      const Sr = (0, Ir.d)(jr.M, rr);
      if (void 0 !== Sr) {
        for (const {
            IW: rr,
            fW: Qr,
            EW: Zr
          }
          of Sr) pr[rr] = {
          ...pr[rr],
          [Qr]: Zr
        };
        Ur({
          kind: "cosmetics",
          updates: Sr
        })
      }
    })), (0, fr.d)((() => {
      Er.clear(), pr = {}, Wr.b.clear(), Ur({
        kind: "reset"
      })
    })), (0, fr.f)((() => {
      Er.clear(), Ur({
        kind: "reset"
      })
    }))
  },
  42890: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Lr,
      f: () => hr,
      i: () => Hr,
      l: () => qr
    });
    var Zr = Qr(1321),
      Wr = Qr(679),
      ar = Qr(109),
      jr = Qr(5617),
      Ir = Qr(42438),
      fr = Qr(42472),
      Er = Qr(42451),
      pr = Qr(42884),
      xr = Qr(42876),
      mr = Qr(42479),
      Nr = Qr(42495);

    function Ur(rr) {
      let {
        deadEId: Sr,
        killerEId: Qr,
        killerLifeformType: Zr,
        withItem: Wr,
        killstreak: ar
      } = rr;
      return {
        killer: er({
          eId: Qr,
          lifeformType: Zr
        }),
        victim: er({
          eId: Sr
        }),
        withItem: Wr,
        killstreak: ar
      }
    }

    function tr(rr) {
      let {
        killer: Sr,
        victim: Qr,
        withItem: Zr
      } = rr;
      return {
        killer: er(Sr),
        victim: er(Qr),
        withItem: Zr,
        killstreak: 0
      }
    }

    function hr(rr) {
      Tr && Or((() => "killed" === rr.kind ? Ur(rr.body) : tr(rr.body)))
    }
    const zr = "#2727f1",
      Yr = "#912c2c";

    function nr(rr, Sr) {
      var Qr;
      return xr.g.has(rr) ? null === (Qr = xr.g.getSettings(rr)) || void 0 === Qr ? void 0 : Qr[Sr] : (0, pr.b)(rr, Sr)
    }

    function er(rr) {
      var Sr, Qr, jr, Ir, pr;
      let {
        eId: mr,
        name: Nr,
        colour: Ur,
        lifeformType: tr
      } = rr;
      if (void 0 === mr || null === mr || "" === mr) {
        const rr = Nr || null;
        return {
          id: null,
          shownName: rr,
          lifeformType: null === rr && null !== tr && void 0 !== tr ? tr : null,
          colour: Ur || null,
          local: !1,
          realName: null
        }
      }
      const hr = String(mr),
        er = null === (Sr = (0, Er.f)()) || void 0 === Sr ? void 0 : Sr.api,
        Kr = void 0 !== er && String(er.localId) === hr,
        yr = null !== (Qr = xr.g.getName(hr)) && void 0 !== Qr ? Qr : null,
        Br = null !== (jr = nr(hr, "hideNameSeed")) && void 0 !== jr ? jr : null;
      let Tr = null === yr ? null : (0, Zr.e)(yr, !ar.featureFlags.canSeeRealPlayerNames, Br) || null,
        vr = null;
      if (null === Tr && void 0 !== er) {
        const rr = er.getEntityType(hr);
        "Player" !== rr && (Tr = (0, fr.j)(er, +hr) || null), vr = Wr.n.includes(rr) ? rr : null
      }
      return {
        id: hr,
        shownName: Tr,
        lifeformType: null === Tr && null !== (Ir = null !== (pr = vr) && void 0 !== pr ? pr : tr) && void 0 !== Ir ? Ir : null,
        colour: Ur || nr(hr, "killfeedColour") || (Kr ? zr : Yr),
        local: Kr,
        realName: yr
      }
    }
    const Kr = 32;
    let yr = [],
      Br = null,
      Tr = !1,
      vr = !1;

    function Or(rr) {
      null === Br ? (yr.length === Kr && yr.shift(), yr.push(rr)) : Br(rr())
    }

    function Lr() {
      vr || (vr = !0, (0, Nr.j)(jr.pc.PlayerKilled, (rr => {
        const Sr = (0, mr.f)(rr);
        (0, mr.b)(Sr) && Or((() => Ur(Sr)))
      })), (0, Nr.j)(jr.pc.CustomKillfeed, (rr => {
        const Sr = (0, mr.f)(rr);
        (0, mr.b)(Sr) && (0, mr.b)(Sr.killer) && (0, mr.b)(Sr.victim) && Or((() => tr(Sr)))
      })), (0, Nr.d)((() => {
        yr = []
      })))
    }
    const lr = Object.freeze([0, 0, 0]),
      Xr = [0, 0, 0],
      Pr = [0, 0, 0],
      Hr = {
        kill: {
          watch(rr) {
            if (Tr = !0, 0 === yr.length) return Br = rr, () => {
              Tr = !1, Br = null
            };
            const Sr = setTimeout((() => {
              const Sr = yr;
              yr = [], Br = rr;
              for (const Zr of Sr) try {
                rr(Zr())
              } catch (Qr) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", Qr)
              }
            }), 0);
            return () => {
              clearTimeout(Sr), Tr = !1, Br = null
            }
          }
        }
      },
      qr = {
        localPos() {
          const rr = (0, Er.f)();
          if (null === rr) return lr;
          const Sr = rr.api.apiView;
          for (let Qr = 0; Qr < 3; Qr++) Xr[Qr] = Ir.p.localPos(Sr, 0, Qr);
          return Xr
        },
        targetedBlockPos() {
          const rr = (0, Er.f)();
          if (null === rr || Ir.p.targetBlockId(rr.api.apiView, 0) === Ir.Oc) return null;
          for (let Sr = 0; Sr < 3; Sr++) Pr[Sr] = Ir.p.targetBlock(rr.api.apiView, 0, Sr);
          return Pr
        }
      }
  },
  40568: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor() {
        this.members = new Map
      }
      apply(rr) {
        const Sr = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Zr of rr.vW) {
          let rr = this.members.get(Zr.OW);
          if (rr || (rr = {
              name: null,
              settings: {}
            }, this.members.set(Zr.OW, rr), Sr.added.push(Zr.OW)), null !== Zr.LW && (rr.name = Zr.LW), null !== Zr.lW || Zr.XW.length > 0) {
            const Qr = null === Zr.lW ? {} : JSON.parse(Zr.lW);
            Object.assign(rr.settings, Qr);
            for (const Sr of Zr.XW) delete rr.settings[Sr], Qr[Sr] = void 0;
            Sr.settingChanges.push({
              playerId: Zr.OW,
              settings: Qr
            })
          }
        }
        for (const Zr of rr.PW) {
          const rr = this.members.get(Zr);
          var Qr;
          if (rr) this.members.delete(Zr), Sr.removed.push({
            playerId: Zr,
            name: null !== (Qr = rr.name) && void 0 !== Qr ? Qr : void 0
          })
        }
        return Sr
      }
      has(rr) {
        return this.members.has(rr)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(rr) {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = this.members.get(rr)) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : void 0
      }
      getSettings(rr) {
        var Sr;
        return null === (Sr = this.members.get(rr)) || void 0 === Sr ? void 0 : Sr.settings
      }
      getSetting(rr, Sr) {
        var Qr;
        return null === (Qr = this.members.get(rr)) || void 0 === Qr ? void 0 : Qr.settings[Sr]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);