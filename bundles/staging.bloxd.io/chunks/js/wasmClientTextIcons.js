export const id = 62;
export const ids = [62];
export const modules = {
  60737: (pp, ip, cp) => {
    var Op = {
      "./Air Walk.png": 60741,
      "./Antlers Bonus.png": 60744,
      "./Arrow Damage Enchantment.png": 60752,
      "./Arrow Speed Enchantment.png": 60759,
      "./Attack Speed Enchantment.png": 60762,
      "./Blindness.png": 60770,
      "./Boating.png": 60777,
      "./Bounciness.png": 60783,
      "./Brain Rot.png": 60785,
      "./Break Speed Enchantment.png": 60788,
      "./Bunny Hop.png": 60794,
      "./Critical Damage Enchantment.png": 60796,
      "./Cross.png": 60803,
      "./Damage Enchantment.png": 60809,
      "./Damage Reduction.png": 60811,
      "./Damage.png": 60813,
      "./Digging Aura Enchantment.png": 60822,
      "./Dotted Friendship.png": 60828,
      "./Double Jump.png": 60831,
      "./Double Poop.png": 60839,
      "./Draugr Knight Head.png": 60842,
      "./Draugr Warper Head.png": 60844,
      "./Empty Hunger.png": 60849,
      "./FallDamage.png": 60851,
      "./Farming Aura Enchantment.png": 60857,
      "./Farming Yield Enchantment.png": 60866,
      "./Feather Falling.png": 60872,
      "./Feed Aura.png": 60876,
      "./Firecracker Boost Enchantment.png": 60880,
      "./Firecracker Cooldown Enchantment.png": 60882,
      "./Fist.png": 60884,
      "./Friends.png": 60890,
      "./Friendship.png": 60894,
      "./Frozen.png": 60902,
      "./Gliding Speed Enchantment.png": 60905,
      "./Gliding.png": 60913,
      "./Glowing.png": 60919,
      "./Haste.png": 60927,
      "./Healing Pulse.png": 60934,
      "./Health Enchantment.png": 60942,
      "./Health Regen Enchantment.png": 60945,
      "./Health Regen.png": 60954,
      "./Health.png": 60961,
      "./HealthShield.png": 60968,
      "./Heat Resistance.png": 60971,
      "./Horizontal Knockback Enchantment.png": 60974,
      "./Hunger.png": 60980,
      "./Hydrated.png": 60987,
      "./Invisible.png": 60995,
      "./Irradiated.png": 60998,
      "./Jump Boost.png": 61007,
      "./Knockback Resist Enchantment.png": 61015,
      "./Lifesteal.png": 61017,
      "./Lumber Aura Enchantment.png": 61025,
      "./Magma Golem Head.png": 61032,
      "./Max Health.png": 61040,
      "./Mining Aura Enchantment.png": 61047,
      "./Mining Yield Enchantment.png": 61054,
      "./Mining Yield.png": 61056,
      "./Mob Slayer.png": 61061,
      "./Mob Yield.png": 61065,
      "./Momentum Enchantment.png": 61070,
      "./Mystery Fish.png": 61078,
      "./Night Vision.png": 61082,
      "./Obsidian Boating.png": 61090,
      "./Pack Leader.png": 61098,
      "./Pickpocketer.png": 61107,
      "./Pixelated Heart.png": 61116,
      "./Poison Claws.png": 61120,
      "./Poisoned.png": 61129,
      "./Poopy.png": 61138,
      "./Protection Enchantment.png": 61147,
      "./Question Mark.png": 61154,
      "./Quick Charge Enchantment.png": 61157,
      "./Rainbow Wool.png": 61165,
      "./Rested Aura.png": 61169,
      "./Rested Damage.png": 61177,
      "./Rested Farming Yield.png": 61185,
      "./Rested Haste.png": 61188,
      "./Rested Speed.png": 61193,
      "./Riding Speed.png": 61201,
      "./Riding.png": 61209,
      "./Self Yield.png": 61215,
      "./Slowness.png": 61218,
      "./Speed.png": 61220,
      "./Stomp Damage Enchantment.png": 61224,
      "./Thief.png": 61230,
      "./Thorns.png": 61234,
      "./Trader Black.png": 61238,
      "./Trader Blue.png": 61240,
      "./Trader Piggy.png": 61249,
      "./Vertical Knockback Enchantment.png": 61258,
      "./VoidJump.png": 61260,
      "./Wall Climbing.png": 61265,
      "./Weakness.png": 61267,
      "./X-Ray Vision.png": 61273
    };

    function op(pp) {
      var ip = Ip(pp);
      return cp(ip)
    }

    function Ip(pp) {
      if (!cp.o(Op, pp)) {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }
      return Op[pp]
    }
    op.keys = function() {
      return Object.keys(Op)
    }, op.resolve = Ip, pp.exports = op, op.id = 60737
  },
  61284: (pp, ip, cp) => {
    var Op = {
      "./arrow.png": 61292,
      "./bubble.png": 61300,
      "./critical_hit.png": 61308,
      "./drift.png": 61315,
      "./effect_5.png": 61320,
      "./fishingFishSilhouette.png": 61326,
      "./generic_2.png": 61333,
      "./glint.png": 61337,
      "./heart.png": 61340,
      "./scary_face.png": 61348,
      "./soul_0.png": 61350,
      "./square_particle.png": 61359,
      "./z-particle.png": 61361
    };

    function op(pp) {
      var ip = Ip(pp);
      return cp(ip)
    }

    function Ip(pp) {
      if (!cp.o(Op, pp)) {
        var ip = new Error("Cannot find module '" + pp + "'");
        throw ip.code = "MODULE_NOT_FOUND", ip
      }
      return Op[pp]
    }
    op.keys = function() {
      return Object.keys(Op)
    }, op.resolve = Ip, pp.exports = op, op.id = 61284
  },
  60734: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      blockTextureUrl: () => Wp,
      followBundledTextures: () => xp,
      ingameIconUrl: () => Ap,
      itemSpriteUrl: () => Dp,
      notFoundUrl: () => Pp,
      particleUrl: () => yp
    });
    var Op = cp(41262),
      op = cp(1971),
      Ip = cp(2174),
      Sp = cp(3267);

    function xp() {
      (0, Ip.t)((() => {
        (0, op.b)()
      }))
    }

    function Lp(pp, ip) {
      const cp = (0, Ip.p)();
      if (null === cp) return null;
      try {
        return cp.getDefaultTexture(pp, ip).url
      } catch {
        return null
      }
    }

    function Yp(pp, ip) {
      return `${cp.p}${pp}${encodeURIComponent(ip)}.png`
    }

    function Dp(pp) {
      var ip;
      const cp = "static/items/8cf6154c6eda6753/";
      return (0, Op.d)(pp) ? null !== (ip = function(pp) {
        return Lp(pp, Sp.i.ITEM)
      }(pp)) && void 0 !== ip ? ip : Yp(cp, pp) : null
    }

    function Ap(pp) {
      try {
        return cp(60737)(`./${pp}.png`)
      } catch {
        return null
      }
    }

    function Pp() {
      return cp(61280)
    }

    function Wp(pp) {
      var ip;
      const cp = "static/blocks/b5f33a3f7a665ddf/";
      return pp.includes("[") ? null : null !== (ip = function(pp) {
        return Lp(pp, Sp.i.BLOCK)
      }(pp)) && void 0 !== ip ? ip : Yp(cp, pp)
    }

    function yp(pp) {
      try {
        return cp(61284)(`./${pp}.png`)
      } catch {
        return null
      }
    }
  },
  60741: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60744: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60752: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60759: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60762: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60770: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60777: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60783: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60785: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60788: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60794: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60796: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60803: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60809: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60811: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60813: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60822: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60828: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60831: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60839: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60842: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60844: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60849: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60851: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60857: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60866: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60872: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60876: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60880: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60882: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60884: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60890: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60894: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60902: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60905: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60913: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60919: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60927: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60934: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60942: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60945: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60954: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60961: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60968: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60971: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60974: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60980: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60987: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60995: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60998: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  61007: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  61015: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  61017: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  61025: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  61032: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  61040: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61047: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61054: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61056: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61061: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61065: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61070: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61078: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61082: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61090: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61098: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61107: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61116: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61120: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61129: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61138: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61147: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61154: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61157: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61165: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61169: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61177: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61185: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61188: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61193: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61201: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61209: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61215: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61218: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61220: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61224: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61230: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61234: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61238: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61240: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61249: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61258: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61260: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61265: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61267: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61273: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61292: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61300: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61308: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61315: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61320: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61326: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61333: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61337: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61340: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61348: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61350: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61359: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61361: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61280: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);