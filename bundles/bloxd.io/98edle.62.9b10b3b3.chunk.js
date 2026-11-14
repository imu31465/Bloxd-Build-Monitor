export const id = 62;
export const ids = [62];
export const modules = {
  35212: (WW, RW, MW) => {
    if (MW.d(RW, {
        b: () => yR,
        c: () => CW,
        g: () => AW,
        j: () => zR,
        k: () => lW,
        o: () => JW
      }), 33 == MW.j) var wW = MW(35221);
    const CW = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      zR = ["Blade", "Guard", "Handle"],
      AW = {
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
      bR = 4,
      yR = "Coal",
      NW = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      eW = 1.15,
      BW = 1.35,
      tR = .06,
      TW = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: WW => `${QW(.06*WW)} less damage taken`
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
          describe: WW => `${QW(.12*WW)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: WW => `+${QW(.2*WW)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: WW => `${QW(.15*WW)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: WW => `Heal ${QW(.06*WW)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: WW => `${QW(.1*WW)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      gR = {
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
      iR = 33 == MW.j ? wW.b : null,
      YW = "skyblock:forged:";

    function JW(WW, RW) {
      return `${WW} ${RW}`
    }
    CW.flatMap((WW => zR.map((RW => JW(WW, RW)))));

    function PW(WW) {
      let {
        blade: RW,
        guard: MW,
        handle: wW
      } = WW;
      return `${YW}${RW.toLowerCase()}-${MW.toLowerCase()}-${wW.toLowerCase()}`
    }

    function IW(WW) {
      if (! function(WW) {
          return "string" === typeof WW && WW.startsWith(YW)
        }(WW)) return null;
      const RW = WW.slice(YW.length).split("-").map((WW => CW.find((RW => RW.toLowerCase() === WW))));
      return 3 !== RW.length || RW.includes(void 0) ? null : {
        blade: RW[0],
        guard: RW[1],
        handle: RW[2]
      }
    }
    const oW = new Map;

    function lW(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR;
      const wW = "string" === typeof WW ? IW(WW) : WW;
      if (null === wW) return null;
      const CW = PW(wW),
        yR = MW === iR ? oW.get(CW) : void 0;
      if (void 0 !== yR) return yR;
      const YW = function(WW, RW) {
        var MW, wW, CW, yR, iR, YW, JW, IW, oW;
        const {
          blade: lW,
          guard: cR,
          handle: XW
        } = WW, jR = AW, kR = lW === cR && cR === XW, aR = fW((1 + jR[lW].bladeDamage) * (kR ? 1 + tR : 1)), sW = null !== (MW = RW.damageMultiplier) && void 0 !== MW ? MW : aR, dW = null !== (wW = RW.cooldownMultiplier) && void 0 !== wW ? wW : jR[XW].handleCooldown, pW = null !== (CW = RW.knockbackMultiplier) && void 0 !== CW ? CW : fW(1 + jR[XW].handleKnockback), hW = null !== (yR = RW.reachBonus) && void 0 !== yR ? yR : jR[XW].handleReach, UW = null !== (iR = RW.damageReduction) && void 0 !== iR ? iR : jR[cR].guardReduction, EW = null !== (YW = RW.traits) && void 0 !== YW ? YW : function(WW) {
          const RW = {},
            MW = {};
          for (const bR of zR) {
            var wW, CW;
            const zR = AW[FW(WW, bR)].trait;
            null !== zR && (RW[zR] = (null !== (wW = RW[zR]) && void 0 !== wW ? wW : 0) + NW[bR], MW[zR] = (null !== (CW = MW[zR]) && void 0 !== CW ? CW : 0) + 1)
          }
          for (const zR of Object.keys(RW)) {
            const WW = 3 === MW[zR] ? BW : 2 === MW[zR] ? eW : 1;
            RW[zR] = fW(RW[zR] * WW)
          }
          return RW
        }(WW), VW = null !== (JW = RW.ability) && void 0 !== JW ? JW : null, mR = void 0 !== RW.name, xR = null !== (IW = RW.name) && void 0 !== IW ? IW : kR ? `Pure ${lW} Sword` : `${jR[cR].epithet} ${lW} Sword`, vR = null !== (oW = RW.lore) && void 0 !== oW ? oW : `Forged by the Forge Mother from a ${lW.toLowerCase()} blade, ${cR.toLowerCase()} guard and ${XW.toLowerCase()} handle.`, KW = function(WW) {
          let {
            blade: RW,
            guard: MW,
            handle: wW
          } = WW;
          const CW = AW;
          return bR * (CW[RW].value + CW[MW].value + CW[wW].value)
        }(WW), uW = jR[lW].value + jR[cR].value + jR[XW].value, OW = mR ? "Tier 5" : uW <= 4 ? "Tier 1" : uW <= 8 ? "Tier 2" : uW <= 14 ? "Tier 3" : uW <= 22 ? "Tier 4" : "Tier 5", nW = [];
        1 !== sW && nW.push(`${rR(sW-1)} damage`);
        1 !== dW && nW.push(`${QW(1/dW-1)} faster strikes`);
        1 !== pW && nW.push(`${rR(pW-1)} knockback`);
        hW > 0 && nW.push(`+${hW} reach`);
        UW > 0 && nW.push(`${QW(UW)} less damage taken while held`);
        const GW = [];
        for (const zR of Object.keys(EW)) GW.push(`${TW[zR].name}: ${TW[zR].describe(EW[zR])}`);
        null !== VW && GW.push(`${gR[VW].name}: ${gR[VW].description}`);
        return nW.push(...GW), {
          id: PW(WW),
          parts: WW,
          baseSword: jR[lW].baseSword,
          displayName: xR,
          lore: vR,
          properties: nW,
          effects: GW,
          named: mR,
          damageMultiplier: sW,
          cooldownMultiplier: dW,
          knockbackMultiplier: pW,
          reachBonus: hW,
          damageReduction: UW,
          traits: EW,
          ability: VW,
          coalCost: KW,
          enchantmentTier: OW,
          powerMultiplier: fW(sW / dW)
        }
      }(wW, null !== (RW = MW[CW]) && void 0 !== RW ? RW : {});
      return MW === iR && oW.set(CW, YW), YW
    }

    function FW(WW, RW) {
      return "Blade" === RW ? WW.blade : "Guard" === RW ? WW.guard : WW.handle
    }

    function fW(WW) {
      return Math.round(100 * WW) / 100
    }

    function QW(WW) {
      return `${Math.round(100*WW)}%`
    }

    function rR(WW) {
      return `${WW>=0?"+":""}${QW(WW)}`
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);