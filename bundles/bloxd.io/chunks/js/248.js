export const id = 248;
export const ids = [248];
export const modules = {
  39471: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => hM
    });
    var OM = iM(181),
      SM = iM(38623);
    const jM = 1.2,
      aM = {
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
        vz: .5,
        WrM: !1
      },
      PM = {
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
        vz: .5,
        WrM: !1
      },
      nM = {
        physicsBodyDimensions: {
          width: OM.f.Sy,
          height: OM.f.jy
        },
        hitBoxDimensions: {
          width: OM.f.Sy + .4,
          height: OM.f.jy + .6
        },
        eyeHeight: OM.f.jy * OM.f.playerEyeToHeightRatio,
        rideHeight: OM.f.jy - .3,
        vz: .5,
        WrM: !1
      },
      QM = {
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
        vz: .5,
        WrM: !1
      },
      zM = {
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
        vz: .5,
        WrM: !1
      },
      LM = {
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
        vz: .5,
        WrM: !1
      },
      mM = {
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
        vz: .5,
        WrM: !1
      },
      HM = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: OM.f.Sy,
            height: OM.f.jy
          },
          hitBoxDimensions: {
            width: OM.f.Sy + .4,
            height: OM.f.jy + .6
          },
          eyeHeight: OM.f.jy * OM.f.playerEyeToHeightRatio,
          rideHeight: OM.f.jy - .1,
          vz: SM.g.vz,
          WrM: !0
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
        },
        Camel: {
          modelScale: jM,
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
        },
        "Cave Golem": aM,
        "Draugr Zombie": {
          ...nM,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": nM,
        "Frost Golem": aM,
        "Frost Zombie": {
          ...nM,
          defaultPose: "zombie"
        },
        "Frost Skeleton": nM,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: OM.f.Sy,
            height: OM.f.jy
          },
          hitBoxDimensions: {
            width: OM.f.Sy + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          vz: .5,
          WrM: !1
        },
        Wolf: QM,
        Bear: zM,
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
          vz: .5,
          WrM: !1
        },
        Stag: LM,
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
          vz: .5,
          WrM: !1
        },
        Gorilla: mM,
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
          vz: .5,
          WrM: !1
        },
        "Draugr Huntress": nM,
        "Magma Golem": aM,
        "Spirit Golem": aM,
        "Spirit Wolf": QM,
        "Spirit Bear": zM,
        "Spirit Stag": LM,
        "Spirit Gorilla": mM,
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: OM.f.Sy,
            height: OM.f.jy
          },
          hitBoxDimensions: {
            width: OM.f.Sy + .4,
            height: OM.f.jy + .6
          },
          eyeHeight: OM.f.jy * OM.f.playerEyeToHeightRatio,
          rideHeight: OM.f.jy - .1,
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: OM.f.Sy,
            height: OM.f.jy
          },
          hitBoxDimensions: {
            width: OM.f.Sy + .4,
            height: OM.f.jy + .6
          },
          eyeHeight: OM.f.jy * OM.f.playerEyeToHeightRatio,
          rideHeight: OM.f.jy - .1,
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
        },
        Zombie: {
          ...nM,
          defaultPose: "zombie"
        },
        Skeleton: nM,
        Mummy: {
          ...nM,
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
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
          vz: .5,
          WrM: !1
        },
        "Iron Guardian": PM,
        "Gold Guardian": PM,
        "Diamond Guardian": PM,
        "Moonstone Guardian": PM,
        "Iron Goofy Golem": PM,
        "Gold Goofy Golem": PM,
        "Diamond Goofy Golem": PM,
        "Moonstone Goofy Golem": PM,
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
          vz: .5,
          WrM: !1
        }
      };

    function hM(MM) {
      return HM[MM]
    }
  },
  38005: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    const OM = {
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
  38627: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(347),
      SM = iM.n(OM),
      jM = iM(2e3);
    let aM;
    var PM, nM, QM, zM, LM, mM, HM, hM, JM;
    const dM = [2, 0, 1, 8, "c", "a", 9, 7, 5, 38, "d", 255, "length", "undefined", void 0, "e", 70, 71, 63, 6, "fromCodePoint", 12, "push", 3, null, 111, 18, "i", 91, 19, 8191, 88, 13, 14, 4, "b", 53, 116, 127, 128, 129, 130, 124, 125, 126, 131, 132, 133, 120, 121, 122, 123, 139, 140, 141, 142, 143, 144, 92, 95, "g", 249, 15, 146, 10, "TJ", "h", 200, 167, 75, 149, 223, 171, 226, 24, 205, 40, 203, "f", 204, 16, 190, 512, 79, 25, 177, 219, 241, 106, 42, 67, 1023, 31, 234, 229, 32, 64, 65535, "on"];

    function yM(...MM) {
      return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
        for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = '1@8"=]$}/w4?3vaC+hHkLBm{|%YuI`ZVWje!5tAoE*nXpb6#dD;G.FlT>yQNJs&9K<2,fcU):Pxi7MRgr_z(0qO[^~S', MM[dM[0]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[0]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[-dM[9]] = dM[1], MM[dM[7]] = -dM[2]), MM[dM[3]] = dM[1]; MM[dM[3]] < MM[dM[4]]; MM[dM[3]]++)
          if (MM[dM[6]] = MM[dM[5]].indexOf(MM[dM[0]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
            if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[6]];
            else {
              RM(MM[dM[7]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[-dM[9]], MM[-dM[9]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
              do {
                RM(MM[dM[10]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[-dM[9]] -= dM[3])
              } while (MM[-dM[9]] > dM[7]);
              MM[dM[7]] = -dM[2]
            } return MM[dM[7]] > -dM[2] && MM[dM[10]].push((MM[dM[8]] | MM[dM[7]] << MM[-dM[9]]) & dM[11]), lM(MM[dM[10]])
      }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
    }

    function lM(...MM) {
      return MM[dM[12]] = dM[2], typeof zM !== dM[13] && zM ? (new zM).decode(new LM(MM[dM[1]])) : typeof mM !== dM[13] && mM ? mM.from(MM[dM[1]]).toString("utf-8") : JM(MM[dM[1]])
    }

    function EM(...MM) {
      if (MM[dM[12]] = dM[23], MM[dM[1]] === yM(109)) return MM[dM[2]] + MM[dM[0]]
    }

    function UM() {}
    RM(PM = {}, nM = ['?D{Phci}ew"g(NLEat;/', ".elVDf0|5ljg1u/k*E;:;z{`]KZ}S_qEd$g.L", 'P{IxB;F}%L=g%]xoMfbIKd#vky/uQD^Iz"KPgT+/X&PD$][mlbaVBNL8', 'K"3`SyF@~&0;_5J5~PG/Pg]_83:IX8', "!Gw:<Fw_JaM>Vzhuz$,]_71Q&H[`D:<{[<1uwJY56Ca:?)]VAx&.9Q63=wl", "*3.`DM*qMFcIzD%IclXxJM@FFKZg.+bYwfYWHcwv><r5KuJ55t,`%.RH1JQ", "N)fM&0+|]Qfr+#}thw)7n>aO+JqH@", "%l?x/J[*OK:DV8wY,{DuhyVk$", "FL$V&ex$uNoa+uC", 'nL];JFwc]v/LoY5Vm354U:v%aNUP.Ju{"wU)>JW.[vZc2%At@XC.!qv%Gk*', "QN@lUT15&H]f_=u*Xy>G.opQ/Q<B8sjt5d(Y0;8nvH", "1yuxRT?cb?t7XU:VB9(xnPG#X&>}kzuh|<,Ybz_**a", "JYu:nD7$3<rWe%/Y=fJV()bv=", 'zV7`8x%!N&3Tf"sZEd2W}T]}xhuv&vs{{G2F+(I3ZH"gf:ehK"1w', '_bVIRbdEfy>r"Y.e~bSGxdL/g93t<:<|r&1Gh&i*5y]foav', "%w7Fz&^.3<)r3J]|_d,Fe!!}eyaez%&!4=2/Mb;.zkg%0!$", "(PG:?(RepBkgnvrYKEUI3;/6$Q3TH]9hAx0x&Mbq_9M?GAiA", "7?bx=TI8fw0xM=wYut)7GtGkH3", '/X/Rk;U$2wcUeaCLr&I`YPDv4LmT_5"VUV5`)Tv}fw6I]+BItllw', "XXqYgx=OK3>rqJY*_>x/ceUHvHP/7uV`8y>w", "?9uMg_6H=", "[GNWp>S.@wpa+CJ`8DEu2_Py!yuc#Nj{aE8", "Ah|lgAE3/L_?puTER$0]^;L.#BFH/CK|L{G`~R26s/RMc=^mLJWu|.Qxuh", '!J7)vx{!jC<.!;q*&EKP4xv*oLYQ2_Gu/!,Fm7x.tKG7!)dY`)_lK6"_CBXd@', 'HJ(Y{c2$7F":2_$AAf8', "vCi/9J,!MNY<2_Fu,e%iVRvcxa", "Pf+l~)qgQ&d", "`{v4eNA8", "5CYuax,{*hbdI#$tewR.Z#$6x?VV{AgoZ<=xH", "MVBVb>Q8g>#B#8FuQb2/<JhvdFHz:(8|eE9==dLOhwai#aS`", "V6|P4A_vzy1f@tu*0n7;wyAHLl[UL(!%RIN/{.Vy3&e2@", "_%o=tix3D9yUlAzeYtB4|;8n$QvLXYQ!tC~G#f:6v&L7%+Xkih(/5!jk=", ":>6Vuy1", "x>rP{;p3Dlzx2vok|)7)nU<!$K1u6%1`Kl34c:jkIB.7m]", '])WZ*9zeAvIv>"X%]D#IW.xE2km$[a:Ht{v}Uce3fw2r[C}APa"', '&&N`g;(`gCvh/(gu_d7)&JJQ<HCgy=sZ&fEDccOe1w?"a_v', "fd.xu(1", '"J8WH.er?hJrW+"5&&z`/OlHX<gU})/H!X&I5qh%r9APvt}HI6euI', ":?&.Qeu}YNA7687YNL/w8_%FSLyMdJf|=HUT}eHUQa@wNz^ncweGbz:Q$", "+).xIr~g|Q>Uua0mhY<$", "yNZwC59913hcwJaYc$5`JU?FR9cMAD3on<aT9J_yZ2K?B+@{w91w", ";GWumAG@", "$=[7pi)ycK(F_d&5wf9..G/UC9s?rC,h2&VIw&1", 'Zy[P@5xx>LfM("QI^/FT:71', "jfc42_>ZHy8usJ|nDyHW>G9@Uk&%Ca<HBfdu$:1", "*{@u+ypHM>:Pc5u`B{mT3", "bf6VR&ZH;Ci?cJRE6&k`8JZZ:<#&rCVh}f*:sQT@Lvb", "@D%GI.3K$Q2r`t3LuX[Iky85i&|h4]", 'N<bVTz$.!KP,r"', ")dvT20l87<fIV;IZ0d9$xA.Q0yDcgC6E9a!WJgF#{K:!+CzI|x]4[A~@", "TlX:.o]_XN1R.+6oH$sVvdT*9J=:RDEHHW}.MdQO62ku@", ":>XMZ#1", "ALmT>U?c$4", "Ob[l3cR|Qh;Be%fA6twG_T@*{voIVzs5$y<WvyreBKiFDJVh+JKlad1", "}l/w2:58ry<MYz=|", "n`f;2x[hIa&??z3", "6Gc4F9Z|cl2U;UpYulIM@:G9ky@i%DEACG@", 'TYL4CTLrGkX"7ucHWJS]uRW|bN$L|#o%_bUVDUmxMN5g)AjVW`:$qcv}Gk', "6wjGvTLQqk+$puWZibR.RyI8", "<$TD*lVk>LiMyt~+[$eW~PlH@w0xkCmu_>B}!D<GLyX", "f{!MADNi7&PWE(N{)nO=,&}k_3V:9NzI~L*l<5G}]", "aHZ}|;)`eC]zWN/", "Z`a7kAA8|v[Uz%V{Flawg_r|wQ{h1uhEgbZD,&H5}", '{GKP[Nf|"w/sZsqE', "SbG`8d0r#9wfoUdoAdEP&6e3jJ!u5u=H)a).j.nHI<X", '#)OIul~`W2UH{A7A:L{7[NIHM&,Ip"', "SPFTO;1n!kHcu8<n#Ec4Mc!yAKnd!84V_>D:(bT@", "gUlPC_K37?)DTa~!$96T4OAK,k@8@", "6LzWTF0.CHd.oA`{~n~$[qKHIhlcM:_oaHI`ZEw@", '!3,WYE^ECH2r:)"XFLxW)Tn8', "Oe{=]xh}7a<@HsCoi>Dl:5Z|{v", "xf@:T6N`GJVhXa$|ly>DD0j*]kWu=C[`BGWl07hk4<qMSY?", 'N&2W16V#|QM=(AB*"l"`JMhv~&%c1:ckRLo._ceZ+yJHW#dYVffTcefQIa,P@', 'jd{wlQJfpaeg1CfHJNm},eZ5h2#PkY"%+XU=', "}WaV=TQ6bF&6Ca,5*&+wVPZ3Fk4$puFe", 'iat4iA%kx?7C[ahLrGawwT=K:L"tdC^+', "MtXWSAY._y)JK(?%71", "ItlV:TNcx&:IWN>ewD97vy$HD3}f#8{IUb.xO.1/lkl.xD;E<&8M|#$U8J`Q@", "T{:P=x&$*a*P8UOe]9oZh5QZZ9L:k)85L9`.|", 'm)huXz_qjyi!fuDES"8', "8H>wky*vw&XafCZ`@`E$@0nZnh.7AzQ`", "PV0YJ66K`N`<@", '"DZTzR+|XN`Ts|~*%@', "2nb4DGd6QL>NxD3Ll1", ")$mTmAC@VJk$YD!ZZ<{P&JArLKDa0NGe{EQG%", '"`%iMxf3wLl!qJF*Wf0}Y(`*23Q.:CWno&c}.G`kMa', 'IJ"]piwv8lvtoa+ep$wloD``[Laf3Cl*0L8', ":&|u{N3.}", '*<Dugbb}ovBc="@5{Go=', "eyOw.o$UBvB:<:Zh`)[IQG.Z+wb&xDK5{WsV.z>.=", "7VWlXP,{=", '3f=;GUn6;k)Mf(5VBE}7>9SOqvIh";=|IY$T{#wkRHV:sD,H"JTD|7biOK,>@', "%ClIHy,i=", "n{7MUT?F}", "4yC$g_/6oL}<Av{E@`AT;6!}aB.P:CNI@yo.YEq`i/", 'i?OVdibv89hGI"', 'i<(;SAJ6"J$f=5dEQbfVjN5QEQ6}7)T!l1', "Je{.Pg,@j29%,zIn/!WPh_BkV2%&!UP%UhiWr7tidHoTpuLu", "a=;uP_ZKW3~m]+,%{GrGQeN{&F?v3#a", "M&U=jNa/5K,2!Qtk:<@", ",t&T/x@%WHFIcJNntd9lO;+Qqkjcduu!|wR)u", ':d!WGUY|YN.=|"iA=Dv.i_Of$KIhMJ7A]DmDB', 'i<=x:_JZjyX}1"`Ze`o.v', 'AX{.;fB*i?[,0"A|<ei`m.G}X?Be/)iYB)EP;6//s>)I+#2haX_GZ', "m)HuIE0.5l&B)Qx%jwI4uNC#tQ9>}YhEA3iFWE1", "Kfo=dz067F!B!Q&5^&b4VRo}$QZ}@", "{fX`4OXyK3AT:uDuFen:6QU.=w!", "KlkW[NV!K3U@pNm*MfZIkR]k&Cq5D:#u(t.F{(q@N&;ruzs{geo=uE1", "@x|jADc`sa", "7fS]D>Z8", '"2*Z5qk@', "2GAVM_L8", "qy;/tjGM", "JvIi", "Qm;i=H1", "Jyh>", "W/}#bzH", ">eR!3Wm$", "]e[tu_m$", "eeM!", ">ej|<(@$", "8e+WmWS$", "5vj|h^7$", "c.L|S", ">ej|mWS$", "5vR!]JL$", "@%2pc_>$", "J52cc^@$", "zUfcZ|>$", ";U_W|gS$", "tv|iGj/$", "X%[tEJS$", "cC_Wb|d*", "r::ca", '"eR!', "MejiT", '%.Xc"', "tYkUR7=$", "fbF#a", "X%UcNK3$", 'c#Up"_H', "X%Uca^]$", "5v2chW.*", "tv&cQJY$", '"C_Wb|H', "Aq!$u&La", "!i_w", "{Dvp", "P`KH", "V0vp", "xW_EY", "9zoH", "NZ]w", "+b&p", "ueL|^g%$", "*?y!=r0$", "]mzWggm$", "&#xp", "~%F#", ";.Uc~j/$", "fixp", "].xc(WL$", ".CFN.J3$", "Z;S!JgS$", "k/z+QJH", "].xc=Pv$", "`#xp", '"g>@0k9o', "CnFM)S<", "+1h{stVz", ".YOX^Ikz", "hT%H8;if", "^AVS", "r4>;EdU!D(CzdM|dKb=SOdQAoW", "Y}kT@QZF%SOQ_ZPKfzZJG_C=+W", "awGJGU<MgqYVD5}nkK<;r7n1SK", "v|FsW./j", "Y!|/pP^>", "UryU$`D>", "#Zi[S", "UryUB.T7", "o)|Fz", "`Bj;Wla{WL@x>ldF;9~>#LHTuo", "<WTHmC]q9tPNTjwc|>{gGK!Qy7", "r~q$MvsAtZVvDq<t?.Sm?8X~P%", "aFm*lqD", "(%0FZ<~4", 'tmi7"', "KU_W|gS$", "].xc&|B$"]), RM(QM = function() {
      var MM, rM, iM, OM = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      RM(MM = void 0, rM = []);
      try {
        RM(MM = Object, rM[dM[22]]("".__proto__.constructor.name))
      } catch (LM) {}
      MM: for (iM = dM[1]; iM < OM[dM[12]]; iM++) try {
        var SM;
        for (MM = OM[iM](), SM = dM[1]; SM < rM[dM[12]]; SM++)
          if (typeof MM[rM[SM]] === dM[13]) continue MM;
        return MM
      } catch (LM) {}
      return MM || this
    }() || {}, zM = QM.TextDecoder, LM = QM.Uint8Array, mM = QM.Vz, HM = QM.String || String, hM = QM.Array || Array, JM = function(...MM) {
      return RM(MM[dM[12]] = dM[1], MM[dM[4]] = new hM(dM[39]), MM[dM[10]] = HM[dM[20]] || HM.fromCharCode, MM[dM[15]] = []),
        function(...rM) {
          for (RM(rM[dM[12]] = dM[2], rM[dM[2]] = dM[14], rM[dM[17]] = dM[14], rM[-dM[16]] = rM[dM[1]][dM[12]], MM[dM[15]][dM[12]] = dM[1]), rM[dM[10]] = dM[1]; rM[dM[10]] < rM[-dM[16]];) RM(rM[dM[17]] = rM[dM[1]][rM[dM[10]]++], rM[dM[17]] <= dM[38] ? rM[dM[2]] = rM[dM[17]] : rM[dM[17]] <= dM[71] ? rM[dM[2]] = (rM[dM[17]] & dM[92]) << dM[19] | rM[dM[1]][rM[dM[10]]++] & dM[18] : rM[dM[17]] <= 239 ? rM[dM[2]] = (rM[dM[17]] & dM[62]) << dM[21] | (rM[dM[1]][rM[dM[10]]++] & dM[18]) << dM[19] | rM[dM[1]][rM[dM[10]]++] & dM[18] : HM[dM[20]] ? rM[dM[2]] = (rM[dM[17]] & dM[7]) << dM[26] | (rM[dM[1]][rM[dM[10]]++] & dM[18]) << dM[21] | (rM[dM[1]][rM[dM[10]]++] & dM[18]) << dM[19] | rM[dM[1]][rM[dM[10]]++] & dM[18] : (rM[dM[2]] = dM[18], rM[dM[10]] += dM[23]), MM[dM[15]][dM[22]](MM[dM[4]][rM[dM[2]]] || (MM[dM[4]][rM[dM[2]]] = MM[dM[10]](rM[dM[2]]))));
          return MM[dM[15]].join("")
        }
    }()), yM(110) + "Y" in UM && function(...MM) {
      MM[dM[12]] = dM[1]
    }();
    const GM = SM()[yM(dM[25])](),
      CM = SM()[yM(dM[25])](),
      eM = SM()[yM(dM[25])](),
      bM = SM()[yM(dM[25])](),
      wM = SM()[yM(dM[25])](),
      tM = SM()[yM(dM[25])](),
      gM = SM()[yM(dM[25])](),
      uM = (...MM) => {
        function rM(...MM) {
          return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
            for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = '1DMOK6sVim>d:rL)3&7W[h}Uf_SJ{c=k/%Gn$q(2!^lybX@tx.`;aAFz#Bgew?|*Qo]EjR9H"ZvNC,Pu5Y+I048~<Tp', MM[dM[0]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[0]].length, MM[dM[34]] = [], MM[dM[29]] = dM[1], MM[dM[19]] = dM[1], MM[dM[7]] = -dM[2]), MM[-dM[26]] = dM[1]; MM[-dM[26]] < MM[dM[4]]; MM[-dM[26]]++)
              if (MM[dM[27]] = MM[dM[2]].indexOf(MM[dM[0]][MM[-dM[26]]]), MM[dM[27]] !== -dM[2])
                if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[27]];
                else {
                  RM(MM[dM[7]] += MM[dM[27]] * dM[28], MM[dM[29]] |= MM[dM[7]] << MM[dM[19]], MM[dM[19]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                  do {
                    RM(MM[dM[34]].push(MM[dM[29]] & dM[11]), MM[dM[29]] >>= dM[3], MM[dM[19]] -= dM[3])
                  } while (MM[dM[19]] > dM[7]);
                  MM[dM[7]] = -dM[2]
                } return MM[dM[7]] > -dM[2] && MM[dM[34]].push((MM[dM[29]] | MM[dM[7]] << MM[dM[19]]) & dM[11]), lM(MM[dM[34]])
          }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
        }
        MM[dM[12]] = dM[23];
        const iM = tM;
        return SM()[rM(112) + rM(113)](iM, MM[dM[0]]), SM()[rM(114)](MM[dM[1]], iM, SM()[rM(115)](iM, MM[dM[2]]))
      };

    function RM() {
      RM = function() {}
    }
    aM = (...MM) => {
      function rM(...MM) {
        return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
          for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'H*$:?M[)p#!,m18e3V>TLRDuBa%fS<"+cE/X];@{vQs.G5=~0P7U4yYtICA&blZ`F9n2jKz_}NidW|^wJgrxq(6oOhk', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[35]].length, MM[dM[34]] = [], MM[dM[8]] = dM[1], MM[dM[36]] = dM[1], MM[dM[7]] = -dM[2]), MM[dM[3]] = dM[1]; MM[dM[3]] < MM[dM[4]]; MM[dM[3]]++)
            if (MM[dM[27]] = MM[dM[5]].indexOf(MM[dM[35]][MM[dM[3]]]), MM[dM[27]] !== -dM[2])
              if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[27]];
              else {
                RM(MM[dM[7]] += MM[dM[27]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[dM[36]], MM[dM[36]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                do {
                  RM(MM[dM[34]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[36]] -= dM[3])
                } while (MM[dM[36]] > dM[7]);
                MM[dM[7]] = -dM[2]
              } return MM[dM[7]] > -dM[2] && MM[dM[34]].push((MM[dM[8]] | MM[dM[7]] << MM[dM[36]]) & dM[11]), lM(MM[dM[34]])
        }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
      }
      MM[dM[12]] = dM[3];
      const iM = MM[dM[1]][rM(dM[37])][rM(117) + rM(118) + rM(119)](MM[dM[2]]);
      MM[dM[3]] = MM[dM[1]][rM(dM[37])][rM(dM[48]) + rM(dM[49]) + rM(dM[50]) + rM(dM[51])](iM);
      const OM = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[39]) + rM(dM[40]) + rM(dM[41]) + dM[15]) : MM[dM[3]][rM(dM[39]) + rM(dM[40]) + rM(dM[41]) + dM[15]],
        aM = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[45]) + rM(dM[46]) + rM(dM[47])) : MM[dM[3]][rM(dM[45]) + rM(dM[46]) + rM(dM[47])];
      RM(SM()[rM(134)](GM, dM[1], dM[1], MM[dM[8]]), SM().Md(GM, GM, SM()[rM(135)], MM[dM[23]].heading), SM()[rM(136)](gM, MM[dM[34]].dd), gM[dM[2]] = dM[1]);
      const QM = MM[dM[0]][rM(137) + rM(138)]();
      if (RM(MM[dM[3]] = MM[dM[1]][rM(dM[37])][rM(dM[48]) + rM(dM[49]) + rM(dM[50]) + rM(dM[51])](iM), MM[dM[69]] = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[52]) + rM(dM[53])) : MM[dM[3]][rM(dM[52]) + rM(dM[53])]), !QM && SM()[dM[65]](gM) && (MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[54]) + rM(dM[55]) + rM(dM[56]) + rM(dM[57])) : MM[dM[3]][rM(dM[54]) + rM(dM[55]) + rM(dM[56]) + rM(dM[57])])) {
        function hM(...MM) {
          for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'O9aUzm=lwpHkZA3D|7r*^Kc{Fn0P?NT!E1#4d8"QJuy`(gBV5><2.o}xLWC_i+~bv6S,&f:@Y$)]%/hs[Ij;GtReqXM', MM[-dM[58]] = "" + (MM[dM[1]] || ""), MM[dM[23]] = MM[-dM[58]].length, MM[-dM[61]] = [], MM[dM[8]] = dM[1], MM[dM[50]] = dM[1], MM[dM[60]] = -dM[2]), MM[dM[59]] = dM[1]; MM[dM[59]] < MM[dM[23]]; MM[dM[59]]++)
            if (MM[dM[6]] = MM[dM[5]].indexOf(MM[-dM[58]][MM[dM[59]]]), MM[dM[6]] !== -dM[2])
              if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
              else {
                RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[60]] << MM[dM[50]], MM[dM[50]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                do {
                  RM(MM[-dM[61]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[50]] -= dM[3])
                } while (MM[dM[50]] > dM[7]);
                MM[dM[60]] = -dM[2]
              } return MM[dM[60]] > -dM[2] && MM[-dM[61]].push((MM[dM[8]] | MM[dM[60]] << MM[dM[50]]) & dM[11]), lM(MM[-dM[61]])
        }

        function JM(...MM) {
          return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = hM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
        }

        function yM(...MM) {
          function rM() {}
          MM[dM[12]] = dM[1], RM(MM[dM[5]] = function(...MM) {
            for (RM(MM[dM[12]] = dM[0], MM[dM[5]] = dM[1], MM[dM[62]] = dM[1], MM[dM[4]] = new rM(dM[1]), MM[dM[8]] = MM[dM[4]], MM[-dM[63]] = MM[dM[1]], MM[dM[7]] = MM[dM[2]]); MM[-dM[63]] !== dM[24] || MM[dM[7]] !== dM[24];) RM(MM[dM[62]] = (MM[-dM[63]] ? MM[-dM[63]].val : dM[1]) + (MM[dM[7]] ? MM[dM[7]].val : dM[1]) + MM[dM[5]], MM[dM[5]] = Math.floor(MM[dM[62]] / dM[64]), MM[dM[8]].next = new rM(MM[dM[62]] % dM[64]), MM[dM[8]] = MM[dM[8]].next, MM[-dM[63]] = MM[-dM[63]] ? MM[-dM[63]].next : dM[24], MM[dM[7]] = MM[dM[7]] ? MM[dM[7]].next : dM[24]);
            return MM[dM[5]] && (MM[dM[8]].next = new rM(MM[dM[5]])), MM[dM[4]].next
          }, console.log(MM[dM[5]]))
        }
        JM(145) in UM && yM(), RM(uM(CM, GM, gM), uM(eM, gM, GM), SM()[JM(dM[63])](bM, gM, eM));
        const tM = SM()[JM(147)](gM),
          pM = SM()[JM(148)](GM, gM) / MM[dM[8]] / tM,
          WM = Math[JM(dM[70])](pM, dM[1]) + dM[2];
        if (MM[dM[8]] * MM[dM[8]] < SM()[dM[65]](eM)) {
          function sM(...MM) {
            for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = ':6`~9_aMGTELOgeWVuv/.>wxq,![YyfhzZj)8*nS?;DCU|l0"^FrB#R4QA%XP@i=s]o13$m}{H7pKIbt&(d5<NJc2k+', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[35]].length, MM[dM[34]] = [], MM[dM[67]] = dM[1], MM[dM[68]] = dM[1], MM[dM[60]] = -dM[2]), MM[dM[66]] = dM[1]; MM[dM[66]] < MM[dM[4]]; MM[dM[66]]++)
              if (MM[dM[6]] = MM[dM[2]].indexOf(MM[dM[35]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
                if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
                else {
                  RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[67]] |= MM[dM[60]] << MM[dM[68]], MM[dM[68]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                  do {
                    RM(MM[dM[34]].push(MM[dM[67]] & dM[11]), MM[dM[67]] >>= dM[3], MM[dM[68]] -= dM[3])
                  } while (MM[dM[68]] > dM[7]);
                  MM[dM[60]] = -dM[2]
                } return MM[dM[60]] > -dM[2] && MM[dM[34]].push((MM[dM[67]] | MM[dM[60]] << MM[dM[68]]) & dM[11]), lM(MM[dM[34]])
          }

          function DM(...MM) {
            return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = sM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
          }
          SM()[DM(150)](GM, GM, eM, WM)
        }
        RM(MM[dM[69]] = (0, jM.B)(MM[dM[69]], 1, Math[JM(dM[70])](dM[2], Math[JM(151)](dM[1], -pM, dM[2] - tM / MM[dM[8]]))), SM()[JM(152)](GM, GM, bM))
      }
      const zM = wM;
      RM(SM()[rM(153)](zM, GM, gM), zM[dM[2]] = dM[1], MM[dM[64]] = SM()[rM(154)](zM)), QM || (MM[dM[64]] *= MM[dM[69]]);
      const LM = MM[dM[19]][rM(155) + rM(156) + rM(157)],
        mM = LM ? Math[rM(158)](LM, MM[dM[64]]) : MM[dM[64]];
      SM()[rM(159) + rM(160)](zM, zM);
      const HM = MM[dM[7]] !== dM[24] && void 0 !== MM[dM[7]] ? MM[dM[7]] : MM[dM[19]][rM(161) + rM(162) + rM(163) + rM(164)];
      if (mM > dM[1]) {
        function kM(...MM) {
          for (RM(MM[dM[12]] = dM[2], MM[dM[71]] = 'D4z|5u8(*F{n}h21?@&Lk!iPQ"Y)M+l7X3sSZvVEJ`9y>6%Tp~NmC.:BWU^AwxfcaoHKg,/q$e[dRIt#0G_O;<j]rb=', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[-dM[72]] = MM[dM[35]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[dM[19]] = dM[1], MM[dM[60]] = -dM[2]), MM[dM[3]] = dM[1]; MM[dM[3]] < MM[-dM[72]]; MM[dM[3]]++)
            if (MM[dM[6]] = MM[dM[71]].indexOf(MM[dM[35]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
              if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
              else {
                RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[60]] << MM[dM[19]], MM[dM[19]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                do {
                  RM(MM[dM[10]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[19]] -= dM[3])
                } while (MM[dM[19]] > dM[7]);
                MM[dM[60]] = -dM[2]
              } return MM[dM[60]] > -dM[2] && MM[dM[10]].push((MM[dM[8]] | MM[dM[60]] << MM[dM[19]]) & dM[11]), lM(MM[dM[10]])
        }

        function ZM(...MM) {
          return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = kM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
        }
        let oM = MM[dM[0]][rM(165) + rM(166)] * HM;
        if (!QM) {
          function YM(...MM) {
            for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = '<toEDiTspPMUawhxRY81}KfyH0g;F!#?@JW"mnO`|NVLb%]X[4z>_^9=vde&({CZ5B3QAruj,2$q76k.)Sc+*Il~G/:', MM[-dM[73]] = "" + (MM[dM[1]] || ""), MM[dM[23]] = MM[-dM[73]].length, MM[dM[34]] = [], MM[dM[8]] = dM[1], MM[dM[19]] = dM[1], MM[dM[7]] = -dM[2]), MM[dM[66]] = dM[1]; MM[dM[66]] < MM[dM[23]]; MM[dM[66]]++)
              if (MM[dM[6]] = MM[dM[2]].indexOf(MM[-dM[73]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
                if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[6]];
                else {
                  RM(MM[dM[7]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[dM[19]], MM[dM[19]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                  do {
                    RM(MM[dM[34]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[19]] -= dM[3])
                  } while (MM[dM[19]] > dM[7]);
                  MM[dM[7]] = -dM[2]
                } return MM[dM[7]] > -dM[2] && MM[dM[34]].push((MM[dM[8]] | MM[dM[7]] << MM[dM[19]]) & dM[11]), lM(MM[dM[34]])
          }

          function NM(...MM) {
            return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = YM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
          }
          oM *= MM[dM[0]][NM(dM[68]) + NM(168)]
        }
        let fM = MM[dM[0]][ZM(169) + ZM(170) + "ss"] * mM;
        if (mM < .3) {
          function AM(...MM) {
            for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'NfjGAsoJBbeQpCanXiVITkPdRMOK[9/(>1=UxgEq_3h{uS*LDWl:Hr%t.2~4;cYmZ}7,|+68!z)0v"#<&^`5$w]y?@F', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[75]] = MM[dM[35]].length, MM[dM[34]] = [], MM[-dM[77]] = dM[1], MM[dM[78]] = dM[1], MM[dM[74]] = -dM[2]), MM[dM[66]] = dM[1]; MM[dM[66]] < MM[dM[75]]; MM[dM[66]]++)
              if (MM[dM[76]] = MM[dM[5]].indexOf(MM[dM[35]][MM[dM[66]]]), MM[dM[76]] !== -dM[2])
                if (MM[dM[74]] < dM[1]) MM[dM[74]] = MM[dM[76]];
                else {
                  RM(MM[dM[74]] += MM[dM[76]] * dM[28], MM[-dM[77]] |= MM[dM[74]] << MM[dM[78]], MM[dM[78]] += (MM[dM[74]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                  do {
                    RM(MM[dM[34]].push(MM[-dM[77]] & dM[11]), MM[-dM[77]] >>= dM[3], MM[dM[78]] -= dM[3])
                  } while (MM[dM[78]] > dM[7]);
                  MM[dM[74]] = -dM[2]
                } return MM[dM[74]] > -dM[2] && MM[dM[34]].push((MM[-dM[77]] | MM[dM[74]] << MM[dM[78]]) & dM[11]), lM(MM[dM[34]])
          }

          function xM(...MM) {
            return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = AM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
          }

          function vM(...MM) {
            RM(MM[dM[12]] = dM[1], MM[dM[35]] = function(...MM) {
              function rM(...MM) {
                return MM[dM[12]] = dM[0], jM(OM(aM(MM[dM[1]]), aM(MM[dM[2]])))
              }

              function iM(...MM) {
                return MM[dM[12]] = dM[23],
                  function(...MM) {
                    var rM, iM, OM, SM;
                    for (RM(MM[dM[12]] = dM[0], MM[dM[0]] = MM[dM[2]].length, MM[dM[35]] = Array()), MM[-dM[90]] = Array(Math.ceil(MM[dM[1]].length / dM[0])), rM = dM[1]; rM < MM[-dM[90]].length; rM++) MM[-dM[90]][rM] = MM[dM[1]].charCodeAt(rM * dM[0]) << dM[3] | MM[dM[1]].charCodeAt(rM * dM[0] + dM[2]);
                    for (; MM[-dM[90]].length > dM[1];) {
                      for (RM(SM = Array(), OM = dM[1]), rM = dM[1]; rM < MM[-dM[90]].length; rM++) RM(OM = (OM << dM[80]) + MM[-dM[90]][rM], iM = Math.floor(OM / MM[dM[0]]), OM -= iM * MM[dM[0]]), (SM.length > dM[1] || iM > dM[1]) && (SM[SM.length] = iM);
                      RM(MM[dM[35]][MM[dM[35]].length] = OM, MM[-dM[90]] = SM)
                    }
                    for (MM[-dM[18]] = "", rM = MM[dM[35]].length - dM[2]; rM >= dM[1]; rM--) MM[-dM[18]] += MM[dM[2]].charAt(MM[dM[35]][rM]);
                    for (MM[dM[15]] = Math.ceil(MM[dM[1]].length * dM[3] / (Math.log(MM[dM[2]].length) / Math.log(dM[0]))), rM = MM[-dM[18]].length; rM < MM[dM[15]]; rM++) MM[-dM[18]] = MM[dM[2]][dM[1]] + MM[-dM[18]];
                    return MM[-dM[18]]
                  }(OM(aM(MM[dM[1]]), aM(MM[dM[2]])), MM[dM[0]])
              }

              function OM(...MM) {
                RM(MM[dM[12]] = dM[0], MM[dM[79]] = QM(MM[dM[1]])), MM[dM[79]].length > dM[80] && (MM[dM[79]] = CM(MM[dM[79]], MM[dM[1]].length * dM[3]));
                var rM = Array(dM[80]),
                  iM = Array(dM[80]);
                for (MM[dM[81]] = dM[1]; MM[dM[81]] < dM[80]; MM[dM[81]]++) RM(rM[MM[dM[81]]] = 909522486 ^ MM[dM[79]][MM[dM[81]]], iM[MM[dM[81]]] = 1549556828 ^ MM[dM[79]][MM[dM[81]]]);
                return MM[dM[34]] = CM(rM.concat(QM(MM[dM[2]])), dM[82] + MM[dM[2]].length * dM[3]), zM(CM(iM.concat(MM[dM[34]]), EM(xM(176), dM[82], 256)))
              }

              function SM(...rM) {
                function OM(...MM) {
                  return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
                    for (RM(MM[dM[12]] = dM[2], MM[dM[8]] = '~>7]8<Au{i+Z)4T^RS=Jh*;g9z_UdtloYsBfP:jLyDv@m`KI!%1[0FN2bqC5VMc3prkX.Qe/}EwH,x6$a&(?|O"GnW#', MM[dM[83]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[83]].length, MM[-dM[45]] = [], MM[-dM[84]] = dM[1], MM[dM[78]] = dM[1], MM[dM[60]] = -dM[2]), MM[dM[3]] = dM[1]; MM[dM[3]] < MM[dM[4]]; MM[dM[3]]++)
                      if (MM[dM[6]] = MM[dM[8]].indexOf(MM[dM[83]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
                        if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
                        else {
                          RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[-dM[84]] |= MM[dM[60]] << MM[dM[78]], MM[dM[78]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                          do {
                            RM(MM[-dM[45]].push(MM[-dM[84]] & dM[11]), MM[-dM[84]] >>= dM[3], MM[dM[78]] -= dM[3])
                          } while (MM[dM[78]] > dM[7]);
                          MM[dM[60]] = -dM[2]
                        } return MM[dM[60]] > -dM[2] && MM[-dM[45]].push((MM[-dM[84]] | MM[dM[60]] << MM[dM[78]]) & dM[11]), lM(MM[-dM[45]])
                  }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
                }
                rM[dM[12]] = dM[2];
                try {
                  MM[dM[35]]
                } catch (iM) {
                  MM[dM[35]] = dM[1]
                }
                for (RM(rM[dM[2]] = MM[dM[35]] ? OM(dM[85]) + OM(178) + OM(179) : OM(dM[85]) + OM(180) + OM(181), rM[dM[35]] = "", rM[dM[39]] = dM[14]), rM[dM[34]] = dM[1]; rM[dM[34]] < rM[dM[1]].length; rM[dM[34]]++) RM(rM[dM[39]] = rM[dM[1]].charCodeAt(rM[dM[34]]), rM[dM[35]] += rM[dM[2]].charAt(rM[dM[39]] >>> dM[34] & dM[62]) + rM[dM[2]].charAt(rM[dM[39]] & dM[62]));
                return rM[dM[35]]
              }

              function jM(...rM) {
                function OM(...MM) {
                  return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
                    for (RM(MM[dM[12]] = dM[2], MM[dM[40]] = 'u_(b);B%"g$nEqxodte7}:V*T6|F4>H`=,D]cR8z{A@95^Yklmh~N+PM.LI<i/SCwWZ0Jy3[&U!?K2pXr#vjafQGOs1', MM[-dM[86]] = "" + (MM[dM[1]] || ""), MM[-dM[87]] = MM[-dM[86]].length, MM[dM[34]] = [], MM[-dM[88]] = dM[1], MM[dM[19]] = dM[1], MM[dM[60]] = -dM[2]), MM[dM[66]] = dM[1]; MM[dM[66]] < MM[-dM[87]]; MM[dM[66]]++)
                      if (MM[dM[6]] = MM[dM[40]].indexOf(MM[-dM[86]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
                        if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
                        else {
                          RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[-dM[88]] |= MM[dM[60]] << MM[dM[19]], MM[dM[19]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
                          do {
                            RM(MM[dM[34]].push(MM[-dM[88]] & dM[11]), MM[-dM[88]] >>= dM[3], MM[dM[19]] -= dM[3])
                          } while (MM[dM[19]] > dM[7]);
                          MM[dM[60]] = -dM[2]
                        } return MM[dM[60]] > -dM[2] && MM[dM[34]].push((MM[-dM[88]] | MM[dM[60]] << MM[dM[19]]) & dM[11]), lM(MM[dM[34]])
                  }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
                }
                rM[dM[12]] = dM[2];
                try {
                  MM[dM[4]]
                } catch (iM) {
                  MM[dM[4]] = ""
                }
                for (RM(rM[dM[2]] = OM(182) + OM(183) + OM(184) + "/", rM[dM[73]] = "", rM[-dM[28]] = rM[dM[1]].length), rM[-dM[89]] = dM[1]; rM[-dM[89]] < rM[-dM[28]]; rM[-dM[89]] += dM[23])
                  for (rM[dM[15]] = rM[dM[1]].charCodeAt(rM[-dM[89]]) << dM[80] | (rM[-dM[89]] + dM[2] < rM[-dM[28]] ? rM[dM[1]].charCodeAt(rM[-dM[89]] + dM[2]) << dM[3] : dM[1]) | (rM[-dM[89]] + dM[0] < rM[-dM[28]] ? rM[dM[1]].charCodeAt(rM[-dM[89]] + dM[0]) : dM[1]), rM[dM[19]] = dM[1]; rM[dM[19]] < dM[34]; rM[dM[19]]++) rM[-dM[89]] * dM[3] + rM[dM[19]] * dM[19] > rM[dM[1]].length * dM[3] ? rM[dM[73]] += MM[dM[4]] : rM[dM[73]] += rM[dM[2]].charAt(rM[dM[15]] >>> dM[19] * (dM[23] - rM[dM[19]]) & dM[18]);
                return rM[dM[73]]
              }

              function aM(...MM) {
                var rM, iM;
                for (RM(MM[dM[12]] = dM[2], MM[dM[8]] = "", MM[dM[0]] = -dM[2]); ++MM[dM[0]] < MM[dM[1]].length;) RM(rM = MM[dM[1]].charCodeAt(MM[dM[0]]), iM = MM[dM[0]] + dM[2] < MM[dM[1]].length ? MM[dM[1]].charCodeAt(MM[dM[0]] + dM[2]) : dM[1]), 55296 <= rM && rM <= 56319 && 56320 <= iM && iM <= 57343 && RM(rM = 65536 + ((rM & dM[91]) << dM[64]) + (iM & dM[91]), MM[dM[0]]++), rM <= dM[38] ? MM[dM[8]] += String.fromCharCode(rM) : rM <= 2047 ? MM[dM[8]] += String.fromCharCode(192 | rM >>> dM[19] & dM[92], dM[39] | rM & dM[18]) : rM <= dM[97] ? MM[dM[8]] += String.fromCharCode(224 | rM >>> dM[21] & dM[62], dM[39] | rM >>> dM[19] & dM[18], dM[39] | rM & dM[18]) : rM <= 2097151 && (MM[dM[8]] += String.fromCharCode(240 | rM >>> dM[26] & dM[7], dM[39] | rM >>> dM[21] & dM[18], dM[39] | rM >>> dM[19] & dM[18], dM[39] | rM & dM[18]));
                return MM[dM[8]]
              }

              function QM(...MM) {
                for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = Array(MM[dM[1]].length >> dM[0])), MM[-dM[94]] = dM[1]; MM[-dM[94]] < MM[dM[2]].length; MM[-dM[94]]++) MM[dM[2]][MM[-dM[94]]] = dM[1];
                for (MM[-dM[94]] = dM[1]; MM[-dM[94]] < MM[dM[1]].length * dM[3]; MM[-dM[94]] += dM[3]) MM[dM[2]][MM[-dM[94]] >> dM[8]] |= (MM[dM[1]].charCodeAt(MM[-dM[94]] / dM[3]) & dM[11]) << dM[74] - MM[-dM[94]] % dM[95];
                return MM[dM[2]]
              }

              function zM(...MM) {
                for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = ""), MM[dM[0]] = dM[1]; MM[dM[0]] < MM[dM[1]].length * dM[95]; MM[dM[0]] += dM[3]) MM[dM[5]] += String.fromCharCode(MM[dM[1]][MM[dM[0]] >> dM[8]] >>> dM[74] - MM[dM[0]] % dM[95] & dM[11]);
                return MM[dM[5]]
              }

              function LM(...MM) {
                return MM[dM[12]] = dM[0], MM[dM[1]] >>> MM[dM[2]] | MM[dM[1]] << dM[95] - MM[dM[2]]
              }

              function mM(...MM) {
                return MM[dM[12]] = dM[0], MM[dM[1]] >>> MM[dM[2]]
              }

              function HM(...MM) {
                return MM[dM[12]] = dM[23], MM[dM[1]] & MM[dM[2]] ^ ~MM[dM[1]] & MM[dM[0]]
              }

              function hM(...MM) {
                return MM[dM[12]] = dM[23], MM[dM[1]] & MM[dM[2]] ^ MM[dM[1]] & MM[dM[0]] ^ MM[dM[2]] & MM[dM[0]]
              }

              function JM(...MM) {
                return MM[dM[12]] = dM[2], LM(MM[dM[1]], dM[0]) ^ LM(MM[dM[1]], dM[32]) ^ LM(MM[dM[1]], 22)
              }

              function yM(...MM) {
                return MM[dM[12]] = dM[2], LM(MM[dM[1]], dM[19]) ^ LM(MM[dM[1]], 11) ^ LM(MM[dM[1]], dM[84])
              }

              function UM(...MM) {
                return MM[dM[12]] = dM[2], LM(MM[dM[1]], dM[7]) ^ LM(MM[dM[1]], dM[26]) ^ mM(MM[dM[1]], dM[23])
              }

              function GM(...MM) {
                return MM[dM[12]] = dM[2], LM(MM[dM[1]], 17) ^ LM(MM[dM[1]], dM[29]) ^ mM(MM[dM[1]], dM[64])
              }

              function CM(...rM) {
                var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, lM;
                for (RM(rM[dM[12]] = dM[0], rM[dM[53]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), rM[dM[35]] = new Array(dM[96])), RM(rM[dM[1]][rM[dM[2]] >> dM[8]] |= dM[39] << dM[74] - rM[dM[2]] % dM[95], rM[dM[1]][(rM[dM[2]] + dM[96] >> dM[6] << dM[34]) + dM[62]] = rM[dM[2]]), zM = dM[1]; zM < rM[dM[1]].length; zM += dM[80]) {
                  for (RM(iM = rM[dM[53]][dM[1]], OM = rM[dM[53]][dM[2]], SM = rM[dM[53]][dM[0]], jM = rM[dM[53]][dM[23]], aM = rM[dM[53]][dM[34]], PM = rM[dM[53]][dM[8]], nM = rM[dM[53]][dM[19]], QM = rM[dM[53]][dM[7]]), LM = dM[1]; LM < dM[96]; LM++) RM(rM[dM[35]][LM] = LM < dM[80] ? rM[dM[1]][LM + zM] : eM(eM(eM(GM(rM[dM[35]][LM - dM[0]]), rM[dM[35]][LM - dM[7]]), UM(rM[dM[35]][LM - dM[62]])), rM[dM[35]][LM - dM[80]]), mM = eM(eM(eM(eM(QM, yM(aM)), HM(aM, PM, nM)), MM[dM[10]][LM]), rM[dM[35]][LM]), lM = eM(JM(iM), hM(iM, OM, SM)), QM = nM, nM = PM, PM = aM, aM = eM(jM, mM), jM = SM, SM = OM, OM = iM, iM = eM(mM, lM));
                  RM(rM[dM[53]][dM[1]] = eM(iM, rM[dM[53]][dM[1]]), rM[dM[53]][dM[2]] = eM(OM, rM[dM[53]][dM[2]]), rM[dM[53]][dM[0]] = eM(SM, rM[dM[53]][dM[0]]), rM[dM[53]][dM[23]] = eM(jM, rM[dM[53]][dM[23]]), rM[dM[53]][dM[34]] = eM(aM, rM[dM[53]][dM[34]]), rM[dM[53]][dM[8]] = eM(PM, rM[dM[53]][dM[8]]), rM[dM[53]][dM[19]] = eM(nM, rM[dM[53]][dM[19]]), rM[dM[53]][dM[7]] = eM(QM, rM[dM[53]][dM[7]]))
                }
                return rM[dM[53]]
              }

              function eM(...MM) {
                return RM(MM[dM[12]] = dM[0], MM[dM[5]] = (MM[dM[1]] & dM[97]) + (MM[dM[2]] & dM[97]), MM[dM[35]] = (MM[dM[1]] >> dM[80]) + (MM[dM[2]] >> dM[80]) + (MM[dM[5]] >> dM[80])), MM[dM[35]] << dM[80] | MM[dM[5]] & dM[97]
              }
              return RM(MM[dM[12]] = dM[1], MM[dM[35]] = dM[1], MM[dM[4]] = ""), MM[dM[10]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(MM) {
                  return SM(function(MM) {
                    return zM(CM(QM(MM), MM.length * dM[3]))
                  }(aM(MM)))
                },
                b64: rM,
                any: iM,
                hex_hmac: function(...MM) {
                  return MM[dM[12]] = dM[0], SM(OM(aM(MM[dM[1]]), aM(MM[dM[2]])))
                },
                b64_hmac: rM,
                any_hmac: iM
              }
            }(), console.log(MM[dM[35]]))
          }
          xM(dM[72]) in UM && vM(), fM *= mM
        }
        oM > fM && (oM = fM), RM(SM()[ZM(185)](zM, zM, oM), MM[dM[34]][ZM(186) + ZM(187)](zM))
      }
      MM[dM[34]][rM(188) + dM[98]] = MM[dM[0]][rM(189) + rM(dM[40]) + dM[98]] * (QM ? OM : aM)
    }
  },
  38623: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM,
      g: () => PM
    });
    var OM = iM(38627),
      SM = iM(2e3);
    const jM = 2,
      aM = 1,
      PM = {
        vz: 1,
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

    function nM(MM, rM, iM, PM, nM, QM, zM) {
      if (nM.speed) return (0, OM.b)(rM, iM, PM, nM, QM, zM, MM), void(nM.ticksToReachMaxIdleFriction = jM);
      const LM = PM.isOnGround(),
        mM = rM.bloxd.getSyncedClientOptions(rM.bloxd.getPlayerReader(iM)),
        HM = null === mM ? rM.bloxd.getClientPredictedOption(iM, "groundFrictionScale") : mM.groundFrictionScale,
        hM = null === mM ? rM.bloxd.getClientPredictedOption(iM, "airFrictionScale") : mM.airFrictionScale,
        JM = LM ? HM : hM,
        dM = Math.max(aM, JM),
        yM = nM.ticksToReachMaxIdleFriction / jM,
        lM = (0, SM.B)(dM, JM, yM);
      QM.friction = MM.standingFriction * ((null === mM ? rM.bloxd.getClientPredictedOption(iM, "airMomentumConservation") : mM.airMomentumConservation) ? lM : JM), nM.ticksToReachMaxIdleFriction > 0 && nM.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);