export const id = 72;
export const ids = [72];
export const modules = {
  36486: (zz, uz, bz) => {
    if (bz.d(uz, {
        d: () => tz,
        g: () => nz,
        h: () => lz,
        i: () => iz,
        k: () => rz,
        m: () => wz
      }), 39 == bz.j) var Ez = bz(36491);
    const nz = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      iz = ["Blade", "Guard", "Handle"],
      lz = {
        Wood: {
          material: "Wood",
          baseSword: "Wood Sword",
          value: 1,
          epithet: "Timber",
          palette: ["#b88a52", "#7d5a32", "#3d2a14"],
          trait: null,
          bladeDamage: 0,
          guardReduction: 0,
          handleCooldown: 1,
          handleKnockback: 0,
          handleReach: 0
        },
        Stone: {
          material: "Stone",
          baseSword: "Stone Sword",
          value: 1,
          epithet: "Flint",
          palette: ["#a3a3a3", "#6e6e6e", "#333333"],
          trait: null,
          bladeDamage: .03,
          guardReduction: .02,
          handleCooldown: .98,
          handleKnockback: .05,
          handleReach: 0
        },
        Iron: {
          material: "Iron",
          baseSword: "Iron Sword",
          value: 2,
          epithet: "Ironclad",
          palette: ["#e6e6e6", "#a8a8a8", "#444444"],
          trait: "defence",
          bladeDamage: .06,
          guardReduction: .05,
          handleCooldown: .95,
          handleKnockback: .1,
          handleReach: 0
        },
        Gold: {
          material: "Gold",
          baseSword: "Gold Sword",
          value: 2,
          epithet: "Gilded",
          palette: ["#ffe766", "#e0a91d", "#6b4a07"],
          trait: "coins",
          bladeDamage: .07,
          guardReduction: .04,
          handleCooldown: .94,
          handleKnockback: .05,
          handleReach: 0
        },
        Diamond: {
          material: "Diamond",
          baseSword: "Diamond Sword",
          value: 4,
          epithet: "Brilliant",
          palette: ["#8ff5ec", "#2fbcb0", "#0d4f4a"],
          trait: "crit",
          bladeDamage: .12,
          guardReduction: .07,
          handleCooldown: .92,
          handleKnockback: .1,
          handleReach: 0
        },
        Moonstone: {
          material: "Moonstone",
          baseSword: "Moonstone Sword",
          value: 4,
          epithet: "Moonlit",
          palette: ["#d9d2ff", "#8f7fe0", "#352a73"],
          trait: "bossBane",
          bladeDamage: .15,
          guardReduction: .08,
          handleCooldown: .9,
          handleKnockback: .1,
          handleReach: .25
        },
        Magmasteel: {
          material: "Magmasteel",
          baseSword: "Magmasteel Sword",
          value: 8,
          epithet: "Molten",
          palette: ["#ffb347", "#e0461b", "#4f1208"],
          trait: "firePool",
          bladeDamage: .29,
          guardReduction: .1,
          handleCooldown: .88,
          handleKnockback: .2,
          handleReach: .35
        },
        Sanguine: {
          material: "Sanguine",
          baseSword: "Sanguine Sword",
          value: 8,
          epithet: "Crimson",
          palette: ["#ff6b7a", "#b0172f", "#45040f"],
          trait: "lifesteal",
          bladeDamage: .29,
          guardReduction: .1,
          handleCooldown: .87,
          handleKnockback: .15,
          handleReach: .35
        },
        Astral: {
          material: "Astral",
          baseSword: "Astral Sword",
          value: 10,
          epithet: "Starforged",
          palette: ["#9fd8ff", "#5a6bff", "#1c1550"],
          trait: "starfall",
          bladeDamage: .4,
          guardReduction: .12,
          handleCooldown: .83,
          handleKnockback: .2,
          handleReach: .5
        }
      },
      Mz = 4,
      tz = "Coal",
      Hz = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Oz = 1.15,
      pz = 1.35,
      dz = .06,
      Fz = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: zz => `${vz(.06*zz)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: zz => `Mobs you slay drop ${Math.round(4*zz)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: zz => `${vz(.12*zz)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: zz => `+${vz(.2*zz)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: zz => `${vz(.15*zz)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: zz => `Heal ${vz(.06*zz)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: zz => `${vz(.1*zz)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Zz = {
        eclipseField: {
          name: "Eclipse Field",
          description: "Right-click: slow every mob within 6 blocks for 3s",
          cooldownMs: 25e3
        },
        starfall: {
          name: "Meteor Shower",
          description: "Right-click: call five falling stars around you",
          cooldownMs: 3e4
        },
        magmaWave: {
          name: "Magma Wave",
          description: "Right-click: lay a line of fire pools ahead of you",
          cooldownMs: 2e4
        },
        bloodPact: {
          name: "Blood Pact",
          description: "Right-click: heal 30% of your health",
          cooldownMs: 4e4
        },
        moonDash: {
          name: "Moon Dash",
          description: "Right-click: dash forward, striking mobs you pass",
          cooldownMs: 12e3
        },
        warcry: {
          name: "Warcry",
          description: "Right-click: deal 30% more damage for 8s",
          cooldownMs: 35e3
        },
        quake: {
          name: "Quake",
          description: "Right-click: slam the ground, hurling mobs within 5 blocks",
          cooldownMs: 18e3
        },
        gildedEdge: {
          name: "Gilded Edge",
          description: "Right-click: your next 5 hits deal 50% more damage",
          cooldownMs: 25e3
        }
      },
      Rz = 39 == bz.j ? Ez.b : null,
      Kz = "skyblock:forged:";

    function wz(zz, uz) {
      return `${zz} ${uz}`
    }
    nz.flatMap((zz => iz.map((uz => wz(zz, uz)))));

    function Xz(zz) {
      let {
        blade: uz,
        guard: bz,
        handle: Ez
      } = zz;
      return `${Kz}${uz.toLowerCase()}-${bz.toLowerCase()}-${Ez.toLowerCase()}`
    }

    function fz(zz) {
      if (! function(zz) {
          return "string" === typeof zz && zz.startsWith(Kz)
        }(zz)) return null;
      const uz = zz.slice(Kz.length).split("-").map((zz => nz.find((uz => uz.toLowerCase() === zz))));
      return 3 !== uz.length || uz.includes(void 0) ? null : {
        blade: uz[0],
        guard: uz[1],
        handle: uz[2]
      }
    }
    const sz = new Map;

    function rz(zz) {
      var uz;
      let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rz;
      const Ez = "string" === typeof zz ? fz(zz) : zz;
      if (null === Ez) return null;
      const nz = Xz(Ez),
        tz = bz === Rz ? sz.get(nz) : void 0;
      if (void 0 !== tz) return tz;
      const Kz = function(zz, uz) {
        var bz, Ez, nz, tz, Rz, Kz, wz, fz, sz;
        const {
          blade: rz,
          guard: Jz,
          handle: Az
        } = zz, Tz = lz, Lz = rz === Jz && Jz === Az, Pz = Nz((1 + Tz[rz].bladeDamage) * (Lz ? 1 + dz : 1)), Gz = null !== (bz = uz.damageMultiplier) && void 0 !== bz ? bz : Pz, az = null !== (Ez = uz.cooldownMultiplier) && void 0 !== Ez ? Ez : Tz[Az].handleCooldown, Vz = null !== (nz = uz.knockbackMultiplier) && void 0 !== nz ? nz : Nz(1 + Tz[Az].handleKnockback), mz = null !== (tz = uz.reachBonus) && void 0 !== tz ? tz : Tz[Az].handleReach, qz = null !== (Rz = uz.damageReduction) && void 0 !== Rz ? Rz : Tz[Jz].guardReduction, hz = null !== (Kz = uz.traits) && void 0 !== Kz ? Kz : function(zz) {
          const uz = {},
            bz = {};
          for (const Mz of iz) {
            var Ez, nz;
            const iz = lz[oz(zz, Mz)].trait;
            null !== iz && (uz[iz] = (null !== (Ez = uz[iz]) && void 0 !== Ez ? Ez : 0) + Hz[Mz], bz[iz] = (null !== (nz = bz[iz]) && void 0 !== nz ? nz : 0) + 1)
          }
          for (const iz of Object.keys(uz)) {
            const zz = 3 === bz[iz] ? pz : 2 === bz[iz] ? Oz : 1;
            uz[iz] = Nz(uz[iz] * zz)
          }
          return uz
        }(zz), Uz = null !== (wz = uz.ability) && void 0 !== wz ? wz : null, cz = void 0 !== uz.name, gz = null !== (fz = uz.name) && void 0 !== fz ? fz : Lz ? `Pure ${rz} Sword` : `${Tz[Jz].epithet} ${rz} Sword`, Sz = null !== (sz = uz.lore) && void 0 !== sz ? sz : `Forged by the Forge Mother from a ${rz.toLowerCase()} blade, ${Jz.toLowerCase()} guard and ${Az.toLowerCase()} handle.`, yz = function(zz) {
          let {
            blade: uz,
            guard: bz,
            handle: Ez
          } = zz;
          const nz = lz;
          return Mz * (nz[uz].value + nz[bz].value + nz[Ez].value)
        }(zz), Dz = Tz[rz].value + Tz[Jz].value + Tz[Az].value, Qz = cz ? "Tier 5" : Dz <= 4 ? "Tier 1" : Dz <= 8 ? "Tier 2" : Dz <= 14 ? "Tier 3" : Dz <= 22 ? "Tier 4" : "Tier 5", Wz = [];
        1 !== Gz && Wz.push(`${xz(Gz-1)} damage`);
        1 !== az && Wz.push(`${vz(1/az-1)} faster strikes`);
        1 !== Vz && Wz.push(`${xz(Vz-1)} knockback`);
        mz > 0 && Wz.push(`+${mz} reach`);
        qz > 0 && Wz.push(`${vz(qz)} less damage taken while held`);
        const ez = [];
        for (const iz of Object.keys(hz)) ez.push(`${Fz[iz].name}: ${Fz[iz].describe(hz[iz])}`);
        null !== Uz && ez.push(`${Zz[Uz].name}: ${Zz[Uz].description}`);
        return Wz.push(...ez), {
          id: Xz(zz),
          parts: zz,
          baseSword: Tz[rz].baseSword,
          displayName: gz,
          lore: Sz,
          properties: Wz,
          effects: ez,
          named: cz,
          damageMultiplier: Gz,
          cooldownMultiplier: az,
          knockbackMultiplier: Vz,
          reachBonus: mz,
          damageReduction: qz,
          traits: hz,
          ability: Uz,
          coalCost: yz,
          enchantmentTier: Qz,
          powerMultiplier: Nz(Gz / az)
        }
      }(Ez, null !== (uz = bz[nz]) && void 0 !== uz ? uz : {});
      return bz === Rz && sz.set(nz, Kz), Kz
    }

    function oz(zz, uz) {
      return "Blade" === uz ? zz.blade : "Guard" === uz ? zz.guard : zz.handle
    }

    function Nz(zz) {
      return Math.round(100 * zz) / 100
    }

    function vz(zz) {
      return `${Math.round(100*zz)}%`
    }

    function xz(zz) {
      return `${zz>=0?"+":""}${vz(zz)}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);