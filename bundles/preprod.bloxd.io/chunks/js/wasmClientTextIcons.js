export const id = 73;
export const ids = [73];
export const modules = {
  63256: (MM, rM, iM) => {
    var OM = {
      "./Air Walk.png": 63258,
      "./Antlers Bonus.png": 63261,
      "./Arrow Damage Enchantment.png": 63263,
      "./Arrow Speed Enchantment.png": 63265,
      "./Attack Speed Enchantment.png": 63273,
      "./Blindness.png": 63275,
      "./Boating.png": 63280,
      "./Bounciness.png": 63286,
      "./Brain Rot.png": 63293,
      "./Break Speed Enchantment.png": 63295,
      "./Bunny Hop.png": 63301,
      "./Critical Damage Enchantment.png": 63308,
      "./Cross.png": 63310,
      "./Damage Enchantment.png": 63314,
      "./Damage Reduction.png": 63323,
      "./Damage.png": 63325,
      "./Digging Aura Enchantment.png": 63328,
      "./Dotted Friendship.png": 63336,
      "./Double Jump.png": 63341,
      "./Double Poop.png": 63346,
      "./Draugr Knight Head.png": 63349,
      "./Draugr Warper Head.png": 63352,
      "./Empty Hunger.png": 63361,
      "./FallDamage.png": 63367,
      "./Farming Aura Enchantment.png": 63370,
      "./Farming Yield Enchantment.png": 63374,
      "./Feather Falling.png": 63377,
      "./Feed Aura.png": 63385,
      "./Firecracker Boost Enchantment.png": 63392,
      "./Firecracker Cooldown Enchantment.png": 63398,
      "./Fist.png": 63404,
      "./Friends.png": 63406,
      "./Friendship.png": 63408,
      "./Frozen.png": 63414,
      "./Gliding Speed Enchantment.png": 63422,
      "./Gliding.png": 63430,
      "./Glowing.png": 63438,
      "./Haste.png": 63447,
      "./Healing Pulse.png": 63449,
      "./Health Enchantment.png": 63455,
      "./Health Regen Enchantment.png": 63457,
      "./Health Regen.png": 63463,
      "./Health.png": 63469,
      "./HealthShield.png": 63478,
      "./Heat Resistance.png": 63483,
      "./Horizontal Knockback Enchantment.png": 63490,
      "./Hunger.png": 63495,
      "./Hydrated.png": 63504,
      "./Invisible.png": 63513,
      "./Irradiated.png": 63519,
      "./Jump Boost.png": 63521,
      "./Knockback Resist Enchantment.png": 63526,
      "./Lifesteal.png": 63534,
      "./Lumber Aura Enchantment.png": 63536,
      "./Magma Golem Head.png": 63544,
      "./Max Health.png": 63546,
      "./Mining Aura Enchantment.png": 63552,
      "./Mining Yield Enchantment.png": 63558,
      "./Mining Yield.png": 63566,
      "./Mob Slayer.png": 63570,
      "./Mob Yield.png": 63573,
      "./Momentum Enchantment.png": 63578,
      "./Mystery Fish.png": 63585,
      "./Night Vision.png": 63589,
      "./Obsidian Boating.png": 63597,
      "./Pack Leader.png": 63600,
      "./Pickpocketer.png": 63605,
      "./Pixelated Heart.png": 63609,
      "./Poison Claws.png": 63613,
      "./Poisoned.png": 63622,
      "./Poopy.png": 63628,
      "./Protection Enchantment.png": 63633,
      "./Question Mark.png": 63642,
      "./Quick Charge Enchantment.png": 63651,
      "./Rainbow Wool.png": 63657,
      "./Rested Aura.png": 63664,
      "./Rested Damage.png": 63671,
      "./Rested Farming Yield.png": 63677,
      "./Rested Haste.png": 63683,
      "./Rested Speed.png": 63688,
      "./Riding Speed.png": 63692,
      "./Riding.png": 63700,
      "./Self Yield.png": 63709,
      "./Slowness.png": 63715,
      "./Speed.png": 63721,
      "./Stomp Damage Enchantment.png": 63728,
      "./Thief.png": 63734,
      "./Thorns.png": 63738,
      "./Trader Black.png": 63747,
      "./Trader Blue.png": 63755,
      "./Trader Piggy.png": 63763,
      "./Vertical Knockback Enchantment.png": 63771,
      "./VoidJump.png": 63777,
      "./Wall Climbing.png": 63784,
      "./Weakness.png": 63787,
      "./X-Ray Vision.png": 63789
    };

    function SM(MM) {
      var rM = jM(MM);
      return iM(rM)
    }

    function jM(MM) {
      if (!iM.o(OM, MM)) {
        var rM = new Error("Cannot find module '" + MM + "'");
        throw rM.code = "MODULE_NOT_FOUND", rM
      }
      return OM[MM]
    }
    SM.keys = function() {
      return Object.keys(OM)
    }, SM.resolve = jM, MM.exports = SM, SM.id = 63256
  },
  63798: (MM, rM, iM) => {
    var OM = {
      "./arrow.png": 63804,
      "./bubble.png": 63810,
      "./critical_hit.png": 63819,
      "./drift.png": 63827,
      "./effect_5.png": 63833,
      "./fishingFishSilhouette.png": 63840,
      "./generic_2.png": 63842,
      "./glint.png": 63849,
      "./heart.png": 63851,
      "./scary_face.png": 63859,
      "./snowflake.png": 63868,
      "./soul_0.png": 63871,
      "./square_particle.png": 63878,
      "./z-particle.png": 63881
    };

    function SM(MM) {
      var rM = jM(MM);
      return iM(rM)
    }

    function jM(MM) {
      if (!iM.o(OM, MM)) {
        var rM = new Error("Cannot find module '" + MM + "'");
        throw rM.code = "MODULE_NOT_FOUND", rM
      }
      return OM[MM]
    }
    SM.keys = function() {
      return Object.keys(OM)
    }, SM.resolve = jM, MM.exports = SM, SM.id = 63798
  },
  63252: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      blockTextureUrl: () => HM,
      followBundledTextures: () => PM,
      ingameIconUrl: () => LM,
      itemSpriteUrl: () => zM,
      notFoundUrl: () => mM,
      particleUrl: () => hM
    });
    var OM = iM(42157),
      SM = iM(2050),
      jM = iM(2257),
      aM = iM(3580);

    function PM() {
      (0, jM.s)((() => {
        (0, SM.c)()
      }))
    }

    function nM(MM, rM) {
      const iM = (0, jM.o)();
      if (null === iM) return null;
      try {
        return iM.getDefaultTexture(MM, rM).url
      } catch {
        return null
      }
    }

    function QM(MM, rM) {
      return `${iM.p}${MM}${encodeURIComponent(rM)}.png`
    }

    function zM(MM) {
      var rM;
      const iM = "static/items/1a4d1f22bd315291/";
      return (0, OM.e)(MM) ? null !== (rM = function(MM) {
        return nM(MM, aM.f.ITEM)
      }(MM)) && void 0 !== rM ? rM : QM(iM, MM) : null
    }

    function LM(MM) {
      try {
        return iM(63256)(`./${MM}.png`)
      } catch {
        return null
      }
    }

    function mM() {
      return iM(63792)
    }

    function HM(MM) {
      var rM;
      const iM = "static/blocks/b5f33a3f7a665ddf/";
      return MM.includes("[") ? null : null !== (rM = function(MM) {
        return nM(MM, aM.f.BLOCK)
      }(MM)) && void 0 !== rM ? rM : QM(iM, MM)
    }

    function hM(MM) {
      try {
        return iM(63798)(`./${MM}.png`)
      } catch {
        return null
      }
    }
  },
  63258: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  63261: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  63263: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  63265: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  63273: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  63275: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  63280: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  63286: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  63293: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  63295: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  63301: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  63308: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  63310: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  63314: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  63323: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  63325: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  63328: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  63336: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  63341: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  63346: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  63349: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  63352: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  63361: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  63367: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  63370: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  63374: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  63377: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  63385: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  63392: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  63398: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  63404: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  63406: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  63408: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  63414: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  63422: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  63430: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  63438: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  63447: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  63449: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  63455: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  63457: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  63463: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  63469: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  63478: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  63483: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  63490: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  63495: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  63504: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  63513: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  63519: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  63521: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  63526: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  63534: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  63536: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  63544: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  63546: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  63552: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  63558: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  63566: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  63570: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  63573: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  63578: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  63585: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  63589: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  63597: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  63600: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  63605: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  63609: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  63613: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  63622: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  63628: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  63633: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  63642: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  63651: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  63657: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  63664: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  63671: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  63677: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  63683: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  63688: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  63692: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  63700: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  63709: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  63715: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  63721: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  63728: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  63734: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  63738: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  63747: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  63755: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  63763: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  63771: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  63777: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  63784: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  63787: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  63789: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  63804: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  63810: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  63819: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  63827: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  63833: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  63840: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  63842: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  63849: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  63851: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  63859: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  63868: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  63871: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  63878: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  63881: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  63792: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);