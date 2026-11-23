export const id = 75;
export const ids = [75];
export const modules = {
  36932: (CC, zC, ZC) => {
    if (ZC.d(zC, {
        e: () => oC,
        g: () => wC,
        h: () => nC,
        i: () => bC,
        j: () => xC,
        l: () => PC
      }), 39 == ZC.j) var QC = ZC(36938);
    const wC = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      bC = ["Blade", "Guard", "Handle"],
      nC = {
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
      fC = 4,
      oC = "Coal",
      qC = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      FC = 1.15,
      WC = 1.35,
      NC = .06,
      MC = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: CC => `${iC(.06*CC)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: CC => `Mobs you slay drop ${Math.round(4*CC)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: CC => `${iC(.12*CC)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: CC => `+${iC(.2*CC)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: CC => `${iC(.15*CC)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: CC => `Heal ${iC(.06*CC)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: CC => `${iC(.1*CC)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      gC = {
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
      SC = 39 == ZC.j ? QC.e : null,
      pC = "skyblock:forged:";

    function PC(CC, zC) {
      return `${CC} ${zC}`
    }
    wC.flatMap((CC => bC.map((zC => PC(CC, zC)))));

    function GC(CC) {
      let {
        blade: zC,
        guard: ZC,
        handle: QC
      } = CC;
      return `${pC}${zC.toLowerCase()}-${ZC.toLowerCase()}-${QC.toLowerCase()}`
    }

    function RC(CC) {
      if (! function(CC) {
          return "string" === typeof CC && CC.startsWith(pC)
        }(CC)) return null;
      const zC = CC.slice(pC.length).split("-").map((CC => wC.find((zC => zC.toLowerCase() === CC))));
      return 3 !== zC.length || zC.includes(void 0) ? null : {
        blade: zC[0],
        guard: zC[1],
        handle: zC[2]
      }
    }
    const AC = new Map;

    function xC(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SC;
      const QC = "string" === typeof CC ? RC(CC) : CC;
      if (null === QC) return null;
      const wC = GC(QC),
        oC = ZC === SC ? AC.get(wC) : void 0;
      if (void 0 !== oC) return oC;
      const pC = function(CC, zC) {
        var ZC, QC, wC, oC, SC, pC, PC, RC, AC;
        const {
          blade: xC,
          guard: eC,
          handle: hC
        } = CC, KC = nC, YC = xC === eC && eC === hC, dC = IC((1 + KC[xC].bladeDamage) * (YC ? 1 + NC : 1)), mC = null !== (ZC = zC.damageMultiplier) && void 0 !== ZC ? ZC : dC, HC = null !== (QC = zC.cooldownMultiplier) && void 0 !== QC ? QC : KC[hC].handleCooldown, EC = null !== (wC = zC.knockbackMultiplier) && void 0 !== wC ? wC : IC(1 + KC[hC].handleKnockback), lC = null !== (oC = zC.reachBonus) && void 0 !== oC ? oC : KC[hC].handleReach, XC = null !== (SC = zC.damageReduction) && void 0 !== SC ? SC : KC[eC].guardReduction, cC = null !== (pC = zC.traits) && void 0 !== pC ? pC : function(CC) {
          const zC = {},
            ZC = {};
          for (const fC of bC) {
            var QC, wC;
            const bC = nC[JC(CC, fC)].trait;
            null !== bC && (zC[bC] = (null !== (QC = zC[bC]) && void 0 !== QC ? QC : 0) + qC[fC], ZC[bC] = (null !== (wC = ZC[bC]) && void 0 !== wC ? wC : 0) + 1)
          }
          for (const bC of Object.keys(zC)) {
            const CC = 3 === ZC[bC] ? WC : 2 === ZC[bC] ? FC : 1;
            zC[bC] = IC(zC[bC] * CC)
          }
          return zC
        }(CC), uC = null !== (PC = zC.ability) && void 0 !== PC ? PC : null, rC = void 0 !== zC.name, sC = null !== (RC = zC.name) && void 0 !== RC ? RC : YC ? `Pure ${xC} Sword` : `${KC[eC].epithet} ${xC} Sword`, TC = null !== (AC = zC.lore) && void 0 !== AC ? AC : `Forged by the Forge Mother from a ${xC.toLowerCase()} blade, ${eC.toLowerCase()} guard and ${hC.toLowerCase()} handle.`, aC = function(CC) {
          let {
            blade: zC,
            guard: ZC,
            handle: QC
          } = CC;
          const wC = nC;
          return fC * (wC[zC].value + wC[ZC].value + wC[QC].value)
        }(CC), tC = KC[xC].value + KC[eC].value + KC[hC].value, DC = rC ? "Tier 5" : tC <= 4 ? "Tier 1" : tC <= 8 ? "Tier 2" : tC <= 14 ? "Tier 3" : tC <= 22 ? "Tier 4" : "Tier 5", jC = [];
        1 !== mC && jC.push(`${vC(mC-1)} damage`);
        1 !== HC && jC.push(`${iC(1/HC-1)} faster strikes`);
        1 !== EC && jC.push(`${vC(EC-1)} knockback`);
        lC > 0 && jC.push(`+${lC} reach`);
        XC > 0 && jC.push(`${iC(XC)} less damage taken while held`);
        const yC = [];
        for (const bC of Object.keys(cC)) yC.push(`${MC[bC].name}: ${MC[bC].describe(cC[bC])}`);
        null !== uC && yC.push(`${gC[uC].name}: ${gC[uC].description}`);
        return jC.push(...yC), {
          id: GC(CC),
          parts: CC,
          baseSword: KC[xC].baseSword,
          displayName: sC,
          lore: TC,
          properties: jC,
          effects: yC,
          named: rC,
          damageMultiplier: mC,
          cooldownMultiplier: HC,
          knockbackMultiplier: EC,
          reachBonus: lC,
          damageReduction: XC,
          traits: cC,
          ability: uC,
          coalCost: aC,
          enchantmentTier: DC,
          powerMultiplier: IC(mC / HC)
        }
      }(QC, null !== (zC = ZC[wC]) && void 0 !== zC ? zC : {});
      return ZC === SC && AC.set(wC, pC), pC
    }

    function JC(CC, zC) {
      return "Blade" === zC ? CC.blade : "Guard" === zC ? CC.guard : CC.handle
    }

    function IC(CC) {
      return Math.round(100 * CC) / 100
    }

    function iC(CC) {
      return `${Math.round(100*CC)}%`
    }

    function vC(CC) {
      return `${CC>=0?"+":""}${iC(CC)}`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);