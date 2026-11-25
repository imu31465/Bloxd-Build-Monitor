export const id = 64;
export const ids = [64];
export const modules = {
  60870: (QQ, WQ, XQ) => {
    var wQ = {
      "./Air Walk.png": 60872,
      "./Antlers Bonus.png": 60875,
      "./Arrow Damage Enchantment.png": 60877,
      "./Arrow Speed Enchantment.png": 60885,
      "./Attack Speed Enchantment.png": 60894,
      "./Blindness.png": 60902,
      "./Boating.png": 60909,
      "./Bounciness.png": 60911,
      "./Brain Rot.png": 60919,
      "./Break Speed Enchantment.png": 60926,
      "./Bunny Hop.png": 60935,
      "./Critical Damage Enchantment.png": 60944,
      "./Cross.png": 60951,
      "./Damage Enchantment.png": 60958,
      "./Damage Reduction.png": 60961,
      "./Damage.png": 60963,
      "./Digging Aura Enchantment.png": 60971,
      "./Dotted Friendship.png": 60975,
      "./Double Jump.png": 60981,
      "./Double Poop.png": 60985,
      "./Draugr Knight Head.png": 60993,
      "./Draugr Warper Head.png": 60999,
      "./Empty Hunger.png": 61002,
      "./FallDamage.png": 61007,
      "./Farming Aura Enchantment.png": 61014,
      "./Farming Yield Enchantment.png": 61023,
      "./Feather Falling.png": 61029,
      "./Feed Aura.png": 61031,
      "./Firecracker Boost Enchantment.png": 61036,
      "./Firecracker Cooldown Enchantment.png": 61041,
      "./Fist.png": 61046,
      "./Friends.png": 61051,
      "./Friendship.png": 61054,
      "./Frozen.png": 61059,
      "./Gliding Speed Enchantment.png": 61066,
      "./Gliding.png": 61071,
      "./Glowing.png": 61080,
      "./Haste.png": 61082,
      "./Healing Pulse.png": 61090,
      "./Health Enchantment.png": 61095,
      "./Health Regen Enchantment.png": 61099,
      "./Health Regen.png": 61108,
      "./Health.png": 61113,
      "./HealthShield.png": 61116,
      "./Heat Resistance.png": 61119,
      "./Horizontal Knockback Enchantment.png": 61127,
      "./Hunger.png": 61130,
      "./Hydrated.png": 61133,
      "./Invisible.png": 61135,
      "./Irradiated.png": 61144,
      "./Jump Boost.png": 61151,
      "./Knockback Resist Enchantment.png": 61160,
      "./Lifesteal.png": 61166,
      "./Lumber Aura Enchantment.png": 61169,
      "./Magma Golem Head.png": 61174,
      "./Max Health.png": 61180,
      "./Mining Aura Enchantment.png": 61189,
      "./Mining Yield Enchantment.png": 61193,
      "./Mining Yield.png": 61202,
      "./Mob Slayer.png": 61209,
      "./Mob Yield.png": 61214,
      "./Momentum Enchantment.png": 61219,
      "./Mystery Fish.png": 61221,
      "./Night Vision.png": 61230,
      "./Obsidian Boating.png": 61234,
      "./Pack Leader.png": 61243,
      "./Pickpocketer.png": 61249,
      "./Pixelated Heart.png": 61258,
      "./Poison Claws.png": 61265,
      "./Poisoned.png": 61273,
      "./Poopy.png": 61278,
      "./Protection Enchantment.png": 61283,
      "./Question Mark.png": 61287,
      "./Quick Charge Enchantment.png": 61292,
      "./Rainbow Wool.png": 61298,
      "./Rested Aura.png": 61305,
      "./Rested Damage.png": 61310,
      "./Rested Farming Yield.png": 61316,
      "./Rested Haste.png": 61325,
      "./Rested Speed.png": 61327,
      "./Riding Speed.png": 61330,
      "./Riding.png": 61333,
      "./Self Yield.png": 61339,
      "./Slowness.png": 61346,
      "./Speed.png": 61355,
      "./Stomp Damage Enchantment.png": 61362,
      "./Thief.png": 61371,
      "./Thorns.png": 61374,
      "./Trader Black.png": 61377,
      "./Trader Blue.png": 61382,
      "./Trader Piggy.png": 61388,
      "./Vertical Knockback Enchantment.png": 61395,
      "./VoidJump.png": 61397,
      "./Wall Climbing.png": 61399,
      "./Weakness.png": 61405,
      "./X-Ray Vision.png": 61410
    };

    function qQ(QQ) {
      var WQ = TQ(QQ);
      return XQ(WQ)
    }

    function TQ(QQ) {
      if (!XQ.o(wQ, QQ)) {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }
      return wQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(wQ)
    }, qQ.resolve = TQ, QQ.exports = qQ, qQ.id = 60870
  },
  61426: (QQ, WQ, XQ) => {
    var wQ = {
      "./arrow.png": 61435,
      "./bubble.png": 61441,
      "./critical_hit.png": 61450,
      "./drift.png": 61458,
      "./effect_5.png": 61466,
      "./fishingFishSilhouette.png": 61473,
      "./generic_2.png": 61480,
      "./glint.png": 61486,
      "./heart.png": 61492,
      "./scary_face.png": 61501,
      "./soul_0.png": 61510,
      "./square_particle.png": 61515,
      "./z-particle.png": 61517
    };

    function qQ(QQ) {
      var WQ = TQ(QQ);
      return XQ(WQ)
    }

    function TQ(QQ) {
      if (!XQ.o(wQ, QQ)) {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }
      return wQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(wQ)
    }, qQ.resolve = TQ, QQ.exports = qQ, qQ.id = 61426
  },
  60868: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      blockTextureUrl: () => IQ,
      followBundledTextures: () => sQ,
      ingameIconUrl: () => JQ,
      itemSpriteUrl: () => gQ,
      notFoundUrl: () => rQ,
      particleUrl: () => jQ
    });
    var wQ = XQ(41255),
      qQ = XQ(2015),
      TQ = XQ(2211),
      zQ = XQ(3440);

    function sQ() {
      (0, TQ.o)((() => {
        (0, qQ.c)()
      }))
    }

    function FQ(QQ, WQ) {
      const XQ = (0, TQ.m)();
      if (null === XQ) return null;
      try {
        return XQ.getDefaultTexture(QQ, WQ).url
      } catch {
        return null
      }
    }

    function PQ(QQ, WQ) {
      return `${XQ.p}${QQ}${encodeURIComponent(WQ)}.png`
    }

    function gQ(QQ) {
      var WQ;
      const XQ = "static/items/8cf6154c6eda6753/";
      return (0, wQ.d)(QQ) ? null !== (WQ = function(QQ) {
        return FQ(QQ, zQ.d.ITEM)
      }(QQ)) && void 0 !== WQ ? WQ : PQ(XQ, QQ) : null
    }

    function JQ(QQ) {
      try {
        return XQ(60870)(`./${QQ}.png`)
      } catch {
        return null
      }
    }

    function rQ() {
      return XQ(61417)
    }

    function IQ(QQ) {
      var WQ;
      const XQ = "static/blocks/b5f33a3f7a665ddf/";
      return QQ.includes("[") ? null : null !== (WQ = function(QQ) {
        return FQ(QQ, zQ.d.BLOCK)
      }(QQ)) && void 0 !== WQ ? WQ : PQ(XQ, QQ)
    }

    function jQ(QQ) {
      try {
        return XQ(61426)(`./${QQ}.png`)
      } catch {
        return null
      }
    }
  },
  60872: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60875: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60877: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60885: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60894: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60902: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60909: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60911: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60919: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60926: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60935: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60944: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60951: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60958: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60961: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60963: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60971: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60975: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60981: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60985: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60993: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60999: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  61002: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  61007: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  61014: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  61023: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  61029: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  61031: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  61036: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  61041: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  61046: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  61051: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  61054: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  61059: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  61066: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  61071: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  61080: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  61082: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  61090: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  61095: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  61099: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  61108: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  61113: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  61116: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  61119: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  61127: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  61130: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  61133: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  61135: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  61144: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  61151: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  61160: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  61166: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  61169: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  61174: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  61180: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61189: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61193: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61202: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61209: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61214: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61219: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61221: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61230: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61234: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61243: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61249: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61258: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61265: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61273: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61278: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61283: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61287: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61292: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61298: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61305: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61310: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61316: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61325: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61327: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61330: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61333: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61339: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61346: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61355: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61362: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61371: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61374: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61377: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61382: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61388: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61395: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61397: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61399: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61405: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61410: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61435: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61441: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61450: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61458: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61466: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61473: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61480: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61486: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61492: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61501: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61510: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61515: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61517: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61417: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);