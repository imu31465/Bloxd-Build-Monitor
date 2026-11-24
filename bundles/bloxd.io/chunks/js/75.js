export const id = 75;
export const ids = [75];
export const modules = {
  37158: (mm, Tm, fm) => {
    if (fm.d(Tm, {
        d: () => Dm,
        g: () => Am,
        h: () => xm,
        i: () => am,
        l: () => Qm,
        n: () => jm
      }), 39 == fm.j) var hm = fm(37164);
    const Am = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      am = ["Blade", "Guard", "Handle"],
      xm = {
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
      wm = 4,
      Dm = "Coal",
      im = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Rm = 1.15,
      pm = 1.35,
      Em = .06,
      om = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: mm => `${cm(.06*mm)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: mm => `Mobs you slay drop ${Math.round(4*mm)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: mm => `${cm(.12*mm)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: mm => `+${cm(.2*mm)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: mm => `${cm(.15*mm)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: mm => `Heal ${cm(.06*mm)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: mm => `${cm(.1*mm)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Om = {
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
      Ym = 39 == fm.j ? hm.c : null,
      qm = "skyblock:forged:";

    function jm(mm, Tm) {
      return `${mm} ${Tm}`
    }
    Am.flatMap((mm => am.map((Tm => jm(mm, Tm)))));

    function Vm(mm) {
      let {
        blade: Tm,
        guard: fm,
        handle: hm
      } = mm;
      return `${qm}${Tm.toLowerCase()}-${fm.toLowerCase()}-${hm.toLowerCase()}`
    }

    function Im(mm) {
      if (! function(mm) {
          return "string" === typeof mm && mm.startsWith(qm)
        }(mm)) return null;
      const Tm = mm.slice(qm.length).split("-").map((mm => Am.find((Tm => Tm.toLowerCase() === mm))));
      return 3 !== Tm.length || Tm.includes(void 0) ? null : {
        blade: Tm[0],
        guard: Tm[1],
        handle: Tm[2]
      }
    }
    const Km = new Map;

    function Qm(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ym;
      const hm = "string" === typeof mm ? Im(mm) : mm;
      if (null === hm) return null;
      const Am = Vm(hm),
        Dm = fm === Ym ? Km.get(Am) : void 0;
      if (void 0 !== Dm) return Dm;
      const qm = function(mm, Tm) {
        var fm, hm, Am, Dm, Ym, qm, jm, Im, Km;
        const {
          blade: Qm,
          guard: Zm,
          handle: km
        } = mm, bm = xm, Sm = Qm === Zm && Zm === km, em = Jm((1 + bm[Qm].bladeDamage) * (Sm ? 1 + Em : 1)), Nm = null !== (fm = Tm.damageMultiplier) && void 0 !== fm ? fm : em, Gm = null !== (hm = Tm.cooldownMultiplier) && void 0 !== hm ? hm : bm[km].handleCooldown, Xm = null !== (Am = Tm.knockbackMultiplier) && void 0 !== Am ? Am : Jm(1 + bm[km].handleKnockback), Pm = null !== (Dm = Tm.reachBonus) && void 0 !== Dm ? Dm : bm[km].handleReach, Hm = null !== (Ym = Tm.damageReduction) && void 0 !== Ym ? Ym : bm[Zm].guardReduction, ym = null !== (qm = Tm.traits) && void 0 !== qm ? qm : function(mm) {
          const Tm = {},
            fm = {};
          for (const wm of am) {
            var hm, Am;
            const am = xm[nm(mm, wm)].trait;
            null !== am && (Tm[am] = (null !== (hm = Tm[am]) && void 0 !== hm ? hm : 0) + im[wm], fm[am] = (null !== (Am = fm[am]) && void 0 !== Am ? Am : 0) + 1)
          }
          for (const am of Object.keys(Tm)) {
            const mm = 3 === fm[am] ? pm : 2 === fm[am] ? Rm : 1;
            Tm[am] = Jm(Tm[am] * mm)
          }
          return Tm
        }(mm), Cm = null !== (jm = Tm.ability) && void 0 !== jm ? jm : null, rm = void 0 !== Tm.name, sm = null !== (Im = Tm.name) && void 0 !== Im ? Im : Sm ? `Pure ${Qm} Sword` : `${bm[Zm].epithet} ${Qm} Sword`, lm = null !== (Km = Tm.lore) && void 0 !== Km ? Km : `Forged by the Forge Mother from a ${Qm.toLowerCase()} blade, ${Zm.toLowerCase()} guard and ${km.toLowerCase()} handle.`, Mm = function(mm) {
          let {
            blade: Tm,
            guard: fm,
            handle: hm
          } = mm;
          const Am = xm;
          return wm * (Am[Tm].value + Am[fm].value + Am[hm].value)
        }(mm), um = bm[Qm].value + bm[Zm].value + bm[km].value, Bm = rm ? "Tier 5" : um <= 4 ? "Tier 1" : um <= 8 ? "Tier 2" : um <= 14 ? "Tier 3" : um <= 22 ? "Tier 4" : "Tier 5", Lm = [];
        1 !== Nm && Lm.push(`${zm(Nm-1)} damage`);
        1 !== Gm && Lm.push(`${cm(1/Gm-1)} faster strikes`);
        1 !== Xm && Lm.push(`${zm(Xm-1)} knockback`);
        Pm > 0 && Lm.push(`+${Pm} reach`);
        Hm > 0 && Lm.push(`${cm(Hm)} less damage taken while held`);
        const tm = [];
        for (const am of Object.keys(ym)) tm.push(`${om[am].name}: ${om[am].describe(ym[am])}`);
        null !== Cm && tm.push(`${Om[Cm].name}: ${Om[Cm].description}`);
        return Lm.push(...tm), {
          id: Vm(mm),
          parts: mm,
          baseSword: bm[Qm].baseSword,
          displayName: sm,
          lore: lm,
          properties: Lm,
          effects: tm,
          named: rm,
          damageMultiplier: Nm,
          cooldownMultiplier: Gm,
          knockbackMultiplier: Xm,
          reachBonus: Pm,
          damageReduction: Hm,
          traits: ym,
          ability: Cm,
          coalCost: Mm,
          enchantmentTier: Bm,
          powerMultiplier: Jm(Nm / Gm)
        }
      }(hm, null !== (Tm = fm[Am]) && void 0 !== Tm ? Tm : {});
      return fm === Ym && Km.set(Am, qm), qm
    }

    function nm(mm, Tm) {
      return "Blade" === Tm ? mm.blade : "Guard" === Tm ? mm.guard : mm.handle
    }

    function Jm(mm) {
      return Math.round(100 * mm) / 100
    }

    function cm(mm) {
      return `${Math.round(100*mm)}%`
    }

    function zm(mm) {
      return `${mm>=0?"+":""}${cm(mm)}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);