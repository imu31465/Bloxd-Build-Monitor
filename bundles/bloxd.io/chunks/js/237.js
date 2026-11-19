export const id = 237;
export const ids = [237];
export const modules = {
  39919: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      h: () => lz
    });
    var Ez = bz(1878);
    let nz = !1;

    function iz() {
      nz = !0
    }

    function lz() {
      nz && (nz = !1, (0, Ez.c)())
    }
  },
  39867: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Zz,
      h: () => dz,
      k: () => Fz
    });
    var Ez = bz(1885),
      nz = bz(1271),
      iz = bz(39750),
      lz = bz(39776),
      Mz = bz(39779),
      tz = bz(39798);
    const Hz = new nz.b;
    let Oz = !1;

    function pz(zz) {
      const uz = (0, iz.j)();
      return null !== uz && +zz === uz.api.localId
    }

    function dz() {
      Oz || (Oz = !0, (0, tz.i)(lz.o, (zz => {
        var uz, bz;
        const Ez = (0, Mz.i)(lz.o, zz);
        if (!(0, Mz.e)(Ez)) return;
        const nz = Ez;
        pz(nz.tu) && Fz(nz.Hu, {
          icon: nz.pu,
          level: nz.Zu,
          displayName: null !== (uz = nz.Ou) && void 0 !== uz ? uz : null,
          durationMs: null !== (bz = nz.Fu) && void 0 !== bz ? bz : null
        })
      })), (0, tz.i)(lz.Q, (zz => {
        const uz = (0, Mz.i)(lz.Q, zz);
        if (!(0, Mz.e)(uz)) return;
        const bz = uz;
        pz(bz.tu) && Ez.e.remove(bz.Hu)
      })), (0, tz.d)((() => {
        Ez.e.clear()
      })))
    }

    function Fz(zz, uz) {
      Ez.e.update(zz, uz), Hz.forEach((uz => {
        uz(zz)
      }))
    }
    const Zz = {
      localEffectUpdated: {
        watch: zz => Hz.add(zz)
      }
    }
  },
  39872: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Oz
    });
    var Ez = bz(4564),
      nz = bz(4560),
      iz = bz(39784),
      lz = bz(39798);
    const Mz = new Set(Ez.I),
      tz = Ez.I.map((zz => (new TextEncoder).encode(zz))),
      Hz = new Map;

    function Oz(zz, uz) {
      var bz;
      return null === (bz = Hz.get(zz)) || void 0 === bz ? void 0 : bz[uz]
    }(0, lz.i)(Ez.Wb.NewOtherEntitySettings, (zz => {
      zz.payloadKind === nz.bc.Msgpack && tz.some((uz => function(zz, uz) {
        const bz = uz[0];
        for (let Ez = zz.indexOf(bz); - 1 !== Ez && Ez + uz.length <= zz.length; Ez = zz.indexOf(bz, Ez + 1)) {
          let bz = 1;
          for (; bz < uz.length && zz[Ez + bz] === uz[bz];) bz++;
          if (bz === uz.length) return !0
        }
        return !1
      }(zz.payload, uz))) && function(zz) {
        if (null === zz || "object" !== typeof zz || null === zz.settings || "object" !== typeof zz.settings) return;
        const uz = String(zz.eId),
          bz = zz.settings;
        let Ez = Hz.get(uz);
        for (const nz in bz) {
          if (!Mz.has(nz)) continue;
          const zz = bz[nz];
          null === zz || void 0 === zz ? Ez && delete Ez[nz] : (Ez ??= {}, Ez[nz] = zz)
        }
        Ez && Hz.set(uz, Ez)
      }((0, iz.b)(zz.payload))
    })), (0, lz.d)((() => {
      Hz.clear()
    }))
  },
  39859: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Fz,
      f: () => Hz,
      h: () => pz
    });
    var Ez = bz(38377),
      nz = bz(1873),
      iz = bz(1271),
      lz = bz(39776),
      Mz = bz(39779),
      tz = bz(39798);
    const Hz = new Ez.d;
    let Oz = {};

    function pz(zz) {
      return Oz[zz]
    }
    const dz = new iz.b;

    function Fz(zz) {
      return dz.add(zz)
    }

    function Zz(zz) {
      dz.callEach(zz, "a roster listener")
    }(0, tz.i)(lz._, (zz => {
      const uz = (0, Mz.i)(lz._, zz);
      if (void 0 === uz) return;
      const bz = uz.XE.some((zz => {
          let {
            fE: uz,
            sE: bz
          } = zz;
          return null !== bz && Hz.has(uz) && Hz.getName(uz) !== bz
        })),
        {
          added: Ez,
          removed: iz,
          settingChanges: tz
        } = Hz.apply(uz),
        Oz = new Set;
      for (const nz of tz)
        for (const zz in nz.settings) Oz.add(zz);
      const pz = bz || Ez.length > 0 || iz.length > 0;
      (pz || Oz.has("hideNameSeed")) && function() {
        const zz = new Map;
        for (const uz of Hz.ids()) {
          const bz = Hz.getName(uz),
            Ez = Hz.getSetting(uz, "hideNameSeed");
          void 0 !== bz && void 0 !== Ez && null !== Ez && zz.set(bz, Ez)
        }
        nz.b.replaceAll(zz)
      }(), Zz({
        kind: "roster",
        members: pz,
        settings: Oz
      })
    })), (0, tz.i)(lz.O, (zz => {
      const uz = (0, Mz.i)(lz.O, zz);
      if (void 0 !== uz) {
        for (const {
            Yb: zz,
            kb: bz,
            zE: Ez
          }
          of uz) Oz[zz] = {
          ...Oz[zz],
          [bz]: Ez
        };
        Zz({
          kind: "cosmetics",
          updates: uz
        })
      }
    })), (0, tz.d)((() => {
      Hz.clear(), Oz = {}, nz.b.clear(), Zz({
        kind: "reset"
      })
    })), (0, tz.h)((() => {
      Hz.clear(), Zz({
        kind: "reset"
      })
    }))
  },
  39895: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Az,
      e: () => Kz,
      h: () => Gz,
      l: () => az
    });
    var Ez = bz(1256),
      nz = bz(584),
      iz = bz(96),
      lz = bz(4564),
      Mz = bz(39740),
      tz = bz(39769),
      Hz = bz(39750),
      Oz = bz(39872),
      pz = bz(39859),
      dz = bz(39779),
      Fz = bz(39798);

    function Zz(zz) {
      let {
        deadEId: uz,
        killerEId: bz,
        killerLifeformType: Ez,
        withItem: nz,
        killstreak: iz
      } = zz;
      return {
        killer: sz({
          eId: bz,
          lifeformType: Ez
        }),
        victim: sz({
          eId: uz
        }),
        withItem: nz,
        killstreak: iz
      }
    }

    function Rz(zz) {
      let {
        killer: uz,
        victim: bz,
        withItem: Ez
      } = zz;
      return {
        killer: sz(uz),
        victim: sz(bz),
        withItem: Ez,
        killstreak: 0
      }
    }

    function Kz(zz) {
      vz && Jz((() => "killed" === zz.kind ? Zz(zz.body) : Rz(zz.body)))
    }
    const wz = "#2727f1",
      Xz = "#912c2c";

    function fz(zz, uz) {
      var bz;
      return pz.f.has(zz) ? null === (bz = pz.f.getSettings(zz)) || void 0 === bz ? void 0 : bz[uz] : (0, Oz.b)(zz, uz)
    }

    function sz(zz) {
      var uz, bz, lz, Mz, Oz;
      let {
        eId: dz,
        name: Fz,
        colour: Zz,
        lifeformType: Rz
      } = zz;
      if (void 0 === dz || null === dz || "" === dz) {
        const zz = Fz || null;
        return {
          id: null,
          shownName: zz,
          lifeformType: null === zz && null !== Rz && void 0 !== Rz ? Rz : null,
          colour: Zz || null,
          local: !1,
          realName: null
        }
      }
      const Kz = String(dz),
        sz = null === (uz = (0, Hz.j)()) || void 0 === uz ? void 0 : uz.api,
        rz = void 0 !== sz && String(sz.localId) === Kz,
        oz = null !== (bz = pz.f.getName(Kz)) && void 0 !== bz ? bz : null,
        Nz = null !== (lz = fz(Kz, "hideNameSeed")) && void 0 !== lz ? lz : null;
      let vz = null === oz ? null : (0, Ez.b)(oz, !iz.featureFlags.canSeeRealPlayerNames, Nz) || null,
        xz = null;
      if (null === vz && void 0 !== sz) {
        const zz = sz.getEntityType(Kz);
        "Player" !== zz && (vz = (0, tz.g)(sz, +Kz) || null), xz = nz.j.includes(zz) ? zz : null
      }
      return {
        id: Kz,
        shownName: vz,
        lifeformType: null === vz && null !== (Mz = null !== (Oz = xz) && void 0 !== Oz ? Oz : Rz) && void 0 !== Mz ? Mz : null,
        colour: Zz || fz(Kz, "killfeedColour") || (rz ? wz : Xz),
        local: rz,
        realName: oz
      }
    }
    const rz = 32;
    let oz = [],
      Nz = null,
      vz = !1,
      xz = !1;

    function Jz(zz) {
      null === Nz ? (oz.length === rz && oz.shift(), oz.push(zz)) : Nz(zz())
    }

    function Az() {
      xz || (xz = !0, (0, Fz.i)(lz.Wb.PlayerKilled, (zz => {
        const uz = (0, dz.l)(zz);
        (0, dz.e)(uz) && Jz((() => Zz(uz)))
      })), (0, Fz.i)(lz.Wb.CustomKillfeed, (zz => {
        const uz = (0, dz.l)(zz);
        (0, dz.e)(uz) && (0, dz.e)(uz.killer) && (0, dz.e)(uz.victim) && Jz((() => Rz(uz)))
      })), (0, Fz.d)((() => {
        oz = []
      })))
    }
    const Tz = Object.freeze([0, 0, 0]),
      Lz = [0, 0, 0],
      Pz = [0, 0, 0],
      Gz = {
        kill: {
          watch(zz) {
            if (vz = !0, 0 === oz.length) return Nz = zz, () => {
              vz = !1, Nz = null
            };
            const uz = setTimeout((() => {
              const uz = oz;
              oz = [], Nz = zz;
              for (const Ez of uz) try {
                zz(Ez())
              } catch (bz) {
                console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", bz)
              }
            }), 0);
            return () => {
              clearTimeout(uz), vz = !1, Nz = null
            }
          }
        }
      },
      az = {
        localPos() {
          const zz = (0, Hz.j)();
          if (null === zz) return Tz;
          const uz = zz.api.apiView;
          for (let bz = 0; bz < 3; bz++) Lz[bz] = Mz.z.localPos(uz, 0, bz);
          return Lz
        },
        targetedBlockPos() {
          const zz = (0, Hz.j)();
          if (null === zz || Mz.z.targetBlockId(zz.api.apiView, 0) === Mz.cd) return null;
          for (let uz = 0; uz < 3; uz++) Pz[uz] = Mz.z.targetBlock(zz.api.apiView, 0, uz);
          return Pz
        }
      }
  },
  38377: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor() {
        this.members = new Map
      }
      apply(zz) {
        const uz = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Ez of zz.XE) {
          let zz = this.members.get(Ez.fE);
          if (zz || (zz = {
              name: null,
              settings: {}
            }, this.members.set(Ez.fE, zz), uz.added.push(Ez.fE)), null !== Ez.sE && (zz.name = Ez.sE), null !== Ez.rE || Ez.oE.length > 0) {
            const bz = null === Ez.rE ? {} : JSON.parse(Ez.rE);
            Object.assign(zz.settings, bz);
            for (const uz of Ez.oE) delete zz.settings[uz], bz[uz] = void 0;
            uz.settingChanges.push({
              playerId: Ez.fE,
              settings: bz
            })
          }
        }
        for (const Ez of zz.NE) {
          const zz = this.members.get(Ez);
          var bz;
          if (zz) this.members.delete(Ez), uz.removed.push({
            playerId: Ez,
            name: null !== (bz = zz.name) && void 0 !== bz ? bz : void 0
          })
        }
        return uz
      }
      has(zz) {
        return this.members.has(zz)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(zz) {
        var uz, bz;
        return null !== (uz = null === (bz = this.members.get(zz)) || void 0 === bz ? void 0 : bz.name) && void 0 !== uz ? uz : void 0
      }
      getSettings(zz) {
        var uz;
        return null === (uz = this.members.get(zz)) || void 0 === uz ? void 0 : uz.settings
      }
      getSetting(zz, uz) {
        var bz;
        return null === (bz = this.members.get(zz)) || void 0 === bz ? void 0 : bz.settings[uz]
      }
      clear() {
        this.members.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);