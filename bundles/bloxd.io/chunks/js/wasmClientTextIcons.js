export const id = 73;
export const ids = [73];
export const modules = {
  42260: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      blockTextureUrl: () => qe,
      followBundledTextures: () => Ue,
      ingameIconUrl: () => Re,
      itemSpriteUrl: () => oe,
      notFoundUrl: () => ke,
      particleUrl: () => fe
    });
    var ye = He(37100),
      be = He(1992),
      Me = He(2170),
      Ke = He(3488);

    function Ue() {
      (0, Me.r)((() => {
        (0, be.d)()
      }))
    }

    function Fe(ee, ie) {
      const He = (0, Me.n)();
      if (null === He) return null;
      try {
        return He.getDefaultTexture(ee, ie).url
      } catch {
        return null
      }
    }

    function Je(ee, ie) {
      return `${He.p}${ee}${encodeURIComponent(ie)}.png`
    }

    function oe(ee) {
      var ie;
      const He = "static/items/1a4d1f22bd315291/";
      return (0, ye.e)(ee) ? null !== (ie = function(ee) {
        return Fe(ee, Ke.f.ITEM)
      }(ee)) && void 0 !== ie ? ie : Je(He, ee) : null
    }

    function Re(ee) {
      try {
        return He(42269)(`./${ee}.png`)
      } catch {
        return null
      }
    }

    function ke() {
      return He(42789)
    }

    function qe(ee) {
      var ie;
      const He = "static/blocks/b5f33a3f7a665ddf/";
      return ee.includes("[") ? null : null !== (ie = function(ee) {
        return Fe(ee, Ke.f.BLOCK)
      }(ee)) && void 0 !== ie ? ie : Je(He, ee)
    }

    function fe(ee) {
      try {
        return He(42792)(`./${ee}.png`)
      } catch {
        return null
      }
    }
  },
  42269: (ee, ie, He) => {
    var ye = {
      "./Air Walk.png": 42272,
      "./Antlers Bonus.png": 42281,
      "./Arrow Damage Enchantment.png": 42285,
      "./Arrow Speed Enchantment.png": 42290,
      "./Attack Speed Enchantment.png": 42296,
      "./Blindness.png": 42299,
      "./Boating.png": 42301,
      "./Bounciness.png": 42303,
      "./Brain Rot.png": 42310,
      "./Break Speed Enchantment.png": 42317,
      "./Bunny Hop.png": 42321,
      "./Critical Damage Enchantment.png": 42324,
      "./Cross.png": 42328,
      "./Damage Enchantment.png": 42335,
      "./Damage Reduction.png": 42340,
      "./Damage.png": 42344,
      "./Digging Aura Enchantment.png": 42350,
      "./Dotted Friendship.png": 42352,
      "./Double Jump.png": 42358,
      "./Double Poop.png": 42364,
      "./Draugr Knight Head.png": 42366,
      "./Draugr Warper Head.png": 42370,
      "./Empty Hunger.png": 42373,
      "./FallDamage.png": 42381,
      "./Farming Aura Enchantment.png": 42389,
      "./Farming Yield Enchantment.png": 42393,
      "./Feather Falling.png": 42397,
      "./Feed Aura.png": 42405,
      "./Firecracker Boost Enchantment.png": 42412,
      "./Firecracker Cooldown Enchantment.png": 42415,
      "./Fist.png": 42418,
      "./Friends.png": 42420,
      "./Friendship.png": 42425,
      "./Frozen.png": 42433,
      "./Gliding Speed Enchantment.png": 42441,
      "./Gliding.png": 42450,
      "./Glowing.png": 42457,
      "./Haste.png": 42462,
      "./Healing Pulse.png": 42470,
      "./Health Enchantment.png": 42472,
      "./Health Regen Enchantment.png": 42480,
      "./Health Regen.png": 42489,
      "./Health.png": 42495,
      "./HealthShield.png": 42501,
      "./Heat Resistance.png": 42507,
      "./Horizontal Knockback Enchantment.png": 42512,
      "./Hunger.png": 42518,
      "./Hydrated.png": 42525,
      "./Invisible.png": 42533,
      "./Irradiated.png": 42539,
      "./Jump Boost.png": 42546,
      "./Knockback Resist Enchantment.png": 42549,
      "./Lifesteal.png": 42554,
      "./Lumber Aura Enchantment.png": 42559,
      "./Magma Golem Head.png": 42564,
      "./Max Health.png": 42568,
      "./Mining Aura Enchantment.png": 42572,
      "./Mining Yield Enchantment.png": 42578,
      "./Mining Yield.png": 42584,
      "./Mob Slayer.png": 42586,
      "./Mob Yield.png": 42595,
      "./Momentum Enchantment.png": 42604,
      "./Mystery Fish.png": 42612,
      "./Night Vision.png": 42620,
      "./Obsidian Boating.png": 42628,
      "./Pack Leader.png": 42633,
      "./Pickpocketer.png": 42636,
      "./Pixelated Heart.png": 42639,
      "./Poison Claws.png": 42645,
      "./Poisoned.png": 42654,
      "./Poopy.png": 42657,
      "./Protection Enchantment.png": 42663,
      "./Question Mark.png": 42666,
      "./Quick Charge Enchantment.png": 42668,
      "./Rainbow Wool.png": 42675,
      "./Rested Aura.png": 42678,
      "./Rested Damage.png": 42687,
      "./Rested Farming Yield.png": 42693,
      "./Rested Haste.png": 42702,
      "./Rested Speed.png": 42707,
      "./Riding Speed.png": 42712,
      "./Riding.png": 42718,
      "./Self Yield.png": 42726,
      "./Slowness.png": 42735,
      "./Speed.png": 42739,
      "./Stomp Damage Enchantment.png": 42741,
      "./Thief.png": 42743,
      "./Thorns.png": 42746,
      "./Trader Black.png": 42751,
      "./Trader Blue.png": 42755,
      "./Trader Piggy.png": 42758,
      "./Vertical Knockback Enchantment.png": 42764,
      "./VoidJump.png": 42773,
      "./Wall Climbing.png": 42776,
      "./Weakness.png": 42778,
      "./X-Ray Vision.png": 42787
    };

    function be(ee) {
      var ie = Me(ee);
      return He(ie)
    }

    function Me(ee) {
      if (!He.o(ye, ee)) {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }
      return ye[ee]
    }
    be.keys = function() {
      return Object.keys(ye)
    }, be.resolve = Me, ee.exports = be, be.id = 42269
  },
  42792: (ee, ie, He) => {
    var ye = {
      "./arrow.png": 42795,
      "./bubble.png": 42797,
      "./critical_hit.png": 42801,
      "./drift.png": 42809,
      "./effect_5.png": 42814,
      "./fishingFishSilhouette.png": 42817,
      "./generic_2.png": 42819,
      "./glint.png": 42823,
      "./heart.png": 42825,
      "./scary_face.png": 42831,
      "./snowflake.png": 42833,
      "./soul_0.png": 42839,
      "./square_particle.png": 42848,
      "./z-particle.png": 42857
    };

    function be(ee) {
      var ie = Me(ee);
      return He(ie)
    }

    function Me(ee) {
      if (!He.o(ye, ee)) {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }
      return ye[ee]
    }
    be.keys = function() {
      return Object.keys(ye)
    }, be.resolve = Me, ee.exports = be, be.id = 42792
  },
  42272: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42281: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42285: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42290: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42296: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42299: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42301: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42303: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42310: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42317: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42321: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42324: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42328: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42335: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42340: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42344: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42350: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42352: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42358: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42364: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42366: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42370: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  42373: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  42381: (ee, ie, He) => {
    ee.exports = He.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  42389: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  42393: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  42397: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  42405: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  42412: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  42415: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  42418: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  42420: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  42425: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  42433: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  42441: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  42450: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  42457: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  42462: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  42470: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  42472: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  42480: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  42489: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  42495: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  42501: (ee, ie, He) => {
    ee.exports = He.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  42507: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  42512: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  42518: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  42525: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  42533: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  42539: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  42546: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  42549: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  42554: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  42559: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  42564: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  42568: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  42572: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  42578: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  42584: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  42586: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  42595: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  42604: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  42612: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  42620: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  42628: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  42633: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  42636: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  42639: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  42645: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  42654: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  42657: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  42663: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  42666: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  42668: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  42675: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  42678: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  42687: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  42693: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  42702: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  42707: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  42712: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  42718: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  42726: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  42735: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  42739: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  42741: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  42743: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  42746: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  42751: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  42755: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  42758: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  42764: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  42773: (ee, ie, He) => {
    ee.exports = He.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  42776: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  42778: (ee, ie, He) => {
    ee.exports = He.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  42787: (ee, ie, He) => {
    ee.exports = He.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  42795: (ee, ie, He) => {
    ee.exports = He.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42797: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42801: (ee, ie, He) => {
    ee.exports = He.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42809: (ee, ie, He) => {
    ee.exports = He.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42814: (ee, ie, He) => {
    ee.exports = He.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42817: (ee, ie, He) => {
    ee.exports = He.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42819: (ee, ie, He) => {
    ee.exports = He.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42823: (ee, ie, He) => {
    ee.exports = He.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42825: (ee, ie, He) => {
    ee.exports = He.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42831: (ee, ie, He) => {
    ee.exports = He.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42833: (ee, ie, He) => {
    ee.exports = He.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  42839: (ee, ie, He) => {
    ee.exports = He.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42848: (ee, ie, He) => {
    ee.exports = He.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42857: (ee, ie, He) => {
    ee.exports = He.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  42789: (ee, ie, He) => {
    ee.exports = He.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);