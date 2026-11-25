export const id = 78;
export const ids = [78];
export const modules = {
  37334: (QQ, WQ, XQ) => {
    if (XQ.d(WQ, {
        c: () => FQ,
        e: () => qQ,
        h: () => zQ,
        i: () => TQ,
        l: () => UQ,
        m: () => VQ
      }), 41 == XQ.j) var wQ = XQ(37343);
    const qQ = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      TQ = ["Blade", "Guard", "Handle"],
      zQ = {
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
      sQ = 4,
      FQ = "Coal",
      PQ = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      gQ = 1.15,
      JQ = 1.35,
      rQ = .06,
      IQ = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: QQ => `${dQ(.06*QQ)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: QQ => `Mobs you slay drop ${Math.round(4*QQ)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: QQ => `${dQ(.12*QQ)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: QQ => `+${dQ(.2*QQ)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: QQ => `${dQ(.15*QQ)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: QQ => `Heal ${dQ(.06*QQ)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: QQ => `${dQ(.1*QQ)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      jQ = {
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
      BQ = 41 == XQ.j ? wQ.d : null,
      yQ = "skyblock:forged:";

    function VQ(QQ, WQ) {
      return `${QQ} ${WQ}`
    }
    qQ.flatMap((QQ => TQ.map((WQ => VQ(QQ, WQ)))));

    function DQ(QQ) {
      let {
        blade: WQ,
        guard: XQ,
        handle: wQ
      } = QQ;
      return `${yQ}${WQ.toLowerCase()}-${XQ.toLowerCase()}-${wQ.toLowerCase()}`
    }

    function pQ(QQ) {
      if (! function(QQ) {
          return "string" === typeof QQ && QQ.startsWith(yQ)
        }(QQ)) return null;
      const WQ = QQ.slice(yQ.length).split("-").map((QQ => qQ.find((WQ => WQ.toLowerCase() === QQ))));
      return 3 !== WQ.length || WQ.includes(void 0) ? null : {
        blade: WQ[0],
        guard: WQ[1],
        handle: WQ[2]
      }
    }
    const GQ = new Map;

    function UQ(QQ) {
      var WQ;
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BQ;
      const wQ = "string" === typeof QQ ? pQ(QQ) : QQ;
      if (null === wQ) return null;
      const qQ = DQ(wQ),
        FQ = XQ === BQ ? GQ.get(qQ) : void 0;
      if (void 0 !== FQ) return FQ;
      const yQ = function(QQ, WQ) {
        var XQ, wQ, qQ, FQ, BQ, yQ, VQ, pQ, GQ;
        const {
          blade: UQ,
          guard: aQ,
          handle: lQ
        } = QQ, hQ = zQ, iQ = UQ === aQ && aQ === lQ, cQ = vQ((1 + hQ[UQ].bladeDamage) * (iQ ? 1 + rQ : 1)), AQ = null !== (XQ = WQ.damageMultiplier) && void 0 !== XQ ? XQ : cQ, RQ = null !== (wQ = WQ.cooldownMultiplier) && void 0 !== wQ ? wQ : hQ[lQ].handleCooldown, EQ = null !== (qQ = WQ.knockbackMultiplier) && void 0 !== qQ ? qQ : vQ(1 + hQ[lQ].handleKnockback), CQ = null !== (FQ = WQ.reachBonus) && void 0 !== FQ ? FQ : hQ[lQ].handleReach, uQ = null !== (BQ = WQ.damageReduction) && void 0 !== BQ ? BQ : hQ[aQ].guardReduction, LQ = null !== (yQ = WQ.traits) && void 0 !== yQ ? yQ : function(QQ) {
          const WQ = {},
            XQ = {};
          for (const sQ of TQ) {
            var wQ, qQ;
            const TQ = zQ[bQ(QQ, sQ)].trait;
            null !== TQ && (WQ[TQ] = (null !== (wQ = WQ[TQ]) && void 0 !== wQ ? wQ : 0) + PQ[sQ], XQ[TQ] = (null !== (qQ = XQ[TQ]) && void 0 !== qQ ? qQ : 0) + 1)
          }
          for (const TQ of Object.keys(WQ)) {
            const QQ = 3 === XQ[TQ] ? JQ : 2 === XQ[TQ] ? gQ : 1;
            WQ[TQ] = vQ(WQ[TQ] * QQ)
          }
          return WQ
        }(QQ), kQ = null !== (VQ = WQ.ability) && void 0 !== VQ ? VQ : null, fQ = void 0 !== WQ.name, SQ = null !== (pQ = WQ.name) && void 0 !== pQ ? pQ : iQ ? `Pure ${UQ} Sword` : `${hQ[aQ].epithet} ${UQ} Sword`, tQ = null !== (GQ = WQ.lore) && void 0 !== GQ ? GQ : `Forged by the Forge Mother from a ${UQ.toLowerCase()} blade, ${aQ.toLowerCase()} guard and ${lQ.toLowerCase()} handle.`, oQ = function(QQ) {
          let {
            blade: WQ,
            guard: XQ,
            handle: wQ
          } = QQ;
          const qQ = zQ;
          return sQ * (qQ[WQ].value + qQ[XQ].value + qQ[wQ].value)
        }(QQ), eQ = hQ[UQ].value + hQ[aQ].value + hQ[lQ].value, nQ = fQ ? "Tier 5" : eQ <= 4 ? "Tier 1" : eQ <= 8 ? "Tier 2" : eQ <= 14 ? "Tier 3" : eQ <= 22 ? "Tier 4" : "Tier 5", xQ = [];
        1 !== AQ && xQ.push(`${HQ(AQ-1)} damage`);
        1 !== RQ && xQ.push(`${dQ(1/RQ-1)} faster strikes`);
        1 !== EQ && xQ.push(`${HQ(EQ-1)} knockback`);
        CQ > 0 && xQ.push(`+${CQ} reach`);
        uQ > 0 && xQ.push(`${dQ(uQ)} less damage taken while held`);
        const YQ = [];
        for (const TQ of Object.keys(LQ)) YQ.push(`${IQ[TQ].name}: ${IQ[TQ].describe(LQ[TQ])}`);
        null !== kQ && YQ.push(`${jQ[kQ].name}: ${jQ[kQ].description}`);
        return xQ.push(...YQ), {
          id: DQ(QQ),
          parts: QQ,
          baseSword: hQ[UQ].baseSword,
          displayName: SQ,
          lore: tQ,
          properties: xQ,
          effects: YQ,
          named: fQ,
          damageMultiplier: AQ,
          cooldownMultiplier: RQ,
          knockbackMultiplier: EQ,
          reachBonus: CQ,
          damageReduction: uQ,
          traits: LQ,
          ability: kQ,
          coalCost: oQ,
          enchantmentTier: nQ,
          powerMultiplier: vQ(AQ / RQ)
        }
      }(wQ, null !== (WQ = XQ[qQ]) && void 0 !== WQ ? WQ : {});
      return XQ === BQ && GQ.set(qQ, yQ), yQ
    }

    function bQ(QQ, WQ) {
      return "Blade" === WQ ? QQ.blade : "Guard" === WQ ? QQ.guard : QQ.handle
    }

    function vQ(QQ) {
      return Math.round(100 * QQ) / 100
    }

    function dQ(QQ) {
      return `${Math.round(100*QQ)}%`
    }

    function HQ(QQ) {
      return `${QQ>=0?"+":""}${dQ(QQ)}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);