export const id = 74;
export const ids = [74];
export const modules = {
  42743: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      blockTextureUrl: () => rR,
      followBundledTextures: () => qR,
      ingameIconUrl: () => KR,
      itemSpriteUrl: () => VR,
      notFoundUrl: () => wR,
      particleUrl: () => eR
    });
    var yR = GR(37357),
      tR = GR(2144),
      uR = GR(2363),
      ZR = GR(4442);

    function qR() {
      (0, uR.r)((() => {
        (0, tR.e)()
      }))
    }

    function iR(RR, JR) {
      const GR = (0, uR.n)();
      if (null === GR) return null;
      try {
        return GR.getDefaultTexture(RR, JR).url
      } catch {
        return null
      }
    }

    function fR(RR, JR) {
      return `${GR.p}${RR}${encodeURIComponent(JR)}.png`
    }

    function VR(RR) {
      var JR;
      const GR = "static/items/ebe659c2e2d3ef4e/";
      return (0, yR.e)(RR) ? null !== (JR = function(RR) {
        return iR(RR, ZR.d.ITEM)
      }(RR)) && void 0 !== JR ? JR : fR(GR, RR) : null
    }

    function KR(RR) {
      try {
        return GR(42745)(`./${RR}.png`)
      } catch {
        return null
      }
    }

    function wR() {
      return GR(43277)
    }

    function rR(RR) {
      var JR;
      const GR = "static/blocks/b5f33a3f7a665ddf/";
      return RR.includes("[") ? null : null !== (JR = function(RR) {
        return iR(RR, ZR.d.BLOCK)
      }(RR)) && void 0 !== JR ? JR : fR(GR, RR)
    }

    function eR(RR) {
      try {
        return GR(43280)(`./${RR}.png`)
      } catch {
        return null
      }
    }
  },
  42745: (RR, JR, GR) => {
    var yR = {
      "./Air Walk.png": 42748,
      "./Antlers Bonus.png": 42757,
      "./Arrow Damage Enchantment.png": 42759,
      "./Arrow Speed Enchantment.png": 42761,
      "./Attack Speed Enchantment.png": 42768,
      "./Blindness.png": 42770,
      "./Boating.png": 42772,
      "./Bounciness.png": 42780,
      "./Brain Rot.png": 42782,
      "./Break Speed Enchantment.png": 42790,
      "./Bunny Hop.png": 42797,
      "./Critical Damage Enchantment.png": 42799,
      "./Cross.png": 42806,
      "./Damage Enchantment.png": 42808,
      "./Damage Reduction.png": 42812,
      "./Damage.png": 42815,
      "./Digging Aura Enchantment.png": 42822,
      "./Dotted Friendship.png": 42824,
      "./Double Jump.png": 42830,
      "./Double Poop.png": 42838,
      "./Draugr Knight Head.png": 42840,
      "./Draugr Warper Head.png": 42848,
      "./Empty Hunger.png": 42853,
      "./FallDamage.png": 42862,
      "./Farming Aura Enchantment.png": 42865,
      "./Farming Yield Enchantment.png": 42872,
      "./Feather Falling.png": 42877,
      "./Feed Aura.png": 42882,
      "./Firecracker Boost Enchantment.png": 42888,
      "./Firecracker Cooldown Enchantment.png": 42890,
      "./Fist.png": 42894,
      "./Friends.png": 42903,
      "./Friendship.png": 42906,
      "./Frozen.png": 42914,
      "./Gliding Speed Enchantment.png": 42922,
      "./Gliding.png": 42927,
      "./Glowing.png": 42936,
      "./Haste.png": 42941,
      "./Healing Pulse.png": 42945,
      "./Health Enchantment.png": 42947,
      "./Health Regen Enchantment.png": 42954,
      "./Health Regen.png": 42962,
      "./Health.png": 42969,
      "./HealthShield.png": 42978,
      "./Heat Resistance.png": 42981,
      "./Horizontal Knockback Enchantment.png": 42988,
      "./Hunger.png": 42990,
      "./Hydrated.png": 42997,
      "./Invisible.png": 43005,
      "./Irradiated.png": 43012,
      "./Jump Boost.png": 43015,
      "./Knockback Resist Enchantment.png": 43021,
      "./Lifesteal.png": 43026,
      "./Lumber Aura Enchantment.png": 43033,
      "./Magma Golem Head.png": 43040,
      "./Max Health.png": 43047,
      "./Mining Aura Enchantment.png": 43052,
      "./Mining Yield Enchantment.png": 43056,
      "./Mining Yield.png": 43064,
      "./Mob Slayer.png": 43073,
      "./Mob Yield.png": 43077,
      "./Momentum Enchantment.png": 43086,
      "./Mystery Fish.png": 43095,
      "./Night Vision.png": 43099,
      "./Obsidian Boating.png": 43103,
      "./Pack Leader.png": 43112,
      "./Pickpocketer.png": 43114,
      "./Pixelated Heart.png": 43119,
      "./Poison Claws.png": 43127,
      "./Poisoned.png": 43135,
      "./Poopy.png": 43138,
      "./Protection Enchantment.png": 43146,
      "./Question Mark.png": 43154,
      "./Quick Charge Enchantment.png": 43159,
      "./Rainbow Wool.png": 43167,
      "./Rested Aura.png": 43174,
      "./Rested Damage.png": 43176,
      "./Rested Farming Yield.png": 43178,
      "./Rested Haste.png": 43180,
      "./Rested Speed.png": 43187,
      "./Riding Speed.png": 43195,
      "./Riding.png": 43204,
      "./Self Yield.png": 43209,
      "./Slowness.png": 43211,
      "./Speed.png": 43214,
      "./Stomp Damage Enchantment.png": 43218,
      "./Thief.png": 43220,
      "./Thorns.png": 43222,
      "./Trader Black.png": 43228,
      "./Trader Blue.png": 43237,
      "./Trader Piggy.png": 43243,
      "./Vertical Knockback Enchantment.png": 43245,
      "./VoidJump.png": 43251,
      "./Wall Climbing.png": 43258,
      "./Weakness.png": 43260,
      "./X-Ray Vision.png": 43268
    };

    function tR(RR) {
      var JR = uR(RR);
      return GR(JR)
    }

    function uR(RR) {
      if (!GR.o(yR, RR)) {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }
      return yR[RR]
    }
    tR.keys = function() {
      return Object.keys(yR)
    }, tR.resolve = uR, RR.exports = tR, tR.id = 42745
  },
  43280: (RR, JR, GR) => {
    var yR = {
      "./arrow.png": 43285,
      "./bubble.png": 43290,
      "./critical_hit.png": 43296,
      "./drift.png": 43301,
      "./effect_5.png": 43304,
      "./fishingFishSilhouette.png": 43308,
      "./generic_2.png": 43313,
      "./glint.png": 43317,
      "./heart.png": 43320,
      "./scary_face.png": 43328,
      "./snowflake.png": 43332,
      "./soul_0.png": 43337,
      "./square_particle.png": 43343,
      "./z-particle.png": 43349
    };

    function tR(RR) {
      var JR = uR(RR);
      return GR(JR)
    }

    function uR(RR) {
      if (!GR.o(yR, RR)) {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }
      return yR[RR]
    }
    tR.keys = function() {
      return Object.keys(yR)
    }, tR.resolve = uR, RR.exports = tR, tR.id = 43280
  },
  42748: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42757: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42759: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42761: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42768: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42770: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42772: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42780: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42782: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42790: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42797: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42799: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42806: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42808: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42812: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42815: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42822: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42824: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42830: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42838: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42840: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42848: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42853: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42862: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42865: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42872: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42877: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42882: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42888: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42890: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42894: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42903: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42906: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42914: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42922: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42927: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42936: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42941: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42945: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42947: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42954: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42962: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42969: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42978: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42981: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42988: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42990: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42997: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  43005: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  43012: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  43015: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  43021: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  43026: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  43033: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  43040: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  43047: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  43052: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  43056: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  43064: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  43073: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  43077: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  43086: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  43095: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  43099: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  43103: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  43112: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  43114: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  43119: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  43127: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  43135: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  43138: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  43146: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  43154: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  43159: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  43167: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  43174: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  43176: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  43178: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  43180: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  43187: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  43195: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  43204: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  43209: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  43211: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  43214: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  43218: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  43220: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  43222: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  43228: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  43237: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  43243: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  43245: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  43251: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  43258: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  43260: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  43268: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  43285: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  43290: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  43296: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  43301: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  43304: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  43308: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  43313: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  43317: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  43320: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  43328: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  43332: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  43337: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  43343: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  43349: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  43277: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);