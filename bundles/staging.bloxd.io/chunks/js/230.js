export const id = 230;
export const ids = [230];
export const modules = {
  38504: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => NB
    });
    var TB = ZB(201),
      JB = ZB(37705);
    const oB = 1.2,
      GB = {
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
        Wv: .5,
        bIB: !1
      },
      vB = {
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
        Wv: .5,
        bIB: !1
      },
      kB = {
        physicsBodyDimensions: {
          width: TB.f.uq,
          height: TB.f.fq
        },
        hitBoxDimensions: {
          width: TB.f.uq + .4,
          height: TB.f.fq + .6
        },
        eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
        rideHeight: TB.f.fq - .3,
        Wv: .5,
        bIB: !1
      },
      cB = {
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
        Wv: .5,
        bIB: !1
      },
      nB = {
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
        Wv: .5,
        bIB: !1
      },
      hB = {
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
        Wv: .5,
        bIB: !1
      },
      zB = {
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
        Wv: .5,
        bIB: !1
      },
      FB = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: TB.f.uq,
            height: TB.f.fq
          },
          hitBoxDimensions: {
            width: TB.f.uq + .4,
            height: TB.f.fq + .6
          },
          eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
          rideHeight: TB.f.fq - .1,
          Wv: JB.d.Wv,
          bIB: !0
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
        },
        Camel: {
          modelScale: oB,
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
        },
        "Cave Golem": GB,
        "Draugr Zombie": {
          ...kB,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": kB,
        "Frost Golem": GB,
        "Frost Zombie": {
          ...kB,
          defaultPose: "zombie"
        },
        "Frost Skeleton": kB,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: TB.f.uq,
            height: TB.f.fq
          },
          hitBoxDimensions: {
            width: TB.f.uq + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Wv: .5,
          bIB: !1
        },
        Wolf: cB,
        Bear: nB,
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
          Wv: .5,
          bIB: !1
        },
        Stag: hB,
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
          Wv: .5,
          bIB: !1
        },
        Gorilla: zB,
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
          Wv: .5,
          bIB: !1
        },
        "Draugr Huntress": kB,
        "Magma Golem": GB,
        "Spirit Golem": GB,
        "Spirit Wolf": cB,
        "Spirit Bear": nB,
        "Spirit Stag": hB,
        "Spirit Gorilla": zB,
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: TB.f.uq,
            height: TB.f.fq
          },
          hitBoxDimensions: {
            width: TB.f.uq + .4,
            height: TB.f.fq + .6
          },
          eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
          rideHeight: TB.f.fq - .1,
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: TB.f.uq,
            height: TB.f.fq
          },
          hitBoxDimensions: {
            width: TB.f.uq + .4,
            height: TB.f.fq + .6
          },
          eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
          rideHeight: TB.f.fq - .1,
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
        },
        Zombie: {
          ...kB,
          defaultPose: "zombie"
        },
        Skeleton: kB,
        Mummy: {
          ...kB,
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
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
          Wv: .5,
          bIB: !1
        },
        "Iron Guardian": vB,
        "Gold Guardian": vB,
        "Diamond Guardian": vB,
        "Moonstone Guardian": vB,
        "Iron Goofy Golem": vB,
        "Gold Goofy Golem": vB,
        "Diamond Goofy Golem": vB,
        "Moonstone Goofy Golem": vB,
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
          Wv: .5,
          bIB: !1
        }
      };

    function NB(BB) {
      return FB[BB]
    }
  },
  37093: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    const TB = {
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
  37710: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(364),
      JB = ZB.n(TB),
      oB = ZB(1956);
    let GB;
    var vB, kB, cB, nB, hB, zB, FB, NB, gB;
    const qB = [227, 0, 1, 8, 106, "a", "i", "g", "e", 151, 4, 255, "length", 178, 2, 3, "undefined", void 0, 65, 133, 54, 246, 63, 6, "fromCodePoint", 7, 12, "push", "b", 36, 189, 91, 212, 8191, 88, 13, 14, 70, 97, 164, 172, 5, "f", 131, 209, 76, 147, "d", 102, 114, 115, 116, null, 110, 111, 112, 113, 117, 118, 119, 107, 108, 109, 125, 126, 127, 128, "j", "c", 9, "mo", 196, 44, 176, 139, 137, 226, 210, 81, 52, 211, 195, 50, 239, "h", 61, 132, 16, 512, 48, 17, 27, 167, 15, 101, 163, 1023, 31, 18, 32, 188, 24, 10, 19, 171, 11, 64, 65535, 68, 55, 182, 152, !1, "on"];

    function yB(...BB) {
      return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
        for (aB(BB[qB[12]] = qB[2], BB[qB[5]] = 'D9jAfsgXPLpFaoOQbiBNlMVcUKtJWrqhkSeC|YEm}=TuZ7,@H?G~n`/Rv^%5dI_:;<6#!+y2xw[>.{z183*"(0]$)4&', BB[-qB[0]] = "" + (BB[qB[1]] || ""), BB[-qB[4]] = BB[-qB[0]].length, BB[qB[10]] = [], BB[qB[8]] = qB[1], BB[-qB[9]] = qB[1], BB[qB[7]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[-qB[4]]; BB[qB[3]]++)
          if (BB[qB[6]] = BB[qB[5]].indexOf(BB[-qB[0]][BB[qB[3]]]), BB[qB[6]] !== -qB[2])
            if (BB[qB[7]] < qB[1]) BB[qB[7]] = BB[qB[6]];
            else {
              aB(BB[qB[7]] += BB[qB[6]] * qB[31], BB[qB[8]] |= BB[qB[7]] << BB[-qB[9]], BB[-qB[9]] += (BB[qB[7]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
              do {
                aB(BB[qB[10]].push(BB[qB[8]] & qB[11]), BB[qB[8]] >>= qB[3], BB[-qB[9]] -= qB[3])
              } while (BB[-qB[9]] > qB[25]);
              BB[qB[7]] = -qB[2]
            } return BB[qB[7]] > -qB[2] && BB[qB[10]].push((BB[qB[8]] | BB[qB[7]] << BB[-qB[9]]) & qB[11]), UB(BB[qB[10]])
      }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
    }

    function UB(BB) {
      return typeof nB !== qB[16] && nB ? (new nB).decode(new hB(BB)) : typeof zB !== qB[16] && zB ? zB.from(BB).toString("utf-8") : gB(BB)
    }

    function WB(...BB) {
      if (BB[qB[12]] = qB[15], BB[qB[1]] === function(...BB) {
          return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
            for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = ']<8[);157$0.x3,d=gtWBonKFQmJAVrNq%^:}y4/MOU@`9{_#l*CTHh|~"YPXzfwD!>vi2bsuajI(+?ZScEp6LRkGe&', BB[qB[14]] = "" + (BB[qB[1]] || ""), BB[qB[29]] = BB[qB[14]].length, BB[-qB[37]] = [], BB[qB[32]] = qB[1], BB[qB[23]] = qB[1], BB[-qB[30]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[qB[29]]; BB[qB[3]]++)
              if (BB[qB[6]] = BB[qB[2]].indexOf(BB[qB[14]][BB[qB[3]]]), BB[qB[6]] !== -qB[2])
                if (BB[-qB[30]] < qB[1]) BB[-qB[30]] = BB[qB[6]];
                else {
                  aB(BB[-qB[30]] += BB[qB[6]] * qB[31], BB[qB[32]] |= BB[-qB[30]] << BB[qB[23]], BB[qB[23]] += (BB[-qB[30]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                  do {
                    aB(BB[-qB[37]].push(BB[qB[32]] & qB[11]), BB[qB[32]] >>= qB[3], BB[qB[23]] -= qB[3])
                  } while (BB[qB[23]] > qB[25]);
                  BB[-qB[30]] = -qB[2]
                } return BB[-qB[30]] > -qB[2] && BB[-qB[37]].push((BB[qB[32]] | BB[-qB[30]] << BB[qB[23]]) & qB[11]), UB(BB[-qB[37]])
          }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
        }(96)) return BB[qB[2]] + BB[qB[14]]
    }

    function dB() {}
    aB(vB = {}, kB = ["T<^~G~o9AacRlA", 'c}Pq2``@=<"Psd3}lkVXJ}V]8BdM3|5cNkGk@>{9&<CAV3FKs!_R33rC"a/.9', "8WLJ!e1^w<6B}54Wj:6P9m3=DL,R9", '.Oek_%/,@a!Cobxh//gS,{r=VNOoyoJi2F7h$"~9', "lkXS4E01D6BxpE9U?/X/J", '"O=qK^6[xl[9H5,}^~9g"3?:;aZU.2Lh/eHLdmA:OBR?vQQJ]7/h~m`9@au', "Vk$LKw0XX", 'Z~Uz1[d%N/H6DQ"=Afi>6`(a*N%5!Jyhsd~`Q^ln=l@w5*t=^5ap', "ruUggdo`g;`", 'yiH?fRHB<^cA"j#KQubqjH79qM4|"O^eN,1L', "|r&~g_lPGa$aWJ)V", "D,HJ9`g]ka9Y(QGeGh5kJE!8HB[fa2Tty![r;,^c?aqx]KGm/HfX0+;]jdv", "L,jJ`m{r*d]BCj$b", "Hl7R?>b,UoeMKf4C=[drh/D", "{~]?D,?@,`k.`K)C*5I.S!JCoB_v/ILK.<o.{Hka+/_n,IfqG/vL", "|rj>7!9Nn^A1k2fE%ODzs+;%i6JX3d7m]H+Gs1C@;B0{9", "!7oh2[2Xd<h.~%CY=~ahDdgU?/1?s|XB^7=qfxD", '7_^PfH(}:v"[dH(}|tDz++Q`:`&#abqcT!:Wuvr=}<%M5O_c', "9d}qFGD", "N2tJsdw9", '_WvLv*Mr`Ni+u"XKC[~kk/=CYN_W1yICs!$WS8YX1aqiFOol?D', ":iW[(GN@Z`cgFE0CE!h/eIX`:Q19BsgYqY?J)SWaXRDx9", 'dODLGY.aw%?_.".mMtqXt^[U";cA`bLES~_LR:Un4_$ka5vemaZrL1D', '!i5Pd1SXu<}wG%~=.ij~;REnNN:5;5hc?u%~|!Taw_Og("_qHej', 'J/`XF"T8co', 'I_x~b_"oqMmCUA.KzO2n8.:+Kig*y?ZN4T@fv*0^9Q', "VdB{^~`X%5`+;Q%rW9", ":_R?9xo@fL$#~Ekq8ha{e}x%eL[[}bOl!Y.rl}F`@d*F_?Tt~lcL<xD", '/2VRL+`=IOhi|"&|)<Z[xd;8j/~8:EhTn^$wg]D', "RlZr~mxBH`a>Fjzm?YJkl", "/![r$5OUf", '4_1wr@`rl^be]+sN"msX4SoK9aMxR*lesdKz1EQXf', "R<B{+1i@@:B>mOITvD", "SAFr.H6ai6<ye?kUhQXSoHNo?L+Q3dWcZ}p>s`5@|^YWbJyB72sn*.UnA", "U~I.z[+X<Lw8(dshUdjku/f|d`,hGo6he~S~a[FKnLPIhj", "6TFx>[ynk^k19KRrut8LW", "Frhnb2YX5<hnm%@Ja,NpB^vnDd9o&+cCQah?0nD", "@h^/z.Fow<Bq=bce=^[{K", "_A8?$S&UQaTnyod=iuLq40rCkMB1>5|UBkOR[^H}T_Xq`dCYgtjkrwI:Hajj9", "qcG~v:H,y;Dxq*ztW/?xZI_!u<1Q.Jqc!w;w=CD", "egJ{tw/!T_rl*?CYRe(r@I&}Z5jgFtkq{D", 'G^oR=>7XpOjJ:E~J[!Rn>EpBHd(#1"Kcx/T~w|59bM3Bwx9Uq,UJSC=Nhd`', "p2mW*7&})%!k9", "/<F{7vOUs", "5HNpA_.n>lVRjYR==aRLO[V8y%I:OsomJc7RqzD8qB?v_o+Kh9", "R!Cp,:?>K<eOT?4ct!$w#H^9", "?h.[Y?~=qMh.|b9qYiDgT>o=lNuH/KqcZhNr;|(as", "}gB~L.F=*^0:ZJDc<Hr./:Uqui)yy%*e9d1fS/yg@dMREK;i1Oj", "Q,,.Wn[eoO?5YxBeIejk@y/jo6R8ZJ&TTYzX", "^iNksdeU[_Ry#OvT2AMRxRWUALR6hO9cma7[+`%}>_f%EIZm+lP/o", "z<a[qz+=W<(swfsNtkK~mCMXvl/8|2yYk~WrUz#^lLd:vQ!K//MW[H}8^i", "D,ywY!%,5lhn)A!B5_/f", "R^;Lq0:9", "Uc5`7{S39Qi+jKaKN,Hg", "R/*rk!`=X%E", "dLLq%%],:`y:JtmEh^Onu~B%?:bH9", "H21Ld1ynQ6GBCtV=e^qf", ';_VRL_`c/oWp;Q9q"lg.K.J=~a(P8A', '8Y_ho"M+v%eJ}A;T=~?xK^eqp_?C<|dclL!s', '5i"s9]<9z5(|PA8tJ2=g^x#cL%i~CjAKbuCxDd7Cpl^X?fo', 'rdjJE09K(/bgGY~=~HqW#`Sru_YR}2jUBQ[~3S^@+N"yWbrq5Lgh+HaB{O', "J,~rE/r=hQ5BOIKW.F.[&5j|~L5FRy+U9^{ht059", "J,v~xdXNW5MRsbolU!=J>^@C&F#kFjbm~h5P", "I/0n!|jqVo.k@yGen77fUn],,:zV%K;iCaBJe})U><a1~JrcD:OLV2D", "K<zLve1r}%FRGo$V0<=JGyCrJlv8yKSUI5wg.[r@@v][&jhY&_`Wt", "f!UgfeK@hQV.IKhT&`W{n%2^gNa%9", '3~(s[3F+zB,ncEDu"h8/_ehXBQP~EK2hrYD/?Yp,%5XotYO', "?/I[q/L`{PRnCjc=%<+f", "hL/W.R;B<L/?bJ<|/OF{:[39", "Y^cg7>#+NNp>yOdTBB|{kzFKE;RC9bp", "#iGkm!b%!N{|cEJ=1YXnbn.,]%Wiix*};H</k2%Bba$kob$ei:6{rnU|k6^n9", "Sr;L13UnIvjq;Jkrqu,hgHCNpO:M#yDBFYNkTwFK?am13f`}", "gCxwTv3^@BeM9", "c,YW6H@^&iDqFO&c", '0mLzt/Nod5%{_o(ekdynR(}U</qp*??Jk~U/J0>:J5k+#"M}!TkwJ', 'z!Uzg1}naOUJ|Aqc7<0W^xp,dvw,6+sYz<X/i3(][O49jY;UIh"`N', "la*k!daj", "Vguk}CaP9Qc1UJhqzy!tU}lUoO/yh@^=R}xgoHGqrM]^esguK,?PczjUA", '8h{Gs`w:f/N%b"|UCYp~l+Ao?/^{0UkT/LH?Y0KCnLk_Z5.NE<mqo', "6HLJT!l]L<IF2%b}y~uxZIZ;5F", "{eK/G?i`P<C.?f!K6TMpX[D", "kd+tTvD", '2Fa[>"5=PR~wF*ZN;AsGaHBUH:m', 'Xf|[:,CoS/8K}"Sh,i1.jxWB7O3:HQBmTrVn2eA>0oe', "{~$W$@Z%B^!y[+(eGD", ">hyX.[^rW_}Ahj", "=}~k3_K@,M", ')_?Pjd"rIBMpm%1mW2h/"G]U=lk1IY7mD:t{%,B%s;ee7f', "_H|R3^b%s", "`~=JI~D", "6_`pt5&!^ia%$y3m*5RfH>:cA", ",gnr?>>o%5&yBt3m=Huk{[HjZ<.?]?~=#D", '@gzWr"F9uv;nu%vTYuLgb|o=*^hR9', "MtU?1E$iPolRZA6h;_t>b39oy%55Eo`eSu.`a+<CBd}H(AtrN/MX~~|[g", "72r[xdyUl/T_/o?t_<yRw|L`IPPl<H@JaBCxW", "mt!tu?$i{OsoRO8J{lA", "Fhd1=sO<", "6~Eh{3lj", "4~*5+B2N", "qEXW", '"7*W`zY', "q~Ao", "09RPL3=", "FqmWB0sO", "8qV:HJsO", "qqhW", "Fq|o?Y<O", "Iqu0s05O", "j!|on$}O", ">+1o5", "Fq|os05O", "j!mW8c1O", "<)Qr>JFO", "cjQ>>$<O", "3K7>foFO", "~KJ0oZ5O", ":!oa^|9O", "])V:4c5O", ">EJ0Lo[b", '6pp>"', "%qmW", "hq|a*", ")+]>%", ":iUKm}CO", '7LkP"', "])K>;DBO", ">PKr%J=", '])K>"$x%~*', ">Lso_$7*02", "A,Krqa*ZV", '])K>"$8O', "j!Q>n0+b", ":!t>SciO", "%EJ0Lo=", '!2"Q', "O?<|", "9,u0", "3:<|", "CzA/[", "zki0", "r)LQ", "uLtr", "Hq1o$Z)O", "(@P#Pz_5", "!{rP]D|5", 'KBmP_Rc|x0QC$/z3sE;AUUZ}qlLrf[z3qJY.qsK2j8rM#asB[Bg"A', "KBmP_Rc|x0QC$/z3sE;AUUZ}qlLrf[z3C6H.44@5s_Q,tY$d9^", "U6Smbq]X4MrWc<Y^^6[n(~bv`J7jBbo(;$}j8", "hWYv", "begWC6xO", "8s30ZZsO", "tP{r", "w)kP", "~+K>w|9O", "7a{r", "8+{>Y01O", "+Ek;+cBO", "f~5WcZ5O", "U93uSc=", '"+)R7$Pb', ",VQr", "5P#jpB?;GhkDBg]B", "Ct>e,B:W681Vf&Y`", ";t?s3`B;leG!<g6B", "5:u3Rx=W8,v7Vg_6", "Gha3#Z8rEDRR9s;", "P/Vtb&gu", "a8wlUEsF", "hXbh[@HF", "*c#`I", "hXbh{g3Y", "~}wPS", "/Z1j4I.Q42*F_X", "))<0g+XD@FwdKX", "gJ#5*JXmu[w6et", "*z>VNVo}$meaMj", "I2dHC.($I9UaxM", "h+[ehp>vH5=", "6vzZSwI_", "Eizg", "*4O9C{:_", "+0A[7I4z", "Q#GBYnT", "/bpuk<4_", "}>zZDj+_", "}`*iZd6_", "Hiqg3KA", "?S*i6Yw2", "<qrO5", "DKJ0oZ5O", "8+{>toXO"]), aB(cB = function(...BB) {
      aB(BB[qB[12]] = qB[1], BB[qB[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[qB[13]] = qB[17], BB[qB[14]] = []);
      try {
        aB(BB[qB[13]] = Object, BB[qB[14]][qB[27]]("".__proto__.constructor.name))
      } catch (kB) {}
      BB: for (BB[qB[15]] = qB[1]; BB[qB[15]] < BB[qB[5]][qB[12]]; BB[qB[15]]++) try {
        for (BB[qB[13]] = BB[qB[5]][BB[qB[15]]](), BB[qB[10]] = qB[1]; BB[qB[10]] < BB[qB[14]][qB[12]]; BB[qB[10]]++)
          if (typeof BB[qB[13]][BB[qB[14]][BB[qB[10]]]] === qB[16]) continue BB;
        return BB[qB[13]]
      } catch (kB) {}
      return BB[qB[13]] || this
    }() || {}, nB = cB.TextDecoder, hB = cB.Uint8Array, zB = cB.UN, FB = cB.String || String, NB = cB.Array || Array, gB = function(...BB) {
      return aB(BB[qB[12]] = qB[1], BB[qB[28]] = new NB(qB[66]), BB[qB[2]] = FB[qB[24]] || FB.fromCharCode, BB[-qB[18]] = []),
        function(...IB) {
          for (aB(IB[qB[12]] = qB[2], IB[qB[5]] = qB[17], IB[qB[21]] = qB[17], IB[-qB[20]] = IB[qB[1]][qB[12]], BB[-qB[18]][qB[12]] = qB[1]), IB[qB[19]] = qB[1]; IB[qB[19]] < IB[-qB[20]];) aB(IB[qB[21]] = IB[qB[1]][IB[qB[19]]++], IB[qB[21]] <= qB[65] ? IB[qB[5]] = IB[qB[21]] : IB[qB[21]] <= 223 ? IB[qB[5]] = (IB[qB[21]] & qB[97]) << qB[23] | IB[qB[1]][IB[qB[19]]++] & qB[22] : IB[qB[21]] <= qB[83] ? IB[qB[5]] = (IB[qB[21]] & qB[93]) << qB[26] | (IB[qB[1]][IB[qB[19]]++] & qB[22]) << qB[23] | IB[qB[1]][IB[qB[19]]++] & qB[22] : FB[qB[24]] ? IB[qB[5]] = (IB[qB[21]] & qB[25]) << qB[98] | (IB[qB[1]][IB[qB[19]]++] & qB[22]) << qB[26] | (IB[qB[1]][IB[qB[19]]++] & qB[22]) << qB[23] | IB[qB[1]][IB[qB[19]]++] & qB[22] : (IB[qB[5]] = qB[22], IB[qB[19]] += qB[15]), BB[-qB[18]][qB[27]](BB[qB[28]][IB[qB[5]]] || (BB[qB[28]][IB[qB[5]]] = BB[qB[2]](IB[qB[5]]))));
          return BB[-qB[18]].join("")
        }
    }());
    const CB = JB()[yB(qB[38])](),
      QB = JB()[yB(qB[38])](),
      sB = JB()[yB(qB[38])](),
      wB = JB()[yB(qB[38])](),
      OB = JB()[yB(qB[38])](),
      YB = JB()[yB(qB[38])](),
      iB = JB()[yB(qB[38])](),
      pB = (...BB) => {
        function IB(...BB) {
          return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
            for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = 'YsN=fx)HW7oDgKyG1LSPeAamJQIq,/`w5&2.94;@v06~3#?+!]$*}_u^{8<%:pd>"[FMBb(zhkETRZCjlUVXcrOtni|', BB[qB[14]] = "" + (BB[qB[1]] || ""), BB[-qB[39]] = BB[qB[14]].length, BB[qB[10]] = [], BB[qB[41]] = qB[1], BB[qB[42]] = qB[1], BB[qB[22]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[-qB[39]]; BB[qB[3]]++)
              if (BB[qB[40]] = BB[qB[2]].indexOf(BB[qB[14]][BB[qB[3]]]), BB[qB[40]] !== -qB[2])
                if (BB[qB[22]] < qB[1]) BB[qB[22]] = BB[qB[40]];
                else {
                  aB(BB[qB[22]] += BB[qB[40]] * qB[31], BB[qB[41]] |= BB[qB[22]] << BB[qB[42]], BB[qB[42]] += (BB[qB[22]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                  do {
                    aB(BB[qB[10]].push(BB[qB[41]] & qB[11]), BB[qB[41]] >>= qB[3], BB[qB[42]] -= qB[3])
                  } while (BB[qB[42]] > qB[25]);
                  BB[qB[22]] = -qB[2]
                } return BB[qB[22]] > -qB[2] && BB[qB[10]].push((BB[qB[41]] | BB[qB[22]] << BB[qB[42]]) & qB[11]), UB(BB[qB[10]])
          }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
        }
        BB[qB[12]] = qB[15];
        const ZB = YB;
        return JB()[IB(98) + IB(99)](ZB, BB[qB[14]]), JB()[IB(100)](BB[qB[1]], ZB, JB()[IB(qB[94])](ZB, BB[qB[2]]))
      };

    function aB() {
      aB = function() {}
    }
    GB = (BB, IB, ZB, TB, GB, cB, nB, hB) => {
      function zB(BB) {
        return typeof vB[BB] === qB[16] ? vB[BB] = function(...BB) {
          for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = '=bOpehVTrPWGsAIqB2F*1m_HX")75?%u>49]8~<v!S@+^jCwxN}K`gi:/E&tLyf,kl#Q|D3JR;a[0o$(cZ6{MYdz.nU', BB[-qB[43]] = "" + (BB[qB[1]] || ""), BB[qB[15]] = BB[-qB[43]].length, BB[qB[47]] = [], BB[-qB[45]] = qB[1], BB[qB[46]] = qB[1], BB[qB[44]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[qB[15]]; BB[qB[3]]++)
            if (BB[qB[6]] = BB[qB[2]].indexOf(BB[-qB[43]][BB[qB[3]]]), BB[qB[6]] !== -qB[2])
              if (BB[qB[44]] < qB[1]) BB[qB[44]] = BB[qB[6]];
              else {
                aB(BB[qB[44]] += BB[qB[6]] * qB[31], BB[-qB[45]] |= BB[qB[44]] << BB[qB[46]], BB[qB[46]] += (BB[qB[44]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                do {
                  aB(BB[qB[47]].push(BB[-qB[45]] & qB[11]), BB[-qB[45]] >>= qB[3], BB[qB[46]] -= qB[3])
                } while (BB[qB[46]] > qB[25]);
                BB[qB[44]] = -qB[2]
              } return BB[qB[44]] > -qB[2] && BB[qB[47]].push((BB[-qB[45]] | BB[qB[44]] << BB[qB[46]]) & qB[11]), UB(BB[qB[47]])
        }(kB[BB]) : vB[BB]
      }
      const FB = BB[zB(qB[48])][zB(103) + zB(104) + zB(105)](IB);
      let NB = BB[zB(qB[48])][zB(qB[4]) + zB(qB[60]) + zB(qB[61]) + zB(qB[62])](FB);
      const gB = NB === qB[52] ? BB[zB(qB[48])][zB(qB[53]) + zB(qB[54]) + zB(qB[55]) + zB(qB[56])](IB, zB(qB[49]) + zB(qB[50]) + zB(qB[51]) + qB[8]) : NB[zB(qB[49]) + zB(qB[50]) + zB(qB[51]) + qB[8]],
        yB = NB === qB[52] ? BB[zB(qB[48])][zB(qB[53]) + zB(qB[54]) + zB(qB[55]) + zB(qB[56])](IB, zB(qB[57]) + zB(qB[58]) + zB(qB[59])) : NB[zB(qB[57]) + zB(qB[58]) + zB(qB[59])];
      aB(JB()[zB(120)](CB, qB[1], qB[1], cB), JB().ck(CB, CB, JB()[zB(121)], TB.heading), JB()[zB(122)](iB, GB.zq), iB[qB[2]] = qB[1]);
      const YB = ZB[zB(123) + zB(124)]();
      NB = BB[zB(qB[48])][zB(qB[4]) + zB(qB[60]) + zB(qB[61]) + zB(qB[62])](FB);
      let HB = NB === qB[52] ? BB[zB(qB[48])][zB(qB[53]) + zB(qB[54]) + zB(qB[55]) + zB(qB[56])](IB, zB(qB[63]) + zB(qB[64])) : NB[zB(qB[63]) + zB(qB[64])];
      if (!YB && JB()[qB[70]](iB) && (NB === qB[52] ? BB[zB(qB[48])][zB(qB[53]) + zB(qB[54]) + zB(qB[55]) + zB(qB[56])](IB, zB(qB[65]) + zB(qB[66]) + zB(129)) : NB[zB(130) + zB(qB[43]) + zB(qB[86]) + zB(qB[19])])) {
        function mB(...BB) {
          for (aB(BB[qB[12]] = qB[2], BB[qB[5]] = 'HzctkG.MQ|0E)nJ?Dw*`ou~OY+:9xr@!N7RZVjlq%;d,P}#35>/gsiepCh("2[y{<6=1FaKUmTILBWAXSb_&^v]$48f', BB[qB[41]] = "" + (BB[qB[1]] || ""), BB[qB[68]] = BB[qB[41]].length, BB[qB[10]] = [], BB[qB[7]] = qB[1], BB[qB[23]] = qB[1], BB[qB[25]] = -qB[2]), BB[qB[67]] = qB[1]; BB[qB[67]] < BB[qB[68]]; BB[qB[67]]++)
            if (BB[qB[69]] = BB[qB[5]].indexOf(BB[qB[41]][BB[qB[67]]]), BB[qB[69]] !== -qB[2])
              if (BB[qB[25]] < qB[1]) BB[qB[25]] = BB[qB[69]];
              else {
                aB(BB[qB[25]] += BB[qB[69]] * qB[31], BB[qB[7]] |= BB[qB[25]] << BB[qB[23]], BB[qB[23]] += (BB[qB[25]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                do {
                  aB(BB[qB[10]].push(BB[qB[7]] & qB[11]), BB[qB[7]] >>= qB[3], BB[qB[23]] -= qB[3])
                } while (BB[qB[23]] > qB[25]);
                BB[qB[25]] = -qB[2]
              } return BB[qB[25]] > -qB[2] && BB[qB[10]].push((BB[qB[7]] | BB[qB[25]] << BB[qB[23]]) & qB[11]), UB(BB[qB[10]])
        }

        function XB(...BB) {
          return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = mB(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
        }
        aB(pB(QB, CB, iB), pB(sB, iB, CB), JB()[XB(134)](wB, iB, sB));
        const LB = JB()[XB(135)](iB),
          eB = JB()[XB(136)](CB, iB) / cB / LB,
          uB = Math[XB(qB[75])](eB, qB[1]) + qB[2];
        if (cB * cB < JB()[qB[70]](sB)) {
          function fB(...BB) {
            for (aB(BB[qB[12]] = qB[2], BB[-qB[72]] = 'bX*9)A%}j&/nY5KzL#my:=kCxR4P[qs|{TE]`$;g^SI2(M"7wa~<GvBOuQW,@e!_rf8N6tdo0hiUD.l>c31HJ?+FVZp', BB[qB[71]] = "" + (BB[qB[1]] || ""), BB[qB[15]] = BB[qB[71]].length, BB[qB[47]] = [], BB[qB[41]] = qB[1], BB[qB[23]] = qB[1], BB[-qB[74]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[qB[15]]; BB[qB[3]]++)
              if (BB[-qB[73]] = BB[-qB[72]].indexOf(BB[qB[71]][BB[qB[3]]]), BB[-qB[73]] !== -qB[2])
                if (BB[-qB[74]] < qB[1]) BB[-qB[74]] = BB[-qB[73]];
                else {
                  aB(BB[-qB[74]] += BB[-qB[73]] * qB[31], BB[qB[41]] |= BB[-qB[74]] << BB[qB[23]], BB[qB[23]] += (BB[-qB[74]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                  do {
                    aB(BB[qB[47]].push(BB[qB[41]] & qB[11]), BB[qB[41]] >>= qB[3], BB[qB[23]] -= qB[3])
                  } while (BB[qB[23]] > qB[25]);
                  BB[-qB[74]] = -qB[2]
                } return BB[-qB[74]] > -qB[2] && BB[qB[47]].push((BB[qB[41]] | BB[-qB[74]] << BB[qB[23]]) & qB[11]), UB(BB[qB[47]])
          }

          function lB(...BB) {
            return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = fB(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
          }
          JB()[lB(138)](CB, CB, sB, uB)
        }
        aB(HB = (0, oB.C)(HB, 1, Math[XB(qB[75])](qB[2], Math[XB(qB[74])](qB[1], -eB, qB[2] - LB / cB))), JB()[XB(140)](CB, CB, wB))
      }
      const MB = OB;
      aB(JB()[zB(141)](MB, CB, iB), MB[qB[2]] = qB[1]);
      let jB = JB()[zB(142)](MB);
      if (!YB) {
        function AB(...BB) {
          for (aB(BB[qB[12]] = qB[2], BB[qB[77]] = '^15=)0#+:.A3ot6E/KXL_Nsu|v(ywOi"P$>zd*SJB9fh&MCV![ar?2gFH{W]@;`x8lpk~b,jYGcqRDU<e4Zm%T}nQ7I', BB[-qB[55]] = "" + (BB[qB[1]] || ""), BB[-qB[76]] = BB[-qB[55]].length, BB[qB[10]] = [], BB[qB[8]] = qB[1], BB[qB[23]] = qB[1], BB[qB[7]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[-qB[76]]; BB[qB[3]]++)
            if (BB[qB[78]] = BB[qB[77]].indexOf(BB[-qB[55]][BB[qB[3]]]), BB[qB[78]] !== -qB[2])
              if (BB[qB[7]] < qB[1]) BB[qB[7]] = BB[qB[78]];
              else {
                aB(BB[qB[7]] += BB[qB[78]] * qB[31], BB[qB[8]] |= BB[qB[7]] << BB[qB[23]], BB[qB[23]] += (BB[qB[7]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                do {
                  aB(BB[qB[10]].push(BB[qB[8]] & qB[11]), BB[qB[8]] >>= qB[3], BB[qB[23]] -= qB[3])
                } while (BB[qB[23]] > qB[25]);
                BB[qB[7]] = -qB[2]
              } return BB[qB[7]] > -qB[2] && BB[qB[10]].push((BB[qB[8]] | BB[qB[7]] << BB[qB[23]]) & qB[11]), UB(BB[qB[10]])
        }

        function tB(...BB) {
          return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = AB(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
        }

        function bB(...BB) {
          BB[qB[12]] = qB[1]
        }
        tB(143) + "p" in dB && bB(), jB *= HB
      }
      const PB = nB[zB(149) + zB(150) + zB(qB[9])],
        RB = PB ? Math[zB(qB[111])](PB, jB) : jB;
      JB()[zB(153) + zB(154)](MB, MB);
      const rB = hB !== qB[52] && void 0 !== hB ? hB : nB[zB(155) + zB(156) + zB(157) + zB(158)];
      if (RB > qB[1]) {
        function xB(BB) {
          var IB, ZB, TB, JB, oB, GB, vB;
          for (aB(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = qB[1], oB = qB[1], GB = -qB[2]), vB = qB[1]; vB < ZB; vB++) {
            var kB = 'A2_$8P1?giu,lpBbLQCT+)r0:5>9{/3OZfkG6V4cIM|v&tSJWw7qF}x@s^DU[#aEH=]X`!~K%d";(j<y*m.znYNhReo'.indexOf(IB[vB]);
            if (kB !== -qB[2])
              if (GB < qB[1]) GB = kB;
              else {
                aB(GB += kB * qB[31], JB |= GB << oB, oB += (GB & qB[33]) > qB[34] ? qB[35] : qB[36]);
                do {
                  aB(TB.push(JB & qB[11]), JB >>= qB[3], oB -= qB[3])
                } while (oB > qB[25]);
                GB = -qB[2]
              }
          }
          return GB > -qB[2] && TB.push((JB | GB << oB) & qB[11]), UB(TB)
        }

        function EB(...BB) {
          return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = xB(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
        }

        function DB(...BB) {
          aB(BB[qB[12]] = qB[1], BB[qB[5]] = function(...BB) {
            function IB(...BB) {
              return BB[qB[12]] = qB[14], oB(TB(GB(BB[qB[1]]), GB(BB[qB[2]])))
            }

            function ZB(...BB) {
              return BB[qB[12]] = qB[15],
                function(...BB) {
                  var IB, ZB, TB, JB;
                  for (aB(BB[qB[12]] = qB[14], BB[qB[23]] = BB[qB[2]].length, BB[qB[15]] = Array()), BB[qB[10]] = Array(Math.ceil(BB[qB[1]].length / qB[14])), IB = qB[1]; IB < BB[qB[10]].length; IB++) BB[qB[10]][IB] = BB[qB[1]].charCodeAt(IB * qB[14]) << qB[3] | BB[qB[1]].charCodeAt(IB * qB[14] + qB[2]);
                  for (; BB[qB[10]].length > qB[1];) {
                    for (aB(JB = Array(), TB = qB[1]), IB = qB[1]; IB < BB[qB[10]].length; IB++) aB(TB = (TB << qB[87]) + BB[qB[10]][IB], ZB = Math.floor(TB / BB[qB[23]]), TB -= ZB * BB[qB[23]]), (JB.length > qB[1] || ZB > qB[1]) && (JB[JB.length] = ZB);
                    aB(BB[qB[15]][BB[qB[15]].length] = TB, BB[qB[10]] = JB)
                  }
                  for (BB[qB[41]] = "", IB = BB[qB[15]].length - qB[2]; IB >= qB[1]; IB--) BB[qB[41]] += BB[qB[2]].charAt(BB[qB[15]][IB]);
                  for (BB[qB[42]] = Math.ceil(BB[qB[1]].length * qB[3] / (Math.log(BB[qB[2]].length) / Math.log(qB[14]))), IB = BB[qB[41]].length; IB < BB[qB[42]]; IB++) BB[qB[41]] = BB[qB[2]][qB[1]] + BB[qB[41]];
                  return BB[qB[41]]
                }(TB(GB(BB[qB[1]]), GB(BB[qB[2]])), BB[qB[14]])
            }

            function TB(...BB) {
              BB[qB[12]] = qB[14], BB[qB[5]] = cB(BB[qB[1]]), BB[qB[5]].length > qB[87] && (BB[qB[5]] = QB(BB[qB[5]], BB[qB[1]].length * qB[3]));
              var IB = Array(qB[87]),
                ZB = Array(qB[87]);
              for (BB[qB[28]] = qB[1]; BB[qB[28]] < qB[87]; BB[qB[28]]++) aB(IB[BB[qB[28]]] = 909522486 ^ BB[qB[5]][BB[qB[28]]], ZB[BB[qB[28]]] = 1549556828 ^ BB[qB[5]][BB[qB[28]]]);
              return BB[qB[68]] = QB(IB.concat(cB(BB[qB[2]])), qB[88] + BB[qB[2]].length * qB[3]), nB(QB(ZB.concat(BB[qB[68]]), WB(function(...BB) {
                return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
                  for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = 'fueETZtRpFMcOUIVbXmjLQSnPrNAD]<,iz*62`so0gB5^1=%(~3v!}/9@"+w)G#?$7|;8H4&_>k[xCKylJWhqY.:da{', BB[qB[83]] = "" + (BB[qB[1]] || ""), BB[qB[68]] = BB[qB[83]].length, BB[qB[47]] = [], BB[qB[41]] = qB[1], BB[qB[23]] = qB[1], BB[-qB[61]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[qB[68]]; BB[qB[3]]++)
                    if (BB[qB[86]] = BB[qB[2]].indexOf(BB[qB[83]][BB[qB[3]]]), BB[qB[86]] !== -qB[2])
                      if (BB[-qB[61]] < qB[1]) BB[-qB[61]] = BB[qB[86]];
                      else {
                        aB(BB[-qB[61]] += BB[qB[86]] * qB[31], BB[qB[41]] |= BB[-qB[61]] << BB[qB[23]], BB[qB[23]] += (BB[-qB[61]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                        do {
                          aB(BB[qB[47]].push(BB[qB[41]] & qB[11]), BB[qB[41]] >>= qB[3], BB[qB[23]] -= qB[3])
                        } while (BB[qB[23]] > qB[25]);
                        BB[-qB[61]] = -qB[2]
                      } return BB[-qB[61]] > -qB[2] && BB[qB[47]].push((BB[qB[41]] | BB[-qB[61]] << BB[qB[23]]) & qB[11]), UB(BB[qB[47]])
                }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
              }(166), qB[88], 256)))
            }

            function JB(IB) {
              var ZB, TB, JB, GB;

              function cB(...BB) {
                return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
                  for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = 'CFY9jndux#6c}T3s|IW<1zK./S0hq(]~aQ{2EfNRbH,>O@k)8oA`BP$ip?=+ZV7LUXDmgeJlMt4_G:y[&v;!w%^5r"*', BB[qB[28]] = "" + (BB[qB[1]] || ""), BB[qB[89]] = BB[qB[28]].length, BB[-qB[91]] = [], BB[qB[41]] = qB[1], BB[-qB[90]] = qB[1], BB[qB[25]] = -qB[2]), BB[qB[3]] = qB[1]; BB[qB[3]] < BB[qB[89]]; BB[qB[3]]++)
                    if (BB[qB[69]] = BB[qB[2]].indexOf(BB[qB[28]][BB[qB[3]]]), BB[qB[69]] !== -qB[2])
                      if (BB[qB[25]] < qB[1]) BB[qB[25]] = BB[qB[69]];
                      else {
                        aB(BB[qB[25]] += BB[qB[69]] * qB[31], BB[qB[41]] |= BB[qB[25]] << BB[-qB[90]], BB[-qB[90]] += (BB[qB[25]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                        do {
                          aB(BB[-qB[91]].push(BB[qB[41]] & qB[11]), BB[qB[41]] >>= qB[3], BB[-qB[90]] -= qB[3])
                        } while (BB[-qB[90]] > qB[25]);
                        BB[qB[25]] = -qB[2]
                      } return BB[qB[25]] > -qB[2] && BB[-qB[91]].push((BB[qB[41]] | BB[qB[25]] << BB[-qB[90]]) & qB[11]), UB(BB[-qB[91]])
                }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
              }
              try {
                BB[qB[28]]
              } catch (oB) {
                BB[qB[28]] = qB[1]
              }
              for (aB(ZB = BB[qB[28]] ? cB(qB[92]) + cB(168) + cB(169) : cB(qB[92]) + cB(170) + cB(qB[104]), TB = "", JB = void 0), GB = qB[1]; GB < IB.length; GB++) aB(JB = IB.charCodeAt(GB), TB += ZB.charAt(JB >>> qB[10] & qB[93]) + ZB.charAt(JB & qB[93]));
              return TB
            }

            function oB(...IB) {
              function TB(...BB) {
                return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
                  for (aB(BB[qB[12]] = qB[2], BB[-qB[38]] = 'wCMXtjZSilqTPDFoBUxmn9N=:(zL_Yd/]O{W<)pGQR*g7?yEIecv5$6H+2k@ur[f,4b!JaA&K|0hVs#>;}31."8^%~`', BB[-qB[59]] = "" + (BB[qB[1]] || ""), BB[qB[68]] = BB[-qB[59]].length, BB[qB[47]] = [], BB[qB[41]] = qB[1], BB[qB[23]] = qB[1], BB[qB[25]] = -qB[2]), BB[-qB[94]] = qB[1]; BB[-qB[94]] < BB[qB[68]]; BB[-qB[94]]++)
                    if (BB[qB[69]] = BB[-qB[38]].indexOf(BB[-qB[59]][BB[-qB[94]]]), BB[qB[69]] !== -qB[2])
                      if (BB[qB[25]] < qB[1]) BB[qB[25]] = BB[qB[69]];
                      else {
                        aB(BB[qB[25]] += BB[qB[69]] * qB[31], BB[qB[41]] |= BB[qB[25]] << BB[qB[23]], BB[qB[23]] += (BB[qB[25]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                        do {
                          aB(BB[qB[47]].push(BB[qB[41]] & qB[11]), BB[qB[41]] >>= qB[3], BB[qB[23]] -= qB[3])
                        } while (BB[qB[23]] > qB[25]);
                        BB[qB[25]] = -qB[2]
                      } return BB[qB[25]] > -qB[2] && BB[qB[47]].push((BB[qB[41]] | BB[qB[25]] << BB[qB[23]]) & qB[11]), UB(BB[qB[47]])
                }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
              }
              IB[qB[12]] = qB[2];
              try {
                BB[qB[2]]
              } catch (ZB) {
                BB[qB[2]] = ""
              }
              for (aB(IB[qB[5]] = TB(qB[40]) + TB(173) + TB(174) + TB(175) + TB(qB[73]) + TB(177), IB[qB[14]] = "", IB[qB[68]] = IB[qB[1]].length), IB[qB[19]] = qB[1]; IB[qB[19]] < IB[qB[68]]; IB[qB[19]] += qB[15])
                for (IB[qB[41]] = IB[qB[1]].charCodeAt(IB[qB[19]]) << qB[87] | (IB[qB[19]] + qB[2] < IB[qB[68]] ? IB[qB[1]].charCodeAt(IB[qB[19]] + qB[2]) << qB[3] : qB[1]) | (IB[qB[19]] + qB[14] < IB[qB[68]] ? IB[qB[1]].charCodeAt(IB[qB[19]] + qB[14]) : qB[1]), IB[-qB[23]] = qB[1]; IB[-qB[23]] < qB[10]; IB[-qB[23]]++) IB[qB[19]] * qB[3] + IB[-qB[23]] * qB[23] > IB[qB[1]].length * qB[3] ? IB[qB[14]] += BB[qB[2]] : IB[qB[14]] += IB[qB[5]].charAt(IB[qB[41]] >>> qB[23] * (qB[15] - IB[-qB[23]]) & qB[22]);
              return IB[qB[14]]
            }

            function GB(...BB) {
              var IB, ZB;
              for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = "", BB[qB[95]] = -qB[2]); ++BB[qB[95]] < BB[qB[1]].length;) aB(IB = BB[qB[1]].charCodeAt(BB[qB[95]]), ZB = BB[qB[95]] + qB[2] < BB[qB[1]].length ? BB[qB[1]].charCodeAt(BB[qB[95]] + qB[2]) : qB[1]), 55296 <= IB && IB <= 56319 && 56320 <= ZB && ZB <= 57343 && aB(IB = 65536 + ((IB & qB[96]) << qB[102]) + (ZB & qB[96]), BB[qB[95]]++), IB <= qB[65] ? BB[qB[2]] += String.fromCharCode(IB) : IB <= 2047 ? BB[qB[2]] += String.fromCharCode(192 | IB >>> qB[23] & qB[97], qB[66] | IB & qB[22]) : IB <= qB[107] ? BB[qB[2]] += String.fromCharCode(224 | IB >>> qB[26] & qB[93], qB[66] | IB >>> qB[23] & qB[22], qB[66] | IB & qB[22]) : IB <= 2097151 && (BB[qB[2]] += String.fromCharCode(240 | IB >>> qB[98] & qB[25], qB[66] | IB >>> qB[26] & qB[22], qB[66] | IB >>> qB[23] & qB[22], qB[66] | IB & qB[22]));
              return BB[qB[2]]
            }

            function cB(BB) {
              var IB, ZB = Array(BB.length >> qB[14]);
              for (IB = qB[1]; IB < ZB.length; IB++) ZB[IB] = qB[1];
              for (IB = qB[1]; IB < BB.length * qB[3]; IB += qB[3]) ZB[IB >> qB[41]] |= (BB.charCodeAt(IB / qB[3]) & qB[11]) << qB[101] - IB % qB[99];
              return ZB
            }

            function nB(...BB) {
              for (aB(BB[qB[12]] = qB[2], BB[-qB[100]] = ""), BB[qB[87]] = qB[1]; BB[qB[87]] < BB[qB[1]].length * qB[99]; BB[qB[87]] += qB[3]) BB[-qB[100]] += String.fromCharCode(BB[qB[1]][BB[qB[87]] >> qB[41]] >>> qB[101] - BB[qB[87]] % qB[99] & qB[11]);
              return BB[-qB[100]]
            }

            function hB(BB, IB) {
              return BB >>> IB | BB << qB[99] - IB
            }

            function zB(BB, IB) {
              return BB >>> IB
            }

            function FB(...BB) {
              return BB[qB[12]] = qB[15], BB[qB[1]] & BB[qB[2]] ^ ~BB[qB[1]] & BB[qB[14]]
            }

            function NB(BB, IB, ZB) {
              return BB & IB ^ BB & ZB ^ IB & ZB
            }

            function gB(BB) {
              return hB(BB, qB[14]) ^ hB(BB, qB[35]) ^ hB(BB, 22)
            }

            function yB(...BB) {
              return BB[qB[12]] = qB[2], hB(BB[qB[1]], qB[23]) ^ hB(BB[qB[1]], qB[105]) ^ hB(BB[qB[1]], 25)
            }

            function dB(BB) {
              return hB(BB, qB[25]) ^ hB(BB, qB[98]) ^ zB(BB, qB[15])
            }

            function CB(...BB) {
              return BB[qB[12]] = qB[2], hB(BB[qB[1]], qB[90]) ^ hB(BB[qB[1]], qB[103]) ^ zB(BB[qB[1]], qB[102])
            }

            function QB(...IB) {
              var ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, UB;
              for (aB(IB[qB[12]] = qB[14], IB[-qB[104]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), IB[qB[105]] = new Array(qB[106])), aB(IB[qB[1]][IB[qB[2]] >> qB[41]] |= qB[66] << qB[101] - IB[qB[2]] % qB[99], IB[qB[1]][(IB[qB[2]] + qB[106] >> qB[69] << qB[10]) + qB[93]] = IB[qB[2]]), nB = qB[1]; nB < IB[qB[1]].length; nB += qB[87]) {
                for (aB(ZB = IB[-qB[104]][qB[1]], TB = IB[-qB[104]][qB[2]], JB = IB[-qB[104]][qB[14]], oB = IB[-qB[104]][qB[15]], GB = IB[-qB[104]][qB[10]], vB = IB[-qB[104]][qB[41]], kB = IB[-qB[104]][qB[23]], cB = IB[-qB[104]][qB[25]]), hB = qB[1]; hB < qB[106]; hB++) aB(IB[qB[105]][hB] = hB < qB[87] ? IB[qB[1]][hB + nB] : sB(sB(sB(CB(IB[qB[105]][hB - qB[14]]), IB[qB[105]][hB - qB[25]]), dB(IB[qB[105]][hB - qB[93]])), IB[qB[105]][hB - qB[87]]), zB = sB(sB(sB(sB(cB, yB(GB)), FB(GB, vB, kB)), BB[qB[47]][hB]), IB[qB[105]][hB]), UB = sB(gB(ZB), NB(ZB, TB, JB)), cB = kB, kB = vB, vB = GB, GB = sB(oB, zB), oB = JB, JB = TB, TB = ZB, ZB = sB(zB, UB));
                aB(IB[-qB[104]][qB[1]] = sB(ZB, IB[-qB[104]][qB[1]]), IB[-qB[104]][qB[2]] = sB(TB, IB[-qB[104]][qB[2]]), IB[-qB[104]][qB[14]] = sB(JB, IB[-qB[104]][qB[14]]), IB[-qB[104]][qB[15]] = sB(oB, IB[-qB[104]][qB[15]]), IB[-qB[104]][qB[10]] = sB(GB, IB[-qB[104]][qB[10]]), IB[-qB[104]][qB[41]] = sB(vB, IB[-qB[104]][qB[41]]), IB[-qB[104]][qB[23]] = sB(kB, IB[-qB[104]][qB[23]]), IB[-qB[104]][qB[25]] = sB(cB, IB[-qB[104]][qB[25]]))
              }
              return IB[-qB[104]]
            }

            function sB(...BB) {
              return aB(BB[qB[12]] = qB[14], BB[qB[14]] = (BB[qB[1]] & qB[107]) + (BB[qB[2]] & qB[107]), BB[qB[28]] = (BB[qB[1]] >> qB[87]) + (BB[qB[2]] >> qB[87]) + (BB[qB[14]] >> qB[87])), BB[qB[28]] << qB[87] | BB[qB[14]] & qB[107]
            }
            return aB(BB[qB[12]] = qB[1], BB[qB[28]] = qB[1], BB[qB[2]] = ""), BB[qB[47]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...BB) {
                return BB[qB[12]] = qB[2], JB(function(...BB) {
                  return BB[qB[12]] = qB[2], nB(QB(cB(BB[qB[1]]), BB[qB[1]].length * qB[3]))
                }(GB(BB[qB[1]])))
              },
              b64: IB,
              any: ZB,
              hex_hmac: function(...BB) {
                return BB[qB[12]] = qB[14], JB(TB(GB(BB[qB[1]]), GB(BB[qB[2]])))
              },
              b64_hmac: IB,
              any_hmac: ZB
            }
          }(), console.log(BB[qB[5]]))
        }
        zB(159) + "K" in dB && DB();
        let KB = ZB[EB(qB[13]) + EB(179)] * rB;
        if (!YB) {
          function SB(...BB) {
            for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = 'T_z/!Ljyg>BuhpD5iZU2<XR;l70]G)9^[Ot+V#|Jro6ex:W{v&mA=,4E}*%kdqQb?.3K`~PsHf1MwSI(Yn@a$F"CN8c', BB[qB[108]] = "" + (BB[qB[1]] || ""), BB[qB[15]] = BB[qB[108]].length, BB[qB[47]] = [], BB[qB[41]] = qB[1], BB[qB[23]] = qB[1], BB[qB[7]] = -qB[2]), BB[qB[106]] = qB[1]; BB[qB[106]] < BB[qB[15]]; BB[qB[106]]++)
              if (BB[-qB[48]] = BB[qB[2]].indexOf(BB[qB[108]][BB[qB[106]]]), BB[-qB[48]] !== -qB[2])
                if (BB[qB[7]] < qB[1]) BB[qB[7]] = BB[-qB[48]];
                else {
                  aB(BB[qB[7]] += BB[-qB[48]] * qB[31], BB[qB[41]] |= BB[qB[7]] << BB[qB[23]], BB[qB[23]] += (BB[qB[7]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
                  do {
                    aB(BB[qB[47]].push(BB[qB[41]] & qB[11]), BB[qB[41]] >>= qB[3], BB[qB[23]] -= qB[3])
                  } while (BB[qB[23]] > qB[25]);
                  BB[qB[7]] = -qB[2]
                } return BB[qB[7]] > -qB[2] && BB[qB[47]].push((BB[qB[41]] | BB[qB[7]] << BB[qB[23]]) & qB[11]), UB(BB[qB[47]])
          }

          function BI(...BB) {
            return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = SB(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
          }

          function II(...BB) {
            aB(BB[qB[12]] = qB[1], BB[qB[60]] = function(...BB) {
              for (aB(BB[qB[12]] = qB[2], BB[qB[10]] = qB[1], BB[qB[40]] = {}, BB[-qB[92]] = qB[1], BB[qB[47]] = qB[1], BB[qB[8]] = qB[1], BB[qB[23]] = BB[qB[1]].length), BB[qB[7]] = qB[1]; BB[qB[7]] < BB[qB[23]]; BB[qB[7]]++) {
                for (aB(BB[qB[40]] = {}, BB[-qB[92]] = qB[1], BB[qB[47]] = qB[2]), BB[-qB[109]] = BB[qB[7]] + qB[2]; BB[-qB[109]] < BB[qB[23]]; BB[-qB[109]]++) BB[qB[1]][BB[qB[7]]].x !== BB[qB[1]][BB[-qB[109]]].x || BB[qB[1]][BB[qB[7]]].y !== BB[qB[1]][BB[-qB[109]]].y ? (BB[qB[1]][BB[qB[7]]].y === BB[qB[1]][BB[-qB[109]]].y ? BB[qB[8]] = Number.MAX_SAFE_INTEGER : BB[qB[8]] = (BB[qB[1]][BB[qB[7]]].x - BB[qB[1]][BB[-qB[109]]].x) / (BB[qB[1]][BB[qB[7]]].y - BB[qB[1]][BB[-qB[109]]].y), BB[qB[40]][BB[qB[8]]] || (BB[qB[40]][BB[qB[8]]] = qB[1]), aB(BB[qB[40]][BB[qB[8]]]++, BB[-qB[92]] = Math.max(BB[-qB[92]], BB[qB[40]][BB[qB[8]]]))) : BB[qB[47]]++;
                aB(BB[-qB[92]] += BB[qB[47]], BB[qB[10]] = Math.max(BB[qB[10]], BB[-qB[92]]))
              }
              return BB[qB[10]]
            }, console.log(BB[qB[60]]))
          }
          BI(180) in dB && II(), KB *= ZB[BI(181) + BI(qB[110])]
        }
        let VB = ZB[EB(183) + EB(184) + "ss"] * RB;
        if (RB < .3 && (VB *= RB), KB > VB) {
          function ZI(...BB) {
            aB(BB[qB[12]] = qB[1], BB[qB[5]] = function(IB) {
              var ZB = [];
              return (IB === qB[2] || IB >= qB[10]) && BB[qB[2]](ZB, [], IB, qB[1]), ZB
            }, BB[qB[2]] = function(...IB) {
              for (IB[qB[12]] = qB[10], IB[qB[110]] = IB[qB[15]]; IB[qB[110]] < IB[qB[14]]; IB[qB[110]]++) {
                if (IB[qB[2]].length !== IB[qB[110]]) return;
                for (IB[qB[28]] = qB[1]; IB[qB[28]] < IB[qB[14]]; IB[qB[28]]++) BB[qB[68]](IB[qB[2]], [IB[qB[110]], IB[qB[28]]]) && (aB(IB[qB[2]].push([IB[qB[110]], IB[qB[28]]]), BB[qB[2]](IB[qB[1]], IB[qB[2]], IB[qB[14]], IB[qB[110]] + qB[2])), IB[qB[2]].length === IB[qB[14]] && IB[qB[1]].push(BB[qB[54]](IB[qB[2]])), IB[qB[2]].pop())
              }
            }, BB[qB[54]] = function(...BB) {
              for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = [], BB[qB[28]] = BB[qB[1]].length), BB[qB[68]] = qB[1]; BB[qB[68]] < BB[qB[28]]; BB[qB[68]]++)
                for (BB[qB[2]][BB[qB[68]]] = "", BB[-qB[111]] = qB[1]; BB[-qB[111]] < BB[qB[28]]; BB[-qB[111]]++) BB[qB[2]][BB[qB[68]]] += BB[qB[1]][BB[qB[68]]][qB[2]] === BB[-qB[111]] ? "Q" : ".";
              return BB[qB[2]]
            }, BB[qB[68]] = function(...BB) {
              for (aB(BB[qB[12]] = qB[14], BB[qB[14]] = BB[qB[1]].length), BB[qB[28]] = qB[1]; BB[qB[28]] < BB[qB[14]]; BB[qB[28]]++) {
                if (BB[qB[1]][BB[qB[28]]][qB[1]] === BB[qB[2]][qB[1]] || BB[qB[1]][BB[qB[28]]][qB[2]] === BB[qB[2]][qB[2]]) return qB[112];
                if (Math.abs((BB[qB[1]][BB[qB[28]]][qB[1]] - BB[qB[2]][qB[1]]) / (BB[qB[1]][BB[qB[28]]][qB[2]] - BB[qB[2]][qB[2]])) === qB[2]) return qB[112]
              }
              return !0
            }, console.log(BB[qB[5]]))
          }
          EB(185) + qB[42] in dB && ZI(), KB = VB
        }
        aB(JB()[EB(186)](MB, MB, KB), GB[EB(187) + EB(qB[100])](MB))
      }
      GB[zB(qB[30]) + qB[113]] = ZB[zB(190) + zB(qB[50]) + qB[113]] * (YB ? gB : yB)
    }
  },
  37705: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      d: () => vB
    });
    var TB = ZB(37710),
      JB = ZB(1956);
    const oB = 2,
      GB = 1,
      vB = {
        Wv: 1,
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

    function kB(BB, IB, ZB, vB, kB, cB, nB) {
      if (kB.speed) return (0, TB.c)(IB, ZB, vB, kB, cB, nB, BB), void(kB.ticksToReachMaxIdleFriction = oB);
      const hB = vB.isOnGround(),
        zB = IB.bloxd.getSyncedClientOptions(IB.bloxd.getPlayerReader(ZB)),
        FB = null === zB ? IB.bloxd.getClientPredictedOption(ZB, "groundFrictionScale") : zB.groundFrictionScale,
        NB = null === zB ? IB.bloxd.getClientPredictedOption(ZB, "airFrictionScale") : zB.airFrictionScale,
        gB = hB ? FB : NB,
        qB = Math.max(GB, gB),
        yB = kB.ticksToReachMaxIdleFriction / oB,
        UB = (0, JB.C)(qB, gB, yB);
      cB.friction = BB.standingFriction * ((null === zB ? IB.bloxd.getClientPredictedOption(ZB, "airMomentumConservation") : zB.airMomentumConservation) ? UB : gB), kB.ticksToReachMaxIdleFriction > 0 && kB.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);