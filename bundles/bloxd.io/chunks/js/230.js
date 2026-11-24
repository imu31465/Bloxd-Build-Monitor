export const id = 230;
export const ids = [230];
export const modules = {
  38554: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => JB
    });
    var QB = zB(214),
      nB = zB(37748);
    const dB = 1.2,
      IB = {
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
        fN: .5,
        GjB: !1
      },
      NB = {
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
        fN: .5,
        GjB: !1
      },
      uB = {
        physicsBodyDimensions: {
          width: QB.e.Oy,
          height: QB.e.Bk
        },
        hitBoxDimensions: {
          width: QB.e.Oy + .4,
          height: QB.e.Bk + .6
        },
        eyeHeight: QB.e.Bk * QB.e.playerEyeToHeightRatio,
        rideHeight: QB.e.Bk - .3,
        fN: .5,
        GjB: !1
      },
      UB = {
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
        fN: .5,
        GjB: !1
      },
      aB = {
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
        fN: .5,
        GjB: !1
      },
      pB = {
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
        fN: .5,
        GjB: !1
      },
      rB = {
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
        fN: .5,
        GjB: !1
      },
      sB = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: QB.e.Oy,
            height: QB.e.Bk
          },
          hitBoxDimensions: {
            width: QB.e.Oy + .4,
            height: QB.e.Bk + .6
          },
          eyeHeight: QB.e.Bk * QB.e.playerEyeToHeightRatio,
          rideHeight: QB.e.Bk - .1,
          fN: nB.e.fN,
          GjB: !0
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
        },
        Camel: {
          modelScale: dB,
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
        },
        "Cave Golem": IB,
        "Draugr Zombie": {
          ...uB,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": uB,
        "Frost Golem": IB,
        "Frost Zombie": {
          ...uB,
          defaultPose: "zombie"
        },
        "Frost Skeleton": uB,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: QB.e.Oy,
            height: QB.e.Bk
          },
          hitBoxDimensions: {
            width: QB.e.Oy + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          fN: .5,
          GjB: !1
        },
        Wolf: UB,
        Bear: aB,
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
          fN: .5,
          GjB: !1
        },
        Stag: pB,
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
          fN: .5,
          GjB: !1
        },
        Gorilla: rB,
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
          fN: .5,
          GjB: !1
        },
        "Draugr Huntress": uB,
        "Magma Golem": IB,
        "Spirit Golem": IB,
        "Spirit Wolf": UB,
        "Spirit Bear": aB,
        "Spirit Stag": pB,
        "Spirit Gorilla": rB,
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: QB.e.Oy,
            height: QB.e.Bk
          },
          hitBoxDimensions: {
            width: QB.e.Oy + .4,
            height: QB.e.Bk + .6
          },
          eyeHeight: QB.e.Bk * QB.e.playerEyeToHeightRatio,
          rideHeight: QB.e.Bk - .1,
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: QB.e.Oy,
            height: QB.e.Bk
          },
          hitBoxDimensions: {
            width: QB.e.Oy + .4,
            height: QB.e.Bk + .6
          },
          eyeHeight: QB.e.Bk * QB.e.playerEyeToHeightRatio,
          rideHeight: QB.e.Bk - .1,
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
        },
        Zombie: {
          ...uB,
          defaultPose: "zombie"
        },
        Skeleton: uB,
        Mummy: {
          ...uB,
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
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
          fN: .5,
          GjB: !1
        },
        "Iron Guardian": NB,
        "Gold Guardian": NB,
        "Diamond Guardian": NB,
        "Moonstone Guardian": NB,
        "Iron Goofy Golem": NB,
        "Gold Goofy Golem": NB,
        "Diamond Goofy Golem": NB,
        "Moonstone Goofy Golem": NB,
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
          fN: .5,
          GjB: !1
        }
      };

    function JB(BB) {
      return sB[BB]
    }
  },
  37148: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    const QB = {
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
  37756: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(386),
      nB = zB.n(QB),
      dB = zB(1948);
    let IB;
    var NB, uB, UB, aB, pB, rB, sB, JB, mB;
    const yB = [153, 0, 1, 8, "c", "a", 200, 107, "e", "f", 4, 255, "length", 192, 66, "h", "undefined", void 0, 3, 2, 63, 6, "fromCodePoint", 7, 12, "push", 137, "b", "i", 156, 91, 5, 82, 8191, 88, 13, 14, 220, 191, 11, 59, 10, 106, 9, 176, 248, 125, 128, 208, 144, 109, 35, "d", 20, 174, 172, 113, 127, 126, null, 121, 122, 123, 124, 129, 130, 117, 118, 119, 120, 139, 140, 141, 142, 143, 232, 159, 166, 71, "g", 185, "du", 17, 160, 164, 34, 69, 49, 167, 28, 169, 37, 1023, 161, 65536, 55296, 56320, 157, 223, 31, 15, 18, 145, 22, 195, 67, 99, 224, 240, 77, 170, !1, 65, 23, 33, 26, 209, 189, 213, "on"];

    function kB(...BB) {
      return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = function(...BB) {
        for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = '=0:45(<]xDT[HtsWn?lhSpXEB!6a`e@/^"P#*g|$A;_vZm%M~Luoybwzc+)YNQ3C2K1kIjf8Fi&RqJ.7>UrOGVd9{},', BB[yB[0]] = "" + (BB[yB[1]] || ""), BB[yB[4]] = BB[yB[0]].length, BB[yB[10]] = [], BB[yB[8]] = yB[1], BB[yB[9]] = yB[1], BB[-yB[7]] = -yB[2]), BB[yB[3]] = yB[1]; BB[yB[3]] < BB[yB[4]]; BB[yB[3]]++)
          if (BB[yB[6]] = BB[yB[5]].indexOf(BB[yB[0]][BB[yB[3]]]), BB[yB[6]] !== -yB[2])
            if (BB[-yB[7]] < yB[1]) BB[-yB[7]] = BB[yB[6]];
            else {
              oB(BB[-yB[7]] += BB[yB[6]] * yB[30], BB[yB[8]] |= BB[-yB[7]] << BB[yB[9]], BB[yB[9]] += (BB[-yB[7]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
              do {
                oB(BB[yB[10]].push(BB[yB[8]] & yB[11]), BB[yB[8]] >>= yB[3], BB[yB[9]] -= yB[3])
              } while (BB[yB[9]] > yB[23]);
              BB[-yB[7]] = -yB[2]
            } return BB[-yB[7]] > -yB[2] && BB[yB[10]].push((BB[yB[8]] | BB[-yB[7]] << BB[yB[9]]) & yB[11]), GB(BB[yB[10]])
      }(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
    }

    function GB(...BB) {
      return BB[yB[12]] = yB[2], typeof aB !== yB[16] && aB ? (new aB).decode(new pB(BB[yB[1]])) : typeof rB !== yB[16] && rB ? rB.from(BB[yB[1]]).toString("utf-8") : mB(BB[yB[1]])
    }

    function LB() {}
    oB(NB = {}, uB = ['^ovTsjFd[?*1OsfgC4w/5~"CY?L/}N(vV<oe7un:R3+', 'Q3K^_r%l3c<:HYFlJ`Gu(F##4N;i+N"*x0', '`8m5Mg&&"D', "_Ebz1~@:0N{+Tg<lJ[J/{.B@$2ON)Uw`n8:", "*DR^eOhhxSU0?NrA%Aw/9u?M2WnaOs2EyHV/K$;taSSR^ai!II*TG.t0ZYHn0", 'F?_FhjitNcGNfU/E$v"oVuAB.x/7SY"/T6><[uIH4N85_g1gNw4(xz=', "l%3D?|,PSw@a46uac~:^gI3l2Nif2ag/xe4", "E<><rjoe=+;YmFI|9~Q&?qbEA?ii~NQ#i_D<QP):", "PD.5bCjtxK}X86JhS<nD$QXBWCuYi~rPM/AibFv#<", "6ECi7q/]u+GJ+NOP", "m+xojj<_GhzL0", "U~K^h.<xDS", "H%IT*.R;vsM]krhazI+wN7Z@<)YJurOP8s@qPAe;Mc_>BMs6<#obUq=", "z40@oL,IU+b/QN||riJ/PV?e=+=:}NpAuoAoMIn2slLp]rP?.P*JO|4thDP", "$IGJ5Pc@Rs^FsrPB[Ij/uI?eo2??jFe?CP4e.u.P7WnFI5", 'y4G(37#+)S0F%!!E,3LwVOXy"D5DP!1?Sow]', "h&8qcfy2HsI#.!5l:LB<`#_l=pG&vOmh^NB@@V|y+sy", "7m5Tl|n:1Cmp3UC@WD|y7|d>f2nBs(}E&K4e[z^&w)]SwQD!lg{DbC+0", "`NIT_iktRs_sDGQ?u+8q{.{ylDN5@(,#PgVueyqyZsStOsr$CK^LMf{y3[", "R_w5mCm0", "/wQyqOOjep", "{3=a#RxyqY+sTUHh%//LsUo]$)TRBOs6c=", "Kib&/w;tB?)[/rl`hWPRcGo#8S", "LP2w?OQEZ3[rv|{Xg8:", "CDoe_R!]A)q0{O2lsD:Rc$XBUN>*3LDhrK!<", "TE3]Oji;Klp7KBv!=W:R+JaMpwKcB8;!tg3/6+,y}){^{4Q*", "G_zi>yq%[SGWQN`ETEw]e", "xHa^TqohVtP3#rwAJSXq}+t!?CifEax|!0", "6P~iFqVtsY7lx8A6E0", '/&"R*RFHZ?T~UB:B"<85', "E%!FF~7]Clq0#)Ce(ekb@y;0Qc/Fc5bPb+P^R|h;/l0IL58gKE4ee", "{~@/xNo0LNsaI4)*pD;a)Nt!]SK5?N_66W9D", 'FoAR[uIlc?0FFaF/g8o&e>4;_YJ5+Bg!$KC`^8c>"+^FWau`rS^Lh', 'ES$Ln+/hf)SF0n*l9P"o*><xsWE<?~@_T&u^lq.)nWr[^YHh', '[Lj/:dtCBSv#B4!P5#3`_#nBrh"Y=a6;doL^yR$M<', "(5!o/wFlkDlFAn^_;e!R,V##j)$qFF=*;65([d{A<", "zA@5X8+ti)x)Ln<vlD<zMgxy<tOeyY8g#<MDSjoeY3KYjF9#+8`&Z>OtMc+", "|E7y##1l|h?4DNz#}x%`%CM+7l]DXg5v1`95}M=", 's%:oW*Q;"+sF|!e_M<j&kF{Bgh', "D+S]T|v+T?*jS4", "P+]<)F^HWWA476g!dS$`.zsB+38CF88g&<Fw`", "L~1(|M>HrD", "o~comrohZpR>t(", "2D/iBMlxVthRh6j!~=", "[8%/4zO7OhFL!FY?`%Qy0U_:Z[4Rg!t$6w3y|I9#[KBF2OY;bIz5", 'N8ke".m#i)Q50', "1<k^8zs*X2ypmnz;D0", "!vKw,+3Is1#q+tOA9=", "tCLwK~Sx=W*]dLY;g+FovoIB<T[RFW3@h<[ewrd3)s{Ux80E", '$+s"5*o]4', "o<IuC){H&Kv", "IIs/d.:xv[lK~4=?_??<X", "PE3]O.HfWW(MJ5Z|AgEDy$Dbm1L#)j[!y/)o~Rp0", "s+(z[UE]~NZ`G4,`tLp]g#v+M10K:g};KIE<", "Z8o&{M=B]SFiqN}`{S</!V7]T3A]=at", "#IKofjZBPN@/hu!Ewmz<>yF<~b9!0", 'G4v^5FQjA)R&.!"*qE!aaVP@hH/)GY4l:5ZT)J}Vjh20NO.6JSp/yr&H5', "Ew;^dy;MrDK>I4,ePDZe/8f@Cc*", "r4r^1b#C%x)>cYlS4N9L.||>>HPsP(Y?", 'PNnDD*D][KX7"Qx|?CBofbdHt1<7{Y]ggN&x=%6:_YRk=', 'M6j6gYEbNbp7"5OP9oAalysfeYR%yWuP?wFw0*(]1+?KlgK?v+5eYFbtsC;', "M8.qrUs25w6~a:=E#<)oYP{Bep", "fSg]F3V#~N?RcB9P<#A@B+%Abtuc0", "ym_FSqS&&S#3?Fma83WD/MB@MbVN.UF/1P)^>&RoG2:RKgK*i/X]", "`WDo5~*@BK@zk)2E24wqQN)%~N;YWs<", "WWj]=NV]DT(I*8#@=e1xN)f@mpzi!~a?XNA<1*&<lWiLm5(|<^$i0Ns%4", "*E|qh|3Bp2i%wgkgV~O^.z/MvYK%5Oh;x8K<n&X*uCUJy~K?EwNeHq*&8t", "U`wq]u}+ON>[`YD$@N*]", "e&B.Ju)lrwsE584g?oED?8Oe/13`{WMA", "Q~V8mI#t^p`FUFs", "AE0.QP8R6sWF8srPtN8`JmZ2VhU5uL/EX&xw%L^l=CMB<QH", "g<z`U|cA])=S}N5BG!95ZQ6&{)R&wt*|RmX]zPRtvc?POsM$TlkxU8w:", "a84T*R8tkw9C%!G`%o@]>3KtZp//0GhPA&Mi6|52hD", "Lvez!ij0]", "5Cj6sU@HI+J[ugna2o0oO|0j%1`~1L!#zE/iqz=", "loOJf&)lmp8i7#3B&sOJr.L#,[6?bn5|+4_oZ#Ehhhn@>W|h%8(q#A?!(", "=L;R=dc%GD2L4|x6`A.yfU,3k+`~XQe*iszDX", "k`TamJU#{)zfR69A0D|yA#Z2|)P", "Lo^am#ijK++!H4h`ugEDtuYM*t", "#e:a<*AHh+j!Pg@BSEfz`", 'DHPRFNSd>N#7O4S;8gn";IjEHp?<=WZhr~:J8*0Rbt7NNWwa,=', "e&~wvQ;R<", "ZKMwfbYR.l0awg<lgo:(LC#jCbVk0(%hB%.L]zA2<", "|?p/;c1@Z3{U0", "xe%y4P}?=+6j=~KEiER(/M$tJlm~AYk@L/5e7|):", "^~Q/xUZ%+35<0", "24kx}8@*0W8L>M~A?%eygY2)xSu`l(kl;3Xq0G`y(", ")??wQNS%ODS48fT6N4Rx9q~%`3Jbg~qhT8:", "{o:oWz}erDWP0N)_NScL`>K0It$", "L~9<1*Nl>+v?)!</A6bToLGH?+Ea1t}#S<$`]PZ%lN.lg5i|5wWD", "[%%/7+5lZ?.xS8c`OYioK~heShLBG4,n6I}oC%w:", 'ooCivCr)7xKs5$a;AvHT:bh#+KAiZY0B_&I(%I%%qb}+5$~6ZHf5".>)0D', "yw{D,YFy=D0FWMGX2/NJUml2%19&`na#Bov&Z#{%hN;", '^WV&I&r%~DP3V*A6pwyb`yd%gwkfDN@BLv"@^8zM%lVuuga#^+PR#A><)3*7=', "]lwy>uqH<zlgWsd;|SX59+thLWw", "N4!o9OM]LDBqOY@ePPWqALnBaK[zgnPlev}ovCb0as$", "7mm].u=", "nwHJ@iudG2,6cW/@>PYedqaUMpfNg50ESle]nz}0", "g?#eg>;0", "S6J&`>O#|2i!p*`E,$P^4~{Aphzfz4", "CP5es3|@~px<:(+Ew6D@)PqBZbol#uPgaP(z:%2Hbh", 's595IP2@>+"a$rrA^D</)bxyVtv~Fa+EH+8`K72BkN)[]rL$3P%q{890', "X^n.Lfx%s12ypF!e0C8`8U=", "z+>o^w=@pwRJ~~5/7c7yFP^dv[8lwtk*v+2w>O2@nW", "yA3qQPtU5", "6slLh$Xu", "1o|/JUS:", 'gvUsGX"J', "(H=L)7<J", "|WqF", "^+=FgB2", "|H[5", 'J5Rc}kN"', ")kw%}R4", "[8`d_)EK", ";801#|EK", "88Sd", "[8qt7OiK", "C8c)E)QK", "u5qt9g&K", ">yGtQ", "[8qtE)QK", "u5`d;?GK", "iZU2>|[K", "?uU>>giK", "RaP>Jt[K", "pa|)tmQK", "15tWbqkK", "{Z01(?QK", '>Y|)}tN"', "s]]>X", "j8`d", "S8qWr", "Zy{>j", "1vna`&TK", "P}B%X", "[8qtE)5jpr", "ZT&>1R,r$G", "(E90mmB=pr", "{Za>AL_K", ">%a2j|4", "{Za>Xg;K", 'u5U>9)y"', "15D>~?vK", "jY|)}t4", "6khu;ip0", 'h8r{^6HRb;7["', "4pth+mk7f:m`u", "UPd`!<ddx6FQv", "ejAR=m;8Ei", 'jdn3[N[I"Ur{v', "ShRqaL94D~$8u", '5&y"WS9wp[/0u', "8h6}419w1Z`0v", "9s{$g7<8ux%9v", "p;#}%09wR`8lu", "5c)$z#B4fPTa0y&$qsX,.!+QjkwGhI8O;hUCs", '&#:(HLEVs~^S+SnZ_;T1nLpCUbc{MB>o!g"(I', "s&b,`o+Qs/Yp|e#cF{W}V{u9![5G4^}~8hUC@", "#W_Wyr<wwqfl$p,~e%@,V{/w(~eG4^$x*h@,s", "Jz@,wXcVMWpN/#FjvyRm+Kcl8Dd<E^$x+hv", "F<58", "9w/I", "{:*N", "^3/I", "]i)VN", "0a&N", "P#68", "c}D2", "#8GtgmZK", "Yg1M5Kc}", "D5cMd@.H", "lSM2hW*D", "%UozP]v", "szjT;2.D", "zOt:r19D", "y/M<^I+D", "y/yoz", "JP<Mx2|o/X63ES>F+P$jS[B", "=Iq)NOW7~y8os2i?.j1YnWm|lEdD&(Q", 'v8h?SerOEU"ag74l@8V>7BC', "JP<Mx2|ohbtIq+R,Q#vLW|cr/X63ESY", "PH^Up&}S%4=,|8RqW*9Kf}I#+E~@h{s", 'JP<Mx2|ohbGwMtNc9F<LMd"o2Jb', "Jjs:C,S", '}n^uO".P', "=/Rj", '"zodTs@K', ";ER)mmEK", "D%+2", "VZB%", "pya>VqkK", "PW+2", ";y+>O)GK", "yYBAy?_K", "JpQd?mQK", "nkRc~?4", ";y+>TH5K", 'K;"E', "2h&nif:e", "4m]!Qfc", ",>t0Jf}e", 'mh"npwbe', "m;w;QWi2", "3;&EgQG", "WoA;+[<y", "f&H_i", "La|)tmQK", ";y+>Dt:K"]), oB(UB = function(...BB) {
      oB(BB[yB[12]] = yB[1], BB[yB[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[yB[2]] = yB[17], BB[yB[9]] = []);
      try {
        oB(BB[yB[2]] = Object, BB[yB[9]][yB[25]]("".__proto__.constructor.name))
      } catch (uB) {}
      BB: for (BB[yB[13]] = yB[1]; BB[yB[13]] < BB[yB[14]][yB[12]]; BB[yB[13]]++) try {
        for (BB[yB[2]] = BB[yB[14]][BB[yB[13]]](), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[yB[9]][yB[12]]; BB[yB[15]]++)
          if (typeof BB[yB[2]][BB[yB[9]][BB[yB[15]]]] === yB[16]) continue BB;
        return BB[yB[2]]
      } catch (uB) {}
      return BB[yB[2]] || this
    }() || {}, aB = UB.TextDecoder, pB = UB.Uint8Array, rB = UB.oJ, sB = UB.String || String, JB = UB.Array || Array, mB = function(...BB) {
      return oB(BB[yB[12]] = yB[1], BB[yB[26]] = new JB(yB[47]), BB[yB[27]] = sB[yB[22]] || sB.fromCharCode, BB[yB[4]] = []),
        function(...jB) {
          for (oB(jB[yB[12]] = yB[2], jB[yB[2]] = yB[17], jB[yB[19]] = yB[17], jB[yB[18]] = jB[yB[1]][yB[12]], BB[yB[4]][yB[12]] = yB[1]), jB[yB[10]] = yB[1]; jB[yB[10]] < jB[yB[18]];) oB(jB[yB[19]] = jB[yB[1]][jB[yB[10]]++], jB[yB[19]] <= yB[57] ? jB[yB[2]] = jB[yB[19]] : jB[yB[19]] <= yB[98] ? jB[yB[2]] = (jB[yB[19]] & yB[99]) << yB[21] | jB[yB[1]][jB[yB[10]]++] & yB[20] : jB[yB[19]] <= 239 ? jB[yB[2]] = (jB[yB[19]] & yB[100]) << yB[24] | (jB[yB[1]][jB[yB[10]]++] & yB[20]) << yB[21] | jB[yB[1]][jB[yB[10]]++] & yB[20] : sB[yB[22]] ? jB[yB[2]] = (jB[yB[19]] & yB[23]) << yB[101] | (jB[yB[1]][jB[yB[10]]++] & yB[20]) << yB[24] | (jB[yB[1]][jB[yB[10]]++] & yB[20]) << yB[21] | jB[yB[1]][jB[yB[10]]++] & yB[20] : (jB[yB[2]] = yB[20], jB[yB[10]] += yB[18]), BB[yB[4]][yB[25]](BB[yB[26]][jB[yB[2]]] || (BB[yB[26]][jB[yB[2]]] = BB[yB[27]](jB[yB[2]]))));
          return BB[yB[4]].join("")
        }
    }());
    const gB = nB()[kB(yB[42])](),
      tB = nB()[kB(yB[42])](),
      SB = nB()[kB(yB[42])](),
      MB = nB()[kB(yB[42])](),
      EB = nB()[kB(yB[42])](),
      iB = nB()[kB(yB[42])](),
      qB = nB()[kB(yB[42])](),
      fB = (...BB) => {
        function jB(...BB) {
          return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = function(...BB) {
            for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = '2aJUihn6F+5!&x~PVr{R*[_Y3K,|CGg4LD<;N(y/"pEHd]0):O}=b`Zt%8?Mv#1@^ueI7>oBz.Wf9sAkXwmqT$jQlSc', BB[yB[27]] = "" + (BB[yB[1]] || ""), BB[yB[4]] = BB[yB[27]].length, BB[-yB[46]] = [], BB[yB[44]] = yB[1], BB[yB[45]] = yB[1], BB[yB[23]] = -yB[2]), BB[yB[3]] = yB[1]; BB[yB[3]] < BB[yB[4]]; BB[yB[3]]++)
              if (BB[yB[43]] = BB[yB[5]].indexOf(BB[yB[27]][BB[yB[3]]]), BB[yB[43]] !== -yB[2])
                if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[yB[43]];
                else {
                  oB(BB[yB[23]] += BB[yB[43]] * yB[30], BB[yB[44]] |= BB[yB[23]] << BB[yB[45]], BB[yB[45]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                  do {
                    oB(BB[-yB[46]].push(BB[yB[44]] & yB[11]), BB[yB[44]] >>= yB[3], BB[yB[45]] -= yB[3])
                  } while (BB[yB[45]] > yB[23]);
                  BB[yB[23]] = -yB[2]
                } return BB[yB[23]] > -yB[2] && BB[-yB[46]].push((BB[yB[44]] | BB[yB[23]] << BB[yB[45]]) & yB[11]), GB(BB[-yB[46]])
          }(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
        }
        BB[yB[12]] = yB[18], jB(yB[7]) in LB && function(...BB) {
          oB(BB[yB[12]] = yB[1], BB[-yB[47]] = function(...BB) {
            for (oB(BB[yB[12]] = yB[2], BB[yB[2]] = yB[1], BB[yB[19]] = {}, BB[yB[4]] = yB[1], BB[yB[48]] = yB[1], BB[yB[31]] = yB[1], BB[-yB[21]] = BB[yB[1]].length), BB[yB[23]] = yB[1]; BB[yB[23]] < BB[-yB[21]]; BB[yB[23]]++) {
              for (oB(BB[yB[19]] = {}, BB[yB[4]] = yB[1], BB[yB[48]] = yB[2]), BB[yB[15]] = BB[yB[23]] + yB[2]; BB[yB[15]] < BB[-yB[21]]; BB[yB[15]]++) BB[yB[1]][BB[yB[23]]].x !== BB[yB[1]][BB[yB[15]]].x || BB[yB[1]][BB[yB[23]]].y !== BB[yB[1]][BB[yB[15]]].y ? (BB[yB[1]][BB[yB[23]]].y === BB[yB[1]][BB[yB[15]]].y ? BB[yB[31]] = Number.MAX_SAFE_INTEGER : BB[yB[31]] = (BB[yB[1]][BB[yB[23]]].x - BB[yB[1]][BB[yB[15]]].x) / (BB[yB[1]][BB[yB[23]]].y - BB[yB[1]][BB[yB[15]]].y), BB[yB[19]][BB[yB[31]]] || (BB[yB[19]][BB[yB[31]]] = yB[1]), oB(BB[yB[19]][BB[yB[31]]]++, BB[yB[4]] = Math.max(BB[yB[4]], BB[yB[19]][BB[yB[31]]]))) : BB[yB[48]]++;
              oB(BB[yB[4]] += BB[yB[48]], BB[yB[2]] = Math.max(BB[yB[2]], BB[yB[4]]))
            }
            return BB[yB[2]]
          }, console.log(BB[-yB[47]]))
        }();
        const zB = iB;
        return nB()[jB(108) + jB(yB[50])](zB, BB[yB[19]]), nB()[jB(110)](BB[yB[1]], zB, nB()[jB(111)](zB, BB[yB[2]]))
      };

    function oB() {
      oB = function() {}
    }
    IB = (...BB) => {
      function jB(...BB) {
        return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = function(...BB) {
          for (oB(BB[yB[12]] = yB[2], BB[yB[2]] = '4"K]zS0^2%d/ElC8_,[rG`!#:XZPQ7jc>(k{;pi.5~$ybuTV@H&aMov1fYFD}<JIBe3UqLR|wAWN)tg6?ms+hO=x*9n', BB[yB[19]] = "" + (BB[yB[1]] || ""), BB[yB[49]] = BB[yB[19]].length, BB[-yB[51]] = [], BB[-yB[49]] = yB[1], BB[yB[9]] = yB[1], BB[yB[23]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[yB[49]]; BB[yB[15]]++)
            if (BB[-yB[50]] = BB[yB[2]].indexOf(BB[yB[19]][BB[yB[15]]]), BB[-yB[50]] !== -yB[2])
              if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[-yB[50]];
              else {
                oB(BB[yB[23]] += BB[-yB[50]] * yB[30], BB[-yB[49]] |= BB[yB[23]] << BB[yB[9]], BB[yB[9]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                do {
                  oB(BB[-yB[51]].push(BB[-yB[49]] & yB[11]), BB[-yB[49]] >>= yB[3], BB[yB[9]] -= yB[3])
                } while (BB[yB[9]] > yB[23]);
                BB[yB[23]] = -yB[2]
              } return BB[yB[23]] > -yB[2] && BB[-yB[51]].push((BB[-yB[49]] | BB[yB[23]] << BB[yB[9]]) & yB[11]), GB(BB[-yB[51]])
        }(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
      }
      BB[yB[12]] = yB[3], jB(112) in LB && function(...BB) {
        oB(BB[yB[12]] = yB[1], BB[yB[55]] = function(...BB) {
          for (oB(BB[yB[12]] = yB[2], BB[-yB[53]] = BB[yB[1]].length, BB[-yB[54]] = [], BB[yB[4]] = yB[1]), BB[yB[52]] = yB[1]; BB[yB[52]] < BB[-yB[53]]; BB[yB[52]]++) BB[-yB[54]].push(BB[yB[52]] !== yB[1] && BB[yB[1]][BB[yB[52]]] > BB[yB[1]][BB[yB[52]] - yB[2]] ? BB[-yB[54]][BB[yB[52]] - yB[2]] + yB[2] : yB[2]);
          for (BB[yB[31]] = BB[-yB[53]] - yB[2]; BB[yB[31]] >= yB[1]; BB[yB[31]]--) BB[yB[31]] !== BB[-yB[53]] - yB[2] && BB[yB[1]][BB[yB[31]]] > BB[yB[1]][BB[yB[31]] + yB[2]] && (BB[-yB[54]][BB[yB[31]]] = Math.max(BB[-yB[54]][BB[yB[31]]], BB[-yB[54]][BB[yB[31]] + yB[2]] + yB[2])), BB[yB[4]] += BB[-yB[54]][BB[yB[31]]];
          return BB[yB[4]]
        }, console.log(BB[yB[55]]))
      }();
      const zB = BB[yB[1]][jB(yB[56])][jB(114) + jB(115) + jB(116)](BB[yB[2]]);
      BB[yB[5]] = BB[yB[1]][jB(yB[56])][jB(yB[66]) + jB(yB[67]) + jB(yB[68]) + jB(yB[69])](zB);
      const QB = BB[yB[5]] === yB[59] ? BB[yB[1]][jB(yB[56])][jB(yB[60]) + jB(yB[61]) + jB(yB[62]) + jB(yB[63])](BB[yB[2]], jB(yB[46]) + jB(yB[58]) + jB(yB[57]) + yB[8]) : BB[yB[5]][jB(yB[46]) + jB(yB[58]) + jB(yB[57]) + yB[8]],
        IB = BB[yB[5]] === yB[59] ? BB[yB[1]][jB(yB[56])][jB(yB[60]) + jB(yB[61]) + jB(yB[62]) + jB(yB[63])](BB[yB[2]], jB(yB[47]) + jB(yB[64]) + jB(yB[65])) : BB[yB[5]][jB(yB[47]) + jB(yB[64]) + jB(yB[65])];
      oB(nB()[jB(131)](gB, yB[1], yB[1], BB[yB[31]]), nB().ta(gB, gB, nB()[jB(132)], BB[yB[18]].heading), nB()[jB(133)](qB, BB[yB[10]].Hy), qB[yB[2]] = yB[1]);
      const UB = BB[yB[19]][jB(134) + jB(135)]();
      if (oB(BB[yB[5]] = BB[yB[1]][jB(yB[56])][jB(yB[66]) + jB(yB[67]) + jB(yB[68]) + jB(yB[69])](zB), BB[yB[27]] = BB[yB[5]] === yB[59] ? BB[yB[1]][jB(yB[56])][jB(136) + jB(yB[26]) + jB(138)](BB[yB[2]], jB(yB[70]) + jB(yB[71])) : BB[yB[5]][jB(yB[70]) + jB(yB[71])]), !UB && nB()[yB[81]](qB) && (BB[yB[5]] === yB[59] ? BB[yB[1]][jB(yB[56])][jB(yB[60]) + jB(yB[61]) + jB(yB[62]) + jB(yB[63])](BB[yB[2]], jB(yB[72]) + jB(yB[73]) + jB(yB[74]) + jB(yB[49])) : BB[yB[5]][jB(yB[72]) + jB(yB[73]) + jB(yB[74]) + jB(yB[49])])) {
        function JB(...BB) {
          for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = '"074a$xB8IN}#X~wDbAcW*;9J(3{jPzF@YM=HnVpyqO:!1g^f?Q[Z&TGCKE5<2d_/kv,Rs%]>uL6.li`htrU+Sem|o)', BB[-yB[75]] = "" + (BB[yB[1]] || ""), BB[-yB[76]] = BB[-yB[75]].length, BB[-yB[78]] = [], BB[-yB[77]] = yB[1], BB[yB[21]] = yB[1], BB[yB[23]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[-yB[76]]; BB[yB[15]]++)
            if (BB[-yB[40]] = BB[yB[5]].indexOf(BB[-yB[75]][BB[yB[15]]]), BB[-yB[40]] !== -yB[2])
              if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[-yB[40]];
              else {
                oB(BB[yB[23]] += BB[-yB[40]] * yB[30], BB[-yB[77]] |= BB[yB[23]] << BB[yB[21]], BB[yB[21]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                do {
                  oB(BB[-yB[78]].push(BB[-yB[77]] & yB[11]), BB[-yB[77]] >>= yB[3], BB[yB[21]] -= yB[3])
                } while (BB[yB[21]] > yB[23]);
                BB[yB[23]] = -yB[2]
              } return BB[yB[23]] > -yB[2] && BB[-yB[78]].push((BB[-yB[77]] | BB[yB[23]] << BB[yB[21]]) & yB[11]), GB(BB[-yB[78]])
        }

        function mB(...BB) {
          return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = JB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
        }

        function kB(...BB) {
          function jB(...BB) {
            return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = function(...BB) {
              for (oB(BB[yB[12]] = yB[2], BB[yB[58]] = 'uv4_ebwDWg:@&^ZcO~xi.EFsIh,}r5C3$Koj|yBA!JHXnz9VGa"Q/`%q<lMPpk[U6{T)LS0m1]d(RN=7#+;*2>8t?fY', BB[yB[27]] = "" + (BB[yB[1]] || ""), BB[yB[18]] = BB[yB[27]].length, BB[yB[10]] = [], BB[yB[8]] = yB[1], BB[yB[9]] = yB[1], BB[yB[79]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[yB[18]]; BB[yB[15]]++)
                if (BB[yB[43]] = BB[yB[58]].indexOf(BB[yB[27]][BB[yB[15]]]), BB[yB[43]] !== -yB[2])
                  if (BB[yB[79]] < yB[1]) BB[yB[79]] = BB[yB[43]];
                  else {
                    oB(BB[yB[79]] += BB[yB[43]] * yB[30], BB[yB[8]] |= BB[yB[79]] << BB[yB[9]], BB[yB[9]] += (BB[yB[79]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                    do {
                      oB(BB[yB[10]].push(BB[yB[8]] & yB[11]), BB[yB[8]] >>= yB[3], BB[yB[9]] -= yB[3])
                    } while (BB[yB[9]] > yB[23]);
                    BB[yB[79]] = -yB[2]
                  } return BB[yB[79]] > -yB[2] && BB[yB[10]].push((BB[yB[8]] | BB[yB[79]] << BB[yB[9]]) & yB[11]), GB(BB[yB[10]])
            }(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
          }
          BB[yB[12]] = yB[1], oB(BB[yB[5]] = mB(146) + jB(147) + jB(148) + jB(149), BB[yB[80]] = jB(150) + jB(151) + jB(152) + jB(yB[0]) + jB(154) + jB(155) + "?", BB[yB[19]] = jB(yB[29]) + jB(yB[97]) + jB(158) + jB(yB[76]) + jB(yB[83]), BB[yB[5]].match(BB[yB[80]] + BB[yB[19]]))
        }
        mB(yB[102]) in LB && kB(), oB(fB(tB, gB, qB), fB(SB, qB, gB), nB()[mB(yB[93])](MB, qB, SB));
        const iB = nB()[mB(162)](qB),
          HB = nB()[mB(163)](gB, qB) / BB[yB[31]] / iB,
          DB = Math[mB(yB[84])](HB, yB[1]) + yB[2];
        if (BB[yB[31]] * BB[yB[31]] < nB()[yB[81]](SB)) {
          function FB(...BB) {
            for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = 'e%J<m)9Dy#Vw?bAis$vfY1l]FzBHN;k:^rT>C3*&/`GqgE7S[5P~.4"x_{,pQt6u=n|M!(c+20@}8ZoKIXRUdhOWLja', BB[yB[82]] = "" + (BB[yB[1]] || ""), BB[yB[18]] = BB[yB[82]].length, BB[yB[10]] = [], BB[yB[31]] = yB[1], BB[yB[9]] = yB[1], BB[yB[79]] = -yB[2]), BB[yB[83]] = yB[1]; BB[yB[83]] < BB[yB[18]]; BB[yB[83]]++)
              if (BB[yB[43]] = BB[yB[5]].indexOf(BB[yB[82]][BB[yB[83]]]), BB[yB[43]] !== -yB[2])
                if (BB[yB[79]] < yB[1]) BB[yB[79]] = BB[yB[43]];
                else {
                  oB(BB[yB[79]] += BB[yB[43]] * yB[30], BB[yB[31]] |= BB[yB[79]] << BB[yB[9]], BB[yB[9]] += (BB[yB[79]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                  do {
                    oB(BB[yB[10]].push(BB[yB[31]] & yB[11]), BB[yB[31]] >>= yB[3], BB[yB[9]] -= yB[3])
                  } while (BB[yB[9]] > yB[23]);
                  BB[yB[79]] = -yB[2]
                } return BB[yB[79]] > -yB[2] && BB[yB[10]].push((BB[yB[31]] | BB[yB[79]] << BB[yB[9]]) & yB[11]), GB(BB[yB[10]])
          }

          function YB(...BB) {
            return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = FB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
          }
          nB()[YB(165)](gB, gB, SB, DB)
        }
        oB(BB[yB[27]] = (0, dB.z)(BB[yB[27]], 1, Math[mB(yB[84])](yB[2], Math[mB(yB[77])](yB[1], -HB, yB[2] - iB / BB[yB[31]]))), nB()[mB(yB[88])](gB, gB, MB))
      }
      const aB = EB;
      if (oB(nB()[jB(168)](aB, gB, qB), aB[yB[2]] = yB[1], BB[yB[4]] = nB()[jB(yB[90])](aB)), !UB) {
        function VB(...BB) {
          for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = 'B}HDUXpRLmOFYesWlJZcxa@io7QTwV$jM&E>],?=PCA5ny%!.+bv;(G9u40t#S"/h6IkN:*d_K|z2)q^3r1<[`~fg{8', BB[yB[27]] = "" + (BB[yB[1]] || ""), BB[yB[85]] = BB[yB[27]].length, BB[-yB[87]] = [], BB[yB[8]] = yB[1], BB[-yB[35]] = yB[1], BB[yB[23]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[yB[85]]; BB[yB[15]]++)
            if (BB[yB[86]] = BB[yB[5]].indexOf(BB[yB[27]][BB[yB[15]]]), BB[yB[86]] !== -yB[2])
              if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[yB[86]];
              else {
                oB(BB[yB[23]] += BB[yB[86]] * yB[30], BB[yB[8]] |= BB[yB[23]] << BB[-yB[35]], BB[-yB[35]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                do {
                  oB(BB[-yB[87]].push(BB[yB[8]] & yB[11]), BB[yB[8]] >>= yB[3], BB[-yB[35]] -= yB[3])
                } while (BB[-yB[35]] > yB[23]);
                BB[yB[23]] = -yB[2]
              } return BB[yB[23]] > -yB[2] && BB[-yB[87]].push((BB[yB[8]] | BB[yB[23]] << BB[-yB[35]]) & yB[11]), GB(BB[-yB[87]])
        }

        function hB(...BB) {
          return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = VB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
        }

        function XB() {
          function BB(...BB) {
            return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = function(...BB) {
              for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = 'sOP;v]$&jUr~)fH/gV`#d_?Yw=>o.G^uz4l+*:F%n2E(tS[T1c,K!9Dq380y|}{Mh7<Ixa@6"CXRQNJpBZmeLkiWAb5', BB[yB[88]] = "" + (BB[yB[1]] || ""), BB[-yB[89]] = BB[yB[88]].length, BB[yB[52]] = [], BB[yB[31]] = yB[1], BB[yB[21]] = yB[1], BB[yB[79]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[-yB[89]]; BB[yB[15]]++)
                if (BB[yB[28]] = BB[yB[5]].indexOf(BB[yB[88]][BB[yB[15]]]), BB[yB[28]] !== -yB[2])
                  if (BB[yB[79]] < yB[1]) BB[yB[79]] = BB[yB[28]];
                  else {
                    oB(BB[yB[79]] += BB[yB[28]] * yB[30], BB[yB[31]] |= BB[yB[79]] << BB[yB[21]], BB[yB[21]] += (BB[yB[79]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                    do {
                      oB(BB[yB[52]].push(BB[yB[31]] & yB[11]), BB[yB[31]] >>= yB[3], BB[yB[21]] -= yB[3])
                    } while (BB[yB[21]] > yB[23]);
                    BB[yB[79]] = -yB[2]
                  } return BB[yB[79]] > -yB[2] && BB[yB[52]].push((BB[yB[31]] | BB[yB[79]] << BB[yB[21]]) & yB[11]), GB(BB[yB[52]])
            }(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
          }! function(...BB) {
            function jB(...BB) {
              for (oB(BB[yB[12]] = yB[2], BB[-yB[91]] = [], BB[yB[19]] = yB[1], BB[-yB[51]] = BB[yB[1]].length, BB[yB[10]] = yB[17], BB[yB[31]] = yB[17]); BB[yB[19]] < BB[-yB[51]];) oB(BB[yB[10]] = BB[yB[1]].charCodeAt(BB[yB[19]]++), BB[yB[10]] >= yB[95] && BB[yB[10]] <= 56319 && BB[yB[19]] < BB[-yB[51]] ? (BB[yB[31]] = BB[yB[1]].charCodeAt(BB[yB[19]]++), (64512 & BB[yB[31]]) == yB[96] ? BB[-yB[91]].push(((BB[yB[10]] & yB[92]) << yB[41]) + (BB[yB[31]] & yB[92]) + yB[94]) : (BB[-yB[91]].push(BB[yB[10]]), BB[yB[19]]--)) : BB[-yB[91]].push(BB[yB[10]]));
              return BB[-yB[91]]
            }

            function zB(...BB) {
              if (BB[yB[12]] = yB[2], BB[yB[1]] >= yB[95] && BB[yB[1]] <= 57343) {
                function jB(...BB) {
                  for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = 'vOD0dEcp:QT@*j#U95ZuR$I=XzaL_?]%o7/fKC&).;qP{VgH|t"SM<+>kBe!bsFx,[nh864iW(^y~2mw1GYNl3J}rA`', BB[-yB[97]] = "" + (BB[yB[1]] || ""), BB[yB[4]] = BB[-yB[97]].length, BB[yB[52]] = [], BB[-yB[98]] = yB[1], BB[yB[21]] = yB[1], BB[yB[29]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[yB[4]]; BB[yB[15]]++)
                    if (BB[yB[58]] = BB[yB[5]].indexOf(BB[-yB[97]][BB[yB[15]]]), BB[yB[58]] !== -yB[2])
                      if (BB[yB[29]] < yB[1]) BB[yB[29]] = BB[yB[58]];
                      else {
                        oB(BB[yB[29]] += BB[yB[58]] * yB[30], BB[-yB[98]] |= BB[yB[29]] << BB[yB[21]], BB[yB[21]] += (BB[yB[29]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                        do {
                          oB(BB[yB[52]].push(BB[-yB[98]] & yB[11]), BB[-yB[98]] >>= yB[3], BB[yB[21]] -= yB[3])
                        } while (BB[yB[21]] > yB[23]);
                        BB[yB[29]] = -yB[2]
                      } return BB[yB[29]] > -yB[2] && BB[yB[52]].push((BB[-yB[98]] | BB[yB[29]] << BB[yB[21]]) & yB[11]), GB(BB[yB[52]])
                }

                function zB(...BB) {
                  return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = jB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
                }
                throw Error(hB(171) + zB(yB[55]) + zB(173) + BB[yB[1]].toString(16).toUpperCase() + (zB(yB[54]) + zB(175) + zB(yB[44]) + zB(177)))
              }
            }

            function QB(...jB) {
              return jB[yB[12]] = yB[19], BB[yB[2]](jB[yB[1]] >> jB[yB[2]] & yB[20] | yB[47])
            }

            function nB(...jB) {
              return jB[yB[12]] = yB[2], (4294967168 & jB[yB[1]]) == yB[1] ? BB[yB[2]](jB[yB[1]]) : (jB[yB[5]] = "", (4294965248 & jB[yB[1]]) == yB[1] ? jB[yB[5]] = BB[yB[2]](jB[yB[1]] >> yB[21] & yB[99] | yB[13]) : (4294901760 & jB[yB[1]]) == yB[1] ? oB(zB(jB[yB[1]]), jB[yB[5]] = BB[yB[2]](jB[yB[1]] >> yB[24] & yB[100] | yB[107]), jB[yB[5]] += QB(jB[yB[1]], yB[21])) : (4292870144 & jB[yB[1]]) == yB[1] && oB(jB[yB[5]] = BB[yB[2]](jB[yB[1]] >> yB[101] & yB[23] | yB[108]), jB[yB[5]] += QB(jB[yB[1]], yB[24]), jB[yB[5]] += QB(jB[yB[1]], yB[21])), jB[yB[5]] += BB[yB[2]](jB[yB[1]] & yB[20] | yB[47]), jB[yB[5]])
            }

            function dB(...jB) {
              if (jB[yB[12]] = yB[1], BB[yB[106]] >= BB[yB[18]]) throw Error(hB(178));
              if (oB(jB[yB[27]] = BB[yB[38]][BB[yB[106]]] & yB[11], BB[yB[106]]++), (jB[yB[27]] & yB[13]) == yB[47]) return jB[yB[27]] & yB[20];
              throw Error(function(BB) {
                return typeof NB[BB] === yB[16] ? NB[BB] = function(...BB) {
                  for (oB(BB[yB[12]] = yB[2], BB[yB[2]] = 'X>eUKEBiYP5vQ6Sng=]mN$0*7x.MuA/t)c&zp?T[IJ4,Zrw9}2y1bR#_Hf38j(Cl~do@a;<F`hWGO:s!D|Vqk%{L+"^', BB[yB[105]] = "" + (BB[yB[1]] || ""), BB[-yB[2]] = BB[yB[105]].length, BB[yB[52]] = [], BB[-yB[30]] = yB[1], BB[yB[21]] = yB[1], BB[yB[23]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[-yB[2]]; BB[yB[15]]++)
                    if (BB[yB[40]] = BB[yB[2]].indexOf(BB[yB[105]][BB[yB[15]]]), BB[yB[40]] !== -yB[2])
                      if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[yB[40]];
                      else {
                        oB(BB[yB[23]] += BB[yB[40]] * yB[30], BB[-yB[30]] |= BB[yB[23]] << BB[yB[21]], BB[yB[21]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                        do {
                          oB(BB[yB[52]].push(BB[-yB[30]] & yB[11]), BB[-yB[30]] >>= yB[3], BB[yB[21]] -= yB[3])
                        } while (BB[yB[21]] > yB[23]);
                        BB[yB[23]] = -yB[2]
                      } return BB[yB[23]] > -yB[2] && BB[yB[52]].push((BB[-yB[30]] | BB[yB[23]] << BB[yB[21]]) & yB[11]), GB(BB[yB[52]])
                }(uB[BB]) : NB[BB]
              }(179))
            }

            function IB(...jB) {
              if (oB(jB[yB[12]] = yB[1], jB[yB[5]] = yB[17], jB[yB[2]] = yB[17], jB[yB[109]] = yB[17], jB[yB[52]] = yB[17], jB[yB[10]] = yB[17]), BB[yB[106]] > BB[yB[18]]) {
                function QB(...BB) {
                  for (oB(BB[yB[12]] = yB[2], BB[yB[2]] = 'Cu_1AU`3$%(lJ})[{vL|S.j^OGT;ZyV>?9g4=n2m8RD:N*!<0@~w#I+5YtXF&7,Ex"6d]oz/MkrbeQHsaKqhBWfPicp', BB[yB[27]] = "" + (BB[yB[1]] || ""), BB[yB[4]] = BB[yB[27]].length, BB[yB[80]] = [], BB[yB[31]] = yB[1], BB[yB[9]] = yB[1], BB[yB[23]] = -yB[2]), BB[yB[3]] = yB[1]; BB[yB[3]] < BB[yB[4]]; BB[yB[3]]++)
                    if (BB[-yB[73]] = BB[yB[2]].indexOf(BB[yB[27]][BB[yB[3]]]), BB[-yB[73]] !== -yB[2])
                      if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[-yB[73]];
                      else {
                        oB(BB[yB[23]] += BB[-yB[73]] * yB[30], BB[yB[31]] |= BB[yB[23]] << BB[yB[9]], BB[yB[9]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                        do {
                          oB(BB[yB[80]].push(BB[yB[31]] & yB[11]), BB[yB[31]] >>= yB[3], BB[yB[9]] -= yB[3])
                        } while (BB[yB[9]] > yB[23]);
                        BB[yB[23]] = -yB[2]
                      } return BB[yB[23]] > -yB[2] && BB[yB[80]].push((BB[yB[31]] | BB[yB[23]] << BB[yB[9]]) & yB[11]), GB(BB[yB[80]])
                }

                function nB(...BB) {
                  return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = QB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
                }
                throw Error(nB(180))
              }
              if (BB[yB[106]] == BB[yB[18]]) return yB[111];
              if (oB(jB[yB[5]] = BB[yB[38]][BB[yB[106]]] & yB[11], BB[yB[106]]++), (jB[yB[5]] & yB[47]) == yB[1]) return jB[yB[5]];
              if ((jB[yB[5]] & yB[107]) == yB[13]) {
                if (oB(jB[yB[2]] = dB(), jB[yB[10]] = (jB[yB[5]] & yB[99]) << yB[21] | jB[yB[2]]), jB[yB[10]] >= yB[47]) return jB[yB[10]];
                throw Error(hB(181))
              }
              if ((jB[yB[5]] & yB[108]) == yB[107]) {
                if (oB(jB[yB[2]] = dB(), jB[yB[109]] = dB(), jB[yB[10]] = (jB[yB[5]] & yB[100]) << yB[24] | jB[yB[2]] << yB[21] | jB[yB[109]]), jB[yB[10]] >= 2048) return zB(jB[yB[10]]), jB[yB[10]];
                {
                  function IB(...BB) {
                    for (oB(BB[yB[12]] = yB[2], BB[-yB[110]] = 'Det6wEnRKvjXsaZfJPCIpTVrSNWdMFobUOhclqBQHAgkmiGLY8492[>1<;(=*{x+%~,`:uy.$3}!&"|]@#?^_/50z7)', BB[yB[27]] = "" + (BB[yB[1]] || ""), BB[yB[18]] = BB[yB[27]].length, BB[-yB[51]] = [], BB[yB[8]] = yB[1], BB[yB[74]] = yB[1], BB[yB[23]] = -yB[2]), BB[yB[3]] = yB[1]; BB[yB[3]] < BB[yB[18]]; BB[yB[3]]++)
                      if (BB[yB[43]] = BB[-yB[110]].indexOf(BB[yB[27]][BB[yB[3]]]), BB[yB[43]] !== -yB[2])
                        if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[yB[43]];
                        else {
                          oB(BB[yB[23]] += BB[yB[43]] * yB[30], BB[yB[8]] |= BB[yB[23]] << BB[yB[74]], BB[yB[74]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                          do {
                            oB(BB[-yB[51]].push(BB[yB[8]] & yB[11]), BB[yB[8]] >>= yB[3], BB[yB[74]] -= yB[3])
                          } while (BB[yB[74]] > yB[23]);
                          BB[yB[23]] = -yB[2]
                        } return BB[yB[23]] > -yB[2] && BB[-yB[51]].push((BB[yB[8]] | BB[yB[23]] << BB[yB[74]]) & yB[11]), GB(BB[-yB[51]])
                  }

                  function UB(...BB) {
                    return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = IB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
                  }
                  throw Error(UB(182))
                }
              }
              if ((jB[yB[5]] & yB[45]) == yB[108] && (oB(jB[yB[2]] = dB(), jB[yB[109]] = dB(), jB[yB[52]] = dB(), jB[yB[10]] = (jB[yB[5]] & yB[23]) << yB[101] | jB[yB[2]] << yB[24] | jB[yB[109]] << yB[21] | jB[yB[52]]), jB[yB[10]] >= yB[94] && jB[yB[10]] <= 1114111)) return jB[yB[10]];
              throw Error(hB(183))
            }
            BB[yB[12]] = yB[2], BB[yB[2]] = String.fromCharCode, oB(BB[yB[38]] = yB[17], BB[yB[18]] = yB[17], BB[yB[106]] = yB[17]), oB(BB[yB[1]].version = function(...BB) {
              return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = function(...BB) {
                for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = 'SGm(cWFu{q1x~z/ZTI327>sAei[#!<V^L,`O"vrj_t}H&Rn;=:aB%09pbl4D$)?d*f+]g@X5Qw|.yUhPC68KNoJMYEk', BB[yB[19]] = "" + (BB[yB[1]] || ""), BB[-yB[76]] = BB[yB[19]].length, BB[yB[10]] = [], BB[yB[90]] = yB[1], BB[yB[21]] = yB[1], BB[yB[79]] = -yB[2]), BB[yB[3]] = yB[1]; BB[yB[3]] < BB[-yB[76]]; BB[yB[3]]++)
                  if (BB[yB[28]] = BB[yB[5]].indexOf(BB[yB[19]][BB[yB[3]]]), BB[yB[28]] !== -yB[2])
                    if (BB[yB[79]] < yB[1]) BB[yB[79]] = BB[yB[28]];
                    else {
                      oB(BB[yB[79]] += BB[yB[28]] * yB[30], BB[yB[90]] |= BB[yB[79]] << BB[yB[21]], BB[yB[21]] += (BB[yB[79]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                      do {
                        oB(BB[yB[10]].push(BB[yB[90]] & yB[11]), BB[yB[90]] >>= yB[3], BB[yB[21]] -= yB[3])
                      } while (BB[yB[21]] > yB[23]);
                      BB[yB[79]] = -yB[2]
                    } return BB[yB[79]] > -yB[2] && BB[yB[10]].push((BB[yB[90]] | BB[yB[79]] << BB[yB[21]]) & yB[11]), GB(BB[yB[10]])
              }(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
            }(184), BB[yB[1]].encode = function(...BB) {
              for (oB(BB[yB[12]] = yB[2], BB[-yB[103]] = jB(BB[yB[1]]), BB[yB[102]] = BB[-yB[103]].length, BB[yB[4]] = -yB[2], BB[yB[104]] = yB[17], BB[yB[31]] = ""); ++BB[yB[4]] < BB[yB[102]];) oB(BB[yB[104]] = BB[-yB[103]][BB[yB[4]]], BB[yB[31]] += nB(BB[yB[104]]));
              return BB[yB[31]]
            }, BB[yB[1]].decode = function(...zB) {
              for (oB(zB[yB[12]] = yB[2], BB[yB[38]] = jB(zB[yB[1]]), BB[yB[18]] = BB[yB[38]].length, BB[yB[106]] = yB[1], zB[yB[2]] = [], zB[yB[19]] = yB[17]);
                (zB[yB[19]] = IB()) !== yB[111];) zB[yB[2]].push(zB[yB[19]]);
              return function(...jB) {
                for (oB(jB[yB[12]] = yB[2], jB[yB[2]] = jB[yB[1]].length, jB[yB[27]] = -yB[2], jB[yB[93]] = yB[17], jB[yB[10]] = ""); ++jB[yB[27]] < jB[yB[2]];) jB[yB[93]] = jB[yB[1]][jB[yB[27]]], jB[yB[93]] > 65535 && oB(jB[yB[93]] -= yB[94], jB[yB[10]] += BB[yB[2]](jB[yB[93]] >>> yB[41] & yB[92] | yB[95]), jB[yB[93]] = yB[96] | jB[yB[93]] & yB[92]), jB[yB[10]] += BB[yB[2]](jB[yB[93]]);
                return jB[yB[10]]
              }(zB[yB[2]])
            })
          }(typeof exports === BB(yB[80]) + BB(186) ? this.utf8 = {} : exports)
        }
        hB(yB[110]) in LB && XB(), BB[yB[4]] *= BB[yB[27]]
      }
      const pB = BB[yB[21]][jB(187) + jB(188) + jB(yB[117])],
        rB = pB ? Math[jB(190)](pB, BB[yB[4]]) : BB[yB[4]];
      nB()[jB(yB[38]) + jB(yB[13])](aB, aB);
      const sB = BB[yB[23]] !== yB[59] && void 0 !== BB[yB[23]] ? BB[yB[23]] : BB[yB[21]][jB(193) + jB(194) + jB(yB[104]) + jB(196)];
      if (rB > yB[1]) {
        function ZB(...BB) {
          for (oB(BB[yB[12]] = yB[2], BB[yB[5]] = 'GyePl`=WE;0UOtY>/Z*^baHjCih4k,g_n%J2+N}r|z?R)5o].<9&cm:L({p#sxVK3$1@B~XQSM7D8wfvA!6"u[FTIqd', BB[yB[29]] = "" + (BB[yB[1]] || ""), BB[-yB[57]] = BB[yB[29]].length, BB[yB[10]] = [], BB[yB[8]] = yB[1], BB[yB[23]] = yB[1], BB[-yB[113]] = -yB[2]), BB[yB[3]] = yB[1]; BB[yB[3]] < BB[-yB[57]]; BB[yB[3]]++)
            if (BB[yB[112]] = BB[yB[5]].indexOf(BB[yB[29]][BB[yB[3]]]), BB[yB[112]] !== -yB[2])
              if (BB[-yB[113]] < yB[1]) BB[-yB[113]] = BB[yB[112]];
              else {
                oB(BB[-yB[113]] += BB[yB[112]] * yB[30], BB[yB[8]] |= BB[-yB[113]] << BB[yB[23]], BB[yB[23]] += (BB[-yB[113]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                do {
                  oB(BB[yB[10]].push(BB[yB[8]] & yB[11]), BB[yB[8]] >>= yB[3], BB[yB[23]] -= yB[3])
                } while (BB[yB[23]] > yB[23]);
                BB[-yB[113]] = -yB[2]
              } return BB[-yB[113]] > -yB[2] && BB[yB[10]].push((BB[yB[8]] | BB[-yB[113]] << BB[yB[23]]) & yB[11]), GB(BB[yB[10]])
        }

        function AB(...BB) {
          return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = ZB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
        }
        let TB = BB[yB[19]][jB(197) + AB(198)] * sB;
        if (!UB) {
          function WB(...BB) {
            for (oB(BB[yB[12]] = yB[2], BB[yB[2]] = 'ci<+re0.t_!u#3Zv1dxn&j"~S6^9]zU:7;C`Hm)/Lw>[bIp|}MJAX%?,5yoF=V4@{EKGlYT2g$k8RN(*QfOPqsDahBW', BB[-yB[73]] = "" + (BB[yB[1]] || ""), BB[yB[4]] = BB[-yB[73]].length, BB[-yB[115]] = [], BB[yB[8]] = yB[1], BB[yB[58]] = yB[1], BB[yB[23]] = -yB[2]), BB[-yB[114]] = yB[1]; BB[-yB[114]] < BB[yB[4]]; BB[-yB[114]]++)
              if (BB[-yB[78]] = BB[yB[2]].indexOf(BB[-yB[73]][BB[-yB[114]]]), BB[-yB[78]] !== -yB[2])
                if (BB[yB[23]] < yB[1]) BB[yB[23]] = BB[-yB[78]];
                else {
                  oB(BB[yB[23]] += BB[-yB[78]] * yB[30], BB[yB[8]] |= BB[yB[23]] << BB[yB[58]], BB[yB[58]] += (BB[yB[23]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                  do {
                    oB(BB[-yB[115]].push(BB[yB[8]] & yB[11]), BB[yB[8]] >>= yB[3], BB[yB[58]] -= yB[3])
                  } while (BB[yB[58]] > yB[23]);
                  BB[yB[23]] = -yB[2]
                } return BB[yB[23]] > -yB[2] && BB[-yB[115]].push((BB[yB[8]] | BB[yB[23]] << BB[yB[58]]) & yB[11]), GB(BB[-yB[115]])
          }

          function eB(...BB) {
            return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = WB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
          }
          TB *= BB[yB[19]][AB(199) + eB(yB[6])]
        }
        let PB = BB[yB[19]][AB(201) + AB(202) + "ss"] * rB;
        if (rB < .3) {
          function lB(...BB) {
            for (oB(BB[yB[12]] = yB[2], BB[yB[118]] = '832<.=>}:x4fi?9humFB{Y/sMc17]K65;#je%a^@lTgDVCrEPbZWqQO*JztA,!UIvpRkG|`"yow+[SL~X_0($)Hd&Nn', BB[yB[116]] = "" + (BB[yB[1]] || ""), BB[yB[4]] = BB[yB[116]].length, BB[yB[52]] = [], BB[yB[8]] = yB[1], BB[-yB[117]] = yB[1], BB[yB[79]] = -yB[2]), BB[yB[15]] = yB[1]; BB[yB[15]] < BB[yB[4]]; BB[yB[15]]++)
              if (BB[yB[117]] = BB[yB[118]].indexOf(BB[yB[116]][BB[yB[15]]]), BB[yB[117]] !== -yB[2])
                if (BB[yB[79]] < yB[1]) BB[yB[79]] = BB[yB[117]];
                else {
                  oB(BB[yB[79]] += BB[yB[117]] * yB[30], BB[yB[8]] |= BB[yB[79]] << BB[-yB[117]], BB[-yB[117]] += (BB[yB[79]] & yB[33]) > yB[34] ? yB[35] : yB[36]);
                  do {
                    oB(BB[yB[52]].push(BB[yB[8]] & yB[11]), BB[yB[8]] >>= yB[3], BB[-yB[117]] -= yB[3])
                  } while (BB[-yB[117]] > yB[23]);
                  BB[yB[79]] = -yB[2]
                } return BB[yB[79]] > -yB[2] && BB[yB[52]].push((BB[yB[8]] | BB[yB[79]] << BB[-yB[117]]) & yB[11]), GB(BB[yB[52]])
          }

          function wB(...BB) {
            return BB[yB[12]] = yB[2], typeof NB[BB[yB[1]]] === yB[16] ? NB[BB[yB[1]]] = lB(uB[BB[yB[1]]]) : NB[BB[yB[1]]]
          }

          function xB(...BB) {
            BB[yB[12]] = yB[1]
          }
          wB(203) in LB && xB(), PB *= rB
        }
        TB > PB && (TB = PB), oB(nB()[AB(204)](aB, aB, TB), BB[yB[10]][AB(205) + AB(206)](aB))
      }
      BB[yB[10]][jB(207) + yB[119]] = BB[yB[19]][jB(yB[48]) + jB(yB[58]) + yB[119]] * (UB ? QB : IB)
    }
  },
  37748: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      e: () => NB
    });
    var QB = zB(37756),
      nB = zB(1948);
    const dB = 2,
      IB = 1,
      NB = {
        fN: 1,
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

    function uB(BB, jB, zB, NB, uB, UB, aB) {
      if (uB.speed) return (0, QB.e)(jB, zB, NB, uB, UB, aB, BB), void(uB.ticksToReachMaxIdleFriction = dB);
      const pB = NB.isOnGround(),
        rB = jB.bloxd.getSyncedClientOptions(jB.bloxd.getPlayerReader(zB)),
        sB = null === rB ? jB.bloxd.getClientPredictedOption(zB, "groundFrictionScale") : rB.groundFrictionScale,
        JB = null === rB ? jB.bloxd.getClientPredictedOption(zB, "airFrictionScale") : rB.airFrictionScale,
        mB = pB ? sB : JB,
        yB = Math.max(IB, mB),
        kB = uB.ticksToReachMaxIdleFriction / dB,
        GB = (0, nB.z)(yB, mB, kB);
      UB.friction = BB.standingFriction * ((null === rB ? jB.bloxd.getClientPredictedOption(zB, "airMomentumConservation") : rB.airMomentumConservation) ? GB : mB), uB.ticksToReachMaxIdleFriction > 0 && uB.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);