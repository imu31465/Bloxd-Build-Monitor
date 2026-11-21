export const id = 59;
export const ids = [59];
export const modules = {
  42016: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      blockTextureUrl: () => YQ,
      followBundledTextures: () => kQ,
      ingameIconUrl: () => HQ,
      itemSpriteUrl: () => uQ,
      notFoundUrl: () => bQ,
      particleUrl: () => xQ
    });
    var LQ = wQ(40188),
      qQ = wQ(1904),
      oQ = wQ(3071),
      DQ = wQ(3053);

    function kQ() {
      (0, oQ.m)((() => {
        (0, qQ.b)()
      }))
    }

    function vQ(QQ, FQ) {
      const wQ = (0, oQ.l)();
      if (null === wQ) return null;
      try {
        return wQ.getDefaultTexture(QQ, FQ).url
      } catch {
        return null
      }
    }

    function mQ(QQ, FQ) {
      return `${wQ.p}${QQ}${encodeURIComponent(FQ)}.png`
    }

    function uQ(QQ) {
      var FQ;
      const wQ = "static/items/f8c148434246a2c1/";
      return (0, LQ.d)(QQ) ? null !== (FQ = function(QQ) {
        return vQ(QQ, DQ.d.ITEM)
      }(QQ)) && void 0 !== FQ ? FQ : mQ(wQ, QQ) : null
    }

    function HQ(QQ) {
      try {
        return wQ(42020)(`./${QQ}.png`)
      } catch {
        return null
      }
    }

    function bQ() {
      return wQ(42555)
    }

    function YQ(QQ) {
      var FQ;
      const wQ = "static/blocks/b5f33a3f7a665ddf/";
      return QQ.includes("[") ? null : null !== (FQ = function(QQ) {
        return vQ(QQ, DQ.d.BLOCK)
      }(QQ)) && void 0 !== FQ ? FQ : mQ(wQ, QQ)
    }

    function xQ(QQ) {
      try {
        return wQ(42562)(`./${QQ}.png`)
      } catch {
        return null
      }
    }
  },
  42020: (QQ, FQ, wQ) => {
    var LQ = {
      "./Air Walk.png": 42029,
      "./Antlers Bonus.png": 42036,
      "./Arrow Damage Enchantment.png": 42040,
      "./Arrow Speed Enchantment.png": 42048,
      "./Attack Speed Enchantment.png": 42054,
      "./Blindness.png": 42058,
      "./Boating.png": 42061,
      "./Bounciness.png": 42064,
      "./Brain Rot.png": 42071,
      "./Break Speed Enchantment.png": 42074,
      "./Bunny Hop.png": 42080,
      "./Critical Damage Enchantment.png": 42086,
      "./Cross.png": 42090,
      "./Damage Enchantment.png": 42097,
      "./Damage Reduction.png": 42103,
      "./Damage.png": 42110,
      "./Digging Aura Enchantment.png": 42118,
      "./Dotted Friendship.png": 42122,
      "./Double Jump.png": 42129,
      "./Double Poop.png": 42137,
      "./Draugr Knight Head.png": 42146,
      "./Draugr Warper Head.png": 42150,
      "./Empty Hunger.png": 42155,
      "./FallDamage.png": 42161,
      "./Farming Aura Enchantment.png": 42168,
      "./Farming Yield Enchantment.png": 42173,
      "./Feather Falling.png": 42179,
      "./Feed Aura.png": 42181,
      "./Firecracker Boost Enchantment.png": 42183,
      "./Firecracker Cooldown Enchantment.png": 42189,
      "./Fist.png": 42193,
      "./Friends.png": 42196,
      "./Friendship.png": 42204,
      "./Frozen.png": 42209,
      "./Gliding Speed Enchantment.png": 42211,
      "./Gliding.png": 42216,
      "./Glowing.png": 42223,
      "./Haste.png": 42227,
      "./Healing Pulse.png": 42230,
      "./Health Enchantment.png": 42237,
      "./Health Regen Enchantment.png": 42239,
      "./Health Regen.png": 42244,
      "./Health.png": 42252,
      "./HealthShield.png": 42254,
      "./Heat Resistance.png": 42263,
      "./Horizontal Knockback Enchantment.png": 42265,
      "./Hunger.png": 42273,
      "./Hydrated.png": 42276,
      "./Invisible.png": 42285,
      "./Irradiated.png": 42294,
      "./Jump Boost.png": 42301,
      "./Knockback Resist Enchantment.png": 42304,
      "./Lifesteal.png": 42311,
      "./Lumber Aura Enchantment.png": 42317,
      "./Magma Golem Head.png": 42325,
      "./Max Health.png": 42334,
      "./Mining Aura Enchantment.png": 42341,
      "./Mining Yield Enchantment.png": 42344,
      "./Mining Yield.png": 42346,
      "./Mob Slayer.png": 42351,
      "./Mob Yield.png": 42353,
      "./Momentum Enchantment.png": 42358,
      "./Mystery Fish.png": 42364,
      "./Night Vision.png": 42373,
      "./Obsidian Boating.png": 42381,
      "./Pack Leader.png": 42383,
      "./Pickpocketer.png": 42385,
      "./Pixelated Heart.png": 42392,
      "./Poison Claws.png": 42398,
      "./Poisoned.png": 42400,
      "./Poopy.png": 42404,
      "./Protection Enchantment.png": 42413,
      "./Question Mark.png": 42418,
      "./Quick Charge Enchantment.png": 42420,
      "./Rainbow Wool.png": 42428,
      "./Rested Aura.png": 42434,
      "./Rested Damage.png": 42442,
      "./Rested Farming Yield.png": 42447,
      "./Rested Haste.png": 42456,
      "./Rested Speed.png": 42464,
      "./Riding Speed.png": 42470,
      "./Riding.png": 42477,
      "./Self Yield.png": 42483,
      "./Slowness.png": 42489,
      "./Speed.png": 42493,
      "./Stomp Damage Enchantment.png": 42502,
      "./Thief.png": 42505,
      "./Thorns.png": 42513,
      "./Trader Black.png": 42517,
      "./Trader Blue.png": 42526,
      "./Trader Piggy.png": 42532,
      "./Vertical Knockback Enchantment.png": 42534,
      "./VoidJump.png": 42538,
      "./Wall Climbing.png": 42541,
      "./Weakness.png": 42544,
      "./X-Ray Vision.png": 42550
    };

    function qQ(QQ) {
      var FQ = oQ(QQ);
      return wQ(FQ)
    }

    function oQ(QQ) {
      if (!wQ.o(LQ, QQ)) {
        var FQ = new Error("Cannot find module '" + QQ + "'");
        throw FQ.code = "MODULE_NOT_FOUND", FQ
      }
      return LQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(LQ)
    }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 42020
  },
  42562: (QQ, FQ, wQ) => {
    var LQ = {
      "./arrow.png": 42570,
      "./bubble.png": 42572,
      "./critical_hit.png": 42574,
      "./drift.png": 42583,
      "./effect_5.png": 42590,
      "./fishingFishSilhouette.png": 42598,
      "./generic_2.png": 42604,
      "./glint.png": 42610,
      "./heart.png": 42617,
      "./scary_face.png": 42624,
      "./soul_0.png": 42628,
      "./square_particle.png": 42634,
      "./z-particle.png": 42637
    };

    function qQ(QQ) {
      var FQ = oQ(QQ);
      return wQ(FQ)
    }

    function oQ(QQ) {
      if (!wQ.o(LQ, QQ)) {
        var FQ = new Error("Cannot find module '" + QQ + "'");
        throw FQ.code = "MODULE_NOT_FOUND", FQ
      }
      return LQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(LQ)
    }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 42562
  },
  42029: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42036: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42040: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42048: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42054: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42058: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42061: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42064: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42071: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42074: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42080: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42086: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42090: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42097: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42103: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42110: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42118: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42122: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42129: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42137: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42146: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42150: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42155: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42161: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42168: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42173: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42179: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42181: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42183: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42189: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42193: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42196: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42204: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42209: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42211: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42216: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42223: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42227: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42230: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42237: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42239: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42244: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42252: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42254: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42263: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42265: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42273: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42276: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42285: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42294: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42301: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42304: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42311: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42317: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42325: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42334: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42341: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42344: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42346: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42351: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42353: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42358: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42364: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42373: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42381: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42383: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42385: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42392: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42398: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42400: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42404: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42413: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42418: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42420: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42428: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42434: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42442: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42447: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42456: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42464: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42470: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42477: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42483: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42489: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42493: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42502: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42505: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42513: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42517: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42526: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42532: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42534: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42538: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42541: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42544: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42550: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42570: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42572: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42574: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42583: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42590: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42598: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42604: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42610: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42617: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42624: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42628: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42634: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42637: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42555: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);