export const id = 74;
export const ids = [74];
export const modules = {
  42864: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      blockTextureUrl: () => tb,
      followBundledTextures: () => gb,
      ingameIconUrl: () => Ob,
      itemSpriteUrl: () => Ib,
      notFoundUrl: () => Ub,
      particleUrl: () => Cb
    });
    var eb = Mb(37539),
      Hb = Mb(2150),
      pb = Mb(2364),
      Vb = Mb(4539);

    function gb() {
      (0, pb.s)((() => {
        (0, Hb.d)()
      }))
    }

    function lb(bb, wb) {
      const Mb = (0, pb.p)();
      if (null === Mb) return null;
      try {
        return Mb.getDefaultTexture(bb, wb).url
      } catch {
        return null
      }
    }

    function Lb(bb, wb) {
      return `${Mb.p}${bb}${encodeURIComponent(wb)}.png`
    }

    function Ib(bb) {
      var wb;
      const Mb = "static/items/ebe659c2e2d3ef4e/";
      return (0, eb.d)(bb) ? null !== (wb = function(bb) {
        return lb(bb, Vb.d.ITEM)
      }(bb)) && void 0 !== wb ? wb : Lb(Mb, bb) : null
    }

    function Ob(bb) {
      try {
        return Mb(42867)(`./${bb}.png`)
      } catch {
        return null
      }
    }

    function Ub() {
      return Mb(43419)
    }

    function tb(bb) {
      var wb;
      const Mb = "static/blocks/b5f33a3f7a665ddf/";
      return bb.includes("[") ? null : null !== (wb = function(bb) {
        return lb(bb, Vb.d.BLOCK)
      }(bb)) && void 0 !== wb ? wb : Lb(Mb, bb)
    }

    function Cb(bb) {
      try {
        return Mb(43425)(`./${bb}.png`)
      } catch {
        return null
      }
    }
  },
  42867: (bb, wb, Mb) => {
    var eb = {
      "./Air Walk.png": 42873,
      "./Antlers Bonus.png": 42878,
      "./Arrow Damage Enchantment.png": 42886,
      "./Arrow Speed Enchantment.png": 42894,
      "./Attack Speed Enchantment.png": 42898,
      "./Blindness.png": 42907,
      "./Boating.png": 42912,
      "./Bounciness.png": 42919,
      "./Brain Rot.png": 42922,
      "./Break Speed Enchantment.png": 42924,
      "./Bunny Hop.png": 42932,
      "./Critical Damage Enchantment.png": 42941,
      "./Cross.png": 42945,
      "./Damage Enchantment.png": 42949,
      "./Damage Reduction.png": 42956,
      "./Damage.png": 42961,
      "./Digging Aura Enchantment.png": 42969,
      "./Dotted Friendship.png": 42978,
      "./Double Jump.png": 42982,
      "./Double Poop.png": 42987,
      "./Draugr Knight Head.png": 42991,
      "./Draugr Warper Head.png": 42998,
      "./Empty Hunger.png": 43004,
      "./FallDamage.png": 43012,
      "./Farming Aura Enchantment.png": 43019,
      "./Farming Yield Enchantment.png": 43027,
      "./Feather Falling.png": 43034,
      "./Feed Aura.png": 43038,
      "./Firecracker Boost Enchantment.png": 43046,
      "./Firecracker Cooldown Enchantment.png": 43055,
      "./Fist.png": 43063,
      "./Friends.png": 43065,
      "./Friendship.png": 43071,
      "./Frozen.png": 43076,
      "./Gliding Speed Enchantment.png": 43080,
      "./Gliding.png": 43084,
      "./Glowing.png": 43090,
      "./Haste.png": 43098,
      "./Healing Pulse.png": 43101,
      "./Health Enchantment.png": 43105,
      "./Health Regen Enchantment.png": 43111,
      "./Health Regen.png": 43115,
      "./Health.png": 43124,
      "./HealthShield.png": 43128,
      "./Heat Resistance.png": 43130,
      "./Horizontal Knockback Enchantment.png": 43135,
      "./Hunger.png": 43144,
      "./Hydrated.png": 43148,
      "./Invisible.png": 43154,
      "./Irradiated.png": 43161,
      "./Jump Boost.png": 43166,
      "./Knockback Resist Enchantment.png": 43173,
      "./Lifesteal.png": 43181,
      "./Lumber Aura Enchantment.png": 43186,
      "./Magma Golem Head.png": 43189,
      "./Max Health.png": 43193,
      "./Mining Aura Enchantment.png": 43199,
      "./Mining Yield Enchantment.png": 43202,
      "./Mining Yield.png": 43208,
      "./Mob Slayer.png": 43211,
      "./Mob Yield.png": 43215,
      "./Momentum Enchantment.png": 43223,
      "./Mystery Fish.png": 43230,
      "./Night Vision.png": 43235,
      "./Obsidian Boating.png": 43238,
      "./Pack Leader.png": 43246,
      "./Pickpocketer.png": 43255,
      "./Pixelated Heart.png": 43259,
      "./Poison Claws.png": 43265,
      "./Poisoned.png": 43267,
      "./Poopy.png": 43274,
      "./Protection Enchantment.png": 43282,
      "./Question Mark.png": 43286,
      "./Quick Charge Enchantment.png": 43295,
      "./Rainbow Wool.png": 43301,
      "./Rested Aura.png": 43304,
      "./Rested Damage.png": 43311,
      "./Rested Farming Yield.png": 43313,
      "./Rested Haste.png": 43315,
      "./Rested Speed.png": 43318,
      "./Riding Speed.png": 43326,
      "./Riding.png": 43328,
      "./Self Yield.png": 43333,
      "./Slowness.png": 43340,
      "./Speed.png": 43348,
      "./Stomp Damage Enchantment.png": 43353,
      "./Thief.png": 43359,
      "./Thorns.png": 43366,
      "./Trader Black.png": 43374,
      "./Trader Blue.png": 43383,
      "./Trader Piggy.png": 43390,
      "./Vertical Knockback Enchantment.png": 43393,
      "./VoidJump.png": 43401,
      "./Wall Climbing.png": 43410,
      "./Weakness.png": 43413,
      "./X-Ray Vision.png": 43415
    };

    function Hb(bb) {
      var wb = pb(bb);
      return Mb(wb)
    }

    function pb(bb) {
      if (!Mb.o(eb, bb)) {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }
      return eb[bb]
    }
    Hb.keys = function() {
      return Object.keys(eb)
    }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 42867
  },
  43425: (bb, wb, Mb) => {
    var eb = {
      "./arrow.png": 43427,
      "./bubble.png": 43434,
      "./critical_hit.png": 43436,
      "./drift.png": 43445,
      "./effect_5.png": 43448,
      "./fishingFishSilhouette.png": 43453,
      "./generic_2.png": 43462,
      "./glint.png": 43465,
      "./heart.png": 43473,
      "./scary_face.png": 43482,
      "./snowflake.png": 43485,
      "./soul_0.png": 43494,
      "./square_particle.png": 43500,
      "./z-particle.png": 43504
    };

    function Hb(bb) {
      var wb = pb(bb);
      return Mb(wb)
    }

    function pb(bb) {
      if (!Mb.o(eb, bb)) {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }
      return eb[bb]
    }
    Hb.keys = function() {
      return Object.keys(eb)
    }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 43425
  },
  42873: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  42878: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  42886: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  42894: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  42898: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  42907: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  42912: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  42919: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  42922: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  42924: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  42932: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  42941: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  42945: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  42949: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  42956: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  42961: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  42969: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  42978: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  42982: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  42987: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  42991: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  42998: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  43004: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  43012: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  43019: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  43027: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  43034: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  43038: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  43046: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  43055: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  43063: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  43065: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  43071: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  43076: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  43080: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  43084: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  43090: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  43098: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  43101: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  43105: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  43111: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  43115: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  43124: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  43128: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  43130: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  43135: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  43144: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  43148: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  43154: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  43161: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  43166: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  43173: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  43181: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  43186: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  43189: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  43193: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  43199: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  43202: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  43208: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  43211: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  43215: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  43223: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  43230: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  43235: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  43238: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  43246: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  43255: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  43259: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  43265: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  43267: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  43274: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  43282: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  43286: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  43295: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  43301: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  43304: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  43311: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  43313: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  43315: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  43318: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  43326: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  43328: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  43333: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  43340: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  43348: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  43353: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  43359: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  43366: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  43374: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  43383: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  43390: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  43393: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  43401: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  43410: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  43413: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  43415: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  43427: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  43434: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  43436: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  43445: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  43448: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  43453: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  43462: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  43465: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  43473: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  43482: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  43485: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/snowflake.6d4bc536d69f3cda392a.png"
  },
  43494: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  43500: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  43504: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  43419: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);