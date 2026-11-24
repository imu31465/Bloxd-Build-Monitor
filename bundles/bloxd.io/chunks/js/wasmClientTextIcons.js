export const id = 61;
export const ids = [61];
export const modules = {
  60699: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      blockTextureUrl: () => om,
      followBundledTextures: () => wm,
      ingameIconUrl: () => pm,
      itemSpriteUrl: () => Rm,
      notFoundUrl: () => Em,
      particleUrl: () => Om
    });
    var hm = fm(41113),
      Am = fm(1919),
      am = fm(2114),
      xm = fm(3162);

    function wm() {
      (0, am.o)((() => {
        (0, Am.d)()
      }))
    }

    function Dm(mm, Tm) {
      const fm = (0, am.l)();
      if (null === fm) return null;
      try {
        return fm.getDefaultTexture(mm, Tm).url
      } catch {
        return null
      }
    }

    function im(mm, Tm) {
      return `${fm.p}${mm}${encodeURIComponent(Tm)}.png`
    }

    function Rm(mm) {
      var Tm;
      const fm = "static/items/8cf6154c6eda6753/";
      return (0, hm.b)(mm) ? null !== (Tm = function(mm) {
        return Dm(mm, xm.f.ITEM)
      }(mm)) && void 0 !== Tm ? Tm : im(fm, mm) : null
    }

    function pm(mm) {
      try {
        return fm(60704)(`./${mm}.png`)
      } catch {
        return null
      }
    }

    function Em() {
      return fm(61218)
    }

    function om(mm) {
      var Tm;
      const fm = "static/blocks/b5f33a3f7a665ddf/";
      return mm.includes("[") ? null : null !== (Tm = function(mm) {
        return Dm(mm, xm.f.BLOCK)
      }(mm)) && void 0 !== Tm ? Tm : im(fm, mm)
    }

    function Om(mm) {
      try {
        return fm(61221)(`./${mm}.png`)
      } catch {
        return null
      }
    }
  },
  60704: (mm, Tm, fm) => {
    var hm = {
      "./Air Walk.png": 60711,
      "./Antlers Bonus.png": 60717,
      "./Arrow Damage Enchantment.png": 60721,
      "./Arrow Speed Enchantment.png": 60724,
      "./Attack Speed Enchantment.png": 60727,
      "./Blindness.png": 60733,
      "./Boating.png": 60737,
      "./Bounciness.png": 60745,
      "./Brain Rot.png": 60751,
      "./Break Speed Enchantment.png": 60759,
      "./Bunny Hop.png": 60762,
      "./Critical Damage Enchantment.png": 60770,
      "./Cross.png": 60774,
      "./Damage Enchantment.png": 60779,
      "./Damage Reduction.png": 60788,
      "./Damage.png": 60792,
      "./Digging Aura Enchantment.png": 60796,
      "./Dotted Friendship.png": 60805,
      "./Double Jump.png": 60807,
      "./Double Poop.png": 60814,
      "./Draugr Knight Head.png": 60816,
      "./Draugr Warper Head.png": 60819,
      "./Empty Hunger.png": 60823,
      "./FallDamage.png": 60827,
      "./Farming Aura Enchantment.png": 60831,
      "./Farming Yield Enchantment.png": 60836,
      "./Feather Falling.png": 60845,
      "./Feed Aura.png": 60852,
      "./Firecracker Boost Enchantment.png": 60860,
      "./Firecracker Cooldown Enchantment.png": 60866,
      "./Fist.png": 60871,
      "./Friends.png": 60875,
      "./Friendship.png": 60878,
      "./Frozen.png": 60886,
      "./Gliding Speed Enchantment.png": 60892,
      "./Gliding.png": 60894,
      "./Glowing.png": 60896,
      "./Haste.png": 60900,
      "./Healing Pulse.png": 60903,
      "./Health Enchantment.png": 60906,
      "./Health Regen Enchantment.png": 60909,
      "./Health Regen.png": 60916,
      "./Health.png": 60924,
      "./HealthShield.png": 60931,
      "./Heat Resistance.png": 60933,
      "./Horizontal Knockback Enchantment.png": 60938,
      "./Hunger.png": 60946,
      "./Hydrated.png": 60949,
      "./Invisible.png": 60955,
      "./Irradiated.png": 60961,
      "./Jump Boost.png": 60965,
      "./Knockback Resist Enchantment.png": 60969,
      "./Lifesteal.png": 60978,
      "./Lumber Aura Enchantment.png": 60982,
      "./Magma Golem Head.png": 60986,
      "./Max Health.png": 60995,
      "./Mining Aura Enchantment.png": 60999,
      "./Mining Yield Enchantment.png": 61003,
      "./Mining Yield.png": 61009,
      "./Mob Slayer.png": 61017,
      "./Mob Yield.png": 61022,
      "./Momentum Enchantment.png": 61027,
      "./Mystery Fish.png": 61035,
      "./Night Vision.png": 61042,
      "./Obsidian Boating.png": 61049,
      "./Pack Leader.png": 61057,
      "./Pickpocketer.png": 61062,
      "./Pixelated Heart.png": 61068,
      "./Poison Claws.png": 61072,
      "./Poisoned.png": 61080,
      "./Poopy.png": 61084,
      "./Protection Enchantment.png": 61087,
      "./Question Mark.png": 61089,
      "./Quick Charge Enchantment.png": 61092,
      "./Rainbow Wool.png": 61096,
      "./Rested Aura.png": 61101,
      "./Rested Damage.png": 61106,
      "./Rested Farming Yield.png": 61110,
      "./Rested Haste.png": 61118,
      "./Rested Speed.png": 61122,
      "./Riding Speed.png": 61128,
      "./Riding.png": 61134,
      "./Self Yield.png": 61140,
      "./Slowness.png": 61149,
      "./Speed.png": 61157,
      "./Stomp Damage Enchantment.png": 61162,
      "./Thief.png": 61165,
      "./Thorns.png": 61172,
      "./Trader Black.png": 61181,
      "./Trader Blue.png": 61185,
      "./Trader Piggy.png": 61189,
      "./Vertical Knockback Enchantment.png": 61195,
      "./VoidJump.png": 61197,
      "./Wall Climbing.png": 61200,
      "./Weakness.png": 61204,
      "./X-Ray Vision.png": 61209
    };

    function Am(mm) {
      var Tm = am(mm);
      return fm(Tm)
    }

    function am(mm) {
      if (!fm.o(hm, mm)) {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }
      return hm[mm]
    }
    Am.keys = function() {
      return Object.keys(hm)
    }, Am.resolve = am, mm.exports = Am, Am.id = 60704
  },
  61221: (mm, Tm, fm) => {
    var hm = {
      "./arrow.png": 61227,
      "./bubble.png": 61231,
      "./critical_hit.png": 61238,
      "./drift.png": 61241,
      "./effect_5.png": 61244,
      "./fishingFishSilhouette.png": 61252,
      "./generic_2.png": 61260,
      "./glint.png": 61269,
      "./heart.png": 61277,
      "./scary_face.png": 61280,
      "./soul_0.png": 61288,
      "./square_particle.png": 61296,
      "./z-particle.png": 61302
    };

    function Am(mm) {
      var Tm = am(mm);
      return fm(Tm)
    }

    function am(mm) {
      if (!fm.o(hm, mm)) {
        var Tm = new Error("Cannot find module '" + mm + "'");
        throw Tm.code = "MODULE_NOT_FOUND", Tm
      }
      return hm[mm]
    }
    Am.keys = function() {
      return Object.keys(hm)
    }, Am.resolve = am, mm.exports = Am, Am.id = 61221
  },
  60711: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  60717: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  60721: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  60724: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  60727: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  60733: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  60737: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  60745: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  60751: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  60759: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  60762: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  60770: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  60774: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  60779: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  60788: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  60792: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  60796: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  60805: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  60807: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  60814: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  60816: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  60819: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  60823: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  60827: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  60831: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  60836: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  60845: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  60852: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  60860: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  60866: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  60871: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  60875: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  60878: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  60886: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  60892: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  60894: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  60896: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  60900: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  60903: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  60906: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  60909: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  60916: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  60924: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  60931: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  60933: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  60938: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  60946: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  60949: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  60955: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  60961: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  60965: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  60969: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  60978: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  60982: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  60986: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  60995: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  60999: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  61003: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  61009: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  61017: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  61022: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  61027: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  61035: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  61042: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  61049: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  61057: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  61062: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  61068: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  61072: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  61080: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  61084: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  61087: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  61089: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  61092: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  61096: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  61101: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  61106: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  61110: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  61118: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  61122: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  61128: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  61134: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  61140: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  61149: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  61157: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  61162: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  61165: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  61172: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  61181: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  61185: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  61189: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  61195: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  61197: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  61200: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  61204: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  61209: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  61227: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  61231: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  61238: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  61241: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  61244: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  61252: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  61260: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  61269: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  61277: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  61280: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  61288: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  61296: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  61302: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  61218: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);