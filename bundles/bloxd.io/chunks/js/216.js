export const id = 216;
export const ids = [216];
export const modules = {
  38939: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      getBlockFaces: () => sY,
      getIngameIconUrl: () => QY,
      getItemIconUrl: () => yY,
      getItemTextureUrl: () => iY,
      getParticleTextureUrl: () => oY
    });
    var FY = DY(4001),
      AY = DY(36400),
      IY = DY(8824),
      RY = DY(2746);
    const OY = new Set,
      gY = new Set;
    let aY = null;

    function vY(YY) {
      OY.has(YY) || (OY.add(YY), gY.add(YY), aY ??= setTimeout((() => {
        console.warn(`Docs gallery: no default texture for ${gY.size} names`, [...gY]), gY.clear(), aY = null
      }), 1e3))
    }

    function uY(YY, rY) {
      try {
        return (0, IY.getDefaultTexture)(YY, rY).url
      } catch {
        return vY(YY), null
      }
    }

    function sY(YY) {
      var rY, DY;
      const IY = AY.o[YY];
      if (!IY || IY.itemTexture || !IY.textureInfo) return null;
      const {
        textureInfo: OY,
        texturePerSide: gY
      } = IY, aY = YY => {
        return "string" === typeof(rY = gY && Array.isArray(OY) ? OY[gY[YY]] : OY) ? uY(rY, RY.i.BLOCK) : rY && "object" === typeof rY && "animTextures" in rY ? uY((0, FY.g)(rY), RY.i.BLOCK) : null;
        var rY
      }, vY = aY(2);
      return vY ? {
        top: vY,
        left: null !== (rY = aY(4)) && void 0 !== rY ? rY : vY,
        right: null !== (DY = aY(0)) && void 0 !== DY ? DY : vY
      } : null
    }

    function iY(YY) {
      var rY;
      const DY = AY.o[YY];
      return uY(null !== (rY = null === DY || void 0 === DY ? void 0 : DY.itemTexture) && void 0 !== rY ? rY : "string" === typeof(null === DY || void 0 === DY ? void 0 : DY.textureInfo) ? DY.textureInfo : YY, RY.i.ITEM)
    }

    function yY(YY) {
      var rY, DY;
      return AY.o[YY] ? null !== (rY = null === (DY = sY(YY)) || void 0 === DY ? void 0 : DY.top) && void 0 !== rY ? rY : iY(YY) : null
    }

    function QY(YY) {
      return uY(YY, RY.i.ICON)
    }

    function oY(YY) {
      try {
        return DY(2886)(`./${YY}.png`)
      } catch {
        return vY(YY), null
      }
    }
  },
  36427: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);