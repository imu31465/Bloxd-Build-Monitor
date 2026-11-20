export const id = 59;
export const ids = [59];
export const modules = {
  41966: (vv, zv, Pv) => {
    var hv = {
      "./Air Walk.png": 41968,
      "./Antlers Bonus.png": 41972,
      "./Arrow Damage Enchantment.png": 41981,
      "./Arrow Speed Enchantment.png": 41984,
      "./Attack Speed Enchantment.png": 41989,
      "./Blindness.png": 41994,
      "./Boating.png": 42002,
      "./Bounciness.png": 42011,
      "./Brain Rot.png": 42020,
      "./Break Speed Enchantment.png": 42028,
      "./Bunny Hop.png": 42033,
      "./Critical Damage Enchantment.png": 42039,
      "./Cross.png": 42041,
      "./Damage Enchantment.png": 42049,
      "./Damage Reduction.png": 42054,
      "./Damage.png": 42059,
      "./Digging Aura Enchantment.png": 42063,
      "./Dotted Friendship.png": 42065,
      "./Double Jump.png": 42074,
      "./Double Poop.png": 42082,
      "./Draugr Knight Head.png": 42086,
      "./Draugr Warper Head.png": 42094,
      "./Empty Hunger.png": 42097,
      "./FallDamage.png": 42102,
      "./Farming Aura Enchantment.png": 42110,
      "./Farming Yield Enchantment.png": 42118,
      "./Feather Falling.png": 42121,
      "./Feed Aura.png": 42129,
      "./Firecracker Boost Enchantment.png": 42133,
      "./Firecracker Cooldown Enchantment.png": 42142,
      "./Fist.png": 42151,
      "./Friends.png": 42159,
      "./Friendship.png": 42163,
      "./Frozen.png": 42170,
      "./Gliding Speed Enchantment.png": 42173,
      "./Gliding.png": 42178,
      "./Glowing.png": 42180,
      "./Haste.png": 42187,
      "./Healing Pulse.png": 42191,
      "./Health Enchantment.png": 42199,
      "./Health Regen Enchantment.png": 42202,
      "./Health Regen.png": 42211,
      "./Health.png": 42220,
      "./HealthShield.png": 42225,
      "./Heat Resistance.png": 42233,
      "./Horizontal Knockback Enchantment.png": 42238,
      "./Hunger.png": 42247,
      "./Hydrated.png": 42256,
      "./Invisible.png": 42258,
      "./Irradiated.png": 42263,
      "./Jump Boost.png": 42272,
      "./Knockback Resist Enchantment.png": 42280,
      "./Lifesteal.png": 42288,
      "./Lumber Aura Enchantment.png": 42292,
      "./Magma Golem Head.png": 42299,
      "./Max Health.png": 42306,
      "./Mining Aura Enchantment.png": 42314,
      "./Mining Yield Enchantment.png": 42316,
      "./Mining Yield.png": 42318,
      "./Mob Slayer.png": 42327,
      "./Mob Yield.png": 42334,
      "./Momentum Enchantment.png": 42336,
      "./Mystery Fish.png": 42339,
      "./Night Vision.png": 42348,
      "./Obsidian Boating.png": 42356,
      "./Pack Leader.png": 42360,
      "./Pickpocketer.png": 42368,
      "./Pixelated Heart.png": 42376,
      "./Poison Claws.png": 42385,
      "./Poisoned.png": 42393,
      "./Poopy.png": 42395,
      "./Protection Enchantment.png": 42397,
      "./Question Mark.png": 42405,
      "./Quick Charge Enchantment.png": 42411,
      "./Rainbow Wool.png": 42418,
      "./Rested Aura.png": 42423,
      "./Rested Damage.png": 42430,
      "./Rested Farming Yield.png": 42437,
      "./Rested Haste.png": 42441,
      "./Rested Speed.png": 42450,
      "./Riding Speed.png": 42453,
      "./Riding.png": 42459,
      "./Self Yield.png": 42461,
      "./Slowness.png": 42466,
      "./Speed.png": 42472,
      "./Stomp Damage Enchantment.png": 42477,
      "./Thief.png": 42484,
      "./Thorns.png": 42490,
      "./Trader Black.png": 42495,
      "./Trader Blue.png": 42502,
      "./Trader Piggy.png": 42506,
      "./Vertical Knockback Enchantment.png": 42513,
      "./VoidJump.png": 42522,
      "./Wall Climbing.png": 42529,
      "./Weakness.png": 42531,
      "./X-Ray Vision.png": 42536
    };

    function Sv(vv) {
      var zv = ev(vv);
      return Pv(zv)
    }

    function ev(vv) {
      if (!Pv.o(hv, vv)) {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }
      return hv[vv]
    }
    Sv.keys = function() {
      return Object.keys(hv)
    }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 41966
  },
  42544: (vv, zv, Pv) => {
    var hv = {
      "./arrow.png": 42546,
      "./bubble.png": 42552,
      "./critical_hit.png": 42560,
      "./drift.png": 42568,
      "./effect_5.png": 42576,
      "./fishingFishSilhouette.png": 42582,
      "./generic_2.png": 42589,
      "./glint.png": 42594,
      "./heart.png": 42597,
      "./scary_face.png": 42602,
      "./soul_0.png": 42609,
      "./square_particle.png": 42615,
      "./z-particle.png": 42624
    };

    function Sv(vv) {
      var zv = ev(vv);
      return Pv(zv)
    }

    function ev(vv) {
      if (!Pv.o(hv, vv)) {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }
      return hv[vv]
    }
    Sv.keys = function() {
      return Object.keys(hv)
    }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 42544
  },
  41959: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      blockTextureUrl: () => wv,
      followBundledTextures: () => pv,
      ingameIconUrl: () => Tv,
      itemSpriteUrl: () => lv,
      notFoundUrl: () => Wv,
      particleUrl: () => av
    });
    var hv = Pv(40054),
      Sv = Pv(1889),
      ev = Pv(2972),
      gv = Pv(2950);

    function pv() {
      (0, ev.n)((() => {
        (0, Sv.e)()
      }))
    }

    function dv(vv, zv) {
      const Pv = (0, ev.m)();
      if (null === Pv) return null;
      try {
        return Pv.getDefaultTexture(vv, zv).url
      } catch {
        return null
      }
    }

    function Nv(vv, zv) {
      return `${Pv.p}${vv}${encodeURIComponent(zv)}.png`
    }

    function lv(vv) {
      var zv;
      const Pv = "static/items/f8c148434246a2c1/";
      return (0, hv.d)(vv) ? null !== (zv = function(vv) {
        return dv(vv, gv.d.ITEM)
      }(vv)) && void 0 !== zv ? zv : Nv(Pv, vv) : null
    }

    function Tv(vv) {
      try {
        return Pv(41966)(`./${vv}.png`)
      } catch {
        return null
      }
    }

    function Wv() {
      return Pv(42540)
    }

    function wv(vv) {
      var zv;
      const Pv = "static/blocks/b5f33a3f7a665ddf/";
      return vv.includes("[") ? null : null !== (zv = function(vv) {
        return dv(vv, gv.d.BLOCK)
      }(vv)) && void 0 !== zv ? zv : Nv(Pv, vv)
    }

    function av(vv) {
      try {
        return Pv(42544)(`./${vv}.png`)
      } catch {
        return null
      }
    }
  },
  41968: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41972: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41981: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41984: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41989: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41994: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42002: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42011: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42020: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42028: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42033: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42039: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42041: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42049: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42054: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42059: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42063: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42065: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42074: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42082: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42086: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42094: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42097: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42102: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42110: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42118: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42121: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42129: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42133: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42142: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42151: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42159: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42163: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42170: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42173: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42178: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42180: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42187: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42191: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42199: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42202: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42211: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42220: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42225: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42233: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42238: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42247: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42256: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42258: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42263: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42272: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42280: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42288: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42292: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42299: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42306: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42314: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42316: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42318: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42327: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42334: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42336: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42339: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42348: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42356: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42360: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42368: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42376: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42385: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42393: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42395: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42397: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42405: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42411: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42418: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42423: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42430: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42437: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42441: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42450: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42453: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42459: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42461: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42466: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42472: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42477: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42484: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42490: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42495: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42502: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42506: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42513: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42522: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42529: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42531: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42536: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42546: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42552: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42560: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42568: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42576: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42582: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42589: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42594: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42597: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42602: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42609: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42615: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42624: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42540: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);