export const id = 230;
export const ids = [230];
export const modules = {
  38795: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ou
    });
    var su = ju(202),
      Uu = ju(38043);
    const Zu = 1.2,
      Xu = {
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
        pl: .5,
        vEu: !1
      },
      lu = {
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
        pl: .5,
        vEu: !1
      },
      qu = {
        physicsBodyDimensions: {
          width: su.e.Sh,
          height: su.e.Ih
        },
        hitBoxDimensions: {
          width: su.e.Sh + .4,
          height: su.e.Ih + .6
        },
        eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
        rideHeight: su.e.Ih - .3,
        pl: .5,
        vEu: !1
      },
      fu = {
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
        pl: .5,
        vEu: !1
      },
      Cu = {
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
        pl: .5,
        vEu: !1
      },
      bu = {
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
        pl: .5,
        vEu: !1
      },
      cu = {
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
        pl: .5,
        vEu: !1
      },
      Nu = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: su.e.Sh,
            height: su.e.Ih
          },
          hitBoxDimensions: {
            width: su.e.Sh + .4,
            height: su.e.Ih + .6
          },
          eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
          rideHeight: su.e.Ih - .1,
          pl: Uu.d.pl,
          vEu: !0
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
        },
        Camel: {
          modelScale: Zu,
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
        },
        "Cave Golem": Xu,
        "Draugr Zombie": {
          ...qu,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": qu,
        "Frost Golem": Xu,
        "Frost Zombie": {
          ...qu,
          defaultPose: "zombie"
        },
        "Frost Skeleton": qu,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: su.e.Sh,
            height: su.e.Ih
          },
          hitBoxDimensions: {
            width: su.e.Sh + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          pl: .5,
          vEu: !1
        },
        Wolf: fu,
        Bear: Cu,
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
          pl: .5,
          vEu: !1
        },
        Stag: bu,
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
          pl: .5,
          vEu: !1
        },
        Gorilla: cu,
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
          pl: .5,
          vEu: !1
        },
        "Draugr Huntress": qu,
        "Magma Golem": Xu,
        "Spirit Golem": Xu,
        "Spirit Wolf": fu,
        "Spirit Bear": Cu,
        "Spirit Stag": bu,
        "Spirit Gorilla": cu,
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: su.e.Sh,
            height: su.e.Ih
          },
          hitBoxDimensions: {
            width: su.e.Sh + .4,
            height: su.e.Ih + .6
          },
          eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
          rideHeight: su.e.Ih - .1,
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: su.e.Sh,
            height: su.e.Ih
          },
          hitBoxDimensions: {
            width: su.e.Sh + .4,
            height: su.e.Ih + .6
          },
          eyeHeight: su.e.Ih * su.e.playerEyeToHeightRatio,
          rideHeight: su.e.Ih - .1,
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
        },
        Zombie: {
          ...qu,
          defaultPose: "zombie"
        },
        Skeleton: qu,
        Mummy: {
          ...qu,
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
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
          pl: .5,
          vEu: !1
        },
        "Iron Guardian": lu,
        "Gold Guardian": lu,
        "Diamond Guardian": lu,
        "Moonstone Guardian": lu,
        "Iron Goofy Golem": lu,
        "Gold Goofy Golem": lu,
        "Diamond Goofy Golem": lu,
        "Moonstone Goofy Golem": lu,
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
          pl: .5,
          vEu: !1
        }
      };

    function Ou(uu) {
      return Nu[uu]
    }
  },
  37467: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    const su = {
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
  38048: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(366),
      Uu = ju.n(su),
      Zu = ju(1955);
    let Xu;
    var lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu;
    const hu = [103, 0, 1, 8, 3, "a", 9, 7, "e", 6, 4, 255, "length", 177, 201, 2, 156, "undefined", void 0, 140, 131, 63, "fromCodePoint", 12, "push", 209, 171, "b", 91, 5, "f", 8191, 88, 13, 14, 41, "c", 92, 240, 35, 228, 205, 102, "d", !1, !0, 44, 223, "h", 87, 52, "g", 93, 249, 36, 99, 110, 111, 112, null, 106, 107, 108, 109, 113, 114, 115, 125, 126, 127, 128, 129, 130, 144, 196, 74, 59, "cj", 18, 152, 100, 135, 10, 167, 49, 195, 78, 116, 139, 79, 33554432, 67108864, 121, 98, "i", 186, 175, "on"];

    function Du(...uu) {
      return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = function(...uu) {
        for (ou(uu[hu[12]] = hu[2], uu[hu[5]] = 'wnpEJZUfC.8+L=:c"7Y$BI%Rz`X5bWygV,<T6/3A[Pj{t1D0qx|&;OFosN(4@_Ki*^vH!>S)m9GM}?#ud]h~Qerlka2', uu[-hu[0]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[-hu[0]].length, uu[hu[10]] = [], uu[hu[8]] = hu[1], uu[hu[9]] = hu[1], uu[hu[7]] = -hu[2]), uu[hu[3]] = hu[1]; uu[hu[3]] < uu[hu[4]]; uu[hu[3]]++)
          if (uu[hu[6]] = uu[hu[5]].indexOf(uu[-hu[0]][uu[hu[3]]]), uu[hu[6]] !== -hu[2])
            if (uu[hu[7]] < hu[1]) uu[hu[7]] = uu[hu[6]];
            else {
              ou(uu[hu[7]] += uu[hu[6]] * hu[28], uu[hu[8]] |= uu[hu[7]] << uu[hu[9]], uu[hu[9]] += (uu[hu[7]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
              do {
                ou(uu[hu[10]].push(uu[hu[8]] & hu[11]), uu[hu[8]] >>= hu[3], uu[hu[9]] -= hu[3])
              } while (uu[hu[9]] > hu[7]);
              uu[hu[7]] = -hu[2]
            } return uu[hu[7]] > -hu[2] && uu[hu[10]].push((uu[hu[8]] | uu[hu[7]] << uu[hu[9]]) & hu[11]), gu(uu[hu[10]])
      }(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
    }

    function gu(...uu) {
      return uu[hu[12]] = hu[2], typeof Cu !== hu[17] && Cu ? (new Cu).decode(new bu(uu[hu[1]])) : typeof cu !== hu[17] && cu ? cu.from(uu[hu[1]]).toString("utf-8") : Yu(uu[hu[1]])
    }

    function Mu() {}
    ou(lu = {}, qu = ['^FhZs<+`E@}n5|r"ugc.s@ZnisU.7mW6`VE', "m!{8X}LSGK2G>qf3XDyJ`0tYlBVu50d5aO~W&Dd<#+`oESf$4)gxA9~n", "JiUoe1,Wa7Juc)q<fYWgVT]f2+gfJ5h5D!c}@@w", '?4+G@@3(HN[9#:dXCWUf;DU*zBP}P`KT"FNU{hnlk(5f(]<z!bQZ', "o!dFxS[z]F;9(SUY*bvVjS>&9:m+h`JgFRo.a}T=3*xz#>>`,&R#k,In", "PNVUou!ydL", "pGn#M~LzN:2`k0+$QbQWh,,TJ", '9!wyb4$f+K4dVED5"Dk9e;lNucq}n', "1R;W1syp", "IG<M:3ypb4|", "#7|&*qTWDI&903d5<qRx=G$T.^^v2>4R/!rgl#!U!F~Gw", "ejgbm6EPXK4465=5W)yfI4O=WY6z{:S/dBWoyF+P0@RE)XB[&FoJj/aWN7", "@gub@@m;z^X&d5S/H!?)?6MnaKf(Y/}$QqAbR4RW(^PoaJwj3{J8", "!!rfwuCY,Fg<:Zi7QSAxw@bzi@`B`qK6;L1gk47P(B", 'j)w#]6U6"YZ!ed{3D.GCYKw', "gNKoG|E`U$", 'K:ZGV!TN7Y%heJbT)7jMvq!YtK4I"5/`Hbq92e:(?+Lm!z=5', 'm1r)c}==6FinLEzTTUO8s(g$O(6m7"Z{jW%gcGw', "T/P5G@`T.oB}]J", ">R+?~3(p", "wIj5jMPN|@]?aJ", "6FDxCG!r@s>?w6837&+VY|kDF=C!k4Y<Yn", "91BW}~zDgLy7i:E{0<NUKGe>|F4fH:(R.GDfx!fPp$T4bE8", "gE#}wQcOf", '$&Io76%;".Sdj`oT_g3;83zp', "(BP5f>rLwYYq&(KyF[x5];]=!.W5adgj=n", "JFI}*Qn=xi)x{(A/kAz.V!cnlBB&=6aR4:GCiAJz`^D;b08X&F@gjMh(yY", 'v7Z8&(I>pFMGU]4Wk4|?I}%;dNj4JcHg]&w#<Tt;_s^bO"q[', "fxzMb4FycvJu}5TgXFsUI|mY8o7/_J`j1&CFcG~ff8g}w", "_!x5$~iPE*C^%_y6xU%fk3AMo=@IZ@~5y!V954#;2:,qn", "E@JW96^NpcjddTfYOw", "{g#ge><;1vz=^zbW]S09uKv(qL]c`qRP[UWGSO1fEFAEh]@RcVp", 'n[f}UoXCf8B}l~k"B)NVWdw', 'gR4CED8D`^r6D_/$"{s9K<=n]F(', 'CxZ|R3[(^LZpu:g7yR+?b4?e@CATi(5R=[iJreX;_Y^SR)K7TF"Uy', "WDUf2;c$14%7xmEgD<}?prmDQ$f0n", "e1^V~K+`i@>Sv/+3mKLgd;9W!=GH~pf", ".xXmye8DQ$lGREqXx{&C", "G1M?~>pynF??(><zfLAbtMdr$$qIX_YBBiNF?>8yJ", "ZLBGO?2!,cj", "M&V9g#jyN(]+@EMXbBjV`;HP?+", "r`)}z}J(/F0:m~V6/@u.B3Hn|cMx$Xd[)FE|R}HT!$EU~:Xb:VzUCKw", "N[u}i@Vd*@m@F/,R", "sEuxL|$T*LlS:_/$xE3f", "BN~OAF;;is8<rxdA@/[U", "v[d.];M>;*l@~Xc", "1!+G`9}<wY_", '#/[xnr"rR=t8NqJg0Kt8@S3LB==hS=~5$&gJV4[6*cmdJm>/LRi}fuvLwc', "ULQGaNI0s7@faqz<Y.CUy_rLyvg7{X*6FB;GgF*UUo[K%Z.", 'AXJ|wD9PxYib.";P+Lp&e,B*vLj;Tpq5/UeX29{$J', "j[`F><_R:i?nB48", "RU^&,TJSY@{;V0fg}7|mr;o0qNvdWJ,R<GJZ//pzP(G%1qwynJzFvKz;B$s", "5Ra&Eo5$LKWosc&bM&tf0xDp.KHs$hy6C),U,x{>]c", '`cw.~3VLyII}g~z<7&Soo&k;b4Uy$X"5;RH?l3/fo=/qscn{', "VRV923@p", "Q^<59N,PfBKIj=u5b<h&QK_=8^GxZ69gOEMZE]dDyIP94~OP7&<mr}?&U", "O1EG]KO06$+/0SeP1/`5`;zrkBIU65T6&&GZV)_WhF%qU_MA7[Cy(O&iJ", "Ex&Ch#]PPKGWq0Z`UR$mfuCC%$v+Xx4PjX0J", "nF?G{SL6.:fU5XNbB._o,!Zn?s{oD`T6", "Xc`F]>`$F=LozEnyT!H|7", "V!}ZReF[MK9`i3cAgNE8w@QzDv:y96[XxUBW!K86C=c/sEj`@^1J", "EI?GHOi={:]+h`W7Bi:or#iNb^Jh53s<", 'A{BGxQ9>XB7U:]x50XkF+|7O*i=mqcHg}^1;%|_T*Y*b]JU$"n', "o^6fvOC;MsMdyX<7/Fk9b[CS].", 'nIk./0^PcY,>T0i/u4Dbv@"C@+Q?v]C$0KCFa3}z"NXBazmYY)w5:', '{)xV!Of>"v@?g~|[>F[Fn@4Wv@zo7mEYUV!OI[oP84Yz6E3$', ',@*UG@.$!.Yh[)WR*FxCCuM=aBQH5))/Z)~W}3lNO$f.N"yWH&H8.6@pyir`n', "d4r;W)s;6N?sz0Eg1RmUZu#Dt^YM+:PX5.Q?X3w", "9&w#wQC;D47q96P$x[Fbx!bzdOuJ8Z:", "M4}fdG`O,cGGTXuA6Ntg:KXzS=/zmE", "YFq.t&L6(4}W%Zw{Jv?Ja)fO@4[EO@Zguw", "vKnV+~3zu@.=|=[Y;&yb@(tY7NkG$hn6D&6f+~~n/(go$3Bb|EW8", "V{/g76w", ".N3o!m8(O=o}Lq0A;XnF53ty,Y^Sy3cAX@PU1s+$0I", "%.o}f]Z`gcC5s5<y;w", "N^H?pm+Oe(%qm~U/#Bs.AFQ[zB", "9&pWCr<p", '"YRxK@~N_CdDc:%TP^gb0&vUCoqKLA,7FqeJh;1>(BUuh:sjcV]Uy', '_4xF0xC(=4C=t0yWrE[.d)y6xL<>e6"BbF(&C6unpc8(PJC3Fw', "?bkxy[Vp", "dCh50M6!7%", 'pu/BA0"Vc/', "!O08l1Z7Zo", "D4lb3`BBCg", "E^Qi4`;p", "Vrlqv*v.8+E?p,E^x{M", '7"NmT^D.]xL@p,0VuY"', '2c[0p]5C]Hi<"{*yq5M', 'E^e)E$0f<~LYp,UJKc"', '&LW6SK9p>UXN<|u6~7^bjytYVZC@c.2Tkc+Bz}l;CZ%%c.nH1v.02EO+Iv.]"', 'x"|%J`Kn/Z=9o9bV"|fbhy{ra/ra:,|gtc+B7EC[bJ,d|,SH#|{!.[g=2%yKe', '2c+Bi4Cn7%"IH,UVCCsb[;fYh%<a3,5:0Csbx9*Y)ora:,en*ca0I<prDm1Fe', "v&3g?]Bp", "6tuj0+#L", ".<;#mG[L", "`AF=", "eZ;=Xtg", "`<]x", ".Pht:I6=", ">A@HlWR", "qYKMS>f=", "jY;#/+f=", "YYZM", "qYFLypCV;", "sfXZ%r?4;", "nn:HYrV];", "qYFLf>t=", "IOKMj4*=", "5Puox+q=", '4Iuxx"5=', "WECx6Lq=", "3E+>L]t=", "#OLr7FA=", "^P;#s4t=", "xJ+>lLi,", "T11x$", "!YKM", "ZYFrV", "Pn^x!", "#|?EKQk=", "ClDH$", "qYFLyp5=", "dYB>f>t=", 'IOFLc"Q=', "xn*Lt", "^PExmeS=", "xHEo!+R", '^PEx$"j=', "IOuxc>n,", "#O.xb4|=", "!J+>lLR", "{F&vB&RY", ")Z&f", "1Lrq", "`(:l", "7[rq", "HZgzrTVi", '(VPi"', "im3l", "!s0f", "Bl.o", '/Y*L"]P=', ",)vMkTg=", "jfW>]]f=", ".H~o", "{PDH", "3nEx{FA=", "Cr~o", "jn~xp>?4U*", "<U9LC+iy;V", "|P4H%rn%N", "o#Ky,+9z", "G~ZDcTm4", ")9Z.", "Bv>`vZmx", "qOIe_6v4", ";3Q8E?z", "^YK]Fp:4", "UXZDsS&4", "O1qHi{?N", ";QvVD?)0", "A9L.kJv", "!c[9G/Tz", "pLry7", "eE+>L]t=", "jn~x.Lz="]), ou(fu = function(...uu) {
      ou(uu[hu[12]] = hu[1], uu[hu[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], uu[-hu[13]] = hu[18], uu[hu[8]] = []);
      try {
        ou(uu[-hu[13]] = Object, uu[hu[8]][hu[24]]("".__proto__.constructor.name))
      } catch (qu) {}
      uu: for (uu[hu[14]] = hu[1]; uu[hu[14]] < uu[hu[15]][hu[12]]; uu[hu[14]]++) try {
        for (uu[-hu[13]] = uu[hu[15]][uu[hu[14]]](), uu[hu[16]] = hu[1]; uu[hu[16]] < uu[hu[8]][hu[12]]; uu[hu[16]]++)
          if (typeof uu[-hu[13]][uu[hu[8]][uu[hu[16]]]] === hu[17]) continue uu;
        return uu[-hu[13]]
      } catch (qu) {}
      return uu[-hu[13]] || this
    }() || {}, Cu = fu.TextDecoder, bu = fu.Uint8Array, cu = fu.qO, Nu = fu.String || String, Ou = fu.Array || Array, Yu = function(...uu) {
      return ou(uu[hu[12]] = hu[1], uu[hu[25]] = new Ou(hu[70]), uu[-hu[26]] = Nu[hu[22]] || Nu.fromCharCode, uu[hu[15]] = []),
        function(...Eu) {
          for (ou(Eu[hu[12]] = hu[2], Eu[hu[2]] = hu[18], Eu[hu[20]] = hu[18], Eu[hu[4]] = Eu[hu[1]][hu[12]], uu[hu[15]][hu[12]] = hu[1]), Eu[-hu[19]] = hu[1]; Eu[-hu[19]] < Eu[hu[4]];) ou(Eu[hu[20]] = Eu[hu[1]][Eu[-hu[19]]++], Eu[hu[20]] <= hu[69] ? Eu[hu[2]] = Eu[hu[20]] : Eu[hu[20]] <= hu[47] ? Eu[hu[2]] = (31 & Eu[hu[20]]) << hu[9] | Eu[hu[1]][Eu[-hu[19]]++] & hu[21] : Eu[hu[20]] <= 239 ? Eu[hu[2]] = (15 & Eu[hu[20]]) << hu[23] | (Eu[hu[1]][Eu[-hu[19]]++] & hu[21]) << hu[9] | Eu[hu[1]][Eu[-hu[19]]++] & hu[21] : Nu[hu[22]] ? Eu[hu[2]] = (Eu[hu[20]] & hu[7]) << hu[78] | (Eu[hu[1]][Eu[-hu[19]]++] & hu[21]) << hu[23] | (Eu[hu[1]][Eu[-hu[19]]++] & hu[21]) << hu[9] | Eu[hu[1]][Eu[-hu[19]]++] & hu[21] : (Eu[hu[2]] = hu[21], Eu[-hu[19]] += hu[4]), uu[hu[15]][hu[24]](uu[hu[25]][Eu[hu[2]]] || (uu[hu[25]][Eu[hu[2]]] = uu[-hu[26]](Eu[hu[2]]))));
          return uu[hu[15]].join("")
        }
    }()), Du(hu[89]) + hu[48] in Mu && function(...uu) {
      function Eu(...uu) {
        for (ou(uu[hu[12]] = hu[2], uu[hu[2]] = 'e"pM{sC/m)xou,HLTJngj:h7.cb0E&Bq634V;|91yIz^lS5=@N8Y%i#~aPDUAZv+[?XW$d<!]FrfG*`wKtkR_O2}(>Q', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[hu[27]].length, uu[-hu[35]] = [], uu[hu[29]] = hu[1], uu[hu[30]] = hu[1], uu[hu[7]] = -hu[2]), uu[hu[3]] = hu[1]; uu[hu[3]] < uu[hu[4]]; uu[hu[3]]++)
          if (uu[hu[6]] = uu[hu[2]].indexOf(uu[hu[27]][uu[hu[3]]]), uu[hu[6]] !== -hu[2])
            if (uu[hu[7]] < hu[1]) uu[hu[7]] = uu[hu[6]];
            else {
              ou(uu[hu[7]] += uu[hu[6]] * hu[28], uu[hu[29]] |= uu[hu[7]] << uu[hu[30]], uu[hu[30]] += (uu[hu[7]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
              do {
                ou(uu[-hu[35]].push(uu[hu[29]] & hu[11]), uu[hu[29]] >>= hu[3], uu[hu[30]] -= hu[3])
              } while (uu[hu[30]] > hu[7]);
              uu[hu[7]] = -hu[2]
            } return uu[hu[7]] > -hu[2] && uu[-hu[35]].push((uu[hu[29]] | uu[hu[7]] << uu[hu[30]]) & hu[11]), gu(uu[-hu[35]])
      }

      function ju(...uu) {
        return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Eu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
      }
      uu[hu[12]] = hu[1], ou(uu[hu[5]] = Du(80) + ju(81) + ju(82) + ju(83) + ju(84), uu[hu[27]] = ju(85) + ju(86) + ju(hu[49]) + ju(hu[32]) + "?", uu[hu[36]] = ju(89) + ju(90) + ju(hu[28]) + ")", uu[hu[5]].match(uu[hu[27]] + uu[hu[36]]))
    }();
    const eu = Uu()[Du(hu[37])](),
      Gu = Uu()[Du(hu[37])](),
      pu = Uu()[Du(hu[37])](),
      wu = Uu()[Du(hu[37])](),
      Ju = Uu()[Du(hu[37])](),
      du = Uu()[Du(hu[37])](),
      au = Uu()[Du(hu[37])](),
      Pu = (...uu) => {
        function Eu(...uu) {
          return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = function(...uu) {
            for (ou(uu[hu[12]] = hu[2], uu[hu[39]] = 'gHLkcMBQ=Zxsrv*D7>695]a_0~,`u?Xj#z[@&./4+w^<2$ymI!b;3)T1WpVli}S"e:%|GUJtnfACPNKRhoEFYdOq8{(', uu[hu[15]] = "" + (uu[hu[1]] || ""), uu[hu[36]] = uu[hu[15]].length, uu[hu[43]] = [], uu[hu[41]] = hu[1], uu[hu[42]] = hu[1], uu[hu[40]] = -hu[2]), uu[-hu[38]] = hu[1]; uu[-hu[38]] < uu[hu[36]]; uu[-hu[38]]++)
              if (uu[hu[6]] = uu[hu[39]].indexOf(uu[hu[15]][uu[-hu[38]]]), uu[hu[6]] !== -hu[2])
                if (uu[hu[40]] < hu[1]) uu[hu[40]] = uu[hu[6]];
                else {
                  ou(uu[hu[40]] += uu[hu[6]] * hu[28], uu[hu[41]] |= uu[hu[40]] << uu[hu[42]], uu[hu[42]] += (uu[hu[40]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
                  do {
                    ou(uu[hu[43]].push(uu[hu[41]] & hu[11]), uu[hu[41]] >>= hu[3], uu[hu[42]] -= hu[3])
                  } while (uu[hu[42]] > hu[7]);
                  uu[hu[40]] = -hu[2]
                } return uu[hu[40]] > -hu[2] && uu[hu[43]].push((uu[hu[41]] | uu[hu[40]] << uu[hu[42]]) & hu[11]), gu(uu[hu[43]])
          }(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
        }
        uu[hu[12]] = hu[4], Eu(hu[52]) in Mu && function(...uu) {
          ou(uu[hu[12]] = hu[1], uu[hu[46]] = function(...Eu) {
            return Eu[hu[12]] = hu[15], uu[hu[43]]({}, Eu[hu[1]], Eu[hu[2]])
          }, uu[hu[43]] = function(...Eu) {
            if (ou(Eu[hu[12]] = hu[4], Eu[hu[4]] = {}), Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]] !== hu[18]) return Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]];
            if (Eu[hu[2]] === Eu[hu[15]]) return hu[45];
            for (Eu[hu[27]] = hu[1]; Eu[hu[27]] < Eu[hu[2]].length; Eu[hu[27]]++) Eu[hu[4]][Eu[hu[2]][Eu[hu[27]]]] === hu[18] && (Eu[hu[4]][Eu[hu[2]][Eu[hu[27]]]] = hu[1]), Eu[hu[4]][Eu[hu[15]][Eu[hu[27]]]] === hu[18] && (Eu[hu[4]][Eu[hu[15]][Eu[hu[27]]]] = hu[1]), ou(Eu[hu[4]][Eu[hu[2]][Eu[hu[27]]]]++, Eu[hu[4]][Eu[hu[15]][Eu[hu[27]]]]--);
            for (Eu[hu[29]] in Eu[hu[4]])
              if (Eu[hu[4]][Eu[hu[29]]] !== hu[1]) return Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]] = hu[44], hu[44];
            for (Eu[hu[9]] = hu[2]; Eu[hu[9]] < Eu[hu[2]].length; Eu[hu[9]]++)
              if (uu[hu[43]](Eu[hu[1]], Eu[hu[2]].substr(hu[1], Eu[hu[9]]), Eu[hu[15]].substr(hu[1], Eu[hu[9]])) && uu[hu[43]](Eu[hu[1]], Eu[hu[2]].substr(Eu[hu[9]]), Eu[hu[15]].substr(Eu[hu[9]])) || uu[hu[43]](Eu[hu[1]], Eu[hu[2]].substr(hu[1], Eu[hu[9]]), Eu[hu[15]].substr(Eu[hu[15]].length - Eu[hu[9]])) && uu[hu[43]](Eu[hu[1]], Eu[hu[2]].substr(Eu[hu[9]]), Eu[hu[15]].substr(hu[1], Eu[hu[15]].length - Eu[hu[9]]))) return Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]] = hu[45], hu[45];
            return Eu[hu[1]][Eu[hu[2]] + Eu[hu[15]]] = hu[44], hu[44]
          }, console.log(uu[hu[46]]))
        }();
        const ju = du;
        return Uu()[Eu(94) + Eu(95)](ju, uu[hu[15]]), Uu()[Eu(96)](uu[hu[1]], ju, Uu()[Eu(97)](ju, uu[hu[2]]))
      };

    function ou() {
      ou = function() {}
    }
    Xu = (...uu) => {
      function Eu(...uu) {
        return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = function(...uu) {
          for (ou(uu[hu[12]] = hu[2], uu[hu[50]] = 'R,=1)Z;NoHM}f%dYS8qV*Ka/z$PCty!BxsA^j35hObUn7Ik{gwQE9v|#_J0.lG6`D[2uFeW+@mri>L":4]T~Xp&(<c?', uu[hu[15]] = "" + (uu[hu[1]] || ""), uu[hu[36]] = uu[hu[15]].length, uu[hu[4]] = [], uu[hu[47]] = hu[1], uu[hu[30]] = hu[1], uu[hu[51]] = -hu[2]), uu[hu[48]] = hu[1]; uu[hu[48]] < uu[hu[36]]; uu[hu[48]]++)
            if (uu[hu[49]] = uu[hu[50]].indexOf(uu[hu[15]][uu[hu[48]]]), uu[hu[49]] !== -hu[2])
              if (uu[hu[51]] < hu[1]) uu[hu[51]] = uu[hu[49]];
              else {
                ou(uu[hu[51]] += uu[hu[49]] * hu[28], uu[hu[47]] |= uu[hu[51]] << uu[hu[30]], uu[hu[30]] += (uu[hu[51]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
                do {
                  ou(uu[hu[4]].push(uu[hu[47]] & hu[11]), uu[hu[47]] >>= hu[3], uu[hu[30]] -= hu[3])
                } while (uu[hu[30]] > hu[7]);
                uu[hu[51]] = -hu[2]
              } return uu[hu[51]] > -hu[2] && uu[hu[4]].push((uu[hu[47]] | uu[hu[51]] << uu[hu[30]]) & hu[11]), gu(uu[hu[4]])
        }(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
      }
      uu[hu[12]] = hu[3], Eu(hu[93]) in Mu && function(...uu) {
        ou(uu[hu[12]] = hu[1], uu[hu[5]] = function(...uu) {
          for (ou(uu[hu[12]] = hu[2], uu[-hu[54]] = uu[hu[1]].length, uu[-hu[52]] = [], uu[hu[36]] = hu[1], uu[hu[43]] = hu[1], uu[hu[1]].sort(((uu, Eu) => uu - Eu))), uu[hu[53]] = hu[1]; uu[hu[53]] < uu[-hu[54]]; uu[hu[53]]++)
            if (!(uu[hu[53]] > hu[1] && uu[hu[1]][uu[hu[53]]] === uu[hu[1]][uu[hu[53]] - hu[2]]))
              for (ou(uu[hu[36]] = uu[hu[53]] + hu[2], uu[hu[43]] = uu[-hu[54]] - hu[2]); uu[hu[36]] < uu[hu[43]];)
                if (uu[hu[1]][uu[hu[53]]] + uu[hu[1]][uu[hu[36]]] + uu[hu[1]][uu[hu[43]]] < hu[1]) uu[hu[36]]++;
                else if (uu[hu[1]][uu[hu[53]]] + uu[hu[1]][uu[hu[36]]] + uu[hu[1]][uu[hu[43]]] > hu[1]) uu[hu[43]]--;
          else {
            for (uu[-hu[52]].push([uu[hu[1]][uu[hu[53]]], uu[hu[1]][uu[hu[36]]], uu[hu[1]][uu[hu[43]]]]); uu[hu[36]] < uu[hu[43]] && uu[hu[1]][uu[hu[36]]] === uu[hu[1]][uu[hu[36]] + hu[2]];) uu[hu[36]]++;
            for (; uu[hu[36]] < uu[hu[43]] && uu[hu[1]][uu[hu[43]]] === uu[hu[1]][uu[hu[43]] - hu[2]];) uu[hu[43]]--;
            ou(uu[hu[36]]++, uu[hu[43]]--)
          }
          return uu[-hu[52]]
        }, console.log(uu[hu[5]]))
      }();
      const ju = uu[hu[1]][Eu(hu[55])][Eu(hu[80]) + Eu(101) + Eu(hu[42])](uu[hu[2]]);
      uu[hu[5]] = uu[hu[1]][Eu(hu[55])][Eu(hu[0]) + Eu(104) + Eu(105) + "s"](ju);
      const su = uu[hu[5]] === hu[59] ? uu[hu[1]][Eu(hu[55])][Eu(hu[60]) + Eu(hu[61]) + Eu(hu[62]) + Eu(hu[63])](uu[hu[2]], Eu(hu[56]) + Eu(hu[57]) + Eu(hu[58]) + hu[8]) : uu[hu[5]][Eu(hu[56]) + Eu(hu[57]) + Eu(hu[58]) + hu[8]],
        Xu = uu[hu[5]] === hu[59] ? uu[hu[1]][Eu(hu[55])][Eu(hu[60]) + Eu(hu[61]) + Eu(hu[62]) + Eu(hu[63])](uu[hu[2]], Eu(hu[64]) + Eu(hu[65]) + Eu(hu[66])) : uu[hu[5]][Eu(hu[64]) + Eu(hu[65]) + Eu(hu[66])];
      ou(Uu()[Eu(hu[87])](eu, hu[1], hu[1], uu[hu[29]]), Uu().sq(eu, eu, Uu()[Eu(117)], uu[hu[4]].heading), Uu()[Eu(118)](au, uu[hu[10]].RY), au[hu[2]] = hu[1]);
      const fu = uu[hu[15]][Eu(119) + Eu(120)]();
      if (ou(uu[hu[5]] = uu[hu[1]][Eu(hu[55])][Eu(hu[92]) + Eu(122) + Eu(123) + Eu(124)](ju), uu[hu[27]] = uu[hu[5]] === hu[59] ? uu[hu[1]][Eu(hu[55])][Eu(hu[60]) + Eu(hu[61]) + Eu(hu[62]) + Eu(hu[63])](uu[hu[2]], Eu(hu[67]) + Eu(hu[68])) : uu[hu[5]][Eu(hu[67]) + Eu(hu[68])]), !fu && Uu()[hu[77]](au) && (uu[hu[5]] === hu[59] ? uu[hu[1]][Eu(hu[55])][Eu(hu[60]) + Eu(hu[61]) + Eu(hu[62]) + Eu(hu[63])](uu[hu[2]], Eu(hu[69]) + Eu(hu[70]) + Eu(hu[71]) + Eu(hu[72])) : uu[hu[5]][Eu(hu[69]) + Eu(hu[70]) + Eu(hu[71]) + Eu(hu[72])])) {
        function Ou(...uu) {
          for (ou(uu[hu[12]] = hu[2], uu[hu[5]] = '@iYUmgDNfqlCsVbLJIcHe:Q1,^[`p!~)2?EBxARw={u(;oy7TPzXS3M%4jd&Z#"OrF}K6$<G|_v09W]*>k+nhat/.58', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[36]] = uu[hu[27]].length, uu[hu[74]] = [], uu[hu[29]] = hu[1], uu[hu[9]] = hu[1], uu[hu[51]] = -hu[2]), uu[-hu[73]] = hu[1]; uu[-hu[73]] < uu[hu[36]]; uu[-hu[73]]++)
            if (uu[hu[6]] = uu[hu[5]].indexOf(uu[hu[27]][uu[-hu[73]]]), uu[hu[6]] !== -hu[2])
              if (uu[hu[51]] < hu[1]) uu[hu[51]] = uu[hu[6]];
              else {
                ou(uu[hu[51]] += uu[hu[6]] * hu[28], uu[hu[29]] |= uu[hu[51]] << uu[hu[9]], uu[hu[9]] += (uu[hu[51]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
                do {
                  ou(uu[hu[74]].push(uu[hu[29]] & hu[11]), uu[hu[29]] >>= hu[3], uu[hu[9]] -= hu[3])
                } while (uu[hu[9]] > hu[7]);
                uu[hu[51]] = -hu[2]
              } return uu[hu[51]] > -hu[2] && uu[hu[74]].push((uu[hu[29]] | uu[hu[51]] << uu[hu[9]]) & hu[11]), gu(uu[hu[74]])
        }

        function Yu(...uu) {
          return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Ou(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
        }

        function Du(...uu) {
          uu[hu[12]] = hu[1]
        }
        Yu(hu[20]) in Mu && Du(), ou(Pu(Gu, eu, au), Pu(pu, au, eu), Uu()[Yu(132)](wu, au, pu));
        const du = Uu()[Yu(133)](au),
          ku = Uu()[Yu(134)](eu, au) / uu[hu[29]] / du,
          mu = Math[Yu(hu[81])](ku, hu[1]) + hu[2];
        if (uu[hu[29]] * uu[hu[29]] < Uu()[hu[77]](pu)) {
          function vu(...uu) {
            for (ou(uu[hu[12]] = hu[2], uu[hu[2]] = 'CH#L[PAjFDiuQfhVvy@J}1:(bT5G"?IWq!4*p,9]6^R<mN~`./_g3Ed|xBrXSwe+KYlacUz%=tk;O&2)n0M8Zo7$>{s', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[hu[27]].length, uu[hu[10]] = [], uu[hu[8]] = hu[1], uu[-hu[78]] = hu[1], uu[hu[51]] = -hu[2]), uu[hu[3]] = hu[1]; uu[hu[3]] < uu[hu[4]]; uu[hu[3]]++)
              if (uu[hu[6]] = uu[hu[2]].indexOf(uu[hu[27]][uu[hu[3]]]), uu[hu[6]] !== -hu[2])
                if (uu[hu[51]] < hu[1]) uu[hu[51]] = uu[hu[6]];
                else {
                  ou(uu[hu[51]] += uu[hu[6]] * hu[28], uu[hu[8]] |= uu[hu[51]] << uu[-hu[78]], uu[-hu[78]] += (uu[hu[51]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
                  do {
                    ou(uu[hu[10]].push(uu[hu[8]] & hu[11]), uu[hu[8]] >>= hu[3], uu[-hu[78]] -= hu[3])
                  } while (uu[-hu[78]] > hu[7]);
                  uu[hu[51]] = -hu[2]
                } return uu[hu[51]] > -hu[2] && uu[hu[10]].push((uu[hu[8]] | uu[hu[51]] << uu[-hu[78]]) & hu[11]), gu(uu[hu[10]])
          }

          function Ku(...uu) {
            return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = vu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
          }

          function Vu() {
            const uu = require("big-integer");
            module.exports = class {
              static randomPrime(...Eu) {
                Eu[hu[12]] = hu[2];
                const ju = uu.one.shiftLeft(Eu[hu[1]] - hu[2]),
                  su = uu.one.shiftLeft(Eu[hu[1]]).prev();
                for (; hu[45];) {
                  let Eu = uu.randBetween(ju, su);
                  if (Eu.isProbablePrime(256)) return Eu
                }
              }
              static generate(...Eu) {
                Eu[hu[12]] = hu[2];
                const ju = uu(65537);
                let su, Uu;
                Eu[-hu[79]] = hu[18];
                do {
                  ou(su = this.randomPrime(Eu[hu[1]] / hu[15]), Uu = this.randomPrime(Eu[hu[1]] / hu[15]), Eu[-hu[79]] = uu.lcm(su.prev(), Uu.prev()))
                } while (uu.gcd(ju, Eu[-hu[79]]).notEquals(hu[2]) || su.minus(Uu).abs().shiftRight(Eu[hu[1]] / hu[15] - hu[80]).isZero());
                return {
                  e: ju,
                  n: su.multiply(Uu),
                  d: ju.modInv(Eu[-hu[79]])
                }
              }
              static encrypt(...Eu) {
                return Eu[hu[12]] = hu[4], uu(Eu[hu[1]]).modPow(Eu[hu[15]], Eu[hu[2]])
              }
              static decrypt(...Eu) {
                return Eu[hu[12]] = hu[4], uu(Eu[hu[1]]).modPow(Eu[hu[2]], Eu[hu[15]])
              }
              static encode(...Eu) {
                Eu[hu[12]] = hu[2];
                const ju = Eu[hu[1]].split("").map((uu => uu.charCodeAt())).join("");
                return uu(ju)
              }
              static decode(...uu) {
                uu[hu[12]] = hu[2];
                const Eu = uu[hu[1]].toString();
                uu[hu[2]] = "";
                for (let ju = hu[1]; ju < Eu.length; ju += hu[15]) {
                  let su = Number(Eu.substr(ju, hu[15]));
                  su <= 30 ? (uu[hu[2]] += String.fromCharCode(Number(Eu.substr(ju, hu[4]))), ju++) : uu[hu[2]] += String.fromCharCode(su)
                }
                return uu[hu[2]]
              }
            }
          }
          Yu(136) in Mu && Vu(), Uu()[Ku(137)](eu, eu, pu, mu)
        }
        ou(uu[hu[27]] = (hu[1], Zu.u)(uu[hu[27]], 1, Math[Yu(hu[81])](hu[2], Math[Yu(138)](hu[1], -ku, hu[2] - du / uu[hu[29]]))), Uu()[Yu(hu[88])](eu, eu, wu))
      }
      const Cu = Ju;
      ou(Uu()[Eu(hu[19])](Cu, eu, au), Cu[hu[2]] = hu[1], uu[hu[82]] = Uu()[Eu(141)](Cu)), fu || (uu[hu[82]] *= uu[hu[27]]);
      const bu = uu[hu[9]][Eu(142) + Eu(143) + Eu(hu[73])],
        cu = bu ? Math[Eu(145)](bu, uu[hu[82]]) : uu[hu[82]];
      Uu()[Eu(146) + Eu(147)](Cu, Cu);
      const Nu = uu[hu[7]] !== hu[59] && uu[hu[7]] !== void hu[1] ? uu[hu[7]] : uu[hu[9]][Eu(148) + Eu(149) + Eu(150)];
      if (cu > hu[1]) {
        function ru(uu) {
          var Eu, ju, su, Uu, Zu, Xu, lu;
          for (ou(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = hu[1], Zu = hu[1], Xu = -hu[2]), lu = hu[1]; lu < ju; lu++) {
            var qu = 'vz4@w}0!.9]q?K>YObQC&2raI7X`;^kyDHF%Gx:8m3j~6ic(PT=LBUdR,Es{<*u)Ao|5#NVJg$M1fSph[tnZ+/lW"e_'.indexOf(Eu[lu]);
            if (qu !== -hu[2])
              if (Xu < hu[1]) Xu = qu;
              else {
                ou(Xu += qu * hu[28], Uu |= Xu << Zu, Zu += (Xu & hu[31]) > hu[32] ? hu[33] : hu[34]);
                do {
                  ou(su.push(Uu & hu[11]), Uu >>= hu[3], Zu -= hu[3])
                } while (Zu > hu[7]);
                Xu = -hu[2]
              }
          }
          return Xu > -hu[2] && su.push((Uu | Xu << Zu) & hu[11]), gu(su)
        }

        function Qu(...uu) {
          return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = ru(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
        }

        function iu(...uu) {
          ou(uu[hu[12]] = hu[1], uu[hu[27]] = function(...uu) {
            for (ou(uu[hu[12]] = hu[2], uu[hu[83]] = uu[hu[1]].length, uu[hu[81]] = [], uu[-hu[39]] = hu[1], uu[hu[43]] = hu[1], uu[hu[1]].sort(((uu, Eu) => uu - Eu))), uu[hu[29]] = hu[1]; uu[hu[29]] < uu[hu[83]]; uu[hu[29]]++)
              if (!(uu[hu[29]] > hu[1] && uu[hu[1]][uu[hu[29]]] === uu[hu[1]][uu[hu[29]] - hu[2]]))
                for (ou(uu[-hu[39]] = uu[hu[29]] + hu[2], uu[hu[43]] = uu[hu[83]] - hu[2]); uu[-hu[39]] < uu[hu[43]];)
                  if (uu[hu[1]][uu[hu[29]]] + uu[hu[1]][uu[-hu[39]]] + uu[hu[1]][uu[hu[43]]] < hu[1]) uu[-hu[39]]++;
                  else if (uu[hu[1]][uu[hu[29]]] + uu[hu[1]][uu[-hu[39]]] + uu[hu[1]][uu[hu[43]]] > hu[1]) uu[hu[43]]--;
            else {
              for (uu[hu[81]].push([uu[hu[1]][uu[hu[29]]], uu[hu[1]][uu[-hu[39]]], uu[hu[1]][uu[hu[43]]]]); uu[-hu[39]] < uu[hu[43]] && uu[hu[1]][uu[-hu[39]]] === uu[hu[1]][uu[-hu[39]] + hu[2]];) uu[-hu[39]]++;
              for (; uu[-hu[39]] < uu[hu[43]] && uu[hu[1]][uu[hu[43]]] === uu[hu[1]][uu[hu[43]] - hu[2]];) uu[hu[43]]--;
              ou(uu[-hu[39]]++, uu[hu[43]]--)
            }
            return uu[hu[81]]
          }, console.log(uu[hu[27]]))
        }
        Qu(151) in Mu && iu();
        let Wu = uu[hu[15]][Qu(hu[79]) + Qu(153)] * Nu;
        if (!fu) {
          function Iu(...uu) {
            for (ou(uu[hu[12]] = hu[2], uu[hu[2]] = 'zx4&jKonbd8~5m>pTc)lwMkR,_ODQf<Je[^qL3Ag!a=@CHZ}]V"IS9vNy*rUFi;172uB+P%|YGh/`06XE?:$t#s({W.', uu[hu[84]] = "" + (uu[hu[1]] || ""), uu[hu[85]] = uu[hu[84]].length, uu[hu[10]] = [], uu[hu[8]] = hu[1], uu[hu[9]] = hu[1], uu[-hu[86]] = -hu[2]), uu[hu[3]] = hu[1]; uu[hu[3]] < uu[hu[85]]; uu[hu[3]]++)
              if (uu[hu[54]] = uu[hu[2]].indexOf(uu[hu[84]][uu[hu[3]]]), uu[hu[54]] !== -hu[2])
                if (uu[-hu[86]] < hu[1]) uu[-hu[86]] = uu[hu[54]];
                else {
                  ou(uu[-hu[86]] += uu[hu[54]] * hu[28], uu[hu[8]] |= uu[-hu[86]] << uu[hu[9]], uu[hu[9]] += (uu[-hu[86]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
                  do {
                    ou(uu[hu[10]].push(uu[hu[8]] & hu[11]), uu[hu[8]] >>= hu[3], uu[hu[9]] -= hu[3])
                  } while (uu[hu[9]] > hu[7]);
                  uu[-hu[86]] = -hu[2]
                } return uu[-hu[86]] > -hu[2] && uu[hu[10]].push((uu[hu[8]] | uu[-hu[86]] << uu[hu[9]]) & hu[11]), gu(uu[hu[10]])
          }

          function Fu(...uu) {
            return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Iu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
          }

          function Bu(...uu) {
            uu[hu[12]] = hu[1]
          }
          Fu(154) + "r" in Mu && Bu(), Wu *= uu[hu[15]][Fu(155) + Fu(hu[16])]
        }
        let Su = uu[hu[15]][Qu(157) + Qu(158) + "ss"] * cu;
        if (cu < .3) {
          function Lu(...uu) {
            for (ou(uu[hu[12]] = hu[2], uu[hu[87]] = '.ENUHSlkKBrm7z8d@;1O*CbJvxX|>,M~ft?35{yhP)(i:$DgT"29jFAqR[eV]Yuoa6/wZ<=!`Q_I+WG4c}0%&sn^p#L', uu[hu[27]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[hu[27]].length, uu[hu[10]] = [], uu[hu[14]] = hu[1], uu[hu[30]] = hu[1], uu[-hu[88]] = -hu[2]), uu[hu[89]] = hu[1]; uu[hu[89]] < uu[hu[4]]; uu[hu[89]]++)
              if (uu[hu[6]] = uu[hu[87]].indexOf(uu[hu[27]][uu[hu[89]]]), uu[hu[6]] !== -hu[2])
                if (uu[-hu[88]] < hu[1]) uu[-hu[88]] = uu[hu[6]];
                else {
                  ou(uu[-hu[88]] += uu[hu[6]] * hu[28], uu[hu[14]] |= uu[-hu[88]] << uu[hu[30]], uu[hu[30]] += (uu[-hu[88]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
                  do {
                    ou(uu[hu[10]].push(uu[hu[14]] & hu[11]), uu[hu[14]] >>= hu[3], uu[hu[30]] -= hu[3])
                  } while (uu[hu[30]] > hu[7]);
                  uu[-hu[88]] = -hu[2]
                } return uu[-hu[88]] > -hu[2] && uu[hu[10]].push((uu[hu[14]] | uu[-hu[88]] << uu[hu[30]]) & hu[11]), gu(uu[hu[10]])
          }

          function tu(...uu) {
            return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Lu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
          }

          function xu(...uu) {
            function Eu(...uu) {
              return uu[hu[12]] = hu[2], uu[hu[1]][hu[2]] * hu[91] + (uu[hu[1]][hu[1]] < hu[1] ? hu[90] | uu[hu[1]][hu[1]] : uu[hu[1]][hu[1]])
            }

            function ju(uu) {
              switch (((uu & hu[90]) !== hu[1]) * hu[2] + (uu < hu[1]) * hu[15]) {
                case hu[1]:
                  return [uu % hu[90], Math.trunc(uu / hu[91])];
                case hu[2]:
                  return [uu % hu[90] - hu[90], Math.trunc(uu / hu[91]) + hu[2]];
                case hu[15]:
                  return [((uu + hu[90]) % hu[90] + hu[90]) % hu[90], Math.round(uu / hu[91])];
                case hu[4]:
                  return [uu % hu[90], Math.trunc(uu / hu[91])]
              }
            }
            uu[hu[12]] = hu[1], ou(uu[hu[27]] = Eu([hu[15], hu[10]]), uu[hu[36]] = Eu([hu[2], hu[15]]), uu[-hu[92]] = uu[hu[27]] + uu[hu[36]], uu[hu[4]] = uu[-hu[92]] - uu[hu[36]], uu[hu[10]] = uu[hu[4]] * hu[15], uu[hu[51]] = uu[hu[10]] / hu[15], console.log(ju(uu[-hu[92]])), console.log(ju(uu[hu[4]])), console.log(ju(uu[hu[10]])), console.log(ju(uu[hu[51]])))
          }
          tu(159) + "N" in Mu && xu(), Su *= cu
        }
        if (Wu > Su) {
          function Tu(...uu) {
            for (ou(uu[hu[12]] = hu[2], uu[hu[5]] = 'B0NDgeTXkpmKbWrEofO7|jP;12ic5sz/nMS{*#Ca_4Y)^FQ@lRyd6]G.:Lw!$Ih&ZJU?H,x}%qtVA=(~89v[>`"+u3<', uu[hu[93]] = "" + (uu[hu[1]] || ""), uu[hu[4]] = uu[hu[93]].length, uu[hu[10]] = [], uu[hu[8]] = hu[1], uu[hu[30]] = hu[1], uu[hu[16]] = -hu[2]), uu[hu[3]] = hu[1]; uu[hu[3]] < uu[hu[4]]; uu[hu[3]]++)
              if (uu[hu[94]] = uu[hu[5]].indexOf(uu[hu[93]][uu[hu[3]]]), uu[hu[94]] !== -hu[2])
                if (uu[hu[16]] < hu[1]) uu[hu[16]] = uu[hu[94]];
                else {
                  ou(uu[hu[16]] += uu[hu[94]] * hu[28], uu[hu[8]] |= uu[hu[16]] << uu[hu[30]], uu[hu[30]] += (uu[hu[16]] & hu[31]) > hu[32] ? hu[33] : hu[34]);
                  do {
                    ou(uu[hu[10]].push(uu[hu[8]] & hu[11]), uu[hu[8]] >>= hu[3], uu[hu[30]] -= hu[3])
                  } while (uu[hu[30]] > hu[7]);
                  uu[hu[16]] = -hu[2]
                } return uu[hu[16]] > -hu[2] && uu[hu[10]].push((uu[hu[8]] | uu[hu[16]] << uu[hu[30]]) & hu[11]), gu(uu[hu[10]])
          }

          function Hu(...uu) {
            return uu[hu[12]] = hu[2], typeof lu[uu[hu[1]]] === hu[17] ? lu[uu[hu[1]]] = Tu(qu[uu[hu[1]]]) : lu[uu[hu[1]]]
          }

          function Au() {
            console.log((function(...uu) {
              for (ou(uu[hu[12]] = hu[2], uu[-hu[95]] = uu[hu[1]].length, uu[hu[15]] = [], uu[-hu[96]] = hu[1], uu[-hu[35]] = hu[1], uu[hu[1]].sort(((uu, Eu) => uu - Eu))), uu[hu[8]] = hu[1]; uu[hu[8]] < uu[-hu[95]]; uu[hu[8]]++)
                if (!(uu[hu[8]] > hu[1] && uu[hu[1]][uu[hu[8]]] === uu[hu[1]][uu[hu[8]] - hu[2]]))
                  for (ou(uu[-hu[96]] = uu[hu[8]] + hu[2], uu[-hu[35]] = uu[-hu[95]] - hu[2]); uu[-hu[96]] < uu[-hu[35]];)
                    if (uu[hu[1]][uu[hu[8]]] + uu[hu[1]][uu[-hu[96]]] + uu[hu[1]][uu[-hu[35]]] < hu[1]) uu[-hu[96]]++;
                    else if (uu[hu[1]][uu[hu[8]]] + uu[hu[1]][uu[-hu[96]]] + uu[hu[1]][uu[-hu[35]]] > hu[1]) uu[-hu[35]]--;
              else {
                for (uu[hu[15]].push([uu[hu[1]][uu[hu[8]]], uu[hu[1]][uu[-hu[96]]], uu[hu[1]][uu[-hu[35]]]]); uu[-hu[96]] < uu[-hu[35]] && uu[hu[1]][uu[-hu[96]]] === uu[hu[1]][uu[-hu[96]] + hu[2]];) uu[-hu[96]]++;
                for (; uu[-hu[96]] < uu[-hu[35]] && uu[hu[1]][uu[-hu[35]]] === uu[hu[1]][uu[-hu[35]] - hu[2]];) uu[-hu[35]]--;
                ou(uu[-hu[96]]++, uu[-hu[35]]--)
              }
              return uu[hu[15]]
            }))
          }
          Hu(160) in Mu && Au(), Wu = Su
        }
        ou(Uu()[Qu(161)](Cu, Cu, Wu), uu[hu[10]][Qu(162) + Qu(163)](Cu))
      }
      uu[hu[10]][Eu(164) + hu[97]] = uu[hu[15]][Eu(165) + Eu(hu[57]) + hu[97]] * (fu ? su : Xu)
    }
  },
  38043: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu,
      d: () => lu
    });
    var su = ju(38048),
      Uu = ju(1955);
    const Zu = 2,
      Xu = 1,
      lu = {
        pl: 1,
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

    function qu(uu, Eu, ju, lu, qu, fu, Cu) {
      if (qu.speed) return (0, su.d)(Eu, ju, lu, qu, fu, Cu, uu), void(qu.ticksToReachMaxIdleFriction = Zu);
      const bu = lu.isOnGround(),
        cu = Eu.bloxd.getSyncedClientOptions(Eu.bloxd.getPlayerReader(ju)),
        Nu = null === cu ? Eu.bloxd.getClientPredictedOption(ju, "groundFrictionScale") : cu.groundFrictionScale,
        Ou = null === cu ? Eu.bloxd.getClientPredictedOption(ju, "airFrictionScale") : cu.airFrictionScale,
        Yu = bu ? Nu : Ou,
        hu = Math.max(Xu, Yu),
        Du = qu.ticksToReachMaxIdleFriction / Zu,
        gu = (0, Uu.u)(hu, Yu, Du);
      fu.friction = uu.standingFriction * ((null === cu ? Eu.bloxd.getClientPredictedOption(ju, "airMomentumConservation") : cu.airMomentumConservation) ? gu : Yu), qu.ticksToReachMaxIdleFriction > 0 && qu.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);