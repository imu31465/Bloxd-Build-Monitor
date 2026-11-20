export const id = 72;
export const ids = [72];
export const modules = {
  36726: (kk, Fk, Bk) => {
    if (Bk.d(Fk, {
        b: () => wk,
        c: () => tk,
        d: () => Xk,
        g: () => ak,
        h: () => Yk,
        i: () => mk
      }), 39 == Bk.j) var Rk = Bk(36728);
    const tk = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      ak = ["Blade", "Guard", "Handle"],
      Xk = {
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
      bk = 4,
      wk = "Coal",
      dk = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      sk = 1.15,
      Vk = 1.35,
      Jk = .06,
      Ak = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: kk => `${Ek(.06*kk)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: kk => `Mobs you slay drop ${Math.round(4*kk)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: kk => `${Ek(.12*kk)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: kk => `+${Ek(.2*kk)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: kk => `${Ek(.15*kk)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: kk => `Heal ${Ek(.06*kk)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: kk => `${Ek(.1*kk)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      ek = {
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
      yk = 39 == Bk.j ? Rk.d : null,
      fk = "skyblock:forged:";

    function mk(kk, Fk) {
      return `${kk} ${Fk}`
    }
    tk.flatMap((kk => ak.map((Fk => mk(kk, Fk)))));

    function Wk(kk) {
      let {
        blade: Fk,
        guard: Bk,
        handle: Rk
      } = kk;
      return `${fk}${Fk.toLowerCase()}-${Bk.toLowerCase()}-${Rk.toLowerCase()}`
    }

    function vk(kk) {
      if (! function(kk) {
          return "string" === typeof kk && kk.startsWith(fk)
        }(kk)) return null;
      const Fk = kk.slice(fk.length).split("-").map((kk => tk.find((Fk => Fk.toLowerCase() === kk))));
      return 3 !== Fk.length || Fk.includes(void 0) ? null : {
        blade: Fk[0],
        guard: Fk[1],
        handle: Fk[2]
      }
    }
    const ik = new Map;

    function Yk(kk) {
      var Fk;
      let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk;
      const Rk = "string" === typeof kk ? vk(kk) : kk;
      if (null === Rk) return null;
      const tk = Wk(Rk),
        wk = Bk === yk ? ik.get(tk) : void 0;
      if (void 0 !== wk) return wk;
      const fk = function(kk, Fk) {
        var Bk, Rk, tk, wk, yk, fk, mk, vk, ik;
        const {
          blade: Yk,
          guard: Nk,
          handle: Hk
        } = kk, uk = Xk, Mk = Yk === Nk && Nk === Hk, gk = Ok((1 + uk[Yk].bladeDamage) * (Mk ? 1 + Jk : 1)), Uk = null !== (Bk = Fk.damageMultiplier) && void 0 !== Bk ? Bk : gk, ck = null !== (Rk = Fk.cooldownMultiplier) && void 0 !== Rk ? Rk : uk[Hk].handleCooldown, Gk = null !== (tk = Fk.knockbackMultiplier) && void 0 !== tk ? tk : Ok(1 + uk[Hk].handleKnockback), Tk = null !== (wk = Fk.reachBonus) && void 0 !== wk ? wk : uk[Hk].handleReach, rk = null !== (yk = Fk.damageReduction) && void 0 !== yk ? yk : uk[Nk].guardReduction, Dk = null !== (fk = Fk.traits) && void 0 !== fk ? fk : function(kk) {
          const Fk = {},
            Bk = {};
          for (const bk of ak) {
            var Rk, tk;
            const ak = Xk[Lk(kk, bk)].trait;
            null !== ak && (Fk[ak] = (null !== (Rk = Fk[ak]) && void 0 !== Rk ? Rk : 0) + dk[bk], Bk[ak] = (null !== (tk = Bk[ak]) && void 0 !== tk ? tk : 0) + 1)
          }
          for (const ak of Object.keys(Fk)) {
            const kk = 3 === Bk[ak] ? Vk : 2 === Bk[ak] ? sk : 1;
            Fk[ak] = Ok(Fk[ak] * kk)
          }
          return Fk
        }(kk), zk = null !== (mk = Fk.ability) && void 0 !== mk ? mk : null, Pk = void 0 !== Fk.name, hk = null !== (vk = Fk.name) && void 0 !== vk ? vk : Mk ? `Pure ${Yk} Sword` : `${uk[Nk].epithet} ${Yk} Sword`, qk = null !== (ik = Fk.lore) && void 0 !== ik ? ik : `Forged by the Forge Mother from a ${Yk.toLowerCase()} blade, ${Nk.toLowerCase()} guard and ${Hk.toLowerCase()} handle.`, Ck = function(kk) {
          let {
            blade: Fk,
            guard: Bk,
            handle: Rk
          } = kk;
          const tk = Xk;
          return bk * (tk[Fk].value + tk[Bk].value + tk[Rk].value)
        }(kk), Zk = uk[Yk].value + uk[Nk].value + uk[Hk].value, pk = Pk ? "Tier 5" : Zk <= 4 ? "Tier 1" : Zk <= 8 ? "Tier 2" : Zk <= 14 ? "Tier 3" : Zk <= 22 ? "Tier 4" : "Tier 5", Kk = [];
        1 !== Uk && Kk.push(`${Sk(Uk-1)} damage`);
        1 !== ck && Kk.push(`${Ek(1/ck-1)} faster strikes`);
        1 !== Gk && Kk.push(`${Sk(Gk-1)} knockback`);
        Tk > 0 && Kk.push(`+${Tk} reach`);
        rk > 0 && Kk.push(`${Ek(rk)} less damage taken while held`);
        const xk = [];
        for (const ak of Object.keys(Dk)) xk.push(`${Ak[ak].name}: ${Ak[ak].describe(Dk[ak])}`);
        null !== zk && xk.push(`${ek[zk].name}: ${ek[zk].description}`);
        return Kk.push(...xk), {
          id: Wk(kk),
          parts: kk,
          baseSword: uk[Yk].baseSword,
          displayName: hk,
          lore: qk,
          properties: Kk,
          effects: xk,
          named: Pk,
          damageMultiplier: Uk,
          cooldownMultiplier: ck,
          knockbackMultiplier: Gk,
          reachBonus: Tk,
          damageReduction: rk,
          traits: Dk,
          ability: zk,
          coalCost: Ck,
          enchantmentTier: pk,
          powerMultiplier: Ok(Uk / ck)
        }
      }(Rk, null !== (Fk = Bk[tk]) && void 0 !== Fk ? Fk : {});
      return Bk === yk && ik.set(tk, fk), fk
    }

    function Lk(kk, Fk) {
      return "Blade" === Fk ? kk.blade : "Guard" === Fk ? kk.guard : kk.handle
    }

    function Ok(kk) {
      return Math.round(100 * kk) / 100
    }

    function Ek(kk) {
      return `${Math.round(100*kk)}%`
    }

    function Sk(kk) {
      return `${kk>=0?"+":""}${Ek(kk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);