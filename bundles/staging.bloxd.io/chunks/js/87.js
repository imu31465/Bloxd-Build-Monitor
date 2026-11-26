export const id = 87;
export const ids = [87];
export const modules = {
  37747: (BB, OB, GB) => {
    if (GB.d(OB, {
        c: () => yB,
        g: () => DB,
        i: () => oB,
        l: () => QB,
        n: () => VB,
        q: () => NB
      }), 46 == GB.j) var YB = GB(37753);
    const DB = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      QB = ["Blade", "Guard", "Handle"],
      oB = {
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
      jB = 4,
      yB = "Coal",
      JB = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      MB = 1.15,
      PB = 1.35,
      zB = .06,
      lB = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: BB => `${UB(.06*BB)} less damage taken`
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
          describe: BB => `${UB(.12*BB)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: BB => `+${UB(.2*BB)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: BB => `${UB(.15*BB)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: BB => `Heal ${UB(.06*BB)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: BB => `${UB(.1*BB)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      pB = {
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
      qB = 46 == GB.j ? YB.c : null,
      ZB = "skyblock:forged:";

    function NB(BB, OB) {
      return `${BB} ${OB}`
    }
    DB.flatMap((BB => QB.map((OB => NB(BB, OB)))));

    function RB(BB) {
      let {
        blade: OB,
        guard: GB,
        handle: YB
      } = BB;
      return `${ZB}${OB.toLowerCase()}-${GB.toLowerCase()}-${YB.toLowerCase()}`
    }

    function WB(BB) {
      if (! function(BB) {
          return "string" === typeof BB && BB.startsWith(ZB)
        }(BB)) return null;
      const OB = BB.slice(ZB.length).split("-").map((BB => DB.find((OB => OB.toLowerCase() === BB))));
      return 3 !== OB.length || OB.includes(void 0) ? null : {
        blade: OB[0],
        guard: OB[1],
        handle: OB[2]
      }
    }
    const AB = new Map;

    function VB(BB) {
      var OB;
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qB;
      const YB = "string" === typeof BB ? WB(BB) : BB;
      if (null === YB) return null;
      const DB = RB(YB),
        yB = GB === qB ? AB.get(DB) : void 0;
      if (void 0 !== yB) return yB;
      const ZB = function(BB, OB) {
        var GB, YB, DB, yB, qB, ZB, NB, WB, AB;
        const {
          blade: VB,
          guard: kB,
          handle: dB
        } = BB, KB = oB, uB = VB === kB && kB === dB, mB = nB((1 + KB[VB].bladeDamage) * (uB ? 1 + zB : 1)), IB = null !== (GB = OB.damageMultiplier) && void 0 !== GB ? GB : mB, FB = null !== (YB = OB.cooldownMultiplier) && void 0 !== YB ? YB : KB[dB].handleCooldown, iB = null !== (DB = OB.knockbackMultiplier) && void 0 !== DB ? DB : nB(1 + KB[dB].handleKnockback), LB = null !== (yB = OB.reachBonus) && void 0 !== yB ? yB : KB[dB].handleReach, gB = null !== (qB = OB.damageReduction) && void 0 !== qB ? qB : KB[kB].guardReduction, rB = null !== (ZB = OB.traits) && void 0 !== ZB ? ZB : function(BB) {
          const OB = {},
            GB = {};
          for (const jB of QB) {
            var YB, DB;
            const QB = oB[SB(BB, jB)].trait;
            null !== QB && (OB[QB] = (null !== (YB = OB[QB]) && void 0 !== YB ? YB : 0) + JB[jB], GB[QB] = (null !== (DB = GB[QB]) && void 0 !== DB ? DB : 0) + 1)
          }
          for (const QB of Object.keys(OB)) {
            const BB = 3 === GB[QB] ? PB : 2 === GB[QB] ? MB : 1;
            OB[QB] = nB(OB[QB] * BB)
          }
          return OB
        }(BB), XB = null !== (NB = OB.ability) && void 0 !== NB ? NB : null, wB = void 0 !== OB.name, EB = null !== (WB = OB.name) && void 0 !== WB ? WB : uB ? `Pure ${VB} Sword` : `${KB[kB].epithet} ${VB} Sword`, cB = null !== (AB = OB.lore) && void 0 !== AB ? AB : `Forged by the Forge Mother from a ${VB.toLowerCase()} blade, ${kB.toLowerCase()} guard and ${dB.toLowerCase()} handle.`, hB = function(BB) {
          let {
            blade: OB,
            guard: GB,
            handle: YB
          } = BB;
          const DB = oB;
          return jB * (DB[OB].value + DB[GB].value + DB[YB].value)
        }(BB), aB = KB[VB].value + KB[kB].value + KB[dB].value, eB = wB ? "Tier 5" : aB <= 4 ? "Tier 1" : aB <= 8 ? "Tier 2" : aB <= 14 ? "Tier 3" : aB <= 22 ? "Tier 4" : "Tier 5", TB = [];
        1 !== IB && TB.push(`${fB(IB-1)} damage`);
        1 !== FB && TB.push(`${UB(1/FB-1)} faster strikes`);
        1 !== iB && TB.push(`${fB(iB-1)} knockback`);
        LB > 0 && TB.push(`+${LB} reach`);
        gB > 0 && TB.push(`${UB(gB)} less damage taken while held`);
        const bB = [];
        for (const QB of Object.keys(rB)) bB.push(`${lB[QB].name}: ${lB[QB].describe(rB[QB])}`);
        null !== XB && bB.push(`${pB[XB].name}: ${pB[XB].description}`);
        return TB.push(...bB), {
          id: RB(BB),
          parts: BB,
          baseSword: KB[VB].baseSword,
          displayName: EB,
          lore: cB,
          properties: TB,
          effects: bB,
          named: wB,
          damageMultiplier: IB,
          cooldownMultiplier: FB,
          knockbackMultiplier: iB,
          reachBonus: LB,
          damageReduction: gB,
          traits: rB,
          ability: XB,
          coalCost: hB,
          enchantmentTier: eB,
          powerMultiplier: nB(IB / FB)
        }
      }(YB, null !== (OB = GB[DB]) && void 0 !== OB ? OB : {});
      return GB === qB && AB.set(DB, ZB), ZB
    }

    function SB(BB, OB) {
      return "Blade" === OB ? BB.blade : "Guard" === OB ? BB.guard : BB.handle
    }

    function nB(BB) {
      return Math.round(100 * BB) / 100
    }

    function UB(BB) {
      return `${Math.round(100*BB)}%`
    }

    function fB(BB) {
      return `${BB>=0?"+":""}${UB(BB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);