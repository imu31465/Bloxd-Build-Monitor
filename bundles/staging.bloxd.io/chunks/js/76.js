export const id = 76;
export const ids = [76];
export const modules = {
  37460: (uu, Eu, ju) => {
    if (ju.d(Eu, {
        d: () => qu,
        g: () => Uu,
        i: () => Xu,
        j: () => Zu,
        l: () => Gu,
        m: () => Du
      }), 39 == ju.j) var su = ju(37467);
    const Uu = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Zu = ["Blade", "Guard", "Handle"],
      Xu = {
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
      lu = 4,
      qu = "Coal",
      fu = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Cu = 1.15,
      bu = 1.35,
      cu = .06,
      Nu = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: uu => `${Ju(.06*uu)} less damage taken`
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
          describe: uu => `${Ju(.12*uu)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: uu => `+${Ju(.2*uu)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: uu => `${Ju(.15*uu)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: uu => `Heal ${Ju(.06*uu)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: uu => `${Ju(.1*uu)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Ou = {
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
      Yu = 39 == ju.j ? su.e : null,
      hu = "skyblock:forged:";

    function Du(uu, Eu) {
      return `${uu} ${Eu}`
    }
    Uu.flatMap((uu => Zu.map((Eu => Du(uu, Eu)))));

    function gu(uu) {
      let {
        blade: Eu,
        guard: ju,
        handle: su
      } = uu;
      return `${hu}${Eu.toLowerCase()}-${ju.toLowerCase()}-${su.toLowerCase()}`
    }

    function Mu(uu) {
      if (! function(uu) {
          return "string" === typeof uu && uu.startsWith(hu)
        }(uu)) return null;
      const Eu = uu.slice(hu.length).split("-").map((uu => Uu.find((Eu => Eu.toLowerCase() === uu))));
      return 3 !== Eu.length || Eu.includes(void 0) ? null : {
        blade: Eu[0],
        guard: Eu[1],
        handle: Eu[2]
      }
    }
    const eu = new Map;

    function Gu(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu;
      const su = "string" === typeof uu ? Mu(uu) : uu;
      if (null === su) return null;
      const Uu = gu(su),
        qu = ju === Yu ? eu.get(Uu) : void 0;
      if (void 0 !== qu) return qu;
      const hu = function(uu, Eu) {
        var ju, su, Uu, qu, Yu, hu, Du, Mu, eu;
        const {
          blade: Gu,
          guard: au,
          handle: Pu
        } = uu, ou = Xu, ku = Gu === au && au === Pu, mu = wu((1 + ou[Gu].bladeDamage) * (ku ? 1 + cu : 1)), vu = null !== (ju = Eu.damageMultiplier) && void 0 !== ju ? ju : mu, Ku = null !== (su = Eu.cooldownMultiplier) && void 0 !== su ? su : ou[Pu].handleCooldown, Vu = null !== (Uu = Eu.knockbackMultiplier) && void 0 !== Uu ? Uu : wu(1 + ou[Pu].handleKnockback), ru = null !== (qu = Eu.reachBonus) && void 0 !== qu ? qu : ou[Pu].handleReach, Qu = null !== (Yu = Eu.damageReduction) && void 0 !== Yu ? Yu : ou[au].guardReduction, iu = null !== (hu = Eu.traits) && void 0 !== hu ? hu : function(uu) {
          const Eu = {},
            ju = {};
          for (const lu of Zu) {
            var su, Uu;
            const Zu = Xu[pu(uu, lu)].trait;
            null !== Zu && (Eu[Zu] = (null !== (su = Eu[Zu]) && void 0 !== su ? su : 0) + fu[lu], ju[Zu] = (null !== (Uu = ju[Zu]) && void 0 !== Uu ? Uu : 0) + 1)
          }
          for (const Zu of Object.keys(Eu)) {
            const uu = 3 === ju[Zu] ? bu : 2 === ju[Zu] ? Cu : 1;
            Eu[Zu] = wu(Eu[Zu] * uu)
          }
          return Eu
        }(uu), Wu = null !== (Du = Eu.ability) && void 0 !== Du ? Du : null, Su = void 0 !== Eu.name, Iu = null !== (Mu = Eu.name) && void 0 !== Mu ? Mu : ku ? `Pure ${Gu} Sword` : `${ou[au].epithet} ${Gu} Sword`, Fu = null !== (eu = Eu.lore) && void 0 !== eu ? eu : `Forged by the Forge Mother from a ${Gu.toLowerCase()} blade, ${au.toLowerCase()} guard and ${Pu.toLowerCase()} handle.`, Bu = function(uu) {
          let {
            blade: Eu,
            guard: ju,
            handle: su
          } = uu;
          const Uu = Xu;
          return lu * (Uu[Eu].value + Uu[ju].value + Uu[su].value)
        }(uu), Lu = ou[Gu].value + ou[au].value + ou[Pu].value, tu = Su ? "Tier 5" : Lu <= 4 ? "Tier 1" : Lu <= 8 ? "Tier 2" : Lu <= 14 ? "Tier 3" : Lu <= 22 ? "Tier 4" : "Tier 5", xu = [];
        1 !== vu && xu.push(`${du(vu-1)} damage`);
        1 !== Ku && xu.push(`${Ju(1/Ku-1)} faster strikes`);
        1 !== Vu && xu.push(`${du(Vu-1)} knockback`);
        ru > 0 && xu.push(`+${ru} reach`);
        Qu > 0 && xu.push(`${Ju(Qu)} less damage taken while held`);
        const Tu = [];
        for (const Zu of Object.keys(iu)) Tu.push(`${Nu[Zu].name}: ${Nu[Zu].describe(iu[Zu])}`);
        null !== Wu && Tu.push(`${Ou[Wu].name}: ${Ou[Wu].description}`);
        return xu.push(...Tu), {
          id: gu(uu),
          parts: uu,
          baseSword: ou[Gu].baseSword,
          displayName: Iu,
          lore: Fu,
          properties: xu,
          effects: Tu,
          named: Su,
          damageMultiplier: vu,
          cooldownMultiplier: Ku,
          knockbackMultiplier: Vu,
          reachBonus: ru,
          damageReduction: Qu,
          traits: iu,
          ability: Wu,
          coalCost: Bu,
          enchantmentTier: tu,
          powerMultiplier: wu(vu / Ku)
        }
      }(su, null !== (Eu = ju[Uu]) && void 0 !== Eu ? Eu : {});
      return ju === Yu && eu.set(Uu, hu), hu
    }

    function pu(uu, Eu) {
      return "Blade" === Eu ? uu.blade : "Guard" === Eu ? uu.guard : uu.handle
    }

    function wu(uu) {
      return Math.round(100 * uu) / 100
    }

    function Ju(uu) {
      return `${Math.round(100*uu)}%`
    }

    function du(uu) {
      return `${uu>=0?"+":""}${Ju(uu)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);