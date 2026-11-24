export const id = 61;
export const ids = [61];
export const modules = {
  60692: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      blockTextureUrl: () => aS,
      followBundledTextures: () => NS,
      ingameIconUrl: () => fS,
      itemSpriteUrl: () => IS,
      notFoundUrl: () => kS,
      particleUrl: () => KS
    });
    var tS = gS(41064),
      bS = gS(2073),
      XS = gS(2242),
      xS = gS(3338);

    function NS() {
      (0, XS.q)((() => {
        (0, bS.c)()
      }))
    }

    function qS(SS, HS) {
      const gS = (0, XS.p)();
      if (null === gS) return null;
      try {
        return gS.getDefaultTexture(SS, HS).url
      } catch {
        return null
      }
    }

    function uS(SS, HS) {
      return `${gS.p}${SS}${encodeURIComponent(HS)}.png`
    }

    function IS(SS) {
      var HS;
      const gS = "static/items/8cf6154c6eda6753/";
      return (0, tS.c)(SS) ? null !== (HS = function(SS) {
        return qS(SS, xS.e.ITEM)
      }(SS)) && void 0 !== HS ? HS : uS(gS, SS) : null
    }

    function fS(SS) {
      try {
        return gS(60700)(`./${SS}.png`)
      } catch {
        return null
      }
    }

    function kS() {
      return gS(61236)
    }

    function aS(SS) {
      var HS;
      const gS = "static/blocks/b5f33a3f7a665ddf/";
      return SS.includes("[") ? null : null !== (HS = function(SS) {
        return qS(SS, xS.e.BLOCK)
      }(SS)) && void 0 !== HS ? HS : uS(gS, SS)
    }

    function KS(SS) {
      try {
        return gS(61243)(`./${SS}.png`)
      } catch {
        return null
      }
    }
  },
  60700: (SS, HS, gS) => {
    var tS = {
      "./Air Walk.png": 60707,
      "./Antlers Bonus.png": 60711,
      "./Arrow Damage Enchantment.png": 60713,
      "./Arrow Speed Enchantment.png": 60717,
      "./Attack Speed Enchantment.png": 60720,
      "./Blindness.png": 60722,
      "./Boating.png": 60730,
      "./Bounciness.png": 60736,
      "./Brain Rot.png": 60745,
      "./Break Speed Enchantment.png": 60748,
      "./Bunny Hop.png": 60750,
      "./Critical Damage Enchantment.png": 60758,
      "./Cross.png": 60767,
      "./Damage Enchantment.png": 60776,
      "./Damage Reduction.png": 60782,
      "./Damage.png": 60790,
      "./Digging Aura Enchantment.png": 60798,
      "./Dotted Friendship.png": 60800,
      "./Double Jump.png": 60806,
      "./Double Poop.png": 60811,
      "./Draugr Knight Head.png": 60817,
      "./Draugr Warper Head.png": 60819,
      "./Empty Hunger.png": 60823,
      "./FallDamage.png": 60826,
      "./Farming Aura Enchantment.png": 60835,
      "./Farming Yield Enchantment.png": 60843,
      "./Feather Falling.png": 60850,
      "./Feed Aura.png": 60856,
      "./Firecracker Boost Enchantment.png": 60864,
      "./Firecracker Cooldown Enchantment.png": 60872,
      "./Fist.png": 60874,
      "./Friends.png": 60882,
      "./Friendship.png": 60890,
      "./Frozen.png": 60894,
      "./Gliding Speed Enchantment.png": 60903,
      "./Gliding.png": 60906,
      "./Glowing.png": 60909,
      "./Haste.png": 60916,
      "./Healing Pulse.png": 60921,
      "./Health Enchantment.png": 60923,
      "./Health Regen Enchantment.png": 60930,
      "./Health Regen.png": 60932,
      "./Health.png": 60941,
      "./HealthShield.png": 60946,
      "./Heat Resistance.png": 60949,
      "./Horizontal Knockback Enchantment.png": 60951,
      "./Hunger.png": 60954,
      "./Hydrated.png": 60956,
      "./Invisible.png": 60965,
      "./Irradiated.png": 60971,
      "./Jump Boost.png": 60980,
      "./Knockback Resist Enchantment.png": 60985,
      "./Lifesteal.png": 60992,
      "./Lumber Aura Enchantment.png": 60996,
      "./Magma Golem Head.png": 61002,
      "./Max Health.png": 61005,
      "./Mining Aura Enchantment.png": 61013,
      "./Mining Yield Enchantment.png": 61021,
      "./Mining Yield.png": 61029,
      "./Mob Slayer.png": 61033,
      "./Mob Yield.png": 61042,
      "./Momentum Enchantment.png": 61045,
      "./Mystery Fish.png": 61050,
      "./Night Vision.png": 61053,
      "./Obsidian Boating.png": 61062,
      "./Pack Leader.png": 61065,
      "./Pickpocketer.png": 61072,
      "./Pixelated Heart.png": 61078,
      "./Poison Claws.png": 61082,
      "./Poisoned.png": 61091,
      "./Poopy.png": 61095,
      "./Protection Enchantment.png": 61102,
      "./Question Mark.png": 61106,
      "./Quick Charge Enchantment.png": 61113,
      "./Rainbow Wool.png": 61116,
      "./Rested Aura.png": 61125,
      "./Rested Damage.png": 61129,
      "./Rested Farming Yield.png": 61134,
      "./Rested Haste.png": 61141,
      "./Rested Speed.png": 61146,
      "./Riding Speed.png": 61148,
      "./Riding.png": 61154,
      "./Self Yield.png": 61159,
      "./Slowness.png": 61165,
      "./Speed.png": 61170,
      "./Stomp Damage Enchantment.png": 61174,
      "./Thief.png": 61180,
      "./Thorns.png": 61188,
      "./Trader Black.png": 61194,
      "./Trader Blue.png": 61199,
      "./Trader Piggy.png": 61205,
      "./Vertical Knockback Enchantment.png": 61211,
      "./VoidJump.png": 61219,
      "./Wall Climbing.png": 61222,
      "./Weakness.png": 61224,
      "./X-Ray Vision.png": 61233
    };

    function bS(SS) {
      var HS = XS(SS);
      return gS(HS)
    }

    function XS(SS) {
      if (!gS.o(tS, SS)) {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }
      return tS[SS]
    }
    bS.keys = function() {
      return Object.keys(tS)
    }, bS.resolve = XS, SS.exports = bS, bS.id = 60700
  },
  61243: (SS, HS, gS) => {
    var tS = {
      "./arrow.png": 61250,
      "./bubble.png": 61252,
      "./critical_hit.png": 61261,
      "./drift.png": 61264,
      "./effect_5.png": 61266,
      "./fishingFishSilhouette.png": 61272,
      "./generic_2.png": 61276,
      "./glint.png": 61278,
      "./heart.png": 61280,
      "./scary_face.png": 61282,
      "./soul_0.png": 61287,
      "./square_particle.png": 61291,
      "./z-particle.png": 61300
    };

    function bS(SS) {
      var HS = XS(SS);
      return gS(HS)
    }

    function XS(SS) {
      if (!gS.o(tS, SS)) {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }
      return tS[SS]
    }
    bS.keys = function() {
      return Object.keys(tS)
    }, bS.resolve = XS, SS.exports = bS, bS.id = 61243
  },
  60707: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60711: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60713: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60717: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60720: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60722: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60730: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60736: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60745: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60748: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60750: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60758: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60767: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60776: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60782: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60790: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60798: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60800: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60806: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60811: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60817: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60819: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60823: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60826: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60835: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60843: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60850: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60856: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60864: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60872: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60874: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60882: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60890: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60894: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60903: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60906: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60909: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60916: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60921: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60923: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60930: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60932: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60941: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60946: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60949: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60951: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60954: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60956: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60965: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60971: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60980: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60985: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60992: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60996: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  61002: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  61005: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61013: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61021: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61029: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61033: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61042: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61045: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61050: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61053: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61062: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61065: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61072: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61078: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61082: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61091: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61095: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61102: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61106: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61113: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61116: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61125: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61129: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61134: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61141: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61146: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61148: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61154: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61159: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61165: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61170: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61174: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61180: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61188: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61194: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61199: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61205: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61211: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61219: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61222: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61224: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61233: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61250: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61252: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61261: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61264: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61266: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61272: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61276: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61278: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61280: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61282: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61287: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61291: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61300: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61236: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);