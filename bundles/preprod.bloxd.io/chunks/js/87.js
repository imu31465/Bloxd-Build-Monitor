export const id = 87;
export const ids = [87];
export const modules = {
  37786: (UU, XU, zU) => {
    if (zU.d(XU, {
        e: () => oU,
        i: () => yU,
        j: () => AU,
        m: () => QU,
        o: () => ZU,
        q: () => gU
      }), 46 == zU.j) var cU = zU(37794);
    const yU = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      QU = ["Blade", "Guard", "Handle"],
      AU = {
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
      FU = 4,
      oU = "Coal",
      DU = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      EU = 1.15,
      YU = 1.35,
      NU = .06,
      IU = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: UU => `${WU(.06*UU)} less damage taken`
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
          describe: UU => `${WU(.12*UU)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: UU => `+${WU(.2*UU)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: UU => `${WU(.15*UU)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: UU => `Heal ${WU(.06*UU)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: UU => `${WU(.1*UU)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      pU = {
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
      aU = 46 == zU.j ? cU.b : null,
      tU = "skyblock:forged:";

    function gU(UU, XU) {
      return `${UU} ${XU}`
    }
    yU.flatMap((UU => QU.map((XU => gU(UU, XU)))));

    function kU(UU) {
      let {
        blade: XU,
        guard: zU,
        handle: cU
      } = UU;
      return `${tU}${XU.toLowerCase()}-${zU.toLowerCase()}-${cU.toLowerCase()}`
    }

    function GU(UU) {
      if (! function(UU) {
          return "string" === typeof UU && UU.startsWith(tU)
        }(UU)) return null;
      const XU = UU.slice(tU.length).split("-").map((UU => yU.find((XU => XU.toLowerCase() === UU))));
      return 3 !== XU.length || XU.includes(void 0) ? null : {
        blade: XU[0],
        guard: XU[1],
        handle: XU[2]
      }
    }
    const BU = new Map;

    function ZU(UU) {
      var XU;
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aU;
      const cU = "string" === typeof UU ? GU(UU) : UU;
      if (null === cU) return null;
      const yU = kU(cU),
        oU = zU === aU ? BU.get(yU) : void 0;
      if (void 0 !== oU) return oU;
      const tU = function(UU, XU) {
        var zU, cU, yU, oU, aU, tU, gU, GU, BU;
        const {
          blade: ZU,
          guard: LU,
          handle: eU
        } = UU, CU = AU, wU = ZU === LU && LU === eU, qU = PU((1 + CU[ZU].bladeDamage) * (wU ? 1 + NU : 1)), OU = null !== (zU = XU.damageMultiplier) && void 0 !== zU ? zU : qU, SU = null !== (cU = XU.cooldownMultiplier) && void 0 !== cU ? cU : CU[eU].handleCooldown, rU = null !== (yU = XU.knockbackMultiplier) && void 0 !== yU ? yU : PU(1 + CU[eU].handleKnockback), uU = null !== (oU = XU.reachBonus) && void 0 !== oU ? oU : CU[eU].handleReach, fU = null !== (aU = XU.damageReduction) && void 0 !== aU ? aU : CU[LU].guardReduction, iU = null !== (tU = XU.traits) && void 0 !== tU ? tU : function(UU) {
          const XU = {},
            zU = {};
          for (const FU of QU) {
            var cU, yU;
            const QU = AU[RU(UU, FU)].trait;
            null !== QU && (XU[QU] = (null !== (cU = XU[QU]) && void 0 !== cU ? cU : 0) + DU[FU], zU[QU] = (null !== (yU = zU[QU]) && void 0 !== yU ? yU : 0) + 1)
          }
          for (const QU of Object.keys(XU)) {
            const UU = 3 === zU[QU] ? YU : 2 === zU[QU] ? EU : 1;
            XU[QU] = PU(XU[QU] * UU)
          }
          return XU
        }(UU), HU = null !== (gU = XU.ability) && void 0 !== gU ? gU : null, MU = void 0 !== XU.name, vU = null !== (GU = XU.name) && void 0 !== GU ? GU : wU ? `Pure ${ZU} Sword` : `${CU[LU].epithet} ${ZU} Sword`, VU = null !== (BU = XU.lore) && void 0 !== BU ? BU : `Forged by the Forge Mother from a ${ZU.toLowerCase()} blade, ${LU.toLowerCase()} guard and ${eU.toLowerCase()} handle.`, sU = function(UU) {
          let {
            blade: XU,
            guard: zU,
            handle: cU
          } = UU;
          const yU = AU;
          return FU * (yU[XU].value + yU[zU].value + yU[cU].value)
        }(UU), nU = CU[ZU].value + CU[LU].value + CU[eU].value, mU = MU ? "Tier 5" : nU <= 4 ? "Tier 1" : nU <= 8 ? "Tier 2" : nU <= 14 ? "Tier 3" : nU <= 22 ? "Tier 4" : "Tier 5", lU = [];
        1 !== OU && lU.push(`${dU(OU-1)} damage`);
        1 !== SU && lU.push(`${WU(1/SU-1)} faster strikes`);
        1 !== rU && lU.push(`${dU(rU-1)} knockback`);
        uU > 0 && lU.push(`+${uU} reach`);
        fU > 0 && lU.push(`${WU(fU)} less damage taken while held`);
        const xU = [];
        for (const QU of Object.keys(iU)) xU.push(`${IU[QU].name}: ${IU[QU].describe(iU[QU])}`);
        null !== HU && xU.push(`${pU[HU].name}: ${pU[HU].description}`);
        return lU.push(...xU), {
          id: kU(UU),
          parts: UU,
          baseSword: CU[ZU].baseSword,
          displayName: vU,
          lore: VU,
          properties: lU,
          effects: xU,
          named: MU,
          damageMultiplier: OU,
          cooldownMultiplier: SU,
          knockbackMultiplier: rU,
          reachBonus: uU,
          damageReduction: fU,
          traits: iU,
          ability: HU,
          coalCost: sU,
          enchantmentTier: mU,
          powerMultiplier: PU(OU / SU)
        }
      }(cU, null !== (XU = zU[yU]) && void 0 !== XU ? XU : {});
      return zU === aU && BU.set(yU, tU), tU
    }

    function RU(UU, XU) {
      return "Blade" === XU ? UU.blade : "Guard" === XU ? UU.guard : UU.handle
    }

    function PU(UU) {
      return Math.round(100 * UU) / 100
    }

    function WU(UU) {
      return `${Math.round(100*UU)}%`
    }

    function dU(UU) {
      return `${UU>=0?"+":""}${WU(UU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);