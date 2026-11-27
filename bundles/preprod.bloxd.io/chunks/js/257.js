export const id = 257;
export const ids = [257];
export const modules = {
  39661: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW
    });
    var mW = OW(182),
      EW = OW(38824);
    const NW = 1.2,
      PW = {
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
        FP: .5,
        QiW: !1
      },
      LW = {
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
        FP: .5,
        QiW: !1
      },
      cW = {
        physicsBodyDimensions: {
          width: mW.f.tU,
          height: mW.f.ZU
        },
        hitBoxDimensions: {
          width: mW.f.tU + .4,
          height: mW.f.ZU + .6
        },
        eyeHeight: mW.f.ZU * mW.f.playerEyeToHeightRatio,
        rideHeight: mW.f.ZU - .3,
        FP: .5,
        QiW: !1
      },
      wW = {
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
        FP: .5,
        QiW: !1
      },
      tW = {
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
        FP: .5,
        QiW: !1
      },
      ZW = {
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
        FP: .5,
        QiW: !1
      },
      xW = {
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
        FP: .5,
        QiW: !1
      },
      lW = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: mW.f.tU,
            height: mW.f.ZU
          },
          hitBoxDimensions: {
            width: mW.f.tU + .4,
            height: mW.f.ZU + .6
          },
          eyeHeight: mW.f.ZU * mW.f.playerEyeToHeightRatio,
          rideHeight: mW.f.ZU - .1,
          FP: EW.e.FP,
          QiW: !0
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
        },
        Camel: {
          modelScale: NW,
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
        },
        "Cave Golem": PW,
        "Draugr Zombie": {
          ...cW,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": cW,
        "Frost Golem": PW,
        "Frost Zombie": {
          ...cW,
          defaultPose: "zombie"
        },
        "Frost Skeleton": cW,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: mW.f.tU,
            height: mW.f.ZU
          },
          hitBoxDimensions: {
            width: mW.f.tU + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          FP: .5,
          QiW: !1
        },
        Wolf: wW,
        Bear: tW,
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
          FP: .5,
          QiW: !1
        },
        Stag: ZW,
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
          FP: .5,
          QiW: !1
        },
        Gorilla: xW,
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
          FP: .5,
          QiW: !1
        },
        "Draugr Huntress": cW,
        "Magma Golem": PW,
        "Spirit Golem": PW,
        "Spirit Wolf": wW,
        "Spirit Bear": tW,
        "Spirit Stag": ZW,
        "Spirit Gorilla": xW,
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: mW.f.tU,
            height: mW.f.ZU
          },
          hitBoxDimensions: {
            width: mW.f.tU + .4,
            height: mW.f.ZU + .6
          },
          eyeHeight: mW.f.ZU * mW.f.playerEyeToHeightRatio,
          rideHeight: mW.f.ZU - .1,
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: mW.f.tU,
            height: mW.f.ZU
          },
          hitBoxDimensions: {
            width: mW.f.tU + .4,
            height: mW.f.ZU + .6
          },
          eyeHeight: mW.f.ZU * mW.f.playerEyeToHeightRatio,
          rideHeight: mW.f.ZU - .1,
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
        },
        Zombie: {
          ...cW,
          defaultPose: "zombie"
        },
        Skeleton: cW,
        Mummy: {
          ...cW,
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
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
          FP: .5,
          QiW: !1
        },
        "Iron Guardian": LW,
        "Gold Guardian": LW,
        "Diamond Guardian": LW,
        "Moonstone Guardian": LW,
        "Iron Goofy Golem": LW,
        "Gold Goofy Golem": LW,
        "Diamond Goofy Golem": LW,
        "Moonstone Goofy Golem": LW,
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
          FP: .5,
          QiW: !1
        }
      };

    function AW(WW) {
      return lW[WW]
    }
  },
  38214: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    const mW = {
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
  38831: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(352),
      EW = OW.n(mW),
      NW = OW(2012);
    let PW;
    var LW, cW, wW, tW, ZW, xW, lW, AW, bW;
    const jW = [2, 0, 1, "c", "a", 9, 140, 5, "f", 122, 8, 255, "length", "b", 3, 61, "undefined", void 0, 225, "d", 119, 193, 63, 6, "fromCodePoint", 7, 12, "push", 131, 110, 91, 73, 8191, 88, 13, 14, 4, 236, 139, 160, !1, 79, !0, 84, 104, 115, 123, "e", 178, 248, 74, "g", 179, 129, 180, 230, 194, "i", 102, null, 114, 116, 111, 112, 113, 117, 118, 106, 107, 108, 109, 125, 126, 127, 128, 40, 60, 136, "wb", 103, 137, 226, 163, 65, 159, "h", 80, 72, 164, 171, 198, 31, 219, 220, 10, "on"];

    function UW(...WW) {
      return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
        for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = '5R(_qs*mnEz@fa>7`Le:gDTdNYt^w!vV{puO&bkl#)1WAB6xy/ZQ[XP<IGo2+]?=cMrC3hF8"0,}$%KH94|Sj~;.JiU', WW[jW[0]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[0]].length, WW[-jW[9]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[-jW[6]] = -jW[2]), WW[-jW[2]] = jW[1]; WW[-jW[2]] < WW[jW[3]]; WW[-jW[2]]++)
          if (WW[jW[5]] = WW[jW[4]].indexOf(WW[jW[0]][WW[-jW[2]]]), WW[jW[5]] !== -jW[2])
            if (WW[-jW[6]] < jW[1]) WW[-jW[6]] = WW[jW[5]];
            else {
              HW(WW[-jW[6]] += WW[jW[5]] * jW[30], WW[jW[7]] |= WW[-jW[6]] << WW[jW[8]], WW[jW[8]] += (WW[-jW[6]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
              do {
                HW(WW[-jW[9]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
              } while (WW[jW[8]] > jW[25]);
              WW[-jW[6]] = -jW[2]
            } return WW[-jW[6]] > -jW[2] && WW[-jW[9]].push((WW[jW[7]] | WW[-jW[6]] << WW[jW[8]]) & jW[11]), kW(WW[-jW[9]])
      }(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
    }

    function kW(...WW) {
      return WW[jW[12]] = jW[2], typeof tW !== jW[16] && tW ? (new tW).decode(new ZW(WW[jW[1]])) : typeof xW !== jW[16] && xW ? xW.from(WW[jW[1]]).toString("utf-8") : bW(WW[jW[1]])
    }

    function sW() {}
    HW(LW = {}, cW = ["ZGF<26wNq", "CVw!{K=OQf;%W(EegQQ%TZ.mqcP>Ht#YoyQX!S,#^Mh=t/U`,MKml~5", 'FM$!dkbOX:m].tWlEd><?"9#3P+9Gy_LiQl/G+Q:f?}eHtGwY+IP1F5', 'hyS%t~<m#Lb"^>&bzqkVd8W}==Bh5', 'yG!$xF`crP.{ajwOa+)"w', 'iy)vk|s}V=:V&S!d02"E', 'dPxwL&:)77g"0y1YbQaVoj`[A@4R#^":x*}s|?&($2ODmZWl;Y*$ou+(#af"5', "ZQXmR<nn?n{H5", "8M<0Sh]=*cL_ZY^de!%tfye9a2S%.>zl!83myoimfM1?E`j#PL8w_H5", '57)Q",>nTa^<.tme_dyEv0qoj:5}dxeu`8sZW|5', "bG}sGlmRgGXe9SJ1jQ/Q36<)+?[", "J2VEI+kf2LXO+^~uC1Y}VOIvtL*E`Sf", "OQ%[u#<a&a)0|k4ln3w!j$T6i?!Ly7>^Df2nWIp)s:*uRy^LbL./J8K#*", "l_e{=<WhZPCY7|{1H2s<%G.LZ73e4qVL", "f8b$eZ=x%IpH;Ycds/P$}<zn^2[qj_rdg8J*.$u(", ";uonc<zee7*Ho/w1M0+,n$d:NLP", ">6MPg8W:Sfywiya", "ffKq9<g(wD/r1]r&2?v/69#6;:>34YE", 'ZMjsaZdxU>zoI2*NU@`P;KQ:zgpH(t"b2yM*=j$6bo/rR', "E,BVy3K;f>j+WoUwR=vq)=Wa/r@_i+7luW?m", "UBonx=K6{=5E92W:&P_!.K])yGz^}Fgu^W[!HhQx(+4Rzbgwo8+%WF_arG}eR", "*3)Q?jK#`ex0utLtvR", 'qtf,T8@Y(7=wn^"tXg^{?,Ku)LC0=oP)JLPma<j#eG@_8okYju)*MH5', "R==$D~I(", "X_S!KB`N(7i,^kce4Im*zyv,WL,9D+>", "(rsV36Io`7{u$2d)[*m[#x^O1MA<ka3va6%[!", 'e6x0{Oz6UgS%+NJ156"0r61vH75(ZYrL[B(', "{ELKh<^)=7GFo|a", "NP0P;kS!6=[978(NcE(", '#Gb[B=7xc+lLR"t&]3RKs&5n;a', "J??E2%,Nw2=FR", "/uxEEGYxDPJCx():+#5*", 'oBe^Nk&v^geNOtn:">l[U0mX<a53&y5eJ0"0ike;$I5(%&GdU5', "7=%Z0ytN$>uVv/|ux?(", "CV8/ayY!ZPyLubaldg~t=jZ(", "FbG*eG!X97gh@^2!;QCz", "fda<F?7me=5pZa]vrb*<Pb[[F:`HJ2Mbzq)vtGxR", '*d>$T[",o>', "0@)v!xSG@g8YR", '<G5PiGJ3o?b$(|FkTQX$QFk[t>E"^SX^FLnK?u/)qcAhRs', "xW/*.GW:{DxL@>OVCQQz[Qj#1>[", "5=)Pb/dR]e%%9q^!LR", "[Pd0@<2x*ag*8FCe6#K8o%[e8ofyZ]VdqW)}f<we/+G2_kL^b*P$w[[33ck", "0yTw`GANOfJ!D+Su", "(=V$26})_PS!tslkJQ[Xf&%~MEXh]b>", "WuE*AF{[!rq3W2CYQP90{[74}L:*iq", '@8pv74e6p7C92SFeSB3t9&6oQGAw8>zlH>:{G=[[[P53L"(es72n', 'i>3s?l~a>D@`L&zg{W9*.h"fIol<:tcep_!<|SxR.g}%s&<O|YL^.[5oz>', 'PG[m94,*"aA[n8X)<_4QZQqom', '>fe{Pl+3iMsQXyGO>*T$RXEaXc^"hq0l9B</{K~mV7"O{_m', "mOvw`S~d_", '8P?$<lj#Z+qxH>8:1QL"_X[oHn', "C*Hw)]D)i>`Hdx5NAM3t5;5", "6MiQY#5", "YE8qm&O:tLGY0&_bA8Dw)P2}$?EEs+.T5!A%/F/R", "IMOzk0Z(^>tz~+y#2PDq6bB:jcQ$<_.`)y5}eS%)b:FOR", 'tg({Kk~Oj:cF&q6#%B>V4&}!|:8=4"cNqO~m', ':*a,FZhQ/E0%5+p&"I|QY', "ub4Qt2^:@MCeWFqkPdw%]X5", 'qf0PA=33&c97R"Vv@/(Q]Q%!sajZP]@t{Gp"Y0]xRf:NMyreD*P$m?5', ">e2{)/C).oMFQoXwm8hwZ3P({Gy", "s=3tE&A(:PkzkbQ)JynE)Px}saH@vbj#J1KwN$4moLNy7kfl9wjtg8::fL", 'ROT[D[Sh5f!Nn8"V&G(', "d67vNZ;#&cTo,4#k56.q^25", 'Dd)v&Ip4m<g"7t!!kPEP)x5', 'OQnp:GxOR+x$G/a:PGXw{8OxE<wV7Z<O|*t^Fu+vxI_":x]!8yuQ@;1(', ")go{&}Y:G?$IqSv1V!$!D8bh_G5}|>^1AdP<@?Afm", "TGO!sh1(", "hda<R+d:y+pNN_PO:#v<{2(;%XFY_ZiOlGmpaSnNg:i+8k!L77C{x=(oU>", '|_:"`$k(IL~{d>Sw/_rQ7h$#_:BDg_^ww8IPw2LO]@+r#8kkNR', "oy1!.hS~.a~!#SlbRf_", "*=|!+oqNUL$eI_|#DGGP&~16y7|/4N$lMV/*z&saMfLH1>&NBV,nd~s4KI7uR", "@W<0AQ;#YLYMB`6#=V./4p5", "Hw+,lxmhnz2%DbpNBGA%XX$e?Ih0)a#tTQ2,*HX)yE", 'tMLK=,NN0osHd^J)u#1{48zNi?^aayVbV,@"[}Gxbaywzs9lULdq', ',dD,uK?(`=b[E"x^P8?m>4b}:E!gi+`#|g,ncHc3nz6$R', 'C3v$FZPv{rw"&83NBQqZI|hdt>vorYd)g7JP~p5', 'Zfe"H$T6$@%na"E:4V#/h,)R', "J*6qgkD!E>.4~NGu4w=[b/~!}n", 'A3_"Pj}!LPX[9SRV%Me!fkP(Wg]D!`uLHL}n*X5', '&b6[M&@):f.Cql8e@6dp@kz6Ng;%B"9ta6R', "wMY{FhBmmg*bTbguWtk<q&wnH+W>N8g^!+kV(;;,5el", 'T6R*e?imxeY"X"<!8Le}R"y(', "D:n9G2#p", "rQkV%4g(", "~,ET_@!r", "&$Hui1Q=", '+aXuMw8Qn|h~?0Pc6b7,55Jg>ktH3%Pc>4.x>6+]O"H}vy6a%a9T,', "Qw/yEISuCJ@(Uf[F4d]j00}*,#HMG)[F(q_Z$$3o4E@aV:U+tP", '"`:da12N', "~<:#I<DN", "Es?p+^DN", "!sg([^Qn", "6oXdey&n", "K0,N", "(5~DwM>r", "gHsj", "RT~jyad", "g5:+", ":/lQof9C", '!13LEtr"', "Wo&A,xuu", "%a?k10L", "eJpoF%HC", "IJd,j+HC", "JJio", "eJv[Q`fC", "DJE%H%mC", "bWv[&:^C", "YqN[m", "eJv[H%mC", "bWpoI5NC", "fT~rY+eC", "5b~YY:fC", "0#lY/[eC", "R#+%[{mC", ",W[=XvaC", "sTd,A5mC", "Y!+%1[3n", "|VVYS", "PJpo", "iJv=U", "TqsYP", ",x.#p^yC", "l12kS", "sT#Y($FC", "Yk#rP+L", "sT#YS:9PRU", "Y1H[B:lU%M", "c4#rJ=U{d", "sT#YS:IC", "bW~Y&%qn", ",WzYK5xC", "P!+%1[L", "=A_z", "[d)|", "vX17", "u^)|", "aT9DC", "NwJ7", "9DHz", "E1zr", "jJN[:{TC", "fj)[Z4hC", '5r|l"3IvMBC#O13c', "yMz96qgs5x<^*C%T", "hY:CH+g**d]./D0", "865R(c()BE3&O031,tU", "[qQd_1{):,fzO0@8~Hq", "LJA@O:gh:/x.qtc=RgU", "31;C3G@}.wfHO0!X7Jq", 'Nf^a#7mOn!"Q.Y~aw[1ve=]H8DhzJ)L_+JE*rZ5phDll.q', 'x[*QKmQH8DBQUmD8FFxM@AhA1("QOQu/Nzz@%3SEwXbE/O', "yFKv+RiXh_2FY0,eU+nU^ig),lfii0#/PY*QqpQH8D!g>t", "hhWvAp}H|l.F<0g?@hWv,mcHCK6F?0;ucJF@>.O6{do22q", "nO>oy|9C", "IH0%{{HC", "zk*r", '"T2k', 'Rq#Y"vaC', "l=*r", "Iq*Y`%NC", "q!2(q5FC", "/Rmo5{mC", ".a0EK5L", ":KnhnwR%", "2q$Jmz1D", "_f60mZBK", "Ib)n_7Z[", "!()F", 'K`pn"A2O', "xJc4+>N", "t+{pjVv[", "?k)nmM=[", "WP8V.daI", "}(1Fhw:", "N_z(I^7%", "V1Ju`", "$#+%[{mC", "Iq*Yz[GC"]), HW(wW = function(...WW) {
      HW(WW[jW[12]] = jW[1], WW[jW[4]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], WW[jW[13]] = jW[17], WW[jW[3]] = []);
      try {
        HW(WW[jW[13]] = Object, WW[jW[3]][jW[27]]("".__proto__.constructor.name))
      } catch (cW) {}
      WW: for (WW[jW[14]] = jW[1]; WW[jW[14]] < WW[jW[4]][jW[12]]; WW[jW[14]]++) try {
        for (WW[jW[13]] = WW[jW[4]][WW[jW[14]]](), WW[jW[15]] = jW[1]; WW[jW[15]] < WW[jW[3]][jW[12]]; WW[jW[15]]++)
          if (typeof WW[jW[13]][WW[jW[3]][WW[jW[15]]]] === jW[16]) continue WW;
        return WW[jW[13]]
      } catch (cW) {}
      return WW[jW[13]] || this
    }() || {}, tW = wW.TextDecoder, ZW = wW.Uint8Array, xW = wW.OZ, lW = wW.String || String, AW = wW.Array || Array, bW = function(...WW) {
      return HW(WW[jW[12]] = jW[1], WW[jW[4]] = new AW(jW[74]), WW[jW[13]] = lW[jW[24]] || lW.fromCharCode, WW[jW[18]] = []),
        function(...iW) {
          for (HW(iW[jW[12]] = jW[2], iW[-jW[21]] = jW[17], iW[jW[20]] = jW[17], iW[jW[14]] = iW[jW[1]][jW[12]], WW[jW[18]][jW[12]] = jW[1]), iW[jW[19]] = jW[1]; iW[jW[19]] < iW[jW[14]];) HW(iW[jW[20]] = iW[jW[1]][iW[jW[19]]++], iW[jW[20]] <= jW[73] ? iW[-jW[21]] = iW[jW[20]] : iW[jW[20]] <= 223 ? iW[-jW[21]] = (iW[jW[20]] & jW[91]) << jW[23] | iW[jW[1]][iW[jW[19]]++] & jW[22] : iW[jW[20]] <= 239 ? iW[-jW[21]] = (15 & iW[jW[20]]) << jW[26] | (iW[jW[1]][iW[jW[19]]++] & jW[22]) << jW[23] | iW[jW[1]][iW[jW[19]]++] & jW[22] : lW[jW[24]] ? iW[-jW[21]] = (iW[jW[20]] & jW[25]) << 18 | (iW[jW[1]][iW[jW[19]]++] & jW[22]) << jW[26] | (iW[jW[1]][iW[jW[19]]++] & jW[22]) << jW[23] | iW[jW[1]][iW[jW[19]]++] & jW[22] : (iW[-jW[21]] = jW[22], iW[jW[19]] += jW[14]), WW[jW[18]][jW[27]](WW[jW[4]][iW[-jW[21]]] || (WW[jW[4]][iW[-jW[21]]] = WW[jW[13]](iW[-jW[21]]))));
          return WW[jW[18]].join("")
        }
    }());
    const MW = EW()[UW(jW[43])](),
      KW = EW()[UW(jW[43])](),
      SW = EW()[UW(jW[43])](),
      YW = EW()[UW(jW[43])](),
      yW = EW()[UW(jW[43])](),
      TW = EW()[UW(jW[43])](),
      JW = EW()[UW(jW[43])](),
      hW = (...WW) => {
        function iW(...WW) {
          return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
            for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = 'dpr)_CIijT+NZ*;1[GxX$:</{o7g]nySDB>6v(Fu,}!5"09w@`?~%3842|z.#=^&RlVYMKLafhHJqkmbEeQsOWPAUct', WW[jW[0]] = "" + (WW[jW[1]] || ""), WW[-jW[36]] = WW[jW[0]].length, WW[jW[36]] = [], WW[jW[47]] = jW[1], WW[-jW[48]] = jW[1], WW[jW[46]] = -jW[2]), WW[-jW[44]] = jW[1]; WW[-jW[44]] < WW[-jW[36]]; WW[-jW[44]]++)
              if (WW[-jW[45]] = WW[jW[4]].indexOf(WW[jW[0]][WW[-jW[44]]]), WW[-jW[45]] !== -jW[2])
                if (WW[jW[46]] < jW[1]) WW[jW[46]] = WW[-jW[45]];
                else {
                  HW(WW[jW[46]] += WW[-jW[45]] * jW[30], WW[jW[47]] |= WW[jW[46]] << WW[-jW[48]], WW[-jW[48]] += (WW[jW[46]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
                  do {
                    HW(WW[jW[36]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[-jW[48]] -= jW[10])
                  } while (WW[-jW[48]] > jW[25]);
                  WW[jW[46]] = -jW[2]
                } return WW[jW[46]] > -jW[2] && WW[jW[36]].push((WW[jW[47]] | WW[jW[46]] << WW[-jW[48]]) & jW[11]), kW(WW[jW[36]])
          }(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
        }
        WW[jW[12]] = jW[14], iW(85);
        const OW = TW;
        return EW()[iW(95) + iW(96)](OW, WW[jW[0]]), EW()[iW(97)](WW[jW[1]], OW, EW()[iW(98)](OW, WW[jW[2]]))
      };

    function HW() {
      HW = function() {}
    }
    PW = (...WW) => {
      function iW(...WW) {
        return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(WW) {
          var iW, OW, mW, EW, NW, PW, LW;
          for (HW(iW = "" + (WW || ""), OW = iW.length, mW = [], EW = jW[1], NW = jW[1], PW = -jW[2]), LW = jW[1]; LW < OW; LW++) {
            var cW = 'LnCVOidgrkotHcDJFMeUNpBjGSTlmQPEYAasIRfZWKhqXby"98^#)>x,]!;z1w/42}_~v$0+?(=3%[:75{|*<`6@u&.'.indexOf(iW[LW]);
            if (cW !== -jW[2])
              if (PW < jW[1]) PW = cW;
              else {
                HW(PW += cW * jW[30], EW |= PW << NW, NW += (PW & jW[32]) > jW[33] ? jW[34] : jW[35]);
                do {
                  HW(mW.push(EW & jW[11]), EW >>= jW[10], NW -= jW[10])
                } while (NW > jW[25]);
                PW = -jW[2]
              }
          }
          return PW > -jW[2] && mW.push((EW | PW << NW) & jW[11]), kW(mW)
        }(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
      }
      WW[jW[12]] = jW[10], iW(99) in sW && function() {
        function WW(WW) {
          var iW, OW, mW, EW, NW, PW, LW, cW = '6u"<*`~FboI2jV35S{rv=URqT8XCD?fEABMQ/+n1[pN#OJWz;Lic|Pg,w^9G$Ya)y%Z&@hxt.:d4>7H]m!sK0(}lek_';
          for (HW(iW = "" + (WW || ""), OW = iW.length, mW = [], EW = jW[1], NW = jW[1], PW = -jW[2]), LW = jW[1]; LW < OW; LW++) {
            var wW = cW.indexOf(iW[LW]);
            if (wW !== -jW[2])
              if (PW < jW[1]) PW = wW;
              else {
                HW(PW += wW * jW[30], EW |= PW << NW, NW += (PW & jW[32]) > jW[33] ? jW[34] : jW[35]);
                do {
                  HW(mW.push(EW & jW[11]), EW >>= jW[10], NW -= jW[10])
                } while (NW > jW[25]);
                PW = -jW[2]
              }
          }
          return PW > -jW[2] && mW.push((EW | PW << NW) & jW[11]), kW(mW)
        }

        function iW(...iW) {
          return iW[jW[12]] = jW[2], typeof LW[iW[jW[1]]] === jW[16] ? LW[iW[jW[1]]] = WW(cW[iW[jW[1]]]) : LW[iW[jW[1]]]
        }
        const OW = require("path"),
          {
            version: mW
          } = require("../../package"),
          {
            version: EW
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: NW
          } = require("@redacted/components/package"),
          {
            sdkVersion: PW
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), OW.resolve(__dirname, iW(100) + iW(101) + "js")
      }();
      const OW = WW[jW[1]][iW(jW[58])][iW(jW[79]) + iW(jW[44]) + iW(105)](WW[jW[2]]);
      WW[jW[10]] = WW[jW[1]][iW(jW[58])][iW(jW[67]) + iW(jW[68]) + iW(jW[69]) + iW(jW[70])](OW);
      const mW = WW[jW[10]] === jW[59] ? WW[jW[1]][iW(jW[58])][iW(jW[29]) + iW(jW[62]) + iW(jW[63]) + iW(jW[64])](WW[jW[2]], iW(jW[60]) + iW(jW[45]) + iW(jW[61]) + jW[47]) : WW[jW[10]][iW(jW[60]) + iW(jW[45]) + iW(jW[61]) + jW[47]],
        PW = WW[jW[10]] === jW[59] ? WW[jW[1]][iW(jW[58])][iW(jW[29]) + iW(jW[62]) + iW(jW[63]) + iW(jW[64])](WW[jW[2]], iW(jW[65]) + iW(jW[66]) + iW(jW[20])) : WW[jW[10]][iW(jW[65]) + iW(jW[66]) + iW(jW[20])];
      HW(EW()[iW(120)](MW, jW[1], jW[1], WW[jW[7]]), EW().wj(MW, MW, EW()[iW(121)], WW[jW[14]].heading), EW()[iW(jW[9])](JW, WW[jW[36]].Sj), JW[jW[2]] = jW[1]);
      const wW = WW[jW[0]][iW(jW[46]) + iW(124)]();
      if (HW(WW[jW[10]] = WW[jW[1]][iW(jW[58])][iW(jW[67]) + iW(jW[68]) + iW(jW[69]) + iW(jW[70])](OW), WW[jW[77]] = WW[jW[10]] === jW[59] ? WW[jW[1]][iW(jW[58])][iW(jW[29]) + iW(jW[62]) + iW(jW[63]) + iW(jW[64])](WW[jW[2]], iW(jW[71]) + iW(jW[72])) : WW[jW[10]][iW(jW[71]) + iW(jW[72])]), !wW && EW()[jW[78]](JW) && (WW[jW[10]] === jW[59] ? WW[jW[1]][iW(jW[58])][iW(jW[29]) + iW(jW[62]) + iW(jW[63]) + iW(jW[64])](WW[jW[2]], iW(jW[73]) + iW(jW[74]) + iW(jW[53])) : WW[jW[10]][iW(130) + iW(jW[28]) + iW(132) + iW(133)])) {
        function AW(...WW) {
          for (HW(WW[jW[12]] = jW[2], WW[jW[2]] = 'kNOiw#5ez|7PDnmdC(r`@1t[{,^v%9"=y*>gYM~];0VX3&hu:a42+JfS}BL_Asb.)x6I<RpWE!KHF?T$/8jZolUGqQc', WW[-jW[75]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[-jW[75]].length, WW[jW[36]] = [], WW[jW[47]] = jW[1], WW[jW[76]] = jW[1], WW[jW[25]] = -jW[2]), WW[-jW[37]] = jW[1]; WW[-jW[37]] < WW[jW[3]]; WW[-jW[37]]++)
            if (WW[jW[5]] = WW[jW[2]].indexOf(WW[-jW[75]][WW[-jW[37]]]), WW[jW[5]] !== -jW[2])
              if (WW[jW[25]] < jW[1]) WW[jW[25]] = WW[jW[5]];
              else {
                HW(WW[jW[25]] += WW[jW[5]] * jW[30], WW[jW[47]] |= WW[jW[25]] << WW[jW[76]], WW[jW[76]] += (WW[jW[25]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
                do {
                  HW(WW[jW[36]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[jW[76]] -= jW[10])
                } while (WW[jW[76]] > jW[25]);
                WW[jW[25]] = -jW[2]
              } return WW[jW[25]] > -jW[2] && WW[jW[36]].push((WW[jW[47]] | WW[jW[25]] << WW[jW[76]]) & jW[11]), kW(WW[jW[36]])
        }

        function bW(...WW) {
          return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = AW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
        }
        HW(hW(KW, MW, JW), hW(SW, JW, MW), EW()[bW(134)](YW, JW, SW));
        const UW = EW()[bW(135)](JW),
          TW = EW()[bW(jW[77])](MW, JW) / WW[jW[7]] / UW,
          nW = Math[bW(jW[80])](TW, jW[1]) + jW[2];
        if (WW[jW[7]] * WW[jW[7]] < EW()[jW[78]](SW)) {
          function uW(...WW) {
            for (HW(WW[jW[12]] = jW[2], WW[jW[43]] = '01w}^9;~_6D3l|5TjGJgf8ka]y+NCZ{FLSh,H!E2$U`4%X)?7:BKqm#*et"Ri>xs(.@n[dpI=c/YQ<V&MvAuOPWorbz', WW[jW[31]] = "" + (WW[jW[1]] || ""), WW[jW[14]] = WW[jW[31]].length, WW[-jW[38]] = [], WW[jW[79]] = jW[1], WW[jW[23]] = jW[1], WW[jW[77]] = -jW[2]), WW[jW[10]] = jW[1]; WW[jW[10]] < WW[jW[14]]; WW[jW[10]]++)
              if (WW[jW[57]] = WW[jW[43]].indexOf(WW[jW[31]][WW[jW[10]]]), WW[jW[57]] !== -jW[2])
                if (WW[jW[77]] < jW[1]) WW[jW[77]] = WW[jW[57]];
                else {
                  HW(WW[jW[77]] += WW[jW[57]] * jW[30], WW[jW[79]] |= WW[jW[77]] << WW[jW[23]], WW[jW[23]] += (WW[jW[77]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
                  do {
                    HW(WW[-jW[38]].push(WW[jW[79]] & jW[11]), WW[jW[79]] >>= jW[10], WW[jW[23]] -= jW[10])
                  } while (WW[jW[23]] > jW[25]);
                  WW[jW[77]] = -jW[2]
                } return WW[jW[77]] > -jW[2] && WW[-jW[38]].push((WW[jW[79]] | WW[jW[77]] << WW[jW[23]]) & jW[11]), kW(WW[-jW[38]])
          }

          function oW(...WW) {
            return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = uW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
          }
          EW()[oW(138)](MW, MW, SW, nW)
        }
        HW(WW[jW[77]] = (jW[1], NW.v)(WW[jW[77]], 1, Math[bW(jW[80])](jW[2], Math[bW(jW[38])](jW[1], -TW, jW[2] - UW / WW[jW[7]]))), EW()[bW(jW[6])](MW, MW, YW))
      }
      const tW = yW;
      if (HW(EW()[iW(141)](tW, MW, JW), tW[jW[2]] = jW[1], WW[jW[3]] = EW()[iW(142)](tW)), !wW) {
        function dW(...WW) {
          function OW(...WW) {
            return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
              for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';qOUtWhkdC,K~0/f_XuTe?|[)Jv@3N*Ra<V8pYmo=>r15#gbzQBHlxPwF4{!9D(EA&"^Gi.M:26}sc$y7]+`ISLZjn%', WW[jW[81]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[81]].length, WW[jW[83]] = [], WW[jW[47]] = jW[1], WW[jW[8]] = jW[1], WW[jW[51]] = -jW[2]), WW[-jW[82]] = jW[1]; WW[-jW[82]] < WW[jW[3]]; WW[-jW[82]]++)
                if (WW[-jW[73]] = WW[jW[4]].indexOf(WW[jW[81]][WW[-jW[82]]]), WW[-jW[73]] !== -jW[2])
                  if (WW[jW[51]] < jW[1]) WW[jW[51]] = WW[-jW[73]];
                  else {
                    HW(WW[jW[51]] += WW[-jW[73]] * jW[30], WW[jW[47]] |= WW[jW[51]] << WW[jW[8]], WW[jW[8]] += (WW[jW[51]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
                    do {
                      HW(WW[jW[83]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[jW[8]] -= jW[10])
                    } while (WW[jW[8]] > jW[25]);
                    WW[jW[51]] = -jW[2]
                  } return WW[jW[51]] > -jW[2] && WW[jW[83]].push((WW[jW[47]] | WW[jW[51]] << WW[jW[8]]) & jW[11]), kW(WW[jW[83]])
            }(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
          }
          WW[jW[12]] = jW[1], HW(WW[jW[84]] = iW(144) + iW(145) + OW(146), WW[jW[2]] = OW(147) + OW(148) + OW(149) + OW(150) + "?", WW[jW[19]] = OW(151) + OW(152) + OW(153) + OW(154), WW[jW[84]].match(WW[jW[2]] + WW[jW[19]]))
        }
        iW(143) in sW && dW(), WW[jW[3]] *= WW[jW[77]]
      }
      const ZW = WW[jW[23]][iW(155) + iW(156) + iW(157)],
        xW = ZW ? Math[iW(158)](ZW, WW[jW[3]]) : WW[jW[3]];
      EW()[iW(jW[84]) + iW(jW[39])](tW, tW);
      const lW = WW[jW[25]] !== jW[59] && WW[jW[25]] !== void jW[1] ? WW[jW[25]] : WW[jW[23]][iW(161) + iW(162) + iW(jW[82]) + iW(jW[88])];
      if (xW > jW[1]) {
        function eW(...WW) {
          for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ':%[2~39NF(pfX{5+AOdP=8J|x`kU6thunajgI,v"ZD>bBr_lC7y1Q?0EeHm]*Ts!}&K4YRLwcW$#iMV;zG/)@^So.<q', WW[jW[13]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[13]].length, WW[jW[19]] = [], WW[jW[47]] = jW[1], WW[jW[23]] = jW[1], WW[jW[51]] = -jW[2]), WW[jW[85]] = jW[1]; WW[jW[85]] < WW[jW[3]]; WW[jW[85]]++)
            if (WW[jW[57]] = WW[jW[4]].indexOf(WW[jW[13]][WW[jW[85]]]), WW[jW[57]] !== -jW[2])
              if (WW[jW[51]] < jW[1]) WW[jW[51]] = WW[jW[57]];
              else {
                HW(WW[jW[51]] += WW[jW[57]] * jW[30], WW[jW[47]] |= WW[jW[51]] << WW[jW[23]], WW[jW[23]] += (WW[jW[51]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
                do {
                  HW(WW[jW[19]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[jW[23]] -= jW[10])
                } while (WW[jW[23]] > jW[25]);
                WW[jW[51]] = -jW[2]
              } return WW[jW[51]] > -jW[2] && WW[jW[19]].push((WW[jW[47]] | WW[jW[51]] << WW[jW[23]]) & jW[11]), kW(WW[jW[19]])
        }

        function vW(...WW) {
          return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = eW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
        }

        function gW(...WW) {
          WW[jW[12]] = jW[1]
        }
        vW(165) in sW && gW();
        let DW = WW[jW[0]][vW(168) + vW(169)] * lW;
        if (!wW) {
          function pW(...WW) {
            for (HW(WW[jW[12]] = jW[2], WW[jW[2]] = 'N|Ofu6Zq0/4Y%[T$#8Pg5}S9e"`HcF,rn(EKvJ.<R31!DswhCy;p&~2)]Vo?{QxkBLjG=7bz@_aMI^A*+>W:iUdltXm', WW[jW[0]] = "" + (WW[jW[1]] || ""), WW[jW[14]] = WW[jW[0]].length, WW[-jW[87]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[jW[86]] = -jW[2]), WW[jW[10]] = jW[1]; WW[jW[10]] < WW[jW[14]]; WW[jW[10]]++)
              if (WW[jW[57]] = WW[jW[2]].indexOf(WW[jW[0]][WW[jW[10]]]), WW[jW[57]] !== -jW[2])
                if (WW[jW[86]] < jW[1]) WW[jW[86]] = WW[jW[57]];
                else {
                  HW(WW[jW[86]] += WW[jW[57]] * jW[30], WW[jW[7]] |= WW[jW[86]] << WW[jW[8]], WW[jW[8]] += (WW[jW[86]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
                  do {
                    HW(WW[-jW[87]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
                  } while (WW[jW[8]] > jW[25]);
                  WW[jW[86]] = -jW[2]
                } return WW[jW[86]] > -jW[2] && WW[-jW[87]].push((WW[jW[7]] | WW[jW[86]] << WW[jW[8]]) & jW[11]), kW(WW[-jW[87]])
          }

          function fW(...WW) {
            return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = pW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
          }
          DW *= WW[jW[0]][fW(170) + fW(jW[89])]
        }
        let VW = WW[jW[0]][vW(172) + vW(173) + "ss"] * xW;
        if (xW < .3) {
          function CW(...WW) {
            for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';IEWPRFDblVCX5QwqUB6m$>j+x7KYohTzg%@8!#GsLkv~JO92/_,dZec)[SnM3uy<:r"=]H&A}N|4tf{*p(`1.i0?a^', WW[-jW[88]] = "" + (WW[jW[1]] || ""), WW[jW[14]] = WW[-jW[88]].length, WW[jW[19]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[-jW[89]] = -jW[2]), WW[jW[10]] = jW[1]; WW[jW[10]] < WW[jW[14]]; WW[jW[10]]++)
              if (WW[jW[5]] = WW[jW[4]].indexOf(WW[-jW[88]][WW[jW[10]]]), WW[jW[5]] !== -jW[2])
                if (WW[-jW[89]] < jW[1]) WW[-jW[89]] = WW[jW[5]];
                else {
                  HW(WW[-jW[89]] += WW[jW[5]] * jW[30], WW[jW[7]] |= WW[-jW[89]] << WW[jW[8]], WW[jW[8]] += (WW[-jW[89]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
                  do {
                    HW(WW[jW[19]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
                  } while (WW[jW[8]] > jW[25]);
                  WW[-jW[89]] = -jW[2]
                } return WW[-jW[89]] > -jW[2] && WW[jW[19]].push((WW[jW[7]] | WW[-jW[89]] << WW[jW[8]]) & jW[11]), kW(WW[jW[19]])
          }

          function XW(...WW) {
            return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = CW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
          }

          function BW(...WW) {
            function iW() {}
            WW[jW[12]] = jW[1], HW(WW[-jW[21]] = function(...WW) {
              for (HW(WW[jW[12]] = jW[0], WW[jW[0]] = jW[1], WW[jW[92]] = jW[1], WW[-jW[90]] = new iW(jW[1]), WW[-jW[93]] = WW[-jW[90]], WW[jW[91]] = WW[jW[1]], WW[jW[25]] = WW[jW[2]]); WW[jW[91]] !== jW[59] || WW[jW[25]] !== jW[59];) HW(WW[jW[92]] = (WW[jW[91]] ? WW[jW[91]].val : jW[1]) + (WW[jW[25]] ? WW[jW[25]].val : jW[1]) + WW[jW[0]], WW[jW[0]] = Math.floor(WW[jW[92]] / jW[94]), WW[-jW[93]].next = new iW(WW[jW[92]] % jW[94]), WW[-jW[93]] = WW[-jW[93]].next, WW[jW[91]] = WW[jW[91]] ? WW[jW[91]].next : jW[59], WW[jW[25]] = WW[jW[25]] ? WW[jW[25]].next : jW[59]);
              return WW[jW[0]] && (WW[-jW[93]].next = new iW(WW[jW[0]])), WW[-jW[90]].next
            }, console.log(WW[-jW[21]]))
          }
          XW(174) + "s" in sW && BW(), VW *= xW
        }
        DW > VW && (DW = VW), HW(EW()[vW(175)](tW, tW, DW), WW[jW[36]][vW(176) + vW(177)](tW))
      }
      WW[jW[36]][iW(jW[48]) + jW[95]] = WW[jW[0]][iW(jW[52]) + iW(jW[45]) + jW[95]] * (wW ? mW : PW)
    }
  },
  38824: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      e: () => LW
    });
    var mW = OW(38831),
      EW = OW(2012);
    const NW = 2,
      PW = 1,
      LW = {
        FP: 1,
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

    function cW(WW, iW, OW, LW, cW, wW, tW) {
      if (cW.speed) return (0, mW.c)(iW, OW, LW, cW, wW, tW, WW), void(cW.ticksToReachMaxIdleFriction = NW);
      const ZW = LW.isOnGround(),
        xW = iW.bloxd.getSyncedClientOptions(iW.bloxd.getPlayerReader(OW)),
        lW = null === xW ? iW.bloxd.getClientPredictedOption(OW, "groundFrictionScale") : xW.groundFrictionScale,
        AW = null === xW ? iW.bloxd.getClientPredictedOption(OW, "airFrictionScale") : xW.airFrictionScale,
        bW = ZW ? lW : AW,
        jW = Math.max(PW, bW),
        UW = cW.ticksToReachMaxIdleFriction / NW,
        kW = (0, EW.v)(jW, bW, UW);
      wW.friction = WW.standingFriction * ((null === xW ? iW.bloxd.getClientPredictedOption(OW, "airMomentumConservation") : xW.airMomentumConservation) ? kW : bW), cW.ticksToReachMaxIdleFriction > 0 && cW.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);