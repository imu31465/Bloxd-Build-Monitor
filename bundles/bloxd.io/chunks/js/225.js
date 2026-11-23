export const id = 225;
export const ids = [225];
export const modules = {
  38300: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => gC
    });
    var QC = ZC(184),
      wC = ZC(37496);
    const bC = 1.2,
      nC = {
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
        Mq: .5,
        PzC: !1
      },
      fC = {
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
        Mq: .5,
        PzC: !1
      },
      oC = {
        physicsBodyDimensions: {
          width: QC.f.tp,
          height: QC.f.Dp
        },
        hitBoxDimensions: {
          width: QC.f.tp + .4,
          height: QC.f.Dp + .6
        },
        eyeHeight: QC.f.Dp * QC.f.playerEyeToHeightRatio,
        rideHeight: QC.f.Dp - .3,
        Mq: .5,
        PzC: !1
      },
      qC = {
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
        Mq: .5,
        PzC: !1
      },
      FC = {
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
        Mq: .5,
        PzC: !1
      },
      WC = {
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
        Mq: .5,
        PzC: !1
      },
      NC = {
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
        Mq: .5,
        PzC: !1
      },
      MC = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: QC.f.tp,
            height: QC.f.Dp
          },
          hitBoxDimensions: {
            width: QC.f.tp + .4,
            height: QC.f.Dp + .6
          },
          eyeHeight: QC.f.Dp * QC.f.playerEyeToHeightRatio,
          rideHeight: QC.f.Dp - .1,
          Mq: wC.f.Mq,
          PzC: !0
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
        },
        Camel: {
          modelScale: bC,
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
        },
        "Cave Golem": nC,
        "Draugr Zombie": {
          ...oC,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": oC,
        "Frost Golem": nC,
        "Frost Zombie": {
          ...oC,
          defaultPose: "zombie"
        },
        "Frost Skeleton": oC,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: QC.f.tp,
            height: QC.f.Dp
          },
          hitBoxDimensions: {
            width: QC.f.tp + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Mq: .5,
          PzC: !1
        },
        Wolf: qC,
        Bear: FC,
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
          Mq: .5,
          PzC: !1
        },
        Stag: WC,
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
          Mq: .5,
          PzC: !1
        },
        Gorilla: NC,
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
          Mq: .5,
          PzC: !1
        },
        "Draugr Huntress": oC,
        "Magma Golem": nC,
        "Spirit Golem": nC,
        "Spirit Wolf": qC,
        "Spirit Bear": FC,
        "Spirit Stag": WC,
        "Spirit Gorilla": NC,
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: QC.f.tp,
            height: QC.f.Dp
          },
          hitBoxDimensions: {
            width: QC.f.tp + .4,
            height: QC.f.Dp + .6
          },
          eyeHeight: QC.f.Dp * QC.f.playerEyeToHeightRatio,
          rideHeight: QC.f.Dp - .1,
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: QC.f.tp,
            height: QC.f.Dp
          },
          hitBoxDimensions: {
            width: QC.f.tp + .4,
            height: QC.f.Dp + .6
          },
          eyeHeight: QC.f.Dp * QC.f.playerEyeToHeightRatio,
          rideHeight: QC.f.Dp - .1,
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
        },
        Zombie: {
          ...oC,
          defaultPose: "zombie"
        },
        Skeleton: oC,
        Mummy: {
          ...oC,
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
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
          Mq: .5,
          PzC: !1
        },
        "Iron Guardian": fC,
        "Gold Guardian": fC,
        "Diamond Guardian": fC,
        "Moonstone Guardian": fC,
        "Iron Goofy Golem": fC,
        "Gold Goofy Golem": fC,
        "Diamond Goofy Golem": fC,
        "Moonstone Goofy Golem": fC,
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
          Mq: .5,
          PzC: !1
        }
      };

    function gC(CC) {
      return MC[CC]
    }
  },
  36938: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
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
  37504: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(338),
      wC = ZC.n(QC),
      bC = ZC(1806);
    let nC;
    var fC, oC, qC, FC, WC, NC, MC, gC, SC;
    const pC = ["b", 0, 1, 8, "c", 140, 85, "g", "e", "f", "d", 255, "length", 3, "a", 89, "undefined", void 0, 4, 197, 23, 63, 6, "fromCodePoint", 7, 12, "push", 2, "h", 9, 91, 131, 8191, 88, 13, 14, 70, 82, 127, 77, 120, 237, 200, 165, 215, "i", 27, 248, 238, 37, 46, 181, 5, 29, 95, 115, 94, null, 106, 107, 108, 102, 103, 104, 105, 109, 110, 111, 121, 128, 125, 126, 75, 64, 241, 130, "nf", 68, 227, 211, 185, 228, 100, 38, "s", 133, 113, 86, 123, 112, 41, 47, 203, 101, 157, 16, "n", 512, 256, 160, 15, 150, 69, 55, 35, 42, 194, 1023, 31, 18, 114, 49, 32, 24, 10, 19, 50, 65535, "on"];

    function PC(...CC) {
      return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
        for (YC(CC[pC[12]] = pC[2], CC[-pC[5]] = 'C0w}[Do()ex8%fp~/1iVvzgRu<>*SE9=.a{|WPh:Njmtqy2Z`b63!B4JnLd5l$HKkQX7sU^,Yc?&FIM@#A"rT;G_]+O', CC[pC[0]] = "" + (CC[pC[1]] || ""), CC[pC[4]] = CC[pC[0]].length, CC[pC[10]] = [], CC[pC[8]] = pC[1], CC[pC[9]] = pC[1], CC[pC[7]] = -pC[2]), CC[pC[3]] = pC[1]; CC[pC[3]] < CC[pC[4]]; CC[pC[3]]++)
          if (CC[-pC[6]] = CC[-pC[5]].indexOf(CC[pC[0]][CC[pC[3]]]), CC[-pC[6]] !== -pC[2])
            if (CC[pC[7]] < pC[1]) CC[pC[7]] = CC[-pC[6]];
            else {
              YC(CC[pC[7]] += CC[-pC[6]] * pC[30], CC[pC[8]] |= CC[pC[7]] << CC[pC[9]], CC[pC[9]] += (CC[pC[7]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
              do {
                YC(CC[pC[10]].push(CC[pC[8]] & pC[11]), CC[pC[8]] >>= pC[3], CC[pC[9]] -= pC[3])
              } while (CC[pC[9]] > pC[24]);
              CC[pC[7]] = -pC[2]
            } return CC[pC[7]] > -pC[2] && CC[pC[10]].push((CC[pC[8]] | CC[pC[7]] << CC[pC[9]]) & pC[11]), GC(CC[pC[10]])
      }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
    }

    function GC(...CC) {
      return CC[pC[12]] = pC[2], typeof FC !== pC[16] && FC ? (new FC).decode(new WC(CC[pC[1]])) : typeof NC !== pC[16] && NC ? NC.from(CC[pC[1]]).toString("utf-8") : SC(CC[pC[1]])
    }

    function RC(...CC) {
      if (CC[pC[12]] = pC[13], CC[pC[1]] === function(...CC) {
          return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
            for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = 'E/aMDlR5Wiz#j8uZ}]Sn6=O1.K3@|INTmAUV<pv*JBq(H`ybCwGf_kFgX9[^eQLPs%Ytc?ho)d!x~&+"$0,4>:;7{2r', CC[pC[27]] = "" + (CC[pC[1]] || ""), CC[pC[4]] = CC[pC[27]].length, CC[-pC[36]] = [], CC[-pC[31]] = pC[1], CC[pC[22]] = pC[1], CC[pC[24]] = -pC[2]), CC[pC[28]] = pC[1]; CC[pC[28]] < CC[pC[4]]; CC[pC[28]]++)
              if (CC[pC[29]] = CC[pC[2]].indexOf(CC[pC[27]][CC[pC[28]]]), CC[pC[29]] !== -pC[2])
                if (CC[pC[24]] < pC[1]) CC[pC[24]] = CC[pC[29]];
                else {
                  YC(CC[pC[24]] += CC[pC[29]] * pC[30], CC[-pC[31]] |= CC[pC[24]] << CC[pC[22]], CC[pC[22]] += (CC[pC[24]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                  do {
                    YC(CC[-pC[36]].push(CC[-pC[31]] & pC[11]), CC[-pC[31]] >>= pC[3], CC[pC[22]] -= pC[3])
                  } while (CC[pC[22]] > pC[24]);
                  CC[pC[24]] = -pC[2]
                } return CC[pC[24]] > -pC[2] && CC[-pC[36]].push((CC[-pC[31]] | CC[pC[24]] << CC[pC[22]]) & pC[11]), GC(CC[-pC[36]])
          }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
        }(81) + pC[96]) return CC[pC[2]] + CC[pC[27]]
    }

    function AC() {}
    YC(fC = {}, oC = ["?1fxlY70", "&m7B]L1jD", "Gcb*0WcEW4]A,p~>D>d3ph}&mHS(=p]m2o:cXAC", "pL(okdc3Hiy5+uQP:,>&|&w9(k|", "C20&IA~V|4d#fD+|.P!I:4999XfYk5QP*2L._!qw", "o%]b8`6GT438`*p", '}llIPs"#Qeo"|67iM3wYhcs%TV3UW,9u', ">v6Y9!A|l8|FC", "@S*E}@*B|kPSv*k9[[;,CWm9Jfm", '6LZ[msWi&nwYvZ+SFp:SZK3|"K!X^Um<b%>*5IC', "0LoJj|W%Rd&2!5D<~K2!a5`ioJ}*xDkmTC", "R,s?NnD<2)`(9Dm:I8Ao", 'VKgaB"v25v$I5h0RFs&IF`70', "fL}.m#qiq1j5%:7<yLWJJ2,jMnU^k[C13Qf=msmN<v", "2L[6[`L&PfmHjY:PBN0ou,{w", "Wo&I#,b|2z(@|w_{DtX3b3Hu.l/H>$x", "t,%E[YJR^dEF^<s1Wl@4GaqN7VuJ#rqh[t}", "Vlb)pLqd.iUcvZ*1wXb*>h80", '5,j.CT#NCK]l~6?h=lWE"W3V@i&7BYJ{/lUFs?#ojvuJL`+/f0', "vo6))A/d`X:FC`}idpQ3,6#N1X7<$u*E)L3)#LwurL:", "sR9[u5?258", ">li&QBC", "+Q;!f6yVwK{XJp?V<4KbjZ#?X%:(vZ=1qRCo+ZBjofa=8w(u", '1%|E{s"{Jfd.wDkP{sKb9,cLwl`[#}', "Ly{E1LX2skvu_^6S]5tx", "GQno9N#u!LcEC~ZNUy{*6bN9#ln[L`GNbLtxrMuw(", 'F=!Eq"Y2/it5*hoh34.*BIL;2i=Hnr:h$v(!x?h9K)vU0', "%?uMILhi>5XI>pxv]HyJgLc(=l0eRw79|RM!@WH99K=uJd0ti,M=X?>w", "73A45{&0!eq}Q`&:5`=!wY|K#%k(XP$EU4Ze", '_:o!4KgW"l7c0/o', "tQNc/HSG$B4#AY0txb63_6S!F):`&p|P8,.efrR0", "7sq=jb@EAeQ<n5Omd4Ca`s^?AeDRVpKmt?Ye.!O2Yf", "#=/9,laErl3cZ^.W}4$xb:#2ep^.Q[bN(RJeOaJETeyS0", "w|14W$&fCX<J^bYi)i9=6Tr|7e*Y)})PFPG(+r`iFBp@M>7P,4kc^{vu(", "tP)o+ZM!8HBUVrPPMvKFn2@3CX5zT|,h8,WEh;+j`zD@MhC9Db+.fL|E!4:50", "cHJcnKO2M)odI[YhUH9FHT]HAKgH/~0m%RB?kl,&zf^0/,4j}Xa&0GIEH)", "No&E.,h%.i??0", '.ekcTrh9Vlap_pHuMQ_eXH&judE=:wI*(4MF6".9EH4c}r*RsC', "p,s(#L2N`XjH6P1N", "Tc:cd3C", "m1v?<NrU&1Ii$[a9b4R!;y10r4?iQY%hS{6)y$:fN1", '"3d)Vrrf6eR@r~auCbh!]L#o$5|Y`[', 'Jy4F:":V&)GE|wYVQ4$!}`A;W44', "H42S1,8Ay5[4tw|iCXsDjnjZveM0w$CW.okb@,ALXl>HyY+E*4.b*r5K[", "as&Ehn$E#%", "BQ,S[Y1(yXO7T[q<{41o4dcfnfpxAux<%i[E<!i!D", "j>o=|5C", "#H(e`KCu/%bcxAj=Ps7I$Be(jHA^YrFh+H)4v5b0hVt|l}u|L4!J9", "J{@STrb&FH7c{f[=y,r?;L(Bi~_g!r]{5>O.gLZ|ZzvPz/4N9{,cTrp)[", 'YQs>%WA(1K/15"!Su~K!W;,(j1.UOh8V', "CXK!%ru27k5", "/No!n2C", "92>&${PZ;fHiu}oV<2W?CT;ED", "g%<4gM@3tQN1!5,h>.YoY{R|HnC*A[", "9eFIt$?%]v", "o>a3iFlwsV", "IQ_Fz,fZkKM^elOm:L&)/J*BpzyJc[", "cv5If`=j#Bb10Y[=:>TB*N>!|%xf>$)", '@Q=c94#{28*3@^!*q1h[P$*&81KKDlCi>tua/WW?"lr82<iva37)', "b}e*hb((y56", "oLW($BUj$BMn*wdWry09@h222Xi{0", "6PfJRhn#j1Co}>.u_yCo]ZyZ55E(&hsiz?lEphOH_f|FE$Cilvw", "z~7BJ2^9qpRFb/;{xbN4w2e0", '%sBSSr"Nd8@[C**ER>j*:cL;#%|FIu.1X`4SP&X23Vv}R"5RD4wE,W,f"4*', "BLOE@rvdO1}ZIY=PXS?.9ZB|8Q&|k~e", "SPtE}?/WWL+kw<}i+Q.b[2v){4G7}h8h+`Yo:bko.lu", "d{A3K{/d6K:SWre:f%:bCl,f5vG^0", "PlI6J@S!I8D3q})>&ob*h$=&+1L^{^*Ri0", "G^#4^B9u|LT<y[+/Y1&.QT1(+pF2HbZ:y,V.XH~0", '_ml?,lM?I5"i9Dvj]){.x6E|1e=UMpy:dNJe', "9N,eoU9#Ez@bH<CE#C", "kPZ!Z&_1{4i{/r5jSRN94n!2$iEx!5HWSeWEk@(<3kZX%5e", "8%.c;a[d|LwPpD.Pq>8I?HEVq)yXl*/{", "CN/aVUs%oVL[2$%", "%L<&]!AjBk:1<Ysuk5zFxGbj[L]lS*b:0|D6(A/w", "F=3YBPZ0ZX#<`}", "Iyl(]670/~r<QuR{8>U62P>k?pTnmb[t#^;>PbHu`X3(TZLSL`0", "BoUx,@?N}", 'to/4@Ak%~%xY>pc>&{^="UHuEXpYAl:V8Ri.?L$E"lz1=6XWJC', 'jHF>5^5ZZnb=x$hP"y)9[HC', "Qo&BB:Xi}l:cRr~>>{<9MUfBedZbXPJ{t1u4WNC", "#{3)y,&/", "X3h=IAvw", "a)J)Es6i", "c=eF|woi", "C)`T", ">}eT3*a", "C=2B", "J[5JnxuI", "ughn@;lc", "J%y|#+o~T46`0q,()2WO77[<YSru]D,(YkUxY)J&bIuE5j)%D%L$O", "beidZUDPH?)[K*lNr^z7oo_}xtO96RlN[|+@MM(~rZ)`p3KYT=", "q9>heZ{_mp5,S^|]]9rvcjeb)M!OIeNcTd;Os", "g,|b", "3N.[qZf", "7dtE53?6", '"d,=9+?6', "dd:E", "7dPjF;!6", "gd_3?3o6", "S}Pj*yx6", "wTXjo", "7dPj?3o6", 'S}tE"@X6', "!mOBw+76", "@SOwwy!6", "Zu4w&j76", "<u+3j2o6", "=}jcvPN6", "Mm,=J@o6", "w#+3qjsI", "/00wi", "KdtE", ":dPc%", "mTMwK", "=Qlutx`6", "4q1[i", "7dPjF;4%,", "J?z:ncl@,", "TT8[dc%2,", "Mmuw]U56", "w[uBK+f", "7dPj?3}K<%", "m`xw=Zr%aX", "J?*,221{<%", 'Mmuwiy"6', "S}Ow*3TI", "=}Gw~@Q6", "K#+3qjf", "<QW]w;jI", "kMQs", "IGzh", "5<tX", "Vbzh", "(Bf%oqWL", "8*A~[", "xlWX", "DoZs", "_qGB", "9dXjy2m6", "IAkE`/H6", '"?Z322?6', "G[)B", ">m1[", "<Tuw>PN6", "4c)B", '"T)w;3X6', "T#1]T@56", "&<oE@2o6", "lNZ_~@f", "+TB}+ZrG", "$2mvs`cG", "Jom1", "IuKzU3nF", 'P,"5', "Dujp_rk!FE8mrsyrI2{5", "6$5#76{GV%<&+q@II{Bp", "5O]ia~7,pZ)V<yh?6i@5", "eKNpjiF645D9a0#I6u(5", "S)v7i?bF", ")n>9tT_N", "G6RGvFVN", "a.b`<", "G6RG*lK1", "Ds>Bq", 'Uzp|}4H!}9GY`4O5|2y`.9d"#j', '!E6:^3m]cGRB6"alrd`ZN~(Miy', "gH]Tkb&}G*)b>]!Gqu$^q1#HRF", "cvyl^/Cx", "w>%MK.#", '["a|5j&G', "0emv=M<G", "RoP1rTN", "9sXo$W`g", "jPL/E", "Uu+3j2o6", '"T)wGjW6']), YC(qC = function(...CC) {
      YC(CC[pC[12]] = pC[1], CC[pC[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], CC[pC[2]] = pC[17], CC[pC[4]] = []);
      try {
        YC(CC[pC[2]] = Object, CC[pC[4]][pC[26]]("".__proto__.constructor.name))
      } catch (oC) {}
      CC: for (CC[pC[13]] = pC[1]; CC[pC[13]] < CC[pC[14]][pC[12]]; CC[pC[13]]++) try {
        for (CC[pC[2]] = CC[pC[14]][CC[pC[13]]](), CC[pC[15]] = pC[1]; CC[pC[15]] < CC[pC[4]][pC[12]]; CC[pC[15]]++)
          if (typeof CC[pC[2]][CC[pC[4]][CC[pC[15]]]] === pC[16]) continue CC;
        return CC[pC[2]]
      } catch (oC) {}
      return CC[pC[2]] || this
    }() || {}, FC = qC.TextDecoder, WC = qC.Uint8Array, NC = qC.gg, MC = qC.String || String, gC = qC.Array || Array, SC = function(...CC) {
      return YC(CC[pC[12]] = pC[1], CC[pC[14]] = new gC(pC[69]), CC[pC[2]] = MC[pC[23]] || MC.fromCharCode, CC[pC[4]] = []),
        function(...zC) {
          for (YC(zC[pC[12]] = pC[2], zC[pC[2]] = pC[17], zC[pC[20]] = pC[17], zC[-pC[19]] = zC[pC[1]][pC[12]], CC[pC[4]][pC[12]] = pC[1]), zC[pC[18]] = pC[1]; zC[pC[18]] < zC[-pC[19]];) YC(zC[pC[20]] = zC[pC[1]][zC[pC[18]]++], zC[pC[20]] <= pC[38] ? zC[pC[2]] = zC[pC[20]] : zC[pC[20]] <= 223 ? zC[pC[2]] = (zC[pC[20]] & pC[108]) << pC[22] | zC[pC[1]][zC[pC[18]]++] & pC[21] : zC[pC[20]] <= 239 ? zC[pC[2]] = (zC[pC[20]] & pC[100]) << pC[25] | (zC[pC[1]][zC[pC[18]]++] & pC[21]) << pC[22] | zC[pC[1]][zC[pC[18]]++] & pC[21] : MC[pC[23]] ? zC[pC[2]] = (zC[pC[20]] & pC[24]) << pC[109] | (zC[pC[1]][zC[pC[18]]++] & pC[21]) << pC[25] | (zC[pC[1]][zC[pC[18]]++] & pC[21]) << pC[22] | zC[pC[1]][zC[pC[18]]++] & pC[21] : (zC[pC[2]] = pC[21], zC[pC[18]] += pC[13]), CC[pC[4]][pC[26]](CC[pC[14]][zC[pC[2]]] || (CC[pC[14]][zC[pC[2]]] = CC[pC[2]](zC[pC[2]]))));
          return CC[pC[4]].join("")
        }
    }());
    const xC = wC()[PC(pC[37])](),
      JC = wC()[PC(pC[37])](),
      IC = wC()[PC(pC[37])](),
      iC = wC()[PC(pC[37])](),
      vC = wC()[PC(pC[37])](),
      eC = wC()[PC(pC[37])](),
      hC = wC()[PC(pC[37])](),
      KC = (...CC) => {
        function zC(...CC) {
          return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
            for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = 'aAi{jGR9T}B^NK[+YQ$!v2#IxltC~M3gFnofscV,OdP=D1r|(8]e"W:;5hL<6USH>yb_wZz*X4)ku&@E%p0`Jm?7./q', CC[pC[0]] = "" + (CC[pC[1]] || ""), CC[-pC[39]] = CC[pC[0]].length, CC[pC[38]] = [], CC[pC[8]] = pC[1], CC[-pC[41]] = pC[1], CC[pC[24]] = -pC[2]), CC[pC[28]] = pC[1]; CC[pC[28]] < CC[-pC[39]]; CC[pC[28]]++)
              if (CC[-pC[40]] = CC[pC[2]].indexOf(CC[pC[0]][CC[pC[28]]]), CC[-pC[40]] !== -pC[2])
                if (CC[pC[24]] < pC[1]) CC[pC[24]] = CC[-pC[40]];
                else {
                  YC(CC[pC[24]] += CC[-pC[40]] * pC[30], CC[pC[8]] |= CC[pC[24]] << CC[-pC[41]], CC[-pC[41]] += (CC[pC[24]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                  do {
                    YC(CC[pC[38]].push(CC[pC[8]] & pC[11]), CC[pC[8]] >>= pC[3], CC[-pC[41]] -= pC[3])
                  } while (CC[-pC[41]] > pC[24]);
                  CC[pC[24]] = -pC[2]
                } return CC[pC[24]] > -pC[2] && CC[pC[38]].push((CC[pC[8]] | CC[pC[24]] << CC[-pC[41]]) & pC[11]), GC(CC[pC[38]])
          }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
        }
        CC[pC[12]] = pC[13], zC(83) + "m" in AC && function(...CC) {
          CC[pC[12]] = pC[1]
        }();
        const ZC = eC;
        return wC()[zC(84) + zC(pC[6])](ZC, CC[pC[27]]), wC()[zC(pC[87])](CC[pC[1]], ZC, wC()[zC(87)](ZC, CC[pC[2]]))
      };

    function YC() {
      YC = function() {}
    }
    nC = (...CC) => {
      function zC(...CC) {
        return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
          for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = 'fI60A:,^B[Eh?ngd5r7%Xte9Wim4oFK_wJNM"<!p}~aTvS`>HRxuDkQ=Y#|Gqb&V1CLOPUZ+.]cs3jy8@2/)z;{($*l', CC[-pC[44]] = "" + (CC[pC[1]] || ""), CC[pC[4]] = CC[-pC[44]].length, CC[pC[29]] = [], CC[pC[46]] = pC[1], CC[pC[22]] = pC[1], CC[pC[7]] = -pC[2]), CC[pC[28]] = pC[1]; CC[pC[28]] < CC[pC[4]]; CC[pC[28]]++)
            if (CC[pC[45]] = CC[pC[2]].indexOf(CC[-pC[44]][CC[pC[28]]]), CC[pC[45]] !== -pC[2])
              if (CC[pC[7]] < pC[1]) CC[pC[7]] = CC[pC[45]];
              else {
                YC(CC[pC[7]] += CC[pC[45]] * pC[30], CC[pC[46]] |= CC[pC[7]] << CC[pC[22]], CC[pC[22]] += (CC[pC[7]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                do {
                  YC(CC[pC[29]].push(CC[pC[46]] & pC[11]), CC[pC[46]] >>= pC[3], CC[pC[22]] -= pC[3])
                } while (CC[pC[22]] > pC[24]);
                CC[pC[7]] = -pC[2]
              } return CC[pC[7]] > -pC[2] && CC[pC[29]].push((CC[pC[46]] | CC[pC[7]] << CC[pC[22]]) & pC[11]), GC(CC[pC[29]])
        }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
      }
      CC[pC[12]] = pC[3], zC(pC[33]) in AC && function(...CC) {
        CC[pC[12]] = pC[1]
      }();
      const ZC = CC[pC[1]][zC(pC[56])][zC(pC[54]) + zC(96) + zC(97)](CC[pC[2]]);
      CC[pC[14]] = CC[pC[1]][zC(pC[56])][zC(98) + zC(99) + zC(pC[82]) + zC(pC[93])](ZC);
      const QC = CC[pC[14]] === pC[57] ? CC[pC[1]][zC(pC[56])][zC(pC[61]) + zC(pC[62]) + zC(pC[63]) + zC(pC[64])](CC[pC[2]], zC(pC[58]) + zC(pC[59]) + zC(pC[60]) + pC[8]) : CC[pC[14]][zC(pC[58]) + zC(pC[59]) + zC(pC[60]) + pC[8]],
        nC = CC[pC[14]] === pC[57] ? CC[pC[1]][zC(pC[56])][zC(pC[61]) + zC(pC[62]) + zC(pC[63]) + zC(pC[64])](CC[pC[2]], zC(pC[65]) + zC(pC[66]) + zC(pC[67])) : CC[pC[14]][zC(pC[65]) + zC(pC[66]) + zC(pC[67])];
      YC(wC()[zC(pC[89])](xC, pC[1], pC[1], CC[pC[52]]), wC().mo(xC, xC, wC()[zC(pC[86])], CC[pC[13]].heading), wC()[zC(pC[110])](hC, CC[pC[18]].Np), hC[pC[2]] = pC[1]);
      const qC = CC[pC[27]][zC(pC[55]) + zC(116)]();
      if (YC(CC[pC[14]] = CC[pC[1]][zC(pC[56])][zC(117) + zC(118) + zC(119) + pC[84]](ZC), CC[pC[29]] = CC[pC[14]] === pC[57] ? CC[pC[1]][zC(pC[56])][zC(pC[61]) + zC(pC[62]) + zC(pC[63]) + zC(pC[64])](CC[pC[2]], zC(pC[40]) + zC(pC[68])) : CC[pC[14]][zC(pC[40]) + zC(pC[68])]), !qC && wC()[pC[76]](hC) && (CC[pC[14]] === pC[57] ? CC[pC[1]][zC(pC[56])][zC(122) + zC(pC[88]) + zC(124)](CC[pC[2]], zC(pC[70]) + zC(pC[71]) + zC(pC[38]) + zC(pC[69])) : CC[pC[14]][zC(pC[70]) + zC(pC[71]) + zC(pC[38]) + zC(pC[69])])) {
        function gC(...CC) {
          for (YC(CC[pC[12]] = pC[2], CC[-pC[74]] = 'cxA#l]PwshXUo%[Gmg&^9t{I:rb5RD*k(Tyv=47@J/2<ud>VKp.Y,W$qf|!QMC}nzB;N3FSeH8~ZEj?_L"+O1i6a)0`', CC[pC[27]] = "" + (CC[pC[1]] || ""), CC[pC[73]] = CC[pC[27]].length, CC[-pC[75]] = [], CC[pC[52]] = pC[1], CC[pC[22]] = pC[1], CC[pC[7]] = -pC[2]), CC[pC[72]] = pC[1]; CC[pC[72]] < CC[pC[73]]; CC[pC[72]]++)
            if (CC[pC[29]] = CC[-pC[74]].indexOf(CC[pC[27]][CC[pC[72]]]), CC[pC[29]] !== -pC[2])
              if (CC[pC[7]] < pC[1]) CC[pC[7]] = CC[pC[29]];
              else {
                YC(CC[pC[7]] += CC[pC[29]] * pC[30], CC[pC[52]] |= CC[pC[7]] << CC[pC[22]], CC[pC[22]] += (CC[pC[7]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                do {
                  YC(CC[-pC[75]].push(CC[pC[52]] & pC[11]), CC[pC[52]] >>= pC[3], CC[pC[22]] -= pC[3])
                } while (CC[pC[22]] > pC[24]);
                CC[pC[7]] = -pC[2]
              } return CC[pC[7]] > -pC[2] && CC[-pC[75]].push((CC[pC[52]] | CC[pC[7]] << CC[pC[22]]) & pC[11]), GC(CC[-pC[75]])
        }

        function SC(...CC) {
          return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = gC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
        }

        function PC(...CC) {
          var zC;
          YC(CC[pC[12]] = pC[1], zC = function(...CC) {
            YC(CC[pC[12]] = pC[2], this.HW = CC[pC[1]], this.length = pC[1], this.map = {}, this.head = pC[57], this.tail = pC[57])
          }, zC.prototype.get = function(...CC) {
            var zC;
            return YC(CC[pC[12]] = pC[2], zC = this.map[CC[pC[1]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -pC[2]
          }, zC.prototype.put = function(...CC) {
            YC(CC[pC[12]] = pC[27], this.map[CC[pC[1]]] ? (this.remove(this.map[CC[pC[1]]]), this.insert(CC[pC[1]], CC[pC[2]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[pC[1]], CC[pC[2]])) : (this.insert(CC[pC[1]], CC[pC[2]]), this.length++))
          }, zC.prototype.remove = function(...CC) {
            YC(CC[pC[12]] = pC[2], CC[pC[14]] = CC[pC[1]].prev, CC[pC[56]] = CC[pC[1]].next), CC[pC[56]] && (CC[pC[56]].prev = CC[pC[14]]), CC[pC[14]] && (CC[pC[14]].next = CC[pC[56]]), this.head === CC[pC[1]] && (this.head = CC[pC[56]]), this.tail === CC[pC[1]] && (this.tail = CC[pC[14]]), delete this.map[CC[pC[1]].key]
          }, zC.prototype.insert = function(...CC) {
            YC(CC[pC[12]] = pC[27], CC[pC[14]] = new List(CC[pC[1]], CC[pC[2]]), this.tail ? (this.tail.next = CC[pC[14]], CC[pC[14]].prev = this.tail, this.tail = CC[pC[14]]) : (this.tail = CC[pC[14]], this.head = CC[pC[14]]), this.map[CC[pC[1]]] = CC[pC[14]])
          }, console.log(zC))
        }
        zC(129) + "0" in AC && PC(), YC(KC(JC, xC, hC), KC(IC, hC, xC), wC()[SC(pC[75])](iC, hC, IC));
        const eC = wC()[SC(pC[31])](hC),
          dC = wC()[SC(132)](xC, hC) / CC[pC[52]] / eC,
          mC = Math[SC(pC[85])](dC, pC[1]) + pC[2];
        if (CC[pC[52]] * CC[pC[52]] < wC()[pC[76]](IC)) {
          function HC(...CC) {
            for (YC(CC[pC[12]] = pC[2], CC[pC[78]] = '`ZLhIASOcx~mXv}*W24uzQ)8/H,w[(1f3r:F]>_j&6lB?R+70dUK%T<J@5gy$iq;b{DY!|.e^"#oG9MCsEnP=pkatNV', CC[pC[0]] = "" + (CC[pC[1]] || ""), CC[pC[4]] = CC[pC[0]].length, CC[pC[81]] = [], CC[pC[8]] = pC[1], CC[pC[80]] = pC[1], CC[pC[79]] = -pC[2]), CC[pC[77]] = pC[1]; CC[pC[77]] < CC[pC[4]]; CC[pC[77]]++)
              if (CC[pC[29]] = CC[pC[78]].indexOf(CC[pC[0]][CC[pC[77]]]), CC[pC[29]] !== -pC[2])
                if (CC[pC[79]] < pC[1]) CC[pC[79]] = CC[pC[29]];
                else {
                  YC(CC[pC[79]] += CC[pC[29]] * pC[30], CC[pC[8]] |= CC[pC[79]] << CC[pC[80]], CC[pC[80]] += (CC[pC[79]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                  do {
                    YC(CC[pC[81]].push(CC[pC[8]] & pC[11]), CC[pC[8]] >>= pC[3], CC[pC[80]] -= pC[3])
                  } while (CC[pC[80]] > pC[24]);
                  CC[pC[79]] = -pC[2]
                } return CC[pC[79]] > -pC[2] && CC[pC[81]].push((CC[pC[8]] | CC[pC[79]] << CC[pC[80]]) & pC[11]), GC(CC[pC[81]])
          }

          function EC(...CC) {
            return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = HC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
          }

          function lC(...CC) {
            CC[pC[12]] = pC[1];
            const zC = require("big-integer");
            YC(CC[pC[14]] = class {
              static randomPrime(...CC) {
                CC[pC[12]] = pC[2];
                const ZC = zC.one.shiftLeft(CC[pC[1]] - pC[2]),
                  QC = zC.one.shiftLeft(CC[pC[1]]).prev();
                for (;;) {
                  let CC = zC.randBetween(ZC, QC);
                  if (CC.isProbablePrime(pC[98])) return CC
                }
              }
              static generate(...CC) {
                CC[pC[12]] = pC[2];
                const ZC = zC(65537);
                let QC, wC;
                CC[pC[2]] = pC[17];
                do {
                  YC(QC = this.randomPrime(CC[pC[1]] / pC[27]), wC = this.randomPrime(CC[pC[1]] / pC[27]), CC[pC[2]] = zC.lcm(QC.prev(), wC.prev()))
                } while (zC.gcd(ZC, CC[pC[2]]).notEquals(pC[2]) || QC.minus(wC).abs().shiftRight(CC[pC[1]] / pC[27] - pC[82]).isZero());
                return {
                  e: ZC,
                  n: QC.multiply(wC),
                  d: ZC.modInv(CC[pC[2]])
                }
              }
              static encrypt(...CC) {
                return CC[pC[12]] = pC[13], zC(CC[pC[1]]).modPow(CC[pC[27]], CC[pC[2]])
              }
              static decrypt(...CC) {
                return CC[pC[12]] = pC[13], zC(CC[pC[1]]).modPow(CC[pC[2]], CC[pC[27]])
              }
              static encode(...CC) {
                CC[pC[12]] = pC[2];
                const ZC = CC[pC[1]].split("").map((CC => CC.charCodeAt())).join("");
                return zC(ZC)
              }
              static decode(...CC) {
                CC[pC[12]] = pC[2];
                const zC = CC[pC[1]].toString();
                CC[pC[83]] = "";
                for (let ZC = pC[1]; ZC < zC.length; ZC += pC[27]) {
                  let QC = Number(zC.substr(ZC, pC[27]));
                  QC <= 30 ? (CC[pC[83]] += String.fromCharCode(Number(zC.substr(ZC, pC[13]))), ZC++) : CC[pC[83]] += String.fromCharCode(QC)
                }
                return CC[pC[83]]
              }
            }, module.exports = CC[pC[14]])
          }
          EC(134) in AC && lC(), wC()[EC(135)](xC, xC, IC, mC)
        }
        YC(CC[pC[29]] = (0, bC[pC[84]])(CC[pC[29]], 1, Math[SC(pC[85])](pC[2], Math[SC(136)](pC[1], -dC, pC[2] - eC / CC[pC[52]]))), wC()[SC(137)](xC, xC, iC))
      }
      const FC = vC;
      YC(wC()[zC(138)](FC, xC, hC), FC[pC[2]] = pC[1], CC[pC[4]] = wC()[zC(139)](FC)), qC || (CC[pC[4]] *= CC[pC[29]]);
      const WC = CC[pC[22]][zC(pC[5]) + zC(141) + zC(142)],
        NC = WC ? Math[zC(143)](WC, CC[pC[4]]) : CC[pC[4]];
      wC()[zC(144) + zC(145)](FC, FC);
      const MC = CC[pC[24]] !== pC[57] && void 0 !== CC[pC[24]] ? CC[pC[24]] : CC[pC[22]][zC(146) + zC(147) + zC(148) + zC(149)];
      if (NC > pC[1]) {
        function XC(...CC) {
          for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = 'NgGAnKB91o|*uaS">C)8<{L;FEe6Q[r/vq5]$Z&wc+%24VskH`7Px0,}^?=Uhy:JR~iI@3OT(#!ldMjtXbpmYWDf_z.', CC[pC[0]] = "" + (CC[pC[1]] || ""), CC[-pC[86]] = CC[pC[0]].length, CC[pC[18]] = [], CC[pC[8]] = pC[1], CC[pC[22]] = pC[1], CC[pC[24]] = -pC[2]), CC[pC[3]] = pC[1]; CC[pC[3]] < CC[-pC[86]]; CC[pC[3]]++)
            if (CC[pC[45]] = CC[pC[14]].indexOf(CC[pC[0]][CC[pC[3]]]), CC[pC[45]] !== -pC[2])
              if (CC[pC[24]] < pC[1]) CC[pC[24]] = CC[pC[45]];
              else {
                YC(CC[pC[24]] += CC[pC[45]] * pC[30], CC[pC[8]] |= CC[pC[24]] << CC[pC[22]], CC[pC[22]] += (CC[pC[24]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                do {
                  YC(CC[pC[18]].push(CC[pC[8]] & pC[11]), CC[pC[8]] >>= pC[3], CC[pC[22]] -= pC[3])
                } while (CC[pC[22]] > pC[24]);
                CC[pC[24]] = -pC[2]
              } return CC[pC[24]] > -pC[2] && CC[pC[18]].push((CC[pC[8]] | CC[pC[24]] << CC[pC[22]]) & pC[11]), GC(CC[pC[18]])
        }

        function cC(...CC) {
          return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = XC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
        }

        function uC(...CC) {
          YC(CC[pC[12]] = pC[1], CC[pC[87]] = function(...CC) {
            for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = CC[pC[1]].length, CC[pC[0]] = [], CC[pC[13]] = pC[1], CC[pC[18]] = pC[1], CC[pC[1]].sort(((CC, zC) => CC - zC))), CC[pC[52]] = pC[1]; CC[pC[52]] < CC[pC[14]]; CC[pC[52]]++)
              if (!(CC[pC[52]] > pC[1] && CC[pC[1]][CC[pC[52]]] === CC[pC[1]][CC[pC[52]] - pC[2]]))
                for (YC(CC[pC[13]] = CC[pC[52]] + pC[2], CC[pC[18]] = CC[pC[14]] - pC[2]); CC[pC[13]] < CC[pC[18]];)
                  if (CC[pC[1]][CC[pC[52]]] + CC[pC[1]][CC[pC[13]]] + CC[pC[1]][CC[pC[18]]] < pC[1]) CC[pC[13]]++;
                  else if (CC[pC[1]][CC[pC[52]]] + CC[pC[1]][CC[pC[13]]] + CC[pC[1]][CC[pC[18]]] > pC[1]) CC[pC[18]]--;
            else {
              for (CC[pC[0]].push([CC[pC[1]][CC[pC[52]]], CC[pC[1]][CC[pC[13]]], CC[pC[1]][CC[pC[18]]]]); CC[pC[13]] < CC[pC[18]] && CC[pC[1]][CC[pC[13]]] === CC[pC[1]][CC[pC[13]] + pC[2]];) CC[pC[13]]++;
              for (; CC[pC[13]] < CC[pC[18]] && CC[pC[1]][CC[pC[18]]] === CC[pC[1]][CC[pC[18]] - pC[2]];) CC[pC[18]]--;
              YC(CC[pC[13]]++, CC[pC[18]]--)
            }
            return CC[pC[0]]
          }, console.log(CC[pC[87]]))
        }
        cC(pC[101]) + pC[0] in AC && uC();
        let rC = CC[pC[27]][cC(151) + cC(152)] * MC;
        if (!qC) {
          function TC(...CC) {
            for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = '#Fx=(|z$_AMS+sYjOqgBJNmu"^v5%`dUlT:cI>eZ!;G26Dit4]<yf&C1X9onP3w,{}VE0~Qa7@hWrb/*K.?pH[8k)RL', CC[pC[27]] = "" + (CC[pC[1]] || ""), CC[pC[88]] = CC[pC[27]].length, CC[-pC[92]] = [], CC[pC[89]] = pC[1], CC[-pC[91]] = pC[1], CC[pC[90]] = -pC[2]), CC[-pC[85]] = pC[1]; CC[-pC[85]] < CC[pC[88]]; CC[-pC[85]]++)
              if (CC[pC[45]] = CC[pC[14]].indexOf(CC[pC[27]][CC[-pC[85]]]), CC[pC[45]] !== -pC[2])
                if (CC[pC[90]] < pC[1]) CC[pC[90]] = CC[pC[45]];
                else {
                  YC(CC[pC[90]] += CC[pC[45]] * pC[30], CC[pC[89]] |= CC[pC[90]] << CC[-pC[91]], CC[-pC[91]] += (CC[pC[90]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                  do {
                    YC(CC[-pC[92]].push(CC[pC[89]] & pC[11]), CC[pC[89]] >>= pC[3], CC[-pC[91]] -= pC[3])
                  } while (CC[-pC[91]] > pC[24]);
                  CC[pC[90]] = -pC[2]
                } return CC[pC[90]] > -pC[2] && CC[-pC[92]].push((CC[pC[89]] | CC[pC[90]] << CC[-pC[91]]) & pC[11]), GC(CC[-pC[92]])
          }

          function aC(...CC) {
            return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = TC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
          }

          function tC(...CC) {
            YC(CC[pC[12]] = pC[1], CC[-pC[93]] = function(...CC) {
              function zC(...CC) {
                return CC[pC[12]] = pC[27], bC(QC(nC(CC[pC[1]]), nC(CC[pC[2]])))
              }

              function ZC(...CC) {
                return CC[pC[12]] = pC[13],
                  function(...CC) {
                    var zC, ZC, QC, wC;
                    for (YC(CC[pC[12]] = pC[27], CC[pC[14]] = CC[pC[2]].length, CC[-pC[105]] = Array()), CC[pC[104]] = Array(Math.ceil(CC[pC[1]].length / pC[27])), zC = pC[1]; zC < CC[pC[104]].length; zC++) CC[pC[104]][zC] = CC[pC[1]].charCodeAt(zC * pC[27]) << pC[3] | CC[pC[1]].charCodeAt(zC * pC[27] + pC[2]);
                    for (; CC[pC[104]].length > pC[1];) {
                      for (YC(wC = Array(), QC = pC[1]), zC = pC[1]; zC < CC[pC[104]].length; zC++) YC(QC = (QC << pC[95]) + CC[pC[104]][zC], ZC = Math.floor(QC / CC[pC[14]]), QC -= ZC * CC[pC[14]]), (wC.length > pC[1] || ZC > pC[1]) && (wC[wC.length] = ZC);
                      YC(CC[-pC[105]][CC[-pC[105]].length] = QC, CC[pC[104]] = wC)
                    }
                    for (CC[pC[106]] = "", zC = CC[-pC[105]].length - pC[2]; zC >= pC[1]; zC--) CC[pC[106]] += CC[pC[2]].charAt(CC[-pC[105]][zC]);
                    for (CC[pC[31]] = Math.ceil(CC[pC[1]].length * pC[3] / (Math.log(CC[pC[2]].length) / Math.log(pC[27]))), zC = CC[pC[106]].length; zC < CC[pC[31]]; zC++) CC[pC[106]] = CC[pC[2]][pC[1]] + CC[pC[106]];
                    return CC[pC[106]]
                  }(QC(nC(CC[pC[1]]), nC(CC[pC[2]])), CC[pC[27]])
              }

              function QC(...CC) {
                YC(CC[pC[12]] = pC[27], CC[pC[27]] = qC(CC[pC[1]])), CC[pC[27]].length > pC[95] && (CC[pC[27]] = JC(CC[pC[27]], CC[pC[1]].length * pC[3]));
                var zC = Array(pC[95]),
                  ZC = Array(pC[95]);
                for (CC[pC[0]] = pC[1]; CC[pC[0]] < pC[95]; CC[pC[0]]++) YC(zC[CC[pC[0]]] = 909522486 ^ CC[pC[27]][CC[pC[0]]], ZC[CC[pC[0]]] = 1549556828 ^ CC[pC[27]][CC[pC[0]]]);
                return CC[pC[18]] = JC(zC.concat(qC(CC[pC[2]])), pC[97] + CC[pC[2]].length * pC[3]), FC(JC(ZC.concat(CC[pC[18]]), RC(aC(159) + pC[96], pC[97], pC[98])))
              }

              function wC(...zC) {
                function QC(...CC) {
                  return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(CC) {
                    var zC, ZC, QC, wC, bC, nC, fC;
                    for (YC(zC = "" + (CC || ""), ZC = zC.length, QC = [], wC = pC[1], bC = pC[1], nC = -pC[2]), fC = pC[1]; fC < ZC; fC++) {
                      var oC = 'PN1IE!0zmbg.s|K_J<h?dLHkyq2Go7cD)@*OT,&]RVXfWFA%n4:`UBjQC"x5ZSipt6[rl#M9+w/^eY3v$(={>u;}~8a'.indexOf(zC[fC]);
                      if (oC !== -pC[2])
                        if (nC < pC[1]) nC = oC;
                        else {
                          YC(nC += oC * pC[30], wC |= nC << bC, bC += (nC & pC[32]) > pC[33] ? pC[34] : pC[35]);
                          do {
                            YC(QC.push(wC & pC[11]), wC >>= pC[3], bC -= pC[3])
                          } while (bC > pC[24]);
                          nC = -pC[2]
                        }
                    }
                    return nC > -pC[2] && QC.push((wC | nC << bC) & pC[11]), GC(QC)
                  }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
                }
                zC[pC[12]] = pC[2];
                try {
                  CC[-pC[91]]
                } catch (ZC) {
                  CC[-pC[91]] = pC[1]
                }
                for (YC(zC[pC[2]] = CC[-pC[91]] ? QC(pC[99]) + QC(161) + QC(162) : QC(pC[99]) + QC(163) + QC(164), zC[-pC[31]] = "", zC[pC[13]] = pC[17]), zC[pC[10]] = pC[1]; zC[pC[10]] < zC[pC[1]].length; zC[pC[10]]++) YC(zC[pC[13]] = zC[pC[1]].charCodeAt(zC[pC[10]]), zC[-pC[31]] += zC[pC[2]].charAt(zC[pC[13]] >>> pC[18] & pC[100]) + zC[pC[2]].charAt(zC[pC[13]] & pC[100]));
                return zC[-pC[31]]
              }

              function bC(...zC) {
                function QC(...CC) {
                  return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
                    for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = 'o7jsInAFUZTDz]t@WG|y{,)V6/r=xd:_2S>ml?1w`}vc[<0OC^eHB8RkuXY!%Q$3aE*PhiLKf+(q~5p#g4b";JMN9&.', CC[pC[27]] = "" + (CC[pC[1]] || ""), CC[-pC[101]] = CC[pC[27]].length, CC[-pC[90]] = [], CC[pC[52]] = pC[1], CC[pC[102]] = pC[1], CC[pC[7]] = -pC[2]), CC[pC[3]] = pC[1]; CC[pC[3]] < CC[-pC[101]]; CC[pC[3]]++)
                      if (CC[pC[29]] = CC[pC[2]].indexOf(CC[pC[27]][CC[pC[3]]]), CC[pC[29]] !== -pC[2])
                        if (CC[pC[7]] < pC[1]) CC[pC[7]] = CC[pC[29]];
                        else {
                          YC(CC[pC[7]] += CC[pC[29]] * pC[30], CC[pC[52]] |= CC[pC[7]] << CC[pC[102]], CC[pC[102]] += (CC[pC[7]] & pC[32]) > pC[33] ? pC[34] : pC[35]);
                          do {
                            YC(CC[-pC[90]].push(CC[pC[52]] & pC[11]), CC[pC[52]] >>= pC[3], CC[pC[102]] -= pC[3])
                          } while (CC[pC[102]] > pC[24]);
                          CC[pC[7]] = -pC[2]
                        } return CC[pC[7]] > -pC[2] && CC[-pC[90]].push((CC[pC[52]] | CC[pC[7]] << CC[pC[102]]) & pC[11]), GC(CC[-pC[90]])
                  }(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
                }
                zC[pC[12]] = pC[2];
                try {
                  CC[pC[0]]
                } catch (ZC) {
                  CC[pC[0]] = ""
                }
                for (YC(zC[pC[103]] = aC(pC[43]) + QC(166) + QC(167) + "/", zC[pC[27]] = "", zC[pC[4]] = zC[pC[1]].length), zC[pC[18]] = pC[1]; zC[pC[18]] < zC[pC[4]]; zC[pC[18]] += pC[13])
                  for (zC[pC[52]] = zC[pC[1]].charCodeAt(zC[pC[18]]) << pC[95] | (zC[pC[18]] + pC[2] < zC[pC[4]] ? zC[pC[1]].charCodeAt(zC[pC[18]] + pC[2]) << pC[3] : pC[1]) | (zC[pC[18]] + pC[27] < zC[pC[4]] ? zC[pC[1]].charCodeAt(zC[pC[18]] + pC[27]) : pC[1]), zC[pC[9]] = pC[1]; zC[pC[9]] < pC[18]; zC[pC[9]]++) zC[pC[18]] * pC[3] + zC[pC[9]] * pC[22] > zC[pC[1]].length * pC[3] ? zC[pC[27]] += CC[pC[0]] : zC[pC[27]] += zC[pC[103]].charAt(zC[pC[52]] >>> pC[22] * (pC[13] - zC[pC[9]]) & pC[21]);
                return zC[pC[27]]
              }

              function nC(...CC) {
                var zC, ZC;
                for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = "", CC[pC[27]] = -pC[2]); ++CC[pC[27]] < CC[pC[1]].length;) YC(zC = CC[pC[1]].charCodeAt(CC[pC[27]]), ZC = CC[pC[27]] + pC[2] < CC[pC[1]].length ? CC[pC[1]].charCodeAt(CC[pC[27]] + pC[2]) : pC[1]), 55296 <= zC && zC <= 56319 && 56320 <= ZC && ZC <= 57343 && YC(zC = 65536 + ((zC & pC[107]) << pC[114]) + (ZC & pC[107]), CC[pC[27]]++), zC <= pC[38] ? CC[pC[14]] += String.fromCharCode(zC) : zC <= 2047 ? CC[pC[14]] += String.fromCharCode(192 | zC >>> pC[22] & pC[108], pC[69] | zC & pC[21]) : zC <= pC[117] ? CC[pC[14]] += String.fromCharCode(224 | zC >>> pC[25] & pC[100], pC[69] | zC >>> pC[22] & pC[21], pC[69] | zC & pC[21]) : zC <= 2097151 && (CC[pC[14]] += String.fromCharCode(240 | zC >>> pC[109] & pC[24], pC[69] | zC >>> pC[25] & pC[21], pC[69] | zC >>> pC[22] & pC[21], pC[69] | zC & pC[21]));
                return CC[pC[14]]
              }

              function qC(...CC) {
                for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = Array(CC[pC[1]].length >> pC[27])), CC[pC[111]] = pC[1]; CC[pC[111]] < CC[pC[14]].length; CC[pC[111]]++) CC[pC[14]][CC[pC[111]]] = pC[1];
                for (CC[pC[111]] = pC[1]; CC[pC[111]] < CC[pC[1]].length * pC[3]; CC[pC[111]] += pC[3]) CC[pC[14]][CC[pC[111]] >> pC[52]] |= (CC[pC[1]].charCodeAt(CC[pC[111]] / pC[3]) & pC[11]) << pC[113] - CC[pC[111]] % pC[112];
                return CC[pC[14]]
              }

              function FC(...CC) {
                for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = ""), CC[pC[27]] = pC[1]; CC[pC[27]] < CC[pC[1]].length * pC[112]; CC[pC[27]] += pC[3]) CC[pC[2]] += String.fromCharCode(CC[pC[1]][CC[pC[27]] >> pC[52]] >>> pC[113] - CC[pC[27]] % pC[112] & pC[11]);
                return CC[pC[2]]
              }

              function WC(...CC) {
                return CC[pC[12]] = pC[27], CC[pC[1]] >>> CC[pC[2]] | CC[pC[1]] << pC[112] - CC[pC[2]]
              }

              function NC(...CC) {
                return CC[pC[12]] = pC[27], CC[pC[1]] >>> CC[pC[2]]
              }

              function MC(...CC) {
                return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ ~CC[pC[1]] & CC[pC[27]]
              }

              function gC(...CC) {
                return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ CC[pC[1]] & CC[pC[27]] ^ CC[pC[2]] & CC[pC[27]]
              }

              function SC(CC) {
                return WC(CC, pC[27]) ^ WC(CC, pC[34]) ^ WC(CC, 22)
              }

              function PC(...CC) {
                return CC[pC[12]] = pC[2], WC(CC[pC[1]], pC[22]) ^ WC(CC[pC[1]], 11) ^ WC(CC[pC[1]], 25)
              }

              function AC(...CC) {
                return CC[pC[12]] = pC[2], WC(CC[pC[1]], pC[24]) ^ WC(CC[pC[1]], pC[109]) ^ NC(CC[pC[1]], pC[13])
              }

              function xC(...CC) {
                return CC[pC[12]] = pC[2], WC(CC[pC[1]], 17) ^ WC(CC[pC[1]], pC[115]) ^ NC(CC[pC[1]], pC[114])
              }

              function JC(...zC) {
                var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, GC;
                for (YC(zC[pC[12]] = pC[27], zC[pC[14]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), zC[-pC[116]] = new Array(pC[73])), YC(zC[pC[1]][zC[pC[2]] >> pC[52]] |= pC[69] << pC[113] - zC[pC[2]] % pC[112], zC[pC[1]][(zC[pC[2]] + pC[73] >> pC[29] << pC[18]) + pC[100]] = zC[pC[2]]), FC = pC[1]; FC < zC[pC[1]].length; FC += pC[95]) {
                  for (YC(ZC = zC[pC[14]][pC[1]], QC = zC[pC[14]][pC[2]], wC = zC[pC[14]][pC[27]], bC = zC[pC[14]][pC[13]], nC = zC[pC[14]][pC[18]], fC = zC[pC[14]][pC[52]], oC = zC[pC[14]][pC[22]], qC = zC[pC[14]][pC[24]]), WC = pC[1]; WC < pC[73]; WC++) YC(zC[-pC[116]][WC] = WC < pC[95] ? zC[pC[1]][WC + FC] : IC(IC(IC(xC(zC[-pC[116]][WC - pC[27]]), zC[-pC[116]][WC - pC[24]]), AC(zC[-pC[116]][WC - pC[100]])), zC[-pC[116]][WC - pC[95]]), NC = IC(IC(IC(IC(qC, PC(nC)), MC(nC, fC, oC)), CC[pC[27]][WC]), zC[-pC[116]][WC]), GC = IC(SC(ZC), gC(ZC, QC, wC)), qC = oC, oC = fC, fC = nC, nC = IC(bC, NC), bC = wC, wC = QC, QC = ZC, ZC = IC(NC, GC));
                  YC(zC[pC[14]][pC[1]] = IC(ZC, zC[pC[14]][pC[1]]), zC[pC[14]][pC[2]] = IC(QC, zC[pC[14]][pC[2]]), zC[pC[14]][pC[27]] = IC(wC, zC[pC[14]][pC[27]]), zC[pC[14]][pC[13]] = IC(bC, zC[pC[14]][pC[13]]), zC[pC[14]][pC[18]] = IC(nC, zC[pC[14]][pC[18]]), zC[pC[14]][pC[52]] = IC(fC, zC[pC[14]][pC[52]]), zC[pC[14]][pC[22]] = IC(oC, zC[pC[14]][pC[22]]), zC[pC[14]][pC[24]] = IC(qC, zC[pC[14]][pC[24]]))
                }
                return zC[pC[14]]
              }

              function IC(...CC) {
                return YC(CC[pC[12]] = pC[27], CC[pC[27]] = (CC[pC[1]] & pC[117]) + (CC[pC[2]] & pC[117]), CC[pC[13]] = (CC[pC[1]] >> pC[95]) + (CC[pC[2]] >> pC[95]) + (CC[pC[27]] >> pC[95])), CC[pC[13]] << pC[95] | CC[pC[27]] & pC[117]
              }
              return YC(CC[pC[12]] = pC[1], CC[-pC[91]] = pC[1], CC[pC[0]] = ""), CC[pC[27]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...CC) {
                  return CC[pC[12]] = pC[2], wC(function(...CC) {
                    return CC[pC[12]] = pC[2], FC(JC(qC(CC[pC[1]]), CC[pC[1]].length * pC[3]))
                  }(nC(CC[pC[1]])))
                },
                b64: zC,
                any: ZC,
                hex_hmac: function(...CC) {
                  return CC[pC[12]] = pC[27], wC(QC(nC(CC[pC[1]]), nC(CC[pC[2]])))
                },
                b64_hmac: zC,
                any_hmac: ZC
              }
            }(), console.log(CC[-pC[93]]))
          }
          aC(153) + "I" in AC && tC(), rC *= CC[pC[27]][aC(168) + aC(169)]
        }
        let sC = CC[pC[27]][cC(170) + cC(171) + "ss"] * NC;
        NC < .3 && (sC *= NC), rC > sC && (rC = sC), YC(wC()[cC(172)](FC, FC, rC), CC[pC[18]][cC(173) + cC(174)](FC))
      }
      CC[pC[18]][zC(175) + pC[118]] = CC[pC[27]][zC(176) + zC(pC[59]) + pC[118]] * (qC ? QC : nC)
    }
  },
  37496: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => oC,
      f: () => fC
    });
    var QC = ZC(37504),
      wC = ZC(1806);
    const bC = 2,
      nC = 1,
      fC = {
        Mq: 1,
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

    function oC(CC, zC, ZC, fC, oC, qC, FC) {
      if (oC.speed) return (0, QC.d)(zC, ZC, fC, oC, qC, FC, CC), void(oC.ticksToReachMaxIdleFriction = bC);
      const WC = fC.isOnGround(),
        NC = zC.bloxd.getSyncedClientOptions(zC.bloxd.getPlayerReader(ZC)),
        MC = null === NC ? zC.bloxd.getClientPredictedOption(ZC, "groundFrictionScale") : NC.groundFrictionScale,
        gC = null === NC ? zC.bloxd.getClientPredictedOption(ZC, "airFrictionScale") : NC.airFrictionScale,
        SC = WC ? MC : gC,
        pC = Math.max(nC, SC),
        PC = oC.ticksToReachMaxIdleFriction / bC,
        GC = (0, wC.s)(pC, SC, PC);
      qC.friction = CC.standingFriction * ((null === NC ? zC.bloxd.getClientPredictedOption(ZC, "airMomentumConservation") : NC.airMomentumConservation) ? GC : SC), oC.ticksToReachMaxIdleFriction > 0 && oC.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);