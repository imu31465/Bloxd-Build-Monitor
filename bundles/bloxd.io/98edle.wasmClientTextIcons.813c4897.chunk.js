export const id = 50;
export const ids = [50];
export const modules = {
  40063: (WW, RW, MW) => {
    var wW = {
      "./Air Walk.png": 40066,
      "./Antlers Bonus.png": 40069,
      "./Arrow Damage Enchantment.png": 40071,
      "./Arrow Speed Enchantment.png": 40074,
      "./Attack Speed Enchantment.png": 40078,
      "./Blindness.png": 40084,
      "./Boating.png": 40086,
      "./Bounciness.png": 40090,
      "./Brain Rot.png": 40097,
      "./Break Speed Enchantment.png": 40103,
      "./Bunny Hop.png": 40108,
      "./Critical Damage Enchantment.png": 40111,
      "./Cross.png": 40117,
      "./Damage Enchantment.png": 40126,
      "./Damage Reduction.png": 40129,
      "./Damage.png": 40133,
      "./Digging Aura Enchantment.png": 40141,
      "./Dotted Friendship.png": 40150,
      "./Double Jump.png": 40158,
      "./Double Poop.png": 40163,
      "./Draugr Knight Head.png": 40171,
      "./Draugr Warper Head.png": 40179,
      "./Empty Hunger.png": 40183,
      "./FallDamage.png": 40191,
      "./Farming Aura Enchantment.png": 40200,
      "./Farming Yield Enchantment.png": 40202,
      "./Feather Falling.png": 40204,
      "./Feed Aura.png": 40212,
      "./Firecracker Boost Enchantment.png": 40217,
      "./Firecracker Cooldown Enchantment.png": 40224,
      "./Fist.png": 40232,
      "./Friends.png": 40237,
      "./Friendship.png": 40244,
      "./Frozen.png": 40250,
      "./Gliding Speed Enchantment.png": 40256,
      "./Gliding.png": 40258,
      "./Glowing.png": 40266,
      "./Haste.png": 40271,
      "./Healing Pulse.png": 40275,
      "./Health Enchantment.png": 40284,
      "./Health Regen Enchantment.png": 40290,
      "./Health Regen.png": 40293,
      "./Health.png": 40295,
      "./HealthShield.png": 40297,
      "./Heat Resistance.png": 40301,
      "./Horizontal Knockback Enchantment.png": 40305,
      "./Hunger.png": 40308,
      "./Hydrated.png": 40313,
      "./Invisible.png": 40322,
      "./Irradiated.png": 40326,
      "./Jump Boost.png": 40330,
      "./Knockback Resist Enchantment.png": 40333,
      "./Lifesteal.png": 40340,
      "./Lumber Aura Enchantment.png": 40346,
      "./Magma Golem Head.png": 40354,
      "./Max Health.png": 40362,
      "./Mining Aura Enchantment.png": 40370,
      "./Mining Yield Enchantment.png": 40374,
      "./Mining Yield.png": 40383,
      "./Mob Slayer.png": 40389,
      "./Mob Yield.png": 40398,
      "./Momentum Enchantment.png": 40400,
      "./Mystery Fish.png": 40404,
      "./Night Vision.png": 40412,
      "./Obsidian Boating.png": 40419,
      "./Pack Leader.png": 40426,
      "./Pickpocketer.png": 40433,
      "./Pixelated Heart.png": 40440,
      "./Poison Claws.png": 40447,
      "./Poisoned.png": 40450,
      "./Poopy.png": 40455,
      "./Protection Enchantment.png": 40462,
      "./Question Mark.png": 40469,
      "./Quick Charge Enchantment.png": 40471,
      "./Rainbow Wool.png": 40474,
      "./Rested Aura.png": 40478,
      "./Rested Damage.png": 40480,
      "./Rested Farming Yield.png": 40487,
      "./Rested Haste.png": 40489,
      "./Rested Speed.png": 40497,
      "./Riding Speed.png": 40500,
      "./Riding.png": 40507,
      "./Self Yield.png": 40512,
      "./Slowness.png": 40521,
      "./Speed.png": 40523,
      "./Stomp Damage Enchantment.png": 40527,
      "./Thief.png": 40536,
      "./Thorns.png": 40540,
      "./Trader Black.png": 40546,
      "./Trader Blue.png": 40552,
      "./Trader Piggy.png": 40558,
      "./Vertical Knockback Enchantment.png": 40562,
      "./VoidJump.png": 40569,
      "./Wall Climbing.png": 40577,
      "./Weakness.png": 40583,
      "./X-Ray Vision.png": 40591
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 40063
  },
  40602: (WW, RW, MW) => {
    var wW = {
      "./arrow.png": 40604,
      "./bubble.png": 40612,
      "./critical_hit.png": 40618,
      "./drift.png": 40624,
      "./effect_5.png": 40627,
      "./fishingFishSilhouette.png": 40633,
      "./generic_2.png": 40637,
      "./glint.png": 40641,
      "./heart.png": 40644,
      "./scary_face.png": 40651,
      "./soul_0.png": 40657,
      "./square_particle.png": 40666,
      "./z-particle.png": 40670
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 40602
  },
  40059: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      blockTextureUrl: () => gR,
      ingameIconUrl: () => tR,
      itemSpriteUrl: () => BW,
      loadBundledTextures: () => yR,
      notFoundUrl: () => TW,
      particleUrl: () => iR
    });
    var wW = MW(38262),
      CW = MW(1553),
      zR = MW(2309);
    let AW = null,
      bR = null;

    function yR() {
      bR ??= Promise.all([MW.e(59), MW.e(178), MW.e(81)]).then((() => MW(8177))).then((WW => {
        AW = WW, (0, CW.e)()
      }), (WW => {
        console.warn("[bloxd-wasm-client] the default texture pack did not load, so item icons load file by file", WW)
      }))
    }

    function NW(WW, RW) {
      if (null === AW) return null;
      try {
        return AW.getDefaultTexture(WW, RW).url
      } catch {
        return null
      }
    }

    function eW(WW, RW) {
      return `${MW.p}${WW}${encodeURIComponent(RW)}.png`
    }

    function BW(WW) {
      var RW;
      const MW = "static/items/f8c148434246a2c1/";
      return (0, wW.c)(WW) ? null !== (RW = function(WW) {
        return NW(WW, zR.i.ITEM)
      }(WW)) && void 0 !== RW ? RW : eW(MW, WW) : null
    }

    function tR(WW) {
      try {
        return MW(40063)(`./${WW}.png`)
      } catch {
        return null
      }
    }

    function TW() {
      return MW(40597)
    }

    function gR(WW) {
      var RW;
      const MW = "static/blocks/7a8698da99f6d2c7/";
      return WW.includes("[") ? null : null !== (RW = function(WW) {
        return NW(WW, zR.i.BLOCK)
      }(WW)) && void 0 !== RW ? RW : eW(MW, WW)
    }

    function iR(WW) {
      try {
        return MW(40602)(`./${WW}.png`)
      } catch {
        return null
      }
    }
  },
  40066: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  40069: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  40071: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  40074: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  40078: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  40084: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  40086: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  40090: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  40097: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  40103: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  40108: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  40111: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  40117: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  40126: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  40129: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  40133: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  40141: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  40150: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  40158: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  40163: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  40171: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  40179: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  40183: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  40191: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  40200: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  40202: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  40204: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  40212: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  40217: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  40224: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  40232: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  40237: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  40244: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  40250: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  40256: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  40258: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  40266: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  40271: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  40275: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  40284: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  40290: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  40293: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  40295: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  40297: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  40301: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  40305: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  40308: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  40313: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  40322: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  40326: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  40330: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  40333: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  40340: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  40346: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  40354: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  40362: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  40370: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  40374: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  40383: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  40389: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  40398: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  40400: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  40404: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  40412: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  40419: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  40426: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  40433: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  40440: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  40447: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  40450: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  40455: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  40462: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  40469: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  40471: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  40474: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  40478: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  40480: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  40487: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  40489: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  40497: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  40500: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  40507: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  40512: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  40521: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  40523: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  40527: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  40536: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  40540: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  40546: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  40552: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  40558: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  40562: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  40569: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  40577: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  40583: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  40591: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  40604: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  40612: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  40618: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  40624: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  40627: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  40633: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  40637: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  40641: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  40644: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  40651: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  40657: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  40666: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  40670: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  40597: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);