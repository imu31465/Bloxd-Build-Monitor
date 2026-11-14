export const id = 62;
export const ids = [62];
export const modules = {
  35515: (FF, WF, SF) => {
    if (SF.d(WF, {
        e: () => dF,
        i: () => AF,
        m: () => hF,
        o: () => uF,
        p: () => qW,
        s: () => tW
      }), 33 == SF.j) var CF = SF(35520);
    const AF = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      uF = ["Blade", "Guard", "Handle"],
      hF = {
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
      bW = 4,
      dF = "Coal",
      PF = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      RF = 1.15,
      iW = 1.35,
      eF = .06,
      EF = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: FF => `${DF(.06*FF)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: FF => `Mobs you slay drop ${Math.round(4*FF)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: FF => `${DF(.12*FF)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: FF => `+${DF(.2*FF)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: FF => `${DF(.15*FF)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: FF => `Heal ${DF(.06*FF)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: FF => `${DF(.1*FF)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      QF = {
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
      rW = 33 == SF.j ? CF.b : null,
      gW = "skyblock:forged:";

    function tW(FF, WF) {
      return `${FF} ${WF}`
    }
    AF.flatMap((FF => uF.map((WF => tW(FF, WF)))));

    function TF(FF) {
      let {
        blade: WF,
        guard: SF,
        handle: CF
      } = FF;
      return `${gW}${WF.toLowerCase()}-${SF.toLowerCase()}-${CF.toLowerCase()}`
    }

    function aW(FF) {
      if (! function(FF) {
          return "string" === typeof FF && FF.startsWith(gW)
        }(FF)) return null;
      const WF = FF.slice(gW.length).split("-").map((FF => AF.find((WF => WF.toLowerCase() === FF))));
      return 3 !== WF.length || WF.includes(void 0) ? null : {
        blade: WF[0],
        guard: WF[1],
        handle: WF[2]
      }
    }
    const kW = new Map;

    function qW(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rW;
      const CF = "string" === typeof FF ? aW(FF) : FF;
      if (null === CF) return null;
      const AF = TF(CF),
        dF = SF === rW ? kW.get(AF) : void 0;
      if (void 0 !== dF) return dF;
      const gW = function(FF, WF) {
        var SF, CF, AF, dF, rW, gW, tW, aW, kW;
        const {
          blade: qW,
          guard: mW,
          handle: OF
        } = FF, xW = hF, ZF = qW === mW && mW === OF, oF = NF((1 + xW[qW].bladeDamage) * (ZF ? 1 + eF : 1)), YF = null !== (SF = WF.damageMultiplier) && void 0 !== SF ? SF : oF, MF = null !== (CF = WF.cooldownMultiplier) && void 0 !== CF ? CF : xW[OF].handleCooldown, cW = null !== (AF = WF.knockbackMultiplier) && void 0 !== AF ? AF : NF(1 + xW[OF].handleKnockback), GF = null !== (dF = WF.reachBonus) && void 0 !== dF ? dF : xW[OF].handleReach, zW = null !== (rW = WF.damageReduction) && void 0 !== rW ? rW : xW[mW].guardReduction, IF = null !== (gW = WF.traits) && void 0 !== gW ? gW : function(FF) {
          const WF = {},
            SF = {};
          for (const bW of uF) {
            var CF, AF;
            const uF = hF[VF(FF, bW)].trait;
            null !== uF && (WF[uF] = (null !== (CF = WF[uF]) && void 0 !== CF ? CF : 0) + PF[bW], SF[uF] = (null !== (AF = SF[uF]) && void 0 !== AF ? AF : 0) + 1)
          }
          for (const uF of Object.keys(WF)) {
            const FF = 3 === SF[uF] ? iW : 2 === SF[uF] ? RF : 1;
            WF[uF] = NF(WF[uF] * FF)
          }
          return WF
        }(FF), fF = null !== (tW = WF.ability) && void 0 !== tW ? tW : null, yW = void 0 !== WF.name, sF = null !== (aW = WF.name) && void 0 !== aW ? aW : ZF ? `Pure ${qW} Sword` : `${xW[mW].epithet} ${qW} Sword`, nF = null !== (kW = WF.lore) && void 0 !== kW ? kW : `Forged by the Forge Mother from a ${qW.toLowerCase()} blade, ${mW.toLowerCase()} guard and ${OF.toLowerCase()} handle.`, HF = function(FF) {
          let {
            blade: WF,
            guard: SF,
            handle: CF
          } = FF;
          const AF = hF;
          return bW * (AF[WF].value + AF[SF].value + AF[CF].value)
        }(FF), KF = xW[qW].value + xW[mW].value + xW[OF].value, wF = yW ? "Tier 5" : KF <= 4 ? "Tier 1" : KF <= 8 ? "Tier 2" : KF <= 14 ? "Tier 3" : KF <= 22 ? "Tier 4" : "Tier 5", XF = [];
        1 !== YF && XF.push(`${LF(YF-1)} damage`);
        1 !== MF && XF.push(`${DF(1/MF-1)} faster strikes`);
        1 !== cW && XF.push(`${LF(cW-1)} knockback`);
        GF > 0 && XF.push(`+${GF} reach`);
        zW > 0 && XF.push(`${DF(zW)} less damage taken while held`);
        const UF = [];
        for (const uF of Object.keys(IF)) UF.push(`${EF[uF].name}: ${EF[uF].describe(IF[uF])}`);
        null !== fF && UF.push(`${QF[fF].name}: ${QF[fF].description}`);
        return XF.push(...UF), {
          id: TF(FF),
          parts: FF,
          baseSword: xW[qW].baseSword,
          displayName: sF,
          lore: nF,
          properties: XF,
          effects: UF,
          named: yW,
          damageMultiplier: YF,
          cooldownMultiplier: MF,
          knockbackMultiplier: cW,
          reachBonus: GF,
          damageReduction: zW,
          traits: IF,
          ability: fF,
          coalCost: HF,
          enchantmentTier: wF,
          powerMultiplier: NF(YF / MF)
        }
      }(CF, null !== (WF = SF[AF]) && void 0 !== WF ? WF : {});
      return SF === rW && kW.set(AF, gW), gW
    }

    function VF(FF, WF) {
      return "Blade" === WF ? FF.blade : "Guard" === WF ? FF.guard : FF.handle
    }

    function NF(FF) {
      return Math.round(100 * FF) / 100
    }

    function DF(FF) {
      return `${Math.round(100*FF)}%`
    }

    function LF(FF) {
      return `${FF>=0?"+":""}${DF(FF)}`
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);