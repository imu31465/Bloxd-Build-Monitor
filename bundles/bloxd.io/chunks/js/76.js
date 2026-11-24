export const id = 76;
export const ids = [76];
export const modules = {
  37139: (BB, jB, zB) => {
    if (zB.d(jB, {
        b: () => uB,
        f: () => nB,
        j: () => IB,
        k: () => dB,
        n: () => tB,
        r: () => kB
      }), 39 == zB.j) var QB = zB(37148);
    const nB = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      dB = ["Blade", "Guard", "Handle"],
      IB = {
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
      NB = 4,
      uB = "Coal",
      UB = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      aB = 1.15,
      pB = 1.35,
      rB = .06,
      sB = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: BB => `${EB(.06*BB)} less damage taken`
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
          describe: BB => `${EB(.12*BB)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: BB => `+${EB(.2*BB)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: BB => `${EB(.15*BB)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: BB => `Heal ${EB(.06*BB)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: BB => `${EB(.1*BB)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      JB = {
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
      mB = 39 == zB.j ? QB.e : null,
      yB = "skyblock:forged:";

    function kB(BB, jB) {
      return `${BB} ${jB}`
    }
    nB.flatMap((BB => dB.map((jB => kB(BB, jB)))));

    function GB(BB) {
      let {
        blade: jB,
        guard: zB,
        handle: QB
      } = BB;
      return `${yB}${jB.toLowerCase()}-${zB.toLowerCase()}-${QB.toLowerCase()}`
    }

    function LB(BB) {
      if (! function(BB) {
          return "string" === typeof BB && BB.startsWith(yB)
        }(BB)) return null;
      const jB = BB.slice(yB.length).split("-").map((BB => nB.find((jB => jB.toLowerCase() === BB))));
      return 3 !== jB.length || jB.includes(void 0) ? null : {
        blade: jB[0],
        guard: jB[1],
        handle: jB[2]
      }
    }
    const gB = new Map;

    function tB(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mB;
      const QB = "string" === typeof BB ? LB(BB) : BB;
      if (null === QB) return null;
      const nB = GB(QB),
        uB = zB === mB ? gB.get(nB) : void 0;
      if (void 0 !== uB) return uB;
      const yB = function(BB, jB) {
        var zB, QB, nB, uB, mB, yB, kB, LB, gB;
        const {
          blade: tB,
          guard: qB,
          handle: fB
        } = BB, oB = IB, HB = tB === qB && qB === fB, DB = MB((1 + oB[tB].bladeDamage) * (HB ? 1 + rB : 1)), FB = null !== (zB = jB.damageMultiplier) && void 0 !== zB ? zB : DB, YB = null !== (QB = jB.cooldownMultiplier) && void 0 !== QB ? QB : oB[fB].handleCooldown, VB = null !== (nB = jB.knockbackMultiplier) && void 0 !== nB ? nB : MB(1 + oB[fB].handleKnockback), hB = null !== (uB = jB.reachBonus) && void 0 !== uB ? uB : oB[fB].handleReach, XB = null !== (mB = jB.damageReduction) && void 0 !== mB ? mB : oB[qB].guardReduction, ZB = null !== (yB = jB.traits) && void 0 !== yB ? yB : function(BB) {
          const jB = {},
            zB = {};
          for (const NB of dB) {
            var QB, nB;
            const dB = IB[SB(BB, NB)].trait;
            null !== dB && (jB[dB] = (null !== (QB = jB[dB]) && void 0 !== QB ? QB : 0) + UB[NB], zB[dB] = (null !== (nB = zB[dB]) && void 0 !== nB ? nB : 0) + 1)
          }
          for (const dB of Object.keys(jB)) {
            const BB = 3 === zB[dB] ? pB : 2 === zB[dB] ? aB : 1;
            jB[dB] = MB(jB[dB] * BB)
          }
          return jB
        }(BB), AB = null !== (kB = jB.ability) && void 0 !== kB ? kB : null, TB = void 0 !== jB.name, PB = null !== (LB = jB.name) && void 0 !== LB ? LB : HB ? `Pure ${tB} Sword` : `${oB[qB].epithet} ${tB} Sword`, WB = null !== (gB = jB.lore) && void 0 !== gB ? gB : `Forged by the Forge Mother from a ${tB.toLowerCase()} blade, ${qB.toLowerCase()} guard and ${fB.toLowerCase()} handle.`, eB = function(BB) {
          let {
            blade: jB,
            guard: zB,
            handle: QB
          } = BB;
          const nB = IB;
          return NB * (nB[jB].value + nB[zB].value + nB[QB].value)
        }(BB), lB = oB[tB].value + oB[qB].value + oB[fB].value, wB = TB ? "Tier 5" : lB <= 4 ? "Tier 1" : lB <= 8 ? "Tier 2" : lB <= 14 ? "Tier 3" : lB <= 22 ? "Tier 4" : "Tier 5", xB = [];
        1 !== FB && xB.push(`${iB(FB-1)} damage`);
        1 !== YB && xB.push(`${EB(1/YB-1)} faster strikes`);
        1 !== VB && xB.push(`${iB(VB-1)} knockback`);
        hB > 0 && xB.push(`+${hB} reach`);
        XB > 0 && xB.push(`${EB(XB)} less damage taken while held`);
        const KB = [];
        for (const dB of Object.keys(ZB)) KB.push(`${sB[dB].name}: ${sB[dB].describe(ZB[dB])}`);
        null !== AB && KB.push(`${JB[AB].name}: ${JB[AB].description}`);
        return xB.push(...KB), {
          id: GB(BB),
          parts: BB,
          baseSword: oB[tB].baseSword,
          displayName: PB,
          lore: WB,
          properties: xB,
          effects: KB,
          named: TB,
          damageMultiplier: FB,
          cooldownMultiplier: YB,
          knockbackMultiplier: VB,
          reachBonus: hB,
          damageReduction: XB,
          traits: ZB,
          ability: AB,
          coalCost: eB,
          enchantmentTier: wB,
          powerMultiplier: MB(FB / YB)
        }
      }(QB, null !== (jB = zB[nB]) && void 0 !== jB ? jB : {});
      return zB === mB && gB.set(nB, yB), yB
    }

    function SB(BB, jB) {
      return "Blade" === jB ? BB.blade : "Guard" === jB ? BB.guard : BB.handle
    }

    function MB(BB) {
      return Math.round(100 * BB) / 100
    }

    function EB(BB) {
      return `${Math.round(100*BB)}%`
    }

    function iB(BB) {
      return `${BB>=0?"+":""}${EB(BB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);