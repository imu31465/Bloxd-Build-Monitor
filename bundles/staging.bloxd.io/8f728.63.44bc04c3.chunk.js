export const id = 63;
export const ids = [63];
export const modules = {
  35648: (cB, Bc, nc) => {
    if (nc.d(Bc, {
        c: () => Mc,
        e: () => Ic,
        i: () => uc,
        k: () => rB,
        m: () => hc,
        p: () => Sc
      }), 34 == nc.j) var Vc = nc(35651);
    const Ic = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      rB = ["Blade", "Guard", "Handle"],
      uc = {
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
      sc = 4,
      Mc = "Coal",
      Pc = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      qB = 1.15,
      Oc = 1.35,
      Tc = .06,
      fc = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: cB => `${Yc(.06*cB)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: cB => `Mobs you slay drop ${Math.round(4*cB)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: cB => `${Yc(.12*cB)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: cB => `+${Yc(.2*cB)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: cB => `${Yc(.15*cB)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: cB => `Heal ${Yc(.06*cB)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: cB => `${Yc(.1*cB)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      mB = {
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
      ec = 34 == nc.j ? Vc.d : null,
      tB = "skyblock:forged:";

    function Sc(cB, Bc) {
      return `${cB} ${Bc}`
    }
    Ic.flatMap((cB => rB.map((Bc => Sc(cB, Bc)))));

    function yB(cB) {
      let {
        blade: Bc,
        guard: nc,
        handle: Vc
      } = cB;
      return `${tB}${Bc.toLowerCase()}-${nc.toLowerCase()}-${Vc.toLowerCase()}`
    }

    function zB(cB) {
      if (! function(cB) {
          return "string" === typeof cB && cB.startsWith(tB)
        }(cB)) return null;
      const Bc = cB.slice(tB.length).split("-").map((cB => Ic.find((Bc => Bc.toLowerCase() === cB))));
      return 3 !== Bc.length || Bc.includes(void 0) ? null : {
        blade: Bc[0],
        guard: Bc[1],
        handle: Bc[2]
      }
    }
    const pc = new Map;

    function hc(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec;
      const Vc = "string" === typeof cB ? zB(cB) : cB;
      if (null === Vc) return null;
      const Ic = yB(Vc),
        Mc = nc === ec ? pc.get(Ic) : void 0;
      if (void 0 !== Mc) return Mc;
      const tB = function(cB, Bc) {
        var nc, Vc, Ic, Mc, ec, tB, Sc, zB, pc;
        const {
          blade: hc,
          guard: gB,
          handle: Uc
        } = cB, bB = uc, Zc = hc === gB && gB === Uc, Qc = lc((1 + bB[hc].bladeDamage) * (Zc ? 1 + Tc : 1)), Cc = null !== (nc = Bc.damageMultiplier) && void 0 !== nc ? nc : Qc, vB = null !== (Vc = Bc.cooldownMultiplier) && void 0 !== Vc ? Vc : bB[Uc].handleCooldown, Dc = null !== (Ic = Bc.knockbackMultiplier) && void 0 !== Ic ? Ic : lc(1 + bB[Uc].handleKnockback), Nc = null !== (Mc = Bc.reachBonus) && void 0 !== Mc ? Mc : bB[Uc].handleReach, Ec = null !== (ec = Bc.damageReduction) && void 0 !== ec ? ec : bB[gB].guardReduction, oc = null !== (tB = Bc.traits) && void 0 !== tB ? tB : function(cB) {
          const Bc = {},
            nc = {};
          for (const sc of rB) {
            var Vc, Ic;
            const rB = uc[aB(cB, sc)].trait;
            null !== rB && (Bc[rB] = (null !== (Vc = Bc[rB]) && void 0 !== Vc ? Vc : 0) + Pc[sc], nc[rB] = (null !== (Ic = nc[rB]) && void 0 !== Ic ? Ic : 0) + 1)
          }
          for (const rB of Object.keys(Bc)) {
            const cB = 3 === nc[rB] ? Oc : 2 === nc[rB] ? qB : 1;
            Bc[rB] = lc(Bc[rB] * cB)
          }
          return Bc
        }(cB), Wc = null !== (Sc = Bc.ability) && void 0 !== Sc ? Sc : null, wc = void 0 !== Bc.name, kB = null !== (zB = Bc.name) && void 0 !== zB ? zB : Zc ? `Pure ${hc} Sword` : `${bB[gB].epithet} ${hc} Sword`, Xc = null !== (pc = Bc.lore) && void 0 !== pc ? pc : `Forged by the Forge Mother from a ${hc.toLowerCase()} blade, ${gB.toLowerCase()} guard and ${Uc.toLowerCase()} handle.`, Hc = function(cB) {
          let {
            blade: Bc,
            guard: nc,
            handle: Vc
          } = cB;
          const Ic = uc;
          return sc * (Ic[Bc].value + Ic[nc].value + Ic[Vc].value)
        }(cB), Fc = bB[hc].value + bB[gB].value + bB[Uc].value, Jc = wc ? "Tier 5" : Fc <= 4 ? "Tier 1" : Fc <= 8 ? "Tier 2" : Fc <= 14 ? "Tier 3" : Fc <= 22 ? "Tier 4" : "Tier 5", jB = [];
        1 !== Cc && jB.push(`${Lc(Cc-1)} damage`);
        1 !== vB && jB.push(`${Yc(1/vB-1)} faster strikes`);
        1 !== Dc && jB.push(`${Lc(Dc-1)} knockback`);
        Nc > 0 && jB.push(`+${Nc} reach`);
        Ec > 0 && jB.push(`${Yc(Ec)} less damage taken while held`);
        const Rc = [];
        for (const rB of Object.keys(oc)) Rc.push(`${fc[rB].name}: ${fc[rB].describe(oc[rB])}`);
        null !== Wc && Rc.push(`${mB[Wc].name}: ${mB[Wc].description}`);
        return jB.push(...Rc), {
          id: yB(cB),
          parts: cB,
          baseSword: bB[hc].baseSword,
          displayName: kB,
          lore: Xc,
          properties: jB,
          effects: Rc,
          named: wc,
          damageMultiplier: Cc,
          cooldownMultiplier: vB,
          knockbackMultiplier: Dc,
          reachBonus: Nc,
          damageReduction: Ec,
          traits: oc,
          ability: Wc,
          coalCost: Hc,
          enchantmentTier: Jc,
          powerMultiplier: lc(Cc / vB)
        }
      }(Vc, null !== (Bc = nc[Ic]) && void 0 !== Bc ? Bc : {});
      return nc === ec && pc.set(Ic, tB), tB
    }

    function aB(cB, Bc) {
      return "Blade" === Bc ? cB.blade : "Guard" === Bc ? cB.guard : cB.handle
    }

    function lc(cB) {
      return Math.round(100 * cB) / 100
    }

    function Yc(cB) {
      return `${Math.round(100*cB)}%`
    }

    function Lc(cB) {
      return `${cB>=0?"+":""}${Yc(cB)}`
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);