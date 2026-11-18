export const id = 54;
export const ids = [54];
export const modules = {
  41285: (JJ, cJ, ZJ) => {
    var FJ = {
      "./Air Walk.png": 41292,
      "./Antlers Bonus.png": 41294,
      "./Arrow Damage Enchantment.png": 41301,
      "./Arrow Speed Enchantment.png": 41306,
      "./Attack Speed Enchantment.png": 41311,
      "./Blindness.png": 41315,
      "./Boating.png": 41324,
      "./Bounciness.png": 41328,
      "./Brain Rot.png": 41337,
      "./Break Speed Enchantment.png": 41341,
      "./Bunny Hop.png": 41345,
      "./Critical Damage Enchantment.png": 41347,
      "./Cross.png": 41354,
      "./Damage Enchantment.png": 41362,
      "./Damage Reduction.png": 41366,
      "./Damage.png": 41369,
      "./Digging Aura Enchantment.png": 41371,
      "./Dotted Friendship.png": 41379,
      "./Double Jump.png": 41386,
      "./Double Poop.png": 41391,
      "./Draugr Knight Head.png": 41399,
      "./Draugr Warper Head.png": 41405,
      "./Empty Hunger.png": 41409,
      "./FallDamage.png": 41414,
      "./Farming Aura Enchantment.png": 41419,
      "./Farming Yield Enchantment.png": 41427,
      "./Feather Falling.png": 41435,
      "./Feed Aura.png": 41443,
      "./Firecracker Boost Enchantment.png": 41449,
      "./Firecracker Cooldown Enchantment.png": 41452,
      "./Fist.png": 41461,
      "./Friends.png": 41468,
      "./Friendship.png": 41477,
      "./Frozen.png": 41481,
      "./Gliding Speed Enchantment.png": 41489,
      "./Gliding.png": 41491,
      "./Glowing.png": 41493,
      "./Haste.png": 41497,
      "./Healing Pulse.png": 41500,
      "./Health Enchantment.png": 41504,
      "./Health Regen Enchantment.png": 41511,
      "./Health Regen.png": 41520,
      "./Health.png": 41523,
      "./HealthShield.png": 41532,
      "./Heat Resistance.png": 41540,
      "./Horizontal Knockback Enchantment.png": 41545,
      "./Hunger.png": 41550,
      "./Hydrated.png": 41553,
      "./Invisible.png": 41557,
      "./Irradiated.png": 41564,
      "./Jump Boost.png": 41567,
      "./Knockback Resist Enchantment.png": 41571,
      "./Lifesteal.png": 41577,
      "./Lumber Aura Enchantment.png": 41581,
      "./Magma Golem Head.png": 41589,
      "./Max Health.png": 41597,
      "./Mining Aura Enchantment.png": 41604,
      "./Mining Yield Enchantment.png": 41613,
      "./Mining Yield.png": 41621,
      "./Mob Slayer.png": 41628,
      "./Mob Yield.png": 41634,
      "./Momentum Enchantment.png": 41639,
      "./Mystery Fish.png": 41643,
      "./Night Vision.png": 41645,
      "./Obsidian Boating.png": 41649,
      "./Pack Leader.png": 41656,
      "./Pickpocketer.png": 41658,
      "./Pixelated Heart.png": 41666,
      "./Poison Claws.png": 41669,
      "./Poisoned.png": 41672,
      "./Poopy.png": 41678,
      "./Protection Enchantment.png": 41685,
      "./Question Mark.png": 41694,
      "./Quick Charge Enchantment.png": 41703,
      "./Rainbow Wool.png": 41705,
      "./Rested Aura.png": 41708,
      "./Rested Damage.png": 41716,
      "./Rested Farming Yield.png": 41719,
      "./Rested Haste.png": 41727,
      "./Rested Speed.png": 41733,
      "./Riding Speed.png": 41738,
      "./Riding.png": 41746,
      "./Self Yield.png": 41750,
      "./Slowness.png": 41756,
      "./Speed.png": 41760,
      "./Stomp Damage Enchantment.png": 41763,
      "./Thief.png": 41768,
      "./Thorns.png": 41774,
      "./Trader Black.png": 41778,
      "./Trader Blue.png": 41780,
      "./Trader Piggy.png": 41784,
      "./Vertical Knockback Enchantment.png": 41790,
      "./VoidJump.png": 41792,
      "./Wall Climbing.png": 41796,
      "./Weakness.png": 41805,
      "./X-Ray Vision.png": 41808
    };

    function UJ(JJ) {
      var cJ = eJ(JJ);
      return ZJ(cJ)
    }

    function eJ(JJ) {
      if (!ZJ.o(FJ, JJ)) {
        var cJ = new Error("Cannot find module '" + JJ + "'");
        throw cJ.code = "MODULE_NOT_FOUND", cJ
      }
      return FJ[JJ]
    }
    UJ.keys = function() {
      return Object.keys(FJ)
    }, UJ.resolve = eJ, JJ.exports = UJ, UJ.id = 41285
  },
  41817: (JJ, cJ, ZJ) => {
    var FJ = {
      "./arrow.png": 41825,
      "./bubble.png": 41828,
      "./critical_hit.png": 41837,
      "./drift.png": 41844,
      "./effect_5.png": 41848,
      "./fishingFishSilhouette.png": 41856,
      "./generic_2.png": 41864,
      "./glint.png": 41871,
      "./heart.png": 41873,
      "./scary_face.png": 41881,
      "./soul_0.png": 41883,
      "./square_particle.png": 41890,
      "./z-particle.png": 41895
    };

    function UJ(JJ) {
      var cJ = eJ(JJ);
      return ZJ(cJ)
    }

    function eJ(JJ) {
      if (!ZJ.o(FJ, JJ)) {
        var cJ = new Error("Cannot find module '" + JJ + "'");
        throw cJ.code = "MODULE_NOT_FOUND", cJ
      }
      return FJ[JJ]
    }
    UJ.keys = function() {
      return Object.keys(FJ)
    }, UJ.resolve = eJ, JJ.exports = UJ, UJ.id = 41817
  },
  41282: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      blockTextureUrl: () => sJ,
      followBundledTextures: () => AJ,
      ingameIconUrl: () => hJ,
      itemSpriteUrl: () => YJ,
      notFoundUrl: () => DJ,
      particleUrl: () => nJ
    });
    var FJ = ZJ(39508),
      UJ = ZJ(1717),
      eJ = ZJ(2675),
      XJ = ZJ(2654);

    function AJ() {
      (0, eJ.t)((() => {
        (0, UJ.b)()
      }))
    }

    function qJ(JJ, cJ) {
      const ZJ = (0, eJ.p)();
      if (null === ZJ) return null;
      try {
        return ZJ.getDefaultTexture(JJ, cJ).url
      } catch {
        return null
      }
    }

    function jJ(JJ, cJ) {
      return `${ZJ.p}${JJ}${encodeURIComponent(cJ)}.png`
    }

    function YJ(JJ) {
      var cJ;
      const ZJ = "static/items/f8c148434246a2c1/";
      return (0, FJ.c)(JJ) ? null !== (cJ = function(JJ) {
        return qJ(JJ, XJ.e.ITEM)
      }(JJ)) && void 0 !== cJ ? cJ : jJ(ZJ, JJ) : null
    }

    function hJ(JJ) {
      try {
        return ZJ(41285)(`./${JJ}.png`)
      } catch {
        return null
      }
    }

    function DJ() {
      return ZJ(41810)
    }

    function sJ(JJ) {
      var cJ;
      const ZJ = "static/blocks/b5f33a3f7a665ddf/";
      return JJ.includes("[") ? null : null !== (cJ = function(JJ) {
        return qJ(JJ, XJ.e.BLOCK)
      }(JJ)) && void 0 !== cJ ? cJ : jJ(ZJ, JJ)
    }

    function nJ(JJ) {
      try {
        return ZJ(41817)(`./${JJ}.png`)
      } catch {
        return null
      }
    }
  },
  41292: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41294: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41301: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41306: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41311: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41315: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41324: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41328: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41337: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41341: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41345: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41347: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41354: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41362: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41366: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41369: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41371: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41379: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41386: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41391: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41399: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41405: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41409: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41414: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41419: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41427: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41435: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41443: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41449: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41452: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41461: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41468: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41477: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41481: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41489: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41491: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41493: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41497: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41500: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41504: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41511: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41520: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  41523: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  41532: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  41540: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  41545: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  41550: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  41553: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  41557: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  41564: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  41567: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  41571: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  41577: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  41581: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  41589: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  41597: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  41604: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  41613: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  41621: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  41628: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  41634: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  41639: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  41643: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  41645: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  41649: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  41656: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  41658: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  41666: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  41669: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  41672: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  41678: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  41685: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  41694: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  41703: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  41705: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  41708: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  41716: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  41719: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  41727: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  41733: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  41738: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  41746: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  41750: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  41756: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  41760: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  41763: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  41768: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  41774: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  41778: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  41780: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  41784: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  41790: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  41792: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  41796: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  41805: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  41808: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  41825: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  41828: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  41837: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  41844: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  41848: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  41856: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  41864: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  41871: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  41873: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  41881: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  41883: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  41890: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  41895: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  41810: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);