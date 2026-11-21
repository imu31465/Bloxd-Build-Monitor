export const id = 221;
export const ids = [221];
export const modules = {
  39193: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      getBlockFaces: () => bQ,
      getIngameIconUrl: () => AQ,
      getItemIconUrl: () => xQ,
      getItemTextureUrl: () => YQ,
      getParticleTextureUrl: () => tQ
    });
    var LQ = wQ(4308),
      qQ = wQ(36646),
      oQ = wQ(9192),
      DQ = wQ(3045);
    const kQ = new Set,
      vQ = new Set;
    let mQ = null;

    function uQ(QQ) {
      kQ.has(QQ) || (kQ.add(QQ), vQ.add(QQ), mQ ??= setTimeout((() => {
        console.warn(`Docs gallery: no default texture for ${vQ.size} names`, [...vQ]), vQ.clear(), mQ = null
      }), 1e3))
    }

    function HQ(QQ, FQ) {
      try {
        return (0, oQ.getDefaultTexture)(QQ, FQ).url
      } catch {
        return uQ(QQ), null
      }
    }

    function bQ(QQ) {
      var FQ, wQ;
      const oQ = qQ.q[QQ];
      if (!oQ || oQ.itemTexture || !oQ.textureInfo) return null;
      const {
        textureInfo: kQ,
        texturePerSide: vQ
      } = oQ, mQ = QQ => {
        return "string" === typeof(FQ = vQ && Array.isArray(kQ) ? kQ[vQ[QQ]] : kQ) ? HQ(FQ, DQ.i.BLOCK) : FQ && "object" === typeof FQ && "animTextures" in FQ ? HQ((0, LQ.q)(FQ), DQ.i.BLOCK) : null;
        var FQ
      }, uQ = mQ(2);
      return uQ ? {
        top: uQ,
        left: null !== (FQ = mQ(4)) && void 0 !== FQ ? FQ : uQ,
        right: null !== (wQ = mQ(0)) && void 0 !== wQ ? wQ : uQ
      } : null
    }

    function YQ(QQ) {
      var FQ;
      const wQ = qQ.q[QQ];
      return HQ(null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.itemTexture) && void 0 !== FQ ? FQ : "string" === typeof(null === wQ || void 0 === wQ ? void 0 : wQ.textureInfo) ? wQ.textureInfo : QQ, DQ.i.ITEM)
    }

    function xQ(QQ) {
      var FQ, wQ;
      return qQ.q[QQ] ? null !== (FQ = null === (wQ = bQ(QQ)) || void 0 === wQ ? void 0 : wQ.top) && void 0 !== FQ ? FQ : YQ(QQ) : null
    }

    function AQ(QQ) {
      return HQ(QQ, DQ.i.ICON)
    }

    function tQ(QQ) {
      try {
        return wQ(3176)(`./${QQ}.png`)
      } catch {
        return uQ(QQ), null
      }
    }
  },
  36672: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    const LQ = {
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
for (const QQ in modules) Object.freeze(modules[QQ]);