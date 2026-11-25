export const id = 62;
export const ids = [62];
export const modules = {
  60859: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      blockTextureUrl: () => Et,
      followBundledTextures: () => dt,
      ingameIconUrl: () => Qt,
      itemSpriteUrl: () => Xt,
      notFoundUrl: () => lt,
      particleUrl: () => ft
    });
    var Ot = Vt(41239),
      qt = Vt(2034),
      Dt = Vt(2208),
      mt = Vt(3231);

    function dt() {
      (0, Dt.n)((() => {
        (0, qt.e)()
      }))
    }

    function jt(tt, et) {
      const Vt = (0, Dt.l)();
      if (null === Vt) return null;
      try {
        return Vt.getDefaultTexture(tt, et).url
      } catch {
        return null
      }
    }

    function Ht(tt, et) {
      return `${Vt.p}${tt}${encodeURIComponent(et)}.png`
    }

    function Xt(tt) {
      var et;
      const Vt = "static/items/8cf6154c6eda6753/";
      return (0, Ot.e)(tt) ? null !== (et = function(tt) {
        return jt(tt, mt.e.ITEM)
      }(tt)) && void 0 !== et ? et : Ht(Vt, tt) : null
    }

    function Qt(tt) {
      try {
        return Vt(60867)(`./${tt}.png`)
      } catch {
        return null
      }
    }

    function lt() {
      return Vt(61413)
    }

    function Et(tt) {
      var et;
      const Vt = "static/blocks/b5f33a3f7a665ddf/";
      return tt.includes("[") ? null : null !== (et = function(tt) {
        return jt(tt, mt.e.BLOCK)
      }(tt)) && void 0 !== et ? et : Ht(Vt, tt)
    }

    function ft(tt) {
      try {
        return Vt(61419)(`./${tt}.png`)
      } catch {
        return null
      }
    }
  },
  60867: (tt, et, Vt) => {
    var Ot = {
      "./Air Walk.png": 60875,
      "./Antlers Bonus.png": 60878,
      "./Arrow Damage Enchantment.png": 60885,
      "./Arrow Speed Enchantment.png": 60891,
      "./Attack Speed Enchantment.png": 60895,
      "./Blindness.png": 60899,
      "./Boating.png": 60902,
      "./Bounciness.png": 60904,
      "./Brain Rot.png": 60910,
      "./Break Speed Enchantment.png": 60913,
      "./Bunny Hop.png": 60919,
      "./Critical Damage Enchantment.png": 60921,
      "./Cross.png": 60928,
      "./Damage Enchantment.png": 60936,
      "./Damage Reduction.png": 60943,
      "./Damage.png": 60951,
      "./Digging Aura Enchantment.png": 60955,
      "./Dotted Friendship.png": 60961,
      "./Double Jump.png": 60964,
      "./Double Poop.png": 60972,
      "./Draugr Knight Head.png": 60974,
      "./Draugr Warper Head.png": 60982,
      "./Empty Hunger.png": 60986,
      "./FallDamage.png": 60995,
      "./Farming Aura Enchantment.png": 61001,
      "./Farming Yield Enchantment.png": 61010,
      "./Feather Falling.png": 61015,
      "./Feed Aura.png": 61018,
      "./Firecracker Boost Enchantment.png": 61027,
      "./Firecracker Cooldown Enchantment.png": 61036,
      "./Fist.png": 61043,
      "./Friends.png": 61049,
      "./Friendship.png": 61052,
      "./Frozen.png": 61059,
      "./Gliding Speed Enchantment.png": 61065,
      "./Gliding.png": 61073,
      "./Glowing.png": 61080,
      "./Haste.png": 61084,
      "./Healing Pulse.png": 61093,
      "./Health Enchantment.png": 61101,
      "./Health Regen Enchantment.png": 61109,
      "./Health Regen.png": 61111,
      "./Health.png": 61116,
      "./HealthShield.png": 61124,
      "./Heat Resistance.png": 61126,
      "./Horizontal Knockback Enchantment.png": 61128,
      "./Hunger.png": 61133,
      "./Hydrated.png": 61136,
      "./Invisible.png": 61142,
      "./Irradiated.png": 61146,
      "./Jump Boost.png": 61151,
      "./Knockback Resist Enchantment.png": 61155,
      "./Lifesteal.png": 61160,
      "./Lumber Aura Enchantment.png": 61167,
      "./Magma Golem Head.png": 61176,
      "./Max Health.png": 61183,
      "./Mining Aura Enchantment.png": 61191,
      "./Mining Yield Enchantment.png": 61194,
      "./Mining Yield.png": 61200,
      "./Mob Slayer.png": 61209,
      "./Mob Yield.png": 61216,
      "./Momentum Enchantment.png": 61220,
      "./Mystery Fish.png": 61228,
      "./Night Vision.png": 61230,
      "./Obsidian Boating.png": 61238,
      "./Pack Leader.png": 61240,
      "./Pickpocketer.png": 61246,
      "./Pixelated Heart.png": 61255,
      "./Poison Claws.png": 61259,
      "./Poisoned.png": 61262,
      "./Poopy.png": 61267,
      "./Protection Enchantment.png": 61273,
      "./Question Mark.png": 61275,
      "./Quick Charge Enchantment.png": 61280,
      "./Rainbow Wool.png": 61289,
      "./Rested Aura.png": 61298,
      "./Rested Damage.png": 61304,
      "./Rested Farming Yield.png": 61311,
      "./Rested Haste.png": 61316,
      "./Rested Speed.png": 61322,
      "./Riding Speed.png": 61328,
      "./Riding.png": 61337,
      "./Self Yield.png": 61344,
      "./Slowness.png": 61352,
      "./Speed.png": 61361,
      "./Stomp Damage Enchantment.png": 61365,
      "./Thief.png": 61367,
      "./Thorns.png": 61374,
      "./Trader Black.png": 61376,
      "./Trader Blue.png": 61380,
      "./Trader Piggy.png": 61385,
      "./Vertical Knockback Enchantment.png": 61393,
      "./VoidJump.png": 61395,
      "./Wall Climbing.png": 61401,
      "./Weakness.png": 61405,
      "./X-Ray Vision.png": 61409
    };

    function qt(tt) {
      var et = Dt(tt);
      return Vt(et)
    }

    function Dt(tt) {
      if (!Vt.o(Ot, tt)) {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }
      return Ot[tt]
    }
    qt.keys = function() {
      return Object.keys(Ot)
    }, qt.resolve = Dt, tt.exports = qt, qt.id = 60867
  },
  61419: (tt, et, Vt) => {
    var Ot = {
      "./arrow.png": 61428,
      "./bubble.png": 61432,
      "./critical_hit.png": 61435,
      "./drift.png": 61442,
      "./effect_5.png": 61448,
      "./fishingFishSilhouette.png": 61456,
      "./generic_2.png": 61464,
      "./glint.png": 61468,
      "./heart.png": 61473,
      "./scary_face.png": 61481,
      "./soul_0.png": 61490,
      "./square_particle.png": 61497,
      "./z-particle.png": 61503
    };

    function qt(tt) {
      var et = Dt(tt);
      return Vt(et)
    }

    function Dt(tt) {
      if (!Vt.o(Ot, tt)) {
        var et = new Error("Cannot find module '" + tt + "'");
        throw et.code = "MODULE_NOT_FOUND", et
      }
      return Ot[tt]
    }
    qt.keys = function() {
      return Object.keys(Ot)
    }, qt.resolve = Dt, tt.exports = qt, qt.id = 61419
  },
  60875: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60878: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60885: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60891: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60895: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60899: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60902: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60904: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60910: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60913: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60919: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60921: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60928: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60936: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60943: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60951: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60955: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60961: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60964: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60972: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60974: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60982: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60986: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60995: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  61001: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  61010: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  61015: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  61018: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  61027: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  61036: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  61043: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  61049: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  61052: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  61059: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  61065: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  61073: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  61080: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  61084: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  61093: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  61101: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  61109: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  61111: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  61116: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  61124: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  61126: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  61128: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  61133: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  61136: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  61142: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  61146: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  61151: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  61155: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  61160: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  61167: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  61176: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  61183: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  61191: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61194: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61200: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61209: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61216: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61220: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61228: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61230: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61238: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61240: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61246: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61255: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61259: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61262: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61267: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61273: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61275: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61280: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61289: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61298: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61304: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61311: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61316: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61322: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61328: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61337: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61344: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61352: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61361: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61365: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61367: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61374: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61376: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61380: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61385: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61393: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61395: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61401: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61405: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61409: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61428: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61432: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61435: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61442: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61448: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61456: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61464: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61468: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61473: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61481: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61490: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61497: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61503: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61413: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);