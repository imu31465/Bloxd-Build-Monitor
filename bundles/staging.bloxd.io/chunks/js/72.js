export const id = 72;
export const ids = [72];
export const modules = {
  36569: (UU, RU, gU) => {
    if (gU.d(RU, {
        e: () => qU,
        f: () => pU,
        h: () => PU,
        i: () => EU,
        j: () => mU,
        m: () => eU
      }), 39 == gU.j) var tU = gU(36573);
    const pU = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      EU = ["Blade", "Guard", "Handle"],
      PU = {
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
      TU = 4,
      qU = "Coal",
      KU = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      cU = 1.15,
      GU = 1.35,
      jU = .06,
      uU = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: UU => `${wU(.06*UU)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: UU => `Mobs you slay drop ${Math.round(4*UU)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: UU => `${wU(.12*UU)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: UU => `+${wU(.2*UU)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: UU => `${wU(.15*UU)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: UU => `Heal ${wU(.06*UU)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: UU => `${wU(.1*UU)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      CU = {
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
      hU = 39 == gU.j ? tU.d : null,
      QU = "skyblock:forged:";

    function eU(UU, RU) {
      return `${UU} ${RU}`
    }
    pU.flatMap((UU => EU.map((RU => eU(UU, RU)))));

    function WU(UU) {
      let {
        blade: RU,
        guard: gU,
        handle: tU
      } = UU;
      return `${QU}${RU.toLowerCase()}-${gU.toLowerCase()}-${tU.toLowerCase()}`
    }

    function fU(UU) {
      if (! function(UU) {
          return "string" === typeof UU && UU.startsWith(QU)
        }(UU)) return null;
      const RU = UU.slice(QU.length).split("-").map((UU => pU.find((RU => RU.toLowerCase() === UU))));
      return 3 !== RU.length || RU.includes(void 0) ? null : {
        blade: RU[0],
        guard: RU[1],
        handle: RU[2]
      }
    }
    const xU = new Map;

    function mU(UU) {
      var RU;
      let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hU;
      const tU = "string" === typeof UU ? fU(UU) : UU;
      if (null === tU) return null;
      const pU = WU(tU),
        qU = gU === hU ? xU.get(pU) : void 0;
      if (void 0 !== qU) return qU;
      const QU = function(UU, RU) {
        var gU, tU, pU, qU, hU, QU, eU, fU, xU;
        const {
          blade: mU,
          guard: bU,
          handle: oU
        } = UU, ZU = PU, aU = mU === bU && bU === oU, YU = JU((1 + ZU[mU].bladeDamage) * (aU ? 1 + jU : 1)), BU = null !== (gU = RU.damageMultiplier) && void 0 !== gU ? gU : YU, VU = null !== (tU = RU.cooldownMultiplier) && void 0 !== tU ? tU : ZU[oU].handleCooldown, rU = null !== (pU = RU.knockbackMultiplier) && void 0 !== pU ? pU : JU(1 + ZU[oU].handleKnockback), XU = null !== (qU = RU.reachBonus) && void 0 !== qU ? qU : ZU[oU].handleReach, vU = null !== (hU = RU.damageReduction) && void 0 !== hU ? hU : ZU[bU].guardReduction, dU = null !== (QU = RU.traits) && void 0 !== QU ? QU : function(UU) {
          const RU = {},
            gU = {};
          for (const TU of EU) {
            var tU, pU;
            const EU = PU[IU(UU, TU)].trait;
            null !== EU && (RU[EU] = (null !== (tU = RU[EU]) && void 0 !== tU ? tU : 0) + KU[TU], gU[EU] = (null !== (pU = gU[EU]) && void 0 !== pU ? pU : 0) + 1)
          }
          for (const EU of Object.keys(RU)) {
            const UU = 3 === gU[EU] ? GU : 2 === gU[EU] ? cU : 1;
            RU[EU] = JU(RU[EU] * UU)
          }
          return RU
        }(UU), HU = null !== (eU = RU.ability) && void 0 !== eU ? eU : null, SU = void 0 !== RU.name, sU = null !== (fU = RU.name) && void 0 !== fU ? fU : aU ? `Pure ${mU} Sword` : `${ZU[bU].epithet} ${mU} Sword`, yU = null !== (xU = RU.lore) && void 0 !== xU ? xU : `Forged by the Forge Mother from a ${mU.toLowerCase()} blade, ${bU.toLowerCase()} guard and ${oU.toLowerCase()} handle.`, kU = function(UU) {
          let {
            blade: RU,
            guard: gU,
            handle: tU
          } = UU;
          const pU = PU;
          return TU * (pU[RU].value + pU[gU].value + pU[tU].value)
        }(UU), FU = ZU[mU].value + ZU[bU].value + ZU[oU].value, iU = SU ? "Tier 5" : FU <= 4 ? "Tier 1" : FU <= 8 ? "Tier 2" : FU <= 14 ? "Tier 3" : FU <= 22 ? "Tier 4" : "Tier 5", AU = [];
        1 !== BU && AU.push(`${nU(BU-1)} damage`);
        1 !== VU && AU.push(`${wU(1/VU-1)} faster strikes`);
        1 !== rU && AU.push(`${nU(rU-1)} knockback`);
        XU > 0 && AU.push(`+${XU} reach`);
        vU > 0 && AU.push(`${wU(vU)} less damage taken while held`);
        const zU = [];
        for (const EU of Object.keys(dU)) zU.push(`${uU[EU].name}: ${uU[EU].describe(dU[EU])}`);
        null !== HU && zU.push(`${CU[HU].name}: ${CU[HU].description}`);
        return AU.push(...zU), {
          id: WU(UU),
          parts: UU,
          baseSword: ZU[mU].baseSword,
          displayName: sU,
          lore: yU,
          properties: AU,
          effects: zU,
          named: SU,
          damageMultiplier: BU,
          cooldownMultiplier: VU,
          knockbackMultiplier: rU,
          reachBonus: XU,
          damageReduction: vU,
          traits: dU,
          ability: HU,
          coalCost: kU,
          enchantmentTier: iU,
          powerMultiplier: JU(BU / VU)
        }
      }(tU, null !== (RU = gU[pU]) && void 0 !== RU ? RU : {});
      return gU === hU && xU.set(pU, QU), QU
    }

    function IU(UU, RU) {
      return "Blade" === RU ? UU.blade : "Guard" === RU ? UU.guard : UU.handle
    }

    function JU(UU) {
      return Math.round(100 * UU) / 100
    }

    function wU(UU) {
      return `${Math.round(100*UU)}%`
    }

    function nU(UU) {
      return `${UU>=0?"+":""}${wU(UU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);