export const id = 62;
export const ids = [62];
export const modules = {
  61162: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      blockTextureUrl: () => QG,
      followBundledTextures: () => kG,
      ingameIconUrl: () => pG,
      itemSpriteUrl: () => VG,
      notFoundUrl: () => fG,
      particleUrl: () => KG
    });
    var wG = ZG(41435),
      SG = ZG(1910),
      LG = ZG(2128),
      yG = ZG(3144);

    function kG() {
      (0, LG.t)((() => {
        (0, SG.d)()
      }))
    }

    function UG(GG, bG) {
      const ZG = (0, LG.p)();
      if (null === ZG) return null;
      try {
        return ZG.getDefaultTexture(GG, bG).url
      } catch {
        return null
      }
    }

    function YG(GG, bG) {
      return `${ZG.p}${GG}${encodeURIComponent(bG)}.png`
    }

    function VG(GG) {
      var bG;
      const ZG = "static/items/8cf6154c6eda6753/";
      return (0, wG.b)(GG) ? null !== (bG = function(GG) {
        return UG(GG, yG.g.ITEM)
      }(GG)) && void 0 !== bG ? bG : YG(ZG, GG) : null
    }

    function pG(GG) {
      try {
        return ZG(61170)(`./${GG}.png`)
      } catch {
        return null
      }
    }

    function fG() {
      return ZG(61726)
    }

    function QG(GG) {
      var bG;
      const ZG = "static/blocks/b5f33a3f7a665ddf/";
      return GG.includes("[") ? null : null !== (bG = function(GG) {
        return UG(GG, yG.g.BLOCK)
      }(GG)) && void 0 !== bG ? bG : YG(ZG, GG)
    }

    function KG(GG) {
      try {
        return ZG(61731)(`./${GG}.png`)
      } catch {
        return null
      }
    }
  },
  61170: (GG, bG, ZG) => {
    var wG = {
      "./Air Walk.png": 61174,
      "./Antlers Bonus.png": 61181,
      "./Arrow Damage Enchantment.png": 61189,
      "./Arrow Speed Enchantment.png": 61192,
      "./Attack Speed Enchantment.png": 61199,
      "./Blindness.png": 61208,
      "./Boating.png": 61216,
      "./Bounciness.png": 61221,
      "./Brain Rot.png": 61228,
      "./Break Speed Enchantment.png": 61235,
      "./Bunny Hop.png": 61241,
      "./Critical Damage Enchantment.png": 61250,
      "./Cross.png": 61256,
      "./Damage Enchantment.png": 61265,
      "./Damage Reduction.png": 61269,
      "./Damage.png": 61271,
      "./Digging Aura Enchantment.png": 61275,
      "./Dotted Friendship.png": 61284,
      "./Double Jump.png": 61290,
      "./Double Poop.png": 61292,
      "./Draugr Knight Head.png": 61298,
      "./Draugr Warper Head.png": 61306,
      "./Empty Hunger.png": 61311,
      "./FallDamage.png": 61318,
      "./Farming Aura Enchantment.png": 61325,
      "./Farming Yield Enchantment.png": 61328,
      "./Feather Falling.png": 61336,
      "./Feed Aura.png": 61344,
      "./Firecracker Boost Enchantment.png": 61352,
      "./Firecracker Cooldown Enchantment.png": 61354,
      "./Fist.png": 61363,
      "./Friends.png": 61367,
      "./Friendship.png": 61370,
      "./Frozen.png": 61378,
      "./Gliding Speed Enchantment.png": 61380,
      "./Gliding.png": 61388,
      "./Glowing.png": 61396,
      "./Haste.png": 61403,
      "./Healing Pulse.png": 61406,
      "./Health Enchantment.png": 61412,
      "./Health Regen Enchantment.png": 61414,
      "./Health Regen.png": 61420,
      "./Health.png": 61423,
      "./HealthShield.png": 61432,
      "./Heat Resistance.png": 61437,
      "./Horizontal Knockback Enchantment.png": 61440,
      "./Hunger.png": 61444,
      "./Hydrated.png": 61451,
      "./Invisible.png": 61454,
      "./Irradiated.png": 61458,
      "./Jump Boost.png": 61465,
      "./Knockback Resist Enchantment.png": 61473,
      "./Lifesteal.png": 61476,
      "./Lumber Aura Enchantment.png": 61485,
      "./Magma Golem Head.png": 61488,
      "./Max Health.png": 61490,
      "./Mining Aura Enchantment.png": 61498,
      "./Mining Yield Enchantment.png": 61504,
      "./Mining Yield.png": 61510,
      "./Mob Slayer.png": 61517,
      "./Mob Yield.png": 61524,
      "./Momentum Enchantment.png": 61526,
      "./Mystery Fish.png": 61529,
      "./Night Vision.png": 61537,
      "./Obsidian Boating.png": 61546,
      "./Pack Leader.png": 61551,
      "./Pickpocketer.png": 61555,
      "./Pixelated Heart.png": 61561,
      "./Poison Claws.png": 61564,
      "./Poisoned.png": 61568,
      "./Poopy.png": 61572,
      "./Protection Enchantment.png": 61581,
      "./Question Mark.png": 61584,
      "./Quick Charge Enchantment.png": 61591,
      "./Rainbow Wool.png": 61600,
      "./Rested Aura.png": 61606,
      "./Rested Damage.png": 61613,
      "./Rested Farming Yield.png": 61621,
      "./Rested Haste.png": 61630,
      "./Rested Speed.png": 61632,
      "./Riding Speed.png": 61636,
      "./Riding.png": 61645,
      "./Self Yield.png": 61652,
      "./Slowness.png": 61654,
      "./Speed.png": 61656,
      "./Stomp Damage Enchantment.png": 61662,
      "./Thief.png": 61670,
      "./Thorns.png": 61672,
      "./Trader Black.png": 61678,
      "./Trader Blue.png": 61686,
      "./Trader Piggy.png": 61688,
      "./Vertical Knockback Enchantment.png": 61693,
      "./VoidJump.png": 61701,
      "./Wall Climbing.png": 61710,
      "./Weakness.png": 61717,
      "./X-Ray Vision.png": 61719
    };

    function SG(GG) {
      var bG = LG(GG);
      return ZG(bG)
    }

    function LG(GG) {
      if (!ZG.o(wG, GG)) {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }
      return wG[GG]
    }
    SG.keys = function() {
      return Object.keys(wG)
    }, SG.resolve = LG, GG.exports = SG, SG.id = 61170
  },
  61731: (GG, bG, ZG) => {
    var wG = {
      "./arrow.png": 61739,
      "./bubble.png": 61741,
      "./critical_hit.png": 61746,
      "./drift.png": 61755,
      "./effect_5.png": 61760,
      "./fishingFishSilhouette.png": 61767,
      "./generic_2.png": 61771,
      "./glint.png": 61774,
      "./heart.png": 61778,
      "./scary_face.png": 61784,
      "./soul_0.png": 61787,
      "./square_particle.png": 61791,
      "./z-particle.png": 61797
    };

    function SG(GG) {
      var bG = LG(GG);
      return ZG(bG)
    }

    function LG(GG) {
      if (!ZG.o(wG, GG)) {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }
      return wG[GG]
    }
    SG.keys = function() {
      return Object.keys(wG)
    }, SG.resolve = LG, GG.exports = SG, SG.id = 61731
  },
  61174: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  61181: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  61189: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  61192: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  61199: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  61208: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  61216: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  61221: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  61228: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  61235: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  61241: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  61250: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  61256: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  61265: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  61269: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  61271: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  61275: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  61284: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  61290: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  61292: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  61298: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  61306: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  61311: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  61318: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  61325: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  61328: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  61336: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  61344: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  61352: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  61354: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  61363: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  61367: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  61370: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  61378: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  61380: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  61388: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  61396: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  61403: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  61406: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  61412: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  61414: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  61420: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  61423: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  61432: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  61437: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  61440: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  61444: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  61451: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  61454: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  61458: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  61465: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  61473: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  61476: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  61485: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  61488: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  61490: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61498: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61504: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61510: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61517: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61524: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61526: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61529: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61537: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61546: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61551: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61555: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61561: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61564: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61568: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61572: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61581: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61584: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61591: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61600: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61606: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61613: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61621: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61630: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61632: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61636: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61645: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61652: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61654: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61656: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61662: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61670: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61672: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61678: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61686: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61688: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61693: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61701: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61710: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61717: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61719: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61739: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61741: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61746: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61755: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61760: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61767: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61771: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61774: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61778: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61784: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61787: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61791: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61797: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61726: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);