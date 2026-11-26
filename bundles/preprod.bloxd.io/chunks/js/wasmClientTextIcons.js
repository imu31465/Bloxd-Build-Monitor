export const id = 73;
export const ids = [73];
export const modules = {
  42487: (HH, BH, LH) => {
    var AH = {
      "./Air Walk.png": 42493,
      "./Antlers Bonus.png": 42495,
      "./Arrow Damage Enchantment.png": 42501,
      "./Arrow Speed Enchantment.png": 42503,
      "./Attack Speed Enchantment.png": 42511,
      "./Blindness.png": 42514,
      "./Boating.png": 42519,
      "./Bounciness.png": 42525,
      "./Brain Rot.png": 42532,
      "./Break Speed Enchantment.png": 42539,
      "./Bunny Hop.png": 42544,
      "./Critical Damage Enchantment.png": 42547,
      "./Cross.png": 42549,
      "./Damage Enchantment.png": 42555,
      "./Damage Reduction.png": 42558,
      "./Damage.png": 42565,
      "./Digging Aura Enchantment.png": 42569,
      "./Dotted Friendship.png": 42575,
      "./Double Jump.png": 42584,
      "./Double Poop.png": 42591,
      "./Draugr Knight Head.png": 42600,
      "./Draugr Warper Head.png": 42606,
      "./Empty Hunger.png": 42612,
      "./FallDamage.png": 42621,
      "./Farming Aura Enchantment.png": 42626,
      "./Farming Yield Enchantment.png": 42635,
      "./Feather Falling.png": 42641,
      "./Feed Aura.png": 42647,
      "./Firecracker Boost Enchantment.png": 42656,
      "./Firecracker Cooldown Enchantment.png": 42665,
      "./Fist.png": 42667,
      "./Friends.png": 42669,
      "./Friendship.png": 42672,
      "./Frozen.png": 42677,
      "./Gliding Speed Enchantment.png": 42684,
      "./Gliding.png": 42691,
      "./Glowing.png": 42699,
      "./Haste.png": 42701,
      "./Healing Pulse.png": 42707,
      "./Health Enchantment.png": 42712,
      "./Health Regen Enchantment.png": 42718,
      "./Health Regen.png": 42723,
      "./Health.png": 42727,
      "./HealthShield.png": 42735,
      "./Heat Resistance.png": 42743,
      "./Horizontal Knockback Enchantment.png": 42749,
      "./Hunger.png": 42753,
      "./Hydrated.png": 42761,
      "./Invisible.png": 42767,
      "./Irradiated.png": 42771,
      "./Jump Boost.png": 42773,
      "./Knockback Resist Enchantment.png": 42782,
      "./Lifesteal.png": 42788,
      "./Lumber Aura Enchantment.png": 42794,
      "./Magma Golem Head.png": 42799,
      "./Max Health.png": 42808,
      "./Mining Aura Enchantment.png": 42812,
      "./Mining Yield Enchantment.png": 42816,
      "./Mining Yield.png": 42818,
      "./Mob Slayer.png": 42826,
      "./Mob Yield.png": 42829,
      "./Momentum Enchantment.png": 42834,
      "./Mystery Fish.png": 42839,
      "./Night Vision.png": 42846,
      "./Obsidian Boating.png": 42850,
      "./Pack Leader.png": 42855,
      "./Pickpocketer.png": 42864,
      "./Pixelated Heart.png": 42870,
      "./Poison Claws.png": 42874,
      "./Poisoned.png": 42879,
      "./Poopy.png": 42888,
      "./Protection Enchantment.png": 42890,
      "./Question Mark.png": 42892,
      "./Quick Charge Enchantment.png": 42894,
      "./Rainbow Wool.png": 42898,
      "./Rested Aura.png": 42900,
      "./Rested Damage.png": 42906,
      "./Rested Farming Yield.png": 42908,
      "./Rested Haste.png": 42914,
      "./Rested Speed.png": 42920,
      "./Riding Speed.png": 42923,
      "./Riding.png": 42927,
      "./Self Yield.png": 42932,
      "./Slowness.png": 42938,
      "./Speed.png": 42945,
      "./Stomp Damage Enchantment.png": 42948,
      "./Thief.png": 42957,
      "./Thorns.png": 42959,
      "./Trader Black.png": 42967,
      "./Trader Blue.png": 42973,
      "./Trader Piggy.png": 42979,
      "./Vertical Knockback Enchantment.png": 42984,
      "./VoidJump.png": 42991,
      "./Wall Climbing.png": 42993,
      "./Weakness.png": 42996,
      "./X-Ray Vision.png": 43005
    };

    function rH(HH) {
      var BH = SH(HH);
      return LH(BH)
    }

    function SH(HH) {
      if (!LH.o(AH, HH)) {
        var BH = new Error("Cannot find module '" + HH + "'");
        throw BH.code = "MODULE_NOT_FOUND", BH
      }
      return AH[HH]
    }
    rH.keys = function() {
      return Object.keys(AH)
    }, rH.resolve = SH, HH.exports = rH, rH.id = 42487
  },
  43020: (HH, BH, LH) => {
    var AH = {
      "./arrow.png": 43027,
      "./bubble.png": 43032,
      "./critical_hit.png": 43035,
      "./drift.png": 43040,
      "./effect_5.png": 43043,
      "./fishingFishSilhouette.png": 43050,
      "./generic_2.png": 43059,
      "./glint.png": 43063,
      "./heart.png": 43070,
      "./scary_face.png": 43078,
      "./snowflake.png": 43084,
      "./soul_0.png": 43090,
      "./square_particle.png": 43097,
      "./z-particle.png": 43101
    };

    function rH(HH) {
      var BH = SH(HH);
      return LH(BH)
    }

    function SH(HH) {
      if (!LH.o(AH, HH)) {
        var BH = new Error("Cannot find module '" + HH + "'");
        throw BH.code = "MODULE_NOT_FOUND", BH
      }
      return AH[HH]
    }
    rH.keys = function() {
      return Object.keys(AH)
    }, rH.resolve = SH, HH.exports = rH, rH.id = 43020
  },
  42483: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      blockTextureUrl: () => YH,
      followBundledTextures: () => tH,
      ingameIconUrl: () => XH,
      itemSpriteUrl: () => EH,
      notFoundUrl: () => GH,
      particleUrl: () => uH
    });
    var AH = LH(37174),
      rH = LH(2010),
      SH = LH(2215),
      hH = LH(3519);

    function tH() {
      (0, SH.o)((() => {
        (0, rH.e)()
      }))
    }

    function zH(HH, BH) {
      const LH = (0, SH.l)();
      if (null === LH) return null;
      try {
        return LH.getDefaultTexture(HH, BH).url
      } catch {
        return null
      }
    }

    function CH(HH, BH) {
      return `${LH.p}${HH}${encodeURIComponent(BH)}.png`
    }

    function EH(HH) {
      var BH;
      const LH = "static/items/1a4d1f22bd315291/";
      return (0, AH.d)(HH) ? null !== (BH = function(HH) {
        return zH(HH, hH.g.ITEM)
      }(HH)) && void 0 !== BH ? BH : CH(LH, HH) : null
    }

    function XH(HH) {
      try {
        return LH(42487)(`./${HH}.png`)
      } catch {
        return null
      }
    }

    function GH() {
      return LH(43014)
    }

    function YH(HH) {
      var BH;
      const LH = "static/blocks/b5f33a3f7a665ddf/";
      return HH.includes("[") ? null : null !== (BH = function(HH) {
        return zH(HH, hH.g.BLOCK)
      }(HH)) && void 0 !== BH ? BH : CH(LH, HH)
    }

    function uH(HH) {
      try {
        return LH(43020)(`./${HH}.png`)
      } catch {
        return null
      }
    }
  },
  42493: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42495: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42501: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42503: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42511: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42514: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42519: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42525: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42532: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42539: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42544: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42547: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42549: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42555: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42558: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42565: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42569: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42575: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42584: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42591: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42600: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42606: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42612: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42621: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42626: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42635: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42641: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42647: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42656: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42665: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42667: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42669: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42672: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42677: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42684: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42691: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42699: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42701: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42707: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42712: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42718: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42723: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42727: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42735: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42743: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42749: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42753: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42761: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42767: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42771: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42773: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42782: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42788: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42794: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42799: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42808: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42812: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42816: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42818: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42826: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42829: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42834: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42839: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42846: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42850: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42855: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42864: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42870: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42874: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42879: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42888: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42890: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42892: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42894: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42898: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42900: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42906: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42908: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42914: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42920: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42923: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42927: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42932: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42938: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42945: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42948: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42957: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42959: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42967: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42973: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42979: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42984: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42991: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42993: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42996: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  43005: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  43027: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  43032: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  43035: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  43040: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  43043: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  43050: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  43059: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  43063: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  43070: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  43078: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  43084: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  43090: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  43097: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  43101: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  43014: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);