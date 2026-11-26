export const id = 73;
export const ids = [73];
export const modules = {
  63305: (UU, XU, zU) => {
    var cU = {
      "./Air Walk.png": 63307,
      "./Antlers Bonus.png": 63310,
      "./Arrow Damage Enchantment.png": 63317,
      "./Arrow Speed Enchantment.png": 63326,
      "./Attack Speed Enchantment.png": 63331,
      "./Blindness.png": 63339,
      "./Boating.png": 63342,
      "./Bounciness.png": 63346,
      "./Brain Rot.png": 63351,
      "./Break Speed Enchantment.png": 63358,
      "./Bunny Hop.png": 63362,
      "./Critical Damage Enchantment.png": 63364,
      "./Cross.png": 63367,
      "./Damage Enchantment.png": 63373,
      "./Damage Reduction.png": 63377,
      "./Damage.png": 63382,
      "./Digging Aura Enchantment.png": 63387,
      "./Dotted Friendship.png": 63393,
      "./Double Jump.png": 63396,
      "./Double Poop.png": 63404,
      "./Draugr Knight Head.png": 63411,
      "./Draugr Warper Head.png": 63413,
      "./Empty Hunger.png": 63419,
      "./FallDamage.png": 63427,
      "./Farming Aura Enchantment.png": 63433,
      "./Farming Yield Enchantment.png": 63435,
      "./Feather Falling.png": 63441,
      "./Feed Aura.png": 63445,
      "./Firecracker Boost Enchantment.png": 63451,
      "./Firecracker Cooldown Enchantment.png": 63459,
      "./Fist.png": 63465,
      "./Friends.png": 63474,
      "./Friendship.png": 63481,
      "./Frozen.png": 63490,
      "./Gliding Speed Enchantment.png": 63497,
      "./Gliding.png": 63500,
      "./Glowing.png": 63504,
      "./Haste.png": 63506,
      "./Healing Pulse.png": 63511,
      "./Health Enchantment.png": 63520,
      "./Health Regen Enchantment.png": 63524,
      "./Health Regen.png": 63528,
      "./Health.png": 63535,
      "./HealthShield.png": 63540,
      "./Heat Resistance.png": 63547,
      "./Horizontal Knockback Enchantment.png": 63556,
      "./Hunger.png": 63562,
      "./Hydrated.png": 63569,
      "./Invisible.png": 63573,
      "./Irradiated.png": 63575,
      "./Jump Boost.png": 63580,
      "./Knockback Resist Enchantment.png": 63585,
      "./Lifesteal.png": 63587,
      "./Lumber Aura Enchantment.png": 63596,
      "./Magma Golem Head.png": 63598,
      "./Max Health.png": 63602,
      "./Mining Aura Enchantment.png": 63611,
      "./Mining Yield Enchantment.png": 63617,
      "./Mining Yield.png": 63626,
      "./Mob Slayer.png": 63630,
      "./Mob Yield.png": 63638,
      "./Momentum Enchantment.png": 63640,
      "./Mystery Fish.png": 63642,
      "./Night Vision.png": 63651,
      "./Obsidian Boating.png": 63657,
      "./Pack Leader.png": 63660,
      "./Pickpocketer.png": 63668,
      "./Pixelated Heart.png": 63672,
      "./Poison Claws.png": 63676,
      "./Poisoned.png": 63684,
      "./Poopy.png": 63690,
      "./Protection Enchantment.png": 63697,
      "./Question Mark.png": 63703,
      "./Quick Charge Enchantment.png": 63706,
      "./Rainbow Wool.png": 63708,
      "./Rested Aura.png": 63714,
      "./Rested Damage.png": 63722,
      "./Rested Farming Yield.png": 63727,
      "./Rested Haste.png": 63734,
      "./Rested Speed.png": 63739,
      "./Riding Speed.png": 63748,
      "./Riding.png": 63756,
      "./Self Yield.png": 63764,
      "./Slowness.png": 63770,
      "./Speed.png": 63775,
      "./Stomp Damage Enchantment.png": 63779,
      "./Thief.png": 63783,
      "./Thorns.png": 63791,
      "./Trader Black.png": 63797,
      "./Trader Blue.png": 63801,
      "./Trader Piggy.png": 63810,
      "./Vertical Knockback Enchantment.png": 63812,
      "./VoidJump.png": 63818,
      "./Wall Climbing.png": 63824,
      "./Weakness.png": 63827,
      "./X-Ray Vision.png": 63829
    };

    function yU(UU) {
      var XU = QU(UU);
      return zU(XU)
    }

    function QU(UU) {
      if (!zU.o(cU, UU)) {
        var XU = new Error("Cannot find module '" + UU + "'");
        throw XU.code = "MODULE_NOT_FOUND", XU
      }
      return cU[UU]
    }
    yU.keys = function() {
      return Object.keys(cU)
    }, yU.resolve = QU, UU.exports = yU, yU.id = 63305
  },
  63844: (UU, XU, zU) => {
    var cU = {
      "./arrow.png": 63852,
      "./bubble.png": 63854,
      "./critical_hit.png": 63857,
      "./drift.png": 63865,
      "./effect_5.png": 63873,
      "./fishingFishSilhouette.png": 63882,
      "./generic_2.png": 63886,
      "./glint.png": 63893,
      "./heart.png": 63902,
      "./scary_face.png": 63910,
      "./snowflake.png": 63917,
      "./soul_0.png": 63926,
      "./square_particle.png": 63934,
      "./z-particle.png": 63936
    };

    function yU(UU) {
      var XU = QU(UU);
      return zU(XU)
    }

    function QU(UU) {
      if (!zU.o(cU, UU)) {
        var XU = new Error("Cannot find module '" + UU + "'");
        throw XU.code = "MODULE_NOT_FOUND", XU
      }
      return cU[UU]
    }
    yU.keys = function() {
      return Object.keys(cU)
    }, yU.resolve = QU, UU.exports = yU, yU.id = 63844
  },
  63299: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      blockTextureUrl: () => IU,
      followBundledTextures: () => FU,
      ingameIconUrl: () => YU,
      itemSpriteUrl: () => EU,
      notFoundUrl: () => NU,
      particleUrl: () => pU
    });
    var cU = zU(42147),
      yU = zU(2014),
      QU = zU(2210),
      AU = zU(3534);

    function FU() {
      (0, QU.s)((() => {
        (0, yU.e)()
      }))
    }

    function oU(UU, XU) {
      const zU = (0, QU.r)();
      if (null === zU) return null;
      try {
        return zU.getDefaultTexture(UU, XU).url
      } catch {
        return null
      }
    }

    function DU(UU, XU) {
      return `${zU.p}${UU}${encodeURIComponent(XU)}.png`
    }

    function EU(UU) {
      var XU;
      const zU = "static/items/1a4d1f22bd315291/";
      return (0, cU.b)(UU) ? null !== (XU = function(UU) {
        return oU(UU, AU.f.ITEM)
      }(UU)) && void 0 !== XU ? XU : DU(zU, UU) : null
    }

    function YU(UU) {
      try {
        return zU(63305)(`./${UU}.png`)
      } catch {
        return null
      }
    }

    function NU() {
      return zU(63835)
    }

    function IU(UU) {
      var XU;
      const zU = "static/blocks/b5f33a3f7a665ddf/";
      return UU.includes("[") ? null : null !== (XU = function(UU) {
        return oU(UU, AU.f.BLOCK)
      }(UU)) && void 0 !== XU ? XU : DU(zU, UU)
    }

    function pU(UU) {
      try {
        return zU(63844)(`./${UU}.png`)
      } catch {
        return null
      }
    }
  },
  63307: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  63310: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  63317: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  63326: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  63331: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  63339: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  63342: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  63346: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  63351: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  63358: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  63362: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  63364: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  63367: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  63373: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  63377: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  63382: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  63387: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  63393: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  63396: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  63404: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  63411: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  63413: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  63419: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  63427: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  63433: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  63435: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  63441: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  63445: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  63451: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  63459: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  63465: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  63474: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  63481: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  63490: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  63497: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  63500: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  63504: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  63506: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  63511: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  63520: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  63524: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  63528: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  63535: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  63540: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  63547: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  63556: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  63562: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  63569: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  63573: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  63575: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  63580: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  63585: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  63587: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  63596: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  63598: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  63602: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  63611: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  63617: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  63626: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  63630: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  63638: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  63640: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  63642: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  63651: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  63657: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  63660: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  63668: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  63672: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  63676: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  63684: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  63690: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  63697: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  63703: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  63706: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  63708: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  63714: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  63722: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  63727: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  63734: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  63739: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  63748: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  63756: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  63764: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  63770: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  63775: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  63779: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  63783: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  63791: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  63797: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  63801: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  63810: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  63812: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  63818: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  63824: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  63827: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  63829: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  63852: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  63854: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  63857: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  63865: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  63873: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  63882: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  63886: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  63893: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  63902: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  63910: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  63917: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  63926: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  63934: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  63936: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  63835: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);