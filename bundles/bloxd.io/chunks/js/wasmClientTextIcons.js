export const id = 73;
export const ids = [73];
export const modules = {
  63646: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      blockTextureUrl: () => rV,
      followBundledTextures: () => pV,
      ingameIconUrl: () => ZV,
      itemSpriteUrl: () => wV,
      notFoundUrl: () => vV,
      particleUrl: () => kV
    });
    var JV = xV(42359),
      YV = xV(2066),
      UV = xV(2261),
      yV = xV(3594);

    function pV() {
      (0, UV.l)((() => {
        (0, YV.d)()
      }))
    }

    function QV(VV, eV) {
      const xV = (0, UV.k)();
      if (null === xV) return null;
      try {
        return xV.getDefaultTexture(VV, eV).url
      } catch {
        return null
      }
    }

    function nV(VV, eV) {
      return `${xV.p}${VV}${encodeURIComponent(eV)}.png`
    }

    function wV(VV) {
      var eV;
      const xV = "static/items/1a4d1f22bd315291/";
      return (0, JV.c)(VV) ? null !== (eV = function(VV) {
        return QV(VV, yV.e.ITEM)
      }(VV)) && void 0 !== eV ? eV : nV(xV, VV) : null
    }

    function ZV(VV) {
      try {
        return xV(63654)(`./${VV}.png`)
      } catch {
        return null
      }
    }

    function vV() {
      return xV(64193)
    }

    function rV(VV) {
      var eV;
      const xV = "static/blocks/b5f33a3f7a665ddf/";
      return VV.includes("[") ? null : null !== (eV = function(VV) {
        return QV(VV, yV.e.BLOCK)
      }(VV)) && void 0 !== eV ? eV : nV(xV, VV)
    }

    function kV(VV) {
      try {
        return xV(64196)(`./${VV}.png`)
      } catch {
        return null
      }
    }
  },
  63654: (VV, eV, xV) => {
    var JV = {
      "./Air Walk.png": 63661,
      "./Antlers Bonus.png": 63668,
      "./Arrow Damage Enchantment.png": 63673,
      "./Arrow Speed Enchantment.png": 63678,
      "./Attack Speed Enchantment.png": 63682,
      "./Blindness.png": 63685,
      "./Boating.png": 63690,
      "./Bounciness.png": 63694,
      "./Brain Rot.png": 63702,
      "./Break Speed Enchantment.png": 63704,
      "./Bunny Hop.png": 63713,
      "./Critical Damage Enchantment.png": 63718,
      "./Cross.png": 63724,
      "./Damage Enchantment.png": 63727,
      "./Damage Reduction.png": 63732,
      "./Damage.png": 63737,
      "./Digging Aura Enchantment.png": 63742,
      "./Dotted Friendship.png": 63751,
      "./Double Jump.png": 63753,
      "./Double Poop.png": 63755,
      "./Draugr Knight Head.png": 63762,
      "./Draugr Warper Head.png": 63769,
      "./Empty Hunger.png": 63777,
      "./FallDamage.png": 63781,
      "./Farming Aura Enchantment.png": 63788,
      "./Farming Yield Enchantment.png": 63791,
      "./Feather Falling.png": 63799,
      "./Feed Aura.png": 63808,
      "./Firecracker Boost Enchantment.png": 63814,
      "./Firecracker Cooldown Enchantment.png": 63817,
      "./Fist.png": 63821,
      "./Friends.png": 63829,
      "./Friendship.png": 63832,
      "./Frozen.png": 63838,
      "./Gliding Speed Enchantment.png": 63844,
      "./Gliding.png": 63848,
      "./Glowing.png": 63851,
      "./Haste.png": 63860,
      "./Healing Pulse.png": 63868,
      "./Health Enchantment.png": 63872,
      "./Health Regen Enchantment.png": 63881,
      "./Health Regen.png": 63887,
      "./Health.png": 63891,
      "./HealthShield.png": 63900,
      "./Heat Resistance.png": 63904,
      "./Horizontal Knockback Enchantment.png": 63910,
      "./Hunger.png": 63914,
      "./Hydrated.png": 63922,
      "./Invisible.png": 63926,
      "./Irradiated.png": 63934,
      "./Jump Boost.png": 63943,
      "./Knockback Resist Enchantment.png": 63951,
      "./Lifesteal.png": 63955,
      "./Lumber Aura Enchantment.png": 63958,
      "./Magma Golem Head.png": 63965,
      "./Max Health.png": 63973,
      "./Mining Aura Enchantment.png": 63976,
      "./Mining Yield Enchantment.png": 63982,
      "./Mining Yield.png": 63989,
      "./Mob Slayer.png": 63992,
      "./Mob Yield.png": 63995,
      "./Momentum Enchantment.png": 64002,
      "./Mystery Fish.png": 64011,
      "./Night Vision.png": 64017,
      "./Obsidian Boating.png": 64021,
      "./Pack Leader.png": 64025,
      "./Pickpocketer.png": 64033,
      "./Pixelated Heart.png": 64038,
      "./Poison Claws.png": 64046,
      "./Poisoned.png": 64052,
      "./Poopy.png": 64056,
      "./Protection Enchantment.png": 64062,
      "./Question Mark.png": 64068,
      "./Quick Charge Enchantment.png": 64074,
      "./Rainbow Wool.png": 64081,
      "./Rested Aura.png": 64090,
      "./Rested Damage.png": 64092,
      "./Rested Farming Yield.png": 64095,
      "./Rested Haste.png": 64097,
      "./Rested Speed.png": 64102,
      "./Riding Speed.png": 64109,
      "./Riding.png": 64116,
      "./Self Yield.png": 64125,
      "./Slowness.png": 64129,
      "./Speed.png": 64131,
      "./Stomp Damage Enchantment.png": 64134,
      "./Thief.png": 64141,
      "./Thorns.png": 64148,
      "./Trader Black.png": 64153,
      "./Trader Blue.png": 64157,
      "./Trader Piggy.png": 64164,
      "./Vertical Knockback Enchantment.png": 64167,
      "./VoidJump.png": 64174,
      "./Wall Climbing.png": 64180,
      "./Weakness.png": 64183,
      "./X-Ray Vision.png": 64189
    };

    function YV(VV) {
      var eV = UV(VV);
      return xV(eV)
    }

    function UV(VV) {
      if (!xV.o(JV, VV)) {
        var eV = new Error("Cannot find module '" + VV + "'");
        throw eV.code = "MODULE_NOT_FOUND", eV
      }
      return JV[VV]
    }
    YV.keys = function() {
      return Object.keys(JV)
    }, YV.resolve = UV, VV.exports = YV, YV.id = 63654
  },
  64196: (VV, eV, xV) => {
    var JV = {
      "./arrow.png": 64199,
      "./bubble.png": 64202,
      "./critical_hit.png": 64208,
      "./drift.png": 64212,
      "./effect_5.png": 64214,
      "./fishingFishSilhouette.png": 64223,
      "./generic_2.png": 64231,
      "./glint.png": 64237,
      "./heart.png": 64243,
      "./scary_face.png": 64250,
      "./snowflake.png": 64254,
      "./soul_0.png": 64257,
      "./square_particle.png": 64262,
      "./z-particle.png": 64265
    };

    function YV(VV) {
      var eV = UV(VV);
      return xV(eV)
    }

    function UV(VV) {
      if (!xV.o(JV, VV)) {
        var eV = new Error("Cannot find module '" + VV + "'");
        throw eV.code = "MODULE_NOT_FOUND", eV
      }
      return JV[VV]
    }
    YV.keys = function() {
      return Object.keys(JV)
    }, YV.resolve = UV, VV.exports = YV, YV.id = 64196
  },
  63661: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  63668: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  63673: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  63678: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  63682: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  63685: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  63690: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  63694: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  63702: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  63704: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  63713: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  63718: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  63724: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  63727: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  63732: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  63737: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  63742: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  63751: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  63753: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  63755: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  63762: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  63769: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  63777: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  63781: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  63788: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  63791: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  63799: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  63808: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  63814: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  63817: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  63821: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  63829: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  63832: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  63838: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  63844: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  63848: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  63851: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  63860: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  63868: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  63872: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  63881: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  63887: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  63891: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  63900: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  63904: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  63910: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  63914: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  63922: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  63926: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  63934: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  63943: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  63951: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  63955: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  63958: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  63965: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  63973: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  63976: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  63982: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  63989: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  63992: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  63995: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  64002: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  64011: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  64017: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  64021: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  64025: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  64033: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  64038: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  64046: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  64052: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  64056: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  64062: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  64068: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  64074: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  64081: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  64090: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  64092: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  64095: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  64097: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  64102: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  64109: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  64116: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  64125: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  64129: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  64131: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  64134: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  64141: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  64148: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  64153: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  64157: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  64164: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  64167: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  64174: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  64180: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  64183: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  64189: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  64199: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  64202: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  64208: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  64212: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  64214: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  64223: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  64231: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  64237: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  64243: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  64250: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  64254: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  64257: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  64262: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  64265: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  64193: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);