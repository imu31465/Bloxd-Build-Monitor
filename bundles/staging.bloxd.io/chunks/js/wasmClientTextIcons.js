export const id = 58;
export const ids = [58];
export const modules = {
  41674: (YY, rY, DY) => {
    var FY = {
      "./Air Walk.png": 41679,
      "./Antlers Bonus.png": 41681,
      "./Arrow Damage Enchantment.png": 41689,
      "./Arrow Speed Enchantment.png": 41694,
      "./Attack Speed Enchantment.png": 41702,
      "./Blindness.png": 41711,
      "./Boating.png": 41714,
      "./Bounciness.png": 41717,
      "./Brain Rot.png": 41720,
      "./Break Speed Enchantment.png": 41724,
      "./Bunny Hop.png": 41731,
      "./Critical Damage Enchantment.png": 41733,
      "./Cross.png": 41741,
      "./Damage Enchantment.png": 41750,
      "./Damage Reduction.png": 41757,
      "./Damage.png": 41763,
      "./Digging Aura Enchantment.png": 41768,
      "./Dotted Friendship.png": 41771,
      "./Double Jump.png": 41776,
      "./Double Poop.png": 41783,
      "./Draugr Knight Head.png": 41786,
      "./Draugr Warper Head.png": 41795,
      "./Empty Hunger.png": 41800,
      "./FallDamage.png": 41806,
      "./Farming Aura Enchantment.png": 41815,
      "./Farming Yield Enchantment.png": 41823,
      "./Feather Falling.png": 41826,
      "./Feed Aura.png": 41829,
      "./Firecracker Boost Enchantment.png": 41832,
      "./Firecracker Cooldown Enchantment.png": 41837,
      "./Fist.png": 41845,
      "./Friends.png": 41848,
      "./Friendship.png": 41856,
      "./Frozen.png": 41860,
      "./Gliding Speed Enchantment.png": 41863,
      "./Gliding.png": 41871,
      "./Glowing.png": 41880,
      "./Haste.png": 41889,
      "./Healing Pulse.png": 41897,
      "./Health Enchantment.png": 41904,
      "./Health Regen Enchantment.png": 41906,
      "./Health Regen.png": 41908,
      "./Health.png": 41911,
      "./HealthShield.png": 41918,
      "./Heat Resistance.png": 41923,
      "./Horizontal Knockback Enchantment.png": 41927,
      "./Hunger.png": 41936,
      "./Hydrated.png": 41938,
      "./Invisible.png": 41946,
      "./Irradiated.png": 41955,
      "./Jump Boost.png": 41958,
      "./Knockback Resist Enchantment.png": 41967,
      "./Lifesteal.png": 41969,
      "./Lumber Aura Enchantment.png": 41977,
      "./Magma Golem Head.png": 41984,
      "./Max Health.png": 41989,
      "./Mining Aura Enchantment.png": 41996,
      "./Mining Yield Enchantment.png": 41999,
      "./Mining Yield.png": 42002,
      "./Mob Slayer.png": 42009,
      "./Mob Yield.png": 42018,
      "./Momentum Enchantment.png": 42023,
      "./Mystery Fish.png": 42029,
      "./Night Vision.png": 42038,
      "./Obsidian Boating.png": 42045,
      "./Pack Leader.png": 42053,
      "./Pickpocketer.png": 42061,
      "./Pixelated Heart.png": 42063,
      "./Poison Claws.png": 42065,
      "./Poisoned.png": 42071,
      "./Poopy.png": 42073,
      "./Protection Enchantment.png": 42079,
      "./Question Mark.png": 42082,
      "./Quick Charge Enchantment.png": 42089,
      "./Rainbow Wool.png": 42093,
      "./Rested Aura.png": 42097,
      "./Rested Damage.png": 42101,
      "./Rested Farming Yield.png": 42104,
      "./Rested Haste.png": 42106,
      "./Rested Speed.png": 42113,
      "./Riding Speed.png": 42119,
      "./Riding.png": 42127,
      "./Self Yield.png": 42131,
      "./Slowness.png": 42138,
      "./Speed.png": 42146,
      "./Stomp Damage Enchantment.png": 42154,
      "./Thief.png": 42158,
      "./Thorns.png": 42163,
      "./Trader Black.png": 42169,
      "./Trader Blue.png": 42174,
      "./Trader Piggy.png": 42176,
      "./Vertical Knockback Enchantment.png": 42179,
      "./VoidJump.png": 42187,
      "./Wall Climbing.png": 42195,
      "./Weakness.png": 42197,
      "./X-Ray Vision.png": 42206
    };

    function AY(YY) {
      var rY = IY(YY);
      return DY(rY)
    }

    function IY(YY) {
      if (!DY.o(FY, YY)) {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }
      return FY[YY]
    }
    AY.keys = function() {
      return Object.keys(FY)
    }, AY.resolve = IY, YY.exports = AY, AY.id = 41674
  },
  42220: (YY, rY, DY) => {
    var FY = {
      "./arrow.png": 42225,
      "./bubble.png": 42228,
      "./critical_hit.png": 42231,
      "./drift.png": 42238,
      "./effect_5.png": 42243,
      "./fishingFishSilhouette.png": 42248,
      "./generic_2.png": 42256,
      "./glint.png": 42263,
      "./heart.png": 42271,
      "./scary_face.png": 42278,
      "./soul_0.png": 42286,
      "./square_particle.png": 42290,
      "./z-particle.png": 42295
    };

    function AY(YY) {
      var rY = IY(YY);
      return DY(rY)
    }

    function IY(YY) {
      if (!DY.o(FY, YY)) {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }
      return FY[YY]
    }
    AY.keys = function() {
      return Object.keys(FY)
    }, AY.resolve = IY, YY.exports = AY, AY.id = 42220
  },
  41672: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      blockTextureUrl: () => iY,
      followBundledTextures: () => OY,
      ingameIconUrl: () => uY,
      itemSpriteUrl: () => vY,
      notFoundUrl: () => sY,
      particleUrl: () => yY
    });
    var FY = DY(39862),
      AY = DY(1818),
      IY = DY(2785),
      RY = DY(2764);

    function OY() {
      (0, IY.r)((() => {
        (0, AY.e)()
      }))
    }

    function gY(YY, rY) {
      const DY = (0, IY.n)();
      if (null === DY) return null;
      try {
        return DY.getDefaultTexture(YY, rY).url
      } catch {
        return null
      }
    }

    function aY(YY, rY) {
      return `${DY.p}${YY}${encodeURIComponent(rY)}.png`
    }

    function vY(YY) {
      var rY;
      const DY = "static/items/f8c148434246a2c1/";
      return (0, FY.d)(YY) ? null !== (rY = function(YY) {
        return gY(YY, RY.e.ITEM)
      }(YY)) && void 0 !== rY ? rY : aY(DY, YY) : null
    }

    function uY(YY) {
      try {
        return DY(41674)(`./${YY}.png`)
      } catch {
        return null
      }
    }

    function sY() {
      return DY(42213)
    }

    function iY(YY) {
      var rY;
      const DY = "static/blocks/b5f33a3f7a665ddf/";
      return YY.includes("[") ? null : null !== (rY = function(YY) {
        return gY(YY, RY.e.BLOCK)
      }(YY)) && void 0 !== rY ? rY : aY(DY, YY)
    }

    function yY(YY) {
      try {
        return DY(42220)(`./${YY}.png`)
      } catch {
        return null
      }
    }
  },
  41679: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41681: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41689: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41694: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41702: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41711: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41714: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41717: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41720: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41724: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41731: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41733: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41741: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41750: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41757: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41763: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41768: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41771: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41776: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41783: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41786: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41795: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41800: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41806: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41815: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41823: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41826: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41829: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41832: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41837: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41845: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41848: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41856: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41860: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41863: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41871: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41880: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41889: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41897: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41904: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41906: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41908: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  41911: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  41918: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  41923: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  41927: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  41936: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  41938: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  41946: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  41955: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  41958: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  41967: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  41969: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  41977: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  41984: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  41989: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  41996: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  41999: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42002: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42009: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42018: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42023: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42029: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42038: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42045: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42053: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42061: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42063: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42065: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42071: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42073: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42079: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42082: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42089: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42093: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42097: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42101: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42104: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42106: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42113: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42119: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42127: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42131: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42138: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42146: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42154: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42158: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42163: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42169: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42174: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42176: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42179: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42187: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42195: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42197: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42206: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42225: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42228: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42231: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42238: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42243: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42248: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42256: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42263: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42271: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42278: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42286: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42290: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42295: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42213: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);