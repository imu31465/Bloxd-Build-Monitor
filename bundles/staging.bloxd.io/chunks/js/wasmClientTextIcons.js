export const id = 62;
export const ids = [62];
export const modules = {
  60688: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      blockTextureUrl: () => FB,
      followBundledTextures: () => vB,
      ingameIconUrl: () => hB,
      itemSpriteUrl: () => nB,
      notFoundUrl: () => zB,
      particleUrl: () => NB
    });
    var TB = ZB(41071),
      JB = ZB(2012),
      oB = ZB(2224),
      GB = ZB(3340);

    function vB() {
      (0, oB.r)((() => {
        (0, JB.d)()
      }))
    }

    function kB(BB, IB) {
      const ZB = (0, oB.p)();
      if (null === ZB) return null;
      try {
        return ZB.getDefaultTexture(BB, IB).url
      } catch {
        return null
      }
    }

    function cB(BB, IB) {
      return `${ZB.p}${BB}${encodeURIComponent(IB)}.png`
    }

    function nB(BB) {
      var IB;
      const ZB = "static/items/8cf6154c6eda6753/";
      return (0, TB.d)(BB) ? null !== (IB = function(BB) {
        return kB(BB, GB.d.ITEM)
      }(BB)) && void 0 !== IB ? IB : cB(ZB, BB) : null
    }

    function hB(BB) {
      try {
        return ZB(60695)(`./${BB}.png`)
      } catch {
        return null
      }
    }

    function zB() {
      return ZB(61215)
    }

    function FB(BB) {
      var IB;
      const ZB = "static/blocks/b5f33a3f7a665ddf/";
      return BB.includes("[") ? null : null !== (IB = function(BB) {
        return kB(BB, GB.d.BLOCK)
      }(BB)) && void 0 !== IB ? IB : cB(ZB, BB)
    }

    function NB(BB) {
      try {
        return ZB(61217)(`./${BB}.png`)
      } catch {
        return null
      }
    }
  },
  60695: (BB, IB, ZB) => {
    var TB = {
      "./Air Walk.png": 60701,
      "./Antlers Bonus.png": 60704,
      "./Arrow Damage Enchantment.png": 60706,
      "./Arrow Speed Enchantment.png": 60712,
      "./Attack Speed Enchantment.png": 60720,
      "./Blindness.png": 60724,
      "./Boating.png": 60728,
      "./Bounciness.png": 60734,
      "./Brain Rot.png": 60738,
      "./Break Speed Enchantment.png": 60741,
      "./Bunny Hop.png": 60748,
      "./Critical Damage Enchantment.png": 60756,
      "./Cross.png": 60760,
      "./Damage Enchantment.png": 60762,
      "./Damage Reduction.png": 60764,
      "./Damage.png": 60766,
      "./Digging Aura Enchantment.png": 60773,
      "./Dotted Friendship.png": 60781,
      "./Double Jump.png": 60790,
      "./Double Poop.png": 60798,
      "./Draugr Knight Head.png": 60805,
      "./Draugr Warper Head.png": 60807,
      "./Empty Hunger.png": 60814,
      "./FallDamage.png": 60823,
      "./Farming Aura Enchantment.png": 60830,
      "./Farming Yield Enchantment.png": 60837,
      "./Feather Falling.png": 60839,
      "./Feed Aura.png": 60843,
      "./Firecracker Boost Enchantment.png": 60850,
      "./Firecracker Cooldown Enchantment.png": 60856,
      "./Fist.png": 60864,
      "./Friends.png": 60869,
      "./Friendship.png": 60875,
      "./Frozen.png": 60884,
      "./Gliding Speed Enchantment.png": 60892,
      "./Gliding.png": 60897,
      "./Glowing.png": 60903,
      "./Haste.png": 60912,
      "./Healing Pulse.png": 60914,
      "./Health Enchantment.png": 60916,
      "./Health Regen Enchantment.png": 60924,
      "./Health Regen.png": 60928,
      "./Health.png": 60934,
      "./HealthShield.png": 60937,
      "./Heat Resistance.png": 60945,
      "./Horizontal Knockback Enchantment.png": 60947,
      "./Hunger.png": 60950,
      "./Hydrated.png": 60958,
      "./Invisible.png": 60964,
      "./Irradiated.png": 60972,
      "./Jump Boost.png": 60976,
      "./Knockback Resist Enchantment.png": 60985,
      "./Lifesteal.png": 60992,
      "./Lumber Aura Enchantment.png": 60995,
      "./Magma Golem Head.png": 60997,
      "./Max Health.png": 60999,
      "./Mining Aura Enchantment.png": 61007,
      "./Mining Yield Enchantment.png": 61009,
      "./Mining Yield.png": 61017,
      "./Mob Slayer.png": 61026,
      "./Mob Yield.png": 61031,
      "./Momentum Enchantment.png": 61034,
      "./Mystery Fish.png": 61041,
      "./Night Vision.png": 61044,
      "./Obsidian Boating.png": 61049,
      "./Pack Leader.png": 61058,
      "./Pickpocketer.png": 61063,
      "./Pixelated Heart.png": 61072,
      "./Poison Claws.png": 61078,
      "./Poisoned.png": 61081,
      "./Poopy.png": 61089,
      "./Protection Enchantment.png": 61092,
      "./Question Mark.png": 61096,
      "./Quick Charge Enchantment.png": 61103,
      "./Rainbow Wool.png": 61107,
      "./Rested Aura.png": 61111,
      "./Rested Damage.png": 61115,
      "./Rested Farming Yield.png": 61122,
      "./Rested Haste.png": 61124,
      "./Rested Speed.png": 61127,
      "./Riding Speed.png": 61130,
      "./Riding.png": 61138,
      "./Self Yield.png": 61145,
      "./Slowness.png": 61151,
      "./Speed.png": 61156,
      "./Stomp Damage Enchantment.png": 61158,
      "./Thief.png": 61161,
      "./Thorns.png": 61168,
      "./Trader Black.png": 61170,
      "./Trader Blue.png": 61175,
      "./Trader Piggy.png": 61184,
      "./Vertical Knockback Enchantment.png": 61187,
      "./VoidJump.png": 61195,
      "./Wall Climbing.png": 61202,
      "./Weakness.png": 61204,
      "./X-Ray Vision.png": 61209
    };

    function JB(BB) {
      var IB = oB(BB);
      return ZB(IB)
    }

    function oB(BB) {
      if (!ZB.o(TB, BB)) {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }
      return TB[BB]
    }
    JB.keys = function() {
      return Object.keys(TB)
    }, JB.resolve = oB, BB.exports = JB, JB.id = 60695
  },
  61217: (BB, IB, ZB) => {
    var TB = {
      "./arrow.png": 61225,
      "./bubble.png": 61233,
      "./critical_hit.png": 61241,
      "./drift.png": 61244,
      "./effect_5.png": 61250,
      "./fishingFishSilhouette.png": 61254,
      "./generic_2.png": 61263,
      "./glint.png": 61267,
      "./heart.png": 61271,
      "./scary_face.png": 61274,
      "./soul_0.png": 61282,
      "./square_particle.png": 61286,
      "./z-particle.png": 61289
    };

    function JB(BB) {
      var IB = oB(BB);
      return ZB(IB)
    }

    function oB(BB) {
      if (!ZB.o(TB, BB)) {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }
      return TB[BB]
    }
    JB.keys = function() {
      return Object.keys(TB)
    }, JB.resolve = oB, BB.exports = JB, JB.id = 61217
  },
  60701: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60704: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60706: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60712: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60720: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60724: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60728: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60734: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60738: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60741: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60748: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60756: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60760: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60762: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60764: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60766: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60773: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60781: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60790: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60798: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60805: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60807: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60814: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60823: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60830: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60837: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60839: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60843: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60850: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60856: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60864: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60869: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60875: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60884: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60892: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60897: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60903: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60912: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60914: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60916: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60924: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60928: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60934: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60937: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60945: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60947: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60950: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60958: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60964: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60972: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60976: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60985: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60992: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60995: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  60997: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  60999: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61007: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61009: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61017: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61026: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61031: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61034: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61041: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61044: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61049: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61058: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61063: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61072: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61078: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61081: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61089: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61092: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61096: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61103: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61107: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61111: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61115: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61122: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61124: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61127: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61130: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61138: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61145: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61151: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61156: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61158: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61161: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61168: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61170: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61175: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61184: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61187: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61195: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61202: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61204: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61209: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61225: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61233: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61241: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61244: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61250: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61254: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61263: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61267: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61271: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61274: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61282: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61286: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61289: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61215: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);