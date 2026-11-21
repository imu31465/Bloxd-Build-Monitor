export const id = 73;
export const ids = [73];
export const modules = {
  36665: (QQ, FQ, wQ) => {
    if (wQ.d(FQ, {
        e: () => vQ,
        i: () => qQ,
        l: () => DQ,
        n: () => oQ,
        q: () => cQ,
        t: () => eQ
      }), 39 == wQ.j) var LQ = wQ(36672);
    const qQ = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      oQ = ["Blade", "Guard", "Handle"],
      DQ = {
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
      kQ = 4,
      vQ = "Coal",
      mQ = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      uQ = 1.15,
      HQ = 1.35,
      bQ = .06,
      YQ = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: QQ => `${iQ(.06*QQ)} less damage taken`
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
          describe: QQ => `${iQ(.12*QQ)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: QQ => `+${iQ(.2*QQ)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: QQ => `${iQ(.15*QQ)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: QQ => `Heal ${iQ(.06*QQ)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: QQ => `${iQ(.1*QQ)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      xQ = {
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
      AQ = 39 == wQ.j ? LQ.c : null,
      tQ = "skyblock:forged:";

    function eQ(QQ, FQ) {
      return `${QQ} ${FQ}`
    }
    qQ.flatMap((QQ => oQ.map((FQ => eQ(QQ, FQ)))));

    function MQ(QQ) {
      let {
        blade: FQ,
        guard: wQ,
        handle: LQ
      } = QQ;
      return `${tQ}${FQ.toLowerCase()}-${wQ.toLowerCase()}-${LQ.toLowerCase()}`
    }

    function GQ(QQ) {
      if (! function(QQ) {
          return "string" === typeof QQ && QQ.startsWith(tQ)
        }(QQ)) return null;
      const FQ = QQ.slice(tQ.length).split("-").map((QQ => qQ.find((FQ => FQ.toLowerCase() === QQ))));
      return 3 !== FQ.length || FQ.includes(void 0) ? null : {
        blade: FQ[0],
        guard: FQ[1],
        handle: FQ[2]
      }
    }
    const pQ = new Map;

    function cQ(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AQ;
      const LQ = "string" === typeof QQ ? GQ(QQ) : QQ;
      if (null === LQ) return null;
      const qQ = MQ(LQ),
        vQ = wQ === AQ ? pQ.get(qQ) : void 0;
      if (void 0 !== vQ) return vQ;
      const tQ = function(QQ, FQ) {
        var wQ, LQ, qQ, vQ, AQ, tQ, eQ, GQ, pQ;
        const {
          blade: cQ,
          guard: RQ,
          handle: OQ
        } = QQ, sQ = DQ, rQ = cQ === RQ && RQ === OQ, IQ = SQ((1 + sQ[cQ].bladeDamage) * (rQ ? 1 + bQ : 1)), UQ = null !== (wQ = FQ.damageMultiplier) && void 0 !== wQ ? wQ : IQ, NQ = null !== (LQ = FQ.cooldownMultiplier) && void 0 !== LQ ? LQ : sQ[OQ].handleCooldown, TQ = null !== (qQ = FQ.knockbackMultiplier) && void 0 !== qQ ? qQ : SQ(1 + sQ[OQ].handleKnockback), KQ = null !== (vQ = FQ.reachBonus) && void 0 !== vQ ? vQ : sQ[OQ].handleReach, zQ = null !== (AQ = FQ.damageReduction) && void 0 !== AQ ? AQ : sQ[RQ].guardReduction, lQ = null !== (tQ = FQ.traits) && void 0 !== tQ ? tQ : function(QQ) {
          const FQ = {},
            wQ = {};
          for (const kQ of oQ) {
            var LQ, qQ;
            const oQ = DQ[CQ(QQ, kQ)].trait;
            null !== oQ && (FQ[oQ] = (null !== (LQ = FQ[oQ]) && void 0 !== LQ ? LQ : 0) + mQ[kQ], wQ[oQ] = (null !== (qQ = wQ[oQ]) && void 0 !== qQ ? qQ : 0) + 1)
          }
          for (const oQ of Object.keys(FQ)) {
            const QQ = 3 === wQ[oQ] ? HQ : 2 === wQ[oQ] ? uQ : 1;
            FQ[oQ] = SQ(FQ[oQ] * QQ)
          }
          return FQ
        }(QQ), jQ = null !== (eQ = FQ.ability) && void 0 !== eQ ? eQ : null, aQ = void 0 !== FQ.name, XQ = null !== (GQ = FQ.name) && void 0 !== GQ ? GQ : rQ ? `Pure ${cQ} Sword` : `${sQ[RQ].epithet} ${cQ} Sword`, fQ = null !== (pQ = FQ.lore) && void 0 !== pQ ? pQ : `Forged by the Forge Mother from a ${cQ.toLowerCase()} blade, ${RQ.toLowerCase()} guard and ${OQ.toLowerCase()} handle.`, VQ = function(QQ) {
          let {
            blade: FQ,
            guard: wQ,
            handle: LQ
          } = QQ;
          const qQ = DQ;
          return kQ * (qQ[FQ].value + qQ[wQ].value + qQ[LQ].value)
        }(QQ), hQ = sQ[cQ].value + sQ[RQ].value + sQ[OQ].value, JQ = aQ ? "Tier 5" : hQ <= 4 ? "Tier 1" : hQ <= 8 ? "Tier 2" : hQ <= 14 ? "Tier 3" : hQ <= 22 ? "Tier 4" : "Tier 5", EQ = [];
        1 !== UQ && EQ.push(`${WQ(UQ-1)} damage`);
        1 !== NQ && EQ.push(`${iQ(1/NQ-1)} faster strikes`);
        1 !== TQ && EQ.push(`${WQ(TQ-1)} knockback`);
        KQ > 0 && EQ.push(`+${KQ} reach`);
        zQ > 0 && EQ.push(`${iQ(zQ)} less damage taken while held`);
        const nQ = [];
        for (const oQ of Object.keys(lQ)) nQ.push(`${YQ[oQ].name}: ${YQ[oQ].describe(lQ[oQ])}`);
        null !== jQ && nQ.push(`${xQ[jQ].name}: ${xQ[jQ].description}`);
        return EQ.push(...nQ), {
          id: MQ(QQ),
          parts: QQ,
          baseSword: sQ[cQ].baseSword,
          displayName: XQ,
          lore: fQ,
          properties: EQ,
          effects: nQ,
          named: aQ,
          damageMultiplier: UQ,
          cooldownMultiplier: NQ,
          knockbackMultiplier: TQ,
          reachBonus: KQ,
          damageReduction: zQ,
          traits: lQ,
          ability: jQ,
          coalCost: VQ,
          enchantmentTier: JQ,
          powerMultiplier: SQ(UQ / NQ)
        }
      }(LQ, null !== (FQ = wQ[qQ]) && void 0 !== FQ ? FQ : {});
      return wQ === AQ && pQ.set(qQ, tQ), tQ
    }

    function CQ(QQ, FQ) {
      return "Blade" === FQ ? QQ.blade : "Guard" === FQ ? QQ.guard : QQ.handle
    }

    function SQ(QQ) {
      return Math.round(100 * QQ) / 100
    }

    function iQ(QQ) {
      return `${Math.round(100*QQ)}%`
    }

    function WQ(QQ) {
      return `${QQ>=0?"+":""}${iQ(QQ)}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);