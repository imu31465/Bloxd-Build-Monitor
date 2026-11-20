export const id = 221;
export const ids = [221];
export const modules = {
  39111: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      getBlockFaces: () => Wv,
      getIngameIconUrl: () => sv,
      getItemIconUrl: () => av,
      getItemTextureUrl: () => wv,
      getParticleTextureUrl: () => Cv
    });
    var hv = Pv(4209),
      Sv = Pv(36542),
      ev = Pv(9099),
      gv = Pv(2940);
    const pv = new Set,
      dv = new Set;
    let Nv = null;

    function lv(vv) {
      pv.has(vv) || (pv.add(vv), dv.add(vv), Nv ??= setTimeout((() => {
        console.warn(`Docs gallery: no default texture for ${dv.size} names`, [...dv]), dv.clear(), Nv = null
      }), 1e3))
    }

    function Tv(vv, zv) {
      try {
        return (0, ev.getDefaultTexture)(vv, zv).url
      } catch {
        return lv(vv), null
      }
    }

    function Wv(vv) {
      var zv, Pv;
      const ev = Sv.r[vv];
      if (!ev || ev.itemTexture || !ev.textureInfo) return null;
      const {
        textureInfo: pv,
        texturePerSide: dv
      } = ev, Nv = vv => {
        return "string" === typeof(zv = dv && Array.isArray(pv) ? pv[dv[vv]] : pv) ? Tv(zv, gv.f.BLOCK) : zv && "object" === typeof zv && "animTextures" in zv ? Tv((0, hv.h)(zv), gv.f.BLOCK) : null;
        var zv
      }, lv = Nv(2);
      return lv ? {
        top: lv,
        left: null !== (zv = Nv(4)) && void 0 !== zv ? zv : lv,
        right: null !== (Pv = Nv(0)) && void 0 !== Pv ? Pv : lv
      } : null
    }

    function wv(vv) {
      var zv;
      const Pv = Sv.r[vv];
      return Tv(null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.itemTexture) && void 0 !== zv ? zv : "string" === typeof(null === Pv || void 0 === Pv ? void 0 : Pv.textureInfo) ? Pv.textureInfo : vv, gv.f.ITEM)
    }

    function av(vv) {
      var zv, Pv;
      return Sv.r[vv] ? null !== (zv = null === (Pv = Wv(vv)) || void 0 === Pv ? void 0 : Pv.top) && void 0 !== zv ? zv : wv(vv) : null
    }

    function sv(vv) {
      return Tv(vv, gv.f.ICON)
    }

    function Cv(vv) {
      try {
        return Pv(3055)(`./${vv}.png`)
      } catch {
        return lv(vv), null
      }
    }
  },
  36568: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    const hv = {
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
for (const vv in modules) Object.freeze(modules[vv]);