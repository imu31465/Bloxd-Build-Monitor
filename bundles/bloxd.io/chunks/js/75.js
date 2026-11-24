export const id = 75;
export const ids = [75];
export const modules = {
  37109: (kk, Fk, Ik) => {
    if (Ik.d(Fk, {
        b: () => ak,
        e: () => Tk,
        f: () => yk,
        i: () => ik,
        j: () => Qk,
        m: () => Jk
      }), 39 == Ik.j) var Xk = Ik(37118);
    const Tk = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      ik = ["Blade", "Guard", "Handle"],
      yk = {
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
      lk = 4,
      ak = "Coal",
      qk = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Lk = 1.15,
      tk = 1.35,
      Zk = .06,
      jk = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: kk => `${zk(.06*kk)} less damage taken`
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
          describe: kk => `${zk(.12*kk)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: kk => `+${zk(.2*kk)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: kk => `${zk(.15*kk)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: kk => `Heal ${zk(.06*kk)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: kk => `${zk(.1*kk)} chance to call a falling star that hits nearby mobs and slows them`
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
      wk = 39 == Ik.j ? Xk.b : null,
      Hk = "skyblock:forged:";

    function Jk(kk, Fk) {
      return `${kk} ${Fk}`
    }
    Tk.flatMap((kk => ik.map((Fk => Jk(kk, Fk)))));

    function xk(kk) {
      let {
        blade: Fk,
        guard: Ik,
        handle: Xk
      } = kk;
      return `${Hk}${Fk.toLowerCase()}-${Ik.toLowerCase()}-${Xk.toLowerCase()}`
    }

    function Pk(kk) {
      if (! function(kk) {
          return "string" === typeof kk && kk.startsWith(Hk)
        }(kk)) return null;
      const Fk = kk.slice(Hk.length).split("-").map((kk => Tk.find((Fk => Fk.toLowerCase() === kk))));
      return 3 !== Fk.length || Fk.includes(void 0) ? null : {
        blade: Fk[0],
        guard: Fk[1],
        handle: Fk[2]
      }
    }
    const Kk = new Map;

    function Qk(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wk;
      const Xk = "string" === typeof kk ? Pk(kk) : kk;
      if (null === Xk) return null;
      const Tk = xk(Xk),
        ak = Ik === wk ? Kk.get(Tk) : void 0;
      if (void 0 !== ak) return ak;
      const Hk = function(kk, Fk) {
        var Ik, Xk, Tk, ak, wk, Hk, Jk, Pk, Kk;
        const {
          blade: Qk,
          guard: vk,
          handle: Ek
        } = kk, Ok = yk, nk = Qk === vk && vk === Ek, Gk = Vk((1 + Ok[Qk].bladeDamage) * (nk ? 1 + Zk : 1)), pk = null !== (Ik = Fk.damageMultiplier) && void 0 !== Ik ? Ik : Gk, uk = null !== (Xk = Fk.cooldownMultiplier) && void 0 !== Xk ? Xk : Ok[Ek].handleCooldown, bk = null !== (Tk = Fk.knockbackMultiplier) && void 0 !== Tk ? Tk : Vk(1 + Ok[Ek].handleKnockback), Rk = null !== (ak = Fk.reachBonus) && void 0 !== ak ? ak : Ok[Ek].handleReach, Uk = null !== (wk = Fk.damageReduction) && void 0 !== wk ? wk : Ok[vk].guardReduction, Ck = null !== (Hk = Fk.traits) && void 0 !== Hk ? Hk : function(kk) {
          const Fk = {},
            Ik = {};
          for (const lk of ik) {
            var Xk, Tk;
            const ik = yk[sk(kk, lk)].trait;
            null !== ik && (Fk[ik] = (null !== (Xk = Fk[ik]) && void 0 !== Xk ? Xk : 0) + qk[lk], Ik[ik] = (null !== (Tk = Ik[ik]) && void 0 !== Tk ? Tk : 0) + 1)
          }
          for (const ik of Object.keys(Fk)) {
            const kk = 3 === Ik[ik] ? tk : 2 === Ik[ik] ? Lk : 1;
            Fk[ik] = Vk(Fk[ik] * kk)
          }
          return Fk
        }(kk), Nk = null !== (Jk = Fk.ability) && void 0 !== Jk ? Jk : null, ck = void 0 !== Fk.name, Wk = null !== (Pk = Fk.name) && void 0 !== Pk ? Pk : nk ? `Pure ${Qk} Sword` : `${Ok[vk].epithet} ${Qk} Sword`, fk = null !== (Kk = Fk.lore) && void 0 !== Kk ? Kk : `Forged by the Forge Mother from a ${Qk.toLowerCase()} blade, ${vk.toLowerCase()} guard and ${Ek.toLowerCase()} handle.`, Bk = function(kk) {
          let {
            blade: Fk,
            guard: Ik,
            handle: Xk
          } = kk;
          const Tk = yk;
          return lk * (Tk[Fk].value + Tk[Ik].value + Tk[Xk].value)
        }(kk), dk = Ok[Qk].value + Ok[vk].value + Ok[Ek].value, Yk = ck ? "Tier 5" : dk <= 4 ? "Tier 1" : dk <= 8 ? "Tier 2" : dk <= 14 ? "Tier 3" : dk <= 22 ? "Tier 4" : "Tier 5", Ak = [];
        1 !== pk && Ak.push(`${Sk(pk-1)} damage`);
        1 !== uk && Ak.push(`${zk(1/uk-1)} faster strikes`);
        1 !== bk && Ak.push(`${Sk(bk-1)} knockback`);
        Rk > 0 && Ak.push(`+${Rk} reach`);
        Uk > 0 && Ak.push(`${zk(Uk)} less damage taken while held`);
        const gk = [];
        for (const ik of Object.keys(Ck)) gk.push(`${jk[ik].name}: ${jk[ik].describe(Ck[ik])}`);
        null !== Nk && gk.push(`${ek[Nk].name}: ${ek[Nk].description}`);
        return Ak.push(...gk), {
          id: xk(kk),
          parts: kk,
          baseSword: Ok[Qk].baseSword,
          displayName: Wk,
          lore: fk,
          properties: Ak,
          effects: gk,
          named: ck,
          damageMultiplier: pk,
          cooldownMultiplier: uk,
          knockbackMultiplier: bk,
          reachBonus: Rk,
          damageReduction: Uk,
          traits: Ck,
          ability: Nk,
          coalCost: Bk,
          enchantmentTier: Yk,
          powerMultiplier: Vk(pk / uk)
        }
      }(Xk, null !== (Fk = Ik[Tk]) && void 0 !== Fk ? Fk : {});
      return Ik === wk && Kk.set(Tk, Hk), Hk
    }

    function sk(kk, Fk) {
      return "Blade" === Fk ? kk.blade : "Guard" === Fk ? kk.guard : kk.handle
    }

    function Vk(kk) {
      return Math.round(100 * kk) / 100
    }

    function zk(kk) {
      return `${Math.round(100*kk)}%`
    }

    function Sk(kk) {
      return `${kk>=0?"+":""}${zk(kk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);