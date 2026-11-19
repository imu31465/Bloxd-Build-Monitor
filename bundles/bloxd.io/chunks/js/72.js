export const id = 72;
export const ids = [72];
export const modules = {
  36014: (TT, oT, IT) => {
    if (IT.d(oT, {
        b: () => BT,
        e: () => zT,
        f: () => WT,
        g: () => kT,
        j: () => wT,
        m: () => rT
      }), 39 == IT.j) var iT = IT(36017);
    const zT = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      kT = ["Blade", "Guard", "Handle"],
      WT = {
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
      XT = 4,
      BT = "Coal",
      FT = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      ST = 1.15,
      DT = 1.35,
      LT = .06,
      xT = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: TT => `${RT(.06*TT)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: TT => `Mobs you slay drop ${Math.round(4*TT)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: TT => `${RT(.12*TT)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: TT => `+${RT(.2*TT)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: TT => `${RT(.15*TT)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: TT => `Heal ${RT(.06*TT)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: TT => `${RT(.1*TT)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      cT = {
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
      KT = 39 == IT.j ? iT.b : null,
      MT = "skyblock:forged:";

    function rT(TT, oT) {
      return `${TT} ${oT}`
    }
    zT.flatMap((TT => kT.map((oT => rT(TT, oT)))));

    function AT(TT) {
      let {
        blade: oT,
        guard: IT,
        handle: iT
      } = TT;
      return `${MT}${oT.toLowerCase()}-${IT.toLowerCase()}-${iT.toLowerCase()}`
    }

    function gT(TT) {
      if (! function(TT) {
          return "string" === typeof TT && TT.startsWith(MT)
        }(TT)) return null;
      const oT = TT.slice(MT.length).split("-").map((TT => zT.find((oT => oT.toLowerCase() === TT))));
      return 3 !== oT.length || oT.includes(void 0) ? null : {
        blade: oT[0],
        guard: oT[1],
        handle: oT[2]
      }
    }
    const hT = new Map;

    function wT(TT) {
      var oT;
      let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KT;
      const iT = "string" === typeof TT ? gT(TT) : TT;
      if (null === iT) return null;
      const zT = AT(iT),
        BT = IT === KT ? hT.get(zT) : void 0;
      if (void 0 !== BT) return BT;
      const MT = function(TT, oT) {
        var IT, iT, zT, BT, KT, MT, rT, gT, hT;
        const {
          blade: wT,
          guard: vT,
          handle: ET
        } = TT, fT = WT, CT = wT === vT && vT === ET, jT = eT((1 + fT[wT].bladeDamage) * (CT ? 1 + LT : 1)), JT = null !== (IT = oT.damageMultiplier) && void 0 !== IT ? IT : jT, UT = null !== (iT = oT.cooldownMultiplier) && void 0 !== iT ? iT : fT[ET].handleCooldown, aT = null !== (zT = oT.knockbackMultiplier) && void 0 !== zT ? zT : eT(1 + fT[ET].handleKnockback), YT = null !== (BT = oT.reachBonus) && void 0 !== BT ? BT : fT[ET].handleReach, QT = null !== (KT = oT.damageReduction) && void 0 !== KT ? KT : fT[vT].guardReduction, OT = null !== (MT = oT.traits) && void 0 !== MT ? MT : function(TT) {
          const oT = {},
            IT = {};
          for (const XT of kT) {
            var iT, zT;
            const kT = WT[mT(TT, XT)].trait;
            null !== kT && (oT[kT] = (null !== (iT = oT[kT]) && void 0 !== iT ? iT : 0) + FT[XT], IT[kT] = (null !== (zT = IT[kT]) && void 0 !== zT ? zT : 0) + 1)
          }
          for (const kT of Object.keys(oT)) {
            const TT = 3 === IT[kT] ? DT : 2 === IT[kT] ? ST : 1;
            oT[kT] = eT(oT[kT] * TT)
          }
          return oT
        }(TT), HT = null !== (rT = oT.ability) && void 0 !== rT ? rT : null, nT = void 0 !== oT.name, qT = null !== (gT = oT.name) && void 0 !== gT ? gT : CT ? `Pure ${wT} Sword` : `${fT[vT].epithet} ${wT} Sword`, ZT = null !== (hT = oT.lore) && void 0 !== hT ? hT : `Forged by the Forge Mother from a ${wT.toLowerCase()} blade, ${vT.toLowerCase()} guard and ${ET.toLowerCase()} handle.`, lT = function(TT) {
          let {
            blade: oT,
            guard: IT,
            handle: iT
          } = TT;
          const zT = WT;
          return XT * (zT[oT].value + zT[IT].value + zT[iT].value)
        }(TT), sT = fT[wT].value + fT[vT].value + fT[ET].value, tT = nT ? "Tier 5" : sT <= 4 ? "Tier 1" : sT <= 8 ? "Tier 2" : sT <= 14 ? "Tier 3" : sT <= 22 ? "Tier 4" : "Tier 5", GT = [];
        1 !== JT && GT.push(`${uT(JT-1)} damage`);
        1 !== UT && GT.push(`${RT(1/UT-1)} faster strikes`);
        1 !== aT && GT.push(`${uT(aT-1)} knockback`);
        YT > 0 && GT.push(`+${YT} reach`);
        QT > 0 && GT.push(`${RT(QT)} less damage taken while held`);
        const pT = [];
        for (const kT of Object.keys(OT)) pT.push(`${xT[kT].name}: ${xT[kT].describe(OT[kT])}`);
        null !== HT && pT.push(`${cT[HT].name}: ${cT[HT].description}`);
        return GT.push(...pT), {
          id: AT(TT),
          parts: TT,
          baseSword: fT[wT].baseSword,
          displayName: qT,
          lore: ZT,
          properties: GT,
          effects: pT,
          named: nT,
          damageMultiplier: JT,
          cooldownMultiplier: UT,
          knockbackMultiplier: aT,
          reachBonus: YT,
          damageReduction: QT,
          traits: OT,
          ability: HT,
          coalCost: lT,
          enchantmentTier: tT,
          powerMultiplier: eT(JT / UT)
        }
      }(iT, null !== (oT = IT[zT]) && void 0 !== oT ? oT : {});
      return IT === KT && hT.set(zT, MT), MT
    }

    function mT(TT, oT) {
      return "Blade" === oT ? TT.blade : "Guard" === oT ? TT.guard : TT.handle
    }

    function eT(TT) {
      return Math.round(100 * TT) / 100
    }

    function RT(TT) {
      return `${Math.round(100*TT)}%`
    }

    function uT(TT) {
      return `${TT>=0?"+":""}${RT(TT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);