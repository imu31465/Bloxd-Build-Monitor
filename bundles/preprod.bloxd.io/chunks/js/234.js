export const id = 234;
export const ids = [234];
export const modules = {
  38756: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => jQ
    });
    var wQ = XQ(231),
      qQ = XQ(37924);
    const TQ = 1.2,
      zQ = {
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
        Bs: .5,
        LWQ: !1
      },
      sQ = {
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
        Bs: .5,
        LWQ: !1
      },
      FQ = {
        physicsBodyDimensions: {
          width: wQ.h.ny,
          height: wQ.h.xy
        },
        hitBoxDimensions: {
          width: wQ.h.ny + .4,
          height: wQ.h.xy + .6
        },
        eyeHeight: wQ.h.xy * wQ.h.playerEyeToHeightRatio,
        rideHeight: wQ.h.xy - .3,
        Bs: .5,
        LWQ: !1
      },
      PQ = {
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
        Bs: .5,
        LWQ: !1
      },
      gQ = {
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
        Bs: .5,
        LWQ: !1
      },
      JQ = {
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
        Bs: .5,
        LWQ: !1
      },
      rQ = {
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
        Bs: .5,
        LWQ: !1
      },
      IQ = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: wQ.h.ny,
            height: wQ.h.xy
          },
          hitBoxDimensions: {
            width: wQ.h.ny + .4,
            height: wQ.h.xy + .6
          },
          eyeHeight: wQ.h.xy * wQ.h.playerEyeToHeightRatio,
          rideHeight: wQ.h.xy - .1,
          Bs: qQ.f.Bs,
          LWQ: !0
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
        },
        Camel: {
          modelScale: TQ,
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
        },
        "Cave Golem": zQ,
        "Draugr Zombie": {
          ...FQ,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": FQ,
        "Frost Golem": zQ,
        "Frost Zombie": {
          ...FQ,
          defaultPose: "zombie"
        },
        "Frost Skeleton": FQ,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: wQ.h.ny,
            height: wQ.h.xy
          },
          hitBoxDimensions: {
            width: wQ.h.ny + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Bs: .5,
          LWQ: !1
        },
        Wolf: PQ,
        Bear: gQ,
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
          Bs: .5,
          LWQ: !1
        },
        Stag: JQ,
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
          Bs: .5,
          LWQ: !1
        },
        Gorilla: rQ,
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
          Bs: .5,
          LWQ: !1
        },
        "Draugr Huntress": FQ,
        "Magma Golem": zQ,
        "Spirit Golem": zQ,
        "Spirit Wolf": PQ,
        "Spirit Bear": gQ,
        "Spirit Stag": JQ,
        "Spirit Gorilla": rQ,
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: wQ.h.ny,
            height: wQ.h.xy
          },
          hitBoxDimensions: {
            width: wQ.h.ny + .4,
            height: wQ.h.xy + .6
          },
          eyeHeight: wQ.h.xy * wQ.h.playerEyeToHeightRatio,
          rideHeight: wQ.h.xy - .1,
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: wQ.h.ny,
            height: wQ.h.xy
          },
          hitBoxDimensions: {
            width: wQ.h.ny + .4,
            height: wQ.h.xy + .6
          },
          eyeHeight: wQ.h.xy * wQ.h.playerEyeToHeightRatio,
          rideHeight: wQ.h.xy - .1,
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
        },
        Zombie: {
          ...FQ,
          defaultPose: "zombie"
        },
        Skeleton: FQ,
        Mummy: {
          ...FQ,
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
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
          Bs: .5,
          LWQ: !1
        },
        "Iron Guardian": sQ,
        "Gold Guardian": sQ,
        "Diamond Guardian": sQ,
        "Moonstone Guardian": sQ,
        "Iron Goofy Golem": sQ,
        "Gold Goofy Golem": sQ,
        "Diamond Goofy Golem": sQ,
        "Moonstone Goofy Golem": sQ,
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
          Bs: .5,
          LWQ: !1
        }
      };

    function jQ(QQ) {
      return IQ[QQ]
    }
  },
  37343: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    const wQ = {
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
  37926: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(416),
      qQ = XQ.n(wQ),
      TQ = XQ(1972);
    let zQ;
    var sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ;
    const yQ = [1, 71, 0, 8, "c", 9, "g", 5, 6, "d", 255, "length", 2, 169, "b", 4, "undefined", void 0, 3, 245, 63, "fromCodePoint", 7, 12, "push", "a", 91, 8191, 88, 13, 14, 38, 174, 103, "f", !1, 20, "h", 146, 112, 227, !0, 155, 127, 125, 213, "e", 128, 131, 195, 196, 236, 121, 51, "j", 89, 98, 223, "k", 110, 134, 147, 148, null, 142, 143, 144, 145, 149, 150, 151, 160, 161, 162, 163, 164, 165, 154, 243, 208, 210, 79, 21, 83, 114, "gq", "s", 170, 167, 75, 58, 133, 173, 16, 109, "K", 512, 107, "i", 222, 224, 194, 201, 15, 28, 92, 166, 1023, 192, 31, 18, 175, 248, 156, 32, 24, 10, 19, 64, 65535, 234, 25, 34, 81, "on"];

    function VQ(...QQ) {
      return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = function(...QQ) {
        for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[0]] = 'eTnQPCsFZVrd<14fjNIg;YcAOLMqH%U*&b@[z8>KS`DR0/"p,o2mi^5]GX3tEhwva|{!lB_Wk$?+96:y)~=u}x(#7.J', QQ[-yQ[1]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[4]] = QQ[-yQ[1]].length, QQ[yQ[9]] = [], QQ[yQ[7]] = yQ[2], QQ[yQ[8]] = yQ[2], QQ[yQ[6]] = -yQ[0]), QQ[yQ[3]] = yQ[2]; QQ[yQ[3]] < QQ[yQ[4]]; QQ[yQ[3]]++)
          if (QQ[yQ[5]] = QQ[yQ[0]].indexOf(QQ[-yQ[1]][QQ[yQ[3]]]), QQ[yQ[5]] !== -yQ[0])
            if (QQ[yQ[6]] < yQ[2]) QQ[yQ[6]] = QQ[yQ[5]];
            else {
              iQ(QQ[yQ[6]] += QQ[yQ[5]] * yQ[26], QQ[yQ[7]] |= QQ[yQ[6]] << QQ[yQ[8]], QQ[yQ[8]] += (QQ[yQ[6]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
              do {
                iQ(QQ[yQ[9]].push(QQ[yQ[7]] & yQ[10]), QQ[yQ[7]] >>= yQ[3], QQ[yQ[8]] -= yQ[3])
              } while (QQ[yQ[8]] > yQ[22]);
              QQ[yQ[6]] = -yQ[0]
            } return QQ[yQ[6]] > -yQ[0] && QQ[yQ[9]].push((QQ[yQ[7]] | QQ[yQ[6]] << QQ[yQ[8]]) & yQ[10]), DQ(QQ[yQ[9]])
      }(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
    }

    function DQ(QQ) {
      return typeof gQ !== yQ[16] && gQ ? (new gQ).decode(new JQ(QQ)) : typeof rQ !== yQ[16] && rQ ? rQ.from(QQ).toString("utf-8") : BQ(QQ)
    }

    function pQ(...QQ) {
      if (QQ[yQ[11]] = yQ[18], QQ[yQ[2]] === VQ(119) + yQ[95]) return QQ[yQ[0]] + QQ[yQ[12]]
    }

    function GQ() {}
    iQ(sQ = {}, FQ = ['/XcV"6^p&f_$iP0>b8%rn^j_n576EEwNgXQ', 'vV^*X"m+UI?GbjfqCRc*,}YFMwCVT', "}KLq4zaUj<]{zq%NeYl6W]%pG;/iOuwz+e", "2mQ2F]jztt%|YjGD~,w$l?vT", "Sl4i:~7ii5[yGEW*?,i^A9GS@VbtEq+g_*fV/Ge", 'OVRk"vN~J4', "yGB9k,4zR;!6T,|*", "bArkW2V^>aEHcCE`[<C]NBS<UY2G>oPIxL;?P@QLYa0iT", "$ty5zG#`|V~_*4iSo<!%i=riN{]9_4[U=,Ls&pwU,XPj0tqD", "nf;?K+SO[5SFm3_IYlhF,vJ?e<BYXP>Lc58H,lPU<tb4s8*AtVCFU", "_;ZVC^)OKalE#MkLPvT", "]mZsx/23UtZ;p_EDcT", "a*_9OSg[iaBYBzlOnEW$fz/1?NKyBz1qC&492oe", 'QRR%&[tT"YucW_eU{D)sfBq^L4TlI=wOAE.Z>)g16G)I2LE`0mPFN', "GV:H$B;zs", "h@/]|}^%{Va$f>wOF5&m<uvT@f!_s8r>K|i^ez#`P5@Bxz4", 'Kwfb`)f^aXYsSW~Sbl^?3@?<Yg[*$,Nqq"%??>j"(aVsshO[`XT', "[mh]2+![1Y{^Sp!UEQW$>xy%X|/w)uZ>h8,ok]e", "`%z?#Xp1eY4kgqF8omTqrBmxffS9qn4Kh,1?p_iIs", 'IEokD=("Z;Nsu>fKPoIm2m}"rtu!OQ', "c<FV}WZa=EvdV,fKosaVqxhpV|/9bC(`VS&VCyeD(1r1RMEDZ<bU}>dg3dA;T", '{/UVr><Z}19^qMCLhQ,ou>i(tN,BttbzNV&o8xPUn5Cs"heI/8^F.W]T', "b%zr8G8X%Y:^K4V", 'P&^?S)fBpv%;0qB*vQ*iSvTvYg^).~88pS,sP"_OJwdjqMn8=@#P', "k8poF~!Ah4w4^,^`utV:oo0im<.z&Q$I`?9Cv?kiB1|_UMxH5s+Z", '>%AoW2JiJt9ETE;S)dWH4,|TlV+!?~S>BVQC;>+F2EmH+4P*"|(oByA%[5i', 'o5&m<u"ie{mvJLKOBm^icBe', "DX`UQ~FBof", 'Yv5Fn}1B"{T8K4xSjE2^@o"SNIArp4SL5,,V|ym`UfQUA>HD_sLs', '%"i*n@`[ia;8kWLH)@&o6,6mA;', "4vsVS$Y[<w,PT", "&QlM6zOi=vO9MMC*AWn", ">mUoVXA%W3hT3h)S0A;6H", "l8l^mG)<|I,NEu`K6L8FLSP3/tN+7P6KKQ/FUp61eYgr8PhDu|dkPE*FF", ".4t%y2MnO||LHWxS9l@mSlL`P5^", "VAnk~/[%7|X", "NW@%Ht*X*f+_:nCRvs*9_^_<$wU;!=K>pMq&hyZzla=f8P", "{w`s[[uBIEn8.)Y[zEA9H", "MMw9mG9SjfJ6uuc`?N]P", "~,m6!k@O3|>@v4eU4v8*LXr3Ed<+UC%DVX/r", '7dd6EyUURtUw@o`g_/xi0mNFh4K]Tz9gS|<F5@5ncg+"K4[I|e', "YX:i^=5U%t8FUC", "#NHrT,yvUI", 'g<,$m=(lV]F1:LaUPR&UK8k":ZTlb8PR;mT', "^mL+F]_O?;2*c8,@+w8Hpv;3hdSHHtsOqM%r8l9sRd&4#>!Ls5]ic", "l/|&a}W1[X!ZNEW8NWxP:/{I04kc>8Z", "Z[aVlk;imVuI<faz(HQk,ow3PVr3Hq@N>Ml^P^pT", "pWh?jiC#J4R{:o{I)Hc9S5GUav+!Kn", 't|c$C,"aTV=2LPG@t|L:d,D"5a<Uzu8g[RV:q>.[QXp{Vz"S@5K9"=V~B1', "_Q)sUpm[Z]ufF=vU<P}%5kCF2<gq7Q", 'iVZb;i"n:vC@o,KLeVmZ:2B+Bg[{7WG[OS"F9Ba"Jw5I,fR>5e', ']w=^:,v1(1.Z"h}H_l~&]}U)pv>', "0lAVH)hvtd%|XjWgKADmxBo`4YC1+MW8TfcFl^uFyE?Z6zHzhSA96BV~1t^", "GtZ:1Bz3+;h)|~bAfR9^Qk0O64G96,cHFM%]/[<aV]@9gtUN%Em%o8e", "18y$ekmFiau?},.j<Xn", ':$"P.::@hd,9ak#`NRY*~we', '!VOo580":t;O~)0gqV:9hE$Fx5_E#nDK;AF9ZwwsIXoHXEKgUfBWuBGn', '5l6i19B%igkc)u@U8s6M8)=iPa*OjQX@`N5*}:Y^85,oeK3zH"i^m_e', "G;]9[hHawI7EC})KttL+gw%+bXYBjz<MTv/Ha,_Os", "e5g&XE+104T|1jV*1fLm#ppX#3Mk)O>Lx_hF", 'jSQkr>""{gJ!D8%[Km<%vKfFO;59KQuS6dAi$XEnoEQ8fn', 'x|:Wa"JSE|flnCiqN&i^~wji[V>]zp3H=,Mq:ze', 'pw:9k,(<vG#E)[<gpW/F$zDnQ5c9{L9Mi;H%cie(?4X)mf(q"w#o&lL%<4i', "i,fV@oPZza~d$z0M[m6MqW(iUf~!_M][Hl2^/=V`mV!{qn&%O?>]r>Sn", "SXu^xX4O{V0Be", "OVciD_GiG3T:(nv8$mLsIB@iPX7zHQY@3/Uoi6DIo{0B[>*%", "$AA$VX{UT51@un", "Y&uC7uQ1V]`NJ~{N2*+6C^BT", "aSMqBEjnFrFA_L&DD<`m5^o[F", "is8?hKpXov3_SWv83Qe:C?W%6tK]zqrLeR}MQy.A^5M|zWpKYs/][:IOia@", "Rmbm|~gp.NE{fn*Nk5;ryXz)j{8H2h:Mj</]iG6`H|O3;tTNJK!ZY2yT", "/8`sWw9sg<)!T", "><S$|^VLv^g@^ECLjv]s", "RMAb@[]F=X(LiQGD", "L&9Mw,Iz>gy^A21", "7/s*0=)iw^e=q2&Aq8LUeKSOmEr@T", "N<|5?Ey`2ELr*nn8_e", 'U"mkIBMUQEi$nL7jWwP]7:EIB1RNVkyqsoxPL', "C&QC[$R11I43F>@Ic|n6f]Jl=<y_dq}q", ";%8]+we", 'I"TqGv3""f89]Q*UE4`Ub$][DN%;48J`9@Y?utk"F', "i,9Wl?>ioV$G_1tH/WV:b:5?<w#Tt>*U", "/M}?EES3RwNq,p~K)s?Z{,U<ENH@o,k*cEa$$B3?z5c9jtwz#|0%c9rz81", "0XkV#BE3?4iFzu$L?GM+4XY~E4uI&Q", 'b,%i(:r30dsjsC6K7;$mF~Q1zaG)IMR>6A=&O9_lvf~~^Em@<"WVb[FLK;', "amRkm3wU|EQ@qnJ%Ym^HYWaIV|U90,S*)wQ", 'J/z6jw9I)IO3,u!*@@Lmn@4"Jt_)$~&IvsRk`5D)e<x&unS*,WOoO', "=s]H[SRF9dNlThX%RsKiYue", "h*[6R59O}V;+A4UUW5Ikg>UO@fFy7,UOa$k$Q]wn716%SpUU@S@&olmg`N", "}mmkl@3Ug5%k7f?MUlw*W^(S.30,A4/M", "c<s*]^b+iaoOy4DKjs_WL$@n/Z0,%jQzsVvi?X<aF1*|t3O@]S{&P];n", "F?cF|}iI{V{$D=]`M?s]E}*`3;{)}WQURXR%d>.`/4M]_~=@jT", 'FXNULu:"+|m', "i5&q!~zIa^o{$k&IdXr%&$tpP", "m5yiK[8[oEG)KnH`Pve:|zja|Xm9Q=_Ol/M+w6dT", "so<r`5nz;aS", '"8;?o_HOP5ycK4O%X,]$7bXA!X"NEq+>Fl8rpvmFlg', '`wmZ,}"Uh^f8SuLAKXOog', '$sM&&$,Ia^|I.E2S<o!M0_J"fEGHdM8IeP<?Uh}3DN`,T', "rMCr.W:I&Y6ZV}j;QE9F", "oM}C&p~F%4$$EzOHo*cH^^RgC5&t!>L%#e", '{,L5}9Y%O;UBeq|O:$%r.:zz6wt)"3>OQR3m.W:<wdEiqMFIG;lMZye', '"sOs(BSiUtxIrC&NU%bq%h}Ofvf;ztE[gWJ^26)iiVu&ZWt%B*aV', 'B*ko12i"C3ii[MDM+sl6i=Fv}awo:LO`<ob+xBK~A1Wf%PTR>WE%>oe', "GmjV)z9<*{H|OpH[2mL:AW]153963~)K]sxFRm9iB5Dw]>!N{VsFH", "8M}MGEgTwfhG<tqN,mR&I2|`0tHFh,Sg<lIkb[1T", "5,X&8SHOK3p[oE_O}tPC", "Yf@m~/8[TfUBGP!I.QI&?>@n", ',8Ab./&I$;%Bd2JH)@*o6XSSQg?GHQhUlA+%5=Gn`4?6RW)Sat"oa@e', "u$e5)i@Is", 'h@FbZ9lIhZe+`onOkQ]PJu?"TEu2OtNS~,5Fh,wO2X^vy4c`wlOb^3[B~V', "2@5Hy>F^9Z}cm4e8VoM+#2(<#;H@<f3`fs$mz5DI!VGL5LbzYsYrP?e", 'zf.mw"ZIJNT|Lzr;`,WoJ>$FVr)ZXzZ>*ARkf2i""Ycy34[zBQS5yz*FZ1=6T', "QXhP#WX1%t)_eK/KlNSV", "hQcHXK/vM4U9auEU7@ksik!+@E1]M8z*@lcVf2#`CrI+vt<", 'c<l?Nz3nRw(_upJcCM(Hd~g~X|"*6O&zI5_oime', ".wT:{?(@;g}6]QqHvQ0%@:k?0GGtXkr;.D1*D+V`}a1lPQv%&mM%^G2SP", "]l{&mo#`C", "2WBM?BkinX;]nhLHAEE?+>8pC", "h|WHQ^Gn", "},L+V,Un", '&RXO?Hb!Rw"vh4ss|JgZXX$kbTQ9r#}', "xQc<bKYNNU(", "WSq}~AtZ", "}T<j=j~c", "G.cjg]Cc", "I`B){@j$", "{m>*6~;n", "hQ%rJ/&n", "8Rm&pl@n", "Siso", "|~do*;+", 'S_"[', "LfNak5an", "2?]<@7S", "|=#vR2cI", "_=FzU0cI", "==yv", "|=poeB5I", "r=`2c2>I", ".spoh:;I", "69fo>", "|=poc2>I", ".s#v_+fI", "5t1,60|I", "+.166:5I", "7aZ6Po|I", "Oa02oV>I", "zsoDLp?I", "MtFz}+>I", "6g02@oGn", "Xii6x", "*=#v", "y=pD&", "t9M6*", "z[(a#;qI", "Z@W<x", "|=poeBZ&F", "}cCyjD(+F", "99k<=D&VF", "Mta6QmRI", "6<a,*0S", "Mta6x:_I", ".s16h29n", 'zsT6"+[I', "*g02@oS", "o>GoQ2fI", "`@T,", "j:3|", "*VY6", "M+3|", "j:>6P", "=1$6", "I,`]", "U=fo:VtI", "nY3vqXJI", "_c72VVcI", "T<4,", "dtW<", "O9a6dp?I", "ZD4,", "_946B2(+$f", "A$)oZ0GeF&", "[t+<jD9ju", "zPC`@3tI", "z<0u", "%epD$oJ)/4]", ")@(Z/!|fv?l", 'H"SDxqwNUI"', "#8~g/H[2GS>", '~"s(vJr<B?^', "HZ:S(Hf=&K8", '~"mS%VI<V?"', "N_$wn4VG", "cJF?y_^@", "xa4xXUR@", "b#W>/", "xa4xdK[8", "OsF+7", "0U+ZQ(2_Q[@", "p0gIU])h!CS", "<[{s4>ss1O(", "Dk&0h|,D(=`", "yP[j3iXXaQ[", "EO2YQ22^(`m", "KjX!J4f{U]B", "bu+PZVSE", "js+Q", "#tk>z3eE", "I_kJ(`QS", "58;7i{F", "cOrR~#CE", "1?+P3|eE", "u5kRR[ux", "0szQyUL", "hZ%sb)Vx", "#zl;8", "ma02oV>I", "_946ToKI"]), iQ(PQ = function(...QQ) {
      iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], QQ[yQ[4]] = yQ[17], QQ[yQ[12]] = []);
      try {
        iQ(QQ[yQ[4]] = Object, QQ[yQ[12]][yQ[24]]("".__proto__.constructor.name))
      } catch (FQ) {}
      QQ: for (QQ[-yQ[13]] = yQ[2]; QQ[-yQ[13]] < QQ[yQ[14]][yQ[11]]; QQ[-yQ[13]]++) try {
        for (QQ[yQ[4]] = QQ[yQ[14]][QQ[-yQ[13]]](), QQ[yQ[15]] = yQ[2]; QQ[yQ[15]] < QQ[yQ[12]][yQ[11]]; QQ[yQ[15]]++)
          if (typeof QQ[yQ[4]][QQ[yQ[12]][QQ[yQ[15]]]] === yQ[16]) continue QQ;
        return QQ[yQ[4]]
      } catch (FQ) {}
      return QQ[yQ[4]] || this
    }() || {}, gQ = PQ.TextDecoder, JQ = PQ.Uint8Array, rQ = PQ.Tj, IQ = PQ.String || String, jQ = PQ.Array || Array, BQ = function(...QQ) {
      return iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[25]] = new jQ(yQ[47]), QQ[yQ[14]] = IQ[yQ[21]] || IQ.fromCharCode, QQ[yQ[4]] = []),
        function(...WQ) {
          for (iQ(WQ[yQ[11]] = yQ[0], WQ[-yQ[19]] = yQ[17], WQ[yQ[14]] = yQ[17], WQ[yQ[18]] = WQ[yQ[2]][yQ[11]], QQ[yQ[4]][yQ[11]] = yQ[2]), WQ[yQ[9]] = yQ[2]; WQ[yQ[9]] < WQ[yQ[18]];) iQ(WQ[yQ[14]] = WQ[yQ[2]][WQ[yQ[9]]++], WQ[yQ[14]] <= yQ[43] ? WQ[-yQ[19]] = WQ[yQ[14]] : WQ[yQ[14]] <= yQ[57] ? WQ[-yQ[19]] = (WQ[yQ[14]] & yQ[109]) << yQ[8] | WQ[yQ[2]][WQ[yQ[9]]++] & yQ[20] : WQ[yQ[14]] <= 239 ? WQ[-yQ[19]] = (WQ[yQ[14]] & yQ[103]) << yQ[23] | (WQ[yQ[2]][WQ[yQ[9]]++] & yQ[20]) << yQ[8] | WQ[yQ[2]][WQ[yQ[9]]++] & yQ[20] : IQ[yQ[21]] ? WQ[-yQ[19]] = (WQ[yQ[14]] & yQ[22]) << yQ[110] | (WQ[yQ[2]][WQ[yQ[9]]++] & yQ[20]) << yQ[23] | (WQ[yQ[2]][WQ[yQ[9]]++] & yQ[20]) << yQ[8] | WQ[yQ[2]][WQ[yQ[9]]++] & yQ[20] : (WQ[-yQ[19]] = yQ[20], WQ[yQ[9]] += yQ[18]), QQ[yQ[4]][yQ[24]](QQ[yQ[25]][WQ[-yQ[19]]] || (QQ[yQ[25]][WQ[-yQ[19]]] = QQ[yQ[14]](WQ[-yQ[19]]))));
          return QQ[yQ[4]].join("")
        }
    }()), VQ(120) in GQ && (module.exports = async (QQ = (...QQ) => {
      function WQ(QQ) {
        var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ = '+0dB4&p!;Zx,}<iygwuQF8WjEtP(cz|?*aI^7hos{>rR3/lOf#e9vqY:1JM`.5"VUTC~2mSH@[)bDAX_n6$G]Lk=K%N';
        for (iQ(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = yQ[2], TQ = yQ[2], zQ = -yQ[0]), sQ = yQ[2]; sQ < XQ; sQ++) {
          var PQ = FQ.indexOf(WQ[sQ]);
          if (PQ !== -yQ[0])
            if (zQ < yQ[2]) zQ = PQ;
            else {
              iQ(zQ += PQ * yQ[26], qQ |= zQ << TQ, TQ += (zQ & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
              do {
                iQ(wQ.push(qQ & yQ[10]), qQ >>= yQ[3], TQ -= yQ[3])
              } while (TQ > yQ[22]);
              zQ = -yQ[0]
            }
        }
        return zQ > -yQ[0] && wQ.push((qQ | zQ << TQ) & yQ[10]), DQ(wQ)
      }

      function XQ(...QQ) {
        return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = WQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
      }
      throw QQ[yQ[11]] = yQ[2], new Error(XQ(yQ[52]))
    }) => {
      function WQ(...QQ) {
        for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[32]] = ':nZF^uxdJ0}qgp`YzH>UX?S+[I@E5aTV<D#e2QtPCbr1isf8]~_B3N"(7|O9jmv6;&y.AMk=,R/h!)WoKc{w*4%Ll$G', QQ[yQ[12]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[4]] = QQ[yQ[12]].length, QQ[yQ[15]] = [], QQ[yQ[33]] = yQ[2], QQ[yQ[34]] = yQ[2], QQ[yQ[6]] = -yQ[0]), QQ[yQ[31]] = yQ[2]; QQ[yQ[31]] < QQ[yQ[4]]; QQ[yQ[31]]++)
          if (QQ[yQ[5]] = QQ[yQ[32]].indexOf(QQ[yQ[12]][QQ[yQ[31]]]), QQ[yQ[5]] !== -yQ[0])
            if (QQ[yQ[6]] < yQ[2]) QQ[yQ[6]] = QQ[yQ[5]];
            else {
              iQ(QQ[yQ[6]] += QQ[yQ[5]] * yQ[26], QQ[yQ[33]] |= QQ[yQ[6]] << QQ[yQ[34]], QQ[yQ[34]] += (QQ[yQ[6]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
              do {
                iQ(QQ[yQ[15]].push(QQ[yQ[33]] & yQ[10]), QQ[yQ[33]] >>= yQ[3], QQ[yQ[34]] -= yQ[3])
              } while (QQ[yQ[34]] > yQ[22]);
              QQ[yQ[6]] = -yQ[0]
            } return QQ[yQ[6]] > -yQ[0] && QQ[yQ[15]].push((QQ[yQ[33]] | QQ[yQ[6]] << QQ[yQ[34]]) & yQ[10]), DQ(QQ[yQ[15]])
      }

      function XQ(...QQ) {
        return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = WQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
      }
      const wQ = new Set(process.argv.slice(yQ[12]));
      if (!wQ.has(XQ(122))) {
        if (wQ.size !== yQ[0]) return yQ[35];
        if (!wQ.has("-v")) return yQ[35]
      }
      return await (async (WQ, XQ) => {
        function wQ(QQ) {
          var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ = '{FcT<2/^V96lCUt78Xao~;.B`!&>K,L@i[H|NuP%kJ_vQnmh1pWR35wfYZ)+=e*0Sx:b4]#?qAsdIjGO$Dz}grEy"M(';
          for (iQ(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = yQ[2], TQ = yQ[2], zQ = -yQ[0]), sQ = yQ[2]; sQ < XQ; sQ++) {
            var PQ = FQ.indexOf(WQ[sQ]);
            if (PQ !== -yQ[0])
              if (zQ < yQ[2]) zQ = PQ;
              else {
                iQ(zQ += PQ * yQ[26], qQ |= zQ << TQ, TQ += (zQ & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                do {
                  iQ(wQ.push(qQ & yQ[10]), qQ >>= yQ[3], TQ -= yQ[3])
                } while (TQ > yQ[22]);
                zQ = -yQ[0]
              }
          }
          return zQ > -yQ[0] && wQ.push((qQ | zQ << TQ) & yQ[10]), DQ(wQ)
        }

        function qQ(QQ) {
          return typeof sQ[QQ] === yQ[16] ? sQ[QQ] = wQ(FQ[QQ]) : sQ[QQ]
        }
        return XQ === await QQ() ? qQ(yQ[44]) + "l)" : ""
      })(), yQ[41]
    });
    const UQ = qQ()[VQ(yQ[43])](),
      bQ = qQ()[VQ(yQ[43])](),
      vQ = qQ()[VQ(yQ[43])](),
      dQ = qQ()[VQ(yQ[43])](),
      HQ = qQ()[VQ(yQ[43])](),
      aQ = qQ()[VQ(yQ[43])](),
      lQ = qQ()[VQ(yQ[43])](),
      hQ = (...QQ) => {
        function WQ(...QQ) {
          return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = function(...QQ) {
            for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[0]] = '+GUrVFm)o~[CJ>Ixy<ctb"4!H`^S.0*3nO8M#(RQ]D5_lK}LPYjdW{%2A:v,gTB=|u@6aXe;7Ei&?Nwqh$Zsp9/z1fk', QQ[yQ[44]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[18]] = QQ[yQ[44]].length, QQ[yQ[9]] = [], QQ[yQ[46]] = yQ[2], QQ[yQ[34]] = yQ[2], QQ[yQ[22]] = -yQ[0]), QQ[yQ[37]] = yQ[2]; QQ[yQ[37]] < QQ[yQ[18]]; QQ[yQ[37]]++)
              if (QQ[-yQ[45]] = QQ[yQ[0]].indexOf(QQ[yQ[44]][QQ[yQ[37]]]), QQ[-yQ[45]] !== -yQ[0])
                if (QQ[yQ[22]] < yQ[2]) QQ[yQ[22]] = QQ[-yQ[45]];
                else {
                  iQ(QQ[yQ[22]] += QQ[-yQ[45]] * yQ[26], QQ[yQ[46]] |= QQ[yQ[22]] << QQ[yQ[34]], QQ[yQ[34]] += (QQ[yQ[22]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                  do {
                    iQ(QQ[yQ[9]].push(QQ[yQ[46]] & yQ[10]), QQ[yQ[46]] >>= yQ[3], QQ[yQ[34]] -= yQ[3])
                  } while (QQ[yQ[34]] > yQ[22]);
                  QQ[yQ[22]] = -yQ[0]
                } return QQ[yQ[22]] > -yQ[0] && QQ[yQ[9]].push((QQ[yQ[46]] | QQ[yQ[22]] << QQ[yQ[34]]) & yQ[10]), DQ(QQ[yQ[9]])
          }(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
        }
        QQ[yQ[11]] = yQ[18], VQ(yQ[47]) + "L" in GQ && function(...QQ) {
          iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[25]] = function(...WQ) {
            return iQ(WQ[yQ[11]] = yQ[0], WQ[yQ[25]] = []), (WQ[yQ[2]] === yQ[0] || WQ[yQ[2]] >= yQ[15]) && QQ[yQ[48]](WQ[yQ[25]], [], WQ[yQ[2]], yQ[2]), WQ[yQ[25]]
          }, QQ[yQ[48]] = function(...WQ) {
            for (WQ[yQ[11]] = yQ[15], WQ[yQ[15]] = WQ[yQ[18]]; WQ[yQ[15]] < WQ[yQ[12]]; WQ[yQ[15]]++) {
              if (WQ[yQ[0]].length !== WQ[yQ[15]]) return;
              for (WQ[-yQ[49]] = yQ[2]; WQ[-yQ[49]] < WQ[yQ[12]]; WQ[-yQ[49]]++) QQ[yQ[4]](WQ[yQ[0]], [WQ[yQ[15]], WQ[-yQ[49]]]) && (iQ(WQ[yQ[0]].push([WQ[yQ[15]], WQ[-yQ[49]]]), QQ[yQ[48]](WQ[yQ[2]], WQ[yQ[0]], WQ[yQ[12]], WQ[yQ[15]] + yQ[0])), WQ[yQ[0]].length === WQ[yQ[12]] && WQ[yQ[2]].push(QQ[yQ[50]](WQ[yQ[0]])), WQ[yQ[0]].pop())
            }
          }, QQ[yQ[50]] = function(QQ) {
            var WQ, XQ, wQ = [];
            for (WQ = QQ.length, XQ = yQ[2]; XQ < WQ; XQ++) {
              var qQ;
              for (wQ[XQ] = "", qQ = yQ[2]; qQ < WQ; qQ++) wQ[XQ] += QQ[XQ][yQ[0]] === qQ ? "Q" : "."
            }
            return wQ
          }, QQ[yQ[4]] = function(QQ, WQ) {
            var XQ, wQ = QQ.length;
            for (XQ = yQ[2]; XQ < wQ; XQ++) {
              if (QQ[XQ][yQ[2]] === WQ[yQ[2]] || QQ[XQ][yQ[0]] === WQ[yQ[0]]) return yQ[35];
              if (Math.abs((QQ[XQ][yQ[2]] - WQ[yQ[2]]) / (QQ[XQ][yQ[0]] - WQ[yQ[0]])) === yQ[0]) return yQ[35]
            }
            return yQ[41]
          }, console.log(QQ[yQ[25]]))
        }();
        const XQ = aQ;
        return qQ()[VQ(129) + WQ(130)](XQ, QQ[yQ[12]]), qQ()[WQ(yQ[48])](QQ[yQ[2]], XQ, qQ()[WQ(132)](XQ, QQ[yQ[0]]))
      };

    function iQ() {
      iQ = function() {}
    }
    zQ = (QQ, WQ, XQ, wQ, zQ, PQ, gQ, JQ) => {
      function rQ(...QQ) {
        return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = function(...QQ) {
          for (iQ(QQ[yQ[11]] = yQ[0], QQ[-yQ[53]] = 'SnIiYyFu,<v{cjr=RN|&f#8UKxtZ>e*`6}?M_O5Hs"$9L.qdJ^;a)3[zbg!T@wPEW~/1pm70]QDG2o:k+VX4CBl%Ah(', QQ[yQ[51]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[4]] = QQ[yQ[51]].length, QQ[yQ[9]] = [], QQ[-yQ[52]] = yQ[2], QQ[yQ[5]] = yQ[2], QQ[yQ[22]] = -yQ[0]), QQ[yQ[3]] = yQ[2]; QQ[yQ[3]] < QQ[yQ[4]]; QQ[yQ[3]]++)
            if (QQ[yQ[54]] = QQ[-yQ[53]].indexOf(QQ[yQ[51]][QQ[yQ[3]]]), QQ[yQ[54]] !== -yQ[0])
              if (QQ[yQ[22]] < yQ[2]) QQ[yQ[22]] = QQ[yQ[54]];
              else {
                iQ(QQ[yQ[22]] += QQ[yQ[54]] * yQ[26], QQ[-yQ[52]] |= QQ[yQ[22]] << QQ[yQ[5]], QQ[yQ[5]] += (QQ[yQ[22]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                do {
                  iQ(QQ[yQ[9]].push(QQ[-yQ[52]] & yQ[10]), QQ[-yQ[52]] >>= yQ[3], QQ[yQ[5]] -= yQ[3])
                } while (QQ[yQ[5]] > yQ[22]);
                QQ[yQ[22]] = -yQ[0]
              } return QQ[yQ[22]] > -yQ[0] && QQ[yQ[9]].push((QQ[-yQ[52]] | QQ[yQ[22]] << QQ[yQ[5]]) & yQ[10]), DQ(QQ[yQ[9]])
        }(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
      }
      rQ(yQ[91]) + "M" in GQ && function(...QQ) {
        iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[25]] = function(...QQ) {
          if (iQ(QQ[yQ[11]] = yQ[0], QQ[-yQ[55]] = QQ[yQ[2]].length), QQ[-yQ[55]] < yQ[12]) return yQ[2];
          if (iQ(QQ[yQ[14]] = Math.max(...QQ[yQ[2]]), QQ[yQ[56]] = Math.min(...QQ[yQ[2]])), QQ[yQ[14]] === QQ[yQ[56]]) return yQ[2];
          for (iQ(QQ[yQ[57]] = Array(QQ[-yQ[55]] - yQ[0]).fill(Number.MAX_SAFE_INTEGER), QQ[yQ[46]] = Array(QQ[-yQ[55]] - yQ[0]).fill(Number.MIN_SAFE_INTEGER), QQ[yQ[34]] = Math.ceil((QQ[yQ[14]] - QQ[yQ[56]]) / (QQ[-yQ[55]] - yQ[0])), QQ[yQ[6]] = yQ[2]), QQ[yQ[3]] = yQ[2]; QQ[yQ[3]] < QQ[-yQ[55]]; QQ[yQ[3]]++) QQ[yQ[2]][QQ[yQ[3]]] !== QQ[yQ[56]] && QQ[yQ[2]][QQ[yQ[3]]] !== QQ[yQ[14]] && iQ(QQ[yQ[6]] = Math.floor((QQ[yQ[2]][QQ[yQ[3]]] - QQ[yQ[56]]) / QQ[yQ[34]]), QQ[yQ[57]][QQ[yQ[6]]] = Math.min(QQ[yQ[57]][QQ[yQ[6]]], QQ[yQ[2]][QQ[yQ[3]]]), QQ[yQ[46]][QQ[yQ[6]]] = Math.max(QQ[yQ[46]][QQ[yQ[6]]], QQ[yQ[2]][QQ[yQ[3]]]));
          for (iQ(QQ[-yQ[59]] = Number.MIN_SAFE_INTEGER, QQ[-yQ[22]] = QQ[yQ[56]]), QQ[yQ[58]] = yQ[2]; QQ[yQ[58]] < QQ[-yQ[55]] - yQ[0]; QQ[yQ[58]]++) QQ[yQ[57]][QQ[yQ[58]]] === Number.MAX_SAFE_INTEGER && QQ[yQ[46]][QQ[yQ[58]]] === Number.MIN_SAFE_INTEGER || iQ(QQ[-yQ[59]] = Math.max(QQ[-yQ[59]], QQ[yQ[57]][QQ[yQ[58]]] - QQ[-yQ[22]]), QQ[-yQ[22]] = QQ[yQ[46]][QQ[yQ[58]]]);
          return QQ[-yQ[59]] = Math.max(QQ[-yQ[59]], QQ[yQ[14]] - QQ[-yQ[22]]), QQ[-yQ[59]]
        }, console.log(QQ[yQ[25]]))
      }();
      const IQ = QQ[rQ(yQ[60])][rQ(135) + rQ(136) + rQ(137)](WQ);
      let jQ = QQ[rQ(yQ[60])][rQ(138) + rQ(139) + rQ(140) + rQ(141)](IQ);
      const BQ = jQ === yQ[63] ? QQ[rQ(yQ[60])][rQ(yQ[64]) + rQ(yQ[65]) + rQ(yQ[66]) + rQ(yQ[67])](WQ, rQ(yQ[38]) + rQ(yQ[61]) + rQ(yQ[62]) + yQ[46]) : jQ[rQ(yQ[38]) + rQ(yQ[61]) + rQ(yQ[62]) + yQ[46]],
        VQ = jQ === yQ[63] ? QQ[rQ(yQ[60])][rQ(yQ[64]) + rQ(yQ[65]) + rQ(yQ[66]) + rQ(yQ[67])](WQ, rQ(yQ[68]) + rQ(yQ[69]) + rQ(yQ[70])) : jQ[rQ(yQ[68]) + rQ(yQ[69]) + rQ(yQ[70])];
      iQ(qQ()[rQ(152)](UQ, yQ[2], yQ[2], PQ), qQ().pr(UQ, UQ, qQ()[rQ(153)], wQ.heading), qQ()[rQ(yQ[77])](lQ, zQ.Fy), lQ[yQ[0]] = yQ[2]);
      const aQ = XQ[rQ(yQ[42]) + rQ(yQ[113])]();
      jQ = QQ[rQ(yQ[60])][rQ(157) + rQ(158) + rQ(159) + yQ[86]](IQ);
      let cQ = jQ === yQ[63] ? QQ[rQ(yQ[60])][rQ(yQ[64]) + rQ(yQ[65]) + rQ(yQ[66]) + rQ(yQ[67])](WQ, rQ(yQ[71]) + rQ(yQ[72])) : jQ[rQ(yQ[71]) + rQ(yQ[72])];
      if (!aQ && qQ()[yQ[85]](lQ) && (jQ === yQ[63] ? QQ[rQ(yQ[60])][rQ(yQ[64]) + rQ(yQ[65]) + rQ(yQ[66]) + rQ(yQ[67])](WQ, rQ(yQ[73]) + rQ(yQ[74]) + rQ(yQ[75]) + rQ(yQ[76])) : jQ[rQ(yQ[73]) + rQ(yQ[74]) + rQ(yQ[75]) + rQ(yQ[76])])) {
        function LQ(...QQ) {
          for (iQ(QQ[yQ[11]] = yQ[0], QQ[-yQ[77]] = '5=@z1>7[]|6",y2:bm.stYhj#Q+*PIDJoexC}w{BFc/Vkv9M;Au(<$%)^ENfHqrT3G!dSn_piKL`~WUOZ04?8XRl&ga', QQ[-yQ[78]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[79]] = QQ[-yQ[78]].length, QQ[-yQ[81]] = [], QQ[yQ[80]] = yQ[2], QQ[yQ[8]] = yQ[2], QQ[yQ[22]] = -yQ[0]), QQ[yQ[37]] = yQ[2]; QQ[yQ[37]] < QQ[yQ[79]]; QQ[yQ[37]]++)
            if (QQ[yQ[5]] = QQ[-yQ[77]].indexOf(QQ[-yQ[78]][QQ[yQ[37]]]), QQ[yQ[5]] !== -yQ[0])
              if (QQ[yQ[22]] < yQ[2]) QQ[yQ[22]] = QQ[yQ[5]];
              else {
                iQ(QQ[yQ[22]] += QQ[yQ[5]] * yQ[26], QQ[yQ[80]] |= QQ[yQ[22]] << QQ[yQ[8]], QQ[yQ[8]] += (QQ[yQ[22]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                do {
                  iQ(QQ[-yQ[81]].push(QQ[yQ[80]] & yQ[10]), QQ[yQ[80]] >>= yQ[3], QQ[yQ[8]] -= yQ[3])
                } while (QQ[yQ[8]] > yQ[22]);
                QQ[yQ[22]] = -yQ[0]
              } return QQ[yQ[22]] > -yQ[0] && QQ[-yQ[81]].push((QQ[yQ[80]] | QQ[yQ[22]] << QQ[yQ[8]]) & yQ[10]), DQ(QQ[-yQ[81]])
        }

        function kQ(...QQ) {
          return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = LQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
        }

        function fQ(...QQ) {
          iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[25]] = function(...WQ) {
            return iQ(WQ[yQ[11]] = yQ[12], WQ[yQ[82]] = [], WQ[yQ[14]] = WQ[yQ[2]].length, WQ[yQ[2]].sort(((QQ, WQ) => QQ - WQ)), QQ[yQ[14]](WQ[yQ[82]], [], yQ[2], WQ[yQ[14]], WQ[yQ[2]], WQ[yQ[0]])), WQ[yQ[82]]
          }, QQ[yQ[14]] = function(...WQ) {
            if (iQ(WQ[yQ[11]] = yQ[8], WQ[yQ[84]] = yQ[63]), !(WQ[yQ[7]] < yQ[2])) {
              if (WQ[yQ[7]] === yQ[2]) return WQ[yQ[2]].push(WQ[yQ[0]]);
              for (WQ[yQ[83]] = WQ[yQ[12]]; WQ[yQ[83]] < WQ[yQ[18]] && !(WQ[yQ[15]][WQ[yQ[83]]] > WQ[yQ[7]]); WQ[yQ[83]]++) WQ[yQ[83]] > WQ[yQ[12]] && WQ[yQ[15]][WQ[yQ[83]]] === WQ[yQ[15]][WQ[yQ[83]] - yQ[0]] || iQ(WQ[yQ[84]] = Array.from(WQ[yQ[0]]), WQ[yQ[84]].push(WQ[yQ[15]][WQ[yQ[83]]]), QQ[yQ[14]](WQ[yQ[2]], WQ[yQ[84]], WQ[yQ[83]] + yQ[0], WQ[yQ[18]], WQ[yQ[15]], WQ[yQ[7]] - WQ[yQ[15]][WQ[yQ[83]]]))
            }
          }, console.log(QQ[yQ[25]]))
        }
        rQ(yQ[106]) + "1" in GQ && fQ(), iQ(hQ(bQ, UQ, lQ), hQ(vQ, lQ, UQ), qQ()[rQ(yQ[88])](dQ, lQ, vQ));
        const SQ = qQ()[kQ(168)](lQ),
          tQ = qQ()[kQ(yQ[13])](UQ, lQ) / PQ / SQ,
          oQ = Math[kQ(yQ[87])](tQ, yQ[2]) + yQ[0];
        PQ * PQ < qQ()[yQ[85]](vQ) && qQ()[kQ(171)](UQ, UQ, vQ, oQ), iQ(cQ = (yQ[2], TQ[yQ[86]])(cQ, 1, Math[kQ(yQ[87])](yQ[0], Math[kQ(172)](yQ[2], -tQ, yQ[0] - SQ / PQ))), qQ()[kQ(yQ[92])](UQ, UQ, dQ))
      }
      const AQ = HQ;
      iQ(qQ()[rQ(yQ[88])](AQ, UQ, lQ), AQ[yQ[0]] = yQ[2]);
      let RQ = qQ()[rQ(yQ[32])](AQ);
      aQ || (RQ *= cQ);
      const EQ = gQ[rQ(yQ[111]) + rQ(176) + rQ(177)],
        CQ = EQ ? Math[rQ(178)](EQ, RQ) : RQ;
      qQ()[rQ(179) + rQ(180)](AQ, AQ);
      const uQ = JQ !== yQ[63] && JQ !== void yQ[2] ? JQ : gQ[rQ(181) + rQ(182) + rQ(183)];
      if (CQ > yQ[2]) {
        function eQ(...QQ) {
          for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[25]] = 'LxEtFNWhQsRAarIOfnBGeoldJ8?_(cy;P{~vbmC}S92uiwZ7HVpz@1!>`Y3:D4=j0KX[5kMU^Tqg6|#]%/<+*)$,&".', QQ[yQ[12]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[4]] = QQ[yQ[12]].length, QQ[yQ[9]] = [], QQ[-yQ[89]] = yQ[2], QQ[yQ[90]] = yQ[2], QQ[-yQ[1]] = -yQ[0]), QQ[yQ[3]] = yQ[2]; QQ[yQ[3]] < QQ[yQ[4]]; QQ[yQ[3]]++)
            if (QQ[yQ[5]] = QQ[yQ[25]].indexOf(QQ[yQ[12]][QQ[yQ[3]]]), QQ[yQ[5]] !== -yQ[0])
              if (QQ[-yQ[1]] < yQ[2]) QQ[-yQ[1]] = QQ[yQ[5]];
              else {
                iQ(QQ[-yQ[1]] += QQ[yQ[5]] * yQ[26], QQ[-yQ[89]] |= QQ[-yQ[1]] << QQ[yQ[90]], QQ[yQ[90]] += (QQ[-yQ[1]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                do {
                  iQ(QQ[yQ[9]].push(QQ[-yQ[89]] & yQ[10]), QQ[-yQ[89]] >>= yQ[3], QQ[yQ[90]] -= yQ[3])
                } while (QQ[yQ[90]] > yQ[22]);
                QQ[-yQ[1]] = -yQ[0]
              } return QQ[-yQ[1]] > -yQ[0] && QQ[yQ[9]].push((QQ[-yQ[89]] | QQ[-yQ[1]] << QQ[yQ[90]]) & yQ[10]), DQ(QQ[yQ[9]])
        }

        function nQ(...QQ) {
          return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = eQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
        }

        function xQ(...QQ) {
          iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[14]] = function() {
            var QQ, WQ, XQ = yQ[2];

            function wQ(...WQ) {
              return WQ[yQ[11]] = yQ[12],
                function(...WQ) {
                  function XQ(...QQ) {
                    for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[0]] = 'Khq7dZUTXknJaACH<$=gfBN9m,R!WI&0E3P~@x4l_St?%}{D(eMws`j]5[^bO>8;LQV)Fp6o|G#:rYicv1/+2y."uz*', QQ[yQ[12]] = "" + (QQ[yQ[2]] || ""), QQ[-yQ[7]] = QQ[yQ[12]].length, QQ[-yQ[104]] = [], QQ[yQ[7]] = yQ[2], QQ[yQ[8]] = yQ[2], QQ[yQ[22]] = -yQ[0]), QQ[yQ[37]] = yQ[2]; QQ[yQ[37]] < QQ[-yQ[7]]; QQ[yQ[37]]++)
                      if (QQ[yQ[5]] = QQ[yQ[0]].indexOf(QQ[yQ[12]][QQ[yQ[37]]]), QQ[yQ[5]] !== -yQ[0])
                        if (QQ[yQ[22]] < yQ[2]) QQ[yQ[22]] = QQ[yQ[5]];
                        else {
                          iQ(QQ[yQ[22]] += QQ[yQ[5]] * yQ[26], QQ[yQ[7]] |= QQ[yQ[22]] << QQ[yQ[8]], QQ[yQ[8]] += (QQ[yQ[22]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                          do {
                            iQ(QQ[-yQ[104]].push(QQ[yQ[7]] & yQ[10]), QQ[yQ[7]] >>= yQ[3], QQ[yQ[8]] -= yQ[3])
                          } while (QQ[yQ[8]] > yQ[22]);
                          QQ[yQ[22]] = -yQ[0]
                        } return QQ[yQ[22]] > -yQ[0] && QQ[-yQ[104]].push((QQ[yQ[7]] | QQ[yQ[22]] << QQ[yQ[8]]) & yQ[10]), DQ(QQ[-yQ[104]])
                  }

                  function wQ(...QQ) {
                    return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = XQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
                  }
                  WQ[yQ[11]] = yQ[0];
                  for (iQ(WQ[yQ[25]] = wQ(199) + wQ(200) + wQ(yQ[102]) + wQ(202) + wQ(203) + wQ(204) + wQ(205) + "/", WQ[yQ[12]] = "", WQ[yQ[4]] = WQ[yQ[2]].length), WQ[yQ[15]] = yQ[2]; WQ[yQ[15]] < WQ[yQ[4]]; WQ[yQ[15]] += yQ[18])
                    for (WQ[yQ[46]] = WQ[yQ[2]].charCodeAt(WQ[yQ[15]]) << yQ[93] | (WQ[yQ[15]] + yQ[0] < WQ[yQ[4]] ? WQ[yQ[2]].charCodeAt(WQ[yQ[15]] + yQ[0]) << yQ[3] : yQ[2]) | (WQ[yQ[15]] + yQ[12] < WQ[yQ[4]] ? WQ[yQ[2]].charCodeAt(WQ[yQ[15]] + yQ[12]) : yQ[2]), WQ[-yQ[38]] = yQ[2]; WQ[-yQ[38]] < yQ[15]; WQ[-yQ[38]]++) WQ[yQ[15]] * yQ[3] + WQ[-yQ[38]] * yQ[8] > WQ[yQ[2]].length * yQ[3] ? WQ[yQ[12]] += QQ : WQ[yQ[12]] += WQ[yQ[25]].charAt(WQ[yQ[46]] >>> yQ[8] * (yQ[18] - WQ[-yQ[38]]) & yQ[20]);
                  return WQ[yQ[12]]
                }(TQ(PQ(WQ[yQ[2]]), PQ(WQ[yQ[0]])))
            }

            function qQ(...QQ) {
              return QQ[yQ[11]] = yQ[18],
                function(...QQ) {
                  var WQ, XQ, wQ, qQ;
                  for (iQ(QQ[yQ[11]] = yQ[12], QQ[yQ[12]] = QQ[yQ[0]].length, QQ[yQ[14]] = Array()), QQ[-yQ[105]] = Array(Math.ceil(QQ[yQ[2]].length / yQ[12])), WQ = yQ[2]; WQ < QQ[-yQ[105]].length; WQ++) QQ[-yQ[105]][WQ] = QQ[yQ[2]].charCodeAt(WQ * yQ[12]) << yQ[3] | QQ[yQ[2]].charCodeAt(WQ * yQ[12] + yQ[0]);
                  for (; QQ[-yQ[105]].length > yQ[2];) {
                    for (iQ(qQ = Array(), wQ = yQ[2]), WQ = yQ[2]; WQ < QQ[-yQ[105]].length; WQ++) iQ(wQ = (wQ << yQ[93]) + QQ[-yQ[105]][WQ], XQ = Math.floor(wQ / QQ[yQ[12]]), wQ -= XQ * QQ[yQ[12]]), (qQ.length > yQ[2] || XQ > yQ[2]) && (qQ[qQ.length] = XQ);
                    iQ(QQ[yQ[14]][QQ[yQ[14]].length] = wQ, QQ[-yQ[105]] = qQ)
                  }
                  for (QQ[yQ[9]] = "", WQ = QQ[yQ[14]].length - yQ[0]; WQ >= yQ[2]; WQ--) QQ[yQ[9]] += QQ[yQ[0]].charAt(QQ[yQ[14]][WQ]);
                  for (QQ[-yQ[48]] = Math.ceil(QQ[yQ[2]].length * yQ[3] / (Math.log(QQ[yQ[0]].length) / Math.log(yQ[12]))), WQ = QQ[yQ[9]].length; WQ < QQ[-yQ[48]]; WQ++) QQ[yQ[9]] = QQ[yQ[0]][yQ[2]] + QQ[yQ[9]];
                  return QQ[yQ[9]]
                }(TQ(PQ(QQ[yQ[2]]), PQ(QQ[yQ[0]])), QQ[yQ[12]])
            }

            function TQ(...QQ) {
              QQ[yQ[11]] = yQ[12], QQ[yQ[25]] = gQ(QQ[yQ[2]]), QQ[yQ[25]].length > yQ[93] && (QQ[yQ[25]] = vQ(QQ[yQ[25]], QQ[yQ[2]].length * yQ[3]));
              var WQ = Array(yQ[93]),
                XQ = Array(yQ[93]);
              for (QQ[yQ[94]] = yQ[2]; QQ[yQ[94]] < yQ[93]; QQ[yQ[94]]++) iQ(WQ[QQ[yQ[94]]] = 909522486 ^ QQ[yQ[25]][QQ[yQ[94]]], XQ[QQ[yQ[94]]] = 1549556828 ^ QQ[yQ[25]][QQ[yQ[94]]]);
              return QQ[yQ[4]] = vQ(WQ.concat(gQ(QQ[yQ[0]])), yQ[96] + QQ[yQ[0]].length * yQ[3]), JQ(vQ(XQ.concat(QQ[yQ[4]]), pQ(function(QQ) {
                return typeof sQ[QQ] === yQ[16] ? sQ[QQ] = function(QQ) {
                  var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
                  for (iQ(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = yQ[2], TQ = yQ[2], zQ = -yQ[0]), sQ = yQ[2]; sQ < XQ; sQ++) {
                    var FQ = '^LGnSQiIlUefKTREb6cugoBh+J}vw71P|Y=352akx:@"8p,#yF(X/4*zVC?`<NmW{_0dM]&$q%[t.j9Z;>)!OADsHr~'.indexOf(WQ[sQ]);
                    if (FQ !== -yQ[0])
                      if (zQ < yQ[2]) zQ = FQ;
                      else {
                        iQ(zQ += FQ * yQ[26], qQ |= zQ << TQ, TQ += (zQ & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                        do {
                          iQ(wQ.push(qQ & yQ[10]), qQ >>= yQ[3], TQ -= yQ[3])
                        } while (TQ > yQ[22]);
                        zQ = -yQ[0]
                      }
                  }
                  return zQ > -yQ[0] && wQ.push((qQ | zQ << TQ) & yQ[10]), DQ(wQ)
                }(FQ[QQ]) : sQ[QQ]
              }(193) + yQ[95], yQ[96], 256)))
            }

            function zQ(...QQ) {
              function WQ(...QQ) {
                return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = function(...QQ) {
                  for (iQ(QQ[yQ[11]] = yQ[0], QQ[-yQ[1]] = ';@8leD%39WH#s][^)/q,(B"uM7Zx}*rOc<d`_&NA4RvLmUQEJoV>!+CTwjtpSkfzya{PK=0?iYn621.X~$5|FhIGg:b', QQ[yQ[14]] = "" + (QQ[yQ[2]] || ""), QQ[yQ[18]] = QQ[yQ[14]].length, QQ[-yQ[100]] = [], QQ[yQ[99]] = yQ[2], QQ[-yQ[69]] = yQ[2], QQ[yQ[6]] = -yQ[0]), QQ[yQ[97]] = yQ[2]; QQ[yQ[97]] < QQ[yQ[18]]; QQ[yQ[97]]++)
                    if (QQ[yQ[98]] = QQ[-yQ[1]].indexOf(QQ[yQ[14]][QQ[yQ[97]]]), QQ[yQ[98]] !== -yQ[0])
                      if (QQ[yQ[6]] < yQ[2]) QQ[yQ[6]] = QQ[yQ[98]];
                      else {
                        iQ(QQ[yQ[6]] += QQ[yQ[98]] * yQ[26], QQ[yQ[99]] |= QQ[yQ[6]] << QQ[-yQ[69]], QQ[-yQ[69]] += (QQ[yQ[6]] & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                        do {
                          iQ(QQ[-yQ[100]].push(QQ[yQ[99]] & yQ[10]), QQ[yQ[99]] >>= yQ[3], QQ[-yQ[69]] -= yQ[3])
                        } while (QQ[-yQ[69]] > yQ[22]);
                        QQ[yQ[6]] = -yQ[0]
                      } return QQ[yQ[6]] > -yQ[0] && QQ[-yQ[100]].push((QQ[yQ[99]] | QQ[yQ[6]] << QQ[-yQ[69]]) & yQ[10]), DQ(QQ[-yQ[100]])
                }(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
              }
              for (QQ[yQ[11]] = yQ[0], iQ(QQ[yQ[25]] = XQ ? WQ(yQ[101]) + WQ(yQ[49]) + WQ(yQ[50]) : WQ(yQ[101]) + WQ(197) + WQ(198), QQ[yQ[14]] = "", QQ[-yQ[102]] = yQ[17]), QQ[yQ[15]] = yQ[2]; QQ[yQ[15]] < QQ[yQ[2]].length; QQ[yQ[15]]++) iQ(QQ[-yQ[102]] = QQ[yQ[2]].charCodeAt(QQ[yQ[15]]), QQ[yQ[14]] += QQ[yQ[25]].charAt(QQ[-yQ[102]] >>> yQ[15] & yQ[103]) + QQ[yQ[25]].charAt(QQ[-yQ[102]] & yQ[103]));
              return QQ[yQ[14]]
            }

            function PQ(...QQ) {
              var WQ, XQ;
              for (iQ(QQ[yQ[11]] = yQ[0], QQ[yQ[106]] = "", QQ[yQ[12]] = -yQ[0]); ++QQ[yQ[12]] < QQ[yQ[2]].length;) iQ(WQ = QQ[yQ[2]].charCodeAt(QQ[yQ[12]]), XQ = QQ[yQ[12]] + yQ[0] < QQ[yQ[2]].length ? QQ[yQ[2]].charCodeAt(QQ[yQ[12]] + yQ[0]) : yQ[2]), 55296 <= WQ && WQ <= 56319 && 56320 <= XQ && XQ <= 57343 && iQ(WQ = 65536 + ((WQ & yQ[107]) << yQ[116]) + (XQ & yQ[107]), QQ[yQ[12]]++), WQ <= yQ[43] ? QQ[yQ[106]] += String.fromCharCode(WQ) : WQ <= 2047 ? QQ[yQ[106]] += String.fromCharCode(yQ[108] | WQ >>> yQ[8] & yQ[109], yQ[47] | WQ & yQ[20]) : WQ <= yQ[119] ? QQ[yQ[106]] += String.fromCharCode(yQ[100] | WQ >>> yQ[23] & yQ[103], yQ[47] | WQ >>> yQ[8] & yQ[20], yQ[47] | WQ & yQ[20]) : WQ <= 2097151 && (QQ[yQ[106]] += String.fromCharCode(240 | WQ >>> yQ[110] & yQ[22], yQ[47] | WQ >>> yQ[23] & yQ[20], yQ[47] | WQ >>> yQ[8] & yQ[20], yQ[47] | WQ & yQ[20]));
              return QQ[yQ[106]]
            }

            function gQ(QQ) {
              var WQ, XQ = Array(QQ.length >> yQ[12]);
              for (WQ = yQ[2]; WQ < XQ.length; WQ++) XQ[WQ] = yQ[2];
              for (WQ = yQ[2]; WQ < QQ.length * yQ[3]; WQ += yQ[3]) XQ[WQ >> yQ[7]] |= (QQ.charCodeAt(WQ / yQ[3]) & yQ[10]) << yQ[115] - WQ % yQ[114];
              return XQ
            }

            function JQ(...QQ) {
              for (iQ(QQ[yQ[11]] = yQ[0], QQ[-yQ[44]] = ""), QQ[yQ[113]] = yQ[2]; QQ[yQ[113]] < QQ[yQ[2]].length * yQ[114]; QQ[yQ[113]] += yQ[3]) QQ[-yQ[44]] += String.fromCharCode(QQ[yQ[2]][QQ[yQ[113]] >> yQ[7]] >>> yQ[115] - QQ[yQ[113]] % yQ[114] & yQ[10]);
              return QQ[-yQ[44]]
            }

            function rQ(...QQ) {
              return QQ[yQ[11]] = yQ[12], QQ[yQ[2]] >>> QQ[yQ[0]] | QQ[yQ[2]] << yQ[114] - QQ[yQ[0]]
            }

            function IQ(...QQ) {
              return QQ[yQ[11]] = yQ[12], QQ[yQ[2]] >>> QQ[yQ[0]]
            }

            function jQ(...QQ) {
              return QQ[yQ[11]] = yQ[18], QQ[yQ[2]] & QQ[yQ[0]] ^ ~QQ[yQ[2]] & QQ[yQ[12]]
            }

            function BQ(QQ, WQ, XQ) {
              return QQ & WQ ^ QQ & XQ ^ WQ & XQ
            }

            function VQ(...QQ) {
              return QQ[yQ[11]] = yQ[0], rQ(QQ[yQ[2]], yQ[12]) ^ rQ(QQ[yQ[2]], yQ[29]) ^ rQ(QQ[yQ[2]], 22)
            }

            function GQ(...QQ) {
              return QQ[yQ[11]] = yQ[0], rQ(QQ[yQ[2]], yQ[8]) ^ rQ(QQ[yQ[2]], 11) ^ rQ(QQ[yQ[2]], yQ[121])
            }

            function UQ(...QQ) {
              return QQ[yQ[11]] = yQ[0], rQ(QQ[yQ[2]], yQ[22]) ^ rQ(QQ[yQ[2]], yQ[110]) ^ IQ(QQ[yQ[2]], yQ[18])
            }

            function bQ(...QQ) {
              return QQ[yQ[11]] = yQ[0], rQ(QQ[yQ[2]], 17) ^ rQ(QQ[yQ[2]], yQ[117]) ^ IQ(QQ[yQ[2]], yQ[116])
            }

            function vQ(...QQ) {
              var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ;
              for (iQ(QQ[yQ[11]] = yQ[12], QQ[yQ[12]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), QQ[yQ[14]] = new Array(yQ[118])), iQ(QQ[yQ[2]][QQ[yQ[0]] >> yQ[7]] |= yQ[47] << yQ[115] - QQ[yQ[0]] % yQ[114], QQ[yQ[2]][(QQ[yQ[0]] + yQ[118] >> yQ[5] << yQ[15]) + yQ[103]] = QQ[yQ[0]]), gQ = yQ[2]; gQ < QQ[yQ[2]].length; gQ += yQ[93]) {
                for (iQ(XQ = QQ[yQ[12]][yQ[2]], wQ = QQ[yQ[12]][yQ[0]], qQ = QQ[yQ[12]][yQ[12]], TQ = QQ[yQ[12]][yQ[18]], zQ = QQ[yQ[12]][yQ[15]], sQ = QQ[yQ[12]][yQ[7]], FQ = QQ[yQ[12]][yQ[8]], PQ = QQ[yQ[12]][yQ[22]]), JQ = yQ[2]; JQ < yQ[118]; JQ++) iQ(JQ < yQ[93] ? QQ[yQ[14]][JQ] = QQ[yQ[2]][JQ + gQ] : QQ[yQ[14]][JQ] = dQ(dQ(dQ(bQ(QQ[yQ[14]][JQ - yQ[12]]), QQ[yQ[14]][JQ - yQ[22]]), UQ(QQ[yQ[14]][JQ - yQ[103]])), QQ[yQ[14]][JQ - yQ[93]]), rQ = dQ(dQ(dQ(dQ(PQ, GQ(zQ)), jQ(zQ, sQ, FQ)), WQ[JQ]), QQ[yQ[14]][JQ]), IQ = dQ(VQ(XQ), BQ(XQ, wQ, qQ)), PQ = FQ, FQ = sQ, sQ = zQ, zQ = dQ(TQ, rQ), TQ = qQ, qQ = wQ, wQ = XQ, XQ = dQ(rQ, IQ));
                iQ(QQ[yQ[12]][yQ[2]] = dQ(XQ, QQ[yQ[12]][yQ[2]]), QQ[yQ[12]][yQ[0]] = dQ(wQ, QQ[yQ[12]][yQ[0]]), QQ[yQ[12]][yQ[12]] = dQ(qQ, QQ[yQ[12]][yQ[12]]), QQ[yQ[12]][yQ[18]] = dQ(TQ, QQ[yQ[12]][yQ[18]]), QQ[yQ[12]][yQ[15]] = dQ(zQ, QQ[yQ[12]][yQ[15]]), QQ[yQ[12]][yQ[7]] = dQ(sQ, QQ[yQ[12]][yQ[7]]), QQ[yQ[12]][yQ[8]] = dQ(FQ, QQ[yQ[12]][yQ[8]]), QQ[yQ[12]][yQ[22]] = dQ(PQ, QQ[yQ[12]][yQ[22]]))
              }
              return QQ[yQ[12]]
            }

            function dQ(...QQ) {
              return iQ(QQ[yQ[11]] = yQ[12], QQ[yQ[120]] = (QQ[yQ[2]] & yQ[119]) + (QQ[yQ[0]] & yQ[119]), QQ[yQ[14]] = (QQ[yQ[2]] >> yQ[93]) + (QQ[yQ[0]] >> yQ[93]) + (QQ[yQ[120]] >> yQ[93])), QQ[yQ[14]] << yQ[93] | QQ[yQ[120]] & yQ[119]
            }
            return QQ = "", WQ = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(QQ) {
                return zQ(function(...QQ) {
                  return QQ[yQ[11]] = yQ[0], JQ(vQ(gQ(QQ[yQ[2]]), QQ[yQ[2]].length * yQ[3]))
                }(PQ(QQ)))
              },
              b64: wQ,
              any: qQ,
              hex_hmac: function(...QQ) {
                return QQ[yQ[11]] = yQ[12], zQ(TQ(PQ(QQ[yQ[2]]), PQ(QQ[yQ[0]])))
              },
              b64_hmac: wQ,
              any_hmac: qQ
            }
          }(), console.log(QQ[yQ[14]]))
        }
        rQ(184) + "n" in GQ && xQ();
        let YQ = XQ[nQ(206) + nQ(207)] * uQ;
        if (!aQ) {
          function ZQ(QQ) {
            var WQ, XQ, wQ, qQ, TQ, zQ, sQ;
            for (iQ(WQ = "" + (QQ || ""), XQ = WQ.length, wQ = [], qQ = yQ[2], TQ = yQ[2], zQ = -yQ[0]), sQ = yQ[2]; sQ < XQ; sQ++) {
              var FQ = 'F}SnsYLCEX7^<1lx+0)qUe]!3(_r;wb6JjdIO8p2[|.W9fcV$AHkGzQa?>t&gK5*/hTRuNB#v,4"oD`yi{Z@PM=%m~:'.indexOf(WQ[sQ]);
              if (FQ !== -yQ[0])
                if (zQ < yQ[2]) zQ = FQ;
                else {
                  iQ(zQ += FQ * yQ[26], qQ |= zQ << TQ, TQ += (zQ & yQ[27]) > yQ[28] ? yQ[29] : yQ[30]);
                  do {
                    iQ(wQ.push(qQ & yQ[10]), qQ >>= yQ[3], TQ -= yQ[3])
                  } while (TQ > yQ[22]);
                  zQ = -yQ[0]
                }
            }
            return zQ > -yQ[0] && wQ.push((qQ | zQ << TQ) & yQ[10]), DQ(wQ)
          }

          function OQ(...QQ) {
            return QQ[yQ[11]] = yQ[0], typeof sQ[QQ[yQ[2]]] === yQ[16] ? sQ[QQ[yQ[2]]] = ZQ(FQ[QQ[yQ[2]]]) : sQ[QQ[yQ[2]]]
          }

          function KQ(...QQ) {
            iQ(QQ[yQ[11]] = yQ[2], QQ[yQ[25]] = function(...QQ) {
              for (iQ(QQ[yQ[11]] = yQ[0], QQ[-yQ[121]] = QQ[yQ[2]].length, QQ[yQ[14]] = [], QQ[yQ[4]] = yQ[2]), QQ[yQ[20]] = yQ[2]; QQ[yQ[20]] < QQ[-yQ[121]]; QQ[yQ[20]]++) QQ[yQ[14]].push(QQ[yQ[20]] !== yQ[2] && QQ[yQ[2]][QQ[yQ[20]]] > QQ[yQ[2]][QQ[yQ[20]] - yQ[0]] ? QQ[yQ[14]][QQ[yQ[20]] - yQ[0]] + yQ[0] : yQ[0]);
              for (QQ[-yQ[36]] = QQ[-yQ[121]] - yQ[0]; QQ[-yQ[36]] >= yQ[2]; QQ[-yQ[36]]--) QQ[-yQ[36]] !== QQ[-yQ[121]] - yQ[0] && QQ[yQ[2]][QQ[-yQ[36]]] > QQ[yQ[2]][QQ[-yQ[36]] + yQ[0]] && (QQ[yQ[14]][QQ[-yQ[36]]] = Math.max(QQ[yQ[14]][QQ[-yQ[36]]], QQ[yQ[14]][QQ[-yQ[36]] + yQ[0]] + yQ[0])), QQ[yQ[4]] += QQ[yQ[14]][QQ[-yQ[36]]];
              return QQ[yQ[4]]
            }, console.log(QQ[yQ[25]]))
          }
          nQ(yQ[79]) + yQ[98] in GQ && KQ(), YQ *= XQ[OQ(209) + OQ(yQ[80])]
        }
        let NQ = XQ[nQ(211) + nQ(212) + "ss"] * CQ;
        if (CQ < .3) {
          function mQ(...QQ) {
            iQ(QQ[yQ[11]] = yQ[2], QQ[-yQ[123]] = function(...WQ) {
              return WQ[yQ[11]] = yQ[12], QQ[yQ[74]]({}, WQ[yQ[2]], WQ[yQ[0]])
            }, QQ[yQ[74]] = function(...WQ) {
              if (iQ(WQ[yQ[11]] = yQ[18], WQ[yQ[18]] = {}), WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]] !== yQ[17]) return WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]];
              if (WQ[yQ[0]] === WQ[yQ[12]]) return yQ[41];
              for (WQ[yQ[15]] = yQ[2]; WQ[yQ[15]] < WQ[yQ[0]].length; WQ[yQ[15]]++) WQ[yQ[18]][WQ[yQ[0]][WQ[yQ[15]]]] === yQ[17] && (WQ[yQ[18]][WQ[yQ[0]][WQ[yQ[15]]]] = yQ[2]), WQ[yQ[18]][WQ[yQ[12]][WQ[yQ[15]]]] === yQ[17] && (WQ[yQ[18]][WQ[yQ[12]][WQ[yQ[15]]]] = yQ[2]), iQ(WQ[yQ[18]][WQ[yQ[0]][WQ[yQ[15]]]]++, WQ[yQ[18]][WQ[yQ[12]][WQ[yQ[15]]]]--);
              for (WQ[-yQ[122]] in WQ[yQ[18]])
                if (WQ[yQ[18]][WQ[-yQ[122]]] !== yQ[2]) return WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]] = yQ[35], yQ[35];
              for (WQ[yQ[9]] = yQ[0]; WQ[yQ[9]] < WQ[yQ[0]].length; WQ[yQ[9]]++)
                if (QQ[yQ[74]](WQ[yQ[2]], WQ[yQ[0]].substr(yQ[2], WQ[yQ[9]]), WQ[yQ[12]].substr(yQ[2], WQ[yQ[9]])) && QQ[yQ[74]](WQ[yQ[2]], WQ[yQ[0]].substr(WQ[yQ[9]]), WQ[yQ[12]].substr(WQ[yQ[9]])) || QQ[yQ[74]](WQ[yQ[2]], WQ[yQ[0]].substr(yQ[2], WQ[yQ[9]]), WQ[yQ[12]].substr(WQ[yQ[12]].length - WQ[yQ[9]])) && QQ[yQ[74]](WQ[yQ[2]], WQ[yQ[0]].substr(WQ[yQ[9]]), WQ[yQ[12]].substr(yQ[2], WQ[yQ[12]].length - WQ[yQ[9]]))) return WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]] = yQ[41], yQ[41];
              return WQ[yQ[2]][WQ[yQ[0]] + WQ[yQ[12]]] = yQ[35], yQ[35]
            }, console.log(QQ[-yQ[123]]))
          }
          nQ(yQ[45]) in GQ && mQ(), NQ *= CQ
        }
        YQ > NQ && (YQ = NQ), iQ(qQ()[nQ(214)](AQ, AQ, YQ), zQ[nQ(215) + nQ(216)](AQ))
      }
      zQ[rQ(217) + yQ[124]] = XQ[rQ(218) + rQ(yQ[61]) + yQ[124]] * (aQ ? BQ : VQ)
    }
  },
  37924: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ,
      f: () => sQ
    });
    var wQ = XQ(37926),
      qQ = XQ(1972);
    const TQ = 2,
      zQ = 1,
      sQ = {
        Bs: 1,
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

    function FQ(QQ, WQ, XQ, sQ, FQ, PQ, gQ) {
      if (FQ.speed) return (0, wQ.d)(WQ, XQ, sQ, FQ, PQ, gQ, QQ), void(FQ.ticksToReachMaxIdleFriction = TQ);
      const JQ = sQ.isOnGround(),
        rQ = WQ.bloxd.getSyncedClientOptions(WQ.bloxd.getPlayerReader(XQ)),
        IQ = null === rQ ? WQ.bloxd.getClientPredictedOption(XQ, "groundFrictionScale") : rQ.groundFrictionScale,
        jQ = null === rQ ? WQ.bloxd.getClientPredictedOption(XQ, "airFrictionScale") : rQ.airFrictionScale,
        BQ = JQ ? IQ : jQ,
        yQ = Math.max(zQ, BQ),
        VQ = FQ.ticksToReachMaxIdleFriction / TQ,
        DQ = (0, qQ.s)(yQ, BQ, VQ);
      PQ.friction = QQ.standingFriction * ((null === rQ ? WQ.bloxd.getClientPredictedOption(XQ, "airMomentumConservation") : rQ.airMomentumConservation) ? DQ : BQ), FQ.ticksToReachMaxIdleFriction > 0 && FQ.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);