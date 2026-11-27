export const id = 74;
export const ids = [74];
export const modules = {
  42669: (WW, iW, OW) => {
    var mW = {
      "./Air Walk.png": 42673,
      "./Antlers Bonus.png": 42678,
      "./Arrow Damage Enchantment.png": 42684,
      "./Arrow Speed Enchantment.png": 42691,
      "./Attack Speed Enchantment.png": 42700,
      "./Blindness.png": 42709,
      "./Boating.png": 42717,
      "./Bounciness.png": 42719,
      "./Brain Rot.png": 42723,
      "./Break Speed Enchantment.png": 42730,
      "./Bunny Hop.png": 42732,
      "./Critical Damage Enchantment.png": 42734,
      "./Cross.png": 42738,
      "./Damage Enchantment.png": 42747,
      "./Damage Reduction.png": 42753,
      "./Damage.png": 42760,
      "./Digging Aura Enchantment.png": 42765,
      "./Dotted Friendship.png": 42768,
      "./Double Jump.png": 42774,
      "./Double Poop.png": 42776,
      "./Draugr Knight Head.png": 42785,
      "./Draugr Warper Head.png": 42792,
      "./Empty Hunger.png": 42799,
      "./FallDamage.png": 42805,
      "./Farming Aura Enchantment.png": 42813,
      "./Farming Yield Enchantment.png": 42816,
      "./Feather Falling.png": 42824,
      "./Feed Aura.png": 42828,
      "./Firecracker Boost Enchantment.png": 42832,
      "./Firecracker Cooldown Enchantment.png": 42841,
      "./Fist.png": 42846,
      "./Friends.png": 42848,
      "./Friendship.png": 42855,
      "./Frozen.png": 42860,
      "./Gliding Speed Enchantment.png": 42867,
      "./Gliding.png": 42870,
      "./Glowing.png": 42878,
      "./Haste.png": 42883,
      "./Healing Pulse.png": 42888,
      "./Health Enchantment.png": 42896,
      "./Health Regen Enchantment.png": 42904,
      "./Health Regen.png": 42910,
      "./Health.png": 42919,
      "./HealthShield.png": 42923,
      "./Heat Resistance.png": 42927,
      "./Horizontal Knockback Enchantment.png": 42936,
      "./Hunger.png": 42944,
      "./Hydrated.png": 42946,
      "./Invisible.png": 42949,
      "./Irradiated.png": 42951,
      "./Jump Boost.png": 42959,
      "./Knockback Resist Enchantment.png": 42961,
      "./Lifesteal.png": 42969,
      "./Lumber Aura Enchantment.png": 42972,
      "./Magma Golem Head.png": 42981,
      "./Max Health.png": 42987,
      "./Mining Aura Enchantment.png": 42992,
      "./Mining Yield Enchantment.png": 42999,
      "./Mining Yield.png": 43004,
      "./Mob Slayer.png": 43006,
      "./Mob Yield.png": 43008,
      "./Momentum Enchantment.png": 43010,
      "./Mystery Fish.png": 43014,
      "./Night Vision.png": 43021,
      "./Obsidian Boating.png": 43029,
      "./Pack Leader.png": 43038,
      "./Pickpocketer.png": 43046,
      "./Pixelated Heart.png": 43048,
      "./Poison Claws.png": 43055,
      "./Poisoned.png": 43057,
      "./Poopy.png": 43059,
      "./Protection Enchantment.png": 43066,
      "./Question Mark.png": 43072,
      "./Quick Charge Enchantment.png": 43079,
      "./Rainbow Wool.png": 43088,
      "./Rested Aura.png": 43096,
      "./Rested Damage.png": 43103,
      "./Rested Farming Yield.png": 43111,
      "./Rested Haste.png": 43115,
      "./Rested Speed.png": 43121,
      "./Riding Speed.png": 43129,
      "./Riding.png": 43131,
      "./Self Yield.png": 43140,
      "./Slowness.png": 43144,
      "./Speed.png": 43152,
      "./Stomp Damage Enchantment.png": 43158,
      "./Thief.png": 43164,
      "./Thorns.png": 43173,
      "./Trader Black.png": 43177,
      "./Trader Blue.png": 43181,
      "./Trader Piggy.png": 43190,
      "./Vertical Knockback Enchantment.png": 43193,
      "./VoidJump.png": 43200,
      "./Wall Climbing.png": 43205,
      "./Weakness.png": 43208,
      "./X-Ray Vision.png": 43215
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 42669
  },
  43226: (WW, iW, OW) => {
    var mW = {
      "./arrow.png": 43228,
      "./bubble.png": 43231,
      "./critical_hit.png": 43236,
      "./drift.png": 43240,
      "./effect_5.png": 43248,
      "./fishingFishSilhouette.png": 43252,
      "./generic_2.png": 43257,
      "./glint.png": 43262,
      "./heart.png": 43267,
      "./scary_face.png": 43272,
      "./snowflake.png": 43274,
      "./soul_0.png": 43277,
      "./square_particle.png": 43279,
      "./z-particle.png": 43288
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 43226
  },
  42663: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      blockTextureUrl: () => lW,
      followBundledTextures: () => LW,
      ingameIconUrl: () => ZW,
      itemSpriteUrl: () => tW,
      notFoundUrl: () => xW,
      particleUrl: () => AW
    });
    var mW = OW(37444),
      EW = OW(2047),
      NW = OW(2283),
      PW = OW(4356);

    function LW() {
      (0, NW.s)((() => {
        (0, EW.b)()
      }))
    }

    function cW(WW, iW) {
      const OW = (0, NW.o)();
      if (null === OW) return null;
      try {
        return OW.getDefaultTexture(WW, iW).url
      } catch {
        return null
      }
    }

    function wW(WW, iW) {
      return `${OW.p}${WW}${encodeURIComponent(iW)}.png`
    }

    function tW(WW) {
      var iW;
      const OW = "static/items/ebe659c2e2d3ef4e/";
      return (0, mW.b)(WW) ? null !== (iW = function(WW) {
        return cW(WW, PW.h.ITEM)
      }(WW)) && void 0 !== iW ? iW : wW(OW, WW) : null
    }

    function ZW(WW) {
      try {
        return OW(42669)(`./${WW}.png`)
      } catch {
        return null
      }
    }

    function xW() {
      return OW(43223)
    }

    function lW(WW) {
      var iW;
      const OW = "static/blocks/b5f33a3f7a665ddf/";
      return WW.includes("[") ? null : null !== (iW = function(WW) {
        return cW(WW, PW.h.BLOCK)
      }(WW)) && void 0 !== iW ? iW : wW(OW, WW)
    }

    function AW(WW) {
      try {
        return OW(43226)(`./${WW}.png`)
      } catch {
        return null
      }
    }
  },
  42673: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42678: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42684: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42691: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42700: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42709: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42717: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42719: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42723: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42730: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42732: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42734: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42738: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42747: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42753: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42760: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42765: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42768: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42774: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42776: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42785: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42792: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42799: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42805: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42813: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42816: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42824: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42828: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42832: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42841: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42846: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42848: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42855: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42860: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42867: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42870: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42878: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42883: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42888: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42896: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42904: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42910: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42919: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42923: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42927: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42936: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42944: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42946: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42949: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42951: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42959: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42961: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42969: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42972: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42981: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42987: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42992: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42999: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  43004: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  43006: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  43008: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  43010: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  43014: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  43021: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  43029: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  43038: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  43046: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  43048: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  43055: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  43057: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  43059: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  43066: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  43072: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  43079: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  43088: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  43096: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  43103: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  43111: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  43115: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  43121: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  43129: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  43131: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  43140: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  43144: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  43152: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  43158: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  43164: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  43173: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  43177: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  43181: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  43190: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  43193: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  43200: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  43205: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  43208: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  43215: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  43228: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  43231: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  43236: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  43240: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  43248: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  43252: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  43257: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  43262: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  43267: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  43272: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  43274: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  43277: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  43279: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  43288: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  43223: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);