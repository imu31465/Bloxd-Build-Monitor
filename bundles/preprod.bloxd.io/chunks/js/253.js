export const id = 253;
export const ids = [253];
export const modules = {
  40803: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      getBlockFaces: () => zB,
      getIngameIconUrl: () => qB,
      getItemIconUrl: () => pB,
      getItemTextureUrl: () => lB,
      getParticleTextureUrl: () => ZB
    });
    var YB = GB(4886),
      DB = GB(37723),
      QB = GB(9921),
      oB = GB(3580);
    const jB = new Set,
      yB = new Set;
    let JB = null;

    function MB(BB) {
      jB.has(BB) || (jB.add(BB), yB.add(BB), JB ??= setTimeout((() => {
        console.warn(`Docs gallery: no default texture for ${yB.size} names`, [...yB]), yB.clear(), JB = null
      }), 1e3))
    }

    function PB(BB, OB) {
      try {
        return (0, QB.getDefaultTexture)(BB, OB).url
      } catch {
        return MB(BB), null
      }
    }

    function zB(BB) {
      var OB, GB;
      const QB = DB.p[BB];
      if (!QB || QB.itemTexture || !QB.textureInfo) return null;
      const {
        textureInfo: jB,
        texturePerSide: yB
      } = QB, JB = BB => {
        return "string" === typeof(OB = yB && Array.isArray(jB) ? jB[yB[BB]] : jB) ? PB(OB, oB.h.BLOCK) : OB && "object" === typeof OB && "animTextures" in OB ? PB((0, YB.m)(OB), oB.h.BLOCK) : null;
        var OB
      }, MB = JB(2);
      return MB ? {
        top: MB,
        left: null !== (OB = JB(4)) && void 0 !== OB ? OB : MB,
        right: null !== (GB = JB(0)) && void 0 !== GB ? GB : MB
      } : null
    }

    function lB(BB) {
      var OB;
      const GB = DB.p[BB];
      return PB(null !== (OB = null === GB || void 0 === GB ? void 0 : GB.itemTexture) && void 0 !== OB ? OB : "string" === typeof(null === GB || void 0 === GB ? void 0 : GB.textureInfo) ? GB.textureInfo : BB, oB.h.ITEM)
    }

    function pB(BB) {
      var OB, GB;
      return DB.p[BB] ? null !== (OB = null === (GB = zB(BB)) || void 0 === GB ? void 0 : GB.top) && void 0 !== OB ? OB : lB(BB) : null
    }

    function qB(BB) {
      return PB(BB, oB.h.ICON)
    }

    function ZB(BB) {
      try {
        return GB(3730)(`./${BB}.png`)
      } catch {
        return MB(BB), null
      }
    }
  },
  37753: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = {
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
for (const BB in modules) Object.freeze(modules[BB]);