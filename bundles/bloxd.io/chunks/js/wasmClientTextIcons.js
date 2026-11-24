export const id = 61;
export const ids = [61];
export const modules = {
  60401: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      blockTextureUrl: () => fD,
      followBundledTextures: () => LD,
      ingameIconUrl: () => AD,
      itemSpriteUrl: () => RD,
      notFoundUrl: () => UD,
      particleUrl: () => ID
    });
    var pD = wD(40958),
      sD = wD(1941),
      KD = wD(2119),
      rD = wD(3156);

    function LD() {
      (0, KD.q)((() => {
        (0, sD.b)()
      }))
    }

    function cD(DD, zD) {
      const wD = (0, KD.n)();
      if (null === wD) return null;
      try {
        return wD.getDefaultTexture(DD, zD).url
      } catch {
        return null
      }
    }

    function gD(DD, zD) {
      return `${wD.p}${DD}${encodeURIComponent(zD)}.png`
    }

    function RD(DD) {
      var zD;
      const wD = "static/items/8cf6154c6eda6753/";
      return (0, pD.b)(DD) ? null !== (zD = function(DD) {
        return cD(DD, rD.d.ITEM)
      }(DD)) && void 0 !== zD ? zD : gD(wD, DD) : null
    }

    function AD(DD) {
      try {
        return wD(60407)(`./${DD}.png`)
      } catch {
        return null
      }
    }

    function UD() {
      return wD(60944)
    }

    function fD(DD) {
      var zD;
      const wD = "static/blocks/b5f33a3f7a665ddf/";
      return DD.includes("[") ? null : null !== (zD = function(DD) {
        return cD(DD, rD.d.BLOCK)
      }(DD)) && void 0 !== zD ? zD : gD(wD, DD)
    }

    function ID(DD) {
      try {
        return wD(60953)(`./${DD}.png`)
      } catch {
        return null
      }
    }
  },
  60407: (DD, zD, wD) => {
    var pD = {
      "./Air Walk.png": 60416,
      "./Antlers Bonus.png": 60422,
      "./Arrow Damage Enchantment.png": 60430,
      "./Arrow Speed Enchantment.png": 60435,
      "./Attack Speed Enchantment.png": 60437,
      "./Blindness.png": 60441,
      "./Boating.png": 60449,
      "./Bounciness.png": 60454,
      "./Brain Rot.png": 60463,
      "./Break Speed Enchantment.png": 60466,
      "./Bunny Hop.png": 60472,
      "./Critical Damage Enchantment.png": 60474,
      "./Cross.png": 60476,
      "./Damage Enchantment.png": 60485,
      "./Damage Reduction.png": 60489,
      "./Damage.png": 60491,
      "./Digging Aura Enchantment.png": 60499,
      "./Dotted Friendship.png": 60508,
      "./Double Jump.png": 60511,
      "./Double Poop.png": 60519,
      "./Draugr Knight Head.png": 60528,
      "./Draugr Warper Head.png": 60531,
      "./Empty Hunger.png": 60535,
      "./FallDamage.png": 60544,
      "./Farming Aura Enchantment.png": 60550,
      "./Farming Yield Enchantment.png": 60553,
      "./Feather Falling.png": 60556,
      "./Feed Aura.png": 60563,
      "./Firecracker Boost Enchantment.png": 60566,
      "./Firecracker Cooldown Enchantment.png": 60572,
      "./Fist.png": 60578,
      "./Friends.png": 60586,
      "./Friendship.png": 60591,
      "./Frozen.png": 60596,
      "./Gliding Speed Enchantment.png": 60604,
      "./Gliding.png": 60612,
      "./Glowing.png": 60617,
      "./Haste.png": 60622,
      "./Healing Pulse.png": 60624,
      "./Health Enchantment.png": 60626,
      "./Health Regen Enchantment.png": 60628,
      "./Health Regen.png": 60633,
      "./Health.png": 60639,
      "./HealthShield.png": 60641,
      "./Heat Resistance.png": 60647,
      "./Horizontal Knockback Enchantment.png": 60650,
      "./Hunger.png": 60659,
      "./Hydrated.png": 60663,
      "./Invisible.png": 60669,
      "./Irradiated.png": 60677,
      "./Jump Boost.png": 60685,
      "./Knockback Resist Enchantment.png": 60688,
      "./Lifesteal.png": 60695,
      "./Lumber Aura Enchantment.png": 60699,
      "./Magma Golem Head.png": 60701,
      "./Max Health.png": 60710,
      "./Mining Aura Enchantment.png": 60713,
      "./Mining Yield Enchantment.png": 60720,
      "./Mining Yield.png": 60725,
      "./Mob Slayer.png": 60729,
      "./Mob Yield.png": 60731,
      "./Momentum Enchantment.png": 60738,
      "./Mystery Fish.png": 60746,
      "./Night Vision.png": 60754,
      "./Obsidian Boating.png": 60756,
      "./Pack Leader.png": 60761,
      "./Pickpocketer.png": 60769,
      "./Pixelated Heart.png": 60777,
      "./Poison Claws.png": 60779,
      "./Poisoned.png": 60785,
      "./Poopy.png": 60788,
      "./Protection Enchantment.png": 60793,
      "./Question Mark.png": 60799,
      "./Quick Charge Enchantment.png": 60805,
      "./Rainbow Wool.png": 60814,
      "./Rested Aura.png": 60820,
      "./Rested Damage.png": 60822,
      "./Rested Farming Yield.png": 60831,
      "./Rested Haste.png": 60838,
      "./Rested Speed.png": 60842,
      "./Riding Speed.png": 60848,
      "./Riding.png": 60854,
      "./Self Yield.png": 60857,
      "./Slowness.png": 60861,
      "./Speed.png": 60865,
      "./Stomp Damage Enchantment.png": 60872,
      "./Thief.png": 60880,
      "./Thorns.png": 60884,
      "./Trader Black.png": 60889,
      "./Trader Blue.png": 60898,
      "./Trader Piggy.png": 60906,
      "./Vertical Knockback Enchantment.png": 60913,
      "./VoidJump.png": 60919,
      "./Wall Climbing.png": 60927,
      "./Weakness.png": 60933,
      "./X-Ray Vision.png": 60942
    };

    function sD(DD) {
      var zD = KD(DD);
      return wD(zD)
    }

    function KD(DD) {
      if (!wD.o(pD, DD)) {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }
      return pD[DD]
    }
    sD.keys = function() {
      return Object.keys(pD)
    }, sD.resolve = KD, DD.exports = sD, sD.id = 60407
  },
  60953: (DD, zD, wD) => {
    var pD = {
      "./arrow.png": 60959,
      "./bubble.png": 60962,
      "./critical_hit.png": 60964,
      "./drift.png": 60966,
      "./effect_5.png": 60971,
      "./fishingFishSilhouette.png": 60978,
      "./generic_2.png": 60984,
      "./glint.png": 60990,
      "./heart.png": 60996,
      "./scary_face.png": 60998,
      "./soul_0.png": 61003,
      "./square_particle.png": 61006,
      "./z-particle.png": 61014
    };

    function sD(DD) {
      var zD = KD(DD);
      return wD(zD)
    }

    function KD(DD) {
      if (!wD.o(pD, DD)) {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }
      return pD[DD]
    }
    sD.keys = function() {
      return Object.keys(pD)
    }, sD.resolve = KD, DD.exports = sD, sD.id = 60953
  },
  60416: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60422: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60430: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60435: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60437: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60441: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60449: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60454: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60463: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60466: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60472: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60474: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60476: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60485: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60489: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60491: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60499: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60508: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60511: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60519: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60528: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60531: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60535: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60544: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60550: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60553: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60556: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60563: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60566: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60572: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60578: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60586: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60591: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60596: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60604: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60612: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60617: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60622: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60624: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60626: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60628: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60633: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60639: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60641: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60647: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60650: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60659: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60663: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60669: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60677: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60685: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60688: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60695: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60699: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  60701: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  60710: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  60713: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  60720: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  60725: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  60729: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  60731: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  60738: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  60746: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  60754: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  60756: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  60761: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  60769: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  60777: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  60779: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  60785: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  60788: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  60793: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  60799: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  60805: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  60814: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  60820: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  60822: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  60831: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  60838: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  60842: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  60848: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  60854: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  60857: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  60861: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  60865: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  60872: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  60880: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  60884: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  60889: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  60898: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  60906: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  60913: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  60919: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  60927: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  60933: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  60942: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  60959: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  60962: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  60964: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  60966: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  60971: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  60978: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  60984: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  60990: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  60996: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  60998: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61003: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61006: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61014: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  60944: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);