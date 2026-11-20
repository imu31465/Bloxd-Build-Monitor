export const id = 219;
export const ids = [219];
export const modules = {
  37894: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => wz
    });
    var Fz = sz(201),
      Wz = sz(37031);
    const Xz = 1.2,
      Oz = {
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
        wo: .5,
        ztz: !1
      },
      oz = {
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
        wo: .5,
        ztz: !1
      },
      vz = {
        physicsBodyDimensions: {
          width: Fz.d.ZH,
          height: Fz.d.jH
        },
        hitBoxDimensions: {
          width: Fz.d.ZH + .4,
          height: Fz.d.jH + .6
        },
        eyeHeight: Fz.d.jH * Fz.d.playerEyeToHeightRatio,
        rideHeight: Fz.d.jH - .3,
        wo: .5,
        ztz: !1
      },
      Uz = {
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
        wo: .5,
        ztz: !1
      },
      Kz = {
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
        wo: .5,
        ztz: !1
      },
      uz = {
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
        wo: .5,
        ztz: !1
      },
      Nz = {
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
        wo: .5,
        ztz: !1
      },
      bz = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Fz.d.ZH,
            height: Fz.d.jH
          },
          hitBoxDimensions: {
            width: Fz.d.ZH + .4,
            height: Fz.d.jH + .6
          },
          eyeHeight: Fz.d.jH * Fz.d.playerEyeToHeightRatio,
          rideHeight: Fz.d.jH - .1,
          wo: Wz.e.wo,
          ztz: !0
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
        },
        Camel: {
          modelScale: Xz,
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
        },
        "Cave Golem": Oz,
        "Draugr Zombie": {
          ...vz,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": vz,
        "Frost Golem": Oz,
        "Frost Zombie": {
          ...vz,
          defaultPose: "zombie"
        },
        "Frost Skeleton": vz,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Fz.d.ZH,
            height: Fz.d.jH
          },
          hitBoxDimensions: {
            width: Fz.d.ZH + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          wo: .5,
          ztz: !1
        },
        Wolf: Uz,
        Bear: Kz,
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
          wo: .5,
          ztz: !1
        },
        Stag: uz,
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
          wo: .5,
          ztz: !1
        },
        Gorilla: Nz,
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
          wo: .5,
          ztz: !1
        },
        "Draugr Huntress": vz,
        "Magma Golem": Oz,
        "Spirit Golem": Oz,
        "Spirit Wolf": Uz,
        "Spirit Bear": Kz,
        "Spirit Stag": uz,
        "Spirit Gorilla": Nz,
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Fz.d.ZH,
            height: Fz.d.jH
          },
          hitBoxDimensions: {
            width: Fz.d.ZH + .4,
            height: Fz.d.jH + .6
          },
          eyeHeight: Fz.d.jH * Fz.d.playerEyeToHeightRatio,
          rideHeight: Fz.d.jH - .1,
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Fz.d.ZH,
            height: Fz.d.jH
          },
          hitBoxDimensions: {
            width: Fz.d.ZH + .4,
            height: Fz.d.jH + .6
          },
          eyeHeight: Fz.d.jH * Fz.d.playerEyeToHeightRatio,
          rideHeight: Fz.d.jH - .1,
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
        },
        Zombie: {
          ...vz,
          defaultPose: "zombie"
        },
        Skeleton: vz,
        Mummy: {
          ...vz,
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
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
          wo: .5,
          ztz: !1
        },
        "Iron Guardian": oz,
        "Gold Guardian": oz,
        "Diamond Guardian": oz,
        "Moonstone Guardian": oz,
        "Iron Goofy Golem": oz,
        "Gold Goofy Golem": oz,
        "Diamond Goofy Golem": oz,
        "Moonstone Goofy Golem": oz,
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
          wo: .5,
          ztz: !1
        }
      };

    function wz(zz) {
      return bz[zz]
    }
  },
  36453: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    const Fz = {
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
  37039: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(330),
      Wz = sz.n(Fz),
      Xz = sz(1824);
    let Oz;
    var oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz;
    const gz = [34, 0, 1, 126, "c", "a", 88, "g", 59, 225, 221, 8, 255, "length", 2, 136, 63, 12, "undefined", void 0, 4, 3, 6, "fromCodePoint", 7, "push", "h", 166, 244, 91, "e", 8191, 13, 14, 199, 205, 193, 139, 45, "d", 87, 9, 152, "f", 159, 248, "i", 5, 168, 57, 104, 18, 223, "b", 101, 75, 182, 77, 154, 16, 89, 512, 233, 97, 144, 15, 64, 211, 1023, 127, 31, 128, 51, 171, 209, 32, 24, 10, 19, 65535, 165, 110, null, 122, 123, 124, 118, 119, 120, 121, 125, 140, 141, 142, 143, "ht", 214, 158, "s", 148, 145, 82, 112, 111, 72, "on"];

    function Hz(...zz) {
      return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
        for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = 'y21%?<rSz7P|=xw+v_3Van6iq&jAK[~Ll{RBO0Focbd9(CJG!mHM"/N;h@pe,#*f>XW)$IgDt8EQ^TksY}U:Zu`54.]', zz[-gz[0]] = "" + (zz[gz[1]] || ""), zz[gz[4]] = zz[-gz[0]].length, zz[-gz[10]] = [], zz[gz[8]] = gz[1], zz[gz[9]] = gz[1], zz[gz[7]] = -gz[2]), zz[-gz[3]] = gz[1]; zz[-gz[3]] < zz[gz[4]]; zz[-gz[3]]++)
          if (zz[gz[6]] = zz[gz[5]].indexOf(zz[-gz[0]][zz[-gz[3]]]), zz[gz[6]] !== -gz[2])
            if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[gz[6]];
            else {
              Gz(zz[gz[7]] += zz[gz[6]] * gz[29], zz[gz[8]] |= zz[gz[7]] << zz[gz[9]], zz[gz[9]] += (zz[gz[7]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
              do {
                Gz(zz[-gz[10]].push(zz[gz[8]] & gz[12]), zz[gz[8]] >>= gz[11], zz[gz[9]] -= gz[11])
              } while (zz[gz[9]] > gz[24]);
              zz[gz[7]] = -gz[2]
            } return zz[gz[7]] > -gz[2] && zz[-gz[10]].push((zz[gz[8]] | zz[gz[7]] << zz[gz[9]]) & gz[12]), Bz(zz[-gz[10]])
      }(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
    }

    function Bz(...zz) {
      return zz[gz[13]] = gz[2], typeof Kz !== gz[18] && Kz ? (new Kz).decode(new uz(zz[gz[1]])) : typeof Nz !== gz[18] && Nz ? Nz.from(zz[gz[1]]).toString("utf-8") : Dz(zz[gz[1]])
    }

    function Pz(zz, tz, sz) {
      if (zz === function(...zz) {
          return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
            for (Gz(zz[gz[13]] = gz[2], zz[gz[3]] = '*hckBljGMJIDZVnXp1o(S]tCE~YbNxLamO|+76T5H>._uUW=qQfrz#9,/3!"4$`}y%<[^si@FR&0A;gP8?:K{d2wve)', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[14]].length, zz[gz[34]] = [], zz[gz[30]] = gz[1], zz[gz[22]] = gz[1], zz[gz[28]] = -gz[2]), zz[gz[26]] = gz[1]; zz[gz[26]] < zz[gz[21]]; zz[gz[26]]++)
              if (zz[-gz[27]] = zz[gz[3]].indexOf(zz[gz[14]][zz[gz[26]]]), zz[-gz[27]] !== -gz[2])
                if (zz[gz[28]] < gz[1]) zz[gz[28]] = zz[-gz[27]];
                else {
                  Gz(zz[gz[28]] += zz[-gz[27]] * gz[29], zz[gz[30]] |= zz[gz[28]] << zz[gz[22]], zz[gz[22]] += (zz[gz[28]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                  do {
                    Gz(zz[gz[34]].push(zz[gz[30]] & gz[12]), zz[gz[30]] >>= gz[11], zz[gz[22]] -= gz[11])
                  } while (zz[gz[22]] > gz[24]);
                  zz[gz[28]] = -gz[2]
                } return zz[gz[28]] > -gz[2] && zz[gz[34]].push((zz[gz[30]] | zz[gz[28]] << zz[gz[22]]) & gz[12]), Bz(zz[gz[34]])
          }(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
        }(81)) return tz + sz
    }

    function rz() {}
    Gz(oz = {}, vz = ["KieTrHrJ^e4g1gGoLiy7*T*E?", "mCJ^`^p`T/@gn0Qo1N?PN0%&RN?rYec3{!$/+:3zcaI,^%@KyB1", "2=<PjFC2s3XhG1#do0;^JUxx<>R", ",e5KOQ;Br", 'JM}NBBDSI>*?j0Qjc*6{gtqz=e(?+j@b:R~^g,c"PaA;Z+2dky', '|?aE;J">(h^EAHeb*w_~NhC@Qw2$jmVR!9w^_', "4w@reg#[HVZ,aApbw7|T=IPJ_+x$ytvAT*gSQ:V/TzGWFm9F3+1", 'orMT"TeBix$Yyv83ML5?3*&VrV{e7t$L~RQl~Gk"GhxQVwAb@e&k%Jwz<', '$KB[/omVNp$YjH/bfLF"t^FpH,gJ0v7j1f>Ml8~10>(^h:uB!MlQGU|2', 'iiaT2JVB!@>l:1^VpNsr"oWE8X9qm??3MN$H5@wq3N>fm,va', "rjPl{#/[_=*2P}vjrifmt*y", "Crlr=*fB]XszVjvat_6L/QbV_,dIH&PL?78M::lO:>;eI!3czlKP=", 'Aiim:@y~#|`[Gp`v0Eg"E,_2=elIdmXqpc;",T:uX7fetD9oHCi"T@oSINq', 'dM$SOkc~Y@@gD+=F.Xa[TOt3R+VMyD)0vck?BQGbTh.E/!AB~$Xli"l1', "fr.N|Ijz>@mhR0Q&.R=P6DuurpH^y", "D7Vt9N&SI>2tt?eKA$K[g/NJ]_p", "O9c8)*+bCz_Xy+kc]%FS^FMb%", "X*7Q7^@GG/%iN0K~orVtB#uxs/$YYGOLuaz~&GG@%=", 'zJZ<ZH3pB77aGpO3?9Y7|`=":=P$MeF3!0#S&@y', "UMv7ItRY%V", 'O7:[RBQISx$T]1Kb#$v7R"=3M>j!OG%3B!dQ*/2x+3XWDFr', '~,<"^:5i2+J_i1', "eaLmv}QSM>u,aG132mSr<t,~7;N^|FL_+N~8yOl~W@A!c%:cMM~;jFSxO78Ty", '9@*^#pdqT3)+Vj*B_3"[>,E3bp#T%otFJX+7', 'J*Rt0hw`nVA*nv/R[,"[v@s2b*5gmmy~~@^E)s#B7_mY"::As0:zQ:5[Gn;', "(aBlFm+/,w_sIq$_", "|jPt#!oGE_i;8ttVnadAou:S)Vn;%UXqkeI?CM>rPw@", '{@IPDOrO/pgmm?$LQhgKsEwq"@{An!6RnEJ^YF?~E*aIU1', ".*s^r/I2", ";@q7<!2x%@EhQg&b_M!8o8+S.*W3,%/KKX/EsO(qnVuEP#%&R=s8NpkRr", '1W0^XtTbtpd*y+NAm=HA{#yze||;vA^o~+wL%!,JsfRe4e8o./"Tqcs@weB', "sK4N~D^r<", '*in;y,AbdX(!2v,[`Cn;QHoVv,z7?DNKM@WM/Tt"(n', ':d)[~"0Sqxz#K:9FmC3ARBaO_WUg+%W0LcNL,ppJq_n^%F>qWi%', "8h]M;R!>{7?i60eBGM3Qb#y", 'tN*Ld#$EG/SM@!%&1NQEs:LB@am"h%', "E0iKiFQxPXbnGplOx@LmD,ZpBV)+T!)&;y", ".CCLU@fM!3iPt+l~Th$[b$P3G/aIgwuc+2", "%NQHMM+}$NCq|HzLn,7NegMi9_Pv/vNKFj%", "RNPl7*a17P.VhA/KLi_r.Fl3$VZ|{t56|=PlYDpq2f:T2", "n7?ElB1OynyU,%][/r$Pof2QH,c8M%7", "?@_t9fD[+3q", 'UCkDv"1qP;gf2', '_=c8VF]"L,sg7vA[5e$<*Eh$/xyA^+7', "`XaTUH;2q_ziT,5Rb9y7U*BS?@56ZD^oriuj&", 'm9D^S;qq"NbYI!tV:K1', 'm@L^"oM2v+ixaG~[ym3[w', 'pDcQF$"".a|iR0rqal_Av:}x`Vlw/!=j_0y~S}XB2@PMWx7', "paDm9Q/2", ':XN;RB"c&*^[QF1_5CXl/f!cZN,Y2', 'irnPxHU"[W}f(D&K>cCP<s<&(*QEDjABAEXMmm61o>WK2t|jt$pM(Yqq^*Sr2', "@Mw;qe;S>f}g?!r3sM1", "`R}riF1z,w*Jj<rq48UMqGp~5a@B2tW_D*nPq:~ODpHBBg<qxDorfRrp<", "Kcl~z!N~!f@ToDJc4y", 'f*7lHgR"Y7Z|XOJc@!y~K', "OM7rXOeuBVj%,AP", 'r=w"3^aq!n0', "E0uL{c$33NgYQ%e[[$ME:C#2O7KptD6bxJ57;T<&bX~XvGzV<@1", "G7mNFNXM<PDmfU29[R1", 'g*Q[mTI2.*R^^eQo8e"L#M<xE*;wcAWiR+hNE@XiH=(', 'o%=T&@Z"ba5E<tp[5*u"3^>Yux!*gm<9W$*8"U$r,zw$2', ")!T?akABbXv*teo0rl1lj@.i~njIe%$LHNW<<I*~!f:H2", "&lN?YDBS*hnM4GR~pc1", "6c/EE}aq?>Y3]maciD2", "8_Ym00kq%=ETLHhdrB_Mr`ABS", '}XmN>ZW30ViaaeCoM71l|Iu_<PWgVe1_)No~G#eIQX7pEI1~OE;^HMc1"7', "cN0^Go;xMNgJV1ib~@r7ZHK3V=@^v,zVs8Ql#!K=e|J?&!HRo*>7", "t_G7Y}^p$N)e;g]v[cOTFGp1T3fWTOxA/$3tpTjz7*xQO%", 'c0lm$OJ"3,J;4B"cb@M/uIy', "NrWln:Up1N+ivG.KNX^H6^y~Cz.6L18j@XuKv", "2=F^*Ep1CwVsG:[_lM*;yZXB9Xn04GVA<fZ[8I3p%Nq", "gM][4FV[3+2rBpxAnc4r?/o2PeA", '07>7"JDSs+AtoFDFOM}lYEU=9h8).mf0.|9[aH)ikh<1gmzLo*kKQEVGr', "r3cm|HAScaPX`&}o#%]lFuMx>=3X@!aR>LoKk^zzR=", "FiOT#!Pzqa>KX,2Oz?#Lhfh3@_oP]&`KsKnEiDhE%V)3F#X0c=*SUIaO<V@", ',$<P,sl=O@}+BU<&7cf^6D&Iy,f"H&E&Ua}M&@?`xnd', 'WNG?SOj"LnS~J&Ad&7xPHgBGxe%N>e(V|JoKvHL[cXd"o1y0ajz{HmpqRNc^y', '_j"[s@2Vs=!Kswjbp%#S2o>q,zo', ";R*KX!=qv@HIAHLdcjBlhpJ=8X0!b?[BPJ~;TIy", "ML2k.eU=oxph`}Z6|mg8vDaqY+>h2", 'ec~^"Ma>uxZ)Mg/K:&/L:Iy', "BB9NU}!c", "%#lxjj)r", "q;9S7]zd", "raYSK$#z0DfEFo[tOZ(g>>:@1{k96v[t1w!c1Or&V+9^i,OavaR3g", '>,9*{#3DV"iM/ng`yPB)55UALTmo|2g`MzauOO1%y{ijlS/<&0', 'm@:,N4I1y>"|~C0;;@+DveN!Vxc6QN%vG{O6W', "s|0!", "WMFLT}a1", "0R;M@o~k", "O_F{", "K9C[i7+&f6Lt72c7", "%?N{V7e_>#JAgdv^", "&?+G)^7&h{fkn2>7", "Ke;):@o_#V1XA2T>", 'f6")C(#,5t::$G&', "66.7L)ZI", "p7f^qo+Q", "ig<iF:AQ", ">/uzb", "s+Jsi#Uw", "Hgtx2", "2@;Bg7f<gPY_I7`iBNBG", "7zIGQ6lAs6B!^(d~++=u", "3ZlCs0K0Eq/RyiC<p6!w", "SMHu7cJ0xrB=I%Z>?OIw", "!NzpKR~k", "ih;a", "quza9^=", "iN[w", "}@]=1[A", "*qR;/}fl", "Bq6FYafl", "qq9;", "*qQPx?Nl", 'rqo}f}"l', "MhQP0XCl", 'dbsP"', '*qQPf}"l', "MhR;Bnsl", "N|&uda*l", "nM&ddXNl", "[$8d2P*l", 'E$a}PT"l', "FhPOzQ@l", 'D|6FWn"l', "dya}1PvV", "J::d{", ">qR;", "9qQOI", "|bDd>", "FL`$RCHl", "815={", "*qQPx?8I6", "Wfk9jO`n6", "bb!=qOIT6", "*qQPf}h>EI", "|HCdF[~Ies", "Wf06TT5SEI", "D|$dG,/l", "d=$u>aA", "D|$d{XBl", "Mh&d0}bV", "Fh7dpnLl", ">ya}1PA", "o17u", "&4Xu", "qN?i", ",wXu", "$l<Zz", "BKFi", "JS#p", "YqsPXT|l", "V<);HJUl", "Bf[}TTfl", "7=_u", "g|5=", "Eb$dgQ@l", "8O_u", "Bb_d?}sl", "by5Gbn/l", '2E";nT"l', "`@[opnA", "Bb_dH4hl", "t=_u", "=CP3{!G>", "~tNW@ye", ",OBKnN.H", "wp_Ft4sH", "8T`c7ez", 'm^(TM"QZ', "N`y:D", ',$a}PT"l', "Bb_d7Pil"]), Gz(Uz = function(...zz) {
      Gz(zz[gz[13]] = gz[1], zz[-gz[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[gz[4]] = gz[19], zz[gz[14]] = []);
      try {
        Gz(zz[gz[4]] = Object, zz[gz[14]][gz[25]]("".__proto__.constructor.name))
      } catch (vz) {}
      zz: for (zz[gz[15]] = gz[1]; zz[gz[15]] < zz[-gz[16]][gz[13]]; zz[gz[15]]++) try {
        for (zz[gz[4]] = zz[-gz[16]][zz[gz[15]]](), zz[-gz[17]] = gz[1]; zz[-gz[17]] < zz[gz[14]][gz[13]]; zz[-gz[17]]++)
          if (typeof zz[gz[4]][zz[gz[14]][zz[-gz[17]]]] === gz[18]) continue zz;
        return zz[gz[4]]
      } catch (vz) {}
      return zz[gz[4]] || this
    }() || {}, Kz = Uz.TextDecoder, uz = Uz.Uint8Array, Nz = Uz.Lw, bz = Uz.String || String, wz = Uz.Array || Array, Dz = function(...zz) {
      return Gz(zz[gz[13]] = gz[1], zz[gz[5]] = new wz(gz[71]), zz[gz[2]] = bz[gz[23]] || bz.fromCharCode, zz[gz[4]] = []),
        function(...tz) {
          for (Gz(tz[gz[13]] = gz[2], tz[gz[2]] = gz[19], tz[gz[14]] = gz[19], tz[gz[21]] = tz[gz[1]][gz[13]], zz[gz[4]][gz[13]] = gz[1]), tz[gz[20]] = gz[1]; tz[gz[20]] < tz[gz[21]];) Gz(tz[gz[14]] = tz[gz[1]][tz[gz[20]]++], tz[gz[14]] <= gz[69] ? tz[gz[2]] = tz[gz[14]] : tz[gz[14]] <= gz[52] ? tz[gz[2]] = (tz[gz[14]] & gz[70]) << gz[22] | tz[gz[1]][tz[gz[20]]++] & gz[16] : tz[gz[14]] <= 239 ? tz[gz[2]] = (tz[gz[14]] & gz[65]) << gz[17] | (tz[gz[1]][tz[gz[20]]++] & gz[16]) << gz[22] | tz[gz[1]][tz[gz[20]]++] & gz[16] : bz[gz[23]] ? tz[gz[2]] = (tz[gz[14]] & gz[24]) << gz[51] | (tz[gz[1]][tz[gz[20]]++] & gz[16]) << gz[17] | (tz[gz[1]][tz[gz[20]]++] & gz[16]) << gz[22] | tz[gz[1]][tz[gz[20]]++] & gz[16] : (tz[gz[2]] = gz[16], tz[gz[20]] += gz[21]), zz[gz[4]][gz[25]](zz[gz[5]][tz[gz[2]]] || (zz[gz[5]][tz[gz[2]]] = zz[gz[2]](tz[gz[2]]))));
          return zz[gz[4]].join("")
        }
    }());
    const Yz = Wz()[Hz(gz[6])](),
      xz = Wz()[Hz(gz[6])](),
      mz = Wz()[Hz(gz[6])](),
      Jz = Wz()[Hz(gz[6])](),
      Iz = Wz()[Hz(gz[6])](),
      Cz = Wz()[Hz(gz[6])](),
      ez = Wz()[Hz(gz[6])](),
      Zz = (...zz) => {
        function tz(...zz) {
          return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
            for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = '=QkUVB@Gauw/c{_+`bt*D[vZ$l(irI92p|~1o!E8<AYNy:LK7sMzx)C#mP3.6nH%qg}?R,4^j]h0&XOFW5T;f"dJeS>', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[14]].length, zz[gz[50]] = [], zz[gz[49]] = gz[1], zz[gz[43]] = gz[1], zz[-gz[48]] = -gz[2]), zz[gz[11]] = gz[1]; zz[gz[11]] < zz[gz[21]]; zz[gz[11]]++)
              if (zz[gz[46]] = zz[gz[5]].indexOf(zz[gz[14]][zz[gz[11]]]), zz[gz[46]] !== -gz[2])
                if (zz[-gz[48]] < gz[1]) zz[-gz[48]] = zz[gz[46]];
                else {
                  Gz(zz[-gz[48]] += zz[gz[46]] * gz[29], zz[gz[49]] |= zz[-gz[48]] << zz[gz[43]], zz[gz[43]] += (zz[-gz[48]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                  do {
                    Gz(zz[gz[50]].push(zz[gz[49]] & gz[12]), zz[gz[49]] >>= gz[11], zz[gz[43]] -= gz[11])
                  } while (zz[gz[43]] > gz[24]);
                  zz[-gz[48]] = -gz[2]
                } return zz[-gz[48]] > -gz[2] && zz[gz[50]].push((zz[gz[49]] | zz[-gz[48]] << zz[gz[43]]) & gz[12]), Bz(zz[gz[50]])
          }(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
        }
        zz[gz[13]] = gz[21], tz(gz[60]) + "j" in rz && function(...zz) {
          Gz(zz[gz[13]] = gz[1], zz[-gz[51]] = function(...zz) {
            function sz(...zz) {
              return zz[gz[13]] = gz[2], Kz(Oz(bz(zz[gz[1]])))
            }

            function Fz(...zz) {
              return zz[gz[13]] = gz[14], Kz(Uz(bz(zz[gz[1]]), bz(zz[gz[2]])))
            }

            function Wz(zz, tz) {
              return uz(Uz(bz(zz), bz(tz)))
            }

            function Xz(zz, tz, sz) {
              return Nz(Uz(bz(zz), bz(tz)), sz)
            }

            function Oz(zz) {
              return Dz(ez(wz(zz), zz.length * gz[11]))
            }

            function Uz(...zz) {
              function tz(...zz) {
                for (Gz(zz[gz[13]] = gz[2], zz[gz[56]] = 'f9IW6Ckq/NvrxwGn}o?3aPM$J]B"7K2t0em|%_&!FgyXRLb5^*{H;Q.:VpZO[8D)E`TcAUl<j14z>h=SY+@#si(,~ud', zz[gz[53]] = "" + (zz[gz[1]] || ""), zz[-gz[55]] = zz[gz[53]].length, zz[gz[20]] = [], zz[gz[47]] = gz[1], zz[-gz[58]] = gz[1], zz[-gz[57]] = -gz[2]), zz[gz[21]] = gz[1]; zz[gz[21]] < zz[-gz[55]]; zz[gz[21]]++)
                  if (zz[gz[46]] = zz[gz[56]].indexOf(zz[gz[53]][zz[gz[21]]]), zz[gz[46]] !== -gz[2])
                    if (zz[-gz[57]] < gz[1]) zz[-gz[57]] = zz[gz[46]];
                    else {
                      Gz(zz[-gz[57]] += zz[gz[46]] * gz[29], zz[gz[47]] |= zz[-gz[57]] << zz[-gz[58]], zz[-gz[58]] += (zz[-gz[57]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                      do {
                        Gz(zz[gz[20]].push(zz[gz[47]] & gz[12]), zz[gz[47]] >>= gz[11], zz[-gz[58]] -= gz[11])
                      } while (zz[-gz[58]] > gz[24]);
                      zz[-gz[57]] = -gz[2]
                    } return zz[-gz[57]] > -gz[2] && zz[gz[20]].push((zz[gz[47]] | zz[-gz[57]] << zz[-gz[58]]) & gz[12]), Bz(zz[gz[20]])
              }

              function sz(...zz) {
                return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = tz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
              }
              zz[gz[13]] = gz[14], zz[gz[50]] = wz(zz[gz[1]]), zz[gz[50]].length > gz[59] && (zz[gz[50]] = ez(zz[gz[50]], zz[gz[1]].length * gz[11]));
              var Fz = Array(gz[59]),
                Wz = Array(gz[59]);
              for (zz[-gz[60]] = gz[1]; zz[-gz[60]] < gz[59]; zz[-gz[60]]++) Gz(Fz[zz[-gz[60]]] = 909522486 ^ zz[gz[50]][zz[-gz[60]]], Wz[zz[-gz[60]]] = 1549556828 ^ zz[gz[50]][zz[-gz[60]]]);
              return zz[-gz[42]] = ez(Fz.concat(wz(zz[gz[2]])), gz[61] + zz[gz[2]].length * gz[11]), Dz(ez(Wz.concat(zz[-gz[42]]), Pz(sz(96), gz[61], 256)))
            }

            function Kz(...sz) {
              function Fz(...zz) {
                for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = '47w}9]zFNlaWg;U"(.6fRjkb02Vsp|3HYZi&%h1_J@=Q[Du^EXMK/x5!rLy{c$SI:+,n#TdB?`*o>eP8OvG)t~C<Aqm', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[14]].length, zz[gz[39]] = [], zz[gz[30]] = gz[1], zz[gz[43]] = gz[1], zz[gz[24]] = -gz[2]), zz[gz[26]] = gz[1]; zz[gz[26]] < zz[gz[21]]; zz[gz[26]]++)
                  if (zz[gz[62]] = zz[gz[5]].indexOf(zz[gz[14]][zz[gz[26]]]), zz[gz[62]] !== -gz[2])
                    if (zz[gz[24]] < gz[1]) zz[gz[24]] = zz[gz[62]];
                    else {
                      Gz(zz[gz[24]] += zz[gz[62]] * gz[29], zz[gz[30]] |= zz[gz[24]] << zz[gz[43]], zz[gz[43]] += (zz[gz[24]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                      do {
                        Gz(zz[gz[39]].push(zz[gz[30]] & gz[12]), zz[gz[30]] >>= gz[11], zz[gz[43]] -= gz[11])
                      } while (zz[gz[43]] > gz[24]);
                      zz[gz[24]] = -gz[2]
                    } return zz[gz[24]] > -gz[2] && zz[gz[39]].push((zz[gz[30]] | zz[gz[24]] << zz[gz[43]]) & gz[12]), Bz(zz[gz[39]])
              }

              function Wz(...zz) {
                return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = Fz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
              }
              sz[gz[13]] = gz[2];
              try {
                zz[gz[53]]
              } catch (Xz) {
                zz[gz[53]] = gz[1]
              }
              for (Gz(sz[gz[2]] = zz[gz[53]] ? tz(gz[63]) + tz(98) + tz(99) : tz(gz[63]) + Wz(100) + Wz(gz[54]), sz[gz[64]] = "", sz[gz[4]] = gz[19]), sz[gz[39]] = gz[1]; sz[gz[39]] < sz[gz[1]].length; sz[gz[39]]++) Gz(sz[gz[4]] = sz[gz[1]].charCodeAt(sz[gz[39]]), sz[gz[64]] += sz[gz[2]].charAt(sz[gz[4]] >>> gz[20] & gz[65]) + sz[gz[2]].charAt(sz[gz[4]] & gz[65]));
              return sz[gz[64]]
            }

            function uz(...sz) {
              function Fz(...zz) {
                for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = 'x]~{w&`47r(D0I}_z/X>WRsT1id*<fJOPKcNokG,3n5ap+Y8bLU|?mAuvgQ^;lHy9#:2MZhq6"=SB@t!e%C$E[.jVF)', zz[gz[53]] = "" + (zz[gz[1]] || ""), zz[gz[21]] = zz[gz[53]].length, zz[gz[39]] = [], zz[gz[47]] = gz[1], zz[gz[22]] = gz[1], zz[gz[7]] = -gz[2]), zz[gz[26]] = gz[1]; zz[gz[26]] < zz[gz[21]]; zz[gz[26]]++)
                  if (zz[gz[66]] = zz[gz[5]].indexOf(zz[gz[53]][zz[gz[26]]]), zz[gz[66]] !== -gz[2])
                    if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[gz[66]];
                    else {
                      Gz(zz[gz[7]] += zz[gz[66]] * gz[29], zz[gz[47]] |= zz[gz[7]] << zz[gz[22]], zz[gz[22]] += (zz[gz[7]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                      do {
                        Gz(zz[gz[39]].push(zz[gz[47]] & gz[12]), zz[gz[47]] >>= gz[11], zz[gz[22]] -= gz[11])
                      } while (zz[gz[22]] > gz[24]);
                      zz[gz[7]] = -gz[2]
                    } return zz[gz[7]] > -gz[2] && zz[gz[39]].push((zz[gz[47]] | zz[gz[7]] << zz[gz[22]]) & gz[12]), Bz(zz[gz[39]])
              }

              function Wz(zz) {
                return typeof oz[zz] === gz[18] ? oz[zz] = Fz(vz[zz]) : oz[zz]
              }
              sz[gz[13]] = gz[2];
              try {
                zz[-gz[52]]
              } catch (Xz) {
                zz[-gz[52]] = ""
              }
              for (Gz(sz[gz[5]] = tz(102) + tz(103) + tz(gz[50]) + Wz(105), sz[gz[53]] = "", sz[gz[4]] = sz[gz[1]].length), sz[gz[20]] = gz[1]; sz[gz[20]] < sz[gz[4]]; sz[gz[20]] += gz[21])
                for (sz[gz[47]] = sz[gz[1]].charCodeAt(sz[gz[20]]) << gz[59] | (sz[gz[20]] + gz[2] < sz[gz[4]] ? sz[gz[1]].charCodeAt(sz[gz[20]] + gz[2]) << gz[11] : gz[1]) | (sz[gz[20]] + gz[14] < sz[gz[4]] ? sz[gz[1]].charCodeAt(sz[gz[20]] + gz[14]) : gz[1]), sz[gz[67]] = gz[1]; sz[gz[67]] < gz[20]; sz[gz[67]]++) sz[gz[20]] * gz[11] + sz[gz[67]] * gz[22] > sz[gz[1]].length * gz[11] ? sz[gz[53]] += zz[-gz[52]] : sz[gz[53]] += sz[gz[5]].charAt(sz[gz[47]] >>> gz[22] * (gz[21] - sz[gz[67]]) & gz[16]);
              return sz[gz[53]]
            }

            function Nz(zz, tz) {
              var sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz = tz.length;
              for (sz = Array(), Fz = Array(Math.ceil(zz.length / gz[14])), Oz = gz[1]; Oz < Fz.length; Oz++) Fz[Oz] = zz.charCodeAt(Oz * gz[14]) << gz[11] | zz.charCodeAt(Oz * gz[14] + gz[2]);
              for (; Fz.length > gz[1];) {
                for (Gz(Uz = Array(), vz = gz[1]), Oz = gz[1]; Oz < Fz.length; Oz++) Gz(vz = (vz << gz[59]) + Fz[Oz], oz = Math.floor(vz / Kz), vz -= oz * Kz), (Uz.length > gz[1] || oz > gz[1]) && (Uz[Uz.length] = oz);
                Gz(sz[sz.length] = vz, Fz = Uz)
              }
              for (Wz = "", Oz = sz.length - gz[2]; Oz >= gz[1]; Oz--) Wz += tz.charAt(sz[Oz]);
              for (Xz = Math.ceil(zz.length * gz[11] / (Math.log(tz.length) / Math.log(gz[14]))), Oz = Wz.length; Oz < Xz; Oz++) Wz = tz[gz[1]] + Wz;
              return Wz
            }

            function bz(...zz) {
              var tz, sz;
              for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = "", zz[gz[53]] = -gz[2]); ++zz[gz[53]] < zz[gz[1]].length;) Gz(tz = zz[gz[1]].charCodeAt(zz[gz[53]]), sz = zz[gz[53]] + gz[2] < zz[gz[1]].length ? zz[gz[1]].charCodeAt(zz[gz[53]] + gz[2]) : gz[1]), 55296 <= tz && tz <= 56319 && 56320 <= sz && sz <= 57343 && Gz(tz = 65536 + ((tz & gz[68]) << gz[77]) + (sz & gz[68]), zz[gz[53]]++), tz <= gz[69] ? zz[gz[5]] += String.fromCharCode(tz) : tz <= 2047 ? zz[gz[5]] += String.fromCharCode(192 | tz >>> gz[22] & gz[70], gz[71] | tz & gz[16]) : tz <= gz[79] ? zz[gz[5]] += String.fromCharCode(224 | tz >>> gz[17] & gz[65], gz[71] | tz >>> gz[22] & gz[16], gz[71] | tz & gz[16]) : tz <= 2097151 && (zz[gz[5]] += String.fromCharCode(240 | tz >>> gz[51] & gz[24], gz[71] | tz >>> gz[17] & gz[16], gz[71] | tz >>> gz[22] & gz[16], gz[71] | tz & gz[16]));
              return zz[gz[5]]
            }

            function wz(...zz) {
              for (Gz(zz[gz[13]] = gz[2], zz[-gz[74]] = Array(zz[gz[1]].length >> gz[14])), zz[gz[59]] = gz[1]; zz[gz[59]] < zz[-gz[74]].length; zz[gz[59]]++) zz[-gz[74]][zz[gz[59]]] = gz[1];
              for (zz[gz[59]] = gz[1]; zz[gz[59]] < zz[gz[1]].length * gz[11]; zz[gz[59]] += gz[11]) zz[-gz[74]][zz[gz[59]] >> gz[47]] |= (zz[gz[1]].charCodeAt(zz[gz[59]] / gz[11]) & gz[12]) << gz[76] - zz[gz[59]] % gz[75];
              return zz[-gz[74]]
            }

            function Dz(...zz) {
              for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = ""), zz[gz[53]] = gz[1]; zz[gz[53]] < zz[gz[1]].length * gz[75]; zz[gz[53]] += gz[11]) zz[gz[2]] += String.fromCharCode(zz[gz[1]][zz[gz[53]] >> gz[47]] >>> gz[76] - zz[gz[53]] % gz[75] & gz[12]);
              return zz[gz[2]]
            }

            function Hz(...zz) {
              return zz[gz[13]] = gz[14], zz[gz[1]] >>> zz[gz[2]] | zz[gz[1]] << gz[75] - zz[gz[2]]
            }

            function rz(...zz) {
              return zz[gz[13]] = gz[14], zz[gz[1]] >>> zz[gz[2]]
            }

            function Yz(...zz) {
              return zz[gz[13]] = gz[21], zz[gz[1]] & zz[gz[2]] ^ ~zz[gz[1]] & zz[gz[14]]
            }

            function xz(zz, tz, sz) {
              return zz & tz ^ zz & sz ^ tz & sz
            }

            function mz(...zz) {
              return zz[gz[13]] = gz[2], Hz(zz[gz[1]], gz[14]) ^ Hz(zz[gz[1]], gz[32]) ^ Hz(zz[gz[1]], 22)
            }

            function Jz(...zz) {
              return zz[gz[13]] = gz[2], Hz(zz[gz[1]], gz[22]) ^ Hz(zz[gz[1]], 11) ^ Hz(zz[gz[1]], 25)
            }

            function Iz(...zz) {
              return zz[gz[13]] = gz[2], Hz(zz[gz[1]], gz[24]) ^ Hz(zz[gz[1]], gz[51]) ^ rz(zz[gz[1]], gz[21])
            }

            function Cz(zz) {
              return Hz(zz, 17) ^ Hz(zz, gz[78]) ^ rz(zz, gz[77])
            }

            function ez(...tz) {
              var sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz;
              for (Gz(tz[gz[13]] = gz[14], tz[gz[14]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), tz[gz[53]] = new Array(gz[66])), Gz(tz[gz[1]][tz[gz[2]] >> gz[47]] |= gz[71] << gz[76] - tz[gz[2]] % gz[75], tz[gz[1]][(tz[gz[2]] + gz[66] >> gz[41] << gz[20]) + gz[65]] = tz[gz[2]]), Kz = gz[1]; Kz < tz[gz[1]].length; Kz += gz[59]) {
                for (Gz(sz = tz[gz[14]][gz[1]], Fz = tz[gz[14]][gz[2]], Wz = tz[gz[14]][gz[14]], Xz = tz[gz[14]][gz[21]], Oz = tz[gz[14]][gz[20]], oz = tz[gz[14]][gz[47]], vz = tz[gz[14]][gz[22]], Uz = tz[gz[14]][gz[24]]), uz = gz[1]; uz < gz[66]; uz++) Gz(tz[gz[53]][uz] = uz < gz[59] ? tz[gz[1]][uz + Kz] : Zz(Zz(Zz(Cz(tz[gz[53]][uz - gz[14]]), tz[gz[53]][uz - gz[24]]), Iz(tz[gz[53]][uz - gz[65]])), tz[gz[53]][uz - gz[59]]), Nz = Zz(Zz(Zz(Zz(Uz, Jz(Oz)), Yz(Oz, oz, vz)), zz[gz[39]][uz]), tz[gz[53]][uz]), bz = Zz(mz(sz), xz(sz, Fz, Wz)), Uz = vz, vz = oz, oz = Oz, Oz = Zz(Xz, Nz), Xz = Wz, Wz = Fz, Fz = sz, sz = Zz(Nz, bz));
                Gz(tz[gz[14]][gz[1]] = Zz(sz, tz[gz[14]][gz[1]]), tz[gz[14]][gz[2]] = Zz(Fz, tz[gz[14]][gz[2]]), tz[gz[14]][gz[14]] = Zz(Wz, tz[gz[14]][gz[14]]), tz[gz[14]][gz[21]] = Zz(Xz, tz[gz[14]][gz[21]]), tz[gz[14]][gz[20]] = Zz(Oz, tz[gz[14]][gz[20]]), tz[gz[14]][gz[47]] = Zz(oz, tz[gz[14]][gz[47]]), tz[gz[14]][gz[22]] = Zz(vz, tz[gz[14]][gz[22]]), tz[gz[14]][gz[24]] = Zz(Uz, tz[gz[14]][gz[24]]))
              }
              return tz[gz[14]]
            }

            function Zz(...zz) {
              return Gz(zz[gz[13]] = gz[14], zz[gz[5]] = (zz[gz[1]] & gz[79]) + (zz[gz[2]] & gz[79]), zz[gz[21]] = (zz[gz[1]] >> gz[59]) + (zz[gz[2]] >> gz[59]) + (zz[gz[5]] >> gz[59])), zz[gz[21]] << gz[59] | zz[gz[5]] & gz[79]
            }
            return Gz(zz[gz[13]] = gz[1], zz[gz[53]] = gz[1], zz[-gz[52]] = ""), zz[gz[39]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: sz,
              b64: Wz,
              any: Xz,
              hex_hmac: Fz,
              b64_hmac: Wz,
              any_hmac: Xz
            }
          }(), console.log(zz[-gz[51]]))
        }();
        const sz = Cz;
        return Wz()[tz(106) + tz(107)](sz, zz[gz[14]]), Wz()[tz(108)](zz[gz[1]], sz, Wz()[tz(109)](sz, zz[gz[2]]))
      };

    function Gz() {
      Gz = function() {}
    }
    Oz = (zz, tz, sz, Fz, Oz, Uz, Kz, uz) => {
      function Nz(...zz) {
        return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = function(...zz) {
          for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = 'AVl:<96%u=;3fjrq/~*IsR#Yi{|8"x>odW@DBENKhpebzMHgU4C$c)LF.yw71m2t5^+&Q,[a]GOv}PX!nTJ_k?SZ(0`', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[4]] = zz[gz[14]].length, zz[-gz[80]] = [], zz[gz[30]] = gz[1], zz[gz[43]] = gz[1], zz[gz[7]] = -gz[2]), zz[gz[11]] = gz[1]; zz[gz[11]] < zz[gz[4]]; zz[gz[11]]++)
            if (zz[-gz[57]] = zz[gz[2]].indexOf(zz[gz[14]][zz[gz[11]]]), zz[-gz[57]] !== -gz[2])
              if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[-gz[57]];
              else {
                Gz(zz[gz[7]] += zz[-gz[57]] * gz[29], zz[gz[30]] |= zz[gz[7]] << zz[gz[43]], zz[gz[43]] += (zz[gz[7]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                do {
                  Gz(zz[-gz[80]].push(zz[gz[30]] & gz[12]), zz[gz[30]] >>= gz[11], zz[gz[43]] -= gz[11])
                } while (zz[gz[43]] > gz[24]);
                zz[gz[7]] = -gz[2]
              } return zz[gz[7]] > -gz[2] && zz[-gz[80]].push((zz[gz[30]] | zz[gz[7]] << zz[gz[43]]) & gz[12]), Bz(zz[-gz[80]])
        }(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
      }
      const bz = zz[Nz(gz[81])][Nz(gz[103]) + Nz(gz[102]) + Nz(113)](tz);
      let wz = zz[Nz(gz[81])][Nz(114) + Nz(115) + Nz(116) + Nz(117)](bz);
      const Dz = wz === gz[82] ? zz[Nz(gz[81])][Nz(gz[86]) + Nz(gz[87]) + Nz(gz[88]) + Nz(gz[89])](tz, Nz(gz[83]) + Nz(gz[84]) + Nz(gz[85]) + gz[30]) : wz[Nz(gz[83]) + Nz(gz[84]) + Nz(gz[85]) + gz[30]],
        Hz = wz === gz[82] ? zz[Nz(gz[81])][Nz(gz[86]) + Nz(gz[87]) + Nz(gz[88]) + Nz(gz[89])](tz, Nz(gz[90]) + Nz(gz[3]) + Nz(gz[69])) : wz[Nz(gz[90]) + Nz(gz[3]) + Nz(gz[69])];
      Gz(Wz()[Nz(gz[71])](Yz, gz[1], gz[1], Uz), Wz().ws(Yz, Yz, Wz()[Nz(129)], Fz.heading), Wz()[Nz(130)](ez, Oz.hb), ez[gz[2]] = gz[1]);
      const Pz = sz[Nz(131) + Nz(132)]();
      wz = zz[Nz(gz[81])][Nz(133) + Nz(134) + Nz(135) + gz[98]](bz);
      let rz = wz === gz[82] ? zz[Nz(gz[81])][Nz(gz[15]) + Nz(137) + Nz(138)](tz, Nz(gz[37]) + Nz(gz[91])) : wz[Nz(gz[37]) + Nz(gz[91])];
      if (!Pz && Wz()[gz[95]](ez) && (wz === gz[82] ? zz[Nz(gz[81])][Nz(gz[86]) + Nz(gz[87]) + Nz(gz[88]) + Nz(gz[89])](tz, Nz(gz[92]) + Nz(gz[93]) + Nz(gz[94]) + Nz(gz[64])) : wz[Nz(gz[92]) + Nz(gz[93]) + Nz(gz[94]) + Nz(gz[64])])) {
        function yz(...zz) {
          for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = 'TBHsKc)8pui^S[}4$"@PD?v&oxwq3J5_!U1]nVr`~*GNty6,C;lWAFZ:2Eb=|{+kXI<9gYOm(Ld#z0fQ7%.RajMeh>/', zz[gz[29]] = "" + (zz[gz[1]] || ""), zz[gz[4]] = zz[gz[29]].length, zz[gz[20]] = [], zz[gz[30]] = gz[1], zz[gz[22]] = gz[1], zz[gz[7]] = -gz[2]), zz[gz[11]] = gz[1]; zz[gz[11]] < zz[gz[4]]; zz[gz[11]]++)
            if (zz[gz[46]] = zz[gz[2]].indexOf(zz[gz[29]][zz[gz[11]]]), zz[gz[46]] !== -gz[2])
              if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[gz[46]];
              else {
                Gz(zz[gz[7]] += zz[gz[46]] * gz[29], zz[gz[30]] |= zz[gz[7]] << zz[gz[22]], zz[gz[22]] += (zz[gz[7]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                do {
                  Gz(zz[gz[20]].push(zz[gz[30]] & gz[12]), zz[gz[30]] >>= gz[11], zz[gz[22]] -= gz[11])
                } while (zz[gz[22]] > gz[24]);
                zz[gz[7]] = -gz[2]
              } return zz[gz[7]] > -gz[2] && zz[gz[20]].push((zz[gz[30]] | zz[gz[7]] << zz[gz[22]]) & gz[12]), Bz(zz[gz[20]])
        }

        function Mz(...zz) {
          return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = yz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
        }
        Gz(Zz(xz, Yz, ez), Zz(mz, ez, Yz), Wz()[Nz(gz[100])](Jz, ez, mz));
        const dz = Wz()[Mz(146)](ez),
          hz = Wz()[Mz(147)](Yz, ez) / Uz / dz,
          Qz = Math[Mz(gz[99])](hz, gz[1]) + gz[2];
        if (Uz * Uz < Wz()[gz[95]](mz)) {
          function kz(...zz) {
            for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = '>%_(^<}O:kZmpuElvSQ=iYU$]4fwzbAR+saqe?nd,~t.;*JDHg[!VN&)98oWMX7r@{P3C|`621/IhT#0BxjKc"LyF5G', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[-gz[96]] = zz[gz[14]].length, zz[gz[20]] = [], zz[gz[47]] = gz[1], zz[gz[22]] = gz[1], zz[-gz[97]] = -gz[2]), zz[gz[26]] = gz[1]; zz[gz[26]] < zz[-gz[96]]; zz[gz[26]]++)
              if (zz[gz[46]] = zz[gz[2]].indexOf(zz[gz[14]][zz[gz[26]]]), zz[gz[46]] !== -gz[2])
                if (zz[-gz[97]] < gz[1]) zz[-gz[97]] = zz[gz[46]];
                else {
                  Gz(zz[-gz[97]] += zz[gz[46]] * gz[29], zz[gz[47]] |= zz[-gz[97]] << zz[gz[22]], zz[gz[22]] += (zz[-gz[97]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                  do {
                    Gz(zz[gz[20]].push(zz[gz[47]] & gz[12]), zz[gz[47]] >>= gz[11], zz[gz[22]] -= gz[11])
                  } while (zz[gz[22]] > gz[24]);
                  zz[-gz[97]] = -gz[2]
                } return zz[-gz[97]] > -gz[2] && zz[gz[20]].push((zz[gz[47]] | zz[-gz[97]] << zz[gz[22]]) & gz[12]), Bz(zz[gz[20]])
          }

          function iz(...zz) {
            return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = kz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
          }
          Wz()[iz(149)](Yz, Yz, mz, Qz)
        }
        Gz(rz = (0, Xz[gz[98]])(rz, 1, Math[Mz(gz[99])](gz[2], Math[Mz(150)](gz[1], -hz, gz[2] - dz / Uz))), Wz()[Mz(151)](Yz, Yz, Jz))
      }
      const Cz = Iz;
      Gz(Wz()[Nz(gz[100])](Cz, Yz, ez), Cz[gz[2]] = gz[1]);
      let Tz = Wz()[Nz(gz[42])](Cz);
      Pz || (Tz *= rz);
      const cz = Kz[Nz(153) + Nz(gz[58]) + Nz(155)],
        jz = cz ? Math[Nz(156)](cz, Tz) : Tz;
      Wz()[Nz(157) + Nz(gz[97])](Cz, Cz);
      const Az = uz !== gz[82] && void 0 !== uz ? uz : Kz[Nz(gz[44]) + Nz(160) + Nz(161) + Nz(162)];
      if (jz > gz[1]) {
        function Lz(...zz) {
          for (Gz(zz[gz[13]] = gz[2], zz[gz[2]] = 'zZHkIWJmcTKLjBlOASVvs[yP?Dp%U,7:F#nYM~.i2uxgR]^h}Q0`9wr|!CtaG3@$8d{+X1Eeoqf>b4N5(*)_="</&;6', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[-gz[101]] = zz[gz[14]].length, zz[gz[102]] = [], zz[gz[47]] = gz[1], zz[gz[43]] = gz[1], zz[gz[7]] = -gz[2]), zz[gz[11]] = gz[1]; zz[gz[11]] < zz[-gz[101]]; zz[gz[11]]++)
            if (zz[gz[46]] = zz[gz[2]].indexOf(zz[gz[14]][zz[gz[11]]]), zz[gz[46]] !== -gz[2])
              if (zz[gz[7]] < gz[1]) zz[gz[7]] = zz[gz[46]];
              else {
                Gz(zz[gz[7]] += zz[gz[46]] * gz[29], zz[gz[47]] |= zz[gz[7]] << zz[gz[43]], zz[gz[43]] += (zz[gz[7]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                do {
                  Gz(zz[gz[102]].push(zz[gz[47]] & gz[12]), zz[gz[47]] >>= gz[11], zz[gz[43]] -= gz[11])
                } while (zz[gz[43]] > gz[24]);
                zz[gz[7]] = -gz[2]
              } return zz[gz[7]] > -gz[2] && zz[gz[102]].push((zz[gz[47]] | zz[gz[7]] << zz[gz[43]]) & gz[12]), Bz(zz[gz[102]])
        }

        function lz(...zz) {
          return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = Lz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
        }
        let nz = sz[Nz(163) + Nz(164)] * Az;
        if (!Pz) {
          function qz(...zz) {
            for (Gz(zz[gz[13]] = gz[2], zz[gz[5]] = 'e#>}4YH9l]WS;V(cwi,QrnZT7{C+NosD3kO=xtFb|ELK5Mmhg<*P%.Gv/aRqdp~"?I210fJj:XBzuA!_@y68`)[^&$U', zz[gz[14]] = "" + (zz[gz[1]] || ""), zz[gz[4]] = zz[gz[14]].length, zz[gz[103]] = [], zz[gz[104]] = gz[1], zz[gz[38]] = gz[1], zz[gz[24]] = -gz[2]), zz[gz[46]] = gz[1]; zz[gz[46]] < zz[gz[4]]; zz[gz[46]]++)
              if (zz[gz[41]] = zz[gz[5]].indexOf(zz[gz[14]][zz[gz[46]]]), zz[gz[41]] !== -gz[2])
                if (zz[gz[24]] < gz[1]) zz[gz[24]] = zz[gz[41]];
                else {
                  Gz(zz[gz[24]] += zz[gz[41]] * gz[29], zz[gz[104]] |= zz[gz[24]] << zz[gz[38]], zz[gz[38]] += (zz[gz[24]] & gz[31]) > gz[6] ? gz[32] : gz[33]);
                  do {
                    Gz(zz[gz[103]].push(zz[gz[104]] & gz[12]), zz[gz[104]] >>= gz[11], zz[gz[38]] -= gz[11])
                  } while (zz[gz[38]] > gz[24]);
                  zz[gz[24]] = -gz[2]
                } return zz[gz[24]] > -gz[2] && zz[gz[103]].push((zz[gz[104]] | zz[gz[24]] << zz[gz[38]]) & gz[12]), Bz(zz[gz[103]])
          }

          function Sz(...zz) {
            return zz[gz[13]] = gz[2], typeof oz[zz[gz[1]]] === gz[18] ? oz[zz[gz[1]]] = qz(vz[zz[gz[1]]]) : oz[zz[gz[1]]]
          }
          nz *= sz[Sz(gz[80]) + Sz(gz[27])]
        }
        let az = sz[lz(167) + lz(gz[48]) + "ss"] * jz;
        jz < .3 && (az *= jz), nz > az && (nz = az), Gz(Wz()[lz(169)](Cz, Cz, nz), Oz[lz(170) + lz(gz[73])](Cz))
      }
      Oz[Nz(172) + gz[105]] = sz[Nz(173) + Nz(gz[84]) + gz[105]] * (Pz ? Dz : Hz)
    }
  },
  37031: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      e: () => oz
    });
    var Fz = sz(37039),
      Wz = sz(1824);
    const Xz = 2,
      Oz = 1,
      oz = {
        wo: 1,
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

    function vz(zz, tz, sz, oz, vz, Uz, Kz) {
      if (vz.speed) return (0, Fz.b)(tz, sz, oz, vz, Uz, Kz, zz), void(vz.ticksToReachMaxIdleFriction = Xz);
      const uz = oz.isOnGround(),
        Nz = tz.bloxd.getSyncedClientOptions(tz.bloxd.getPlayerReader(sz)),
        bz = null === Nz ? tz.bloxd.getClientPredictedOption(sz, "groundFrictionScale") : Nz.groundFrictionScale,
        wz = null === Nz ? tz.bloxd.getClientPredictedOption(sz, "airFrictionScale") : Nz.airFrictionScale,
        Dz = uz ? bz : wz,
        gz = Math.max(Oz, Dz),
        Hz = vz.ticksToReachMaxIdleFriction / Xz,
        Bz = (0, Wz.s)(gz, Dz, Hz);
      Uz.friction = zz.standingFriction * ((null === Nz ? tz.bloxd.getClientPredictedOption(sz, "airMomentumConservation") : Nz.airMomentumConservation) ? Bz : Dz), vz.ticksToReachMaxIdleFriction > 0 && vz.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);