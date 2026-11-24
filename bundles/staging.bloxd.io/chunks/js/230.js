export const id = 230;
export const ids = [230];
export const modules = {
  38690: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => yp
    });
    var Op = cp(195),
      op = cp(37861);
    const Ip = 1.2,
      Sp = {
        poseRig: "golem",
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 2.2,
          height: 2.8
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        Gx: .5,
        bip: !1
      },
      xp = {
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 1.8,
          height: 2.6
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        Gx: .5,
        bip: !1
      },
      Lp = {
        physicsBodyDimensions: {
          width: Op.g.Kw,
          height: Op.g.Vw
        },
        hitBoxDimensions: {
          width: Op.g.Kw + .4,
          height: Op.g.Vw + .6
        },
        eyeHeight: Op.g.Vw * Op.g.playerEyeToHeightRatio,
        rideHeight: Op.g.Vw - .3,
        Gx: .5,
        bip: !1
      },
      Yp = {
        physicsBodyDimensions: {
          width: .5,
          height: .95
        },
        hitBoxDimensions: {
          width: 1.6,
          height: 1.1
        },
        eyeHeight: .9,
        rideHeight: .5,
        Gx: .5,
        bip: !1
      },
      Dp = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.8
        },
        hitBoxDimensions: {
          width: 1.7,
          height: 1.9
        },
        eyeHeight: 1.3,
        rideHeight: 1.3,
        Gx: .5,
        bip: !1
      },
      Ap = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.1
        },
        eyeHeight: 1.9,
        rideHeight: 1,
        Gx: .5,
        bip: !1
      },
      Pp = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.4
        },
        eyeHeight: 2,
        rideHeight: 1.8,
        Gx: .5,
        bip: !1
      },
      Wp = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Op.g.Kw,
            height: Op.g.Vw
          },
          hitBoxDimensions: {
            width: Op.g.Kw + .4,
            height: Op.g.Vw + .6
          },
          eyeHeight: Op.g.Vw * Op.g.playerEyeToHeightRatio,
          rideHeight: Op.g.Vw - .1,
          Gx: op.f.Gx,
          bip: !0
        },
        Pig: {
          poseNameRise: {
            sitting: 1.4
          },
          physicsBodyDimensions: {
            width: .5,
            height: .8
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.2
          },
          eyeHeight: .8,
          rideHeight: .5,
          Gx: .5,
          bip: !1
        },
        Cow: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: 1.2,
          rideHeight: 1,
          Gx: .5,
          bip: !1
        },
        Sheep: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.3
          },
          eyeHeight: 1.2,
          rideHeight: .8,
          Gx: .5,
          bip: !1
        },
        Horse: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: .9,
          Gx: .5,
          bip: !1
        },
        Camel: {
          modelScale: Ip,
          physicsBodyDimensions: {
            width: .6,
            height: 2.52
          },
          hitBoxDimensions: {
            width: 1.92,
            height: 2.76
          },
          eyeHeight: 2.52,
          rideHeight: 1.7999999999999998,
          Gx: .5,
          bip: !1
        },
        Slime: {
          physicsBodyDimensions: {
            width: .6,
            height: .8
          },
          hitBoxDimensions: {
            width: 1,
            height: .9
          },
          eyeHeight: .5,
          rideHeight: .5,
          Gx: .5,
          bip: !1
        },
        "Cave Golem": Sp,
        "Draugr Zombie": {
          ...Lp,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Lp,
        "Frost Golem": Sp,
        "Frost Zombie": {
          ...Lp,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Lp,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Op.g.Kw,
            height: Op.g.Vw
          },
          hitBoxDimensions: {
            width: Op.g.Kw + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Gx: .5,
          bip: !1
        },
        Wolf: Yp,
        Bear: Dp,
        Deer: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.8,
          rideHeight: .8,
          Gx: .5,
          bip: !1
        },
        Stag: Ap,
        "Gold Watermelon Stag": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: 1,
          Gx: .5,
          bip: !1
        },
        Gorilla: Pp,
        Wildcat: {
          physicsBodyDimensions: {
            width: .5,
            height: .7
          },
          hitBoxDimensions: {
            width: 1.5,
            height: .7
          },
          eyeHeight: .55,
          rideHeight: .4,
          Gx: .5,
          bip: !1
        },
        "Draugr Huntress": Lp,
        "Magma Golem": Sp,
        "Spirit Golem": Sp,
        "Spirit Wolf": Yp,
        "Spirit Bear": Dp,
        "Spirit Stag": Ap,
        "Spirit Gorilla": Pp,
        "Draugr Warper": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: .6,
            height: 3
          },
          eyeHeight: 2.4,
          rideHeight: 2.8,
          Gx: .5,
          bip: !1
        },
        "Frost Wraith": {
          poseRig: "wraith",
          physicsBodyDimensions: {
            width: .5,
            height: 2.7
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.8
          },
          eyeHeight: 2.3,
          rideHeight: 2.6,
          Gx: .5,
          bip: !1
        },
        "Draugr Reaver": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.7
          },
          eyeHeight: 2.2,
          rideHeight: 2.5,
          Gx: .5,
          bip: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Op.g.Kw,
            height: Op.g.Vw
          },
          hitBoxDimensions: {
            width: Op.g.Kw + .4,
            height: Op.g.Vw + .6
          },
          eyeHeight: Op.g.Vw * Op.g.playerEyeToHeightRatio,
          rideHeight: Op.g.Vw - .1,
          Gx: .5,
          bip: !1
        },
        67: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 3,
            height: 2.5
          },
          eyeHeight: 1.9,
          rideHeight: 2.5,
          Gx: .5,
          bip: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Op.g.Kw,
            height: Op.g.Vw
          },
          hitBoxDimensions: {
            width: Op.g.Kw + .4,
            height: Op.g.Vw + .6
          },
          eyeHeight: Op.g.Vw * Op.g.playerEyeToHeightRatio,
          rideHeight: Op.g.Vw - .1,
          Gx: .5,
          bip: !1
        },
        "Capitano Explovissimo": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.8
          },
          hitBoxDimensions: {
            width: .5,
            height: 2.5
          },
          eyeHeight: 1.5,
          rideHeight: 2,
          Gx: .5,
          bip: !1
        },
        "Desert Fennec": {
          physicsBodyDimensions: {
            width: .4,
            height: .8
          },
          hitBoxDimensions: {
            width: .8,
            height: .8
          },
          eyeHeight: .65,
          rideHeight: .6,
          Gx: .5,
          bip: !1
        },
        "Armour Collector": {
          physicsBodyDimensions: {
            width: 1,
            height: 3.5
          },
          hitBoxDimensions: {
            width: 2,
            height: 3.7
          },
          eyeHeight: 3.1,
          rideHeight: 3.6,
          Gx: .5,
          bip: !1
        },
        "Furnace Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.5
          },
          eyeHeight: 2,
          rideHeight: 2.45,
          Gx: .5,
          bip: !1
        },
        "Lil Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.55
          },
          eyeHeight: 2,
          rideHeight: 2.5,
          Gx: .5,
          bip: !1
        },
        "Glass Gremlin": {
          physicsBodyDimensions: {
            width: .6,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 1,
            height: 2.6
          },
          eyeHeight: 2.2,
          rideHeight: 2.55,
          Gx: .5,
          bip: !1
        },
        "Glass Bro": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.1
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.2
          },
          eyeHeight: 1.8,
          rideHeight: 2.1,
          Gx: .5,
          bip: !1
        },
        "Lord Vulcan": {
          physicsBodyDimensions: {
            width: 1.2,
            height: 5.4
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 5.4
          },
          eyeHeight: 4.1,
          rideHeight: 5.4,
          Gx: .5,
          bip: !1
        },
        Zombie: {
          ...Lp,
          defaultPose: "zombie"
        },
        Skeleton: Lp,
        Mummy: {
          ...Lp,
          defaultPose: "zombie"
        },
        Scorpion: {
          physicsBodyDimensions: {
            width: 1,
            height: .9
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: .6,
          rideHeight: .9,
          Gx: .5,
          bip: !1
        },
        Vulcanite: {
          physicsBodyDimensions: {
            width: .8,
            height: 2
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.1
          },
          eyeHeight: 1.6,
          rideHeight: 2.1,
          Gx: .5,
          bip: !1
        },
        "Evil Tome": {
          physicsBodyDimensions: {
            width: .6,
            height: .9
          },
          hitBoxDimensions: {
            width: .9,
            height: .95
          },
          eyeHeight: .6,
          rideHeight: .95,
          Gx: .5,
          bip: !1
        },
        "Magma Toad": {
          physicsBodyDimensions: {
            width: 1,
            height: 1
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.15
          },
          eyeHeight: 1,
          rideHeight: 1.1,
          Gx: .5,
          bip: !1
        },
        Stalker: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.9
          },
          eyeHeight: 2.4,
          rideHeight: 2.5,
          Gx: .5,
          bip: !1
        },
        Crone: {
          turnRate: 1.2,
          physicsBodyDimensions: {
            width: .6,
            height: 2.9
          },
          hitBoxDimensions: {
            width: .7,
            height: 3.2
          },
          eyeHeight: 2.7,
          rideHeight: 2.8,
          Gx: .5,
          bip: !1
        },
        "Iron Guardian": xp,
        "Gold Guardian": xp,
        "Diamond Guardian": xp,
        "Moonstone Guardian": xp,
        "Iron Goofy Golem": xp,
        "Gold Goofy Golem": xp,
        "Diamond Goofy Golem": xp,
        "Moonstone Goofy Golem": xp,
        "Tiki Terror": {
          poseRig: "tiki",
          physicsBodyDimensions: {
            width: 1,
            height: 4.3
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 4.5
          },
          eyeHeight: 3.9,
          rideHeight: 4.3,
          Gx: .5,
          bip: !1
        }
      };

    function yp(pp) {
      return Wp[pp]
    }
  },
  37286: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    const Op = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  },
  37868: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp
    });
    var Op = cp(343),
      op = cp.n(Op),
      Ip = cp(1927);
    let Sp;
    var xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up;
    const wp = ["b", 0, 1, 8, "c", 101, 171, "g", 21, "f", 4, 255, "length", 104, 64, "e", "undefined", void 0, 42, 2, "a", 63, 6, "fromCodePoint", 7, 12, "push", 201, 3, 118, 91, 8191, 88, 13, 14, 5, 174, 43, 44, !1, !0, "h", "i", "d", 127, 124, 128, 136, 137, 138, null, 132, 133, 134, 135, 139, 140, 141, 129, 130, 131, 147, 148, 144, 202, 103, 10, "fp", 234, 117, 169, 38, 114, 160, 149, 122, 9, 59, 246, 33554432, 67108864, 107, 71, 54, 150, 244, 154, 197, "on"];

    function vp(...pp) {
      return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(...pp) {
        for (Cp(pp[wp[12]] = wp[2], pp[-wp[5]] = '_}waFeY!JM(@f%R~y/X56mEt9K8dx,N)lBrj+hZ&s^D[{v7;#z.A*4|LIucWQ3Onob2=>:`0"?TGVqPHp]ig1$<USCk', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[-wp[8]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = -wp[2]), pp[wp[3]] = wp[1]; pp[wp[3]] < pp[wp[4]]; pp[wp[3]]++)
          if (pp[-wp[6]] = pp[-wp[5]].indexOf(pp[wp[0]][pp[wp[3]]]), pp[-wp[6]] !== -wp[2])
            if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[-wp[6]];
            else {
              Cp(pp[wp[7]] += pp[-wp[6]] * wp[30], pp[-wp[8]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
              do {
                Cp(pp[wp[10]].push(pp[-wp[8]] & wp[11]), pp[-wp[8]] >>= wp[3], pp[wp[9]] -= wp[3])
              } while (pp[wp[9]] > wp[24]);
              pp[wp[7]] = -wp[2]
            } return pp[wp[7]] > -wp[2] && pp[wp[10]].push((pp[-wp[8]] | pp[wp[7]] << pp[wp[9]]) & wp[11]), tp(pp[wp[10]])
      }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
    }

    function tp(...pp) {
      return pp[wp[12]] = wp[2], typeof Dp !== wp[16] && Dp ? (new Dp).decode(new Ap(pp[wp[1]])) : typeof Pp !== wp[16] && Pp ? Pp.from(pp[wp[1]]).toString("utf-8") : Up(pp[wp[1]])
    }

    function Hp() {}
    Cp(xp = {}, Lp = ["zu|xY:Rc{O(h9WprC&n**h);BXMMb#W//MWJS.d;V4[#Zzf", "30n|bQA}kW?Ku#F[3xU*d", "Fz;*vIg^z|>Q*~Ctj>Sz$./5%WW*d.=KAAS|!L/5d60`?9D)_~UF", "Br|F~+[5,R_Gg;_N*Y(A/+h;s6Lp}", "M0MAMQHAX~YcuF", "u0~V4iG!}|IRe+H8HhyB{`b:]M*:f#ot`ONz)$_", "?OtY0:>XKRv9(e(6XhH?(#_", '*r_M9WP94ou@/"v&_|<xSu7fm|TEX3.rlr["j3roVJj', "d7(,si_<lX/OW`e9wXY*B$4}UoSfwKf", "$)t??Qm,nnb`p;e[7)?Y27DNScqJ}", "lQhT9Z):OJ|:{ya/PvNMJ+wcVW%bnZsZ{O,(9ZX`i|v?[wZ)?WV4_L>7{mZ", "{f4!kWUu+us9AZY", "cbl?5P@%PWx*%y<j(h`*f.p72nF>Q+O/zAyB6sG!:5f3#aJhBs~MzGVYF", "HW<){pscHJ?`!a=9MF2J:T.w*u#pM]=/>ra", "[uBAWA^;K6Z:YZa/h0cl8?irGW~h<K7&zvwe]g?Gw|;LhFWDq@l|B*e!hoL", "d,n?q+ss!c8bURUsQ#HVq:j:zMV72:@K.b5,fL*w", 'yh3L>r9w{@b@~Z4d6TOV9s$}{m>j4"hK3rrAJHN9aowrtwZK_,YLF+_', "lr:0pVd]kR&!l;c^bY9Px", '{)CA8|%n0%7!b+N9Ba/d+$"c724:n`ahS?L*|`);?b<71;m^KbGJ', 'K85"$*p<%Wi7V~w/"Aa', "}QdlHg.sPWsp5gDK|MlNX", "W|bJU;9T?bFrnR*r?#$!c7e^A|Rrd.R", "h~I|[hY*=f*23FY", "&bm)js#pY(", "gv$*~Z>Xq@&!uFR&D8HMN;_", "7b;?T:~;pM&O(e]dt>a", 'I0XlWrWtzQzz<:h5l~pzpZ#oq@o?s"}+Ls%TlWxf!', "Vr:!1:e%{I`lzQC^8tyP#zt4pM0`;dcxDu<FM#_", '.A:(L4T9U6MazQjN$&{T="rwAo2nY]>NC#@T1gu})2wGRR!', "@hwdnrcsMORi#~1r/0wGU0#*~~)Wy;wN5|j(qTRw", "l>YL/L89zf7OO%Ed800|34/}+5gKhFEsTt1,w+qA5Q!%}", "ga>eQcq^Bn&*h#/dGbc4$:3^f/$,<z~&|s8l$$pfX5", "N|^|.`pf{IcpMe?Xn|ZM(:lw", "@F:8:Q^u{JFysaq5|b,Lvp_D%Xd6Zhr9.s&xsnE*Qb|2D%KxqRE)|i_", "T)bYYrfXM/zRtR3jfXf(8?V<;~>2q99DObKY0:_", 'eTJ|"#aK5uyhKyZ9*_', 'MTHVYLNf4cg,dZND+|8")P?nBn+)q+M', "vO}Grp@%HI4Ku9x+mu+(c`pcBu^::%N+/}", "1DlYw7~!*oKONez8i_", 'b/e)/uswi~(h[`Z91?NVt.`N7IdHQFO9)r`xg0j;KO"7=`eh$WxqOqHAJ/$T_', 'p?,)"./jqI(tnRv58rf(e+YN7X6Ld8;&DOTeHv6+fm,!z"z&', "Yz~BOr<T?/6Y4F:ZS6ZFoQ0^F", "|a_N^33nQJ*WeyCr%~SM", "$a7!m*3,|%~c_0mdzaN)~L^}.~|?3FNtbO}", "(74TdZ@:W@A9Xe5r_MlY:+_c,OIIzFPd5A/lm", '0D%!H0:^v40@la;8Iv^NUv`f%m^p)0*xMu*TQrxJ;fH~}"!X=O4)]Lyo&%8', 'Q#BN2OL!>%$.tZl+mTr"U;]jQW1Qu+kDHRVTk|W}u6L', "Rh`L;iA5b|L`%e", "JtQ(#cN*cb~HnRO+])!M[G(NRX", "{tp|HZ_", 'HA~*ZpM^@Ol)^"~8SOBYCB_', "^OsA8Z=^kW+:K3mdNhLzQqe}", "s>XlN3A}GI:nR3gdsa~B%T_", "%slM73[ua|z)#d!)PKUx[G_Nv@Tj9W;d9>;V:TnA7mPF:#,tZ|a", "6Tdq?V.**MuquyahCa$.,WEw", "UWEBAncTvm/GV~%", "S#RV[`^${J", "PbF.6*,,!", "5ATqP.$/#mEb,F#rfsFemV_", "l7/GzIv!r~4XUwJhfuFey]/5&o]E~wD5tsEVj33nd/9H]#2/^>}", 'P>`!.`cwW6CqIdQ,Cr)M);e4Ucj"J&x+48q)P#:t]|^jDz)D8|w', "<DkJrP/^3X$+oWM", "hulGw#5%h%[R{a|xh[9|LAlX15rr/y)h5TY!7zJc=5uV5Z&XFQldO1z;^/UE}", ',60x_"C:guH`iw5x*twlD?C}vXFY+;W^XA_Pb1H$gM1n]9#8d}', '"A7V$VV*Ycq+<:h5#YiJzIDcB~Lx[i!XTAV)+j}nsc;zO%UELR"|:+I7e', "!tY!dj~%[6BRYeVKY>cqd", "oAtVV:W}oMP4)ia/pK9NIHq:[WD", "xMW,!T/]?bM3PK%ZKt/Y7cOf%X%>ZR_td7WT)?_", 'Bt>.@.<rpuqnq"AdZ#)M', "H/&MMuQ9YoI!BF", "I#`L<vW^inEiq+Ijd7+,+;!:,WS=XwR", ')TExor1pw|@hv"WD*s,T^hP7"bbp`R:KmugqnQFcF', "3h#Yrje}qREc=R<jUbiAm.n,;mha!ip81K+q/", 'UaR*jW?,9%P4ncCj|>:T|7]!xWlV8RxNoWz"!+NXq4+rvF', "6n2q]+(+_2aw5w", "?Re.y*XcruzRfaI^{TNF7>h!>%^!i][Z", "|#X,w<IciMuVIFlD=v>,O73Gm5q4HR>)=_", "3RSM<v=j,XP7t.}/kRYL]+J+)n0j6W)NdQsA(<99Z%`pZZG8a,)MpTuGwQ*", "Fu;xFLsN}f", "2?E*d0PrdR*:jg4js/Gqn1IpN2n?Cp&Z_joY(#9NwQC7}", ")r`x0L0}", "$`DdAns*6|(>/#l9yfN)x0$tk@)VyWe)VA[,YQI7#mz", 'FfPF@OaG_2KLjc"83/a', "6XIYzGssTOb}=`o9^#T4jGG%q4!;p~@5Zah)[z|7kbulOKU^/MZVVgNXNm(6}", "]Rp|~]9JqWk,E3Y95uY)Z|g,7Wq~jc+NjQhLBj&!/MTKAcaK", "LsZ!KP]HM/FHhzMK>?GJ{n4t*%,:4F0X|uTqLr%;bnBm^yX6$vz|AI_", 'QOe*L`EJucU=dR3NH/j",', "_j:(CZo<3W4FAZQjj[M|8?VToQ<Tl;B9<6{,U.4!u6?p#a", 'Yzwe?u4tW/h9"g}/0OJY0T5j.f!yu#:9', "]bEVCZ_X(W?pF&f5r[?|HuY9pfjH2]8Dr~&xw<4jyfaH|Z#8.06))Wn;F", "RnNMQ&L,{Wg=UjJZF8>..A&5OW3Ii]ZKSW+!Yr7NQ/T?i`6x{O7?E:1*>oA", '66d"_");QRf"BK<dL#we', 'yQ2eb#)GR2BVp#Q+5l1,,*.X"c`~ZhE^2#G,POfX;Q.', '"DJP>#]jzM~6%1=NOWHx"+{sRmz*lgx+:Y;*`4kf4oZ', '.vB|Dpt!Y5)(UwCr/~"M.GxwNnlVx;5^zMsze4}^Wb1=re', 'S@9|_&8*d6yA~wPstu,VH+L$vWke3+c,x8m)".f9DR7VU~1sORuA%', '+t^No&*wuR(c`KY)v>{L0L^;sc)"JQHdd|F)?]f<2QF"U~Y', '^bfq<P;;6|$l~8>X"v~|7po9HQDjIgy8Yz#ApOSTA5Q', 'N>PVb"bupf.)e1<xk6^|F7irrQ0Q+dXr+uw', 'h|SAd;VfMcJY4y*dz8<0T:g^n4}P8.*x"O}GT]Zw9/1J6WW/y~w', "cspYiZRwCR", ',TPx(+gufW|Vdintx~kA=4&;(bjdyW{5K6LzEu+cgf|XQdCy"D0xsifJ)n#', "r~zAR#m!5fS~}Q|x.bT4n4xwwMP]dwID2>?l1.~KKb:}}#R", "0heTtWOY*o>IjZ})e~n?:r_", "@z2qyuiT/~]}1jm^s[*(", "Z/n?HuXw", "Ft4(xZEoF", "t7M|8?4;W6", "=AtB2#u}AfxcOz~&rfh)n7Owyu3F$F", "{A0z7zC/_Qq]VgU^qxx(!T`*VRv", "`ATJ%:W,%2^OUZs)IAkJ$VTs(/<={F%8ZArlLr7XCO^WUR,,ZazY%+^5a", "&/|LG#l*&%MtXe&X(fZ!Sg0G5u@GCQwNt}", "BQ$)Mud4qRw%]9Ls&ty|(<C^F", "@[Sz~]h%1M*2IW=/kRZF8WA}!", '[u10R+xN)Q/Oa8Ed*uEz)?TYym_Y"dr9(}', 'rTd,o+~}C6"=`KCj2>9N}L?!d6rr=cKx', 'HrNVTu$/ho&af;,tQsy|7iV7j5aY@R"5laOF', "Sr5lMO]}", "2AZ)q]6w", "1vKA6W6w", "&(r#ZKcb", "/>p4", "|^r4%,A", "/(dg", "t70>]{G", "Fy^o3t},", ")y6sNX},", "yyPo", "Fy:Lag2,", "kyDt}t?,", "@m:LAQz,", "R;<L?", "Fy:L}t?,", "@m^o)l<,", "2/=%RXF,", "l@=RRQ2,", "{_[R!LF,", "1_XtLj?,", "smLqr:7,", "S/6s~l?,", "R5Xt]LOJ", "UTTR8", "+y^o", "Py:qE", "/;SR+", 'sZI_^z",', "[]b>8", "S/_RVe3,", "R>_%+XG", "S/_R8Q),", "@m=RAt;J", "smiR.lZ,", "+5Xt]LG", "S/_R8Qv+1E", "R]}LxQ[Etd", "#C_%yqEj6", "ol1OgW=x", "cfUu", "X5@n", 'G"=k', "7!@n", "bs4p?", "x^Hk", "OTiu", "D]i%", "Ny<LQj/,", "nTh^I![u", 'J9co"Uv,', ")}{tjj},", "i>Y%", "p/b>", "1;_Rp:7,", "[qY%", ");YRgt<,", ";5bV;l3,", "!1?olj?,", "I7{D.lG", "UK*^|fhw", "M/*n", "tQvh54|l", "(3.OWcA", ":W5dT!`w", "A2*^]L1w", '1xP9"f&w', "l^yLQ+V<T&", "zpb_>LIn=b", "%xL|GojDjN", "w?GJv}__2r", "WPSB?}Vz", "n@G#A4A8|C.", "6Dp%[{nc6|R", "Ay,^uP!pZaR", "j){JSWxseKd", "i!b,WUnDH~!", "WPe0W<L+X.R", ".D_,eVLx9", '[Y`H"l1zFMt,X)pH.DPJd:ksnj2R=82', ".MNJ>6&Xr>{E;qQ?8RX,FWq@:.*E_jp", "!!B%LU2UPAt,z,Kh[RRLSWxC.TQC(l2", 'k=C_DW2UJTcO)c"h/)q%8UrQ5a:lOcf', "/)_,IV,snjME;qQ?8R/,FWq@^bxi5wb", "BD_,+1Lx!TQC{n5u/mg9)W!2u0*ie", "j/gne3k", "<|$/UEf6", "!grm[", "e_XtLj?,", ");YRiL|,"]), Cp(Yp = function(...pp) {
      Cp(pp[wp[12]] = wp[1], pp[-wp[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], pp[wp[2]] = wp[17], pp[wp[4]] = []);
      try {
        Cp(pp[wp[2]] = Object, pp[wp[4]][wp[26]]("".__proto__.constructor.name))
      } catch (Lp) {}
      pp: for (pp[-wp[13]] = wp[1]; pp[-wp[13]] < pp[-wp[14]][wp[12]]; pp[-wp[13]]++) try {
        for (pp[wp[2]] = pp[-wp[14]][pp[-wp[13]]](), pp[wp[15]] = wp[1]; pp[wp[15]] < pp[wp[4]][wp[12]]; pp[wp[15]]++)
          if (typeof pp[wp[2]][pp[wp[4]][pp[wp[15]]]] === wp[16]) continue pp;
        return pp[wp[2]]
      } catch (Lp) {}
      return pp[wp[2]] || this
    }() || {}, Dp = Yp.TextDecoder, Ap = Yp.Uint8Array, Pp = Yp.my, Wp = Yp.String || String, yp = Yp.Array || Array, Up = function() {
      var pp, ip, cp = new yp(wp[46]);
      return Cp(pp = Wp[wp[23]] || Wp.fromCharCode, ip = []),
        function(...Op) {
          for (Cp(Op[wp[12]] = wp[2], Op[wp[20]] = wp[17], Op[wp[19]] = wp[17], Op[-wp[18]] = Op[wp[1]][wp[12]], ip[wp[12]] = wp[1]), Op[wp[10]] = wp[1]; Op[wp[10]] < Op[-wp[18]];) Cp(Op[wp[19]] = Op[wp[1]][Op[wp[10]]++], Op[wp[19]] <= wp[44] ? Op[wp[20]] = Op[wp[19]] : Op[wp[19]] <= 223 ? Op[wp[20]] = (31 & Op[wp[19]]) << wp[22] | Op[wp[1]][Op[wp[10]]++] & wp[21] : Op[wp[19]] <= 239 ? Op[wp[20]] = (15 & Op[wp[19]]) << wp[25] | (Op[wp[1]][Op[wp[10]]++] & wp[21]) << wp[22] | Op[wp[1]][Op[wp[10]]++] & wp[21] : Wp[wp[23]] ? Op[wp[20]] = (Op[wp[19]] & wp[24]) << 18 | (Op[wp[1]][Op[wp[10]]++] & wp[21]) << wp[25] | (Op[wp[1]][Op[wp[10]]++] & wp[21]) << wp[22] | Op[wp[1]][Op[wp[10]]++] & wp[21] : (Op[wp[20]] = wp[21], Op[wp[10]] += wp[28]), ip[wp[26]](cp[Op[wp[20]]] || (cp[Op[wp[20]]] = pp(Op[wp[20]]))));
          return ip.join("")
        }
    }());
    const dp = op()[vp(wp[29])](),
      ep = op()[vp(wp[29])](),
      jp = op()[vp(wp[29])](),
      kp = op()[vp(wp[29])](),
      mp = op()[vp(wp[29])](),
      Rp = op()[vp(wp[29])](),
      qp = op()[vp(wp[29])](),
      Mp = (...pp) => {
        function ip(...pp) {
          return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(pp) {
            var ip, cp, Op, op, Ip, Sp, xp;
            for (Cp(ip = "" + (pp || ""), cp = ip.length, Op = [], op = wp[1], Ip = wp[1], Sp = -wp[2]), xp = wp[1]; xp < cp; xp++) {
              var Lp = 'AWbhGHuS4^g@!_8LRQvz$dweq?}/9[%l#Vcn)&tY=1B(o+`Z7JMrCEP]2jUI6:DO|sNXK<~,5T>x{Fy."0ipkmfa3*;'.indexOf(ip[xp]);
              if (Lp !== -wp[2])
                if (Sp < wp[1]) Sp = Lp;
                else {
                  Cp(Sp += Lp * wp[30], op |= Sp << Ip, Ip += (Sp & wp[31]) > wp[32] ? wp[33] : wp[34]);
                  do {
                    Cp(Op.push(op & wp[11]), op >>= wp[3], Ip -= wp[3])
                  } while (Ip > wp[24]);
                  Sp = -wp[2]
                }
            }
            return Sp > -wp[2] && Op.push((op | Sp << Ip) & wp[11]), tp(Op)
          }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
        }
        pp[wp[12]] = wp[28], vp(119) in Hp && function() {
          var pp, ip, cp, Op = function(...ip) {
            return Cp(ip[wp[12]] = wp[2], ip[wp[2]] = []), (ip[wp[1]] === wp[2] || ip[wp[1]] >= wp[10]) && pp(ip[wp[2]], [], ip[wp[1]], wp[1]), ip[wp[2]]
          };
          Cp(pp = function(...Op) {
            for (Op[wp[12]] = wp[10], Op[wp[10]] = Op[wp[28]]; Op[wp[10]] < Op[wp[19]]; Op[wp[10]]++) {
              if (Op[wp[2]].length !== Op[wp[10]]) return;
              for (Op[wp[35]] = wp[1]; Op[wp[35]] < Op[wp[19]]; Op[wp[35]]++) cp(Op[wp[2]], [Op[wp[10]], Op[wp[35]]]) && (Cp(Op[wp[2]].push([Op[wp[10]], Op[wp[35]]]), pp(Op[wp[1]], Op[wp[2]], Op[wp[19]], Op[wp[10]] + wp[2])), Op[wp[2]].length === Op[wp[19]] && Op[wp[1]].push(ip(Op[wp[2]])), Op[wp[2]].pop())
            }
          }, ip = function(...pp) {
            for (Cp(pp[wp[12]] = wp[2], pp[-wp[37]] = [], pp[wp[19]] = pp[wp[1]].length), pp[-wp[36]] = wp[1]; pp[-wp[36]] < pp[wp[19]]; pp[-wp[36]]++)
              for (pp[-wp[37]][pp[-wp[36]]] = "", pp[wp[38]] = wp[1]; pp[wp[38]] < pp[wp[19]]; pp[wp[38]]++) pp[-wp[37]][pp[-wp[36]]] += pp[wp[1]][pp[-wp[36]]][wp[2]] === pp[wp[38]] ? "Q" : ".";
            return pp[-wp[37]]
          }, cp = function(...pp) {
            for (Cp(pp[wp[12]] = wp[19], pp[wp[20]] = pp[wp[1]].length), pp[wp[28]] = wp[1]; pp[wp[28]] < pp[wp[20]]; pp[wp[28]]++) {
              if (pp[wp[1]][pp[wp[28]]][wp[1]] === pp[wp[2]][wp[1]] || pp[wp[1]][pp[wp[28]]][wp[2]] === pp[wp[2]][wp[2]]) return wp[39];
              if (Math.abs((pp[wp[1]][pp[wp[28]]][wp[1]] - pp[wp[2]][wp[1]]) / (pp[wp[1]][pp[wp[28]]][wp[2]] - pp[wp[2]][wp[2]])) === wp[2]) return wp[39]
            }
            return wp[40]
          }, console.log(Op))
        }();
        const cp = Rp;
        return op()[ip(120) + ip(121)](cp, pp[wp[19]]), op()[ip(wp[75])](pp[wp[1]], cp, op()[ip(123)](cp, pp[wp[2]]))
      };

    function Cp() {
      Cp = function() {}
    }
    Sp = (pp, ip, cp, Op, Sp, Yp, Dp, Ap) => {
      function Pp(...pp) {
        return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(...pp) {
          for (Cp(pp[wp[12]] = wp[2], pp[wp[20]] = 'GJ,T9P6`%>o4}#ky3dFE<^xN|8/[?a+DR~7S)12wm.n;r@"pvfz_ucZs$5&i](!Cb*B=:e{X0VqOtLQhljUYWgKMHAI', pp[wp[19]] = "" + (pp[wp[1]] || ""), pp[wp[33]] = pp[wp[19]].length, pp[wp[43]] = [], pp[wp[15]] = wp[1], pp[wp[22]] = wp[1], pp[wp[24]] = -wp[2]), pp[wp[41]] = wp[1]; pp[wp[41]] < pp[wp[33]]; pp[wp[41]]++)
            if (pp[wp[42]] = pp[wp[20]].indexOf(pp[wp[19]][pp[wp[41]]]), pp[wp[42]] !== -wp[2])
              if (pp[wp[24]] < wp[1]) pp[wp[24]] = pp[wp[42]];
              else {
                Cp(pp[wp[24]] += pp[wp[42]] * wp[30], pp[wp[15]] |= pp[wp[24]] << pp[wp[22]], pp[wp[22]] += (pp[wp[24]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
                do {
                  Cp(pp[wp[43]].push(pp[wp[15]] & wp[11]), pp[wp[15]] >>= wp[3], pp[wp[22]] -= wp[3])
                } while (pp[wp[22]] > wp[24]);
                pp[wp[24]] = -wp[2]
              } return pp[wp[24]] > -wp[2] && pp[wp[43]].push((pp[wp[15]] | pp[wp[24]] << pp[wp[22]]) & wp[11]), tp(pp[wp[43]])
        }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
      }
      const Wp = pp[Pp(wp[45])][Pp(125) + Pp(126) + Pp(wp[44])](ip);
      let yp = pp[Pp(wp[45])][Pp(wp[46]) + Pp(wp[58]) + Pp(wp[59]) + Pp(wp[60])](Wp);
      const Up = yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[47]) + Pp(wp[48]) + Pp(wp[49]) + wp[15]) : yp[Pp(wp[47]) + Pp(wp[48]) + Pp(wp[49]) + wp[15]],
        vp = yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[55]) + Pp(wp[56]) + Pp(wp[57])) : yp[Pp(wp[55]) + Pp(wp[56]) + Pp(wp[57])];
      Cp(op()[Pp(142)](dp, wp[1], wp[1], Yp), op().wi(dp, dp, op()[Pp(143)], Op.heading), op()[Pp(wp[63])](qp, Sp.tw), qp[wp[2]] = wp[1]);
      const Rp = cp[Pp(145) + Pp(146)]();
      yp = pp[Pp(wp[45])][Pp(wp[46]) + Pp(wp[58]) + Pp(wp[59]) + Pp(wp[60])](Wp);
      let Ep = yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[61]) + Pp(wp[62])) : yp[Pp(wp[61]) + Pp(wp[62])];
      if (!Rp && op()[wp[67]](qp) && (yp === wp[50] ? pp[Pp(wp[45])][Pp(wp[51]) + Pp(wp[52]) + Pp(wp[53]) + Pp(wp[54])](ip, Pp(wp[74]) + Pp(wp[84]) + Pp(151) + Pp(152)) : yp[Pp(153) + Pp(wp[86]) + Pp(155)])) {
        function Np(...pp) {
          for (Cp(pp[wp[12]] = wp[2], pp[wp[2]] = 'qx1B^vAFunkRT<t5)Z_,.=mX/b!G9OPcsjW3Sh4wd?;"a0:7Y6DE~HJQzrLUf>gp@CKMlo}`%VIie]&*+#[{2$(|y8N', pp[wp[19]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[19]].length, pp[-wp[36]] = [], pp[wp[65]] = wp[1], pp[wp[9]] = wp[1], pp[-wp[64]] = -wp[2]), pp[-wp[63]] = wp[1]; pp[-wp[63]] < pp[wp[4]]; pp[-wp[63]]++)
            if (pp[wp[45]] = pp[wp[2]].indexOf(pp[wp[19]][pp[-wp[63]]]), pp[wp[45]] !== -wp[2])
              if (pp[-wp[64]] < wp[1]) pp[-wp[64]] = pp[wp[45]];
              else {
                Cp(pp[-wp[64]] += pp[wp[45]] * wp[30], pp[wp[65]] |= pp[-wp[64]] << pp[wp[9]], pp[wp[9]] += (pp[-wp[64]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
                do {
                  Cp(pp[-wp[36]].push(pp[wp[65]] & wp[11]), pp[wp[65]] >>= wp[3], pp[wp[9]] -= wp[3])
                } while (pp[wp[9]] > wp[24]);
                pp[-wp[64]] = -wp[2]
              } return pp[-wp[64]] > -wp[2] && pp[-wp[36]].push((pp[wp[65]] | pp[-wp[64]] << pp[wp[9]]) & wp[11]), tp(pp[-wp[36]])
        }

        function Tp(...pp) {
          return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = Np(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
        }

        function fp(...pp) {
          function ip() {}
          pp[wp[12]] = wp[1], Cp(pp[wp[0]] = function(pp, cp) {
            var Op, op, Ip, Sp, xp, Lp = wp[1];
            for (Cp(Op = wp[1], op = new ip(wp[1]), Ip = op, Sp = pp, xp = cp); Sp !== wp[50] || xp !== wp[50];) Cp(Op = (Sp ? Sp.val : wp[1]) + (xp ? xp.val : wp[1]) + Lp, Lp = Math.floor(Op / wp[66]), Ip.next = new ip(Op % wp[66]), Ip = Ip.next, Sp = Sp ? Sp.next : wp[50], xp = xp ? xp.next : wp[50]);
            return Lp && (Ip.next = new ip(Lp)), op.next
          }, console.log(pp[wp[0]]))
        }
        Tp(156) in Hp && fp(), Cp(Mp(ep, dp, qp), Mp(jp, qp, dp), op()[Tp(157)](kp, qp, jp));
        const bp = op()[Tp(158)](qp),
          hp = op()[Tp(159)](dp, qp) / Yp / bp,
          ap = Math[Tp(wp[73])](hp, wp[1]) + wp[2];
        if (Yp * Yp < op()[wp[67]](jp)) {
          function np(...pp) {
            for (Cp(pp[wp[12]] = wp[2], pp[wp[2]] = 'dAQj14uf9qp0xWtsv#hBe27bG!<M?@"RV8H$I3:XO=)~Em[a&(U6ckD>;]_ro,+PCn}l/{5gKy`|^*iFw.SNJZLzTY%', pp[-wp[68]] = "" + (pp[wp[1]] || ""), pp[-wp[70]] = pp[-wp[68]].length, pp[-wp[72]] = [], pp[wp[15]] = wp[1], pp[wp[9]] = wp[1], pp[wp[24]] = -wp[2]), pp[wp[69]] = wp[1]; pp[wp[69]] < pp[-wp[70]]; pp[wp[69]]++)
              if (pp[wp[71]] = pp[wp[2]].indexOf(pp[-wp[68]][pp[wp[69]]]), pp[wp[71]] !== -wp[2])
                if (pp[wp[24]] < wp[1]) pp[wp[24]] = pp[wp[71]];
                else {
                  Cp(pp[wp[24]] += pp[wp[71]] * wp[30], pp[wp[15]] |= pp[wp[24]] << pp[wp[9]], pp[wp[9]] += (pp[wp[24]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
                  do {
                    Cp(pp[-wp[72]].push(pp[wp[15]] & wp[11]), pp[wp[15]] >>= wp[3], pp[wp[9]] -= wp[3])
                  } while (pp[wp[9]] > wp[24]);
                  pp[wp[24]] = -wp[2]
                } return pp[wp[24]] > -wp[2] && pp[-wp[72]].push((pp[wp[15]] | pp[wp[24]] << pp[wp[9]]) & wp[11]), tp(pp[-wp[72]])
          }

          function Fp(...pp) {
            return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = np(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
          }
          op()[Fp(161)](dp, dp, jp, ap)
        }
        Cp(Ep = (0, Ip.y)(Ep, 1, Math[Tp(wp[73])](wp[2], Math[Tp(162)](wp[1], -hp, wp[2] - bp / Yp))), op()[Tp(163)](dp, dp, kp))
      }
      const Xp = mp;
      Cp(op()[Pp(164)](Xp, dp, qp), Xp[wp[2]] = wp[1]);
      let lp = op()[Pp(165)](Xp);
      if (!Rp) {
        function gp(...pp) {
          for (Cp(pp[wp[12]] = wp[2], pp[wp[74]] = 'G}u$<_Dn7W36V,:vo9eCM8@YXObhzmi+BZUH!Sl`[EL|{p(J/T;xqF~Ar1t4N&d>%P.?Q=gka2^jcf5#Is*0wR]y"K)', pp[-wp[75]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[-wp[75]].length, pp[wp[43]] = [], pp[wp[78]] = wp[1], pp[wp[9]] = wp[1], pp[wp[77]] = -wp[2]), pp[wp[41]] = wp[1]; pp[wp[41]] < pp[wp[4]]; pp[wp[41]]++)
            if (pp[wp[76]] = pp[wp[74]].indexOf(pp[-wp[75]][pp[wp[41]]]), pp[wp[76]] !== -wp[2])
              if (pp[wp[77]] < wp[1]) pp[wp[77]] = pp[wp[76]];
              else {
                Cp(pp[wp[77]] += pp[wp[76]] * wp[30], pp[wp[78]] |= pp[wp[77]] << pp[wp[9]], pp[wp[9]] += (pp[wp[77]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
                do {
                  Cp(pp[wp[43]].push(pp[wp[78]] & wp[11]), pp[wp[78]] >>= wp[3], pp[wp[9]] -= wp[3])
                } while (pp[wp[9]] > wp[24]);
                pp[wp[77]] = -wp[2]
              } return pp[wp[77]] > -wp[2] && pp[wp[43]].push((pp[wp[78]] | pp[wp[77]] << pp[wp[9]]) & wp[11]), tp(pp[wp[43]])
        }

        function Gp(...pp) {
          return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = gp(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
        }

        function rp(...pp) {
          function ip(...pp) {
            return pp[wp[12]] = wp[2], pp[wp[1]][wp[2]] * wp[80] + (pp[wp[1]][wp[1]] < wp[1] ? wp[79] | pp[wp[1]][wp[1]] : pp[wp[1]][wp[1]])
          }

          function cp(...pp) {
            switch (pp[wp[12]] = wp[2], ((pp[wp[1]] & wp[79]) !== wp[1]) * wp[2] + (pp[wp[1]] < wp[1]) * wp[19]) {
              case wp[1]:
                return [pp[wp[1]] % wp[79], Math.trunc(pp[wp[1]] / wp[80])];
              case wp[2]:
                return [pp[wp[1]] % wp[79] - wp[79], Math.trunc(pp[wp[1]] / wp[80]) + wp[2]];
              case wp[19]:
                return [((pp[wp[1]] + wp[79]) % wp[79] + wp[79]) % wp[79], Math.round(pp[wp[1]] / wp[80])];
              case wp[28]:
                return [pp[wp[1]] % wp[79], Math.trunc(pp[wp[1]] / wp[80])]
            }
          }
          pp[wp[12]] = wp[1], Cp(pp[-wp[37]] = ip([wp[19], wp[10]]), pp[-wp[81]] = ip([wp[2], wp[19]]), pp[wp[43]] = pp[-wp[37]] + pp[-wp[81]], pp[wp[71]] = pp[wp[43]] - pp[-wp[81]], pp[-wp[82]] = pp[wp[71]] * wp[19], pp[-wp[83]] = pp[-wp[82]] / wp[19], console.log(cp(pp[wp[43]])), console.log(cp(pp[wp[71]])), console.log(cp(pp[-wp[82]])), console.log(cp(pp[-wp[83]])))
        }
        Gp(166) in Hp && rp(), lp *= Ep
      }
      const Qp = Dp[Pp(167) + Pp(168) + Pp(wp[70])],
        Jp = Qp ? Math[Pp(170)](Qp, lp) : lp;
      op()[Pp(wp[6]) + Pp(172)](Xp, Xp);
      const Bp = Ap !== wp[50] && void 0 !== Ap ? Ap : Dp[Pp(173) + Pp(wp[36]) + Pp(175) + Pp(176)];
      if (Jp > wp[1]) {
        function Zp(...pp) {
          for (Cp(pp[wp[12]] = wp[2], pp[wp[2]] = 'k6w7RP4<n/d{Z5)W0_s(1urVo[2Nq:em^ST+U;`=hJ&K"8|@pfYgtAi?~x]FQzIMj.y,O}H3%BbG9L!C$>#*lEaXDcv', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[wp[35]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = -wp[2]), pp[-wp[84]] = wp[1]; pp[-wp[84]] < pp[wp[4]]; pp[-wp[84]]++)
            if (pp[wp[76]] = pp[wp[2]].indexOf(pp[wp[0]][pp[-wp[84]]]), pp[wp[76]] !== -wp[2])
              if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[wp[76]];
              else {
                Cp(pp[wp[7]] += pp[wp[76]] * wp[30], pp[wp[35]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
                do {
                  Cp(pp[wp[10]].push(pp[wp[35]] & wp[11]), pp[wp[35]] >>= wp[3], pp[wp[9]] -= wp[3])
                } while (pp[wp[9]] > wp[24]);
                pp[wp[7]] = -wp[2]
              } return pp[wp[7]] > -wp[2] && pp[wp[10]].push((pp[wp[35]] | pp[wp[7]] << pp[wp[9]]) & wp[11]), tp(pp[wp[10]])
        }

        function zp(...pp) {
          return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = Zp(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
        }
        let sp = cp[zp(177) + zp(178)] * Bp;
        if (!Rp) {
          function Vp(...pp) {
            for (Cp(pp[wp[12]] = wp[2], pp[wp[20]] = 'ALluab7_G=OY]"0~q`kFgB9CP5Q<.iNHhX^t*3RM{2pZ;jS:n}fvD[|U@oK$zI(V,6?1xJE/!8&dT+4eWc>syrw)%#m', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[85]] = pp[wp[0]].length, pp[wp[87]] = [], pp[wp[15]] = wp[1], pp[wp[22]] = wp[1], pp[wp[7]] = -wp[2]), pp[wp[3]] = wp[1]; pp[wp[3]] < pp[wp[85]]; pp[wp[3]]++)
              if (pp[wp[86]] = pp[wp[20]].indexOf(pp[wp[0]][pp[wp[3]]]), pp[wp[86]] !== -wp[2])
                if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[wp[86]];
                else {
                  Cp(pp[wp[7]] += pp[wp[86]] * wp[30], pp[wp[15]] |= pp[wp[7]] << pp[wp[22]], pp[wp[22]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
                  do {
                    Cp(pp[wp[87]].push(pp[wp[15]] & wp[11]), pp[wp[15]] >>= wp[3], pp[wp[22]] -= wp[3])
                  } while (pp[wp[22]] > wp[24]);
                  pp[wp[7]] = -wp[2]
                } return pp[wp[7]] > -wp[2] && pp[wp[87]].push((pp[wp[15]] | pp[wp[7]] << pp[wp[22]]) & wp[11]), tp(pp[wp[87]])
          }

          function ii(...pp) {
            return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = Vp(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
          }
          sp *= cp[ii(179) + ii(180)]
        }
        let Kp = cp[zp(181) + zp(182) + "ss"] * Jp;
        if (Jp < .3) {
          function ci(...pp) {
            function ip(...pp) {
              return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(pp) {
                var ip, cp, Op, op, Ip, Sp, xp;
                for (Cp(ip = "" + (pp || ""), cp = ip.length, Op = [], op = wp[1], Ip = wp[1], Sp = -wp[2]), xp = wp[1]; xp < cp; xp++) {
                  var Lp = 'eIz9qf2b^0ZNpchYuTKrd~&D8=JLW[_#Hv?nV)1o:;$PG"EQR,|saB/.!iwM>jACU6t`<OX%7m@+]4}3lky{(x5*gFS'.indexOf(ip[xp]);
                  if (Lp !== -wp[2])
                    if (Sp < wp[1]) Sp = Lp;
                    else {
                      Cp(Sp += Lp * wp[30], op |= Sp << Ip, Ip += (Sp & wp[31]) > wp[32] ? wp[33] : wp[34]);
                      do {
                        Cp(Op.push(op & wp[11]), op >>= wp[3], Ip -= wp[3])
                      } while (Ip > wp[24]);
                      Sp = -wp[2]
                    }
                }
                return Sp > -wp[2] && Op.push((op | Sp << Ip) & wp[11]), tp(Op)
              }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
            }
            pp[wp[12]] = wp[1], Cp(pp[wp[20]] = ip(184) + ip(185) + ip(186) + ip(187) + ip(188), pp[-wp[65]] = ip(189) + ip(190) + ip(191) + ip(192) + ip(193) + ip(194) + ip(195), pp[wp[19]] = ip(196) + ip(wp[87]) + ip(198) + ip(199) + ip(200) + ip(wp[27]), pp[wp[20]].match(pp[-wp[65]] + pp[wp[19]]))
          }
          zp(183) in Hp && ci(), Kp *= Jp
        }
        sp > Kp && (sp = Kp), Cp(op()[zp(wp[64])](Xp, Xp, sp), Sp[zp(203) + zp(204)](Xp))
      }
      Sp[Pp(205) + wp[88]] = cp[Pp(206) + Pp(wp[48]) + wp[88]] * (Rp ? Up : vp)
    }
  },
  37861: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp,
      f: () => xp
    });
    var Op = cp(37868),
      op = cp(1927);
    const Ip = 2,
      Sp = 1,
      xp = {
        Gx: 1,
        fluidDrag: -1,
        fluidDragHorizontal: -1,
        fluidDragVertical: -1,
        gravityMultiplier: 2,
        width: .5,
        height: 1.8,
        canRun: !0,
        jumpMultiplier: 1,
        upwardImpulseOnUse: 0,
        canAutoStep: !0,
        canAutoStepByBlock: {},
        riderOffset: [0, 0, 0],
        pose: "standing",
        effect: null,
        standingFriction: 5,
        maxPushDistance: 0,
        movementForceMultiplier: 1,
        disableBaseMovement: !1,
        speedMultiplier: 1,
        landSpeedMultiplier: 1,
        fluidSpeedMultiplier: 1,
        airSpeedMultiplier: 1,
        speedMultiplierByBlock: {},
        disableFootstepSounds: !1,
        horizontalBounciness: 0,
        verticalBounciness: 0,
        minHorizontalSpeedToBounce: 0,
        minVerticalSpeedToBounce: 0,
        horizontalImpactCameraShake: null,
        verticalImpactCameraShake: null,
        steering: null,
        fixedHeading: null,
        fluidSkip: null,
        airborneMode: null,
        airborneMovement: null,
        airborneFallSpeedLimit: null
      };

    function Lp(pp, ip, cp, xp, Lp, Yp, Dp) {
      if (Lp.speed) return (0, Op.e)(ip, cp, xp, Lp, Yp, Dp, pp), void(Lp.ticksToReachMaxIdleFriction = Ip);
      const Ap = xp.isOnGround(),
        Pp = ip.bloxd.getSyncedClientOptions(ip.bloxd.getPlayerReader(cp)),
        Wp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "groundFrictionScale") : Pp.groundFrictionScale,
        yp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airFrictionScale") : Pp.airFrictionScale,
        Up = Ap ? Wp : yp,
        wp = Math.max(Sp, Up),
        vp = Lp.ticksToReachMaxIdleFriction / Ip,
        tp = (0, op.y)(wp, Up, vp);
      Yp.friction = pp.standingFriction * ((null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airMomentumConservation") : Pp.airMomentumConservation) ? tp : Up), Lp.ticksToReachMaxIdleFriction > 0 && Lp.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);