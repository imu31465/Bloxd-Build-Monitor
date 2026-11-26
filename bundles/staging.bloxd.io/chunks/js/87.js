export const id = 87;
export const ids = [87];
export const modules = {
  38239: (VV, eV, xV) => {
    if (xV.d(eV, {
        d: () => QV,
        g: () => YV,
        h: () => yV,
        l: () => UV,
        m: () => FV,
        p: () => BV
      }), 45 == xV.j) var JV = xV(38245);
    const YV = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      UV = ["Blade", "Guard", "Handle"],
      yV = {
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
      pV = 4,
      QV = "Coal",
      nV = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      wV = 1.15,
      ZV = 1.35,
      vV = .06,
      rV = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: VV => `${AV(.06*VV)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: VV => `Mobs you slay drop ${Math.round(4*VV)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: VV => `${AV(.12*VV)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: VV => `+${AV(.2*VV)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: VV => `${AV(.15*VV)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: VV => `Heal ${AV(.06*VV)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: VV => `${AV(.1*VV)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      kV = {
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
      bV = 45 == xV.j ? JV.c : null,
      EV = "skyblock:forged:";

    function BV(VV, eV) {
      return `${VV} ${eV}`
    }
    YV.flatMap((VV => UV.map((eV => BV(VV, eV)))));

    function jV(VV) {
      let {
        blade: eV,
        guard: xV,
        handle: JV
      } = VV;
      return `${EV}${eV.toLowerCase()}-${xV.toLowerCase()}-${JV.toLowerCase()}`
    }

    function qV(VV) {
      if (! function(VV) {
          return "string" === typeof VV && VV.startsWith(EV)
        }(VV)) return null;
      const eV = VV.slice(EV.length).split("-").map((VV => YV.find((eV => eV.toLowerCase() === VV))));
      return 3 !== eV.length || eV.includes(void 0) ? null : {
        blade: eV[0],
        guard: eV[1],
        handle: eV[2]
      }
    }
    const tV = new Map;

    function FV(VV) {
      var eV;
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bV;
      const JV = "string" === typeof VV ? qV(VV) : VV;
      if (null === JV) return null;
      const YV = jV(JV),
        QV = xV === bV ? tV.get(YV) : void 0;
      if (void 0 !== QV) return QV;
      const EV = function(VV, eV) {
        var xV, JV, YV, QV, bV, EV, BV, qV, tV;
        const {
          blade: FV,
          guard: XV,
          handle: MV
        } = VV, zV = yV, GV = FV === XV && XV === MV, WV = PV((1 + zV[FV].bladeDamage) * (GV ? 1 + vV : 1)), RV = null !== (xV = eV.damageMultiplier) && void 0 !== xV ? xV : WV, gV = null !== (JV = eV.cooldownMultiplier) && void 0 !== JV ? JV : zV[MV].handleCooldown, DV = null !== (YV = eV.knockbackMultiplier) && void 0 !== YV ? YV : PV(1 + zV[MV].handleKnockback), iV = null !== (QV = eV.reachBonus) && void 0 !== QV ? QV : zV[MV].handleReach, CV = null !== (bV = eV.damageReduction) && void 0 !== bV ? bV : zV[XV].guardReduction, aV = null !== (EV = eV.traits) && void 0 !== EV ? EV : function(VV) {
          const eV = {},
            xV = {};
          for (const pV of UV) {
            var JV, YV;
            const UV = yV[TV(VV, pV)].trait;
            null !== UV && (eV[UV] = (null !== (JV = eV[UV]) && void 0 !== JV ? JV : 0) + nV[pV], xV[UV] = (null !== (YV = xV[UV]) && void 0 !== YV ? YV : 0) + 1)
          }
          for (const UV of Object.keys(eV)) {
            const VV = 3 === xV[UV] ? ZV : 2 === xV[UV] ? wV : 1;
            eV[UV] = PV(eV[UV] * VV)
          }
          return eV
        }(VV), oV = null !== (BV = eV.ability) && void 0 !== BV ? BV : null, cV = void 0 !== eV.name, hV = null !== (qV = eV.name) && void 0 !== qV ? qV : GV ? `Pure ${FV} Sword` : `${zV[XV].epithet} ${FV} Sword`, lV = null !== (tV = eV.lore) && void 0 !== tV ? tV : `Forged by the Forge Mother from a ${FV.toLowerCase()} blade, ${XV.toLowerCase()} guard and ${MV.toLowerCase()} handle.`, LV = function(VV) {
          let {
            blade: eV,
            guard: xV,
            handle: JV
          } = VV;
          const YV = yV;
          return pV * (YV[eV].value + YV[xV].value + YV[JV].value)
        }(VV), fV = zV[FV].value + zV[XV].value + zV[MV].value, mV = cV ? "Tier 5" : fV <= 4 ? "Tier 1" : fV <= 8 ? "Tier 2" : fV <= 14 ? "Tier 3" : fV <= 22 ? "Tier 4" : "Tier 5", KV = [];
        1 !== RV && KV.push(`${NV(RV-1)} damage`);
        1 !== gV && KV.push(`${AV(1/gV-1)} faster strikes`);
        1 !== DV && KV.push(`${NV(DV-1)} knockback`);
        iV > 0 && KV.push(`+${iV} reach`);
        CV > 0 && KV.push(`${AV(CV)} less damage taken while held`);
        const HV = [];
        for (const UV of Object.keys(aV)) HV.push(`${rV[UV].name}: ${rV[UV].describe(aV[UV])}`);
        null !== oV && HV.push(`${kV[oV].name}: ${kV[oV].description}`);
        return KV.push(...HV), {
          id: jV(VV),
          parts: VV,
          baseSword: zV[FV].baseSword,
          displayName: hV,
          lore: lV,
          properties: KV,
          effects: HV,
          named: cV,
          damageMultiplier: RV,
          cooldownMultiplier: gV,
          knockbackMultiplier: DV,
          reachBonus: iV,
          damageReduction: CV,
          traits: aV,
          ability: oV,
          coalCost: LV,
          enchantmentTier: mV,
          powerMultiplier: PV(RV / gV)
        }
      }(JV, null !== (eV = xV[YV]) && void 0 !== eV ? eV : {});
      return xV === bV && tV.set(YV, EV), EV
    }

    function TV(VV, eV) {
      return "Blade" === eV ? VV.blade : "Guard" === eV ? VV.guard : VV.handle
    }

    function PV(VV) {
      return Math.round(100 * VV) / 100
    }

    function AV(VV) {
      return `${Math.round(100*VV)}%`
    }

    function NV(VV) {
      return `${VV>=0?"+":""}${AV(VV)}`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);