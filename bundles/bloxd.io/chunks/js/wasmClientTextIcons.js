export const id = 58;
export const ids = [58];
export const modules = {
  41714: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      blockTextureUrl: () => Xb,
      followBundledTextures: () => Yb,
      ingameIconUrl: () => Lb,
      itemSpriteUrl: () => vb,
      notFoundUrl: () => Pb,
      particleUrl: () => jb
    });
    var Ab = Ub(39870),
      Mb = Ub(1838),
      Tb = Ub(2927),
      Eb = Ub(2897);

    function Yb() {
      (0, Tb.p)((() => {
        (0, Mb.c)()
      }))
    }

    function Bb(bb, ab) {
      const Ub = (0, Tb.n)();
      if (null === Ub) return null;
      try {
        return Ub.getDefaultTexture(bb, ab).url
      } catch {
        return null
      }
    }

    function eb(bb, ab) {
      return `${Ub.p}${bb}${encodeURIComponent(ab)}.png`
    }

    function vb(bb) {
      var ab;
      const Ub = "static/items/f8c148434246a2c1/";
      return (0, Ab.c)(bb) ? null !== (ab = function(bb) {
        return Bb(bb, Eb.f.ITEM)
      }(bb)) && void 0 !== ab ? ab : eb(Ub, bb) : null
    }

    function Lb(bb) {
      try {
        return Ub(41723)(`./${bb}.png`)
      } catch {
        return null
      }
    }

    function Pb() {
      return Ub(42263)
    }

    function Xb(bb) {
      var ab;
      const Ub = "static/blocks/b5f33a3f7a665ddf/";
      return bb.includes("[") ? null : null !== (ab = function(bb) {
        return Bb(bb, Eb.f.BLOCK)
      }(bb)) && void 0 !== ab ? ab : eb(Ub, bb)
    }

    function jb(bb) {
      try {
        return Ub(42267)(`./${bb}.png`)
      } catch {
        return null
      }
    }
  },
  41723: (bb, ab, Ub) => {
    var Ab = {
      "./Air Walk.png": 41727,
      "./Antlers Bonus.png": 41732,
      "./Arrow Damage Enchantment.png": 41736,
      "./Arrow Speed Enchantment.png": 41743,
      "./Attack Speed Enchantment.png": 41745,
      "./Blindness.png": 41753,
      "./Boating.png": 41762,
      "./Bounciness.png": 41766,
      "./Brain Rot.png": 41774,
      "./Break Speed Enchantment.png": 41782,
      "./Bunny Hop.png": 41789,
      "./Critical Damage Enchantment.png": 41793,
      "./Cross.png": 41795,
      "./Damage Enchantment.png": 41801,
      "./Damage Reduction.png": 41806,
      "./Damage.png": 41809,
      "./Digging Aura Enchantment.png": 41815,
      "./Dotted Friendship.png": 41821,
      "./Double Jump.png": 41828,
      "./Double Poop.png": 41832,
      "./Draugr Knight Head.png": 41840,
      "./Draugr Warper Head.png": 41843,
      "./Empty Hunger.png": 41850,
      "./FallDamage.png": 41855,
      "./Farming Aura Enchantment.png": 41864,
      "./Farming Yield Enchantment.png": 41871,
      "./Feather Falling.png": 41878,
      "./Feed Aura.png": 41887,
      "./Firecracker Boost Enchantment.png": 41894,
      "./Firecracker Cooldown Enchantment.png": 41899,
      "./Fist.png": 41907,
      "./Friends.png": 41910,
      "./Friendship.png": 41912,
      "./Frozen.png": 41918,
      "./Gliding Speed Enchantment.png": 41927,
      "./Gliding.png": 41935,
      "./Glowing.png": 41941,
      "./Haste.png": 41947,
      "./Healing Pulse.png": 41954,
      "./Health Enchantment.png": 41960,
      "./Health Regen Enchantment.png": 41966,
      "./Health Regen.png": 41975,
      "./Health.png": 41977,
      "./HealthShield.png": 41983,
      "./Heat Resistance.png": 41991,
      "./Horizontal Knockback Enchantment.png": 41998,
      "./Hunger.png": 42003,
      "./Hydrated.png": 42006,
      "./Invisible.png": 42014,
      "./Irradiated.png": 42019,
      "./Jump Boost.png": 42025,
      "./Knockback Resist Enchantment.png": 42029,
      "./Lifesteal.png": 42035,
      "./Lumber Aura Enchantment.png": 42037,
      "./Magma Golem Head.png": 42039,
      "./Max Health.png": 42043,
      "./Mining Aura Enchantment.png": 42047,
      "./Mining Yield Enchantment.png": 42052,
      "./Mining Yield.png": 42055,
      "./Mob Slayer.png": 42058,
      "./Mob Yield.png": 42066,
      "./Momentum Enchantment.png": 42073,
      "./Mystery Fish.png": 42082,
      "./Night Vision.png": 42085,
      "./Obsidian Boating.png": 42087,
      "./Pack Leader.png": 42093,
      "./Pickpocketer.png": 42098,
      "./Pixelated Heart.png": 42107,
      "./Poison Claws.png": 42116,
      "./Poisoned.png": 42121,
      "./Poopy.png": 42130,
      "./Protection Enchantment.png": 42132,
      "./Question Mark.png": 42139,
      "./Quick Charge Enchantment.png": 42143,
      "./Rainbow Wool.png": 42146,
      "./Rested Aura.png": 42155,
      "./Rested Damage.png": 42158,
      "./Rested Farming Yield.png": 42166,
      "./Rested Haste.png": 42168,
      "./Rested Speed.png": 42174,
      "./Riding Speed.png": 42179,
      "./Riding.png": 42183,
      "./Self Yield.png": 42192,
      "./Slowness.png": 42197,
      "./Speed.png": 42201,
      "./Stomp Damage Enchantment.png": 42208,
      "./Thief.png": 42213,
      "./Thorns.png": 42220,
      "./Trader Black.png": 42222,
      "./Trader Blue.png": 42227,
      "./Trader Piggy.png": 42233,
      "./Vertical Knockback Enchantment.png": 42235,
      "./VoidJump.png": 42238,
      "./Wall Climbing.png": 42244,
      "./Weakness.png": 42253,
      "./X-Ray Vision.png": 42257
    };

    function Mb(bb) {
      var ab = Tb(bb);
      return Ub(ab)
    }

    function Tb(bb) {
      if (!Ub.o(Ab, bb)) {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }
      return Ab[bb]
    }
    Mb.keys = function() {
      return Object.keys(Ab)
    }, Mb.resolve = Tb, bb.exports = Mb, Mb.id = 41723
  },
  42267: (bb, ab, Ub) => {
    var Ab = {
      "./arrow.png": 42276,
      "./bubble.png": 42283,
      "./critical_hit.png": 42288,
      "./drift.png": 42291,
      "./effect_5.png": 42300,
      "./fishingFishSilhouette.png": 42302,
      "./generic_2.png": 42309,
      "./glint.png": 42312,
      "./heart.png": 42315,
      "./scary_face.png": 42322,
      "./soul_0.png": 42329,
      "./square_particle.png": 42334,
      "./z-particle.png": 42343
    };

    function Mb(bb) {
      var ab = Tb(bb);
      return Ub(ab)
    }

    function Tb(bb) {
      if (!Ub.o(Ab, bb)) {
        var ab = new Error("Cannot find module '" + bb + "'");
        throw ab.code = "MODULE_NOT_FOUND", ab
      }
      return Ab[bb]
    }
    Mb.keys = function() {
      return Object.keys(Ab)
    }, Mb.resolve = Tb, bb.exports = Mb, Mb.id = 42267
  },
  41727: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41732: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41736: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41743: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41745: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41753: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41762: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41766: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41774: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41782: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41789: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41793: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41795: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41801: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41806: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41809: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41815: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41821: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41828: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41832: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41840: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41843: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41850: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41855: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41864: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41871: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41878: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41887: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41894: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41899: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41907: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41910: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41912: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41918: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41927: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41935: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41941: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41947: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41954: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41960: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41966: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41975: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  41977: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  41983: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  41991: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  41998: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42003: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42006: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42014: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42019: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42025: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42029: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42035: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42037: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42039: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42043: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42047: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42052: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42055: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42058: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42066: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42073: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42082: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42085: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42087: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42093: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42098: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42107: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42116: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42121: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42130: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42132: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42139: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42143: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42146: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42155: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42158: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42166: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42168: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42174: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42179: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42183: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42192: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42197: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42201: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42208: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42213: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42220: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42222: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42227: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42233: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42235: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42238: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42244: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42253: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42257: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42276: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42283: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42288: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42291: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42300: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42302: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42309: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42312: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42315: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42322: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42329: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42334: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42343: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42263: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);