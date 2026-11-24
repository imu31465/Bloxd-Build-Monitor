export const id = 76;
export const ids = [76];
export const modules = {
  37086: (BB, IB, ZB) => {
    if (ZB.d(IB, {
        b: () => kB,
        e: () => JB,
        h: () => GB,
        j: () => oB,
        k: () => CB,
        o: () => yB
      }), 39 == ZB.j) var TB = ZB(37093);
    const JB = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      oB = ["Blade", "Guard", "Handle"],
      GB = {
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
      vB = 4,
      kB = "Coal",
      cB = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      nB = 1.15,
      hB = 1.35,
      zB = .06,
      FB = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: BB => `${wB(.06*BB)} less damage taken`
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
          describe: BB => `${wB(.12*BB)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: BB => `+${wB(.2*BB)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: BB => `${wB(.15*BB)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: BB => `Heal ${wB(.06*BB)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: BB => `${wB(.1*BB)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      NB = {
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
      gB = 39 == ZB.j ? TB.b : null,
      qB = "skyblock:forged:";

    function yB(BB, IB) {
      return `${BB} ${IB}`
    }
    JB.flatMap((BB => oB.map((IB => yB(BB, IB)))));

    function UB(BB) {
      let {
        blade: IB,
        guard: ZB,
        handle: TB
      } = BB;
      return `${qB}${IB.toLowerCase()}-${ZB.toLowerCase()}-${TB.toLowerCase()}`
    }

    function WB(BB) {
      if (! function(BB) {
          return "string" === typeof BB && BB.startsWith(qB)
        }(BB)) return null;
      const IB = BB.slice(qB.length).split("-").map((BB => JB.find((IB => IB.toLowerCase() === BB))));
      return 3 !== IB.length || IB.includes(void 0) ? null : {
        blade: IB[0],
        guard: IB[1],
        handle: IB[2]
      }
    }
    const dB = new Map;

    function CB(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gB;
      const TB = "string" === typeof BB ? WB(BB) : BB;
      if (null === TB) return null;
      const JB = UB(TB),
        kB = ZB === gB ? dB.get(JB) : void 0;
      if (void 0 !== kB) return kB;
      const qB = function(BB, IB) {
        var ZB, TB, JB, kB, gB, qB, yB, WB, dB;
        const {
          blade: CB,
          guard: YB,
          handle: iB
        } = BB, pB = GB, aB = CB === YB && YB === iB, HB = sB((1 + pB[CB].bladeDamage) * (aB ? 1 + zB : 1)), MB = null !== (ZB = IB.damageMultiplier) && void 0 !== ZB ? ZB : HB, jB = null !== (TB = IB.cooldownMultiplier) && void 0 !== TB ? TB : pB[iB].handleCooldown, PB = null !== (JB = IB.knockbackMultiplier) && void 0 !== JB ? JB : sB(1 + pB[iB].handleKnockback), RB = null !== (kB = IB.reachBonus) && void 0 !== kB ? kB : pB[iB].handleReach, rB = null !== (gB = IB.damageReduction) && void 0 !== gB ? gB : pB[YB].guardReduction, mB = null !== (qB = IB.traits) && void 0 !== qB ? qB : function(BB) {
          const IB = {},
            ZB = {};
          for (const vB of oB) {
            var TB, JB;
            const oB = GB[QB(BB, vB)].trait;
            null !== oB && (IB[oB] = (null !== (TB = IB[oB]) && void 0 !== TB ? TB : 0) + cB[vB], ZB[oB] = (null !== (JB = ZB[oB]) && void 0 !== JB ? JB : 0) + 1)
          }
          for (const oB of Object.keys(IB)) {
            const BB = 3 === ZB[oB] ? hB : 2 === ZB[oB] ? nB : 1;
            IB[oB] = sB(IB[oB] * BB)
          }
          return IB
        }(BB), XB = null !== (yB = IB.ability) && void 0 !== yB ? yB : null, LB = void 0 !== IB.name, eB = null !== (WB = IB.name) && void 0 !== WB ? WB : aB ? `Pure ${CB} Sword` : `${pB[YB].epithet} ${CB} Sword`, uB = null !== (dB = IB.lore) && void 0 !== dB ? dB : `Forged by the Forge Mother from a ${CB.toLowerCase()} blade, ${YB.toLowerCase()} guard and ${iB.toLowerCase()} handle.`, fB = function(BB) {
          let {
            blade: IB,
            guard: ZB,
            handle: TB
          } = BB;
          const JB = GB;
          return vB * (JB[IB].value + JB[ZB].value + JB[TB].value)
        }(BB), lB = pB[CB].value + pB[YB].value + pB[iB].value, AB = LB ? "Tier 5" : lB <= 4 ? "Tier 1" : lB <= 8 ? "Tier 2" : lB <= 14 ? "Tier 3" : lB <= 22 ? "Tier 4" : "Tier 5", tB = [];
        1 !== MB && tB.push(`${OB(MB-1)} damage`);
        1 !== jB && tB.push(`${wB(1/jB-1)} faster strikes`);
        1 !== PB && tB.push(`${OB(PB-1)} knockback`);
        RB > 0 && tB.push(`+${RB} reach`);
        rB > 0 && tB.push(`${wB(rB)} less damage taken while held`);
        const bB = [];
        for (const oB of Object.keys(mB)) bB.push(`${FB[oB].name}: ${FB[oB].describe(mB[oB])}`);
        null !== XB && bB.push(`${NB[XB].name}: ${NB[XB].description}`);
        return tB.push(...bB), {
          id: UB(BB),
          parts: BB,
          baseSword: pB[CB].baseSword,
          displayName: eB,
          lore: uB,
          properties: tB,
          effects: bB,
          named: LB,
          damageMultiplier: MB,
          cooldownMultiplier: jB,
          knockbackMultiplier: PB,
          reachBonus: RB,
          damageReduction: rB,
          traits: mB,
          ability: XB,
          coalCost: fB,
          enchantmentTier: AB,
          powerMultiplier: sB(MB / jB)
        }
      }(TB, null !== (IB = ZB[JB]) && void 0 !== IB ? IB : {});
      return ZB === gB && dB.set(JB, qB), qB
    }

    function QB(BB, IB) {
      return "Blade" === IB ? BB.blade : "Guard" === IB ? BB.guard : BB.handle
    }

    function sB(BB) {
      return Math.round(100 * BB) / 100
    }

    function wB(BB) {
      return `${Math.round(100*BB)}%`
    }

    function OB(BB) {
      return `${BB>=0?"+":""}${wB(BB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);