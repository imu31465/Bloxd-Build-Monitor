export const id = 62;
export const ids = [62];
export const modules = {
  60874: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      blockTextureUrl: () => Nu,
      followBundledTextures: () => lu,
      ingameIconUrl: () => bu,
      itemSpriteUrl: () => Cu,
      notFoundUrl: () => cu,
      particleUrl: () => Ou
    });
    var su = ju(41264),
      Uu = ju(1999),
      Zu = ju(2222),
      Xu = ju(3346);

    function lu() {
      (0, Zu.q)((() => {
        (0, Uu.c)()
      }))
    }

    function qu(uu, Eu) {
      const ju = (0, Zu.m)();
      if (null === ju) return null;
      try {
        return ju.getDefaultTexture(uu, Eu).url
      } catch {
        return null
      }
    }

    function fu(uu, Eu) {
      return `${ju.p}${uu}${encodeURIComponent(Eu)}.png`
    }

    function Cu(uu) {
      var Eu;
      const ju = "static/items/8cf6154c6eda6753/";
      return (0, su.e)(uu) ? null !== (Eu = function(uu) {
        return qu(uu, Xu.e.ITEM)
      }(uu)) && void 0 !== Eu ? Eu : fu(ju, uu) : null
    }

    function bu(uu) {
      try {
        return ju(60881)(`./${uu}.png`)
      } catch {
        return null
      }
    }

    function cu() {
      return ju(61389)
    }

    function Nu(uu) {
      var Eu;
      const ju = "static/blocks/b5f33a3f7a665ddf/";
      return uu.includes("[") ? null : null !== (Eu = function(uu) {
        return qu(uu, Xu.e.BLOCK)
      }(uu)) && void 0 !== Eu ? Eu : fu(ju, uu)
    }

    function Ou(uu) {
      try {
        return ju(61392)(`./${uu}.png`)
      } catch {
        return null
      }
    }
  },
  60881: (uu, Eu, ju) => {
    var su = {
      "./Air Walk.png": 60890,
      "./Antlers Bonus.png": 60895,
      "./Arrow Damage Enchantment.png": 60903,
      "./Arrow Speed Enchantment.png": 60912,
      "./Attack Speed Enchantment.png": 60914,
      "./Blindness.png": 60920,
      "./Boating.png": 60922,
      "./Bounciness.png": 60930,
      "./Brain Rot.png": 60933,
      "./Break Speed Enchantment.png": 60939,
      "./Bunny Hop.png": 60946,
      "./Critical Damage Enchantment.png": 60949,
      "./Cross.png": 60953,
      "./Damage Enchantment.png": 60956,
      "./Damage Reduction.png": 60961,
      "./Damage.png": 60968,
      "./Digging Aura Enchantment.png": 60973,
      "./Dotted Friendship.png": 60980,
      "./Double Jump.png": 60982,
      "./Double Poop.png": 60989,
      "./Draugr Knight Head.png": 60993,
      "./Draugr Warper Head.png": 60997,
      "./Empty Hunger.png": 61e3,
      "./FallDamage.png": 61003,
      "./Farming Aura Enchantment.png": 61011,
      "./Farming Yield Enchantment.png": 61019,
      "./Feather Falling.png": 61023,
      "./Feed Aura.png": 61032,
      "./Firecracker Boost Enchantment.png": 61035,
      "./Firecracker Cooldown Enchantment.png": 61040,
      "./Fist.png": 61049,
      "./Friends.png": 61055,
      "./Friendship.png": 61063,
      "./Frozen.png": 61066,
      "./Gliding Speed Enchantment.png": 61070,
      "./Gliding.png": 61072,
      "./Glowing.png": 61079,
      "./Haste.png": 61082,
      "./Healing Pulse.png": 61084,
      "./Health Enchantment.png": 61086,
      "./Health Regen Enchantment.png": 61093,
      "./Health Regen.png": 61098,
      "./Health.png": 61101,
      "./HealthShield.png": 61107,
      "./Heat Resistance.png": 61116,
      "./Horizontal Knockback Enchantment.png": 61124,
      "./Hunger.png": 61130,
      "./Hydrated.png": 61135,
      "./Invisible.png": 61140,
      "./Irradiated.png": 61142,
      "./Jump Boost.png": 61151,
      "./Knockback Resist Enchantment.png": 61155,
      "./Lifesteal.png": 61161,
      "./Lumber Aura Enchantment.png": 61169,
      "./Magma Golem Head.png": 61172,
      "./Max Health.png": 61174,
      "./Mining Aura Enchantment.png": 61179,
      "./Mining Yield Enchantment.png": 61181,
      "./Mining Yield.png": 61188,
      "./Mob Slayer.png": 61196,
      "./Mob Yield.png": 61204,
      "./Momentum Enchantment.png": 61208,
      "./Mystery Fish.png": 61212,
      "./Night Vision.png": 61217,
      "./Obsidian Boating.png": 61219,
      "./Pack Leader.png": 61227,
      "./Pickpocketer.png": 61233,
      "./Pixelated Heart.png": 61237,
      "./Poison Claws.png": 61245,
      "./Poisoned.png": 61248,
      "./Poopy.png": 61253,
      "./Protection Enchantment.png": 61260,
      "./Question Mark.png": 61263,
      "./Quick Charge Enchantment.png": 61266,
      "./Rainbow Wool.png": 61269,
      "./Rested Aura.png": 61277,
      "./Rested Damage.png": 61282,
      "./Rested Farming Yield.png": 61284,
      "./Rested Haste.png": 61289,
      "./Rested Speed.png": 61293,
      "./Riding Speed.png": 61297,
      "./Riding.png": 61301,
      "./Self Yield.png": 61309,
      "./Slowness.png": 61311,
      "./Speed.png": 61315,
      "./Stomp Damage Enchantment.png": 61321,
      "./Thief.png": 61328,
      "./Thorns.png": 61330,
      "./Trader Black.png": 61337,
      "./Trader Blue.png": 61346,
      "./Trader Piggy.png": 61351,
      "./Vertical Knockback Enchantment.png": 61359,
      "./VoidJump.png": 61368,
      "./Wall Climbing.png": 61373,
      "./Weakness.png": 61381,
      "./X-Ray Vision.png": 61383
    };

    function Uu(uu) {
      var Eu = Zu(uu);
      return ju(Eu)
    }

    function Zu(uu) {
      if (!ju.o(su, uu)) {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }
      return su[uu]
    }
    Uu.keys = function() {
      return Object.keys(su)
    }, Uu.resolve = Zu, uu.exports = Uu, Uu.id = 60881
  },
  61392: (uu, Eu, ju) => {
    var su = {
      "./arrow.png": 61401,
      "./bubble.png": 61404,
      "./critical_hit.png": 61407,
      "./drift.png": 61409,
      "./effect_5.png": 61418,
      "./fishingFishSilhouette.png": 61423,
      "./generic_2.png": 61432,
      "./glint.png": 61439,
      "./heart.png": 61448,
      "./scary_face.png": 61455,
      "./soul_0.png": 61462,
      "./square_particle.png": 61469,
      "./z-particle.png": 61473
    };

    function Uu(uu) {
      var Eu = Zu(uu);
      return ju(Eu)
    }

    function Zu(uu) {
      if (!ju.o(su, uu)) {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }
      return su[uu]
    }
    Uu.keys = function() {
      return Object.keys(su)
    }, Uu.resolve = Zu, uu.exports = Uu, Uu.id = 61392
  },
  60890: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60895: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60903: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60912: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60914: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60920: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60922: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60930: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60933: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60939: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60946: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60949: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60953: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60956: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60961: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60968: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60973: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60980: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60982: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60989: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60993: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60997: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  61e3: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  61003: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  61011: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  61019: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  61023: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  61032: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  61035: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  61040: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  61049: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  61055: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  61063: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  61066: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  61070: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  61072: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  61079: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  61082: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  61084: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  61086: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  61093: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  61098: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  61101: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  61107: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  61116: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  61124: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  61130: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  61135: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  61140: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  61142: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  61151: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  61155: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  61161: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  61169: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  61172: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  61174: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61179: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61181: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61188: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61196: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61204: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61208: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61212: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61217: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61219: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61227: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61233: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61237: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61245: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61248: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61253: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61260: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61263: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61266: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61269: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61277: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61282: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61284: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61289: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61293: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61297: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61301: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61309: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61311: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61315: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61321: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61328: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61330: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61337: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61346: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61351: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61359: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61368: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61373: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61381: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61383: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61401: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61404: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61407: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61409: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61418: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61423: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61432: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61439: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61448: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61455: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61462: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61469: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61473: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61389: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);