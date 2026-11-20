export const id = 73;
export const ids = [73];
export const modules = {
  37109: (qq, Eq, gq) => {
    if (gq.d(Eq, {
        b: () => Aq,
        e: () => lq,
        g: () => mq,
        j: () => Oq,
        m: () => Qq,
        q: () => jq
      }), 39 == gq.j) var Yq = gq(37111);
    const lq = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Oq = ["Blade", "Guard", "Handle"],
      mq = {
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
      xq = 4,
      Aq = "Coal",
      cq = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      uq = 1.15,
      Bq = 1.35,
      Wq = .06,
      Nq = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: qq => `${rq(.06*qq)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: qq => `Mobs you slay drop ${Math.round(4*qq)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: qq => `${rq(.12*qq)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: qq => `+${rq(.2*qq)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: qq => `${rq(.15*qq)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: qq => `Heal ${rq(.06*qq)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: qq => `${rq(.1*qq)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      aq = {
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
      Vq = 39 == gq.j ? Yq.d : null,
      dq = "skyblock:forged:";

    function jq(qq, Eq) {
      return `${qq} ${Eq}`
    }
    lq.flatMap((qq => Oq.map((Eq => jq(qq, Eq)))));

    function Hq(qq) {
      let {
        blade: Eq,
        guard: gq,
        handle: Yq
      } = qq;
      return `${dq}${Eq.toLowerCase()}-${gq.toLowerCase()}-${Yq.toLowerCase()}`
    }

    function oq(qq) {
      if (! function(qq) {
          return "string" === typeof qq && qq.startsWith(dq)
        }(qq)) return null;
      const Eq = qq.slice(dq.length).split("-").map((qq => lq.find((Eq => Eq.toLowerCase() === qq))));
      return 3 !== Eq.length || Eq.includes(void 0) ? null : {
        blade: Eq[0],
        guard: Eq[1],
        handle: Eq[2]
      }
    }
    const Pq = new Map;

    function Qq(qq) {
      var Eq;
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vq;
      const Yq = "string" === typeof qq ? oq(qq) : qq;
      if (null === Yq) return null;
      const lq = Hq(Yq),
        Aq = gq === Vq ? Pq.get(lq) : void 0;
      if (void 0 !== Aq) return Aq;
      const dq = function(qq, Eq) {
        var gq, Yq, lq, Aq, Vq, dq, jq, oq, Pq;
        const {
          blade: Qq,
          guard: hq,
          handle: nq
        } = qq, bq = mq, iq = Qq === hq && hq === nq, Zq = tq((1 + bq[Qq].bladeDamage) * (iq ? 1 + Wq : 1)), fq = null !== (gq = Eq.damageMultiplier) && void 0 !== gq ? gq : Zq, Mq = null !== (Yq = Eq.cooldownMultiplier) && void 0 !== Yq ? Yq : bq[nq].handleCooldown, Tq = null !== (lq = Eq.knockbackMultiplier) && void 0 !== lq ? lq : tq(1 + bq[nq].handleKnockback), zq = null !== (Aq = Eq.reachBonus) && void 0 !== Aq ? Aq : bq[nq].handleReach, Sq = null !== (Vq = Eq.damageReduction) && void 0 !== Vq ? Vq : bq[hq].guardReduction, pq = null !== (dq = Eq.traits) && void 0 !== dq ? dq : function(qq) {
          const Eq = {},
            gq = {};
          for (const xq of Oq) {
            var Yq, lq;
            const Oq = mq[yq(qq, xq)].trait;
            null !== Oq && (Eq[Oq] = (null !== (Yq = Eq[Oq]) && void 0 !== Yq ? Yq : 0) + cq[xq], gq[Oq] = (null !== (lq = gq[Oq]) && void 0 !== lq ? lq : 0) + 1)
          }
          for (const Oq of Object.keys(Eq)) {
            const qq = 3 === gq[Oq] ? Bq : 2 === gq[Oq] ? uq : 1;
            Eq[Oq] = tq(Eq[Oq] * qq)
          }
          return Eq
        }(qq), Gq = null !== (jq = Eq.ability) && void 0 !== jq ? jq : null, Lq = void 0 !== Eq.name, Jq = null !== (oq = Eq.name) && void 0 !== oq ? oq : iq ? `Pure ${Qq} Sword` : `${bq[hq].epithet} ${Qq} Sword`, kq = null !== (Pq = Eq.lore) && void 0 !== Pq ? Pq : `Forged by the Forge Mother from a ${Qq.toLowerCase()} blade, ${hq.toLowerCase()} guard and ${nq.toLowerCase()} handle.`, Rq = function(qq) {
          let {
            blade: Eq,
            guard: gq,
            handle: Yq
          } = qq;
          const lq = mq;
          return xq * (lq[Eq].value + lq[gq].value + lq[Yq].value)
        }(qq), Uq = bq[Qq].value + bq[hq].value + bq[nq].value, Fq = Lq ? "Tier 5" : Uq <= 4 ? "Tier 1" : Uq <= 8 ? "Tier 2" : Uq <= 14 ? "Tier 3" : Uq <= 22 ? "Tier 4" : "Tier 5", sq = [];
        1 !== fq && sq.push(`${vq(fq-1)} damage`);
        1 !== Mq && sq.push(`${rq(1/Mq-1)} faster strikes`);
        1 !== Tq && sq.push(`${vq(Tq-1)} knockback`);
        zq > 0 && sq.push(`+${zq} reach`);
        Sq > 0 && sq.push(`${rq(Sq)} less damage taken while held`);
        const Xq = [];
        for (const Oq of Object.keys(pq)) Xq.push(`${Nq[Oq].name}: ${Nq[Oq].describe(pq[Oq])}`);
        null !== Gq && Xq.push(`${aq[Gq].name}: ${aq[Gq].description}`);
        return sq.push(...Xq), {
          id: Hq(qq),
          parts: qq,
          baseSword: bq[Qq].baseSword,
          displayName: Jq,
          lore: kq,
          properties: sq,
          effects: Xq,
          named: Lq,
          damageMultiplier: fq,
          cooldownMultiplier: Mq,
          knockbackMultiplier: Tq,
          reachBonus: zq,
          damageReduction: Sq,
          traits: pq,
          ability: Gq,
          coalCost: Rq,
          enchantmentTier: Fq,
          powerMultiplier: tq(fq / Mq)
        }
      }(Yq, null !== (Eq = gq[lq]) && void 0 !== Eq ? Eq : {});
      return gq === Vq && Pq.set(lq, dq), dq
    }

    function yq(qq, Eq) {
      return "Blade" === Eq ? qq.blade : "Guard" === Eq ? qq.guard : qq.handle
    }

    function tq(qq) {
      return Math.round(100 * qq) / 100
    }

    function rq(qq) {
      return `${Math.round(100*qq)}%`
    }

    function vq(qq) {
      return `${qq>=0?"+":""}${rq(qq)}`
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);