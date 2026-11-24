export const id = 62;
export const ids = [62];
export const modules = {
  60497: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      blockTextureUrl: () => pT,
      followBundledTextures: () => nT,
      ingameIconUrl: () => lT,
      itemSpriteUrl: () => jT,
      notFoundUrl: () => LT,
      particleUrl: () => BT
    });
    var WT = mT(41182),
      zT = mT(2057),
      MT = mT(2257),
      gT = mT(3299);

    function nT() {
      (0, MT.q)((() => {
        (0, zT.c)()
      }))
    }

    function HT(TT, UT) {
      const mT = (0, MT.m)();
      if (null === mT) return null;
      try {
        return mT.getDefaultTexture(TT, UT).url
      } catch {
        return null
      }
    }

    function kT(TT, UT) {
      return `${mT.p}${TT}${encodeURIComponent(UT)}.png`
    }

    function jT(TT) {
      var UT;
      const mT = "static/items/8cf6154c6eda6753/";
      return (0, WT.b)(TT) ? null !== (UT = function(TT) {
        return HT(TT, gT.f.ITEM)
      }(TT)) && void 0 !== UT ? UT : kT(mT, TT) : null
    }

    function lT(TT) {
      try {
        return mT(60501)(`./${TT}.png`)
      } catch {
        return null
      }
    }

    function LT() {
      return mT(61039)
    }

    function pT(TT) {
      var UT;
      const mT = "static/blocks/b5f33a3f7a665ddf/";
      return TT.includes("[") ? null : null !== (UT = function(TT) {
        return HT(TT, gT.f.BLOCK)
      }(TT)) && void 0 !== UT ? UT : kT(mT, TT)
    }

    function BT(TT) {
      try {
        return mT(61046)(`./${TT}.png`)
      } catch {
        return null
      }
    }
  },
  60501: (TT, UT, mT) => {
    var WT = {
      "./Air Walk.png": 60508,
      "./Antlers Bonus.png": 60512,
      "./Arrow Damage Enchantment.png": 60515,
      "./Arrow Speed Enchantment.png": 60522,
      "./Attack Speed Enchantment.png": 60531,
      "./Blindness.png": 60538,
      "./Boating.png": 60545,
      "./Bounciness.png": 60548,
      "./Brain Rot.png": 60552,
      "./Break Speed Enchantment.png": 60560,
      "./Bunny Hop.png": 60565,
      "./Critical Damage Enchantment.png": 60570,
      "./Cross.png": 60575,
      "./Damage Enchantment.png": 60583,
      "./Damage Reduction.png": 60587,
      "./Damage.png": 60591,
      "./Digging Aura Enchantment.png": 60600,
      "./Dotted Friendship.png": 60606,
      "./Double Jump.png": 60614,
      "./Double Poop.png": 60621,
      "./Draugr Knight Head.png": 60630,
      "./Draugr Warper Head.png": 60634,
      "./Empty Hunger.png": 60643,
      "./FallDamage.png": 60648,
      "./Farming Aura Enchantment.png": 60654,
      "./Farming Yield Enchantment.png": 60662,
      "./Feather Falling.png": 60664,
      "./Feed Aura.png": 60673,
      "./Firecracker Boost Enchantment.png": 60678,
      "./Firecracker Cooldown Enchantment.png": 60685,
      "./Fist.png": 60689,
      "./Friends.png": 60693,
      "./Friendship.png": 60697,
      "./Frozen.png": 60706,
      "./Gliding Speed Enchantment.png": 60712,
      "./Gliding.png": 60714,
      "./Glowing.png": 60722,
      "./Haste.png": 60729,
      "./Healing Pulse.png": 60731,
      "./Health Enchantment.png": 60733,
      "./Health Regen Enchantment.png": 60739,
      "./Health Regen.png": 60748,
      "./Health.png": 60753,
      "./HealthShield.png": 60761,
      "./Heat Resistance.png": 60765,
      "./Horizontal Knockback Enchantment.png": 60768,
      "./Hunger.png": 60777,
      "./Hydrated.png": 60780,
      "./Invisible.png": 60785,
      "./Irradiated.png": 60792,
      "./Jump Boost.png": 60795,
      "./Knockback Resist Enchantment.png": 60804,
      "./Lifesteal.png": 60811,
      "./Lumber Aura Enchantment.png": 60814,
      "./Magma Golem Head.png": 60819,
      "./Max Health.png": 60821,
      "./Mining Aura Enchantment.png": 60828,
      "./Mining Yield Enchantment.png": 60830,
      "./Mining Yield.png": 60839,
      "./Mob Slayer.png": 60842,
      "./Mob Yield.png": 60851,
      "./Momentum Enchantment.png": 60853,
      "./Mystery Fish.png": 60856,
      "./Night Vision.png": 60863,
      "./Obsidian Boating.png": 60870,
      "./Pack Leader.png": 60874,
      "./Pickpocketer.png": 60882,
      "./Pixelated Heart.png": 60884,
      "./Poison Claws.png": 60892,
      "./Poisoned.png": 60900,
      "./Poopy.png": 60904,
      "./Protection Enchantment.png": 60907,
      "./Question Mark.png": 60916,
      "./Quick Charge Enchantment.png": 60922,
      "./Rainbow Wool.png": 60930,
      "./Rested Aura.png": 60932,
      "./Rested Damage.png": 60937,
      "./Rested Farming Yield.png": 60941,
      "./Rested Haste.png": 60943,
      "./Rested Speed.png": 60949,
      "./Riding Speed.png": 60957,
      "./Riding.png": 60962,
      "./Self Yield.png": 60964,
      "./Slowness.png": 60966,
      "./Speed.png": 60974,
      "./Stomp Damage Enchantment.png": 60979,
      "./Thief.png": 60988,
      "./Thorns.png": 60996,
      "./Trader Black.png": 60999,
      "./Trader Blue.png": 61002,
      "./Trader Piggy.png": 61011,
      "./Vertical Knockback Enchantment.png": 61015,
      "./VoidJump.png": 61018,
      "./Wall Climbing.png": 61022,
      "./Weakness.png": 61027,
      "./X-Ray Vision.png": 61032
    };

    function zT(TT) {
      var UT = MT(TT);
      return mT(UT)
    }

    function MT(TT) {
      if (!mT.o(WT, TT)) {
        var UT = new Error("Cannot find module '" + TT + "'");
        throw UT.code = "MODULE_NOT_FOUND", UT
      }
      return WT[TT]
    }
    zT.keys = function() {
      return Object.keys(WT)
    }, zT.resolve = MT, TT.exports = zT, zT.id = 60501
  },
  61046: (TT, UT, mT) => {
    var WT = {
      "./arrow.png": 61055,
      "./bubble.png": 61060,
      "./critical_hit.png": 61066,
      "./drift.png": 61070,
      "./effect_5.png": 61072,
      "./fishingFishSilhouette.png": 61080,
      "./generic_2.png": 61089,
      "./glint.png": 61093,
      "./heart.png": 61101,
      "./scary_face.png": 61103,
      "./soul_0.png": 61106,
      "./square_particle.png": 61110,
      "./z-particle.png": 61118
    };

    function zT(TT) {
      var UT = MT(TT);
      return mT(UT)
    }

    function MT(TT) {
      if (!mT.o(WT, TT)) {
        var UT = new Error("Cannot find module '" + TT + "'");
        throw UT.code = "MODULE_NOT_FOUND", UT
      }
      return WT[TT]
    }
    zT.keys = function() {
      return Object.keys(WT)
    }, zT.resolve = MT, TT.exports = zT, zT.id = 61046
  },
  60508: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60512: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60515: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60522: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60531: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60538: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60545: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60548: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60552: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60560: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60565: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60570: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60575: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60583: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60587: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60591: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60600: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60606: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60614: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60621: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60630: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60634: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60643: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60648: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60654: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60662: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60664: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60673: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60678: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60685: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60689: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60693: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60697: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60706: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60712: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60714: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60722: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60729: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60731: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60733: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60739: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60748: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60753: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60761: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60765: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60768: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60777: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60780: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60785: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60792: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60795: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60804: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60811: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60814: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  60819: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  60821: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  60828: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  60830: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  60839: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  60842: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  60851: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  60853: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  60856: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  60863: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  60870: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  60874: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  60882: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  60884: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  60892: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  60900: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  60904: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  60907: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  60916: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  60922: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  60930: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  60932: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  60937: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  60941: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  60943: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  60949: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  60957: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  60962: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  60964: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  60966: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  60974: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  60979: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  60988: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  60996: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  60999: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61002: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61011: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61015: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61018: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61022: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61027: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61032: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61055: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61060: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61066: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61070: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61072: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61080: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61089: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61093: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61101: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61103: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61106: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61110: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61118: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61039: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);