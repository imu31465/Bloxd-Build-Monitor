export const id = 76;
export const ids = [76];
export const modules = {
  37156: (TT, UT, mT) => {
    if (mT.d(UT, {
        c: () => HT,
        e: () => zT,
        h: () => gT,
        j: () => MT,
        k: () => bT,
        n: () => vT
      }), 39 == mT.j) var WT = mT(37162);
    const zT = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      MT = ["Blade", "Guard", "Handle"],
      gT = {
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
      nT = 4,
      HT = "Coal",
      kT = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      jT = 1.15,
      lT = 1.35,
      LT = .06,
      pT = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: TT => `${YT(.06*TT)} less damage taken`
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
          describe: TT => `${YT(.12*TT)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: TT => `+${YT(.2*TT)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: TT => `${YT(.15*TT)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: TT => `Heal ${YT(.06*TT)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: TT => `${YT(.1*TT)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      BT = {
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
      ZT = 39 == mT.j ? WT.d : null,
      cT = "skyblock:forged:";

    function vT(TT, UT) {
      return `${TT} ${UT}`
    }
    zT.flatMap((TT => MT.map((UT => vT(TT, UT)))));

    function fT(TT) {
      let {
        blade: UT,
        guard: mT,
        handle: WT
      } = TT;
      return `${cT}${UT.toLowerCase()}-${mT.toLowerCase()}-${WT.toLowerCase()}`
    }

    function qT(TT) {
      if (! function(TT) {
          return "string" === typeof TT && TT.startsWith(cT)
        }(TT)) return null;
      const UT = TT.slice(cT.length).split("-").map((TT => zT.find((UT => UT.toLowerCase() === TT))));
      return 3 !== UT.length || UT.includes(void 0) ? null : {
        blade: UT[0],
        guard: UT[1],
        handle: UT[2]
      }
    }
    const iT = new Map;

    function bT(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZT;
      const WT = "string" === typeof TT ? qT(TT) : TT;
      if (null === WT) return null;
      const zT = fT(WT),
        HT = mT === ZT ? iT.get(zT) : void 0;
      if (void 0 !== HT) return HT;
      const cT = function(TT, UT) {
        var mT, WT, zT, HT, ZT, cT, vT, qT, iT;
        const {
          blade: bT,
          guard: xT,
          handle: dT
        } = TT, wT = gT, tT = bT === xT && xT === dT, aT = eT((1 + wT[bT].bladeDamage) * (tT ? 1 + LT : 1)), yT = null !== (mT = UT.damageMultiplier) && void 0 !== mT ? mT : aT, XT = null !== (WT = UT.cooldownMultiplier) && void 0 !== WT ? WT : wT[dT].handleCooldown, IT = null !== (zT = UT.knockbackMultiplier) && void 0 !== zT ? zT : eT(1 + wT[dT].handleKnockback), QT = null !== (HT = UT.reachBonus) && void 0 !== HT ? HT : wT[dT].handleReach, sT = null !== (ZT = UT.damageReduction) && void 0 !== ZT ? ZT : wT[xT].guardReduction, FT = null !== (cT = UT.traits) && void 0 !== cT ? cT : function(TT) {
          const UT = {},
            mT = {};
          for (const nT of MT) {
            var WT, zT;
            const MT = gT[OT(TT, nT)].trait;
            null !== MT && (UT[MT] = (null !== (WT = UT[MT]) && void 0 !== WT ? WT : 0) + kT[nT], mT[MT] = (null !== (zT = mT[MT]) && void 0 !== zT ? zT : 0) + 1)
          }
          for (const MT of Object.keys(UT)) {
            const TT = 3 === mT[MT] ? lT : 2 === mT[MT] ? jT : 1;
            UT[MT] = eT(UT[MT] * TT)
          }
          return UT
        }(TT), PT = null !== (vT = UT.ability) && void 0 !== vT ? vT : null, VT = void 0 !== UT.name, uT = null !== (qT = UT.name) && void 0 !== qT ? qT : tT ? `Pure ${bT} Sword` : `${wT[xT].epithet} ${bT} Sword`, CT = null !== (iT = UT.lore) && void 0 !== iT ? iT : `Forged by the Forge Mother from a ${bT.toLowerCase()} blade, ${xT.toLowerCase()} guard and ${dT.toLowerCase()} handle.`, rT = function(TT) {
          let {
            blade: UT,
            guard: mT,
            handle: WT
          } = TT;
          const zT = gT;
          return nT * (zT[UT].value + zT[mT].value + zT[WT].value)
        }(TT), KT = wT[bT].value + wT[xT].value + wT[dT].value, ST = VT ? "Tier 5" : KT <= 4 ? "Tier 1" : KT <= 8 ? "Tier 2" : KT <= 14 ? "Tier 3" : KT <= 22 ? "Tier 4" : "Tier 5", GT = [];
        1 !== yT && GT.push(`${JT(yT-1)} damage`);
        1 !== XT && GT.push(`${YT(1/XT-1)} faster strikes`);
        1 !== IT && GT.push(`${JT(IT-1)} knockback`);
        QT > 0 && GT.push(`+${QT} reach`);
        sT > 0 && GT.push(`${YT(sT)} less damage taken while held`);
        const NT = [];
        for (const MT of Object.keys(FT)) NT.push(`${pT[MT].name}: ${pT[MT].describe(FT[MT])}`);
        null !== PT && NT.push(`${BT[PT].name}: ${BT[PT].description}`);
        return GT.push(...NT), {
          id: fT(TT),
          parts: TT,
          baseSword: wT[bT].baseSword,
          displayName: uT,
          lore: CT,
          properties: GT,
          effects: NT,
          named: VT,
          damageMultiplier: yT,
          cooldownMultiplier: XT,
          knockbackMultiplier: IT,
          reachBonus: QT,
          damageReduction: sT,
          traits: FT,
          ability: PT,
          coalCost: rT,
          enchantmentTier: ST,
          powerMultiplier: eT(yT / XT)
        }
      }(WT, null !== (UT = mT[zT]) && void 0 !== UT ? UT : {});
      return mT === ZT && iT.set(zT, cT), cT
    }

    function OT(TT, UT) {
      return "Blade" === UT ? TT.blade : "Guard" === UT ? TT.guard : TT.handle
    }

    function eT(TT) {
      return Math.round(100 * TT) / 100
    }

    function YT(TT) {
      return `${Math.round(100*TT)}%`
    }

    function JT(TT) {
      return `${TT>=0?"+":""}${YT(TT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);