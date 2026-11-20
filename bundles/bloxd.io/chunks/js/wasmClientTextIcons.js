export const id = 59;
export const ids = [59];
export const modules = {
  42161: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      blockTextureUrl: () => jT,
      followBundledTextures: () => yT,
      ingameIconUrl: () => AT,
      itemSpriteUrl: () => IT,
      notFoundUrl: () => CT,
      particleUrl: () => vT
    });
    var lT = cT(40396),
      MT = cT(1964),
      KT = cT(3125),
      OT = cT(3099);

    function yT() {
      (0, KT.m)((() => {
        (0, MT.b)()
      }))
    }

    function fT(TT, kT) {
      const cT = (0, KT.l)();
      if (null === cT) return null;
      try {
        return cT.getDefaultTexture(TT, kT).url
      } catch {
        return null
      }
    }

    function xT(TT, kT) {
      return `${cT.p}${TT}${encodeURIComponent(kT)}.png`
    }

    function IT(TT) {
      var kT;
      const cT = "static/items/f8c148434246a2c1/";
      return (0, lT.d)(TT) ? null !== (kT = function(TT) {
        return fT(TT, OT.f.ITEM)
      }(TT)) && void 0 !== kT ? kT : xT(cT, TT) : null
    }

    function AT(TT) {
      try {
        return cT(42165)(`./${TT}.png`)
      } catch {
        return null
      }
    }

    function CT() {
      return cT(42668)
    }

    function jT(TT) {
      var kT;
      const cT = "static/blocks/b5f33a3f7a665ddf/";
      return TT.includes("[") ? null : null !== (kT = function(TT) {
        return fT(TT, OT.f.BLOCK)
      }(TT)) && void 0 !== kT ? kT : xT(cT, TT)
    }

    function vT(TT) {
      try {
        return cT(42671)(`./${TT}.png`)
      } catch {
        return null
      }
    }
  },
  42165: (TT, kT, cT) => {
    var lT = {
      "./Air Walk.png": 42173,
      "./Antlers Bonus.png": 42181,
      "./Arrow Damage Enchantment.png": 42190,
      "./Arrow Speed Enchantment.png": 42193,
      "./Attack Speed Enchantment.png": 42202,
      "./Blindness.png": 42211,
      "./Boating.png": 42216,
      "./Bounciness.png": 42219,
      "./Brain Rot.png": 42226,
      "./Break Speed Enchantment.png": 42231,
      "./Bunny Hop.png": 42237,
      "./Critical Damage Enchantment.png": 42239,
      "./Cross.png": 42245,
      "./Damage Enchantment.png": 42251,
      "./Damage Reduction.png": 42258,
      "./Damage.png": 42267,
      "./Digging Aura Enchantment.png": 42272,
      "./Dotted Friendship.png": 42274,
      "./Double Jump.png": 42282,
      "./Double Poop.png": 42284,
      "./Draugr Knight Head.png": 42293,
      "./Draugr Warper Head.png": 42302,
      "./Empty Hunger.png": 42304,
      "./FallDamage.png": 42312,
      "./Farming Aura Enchantment.png": 42320,
      "./Farming Yield Enchantment.png": 42327,
      "./Feather Falling.png": 42330,
      "./Feed Aura.png": 42332,
      "./Firecracker Boost Enchantment.png": 42334,
      "./Firecracker Cooldown Enchantment.png": 42341,
      "./Fist.png": 42343,
      "./Friends.png": 42346,
      "./Friendship.png": 42353,
      "./Frozen.png": 42355,
      "./Gliding Speed Enchantment.png": 42364,
      "./Gliding.png": 42372,
      "./Glowing.png": 42375,
      "./Haste.png": 42381,
      "./Healing Pulse.png": 42383,
      "./Health Enchantment.png": 42388,
      "./Health Regen Enchantment.png": 42391,
      "./Health Regen.png": 42393,
      "./Health.png": 42398,
      "./HealthShield.png": 42407,
      "./Heat Resistance.png": 42409,
      "./Horizontal Knockback Enchantment.png": 42413,
      "./Hunger.png": 42419,
      "./Hydrated.png": 42421,
      "./Invisible.png": 42429,
      "./Irradiated.png": 42433,
      "./Jump Boost.png": 42437,
      "./Knockback Resist Enchantment.png": 42439,
      "./Lifesteal.png": 42445,
      "./Lumber Aura Enchantment.png": 42449,
      "./Magma Golem Head.png": 42453,
      "./Max Health.png": 42462,
      "./Mining Aura Enchantment.png": 42467,
      "./Mining Yield Enchantment.png": 42471,
      "./Mining Yield.png": 42474,
      "./Mob Slayer.png": 42483,
      "./Mob Yield.png": 42485,
      "./Momentum Enchantment.png": 42490,
      "./Mystery Fish.png": 42495,
      "./Night Vision.png": 42502,
      "./Obsidian Boating.png": 42507,
      "./Pack Leader.png": 42513,
      "./Pickpocketer.png": 42517,
      "./Pixelated Heart.png": 42519,
      "./Poison Claws.png": 42526,
      "./Poisoned.png": 42530,
      "./Poopy.png": 42536,
      "./Protection Enchantment.png": 42545,
      "./Question Mark.png": 42552,
      "./Quick Charge Enchantment.png": 42555,
      "./Rainbow Wool.png": 42560,
      "./Rested Aura.png": 42567,
      "./Rested Damage.png": 42571,
      "./Rested Farming Yield.png": 42573,
      "./Rested Haste.png": 42576,
      "./Rested Speed.png": 42578,
      "./Riding Speed.png": 42587,
      "./Riding.png": 42596,
      "./Self Yield.png": 42599,
      "./Slowness.png": 42602,
      "./Speed.png": 42604,
      "./Stomp Damage Enchantment.png": 42608,
      "./Thief.png": 42612,
      "./Thorns.png": 42619,
      "./Trader Black.png": 42628,
      "./Trader Blue.png": 42632,
      "./Trader Piggy.png": 42641,
      "./Vertical Knockback Enchantment.png": 42645,
      "./VoidJump.png": 42647,
      "./Wall Climbing.png": 42650,
      "./Weakness.png": 42652,
      "./X-Ray Vision.png": 42659
    };

    function MT(TT) {
      var kT = KT(TT);
      return cT(kT)
    }

    function KT(TT) {
      if (!cT.o(lT, TT)) {
        var kT = new Error("Cannot find module '" + TT + "'");
        throw kT.code = "MODULE_NOT_FOUND", kT
      }
      return lT[TT]
    }
    MT.keys = function() {
      return Object.keys(lT)
    }, MT.resolve = KT, TT.exports = MT, MT.id = 42165
  },
  42671: (TT, kT, cT) => {
    var lT = {
      "./arrow.png": 42674,
      "./bubble.png": 42679,
      "./critical_hit.png": 42681,
      "./drift.png": 42690,
      "./effect_5.png": 42692,
      "./fishingFishSilhouette.png": 42698,
      "./generic_2.png": 42704,
      "./glint.png": 42709,
      "./heart.png": 42712,
      "./scary_face.png": 42714,
      "./soul_0.png": 42716,
      "./square_particle.png": 42718,
      "./z-particle.png": 42727
    };

    function MT(TT) {
      var kT = KT(TT);
      return cT(kT)
    }

    function KT(TT) {
      if (!cT.o(lT, TT)) {
        var kT = new Error("Cannot find module '" + TT + "'");
        throw kT.code = "MODULE_NOT_FOUND", kT
      }
      return lT[TT]
    }
    MT.keys = function() {
      return Object.keys(lT)
    }, MT.resolve = KT, TT.exports = MT, MT.id = 42671
  },
  42173: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42181: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42190: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42193: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42202: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42211: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42216: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42219: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42226: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42231: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42237: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42239: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42245: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42251: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42258: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42267: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42272: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42274: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42282: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42284: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42293: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42302: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42304: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42312: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42320: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42327: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42330: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42332: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42334: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42341: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42343: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42346: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42353: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42355: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42364: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42372: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42375: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42381: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42383: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42388: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42391: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42393: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42398: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42407: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42409: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42413: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42419: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42421: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42429: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42433: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42437: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42439: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42445: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42449: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42453: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42462: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42467: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42471: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42474: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42483: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42485: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42490: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42495: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42502: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42507: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42513: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42517: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42519: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42526: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42530: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42536: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42545: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42552: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42555: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42560: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42567: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42571: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42573: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42576: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42578: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42587: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42596: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42599: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42602: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42604: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42608: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42612: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42619: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42628: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42632: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42641: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42645: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42647: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42650: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42652: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42659: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42674: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42679: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42681: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42690: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42692: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42698: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42704: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42709: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42712: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42714: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42716: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42718: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42727: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42668: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);