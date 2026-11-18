export const id = 67;
export const ids = [67];
export const modules = {
  36065: (JJ, cJ, ZJ) => {
    if (ZJ.d(cJ, {
        b: () => qJ,
        d: () => UJ,
        g: () => XJ,
        k: () => eJ,
        m: () => QJ,
        o: () => xJ
      }), 36 == ZJ.j) var FJ = ZJ(36067);
    const UJ = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      eJ = ["Blade", "Guard", "Handle"],
      XJ = {
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
      AJ = 4,
      qJ = "Coal",
      jJ = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      YJ = 1.15,
      hJ = 1.35,
      DJ = .06,
      sJ = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: JJ => `${KJ(.06*JJ)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: JJ => `Mobs you slay drop ${Math.round(4*JJ)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: JJ => `${KJ(.12*JJ)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: JJ => `+${KJ(.2*JJ)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: JJ => `${KJ(.15*JJ)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: JJ => `Heal ${KJ(.06*JJ)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: JJ => `${KJ(.1*JJ)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      nJ = {
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
      GJ = 36 == ZJ.j ? FJ.c : null,
      fJ = "skyblock:forged:";

    function xJ(JJ, cJ) {
      return `${JJ} ${cJ}`
    }
    UJ.flatMap((JJ => eJ.map((cJ => xJ(JJ, cJ)))));

    function rJ(JJ) {
      let {
        blade: cJ,
        guard: ZJ,
        handle: FJ
      } = JJ;
      return `${fJ}${cJ.toLowerCase()}-${ZJ.toLowerCase()}-${FJ.toLowerCase()}`
    }

    function vJ(JJ) {
      if (! function(JJ) {
          return "string" === typeof JJ && JJ.startsWith(fJ)
        }(JJ)) return null;
      const cJ = JJ.slice(fJ.length).split("-").map((JJ => UJ.find((cJ => cJ.toLowerCase() === JJ))));
      return 3 !== cJ.length || cJ.includes(void 0) ? null : {
        blade: cJ[0],
        guard: cJ[1],
        handle: cJ[2]
      }
    }
    const mJ = new Map;

    function QJ(JJ) {
      var cJ;
      let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GJ;
      const FJ = "string" === typeof JJ ? vJ(JJ) : JJ;
      if (null === FJ) return null;
      const UJ = rJ(FJ),
        qJ = ZJ === GJ ? mJ.get(UJ) : void 0;
      if (void 0 !== qJ) return qJ;
      const fJ = function(JJ, cJ) {
        var ZJ, FJ, UJ, qJ, GJ, fJ, xJ, vJ, mJ;
        const {
          blade: QJ,
          guard: SJ,
          handle: IJ
        } = JJ, MJ = XJ, bJ = QJ === SJ && SJ === IJ, wJ = VJ((1 + MJ[QJ].bladeDamage) * (bJ ? 1 + DJ : 1)), WJ = null !== (ZJ = cJ.damageMultiplier) && void 0 !== ZJ ? ZJ : wJ, gJ = null !== (FJ = cJ.cooldownMultiplier) && void 0 !== FJ ? FJ : MJ[IJ].handleCooldown, HJ = null !== (UJ = cJ.knockbackMultiplier) && void 0 !== UJ ? UJ : VJ(1 + MJ[IJ].handleKnockback), PJ = null !== (qJ = cJ.reachBonus) && void 0 !== qJ ? qJ : MJ[IJ].handleReach, kJ = null !== (GJ = cJ.damageReduction) && void 0 !== GJ ? GJ : MJ[SJ].guardReduction, pJ = null !== (fJ = cJ.traits) && void 0 !== fJ ? fJ : function(JJ) {
          const cJ = {},
            ZJ = {};
          for (const AJ of eJ) {
            var FJ, UJ;
            const eJ = XJ[EJ(JJ, AJ)].trait;
            null !== eJ && (cJ[eJ] = (null !== (FJ = cJ[eJ]) && void 0 !== FJ ? FJ : 0) + jJ[AJ], ZJ[eJ] = (null !== (UJ = ZJ[eJ]) && void 0 !== UJ ? UJ : 0) + 1)
          }
          for (const eJ of Object.keys(cJ)) {
            const JJ = 3 === ZJ[eJ] ? hJ : 2 === ZJ[eJ] ? YJ : 1;
            cJ[eJ] = VJ(cJ[eJ] * JJ)
          }
          return cJ
        }(JJ), dJ = null !== (xJ = cJ.ability) && void 0 !== xJ ? xJ : null, zJ = void 0 !== cJ.name, NJ = null !== (vJ = cJ.name) && void 0 !== vJ ? vJ : bJ ? `Pure ${QJ} Sword` : `${MJ[SJ].epithet} ${QJ} Sword`, OJ = null !== (mJ = cJ.lore) && void 0 !== mJ ? mJ : `Forged by the Forge Mother from a ${QJ.toLowerCase()} blade, ${SJ.toLowerCase()} guard and ${IJ.toLowerCase()} handle.`, TJ = function(JJ) {
          let {
            blade: cJ,
            guard: ZJ,
            handle: FJ
          } = JJ;
          const UJ = XJ;
          return AJ * (UJ[cJ].value + UJ[ZJ].value + UJ[FJ].value)
        }(JJ), CJ = MJ[QJ].value + MJ[SJ].value + MJ[IJ].value, uJ = zJ ? "Tier 5" : CJ <= 4 ? "Tier 1" : CJ <= 8 ? "Tier 2" : CJ <= 14 ? "Tier 3" : CJ <= 22 ? "Tier 4" : "Tier 5", iJ = [];
        1 !== WJ && iJ.push(`${yJ(WJ-1)} damage`);
        1 !== gJ && iJ.push(`${KJ(1/gJ-1)} faster strikes`);
        1 !== HJ && iJ.push(`${yJ(HJ-1)} knockback`);
        PJ > 0 && iJ.push(`+${PJ} reach`);
        kJ > 0 && iJ.push(`${KJ(kJ)} less damage taken while held`);
        const RJ = [];
        for (const eJ of Object.keys(pJ)) RJ.push(`${sJ[eJ].name}: ${sJ[eJ].describe(pJ[eJ])}`);
        null !== dJ && RJ.push(`${nJ[dJ].name}: ${nJ[dJ].description}`);
        return iJ.push(...RJ), {
          id: rJ(JJ),
          parts: JJ,
          baseSword: MJ[QJ].baseSword,
          displayName: NJ,
          lore: OJ,
          properties: iJ,
          effects: RJ,
          named: zJ,
          damageMultiplier: WJ,
          cooldownMultiplier: gJ,
          knockbackMultiplier: HJ,
          reachBonus: PJ,
          damageReduction: kJ,
          traits: pJ,
          ability: dJ,
          coalCost: TJ,
          enchantmentTier: uJ,
          powerMultiplier: VJ(WJ / gJ)
        }
      }(FJ, null !== (cJ = ZJ[UJ]) && void 0 !== cJ ? cJ : {});
      return ZJ === GJ && mJ.set(UJ, fJ), fJ
    }

    function EJ(JJ, cJ) {
      return "Blade" === cJ ? JJ.blade : "Guard" === cJ ? JJ.guard : JJ.handle
    }

    function VJ(JJ) {
      return Math.round(100 * JJ) / 100
    }

    function KJ(JJ) {
      return `${Math.round(100*JJ)}%`
    }

    function yJ(JJ) {
      return `${JJ>=0?"+":""}${KJ(JJ)}`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);