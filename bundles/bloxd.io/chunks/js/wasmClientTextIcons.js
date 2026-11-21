export const id = 59;
export const ids = [59];
export const modules = {
  42547: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      blockTextureUrl: () => Qd,
      followBundledTextures: () => Zd,
      ingameIconUrl: () => od,
      itemSpriteUrl: () => Kd,
      notFoundUrl: () => ld,
      particleUrl: () => Ld
    });
    var pd = kd(40735),
      Nd = kd(1942),
      Wd = kd(3051),
      Pd = kd(3022);

    function Zd() {
      (0, Wd.r)((() => {
        (0, Nd.e)()
      }))
    }

    function gd(dd, Jd) {
      const kd = (0, Wd.n)();
      if (null === kd) return null;
      try {
        return kd.getDefaultTexture(dd, Jd).url
      } catch {
        return null
      }
    }

    function Cd(dd, Jd) {
      return `${kd.p}${dd}${encodeURIComponent(Jd)}.png`
    }

    function Kd(dd) {
      var Jd;
      const kd = "static/items/f8c148434246a2c1/";
      return (0, pd.b)(dd) ? null !== (Jd = function(dd) {
        return gd(dd, Pd.f.ITEM)
      }(dd)) && void 0 !== Jd ? Jd : Cd(kd, dd) : null
    }

    function od(dd) {
      try {
        return kd(42550)(`./${dd}.png`)
      } catch {
        return null
      }
    }

    function ld() {
      return kd(43071)
    }

    function Qd(dd) {
      var Jd;
      const kd = "static/blocks/b5f33a3f7a665ddf/";
      return dd.includes("[") ? null : null !== (Jd = function(dd) {
        return gd(dd, Pd.f.BLOCK)
      }(dd)) && void 0 !== Jd ? Jd : Cd(kd, dd)
    }

    function Ld(dd) {
      try {
        return kd(43078)(`./${dd}.png`)
      } catch {
        return null
      }
    }
  },
  42550: (dd, Jd, kd) => {
    var pd = {
      "./Air Walk.png": 42553,
      "./Antlers Bonus.png": 42562,
      "./Arrow Damage Enchantment.png": 42566,
      "./Arrow Speed Enchantment.png": 42571,
      "./Attack Speed Enchantment.png": 42574,
      "./Blindness.png": 42577,
      "./Boating.png": 42585,
      "./Bounciness.png": 42590,
      "./Brain Rot.png": 42592,
      "./Break Speed Enchantment.png": 42594,
      "./Bunny Hop.png": 42601,
      "./Critical Damage Enchantment.png": 42607,
      "./Cross.png": 42616,
      "./Damage Enchantment.png": 42624,
      "./Damage Reduction.png": 42629,
      "./Damage.png": 42632,
      "./Digging Aura Enchantment.png": 42639,
      "./Dotted Friendship.png": 42644,
      "./Double Jump.png": 42650,
      "./Double Poop.png": 42658,
      "./Draugr Knight Head.png": 42664,
      "./Draugr Warper Head.png": 42672,
      "./Empty Hunger.png": 42677,
      "./FallDamage.png": 42686,
      "./Farming Aura Enchantment.png": 42695,
      "./Farming Yield Enchantment.png": 42704,
      "./Feather Falling.png": 42709,
      "./Feed Aura.png": 42712,
      "./Firecracker Boost Enchantment.png": 42719,
      "./Firecracker Cooldown Enchantment.png": 42727,
      "./Fist.png": 42729,
      "./Friends.png": 42738,
      "./Friendship.png": 42741,
      "./Frozen.png": 42748,
      "./Gliding Speed Enchantment.png": 42752,
      "./Gliding.png": 42757,
      "./Glowing.png": 42763,
      "./Haste.png": 42772,
      "./Healing Pulse.png": 42775,
      "./Health Enchantment.png": 42783,
      "./Health Regen Enchantment.png": 42792,
      "./Health Regen.png": 42799,
      "./Health.png": 42803,
      "./HealthShield.png": 42805,
      "./Heat Resistance.png": 42810,
      "./Horizontal Knockback Enchantment.png": 42818,
      "./Hunger.png": 42824,
      "./Hydrated.png": 42829,
      "./Invisible.png": 42832,
      "./Irradiated.png": 42841,
      "./Jump Boost.png": 42845,
      "./Knockback Resist Enchantment.png": 42847,
      "./Lifesteal.png": 42849,
      "./Lumber Aura Enchantment.png": 42851,
      "./Magma Golem Head.png": 42859,
      "./Max Health.png": 42866,
      "./Mining Aura Enchantment.png": 42871,
      "./Mining Yield Enchantment.png": 42879,
      "./Mining Yield.png": 42881,
      "./Mob Slayer.png": 42885,
      "./Mob Yield.png": 42890,
      "./Momentum Enchantment.png": 42896,
      "./Mystery Fish.png": 42901,
      "./Night Vision.png": 42908,
      "./Obsidian Boating.png": 42912,
      "./Pack Leader.png": 42919,
      "./Pickpocketer.png": 42922,
      "./Pixelated Heart.png": 42928,
      "./Poison Claws.png": 42934,
      "./Poisoned.png": 42943,
      "./Poopy.png": 42945,
      "./Protection Enchantment.png": 42952,
      "./Question Mark.png": 42958,
      "./Quick Charge Enchantment.png": 42962,
      "./Rainbow Wool.png": 42965,
      "./Rested Aura.png": 42972,
      "./Rested Damage.png": 42981,
      "./Rested Farming Yield.png": 42987,
      "./Rested Haste.png": 42990,
      "./Rested Speed.png": 42994,
      "./Riding Speed.png": 43e3,
      "./Riding.png": 43007,
      "./Self Yield.png": 43011,
      "./Slowness.png": 43015,
      "./Speed.png": 43020,
      "./Stomp Damage Enchantment.png": 43023,
      "./Thief.png": 43026,
      "./Thorns.png": 43028,
      "./Trader Black.png": 43033,
      "./Trader Blue.png": 43036,
      "./Trader Piggy.png": 43044,
      "./Vertical Knockback Enchantment.png": 43046,
      "./VoidJump.png": 43053,
      "./Wall Climbing.png": 43056,
      "./Weakness.png": 43065,
      "./X-Ray Vision.png": 43069
    };

    function Nd(dd) {
      var Jd = Wd(dd);
      return kd(Jd)
    }

    function Wd(dd) {
      if (!kd.o(pd, dd)) {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }
      return pd[dd]
    }
    Nd.keys = function() {
      return Object.keys(pd)
    }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 42550
  },
  43078: (dd, Jd, kd) => {
    var pd = {
      "./arrow.png": 43085,
      "./bubble.png": 43091,
      "./critical_hit.png": 43096,
      "./drift.png": 43098,
      "./effect_5.png": 43101,
      "./fishingFishSilhouette.png": 43109,
      "./generic_2.png": 43114,
      "./glint.png": 43120,
      "./heart.png": 43129,
      "./scary_face.png": 43132,
      "./soul_0.png": 43135,
      "./square_particle.png": 43138,
      "./z-particle.png": 43143
    };

    function Nd(dd) {
      var Jd = Wd(dd);
      return kd(Jd)
    }

    function Wd(dd) {
      if (!kd.o(pd, dd)) {
        var Jd = new Error("Cannot find module '" + dd + "'");
        throw Jd.code = "MODULE_NOT_FOUND", Jd
      }
      return pd[dd]
    }
    Nd.keys = function() {
      return Object.keys(pd)
    }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 43078
  },
  42553: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42562: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42566: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42571: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42574: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42577: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42585: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42590: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42592: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42594: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42601: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42607: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42616: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42624: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42629: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42632: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42639: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42644: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42650: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42658: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42664: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42672: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42677: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42686: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42695: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42704: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42709: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42712: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42719: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42727: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42729: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42738: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42741: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42748: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42752: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42757: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42763: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42772: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42775: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42783: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42792: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42799: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42803: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42805: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42810: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42818: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42824: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42829: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42832: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42841: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42845: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42847: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42849: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42851: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42859: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42866: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42871: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42879: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42881: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42885: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42890: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42896: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42901: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42908: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42912: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42919: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42922: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42928: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42934: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42943: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42945: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42952: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42958: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42962: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42965: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42972: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42981: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42987: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42990: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42994: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  43e3: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  43007: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  43011: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  43015: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  43020: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  43023: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  43026: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  43028: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  43033: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  43036: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  43044: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  43046: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  43053: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  43056: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  43065: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  43069: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  43085: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  43091: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  43096: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  43098: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  43101: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  43109: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  43114: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  43120: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  43129: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  43132: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  43135: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  43138: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  43143: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  43071: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);