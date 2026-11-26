export const id = 73;
export const ids = [73];
export const modules = {
  42202: (BB, OB, GB) => {
    var YB = {
      "./Air Walk.png": 42205,
      "./Antlers Bonus.png": 42208,
      "./Arrow Damage Enchantment.png": 42210,
      "./Arrow Speed Enchantment.png": 42215,
      "./Attack Speed Enchantment.png": 42223,
      "./Blindness.png": 42229,
      "./Boating.png": 42234,
      "./Bounciness.png": 42240,
      "./Brain Rot.png": 42244,
      "./Break Speed Enchantment.png": 42247,
      "./Bunny Hop.png": 42251,
      "./Critical Damage Enchantment.png": 42256,
      "./Cross.png": 42265,
      "./Damage Enchantment.png": 42270,
      "./Damage Reduction.png": 42273,
      "./Damage.png": 42281,
      "./Digging Aura Enchantment.png": 42284,
      "./Dotted Friendship.png": 42286,
      "./Double Jump.png": 42288,
      "./Double Poop.png": 42295,
      "./Draugr Knight Head.png": 42304,
      "./Draugr Warper Head.png": 42313,
      "./Empty Hunger.png": 42317,
      "./FallDamage.png": 42319,
      "./Farming Aura Enchantment.png": 42327,
      "./Farming Yield Enchantment.png": 42329,
      "./Feather Falling.png": 42331,
      "./Feed Aura.png": 42339,
      "./Firecracker Boost Enchantment.png": 42348,
      "./Firecracker Cooldown Enchantment.png": 42356,
      "./Fist.png": 42362,
      "./Friends.png": 42367,
      "./Friendship.png": 42376,
      "./Frozen.png": 42379,
      "./Gliding Speed Enchantment.png": 42387,
      "./Gliding.png": 42396,
      "./Glowing.png": 42403,
      "./Haste.png": 42405,
      "./Healing Pulse.png": 42409,
      "./Health Enchantment.png": 42413,
      "./Health Regen Enchantment.png": 42422,
      "./Health Regen.png": 42425,
      "./Health.png": 42428,
      "./HealthShield.png": 42431,
      "./Heat Resistance.png": 42440,
      "./Horizontal Knockback Enchantment.png": 42447,
      "./Hunger.png": 42456,
      "./Hydrated.png": 42464,
      "./Invisible.png": 42471,
      "./Irradiated.png": 42479,
      "./Jump Boost.png": 42486,
      "./Knockback Resist Enchantment.png": 42490,
      "./Lifesteal.png": 42499,
      "./Lumber Aura Enchantment.png": 42502,
      "./Magma Golem Head.png": 42506,
      "./Max Health.png": 42515,
      "./Mining Aura Enchantment.png": 42521,
      "./Mining Yield Enchantment.png": 42526,
      "./Mining Yield.png": 42533,
      "./Mob Slayer.png": 42538,
      "./Mob Yield.png": 42541,
      "./Momentum Enchantment.png": 42545,
      "./Mystery Fish.png": 42549,
      "./Night Vision.png": 42554,
      "./Obsidian Boating.png": 42557,
      "./Pack Leader.png": 42562,
      "./Pickpocketer.png": 42565,
      "./Pixelated Heart.png": 42573,
      "./Poison Claws.png": 42577,
      "./Poisoned.png": 42584,
      "./Poopy.png": 42593,
      "./Protection Enchantment.png": 42598,
      "./Question Mark.png": 42601,
      "./Quick Charge Enchantment.png": 42606,
      "./Rainbow Wool.png": 42614,
      "./Rested Aura.png": 42621,
      "./Rested Damage.png": 42628,
      "./Rested Farming Yield.png": 42634,
      "./Rested Haste.png": 42642,
      "./Rested Speed.png": 42646,
      "./Riding Speed.png": 42652,
      "./Riding.png": 42655,
      "./Self Yield.png": 42657,
      "./Slowness.png": 42660,
      "./Speed.png": 42668,
      "./Stomp Damage Enchantment.png": 42675,
      "./Thief.png": 42682,
      "./Thorns.png": 42687,
      "./Trader Black.png": 42691,
      "./Trader Blue.png": 42693,
      "./Trader Piggy.png": 42695,
      "./Vertical Knockback Enchantment.png": 42700,
      "./VoidJump.png": 42702,
      "./Wall Climbing.png": 42706,
      "./Weakness.png": 42708,
      "./X-Ray Vision.png": 42713
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 42202
  },
  42720: (BB, OB, GB) => {
    var YB = {
      "./arrow.png": 42722,
      "./bubble.png": 42731,
      "./critical_hit.png": 42736,
      "./drift.png": 42744,
      "./effect_5.png": 42753,
      "./fishingFishSilhouette.png": 42761,
      "./generic_2.png": 42764,
      "./glint.png": 42767,
      "./heart.png": 42773,
      "./scary_face.png": 42775,
      "./snowflake.png": 42777,
      "./soul_0.png": 42779,
      "./square_particle.png": 42783,
      "./z-particle.png": 42787
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 42720
  },
  42193: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      blockTextureUrl: () => lB,
      followBundledTextures: () => jB,
      ingameIconUrl: () => PB,
      itemSpriteUrl: () => MB,
      notFoundUrl: () => zB,
      particleUrl: () => pB
    });
    var YB = GB(37004),
      DB = GB(2034),
      QB = GB(2250),
      oB = GB(3597);

    function jB() {
      (0, QB.r)((() => {
        (0, DB.b)()
      }))
    }

    function yB(BB, OB) {
      const GB = (0, QB.n)();
      if (null === GB) return null;
      try {
        return GB.getDefaultTexture(BB, OB).url
      } catch {
        return null
      }
    }

    function JB(BB, OB) {
      return `${GB.p}${BB}${encodeURIComponent(OB)}.png`
    }

    function MB(BB) {
      var OB;
      const GB = "static/items/1a4d1f22bd315291/";
      return (0, YB.c)(BB) ? null !== (OB = function(BB) {
        return yB(BB, oB.h.ITEM)
      }(BB)) && void 0 !== OB ? OB : JB(GB, BB) : null
    }

    function PB(BB) {
      try {
        return GB(42202)(`./${BB}.png`)
      } catch {
        return null
      }
    }

    function zB() {
      return GB(42715)
    }

    function lB(BB) {
      var OB;
      const GB = "static/blocks/b5f33a3f7a665ddf/";
      return BB.includes("[") ? null : null !== (OB = function(BB) {
        return yB(BB, oB.h.BLOCK)
      }(BB)) && void 0 !== OB ? OB : JB(GB, BB)
    }

    function pB(BB) {
      try {
        return GB(42720)(`./${BB}.png`)
      } catch {
        return null
      }
    }
  },
  42205: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42208: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42210: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42215: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42223: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42229: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42234: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42240: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42244: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42247: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42251: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42256: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42265: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42270: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42273: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42281: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42284: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42286: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42288: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42295: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42304: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42313: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42317: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42319: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42327: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42329: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42331: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42339: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42348: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42356: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42362: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42367: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42376: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42379: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42387: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42396: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42403: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42405: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42409: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42413: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42422: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42425: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42428: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42431: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42440: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42447: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42456: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42464: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42471: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42479: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42486: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42490: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42499: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42502: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42506: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42515: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42521: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42526: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42533: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42538: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42541: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42545: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42549: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42554: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42557: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42562: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42565: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42573: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42577: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42584: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42593: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42598: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42601: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42606: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42614: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42621: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42628: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42634: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42642: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42646: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42652: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42655: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42657: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42660: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42668: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42675: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42682: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42687: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42691: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42693: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42695: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42700: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42702: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42706: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42708: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42713: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42722: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42731: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42736: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42744: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42753: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42761: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42764: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42767: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42773: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42775: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42777: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  42779: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42783: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42787: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42715: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);