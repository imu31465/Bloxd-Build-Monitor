export const id = 225;
export const ids = [225];
export const modules = {
  38448: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID
    });
    var pD = wD(197),
      sD = wD(37628);
    const KD = 1.2,
      rD = {
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
        Ug: .5,
        SzD: !1
      },
      LD = {
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
        Ug: .5,
        SzD: !1
      },
      cD = {
        physicsBodyDimensions: {
          width: pD.f.mG,
          height: pD.f.eG
        },
        hitBoxDimensions: {
          width: pD.f.mG + .4,
          height: pD.f.eG + .6
        },
        eyeHeight: pD.f.eG * pD.f.playerEyeToHeightRatio,
        rideHeight: pD.f.eG - .3,
        Ug: .5,
        SzD: !1
      },
      gD = {
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
        Ug: .5,
        SzD: !1
      },
      RD = {
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
        Ug: .5,
        SzD: !1
      },
      AD = {
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
        Ug: .5,
        SzD: !1
      },
      UD = {
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
        Ug: .5,
        SzD: !1
      },
      fD = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: pD.f.mG,
            height: pD.f.eG
          },
          hitBoxDimensions: {
            width: pD.f.mG + .4,
            height: pD.f.eG + .6
          },
          eyeHeight: pD.f.eG * pD.f.playerEyeToHeightRatio,
          rideHeight: pD.f.eG - .1,
          Ug: sD.f.Ug,
          SzD: !0
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
        },
        Camel: {
          modelScale: KD,
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
        },
        "Cave Golem": rD,
        "Draugr Zombie": {
          ...cD,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": cD,
        "Frost Golem": rD,
        "Frost Zombie": {
          ...cD,
          defaultPose: "zombie"
        },
        "Frost Skeleton": cD,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: pD.f.mG,
            height: pD.f.eG
          },
          hitBoxDimensions: {
            width: pD.f.mG + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Ug: .5,
          SzD: !1
        },
        Wolf: gD,
        Bear: RD,
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
          Ug: .5,
          SzD: !1
        },
        Stag: AD,
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
          Ug: .5,
          SzD: !1
        },
        Gorilla: UD,
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
          Ug: .5,
          SzD: !1
        },
        "Draugr Huntress": cD,
        "Magma Golem": rD,
        "Spirit Golem": rD,
        "Spirit Wolf": gD,
        "Spirit Bear": RD,
        "Spirit Stag": AD,
        "Spirit Gorilla": UD,
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: pD.f.mG,
            height: pD.f.eG
          },
          hitBoxDimensions: {
            width: pD.f.mG + .4,
            height: pD.f.eG + .6
          },
          eyeHeight: pD.f.eG * pD.f.playerEyeToHeightRatio,
          rideHeight: pD.f.eG - .1,
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: pD.f.mG,
            height: pD.f.eG
          },
          hitBoxDimensions: {
            width: pD.f.mG + .4,
            height: pD.f.eG + .6
          },
          eyeHeight: pD.f.eG * pD.f.playerEyeToHeightRatio,
          rideHeight: pD.f.eG - .1,
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
        },
        Zombie: {
          ...cD,
          defaultPose: "zombie"
        },
        Skeleton: cD,
        Mummy: {
          ...cD,
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
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
          Ug: .5,
          SzD: !1
        },
        "Iron Guardian": LD,
        "Gold Guardian": LD,
        "Diamond Guardian": LD,
        "Moonstone Guardian": LD,
        "Iron Goofy Golem": LD,
        "Gold Goofy Golem": LD,
        "Diamond Goofy Golem": LD,
        "Moonstone Goofy Golem": LD,
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
          Ug: .5,
          SzD: !1
        }
      };

    function ID(DD) {
      return fD[DD]
    }
  },
  37045: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = {
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
  37635: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(358),
      sD = wD.n(pD),
      KD = wD(1886);
    let rD;
    var LD, cD, gD, RD, AD, UD, fD, ID, BD;
    const GD = ["b", 0, 1, 8, "c", 138, "i", "g", 95, 219, 4, 255, "length", "d", "a", 68, "undefined", void 0, 2, 82, 63, 6, "fromCodePoint", 7, 12, "push", 75, 91, 5, 84, 8191, 88, 13, 14, 15, 208, 235, 3, 129, 222, 195, 69, 19, 58, 157, 81, 9, 136, 183, 87, 99, 100, 101, "e", null, 105, 106, 107, 92, 93, 94, 96, 97, 98, 113, 114, 147, 234, "f", 199, 61, 185, 229, 206, 60, 127, 128, "fp", 193, 182, 10, "h", 59, 123, 52, 57, 169, 32, 239, 232, 37, 211, 176, 24, 1e3, "s=", "=", ";", "/", "on"];

    function hD(...DD) {
      return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = function(...DD) {
        for (xD(DD[GD[12]] = GD[2], DD[-GD[5]] = 'HhtEcgPjsA<3rzQoT^N&{lquVJ_eW,aF5|"[k#i]0.9dXvp(B7/C`R6K1LZ4Syx@>$!n2IDMbwYfUO~%8;=m*):G+?}', DD[GD[0]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[GD[0]].length, DD[GD[10]] = [], DD[GD[8]] = GD[1], DD[-GD[9]] = GD[1], DD[GD[7]] = -GD[2]), DD[GD[3]] = GD[1]; DD[GD[3]] < DD[GD[4]]; DD[GD[3]]++)
          if (DD[GD[6]] = DD[-GD[5]].indexOf(DD[GD[0]][DD[GD[3]]]), DD[GD[6]] !== -GD[2])
            if (DD[GD[7]] < GD[1]) DD[GD[7]] = DD[GD[6]];
            else {
              xD(DD[GD[7]] += DD[GD[6]] * GD[27], DD[GD[8]] |= DD[GD[7]] << DD[-GD[9]], DD[-GD[9]] += (DD[GD[7]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
              do {
                xD(DD[GD[10]].push(DD[GD[8]] & GD[11]), DD[GD[8]] >>= GD[3], DD[-GD[9]] -= GD[3])
              } while (DD[-GD[9]] > GD[23]);
              DD[GD[7]] = -GD[2]
            } return DD[GD[7]] > -GD[2] && DD[GD[10]].push((DD[GD[8]] | DD[GD[7]] << DD[-GD[9]]) & GD[11]), nD(DD[GD[10]])
      }(cD[DD[GD[1]]]) : LD[DD[GD[1]]]
    }

    function nD(...DD) {
      return DD[GD[12]] = GD[2], typeof RD !== GD[16] && RD ? (new RD).decode(new AD(DD[GD[1]])) : typeof UD !== GD[16] && UD ? UD.from(DD[GD[1]]).toString("utf-8") : BD(DD[GD[1]])
    }

    function MD() {}
    xD(LD = {}, cD = ["eM:USR8pv!f5Zy~_WSRU#2UrtAob4e#Fd#:W2RH", '5PgF~iar?Zc=PgV"G4fgG|Hk=rT%e/{0JpNf4ZER44Wzut', ']L[O"4lzM{MJdiCeoCuUpZE&l6B', "W$fOfxnu#z!RVMnaOJE", "##I/%;K@:ZAANyX&w2MAfY3h41E%Y;cVGB|6dyuR5A8kiJR.Y#nR*m%h", 'Z^s~s%Xt)>:O%(T0%C)F+M=03^ZD2cp01M2/@Z)./rGnQt"VzojA@%H', "Z6`,<i^&5AvIrmbirY^f(@^juZJIu43&YH", "JAJftYKh", "`PCsOk7z8@$l(ZnJ~{U/K*l(6Z>[Tm$V=Dyc7fJ&g<C", "h5~W$*$zvx_K$SF^t[qK,8wCx44Q]=A&PrFUcY9r3Q|%CE", '+QxW`OVk,4;nMe{"^A&bawHac>~3U44.~4)c=;akTAdKTmcF8306]2H', 'U#b6"w>apR]Bx#{e:E/e#wC&URGhk(&.U4rKUI#jP<@4r]{"nA95MSH', '"CVeI%tNzlD5ei4^a6t', '7dcO"4Zt', 'To*O6DUPJ{Rl/z}Wu2DFj"0kTLVxke5k"E`OAxTZN@DwbS<{', ')9Ne=kZ0<x78GQNe@BbPjY`2>S/WrE1"7H', "t!HAD%X`p@cu+mmeB0d,tBP9.$)nh", "jcLPxRgh%sguRSy,_uZ5+`*0dQ,K{E", '"L8w"0Czo@sa;V>,AdzjSRCug6z2gSWaP5~U<xn,g6_Z8[DiyB%cF(Wt', "GD)jOK=Y^Aq^D7T0q0E", "LCJ~2%NV{zrTJb`e.BM7W)F(C&", '],*_ok(L6>#"1euW@w(c~Ydf4$,ZnDZ9kLZ,GM#[j{3#zB[FwH', "<_H|UiL[_^j=,cE^M$Uj", "J,0A96QD&&.Kiy<{NM&,>bn@c", 'BMw5YS@(=LL3N;ji*WCRTxZ2Kz{"LbSu', "p{o|0@p0.Q!la7s", 'ANvF/OF@*6DOgguWpC)cy*u(TLty)8leF0LC"66`SRQ2G4Oex"/bW8H', "K^+PG~nuA{wW:7B](62Rz/xt", 'uLngBZZa7Aa{24.]S{`<"wjJKz0%dM+">BFc!pH', ')vSR$]qp/Ac#g*_W0CJey%~",4mO+VW,!^TaEx"`c', "u,Oj+`zh", "oLKP&;/a7Sws8[<", 'L"msxb`t&64N0ED#iMq`qi+V%@%pH]MNS"|6{', "z_W<d6,j8AiUSoD#Wu*OJ0atvN6DUbF^edU,$*!:(lsEh", "(#45AIChK{pF@Z!N|B4O^kyzg", 'bu,<|MYP76/1yV{"{A&5`p+`M>|V+oNW', ">^+6`1iNp!czet@a+4KP8Uv(HNPApz~&i2$5YBRhA{qUMos", "Fr06ayPZ}{D@sot#%H", 'QLA~uU"a262D$7ykBd#<', 'Bd/bSB<khS83YI,k/{UYg%^JAZPZTop]RrQ`V/ej=@}s*M"aJh', "L4vY4]FLeQCQ&/$uR_x`W", "A5jACO5:!6O3QyP#q$0C71pp[&PC4if];4E", '|"[,/p+`m&y8<QH9kLcj(y]j`>WK/yA', "?wzjl`q`2&L[F_#J5#,jHY=:NrYDH", "Eo!C3BHNG>>JUeM&|6n,p7y.oo{zxJ<", "xuCRN~nf7A.", '2vr<O/"a3{PTKQr', '~W@7,)VkhoA6r(B"%$0Ae[(L,l/!1EF,lr?P^', 'p"x`}4i`mA,xJTiFKx7eSDH', "BLqKom:r8SH{JB2i*w7e%L~NFNjzpz3", 'pxxKYYwfYQuEfikFF0ac.8~"~1RJp7r_Q0KA<ijhorzeZIy,', 'W2(Pl`"YI&m1zBC"?R:`PYR.>N08J#5k7B/sfi$I>SaUg#v]iB$P', 'crT6zIV>7@([&tbi>2*RwIe[>N+Ysk<io@6Fa(;[2&CU+[_9+ED`3/"kP', "XF<Cs:v[9^", '=DMcA;a>f^xp!;.JUC+6R=q`Y{F4bmoe4"]w+L$L%omR};=W', 'dLSRn",(BLJ{(QGWX0,K9w"NErAZ"z"N(PlFs;ppQlj(d=@uc6t', "CM~cvy>a%S8SN#)eS$:cUx+8~NqCni&e{plY!;Nt", ':^~jMkjj)Z1c0MG,co;P/C~"Jx;O{mr&`EDc', 'bCb6"wa`x1|QPg6[]#qFvCsZ;Sj{qg.&ES@`1D2aoN`@Rc^{/E^6540>o@4', "A2L6#0H", "lo8PO/3z$L2WGQANv#|a}m3R&SJ", "yFVPX[`0RzKDt_s#cM*Fn;4zI>~YBE60r_8PT;QkPKD7;8r", "Xr16Hb9VL^Pt)kJ[*C2<(O*Z=@{B0m<", '=vUgM"1Zg>e{}JOe8#wPyZEJL{xJq#}.eo:j', '7$acEY::*6ttrmriu_Kwx"#zX3;qIVu,WYt', 'TSt,wx7z|ooeoiq0WYHaDK|.S4wqzT2V$"_C!RcD_xnDnQGT&pbAd[H', "e,Ta*Me[P", '<pQ`])Lu1^(`Ib"VxQh6t*4[|Ne', 'SEIK8`5rm&l<)Vp]RC5f7DgJv4y1`e8"WoajR1+VJZi', 'upFW?`=:<xB3lSl[zLUMNLBNE&U5j=q"x6iU,', 'Q7?Cv#C,<QScLV*0KQcg[y2:7@cb)c.Fto0P{/F&%1|"Ei8"JSLs', '>Bc<l0t993z<{(jJApHA9[X>4$yNdQwJ$u=s/O)u`&~3!J"^}4;6{', "}x^P1%%h", '{5sa;M="KZ:pmQ:WUu#Yay(L4Qha%_>akd>P)/wzyRxNuiF9Jd`<', '!uucX#`2@RrBB(}._2^f3i7f:>g6ro}quPAeHS="rx^eYIaaDH', "W#D`YYjz~1g2_=J.+xdOwSr:e4VKh", "q6LCKZ?,%RS", "[C>P`14.l&b[xJ9_?1|eq)Ozq&7QSmfinW2R!RH", "h5fgky%CxNHukeU]Y2}5][!NAZXl7c2J;H", '7r]WfY"N%oC!!IN0fx5wa~skU4nJ6yH9xF[bIY_>&&', "SEOF}|aN34BQF/8])wFUoxDrP&YON/hV=QEgm4A.)zjP{Ej", ">U?s4J){", "!CiFO;{t", "J2qSd,&e", "Kk*6", "}.q6OHA", "K2wX", "xZ{}]X1", "cHs8?xP|", "TH<*.>P|", "HH@8", "cHz%+[r|", "AH(xPxq|", "tUz%N=m|", "CDk%q", "cHz%Pxq|", "tUs8Tlk|", "rQh6C>c|", "lthCC=r|", "XMJC_%c|", ")M>x%pq|", "*U%#4zZ|", "cHz%PxUB)j", "QymC*XajOk", '/PN<ppb")j', "KQ<*/lq|", "Co>x]%Fw", "i^^C&", "BHs8", "@Hz#j", "QDKCB", "*GSMsmy|", "J]b}&", "KQMCE7?|", "C}M6B>1", "KQMC&=nB)j", "C]P%;=Jjxa", "ReM6H#jp<", "KQMC&=T|", "tUhCNxDw", "*UfCWlG|", "Bo>x]%1", "vzD,b(SY", "aAI2Os#U", "K,QwO*.B", "M:bc", "`6d~", "%fjP", "ZOd~", "`6gP@", "YKTP", "*42c", "(]f6", ".Hk%=pQ|", "9UQFSE]|", "w$I8yin|", "TPXxppP|", "f}V6", "0Qb}", ")DMC0zZ|", "J#V6", "TDVC[xSlOk", "`Og%J>F+<j", "GQl}R#DR2", "H/iAI<DK", "n(c`abnu", ":}N%mJ>8", "y+rBKR78", "ZNF`!+q8", "Dlr]7s[?", "^/<4s_9?", "/VrBx@xCX,t", "SM3_6)/#SXQ", "xcZ(H!g3~IQ", "=j)]G.}Lu[i", 'Og$Z.2/M"|g', ".!u1.E`b+tQ", "tMUZup`}v", '6&Y"Ano?;fKZ+j3"tM!]iF0LlH', 'z%LQ07dL/=cW;k~"3&LQp.4lQ1', '+P2b_y8*4N..dn#"^@54>y9C1$', '6QQ`G.},tNa,Wn"[vc;vYyM#1$', "7QQ`aSu9Fx3LvD]Nh+z]cB4lu1", "+P2bUE|aMN#ydyrwvcZvR.rVCN", "CQPk;.0M~I&y5?rw*jd(yBmMH1", '"bXqivDK', "NGXF", "j>J?QL=9", "nq@h+H4", "/k5J+TxK", "3,XqV<aK", ",>K&5].N", "xa}kgl%T", "s#6mgO8V", "$GEFSr1", 'dipG"tvo', "TEM2Z", "7M>x%pq|", "TDVCf%3|"]), xD(gD = function(...DD) {
      xD(DD[GD[12]] = GD[1], DD[GD[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], DD[GD[2]] = GD[17], DD[GD[4]] = []);
      try {
        xD(DD[GD[2]] = Object, DD[GD[4]][GD[25]]("".__proto__.constructor.name))
      } catch (cD) {}
      DD: for (DD[GD[13]] = GD[1]; DD[GD[13]] < DD[GD[14]][GD[12]]; DD[GD[13]]++) try {
        for (DD[GD[2]] = DD[GD[14]][DD[GD[13]]](), DD[-GD[15]] = GD[1]; DD[-GD[15]] < DD[GD[4]][GD[12]]; DD[-GD[15]]++)
          if (typeof DD[GD[2]][DD[GD[4]][DD[-GD[15]]]] === GD[16]) continue DD;
        return DD[GD[2]]
      } catch (cD) {}
      return DD[GD[2]] || this
    }() || {}, RD = gD.TextDecoder, AD = gD.Uint8Array, UD = gD.nI, fD = gD.String || String, ID = gD.Array || Array, BD = function(...DD) {
      return xD(DD[GD[12]] = GD[1], DD[GD[14]] = new ID(GD[76]), DD[GD[0]] = fD[GD[22]] || fD.fromCharCode, DD[GD[18]] = []),
        function(...zD) {
          for (xD(zD[GD[12]] = GD[2], zD[GD[2]] = GD[17], zD[GD[19]] = GD[17], zD[GD[4]] = zD[GD[1]][GD[12]], DD[GD[18]][GD[12]] = GD[1]), zD[GD[13]] = GD[1]; zD[GD[13]] < zD[GD[4]];) xD(zD[GD[19]] = zD[GD[1]][zD[GD[13]]++], zD[GD[19]] <= GD[75] ? zD[GD[2]] = zD[GD[19]] : zD[GD[19]] <= 223 ? zD[GD[2]] = (31 & zD[GD[19]]) << GD[21] | zD[GD[1]][zD[GD[13]]++] & GD[20] : zD[GD[19]] <= GD[88] ? zD[GD[2]] = (zD[GD[19]] & GD[34]) << GD[24] | (zD[GD[1]][zD[GD[13]]++] & GD[20]) << GD[21] | zD[GD[1]][zD[GD[13]]++] & GD[20] : fD[GD[22]] ? zD[GD[2]] = (zD[GD[19]] & GD[23]) << 18 | (zD[GD[1]][zD[GD[13]]++] & GD[20]) << GD[24] | (zD[GD[1]][zD[GD[13]]++] & GD[20]) << GD[21] | zD[GD[1]][zD[GD[13]]++] & GD[20] : (zD[GD[2]] = GD[20], zD[GD[13]] += GD[37]), DD[GD[18]][GD[25]](DD[GD[14]][zD[GD[2]]] || (DD[GD[14]][zD[GD[2]]] = DD[GD[0]](zD[GD[2]]))));
          return DD[GD[18]].join("")
        }
    }());
    const OD = sD()[hD(GD[19])](),
      JD = sD()[hD(GD[19])](),
      ED = sD()[hD(GD[19])](),
      QD = sD()[hD(GD[19])](),
      XD = sD()[hD(GD[19])](),
      VD = sD()[hD(GD[19])](),
      PD = sD()[hD(GD[19])](),
      CD = (...DD) => {
        function zD(...DD) {
          return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = function(...DD) {
            for (xD(DD[GD[12]] = GD[2], DD[GD[39]] = 'A:eLpB`C6.X!%4(x1T]D?w{soz+KNcOMSE&a^Jrgv/U2FG$d7_nq>u|yfQ3;P8hR}YZb,t=H#Wk0jiV@9l[*I<~m5")', DD[GD[0]] = "" + (DD[GD[1]] || ""), DD[GD[37]] = DD[GD[0]].length, DD[GD[43]] = [], DD[GD[28]] = GD[1], DD[-GD[42]] = GD[1], DD[GD[41]] = -GD[2]), DD[-GD[38]] = GD[1]; DD[-GD[38]] < DD[GD[37]]; DD[-GD[38]]++)
              if (DD[-GD[40]] = DD[GD[39]].indexOf(DD[GD[0]][DD[-GD[38]]]), DD[-GD[40]] !== -GD[2])
                if (DD[GD[41]] < GD[1]) DD[GD[41]] = DD[-GD[40]];
                else {
                  xD(DD[GD[41]] += DD[-GD[40]] * GD[27], DD[GD[28]] |= DD[GD[41]] << DD[-GD[42]], DD[-GD[42]] += (DD[GD[41]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
                  do {
                    xD(DD[GD[43]].push(DD[GD[28]] & GD[11]), DD[GD[28]] >>= GD[3], DD[-GD[42]] -= GD[3])
                  } while (DD[-GD[42]] > GD[23]);
                  DD[GD[41]] = -GD[2]
                } return DD[GD[41]] > -GD[2] && DD[GD[43]].push((DD[GD[28]] | DD[GD[41]] << DD[-GD[42]]) & GD[11]), nD(DD[GD[43]])
          }(cD[DD[GD[1]]]) : LD[DD[GD[1]]]
        }
        DD[GD[12]] = GD[37];
        const wD = VD;
        return sD()[zD(83) + zD(GD[29])](wD, DD[GD[18]]), sD()[zD(85)](DD[GD[1]], wD, sD()[zD(86)](wD, DD[GD[2]]))
      };

    function xD() {
      xD = function() {}
    }
    rD = (...DD) => {
      function zD(...DD) {
        return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = function(...DD) {
          for (xD(DD[GD[12]] = GD[2], DD[GD[14]] = '1w|^$@<26}89PRAH?acjks;.3&QJq+B(C/ZKT)r~UWOD4ty0nYmMgIG*5o!f]v_eb,Lhz7X>{E#Fx%=dlpiVu[":`NS', DD[GD[44]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[GD[44]].length, DD[GD[10]] = [], DD[GD[28]] = GD[1], DD[GD[48]] = GD[1], DD[GD[47]] = -GD[2]), DD[GD[45]] = GD[1]; DD[GD[45]] < DD[GD[4]]; DD[GD[45]]++)
            if (DD[GD[46]] = DD[GD[14]].indexOf(DD[GD[44]][DD[GD[45]]]), DD[GD[46]] !== -GD[2])
              if (DD[GD[47]] < GD[1]) DD[GD[47]] = DD[GD[46]];
              else {
                xD(DD[GD[47]] += DD[GD[46]] * GD[27], DD[GD[28]] |= DD[GD[47]] << DD[GD[48]], DD[GD[48]] += (DD[GD[47]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
                do {
                  xD(DD[GD[10]].push(DD[GD[28]] & GD[11]), DD[GD[28]] >>= GD[3], DD[GD[48]] -= GD[3])
                } while (DD[GD[48]] > GD[23]);
                DD[GD[47]] = -GD[2]
              } return DD[GD[47]] > -GD[2] && DD[GD[10]].push((DD[GD[28]] | DD[GD[47]] << DD[GD[48]]) & GD[11]), nD(DD[GD[10]])
        }(cD[DD[GD[1]]]) : LD[DD[GD[1]]]
      }
      DD[GD[12]] = GD[3];
      const wD = DD[GD[1]][zD(GD[49])][zD(GD[31]) + zD(89) + zD(90)](DD[GD[2]]);
      DD[GD[14]] = DD[GD[1]][zD(GD[49])][zD(GD[27]) + zD(GD[58]) + zD(GD[59]) + zD(GD[60])](wD);
      const pD = DD[GD[14]] === GD[54] ? DD[GD[1]][zD(GD[49])][zD(GD[8]) + zD(GD[61]) + zD(GD[62]) + zD(GD[63])](DD[GD[2]], zD(GD[50]) + zD(GD[51]) + zD(GD[52]) + GD[53]) : DD[GD[14]][zD(GD[50]) + zD(GD[51]) + zD(GD[52]) + GD[53]],
        rD = DD[GD[14]] === GD[54] ? DD[GD[1]][zD(GD[49])][zD(102) + zD(103) + zD(104)](DD[GD[2]], zD(GD[55]) + zD(GD[56]) + zD(GD[57])) : DD[GD[14]][zD(GD[55]) + zD(GD[56]) + zD(GD[57])];
      xD(sD()[zD(108)](OD, GD[1], GD[1], DD[GD[28]]), sD().gr(OD, OD, sD()[zD(109)], DD[GD[37]].heading), sD()[zD(110)](PD, DD[GD[10]].UG), PD[GD[2]] = GD[1]);
      const gD = DD[GD[18]][zD(111) + zD(112)]();
      if (xD(DD[GD[14]] = DD[GD[1]][zD(GD[49])][zD(GD[27]) + zD(GD[58]) + zD(GD[59]) + zD(GD[60])](wD), DD[GD[0]] = DD[GD[14]] === GD[54] ? DD[GD[1]][zD(GD[49])][zD(GD[8]) + zD(GD[61]) + zD(GD[62]) + zD(GD[63])](DD[GD[2]], zD(GD[64]) + zD(GD[65])) : DD[GD[14]][zD(GD[64]) + zD(GD[65])]), !gD && sD()[GD[77]](PD) && (DD[GD[14]] === GD[54] ? DD[GD[1]][zD(GD[49])][zD(GD[8]) + zD(GD[61]) + zD(GD[62]) + zD(GD[63])](DD[GD[2]], zD(115) + zD(116) + zD(117)) : DD[GD[14]][zD(118) + zD(119) + zD(120) + zD(121)])) {
        function ID(...DD) {
          for (xD(DD[GD[12]] = GD[2], DD[GD[66]] = 'VYpQKgl=c~Pe4FE6D8CSxjm`"UO%@*5M?y(/a_o;^kBfv3hZXA>1ITur<NLb:#w0dz$!tn&7H}{2i],qG|+9WR)sJ[.', DD[-GD[65]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[-GD[65]].length, DD[GD[13]] = [], DD[GD[28]] = GD[1], DD[GD[68]] = GD[1], DD[GD[23]] = -GD[2]), DD[GD[3]] = GD[1]; DD[GD[3]] < DD[GD[4]]; DD[GD[3]]++)
            if (DD[-GD[67]] = DD[GD[66]].indexOf(DD[-GD[65]][DD[GD[3]]]), DD[-GD[67]] !== -GD[2])
              if (DD[GD[23]] < GD[1]) DD[GD[23]] = DD[-GD[67]];
              else {
                xD(DD[GD[23]] += DD[-GD[67]] * GD[27], DD[GD[28]] |= DD[GD[23]] << DD[GD[68]], DD[GD[68]] += (DD[GD[23]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
                do {
                  xD(DD[GD[13]].push(DD[GD[28]] & GD[11]), DD[GD[28]] >>= GD[3], DD[GD[68]] -= GD[3])
                } while (DD[GD[68]] > GD[23]);
                DD[GD[23]] = -GD[2]
              } return DD[GD[23]] > -GD[2] && DD[GD[13]].push((DD[GD[28]] | DD[GD[23]] << DD[GD[68]]) & GD[11]), nD(DD[GD[13]])
        }

        function BD(DD) {
          return typeof LD[DD] === GD[16] ? LD[DD] = ID(cD[DD]) : LD[DD]
        }

        function hD(...DD) {
          DD[GD[12]] = GD[1]
        }
        BD(122) in MD && hD(), xD(CD(JD, OD, PD), CD(ED, PD, OD), sD()[BD(125)](QD, PD, ED));
        const VD = sD()[BD(126)](PD),
          TD = sD()[BD(GD[75])](OD, PD) / DD[GD[28]] / VD,
          bD = Math[BD(GD[76])](TD, GD[1]) + GD[2];
        DD[GD[28]] * DD[GD[28]] < sD()[GD[77]](ED) && sD()[BD(GD[38])](OD, OD, ED, bD), xD(DD[GD[0]] = (0, KD.y)(DD[GD[0]], 1, Math[BD(GD[76])](GD[2], Math[BD(130)](GD[1], -TD, GD[2] - VD / DD[GD[28]]))), sD()[BD(131)](OD, OD, QD))
      }
      const RD = XD;
      if (xD(sD()[zD(132)](RD, OD, PD), RD[GD[2]] = GD[1], DD[GD[80]] = sD()[zD(133)](RD)), !gD) {
        function jD(...DD) {
          xD(DD[GD[12]] = GD[1], DD[-GD[79]] = function(...DD) {
            for (xD(DD[GD[12]] = GD[2], DD[GD[2]] = DD[GD[1]].length, DD[GD[18]] = [], DD[GD[4]] = GD[1]), DD[-GD[78]] = GD[1]; DD[-GD[78]] < DD[GD[2]]; DD[-GD[78]]++) DD[GD[18]].push(DD[-GD[78]] !== GD[1] && DD[GD[1]][DD[-GD[78]]] > DD[GD[1]][DD[-GD[78]] - GD[2]] ? DD[GD[18]][DD[-GD[78]] - GD[2]] + GD[2] : GD[2]);
            for (DD[GD[53]] = DD[GD[2]] - GD[2]; DD[GD[53]] >= GD[1]; DD[GD[53]]--) DD[GD[53]] !== DD[GD[2]] - GD[2] && DD[GD[1]][DD[GD[53]]] > DD[GD[1]][DD[GD[53]] + GD[2]] && (DD[GD[18]][DD[GD[53]]] = Math.max(DD[GD[18]][DD[GD[53]]], DD[GD[18]][DD[GD[53]] + GD[2]] + GD[2])), DD[GD[4]] += DD[GD[18]][DD[GD[53]]];
            return DD[GD[4]]
          }, console.log(DD[-GD[79]]))
        }
        zD(134) + "4" in MD && jD(), DD[GD[80]] *= DD[GD[0]]
      }
      const AD = DD[GD[21]][zD(135) + zD(GD[47]) + zD(137)],
        UD = AD ? Math[zD(GD[5])](AD, DD[GD[80]]) : DD[GD[80]];
      sD()[zD(139) + zD(140)](RD, RD);
      const fD = DD[GD[23]] !== GD[54] && void 0 !== DD[GD[23]] ? DD[GD[23]] : DD[GD[21]][zD(141) + zD(142) + zD(143)];
      if (UD > GD[1]) {
        function dD(...DD) {
          for (xD(DD[GD[12]] = GD[2], DD[GD[2]] = '1oKWAhUdFGJP#5Bk0n>^ajMmCZ,l4/S2qH+!".x{DO&b@Qi]%v;E[3cuz6VI*f7N$|YL}R:r9~gw(<T=peyX8t?)`_s', DD[GD[59]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[GD[59]].length, DD[GD[10]] = [], DD[GD[53]] = GD[1], DD[GD[21]] = GD[1], DD[GD[23]] = -GD[2]), DD[GD[81]] = GD[1]; DD[GD[81]] < DD[GD[4]]; DD[GD[81]]++)
            if (DD[-GD[82]] = DD[GD[2]].indexOf(DD[GD[59]][DD[GD[81]]]), DD[-GD[82]] !== -GD[2])
              if (DD[GD[23]] < GD[1]) DD[GD[23]] = DD[-GD[82]];
              else {
                xD(DD[GD[23]] += DD[-GD[82]] * GD[27], DD[GD[53]] |= DD[GD[23]] << DD[GD[21]], DD[GD[21]] += (DD[GD[23]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
                do {
                  xD(DD[GD[10]].push(DD[GD[53]] & GD[11]), DD[GD[53]] >>= GD[3], DD[GD[21]] -= GD[3])
                } while (DD[GD[21]] > GD[23]);
                DD[GD[23]] = -GD[2]
              } return DD[GD[23]] > -GD[2] && DD[GD[10]].push((DD[GD[53]] | DD[GD[23]] << DD[GD[21]]) & GD[11]), nD(DD[GD[10]])
        }

        function SD(...DD) {
          return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = dD(cD[DD[GD[1]]]) : LD[DD[GD[1]]]
        }

        function iD(...DD) {
          function zD(...DD) {
            return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = function(...DD) {
              for (xD(DD[GD[12]] = GD[2], DD[GD[84]] = 'u8?v^:%$(1~z3#w&HN[*i|5MCP]`.6UB"7l/pjo<FqT!rA9aQZXLImetgODfJ=x,2SKYEy+_kdVb4@s>n0c)W}{hR;G', DD[GD[18]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[GD[18]].length, DD[GD[13]] = [], DD[GD[53]] = GD[1], DD[GD[68]] = GD[1], DD[GD[83]] = -GD[2]), DD[GD[3]] = GD[1]; DD[GD[3]] < DD[GD[4]]; DD[GD[3]]++)
                if (DD[GD[46]] = DD[GD[84]].indexOf(DD[GD[18]][DD[GD[3]]]), DD[GD[46]] !== -GD[2])
                  if (DD[GD[83]] < GD[1]) DD[GD[83]] = DD[GD[46]];
                  else {
                    xD(DD[GD[83]] += DD[GD[46]] * GD[27], DD[GD[53]] |= DD[GD[83]] << DD[GD[68]], DD[GD[68]] += (DD[GD[83]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
                    do {
                      xD(DD[GD[13]].push(DD[GD[53]] & GD[11]), DD[GD[53]] >>= GD[3], DD[GD[68]] -= GD[3])
                    } while (DD[GD[68]] > GD[23]);
                    DD[GD[83]] = -GD[2]
                  } return DD[GD[83]] > -GD[2] && DD[GD[13]].push((DD[GD[53]] | DD[GD[83]] << DD[GD[68]]) & GD[11]), nD(DD[GD[13]])
            }(cD[DD[GD[1]]]) : LD[DD[GD[1]]]
          }
          DD[GD[12]] = GD[1], xD(DD[GD[14]] = zD(145) + zD(146) + zD(GD[66]) + zD(148) + zD(149) + zD(150) + "om", DD[GD[85]] = zD(151) + zD(152) + zD(153) + zD(154) + zD(155) + zD(156) + zD(GD[44]), DD[GD[18]] = zD(158) + zD(159) + zD(160) + zD(161) + zD(162) + zD(163) + zD(164) + ")", DD[GD[14]].match(DD[GD[85]] + DD[GD[18]]))
        }
        SD(144) in MD && iD();
        let lD = DD[GD[18]][SD(165) + SD(166)] * fD;
        if (!gD) {
          function ND(...DD) {
            for (xD(DD[GD[12]] = GD[2], DD[GD[14]] = '4u9|ve:6{whdYlgx;2[pDBRsaQ>.@rMA?<Kj^q(Ef!PyS8zXNk~J3`=O_*#&TGn%,Cc1U0Z$V/o5tWL]+HI)}7bim"F', DD[GD[0]] = "" + (DD[GD[1]] || ""), DD[GD[4]] = DD[GD[0]].length, DD[GD[13]] = [], DD[GD[53]] = GD[1], DD[GD[68]] = GD[1], DD[GD[23]] = -GD[2]), DD[GD[81]] = GD[1]; DD[GD[81]] < DD[GD[4]]; DD[GD[81]]++)
              if (DD[GD[46]] = DD[GD[14]].indexOf(DD[GD[0]][DD[GD[81]]]), DD[GD[46]] !== -GD[2])
                if (DD[GD[23]] < GD[1]) DD[GD[23]] = DD[GD[46]];
                else {
                  xD(DD[GD[23]] += DD[GD[46]] * GD[27], DD[GD[53]] |= DD[GD[23]] << DD[GD[68]], DD[GD[68]] += (DD[GD[23]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
                  do {
                    xD(DD[GD[13]].push(DD[GD[53]] & GD[11]), DD[GD[53]] >>= GD[3], DD[GD[68]] -= GD[3])
                  } while (DD[GD[68]] > GD[23]);
                  DD[GD[23]] = -GD[2]
                } return DD[GD[23]] > -GD[2] && DD[GD[13]].push((DD[GD[53]] | DD[GD[23]] << DD[GD[68]]) & GD[11]), nD(DD[GD[13]])
          }

          function ZD(...DD) {
            return DD[GD[12]] = GD[2], typeof LD[DD[GD[1]]] === GD[16] ? LD[DD[GD[1]]] = ND(cD[DD[GD[1]]]) : LD[DD[GD[1]]]
          }
          lD *= DD[GD[18]][ZD(167) + ZD(168)]
        }
        let WD = DD[GD[18]][SD(GD[86]) + SD(170) + "ss"] * UD;
        if (UD < .3 && (WD *= UD), lD > WD) {
          function yD(...DD) {
            for (xD(DD[GD[12]] = GD[2], DD[GD[86]] = 'akNAOCT={:bIfpn8yKX[>(`uP#3Grg4QozRY;h.HUviVseD6%Z}&]2B)7q!?w0LW^~tFx_c|"lmj1,+E*$d/9@<5MSJ', DD[GD[87]] = "" + (DD[GD[1]] || ""), DD[-GD[89]] = DD[GD[87]].length, DD[GD[10]] = [], DD[GD[28]] = GD[1], DD[-GD[91]] = GD[1], DD[GD[88]] = -GD[2]), DD[GD[3]] = GD[1]; DD[GD[3]] < DD[-GD[89]]; DD[GD[3]]++)
              if (DD[GD[90]] = DD[GD[86]].indexOf(DD[GD[87]][DD[GD[3]]]), DD[GD[90]] !== -GD[2])
                if (DD[GD[88]] < GD[1]) DD[GD[88]] = DD[GD[90]];
                else {
                  xD(DD[GD[88]] += DD[GD[90]] * GD[27], DD[GD[28]] |= DD[GD[88]] << DD[-GD[91]], DD[-GD[91]] += (DD[GD[88]] & GD[30]) > GD[31] ? GD[32] : GD[33]);
                  do {
                    xD(DD[GD[10]].push(DD[GD[28]] & GD[11]), DD[GD[28]] >>= GD[3], DD[-GD[91]] -= GD[3])
                  } while (DD[-GD[91]] > GD[23]);
                  DD[GD[88]] = -GD[2]
                } return DD[GD[88]] > -GD[2] && DD[GD[10]].push((DD[GD[28]] | DD[GD[88]] << DD[-GD[91]]) & GD[11]), nD(DD[GD[10]])
          }

          function kD(DD) {
            return typeof LD[DD] === GD[16] ? LD[DD] = yD(cD[DD]) : LD[DD]
          }

          function mD(...DD) {
            DD[GD[12]] = GD[1]
          }
          kD(171) in MD && mD(), lD = WD
        }
        xD(sD()[SD(174)](RD, RD, lD), DD[GD[10]][SD(175) + SD(GD[92])](RD))
      }
      DD[GD[10]][zD(177) + GD[99]] = DD[GD[18]][zD(178) + zD(GD[51]) + GD[99]] * (gD ? pD : rD)
    }
  },
  37628: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD,
      f: () => LD
    });
    var pD = wD(37635),
      sD = wD(1886);
    const KD = 2,
      rD = 1,
      LD = {
        Ug: 1,
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

    function cD(DD, zD, wD, LD, cD, gD, RD) {
      if (cD.speed) return (0, pD.e)(zD, wD, LD, cD, gD, RD, DD), void(cD.ticksToReachMaxIdleFriction = KD);
      const AD = LD.isOnGround(),
        UD = zD.bloxd.getSyncedClientOptions(zD.bloxd.getPlayerReader(wD)),
        fD = null === UD ? zD.bloxd.getClientPredictedOption(wD, "groundFrictionScale") : UD.groundFrictionScale,
        ID = null === UD ? zD.bloxd.getClientPredictedOption(wD, "airFrictionScale") : UD.airFrictionScale,
        BD = AD ? fD : ID,
        GD = Math.max(rD, BD),
        hD = cD.ticksToReachMaxIdleFriction / KD,
        nD = (0, sD.y)(GD, BD, hD);
      gD.friction = DD.standingFriction * ((null === UD ? zD.bloxd.getClientPredictedOption(wD, "airMomentumConservation") : UD.airMomentumConservation) ? nD : BD), cD.ticksToReachMaxIdleFriction > 0 && cD.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);