export const id = 245;
export const ids = [245];
export const modules = {
  40906: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      getBlockFaces: () => NU,
      getIngameIconUrl: () => aU,
      getItemIconUrl: () => pU,
      getItemTextureUrl: () => IU,
      getParticleTextureUrl: () => tU
    });
    var cU = zU(4895),
      yU = zU(37756),
      QU = zU(9775),
      AU = zU(3526);
    const FU = new Set,
      oU = new Set;
    let DU = null;

    function EU(UU) {
      FU.has(UU) || (FU.add(UU), oU.add(UU), DU ??= setTimeout((() => {
        console.warn(`Docs gallery: no default texture for ${oU.size} names`, [...oU]), oU.clear(), DU = null
      }), 1e3))
    }

    function YU(UU, XU) {
      try {
        return (0, QU.getDefaultTexture)(UU, XU).url
      } catch {
        return EU(UU), null
      }
    }

    function NU(UU) {
      var XU, zU;
      const QU = yU.n[UU];
      if (!QU || QU.itemTexture || !QU.textureInfo) return null;
      const {
        textureInfo: FU,
        texturePerSide: oU
      } = QU, DU = UU => {
        return "string" === typeof(XU = oU && Array.isArray(FU) ? FU[oU[UU]] : FU) ? YU(XU, AU.j.BLOCK) : XU && "object" === typeof XU && "animTextures" in XU ? YU((0, cU.i)(XU), AU.j.BLOCK) : null;
        var XU
      }, EU = DU(2);
      return EU ? {
        top: EU,
        left: null !== (XU = DU(4)) && void 0 !== XU ? XU : EU,
        right: null !== (zU = DU(0)) && void 0 !== zU ? zU : EU
      } : null
    }

    function IU(UU) {
      var XU;
      const zU = yU.n[UU];
      return YU(null !== (XU = null === zU || void 0 === zU ? void 0 : zU.itemTexture) && void 0 !== XU ? XU : "string" === typeof(null === zU || void 0 === zU ? void 0 : zU.textureInfo) ? zU.textureInfo : UU, AU.j.ITEM)
    }

    function pU(UU) {
      var XU, zU;
      return yU.n[UU] ? null !== (XU = null === (zU = NU(UU)) || void 0 === zU ? void 0 : zU.top) && void 0 !== XU ? XU : IU(UU) : null
    }

    function aU(UU) {
      return YU(UU, AU.j.ICON)
    }

    function tU(UU) {
      try {
        return zU(3690)(`./${UU}.png`)
      } catch {
        return EU(UU), null
      }
    }
  },
  37794: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = {
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
for (const UU in modules) Object.freeze(modules[UU]);