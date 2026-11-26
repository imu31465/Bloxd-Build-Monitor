export const id = 253;
export const ids = [253];
export const modules = {
  41078: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      getBlockFaces: () => GH,
      getIngameIconUrl: () => QH,
      getItemIconUrl: () => uH,
      getItemTextureUrl: () => YH,
      getParticleTextureUrl: () => WH
    });
    var AH = LH(4868),
      rH = LH(37912),
      SH = LH(9938),
      hH = LH(3508);
    const tH = new Set,
      zH = new Set;
    let CH = null;

    function EH(HH) {
      tH.has(HH) || (tH.add(HH), zH.add(HH), CH ??= setTimeout((() => {
        console.warn(`Docs gallery: no default texture for ${zH.size} names`, [...zH]), zH.clear(), CH = null
      }), 1e3))
    }

    function XH(HH, BH) {
      try {
        return (0, SH.getDefaultTexture)(HH, BH).url
      } catch {
        return EH(HH), null
      }
    }

    function GH(HH) {
      var BH, LH;
      const SH = rH.m[HH];
      if (!SH || SH.itemTexture || !SH.textureInfo) return null;
      const {
        textureInfo: tH,
        texturePerSide: zH
      } = SH, CH = HH => {
        return "string" === typeof(BH = zH && Array.isArray(tH) ? tH[zH[HH]] : tH) ? XH(BH, hH.k.BLOCK) : BH && "object" === typeof BH && "animTextures" in BH ? XH((0, AH.k)(BH), hH.k.BLOCK) : null;
        var BH
      }, EH = CH(2);
      return EH ? {
        top: EH,
        left: null !== (BH = CH(4)) && void 0 !== BH ? BH : EH,
        right: null !== (LH = CH(0)) && void 0 !== LH ? LH : EH
      } : null
    }

    function YH(HH) {
      var BH;
      const LH = rH.m[HH];
      return XH(null !== (BH = null === LH || void 0 === LH ? void 0 : LH.itemTexture) && void 0 !== BH ? BH : "string" === typeof(null === LH || void 0 === LH ? void 0 : LH.textureInfo) ? LH.textureInfo : HH, hH.k.ITEM)
    }

    function uH(HH) {
      var BH, LH;
      return rH.m[HH] ? null !== (BH = null === (LH = GH(HH)) || void 0 === LH ? void 0 : LH.top) && void 0 !== BH ? BH : YH(HH) : null
    }

    function QH(HH) {
      return XH(HH, hH.k.ICON)
    }

    function WH(HH) {
      try {
        return LH(3668)(`./${HH}.png`)
      } catch {
        return EH(HH), null
      }
    }
  },
  37941: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = {
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
for (const HH in modules) Object.freeze(modules[HH]);