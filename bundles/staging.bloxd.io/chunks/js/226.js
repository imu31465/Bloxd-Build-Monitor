export const id = 226;
export const ids = [226];
export const modules = {
  39459: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      h: () => lB
    });
    var VB = dB(1694);
    let yB = !1;

    function pB() {
      yB = !0
    }

    function lB() {
      yB && (yB = !1, (0, VB.c)())
    }
  },
  39428: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => DB,
      f: () => LB,
      h: () => OB
    });
    var VB = dB(1703),
      yB = dB(1180),
      pB = dB(39322),
      lB = dB(39346),
      JB = dB(39348),
      YB = dB(39372);
    const gB = new yB.b;
    let oB = !1;

    function kB(BB) {
      const TB = (0, pB.i)();
      return null !== TB && +BB === TB.api.localId
    }

    function LB() {
      oB || (oB = !0, (0, YB.n)(lB.o, (BB => {
        var TB, dB;
        const VB = (0, JB.f)(lB.o, BB);
        if (!(0, JB.e)(VB)) return;
        const yB = VB;
        kB(yB.aT) && OB(yB.ZT, {
          icon: yB.WT,
          level: yB.CT,
          displayName: null !== (TB = yB.XT) && void 0 !== TB ? TB : null,
          durationMs: null !== (dB = yB.hT) && void 0 !== dB ? dB : null
        })
      })), (0, YB.n)(lB.R, (BB => {
        const TB = (0, JB.f)(lB.R, BB);
        if (!(0, JB.e)(TB)) return;
        const dB = TB;
        kB(dB.aT) && VB.b.remove(dB.ZT)
      })), (0, YB.i)((() => {
        VB.b.clear()
      })))
    }

    function OB(BB, TB) {
      VB.b.update(BB, TB), gB.forEach((TB => {
        TB(BB)
      }))
    }
    const DB = {
      localEffectUpdated: {
        watch: BB => gB.add(BB)
      }
    }
  },
  39431: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => oB
    });
    var VB = dB(4192),
      yB = dB(4186),
      pB = dB(39356),
      lB = dB(39372);
    const JB = new Set(VB.G),
      YB = VB.G.map((BB => (new TextEncoder).encode(BB))),
      gB = new Map;

    function oB(BB, TB) {
      var dB;
      return null === (dB = gB.get(BB)) || void 0 === dB ? void 0 : dB[TB]
    }(0, lB.n)(VB.Jb.NewOtherEntitySettings, (BB => {
      BB.payloadKind === yB.ac.Msgpack && YB.some((TB => function(BB, TB) {
        const dB = TB[0];
        for (let VB = BB.indexOf(dB); - 1 !== VB && VB + TB.length <= BB.length; VB = BB.indexOf(dB, VB + 1)) {
          let dB = 1;
          for (; dB < TB.length && BB[VB + dB] === TB[dB];) dB++;
          if (dB === TB.length) return !0
        }
        return !1
      }(BB.payload, TB))) && function(BB) {
        if (null === BB || "object" !== typeof BB || null === BB.settings || "object" !== typeof BB.settings) return;
        const TB = String(BB.eId),
          dB = BB.settings;
        let VB = gB.get(TB);
        for (const yB in dB) {
          if (!JB.has(yB)) continue;
          const BB = dB[yB];
          null === BB || void 0 === BB ? VB && delete VB[yB] : (VB ??= {}, VB[yB] = BB)
        }
        VB && gB.set(TB, VB)
      }((0, pB.c)(BB.payload))
    })), (0, lB.i)((() => {
      gB.clear()
    }))
  },
  39424: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => OB,
      h: () => gB,
      i: () => kB
    });
    var VB = dB(37960),
      yB = dB(1685),
      pB = dB(1180),
      lB = dB(39346),
      JB = dB(39348),
      YB = dB(39372);
    const gB = new VB.b;
    let oB = {};

    function kB(BB) {
      return oB[BB]
    }
    const LB = new pB.b;

    function OB(BB) {
      return LB.add(BB)
    }

    function DB(BB) {
      LB.callEach(BB, "a roster listener")
    }(0, YB.n)(lB.ab, (BB => {
      const TB = (0, JB.f)(lB.ab, BB);
      if (void 0 === TB) return;
      const dB = TB.Ay.some((BB => {
          let {
            ny: TB,
            ey: dB
          } = BB;
          return null !== dB && gB.has(TB) && gB.getName(TB) !== dB
        })),
        {
          added: VB,
          removed: pB,
          settingChanges: YB
        } = gB.apply(TB),
        oB = new Set;
      for (const yB of YB)
        for (const BB in yB.settings) oB.add(BB);
      const kB = dB || VB.length > 0 || pB.length > 0;
      (kB || oB.has("hideNameSeed")) && function() {
        const BB = new Map;
        for (const TB of gB.ids()) {
          const dB = gB.getName(TB),
            VB = gB.getSetting(TB, "hideNameSeed");
          void 0 !== dB && void 0 !== VB && null !== VB && BB.set(dB, VB)
        }
        yB.c.replaceAll(BB)
      }(), DB({
        kind: "roster",
        members: kB,
        settings: oB
      })
    })), (0, YB.n)(lB.P, (BB => {
      const TB = (0, JB.f)(lB.P, BB);
      if (void 0 !== TB) {
        for (const {
            Np: BB,
            tp: dB,
            sp: VB
          }
          of TB) oB[BB] = {
          ...oB[BB],
          [dB]: VB
        };
        DB({
          kind: "cosmetics",
          updates: TB
        })
      }
    })), (0, YB.i)((() => {
      gB.clear(), oB = {}, yB.c.clear(), DB({
        kind: "reset"
      })
    })), (0, YB.m)((() => {
      gB.clear(), DB({
        kind: "reset"
      })
    }))
  },
  39445: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => wB,
      h: () => HB,
      k: () => KB,
      m: () => rB
    });
    var VB = dB(1147),
      yB = dB(560),
      pB = dB(95),
      lB = dB(4192),
      JB = dB(39310),
      YB = dB(39341),
      gB = dB(39322),
      oB = dB(39431),
      kB = dB(39424),
      LB = dB(39348),
      OB = dB(39372);

    function DB(BB) {
      let {
        deadEId: TB,
        killerEId: dB,
        killerLifeformType: VB,
        withItem: yB,
        killstreak: pB
      } = BB;
      return {
        killer: iB({
          eId: dB,
          lifeformType: VB
        }),
        victim: iB({
          eId: TB
        }),
        withItem: yB,
        killstreak: pB
      }
    }

    function uB(BB) {
      let {
        killer: TB,
        victim: dB,
        withItem: VB
      } = BB;
      return {
        killer: iB(TB),
        victim: iB(dB),
        withItem: VB,
        killstreak: 0
      }
    }

    function HB(BB) {
      sB && zB((() => "killed" === BB.kind ? DB(BB.body) : uB(BB.body)))
    }
    const EB = "#2727f1",
      vB = "#912c2c";

    function mB(BB, TB) {
      var dB;
      return kB.h.has(BB) ? null === (dB = kB.h.getSettings(BB)) || void 0 === dB ? void 0 : dB[TB] : (0, oB.b)(BB, TB)
    }

    function iB(BB) {
      var TB, dB, lB, JB, oB;
      let {
        eId: LB,
        name: OB,
        colour: DB,
        lifeformType: uB
      } = BB;
      if (void 0 === LB || null === LB || "" === LB) {
        const BB = OB || null;
        return {
          id: null,
          shownName: BB,
          lifeformType: null === BB && null !== uB && void 0 !== uB ? uB : null,
          colour: DB || null,
          local: !1,
          realName: null
        }
      }
      const HB = String(LB),
        iB = null === (TB = (0, gB.i)()) || void 0 === TB ? void 0 : TB.api,
        NB = void 0 !== iB && String(iB.localId) === HB,
        tB = null !== (dB = kB.h.getName(HB)) && void 0 !== dB ? dB : null,
        fB = null !== (lB = mB(HB, "hideNameSeed")) && void 0 !== lB ? lB : null;
      let sB = null === tB ? null : (0, VB.c)(tB, !pB.featureFlags.canSeeRealPlayerNames, fB) || null,
        MB = null;
      if (null === sB && void 0 !== iB) {
        const BB = iB.getEntityType(HB);
        "Player" !== BB && (sB = (0, YB.l)(iB, +HB) || null), MB = yB.l.includes(BB) ? BB : null
      }
      return {
        id: HB,
        shownName: sB,
        lifeformType: null === sB && null !== (JB = null !== (oB = MB) && void 0 !== oB ? oB : uB) && void 0 !== JB ? JB : null,
        colour: DB || mB(HB, "killfeedColour") || (NB ? EB : vB),
        local: NB,
        realName: tB
      }
    }
    const NB = 32;
    let tB = [],
      fB = null,
      sB = !1,
      MB = !1;

    function zB(BB) {
      null === fB ? (tB.length === NB && tB.shift(), tB.push(BB)) : fB(BB())
    }

    function wB() {
      MB || (MB = !0, (0, OB.n)(lB.Jb.PlayerKilled, (BB => {
        const TB = (0, LB.h)(BB);
        (0, LB.e)(TB) && zB((() => DB(TB)))
      })), (0, OB.n)(lB.Jb.CustomKillfeed, (BB => {
        const TB = (0, LB.h)(BB);
        (0, LB.e)(TB) && (0, LB.e)(TB.killer) && (0, LB.e)(TB.victim) && zB((() => uB(TB)))
      })), (0, OB.i)((() => {
        tB = []
      })))
    }
    const UB = Object.freeze([0, 0, 0]),
      FB = [0, 0, 0],
      KB = {
        kill: {
          watch(BB) {
            if (sB = !0, 0 === tB.length) return fB = BB, () => {
              sB = !1, fB = null
            };
            const TB = setTimeout((() => {
              const TB = tB;
              tB = [], fB = BB;
              for (const VB of TB) try {
                BB(VB())
              } catch (dB) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", dB)
              }
            }), 0);
            return () => {
              clearTimeout(TB), sB = !1, fB = null
            }
          }
        }
      },
      rB = {
        localPos() {
          const BB = (0, gB.i)();
          if (null === BB) return UB;
          const TB = BB.api.apiView;
          for (let dB = 0; dB < 3; dB++) FB[dB] = JB.B.localPos(TB, 0, dB);
          return FB
        }
      }
  },
  37960: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const TB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const VB of BB.Ay) {
          let BB = this.members.get(VB.ny);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(VB.ny, BB), TB.added.push(VB.ny)), null !== VB.ey && (BB.name = VB.ey), null !== VB.Bp || VB.Tp.length > 0) {
            const dB = null === VB.Bp ? {} : JSON.parse(VB.Bp);
            Object.assign(BB.settings, dB);
            for (const TB of VB.Tp) delete BB.settings[TB], dB[TB] = void 0;
            TB.settingChanges.push({
              playerId: VB.ny,
              settings: dB
            })
          }
        }
        for (const VB of BB.dp) {
          const BB = this.members.get(VB);
          var dB;
          if (BB) this.members.delete(VB), TB.removed.push({
            playerId: VB,
            name: null !== (dB = BB.name) && void 0 !== dB ? dB : void 0
          })
        }
        return TB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var TB, dB;
        return null !== (TB = null === (dB = this.members.get(BB)) || void 0 === dB ? void 0 : dB.name) && void 0 !== TB ? TB : void 0
      }
      getSettings(BB) {
        var TB;
        return null === (TB = this.members.get(BB)) || void 0 === TB ? void 0 : TB.settings
      }
      getSetting(BB, TB) {
        var dB;
        return null === (dB = this.members.get(BB)) || void 0 === dB ? void 0 : dB.settings[TB]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);