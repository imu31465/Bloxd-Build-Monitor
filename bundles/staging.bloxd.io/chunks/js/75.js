export const id = 75;
export const ids = [75];
export const modules = {
  37089: (SS, HS, gS) => {
    if (gS.d(HS, {
        c: () => qS,
        g: () => bS,
        h: () => xS,
        i: () => XS,
        l: () => DS,
        p: () => CS
      }), 39 == gS.j) var tS = gS(37093);
    const bS = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      XS = ["Blade", "Guard", "Handle"],
      xS = {
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
      NS = 4,
      qS = "Coal",
      uS = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      IS = 1.15,
      fS = 1.35,
      kS = .06,
      aS = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: SS => `${ZS(.06*SS)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: SS => `Mobs you slay drop ${Math.round(4*SS)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: SS => `${ZS(.12*SS)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: SS => `+${ZS(.2*SS)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: SS => `${ZS(.15*SS)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: SS => `Heal ${ZS(.06*SS)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: SS => `${ZS(.1*SS)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      KS = {
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
      jS = 39 == gS.j ? tS.b : null,
      GS = "skyblock:forged:";

    function CS(SS, HS) {
      return `${SS} ${HS}`
    }
    bS.flatMap((SS => XS.map((HS => CS(SS, HS)))));

    function nS(SS) {
      let {
        blade: HS,
        guard: gS,
        handle: tS
      } = SS;
      return `${GS}${HS.toLowerCase()}-${gS.toLowerCase()}-${tS.toLowerCase()}`
    }

    function PS(SS) {
      if (! function(SS) {
          return "string" === typeof SS && SS.startsWith(GS)
        }(SS)) return null;
      const HS = SS.slice(GS.length).split("-").map((SS => bS.find((HS => HS.toLowerCase() === SS))));
      return 3 !== HS.length || HS.includes(void 0) ? null : {
        blade: HS[0],
        guard: HS[1],
        handle: HS[2]
      }
    }
    const QS = new Map;

    function DS(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jS;
      const tS = "string" === typeof SS ? PS(SS) : SS;
      if (null === tS) return null;
      const bS = nS(tS),
        qS = gS === jS ? QS.get(bS) : void 0;
      if (void 0 !== qS) return qS;
      const GS = function(SS, HS) {
        var gS, tS, bS, qS, jS, GS, CS, PS, QS;
        const {
          blade: DS,
          guard: OS,
          handle: dS
        } = SS, cS = xS, vS = DS === OS && OS === dS, ES = hS((1 + cS[DS].bladeDamage) * (vS ? 1 + kS : 1)), LS = null !== (gS = HS.damageMultiplier) && void 0 !== gS ? gS : ES, YS = null !== (tS = HS.cooldownMultiplier) && void 0 !== tS ? tS : cS[dS].handleCooldown, AS = null !== (bS = HS.knockbackMultiplier) && void 0 !== bS ? bS : hS(1 + cS[dS].handleKnockback), yS = null !== (qS = HS.reachBonus) && void 0 !== qS ? qS : cS[dS].handleReach, VS = null !== (jS = HS.damageReduction) && void 0 !== jS ? jS : cS[OS].guardReduction, iS = null !== (GS = HS.traits) && void 0 !== GS ? GS : function(SS) {
          const HS = {},
            gS = {};
          for (const NS of XS) {
            var tS, bS;
            const XS = xS[wS(SS, NS)].trait;
            null !== XS && (HS[XS] = (null !== (tS = HS[XS]) && void 0 !== tS ? tS : 0) + uS[NS], gS[XS] = (null !== (bS = gS[XS]) && void 0 !== bS ? bS : 0) + 1)
          }
          for (const XS of Object.keys(HS)) {
            const SS = 3 === gS[XS] ? fS : 2 === gS[XS] ? IS : 1;
            HS[XS] = hS(HS[XS] * SS)
          }
          return HS
        }(SS), WS = null !== (CS = HS.ability) && void 0 !== CS ? CS : null, zS = void 0 !== HS.name, US = null !== (PS = HS.name) && void 0 !== PS ? PS : vS ? `Pure ${DS} Sword` : `${cS[OS].epithet} ${DS} Sword`, pS = null !== (QS = HS.lore) && void 0 !== QS ? QS : `Forged by the Forge Mother from a ${DS.toLowerCase()} blade, ${OS.toLowerCase()} guard and ${dS.toLowerCase()} handle.`, sS = function(SS) {
          let {
            blade: HS,
            guard: gS,
            handle: tS
          } = SS;
          const bS = xS;
          return NS * (bS[HS].value + bS[gS].value + bS[tS].value)
        }(SS), BS = cS[DS].value + cS[OS].value + cS[dS].value, MS = zS ? "Tier 5" : BS <= 4 ? "Tier 1" : BS <= 8 ? "Tier 2" : BS <= 14 ? "Tier 3" : BS <= 22 ? "Tier 4" : "Tier 5", FS = [];
        1 !== LS && FS.push(`${JS(LS-1)} damage`);
        1 !== YS && FS.push(`${ZS(1/YS-1)} faster strikes`);
        1 !== AS && FS.push(`${JS(AS-1)} knockback`);
        yS > 0 && FS.push(`+${yS} reach`);
        VS > 0 && FS.push(`${ZS(VS)} less damage taken while held`);
        const RS = [];
        for (const XS of Object.keys(iS)) RS.push(`${aS[XS].name}: ${aS[XS].describe(iS[XS])}`);
        null !== WS && RS.push(`${KS[WS].name}: ${KS[WS].description}`);
        return FS.push(...RS), {
          id: nS(SS),
          parts: SS,
          baseSword: cS[DS].baseSword,
          displayName: US,
          lore: pS,
          properties: FS,
          effects: RS,
          named: zS,
          damageMultiplier: LS,
          cooldownMultiplier: YS,
          knockbackMultiplier: AS,
          reachBonus: yS,
          damageReduction: VS,
          traits: iS,
          ability: WS,
          coalCost: sS,
          enchantmentTier: MS,
          powerMultiplier: hS(LS / YS)
        }
      }(tS, null !== (HS = gS[bS]) && void 0 !== HS ? HS : {});
      return gS === jS && QS.set(bS, GS), GS
    }

    function wS(SS, HS) {
      return "Blade" === HS ? SS.blade : "Guard" === HS ? SS.guard : SS.handle
    }

    function hS(SS) {
      return Math.round(100 * SS) / 100
    }

    function ZS(SS) {
      return `${Math.round(100*SS)}%`
    }

    function JS(SS) {
      return `${SS>=0?"+":""}${ZS(SS)}`
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);