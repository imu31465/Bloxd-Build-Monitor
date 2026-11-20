export const id = 58;
export const ids = [58];
export const modules = {
  41979: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      blockTextureUrl: () => uU,
      followBundledTextures: () => TU,
      ingameIconUrl: () => GU,
      itemSpriteUrl: () => cU,
      notFoundUrl: () => jU,
      particleUrl: () => CU
    });
    var tU = gU(40140),
      pU = gU(1808),
      EU = gU(2886),
      PU = gU(2858);

    function TU() {
      (0, EU.r)((() => {
        (0, pU.c)()
      }))
    }

    function qU(UU, RU) {
      const gU = (0, EU.n)();
      if (null === gU) return null;
      try {
        return gU.getDefaultTexture(UU, RU).url
      } catch {
        return null
      }
    }

    function KU(UU, RU) {
      return `${gU.p}${UU}${encodeURIComponent(RU)}.png`
    }

    function cU(UU) {
      var RU;
      const gU = "static/items/f8c148434246a2c1/";
      return (0, tU.c)(UU) ? null !== (RU = function(UU) {
        return qU(UU, PU.g.ITEM)
      }(UU)) && void 0 !== RU ? RU : KU(gU, UU) : null
    }

    function GU(UU) {
      try {
        return gU(41981)(`./${UU}.png`)
      } catch {
        return null
      }
    }

    function jU() {
      return gU(42497)
    }

    function uU(UU) {
      var RU;
      const gU = "static/blocks/b5f33a3f7a665ddf/";
      return UU.includes("[") ? null : null !== (RU = function(UU) {
        return qU(UU, PU.g.BLOCK)
      }(UU)) && void 0 !== RU ? RU : KU(gU, UU)
    }

    function CU(UU) {
      try {
        return gU(42502)(`./${UU}.png`)
      } catch {
        return null
      }
    }
  },
  41981: (UU, RU, gU) => {
    var tU = {
      "./Air Walk.png": 41983,
      "./Antlers Bonus.png": 41986,
      "./Arrow Damage Enchantment.png": 41995,
      "./Arrow Speed Enchantment.png": 42001,
      "./Attack Speed Enchantment.png": 42007,
      "./Blindness.png": 42013,
      "./Boating.png": 42015,
      "./Bounciness.png": 42022,
      "./Brain Rot.png": 42028,
      "./Break Speed Enchantment.png": 42030,
      "./Bunny Hop.png": 42037,
      "./Critical Damage Enchantment.png": 42043,
      "./Cross.png": 42051,
      "./Damage Enchantment.png": 42059,
      "./Damage Reduction.png": 42064,
      "./Damage.png": 42067,
      "./Digging Aura Enchantment.png": 42070,
      "./Dotted Friendship.png": 42078,
      "./Double Jump.png": 42080,
      "./Double Poop.png": 42086,
      "./Draugr Knight Head.png": 42092,
      "./Draugr Warper Head.png": 42099,
      "./Empty Hunger.png": 42103,
      "./FallDamage.png": 42110,
      "./Farming Aura Enchantment.png": 42114,
      "./Farming Yield Enchantment.png": 42121,
      "./Feather Falling.png": 42127,
      "./Feed Aura.png": 42134,
      "./Firecracker Boost Enchantment.png": 42136,
      "./Firecracker Cooldown Enchantment.png": 42144,
      "./Fist.png": 42151,
      "./Friends.png": 42155,
      "./Friendship.png": 42161,
      "./Frozen.png": 42169,
      "./Gliding Speed Enchantment.png": 42174,
      "./Gliding.png": 42177,
      "./Glowing.png": 42180,
      "./Haste.png": 42189,
      "./Healing Pulse.png": 42192,
      "./Health Enchantment.png": 42200,
      "./Health Regen Enchantment.png": 42208,
      "./Health Regen.png": 42214,
      "./Health.png": 42217,
      "./HealthShield.png": 42223,
      "./Heat Resistance.png": 42232,
      "./Horizontal Knockback Enchantment.png": 42238,
      "./Hunger.png": 42242,
      "./Hydrated.png": 42251,
      "./Invisible.png": 42256,
      "./Irradiated.png": 42259,
      "./Jump Boost.png": 42265,
      "./Knockback Resist Enchantment.png": 42269,
      "./Lifesteal.png": 42276,
      "./Lumber Aura Enchantment.png": 42278,
      "./Magma Golem Head.png": 42280,
      "./Max Health.png": 42289,
      "./Mining Aura Enchantment.png": 42292,
      "./Mining Yield Enchantment.png": 42295,
      "./Mining Yield.png": 42301,
      "./Mob Slayer.png": 42306,
      "./Mob Yield.png": 42312,
      "./Momentum Enchantment.png": 42317,
      "./Mystery Fish.png": 42319,
      "./Night Vision.png": 42325,
      "./Obsidian Boating.png": 42332,
      "./Pack Leader.png": 42335,
      "./Pickpocketer.png": 42339,
      "./Pixelated Heart.png": 42345,
      "./Poison Claws.png": 42353,
      "./Poisoned.png": 42358,
      "./Poopy.png": 42367,
      "./Protection Enchantment.png": 42373,
      "./Question Mark.png": 42381,
      "./Quick Charge Enchantment.png": 42385,
      "./Rainbow Wool.png": 42387,
      "./Rested Aura.png": 42392,
      "./Rested Damage.png": 42396,
      "./Rested Farming Yield.png": 42399,
      "./Rested Haste.png": 42408,
      "./Rested Speed.png": 42412,
      "./Riding Speed.png": 42419,
      "./Riding.png": 42422,
      "./Self Yield.png": 42429,
      "./Slowness.png": 42433,
      "./Speed.png": 42439,
      "./Stomp Damage Enchantment.png": 42445,
      "./Thief.png": 42454,
      "./Thorns.png": 42460,
      "./Trader Black.png": 42464,
      "./Trader Blue.png": 42467,
      "./Trader Piggy.png": 42473,
      "./Vertical Knockback Enchantment.png": 42476,
      "./VoidJump.png": 42481,
      "./Wall Climbing.png": 42484,
      "./Weakness.png": 42486,
      "./X-Ray Vision.png": 42494
    };

    function pU(UU) {
      var RU = EU(UU);
      return gU(RU)
    }

    function EU(UU) {
      if (!gU.o(tU, UU)) {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }
      return tU[UU]
    }
    pU.keys = function() {
      return Object.keys(tU)
    }, pU.resolve = EU, UU.exports = pU, pU.id = 41981
  },
  42502: (UU, RU, gU) => {
    var tU = {
      "./arrow.png": 42506,
      "./bubble.png": 42513,
      "./critical_hit.png": 42522,
      "./drift.png": 42527,
      "./effect_5.png": 42530,
      "./fishingFishSilhouette.png": 42534,
      "./generic_2.png": 42536,
      "./glint.png": 42540,
      "./heart.png": 42548,
      "./scary_face.png": 42557,
      "./soul_0.png": 42559,
      "./square_particle.png": 42562,
      "./z-particle.png": 42569
    };

    function pU(UU) {
      var RU = EU(UU);
      return gU(RU)
    }

    function EU(UU) {
      if (!gU.o(tU, UU)) {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }
      return tU[UU]
    }
    pU.keys = function() {
      return Object.keys(tU)
    }, pU.resolve = EU, UU.exports = pU, pU.id = 42502
  },
  41983: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41986: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41995: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42001: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42007: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42013: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42015: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42022: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42028: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42030: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42037: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42043: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42051: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42059: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42064: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42067: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42070: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42078: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42080: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42086: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42092: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42099: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42103: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42110: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42114: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42121: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42127: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42134: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42136: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42144: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42151: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42155: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42161: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42169: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42174: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42177: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42180: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42189: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42192: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42200: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42208: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42214: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42217: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42223: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42232: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42238: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42242: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42251: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42256: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42259: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42265: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42269: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42276: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42278: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42280: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42289: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42292: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42295: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42301: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42306: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42312: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42317: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42319: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42325: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42332: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42335: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42339: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42345: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42353: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42358: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42367: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42373: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42381: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42385: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42387: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42392: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42396: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42399: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42408: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42412: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42419: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42422: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42429: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42433: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42439: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42445: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42454: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42460: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42464: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42467: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42473: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42476: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42481: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42484: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42486: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42494: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42506: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42513: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42522: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42527: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42530: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42534: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42536: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42540: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42548: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42557: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42559: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42562: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42569: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42497: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);