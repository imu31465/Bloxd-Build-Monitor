export const id = 89;
export const ids = [89];
export const modules = {
  38598: (dd, Od, md) => {
    if (md.d(Od, {
        e: () => hd,
        f: () => Fd,
        j: () => Xd,
        m: () => Rd,
        n: () => gd,
        p: () => bd
      }), 47 == md.j) var Wd = md(38603);
    const Fd = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Rd = ["Blade", "Guard", "Handle"],
      Xd = {
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
      Kd = 4,
      hd = "Coal",
      vd = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Qd = 1.15,
      td = 1.35,
      od = .06,
      Nd = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: dd => `${Jd(.06*dd)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: dd => `Mobs you slay drop ${Math.round(4*dd)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: dd => `${Jd(.12*dd)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: dd => `+${Jd(.2*dd)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: dd => `${Jd(.15*dd)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: dd => `Heal ${Jd(.06*dd)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: dd => `${Jd(.1*dd)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      qd = {
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
      Hd = 47 == md.j ? Wd.b : null,
      yd = "skyblock:forged:";

    function bd(dd, Od) {
      return `${dd} ${Od}`
    }
    Fd.flatMap((dd => Rd.map((Od => bd(dd, Od)))));

    function Td(dd) {
      let {
        blade: Od,
        guard: md,
        handle: Wd
      } = dd;
      return `${yd}${Od.toLowerCase()}-${md.toLowerCase()}-${Wd.toLowerCase()}`
    }

    function pd(dd) {
      if (! function(dd) {
          return "string" === typeof dd && dd.startsWith(yd)
        }(dd)) return null;
      const Od = dd.slice(yd.length).split("-").map((dd => Fd.find((Od => Od.toLowerCase() === dd))));
      return 3 !== Od.length || Od.includes(void 0) ? null : {
        blade: Od[0],
        guard: Od[1],
        handle: Od[2]
      }
    }
    const Yd = new Map;

    function gd(dd) {
      var Od;
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hd;
      const Wd = "string" === typeof dd ? pd(dd) : dd;
      if (null === Wd) return null;
      const Fd = Td(Wd),
        hd = md === Hd ? Yd.get(Fd) : void 0;
      if (void 0 !== hd) return hd;
      const yd = function(dd, Od) {
        var md, Wd, Fd, hd, Hd, yd, bd, pd, Yd;
        const {
          blade: gd,
          guard: xd,
          handle: Bd
        } = dd, Sd = Xd, sd = gd === xd && xd === Bd, ud = Ed((1 + Sd[gd].bladeDamage) * (sd ? 1 + od : 1)), Vd = null !== (md = Od.damageMultiplier) && void 0 !== md ? md : ud, Ad = null !== (Wd = Od.cooldownMultiplier) && void 0 !== Wd ? Wd : Sd[Bd].handleCooldown, rd = null !== (Fd = Od.knockbackMultiplier) && void 0 !== Fd ? Fd : Ed(1 + Sd[Bd].handleKnockback), Gd = null !== (hd = Od.reachBonus) && void 0 !== hd ? hd : Sd[Bd].handleReach, nd = null !== (Hd = Od.damageReduction) && void 0 !== Hd ? Hd : Sd[xd].guardReduction, Ld = null !== (yd = Od.traits) && void 0 !== yd ? yd : function(dd) {
          const Od = {},
            md = {};
          for (const Kd of Rd) {
            var Wd, Fd;
            const Rd = Xd[wd(dd, Kd)].trait;
            null !== Rd && (Od[Rd] = (null !== (Wd = Od[Rd]) && void 0 !== Wd ? Wd : 0) + vd[Kd], md[Rd] = (null !== (Fd = md[Rd]) && void 0 !== Fd ? Fd : 0) + 1)
          }
          for (const Rd of Object.keys(Od)) {
            const dd = 3 === md[Rd] ? td : 2 === md[Rd] ? Qd : 1;
            Od[Rd] = Ed(Od[Rd] * dd)
          }
          return Od
        }(dd), Pd = null !== (bd = Od.ability) && void 0 !== bd ? bd : null, zd = void 0 !== Od.name, cd = null !== (pd = Od.name) && void 0 !== pd ? pd : sd ? `Pure ${gd} Sword` : `${Sd[xd].epithet} ${gd} Sword`, jd = null !== (Yd = Od.lore) && void 0 !== Yd ? Yd : `Forged by the Forge Mother from a ${gd.toLowerCase()} blade, ${xd.toLowerCase()} guard and ${Bd.toLowerCase()} handle.`, Dd = function(dd) {
          let {
            blade: Od,
            guard: md,
            handle: Wd
          } = dd;
          const Fd = Xd;
          return Kd * (Fd[Od].value + Fd[md].value + Fd[Wd].value)
        }(dd), ed = Sd[gd].value + Sd[xd].value + Sd[Bd].value, Id = zd ? "Tier 5" : ed <= 4 ? "Tier 1" : ed <= 8 ? "Tier 2" : ed <= 14 ? "Tier 3" : ed <= 22 ? "Tier 4" : "Tier 5", ld = [];
        1 !== Vd && ld.push(`${Ud(Vd-1)} damage`);
        1 !== Ad && ld.push(`${Jd(1/Ad-1)} faster strikes`);
        1 !== rd && ld.push(`${Ud(rd-1)} knockback`);
        Gd > 0 && ld.push(`+${Gd} reach`);
        nd > 0 && ld.push(`${Jd(nd)} less damage taken while held`);
        const Cd = [];
        for (const Rd of Object.keys(Ld)) Cd.push(`${Nd[Rd].name}: ${Nd[Rd].describe(Ld[Rd])}`);
        null !== Pd && Cd.push(`${qd[Pd].name}: ${qd[Pd].description}`);
        return ld.push(...Cd), {
          id: Td(dd),
          parts: dd,
          baseSword: Sd[gd].baseSword,
          displayName: cd,
          lore: jd,
          properties: ld,
          effects: Cd,
          named: zd,
          damageMultiplier: Vd,
          cooldownMultiplier: Ad,
          knockbackMultiplier: rd,
          reachBonus: Gd,
          damageReduction: nd,
          traits: Ld,
          ability: Pd,
          coalCost: Dd,
          enchantmentTier: Id,
          powerMultiplier: Ed(Vd / Ad)
        }
      }(Wd, null !== (Od = md[Fd]) && void 0 !== Od ? Od : {});
      return md === Hd && Yd.set(Fd, yd), yd
    }

    function wd(dd, Od) {
      return "Blade" === Od ? dd.blade : "Guard" === Od ? dd.guard : dd.handle
    }

    function Ed(dd) {
      return Math.round(100 * dd) / 100
    }

    function Jd(dd) {
      return `${Math.round(100*dd)}%`
    }

    function Ud(dd) {
      return `${dd>=0?"+":""}${Jd(dd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);