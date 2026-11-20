export const id = 220;
export const ids = [220];
export const modules = {
  38304: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => vT
    });
    var lT = cT(218),
      MT = cT(37499);
    const KT = 1.2,
      OT = {
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
        zI: .5,
        ETT: !1
      },
      yT = {
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
        zI: .5,
        ETT: !1
      },
      fT = {
        physicsBodyDimensions: {
          width: lT.f.Ow,
          height: lT.f.Iw
        },
        hitBoxDimensions: {
          width: lT.f.Ow + .4,
          height: lT.f.Iw + .6
        },
        eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
        rideHeight: lT.f.Iw - .3,
        zI: .5,
        ETT: !1
      },
      xT = {
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
        zI: .5,
        ETT: !1
      },
      IT = {
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
        zI: .5,
        ETT: !1
      },
      AT = {
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
        zI: .5,
        ETT: !1
      },
      CT = {
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
        zI: .5,
        ETT: !1
      },
      jT = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: lT.f.Ow,
            height: lT.f.Iw
          },
          hitBoxDimensions: {
            width: lT.f.Ow + .4,
            height: lT.f.Iw + .6
          },
          eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
          rideHeight: lT.f.Iw - .1,
          zI: MT.d.zI,
          ETT: !0
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
        },
        Camel: {
          modelScale: KT,
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
        },
        "Cave Golem": OT,
        "Draugr Zombie": {
          ...fT,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": fT,
        "Frost Golem": OT,
        "Frost Zombie": {
          ...fT,
          defaultPose: "zombie"
        },
        "Frost Skeleton": fT,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: lT.f.Ow,
            height: lT.f.Iw
          },
          hitBoxDimensions: {
            width: lT.f.Ow + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          zI: .5,
          ETT: !1
        },
        Wolf: xT,
        Bear: IT,
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
          zI: .5,
          ETT: !1
        },
        Stag: AT,
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
          zI: .5,
          ETT: !1
        },
        Gorilla: CT,
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
          zI: .5,
          ETT: !1
        },
        "Draugr Huntress": fT,
        "Magma Golem": OT,
        "Spirit Golem": OT,
        "Spirit Wolf": xT,
        "Spirit Bear": IT,
        "Spirit Stag": AT,
        "Spirit Gorilla": CT,
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: lT.f.Ow,
            height: lT.f.Iw
          },
          hitBoxDimensions: {
            width: lT.f.Ow + .4,
            height: lT.f.Iw + .6
          },
          eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
          rideHeight: lT.f.Iw - .1,
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: lT.f.Ow,
            height: lT.f.Iw
          },
          hitBoxDimensions: {
            width: lT.f.Ow + .4,
            height: lT.f.Iw + .6
          },
          eyeHeight: lT.f.Iw * lT.f.playerEyeToHeightRatio,
          rideHeight: lT.f.Iw - .1,
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
        },
        Zombie: {
          ...fT,
          defaultPose: "zombie"
        },
        Skeleton: fT,
        Mummy: {
          ...fT,
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
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
          zI: .5,
          ETT: !1
        },
        "Iron Guardian": yT,
        "Gold Guardian": yT,
        "Diamond Guardian": yT,
        "Moonstone Guardian": yT,
        "Iron Goofy Golem": yT,
        "Gold Goofy Golem": yT,
        "Diamond Goofy Golem": yT,
        "Moonstone Goofy Golem": yT,
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
          zI: .5,
          ETT: !1
        }
      };

    function vT(TT) {
      return jT[TT]
    }
  },
  36864: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    const lT = {
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
  37505: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(350),
      MT = cT.n(lT),
      KT = cT(1915);
    let OT;
    var yT, fT, xT, IT, AT, CT, jT, vT, tT;
    const hT = [1, 151, 0, "h", 75, 9, 157, "e", "f", 22, 8, 255, "length", "c", 128, 36, 43, "undefined", void 0, 117, 118, 2, 63, 6, "fromCodePoint", 7, 12, "push", "a", 215, 3, 149, 240, "g", 91, 248, 8191, 88, 13, 14, 4, 83, 168, 242, 5, 196, "b", 87, 109, "d", 160, 99, 100, 101, null, 106, 107, 108, 92, 93, 94, 95, 15, 102, 103, 104, 105, 114, 115, 96, 97, 98, 84, 85, 126, 241, "i", 222, "pk", 185, 127, 64, 148, 153, 11, 73, 66, 181, 16, "P", 512, 150, 193, 155, 217, 228, 247, 200, 130, 1023, 29, 31, 18, 243, 224, 32, 24, 10, 19, 65535, 67, "on"];

    function NT(...TT) {
      return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
        for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = '<BUtu^AOV4@3rzvXw,>e#6{yI%7i$hDJ1:dQf}FRj0Wg2PCG_cS?x~+q*(Z!=])oTH9YKM[5k.;&EmL/N`|8l"sbnpa', TT[hT[1]] = "" + (TT[hT[2]] || ""), TT[hT[4]] = TT[hT[1]].length, TT[hT[9]] = [], TT[hT[7]] = hT[2], TT[hT[8]] = hT[2], TT[-hT[6]] = -hT[0]), TT[hT[3]] = hT[2]; TT[hT[3]] < TT[hT[4]]; TT[hT[3]]++)
          if (TT[hT[5]] = TT[hT[0]].indexOf(TT[hT[1]][TT[hT[3]]]), TT[hT[5]] !== -hT[0])
            if (TT[-hT[6]] < hT[2]) TT[-hT[6]] = TT[hT[5]];
            else {
              JT(TT[-hT[6]] += TT[hT[5]] * hT[34], TT[hT[7]] |= TT[-hT[6]] << TT[hT[8]], TT[hT[8]] += (TT[-hT[6]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
              do {
                JT(TT[hT[9]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[hT[8]] -= hT[10])
              } while (TT[hT[8]] > hT[25]);
              TT[-hT[6]] = -hT[0]
            } return TT[-hT[6]] > -hT[0] && TT[hT[9]].push((TT[hT[7]] | TT[-hT[6]] << TT[hT[8]]) & hT[11]), QT(TT[hT[9]])
      }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
    }

    function QT(...TT) {
      return TT[hT[12]] = hT[0], typeof IT !== hT[17] && IT ? (new IT).decode(new AT(TT[hT[2]])) : typeof CT !== hT[17] && CT ? CT.from(TT[hT[2]]).toString("utf-8") : tT(TT[hT[2]])
    }

    function ST(...TT) {
      if (TT[hT[12]] = hT[30], TT[hT[2]] === function(...TT) {
          return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
            for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = 'Eu8,l/<(vhOm06gG)%k]?iCV*:}eBy`cI^dbPpW=_>LfwXxM9jZ2R.AnH+Jot#FQ4rU1aNDTSK"qz&Y5[{3$~;7@|!s', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[-hT[32]] = TT[hT[21]].length, TT[hT[40]] = [], TT[hT[7]] = hT[2], TT[hT[35]] = hT[2], TT[hT[33]] = -hT[0]), TT[-hT[31]] = hT[2]; TT[-hT[31]] < TT[-hT[32]]; TT[-hT[31]]++)
              if (TT[hT[5]] = TT[hT[0]].indexOf(TT[hT[21]][TT[-hT[31]]]), TT[hT[5]] !== -hT[0])
                if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[hT[5]];
                else {
                  JT(TT[hT[33]] += TT[hT[5]] * hT[34], TT[hT[7]] |= TT[hT[33]] << TT[hT[35]], TT[hT[35]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                  do {
                    JT(TT[hT[40]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[hT[35]] -= hT[10])
                  } while (TT[hT[35]] > hT[25]);
                  TT[hT[33]] = -hT[0]
                } return TT[hT[33]] > -hT[0] && TT[hT[40]].push((TT[hT[7]] | TT[hT[33]] << TT[hT[35]]) & hT[11]), QT(TT[hT[40]])
          }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
        }(82) + hT[89]) return TT[hT[0]] + TT[hT[21]]
    }

    function DT() {}
    JT(yT = {}, fT = ["5_MOnG=N,46EmcHI%Hp1:x4`^zrqMk=Qd+w&5`2IAZl;U%LR", "vryxijrCCV}Ey7tgiK@1bFheSX;{D^+i65y+cm!0(#p(B", "t=J4wx.h}Z$/HkQ%2AT4", ';J+xxkg&#TEfJ|i0{KehH~*x|4AwhuMFvj~;"5K>C*&u}uqd,XzOAfSNu', "at9?%(pQ.#+[u8Tf=Hd1!CNZT>8Vnt4>B1<:wx$>gv@A%uD,m)U", "*K8SO/kZv>q", "++fO2?JhIz5uKXqQW;[qw8OoH(%", 'XCdh5~:e84(.V8qd5,y4)l0ejz!*a`6iB9/4tC/z}ewt!|_7n3"J*[:hf40', "37MJ(=IUh9bYfuzel!t", "]}~OILcB", "+7uhL_sxK+Qq576$m?o+g}n;4qOi?ZSjUrU", "sA?~]RAD!3NXzfke9+dmMktbn#@DW%Id$#w+om`01>", "l?b$Wc)C;#0Ecz%d;}];xknI/o|Y#_Gi/[T?c}phh><K9%@JDH$O>", "q7n+J5oh:=!mEfN7d+m$K/<", "dy{x)lLdZ#(O._A", "1A71A`GeQ+8VXv3e@y[xv`eB", ":?|1R|+xP!_ETf<W@gTcpxu>;3eib[~jB=zJ1+OOtT)9$85%?jHA#!7fLVF", ":=Cqvq4Oe=|[XF:I^=n4Z[qOteVGd]0er>VAS[{xB=K[xtW%X>Lxe!}OH=Q", "@C9?:5EC*#>ML`EF#=>?w;J(~e5u1iEe[Hy$]k!QMT7tU}U}5KoEi", "U=5c1+<", 'E!DJ>F|d@HgMHk!0w(_c.`cz$v"%D]f>P7Z1~})Au', '#r=@A/Ej_(=3g|1Wo,5xR"@ZQ=o3n!IdY$BL@_LC[zsSHfJ}W7&^1+KrO', "7CM7c[%G~eR//GVJk+X4fLzB", "%y+xj&bQ0ZO]q[ih", "1X>?:Q}G(ZU4$8Z0Hy{EoZ<", "e4w:$N+>(HK~K!A>?#GxK;*>94#d:u", ">X6@C|/h2v=NCUUIt(DqD+&0@!<4^lE7L$t", '@g:i[/vTQ(I)rRsdAy&^f"*xu', 'eCb4_c6BX="h8Fu>*,#;QNB%$6/C"=&7?j*.XF<', "8HMSWKzGnZA#1G2eE<", 'AyhO.)SD9rW6(IWexrzq|("BqZBD}ws{c+N?rflZA', "U1`?ts+>t", "_+ih[q.O<X}Mq[DIxdRu(CM?<(JO0u", '@}H?aE_>Q(iM"_O%H<', "Z!Dc/qLjjzCI8UZfvB", '_gvJ7jhM1>"{^=HI,4vE"SCr>4ZQZMHfVyU', "_g%+&M}O:90", '67)xUk/OQ=T628"iM}"5Md@>d=Q9=X:Wl$H+U)LZ(H,d*8bhTAAqJ+gBG>', 'xHYVLqp02!ZNyvW7XXL$w)JO"T*.6``RpvmJW+V>N4;.cu', "5KIA8Fie_>A#dzsw&vU", "&*f@R|8O)ViM4=sdQ+?;4fKZwo{dp_2FNdu;aPJQd+yqB=[II5GuLq<", "2HuOW+Yzj,H[.`$QhB", '/3{JSc)Km~,k=IcR[y"5~R4eIZuk7c?0TKB1d!4z0)H6g|t}{joxH=]Mt4', "NPU^[`ErNrl~MuUJ5J[EQ!ehdrT6QF4%OQp+k=5BO", "#+K;U)TIu", "mP;hg*bMA", 'NAr@<lhQ8TF)L%Q>E)fOP|CZ94C!n8&RY.CE"SVD;#vk*iG7NPRA@_8B', "6CL._?AVT(Ji|M=y2rBAm_VI#T@kg5z#5ABi&`FUdo=vA]>#q7OxnE(0w=Ym<", "2r(+|:~zh)%,1t`7", "tr.?W+<", "M)amp.cex4I?E8v", "F?t1Hlc0`Xjvjt|Rqd8^R|>Im)w)tSljnvYm5S50v6Q/gGC7A=thK=VDZv", 'Ac1+b:b"^zZ.p_Ni|P~O>`yh])[9qFt%1;qE_op,#z%)#Xs{U>K@+lE;qz2', "<9}JSl5On#4kP]JD[.*AeFTAbZ6H/[]fgAR$0&}GRTAznt;e%#L51NwU", "j,yct)ZU", "lv,&2o@D&#Cqftg%W(t;*/Aso~%q;`DfgK5$q[XOc>", ">7?kR.sdCXWO.IpdS4Bi_|IfQ=Z", 'A1AE<_FrxTs;l8^gi;j4"S5Mj#:d}w<D+K!@nS{xp)6@Zzhy#XK^', "t=9hn!bQU=c9k53F&!w&bS2C9e<5Ri<DxPlO2o;jg!P6iSz", 'KP5xqlvs9+">lXJ}a)/uY~[rgHM%&[Cj>he1IEIDa,=NPwK%2)kA', ")vQ1D5II.)sfCz!$", "G)=~JL/z`rY$+z:}N.z;t~Bor)y_ovV7~Hs5l5QeavooW}n{", "|dBi0N)AjzBDRv|dy;t", "]5{x`)wU/>K=c=70(Pi1r)SU", "|$Cu=kGO*#*$Y|4R!_&^9kLrqzlhw8YJf(4D>", "e;|1![HB5#Cu(={jN*<AN)[CEV|3$iwj}=N?6xfx163&]M/i@1di]?O~c9UDB", "G#SV0KACX9(x>`n{r5MO(R1f}+TxyS.%i=*+K_m($!nTb7%QA5zqL(wI:r", "JK6;uft~2~ft^w,#=t7iYCA>|rA4scbdf;i1OMGGPV8mLF^gKd?mJG<V,+DOB", "y#8^~~<", "sWqueLrCw=JMPz~j*K$@Y)b0yZVkBl9IL)l^5/F>?THmEu", "bt+E+o~GO", "YAoc1K;Cee{EB", 'GHyAk;Kr;#XKP_dImPz@"Pq09X7ID];7oA?1<sp,7vG$pfu>Z!B', "QAX:sF$f4qUwo[yQAK`+Ofoz9oGEGUW%;#U", "hrBLA)!BG9[{zw!0}AH?R&czl(Ku4k,ihCCcfLEI=!LVA]oyM_B", "1K)$L;_jgVM~wG%y?##hmfH&N>~JEiYJAob4", "A>!VP?+x!*ei!|=f=5N+L;WDg*9[B_{j<93@a!RQOqxE]zJh1}th]RohGV;1B", "056J>E)N!3vZbvA>y=h;R++Cu", '>hvxN`H(~zPuBkKDLAKS;_"(0ZHNHITy+<', '5WAx0ci0x(";<XU>^oJDs"pM?4HCu5TIp.%Dg}UVH(o>YFBIJ}Pq^qWI1=b;<', '|Pdm%"Je6e"VE8gFntCEeMKC0,pe+c)IVhF$0*=ZSr>H.=g7X(}$Q!`B', "14E7TC#Vsen%/v#iy;qE?|aCdr[6%w;7u+IDo;<", "py;c+=P8", "9?FJm`#U", "Btv5zQ)Y", "~a{k", "<%vkKl;", "~tLT", "&f>L<23", "OADUt&cP", "0ANyQwcP", "AAGU", "OA,4I|#P", "hAr&c&TP", "na,4%x7P", "l?j4T", "OA,4c&aW6s", "CH7ly2bsej", 'Sc%N88"~6s', "2:El+4OP", "6:w&48TP", "ya4]u,fP", "OA,4c&TP", "naDU0zjP", "#C1FlwOP", "zn1llx#P", "5CNySzTP", "lXw&<4_k", "9qqlK", "WADU", "GA,]s", "C?5lW", "yM{:D7HP", 'E<"LK', "5C:l`;tP", "lL:FWw3", "5C:lKx/W6s", "l<c4pxEs&b", "Rv:FA]s8N", "5C:lKx0P", "na1l%&?k", "ya(lozMP", "WXw&<43", "|Et`", "Rr[T", "5)Ol", "N7[T", "jbhSs", "9obl", "SDs`", "r<(F", "QAj4x8CP", "kd@UH9/P", "0c2&88cP", "(L[F", 'YC"L', "6?:lY,fP", "E][F", "0?[l|&jP", '?X"`?ztP', "+6TUz8TP", "{f2roz3", "0?[lHmaP", "Zm]n", "0ci%1KI+", "kRXf8sa", '^+Qhf_"B', "u7]E,xRB", "=Ft]>~k4", "Up^X", "N0#T!v5VxH+Zv`Mv.R|X", "D$X]kD|)<K?r/F6..|GT", "Xyo:lgkpTeO<?M8uD:6X", "JLsT#:xDWXNEl=].D0}X", "lz/{I2s6", "Eau:3yqB", ";/7;)d+B", "=1Rxv", ";/7;2$wb", "PYu4X", "e%n;X~8cX57BN~R|", ";{tNu5&w0FK[HF*e", ')%$#OE5DI)qq"1{p', "9{Q[}P=(qf4a1R%{", "=j$!<Y$Z<KxHEHU", "!mXnz8U", "cs=mg[je", "_XLaT", ";:w&48TP", "0?[l(4BP"]), JT(xT = function(...TT) {
      JT(TT[hT[12]] = hT[2], TT[-hT[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[hT[0]] = hT[18], TT[hT[13]] = []);
      try {
        JT(TT[hT[0]] = Object, TT[hT[13]][hT[27]]("".__proto__.constructor.name))
      } catch (fT) {}
      TT: for (TT[-hT[14]] = hT[2]; TT[-hT[14]] < TT[-hT[15]][hT[12]]; TT[-hT[14]]++) try {
        for (TT[hT[0]] = TT[-hT[15]][TT[-hT[14]]](), TT[-hT[16]] = hT[2]; TT[-hT[16]] < TT[hT[13]][hT[12]]; TT[-hT[16]]++)
          if (typeof TT[hT[0]][TT[hT[13]][TT[-hT[16]]]] === hT[17]) continue TT;
        return TT[hT[0]]
      } catch (fT) {}
      return TT[hT[0]] || this
    }() || {}, IT = xT.TextDecoder, AT = xT.Uint8Array, CT = xT.Ov, jT = xT.String || String, vT = xT.Array || Array, tT = function(...TT) {
      return JT(TT[hT[12]] = hT[2], TT[hT[28]] = new vT(hT[14]), TT[hT[29]] = jT[hT[24]] || jT.fromCharCode, TT[hT[19]] = []),
        function(...kT) {
          for (JT(kT[hT[12]] = hT[0], kT[hT[0]] = hT[18], kT[hT[21]] = hT[18], kT[hT[13]] = kT[hT[2]][hT[12]], TT[hT[19]][hT[12]] = hT[2]), kT[-hT[20]] = hT[2]; kT[-hT[20]] < kT[hT[13]];) JT(kT[hT[21]] = kT[hT[2]][kT[-hT[20]]++], kT[hT[21]] <= hT[80] ? kT[hT[0]] = kT[hT[21]] : kT[hT[21]] <= 223 ? kT[hT[0]] = (kT[hT[21]] & hT[101]) << hT[23] | kT[hT[2]][kT[-hT[20]]++] & hT[22] : kT[hT[21]] <= 239 ? kT[hT[0]] = (kT[hT[21]] & hT[62]) << hT[26] | (kT[hT[2]][kT[-hT[20]]++] & hT[22]) << hT[23] | kT[hT[2]][kT[-hT[20]]++] & hT[22] : jT[hT[24]] ? kT[hT[0]] = (kT[hT[21]] & hT[25]) << hT[102] | (kT[hT[2]][kT[-hT[20]]++] & hT[22]) << hT[26] | (kT[hT[2]][kT[-hT[20]]++] & hT[22]) << hT[23] | kT[hT[2]][kT[-hT[20]]++] & hT[22] : (kT[hT[0]] = hT[22], kT[-hT[20]] += hT[30]), TT[hT[19]][hT[27]](TT[hT[28]][kT[hT[0]]] || (TT[hT[28]][kT[hT[0]]] = TT[hT[29]](kT[hT[0]]))));
          return TT[hT[19]].join("")
        }
    }());
    const aT = MT()[NT(hT[41])](),
      FT = MT()[NT(hT[41])](),
      rT = MT()[NT(hT[41])](),
      PT = MT()[NT(hT[41])](),
      wT = MT()[NT(hT[41])](),
      mT = MT()[NT(hT[41])](),
      bT = MT()[NT(hT[41])](),
      zT = (...TT) => {
        function kT(...TT) {
          return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
            for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = ';0YSD8]Hk%T,7h2[&@xw>L_1oW^~r!Ke5V)CpB?/FXIt}=gzcG#vA6$RsJE"Mbji<`*NQO|l+na.U3P:d4({fZyq9um', TT[hT[42]] = "" + (TT[hT[2]] || ""), TT[hT[30]] = TT[hT[42]].length, TT[hT[45]] = [], TT[hT[44]] = hT[2], TT[hT[23]] = hT[2], TT[hT[25]] = -hT[0]), TT[-hT[43]] = hT[2]; TT[-hT[43]] < TT[hT[30]]; TT[-hT[43]]++)
              if (TT[hT[5]] = TT[hT[0]].indexOf(TT[hT[42]][TT[-hT[43]]]), TT[hT[5]] !== -hT[0])
                if (TT[hT[25]] < hT[2]) TT[hT[25]] = TT[hT[5]];
                else {
                  JT(TT[hT[25]] += TT[hT[5]] * hT[34], TT[hT[44]] |= TT[hT[25]] << TT[hT[23]], TT[hT[23]] += (TT[hT[25]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                  do {
                    JT(TT[hT[45]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[23]] -= hT[10])
                  } while (TT[hT[23]] > hT[25]);
                  TT[hT[25]] = -hT[0]
                } return TT[hT[25]] > -hT[0] && TT[hT[45]].push((TT[hT[44]] | TT[hT[25]] << TT[hT[23]]) & hT[11]), QT(TT[hT[45]])
          }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
        }
        TT[hT[12]] = hT[30];
        const cT = mT;
        return MT()[kT(hT[72]) + kT(hT[73])](cT, TT[hT[21]]), MT()[kT(86)](TT[hT[2]], cT, MT()[kT(hT[47])](cT, TT[hT[0]]))
      };

    function JT() {
      JT = function() {}
    }
    OT = (...TT) => {
      function kT(...TT) {
        return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
          for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = '3kPqdGNgFLUZcRhAtbOsjDpQBKCETIWrlSf506#Jaoe?unHY/m7:$@MyVX^(<i+v").1,;2w>`]_&4x!z89[}|~=*%{', TT[hT[46]] = "" + (TT[hT[2]] || ""), TT[hT[39]] = TT[hT[46]].length, TT[hT[49]] = [], TT[hT[44]] = hT[2], TT[hT[48]] = hT[2], TT[hT[33]] = -hT[0]), TT[hT[3]] = hT[2]; TT[hT[3]] < TT[hT[39]]; TT[hT[3]]++)
            if (TT[-hT[47]] = TT[hT[0]].indexOf(TT[hT[46]][TT[hT[3]]]), TT[-hT[47]] !== -hT[0])
              if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[47]];
              else {
                JT(TT[hT[33]] += TT[-hT[47]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[hT[48]], TT[hT[48]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                do {
                  JT(TT[hT[49]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[48]] -= hT[10])
                } while (TT[hT[48]] > hT[25]);
                TT[hT[33]] = -hT[0]
              } return TT[hT[33]] > -hT[0] && TT[hT[49]].push((TT[hT[44]] | TT[hT[33]] << TT[hT[48]]) & hT[11]), QT(TT[hT[49]])
        }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
      }
      TT[hT[12]] = hT[10];
      const cT = TT[hT[2]][kT(hT[37])][kT(89) + kT(90) + kT(hT[34])](TT[hT[0]]);
      TT[-hT[50]] = TT[hT[2]][kT(hT[37])][kT(hT[58]) + kT(hT[59]) + kT(hT[60]) + kT(hT[61])](cT);
      const lT = TT[-hT[50]] === hT[54] ? TT[hT[2]][kT(hT[37])][kT(hT[69]) + kT(hT[70]) + kT(hT[71])](TT[hT[0]], kT(hT[51]) + kT(hT[52]) + kT(hT[53]) + hT[7]) : TT[-hT[50]][kT(hT[51]) + kT(hT[52]) + kT(hT[53]) + hT[7]],
        OT = TT[-hT[50]] === hT[54] ? TT[hT[2]][kT(hT[37])][kT(hT[63]) + kT(hT[64]) + kT(hT[65]) + kT(hT[66])](TT[hT[0]], kT(hT[55]) + kT(hT[56]) + kT(hT[57])) : TT[-hT[50]][kT(hT[55]) + kT(hT[56]) + kT(hT[57])];
      JT(MT()[kT(hT[48])](aT, hT[2], hT[2], TT[hT[44]]), MT().Of(aT, aT, MT()[kT(110)], TT[hT[30]].heading), MT()[kT(111)](bT, TT[hT[40]].Oh), bT[hT[0]] = hT[2]);
      const xT = TT[hT[21]][kT(112) + kT(113)]();
      if (JT(TT[-hT[50]] = TT[hT[2]][kT(hT[37])][kT(hT[58]) + kT(hT[59]) + kT(hT[60]) + kT(hT[61])](cT), TT[-hT[62]] = TT[-hT[50]] === hT[54] ? TT[hT[2]][kT(hT[37])][kT(hT[63]) + kT(hT[64]) + kT(hT[65]) + kT(hT[66])](TT[hT[0]], kT(hT[67]) + kT(hT[68])) : TT[-hT[50]][kT(hT[67]) + kT(hT[68])]), !xT && MT()[hT[78]](bT) && (TT[-hT[50]] === hT[54] ? TT[hT[2]][kT(hT[37])][kT(hT[69]) + kT(hT[70]) + kT(hT[71])](TT[hT[0]], kT(116) + kT(hT[19]) + kT(hT[20])) : TT[-hT[50]][kT(119) + kT(120) + kT(121) + kT(122)])) {
        function vT(...TT) {
          for (JT(TT[hT[12]] = hT[0], TT[hT[75]] = 'm916oC!V`TleD=urY8iqJO_RBH75+Sx|$&MKw.%{;k})@ZvNj0?yGb^<zQPtEdAa["nIgL/:>,]sh4WUfF~*3#cp2(X', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[72]] = TT[hT[21]].length, TT[hT[49]] = [], TT[hT[44]] = hT[2], TT[hT[77]] = hT[2], TT[-hT[73]] = -hT[0]), TT[hT[74]] = hT[2]; TT[hT[74]] < TT[hT[72]]; TT[hT[74]]++)
            if (TT[hT[76]] = TT[hT[75]].indexOf(TT[hT[21]][TT[hT[74]]]), TT[hT[76]] !== -hT[0])
              if (TT[-hT[73]] < hT[2]) TT[-hT[73]] = TT[hT[76]];
              else {
                JT(TT[-hT[73]] += TT[hT[76]] * hT[34], TT[hT[44]] |= TT[-hT[73]] << TT[hT[77]], TT[hT[77]] += (TT[-hT[73]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                do {
                  JT(TT[hT[49]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[77]] -= hT[10])
                } while (TT[hT[77]] > hT[25]);
                TT[-hT[73]] = -hT[0]
              } return TT[-hT[73]] > -hT[0] && TT[hT[49]].push((TT[hT[44]] | TT[-hT[73]] << TT[hT[77]]) & hT[11]), QT(TT[hT[49]])
        }

        function tT(...TT) {
          return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = vT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
        }
        JT(zT(FT, aT, bT), zT(rT, bT, aT), MT()[tT(123)](PT, bT, rT));
        const NT = MT()[tT(124)](bT),
          mT = MT()[tT(125)](aT, bT) / TT[hT[44]] / NT,
          oT = Math[tT(hT[74])](mT, hT[2]) + hT[0];
        if (TT[hT[44]] * TT[hT[44]] < MT()[hT[78]](rT)) {
          function HT(...TT) {
            for (JT(TT[hT[12]] = hT[0], TT[-hT[5]] = 'l|NCHhneIASLdJTboGDB5r$j_+)gsVp"U9Q~v.@ma1!t2Y^MRqZ:Xk,x7{fE>;*<3ciKOPz4[u0Fw`8&?y/#]W(=}%6', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[79]] = TT[hT[21]].length, TT[hT[40]] = [], TT[hT[44]] = hT[2], TT[hT[8]] = hT[2], TT[hT[33]] = -hT[0]), TT[hT[3]] = hT[2]; TT[hT[3]] < TT[hT[79]]; TT[hT[3]]++)
              if (TT[hT[76]] = TT[-hT[5]].indexOf(TT[hT[21]][TT[hT[3]]]), TT[hT[76]] !== -hT[0])
                if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[hT[76]];
                else {
                  JT(TT[hT[33]] += TT[hT[76]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[hT[8]], TT[hT[8]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                  do {
                    JT(TT[hT[40]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[8]] -= hT[10])
                  } while (TT[hT[8]] > hT[25]);
                  TT[hT[33]] = -hT[0]
                } return TT[hT[33]] > -hT[0] && TT[hT[40]].push((TT[hT[44]] | TT[hT[33]] << TT[hT[8]]) & hT[11]), QT(TT[hT[40]])
          }

          function eT(...TT) {
            return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = HT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
          }
          MT()[eT(hT[80])](aT, aT, rT, oT)
        }
        JT(TT[-hT[62]] = (0, KT.w)(TT[-hT[62]], 1, Math[tT(hT[74])](hT[0], Math[tT(hT[14])](hT[2], -mT, hT[0] - NT / TT[hT[44]]))), MT()[tT(129)](aT, aT, PT))
      }
      const IT = wT;
      JT(MT()[kT(hT[98])](IT, aT, bT), IT[hT[0]] = hT[2], TT[hT[13]] = MT()[kT(131)](IT)), xT || (TT[hT[13]] *= TT[-hT[62]]);
      const AT = TT[hT[23]][kT(132) + kT(133) + kT(134)],
        CT = AT ? Math[kT(135)](AT, TT[hT[13]]) : TT[hT[13]];
      MT()[kT(136) + kT(137)](IT, IT);
      const jT = TT[hT[25]] !== hT[54] && void 0 !== TT[hT[25]] ? TT[hT[25]] : TT[hT[23]][kT(138) + kT(139) + kT(140) + kT(141)];
      if (CT > hT[2]) {
        function GT(...TT) {
          for (JT(TT[hT[12]] = hT[0], TT[hT[81]] = 'UeBbYKFcnmhtqQ4+6V&iRpLr*T7JD^zaE#f5g{"?CA)`:Gs|NjPXHu;<($,S1MWZ!O}lIvd8o0y3~x_9=%.]@[w2>k/', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[13]] = TT[hT[21]].length, TT[hT[40]] = [], TT[hT[44]] = hT[2], TT[-hT[83]] = hT[2], TT[hT[33]] = -hT[0]), TT[hT[10]] = hT[2]; TT[hT[10]] < TT[hT[13]]; TT[hT[10]]++)
            if (TT[-hT[82]] = TT[hT[81]].indexOf(TT[hT[21]][TT[hT[10]]]), TT[-hT[82]] !== -hT[0])
              if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[82]];
              else {
                JT(TT[hT[33]] += TT[-hT[82]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[-hT[83]], TT[-hT[83]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                do {
                  JT(TT[hT[40]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[-hT[83]] -= hT[10])
                } while (TT[-hT[83]] > hT[25]);
                TT[hT[33]] = -hT[0]
              } return TT[hT[33]] > -hT[0] && TT[hT[40]].push((TT[hT[44]] | TT[hT[33]] << TT[-hT[83]]) & hT[11]), QT(TT[hT[40]])
        }

        function VT(...TT) {
          return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = GT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
        }
        let ET = TT[hT[21]][kT(142) + VT(143)] * jT;
        if (!xT) {
          function uT(...TT) {
            for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = 'ay+"G7HU]nfA/zmu}Ow;jxvoL1c=X@.q%J<0FRDr^Y5p!?)|dQ6i`>IBPT:3C*k,2~t#N&l$9E{[4eKS8sM_(ghWVZb', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[13]] = TT[hT[21]].length, TT[hT[49]] = [], TT[hT[7]] = hT[2], TT[hT[8]] = hT[2], TT[hT[33]] = -hT[0]), TT[hT[3]] = hT[2]; TT[hT[3]] < TT[hT[13]]; TT[hT[3]]++)
              if (TT[-hT[84]] = TT[hT[0]].indexOf(TT[hT[21]][TT[hT[3]]]), TT[-hT[84]] !== -hT[0])
                if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[84]];
                else {
                  JT(TT[hT[33]] += TT[-hT[84]] * hT[34], TT[hT[7]] |= TT[hT[33]] << TT[hT[8]], TT[hT[8]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                  do {
                    JT(TT[hT[49]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[hT[8]] -= hT[10])
                  } while (TT[hT[8]] > hT[25]);
                  TT[hT[33]] = -hT[0]
                } return TT[hT[33]] > -hT[0] && TT[hT[49]].push((TT[hT[7]] | TT[hT[33]] << TT[hT[8]]) & hT[11]), QT(TT[hT[49]])
          }

          function XT(TT) {
            return typeof yT[TT] === hT[17] ? yT[TT] = uT(fT[TT]) : yT[TT]
          }
          ET *= TT[hT[21]][XT(144) + XT(145)]
        }
        let ZT = TT[hT[21]][VT(146) + VT(147) + "ss"] * CT;
        if (CT < .3 && (ZT *= CT), ET > ZT) {
          function dT(...TT) {
            for (JT(TT[hT[12]] = hT[0], TT[hT[28]] = '04x=>;%2#,6AHVBFRYmkfgLhw(M|ON&e[IsQ:9pCcD7{}?!^~1/tS]Tzl5yqoZ.)`X"$U@*EvbGKr3aWPuJn8di_+<j', TT[hT[82]] = "" + (TT[hT[2]] || ""), TT[hT[13]] = TT[hT[82]].length, TT[hT[49]] = [], TT[hT[44]] = hT[2], TT[hT[8]] = hT[2], TT[hT[33]] = -hT[0]), TT[hT[10]] = hT[2]; TT[hT[10]] < TT[hT[13]]; TT[hT[10]]++)
              if (TT[-hT[85]] = TT[hT[28]].indexOf(TT[hT[82]][TT[hT[10]]]), TT[-hT[85]] !== -hT[0])
                if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[-hT[85]];
                else {
                  JT(TT[hT[33]] += TT[-hT[85]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[hT[8]], TT[hT[8]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                  do {
                    JT(TT[hT[49]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[8]] -= hT[10])
                  } while (TT[hT[8]] > hT[25]);
                  TT[hT[33]] = -hT[0]
                } return TT[hT[33]] > -hT[0] && TT[hT[49]].push((TT[hT[44]] | TT[hT[33]] << TT[hT[8]]) & hT[11]), QT(TT[hT[49]])
          }

          function LT(...TT) {
            return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = dT(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
          }

          function RT(...TT) {
            JT(TT[hT[12]] = hT[2], TT[hT[46]] = function(...TT) {
              function kT(...TT) {
                return TT[hT[12]] = hT[21], KT(lT(OT(TT[hT[2]]), OT(TT[hT[0]])))
              }

              function cT(...TT) {
                return TT[hT[12]] = hT[30],
                  function(...TT) {
                    var kT, cT, lT, MT;
                    for (JT(TT[hT[12]] = hT[21], TT[hT[21]] = TT[hT[0]].length, TT[hT[30]] = Array()), TT[hT[40]] = Array(Math.ceil(TT[hT[2]].length / hT[21])), kT = hT[2]; kT < TT[hT[40]].length; kT++) TT[hT[40]][kT] = TT[hT[2]].charCodeAt(kT * hT[21]) << hT[10] | TT[hT[2]].charCodeAt(kT * hT[21] + hT[0]);
                    for (; TT[hT[40]].length > hT[2];) {
                      for (JT(MT = Array(), lT = hT[2]), kT = hT[2]; kT < TT[hT[40]].length; kT++) JT(lT = (lT << hT[88]) + TT[hT[40]][kT], cT = Math.floor(lT / TT[hT[21]]), lT -= cT * TT[hT[21]]), (MT.length > hT[2] || cT > hT[2]) && (MT[MT.length] = cT);
                      JT(TT[hT[30]][TT[hT[30]].length] = lT, TT[hT[40]] = MT)
                    }
                    for (TT[hT[44]] = "", kT = TT[hT[30]].length - hT[0]; kT >= hT[2]; kT--) TT[hT[44]] += TT[hT[0]].charAt(TT[hT[30]][kT]);
                    for (TT[hT[7]] = Math.ceil(TT[hT[2]].length * hT[10] / (Math.log(TT[hT[0]].length) / Math.log(hT[21]))), kT = TT[hT[44]].length; kT < TT[hT[7]]; kT++) TT[hT[44]] = TT[hT[0]][hT[2]] + TT[hT[44]];
                    return TT[hT[44]]
                  }(lT(OT(TT[hT[2]]), OT(TT[hT[0]])), TT[hT[21]])
              }

              function lT(...TT) {
                TT[hT[12]] = hT[21], TT[-hT[72]] = xT(TT[hT[2]]), TT[-hT[72]].length > hT[88] && (TT[-hT[72]] = FT(TT[-hT[72]], TT[hT[2]].length * hT[10]));
                var kT = Array(hT[88]),
                  cT = Array(hT[88]);
                for (TT[hT[30]] = hT[2]; TT[hT[30]] < hT[88]; TT[hT[30]]++) JT(kT[TT[hT[30]]] = 909522486 ^ TT[-hT[72]][TT[hT[30]]], cT[TT[hT[30]]] = 1549556828 ^ TT[-hT[72]][TT[hT[30]]]);
                return TT[hT[13]] = FT(kT.concat(xT(TT[hT[0]])), hT[90] + TT[hT[0]].length * hT[10]), IT(FT(cT.concat(TT[hT[13]]), ST(function(...TT) {
                  return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
                    for (JT(TT[hT[12]] = hT[0], TT[hT[0]] = '*&65u84=@`9]1BS+.N)vU(Gd7aLXxz#{![qmslY2Q;h~Myet^DAcVkZf|IKOPi?w}nJT$0p_%EgrHj"b<>FCo/W,:3R', TT[hT[46]] = "" + (TT[hT[2]] || ""), TT[-hT[86]] = TT[hT[46]].length, TT[hT[49]] = [], TT[hT[7]] = hT[2], TT[hT[23]] = hT[2], TT[hT[25]] = -hT[0]), TT[hT[3]] = hT[2]; TT[hT[3]] < TT[-hT[86]]; TT[hT[3]]++)
                      if (TT[-hT[87]] = TT[hT[0]].indexOf(TT[hT[46]][TT[hT[3]]]), TT[-hT[87]] !== -hT[0])
                        if (TT[hT[25]] < hT[2]) TT[hT[25]] = TT[-hT[87]];
                        else {
                          JT(TT[hT[25]] += TT[-hT[87]] * hT[34], TT[hT[7]] |= TT[hT[25]] << TT[hT[23]], TT[hT[23]] += (TT[hT[25]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                          do {
                            JT(TT[hT[49]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[hT[23]] -= hT[10])
                          } while (TT[hT[23]] > hT[25]);
                          TT[hT[25]] = -hT[0]
                        } return TT[hT[25]] > -hT[0] && TT[hT[49]].push((TT[hT[7]] | TT[hT[25]] << TT[hT[23]]) & hT[11]), QT(TT[hT[49]])
                  }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
                }(154) + hT[89], hT[90], 256)))
              }

              function MT(...kT) {
                function lT(...TT) {
                  return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
                    for (JT(TT[hT[12]] = hT[0], TT[hT[91]] = '|BbFHJiW9R(1Ypwq<vCS>Al?IXo;k{^PEG2!yt}L7+],NdD~a[Tx@4&M`sfU*#Kr3/nm$h%:."Z_0Vc)j68zuQOeg5=', TT[hT[21]] = "" + (TT[hT[2]] || ""), TT[hT[30]] = TT[hT[21]].length, TT[hT[49]] = [], TT[hT[44]] = hT[2], TT[hT[92]] = hT[2], TT[hT[33]] = -hT[0]), TT[hT[10]] = hT[2]; TT[hT[10]] < TT[hT[30]]; TT[hT[10]]++)
                      if (TT[hT[5]] = TT[hT[91]].indexOf(TT[hT[21]][TT[hT[10]]]), TT[hT[5]] !== -hT[0])
                        if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[hT[5]];
                        else {
                          JT(TT[hT[33]] += TT[hT[5]] * hT[34], TT[hT[44]] |= TT[hT[33]] << TT[hT[92]], TT[hT[92]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                          do {
                            JT(TT[hT[49]].push(TT[hT[44]] & hT[11]), TT[hT[44]] >>= hT[10], TT[hT[92]] -= hT[10])
                          } while (TT[hT[92]] > hT[25]);
                          TT[hT[33]] = -hT[0]
                        } return TT[hT[33]] > -hT[0] && TT[hT[49]].push((TT[hT[44]] | TT[hT[33]] << TT[hT[92]]) & hT[11]), QT(TT[hT[49]])
                  }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
                }
                kT[hT[12]] = hT[0];
                try {
                  TT[hT[28]]
                } catch (cT) {
                  TT[hT[28]] = hT[2]
                }
                for (JT(kT[hT[95]] = TT[hT[28]] ? lT(hT[93]) + lT(156) + lT(hT[6]) : lT(hT[93]) + lT(158) + lT(159), kT[hT[21]] = "", kT[hT[94]] = hT[18]), kT[hT[49]] = hT[2]; kT[hT[49]] < kT[hT[2]].length; kT[hT[49]]++) JT(kT[hT[94]] = kT[hT[2]].charCodeAt(kT[hT[49]]), kT[hT[21]] += kT[hT[95]].charAt(kT[hT[94]] >>> hT[40] & hT[62]) + kT[hT[95]].charAt(kT[hT[94]] & hT[62]));
                return kT[hT[21]]
              }

              function KT(...kT) {
                kT[hT[12]] = hT[0];
                try {
                  TT[hT[0]]
                } catch (cT) {
                  TT[hT[0]] = ""
                }
                for (JT(kT[hT[28]] = LT(hT[50]) + LT(161) + LT(162) + LT(163) + function(...TT) {
                    return TT[hT[12]] = hT[0], typeof yT[TT[hT[2]]] === hT[17] ? yT[TT[hT[2]]] = function(...TT) {
                      for (JT(TT[hT[12]] = hT[0], TT[hT[28]] = 'fedrOUiVAKL^G5Tb0`:_NzDt2@)%4;*y=hZaYR3g}>cmx{P(jMIw/."7Fvk|Es8~<BJnS&p!]1Xl#6[+HCoW$Qu9,q?', TT[-hT[96]] = "" + (TT[hT[2]] || ""), TT[-hT[1]] = TT[-hT[96]].length, TT[hT[40]] = [], TT[hT[7]] = hT[2], TT[-hT[0]] = hT[2], TT[hT[33]] = -hT[0]), TT[hT[1]] = hT[2]; TT[hT[1]] < TT[-hT[1]]; TT[hT[1]]++)
                        if (TT[hT[97]] = TT[hT[28]].indexOf(TT[-hT[96]][TT[hT[1]]]), TT[hT[97]] !== -hT[0])
                          if (TT[hT[33]] < hT[2]) TT[hT[33]] = TT[hT[97]];
                          else {
                            JT(TT[hT[33]] += TT[hT[97]] * hT[34], TT[hT[7]] |= TT[hT[33]] << TT[-hT[0]], TT[-hT[0]] += (TT[hT[33]] & hT[36]) > hT[37] ? hT[38] : hT[39]);
                            do {
                              JT(TT[hT[40]].push(TT[hT[7]] & hT[11]), TT[hT[7]] >>= hT[10], TT[-hT[0]] -= hT[10])
                            } while (TT[-hT[0]] > hT[25]);
                            TT[hT[33]] = -hT[0]
                          } return TT[hT[33]] > -hT[0] && TT[hT[40]].push((TT[hT[7]] | TT[hT[33]] << TT[-hT[0]]) & hT[11]), QT(TT[hT[40]])
                    }(fT[TT[hT[2]]]) : yT[TT[hT[2]]]
                  }(164), kT[hT[46]] = "", kT[-hT[98]] = kT[hT[2]].length), kT[hT[40]] = hT[2]; kT[hT[40]] < kT[-hT[98]]; kT[hT[40]] += hT[30])
                  for (kT[hT[44]] = kT[hT[2]].charCodeAt(kT[hT[40]]) << hT[88] | (kT[hT[40]] + hT[0] < kT[-hT[98]] ? kT[hT[2]].charCodeAt(kT[hT[40]] + hT[0]) << hT[10] : hT[2]) | (kT[hT[40]] + hT[21] < kT[-hT[98]] ? kT[hT[2]].charCodeAt(kT[hT[40]] + hT[21]) : hT[2]), kT[hT[8]] = hT[2]; kT[hT[8]] < hT[40]; kT[hT[8]]++) kT[hT[40]] * hT[10] + kT[hT[8]] * hT[23] > kT[hT[2]].length * hT[10] ? kT[hT[46]] += TT[hT[0]] : kT[hT[46]] += kT[hT[28]].charAt(kT[hT[44]] >>> hT[23] * (hT[30] - kT[hT[8]]) & hT[22]);
                return kT[hT[46]]
              }

              function OT(...TT) {
                var kT, cT;
                for (JT(TT[hT[12]] = hT[0], TT[-hT[100]] = "", TT[hT[21]] = -hT[0]); ++TT[hT[21]] < TT[hT[2]].length;) JT(kT = TT[hT[2]].charCodeAt(TT[hT[21]]), cT = TT[hT[21]] + hT[0] < TT[hT[2]].length ? TT[hT[2]].charCodeAt(TT[hT[21]] + hT[0]) : hT[2]), 55296 <= kT && kT <= 56319 && 56320 <= cT && cT <= 57343 && JT(kT = 65536 + ((kT & hT[99]) << hT[107]) + (cT & hT[99]), TT[hT[21]]++), kT <= hT[80] ? TT[-hT[100]] += String.fromCharCode(kT) : kT <= 2047 ? TT[-hT[100]] += String.fromCharCode(192 | kT >>> hT[23] & hT[101], hT[14] | kT & hT[22]) : kT <= hT[109] ? TT[-hT[100]] += String.fromCharCode(hT[104] | kT >>> hT[26] & hT[62], hT[14] | kT >>> hT[23] & hT[22], hT[14] | kT & hT[22]) : kT <= 2097151 && (TT[-hT[100]] += String.fromCharCode(hT[32] | kT >>> hT[102] & hT[25], hT[14] | kT >>> hT[26] & hT[22], hT[14] | kT >>> hT[23] & hT[22], hT[14] | kT & hT[22]));
                return TT[-hT[100]]
              }

              function xT(...TT) {
                for (JT(TT[hT[12]] = hT[0], TT[hT[104]] = Array(TT[hT[2]].length >> hT[21])), TT[hT[21]] = hT[2]; TT[hT[21]] < TT[hT[104]].length; TT[hT[21]]++) TT[hT[104]][TT[hT[21]]] = hT[2];
                for (TT[hT[21]] = hT[2]; TT[hT[21]] < TT[hT[2]].length * hT[10]; TT[hT[21]] += hT[10]) TT[hT[104]][TT[hT[21]] >> hT[44]] |= (TT[hT[2]].charCodeAt(TT[hT[21]] / hT[10]) & hT[11]) << hT[106] - TT[hT[21]] % hT[105];
                return TT[hT[104]]
              }

              function IT(...TT) {
                for (JT(TT[hT[12]] = hT[0], TT[hT[28]] = ""), TT[hT[21]] = hT[2]; TT[hT[21]] < TT[hT[2]].length * hT[105]; TT[hT[21]] += hT[10]) TT[hT[28]] += String.fromCharCode(TT[hT[2]][TT[hT[21]] >> hT[44]] >>> hT[106] - TT[hT[21]] % hT[105] & hT[11]);
                return TT[hT[28]]
              }

              function AT(...TT) {
                return TT[hT[12]] = hT[21], TT[hT[2]] >>> TT[hT[0]] | TT[hT[2]] << hT[105] - TT[hT[0]]
              }

              function CT(...TT) {
                return TT[hT[12]] = hT[21], TT[hT[2]] >>> TT[hT[0]]
              }

              function jT(...TT) {
                return TT[hT[12]] = hT[30], TT[hT[2]] & TT[hT[0]] ^ ~TT[hT[2]] & TT[hT[21]]
              }

              function vT(...TT) {
                return TT[hT[12]] = hT[30], TT[hT[2]] & TT[hT[0]] ^ TT[hT[2]] & TT[hT[21]] ^ TT[hT[0]] & TT[hT[21]]
              }

              function tT(...TT) {
                return TT[hT[12]] = hT[0], AT(TT[hT[2]], hT[21]) ^ AT(TT[hT[2]], hT[38]) ^ AT(TT[hT[2]], hT[9])
              }

              function NT(...TT) {
                return TT[hT[12]] = hT[0], AT(TT[hT[2]], hT[23]) ^ AT(TT[hT[2]], hT[84]) ^ AT(TT[hT[2]], 25)
              }

              function DT(...TT) {
                return TT[hT[12]] = hT[0], AT(TT[hT[2]], hT[25]) ^ AT(TT[hT[2]], hT[102]) ^ CT(TT[hT[2]], hT[30])
              }

              function aT(...TT) {
                return TT[hT[12]] = hT[0], AT(TT[hT[2]], 17) ^ AT(TT[hT[2]], hT[108]) ^ CT(TT[hT[2]], hT[107])
              }

              function FT(...kT) {
                var cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, QT;
                for (JT(kT[hT[12]] = hT[21], kT[hT[21]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), kT[hT[46]] = new Array(hT[81])), JT(kT[hT[2]][kT[hT[0]] >> hT[44]] |= hT[14] << hT[106] - kT[hT[0]] % hT[105], kT[hT[2]][(kT[hT[0]] + hT[81] >> hT[5] << hT[40]) + hT[62]] = kT[hT[0]]), IT = hT[2]; IT < kT[hT[2]].length; IT += hT[88]) {
                  for (JT(cT = kT[hT[21]][hT[2]], lT = kT[hT[21]][hT[0]], MT = kT[hT[21]][hT[21]], KT = kT[hT[21]][hT[30]], OT = kT[hT[21]][hT[40]], yT = kT[hT[21]][hT[44]], fT = kT[hT[21]][hT[23]], xT = kT[hT[21]][hT[25]]), AT = hT[2]; AT < hT[81]; AT++) JT(kT[hT[46]][AT] = AT < hT[88] ? kT[hT[2]][AT + IT] : rT(rT(rT(aT(kT[hT[46]][AT - hT[21]]), kT[hT[46]][AT - hT[25]]), DT(kT[hT[46]][AT - hT[62]])), kT[hT[46]][AT - hT[88]]), CT = rT(rT(rT(rT(xT, NT(OT)), jT(OT, yT, fT)), TT[-hT[44]][AT]), kT[hT[46]][AT]), QT = rT(tT(cT), vT(cT, lT, MT)), xT = fT, fT = yT, yT = OT, OT = rT(KT, CT), KT = MT, MT = lT, lT = cT, cT = rT(CT, QT));
                  JT(kT[hT[21]][hT[2]] = rT(cT, kT[hT[21]][hT[2]]), kT[hT[21]][hT[0]] = rT(lT, kT[hT[21]][hT[0]]), kT[hT[21]][hT[21]] = rT(MT, kT[hT[21]][hT[21]]), kT[hT[21]][hT[30]] = rT(KT, kT[hT[21]][hT[30]]), kT[hT[21]][hT[40]] = rT(OT, kT[hT[21]][hT[40]]), kT[hT[21]][hT[44]] = rT(yT, kT[hT[21]][hT[44]]), kT[hT[21]][hT[23]] = rT(fT, kT[hT[21]][hT[23]]), kT[hT[21]][hT[25]] = rT(xT, kT[hT[21]][hT[25]]))
                }
                return kT[hT[21]]
              }

              function rT(...TT) {
                return JT(TT[hT[12]] = hT[21], TT[-hT[110]] = (TT[hT[2]] & hT[109]) + (TT[hT[0]] & hT[109]), TT[hT[46]] = (TT[hT[2]] >> hT[88]) + (TT[hT[0]] >> hT[88]) + (TT[-hT[110]] >> hT[88])), TT[hT[46]] << hT[88] | TT[-hT[110]] & hT[109]
              }
              return JT(TT[hT[12]] = hT[2], TT[hT[28]] = hT[2], TT[hT[0]] = ""), TT[-hT[44]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...TT) {
                  return TT[hT[12]] = hT[0], MT(function(...TT) {
                    return TT[hT[12]] = hT[0], IT(FT(xT(TT[hT[2]]), TT[hT[2]].length * hT[10]))
                  }(OT(TT[hT[2]])))
                },
                b64: kT,
                any: cT,
                hex_hmac: function(...TT) {
                  return TT[hT[12]] = hT[21], MT(lT(OT(TT[hT[2]]), OT(TT[hT[0]])))
                },
                b64_hmac: kT,
                any_hmac: cT
              }
            }(), console.log(TT[hT[46]]))
          }
          LT(hT[82]) in DT && RT(), ET = ZT
        }
        JT(MT()[VT(165)](IT, IT, ET), TT[hT[40]][VT(166) + VT(167)](IT))
      }
      TT[hT[40]][kT(hT[42]) + hT[111]] = TT[hT[21]][kT(169) + kT(hT[52]) + hT[111]] * (xT ? lT : OT)
    }
  },
  37499: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => fT,
      d: () => yT
    });
    var lT = cT(37505),
      MT = cT(1915);
    const KT = 2,
      OT = 1,
      yT = {
        zI: 1,
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

    function fT(TT, kT, cT, yT, fT, xT, IT) {
      if (fT.speed) return (0, lT.e)(kT, cT, yT, fT, xT, IT, TT), void(fT.ticksToReachMaxIdleFriction = KT);
      const AT = yT.isOnGround(),
        CT = kT.bloxd.getSyncedClientOptions(kT.bloxd.getPlayerReader(cT)),
        jT = null === CT ? kT.bloxd.getClientPredictedOption(cT, "groundFrictionScale") : CT.groundFrictionScale,
        vT = null === CT ? kT.bloxd.getClientPredictedOption(cT, "airFrictionScale") : CT.airFrictionScale,
        tT = AT ? jT : vT,
        hT = Math.max(OT, tT),
        NT = fT.ticksToReachMaxIdleFriction / KT,
        QT = (0, MT.w)(hT, tT, NT);
      xT.friction = TT.standingFriction * ((null === CT ? kT.bloxd.getClientPredictedOption(cT, "airMomentumConservation") : CT.airMomentumConservation) ? QT : tT), fT.ticksToReachMaxIdleFriction > 0 && fT.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);