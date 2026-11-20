export const id = 58;
export const ids = [58];
export const modules = {
  42183: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      blockTextureUrl: () => xu,
      followBundledTextures: () => Ju,
      ingameIconUrl: () => ru,
      itemSpriteUrl: () => Vu,
      notFoundUrl: () => Bu,
      particleUrl: () => Su
    });
    var Eu = yu(40328),
      Ku = yu(1867),
      Qu = yu(2990),
      mu = yu(2955);

    function Ju() {
      (0, Qu.p)((() => {
        (0, Ku.d)()
      }))
    }

    function Nu(uu, Ru) {
      const yu = (0, Qu.o)();
      if (null === yu) return null;
      try {
        return yu.getDefaultTexture(uu, Ru).url
      } catch {
        return null
      }
    }

    function Xu(uu, Ru) {
      return `${yu.p}${uu}${encodeURIComponent(Ru)}.png`
    }

    function Vu(uu) {
      var Ru;
      const yu = "static/items/f8c148434246a2c1/";
      return (0, Eu.d)(uu) ? null !== (Ru = function(uu) {
        return Nu(uu, mu.f.ITEM)
      }(uu)) && void 0 !== Ru ? Ru : Xu(yu, uu) : null
    }

    function ru(uu) {
      try {
        return yu(42192)(`./${uu}.png`)
      } catch {
        return null
      }
    }

    function Bu() {
      return yu(42716)
    }

    function xu(uu) {
      var Ru;
      const yu = "static/blocks/b5f33a3f7a665ddf/";
      return uu.includes("[") ? null : null !== (Ru = function(uu) {
        return Nu(uu, mu.f.BLOCK)
      }(uu)) && void 0 !== Ru ? Ru : Xu(yu, uu)
    }

    function Su(uu) {
      try {
        return yu(42725)(`./${uu}.png`)
      } catch {
        return null
      }
    }
  },
  42192: (uu, Ru, yu) => {
    var Eu = {
      "./Air Walk.png": 42196,
      "./Antlers Bonus.png": 42199,
      "./Arrow Damage Enchantment.png": 42203,
      "./Arrow Speed Enchantment.png": 42207,
      "./Attack Speed Enchantment.png": 42212,
      "./Blindness.png": 42215,
      "./Boating.png": 42220,
      "./Bounciness.png": 42228,
      "./Brain Rot.png": 42234,
      "./Break Speed Enchantment.png": 42239,
      "./Bunny Hop.png": 42245,
      "./Critical Damage Enchantment.png": 42253,
      "./Cross.png": 42255,
      "./Damage Enchantment.png": 42259,
      "./Damage Reduction.png": 42266,
      "./Damage.png": 42273,
      "./Digging Aura Enchantment.png": 42278,
      "./Dotted Friendship.png": 42283,
      "./Double Jump.png": 42291,
      "./Double Poop.png": 42299,
      "./Draugr Knight Head.png": 42305,
      "./Draugr Warper Head.png": 42309,
      "./Empty Hunger.png": 42312,
      "./FallDamage.png": 42320,
      "./Farming Aura Enchantment.png": 42323,
      "./Farming Yield Enchantment.png": 42332,
      "./Feather Falling.png": 42338,
      "./Feed Aura.png": 42342,
      "./Firecracker Boost Enchantment.png": 42349,
      "./Firecracker Cooldown Enchantment.png": 42354,
      "./Fist.png": 42359,
      "./Friends.png": 42366,
      "./Friendship.png": 42372,
      "./Frozen.png": 42379,
      "./Gliding Speed Enchantment.png": 42388,
      "./Gliding.png": 42392,
      "./Glowing.png": 42394,
      "./Haste.png": 42401,
      "./Healing Pulse.png": 42406,
      "./Health Enchantment.png": 42415,
      "./Health Regen Enchantment.png": 42424,
      "./Health Regen.png": 42432,
      "./Health.png": 42439,
      "./HealthShield.png": 42448,
      "./Heat Resistance.png": 42450,
      "./Horizontal Knockback Enchantment.png": 42456,
      "./Hunger.png": 42458,
      "./Hydrated.png": 42462,
      "./Invisible.png": 42468,
      "./Irradiated.png": 42477,
      "./Jump Boost.png": 42479,
      "./Knockback Resist Enchantment.png": 42481,
      "./Lifesteal.png": 42485,
      "./Lumber Aura Enchantment.png": 42491,
      "./Magma Golem Head.png": 42497,
      "./Max Health.png": 42504,
      "./Mining Aura Enchantment.png": 42509,
      "./Mining Yield Enchantment.png": 42514,
      "./Mining Yield.png": 42519,
      "./Mob Slayer.png": 42525,
      "./Mob Yield.png": 42530,
      "./Momentum Enchantment.png": 42534,
      "./Mystery Fish.png": 42539,
      "./Night Vision.png": 42542,
      "./Obsidian Boating.png": 42551,
      "./Pack Leader.png": 42558,
      "./Pickpocketer.png": 42561,
      "./Pixelated Heart.png": 42568,
      "./Poison Claws.png": 42575,
      "./Poisoned.png": 42579,
      "./Poopy.png": 42585,
      "./Protection Enchantment.png": 42587,
      "./Question Mark.png": 42589,
      "./Quick Charge Enchantment.png": 42597,
      "./Rainbow Wool.png": 42601,
      "./Rested Aura.png": 42603,
      "./Rested Damage.png": 42606,
      "./Rested Farming Yield.png": 42611,
      "./Rested Haste.png": 42619,
      "./Rested Speed.png": 42625,
      "./Riding Speed.png": 42628,
      "./Riding.png": 42632,
      "./Self Yield.png": 42636,
      "./Slowness.png": 42645,
      "./Speed.png": 42650,
      "./Stomp Damage Enchantment.png": 42654,
      "./Thief.png": 42657,
      "./Thorns.png": 42660,
      "./Trader Black.png": 42669,
      "./Trader Blue.png": 42676,
      "./Trader Piggy.png": 42683,
      "./Vertical Knockback Enchantment.png": 42688,
      "./VoidJump.png": 42690,
      "./Wall Climbing.png": 42698,
      "./Weakness.png": 42704,
      "./X-Ray Vision.png": 42709
    };

    function Ku(uu) {
      var Ru = Qu(uu);
      return yu(Ru)
    }

    function Qu(uu) {
      if (!yu.o(Eu, uu)) {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }
      return Eu[uu]
    }
    Ku.keys = function() {
      return Object.keys(Eu)
    }, Ku.resolve = Qu, uu.exports = Ku, Ku.id = 42192
  },
  42725: (uu, Ru, yu) => {
    var Eu = {
      "./arrow.png": 42733,
      "./bubble.png": 42741,
      "./critical_hit.png": 42746,
      "./drift.png": 42753,
      "./effect_5.png": 42760,
      "./fishingFishSilhouette.png": 42762,
      "./generic_2.png": 42769,
      "./glint.png": 42774,
      "./heart.png": 42779,
      "./scary_face.png": 42787,
      "./soul_0.png": 42795,
      "./square_particle.png": 42798,
      "./z-particle.png": 42806
    };

    function Ku(uu) {
      var Ru = Qu(uu);
      return yu(Ru)
    }

    function Qu(uu) {
      if (!yu.o(Eu, uu)) {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }
      return Eu[uu]
    }
    Ku.keys = function() {
      return Object.keys(Eu)
    }, Ku.resolve = Qu, uu.exports = Ku, Ku.id = 42725
  },
  42196: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42199: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42203: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42207: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42212: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42215: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42220: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42228: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42234: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42239: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42245: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42253: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42255: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42259: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42266: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42273: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42278: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42283: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42291: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42299: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42305: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42309: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42312: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42320: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42323: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42332: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42338: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42342: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42349: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42354: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42359: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42366: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42372: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42379: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42388: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42392: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42394: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42401: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42406: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42415: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42424: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42432: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42439: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42448: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42450: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42456: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42458: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42462: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42468: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42477: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42479: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42481: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42485: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42491: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42497: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42504: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42509: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42514: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42519: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42525: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42530: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42534: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42539: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42542: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42551: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42558: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42561: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42568: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42575: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42579: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42585: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42587: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42589: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42597: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42601: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42603: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42606: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42611: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42619: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42625: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42628: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42632: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42636: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42645: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42650: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42654: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42657: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42660: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42669: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42676: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42683: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42688: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42690: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42698: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42704: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42709: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42733: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42741: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42746: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42753: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42760: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42762: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42769: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42774: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42779: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42787: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42795: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42798: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42806: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42716: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);