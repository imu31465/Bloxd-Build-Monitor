export const id = 72;
export const ids = [72];
export const modules = {
  36370: (bb, ab, Ub) => {
    if (Ub.d(ab, {
        b: () => Bb,
        e: () => Mb,
        g: () => Eb,
        h: () => Tb,
        l: () => xb,
        m: () => yb
      }), 39 == Ub.j) var Ab = Ub(36373);
    const Mb = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Tb = ["Blade", "Guard", "Handle"],
      Eb = {
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
      Yb = 4,
      Bb = "Coal",
      eb = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      vb = 1.15,
      Lb = 1.35,
      Pb = .06,
      Xb = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: bb => `${mb(.06*bb)} less damage taken`
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
          describe: bb => `${mb(.12*bb)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: bb => `+${mb(.2*bb)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: bb => `${mb(.15*bb)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: bb => `Heal ${mb(.06*bb)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: bb => `${mb(.1*bb)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      jb = {
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
      Rb = 39 == Ub.j ? Ab.c : null,
      kb = "skyblock:forged:";

    function yb(bb, ab) {
      return `${bb} ${ab}`
    }
    Mb.flatMap((bb => Tb.map((ab => yb(bb, ab)))));

    function Zb(bb) {
      let {
        blade: ab,
        guard: Ub,
        handle: Ab
      } = bb;
      return `${kb}${ab.toLowerCase()}-${Ub.toLowerCase()}-${Ab.toLowerCase()}`
    }

    function Db(bb) {
      if (! function(bb) {
          return "string" === typeof bb && bb.startsWith(kb)
        }(bb)) return null;
      const ab = bb.slice(kb.length).split("-").map((bb => Mb.find((ab => ab.toLowerCase() === bb))));
      return 3 !== ab.length || ab.includes(void 0) ? null : {
        blade: ab[0],
        guard: ab[1],
        handle: ab[2]
      }
    }
    const zb = new Map;

    function xb(bb) {
      var ab;
      let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rb;
      const Ab = "string" === typeof bb ? Db(bb) : bb;
      if (null === Ab) return null;
      const Mb = Zb(Ab),
        Bb = Ub === Rb ? zb.get(Mb) : void 0;
      if (void 0 !== Bb) return Bb;
      const kb = function(bb, ab) {
        var Ub, Ab, Mb, Bb, Rb, kb, yb, Db, zb;
        const {
          blade: xb,
          guard: Nb,
          handle: Wb
        } = bb, Hb = Eb, Ib = xb === Nb && Nb === Wb, db = fb((1 + Hb[xb].bladeDamage) * (Ib ? 1 + Pb : 1)), Fb = null !== (Ub = ab.damageMultiplier) && void 0 !== Ub ? Ub : db, hb = null !== (Ab = ab.cooldownMultiplier) && void 0 !== Ab ? Ab : Hb[Wb].handleCooldown, Gb = null !== (Mb = ab.knockbackMultiplier) && void 0 !== Mb ? Mb : fb(1 + Hb[Wb].handleKnockback), Qb = null !== (Bb = ab.reachBonus) && void 0 !== Bb ? Bb : Hb[Wb].handleReach, qb = null !== (Rb = ab.damageReduction) && void 0 !== Rb ? Rb : Hb[Nb].guardReduction, ub = null !== (kb = ab.traits) && void 0 !== kb ? kb : function(bb) {
          const ab = {},
            Ub = {};
          for (const Yb of Tb) {
            var Ab, Mb;
            const Tb = Eb[ib(bb, Yb)].trait;
            null !== Tb && (ab[Tb] = (null !== (Ab = ab[Tb]) && void 0 !== Ab ? Ab : 0) + eb[Yb], Ub[Tb] = (null !== (Mb = Ub[Tb]) && void 0 !== Mb ? Mb : 0) + 1)
          }
          for (const Tb of Object.keys(ab)) {
            const bb = 3 === Ub[Tb] ? Lb : 2 === Ub[Tb] ? vb : 1;
            ab[Tb] = fb(ab[Tb] * bb)
          }
          return ab
        }(bb), rb = null !== (yb = ab.ability) && void 0 !== yb ? yb : null, Kb = void 0 !== ab.name, ob = null !== (Db = ab.name) && void 0 !== Db ? Db : Ib ? `Pure ${xb} Sword` : `${Hb[Nb].epithet} ${xb} Sword`, lb = null !== (zb = ab.lore) && void 0 !== zb ? zb : `Forged by the Forge Mother from a ${xb.toLowerCase()} blade, ${Nb.toLowerCase()} guard and ${Wb.toLowerCase()} handle.`, tb = function(bb) {
          let {
            blade: ab,
            guard: Ub,
            handle: Ab
          } = bb;
          const Mb = Eb;
          return Yb * (Mb[ab].value + Mb[Ub].value + Mb[Ab].value)
        }(bb), wb = Hb[xb].value + Hb[Nb].value + Hb[Wb].value, sb = Kb ? "Tier 5" : wb <= 4 ? "Tier 1" : wb <= 8 ? "Tier 2" : wb <= 14 ? "Tier 3" : wb <= 22 ? "Tier 4" : "Tier 5", gb = [];
        1 !== Fb && gb.push(`${pb(Fb-1)} damage`);
        1 !== hb && gb.push(`${mb(1/hb-1)} faster strikes`);
        1 !== Gb && gb.push(`${pb(Gb-1)} knockback`);
        Qb > 0 && gb.push(`+${Qb} reach`);
        qb > 0 && gb.push(`${mb(qb)} less damage taken while held`);
        const Cb = [];
        for (const Tb of Object.keys(ub)) Cb.push(`${Xb[Tb].name}: ${Xb[Tb].describe(ub[Tb])}`);
        null !== rb && Cb.push(`${jb[rb].name}: ${jb[rb].description}`);
        return gb.push(...Cb), {
          id: Zb(bb),
          parts: bb,
          baseSword: Hb[xb].baseSword,
          displayName: ob,
          lore: lb,
          properties: gb,
          effects: Cb,
          named: Kb,
          damageMultiplier: Fb,
          cooldownMultiplier: hb,
          knockbackMultiplier: Gb,
          reachBonus: Qb,
          damageReduction: qb,
          traits: ub,
          ability: rb,
          coalCost: tb,
          enchantmentTier: sb,
          powerMultiplier: fb(Fb / hb)
        }
      }(Ab, null !== (ab = Ub[Mb]) && void 0 !== ab ? ab : {});
      return Ub === Rb && zb.set(Mb, kb), kb
    }

    function ib(bb, ab) {
      return "Blade" === ab ? bb.blade : "Guard" === ab ? bb.guard : bb.handle
    }

    function fb(bb) {
      return Math.round(100 * bb) / 100
    }

    function mb(bb) {
      return `${Math.round(100*bb)}%`
    }

    function pb(bb) {
      return `${bb>=0?"+":""}${mb(bb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);