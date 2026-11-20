export const id = 220;
export const ids = [220];
export const modules = {
  38878: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      getBlockFaces: () => Pb,
      getIngameIconUrl: () => Rb,
      getItemIconUrl: () => jb,
      getItemTextureUrl: () => Xb,
      getParticleTextureUrl: () => kb
    });
    var Ab = Ub(4139),
      Mb = Ub(36359),
      Tb = Ub(8998),
      Eb = Ub(2884);
    const Yb = new Set,
      Bb = new Set;
    let eb = null;

    function vb(bb) {
      Yb.has(bb) || (Yb.add(bb), Bb.add(bb), eb ??= setTimeout((() => {
        console.warn(`Docs gallery: no default texture for ${Bb.size} names`, [...Bb]), Bb.clear(), eb = null
      }), 1e3))
    }

    function Lb(bb, ab) {
      try {
        return (0, Tb.getDefaultTexture)(bb, ab).url
      } catch {
        return vb(bb), null
      }
    }

    function Pb(bb) {
      var ab, Ub;
      const Tb = Mb.g[bb];
      if (!Tb || Tb.itemTexture || !Tb.textureInfo) return null;
      const {
        textureInfo: Yb,
        texturePerSide: Bb
      } = Tb, eb = bb => {
        return "string" === typeof(ab = Bb && Array.isArray(Yb) ? Yb[Bb[bb]] : Yb) ? Lb(ab, Eb.h.BLOCK) : ab && "object" === typeof ab && "animTextures" in ab ? Lb((0, Ab.h)(ab), Eb.h.BLOCK) : null;
        var ab
      }, vb = eb(2);
      return vb ? {
        top: vb,
        left: null !== (ab = eb(4)) && void 0 !== ab ? ab : vb,
        right: null !== (Ub = eb(0)) && void 0 !== Ub ? Ub : vb
      } : null
    }

    function Xb(bb) {
      var ab;
      const Ub = Mb.g[bb];
      return Lb(null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.itemTexture) && void 0 !== ab ? ab : "string" === typeof(null === Ub || void 0 === Ub ? void 0 : Ub.textureInfo) ? Ub.textureInfo : bb, Eb.h.ITEM)
    }

    function jb(bb) {
      var ab, Ub;
      return Mb.g[bb] ? null !== (ab = null === (Ub = Pb(bb)) || void 0 === Ub ? void 0 : Ub.top) && void 0 !== ab ? ab : Xb(bb) : null
    }

    function Rb(bb) {
      return Lb(bb, Eb.h.ICON)
    }

    function kb(bb) {
      try {
        return Ub(3013)(`./${bb}.png`)
      } catch {
        return vb(bb), null
      }
    }
  },
  36373: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    const Ab = {
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
for (const bb in modules) Object.freeze(modules[bb]);