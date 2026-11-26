export const id = 87;
export const ids = [87];
export const modules = {
  37933: (HH, BH, LH) => {
    if (LH.d(BH, {
        e: () => zH,
        g: () => rH,
        j: () => hH,
        m: () => SH,
        p: () => TH,
        t: () => MH
      }), 46 == LH.j) var AH = LH(37941);
    const rH = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      SH = ["Blade", "Guard", "Handle"],
      hH = {
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
      tH = 4,
      zH = "Coal",
      CH = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      EH = 1.15,
      XH = 1.35,
      GH = .06,
      YH = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: HH => `${OH(.06*HH)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: HH => `Mobs you slay drop ${Math.round(4*HH)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: HH => `${OH(.12*HH)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: HH => `+${OH(.2*HH)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: HH => `${OH(.15*HH)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: HH => `Heal ${OH(.06*HH)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: HH => `${OH(.1*HH)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      uH = {
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
      QH = 46 == LH.j ? AH.d : null,
      WH = "skyblock:forged:";

    function MH(HH, BH) {
      return `${HH} ${BH}`
    }
    rH.flatMap((HH => SH.map((BH => MH(HH, BH)))));

    function xH(HH) {
      let {
        blade: BH,
        guard: LH,
        handle: AH
      } = HH;
      return `${WH}${BH.toLowerCase()}-${LH.toLowerCase()}-${AH.toLowerCase()}`
    }

    function vH(HH) {
      if (! function(HH) {
          return "string" === typeof HH && HH.startsWith(WH)
        }(HH)) return null;
      const BH = HH.slice(WH.length).split("-").map((HH => rH.find((BH => BH.toLowerCase() === HH))));
      return 3 !== BH.length || BH.includes(void 0) ? null : {
        blade: BH[0],
        guard: BH[1],
        handle: BH[2]
      }
    }
    const PH = new Map;

    function TH(HH) {
      var BH;
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QH;
      const AH = "string" === typeof HH ? vH(HH) : HH;
      if (null === AH) return null;
      const rH = xH(AH),
        zH = LH === QH ? PH.get(rH) : void 0;
      if (void 0 !== zH) return zH;
      const WH = function(HH, BH) {
        var LH, AH, rH, zH, QH, WH, MH, vH, PH;
        const {
          blade: TH,
          guard: kH,
          handle: mH
        } = HH, oH = hH, IH = TH === kH && kH === mH, fH = VH((1 + oH[TH].bladeDamage) * (IH ? 1 + GH : 1)), lH = null !== (LH = BH.damageMultiplier) && void 0 !== LH ? LH : fH, KH = null !== (AH = BH.cooldownMultiplier) && void 0 !== AH ? AH : oH[mH].handleCooldown, cH = null !== (rH = BH.knockbackMultiplier) && void 0 !== rH ? rH : VH(1 + oH[mH].handleKnockback), eH = null !== (zH = BH.reachBonus) && void 0 !== zH ? zH : oH[mH].handleReach, qH = null !== (QH = BH.damageReduction) && void 0 !== QH ? QH : oH[kH].guardReduction, gH = null !== (WH = BH.traits) && void 0 !== WH ? WH : function(HH) {
          const BH = {},
            LH = {};
          for (const tH of SH) {
            var AH, rH;
            const SH = hH[UH(HH, tH)].trait;
            null !== SH && (BH[SH] = (null !== (AH = BH[SH]) && void 0 !== AH ? AH : 0) + CH[tH], LH[SH] = (null !== (rH = LH[SH]) && void 0 !== rH ? rH : 0) + 1)
          }
          for (const SH of Object.keys(BH)) {
            const HH = 3 === LH[SH] ? XH : 2 === LH[SH] ? EH : 1;
            BH[SH] = VH(BH[SH] * HH)
          }
          return BH
        }(HH), NH = null !== (MH = BH.ability) && void 0 !== MH ? MH : null, RH = void 0 !== BH.name, jH = null !== (vH = BH.name) && void 0 !== vH ? vH : IH ? `Pure ${TH} Sword` : `${oH[kH].epithet} ${TH} Sword`, nH = null !== (PH = BH.lore) && void 0 !== PH ? PH : `Forged by the Forge Mother from a ${TH.toLowerCase()} blade, ${kH.toLowerCase()} guard and ${mH.toLowerCase()} handle.`, FH = function(HH) {
          let {
            blade: BH,
            guard: LH,
            handle: AH
          } = HH;
          const rH = hH;
          return tH * (rH[BH].value + rH[LH].value + rH[AH].value)
        }(HH), DH = oH[TH].value + oH[kH].value + oH[mH].value, wH = RH ? "Tier 5" : DH <= 4 ? "Tier 1" : DH <= 8 ? "Tier 2" : DH <= 14 ? "Tier 3" : DH <= 22 ? "Tier 4" : "Tier 5", ZH = [];
        1 !== lH && ZH.push(`${bH(lH-1)} damage`);
        1 !== KH && ZH.push(`${OH(1/KH-1)} faster strikes`);
        1 !== cH && ZH.push(`${bH(cH-1)} knockback`);
        eH > 0 && ZH.push(`+${eH} reach`);
        qH > 0 && ZH.push(`${OH(qH)} less damage taken while held`);
        const dH = [];
        for (const SH of Object.keys(gH)) dH.push(`${YH[SH].name}: ${YH[SH].describe(gH[SH])}`);
        null !== NH && dH.push(`${uH[NH].name}: ${uH[NH].description}`);
        return ZH.push(...dH), {
          id: xH(HH),
          parts: HH,
          baseSword: oH[TH].baseSword,
          displayName: jH,
          lore: nH,
          properties: ZH,
          effects: dH,
          named: RH,
          damageMultiplier: lH,
          cooldownMultiplier: KH,
          knockbackMultiplier: cH,
          reachBonus: eH,
          damageReduction: qH,
          traits: gH,
          ability: NH,
          coalCost: FH,
          enchantmentTier: wH,
          powerMultiplier: VH(lH / KH)
        }
      }(AH, null !== (BH = LH[rH]) && void 0 !== BH ? BH : {});
      return LH === QH && PH.set(rH, WH), WH
    }

    function UH(HH, BH) {
      return "Blade" === BH ? HH.blade : "Guard" === BH ? HH.guard : HH.handle
    }

    function VH(HH) {
      return Math.round(100 * HH) / 100
    }

    function OH(HH) {
      return `${Math.round(100*HH)}%`
    }

    function bH(HH) {
      return `${HH>=0?"+":""}${OH(HH)}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);