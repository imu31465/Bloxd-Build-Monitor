export const id = 72;
export const ids = [72];
export const modules = {
  36415: (DD, CD, cD) => {
    if (cD.d(CD, {
        d: () => QD,
        h: () => pD,
        l: () => fD,
        n: () => iD,
        p: () => mD,
        t: () => vD
      }), 39 == cD.j) var ID = cD(36420);
    const pD = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      iD = ["Blade", "Guard", "Handle"],
      fD = {
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
      bD = 4,
      QD = "Coal",
      wD = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      SD = 1.15,
      BD = 1.35,
      yD = .06,
      MD = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: DD => `${PD(.06*DD)} less damage taken`
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
          describe: DD => `${PD(.12*DD)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: DD => `+${PD(.2*DD)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: DD => `${PD(.15*DD)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: DD => `Heal ${PD(.06*DD)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: DD => `${PD(.1*DD)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      tD = {
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
      ZD = 39 == cD.j ? ID.c : null,
      oD = "skyblock:forged:";

    function vD(DD, CD) {
      return `${DD} ${CD}`
    }
    pD.flatMap((DD => iD.map((CD => vD(DD, CD)))));

    function ND(DD) {
      let {
        blade: CD,
        guard: cD,
        handle: ID
      } = DD;
      return `${oD}${CD.toLowerCase()}-${cD.toLowerCase()}-${ID.toLowerCase()}`
    }

    function gD(DD) {
      if (! function(DD) {
          return "string" === typeof DD && DD.startsWith(oD)
        }(DD)) return null;
      const CD = DD.slice(oD.length).split("-").map((DD => pD.find((CD => CD.toLowerCase() === DD))));
      return 3 !== CD.length || CD.includes(void 0) ? null : {
        blade: CD[0],
        guard: CD[1],
        handle: CD[2]
      }
    }
    const XD = new Map;

    function mD(DD) {
      var CD;
      let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZD;
      const ID = "string" === typeof DD ? gD(DD) : DD;
      if (null === ID) return null;
      const pD = ND(ID),
        QD = cD === ZD ? XD.get(pD) : void 0;
      if (void 0 !== QD) return QD;
      const oD = function(DD, CD) {
        var cD, ID, pD, QD, ZD, oD, vD, gD, XD;
        const {
          blade: mD,
          guard: UD,
          handle: xD
        } = DD, qD = fD, JD = mD === UD && UD === xD, KD = OD((1 + qD[mD].bladeDamage) * (JD ? 1 + yD : 1)), aD = null !== (cD = CD.damageMultiplier) && void 0 !== cD ? cD : KD, VD = null !== (ID = CD.cooldownMultiplier) && void 0 !== ID ? ID : qD[xD].handleCooldown, zD = null !== (pD = CD.knockbackMultiplier) && void 0 !== pD ? pD : OD(1 + qD[xD].handleKnockback), jD = null !== (QD = CD.reachBonus) && void 0 !== QD ? QD : qD[xD].handleReach, lD = null !== (ZD = CD.damageReduction) && void 0 !== ZD ? ZD : qD[UD].guardReduction, LD = null !== (oD = CD.traits) && void 0 !== oD ? oD : function(DD) {
          const CD = {},
            cD = {};
          for (const bD of iD) {
            var ID, pD;
            const iD = fD[nD(DD, bD)].trait;
            null !== iD && (CD[iD] = (null !== (ID = CD[iD]) && void 0 !== ID ? ID : 0) + wD[bD], cD[iD] = (null !== (pD = cD[iD]) && void 0 !== pD ? pD : 0) + 1)
          }
          for (const iD of Object.keys(CD)) {
            const DD = 3 === cD[iD] ? BD : 2 === cD[iD] ? SD : 1;
            CD[iD] = OD(CD[iD] * DD)
          }
          return CD
        }(DD), TD = null !== (vD = CD.ability) && void 0 !== vD ? vD : null, GD = void 0 !== CD.name, RD = null !== (gD = CD.name) && void 0 !== gD ? gD : JD ? `Pure ${mD} Sword` : `${qD[UD].epithet} ${mD} Sword`, kD = null !== (XD = CD.lore) && void 0 !== XD ? XD : `Forged by the Forge Mother from a ${mD.toLowerCase()} blade, ${UD.toLowerCase()} guard and ${xD.toLowerCase()} handle.`, dD = function(DD) {
          let {
            blade: CD,
            guard: cD,
            handle: ID
          } = DD;
          const pD = fD;
          return bD * (pD[CD].value + pD[cD].value + pD[ID].value)
        }(DD), YD = qD[mD].value + qD[UD].value + qD[xD].value, WD = GD ? "Tier 5" : YD <= 4 ? "Tier 1" : YD <= 8 ? "Tier 2" : YD <= 14 ? "Tier 3" : YD <= 22 ? "Tier 4" : "Tier 5", sD = [];
        1 !== aD && sD.push(`${HD(aD-1)} damage`);
        1 !== VD && sD.push(`${PD(1/VD-1)} faster strikes`);
        1 !== zD && sD.push(`${HD(zD-1)} knockback`);
        jD > 0 && sD.push(`+${jD} reach`);
        lD > 0 && sD.push(`${PD(lD)} less damage taken while held`);
        const ED = [];
        for (const iD of Object.keys(LD)) ED.push(`${MD[iD].name}: ${MD[iD].describe(LD[iD])}`);
        null !== TD && ED.push(`${tD[TD].name}: ${tD[TD].description}`);
        return sD.push(...ED), {
          id: ND(DD),
          parts: DD,
          baseSword: qD[mD].baseSword,
          displayName: RD,
          lore: kD,
          properties: sD,
          effects: ED,
          named: GD,
          damageMultiplier: aD,
          cooldownMultiplier: VD,
          knockbackMultiplier: zD,
          reachBonus: jD,
          damageReduction: lD,
          traits: LD,
          ability: TD,
          coalCost: dD,
          enchantmentTier: WD,
          powerMultiplier: OD(aD / VD)
        }
      }(ID, null !== (CD = cD[pD]) && void 0 !== CD ? CD : {});
      return cD === ZD && XD.set(pD, oD), oD
    }

    function nD(DD, CD) {
      return "Blade" === CD ? DD.blade : "Guard" === CD ? DD.guard : DD.handle
    }

    function OD(DD) {
      return Math.round(100 * DD) / 100
    }

    function PD(DD) {
      return `${Math.round(100*DD)}%`
    }

    function HD(DD) {
      return `${DD>=0?"+":""}${PD(DD)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);