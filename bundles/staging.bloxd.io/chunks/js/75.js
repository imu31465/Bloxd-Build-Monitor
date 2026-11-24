export const id = 75;
export const ids = [75];
export const modules = {
  37043: (DD, zD, wD) => {
    if (wD.d(zD, {
        b: () => cD,
        e: () => sD,
        g: () => rD,
        j: () => KD,
        l: () => JD,
        p: () => hD
      }), 39 == wD.j) var pD = wD(37045);
    const sD = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      KD = ["Blade", "Guard", "Handle"],
      rD = {
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
      LD = 4,
      cD = "Coal",
      gD = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      RD = 1.15,
      AD = 1.35,
      UD = .06,
      fD = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: DD => `${XD(.06*DD)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: DD => `Mobs you slay drop ${Math.round(4*DD)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: DD => `${XD(.12*DD)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: DD => `+${XD(.2*DD)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: DD => `${XD(.15*DD)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: DD => `Heal ${XD(.06*DD)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: DD => `${XD(.1*DD)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      ID = {
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
      BD = 39 == wD.j ? pD.e : null,
      GD = "skyblock:forged:";

    function hD(DD, zD) {
      return `${DD} ${zD}`
    }
    sD.flatMap((DD => KD.map((zD => hD(DD, zD)))));

    function nD(DD) {
      let {
        blade: zD,
        guard: wD,
        handle: pD
      } = DD;
      return `${GD}${zD.toLowerCase()}-${wD.toLowerCase()}-${pD.toLowerCase()}`
    }

    function MD(DD) {
      if (! function(DD) {
          return "string" === typeof DD && DD.startsWith(GD)
        }(DD)) return null;
      const zD = DD.slice(GD.length).split("-").map((DD => sD.find((zD => zD.toLowerCase() === DD))));
      return 3 !== zD.length || zD.includes(void 0) ? null : {
        blade: zD[0],
        guard: zD[1],
        handle: zD[2]
      }
    }
    const OD = new Map;

    function JD(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD;
      const pD = "string" === typeof DD ? MD(DD) : DD;
      if (null === pD) return null;
      const sD = nD(pD),
        cD = wD === BD ? OD.get(sD) : void 0;
      if (void 0 !== cD) return cD;
      const GD = function(DD, zD) {
        var wD, pD, sD, cD, BD, GD, hD, MD, OD;
        const {
          blade: JD,
          guard: PD,
          handle: CD
        } = DD, xD = rD, TD = JD === PD && PD === CD, bD = QD((1 + xD[JD].bladeDamage) * (TD ? 1 + UD : 1)), jD = null !== (wD = zD.damageMultiplier) && void 0 !== wD ? wD : bD, dD = null !== (pD = zD.cooldownMultiplier) && void 0 !== pD ? pD : xD[CD].handleCooldown, SD = null !== (sD = zD.knockbackMultiplier) && void 0 !== sD ? sD : QD(1 + xD[CD].handleKnockback), iD = null !== (cD = zD.reachBonus) && void 0 !== cD ? cD : xD[CD].handleReach, lD = null !== (BD = zD.damageReduction) && void 0 !== BD ? BD : xD[PD].guardReduction, WD = null !== (GD = zD.traits) && void 0 !== GD ? GD : function(DD) {
          const zD = {},
            wD = {};
          for (const LD of KD) {
            var pD, sD;
            const KD = rD[ED(DD, LD)].trait;
            null !== KD && (zD[KD] = (null !== (pD = zD[KD]) && void 0 !== pD ? pD : 0) + gD[LD], wD[KD] = (null !== (sD = wD[KD]) && void 0 !== sD ? sD : 0) + 1)
          }
          for (const KD of Object.keys(zD)) {
            const DD = 3 === wD[KD] ? AD : 2 === wD[KD] ? RD : 1;
            zD[KD] = QD(zD[KD] * DD)
          }
          return zD
        }(DD), ND = null !== (hD = zD.ability) && void 0 !== hD ? hD : null, ZD = void 0 !== zD.name, yD = null !== (MD = zD.name) && void 0 !== MD ? MD : TD ? `Pure ${JD} Sword` : `${xD[PD].epithet} ${JD} Sword`, kD = null !== (OD = zD.lore) && void 0 !== OD ? OD : `Forged by the Forge Mother from a ${JD.toLowerCase()} blade, ${PD.toLowerCase()} guard and ${CD.toLowerCase()} handle.`, mD = function(DD) {
          let {
            blade: zD,
            guard: wD,
            handle: pD
          } = DD;
          const sD = rD;
          return LD * (sD[zD].value + sD[wD].value + sD[pD].value)
        }(DD), eD = xD[JD].value + xD[PD].value + xD[CD].value, oD = ZD ? "Tier 5" : eD <= 4 ? "Tier 1" : eD <= 8 ? "Tier 2" : eD <= 14 ? "Tier 3" : eD <= 22 ? "Tier 4" : "Tier 5", aD = [];
        1 !== jD && aD.push(`${VD(jD-1)} damage`);
        1 !== dD && aD.push(`${XD(1/dD-1)} faster strikes`);
        1 !== SD && aD.push(`${VD(SD-1)} knockback`);
        iD > 0 && aD.push(`+${iD} reach`);
        lD > 0 && aD.push(`${XD(lD)} less damage taken while held`);
        const uD = [];
        for (const KD of Object.keys(WD)) uD.push(`${fD[KD].name}: ${fD[KD].describe(WD[KD])}`);
        null !== ND && uD.push(`${ID[ND].name}: ${ID[ND].description}`);
        return aD.push(...uD), {
          id: nD(DD),
          parts: DD,
          baseSword: xD[JD].baseSword,
          displayName: yD,
          lore: kD,
          properties: aD,
          effects: uD,
          named: ZD,
          damageMultiplier: jD,
          cooldownMultiplier: dD,
          knockbackMultiplier: SD,
          reachBonus: iD,
          damageReduction: lD,
          traits: WD,
          ability: ND,
          coalCost: mD,
          enchantmentTier: oD,
          powerMultiplier: QD(jD / dD)
        }
      }(pD, null !== (zD = wD[sD]) && void 0 !== zD ? zD : {});
      return wD === BD && OD.set(sD, GD), GD
    }

    function ED(DD, zD) {
      return "Blade" === zD ? DD.blade : "Guard" === zD ? DD.guard : DD.handle
    }

    function QD(DD) {
      return Math.round(100 * DD) / 100
    }

    function XD(DD) {
      return `${Math.round(100*DD)}%`
    }

    function VD(DD) {
      return `${DD>=0?"+":""}${XD(DD)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);