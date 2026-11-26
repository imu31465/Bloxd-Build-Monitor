export const id = 244;
export const ids = [244];
export const modules = {
  39250: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => pU
    });
    var cU = zU(212),
      yU = zU(38388);
    const QU = 1.2,
      AU = {
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
        xE: .5,
        GzU: !1
      },
      FU = {
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
        xE: .5,
        GzU: !1
      },
      oU = {
        physicsBodyDimensions: {
          width: cU.f.zg,
          height: cU.f.cg
        },
        hitBoxDimensions: {
          width: cU.f.zg + .4,
          height: cU.f.cg + .6
        },
        eyeHeight: cU.f.cg * cU.f.playerEyeToHeightRatio,
        rideHeight: cU.f.cg - .3,
        xE: .5,
        GzU: !1
      },
      DU = {
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
        xE: .5,
        GzU: !1
      },
      EU = {
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
        xE: .5,
        GzU: !1
      },
      YU = {
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
        xE: .5,
        GzU: !1
      },
      NU = {
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
        xE: .5,
        GzU: !1
      },
      IU = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: cU.f.zg,
            height: cU.f.cg
          },
          hitBoxDimensions: {
            width: cU.f.zg + .4,
            height: cU.f.cg + .6
          },
          eyeHeight: cU.f.cg * cU.f.playerEyeToHeightRatio,
          rideHeight: cU.f.cg - .1,
          xE: yU.e.xE,
          GzU: !0
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
        },
        Camel: {
          modelScale: QU,
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
        },
        "Cave Golem": AU,
        "Draugr Zombie": {
          ...oU,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": oU,
        "Frost Golem": AU,
        "Frost Zombie": {
          ...oU,
          defaultPose: "zombie"
        },
        "Frost Skeleton": oU,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: cU.f.zg,
            height: cU.f.cg
          },
          hitBoxDimensions: {
            width: cU.f.zg + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          xE: .5,
          GzU: !1
        },
        Wolf: DU,
        Bear: EU,
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
          xE: .5,
          GzU: !1
        },
        Stag: YU,
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
          xE: .5,
          GzU: !1
        },
        Gorilla: NU,
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
          xE: .5,
          GzU: !1
        },
        "Draugr Huntress": oU,
        "Magma Golem": AU,
        "Spirit Golem": AU,
        "Spirit Wolf": DU,
        "Spirit Bear": EU,
        "Spirit Stag": YU,
        "Spirit Gorilla": NU,
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: cU.f.zg,
            height: cU.f.cg
          },
          hitBoxDimensions: {
            width: cU.f.zg + .4,
            height: cU.f.cg + .6
          },
          eyeHeight: cU.f.cg * cU.f.playerEyeToHeightRatio,
          rideHeight: cU.f.cg - .1,
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: cU.f.zg,
            height: cU.f.cg
          },
          hitBoxDimensions: {
            width: cU.f.zg + .4,
            height: cU.f.cg + .6
          },
          eyeHeight: cU.f.cg * cU.f.playerEyeToHeightRatio,
          rideHeight: cU.f.cg - .1,
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
        },
        Zombie: {
          ...oU,
          defaultPose: "zombie"
        },
        Skeleton: oU,
        Mummy: {
          ...oU,
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
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
          xE: .5,
          GzU: !1
        },
        "Iron Guardian": FU,
        "Gold Guardian": FU,
        "Diamond Guardian": FU,
        "Moonstone Guardian": FU,
        "Iron Goofy Golem": FU,
        "Gold Goofy Golem": FU,
        "Diamond Goofy Golem": FU,
        "Moonstone Goofy Golem": FU,
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
          xE: .5,
          GzU: !1
        }
      };

    function pU(UU) {
      return IU[UU]
    }
  },
  37794: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = {
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
  38394: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(352),
      yU = zU.n(cU),
      QU = zU(1974);
    let AU;
    var FU, oU, DU, EU, YU, NU, IU, pU, aU;
    const tU = [1, 143, 0, 36, 3, "i", "g", "e", 6, "d", 8, 255, "length", 100, 149, 40, 4, "undefined", void 0, 162, 2, "a", 63, "fromCodePoint", 7, 12, "push", 156, 222, 76, "c", "b", 105, 230, 54, 84, 91, 8191, 88, 13, 14, 17, 173, 28, 33554432, 67108864, 45, 195, 212, 111, 123, 124, 125, null, 127, 128, 129, 130, 131, 115, 116, 117, 118, 119, 120, 121, 122, 137, 138, 126, 139, 140, 141, 142, 5, 144, 47, 9, "ep", "f", 213, 146, 10, 23, 75, 66, "on"];

    function gU(...UU) {
      return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = function(...UU) {
        for (CU(UU[tU[12]] = tU[0], UU[tU[0]] = 'nutYgsFdEfIoRSZcXpmUKkLDQ]9/he%bi;)j=v{",^4+}NCBO3x1yz<w~PrHWTMJ!*_.|7:A@q(l>a[&$VG58`?206#', UU[-tU[1]] = "" + (UU[tU[2]] || ""), UU[tU[4]] = UU[-tU[1]].length, UU[tU[9]] = [], UU[tU[7]] = tU[2], UU[tU[8]] = tU[2], UU[tU[6]] = -tU[0]), UU[tU[3]] = tU[2]; UU[tU[3]] < UU[tU[4]]; UU[tU[3]]++)
          if (UU[tU[5]] = UU[tU[0]].indexOf(UU[-tU[1]][UU[tU[3]]]), UU[tU[5]] !== -tU[0])
            if (UU[tU[6]] < tU[2]) UU[tU[6]] = UU[tU[5]];
            else {
              CU(UU[tU[6]] += UU[tU[5]] * tU[36], UU[tU[7]] |= UU[tU[6]] << UU[tU[8]], UU[tU[8]] += (UU[tU[6]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
              do {
                CU(UU[tU[9]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[tU[8]] -= tU[10])
              } while (UU[tU[8]] > tU[24]);
              UU[tU[6]] = -tU[0]
            } return UU[tU[6]] > -tU[0] && UU[tU[9]].push((UU[tU[7]] | UU[tU[6]] << UU[tU[8]]) & tU[11]), kU(UU[tU[9]])
      }(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
    }

    function kU(...UU) {
      return UU[tU[12]] = tU[0], typeof EU !== tU[17] && EU ? (new EU).decode(new YU(UU[tU[2]])) : typeof NU !== tU[17] && NU ? NU.from(UU[tU[2]]).toString("utf-8") : aU(UU[tU[2]])
    }

    function GU() {}
    CU(FU = {}, oU = ['3A[>0{(RopQw+G)p?"RebTUeySQ', "sehIIMQQYUW$L{F", "]ei%BroUmRJqXHI]Z3k>#qZQ0SGLHZX90)YsG{vdBz!:yXJe.YFy(W[FF", "AY[hi<~yVJ)bjxd].Nc[!OD^OmsFiAuD*O&<X5QExUPaTg@{UPpiejmCI*}", "nWeyD7HJpf`ztVhj>*Swm5pe%_|qg=y/RP7Atzy!eH<jhBtv", "P)zbC|MCDr37;vIK)R7wx:BU)Wg|KAdmZJ(s.M%=d", "bW{hIP%%_PQ>OBHe*fNbC|!CUU.q|@l{e*>s", "@o%w:)[)]rip}HS/HD%dROVu", "%fm/bq?y{r`:J5+{<OUI", "9D;1m>>QQS]/ZV=b.NiF", '<KCwlxu2TzgSS@n=}b2qp7g4"!gtCToUQKp[X>,mvSSK3@*bFu', "OPtsDBp]L!m@oZTjcf7(;[&^5f~", "LDleY)=%+KV:_3^bNP6EtzfUHp$VUte%6*Zd=B_FrpHa>O9e", "dA7deTQQJzMdzXY+Ykad4:_%nP2(J5i=Qu", "JfNd&xqu]ZJ~aQ</v+=(h`1^=fn@@@d]Ket", '~,:hOl*1Vc/7oYvmkWSI/<=RqM`.)t"{"P@3q=+dHKQSOcS{R3vg*Wn', "XASwGVS]U<Th9shjpFOfj3APeZ<JCSA{lo:g%yI=oKv", "Y_.9:Vn", "KcX[W@Iy}M=d@A:mXFByax71%_3$|=6^>p%b)|n", "<Pf<zvf]6MA$67!4<RFwiH.1ZkbMKA.%N9_1+~Wt", "k1nfMWS^NH4wgA#=i|vwswyt", "IPw3,qEm=SG:d5+U", "*1D[(V]j+Ma(DtgvL9?gP8au", "$~v>:W},NMsSOcq{^(1e/qB`GRau29NUwK)/2B|rD!eQK/N/IPqF95ku+~;7u", "c1b<FWAdKS[=u", "L1O<]qfd;c`eVOj%nec;XwJPPKP$0jEU,|lEOG.jtU", "f3vw!WPB%Jp%j9!Qg9f/M)/evUi*SW,m|<*F|why6p", "PMHI*VEr7UWmn/2^%v|e2{8)^ZMyu", '@b+i4GDB}Z"&=O"bTq5z]`XC:!ElJr`^54ge38|FP*|h1r+9wp^F*"M$nR', "UAp[*OWt&R2UmVPjNDLhr:d7Jz5.ag", "=R.z95`7pJfXu", 'mJbq2;DdiW//dxyhEA+e,lUe&~>oKc,U"MYs', '@1E[kx`P!RyqU{0h?4QF:@h$dSB75Y$"', "#~Cbm7<C3fwh%sr^/f}eYO1SX_*uO5Q4hC4@D[n", "#H8AWz&SYfoTNgN{2:`gyJn", 'NMzyO8cS@Su<OH!=tR2h>=Rmr*G(_{"]Zv~<]5OCjfT', "GY_13vwd]ZSr1rn=](iFF(iR{!6aPv`hQW}w$5od9Kh&n", 'RJcF$wF=yf&gR"c/xN41H"?CuPhIzO!%SP}eJrn', "sg;1}18QSZqgX5G)fC:w|@>RsS", "FDZyh,,=,r[Lms@UgAY", "T,u1.C_%0K.aM:E{+R?g)$APs", 'vOhwt8H`!R9/.Gp"zf.s3J8yGWJ3=Y', "A|{daO_C%kj>TgW^", "gWoi*V?yimSKTg", "B1Dg+TDuIH}7/9R", '1<7Ix1zdaZ0aU9W4"*cf', "6H2gLxaumUs|5A#huerEqP<(3Pm&5jbpdPxe;B8Q4Kz7ItF", 'IvCg^3_r#Mw>ZGO)qF+i2P,QFw"bgceps9sw,$n', 'oA6<bqpdTz$E;OB"W,$3(PsJ_<lmiBPeng?h[w<CWpPa#:p"<<$FaOHe^*I%u', 'yR*Ft8l1uf0!0Ay,6O&yyl>mFw>$w:O)"eMdyC4Ru_^Hbxn4$n', "+e8xJ)DejPH$LT(9$NL;UxyCCc8JhAm,[1(z>=mC$mjHu", "6H5xhy`SLU5iox6hFRAf:WTeC~sF:V>U+F?hQ", '8"=e`y=yGWa(<{g{WDHzXywJ7S`J$BB/R|N>`7<mgPcF`g', "_hR(I{hEYfepu8uQ6Hcf&(%txP}75YA]*O`dP@E=Sm>zf8;D9W<f", 'bCCb13De7UBM_S`j^eTb?ysdXk:_;XV"', "5qX<zr)moK)>iBo]L(vb;[[?Vc:j|5X,}PRe<zXrMHCpG]6)Ff;%F=1dnR,bu", "<p|z[P`^s", 'wYlsGM)$x<.qg"jboe%wbAXtbmj/VQq{^vFycwI:wS', "L(0f$A^75U/", 'vDTIyl/V!mag":k^*p|ej,A^!R6a^g', "7F>zC3,=C~ParTtQ{KgIG7Dj$J%@0OI", "dg#1fM_RCmi)QB9=kF@FNl&^EIV:|Of", "[M^FUxt?)<e7tTp/KRt", "P|Syp{!RVJwZJ:Lhi+u1wv$(g", "7flao?&16Z/w:S`LFmlE2N=ROk/MhYnv]KUi5PTu", ",|;F9q2`Ufu;?3dU%C>djjn", "RAhb?{%mu<Wd!cB,YP>dl(I!^pf1%3eDW|yIw8CrDrkKl:JvjvGE", "*YWzlOP^&~8]r7w)K9AgCr.jI*rZ#]@]pF,3$59=&mTdQA6^", 'IRMheqrm>o4wncQ)L(wy!@"B_PW', 'CMhe1v>?G<4d`Q~h3v]19P"dNo3p7Qu+jW5(QA`^JWkv>cI', 'ZRE%9y(%hH.a73m,%e}I=B=tdKk>@/@vov@<Nl9!IM8z>5^"jO<yF(g4d', ")D&h38ymLS#:<S`h=F%w4l0([~ulKHK/[1?gk>XysSq$u8SUF3t", "{R5aQPvSa~YD(3g+ufAg^qg%F", "+A4@1J},AKq:}g$/?1&<=`ymopp/_SLjR,Q;k", "(oHE]5eUaoR1nY.m3)FyU", "eWswE?2P#Mu[VQ/hnku1.C%?)<j_LV*Qb|c%LA$,XR_ZQ5`/?Hyav,0,#K.au", "vPE1;TG,GR*_Pg0eZP`g27wBmRiMmV=%[vBqw)t!,K]O3WqUHHDq)$W|g", "UmFdT)~C|SZSq=Qj#~`d6[n", "(DYs(PFmM~}Q^@Ph$hY@4q<,oKTJb{_Q^PFy@&T7&zg@BcE9Dcxi*=`j0SW", "Th7AFxlPtf8e@AFm!|/a<GI?BkY&B{6Xx<Gs", "B<mevHqe+M^p.r?L;RCg", "$Y+iV7Tj|!;Z:]#jkWTbi,,yw!.hVWy,8:!1NG;BimNH}5s]yn", "EP)@HrQC1P7incWpIvBq)q=yXc;ZzXo9{+D3/{QE9ZTk2t", 'Li%b6AR!{!$u(]N"|N1En"<C{!AqA9?)&Nt', "LWpiSVRQY", "WA3/NlXrNz0R&{PhTAx1R>>Cck:3qO#4qD[A<G$C;PTHwZMj8HJ3<JDu", "n<Y(${RmHZ~>m9WjFg;FYCOmZ_<m<]?,I38b*C!Q&~R/Tg.=J|7bh", "8bCyawkBySJd29np6O#zHzS^^p*iu", "@<jI@W<C+HnXu", "W9f1G;H7>~%>AYx,m18zNG<(K<pvYx.]DDL>T&Nu", "Q*Jf(V;B9K9@?V~4@n", "0)zd%,4,Rk", "b,(i~r<C|S%):3I", "H,8e4q=QeH/&~5>{,1:hR7Ct", "4123wJ=t~*g&ST<),Y<g!W&eJ~GE3O4]te7IcVW(.U<j;g", ";Di%87$,3Wx~zO4{scnF}T}yIZ#.&BL)3*t", 'W,&3,|gE`rlmx]fUR3#EUPFmnW%ynY^"5q4lVV"7*c{', "[~Md5N/ltR8Lj96L,(a9NvdSMJW", "uPB<8AoV;P!o;X:{^vRIDym=iRwy.ZK)YcY", ".fSwZ>#?Nz7:cxYpCPX%%$<yY!<jbt|p?1(1FM@rFIjH$/MQyf8(f>n", 'FRY@p{$)(p"&V=.bZv}I', "DiFy_8Uu=fb>BZ@9Rgt", "e+{yW@i?FI3qH:#ee(pF77BB*Py", "M)QqNa(,q*4wArTp|vx@eqjj5R,ILTF]r<:>{qul`S", "JOGE|@it", "_1{baVKt", "I)ta8_X>", "%M(D", "36tDA]i", "%)sc", '"LZ+}X"<', "4sO;|Fx", "f%c8>4[#", ":%(+km[#", "%%08", "f%,3H9z#", "2%P4[4E#", "Ln,3KDl#", "&.e3E", "f%,3[4E#", "Lnc8:ae#", 'zv"u&mf#', 'aL"&&Dz#', "Fr~&U3f#", "Jrm43AE#", "+n3h!,s#", "f%,3[4nRJW", "vIl&+F*W?e", "][K(AApTJW", "Vv(+]aE#", "&/m4|3M<", "Y66&7", "R%c8", "0%,hW", "v.V&R", "+jSrclI#", "~|p;7", "Vvr&NZ>#", "&;ruRmx", "Vvr&7D:#", 'Ln"&K4.<', "+nb&^aj#", "R/m4|3x", "aluJ", "y9D>", "sY.I", "krD>", 'RWO7Lxl"', ")W=Z4", "<6wI", "Q&cJ", "P|bu", "k%e3DAv#", "ps,9QAXe", 'VY0Q3t"e', "O!kdLRBB", "<@$8IYd#", ":[F4AA[#", "b;_u", "Bvp;", "J.r&B,s#", "~h_u", ":._&94e#", "./pN.a>#", "UJE8aAE#", "SsFP^ax", "x%k][Ul#", ":._&I{n#", "<Q}P", "i/*<Q]~K", "_(ZV7@W", ";cx:&X+t", ")6}15wGt", "#Q.P3pf", "CbqQ$zEe", "X.BO`", "Zrm43AE#", ":._&b3t#"]), CU(DU = function(...UU) {
      CU(UU[tU[12]] = tU[2], UU[tU[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], UU[tU[13]] = tU[18], UU[-tU[14]] = []);
      try {
        CU(UU[tU[13]] = Object, UU[-tU[14]][tU[26]]("".__proto__.constructor.name))
      } catch (oU) {}
      UU: for (UU[tU[7]] = tU[2]; UU[tU[7]] < UU[tU[15]][tU[12]]; UU[tU[7]]++) try {
        for (UU[tU[13]] = UU[tU[15]][UU[tU[7]]](), UU[tU[16]] = tU[2]; UU[tU[16]] < UU[-tU[14]][tU[12]]; UU[tU[16]]++)
          if (typeof UU[tU[13]][UU[-tU[14]][UU[tU[16]]]] === tU[17]) continue UU;
        return UU[tU[13]]
      } catch (oU) {}
      return UU[tU[13]] || this
    }() || {}, EU = DU.TextDecoder, YU = DU.Uint8Array, NU = DU.XY, IU = DU.String || String, pU = DU.Array || Array, aU = function(...UU) {
      return CU(UU[tU[12]] = tU[2], UU[-tU[27]] = new pU(tU[55]), UU[tU[0]] = IU[tU[23]] || IU.fromCharCode, UU[tU[19]] = []),
        function(...XU) {
          for (CU(XU[tU[12]] = tU[0], XU[tU[21]] = tU[18], XU[tU[20]] = tU[18], XU[tU[4]] = XU[tU[2]][tU[12]], UU[tU[19]][tU[12]] = tU[2]), XU[tU[16]] = tU[2]; XU[tU[16]] < XU[tU[4]];) CU(XU[tU[20]] = XU[tU[2]][XU[tU[16]]++], XU[tU[20]] <= tU[54] ? XU[tU[21]] = XU[tU[20]] : XU[tU[20]] <= 223 ? XU[tU[21]] = (31 & XU[tU[20]]) << tU[8] | XU[tU[2]][XU[tU[16]]++] & tU[22] : XU[tU[20]] <= 239 ? XU[tU[21]] = (15 & XU[tU[20]]) << tU[25] | (XU[tU[2]][XU[tU[16]]++] & tU[22]) << tU[8] | XU[tU[2]][XU[tU[16]]++] & tU[22] : IU[tU[23]] ? XU[tU[21]] = (XU[tU[20]] & tU[24]) << 18 | (XU[tU[2]][XU[tU[16]]++] & tU[22]) << tU[25] | (XU[tU[2]][XU[tU[16]]++] & tU[22]) << tU[8] | XU[tU[2]][XU[tU[16]]++] & tU[22] : (XU[tU[21]] = tU[22], XU[tU[16]] += tU[4]), UU[tU[19]][tU[26]](UU[-tU[27]][XU[tU[21]]] || (UU[-tU[27]][XU[tU[21]]] = UU[tU[0]](XU[tU[21]]))));
          return UU[tU[19]].join("")
        }
    }());
    const BU = yU()[gU(tU[32])](),
      ZU = yU()[gU(tU[32])](),
      RU = yU()[gU(tU[32])](),
      PU = yU()[gU(tU[32])](),
      WU = yU()[gU(tU[32])](),
      dU = yU()[gU(tU[32])](),
      LU = yU()[gU(tU[32])](),
      eU = (...UU) => {
        function XU(...UU) {
          return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = function(...UU) {
            for (CU(UU[tU[12]] = tU[0], UU[-tU[35]] = 'iC>4B|pgD6cdqT{lkE$G,sR1nLu%#NA.a:XHFIUrmv")f<P8jK9twWh5+oYbQOZ73Sx!_*?]@/MJeVy=;z[(`~0&^}2', UU[tU[31]] = "" + (UU[tU[2]] || ""), UU[-tU[34]] = UU[tU[31]].length, UU[tU[9]] = [], UU[tU[7]] = tU[2], UU[tU[8]] = tU[2], UU[tU[16]] = -tU[0]), UU[-tU[33]] = tU[2]; UU[-tU[33]] < UU[-tU[34]]; UU[-tU[33]]++)
              if (UU[tU[5]] = UU[-tU[35]].indexOf(UU[tU[31]][UU[-tU[33]]]), UU[tU[5]] !== -tU[0])
                if (UU[tU[16]] < tU[2]) UU[tU[16]] = UU[tU[5]];
                else {
                  CU(UU[tU[16]] += UU[tU[5]] * tU[36], UU[tU[7]] |= UU[tU[16]] << UU[tU[8]], UU[tU[8]] += (UU[tU[16]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
                  do {
                    CU(UU[tU[9]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[tU[8]] -= tU[10])
                  } while (UU[tU[8]] > tU[24]);
                  UU[tU[16]] = -tU[0]
                } return UU[tU[16]] > -tU[0] && UU[tU[9]].push((UU[tU[7]] | UU[tU[16]] << UU[tU[8]]) & tU[11]), kU(UU[tU[9]])
          }(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
        }
        UU[tU[12]] = tU[4];
        const zU = dU;
        return yU()[XU(106) + XU(107)](zU, UU[tU[20]]), yU()[XU(108)](UU[tU[2]], zU, yU()[XU(109)](zU, UU[tU[0]]))
      };

    function CU() {
      CU = function() {}
    }
    AU = (...UU) => {
      function XU(...UU) {
        return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = function(...UU) {
          for (CU(UU[tU[12]] = tU[0], UU[tU[0]] = 'x<#6@0(=u;81[`2%>*fWecGkt7v~EHRP&]sV:JzXn^?.!LIBd{lr5$j+)/ib|}UypoC",ZFmONhM43DgaAY_w9TQqKS', UU[tU[31]] = "" + (UU[tU[2]] || ""), UU[tU[4]] = UU[tU[31]].length, UU[tU[16]] = [], UU[tU[7]] = tU[2], UU[-tU[43]] = tU[2], UU[tU[6]] = -tU[0]), UU[tU[41]] = tU[2]; UU[tU[41]] < UU[tU[4]]; UU[tU[41]]++)
            if (UU[-tU[42]] = UU[tU[0]].indexOf(UU[tU[31]][UU[tU[41]]]), UU[-tU[42]] !== -tU[0])
              if (UU[tU[6]] < tU[2]) UU[tU[6]] = UU[-tU[42]];
              else {
                CU(UU[tU[6]] += UU[-tU[42]] * tU[36], UU[tU[7]] |= UU[tU[6]] << UU[-tU[43]], UU[-tU[43]] += (UU[tU[6]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
                do {
                  CU(UU[tU[16]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[-tU[43]] -= tU[10])
                } while (UU[-tU[43]] > tU[24]);
                UU[tU[6]] = -tU[0]
              } return UU[tU[6]] > -tU[0] && UU[tU[16]].push((UU[tU[7]] | UU[tU[6]] << UU[-tU[43]]) & tU[11]), kU(UU[tU[16]])
        }(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
      }
      UU[tU[12]] = tU[10], XU(110) in GU && function(...UU) {
        function XU(...UU) {
          return UU[tU[12]] = tU[0], UU[tU[2]][tU[0]] * tU[45] + (UU[tU[2]][tU[2]] < tU[2] ? tU[44] | UU[tU[2]][tU[2]] : UU[tU[2]][tU[2]])
        }

        function zU(...UU) {
          switch (UU[tU[12]] = tU[0], ((UU[tU[2]] & tU[44]) !== tU[2]) * tU[0] + (UU[tU[2]] < tU[2]) * tU[20]) {
            case tU[2]:
              return [UU[tU[2]] % tU[44], Math.trunc(UU[tU[2]] / tU[45])];
            case tU[0]:
              return [UU[tU[2]] % tU[44] - tU[44], Math.trunc(UU[tU[2]] / tU[45]) + tU[0]];
            case tU[20]:
              return [((UU[tU[2]] + tU[44]) % tU[44] + tU[44]) % tU[44], Math.round(UU[tU[2]] / tU[45])];
            case tU[4]:
              return [UU[tU[2]] % tU[44], Math.trunc(UU[tU[2]] / tU[45])]
          }
        }
        UU[tU[12]] = tU[2], CU(UU[tU[30]] = XU([tU[20], tU[16]]), UU[-tU[46]] = XU([tU[0], tU[20]]), UU[tU[20]] = UU[tU[30]] + UU[-tU[46]], UU[-tU[47]] = UU[tU[20]] - UU[-tU[46]], UU[tU[16]] = UU[-tU[47]] * tU[20], UU[tU[48]] = UU[tU[16]] / tU[20], console.log(zU(UU[tU[20]])), console.log(zU(UU[-tU[47]])), console.log(zU(UU[tU[16]])), console.log(zU(UU[tU[48]])))
      }();
      const zU = UU[tU[2]][XU(tU[49])][XU(112) + XU(113) + XU(114)](UU[tU[0]]);
      UU[tU[21]] = UU[tU[2]][XU(tU[49])][XU(tU[59]) + XU(tU[60]) + XU(tU[61]) + XU(tU[62])](zU);
      const cU = UU[tU[21]] === tU[53] ? UU[tU[2]][XU(tU[49])][XU(tU[63]) + XU(tU[64]) + XU(tU[65]) + XU(tU[66])](UU[tU[0]], XU(tU[50]) + XU(tU[51]) + XU(tU[52]) + tU[7]) : UU[tU[21]][XU(tU[50]) + XU(tU[51]) + XU(tU[52]) + tU[7]],
        AU = UU[tU[21]] === tU[53] ? UU[tU[2]][XU(tU[49])][XU(tU[69]) + XU(tU[54]) + XU(tU[55])](UU[tU[0]], XU(tU[56]) + XU(tU[57]) + XU(tU[58])) : UU[tU[21]][XU(tU[56]) + XU(tU[57]) + XU(tU[58])];
      CU(yU()[XU(132)](BU, tU[2], tU[2], UU[tU[74]]), yU().ta(BU, BU, yU()[XU(133)], UU[tU[4]].heading), yU()[XU(134)](LU, UU[tU[16]].Et), LU[tU[0]] = tU[2]);
      const DU = UU[tU[20]][XU(135) + XU(136)]();
      if (CU(UU[tU[21]] = UU[tU[2]][XU(tU[49])][XU(tU[59]) + XU(tU[60]) + XU(tU[61]) + XU(tU[62])](zU), UU[tU[80]] = UU[tU[21]] === tU[53] ? UU[tU[2]][XU(tU[49])][XU(tU[63]) + XU(tU[64]) + XU(tU[65]) + XU(tU[66])](UU[tU[0]], XU(tU[67]) + XU(tU[68])) : UU[tU[21]][XU(tU[67]) + XU(tU[68])]), !DU && yU()[tU[78]](LU) && (UU[tU[21]] === tU[53] ? UU[tU[2]][XU(tU[49])][XU(tU[69]) + XU(tU[54]) + XU(tU[55])](UU[tU[0]], XU(tU[70]) + XU(tU[71]) + XU(tU[72]) + XU(tU[73])) : UU[tU[21]][XU(tU[70]) + XU(tU[71]) + XU(tU[72]) + XU(tU[73])])) {
        function pU(...UU) {
          for (CU(UU[tU[12]] = tU[0], UU[-tU[76]] = 'E<S!6Z`gJ>I[&WL9U%3+$.}y/~rs4QBa]K,Mh0(#_^;Yix2kHAqdvw{=8z7ulOmbDPofCNG|Fn*cX@j1?"5):TtRpeV', UU[tU[31]] = "" + (UU[tU[2]] || ""), UU[tU[30]] = UU[tU[31]].length, UU[tU[9]] = [], UU[tU[74]] = tU[2], UU[tU[8]] = tU[2], UU[tU[6]] = -tU[0]), UU[tU[75]] = tU[2]; UU[tU[75]] < UU[tU[30]]; UU[tU[75]]++)
            if (UU[tU[77]] = UU[-tU[76]].indexOf(UU[tU[31]][UU[tU[75]]]), UU[tU[77]] !== -tU[0])
              if (UU[tU[6]] < tU[2]) UU[tU[6]] = UU[tU[77]];
              else {
                CU(UU[tU[6]] += UU[tU[77]] * tU[36], UU[tU[74]] |= UU[tU[6]] << UU[tU[8]], UU[tU[8]] += (UU[tU[6]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
                do {
                  CU(UU[tU[9]].push(UU[tU[74]] & tU[11]), UU[tU[74]] >>= tU[10], UU[tU[8]] -= tU[10])
                } while (UU[tU[8]] > tU[24]);
                UU[tU[6]] = -tU[0]
              } return UU[tU[6]] > -tU[0] && UU[tU[9]].push((UU[tU[74]] | UU[tU[6]] << UU[tU[8]]) & tU[11]), kU(UU[tU[9]])
        }

        function aU(...UU) {
          return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = pU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
        }
        CU(eU(ZU, BU, LU), eU(RU, LU, BU), yU()[aU(tU[1])](PU, LU, RU));
        const gU = yU()[aU(tU[75])](LU),
          dU = yU()[aU(145)](BU, LU) / UU[tU[74]] / gU,
          wU = Math[aU(tU[81])](dU, tU[2]) + tU[0];
        if (UU[tU[74]] * UU[tU[74]] < yU()[tU[78]](RU)) {
          function qU(...UU) {
            for (CU(UU[tU[12]] = tU[0], UU[tU[0]] = 'D"P~z=hUO_Z9`6VWsTuB,b1)8]3K4MY!inRtcFSp>vdm<gf?Hjw@|x7&oN}#%[+AI./Jqe5L0kQX;{2:y$(*^EGlCar', UU[tU[20]] = "" + (UU[tU[2]] || ""), UU[tU[4]] = UU[tU[20]].length, UU[tU[9]] = [], UU[tU[7]] = tU[2], UU[tU[79]] = tU[2], UU[tU[24]] = -tU[0]), UU[tU[10]] = tU[2]; UU[tU[10]] < UU[tU[4]]; UU[tU[10]]++)
              if (UU[-tU[0]] = UU[tU[0]].indexOf(UU[tU[20]][UU[tU[10]]]), UU[-tU[0]] !== -tU[0])
                if (UU[tU[24]] < tU[2]) UU[tU[24]] = UU[-tU[0]];
                else {
                  CU(UU[tU[24]] += UU[-tU[0]] * tU[36], UU[tU[7]] |= UU[tU[24]] << UU[tU[79]], UU[tU[79]] += (UU[tU[24]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
                  do {
                    CU(UU[tU[9]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[tU[79]] -= tU[10])
                  } while (UU[tU[79]] > tU[24]);
                  UU[tU[24]] = -tU[0]
                } return UU[tU[24]] > -tU[0] && UU[tU[9]].push((UU[tU[7]] | UU[tU[24]] << UU[tU[79]]) & tU[11]), kU(UU[tU[9]])
          }

          function OU(...UU) {
            return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = qU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
          }

          function SU(...UU) {
            UU[tU[12]] = tU[2];
            const XU = require("big-integer");
            CU(UU[tU[21]] = class {
              static randomPrime(...UU) {
                UU[tU[12]] = tU[0];
                const zU = XU.one.shiftLeft(UU[tU[2]] - tU[0]),
                  cU = XU.one.shiftLeft(UU[tU[2]]).prev();
                for (;;) {
                  let UU = XU.randBetween(zU, cU);
                  if (UU.isProbablePrime(256)) return UU
                }
              }
              static generate(...UU) {
                UU[tU[12]] = tU[0];
                const zU = XU(65537);
                let cU, yU;
                UU[tU[21]] = tU[18];
                do {
                  CU(cU = this.randomPrime(UU[tU[2]] / tU[20]), yU = this.randomPrime(UU[tU[2]] / tU[20]), UU[tU[21]] = XU.lcm(cU.prev(), yU.prev()))
                } while (XU.gcd(zU, UU[tU[21]]).notEquals(tU[0]) || cU.minus(yU).abs().shiftRight(UU[tU[2]] / tU[20] - tU[13]).isZero());
                return {
                  e: zU,
                  n: cU.multiply(yU),
                  d: zU.modInv(UU[tU[21]])
                }
              }
              static encrypt(...UU) {
                return UU[tU[12]] = tU[4], XU(UU[tU[2]]).modPow(UU[tU[20]], UU[tU[0]])
              }
              static decrypt(...UU) {
                return UU[tU[12]] = tU[4], XU(UU[tU[2]]).modPow(UU[tU[0]], UU[tU[20]])
              }
              static encode(...UU) {
                UU[tU[12]] = tU[0];
                const zU = UU[tU[2]].split("").map((UU => UU.charCodeAt())).join("");
                return XU(zU)
              }
              static decode(UU) {
                const XU = UU.toString();
                let zU = "";
                for (let cU = tU[2]; cU < XU.length; cU += tU[20]) {
                  let UU = Number(XU.substr(cU, tU[20]));
                  UU <= 30 ? (zU += String.fromCharCode(Number(XU.substr(cU, tU[4]))), cU++) : zU += String.fromCharCode(UU)
                }
                return zU
              }
            }, module.exports = UU[tU[21]])
          }
          OU(147) in GU && SU(), yU()[OU(148)](BU, BU, RU, wU)
        }
        CU(UU[tU[80]] = (0, QU.y)(UU[tU[80]], 1, Math[aU(tU[81])](tU[0], Math[aU(tU[14])](tU[2], -dU, tU[0] - gU / UU[tU[74]]))), yU()[aU(150)](BU, BU, PU))
      }
      const EU = WU;
      if (CU(yU()[XU(151)](EU, BU, LU), EU[tU[0]] = tU[2], UU[tU[82]] = yU()[XU(152)](EU)), !DU) {
        function rU(UU) {
          var XU, zU, cU, yU, QU, AU, FU;
          for (CU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = tU[2], QU = tU[2], AU = -tU[0]), FU = tU[2]; FU < zU; FU++) {
            var oU = '2BeK#c`|1!6rlW0~&("Dj[;TPzJ]+v93dFxyq4)YguXn%sO87Qb@:*<LhS$.fZ=AoiGk^IRt_/>CEwM?,V5}HUp{mNa'.indexOf(XU[FU]);
            if (oU !== -tU[0])
              if (AU < tU[2]) AU = oU;
              else {
                CU(AU += oU * tU[36], yU |= AU << QU, QU += (AU & tU[37]) > tU[38] ? tU[39] : tU[40]);
                do {
                  CU(cU.push(yU & tU[11]), yU >>= tU[10], QU -= tU[10])
                } while (QU > tU[24]);
                AU = -tU[0]
              }
          }
          return AU > -tU[0] && cU.push((yU | AU << QU) & tU[11]), kU(cU)
        }

        function uU(...UU) {
          return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = rU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
        }

        function fU(...UU) {
          UU[tU[12]] = tU[2];
          const XU = require("path"),
            {
              version: zU
            } = require("../../package"),
            {
              version: cU
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: yU
            } = require("@redacted/components/package"),
            {
              sdkVersion: QU
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), XU.resolve(__dirname, uU(154) + uU(155) + "js")
        }
        uU(153) + tU[7] in GU && fU(), UU[tU[82]] *= UU[tU[80]]
      }
      const YU = UU[tU[8]][XU(tU[27]) + XU(157) + XU(158)],
        NU = YU ? Math[XU(159)](YU, UU[tU[82]]) : UU[tU[82]];
      yU()[XU(160) + XU(161)](EU, EU);
      const IU = UU[tU[24]] !== tU[53] && void 0 !== UU[tU[24]] ? UU[tU[24]] : UU[tU[8]][XU(tU[19]) + XU(163) + XU(164) + XU(165)];
      if (NU > tU[2]) {
        function iU(UU) {
          var XU, zU, cU, yU, QU, AU, FU;
          for (CU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = tU[2], QU = tU[2], AU = -tU[0]), FU = tU[2]; FU < zU; FU++) {
            var oU = 'fet%v7JCPQ:LgxYcD|s{G2Bol`6ZS;3O1j&4$H+*ad?IrTb"~EF.k)M_R,5uA]h<#KmnWVNpy[=>/wX^qi(}9z8!@U0'.indexOf(XU[FU]);
            if (oU !== -tU[0])
              if (AU < tU[2]) AU = oU;
              else {
                CU(AU += oU * tU[36], yU |= AU << QU, QU += (AU & tU[37]) > tU[38] ? tU[39] : tU[40]);
                do {
                  CU(cU.push(yU & tU[11]), yU >>= tU[10], QU -= tU[10])
                } while (QU > tU[24]);
                AU = -tU[0]
              }
          }
          return AU > -tU[0] && cU.push((yU | AU << QU) & tU[11]), kU(cU)
        }

        function HU(...UU) {
          return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = iU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
        }

        function MU(...UU) {
          function XU(...UU) {
            return UU[tU[12]] = tU[0], UU[tU[2]][tU[0]] * tU[45] + (UU[tU[2]][tU[2]] < tU[2] ? tU[44] | UU[tU[2]][tU[2]] : UU[tU[2]][tU[2]])
          }

          function zU(...UU) {
            switch (UU[tU[12]] = tU[0], ((UU[tU[2]] & tU[44]) !== tU[2]) * tU[0] + (UU[tU[2]] < tU[2]) * tU[20]) {
              case tU[2]:
                return [UU[tU[2]] % tU[44], Math.trunc(UU[tU[2]] / tU[45])];
              case tU[0]:
                return [UU[tU[2]] % tU[44] - tU[44], Math.trunc(UU[tU[2]] / tU[45]) + tU[0]];
              case tU[20]:
                return [((UU[tU[2]] + tU[44]) % tU[44] + tU[44]) % tU[44], Math.round(UU[tU[2]] / tU[45])];
              case tU[4]:
                return [UU[tU[2]] % tU[44], Math.trunc(UU[tU[2]] / tU[45])]
            }
          }
          UU[tU[12]] = tU[2], CU(UU[tU[83]] = XU([tU[20], tU[16]]), UU[tU[0]] = XU([tU[0], tU[20]]), UU[tU[33]] = UU[tU[83]] + UU[tU[0]], UU[-tU[84]] = UU[tU[33]] - UU[tU[0]], UU[tU[16]] = UU[-tU[84]] * tU[20], UU[-tU[85]] = UU[tU[16]] / tU[20], console.log(zU(UU[tU[33]])), console.log(zU(UU[-tU[84]])), console.log(zU(UU[tU[16]])), console.log(zU(UU[-tU[85]])))
        }
        XU(166) in GU && MU();
        let vU = UU[tU[20]][XU(167) + HU(168)] * IU;
        if (!DU) {
          function sU(UU) {
            var XU, zU, cU, yU, QU, AU, FU;
            for (CU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = tU[2], QU = tU[2], AU = -tU[0]), FU = tU[2]; FU < zU; FU++) {
              var oU = 'WEK%1dAjGxVLnotmJH=yS|2s#Q/RZFr"<^4iz(B.`ql+ecuT$P{*CM~[)>a8Nh_!UDf:Ikp9OwX?Yg]}7@&63;v0b,5'.indexOf(XU[FU]);
              if (oU !== -tU[0])
                if (AU < tU[2]) AU = oU;
                else {
                  CU(AU += oU * tU[36], yU |= AU << QU, QU += (AU & tU[37]) > tU[38] ? tU[39] : tU[40]);
                  do {
                    CU(cU.push(yU & tU[11]), yU >>= tU[10], QU -= tU[10])
                  } while (QU > tU[24]);
                  AU = -tU[0]
                }
            }
            return AU > -tU[0] && cU.push((yU | AU << QU) & tU[11]), kU(cU)
          }

          function nU(...UU) {
            return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = sU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
          }
          vU *= UU[tU[20]][nU(169) + nU(170)]
        }
        let VU = UU[tU[20]][HU(171) + HU(172) + "ss"] * NU;
        NU < .3 && (VU *= NU), vU > VU && (vU = VU), CU(yU()[HU(tU[42])](EU, EU, vU), UU[tU[16]][HU(174) + HU(175)](EU))
      }
      UU[tU[16]][XU(176) + tU[86]] = UU[tU[20]][XU(177) + XU(tU[51]) + tU[86]] * (DU ? cU : AU)
    }
  },
  38388: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      e: () => FU
    });
    var cU = zU(38394),
      yU = zU(1974);
    const QU = 2,
      AU = 1,
      FU = {
        xE: 1,
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

    function oU(UU, XU, zU, FU, oU, DU, EU) {
      if (oU.speed) return (0, cU.d)(XU, zU, FU, oU, DU, EU, UU), void(oU.ticksToReachMaxIdleFriction = QU);
      const YU = FU.isOnGround(),
        NU = XU.bloxd.getSyncedClientOptions(XU.bloxd.getPlayerReader(zU)),
        IU = null === NU ? XU.bloxd.getClientPredictedOption(zU, "groundFrictionScale") : NU.groundFrictionScale,
        pU = null === NU ? XU.bloxd.getClientPredictedOption(zU, "airFrictionScale") : NU.airFrictionScale,
        aU = YU ? IU : pU,
        tU = Math.max(AU, aU),
        gU = oU.ticksToReachMaxIdleFriction / QU,
        kU = (0, yU.y)(tU, aU, gU);
      DU.friction = UU.standingFriction * ((null === NU ? XU.bloxd.getClientPredictedOption(zU, "airMomentumConservation") : NU.airMomentumConservation) ? kU : aU), oU.ticksToReachMaxIdleFriction > 0 && oU.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);