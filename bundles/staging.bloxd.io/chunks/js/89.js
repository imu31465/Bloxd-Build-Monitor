export const id = 89;
export const ids = [89];
export const modules = {
  38172: (RR, JR, GR) => {
    if (GR.d(JR, {
        e: () => iR,
        g: () => tR,
        h: () => ZR,
        i: () => uR,
        m: () => CR,
        p: () => nR
      }), 47 == GR.j) var yR = GR(38176);
    const tR = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      uR = ["Blade", "Guard", "Handle"],
      ZR = {
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
      qR = 4,
      iR = "Coal",
      fR = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      VR = 1.15,
      KR = 1.35,
      wR = .06,
      rR = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: RR => `${BR(.06*RR)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: RR => `Mobs you slay drop ${Math.round(4*RR)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: RR => `${BR(.12*RR)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: RR => `+${BR(.2*RR)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: RR => `${BR(.15*RR)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: RR => `Heal ${BR(.06*RR)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: RR => `${BR(.1*RR)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      eR = {
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
      aR = 47 == GR.j ? yR.e : null,
      LR = "skyblock:forged:";

    function nR(RR, JR) {
      return `${RR} ${JR}`
    }
    tR.flatMap((RR => uR.map((JR => nR(RR, JR)))));

    function UR(RR) {
      let {
        blade: JR,
        guard: GR,
        handle: yR
      } = RR;
      return `${LR}${JR.toLowerCase()}-${GR.toLowerCase()}-${yR.toLowerCase()}`
    }

    function WR(RR) {
      if (! function(RR) {
          return "string" === typeof RR && RR.startsWith(LR)
        }(RR)) return null;
      const JR = RR.slice(LR.length).split("-").map((RR => tR.find((JR => JR.toLowerCase() === RR))));
      return 3 !== JR.length || JR.includes(void 0) ? null : {
        blade: JR[0],
        guard: JR[1],
        handle: JR[2]
      }
    }
    const AR = new Map;

    function CR(RR) {
      var JR;
      let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aR;
      const yR = "string" === typeof RR ? WR(RR) : RR;
      if (null === yR) return null;
      const tR = UR(yR),
        iR = GR === aR ? AR.get(tR) : void 0;
      if (void 0 !== iR) return iR;
      const LR = function(RR, JR) {
        var GR, yR, tR, iR, aR, LR, nR, WR, AR;
        const {
          blade: CR,
          guard: pR,
          handle: gR
        } = RR, bR = ZR, vR = CR === pR && pR === gR, OR = MR((1 + bR[CR].bladeDamage) * (vR ? 1 + wR : 1)), xR = null !== (GR = JR.damageMultiplier) && void 0 !== GR ? GR : OR, NR = null !== (yR = JR.cooldownMultiplier) && void 0 !== yR ? yR : bR[gR].handleCooldown, DR = null !== (tR = JR.knockbackMultiplier) && void 0 !== tR ? tR : MR(1 + bR[gR].handleKnockback), HR = null !== (iR = JR.reachBonus) && void 0 !== iR ? iR : bR[gR].handleReach, oR = null !== (aR = JR.damageReduction) && void 0 !== aR ? aR : bR[pR].guardReduction, cR = null !== (LR = JR.traits) && void 0 !== LR ? LR : function(RR) {
          const JR = {},
            GR = {};
          for (const qR of uR) {
            var yR, tR;
            const uR = ZR[XR(RR, qR)].trait;
            null !== uR && (JR[uR] = (null !== (yR = JR[uR]) && void 0 !== yR ? yR : 0) + fR[qR], GR[uR] = (null !== (tR = GR[uR]) && void 0 !== tR ? tR : 0) + 1)
          }
          for (const uR of Object.keys(JR)) {
            const RR = 3 === GR[uR] ? KR : 2 === GR[uR] ? VR : 1;
            JR[uR] = MR(JR[uR] * RR)
          }
          return JR
        }(RR), PR = null !== (nR = JR.ability) && void 0 !== nR ? nR : null, IR = void 0 !== JR.name, mR = null !== (WR = JR.name) && void 0 !== WR ? WR : vR ? `Pure ${CR} Sword` : `${bR[pR].epithet} ${CR} Sword`, zR = null !== (AR = JR.lore) && void 0 !== AR ? AR : `Forged by the Forge Mother from a ${CR.toLowerCase()} blade, ${pR.toLowerCase()} guard and ${gR.toLowerCase()} handle.`, SR = function(RR) {
          let {
            blade: JR,
            guard: GR,
            handle: yR
          } = RR;
          const tR = ZR;
          return qR * (tR[JR].value + tR[GR].value + tR[yR].value)
        }(RR), jR = bR[CR].value + bR[pR].value + bR[gR].value, dR = IR ? "Tier 5" : jR <= 4 ? "Tier 1" : jR <= 8 ? "Tier 2" : jR <= 14 ? "Tier 3" : jR <= 22 ? "Tier 4" : "Tier 5", ER = [];
        1 !== xR && ER.push(`${lR(xR-1)} damage`);
        1 !== NR && ER.push(`${BR(1/NR-1)} faster strikes`);
        1 !== DR && ER.push(`${lR(DR-1)} knockback`);
        HR > 0 && ER.push(`+${HR} reach`);
        oR > 0 && ER.push(`${BR(oR)} less damage taken while held`);
        const YR = [];
        for (const uR of Object.keys(cR)) YR.push(`${rR[uR].name}: ${rR[uR].describe(cR[uR])}`);
        null !== PR && YR.push(`${eR[PR].name}: ${eR[PR].description}`);
        return ER.push(...YR), {
          id: UR(RR),
          parts: RR,
          baseSword: bR[CR].baseSword,
          displayName: mR,
          lore: zR,
          properties: ER,
          effects: YR,
          named: IR,
          damageMultiplier: xR,
          cooldownMultiplier: NR,
          knockbackMultiplier: DR,
          reachBonus: HR,
          damageReduction: oR,
          traits: cR,
          ability: PR,
          coalCost: SR,
          enchantmentTier: dR,
          powerMultiplier: MR(xR / NR)
        }
      }(yR, null !== (JR = GR[tR]) && void 0 !== JR ? JR : {});
      return GR === aR && AR.set(tR, LR), LR
    }

    function XR(RR, JR) {
      return "Blade" === JR ? RR.blade : "Guard" === JR ? RR.guard : RR.handle
    }

    function MR(RR) {
      return Math.round(100 * RR) / 100
    }

    function BR(RR) {
      return `${Math.round(100*RR)}%`
    }

    function lR(RR) {
      return `${RR>=0?"+":""}${BR(RR)}`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);