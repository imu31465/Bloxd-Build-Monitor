export const id = 58;
export const ids = [58];
export const modules = {
  41697: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      blockTextureUrl: () => bz,
      followBundledTextures: () => oz,
      ingameIconUrl: () => uz,
      itemSpriteUrl: () => Kz,
      notFoundUrl: () => Nz,
      particleUrl: () => wz
    });
    var Fz = sz(39867),
      Wz = sz(1868),
      Xz = sz(2910),
      Oz = sz(2886);

    function oz() {
      (0, Xz.q)((() => {
        (0, Wz.b)()
      }))
    }

    function vz(zz, tz) {
      const sz = (0, Xz.p)();
      if (null === sz) return null;
      try {
        return sz.getDefaultTexture(zz, tz).url
      } catch {
        return null
      }
    }

    function Uz(zz, tz) {
      return `${sz.p}${zz}${encodeURIComponent(tz)}.png`
    }

    function Kz(zz) {
      var tz;
      const sz = "static/items/f8c148434246a2c1/";
      return (0, Fz.d)(zz) ? null !== (tz = function(zz) {
        return vz(zz, Oz.e.ITEM)
      }(zz)) && void 0 !== tz ? tz : Uz(sz, zz) : null
    }

    function uz(zz) {
      try {
        return sz(41701)(`./${zz}.png`)
      } catch {
        return null
      }
    }

    function Nz() {
      return sz(42215)
    }

    function bz(zz) {
      var tz;
      const sz = "static/blocks/b5f33a3f7a665ddf/";
      return zz.includes("[") ? null : null !== (tz = function(zz) {
        return vz(zz, Oz.e.BLOCK)
      }(zz)) && void 0 !== tz ? tz : Uz(sz, zz)
    }

    function wz(zz) {
      try {
        return sz(42217)(`./${zz}.png`)
      } catch {
        return null
      }
    }
  },
  41701: (zz, tz, sz) => {
    var Fz = {
      "./Air Walk.png": 41703,
      "./Antlers Bonus.png": 41710,
      "./Arrow Damage Enchantment.png": 41713,
      "./Arrow Speed Enchantment.png": 41715,
      "./Attack Speed Enchantment.png": 41723,
      "./Blindness.png": 41731,
      "./Boating.png": 41733,
      "./Bounciness.png": 41739,
      "./Brain Rot.png": 41743,
      "./Break Speed Enchantment.png": 41747,
      "./Bunny Hop.png": 41752,
      "./Critical Damage Enchantment.png": 41754,
      "./Cross.png": 41757,
      "./Damage Enchantment.png": 41764,
      "./Damage Reduction.png": 41768,
      "./Damage.png": 41777,
      "./Digging Aura Enchantment.png": 41784,
      "./Dotted Friendship.png": 41788,
      "./Double Jump.png": 41796,
      "./Double Poop.png": 41798,
      "./Draugr Knight Head.png": 41807,
      "./Draugr Warper Head.png": 41810,
      "./Empty Hunger.png": 41817,
      "./FallDamage.png": 41819,
      "./Farming Aura Enchantment.png": 41821,
      "./Farming Yield Enchantment.png": 41827,
      "./Feather Falling.png": 41833,
      "./Feed Aura.png": 41836,
      "./Firecracker Boost Enchantment.png": 41842,
      "./Firecracker Cooldown Enchantment.png": 41850,
      "./Fist.png": 41857,
      "./Friends.png": 41861,
      "./Friendship.png": 41869,
      "./Frozen.png": 41874,
      "./Gliding Speed Enchantment.png": 41879,
      "./Gliding.png": 41888,
      "./Glowing.png": 41897,
      "./Haste.png": 41900,
      "./Healing Pulse.png": 41908,
      "./Health Enchantment.png": 41916,
      "./Health Regen Enchantment.png": 41918,
      "./Health Regen.png": 41925,
      "./Health.png": 41934,
      "./HealthShield.png": 41936,
      "./Heat Resistance.png": 41942,
      "./Horizontal Knockback Enchantment.png": 41946,
      "./Hunger.png": 41949,
      "./Hydrated.png": 41953,
      "./Invisible.png": 41959,
      "./Irradiated.png": 41968,
      "./Jump Boost.png": 41972,
      "./Knockback Resist Enchantment.png": 41977,
      "./Lifesteal.png": 41985,
      "./Lumber Aura Enchantment.png": 41994,
      "./Magma Golem Head.png": 41996,
      "./Max Health.png": 42002,
      "./Mining Aura Enchantment.png": 42005,
      "./Mining Yield Enchantment.png": 42012,
      "./Mining Yield.png": 42015,
      "./Mob Slayer.png": 42018,
      "./Mob Yield.png": 42020,
      "./Momentum Enchantment.png": 42027,
      "./Mystery Fish.png": 42031,
      "./Night Vision.png": 42036,
      "./Obsidian Boating.png": 42045,
      "./Pack Leader.png": 42053,
      "./Pickpocketer.png": 42058,
      "./Pixelated Heart.png": 42061,
      "./Poison Claws.png": 42065,
      "./Poisoned.png": 42067,
      "./Poopy.png": 42071,
      "./Protection Enchantment.png": 42074,
      "./Question Mark.png": 42082,
      "./Quick Charge Enchantment.png": 42085,
      "./Rainbow Wool.png": 42090,
      "./Rested Aura.png": 42096,
      "./Rested Damage.png": 42103,
      "./Rested Farming Yield.png": 42110,
      "./Rested Haste.png": 42114,
      "./Rested Speed.png": 42123,
      "./Riding Speed.png": 42126,
      "./Riding.png": 42135,
      "./Self Yield.png": 42138,
      "./Slowness.png": 42146,
      "./Speed.png": 42150,
      "./Stomp Damage Enchantment.png": 42158,
      "./Thief.png": 42163,
      "./Thorns.png": 42165,
      "./Trader Black.png": 42173,
      "./Trader Blue.png": 42181,
      "./Trader Piggy.png": 42188,
      "./Vertical Knockback Enchantment.png": 42192,
      "./VoidJump.png": 42199,
      "./Wall Climbing.png": 42203,
      "./Weakness.png": 42208,
      "./X-Ray Vision.png": 42213
    };

    function Wz(zz) {
      var tz = Xz(zz);
      return sz(tz)
    }

    function Xz(zz) {
      if (!sz.o(Fz, zz)) {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }
      return Fz[zz]
    }
    Wz.keys = function() {
      return Object.keys(Fz)
    }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 41701
  },
  42217: (zz, tz, sz) => {
    var Fz = {
      "./arrow.png": 42226,
      "./bubble.png": 42234,
      "./critical_hit.png": 42237,
      "./drift.png": 42244,
      "./effect_5.png": 42250,
      "./fishingFishSilhouette.png": 42259,
      "./generic_2.png": 42263,
      "./glint.png": 42270,
      "./heart.png": 42276,
      "./scary_face.png": 42279,
      "./soul_0.png": 42284,
      "./square_particle.png": 42288,
      "./z-particle.png": 42290
    };

    function Wz(zz) {
      var tz = Xz(zz);
      return sz(tz)
    }

    function Xz(zz) {
      if (!sz.o(Fz, zz)) {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }
      return Fz[zz]
    }
    Wz.keys = function() {
      return Object.keys(Fz)
    }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 42217
  },
  41703: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41710: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41713: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41715: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41723: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41731: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41733: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41739: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41743: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41747: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41752: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41754: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41757: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41764: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41768: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41777: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41784: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41788: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41796: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41798: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41807: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41810: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41817: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41819: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41821: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41827: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41833: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41836: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41842: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41850: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41857: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41861: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41869: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41874: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41879: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41888: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41897: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41900: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41908: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41916: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41918: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41925: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  41934: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  41936: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  41942: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  41946: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  41949: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  41953: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  41959: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  41968: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  41972: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  41977: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  41985: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  41994: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  41996: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42002: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42005: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42012: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42015: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42018: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42020: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42027: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42031: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42036: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42045: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42053: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42058: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42061: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42065: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42067: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42071: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42074: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42082: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42085: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42090: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42096: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42103: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42110: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42114: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42123: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42126: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42135: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42138: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42146: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42150: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42158: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42163: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42165: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42173: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42181: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42188: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42192: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42199: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42203: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42208: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42213: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42226: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42234: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42237: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42244: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42250: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42259: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42263: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42270: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42276: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42279: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42284: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42288: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42290: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42215: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);