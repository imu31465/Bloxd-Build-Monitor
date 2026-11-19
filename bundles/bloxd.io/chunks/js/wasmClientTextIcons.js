export const id = 58;
export const ids = [58];
export const modules = {
  41772: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      blockTextureUrl: () => MD,
      followBundledTextures: () => bD,
      ingameIconUrl: () => BD,
      itemSpriteUrl: () => SD,
      notFoundUrl: () => yD,
      particleUrl: () => tD
    });
    var ID = cD(39822),
      pD = cD(1922),
      iD = cD(2981),
      fD = cD(2956);

    function bD() {
      (0, iD.q)((() => {
        (0, pD.b)()
      }))
    }

    function QD(DD, CD) {
      const cD = (0, iD.n)();
      if (null === cD) return null;
      try {
        return cD.getDefaultTexture(DD, CD).url
      } catch {
        return null
      }
    }

    function wD(DD, CD) {
      return `${cD.p}${DD}${encodeURIComponent(CD)}.png`
    }

    function SD(DD) {
      var CD;
      const cD = "static/items/f8c148434246a2c1/";
      return (0, ID.e)(DD) ? null !== (CD = function(DD) {
        return QD(DD, fD.f.ITEM)
      }(DD)) && void 0 !== CD ? CD : wD(cD, DD) : null
    }

    function BD(DD) {
      try {
        return cD(41777)(`./${DD}.png`)
      } catch {
        return null
      }
    }

    function yD() {
      return cD(42313)
    }

    function MD(DD) {
      var CD;
      const cD = "static/blocks/b5f33a3f7a665ddf/";
      return DD.includes("[") ? null : null !== (CD = function(DD) {
        return QD(DD, fD.f.BLOCK)
      }(DD)) && void 0 !== CD ? CD : wD(cD, DD)
    }

    function tD(DD) {
      try {
        return cD(42317)(`./${DD}.png`)
      } catch {
        return null
      }
    }
  },
  41777: (DD, CD, cD) => {
    var ID = {
      "./Air Walk.png": 41786,
      "./Antlers Bonus.png": 41789,
      "./Arrow Damage Enchantment.png": 41793,
      "./Arrow Speed Enchantment.png": 41799,
      "./Attack Speed Enchantment.png": 41806,
      "./Blindness.png": 41809,
      "./Boating.png": 41813,
      "./Bounciness.png": 41821,
      "./Brain Rot.png": 41826,
      "./Break Speed Enchantment.png": 41833,
      "./Bunny Hop.png": 41835,
      "./Critical Damage Enchantment.png": 41844,
      "./Cross.png": 41849,
      "./Damage Enchantment.png": 41856,
      "./Damage Reduction.png": 41859,
      "./Damage.png": 41866,
      "./Digging Aura Enchantment.png": 41870,
      "./Dotted Friendship.png": 41878,
      "./Double Jump.png": 41883,
      "./Double Poop.png": 41887,
      "./Draugr Knight Head.png": 41889,
      "./Draugr Warper Head.png": 41894,
      "./Empty Hunger.png": 41896,
      "./FallDamage.png": 41903,
      "./Farming Aura Enchantment.png": 41908,
      "./Farming Yield Enchantment.png": 41912,
      "./Feather Falling.png": 41917,
      "./Feed Aura.png": 41920,
      "./Firecracker Boost Enchantment.png": 41927,
      "./Firecracker Cooldown Enchantment.png": 41931,
      "./Fist.png": 41933,
      "./Friends.png": 41940,
      "./Friendship.png": 41946,
      "./Frozen.png": 41953,
      "./Gliding Speed Enchantment.png": 41962,
      "./Gliding.png": 41968,
      "./Glowing.png": 41970,
      "./Haste.png": 41976,
      "./Healing Pulse.png": 41979,
      "./Health Enchantment.png": 41982,
      "./Health Regen Enchantment.png": 41990,
      "./Health Regen.png": 41999,
      "./Health.png": 42004,
      "./HealthShield.png": 42008,
      "./Heat Resistance.png": 42016,
      "./Horizontal Knockback Enchantment.png": 42021,
      "./Hunger.png": 42026,
      "./Hydrated.png": 42033,
      "./Invisible.png": 42036,
      "./Irradiated.png": 42041,
      "./Jump Boost.png": 42044,
      "./Knockback Resist Enchantment.png": 42048,
      "./Lifesteal.png": 42050,
      "./Lumber Aura Enchantment.png": 42057,
      "./Magma Golem Head.png": 42061,
      "./Max Health.png": 42068,
      "./Mining Aura Enchantment.png": 42071,
      "./Mining Yield Enchantment.png": 42075,
      "./Mining Yield.png": 42080,
      "./Mob Slayer.png": 42087,
      "./Mob Yield.png": 42093,
      "./Momentum Enchantment.png": 42101,
      "./Mystery Fish.png": 42107,
      "./Night Vision.png": 42110,
      "./Obsidian Boating.png": 42116,
      "./Pack Leader.png": 42121,
      "./Pickpocketer.png": 42130,
      "./Pixelated Heart.png": 42134,
      "./Poison Claws.png": 42138,
      "./Poisoned.png": 42140,
      "./Poopy.png": 42149,
      "./Protection Enchantment.png": 42158,
      "./Question Mark.png": 42163,
      "./Quick Charge Enchantment.png": 42169,
      "./Rainbow Wool.png": 42177,
      "./Rested Aura.png": 42181,
      "./Rested Damage.png": 42188,
      "./Rested Farming Yield.png": 42193,
      "./Rested Haste.png": 42199,
      "./Rested Speed.png": 42205,
      "./Riding Speed.png": 42212,
      "./Riding.png": 42219,
      "./Self Yield.png": 42221,
      "./Slowness.png": 42229,
      "./Speed.png": 42233,
      "./Stomp Damage Enchantment.png": 42242,
      "./Thief.png": 42246,
      "./Thorns.png": 42254,
      "./Trader Black.png": 42262,
      "./Trader Blue.png": 42269,
      "./Trader Piggy.png": 42278,
      "./Vertical Knockback Enchantment.png": 42284,
      "./VoidJump.png": 42287,
      "./Wall Climbing.png": 42294,
      "./Weakness.png": 42300,
      "./X-Ray Vision.png": 42307
    };

    function pD(DD) {
      var CD = iD(DD);
      return cD(CD)
    }

    function iD(DD) {
      if (!cD.o(ID, DD)) {
        var CD = new Error("Cannot find module '" + DD + "'");
        throw CD.code = "MODULE_NOT_FOUND", CD
      }
      return ID[DD]
    }
    pD.keys = function() {
      return Object.keys(ID)
    }, pD.resolve = iD, DD.exports = pD, pD.id = 41777
  },
  42317: (DD, CD, cD) => {
    var ID = {
      "./arrow.png": 42321,
      "./bubble.png": 42325,
      "./critical_hit.png": 42334,
      "./drift.png": 42339,
      "./effect_5.png": 42345,
      "./fishingFishSilhouette.png": 42354,
      "./generic_2.png": 42361,
      "./glint.png": 42363,
      "./heart.png": 42367,
      "./scary_face.png": 42369,
      "./soul_0.png": 42371,
      "./square_particle.png": 42379,
      "./z-particle.png": 42386
    };

    function pD(DD) {
      var CD = iD(DD);
      return cD(CD)
    }

    function iD(DD) {
      if (!cD.o(ID, DD)) {
        var CD = new Error("Cannot find module '" + DD + "'");
        throw CD.code = "MODULE_NOT_FOUND", CD
      }
      return ID[DD]
    }
    pD.keys = function() {
      return Object.keys(ID)
    }, pD.resolve = iD, DD.exports = pD, pD.id = 42317
  },
  41786: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41789: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41793: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41799: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41806: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41809: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41813: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41821: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41826: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41833: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41835: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41844: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41849: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41856: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41859: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41866: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41870: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41878: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41883: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41887: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41889: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41894: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41896: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41903: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41908: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41912: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41917: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41920: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41927: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41931: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41933: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41940: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41946: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41953: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41962: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41968: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41970: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41976: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41979: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41982: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41990: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41999: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42004: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42008: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42016: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42021: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42026: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42033: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42036: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42041: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42044: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42048: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42050: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42057: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42061: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42068: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42071: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42075: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42080: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42087: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42093: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42101: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42107: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42110: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42116: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42121: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42130: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42134: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42138: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42140: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42149: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42158: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42163: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42169: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42177: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42181: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42188: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42193: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42199: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42205: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42212: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42219: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42221: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42229: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42233: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42242: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42246: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42254: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42262: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42269: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42278: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42284: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42287: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42294: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42300: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42307: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42321: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42325: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42334: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42339: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42345: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42354: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42361: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42363: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42367: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42369: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42371: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42379: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42386: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42313: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);