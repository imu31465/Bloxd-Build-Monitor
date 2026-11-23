export const id = 61;
export const ids = [61];
export const modules = {
  60620: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      blockTextureUrl: () => jk,
      followBundledTextures: () => lk,
      ingameIconUrl: () => tk,
      itemSpriteUrl: () => Lk,
      notFoundUrl: () => Zk,
      particleUrl: () => ek
    });
    var Xk = Ik(41060),
      Tk = Ik(1886),
      ik = Ik(2059),
      yk = Ik(3110);

    function lk() {
      (0, ik.t)((() => {
        (0, Tk.c)()
      }))
    }

    function ak(kk, Fk) {
      const Ik = (0, ik.s)();
      if (null === Ik) return null;
      try {
        return Ik.getDefaultTexture(kk, Fk).url
      } catch {
        return null
      }
    }

    function qk(kk, Fk) {
      return `${Ik.p}${kk}${encodeURIComponent(Fk)}.png`
    }

    function Lk(kk) {
      var Fk;
      const Ik = "static/items/8cf6154c6eda6753/";
      return (0, Xk.e)(kk) ? null !== (Fk = function(kk) {
        return ak(kk, yk.c.ITEM)
      }(kk)) && void 0 !== Fk ? Fk : qk(Ik, kk) : null
    }

    function tk(kk) {
      try {
        return Ik(60627)(`./${kk}.png`)
      } catch {
        return null
      }
    }

    function Zk() {
      return Ik(61194)
    }

    function jk(kk) {
      var Fk;
      const Ik = "static/blocks/b5f33a3f7a665ddf/";
      return kk.includes("[") ? null : null !== (Fk = function(kk) {
        return ak(kk, yk.c.BLOCK)
      }(kk)) && void 0 !== Fk ? Fk : qk(Ik, kk)
    }

    function ek(kk) {
      try {
        return Ik(61199)(`./${kk}.png`)
      } catch {
        return null
      }
    }
  },
  60627: (kk, Fk, Ik) => {
    var Xk = {
      "./Air Walk.png": 60633,
      "./Antlers Bonus.png": 60637,
      "./Arrow Damage Enchantment.png": 60643,
      "./Arrow Speed Enchantment.png": 60647,
      "./Attack Speed Enchantment.png": 60656,
      "./Blindness.png": 60665,
      "./Boating.png": 60674,
      "./Bounciness.png": 60683,
      "./Brain Rot.png": 60691,
      "./Break Speed Enchantment.png": 60696,
      "./Bunny Hop.png": 60701,
      "./Critical Damage Enchantment.png": 60704,
      "./Cross.png": 60712,
      "./Damage Enchantment.png": 60717,
      "./Damage Reduction.png": 60722,
      "./Damage.png": 60727,
      "./Digging Aura Enchantment.png": 60730,
      "./Dotted Friendship.png": 60733,
      "./Double Jump.png": 60742,
      "./Double Poop.png": 60745,
      "./Draugr Knight Head.png": 60752,
      "./Draugr Warper Head.png": 60755,
      "./Empty Hunger.png": 60760,
      "./FallDamage.png": 60765,
      "./Farming Aura Enchantment.png": 60771,
      "./Farming Yield Enchantment.png": 60779,
      "./Feather Falling.png": 60786,
      "./Feed Aura.png": 60790,
      "./Firecracker Boost Enchantment.png": 60795,
      "./Firecracker Cooldown Enchantment.png": 60798,
      "./Fist.png": 60807,
      "./Friends.png": 60813,
      "./Friendship.png": 60815,
      "./Frozen.png": 60821,
      "./Gliding Speed Enchantment.png": 60830,
      "./Gliding.png": 60834,
      "./Glowing.png": 60841,
      "./Haste.png": 60850,
      "./Healing Pulse.png": 60852,
      "./Health Enchantment.png": 60854,
      "./Health Regen Enchantment.png": 60859,
      "./Health Regen.png": 60868,
      "./Health.png": 60876,
      "./HealthShield.png": 60883,
      "./Heat Resistance.png": 60891,
      "./Horizontal Knockback Enchantment.png": 60895,
      "./Hunger.png": 60900,
      "./Hydrated.png": 60904,
      "./Invisible.png": 60907,
      "./Irradiated.png": 60912,
      "./Jump Boost.png": 60919,
      "./Knockback Resist Enchantment.png": 60926,
      "./Lifesteal.png": 60931,
      "./Lumber Aura Enchantment.png": 60939,
      "./Magma Golem Head.png": 60946,
      "./Max Health.png": 60950,
      "./Mining Aura Enchantment.png": 60954,
      "./Mining Yield Enchantment.png": 60962,
      "./Mining Yield.png": 60970,
      "./Mob Slayer.png": 60979,
      "./Mob Yield.png": 60986,
      "./Momentum Enchantment.png": 60992,
      "./Mystery Fish.png": 60998,
      "./Night Vision.png": 61007,
      "./Obsidian Boating.png": 61013,
      "./Pack Leader.png": 61022,
      "./Pickpocketer.png": 61030,
      "./Pixelated Heart.png": 61037,
      "./Poison Claws.png": 61040,
      "./Poisoned.png": 61044,
      "./Poopy.png": 61051,
      "./Protection Enchantment.png": 61059,
      "./Question Mark.png": 61066,
      "./Quick Charge Enchantment.png": 61074,
      "./Rainbow Wool.png": 61079,
      "./Rested Aura.png": 61084,
      "./Rested Damage.png": 61090,
      "./Rested Farming Yield.png": 61092,
      "./Rested Haste.png": 61099,
      "./Rested Speed.png": 61103,
      "./Riding Speed.png": 61106,
      "./Riding.png": 61108,
      "./Self Yield.png": 61114,
      "./Slowness.png": 61123,
      "./Speed.png": 61131,
      "./Stomp Damage Enchantment.png": 61133,
      "./Thief.png": 61138,
      "./Thorns.png": 61147,
      "./Trader Black.png": 61151,
      "./Trader Blue.png": 61157,
      "./Trader Piggy.png": 61166,
      "./Vertical Knockback Enchantment.png": 61173,
      "./VoidJump.png": 61176,
      "./Wall Climbing.png": 61179,
      "./Weakness.png": 61182,
      "./X-Ray Vision.png": 61188
    };

    function Tk(kk) {
      var Fk = ik(kk);
      return Ik(Fk)
    }

    function ik(kk) {
      if (!Ik.o(Xk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Xk[kk]
    }
    Tk.keys = function() {
      return Object.keys(Xk)
    }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 60627
  },
  61199: (kk, Fk, Ik) => {
    var Xk = {
      "./arrow.png": 61202,
      "./bubble.png": 61207,
      "./critical_hit.png": 61213,
      "./drift.png": 61218,
      "./effect_5.png": 61220,
      "./fishingFishSilhouette.png": 61226,
      "./generic_2.png": 61229,
      "./glint.png": 61236,
      "./heart.png": 61243,
      "./scary_face.png": 61248,
      "./soul_0.png": 61250,
      "./square_particle.png": 61253,
      "./z-particle.png": 61259
    };

    function Tk(kk) {
      var Fk = ik(kk);
      return Ik(Fk)
    }

    function ik(kk) {
      if (!Ik.o(Xk, kk)) {
        var Fk = new Error("Cannot find module '" + kk + "'");
        throw Fk.code = "MODULE_NOT_FOUND", Fk
      }
      return Xk[kk]
    }
    Tk.keys = function() {
      return Object.keys(Xk)
    }, Tk.resolve = ik, kk.exports = Tk, Tk.id = 61199
  },
  60633: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60637: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60643: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60647: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60656: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60665: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60674: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60683: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60691: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60696: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60701: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60704: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60712: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60717: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60722: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60727: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60730: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60733: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60742: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60745: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60752: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60755: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60760: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60765: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60771: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60779: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60786: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60790: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60795: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60798: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60807: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60813: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60815: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60821: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60830: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60834: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60841: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60850: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60852: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60854: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60859: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60868: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60876: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60883: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60891: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60895: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60900: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60904: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60907: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60912: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60919: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60926: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60931: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60939: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  60946: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  60950: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  60954: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  60962: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  60970: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  60979: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  60986: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  60992: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  60998: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61007: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61013: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61022: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61030: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61037: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61040: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61044: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61051: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61059: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61066: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61074: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61079: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61084: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61090: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61092: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61099: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61103: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61106: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61108: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61114: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61123: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61131: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61133: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61138: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61147: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61151: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61157: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61166: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61173: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61176: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61179: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61182: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61188: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61202: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61207: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61213: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61218: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61220: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61226: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61229: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61236: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61243: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61248: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61250: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61253: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61259: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61194: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);