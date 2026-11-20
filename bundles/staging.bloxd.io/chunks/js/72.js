export const id = 72;
export const ids = [72];
export const modules = {
  36451: (zz, tz, sz) => {
    if (sz.d(tz, {
        e: () => vz,
        g: () => Wz,
        k: () => Oz,
        l: () => Xz,
        p: () => Yz,
        s: () => Hz
      }), 39 == sz.j) var Fz = sz(36453);
    const Wz = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Xz = ["Blade", "Guard", "Handle"],
      Oz = {
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
      oz = 4,
      vz = "Coal",
      Uz = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Kz = 1.15,
      uz = 1.35,
      Nz = .06,
      bz = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: zz => `${Jz(.06*zz)} less damage taken`
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
          describe: zz => `${Jz(.12*zz)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: zz => `+${Jz(.2*zz)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: zz => `${Jz(.15*zz)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: zz => `Heal ${Jz(.06*zz)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: zz => `${Jz(.1*zz)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      wz = {
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
      Dz = 39 == sz.j ? Fz.e : null,
      gz = "skyblock:forged:";

    function Hz(zz, tz) {
      return `${zz} ${tz}`
    }
    Wz.flatMap((zz => Xz.map((tz => Hz(zz, tz)))));

    function Bz(zz) {
      let {
        blade: tz,
        guard: sz,
        handle: Fz
      } = zz;
      return `${gz}${tz.toLowerCase()}-${sz.toLowerCase()}-${Fz.toLowerCase()}`
    }

    function Pz(zz) {
      if (! function(zz) {
          return "string" === typeof zz && zz.startsWith(gz)
        }(zz)) return null;
      const tz = zz.slice(gz.length).split("-").map((zz => Wz.find((tz => tz.toLowerCase() === zz))));
      return 3 !== tz.length || tz.includes(void 0) ? null : {
        blade: tz[0],
        guard: tz[1],
        handle: tz[2]
      }
    }
    const rz = new Map;

    function Yz(zz) {
      var tz;
      let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dz;
      const Fz = "string" === typeof zz ? Pz(zz) : zz;
      if (null === Fz) return null;
      const Wz = Bz(Fz),
        vz = sz === Dz ? rz.get(Wz) : void 0;
      if (void 0 !== vz) return vz;
      const gz = function(zz, tz) {
        var sz, Fz, Wz, vz, Dz, gz, Hz, Pz, rz;
        const {
          blade: Yz,
          guard: Cz,
          handle: ez
        } = zz, Zz = Oz, Gz = Yz === Cz && Cz === ez, Tz = mz((1 + Zz[Yz].bladeDamage) * (Gz ? 1 + Nz : 1)), cz = null !== (sz = tz.damageMultiplier) && void 0 !== sz ? sz : Tz, jz = null !== (Fz = tz.cooldownMultiplier) && void 0 !== Fz ? Fz : Zz[ez].handleCooldown, Az = null !== (Wz = tz.knockbackMultiplier) && void 0 !== Wz ? Wz : mz(1 + Zz[ez].handleKnockback), yz = null !== (vz = tz.reachBonus) && void 0 !== vz ? vz : Zz[ez].handleReach, Mz = null !== (Dz = tz.damageReduction) && void 0 !== Dz ? Dz : Zz[Cz].guardReduction, dz = null !== (gz = tz.traits) && void 0 !== gz ? gz : function(zz) {
          const tz = {},
            sz = {};
          for (const oz of Xz) {
            var Fz, Wz;
            const Xz = Oz[xz(zz, oz)].trait;
            null !== Xz && (tz[Xz] = (null !== (Fz = tz[Xz]) && void 0 !== Fz ? Fz : 0) + Uz[oz], sz[Xz] = (null !== (Wz = sz[Xz]) && void 0 !== Wz ? Wz : 0) + 1)
          }
          for (const Xz of Object.keys(tz)) {
            const zz = 3 === sz[Xz] ? uz : 2 === sz[Xz] ? Kz : 1;
            tz[Xz] = mz(tz[Xz] * zz)
          }
          return tz
        }(zz), hz = null !== (Hz = tz.ability) && void 0 !== Hz ? Hz : null, Qz = void 0 !== tz.name, kz = null !== (Pz = tz.name) && void 0 !== Pz ? Pz : Gz ? `Pure ${Yz} Sword` : `${Zz[Cz].epithet} ${Yz} Sword`, iz = null !== (rz = tz.lore) && void 0 !== rz ? rz : `Forged by the Forge Mother from a ${Yz.toLowerCase()} blade, ${Cz.toLowerCase()} guard and ${ez.toLowerCase()} handle.`, Lz = function(zz) {
          let {
            blade: tz,
            guard: sz,
            handle: Fz
          } = zz;
          const Wz = Oz;
          return oz * (Wz[tz].value + Wz[sz].value + Wz[Fz].value)
        }(zz), lz = Zz[Yz].value + Zz[Cz].value + Zz[ez].value, nz = Qz ? "Tier 5" : lz <= 4 ? "Tier 1" : lz <= 8 ? "Tier 2" : lz <= 14 ? "Tier 3" : lz <= 22 ? "Tier 4" : "Tier 5", az = [];
        1 !== cz && az.push(`${Iz(cz-1)} damage`);
        1 !== jz && az.push(`${Jz(1/jz-1)} faster strikes`);
        1 !== Az && az.push(`${Iz(Az-1)} knockback`);
        yz > 0 && az.push(`+${yz} reach`);
        Mz > 0 && az.push(`${Jz(Mz)} less damage taken while held`);
        const qz = [];
        for (const Xz of Object.keys(dz)) qz.push(`${bz[Xz].name}: ${bz[Xz].describe(dz[Xz])}`);
        null !== hz && qz.push(`${wz[hz].name}: ${wz[hz].description}`);
        return az.push(...qz), {
          id: Bz(zz),
          parts: zz,
          baseSword: Zz[Yz].baseSword,
          displayName: kz,
          lore: iz,
          properties: az,
          effects: qz,
          named: Qz,
          damageMultiplier: cz,
          cooldownMultiplier: jz,
          knockbackMultiplier: Az,
          reachBonus: yz,
          damageReduction: Mz,
          traits: dz,
          ability: hz,
          coalCost: Lz,
          enchantmentTier: nz,
          powerMultiplier: mz(cz / jz)
        }
      }(Fz, null !== (tz = sz[Wz]) && void 0 !== tz ? tz : {});
      return sz === Dz && rz.set(Wz, gz), gz
    }

    function xz(zz, tz) {
      return "Blade" === tz ? zz.blade : "Guard" === tz ? zz.guard : zz.handle
    }

    function mz(zz) {
      return Math.round(100 * zz) / 100
    }

    function Jz(zz) {
      return `${Math.round(100*zz)}%`
    }

    function Iz(zz) {
      return `${zz>=0?"+":""}${Jz(zz)}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);