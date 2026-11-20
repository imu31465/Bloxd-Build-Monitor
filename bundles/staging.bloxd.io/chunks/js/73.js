export const id = 73;
export const ids = [73];
export const modules = {
  36862: (TT, kT, cT) => {
    if (cT.d(kT, {
        b: () => fT,
        d: () => MT,
        f: () => OT,
        i: () => KT,
        k: () => aT,
        l: () => NT
      }), 39 == cT.j) var lT = cT(36864);
    const MT = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      KT = ["Blade", "Guard", "Handle"],
      OT = {
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
      yT = 4,
      fT = "Coal",
      xT = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      IT = 1.15,
      AT = 1.35,
      CT = .06,
      jT = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: TT => `${PT(.06*TT)} less damage taken`
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
          describe: TT => `${PT(.12*TT)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: TT => `+${PT(.2*TT)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: TT => `${PT(.15*TT)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: TT => `Heal ${PT(.06*TT)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: TT => `${PT(.1*TT)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      vT = {
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
      tT = 39 == cT.j ? lT.b : null,
      hT = "skyblock:forged:";

    function NT(TT, kT) {
      return `${TT} ${kT}`
    }
    MT.flatMap((TT => KT.map((kT => NT(TT, kT)))));

    function QT(TT) {
      let {
        blade: kT,
        guard: cT,
        handle: lT
      } = TT;
      return `${hT}${kT.toLowerCase()}-${cT.toLowerCase()}-${lT.toLowerCase()}`
    }

    function ST(TT) {
      if (! function(TT) {
          return "string" === typeof TT && TT.startsWith(hT)
        }(TT)) return null;
      const kT = TT.slice(hT.length).split("-").map((TT => MT.find((kT => kT.toLowerCase() === TT))));
      return 3 !== kT.length || kT.includes(void 0) ? null : {
        blade: kT[0],
        guard: kT[1],
        handle: kT[2]
      }
    }
    const DT = new Map;

    function aT(TT) {
      var kT;
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tT;
      const lT = "string" === typeof TT ? ST(TT) : TT;
      if (null === lT) return null;
      const MT = QT(lT),
        fT = cT === tT ? DT.get(MT) : void 0;
      if (void 0 !== fT) return fT;
      const hT = function(TT, kT) {
        var cT, lT, MT, fT, tT, hT, NT, ST, DT;
        const {
          blade: aT,
          guard: mT,
          handle: bT
        } = TT, zT = OT, JT = aT === mT && mT === bT, oT = rT((1 + zT[aT].bladeDamage) * (JT ? 1 + CT : 1)), HT = null !== (cT = kT.damageMultiplier) && void 0 !== cT ? cT : oT, eT = null !== (lT = kT.cooldownMultiplier) && void 0 !== lT ? lT : zT[bT].handleCooldown, GT = null !== (MT = kT.knockbackMultiplier) && void 0 !== MT ? MT : rT(1 + zT[bT].handleKnockback), VT = null !== (fT = kT.reachBonus) && void 0 !== fT ? fT : zT[bT].handleReach, ET = null !== (tT = kT.damageReduction) && void 0 !== tT ? tT : zT[mT].guardReduction, ZT = null !== (hT = kT.traits) && void 0 !== hT ? hT : function(TT) {
          const kT = {},
            cT = {};
          for (const yT of KT) {
            var lT, MT;
            const KT = OT[FT(TT, yT)].trait;
            null !== KT && (kT[KT] = (null !== (lT = kT[KT]) && void 0 !== lT ? lT : 0) + xT[yT], cT[KT] = (null !== (MT = cT[KT]) && void 0 !== MT ? MT : 0) + 1)
          }
          for (const KT of Object.keys(kT)) {
            const TT = 3 === cT[KT] ? AT : 2 === cT[KT] ? IT : 1;
            kT[KT] = rT(kT[KT] * TT)
          }
          return kT
        }(TT), uT = null !== (NT = kT.ability) && void 0 !== NT ? NT : null, XT = void 0 !== kT.name, dT = null !== (ST = kT.name) && void 0 !== ST ? ST : JT ? `Pure ${aT} Sword` : `${zT[mT].epithet} ${aT} Sword`, LT = null !== (DT = kT.lore) && void 0 !== DT ? DT : `Forged by the Forge Mother from a ${aT.toLowerCase()} blade, ${mT.toLowerCase()} guard and ${bT.toLowerCase()} handle.`, RT = function(TT) {
          let {
            blade: kT,
            guard: cT,
            handle: lT
          } = TT;
          const MT = OT;
          return yT * (MT[kT].value + MT[cT].value + MT[lT].value)
        }(TT), gT = zT[aT].value + zT[mT].value + zT[bT].value, UT = XT ? "Tier 5" : gT <= 4 ? "Tier 1" : gT <= 8 ? "Tier 2" : gT <= 14 ? "Tier 3" : gT <= 22 ? "Tier 4" : "Tier 5", YT = [];
        1 !== HT && YT.push(`${wT(HT-1)} damage`);
        1 !== eT && YT.push(`${PT(1/eT-1)} faster strikes`);
        1 !== GT && YT.push(`${wT(GT-1)} knockback`);
        VT > 0 && YT.push(`+${VT} reach`);
        ET > 0 && YT.push(`${PT(ET)} less damage taken while held`);
        const BT = [];
        for (const KT of Object.keys(ZT)) BT.push(`${jT[KT].name}: ${jT[KT].describe(ZT[KT])}`);
        null !== uT && BT.push(`${vT[uT].name}: ${vT[uT].description}`);
        return YT.push(...BT), {
          id: QT(TT),
          parts: TT,
          baseSword: zT[aT].baseSword,
          displayName: dT,
          lore: LT,
          properties: YT,
          effects: BT,
          named: XT,
          damageMultiplier: HT,
          cooldownMultiplier: eT,
          knockbackMultiplier: GT,
          reachBonus: VT,
          damageReduction: ET,
          traits: ZT,
          ability: uT,
          coalCost: RT,
          enchantmentTier: UT,
          powerMultiplier: rT(HT / eT)
        }
      }(lT, null !== (kT = cT[MT]) && void 0 !== kT ? kT : {});
      return cT === tT && DT.set(MT, hT), hT
    }

    function FT(TT, kT) {
      return "Blade" === kT ? TT.blade : "Guard" === kT ? TT.guard : TT.handle
    }

    function rT(TT) {
      return Math.round(100 * TT) / 100
    }

    function PT(TT) {
      return `${Math.round(100*TT)}%`
    }

    function wT(TT) {
      return `${TT>=0?"+":""}${PT(TT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);