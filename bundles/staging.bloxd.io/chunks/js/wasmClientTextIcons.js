export const id = 61;
export const ids = [61];
export const modules = {
  60005: (kk, ek, ik) => {
    var Dk = {
      "./Air Walk.png": 60007,
      "./Antlers Bonus.png": 60016,
      "./Arrow Damage Enchantment.png": 60023,
      "./Arrow Speed Enchantment.png": 60029,
      "./Attack Speed Enchantment.png": 60033,
      "./Blindness.png": 60039,
      "./Boating.png": 60044,
      "./Bounciness.png": 60048,
      "./Brain Rot.png": 60055,
      "./Break Speed Enchantment.png": 60063,
      "./Bunny Hop.png": 60067,
      "./Critical Damage Enchantment.png": 60074,
      "./Cross.png": 60081,
      "./Damage Enchantment.png": 60089,
      "./Damage Reduction.png": 60095,
      "./Damage.png": 60097,
      "./Digging Aura Enchantment.png": 60102,
      "./Dotted Friendship.png": 60109,
      "./Double Jump.png": 60116,
      "./Double Poop.png": 60120,
      "./Draugr Knight Head.png": 60126,
      "./Draugr Warper Head.png": 60134,
      "./Empty Hunger.png": 60138,
      "./FallDamage.png": 60143,
      "./Farming Aura Enchantment.png": 60150,
      "./Farming Yield Enchantment.png": 60156,
      "./Feather Falling.png": 60162,
      "./Feed Aura.png": 60169,
      "./Firecracker Boost Enchantment.png": 60172,
      "./Firecracker Cooldown Enchantment.png": 60181,
      "./Fist.png": 60189,
      "./Friends.png": 60196,
      "./Friendship.png": 60204,
      "./Frozen.png": 60206,
      "./Gliding Speed Enchantment.png": 60212,
      "./Gliding.png": 60220,
      "./Glowing.png": 60222,
      "./Haste.png": 60228,
      "./Healing Pulse.png": 60230,
      "./Health Enchantment.png": 60234,
      "./Health Regen Enchantment.png": 60243,
      "./Health Regen.png": 60251,
      "./Health.png": 60260,
      "./HealthShield.png": 60262,
      "./Heat Resistance.png": 60266,
      "./Horizontal Knockback Enchantment.png": 60270,
      "./Hunger.png": 60276,
      "./Hydrated.png": 60279,
      "./Invisible.png": 60286,
      "./Irradiated.png": 60294,
      "./Jump Boost.png": 60303,
      "./Knockback Resist Enchantment.png": 60306,
      "./Lifesteal.png": 60312,
      "./Lumber Aura Enchantment.png": 60319,
      "./Magma Golem Head.png": 60321,
      "./Max Health.png": 60330,
      "./Mining Aura Enchantment.png": 60337,
      "./Mining Yield Enchantment.png": 60344,
      "./Mining Yield.png": 60348,
      "./Mob Slayer.png": 60355,
      "./Mob Yield.png": 60364,
      "./Momentum Enchantment.png": 60370,
      "./Mystery Fish.png": 60376,
      "./Night Vision.png": 60383,
      "./Obsidian Boating.png": 60387,
      "./Pack Leader.png": 60390,
      "./Pickpocketer.png": 60396,
      "./Pixelated Heart.png": 60405,
      "./Poison Claws.png": 60409,
      "./Poisoned.png": 60415,
      "./Poopy.png": 60419,
      "./Protection Enchantment.png": 60424,
      "./Question Mark.png": 60428,
      "./Quick Charge Enchantment.png": 60432,
      "./Rainbow Wool.png": 60438,
      "./Rested Aura.png": 60445,
      "./Rested Damage.png": 60448,
      "./Rested Farming Yield.png": 60452,
      "./Rested Haste.png": 60460,
      "./Rested Speed.png": 60467,
      "./Riding Speed.png": 60474,
      "./Riding.png": 60480,
      "./Self Yield.png": 60489,
      "./Slowness.png": 60498,
      "./Speed.png": 60500,
      "./Stomp Damage Enchantment.png": 60507,
      "./Thief.png": 60516,
      "./Thorns.png": 60518,
      "./Trader Black.png": 60523,
      "./Trader Blue.png": 60528,
      "./Trader Piggy.png": 60530,
      "./Vertical Knockback Enchantment.png": 60535,
      "./VoidJump.png": 60541,
      "./Wall Climbing.png": 60550,
      "./Weakness.png": 60559,
      "./X-Ray Vision.png": 60565
    };

    function fk(kk) {
      var ek = Sk(kk);
      return ik(ek)
    }

    function Sk(kk) {
      if (!ik.o(Dk, kk)) {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }
      return Dk[kk]
    }
    fk.keys = function() {
      return Object.keys(Dk)
    }, fk.resolve = Sk, kk.exports = fk, fk.id = 60005
  },
  60575: (kk, ek, ik) => {
    var Dk = {
      "./arrow.png": 60580,
      "./bubble.png": 60583,
      "./critical_hit.png": 60588,
      "./drift.png": 60594,
      "./effect_5.png": 60601,
      "./fishingFishSilhouette.png": 60608,
      "./generic_2.png": 60617,
      "./glint.png": 60620,
      "./heart.png": 60624,
      "./scary_face.png": 60631,
      "./soul_0.png": 60637,
      "./square_particle.png": 60642,
      "./z-particle.png": 60647
    };

    function fk(kk) {
      var ek = Sk(kk);
      return ik(ek)
    }

    function Sk(kk) {
      if (!ik.o(Dk, kk)) {
        var ek = new Error("Cannot find module '" + kk + "'");
        throw ek.code = "MODULE_NOT_FOUND", ek
      }
      return Dk[kk]
    }
    fk.keys = function() {
      return Object.keys(Dk)
    }, fk.resolve = Sk, kk.exports = fk, fk.id = 60575
  },
  59999: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      blockTextureUrl: () => nk,
      followBundledTextures: () => rk,
      ingameIconUrl: () => Kk,
      itemSpriteUrl: () => Mk,
      notFoundUrl: () => xk,
      particleUrl: () => Uk
    });
    var Dk = ik(40630),
      fk = ik(1903),
      Sk = ik(2095),
      bk = ik(3139);

    function rk() {
      (0, Sk.r)((() => {
        (0, fk.c)()
      }))
    }

    function Pk(kk, ek) {
      const ik = (0, Sk.o)();
      if (null === ik) return null;
      try {
        return ik.getDefaultTexture(kk, ek).url
      } catch {
        return null
      }
    }

    function mk(kk, ek) {
      return `${ik.p}${kk}${encodeURIComponent(ek)}.png`
    }

    function Mk(kk) {
      var ek;
      const ik = "static/items/f8c148434246a2c1/";
      return (0, Dk.c)(kk) ? null !== (ek = function(kk) {
        return Pk(kk, bk.f.ITEM)
      }(kk)) && void 0 !== ek ? ek : mk(ik, kk) : null
    }

    function Kk(kk) {
      try {
        return ik(60005)(`./${kk}.png`)
      } catch {
        return null
      }
    }

    function xk() {
      return ik(60569)
    }

    function nk(kk) {
      var ek;
      const ik = "static/blocks/b5f33a3f7a665ddf/";
      return kk.includes("[") ? null : null !== (ek = function(kk) {
        return Pk(kk, bk.f.BLOCK)
      }(kk)) && void 0 !== ek ? ek : mk(ik, kk)
    }

    function Uk(kk) {
      try {
        return ik(60575)(`./${kk}.png`)
      } catch {
        return null
      }
    }
  },
  60007: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60016: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60023: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60029: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60033: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60039: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60044: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60048: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60055: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60063: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60067: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60074: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60081: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60089: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60095: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60097: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60102: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60109: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60116: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60120: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60126: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60134: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60138: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60143: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60150: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60156: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60162: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60169: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60172: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60181: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60189: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60196: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60204: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60206: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60212: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60220: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60222: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60228: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60230: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60234: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60243: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60251: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60260: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60262: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60266: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60270: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60276: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60279: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60286: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60294: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60303: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60306: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60312: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60319: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  60321: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  60330: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  60337: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  60344: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  60348: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  60355: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  60364: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  60370: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  60376: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  60383: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  60387: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  60390: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  60396: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  60405: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  60409: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  60415: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  60419: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  60424: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  60428: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  60432: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  60438: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  60445: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  60448: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  60452: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  60460: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  60467: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  60474: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  60480: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  60489: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  60498: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  60500: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  60507: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  60516: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  60518: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  60523: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  60528: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  60530: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  60535: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  60541: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  60550: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  60559: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  60565: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  60580: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  60583: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  60588: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  60594: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  60601: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  60608: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  60617: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  60620: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  60624: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  60631: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  60637: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  60642: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  60647: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  60569: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);