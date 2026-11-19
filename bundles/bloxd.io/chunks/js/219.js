export const id = 219;
export const ids = [219];
export const modules = {
  37839: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => tD
    });
    var ID = cD(194),
      pD = cD(37024);
    const iD = 1.2,
      fD = {
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
        pb: .5,
        VDD: !1
      },
      bD = {
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
        pb: .5,
        VDD: !1
      },
      QD = {
        physicsBodyDimensions: {
          width: ID.h.vN,
          height: ID.h.XN
        },
        hitBoxDimensions: {
          width: ID.h.vN + .4,
          height: ID.h.XN + .6
        },
        eyeHeight: ID.h.XN * ID.h.playerEyeToHeightRatio,
        rideHeight: ID.h.XN - .3,
        pb: .5,
        VDD: !1
      },
      wD = {
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
        pb: .5,
        VDD: !1
      },
      SD = {
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
        pb: .5,
        VDD: !1
      },
      BD = {
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
        pb: .5,
        VDD: !1
      },
      yD = {
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
        pb: .5,
        VDD: !1
      },
      MD = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: ID.h.vN,
            height: ID.h.XN
          },
          hitBoxDimensions: {
            width: ID.h.vN + .4,
            height: ID.h.XN + .6
          },
          eyeHeight: ID.h.XN * ID.h.playerEyeToHeightRatio,
          rideHeight: ID.h.XN - .1,
          pb: pD.e.pb,
          VDD: !0
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
        },
        Camel: {
          modelScale: iD,
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
        },
        "Cave Golem": fD,
        "Draugr Zombie": {
          ...QD,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": QD,
        "Frost Golem": fD,
        "Frost Zombie": {
          ...QD,
          defaultPose: "zombie"
        },
        "Frost Skeleton": QD,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: ID.h.vN,
            height: ID.h.XN
          },
          hitBoxDimensions: {
            width: ID.h.vN + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          pb: .5,
          VDD: !1
        },
        Wolf: wD,
        Bear: SD,
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
          pb: .5,
          VDD: !1
        },
        Stag: BD,
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
          pb: .5,
          VDD: !1
        },
        Gorilla: yD,
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
          pb: .5,
          VDD: !1
        },
        "Draugr Huntress": QD,
        "Magma Golem": fD,
        "Spirit Golem": fD,
        "Spirit Wolf": wD,
        "Spirit Bear": SD,
        "Spirit Stag": BD,
        "Spirit Gorilla": yD,
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: ID.h.vN,
            height: ID.h.XN
          },
          hitBoxDimensions: {
            width: ID.h.vN + .4,
            height: ID.h.XN + .6
          },
          eyeHeight: ID.h.XN * ID.h.playerEyeToHeightRatio,
          rideHeight: ID.h.XN - .1,
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: ID.h.vN,
            height: ID.h.XN
          },
          hitBoxDimensions: {
            width: ID.h.vN + .4,
            height: ID.h.XN + .6
          },
          eyeHeight: ID.h.XN * ID.h.playerEyeToHeightRatio,
          rideHeight: ID.h.XN - .1,
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
        },
        Zombie: {
          ...QD,
          defaultPose: "zombie"
        },
        Skeleton: QD,
        Mummy: {
          ...QD,
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
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
          pb: .5,
          VDD: !1
        },
        "Iron Guardian": bD,
        "Gold Guardian": bD,
        "Diamond Guardian": bD,
        "Moonstone Guardian": bD,
        "Iron Goofy Golem": bD,
        "Gold Goofy Golem": bD,
        "Diamond Goofy Golem": bD,
        "Moonstone Goofy Golem": bD,
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
          pb: .5,
          VDD: !1
        }
      };

    function tD(DD) {
      return MD[DD]
    }
  },
  36420: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    const ID = {
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
  37028: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(335),
      pD = cD.n(ID),
      iD = cD(1865);
    let fD;
    var bD, QD, wD, SD, BD, yD, MD, tD, ZD;
    const oD = ["b", 0, 1, "h", 21, 141, 214, 7, "e", 6, 4, 8, 255, "length", "d", 72, 3, 114, 70, "undefined", void 0, "c", 76, 237, 63, "fromCodePoint", 12, "push", 121, 2, 236, 128, "g", 91, 5, "f", 8191, 88, 13, 14, 210, "a", 54, 19, 109, 154, 66, 127, 138, 139, 140, null, 135, 136, 137, 142, 143, 156, 157, 152, 153, 155, 158, 159, 160, 161, 33, 204, 179, "i", 100, 207, 22, 45, 244, 166, 226, 60, "=", ";", "rc", 9, !1, 168, 212, 105, 104, 217, 96, 75, 93, "on"];

    function vD(...DD) {
      return DD[oD[13]] = oD[2], typeof bD[DD[oD[1]]] === oD[19] ? bD[DD[oD[1]]] = function(...DD) {
        for (qD(DD[oD[13]] = oD[2], DD[oD[5]] = '("rA,xl);8Jwnbs3@_BHFVQL9}E/q=KCNW!]yfRX1?.zOD:`5ohvU{4<PYk#I6S%MZu[$7GT&0t^~*idm|ga2>+jepc', DD[oD[0]] = "" + (DD[oD[1]] || ""), DD[oD[4]] = DD[oD[0]].length, DD[oD[10]] = [], DD[oD[8]] = oD[1], DD[oD[9]] = oD[1], DD[oD[7]] = -oD[2]), DD[oD[3]] = oD[1]; DD[oD[3]] < DD[oD[4]]; DD[oD[3]]++)
          if (DD[-oD[6]] = DD[oD[5]].indexOf(DD[oD[0]][DD[oD[3]]]), DD[-oD[6]] !== -oD[2])
            if (DD[oD[7]] < oD[1]) DD[oD[7]] = DD[-oD[6]];
            else {
              qD(DD[oD[7]] += DD[-oD[6]] * oD[33], DD[oD[8]] |= DD[oD[7]] << DD[oD[9]], DD[oD[9]] += (DD[oD[7]] & oD[36]) > oD[37] ? oD[38] : oD[39]);
              do {
                qD(DD[oD[10]].push(DD[oD[8]] & oD[12]), DD[oD[8]] >>= oD[11], DD[oD[9]] -= oD[11])
              } while (DD[oD[9]] > oD[7]);
              DD[oD[7]] = -oD[2]
            } return DD[oD[7]] > -oD[2] && DD[oD[10]].push((DD[oD[8]] | DD[oD[7]] << DD[oD[9]]) & oD[12]), ND(DD[oD[10]])
      }(QD[DD[oD[1]]]) : bD[DD[oD[1]]]
    }

    function ND(...DD) {
      return DD[oD[13]] = oD[2], typeof SD !== oD[19] && SD ? (new SD).decode(new BD(DD[oD[1]])) : typeof yD !== oD[19] && yD ? yD.from(DD[oD[1]]).toString("utf-8") : ZD(DD[oD[1]])
    }

    function gD() {}
    qD(bD = {}, QD = ["^F9K/a>]iP:qm/@!yT:oZd^7a8C&honR%1<,:$b%unLvzRn", "d!TU5^t1YF}&(", "IF}/hfCY,YX~G}P.h4GqE", "N4aN]]|v`Vs^)A{1>A!&xd~!B4v~}@0R[_C,8+.k,48A]sw}%ZDU055K)", ')T4~LRz`hIXdyAr9F"', "lopNHh={9bn^P5j=", "20:qA<r9x4f~ma4!gZR8ahpdmB6qBxLqeqv=x!#L+b(i|7r_", "=:(8D*M$Nns!y`(yWfTqW>o?,HWS$#v/)NU=ja}=RM]d6bH/Rvr", 'gf>Ch*/`Z%)A^Gh!C3"vZ:5r', 'b3y=q>Z?AH`SD@51]n}4DPC`cs.mI&^XwT_4Z{`>)<MU"', '[_XqZX8}hYOmk|T}!!wNL`Q;MI#sR}*Xl"', "tZ#tpU8?~;9d3gkyX_3UG!eU@%tt:kNL8t;8Q", "_%6~_~;ymBO<*&NLb17<}#uBHI9lp5&BF:)K14z]PkcM3r", "2l^{7|(", ".EQqI5@yoBqkws$RA4!^}aOr", "k#6C[|:nO_Y]t|bH~_*h|~.r", 'W1&86&.:U8GG(@[}6CXU<G+n%B$I_5/?E3b<BS7"#;f)c7$9', "1tQ)D%TYl", 'bB<UMy>"tZ"id#TRhnftP2<b_%#P/sOX8o`lpip)gH~*XA[_', "!5[E[!;k~Zn6Z5*X5(", "ZlHNh$D`S3;6Kx", "o4uxO4=?l", 'YvsWBa_=q_Kk"', "I_:CR1(", "d0?l%:8)WB", ";=6C#&Dbi;yd$5k.x8*)r{Qk~;>Ix@#LdC?v/]Sl,8f~(", "AEaNIv1k%%f7z`rBUvdlwY!+qs7NRoP!r=wN~SO1)", "{!3Uxy;;,", '0Am0+~hK,4}S3hryeqp47Ib{"u7}OaWLi_Ax}0NymIch82pL0C|v?](', "^PC0O$/^)bP", "uAhN+T+nan8$aEiXVF7Cly(k,", "]5`,(y*b}S<#dEp!LI=U5v(", '9$N^&IP:]HI*F/A9oD`0g7qn=u/kKfZCE$"K_7%?nZ.', "u$!&[tY]%IPU!f>?BTQoUgW`0SR<i}BXPA6)", "+ZI{<%$BIZAk9aI.X=!N65eU~{it9`z}>Zl~x&l93u;l$#E.Xfd~i~OUk_", "YTbCc0z^MB(K05pL8oX41%&U5Vxv/h{?q8vNn", 'DY]=}a_"', 'mPP4Jhj_4H`,AExzQ"', "H1kvx7P:UHyu]E=]tw7C42|?$4m3,a(zQ1x<;511h4N5k}d/U(", 'jGAx9`ZLgIuVB|6=6A+~;~emOsfVNaI.FI8iw7)"LkE_kbwF"=I*MI{")', "6T}lWT~UOS#]/r<=N1O=i|/HcZMm&&X}", "*Du;oP{]tsCkq#ORyY?&_|l9)J57(", "OEcN{&i:=sl8`sv?VZ2)L~ZvOw", '70mo^5]=*;rir}.}2D(W:$a"/SbK$/;CT4?/i7OMtS7ICgpqdSfU]4p?vHz', ';orx3TX|@I"@1A', "5YFC3yTvW3y<{&CL?lax#:A}9klgzkv!vEv{WT^YUYq7iEx9pD:qf6(", 'YT;4X%Ut24r@_5nEBI>U?4"b,', '0wZ4`%%"J<sf6979@3+Ux7K9MYYUM39=>Dgx', "[.&0Y&Z?SBQJ~#NK_l;4M&ZLB%0mUaM9J$t{SXr;4bW~vs,B", '`4TqR0!y.SS"O#2q', "Y#*,Sdg:,M5Vx5L]dl,x}Ts:g3", "*Fi)lt@MNn0m`3YLvY&lu|5B?s.", ')tvNov#"Rb=)"', 'uqT~$IRy"%QFW@{?:$joF', 'Et"Kh*#?0s57NA&EbTG)ltV?e_A&aEb/}z+)^|1r&_H!;X3E(IL8F', "QZ:,U&7b28i{/EjquCh;zmt!NVn$P,>q^vS8|UwbaH57,/gXXTxUf1>)>4f", "xLv=x5?)N%E9|&uf64tx^h=%AH<)Z5$CdD&lWi!n!8", '#$n=N1?"', "WnNo1oj)BnU0v3,}:$@i85vbzsXso,?X`v;viYyy:%eHY@u_dDax)!(", 'i}nJf>Vbxk+y6&r_ul[Ni<FrhH}&"', '?$jlBSs9._Vvf&v?z=^{v**"', 'zF`qO^|v`ut{Xrp!OfUJ(k){.sMUS|!K&ZC4t7xb!3Bb;/2!R4V<vg(mqs,g"', "L:o;G<5k}Z|;=@EyAE_4D$j_B3sS?&&RWY=CK`*bW%z9rf2Q8EA", '._"KAd,K9ZiI1A/?>X8/$5vb4k1#q/S.SsSC>YSBn_mP)gJ}u5Y4B~(', "DL<o*~H]?Z(8B6^RM0,h3y}]kF", ";obtZ5o)_u8k]re.*v7q~tenDu:73#]K]8FteaQU=s]~o@I_h(", "iZ6<Li$mVb4U_5!9BT]=S5/{a4J6vg[f0SpNW0XYaHR7;X[}A%k=Q", 'YS?4@T_"', "6sml#G:nh8", 'xYVC!4c!eky5vkx9Fnm4s|#bbu86zs?}*$$CRgT"', '|q>C3S&t"%(v1/Y?iG;icD}{$8en/Eb', 'FvlC:*}=9_"gJ|l', "sYD<jT$ki;", '.1&8$!iBt#Ad:bwXJt^NA+V"', 'SS./]1c9$43!aEc?",,hoP*"CBhmCA', '}1%0zPu+F4xd>}/_5nX0;S%"!%%0U#d/!Ar', "H:?&6&]%Bn(8LRnR>#Po/To]OVU]sx)", "zLA&u{<^UM]", "2vx)]4V7hn}/Y&9!1T*TeR(", "<S}47<$nW37P;3/=,4@lLUv^1Fo0Lh/=2#iC<!hkx", "J={)mY.B6s{93s8X}:b~N18)anlZO#%_&P+T]4)}2YiQ>9n", "!nT~s|w?@u:C]ru_#_bt3<]%?_`w*y&CTZr/)7w}N%`#,X/.h(", "qT^E=Te9$Ms$UAV]8z.Nfm(", '1S~=Z{`%iBTIdrwEt#mvHhV?0Sng"', "E4v;9U=`,", "<TQ,dDY^Z%?Ss|e]ofA", 'RI`8z]qywSz)*&l9xo.*[du9=uL~hsU?@:+U91}=#Z%#P/E=VZ"', "iD9W4&3|5uV75`IK6ZS~QRRm&kKd%sk.t.G,|y[L8Fi{Hs==*(", "i!E^JtNUBnm,Ls=_&$YNaa(", "|PXKdy5kW%Alk}_X/!&8", '&4qC~t)|cFH7"I0Cb1Yl', '!3T0r&_7"3w<&#JEU5>C9~}=>ktPJx0XFn{)MIsyl', 'vlp49h`?@8:0hRL=BI(lV1:MyM4q"', "Z!90S*21.FU%},^Ef8_^/4]b@ujnZ,]fi${)F", 'fTq*T!.1P_qJo,nEC:p;4Ps;jk/)MaQq@Ih=LR`"`;{u6ydXf5s~b|(', "LYE=D$D)HMSoi}xH;%#tHa]`dn8Kp,6Lv(", 'xIE/"X6]twPwmT#]V=b<+>Bk:#R', ']3;lVaykQkt]hf}qltel?4~9/S]AE|g!OvQ<|7b"', 'tF^;5gx|W%ri(I2!RSF<^7;Gy4c"Q6I]9:AxC>w7.S%,:buL/F=tRo(', '&Sd0JSw"@Vlf85(9vY7E>7C=(8|;7IRB{(', "0DFJ_Sm13Bq7V@m/:1gvY&F:IP~;*5f9OTKUe`,y)bGmZ,", 'RSs8UGD`ks!&jsCf~L4CdT<"', "7C!/]]UKa8?s4o@EGD&lV", "N3RqgyUKAYA![s%K{Z)i;yw^6w", "6_ntf1=H@nxFr6Zf[Lf)a|?]ZY?SLslz(t+~H7QUh37*,Ie!BlRqM&)b/sG*(", "EER~X`IkiP|3x&Z92FrNymSK.#I#ZIv!", "hDLK/#JU%Ppx7&/?B3ToEU8{@B%)4f+1OSY;~aC7SPbfx&p?q:V,", "Rn@Wlh5mRk;F}&6yTDh*KTKUrYFJwE!K2l0vW4(", 'CneoG7<":3O<.60XYLLq)I2U)M"vGo?}zlQ)7<a?74^te#l', "6!cN+WuBx", "iv7tBamnuYFJHsQ]xtLqsRp_6;OSFacqi_:)9~A7mB/", "V45/`*7=+b2==@*HFI^=|R1K_4<~`/XRMl_id<(", "eSUJ&<3{a4|G</p]", ")N[*rSik:{bJRbfBqf_/h*`)xk3_dE.}<AE/CU(", ";T?N@~DHEs`ot|l", '%5p4K>?%VHvPMAcqLIX8l|FMKB1dsEAy,$~xOGXb%%sf"', "j_4<7y&:zw]dXs.EHIs8jR3}4M[%x5F15(", "UnX8KUunC%<)wg+@Rz{<:g.UGblkwrP]TCpvq`>=^w0N_&$RE1A", 'EIvNNUH"%I$q<G}q="', "nB.&&5PKQH%0.E0B*FGTttr;o4P#M/JH%0l<+iX]bV1", "A4[x+W*)8J", "uvRC*|Fr", "AjSy4Owu", "[>J6", "P]S6Xq?", "[j2@", "N49/|<.r", "#Z=L^.A", "UxzIi#mb", "Px{X2:mb", "xx7I", "Uxou>3&b", "NxD#m#*b", "Snou|18b", "GJQu*", "Uxoum#n<9f", ')d8GX.pf"Q', "Hm|{wwa;9f", ".s]G,uUb", "9s:#uw*b", "Xnu@OoZb", "4){XH0*b", "GR:#^uWh", "+YYGE", "<xzI", "7xo@f", ")J4G<", "Xkgsz8db", "]^aLE", "Uxou>3]f{", "Hm(7v@g0{", "JJ!Lx@fw{", "Uxoum#*b", "SnzIP0Qb", "&)CeG:Ub", "0SCGG1&b", "4)sGtyib", "GLse<:A", "4)sGE1Pb", "SnCG|#Jh", "XnFGV0kb", "<R:#^uA", "%tOW[(%w", "yRE%]=$.", "iFBa](_O", "RtV[", "ixP1", ")|zc", "sSP1", "=4L>Ymmw", "p[*<7", "wX]c", ":_I[", "D^Fe", "2xQu1w)b", "hB[Id+~b", "Pm.#wwmb", "FL%e", "j)aL", "9JsGjoZb", "]@%e", 'PJ%G3#g0"Q', '}"lu]:W>{f', "k)0Lv@Jv5", "6=o]*qo1", "w)p$qjg1", "pUBC|g!.?Za7kx9h>5m_TT{Q0`w/[j9h03e:0>p2EN/Sf)>UjU~H_", '/sWu>4|J3H7#p2Ac,y*N^^dY8"!agqAc#VOUzzji,>7Lkop<_9', "&Vp$ob7,w:2IGz4}}V(RhLo1?DUMNoZh{%*M@", "~|7u", "Gsz$ocH1", "y@z{", 'gJ2sQ"G{', "8Azo,)w", "6FB~hL}1", ",Yz$EjC1", ".@p{!/u", "]o#@GUc7", "LpZ>d", "ys:#uw*b", "PJ%GFu6b"]), qD(wD = function(...DD) {
      qD(DD[oD[13]] = oD[1], DD[oD[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], DD[oD[14]] = oD[20], DD[-oD[15]] = []);
      try {
        qD(DD[oD[14]] = Object, DD[-oD[15]][oD[27]]("".__proto__.constructor.name))
      } catch (QD) {}
      DD: for (DD[oD[16]] = oD[1]; DD[oD[16]] < DD[oD[17]][oD[13]]; DD[oD[16]]++) try {
        for (DD[oD[14]] = DD[oD[17]][DD[oD[16]]](), DD[-oD[18]] = oD[1]; DD[-oD[18]] < DD[-oD[15]][oD[13]]; DD[-oD[18]]++)
          if (typeof DD[oD[14]][DD[-oD[15]][DD[-oD[18]]]] === oD[19]) continue DD;
        return DD[oD[14]]
      } catch (QD) {}
      return DD[oD[14]] || this
    }() || {}, SD = wD.TextDecoder, BD = wD.Uint8Array, yD = wD.lt, MD = wD.String || String, tD = wD.Array || Array, ZD = function(...DD) {
      return qD(DD[oD[13]] = oD[1], DD[-oD[10]] = new tD(oD[31]), DD[oD[0]] = MD[oD[25]] || MD.fromCharCode, DD[oD[21]] = []),
        function(...CD) {
          for (qD(CD[oD[13]] = oD[2], CD[-oD[23]] = oD[20], CD[oD[0]] = oD[20], CD[oD[16]] = CD[oD[1]][oD[13]], DD[oD[21]][oD[13]] = oD[1]), CD[oD[22]] = oD[1]; CD[oD[22]] < CD[oD[16]];) qD(CD[oD[0]] = CD[oD[1]][CD[oD[22]]++], CD[oD[0]] <= oD[47] ? CD[-oD[23]] = CD[oD[0]] : CD[oD[0]] <= 223 ? CD[-oD[23]] = (31 & CD[oD[0]]) << oD[9] | CD[oD[1]][CD[oD[22]]++] & oD[24] : CD[oD[0]] <= 239 ? CD[-oD[23]] = (15 & CD[oD[0]]) << oD[26] | (CD[oD[1]][CD[oD[22]]++] & oD[24]) << oD[9] | CD[oD[1]][CD[oD[22]]++] & oD[24] : MD[oD[25]] ? CD[-oD[23]] = (CD[oD[0]] & oD[7]) << 18 | (CD[oD[1]][CD[oD[22]]++] & oD[24]) << oD[26] | (CD[oD[1]][CD[oD[22]]++] & oD[24]) << oD[9] | CD[oD[1]][CD[oD[22]]++] & oD[24] : (CD[-oD[23]] = oD[24], CD[oD[22]] += oD[16]), DD[oD[21]][oD[27]](DD[-oD[10]][CD[-oD[23]]] || (DD[-oD[10]][CD[-oD[23]]] = DD[oD[0]](CD[-oD[23]]))));
          return DD[oD[21]].join("")
        }
    }());
    const XD = pD()[vD(oD[28])](),
      mD = pD()[vD(oD[28])](),
      nD = pD()[vD(oD[28])](),
      OD = pD()[vD(oD[28])](),
      PD = pD()[vD(oD[28])](),
      HD = pD()[vD(oD[28])](),
      UD = pD()[vD(oD[28])](),
      xD = (...DD) => {
        function CD(...DD) {
          return DD[oD[13]] = oD[2], typeof bD[DD[oD[1]]] === oD[19] ? bD[DD[oD[1]]] = function(...DD) {
            for (qD(DD[oD[13]] = oD[2], DD[oD[2]] = '?1u^{#+=6]@3KY;MFo7:r2ULWD/[%lXgyTw&0AV5htcjs)x4fbBS_E~vN$zdk9aGP"*mO,<q8i>Z(IC`n}QJH|.Rep!', DD[oD[29]] = "" + (DD[oD[1]] || ""), DD[oD[16]] = DD[oD[29]].length, DD[oD[14]] = [], DD[oD[34]] = oD[1], DD[oD[35]] = oD[1], DD[oD[32]] = -oD[2]), DD[-oD[30]] = oD[1]; DD[-oD[30]] < DD[oD[16]]; DD[-oD[30]]++)
              if (DD[oD[31]] = DD[oD[2]].indexOf(DD[oD[29]][DD[-oD[30]]]), DD[oD[31]] !== -oD[2])
                if (DD[oD[32]] < oD[1]) DD[oD[32]] = DD[oD[31]];
                else {
                  qD(DD[oD[32]] += DD[oD[31]] * oD[33], DD[oD[34]] |= DD[oD[32]] << DD[oD[35]], DD[oD[35]] += (DD[oD[32]] & oD[36]) > oD[37] ? oD[38] : oD[39]);
                  do {
                    qD(DD[oD[14]].push(DD[oD[34]] & oD[12]), DD[oD[34]] >>= oD[11], DD[oD[35]] -= oD[11])
                  } while (DD[oD[35]] > oD[7]);
                  DD[oD[32]] = -oD[2]
                } return DD[oD[32]] > -oD[2] && DD[oD[14]].push((DD[oD[34]] | DD[oD[32]] << DD[oD[35]]) & oD[12]), ND(DD[oD[14]])
          }(QD[DD[oD[1]]]) : bD[DD[oD[1]]]
        }
        DD[oD[13]] = oD[16];
        const cD = HD;
        return pD()[CD(122) + CD(123)](cD, DD[oD[29]]), pD()[CD(124)](DD[oD[1]], cD, pD()[CD(125)](cD, DD[oD[2]]))
      };

    function qD() {
      qD = function() {}
    }
    fD = (...DD) => {
      function CD(...DD) {
        return DD[oD[13]] = oD[2], typeof bD[DD[oD[1]]] === oD[19] ? bD[DD[oD[1]]] = function(...DD) {
          for (qD(DD[oD[13]] = oD[2], DD[oD[41]] = 'AhbYB7{5eLI?mvNxipUfQz`26E)]*><DGHZ4P9&qnV"JOSdj~M8sl[kXKRrF^$,caT/Coy.:=t@W#u1!0w+%(3;_}|g', DD[oD[29]] = "" + (DD[oD[1]] || ""), DD[-oD[40]] = DD[oD[29]].length, DD[oD[10]] = [], DD[oD[44]] = oD[1], DD[oD[45]] = oD[1], DD[-oD[43]] = -oD[2]), DD[oD[3]] = oD[1]; DD[oD[3]] < DD[-oD[40]]; DD[oD[3]]++)
            if (DD[-oD[42]] = DD[oD[41]].indexOf(DD[oD[29]][DD[oD[3]]]), DD[-oD[42]] !== -oD[2])
              if (DD[-oD[43]] < oD[1]) DD[-oD[43]] = DD[-oD[42]];
              else {
                qD(DD[-oD[43]] += DD[-oD[42]] * oD[33], DD[oD[44]] |= DD[-oD[43]] << DD[oD[45]], DD[oD[45]] += (DD[-oD[43]] & oD[36]) > oD[37] ? oD[38] : oD[39]);
                do {
                  qD(DD[oD[10]].push(DD[oD[44]] & oD[12]), DD[oD[44]] >>= oD[11], DD[oD[45]] -= oD[11])
                } while (DD[oD[45]] > oD[7]);
                DD[-oD[43]] = -oD[2]
              } return DD[-oD[43]] > -oD[2] && DD[oD[10]].push((DD[oD[44]] | DD[-oD[43]] << DD[oD[45]]) & oD[12]), ND(DD[oD[10]])
        }(QD[DD[oD[1]]]) : bD[DD[oD[1]]]
      }
      DD[oD[13]] = oD[11], vD(126);
      const cD = DD[oD[1]][CD(oD[47])][CD(oD[31]) + CD(129) + CD(130)](DD[oD[2]]);
      DD[oD[41]] = DD[oD[1]][CD(oD[47])][CD(131) + CD(132) + CD(133) + CD(134)](cD);
      const ID = DD[oD[41]] === oD[51] ? DD[oD[1]][CD(oD[47])][CD(oD[52]) + CD(oD[53]) + CD(oD[54])](DD[oD[2]], CD(oD[48]) + CD(oD[49]) + CD(oD[50]) + oD[8]) : DD[oD[41]][CD(oD[48]) + CD(oD[49]) + CD(oD[50]) + oD[8]],
        fD = DD[oD[41]] === oD[51] ? DD[oD[1]][CD(oD[47])][CD(oD[52]) + CD(oD[53]) + CD(oD[54])](DD[oD[2]], CD(oD[5]) + CD(oD[55]) + CD(oD[56])) : DD[oD[41]][CD(oD[5]) + CD(oD[55]) + CD(oD[56])];
      qD(pD()[CD(144)](XD, oD[1], oD[1], DD[oD[34]]), pD().gp(XD, XD, pD()[CD(145)], DD[oD[16]].heading), pD()[CD(146)](UD, DD[oD[10]].lb), UD[oD[2]] = oD[1]);
      const wD = DD[oD[29]][CD(147) + CD(148)]();
      if (qD(DD[oD[41]] = DD[oD[1]][CD(oD[47])][CD(149) + CD(150) + CD(151) + "s"](cD), DD[oD[81]] = DD[oD[41]] === oD[51] ? DD[oD[1]][CD(oD[47])][CD(oD[59]) + CD(oD[60]) + CD(oD[45]) + CD(oD[61])](DD[oD[2]], CD(oD[57]) + CD(oD[58])) : DD[oD[41]][CD(oD[57]) + CD(oD[58])]), !wD && pD()[oD[80]](UD) && (DD[oD[41]] === oD[51] ? DD[oD[1]][CD(oD[47])][CD(oD[59]) + CD(oD[60]) + CD(oD[45]) + CD(oD[61])](DD[oD[2]], CD(oD[62]) + CD(oD[63]) + CD(oD[64]) + CD(oD[65])) : DD[oD[41]][CD(oD[62]) + CD(oD[63]) + CD(oD[64]) + CD(oD[65])])) {
        function tD(...DD) {
          for (qD(DD[oD[13]] = oD[2], DD[-oD[68]] = 'Dw*9X%@v[1cM_`uxC7+&0zTib?S)g:6RdLKaBEfq/n^|{3~s(o!Wj]>"=ONVt;4kPhZ.y$U<}F5I,e8A2#HmrYGJplQ', DD[-oD[66]] = "" + (DD[oD[1]] || ""), DD[-oD[67]] = DD[-oD[66]].length, DD[oD[71]] = [], DD[oD[8]] = oD[1], DD[oD[9]] = oD[1], DD[-oD[70]] = -oD[2]), DD[oD[11]] = oD[1]; DD[oD[11]] < DD[-oD[67]]; DD[oD[11]]++)
            if (DD[oD[69]] = DD[-oD[68]].indexOf(DD[-oD[66]][DD[oD[11]]]), DD[oD[69]] !== -oD[2])
              if (DD[-oD[70]] < oD[1]) DD[-oD[70]] = DD[oD[69]];
              else {
                qD(DD[-oD[70]] += DD[oD[69]] * oD[33], DD[oD[8]] |= DD[-oD[70]] << DD[oD[9]], DD[oD[9]] += (DD[-oD[70]] & oD[36]) > oD[37] ? oD[38] : oD[39]);
                do {
                  qD(DD[oD[71]].push(DD[oD[8]] & oD[12]), DD[oD[8]] >>= oD[11], DD[oD[9]] -= oD[11])
                } while (DD[oD[9]] > oD[7]);
                DD[-oD[70]] = -oD[2]
              } return DD[-oD[70]] > -oD[2] && DD[oD[71]].push((DD[oD[8]] | DD[-oD[70]] << DD[oD[9]]) & oD[12]), ND(DD[oD[71]])
        }

        function ZD(...DD) {
          return DD[oD[13]] = oD[2], typeof bD[DD[oD[1]]] === oD[19] ? bD[DD[oD[1]]] = tD(QD[DD[oD[1]]]) : bD[DD[oD[1]]]
        }

        function HD(...DD) {
          DD[oD[13]] = oD[1]
        }
        ZD(162) in gD && HD(), qD(xD(mD, XD, UD), xD(nD, UD, XD), pD()[ZD(165)](OD, UD, nD));
        const JD = pD()[ZD(oD[75])](UD),
          KD = pD()[ZD(167)](XD, UD) / DD[oD[34]] / JD,
          aD = Math[ZD(oD[83])](KD, oD[1]) + oD[2];
        if (DD[oD[34]] * DD[oD[34]] < pD()[oD[80]](nD)) {
          function VD(...DD) {
            for (qD(DD[oD[13]] = oD[2], DD[oD[33]] = '}z;u]*5/gj<Ki=J[ys8PZ3Xp@+Fd7cv%R>UfmonQ:|qVlWC0!DS.TY`tL~GH2xBbr_(k^9{$w"A&?#)O1,Nha6IE4eM', DD[oD[0]] = "" + (DD[oD[1]] || ""), DD[oD[16]] = DD[oD[0]].length, DD[oD[14]] = [], DD[oD[34]] = oD[1], DD[oD[9]] = oD[1], DD[oD[32]] = -oD[2]), DD[oD[3]] = oD[1]; DD[oD[3]] < DD[oD[16]]; DD[oD[3]]++)
              if (DD[oD[81]] = DD[oD[33]].indexOf(DD[oD[0]][DD[oD[3]]]), DD[oD[81]] !== -oD[2])
                if (DD[oD[32]] < oD[1]) DD[oD[32]] = DD[oD[81]];
                else {
                  qD(DD[oD[32]] += DD[oD[81]] * oD[33], DD[oD[34]] |= DD[oD[32]] << DD[oD[9]], DD[oD[9]] += (DD[oD[32]] & oD[36]) > oD[37] ? oD[38] : oD[39]);
                  do {
                    qD(DD[oD[14]].push(DD[oD[34]] & oD[12]), DD[oD[34]] >>= oD[11], DD[oD[9]] -= oD[11])
                  } while (DD[oD[9]] > oD[7]);
                  DD[oD[32]] = -oD[2]
                } return DD[oD[32]] > -oD[2] && DD[oD[14]].push((DD[oD[34]] | DD[oD[32]] << DD[oD[9]]) & oD[12]), ND(DD[oD[14]])
          }

          function zD(...DD) {
            return DD[oD[13]] = oD[2], typeof bD[DD[oD[1]]] === oD[19] ? bD[DD[oD[1]]] = VD(QD[DD[oD[1]]]) : bD[DD[oD[1]]]
          }

          function jD(...DD) {
            qD(DD[oD[13]] = oD[1], DD[oD[30]] = function(...CD) {
              return qD(CD[oD[13]] = oD[16], CD[oD[16]] = {}), CD[oD[29]].length !== CD[oD[1]].length + CD[oD[2]].length ? oD[82] : DD[oD[2]](CD[oD[1]], CD[oD[2]], CD[oD[29]], oD[1], oD[1], oD[1], CD[oD[16]])
            }, DD[oD[2]] = function(...CD) {
              return qD(CD[oD[13]] = oD[7], CD[oD[41]] = oD[82]), CD[oD[34]] >= CD[oD[29]].length || (CD[oD[9]]["" + CD[oD[16]] + CD[oD[10]] + CD[oD[34]]] !== oD[20] ? CD[oD[9]]["" + CD[oD[16]] + CD[oD[10]] + CD[oD[34]]] : (CD[oD[29]][CD[oD[34]]] === CD[oD[1]][CD[oD[16]]] && CD[oD[29]][CD[oD[34]]] === CD[oD[2]][CD[oD[10]]] ? CD[oD[41]] = DD[oD[2]](CD[oD[1]], CD[oD[2]], CD[oD[29]], CD[oD[16]] + oD[2], CD[oD[10]], CD[oD[34]] + oD[2], CD[oD[9]]) || DD[oD[2]](CD[oD[1]], CD[oD[2]], CD[oD[29]], CD[oD[16]], CD[oD[10]] + oD[2], CD[oD[34]] + oD[2], CD[oD[9]]) : CD[oD[29]][CD[oD[34]]] === CD[oD[1]][CD[oD[16]]] ? CD[oD[41]] = DD[oD[2]](CD[oD[1]], CD[oD[2]], CD[oD[29]], CD[oD[16]] + oD[2], CD[oD[10]], CD[oD[34]] + oD[2], CD[oD[9]]) : CD[oD[29]][CD[oD[34]]] === CD[oD[2]][CD[oD[10]]] && (CD[oD[41]] = DD[oD[2]](CD[oD[1]], CD[oD[2]], CD[oD[29]], CD[oD[16]], CD[oD[10]] + oD[2], CD[oD[34]] + oD[2], CD[oD[9]])), CD[oD[9]]["" + CD[oD[16]] + CD[oD[10]] + CD[oD[34]]] = CD[oD[41]], CD[oD[41]]))
            }, console.log(DD[oD[30]]))
          }
          ZD(169) + oD[41] in gD && jD(), pD()[zD(170)](XD, XD, nD, aD)
        }
        qD(DD[oD[81]] = (0, iD.y)(DD[oD[81]], 1, Math[ZD(oD[83])](oD[2], Math[ZD(171)](oD[1], -KD, oD[2] - JD / DD[oD[34]]))), pD()[ZD(172)](XD, XD, OD))
      }
      const SD = PD;
      qD(pD()[CD(173)](SD, XD, UD), SD[oD[2]] = oD[1], DD[oD[21]] = pD()[CD(174)](SD)), wD || (DD[oD[21]] *= DD[oD[81]]);
      const BD = DD[oD[9]][CD(175) + CD(176) + CD(177)],
        yD = BD ? Math[CD(178)](BD, DD[oD[21]]) : DD[oD[21]];
      pD()[CD(oD[68]) + CD(180)](SD, SD);
      const MD = DD[oD[7]] !== oD[51] && void 0 !== DD[oD[7]] ? DD[oD[7]] : DD[oD[9]][CD(181) + CD(182) + CD(183)];
      if (yD > oD[1]) {
        function lD(...DD) {
          for (qD(DD[oD[13]] = oD[2], DD[oD[86]] = 'u719%<(]{@~+ABVFtfrWCeZngdYx^6!>$*h8Gi}NHSasOvo_wcXpl,5RQ)Eq=2Dy.K:|bmM/PI"4[jL0#J3zTU;`?&k', DD[oD[84]] = "" + (DD[oD[1]] || ""), DD[oD[85]] = DD[oD[84]].length, DD[oD[14]] = [], DD[oD[34]] = oD[1], DD[oD[17]] = oD[1], DD[-oD[87]] = -oD[2]), DD[oD[11]] = oD[1]; DD[oD[11]] < DD[oD[85]]; DD[oD[11]]++)
            if (DD[oD[69]] = DD[oD[86]].indexOf(DD[oD[84]][DD[oD[11]]]), DD[oD[69]] !== -oD[2])
              if (DD[-oD[87]] < oD[1]) DD[-oD[87]] = DD[oD[69]];
              else {
                qD(DD[-oD[87]] += DD[oD[69]] * oD[33], DD[oD[34]] |= DD[-oD[87]] << DD[oD[17]], DD[oD[17]] += (DD[-oD[87]] & oD[36]) > oD[37] ? oD[38] : oD[39]);
                do {
                  qD(DD[oD[14]].push(DD[oD[34]] & oD[12]), DD[oD[34]] >>= oD[11], DD[oD[17]] -= oD[11])
                } while (DD[oD[17]] > oD[7]);
                DD[-oD[87]] = -oD[2]
              } return DD[-oD[87]] > -oD[2] && DD[oD[14]].push((DD[oD[34]] | DD[-oD[87]] << DD[oD[17]]) & oD[12]), ND(DD[oD[14]])
        }

        function LD(...DD) {
          return DD[oD[13]] = oD[2], typeof bD[DD[oD[1]]] === oD[19] ? bD[DD[oD[1]]] = lD(QD[DD[oD[1]]]) : bD[DD[oD[1]]]
        }

        function TD(...DD) {
          DD[oD[13]] = oD[1]
        }
        LD(184) in gD && TD();
        let GD = DD[oD[29]][LD(190) + LD(191)] * MD;
        if (!wD) {
          function kD(...DD) {
            for (qD(DD[oD[13]] = oD[2], DD[oD[41]] = 'w0{`$>P=Bvo:CLkF!^N.~hEV#QJMz_i7s9mg?AjqHtrDR*WX;S[2luG64d%I(T8&U|p@/]5KYan13O"},)xbZcyef<+', DD[oD[29]] = "" + (DD[oD[1]] || ""), DD[oD[16]] = DD[oD[29]].length, DD[oD[10]] = [], DD[oD[34]] = oD[1], DD[oD[90]] = oD[1], DD[oD[7]] = -oD[2]), DD[oD[11]] = oD[1]; DD[oD[11]] < DD[oD[16]]; DD[oD[11]]++)
              if (DD[oD[69]] = DD[oD[41]].indexOf(DD[oD[29]][DD[oD[11]]]), DD[oD[69]] !== -oD[2])
                if (DD[oD[7]] < oD[1]) DD[oD[7]] = DD[oD[69]];
                else {
                  qD(DD[oD[7]] += DD[oD[69]] * oD[33], DD[oD[34]] |= DD[oD[7]] << DD[oD[90]], DD[oD[90]] += (DD[oD[7]] & oD[36]) > oD[37] ? oD[38] : oD[39]);
                  do {
                    qD(DD[oD[10]].push(DD[oD[34]] & oD[12]), DD[oD[34]] >>= oD[11], DD[oD[90]] -= oD[11])
                  } while (DD[oD[90]] > oD[7]);
                  DD[oD[7]] = -oD[2]
                } return DD[oD[7]] > -oD[2] && DD[oD[10]].push((DD[oD[34]] | DD[oD[7]] << DD[oD[90]]) & oD[12]), ND(DD[oD[10]])
          }

          function dD(...DD) {
            return DD[oD[13]] = oD[2], typeof bD[DD[oD[1]]] === oD[19] ? bD[DD[oD[1]]] = kD(QD[DD[oD[1]]]) : bD[DD[oD[1]]]
          }
          GD *= DD[oD[29]][dD(192) + dD(193)]
        }
        let RD = DD[oD[29]][LD(194) + LD(195) + "ss"] * yD;
        yD < .3 && (RD *= yD), GD > RD && (GD = RD), qD(pD()[LD(196)](SD, SD, GD), DD[oD[10]][LD(197) + LD(198)](SD))
      }
      DD[oD[10]][CD(199) + oD[91]] = DD[oD[29]][CD(200) + CD(oD[49]) + oD[91]] * (wD ? ID : fD)
    }
  },
  37024: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD,
      e: () => bD
    });
    var ID = cD(37028),
      pD = cD(1865);
    const iD = 2,
      fD = 1,
      bD = {
        pb: 1,
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

    function QD(DD, CD, cD, bD, QD, wD, SD) {
      if (QD.speed) return (0, ID.e)(CD, cD, bD, QD, wD, SD, DD), void(QD.ticksToReachMaxIdleFriction = iD);
      const BD = bD.isOnGround(),
        yD = CD.bloxd.getSyncedClientOptions(CD.bloxd.getPlayerReader(cD)),
        MD = null === yD ? CD.bloxd.getClientPredictedOption(cD, "groundFrictionScale") : yD.groundFrictionScale,
        tD = null === yD ? CD.bloxd.getClientPredictedOption(cD, "airFrictionScale") : yD.airFrictionScale,
        ZD = BD ? MD : tD,
        oD = Math.max(fD, ZD),
        vD = QD.ticksToReachMaxIdleFriction / iD,
        ND = (0, pD.y)(oD, ZD, vD);
      wD.friction = DD.standingFriction * ((null === yD ? CD.bloxd.getClientPredictedOption(cD, "airMomentumConservation") : yD.airMomentumConservation) ? ND : ZD), QD.ticksToReachMaxIdleFriction > 0 && QD.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);