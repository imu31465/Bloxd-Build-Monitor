export const id = 54;
export const ids = [54];
export const modules = {
  41315: (BB, TB, dB) => {
    var VB = {
      "./Air Walk.png": 41317,
      "./Antlers Bonus.png": 41325,
      "./Arrow Damage Enchantment.png": 41329,
      "./Arrow Speed Enchantment.png": 41332,
      "./Attack Speed Enchantment.png": 41338,
      "./Blindness.png": 41344,
      "./Boating.png": 41353,
      "./Bounciness.png": 41355,
      "./Brain Rot.png": 41364,
      "./Break Speed Enchantment.png": 41370,
      "./Bunny Hop.png": 41372,
      "./Critical Damage Enchantment.png": 41380,
      "./Cross.png": 41384,
      "./Damage Enchantment.png": 41389,
      "./Damage Reduction.png": 41395,
      "./Damage.png": 41400,
      "./Digging Aura Enchantment.png": 41404,
      "./Dotted Friendship.png": 41411,
      "./Double Jump.png": 41420,
      "./Double Poop.png": 41428,
      "./Draugr Knight Head.png": 41430,
      "./Draugr Warper Head.png": 41434,
      "./Empty Hunger.png": 41442,
      "./FallDamage.png": 41446,
      "./Farming Aura Enchantment.png": 41452,
      "./Farming Yield Enchantment.png": 41461,
      "./Feather Falling.png": 41467,
      "./Feed Aura.png": 41473,
      "./Firecracker Boost Enchantment.png": 41482,
      "./Firecracker Cooldown Enchantment.png": 41485,
      "./Fist.png": 41489,
      "./Friends.png": 41497,
      "./Friendship.png": 41501,
      "./Frozen.png": 41503,
      "./Gliding Speed Enchantment.png": 41509,
      "./Gliding.png": 41512,
      "./Glowing.png": 41521,
      "./Haste.png": 41526,
      "./Healing Pulse.png": 41534,
      "./Health Enchantment.png": 41542,
      "./Health Regen Enchantment.png": 41550,
      "./Health Regen.png": 41559,
      "./Health.png": 41561,
      "./HealthShield.png": 41563,
      "./Heat Resistance.png": 41572,
      "./Horizontal Knockback Enchantment.png": 41577,
      "./Hunger.png": 41586,
      "./Hydrated.png": 41591,
      "./Invisible.png": 41596,
      "./Irradiated.png": 41603,
      "./Jump Boost.png": 41608,
      "./Knockback Resist Enchantment.png": 41615,
      "./Lifesteal.png": 41619,
      "./Lumber Aura Enchantment.png": 41628,
      "./Magma Golem Head.png": 41633,
      "./Max Health.png": 41639,
      "./Mining Aura Enchantment.png": 41644,
      "./Mining Yield Enchantment.png": 41653,
      "./Mining Yield.png": 41656,
      "./Mob Slayer.png": 41662,
      "./Mob Yield.png": 41666,
      "./Momentum Enchantment.png": 41674,
      "./Mystery Fish.png": 41679,
      "./Night Vision.png": 41681,
      "./Obsidian Boating.png": 41683,
      "./Pack Leader.png": 41692,
      "./Pickpocketer.png": 41695,
      "./Pixelated Heart.png": 41699,
      "./Poison Claws.png": 41704,
      "./Poisoned.png": 41710,
      "./Poopy.png": 41713,
      "./Protection Enchantment.png": 41716,
      "./Question Mark.png": 41720,
      "./Quick Charge Enchantment.png": 41722,
      "./Rainbow Wool.png": 41731,
      "./Rested Aura.png": 41737,
      "./Rested Damage.png": 41742,
      "./Rested Farming Yield.png": 41745,
      "./Rested Haste.png": 41752,
      "./Rested Speed.png": 41755,
      "./Riding Speed.png": 41763,
      "./Riding.png": 41766,
      "./Self Yield.png": 41775,
      "./Slowness.png": 41782,
      "./Speed.png": 41789,
      "./Stomp Damage Enchantment.png": 41796,
      "./Thief.png": 41805,
      "./Thorns.png": 41812,
      "./Trader Black.png": 41819,
      "./Trader Blue.png": 41823,
      "./Trader Piggy.png": 41826,
      "./Vertical Knockback Enchantment.png": 41831,
      "./VoidJump.png": 41835,
      "./Wall Climbing.png": 41837,
      "./Weakness.png": 41844,
      "./X-Ray Vision.png": 41851
    };

    function yB(BB) {
      var TB = pB(BB);
      return dB(TB)
    }

    function pB(BB) {
      if (!dB.o(VB, BB)) {
        var TB = new Error("Cannot find module '" + BB + "'");
        throw TB.code = "MODULE_NOT_FOUND", TB
      }
      return VB[BB]
    }
    yB.keys = function() {
      return Object.keys(VB)
    }, yB.resolve = pB, BB.exports = yB, yB.id = 41315
  },
  41864: (BB, TB, dB) => {
    var VB = {
      "./arrow.png": 41873,
      "./bubble.png": 41879,
      "./critical_hit.png": 41886,
      "./drift.png": 41890,
      "./effect_5.png": 41895,
      "./fishingFishSilhouette.png": 41902,
      "./generic_2.png": 41909,
      "./glint.png": 41913,
      "./heart.png": 41922,
      "./scary_face.png": 41924,
      "./soul_0.png": 41930,
      "./square_particle.png": 41935,
      "./z-particle.png": 41938
    };

    function yB(BB) {
      var TB = pB(BB);
      return dB(TB)
    }

    function pB(BB) {
      if (!dB.o(VB, BB)) {
        var TB = new Error("Cannot find module '" + BB + "'");
        throw TB.code = "MODULE_NOT_FOUND", TB
      }
      return VB[BB]
    }
    yB.keys = function() {
      return Object.keys(VB)
    }, yB.resolve = pB, BB.exports = yB, yB.id = 41864
  },
  41310: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      blockTextureUrl: () => OB,
      followBundledTextures: () => JB,
      ingameIconUrl: () => kB,
      itemSpriteUrl: () => oB,
      notFoundUrl: () => LB,
      particleUrl: () => DB
    });
    var VB = dB(39470),
      yB = dB(1694),
      pB = dB(2664),
      lB = dB(2633);

    function JB() {
      (0, pB.q)((() => {
        (0, yB.c)()
      }))
    }

    function YB(BB, TB) {
      const dB = (0, pB.n)();
      if (null === dB) return null;
      try {
        return dB.getDefaultTexture(BB, TB).url
      } catch {
        return null
      }
    }

    function gB(BB, TB) {
      return `${dB.p}${BB}${encodeURIComponent(TB)}.png`
    }

    function oB(BB) {
      var TB;
      const dB = "static/items/f8c148434246a2c1/";
      return (0, VB.e)(BB) ? null !== (TB = function(BB) {
        return YB(BB, lB.g.ITEM)
      }(BB)) && void 0 !== TB ? TB : gB(dB, BB) : null
    }

    function kB(BB) {
      try {
        return dB(41315)(`./${BB}.png`)
      } catch {
        return null
      }
    }

    function LB() {
      return dB(41857)
    }

    function OB(BB) {
      var TB;
      const dB = "static/blocks/b5f33a3f7a665ddf/";
      return BB.includes("[") ? null : null !== (TB = function(BB) {
        return YB(BB, lB.g.BLOCK)
      }(BB)) && void 0 !== TB ? TB : gB(dB, BB)
    }

    function DB(BB) {
      try {
        return dB(41864)(`./${BB}.png`)
      } catch {
        return null
      }
    }
  },
  41317: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41325: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41329: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41332: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41338: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41344: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41353: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41355: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41364: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41370: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41372: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41380: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41384: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41389: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41395: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41400: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41404: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41411: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41420: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41428: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41430: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41434: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41442: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41446: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41452: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41461: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41467: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41473: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41482: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41485: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41489: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41497: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41501: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41503: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41509: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41512: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41521: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41526: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41534: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41542: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41550: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41559: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  41561: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  41563: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  41572: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  41577: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  41586: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  41591: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  41596: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  41603: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  41608: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  41615: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  41619: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  41628: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  41633: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  41639: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  41644: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  41653: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  41656: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  41662: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  41666: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  41674: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  41679: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  41681: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  41683: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  41692: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  41695: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  41699: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  41704: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  41710: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  41713: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  41716: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  41720: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  41722: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  41731: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  41737: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  41742: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  41745: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  41752: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  41755: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  41763: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  41766: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  41775: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  41782: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  41789: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  41796: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  41805: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  41812: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  41819: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  41823: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  41826: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  41831: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  41835: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  41837: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  41844: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  41851: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  41873: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  41879: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  41886: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  41890: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  41895: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  41902: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  41909: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  41913: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  41922: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  41924: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  41930: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  41935: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  41938: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  41857: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);