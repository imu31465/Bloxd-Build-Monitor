export const id = 215;
export const ids = [215];
export const modules = {
  37858: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => yY
    });
    var FY = DY(213),
      AY = DY(36959);
    const IY = 1.2,
      RY = {
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
        TR: .5,
        hYY: !1
      },
      OY = {
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
        TR: .5,
        hYY: !1
      },
      gY = {
        physicsBodyDimensions: {
          width: FY.d.fW,
          height: FY.d.jW
        },
        hitBoxDimensions: {
          width: FY.d.fW + .4,
          height: FY.d.jW + .6
        },
        eyeHeight: FY.d.jW * FY.d.playerEyeToHeightRatio,
        rideHeight: FY.d.jW - .3,
        TR: .5,
        hYY: !1
      },
      aY = {
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
        TR: .5,
        hYY: !1
      },
      vY = {
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
        TR: .5,
        hYY: !1
      },
      uY = {
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
        TR: .5,
        hYY: !1
      },
      sY = {
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
        TR: .5,
        hYY: !1
      },
      iY = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: FY.d.fW,
            height: FY.d.jW
          },
          hitBoxDimensions: {
            width: FY.d.fW + .4,
            height: FY.d.jW + .6
          },
          eyeHeight: FY.d.jW * FY.d.playerEyeToHeightRatio,
          rideHeight: FY.d.jW - .1,
          TR: AY.i.TR,
          hYY: !0
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
        },
        Camel: {
          modelScale: IY,
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
        },
        "Cave Golem": RY,
        "Draugr Zombie": {
          ...gY,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": gY,
        "Frost Golem": RY,
        "Frost Zombie": {
          ...gY,
          defaultPose: "zombie"
        },
        "Frost Skeleton": gY,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: FY.d.fW,
            height: FY.d.jW
          },
          hitBoxDimensions: {
            width: FY.d.fW + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          TR: .5,
          hYY: !1
        },
        Wolf: aY,
        Bear: vY,
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
          TR: .5,
          hYY: !1
        },
        Stag: uY,
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
          TR: .5,
          hYY: !1
        },
        Gorilla: sY,
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
          TR: .5,
          hYY: !1
        },
        "Draugr Huntress": gY,
        "Magma Golem": RY,
        "Spirit Golem": RY,
        "Spirit Wolf": aY,
        "Spirit Bear": vY,
        "Spirit Stag": uY,
        "Spirit Gorilla": sY,
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: FY.d.fW,
            height: FY.d.jW
          },
          hitBoxDimensions: {
            width: FY.d.fW + .4,
            height: FY.d.jW + .6
          },
          eyeHeight: FY.d.jW * FY.d.playerEyeToHeightRatio,
          rideHeight: FY.d.jW - .1,
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: FY.d.fW,
            height: FY.d.jW
          },
          hitBoxDimensions: {
            width: FY.d.fW + .4,
            height: FY.d.jW + .6
          },
          eyeHeight: FY.d.jW * FY.d.playerEyeToHeightRatio,
          rideHeight: FY.d.jW - .1,
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
        },
        Zombie: {
          ...gY,
          defaultPose: "zombie"
        },
        Skeleton: gY,
        Mummy: {
          ...gY,
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
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
          TR: .5,
          hYY: !1
        },
        "Iron Guardian": OY,
        "Gold Guardian": OY,
        "Diamond Guardian": OY,
        "Moonstone Guardian": OY,
        "Iron Goofy Golem": OY,
        "Gold Goofy Golem": OY,
        "Diamond Goofy Golem": OY,
        "Moonstone Goofy Golem": OY,
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
          TR: .5,
          hYY: !1
        }
      };

    function yY(YY) {
      return iY[YY]
    }
  },
  36427: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = {
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
  36967: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(358),
      AY = DY.n(FY),
      IY = DY(1774);
    let RY;
    var OY, gY, aY, vY, uY, sY, iY, yY, QY;
    const oY = [2, 0, 1, 8, "c", "a", 141, 44, 5, 184, 175, 255, "length", 83, "d", 67, 4, "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 124, 3, 244, "h", 51, "i", 20, 91, 204, 35, 8191, 88, 13, 14, 186, 115, 9, 89, "e", 59, 113, 220, "f", !1, "b", 211, 43, 31, 90, 241, 39, !0, 143, 235, 126, 119, 97, 171, 190, 128, 144, 98, 130, null, 10, 121, 110, 111, 112, 106, 107, 108, 109, 114, 125, 127, 129, 131, 132, 167, 139, 73, 41, 40, 53, 237, "pr", 18, 25, "g", 16, 102, 74, 145, 137, 134, 100, 77, 195, 210, 229, 68, 165, 103, 38, 133, 169, 33554432, 67108864, 224, 140, 87, 152, 33, 72, 52, 58, 512, 172, void 0, 15, 188, 225, 193, 217, 1023, 80, 32, 24, 19, 64, 57, 194, 36, 65535, "on"];

    function WY(...YY) {
      return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = function(...YY) {
        for (HY(YY[oY[12]] = oY[2], YY[oY[5]] = 'IFqpnJ9g>yLxh6%V&ocG/~ba53E(YsMjtv^<$D]O:;UW2CQ_Per|d#Tf7B?uRSi4klXKA0!1wm[Hz*8+}N."{=),`Z@', YY[oY[0]] = "" + (YY[oY[1]] || ""), YY[oY[4]] = YY[oY[0]].length, YY[oY[10]] = [], YY[oY[8]] = oY[1], YY[-oY[9]] = oY[1], YY[oY[7]] = -oY[2]), YY[oY[3]] = oY[1]; YY[oY[3]] < YY[oY[4]]; YY[oY[3]]++)
          if (YY[-oY[6]] = YY[oY[5]].indexOf(YY[oY[0]][YY[oY[3]]]), YY[-oY[6]] !== -oY[2])
            if (YY[oY[7]] < oY[1]) YY[oY[7]] = YY[-oY[6]];
            else {
              HY(YY[oY[7]] += YY[-oY[6]] * oY[31], YY[oY[8]] |= YY[oY[7]] << YY[-oY[9]], YY[-oY[9]] += (YY[oY[7]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
              do {
                HY(YY[oY[10]].push(YY[oY[8]] & oY[11]), YY[oY[8]] >>= oY[3], YY[-oY[9]] -= oY[3])
              } while (YY[-oY[9]] > oY[21]);
              YY[oY[7]] = -oY[2]
            } return YY[oY[7]] > -oY[2] && YY[oY[10]].push((YY[oY[8]] | YY[oY[7]] << YY[-oY[9]]) & oY[11]), EY(YY[oY[10]])
      }(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
    }

    function EY(...YY) {
      return YY[oY[12]] = oY[2], typeof vY !== oY[17] && vY ? (new vY).decode(new uY(YY[oY[1]])) : typeof sY !== oY[17] && sY ? sY.from(YY[oY[1]]).toString("utf-8") : QY(YY[oY[1]])
    }

    function mY(...YY) {
      if (YY[oY[12]] = oY[25], YY[oY[1]] === function(...YY) {
          return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = function(...YY) {
            for (HY(YY[oY[12]] = oY[2], YY[-oY[28]] = 'ugXAWBCDKrLlETZ1RyF7Mdi[~ej=v;]sm6G!HN&w:kI"opbUV#t_qc.QY940+`z8x|h*2}aS)Jf@<{35(/$P?,%On^>', YY[-oY[26]] = "" + (YY[oY[1]] || ""), YY[oY[4]] = YY[-oY[26]].length, YY[-oY[38]] = [], YY[-oY[32]] = oY[1], YY[-oY[33]] = oY[1], YY[oY[30]] = -oY[2]), YY[oY[27]] = oY[1]; YY[oY[27]] < YY[oY[4]]; YY[oY[27]]++)
              if (YY[oY[29]] = YY[-oY[28]].indexOf(YY[-oY[26]][YY[oY[27]]]), YY[oY[29]] !== -oY[2])
                if (YY[oY[30]] < oY[1]) YY[oY[30]] = YY[oY[29]];
                else {
                  HY(YY[oY[30]] += YY[oY[29]] * oY[31], YY[-oY[32]] |= YY[oY[30]] << YY[-oY[33]], YY[-oY[33]] += (YY[oY[30]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                  do {
                    HY(YY[-oY[38]].push(YY[-oY[32]] & oY[11]), YY[-oY[32]] >>= oY[3], YY[-oY[33]] -= oY[3])
                  } while (YY[-oY[33]] > oY[21]);
                  YY[oY[30]] = -oY[2]
                } return YY[oY[30]] > -oY[2] && YY[-oY[38]].push((YY[-oY[32]] | YY[oY[30]] << YY[-oY[33]]) & oY[11]), EY(YY[-oY[38]])
          }(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
        }(oY[13])) return YY[oY[2]] + YY[oY[0]]
    }

    function VY() {}
    HY(OY = {}, gY = ["vPI8h$>kWlowyJsa1/wm)1u;.Bt(X6^$Q1CLM", ":Et9L]06pTMw#n:DR%)j{1~F", '#B:M0N";lhs+l$y', "1Cbje{&q$BPY?Skc`|*nY<mF", "%VhLE]`h.GA}#D[3x[)YT^lsMV", 'fyoMi^O_"Rs+g(15R%&8H0=B(ic^qNEsT^W*R^Gg#?5zLJ', "YA@|38dMNTCzk$^DAD79E:F3;%6S_.@bZC{*r?McB%Ax@Nd^Xa(t+B#6n", "W|pLJ[95pB^5IpEaj^XtKid)16RnNn>DlI", "ay|w~=06I~jjP_bY#PnJo]14)?I(?SC(,Ct|v}OF", 'N30[g$Mc`?Vf>V>D"O_ykQI', "BALtrQ(g$yCz{p_E^V<tV[*|#T,t$p:cL[rw]So<eXd5<?%:AI", "CEMff4N;S7?!F", "qVSfF$]h2i~z/1A]CA5(Ni/[KBU0fuV(GQ~Ls", '5RZ|)r>$y?"xw(QEmo_Yu*4H4#^+m0;jQi}eJ$I', "rBQeUez?J", "JAhg58.?rB[}meqcNP;|1NaFI~IH@3~^`>4Y>)w5nGny0nKc)O#jUDp6fkooF", "U/|w<8!?IVW%i0bYKI", "_1!n(8~F#?XxA(P^]PutY", "8l6f$8X?6~o.Z57<#Er>+0,g%Xo9Bw4sGVbje76#7lc0^]{^;hQY0RI", "LQAsU<Qh^h&ARw=:dBhg1[hkIc_LF", "V|H#58}?kVG^1!jsXy)1Y:<4>?&+6J%($|[s&d8cRu|", 'z7Xt#|/[<Gb6W.^5Ylo(,"g0i>A}MrJD:hH>lf`:g', "~VSg_OHgh%i%bN6(/yizPAS;El2nZ5AD#/^|pf+|^yMLPpo^2DEw^}~G9", "Zoh[R{fH2%wKDeKon1p", "5tgd38Zs%V{!8]WGb[qt`]}:Hi96>p", '{lfdqNJ#PB`*U%a^]E8Yq$JGATmKn"tc;WFH2He_tB}K7p', "*%%g1iH;eVI1I", "QyZTa1K<u%$", 'M^jY4RZ+=6"c}p^$T%=ja0I', 'Ln{*W!*=VVVf:_@ULcSL:TkcWxp?[0*Oa/Vy0wUhj~_nd(ta;/;|&"I', 'S1Qfd.us`/&oenu$aT+m&"3g+hY|}"s$KD0gnQB_cV4n{"%E', "Q1$L)0F0Y%?gY1)YZm)n", "as)jNi:Q+hX}^q", "b|V8Y=L$/B^wc.L", "O|QY3mxFCiUXJ{5Y{3izOmXAb?66<r8ElT8y~us_VVYl?eFooR[sDud:8#V+F", "V:keHN`56cI_Sw=(R/pJS?0gnGQXSw)^Suizy$h!0G", "{^OeK[9M9fvl#w>]cs]d8C2QABuxyPy", 'YTw9(=9$9G"#}(0jIXvTc0Qc|y$583SoBAiz"19Q(ulx)08:ziutAw%>X4meF', "`%qwzrZ0pB<0=$N:$p+m_4g,GB/f?3?<#PX#UT]$nGo5ew2O9Eq", "(DI9%N{}Zl]+D66EvA8mKPa<jX!3F", "tA4Y0NTM+#TgF", "nalTj=cdR7az((IMIh;HE8^hec", "z^lT%NTq", "LewTv=|4>?2d2_S<*lQn)dd)`/e}I", "]y4eLi<G[%!4I(2Gs^>M|DGG:?f!dn", "zD58!^a<?oOdr6>", "2^+z$<P:=k*7Y1v$HASjAP#;I~", "=Ygy]7W_+>%/reZ<]TnjgR634h!}}n]5Aiq", "MBpJ_OvG|B0Y1?yG]iRsK+cq", "9BzJh]lBtc]Y=}lav:lTb])AR7Yl6w?sYs{sLBf=>LXeoPl5ApQjb", "/9/sr?+B]kO+np:DKI", "Ve&(Y}z?.hQdPp", "jR%yP{RA<B@GDn>jxaq", "Q|ywadckmliXG%T;PyvM,un$&R.J2p(Y/TP9BO7An", "+C=rk^o_?x#07(1G", "+7x[0N;Flc(9huDG~a?tvmp0D6", "|T(*}BM[ylbj;&$D[U:9oi9c#6Sgi6y", "U[dL5uW6P#<wb%(sua:m<:,o*>%i%JxE{pq", 'oBiz@=^k.Ru~|%"(vsfy.08584)Vu.PEry)z+N=+(u0cT6^5Ph{[~=I', "4jy([0g6suB!leuaul:TO=&$+#k>JPP^TPY*s", 'oQo|c"_Bw?=N0n0GSlct/1Bs.VZRO!pcThq', "H9vHJNB_C>)!7$r:r:q(Z1g,z%+nF", "dl8Y>rD6:?v%ku@&", "oR!YW<b55?Am+<=(X|zrd?+4eyGMkpka>1azE:^q", "C139q#n?tV1!eev5bhfY7QaG6u]", '5V:y"uzdp', 'NDusiPp3FXw*RPFDqT&v{8n5+#WjXNg3Lh6L##;=kR30=04a"u6dE', 'Gy7y@]4;C%Y0m$ua{j#f."eFP#nSK.<M=YaYv1#F', 'oh1nk^}diV!bn"^M4aSL}iZo=?X>QD[3mxu#Fw9)gfq.m$rYBCm>T#I', "qB(LZumsUoxwO_f^(EzJmPJ3x//0}wcYEAJd5_&>Uu$YZRk5fI", "Chp*i^C<<kboB5@<&WQd@v1HjVW%[0$]ycr>P{BaJG]jar}E3Q8nGiI", "WExsAP.^I~6MF", "%efn/:YqLu}QrSqo_yVd1RE$vTl<^6jaHlQm/r=a!Gnw]q", "gnds=z9d^ydgwVi$z%fY?*=B(%{*{P]5koqHW4HgbG&5F", "_lG*(]I!}Rpq,EsU$T79+N7d+71bZ}^ojR~dwznMPc~p{_e(cyr(Q!I", "OA5H|Q;<_~", "{p3(JP?5IX5i$_=<fu39A#jgZ?B~US{:e9EwEToGGR~P9NM$", "_9I9(m`5w6>pku6/6A9jUDv;8xKm?SkMcEIvzfssnkITg.yGhB?|]S]5bkT", 'yB<[sS1B"y', 'ETU|~d1s(oP5&VzElDrt+"q>,/RnRuD5%h]fNN8dw6f!GpM$~1WLW}zdi>B', "//R*c0@54cT!mnPOvA0[8zSF", "2/d*fOI", "%Q(sgr_g!GG+B5~^%yF|s_t$XyGjH]wjLe]Y5uf6zu}QF", "9yGmhzjX", "h1|*arCF", "qQfL1A[RQ+b5FW^^${rxffE4[VtcGIC", "WqhD`I]!!;e", "k,wu}c+#", "apl_X_b?", "Kd?_5g[?", "W/^|1+tq", "X|]j*N/q", 'MfC1F"oK', "uB1.Xy=K", "A;ak", "Vl1kNQ<", "AB8{", "o?G#a;x^", ">q$yI.Y", "SWx7/>[z", "&W0amO[z", "WW+7", "SWf@9b6z", "UW=>[>%z", "FTf@!wgz", "vuG@%", "SWf@[>%z", "FTx7&,Gz", "6Ph{vOSz", ",Fhvvw6z", ".V8v5@Sz", "]VO>@}%z", "aT@*Bfqz", "4P0aJ,%z", "vMO>I@Z^", "_CCv~", "LWx7", "+Wf*<", "Pu4vL", "aXoVxgiz", "8IAy~", "SWf@9b8<0", "J[;+D*o,0", "uusyW*<}0", "4PVv|2/z", "vyV{LOY", "SWf@[>TL]<", "Pigva.p<HG", 'J[!0}}A"]<', "4PVv~w&z", "FThv!>u^", "aTdvR,Xz", "LMO>I@Y", "]IZP`Z?z", "=Id{", "C3RA", "IjP(", "m[RA", "/HXHzWfi", '"&Qcw_Rn', "RB9U(q;;", "bqJdI", "/5V(", "O).$", "mWG@w}Pz", "7f0K^5up", "^:j7i_cz", "&[.>}}[z", "dyk{", "NPAy", "]uVvNfqz", "8*k{", "&ukvb>Gz", "uMA|u,/z", "5]%7,}%z", "oq.=R,Y", "+t87n&K*", '#_:"vlb*', "(0:>", "_c&b%~5h", "pGJOCMaA", "|~6wIW<", "Fg!AX6V*", 'S5:"H<y*', "ysADNel]", "IVJl", "_q[Pw4Qp%5z#4eu4", "a7El=4;VbmiD<2!F", "p7Q9&F4pUl%fdeb4", "_;?&v6+Vm=@cDe`b", '%51&["mC}#vvW9p', "rYoSe%k,", '.^#*ibd"', 'RyFRJ]e"', "TSpt{", "RyFR,:NL", "!V#9[", "H]T{Js4)Jd%}asVx", "{2Ka[dkCB6Z`#6cH", "i]y:&>dLUizz?;2=", "<2~`D^wtzm7R;V]2", "`s4>j94fj+D^P^{", "u0=>?+P", "{v&0#Ml9", "6=hEU", "2VO>@}%z", "&ukvd@Ez"]), HY(aY = function(...YY) {
      HY(YY[oY[12]] = oY[1], YY[oY[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], YY[oY[2]] = oY[123], YY[-oY[13]] = []);
      try {
        HY(YY[oY[2]] = Object, YY[-oY[13]][oY[23]]("".__proto__.constructor.name))
      } catch (gY) {}
      YY: for (YY[oY[14]] = oY[1]; YY[oY[14]] < YY[oY[15]][oY[12]]; YY[oY[14]]++) try {
        for (YY[oY[2]] = YY[oY[15]][YY[oY[14]]](), YY[oY[16]] = oY[1]; YY[oY[16]] < YY[-oY[13]][oY[12]]; YY[oY[16]]++)
          if (typeof YY[oY[2]][YY[-oY[13]][YY[oY[16]]]] === oY[17]) continue YY;
        return YY[oY[2]]
      } catch (gY) {}
      return YY[oY[2]] || this
    }() || {}, vY = aY.TextDecoder, uY = aY.Uint8Array, sY = aY.Ny, iY = aY.String || String, yY = aY.Array || Array, QY = function(...YY) {
      return HY(YY[oY[12]] = oY[1], YY[oY[5]] = new yY(oY[63]), YY[-oY[24]] = iY[oY[20]] || iY.fromCharCode, YY[oY[4]] = []),
        function(rY) {
          var DY, FY, AY, IY;
          for (HY(FY = void 0, AY = rY[oY[12]], YY[oY[4]][oY[12]] = oY[1]), IY = oY[1]; IY < AY;) HY(FY = rY[IY++], FY <= oY[79] ? DY = FY : FY <= 223 ? DY = (FY & oY[51]) << oY[19] | rY[IY++] & oY[18] : FY <= 239 ? DY = (FY & oY[124]) << oY[22] | (rY[IY++] & oY[18]) << oY[19] | rY[IY++] & oY[18] : iY[oY[20]] ? DY = (FY & oY[21]) << oY[91] | (rY[IY++] & oY[18]) << oY[22] | (rY[IY++] & oY[18]) << oY[19] | rY[IY++] & oY[18] : (DY = oY[18], IY += oY[25]), YY[oY[4]][oY[23]](YY[oY[5]][DY] || (YY[oY[5]][DY] = YY[-oY[24]](DY))));
          return YY[oY[4]].join("")
        }
    }()), WY(84) in VY && (module.exports = async (YY = (...YY) => {
      function rY(...YY) {
        for (HY(YY[oY[12]] = oY[2], YY[oY[2]] = '}DhHWqURJxd]CjY,r+ntw(&uks_7?~$1<>MS*F:^oOGQe2/L)ITc50N;|{p9gBb6`Vzim"KA@Py[#!f=aXEvZl48%3.', YY[-oY[39]] = "" + (YY[oY[1]] || ""), YY[oY[4]] = YY[-oY[39]].length, YY[oY[16]] = [], YY[oY[42]] = oY[1], YY[oY[43]] = oY[1], YY[oY[41]] = -oY[2]), YY[oY[3]] = oY[1]; YY[oY[3]] < YY[oY[4]]; YY[oY[3]]++)
          if (YY[oY[40]] = YY[oY[2]].indexOf(YY[-oY[39]][YY[oY[3]]]), YY[oY[40]] !== -oY[2])
            if (YY[oY[41]] < oY[1]) YY[oY[41]] = YY[oY[40]];
            else {
              HY(YY[oY[41]] += YY[oY[40]] * oY[31], YY[oY[42]] |= YY[oY[41]] << YY[oY[43]], YY[oY[43]] += (YY[oY[41]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
              do {
                HY(YY[oY[16]].push(YY[oY[42]] & oY[11]), YY[oY[42]] >>= oY[3], YY[oY[43]] -= oY[3])
              } while (YY[oY[43]] > oY[21]);
              YY[oY[41]] = -oY[2]
            } return YY[oY[41]] > -oY[2] && YY[oY[16]].push((YY[oY[42]] | YY[oY[41]] << YY[oY[43]]) & oY[11]), EY(YY[oY[16]])
      }

      function DY(...YY) {
        return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = rY(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
      }
      throw YY[oY[12]] = oY[1], new Error(DY(85))
    }) => {
      function rY(...YY) {
        for (HY(YY[oY[12]] = oY[2], YY[-oY[45]] = '/S#9H7WGVduwgM)]fsy;T2,KaxnN4jPbDiX6_q+<|`%{"t~[1}EC*!Re^FL($mB&@zJZc>rvA8o=?Uk.Ih53YQl:pO0', YY[oY[0]] = "" + (YY[oY[1]] || ""), YY[-oY[44]] = YY[oY[0]].length, YY[oY[14]] = [], YY[oY[8]] = oY[1], YY[oY[46]] = oY[1], YY[oY[21]] = -oY[2]), YY[oY[3]] = oY[1]; YY[oY[3]] < YY[-oY[44]]; YY[oY[3]]++)
          if (YY[oY[29]] = YY[-oY[45]].indexOf(YY[oY[0]][YY[oY[3]]]), YY[oY[29]] !== -oY[2])
            if (YY[oY[21]] < oY[1]) YY[oY[21]] = YY[oY[29]];
            else {
              HY(YY[oY[21]] += YY[oY[29]] * oY[31], YY[oY[8]] |= YY[oY[21]] << YY[oY[46]], YY[oY[46]] += (YY[oY[21]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
              do {
                HY(YY[oY[14]].push(YY[oY[8]] & oY[11]), YY[oY[8]] >>= oY[3], YY[oY[46]] -= oY[3])
              } while (YY[oY[46]] > oY[21]);
              YY[oY[21]] = -oY[2]
            } return YY[oY[21]] > -oY[2] && YY[oY[14]].push((YY[oY[8]] | YY[oY[21]] << YY[oY[46]]) & oY[11]), EY(YY[oY[14]])
      }

      function DY(YY) {
        return typeof OY[YY] === oY[17] ? OY[YY] = rY(gY[YY]) : OY[YY]
      }
      const FY = new Set(process.argv.slice(oY[0]));
      if (!FY.has(DY(86))) {
        if (FY.size !== oY[2]) return oY[47];
        if (!FY.has("-v")) return oY[47]
      }
      return await (async (rY, DY) => {
        function FY(...YY) {
          for (HY(YY[oY[12]] = oY[2], YY[oY[5]] = '~q?pl,r>v!:<[*Nu1@B.b6dc`&z3TD"V4#{o8Qm7P=0+yJ/w2F9tHhY$f(eRXxsEZ)]ALgI;Wj}|M_KGniCa5O^Uk%S', YY[oY[48]] = "" + (YY[oY[1]] || ""), YY[oY[25]] = YY[oY[48]].length, YY[oY[50]] = [], YY[oY[42]] = oY[1], YY[oY[46]] = oY[1], YY[oY[21]] = -oY[2]), YY[oY[3]] = oY[1]; YY[oY[3]] < YY[oY[25]]; YY[oY[3]]++)
            if (YY[oY[49]] = YY[oY[5]].indexOf(YY[oY[48]][YY[oY[3]]]), YY[oY[49]] !== -oY[2])
              if (YY[oY[21]] < oY[1]) YY[oY[21]] = YY[oY[49]];
              else {
                HY(YY[oY[21]] += YY[oY[49]] * oY[31], YY[oY[42]] |= YY[oY[21]] << YY[oY[46]], YY[oY[46]] += (YY[oY[21]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                do {
                  HY(YY[oY[50]].push(YY[oY[42]] & oY[11]), YY[oY[42]] >>= oY[3], YY[oY[46]] -= oY[3])
                } while (YY[oY[46]] > oY[21]);
                YY[oY[21]] = -oY[2]
              } return YY[oY[21]] > -oY[2] && YY[oY[50]].push((YY[oY[42]] | YY[oY[21]] << YY[oY[46]]) & oY[11]), EY(YY[oY[50]])
        }

        function AY(...YY) {
          return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = FY(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
        }
        return DY === await YY() ? AY(oY[41]) + "l)" : ""
      })(), oY[55]
    });
    const SY = AY()[WY(oY[31])](),
      lY = AY()[WY(oY[31])](),
      TY = AY()[WY(oY[31])](),
      eY = AY()[WY(oY[31])](),
      NY = AY()[WY(oY[31])](),
      BY = AY()[WY(oY[31])](),
      cY = AY()[WY(oY[31])](),
      KY = (...YY) => {
        function rY(...YY) {
          return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = function(...YY) {
            for (HY(YY[oY[12]] = oY[2], YY[oY[58]] = '<6Kbzw7:kl{,O2H3x$F5f8Yp}`IA[SN>.d=ETuj)?90B*%_XsCU1P~Wgq"v/omDnV(i^y!4Q|t;ec&RhM@Zar#]GLJ+', YY[oY[56]] = "" + (YY[oY[1]] || ""), YY[-oY[57]] = YY[oY[56]].length, YY[-oY[59]] = [], YY[oY[8]] = oY[1], YY[oY[19]] = oY[1], YY[oY[21]] = -oY[2]), YY[oY[3]] = oY[1]; YY[oY[3]] < YY[-oY[57]]; YY[oY[3]]++)
              if (YY[oY[40]] = YY[oY[58]].indexOf(YY[oY[56]][YY[oY[3]]]), YY[oY[40]] !== -oY[2])
                if (YY[oY[21]] < oY[1]) YY[oY[21]] = YY[oY[40]];
                else {
                  HY(YY[oY[21]] += YY[oY[40]] * oY[31], YY[oY[8]] |= YY[oY[21]] << YY[oY[19]], YY[oY[19]] += (YY[oY[21]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                  do {
                    HY(YY[-oY[59]].push(YY[oY[8]] & oY[11]), YY[oY[8]] >>= oY[3], YY[oY[19]] -= oY[3])
                  } while (YY[oY[19]] > oY[21]);
                  YY[oY[21]] = -oY[2]
                } return YY[oY[21]] > -oY[2] && YY[-oY[59]].push((YY[oY[8]] | YY[oY[21]] << YY[oY[19]]) & oY[11]), EY(YY[-oY[59]])
          }(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
        }
        YY[oY[12]] = oY[25], rY(92) in VY && function(...YY) {
          HY(YY[oY[12]] = oY[1], YY[-oY[61]] = function(...rY) {
            return HY(rY[oY[12]] = oY[0], rY[oY[5]] = [], rY[oY[60]] = rY[oY[1]].length, rY[oY[1]].sort(((YY, rY) => YY - rY)), YY[oY[42]](rY[oY[5]], [], oY[1], rY[oY[60]], rY[oY[1]], rY[oY[2]])), rY[oY[5]]
          }, YY[oY[42]] = function(...rY) {
            if (HY(rY[oY[12]] = oY[19], rY[oY[5]] = oY[67]), !(rY[oY[8]] < oY[1])) {
              if (rY[oY[8]] === oY[1]) return rY[oY[1]].push(rY[oY[2]]);
              for (rY[oY[21]] = rY[oY[0]]; rY[oY[21]] < rY[oY[25]] && !(rY[oY[16]][rY[oY[21]]] > rY[oY[8]]); rY[oY[21]]++) rY[oY[21]] > rY[oY[0]] && rY[oY[16]][rY[oY[21]]] === rY[oY[16]][rY[oY[21]] - oY[2]] || HY(rY[oY[5]] = Array.from(rY[oY[2]]), rY[oY[5]].push(rY[oY[16]][rY[oY[21]]]), YY[oY[42]](rY[oY[1]], rY[oY[5]], rY[oY[21]] + oY[2], rY[oY[25]], rY[oY[16]], rY[oY[8]] - rY[oY[16]][rY[oY[21]]]))
            }
          }, console.log(YY[-oY[61]]))
        }();
        const DY = BY;
        return AY()[rY(93) + rY(94)](DY, YY[oY[0]]), AY()[rY(95)](YY[oY[1]], DY, AY()[rY(96)](DY, YY[oY[2]]))
      };

    function HY() {
      HY = function() {}
    }
    RY = (...YY) => {
      function rY(...YY) {
        return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = function(...YY) {
          for (HY(YY[oY[12]] = oY[2], YY[oY[2]] = 'Y^zC:+0#{y7t[DUW/pS<GxrmE~P8%9L=vJq4&]6`TRHuBFiNc)gVljXa?M(dIK5eAnQhf2.O$|*Z>@ws,}_k;b"31!o', YY[-oY[62]] = "" + (YY[oY[1]] || ""), YY[oY[4]] = YY[-oY[62]].length, YY[oY[14]] = [], YY[oY[65]] = oY[1], YY[oY[66]] = oY[1], YY[oY[64]] = -oY[2]), YY[-oY[63]] = oY[1]; YY[-oY[63]] < YY[oY[4]]; YY[-oY[63]]++)
            if (YY[oY[29]] = YY[oY[2]].indexOf(YY[-oY[62]][YY[-oY[63]]]), YY[oY[29]] !== -oY[2])
              if (YY[oY[64]] < oY[1]) YY[oY[64]] = YY[oY[29]];
              else {
                HY(YY[oY[64]] += YY[oY[29]] * oY[31], YY[oY[65]] |= YY[oY[64]] << YY[oY[66]], YY[oY[66]] += (YY[oY[64]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                do {
                  HY(YY[oY[14]].push(YY[oY[65]] & oY[11]), YY[oY[65]] >>= oY[3], YY[oY[66]] -= oY[3])
                } while (YY[oY[66]] > oY[21]);
                YY[oY[64]] = -oY[2]
              } return YY[oY[64]] > -oY[2] && YY[oY[14]].push((YY[oY[65]] | YY[oY[64]] << YY[oY[66]]) & oY[11]), EY(YY[oY[14]])
        }(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
      }
      YY[oY[12]] = oY[3], rY(oY[60]) + oY[46] in VY && function(...YY) {
        function rY() {}
        YY[oY[12]] = oY[1], HY(YY[oY[69]] = function(...YY) {
          for (HY(YY[oY[12]] = oY[0], YY[oY[0]] = oY[1], YY[oY[48]] = oY[1], YY[oY[16]] = new rY(oY[1]), YY[oY[14]] = YY[oY[16]], YY[oY[42]] = YY[oY[1]], YY[oY[46]] = YY[oY[2]]); YY[oY[42]] !== oY[67] || YY[oY[46]] !== oY[67];) HY(YY[oY[48]] = (YY[oY[42]] ? YY[oY[42]].val : oY[1]) + (YY[oY[46]] ? YY[oY[46]].val : oY[1]) + YY[oY[0]], YY[oY[0]] = Math.floor(YY[oY[48]] / oY[68]), YY[oY[14]].next = new rY(YY[oY[48]] % oY[68]), YY[oY[14]] = YY[oY[14]].next, YY[oY[42]] = YY[oY[42]] ? YY[oY[42]].next : oY[67], YY[oY[46]] = YY[oY[46]] ? YY[oY[46]].next : oY[67]);
          return YY[oY[0]] && (YY[oY[14]].next = new rY(YY[oY[0]])), YY[oY[16]].next
        }, console.log(YY[oY[69]]))
      }();
      const DY = YY[oY[1]][rY(oY[65])][rY(99) + rY(oY[100]) + rY(101)](YY[oY[2]]);
      YY[oY[5]] = YY[oY[1]][rY(oY[65])][rY(oY[95]) + rY(oY[107]) + rY(104) + rY(105)](DY);
      const FY = YY[oY[5]] === oY[67] ? YY[oY[1]][rY(oY[65])][rY(oY[73]) + rY(oY[74]) + rY(oY[75]) + rY(oY[76])](YY[oY[2]], rY(oY[70]) + rY(oY[71]) + rY(oY[72]) + oY[42]) : YY[oY[5]][rY(oY[70]) + rY(oY[71]) + rY(oY[72]) + oY[42]],
        RY = YY[oY[5]] === oY[67] ? YY[oY[1]][rY(oY[65])][rY(oY[73]) + rY(oY[74]) + rY(oY[75]) + rY(oY[76])](YY[oY[2]], rY(oY[44]) + rY(oY[77]) + rY(oY[39])) : YY[oY[5]][rY(oY[44]) + rY(oY[77]) + rY(oY[39])];
      HY(AY()[rY(116)](SY, oY[1], oY[1], YY[oY[8]]), AY().pg(SY, SY, AY()[rY(117)], YY[oY[25]].heading), AY()[rY(118)](cY, YY[oY[16]].ci), cY[oY[2]] = oY[1]);
      const aY = YY[oY[0]][rY(oY[59]) + rY(120)]();
      if (HY(YY[oY[5]] = YY[oY[1]][rY(oY[65])][rY(oY[69]) + rY(122) + rY(123) + "s"](DY), YY[oY[48]] = YY[oY[5]] === oY[67] ? YY[oY[1]][rY(oY[65])][rY(oY[73]) + rY(oY[74]) + rY(oY[75]) + rY(oY[76])](YY[oY[2]], rY(oY[24]) + rY(oY[78])) : YY[oY[5]][rY(oY[24]) + rY(oY[78])]), !aY && AY()[oY[90]](cY) && (YY[oY[5]] === oY[67] ? YY[oY[1]][rY(oY[65])][rY(oY[58]) + rY(oY[79]) + rY(oY[63])](YY[oY[2]], rY(oY[80]) + rY(oY[66]) + rY(oY[81]) + rY(oY[82])) : YY[oY[5]][rY(oY[80]) + rY(oY[66]) + rY(oY[81]) + rY(oY[82])])) {
        function yY(...YY) {
          for (HY(YY[oY[12]] = oY[2], YY[-oY[83]] = '>/,u5v=<$A(@)213oH~SMPBCz![I_OD%NL]ib}QY:^8jpr0m`xK#wV6c;Ey+q4asRg{d|*X9Z7G.lhUtnJek"W&Ff?T', YY[-oY[59]] = "" + (YY[oY[1]] || ""), YY[oY[25]] = YY[-oY[59]].length, YY[-oY[86]] = [], YY[oY[42]] = oY[1], YY[oY[19]] = oY[1], YY[oY[85]] = -oY[2]), YY[oY[3]] = oY[1]; YY[oY[3]] < YY[oY[25]]; YY[oY[3]]++)
            if (YY[oY[84]] = YY[-oY[83]].indexOf(YY[-oY[59]][YY[oY[3]]]), YY[oY[84]] !== -oY[2])
              if (YY[oY[85]] < oY[1]) YY[oY[85]] = YY[oY[84]];
              else {
                HY(YY[oY[85]] += YY[oY[84]] * oY[31], YY[oY[42]] |= YY[oY[85]] << YY[oY[19]], YY[oY[19]] += (YY[oY[85]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                do {
                  HY(YY[-oY[86]].push(YY[oY[42]] & oY[11]), YY[oY[42]] >>= oY[3], YY[oY[19]] -= oY[3])
                } while (YY[oY[19]] > oY[21]);
                YY[oY[85]] = -oY[2]
              } return YY[oY[85]] > -oY[2] && YY[-oY[86]].push((YY[oY[42]] | YY[oY[85]] << YY[oY[19]]) & oY[11]), EY(YY[-oY[86]])
        }

        function QY(...YY) {
          return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = yY(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
        }

        function WY(...YY) {
          function rY() {}
          YY[oY[12]] = oY[1], HY(YY[-oY[89]] = function(...YY) {
            for (HY(YY[oY[12]] = oY[0], YY[oY[88]] = oY[1], YY[-oY[87]] = oY[1], YY[oY[16]] = new rY(oY[1]), YY[oY[14]] = YY[oY[16]], YY[oY[19]] = YY[oY[1]], YY[oY[46]] = YY[oY[2]]); YY[oY[19]] !== oY[67] || YY[oY[46]] !== oY[67];) HY(YY[-oY[87]] = (YY[oY[19]] ? YY[oY[19]].val : oY[1]) + (YY[oY[46]] ? YY[oY[46]].val : oY[1]) + YY[oY[88]], YY[oY[88]] = Math.floor(YY[-oY[87]] / oY[68]), YY[oY[14]].next = new rY(YY[-oY[87]] % oY[68]), YY[oY[14]] = YY[oY[14]].next, YY[oY[19]] = YY[oY[19]] ? YY[oY[19]].next : oY[67], YY[oY[46]] = YY[oY[46]] ? YY[oY[46]].next : oY[67]);
            return YY[oY[88]] && (YY[oY[14]].next = new rY(YY[oY[88]])), YY[oY[16]].next
          }, console.log(YY[-oY[89]]))
        }
        rY(oY[109]) in VY && WY(), HY(KY(lY, SY, cY), KY(TY, cY, SY), AY()[rY(oY[99])](eY, cY, TY));
        const BY = AY()[QY(135)](cY),
          zY = AY()[QY(136)](SY, cY) / YY[oY[8]] / BY,
          ZY = Math[QY(oY[98])](zY, oY[1]) + oY[2];
        if (YY[oY[8]] * YY[oY[8]] < AY()[oY[90]](TY)) {
          function CY(...YY) {
            for (HY(YY[oY[12]] = oY[2], YY[oY[5]] = 'oinDKJHfOLdCsYQqZmRgheBbMrFEISjwNV.0=PA&UX2z)4l*pca#T5k,Wt|6u(9}%~{1@+x_$/<;?!v`y"38^7:[>]G', YY[oY[0]] = "" + (YY[oY[1]] || ""), YY[oY[25]] = YY[oY[0]].length, YY[oY[94]] = [], YY[-oY[91]] = oY[1], YY[oY[46]] = oY[1], YY[oY[93]] = -oY[2]), YY[oY[3]] = oY[1]; YY[oY[3]] < YY[oY[25]]; YY[oY[3]]++)
              if (YY[-oY[92]] = YY[oY[5]].indexOf(YY[oY[0]][YY[oY[3]]]), YY[-oY[92]] !== -oY[2])
                if (YY[oY[93]] < oY[1]) YY[oY[93]] = YY[-oY[92]];
                else {
                  HY(YY[oY[93]] += YY[-oY[92]] * oY[31], YY[-oY[91]] |= YY[oY[93]] << YY[oY[46]], YY[oY[46]] += (YY[oY[93]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                  do {
                    HY(YY[oY[94]].push(YY[-oY[91]] & oY[11]), YY[-oY[91]] >>= oY[3], YY[oY[46]] -= oY[3])
                  } while (YY[oY[46]] > oY[21]);
                  YY[oY[93]] = -oY[2]
                } return YY[oY[93]] > -oY[2] && YY[oY[94]].push((YY[-oY[91]] | YY[oY[93]] << YY[oY[46]]) & oY[11]), EY(YY[oY[94]])
          }

          function fY(...YY) {
            return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = CY(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
          }

          function jY(...YY) {
            YY[oY[12]] = oY[1];
            const rY = require("path"),
              {
                version: DY
              } = require("../../package"),
              {
                version: FY
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: AY
              } = require("@redacted/components/package"),
              {
                sdkVersion: IY
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), rY.resolve(__dirname, fY(oY[84]) + function(YY) {
              return typeof OY[YY] === oY[17] ? OY[YY] = function(...YY) {
                for (HY(YY[oY[12]] = oY[2], YY[oY[15]] = '*;`{rJ_A~BkTPmnX+)67bOuIC^[vosHQUD.t#ca2@iZ%EgR"5<:e13/(=$!>wphdN}09jlq?4FLGxKS]MW&yf8|zVY,', YY[oY[0]] = "" + (YY[oY[1]] || ""), YY[oY[96]] = YY[oY[0]].length, YY[oY[16]] = [], YY[-oY[97]] = oY[1], YY[-oY[95]] = oY[1], YY[oY[21]] = -oY[2]), YY[-oY[78]] = oY[1]; YY[-oY[78]] < YY[oY[96]]; YY[-oY[78]]++)
                  if (YY[oY[40]] = YY[oY[15]].indexOf(YY[oY[0]][YY[-oY[78]]]), YY[oY[40]] !== -oY[2])
                    if (YY[oY[21]] < oY[1]) YY[oY[21]] = YY[oY[40]];
                    else {
                      HY(YY[oY[21]] += YY[oY[40]] * oY[31], YY[-oY[97]] |= YY[oY[21]] << YY[-oY[95]], YY[-oY[95]] += (YY[oY[21]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                      do {
                        HY(YY[oY[16]].push(YY[-oY[97]] & oY[11]), YY[-oY[97]] >>= oY[3], YY[-oY[95]] -= oY[3])
                      } while (YY[-oY[95]] > oY[21]);
                      YY[oY[21]] = -oY[2]
                    } return YY[oY[21]] > -oY[2] && YY[oY[16]].push((YY[-oY[97]] | YY[oY[21]] << YY[-oY[95]]) & oY[11]), EY(YY[oY[16]])
              }(gY[YY]) : OY[YY]
            }(oY[114]) + "js")
          }
          fY(138) + "o" in VY && jY(), AY()[fY(oY[6])](SY, SY, TY, ZY)
        }
        HY(YY[oY[48]] = (0, IY.D)(YY[oY[48]], 1, Math[QY(oY[98])](oY[2], Math[QY(142)](oY[1], -zY, oY[2] - BY / YY[oY[8]]))), AY()[QY(oY[56])](SY, SY, eY))
      }
      const vY = NY;
      if (HY(AY()[rY(oY[99])](vY, SY, cY), vY[oY[2]] = oY[1], YY[oY[4]] = AY()[rY(oY[64])](vY)), !aY) {
        function hY(...YY) {
          for (HY(YY[oY[12]] = oY[2], YY[-oY[100]] = 'YSpJsHB%ueilO1a>RQnjv/PrZbdL)tofc`qV6Nh~wkF83C(IEW=UKmM|@&$AxgDT}G<;]5y_.29*!z+0{?[47^#,":X', YY[oY[0]] = "" + (YY[oY[1]] || ""), YY[oY[4]] = YY[oY[0]].length, YY[oY[101]] = [], YY[oY[42]] = oY[1], YY[-oY[31]] = oY[1], YY[oY[92]] = -oY[2]), YY[oY[27]] = oY[1]; YY[oY[27]] < YY[oY[4]]; YY[oY[27]]++)
            if (YY[oY[40]] = YY[-oY[100]].indexOf(YY[oY[0]][YY[oY[27]]]), YY[oY[40]] !== -oY[2])
              if (YY[oY[92]] < oY[1]) YY[oY[92]] = YY[oY[40]];
              else {
                HY(YY[oY[92]] += YY[oY[40]] * oY[31], YY[oY[42]] |= YY[oY[92]] << YY[-oY[31]], YY[-oY[31]] += (YY[oY[92]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                do {
                  HY(YY[oY[101]].push(YY[oY[42]] & oY[11]), YY[oY[42]] >>= oY[3], YY[-oY[31]] -= oY[3])
                } while (YY[-oY[31]] > oY[21]);
                YY[oY[92]] = -oY[2]
              } return YY[oY[92]] > -oY[2] && YY[oY[101]].push((YY[oY[42]] | YY[oY[92]] << YY[-oY[31]]) & oY[11]), EY(YY[oY[101]])
        }

        function dY(YY) {
          return typeof OY[YY] === oY[17] ? OY[YY] = hY(gY[YY]) : OY[YY]
        }

        function JY(...YY) {
          function rY() {}
          YY[oY[12]] = oY[1], HY(YY[oY[5]] = function(...YY) {
            for (HY(YY[oY[12]] = oY[0], YY[-oY[102]] = oY[1], YY[oY[25]] = oY[1], YY[oY[16]] = new rY(oY[1]), YY[oY[14]] = YY[oY[16]], YY[oY[42]] = YY[oY[1]], YY[oY[21]] = YY[oY[2]]); YY[oY[42]] !== oY[67] || YY[oY[21]] !== oY[67];) HY(YY[oY[25]] = (YY[oY[42]] ? YY[oY[42]].val : oY[1]) + (YY[oY[21]] ? YY[oY[21]].val : oY[1]) + YY[-oY[102]], YY[-oY[102]] = Math.floor(YY[oY[25]] / oY[68]), YY[oY[14]].next = new rY(YY[oY[25]] % oY[68]), YY[oY[14]] = YY[oY[14]].next, YY[oY[42]] = YY[oY[42]] ? YY[oY[42]].next : oY[67], YY[oY[21]] = YY[oY[21]] ? YY[oY[21]].next : oY[67]);
            return YY[-oY[102]] && (YY[oY[14]].next = new rY(YY[-oY[102]])), YY[oY[16]].next
          }, console.log(YY[oY[5]]))
        }
        dY(oY[97]) in VY && JY(), YY[oY[4]] *= YY[oY[48]]
      }
      const uY = YY[oY[19]][rY(146) + rY(147) + rY(148)],
        sY = uY ? Math[rY(149)](uY, YY[oY[4]]) : YY[oY[4]];
      AY()[rY(150) + rY(151)](vY, vY);
      const iY = YY[oY[21]] !== oY[67] && void 0 !== YY[oY[21]] ? YY[oY[21]] : YY[oY[19]][rY(oY[116]) + rY(153) + rY(154) + rY(155)];
      if (sY > oY[1]) {
        function MY(...YY) {
          for (HY(YY[oY[12]] = oY[2], YY[oY[104]] = 'P9*`;1o{>0A2s!)gkB8zy,hD%U57KF?E"xXr#}V~bjw_/nv]@lR=3Stm[fHYq|$(uJa.eNQ+4dLT^<6W&Zi:OMcIpCG', YY[oY[0]] = "" + (YY[oY[1]] || ""), YY[oY[103]] = YY[oY[0]].length, YY[oY[106]] = [], YY[oY[97]] = oY[1], YY[-oY[105]] = oY[1], YY[oY[78]] = -oY[2]), YY[oY[51]] = oY[1]; YY[oY[51]] < YY[oY[103]]; YY[oY[51]]++)
            if (YY[oY[40]] = YY[oY[104]].indexOf(YY[oY[0]][YY[oY[51]]]), YY[oY[40]] !== -oY[2])
              if (YY[oY[78]] < oY[1]) YY[oY[78]] = YY[oY[40]];
              else {
                HY(YY[oY[78]] += YY[oY[40]] * oY[31], YY[oY[97]] |= YY[oY[78]] << YY[-oY[105]], YY[-oY[105]] += (YY[oY[78]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                do {
                  HY(YY[oY[106]].push(YY[oY[97]] & oY[11]), YY[oY[97]] >>= oY[3], YY[-oY[105]] -= oY[3])
                } while (YY[-oY[105]] > oY[21]);
                YY[oY[78]] = -oY[2]
              } return YY[oY[78]] > -oY[2] && YY[oY[106]].push((YY[oY[97]] | YY[oY[78]] << YY[-oY[105]]) & oY[11]), EY(YY[oY[106]])
        }

        function wY(...YY) {
          return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = MY(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
        }

        function bY(...YY) {
          HY(YY[oY[12]] = oY[1], YY[oY[5]] = function(YY) {
            var rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY = YY.length;
            if (uY < oY[0]) return oY[1];
            if (HY(rY = Math.max(...YY), DY = Math.min(...YY)), rY === DY) return oY[1];
            for (HY(FY = Array(uY - oY[2]).fill(Number.MAX_SAFE_INTEGER), AY = Array(uY - oY[2]).fill(Number.MIN_SAFE_INTEGER), IY = Math.ceil((rY - DY) / (uY - oY[2])), RY = oY[1]), OY = oY[1]; OY < uY; OY++) YY[OY] !== DY && YY[OY] !== rY && HY(RY = Math.floor((YY[OY] - DY) / IY), FY[RY] = Math.min(FY[RY], YY[OY]), AY[RY] = Math.max(AY[RY], YY[OY]));
            for (HY(gY = Number.MIN_SAFE_INTEGER, aY = DY), vY = oY[1]; vY < uY - oY[2]; vY++) FY[vY] === Number.MAX_SAFE_INTEGER && AY[vY] === Number.MIN_SAFE_INTEGER || HY(gY = Math.max(gY, FY[vY] - aY), aY = AY[vY]);
            return gY = Math.max(gY, rY - aY)
          }, console.log(YY[oY[5]]))
        }
        wY(156) in VY && bY();
        let XY = YY[oY[0]][wY(157) + wY(158)] * iY;
        if (!aY) {
          function pY(...YY) {
            for (HY(YY[oY[12]] = oY[2], YY[oY[107]] = '<hABmbsFj=w(k4ctrvV3#`ZR>CGX6yo{OS1pf~%:xH*,;U.!DK7J+ua?8@zY^g|]qTnN/0dli[}LQ2M5IWE&_)9e"$P', YY[oY[108]] = "" + (YY[oY[1]] || ""), YY[oY[25]] = YY[oY[108]].length, YY[-oY[43]] = [], YY[oY[60]] = oY[1], YY[oY[46]] = oY[1], YY[oY[109]] = -oY[2]), YY[oY[27]] = oY[1]; YY[oY[27]] < YY[oY[25]]; YY[oY[27]]++)
              if (YY[-oY[110]] = YY[oY[107]].indexOf(YY[oY[108]][YY[oY[27]]]), YY[-oY[110]] !== -oY[2])
                if (YY[oY[109]] < oY[1]) YY[oY[109]] = YY[-oY[110]];
                else {
                  HY(YY[oY[109]] += YY[-oY[110]] * oY[31], YY[oY[60]] |= YY[oY[109]] << YY[oY[46]], YY[oY[46]] += (YY[oY[109]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                  do {
                    HY(YY[-oY[43]].push(YY[oY[60]] & oY[11]), YY[oY[60]] >>= oY[3], YY[oY[46]] -= oY[3])
                  } while (YY[oY[46]] > oY[21]);
                  YY[oY[109]] = -oY[2]
                } return YY[oY[109]] > -oY[2] && YY[-oY[43]].push((YY[oY[60]] | YY[oY[109]] << YY[oY[46]]) & oY[11]), EY(YY[-oY[43]])
          }

          function kY(YY) {
            return typeof OY[YY] === oY[17] ? OY[YY] = pY(gY[YY]) : OY[YY]
          }

          function GY(...YY) {
            function rY(...YY) {
              return YY[oY[12]] = oY[2], YY[oY[1]][oY[2]] * oY[112] + (YY[oY[1]][oY[1]] < oY[1] ? oY[111] | YY[oY[1]][oY[1]] : YY[oY[1]][oY[1]])
            }

            function DY(...YY) {
              switch (YY[oY[12]] = oY[2], ((YY[oY[1]] & oY[111]) !== oY[1]) * oY[2] + (YY[oY[1]] < oY[1]) * oY[0]) {
                case oY[1]:
                  return [YY[oY[1]] % oY[111], Math.trunc(YY[oY[1]] / oY[112])];
                case oY[2]:
                  return [YY[oY[1]] % oY[111] - oY[111], Math.trunc(YY[oY[1]] / oY[112]) + oY[2]];
                case oY[0]:
                  return [((YY[oY[1]] + oY[111]) % oY[111] + oY[111]) % oY[111], Math.round(YY[oY[1]] / oY[112])];
                case oY[25]:
                  return [YY[oY[1]] % oY[111], Math.trunc(YY[oY[1]] / oY[112])]
              }
            }
            YY[oY[12]] = oY[1], HY(YY[oY[5]] = rY([oY[0], oY[16]]), YY[oY[2]] = rY([oY[2], oY[0]]), YY[oY[102]] = YY[oY[5]] + YY[oY[2]], YY[oY[25]] = YY[oY[102]] - YY[oY[2]], YY[oY[49]] = YY[oY[25]] * oY[0], YY[oY[113]] = YY[oY[49]] / oY[0], console.log(DY(YY[oY[102]])), console.log(DY(YY[oY[25]])), console.log(DY(YY[oY[49]])), console.log(DY(YY[oY[113]])))
          }
          kY(159) in VY && GY(), XY *= YY[oY[0]][kY(160) + kY(161)]
        }
        let qY = YY[oY[0]][wY(162) + wY(163) + "ss"] * sY;
        if (sY < .3 && (qY *= sY), XY > qY) {
          function xY(...YY) {
            for (HY(YY[oY[12]] = oY[2], YY[-oY[114]] = 'pw]8y+@!?}D>G=l)^gZB6%Qxm<PVRhYzsi3~aAe4E&*CtukF/d1:n7M0of`[bc2jvKUX9_$OT#J|SH.,5LqN;"WI{r(', YY[oY[48]] = "" + (YY[oY[1]] || ""), YY[oY[25]] = YY[oY[48]].length, YY[oY[14]] = [], YY[oY[42]] = oY[1], YY[oY[46]] = oY[1], YY[oY[93]] = -oY[2]), YY[oY[27]] = oY[1]; YY[oY[27]] < YY[oY[25]]; YY[oY[27]]++)
              if (YY[oY[115]] = YY[-oY[114]].indexOf(YY[oY[48]][YY[oY[27]]]), YY[oY[115]] !== -oY[2])
                if (YY[oY[93]] < oY[1]) YY[oY[93]] = YY[oY[115]];
                else {
                  HY(YY[oY[93]] += YY[oY[115]] * oY[31], YY[oY[42]] |= YY[oY[93]] << YY[oY[46]], YY[oY[46]] += (YY[oY[93]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                  do {
                    HY(YY[oY[14]].push(YY[oY[42]] & oY[11]), YY[oY[42]] >>= oY[3], YY[oY[46]] -= oY[3])
                  } while (YY[oY[46]] > oY[21]);
                  YY[oY[93]] = -oY[2]
                } return YY[oY[93]] > -oY[2] && YY[oY[14]].push((YY[oY[42]] | YY[oY[93]] << YY[oY[46]]) & oY[11]), EY(YY[oY[14]])
          }

          function nY(...YY) {
            return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = xY(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
          }

          function PY(...YY) {
            HY(YY[oY[12]] = oY[1], YY[oY[48]] = function(...YY) {
              function rY(...YY) {
                return YY[oY[12]] = oY[0], IY(FY(RY(YY[oY[1]]), RY(YY[oY[2]])))
              }

              function DY(...YY) {
                return YY[oY[12]] = oY[25],
                  function(...YY) {
                    var rY, DY, FY, AY;
                    for (HY(YY[oY[12]] = oY[0], YY[oY[0]] = YY[oY[2]].length, YY[oY[25]] = Array()), YY[oY[16]] = Array(Math.ceil(YY[oY[1]].length / oY[0])), rY = oY[1]; rY < YY[oY[16]].length; rY++) YY[oY[16]][rY] = YY[oY[1]].charCodeAt(rY * oY[0]) << oY[3] | YY[oY[1]].charCodeAt(rY * oY[0] + oY[2]);
                    for (; YY[oY[16]].length > oY[1];) {
                      for (HY(AY = Array(), FY = oY[1]), rY = oY[1]; rY < YY[oY[16]].length; rY++) HY(FY = (FY << oY[94]) + YY[oY[16]][rY], DY = Math.floor(FY / YY[oY[0]]), FY -= DY * YY[oY[0]]), (AY.length > oY[1] || DY > oY[1]) && (AY[AY.length] = DY);
                      HY(YY[oY[25]][YY[oY[25]].length] = FY, YY[oY[16]] = AY)
                    }
                    for (YY[oY[14]] = "", rY = YY[oY[25]].length - oY[2]; rY >= oY[1]; rY--) YY[oY[14]] += YY[oY[2]].charAt(YY[oY[25]][rY]);
                    for (YY[-oY[45]] = Math.ceil(YY[oY[1]].length * oY[3] / (Math.log(YY[oY[2]].length) / Math.log(oY[0]))), rY = YY[oY[14]].length; rY < YY[-oY[45]]; rY++) YY[oY[14]] = YY[oY[2]][oY[1]] + YY[oY[14]];
                    return YY[oY[14]]
                  }(FY(RY(YY[oY[1]]), RY(YY[oY[2]])), YY[oY[0]])
              }

              function FY(...YY) {
                YY[oY[12]] = oY[0], YY[oY[0]] = aY(YY[oY[1]]), YY[oY[0]].length > oY[94] && (YY[oY[0]] = lY(YY[oY[0]], YY[oY[1]].length * oY[3]));
                var rY = Array(oY[94]),
                  DY = Array(oY[94]);
                for (YY[oY[48]] = oY[1]; YY[oY[48]] < oY[94]; YY[oY[48]]++) HY(rY[YY[oY[48]]] = 909522486 ^ YY[oY[0]][YY[oY[48]]], DY[YY[oY[48]]] = 1549556828 ^ YY[oY[0]][YY[oY[48]]]);
                return YY[oY[4]] = lY(rY.concat(aY(YY[oY[2]])), oY[121] + YY[oY[2]].length * oY[3]), vY(lY(DY.concat(YY[oY[4]]), mY(function(...YY) {
                  return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = function(...YY) {
                    for (HY(YY[oY[12]] = oY[2], YY[oY[104]] = ':;,?vu3N>m[a*gVO^Y!q&7tA4}k)Jfd(S2oM1="Z0`hCX_9zRI{Ub6$<5rLG+w%Ds@ePpjKl#cnT|WH/Q.8ByF~iE]x', YY[oY[0]] = "" + (YY[oY[1]] || ""), YY[oY[4]] = YY[oY[0]].length, YY[oY[16]] = [], YY[oY[8]] = oY[1], YY[-oY[120]] = oY[1], YY[-oY[119]] = -oY[2]), YY[oY[27]] = oY[1]; YY[oY[27]] < YY[oY[4]]; YY[oY[27]]++)
                      if (YY[oY[29]] = YY[oY[104]].indexOf(YY[oY[0]][YY[oY[27]]]), YY[oY[29]] !== -oY[2])
                        if (YY[-oY[119]] < oY[1]) YY[-oY[119]] = YY[oY[29]];
                        else {
                          HY(YY[-oY[119]] += YY[oY[29]] * oY[31], YY[oY[8]] |= YY[-oY[119]] << YY[-oY[120]], YY[-oY[120]] += (YY[-oY[119]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                          do {
                            HY(YY[oY[16]].push(YY[oY[8]] & oY[11]), YY[oY[8]] >>= oY[3], YY[-oY[120]] -= oY[3])
                          } while (YY[-oY[120]] > oY[21]);
                          YY[-oY[119]] = -oY[2]
                        } return YY[-oY[119]] > -oY[2] && YY[oY[16]].push((YY[oY[8]] | YY[-oY[119]] << YY[-oY[120]]) & oY[11]), EY(YY[oY[16]])
                  }(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
                }(oY[61]), oY[121], 256)))
              }

              function AY(...rY) {
                function FY(...YY) {
                  return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = function(YY) {
                    var rY, DY, FY, AY, IY, RY, OY;
                    for (HY(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = oY[1], IY = oY[1], RY = -oY[2]), OY = oY[1]; OY < DY; OY++) {
                      var gY = 'r"LCPIgw>pxSV|NdE{Bhj}nGk[lR8vA!.1,Ob/u=FeWD+]%K^aftm9c;Q7q(zY5Miy`H:os*U&Z@4_XJ<2$0#?~36)T'.indexOf(rY[OY]);
                      if (gY !== -oY[2])
                        if (RY < oY[1]) RY = gY;
                        else {
                          HY(RY += gY * oY[31], AY |= RY << IY, IY += (RY & oY[34]) > oY[35] ? oY[36] : oY[37]);
                          do {
                            HY(FY.push(AY & oY[11]), AY >>= oY[3], IY -= oY[3])
                          } while (IY > oY[21]);
                          RY = -oY[2]
                        }
                    }
                    return RY > -oY[2] && FY.push((AY | RY << IY) & oY[11]), EY(FY)
                  }(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
                }
                rY[oY[12]] = oY[2];
                try {
                  YY[oY[5]]
                } catch (DY) {
                  YY[oY[5]] = oY[1]
                }
                for (HY(rY[oY[5]] = YY[oY[5]] ? FY(oY[122]) + FY(173) + FY(174) : FY(oY[122]) + FY(oY[10]) + FY(176), rY[-oY[13]] = "", rY[oY[4]] = oY[123]), rY[oY[16]] = oY[1]; rY[oY[16]] < rY[oY[1]].length; rY[oY[16]]++) HY(rY[oY[4]] = rY[oY[1]].charCodeAt(rY[oY[16]]), rY[-oY[13]] += rY[oY[5]].charAt(rY[oY[4]] >>> oY[16] & oY[124]) + rY[oY[5]].charAt(rY[oY[4]] & oY[124]));
                return rY[-oY[13]]
              }

              function IY(...rY) {
                function FY(...YY) {
                  return YY[oY[12]] = oY[2], typeof OY[YY[oY[1]]] === oY[17] ? OY[YY[oY[1]]] = function(...YY) {
                    for (HY(YY[oY[12]] = oY[2], YY[oY[2]] = 'B75wv{].:+u1#$}6VWe(m@Q*CtAx&akH`Uf~9<=O)L%2DIE/s;lK,!g"|dFzPSGijJ?yM0c>_oYZpNRq^[rT43Xnhb8', YY[oY[48]] = "" + (YY[oY[1]] || ""), YY[oY[126]] = YY[oY[48]].length, YY[oY[14]] = [], YY[oY[8]] = oY[1], YY[oY[116]] = oY[1], YY[oY[21]] = -oY[2]), YY[oY[125]] = oY[1]; YY[oY[125]] < YY[oY[126]]; YY[oY[125]]++)
                      if (YY[oY[45]] = YY[oY[2]].indexOf(YY[oY[48]][YY[oY[125]]]), YY[oY[45]] !== -oY[2])
                        if (YY[oY[21]] < oY[1]) YY[oY[21]] = YY[oY[45]];
                        else {
                          HY(YY[oY[21]] += YY[oY[45]] * oY[31], YY[oY[8]] |= YY[oY[21]] << YY[oY[116]], YY[oY[116]] += (YY[oY[21]] & oY[34]) > oY[35] ? oY[36] : oY[37]);
                          do {
                            HY(YY[oY[14]].push(YY[oY[8]] & oY[11]), YY[oY[8]] >>= oY[3], YY[oY[116]] -= oY[3])
                          } while (YY[oY[116]] > oY[21]);
                          YY[oY[21]] = -oY[2]
                        } return YY[oY[21]] > -oY[2] && YY[oY[14]].push((YY[oY[8]] | YY[oY[21]] << YY[oY[116]]) & oY[11]), EY(YY[oY[14]])
                  }(gY[YY[oY[1]]]) : OY[YY[oY[1]]]
                }
                rY[oY[12]] = oY[2];
                try {
                  YY[oY[127]]
                } catch (DY) {
                  YY[oY[127]] = ""
                }
                for (HY(rY[oY[5]] = FY(177) + FY(178) + FY(179) + FY(180) + FY(181), rY[oY[61]] = "", rY[oY[25]] = rY[oY[1]].length), rY[-oY[117]] = oY[1]; rY[-oY[117]] < rY[oY[25]]; rY[-oY[117]] += oY[25])
                  for (rY[-oY[128]] = rY[oY[1]].charCodeAt(rY[-oY[117]]) << oY[94] | (rY[-oY[117]] + oY[2] < rY[oY[25]] ? rY[oY[1]].charCodeAt(rY[-oY[117]] + oY[2]) << oY[3] : oY[1]) | (rY[-oY[117]] + oY[0] < rY[oY[25]] ? rY[oY[1]].charCodeAt(rY[-oY[117]] + oY[0]) : oY[1]), rY[oY[46]] = oY[1]; rY[oY[46]] < oY[16]; rY[oY[46]]++) rY[-oY[117]] * oY[3] + rY[oY[46]] * oY[19] > rY[oY[1]].length * oY[3] ? rY[oY[61]] += YY[oY[127]] : rY[oY[61]] += rY[oY[5]].charAt(rY[-oY[128]] >>> oY[19] * (oY[25] - rY[oY[46]]) & oY[18]);
                return rY[oY[61]]
              }

              function RY(...YY) {
                var rY, DY;
                for (HY(YY[oY[12]] = oY[2], YY[oY[5]] = "", YY[oY[0]] = -oY[2]); ++YY[oY[0]] < YY[oY[1]].length;) HY(rY = YY[oY[1]].charCodeAt(YY[oY[0]]), DY = YY[oY[0]] + oY[2] < YY[oY[1]].length ? YY[oY[1]].charCodeAt(YY[oY[0]] + oY[2]) : oY[1]), 55296 <= rY && rY <= 56319 && 56320 <= DY && DY <= 57343 && HY(rY = 65536 + ((rY & oY[129]) << oY[68]) + (DY & oY[129]), YY[oY[0]]++), rY <= oY[79] ? YY[oY[5]] += String.fromCharCode(rY) : rY <= 2047 ? YY[oY[5]] += String.fromCharCode(192 | rY >>> oY[19] & oY[51], oY[63] | rY & oY[18]) : rY <= oY[138] ? YY[oY[5]] += String.fromCharCode(oY[113] | rY >>> oY[22] & oY[124], oY[63] | rY >>> oY[19] & oY[18], oY[63] | rY & oY[18]) : rY <= 2097151 && (YY[oY[5]] += String.fromCharCode(240 | rY >>> oY[91] & oY[21], oY[63] | rY >>> oY[22] & oY[18], oY[63] | rY >>> oY[19] & oY[18], oY[63] | rY & oY[18]));
                return YY[oY[5]]
              }

              function aY(...YY) {
                for (HY(YY[oY[12]] = oY[2], YY[oY[5]] = Array(YY[oY[1]].length >> oY[0])), YY[-oY[130]] = oY[1]; YY[-oY[130]] < YY[oY[5]].length; YY[-oY[130]]++) YY[oY[5]][YY[-oY[130]]] = oY[1];
                for (YY[-oY[130]] = oY[1]; YY[-oY[130]] < YY[oY[1]].length * oY[3]; YY[-oY[130]] += oY[3]) YY[oY[5]][YY[-oY[130]] >> oY[8]] |= (YY[oY[1]].charCodeAt(YY[-oY[130]] / oY[3]) & oY[11]) << oY[132] - YY[-oY[130]] % oY[131];
                return YY[oY[5]]
              }

              function vY(...YY) {
                for (HY(YY[oY[12]] = oY[2], YY[oY[2]] = ""), YY[oY[48]] = oY[1]; YY[oY[48]] < YY[oY[1]].length * oY[131]; YY[oY[48]] += oY[3]) YY[oY[2]] += String.fromCharCode(YY[oY[1]][YY[oY[48]] >> oY[8]] >>> oY[132] - YY[oY[48]] % oY[131] & oY[11]);
                return YY[oY[2]]
              }

              function uY(...YY) {
                return YY[oY[12]] = oY[0], YY[oY[1]] >>> YY[oY[2]] | YY[oY[1]] << oY[131] - YY[oY[2]]
              }

              function sY(...YY) {
                return YY[oY[12]] = oY[0], YY[oY[1]] >>> YY[oY[2]]
              }

              function iY(...YY) {
                return YY[oY[12]] = oY[25], YY[oY[1]] & YY[oY[2]] ^ ~YY[oY[1]] & YY[oY[0]]
              }

              function yY(...YY) {
                return YY[oY[12]] = oY[25], YY[oY[1]] & YY[oY[2]] ^ YY[oY[1]] & YY[oY[0]] ^ YY[oY[2]] & YY[oY[0]]
              }

              function QY(...YY) {
                return YY[oY[12]] = oY[2], uY(YY[oY[1]], oY[0]) ^ uY(YY[oY[1]], oY[36]) ^ uY(YY[oY[1]], 22)
              }

              function WY(...YY) {
                return YY[oY[12]] = oY[2], uY(YY[oY[1]], oY[19]) ^ uY(YY[oY[1]], 11) ^ uY(YY[oY[1]], oY[92])
              }

              function VY(...YY) {
                return YY[oY[12]] = oY[2], uY(YY[oY[1]], oY[21]) ^ uY(YY[oY[1]], oY[91]) ^ sY(YY[oY[1]], oY[25])
              }

              function SY(...YY) {
                return YY[oY[12]] = oY[2], uY(YY[oY[1]], 17) ^ uY(YY[oY[1]], oY[133]) ^ sY(YY[oY[1]], oY[68])
              }

              function lY(...rY) {
                var DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, EY;
                for (HY(rY[oY[12]] = oY[0], rY[-oY[135]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), rY[oY[136]] = new Array(oY[134])), HY(rY[oY[1]][rY[oY[2]] >> oY[8]] |= oY[63] << oY[132] - rY[oY[2]] % oY[131], rY[oY[1]][(rY[oY[2]] + oY[134] >> oY[40] << oY[16]) + oY[124]] = rY[oY[2]]), vY = oY[1]; vY < rY[oY[1]].length; vY += oY[94]) {
                  for (HY(DY = rY[-oY[135]][oY[1]], FY = rY[-oY[135]][oY[2]], AY = rY[-oY[135]][oY[0]], IY = rY[-oY[135]][oY[25]], RY = rY[-oY[135]][oY[16]], OY = rY[-oY[135]][oY[8]], gY = rY[-oY[135]][oY[19]], aY = rY[-oY[135]][oY[21]]), uY = oY[1]; uY < oY[134]; uY++) HY(rY[oY[136]][uY] = uY < oY[94] ? rY[oY[1]][uY + vY] : TY(TY(TY(SY(rY[oY[136]][uY - oY[0]]), rY[oY[136]][uY - oY[21]]), VY(rY[oY[136]][uY - oY[124]])), rY[oY[136]][uY - oY[94]]), sY = TY(TY(TY(TY(aY, WY(RY)), iY(RY, OY, gY)), YY[-oY[137]][uY]), rY[oY[136]][uY]), EY = TY(QY(DY), yY(DY, FY, AY)), aY = gY, gY = OY, OY = RY, RY = TY(IY, sY), IY = AY, AY = FY, FY = DY, DY = TY(sY, EY));
                  HY(rY[-oY[135]][oY[1]] = TY(DY, rY[-oY[135]][oY[1]]), rY[-oY[135]][oY[2]] = TY(FY, rY[-oY[135]][oY[2]]), rY[-oY[135]][oY[0]] = TY(AY, rY[-oY[135]][oY[0]]), rY[-oY[135]][oY[25]] = TY(IY, rY[-oY[135]][oY[25]]), rY[-oY[135]][oY[16]] = TY(RY, rY[-oY[135]][oY[16]]), rY[-oY[135]][oY[8]] = TY(OY, rY[-oY[135]][oY[8]]), rY[-oY[135]][oY[19]] = TY(gY, rY[-oY[135]][oY[19]]), rY[-oY[135]][oY[21]] = TY(aY, rY[-oY[135]][oY[21]]))
                }
                return rY[-oY[135]]
              }

              function TY(YY, rY) {
                var DY = (YY & oY[138]) + (rY & oY[138]);
                return (YY >> oY[94]) + (rY >> oY[94]) + (DY >> oY[94]) << oY[94] | DY & oY[138]
              }
              return HY(YY[oY[12]] = oY[1], YY[oY[5]] = oY[1], YY[oY[127]] = ""), YY[-oY[137]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...YY) {
                  return YY[oY[12]] = oY[2], AY(function(...YY) {
                    return YY[oY[12]] = oY[2], vY(lY(aY(YY[oY[1]]), YY[oY[1]].length * oY[3]))
                  }(RY(YY[oY[1]])))
                },
                b64: rY,
                any: DY,
                hex_hmac: function(...YY) {
                  return YY[oY[12]] = oY[0], AY(FY(RY(YY[oY[1]]), RY(YY[oY[2]])))
                },
                b64_hmac: rY,
                any_hmac: DY
              }
            }(), console.log(YY[oY[48]]))
          }
          nY(164) in VY && PY(), XY = qY
        }
        HY(AY()[wY(182)](vY, vY, XY), YY[oY[16]][wY(183) + wY(oY[9])](vY))
      }
      YY[oY[16]][rY(185) + oY[139]] = YY[oY[0]][rY(oY[38]) + rY(oY[71]) + oY[139]] * (aY ? FY : RY)
    }
  },
  36959: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY,
      i: () => OY
    });
    var FY = DY(36967),
      AY = DY(1774);
    const IY = 2,
      RY = 1,
      OY = {
        TR: 1,
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

    function gY(YY, rY, DY, OY, gY, aY, vY) {
      if (gY.speed) return (0, FY.c)(rY, DY, OY, gY, aY, vY, YY), void(gY.ticksToReachMaxIdleFriction = IY);
      const uY = OY.isOnGround(),
        sY = rY.bloxd.getSyncedClientOptions(rY.bloxd.getPlayerReader(DY)),
        iY = null === sY ? rY.bloxd.getClientPredictedOption(DY, "groundFrictionScale") : sY.groundFrictionScale,
        yY = null === sY ? rY.bloxd.getClientPredictedOption(DY, "airFrictionScale") : sY.airFrictionScale,
        QY = uY ? iY : yY,
        oY = Math.max(RY, QY),
        WY = gY.ticksToReachMaxIdleFriction / IY,
        EY = (0, AY.D)(oY, QY, WY);
      aY.friction = YY.standingFriction * ((null === sY ? rY.bloxd.getClientPredictedOption(DY, "airMomentumConservation") : sY.airMomentumConservation) ? EY : QY), gY.ticksToReachMaxIdleFriction > 0 && gY.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);