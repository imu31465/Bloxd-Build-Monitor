export const id = 75;
export const ids = [75];
export const modules = {
  36664: (kk, ek, ik) => {
    if (ik.d(ek, {
        c: () => Pk,
        d: () => fk,
        e: () => bk,
        g: () => Sk,
        j: () => Lk,
        k: () => lk
      }), 39 == ik.j) var Dk = ik(36668);
    const fk = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Sk = ["Blade", "Guard", "Handle"],
      bk = {
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
      rk = 4,
      Pk = "Coal",
      mk = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Mk = 1.15,
      Kk = 1.35,
      xk = .06,
      nk = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: kk => `${jk(.06*kk)} less damage taken`
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
          describe: kk => `${jk(.12*kk)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: kk => `+${jk(.2*kk)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: kk => `${jk(.15*kk)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: kk => `Heal ${jk(.06*kk)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: kk => `${jk(.1*kk)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Uk = {
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
      Hk = 39 == ik.j ? Dk.e : null,
      wk = "skyblock:forged:";

    function lk(kk, ek) {
      return `${kk} ${ek}`
    }
    fk.flatMap((kk => Sk.map((ek => lk(kk, ek)))));

    function pk(kk) {
      let {
        blade: ek,
        guard: ik,
        handle: Dk
      } = kk;
      return `${wk}${ek.toLowerCase()}-${ik.toLowerCase()}-${Dk.toLowerCase()}`
    }

    function yk(kk) {
      if (! function(kk) {
          return "string" === typeof kk && kk.startsWith(wk)
        }(kk)) return null;
      const ek = kk.slice(wk.length).split("-").map((kk => fk.find((ek => ek.toLowerCase() === kk))));
      return 3 !== ek.length || ek.includes(void 0) ? null : {
        blade: ek[0],
        guard: ek[1],
        handle: ek[2]
      }
    }
    const Yk = new Map;

    function Lk(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hk;
      const Dk = "string" === typeof kk ? yk(kk) : kk;
      if (null === Dk) return null;
      const fk = pk(Dk),
        Pk = ik === Hk ? Yk.get(fk) : void 0;
      if (void 0 !== Pk) return Pk;
      const wk = function(kk, ek) {
        var ik, Dk, fk, Pk, Hk, wk, lk, yk, Yk;
        const {
          blade: Lk,
          guard: dk,
          handle: Vk
        } = kk, Fk = bk, uk = Lk === dk && dk === Vk, qk = Ak((1 + Fk[Lk].bladeDamage) * (uk ? 1 + xk : 1)), Ik = null !== (ik = ek.damageMultiplier) && void 0 !== ik ? ik : qk, zk = null !== (Dk = ek.cooldownMultiplier) && void 0 !== Dk ? Dk : Fk[Vk].handleCooldown, Qk = null !== (fk = ek.knockbackMultiplier) && void 0 !== fk ? fk : Ak(1 + Fk[Vk].handleKnockback), vk = null !== (Pk = ek.reachBonus) && void 0 !== Pk ? Pk : Fk[Vk].handleReach, Ek = null !== (Hk = ek.damageReduction) && void 0 !== Hk ? Hk : Fk[dk].guardReduction, hk = null !== (wk = ek.traits) && void 0 !== wk ? wk : function(kk) {
          const ek = {},
            ik = {};
          for (const rk of Sk) {
            var Dk, fk;
            const Sk = bk[Ck(kk, rk)].trait;
            null !== Sk && (ek[Sk] = (null !== (Dk = ek[Sk]) && void 0 !== Dk ? Dk : 0) + mk[rk], ik[Sk] = (null !== (fk = ik[Sk]) && void 0 !== fk ? fk : 0) + 1)
          }
          for (const Sk of Object.keys(ek)) {
            const kk = 3 === ik[Sk] ? Kk : 2 === ik[Sk] ? Mk : 1;
            ek[Sk] = Ak(ek[Sk] * kk)
          }
          return ek
        }(kk), ak = null !== (lk = ek.ability) && void 0 !== lk ? lk : null, Wk = void 0 !== ek.name, tk = null !== (yk = ek.name) && void 0 !== yk ? yk : uk ? `Pure ${Lk} Sword` : `${Fk[dk].epithet} ${Lk} Sword`, Xk = null !== (Yk = ek.lore) && void 0 !== Yk ? Yk : `Forged by the Forge Mother from a ${Lk.toLowerCase()} blade, ${dk.toLowerCase()} guard and ${Vk.toLowerCase()} handle.`, Bk = function(kk) {
          let {
            blade: ek,
            guard: ik,
            handle: Dk
          } = kk;
          const fk = bk;
          return rk * (fk[ek].value + fk[ik].value + fk[Dk].value)
        }(kk), ck = Fk[Lk].value + Fk[dk].value + Fk[Vk].value, Tk = Wk ? "Tier 5" : ck <= 4 ? "Tier 1" : ck <= 8 ? "Tier 2" : ck <= 14 ? "Tier 3" : ck <= 22 ? "Tier 4" : "Tier 5", Zk = [];
        1 !== Ik && Zk.push(`${sk(Ik-1)} damage`);
        1 !== zk && Zk.push(`${jk(1/zk-1)} faster strikes`);
        1 !== Qk && Zk.push(`${sk(Qk-1)} knockback`);
        vk > 0 && Zk.push(`+${vk} reach`);
        Ek > 0 && Zk.push(`${jk(Ek)} less damage taken while held`);
        const Ok = [];
        for (const Sk of Object.keys(hk)) Ok.push(`${nk[Sk].name}: ${nk[Sk].describe(hk[Sk])}`);
        null !== ak && Ok.push(`${Uk[ak].name}: ${Uk[ak].description}`);
        return Zk.push(...Ok), {
          id: pk(kk),
          parts: kk,
          baseSword: Fk[Lk].baseSword,
          displayName: tk,
          lore: Xk,
          properties: Zk,
          effects: Ok,
          named: Wk,
          damageMultiplier: Ik,
          cooldownMultiplier: zk,
          knockbackMultiplier: Qk,
          reachBonus: vk,
          damageReduction: Ek,
          traits: hk,
          ability: ak,
          coalCost: Bk,
          enchantmentTier: Tk,
          powerMultiplier: Ak(Ik / zk)
        }
      }(Dk, null !== (ek = ik[fk]) && void 0 !== ek ? ek : {});
      return ik === Hk && Yk.set(fk, wk), wk
    }

    function Ck(kk, ek) {
      return "Blade" === ek ? kk.blade : "Guard" === ek ? kk.guard : kk.handle
    }

    function Ak(kk) {
      return Math.round(100 * kk) / 100
    }

    function jk(kk) {
      return `${Math.round(100*kk)}%`
    }

    function sk(kk) {
      return `${kk>=0?"+":""}${jk(kk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);