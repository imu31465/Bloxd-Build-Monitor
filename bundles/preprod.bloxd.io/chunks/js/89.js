export const id = 89;
export const ids = [89];
export const modules = {
  38210: (WW, iW, OW) => {
    if (OW.d(iW, {
        b: () => cW,
        e: () => EW,
        i: () => PW,
        j: () => NW,
        m: () => KW,
        n: () => UW
      }), 47 == OW.j) var mW = OW(38214);
    const EW = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      NW = ["Blade", "Guard", "Handle"],
      PW = {
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
      LW = 4,
      cW = "Coal",
      wW = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      tW = 1.15,
      ZW = 1.35,
      xW = .06,
      lW = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: WW => `${yW(.06*WW)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: WW => `Mobs you slay drop ${Math.round(4*WW)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: WW => `${yW(.12*WW)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: WW => `+${yW(.2*WW)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: WW => `${yW(.15*WW)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: WW => `Heal ${yW(.06*WW)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: WW => `${yW(.1*WW)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      AW = {
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
      bW = 47 == OW.j ? mW.c : null,
      jW = "skyblock:forged:";

    function UW(WW, iW) {
      return `${WW} ${iW}`
    }
    EW.flatMap((WW => NW.map((iW => UW(WW, iW)))));

    function kW(WW) {
      let {
        blade: iW,
        guard: OW,
        handle: mW
      } = WW;
      return `${jW}${iW.toLowerCase()}-${OW.toLowerCase()}-${mW.toLowerCase()}`
    }

    function sW(WW) {
      if (! function(WW) {
          return "string" === typeof WW && WW.startsWith(jW)
        }(WW)) return null;
      const iW = WW.slice(jW.length).split("-").map((WW => EW.find((iW => iW.toLowerCase() === WW))));
      return 3 !== iW.length || iW.includes(void 0) ? null : {
        blade: iW[0],
        guard: iW[1],
        handle: iW[2]
      }
    }
    const MW = new Map;

    function KW(WW) {
      var iW;
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW;
      const mW = "string" === typeof WW ? sW(WW) : WW;
      if (null === mW) return null;
      const EW = kW(mW),
        cW = OW === bW ? MW.get(EW) : void 0;
      if (void 0 !== cW) return cW;
      const jW = function(WW, iW) {
        var OW, mW, EW, cW, bW, jW, UW, sW, MW;
        const {
          blade: KW,
          guard: JW,
          handle: hW
        } = WW, HW = PW, nW = KW === JW && JW === hW, uW = YW((1 + HW[KW].bladeDamage) * (nW ? 1 + xW : 1)), oW = null !== (OW = iW.damageMultiplier) && void 0 !== OW ? OW : uW, dW = null !== (mW = iW.cooldownMultiplier) && void 0 !== mW ? mW : HW[hW].handleCooldown, eW = null !== (EW = iW.knockbackMultiplier) && void 0 !== EW ? EW : YW(1 + HW[hW].handleKnockback), vW = null !== (cW = iW.reachBonus) && void 0 !== cW ? cW : HW[hW].handleReach, gW = null !== (bW = iW.damageReduction) && void 0 !== bW ? bW : HW[JW].guardReduction, DW = null !== (jW = iW.traits) && void 0 !== jW ? jW : function(WW) {
          const iW = {},
            OW = {};
          for (const LW of NW) {
            var mW, EW;
            const NW = PW[SW(WW, LW)].trait;
            null !== NW && (iW[NW] = (null !== (mW = iW[NW]) && void 0 !== mW ? mW : 0) + wW[LW], OW[NW] = (null !== (EW = OW[NW]) && void 0 !== EW ? EW : 0) + 1)
          }
          for (const NW of Object.keys(iW)) {
            const WW = 3 === OW[NW] ? ZW : 2 === OW[NW] ? tW : 1;
            iW[NW] = YW(iW[NW] * WW)
          }
          return iW
        }(WW), VW = null !== (UW = iW.ability) && void 0 !== UW ? UW : null, pW = void 0 !== iW.name, fW = null !== (sW = iW.name) && void 0 !== sW ? sW : nW ? `Pure ${KW} Sword` : `${HW[JW].epithet} ${KW} Sword`, CW = null !== (MW = iW.lore) && void 0 !== MW ? MW : `Forged by the Forge Mother from a ${KW.toLowerCase()} blade, ${JW.toLowerCase()} guard and ${hW.toLowerCase()} handle.`, XW = function(WW) {
          let {
            blade: iW,
            guard: OW,
            handle: mW
          } = WW;
          const EW = PW;
          return LW * (EW[iW].value + EW[OW].value + EW[mW].value)
        }(WW), BW = HW[KW].value + HW[JW].value + HW[hW].value, qW = pW ? "Tier 5" : BW <= 4 ? "Tier 1" : BW <= 8 ? "Tier 2" : BW <= 14 ? "Tier 3" : BW <= 22 ? "Tier 4" : "Tier 5", RW = [];
        1 !== oW && RW.push(`${TW(oW-1)} damage`);
        1 !== dW && RW.push(`${yW(1/dW-1)} faster strikes`);
        1 !== eW && RW.push(`${TW(eW-1)} knockback`);
        vW > 0 && RW.push(`+${vW} reach`);
        gW > 0 && RW.push(`${yW(gW)} less damage taken while held`);
        const GW = [];
        for (const NW of Object.keys(DW)) GW.push(`${lW[NW].name}: ${lW[NW].describe(DW[NW])}`);
        null !== VW && GW.push(`${AW[VW].name}: ${AW[VW].description}`);
        return RW.push(...GW), {
          id: kW(WW),
          parts: WW,
          baseSword: HW[KW].baseSword,
          displayName: fW,
          lore: CW,
          properties: RW,
          effects: GW,
          named: pW,
          damageMultiplier: oW,
          cooldownMultiplier: dW,
          knockbackMultiplier: eW,
          reachBonus: vW,
          damageReduction: gW,
          traits: DW,
          ability: VW,
          coalCost: XW,
          enchantmentTier: qW,
          powerMultiplier: YW(oW / dW)
        }
      }(mW, null !== (iW = OW[EW]) && void 0 !== iW ? iW : {});
      return OW === bW && MW.set(EW, jW), jW
    }

    function SW(WW, iW) {
      return "Blade" === iW ? WW.blade : "Guard" === iW ? WW.guard : WW.handle
    }

    function YW(WW) {
      return Math.round(100 * WW) / 100
    }

    function yW(WW) {
      return `${Math.round(100*WW)}%`
    }

    function TW(WW) {
      return `${WW>=0?"+":""}${yW(WW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);