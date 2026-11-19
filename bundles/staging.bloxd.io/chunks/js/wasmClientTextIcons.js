export const id = 58;
export const ids = [58];
export const modules = {
  41429: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      blockTextureUrl: () => xT,
      followBundledTextures: () => XT,
      ingameIconUrl: () => DT,
      itemSpriteUrl: () => ST,
      notFoundUrl: () => LT,
      particleUrl: () => cT
    });
    var iT = IT(39541),
      zT = IT(1762),
      kT = IT(2750),
      WT = IT(2719);

    function XT() {
      (0, kT.o)((() => {
        (0, zT.d)()
      }))
    }

    function BT(TT, oT) {
      const IT = (0, kT.n)();
      if (null === IT) return null;
      try {
        return IT.getDefaultTexture(TT, oT).url
      } catch {
        return null
      }
    }

    function FT(TT, oT) {
      return `${IT.p}${TT}${encodeURIComponent(oT)}.png`
    }

    function ST(TT) {
      var oT;
      const IT = "static/items/f8c148434246a2c1/";
      return (0, iT.d)(TT) ? null !== (oT = function(TT) {
        return BT(TT, WT.g.ITEM)
      }(TT)) && void 0 !== oT ? oT : FT(IT, TT) : null
    }

    function DT(TT) {
      try {
        return IT(41431)(`./${TT}.png`)
      } catch {
        return null
      }
    }

    function LT() {
      return IT(41990)
    }

    function xT(TT) {
      var oT;
      const IT = "static/blocks/b5f33a3f7a665ddf/";
      return TT.includes("[") ? null : null !== (oT = function(TT) {
        return BT(TT, WT.g.BLOCK)
      }(TT)) && void 0 !== oT ? oT : FT(IT, TT)
    }

    function cT(TT) {
      try {
        return IT(41993)(`./${TT}.png`)
      } catch {
        return null
      }
    }
  },
  41431: (TT, oT, IT) => {
    var iT = {
      "./Air Walk.png": 41439,
      "./Antlers Bonus.png": 41445,
      "./Arrow Damage Enchantment.png": 41450,
      "./Arrow Speed Enchantment.png": 41458,
      "./Attack Speed Enchantment.png": 41464,
      "./Blindness.png": 41470,
      "./Boating.png": 41475,
      "./Bounciness.png": 41483,
      "./Brain Rot.png": 41492,
      "./Break Speed Enchantment.png": 41495,
      "./Bunny Hop.png": 41498,
      "./Critical Damage Enchantment.png": 41507,
      "./Cross.png": 41515,
      "./Damage Enchantment.png": 41520,
      "./Damage Reduction.png": 41525,
      "./Damage.png": 41532,
      "./Digging Aura Enchantment.png": 41538,
      "./Dotted Friendship.png": 41540,
      "./Double Jump.png": 41547,
      "./Double Poop.png": 41555,
      "./Draugr Knight Head.png": 41558,
      "./Draugr Warper Head.png": 41564,
      "./Empty Hunger.png": 41568,
      "./FallDamage.png": 41571,
      "./Farming Aura Enchantment.png": 41573,
      "./Farming Yield Enchantment.png": 41579,
      "./Feather Falling.png": 41586,
      "./Feed Aura.png": 41594,
      "./Firecracker Boost Enchantment.png": 41602,
      "./Firecracker Cooldown Enchantment.png": 41609,
      "./Fist.png": 41612,
      "./Friends.png": 41621,
      "./Friendship.png": 41630,
      "./Frozen.png": 41632,
      "./Gliding Speed Enchantment.png": 41635,
      "./Gliding.png": 41638,
      "./Glowing.png": 41644,
      "./Haste.png": 41651,
      "./Healing Pulse.png": 41653,
      "./Health Enchantment.png": 41661,
      "./Health Regen Enchantment.png": 41669,
      "./Health Regen.png": 41675,
      "./Health.png": 41683,
      "./HealthShield.png": 41690,
      "./Heat Resistance.png": 41696,
      "./Horizontal Knockback Enchantment.png": 41698,
      "./Hunger.png": 41707,
      "./Hydrated.png": 41714,
      "./Invisible.png": 41717,
      "./Irradiated.png": 41721,
      "./Jump Boost.png": 41726,
      "./Knockback Resist Enchantment.png": 41735,
      "./Lifesteal.png": 41737,
      "./Lumber Aura Enchantment.png": 41743,
      "./Magma Golem Head.png": 41747,
      "./Max Health.png": 41752,
      "./Mining Aura Enchantment.png": 41761,
      "./Mining Yield Enchantment.png": 41770,
      "./Mining Yield.png": 41772,
      "./Mob Slayer.png": 41776,
      "./Mob Yield.png": 41785,
      "./Momentum Enchantment.png": 41793,
      "./Mystery Fish.png": 41799,
      "./Night Vision.png": 41806,
      "./Obsidian Boating.png": 41812,
      "./Pack Leader.png": 41819,
      "./Pickpocketer.png": 41822,
      "./Pixelated Heart.png": 41826,
      "./Poison Claws.png": 41829,
      "./Poisoned.png": 41837,
      "./Poopy.png": 41844,
      "./Protection Enchantment.png": 41853,
      "./Question Mark.png": 41857,
      "./Quick Charge Enchantment.png": 41859,
      "./Rainbow Wool.png": 41861,
      "./Rested Aura.png": 41863,
      "./Rested Damage.png": 41870,
      "./Rested Farming Yield.png": 41875,
      "./Rested Haste.png": 41878,
      "./Rested Speed.png": 41886,
      "./Riding Speed.png": 41891,
      "./Riding.png": 41899,
      "./Self Yield.png": 41907,
      "./Slowness.png": 41913,
      "./Speed.png": 41915,
      "./Stomp Damage Enchantment.png": 41917,
      "./Thief.png": 41926,
      "./Thorns.png": 41933,
      "./Trader Black.png": 41942,
      "./Trader Blue.png": 41947,
      "./Trader Piggy.png": 41949,
      "./Vertical Knockback Enchantment.png": 41958,
      "./VoidJump.png": 41963,
      "./Wall Climbing.png": 41966,
      "./Weakness.png": 41973,
      "./X-Ray Vision.png": 41982
    };

    function zT(TT) {
      var oT = kT(TT);
      return IT(oT)
    }

    function kT(TT) {
      if (!IT.o(iT, TT)) {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }
      return iT[TT]
    }
    zT.keys = function() {
      return Object.keys(iT)
    }, zT.resolve = kT, TT.exports = zT, zT.id = 41431
  },
  41993: (TT, oT, IT) => {
    var iT = {
      "./arrow.png": 41996,
      "./bubble.png": 42004,
      "./critical_hit.png": 42007,
      "./drift.png": 42014,
      "./effect_5.png": 42019,
      "./fishingFishSilhouette.png": 42021,
      "./generic_2.png": 42024,
      "./glint.png": 42029,
      "./heart.png": 42036,
      "./scary_face.png": 42040,
      "./soul_0.png": 42049,
      "./square_particle.png": 42055,
      "./z-particle.png": 42059
    };

    function zT(TT) {
      var oT = kT(TT);
      return IT(oT)
    }

    function kT(TT) {
      if (!IT.o(iT, TT)) {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }
      return iT[TT]
    }
    zT.keys = function() {
      return Object.keys(iT)
    }, zT.resolve = kT, TT.exports = zT, zT.id = 41993
  },
  41439: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  41445: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  41450: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  41458: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  41464: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  41470: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  41475: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  41483: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  41492: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  41495: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  41498: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  41507: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  41515: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  41520: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  41525: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  41532: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  41538: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  41540: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  41547: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  41555: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  41558: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  41564: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  41568: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  41571: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  41573: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  41579: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  41586: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  41594: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  41602: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  41609: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  41612: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  41621: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  41630: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  41632: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  41635: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  41638: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  41644: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  41651: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  41653: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  41661: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  41669: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  41675: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  41683: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  41690: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  41696: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  41698: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  41707: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  41714: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  41717: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  41721: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  41726: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  41735: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  41737: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  41743: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  41747: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  41752: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  41761: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  41770: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  41772: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  41776: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  41785: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  41793: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  41799: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  41806: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  41812: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  41819: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  41822: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  41826: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  41829: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  41837: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  41844: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  41853: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  41857: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  41859: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  41861: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  41863: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  41870: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  41875: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  41878: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  41886: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  41891: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  41899: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  41907: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  41913: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  41915: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  41917: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  41926: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  41933: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  41942: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  41947: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  41949: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  41958: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  41963: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  41966: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  41973: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  41982: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  41996: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  42004: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  42007: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  42014: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  42019: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  42021: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  42024: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  42029: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  42036: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  42040: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  42049: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  42055: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  42059: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  41990: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);