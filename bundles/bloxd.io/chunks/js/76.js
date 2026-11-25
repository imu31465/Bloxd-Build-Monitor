export const id = 76;
export const ids = [76];
export const modules = {
  37301: (tt, et, Vt) => {
    if (Vt.d(et, {
        e: () => jt,
        h: () => qt,
        j: () => mt,
        k: () => Dt,
        l: () => Ct,
        o: () => Nt
      }), 39 == Vt.j) var Ot = Vt(37306);
    const qt = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      Dt = ["Blade", "Guard", "Handle"],
      mt = {
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
      dt = 4,
      jt = "Coal",
      Ht = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      Xt = 1.15,
      Qt = 1.35,
      lt = .06,
      Et = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: tt => `${ht(.06*tt)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: tt => `Mobs you slay drop ${Math.round(4*tt)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: tt => `${ht(.12*tt)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: tt => `+${ht(.2*tt)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: tt => `${ht(.15*tt)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: tt => `Heal ${ht(.06*tt)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: tt => `${ht(.1*tt)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      ft = {
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
      wt = 39 == Vt.j ? Ot.e : null,
      yt = "skyblock:forged:";

    function Nt(tt, et) {
      return `${tt} ${et}`
    }
    qt.flatMap((tt => Dt.map((et => Nt(tt, et)))));

    function Mt(tt) {
      let {
        blade: et,
        guard: Vt,
        handle: Ot
      } = tt;
      return `${yt}${et.toLowerCase()}-${Vt.toLowerCase()}-${Ot.toLowerCase()}`
    }

    function bt(tt) {
      if (! function(tt) {
          return "string" === typeof tt && tt.startsWith(yt)
        }(tt)) return null;
      const et = tt.slice(yt.length).split("-").map((tt => qt.find((et => et.toLowerCase() === tt))));
      return 3 !== et.length || et.includes(void 0) ? null : {
        blade: et[0],
        guard: et[1],
        handle: et[2]
      }
    }
    const Jt = new Map;

    function Ct(tt) {
      var et;
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wt;
      const Ot = "string" === typeof tt ? bt(tt) : tt;
      if (null === Ot) return null;
      const qt = Mt(Ot),
        jt = Vt === wt ? Jt.get(qt) : void 0;
      if (void 0 !== jt) return jt;
      const yt = function(tt, et) {
        var Vt, Ot, qt, jt, wt, yt, Nt, bt, Jt;
        const {
          blade: Ct,
          guard: Wt,
          handle: St
        } = tt, ct = mt, Rt = Ct === Wt && Wt === St, It = Kt((1 + ct[Ct].bladeDamage) * (Rt ? 1 + lt : 1)), Pt = null !== (Vt = et.damageMultiplier) && void 0 !== Vt ? Vt : It, Zt = null !== (Ot = et.cooldownMultiplier) && void 0 !== Ot ? Ot : ct[St].handleCooldown, Lt = null !== (qt = et.knockbackMultiplier) && void 0 !== qt ? qt : Kt(1 + ct[St].handleKnockback), Ft = null !== (jt = et.reachBonus) && void 0 !== jt ? jt : ct[St].handleReach, kt = null !== (wt = et.damageReduction) && void 0 !== wt ? wt : ct[Wt].guardReduction, Gt = null !== (yt = et.traits) && void 0 !== yt ? yt : function(tt) {
          const et = {},
            Vt = {};
          for (const dt of Dt) {
            var Ot, qt;
            const Dt = mt[ut(tt, dt)].trait;
            null !== Dt && (et[Dt] = (null !== (Ot = et[Dt]) && void 0 !== Ot ? Ot : 0) + Ht[dt], Vt[Dt] = (null !== (qt = Vt[Dt]) && void 0 !== qt ? qt : 0) + 1)
          }
          for (const Dt of Object.keys(et)) {
            const tt = 3 === Vt[Dt] ? Qt : 2 === Vt[Dt] ? Xt : 1;
            et[Dt] = Kt(et[Dt] * tt)
          }
          return et
        }(tt), zt = null !== (Nt = et.ability) && void 0 !== Nt ? Nt : null, ot = void 0 !== et.name, rt = null !== (bt = et.name) && void 0 !== bt ? bt : Rt ? `Pure ${Ct} Sword` : `${ct[Wt].epithet} ${Ct} Sword`, Ut = null !== (Jt = et.lore) && void 0 !== Jt ? Jt : `Forged by the Forge Mother from a ${Ct.toLowerCase()} blade, ${Wt.toLowerCase()} guard and ${St.toLowerCase()} handle.`, At = function(tt) {
          let {
            blade: et,
            guard: Vt,
            handle: Ot
          } = tt;
          const qt = mt;
          return dt * (qt[et].value + qt[Vt].value + qt[Ot].value)
        }(tt), it = ct[Ct].value + ct[Wt].value + ct[St].value, Yt = ot ? "Tier 5" : it <= 4 ? "Tier 1" : it <= 8 ? "Tier 2" : it <= 14 ? "Tier 3" : it <= 22 ? "Tier 4" : "Tier 5", Bt = [];
        1 !== Pt && Bt.push(`${vt(Pt-1)} damage`);
        1 !== Zt && Bt.push(`${ht(1/Zt-1)} faster strikes`);
        1 !== Lt && Bt.push(`${vt(Lt-1)} knockback`);
        Ft > 0 && Bt.push(`+${Ft} reach`);
        kt > 0 && Bt.push(`${ht(kt)} less damage taken while held`);
        const pt = [];
        for (const Dt of Object.keys(Gt)) pt.push(`${Et[Dt].name}: ${Et[Dt].describe(Gt[Dt])}`);
        null !== zt && pt.push(`${ft[zt].name}: ${ft[zt].description}`);
        return Bt.push(...pt), {
          id: Mt(tt),
          parts: tt,
          baseSword: ct[Ct].baseSword,
          displayName: rt,
          lore: Ut,
          properties: Bt,
          effects: pt,
          named: ot,
          damageMultiplier: Pt,
          cooldownMultiplier: Zt,
          knockbackMultiplier: Lt,
          reachBonus: Ft,
          damageReduction: kt,
          traits: Gt,
          ability: zt,
          coalCost: At,
          enchantmentTier: Yt,
          powerMultiplier: Kt(Pt / Zt)
        }
      }(Ot, null !== (et = Vt[qt]) && void 0 !== et ? et : {});
      return Vt === wt && Jt.set(qt, yt), yt
    }

    function ut(tt, et) {
      return "Blade" === et ? tt.blade : "Guard" === et ? tt.guard : tt.handle
    }

    function Kt(tt) {
      return Math.round(100 * tt) / 100
    }

    function ht(tt) {
      return `${Math.round(100*tt)}%`
    }

    function vt(tt) {
      return `${tt>=0?"+":""}${ht(tt)}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);