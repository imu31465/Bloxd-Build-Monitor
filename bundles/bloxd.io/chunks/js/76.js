export const id = 76;
export const ids = [76];
export const modules = {
  37415: (GG, bG, ZG) => {
    if (ZG.d(bG, {
        d: () => UG,
        e: () => SG,
        h: () => yG,
        l: () => LG,
        m: () => oG,
        p: () => JG
      }), 39 == ZG.j) var wG = ZG(37420);
    const SG = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      LG = ["Blade", "Guard", "Handle"],
      yG = {
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
      kG = 4,
      UG = "Coal",
      YG = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      VG = 1.15,
      pG = 1.35,
      fG = .06,
      QG = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: GG => `${iG(.06*GG)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: GG => `Mobs you slay drop ${Math.round(4*GG)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: GG => `${iG(.12*GG)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: GG => `+${iG(.2*GG)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: GG => `${iG(.15*GG)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: GG => `Heal ${iG(.06*GG)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: GG => `${iG(.1*GG)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      KG = {
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
      hG = 39 == ZG.j ? wG.e : null,
      dG = "skyblock:forged:";

    function JG(GG, bG) {
      return `${GG} ${bG}`
    }
    SG.flatMap((GG => LG.map((bG => JG(GG, bG)))));

    function rG(GG) {
      let {
        blade: bG,
        guard: ZG,
        handle: wG
      } = GG;
      return `${dG}${bG.toLowerCase()}-${ZG.toLowerCase()}-${wG.toLowerCase()}`
    }

    function zG(GG) {
      if (! function(GG) {
          return "string" === typeof GG && GG.startsWith(dG)
        }(GG)) return null;
      const bG = GG.slice(dG.length).split("-").map((GG => SG.find((bG => bG.toLowerCase() === GG))));
      return 3 !== bG.length || bG.includes(void 0) ? null : {
        blade: bG[0],
        guard: bG[1],
        handle: bG[2]
      }
    }
    const EG = new Map;

    function oG(GG) {
      var bG;
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hG;
      const wG = "string" === typeof GG ? zG(GG) : GG;
      if (null === wG) return null;
      const SG = rG(wG),
        UG = ZG === hG ? EG.get(SG) : void 0;
      if (void 0 !== UG) return UG;
      const dG = function(GG, bG) {
        var ZG, wG, SG, UG, hG, dG, JG, zG, EG;
        const {
          blade: oG,
          guard: WG,
          handle: mG
        } = GG, IG = yG, FG = oG === WG && WG === mG, vG = uG((1 + IG[oG].bladeDamage) * (FG ? 1 + fG : 1)), aG = null !== (ZG = bG.damageMultiplier) && void 0 !== ZG ? ZG : vG, cG = null !== (wG = bG.cooldownMultiplier) && void 0 !== wG ? wG : IG[mG].handleCooldown, lG = null !== (SG = bG.knockbackMultiplier) && void 0 !== SG ? SG : uG(1 + IG[mG].handleKnockback), jG = null !== (UG = bG.reachBonus) && void 0 !== UG ? UG : IG[mG].handleReach, PG = null !== (hG = bG.damageReduction) && void 0 !== hG ? hG : IG[WG].guardReduction, MG = null !== (dG = bG.traits) && void 0 !== dG ? dG : function(GG) {
          const bG = {},
            ZG = {};
          for (const kG of LG) {
            var wG, SG;
            const LG = yG[XG(GG, kG)].trait;
            null !== LG && (bG[LG] = (null !== (wG = bG[LG]) && void 0 !== wG ? wG : 0) + YG[kG], ZG[LG] = (null !== (SG = ZG[LG]) && void 0 !== SG ? SG : 0) + 1)
          }
          for (const LG of Object.keys(bG)) {
            const GG = 3 === ZG[LG] ? pG : 2 === ZG[LG] ? VG : 1;
            bG[LG] = uG(bG[LG] * GG)
          }
          return bG
        }(GG), AG = null !== (JG = bG.ability) && void 0 !== JG ? JG : null, sG = void 0 !== bG.name, qG = null !== (zG = bG.name) && void 0 !== zG ? zG : FG ? `Pure ${oG} Sword` : `${IG[WG].epithet} ${oG} Sword`, nG = null !== (EG = bG.lore) && void 0 !== EG ? EG : `Forged by the Forge Mother from a ${oG.toLowerCase()} blade, ${WG.toLowerCase()} guard and ${mG.toLowerCase()} handle.`, gG = function(GG) {
          let {
            blade: bG,
            guard: ZG,
            handle: wG
          } = GG;
          const SG = yG;
          return kG * (SG[bG].value + SG[ZG].value + SG[wG].value)
        }(GG), eG = IG[oG].value + IG[WG].value + IG[mG].value, RG = sG ? "Tier 5" : eG <= 4 ? "Tier 1" : eG <= 8 ? "Tier 2" : eG <= 14 ? "Tier 3" : eG <= 22 ? "Tier 4" : "Tier 5", TG = [];
        1 !== aG && TG.push(`${CG(aG-1)} damage`);
        1 !== cG && TG.push(`${iG(1/cG-1)} faster strikes`);
        1 !== lG && TG.push(`${CG(lG-1)} knockback`);
        jG > 0 && TG.push(`+${jG} reach`);
        PG > 0 && TG.push(`${iG(PG)} less damage taken while held`);
        const HG = [];
        for (const LG of Object.keys(MG)) HG.push(`${QG[LG].name}: ${QG[LG].describe(MG[LG])}`);
        null !== AG && HG.push(`${KG[AG].name}: ${KG[AG].description}`);
        return TG.push(...HG), {
          id: rG(GG),
          parts: GG,
          baseSword: IG[oG].baseSword,
          displayName: qG,
          lore: nG,
          properties: TG,
          effects: HG,
          named: sG,
          damageMultiplier: aG,
          cooldownMultiplier: cG,
          knockbackMultiplier: lG,
          reachBonus: jG,
          damageReduction: PG,
          traits: MG,
          ability: AG,
          coalCost: gG,
          enchantmentTier: RG,
          powerMultiplier: uG(aG / cG)
        }
      }(wG, null !== (bG = ZG[SG]) && void 0 !== bG ? bG : {});
      return ZG === hG && EG.set(SG, dG), dG
    }

    function XG(GG, bG) {
      return "Blade" === bG ? GG.blade : "Guard" === bG ? GG.guard : GG.handle
    }

    function uG(GG) {
      return Math.round(100 * GG) / 100
    }

    function iG(GG) {
      return `${Math.round(100*GG)}%`
    }

    function CG(GG) {
      return `${GG>=0?"+":""}${iG(GG)}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);