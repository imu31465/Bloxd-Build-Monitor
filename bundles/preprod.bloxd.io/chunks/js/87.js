export const id = 87;
export const ids = [87];
export const modules = {
  37996: (MM, rM, iM) => {
    if (iM.d(rM, {
        d: () => nM,
        h: () => SM,
        k: () => aM,
        l: () => jM,
        m: () => GM,
        q: () => yM
      }), 45 == iM.j) var OM = iM(38005);
    const SM = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      jM = ["Blade", "Guard", "Handle"],
      aM = {
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
      PM = 4,
      nM = "Coal",
      QM = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      zM = 1.15,
      LM = 1.35,
      mM = .06,
      HM = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: MM => `${bM(.06*MM)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: MM => `Mobs you slay drop ${Math.round(4*MM)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: MM => `${bM(.12*MM)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: MM => `+${bM(.2*MM)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: MM => `${bM(.15*MM)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: MM => `Heal ${bM(.06*MM)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: MM => `${bM(.1*MM)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      hM = {
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
      JM = 45 == iM.j ? OM.e : null,
      dM = "skyblock:forged:";

    function yM(MM, rM) {
      return `${MM} ${rM}`
    }
    SM.flatMap((MM => jM.map((rM => yM(MM, rM)))));

    function lM(MM) {
      let {
        blade: rM,
        guard: iM,
        handle: OM
      } = MM;
      return `${dM}${rM.toLowerCase()}-${iM.toLowerCase()}-${OM.toLowerCase()}`
    }

    function EM(MM) {
      if (! function(MM) {
          return "string" === typeof MM && MM.startsWith(dM)
        }(MM)) return null;
      const rM = MM.slice(dM.length).split("-").map((MM => SM.find((rM => rM.toLowerCase() === MM))));
      return 3 !== rM.length || rM.includes(void 0) ? null : {
        blade: rM[0],
        guard: rM[1],
        handle: rM[2]
      }
    }
    const UM = new Map;

    function GM(MM) {
      var rM;
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JM;
      const OM = "string" === typeof MM ? EM(MM) : MM;
      if (null === OM) return null;
      const SM = lM(OM),
        nM = iM === JM ? UM.get(SM) : void 0;
      if (void 0 !== nM) return nM;
      const dM = function(MM, rM) {
        var iM, OM, SM, nM, JM, dM, yM, EM, UM;
        const {
          blade: GM,
          guard: tM,
          handle: gM
        } = MM, uM = aM, RM = GM === tM && tM === gM, pM = eM((1 + uM[GM].bladeDamage) * (RM ? 1 + mM : 1)), WM = null !== (iM = rM.damageMultiplier) && void 0 !== iM ? iM : pM, sM = null !== (OM = rM.cooldownMultiplier) && void 0 !== OM ? OM : uM[gM].handleCooldown, DM = null !== (SM = rM.knockbackMultiplier) && void 0 !== SM ? SM : eM(1 + uM[gM].handleKnockback), kM = null !== (nM = rM.reachBonus) && void 0 !== nM ? nM : uM[gM].handleReach, ZM = null !== (JM = rM.damageReduction) && void 0 !== JM ? JM : uM[tM].guardReduction, oM = null !== (dM = rM.traits) && void 0 !== dM ? dM : function(MM) {
          const rM = {},
            iM = {};
          for (const PM of jM) {
            var OM, SM;
            const jM = aM[CM(MM, PM)].trait;
            null !== jM && (rM[jM] = (null !== (OM = rM[jM]) && void 0 !== OM ? OM : 0) + QM[PM], iM[jM] = (null !== (SM = iM[jM]) && void 0 !== SM ? SM : 0) + 1)
          }
          for (const jM of Object.keys(rM)) {
            const MM = 3 === iM[jM] ? LM : 2 === iM[jM] ? zM : 1;
            rM[jM] = eM(rM[jM] * MM)
          }
          return rM
        }(MM), fM = null !== (yM = rM.ability) && void 0 !== yM ? yM : null, YM = void 0 !== rM.name, NM = null !== (EM = rM.name) && void 0 !== EM ? EM : RM ? `Pure ${GM} Sword` : `${uM[tM].epithet} ${GM} Sword`, AM = null !== (UM = rM.lore) && void 0 !== UM ? UM : `Forged by the Forge Mother from a ${GM.toLowerCase()} blade, ${tM.toLowerCase()} guard and ${gM.toLowerCase()} handle.`, xM = function(MM) {
          let {
            blade: rM,
            guard: iM,
            handle: OM
          } = MM;
          const SM = aM;
          return PM * (SM[rM].value + SM[iM].value + SM[OM].value)
        }(MM), vM = uM[GM].value + uM[tM].value + uM[gM].value, FM = YM ? "Tier 5" : vM <= 4 ? "Tier 1" : vM <= 8 ? "Tier 2" : vM <= 14 ? "Tier 3" : vM <= 22 ? "Tier 4" : "Tier 5", BM = [];
        1 !== WM && BM.push(`${wM(WM-1)} damage`);
        1 !== sM && BM.push(`${bM(1/sM-1)} faster strikes`);
        1 !== DM && BM.push(`${wM(DM-1)} knockback`);
        kM > 0 && BM.push(`+${kM} reach`);
        ZM > 0 && BM.push(`${bM(ZM)} less damage taken while held`);
        const XM = [];
        for (const jM of Object.keys(oM)) XM.push(`${HM[jM].name}: ${HM[jM].describe(oM[jM])}`);
        null !== fM && XM.push(`${hM[fM].name}: ${hM[fM].description}`);
        return BM.push(...XM), {
          id: lM(MM),
          parts: MM,
          baseSword: uM[GM].baseSword,
          displayName: NM,
          lore: AM,
          properties: BM,
          effects: XM,
          named: YM,
          damageMultiplier: WM,
          cooldownMultiplier: sM,
          knockbackMultiplier: DM,
          reachBonus: kM,
          damageReduction: ZM,
          traits: oM,
          ability: fM,
          coalCost: xM,
          enchantmentTier: FM,
          powerMultiplier: eM(WM / sM)
        }
      }(OM, null !== (rM = iM[SM]) && void 0 !== rM ? rM : {});
      return iM === JM && UM.set(SM, dM), dM
    }

    function CM(MM, rM) {
      return "Blade" === rM ? MM.blade : "Guard" === rM ? MM.guard : MM.handle
    }

    function eM(MM) {
      return Math.round(100 * MM) / 100
    }

    function bM(MM) {
      return `${Math.round(100*MM)}%`
    }

    function wM(MM) {
      return `${MM>=0?"+":""}${bM(MM)}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);