export const id = 219;
export const ids = [219];
export const modules = {
  38241: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Su
    });
    var Eu = yu(212),
      Ku = yu(37382);
    const Qu = 1.2,
      mu = {
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
        Pm: .5,
        hRu: !1
      },
      Ju = {
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
        Pm: .5,
        hRu: !1
      },
      Nu = {
        physicsBodyDimensions: {
          width: Eu.f.DW,
          height: Eu.f.UW
        },
        hitBoxDimensions: {
          width: Eu.f.DW + .4,
          height: Eu.f.UW + .6
        },
        eyeHeight: Eu.f.UW * Eu.f.playerEyeToHeightRatio,
        rideHeight: Eu.f.UW - .3,
        Pm: .5,
        hRu: !1
      },
      Xu = {
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
        Pm: .5,
        hRu: !1
      },
      Vu = {
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
        Pm: .5,
        hRu: !1
      },
      ru = {
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
        Pm: .5,
        hRu: !1
      },
      Bu = {
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
        Pm: .5,
        hRu: !1
      },
      xu = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Eu.f.DW,
            height: Eu.f.UW
          },
          hitBoxDimensions: {
            width: Eu.f.DW + .4,
            height: Eu.f.UW + .6
          },
          eyeHeight: Eu.f.UW * Eu.f.playerEyeToHeightRatio,
          rideHeight: Eu.f.UW - .1,
          Pm: Ku.c.Pm,
          hRu: !0
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
        },
        Camel: {
          modelScale: Qu,
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
        },
        "Cave Golem": mu,
        "Draugr Zombie": {
          ...Nu,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Nu,
        "Frost Golem": mu,
        "Frost Zombie": {
          ...Nu,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Nu,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Eu.f.DW,
            height: Eu.f.UW
          },
          hitBoxDimensions: {
            width: Eu.f.DW + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Pm: .5,
          hRu: !1
        },
        Wolf: Xu,
        Bear: Vu,
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
          Pm: .5,
          hRu: !1
        },
        Stag: ru,
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
          Pm: .5,
          hRu: !1
        },
        Gorilla: Bu,
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
          Pm: .5,
          hRu: !1
        },
        "Draugr Huntress": Nu,
        "Magma Golem": mu,
        "Spirit Golem": mu,
        "Spirit Wolf": Xu,
        "Spirit Bear": Vu,
        "Spirit Stag": ru,
        "Spirit Gorilla": Bu,
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Eu.f.DW,
            height: Eu.f.UW
          },
          hitBoxDimensions: {
            width: Eu.f.DW + .4,
            height: Eu.f.UW + .6
          },
          eyeHeight: Eu.f.UW * Eu.f.playerEyeToHeightRatio,
          rideHeight: Eu.f.UW - .1,
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Eu.f.DW,
            height: Eu.f.UW
          },
          hitBoxDimensions: {
            width: Eu.f.DW + .4,
            height: Eu.f.UW + .6
          },
          eyeHeight: Eu.f.UW * Eu.f.playerEyeToHeightRatio,
          rideHeight: Eu.f.UW - .1,
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
        },
        Zombie: {
          ...Nu,
          defaultPose: "zombie"
        },
        Skeleton: Nu,
        Mummy: {
          ...Nu,
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
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
          Pm: .5,
          hRu: !1
        },
        "Iron Guardian": Ju,
        "Gold Guardian": Ju,
        "Diamond Guardian": Ju,
        "Moonstone Guardian": Ju,
        "Iron Goofy Golem": Ju,
        "Gold Goofy Golem": Ju,
        "Diamond Goofy Golem": Ju,
        "Moonstone Goofy Golem": Ju,
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
          Pm: .5,
          hRu: !1
        }
      };

    function Su(uu) {
      return xu[uu]
    }
  },
  36807: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
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
  37391: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(352),
      Ku = yu.n(Eu),
      Qu = yu(1823);
    let mu;
    var Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu;
    const Tu = ["b", 0, 1, 8, 3, 150, 9, 7, 5, 6, 4, 255, "length", 2, 48, "a", "undefined", void 0, 60, 191, 63, "fromCodePoint", 12, "push", 209, 99, 239, 98, "i", 91, 161, 169, 8191, 88, 13, 14, "h", 121, "d", 104, 116, 117, 118, "e", null, 112, 113, 114, 115, 119, 120, 108, 109, 110, 111, 127, 128, 129, 130, 131, 132, 11, "hu", 34, 106, 107, 235, 59, 222, 136, 223, 69, 219, "g", 183, 168, 74, 192, 55, 86, "c", 68, 33554432, 67108864, 163, 80, 175, "f", "on"];

    function Wu(...uu) {
      return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = function(...uu) {
        for (Iu(uu[Tu[12]] = Tu[2], uu[Tu[5]] = 'Oil8gN</BAjTJFkw4|xne9RsCf>:#dvIrL(%m$6^HV!]Gto?b@hqX2K")=51[37}M`,EaUcp_SPY.Z;WDy&u+z~*0{Q', uu[Tu[0]] = "" + (uu[Tu[1]] || ""), uu[Tu[4]] = uu[Tu[0]].length, uu[Tu[10]] = [], uu[Tu[8]] = Tu[1], uu[Tu[9]] = Tu[1], uu[Tu[7]] = -Tu[2]), uu[Tu[3]] = Tu[1]; uu[Tu[3]] < uu[Tu[4]]; uu[Tu[3]]++)
          if (uu[Tu[6]] = uu[Tu[5]].indexOf(uu[Tu[0]][uu[Tu[3]]]), uu[Tu[6]] !== -Tu[2])
            if (uu[Tu[7]] < Tu[1]) uu[Tu[7]] = uu[Tu[6]];
            else {
              Iu(uu[Tu[7]] += uu[Tu[6]] * Tu[29], uu[Tu[8]] |= uu[Tu[7]] << uu[Tu[9]], uu[Tu[9]] += (uu[Tu[7]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
              do {
                Iu(uu[Tu[10]].push(uu[Tu[8]] & Tu[11]), uu[Tu[8]] >>= Tu[3], uu[Tu[9]] -= Tu[3])
              } while (uu[Tu[9]] > Tu[7]);
              uu[Tu[7]] = -Tu[2]
            } return uu[Tu[7]] > -Tu[2] && uu[Tu[10]].push((uu[Tu[8]] | uu[Tu[7]] << uu[Tu[9]]) & Tu[11]), ju(uu[Tu[10]])
      }(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
    }

    function ju(...uu) {
      return uu[Tu[12]] = Tu[2], typeof Vu !== Tu[16] && Vu ? (new Vu).decode(new ru(uu[Tu[1]])) : typeof Bu !== Tu[16] && Bu ? Bu.from(uu[Tu[1]]).toString("utf-8") : pu(uu[Tu[1]])
    }

    function Hu() {}
    Iu(Ju = {}, Nu = ['h<^@"W#DY`DyWl', "K>,B7b%dA`iK^cdm$K<.(1rl", "y$tj}ZpUeK;Bi", "p!&qX$EFZ2(9lN", "N}FI>K//*Mpck&IvBo52=ZLnN", "L[.h>1Ti", "qbt/%z]%7xiY?k)#^<n_S7qY|}TW44*#", "p|mPh)U/S78_A_VIx$^gdzl!jeFW;y^xUI_K(@|2<", "T@}gQtnF+=9Wpkk:7K52#%{/v9SEp:%vF[mjn;i*NFGD)4xH+b{rCXYi%J1ri", "i]Gj6D|FnKf<7F.6NK6.4mFF#`Bb41Z:^KMqX5I=#7bXb8|^u8aN=o7oxJ", '(<bKD"9dG`)S*8q#o]5r(%oJQ|+P5Fh:+ci', 'OdpSnhf%BF_Zd_C(6$cg0Xzz&J"', "LKFI?$[o{5fji", "^qMSUmHHLx", "A%5rH@)v.k,)t4Tnfs+Zm3=V71X)48*d:K$/n={%/", 'Xq}<"}P5|=e$euHx*k1B}^PJ3xmWccJeE#uB', "!s)@,ozd}w[ZRkg6wJsL?5|%.7YiV_Vn!]+2H@MD([nW2@O]", 'sr_K<"LVm=Po+pT^+tLr>uL}w9WRwl', '8sENy"BCEA:(C?HnXp@:x6{|Vkl;:?hH3keZG)(v.TEwdg', "!`xqxUQa|=}XI6`I<pVr?5pF4A0di", "]aIA{6gmP`AaZb|Hk@QB|6w?$Mjj{D]fy$U>*.uzyA]|whk>s[+dfuu%Bj", "iJfK$3;5zn", 'Pt4LPyy%"5LC*>i]O]H@p2|fy[lYt3A', "FgMK=^HX3xe.g:&(", "9e*#9p6v~F0dwkh(", "IHqd<2gvLJs5Y>/$`HtI<~|2t)Oq53!f<rQB", "O@A_?qT}He%:Vg", "!aBL(3i2]|E9Dw$xZI9Is6CXT`WyAm^n&q0<", "CqZXxm:2hAL7:>&#ZO", '*8|qd1P~.)+N/>%m(q".#z!JhKI_f$/6xi', 'OA"S])N2]`d:}&.^ab|K"}I%8', "|ofrH&TUPe8Fi", "tp/<dH(XP|;i:&DHnpzIR", 'NP;gyu*=WBnYUf?>4JHAl~BBx=#b/hmvDS"A]SO', "NafK`bNfG7r(!Fb>%A4vc2Q~r,?/mupfHq)<]q)5Ye#", "y8oX>=Go#kyN:ldmd[!dg7O", 'Y1"X=q@iN5m9<$p6b8^AxXBC<', "v`h2IS3sNKFjr1axpA|YXZO", "pK?.w=Til}<`hf=VO9?g&7Z=Iw4$j$q:9ab<6zLnkx.Z):I!;O", "E$a>=WxC%[2.:h^f3(0A&Xmx&KeqEk/", '9>UjD=;<@KTWq:MxfA$PG%NfYT9"NmJeOPfKWU)l', 'r]o#L1KoSe&2)wlm%aw.+XP<Q`6.Gp~R/aU"YbZqnJk|*6AI:oxZC=O', 'X8@</[Y/?)J:7@"VQ2qZNUvJ}J?,M1LC0`<A]c%/Sk:UM:#%@<sSm)=Fr,"', "c<o.[Zqd)F=Z@3{%6peI*p%/x}s8DwlC@KmjSWO", "4pS<G%J5,}XU3@rx!s_Kv", "Ja7Ak=Zi", "ex!rR=7C%JCjofIs|[5Z^%Y/Yk1k63G6+S~/L1=Fa=y[hFX#KAUP^a7<(n)", 'F>YBG30(G1G.$f*#4oPN/"XxG`Dch37!)K8N;tqiV5)Xzg', '`A|Y25?/@xK@"kN$*e7#NW!XN', "e<)<?3B~A|", ",K9PkUIV*5N?:h4e%d|;zh%F?2Q>i", "4JYd9uXH8=|(s6LC^=CLo&rxpMzEg8", ":deZqq3dh=0ZgwFnpK4L&m*i", ';cD<rptznn:7@bJ^!]LK$S^US|2fym"%QO', '<KN"_7#BYBycL@9:t$!Y%%L=0eH', "b<9Pc7>X`w(k|_`CDO", '^bK@)5QJ65{rt_O!kp".=oE=GTbkJ^F', "hIrv<[0obAgA~UG^C>YBnu0JlA,cWk8fS7gNshbx=5KDZg.^P!NjR", "]PB<m3z=Fk<33_:%p|aNfXV=Z1I/5fGna$Zp$zyi", "^KbKh$9Vy=T8m8{(C`CqmHHX1|Ab.1%vh$s#LaHX)`UD:p*V@t2I9p]F,A", "(PiqCpRXJ9gYD%An<r_S#%sd/", "AaeZhcoXgKIew&x(?>E2OW<X*FN57$h(/@tg", "Yto#fz6XY|`xew!^b`4K_yjoMwv:08", 'kJZ>N(75&AYZVFC!$s~Im1g!!1qT;yK(Js7"fu_5HFm', '"(!qL;DHCeJ_4u(C?7[/Jb0(2K)1Lg)(fHqdW6Wd.2PPif}sTrE2J~^nl}C', "L]gZXqiF_Fax}kGfBrhqgmL?kwr8i", "Zt?A_7q%<", "^PeP[[O", '>];g&t`="5Jj}kt:;c@:Gcbo]k_o}cm6p`IKSUzzkxr.DgOx%J!q[ZyV8', "Z`X2{zuVu[WE^?vmgx]d;b6X(J0ZJwUn5>%do&s2nJ%8I>BfsqHAxu=i", "N[wA6@qiM=X/G8zH/=V:zzCo{|", 't|Z>ZyGl3B%_e:Pf}1#"^zQoG7C"IlFn&($Ich/V@A', "Axo#cWYdtTW2t_~H>i", '%>R"C1}=32*Zj&UI,H^@qqb5<', "$$KI2_s?zK><o$rmWIPr7+oo7)p@&UOv_k+2SWcJ!|T_4_D^bI*A&=L=<", 'Pq,r/":%`wGU,FRVo<~/f', ";tOY*;(C;x.D#1Ev(A6geHhx%MTeKf*VP`C;Aboo7xWR6${%`bO;Qt)5GT", "$doX9hdVXA71UbQRo$BLFbcXO9HkwkOmV$!_ocFFN", "P!p.U(u%Q7jKk3c65k@qYuz|L}#C|_4^wJ{ql7hx/", "N[I.Fhf?o1%_|N8||x8", '4xt"7^}q*5cf=4`Cq<"#*U2/?)]', "M<uZ_bCXgK7S%>3d(KgN/W9d*e2UjyOmTob@C", "a8.>Eo.o%n*w08[%TsgjT~l!;2:|e?<$>`3#D6l!EM|b24#d`Ap#~=bl", "se4L)_qFD=IU[g", "spLvo$eM0eA57F`s%>^SM[(M:`&)d4K%wK6.B7V?)F8Aa:K(M1=<}29d8", "cb7IE_U=;xf_$g#see)S<ygm5|/qO:MC;<GZb}1V}x_cw8", 'S`XP{1Af;xseh@_>6JFI=^C~,[)@Zm,xqA}gl7SdLJk&4p:VBp7"eh!5aKq9i', '}K~XM+AYM[V"^&K##KUP3(nFk9QZT>hH0Bc""&kCMA', 'Sq/;,7:?$57)<y%xo7o"q$7l', 'eeAYM^6x]`]U:k>!e=>Yl~#C])~ie:"d;(6I1^>l_F%bM:`C8x8rx', 'HbU#C6|UnA7oewb(u(W.n6cJI}yx^l5d?H?A~X_C3BLCt4P^A}<"?qWi#`G', "dw+2[ZP(=7SdU_y:6qP2dpTnLwPD>3rsXJL<4y2i&=_%lN]fMbi", ']==B)[]?3B}cWu>d0`w.?aEU/"r`6FU$PbH@FmMP~5?.Xg{Rx<*AF', "@8pAfX`d&wf", "{tE2CHPCF9i$]l", '!dB<a"5PWwEfaw#v', '6aHSb+N28[cc$$T^Q2qd&6CBV`5kl$$C{(6/@axo<MQPr_(CVp7@]Y8n/j"', "Z(TrzuEsf|EcB:{#P!_K/m[P[kuc4pJ", "t]pSR;joPkgWxh7v~|zhx", ",q6IZyel", "UkSy1IE8", "PawZ", "vXSZ5h6", "Pk20", "i:%skWO", '@gPXRi<"', 'Qg,nIv<"', "gg_X", '@g){0aS"', 'tg`i<i5"', '(p){6[K"', "47b{5", '@g){<i5"', '(pPXQ.b"', 'S8$~4v@"', '.($44[S"', 'W=*4Z{@"', '#=vi{j5"', 'np{2|):"', 'V8,n3.5"', "4Evik{f/", "mHH4G", "dgPX", "_g)2c", "87V4d", 'n}q=PKT"', "*krsG", 'V8=4o!R"', "4s=~dvO", 'V8=4G[Q"', "(p$46i7/", 'np+4A.}"', "dEvik{O", "z:M!", "@^?}", "o3d,", "6.?}", "B.KG~", "8{2,", "1*7!", "`k+~", 'Igb{[j8"', '/>&XTmy"', 'Q<Wijj<"', "+sz~", "u8rs", '#7=4u):"', "*2z~", 'Q7z4aib"', '7Ero7.R"', 'Z#5X.j5"', "q:W`A.O", "uyYV!.Im", "HlYP", "NG#V}Ewm", 'Oiv6{"l', "s@i(CEzm", "aGYVjtxm", 'Ak4#"YSA', "gl#P7TD", "3!]lu<.h", "E#4o}", '!=vi{j5"', 'Q7z4+{;"']), Iu(Xu = function(...uu) {
      Iu(uu[Tu[12]] = Tu[1], uu[Tu[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], uu[Tu[2]] = Tu[17], uu[Tu[13]] = []);
      try {
        Iu(uu[Tu[2]] = Object, uu[Tu[13]][Tu[23]]("".__proto__.constructor.name))
      } catch (Nu) {}
      uu: for (uu[-Tu[14]] = Tu[1]; uu[-Tu[14]] < uu[Tu[15]][Tu[12]]; uu[-Tu[14]]++) try {
        for (uu[Tu[2]] = uu[Tu[15]][uu[-Tu[14]]](), uu[Tu[10]] = Tu[1]; uu[Tu[10]] < uu[Tu[13]][Tu[12]]; uu[Tu[10]]++)
          if (typeof uu[Tu[2]][uu[Tu[13]][uu[Tu[10]]]] === Tu[16]) continue uu;
        return uu[Tu[2]]
      } catch (Nu) {}
      return uu[Tu[2]] || this
    }() || {}, Vu = Xu.TextDecoder, ru = Xu.Uint8Array, Bu = Xu.XS, xu = Xu.String || String, Su = Xu.Array || Array, pu = function(...uu) {
      return Iu(uu[Tu[12]] = Tu[1], uu[-Tu[24]] = new Su(Tu[56]), uu[Tu[2]] = xu[Tu[21]] || xu.fromCharCode, uu[-Tu[18]] = []),
        function(...Ru) {
          for (Iu(Ru[Tu[12]] = Tu[2], Ru[Tu[2]] = Tu[17], Ru[Tu[13]] = Tu[17], Ru[Tu[4]] = Ru[Tu[1]][Tu[12]], uu[-Tu[18]][Tu[12]] = Tu[1]), Ru[Tu[19]] = Tu[1]; Ru[Tu[19]] < Ru[Tu[4]];) Iu(Ru[Tu[13]] = Ru[Tu[1]][Ru[Tu[19]]++], Ru[Tu[13]] <= Tu[55] ? Ru[Tu[2]] = Ru[Tu[13]] : Ru[Tu[13]] <= Tu[70] ? Ru[Tu[2]] = (31 & Ru[Tu[13]]) << Tu[9] | Ru[Tu[1]][Ru[Tu[19]]++] & Tu[20] : Ru[Tu[13]] <= Tu[26] ? Ru[Tu[2]] = (15 & Ru[Tu[13]]) << Tu[22] | (Ru[Tu[1]][Ru[Tu[19]]++] & Tu[20]) << Tu[9] | Ru[Tu[1]][Ru[Tu[19]]++] & Tu[20] : xu[Tu[21]] ? Ru[Tu[2]] = (Ru[Tu[13]] & Tu[7]) << 18 | (Ru[Tu[1]][Ru[Tu[19]]++] & Tu[20]) << Tu[22] | (Ru[Tu[1]][Ru[Tu[19]]++] & Tu[20]) << Tu[9] | Ru[Tu[1]][Ru[Tu[19]]++] & Tu[20] : (Ru[Tu[2]] = Tu[20], Ru[Tu[19]] += Tu[4]), uu[-Tu[18]][Tu[23]](uu[-Tu[24]][Ru[Tu[2]]] || (uu[-Tu[24]][Ru[Tu[2]]] = uu[Tu[2]](Ru[Tu[2]]))));
          return uu[-Tu[18]].join("")
        }
    }());
    const du = Ku()[Wu(Tu[25])](),
      bu = Ku()[Wu(Tu[25])](),
      Cu = Ku()[Wu(Tu[25])](),
      ku = Ku()[Wu(Tu[25])](),
      eu = Ku()[Wu(Tu[25])](),
      Au = Ku()[Wu(Tu[25])](),
      Du = Ku()[Wu(Tu[25])](),
      Mu = (...uu) => {
        function Ru(...uu) {
          return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = function(...uu) {
            for (Iu(uu[Tu[12]] = Tu[2], uu[-Tu[27]] = '6[8q>K,AZX0mibF}#ujJV2/4!LBPY95NylEC3Ue*R^WkQz~1c$+Snd(?=]._s&xrvT"@IOph<MaHDf{o:%;wg`|)t7G', uu[Tu[0]] = "" + (uu[Tu[1]] || ""), uu[Tu[26]] = uu[Tu[0]].length, uu[Tu[10]] = [], uu[-Tu[30]] = Tu[1], uu[-Tu[31]] = Tu[1], uu[Tu[7]] = -Tu[2]), uu[Tu[3]] = Tu[1]; uu[Tu[3]] < uu[Tu[26]]; uu[Tu[3]]++)
              if (uu[Tu[28]] = uu[-Tu[27]].indexOf(uu[Tu[0]][uu[Tu[3]]]), uu[Tu[28]] !== -Tu[2])
                if (uu[Tu[7]] < Tu[1]) uu[Tu[7]] = uu[Tu[28]];
                else {
                  Iu(uu[Tu[7]] += uu[Tu[28]] * Tu[29], uu[-Tu[30]] |= uu[Tu[7]] << uu[-Tu[31]], uu[-Tu[31]] += (uu[Tu[7]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
                  do {
                    Iu(uu[Tu[10]].push(uu[-Tu[30]] & Tu[11]), uu[-Tu[30]] >>= Tu[3], uu[-Tu[31]] -= Tu[3])
                  } while (uu[-Tu[31]] > Tu[7]);
                  uu[Tu[7]] = -Tu[2]
                } return uu[Tu[7]] > -Tu[2] && uu[Tu[10]].push((uu[-Tu[30]] | uu[Tu[7]] << uu[-Tu[31]]) & Tu[11]), ju(uu[Tu[10]])
          }(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
        }
        uu[Tu[12]] = Tu[4];
        const yu = Au;
        return Ku()[Ru(100) + Ru(101)](yu, uu[Tu[13]]), Ku()[Ru(102)](uu[Tu[1]], yu, Ku()[Ru(103)](yu, uu[Tu[2]]))
      };

    function Iu() {
      Iu = function() {}
    }
    mu = (uu, Ru, yu, Eu, mu, Xu, Vu, ru) => {
      function Bu(...uu) {
        return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = function(...uu) {
          for (Iu(uu[Tu[12]] = Tu[2], uu[Tu[2]] = 'O/"H>_,e~sXx<?tgRN@cbPDI;G8*50d`43:VQ#SLpAB7|(TuyhK=]&}nlE9+kUZYrF1$)!Wv%o2fi{[^.jmzwaJCM6q', uu[Tu[13]] = "" + (uu[Tu[1]] || ""), uu[-Tu[18]] = uu[Tu[13]].length, uu[Tu[38]] = [], uu[Tu[8]] = Tu[1], uu[Tu[9]] = Tu[1], uu[Tu[37]] = -Tu[2]), uu[Tu[36]] = Tu[1]; uu[Tu[36]] < uu[-Tu[18]]; uu[Tu[36]]++)
            if (uu[Tu[28]] = uu[Tu[2]].indexOf(uu[Tu[13]][uu[Tu[36]]]), uu[Tu[28]] !== -Tu[2])
              if (uu[Tu[37]] < Tu[1]) uu[Tu[37]] = uu[Tu[28]];
              else {
                Iu(uu[Tu[37]] += uu[Tu[28]] * Tu[29], uu[Tu[8]] |= uu[Tu[37]] << uu[Tu[9]], uu[Tu[9]] += (uu[Tu[37]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
                do {
                  Iu(uu[Tu[38]].push(uu[Tu[8]] & Tu[11]), uu[Tu[8]] >>= Tu[3], uu[Tu[9]] -= Tu[3])
                } while (uu[Tu[9]] > Tu[7]);
                uu[Tu[37]] = -Tu[2]
              } return uu[Tu[37]] > -Tu[2] && uu[Tu[38]].push((uu[Tu[8]] | uu[Tu[37]] << uu[Tu[9]]) & Tu[11]), ju(uu[Tu[38]])
        }(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
      }
      const xu = uu[Bu(Tu[39])][Bu(105) + Bu(Tu[64]) + Bu(Tu[65])](Ru);
      let Su = uu[Bu(Tu[39])][Bu(Tu[51]) + Bu(Tu[52]) + Bu(Tu[53]) + Bu(Tu[54])](xu);
      const pu = Su === Tu[44] ? uu[Bu(Tu[39])][Bu(Tu[45]) + Bu(Tu[46]) + Bu(Tu[47]) + Bu(Tu[48])](Ru, Bu(Tu[40]) + Bu(Tu[41]) + Bu(Tu[42]) + Tu[43]) : Su[Bu(Tu[40]) + Bu(Tu[41]) + Bu(Tu[42]) + Tu[43]],
        Wu = Su === Tu[44] ? uu[Bu(Tu[39])][Bu(Tu[45]) + Bu(Tu[46]) + Bu(Tu[47]) + Bu(Tu[48])](Ru, Bu(Tu[49]) + Bu(Tu[50]) + Bu(Tu[37])) : Su[Bu(Tu[49]) + Bu(Tu[50]) + Bu(Tu[37])];
      Iu(Ku()[Bu(122)](du, Tu[1], Tu[1], Xu), Ku().pr(du, du, Ku()[Bu(123)], Eu.heading), Ku()[Bu(124)](Du, mu.JT), Du[Tu[2]] = Tu[1]);
      const Au = yu[Bu(125) + Bu(126)]();
      Su = uu[Bu(Tu[39])][Bu(Tu[51]) + Bu(Tu[52]) + Bu(Tu[53]) + Bu(Tu[54])](xu);
      let Gu = Su === Tu[44] ? uu[Bu(Tu[39])][Bu(Tu[45]) + Bu(Tu[46]) + Bu(Tu[47]) + Bu(Tu[48])](Ru, Bu(Tu[55]) + Bu(Tu[56])) : Su[Bu(Tu[55]) + Bu(Tu[56])];
      if (!Au && Ku()[Tu[62]](Du) && (Su === Tu[44] ? uu[Bu(Tu[39])][Bu(Tu[45]) + Bu(Tu[46]) + Bu(Tu[47]) + Bu(Tu[48])](Ru, Bu(Tu[57]) + Bu(Tu[58]) + Bu(Tu[59]) + Bu(Tu[60])) : Su[Bu(Tu[57]) + Bu(Tu[58]) + Bu(Tu[59]) + Bu(Tu[60])])) {
        function gu(...uu) {
          for (Iu(uu[Tu[12]] = Tu[2], uu[Tu[2]] = '#8(;{><0!},+*%c^p_DwAdX@yP.oJ1Tz[Rut5ELn"sx3VSQ6&=k$a2]Zi9eM:qj|?I~lhmN`KGB7f)rbWHOFUgvYC/4', uu[Tu[13]] = "" + (uu[Tu[1]] || ""), uu[Tu[4]] = uu[Tu[13]].length, uu[-Tu[37]] = [], uu[Tu[43]] = Tu[1], uu[Tu[9]] = Tu[1], uu[Tu[7]] = -Tu[2]), uu[-Tu[61]] = Tu[1]; uu[-Tu[61]] < uu[Tu[4]]; uu[-Tu[61]]++)
            if (uu[Tu[28]] = uu[Tu[2]].indexOf(uu[Tu[13]][uu[-Tu[61]]]), uu[Tu[28]] !== -Tu[2])
              if (uu[Tu[7]] < Tu[1]) uu[Tu[7]] = uu[Tu[28]];
              else {
                Iu(uu[Tu[7]] += uu[Tu[28]] * Tu[29], uu[Tu[43]] |= uu[Tu[7]] << uu[Tu[9]], uu[Tu[9]] += (uu[Tu[7]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
                do {
                  Iu(uu[-Tu[37]].push(uu[Tu[43]] & Tu[11]), uu[Tu[43]] >>= Tu[3], uu[Tu[9]] -= Tu[3])
                } while (uu[Tu[9]] > Tu[7]);
                uu[Tu[7]] = -Tu[2]
              } return uu[Tu[7]] > -Tu[2] && uu[-Tu[37]].push((uu[Tu[43]] | uu[Tu[7]] << uu[Tu[9]]) & Tu[11]), ju(uu[-Tu[37]])
        }

        function cu(...uu) {
          return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = gu(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
        }
        Iu(Mu(bu, du, Du), Mu(Cu, Du, du), Ku()[cu(133)](ku, Du, Cu));
        const Lu = Ku()[cu(134)](Du),
          zu = Ku()[cu(135)](du, Du) / Xu / Lu,
          Fu = Math[cu(Tu[69])](zu, Tu[1]) + Tu[2];
        if (Xu * Xu < Ku()[Tu[62]](Cu)) {
          function wu(...uu) {
            for (Iu(uu[Tu[12]] = Tu[2], uu[Tu[15]] = 'e2AHnK0wtgG]Vv8.@k4|,a/Bq5Wo~E)[=h<rf?L>3%ys*^Jl{+mFQiO7du"IRT1XSYUCj:xPz`pZ9DbM};&$c_N!6(#', uu[Tu[63]] = "" + (uu[Tu[1]] || ""), uu[-Tu[66]] = uu[Tu[63]].length, uu[-Tu[68]] = [], uu[Tu[8]] = Tu[1], uu[Tu[64]] = Tu[1], uu[Tu[67]] = -Tu[2]), uu[Tu[65]] = Tu[1]; uu[Tu[65]] < uu[-Tu[66]]; uu[Tu[65]]++)
              if (uu[Tu[28]] = uu[Tu[15]].indexOf(uu[Tu[63]][uu[Tu[65]]]), uu[Tu[28]] !== -Tu[2])
                if (uu[Tu[67]] < Tu[1]) uu[Tu[67]] = uu[Tu[28]];
                else {
                  Iu(uu[Tu[67]] += uu[Tu[28]] * Tu[29], uu[Tu[8]] |= uu[Tu[67]] << uu[Tu[64]], uu[Tu[64]] += (uu[Tu[67]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
                  do {
                    Iu(uu[-Tu[68]].push(uu[Tu[8]] & Tu[11]), uu[Tu[8]] >>= Tu[3], uu[Tu[64]] -= Tu[3])
                  } while (uu[Tu[64]] > Tu[7]);
                  uu[Tu[67]] = -Tu[2]
                } return uu[Tu[67]] > -Tu[2] && uu[-Tu[68]].push((uu[Tu[8]] | uu[Tu[67]] << uu[Tu[64]]) & Tu[11]), ju(uu[-Tu[68]])
          }

          function Zu(...uu) {
            return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = wu(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
          }
          Ku()[Zu(137)](du, du, Cu, Fu)
        }
        Iu(Gu = (0, Qu.o)(Gu, 1, Math[cu(Tu[69])](Tu[2], Math[cu(138)](Tu[1], -zu, Tu[2] - Lu / Xu))), Ku()[cu(139)](du, du, ku))
      }
      const Uu = eu;
      Iu(Ku()[Bu(140)](Uu, du, Du), Uu[Tu[2]] = Tu[1]);
      let nu = Ku()[Bu(141)](Uu);
      Au || (nu *= Gu);
      const su = Vu[Bu(142) + Bu(143) + Bu(144)],
        tu = su ? Math[Bu(145)](su, nu) : nu;
      Ku()[Bu(146) + Bu(147)](Uu, Uu);
      const lu = ru !== Tu[44] && void 0 !== ru ? ru : Vu[Bu(148) + Bu(149) + Bu(Tu[5]) + Bu(151)];
      if (tu > Tu[1]) {
        function hu(...uu) {
          for (Iu(uu[Tu[12]] = Tu[2], uu[Tu[15]] = 'Dhmvr1F3Pl()2ib@qf^LxU46:}GZ&s7oV_CNu>zSI;My{d!+/.%#Baw,?[jQ~W*HgnRc0X$TO`p"9tE5]e|YA<K8k=J', uu[-Tu[70]] = "" + (uu[Tu[1]] || ""), uu[Tu[4]] = uu[-Tu[70]].length, uu[Tu[75]] = [], uu[Tu[8]] = Tu[1], uu[Tu[74]] = Tu[1], uu[Tu[73]] = -Tu[2]), uu[Tu[71]] = Tu[1]; uu[Tu[71]] < uu[Tu[4]]; uu[Tu[71]]++)
            if (uu[-Tu[72]] = uu[Tu[15]].indexOf(uu[-Tu[70]][uu[Tu[71]]]), uu[-Tu[72]] !== -Tu[2])
              if (uu[Tu[73]] < Tu[1]) uu[Tu[73]] = uu[-Tu[72]];
              else {
                Iu(uu[Tu[73]] += uu[-Tu[72]] * Tu[29], uu[Tu[8]] |= uu[Tu[73]] << uu[Tu[74]], uu[Tu[74]] += (uu[Tu[73]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
                do {
                  Iu(uu[Tu[75]].push(uu[Tu[8]] & Tu[11]), uu[Tu[8]] >>= Tu[3], uu[Tu[74]] -= Tu[3])
                } while (uu[Tu[74]] > Tu[7]);
                uu[Tu[73]] = -Tu[2]
              } return uu[Tu[73]] > -Tu[2] && uu[Tu[75]].push((uu[Tu[8]] | uu[Tu[73]] << uu[Tu[74]]) & Tu[11]), ju(uu[Tu[75]])
        }

        function Pu(...uu) {
          return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = hu(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
        }
        let iu = yu[Pu(152) + Pu(153)] * lu;
        if (!Au) {
          function ou(...uu) {
            for (Iu(uu[Tu[12]] = Tu[2], uu[Tu[2]] = 'lNHeGkr@,?6Ds8=}1Ptnu4>bS)z|v[h0YQRgxijXZ2]Kc.y5CmJ!*BM#3qAaf~Ow7pF(%ILo+UEd:TW/{"9&`;^$_V<', uu[Tu[13]] = "" + (uu[Tu[1]] || ""), uu[Tu[76]] = uu[Tu[13]].length, uu[Tu[38]] = [], uu[Tu[78]] = Tu[1], uu[Tu[9]] = Tu[1], uu[Tu[77]] = -Tu[2]), uu[-Tu[27]] = Tu[1]; uu[-Tu[27]] < uu[Tu[76]]; uu[-Tu[27]]++)
              if (uu[Tu[28]] = uu[Tu[2]].indexOf(uu[Tu[13]][uu[-Tu[27]]]), uu[Tu[28]] !== -Tu[2])
                if (uu[Tu[77]] < Tu[1]) uu[Tu[77]] = uu[Tu[28]];
                else {
                  Iu(uu[Tu[77]] += uu[Tu[28]] * Tu[29], uu[Tu[78]] |= uu[Tu[77]] << uu[Tu[9]], uu[Tu[9]] += (uu[Tu[77]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
                  do {
                    Iu(uu[Tu[38]].push(uu[Tu[78]] & Tu[11]), uu[Tu[78]] >>= Tu[3], uu[Tu[9]] -= Tu[3])
                  } while (uu[Tu[9]] > Tu[7]);
                  uu[Tu[77]] = -Tu[2]
                } return uu[Tu[77]] > -Tu[2] && uu[Tu[38]].push((uu[Tu[78]] | uu[Tu[77]] << uu[Tu[9]]) & Tu[11]), ju(uu[Tu[38]])
          }

          function qu(...uu) {
            return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = ou(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
          }
          iu *= yu[Pu(154) + qu(155)]
        }
        let Yu = yu[Pu(156) + Pu(157) + "ss"] * tu;
        if (tu < .3 && (Yu *= tu), iu > Yu) {
          function Ou(...uu) {
            for (Iu(uu[Tu[12]] = Tu[2], uu[Tu[2]] = 'X}Aix`^7s$dtIHpRu6ZmV1P>DoeF=.8Q0?3b:;l5|qvT)C%B9g(#GY]MSE[fzU{k_hLW"rJKwc*<@/Oj+n,~yN!24&a', uu[Tu[79]] = "" + (uu[Tu[1]] || ""), uu[Tu[80]] = uu[Tu[79]].length, uu[Tu[38]] = [], uu[Tu[8]] = Tu[1], uu[Tu[9]] = Tu[1], uu[-Tu[81]] = -Tu[2]), uu[Tu[3]] = Tu[1]; uu[Tu[3]] < uu[Tu[80]]; uu[Tu[3]]++)
              if (uu[Tu[28]] = uu[Tu[2]].indexOf(uu[Tu[79]][uu[Tu[3]]]), uu[Tu[28]] !== -Tu[2])
                if (uu[-Tu[81]] < Tu[1]) uu[-Tu[81]] = uu[Tu[28]];
                else {
                  Iu(uu[-Tu[81]] += uu[Tu[28]] * Tu[29], uu[Tu[8]] |= uu[-Tu[81]] << uu[Tu[9]], uu[Tu[9]] += (uu[-Tu[81]] & Tu[32]) > Tu[33] ? Tu[34] : Tu[35]);
                  do {
                    Iu(uu[Tu[38]].push(uu[Tu[8]] & Tu[11]), uu[Tu[8]] >>= Tu[3], uu[Tu[9]] -= Tu[3])
                  } while (uu[Tu[9]] > Tu[7]);
                  uu[-Tu[81]] = -Tu[2]
                } return uu[-Tu[81]] > -Tu[2] && uu[Tu[38]].push((uu[Tu[8]] | uu[-Tu[81]] << uu[Tu[9]]) & Tu[11]), ju(uu[Tu[38]])
          }

          function vu(...uu) {
            return uu[Tu[12]] = Tu[2], typeof Ju[uu[Tu[1]]] === Tu[16] ? Ju[uu[Tu[1]]] = Ou(Nu[uu[Tu[1]]]) : Ju[uu[Tu[1]]]
          }

          function au(...uu) {
            function Ru(uu) {
              return uu[Tu[2]] * Tu[83] + (uu[Tu[1]] < Tu[1] ? Tu[82] | uu[Tu[1]] : uu[Tu[1]])
            }

            function yu(...uu) {
              switch (uu[Tu[12]] = Tu[2], ((uu[Tu[1]] & Tu[82]) !== Tu[1]) * Tu[2] + (uu[Tu[1]] < Tu[1]) * Tu[13]) {
                case Tu[1]:
                  return [uu[Tu[1]] % Tu[82], Math.trunc(uu[Tu[1]] / Tu[83])];
                case Tu[2]:
                  return [uu[Tu[1]] % Tu[82] - Tu[82], Math.trunc(uu[Tu[1]] / Tu[83]) + Tu[2]];
                case Tu[13]:
                  return [((uu[Tu[1]] + Tu[82]) % Tu[82] + Tu[82]) % Tu[82], Math.round(uu[Tu[1]] / Tu[83])];
                case Tu[4]:
                  return [uu[Tu[1]] % Tu[82], Math.trunc(uu[Tu[1]] / Tu[83])]
              }
            }
            uu[Tu[12]] = Tu[1], Iu(uu[-Tu[84]] = Ru([Tu[13], Tu[10]]), uu[Tu[85]] = Ru([Tu[2], Tu[13]]), uu[Tu[13]] = uu[-Tu[84]] + uu[Tu[85]], uu[-Tu[86]] = uu[Tu[13]] - uu[Tu[85]], uu[Tu[10]] = uu[-Tu[86]] * Tu[13], uu[Tu[87]] = uu[Tu[10]] / Tu[13], console.log(yu(uu[Tu[13]])), console.log(yu(uu[-Tu[86]])), console.log(yu(uu[Tu[10]])), console.log(yu(uu[Tu[87]])))
          }
          vu(158) + Tu[15] in Hu && au(), iu = Yu
        }
        Iu(Ku()[Pu(159)](Uu, Uu, iu), mu[Pu(160) + Pu(Tu[30])](Uu))
      }
      mu[Bu(162) + Tu[88]] = yu[Bu(Tu[84]) + Bu(Tu[41]) + Tu[88]] * (Au ? pu : Wu)
    }
  },
  37382: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu,
      c: () => Ju
    });
    var Eu = yu(37391),
      Ku = yu(1823);
    const Qu = 2,
      mu = 1,
      Ju = {
        Pm: 1,
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

    function Nu(uu, Ru, yu, Ju, Nu, Xu, Vu) {
      if (Nu.speed) return (0, Eu.d)(Ru, yu, Ju, Nu, Xu, Vu, uu), void(Nu.ticksToReachMaxIdleFriction = Qu);
      const ru = Ju.isOnGround(),
        Bu = Ru.bloxd.getSyncedClientOptions(Ru.bloxd.getPlayerReader(yu)),
        xu = null === Bu ? Ru.bloxd.getClientPredictedOption(yu, "groundFrictionScale") : Bu.groundFrictionScale,
        Su = null === Bu ? Ru.bloxd.getClientPredictedOption(yu, "airFrictionScale") : Bu.airFrictionScale,
        pu = ru ? xu : Su,
        Tu = Math.max(mu, pu),
        Wu = Nu.ticksToReachMaxIdleFriction / Qu,
        ju = (0, Ku.o)(Tu, pu, Wu);
      Xu.friction = uu.standingFriction * ((null === Bu ? Ru.bloxd.getClientPredictedOption(yu, "airMomentumConservation") : Bu.airMomentumConservation) ? ju : pu), Nu.ticksToReachMaxIdleFriction > 0 && Nu.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);