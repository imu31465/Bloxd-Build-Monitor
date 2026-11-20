export const id = 59;
export const ids = [59];
export const modules = {
  42038: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      blockTextureUrl: () => Zb,
      followBundledTextures: () => Lb,
      ingameIconUrl: () => Hb,
      itemSpriteUrl: () => ab,
      notFoundUrl: () => wb,
      particleUrl: () => Xb
    });
    var Bb = hb(40188),
      Ob = hb(1824),
      Gb = hb(2987),
      Ub = hb(2956);

    function Lb() {
      (0, Gb.m)((() => {
        (0, Ob.e)()
      }))
    }

    function Yb(bb, ub) {
      const hb = (0, Gb.l)();
      if (null === hb) return null;
      try {
        return hb.getDefaultTexture(bb, ub).url
      } catch {
        return null
      }
    }

    function Sb(bb, ub) {
      return `${hb.p}${bb}${encodeURIComponent(ub)}.png`
    }

    function ab(bb) {
      var ub;
      const hb = "static/items/f8c148434246a2c1/";
      return (0, Bb.e)(bb) ? null !== (ub = function(bb) {
        return Yb(bb, Ub.g.ITEM)
      }(bb)) && void 0 !== ub ? ub : Sb(hb, bb) : null
    }

    function Hb(bb) {
      try {
        return hb(42045)(`./${bb}.png`)
      } catch {
        return null
      }
    }

    function wb() {
      return hb(42564)
    }

    function Zb(bb) {
      var ub;
      const hb = "static/blocks/b5f33a3f7a665ddf/";
      return bb.includes("[") ? null : null !== (ub = function(bb) {
        return Yb(bb, Ub.g.BLOCK)
      }(bb)) && void 0 !== ub ? ub : Sb(hb, bb)
    }

    function Xb(bb) {
      try {
        return hb(42566)(`./${bb}.png`)
      } catch {
        return null
      }
    }
  },
  42045: (bb, ub, hb) => {
    var Bb = {
      "./Air Walk.png": 42053,
      "./Antlers Bonus.png": 42061,
      "./Arrow Damage Enchantment.png": 42066,
      "./Arrow Speed Enchantment.png": 42070,
      "./Attack Speed Enchantment.png": 42076,
      "./Blindness.png": 42082,
      "./Boating.png": 42085,
      "./Bounciness.png": 42088,
      "./Brain Rot.png": 42097,
      "./Break Speed Enchantment.png": 42103,
      "./Bunny Hop.png": 42111,
      "./Critical Damage Enchantment.png": 42117,
      "./Cross.png": 42126,
      "./Damage Enchantment.png": 42128,
      "./Damage Reduction.png": 42130,
      "./Damage.png": 42134,
      "./Digging Aura Enchantment.png": 42141,
      "./Dotted Friendship.png": 42149,
      "./Double Jump.png": 42151,
      "./Double Poop.png": 42154,
      "./Draugr Knight Head.png": 42156,
      "./Draugr Warper Head.png": 42158,
      "./Empty Hunger.png": 42163,
      "./FallDamage.png": 42165,
      "./Farming Aura Enchantment.png": 42172,
      "./Farming Yield Enchantment.png": 42177,
      "./Feather Falling.png": 42180,
      "./Feed Aura.png": 42186,
      "./Firecracker Boost Enchantment.png": 42195,
      "./Firecracker Cooldown Enchantment.png": 42202,
      "./Fist.png": 42207,
      "./Friends.png": 42212,
      "./Friendship.png": 42217,
      "./Frozen.png": 42220,
      "./Gliding Speed Enchantment.png": 42229,
      "./Gliding.png": 42231,
      "./Glowing.png": 42240,
      "./Haste.png": 42246,
      "./Healing Pulse.png": 42249,
      "./Health Enchantment.png": 42258,
      "./Health Regen Enchantment.png": 42263,
      "./Health Regen.png": 42268,
      "./Health.png": 42271,
      "./HealthShield.png": 42273,
      "./Heat Resistance.png": 42279,
      "./Horizontal Knockback Enchantment.png": 42281,
      "./Hunger.png": 42287,
      "./Hydrated.png": 42292,
      "./Invisible.png": 42295,
      "./Irradiated.png": 42299,
      "./Jump Boost.png": 42304,
      "./Knockback Resist Enchantment.png": 42309,
      "./Lifesteal.png": 42316,
      "./Lumber Aura Enchantment.png": 42319,
      "./Magma Golem Head.png": 42325,
      "./Max Health.png": 42332,
      "./Mining Aura Enchantment.png": 42336,
      "./Mining Yield Enchantment.png": 42343,
      "./Mining Yield.png": 42347,
      "./Mob Slayer.png": 42356,
      "./Mob Yield.png": 42364,
      "./Momentum Enchantment.png": 42368,
      "./Mystery Fish.png": 42370,
      "./Night Vision.png": 42379,
      "./Obsidian Boating.png": 42388,
      "./Pack Leader.png": 42395,
      "./Pickpocketer.png": 42402,
      "./Pixelated Heart.png": 42405,
      "./Poison Claws.png": 42410,
      "./Poisoned.png": 42417,
      "./Poopy.png": 42422,
      "./Protection Enchantment.png": 42426,
      "./Question Mark.png": 42431,
      "./Quick Charge Enchantment.png": 42439,
      "./Rainbow Wool.png": 42441,
      "./Rested Aura.png": 42450,
      "./Rested Damage.png": 42458,
      "./Rested Farming Yield.png": 42462,
      "./Rested Haste.png": 42467,
      "./Rested Speed.png": 42474,
      "./Riding Speed.png": 42480,
      "./Riding.png": 42485,
      "./Self Yield.png": 42489,
      "./Slowness.png": 42498,
      "./Speed.png": 42501,
      "./Stomp Damage Enchantment.png": 42503,
      "./Thief.png": 42511,
      "./Thorns.png": 42515,
      "./Trader Black.png": 42520,
      "./Trader Blue.png": 42522,
      "./Trader Piggy.png": 42524,
      "./Vertical Knockback Enchantment.png": 42529,
      "./VoidJump.png": 42538,
      "./Wall Climbing.png": 42547,
      "./Weakness.png": 42556,
      "./X-Ray Vision.png": 42560
    };

    function Ob(bb) {
      var ub = Gb(bb);
      return hb(ub)
    }

    function Gb(bb) {
      if (!hb.o(Bb, bb)) {
        var ub = new Error("Cannot find module '" + bb + "'");
        throw ub.code = "MODULE_NOT_FOUND", ub
      }
      return Bb[bb]
    }
    Ob.keys = function() {
      return Object.keys(Bb)
    }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 42045
  },
  42566: (bb, ub, hb) => {
    var Bb = {
      "./arrow.png": 42569,
      "./bubble.png": 42573,
      "./critical_hit.png": 42575,
      "./drift.png": 42577,
      "./effect_5.png": 42586,
      "./fishingFishSilhouette.png": 42592,
      "./generic_2.png": 42599,
      "./glint.png": 42602,
      "./heart.png": 42605,
      "./scary_face.png": 42610,
      "./soul_0.png": 42619,
      "./square_particle.png": 42625,
      "./z-particle.png": 42634
    };

    function Ob(bb) {
      var ub = Gb(bb);
      return hb(ub)
    }

    function Gb(bb) {
      if (!hb.o(Bb, bb)) {
        var ub = new Error("Cannot find module '" + bb + "'");
        throw ub.code = "MODULE_NOT_FOUND", ub
      }
      return Bb[bb]
    }
    Ob.keys = function() {
      return Object.keys(Bb)
    }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 42566
  },
  42053: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42061: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42066: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42070: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42076: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42082: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42085: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42088: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42097: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42103: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42111: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42117: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42126: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42128: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42130: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42134: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42141: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42149: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42151: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42154: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42156: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42158: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42163: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42165: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42172: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42177: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42180: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42186: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42195: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42202: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42207: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42212: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42217: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42220: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42229: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42231: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42240: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42246: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42249: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42258: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42263: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42268: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42271: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42273: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42279: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42281: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42287: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42292: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42295: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42299: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42304: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42309: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42316: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42319: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42325: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42332: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42336: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42343: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42347: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42356: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42364: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42368: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42370: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42379: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42388: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42395: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42402: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42405: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42410: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42417: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42422: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42426: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42431: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42439: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42441: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42450: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42458: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42462: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42467: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42474: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42480: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42485: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42489: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42498: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42501: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42503: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42511: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42515: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42520: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42522: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42524: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42529: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42538: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42547: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42556: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42560: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42569: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42573: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42575: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42577: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42586: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42592: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42599: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42602: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42605: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42610: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42619: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42625: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42634: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42564: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);