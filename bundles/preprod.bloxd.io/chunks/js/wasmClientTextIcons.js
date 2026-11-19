export const id = 58;
export const ids = [58];
export const modules = {
  41852: (zz, uz, bz) => {
    var Ez = {
      "./Air Walk.png": 41857,
      "./Antlers Bonus.png": 41865,
      "./Arrow Damage Enchantment.png": 41869,
      "./Arrow Speed Enchantment.png": 41873,
      "./Attack Speed Enchantment.png": 41879,
      "./Blindness.png": 41883,
      "./Boating.png": 41889,
      "./Bounciness.png": 41896,
      "./Brain Rot.png": 41902,
      "./Break Speed Enchantment.png": 41911,
      "./Bunny Hop.png": 41916,
      "./Critical Damage Enchantment.png": 41919,
      "./Cross.png": 41921,
      "./Damage Enchantment.png": 41930,
      "./Damage Reduction.png": 41933,
      "./Damage.png": 41939,
      "./Digging Aura Enchantment.png": 41947,
      "./Dotted Friendship.png": 41952,
      "./Double Jump.png": 41957,
      "./Double Poop.png": 41961,
      "./Draugr Knight Head.png": 41970,
      "./Draugr Warper Head.png": 41977,
      "./Empty Hunger.png": 41980,
      "./FallDamage.png": 41989,
      "./Farming Aura Enchantment.png": 41998,
      "./Farming Yield Enchantment.png": 42006,
      "./Feather Falling.png": 42014,
      "./Feed Aura.png": 42018,
      "./Firecracker Boost Enchantment.png": 42026,
      "./Firecracker Cooldown Enchantment.png": 42031,
      "./Fist.png": 42037,
      "./Friends.png": 42042,
      "./Friendship.png": 42044,
      "./Frozen.png": 42052,
      "./Gliding Speed Enchantment.png": 42056,
      "./Gliding.png": 42064,
      "./Glowing.png": 42066,
      "./Haste.png": 42070,
      "./Healing Pulse.png": 42076,
      "./Health Enchantment.png": 42082,
      "./Health Regen Enchantment.png": 42088,
      "./Health Regen.png": 42093,
      "./Health.png": 42101,
      "./HealthShield.png": 42109,
      "./Heat Resistance.png": 42116,
      "./Horizontal Knockback Enchantment.png": 42121,
      "./Hunger.png": 42125,
      "./Hydrated.png": 42130,
      "./Invisible.png": 42137,
      "./Irradiated.png": 42143,
      "./Jump Boost.png": 42150,
      "./Knockback Resist Enchantment.png": 42155,
      "./Lifesteal.png": 42164,
      "./Lumber Aura Enchantment.png": 42170,
      "./Magma Golem Head.png": 42179,
      "./Max Health.png": 42184,
      "./Mining Aura Enchantment.png": 42187,
      "./Mining Yield Enchantment.png": 42195,
      "./Mining Yield.png": 42202,
      "./Mob Slayer.png": 42211,
      "./Mob Yield.png": 42213,
      "./Momentum Enchantment.png": 42218,
      "./Mystery Fish.png": 42224,
      "./Night Vision.png": 42228,
      "./Obsidian Boating.png": 42235,
      "./Pack Leader.png": 42238,
      "./Pickpocketer.png": 42243,
      "./Pixelated Heart.png": 42252,
      "./Poison Claws.png": 42258,
      "./Poisoned.png": 42267,
      "./Poopy.png": 42273,
      "./Protection Enchantment.png": 42276,
      "./Question Mark.png": 42283,
      "./Quick Charge Enchantment.png": 42289,
      "./Rainbow Wool.png": 42295,
      "./Rested Aura.png": 42304,
      "./Rested Damage.png": 42308,
      "./Rested Farming Yield.png": 42311,
      "./Rested Haste.png": 42317,
      "./Rested Speed.png": 42326,
      "./Riding Speed.png": 42335,
      "./Riding.png": 42339,
      "./Self Yield.png": 42343,
      "./Slowness.png": 42347,
      "./Speed.png": 42349,
      "./Stomp Damage Enchantment.png": 42358,
      "./Thief.png": 42364,
      "./Thorns.png": 42370,
      "./Trader Black.png": 42378,
      "./Trader Blue.png": 42381,
      "./Trader Piggy.png": 42383,
      "./Vertical Knockback Enchantment.png": 42389,
      "./VoidJump.png": 42394,
      "./Wall Climbing.png": 42403,
      "./Weakness.png": 42407,
      "./X-Ray Vision.png": 42409
    };

    function nz(zz) {
      var uz = iz(zz);
      return bz(uz)
    }

    function iz(zz) {
      if (!bz.o(Ez, zz)) {
        var uz = new Error("Cannot find module '" + zz + "'");
        throw uz.code = "MODULE_NOT_FOUND", uz
      }
      return Ez[zz]
    }
    nz.keys = function() {
      return Object.keys(Ez)
    }, nz.resolve = iz, zz.exports = nz, nz.id = 41852
  },
  42418: (zz, uz, bz) => {
    var Ez = {
      "./arrow.png": 42427,
      "./bubble.png": 42429,
      "./critical_hit.png": 42434,
      "./drift.png": 42437,
      "./effect_5.png": 42439,
      "./fishingFishSilhouette.png": 42442,
      "./generic_2.png": 42444,
      "./glint.png": 42450,
      "./heart.png": 42457,
      "./scary_face.png": 42462,
      "./soul_0.png": 42470,
      "./square_particle.png": 42478,
      "./z-particle.png": 42486
    };

    function nz(zz) {
      var uz = iz(zz);
      return bz(uz)
    }

    function iz(zz) {
      if (!bz.o(Ez, zz)) {
        var uz = new Error("Cannot find module '" + zz + "'");
        throw uz.code = "MODULE_NOT_FOUND", uz
      }
      return Ez[zz]
    }
    nz.keys = function() {
      return Object.keys(Ez)
    }, nz.resolve = iz, zz.exports = nz, nz.id = 42418
  },
  41849: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      blockTextureUrl: () => Fz,
      followBundledTextures: () => Mz,
      ingameIconUrl: () => pz,
      itemSpriteUrl: () => Oz,
      notFoundUrl: () => dz,
      particleUrl: () => Zz
    });
    var Ez = bz(39925),
      nz = bz(1878),
      iz = bz(2954),
      lz = bz(2920);

    function Mz() {
      (0, iz.m)((() => {
        (0, nz.c)()
      }))
    }

    function tz(zz, uz) {
      const bz = (0, iz.k)();
      if (null === bz) return null;
      try {
        return bz.getDefaultTexture(zz, uz).url
      } catch {
        return null
      }
    }

    function Hz(zz, uz) {
      return `${bz.p}${zz}${encodeURIComponent(uz)}.png`
    }

    function Oz(zz) {
      var uz;
      const bz = "static/items/f8c148434246a2c1/";
      return (0, Ez.e)(zz) ? null !== (uz = function(zz) {
        return tz(zz, lz.g.ITEM)
      }(zz)) && void 0 !== uz ? uz : Hz(bz, zz) : null
    }

    function pz(zz) {
      try {
        return bz(41852)(`./${zz}.png`)
      } catch {
        return null
      }
    }

    function dz() {
      return bz(42415)
    }

    function Fz(zz) {
      var uz;
      const bz = "static/blocks/b5f33a3f7a665ddf/";
      return zz.includes("[") ? null : null !== (uz = function(zz) {
        return tz(zz, lz.g.BLOCK)
      }(zz)) && void 0 !== uz ? uz : Hz(bz, zz)
    }

    function Zz(zz) {
      try {
        return bz(42418)(`./${zz}.png`)
      } catch {
        return null
      }
    }
  },
  41857: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41865: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41869: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41873: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41879: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41883: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41889: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41896: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41902: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41911: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41916: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41919: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41921: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41930: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41933: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41939: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41947: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41952: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41957: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41961: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41970: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41977: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41980: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41989: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41998: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42006: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42014: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42018: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42026: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42031: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42037: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42042: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42044: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42052: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42056: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42064: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42066: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42070: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42076: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42082: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42088: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42093: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42101: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42109: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42116: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42121: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42125: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42130: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42137: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42143: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42150: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42155: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42164: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42170: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42179: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42184: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42187: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42195: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42202: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42211: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42213: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42218: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42224: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42228: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42235: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42238: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42243: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42252: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42258: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42267: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42273: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42276: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42283: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42289: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42295: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42304: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42308: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42311: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42317: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42326: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42335: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42339: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42343: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42347: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42349: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42358: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42364: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42370: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42378: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42381: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42383: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42389: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42394: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42403: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42407: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42409: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42427: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42429: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42434: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42437: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42439: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42442: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42444: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42450: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42457: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42462: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42470: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42478: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42486: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42415: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);