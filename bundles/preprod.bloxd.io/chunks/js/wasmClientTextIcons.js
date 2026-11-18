export const id = 54;
export const ids = [54];
export const modules = {
  41123: (yb, bb, Wy) => {
    var Uy = {
      "./Air Walk.png": 41126,
      "./Antlers Bonus.png": 41128,
      "./Arrow Damage Enchantment.png": 41132,
      "./Arrow Speed Enchantment.png": 41140,
      "./Attack Speed Enchantment.png": 41148,
      "./Blindness.png": 41153,
      "./Boating.png": 41156,
      "./Bounciness.png": 41158,
      "./Brain Rot.png": 41163,
      "./Break Speed Enchantment.png": 41167,
      "./Bunny Hop.png": 41173,
      "./Critical Damage Enchantment.png": 41177,
      "./Cross.png": 41184,
      "./Damage Enchantment.png": 41186,
      "./Damage Reduction.png": 41191,
      "./Damage.png": 41193,
      "./Digging Aura Enchantment.png": 41198,
      "./Dotted Friendship.png": 41205,
      "./Double Jump.png": 41209,
      "./Double Poop.png": 41215,
      "./Draugr Knight Head.png": 41224,
      "./Draugr Warper Head.png": 41226,
      "./Empty Hunger.png": 41229,
      "./FallDamage.png": 41233,
      "./Farming Aura Enchantment.png": 41240,
      "./Farming Yield Enchantment.png": 41243,
      "./Feather Falling.png": 41249,
      "./Feed Aura.png": 41251,
      "./Firecracker Boost Enchantment.png": 41258,
      "./Firecracker Cooldown Enchantment.png": 41265,
      "./Fist.png": 41273,
      "./Friends.png": 41280,
      "./Friendship.png": 41286,
      "./Frozen.png": 41292,
      "./Gliding Speed Enchantment.png": 41301,
      "./Gliding.png": 41310,
      "./Glowing.png": 41314,
      "./Haste.png": 41323,
      "./Healing Pulse.png": 41329,
      "./Health Enchantment.png": 41335,
      "./Health Regen Enchantment.png": 41338,
      "./Health Regen.png": 41343,
      "./Health.png": 41352,
      "./HealthShield.png": 41355,
      "./Heat Resistance.png": 41362,
      "./Horizontal Knockback Enchantment.png": 41368,
      "./Hunger.png": 41372,
      "./Hydrated.png": 41379,
      "./Invisible.png": 41382,
      "./Irradiated.png": 41389,
      "./Jump Boost.png": 41393,
      "./Knockback Resist Enchantment.png": 41402,
      "./Lifesteal.png": 41409,
      "./Lumber Aura Enchantment.png": 41415,
      "./Magma Golem Head.png": 41420,
      "./Max Health.png": 41425,
      "./Mining Aura Enchantment.png": 41432,
      "./Mining Yield Enchantment.png": 41441,
      "./Mining Yield.png": 41450,
      "./Mob Slayer.png": 41452,
      "./Mob Yield.png": 41459,
      "./Momentum Enchantment.png": 41466,
      "./Mystery Fish.png": 41475,
      "./Night Vision.png": 41483,
      "./Obsidian Boating.png": 41489,
      "./Pack Leader.png": 41494,
      "./Pickpocketer.png": 41497,
      "./Pixelated Heart.png": 41499,
      "./Poison Claws.png": 41504,
      "./Poisoned.png": 41510,
      "./Poopy.png": 41519,
      "./Protection Enchantment.png": 41526,
      "./Question Mark.png": 41532,
      "./Quick Charge Enchantment.png": 41534,
      "./Rainbow Wool.png": 41542,
      "./Rested Aura.png": 41551,
      "./Rested Damage.png": 41556,
      "./Rested Farming Yield.png": 41563,
      "./Rested Haste.png": 41568,
      "./Rested Speed.png": 41576,
      "./Riding Speed.png": 41579,
      "./Riding.png": 41588,
      "./Self Yield.png": 41595,
      "./Slowness.png": 41602,
      "./Speed.png": 41606,
      "./Stomp Damage Enchantment.png": 41612,
      "./Thief.png": 41619,
      "./Thorns.png": 41624,
      "./Trader Black.png": 41626,
      "./Trader Blue.png": 41630,
      "./Trader Piggy.png": 41633,
      "./Vertical Knockback Enchantment.png": 41642,
      "./VoidJump.png": 41650,
      "./Wall Climbing.png": 41659,
      "./Weakness.png": 41663,
      "./X-Ray Vision.png": 41666
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 41123
  },
  41681: (yb, bb, Wy) => {
    var Uy = {
      "./arrow.png": 41684,
      "./bubble.png": 41690,
      "./critical_hit.png": 41698,
      "./drift.png": 41705,
      "./effect_5.png": 41707,
      "./fishingFishSilhouette.png": 41716,
      "./generic_2.png": 41721,
      "./glint.png": 41730,
      "./heart.png": 41735,
      "./scary_face.png": 41743,
      "./soul_0.png": 41750,
      "./square_particle.png": 41754,
      "./z-particle.png": 41757
    };

    function hy(yb) {
      var bb = fy(yb);
      return Wy(bb)
    }

    function fy(yb) {
      if (!Wy.o(Uy, yb)) {
        var bb = new Error("Cannot find module '" + yb + "'");
        throw bb.code = "MODULE_NOT_FOUND", bb
      }
      return Uy[yb]
    }
    hy.keys = function() {
      return Object.keys(Uy)
    }, hy.resolve = fy, yb.exports = hy, hy.id = 41681
  },
  41118: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      blockTextureUrl: () => sy,
      ingameIconUrl: () => ey,
      itemSpriteUrl: () => Ky,
      loadBundledTextures: () => Py,
      notFoundUrl: () => qb,
      particleUrl: () => Sy
    });
    var Uy = Wy(39258),
      hy = Wy(1583),
      fy = Wy(2484);
    let Zy = null,
      cb = null;

    function Py() {
      cb ??= Promise.all([Wy.e(63), Wy.e(182), Wy.e(86)]).then((() => Wy(8452))).then((yb => {
        Zy = yb, (0, hy.b)()
      }), (yb => {
        console.warn("[bloxd-wasm-client] the default texture pack did not load, so item icons load file by file", yb)
      }))
    }

    function oy(yb, bb) {
      if (null === Zy) return null;
      try {
        return Zy.getDefaultTexture(yb, bb).url
      } catch {
        return null
      }
    }

    function By(yb, bb) {
      return `${Wy.p}${yb}${encodeURIComponent(bb)}.png`
    }

    function Ky(yb) {
      var bb;
      const Wy = "static/items/f8c148434246a2c1/";
      return (0, Uy.d)(yb) ? null !== (bb = function(yb) {
        return oy(yb, fy.d.ITEM)
      }(yb)) && void 0 !== bb ? bb : By(Wy, yb) : null
    }

    function ey(yb) {
      try {
        return Wy(41123)(`./${yb}.png`)
      } catch {
        return null
      }
    }

    function qb() {
      return Wy(41672)
    }

    function sy(yb) {
      var bb;
      const Wy = "static/blocks/b5f33a3f7a665ddf/";
      return yb.includes("[") ? null : null !== (bb = function(yb) {
        return oy(yb, fy.d.BLOCK)
      }(yb)) && void 0 !== bb ? bb : By(Wy, yb)
    }

    function Sy(yb) {
      try {
        return Wy(41681)(`./${yb}.png`)
      } catch {
        return null
      }
    }
  },
  41126: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41128: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41132: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41140: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41148: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41153: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41156: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41158: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41163: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41167: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41173: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41177: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41184: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41186: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41191: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41193: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41198: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41205: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41209: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41215: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41224: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41226: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41229: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41233: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41240: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41243: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41249: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41251: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41258: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41265: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41273: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41280: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41286: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41292: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41301: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41310: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41314: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41323: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41329: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41335: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41338: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41343: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  41352: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  41355: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  41362: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  41368: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  41372: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  41379: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  41382: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  41389: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  41393: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  41402: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  41409: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  41415: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  41420: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  41425: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  41432: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  41441: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  41450: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  41452: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  41459: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  41466: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  41475: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  41483: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  41489: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  41494: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  41497: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  41499: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  41504: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  41510: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  41519: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  41526: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  41532: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  41534: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  41542: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  41551: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  41556: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  41563: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  41568: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  41576: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  41579: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  41588: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  41595: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  41602: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  41606: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  41612: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  41619: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  41624: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  41626: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  41630: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  41633: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  41642: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  41650: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  41659: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  41663: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  41666: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  41684: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  41690: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  41698: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  41705: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  41707: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  41716: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  41721: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  41730: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  41735: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  41743: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  41750: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  41754: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  41757: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  41672: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);