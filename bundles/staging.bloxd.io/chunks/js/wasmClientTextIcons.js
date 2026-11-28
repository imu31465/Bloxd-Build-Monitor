export const id = 74;
export const ids = [74];
export const modules = {
  43159: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      blockTextureUrl: () => Nd,
      followBundledTextures: () => Kd,
      ingameIconUrl: () => td,
      itemSpriteUrl: () => Qd,
      notFoundUrl: () => od,
      particleUrl: () => qd
    });
    var Wd = md(37846),
      Fd = md(2100),
      Rd = md(2319),
      Xd = md(4385);

    function Kd() {
      (0, Rd.l)((() => {
        (0, Fd.d)()
      }))
    }

    function hd(dd, Od) {
      const md = (0, Rd.k)();
      if (null === md) return null;
      try {
        return md.getDefaultTexture(dd, Od).url
      } catch {
        return null
      }
    }

    function vd(dd, Od) {
      return `${md.p}${dd}${encodeURIComponent(Od)}.png`
    }

    function Qd(dd) {
      var Od;
      const md = "static/items/ebe659c2e2d3ef4e/";
      return (0, Wd.b)(dd) ? null !== (Od = function(dd) {
        return hd(dd, Xd.c.ITEM)
      }(dd)) && void 0 !== Od ? Od : vd(md, dd) : null
    }

    function td(dd) {
      try {
        return md(43163)(`./${dd}.png`)
      } catch {
        return null
      }
    }

    function od() {
      return md(43685)
    }

    function Nd(dd) {
      var Od;
      const md = "static/blocks/b5f33a3f7a665ddf/";
      return dd.includes("[") ? null : null !== (Od = function(dd) {
        return hd(dd, Xd.c.BLOCK)
      }(dd)) && void 0 !== Od ? Od : vd(md, dd)
    }

    function qd(dd) {
      try {
        return md(43693)(`./${dd}.png`)
      } catch {
        return null
      }
    }
  },
  43163: (dd, Od, md) => {
    var Wd = {
      "./Air Walk.png": 43168,
      "./Antlers Bonus.png": 43172,
      "./Arrow Damage Enchantment.png": 43174,
      "./Arrow Speed Enchantment.png": 43181,
      "./Attack Speed Enchantment.png": 43187,
      "./Blindness.png": 43192,
      "./Boating.png": 43198,
      "./Bounciness.png": 43205,
      "./Brain Rot.png": 43214,
      "./Break Speed Enchantment.png": 43216,
      "./Bunny Hop.png": 43224,
      "./Critical Damage Enchantment.png": 43228,
      "./Cross.png": 43237,
      "./Damage Enchantment.png": 43243,
      "./Damage Reduction.png": 43249,
      "./Damage.png": 43258,
      "./Digging Aura Enchantment.png": 43261,
      "./Dotted Friendship.png": 43267,
      "./Double Jump.png": 43269,
      "./Double Poop.png": 43277,
      "./Draugr Knight Head.png": 43279,
      "./Draugr Warper Head.png": 43282,
      "./Empty Hunger.png": 43289,
      "./FallDamage.png": 43295,
      "./Farming Aura Enchantment.png": 43299,
      "./Farming Yield Enchantment.png": 43302,
      "./Feather Falling.png": 43307,
      "./Feed Aura.png": 43316,
      "./Firecracker Boost Enchantment.png": 43322,
      "./Firecracker Cooldown Enchantment.png": 43324,
      "./Fist.png": 43326,
      "./Friends.png": 43328,
      "./Friendship.png": 43331,
      "./Frozen.png": 43337,
      "./Gliding Speed Enchantment.png": 43345,
      "./Gliding.png": 43353,
      "./Glowing.png": 43358,
      "./Haste.png": 43362,
      "./Healing Pulse.png": 43366,
      "./Health Enchantment.png": 43369,
      "./Health Regen Enchantment.png": 43373,
      "./Health Regen.png": 43376,
      "./Health.png": 43385,
      "./HealthShield.png": 43391,
      "./Heat Resistance.png": 43397,
      "./Horizontal Knockback Enchantment.png": 43399,
      "./Hunger.png": 43404,
      "./Hydrated.png": 43413,
      "./Invisible.png": 43419,
      "./Irradiated.png": 43422,
      "./Jump Boost.png": 43426,
      "./Knockback Resist Enchantment.png": 43434,
      "./Lifesteal.png": 43443,
      "./Lumber Aura Enchantment.png": 43448,
      "./Magma Golem Head.png": 43454,
      "./Max Health.png": 43460,
      "./Mining Aura Enchantment.png": 43468,
      "./Mining Yield Enchantment.png": 43470,
      "./Mining Yield.png": 43473,
      "./Mob Slayer.png": 43475,
      "./Mob Yield.png": 43482,
      "./Momentum Enchantment.png": 43485,
      "./Mystery Fish.png": 43493,
      "./Night Vision.png": 43496,
      "./Obsidian Boating.png": 43504,
      "./Pack Leader.png": 43509,
      "./Pickpocketer.png": 43516,
      "./Pixelated Heart.png": 43521,
      "./Poison Claws.png": 43525,
      "./Poisoned.png": 43531,
      "./Poopy.png": 43535,
      "./Protection Enchantment.png": 43542,
      "./Question Mark.png": 43549,
      "./Quick Charge Enchantment.png": 43558,
      "./Rainbow Wool.png": 43567,
      "./Rested Aura.png": 43571,
      "./Rested Damage.png": 43580,
      "./Rested Farming Yield.png": 43587,
      "./Rested Haste.png": 43596,
      "./Rested Speed.png": 43598,
      "./Riding Speed.png": 43607,
      "./Riding.png": 43614,
      "./Self Yield.png": 43617,
      "./Slowness.png": 43626,
      "./Speed.png": 43628,
      "./Stomp Damage Enchantment.png": 43633,
      "./Thief.png": 43638,
      "./Thorns.png": 43645,
      "./Trader Black.png": 43649,
      "./Trader Blue.png": 43654,
      "./Trader Piggy.png": 43661,
      "./Vertical Knockback Enchantment.png": 43670,
      "./VoidJump.png": 43672,
      "./Wall Climbing.png": 43676,
      "./Weakness.png": 43678,
      "./X-Ray Vision.png": 43683
    };

    function Fd(dd) {
      var Od = Rd(dd);
      return md(Od)
    }

    function Rd(dd) {
      if (!md.o(Wd, dd)) {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }
      return Wd[dd]
    }
    Fd.keys = function() {
      return Object.keys(Wd)
    }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 43163
  },
  43693: (dd, Od, md) => {
    var Wd = {
      "./arrow.png": 43699,
      "./bubble.png": 43705,
      "./critical_hit.png": 43712,
      "./drift.png": 43720,
      "./effect_5.png": 43723,
      "./fishingFishSilhouette.png": 43732,
      "./generic_2.png": 43738,
      "./glint.png": 43744,
      "./heart.png": 43747,
      "./scary_face.png": 43751,
      "./snowflake.png": 43757,
      "./soul_0.png": 43760,
      "./square_particle.png": 43767,
      "./z-particle.png": 43769
    };

    function Fd(dd) {
      var Od = Rd(dd);
      return md(Od)
    }

    function Rd(dd) {
      if (!md.o(Wd, dd)) {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }
      return Wd[dd]
    }
    Fd.keys = function() {
      return Object.keys(Wd)
    }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 43693
  },
  43168: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  43172: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  43174: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  43181: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  43187: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  43192: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  43198: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  43205: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  43214: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  43216: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  43224: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  43228: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  43237: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  43243: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  43249: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  43258: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  43261: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  43267: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  43269: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  43277: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  43279: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  43282: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  43289: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  43295: (dd, Od, md) => {
    dd.exports = md.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  43299: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  43302: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  43307: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  43316: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  43322: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  43324: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  43326: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  43328: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  43331: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  43337: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  43345: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  43353: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  43358: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  43362: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  43366: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  43369: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  43373: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  43376: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  43385: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  43391: (dd, Od, md) => {
    dd.exports = md.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  43397: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  43399: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  43404: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  43413: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  43419: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  43422: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  43426: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  43434: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  43443: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  43448: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  43454: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  43460: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  43468: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  43470: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  43473: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  43475: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  43482: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  43485: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  43493: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  43496: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  43504: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  43509: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  43516: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  43521: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  43525: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  43531: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  43535: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  43542: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  43549: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  43558: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  43567: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  43571: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  43580: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  43587: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  43596: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  43598: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  43607: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  43614: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  43617: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  43626: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  43628: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  43633: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  43638: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  43645: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  43649: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  43654: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  43661: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  43670: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  43672: (dd, Od, md) => {
    dd.exports = md.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  43676: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  43678: (dd, Od, md) => {
    dd.exports = md.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  43683: (dd, Od, md) => {
    dd.exports = md.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  43699: (dd, Od, md) => {
    dd.exports = md.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  43705: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  43712: (dd, Od, md) => {
    dd.exports = md.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  43720: (dd, Od, md) => {
    dd.exports = md.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  43723: (dd, Od, md) => {
    dd.exports = md.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  43732: (dd, Od, md) => {
    dd.exports = md.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  43738: (dd, Od, md) => {
    dd.exports = md.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  43744: (dd, Od, md) => {
    dd.exports = md.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  43747: (dd, Od, md) => {
    dd.exports = md.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  43751: (dd, Od, md) => {
    dd.exports = md.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  43757: (dd, Od, md) => {
    dd.exports = md.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  43760: (dd, Od, md) => {
    dd.exports = md.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  43767: (dd, Od, md) => {
    dd.exports = md.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  43769: (dd, Od, md) => {
    dd.exports = md.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  43685: (dd, Od, md) => {
    dd.exports = md.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);