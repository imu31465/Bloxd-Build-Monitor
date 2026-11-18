export const id = 66;
export const ids = [66];
export const modules = {
  35764: (yb, bb, Wy) => {
    if (Wy.d(bb, {
        b: () => Py,
        d: () => hy,
        e: () => Zy,
        h: () => fy,
        l: () => Vy,
        m: () => ly
      }), 36 == Wy.j) var Uy = Wy(35770);
    const hy = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      fy = ["Blade", "Guard", "Handle"],
      Zy = {
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
      cb = 4,
      Py = "Coal",
      oy = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      By = 1.15,
      Ky = 1.35,
      ey = .06,
      qb = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: yb => `${Gy(.06*yb)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: yb => `Mobs you slay drop ${Math.round(4*yb)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: yb => `${Gy(.12*yb)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: yb => `+${Gy(.2*yb)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: yb => `${Gy(.15*yb)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: yb => `Heal ${Gy(.06*yb)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: yb => `${Gy(.1*yb)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      sy = {
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
      Sy = 36 == Wy.j ? Uy.c : null,
      Ey = "skyblock:forged:";

    function ly(yb, bb) {
      return `${yb} ${bb}`
    }
    hy.flatMap((yb => fy.map((bb => ly(yb, bb)))));

    function mb(yb) {
      let {
        blade: bb,
        guard: Wy,
        handle: Uy
      } = yb;
      return `${Ey}${bb.toLowerCase()}-${Wy.toLowerCase()}-${Uy.toLowerCase()}`
    }

    function Cy(yb) {
      if (! function(yb) {
          return "string" === typeof yb && yb.startsWith(Ey)
        }(yb)) return null;
      const bb = yb.slice(Ey.length).split("-").map((yb => hy.find((bb => bb.toLowerCase() === yb))));
      return 3 !== bb.length || bb.includes(void 0) ? null : {
        blade: bb[0],
        guard: bb[1],
        handle: bb[2]
      }
    }
    const Ty = new Map;

    function Vy(yb) {
      var bb;
      let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sy;
      const Uy = "string" === typeof yb ? Cy(yb) : yb;
      if (null === Uy) return null;
      const hy = mb(Uy),
        Py = Wy === Sy ? Ty.get(hy) : void 0;
      if (void 0 !== Py) return Py;
      const Ey = function(yb, bb) {
        var Wy, Uy, hy, Py, Sy, Ey, ly, Cy, Ty;
        const {
          blade: Vy,
          guard: Ry,
          handle: vb
        } = yb, ib = Zy, My = Vy === Ry && Ry === vb, Yy = gb((1 + ib[Vy].bladeDamage) * (My ? 1 + ey : 1)), Xy = null !== (Wy = bb.damageMultiplier) && void 0 !== Wy ? Wy : Yy, ny = null !== (Uy = bb.cooldownMultiplier) && void 0 !== Uy ? Uy : ib[vb].handleCooldown, uy = null !== (hy = bb.knockbackMultiplier) && void 0 !== hy ? hy : gb(1 + ib[vb].handleKnockback), rb = null !== (Py = bb.reachBonus) && void 0 !== Py ? Py : ib[vb].handleReach, Hy = null !== (Sy = bb.damageReduction) && void 0 !== Sy ? Sy : ib[Ry].guardReduction, ab = null !== (Ey = bb.traits) && void 0 !== Ey ? Ey : function(yb) {
          const bb = {},
            Wy = {};
          for (const cb of fy) {
            var Uy, hy;
            const fy = Zy[Jy(yb, cb)].trait;
            null !== fy && (bb[fy] = (null !== (Uy = bb[fy]) && void 0 !== Uy ? Uy : 0) + oy[cb], Wy[fy] = (null !== (hy = Wy[fy]) && void 0 !== hy ? hy : 0) + 1)
          }
          for (const fy of Object.keys(bb)) {
            const yb = 3 === Wy[fy] ? Ky : 2 === Wy[fy] ? By : 1;
            bb[fy] = gb(bb[fy] * yb)
          }
          return bb
        }(yb), Fy = null !== (ly = bb.ability) && void 0 !== ly ? ly : null, py = void 0 !== bb.name, Ly = null !== (Cy = bb.name) && void 0 !== Cy ? Cy : My ? `Pure ${Vy} Sword` : `${ib[Ry].epithet} ${Vy} Sword`, Qy = null !== (Ty = bb.lore) && void 0 !== Ty ? Ty : `Forged by the Forge Mother from a ${Vy.toLowerCase()} blade, ${Ry.toLowerCase()} guard and ${vb.toLowerCase()} handle.`, jb = function(yb) {
          let {
            blade: bb,
            guard: Wy,
            handle: Uy
          } = yb;
          const hy = Zy;
          return cb * (hy[bb].value + hy[Wy].value + hy[Uy].value)
        }(yb), Dy = ib[Vy].value + ib[Ry].value + ib[vb].value, tb = py ? "Tier 5" : Dy <= 4 ? "Tier 1" : Dy <= 8 ? "Tier 2" : Dy <= 14 ? "Tier 3" : Dy <= 22 ? "Tier 4" : "Tier 5", wy = [];
        1 !== Xy && wy.push(`${Oy(Xy-1)} damage`);
        1 !== ny && wy.push(`${Gy(1/ny-1)} faster strikes`);
        1 !== uy && wy.push(`${Oy(uy-1)} knockback`);
        rb > 0 && wy.push(`+${rb} reach`);
        Hy > 0 && wy.push(`${Gy(Hy)} less damage taken while held`);
        const kb = [];
        for (const fy of Object.keys(ab)) kb.push(`${qb[fy].name}: ${qb[fy].describe(ab[fy])}`);
        null !== Fy && kb.push(`${sy[Fy].name}: ${sy[Fy].description}`);
        return wy.push(...kb), {
          id: mb(yb),
          parts: yb,
          baseSword: ib[Vy].baseSword,
          displayName: Ly,
          lore: Qy,
          properties: wy,
          effects: kb,
          named: py,
          damageMultiplier: Xy,
          cooldownMultiplier: ny,
          knockbackMultiplier: uy,
          reachBonus: rb,
          damageReduction: Hy,
          traits: ab,
          ability: Fy,
          coalCost: jb,
          enchantmentTier: tb,
          powerMultiplier: gb(Xy / ny)
        }
      }(Uy, null !== (bb = Wy[hy]) && void 0 !== bb ? bb : {});
      return Wy === Sy && Ty.set(hy, Ey), Ey
    }

    function Jy(yb, bb) {
      return "Blade" === bb ? yb.blade : "Guard" === bb ? yb.guard : yb.handle
    }

    function gb(yb) {
      return Math.round(100 * yb) / 100
    }

    function Gy(yb) {
      return `${Math.round(100*yb)}%`
    }

    function Oy(yb) {
      return `${yb>=0?"+":""}${Gy(yb)}`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);