export const id = 73;
export const ids = [73];
export const modules = {
  36695: (bb, ub, hb) => {
    if (hb.d(ub, {
        e: () => Yb,
        f: () => Ob,
        h: () => Ub,
        k: () => Gb,
        o: () => Cb,
        q: () => Ab
      }), 39 == hb.j) var Bb = hb(36704);
    const Ob = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Gb = ["Blade", "Guard", "Handle"],
      Ub = {
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
      Lb = 4,
      Yb = "Coal",
      Sb = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      ab = 1.15,
      Hb = 1.35,
      wb = .06,
      Zb = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: bb => `${jb(.06*bb)} less damage taken`
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
          describe: bb => `${jb(.12*bb)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: bb => `+${jb(.2*bb)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: bb => `${jb(.15*bb)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: bb => `Heal ${jb(.06*bb)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: bb => `${jb(.1*bb)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Xb = {
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
      pb = 39 == hb.j ? Bb.e : null,
      ob = "skyblock:forged:";

    function Ab(bb, ub) {
      return `${bb} ${ub}`
    }
    Ob.flatMap((bb => Gb.map((ub => Ab(bb, ub)))));

    function lb(bb) {
      let {
        blade: ub,
        guard: hb,
        handle: Bb
      } = bb;
      return `${ob}${ub.toLowerCase()}-${hb.toLowerCase()}-${Bb.toLowerCase()}`
    }

    function Kb(bb) {
      if (! function(bb) {
          return "string" === typeof bb && bb.startsWith(ob)
        }(bb)) return null;
      const ub = bb.slice(ob.length).split("-").map((bb => Ob.find((ub => ub.toLowerCase() === bb))));
      return 3 !== ub.length || ub.includes(void 0) ? null : {
        blade: ub[0],
        guard: ub[1],
        handle: ub[2]
      }
    }
    const Wb = new Map;

    function Cb(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pb;
      const Bb = "string" === typeof bb ? Kb(bb) : bb;
      if (null === Bb) return null;
      const Ob = lb(Bb),
        Yb = hb === pb ? Wb.get(Ob) : void 0;
      if (void 0 !== Yb) return Yb;
      const ob = function(bb, ub) {
        var hb, Bb, Ob, Yb, pb, ob, Ab, Kb, Wb;
        const {
          blade: Cb,
          guard: Db,
          handle: xb
        } = bb, zb = Ub, gb = Cb === Db && Db === xb, ib = rb((1 + zb[Cb].bladeDamage) * (gb ? 1 + wb : 1)), vb = null !== (hb = ub.damageMultiplier) && void 0 !== hb ? hb : ib, tb = null !== (Bb = ub.cooldownMultiplier) && void 0 !== Bb ? Bb : zb[xb].handleCooldown, Jb = null !== (Ob = ub.knockbackMultiplier) && void 0 !== Ob ? Ob : rb(1 + zb[xb].handleKnockback), eb = null !== (Yb = ub.reachBonus) && void 0 !== Yb ? Yb : zb[xb].handleReach, Nb = null !== (pb = ub.damageReduction) && void 0 !== pb ? pb : zb[Db].guardReduction, sb = null !== (ob = ub.traits) && void 0 !== ob ? ob : function(bb) {
          const ub = {},
            hb = {};
          for (const Lb of Gb) {
            var Bb, Ob;
            const Gb = Ub[db(bb, Lb)].trait;
            null !== Gb && (ub[Gb] = (null !== (Bb = ub[Gb]) && void 0 !== Bb ? Bb : 0) + Sb[Lb], hb[Gb] = (null !== (Ob = hb[Gb]) && void 0 !== Ob ? Ob : 0) + 1)
          }
          for (const Gb of Object.keys(ub)) {
            const bb = 3 === hb[Gb] ? Hb : 2 === hb[Gb] ? ab : 1;
            ub[Gb] = rb(ub[Gb] * bb)
          }
          return ub
        }(bb), Mb = null !== (Ab = ub.ability) && void 0 !== Ab ? Ab : null, mb = void 0 !== ub.name, Ib = null !== (Kb = ub.name) && void 0 !== Kb ? Kb : gb ? `Pure ${Cb} Sword` : `${zb[Db].epithet} ${Cb} Sword`, Pb = null !== (Wb = ub.lore) && void 0 !== Wb ? Wb : `Forged by the Forge Mother from a ${Cb.toLowerCase()} blade, ${Db.toLowerCase()} guard and ${xb.toLowerCase()} handle.`, qb = function(bb) {
          let {
            blade: ub,
            guard: hb,
            handle: Bb
          } = bb;
          const Ob = Ub;
          return Lb * (Ob[ub].value + Ob[hb].value + Ob[Bb].value)
        }(bb), Eb = zb[Cb].value + zb[Db].value + zb[xb].value, yb = mb ? "Tier 5" : Eb <= 4 ? "Tier 1" : Eb <= 8 ? "Tier 2" : Eb <= 14 ? "Tier 3" : Eb <= 22 ? "Tier 4" : "Tier 5", Vb = [];
        1 !== vb && Vb.push(`${nb(vb-1)} damage`);
        1 !== tb && Vb.push(`${jb(1/tb-1)} faster strikes`);
        1 !== Jb && Vb.push(`${nb(Jb-1)} knockback`);
        eb > 0 && Vb.push(`+${eb} reach`);
        Nb > 0 && Vb.push(`${jb(Nb)} less damage taken while held`);
        const Fb = [];
        for (const Gb of Object.keys(sb)) Fb.push(`${Zb[Gb].name}: ${Zb[Gb].describe(sb[Gb])}`);
        null !== Mb && Fb.push(`${Xb[Mb].name}: ${Xb[Mb].description}`);
        return Vb.push(...Fb), {
          id: lb(bb),
          parts: bb,
          baseSword: zb[Cb].baseSword,
          displayName: Ib,
          lore: Pb,
          properties: Vb,
          effects: Fb,
          named: mb,
          damageMultiplier: vb,
          cooldownMultiplier: tb,
          knockbackMultiplier: Jb,
          reachBonus: eb,
          damageReduction: Nb,
          traits: sb,
          ability: Mb,
          coalCost: qb,
          enchantmentTier: yb,
          powerMultiplier: rb(vb / tb)
        }
      }(Bb, null !== (ub = hb[Ob]) && void 0 !== ub ? ub : {});
      return hb === pb && Wb.set(Ob, ob), ob
    }

    function db(bb, ub) {
      return "Blade" === ub ? bb.blade : "Guard" === ub ? bb.guard : bb.handle
    }

    function rb(bb) {
      return Math.round(100 * bb) / 100
    }

    function jb(bb) {
      return `${Math.round(100*bb)}%`
    }

    function nb(bb) {
      return `${bb>=0?"+":""}${jb(bb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);