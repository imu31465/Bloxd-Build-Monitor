export const id = 72;
export const ids = [72];
export const modules = {
  36623: (bb, cb, sb) => {
    if (sb.d(cb, {
        d: () => Ib,
        h: () => Wb,
        l: () => Tb,
        n: () => ab,
        q: () => Lb,
        u: () => eb
      }), 39 == sb.j) var kb = sb(36632);
    const Wb = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      ab = ["Blade", "Guard", "Handle"],
      Tb = {
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
      Ub = 4,
      Ib = "Coal",
      Hb = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      fb = 1.15,
      Mb = 1.35,
      Xb = .06,
      nb = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: bb => `${hb(.06*bb)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: bb => `Mobs you slay drop ${Math.round(4*bb)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: bb => `${hb(.12*bb)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: bb => `+${hb(.2*bb)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: bb => `${hb(.15*bb)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: bb => `Heal ${hb(.06*bb)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: bb => `${hb(.1*bb)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      mb = {
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
      lb = 39 == sb.j ? kb.c : null,
      Qb = "skyblock:forged:";

    function eb(bb, cb) {
      return `${bb} ${cb}`
    }
    Wb.flatMap((bb => ab.map((cb => eb(bb, cb)))));

    function Cb(bb) {
      let {
        blade: cb,
        guard: sb,
        handle: kb
      } = bb;
      return `${Qb}${cb.toLowerCase()}-${sb.toLowerCase()}-${kb.toLowerCase()}`
    }

    function Nb(bb) {
      if (! function(bb) {
          return "string" === typeof bb && bb.startsWith(Qb)
        }(bb)) return null;
      const cb = bb.slice(Qb.length).split("-").map((bb => Wb.find((cb => cb.toLowerCase() === bb))));
      return 3 !== cb.length || cb.includes(void 0) ? null : {
        blade: cb[0],
        guard: cb[1],
        handle: cb[2]
      }
    }
    const Vb = new Map;

    function Lb(bb) {
      var cb;
      let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lb;
      const kb = "string" === typeof bb ? Nb(bb) : bb;
      if (null === kb) return null;
      const Wb = Cb(kb),
        Ib = sb === lb ? Vb.get(Wb) : void 0;
      if (void 0 !== Ib) return Ib;
      const Qb = function(bb, cb) {
        var sb, kb, Wb, Ib, lb, Qb, eb, Nb, Vb;
        const {
          blade: Lb,
          guard: gb,
          handle: Bb
        } = bb, tb = Tb, yb = Lb === gb && gb === Bb, Pb = Yb((1 + tb[Lb].bladeDamage) * (yb ? 1 + Xb : 1)), Db = null !== (sb = cb.damageMultiplier) && void 0 !== sb ? sb : Pb, Eb = null !== (kb = cb.cooldownMultiplier) && void 0 !== kb ? kb : tb[Bb].handleCooldown, ib = null !== (Wb = cb.knockbackMultiplier) && void 0 !== Wb ? Wb : Yb(1 + tb[Bb].handleKnockback), Ob = null !== (Ib = cb.reachBonus) && void 0 !== Ib ? Ib : tb[Bb].handleReach, Gb = null !== (lb = cb.damageReduction) && void 0 !== lb ? lb : tb[gb].guardReduction, Kb = null !== (Qb = cb.traits) && void 0 !== Qb ? Qb : function(bb) {
          const cb = {},
            sb = {};
          for (const Ub of ab) {
            var kb, Wb;
            const ab = Tb[ub(bb, Ub)].trait;
            null !== ab && (cb[ab] = (null !== (kb = cb[ab]) && void 0 !== kb ? kb : 0) + Hb[Ub], sb[ab] = (null !== (Wb = sb[ab]) && void 0 !== Wb ? Wb : 0) + 1)
          }
          for (const ab of Object.keys(cb)) {
            const bb = 3 === sb[ab] ? Mb : 2 === sb[ab] ? fb : 1;
            cb[ab] = Yb(cb[ab] * bb)
          }
          return cb
        }(bb), Zb = null !== (eb = cb.ability) && void 0 !== eb ? eb : null, zb = void 0 !== cb.name, qb = null !== (Nb = cb.name) && void 0 !== Nb ? Nb : yb ? `Pure ${Lb} Sword` : `${tb[gb].epithet} ${Lb} Sword`, db = null !== (Vb = cb.lore) && void 0 !== Vb ? Vb : `Forged by the Forge Mother from a ${Lb.toLowerCase()} blade, ${gb.toLowerCase()} guard and ${Bb.toLowerCase()} handle.`, Ab = function(bb) {
          let {
            blade: cb,
            guard: sb,
            handle: kb
          } = bb;
          const Wb = Tb;
          return Ub * (Wb[cb].value + Wb[sb].value + Wb[kb].value)
        }(bb), wb = tb[Lb].value + tb[gb].value + tb[Bb].value, rb = zb ? "Tier 5" : wb <= 4 ? "Tier 1" : wb <= 8 ? "Tier 2" : wb <= 14 ? "Tier 3" : wb <= 22 ? "Tier 4" : "Tier 5", ob = [];
        1 !== Db && ob.push(`${Jb(Db-1)} damage`);
        1 !== Eb && ob.push(`${hb(1/Eb-1)} faster strikes`);
        1 !== ib && ob.push(`${Jb(ib-1)} knockback`);
        Ob > 0 && ob.push(`+${Ob} reach`);
        Gb > 0 && ob.push(`${hb(Gb)} less damage taken while held`);
        const Sb = [];
        for (const ab of Object.keys(Kb)) Sb.push(`${nb[ab].name}: ${nb[ab].describe(Kb[ab])}`);
        null !== Zb && Sb.push(`${mb[Zb].name}: ${mb[Zb].description}`);
        return ob.push(...Sb), {
          id: Cb(bb),
          parts: bb,
          baseSword: tb[Lb].baseSword,
          displayName: qb,
          lore: db,
          properties: ob,
          effects: Sb,
          named: zb,
          damageMultiplier: Db,
          cooldownMultiplier: Eb,
          knockbackMultiplier: ib,
          reachBonus: Ob,
          damageReduction: Gb,
          traits: Kb,
          ability: Zb,
          coalCost: Ab,
          enchantmentTier: rb,
          powerMultiplier: Yb(Db / Eb)
        }
      }(kb, null !== (cb = sb[Wb]) && void 0 !== cb ? cb : {});
      return sb === lb && Vb.set(Wb, Qb), Qb
    }

    function ub(bb, cb) {
      return "Blade" === cb ? bb.blade : "Guard" === cb ? bb.guard : bb.handle
    }

    function Yb(bb) {
      return Math.round(100 * bb) / 100
    }

    function hb(bb) {
      return `${Math.round(100*bb)}%`
    }

    function Jb(bb) {
      return `${bb>=0?"+":""}${hb(bb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);