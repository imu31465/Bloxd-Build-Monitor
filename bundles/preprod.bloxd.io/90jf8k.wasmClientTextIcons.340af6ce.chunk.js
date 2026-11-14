export const id = 50;
export const ids = [50];
export const modules = {
  40491: (FF, WF, SF) => {
    var CF = {
      "./Air Walk.png": 40496,
      "./Antlers Bonus.png": 40499,
      "./Arrow Damage Enchantment.png": 40503,
      "./Arrow Speed Enchantment.png": 40507,
      "./Attack Speed Enchantment.png": 40512,
      "./Blindness.png": 40517,
      "./Boating.png": 40522,
      "./Bounciness.png": 40531,
      "./Brain Rot.png": 40538,
      "./Break Speed Enchantment.png": 40546,
      "./Bunny Hop.png": 40551,
      "./Critical Damage Enchantment.png": 40555,
      "./Cross.png": 40561,
      "./Damage Enchantment.png": 40568,
      "./Damage Reduction.png": 40574,
      "./Damage.png": 40576,
      "./Digging Aura Enchantment.png": 40585,
      "./Dotted Friendship.png": 40593,
      "./Double Jump.png": 40599,
      "./Double Poop.png": 40608,
      "./Draugr Knight Head.png": 40614,
      "./Draugr Warper Head.png": 40622,
      "./Empty Hunger.png": 40625,
      "./FallDamage.png": 40629,
      "./Farming Aura Enchantment.png": 40635,
      "./Farming Yield Enchantment.png": 40644,
      "./Feather Falling.png": 40647,
      "./Feed Aura.png": 40655,
      "./Firecracker Boost Enchantment.png": 40659,
      "./Firecracker Cooldown Enchantment.png": 40663,
      "./Fist.png": 40665,
      "./Friends.png": 40670,
      "./Friendship.png": 40678,
      "./Frozen.png": 40686,
      "./Gliding Speed Enchantment.png": 40695,
      "./Gliding.png": 40700,
      "./Glowing.png": 40707,
      "./Haste.png": 40712,
      "./Healing Pulse.png": 40715,
      "./Health Enchantment.png": 40724,
      "./Health Regen Enchantment.png": 40729,
      "./Health Regen.png": 40733,
      "./Health.png": 40739,
      "./HealthShield.png": 40742,
      "./Heat Resistance.png": 40748,
      "./Horizontal Knockback Enchantment.png": 40755,
      "./Hunger.png": 40764,
      "./Hydrated.png": 40769,
      "./Invisible.png": 40776,
      "./Irradiated.png": 40781,
      "./Jump Boost.png": 40790,
      "./Knockback Resist Enchantment.png": 40797,
      "./Lifesteal.png": 40802,
      "./Lumber Aura Enchantment.png": 40810,
      "./Magma Golem Head.png": 40816,
      "./Max Health.png": 40818,
      "./Mining Aura Enchantment.png": 40827,
      "./Mining Yield Enchantment.png": 40836,
      "./Mining Yield.png": 40841,
      "./Mob Slayer.png": 40844,
      "./Mob Yield.png": 40849,
      "./Momentum Enchantment.png": 40851,
      "./Mystery Fish.png": 40859,
      "./Night Vision.png": 40861,
      "./Obsidian Boating.png": 40866,
      "./Pack Leader.png": 40868,
      "./Pickpocketer.png": 40872,
      "./Pixelated Heart.png": 40875,
      "./Poison Claws.png": 40881,
      "./Poisoned.png": 40885,
      "./Poopy.png": 40894,
      "./Protection Enchantment.png": 40897,
      "./Question Mark.png": 40902,
      "./Quick Charge Enchantment.png": 40909,
      "./Rainbow Wool.png": 40914,
      "./Rested Aura.png": 40916,
      "./Rested Damage.png": 40919,
      "./Rested Farming Yield.png": 40926,
      "./Rested Haste.png": 40928,
      "./Rested Speed.png": 40932,
      "./Riding Speed.png": 40935,
      "./Riding.png": 40943,
      "./Self Yield.png": 40946,
      "./Slowness.png": 40955,
      "./Speed.png": 40960,
      "./Stomp Damage Enchantment.png": 40964,
      "./Thief.png": 40972,
      "./Thorns.png": 40977,
      "./Trader Black.png": 40986,
      "./Trader Blue.png": 40989,
      "./Trader Piggy.png": 40994,
      "./Vertical Knockback Enchantment.png": 40996,
      "./VoidJump.png": 41005,
      "./Wall Climbing.png": 41009,
      "./Weakness.png": 41016,
      "./X-Ray Vision.png": 41022
    };

    function AF(FF) {
      var WF = uF(FF);
      return SF(WF)
    }

    function uF(FF) {
      if (!SF.o(CF, FF)) {
        var WF = new Error("Cannot find module '" + FF + "'");
        throw WF.code = "MODULE_NOT_FOUND", WF
      }
      return CF[FF]
    }
    AF.keys = function() {
      return Object.keys(CF)
    }, AF.resolve = uF, FF.exports = AF, AF.id = 40491
  },
  41032: (FF, WF, SF) => {
    var CF = {
      "./arrow.png": 41039,
      "./bubble.png": 41046,
      "./critical_hit.png": 41055,
      "./drift.png": 41059,
      "./effect_5.png": 41061,
      "./fishingFishSilhouette.png": 41065,
      "./generic_2.png": 41071,
      "./glint.png": 41076,
      "./heart.png": 41085,
      "./scary_face.png": 41087,
      "./soul_0.png": 41096,
      "./square_particle.png": 41098,
      "./z-particle.png": 41104
    };

    function AF(FF) {
      var WF = uF(FF);
      return SF(WF)
    }

    function uF(FF) {
      if (!SF.o(CF, FF)) {
        var WF = new Error("Cannot find module '" + FF + "'");
        throw WF.code = "MODULE_NOT_FOUND", WF
      }
      return CF[FF]
    }
    AF.keys = function() {
      return Object.keys(CF)
    }, AF.resolve = uF, FF.exports = AF, AF.id = 41032
  },
  40485: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      blockTextureUrl: () => QF,
      ingameIconUrl: () => eF,
      itemSpriteUrl: () => iW,
      loadBundledTextures: () => dF,
      notFoundUrl: () => EF,
      particleUrl: () => rW
    });
    var CF = SF(38653),
      AF = SF(1587),
      uF = SF(2364);
    let hF = null,
      bW = null;

    function dF() {
      bW ??= Promise.all([SF.e(59), SF.e(178), SF.e(81)]).then((() => SF(8240))).then((FF => {
        hF = FF, (0, AF.b)()
      }), (FF => {
        console.warn("[bloxd-wasm-client] the default texture pack did not load, so item icons load file by file", FF)
      }))
    }

    function PF(FF, WF) {
      if (null === hF) return null;
      try {
        return hF.getDefaultTexture(FF, WF).url
      } catch {
        return null
      }
    }

    function RF(FF, WF) {
      return `${SF.p}${FF}${encodeURIComponent(WF)}.png`
    }

    function iW(FF) {
      var WF;
      const SF = "static/items/f8c148434246a2c1/";
      return (0, CF.b)(FF) ? null !== (WF = function(FF) {
        return PF(FF, uF.c.ITEM)
      }(FF)) && void 0 !== WF ? WF : RF(SF, FF) : null
    }

    function eF(FF) {
      try {
        return SF(40491)(`./${FF}.png`)
      } catch {
        return null
      }
    }

    function EF() {
      return SF(41030)
    }

    function QF(FF) {
      var WF;
      const SF = "static/blocks/a776f31eae8e2857/";
      return FF.includes("[") ? null : null !== (WF = function(FF) {
        return PF(FF, uF.c.BLOCK)
      }(FF)) && void 0 !== WF ? WF : RF(SF, FF)
    }

    function rW(FF) {
      try {
        return SF(41032)(`./${FF}.png`)
      } catch {
        return null
      }
    }
  },
  40496: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  40499: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  40503: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  40507: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  40512: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  40517: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  40522: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  40531: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  40538: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  40546: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  40551: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  40555: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  40561: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  40568: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  40574: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  40576: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  40585: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  40593: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  40599: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  40608: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  40614: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  40622: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  40625: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  40629: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  40635: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  40644: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  40647: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  40655: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  40659: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  40663: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  40665: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  40670: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  40678: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  40686: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  40695: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  40700: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  40707: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  40712: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  40715: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  40724: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  40729: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  40733: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  40739: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  40742: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  40748: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  40755: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  40764: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  40769: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  40776: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  40781: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  40790: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  40797: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  40802: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  40810: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  40816: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  40818: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  40827: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  40836: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  40841: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  40844: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  40849: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  40851: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  40859: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  40861: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  40866: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  40868: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  40872: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  40875: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  40881: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  40885: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  40894: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  40897: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  40902: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  40909: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  40914: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  40916: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  40919: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  40926: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  40928: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  40932: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  40935: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  40943: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  40946: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  40955: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  40960: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  40964: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  40972: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  40977: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  40986: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  40989: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  40994: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  40996: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  41005: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  41009: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  41016: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  41022: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  41039: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  41046: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  41055: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  41059: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  41061: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  41065: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  41071: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  41076: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  41085: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  41087: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  41096: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  41098: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  41104: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  41030: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);