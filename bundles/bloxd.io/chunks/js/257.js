export const id = 257;
export const ids = [257];
export const modules = {
  39630: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => eR
    });
    var yR = GR(203),
      tR = GR(38821);
    const uR = 1.2,
      ZR = {
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
        yq: .5,
        mGR: !1
      },
      qR = {
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
        yq: .5,
        mGR: !1
      },
      iR = {
        physicsBodyDimensions: {
          width: yR.g.Vn,
          height: yR.g.Kn
        },
        hitBoxDimensions: {
          width: yR.g.Vn + .4,
          height: yR.g.Kn + .6
        },
        eyeHeight: yR.g.Kn * yR.g.playerEyeToHeightRatio,
        rideHeight: yR.g.Kn - .3,
        yq: .5,
        mGR: !1
      },
      fR = {
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
        yq: .5,
        mGR: !1
      },
      VR = {
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
        yq: .5,
        mGR: !1
      },
      KR = {
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
        yq: .5,
        mGR: !1
      },
      wR = {
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
        yq: .5,
        mGR: !1
      },
      rR = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: yR.g.Vn,
            height: yR.g.Kn
          },
          hitBoxDimensions: {
            width: yR.g.Vn + .4,
            height: yR.g.Kn + .6
          },
          eyeHeight: yR.g.Kn * yR.g.playerEyeToHeightRatio,
          rideHeight: yR.g.Kn - .1,
          yq: tR.g.yq,
          mGR: !0
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
        },
        Camel: {
          modelScale: uR,
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
        },
        "Cave Golem": ZR,
        "Draugr Zombie": {
          ...iR,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": iR,
        "Frost Golem": ZR,
        "Frost Zombie": {
          ...iR,
          defaultPose: "zombie"
        },
        "Frost Skeleton": iR,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: yR.g.Vn,
            height: yR.g.Kn
          },
          hitBoxDimensions: {
            width: yR.g.Vn + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          yq: .5,
          mGR: !1
        },
        Wolf: fR,
        Bear: VR,
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
          yq: .5,
          mGR: !1
        },
        Stag: KR,
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
          yq: .5,
          mGR: !1
        },
        Gorilla: wR,
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
          yq: .5,
          mGR: !1
        },
        "Draugr Huntress": iR,
        "Magma Golem": ZR,
        "Spirit Golem": ZR,
        "Spirit Wolf": fR,
        "Spirit Bear": VR,
        "Spirit Stag": KR,
        "Spirit Gorilla": wR,
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: yR.g.Vn,
            height: yR.g.Kn
          },
          hitBoxDimensions: {
            width: yR.g.Vn + .4,
            height: yR.g.Kn + .6
          },
          eyeHeight: yR.g.Kn * yR.g.playerEyeToHeightRatio,
          rideHeight: yR.g.Kn - .1,
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: yR.g.Vn,
            height: yR.g.Kn
          },
          hitBoxDimensions: {
            width: yR.g.Vn + .4,
            height: yR.g.Kn + .6
          },
          eyeHeight: yR.g.Kn * yR.g.playerEyeToHeightRatio,
          rideHeight: yR.g.Kn - .1,
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
        },
        Zombie: {
          ...iR,
          defaultPose: "zombie"
        },
        Skeleton: iR,
        Mummy: {
          ...iR,
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
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
          yq: .5,
          mGR: !1
        },
        "Iron Guardian": qR,
        "Gold Guardian": qR,
        "Diamond Guardian": qR,
        "Moonstone Guardian": qR,
        "Iron Goofy Golem": qR,
        "Gold Goofy Golem": qR,
        "Diamond Goofy Golem": qR,
        "Moonstone Goofy Golem": qR,
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
          yq: .5,
          mGR: !1
        }
      };

    function eR(RR) {
      return rR[RR]
    }
  },
  38176: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = {
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
  38827: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(385),
      tR = GR.n(yR),
      uR = GR(2102);
    let ZR;
    var qR, iR, fR, VR, KR, wR, rR, eR, aR;
    const LR = [1, "b", 0, 12, 221, 9, 214, "e", "f", 74, 8, 255, "length", 144, 42, 3, "a", 32, "undefined", void 0, 70, "c", 2, 118, 63, 6, "fromCodePoint", 7, "push", "h", 182, 95, "i", 91, 41, 8191, 88, 13, 14, 25, 217, "g", 29, 166, 174, 169, 5, "d", 142, 184, 80, 1023, 65536, 10, 55296, 56320, 128, 31, 15, 18, 240, 236, 4, 192, 235, 43, 176, 224, 24, 56, 168, !1, 127, 173, 211, 124, 69, 175, 210, 143, 139, 151, 152, 153, null, 147, 148, 149, 150, 154, 155, 156, 145, 146, 162, 163, 164, 165, 167, "gr", 140, 40, 17, 11, 195, 106, 171, 226, 78, 181, 27, "j", 191, "on"];

    function nR(...RR) {
      return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = function(...RR) {
        for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = '/;y293g{uN.!cTp}#EhD`Sqm%<sZ|k[GneI61(=aXU,WjCVb@_BRF$+Ar0>K)dlvfYxOo5~]?Q84Piwz7J^&:LHM"*t', RR[LR[1]] = "" + (RR[LR[2]] || ""), RR[LR[4]] = RR[LR[1]].length, RR[-LR[9]] = [], RR[LR[7]] = LR[2], RR[LR[8]] = LR[2], RR[-LR[6]] = -LR[0]), RR[LR[3]] = LR[2]; RR[LR[3]] < RR[LR[4]]; RR[LR[3]]++)
          if (RR[LR[5]] = RR[LR[0]].indexOf(RR[LR[1]][RR[LR[3]]]), RR[LR[5]] !== -LR[0])
            if (RR[-LR[6]] < LR[2]) RR[-LR[6]] = RR[LR[5]];
            else {
              bR(RR[-LR[6]] += RR[LR[5]] * LR[33], RR[LR[7]] |= RR[-LR[6]] << RR[LR[8]], RR[LR[8]] += (RR[-LR[6]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
              do {
                bR(RR[-LR[9]].push(RR[LR[7]] & LR[11]), RR[LR[7]] >>= LR[10], RR[LR[8]] -= LR[10])
              } while (RR[LR[8]] > LR[27]);
              RR[-LR[6]] = -LR[0]
            } return RR[-LR[6]] > -LR[0] && RR[-LR[9]].push((RR[LR[7]] | RR[-LR[6]] << RR[LR[8]]) & LR[11]), UR(RR[-LR[9]])
      }(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
    }

    function UR(RR) {
      return typeof VR !== LR[18] && VR ? (new VR).decode(new KR(RR)) : typeof wR !== LR[18] && wR ? wR.from(RR).toString("utf-8") : aR(RR)
    }

    function WR() {}
    bR(qR = {}, iR = ["{n0RJe~[!`", "eIl|qwN{m>pzTd>|>mqAaLuFWuD4E3P<Cld9|wnf(D*0u]hXE0q9", "[YGP&lK4$T*8by", "|Yq91X>oJ01Fb=U<H@#g0?}D2", ">oz+;)5RLD>pj2ym,R;", '^pE[kFf>sY7JY%lEe+2kMC(6Pu6G6>dm!W1kao>h"YRPx=%I;}NZ%', "%N[|51SbG}qI~<2W@cRkB>S{Rfb9y3L6", "7lNw?@4;Wrz}f&8=99n+2HKvpx{>#bZk<nV{m5fob}", '?E"gGwk{o0x$t_dk0@ckp=n13Dvh#K/18RgA*P{4<Eu4|9', 'VYEg1XU6$+AG7]4=3W:$)?"%|Sj{)ZCDH|23aoUbZKx~I<vE^@;', "ZWZi9I/", "@XGFCvE{OfT?!2c=BXbF#B{;1D3T!=nh7/", '0@X[_al%2f"c}yx1g0>iboq8GS', "_]mQb>XV6)xK(?$ZSvYn[XxVhcr77]{G!;", "YG9BEAsu?E,", "k8yRo)BX,Y^h/]JX_C}+67M{{", "?p<[Aa+hM`O<O>/%10mF3zZUKu6Gv=8=Am#+sP/", "BN^u&K,VecIZGy", "J~:kAIdTx0}A0%F|c9/[g5mD@v$So}$U}V;44BED4KzVS)mk", "sVXggAg[3Te?<9([SN!k|=h1Z`A", "f|MPN@5{B+E@K~(<0lFA2HvkUlD?sypX^/", 'd+V9Mb;D"Er7{a0k>m%_yl1%qfdh;', 'w!2kC(t%vhtJt_;Wo,ck2@"IZ`', "0l4sF>R6R+Jrx_^IDv/N", "y+:B]$3$10Pu;", "d+$A^J}<o0CP`?H|$RfgD=n%U`%TE@W=HKJumP};", "FNWiQ1;4v$];N:x(a8v9", 'vQ{F~)qHkKi<L1"6|Iy', "PG?Q.0zkL+gz9&G[BXr+}B{;dh794pgD>CA9nK]TfhOxI3FZ{m2", "I(D?U_{v[h=5G2YmYN=GGLtc]TZ.y<g<X2ng", "q`On=^RTlv@6c]Mqs8G|:5.h[}|", 'Th+P@~wcAfH8S#;ho+[_<w"XRfa|u].', ",Es4p8k68pp4;", "%YT8C(;UI0&i!yq|)Y3A|FE6ZleS?}ehA/", 'PIN+"eSbNlW', '],;[Zb;$ju`zT1EZ1ctnj~Aka`Fr)&6<YQEgC^_TkSGK)2wao@XN"PfH&0K', '#c"N*0%V|Y#IDpPs8rb9_vJ;=D<2J9;WN;', 'KIa_l8c>^)*8G&9W^|?+%="VNAN?V^rI*$R.sw[H%>%', "O+^R^PF[LfsZa^Oh],lF^5c1ON", "L|iBGKpFU`Xln]cDSYSA[dRD;c7O,yia", '%]"NmBoV@h4kO~G(u]O3j^C;fv862^E`)l$.', "W(~9uP`>;xZZca4<z<:BMwbbe+,7;", "._u+L&}5CKb6U9K|L,w9=^oV{>g>z=Kmum%g!Hrh.K$Szy>16)V{", "wpv_{$<b.Ag>4s(GRC^u_R:I<l4Ox=`|U8wFc@:I+fx6Zp|1dK6n_(Fy", ";9uwN)EkxD3`ApT=;_mF(6#1l$|zU__Z7Y0goVf[uA*8F2N", "0ltnr:)yex^<S1<6wY;[(X~o=>|Pn#+U!k+9&BfV9Tf~O}P=RsQRlz/", "yv&BU7E{bS(PH_m65me[Mwg[/0hlC#VX%R2.l8N;90bP+=c`8of_;J};", "g6d.b(9%a`&igB4a!sR?oA/", "yNuwW4#%hD+hl<:q~QwF*P.[Icfu*@~(%}Qg+(vUsp,", '$Y5P/?[1@0ZIx(?h]C|{"P/>_}uol(g=S0kA$4xhvhK6F2#IAC{[XQO5.`.Z;', "8CTP0i!T,Kn5cah|1WhnF:7XbSY9$)]DirhRkL/", "<kX[iPK6xcR!A^bZACfgebPhL+%>m^lE|N0R[wsf>lb9H_)6wEl9fz/", "X]lP<Fikip0P,~g%4G2", "Z8ji[]8gM`k?6^*UH@/+WrM;", ";9<Z/Ia{oD24vp<|}+qG6b/", "kWG_EF,cBc`Zz=6(#+s?lz<{O0tigdo[tK5|#l~>Dc[TI()[|VVQc1Rk0>.@;", "m}tnw=L5_v:<F&7I<ob_[", "~+gF6Xyh>E[Y5%qIh)cG,d#H|pHn@b]G[V~NZ", "7~peOJ[[EcX{$)RI%mqP$>HXGvbx@K=(e@Wn~@d;IN&rQ%S|B/", 'xgG|#AU{K`_l3@"#*p[{Fi:X.l;wE#f%dIv|E]O;w$o9Y1t1<sLB|w}b9', "xlOBMe/", "JC,4d>?FzchzJ%rIQr$G7J!J)lH0n]g=eo1.S", "hs${tCUb=DY7S@uGkI[{Aiq8jrRPU#<I7ri8l>aTz)590#g%.8Rnh1Uvcp^r;", "Zo~|m0UD]TRh6=1hKKU4V(C6yD]~>_%6A+*RqFB[J0<?33", "h)x$sPLUGh;e{^uDs}X+V>*z[xWF)Zv[lXYRn7UT2", "U8({&=]vKYwqr2", 'M`f+#PF[Y}q`"&a=QR+Np', 'QYBn"0mb/cTIg3`II0}whBF7mTNZ#b4a', "B]LFgl>hJc", "k`S8ZX=>_xKhy3", "6R#NAVGkVS&8!2/mkc2?aocVB0SYzsHI<Vy", "@RJuOI4;[}TzX?SXroIZ_oq7)rj%09", "rpue$$qV)u}[s3fhAY)A7AZ6vv@E8_SX$o0gg?jcY+AQj#:IQGWn+I/", '<YQR[d&0"`', "r]d.lIrXL+p[1ZqU|)Gg", "5@QulzvTecD(6sEZFYWk1+S6Puf|%20mJ2cigJEUf)po:1I[", "(Wa_)ivkdr4nFK9G@0gP[wnFYh1P:9]%EcP3Co(D|S?Q+d2E.n${6K/", "mkbFf@L6Tl5$H_~h*E]PbaXF2", ";0enD]gh[S.`Mp{GVYM_no(0sY4uw5?hO(qPnQ$m@c1IY@v[0/", "18A_?lmkgAs2I_L|zr*n#", "N(@Nu8|10`cY)2pXIX|iS", "^QWkARTDZK0Qua:|ERBnFvrVZlvK[(7Z$@_ZIwNDF0z)&s9%2n)8w1E;", "g02kSB/,MT(Qd@>U@0&BMw~grY{zkdY%0K~|B~1>kpQnqJ4aaky", "bNb_A^toy+]}?Zp", "8R@QgI/", "^Y83*QtFNE#Rp3", "y)o32@+[@)ud#ZXhf|#N=rOvY0#EX2L|am8n91p%g", 'QRFAv$Lk"EPk!p)1hVHFe]:I&c$7}&5(pcUg^C5T)!W%;', "<sX+S]GbgTb5K^p`eoBnEPwVil+Pz~BIClHFAV1fI+(", "fEj8a+/", "2mp{qPy1zcXGrZlEE]v9*K.>BNLOLJ<k60yR(Qf[gfq`>T/hHKOnaoQ;", "%nVA}0=%#vnzxT|m>YI4<LDb2)P8zbf%K(@QkF/", "~gC8AIQ;NlBpF}#s%8F8A~RTIc%>rZ|mJ/", "M2PkE5@Fbr%RP2[E+2)$91.FwhYQzpjsnWgFP@?FFfG5b2f,{Wng", "KskGj6?h_Ns", '!sCA,Q#%e}Opbp5h8KsnFV0bcYxub~Z,#+Bn?l;UMTUF"2~GCY5s<', "$]jAvAA{9", "B@+|Uow8t`|zapuh", "=@enfa/", "UEgF.0LEBc0n(@g", "BXw]P5zR6DPumpT", ".WDk<&06m`T#tJ.sN_jG}Bz;&c", "T]C8{z>hKlSE09K1hn2", "9)UZ1o[1/v$|N#<,zr;", 'nWkA"bW;{ffFuZf1VNBZX7,X&N', "HpL]<Kj%+fK9D^>|O+gF.1EbEcaP2B&I+mfQ>V,y", "^@N?)IzTlhkEd9iZ*uT{B4]UIv,EJ9Zk8l?g9AdTp}O776VXgWlG_:Bhf}", "Usa|[]_DD0oQ!B(D#]EZWvfV[SGFrKL6XoBk+::VDDfF;", "UY6.R(Z4UY`gZB#s4lRi?zy,kp*0C@yE}s,4j4KT&0+712", '[+2.;J*k"ES2X2Y,sYWnkd5Rb$;w,^u', "(sqP@~HFDNc(FK#I5`7g*QOT3+mTC9<IcWSA~BcVKE~}Q?AIi!({", "?&P3Pe,u", "WKFZ`t_C", "46~[NikC", "1VZ5K.D", "=5qRg[IC", "5oOE9%JC", 'uG~"!t(C', "uGuZ5", "NPn*`K!?a16z,WGEHPg3W)p", "#<R3|sjq!K.Bfhg60oS7EjHID,ZMd5=", "_sJ40.>5^,v@&72SBsk?76G", "}b0J5P?GQl*r^6DzU<_Ye?3;$cnT%yR", "Xj8&LyDO@(C~}rtB#qJmTD9NUnu.v4I", "Dsrvc<Yq`.Tyv*(;Wtrmv?hq<D.", "S%iqyU<", "5<a$u%(y", "3DEF", "xR=GiJ`y", ')Tmx"_{H', "c8qO", "&NmOyof", "cTgb", "QF|tB#/U", "ecisr.T;c>F|G3SS=jYCii#(TA^4mMN", ":iq(#9n==py", "@drFk7DZ", "#*:!/!23", "iF3!ao,3", "z?IC@ao", "[$9RYzN5", "n$Ptu.N5", "$$eR", "[$*Vg2f5", "L$rzNzp5", "J+*V)i<5", "vc6Vp", "[$*VNzp5", "J+9Rn_65", "fDwWv.[5", "_Jwvvif5", "a4XvFV[5", "G4.zVqp5", "t+VlZ*?5", ",DPtx_p5", "vj.z@VTU", "#11v%", "=$9R", "e$*l^", "Dc,v=", "t]Q49<85", "X@dC%", ",D4vHhY5", "vC4W=.o", ",D4v%in5", "J+wv)zcU", "t+7v}_]5", "=j.z@Vo", "Z._+", "mj[W", "54%y", "Vh[W", "lBa;za%0", 'te_"f', "aNIy", "wk2+", "r@7W", "u$6ViqD5", "u/Ia<uk4", "U3BR8#K5", "nNazqqN5", "7C0W", "sDdC", "Gc4vs*?5", "Xl0W", "nc0v2z65", "cjdHc_Y5", "FGpR_qp5", "Q?ar}_o", "X/&@1[kQ", ")`&9", "B$vVfURH", "nF.Q<s+", "$cZP3I{Q", "_=&@r?wQ", '"`79sH+', "A1J`XV[M", "I7]>f", "h4.zVqp5", "nc0v7V~5"]), bR(fR = function(...RR) {
      bR(RR[LR[12]] = LR[2], RR[LR[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], RR[-LR[13]] = LR[19], RR[-LR[14]] = []);
      try {
        bR(RR[-LR[13]] = Object, RR[-LR[14]][LR[28]]("".__proto__.constructor.name))
      } catch (iR) {}
      RR: for (RR[LR[15]] = LR[2]; RR[LR[15]] < RR[LR[16]][LR[12]]; RR[LR[15]]++) try {
        for (RR[-LR[13]] = RR[LR[16]][RR[LR[15]]](), RR[LR[17]] = LR[2]; RR[LR[17]] < RR[-LR[14]][LR[12]]; RR[LR[17]]++)
          if (typeof RR[-LR[13]][RR[-LR[14]][RR[LR[17]]]] === LR[18]) continue RR;
        return RR[-LR[13]]
      } catch (iR) {}
      return RR[-LR[13]] || this
    }() || {}, VR = fR.TextDecoder, KR = fR.Uint8Array, wR = fR.GK, rR = fR.String || String, eR = fR.Array || Array, aR = function() {
      var RR, JR, GR = new eR(LR[56]);
      return bR(RR = rR[LR[26]] || rR.fromCharCode, JR = []),
        function(...yR) {
          for (bR(yR[LR[12]] = LR[0], yR[-LR[23]] = LR[19], yR[LR[22]] = LR[19], yR[LR[21]] = yR[LR[2]][LR[12]], JR[LR[12]] = LR[2]), yR[LR[20]] = LR[2]; yR[LR[20]] < yR[LR[21]];) bR(yR[LR[22]] = yR[LR[2]][yR[LR[20]]++], yR[LR[22]] <= LR[72] ? yR[-LR[23]] = yR[LR[22]] : yR[LR[22]] <= 223 ? yR[-LR[23]] = (yR[LR[22]] & LR[57]) << LR[25] | yR[LR[2]][yR[LR[20]]++] & LR[24] : yR[LR[22]] <= 239 ? yR[-LR[23]] = (yR[LR[22]] & LR[58]) << LR[3] | (yR[LR[2]][yR[LR[20]]++] & LR[24]) << LR[25] | yR[LR[2]][yR[LR[20]]++] & LR[24] : rR[LR[26]] ? yR[-LR[23]] = (yR[LR[22]] & LR[27]) << LR[59] | (yR[LR[2]][yR[LR[20]]++] & LR[24]) << LR[3] | (yR[LR[2]][yR[LR[20]]++] & LR[24]) << LR[25] | yR[LR[2]][yR[LR[20]]++] & LR[24] : (yR[-LR[23]] = LR[24], yR[LR[20]] += LR[15]), JR[LR[28]](GR[yR[-LR[23]]] || (GR[yR[-LR[23]]] = RR(yR[-LR[23]]))));
          return JR.join("")
        }
    }());
    const AR = tR()[nR(LR[56])](),
      CR = tR()[nR(LR[56])](),
      XR = tR()[nR(LR[56])](),
      MR = tR()[nR(LR[56])](),
      BR = tR()[nR(LR[56])](),
      lR = tR()[nR(LR[56])](),
      pR = tR()[nR(LR[56])](),
      gR = (...RR) => {
        function JR(...RR) {
          return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = function(...RR) {
            for (bR(RR[LR[12]] = LR[0], RR[LR[16]] = 'f6HdPnlFONbMtS#a%ziLZgB[,4JcD0ypxC{W=)](/rXT9wQ"Ykem@;s1`<2R?+Ev&I3$_>ho*V85K|~G}j!q^7A:Uu.', RR[LR[44]] = "" + (RR[LR[2]] || ""), RR[LR[15]] = RR[LR[44]].length, RR[LR[47]] = [], RR[LR[46]] = LR[2], RR[LR[8]] = LR[2], RR[LR[27]] = -LR[0]), RR[LR[10]] = LR[2]; RR[LR[10]] < RR[LR[15]]; RR[LR[10]]++)
              if (RR[LR[73]] = RR[LR[16]].indexOf(RR[LR[44]][RR[LR[10]]]), RR[LR[73]] !== -LR[0])
                if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[73]];
                else {
                  bR(RR[LR[27]] += RR[LR[73]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[LR[8]], RR[LR[8]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
                  do {
                    bR(RR[LR[47]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[LR[8]] -= LR[10])
                  } while (RR[LR[8]] > LR[27]);
                  RR[LR[27]] = -LR[0]
                } return RR[LR[27]] > -LR[0] && RR[LR[47]].push((RR[LR[46]] | RR[LR[27]] << RR[LR[8]]) & LR[11]), UR(RR[LR[47]])
          }(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
        }
        RR[LR[12]] = LR[15];
        const GR = lR;
        return tR()[JR(129) + JR(130)](GR, RR[LR[22]]), tR()[JR(131)](RR[LR[2]], GR, tR()[JR(132)](GR, RR[LR[0]]))
      };

    function bR() {
      bR = function() {}
    }
    ZR = (RR, JR, GR, yR, ZR, fR, VR, KR) => {
      function wR(...RR) {
        return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = function(...RR) {
          for (bR(RR[LR[12]] = LR[0], RR[LR[16]] = 'oU513eP;WCR/NkL$Y>[^69&u~%DXpg=rvx?,nGfS+}mcZJ8sKM<4|B]tbj`7@yF:dAOw*ha.IHlTzViE_q#0{2(!")Q', RR[-LR[74]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[-LR[74]].length, RR[-LR[75]] = [], RR[LR[76]] = LR[2], RR[-LR[77]] = LR[2], RR[LR[27]] = -LR[0]), RR[LR[10]] = LR[2]; RR[LR[10]] < RR[LR[21]]; RR[LR[10]]++)
            if (RR[LR[32]] = RR[LR[16]].indexOf(RR[-LR[74]][RR[LR[10]]]), RR[LR[32]] !== -LR[0])
              if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[32]];
              else {
                bR(RR[LR[27]] += RR[LR[32]] * LR[33], RR[LR[76]] |= RR[LR[27]] << RR[-LR[77]], RR[-LR[77]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
                do {
                  bR(RR[-LR[75]].push(RR[LR[76]] & LR[11]), RR[LR[76]] >>= LR[10], RR[-LR[77]] -= LR[10])
                } while (RR[-LR[77]] > LR[27]);
                RR[LR[27]] = -LR[0]
              } return RR[LR[27]] > -LR[0] && RR[-LR[75]].push((RR[LR[76]] | RR[LR[27]] << RR[-LR[77]]) & LR[11]), UR(RR[-LR[75]])
        }(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
      }
      wR(133) in WR && (module.exports = async (RR = () => {
        throw new Error(wR(134))
      }) => {
        function JR(...RR) {
          for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = 'vjZEBA:soYFrhUQnCGIpeSdNbgJf"3~>({xW*iDz2#w|tM1.Hk&O!=}y?`X/4a+^P;<K7L0VluT[,6@89qm5)R_%]c$', RR[LR[22]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[LR[22]].length, RR[LR[62]] = [], RR[LR[46]] = LR[2], RR[LR[8]] = LR[2], RR[LR[27]] = -LR[0]), RR[LR[78]] = LR[2]; RR[LR[78]] < RR[LR[21]]; RR[LR[78]]++)
            if (RR[LR[79]] = RR[LR[0]].indexOf(RR[LR[22]][RR[LR[78]]]), RR[LR[79]] !== -LR[0])
              if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[79]];
              else {
                bR(RR[LR[27]] += RR[LR[79]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[LR[8]], RR[LR[8]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
                do {
                  bR(RR[LR[62]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[LR[8]] -= LR[10])
                } while (RR[LR[8]] > LR[27]);
                RR[LR[27]] = -LR[0]
              } return RR[LR[27]] > -LR[0] && RR[LR[62]].push((RR[LR[46]] | RR[LR[27]] << RR[LR[8]]) & LR[11]), UR(RR[LR[62]])
        }

        function GR(...RR) {
          return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = JR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
        }
        const yR = new Set(process.argv.slice(LR[22]));
        if (!yR.has(GR(135))) {
          if (yR.size !== LR[0]) return LR[71];
          if (!yR.has("-v")) return LR[71]
        }
        return await (async (JR, GR) => {
          function yR(RR) {
            var JR, GR, yR, tR, uR, ZR, qR, iR = '6`3*:u^@5<%s,S+ZvwnM24F]DQb~O)=X$HfyPdeL.Jr1qUx{>_hBC0I[z;ET/9k7(Nl|8oVmjpcWA!igY&}#a?RK"Gt';
            for (bR(JR = "" + (RR || ""), GR = JR.length, yR = [], tR = LR[2], uR = LR[2], ZR = -LR[0]), qR = LR[2]; qR < GR; qR++) {
              var fR = iR.indexOf(JR[qR]);
              if (fR !== -LR[0])
                if (ZR < LR[2]) ZR = fR;
                else {
                  bR(ZR += fR * LR[33], tR |= ZR << uR, uR += (ZR & LR[35]) > LR[36] ? LR[37] : LR[38]);
                  do {
                    bR(yR.push(tR & LR[11]), tR >>= LR[10], uR -= LR[10])
                  } while (uR > LR[27]);
                  ZR = -LR[0]
                }
            }
            return ZR > -LR[0] && yR.push((tR | ZR << uR) & LR[11]), UR(yR)
          }

          function tR(...RR) {
            return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = yR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
          }
          return GR === await RR() ? tR(138) + "l)" : ""
        })(), !0
      });
      const rR = RR[wR(LR[80])][wR(LR[100]) + wR(141) + wR(LR[48])](JR);
      let eR = RR[wR(LR[80])][wR(LR[79]) + wR(LR[13]) + wR(LR[92]) + wR(LR[93])](rR);
      const aR = eR === LR[84] ? RR[wR(LR[80])][wR(LR[85]) + wR(LR[86]) + wR(LR[87]) + wR(LR[88])](JR, wR(LR[81]) + wR(LR[82]) + wR(LR[83]) + LR[7]) : eR[wR(LR[81]) + wR(LR[82]) + wR(LR[83]) + LR[7]],
        nR = eR === LR[84] ? RR[wR(LR[80])][wR(LR[85]) + wR(LR[86]) + wR(LR[87]) + wR(LR[88])](JR, wR(LR[89]) + wR(LR[90]) + wR(LR[91])) : eR[wR(LR[89]) + wR(LR[90]) + wR(LR[91])];
      bR(tR()[wR(157)](AR, LR[2], LR[2], fR), tR().ta(AR, AR, tR()[wR(158)], yR.heading), tR()[wR(159)](pR, ZR.BL), pR[LR[0]] = LR[2]);
      const lR = GR[wR(160) + wR(161)]();
      eR = RR[wR(LR[80])][wR(LR[79]) + wR(LR[13]) + wR(LR[92]) + wR(LR[93])](rR);
      let vR = eR === LR[84] ? RR[wR(LR[80])][wR(LR[85]) + wR(LR[86]) + wR(LR[87]) + wR(LR[88])](JR, wR(LR[94]) + wR(LR[95])) : eR[wR(LR[94]) + wR(LR[95])];
      if (!lR && tR()[LR[99]](pR) && (eR === LR[84] ? RR[wR(LR[80])][wR(LR[85]) + wR(LR[86]) + wR(LR[87]) + wR(LR[88])](JR, wR(LR[96]) + wR(LR[97]) + wR(LR[43]) + wR(LR[98])) : eR[wR(LR[96]) + wR(LR[97]) + wR(LR[43]) + wR(LR[98])])) {
        function oR(RR) {
          var JR, GR, yR, tR, uR, ZR, qR;
          for (bR(JR = "" + (RR || ""), GR = JR.length, yR = [], tR = LR[2], uR = LR[2], ZR = -LR[0]), qR = LR[2]; qR < GR; qR++) {
            var iR = 'facgNeo{+Wytk=ujXnJ8Q%Omd"h5$w@Z!*}]YURbL(K4s?vV:&#7<I93xp`_.zG/[>E)B;i1F^62,CPT|A~rqMSlDH0'.indexOf(JR[qR]);
            if (iR !== -LR[0])
              if (ZR < LR[2]) ZR = iR;
              else {
                bR(ZR += iR * LR[33], tR |= ZR << uR, uR += (ZR & LR[35]) > LR[36] ? LR[37] : LR[38]);
                do {
                  bR(yR.push(tR & LR[11]), tR >>= LR[10], uR -= LR[10])
                } while (uR > LR[27]);
                ZR = -LR[0]
              }
          }
          return ZR > -LR[0] && yR.push((tR | ZR << uR) & LR[11]), UR(yR)
        }

        function cR(...RR) {
          return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = oR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
        }
        bR(gR(CR, AR, pR), gR(XR, pR, AR), tR()[cR(LR[70])](MR, pR, XR));
        const PR = tR()[cR(LR[45])](pR),
          IR = tR()[cR(170)](AR, pR) / fR / PR,
          mR = Math[cR(LR[106])](IR, LR[2]) + LR[0];
        if (fR * fR < tR()[LR[99]](XR)) {
          function zR(RR) {
            var JR, GR, yR, tR, uR, ZR, qR;
            for (bR(JR = "" + (RR || ""), GR = JR.length, yR = [], tR = LR[2], uR = LR[2], ZR = -LR[0]), qR = LR[2]; qR < GR; qR++) {
              var iR = 'O/05=_g;~x"sBbwe%R7D>P+tj},1f?:HAWMh^Jl!NC$q|kv{IXpyTazu&.@*])VE#[S42ZcLYQ3mroKd(<iG689FnU`'.indexOf(JR[qR]);
              if (iR !== -LR[0])
                if (ZR < LR[2]) ZR = iR;
                else {
                  bR(ZR += iR * LR[33], tR |= ZR << uR, uR += (ZR & LR[35]) > LR[36] ? LR[37] : LR[38]);
                  do {
                    bR(yR.push(tR & LR[11]), tR >>= LR[10], uR -= LR[10])
                  } while (uR > LR[27]);
                  ZR = -LR[0]
                }
            }
            return ZR > -LR[0] && yR.push((tR | ZR << uR) & LR[11]), UR(yR)
          }

          function SR(...RR) {
            return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = zR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
          }

          function jR(...RR) {
            bR(RR[LR[12]] = LR[2], RR[LR[105]] = function(...RR) {
              if (bR(RR[LR[12]] = LR[0], RR[LR[31]] = RR[LR[2]].length), RR[LR[31]] < LR[22]) return LR[2];
              if (bR(RR[LR[100]] = Math.max(...RR[LR[2]]), RR[LR[101]] = Math.min(...RR[LR[2]])), RR[LR[100]] === RR[LR[101]]) return LR[2];
              for (bR(RR[LR[0]] = Array(RR[LR[31]] - LR[0]).fill(Number.MAX_SAFE_INTEGER), RR[-LR[102]] = Array(RR[LR[31]] - LR[0]).fill(Number.MIN_SAFE_INTEGER), RR[LR[8]] = Math.ceil((RR[LR[100]] - RR[LR[101]]) / (RR[LR[31]] - LR[0])), RR[LR[27]] = LR[2]), RR[LR[10]] = LR[2]; RR[LR[10]] < RR[LR[31]]; RR[LR[10]]++) RR[LR[2]][RR[LR[10]]] !== RR[LR[101]] && RR[LR[2]][RR[LR[10]]] !== RR[LR[100]] && bR(RR[LR[27]] = Math.floor((RR[LR[2]][RR[LR[10]]] - RR[LR[101]]) / RR[LR[8]]), RR[LR[0]][RR[LR[27]]] = Math.min(RR[LR[0]][RR[LR[27]]], RR[LR[2]][RR[LR[10]]]), RR[-LR[102]][RR[LR[27]]] = Math.max(RR[-LR[102]][RR[LR[27]]], RR[LR[2]][RR[LR[10]]]));
              for (bR(RR[LR[5]] = Number.MIN_SAFE_INTEGER, RR[LR[104]] = RR[LR[101]]), RR[-LR[103]] = LR[2]; RR[-LR[103]] < RR[LR[31]] - LR[0]; RR[-LR[103]]++) RR[LR[0]][RR[-LR[103]]] === Number.MAX_SAFE_INTEGER && RR[-LR[102]][RR[-LR[103]]] === Number.MIN_SAFE_INTEGER || bR(RR[LR[5]] = Math.max(RR[LR[5]], RR[LR[0]][RR[-LR[103]]] - RR[LR[104]]), RR[LR[104]] = RR[-LR[102]][RR[-LR[103]]]);
              return RR[LR[5]] = Math.max(RR[LR[5]], RR[LR[100]] - RR[LR[104]]), RR[LR[5]]
            }, console.log(RR[LR[105]]))
          }
          SR(172) + "Y" in WR && jR(), tR()[SR(LR[73])](AR, AR, XR, mR)
        }
        bR(vR = (0, uR.t)(vR, 1, Math[cR(LR[106])](LR[0], Math[cR(LR[44])](LR[2], -IR, LR[0] - PR / fR))), tR()[cR(LR[77])](AR, AR, MR))
      }
      const OR = BR;
      bR(tR()[wR(LR[66])](OR, AR, pR), OR[LR[0]] = LR[2]);
      let xR = tR()[wR(177)](OR);
      if (!lR) {
        function dR(...RR) {
          for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = '*4KnHF}MjR3)x7c2Bs{~]mNyES,98TdLI+[Vlgt=PX?5Y/Zwr`faAzi"6%eDJ;p#v1$qW0&^@u!>G._Cho(UOk|:Qb<', RR[LR[22]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[LR[22]].length, RR[LR[62]] = [], RR[LR[46]] = LR[2], RR[LR[8]] = LR[2], RR[LR[27]] = -LR[0]), RR[LR[82]] = LR[2]; RR[LR[82]] < RR[LR[21]]; RR[LR[82]]++)
            if (RR[LR[5]] = RR[LR[0]].indexOf(RR[LR[22]][RR[LR[82]]]), RR[LR[5]] !== -LR[0])
              if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[5]];
              else {
                bR(RR[LR[27]] += RR[LR[5]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[LR[8]], RR[LR[8]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
                do {
                  bR(RR[LR[62]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[LR[8]] -= LR[10])
                } while (RR[LR[8]] > LR[27]);
                RR[LR[27]] = -LR[0]
              } return RR[LR[27]] > -LR[0] && RR[LR[62]].push((RR[LR[46]] | RR[LR[27]] << RR[LR[8]]) & LR[11]), UR(RR[LR[62]])
        }

        function ER(...RR) {
          return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = dR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
        }

        function YR(...RR) {
          bR(RR[LR[12]] = LR[2], RR[LR[1]] = function(...RR) {
            if (bR(RR[LR[12]] = LR[0], RR[LR[0]] = RR[LR[2]].length), RR[LR[0]] < LR[22]) return LR[2];
            if (bR(RR[LR[1]] = Math.max(...RR[LR[2]]), RR[LR[21]] = Math.min(...RR[LR[2]])), RR[LR[1]] === RR[LR[21]]) return LR[2];
            for (bR(RR[LR[47]] = Array(RR[LR[0]] - LR[0]).fill(Number.MAX_SAFE_INTEGER), RR[LR[107]] = Array(RR[LR[0]] - LR[0]).fill(Number.MIN_SAFE_INTEGER), RR[LR[25]] = Math.ceil((RR[LR[1]] - RR[LR[21]]) / (RR[LR[0]] - LR[0])), RR[LR[41]] = LR[2]), RR[LR[10]] = LR[2]; RR[LR[10]] < RR[LR[0]]; RR[LR[10]]++) RR[LR[2]][RR[LR[10]]] !== RR[LR[21]] && RR[LR[2]][RR[LR[10]]] !== RR[LR[1]] && bR(RR[LR[41]] = Math.floor((RR[LR[2]][RR[LR[10]]] - RR[LR[21]]) / RR[LR[25]]), RR[LR[47]][RR[LR[41]]] = Math.min(RR[LR[47]][RR[LR[41]]], RR[LR[2]][RR[LR[10]]]), RR[LR[107]][RR[LR[41]]] = Math.max(RR[LR[107]][RR[LR[41]]], RR[LR[2]][RR[LR[10]]]));
            for (bR(RR[LR[5]] = Number.MIN_SAFE_INTEGER, RR[-LR[108]] = RR[LR[21]]), RR[LR[103]] = LR[2]; RR[LR[103]] < RR[LR[0]] - LR[0]; RR[LR[103]]++) RR[LR[47]][RR[LR[103]]] === Number.MAX_SAFE_INTEGER && RR[LR[107]][RR[LR[103]]] === Number.MIN_SAFE_INTEGER || bR(RR[LR[5]] = Math.max(RR[LR[5]], RR[LR[47]][RR[LR[103]]] - RR[-LR[108]]), RR[-LR[108]] = RR[LR[107]][RR[LR[103]]]);
            return RR[LR[5]] = Math.max(RR[LR[5]], RR[LR[1]] - RR[-LR[108]]), RR[LR[5]]
          }, console.log(RR[LR[1]]))
        }
        ER(178) in WR && YR(), xR *= vR
      }
      const NR = VR[wR(179) + wR(180) + wR(LR[109])],
        DR = NR ? Math[wR(LR[30])](NR, xR) : xR;
      tR()[wR(183) + wR(LR[49])](OR, OR);
      const HR = KR !== LR[84] && void 0 !== KR ? KR : VR[wR(185) + wR(186) + wR(187) + wR(188)];
      if (DR > LR[2]) {
        function kR(...RR) {
          for (bR(RR[LR[12]] = LR[0], RR[LR[110]] = '+MQiqUjA9`PY%ZmcBCL<wl]|af=Wp$s>@D3xXS{,k(E/FG1;}[87d_t*zgr#huy)"vb5OT~HR^.04?I6JK!&eVN:n2o', RR[-LR[20]] = "" + (RR[LR[2]] || ""), RR[LR[21]] = RR[-LR[20]].length, RR[LR[47]] = [], RR[LR[46]] = LR[2], RR[-LR[109]] = LR[2], RR[LR[27]] = -LR[0]), RR[LR[29]] = LR[2]; RR[LR[29]] < RR[LR[21]]; RR[LR[29]]++)
            if (RR[LR[5]] = RR[LR[110]].indexOf(RR[-LR[20]][RR[LR[29]]]), RR[LR[5]] !== -LR[0])
              if (RR[LR[27]] < LR[2]) RR[LR[27]] = RR[LR[5]];
              else {
                bR(RR[LR[27]] += RR[LR[5]] * LR[33], RR[LR[46]] |= RR[LR[27]] << RR[-LR[109]], RR[-LR[109]] += (RR[LR[27]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
                do {
                  bR(RR[LR[47]].push(RR[LR[46]] & LR[11]), RR[LR[46]] >>= LR[10], RR[-LR[109]] -= LR[10])
                } while (RR[-LR[109]] > LR[27]);
                RR[LR[27]] = -LR[0]
              } return RR[LR[27]] > -LR[0] && RR[LR[47]].push((RR[LR[46]] | RR[LR[27]] << RR[-LR[109]]) & LR[11]), UR(RR[LR[47]])
        }

        function QR(...RR) {
          return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = kR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
        }
        let FR = GR[QR(189) + QR(190)] * HR;
        if (!lR) {
          function sR(...RR) {
            for (bR(RR[LR[12]] = LR[0], RR[LR[0]] = '+PHbimoThrQWdCJXDYyu`az9Gf$j.e#=V03BkF"%tN5IqEc6(MLv/wR&l4x}Z]np:A;~?K*8g1O!^)U@<s_S{7[|>,2', RR[LR[22]] = "" + (RR[LR[2]] || ""), RR[LR[15]] = RR[LR[22]].length, RR[LR[47]] = [], RR[LR[8]] = LR[2], RR[LR[25]] = LR[2], RR[-LR[112]] = -LR[0]), RR[LR[10]] = LR[2]; RR[LR[10]] < RR[LR[15]]; RR[LR[10]]++)
              if (RR[LR[111]] = RR[LR[0]].indexOf(RR[LR[22]][RR[LR[10]]]), RR[LR[111]] !== -LR[0])
                if (RR[-LR[112]] < LR[2]) RR[-LR[112]] = RR[LR[111]];
                else {
                  bR(RR[-LR[112]] += RR[LR[111]] * LR[33], RR[LR[8]] |= RR[-LR[112]] << RR[LR[25]], RR[LR[25]] += (RR[-LR[112]] & LR[35]) > LR[36] ? LR[37] : LR[38]);
                  do {
                    bR(RR[LR[47]].push(RR[LR[8]] & LR[11]), RR[LR[8]] >>= LR[10], RR[LR[25]] -= LR[10])
                  } while (RR[LR[25]] > LR[27]);
                  RR[-LR[112]] = -LR[0]
                } return RR[-LR[112]] > -LR[0] && RR[LR[47]].push((RR[LR[8]] | RR[-LR[112]] << RR[LR[25]]) & LR[11]), UR(RR[LR[47]])
          }

          function hR(...RR) {
            return RR[LR[12]] = LR[0], typeof qR[RR[LR[2]]] === LR[18] ? qR[RR[LR[2]]] = sR(iR[RR[LR[2]]]) : qR[RR[LR[2]]]
          }
          FR *= GR[hR(LR[112]) + hR(LR[63])]
        }
        let TR = GR[QR(193) + QR(194) + "ss"] * DR;
        DR < .3 && (TR *= DR), FR > TR && (FR = TR), bR(tR()[QR(LR[104])](OR, OR, FR), ZR[QR(196) + QR(197)](OR))
      }
      ZR[wR(198) + LR[113]] = GR[wR(199) + wR(LR[82]) + LR[113]] * (lR ? aR : nR)
    }
  },
  38821: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => iR,
      g: () => qR
    });
    var yR = GR(38827),
      tR = GR(2102);
    const uR = 2,
      ZR = 1,
      qR = {
        yq: 1,
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

    function iR(RR, JR, GR, qR, iR, fR, VR) {
      if (iR.speed) return (0, yR.c)(JR, GR, qR, iR, fR, VR, RR), void(iR.ticksToReachMaxIdleFriction = uR);
      const KR = qR.isOnGround(),
        wR = JR.bloxd.getSyncedClientOptions(JR.bloxd.getPlayerReader(GR)),
        rR = null === wR ? JR.bloxd.getClientPredictedOption(GR, "groundFrictionScale") : wR.groundFrictionScale,
        eR = null === wR ? JR.bloxd.getClientPredictedOption(GR, "airFrictionScale") : wR.airFrictionScale,
        aR = KR ? rR : eR,
        LR = Math.max(ZR, aR),
        nR = iR.ticksToReachMaxIdleFriction / uR,
        UR = (0, tR.t)(LR, aR, nR);
      fR.friction = RR.standingFriction * ((null === wR ? JR.bloxd.getClientPredictedOption(GR, "airMomentumConservation") : wR.airMomentumConservation) ? UR : aR), iR.ticksToReachMaxIdleFriction > 0 && iR.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);