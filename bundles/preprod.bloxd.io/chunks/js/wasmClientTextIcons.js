export const id = 61;
export const ids = [61];
export const modules = {
  60291: (CC, zC, ZC) => {
    var QC = {
      "./Air Walk.png": 60299,
      "./Antlers Bonus.png": 60301,
      "./Arrow Damage Enchantment.png": 60307,
      "./Arrow Speed Enchantment.png": 60311,
      "./Attack Speed Enchantment.png": 60320,
      "./Blindness.png": 60329,
      "./Boating.png": 60333,
      "./Bounciness.png": 60342,
      "./Brain Rot.png": 60344,
      "./Break Speed Enchantment.png": 60353,
      "./Bunny Hop.png": 60362,
      "./Critical Damage Enchantment.png": 60365,
      "./Cross.png": 60372,
      "./Damage Enchantment.png": 60375,
      "./Damage Reduction.png": 60378,
      "./Damage.png": 60387,
      "./Digging Aura Enchantment.png": 60390,
      "./Dotted Friendship.png": 60397,
      "./Double Jump.png": 60402,
      "./Double Poop.png": 60404,
      "./Draugr Knight Head.png": 60409,
      "./Draugr Warper Head.png": 60417,
      "./Empty Hunger.png": 60424,
      "./FallDamage.png": 60426,
      "./Farming Aura Enchantment.png": 60428,
      "./Farming Yield Enchantment.png": 60435,
      "./Feather Falling.png": 60439,
      "./Feed Aura.png": 60447,
      "./Firecracker Boost Enchantment.png": 60451,
      "./Firecracker Cooldown Enchantment.png": 60460,
      "./Fist.png": 60465,
      "./Friends.png": 60474,
      "./Friendship.png": 60479,
      "./Frozen.png": 60486,
      "./Gliding Speed Enchantment.png": 60494,
      "./Gliding.png": 60497,
      "./Glowing.png": 60505,
      "./Haste.png": 60510,
      "./Healing Pulse.png": 60518,
      "./Health Enchantment.png": 60525,
      "./Health Regen Enchantment.png": 60531,
      "./Health Regen.png": 60537,
      "./Health.png": 60545,
      "./HealthShield.png": 60549,
      "./Heat Resistance.png": 60558,
      "./Horizontal Knockback Enchantment.png": 60561,
      "./Hunger.png": 60563,
      "./Hydrated.png": 60570,
      "./Invisible.png": 60577,
      "./Irradiated.png": 60585,
      "./Jump Boost.png": 60593,
      "./Knockback Resist Enchantment.png": 60600,
      "./Lifesteal.png": 60605,
      "./Lumber Aura Enchantment.png": 60610,
      "./Magma Golem Head.png": 60616,
      "./Max Health.png": 60622,
      "./Mining Aura Enchantment.png": 60625,
      "./Mining Yield Enchantment.png": 60628,
      "./Mining Yield.png": 60632,
      "./Mob Slayer.png": 60638,
      "./Mob Yield.png": 60647,
      "./Momentum Enchantment.png": 60654,
      "./Mystery Fish.png": 60656,
      "./Night Vision.png": 60665,
      "./Obsidian Boating.png": 60672,
      "./Pack Leader.png": 60678,
      "./Pickpocketer.png": 60682,
      "./Pixelated Heart.png": 60684,
      "./Poison Claws.png": 60690,
      "./Poisoned.png": 60694,
      "./Poopy.png": 60702,
      "./Protection Enchantment.png": 60707,
      "./Question Mark.png": 60713,
      "./Quick Charge Enchantment.png": 60721,
      "./Rainbow Wool.png": 60729,
      "./Rested Aura.png": 60734,
      "./Rested Damage.png": 60742,
      "./Rested Farming Yield.png": 60745,
      "./Rested Haste.png": 60747,
      "./Rested Speed.png": 60753,
      "./Riding Speed.png": 60755,
      "./Riding.png": 60757,
      "./Self Yield.png": 60762,
      "./Slowness.png": 60767,
      "./Speed.png": 60775,
      "./Stomp Damage Enchantment.png": 60783,
      "./Thief.png": 60786,
      "./Thorns.png": 60791,
      "./Trader Black.png": 60796,
      "./Trader Blue.png": 60803,
      "./Trader Piggy.png": 60806,
      "./Vertical Knockback Enchantment.png": 60808,
      "./VoidJump.png": 60812,
      "./Wall Climbing.png": 60816,
      "./Weakness.png": 60822,
      "./X-Ray Vision.png": 60825
    };

    function wC(CC) {
      var zC = bC(CC);
      return ZC(zC)
    }

    function bC(CC) {
      if (!ZC.o(QC, CC)) {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }
      return QC[CC]
    }
    wC.keys = function() {
      return Object.keys(QC)
    }, wC.resolve = bC, CC.exports = wC, wC.id = 60291
  },
  60838: (CC, zC, ZC) => {
    var QC = {
      "./arrow.png": 60846,
      "./bubble.png": 60853,
      "./critical_hit.png": 60859,
      "./drift.png": 60867,
      "./effect_5.png": 60871,
      "./fishingFishSilhouette.png": 60873,
      "./generic_2.png": 60878,
      "./glint.png": 60883,
      "./heart.png": 60892,
      "./scary_face.png": 60895,
      "./soul_0.png": 60903,
      "./square_particle.png": 60911,
      "./z-particle.png": 60917
    };

    function wC(CC) {
      var zC = bC(CC);
      return ZC(zC)
    }

    function bC(CC) {
      if (!ZC.o(QC, CC)) {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }
      return QC[CC]
    }
    wC.keys = function() {
      return Object.keys(QC)
    }, wC.resolve = bC, CC.exports = wC, wC.id = 60838
  },
  60285: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      blockTextureUrl: () => MC,
      followBundledTextures: () => fC,
      ingameIconUrl: () => WC,
      itemSpriteUrl: () => FC,
      notFoundUrl: () => NC,
      particleUrl: () => gC
    });
    var QC = ZC(40878),
      wC = ZC(1851),
      bC = ZC(2050),
      nC = ZC(3144);

    function fC() {
      (0, bC.q)((() => {
        (0, wC.c)()
      }))
    }

    function oC(CC, zC) {
      const ZC = (0, bC.m)();
      if (null === ZC) return null;
      try {
        return ZC.getDefaultTexture(CC, zC).url
      } catch {
        return null
      }
    }

    function qC(CC, zC) {
      return `${ZC.p}${CC}${encodeURIComponent(zC)}.png`
    }

    function FC(CC) {
      var zC;
      const ZC = "static/items/8cf6154c6eda6753/";
      return (0, QC.e)(CC) ? null !== (zC = function(CC) {
        return oC(CC, nC.f.ITEM)
      }(CC)) && void 0 !== zC ? zC : qC(ZC, CC) : null
    }

    function WC(CC) {
      try {
        return ZC(60291)(`./${CC}.png`)
      } catch {
        return null
      }
    }

    function NC() {
      return ZC(60830)
    }

    function MC(CC) {
      var zC;
      const ZC = "static/blocks/b5f33a3f7a665ddf/";
      return CC.includes("[") ? null : null !== (zC = function(CC) {
        return oC(CC, nC.f.BLOCK)
      }(CC)) && void 0 !== zC ? zC : qC(ZC, CC)
    }

    function gC(CC) {
      try {
        return ZC(60838)(`./${CC}.png`)
      } catch {
        return null
      }
    }
  },
  60299: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60301: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60307: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60311: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60320: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60329: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60333: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60342: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60344: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60353: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60362: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60365: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60372: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60375: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60378: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60387: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60390: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60397: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60402: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60404: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60409: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60417: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60424: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60426: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60428: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60435: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60439: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60447: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60451: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60460: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60465: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60474: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60479: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60486: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60494: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60497: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60505: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60510: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60518: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60525: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60531: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60537: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60545: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60549: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60558: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60561: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60563: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60570: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60577: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60585: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60593: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60600: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60605: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60610: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  60616: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  60622: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  60625: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  60628: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  60632: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  60638: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  60647: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  60654: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  60656: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  60665: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  60672: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  60678: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  60682: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  60684: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  60690: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  60694: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  60702: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  60707: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  60713: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  60721: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  60729: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  60734: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  60742: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  60745: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  60747: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  60753: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  60755: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  60757: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  60762: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  60767: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  60775: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  60783: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  60786: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  60791: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  60796: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  60803: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  60806: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  60808: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  60812: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  60816: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  60822: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  60825: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  60846: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  60853: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  60859: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  60867: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  60871: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  60873: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  60878: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  60883: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  60892: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  60895: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  60903: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  60911: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  60917: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  60830: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);