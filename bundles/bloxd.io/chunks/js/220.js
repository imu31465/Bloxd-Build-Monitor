export const id = 220;
export const ids = [220];
export const modules = {
  38009: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => xQ
    });
    var LQ = wQ(201),
      qQ = wQ(37210);
    const oQ = 1.2,
      DQ = {
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
        GD: .5,
        XFQ: !1
      },
      kQ = {
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
        GD: .5,
        XFQ: !1
      },
      vQ = {
        physicsBodyDimensions: {
          width: LQ.e.pG,
          height: LQ.e.iG
        },
        hitBoxDimensions: {
          width: LQ.e.pG + .4,
          height: LQ.e.iG + .6
        },
        eyeHeight: LQ.e.iG * LQ.e.playerEyeToHeightRatio,
        rideHeight: LQ.e.iG - .3,
        GD: .5,
        XFQ: !1
      },
      mQ = {
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
        GD: .5,
        XFQ: !1
      },
      uQ = {
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
        GD: .5,
        XFQ: !1
      },
      HQ = {
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
        GD: .5,
        XFQ: !1
      },
      bQ = {
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
        GD: .5,
        XFQ: !1
      },
      YQ = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: LQ.e.pG,
            height: LQ.e.iG
          },
          hitBoxDimensions: {
            width: LQ.e.pG + .4,
            height: LQ.e.iG + .6
          },
          eyeHeight: LQ.e.iG * LQ.e.playerEyeToHeightRatio,
          rideHeight: LQ.e.iG - .1,
          GD: qQ.f.GD,
          XFQ: !0
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
        },
        Camel: {
          modelScale: oQ,
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
        },
        "Cave Golem": DQ,
        "Draugr Zombie": {
          ...vQ,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": vQ,
        "Frost Golem": DQ,
        "Frost Zombie": {
          ...vQ,
          defaultPose: "zombie"
        },
        "Frost Skeleton": vQ,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: LQ.e.pG,
            height: LQ.e.iG
          },
          hitBoxDimensions: {
            width: LQ.e.pG + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          GD: .5,
          XFQ: !1
        },
        Wolf: mQ,
        Bear: uQ,
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
          GD: .5,
          XFQ: !1
        },
        Stag: HQ,
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
          GD: .5,
          XFQ: !1
        },
        Gorilla: bQ,
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
          GD: .5,
          XFQ: !1
        },
        "Draugr Huntress": vQ,
        "Magma Golem": DQ,
        "Spirit Golem": DQ,
        "Spirit Wolf": mQ,
        "Spirit Bear": uQ,
        "Spirit Stag": HQ,
        "Spirit Gorilla": bQ,
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: LQ.e.pG,
            height: LQ.e.iG
          },
          hitBoxDimensions: {
            width: LQ.e.pG + .4,
            height: LQ.e.iG + .6
          },
          eyeHeight: LQ.e.iG * LQ.e.playerEyeToHeightRatio,
          rideHeight: LQ.e.iG - .1,
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: LQ.e.pG,
            height: LQ.e.iG
          },
          hitBoxDimensions: {
            width: LQ.e.pG + .4,
            height: LQ.e.iG + .6
          },
          eyeHeight: LQ.e.iG * LQ.e.playerEyeToHeightRatio,
          rideHeight: LQ.e.iG - .1,
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
        },
        Zombie: {
          ...vQ,
          defaultPose: "zombie"
        },
        Skeleton: vQ,
        Mummy: {
          ...vQ,
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
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
          GD: .5,
          XFQ: !1
        },
        "Iron Guardian": kQ,
        "Gold Guardian": kQ,
        "Diamond Guardian": kQ,
        "Moonstone Guardian": kQ,
        "Iron Goofy Golem": kQ,
        "Gold Goofy Golem": kQ,
        "Diamond Goofy Golem": kQ,
        "Moonstone Goofy Golem": kQ,
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
          GD: .5,
          XFQ: !1
        }
      };

    function xQ(QQ) {
      return YQ[QQ]
    }
  },
  36672: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    const LQ = {
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
  37212: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(334),
      qQ = wQ.n(LQ),
      oQ = wQ(1870);
    let DQ;
    var kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ;
    const tQ = [132, 0, 1, 241, "c", 230, 17, "g", 113, 130, 10, 8, 255, "length", "d", 41, 99, "undefined", void 0, 4, 3, "b", 63, 6, "fromCodePoint", 7, 12, "push", 2, "h", 98, 91, 75, "f", 8191, 88, 13, 14, 1023, 65536, 55296, 56320, 40, 9, "e", 68, 128, "a", 31, 15, 18, 20, 192, 240, 55, 119, 134, 224, 137, 127, 35, !1, 225, 59, "i", 64, 112, 5, 102, 236, "j", 171, null, 179, 118, 182, 129, 131, 136, 138, 122, 123, 124, 125, 133, 135, 144, 145, 126, 146, 147, 148, 149, 248, 169, 95, "gq", 100, 173, 172, 233, 21, 175, 84, "k", 222, "on"];

    function eQ(...QQ) {
      return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = function(...QQ) {
        for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[5]] = 'a8lEmDZ}fTM?yQ%cJC$eu<P_z]!,+Rv(Wo{Y7K"Oqgw)29x1>S^:ni[~B*5V/.NkpbAXUI#3sFdr4H`&t06h=|G@Lj;', QQ[-tQ[0]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[4]] = QQ[-tQ[0]].length, QQ[tQ[10]] = [], QQ[tQ[8]] = tQ[1], QQ[-tQ[9]] = tQ[1], QQ[tQ[7]] = -tQ[2]), QQ[tQ[3]] = tQ[1]; QQ[tQ[3]] < QQ[tQ[4]]; QQ[tQ[3]]++)
          if (QQ[tQ[6]] = QQ[tQ[5]].indexOf(QQ[-tQ[0]][QQ[tQ[3]]]), QQ[tQ[6]] !== -tQ[2])
            if (QQ[tQ[7]] < tQ[1]) QQ[tQ[7]] = QQ[tQ[6]];
            else {
              sQ(QQ[tQ[7]] += QQ[tQ[6]] * tQ[31], QQ[tQ[8]] |= QQ[tQ[7]] << QQ[-tQ[9]], QQ[-tQ[9]] += (QQ[tQ[7]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
              do {
                sQ(QQ[tQ[10]].push(QQ[tQ[8]] & tQ[12]), QQ[tQ[8]] >>= tQ[11], QQ[-tQ[9]] -= tQ[11])
              } while (QQ[-tQ[9]] > tQ[25]);
              QQ[tQ[7]] = -tQ[2]
            } return QQ[tQ[7]] > -tQ[2] && QQ[tQ[10]].push((QQ[tQ[8]] | QQ[tQ[7]] << QQ[-tQ[9]]) & tQ[12]), MQ(QQ[tQ[10]])
      }(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
    }

    function MQ(QQ) {
      return typeof uQ !== tQ[17] && uQ ? (new uQ).decode(new HQ(QQ)) : typeof bQ !== tQ[17] && bQ ? bQ.from(QQ).toString("utf-8") : AQ(QQ)
    }

    function GQ() {}
    sQ(kQ = {}, vQ = ['BNnHch>${yxFy/+_5ULF1rynbTEr4h"z}Uaod>&QJA/W6]uq', 'du#(j*m$*N:tuVT([{+R#dVgky`fe^Y]V%"}3&SgZ', '7ZhR"qGt8*bFQ0E)C3nH)K3g?uI#3#zw%$3S(|1eSkY,4V/_Md|($', "DW}oH*Pz=TZ_~5.Yd_?WL4#xl*LxsVse#>DnK.<Y|p)(uEAC*_j[wta", '$yZ}ir(et*o4P"r]c8', '|#Tvqkzn7[aUqsG{#N|4p&zt>ys#t3RCW>6iKU,1;NBF*SO"3_j:v', "XZi~qtBlgN$vY#RR?WE", 'kb^f;|sZ4%P5)l0qMk)dv1H*NV|dy7;7XwI~]*{lO5J&ccr"H(_S{nddBuO', "8y*ZQI982C`0Km%ef8", "wqwsw.7l,u5Y{Sye?xmDfd>to*b?RJm)=%[}T&a", "n9:W?0ZznT", ']qyMvncg8*[#=VzwZ[Ovv.}@(<BFPK}"fSAHU7mwky+I%!<Y*%.~SK8Yie', "pFKdxUuxzu3Fr!8_Ekr^p/hg[5v}1#Z$TRl", "t9Ydi5,R)N$,QsRYOytS?NB$Fbe{5.h,,8", 'LE.(?>=d`f4?|/._sV>Ss>@R=[SFh!w"QUi~Bs11DQer,1|YHVpSl0a', "~[Z}Rn~}Q%B}z,U(ucb:2[Bxm", '.bI^[H&g5CeM)55+V_w:D0zv@5~Y}^y"D$DM+1GnCy!u50Z', "WdU^KU)8leq+</{CYZ8:<q,0?C/", 'j9I+WFB$t$$Iu/;gr%4R]VQ8Funti>O"Lb8WoFWtZ', 'dCfv2.>p3Q:ImE4"mAFZ=^a', '4UA:`4pzNVPumh={*:g[kOb_PejR,ls"<[l,v|6nC[HH8KPgkbWZB&Q0m', 'H+Tr9tWyckI8;]YCG>_Fk55z>k%5?!4"b:=}', "yklDHh.1t/6dH0Q", "wKI!ZG@R=QJr}c;YPUy(Q~0g><_4c6HeeWx4LVbr,CKA#SC,vRf[6o>tN$~", "xKk409)e)C%uQsV_CTuMy^Wv=T.+zETe4a", '!U,W&IUdWAQ,3!=q/+Dd%0"ze*4t`%=g):$HG3`5Eynz8', "jNu(L^[vQNXiFmb_5q5:e", 'WK"(:O!pZ', "}3jf!|Wv,u9%7VF(c[}4qB!GE*^+L1!7#9sSo1,gJkOV8", '/C9Mm&Uz)VknImpC5TBSCN~YbThD>VK]7RiM@"#z?%"I/EM', "f$(+~:Qg6/avMKYv8y@nfG&RhyY{^]/Rq[&T/:!zvV[t:cj{{{w,cdFgm", 'z_z`e3kYTMSSbm7]p:bZvqp55Cxz?"K(2N3+Bs!p0*ItBsL{wR_m', "?R&4<n4q2bJu2hTOs[$Rh*hR)VG/5.0qdZjZ[{6tm", "OuN}b&e0!uHk`Ik_+3YdMIMpRVRNmhb7VbH4y4[l", "9{S:oFx$E", "~Z8:7[8]Z", 'W*?dRq+GFC1M{]_qW/ar15bYSc#F5](7[U$:s7Pp/Nl,E"2e^!|}]', '3T)sv3[U9V9I+ELwfYc4ehNz.?W4G!<q;i!s@"jgb$cZ=ELYqKmM:5}8', "h(`m]`#z1i:kxQ={_cMrZ/|8", "2Z&mI>~ReeX#T=;J$WI!IdUyu*m&/7s!p+nHD~rR?CZ_Fz|qON+de", 'Z*&[KYN$v<n4!KUv[UAWf4"5ne0f/cV+b>Z(c*O}$/_&9KUzW*!WH*:8', '93<}KUeiPp1~23X(KTv(9B=5VV6XN5Nz):edI>Y}c$=R".:g', "eZ_mP*vyYTJs6%_+zd/d%I2yX/kS_%o$j{xm~&38RNXFf/Kes:QM+3a", "L?N4VO(1o*3X_^[g!u`nS=G{&/9%,6XvyKcop5MGt/}.H7w!s>E", "1[l:WF%l", '*T#nax@}fM]sw"L+QUXis4@I<elr,1Nwu/u(::e1ayvzO!+w', 'n!I!67i1rC(4!%qK`VidVOo}HB#A{Sq(8c[}_^Lzmp]:.z.7eT"}', "d(0[Z{P7Gp!ZaE", "Rd(n/#Tg~ucr+mvRJqTZfdulD", "P[t[,1*k0cB", "l)%}V5x5Q%XBBc{vO!S:H7xq}~MrV5?]pNn~R", "eWId;*k8X/uQBhR_2)Nn,qb8E", "Cc&+$7Blkf<Z2EYCsw<},FKYf5R}.>KzXa", "cc/dk&q7MuxC[S@R:b&+RhE]5?0S^KT", 'EmH}G|4zDQmQRsn+.V^fXd*RY*,N9Jl7"NqT', "FwUD5i2v~Q2NH/XCyql:~KOQ+bZ&X5P{I>?Mp~=y6*{%?6jY+xR~B/vn?VC68", 'fU(mOUig.N"AX%I]qU8', "m!qTRVxqVC=H8DsK(c`m%7rQ$k9Sq,|Y", "_*Zn%d)8RAWI*7L{&V/H!|snE*?_C>3((8", 'Yd_TtNTg(yrW&l.7vc*ZL*JGaA:(r"4!)!BTOki8.fg4{Q=+tK|^A{pdm', "9:$W|hs$I[BFsmV7:[)Rnrqqi5b#s,M]O_N+Z^<e/CskSJ#KV{MW8=.Ym", "j>Knf>)eru#AT>IK+x4H]nc0>Ai<h%Q,?3+HU/CY2BtP1#Q", 'ONYHBk/dyNN#Y5b_Lb+~9twpHig~y3oC`?T:gr"yVN:4Xc^{', "$xC,TGD}7e`i_l4OVUQ48/Ce]51CH/8z7>#(mN!z%A(({QIeA(l", "d>h^+1xxD", 'eqkS8>eR5NQsH>Az])|^u"oe35+4P.=,DW.M]F<0J$%K16/7', 'SE}48i;{fM">>1%qF>=R7Yh|Ppu:RJ:,_cp[9Y0|+%NSC/D(mU"nfG4{#e', '4_+M1#DIvA+,15ZK2Kk4"6r8', "p:LZH>V8", 'pTA:uVE@G5K&^Q<,cK.d?"Ye)N`xX"G+?3gsCIPf(<|*qE', "0BYWH>OeYeU#8", "u*`F1:E@R<?bl0[qFEmM^x[l9N+Nr!g$jNvm", ".%A:R|f#.iG$&!!RfktFotOQ6k<:3!*_my9~~Kz7d%,Njtq!", "u/vSJ0qqQ$IHY3{v2:vT<IW$8T^<,!UK]c(T;Vmzgu", "sC4!5{ynATn<Bc?", '}[nionhQmQSzM0s"', "|F@+YY?8", "q_d:*xa", "3[zFxUatA//", 'g_"~^UV8', '6]@Tr"ikMNyssz_{&%=H;*FRcABt0]E(EY8rc~r*Wc`xel!gWErD`>0Ym', "[T1mt0`x:*Zbl08_u/_nZiqnruS4y33$%mVR+", "}SGm+YX:AT$rFS)!*>idSKwv@uB(0s|q<kLT3~k:v<}5s,5wPxQdQ", "RcsT&NXY0*tWtVTeHVX^O|^x9$", "lk~[BO8YG5SYH/8({>]`a7bYVf~YaE6+3[#+_nZwF%", "akVi}N[lqbA+=E%qp:sFYra7MC%sm,C,RK6WcI9e5?xNt,s$fkXd;VbI/%", 'kq`(2UDQv<7&c34eWxXid7t5r?<K2,4e&b(my"Z7CAE:i/d]4ZUDJNnl', "vyzZ;na", "|9[447XINBnzz,7C2b^sENb8rB=kn,)e{EeRb&Zw/C8l8", "kV`}a{KYUpoI=E", 'z[ED~#7vRVGxZ0Cq6:{,80K0}~?.Jhs"@a', "+uK~X~FR`B~YyEEz3NXH2ka", '73a:L"qn}pSB,^J,aYtZi6egI5j#uE0{@a', ")u,R(VCIJ$C&y7jgn{9d!|rQvAq", "VKtTq1I8", "xu^:!)P=", "Nr;FY7#=", 'cK:3uq"', "s3UdMF~=", "3_>j|,X=", "wi;a`)G=", "wiw:3", "CqhWu4dzkDbt{.Y?Sqv(.=a", '";!nbmK<qBHZ4F623x/keK@RNGQX&[j', "?1[7PWw>T{H6vl`np1rCla,", "cr26!s]ndT:m0_[.JL?E*]`ZBHKq{yI", "CqhWu4dzp^VA`S}K!/:fcde0kDbt{.y", "CqhWu4dzp^[+WVUe~?hfW3Nz4C^", "F%Vm!|N", ".qv(8s+l", "]crf", "Mx<PQ+lE", 'A:"(H0ul', "l~cL7$H{", "4RdV", ">}cVSty", "4~nF", "U,8ioc[(", "6#Miz=U", "Z5TK`6JY", "G5N:SrJY", "55HK", "Z5>2E[lY", "L5a6J6kY", '7|>2&"$Y', "BPD2k", "Z5>2J6|A9d", "Q0$B:=pdFD", "sJ&N{{x!9d", "=)@Bu2ZY", "9)r62{kY", ":|2?q>#Y", "Z5>2J6kY", "7|TKG8DY", "lQ_gBrZY", '87_BB"lY', "jQN:s8kY", "BVr6z2;(", "*ttBR", "A5TK", "H5>?d", "QPjBA", ":3~)T$0Y", "@zxiR", "jQ)B<n`Y", "Bi)gArU", 'jQ)BR"GY', "7|_B&6P(", ":|.Bf83Y", "AVr6z2U", 'w"5&"|kW', "4o98CauE,m", "}l_cYU9,W_", "n[Ub{TN=N1", "aX{f>]ccLS", "PD3;X]v}", ",|{roAoGb?6", ":=lnq/,V:bI", "o<^seD8lhiI", "Ny/f3P[x7Zt", "&8_^PE,=BC8", "PD7$P+Uw!6I", "6=c^7vU[j", "q5zBkK%}m2*^!ylB6=Dft.0x,NLIWGL", "621fY:H!SY/(R#MXGI!^mP#|.6g(cNl", "88;nUELEDo*^}^Z@qIIU3P[?6QM?~KL", "0W?c=PLEfQVdyVk@Jy#nGESMOi.KdVp", "Jyc^9v^x,N2(R#MXGIJ^mP#|s_[&Oa_", ';=c^w%U[8QM?/,OeJF"jyP8Le$g&7', "]=Ao", "6q@Z", "8)2M", "Cj@Z", "o>]%]Y1s", "Em&x1", ";BpM", "+Dao", "az.g", 'S5D2"{QY', "CVWK3^}(", "(hOK0*XY", "GJ=6{{JY", ".i}g", "%Qxi", "9P)B%>#Y", "@?}g", "GP}B[6DY", "PVx<P8`Y", "u9kK8{kY", "~#=af8U", "zJ_F#kjv", "lf_D", "U$8FN;.v", "YZ%W`Cu", "S5AWI;iv", "t$_FdR|v", "?HLU+!SX", "[f8D<!u", "T#`fz)k/", ";81yN", "n)r62{kY", "GP}B.2yY"]), sQ(mQ = function(...QQ) {
      sQ(QQ[tQ[13]] = tQ[1], QQ[tQ[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], QQ[tQ[2]] = tQ[18], QQ[tQ[4]] = []);
      try {
        sQ(QQ[tQ[2]] = Object, QQ[tQ[4]][tQ[27]]("".__proto__.constructor.name))
      } catch (vQ) {}
      QQ: for (QQ[tQ[14]] = tQ[1]; QQ[tQ[14]] < QQ[tQ[15]][tQ[13]]; QQ[tQ[14]]++) try {
        for (QQ[tQ[2]] = QQ[tQ[15]][QQ[tQ[14]]](), QQ[tQ[16]] = tQ[1]; QQ[tQ[16]] < QQ[tQ[4]][tQ[13]]; QQ[tQ[16]]++)
          if (typeof QQ[tQ[2]][QQ[tQ[4]][QQ[tQ[16]]]] === tQ[17]) continue QQ;
        return QQ[tQ[2]]
      } catch (vQ) {}
      return QQ[tQ[2]] || this
    }() || {}, uQ = mQ.TextDecoder, HQ = mQ.Uint8Array, bQ = mQ.Dx, YQ = mQ.String || String, xQ = mQ.Array || Array, AQ = function() {
      var QQ, FQ, wQ = new xQ(tQ[46]);
      return sQ(QQ = YQ[tQ[24]] || YQ.fromCharCode, FQ = []),
        function(...LQ) {
          for (sQ(LQ[tQ[13]] = tQ[2], LQ[tQ[2]] = tQ[18], LQ[tQ[21]] = tQ[18], LQ[tQ[20]] = LQ[tQ[1]][tQ[13]], FQ[tQ[13]] = tQ[1]), LQ[tQ[19]] = tQ[1]; LQ[tQ[19]] < LQ[tQ[20]];) sQ(LQ[tQ[21]] = LQ[tQ[1]][LQ[tQ[19]]++], LQ[tQ[21]] <= tQ[59] ? LQ[tQ[2]] = LQ[tQ[21]] : LQ[tQ[21]] <= 223 ? LQ[tQ[2]] = (LQ[tQ[21]] & tQ[48]) << tQ[23] | LQ[tQ[1]][LQ[tQ[19]]++] & tQ[22] : LQ[tQ[21]] <= 239 ? LQ[tQ[2]] = (LQ[tQ[21]] & tQ[49]) << tQ[26] | (LQ[tQ[1]][LQ[tQ[19]]++] & tQ[22]) << tQ[23] | LQ[tQ[1]][LQ[tQ[19]]++] & tQ[22] : YQ[tQ[24]] ? LQ[tQ[2]] = (LQ[tQ[21]] & tQ[25]) << tQ[50] | (LQ[tQ[1]][LQ[tQ[19]]++] & tQ[22]) << tQ[26] | (LQ[tQ[1]][LQ[tQ[19]]++] & tQ[22]) << tQ[23] | LQ[tQ[1]][LQ[tQ[19]]++] & tQ[22] : (LQ[tQ[2]] = tQ[22], LQ[tQ[19]] += tQ[20]), FQ[tQ[27]](wQ[LQ[tQ[2]]] || (wQ[LQ[tQ[2]]] = QQ(LQ[tQ[2]]))));
          return FQ.join("")
        }
    }()), eQ(94) in GQ && function() {
      ! function(...QQ) {
        function FQ(...QQ) {
          for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[2]] = 'N@TH{kwAxoe*=lL9~KJ4D1VrO,n</vqUb|7i}yW%.[G^MP3Ifm"c82S6pRE]BYu(C5a>s#)`Q_d0$X?t!hjzgZF:&;+', QQ[tQ[28]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[20]] = QQ[tQ[28]].length, QQ[tQ[14]] = [], QQ[-tQ[32]] = tQ[1], QQ[tQ[33]] = tQ[1], QQ[tQ[25]] = -tQ[2]), QQ[tQ[29]] = tQ[1]; QQ[tQ[29]] < QQ[tQ[20]]; QQ[tQ[29]]++)
            if (QQ[tQ[30]] = QQ[tQ[2]].indexOf(QQ[tQ[28]][QQ[tQ[29]]]), QQ[tQ[30]] !== -tQ[2])
              if (QQ[tQ[25]] < tQ[1]) QQ[tQ[25]] = QQ[tQ[30]];
              else {
                sQ(QQ[tQ[25]] += QQ[tQ[30]] * tQ[31], QQ[-tQ[32]] |= QQ[tQ[25]] << QQ[tQ[33]], QQ[tQ[33]] += (QQ[tQ[25]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                do {
                  sQ(QQ[tQ[14]].push(QQ[-tQ[32]] & tQ[12]), QQ[-tQ[32]] >>= tQ[11], QQ[tQ[33]] -= tQ[11])
                } while (QQ[tQ[33]] > tQ[25]);
                QQ[tQ[25]] = -tQ[2]
              } return QQ[tQ[25]] > -tQ[2] && QQ[tQ[14]].push((QQ[-tQ[32]] | QQ[tQ[25]] << QQ[tQ[33]]) & tQ[12]), MQ(QQ[tQ[14]])
        }

        function wQ(...QQ) {
          return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = FQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
        }

        function LQ(QQ) {
          var FQ, wQ, LQ, qQ, oQ = [];
          for (sQ(FQ = tQ[1], wQ = QQ.length, LQ = void 0, qQ = void 0); FQ < wQ;) sQ(LQ = QQ.charCodeAt(FQ++), LQ >= tQ[40] && LQ <= 56319 && FQ < wQ ? (64512 & (qQ = QQ.charCodeAt(FQ++))) == tQ[41] ? oQ.push(((LQ & tQ[38]) << tQ[10]) + (qQ & tQ[38]) + tQ[39]) : (oQ.push(LQ), FQ--) : oQ.push(LQ));
          return oQ
        }

        function qQ(FQ) {
          var wQ, LQ, qQ, oQ = FQ.length;
          for (sQ(wQ = -tQ[2], LQ = void 0, qQ = ""); ++wQ < oQ;)(LQ = FQ[wQ]) > 65535 && sQ(LQ -= tQ[39], qQ += QQ[tQ[2]](LQ >>> tQ[10] & tQ[38] | tQ[40]), LQ = tQ[41] | LQ & tQ[38]), qQ += QQ[tQ[2]](LQ);
          return qQ
        }

        function oQ(...QQ) {
          if (QQ[tQ[13]] = tQ[2], QQ[tQ[1]] >= tQ[40] && QQ[tQ[1]] <= 57343) {
            function FQ(...QQ) {
              for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[42]] = '"_=x6vDVj9dJ#U1KX{+^m2)SI3ObC@qc:(i<t]h}~M4u/0fEP>er;aGQ&oW5lsZnHygY%$*!7L`wBF?.,[8pNAzR|kT', QQ[tQ[21]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[20]] = QQ[tQ[21]].length, QQ[tQ[45]] = [], QQ[tQ[44]] = tQ[1], QQ[tQ[23]] = tQ[1], QQ[tQ[25]] = -tQ[2]), QQ[tQ[29]] = tQ[1]; QQ[tQ[29]] < QQ[tQ[20]]; QQ[tQ[29]]++)
                if (QQ[tQ[43]] = QQ[tQ[42]].indexOf(QQ[tQ[21]][QQ[tQ[29]]]), QQ[tQ[43]] !== -tQ[2])
                  if (QQ[tQ[25]] < tQ[1]) QQ[tQ[25]] = QQ[tQ[43]];
                  else {
                    sQ(QQ[tQ[25]] += QQ[tQ[43]] * tQ[31], QQ[tQ[44]] |= QQ[tQ[25]] << QQ[tQ[23]], QQ[tQ[23]] += (QQ[tQ[25]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                    do {
                      sQ(QQ[tQ[45]].push(QQ[tQ[44]] & tQ[12]), QQ[tQ[44]] >>= tQ[11], QQ[tQ[23]] -= tQ[11])
                    } while (QQ[tQ[23]] > tQ[25]);
                    QQ[tQ[25]] = -tQ[2]
                  } return QQ[tQ[25]] > -tQ[2] && QQ[tQ[45]].push((QQ[tQ[44]] | QQ[tQ[25]] << QQ[tQ[23]]) & tQ[12]), MQ(QQ[tQ[45]])
            }

            function wQ(...QQ) {
              return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = FQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
            }
            throw Error(wQ(tQ[95]) + wQ(96) + wQ(97) + QQ[tQ[1]].toString(16).toUpperCase() + (wQ(tQ[30]) + wQ(tQ[16]) + wQ(tQ[97]) + wQ(101)))
          }
        }

        function DQ(...FQ) {
          return FQ[tQ[13]] = tQ[28], QQ[tQ[2]](FQ[tQ[1]] >> FQ[tQ[2]] & tQ[22] | tQ[46])
        }

        function mQ(...FQ) {
          return FQ[tQ[13]] = tQ[2], (4294967168 & FQ[tQ[1]]) == tQ[1] ? QQ[tQ[2]](FQ[tQ[1]]) : (FQ[tQ[47]] = "", (4294965248 & FQ[tQ[1]]) == tQ[1] ? FQ[tQ[47]] = QQ[tQ[2]](FQ[tQ[1]] >> tQ[23] & tQ[48] | tQ[52]) : (4294901760 & FQ[tQ[1]]) == tQ[1] ? sQ(oQ(FQ[tQ[1]]), FQ[tQ[47]] = QQ[tQ[2]](FQ[tQ[1]] >> tQ[26] & tQ[49] | tQ[57]), FQ[tQ[47]] += DQ(FQ[tQ[1]], tQ[23])) : (4292870144 & FQ[tQ[1]]) == tQ[1] && sQ(FQ[tQ[47]] = QQ[tQ[2]](FQ[tQ[1]] >> tQ[50] & tQ[25] | tQ[53]), FQ[tQ[47]] += DQ(FQ[tQ[1]], tQ[26]), FQ[tQ[47]] += DQ(FQ[tQ[1]], tQ[23])), FQ[tQ[47]] += QQ[tQ[2]](FQ[tQ[1]] & tQ[22] | tQ[46]), FQ[tQ[47]])
        }

        function uQ(...QQ) {
          for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[47]] = LQ(QQ[tQ[1]]), QQ[-tQ[51]] = QQ[tQ[47]].length, QQ[tQ[4]] = -tQ[2], QQ[-tQ[36]] = tQ[18], QQ[tQ[42]] = ""); ++QQ[tQ[4]] < QQ[-tQ[51]];) sQ(QQ[-tQ[36]] = QQ[tQ[47]][QQ[tQ[4]]], QQ[tQ[42]] += mQ(QQ[-tQ[36]]));
          return QQ[tQ[42]]
        }

        function HQ() {
          var FQ;

          function wQ(QQ) {
            var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ = 'w,v7:GJ6kLPUj%zeD"p@bC{`<t3*y)rIn_&lM2]h;cSdTo>9OFB/WagV~f?Hx[=NqQZA+i1E}|K(m540XR#!.Y8$u^s';
            for (sQ(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = tQ[1], oQ = tQ[1], DQ = -tQ[2]), kQ = tQ[1]; kQ < wQ; kQ++) {
              var mQ = vQ.indexOf(FQ[kQ]);
              if (mQ !== -tQ[2])
                if (DQ < tQ[1]) DQ = mQ;
                else {
                  sQ(DQ += mQ * tQ[31], qQ |= DQ << oQ, oQ += (DQ & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                  do {
                    sQ(LQ.push(qQ & tQ[12]), qQ >>= tQ[11], oQ -= tQ[11])
                  } while (oQ > tQ[25]);
                  DQ = -tQ[2]
                }
            }
            return DQ > -tQ[2] && LQ.push((qQ | DQ << oQ) & tQ[12]), MQ(LQ)
          }

          function LQ(QQ) {
            return typeof kQ[QQ] === tQ[17] ? kQ[QQ] = wQ(vQ[QQ]) : kQ[QQ]
          }
          if (QQ[tQ[28]] >= QQ[tQ[4]]) throw Error(eQ(tQ[68]));
          if (sQ(FQ = QQ[-tQ[56]][QQ[tQ[28]]] & tQ[12], QQ[tQ[28]]++), (FQ & tQ[52]) == tQ[46]) return FQ & tQ[22];
          throw Error(LQ(103))
        }

        function bQ(...FQ) {
          if (sQ(FQ[tQ[13]] = tQ[1], FQ[tQ[53]] = tQ[18], FQ[tQ[2]] = tQ[18], FQ[tQ[4]] = tQ[18], FQ[tQ[20]] = tQ[18], FQ[-tQ[58]] = tQ[18]), QQ[tQ[28]] > QQ[tQ[4]]) {
            function wQ(...QQ) {
              for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[55]] = ',u8*_{csq(dn%^|fZ?N/Pb"k>hD9UQrC7Kv`+My!1gIR2VOFLp&XS.:Emtex$loTiH~5]JBA@Gw0W4#36)j[a=z}<;Y', QQ[tQ[28]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[4]] = QQ[tQ[28]].length, QQ[tQ[19]] = [], QQ[tQ[44]] = tQ[1], QQ[tQ[33]] = tQ[1], QQ[tQ[7]] = -tQ[2]), QQ[-tQ[54]] = tQ[1]; QQ[-tQ[54]] < QQ[tQ[4]]; QQ[-tQ[54]]++)
                if (QQ[tQ[43]] = QQ[tQ[55]].indexOf(QQ[tQ[28]][QQ[-tQ[54]]]), QQ[tQ[43]] !== -tQ[2])
                  if (QQ[tQ[7]] < tQ[1]) QQ[tQ[7]] = QQ[tQ[43]];
                  else {
                    sQ(QQ[tQ[7]] += QQ[tQ[43]] * tQ[31], QQ[tQ[44]] |= QQ[tQ[7]] << QQ[tQ[33]], QQ[tQ[33]] += (QQ[tQ[7]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                    do {
                      sQ(QQ[tQ[19]].push(QQ[tQ[44]] & tQ[12]), QQ[tQ[44]] >>= tQ[11], QQ[tQ[33]] -= tQ[11])
                    } while (QQ[tQ[33]] > tQ[25]);
                    QQ[tQ[7]] = -tQ[2]
                  } return QQ[tQ[7]] > -tQ[2] && QQ[tQ[19]].push((QQ[tQ[44]] | QQ[tQ[7]] << QQ[tQ[33]]) & tQ[12]), MQ(QQ[tQ[19]])
            }

            function LQ(QQ) {
              return typeof kQ[QQ] === tQ[17] ? kQ[QQ] = wQ(vQ[QQ]) : kQ[QQ]
            }
            throw Error(LQ(104))
          }
          if (QQ[tQ[28]] == QQ[tQ[4]]) return tQ[61];
          if (sQ(FQ[tQ[53]] = QQ[-tQ[56]][QQ[tQ[28]]] & tQ[12], QQ[tQ[28]]++), (FQ[tQ[53]] & tQ[46]) == tQ[1]) return FQ[tQ[53]];
          if ((FQ[tQ[53]] & tQ[57]) == tQ[52]) {
            if (sQ(FQ[tQ[2]] = HQ(), FQ[-tQ[58]] = (FQ[tQ[53]] & tQ[48]) << tQ[23] | FQ[tQ[2]]), FQ[-tQ[58]] >= tQ[46]) return FQ[-tQ[58]];
            {
              function qQ(...QQ) {
                for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[47]] = 'W%>N"H8[EQ<kIUa*uci`!xRln;Jg3vfX6A{pP.1zrDb9,Gw=4_T?Yj}OMte:LyVBdKm&+S($F7]os#0CqZ@2|^~5)/h', QQ[tQ[21]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[4]] = QQ[tQ[21]].length, QQ[tQ[14]] = [], QQ[tQ[60]] = tQ[1], QQ[-tQ[59]] = tQ[1], QQ[tQ[7]] = -tQ[2]), QQ[tQ[11]] = tQ[1]; QQ[tQ[11]] < QQ[tQ[4]]; QQ[tQ[11]]++)
                  if (QQ[tQ[43]] = QQ[tQ[47]].indexOf(QQ[tQ[21]][QQ[tQ[11]]]), QQ[tQ[43]] !== -tQ[2])
                    if (QQ[tQ[7]] < tQ[1]) QQ[tQ[7]] = QQ[tQ[43]];
                    else {
                      sQ(QQ[tQ[7]] += QQ[tQ[43]] * tQ[31], QQ[tQ[60]] |= QQ[tQ[7]] << QQ[-tQ[59]], QQ[-tQ[59]] += (QQ[tQ[7]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                      do {
                        sQ(QQ[tQ[14]].push(QQ[tQ[60]] & tQ[12]), QQ[tQ[60]] >>= tQ[11], QQ[-tQ[59]] -= tQ[11])
                      } while (QQ[-tQ[59]] > tQ[25]);
                      QQ[tQ[7]] = -tQ[2]
                    } return QQ[tQ[7]] > -tQ[2] && QQ[tQ[14]].push((QQ[tQ[60]] | QQ[tQ[7]] << QQ[-tQ[59]]) & tQ[12]), MQ(QQ[tQ[14]])
              }

              function DQ(...QQ) {
                return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = qQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
              }
              throw Error(DQ(105))
            }
          }
          if ((FQ[tQ[53]] & tQ[53]) == tQ[57]) {
            if (sQ(FQ[tQ[2]] = HQ(), FQ[tQ[4]] = HQ(), FQ[-tQ[58]] = (FQ[tQ[53]] & tQ[49]) << tQ[26] | FQ[tQ[2]] << tQ[23] | FQ[tQ[4]]), FQ[-tQ[58]] >= 2048) return oQ(FQ[-tQ[58]]), FQ[-tQ[58]];
            throw Error(eQ(106))
          }
          if ((FQ[tQ[53]] & tQ[93]) == tQ[53] && (sQ(FQ[tQ[2]] = HQ(), FQ[tQ[4]] = HQ(), FQ[tQ[20]] = HQ(), FQ[-tQ[58]] = (FQ[tQ[53]] & tQ[25]) << tQ[50] | FQ[tQ[2]] << tQ[26] | FQ[tQ[4]] << tQ[23] | FQ[tQ[20]]), FQ[-tQ[58]] >= tQ[39] && FQ[-tQ[58]] <= 1114111)) return FQ[-tQ[58]];
          throw Error(eQ(107))
        }

        function YQ(...FQ) {
          for (sQ(FQ[tQ[13]] = tQ[2], QQ[-tQ[56]] = LQ(FQ[tQ[1]]), QQ[tQ[4]] = QQ[-tQ[56]].length, QQ[tQ[28]] = tQ[1], FQ[-tQ[62]] = [], FQ[tQ[21]] = tQ[18]);
            (FQ[tQ[21]] = bQ()) !== tQ[61];) FQ[-tQ[62]].push(FQ[tQ[21]]);
          return qQ(FQ[-tQ[62]])
        }
        QQ[tQ[13]] = tQ[2], QQ[tQ[2]] = String.fromCharCode, sQ(QQ[-tQ[56]] = tQ[18], QQ[tQ[4]] = tQ[18], QQ[tQ[28]] = tQ[18]), sQ(QQ[tQ[1]].version = wQ(108), QQ[tQ[1]].encode = uQ, QQ[tQ[1]].decode = YQ)
      }(typeof exports === eQ(109) + eQ(110) ? this.utf8 = {} : exports)
    }();
    const pQ = qQ()[eQ(tQ[66])](),
      cQ = qQ()[eQ(tQ[66])](),
      CQ = qQ()[eQ(tQ[66])](),
      SQ = qQ()[eQ(tQ[66])](),
      iQ = qQ()[eQ(tQ[66])](),
      WQ = qQ()[eQ(tQ[66])](),
      RQ = qQ()[eQ(tQ[66])](),
      OQ = (QQ, FQ, wQ) => {
        function LQ(QQ) {
          return typeof kQ[QQ] === tQ[17] ? kQ[QQ] = function(...QQ) {
            for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[2]] = 'y6{/XCqPV}F0*5Mjs+92GnYi#bw4!,SBLOHkNl.I&z"~]U|7rgTcv1D%^xoAf[_m>u`)$@Zt3KRE;?Q(p8:d<JWahe=', QQ[tQ[21]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[4]] = QQ[tQ[21]].length, QQ[tQ[14]] = [], QQ[tQ[67]] = tQ[1], QQ[tQ[23]] = tQ[1], QQ[tQ[25]] = -tQ[2]), QQ[tQ[29]] = tQ[1]; QQ[tQ[29]] < QQ[tQ[4]]; QQ[tQ[29]]++)
              if (QQ[tQ[43]] = QQ[tQ[2]].indexOf(QQ[tQ[21]][QQ[tQ[29]]]), QQ[tQ[43]] !== -tQ[2])
                if (QQ[tQ[25]] < tQ[1]) QQ[tQ[25]] = QQ[tQ[43]];
                else {
                  sQ(QQ[tQ[25]] += QQ[tQ[43]] * tQ[31], QQ[tQ[67]] |= QQ[tQ[25]] << QQ[tQ[23]], QQ[tQ[23]] += (QQ[tQ[25]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                  do {
                    sQ(QQ[tQ[14]].push(QQ[tQ[67]] & tQ[12]), QQ[tQ[67]] >>= tQ[11], QQ[tQ[23]] -= tQ[11])
                  } while (QQ[tQ[23]] > tQ[25]);
                  QQ[tQ[25]] = -tQ[2]
                } return QQ[tQ[25]] > -tQ[2] && QQ[tQ[14]].push((QQ[tQ[67]] | QQ[tQ[25]] << QQ[tQ[23]]) & tQ[12]), MQ(QQ[tQ[14]])
          }(vQ[QQ]) : kQ[QQ]
        }
        const oQ = WQ;
        return qQ()[LQ(tQ[8]) + LQ(114)](oQ, wQ), qQ()[LQ(115)](QQ, oQ, qQ()[LQ(116)](oQ, FQ))
      };

    function sQ() {
      sQ = function() {}
    }
    DQ = (...QQ) => {
      function FQ(...QQ) {
        return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = function(...QQ) {
          for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[2]] = 'U(YthHNbgiKCJIL5`pZdDT4SyRQ@kEAaBs#jG9lc|fFPq70%X,$)oO3:eV^.zWu1xvm_>n=rM<?;62"w8{*}/[!+]&~', QQ[tQ[19]] = "" + (QQ[tQ[1]] || ""), QQ[-tQ[69]] = QQ[tQ[19]].length, QQ[-tQ[71]] = [], QQ[-tQ[46]] = tQ[1], QQ[tQ[68]] = tQ[1], QQ[tQ[25]] = -tQ[2]), QQ[tQ[11]] = tQ[1]; QQ[tQ[11]] < QQ[-tQ[69]]; QQ[tQ[11]]++)
            if (QQ[tQ[70]] = QQ[tQ[2]].indexOf(QQ[tQ[19]][QQ[tQ[11]]]), QQ[tQ[70]] !== -tQ[2])
              if (QQ[tQ[25]] < tQ[1]) QQ[tQ[25]] = QQ[tQ[70]];
              else {
                sQ(QQ[tQ[25]] += QQ[tQ[70]] * tQ[31], QQ[-tQ[46]] |= QQ[tQ[25]] << QQ[tQ[68]], QQ[tQ[68]] += (QQ[tQ[25]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                do {
                  sQ(QQ[-tQ[71]].push(QQ[-tQ[46]] & tQ[12]), QQ[-tQ[46]] >>= tQ[11], QQ[tQ[68]] -= tQ[11])
                } while (QQ[tQ[68]] > tQ[25]);
                QQ[tQ[25]] = -tQ[2]
              } return QQ[tQ[25]] > -tQ[2] && QQ[-tQ[71]].push((QQ[-tQ[46]] | QQ[tQ[25]] << QQ[tQ[68]]) & tQ[12]), MQ(QQ[-tQ[71]])
        }(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
      }
      QQ[tQ[13]] = tQ[11], FQ(117) + "0" in GQ && function() {
        var QQ = function(QQ) {
          sQ(this.MH = QQ, this.length = tQ[1], this.map = {}, this.head = tQ[72], this.tail = tQ[72])
        };
        sQ(QQ.prototype.get = function(QQ) {
          var FQ = this.map[QQ];
          return FQ ? (this.remove(FQ), this.insert(FQ.key, FQ.val), FQ.val) : -tQ[2]
        }, QQ.prototype.put = function(...QQ) {
          sQ(QQ[tQ[13]] = tQ[28], this.map[QQ[tQ[1]]] ? (this.remove(this.map[QQ[tQ[1]]]), this.insert(QQ[tQ[1]], QQ[tQ[2]])) : this.length === this.MH ? (this.remove(this.head), this.insert(QQ[tQ[1]], QQ[tQ[2]])) : (this.insert(QQ[tQ[1]], QQ[tQ[2]]), this.length++))
        }, QQ.prototype.remove = function(...QQ) {
          sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[47]] = QQ[tQ[1]].prev, QQ[tQ[73]] = QQ[tQ[1]].next), QQ[tQ[73]] && (QQ[tQ[73]].prev = QQ[tQ[47]]), QQ[tQ[47]] && (QQ[tQ[47]].next = QQ[tQ[73]]), this.head === QQ[tQ[1]] && (this.head = QQ[tQ[73]]), this.tail === QQ[tQ[1]] && (this.tail = QQ[tQ[47]]), delete this.map[QQ[tQ[1]].key]
        }, QQ.prototype.insert = function(...QQ) {
          sQ(QQ[tQ[13]] = tQ[28], QQ[tQ[47]] = new List(QQ[tQ[1]], QQ[tQ[2]]), this.tail ? (this.tail.next = QQ[tQ[47]], QQ[tQ[47]].prev = this.tail, this.tail = QQ[tQ[47]]) : (this.tail = QQ[tQ[47]], this.head = QQ[tQ[47]]), this.map[QQ[tQ[1]]] = QQ[tQ[47]])
        }, console.log(QQ))
      }();
      const wQ = QQ[tQ[1]][FQ(tQ[74])][FQ(tQ[55]) + FQ(120) + FQ(121)](QQ[tQ[2]]);
      QQ[-tQ[75]] = QQ[tQ[1]][FQ(tQ[74])][FQ(tQ[80]) + FQ(tQ[81]) + FQ(tQ[82]) + FQ(tQ[83])](wQ);
      const LQ = QQ[-tQ[75]] === tQ[72] ? QQ[tQ[1]][FQ(tQ[74])][FQ(tQ[88]) + FQ(tQ[59]) + FQ(tQ[46])](QQ[tQ[2]], FQ(tQ[76]) + FQ(tQ[9]) + FQ(tQ[77]) + tQ[44]) : QQ[-tQ[75]][FQ(tQ[76]) + FQ(tQ[9]) + FQ(tQ[77]) + tQ[44]],
        DQ = QQ[-tQ[75]] === tQ[72] ? QQ[tQ[1]][FQ(tQ[74])][FQ(tQ[0]) + FQ(tQ[84]) + FQ(tQ[56]) + FQ(tQ[85])](QQ[tQ[2]], FQ(tQ[78]) + FQ(tQ[58]) + FQ(tQ[79])) : QQ[-tQ[75]][FQ(tQ[78]) + FQ(tQ[58]) + FQ(tQ[79])];
      sQ(qQ()[FQ(139)](pQ, tQ[1], tQ[1], QQ[tQ[67]]), qQ().ek(pQ, pQ, qQ()[FQ(140)], QQ[tQ[20]].heading), qQ()[FQ(141)](RQ, QQ[tQ[19]].Qt), RQ[tQ[2]] = tQ[1]);
      const mQ = QQ[tQ[28]][FQ(142) + FQ(143)]();
      if (sQ(QQ[-tQ[75]] = QQ[tQ[1]][FQ(tQ[74])][FQ(tQ[80]) + FQ(tQ[81]) + FQ(tQ[82]) + FQ(tQ[83])](wQ), QQ[tQ[43]] = QQ[-tQ[75]] === tQ[72] ? QQ[tQ[1]][FQ(tQ[74])][FQ(tQ[0]) + FQ(tQ[84]) + FQ(tQ[56]) + FQ(tQ[85])](QQ[tQ[2]], FQ(tQ[86]) + FQ(tQ[87])) : QQ[-tQ[75]][FQ(tQ[86]) + FQ(tQ[87])]), !mQ && qQ()[tQ[96]](RQ) && (QQ[-tQ[75]] === tQ[72] ? QQ[tQ[1]][FQ(tQ[74])][FQ(tQ[88]) + FQ(tQ[59]) + FQ(tQ[46])](QQ[tQ[2]], FQ(tQ[89]) + FQ(tQ[90]) + FQ(tQ[91]) + FQ(tQ[92])) : QQ[-tQ[75]][FQ(tQ[89]) + FQ(tQ[90]) + FQ(tQ[91]) + FQ(tQ[92])])) {
        function xQ(QQ) {
          var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
          for (sQ(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = tQ[1], oQ = tQ[1], DQ = -tQ[2]), kQ = tQ[1]; kQ < wQ; kQ++) {
            var vQ = 's;WHBTIKoZMXDzYq$,Qc72m6(Fj8*+&]k3i}udJ5f~:)b/1C"L.#SpU<Re!A=lw|@vgrE>O0%^`aNVn_4?9{ht[PyGx'.indexOf(FQ[kQ]);
            if (vQ !== -tQ[2])
              if (DQ < tQ[1]) DQ = vQ;
              else {
                sQ(DQ += vQ * tQ[31], qQ |= DQ << oQ, oQ += (DQ & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                do {
                  sQ(LQ.push(qQ & tQ[12]), qQ >>= tQ[11], oQ -= tQ[11])
                } while (oQ > tQ[25]);
                DQ = -tQ[2]
              }
          }
          return DQ > -tQ[2] && LQ.push((qQ | DQ << oQ) & tQ[12]), MQ(LQ)
        }

        function AQ(...QQ) {
          return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = xQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
        }

        function eQ(...QQ) {
          function FQ(...QQ) {
            return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = function(...QQ) {
              for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[47]] = '79}j#pL_s$h1lV@5eQZStCH=GWfUPqcrB>X,vy%T.RuD{k(MI^bxi;J68&a2YNo?E:*z+d!n4F|w)A]`K0</~[Og"m3', QQ[-tQ[93]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[20]] = QQ[-tQ[93]].length, QQ[tQ[14]] = [], QQ[tQ[44]] = tQ[1], QQ[tQ[33]] = tQ[1], QQ[tQ[7]] = -tQ[2]), QQ[tQ[29]] = tQ[1]; QQ[tQ[29]] < QQ[tQ[20]]; QQ[tQ[29]]++)
                if (QQ[tQ[94]] = QQ[tQ[47]].indexOf(QQ[-tQ[93]][QQ[tQ[29]]]), QQ[tQ[94]] !== -tQ[2])
                  if (QQ[tQ[7]] < tQ[1]) QQ[tQ[7]] = QQ[tQ[94]];
                  else {
                    sQ(QQ[tQ[7]] += QQ[tQ[94]] * tQ[31], QQ[tQ[44]] |= QQ[tQ[7]] << QQ[tQ[33]], QQ[tQ[33]] += (QQ[tQ[7]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                    do {
                      sQ(QQ[tQ[14]].push(QQ[tQ[44]] & tQ[12]), QQ[tQ[44]] >>= tQ[11], QQ[tQ[33]] -= tQ[11])
                    } while (QQ[tQ[33]] > tQ[25]);
                    QQ[tQ[7]] = -tQ[2]
                  } return QQ[tQ[7]] > -tQ[2] && QQ[tQ[14]].push((QQ[tQ[44]] | QQ[tQ[7]] << QQ[tQ[33]]) & tQ[12]), MQ(QQ[tQ[14]])
            }(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
          }
          QQ[tQ[13]] = tQ[1], sQ(QQ[tQ[95]] = AQ(151) + FQ(152) + FQ(153) + FQ(154) + FQ(155), QQ[tQ[2]] = FQ(156) + FQ(157) + FQ(158) + FQ(159) + FQ(160) + FQ(161) + FQ(162), QQ[-tQ[77]] = FQ(163) + FQ(164) + FQ(165) + FQ(166) + FQ(167) + FQ(168), QQ[tQ[95]].match(QQ[tQ[2]] + QQ[-tQ[77]]))
        }
        AQ(150) + "N" in GQ && eQ(), sQ(OQ(cQ, pQ, RQ), OQ(CQ, RQ, pQ), qQ()[AQ(tQ[94])](SQ, RQ, CQ));
        const WQ = qQ()[AQ(170)](RQ),
          rQ = qQ()[AQ(tQ[71])](pQ, RQ) / QQ[tQ[67]] / WQ,
          IQ = Math[AQ(tQ[99])](rQ, tQ[1]) + tQ[2];
        if (QQ[tQ[67]] * QQ[tQ[67]] < qQ()[tQ[96]](CQ)) {
          function UQ(QQ) {
            var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
            for (sQ(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = tQ[1], oQ = tQ[1], DQ = -tQ[2]), kQ = tQ[1]; kQ < wQ; kQ++) {
              var vQ = 'eKsaQ&87W<xi>PBm9Z+30?HES]T%1)lrkoF6w4:5VnId#j`,t2~.[bL$XA_{pfCU;G|/(uv!}YR^h"*gz=MJyDcqON@'.indexOf(FQ[kQ]);
              if (vQ !== -tQ[2])
                if (DQ < tQ[1]) DQ = vQ;
                else {
                  sQ(DQ += vQ * tQ[31], qQ |= DQ << oQ, oQ += (DQ & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                  do {
                    sQ(LQ.push(qQ & tQ[12]), qQ >>= tQ[11], oQ -= tQ[11])
                  } while (oQ > tQ[25]);
                  DQ = -tQ[2]
                }
            }
            return DQ > -tQ[2] && LQ.push((qQ | DQ << oQ) & tQ[12]), MQ(LQ)
          }

          function NQ(...QQ) {
            return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = UQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
          }

          function TQ(...QQ) {
            QQ[tQ[13]] = tQ[1];
            const FQ = require("big-integer");
            sQ(QQ[tQ[4]] = class {
              static randomPrime(...QQ) {
                QQ[tQ[13]] = tQ[2];
                const wQ = FQ.one.shiftLeft(QQ[tQ[1]] - tQ[2]),
                  LQ = FQ.one.shiftLeft(QQ[tQ[1]]).prev();
                for (;;) {
                  let QQ = FQ.randBetween(wQ, LQ);
                  if (QQ.isProbablePrime(256)) return QQ
                }
              }
              static generate(...QQ) {
                QQ[tQ[13]] = tQ[2];
                const wQ = FQ(65537);
                let LQ, qQ;
                QQ[tQ[2]] = tQ[18];
                do {
                  sQ(LQ = this.randomPrime(QQ[tQ[1]] / tQ[28]), qQ = this.randomPrime(QQ[tQ[1]] / tQ[28]), QQ[tQ[2]] = FQ.lcm(LQ.prev(), qQ.prev()))
                } while (FQ.gcd(wQ, QQ[tQ[2]]).notEquals(tQ[2]) || LQ.minus(qQ).abs().shiftRight(QQ[tQ[1]] / tQ[28] - tQ[97]).isZero());
                return {
                  e: wQ,
                  n: LQ.multiply(qQ),
                  d: wQ.modInv(QQ[tQ[2]])
                }
              }
              static encrypt(...QQ) {
                return QQ[tQ[13]] = tQ[20], FQ(QQ[tQ[1]]).modPow(QQ[tQ[28]], QQ[tQ[2]])
              }
              static decrypt(...QQ) {
                return QQ[tQ[13]] = tQ[20], FQ(QQ[tQ[1]]).modPow(QQ[tQ[2]], QQ[tQ[28]])
              }
              static encode(...QQ) {
                QQ[tQ[13]] = tQ[2];
                const wQ = QQ[tQ[1]].split("").map((QQ => QQ.charCodeAt())).join("");
                return FQ(wQ)
              }
              static decode(...QQ) {
                QQ[tQ[13]] = tQ[2];
                const FQ = QQ[tQ[1]].toString();
                QQ[tQ[98]] = "";
                for (let wQ = tQ[1]; wQ < FQ.length; wQ += tQ[28]) {
                  let LQ = Number(FQ.substr(wQ, tQ[28]));
                  LQ <= 30 ? (QQ[tQ[98]] += String.fromCharCode(Number(FQ.substr(wQ, tQ[20]))), wQ++) : QQ[tQ[98]] += String.fromCharCode(LQ)
                }
                return QQ[tQ[98]]
              }
            }, module.exports = QQ[tQ[4]])
          }
          NQ(tQ[98]) in GQ && TQ(), qQ()[NQ(174)](pQ, pQ, CQ, IQ)
        }
        sQ(QQ[tQ[43]] = (0, oQ.x)(QQ[tQ[43]], 1, Math[AQ(tQ[99])](tQ[2], Math[AQ(tQ[102])](tQ[1], -rQ, tQ[2] - WQ / QQ[tQ[67]]))), qQ()[AQ(176)](pQ, pQ, SQ))
      }
      const uQ = iQ;
      if (sQ(qQ()[FQ(177)](uQ, pQ, RQ), uQ[tQ[2]] = tQ[1], QQ[-tQ[31]] = qQ()[FQ(178)](uQ)), !mQ) {
        function KQ(...QQ) {
          sQ(QQ[tQ[13]] = tQ[1], QQ[tQ[47]] = function(...QQ) {
            for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[47]] = QQ[tQ[1]].length, QQ[tQ[28]] = [], QQ[tQ[4]] = tQ[1], QQ[tQ[19]] = tQ[1], QQ[tQ[1]].sort(((QQ, FQ) => QQ - FQ))), QQ[tQ[67]] = tQ[1]; QQ[tQ[67]] < QQ[tQ[47]]; QQ[tQ[67]]++)
              if (!(QQ[tQ[67]] > tQ[1] && QQ[tQ[1]][QQ[tQ[67]]] === QQ[tQ[1]][QQ[tQ[67]] - tQ[2]]))
                for (sQ(QQ[tQ[4]] = QQ[tQ[67]] + tQ[2], QQ[tQ[19]] = QQ[tQ[47]] - tQ[2]); QQ[tQ[4]] < QQ[tQ[19]];)
                  if (QQ[tQ[1]][QQ[tQ[67]]] + QQ[tQ[1]][QQ[tQ[4]]] + QQ[tQ[1]][QQ[tQ[19]]] < tQ[1]) QQ[tQ[4]]++;
                  else if (QQ[tQ[1]][QQ[tQ[67]]] + QQ[tQ[1]][QQ[tQ[4]]] + QQ[tQ[1]][QQ[tQ[19]]] > tQ[1]) QQ[tQ[19]]--;
            else {
              for (QQ[tQ[28]].push([QQ[tQ[1]][QQ[tQ[67]]], QQ[tQ[1]][QQ[tQ[4]]], QQ[tQ[1]][QQ[tQ[19]]]]); QQ[tQ[4]] < QQ[tQ[19]] && QQ[tQ[1]][QQ[tQ[4]]] === QQ[tQ[1]][QQ[tQ[4]] + tQ[2]];) QQ[tQ[4]]++;
              for (; QQ[tQ[4]] < QQ[tQ[19]] && QQ[tQ[1]][QQ[tQ[19]]] === QQ[tQ[1]][QQ[tQ[19]] - tQ[2]];) QQ[tQ[19]]--;
              sQ(QQ[tQ[4]]++, QQ[tQ[19]]--)
            }
            return QQ[tQ[28]]
          }, console.log(QQ[tQ[47]]))
        }
        FQ(tQ[73]) in GQ && KQ(), QQ[-tQ[31]] *= QQ[tQ[43]]
      }
      const HQ = QQ[tQ[23]][FQ(180) + FQ(181) + FQ(tQ[75])],
        bQ = HQ ? Math[FQ(183)](HQ, QQ[-tQ[31]]) : QQ[-tQ[31]];
      qQ()[FQ(184) + FQ(185)](uQ, uQ);
      const YQ = QQ[tQ[25]] !== tQ[72] && void 0 !== QQ[tQ[25]] ? QQ[tQ[25]] : QQ[tQ[23]][FQ(186) + FQ(187) + FQ(188) + FQ(189)];
      if (bQ > tQ[1]) {
        function zQ(QQ) {
          var FQ, wQ, LQ, qQ, oQ, DQ, kQ;
          for (sQ(FQ = "" + (QQ || ""), wQ = FQ.length, LQ = [], qQ = tQ[1], oQ = tQ[1], DQ = -tQ[2]), kQ = tQ[1]; kQ < wQ; kQ++) {
            var vQ = 'u/v~9LwTDfWaKAV5X7,6|}1x4N$^%S<yFbIUzZi{j@QJE]#&mks8et.pPhd*OcYl[0H?:>M!"rB(qR;g`C=_G)2o+3n'.indexOf(FQ[kQ]);
            if (vQ !== -tQ[2])
              if (DQ < tQ[1]) DQ = vQ;
              else {
                sQ(DQ += vQ * tQ[31], qQ |= DQ << oQ, oQ += (DQ & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                do {
                  sQ(LQ.push(qQ & tQ[12]), qQ >>= tQ[11], oQ -= tQ[11])
                } while (oQ > tQ[25]);
                DQ = -tQ[2]
              }
          }
          return DQ > -tQ[2] && LQ.push((qQ | DQ << oQ) & tQ[12]), MQ(LQ)
        }

        function lQ(...QQ) {
          return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = zQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
        }
        let jQ = QQ[tQ[28]][lQ(190) + lQ(191)] * YQ;
        mQ || (jQ *= QQ[tQ[28]][lQ(tQ[52]) + lQ(193)]);
        let aQ = QQ[tQ[28]][lQ(194) + lQ(195) + "ss"] * bQ;
        if (bQ < .3) {
          function XQ(...QQ) {
            for (sQ(QQ[tQ[13]] = tQ[2], QQ[tQ[2]] = 'RJXymd?w`gYCq^*tA8S@VxNK~%BW>2,=&)9n!uir(DEj0zF|":;3]b.Op}[{h<_Q1v6$/GT4#7HIU5Ls+feMZPkoalc', QQ[tQ[21]] = "" + (QQ[tQ[1]] || ""), QQ[tQ[56]] = QQ[tQ[21]].length, QQ[tQ[19]] = [], QQ[tQ[44]] = tQ[1], QQ[tQ[54]] = tQ[1], QQ[-tQ[101]] = -tQ[2]), QQ[tQ[100]] = tQ[1]; QQ[tQ[100]] < QQ[tQ[56]]; QQ[tQ[100]]++)
              if (QQ[tQ[43]] = QQ[tQ[2]].indexOf(QQ[tQ[21]][QQ[tQ[100]]]), QQ[tQ[43]] !== -tQ[2])
                if (QQ[-tQ[101]] < tQ[1]) QQ[-tQ[101]] = QQ[tQ[43]];
                else {
                  sQ(QQ[-tQ[101]] += QQ[tQ[43]] * tQ[31], QQ[tQ[44]] |= QQ[-tQ[101]] << QQ[tQ[54]], QQ[tQ[54]] += (QQ[-tQ[101]] & tQ[34]) > tQ[35] ? tQ[36] : tQ[37]);
                  do {
                    sQ(QQ[tQ[19]].push(QQ[tQ[44]] & tQ[12]), QQ[tQ[44]] >>= tQ[11], QQ[tQ[54]] -= tQ[11])
                  } while (QQ[tQ[54]] > tQ[25]);
                  QQ[-tQ[101]] = -tQ[2]
                } return QQ[-tQ[101]] > -tQ[2] && QQ[tQ[19]].push((QQ[tQ[44]] | QQ[-tQ[101]] << QQ[tQ[54]]) & tQ[12]), MQ(QQ[tQ[19]])
          }

          function fQ(...QQ) {
            return QQ[tQ[13]] = tQ[2], typeof kQ[QQ[tQ[1]]] === tQ[17] ? kQ[QQ[tQ[1]]] = XQ(vQ[QQ[tQ[1]]]) : kQ[QQ[tQ[1]]]
          }

          function VQ(...QQ) {
            sQ(QQ[tQ[13]] = tQ[1], QQ[-tQ[102]] = function(...QQ) {
              if (sQ(QQ[tQ[13]] = tQ[2], QQ[-tQ[19]] = QQ[tQ[1]].length), QQ[-tQ[19]] < tQ[28]) return tQ[1];
              if (sQ(QQ[tQ[28]] = Math.max(...QQ[tQ[1]]), QQ[tQ[4]] = Math.min(...QQ[tQ[1]])), QQ[tQ[28]] === QQ[tQ[4]]) return tQ[1];
              for (sQ(QQ[-tQ[103]] = Array(QQ[-tQ[19]] - tQ[2]).fill(Number.MAX_SAFE_INTEGER), QQ[-tQ[101]] = Array(QQ[-tQ[19]] - tQ[2]).fill(Number.MIN_SAFE_INTEGER), QQ[tQ[33]] = Math.ceil((QQ[tQ[28]] - QQ[tQ[4]]) / (QQ[-tQ[19]] - tQ[2])), QQ[tQ[7]] = tQ[1]), QQ[tQ[29]] = tQ[1]; QQ[tQ[29]] < QQ[-tQ[19]]; QQ[tQ[29]]++) QQ[tQ[1]][QQ[tQ[29]]] !== QQ[tQ[4]] && QQ[tQ[1]][QQ[tQ[29]]] !== QQ[tQ[28]] && sQ(QQ[tQ[7]] = Math.floor((QQ[tQ[1]][QQ[tQ[29]]] - QQ[tQ[4]]) / QQ[tQ[33]]), QQ[-tQ[103]][QQ[tQ[7]]] = Math.min(QQ[-tQ[103]][QQ[tQ[7]]], QQ[tQ[1]][QQ[tQ[29]]]), QQ[-tQ[101]][QQ[tQ[7]]] = Math.max(QQ[-tQ[101]][QQ[tQ[7]]], QQ[tQ[1]][QQ[tQ[29]]]));
              for (sQ(QQ[-tQ[105]] = Number.MIN_SAFE_INTEGER, QQ[tQ[70]] = QQ[tQ[4]]), QQ[tQ[104]] = tQ[1]; QQ[tQ[104]] < QQ[-tQ[19]] - tQ[2]; QQ[tQ[104]]++) QQ[-tQ[103]][QQ[tQ[104]]] === Number.MAX_SAFE_INTEGER && QQ[-tQ[101]][QQ[tQ[104]]] === Number.MIN_SAFE_INTEGER || sQ(QQ[-tQ[105]] = Math.max(QQ[-tQ[105]], QQ[-tQ[103]][QQ[tQ[104]]] - QQ[tQ[70]]), QQ[tQ[70]] = QQ[-tQ[101]][QQ[tQ[104]]]);
              return QQ[-tQ[105]] = Math.max(QQ[-tQ[105]], QQ[tQ[28]] - QQ[tQ[70]]), QQ[-tQ[105]]
            }, console.log(QQ[-tQ[102]]))
          }
          fQ(196) in GQ && VQ(), aQ *= bQ
        }
        jQ > aQ && (jQ = aQ), sQ(qQ()[lQ(197)](uQ, uQ, jQ), QQ[tQ[19]][lQ(198) + lQ(199)](uQ))
      }
      QQ[tQ[19]][FQ(200) + tQ[106]] = QQ[tQ[28]][FQ(201) + FQ(tQ[9]) + tQ[106]] * (mQ ? LQ : DQ)
    }
  },
  37210: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ,
      f: () => kQ
    });
    var LQ = wQ(37212),
      qQ = wQ(1870);
    const oQ = 2,
      DQ = 1,
      kQ = {
        GD: 1,
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

    function vQ(QQ, FQ, wQ, kQ, vQ, mQ, uQ) {
      if (vQ.speed) return (0, LQ.c)(FQ, wQ, kQ, vQ, mQ, uQ, QQ), void(vQ.ticksToReachMaxIdleFriction = oQ);
      const HQ = kQ.isOnGround(),
        bQ = FQ.bloxd.getSyncedClientOptions(FQ.bloxd.getPlayerReader(wQ)),
        YQ = null === bQ ? FQ.bloxd.getClientPredictedOption(wQ, "groundFrictionScale") : bQ.groundFrictionScale,
        xQ = null === bQ ? FQ.bloxd.getClientPredictedOption(wQ, "airFrictionScale") : bQ.airFrictionScale,
        AQ = HQ ? YQ : xQ,
        tQ = Math.max(DQ, AQ),
        eQ = vQ.ticksToReachMaxIdleFriction / oQ,
        MQ = (0, qQ.x)(tQ, AQ, eQ);
      mQ.friction = QQ.standingFriction * ((null === bQ ? FQ.bloxd.getClientPredictedOption(wQ, "airMomentumConservation") : bQ.airMomentumConservation) ? MQ : AQ), vQ.ticksToReachMaxIdleFriction > 0 && vQ.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);