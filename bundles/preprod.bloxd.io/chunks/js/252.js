export const id = 252;
export const ids = [252];
export const modules = {
  39127: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => pB
    });
    var YB = GB(192),
      DB = GB(38313);
    const QB = 1.2,
      oB = {
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
        Wy: .5,
        eGB: !1
      },
      jB = {
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
        Wy: .5,
        eGB: !1
      },
      yB = {
        physicsBodyDimensions: {
          width: YB.f.sZ,
          height: YB.f.xZ
        },
        hitBoxDimensions: {
          width: YB.f.sZ + .4,
          height: YB.f.xZ + .6
        },
        eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
        rideHeight: YB.f.xZ - .3,
        Wy: .5,
        eGB: !1
      },
      JB = {
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
        Wy: .5,
        eGB: !1
      },
      MB = {
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
        Wy: .5,
        eGB: !1
      },
      PB = {
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
        Wy: .5,
        eGB: !1
      },
      zB = {
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
        Wy: .5,
        eGB: !1
      },
      lB = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: YB.f.sZ,
            height: YB.f.xZ
          },
          hitBoxDimensions: {
            width: YB.f.sZ + .4,
            height: YB.f.xZ + .6
          },
          eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
          rideHeight: YB.f.xZ - .1,
          Wy: DB.f.Wy,
          eGB: !0
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
        },
        Camel: {
          modelScale: QB,
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
        },
        "Cave Golem": oB,
        "Draugr Zombie": {
          ...yB,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": yB,
        "Frost Golem": oB,
        "Frost Zombie": {
          ...yB,
          defaultPose: "zombie"
        },
        "Frost Skeleton": yB,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: YB.f.sZ,
            height: YB.f.xZ
          },
          hitBoxDimensions: {
            width: YB.f.sZ + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Wy: .5,
          eGB: !1
        },
        Wolf: JB,
        Bear: MB,
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
          Wy: .5,
          eGB: !1
        },
        Stag: PB,
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
          Wy: .5,
          eGB: !1
        },
        Gorilla: zB,
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
          Wy: .5,
          eGB: !1
        },
        "Draugr Huntress": yB,
        "Magma Golem": oB,
        "Spirit Golem": oB,
        "Spirit Wolf": JB,
        "Spirit Bear": MB,
        "Spirit Stag": PB,
        "Spirit Gorilla": zB,
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: YB.f.sZ,
            height: YB.f.xZ
          },
          hitBoxDimensions: {
            width: YB.f.sZ + .4,
            height: YB.f.xZ + .6
          },
          eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
          rideHeight: YB.f.xZ - .1,
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: YB.f.sZ,
            height: YB.f.xZ
          },
          hitBoxDimensions: {
            width: YB.f.sZ + .4,
            height: YB.f.xZ + .6
          },
          eyeHeight: YB.f.xZ * YB.f.playerEyeToHeightRatio,
          rideHeight: YB.f.xZ - .1,
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
        },
        Zombie: {
          ...yB,
          defaultPose: "zombie"
        },
        Skeleton: yB,
        Mummy: {
          ...yB,
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
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
          Wy: .5,
          eGB: !1
        },
        "Iron Guardian": jB,
        "Gold Guardian": jB,
        "Diamond Guardian": jB,
        "Moonstone Guardian": jB,
        "Iron Goofy Golem": jB,
        "Gold Goofy Golem": jB,
        "Diamond Goofy Golem": jB,
        "Moonstone Goofy Golem": jB,
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
          Wy: .5,
          eGB: !1
        }
      };

    function pB(BB) {
      return lB[BB]
    }
  },
  37753: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = {
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
  38319: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(363),
      DB = GB.n(YB),
      QB = GB(1998);
    let oB;
    var jB, yB, JB, MB, PB, zB, lB, pB, qB;
    const ZB = [113, 0, 1, "h", 3, "a", 114, 7, 196, 6, 4, 8, 255, "length", 2, 56, "undefined", void 0, 79, "c", 223, 63, "fromCodePoint", 12, "push", 162, 91, 8191, 88, 13, 14, 125, 5, 93, 99, 9, "g", "e", "d", 38, 21, 1023, 48, 153, 65536, 27, 16, 10, 55296, 56320, "b", 53, 234, 204, 128, 31, 15, 18, 47, 127, 94, 77, 180, "f", 239, 49, 39, 192, 203, "i", 157, 73, 182, 26, 211, 163, 224, 110, 174, 231, 86, 181, 240, 227, !1, 136, 178, 68, 36, 160, 33, 232, 116, 129, null, 123, 124, 126, 130, 131, 132, 142, 143, 148, 159, 228, "gp", 213, 155, 45, 29, 220, 236, 158, 80, 65, 241, 249, 70, 183, 76, 56319, 64512, 51, 65535, 57343, 4294967168, 4294965248, 4294901760, 4292870144, 66, 98, 194, 173, 30, 115, 41, 2048, 149, 156, 248, 1114111, 226, 198, 33554432, 67108864, 175, "on"];

    function NB(...BB) {
      return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
        for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '^<fLFW(/uvcUIm}dB]~a9P?q4|En%#=Hb.tVwDgSXsR;+7@"AJ[C:6jro>hxNO,&$Z21_!Q85T30G*)ylkpiK`YM{ze', BB[-ZB[0]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[-ZB[0]].length, BB[ZB[10]] = [], BB[ZB[8]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[4]]; BB[ZB[3]]++)
          if (BB[-ZB[6]] = BB[ZB[5]].indexOf(BB[-ZB[0]][BB[ZB[3]]]), BB[-ZB[6]] !== -ZB[2])
            if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[-ZB[6]];
            else {
              KB(BB[ZB[7]] += BB[-ZB[6]] * ZB[26], BB[ZB[8]] |= BB[ZB[7]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
              do {
                KB(BB[ZB[10]].push(BB[ZB[8]] & ZB[12]), BB[ZB[8]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
              } while (BB[ZB[9]] > ZB[7]);
              BB[ZB[7]] = -ZB[2]
            } return BB[ZB[7]] > -ZB[2] && BB[ZB[10]].push((BB[ZB[8]] | BB[ZB[7]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[10]])
      }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
    }

    function RB(...BB) {
      return BB[ZB[13]] = ZB[2], typeof MB !== ZB[16] && MB ? (new MB).decode(new PB(BB[ZB[1]])) : typeof zB !== ZB[16] && zB ? zB.from(BB[ZB[1]]).toString("utf-8") : qB(BB[ZB[1]])
    }

    function WB() {}
    KB(jB = {}, yB = ["cqyFZKXIlIJUSgFgK%.=#", "L&zbU[C0tjUCrQ}", "AtrJ&*%~l6h/OweRt_.5htPVwj9D9iOqyC/=bx*>T]JGFdt]8jL[9", "1Aeb:C^h]IwtPNjt5Znc", "7EyGa!*#)6@27AM#,tEbnV^", "cFJjU!Yt~I8TBdNq;;zj/,OVA&hlBiI", "D8abhK~w*~hl=pAXw8?TF3)@]d$&*A#q1qB=hh=39$3b<", "<N;bb)6mkNtP7A=]REPH>Qr<", "H>&%4[|#;Z}yd}kSGq7/4[^", "MAsjk!5@&IP!=Ov", 'XAbvoyB@qmAxY!,w5CAvD"vm]I(qngq#s>IHJC?hJNU0PwB9nDjH5G><', 'm@^=.8U|0,*N"hknNXy::0$3w$lQRf#q.;,r*G3@JI)ktmw=:E":9,^', '7>}G@D#/oZW"q}6njvL', "LP?r[oCV#}p#]Bfw&Z<", "H(x#~:t~E]&/mK|VwDbJnxY,+o9yfW=]itM:!NCa;xnn~kW46vL#sT^", "s;]C0,+~fjn]Fi!|lC)8z>^hA2oGh|Nw5C!FfkbwJj#9p!8~@_rv:o?u>9/_^", 'eT,/;T&VbIzN"p?%_]o(Lk,fq$tn*A<q`SL', "L>4nGr,lfIGF!F", "b;dv)w8/d~vAVg#]OAW[>5,=9v@Fx},=U>P:mG}f", '7(LWpgym}&XTD|Ug~~G6gjHV;}|]+i8Hhj_8}[Q~iIF0i"8a1Lf', "N}zj;C)(G]NxO4.]vV|=4", "DdXjCQm/l6K1<W", 'R8T()wuuOU"TvWPtI;HTo@FRgmScT5I9FJ#F', "UI6Ha8]Vfj|,+LIS.DPc", "R]1#9X`m<j8*An~%F&^=5AR41am0:NlniQ!H9!,f", "v#jr&NZsJ2k<.B_]a>jrRlxsbvDP$L4V[>L", "1LAvsV,=9>.}2|6VQq[nJQb$tI", "*7;*z`1Vex>FZ5otN8f#JQsmW", '5q"vt_;`Wa:&.5rt}NUbXT%$0]s]UfL|d~^(~', "iLb(gDuw5]8lTAnq,j>jV)TC>9f=PBEq_H<),3gw~dLh,!_~b>$v", "a~{T;QvsG}", "u&<5Z5*/;9XL|B%RB(yF5kLs.IXG75_=XD_*bVXhPmDLj|nsW>L", "(NS%eg8#]d0@5n&qR9YG}w^", "tISF!t@:}dz*c}9s:ZbTEiBY}~3UsB/", "[7#cTGT#;U((U[8g3(lJ6o==wahF]B&4/@=T%xu=H2Zlh|&DC^", "d&)FST@IQhQ~v5IEgj]Cjpe4%}", '$jqJWr=4xxPp4xY?:qU*q84=)U^0`lNq7X"G"h{@IZW_9ifwXECuni^', 'GUcCM>g:m2w!Q|[X+HqT^wWaExW"EWQHIJ9#D"<sp>@!PO(', "MAiWVX60]>pU;}gDw87FIrp@Dj8JEWM?dE_W", 's8rF4"T!xZSL3k0SlxAjkGJV&~[T;8t4fNlv', '>A=J/tFRsZVP8Eg~#8H:1300.&f("g"nAD:c', "r_L[,@H!a>puKVAXD>$jdr^", "pC#:.laVW$2@UfaX]~pus0tf", '&DS%FwVVPaTU/[zVxL?FZra<NZ1%tmY%[>XT~>7"OuY1;8F=', "W8n*E>e,2N[lLLZRqNuCc>K@TZz?2!Z4Y^", "+_93vY}h@U7:yg;gS;fn;J[XpI,~IidS[9;59[]m%P+}L[jX|Xf", ">A@rCpMs@~YkMEGaq>Yv$3o~FjVc:d(g5D![d>:lY$e1/SI", "_T(HP>Ihn,vm<", "QH1*j@`/A2HHFLyENjlJqg#V/ccL<KjXG^", "}NTCAJCV^v+xHgGa0oIrCD8#1N6T:d@EX#2u", "/#,:mA2=}PXHWK5~CD_c#x0ss]MwNxt=Q9[bsO?4Z&bLrgrVpLz(_@Ih0U", "HXrTNKr&9jE5Y|TSt>7/oN+h{9c0LQ^~/b<)a", 'Lb"JCo|V*U1VYk_=5ZjrF3H"7~2&xQ0|s9(:c[va]&rFY|(|H(G*AKAX/', "6>g:9g.kydGd>B<qn#iW(Ngf", 'VD6H(Nlt,u)*]WH=qj4T833@:an,A"sHj]IcPGS>}~9GEkf4J>f', "kD{v;VlYnx@%ud.wsq<)&yT#N]R", "o_9/]gkml6^C2mi%", "<XbT6h6<hxrJKd}99IP/Px><", '5x)F*Ggw~Ipo}Ob4E@0WvNi/7xB9WKBENXlj}kWs[an/U[/g.vuj"Dc4lv', '5(}rIG;/"&Sc_dlXl%+*^K^', '17M:JJ=~faH/B"z#DN<', "X,[bm>3~%xM|4x.D>EMv", 'Cj"T7_fRBI7!;Q`%.j@G8tz<:voQ3}84n_bC|8>0fIj', "b#tn4g5(X9C", "5ooJ<@$4b>xxsBGaUq1*Wt):wvCT!wrt?3Zj`7_(E]+P>wn]C^", "wj`%:Cv|dI>Faf", "3UG6[_Lay&Y*VinRXAL", "yo_E<kv<%x2xsF#=KA+36SlI72LDOF]9lC{jSJY,<dhxyE_Di^", "7Z?vY`zyav6Hb8NVW~d:JQAh095lhmW|Q(K3NSq/T9+x<", "Etw3[Q=fxu[,6Au~O8Bn(,0yzZVGAig4]C8TE>XfS$>on}AEc;vn}>^", 'zAc00[QhAd{b_iYBtNzC2@U<.Nk#V[5g",5vIixm<I@}WK24,}7/=ld<', "TCfb8NWmG}", '3,bJ~,j~{ZhPbL5a"DBv0!<&qmPLg|gH*H1WFt]/cZHHWAp%3Z!%P', "fPIcACa#}x9L58zB]C<njp^", '%8N/rD,_zZ<5+nT|pC.bQ6Q_"d&UEDSD^Ij:Fy}wH2qrjmmgvFpbh5&q89', "*qK[X033v]6TJ56sBCe*x@1V(", "Y},/([DkE9H/{8YsE8Avjhf4FvX", "l,d:8[HaxubZ!F", "2A*:7&5~F", "H@P/oQ)3(", 'G,BCC0lIZvpQ/i"SA(;bigof', 'g9MJNQV/)~%AQ|xql%vj"C?@3xrUtm_DR#J(k>^', "C>RbP:~w<~", 'BECb(,jXn}Rcvw}9;,d=TwJ"rhFv4i(gj^', "6LXvig7&Yhcnw8dSQR}H_ApYN,aDp!oR(&z(Q[isKa", "MQMTA_^", "mJC3LyT<", "~@abli@X+xC&[Or#GZt#p:/s$&:TSp|VE8JCRJX4c]X", "p%lJACt4Cvt,>AKnwNB.K!etPh>ly}<HWv:6B,w=G}VGEO(~:j|n(Yz/d~s,<", 'f#GWF,Uso]<_/8esE;v(6D&q@PVP48K%0qZ(dram7}"%<', "ubWH+D!mBNi*NFL4i7wrSO0CH~?G8}Ua", "~@^)nVAfEZm_wF", "|`^urc(?", "2CgH*k9f", '"9[C,5S<', "qefi{asE", "7bUBkGtE", "R)i>e?O", "K>9jZBmE", '>5gT"6uE', "W=U82aHE", "W=Wi>", "nOPF7~HCth|bS5:%gOJ,5!x", "X;]t6#W.9=z`R*OKBIF$oW_T<H2)|[i", '"D>?RrJ6lWySLw;nVDZ)wMx', 'j<[e,]cN_2I~#HV+&5Y6Fcg{hA"xm8}', "]Xib9G34$[x2)J/DENCud3ak&WZltOI", "Ll9JA8yNd2c}J^o`:59CJ*gN8L2", "YS?Jl.^", "oTcQ!$[;", "4tG3", "&_cv;%by", "8h{e", "}IceNT:", "8_uJ", ".aB`0oAt", "Nvnr|$U", "f!ZOSNbs", "2!4K>9bs", "!!5O", "f!}%CEwl4", "<bH5GMY.4", "yyBr!Ml]4", "f!}%bN(s", "c^ZO2.Ps", '"j{q_9fs', '.c{__Q"s', "$;w_?%fs", "6;9N%](s", "K^%M:}vs", "=j4K<.(s", "_[9N|%*t", "1zz_L", "m!ZO", "5!}Ml", "jy=_m", "K~Y;Zxos", "w|FrL", 'f!}%CE"s', "X!RNbN(s", "c^}%@Qxs", "_yP%(", "=j;_`dSs", "_r;qm9U", "=j;_LQJm6l", "_|b%)QwlNW", "G7;q!Ml]4", "=j;_LQ2s", "c^{_@Nyt", "K^h_u.~s", "m[9N|%U", "j9io=C{*", "(BKi", ")t]o", "b>+`", "=3]o", "oU7<k5Aq", ")tf`Y", "q0p`", "U#ji", "R|hq", ">!P%Q]js", "G!UZyzt;", "tDIOo1Js", "2b$N]]bs", "hrAq", "ejFr", "6y;_e}vs", "wMAq", "2yA_ENPs", "y[F`y.Ss", "?6(O.](s", "Yv$Ru.U", '("txE]Zr', "G2Ie?n)o", "4#[$7<fo", "LWeH2Oa", "+HpmP$Bo", "HR8D@5Qo", "6c[%}n0o", "6c6eH", 'vy>xf=`*"dNGVuUi[yX}un(', "s6O^7Rwf{5%METZ|dgV]}wKi$Q<)AD:", "Hi{4S~lsWBKODhCtcwou0lv7zA3j|Z!", 'OWcDZS_)b24$"NmtH(v+z_oV#u|PedK', "CPLohb<zJ=|mo~*n)9L@oc$zbC=", 'jOx^.p"', "I}VfH+aO", "G;)d", "8k>xM[yl", '"2>7', 'E3kN8"_e', ';Sm8K"_e', "4jkn,1r", "qQ:eVwsl", "95>x~Ffl", "F<)7:=gr", "J2+7X0(", "4MG28{[r", "w+3}B", "d;9N%](s", "2yA_h%#s"]), KB(JB = function(...BB) {
      KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[ZB[2]] = ZB[17], BB[ZB[14]] = []);
      try {
        KB(BB[ZB[2]] = Object, BB[ZB[14]][ZB[24]]("".__proto__.constructor.name))
      } catch (yB) {}
      BB: for (BB[-ZB[15]] = ZB[1]; BB[-ZB[15]] < BB[ZB[5]][ZB[13]]; BB[-ZB[15]]++) try {
        for (BB[ZB[2]] = BB[ZB[5]][BB[-ZB[15]]](), BB[ZB[10]] = ZB[1]; BB[ZB[10]] < BB[ZB[14]][ZB[13]]; BB[ZB[10]]++)
          if (typeof BB[ZB[2]][BB[ZB[14]][BB[ZB[10]]]] === ZB[16]) continue BB;
        return BB[ZB[2]]
      } catch (yB) {}
      return BB[ZB[2]] || this
    }() || {}, MB = JB.TextDecoder, PB = JB.Uint8Array, zB = JB.BP, lB = JB.String || String, pB = JB.Array || Array, qB = function(...BB) {
      return KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = new pB(ZB[54]), BB[ZB[25]] = lB[ZB[22]] || lB.fromCharCode, BB[ZB[18]] = []),
        function(...OB) {
          for (KB(OB[ZB[13]] = ZB[2], OB[ZB[2]] = ZB[17], OB[ZB[20]] = ZB[17], OB[ZB[19]] = OB[ZB[1]][ZB[13]], BB[ZB[18]][ZB[13]] = ZB[1]), OB[ZB[10]] = ZB[1]; OB[ZB[10]] < OB[ZB[19]];) KB(OB[ZB[20]] = OB[ZB[1]][OB[ZB[10]]++], OB[ZB[20]] <= ZB[59] ? OB[ZB[2]] = OB[ZB[20]] : OB[ZB[20]] <= ZB[20] ? OB[ZB[2]] = (OB[ZB[20]] & ZB[55]) << ZB[9] | OB[ZB[1]][OB[ZB[10]]++] & ZB[21] : OB[ZB[20]] <= ZB[64] ? OB[ZB[2]] = (OB[ZB[20]] & ZB[56]) << ZB[23] | (OB[ZB[1]][OB[ZB[10]]++] & ZB[21]) << ZB[9] | OB[ZB[1]][OB[ZB[10]]++] & ZB[21] : lB[ZB[22]] ? OB[ZB[2]] = (OB[ZB[20]] & ZB[7]) << ZB[57] | (OB[ZB[1]][OB[ZB[10]]++] & ZB[21]) << ZB[23] | (OB[ZB[1]][OB[ZB[10]]++] & ZB[21]) << ZB[9] | OB[ZB[1]][OB[ZB[10]]++] & ZB[21] : (OB[ZB[2]] = ZB[21], OB[ZB[10]] += ZB[4]), BB[ZB[18]][ZB[24]](BB[ZB[5]][OB[ZB[2]]] || (BB[ZB[5]][OB[ZB[2]]] = BB[ZB[25]](OB[ZB[2]]))));
          return BB[ZB[18]].join("")
        }
    }());
    const AB = DB()[NB(ZB[33])](),
      VB = DB()[NB(ZB[33])](),
      SB = DB()[NB(ZB[33])](),
      nB = DB()[NB(ZB[33])](),
      UB = DB()[NB(ZB[33])](),
      fB = DB()[NB(ZB[33])](),
      kB = DB()[NB(ZB[33])](),
      dB = (...BB) => {
        function OB(...BB) {
          return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
            for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = ':,y05|1[eIJ^SCgLFMBOZuHqV~P8?jN.vEb6]&U!Alm_/oQ;37=ci<`x"atGsrfn}$@2%K)Tp(hY>kD+RwW{Xd#*z94', BB[ZB[34]] = "" + (BB[ZB[1]] || ""), BB[ZB[21]] = BB[ZB[34]].length, BB[ZB[38]] = [], BB[ZB[37]] = ZB[1], BB[ZB[29]] = ZB[1], BB[ZB[36]] = -ZB[2]), BB[ZB[11]] = ZB[1]; BB[ZB[11]] < BB[ZB[21]]; BB[ZB[11]]++)
              if (BB[ZB[35]] = BB[ZB[5]].indexOf(BB[ZB[34]][BB[ZB[11]]]), BB[ZB[35]] !== -ZB[2])
                if (BB[ZB[36]] < ZB[1]) BB[ZB[36]] = BB[ZB[35]];
                else {
                  KB(BB[ZB[36]] += BB[ZB[35]] * ZB[26], BB[ZB[37]] |= BB[ZB[36]] << BB[ZB[29]], BB[ZB[29]] += (BB[ZB[36]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                  do {
                    KB(BB[ZB[38]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[ZB[29]] -= ZB[11])
                  } while (BB[ZB[29]] > ZB[7]);
                  BB[ZB[36]] = -ZB[2]
                } return BB[ZB[36]] > -ZB[2] && BB[ZB[38]].push((BB[ZB[37]] | BB[ZB[36]] << BB[ZB[29]]) & ZB[12]), RB(BB[ZB[38]])
          }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
        }
        BB[ZB[13]] = ZB[4], NB(ZB[60]) + "O" in WB && function(...BB) {
          function OB(BB) {
            var OB, GB, YB, DB, QB, oB, jB, yB = 'w!;51~{03x}l+E,tHDSm7kFsN4`][#cQ8gWXdhJ^TRK@)i?.zV=ZUuYP*yaq2o>fLeO(/j&9$rIG%pCv:_B<"AM6|bn';
            for (KB(OB = "" + (BB || ""), GB = OB.length, YB = [], DB = ZB[1], QB = ZB[1], oB = -ZB[2]), jB = ZB[1]; jB < GB; jB++) {
              var JB = yB.indexOf(OB[jB]);
              if (JB !== -ZB[2])
                if (oB < ZB[1]) oB = JB;
                else {
                  KB(oB += JB * ZB[26], DB |= oB << QB, QB += (oB & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                  do {
                    KB(YB.push(DB & ZB[12]), DB >>= ZB[11], QB -= ZB[11])
                  } while (QB > ZB[7]);
                  oB = -ZB[2]
                }
            }
            return oB > -ZB[2] && YB.push((DB | oB << QB) & ZB[12]), RB(YB)
          }

          function GB(...BB) {
            return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = OB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
          }
          BB[ZB[13]] = ZB[1],
            function(...BB) {
              function OB(...BB) {
                for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = [], BB[ZB[14]] = ZB[1], BB[ZB[4]] = BB[ZB[1]].length, BB[-ZB[39]] = ZB[17], BB[ZB[40]] = ZB[17]); BB[ZB[14]] < BB[ZB[4]];) KB(BB[-ZB[39]] = BB[ZB[1]].charCodeAt(BB[ZB[14]]++), BB[-ZB[39]] >= ZB[48] && BB[-ZB[39]] <= ZB[121] && BB[ZB[14]] < BB[ZB[4]] ? (BB[ZB[40]] = BB[ZB[1]].charCodeAt(BB[ZB[14]]++), (BB[ZB[40]] & ZB[122]) == ZB[49] ? BB[ZB[2]].push(((BB[-ZB[39]] & ZB[41]) << ZB[47]) + (BB[ZB[40]] & ZB[41]) + ZB[44]) : (BB[ZB[2]].push(BB[-ZB[39]]), BB[ZB[14]]--)) : BB[ZB[2]].push(BB[-ZB[39]]));
                return BB[ZB[2]]
              }

              function GB(...OB) {
                for (KB(OB[ZB[13]] = ZB[2], OB[-ZB[43]] = OB[ZB[1]].length, OB[ZB[42]] = -ZB[2], OB[ZB[19]] = ZB[17], OB[-ZB[45]] = ""); ++OB[ZB[42]] < OB[-ZB[43]];) OB[ZB[19]] = OB[ZB[1]][OB[ZB[42]]], OB[ZB[19]] > ZB[124] && KB(OB[ZB[19]] -= ZB[44], OB[-ZB[45]] += BB[ZB[46]](OB[ZB[19]] >>> ZB[47] & ZB[41] | ZB[48]), OB[ZB[19]] = ZB[49] | OB[ZB[19]] & ZB[41]), OB[-ZB[45]] += BB[ZB[46]](OB[ZB[19]]);
                return OB[-ZB[45]]
              }

              function YB(...BB) {
                if (BB[ZB[13]] = ZB[2], BB[ZB[1]] >= ZB[48] && BB[ZB[1]] <= ZB[125]) {
                  function OB(...BB) {
                    for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = 'O5EqlVcSTXjCt9_)u[;f$Navp>F.A`?Riw=J30<~mZ4e1]xDsg|bU8H:+rdQnKYyMLzk!&^{GI2W@B(*6Ph#7%,o"/}', BB[ZB[50]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[50]].length, BB[-ZB[53]] = [], BB[ZB[37]] = ZB[1], BB[ZB[52]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[-ZB[51]] = ZB[1]; BB[-ZB[51]] < BB[ZB[19]]; BB[-ZB[51]]++)
                      if (BB[ZB[33]] = BB[ZB[5]].indexOf(BB[ZB[50]][BB[-ZB[51]]]), BB[ZB[33]] !== -ZB[2])
                        if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[33]];
                        else {
                          KB(BB[ZB[7]] += BB[ZB[33]] * ZB[26], BB[ZB[37]] |= BB[ZB[7]] << BB[ZB[52]], BB[ZB[52]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                          do {
                            KB(BB[-ZB[53]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[ZB[52]] -= ZB[11])
                          } while (BB[ZB[52]] > ZB[7]);
                          BB[ZB[7]] = -ZB[2]
                        } return BB[ZB[7]] > -ZB[2] && BB[-ZB[53]].push((BB[ZB[37]] | BB[ZB[7]] << BB[ZB[52]]) & ZB[12]), RB(BB[-ZB[53]])
                  }

                  function GB(BB) {
                    return typeof jB[BB] === ZB[16] ? jB[BB] = OB(yB[BB]) : jB[BB]
                  }
                  throw Error(GB(95) + GB(96) + GB(97) + BB[ZB[1]].toString(ZB[46]).toUpperCase() + (GB(ZB[131]) + GB(ZB[34]) + GB(100) + GB(101)))
                }
              }

              function DB(...OB) {
                return OB[ZB[13]] = ZB[14], BB[ZB[46]](OB[ZB[1]] >> OB[ZB[2]] & ZB[21] | ZB[54])
              }

              function QB(...OB) {
                return OB[ZB[13]] = ZB[2], (OB[ZB[1]] & ZB[126]) == ZB[1] ? BB[ZB[46]](OB[ZB[1]]) : (OB[ZB[0]] = "", (OB[ZB[1]] & ZB[127]) == ZB[1] ? OB[ZB[0]] = BB[ZB[46]](OB[ZB[1]] >> ZB[9] & ZB[55] | ZB[67]) : (OB[ZB[1]] & ZB[128]) == ZB[1] ? KB(YB(OB[ZB[1]]), OB[ZB[0]] = BB[ZB[46]](OB[ZB[1]] >> ZB[23] & ZB[56] | ZB[76]), OB[ZB[0]] += DB(OB[ZB[1]], ZB[9])) : (OB[ZB[1]] & ZB[129]) == ZB[1] && KB(OB[ZB[0]] = BB[ZB[46]](OB[ZB[1]] >> ZB[57] & ZB[7] | ZB[82]), OB[ZB[0]] += DB(OB[ZB[1]], ZB[23]), OB[ZB[0]] += DB(OB[ZB[1]], ZB[9])), OB[ZB[0]] += BB[ZB[46]](OB[ZB[1]] & ZB[21] | ZB[54]), OB[ZB[0]])
              }

              function oB(...BB) {
                for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = OB(BB[ZB[1]]), BB[ZB[50]] = BB[ZB[5]].length, BB[ZB[58]] = -ZB[2], BB[ZB[10]] = ZB[17], BB[ZB[32]] = ""); ++BB[ZB[58]] < BB[ZB[50]];) KB(BB[ZB[10]] = BB[ZB[5]][BB[ZB[58]]], BB[ZB[32]] += QB(BB[ZB[10]]));
                return BB[ZB[32]]
              }

              function JB(...OB) {
                function GB(...BB) {
                  for (KB(BB[ZB[13]] = ZB[2], BB[-ZB[59]] = 'hgyJcHeO$Sx^iw>oMXv_6bd~.,Bu5CA%tZ|L?KUf;PV8E:}km*=Flja(0r1zI[p<92`Ds@"{/qW&#nRG)T!]4+YQN37', BB[ZB[50]] = "" + (BB[ZB[1]] || ""), BB[-ZB[61]] = BB[ZB[50]].length, BB[ZB[38]] = [], BB[ZB[37]] = ZB[1], BB[ZB[63]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[60]] = ZB[1]; BB[ZB[60]] < BB[-ZB[61]]; BB[ZB[60]]++)
                    if (BB[-ZB[62]] = BB[-ZB[59]].indexOf(BB[ZB[50]][BB[ZB[60]]]), BB[-ZB[62]] !== -ZB[2])
                      if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[-ZB[62]];
                      else {
                        KB(BB[ZB[7]] += BB[-ZB[62]] * ZB[26], BB[ZB[37]] |= BB[ZB[7]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                        do {
                          KB(BB[ZB[38]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                        } while (BB[ZB[63]] > ZB[7]);
                        BB[ZB[7]] = -ZB[2]
                      } return BB[ZB[7]] > -ZB[2] && BB[ZB[38]].push((BB[ZB[37]] | BB[ZB[7]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[38]])
                }

                function YB(...BB) {
                  return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = GB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                }
                if (OB[ZB[13]] = ZB[1], BB[ZB[50]] >= BB[ZB[72]]) {
                  function DB(...BB) {
                    for (KB(BB[ZB[13]] = ZB[2], BB[ZB[65]] = 'xAVrYhW}3dB%+N1a&nMw7@ejC["vkZJ,F=S:_R^LOKo?sq<Eyg68/z9>T]IfX5ct#|.U$()uD4Hl~m{*bi`P!2Gp0Q;', BB[ZB[50]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[ZB[50]].length, BB[ZB[10]] = [], BB[-ZB[66]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[64]] = -ZB[2]), BB[ZB[11]] = ZB[1]; BB[ZB[11]] < BB[ZB[4]]; BB[ZB[11]]++)
                      if (BB[ZB[35]] = BB[ZB[65]].indexOf(BB[ZB[50]][BB[ZB[11]]]), BB[ZB[35]] !== -ZB[2])
                        if (BB[ZB[64]] < ZB[1]) BB[ZB[64]] = BB[ZB[35]];
                        else {
                          KB(BB[ZB[64]] += BB[ZB[35]] * ZB[26], BB[-ZB[66]] |= BB[ZB[64]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[64]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                          do {
                            KB(BB[ZB[10]].push(BB[-ZB[66]] & ZB[12]), BB[-ZB[66]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
                          } while (BB[ZB[9]] > ZB[7]);
                          BB[ZB[64]] = -ZB[2]
                        } return BB[ZB[64]] > -ZB[2] && BB[ZB[10]].push((BB[-ZB[66]] | BB[ZB[64]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[10]])
                  }

                  function QB(...BB) {
                    return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = DB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                  }
                  throw Error(QB(102))
                }
                if (KB(OB[ZB[5]] = BB[ZB[10]][BB[ZB[50]]] & ZB[12], BB[ZB[50]]++), (OB[ZB[5]] & ZB[67]) == ZB[54]) return OB[ZB[5]] & ZB[21];
                throw Error(YB(103))
              }

              function MB(...OB) {
                function GB(...BB) {
                  for (KB(BB[ZB[13]] = ZB[2], BB[-ZB[55]] = '!wex"D=pCHZ5X(B1GLS`A~I+NzkE}vWuJmKnF[Rhl#O|j3i_t?2%P6c:74)^0fgbd{Q;oU]*T.yq8&raV$<9Y@/s>M,', BB[ZB[50]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[ZB[50]].length, BB[ZB[71]] = [], BB[-ZB[70]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[-ZB[68]] = ZB[1]; BB[-ZB[68]] < BB[ZB[4]]; BB[-ZB[68]]++)
                    if (BB[ZB[69]] = BB[-ZB[55]].indexOf(BB[ZB[50]][BB[-ZB[68]]]), BB[ZB[69]] !== -ZB[2])
                      if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[69]];
                      else {
                        KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[-ZB[70]] |= BB[ZB[7]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                        do {
                          KB(BB[ZB[71]].push(BB[-ZB[70]] & ZB[12]), BB[-ZB[70]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
                        } while (BB[ZB[9]] > ZB[7]);
                        BB[ZB[7]] = -ZB[2]
                      } return BB[ZB[7]] > -ZB[2] && BB[ZB[71]].push((BB[-ZB[70]] | BB[ZB[7]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[71]])
                }

                function DB(BB) {
                  return typeof jB[BB] === ZB[16] ? jB[BB] = GB(yB[BB]) : jB[BB]
                }
                if (OB[ZB[13]] = ZB[1], KB(OB[-ZB[75]] = ZB[17], OB[-ZB[77]] = ZB[17], OB[ZB[19]] = ZB[17], OB[ZB[83]] = ZB[17], OB[ZB[78]] = ZB[17]), BB[ZB[50]] > BB[ZB[72]]) {
                  function QB(...BB) {
                    for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = 'xbso:W!35+=n4]Y^%"zXR,Gh6/O(cgZ)?PL;T~.7D*K&#e<9tVvkAU_dEj8}`wQlqyfF{2m|uHJCraB1S@I>Mi$0[pN', BB[ZB[73]] = "" + (BB[ZB[1]] || ""), BB[ZB[58]] = BB[ZB[73]].length, BB[ZB[10]] = [], BB[ZB[37]] = ZB[1], BB[-ZB[74]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[58]]; BB[ZB[3]]++)
                      if (BB[ZB[35]] = BB[ZB[2]].indexOf(BB[ZB[73]][BB[ZB[3]]]), BB[ZB[35]] !== -ZB[2])
                        if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[35]];
                        else {
                          KB(BB[ZB[7]] += BB[ZB[35]] * ZB[26], BB[ZB[37]] |= BB[ZB[7]] << BB[-ZB[74]], BB[-ZB[74]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                          do {
                            KB(BB[ZB[10]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[-ZB[74]] -= ZB[11])
                          } while (BB[-ZB[74]] > ZB[7]);
                          BB[ZB[7]] = -ZB[2]
                        } return BB[ZB[7]] > -ZB[2] && BB[ZB[10]].push((BB[ZB[37]] | BB[ZB[7]] << BB[-ZB[74]]) & ZB[12]), RB(BB[ZB[10]])
                  }

                  function oB(...BB) {
                    return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = QB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                  }
                  throw Error(oB(104))
                }
                if (BB[ZB[50]] == BB[ZB[72]]) return ZB[84];
                if (KB(OB[-ZB[75]] = BB[ZB[10]][BB[ZB[50]]] & ZB[12], BB[ZB[50]]++), (OB[-ZB[75]] & ZB[54]) == ZB[1]) return OB[-ZB[75]];
                if ((OB[-ZB[75]] & ZB[76]) == ZB[67]) {
                  if (KB(OB[-ZB[77]] = JB(), OB[ZB[78]] = (OB[-ZB[75]] & ZB[55]) << ZB[9] | OB[-ZB[77]]), OB[ZB[78]] >= ZB[54]) return OB[ZB[78]];
                  {
                    function MB(...BB) {
                      for (KB(BB[ZB[13]] = ZB[2], BB[ZB[79]] = 'MWLPOA1V6u|l}BUF3jrg,7tDN=&`iGvweEm!s+fX<aTC0?$pKH2YZd*(RJnI58;h_"~.oqkzS4c@]y#>x{Q[%9)^/:b', BB[ZB[50]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[ZB[50]].length, BB[ZB[81]] = [], BB[ZB[37]] = ZB[1], BB[-ZB[80]] = ZB[1], BB[ZB[36]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[4]]; BB[ZB[3]]++)
                        if (BB[ZB[69]] = BB[ZB[79]].indexOf(BB[ZB[50]][BB[ZB[3]]]), BB[ZB[69]] !== -ZB[2])
                          if (BB[ZB[36]] < ZB[1]) BB[ZB[36]] = BB[ZB[69]];
                          else {
                            KB(BB[ZB[36]] += BB[ZB[69]] * ZB[26], BB[ZB[37]] |= BB[ZB[36]] << BB[-ZB[80]], BB[-ZB[80]] += (BB[ZB[36]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                            do {
                              KB(BB[ZB[81]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[-ZB[80]] -= ZB[11])
                            } while (BB[-ZB[80]] > ZB[7]);
                            BB[ZB[36]] = -ZB[2]
                          } return BB[ZB[36]] > -ZB[2] && BB[ZB[81]].push((BB[ZB[37]] | BB[ZB[36]] << BB[-ZB[80]]) & ZB[12]), RB(BB[ZB[81]])
                    }

                    function PB(...BB) {
                      return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = MB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                    }
                    throw Error(PB(105))
                  }
                }
                if ((OB[-ZB[75]] & ZB[82]) == ZB[76]) {
                  if (KB(OB[-ZB[77]] = JB(), OB[ZB[19]] = JB(), OB[ZB[78]] = (OB[-ZB[75]] & ZB[56]) << ZB[23] | OB[-ZB[77]] << ZB[9] | OB[ZB[19]]), OB[ZB[78]] >= ZB[137]) return YB(OB[ZB[78]]), OB[ZB[78]];
                  throw Error(NB(106))
                }
                if ((OB[-ZB[75]] & ZB[140]) == ZB[82] && (KB(OB[-ZB[77]] = JB(), OB[ZB[19]] = JB(), OB[ZB[83]] = JB(), OB[ZB[78]] = (OB[-ZB[75]] & ZB[7]) << ZB[57] | OB[-ZB[77]] << ZB[23] | OB[ZB[19]] << ZB[9] | OB[ZB[83]]), OB[ZB[78]] >= ZB[44] && OB[ZB[78]] <= ZB[141])) return OB[ZB[78]];
                throw Error(DB(107))
              }

              function PB(...YB) {
                for (KB(YB[ZB[13]] = ZB[2], BB[ZB[10]] = OB(YB[ZB[1]]), BB[ZB[72]] = BB[ZB[10]].length, BB[ZB[50]] = ZB[1], YB[-ZB[85]] = [], YB[ZB[14]] = ZB[17]);
                  (YB[ZB[14]] = MB()) !== ZB[84];) YB[-ZB[85]].push(YB[ZB[14]]);
                return GB(YB[-ZB[85]])
              }
              KB(BB[ZB[13]] = ZB[2], BB[ZB[46]] = String.fromCharCode), KB(BB[ZB[10]] = ZB[17], BB[ZB[72]] = ZB[17], BB[ZB[50]] = ZB[17]), KB(BB[ZB[1]].version = NB(108), BB[ZB[1]].encode = oB, BB[ZB[1]].decode = PB)
            }(typeof exports === GB(109) + GB(ZB[77]) ? this.utf8 = {} : exports)
        }();
        const GB = fB;
        return DB()[OB(111) + OB(112)](GB, BB[ZB[14]]), DB()[OB(ZB[0])](BB[ZB[1]], GB, DB()[OB(ZB[6])](GB, BB[ZB[2]]))
      };

    function KB() {
      KB = function() {}
    }
    oB = (...BB) => {
      function OB(...BB) {
        return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
          for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = 'UtszD54&qrO8bGX!SWflPZ)>#Ljw(CmR_<v=26"i^u3y:coeJVx;pI~K0[gh|,?7Fak{}d$9n`M*N%QB.]1AHE+T/@Y', BB[ZB[86]] = "" + (BB[ZB[1]] || ""), BB[-ZB[87]] = BB[ZB[86]].length, BB[ZB[89]] = [], BB[ZB[88]] = ZB[1], BB[ZB[63]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[-ZB[87]]; BB[ZB[3]]++)
            if (BB[ZB[69]] = BB[ZB[5]].indexOf(BB[ZB[86]][BB[ZB[3]]]), BB[ZB[69]] !== -ZB[2])
              if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[69]];
              else {
                KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[ZB[88]] |= BB[ZB[7]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                do {
                  KB(BB[ZB[89]].push(BB[ZB[88]] & ZB[12]), BB[ZB[88]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                } while (BB[ZB[63]] > ZB[7]);
                BB[ZB[7]] = -ZB[2]
              } return BB[ZB[7]] > -ZB[2] && BB[ZB[89]].push((BB[ZB[88]] | BB[ZB[7]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[89]])
        }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
      }
      BB[ZB[13]] = ZB[11], OB(ZB[135]) + ZB[63] in WB && function(...BB) {
        KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = function(...BB) {
          for (KB(BB[ZB[13]] = ZB[2], BB[ZB[91]] = ZB[1], BB[ZB[14]] = {}, BB[ZB[19]] = ZB[1], BB[ZB[38]] = ZB[1], BB[ZB[32]] = ZB[1], BB[-ZB[90]] = BB[ZB[1]].length), BB[ZB[36]] = ZB[1]; BB[ZB[36]] < BB[-ZB[90]]; BB[ZB[36]]++) {
            for (KB(BB[ZB[14]] = {}, BB[ZB[19]] = ZB[1], BB[ZB[38]] = ZB[2]), BB[ZB[3]] = BB[ZB[36]] + ZB[2]; BB[ZB[3]] < BB[-ZB[90]]; BB[ZB[3]]++) BB[ZB[1]][BB[ZB[36]]].x !== BB[ZB[1]][BB[ZB[3]]].x || BB[ZB[1]][BB[ZB[36]]].y !== BB[ZB[1]][BB[ZB[3]]].y ? (BB[ZB[1]][BB[ZB[36]]].y === BB[ZB[1]][BB[ZB[3]]].y ? BB[ZB[32]] = Number.MAX_SAFE_INTEGER : BB[ZB[32]] = (BB[ZB[1]][BB[ZB[36]]].x - BB[ZB[1]][BB[ZB[3]]].x) / (BB[ZB[1]][BB[ZB[36]]].y - BB[ZB[1]][BB[ZB[3]]].y), BB[ZB[14]][BB[ZB[32]]] || (BB[ZB[14]][BB[ZB[32]]] = ZB[1]), KB(BB[ZB[14]][BB[ZB[32]]]++, BB[ZB[19]] = Math.max(BB[ZB[19]], BB[ZB[14]][BB[ZB[32]]]))) : BB[ZB[38]]++;
            KB(BB[ZB[19]] += BB[ZB[38]], BB[ZB[91]] = Math.max(BB[ZB[91]], BB[ZB[19]]))
          }
          return BB[ZB[91]]
        }, console.log(BB[ZB[5]]))
      }();
      const GB = BB[ZB[1]][OB(ZB[92])][OB(117) + OB(118) + OB(119)](BB[ZB[2]]);
      BB[ZB[11]] = BB[ZB[1]][OB(ZB[92])][OB(120) + OB(121) + OB(122) + "s"](GB);
      const YB = BB[ZB[11]] === ZB[94] ? BB[ZB[1]][OB(ZB[92])][OB(ZB[95]) + OB(ZB[96]) + OB(ZB[31]) + OB(ZB[97])](BB[ZB[2]], OB(ZB[59]) + OB(ZB[54]) + OB(ZB[93]) + ZB[37]) : BB[ZB[11]][OB(ZB[59]) + OB(ZB[54]) + OB(ZB[93]) + ZB[37]],
        oB = BB[ZB[11]] === ZB[94] ? BB[ZB[1]][OB(ZB[92])][OB(ZB[95]) + OB(ZB[96]) + OB(ZB[31]) + OB(ZB[97])](BB[ZB[2]], OB(ZB[98]) + OB(ZB[99]) + OB(ZB[100])) : BB[ZB[11]][OB(ZB[98]) + OB(ZB[99]) + OB(ZB[100])];
      KB(DB()[OB(133)](AB, ZB[1], ZB[1], BB[ZB[32]]), DB().sq(AB, AB, DB()[OB(134)], BB[ZB[4]].heading), DB()[OB(135)](kB, BB[ZB[10]].lZ), kB[ZB[2]] = ZB[1]);
      const JB = BB[ZB[14]][OB(ZB[85]) + OB(137)]();
      if (KB(BB[ZB[11]] = BB[ZB[1]][OB(ZB[92])][OB(138) + OB(139) + OB(140) + OB(141)](GB), BB[ZB[107]] = BB[ZB[11]] === ZB[94] ? BB[ZB[1]][OB(ZB[92])][OB(ZB[95]) + OB(ZB[96]) + OB(ZB[31]) + OB(ZB[97])](BB[ZB[2]], OB(ZB[101]) + OB(ZB[102])) : BB[ZB[11]][OB(ZB[101]) + OB(ZB[102])]), !JB && DB()[ZB[106]](kB) && (BB[ZB[11]] === ZB[94] ? BB[ZB[1]][OB(ZB[92])][OB(ZB[95]) + OB(ZB[96]) + OB(ZB[31]) + OB(ZB[97])](BB[ZB[2]], OB(144) + OB(145) + OB(146)) : BB[ZB[11]][OB(147) + OB(ZB[103]) + OB(ZB[138]) + OB(150)])) {
        function pB(...BB) {
          for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = 'Nq*y0fDQio`A#:7t![Pm@+d)u;3bYU%(,.I|~"nh1r?>{&l=2TZ6vpR5X8CKB$wM]9_Vs}FkEz^j<4x/eScGJaWgLOH', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[ZB[80]] = ZB[1], BB[-ZB[87]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[19]]; BB[ZB[3]]++)
            if (BB[ZB[69]] = BB[ZB[2]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[69]] !== -ZB[2])
              if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[69]];
              else {
                KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[ZB[80]] |= BB[ZB[7]] << BB[-ZB[87]], BB[-ZB[87]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                do {
                  KB(BB[ZB[38]].push(BB[ZB[80]] & ZB[12]), BB[ZB[80]] >>= ZB[11], BB[-ZB[87]] -= ZB[11])
                } while (BB[-ZB[87]] > ZB[7]);
                BB[ZB[7]] = -ZB[2]
              } return BB[ZB[7]] > -ZB[2] && BB[ZB[38]].push((BB[ZB[80]] | BB[ZB[7]] << BB[-ZB[87]]) & ZB[12]), RB(BB[ZB[38]])
        }

        function qB(...BB) {
          return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = pB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
        }

        function NB(...BB) {
          function OB() {}
          BB[ZB[13]] = ZB[1], KB(BB[ZB[105]] = function(...BB) {
            for (KB(BB[ZB[13]] = ZB[14], BB[ZB[86]] = ZB[1], BB[ZB[50]] = ZB[1], BB[ZB[104]] = new OB(ZB[1]), BB[-ZB[103]] = BB[ZB[104]], BB[ZB[37]] = BB[ZB[1]], BB[ZB[63]] = BB[ZB[2]]); BB[ZB[37]] !== ZB[94] || BB[ZB[63]] !== ZB[94];) KB(BB[ZB[50]] = (BB[ZB[37]] ? BB[ZB[37]].val : ZB[1]) + (BB[ZB[63]] ? BB[ZB[63]].val : ZB[1]) + BB[ZB[86]], BB[ZB[86]] = Math.floor(BB[ZB[50]] / ZB[47]), BB[-ZB[103]].next = new OB(BB[ZB[50]] % ZB[47]), BB[-ZB[103]] = BB[-ZB[103]].next, BB[ZB[37]] = BB[ZB[37]] ? BB[ZB[37]].next : ZB[94], BB[ZB[63]] = BB[ZB[63]] ? BB[ZB[63]].next : ZB[94]);
            return BB[ZB[86]] && (BB[-ZB[103]].next = new OB(BB[ZB[86]])), BB[ZB[104]].next
          }, console.log(BB[ZB[105]]))
        }
        qB(151) + "C" in WB && NB(), KB(dB(VB, AB, kB), dB(SB, kB, AB), DB()[qB(152)](nB, kB, SB));
        const fB = DB()[qB(ZB[43])](kB),
          uB = DB()[qB(154)](AB, kB) / BB[ZB[32]] / fB,
          mB = Math[qB(ZB[108])](uB, ZB[1]) + ZB[2];
        if (BB[ZB[32]] * BB[ZB[32]] < DB()[ZB[106]](SB)) {
          function IB(...BB) {
            KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = function(BB) {
              var OB, GB, YB, DB, QB = BB.length;
              for (KB(OB = [], GB = ZB[1]), YB = ZB[1]; YB < QB; YB++) OB.push(YB !== ZB[1] && BB[YB] > BB[YB - ZB[2]] ? OB[YB - ZB[2]] + ZB[2] : ZB[2]);
              for (DB = QB - ZB[2]; DB >= ZB[1]; DB--) DB !== QB - ZB[2] && BB[DB] > BB[DB + ZB[2]] && (OB[DB] = Math.max(OB[DB], OB[DB + ZB[2]] + ZB[2])), GB += OB[DB];
              return GB
            }, console.log(BB[ZB[5]]))
          }
          qB(ZB[139]) in WB && IB(), DB()[qB(ZB[70])](AB, AB, SB, mB)
        }
        KB(BB[ZB[107]] = (0, QB.v)(BB[ZB[107]], 1, Math[qB(ZB[108])](ZB[2], Math[qB(ZB[113])](ZB[1], -uB, ZB[2] - fB / BB[ZB[32]]))), DB()[qB(ZB[104])](AB, AB, nB))
      }
      const MB = UB;
      if (KB(DB()[OB(ZB[89])](MB, AB, kB), MB[ZB[2]] = ZB[1], BB[ZB[19]] = DB()[OB(161)](MB)), !JB) {
        function FB(...BB) {
          for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = '*;y2190.5/|{!3@m#e=o[]EA?Fi+4Z_fp(~&u)bnc6adsKG>h$xVUT<P,vgNBM7YlkDwStQ"zI8OLHR%CJ^Xqjr:}W`', BB[ZB[50]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[ZB[50]].length, BB[-ZB[110]] = [], BB[ZB[32]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[109]] = ZB[1]; BB[ZB[109]] < BB[ZB[4]]; BB[ZB[109]]++)
            if (BB[ZB[69]] = BB[ZB[2]].indexOf(BB[ZB[50]][BB[ZB[109]]]), BB[ZB[69]] !== -ZB[2])
              if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[69]];
              else {
                KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[ZB[32]] |= BB[ZB[7]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                do {
                  KB(BB[-ZB[110]].push(BB[ZB[32]] & ZB[12]), BB[ZB[32]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
                } while (BB[ZB[9]] > ZB[7]);
                BB[ZB[7]] = -ZB[2]
              } return BB[ZB[7]] > -ZB[2] && BB[-ZB[110]].push((BB[ZB[32]] | BB[ZB[7]] << BB[ZB[9]]) & ZB[12]), RB(BB[-ZB[110]])
        }

        function iB(...BB) {
          return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = FB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
        }

        function LB(...BB) {
          KB(BB[ZB[13]] = ZB[1], BB[-ZB[112]] = function(...OB) {
            return KB(OB[ZB[13]] = ZB[14], OB[ZB[14]] = [], OB[ZB[35]] = OB[ZB[1]].length, OB[ZB[1]].sort(((BB, OB) => BB - OB)), BB[ZB[2]](OB[ZB[14]], [], ZB[1], OB[ZB[35]], OB[ZB[1]], OB[ZB[2]])), OB[ZB[14]]
          }, BB[ZB[2]] = function(...OB) {
            if (KB(OB[ZB[13]] = ZB[9], OB[-ZB[111]] = ZB[94]), !(OB[ZB[32]] < ZB[1])) {
              if (OB[ZB[32]] === ZB[1]) return OB[ZB[1]].push(OB[ZB[2]]);
              for (OB[ZB[7]] = OB[ZB[14]]; OB[ZB[7]] < OB[ZB[4]] && !(OB[ZB[10]][OB[ZB[7]]] > OB[ZB[32]]); OB[ZB[7]]++) OB[ZB[7]] > OB[ZB[14]] && OB[ZB[10]][OB[ZB[7]]] === OB[ZB[10]][OB[ZB[7]] - ZB[2]] || KB(OB[-ZB[111]] = Array.from(OB[ZB[2]]), OB[-ZB[111]].push(OB[ZB[10]][OB[ZB[7]]]), BB[ZB[2]](OB[ZB[1]], OB[-ZB[111]], OB[ZB[7]] + ZB[2], OB[ZB[4]], OB[ZB[10]], OB[ZB[32]] - OB[ZB[10]][OB[ZB[7]]]))
            }
          }, console.log(BB[-ZB[112]]))
        }
        iB(ZB[25]) in WB && LB(), BB[ZB[19]] *= BB[ZB[107]]
      }
      const PB = BB[ZB[9]][OB(ZB[75]) + OB(164) + OB(165)],
        zB = PB ? Math[OB(166)](PB, BB[ZB[19]]) : BB[ZB[19]];
      DB()[OB(167) + OB(168)](MB, MB);
      const lB = BB[ZB[7]] !== ZB[94] && void 0 !== BB[ZB[7]] ? BB[ZB[7]] : BB[ZB[9]][OB(169) + OB(170) + OB(171) + OB(172)];
      if (zB > ZB[1]) {
        function gB(...BB) {
          for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '(rltWdH472eiD:CQ#v/ofz3h*B51pqX}xIVU8Os|yRmkA6M$E[)+,9T&]a~Z;u?"JNbP<cL0%g`!=Fw^G.@>n{SKjY_', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[-ZB[113]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[-ZB[42]] = ZB[1], BB[ZB[63]] = ZB[1], BB[-ZB[114]] = -ZB[2]), BB[ZB[11]] = ZB[1]; BB[ZB[11]] < BB[-ZB[113]]; BB[ZB[11]]++)
            if (BB[ZB[69]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[11]]]), BB[ZB[69]] !== -ZB[2])
              if (BB[-ZB[114]] < ZB[1]) BB[-ZB[114]] = BB[ZB[69]];
              else {
                KB(BB[-ZB[114]] += BB[ZB[69]] * ZB[26], BB[-ZB[42]] |= BB[-ZB[114]] << BB[ZB[63]], BB[ZB[63]] += (BB[-ZB[114]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                do {
                  KB(BB[ZB[38]].push(BB[-ZB[42]] & ZB[12]), BB[-ZB[42]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                } while (BB[ZB[63]] > ZB[7]);
                BB[-ZB[114]] = -ZB[2]
              } return BB[-ZB[114]] > -ZB[2] && BB[ZB[38]].push((BB[-ZB[42]] | BB[-ZB[114]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[38]])
        }

        function rB(...BB) {
          return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = gB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
        }

        function XB(...BB) {
          function OB(...BB) {
            return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
              for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '~HOsr5Xxd.i(P[F;=cyQ$!Bj,GS]aLVftvT1Rn{e}pzblJu?<Mm0Z>U3hA@7/I^6o&82Wk#D+9K)EN%|:w*4_"YgCq`', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[-ZB[116]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[-ZB[81]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[36]] = -ZB[2]), BB[ZB[115]] = ZB[1]; BB[ZB[115]] < BB[-ZB[116]]; BB[ZB[115]]++)
                if (BB[ZB[117]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[115]]]), BB[ZB[117]] !== -ZB[2])
                  if (BB[ZB[36]] < ZB[1]) BB[ZB[36]] = BB[ZB[117]];
                  else {
                    KB(BB[ZB[36]] += BB[ZB[117]] * ZB[26], BB[-ZB[81]] |= BB[ZB[36]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[36]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                    do {
                      KB(BB[ZB[38]].push(BB[-ZB[81]] & ZB[12]), BB[-ZB[81]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
                    } while (BB[ZB[9]] > ZB[7]);
                    BB[ZB[36]] = -ZB[2]
                  } return BB[ZB[36]] > -ZB[2] && BB[ZB[38]].push((BB[-ZB[81]] | BB[ZB[36]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[38]])
            }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
          }
          BB[ZB[13]] = ZB[1],
            function(...BB) {
              function OB(...BB) {
                for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = [], BB[ZB[50]] = ZB[1], BB[-ZB[120]] = BB[ZB[1]].length, BB[ZB[38]] = ZB[17], BB[ZB[32]] = ZB[17]); BB[ZB[50]] < BB[-ZB[120]];) KB(BB[ZB[38]] = BB[ZB[1]].charCodeAt(BB[ZB[50]]++), BB[ZB[38]] >= ZB[48] && BB[ZB[38]] <= ZB[121] && BB[ZB[50]] < BB[-ZB[120]] ? (BB[ZB[32]] = BB[ZB[1]].charCodeAt(BB[ZB[50]]++), (BB[ZB[32]] & ZB[122]) == ZB[49] ? BB[ZB[2]].push(((BB[ZB[38]] & ZB[41]) << ZB[47]) + (BB[ZB[32]] & ZB[41]) + ZB[44]) : (BB[ZB[2]].push(BB[ZB[38]]), BB[ZB[50]]--)) : BB[ZB[2]].push(BB[ZB[38]]));
                return BB[ZB[2]]
              }

              function GB(...BB) {
                if (BB[ZB[13]] = ZB[2], BB[ZB[1]] >= ZB[48] && BB[ZB[1]] <= ZB[125]) {
                  function OB(...BB) {
                    for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = 'aRoGSkFbDAmUfpCWQEMIqlniVHdtTKOLeJcXNghjBPu2YZ(s)8:#[%0{&v`|9+~.;w17*/x?<>}6"$y_5z]^4,=3@!r', BB[ZB[68]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[68]].length, BB[ZB[26]] = [], BB[-ZB[8]] = ZB[1], BB[ZB[63]] = ZB[1], BB[ZB[73]] = -ZB[2]), BB[ZB[11]] = ZB[1]; BB[ZB[11]] < BB[ZB[19]]; BB[ZB[11]]++)
                      if (BB[ZB[69]] = BB[ZB[2]].indexOf(BB[ZB[68]][BB[ZB[11]]]), BB[ZB[69]] !== -ZB[2])
                        if (BB[ZB[73]] < ZB[1]) BB[ZB[73]] = BB[ZB[69]];
                        else {
                          KB(BB[ZB[73]] += BB[ZB[69]] * ZB[26], BB[-ZB[8]] |= BB[ZB[73]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[73]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                          do {
                            KB(BB[ZB[26]].push(BB[-ZB[8]] & ZB[12]), BB[-ZB[8]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                          } while (BB[ZB[63]] > ZB[7]);
                          BB[ZB[73]] = -ZB[2]
                        } return BB[ZB[73]] > -ZB[2] && BB[ZB[26]].push((BB[-ZB[8]] | BB[ZB[73]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[26]])
                  }

                  function GB(...BB) {
                    return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = OB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                  }
                  throw Error(GB(ZB[78]) + GB(ZB[146]) + GB(176) + BB[ZB[1]].toString(ZB[46]).toUpperCase() + (GB(177) + GB(ZB[86]) + GB(179) + GB(ZB[62])))
                }
              }

              function YB(...OB) {
                return OB[ZB[13]] = ZB[14], BB[ZB[5]](OB[ZB[1]] >> OB[ZB[2]] & ZB[21] | ZB[54])
              }

              function DB(...OB) {
                return OB[ZB[13]] = ZB[2], (OB[ZB[1]] & ZB[126]) == ZB[1] ? BB[ZB[5]](OB[ZB[1]]) : (OB[ZB[5]] = "", (OB[ZB[1]] & ZB[127]) == ZB[1] ? OB[ZB[5]] = BB[ZB[5]](OB[ZB[1]] >> ZB[9] & ZB[55] | ZB[67]) : (OB[ZB[1]] & ZB[128]) == ZB[1] ? KB(GB(OB[ZB[1]]), OB[ZB[5]] = BB[ZB[5]](OB[ZB[1]] >> ZB[23] & ZB[56] | ZB[76]), OB[ZB[5]] += YB(OB[ZB[1]], ZB[9])) : (OB[ZB[1]] & ZB[129]) == ZB[1] && KB(OB[ZB[5]] = BB[ZB[5]](OB[ZB[1]] >> ZB[57] & ZB[7] | ZB[82]), OB[ZB[5]] += YB(OB[ZB[1]], ZB[23]), OB[ZB[5]] += YB(OB[ZB[1]], ZB[9])), OB[ZB[5]] += BB[ZB[5]](OB[ZB[1]] & ZB[21] | ZB[54]), OB[ZB[5]])
              }

              function QB(...OB) {
                if (OB[ZB[13]] = ZB[1], BB[ZB[133]] >= BB[ZB[4]]) throw Error(rB(ZB[81]));
                if (KB(OB[ZB[5]] = BB[ZB[38]][BB[ZB[133]]] & ZB[12], BB[ZB[133]]++), (OB[ZB[5]] & ZB[67]) == ZB[54]) return OB[ZB[5]] & ZB[21];
                throw Error(function(...BB) {
                  return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
                    for (KB(BB[ZB[13]] = ZB[2], BB[-ZB[25]] = ';>*_(QuZ]0b3:a4}ls9K7FLvfnd?!/"8^qAt&|1p6JyxNY`rWT5VBX=P@cS%gDk${<Mz,ICh#+w[R~E2)ioOH.ejUGm', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[131]] = BB[ZB[14]].length, BB[ZB[10]] = [], BB[-ZB[7]] = ZB[1], BB[ZB[63]] = ZB[1], BB[ZB[132]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[131]]; BB[ZB[3]]++)
                      if (BB[ZB[69]] = BB[-ZB[25]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[69]] !== -ZB[2])
                        if (BB[ZB[132]] < ZB[1]) BB[ZB[132]] = BB[ZB[69]];
                        else {
                          KB(BB[ZB[132]] += BB[ZB[69]] * ZB[26], BB[-ZB[7]] |= BB[ZB[132]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[132]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                          do {
                            KB(BB[ZB[10]].push(BB[-ZB[7]] & ZB[12]), BB[-ZB[7]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                          } while (BB[ZB[63]] > ZB[7]);
                          BB[ZB[132]] = -ZB[2]
                        } return BB[ZB[132]] > -ZB[2] && BB[ZB[10]].push((BB[-ZB[7]] | BB[ZB[132]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[10]])
                  }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                }(ZB[72]))
              }

              function oB(...OB) {
                if (OB[ZB[13]] = ZB[1], KB(OB[-ZB[58]] = ZB[17], OB[ZB[50]] = ZB[17], OB[ZB[19]] = ZB[17], OB[ZB[38]] = ZB[17], OB[ZB[37]] = ZB[17]), BB[ZB[133]] > BB[ZB[4]]) throw Error(rB(ZB[81]));
                if (BB[ZB[133]] == BB[ZB[4]]) return ZB[84];
                if (KB(OB[-ZB[58]] = BB[ZB[38]][BB[ZB[133]]] & ZB[12], BB[ZB[133]]++), (OB[-ZB[58]] & ZB[54]) == ZB[1]) return OB[-ZB[58]];
                if ((OB[-ZB[58]] & ZB[76]) == ZB[67]) {
                  if (KB(OB[ZB[50]] = QB(), OB[ZB[37]] = (OB[-ZB[58]] & ZB[55]) << ZB[9] | OB[ZB[50]]), OB[ZB[37]] >= ZB[54]) return OB[ZB[37]];
                  {
                    function YB(...BB) {
                      for (KB(BB[ZB[13]] = ZB[2], BB[-ZB[135]] = 'LV"qkA(Cun.I!eG0xHPvSU6@sEc/d#Q:4m|%pt8[iY^]gF,2MhBoTa+5br?KwZ$zW3OR9)X;NJl=~>D`j7}{&<*y1_f', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[ZB[136]] = ZB[1], BB[ZB[63]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[19]]; BB[ZB[3]]++)
                        if (BB[ZB[35]] = BB[-ZB[135]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[35]] !== -ZB[2])
                          if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[35]];
                          else {
                            KB(BB[ZB[7]] += BB[ZB[35]] * ZB[26], BB[ZB[136]] |= BB[ZB[7]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                            do {
                              KB(BB[ZB[38]].push(BB[ZB[136]] & ZB[12]), BB[ZB[136]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                            } while (BB[ZB[63]] > ZB[7]);
                            BB[ZB[7]] = -ZB[2]
                          } return BB[ZB[7]] > -ZB[2] && BB[ZB[38]].push((BB[ZB[136]] | BB[ZB[7]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[38]])
                    }

                    function DB(...BB) {
                      return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = YB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                    }
                    throw Error(DB(ZB[119]))
                  }
                }
                if ((OB[-ZB[58]] & ZB[82]) == ZB[76]) {
                  if (KB(OB[ZB[50]] = QB(), OB[ZB[19]] = QB(), OB[ZB[37]] = (OB[-ZB[58]] & ZB[56]) << ZB[23] | OB[ZB[50]] << ZB[9] | OB[ZB[19]]), OB[ZB[37]] >= ZB[137]) return GB(OB[ZB[37]]), OB[ZB[37]];
                  {
                    function oB(...BB) {
                      for (KB(BB[ZB[13]] = ZB[2], BB[ZB[138]] = 'fEk9~u6m+*:AKBUz%O1oZC!8)gH/xMQ;DIe,Gt7^W?Xsjn3q}N2vF>&y@.=4(da#b|$wJT][<`_5S0"LPVRchpiYlr{', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[139]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[ZB[32]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[7]] = -ZB[2]), BB[ZB[11]] = ZB[1]; BB[ZB[11]] < BB[ZB[139]]; BB[ZB[11]]++)
                        if (BB[ZB[69]] = BB[ZB[138]].indexOf(BB[ZB[14]][BB[ZB[11]]]), BB[ZB[69]] !== -ZB[2])
                          if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[ZB[69]];
                          else {
                            KB(BB[ZB[7]] += BB[ZB[69]] * ZB[26], BB[ZB[32]] |= BB[ZB[7]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                            do {
                              KB(BB[ZB[38]].push(BB[ZB[32]] & ZB[12]), BB[ZB[32]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
                            } while (BB[ZB[9]] > ZB[7]);
                            BB[ZB[7]] = -ZB[2]
                          } return BB[ZB[7]] > -ZB[2] && BB[ZB[38]].push((BB[ZB[32]] | BB[ZB[7]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[38]])
                    }

                    function JB(...BB) {
                      return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = oB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                    }
                    throw Error(JB(184))
                  }
                }
                if ((OB[-ZB[58]] & ZB[140]) == ZB[82] && (KB(OB[ZB[50]] = QB(), OB[ZB[19]] = QB(), OB[ZB[38]] = QB(), OB[ZB[37]] = (OB[-ZB[58]] & ZB[7]) << ZB[57] | OB[ZB[50]] << ZB[23] | OB[ZB[19]] << ZB[9] | OB[ZB[38]]), OB[ZB[37]] >= ZB[44] && OB[ZB[37]] <= ZB[141])) return OB[ZB[37]];
                throw Error(function(...BB) {
                  return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
                    for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = 'pAa6u8w]@Vv9.B5HxC;nh?}7zs(&my_^oDIeWMRlP"tX%!0+1q=4[N|)TEG~`U$/JQ>k*jKc2Y<FbZ#3gdrL,{f:OiS', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[14]].length, BB[ZB[10]] = [], BB[ZB[37]] = ZB[1], BB[-ZB[134]] = ZB[1], BB[ZB[36]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[19]]; BB[ZB[3]]++)
                      if (BB[ZB[35]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[35]] !== -ZB[2])
                        if (BB[ZB[36]] < ZB[1]) BB[ZB[36]] = BB[ZB[35]];
                        else {
                          KB(BB[ZB[36]] += BB[ZB[35]] * ZB[26], BB[ZB[37]] |= BB[ZB[36]] << BB[-ZB[134]], BB[-ZB[134]] += (BB[ZB[36]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                          do {
                            KB(BB[ZB[10]].push(BB[ZB[37]] & ZB[12]), BB[ZB[37]] >>= ZB[11], BB[-ZB[134]] -= ZB[11])
                          } while (BB[-ZB[134]] > ZB[7]);
                          BB[ZB[36]] = -ZB[2]
                        } return BB[ZB[36]] > -ZB[2] && BB[ZB[10]].push((BB[ZB[37]] | BB[ZB[36]] << BB[-ZB[134]]) & ZB[12]), RB(BB[ZB[10]])
                  }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
                }(185))
              }
              BB[ZB[13]] = ZB[2], BB[ZB[5]] = String.fromCharCode, KB(BB[ZB[38]] = ZB[17], BB[ZB[4]] = ZB[17], BB[ZB[133]] = ZB[17]), KB(BB[ZB[1]].version = function(...BB) {
                return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
                  for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '"EHXAZQ65zv8)$`hFNM|7Dx}[u&U@yLt]po3/I;O+gke4,*d>^s09(YKPWcb2?SqTwB_riGVa!n=1l:#.m<JC{j~f%R', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[-ZB[119]] = ZB[1], BB[ZB[63]] = ZB[1], BB[ZB[118]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[19]]; BB[ZB[3]]++)
                    if (BB[ZB[69]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[69]] !== -ZB[2])
                      if (BB[ZB[118]] < ZB[1]) BB[ZB[118]] = BB[ZB[69]];
                      else {
                        KB(BB[ZB[118]] += BB[ZB[69]] * ZB[26], BB[-ZB[119]] |= BB[ZB[118]] << BB[ZB[63]], BB[ZB[63]] += (BB[ZB[118]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                        do {
                          KB(BB[ZB[38]].push(BB[-ZB[119]] & ZB[12]), BB[-ZB[119]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                        } while (BB[ZB[63]] > ZB[7]);
                        BB[ZB[118]] = -ZB[2]
                      } return BB[ZB[118]] > -ZB[2] && BB[ZB[38]].push((BB[-ZB[119]] | BB[ZB[118]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[38]])
                }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
              }(186), BB[ZB[1]].encode = function(...BB) {
                for (KB(BB[ZB[13]] = ZB[2], BB[ZB[2]] = OB(BB[ZB[1]]), BB[ZB[50]] = BB[ZB[2]].length, BB[ZB[19]] = -ZB[2], BB[-ZB[130]] = ZB[17], BB[ZB[79]] = ""); ++BB[ZB[19]] < BB[ZB[50]];) KB(BB[-ZB[130]] = BB[ZB[2]][BB[ZB[19]]], BB[ZB[79]] += DB(BB[-ZB[130]]));
                return BB[ZB[79]]
              }, BB[ZB[1]].decode = function(...GB) {
                for (KB(GB[ZB[13]] = ZB[2], BB[ZB[38]] = OB(GB[ZB[1]]), BB[ZB[4]] = BB[ZB[38]].length, BB[ZB[133]] = ZB[1], GB[ZB[2]] = [], GB[ZB[50]] = ZB[17]);
                  (GB[ZB[50]] = oB()) !== ZB[84];) GB[ZB[2]].push(GB[ZB[50]]);
                return function(...OB) {
                  for (KB(OB[ZB[13]] = ZB[2], OB[ZB[123]] = OB[ZB[1]].length, OB[ZB[50]] = -ZB[2], OB[ZB[19]] = ZB[17], OB[ZB[10]] = ""); ++OB[ZB[50]] < OB[ZB[123]];) OB[ZB[19]] = OB[ZB[1]][OB[ZB[50]]], OB[ZB[19]] > ZB[124] && KB(OB[ZB[19]] -= ZB[44], OB[ZB[10]] += BB[ZB[5]](OB[ZB[19]] >>> ZB[47] & ZB[41] | ZB[48]), OB[ZB[19]] = ZB[49] | OB[ZB[19]] & ZB[41]), OB[ZB[10]] += BB[ZB[5]](OB[ZB[19]]);
                  return OB[ZB[10]]
                }(GB[ZB[2]])
              })
            }(typeof exports === OB(187) + OB(188) ? this.utf8 = {} : exports)
        }
        rB(ZB[133]) in WB && XB();
        let wB = BB[ZB[14]][rB(189) + rB(190)] * lB;
        if (!JB) {
          function cB(...BB) {
            for (KB(BB[ZB[13]] = ZB[2], BB[-ZB[42]] = 'rLesYAaBConHVMplgJifRIDdFKSQkN$P8=X;EjhWGqUO*):5T>Zm~c_t2}?.|z49v(u%y!{30@<#&b"],1[`^+xw76/', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[ZB[19]] = BB[ZB[14]].length, BB[ZB[143]] = [], BB[ZB[32]] = ZB[1], BB[ZB[63]] = ZB[1], BB[-ZB[142]] = -ZB[2]), BB[ZB[3]] = ZB[1]; BB[ZB[3]] < BB[ZB[19]]; BB[ZB[3]]++)
              if (BB[ZB[35]] = BB[-ZB[42]].indexOf(BB[ZB[14]][BB[ZB[3]]]), BB[ZB[35]] !== -ZB[2])
                if (BB[-ZB[142]] < ZB[1]) BB[-ZB[142]] = BB[ZB[35]];
                else {
                  KB(BB[-ZB[142]] += BB[ZB[35]] * ZB[26], BB[ZB[32]] |= BB[-ZB[142]] << BB[ZB[63]], BB[ZB[63]] += (BB[-ZB[142]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
                  do {
                    KB(BB[ZB[143]].push(BB[ZB[32]] & ZB[12]), BB[ZB[32]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
                  } while (BB[ZB[63]] > ZB[7]);
                  BB[-ZB[142]] = -ZB[2]
                } return BB[-ZB[142]] > -ZB[2] && BB[ZB[143]].push((BB[ZB[32]] | BB[-ZB[142]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[143]])
          }

          function hB(BB) {
            return typeof jB[BB] === ZB[16] ? jB[BB] = cB(yB[BB]) : jB[BB]
          }

          function aB(...BB) {
            function OB(...BB) {
              return BB[ZB[13]] = ZB[2], BB[ZB[1]][ZB[2]] * ZB[145] + (BB[ZB[1]][ZB[1]] < ZB[1] ? ZB[144] | BB[ZB[1]][ZB[1]] : BB[ZB[1]][ZB[1]])
            }

            function GB(...BB) {
              switch (BB[ZB[13]] = ZB[2], ((BB[ZB[1]] & ZB[144]) !== ZB[1]) * ZB[2] + (BB[ZB[1]] < ZB[1]) * ZB[14]) {
                case ZB[1]:
                  return [BB[ZB[1]] % ZB[144], Math.trunc(BB[ZB[1]] / ZB[145])];
                case ZB[2]:
                  return [BB[ZB[1]] % ZB[144] - ZB[144], Math.trunc(BB[ZB[1]] / ZB[145]) + ZB[2]];
                case ZB[14]:
                  return [((BB[ZB[1]] + ZB[144]) % ZB[144] + ZB[144]) % ZB[144], Math.round(BB[ZB[1]] / ZB[145])];
                case ZB[4]:
                  return [BB[ZB[1]] % ZB[144], Math.trunc(BB[ZB[1]] / ZB[145])]
              }
            }
            BB[ZB[13]] = ZB[1], KB(BB[ZB[5]] = OB([ZB[14], ZB[10]]), BB[-ZB[146]] = OB([ZB[2], ZB[14]]), BB[ZB[14]] = BB[ZB[5]] + BB[-ZB[146]], BB[ZB[113]] = BB[ZB[14]] - BB[-ZB[146]], BB[-ZB[130]] = BB[ZB[113]] * ZB[14], BB[ZB[32]] = BB[-ZB[130]] / ZB[14], console.log(GB(BB[ZB[14]])), console.log(GB(BB[ZB[113]])), console.log(GB(BB[-ZB[130]])), console.log(GB(BB[ZB[32]])))
          }
          hB(191) in WB && aB(), wB *= BB[ZB[14]][hB(ZB[67]) + hB(193)]
        }
        let EB = BB[ZB[14]][rB(ZB[132]) + rB(195) + "ss"] * zB;
        if (zB < .3 && (EB *= zB), wB > EB) {
          function eB(...BB) {
            function OB() {}
            BB[ZB[13]] = ZB[1], KB(BB[ZB[38]] = function(...BB) {
              for (KB(BB[ZB[13]] = ZB[14], BB[ZB[5]] = ZB[1], BB[-ZB[104]] = ZB[1], BB[ZB[19]] = new OB(ZB[1]), BB[ZB[38]] = BB[ZB[19]], BB[ZB[9]] = BB[ZB[1]], BB[ZB[7]] = BB[ZB[2]]); BB[ZB[9]] !== ZB[94] || BB[ZB[7]] !== ZB[94];) KB(BB[-ZB[104]] = (BB[ZB[9]] ? BB[ZB[9]].val : ZB[1]) + (BB[ZB[7]] ? BB[ZB[7]].val : ZB[1]) + BB[ZB[5]], BB[ZB[5]] = Math.floor(BB[-ZB[104]] / ZB[47]), BB[ZB[38]].next = new OB(BB[-ZB[104]] % ZB[47]), BB[ZB[38]] = BB[ZB[38]].next, BB[ZB[9]] = BB[ZB[9]] ? BB[ZB[9]].next : ZB[94], BB[ZB[7]] = BB[ZB[7]] ? BB[ZB[7]].next : ZB[94]);
              return BB[ZB[5]] && (BB[ZB[38]].next = new OB(BB[ZB[5]])), BB[ZB[19]].next
            }, console.log(BB[ZB[38]]))
          }
          rB(ZB[8]) + "P" in WB && eB(), wB = EB
        }
        KB(DB()[rB(197)](MB, MB, wB), BB[ZB[10]][rB(ZB[143]) + rB(199)](MB))
      }
      BB[ZB[10]][OB(200) + ZB[147]] = BB[ZB[14]][OB(201) + OB(ZB[54]) + ZB[147]] * (JB ? YB : oB)
    }
  },
  38313: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      f: () => jB
    });
    var YB = GB(38319),
      DB = GB(1998);
    const QB = 2,
      oB = 1,
      jB = {
        Wy: 1,
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

    function yB(BB, OB, GB, jB, yB, JB, MB) {
      if (yB.speed) return (0, YB.e)(OB, GB, jB, yB, JB, MB, BB), void(yB.ticksToReachMaxIdleFriction = QB);
      const PB = jB.isOnGround(),
        zB = OB.bloxd.getSyncedClientOptions(OB.bloxd.getPlayerReader(GB)),
        lB = null === zB ? OB.bloxd.getClientPredictedOption(GB, "groundFrictionScale") : zB.groundFrictionScale,
        pB = null === zB ? OB.bloxd.getClientPredictedOption(GB, "airFrictionScale") : zB.airFrictionScale,
        qB = PB ? lB : pB,
        ZB = Math.max(oB, qB),
        NB = yB.ticksToReachMaxIdleFriction / QB,
        RB = (0, DB.v)(ZB, qB, NB);
      JB.friction = BB.standingFriction * ((null === zB ? OB.bloxd.getClientPredictedOption(GB, "airMomentumConservation") : zB.airMomentumConservation) ? RB : qB), yB.ticksToReachMaxIdleFriction > 0 && yB.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);