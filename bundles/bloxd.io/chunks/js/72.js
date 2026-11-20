export const id = 72;
export const ids = [72];
export const modules = {
  36805: (uu, Ru, yu) => {
    if (yu.d(Ru, {
        e: () => Nu,
        h: () => Ku,
        k: () => mu,
        m: () => Qu,
        q: () => bu,
        t: () => Wu
      }), 39 == yu.j) var Eu = yu(36807);
    const Ku = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Qu = ["Blade", "Guard", "Handle"],
      mu = {
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
      Ju = 4,
      Nu = "Coal",
      Xu = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Vu = 1.15,
      ru = 1.35,
      Bu = .06,
      xu = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: uu => `${eu(.06*uu)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: uu => `Mobs you slay drop ${Math.round(4*uu)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: uu => `${eu(.12*uu)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: uu => `+${eu(.2*uu)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: uu => `${eu(.15*uu)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: uu => `Heal ${eu(.06*uu)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: uu => `${eu(.1*uu)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Su = {
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
      pu = 39 == yu.j ? Eu.b : null,
      Tu = "skyblock:forged:";

    function Wu(uu, Ru) {
      return `${uu} ${Ru}`
    }
    Ku.flatMap((uu => Qu.map((Ru => Wu(uu, Ru)))));

    function ju(uu) {
      let {
        blade: Ru,
        guard: yu,
        handle: Eu
      } = uu;
      return `${Tu}${Ru.toLowerCase()}-${yu.toLowerCase()}-${Eu.toLowerCase()}`
    }

    function Hu(uu) {
      if (! function(uu) {
          return "string" === typeof uu && uu.startsWith(Tu)
        }(uu)) return null;
      const Ru = uu.slice(Tu.length).split("-").map((uu => Ku.find((Ru => Ru.toLowerCase() === uu))));
      return 3 !== Ru.length || Ru.includes(void 0) ? null : {
        blade: Ru[0],
        guard: Ru[1],
        handle: Ru[2]
      }
    }
    const du = new Map;

    function bu(uu) {
      var Ru;
      let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pu;
      const Eu = "string" === typeof uu ? Hu(uu) : uu;
      if (null === Eu) return null;
      const Ku = ju(Eu),
        Nu = yu === pu ? du.get(Ku) : void 0;
      if (void 0 !== Nu) return Nu;
      const Tu = function(uu, Ru) {
        var yu, Eu, Ku, Nu, pu, Tu, Wu, Hu, du;
        const {
          blade: bu,
          guard: Du,
          handle: Mu
        } = uu, Iu = mu, Gu = bu === Du && Du === Mu, Uu = ku((1 + Iu[bu].bladeDamage) * (Gu ? 1 + Bu : 1)), nu = null !== (yu = Ru.damageMultiplier) && void 0 !== yu ? yu : Uu, su = null !== (Eu = Ru.cooldownMultiplier) && void 0 !== Eu ? Eu : Iu[Mu].handleCooldown, tu = null !== (Ku = Ru.knockbackMultiplier) && void 0 !== Ku ? Ku : ku(1 + Iu[Mu].handleKnockback), lu = null !== (Nu = Ru.reachBonus) && void 0 !== Nu ? Nu : Iu[Mu].handleReach, gu = null !== (pu = Ru.damageReduction) && void 0 !== pu ? pu : Iu[Du].guardReduction, cu = null !== (Tu = Ru.traits) && void 0 !== Tu ? Tu : function(uu) {
          const Ru = {},
            yu = {};
          for (const Ju of Qu) {
            var Eu, Ku;
            const Qu = mu[Cu(uu, Ju)].trait;
            null !== Qu && (Ru[Qu] = (null !== (Eu = Ru[Qu]) && void 0 !== Eu ? Eu : 0) + Xu[Ju], yu[Qu] = (null !== (Ku = yu[Qu]) && void 0 !== Ku ? Ku : 0) + 1)
          }
          for (const Qu of Object.keys(Ru)) {
            const uu = 3 === yu[Qu] ? ru : 2 === yu[Qu] ? Vu : 1;
            Ru[Qu] = ku(Ru[Qu] * uu)
          }
          return Ru
        }(uu), Lu = null !== (Wu = Ru.ability) && void 0 !== Wu ? Wu : null, zu = void 0 !== Ru.name, Fu = null !== (Hu = Ru.name) && void 0 !== Hu ? Hu : Gu ? `Pure ${bu} Sword` : `${Iu[Du].epithet} ${bu} Sword`, wu = null !== (du = Ru.lore) && void 0 !== du ? du : `Forged by the Forge Mother from a ${bu.toLowerCase()} blade, ${Du.toLowerCase()} guard and ${Mu.toLowerCase()} handle.`, Zu = function(uu) {
          let {
            blade: Ru,
            guard: yu,
            handle: Eu
          } = uu;
          const Ku = mu;
          return Ju * (Ku[Ru].value + Ku[yu].value + Ku[Eu].value)
        }(uu), hu = Iu[bu].value + Iu[Du].value + Iu[Mu].value, Pu = zu ? "Tier 5" : hu <= 4 ? "Tier 1" : hu <= 8 ? "Tier 2" : hu <= 14 ? "Tier 3" : hu <= 22 ? "Tier 4" : "Tier 5", iu = [];
        1 !== nu && iu.push(`${Au(nu-1)} damage`);
        1 !== su && iu.push(`${eu(1/su-1)} faster strikes`);
        1 !== tu && iu.push(`${Au(tu-1)} knockback`);
        lu > 0 && iu.push(`+${lu} reach`);
        gu > 0 && iu.push(`${eu(gu)} less damage taken while held`);
        const Yu = [];
        for (const Qu of Object.keys(cu)) Yu.push(`${xu[Qu].name}: ${xu[Qu].describe(cu[Qu])}`);
        null !== Lu && Yu.push(`${Su[Lu].name}: ${Su[Lu].description}`);
        return iu.push(...Yu), {
          id: ju(uu),
          parts: uu,
          baseSword: Iu[bu].baseSword,
          displayName: Fu,
          lore: wu,
          properties: iu,
          effects: Yu,
          named: zu,
          damageMultiplier: nu,
          cooldownMultiplier: su,
          knockbackMultiplier: tu,
          reachBonus: lu,
          damageReduction: gu,
          traits: cu,
          ability: Lu,
          coalCost: Zu,
          enchantmentTier: Pu,
          powerMultiplier: ku(nu / su)
        }
      }(Eu, null !== (Ru = yu[Ku]) && void 0 !== Ru ? Ru : {});
      return yu === pu && du.set(Ku, Tu), Tu
    }

    function Cu(uu, Ru) {
      return "Blade" === Ru ? uu.blade : "Guard" === Ru ? uu.guard : uu.handle
    }

    function ku(uu) {
      return Math.round(100 * uu) / 100
    }

    function eu(uu) {
      return `${Math.round(100*uu)}%`
    }

    function Au(uu) {
      return `${uu>=0?"+":""}${eu(uu)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);