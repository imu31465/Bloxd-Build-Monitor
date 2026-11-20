export const id = 58;
export const ids = [58];
export const modules = {
  41981: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      blockTextureUrl: () => nb,
      followBundledTextures: () => Ub,
      ingameIconUrl: () => Mb,
      itemSpriteUrl: () => fb,
      notFoundUrl: () => Xb,
      particleUrl: () => mb
    });
    var kb = sb(40178),
      Wb = sb(1881),
      ab = sb(2946),
      Tb = sb(2920);

    function Ub() {
      (0, ab.r)((() => {
        (0, Wb.e)()
      }))
    }

    function Ib(bb, cb) {
      const sb = (0, ab.p)();
      if (null === sb) return null;
      try {
        return sb.getDefaultTexture(bb, cb).url
      } catch {
        return null
      }
    }

    function Hb(bb, cb) {
      return `${sb.p}${bb}${encodeURIComponent(cb)}.png`
    }

    function fb(bb) {
      var cb;
      const sb = "static/items/f8c148434246a2c1/";
      return (0, kb.e)(bb) ? null !== (cb = function(bb) {
        return Ib(bb, Tb.f.ITEM)
      }(bb)) && void 0 !== cb ? cb : Hb(sb, bb) : null
    }

    function Mb(bb) {
      try {
        return sb(41984)(`./${bb}.png`)
      } catch {
        return null
      }
    }

    function Xb() {
      return sb(42532)
    }

    function nb(bb) {
      var cb;
      const sb = "static/blocks/b5f33a3f7a665ddf/";
      return bb.includes("[") ? null : null !== (cb = function(bb) {
        return Ib(bb, Tb.f.BLOCK)
      }(bb)) && void 0 !== cb ? cb : Hb(sb, bb)
    }

    function mb(bb) {
      try {
        return sb(42534)(`./${bb}.png`)
      } catch {
        return null
      }
    }
  },
  41984: (bb, cb, sb) => {
    var kb = {
      "./Air Walk.png": 41992,
      "./Antlers Bonus.png": 41997,
      "./Arrow Damage Enchantment.png": 42002,
      "./Arrow Speed Enchantment.png": 42009,
      "./Attack Speed Enchantment.png": 42013,
      "./Blindness.png": 42020,
      "./Boating.png": 42023,
      "./Bounciness.png": 42026,
      "./Brain Rot.png": 42028,
      "./Break Speed Enchantment.png": 42036,
      "./Bunny Hop.png": 42045,
      "./Critical Damage Enchantment.png": 42048,
      "./Cross.png": 42053,
      "./Damage Enchantment.png": 42057,
      "./Damage Reduction.png": 42063,
      "./Damage.png": 42068,
      "./Digging Aura Enchantment.png": 42072,
      "./Dotted Friendship.png": 42078,
      "./Double Jump.png": 42086,
      "./Double Poop.png": 42095,
      "./Draugr Knight Head.png": 42102,
      "./Draugr Warper Head.png": 42106,
      "./Empty Hunger.png": 42113,
      "./FallDamage.png": 42121,
      "./Farming Aura Enchantment.png": 42125,
      "./Farming Yield Enchantment.png": 42129,
      "./Feather Falling.png": 42137,
      "./Feed Aura.png": 42143,
      "./Firecracker Boost Enchantment.png": 42148,
      "./Firecracker Cooldown Enchantment.png": 42152,
      "./Fist.png": 42157,
      "./Friends.png": 42166,
      "./Friendship.png": 42170,
      "./Frozen.png": 42175,
      "./Gliding Speed Enchantment.png": 42177,
      "./Gliding.png": 42184,
      "./Glowing.png": 42191,
      "./Haste.png": 42195,
      "./Healing Pulse.png": 42203,
      "./Health Enchantment.png": 42206,
      "./Health Regen Enchantment.png": 42208,
      "./Health Regen.png": 42210,
      "./Health.png": 42216,
      "./HealthShield.png": 42223,
      "./Heat Resistance.png": 42227,
      "./Horizontal Knockback Enchantment.png": 42236,
      "./Hunger.png": 42242,
      "./Hydrated.png": 42244,
      "./Invisible.png": 42250,
      "./Irradiated.png": 42252,
      "./Jump Boost.png": 42260,
      "./Knockback Resist Enchantment.png": 42265,
      "./Lifesteal.png": 42270,
      "./Lumber Aura Enchantment.png": 42275,
      "./Magma Golem Head.png": 42277,
      "./Max Health.png": 42283,
      "./Mining Aura Enchantment.png": 42285,
      "./Mining Yield Enchantment.png": 42291,
      "./Mining Yield.png": 42300,
      "./Mob Slayer.png": 42307,
      "./Mob Yield.png": 42311,
      "./Momentum Enchantment.png": 42319,
      "./Mystery Fish.png": 42328,
      "./Night Vision.png": 42332,
      "./Obsidian Boating.png": 42340,
      "./Pack Leader.png": 42342,
      "./Pickpocketer.png": 42350,
      "./Pixelated Heart.png": 42359,
      "./Poison Claws.png": 42368,
      "./Poisoned.png": 42377,
      "./Poopy.png": 42380,
      "./Protection Enchantment.png": 42384,
      "./Question Mark.png": 42392,
      "./Quick Charge Enchantment.png": 42395,
      "./Rainbow Wool.png": 42404,
      "./Rested Aura.png": 42408,
      "./Rested Damage.png": 42414,
      "./Rested Farming Yield.png": 42420,
      "./Rested Haste.png": 42425,
      "./Rested Speed.png": 42429,
      "./Riding Speed.png": 42437,
      "./Riding.png": 42441,
      "./Self Yield.png": 42447,
      "./Slowness.png": 42456,
      "./Speed.png": 42465,
      "./Stomp Damage Enchantment.png": 42468,
      "./Thief.png": 42477,
      "./Thorns.png": 42481,
      "./Trader Black.png": 42489,
      "./Trader Blue.png": 42494,
      "./Trader Piggy.png": 42498,
      "./Vertical Knockback Enchantment.png": 42506,
      "./VoidJump.png": 42508,
      "./Wall Climbing.png": 42510,
      "./Weakness.png": 42518,
      "./X-Ray Vision.png": 42524
    };

    function Wb(bb) {
      var cb = ab(bb);
      return sb(cb)
    }

    function ab(bb) {
      if (!sb.o(kb, bb)) {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }
      return kb[bb]
    }
    Wb.keys = function() {
      return Object.keys(kb)
    }, Wb.resolve = ab, bb.exports = Wb, Wb.id = 41984
  },
  42534: (bb, cb, sb) => {
    var kb = {
      "./arrow.png": 42539,
      "./bubble.png": 42547,
      "./critical_hit.png": 42550,
      "./drift.png": 42557,
      "./effect_5.png": 42559,
      "./fishingFishSilhouette.png": 42564,
      "./generic_2.png": 42567,
      "./glint.png": 42572,
      "./heart.png": 42577,
      "./scary_face.png": 42582,
      "./soul_0.png": 42585,
      "./square_particle.png": 42592,
      "./z-particle.png": 42594
    };

    function Wb(bb) {
      var cb = ab(bb);
      return sb(cb)
    }

    function ab(bb) {
      if (!sb.o(kb, bb)) {
        var cb = new Error("Cannot find module '" + bb + "'");
        throw cb.code = "MODULE_NOT_FOUND", cb
      }
      return kb[bb]
    }
    Wb.keys = function() {
      return Object.keys(kb)
    }, Wb.resolve = ab, bb.exports = Wb, Wb.id = 42534
  },
  41992: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41997: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42002: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42009: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42013: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42020: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42023: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42026: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42028: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42036: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42045: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42048: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42053: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42057: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42063: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42068: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42072: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42078: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42086: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42095: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42102: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42106: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42113: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42121: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42125: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42129: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42137: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42143: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42148: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42152: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42157: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42166: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42170: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42175: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42177: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42184: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42191: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42195: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42203: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42206: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42208: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42210: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42216: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42223: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42227: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42236: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42242: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42244: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42250: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42252: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42260: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42265: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42270: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42275: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42277: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42283: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42285: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42291: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42300: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42307: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42311: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42319: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42328: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42332: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42340: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42342: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42350: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42359: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42368: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42377: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42380: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42384: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42392: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42395: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42404: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42408: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42414: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42420: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42425: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42429: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42437: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42441: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42447: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42456: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42465: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42468: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42477: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42481: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42489: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42494: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42498: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42506: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42508: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42510: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42518: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42524: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42539: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42547: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42550: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42557: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42559: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42564: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42567: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42572: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42577: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42582: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42585: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42592: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42594: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42532: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);