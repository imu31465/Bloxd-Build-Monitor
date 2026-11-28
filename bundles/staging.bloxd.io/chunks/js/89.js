export const id = 89;
export const ids = [89];
export const modules = {
  38251: (bb, wb, Mb) => {
    if (Mb.d(wb, {
        e: () => lb,
        f: () => Hb,
        g: () => Vb,
        k: () => pb,
        o: () => zb,
        s: () => Bb
      }), 47 == Mb.j) var eb = Mb(38258);
    const Hb = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      pb = ["Blade", "Guard", "Handle"],
      Vb = {
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
      gb = 4,
      lb = "Coal",
      Lb = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Ib = 1.15,
      Ob = 1.35,
      Ub = .06,
      tb = {
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
      Cb = {
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
      Eb = 47 == Mb.j ? eb.e : null,
      Fb = "skyblock:forged:";

    function Bb(bb, wb) {
      return `${bb} ${wb}`
    }
    Hb.flatMap((bb => pb.map((wb => Bb(bb, wb)))));

    function sb(bb) {
      let {
        blade: wb,
        guard: Mb,
        handle: eb
      } = bb;
      return `${Fb}${wb.toLowerCase()}-${Mb.toLowerCase()}-${eb.toLowerCase()}`
    }

    function mb(bb) {
      if (! function(bb) {
          return "string" === typeof bb && bb.startsWith(Fb)
        }(bb)) return null;
      const wb = bb.slice(Fb.length).split("-").map((bb => Hb.find((wb => wb.toLowerCase() === bb))));
      return 3 !== wb.length || wb.includes(void 0) ? null : {
        blade: wb[0],
        guard: wb[1],
        handle: wb[2]
      }
    }
    const hb = new Map;

    function zb(bb) {
      var wb;
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb;
      const eb = "string" === typeof bb ? mb(bb) : bb;
      if (null === eb) return null;
      const Hb = sb(eb),
        lb = Mb === Eb ? hb.get(Hb) : void 0;
      if (void 0 !== lb) return lb;
      const Fb = function(bb, wb) {
        var Mb, eb, Hb, lb, Eb, Fb, Bb, mb, hb;
        const {
          blade: zb,
          guard: rb,
          handle: Rb
        } = bb, Db = Vb, cb = zb === rb && rb === Rb, Yb = xb((1 + Db[zb].bladeDamage) * (cb ? 1 + Ub : 1)), Zb = null !== (Mb = wb.damageMultiplier) && void 0 !== Mb ? Mb : Yb, fb = null !== (eb = wb.cooldownMultiplier) && void 0 !== eb ? eb : Db[Rb].handleCooldown, Ab = null !== (Hb = wb.knockbackMultiplier) && void 0 !== Hb ? Hb : xb(1 + Db[Rb].handleKnockback), Wb = null !== (lb = wb.reachBonus) && void 0 !== lb ? lb : Db[Rb].handleReach, Jb = null !== (Eb = wb.damageReduction) && void 0 !== Eb ? Eb : Db[rb].guardReduction, Sb = null !== (Fb = wb.traits) && void 0 !== Fb ? Fb : function(bb) {
          const wb = {},
            Mb = {};
          for (const gb of pb) {
            var eb, Hb;
            const pb = Vb[Xb(bb, gb)].trait;
            null !== pb && (wb[pb] = (null !== (eb = wb[pb]) && void 0 !== eb ? eb : 0) + Lb[gb], Mb[pb] = (null !== (Hb = Mb[pb]) && void 0 !== Hb ? Hb : 0) + 1)
          }
          for (const pb of Object.keys(wb)) {
            const bb = 3 === Mb[pb] ? Ob : 2 === Mb[pb] ? Ib : 1;
            wb[pb] = xb(wb[pb] * bb)
          }
          return wb
        }(bb), Nb = null !== (Bb = wb.ability) && void 0 !== Bb ? Bb : null, vb = void 0 !== wb.name, Qb = null !== (mb = wb.name) && void 0 !== mb ? mb : cb ? `Pure ${zb} Sword` : `${Db[rb].epithet} ${zb} Sword`, Gb = null !== (hb = wb.lore) && void 0 !== hb ? hb : `Forged by the Forge Mother from a ${zb.toLowerCase()} blade, ${rb.toLowerCase()} guard and ${Rb.toLowerCase()} handle.`, qb = function(bb) {
          let {
            blade: wb,
            guard: Mb,
            handle: eb
          } = bb;
          const Hb = Vb;
          return gb * (Hb[wb].value + Hb[Mb].value + Hb[eb].value)
        }(bb), ab = Db[zb].value + Db[rb].value + Db[Rb].value, ib = vb ? "Tier 5" : ab <= 4 ? "Tier 1" : ab <= 8 ? "Tier 2" : ab <= 14 ? "Tier 3" : ab <= 22 ? "Tier 4" : "Tier 5", ub = [];
        1 !== Zb && ub.push(`${Kb(Zb-1)} damage`);
        1 !== fb && ub.push(`${jb(1/fb-1)} faster strikes`);
        1 !== Ab && ub.push(`${Kb(Ab-1)} knockback`);
        Wb > 0 && ub.push(`+${Wb} reach`);
        Jb > 0 && ub.push(`${jb(Jb)} less damage taken while held`);
        const db = [];
        for (const pb of Object.keys(Sb)) db.push(`${tb[pb].name}: ${tb[pb].describe(Sb[pb])}`);
        null !== Nb && db.push(`${Cb[Nb].name}: ${Cb[Nb].description}`);
        return ub.push(...db), {
          id: sb(bb),
          parts: bb,
          baseSword: Db[zb].baseSword,
          displayName: Qb,
          lore: Gb,
          properties: ub,
          effects: db,
          named: vb,
          damageMultiplier: Zb,
          cooldownMultiplier: fb,
          knockbackMultiplier: Ab,
          reachBonus: Wb,
          damageReduction: Jb,
          traits: Sb,
          ability: Nb,
          coalCost: qb,
          enchantmentTier: ib,
          powerMultiplier: xb(Zb / fb)
        }
      }(eb, null !== (wb = Mb[Hb]) && void 0 !== wb ? wb : {});
      return Mb === Eb && hb.set(Hb, Fb), Fb
    }

    function Xb(bb, wb) {
      return "Blade" === wb ? bb.blade : "Guard" === wb ? bb.guard : bb.handle
    }

    function xb(bb) {
      return Math.round(100 * bb) / 100
    }

    function jb(bb) {
      return `${Math.round(100*bb)}%`
    }

    function Kb(bb) {
      return `${bb>=0?"+":""}${jb(bb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);