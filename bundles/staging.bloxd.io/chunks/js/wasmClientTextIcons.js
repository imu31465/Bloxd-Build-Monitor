export const id = 58;
export const ids = [58];
export const modules = {
  42039: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      blockTextureUrl: () => Ak,
      followBundledTextures: () => bk,
      ingameIconUrl: () => Vk,
      itemSpriteUrl: () => sk,
      notFoundUrl: () => Jk,
      particleUrl: () => ek
    });
    var Rk = Bk(40161),
      tk = Bk(1858),
      ak = Bk(2992),
      Xk = Bk(2961);

    function bk() {
      (0, ak.n)((() => {
        (0, tk.b)()
      }))
    }

    function wk(kk, Fk) {
      const Bk = (0, ak.k)();
      if (null === Bk) return null;
      try {
        return Bk.getDefaultTexture(kk, Fk).url
      } catch {
        return null
      }
    }

    function dk(kk, Fk) {
      return `${Bk.p}${kk}${encodeURIComponent(Fk)}.png`
    }

    function sk(kk) {
      var Fk;
      const Bk = "static/items/f8c148434246a2c1/";
      return (0, Rk.b)(kk) ? null !== (Fk = function(kk) {
        return wk(kk, Xk.e.ITEM)
      }(kk)) && void 0 !== Fk ? Fk : dk(Bk, kk) : null
    }

    function Vk(kk) {
      try {
        return Bk(42048)(`./${kk}.png`)
      } catch {
        return null
      }
    }

    function Jk() {
      return Bk(42616)
    }

    function Ak(kk) {
      var Fk;
      const Bk = "static/blocks/b5f33a3f7a665ddf/";
      return kk.includes("[") ? null : null !== (Fk = function(kk) {
        return wk(kk, Xk.e.BLOCK)
      }(kk)) && void 0 !== Fk ? Fk : dk(Bk, kk)
    }

    function ek(kk) {
      try {
        return Bk(42620)(`./${kk}.png`)
      } catch {
        return null
      }
    }
  },
  42048: (kk, Fk, Bk) => {
    var Rk = {
      "./Air Walk.png": 42057,
      "./Antlers Bonus.png": 42065,
      "./Arrow Damage Enchantment.png": 42072,
      "./Arrow Speed Enchantment.png": 42076,
      "./Attack Speed Enchantment.png": 42084,
      "./Blindness.png": 42087,
      "./Boating.png": 42090,
      "./Bounciness.png": 42099,
      "./Brain Rot.png": 42103,
      "./Break Speed Enchantment.png": 42107,
      "./Bunny Hop.png": 42114,
      "./Critical Damage Enchantment.png": 42116,
      "./Cross.png": 42125,
      "./Damage Enchantment.png": 42133,
      "./Damage Reduction.png": 42137,
      "./Damage.png": 42142,
      "./Digging Aura Enchantment.png": 42144,
      "./Dotted Friendship.png": 42148,
      "./Double Jump.png": 42150,
      "./Double Poop.png": 42155,
      "./Draugr Knight Head.png": 42164,
      "./Draugr Warper Head.png": 42166,
      "./Empty Hunger.png": 42171,
      "./FallDamage.png": 42176,
      "./Farming Aura Enchantment.png": 42182,
      "./Farming Yield Enchantment.png": 42189,
      "./Feather Falling.png": 42197,
      "./Feed Aura.png": 42200,
      "./Firecracker Boost Enchantment.png": 42209,
      "./Firecracker Cooldown Enchantment.png": 42213,
      "./Fist.png": 42217,
      "./Friends.png": 42223,
      "./Friendship.png": 42232,
      "./Frozen.png": 42239,
      "./Gliding Speed Enchantment.png": 42245,
      "./Gliding.png": 42249,
      "./Glowing.png": 42253,
      "./Haste.png": 42256,
      "./Healing Pulse.png": 42265,
      "./Health Enchantment.png": 42272,
      "./Health Regen Enchantment.png": 42280,
      "./Health Regen.png": 42284,
      "./Health.png": 42292,
      "./HealthShield.png": 42296,
      "./Heat Resistance.png": 42300,
      "./Horizontal Knockback Enchantment.png": 42307,
      "./Hunger.png": 42315,
      "./Hydrated.png": 42319,
      "./Invisible.png": 42324,
      "./Irradiated.png": 42330,
      "./Jump Boost.png": 42337,
      "./Knockback Resist Enchantment.png": 42345,
      "./Lifesteal.png": 42352,
      "./Lumber Aura Enchantment.png": 42358,
      "./Magma Golem Head.png": 42367,
      "./Max Health.png": 42375,
      "./Mining Aura Enchantment.png": 42378,
      "./Mining Yield Enchantment.png": 42385,
      "./Mining Yield.png": 42390,
      "./Mob Slayer.png": 42396,
      "./Mob Yield.png": 42399,
      "./Momentum Enchantment.png": 42402,
      "./Mystery Fish.png": 42407,
      "./Night Vision.png": 42415,
      "./Obsidian Boating.png": 42423,
      "./Pack Leader.png": 42432,
      "./Pickpocketer.png": 42434,
      "./Pixelated Heart.png": 42443,
      "./Poison Claws.png": 42449,
      "./Poisoned.png": 42458,
      "./Poopy.png": 42466,
      "./Protection Enchantment.png": 42469,
      "./Question Mark.png": 42477,
      "./Quick Charge Enchantment.png": 42485,
      "./Rainbow Wool.png": 42494,
      "./Rested Aura.png": 42497,
      "./Rested Damage.png": 42502,
      "./Rested Farming Yield.png": 42510,
      "./Rested Haste.png": 42514,
      "./Rested Speed.png": 42518,
      "./Riding Speed.png": 42523,
      "./Riding.png": 42526,
      "./Self Yield.png": 42534,
      "./Slowness.png": 42540,
      "./Speed.png": 42546,
      "./Stomp Damage Enchantment.png": 42548,
      "./Thief.png": 42557,
      "./Thorns.png": 42561,
      "./Trader Black.png": 42566,
      "./Trader Blue.png": 42573,
      "./Trader Piggy.png": 42578,
      "./Vertical Knockback Enchantment.png": 42587,
      "./VoidJump.png": 42595,
      "./Wall Climbing.png": 42599,
      "./Weakness.png": 42606,
      "./X-Ray Vision.png": 42614
    };

    function tk(kk) {
      var Fk = ak(kk);
      return Bk(Fk)
    }

    function ak(kk) {
      if (!Bk.o(Rk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Rk[kk]
    }
    tk.keys = function() {
      return Object.keys(Rk)
    }, tk.resolve = ak, kk.exports = tk, tk.id = 42048
  },
  42620: (kk, Fk, Bk) => {
    var Rk = {
      "./arrow.png": 42626,
      "./bubble.png": 42630,
      "./critical_hit.png": 42638,
      "./drift.png": 42647,
      "./effect_5.png": 42654,
      "./fishingFishSilhouette.png": 42657,
      "./generic_2.png": 42660,
      "./glint.png": 42669,
      "./heart.png": 42675,
      "./scary_face.png": 42679,
      "./soul_0.png": 42683,
      "./square_particle.png": 42685,
      "./z-particle.png": 42694
    };

    function tk(kk) {
      var Fk = ak(kk);
      return Bk(Fk)
    }

    function ak(kk) {
      if (!Bk.o(Rk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Rk[kk]
    }
    tk.keys = function() {
      return Object.keys(Rk)
    }, tk.resolve = ak, kk.exports = tk, tk.id = 42620
  },
  42057: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42065: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42072: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42076: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42084: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42087: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42090: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42099: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42103: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42107: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42114: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42116: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42125: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42133: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42137: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42142: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42144: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42148: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42150: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42155: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42164: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42166: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42171: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42176: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42182: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42189: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42197: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42200: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42209: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42213: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42217: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42223: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42232: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42239: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42245: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42249: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42253: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42256: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42265: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42272: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42280: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42284: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42292: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42296: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42300: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42307: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42315: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42319: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42324: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42330: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42337: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42345: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42352: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42358: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42367: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42375: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42378: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42385: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42390: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42396: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42399: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42402: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42407: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42415: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42423: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42432: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42434: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42443: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42449: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42458: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42466: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42469: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42477: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42485: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42494: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42497: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42502: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42510: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42514: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42518: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42523: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42526: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42534: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42540: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42546: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42548: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42557: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42561: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42566: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42573: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42578: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42587: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42595: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42599: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42606: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42614: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42626: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42630: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42638: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42647: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42654: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42657: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42660: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42669: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42675: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42679: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42683: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42685: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42694: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42616: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);