export const id = 258;
export const ids = [258];
export const modules = {
  40001: (dd, Od, md) => {
    md.d(Od, {
      e: () => qd
    });
    var Wd = md(218),
      Fd = md(39180);
    const Rd = 1.2,
      Xd = {
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
        fX: .5,
        Imd: !1
      },
      Kd = {
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
        fX: .5,
        Imd: !1
      },
      hd = {
        physicsBodyDimensions: {
          width: Wd.i.Hb,
          height: Wd.i.yb
        },
        hitBoxDimensions: {
          width: Wd.i.Hb + .4,
          height: Wd.i.yb + .6
        },
        eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
        rideHeight: Wd.i.yb - .3,
        fX: .5,
        Imd: !1
      },
      vd = {
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
        fX: .5,
        Imd: !1
      },
      Qd = {
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
        fX: .5,
        Imd: !1
      },
      td = {
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
        fX: .5,
        Imd: !1
      },
      od = {
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
        fX: .5,
        Imd: !1
      },
      Nd = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Wd.i.Hb,
            height: Wd.i.yb
          },
          hitBoxDimensions: {
            width: Wd.i.Hb + .4,
            height: Wd.i.yb + .6
          },
          eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
          rideHeight: Wd.i.yb - .1,
          fX: Fd.i.fX,
          Imd: !0
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
        },
        Camel: {
          modelScale: Rd,
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
        },
        "Cave Golem": Xd,
        "Draugr Zombie": {
          ...hd,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": hd,
        "Frost Golem": Xd,
        "Frost Zombie": {
          ...hd,
          defaultPose: "zombie"
        },
        "Frost Skeleton": hd,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Wd.i.Hb,
            height: Wd.i.yb
          },
          hitBoxDimensions: {
            width: Wd.i.Hb + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          fX: .5,
          Imd: !1
        },
        Wolf: vd,
        Bear: Qd,
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
          fX: .5,
          Imd: !1
        },
        Stag: td,
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
          fX: .5,
          Imd: !1
        },
        Gorilla: od,
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
          fX: .5,
          Imd: !1
        },
        "Draugr Huntress": hd,
        "Magma Golem": Xd,
        "Spirit Golem": Xd,
        "Spirit Wolf": vd,
        "Spirit Bear": Qd,
        "Spirit Stag": td,
        "Spirit Gorilla": od,
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Wd.i.Hb,
            height: Wd.i.yb
          },
          hitBoxDimensions: {
            width: Wd.i.Hb + .4,
            height: Wd.i.yb + .6
          },
          eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
          rideHeight: Wd.i.yb - .1,
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Wd.i.Hb,
            height: Wd.i.yb
          },
          hitBoxDimensions: {
            width: Wd.i.Hb + .4,
            height: Wd.i.yb + .6
          },
          eyeHeight: Wd.i.yb * Wd.i.playerEyeToHeightRatio,
          rideHeight: Wd.i.yb - .1,
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
        },
        Zombie: {
          ...hd,
          defaultPose: "zombie"
        },
        Skeleton: hd,
        Mummy: {
          ...hd,
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
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
          fX: .5,
          Imd: !1
        },
        "Iron Guardian": Kd,
        "Gold Guardian": Kd,
        "Diamond Guardian": Kd,
        "Moonstone Guardian": Kd,
        "Iron Goofy Golem": Kd,
        "Gold Goofy Golem": Kd,
        "Diamond Goofy Golem": Kd,
        "Moonstone Goofy Golem": Kd,
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
          fX: .5,
          Imd: !1
        }
      };

    function qd(dd) {
      return Nd[dd]
    }
  },
  38603: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = {
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
  39185: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(415),
      Fd = md.n(Wd),
      Rd = md(2057);
    let Xd;
    var Kd, hd, vd, Qd, td, od, Nd, qd, Hd;
    const yd = ["b", 0, 1, 116, 9, "a", "i", 7, "e", 51, "d", 8, 255, "length", "c", 97, 3, 235, 194, "undefined", void 0, 150, 71, 63, 6, "fromCodePoint", 12, "push", 2, "h", 217, 91, 218, "f", 8191, 88, 13, 14, 4, 110, 192, "g", 5, 21, 193, 115, 127, 128, 126, null, 122, 123, 124, 125, 129, 130, 131, 141, 142, 143, 144, 145, 146, 230, 219, 81, 37, 102, 112, 54, 181, 249, 74, 16, 512, 27, 247, 49, 35, 155, 103, 23, 15, 212, 55, 182, 98, 147, 1023, 31, 18, 60, 32, 24, 10, 19, 64, 65535, 38, "sq", 167, 90, 99, 221, 36, 202, 78, !1, 76, 241, 210, 62, 47, "on"];

    function bd(...dd) {
      return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
        for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = '"^u/+6,)>(=5?20cVk9HxA7_{rG&g1`bBOEzL;jfpZC*n~X[Ney3.om]I:WK%dRF!PQ|vMi#<DS8YJhU4lsT$}qwat@', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[4]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[8]] = yd[1], dd[-yd[9]] = yd[1], dd[yd[7]] = -yd[2]), dd[-yd[3]] = yd[1]; dd[-yd[3]] < dd[yd[4]]; dd[-yd[3]]++)
          if (dd[yd[6]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[3]]]), dd[yd[6]] !== -yd[2])
            if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[6]];
            else {
              sd(dd[yd[7]] += dd[yd[6]] * yd[31], dd[yd[8]] |= dd[yd[7]] << dd[-yd[9]], dd[-yd[9]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
              do {
                sd(dd[yd[10]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[-yd[9]] -= yd[11])
              } while (dd[-yd[9]] > yd[7]);
              dd[yd[7]] = -yd[2]
            } return dd[yd[7]] > -yd[2] && dd[yd[10]].push((dd[yd[8]] | dd[yd[7]] << dd[-yd[9]]) & yd[12]), Td(dd[yd[10]])
      }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
    }

    function Td(...dd) {
      return dd[yd[13]] = yd[2], typeof Qd !== yd[19] && Qd ? (new Qd).decode(new td(dd[yd[1]])) : typeof od !== yd[19] && od ? od.from(dd[yd[1]]).toString("utf-8") : Hd(dd[yd[1]])
    }

    function pd(...dd) {
      if (dd[yd[13]] = yd[16], dd[yd[1]] === function(...dd) {
          return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
            for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = 'CBbwY8:i#o^q/=f<pK9Qx0zGa*]{R3@W+eTF~,HJU61.v|j2P([IVs$>5_?OLk}N!gMyduSh`rnt47)mAD"%cl&Z;XE', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[28]].length, dd[yd[38]] = [], dd[yd[32]] = yd[1], dd[yd[33]] = yd[1], dd[yd[30]] = -yd[2]), dd[yd[29]] = yd[1]; dd[yd[29]] < dd[yd[16]]; dd[yd[29]]++)
              if (dd[yd[4]] = dd[yd[5]].indexOf(dd[yd[28]][dd[yd[29]]]), dd[yd[4]] !== -yd[2])
                if (dd[yd[30]] < yd[1]) dd[yd[30]] = dd[yd[4]];
                else {
                  sd(dd[yd[30]] += dd[yd[4]] * yd[31], dd[yd[32]] |= dd[yd[30]] << dd[yd[33]], dd[yd[33]] += (dd[yd[30]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                  do {
                    sd(dd[yd[38]].push(dd[yd[32]] & yd[12]), dd[yd[32]] >>= yd[11], dd[yd[33]] -= yd[11])
                  } while (dd[yd[33]] > yd[7]);
                  dd[yd[30]] = -yd[2]
                } return dd[yd[30]] > -yd[2] && dd[yd[38]].push((dd[yd[32]] | dd[yd[30]] << dd[yd[33]]) & yd[12]), Td(dd[yd[38]])
          }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
        }(109)) return dd[yd[2]] + dd[yd[28]]
    }

    function Yd() {}
    sd(Kd = {}, hd = ["=#4e<Ye^$:I+Ks{E^1^3]ss.>P4B^", "dxH<JL.q85(`N[LjQ3b`3;C4z(QF^Lvj.#Ue(YSX6", 'N(8JB."{ZRpgw0*fnxB`"Wp?U%a|+L3EQvO,', "J5|>+]f[u(r", ')#,OWii9"Q35^NPkkXw+o;_o<kC{EeqZTDk,', ">XM+S:oz#xnkYc%zgvBmCz7LsF9s?TaE?;bD$Tsq6HHM~r(", ":03J0YHZYk1E&j?", "@PoSoo|z<W?8/y{gzvxb5l>{!(", "!Rchm$h{;m6UaT^bCv_,YyTz9F|BX;AZx#@oI<Y{5K5`^", "v/8>5yPZ$:<iVN@LaP]+MN(2^F(,*iM;hiM#7Y@EWx.I1<Jfv/+=uoa{0K.", ";(;)B.,9,!heo<%zL?|BUjX9t0N0WdRk?9,.:$Q{W05]Z<vbim/", "IEu3*3.4OF^h@iop_^", "wK/6P%Cpv!}?6$]z:_)(", "e#}g6S6Mj!2PI&wEE(igFo/Z62%F6NNEJ_~]sRju", 'UEr&7jx{vH.9V#E;h~"&,EyW,', "vbR)USTz(W*Rfskf,%).y8a4rPF5|sSG7mqeB#F1.:rM:<*r=?3>", "r*fe*48Z9mIY!&bLRK@1_}z1gP!F#G^`zmh)%NBS?0", '0F1=5l{{oWk`Er+k4P:m^<A[*IFQp&>G%NT>/ET^+2[ec0zki"', "@xoSEdR49?xY]&u`)e>3D:)2/mcxbuL9?cu", '<IFm,oM38Rvi8&9pDN91WJ{L/(P5zy6{m"', 'PbTJxy32|H",i2[pTE|6ev#:bAhl_G7gc^', '8;;S(%N9":&]Re+jx:Xb_[${":A]fuuL|m&1}#,9)', "wf&1}}yWR>A<ii%z9%}bNftU|::", 't5"h7:.p+', "uQr8*I4q5KwJ*G<jc%6]PLn?XQ7Wme<b&E=3u<O[aWL=96ZHyPR)", 'e(E<~s{`EHDI+c~&+vib$~uLpx4el{!1I"', '3;S3FWHM^:x;xT&_9Xqbsh,.*KDrr+5jN?`b:X"', 'JPwY&p[2XAI4c&pH(XMYC8FzLmB/byRCT,MSCmU3`K%+4/#{.mH1k#"{u(', "DK~]a[oFP(sITjR1&#K=", 'H%|S*dA^"A`2J+Pbs,e3gpOZKP:I?[WLlKy&eF=LrP;NkLoZ0^', 'qkp(*;"', "6(~S(qf)g0{", "CvM.sy829(H=}{Zf+%TS}:$EH(BM<&EkUE(8RJ<{PFvgZVhp_m/", "jRh#zp82LHfY>%/b1#,]N$~^nA", "s;MynshXsFm", "to7(?NZz/(W46dr19#mbFSc[3HN{8jl&*3r&0jyu", 'B34,C4P2[I5V"/"*', "yE0)jDv?w2$IsM(by?+=hMGu9H.Fbykf7(NezmU^", ",m^8a:L./", 'C:C<$YP1@P";bG*HX:u', "iRUD;;sXNoZ/@e:ghg})%U@p~Rx;vc(fJrwDpvi9{P72P%,", "!kcYXi$E@P6vk6&Z1P^", 'cem.9R9X%kC=9;ij=1/BFo"', "{c86W3LWz:987dNp", "Ev=1tjH1!(9,DLazsKi+q.qWR9x8VTgCA:zS@K1:pW[DB+", "Q;>m;;z1>]hId%QL9mOBE4O)O(:YvN}z", "h,FD5y$E72,vfs>j5?n1,%IvB9D7je8H.(+S!L+>e9x3Z+@1)e%J.I,C^c", "<vt,U~{uD0", "M~/B=S81J>0xf0XfR(B,SL{.!oC4wi`LPNQBw#v{y(", "Ocpe:FA[=PE0^", '9B0YndN`bc9;l%9g"p[.GKv`:0|4%&IEx3B&~su>wW_k</`_Jbfecll^L2ZD^', "+m_.5TLW^c#DNN?GbS2)<UXX}W&MV<4p", "(+n1lM;HOcvFl{=H)1W3}Ml^", "83}yn3rHakSJTj@V_35B%f7q*P^8Z<E`_xK1E4%X9(B&^", "1mk<C8EL+Ha:c0qgg_%SWEvvk:C.+&$p:/4(Y].u{P.gOVF`l~hD<]ppz?3D^", "R_FeODdMz:~MwcKC&vgSh]mWE%9Mzu}p%PnbndJZ{PWJ;2/b", "@ohbn8d^~>M%^", "g;+JX;O8lFiJju;{s3JG&j)wQ?@JlrSHB?A=", "v,`gMEaE%IXQg&:g6Fh.KJYXymH{4/VG;,](Eml)e(YIQl#9", ")_b.B#!9K5DXJ+*jG;emGYtUtPJ%pKv{hkj+<]O8u%*N^", "Em@BEh&1/:@Xo+Qb;*FD0lY.8IJSH0Iz#RZ3/q=q,", '0F;YGj^wB%l9ZV7&;G0]J:d^=KmD"', "O:5JApfld5SDUTAZS~vy.;1H;Wt|m03&rxJbW%A1/(", "JE;bwh7Wz?%InK1zdNo)", ":xUDdf^r=0C]>#bkC1~S;[VWx!D+*u", "0(Vh+oeHh9Ii)TnG<N}yYY}2[?XRL[=x", ":mXD<N`u", 'FPEJ)Ue[{xRA>/@z"(vJ@h[Z1Q=2+#ICg%7b;K%`N%,,BTq7>z"hRUd1~A', "XG?=Dl%{L(L=P{]Zk3D,6LE`u?", "txd)Z[])6mpK`e,r9G+JVlU:P9n{M<PLuAvSIX)^", "#0D,wj[2QHB<3WIC~RvJnIWXUI7/me+jQ/wYk", "SPb,Ld#)hKN41N5Gg(X+wj_^F%G{xK]z/9LSTjWW+m>/_0W15Bhg[fm.B(", '#/gSTh"', ">vyB<]YWd5i4E6]Z6?GB@~i9sFJr*u[G@o0Y6MJ)XIhIPN,j*3KS)U?.)", 'dv)(Gjg?E%@JQ0&gvRn]SLoZ;!mgwiijs/"OAT+9~0', "1?GBX4L{B?2P^", "+_i)P]^2J>Z=Wd2f", "Z#)(/qU1m2x<n#njqC6bV", '3(gSE}c)^9fY/T"CS3q.t:p.;!+<n[b`JPzS6%L.09:KKsr_2FF(', 'C_^8)LoZXI/uc0]p{%!e.fE9mH"&(%$ES;2Sl:])Y0', ".~J.L8g?ycJcfj_1f1Bm^UJ:X>=mHy1LwP7]W$*zO(", "qk+1*sS?%o~K/inGjm#e.J={{x+WX;wEURI,;vY,`QXAYcE;{%p8hlA^", "[pO8lYk2,", '@R@og#Ruh57Y?T]19,KoB4835R@l7dk&kpZ3NI"', "Rpb(7}t1x!L{qr{gW_+JsM^2+:qlfj]zhg93v<b1/", "C_FeT#d[VA&)&0hpUKje]WB?$2w?u6R{w0QB<U6odRVR3W$E", "#5RbJlBq|:%Km;z9$/O&>RhXK>#%gKCr;(YGoF!{2R=v&K6{:#d=", 'H?93q~"', 'D0fDB[*2O?"[Tu[pKpibV', 'n_+=6UVXx!!4<+<bd0dbt.}_|?G<BNB_L_O3V#UZRKdD2l>j#"', ".~],ljc)uH$FrV=j(:XD2", '~#_,AMt^V:JIE2u{m#8B=l?.smlF/y"9H1B,]i$?/mY1a/', ">FZ`U~3)F>k8aTVGtfvJYMZ2/", "!v7Yy8!?0QqlmdKko,1by;?W,", "~?XY~4L9[F81?#bkWk.o|<X?6", "LcmY)ywk}m{&^", 'IKEBUL;[F??8}r"*X(t,g', "aP4D+o1Z$(tSsuPLA3MyoFn?vH!9xcEL2:I3Ezl1=kv4cc(", 'sNTov<|znom)B/_p@>CBzd"', "|vw+b#oZ:Wwrur>rwNu<B#>.(]6(%/", '(v7(GK6Z0FfKl%yEbcQBvLfzJ0kxA<Cr)e1YNI"', "y~f.*DDZ6!K", "lE_.`[,CjW])Q2Hg", '"c`.8Tezm2QQYc9gp?pDJLa.,', '5Fx]BK"', "E/Z,qO..^([AYKDf1#7]sYC`N%Qoqr#{N3cYe32Z.25PZ+GZ", "5?(8&ht^", "Wvi.|<1[H(v%>&p9pP:BJSBu", "B;X.MS^MlF&&$cd`eGB,pe3[&K8o&j`CWm%JV:M89?_xt4>", "`g^IIJ=B", "Q3jbJlxu", ";*3B[vEu", "&ST>", "1f{GYxA", "QhUj", "sUxB3w7", "t.voKsZ5", "=.Fz}JZ5", "..Ro", "t.+HYn1/F", "MZ|RVj>mF", "@@XB.j/^F", "t.+HZs]5", "G?vo=m95", "b8PA&Jt5", "mGP&&Sb5", "wC1&DHt5", ";CJsH^]5", "z?HjN+U5", "g8FzMm]5", "&[Js3H)u", "y00&6", "l.vo", "R.+j/", "8@g&l", "zI>Cv:%5", "13cB6", "t.+HYnb5", "h.2sZs]5", "G?+HiS:5", "&@9H]", "g8C&*4K5", "&BCAlJ7", "g8C&6S=5", "G?P&is@u", "z?f&TmI5", "l[Js3H7", "0j@%R=SN", "Y6q~", "hbK|UgLA=S,#gXcg", "@?k~ngs6]8[IjxRy", "A?L04ygA>~=71X]g", "hsH4WzJ68n{DIXT]", "=SC4K(85}#WWu0A", "(WDYYk@x", "2e91NR);", "E]UEYnT;", 'F%"o<', "E]UEL*,?", "D_9I!", "D+VyMmpUM=6g4m#Wy.y*", "m~4*N}C$;}yn:|cYRRlh", "r2C];J[J)^ejiW]UH}nX", "fa.OC&{`DcJm21Iw302Q", "D}xs", "2R^h", "W.!X", "[|^h", 'H"`kF', "NuLX", "4ZJs", "23fA", "}.9HS^85", "u~!o%y$5", "=Zws^^Z5", "fB{A", "(8cB", ";@C&(+U5", "1j{A", "=@{&ns95", "@[c*@mK5", "D;]om^]5", ">Uw2Tm7", "5gcqBPGu", 'Rlbu,Q6=legYN2**>f~Tbb%"6oxUXs0', "4UeY]7tnn*1", "+{V)UZ@:", 'Rd6["[c:', "+{:[<ba:", "#h:/2oWQ", "t,:T", "aln@!qsD", "&ci]yJ9", "BjVDS?NQ", "lZ:/U=$Q", "8,cTg[e", "(2&,#yoJ", "?cYXM", "4CJsH^]5", "=@{&fHL5"]), sd(vd = function(...dd) {
      sd(dd[yd[13]] = yd[1], dd[yd[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], dd[yd[14]] = yd[20], dd[-yd[15]] = []);
      try {
        sd(dd[yd[14]] = Object, dd[-yd[15]][yd[27]]("".__proto__.constructor.name))
      } catch (hd) {}
      dd: for (dd[yd[16]] = yd[1]; dd[yd[16]] < dd[yd[17]][yd[13]]; dd[yd[16]]++) try {
        for (dd[yd[14]] = dd[yd[17]][dd[yd[16]]](), dd[-yd[18]] = yd[1]; dd[-yd[18]] < dd[-yd[15]][yd[13]]; dd[-yd[18]]++)
          if (typeof dd[yd[14]][dd[-yd[15]][dd[-yd[18]]]] === yd[19]) continue dd;
        return dd[yd[14]]
      } catch (hd) {}
      return dd[yd[14]] || this
    }() || {}, Qd = vd.TextDecoder, td = vd.Uint8Array, od = vd.CQ, Nd = vd.String || String, qd = vd.Array || Array, Hd = function(...dd) {
      return sd(dd[yd[13]] = yd[1], dd[yd[5]] = new qd(yd[47]), dd[yd[2]] = Nd[yd[25]] || Nd.fromCharCode, dd[yd[21]] = []),
        function(...Od) {
          for (sd(Od[yd[13]] = yd[2], Od[yd[2]] = yd[20], Od[-yd[22]] = yd[20], Od[yd[16]] = Od[yd[1]][yd[13]], dd[yd[21]][yd[13]] = yd[1]), Od[yd[10]] = yd[1]; Od[yd[10]] < Od[yd[16]];) sd(Od[-yd[22]] = Od[yd[1]][Od[yd[10]]++], Od[-yd[22]] <= yd[46] ? Od[yd[2]] = Od[-yd[22]] : Od[-yd[22]] <= 223 ? Od[yd[2]] = (Od[-yd[22]] & yd[89]) << yd[24] | Od[yd[1]][Od[yd[10]]++] & yd[23] : Od[-yd[22]] <= 239 ? Od[yd[2]] = (Od[-yd[22]] & yd[82]) << yd[26] | (Od[yd[1]][Od[yd[10]]++] & yd[23]) << yd[24] | Od[yd[1]][Od[yd[10]]++] & yd[23] : Nd[yd[25]] ? Od[yd[2]] = (Od[-yd[22]] & yd[7]) << yd[90] | (Od[yd[1]][Od[yd[10]]++] & yd[23]) << yd[26] | (Od[yd[1]][Od[yd[10]]++] & yd[23]) << yd[24] | Od[yd[1]][Od[yd[10]]++] & yd[23] : (Od[yd[2]] = yd[23], Od[yd[10]] += yd[16]), dd[yd[21]][yd[27]](dd[yd[5]][Od[yd[2]]] || (dd[yd[5]][Od[yd[2]]] = dd[yd[2]](Od[yd[2]]))));
          return dd[yd[21]].join("")
        }
    }());
    const gd = Fd()[bd(yd[39])](),
      wd = Fd()[bd(yd[39])](),
      Ed = Fd()[bd(yd[39])](),
      Jd = Fd()[bd(yd[39])](),
      Ud = Fd()[bd(yd[39])](),
      xd = Fd()[bd(yd[39])](),
      Bd = Fd()[bd(yd[39])](),
      Sd = (...dd) => {
        function Od(...dd) {
          return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
            for (sd(dd[yd[13]] = yd[2], dd[yd[40]] = 'AsDqnKLOGfjiZdEBTbWFcUCgXRHQSaYlNVtIPkmJ47>huo}!e|r{_2*M?]90#=@[15z6/+vx^yw~8)3&:`.%($p,";<', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[42]] = yd[1], dd[yd[33]] = yd[1], dd[yd[41]] = -yd[2]), dd[yd[29]] = yd[1]; dd[yd[29]] < dd[yd[16]]; dd[yd[29]]++)
              if (dd[yd[6]] = dd[yd[40]].indexOf(dd[yd[0]][dd[yd[29]]]), dd[yd[6]] !== -yd[2])
                if (dd[yd[41]] < yd[1]) dd[yd[41]] = dd[yd[6]];
                else {
                  sd(dd[yd[41]] += dd[yd[6]] * yd[31], dd[yd[42]] |= dd[yd[41]] << dd[yd[33]], dd[yd[33]] += (dd[yd[41]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                  do {
                    sd(dd[yd[10]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[33]] -= yd[11])
                  } while (dd[yd[33]] > yd[7]);
                  dd[yd[41]] = -yd[2]
                } return dd[yd[41]] > -yd[2] && dd[yd[10]].push((dd[yd[42]] | dd[yd[41]] << dd[yd[33]]) & yd[12]), Td(dd[yd[10]])
          }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
        }
        dd[yd[13]] = yd[16];
        const md = xd;
        return Fd()[bd(111) + bd(yd[68])](md, dd[yd[28]]), Fd()[Od(113)](dd[yd[1]], md, Fd()[Od(114)](md, dd[yd[2]]))
      };

    function sd() {
      sd = function() {}
    }
    Xd = (...dd) => {
      function Od(...dd) {
        return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
          for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = '7u50~RFWABo#ZVh.Kdt/9va}L681]Yl2&MUg=;be?Tp@NG%($q:CO!Iz`[rf3<D_cEkP+4wJx*j)sHSXm^y{|n,"Qi>', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[14]] = dd[yd[28]].length, dd[yd[10]] = [], dd[yd[42]] = yd[1], dd[yd[24]] = yd[1], dd[-yd[44]] = -yd[2]), dd[yd[29]] = yd[1]; dd[yd[29]] < dd[yd[14]]; dd[yd[29]]++)
            if (dd[-yd[43]] = dd[yd[5]].indexOf(dd[yd[28]][dd[yd[29]]]), dd[-yd[43]] !== -yd[2])
              if (dd[-yd[44]] < yd[1]) dd[-yd[44]] = dd[-yd[43]];
              else {
                sd(dd[-yd[44]] += dd[-yd[43]] * yd[31], dd[yd[42]] |= dd[-yd[44]] << dd[yd[24]], dd[yd[24]] += (dd[-yd[44]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                do {
                  sd(dd[yd[10]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[24]] -= yd[11])
                } while (dd[yd[24]] > yd[7]);
                dd[-yd[44]] = -yd[2]
              } return dd[-yd[44]] > -yd[2] && dd[yd[10]].push((dd[yd[42]] | dd[-yd[44]] << dd[yd[24]]) & yd[12]), Td(dd[yd[10]])
        }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
      }
      dd[yd[13]] = yd[11];
      const md = dd[yd[1]][Od(yd[45])][Od(yd[3]) + Od(117) + Od(118)](dd[yd[2]]);
      dd[yd[11]] = dd[yd[1]][Od(yd[45])][Od(119) + Od(120) + Od(121) + "s"](md);
      const Wd = dd[yd[11]] === yd[49] ? dd[yd[1]][Od(yd[45])][Od(yd[50]) + Od(yd[51]) + Od(yd[52]) + Od(yd[53])](dd[yd[2]], Od(yd[48]) + Od(yd[46]) + Od(yd[47]) + yd[8]) : dd[yd[11]][Od(yd[48]) + Od(yd[46]) + Od(yd[47]) + yd[8]],
        Xd = dd[yd[11]] === yd[49] ? dd[yd[1]][Od(yd[45])][Od(yd[50]) + Od(yd[51]) + Od(yd[52]) + Od(yd[53])](dd[yd[2]], Od(yd[54]) + Od(yd[55]) + Od(yd[56])) : dd[yd[11]][Od(yd[54]) + Od(yd[55]) + Od(yd[56])];
      sd(Fd()[Od(132)](gd, yd[1], yd[1], dd[yd[42]]), Fd().Hy(gd, gd, Fd()[Od(133)], dd[yd[16]].heading), Fd()[Od(134)](Bd, dd[yd[38]].Gy), Bd[yd[2]] = yd[1]);
      const vd = dd[yd[28]][Od(135) + Od(136)]();
      if (sd(dd[yd[11]] = dd[yd[1]][Od(yd[45])][Od(137) + Od(138) + Od(139) + Od(140)](md), dd[yd[0]] = dd[yd[11]] === yd[49] ? dd[yd[1]][Od(yd[45])][Od(yd[50]) + Od(yd[51]) + Od(yd[52]) + Od(yd[53])](dd[yd[2]], Od(yd[57]) + Od(yd[58])) : dd[yd[11]][Od(yd[57]) + Od(yd[58])]), !vd && Fd()[yd[99]](Bd) && (dd[yd[11]] === yd[49] ? dd[yd[1]][Od(yd[45])][Od(yd[50]) + Od(yd[51]) + Od(yd[52]) + Od(yd[53])](dd[yd[2]], Od(yd[59]) + Od(yd[60]) + Od(yd[61]) + Od(yd[62])) : dd[yd[11]][Od(yd[59]) + Od(yd[60]) + Od(yd[61]) + Od(yd[62])])) {
        function qd(...dd) {
          for (sd(dd[yd[13]] = yd[2], dd[-yd[65]] = 'lN<Kuy+*shXeZ@gR#S81v!92FC|W/4bDH,Y7on)zU$6.iP&[m;w~>L]5_=rx}`IB^M{tjk?:("3J%0QEAGOVpTcqdaf', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[64]] = dd[yd[28]].length, dd[yd[10]] = [], dd[yd[8]] = yd[1], dd[yd[67]] = yd[1], dd[yd[7]] = -yd[2]), dd[yd[63]] = yd[1]; dd[yd[63]] < dd[yd[64]]; dd[yd[63]]++)
            if (dd[yd[66]] = dd[-yd[65]].indexOf(dd[yd[28]][dd[yd[63]]]), dd[yd[66]] !== -yd[2])
              if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[66]];
              else {
                sd(dd[yd[7]] += dd[yd[66]] * yd[31], dd[yd[8]] |= dd[yd[7]] << dd[yd[67]], dd[yd[67]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                do {
                  sd(dd[yd[10]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[yd[67]] -= yd[11])
                } while (dd[yd[67]] > yd[7]);
                dd[yd[7]] = -yd[2]
              } return dd[yd[7]] > -yd[2] && dd[yd[10]].push((dd[yd[8]] | dd[yd[7]] << dd[yd[67]]) & yd[12]), Td(dd[yd[10]])
        }

        function Hd(...dd) {
          return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = qd(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
        }

        function bd(...dd) {
          sd(dd[yd[13]] = yd[1], dd[yd[68]] = function(...dd) {
            function Od(...dd) {
              return dd[yd[13]] = yd[28], Rd(Wd(Xd(dd[yd[1]]), Xd(dd[yd[2]])))
            }

            function md(...dd) {
              return dd[yd[13]] = yd[16],
                function(...dd) {
                  var Od, md, Wd, Fd;
                  for (sd(dd[yd[13]] = yd[28], dd[yd[5]] = dd[yd[2]].length, dd[yd[16]] = Array()), dd[yd[38]] = Array(Math.ceil(dd[yd[1]].length / yd[28])), Od = yd[1]; Od < dd[yd[38]].length; Od++) dd[yd[38]][Od] = dd[yd[1]].charCodeAt(Od * yd[28]) << yd[11] | dd[yd[1]].charCodeAt(Od * yd[28] + yd[2]);
                  for (; dd[yd[38]].length > yd[1];) {
                    for (sd(Fd = Array(), Wd = yd[1]), Od = yd[1]; Od < dd[yd[38]].length; Od++) sd(Wd = (Wd << yd[73]) + dd[yd[38]][Od], md = Math.floor(Wd / dd[yd[5]]), Wd -= md * dd[yd[5]]), (Fd.length > yd[1] || md > yd[1]) && (Fd[Fd.length] = md);
                    sd(dd[yd[16]][dd[yd[16]].length] = Wd, dd[yd[38]] = Fd)
                  }
                  for (dd[yd[86]] = "", Od = dd[yd[16]].length - yd[2]; Od >= yd[1]; Od--) dd[yd[86]] += dd[yd[2]].charAt(dd[yd[16]][Od]);
                  for (dd[yd[24]] = Math.ceil(dd[yd[1]].length * yd[11] / (Math.log(dd[yd[2]].length) / Math.log(yd[28]))), Od = dd[yd[86]].length; Od < dd[yd[24]]; Od++) dd[yd[86]] = dd[yd[2]][yd[1]] + dd[yd[86]];
                  return dd[yd[86]]
                }(Wd(Xd(dd[yd[1]]), Xd(dd[yd[2]])), dd[yd[28]])
            }

            function Wd(...dd) {
              dd[yd[13]] = yd[28], dd[yd[28]] = vd(dd[yd[1]]), dd[yd[28]].length > yd[73] && (dd[yd[28]] = Ed(dd[yd[28]], dd[yd[1]].length * yd[11]));
              var Od = Array(yd[73]),
                md = Array(yd[73]);
              for (dd[yd[16]] = yd[1]; dd[yd[16]] < yd[73]; dd[yd[16]]++) sd(Od[dd[yd[16]]] = 909522486 ^ dd[yd[28]][dd[yd[16]]], md[dd[yd[16]]] = 1549556828 ^ dd[yd[28]][dd[yd[16]]]);
              return dd[yd[38]] = Ed(Od.concat(vd(dd[yd[2]])), yd[74] + dd[yd[2]].length * yd[11]), Qd(Ed(md.concat(dd[yd[38]]), pd(function(...dd) {
                return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
                  for (sd(dd[yd[13]] = yd[2], dd[yd[72]] = 'OxpHPmUa$ADde@)]sB>J|KR3TIl"Xbgo6&.N4wyk/#%+M;Gj{VZYq?`h:c5fL8rFvWt2~=z9(nE71^iu!_0SC,*Q[}<', dd[yd[28]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[28]].length, dd[yd[38]] = [], dd[yd[42]] = yd[1], dd[yd[24]] = yd[1], dd[yd[7]] = -yd[2]), dd[yd[29]] = yd[1]; dd[yd[29]] < dd[yd[16]]; dd[yd[29]]++)
                    if (dd[yd[4]] = dd[yd[72]].indexOf(dd[yd[28]][dd[yd[29]]]), dd[yd[4]] !== -yd[2])
                      if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[4]];
                      else {
                        sd(dd[yd[7]] += dd[yd[4]] * yd[31], dd[yd[42]] |= dd[yd[7]] << dd[yd[24]], dd[yd[24]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                        do {
                          sd(dd[yd[38]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[24]] -= yd[11])
                        } while (dd[yd[24]] > yd[7]);
                        dd[yd[7]] = -yd[2]
                      } return dd[yd[7]] > -yd[2] && dd[yd[38]].push((dd[yd[42]] | dd[yd[7]] << dd[yd[24]]) & yd[12]), Td(dd[yd[38]])
                }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
              }(154), yd[74], 256)))
            }

            function Fd(...Od) {
              function Wd(...dd) {
                return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
                  for (sd(dd[yd[13]] = yd[2], dd[yd[2]] = '3;?`0@#z>"+%_5,)8<yx}$7.~!6Ed/lD2PLVRqpfUTQZinkCeSXogIMcWtmOJBhjN]:4*=w1sv&GAKrYuH{(9^[|abF', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[-yd[75]] = dd[yd[0]].length, dd[yd[38]] = [], dd[-yd[76]] = yd[1], dd[yd[77]] = yd[1], dd[-yd[28]] = -yd[2]), dd[yd[29]] = yd[1]; dd[yd[29]] < dd[-yd[75]]; dd[yd[29]]++)
                    if (dd[yd[4]] = dd[yd[2]].indexOf(dd[yd[0]][dd[yd[29]]]), dd[yd[4]] !== -yd[2])
                      if (dd[-yd[28]] < yd[1]) dd[-yd[28]] = dd[yd[4]];
                      else {
                        sd(dd[-yd[28]] += dd[yd[4]] * yd[31], dd[-yd[76]] |= dd[-yd[28]] << dd[yd[77]], dd[yd[77]] += (dd[-yd[28]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                        do {
                          sd(dd[yd[38]].push(dd[-yd[76]] & yd[12]), dd[-yd[76]] >>= yd[11], dd[yd[77]] -= yd[11])
                        } while (dd[yd[77]] > yd[7]);
                        dd[-yd[28]] = -yd[2]
                      } return dd[-yd[28]] > -yd[2] && dd[yd[38]].push((dd[-yd[76]] | dd[-yd[28]] << dd[yd[77]]) & yd[12]), Td(dd[yd[38]])
                }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
              }
              Od[yd[13]] = yd[2];
              try {
                dd[yd[78]]
              } catch (md) {
                dd[yd[78]] = yd[1]
              }
              for (sd(Od[-yd[81]] = dd[yd[78]] ? Wd(yd[79]) + Wd(156) + Wd(157) : Wd(yd[79]) + Wd(158) + Wd(159), Od[yd[0]] = "", Od[-yd[80]] = yd[20]), Od[yd[10]] = yd[1]; Od[yd[10]] < Od[yd[1]].length; Od[yd[10]]++) sd(Od[-yd[80]] = Od[yd[1]].charCodeAt(Od[yd[10]]), Od[yd[0]] += Od[-yd[81]].charAt(Od[-yd[80]] >>> yd[38] & yd[82]) + Od[-yd[81]].charAt(Od[-yd[80]] & yd[82]));
              return Od[yd[0]]
            }

            function Rd(...Od) {
              Od[yd[13]] = yd[2];
              try {
                dd[-yd[85]]
              } catch (md) {
                dd[-yd[85]] = ""
              }
              for (sd(Od[yd[2]] = Hd(160) + Hd(161) + Hd(162) + function(...dd) {
                  return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
                    for (sd(dd[yd[13]] = yd[2], dd[yd[2]] = 'D}MyQLukCc@v`2lFh|HwjVP5^RG7<p{0tY&_,Br9Kqs$[T8;E]Xx3:nO~o"6S#.Ud!b*aI4WZ+mfJ=/Ni1(A?e)%>zg', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[83]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[77]] = yd[1], dd[yd[24]] = yd[1], dd[-yd[84]] = -yd[2]), dd[yd[29]] = yd[1]; dd[yd[29]] < dd[yd[83]]; dd[yd[29]]++)
                      if (dd[yd[21]] = dd[yd[2]].indexOf(dd[yd[0]][dd[yd[29]]]), dd[yd[21]] !== -yd[2])
                        if (dd[-yd[84]] < yd[1]) dd[-yd[84]] = dd[yd[21]];
                        else {
                          sd(dd[-yd[84]] += dd[yd[21]] * yd[31], dd[yd[77]] |= dd[-yd[84]] << dd[yd[24]], dd[yd[24]] += (dd[-yd[84]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                          do {
                            sd(dd[yd[10]].push(dd[yd[77]] & yd[12]), dd[yd[77]] >>= yd[11], dd[yd[24]] -= yd[11])
                          } while (dd[yd[24]] > yd[7]);
                          dd[-yd[84]] = -yd[2]
                        } return dd[-yd[84]] > -yd[2] && dd[yd[10]].push((dd[yd[77]] | dd[-yd[84]] << dd[yd[24]]) & yd[12]), Td(dd[yd[10]])
                  }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
                }(163), Od[yd[0]] = "", Od[yd[16]] = Od[yd[1]].length), Od[yd[38]] = yd[1]; Od[yd[38]] < Od[yd[16]]; Od[yd[38]] += yd[16])
                for (Od[yd[42]] = Od[yd[1]].charCodeAt(Od[yd[38]]) << yd[73] | (Od[yd[38]] + yd[2] < Od[yd[16]] ? Od[yd[1]].charCodeAt(Od[yd[38]] + yd[2]) << yd[11] : yd[1]) | (Od[yd[38]] + yd[28] < Od[yd[16]] ? Od[yd[1]].charCodeAt(Od[yd[38]] + yd[28]) : yd[1]), Od[-yd[23]] = yd[1]; Od[-yd[23]] < yd[38]; Od[-yd[23]]++) Od[yd[38]] * yd[11] + Od[-yd[23]] * yd[24] > Od[yd[1]].length * yd[11] ? Od[yd[0]] += dd[-yd[85]] : Od[yd[0]] += Od[yd[2]].charAt(Od[yd[42]] >>> yd[24] * (yd[16] - Od[-yd[23]]) & yd[23]);
              return Od[yd[0]]
            }

            function Xd(...dd) {
              var Od, md;
              for (sd(dd[yd[13]] = yd[2], dd[yd[87]] = "", dd[yd[28]] = -yd[2]); ++dd[yd[28]] < dd[yd[1]].length;) sd(Od = dd[yd[1]].charCodeAt(dd[yd[28]]), md = dd[yd[28]] + yd[2] < dd[yd[1]].length ? dd[yd[1]].charCodeAt(dd[yd[28]] + yd[2]) : yd[1]), 55296 <= Od && Od <= 56319 && 56320 <= md && md <= 57343 && sd(Od = 65536 + ((Od & yd[88]) << yd[94]) + (md & yd[88]), dd[yd[28]]++), Od <= yd[46] ? dd[yd[87]] += String.fromCharCode(Od) : Od <= 2047 ? dd[yd[87]] += String.fromCharCode(yd[40] | Od >>> yd[24] & yd[89], yd[47] | Od & yd[23]) : Od <= yd[97] ? dd[yd[87]] += String.fromCharCode(224 | Od >>> yd[26] & yd[82], yd[47] | Od >>> yd[24] & yd[23], yd[47] | Od & yd[23]) : Od <= 2097151 && (dd[yd[87]] += String.fromCharCode(240 | Od >>> yd[90] & yd[7], yd[47] | Od >>> yd[26] & yd[23], yd[47] | Od >>> yd[24] & yd[23], yd[47] | Od & yd[23]));
              return dd[yd[87]]
            }

            function vd(...dd) {
              for (sd(dd[yd[13]] = yd[2], dd[-yd[4]] = Array(dd[yd[1]].length >> yd[28])), dd[-yd[91]] = yd[1]; dd[-yd[91]] < dd[-yd[4]].length; dd[-yd[91]]++) dd[-yd[4]][dd[-yd[91]]] = yd[1];
              for (dd[-yd[91]] = yd[1]; dd[-yd[91]] < dd[yd[1]].length * yd[11]; dd[-yd[91]] += yd[11]) dd[-yd[4]][dd[-yd[91]] >> yd[42]] |= (dd[yd[1]].charCodeAt(dd[-yd[91]] / yd[11]) & yd[12]) << yd[93] - dd[-yd[91]] % yd[92];
              return dd[-yd[4]]
            }

            function Qd(...dd) {
              for (sd(dd[yd[13]] = yd[2], dd[yd[2]] = ""), dd[yd[28]] = yd[1]; dd[yd[28]] < dd[yd[1]].length * yd[92]; dd[yd[28]] += yd[11]) dd[yd[2]] += String.fromCharCode(dd[yd[1]][dd[yd[28]] >> yd[42]] >>> yd[93] - dd[yd[28]] % yd[92] & yd[12]);
              return dd[yd[2]]
            }

            function td(...dd) {
              return dd[yd[13]] = yd[28], dd[yd[1]] >>> dd[yd[2]] | dd[yd[1]] << yd[92] - dd[yd[2]]
            }

            function od(...dd) {
              return dd[yd[13]] = yd[28], dd[yd[1]] >>> dd[yd[2]]
            }

            function Nd(...dd) {
              return dd[yd[13]] = yd[16], dd[yd[1]] & dd[yd[2]] ^ ~dd[yd[1]] & dd[yd[28]]
            }

            function qd(...dd) {
              return dd[yd[13]] = yd[16], dd[yd[1]] & dd[yd[2]] ^ dd[yd[1]] & dd[yd[28]] ^ dd[yd[2]] & dd[yd[28]]
            }

            function bd(...dd) {
              return dd[yd[13]] = yd[2], td(dd[yd[1]], yd[28]) ^ td(dd[yd[1]], yd[36]) ^ td(dd[yd[1]], 22)
            }

            function Yd(...dd) {
              return dd[yd[13]] = yd[2], td(dd[yd[1]], yd[24]) ^ td(dd[yd[1]], 11) ^ td(dd[yd[1]], 25)
            }

            function gd(...dd) {
              return dd[yd[13]] = yd[2], td(dd[yd[1]], yd[7]) ^ td(dd[yd[1]], yd[90]) ^ od(dd[yd[1]], yd[16])
            }

            function wd(...dd) {
              return dd[yd[13]] = yd[2], td(dd[yd[1]], 17) ^ td(dd[yd[1]], yd[95]) ^ od(dd[yd[1]], yd[94])
            }

            function Ed(...Od) {
              var md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Hd;
              for (sd(Od[yd[13]] = yd[28], Od[yd[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Od[yd[0]] = new Array(yd[96])), sd(Od[yd[1]][Od[yd[2]] >> yd[42]] |= yd[47] << yd[93] - Od[yd[2]] % yd[92], Od[yd[1]][(Od[yd[2]] + yd[96] >> yd[4] << yd[38]) + yd[82]] = Od[yd[2]]), Qd = yd[1]; Qd < Od[yd[1]].length; Qd += yd[73]) {
                for (sd(md = Od[yd[5]][yd[1]], Wd = Od[yd[5]][yd[2]], Fd = Od[yd[5]][yd[28]], Rd = Od[yd[5]][yd[16]], Xd = Od[yd[5]][yd[38]], Kd = Od[yd[5]][yd[42]], hd = Od[yd[5]][yd[24]], vd = Od[yd[5]][yd[7]]), td = yd[1]; td < yd[96]; td++) sd(Od[yd[0]][td] = td < yd[73] ? Od[yd[1]][td + Qd] : Jd(Jd(Jd(wd(Od[yd[0]][td - yd[28]]), Od[yd[0]][td - yd[7]]), gd(Od[yd[0]][td - yd[82]])), Od[yd[0]][td - yd[73]]), od = Jd(Jd(Jd(Jd(vd, Yd(Xd)), Nd(Xd, Kd, hd)), dd[yd[79]][td]), Od[yd[0]][td]), Hd = Jd(bd(md), qd(md, Wd, Fd)), vd = hd, hd = Kd, Kd = Xd, Xd = Jd(Rd, od), Rd = Fd, Fd = Wd, Wd = md, md = Jd(od, Hd));
                sd(Od[yd[5]][yd[1]] = Jd(md, Od[yd[5]][yd[1]]), Od[yd[5]][yd[2]] = Jd(Wd, Od[yd[5]][yd[2]]), Od[yd[5]][yd[28]] = Jd(Fd, Od[yd[5]][yd[28]]), Od[yd[5]][yd[16]] = Jd(Rd, Od[yd[5]][yd[16]]), Od[yd[5]][yd[38]] = Jd(Xd, Od[yd[5]][yd[38]]), Od[yd[5]][yd[42]] = Jd(Kd, Od[yd[5]][yd[42]]), Od[yd[5]][yd[24]] = Jd(hd, Od[yd[5]][yd[24]]), Od[yd[5]][yd[7]] = Jd(vd, Od[yd[5]][yd[7]]))
              }
              return Od[yd[5]]
            }

            function Jd(...dd) {
              return sd(dd[yd[13]] = yd[28], dd[yd[28]] = (dd[yd[1]] & yd[97]) + (dd[yd[2]] & yd[97]), dd[-yd[98]] = (dd[yd[1]] >> yd[73]) + (dd[yd[2]] >> yd[73]) + (dd[yd[28]] >> yd[73])), dd[-yd[98]] << yd[73] | dd[yd[28]] & yd[97]
            }
            return sd(dd[yd[13]] = yd[1], dd[yd[78]] = yd[1], dd[-yd[85]] = ""), dd[yd[79]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...dd) {
                return dd[yd[13]] = yd[2], Fd(function(...dd) {
                  return dd[yd[13]] = yd[2], Qd(Ed(vd(dd[yd[1]]), dd[yd[1]].length * yd[11]))
                }(Xd(dd[yd[1]])))
              },
              b64: Od,
              any: md,
              hex_hmac: function(...dd) {
                return dd[yd[13]] = yd[28], Fd(Wd(Xd(dd[yd[1]]), Xd(dd[yd[2]])))
              },
              b64_hmac: Od,
              any_hmac: md
            }
          }(), console.log(dd[yd[68]]))
        }
        Hd(yd[87]) + "D" in Yd && bd(), sd(Sd(wd, gd, Bd), Sd(Ed, Bd, gd), Fd()[Hd(164)](Jd, Bd, Ed));
        const xd = Fd()[Hd(165)](Bd),
          ud = Fd()[Hd(166)](gd, Bd) / dd[yd[42]] / xd,
          Vd = Math[Hd(yd[100])](ud, yd[1]) + yd[2];
        if (dd[yd[42]] * dd[yd[42]] < Fd()[yd[99]](Ed)) {
          function Ad(...dd) {
            for (sd(dd[yd[13]] = yd[2], dd[-yd[43]] = ')/y8#`=59Bkocj("!xsDAmXH7O1bF&PIMKpwq.a0*WnZLE6>Qg4;l2$CuG+@f3i<S|hetNTzJY}]Rr%V~U,d_:[^?{v', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[42]] = yd[1], dd[yd[24]] = yd[1], dd[yd[7]] = -yd[2]), dd[yd[11]] = yd[1]; dd[yd[11]] < dd[yd[16]]; dd[yd[11]]++)
              if (dd[yd[4]] = dd[-yd[43]].indexOf(dd[yd[0]][dd[yd[11]]]), dd[yd[4]] !== -yd[2])
                if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[4]];
                else {
                  sd(dd[yd[7]] += dd[yd[4]] * yd[31], dd[yd[42]] |= dd[yd[7]] << dd[yd[24]], dd[yd[24]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                  do {
                    sd(dd[yd[10]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[24]] -= yd[11])
                  } while (dd[yd[24]] > yd[7]);
                  dd[yd[7]] = -yd[2]
                } return dd[yd[7]] > -yd[2] && dd[yd[10]].push((dd[yd[42]] | dd[yd[7]] << dd[yd[24]]) & yd[12]), Td(dd[yd[10]])
          }

          function rd(...dd) {
            return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = Ad(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
          }
          Fd()[rd(168)](gd, gd, Ed, Vd)
        }
        sd(dd[yd[0]] = (0, Rd.w)(dd[yd[0]], 1, Math[Hd(yd[100])](yd[2], Math[Hd(169)](yd[1], -ud, yd[2] - xd / dd[yd[42]]))), Fd()[Hd(170)](gd, gd, Jd))
      }
      const Qd = Ud;
      sd(Fd()[Od(171)](Qd, gd, Bd), Qd[yd[2]] = yd[1], dd[yd[94]] = Fd()[Od(172)](Qd)), vd || (dd[yd[94]] *= dd[yd[0]]);
      const td = dd[yd[24]][Od(173) + Od(174) + Od(175)],
        od = td ? Math[Od(176)](td, dd[yd[94]]) : dd[yd[94]];
      Fd()[Od(177) + Od(178)](Qd, Qd);
      const Nd = dd[yd[7]] !== yd[49] && void 0 !== dd[yd[7]] ? dd[yd[7]] : dd[yd[24]][Od(179) + Od(180) + Od(yd[70]) + Od(yd[85])];
      if (od > yd[1]) {
        function Gd(...dd) {
          for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = 'eJQ]<Rk(T,D~4VajLi7m$bYrFMZ1HBgX/%Sp#ENfW_!hAx2GCodcIlOzwqUPs3}t80K5@|v[;.)6{=?*&9^:"y+>`un', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[14]] = dd[yd[0]].length, dd[yd[103]] = [], dd[yd[8]] = yd[1], dd[yd[102]] = yd[1], dd[yd[41]] = -yd[2]), dd[-yd[101]] = yd[1]; dd[-yd[101]] < dd[yd[14]]; dd[-yd[101]]++)
            if (dd[yd[48]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[101]]]), dd[yd[48]] !== -yd[2])
              if (dd[yd[41]] < yd[1]) dd[yd[41]] = dd[yd[48]];
              else {
                sd(dd[yd[41]] += dd[yd[48]] * yd[31], dd[yd[8]] |= dd[yd[41]] << dd[yd[102]], dd[yd[102]] += (dd[yd[41]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                do {
                  sd(dd[yd[103]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[yd[102]] -= yd[11])
                } while (dd[yd[102]] > yd[7]);
                dd[yd[41]] = -yd[2]
              } return dd[yd[41]] > -yd[2] && dd[yd[103]].push((dd[yd[8]] | dd[yd[41]] << dd[yd[102]]) & yd[12]), Td(dd[yd[103]])
        }

        function nd(...dd) {
          return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = Gd(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
        }
        Od(183) in Yd && (module.exports = async (dd = (...dd) => {
          throw dd[yd[13]] = yd[1], new Error(function(...dd) {
            if (dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19]) return Kd[dd[yd[1]]] = function(...dd) {
              for (sd(dd[yd[13]] = yd[2], dd[yd[52]] = '8IAG2R<={T[)09ji~e_x|.w7(+yV?;>,B}$PdND*H4Xl@vLuJsCUYa]`MfS1E5g!hon#cOtQZrp6mFbKq/%k:&"zW3^', dd[yd[104]] = "" + (dd[yd[1]] || ""), dd[yd[16]] = dd[yd[104]].length, dd[-yd[106]] = [], dd[yd[42]] = yd[1], dd[yd[33]] = yd[1], dd[yd[105]] = -yd[2]), dd[yd[29]] = yd[1]; dd[yd[29]] < dd[yd[16]]; dd[yd[29]]++)
                if (dd[yd[6]] = dd[yd[52]].indexOf(dd[yd[104]][dd[yd[29]]]), dd[yd[6]] !== -yd[2])
                  if (dd[yd[105]] < yd[1]) dd[yd[105]] = dd[yd[6]];
                  else {
                    sd(dd[yd[105]] += dd[yd[6]] * yd[31], dd[yd[42]] |= dd[yd[105]] << dd[yd[33]], dd[yd[33]] += (dd[yd[105]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                    do {
                      sd(dd[-yd[106]].push(dd[yd[42]] & yd[12]), dd[yd[42]] >>= yd[11], dd[yd[33]] -= yd[11])
                    } while (dd[yd[33]] > yd[7]);
                    dd[yd[105]] = -yd[2]
                  } dd[yd[105]] > -yd[2] && dd[-yd[106]].push((dd[yd[42]] | dd[yd[105]] << dd[yd[33]]) & yd[12]);
              return Td(dd[-yd[106]])
            }(hd[dd[yd[1]]]);
            return Kd[dd[yd[1]]]
          }(184))
        }) => {
          const Od = new Set(process.argv.slice(yd[28]));
          if (!Od.has(function(...dd) {
              if (dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19]) return Kd[dd[yd[1]]] = function(dd) {
                var Od, md, Wd, Fd, Rd, Xd, Kd, hd = '/OKPis4qAha<m5%tv9>*xL0pl~+;FG{BYoJVzUI@}]|dHRWg:?!3[n)1T_2uw"`Q,MX&86rj$#(C=DZS7e^fcE.Nkby';
                for (sd(Od = "" + (dd || ""), md = Od.length, Wd = [], Fd = yd[1], Rd = yd[1], Xd = -yd[2]), Kd = yd[1]; Kd < md; Kd++) {
                  var vd = hd.indexOf(Od[Kd]);
                  if (vd !== -yd[2])
                    if (Xd < yd[1]) Xd = vd;
                    else {
                      sd(Xd += vd * yd[31], Fd |= Xd << Rd, Rd += (Xd & yd[34]) > yd[35] ? yd[36] : yd[37]);
                      do {
                        sd(Wd.push(Fd & yd[12]), Fd >>= yd[11], Rd -= yd[11])
                      } while (Rd > yd[7]);
                      Xd = -yd[2]
                    }
                }
                Xd > -yd[2] && Wd.push((Fd | Xd << Rd) & yd[12]);
                return Td(Wd)
              }(hd[dd[yd[1]]]);
              return Kd[dd[yd[1]]]
            }(185))) {
            if (Od.size !== yd[2]) return yd[107];
            if (!Od.has("-v")) return yd[107]
          }
          return await (async () => {
            function Od(...dd) {
              return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = function(...dd) {
                for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = 'v,:d6PA?W0)VaGgBY|rHc]{2fCQ`DX(E5Fliph@#1%Nn;m$kOU^uot4S=_y!"~>&qe3*Zb9IMz/LK[+}J7wR<.sTx8j', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[-yd[109]] = dd[yd[0]].length, dd[yd[111]] = [], dd[yd[8]] = yd[1], dd[yd[46]] = yd[1], dd[yd[45]] = -yd[2]), dd[-yd[108]] = yd[1]; dd[-yd[108]] < dd[-yd[109]]; dd[-yd[108]]++)
                  if (dd[yd[110]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[108]]]), dd[yd[110]] !== -yd[2])
                    if (dd[yd[45]] < yd[1]) dd[yd[45]] = dd[yd[110]];
                    else {
                      sd(dd[yd[45]] += dd[yd[110]] * yd[31], dd[yd[8]] |= dd[yd[45]] << dd[yd[46]], dd[yd[46]] += (dd[yd[45]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                      do {
                        sd(dd[yd[111]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[yd[46]] -= yd[11])
                      } while (dd[yd[46]] > yd[7]);
                      dd[yd[45]] = -yd[2]
                    } dd[yd[45]] > -yd[2] && dd[yd[111]].push((dd[yd[8]] | dd[yd[45]] << dd[yd[46]]) & yd[12]);
                return Td(dd[yd[111]])
              }(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
            }
            return void 0 === await dd() ? Od(188) + "l)" : ""
          })(), !0
        });
        let Ld = dd[yd[28]][nd(189) + nd(190)] * Nd;
        if (!vd) {
          function zd(...dd) {
            for (sd(dd[yd[13]] = yd[2], dd[yd[5]] = '9YDPUSZHmr]dA0#RW_[|QL{pt!lwiTo~@v?a"cfB6h.z*x)F1`4n5%s8Nuk=E<&/7>jC(OX$G:3I2Vq}yJ+K;^gMbe,', dd[yd[0]] = "" + (dd[yd[1]] || ""), dd[yd[84]] = dd[yd[0]].length, dd[yd[10]] = [], dd[yd[8]] = yd[1], dd[-yd[64]] = yd[1], dd[yd[7]] = -yd[2]), dd[-yd[112]] = yd[1]; dd[-yd[112]] < dd[yd[84]]; dd[-yd[112]]++)
              if (dd[yd[4]] = dd[yd[5]].indexOf(dd[yd[0]][dd[-yd[112]]]), dd[yd[4]] !== -yd[2])
                if (dd[yd[7]] < yd[1]) dd[yd[7]] = dd[yd[4]];
                else {
                  sd(dd[yd[7]] += dd[yd[4]] * yd[31], dd[yd[8]] |= dd[yd[7]] << dd[-yd[64]], dd[-yd[64]] += (dd[yd[7]] & yd[34]) > yd[35] ? yd[36] : yd[37]);
                  do {
                    sd(dd[yd[10]].push(dd[yd[8]] & yd[12]), dd[yd[8]] >>= yd[11], dd[-yd[64]] -= yd[11])
                  } while (dd[-yd[64]] > yd[7]);
                  dd[yd[7]] = -yd[2]
                } return dd[yd[7]] > -yd[2] && dd[yd[10]].push((dd[yd[8]] | dd[yd[7]] << dd[-yd[64]]) & yd[12]), Td(dd[yd[10]])
          }

          function cd(...dd) {
            return dd[yd[13]] = yd[2], typeof Kd[dd[yd[1]]] === yd[19] ? Kd[dd[yd[1]]] = zd(hd[dd[yd[1]]]) : Kd[dd[yd[1]]]
          }
          Ld *= dd[yd[28]][cd(191) + cd(yd[40])]
        }
        let Pd = dd[yd[28]][nd(yd[44]) + nd(yd[18]) + "ss"] * od;
        od < .3 && (Pd *= od), Ld > Pd && (Ld = Pd), sd(Fd()[nd(195)](Qd, Qd, Ld), dd[yd[38]][nd(196) + nd(197)](Qd))
      }
      dd[yd[38]][Od(198) + yd[113]] = dd[yd[28]][Od(199) + Od(yd[46]) + yd[113]] * (vd ? Wd : Xd)
    }
  },
  39180: (dd, Od, md) => {
    md.d(Od, {
      e: () => hd,
      i: () => Kd
    });
    var Wd = md(39185),
      Fd = md(2057);
    const Rd = 2,
      Xd = 1,
      Kd = {
        fX: 1,
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

    function hd(dd, Od, md, Kd, hd, vd, Qd) {
      if (hd.speed) return (0, Wd.e)(Od, md, Kd, hd, vd, Qd, dd), void(hd.ticksToReachMaxIdleFriction = Rd);
      const td = Kd.isOnGround(),
        od = Od.bloxd.getSyncedClientOptions(Od.bloxd.getPlayerReader(md)),
        Nd = null === od ? Od.bloxd.getClientPredictedOption(md, "groundFrictionScale") : od.groundFrictionScale,
        qd = null === od ? Od.bloxd.getClientPredictedOption(md, "airFrictionScale") : od.airFrictionScale,
        Hd = td ? Nd : qd,
        yd = Math.max(Xd, Hd),
        bd = hd.ticksToReachMaxIdleFriction / Rd,
        Td = (0, Fd.w)(yd, Hd, bd);
      vd.friction = dd.standingFriction * ((null === od ? Od.bloxd.getClientPredictedOption(md, "airMomentumConservation") : od.airMomentumConservation) ? Td : Hd), hd.ticksToReachMaxIdleFriction > 0 && hd.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);