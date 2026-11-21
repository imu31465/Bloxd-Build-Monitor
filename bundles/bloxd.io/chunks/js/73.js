export const id = 73;
export const ids = [73];
export const modules = {
  37210: (dd, Jd, kd) => {
    if (kd.d(Jd, {
        b: () => gd,
        c: () => Nd,
        g: () => Pd,
        j: () => Wd,
        n: () => xd,
        p: () => Rd
      }), 39 == kd.j) var pd = kd(37212);
    const Nd = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Wd = ["Blade", "Guard", "Handle"],
      Pd = {
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
      Zd = 4,
      gd = "Coal",
      Cd = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Kd = 1.15,
      od = 1.35,
      ld = .06,
      Qd = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: dd => `${sd(.06*dd)} less damage taken`
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
          describe: dd => `${sd(.12*dd)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: dd => `+${sd(.2*dd)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: dd => `${sd(.15*dd)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: dd => `Heal ${sd(.06*dd)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: dd => `${sd(.1*dd)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Ld = {
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
      Od = 39 == kd.j ? pd.c : null,
      ed = "skyblock:forged:";

    function Rd(dd, Jd) {
      return `${dd} ${Jd}`
    }
    Nd.flatMap((dd => Wd.map((Jd => Rd(dd, Jd)))));

    function Id(dd) {
      let {
        blade: Jd,
        guard: kd,
        handle: pd
      } = dd;
      return `${ed}${Jd.toLowerCase()}-${kd.toLowerCase()}-${pd.toLowerCase()}`
    }

    function Gd(dd) {
      if (! function(dd) {
          return "string" === typeof dd && dd.startsWith(ed)
        }(dd)) return null;
      const Jd = dd.slice(ed.length).split("-").map((dd => Nd.find((Jd => Jd.toLowerCase() === dd))));
      return 3 !== Jd.length || Jd.includes(void 0) ? null : {
        blade: Jd[0],
        guard: Jd[1],
        handle: Jd[2]
      }
    }
    const vd = new Map;

    function xd(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Od;
      const pd = "string" === typeof dd ? Gd(dd) : dd;
      if (null === pd) return null;
      const Nd = Id(pd),
        gd = kd === Od ? vd.get(Nd) : void 0;
      if (void 0 !== gd) return gd;
      const ed = function(dd, Jd) {
        var kd, pd, Nd, gd, Od, ed, Rd, Gd, vd;
        const {
          blade: xd,
          guard: Md,
          handle: Fd
        } = dd, Yd = Pd, md = xd === Md && Md === Fd, bd = Bd((1 + Yd[xd].bladeDamage) * (md ? 1 + ld : 1)), Sd = null !== (kd = Jd.damageMultiplier) && void 0 !== kd ? kd : bd, jd = null !== (pd = Jd.cooldownMultiplier) && void 0 !== pd ? pd : Yd[Fd].handleCooldown, Xd = null !== (Nd = Jd.knockbackMultiplier) && void 0 !== Nd ? Nd : Bd(1 + Yd[Fd].handleKnockback), fd = null !== (gd = Jd.reachBonus) && void 0 !== gd ? gd : Yd[Fd].handleReach, nd = null !== (Od = Jd.damageReduction) && void 0 !== Od ? Od : Yd[Md].guardReduction, Ud = null !== (ed = Jd.traits) && void 0 !== ed ? ed : function(dd) {
          const Jd = {},
            kd = {};
          for (const Zd of Wd) {
            var pd, Nd;
            const Wd = Pd[qd(dd, Zd)].trait;
            null !== Wd && (Jd[Wd] = (null !== (pd = Jd[Wd]) && void 0 !== pd ? pd : 0) + Cd[Zd], kd[Wd] = (null !== (Nd = kd[Wd]) && void 0 !== Nd ? Nd : 0) + 1)
          }
          for (const Wd of Object.keys(Jd)) {
            const dd = 3 === kd[Wd] ? od : 2 === kd[Wd] ? Kd : 1;
            Jd[Wd] = Bd(Jd[Wd] * dd)
          }
          return Jd
        }(dd), yd = null !== (Rd = Jd.ability) && void 0 !== Rd ? Rd : null, Dd = void 0 !== Jd.name, Td = null !== (Gd = Jd.name) && void 0 !== Gd ? Gd : md ? `Pure ${xd} Sword` : `${Yd[Md].epithet} ${xd} Sword`, Ed = null !== (vd = Jd.lore) && void 0 !== vd ? vd : `Forged by the Forge Mother from a ${xd.toLowerCase()} blade, ${Md.toLowerCase()} guard and ${Fd.toLowerCase()} handle.`, cd = function(dd) {
          let {
            blade: Jd,
            guard: kd,
            handle: pd
          } = dd;
          const Nd = Pd;
          return Zd * (Nd[Jd].value + Nd[kd].value + Nd[pd].value)
        }(dd), hd = Yd[xd].value + Yd[Md].value + Yd[Fd].value, rd = Dd ? "Tier 5" : hd <= 4 ? "Tier 1" : hd <= 8 ? "Tier 2" : hd <= 14 ? "Tier 3" : hd <= 22 ? "Tier 4" : "Tier 5", ud = [];
        1 !== Sd && ud.push(`${ad(Sd-1)} damage`);
        1 !== jd && ud.push(`${sd(1/jd-1)} faster strikes`);
        1 !== Xd && ud.push(`${ad(Xd-1)} knockback`);
        fd > 0 && ud.push(`+${fd} reach`);
        nd > 0 && ud.push(`${sd(nd)} less damage taken while held`);
        const td = [];
        for (const Wd of Object.keys(Ud)) td.push(`${Qd[Wd].name}: ${Qd[Wd].describe(Ud[Wd])}`);
        null !== yd && td.push(`${Ld[yd].name}: ${Ld[yd].description}`);
        return ud.push(...td), {
          id: Id(dd),
          parts: dd,
          baseSword: Yd[xd].baseSword,
          displayName: Td,
          lore: Ed,
          properties: ud,
          effects: td,
          named: Dd,
          damageMultiplier: Sd,
          cooldownMultiplier: jd,
          knockbackMultiplier: Xd,
          reachBonus: fd,
          damageReduction: nd,
          traits: Ud,
          ability: yd,
          coalCost: cd,
          enchantmentTier: rd,
          powerMultiplier: Bd(Sd / jd)
        }
      }(pd, null !== (Jd = kd[Nd]) && void 0 !== Jd ? Jd : {});
      return kd === Od && vd.set(Nd, ed), ed
    }

    function qd(dd, Jd) {
      return "Blade" === Jd ? dd.blade : "Guard" === Jd ? dd.guard : dd.handle
    }

    function Bd(dd) {
      return Math.round(100 * dd) / 100
    }

    function sd(dd) {
      return `${Math.round(100*dd)}%`
    }

    function ad(dd) {
      return `${dd>=0?"+":""}${sd(dd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);