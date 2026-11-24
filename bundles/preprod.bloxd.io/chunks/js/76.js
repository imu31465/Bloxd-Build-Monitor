export const id = 76;
export const ids = [76];
export const modules = {
  37277: (pp, ip, cp) => {
    if (cp.d(ip, {
        b: () => Lp,
        f: () => op,
        j: () => Sp,
        n: () => Ip,
        p: () => ep,
        s: () => vp
      }), 39 == cp.j) var Op = cp(37286);
    const op = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Ip = ["Blade", "Guard", "Handle"],
      Sp = {
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
      xp = 4,
      Lp = "Coal",
      Yp = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Dp = 1.15,
      Ap = 1.35,
      Pp = .06,
      Wp = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: pp => `${mp(.06*pp)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: pp => `Mobs you slay drop ${Math.round(4*pp)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: pp => `${mp(.12*pp)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: pp => `+${mp(.2*pp)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: pp => `${mp(.15*pp)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: pp => `Heal ${mp(.06*pp)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: pp => `${mp(.1*pp)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      yp = {
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
      Up = 39 == cp.j ? Op.b : null,
      wp = "skyblock:forged:";

    function vp(pp, ip) {
      return `${pp} ${ip}`
    }
    op.flatMap((pp => Ip.map((ip => vp(pp, ip)))));

    function tp(pp) {
      let {
        blade: ip,
        guard: cp,
        handle: Op
      } = pp;
      return `${wp}${ip.toLowerCase()}-${cp.toLowerCase()}-${Op.toLowerCase()}`
    }

    function Hp(pp) {
      if (! function(pp) {
          return "string" === typeof pp && pp.startsWith(wp)
        }(pp)) return null;
      const ip = pp.slice(wp.length).split("-").map((pp => op.find((ip => ip.toLowerCase() === pp))));
      return 3 !== ip.length || ip.includes(void 0) ? null : {
        blade: ip[0],
        guard: ip[1],
        handle: ip[2]
      }
    }
    const dp = new Map;

    function ep(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Up;
      const Op = "string" === typeof pp ? Hp(pp) : pp;
      if (null === Op) return null;
      const op = tp(Op),
        Lp = cp === Up ? dp.get(op) : void 0;
      if (void 0 !== Lp) return Lp;
      const wp = function(pp, ip) {
        var cp, Op, op, Lp, Up, wp, vp, Hp, dp;
        const {
          blade: ep,
          guard: qp,
          handle: Mp
        } = pp, Cp = Sp, Ep = ep === qp && qp === Mp, Xp = kp((1 + Cp[ep].bladeDamage) * (Ep ? 1 + Pp : 1)), lp = null !== (cp = ip.damageMultiplier) && void 0 !== cp ? cp : Xp, Qp = null !== (Op = ip.cooldownMultiplier) && void 0 !== Op ? Op : Cp[Mp].handleCooldown, Jp = null !== (op = ip.knockbackMultiplier) && void 0 !== op ? op : kp(1 + Cp[Mp].handleKnockback), Bp = null !== (Lp = ip.reachBonus) && void 0 !== Lp ? Lp : Cp[Mp].handleReach, Np = null !== (Up = ip.damageReduction) && void 0 !== Up ? Up : Cp[qp].guardReduction, Tp = null !== (wp = ip.traits) && void 0 !== wp ? wp : function(pp) {
          const ip = {},
            cp = {};
          for (const xp of Ip) {
            var Op, op;
            const Ip = Sp[jp(pp, xp)].trait;
            null !== Ip && (ip[Ip] = (null !== (Op = ip[Ip]) && void 0 !== Op ? Op : 0) + Yp[xp], cp[Ip] = (null !== (op = cp[Ip]) && void 0 !== op ? op : 0) + 1)
          }
          for (const Ip of Object.keys(ip)) {
            const pp = 3 === cp[Ip] ? Ap : 2 === cp[Ip] ? Dp : 1;
            ip[Ip] = kp(ip[Ip] * pp)
          }
          return ip
        }(pp), fp = null !== (vp = ip.ability) && void 0 !== vp ? vp : null, bp = void 0 !== ip.name, hp = null !== (Hp = ip.name) && void 0 !== Hp ? Hp : Ep ? `Pure ${ep} Sword` : `${Cp[qp].epithet} ${ep} Sword`, ap = null !== (dp = ip.lore) && void 0 !== dp ? dp : `Forged by the Forge Mother from a ${ep.toLowerCase()} blade, ${qp.toLowerCase()} guard and ${Mp.toLowerCase()} handle.`, np = function(pp) {
          let {
            blade: ip,
            guard: cp,
            handle: Op
          } = pp;
          const op = Sp;
          return xp * (op[ip].value + op[cp].value + op[Op].value)
        }(pp), Fp = Cp[ep].value + Cp[qp].value + Cp[Mp].value, gp = bp ? "Tier 5" : Fp <= 4 ? "Tier 1" : Fp <= 8 ? "Tier 2" : Fp <= 14 ? "Tier 3" : Fp <= 22 ? "Tier 4" : "Tier 5", Gp = [];
        1 !== lp && Gp.push(`${Rp(lp-1)} damage`);
        1 !== Qp && Gp.push(`${mp(1/Qp-1)} faster strikes`);
        1 !== Jp && Gp.push(`${Rp(Jp-1)} knockback`);
        Bp > 0 && Gp.push(`+${Bp} reach`);
        Np > 0 && Gp.push(`${mp(Np)} less damage taken while held`);
        const rp = [];
        for (const Ip of Object.keys(Tp)) rp.push(`${Wp[Ip].name}: ${Wp[Ip].describe(Tp[Ip])}`);
        null !== fp && rp.push(`${yp[fp].name}: ${yp[fp].description}`);
        return Gp.push(...rp), {
          id: tp(pp),
          parts: pp,
          baseSword: Cp[ep].baseSword,
          displayName: hp,
          lore: ap,
          properties: Gp,
          effects: rp,
          named: bp,
          damageMultiplier: lp,
          cooldownMultiplier: Qp,
          knockbackMultiplier: Jp,
          reachBonus: Bp,
          damageReduction: Np,
          traits: Tp,
          ability: fp,
          coalCost: np,
          enchantmentTier: gp,
          powerMultiplier: kp(lp / Qp)
        }
      }(Op, null !== (ip = cp[op]) && void 0 !== ip ? ip : {});
      return cp === Up && dp.set(op, wp), wp
    }

    function jp(pp, ip) {
      return "Blade" === ip ? pp.blade : "Guard" === ip ? pp.guard : pp.handle
    }

    function kp(pp) {
      return Math.round(100 * pp) / 100
    }

    function mp(pp) {
      return `${Math.round(100*pp)}%`
    }

    function Rp(pp) {
      return `${pp>=0?"+":""}${mp(pp)}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);