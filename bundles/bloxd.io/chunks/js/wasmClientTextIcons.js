export const id = 62;
export const ids = [62];
export const modules = {
  60782: (BB, jB, zB) => {
    var QB = {
      "./Air Walk.png": 60787,
      "./Antlers Bonus.png": 60796,
      "./Arrow Damage Enchantment.png": 60805,
      "./Arrow Speed Enchantment.png": 60811,
      "./Attack Speed Enchantment.png": 60818,
      "./Blindness.png": 60827,
      "./Boating.png": 60836,
      "./Bounciness.png": 60839,
      "./Brain Rot.png": 60843,
      "./Break Speed Enchantment.png": 60848,
      "./Bunny Hop.png": 60850,
      "./Critical Damage Enchantment.png": 60854,
      "./Cross.png": 60860,
      "./Damage Enchantment.png": 60862,
      "./Damage Reduction.png": 60867,
      "./Damage.png": 60875,
      "./Digging Aura Enchantment.png": 60879,
      "./Dotted Friendship.png": 60882,
      "./Double Jump.png": 60888,
      "./Double Poop.png": 60894,
      "./Draugr Knight Head.png": 60899,
      "./Draugr Warper Head.png": 60902,
      "./Empty Hunger.png": 60905,
      "./FallDamage.png": 60907,
      "./Farming Aura Enchantment.png": 60916,
      "./Farming Yield Enchantment.png": 60920,
      "./Feather Falling.png": 60924,
      "./Feed Aura.png": 60929,
      "./Firecracker Boost Enchantment.png": 60938,
      "./Firecracker Cooldown Enchantment.png": 60941,
      "./Fist.png": 60943,
      "./Friends.png": 60946,
      "./Friendship.png": 60953,
      "./Frozen.png": 60956,
      "./Gliding Speed Enchantment.png": 60965,
      "./Gliding.png": 60967,
      "./Glowing.png": 60976,
      "./Haste.png": 60983,
      "./Healing Pulse.png": 60989,
      "./Health Enchantment.png": 60998,
      "./Health Regen Enchantment.png": 61002,
      "./Health Regen.png": 61010,
      "./Health.png": 61019,
      "./HealthShield.png": 61022,
      "./Heat Resistance.png": 61031,
      "./Horizontal Knockback Enchantment.png": 61039,
      "./Hunger.png": 61044,
      "./Hydrated.png": 61052,
      "./Invisible.png": 61054,
      "./Irradiated.png": 61063,
      "./Jump Boost.png": 61067,
      "./Knockback Resist Enchantment.png": 61069,
      "./Lifesteal.png": 61078,
      "./Lumber Aura Enchantment.png": 61082,
      "./Magma Golem Head.png": 61090,
      "./Max Health.png": 61095,
      "./Mining Aura Enchantment.png": 61098,
      "./Mining Yield Enchantment.png": 61102,
      "./Mining Yield.png": 61108,
      "./Mob Slayer.png": 61112,
      "./Mob Yield.png": 61118,
      "./Momentum Enchantment.png": 61125,
      "./Mystery Fish.png": 61128,
      "./Night Vision.png": 61137,
      "./Obsidian Boating.png": 61142,
      "./Pack Leader.png": 61151,
      "./Pickpocketer.png": 61154,
      "./Pixelated Heart.png": 61157,
      "./Poison Claws.png": 61162,
      "./Poisoned.png": 61169,
      "./Poopy.png": 61175,
      "./Protection Enchantment.png": 61182,
      "./Question Mark.png": 61185,
      "./Quick Charge Enchantment.png": 61193,
      "./Rainbow Wool.png": 61201,
      "./Rested Aura.png": 61205,
      "./Rested Damage.png": 61213,
      "./Rested Farming Yield.png": 61216,
      "./Rested Haste.png": 61220,
      "./Rested Speed.png": 61222,
      "./Riding Speed.png": 61227,
      "./Riding.png": 61231,
      "./Self Yield.png": 61233,
      "./Slowness.png": 61238,
      "./Speed.png": 61247,
      "./Stomp Damage Enchantment.png": 61249,
      "./Thief.png": 61256,
      "./Thorns.png": 61265,
      "./Trader Black.png": 61273,
      "./Trader Blue.png": 61278,
      "./Trader Piggy.png": 61284,
      "./Vertical Knockback Enchantment.png": 61288,
      "./VoidJump.png": 61297,
      "./Wall Climbing.png": 61300,
      "./Weakness.png": 61307,
      "./X-Ray Vision.png": 61310
    };

    function nB(BB) {
      var jB = dB(BB);
      return zB(jB)
    }

    function dB(BB) {
      if (!zB.o(QB, BB)) {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }
      return QB[BB]
    }
    nB.keys = function() {
      return Object.keys(QB)
    }, nB.resolve = dB, BB.exports = nB, nB.id = 60782
  },
  61323: (BB, jB, zB) => {
    var QB = {
      "./arrow.png": 61331,
      "./bubble.png": 61334,
      "./critical_hit.png": 61343,
      "./drift.png": 61350,
      "./effect_5.png": 61358,
      "./fishingFishSilhouette.png": 61364,
      "./generic_2.png": 61372,
      "./glint.png": 61377,
      "./heart.png": 61384,
      "./scary_face.png": 61389,
      "./soul_0.png": 61394,
      "./square_particle.png": 61402,
      "./z-particle.png": 61407
    };

    function nB(BB) {
      var jB = dB(BB);
      return zB(jB)
    }

    function dB(BB) {
      if (!zB.o(QB, BB)) {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }
      return QB[BB]
    }
    nB.keys = function() {
      return Object.keys(QB)
    }, nB.resolve = dB, BB.exports = nB, nB.id = 61323
  },
  60776: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      blockTextureUrl: () => sB,
      followBundledTextures: () => NB,
      ingameIconUrl: () => pB,
      itemSpriteUrl: () => aB,
      notFoundUrl: () => rB,
      particleUrl: () => JB
    });
    var QB = zB(41138),
      nB = zB(1995),
      dB = zB(2201),
      IB = zB(3282);

    function NB() {
      (0, dB.m)((() => {
        (0, nB.e)()
      }))
    }

    function uB(BB, jB) {
      const zB = (0, dB.l)();
      if (null === zB) return null;
      try {
        return zB.getDefaultTexture(BB, jB).url
      } catch {
        return null
      }
    }

    function UB(BB, jB) {
      return `${zB.p}${BB}${encodeURIComponent(jB)}.png`
    }

    function aB(BB) {
      var jB;
      const zB = "static/items/8cf6154c6eda6753/";
      return (0, QB.e)(BB) ? null !== (jB = function(BB) {
        return uB(BB, IB.e.ITEM)
      }(BB)) && void 0 !== jB ? jB : UB(zB, BB) : null
    }

    function pB(BB) {
      try {
        return zB(60782)(`./${BB}.png`)
      } catch {
        return null
      }
    }

    function rB() {
      return zB(61316)
    }

    function sB(BB) {
      var jB;
      const zB = "static/blocks/b5f33a3f7a665ddf/";
      return BB.includes("[") ? null : null !== (jB = function(BB) {
        return uB(BB, IB.e.BLOCK)
      }(BB)) && void 0 !== jB ? jB : UB(zB, BB)
    }

    function JB(BB) {
      try {
        return zB(61323)(`./${BB}.png`)
      } catch {
        return null
      }
    }
  },
  60787: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60796: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60805: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60811: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60818: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60827: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60836: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60839: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60843: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60848: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60850: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60854: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60860: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60862: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60867: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60875: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60879: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60882: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60888: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60894: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60899: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60902: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60905: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60907: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60916: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60920: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60924: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60929: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60938: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60941: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60943: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60946: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60953: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60956: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60965: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60967: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60976: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60983: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60989: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60998: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  61002: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  61010: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  61019: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  61022: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  61031: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  61039: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  61044: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  61052: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  61054: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  61063: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  61067: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  61069: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  61078: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  61082: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  61090: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  61095: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61098: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61102: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61108: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61112: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61118: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61125: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61128: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61137: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61142: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61151: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61154: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61157: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61162: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61169: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61175: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61182: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61185: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61193: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61201: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61205: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61213: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61216: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61220: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61222: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61227: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61231: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61233: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61238: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61247: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61249: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61256: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61265: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61273: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61278: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61284: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61288: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61297: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61300: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61307: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61310: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61331: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61334: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61343: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61350: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61358: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61364: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61372: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61377: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61384: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61389: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61394: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61402: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61407: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61316: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);