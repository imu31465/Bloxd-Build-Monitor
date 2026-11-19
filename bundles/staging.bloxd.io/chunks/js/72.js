export const id = 72;
export const ids = [72];
export const modules = {
  36421: (YY, rY, DY) => {
    if (DY.d(rY, {
        d: () => gY,
        e: () => AY,
        h: () => RY,
        i: () => IY,
        m: () => SY,
        q: () => WY
      }), 39 == DY.j) var FY = DY(36427);
    const AY = ["Wood", "Stone", "Iron", "Gold", "Diamond", "Moonstone", "Magmasteel", "Sanguine", "Astral"],
      IY = ["Blade", "Guard", "Handle"],
      RY = {
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
      OY = 4,
      gY = "Coal",
      aY = {
        Blade: 1,
        Guard: .6,
        Handle: .4
      },
      vY = 1.15,
      uY = 1.35,
      sY = .06,
      iY = {
        defence: {
          name: "Bulwark",
          amount: .06,
          describe: YY => `${eY(.06*YY)} less damage taken`
        },
        coins: {
          name: "Midas",
          amount: 4,
          describe: YY => `Mobs you slay drop ${Math.round(4*YY)}+ extra coins`
        },
        crit: {
          name: "Keen Edge",
          chance: .12,
          amount: .6,
          describe: YY => `${eY(.12*YY)} chance to strike for +60% damage`
        },
        bossBane: {
          name: "Bossbane",
          amount: .2,
          describe: YY => `+${eY(.2*YY)} damage to bosses`
        },
        firePool: {
          name: "Magma Pool",
          chance: .15,
          amount: .12,
          cooldownMs: 3e3,
          describe: YY => `${eY(.15*YY)} chance to leave a fire pool under the mob that burns for 3s`
        },
        lifesteal: {
          name: "Bloodthirst",
          amount: .06,
          describe: YY => `Heal ${eY(.06*YY)} of the damage you deal`
        },
        starfall: {
          name: "Starfall",
          chance: .1,
          amount: .6,
          cooldownMs: 4e3,
          describe: YY => `${eY(.1*YY)} chance to call a falling star that hits nearby mobs and slows them`
        }
      },
      yY = {
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
      QY = 39 == DY.j ? FY.d : null,
      oY = "skyblock:forged:";

    function WY(YY, rY) {
      return `${YY} ${rY}`
    }
    AY.flatMap((YY => IY.map((rY => WY(YY, rY)))));

    function EY(YY) {
      let {
        blade: rY,
        guard: DY,
        handle: FY
      } = YY;
      return `${oY}${rY.toLowerCase()}-${DY.toLowerCase()}-${FY.toLowerCase()}`
    }

    function mY(YY) {
      if (! function(YY) {
          return "string" === typeof YY && YY.startsWith(oY)
        }(YY)) return null;
      const rY = YY.slice(oY.length).split("-").map((YY => AY.find((rY => rY.toLowerCase() === YY))));
      return 3 !== rY.length || rY.includes(void 0) ? null : {
        blade: rY[0],
        guard: rY[1],
        handle: rY[2]
      }
    }
    const VY = new Map;

    function SY(YY) {
      var rY;
      let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QY;
      const FY = "string" === typeof YY ? mY(YY) : YY;
      if (null === FY) return null;
      const AY = EY(FY),
        gY = DY === QY ? VY.get(AY) : void 0;
      if (void 0 !== gY) return gY;
      const oY = function(YY, rY) {
        var DY, FY, AY, gY, QY, oY, WY, mY, VY;
        const {
          blade: SY,
          guard: BY,
          handle: cY
        } = YY, KY = RY, HY = SY === BY && BY === cY, zY = TY((1 + KY[SY].bladeDamage) * (HY ? 1 + sY : 1)), ZY = null !== (DY = rY.damageMultiplier) && void 0 !== DY ? DY : zY, CY = null !== (FY = rY.cooldownMultiplier) && void 0 !== FY ? FY : KY[cY].handleCooldown, fY = null !== (AY = rY.knockbackMultiplier) && void 0 !== AY ? AY : TY(1 + KY[cY].handleKnockback), jY = null !== (gY = rY.reachBonus) && void 0 !== gY ? gY : KY[cY].handleReach, hY = null !== (QY = rY.damageReduction) && void 0 !== QY ? QY : KY[BY].guardReduction, dY = null !== (oY = rY.traits) && void 0 !== oY ? oY : function(YY) {
          const rY = {},
            DY = {};
          for (const OY of IY) {
            var FY, AY;
            const IY = RY[lY(YY, OY)].trait;
            null !== IY && (rY[IY] = (null !== (FY = rY[IY]) && void 0 !== FY ? FY : 0) + aY[OY], DY[IY] = (null !== (AY = DY[IY]) && void 0 !== AY ? AY : 0) + 1)
          }
          for (const IY of Object.keys(rY)) {
            const YY = 3 === DY[IY] ? uY : 2 === DY[IY] ? vY : 1;
            rY[IY] = TY(rY[IY] * YY)
          }
          return rY
        }(YY), JY = null !== (WY = rY.ability) && void 0 !== WY ? WY : null, MY = void 0 !== rY.name, wY = null !== (mY = rY.name) && void 0 !== mY ? mY : HY ? `Pure ${SY} Sword` : `${KY[BY].epithet} ${SY} Sword`, bY = null !== (VY = rY.lore) && void 0 !== VY ? VY : `Forged by the Forge Mother from a ${SY.toLowerCase()} blade, ${BY.toLowerCase()} guard and ${cY.toLowerCase()} handle.`, XY = function(YY) {
          let {
            blade: rY,
            guard: DY,
            handle: FY
          } = YY;
          const AY = RY;
          return OY * (AY[rY].value + AY[DY].value + AY[FY].value)
        }(YY), qY = KY[SY].value + KY[BY].value + KY[cY].value, pY = MY ? "Tier 5" : qY <= 4 ? "Tier 1" : qY <= 8 ? "Tier 2" : qY <= 14 ? "Tier 3" : qY <= 22 ? "Tier 4" : "Tier 5", kY = [];
        1 !== ZY && kY.push(`${NY(ZY-1)} damage`);
        1 !== CY && kY.push(`${eY(1/CY-1)} faster strikes`);
        1 !== fY && kY.push(`${NY(fY-1)} knockback`);
        jY > 0 && kY.push(`+${jY} reach`);
        hY > 0 && kY.push(`${eY(hY)} less damage taken while held`);
        const GY = [];
        for (const IY of Object.keys(dY)) GY.push(`${iY[IY].name}: ${iY[IY].describe(dY[IY])}`);
        null !== JY && GY.push(`${yY[JY].name}: ${yY[JY].description}`);
        return kY.push(...GY), {
          id: EY(YY),
          parts: YY,
          baseSword: KY[SY].baseSword,
          displayName: wY,
          lore: bY,
          properties: kY,
          effects: GY,
          named: MY,
          damageMultiplier: ZY,
          cooldownMultiplier: CY,
          knockbackMultiplier: fY,
          reachBonus: jY,
          damageReduction: hY,
          traits: dY,
          ability: JY,
          coalCost: XY,
          enchantmentTier: pY,
          powerMultiplier: TY(ZY / CY)
        }
      }(FY, null !== (rY = DY[AY]) && void 0 !== rY ? rY : {});
      return DY === QY && VY.set(AY, oY), oY
    }

    function lY(YY, rY) {
      return "Blade" === rY ? YY.blade : "Guard" === rY ? YY.guard : YY.handle
    }

    function TY(YY) {
      return Math.round(100 * YY) / 100
    }

    function eY(YY) {
      return `${Math.round(100*YY)}%`
    }

    function NY(YY) {
      return `${YY>=0?"+":""}${eY(YY)}`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);