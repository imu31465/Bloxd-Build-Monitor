export const id = 73;
export const ids = [73];
export const modules = {
  36562: (vv, zv, Pv) => {
    if (Pv.d(zv, {
        d: () => dv,
        e: () => Sv,
        f: () => gv,
        j: () => ev,
        k: () => jv,
        m: () => iv
      }), 39 == Pv.j) var hv = Pv(36568);
    const Sv = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      ev = ["Blade", "Guard", "Handle"],
      gv = {
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
      pv = 4,
      dv = "Coal",
      Nv = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      lv = 1.15,
      Tv = 1.35,
      Wv = .06,
      wv = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: vv => `${Yv(.06*vv)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: vv => `Mobs you slay drop ${Math.round(4*vv)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: vv => `${Yv(.12*vv)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: vv => `+${Yv(.2*vv)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: vv => `${Yv(.15*vv)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: vv => `Heal ${Yv(.06*vv)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: vv => `${Yv(.1*vv)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      av = {
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
      sv = 39 == Pv.j ? hv.d : null,
      Cv = "skyblock:forged:";

    function iv(vv, zv) {
      return `${vv} ${zv}`
    }
    Sv.flatMap((vv => ev.map((zv => iv(vv, zv)))));

    function cv(vv) {
      let {
        blade: zv,
        guard: Pv,
        handle: hv
      } = vv;
      return `${Cv}${zv.toLowerCase()}-${Pv.toLowerCase()}-${hv.toLowerCase()}`
    }

    function Gv(vv) {
      if (! function(vv) {
          return "string" === typeof vv && vv.startsWith(Cv)
        }(vv)) return null;
      const zv = vv.slice(Cv.length).split("-").map((vv => Sv.find((zv => zv.toLowerCase() === vv))));
      return 3 !== zv.length || zv.includes(void 0) ? null : {
        blade: zv[0],
        guard: zv[1],
        handle: zv[2]
      }
    }
    const mv = new Map;

    function jv(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sv;
      const hv = "string" === typeof vv ? Gv(vv) : vv;
      if (null === hv) return null;
      const Sv = cv(hv),
        dv = Pv === sv ? mv.get(Sv) : void 0;
      if (void 0 !== dv) return dv;
      const Cv = function(vv, zv) {
        var Pv, hv, Sv, dv, sv, Cv, iv, Gv, mv;
        const {
          blade: jv,
          guard: Ov,
          handle: Dv
        } = vv, Kv = gv, Vv = jv === Ov && Ov === Dv, Uv = Fv((1 + Kv[jv].bladeDamage) * (Vv ? 1 + Wv : 1)), Rv = null !== (Pv = zv.damageMultiplier) && void 0 !== Pv ? Pv : Uv, xv = null !== (hv = zv.cooldownMultiplier) && void 0 !== hv ? hv : Kv[Dv].handleCooldown, tv = null !== (Sv = zv.knockbackMultiplier) && void 0 !== Sv ? Sv : Fv(1 + Kv[Dv].handleKnockback), qv = null !== (dv = zv.reachBonus) && void 0 !== dv ? dv : Kv[Dv].handleReach, Iv = null !== (sv = zv.damageReduction) && void 0 !== sv ? sv : Kv[Ov].guardReduction, Qv = null !== (Cv = zv.traits) && void 0 !== Cv ? Cv : function(vv) {
          const zv = {},
            Pv = {};
          for (const pv of ev) {
            var hv, Sv;
            const ev = gv[fv(vv, pv)].trait;
            null !== ev && (zv[ev] = (null !== (hv = zv[ev]) && void 0 !== hv ? hv : 0) + Nv[pv], Pv[ev] = (null !== (Sv = Pv[ev]) && void 0 !== Sv ? Sv : 0) + 1)
          }
          for (const ev of Object.keys(zv)) {
            const vv = 3 === Pv[ev] ? Tv : 2 === Pv[ev] ? lv : 1;
            zv[ev] = Fv(zv[ev] * vv)
          }
          return zv
        }(vv), Zv = null !== (iv = zv.ability) && void 0 !== iv ? iv : null, Av = void 0 !== zv.name, Lv = null !== (Gv = zv.name) && void 0 !== Gv ? Gv : Vv ? `Pure ${jv} Sword` : `${Kv[Ov].epithet} ${jv} Sword`, Hv = null !== (mv = zv.lore) && void 0 !== mv ? mv : `Forged by the Forge Mother from a ${jv.toLowerCase()} blade, ${Ov.toLowerCase()} guard and ${Dv.toLowerCase()} handle.`, Mv = function(vv) {
          let {
            blade: zv,
            guard: Pv,
            handle: hv
          } = vv;
          const Sv = gv;
          return pv * (Sv[zv].value + Sv[Pv].value + Sv[hv].value)
        }(vv), yv = Kv[jv].value + Kv[Ov].value + Kv[Dv].value, Bv = Av ? "Tier 5" : yv <= 4 ? "Tier 1" : yv <= 8 ? "Tier 2" : yv <= 14 ? "Tier 3" : yv <= 22 ? "Tier 4" : "Tier 5", Jv = [];
        1 !== Rv && Jv.push(`${nv(Rv-1)} damage`);
        1 !== xv && Jv.push(`${Yv(1/xv-1)} faster strikes`);
        1 !== tv && Jv.push(`${nv(tv-1)} knockback`);
        qv > 0 && Jv.push(`+${qv} reach`);
        Iv > 0 && Jv.push(`${Yv(Iv)} less damage taken while held`);
        const Ev = [];
        for (const ev of Object.keys(Qv)) Ev.push(`${wv[ev].name}: ${wv[ev].describe(Qv[ev])}`);
        null !== Zv && Ev.push(`${av[Zv].name}: ${av[Zv].description}`);
        return Jv.push(...Ev), {
          id: cv(vv),
          parts: vv,
          baseSword: Kv[jv].baseSword,
          displayName: Lv,
          lore: Hv,
          properties: Jv,
          effects: Ev,
          named: Av,
          damageMultiplier: Rv,
          cooldownMultiplier: xv,
          knockbackMultiplier: tv,
          reachBonus: qv,
          damageReduction: Iv,
          traits: Qv,
          ability: Zv,
          coalCost: Mv,
          enchantmentTier: Bv,
          powerMultiplier: Fv(Rv / xv)
        }
      }(hv, null !== (zv = Pv[Sv]) && void 0 !== zv ? zv : {});
      return Pv === sv && mv.set(Sv, Cv), Cv
    }

    function fv(vv, zv) {
      return "Blade" === zv ? vv.blade : "Guard" === zv ? vv.guard : vv.handle
    }

    function Fv(vv) {
      return Math.round(100 * vv) / 100
    }

    function Yv(vv) {
      return `${Math.round(100*vv)}%`
    }

    function nv(vv) {
      return `${vv>=0?"+":""}${Yv(vv)}`
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);