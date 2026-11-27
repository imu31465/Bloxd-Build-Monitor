export const id = 89;
export const ids = [89];
export const modules = {
  38532: (rr, Sr, Qr) => {
    if (Qr.d(Sr, {
        e: () => fr,
        f: () => Wr,
        j: () => jr,
        n: () => ar,
        o: () => Kr,
        p: () => zr
      }), 47 == Qr.j) var Zr = Qr(38538);
    const Wr = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      ar = ["Blade", "Guard", "Handle"],
      jr = {
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
      Ir = 4,
      fr = "Coal",
      Er = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      pr = 1.15,
      xr = 1.35,
      mr = .06,
      Nr = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: rr => `${Tr(.06*rr)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: rr => `Mobs you slay drop ${Math.round(4*rr)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: rr => `${Tr(.12*rr)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: rr => `+${Tr(.2*rr)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: rr => `${Tr(.15*rr)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: rr => `Heal ${Tr(.06*rr)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: rr => `${Tr(.1*rr)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      Ur = {
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
      tr = 47 == Qr.j ? Zr.b : null,
      hr = "skyblock:forged:";

    function zr(rr, Sr) {
      return `${rr} ${Sr}`
    }
    Wr.flatMap((rr => ar.map((Sr => zr(rr, Sr)))));

    function Yr(rr) {
      let {
        blade: Sr,
        guard: Qr,
        handle: Zr
      } = rr;
      return `${hr}${Sr.toLowerCase()}-${Qr.toLowerCase()}-${Zr.toLowerCase()}`
    }

    function nr(rr) {
      if (! function(rr) {
          return "string" === typeof rr && rr.startsWith(hr)
        }(rr)) return null;
      const Sr = rr.slice(hr.length).split("-").map((rr => Wr.find((Sr => Sr.toLowerCase() === rr))));
      return 3 !== Sr.length || Sr.includes(void 0) ? null : {
        blade: Sr[0],
        guard: Sr[1],
        handle: Sr[2]
      }
    }
    const er = new Map;

    function Kr(rr) {
      var Sr;
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tr;
      const Zr = "string" === typeof rr ? nr(rr) : rr;
      if (null === Zr) return null;
      const Wr = Yr(Zr),
        fr = Qr === tr ? er.get(Wr) : void 0;
      if (void 0 !== fr) return fr;
      const hr = function(rr, Sr) {
        var Qr, Zr, Wr, fr, tr, hr, zr, nr, er;
        const {
          blade: Kr,
          guard: Or,
          handle: Lr
        } = rr, lr = jr, Xr = Kr === Or && Or === Lr, Pr = Br((1 + lr[Kr].bladeDamage) * (Xr ? 1 + mr : 1)), Hr = null !== (Qr = Sr.damageMultiplier) && void 0 !== Qr ? Qr : Pr, qr = null !== (Zr = Sr.cooldownMultiplier) && void 0 !== Zr ? Zr : lr[Lr].handleCooldown, Rr = null !== (Wr = Sr.knockbackMultiplier) && void 0 !== Wr ? Wr : Br(1 + lr[Lr].handleKnockback), gr = null !== (fr = Sr.reachBonus) && void 0 !== fr ? fr : lr[Lr].handleReach, Cr = null !== (tr = Sr.damageReduction) && void 0 !== tr ? tr : lr[Or].guardReduction, Mr = null !== (hr = Sr.traits) && void 0 !== hr ? hr : function(rr) {
          const Sr = {},
            Qr = {};
          for (const Ir of ar) {
            var Zr, Wr;
            const ar = jr[yr(rr, Ir)].trait;
            null !== ar && (Sr[ar] = (null !== (Zr = Sr[ar]) && void 0 !== Zr ? Zr : 0) + Er[Ir], Qr[ar] = (null !== (Wr = Qr[ar]) && void 0 !== Wr ? Wr : 0) + 1)
          }
          for (const ar of Object.keys(Sr)) {
            const rr = 3 === Qr[ar] ? xr : 2 === Qr[ar] ? pr : 1;
            Sr[ar] = Br(Sr[ar] * rr)
          }
          return Sr
        }(rr), Gr = null !== (zr = Sr.ability) && void 0 !== zr ? zr : null, kr = void 0 !== Sr.name, Ar = null !== (nr = Sr.name) && void 0 !== nr ? nr : Xr ? `Pure ${Kr} Sword` : `${lr[Or].epithet} ${Kr} Sword`, Vr = null !== (er = Sr.lore) && void 0 !== er ? er : `Forged by the Forge Mother from a ${Kr.toLowerCase()} blade, ${Or.toLowerCase()} guard and ${Lr.toLowerCase()} handle.`, ir = function(rr) {
          let {
            blade: Sr,
            guard: Qr,
            handle: Zr
          } = rr;
          const Wr = jr;
          return Ir * (Wr[Sr].value + Wr[Qr].value + Wr[Zr].value)
        }(rr), wr = lr[Kr].value + lr[Or].value + lr[Lr].value, cr = kr ? "Tier 5" : wr <= 4 ? "Tier 1" : wr <= 8 ? "Tier 2" : wr <= 14 ? "Tier 3" : wr <= 22 ? "Tier 4" : "Tier 5", Fr = [];
        1 !== Hr && Fr.push(`${vr(Hr-1)} damage`);
        1 !== qr && Fr.push(`${Tr(1/qr-1)} faster strikes`);
        1 !== Rr && Fr.push(`${vr(Rr-1)} knockback`);
        gr > 0 && Fr.push(`+${gr} reach`);
        Cr > 0 && Fr.push(`${Tr(Cr)} less damage taken while held`);
        const or = [];
        for (const ar of Object.keys(Mr)) or.push(`${Nr[ar].name}: ${Nr[ar].describe(Mr[ar])}`);
        null !== Gr && or.push(`${Ur[Gr].name}: ${Ur[Gr].description}`);
        return Fr.push(...or), {
          id: Yr(rr),
          parts: rr,
          baseSword: lr[Kr].baseSword,
          displayName: Ar,
          lore: Vr,
          properties: Fr,
          effects: or,
          named: kr,
          damageMultiplier: Hr,
          cooldownMultiplier: qr,
          knockbackMultiplier: Rr,
          reachBonus: gr,
          damageReduction: Cr,
          traits: Mr,
          ability: Gr,
          coalCost: ir,
          enchantmentTier: cr,
          powerMultiplier: Br(Hr / qr)
        }
      }(Zr, null !== (Sr = Qr[Wr]) && void 0 !== Sr ? Sr : {});
      return Qr === tr && er.set(Wr, hr), hr
    }

    function yr(rr, Sr) {
      return "Blade" === Sr ? rr.blade : "Guard" === Sr ? rr.guard : rr.handle
    }

    function Br(rr) {
      return Math.round(100 * rr) / 100
    }

    function Tr(rr) {
      return `${Math.round(100*rr)}%`
    }

    function vr(rr) {
      return `${rr>=0?"+":""}${Tr(rr)}`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);