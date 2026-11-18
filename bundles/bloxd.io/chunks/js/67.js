export const id = 67;
export const ids = [67];
export const modules = {
  35996: (BB, TB, dB) => {
    if (dB.d(TB, {
        d: () => YB,
        f: () => yB,
        g: () => lB,
        k: () => pB,
        l: () => NB,
        p: () => EB
      }), 36 == dB.j) var VB = dB(36e3);
    const yB = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      pB = ["Blade", "Guard", "Handle"],
      lB = {
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
      JB = 4,
      YB = "Coal",
      gB = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      oB = 1.15,
      kB = 1.35,
      LB = .06,
      OB = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: BB => `${sB(.06*BB)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: BB => `Mobs you slay drop ${Math.round(4*BB)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: BB => `${sB(.12*BB)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: BB => `+${sB(.2*BB)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: BB => `${sB(.15*BB)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: BB => `Heal ${sB(.06*BB)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: BB => `${sB(.1*BB)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      DB = {
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
      uB = 36 == dB.j ? VB.e : null,
      HB = "skyblock:forged:";

    function EB(BB, TB) {
      return `${BB} ${TB}`
    }
    yB.flatMap((BB => pB.map((TB => EB(BB, TB)))));

    function vB(BB) {
      let {
        blade: TB,
        guard: dB,
        handle: VB
      } = BB;
      return `${HB}${TB.toLowerCase()}-${dB.toLowerCase()}-${VB.toLowerCase()}`
    }

    function mB(BB) {
      if (! function(BB) {
          return "string" === typeof BB && BB.startsWith(HB)
        }(BB)) return null;
      const TB = BB.slice(HB.length).split("-").map((BB => yB.find((TB => TB.toLowerCase() === BB))));
      return 3 !== TB.length || TB.includes(void 0) ? null : {
        blade: TB[0],
        guard: TB[1],
        handle: TB[2]
      }
    }
    const iB = new Map;

    function NB(BB) {
      var TB;
      let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uB;
      const VB = "string" === typeof BB ? mB(BB) : BB;
      if (null === VB) return null;
      const yB = vB(VB),
        YB = dB === uB ? iB.get(yB) : void 0;
      if (void 0 !== YB) return YB;
      const HB = function(BB, TB) {
        var dB, VB, yB, YB, uB, HB, EB, mB, iB;
        const {
          blade: NB,
          guard: zB,
          handle: wB
        } = BB, UB = lB, FB = NB === zB && zB === wB, KB = fB((1 + UB[NB].bladeDamage) * (FB ? 1 + LB : 1)), rB = null !== (dB = TB.damageMultiplier) && void 0 !== dB ? dB : KB, IB = null !== (VB = TB.cooldownMultiplier) && void 0 !== VB ? VB : UB[wB].handleCooldown, cB = null !== (yB = TB.knockbackMultiplier) && void 0 !== yB ? yB : fB(1 + UB[wB].handleKnockback), SB = null !== (YB = TB.reachBonus) && void 0 !== YB ? YB : UB[wB].handleReach, PB = null !== (uB = TB.damageReduction) && void 0 !== uB ? uB : UB[zB].guardReduction, QB = null !== (HB = TB.traits) && void 0 !== HB ? HB : function(BB) {
          const TB = {},
            dB = {};
          for (const JB of pB) {
            var VB, yB;
            const pB = lB[tB(BB, JB)].trait;
            null !== pB && (TB[pB] = (null !== (VB = TB[pB]) && void 0 !== VB ? VB : 0) + gB[JB], dB[pB] = (null !== (yB = dB[pB]) && void 0 !== yB ? yB : 0) + 1)
          }
          for (const pB of Object.keys(TB)) {
            const BB = 3 === dB[pB] ? kB : 2 === dB[pB] ? oB : 1;
            TB[pB] = fB(TB[pB] * BB)
          }
          return TB
        }(BB), RB = null !== (EB = TB.ability) && void 0 !== EB ? EB : null, aB = void 0 !== TB.name, ZB = null !== (mB = TB.name) && void 0 !== mB ? mB : FB ? `Pure ${NB} Sword` : `${UB[zB].epithet} ${NB} Sword`, XB = null !== (iB = TB.lore) && void 0 !== iB ? iB : `Forged by the Forge Mother from a ${NB.toLowerCase()} blade, ${zB.toLowerCase()} guard and ${wB.toLowerCase()} handle.`, WB = function(BB) {
          let {
            blade: TB,
            guard: dB,
            handle: VB
          } = BB;
          const yB = lB;
          return JB * (yB[TB].value + yB[dB].value + yB[VB].value)
        }(BB), hB = UB[NB].value + UB[zB].value + UB[wB].value, CB = aB ? "Tier 5" : hB <= 4 ? "Tier 1" : hB <= 8 ? "Tier 2" : hB <= 14 ? "Tier 3" : hB <= 22 ? "Tier 4" : "Tier 5", GB = [];
        1 !== rB && GB.push(`${MB(rB-1)} damage`);
        1 !== IB && GB.push(`${sB(1/IB-1)} faster strikes`);
        1 !== cB && GB.push(`${MB(cB-1)} knockback`);
        SB > 0 && GB.push(`+${SB} reach`);
        PB > 0 && GB.push(`${sB(PB)} less damage taken while held`);
        const qB = [];
        for (const pB of Object.keys(QB)) qB.push(`${OB[pB].name}: ${OB[pB].describe(QB[pB])}`);
        null !== RB && qB.push(`${DB[RB].name}: ${DB[RB].description}`);
        return GB.push(...qB), {
          id: vB(BB),
          parts: BB,
          baseSword: UB[NB].baseSword,
          displayName: ZB,
          lore: XB,
          properties: GB,
          effects: qB,
          named: aB,
          damageMultiplier: rB,
          cooldownMultiplier: IB,
          knockbackMultiplier: cB,
          reachBonus: SB,
          damageReduction: PB,
          traits: QB,
          ability: RB,
          coalCost: WB,
          enchantmentTier: CB,
          powerMultiplier: fB(rB / IB)
        }
      }(VB, null !== (TB = dB[yB]) && void 0 !== TB ? TB : {});
      return dB === uB && iB.set(yB, HB), HB
    }

    function tB(BB, TB) {
      return "Blade" === TB ? BB.blade : "Guard" === TB ? BB.guard : BB.handle
    }

    function fB(BB) {
      return Math.round(100 * BB) / 100
    }

    function sB(BB) {
      return `${Math.round(100*BB)}%`
    }

    function MB(BB) {
      return `${BB>=0?"+":""}${sB(BB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);