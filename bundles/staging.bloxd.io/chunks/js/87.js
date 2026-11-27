export const id = 87;
export const ids = [87];
export const modules = {
  37890: (ee, ie, He) => {
    if (He.d(ie, {
        e: () => Fe,
        g: () => be,
        k: () => Ke,
        n: () => Me,
        r: () => ge,
        v: () => Xe
      }), 46 == He.j) var ye = He(37893);
    const be = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Me = ["Blade", "Guard", "Handle"],
      Ke = {
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
      Ue = 4,
      Fe = "Coal",
      Je = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      oe = 1.15,
      Re = 1.35,
      ke = .06,
      qe = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: ee => `${We(.06*ee)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: ee => `Mobs you slay drop ${Math.round(4*ee)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: ee => `${We(.12*ee)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: ee => `+${We(.2*ee)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: ee => `${We(.15*ee)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: ee => `Heal ${We(.06*ee)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: ee => `${We(.1*ee)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      fe = {
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
      Te = 46 == He.j ? ye.d : null,
      pe = "skyblock:forged:";

    function Xe(ee, ie) {
      return `${ee} ${ie}`
    }
    be.flatMap((ee => Me.map((ie => Xe(ee, ie)))));

    function ze(ee) {
      let {
        blade: ie,
        guard: He,
        handle: ye
      } = ee;
      return `${pe}${ie.toLowerCase()}-${He.toLowerCase()}-${ye.toLowerCase()}`
    }

    function Be(ee) {
      if (! function(ee) {
          return "string" === typeof ee && ee.startsWith(pe)
        }(ee)) return null;
      const ie = ee.slice(pe.length).split("-").map((ee => be.find((ie => ie.toLowerCase() === ee))));
      return 3 !== ie.length || ie.includes(void 0) ? null : {
        blade: ie[0],
        guard: ie[1],
        handle: ie[2]
      }
    }
    const Ee = new Map;

    function ge(ee) {
      var ie;
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te;
      const ye = "string" === typeof ee ? Be(ee) : ee;
      if (null === ye) return null;
      const be = ze(ye),
        Fe = He === Te ? Ee.get(be) : void 0;
      if (void 0 !== Fe) return Fe;
      const pe = function(ee, ie) {
        var He, ye, be, Fe, Te, pe, Xe, Be, Ee;
        const {
          blade: ge,
          guard: Ze,
          handle: we
        } = ee, De = Ke, Pe = ge === Ze && Ze === we, Ae = de((1 + De[ge].bladeDamage) * (Pe ? 1 + ke : 1)), Ye = null !== (He = ie.damageMultiplier) && void 0 !== He ? He : Ae, Ve = null !== (ye = ie.cooldownMultiplier) && void 0 !== ye ? ye : De[we].handleCooldown, ae = null !== (be = ie.knockbackMultiplier) && void 0 !== be ? be : de(1 + De[we].handleKnockback), ce = null !== (Fe = ie.reachBonus) && void 0 !== Fe ? Fe : De[we].handleReach, xe = null !== (Te = ie.damageReduction) && void 0 !== Te ? Te : De[Ze].guardReduction, Le = null !== (pe = ie.traits) && void 0 !== pe ? pe : function(ee) {
          const ie = {},
            He = {};
          for (const Ue of Me) {
            var ye, be;
            const Me = Ke[Oe(ee, Ue)].trait;
            null !== Me && (ie[Me] = (null !== (ye = ie[Me]) && void 0 !== ye ? ye : 0) + Je[Ue], He[Me] = (null !== (be = He[Me]) && void 0 !== be ? be : 0) + 1)
          }
          for (const Me of Object.keys(ie)) {
            const ee = 3 === He[Me] ? Re : 2 === He[Me] ? oe : 1;
            ie[Me] = de(ie[Me] * ee)
          }
          return ie
        }(ee), Ce = null !== (Xe = ie.ability) && void 0 !== Xe ? Xe : null, ve = void 0 !== ie.name, ue = null !== (Be = ie.name) && void 0 !== Be ? Be : Pe ? `Pure ${ge} Sword` : `${De[Ze].epithet} ${ge} Sword`, me = null !== (Ee = ie.lore) && void 0 !== Ee ? Ee : `Forged by the Forge Mother from a ${ge.toLowerCase()} blade, ${Ze.toLowerCase()} guard and ${we.toLowerCase()} handle.`, le = function(ee) {
          let {
            blade: ie,
            guard: He,
            handle: ye
          } = ee;
          const be = Ke;
          return Ue * (be[ie].value + be[He].value + be[ye].value)
        }(ee), Se = De[ge].value + De[Ze].value + De[we].value, ne = ve ? "Tier 5" : Se <= 4 ? "Tier 1" : Se <= 8 ? "Tier 2" : Se <= 14 ? "Tier 3" : Se <= 22 ? "Tier 4" : "Tier 5", je = [];
        1 !== Ye && je.push(`${te(Ye-1)} damage`);
        1 !== Ve && je.push(`${We(1/Ve-1)} faster strikes`);
        1 !== ae && je.push(`${te(ae-1)} knockback`);
        ce > 0 && je.push(`+${ce} reach`);
        xe > 0 && je.push(`${We(xe)} less damage taken while held`);
        const se = [];
        for (const Me of Object.keys(Le)) se.push(`${qe[Me].name}: ${qe[Me].describe(Le[Me])}`);
        null !== Ce && se.push(`${fe[Ce].name}: ${fe[Ce].description}`);
        return je.push(...se), {
          id: ze(ee),
          parts: ee,
          baseSword: De[ge].baseSword,
          displayName: ue,
          lore: me,
          properties: je,
          effects: se,
          named: ve,
          damageMultiplier: Ye,
          cooldownMultiplier: Ve,
          knockbackMultiplier: ae,
          reachBonus: ce,
          damageReduction: xe,
          traits: Le,
          ability: Ce,
          coalCost: le,
          enchantmentTier: ne,
          powerMultiplier: de(Ye / Ve)
        }
      }(ye, null !== (ie = He[be]) && void 0 !== ie ? ie : {});
      return He === Te && Ee.set(be, pe), pe
    }

    function Oe(ee, ie) {
      return "Blade" === ie ? ee.blade : "Guard" === ie ? ee.guard : ee.handle
    }

    function de(ee) {
      return Math.round(100 * ee) / 100
    }

    function We(ee) {
      return `${Math.round(100*ee)}%`
    }

    function te(ee) {
      return `${ee>=0?"+":""}${We(ee)}`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);