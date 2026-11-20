export const id = 237;
export const ids = [237];
export const modules = {
  39861: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz,
      e: () => Oz
    });
    var Fz = sz(1868);
    let Wz = !1;

    function Xz() {
      Wz = !0
    }

    function Oz() {
      Wz && (Wz = !1, (0, Fz.b)())
    }
  },
  39818: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => wz,
      h: () => Nz,
      i: () => bz
    });
    var Fz = sz(1875),
      Wz = sz(1274),
      Xz = sz(39720),
      Oz = sz(39740),
      oz = sz(39748),
      vz = sz(39765);
    const Uz = new Wz.d;
    let Kz = !1;

    function uz(zz) {
      const tz = (0, Xz.f)();
      return null !== tz && +zz === tz.api.localId
    }

    function Nz() {
      Kz || (Kz = !0, (0, vz.l)(Oz.l, (zz => {
        var tz, sz;
        const Fz = (0, oz.d)(Oz.l, zz);
        if (!(0, oz.c)(Fz)) return;
        const Wz = Fz;
        uz(Wz.vt) && bz(Wz.Ut, {
          icon: Wz.ut,
          level: Wz.Dt,
          displayName: null !== (tz = Wz.Kt) && void 0 !== tz ? tz : null,
          durationMs: null !== (sz = Wz.Nt) && void 0 !== sz ? sz : null
        })
      })), (0, vz.l)(Oz.P, (zz => {
        const tz = (0, oz.d)(Oz.P, zz);
        if (!(0, oz.c)(tz)) return;
        const sz = tz;
        uz(sz.vt) && Fz.c.remove(sz.Ut)
      })), (0, vz.g)((() => {
        Fz.c.clear()
      })))
    }

    function bz(zz, tz) {
      Fz.c.update(zz, tz), Uz.forEach((tz => {
        tz(zz)
      }))
    }
    const wz = {
      localEffectUpdated: {
        watch: zz => Uz.add(zz)
      }
    }
  },
  39820: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Kz
    });
    var Fz = sz(4436),
      Wz = sz(4432),
      Xz = sz(39754),
      Oz = sz(39765);
    const oz = new Set(Fz.J),
      vz = Fz.J.map((zz => (new TextEncoder).encode(zz))),
      Uz = new Map;

    function Kz(zz, tz) {
      var sz;
      return null === (sz = Uz.get(zz)) || void 0 === sz ? void 0 : sz[tz]
    }(0, Oz.l)(Fz.fc.NewOtherEntitySettings, (zz => {
      zz.payloadKind === Wz.Wb.Msgpack && vz.some((tz => function(zz, tz) {
        const sz = tz[0];
        for (let Fz = zz.indexOf(sz); - 1 !== Fz && Fz + tz.length <= zz.length; Fz = zz.indexOf(sz, Fz + 1)) {
          let sz = 1;
          for (; sz < tz.length && zz[Fz + sz] === tz[sz];) sz++;
          if (sz === tz.length) return !0
        }
        return !1
      }(zz.payload, tz))) && function(zz) {
        if (null === zz || "object" !== typeof zz || null === zz.settings || "object" !== typeof zz.settings) return;
        const tz = String(zz.eId),
          sz = zz.settings;
        let Fz = Uz.get(tz);
        for (const Wz in sz) {
          if (!oz.has(Wz)) continue;
          const zz = sz[Wz];
          null === zz || void 0 === zz ? Fz && delete Fz[Wz] : (Fz ??= {}, Fz[Wz] = zz)
        }
        Fz && Uz.set(tz, Fz)
      }((0, Xz.c)(zz.payload))
    })), (0, Oz.g)((() => {
      Uz.clear()
    }))
  },
  39816: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => bz,
      g: () => Uz,
      h: () => uz
    });
    var Fz = sz(38417),
      Wz = sz(1862),
      Xz = sz(1274),
      Oz = sz(39740),
      oz = sz(39748),
      vz = sz(39765);
    const Uz = new Fz.b;
    let Kz = {};

    function uz(zz) {
      return Kz[zz]
    }
    const Nz = new Xz.d;

    function bz(zz) {
      return Nz.add(zz)
    }

    function wz(zz) {
      Nz.callEach(zz, "a roster listener")
    }(0, vz.l)(Oz.ab, (zz => {
      const tz = (0, oz.d)(Oz.ab, zz);
      if (void 0 === tz) return;
      const sz = tz.yF.some((zz => {
          let {
            MF: tz,
            dF: sz
          } = zz;
          return null !== sz && Uz.has(tz) && Uz.getName(tz) !== sz
        })),
        {
          added: Fz,
          removed: Xz,
          settingChanges: vz
        } = Uz.apply(tz),
        Kz = new Set;
      for (const Wz of vz)
        for (const zz in Wz.settings) Kz.add(zz);
      const uz = sz || Fz.length > 0 || Xz.length > 0;
      (uz || Kz.has("hideNameSeed")) && function() {
        const zz = new Map;
        for (const tz of Uz.ids()) {
          const sz = Uz.getName(tz),
            Fz = Uz.getSetting(tz, "hideNameSeed");
          void 0 !== sz && void 0 !== Fz && null !== Fz && zz.set(sz, Fz)
        }
        Wz.d.replaceAll(zz)
      }(), wz({
        kind: "roster",
        members: uz,
        settings: Kz
      })
    })), (0, vz.l)(Oz.M, (zz => {
      const tz = (0, oz.d)(Oz.M, zz);
      if (void 0 !== tz) {
        for (const {
            bF: zz,
            wF: sz,
            DF: Fz
          }
          of tz) Kz[zz] = {
          ...Kz[zz],
          [sz]: Fz
        };
        wz({
          kind: "cosmetics",
          updates: tz
        })
      }
    })), (0, vz.g)((() => {
      Uz.clear(), Kz = {}, Wz.d.clear(), wz({
        kind: "reset"
      })
    })), (0, vz.k)((() => {
      Uz.clear(), wz({
        kind: "reset"
      })
    }))
  },
  39838: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => ez,
      c: () => gz,
      d: () => cz,
      f: () => jz
    });
    var Fz = sz(1253),
      Wz = sz(574),
      Xz = sz(106),
      Oz = sz(4436),
      oz = sz(39714),
      vz = sz(39733),
      Uz = sz(39720),
      Kz = sz(39820),
      uz = sz(39816),
      Nz = sz(39748),
      bz = sz(39765);

    function wz(zz) {
      let {
        deadEId: tz,
        killerEId: sz,
        killerLifeformType: Fz,
        withItem: Wz,
        killstreak: Xz
      } = zz;
      return {
        killer: rz({
          eId: sz,
          lifeformType: Fz
        }),
        victim: rz({
          eId: tz
        }),
        withItem: Wz,
        killstreak: Xz
      }
    }

    function Dz(zz) {
      let {
        killer: tz,
        victim: sz,
        withItem: Fz
      } = zz;
      return {
        killer: rz(tz),
        victim: rz(sz),
        withItem: Fz,
        killstreak: 0
      }
    }

    function gz(zz) {
      Jz && Cz((() => "killed" === zz.kind ? wz(zz.body) : Dz(zz.body)))
    }
    const Hz = "#2727f1",
      Bz = "#912c2c";

    function Pz(zz, tz) {
      var sz;
      return uz.g.has(zz) ? null === (sz = uz.g.getSettings(zz)) || void 0 === sz ? void 0 : sz[tz] : (0, Kz.d)(zz, tz)
    }

    function rz(zz) {
      var tz, sz, Oz, oz, Kz;
      let {
        eId: Nz,
        name: bz,
        colour: wz,
        lifeformType: Dz
      } = zz;
      if (void 0 === Nz || null === Nz || "" === Nz) {
        const zz = bz || null;
        return {
          id: null,
          shownName: zz,
          lifeformType: null === zz && null !== Dz && void 0 !== Dz ? Dz : null,
          colour: wz || null,
          local: !1,
          realName: null
        }
      }
      const gz = String(Nz),
        rz = null === (tz = (0, Uz.f)()) || void 0 === tz ? void 0 : tz.api,
        Yz = void 0 !== rz && String(rz.localId) === gz,
        xz = null !== (sz = uz.g.getName(gz)) && void 0 !== sz ? sz : null,
        mz = null !== (Oz = Pz(gz, "hideNameSeed")) && void 0 !== Oz ? Oz : null;
      let Jz = null === xz ? null : (0, Fz.c)(xz, !Xz.featureFlags.canSeeRealPlayerNames, mz) || null,
        Iz = null;
      if (null === Jz && void 0 !== rz) {
        const zz = rz.getEntityType(gz);
        "Player" !== zz && (Jz = (0, vz.i)(rz, +gz) || null), Iz = Wz.k.includes(zz) ? zz : null
      }
      return {
        id: gz,
        shownName: Jz,
        lifeformType: null === Jz && null !== (oz = null !== (Kz = Iz) && void 0 !== Kz ? Kz : Dz) && void 0 !== oz ? oz : null,
        colour: wz || Pz(gz, "killfeedColour") || (Yz ? Hz : Bz),
        local: Yz,
        realName: xz
      }
    }
    const Yz = 32;
    let xz = [],
      mz = null,
      Jz = !1,
      Iz = !1;

    function Cz(zz) {
      null === mz ? (xz.length === Yz && xz.shift(), xz.push(zz)) : mz(zz())
    }

    function ez() {
      Iz || (Iz = !0, (0, bz.l)(Oz.fc.PlayerKilled, (zz => {
        const tz = (0, Nz.f)(zz);
        (0, Nz.c)(tz) && Cz((() => wz(tz)))
      })), (0, bz.l)(Oz.fc.CustomKillfeed, (zz => {
        const tz = (0, Nz.f)(zz);
        (0, Nz.c)(tz) && (0, Nz.c)(tz.killer) && (0, Nz.c)(tz.victim) && Cz((() => Dz(tz)))
      })), (0, bz.g)((() => {
        xz = []
      })))
    }
    const Zz = Object.freeze([0, 0, 0]),
      Gz = [0, 0, 0],
      Tz = [0, 0, 0],
      cz = {
        kill: {
          watch(zz) {
            if (Jz = !0, 0 === xz.length) return mz = zz, () => {
              Jz = !1, mz = null
            };
            const tz = setTimeout((() => {
              const tz = xz;
              xz = [], mz = zz;
              for (const Fz of tz) try {
                zz(Fz())
              } catch (sz) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", sz)
              }
            }), 0);
            return () => {
              clearTimeout(tz), Jz = !1, mz = null
            }
          }
        }
      },
      jz = {
        localPos() {
          const zz = (0, Uz.f)();
          if (null === zz) return Zz;
          const tz = zz.api.apiView;
          for (let sz = 0; sz < 3; sz++) Gz[sz] = oz.t.localPos(tz, 0, sz);
          return Gz
        },
        targetedBlockPos() {
          const zz = (0, Uz.f)();
          if (null === zz || oz.t.targetBlockId(zz.api.apiView, 0) === oz.fd) return null;
          for (let tz = 0; tz < 3; tz++) Tz[tz] = oz.t.targetBlock(zz.api.apiView, 0, tz);
          return Tz
        }
      }
  },
  38417: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    class Fz {
      constructor() {
        this.members = new Map
      }
      apply(zz) {
        const tz = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Fz of zz.yF) {
          let zz = this.members.get(Fz.MF);
          if (zz || (zz = {
              name: null,
              settings: {}
            }, this.members.set(Fz.MF, zz), tz.added.push(Fz.MF)), null !== Fz.dF && (zz.name = Fz.dF), null !== Fz.hF || Fz.QF.length > 0) {
            const sz = null === Fz.hF ? {} : JSON.parse(Fz.hF);
            Object.assign(zz.settings, sz);
            for (const tz of Fz.QF) delete zz.settings[tz], sz[tz] = void 0;
            tz.settingChanges.push({
              playerId: Fz.MF,
              settings: sz
            })
          }
        }
        for (const Fz of zz.kF) {
          const zz = this.members.get(Fz);
          var sz;
          if (zz) this.members.delete(Fz), tz.removed.push({
            playerId: Fz,
            name: null !== (sz = zz.name) && void 0 !== sz ? sz : void 0
          })
        }
        return tz
      }
      has(zz) {
        return this.members.has(zz)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(zz) {
        var tz, sz;
        return null !== (tz = null === (sz = this.members.get(zz)) || void 0 === sz ? void 0 : sz.name) && void 0 !== tz ? tz : void 0
      }
      getSettings(zz) {
        var tz;
        return null === (tz = this.members.get(zz)) || void 0 === tz ? void 0 : tz.settings
      }
      getSetting(zz, tz) {
        var sz;
        return null === (sz = this.members.get(zz)) || void 0 === sz ? void 0 : sz.settings[tz]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);