export const id = 207;
export const ids = [207];
export const modules = {
  37458: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => nJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(36618);
    const eJ = 1.2,
      XJ = {
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
        Oj: .5,
        scJ: !1
      },
      AJ = {
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
        Oj: .5,
        scJ: !1
      },
      qJ = {
        physicsBodyDimensions: {
          width: FJ.c.Av,
          height: FJ.c.Dv
        },
        hitBoxDimensions: {
          width: FJ.c.Av + .4,
          height: FJ.c.Dv + .6
        },
        eyeHeight: FJ.c.Dv * FJ.c.playerEyeToHeightRatio,
        rideHeight: FJ.c.Dv - .3,
        Oj: .5,
        scJ: !1
      },
      jJ = {
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
        Oj: .5,
        scJ: !1
      },
      YJ = {
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
        Oj: .5,
        scJ: !1
      },
      hJ = {
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
        Oj: .5,
        scJ: !1
      },
      DJ = {
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
        Oj: .5,
        scJ: !1
      },
      sJ = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: FJ.c.Av,
            height: FJ.c.Dv
          },
          hitBoxDimensions: {
            width: FJ.c.Av + .4,
            height: FJ.c.Dv + .6
          },
          eyeHeight: FJ.c.Dv * FJ.c.playerEyeToHeightRatio,
          rideHeight: FJ.c.Dv - .1,
          Oj: UJ.e.Oj,
          scJ: !0
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
        },
        Camel: {
          modelScale: eJ,
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
        },
        "Cave Golem": XJ,
        "Draugr Zombie": {
          ...qJ,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": qJ,
        "Frost Golem": XJ,
        "Frost Zombie": {
          ...qJ,
          defaultPose: "zombie"
        },
        "Frost Skeleton": qJ,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: FJ.c.Av,
            height: FJ.c.Dv
          },
          hitBoxDimensions: {
            width: FJ.c.Av + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Oj: .5,
          scJ: !1
        },
        Wolf: jJ,
        Bear: YJ,
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
          Oj: .5,
          scJ: !1
        },
        Stag: hJ,
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
          Oj: .5,
          scJ: !1
        },
        Gorilla: DJ,
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
          Oj: .5,
          scJ: !1
        },
        "Draugr Huntress": qJ,
        "Magma Golem": XJ,
        "Spirit Golem": XJ,
        "Spirit Wolf": jJ,
        "Spirit Bear": YJ,
        "Spirit Stag": hJ,
        "Spirit Gorilla": DJ,
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: FJ.c.Av,
            height: FJ.c.Dv
          },
          hitBoxDimensions: {
            width: FJ.c.Av + .4,
            height: FJ.c.Dv + .6
          },
          eyeHeight: FJ.c.Dv * FJ.c.playerEyeToHeightRatio,
          rideHeight: FJ.c.Dv - .1,
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: FJ.c.Av,
            height: FJ.c.Dv
          },
          hitBoxDimensions: {
            width: FJ.c.Av + .4,
            height: FJ.c.Dv + .6
          },
          eyeHeight: FJ.c.Dv * FJ.c.playerEyeToHeightRatio,
          rideHeight: FJ.c.Dv - .1,
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
        },
        Zombie: {
          ...qJ,
          defaultPose: "zombie"
        },
        Skeleton: qJ,
        Mummy: {
          ...qJ,
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
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
          Oj: .5,
          scJ: !1
        },
        "Iron Guardian": AJ,
        "Gold Guardian": AJ,
        "Diamond Guardian": AJ,
        "Moonstone Guardian": AJ,
        "Iron Goofy Golem": AJ,
        "Gold Goofy Golem": AJ,
        "Diamond Goofy Golem": AJ,
        "Moonstone Goofy Golem": AJ,
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
          Oj: .5,
          scJ: !1
        }
      };

    function nJ(JJ) {
      return sJ[JJ]
    }
  },
  36067: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    const FJ = {
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
  36626: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(250),
      UJ = ZJ.n(FJ),
      eJ = ZJ(1671);
    let XJ;
    var AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ;
    const fJ = [1, "b", 0, 8, 3, 23, 7, 91, 180, 145, 255, "length", "c", 24, "a", 141, "undefined", 217, 63, 6, "fromCodePoint", 12, "push", 4, 101, "h", 175, "f", 249, "e", "i", 221, 230, 183, 97, 9, 22, 80, 8191, 88, 13, 14, "d", "g", 227, 79, 54, 5, 84, 48, 78, 126, 142, 122, 65, 36, 185, 27, 140, 136, 2, 85, 96, 98, null, 103, 104, 105, 99, 100, 102, 114, 115, 116, 117, 118, 119, 189, 132, 237, 53, 60, "wc", 33, 197, 30, 127, 128, 154, 50, 203, "s", "=", ";", 73, 211, 190, void 0, "on"];

    function xJ(JJ) {
      return typeof AJ[JJ] === fJ[16] ? AJ[JJ] = function(...JJ) {
        for (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[0]] = 'BHqaLYiArcZDfhFCQNIVJngldXUeP/Go~wW;bp1{u?.`Sj8T5"xmKy}0|Ek%RMOtv:,$z4#=2!>9*36<(&^_@])7+s[', JJ[fJ[1]] = "" + (JJ[fJ[2]] || ""), JJ[fJ[4]] = JJ[fJ[1]].length, JJ[-fJ[9]] = [], JJ[-fJ[7]] = fJ[2], JJ[fJ[8]] = fJ[2], JJ[fJ[6]] = -fJ[0]), JJ[fJ[3]] = fJ[2]; JJ[fJ[3]] < JJ[fJ[4]]; JJ[fJ[3]]++)
          if (JJ[fJ[5]] = JJ[fJ[0]].indexOf(JJ[fJ[1]][JJ[fJ[3]]]), JJ[fJ[5]] !== -fJ[0])
            if (JJ[fJ[6]] < fJ[2]) JJ[fJ[6]] = JJ[fJ[5]];
            else {
              MJ(JJ[fJ[6]] += JJ[fJ[5]] * fJ[7], JJ[-fJ[7]] |= JJ[fJ[6]] << JJ[fJ[8]], JJ[fJ[8]] += (JJ[fJ[6]] & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
              do {
                MJ(JJ[-fJ[9]].push(JJ[-fJ[7]] & fJ[10]), JJ[-fJ[7]] >>= fJ[3], JJ[fJ[8]] -= fJ[3])
              } while (JJ[fJ[8]] > fJ[6]);
              JJ[fJ[6]] = -fJ[0]
            } return JJ[fJ[6]] > -fJ[0] && JJ[-fJ[9]].push((JJ[-fJ[7]] | JJ[fJ[6]] << JJ[fJ[8]]) & fJ[10]), rJ(JJ[-fJ[9]])
      }(qJ[JJ]) : AJ[JJ]
    }

    function rJ(...JJ) {
      return JJ[fJ[11]] = fJ[0], typeof YJ !== fJ[16] && YJ ? (new YJ).decode(new hJ(JJ[fJ[2]])) : typeof DJ !== fJ[16] && DJ ? DJ.from(JJ[fJ[2]]).toString("utf-8") : GJ(JJ[fJ[2]])
    }

    function vJ() {}
    MJ(AJ = {}, qJ = ["+.nAq@XyY", '6Wr6=xhA~I98IM3VP}MA0@ChdhP2(d.oV}nP`m/EzcUZ5ex{"}q', 'tpG02RZrO%yt%k;X"EXea8w4kOyn+T"u&a/Zj3^d`:<tWhd;xEq', 'uNn03&n4nh^$_1#di/3U%3rd8,OA#"`Xn=9>M{BrwRF21q', "/flLp9@f}VMtPa:d[aP/GKUKL", "@PmrP1ZrvyjAnQ/b?O9x}8_;EFp,/Q6{xu=*@_FkQnc:zC6VP:4LR5&H", "6Xh0[*8vtCh0(elPt5pLF", '_j}A>EIk&cU4"hsgpJ"eB{Mlk:8LNQL`NCOPq>3/:Eb*L_M;tuq', "6|MPVEKua", "|cu!sKNH", "fE{ifxB", "a,U/:y^uq}z,u=ObvNBiX={H[NcMxhEP>B", "c8kmwK[dxVwNY@}?0mI22bWd4hS0Oh^WW`?iqbqk_}%|Fp_?n:f0A>?TY", ')W_3w]dK8|Bq]dLo/>|"l6a4M%sgO&e/%}W98tUqOt/obT,NDH', "VU$Y:8cH", "5:d!z5+KqV/dT#+gdz@3uTn?CCaW7Fid<NGP)*0?(Rs/IYD", "&ag*_4z>F,7CA^AX}agPaO9htIwa;1ne!B", "4z@U2b/VVcrzEX>V", "jUS>[}Wd3FR;y5XPocf>/u+f[Om4RCfU", '"ElPRyOf9|`;iYMbmp/0$8nVTC&gpL', "gC)o`!DV#h8Zf=h", "vO{Ko;1K.:al`1h{@%Oc_%v8ZJz((a$N}=U2;]9tR|WZu_2UnH", "VUmrV10T:E@>!dj1{l)*}#K>oto:0##d7%wmOWcAdkRFpL", '%UWms6{A~Cv"3LDJO:_3z>Zd$Rq}NQ_WYITK]=6W$f=$JCBpDfWm(x1q', 'yaG*"3u8wRf<kkT{SlyZ/', "}asi2R$45Ry", "QtrG?z6fmvhN0#G/N=8Av8Ch;fFG$FR/p>/o%3AybE9HyLR/:z?2<*8fSD", "TOoKH{GI+kZ5!5Ku=pNeU", "l/tc,2&A&RvFP=f13ohZWKN/rN78o^coRJ>mf5/&sN+#f@$oh~gP.}5Ke:p", 'I~u!e]cyeF"(+%he0N!}g1!ASrR', "4}x3d1zfZJ;dKa", "2Jj>j((f9Fc}va", '?OMAFbat"c*|V1;pC"A6*43H', "TW*/T3Jk]hu</pTU[:jAIE~GvIik=#%l8`?mH@!E7hp4%^g?,B", "$WgKpM?9)kPKSeTeP/$Yy9wECtODH", "q;i*i0m/qEj4e1~b]:SZ%2DVR:]#+bnu(m)c!Oi.Wfee;UeP).^mU", '"j%/RRp;_vb<MLlPwf[me6B', 'n84>p!`;kF:Db_Gd0jT"V&B(SF_#r5t.,paYKpB', 'bp("z55q@ct!FpZ1JRpP^w,>/n', ".E$ZA&Fv]hCOIY/b*O&mR<Jk?JccE2cXuz/KykB.a", 's.*xuT}8FngapQd/+:W9hx@f]h&L&d%;W56"ypO)5f9>/LHoq><*=05)i', "]au!XEVTU:$rcR6U`EA*JK(>s:jF=U%;F8@/Lb>k~,X2^4sl,oQi", "nE`3O<)K(tJ<aUnWcuCcU!28i", "y:uiP=!95,b02%gu8`*y&K?A2JW:BePl`Oo!?9q.Aho<a^QU?/SZ|8&]iZP", 'pJ@/NO%?IREK:Lt.ntu"V', 'rI{*5m]/IE>>|eYIJiBiSmmH~t5,9#_WQ~*>bTdGtf#3FFQe"o<cwTyA_fj', "Lt;Z_wo/cF7XBa", "Rac69_ZKF,ZWO4+W&o2i;]PIvtv,LeO.9pSZ", "BtfZ#<P)FIm", "rI}Ac<>Ka", '|a40+*SI+hJ27T7WL><c#RsN+:ZZ."cX%zlwERUrA', "ctumy^B", '%uYZtW8Gzh$#,XMbf~]=b|D9ZOS4F&*{C`{"a<Uq', "q/OoK{KufO%F1hjV456oHyF8:ErM8hel1EHeERV;8ne", "Ol%/TmmHTr?!Sa", "Lzz>`9AAf%=(.M#IDEWe0^eyyk6&pQbX&m?GdTNAxct!&d7?V>k~ib*um}5", '0EY>V1vI3O^x1"4dzN0K>&iKck.ZretG}jq', '/W!mI*GISy/OiY2XK=zxykFk"tHw6XaX', "2OS/=xrIBcbAl1elvO?m!E[K`DHQre4V}Ej>4yB", "IIL>K^jEY", "g>~cM{hh!N!r=kKuXUqm8p7/Y", ",jR/b6Z)%N?Ku=&e&F3Ub|pVSOd50ks;_m}o?TuI(R#Xp2sP", "d>$/W]Q)Tnu!WFmW=j4xCEB", '/p9rz>346ryA."/;|i`~PKB', '<%2mF1)K)kg<fe)uaU3UJOCTHf:!C1vG/WQ}@4TT"Iwn+aZ', '1RzAH0zGofM3le)PmUsmkW@8{h?;l1e/!55"4>O)7h>>#U,G<Oq', "G})A@j&mBEZ5&RhV{m2mE{`AvE4#*RwN", "s{$~I1GqU:8P6Xql756!R<B.y}*(8^%/;ajoAxZkfO+/wQr", "$j9r|RF85f;4[&=psOnAX", "}N*UP1a4]h9|f_ye[a.mgxrbOCdh2CzNmc100@6k[F", "NEmr[1Gqp}D^?QoNsO}AY49]Wf33;^fU", "u/%y(OB", '*:,YC1Brs:($Up:d{z0"t@QbH,2RNRE/u=H', "wf7KK#Gbr0%D@_,GpJ,~V4]NjF^Coq", "*Ow2B8m]yh!!;=vblz?~+wk>W}5DH", 'GEt"v5zITr', "#z<!&*7H", "I{?{iA9)", ",m1o3&Jq", "tKDjzy5/", "70v:=.s#", "pCAB", "^)vB2*H", "p0Gj", '"}3=w}Qq', "w2,5/a6", 'ETX<"wRH', "$TiyW=RH", "TTS<", "ET^}Yr|H", "AT3wRw@H", "n1^}+8LH", "bPM}@", "ET^}Rw1]*e", ";zLbya9e_M", "!R+ivv#(*e", "amcb~}EH", "*m=w}v@H", "y1}dZ^2H", "ET^}Rw@H", "n1X<$BMH", "|;{Gb=EH", "Bn{bb8|H", "[;iy!B@H", "b`=w/}jI", "sVVb%", "]TX<", "ST^de", ";P[b]", "yFqmXLzH", "c/#5%", "ET^}Yrcei", "!RQS4dqBi", "PP>5Tdevi", '[;mb.D"H', "b5mG]=6", "[;mb%8$H", "n1{b+wPI", "y1tb0BFH", "]`=w/}6", "|]o=])X:", "@wo$kF?>", "%JTxk/g0", "T#lg", "/~?`", "5]kR", "vV?`", "VYxC7", ":D}R", "+b!g", "3/tG", "WTM}8v;H", "l;?5I/NI", "IkC<zsoH", "$RawvvRH", "t5fG", "h;#5", "*Pmbh^2H", "cdfG", "$PfbrwMH", 'P`#.PB"H', "~*@<Bv@H", "q2a30B6", "{gN$!Rj6", 'e[Z"}uSx', "#$Zm", "0t[!ZRj2", "7=Lurov2", "?QHCJ5h", "5,)P(+Rx", 'FDZ"pqvx', "PyMY+_Ub", "U$|m]k^", "~}0$e4u6", "+|&Mf", "Dm=w}v@H", "$Pfbt}KH"]), MJ(jJ = function(...JJ) {
      MJ(JJ[fJ[11]] = fJ[2], JJ[fJ[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], JJ[fJ[0]] = fJ[97], JJ[fJ[12]] = []);
      try {
        MJ(JJ[fJ[0]] = Object, JJ[fJ[12]][fJ[22]]("".__proto__.constructor.name))
      } catch (qJ) {}
      JJ: for (JJ[fJ[13]] = fJ[2]; JJ[fJ[13]] < JJ[fJ[14]][fJ[11]]; JJ[fJ[13]]++) try {
        for (JJ[fJ[0]] = JJ[fJ[14]][JJ[fJ[13]]](), JJ[fJ[15]] = fJ[2]; JJ[fJ[15]] < JJ[fJ[12]][fJ[11]]; JJ[fJ[15]]++)
          if (typeof JJ[fJ[0]][JJ[fJ[12]][JJ[fJ[15]]]] === fJ[16]) continue JJ;
        return JJ[fJ[0]]
      } catch (qJ) {}
      return JJ[fJ[0]] || this
    }() || {}, YJ = jJ.TextDecoder, hJ = jJ.Uint8Array, DJ = jJ.fn, sJ = jJ.String || String, nJ = jJ.Array || Array, GJ = function(...JJ) {
      return MJ(JJ[fJ[11]] = fJ[2], JJ[fJ[23]] = new nJ(fJ[87]), JJ[fJ[0]] = sJ[fJ[20]] || sJ.fromCharCode, JJ[fJ[17]] = []),
        function(cJ) {
          var ZJ, FJ, UJ, eJ;
          for (MJ(FJ = void 0, UJ = cJ[fJ[11]], JJ[fJ[17]][fJ[11]] = fJ[2]), eJ = fJ[2]; eJ < UJ;) MJ(FJ = cJ[eJ++], FJ <= fJ[86] ? ZJ = FJ : FJ <= 223 ? ZJ = (31 & FJ) << fJ[19] | cJ[eJ++] & fJ[18] : FJ <= 239 ? ZJ = (15 & FJ) << fJ[21] | (cJ[eJ++] & fJ[18]) << fJ[19] | cJ[eJ++] & fJ[18] : sJ[fJ[20]] ? ZJ = (FJ & fJ[6]) << 18 | (cJ[eJ++] & fJ[18]) << fJ[21] | (cJ[eJ++] & fJ[18]) << fJ[19] | cJ[eJ++] & fJ[18] : (ZJ = fJ[18], eJ += fJ[4]), JJ[fJ[17]][fJ[22]](JJ[fJ[23]][ZJ] || (JJ[fJ[23]][ZJ] = JJ[fJ[0]](ZJ))));
          return JJ[fJ[17]].join("")
        }
    }()), xJ(76) + fJ[25] in vJ && function(...JJ) {
      MJ(JJ[fJ[11]] = fJ[2], JJ[fJ[1]] = function(...JJ) {
        if (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[0]] = JJ[fJ[2]].length), JJ[fJ[0]] < fJ[60]) return fJ[2];
        if (MJ(JJ[fJ[1]] = Math.max(...JJ[fJ[2]]), JJ[fJ[24]] = Math.min(...JJ[fJ[2]])), JJ[fJ[1]] === JJ[fJ[24]]) return fJ[2];
        for (MJ(JJ[fJ[28]] = Array(JJ[fJ[0]] - fJ[0]).fill(Number.MAX_SAFE_INTEGER), JJ[fJ[29]] = Array(JJ[fJ[0]] - fJ[0]).fill(Number.MIN_SAFE_INTEGER), JJ[fJ[27]] = Math.ceil((JJ[fJ[1]] - JJ[fJ[24]]) / (JJ[fJ[0]] - fJ[0])), JJ[fJ[26]] = fJ[2]), JJ[fJ[25]] = fJ[2]; JJ[fJ[25]] < JJ[fJ[0]]; JJ[fJ[25]]++) JJ[fJ[2]][JJ[fJ[25]]] !== JJ[fJ[24]] && JJ[fJ[2]][JJ[fJ[25]]] !== JJ[fJ[1]] && MJ(JJ[fJ[26]] = Math.floor((JJ[fJ[2]][JJ[fJ[25]]] - JJ[fJ[24]]) / JJ[fJ[27]]), JJ[fJ[28]][JJ[fJ[26]]] = Math.min(JJ[fJ[28]][JJ[fJ[26]]], JJ[fJ[2]][JJ[fJ[25]]]), JJ[fJ[29]][JJ[fJ[26]]] = Math.max(JJ[fJ[29]][JJ[fJ[26]]], JJ[fJ[2]][JJ[fJ[25]]]));
        for (MJ(JJ[fJ[30]] = Number.MIN_SAFE_INTEGER, JJ[fJ[31]] = JJ[fJ[24]]), JJ[fJ[9]] = fJ[2]; JJ[fJ[9]] < JJ[fJ[0]] - fJ[0]; JJ[fJ[9]]++) JJ[fJ[28]][JJ[fJ[9]]] === Number.MAX_SAFE_INTEGER && JJ[fJ[29]][JJ[fJ[9]]] === Number.MIN_SAFE_INTEGER || MJ(JJ[fJ[30]] = Math.max(JJ[fJ[30]], JJ[fJ[28]][JJ[fJ[9]]] - JJ[fJ[31]]), JJ[fJ[31]] = JJ[fJ[29]][JJ[fJ[9]]]);
        return JJ[fJ[30]] = Math.max(JJ[fJ[30]], JJ[fJ[1]] - JJ[fJ[31]]), JJ[fJ[30]]
      }, console.log(JJ[fJ[1]]))
    }();
    const mJ = UJ()[xJ(fJ[50])](),
      QJ = UJ()[xJ(fJ[50])](),
      EJ = UJ()[xJ(fJ[50])](),
      VJ = UJ()[xJ(fJ[50])](),
      KJ = UJ()[xJ(fJ[50])](),
      yJ = UJ()[xJ(fJ[50])](),
      SJ = UJ()[xJ(fJ[50])](),
      IJ = (...JJ) => {
        function cJ(...JJ) {
          return JJ[fJ[11]] = fJ[0], typeof AJ[JJ[fJ[2]]] === fJ[16] ? AJ[JJ[fJ[2]]] = function(...JJ) {
            for (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[14]] = 'H/#{PnZ3B)jMDo@Q]4?%_G;r9hNpgk2`:Wst|7!bz&80f5}=uIlvVmX,JO(aKTUy^Fdw.1R*e~C[c6$xS+<AL>Eiq"Y', JJ[-fJ[51]] = "" + (JJ[fJ[2]] || ""), JJ[fJ[52]] = JJ[-fJ[51]].length, JJ[fJ[42]] = [], JJ[fJ[47]] = fJ[2], JJ[fJ[54]] = fJ[2], JJ[fJ[43]] = -fJ[0]), JJ[fJ[3]] = fJ[2]; JJ[fJ[3]] < JJ[fJ[52]]; JJ[fJ[3]]++)
              if (JJ[-fJ[53]] = JJ[fJ[14]].indexOf(JJ[-fJ[51]][JJ[fJ[3]]]), JJ[-fJ[53]] !== -fJ[0])
                if (JJ[fJ[43]] < fJ[2]) JJ[fJ[43]] = JJ[-fJ[53]];
                else {
                  MJ(JJ[fJ[43]] += JJ[-fJ[53]] * fJ[7], JJ[fJ[47]] |= JJ[fJ[43]] << JJ[fJ[54]], JJ[fJ[54]] += (JJ[fJ[43]] & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
                  do {
                    MJ(JJ[fJ[42]].push(JJ[fJ[47]] & fJ[10]), JJ[fJ[47]] >>= fJ[3], JJ[fJ[54]] -= fJ[3])
                  } while (JJ[fJ[54]] > fJ[6]);
                  JJ[fJ[43]] = -fJ[0]
                } return JJ[fJ[43]] > -fJ[0] && JJ[fJ[42]].push((JJ[fJ[47]] | JJ[fJ[43]] << JJ[fJ[54]]) & fJ[10]), rJ(JJ[fJ[42]])
          }(qJ[JJ[fJ[2]]]) : AJ[JJ[fJ[2]]]
        }
        JJ[fJ[11]] = fJ[4], cJ(fJ[45]) in vJ && function(...JJ) {
          MJ(JJ[fJ[11]] = fJ[2], JJ[fJ[14]] = function(...JJ) {
            for (MJ(JJ[fJ[11]] = fJ[0], JJ[-fJ[59]] = fJ[2], JJ[-fJ[56]] = {}, JJ[fJ[57]] = fJ[2], JJ[fJ[58]] = fJ[2], JJ[fJ[29]] = fJ[2], JJ[fJ[19]] = JJ[fJ[2]].length), JJ[-fJ[55]] = fJ[2]; JJ[-fJ[55]] < JJ[fJ[19]]; JJ[-fJ[55]]++) {
              for (MJ(JJ[-fJ[56]] = {}, JJ[fJ[57]] = fJ[2], JJ[fJ[58]] = fJ[0]), JJ[fJ[3]] = JJ[-fJ[55]] + fJ[0]; JJ[fJ[3]] < JJ[fJ[19]]; JJ[fJ[3]]++) JJ[fJ[2]][JJ[-fJ[55]]].x !== JJ[fJ[2]][JJ[fJ[3]]].x || JJ[fJ[2]][JJ[-fJ[55]]].y !== JJ[fJ[2]][JJ[fJ[3]]].y ? (JJ[fJ[2]][JJ[-fJ[55]]].y === JJ[fJ[2]][JJ[fJ[3]]].y ? JJ[fJ[29]] = Number.MAX_SAFE_INTEGER : JJ[fJ[29]] = (JJ[fJ[2]][JJ[-fJ[55]]].x - JJ[fJ[2]][JJ[fJ[3]]].x) / (JJ[fJ[2]][JJ[-fJ[55]]].y - JJ[fJ[2]][JJ[fJ[3]]].y), JJ[-fJ[56]][JJ[fJ[29]]] || (JJ[-fJ[56]][JJ[fJ[29]]] = fJ[2]), MJ(JJ[-fJ[56]][JJ[fJ[29]]]++, JJ[fJ[57]] = Math.max(JJ[fJ[57]], JJ[-fJ[56]][JJ[fJ[29]]]))) : JJ[fJ[58]]++;
              MJ(JJ[fJ[57]] += JJ[fJ[58]], JJ[-fJ[59]] = Math.max(JJ[-fJ[59]], JJ[fJ[57]]))
            }
            return JJ[-fJ[59]]
          }, console.log(JJ[fJ[14]]))
        }();
        const ZJ = yJ;
        return UJ()[cJ(fJ[37]) + cJ(81)](ZJ, JJ[fJ[60]]), UJ()[cJ(82)](JJ[fJ[2]], ZJ, UJ()[cJ(83)](ZJ, JJ[fJ[0]]))
      };

    function MJ() {
      MJ = function() {}
    }
    XJ = (JJ, cJ, ZJ, FJ, XJ, jJ, YJ, hJ) => {
      function DJ(...JJ) {
        return JJ[fJ[11]] = fJ[0], typeof AJ[JJ[fJ[2]]] === fJ[16] ? AJ[JJ[fJ[2]]] = function(JJ) {
          var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
          for (MJ(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = fJ[2], eJ = fJ[2], XJ = -fJ[0]), AJ = fJ[2]; AJ < ZJ; AJ++) {
            var qJ = '6IHVkSigG5<lR4AT"9EeMXpWK%;c@Y]3b!2[$*|?10_PZnzhoNLm)CFyU`:t/O~&#x7{^Da=,.djw}8>BvsfQr(Ju+q'.indexOf(cJ[AJ]);
            if (qJ !== -fJ[0])
              if (XJ < fJ[2]) XJ = qJ;
              else {
                MJ(XJ += qJ * fJ[7], UJ |= XJ << eJ, eJ += (XJ & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
                do {
                  MJ(FJ.push(UJ & fJ[10]), UJ >>= fJ[3], eJ -= fJ[3])
                } while (eJ > fJ[6]);
                XJ = -fJ[0]
              }
          }
          return XJ > -fJ[0] && FJ.push((UJ | XJ << eJ) & fJ[10]), rJ(FJ)
        }(qJ[JJ[fJ[2]]]) : AJ[JJ[fJ[2]]]
      }
      xJ(fJ[48]) in vJ && function() {
        var JJ = function(...JJ) {
          for (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[0]] = JJ[fJ[2]].length, JJ[fJ[1]] = [], JJ[-fJ[41]] = fJ[2], JJ[fJ[41]] = fJ[2], JJ[fJ[2]].sort(((JJ, cJ) => JJ - cJ))), JJ[fJ[47]] = fJ[2]; JJ[fJ[47]] < JJ[fJ[0]]; JJ[fJ[47]]++)
            if (!(JJ[fJ[47]] > fJ[2] && JJ[fJ[2]][JJ[fJ[47]]] === JJ[fJ[2]][JJ[fJ[47]] - fJ[0]]))
              for (MJ(JJ[-fJ[41]] = JJ[fJ[47]] + fJ[0], JJ[fJ[41]] = JJ[fJ[0]] - fJ[0]); JJ[-fJ[41]] < JJ[fJ[41]];)
                if (JJ[fJ[2]][JJ[fJ[47]]] + JJ[fJ[2]][JJ[-fJ[41]]] + JJ[fJ[2]][JJ[fJ[41]]] < fJ[2]) JJ[-fJ[41]]++;
                else if (JJ[fJ[2]][JJ[fJ[47]]] + JJ[fJ[2]][JJ[-fJ[41]]] + JJ[fJ[2]][JJ[fJ[41]]] > fJ[2]) JJ[fJ[41]]--;
          else {
            for (JJ[fJ[1]].push([JJ[fJ[2]][JJ[fJ[47]]], JJ[fJ[2]][JJ[-fJ[41]]], JJ[fJ[2]][JJ[fJ[41]]]]); JJ[-fJ[41]] < JJ[fJ[41]] && JJ[fJ[2]][JJ[-fJ[41]]] === JJ[fJ[2]][JJ[-fJ[41]] + fJ[0]];) JJ[-fJ[41]]++;
            for (; JJ[-fJ[41]] < JJ[fJ[41]] && JJ[fJ[2]][JJ[fJ[41]]] === JJ[fJ[2]][JJ[fJ[41]] - fJ[0]];) JJ[fJ[41]]--;
            MJ(JJ[-fJ[41]]++, JJ[fJ[41]]--)
          }
          return JJ[fJ[1]]
        };
        console.log(JJ)
      }();
      const sJ = JJ[DJ(fJ[61])][DJ(86) + DJ(87) + DJ(fJ[39])](cJ);
      let nJ = JJ[DJ(fJ[61])][DJ(89) + DJ(90) + DJ(fJ[7]) + DJ(92)](sJ);
      const GJ = nJ === fJ[64] ? JJ[DJ(fJ[61])][DJ(93) + DJ(94) + DJ(95)](cJ, DJ(fJ[62]) + DJ(fJ[34]) + DJ(fJ[63]) + fJ[29]) : nJ[DJ(fJ[62]) + DJ(fJ[34]) + DJ(fJ[63]) + fJ[29]],
        yJ = nJ === fJ[64] ? JJ[DJ(fJ[61])][DJ(fJ[68]) + DJ(fJ[69]) + DJ(fJ[24]) + DJ(fJ[70])](cJ, DJ(fJ[65]) + DJ(fJ[66]) + DJ(fJ[67])) : nJ[DJ(fJ[65]) + DJ(fJ[66]) + DJ(fJ[67])];
      MJ(UJ()[DJ(106)](mJ, fJ[2], fJ[2], jJ), UJ().Re(mJ, mJ, UJ()[DJ(107)], FJ.heading), UJ()[DJ(108)](SJ, XJ.jf), SJ[fJ[0]] = fJ[2]);
      const bJ = ZJ[DJ(109) + DJ(110)]();
      nJ = JJ[DJ(fJ[61])][DJ(111) + DJ(112) + DJ(113) + fJ[91]](sJ);
      let wJ = nJ === fJ[64] ? JJ[DJ(fJ[61])][DJ(fJ[68]) + DJ(fJ[69]) + DJ(fJ[24]) + DJ(fJ[70])](cJ, DJ(fJ[71]) + DJ(fJ[72])) : nJ[DJ(fJ[71]) + DJ(fJ[72])];
      if (!bJ && UJ()[fJ[82]](SJ) && (nJ === fJ[64] ? JJ[DJ(fJ[61])][DJ(fJ[68]) + DJ(fJ[69]) + DJ(fJ[24]) + DJ(fJ[70])](cJ, DJ(fJ[73]) + DJ(fJ[74]) + DJ(fJ[75]) + DJ(fJ[76])) : nJ[DJ(fJ[73]) + DJ(fJ[74]) + DJ(fJ[75]) + DJ(fJ[76])])) {
        function pJ(...JJ) {
          for (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[14]] = 'u:|BD=@"g`R9bxt~_IZJ{kL/hNV5[+$TnGHpF)0*.rU]AXqvj38E,}>Q7(Sl#WYi?;6os<aPMyK!COde%1^fmcwz24&', JJ[-fJ[77]] = "" + (JJ[fJ[2]] || ""), JJ[fJ[12]] = JJ[-fJ[77]].length, JJ[fJ[23]] = [], JJ[fJ[29]] = fJ[2], JJ[fJ[19]] = fJ[2], JJ[fJ[43]] = -fJ[0]), JJ[-fJ[78]] = fJ[2]; JJ[-fJ[78]] < JJ[fJ[12]]; JJ[-fJ[78]]++)
            if (JJ[fJ[35]] = JJ[fJ[14]].indexOf(JJ[-fJ[77]][JJ[-fJ[78]]]), JJ[fJ[35]] !== -fJ[0])
              if (JJ[fJ[43]] < fJ[2]) JJ[fJ[43]] = JJ[fJ[35]];
              else {
                MJ(JJ[fJ[43]] += JJ[fJ[35]] * fJ[7], JJ[fJ[29]] |= JJ[fJ[43]] << JJ[fJ[19]], JJ[fJ[19]] += (JJ[fJ[43]] & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
                do {
                  MJ(JJ[fJ[23]].push(JJ[fJ[29]] & fJ[10]), JJ[fJ[29]] >>= fJ[3], JJ[fJ[19]] -= fJ[3])
                } while (JJ[fJ[19]] > fJ[6]);
                JJ[fJ[43]] = -fJ[0]
              } return JJ[fJ[43]] > -fJ[0] && JJ[fJ[23]].push((JJ[fJ[29]] | JJ[fJ[43]] << JJ[fJ[19]]) & fJ[10]), rJ(JJ[fJ[23]])
        }

        function dJ(...JJ) {
          return JJ[fJ[11]] = fJ[0], typeof AJ[JJ[fJ[2]]] === fJ[16] ? AJ[JJ[fJ[2]]] = pJ(qJ[JJ[fJ[2]]]) : AJ[JJ[fJ[2]]]
        }

        function zJ(...JJ) {
          JJ[fJ[11]] = fJ[2]
        }
        dJ(120) in vJ && zJ(), MJ(IJ(QJ, mJ, SJ), IJ(EJ, SJ, mJ), UJ()[dJ(123)](VJ, SJ, EJ));
        const NJ = UJ()[dJ(124)](SJ),
          OJ = UJ()[dJ(125)](mJ, SJ) / jJ / NJ,
          TJ = Math[dJ(fJ[51])](OJ, fJ[2]) + fJ[0];
        if (jJ * jJ < UJ()[fJ[82]](EJ)) {
          function CJ(...JJ) {
            for (MJ(JJ[fJ[11]] = fJ[0], JJ[-fJ[79]] = '0/;98x<)^|C!+RwY?h5]ZUpVK:g=72(@N>*PLDdOeruXzfoBcl#1nb[{sT%A6viM"k3IJy_&maqQ.W$,t}GEHjFS4~`', JJ[fJ[1]] = "" + (JJ[fJ[2]] || ""), JJ[-fJ[50]] = JJ[fJ[1]].length, JJ[fJ[85]] = [], JJ[fJ[29]] = fJ[2], JJ[fJ[19]] = fJ[2], JJ[fJ[6]] = -fJ[0]), JJ[-fJ[83]] = fJ[2]; JJ[-fJ[83]] < JJ[-fJ[50]]; JJ[-fJ[83]]++)
              if (JJ[fJ[84]] = JJ[-fJ[79]].indexOf(JJ[fJ[1]][JJ[-fJ[83]]]), JJ[fJ[84]] !== -fJ[0])
                if (JJ[fJ[6]] < fJ[2]) JJ[fJ[6]] = JJ[fJ[84]];
                else {
                  MJ(JJ[fJ[6]] += JJ[fJ[84]] * fJ[7], JJ[fJ[29]] |= JJ[fJ[6]] << JJ[fJ[19]], JJ[fJ[19]] += (JJ[fJ[6]] & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
                  do {
                    MJ(JJ[fJ[85]].push(JJ[fJ[29]] & fJ[10]), JJ[fJ[29]] >>= fJ[3], JJ[fJ[19]] -= fJ[3])
                  } while (JJ[fJ[19]] > fJ[6]);
                  JJ[fJ[6]] = -fJ[0]
                } return JJ[fJ[6]] > -fJ[0] && JJ[fJ[85]].push((JJ[fJ[29]] | JJ[fJ[6]] << JJ[fJ[19]]) & fJ[10]), rJ(JJ[fJ[85]])
          }

          function uJ(JJ) {
            return typeof AJ[JJ] === fJ[16] ? AJ[JJ] = CJ(qJ[JJ]) : AJ[JJ]
          }
          UJ()[uJ(fJ[86])](mJ, mJ, EJ, TJ)
        }
        MJ(wJ = (0, eJ.v)(wJ, 1, Math[dJ(fJ[51])](fJ[0], Math[dJ(fJ[87])](fJ[2], -OJ, fJ[0] - NJ / jJ))), UJ()[dJ(129)](mJ, mJ, VJ))
      }
      const WJ = KJ;
      MJ(UJ()[DJ(130)](WJ, mJ, SJ), WJ[fJ[0]] = fJ[2]);
      let gJ = UJ()[DJ(131)](WJ);
      if (!bJ) {
        function iJ(...JJ) {
          MJ(JJ[fJ[11]] = fJ[2], JJ[-fJ[88]] = function(JJ) {
            var cJ, ZJ, FJ, UJ, eJ = JJ.length;
            for (MJ(cJ = [], ZJ = fJ[2]), FJ = fJ[2]; FJ < eJ; FJ++) cJ.push(FJ !== fJ[2] && JJ[FJ] > JJ[FJ - fJ[0]] ? cJ[FJ - fJ[0]] + fJ[0] : fJ[0]);
            for (UJ = eJ - fJ[0]; UJ >= fJ[2]; UJ--) UJ !== eJ - fJ[0] && JJ[UJ] > JJ[UJ + fJ[0]] && (cJ[UJ] = Math.max(cJ[UJ], cJ[UJ + fJ[0]] + fJ[0])), ZJ += cJ[UJ];
            return ZJ
          }, console.log(JJ[-fJ[88]]))
        }
        DJ(fJ[78]) in vJ && iJ(), gJ *= wJ
      }
      const HJ = YJ[DJ(133) + DJ(134) + DJ(135)],
        PJ = HJ ? Math[DJ(fJ[59])](HJ, gJ) : gJ;
      UJ()[DJ(137) + DJ(138)](WJ, WJ);
      const kJ = hJ !== fJ[64] && void 0 !== hJ ? hJ : YJ[DJ(139) + DJ(fJ[58]) + DJ(fJ[15]) + DJ(fJ[52])];
      if (PJ > fJ[2]) {
        function RJ(...JJ) {
          for (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[14]] = '^6x=hE%~m$P:g)w,NblBva&o2fD7V5]M"r(JeORXStC[8L}{yu@|nF9Y>zpWTdG#U;c`s?Ak_1/iQq+j03.Z!4KI*<H', JJ[fJ[1]] = "" + (JJ[fJ[2]] || ""), JJ[fJ[4]] = JJ[fJ[1]].length, JJ[fJ[90]] = [], JJ[fJ[47]] = fJ[2], JJ[-fJ[89]] = fJ[2], JJ[fJ[43]] = -fJ[0]), JJ[fJ[25]] = fJ[2]; JJ[fJ[25]] < JJ[fJ[4]]; JJ[fJ[25]]++)
            if (JJ[fJ[35]] = JJ[fJ[14]].indexOf(JJ[fJ[1]][JJ[fJ[25]]]), JJ[fJ[35]] !== -fJ[0])
              if (JJ[fJ[43]] < fJ[2]) JJ[fJ[43]] = JJ[fJ[35]];
              else {
                MJ(JJ[fJ[43]] += JJ[fJ[35]] * fJ[7], JJ[fJ[47]] |= JJ[fJ[43]] << JJ[-fJ[89]], JJ[-fJ[89]] += (JJ[fJ[43]] & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
                do {
                  MJ(JJ[fJ[90]].push(JJ[fJ[47]] & fJ[10]), JJ[fJ[47]] >>= fJ[3], JJ[-fJ[89]] -= fJ[3])
                } while (JJ[-fJ[89]] > fJ[6]);
                JJ[fJ[43]] = -fJ[0]
              } return JJ[fJ[43]] > -fJ[0] && JJ[fJ[90]].push((JJ[fJ[47]] | JJ[fJ[43]] << JJ[-fJ[89]]) & fJ[10]), rJ(JJ[fJ[90]])
        }

        function LJ(...JJ) {
          return JJ[fJ[11]] = fJ[0], typeof AJ[JJ[fJ[2]]] === fJ[16] ? AJ[JJ[fJ[2]]] = RJ(qJ[JJ[fJ[2]]]) : AJ[JJ[fJ[2]]]
        }

        function aJ(...JJ) {
          JJ[fJ[11]] = fJ[2]
        }
        LJ(143) + fJ[91] in vJ && aJ();
        let BJ = ZJ[LJ(144) + LJ(fJ[9])] * kJ;
        if (!bJ) {
          function oJ(...JJ) {
            for (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[14]] = 'hz24`G!Ij_CW@1E.liP|s/:t*r=TH"O8uFU7+QMA9y{6#B<V3]DLXZv}wd$>xa?RgnY~pN0k;)bKqco^J5%femS&[(,', JJ[fJ[60]] = "" + (JJ[fJ[2]] || ""), JJ[fJ[67]] = JJ[fJ[60]].length, JJ[fJ[42]] = [], JJ[fJ[29]] = fJ[2], JJ[fJ[19]] = fJ[2], JJ[fJ[6]] = -fJ[0]), JJ[-fJ[95]] = fJ[2]; JJ[-fJ[95]] < JJ[fJ[67]]; JJ[-fJ[95]]++)
              if (JJ[fJ[35]] = JJ[fJ[14]].indexOf(JJ[fJ[60]][JJ[-fJ[95]]]), JJ[fJ[35]] !== -fJ[0])
                if (JJ[fJ[6]] < fJ[2]) JJ[fJ[6]] = JJ[fJ[35]];
                else {
                  MJ(JJ[fJ[6]] += JJ[fJ[35]] * fJ[7], JJ[fJ[29]] |= JJ[fJ[6]] << JJ[fJ[19]], JJ[fJ[19]] += (JJ[fJ[6]] & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
                  do {
                    MJ(JJ[fJ[42]].push(JJ[fJ[29]] & fJ[10]), JJ[fJ[29]] >>= fJ[3], JJ[fJ[19]] -= fJ[3])
                  } while (JJ[fJ[19]] > fJ[6]);
                  JJ[fJ[6]] = -fJ[0]
                } return JJ[fJ[6]] > -fJ[0] && JJ[fJ[42]].push((JJ[fJ[29]] | JJ[fJ[6]] << JJ[fJ[19]]) & fJ[10]), rJ(JJ[fJ[42]])
          }

          function lJ(JJ) {
            return typeof AJ[JJ] === fJ[16] ? AJ[JJ] = oJ(qJ[JJ]) : AJ[JJ]
          }

          function Jc(...JJ) {
            MJ(JJ[fJ[11]] = fJ[2], JJ[fJ[14]] = function(...JJ) {
              for (MJ(JJ[fJ[11]] = fJ[0], JJ[fJ[0]] = JJ[fJ[2]].length, JJ[fJ[1]] = [], JJ[fJ[96]] = fJ[2]), JJ[fJ[42]] = fJ[2]; JJ[fJ[42]] < JJ[fJ[0]]; JJ[fJ[42]]++) JJ[fJ[1]].push(JJ[fJ[42]] !== fJ[2] && JJ[fJ[2]][JJ[fJ[42]]] > JJ[fJ[2]][JJ[fJ[42]] - fJ[0]] ? JJ[fJ[1]][JJ[fJ[42]] - fJ[0]] + fJ[0] : fJ[0]);
              for (JJ[fJ[47]] = JJ[fJ[0]] - fJ[0]; JJ[fJ[47]] >= fJ[2]; JJ[fJ[47]]--) JJ[fJ[47]] !== JJ[fJ[0]] - fJ[0] && JJ[fJ[2]][JJ[fJ[47]]] > JJ[fJ[2]][JJ[fJ[47]] + fJ[0]] && (JJ[fJ[1]][JJ[fJ[47]]] = Math.max(JJ[fJ[1]][JJ[fJ[47]]], JJ[fJ[1]][JJ[fJ[47]] + fJ[0]] + fJ[0])), JJ[fJ[96]] += JJ[fJ[1]][JJ[fJ[47]]];
              return JJ[fJ[96]]
            }, console.log(JJ[fJ[14]]))
          }
          lJ(146) in vJ && Jc(), BJ *= ZJ[lJ(147) + lJ(148)]
        }
        let tJ = ZJ[LJ(149) + LJ(150) + "ss"] * PJ;
        if (PJ < .3) {
          function cc(JJ) {
            var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
            for (MJ(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = fJ[2], eJ = fJ[2], XJ = -fJ[0]), AJ = fJ[2]; AJ < ZJ; AJ++) {
              var qJ = 'ablxF8n[tf(N#.gWJ6E3)S0%zkZXVKqA5o{QIPmM=i+&2e1TRYpUH$_dcBuO/GjD?<!Lyh*r`|Cv;~49^:>,w]7@}s"'.indexOf(cJ[AJ]);
              if (qJ !== -fJ[0])
                if (XJ < fJ[2]) XJ = qJ;
                else {
                  MJ(XJ += qJ * fJ[7], UJ |= XJ << eJ, eJ += (XJ & fJ[38]) > fJ[39] ? fJ[40] : fJ[41]);
                  do {
                    MJ(FJ.push(UJ & fJ[10]), UJ >>= fJ[3], eJ -= fJ[3])
                  } while (eJ > fJ[6]);
                  XJ = -fJ[0]
                }
            }
            return XJ > -fJ[0] && FJ.push((UJ | XJ << eJ) & fJ[10]), rJ(FJ)
          }

          function Zc(...JJ) {
            return JJ[fJ[11]] = fJ[0], typeof AJ[JJ[fJ[2]]] === fJ[16] ? AJ[JJ[fJ[2]]] = cc(qJ[JJ[fJ[2]]]) : AJ[JJ[fJ[2]]]
          }

          function Fc(...JJ) {
            JJ[fJ[11]] = fJ[2]
          }
          Zc(151) + "U" in vJ && Fc(), tJ *= PJ
        }
        BJ > tJ && (BJ = tJ), MJ(UJ()[LJ(152)](WJ, WJ, BJ), XJ[LJ(153) + LJ(fJ[88])](WJ))
      }
      XJ[DJ(155) + fJ[98]] = ZJ[DJ(156) + DJ(fJ[34]) + fJ[98]] * (bJ ? GJ : yJ)
    }
  },
  36618: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      e: () => AJ
    });
    var FJ = ZJ(36626),
      UJ = ZJ(1671);
    const eJ = 2,
      XJ = 1,
      AJ = {
        Oj: 1,
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

    function qJ(JJ, cJ, ZJ, AJ, qJ, jJ, YJ) {
      if (qJ.speed) return (0, FJ.e)(cJ, ZJ, AJ, qJ, jJ, YJ, JJ), void(qJ.ticksToReachMaxIdleFriction = eJ);
      const hJ = AJ.isOnGround(),
        DJ = cJ.bloxd.getSyncedClientOptions(cJ.bloxd.getPlayerReader(ZJ)),
        sJ = null === DJ ? cJ.bloxd.getClientPredictedOption(ZJ, "groundFrictionScale") : DJ.groundFrictionScale,
        nJ = null === DJ ? cJ.bloxd.getClientPredictedOption(ZJ, "airFrictionScale") : DJ.airFrictionScale,
        GJ = hJ ? sJ : nJ,
        fJ = Math.max(XJ, GJ),
        xJ = qJ.ticksToReachMaxIdleFriction / eJ,
        rJ = (0, UJ.v)(fJ, GJ, xJ);
      jJ.friction = JJ.standingFriction * ((null === DJ ? cJ.bloxd.getClientPredictedOption(ZJ, "airMomentumConservation") : DJ.airMomentumConservation) ? rJ : GJ), qJ.ticksToReachMaxIdleFriction > 0 && qJ.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);