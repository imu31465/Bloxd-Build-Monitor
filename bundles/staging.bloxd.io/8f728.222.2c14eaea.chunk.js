export const id = 222;
export const ids = [222];
export const modules = {
  38754: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      e: () => uc
    });
    var Vc = nc(1579);
    let Ic = !1;

    function rB() {
      Ic = !0
    }

    function uc() {
      Ic && (Ic = !1, (0, Vc.c)())
    }
  },
  38718: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => mB,
      d: () => Tc,
      h: () => fc
    });
    var Vc = nc(1587),
      Ic = nc(1150),
      rB = nc(38598),
      uc = nc(38623),
      sc = nc(38626),
      Mc = nc(38642);
    const Pc = new Ic.b;
    let qB = !1;

    function Oc(cB) {
      const Bc = (0, rB.e)();
      return null !== Bc && +cB === Bc.api.localId
    }

    function Tc() {
      qB || (qB = !0, (0, Mc.l)(uc.r, (cB => {
        var Bc, nc;
        const Vc = (0, sc.f)(uc.r, cB);
        if (!(0, sc.d)(Vc)) return;
        const Ic = Vc;
        Oc(Ic.pE) && fc(Ic.lE, {
          icon: Ic.VK,
          level: Ic.sK,
          displayName: null !== (Bc = Ic.ZE) && void 0 !== Bc ? Bc : null,
          durationMs: null !== (nc = Ic.IK) && void 0 !== nc ? nc : null
        })
      })), (0, Mc.l)(uc.U, (cB => {
        const Bc = (0, sc.f)(uc.U, cB);
        if (!(0, sc.d)(Bc)) return;
        const nc = Bc;
        Oc(nc.pE) && Vc.c.remove(nc.lE)
      })), (0, Mc.i)((() => {
        Vc.c.clear()
      })))
    }

    function fc(cB, Bc) {
      Vc.c.update(cB, Bc), Pc.forEach((Bc => {
        Bc(cB)
      }))
    }
    const mB = {
      localEffectUpdated: {
        watch: cB => Pc.add(cB)
      }
    }
  },
  38724: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB
    });
    var Vc = nc(3846),
      Ic = nc(3838),
      rB = nc(38629),
      uc = nc(38642);
    const sc = new Set(Vc.y),
      Mc = Vc.y.map((cB => (new TextEncoder).encode(cB))),
      Pc = new Map;

    function qB(cB, Bc) {
      var nc;
      return null === (nc = Pc.get(cB)) || void 0 === nc ? void 0 : nc[Bc]
    }(0, uc.l)(Vc.Nb.NewOtherEntitySettings, (cB => {
      cB.payloadKind === Ic.Mb.Msgpack && Mc.some((Bc => function(cB, Bc) {
        const nc = Bc[0];
        for (let Vc = cB.indexOf(nc); - 1 !== Vc && Vc + Bc.length <= cB.length; Vc = cB.indexOf(nc, Vc + 1)) {
          let nc = 1;
          for (; nc < Bc.length && cB[Vc + nc] === Bc[nc];) nc++;
          if (nc === Bc.length) return !0
        }
        return !1
      }(cB.payload, Bc))) && function(cB) {
        if (null === cB || "object" !== typeof cB || null === cB.settings || "object" !== typeof cB.settings) return;
        const Bc = String(cB.eId),
          nc = cB.settings;
        let Vc = Pc.get(Bc);
        for (const Ic in nc) {
          if (!sc.has(Ic)) continue;
          const cB = nc[Ic];
          null === cB || void 0 === cB ? Vc && delete Vc[Ic] : (Vc ??= {}, Vc[Ic] = cB)
        }
        Vc && Pc.set(Bc, Vc)
      }((0, rB.c)(cB.payload))
    })), (0, uc.i)((() => {
      Pc.clear()
    }))
  },
  38709: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => fc,
      g: () => Pc,
      j: () => Oc
    });
    var Vc = nc(37503),
      Ic = nc(1572),
      rB = nc(1150),
      uc = nc(38623),
      sc = nc(38626),
      Mc = nc(38642);
    const Pc = new Vc.e;
    let qB = {};

    function Oc(cB) {
      return qB[cB]
    }
    const Tc = new rB.b;

    function fc(cB) {
      return Tc.add(cB)
    }

    function mB(cB) {
      Tc.callEach(cB, "a roster listener")
    }(0, Mc.l)(uc.eb, (cB => {
      const Bc = (0, sc.f)(uc.eb, cB);
      if (void 0 === Bc) return;
      const nc = Bc.mBc.some((cB => {
          let {
            ecc: Bc,
            tBc: nc
          } = cB;
          return null !== nc && Pc.has(Bc) && Pc.getName(Bc) !== nc
        })),
        {
          added: Vc,
          removed: rB,
          settingChanges: Mc
        } = Pc.apply(Bc),
        qB = new Set;
      for (const Ic of Mc)
        for (const cB in Ic.settings) qB.add(cB);
      const Oc = nc || Vc.length > 0 || rB.length > 0;
      (Oc || qB.has("hideNameSeed")) && function() {
        const cB = new Map;
        for (const Bc of Pc.ids()) {
          const nc = Pc.getName(Bc),
            Vc = Pc.getSetting(Bc, "hideNameSeed");
          void 0 !== nc && void 0 !== Vc && null !== Vc && cB.set(nc, Vc)
        }
        Ic.d.replaceAll(cB)
      }(), mB({
        kind: "roster",
        members: Oc,
        settings: qB
      })
    })), (0, Mc.l)(uc.Q, (cB => {
      const Bc = (0, sc.f)(uc.Q, cB);
      if (void 0 !== Bc) {
        for (const {
            A3: cB,
            RZ: nc,
            cC: Vc
          }
          of Bc) qB[cB] = {
          ...qB[cB],
          [nc]: Vc
        };
        mB({
          kind: "cosmetics",
          updates: Bc
        })
      }
    })), (0, Mc.i)((() => {
      Pc.clear(), qB = {}, Ic.d.clear(), mB({
        kind: "reset"
      })
    }))
  },
  38740: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Uc,
      i: () => tB,
      k: () => Qc,
      m: () => Cc
    });
    var Vc = nc(1128),
      Ic = nc(556),
      rB = nc(107),
      uc = nc(3846),
      sc = nc(38582),
      Mc = nc(38614),
      Pc = nc(38598),
      qB = nc(38724),
      Oc = nc(38709),
      Tc = nc(38626),
      fc = nc(38642);

    function mB(cB) {
      let {
        deadEId: Bc,
        killerEId: nc,
        killerLifeformType: Vc,
        withItem: Ic,
        killstreak: rB
      } = cB;
      return {
        killer: pc({
          eId: nc,
          lifeformType: Vc
        }),
        victim: pc({
          eId: Bc
        }),
        withItem: Ic,
        killstreak: rB
      }
    }

    function ec(cB) {
      let {
        killer: Bc,
        victim: nc,
        withItem: Vc
      } = cB;
      return {
        killer: pc(Bc),
        victim: pc(nc),
        withItem: Vc,
        killstreak: 0
      }
    }

    function tB(cB) {
      Yc && gB((() => "killed" === cB.kind ? mB(cB.body) : ec(cB.body)))
    }
    const Sc = "#2727f1",
      yB = "#912c2c";

    function zB(cB, Bc) {
      var nc;
      return Oc.g.has(cB) ? null === (nc = Oc.g.getSettings(cB)) || void 0 === nc ? void 0 : nc[Bc] : (0, qB.d)(cB, Bc)
    }

    function pc(cB) {
      var Bc, nc, uc, sc, qB;
      let {
        eId: Tc,
        name: fc,
        colour: mB,
        lifeformType: ec
      } = cB;
      if (void 0 === Tc || null === Tc || "" === Tc) {
        const cB = fc || null;
        return {
          id: null,
          shownName: cB,
          lifeformType: null === cB && null !== ec && void 0 !== ec ? ec : null,
          colour: mB || null,
          local: !1,
          realName: null
        }
      }
      const tB = String(Tc),
        pc = null === (Bc = (0, Pc.e)()) || void 0 === Bc ? void 0 : Bc.api,
        hc = void 0 !== pc && String(pc.localId) === tB,
        aB = null !== (nc = Oc.g.getName(tB)) && void 0 !== nc ? nc : null,
        lc = null !== (uc = zB(tB, "hideNameSeed")) && void 0 !== uc ? uc : null;
      let Yc = null === aB ? null : (0, Vc.d)(aB, !rB.featureFlags.canSeeRealPlayerNames, lc) || null,
        Lc = null;
      if (null === Yc && void 0 !== pc) {
        const cB = pc.getEntityType(tB);
        "Player" !== cB && (Yc = (0, Mc.d)(pc, +tB) || null), Lc = Ic.i.includes(cB) ? cB : null
      }
      return {
        id: tB,
        shownName: Yc,
        lifeformType: null === Yc && null !== (sc = null !== (qB = Lc) && void 0 !== qB ? qB : ec) && void 0 !== sc ? sc : null,
        colour: mB || zB(tB, "killfeedColour") || (hc ? Sc : yB),
        local: hc,
        realName: aB
      }
    }
    const hc = 32;
    let aB = [],
      lc = null,
      Yc = !1,
      Lc = !1;

    function gB(cB) {
      null === lc ? (aB.length === hc && aB.shift(), aB.push(cB)) : lc(cB())
    }

    function Uc() {
      Lc || (Lc = !0, (0, fc.l)(uc.Nb.PlayerKilled, (cB => {
        const Bc = (0, Tc.i)(cB);
        (0, Tc.d)(Bc) && gB((() => mB(Bc)))
      })), (0, fc.l)(uc.Nb.CustomKillfeed, (cB => {
        const Bc = (0, Tc.i)(cB);
        (0, Tc.d)(Bc) && (0, Tc.d)(Bc.killer) && (0, Tc.d)(Bc.victim) && gB((() => ec(Bc)))
      })), (0, fc.i)((() => {
        aB = []
      })))
    }
    const bB = Object.freeze([0, 0, 0]),
      Zc = [0, 0, 0],
      Qc = {
        kill: {
          watch(cB) {
            if (Yc = !0, 0 === aB.length) return lc = cB, () => {
              Yc = !1, lc = null
            };
            const Bc = setTimeout((() => {
              const Bc = aB;
              aB = [], lc = cB;
              for (const Vc of Bc) try {
                cB(Vc())
              } catch (nc) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", nc)
              }
            }), 0);
            return () => {
              clearTimeout(Bc), Yc = !1, lc = null
            }
          }
        }
      },
      Cc = {
        localPos() {
          const cB = (0, Pc.e)();
          if (null === cB) return bB;
          const Bc = cB.api.apiView;
          for (let nc = 0; nc < 3; nc++) Zc[nc] = sc.v.localPos(Bc, 0, nc);
          return Zc
        }
      }
  },
  37503: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      constructor() {
        this.members = new Map
      }
      apply(cB) {
        const Bc = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Vc of cB.mBc) {
          let cB = this.members.get(Vc.ecc);
          if (cB || (cB = {
              name: null,
              settings: {}
            }, this.members.set(Vc.ecc, cB), Bc.added.push(Vc.ecc)), null !== Vc.tBc && (cB.name = Vc.tBc), null !== Vc.Scc || Vc.yBc.length > 0) {
            const nc = null === Vc.Scc ? {} : JSON.parse(Vc.Scc);
            Object.assign(cB.settings, nc);
            for (const Bc of Vc.yBc) delete cB.settings[Bc], nc[Bc] = void 0;
            Bc.settingChanges.push({
              playerId: Vc.ecc,
              settings: nc
            })
          }
        }
        for (const Vc of cB.zBc) {
          const cB = this.members.get(Vc);
          var nc;
          if (cB) this.members.delete(Vc), Bc.removed.push({
            playerId: Vc,
            name: null !== (nc = cB.name) && void 0 !== nc ? nc : void 0
          })
        }
        return Bc
      }
      has(cB) {
        return this.members.has(cB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(cB) {
        var Bc, nc;
        return null !== (Bc = null === (nc = this.members.get(cB)) || void 0 === nc ? void 0 : nc.name) && void 0 !== Bc ? Bc : void 0
      }
      getSettings(cB) {
        var Bc;
        return null === (Bc = this.members.get(cB)) || void 0 === Bc ? void 0 : Bc.settings
      }
      getSetting(cB, Bc) {
        var nc;
        return null === (nc = this.members.get(cB)) || void 0 === nc ? void 0 : nc.settings[Bc]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);