export const id = 51;
export const ids = [51];
export const modules = {
  40595: (cB, Bc, nc) => {
    var Vc = {
      "./Air Walk.png": 40600,
      "./Antlers Bonus.png": 40605,
      "./Arrow Damage Enchantment.png": 40613,
      "./Arrow Speed Enchantment.png": 40615,
      "./Attack Speed Enchantment.png": 40620,
      "./Blindness.png": 40629,
      "./Boating.png": 40633,
      "./Bounciness.png": 40639,
      "./Brain Rot.png": 40642,
      "./Break Speed Enchantment.png": 40644,
      "./Bunny Hop.png": 40646,
      "./Critical Damage Enchantment.png": 40648,
      "./Cross.png": 40656,
      "./Damage Enchantment.png": 40658,
      "./Damage Reduction.png": 40664,
      "./Damage.png": 40673,
      "./Digging Aura Enchantment.png": 40679,
      "./Dotted Friendship.png": 40683,
      "./Double Jump.png": 40689,
      "./Double Poop.png": 40696,
      "./Draugr Knight Head.png": 40700,
      "./Draugr Warper Head.png": 40702,
      "./Empty Hunger.png": 40704,
      "./FallDamage.png": 40710,
      "./Farming Aura Enchantment.png": 40713,
      "./Farming Yield Enchantment.png": 40718,
      "./Feather Falling.png": 40721,
      "./Feed Aura.png": 40725,
      "./Firecracker Boost Enchantment.png": 40730,
      "./Firecracker Cooldown Enchantment.png": 40737,
      "./Fist.png": 40740,
      "./Friends.png": 40748,
      "./Friendship.png": 40751,
      "./Frozen.png": 40759,
      "./Gliding Speed Enchantment.png": 40762,
      "./Gliding.png": 40770,
      "./Glowing.png": 40772,
      "./Haste.png": 40778,
      "./Healing Pulse.png": 40784,
      "./Health Enchantment.png": 40790,
      "./Health Regen Enchantment.png": 40799,
      "./Health Regen.png": 40806,
      "./Health.png": 40808,
      "./HealthShield.png": 40810,
      "./Heat Resistance.png": 40814,
      "./Horizontal Knockback Enchantment.png": 40816,
      "./Hunger.png": 40818,
      "./Hydrated.png": 40826,
      "./Invisible.png": 40831,
      "./Irradiated.png": 40833,
      "./Jump Boost.png": 40835,
      "./Knockback Resist Enchantment.png": 40842,
      "./Lifesteal.png": 40844,
      "./Lumber Aura Enchantment.png": 40850,
      "./Magma Golem Head.png": 40853,
      "./Max Health.png": 40855,
      "./Mining Aura Enchantment.png": 40860,
      "./Mining Yield Enchantment.png": 40862,
      "./Mining Yield.png": 40868,
      "./Mob Slayer.png": 40876,
      "./Mob Yield.png": 40885,
      "./Momentum Enchantment.png": 40891,
      "./Mystery Fish.png": 40900,
      "./Night Vision.png": 40909,
      "./Obsidian Boating.png": 40911,
      "./Pack Leader.png": 40918,
      "./Pickpocketer.png": 40923,
      "./Pixelated Heart.png": 40925,
      "./Poison Claws.png": 40929,
      "./Poisoned.png": 40931,
      "./Poopy.png": 40938,
      "./Protection Enchantment.png": 40943,
      "./Question Mark.png": 40945,
      "./Quick Charge Enchantment.png": 40947,
      "./Rainbow Wool.png": 40952,
      "./Rested Aura.png": 40956,
      "./Rested Damage.png": 40958,
      "./Rested Farming Yield.png": 40965,
      "./Rested Haste.png": 40970,
      "./Rested Speed.png": 40979,
      "./Riding Speed.png": 40986,
      "./Riding.png": 40993,
      "./Self Yield.png": 40996,
      "./Slowness.png": 40999,
      "./Speed.png": 41005,
      "./Stomp Damage Enchantment.png": 41008,
      "./Thief.png": 41010,
      "./Thorns.png": 41014,
      "./Trader Black.png": 41022,
      "./Trader Blue.png": 41030,
      "./Trader Piggy.png": 41035,
      "./Vertical Knockback Enchantment.png": 41037,
      "./VoidJump.png": 41043,
      "./Wall Climbing.png": 41052,
      "./Weakness.png": 41057,
      "./X-Ray Vision.png": 41063
    };

    function Ic(cB) {
      var Bc = rB(cB);
      return nc(Bc)
    }

    function rB(cB) {
      if (!nc.o(Vc, cB)) {
        var Bc = new Error("Cannot find module '" + cB + "'");
        throw Bc.code = "MODULE_NOT_FOUND", Bc
      }
      return Vc[cB]
    }
    Ic.keys = function() {
      return Object.keys(Vc)
    }, Ic.resolve = rB, cB.exports = Ic, Ic.id = 40595
  },
  41071: (cB, Bc, nc) => {
    var Vc = {
      "./arrow.png": 41074,
      "./bubble.png": 41080,
      "./critical_hit.png": 41083,
      "./drift.png": 41087,
      "./effect_5.png": 41096,
      "./fishingFishSilhouette.png": 41098,
      "./generic_2.png": 41107,
      "./glint.png": 41113,
      "./heart.png": 41119,
      "./scary_face.png": 41123,
      "./soul_0.png": 41130,
      "./square_particle.png": 41137,
      "./z-particle.png": 41140
    };

    function Ic(cB) {
      var Bc = rB(cB);
      return nc(Bc)
    }

    function rB(cB) {
      if (!nc.o(Vc, cB)) {
        var Bc = new Error("Cannot find module '" + cB + "'");
        throw Bc.code = "MODULE_NOT_FOUND", Bc
      }
      return Vc[cB]
    }
    Ic.keys = function() {
      return Object.keys(Vc)
    }, Ic.resolve = rB, cB.exports = Ic, Ic.id = 41071
  },
  40586: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      blockTextureUrl: () => mB,
      ingameIconUrl: () => Tc,
      itemSpriteUrl: () => Oc,
      loadBundledTextures: () => Mc,
      notFoundUrl: () => fc,
      particleUrl: () => ec
    });
    var Vc = nc(38765),
      Ic = nc(1579),
      rB = nc(2345);
    let uc = null,
      sc = null;

    function Mc() {
      sc ??= Promise.all([nc.e(60), nc.e(181), nc.e(83)]).then((() => nc(8227))).then((cB => {
        uc = cB, (0, Ic.c)()
      }), (cB => {
        console.warn("[bloxd-wasm-client] the default texture pack did not load, so item icons load file by file", cB)
      }))
    }

    function Pc(cB, Bc) {
      if (null === uc) return null;
      try {
        return uc.getDefaultTexture(cB, Bc).url
      } catch {
        return null
      }
    }

    function qB(cB, Bc) {
      return `${nc.p}${cB}${encodeURIComponent(Bc)}.png`
    }

    function Oc(cB) {
      var Bc;
      const nc = "static/items/f8c148434246a2c1/";
      return (0, Vc.e)(cB) ? null !== (Bc = function(cB) {
        return Pc(cB, rB.g.ITEM)
      }(cB)) && void 0 !== Bc ? Bc : qB(nc, cB) : null
    }

    function Tc(cB) {
      try {
        return nc(40595)(`./${cB}.png`)
      } catch {
        return null
      }
    }

    function fc() {
      return nc(41069)
    }

    function mB(cB) {
      var Bc;
      const nc = "static/blocks/7a8698da99f6d2c7/";
      return cB.includes("[") ? null : null !== (Bc = function(cB) {
        return Pc(cB, rB.g.BLOCK)
      }(cB)) && void 0 !== Bc ? Bc : qB(nc, cB)
    }

    function ec(cB) {
      try {
        return nc(41071)(`./${cB}.png`)
      } catch {
        return null
      }
    }
  },
  40600: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Air Walk.550feb574b0c57b1066d.png"
  },
  40605: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Antlers Bonus.d20354fe227ace54a650.png"
  },
  40613: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Arrow Damage Enchantment.60d80fa6d2105c83ecf9.png"
  },
  40615: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Arrow Speed Enchantment.92f45068bd17d5c115fa.png"
  },
  40620: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Attack Speed Enchantment.4516cbbd641b12538dd6.png"
  },
  40629: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Blindness.edd267f2a314651c7a3a.png"
  },
  40633: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Boating.239280fa7d4f9d416cc1.png"
  },
  40639: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Bounciness.5ed861e592682c9790c3.png"
  },
  40642: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Brain Rot.e808bf985c93f347827b.png"
  },
  40644: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Break Speed Enchantment.0be5f4506d0e55985ff7.png"
  },
  40646: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Bunny Hop.53fd14a37006962c7a02.png"
  },
  40648: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Critical Damage Enchantment.f4959f22b41d48786b52.png"
  },
  40656: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Cross.895f1f5171aa98ed7656.png"
  },
  40658: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Damage Enchantment.a997683423a180ae8dc5.png"
  },
  40664: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Damage Reduction.fdbbf84ca4b04f307011.png"
  },
  40673: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Damage.5edf768f57c9823c01b7.png"
  },
  40679: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Digging Aura Enchantment.f2c32b1eea67ca29484a.png"
  },
  40683: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Dotted Friendship.70a85d66cd72a860aa11.png"
  },
  40689: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Double Jump.76e9fdd557728ed63fd9.png"
  },
  40696: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Double Poop.258b70e2a2b25de790aa.png"
  },
  40700: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Draugr Knight Head.2641191943e1366ee4e5.png"
  },
  40702: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Draugr Warper Head.1752981f98e52c3d6575.png"
  },
  40704: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Empty Hunger.6214e340b2dcc2477290.png"
  },
  40710: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/FallDamage.955f91b22d5d0bb98f74.png"
  },
  40713: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Farming Aura Enchantment.ff9393e619e7aff7be5d.png"
  },
  40718: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Farming Yield Enchantment.6e5498b2f625c337751a.png"
  },
  40721: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Feather Falling.f111d0dd95648157d19c.png"
  },
  40725: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Feed Aura.b1729965a912206f1c9c.png"
  },
  40730: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Firecracker Boost Enchantment.1b191a71953b48f5278c.png"
  },
  40737: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Firecracker Cooldown Enchantment.d6783c7e4b6d6e854ae9.png"
  },
  40740: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Fist.3f0a4cf0dd50a037aa44.png"
  },
  40748: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Friends.200ac187e210aa5b0bd1.png"
  },
  40751: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Friendship.52c43bf51d729a07c65a.png"
  },
  40759: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Frozen.83e94281a770969902d6.png"
  },
  40762: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Gliding Speed Enchantment.1e0eb8fe31980d26b33a.png"
  },
  40770: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Gliding.4fd01858ea61b5229451.png"
  },
  40772: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Glowing.b7249a4b1bbc31a99a8c.png"
  },
  40778: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Haste.205c848b0798acf1b67b.png"
  },
  40784: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Healing Pulse.04c584a6ec7fd91c9bb1.png"
  },
  40790: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Health Enchantment.ae4eebca87d7ad0d6dfa.png"
  },
  40799: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Health Regen Enchantment.74f637edccd03a30df6a.png"
  },
  40806: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Health Regen.04c584a6ec7fd91c9bb1.png"
  },
  40808: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Health.cfa3a685af898f2c717f.png"
  },
  40810: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/HealthShield.c30608f8335b027ed219.png"
  },
  40814: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Heat Resistance.cb2e5a2b1509726c6a39.png"
  },
  40816: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Horizontal Knockback Enchantment.cc7b6bf291e3785cd1ed.png"
  },
  40818: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Hunger.4cafabb66831618423a1.png"
  },
  40826: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Hydrated.3d7c4351a4ce829a6a4f.png"
  },
  40831: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Invisible.5ac436c34320f5cdf3c9.png"
  },
  40833: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Irradiated.730dcc3697877f63d0a3.png"
  },
  40835: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Jump Boost.cf4fa5b773fadddbd26f.png"
  },
  40842: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Knockback Resist Enchantment.ccb0ea3ed38c02c191f3.png"
  },
  40844: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Lifesteal.f4fd17f147ddc53867c1.png"
  },
  40850: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Lumber Aura Enchantment.6f7a9a2c2777625f6928.png"
  },
  40853: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Magma Golem Head.1734c2842e8cd4c6ee67.png"
  },
  40855: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Max Health.ea03a9596b884a00e4bd.png"
  },
  40860: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Mining Aura Enchantment.bedc28cf636e6a310953.png"
  },
  40862: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Mining Yield Enchantment.bb1a5afdce1ff7e6651a.png"
  },
  40868: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Mining Yield.bb1a5afdce1ff7e6651a.png"
  },
  40876: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Mob Slayer.18771a2f81150e240788.png"
  },
  40885: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Mob Yield.09a9dd5f676e7da4dc89.png"
  },
  40891: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Momentum Enchantment.31e6209b4886925f5037.png"
  },
  40900: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Mystery Fish.94e499ddfeed1d82b470.png"
  },
  40909: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Night Vision.87d04612426328963c01.png"
  },
  40911: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Obsidian Boating.1eaf502e4a8bd95edb7c.png"
  },
  40918: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Pack Leader.cf0973d1d9a032cafca3.png"
  },
  40923: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Pickpocketer.33ad49b78ba0f52e6863.png"
  },
  40925: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Pixelated Heart.f8050bc55b1a60ff519e.png"
  },
  40929: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Poison Claws.5bcab630c82c57276c74.png"
  },
  40931: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Poisoned.99dd6b76273278f4f61e.png"
  },
  40938: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Poopy.4110620c7b5fcbeb321c.png"
  },
  40943: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Protection Enchantment.8fe12f5d7c6926a6a2df.png"
  },
  40945: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Question Mark.029fa6a29c3200287f61.png"
  },
  40947: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Quick Charge Enchantment.95a9a0260b2c8e5817df.png"
  },
  40952: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Rainbow Wool.d428fbfaaa4e4bc5270a.png"
  },
  40956: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Rested Aura.be920aee50ba66b6f61b.png"
  },
  40958: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Rested Damage.44a0d79b8f277cd5be20.png"
  },
  40965: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Rested Farming Yield.2d375b3c962829564e88.png"
  },
  40970: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Rested Haste.3e768908f57bbf567993.png"
  },
  40979: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Rested Speed.98ae08f7e365812506b0.png"
  },
  40986: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Riding Speed.00fca2421d140ff4146e.png"
  },
  40993: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Riding.4e1c3c296ffec6cda94f.png"
  },
  40996: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Self Yield.edb63094d10ccfd450a2.png"
  },
  40999: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Slowness.0d456812d4290180d6d3.png"
  },
  41005: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Speed.a6a755966a05dfbdd49b.png"
  },
  41008: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Stomp Damage Enchantment.a902b51f29b3383b6a3b.png"
  },
  41010: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Thief.c608f1b1a94e2bfe6026.png"
  },
  41014: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Thorns.95905a8c472f77dad6c9.png"
  },
  41022: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Trader Black.05eae9921339e319fe8c.png"
  },
  41030: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Trader Blue.fad0d45789e0f36926af.png"
  },
  41035: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Trader Piggy.d2b90ae063e91d2f7649.png"
  },
  41037: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Vertical Knockback Enchantment.a2c31475d0871a616460.png"
  },
  41043: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/VoidJump.f8c253294acf34dd1a82.png"
  },
  41052: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Wall Climbing.6729badd0cee7f131293.png"
  },
  41057: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Weakness.234bdb740d34da3f932f.png"
  },
  41063: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/X-Ray Vision.4b90a144f53e8d21c74a.png"
  },
  41074: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/arrow.ffce0168131507e37783.png"
  },
  41080: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bubble.a0edea14e8be26e3947a.png"
  },
  41083: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/critical_hit.f394a2f1eaca8443c07b.png"
  },
  41087: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/drift.400e35d1039dd77946d5.png"
  },
  41096: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/effect_5.6b1b1cd3befeee44b56b.png"
  },
  41098: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/fishingFishSilhouette.3664653c612c6ec59331.png"
  },
  41107: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/generic_2.af3899f6d4599c1123b1.png"
  },
  41113: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/glint.2bf5fd952ada4f09d258.png"
  },
  41119: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/heart.8bcd1acb52c8b040b6d7.png"
  },
  41123: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/scary_face.da8edc3f0050e2ac9f24.png"
  },
  41130: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/soul_0.e9e43a364bd6cafde7a8.png"
  },
  41137: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/square_particle.a87e53ddb61836a91c95.png"
  },
  41140: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/z-particle.97556df0d813e0f3b5de.png"
  },
  41069: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/textureNotFound.029fa6a29c3200287f61.png"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);