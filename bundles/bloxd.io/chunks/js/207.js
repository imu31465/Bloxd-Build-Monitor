export const id = 207;
export const ids = [207];
export const modules = {
  37420: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => DB
    });
    var VB = dB(184),
      yB = dB(36552);
    const pB = 1.2,
      lB = {
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
        ho: .5,
        CTB: !1
      },
      JB = {
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
        ho: .5,
        CTB: !1
      },
      YB = {
        physicsBodyDimensions: {
          width: VB.c.lE,
          height: VB.c.kE
        },
        hitBoxDimensions: {
          width: VB.c.lE + .4,
          height: VB.c.kE + .6
        },
        eyeHeight: VB.c.kE * VB.c.playerEyeToHeightRatio,
        rideHeight: VB.c.kE - .3,
        ho: .5,
        CTB: !1
      },
      gB = {
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
        ho: .5,
        CTB: !1
      },
      oB = {
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
        ho: .5,
        CTB: !1
      },
      kB = {
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
        ho: .5,
        CTB: !1
      },
      LB = {
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
        ho: .5,
        CTB: !1
      },
      OB = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: VB.c.lE,
            height: VB.c.kE
          },
          hitBoxDimensions: {
            width: VB.c.lE + .4,
            height: VB.c.kE + .6
          },
          eyeHeight: VB.c.kE * VB.c.playerEyeToHeightRatio,
          rideHeight: VB.c.kE - .1,
          ho: yB.i.ho,
          CTB: !0
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
        },
        Camel: {
          modelScale: pB,
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
        },
        "Cave Golem": lB,
        "Draugr Zombie": {
          ...YB,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": YB,
        "Frost Golem": lB,
        "Frost Zombie": {
          ...YB,
          defaultPose: "zombie"
        },
        "Frost Skeleton": YB,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: VB.c.lE,
            height: VB.c.kE
          },
          hitBoxDimensions: {
            width: VB.c.lE + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          ho: .5,
          CTB: !1
        },
        Wolf: gB,
        Bear: oB,
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
          ho: .5,
          CTB: !1
        },
        Stag: kB,
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
          ho: .5,
          CTB: !1
        },
        Gorilla: LB,
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
          ho: .5,
          CTB: !1
        },
        "Draugr Huntress": YB,
        "Magma Golem": lB,
        "Spirit Golem": lB,
        "Spirit Wolf": gB,
        "Spirit Bear": oB,
        "Spirit Stag": kB,
        "Spirit Gorilla": LB,
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: VB.c.lE,
            height: VB.c.kE
          },
          hitBoxDimensions: {
            width: VB.c.lE + .4,
            height: VB.c.kE + .6
          },
          eyeHeight: VB.c.kE * VB.c.playerEyeToHeightRatio,
          rideHeight: VB.c.kE - .1,
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: VB.c.lE,
            height: VB.c.kE
          },
          hitBoxDimensions: {
            width: VB.c.lE + .4,
            height: VB.c.kE + .6
          },
          eyeHeight: VB.c.kE * VB.c.playerEyeToHeightRatio,
          rideHeight: VB.c.kE - .1,
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
        },
        Zombie: {
          ...YB,
          defaultPose: "zombie"
        },
        Skeleton: YB,
        Mummy: {
          ...YB,
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
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
          ho: .5,
          CTB: !1
        },
        "Iron Guardian": JB,
        "Gold Guardian": JB,
        "Diamond Guardian": JB,
        "Moonstone Guardian": JB,
        "Iron Goofy Golem": JB,
        "Gold Goofy Golem": JB,
        "Diamond Goofy Golem": JB,
        "Moonstone Goofy Golem": JB,
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
          ho: .5,
          CTB: !1
        }
      };

    function DB(BB) {
      return OB[BB]
    }
  },
  36e3: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    const VB = {
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
  36561: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(287),
      yB = dB.n(VB),
      pB = dB(1652);
    let lB;
    var JB, YB, gB, oB, kB, LB, OB, DB, uB;
    const HB = ["b", 0, 1, 8, 198, "a", 218, 239, 5, "f", 235, 255, "length", "c", "d", 227, 130, "undefined", "e", 63, 6, "fromCodePoint", 7, 12, "push", 188, 123, 3, 73, "i", 91, 8191, 88, 13, 14, 221, 2, void 0, 4, 119, 141, !1, !0, 127, 128, 173, 9, "g", 98, 61, 129, 142, 143, null, 137, 138, 139, 140, 144, 145, 146, 155, 156, 157, 158, 159, 160, 68, 192, "gp", 79, "s", 165, 161, "h", 66, 189, 39, 31, 176, 24, 75, 215, 69, "on"];

    function EB(...BB) {
      return BB[HB[12]] = HB[2], typeof JB[BB[HB[1]]] === HB[17] ? JB[BB[HB[1]]] = function(...BB) {
        for (UB(BB[HB[12]] = HB[2], BB[HB[5]] = 'eA4`X+,Gi|quUsHIoa.nF!0W:6&Bjl^@CL<Yhb#pR)]gdSJ1TN3QzcrV*DE(vZ8mw%OkP=Ktf;xy5_9?$"{>2/7}[~M', BB[HB[0]] = "" + (BB[HB[1]] || ""), BB[HB[4]] = BB[HB[0]].length, BB[HB[10]] = [], BB[HB[8]] = HB[1], BB[HB[9]] = HB[1], BB[-HB[7]] = -HB[2]), BB[HB[3]] = HB[1]; BB[HB[3]] < BB[HB[4]]; BB[HB[3]]++)
          if (BB[-HB[6]] = BB[HB[5]].indexOf(BB[HB[0]][BB[HB[3]]]), BB[-HB[6]] !== -HB[2])
            if (BB[-HB[7]] < HB[1]) BB[-HB[7]] = BB[-HB[6]];
            else {
              UB(BB[-HB[7]] += BB[-HB[6]] * HB[30], BB[HB[8]] |= BB[-HB[7]] << BB[HB[9]], BB[HB[9]] += (BB[-HB[7]] & HB[31]) > HB[32] ? HB[33] : HB[34]);
              do {
                UB(BB[HB[10]].push(BB[HB[8]] & HB[11]), BB[HB[8]] >>= HB[3], BB[HB[9]] -= HB[3])
              } while (BB[HB[9]] > HB[22]);
              BB[-HB[7]] = -HB[2]
            } return BB[-HB[7]] > -HB[2] && BB[HB[10]].push((BB[HB[8]] | BB[-HB[7]] << BB[HB[9]]) & HB[11]), vB(BB[HB[10]])
      }(YB[BB[HB[1]]]) : JB[BB[HB[1]]]
    }

    function vB(...BB) {
      return BB[HB[12]] = HB[2], typeof oB !== HB[17] && oB ? (new oB).decode(new kB(BB[HB[1]])) : typeof LB !== HB[17] && LB ? LB.from(BB[HB[1]]).toString("utf-8") : uB(BB[HB[1]])
    }

    function mB() {}
    UB(JB = {}, YB = ["FD@,G?6cnDM0#NWY98Sqvpa)EH);*IK#tQ=z@/lc`", "pt5G}#*zNU]!UBbbD|NB8?gGXspq!fY^Erw|8pYD&8uTj>AbbD|y_5A6hDvuA", "LDDQNKTz5amJ&+F<Ea|B{5rJnr4^jB7BU.bG", "Nr=xcpR.3Db;otaB/]t5s36G3vE.*BJp", "0QQi[>SY9mQ!W&X#`CX3$t]JM(/hO6!<hTJN0/+mDaIyab70{S@;ehZ)T.p", ":R23vp4wUH7KaojaW%y+6", "zTR^F3nGd%FV/h70GUT;LzpAU(wYDf;p<W6y//dJ?if;G`4bUNc@l", "{b;,mcnG8I^?F>cjy]3C0z[<RE=_9HK.>jS@H#|s~8$K>tg&zQpNQ_F4", "tb=tUxE.,wyX>#vY~ai,e<`)YwI<DvV)f`8jKT@Y?II{ZTq", "pU3C)Y0wKEg", ",NW;s5mW+qtIENi#5aX3SNA}AI", ')TqQ?"dEUHePW(g6', '9Sc@D?nY"v<<<NR&', "]t1XQJe", "*,Ul~1A)emWE#b2jG.JGD2!1=Ew.Utx#P<vlcQ$JuafK$$}l8@J5jYBGXs:", 'z@_t(K4K*EF=zvMoLRvxS$F:5(5xm`()|lhld$x^em"k7#W)W%Sqj', "jWC^%?DA", "IQG|OT/A+q*YipFjA|e9#;E:#seyn(=6t]|B{#JU,s2Io>ZhYgKtLPQA", 'II:;$hzPAI.T|TR#$K^jZp&4E%8({"R@C,a96', "ClRry>nYOnZAKs%hXrA", "9H^Go5fxOr>IT>yp{%W,2>aGeUvC+h0j", '%QAy/35<Ps"+IHLbk|QiKcks)F3!M6%hFIG5"SGm/nDC*IHFG.yCn>;A', "$*Yx*KOUDFh!ht>)}`T,M(e", 'Sg>_zp#haUZGDT6l{Kf;(Qb=cs"Kz(#.<xW|', "2%NCR*Ys:aGPZhL@[a=Vd$ns{n", "$%M+:>H:B(Uyo`", '_*&Qv2=D0n[xeo"<ce', "|mWX/5Hz%D.?xK!BrF+@%p$,G", "HbtX]Ns==sw.@4n<t%.fk?@m`n*GzBT<mR`", "E%hx55dEtw]`U1TBE<>_[z*.7s:", ".CF_X?77Jiu`iBw:$@rXM504yFFf?`G:GC53SZ=lnvB?2(X^pW4", "Ivxi:16l`v?N^+S&8b/x1Eq^68~6A", "LgVzL;|s`", "/KdlRyQyya>K6b5&!UzqG=}WYD{3|h.Rm(^G}S5xxHz(+fZaavoL@;csM8iyA", 'r`@zrcIGu%{_m#Sp@gYC$"e', "1F6BX8ncEusaV{g&#8`", '"TDCvcK,)aZXgEO:hrL,', ")Rgf?xL1:FY@hB^hQbrjnDf.LrwCi`", 'H|OibR^UJmf6[t$p#D8;g{REdijE^b1plx[,U8$:"voFf(E]', "xSn_Df7:;%yINX", "!W7jG=|)Yw70n4", "eR/xUxiEAUn`$Bu&JQAQS$e", "Ea)QpN+)Ar&Eu{ZhUA", "j<mjU7Ln*EY", 'WvfQ,<p1s.}A7N@l%P3f?D"Q%D2CWHL]3RW5Zv.inr6fg&ha,N1jB', "6C1zR1B)pE:f$he:TU/&pblGRs", ';%1ryxZ)d%3$}47oBJZX4"CUOv](HbU', "lJSjnDpstEN=14b:P|?|", "K%r|YyqKmmO;+o1&lWPxj1L1S.}ln&c)3t956>e", "*W=@&#jhQU5YA", '$,*,3P~/2wjsbX[)VR?Xx")1{m5c"$f#Yx/tP<cs"rVmu&r<<lhlEve', "SgCrhykW,qZj(EeWHX%,E_=WfaxkdXR@9(2xdZmDXnWFB{0R[(/G&", '}p3iLY>sO|7x3HVR1@),1PEE|EDKAfLagDIzO8W"TO|b(KB)j&HV^zmW:s)', "3T)C$Vh^kr!,jt3jcrPG.h(s`", "VHP&[#E:tE+1|oy#JD!j<z#zZHtX4+8aEH[;OfXKYngTu3vW;e", 'tb:N/LB=iF^?zXn)"Q[r@Y+no|^8$Bmhs&:rw?OU0s', "qN=q%h/D]8l%qbH", "{T>+.D/Y@v.{o1La0PAB*Je", "VFFx;v~?%mC", '?*}z9"7<2DV$wh#:!,mz]yMRE(!@CtZh(Ti9T2*^LUEKDs%W', 'YDi,2t^^q8jaH",', '!mAyq"MU+nEH/h$Bot/32t5Ue||QJ6V)SbiL|=mmZuG,rZ7R~8mri7f,4mp', "=TW;dY%sLrc=GB.j#%{C|?kl2s", "[u?Xn8(l,nfjZ:^arT?|BR1/Ba35GB^hBWpj<Z*^(u,%}&^Wz@4", '^URNCRO.2D1=csM):|^5"">G`', 'OTcq~9IcBF_"5`Bay8(iH3WnhnhGI34bFQl@VmERkUWEHZs', "QF}ze7=m}s:8Af5nK,7@^ZalLOz!<Z5pm(O_:9}A%r6Qj(X:7Hay<RkYAU", "TrEc(J^.(H9N]bHFGW$rUVe", "cS]C<;unTvK.$1C:vbECAV`}FwN(z`=nn&4", "JUtXzm{UQ|xK/Xkh(TVj_SWc&8nbA", "B%W5&>9xeUUVJNQB*S1jpr_G5%BaA2AgrtR,j$h$QDa?M6i6uJr@w?e", '>jR;*J[Rmv!5}t=67HVN"##Uj(L:I4mlw;=&?5*z+qR@U`,@', "(|AQCRVGcrC<F>8:vj!q|7#^is", "jPy3{L4EFnisiBI", '<l3CBY:^!rwu&"20JtmN<;IsLOp5*XN&3e', "4mirG<Smcn`b~X", "?K&ly=^h`", '`.Ly^ttGhD0`qZn<ar9GM#JE".8(T>C]sUi^zb8P.U/xUp?B', 'egar"V37yaw;}&=bLlSV^ze', "k|T,pm]$Or)8EZX@2@Ux&##:>wKNNXoBE(o|U", "`l}5Pf,iU(;JA", "v|*|a>5JGVvjn{L@Fl!Vq7e", "J8Fl#1}=y%IyW3ZaGW6,!57U+", 'N%/xQycs"|C@eBBYXrQq)m5RNIMk[hE)|la,', "M%+@fVgnEF", "PQG,YRK:>r]aj(qF`l_x`8%D_i", "]U+xXcI)Xrif5IWjjt/3F", "ETKX<$SDgub", "mPcX$3sA", '"HMQxhQYE(~ipH|pd8lV0', "AD~QQK@YFn26Q#6j?88G", "Am]f_5[<fsyk<E,#M<NrfhW)J!d@jt7<HJ<B]yZAOmH,svG6w@1zj", ".|Pq|hh.{D2hM6C]..:^K8=={rY5epChmr>_E_aAIO@aso,6otw,", '?SL,K"U4*%.=:ff.c%7;thLY+rZ.(HaF<gX3,?*.S*~D~h`@aUm5d$]4', '!JxQmEVlOI3;Ct+:[plGI"e', "gD&y+VT^+", ",D>ccf97}sKO^N|@+CZGF", '"(J|[#4^mi{JY36Y', 'sb>+;D5J"vv(Zv<.sIp;Gxe', "jI~rkfz$@IoB*>u&!I4", '"bDQkJmWq8(HC1%bM*R,O"4$j8d5GB%W2Qnl{3?skn{K;h<:Ve', "KP4+x5$J)FvC(HBj{`,Gi88E6aUqZ:%a&A", '$;y_?#=DwUlq9"5&[(pr75.4*%eB&+7YaJh@mEdwhwA{So})&RhqNKe', '^Jk&shkW<IU<i`X^((qly8JR;%jaM"[j$*rXs32JS.vHftOhWA', 'rU(_2(V)(*{_46whnvr@;"j:Vw;JF`', "{,bGY$]UPs3u`3h.$*Yq", "ACe^sh@li%Y", "^%[Q)ysG)auyLZ20LTBxh$.K,E7hAh2j]81ze7oJAr<5bXrRd<o,0", 't|AB#$N)@!D_I1Eh"S7N3yZ)3|^ffvcBZ%4', "UbycCY^hkvS={NYb", "<lj_Y1mAS8[kqZIpSR`", "VrZV$5@)=nq^A", "4I1|6RRE4|%.]sI&<xC|rc~lNm/K[(R.oD#X`7zPXw9iv>pn$e", "I|{C3*7UhDE", '"HWND_uyTUEKV`5n`X]BS$ZY^m4rd`', 'qmBl1pQs]u_"|2Kbw8:QY9f,fEQmBHQj$b/xf?@yzrj8iIT&ze', 'jtlzz2@"Zc*;ZX|#N<IzvJ1G[F["gE5&v`|B<9}A', "Wxmz@z2z!rGZo`g6{S,|tV#.%ryCX>B]+XmXep@1$m^V)XN<6A", "A.d_?#%sTv*jY4", "1D%rn8&^?i[k7#,", 'gW+q"zRhBH||gH=6trZz"8.xOUY', "oRvqVKKE/rTN!fjh#v|^ihRz:s4<1HR6}<i|", "p`RN1Kc17E+EVKy&X&bVcyM$9*4QV#u#Vr05AchE%I", 'OQ#@_"F4', ":dcfuw*H", "I+gjA)3a", '&Q"6', "<{g6_dx", "&+zv", "c/;<G3U", "HI@W,c5]", "7IRh%k5]", "IIvW", "HIz~?a+]", "*IEc5cC]", "r}z~ig6]", ")0M~C", "HIz~5cC]", "r}@W7BM]", "+_D1)kH]", "BrD))g+]", "3bq)`~H]", "ubkc~QC]", "h}~T8z/]", "t_RhyBC]", "){kcG~(#", "d22)S", "=I@W", "vIzTV", "_0t)=", "hneb@6l]", "qGm<S", "HIz~?aqVR", "y5pvjTeBR", "00P<ITVQR", "t_b)|>,]", ")<b1=kU", "t_b)Sg7]", "r}D)ic0#", "h}L)fBn]", "={kcG~U", "@5WbFLG]", ")!wx", "F=fn", "W@7G", "c/fn", 'F=,G"', "a2;G", "YjRx", "EGL1", "%IM~gQ_]", "%Wg3y9#0", "#$4Wld9]", "753cQQ5]", "L<K1", "[_m<", "u0b)[z/]", "qTK1", "70K)acM]", "0{m|0B,]", "`uCWBQC]", "e/3EfBU", "EM*|~b0s", "4t*m", "[(q:$J6]", "?(p~^sez", "lRv,n+N", "TdCj#+.s", "(e*|_1Us", "S0@aw@[B", "Lt[mH{A", "Y~9tE%bB", "+[DgR", ">bkc~QC]", "70K)L~&]"]), UB(gB = function(...BB) {
      UB(BB[HB[12]] = HB[1], BB[HB[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[HB[2]] = HB[37], BB[HB[13]] = []);
      try {
        UB(BB[HB[2]] = Object, BB[HB[13]][HB[24]]("".__proto__.constructor.name))
      } catch (YB) {}
      BB: for (BB[HB[14]] = HB[1]; BB[HB[14]] < BB[HB[15]][HB[12]]; BB[HB[14]]++) try {
        for (BB[HB[2]] = BB[HB[15]][BB[HB[14]]](), BB[HB[16]] = HB[1]; BB[HB[16]] < BB[HB[13]][HB[12]]; BB[HB[16]]++)
          if (typeof BB[HB[2]][BB[HB[13]][BB[HB[16]]]] === HB[17]) continue BB;
        return BB[HB[2]]
      } catch (YB) {}
      return BB[HB[2]] || this
    }() || {}, oB = gB.TextDecoder, kB = gB.Uint8Array, LB = gB.iD, OB = gB.String || String, DB = gB.Array || Array, uB = function(...BB) {
      return UB(BB[HB[12]] = HB[1], BB[HB[13]] = new DB(HB[44]), BB[HB[25]] = OB[HB[21]] || OB.fromCharCode, BB[HB[18]] = []),
        function(TB) {
          var dB, VB, yB, pB;
          for (UB(VB = void 0, yB = TB[HB[12]], BB[HB[18]][HB[12]] = HB[1]), pB = HB[1]; pB < yB;) UB(VB = TB[pB++], VB <= HB[43] ? dB = VB : VB <= 223 ? dB = (VB & HB[78]) << HB[20] | TB[pB++] & HB[19] : VB <= HB[7] ? dB = (15 & VB) << HB[23] | (TB[pB++] & HB[19]) << HB[20] | TB[pB++] & HB[19] : OB[HB[21]] ? dB = (VB & HB[22]) << 18 | (TB[pB++] & HB[19]) << HB[23] | (TB[pB++] & HB[19]) << HB[20] | TB[pB++] & HB[19] : (dB = HB[19], pB += HB[27]), BB[HB[18]][HB[24]](BB[HB[13]][dB] || (BB[HB[13]][dB] = BB[HB[25]](dB))));
          return BB[HB[18]].join("")
        }
    }());
    const iB = yB()[EB(HB[26])](),
      NB = yB()[EB(HB[26])](),
      tB = yB()[EB(HB[26])](),
      fB = yB()[EB(HB[26])](),
      sB = yB()[EB(HB[26])](),
      MB = yB()[EB(HB[26])](),
      zB = yB()[EB(HB[26])](),
      wB = (BB, TB, dB) => {
        function VB(...BB) {
          return BB[HB[12]] = HB[2], typeof JB[BB[HB[1]]] === HB[17] ? JB[BB[HB[1]]] = function(...BB) {
            for (UB(BB[HB[12]] = HB[2], BB[HB[2]] = 'xHanqVfB6{vPb.S;G(mJ2zp9][=&LR_0j~3uEI$WM@/+stlAyDig5N:*}KX^>whF<orZ)k4d!TQ?C%,YUce"18#O|`7', BB[-HB[6]] = "" + (BB[HB[1]] || ""), BB[HB[27]] = BB[-HB[6]].length, BB[-HB[35]] = [], BB[HB[18]] = HB[1], BB[HB[20]] = HB[1], BB[HB[22]] = -HB[2]), BB[HB[28]] = HB[1]; BB[HB[28]] < BB[HB[27]]; BB[HB[28]]++)
              if (BB[HB[29]] = BB[HB[2]].indexOf(BB[-HB[6]][BB[HB[28]]]), BB[HB[29]] !== -HB[2])
                if (BB[HB[22]] < HB[1]) BB[HB[22]] = BB[HB[29]];
                else {
                  UB(BB[HB[22]] += BB[HB[29]] * HB[30], BB[HB[18]] |= BB[HB[22]] << BB[HB[20]], BB[HB[20]] += (BB[HB[22]] & HB[31]) > HB[32] ? HB[33] : HB[34]);
                  do {
                    UB(BB[-HB[35]].push(BB[HB[18]] & HB[11]), BB[HB[18]] >>= HB[3], BB[HB[20]] -= HB[3])
                  } while (BB[HB[20]] > HB[22]);
                  BB[HB[22]] = -HB[2]
                } return BB[HB[22]] > -HB[2] && BB[-HB[35]].push((BB[HB[18]] | BB[HB[22]] << BB[HB[20]]) & HB[11]), vB(BB[-HB[35]])
          }(YB[BB[HB[1]]]) : JB[BB[HB[1]]]
        }
        VB(124) + "L" in mB && function() {
          var BB, TB = function(...TB) {
            return TB[HB[12]] = HB[36], BB({}, TB[HB[1]], TB[HB[2]])
          };
          UB(BB = function(...TB) {
            if (UB(TB[HB[12]] = HB[27], TB[HB[39]] = {}), TB[HB[1]][TB[HB[2]] + TB[HB[36]]] !== HB[37]) return TB[HB[1]][TB[HB[2]] + TB[HB[36]]];
            if (TB[HB[2]] === TB[HB[36]]) return HB[42];
            for (TB[HB[38]] = HB[1]; TB[HB[38]] < TB[HB[2]].length; TB[HB[38]]++) TB[HB[39]][TB[HB[2]][TB[HB[38]]]] === HB[37] && (TB[HB[39]][TB[HB[2]][TB[HB[38]]]] = HB[1]), TB[HB[39]][TB[HB[36]][TB[HB[38]]]] === HB[37] && (TB[HB[39]][TB[HB[36]][TB[HB[38]]]] = HB[1]), UB(TB[HB[39]][TB[HB[2]][TB[HB[38]]]]++, TB[HB[39]][TB[HB[36]][TB[HB[38]]]]--);
            for (TB[HB[40]] in TB[HB[39]])
              if (TB[HB[39]][TB[HB[40]]] !== HB[1]) return TB[HB[1]][TB[HB[2]] + TB[HB[36]]] = HB[41], HB[41];
            for (TB[HB[14]] = HB[2]; TB[HB[14]] < TB[HB[2]].length; TB[HB[14]]++)
              if (BB(TB[HB[1]], TB[HB[2]].substr(HB[1], TB[HB[14]]), TB[HB[36]].substr(HB[1], TB[HB[14]])) && BB(TB[HB[1]], TB[HB[2]].substr(TB[HB[14]]), TB[HB[36]].substr(TB[HB[14]])) || BB(TB[HB[1]], TB[HB[2]].substr(HB[1], TB[HB[14]]), TB[HB[36]].substr(TB[HB[36]].length - TB[HB[14]])) && BB(TB[HB[1]], TB[HB[2]].substr(TB[HB[14]]), TB[HB[36]].substr(HB[1], TB[HB[36]].length - TB[HB[14]]))) return TB[HB[1]][TB[HB[2]] + TB[HB[36]]] = HB[42], HB[42];
            return TB[HB[1]][TB[HB[2]] + TB[HB[36]]] = HB[41], HB[41]
          }, console.log(TB))
        }();
        const pB = MB;
        return yB()[VB(125) + VB(126)](pB, dB), yB()[VB(HB[43])](BB, pB, yB()[VB(HB[44])](pB, TB))
      };

    function UB() {
      UB = function() {}
    }
    lB = (...BB) => {
      function TB(...BB) {
        return BB[HB[12]] = HB[2], typeof JB[BB[HB[1]]] === HB[17] ? JB[BB[HB[1]]] = function(...BB) {
          for (UB(BB[HB[12]] = HB[2], BB[HB[2]] = 'U#]2$vRx1<WJ5j*I,sHVM@!%&S_qC?=E)y/t7u+Z}fo08rl[9X6b^4nh:{NLGY`"mw.Dz>3k;|T(c~gPBQdKpaAFOie', BB[HB[0]] = "" + (BB[HB[1]] || ""), BB[HB[27]] = BB[HB[0]].length, BB[HB[38]] = [], BB[HB[48]] = HB[1], BB[HB[49]] = HB[1], BB[HB[47]] = -HB[2]), BB[-HB[45]] = HB[1]; BB[-HB[45]] < BB[HB[27]]; BB[-HB[45]]++)
            if (BB[HB[46]] = BB[HB[2]].indexOf(BB[HB[0]][BB[-HB[45]]]), BB[HB[46]] !== -HB[2])
              if (BB[HB[47]] < HB[1]) BB[HB[47]] = BB[HB[46]];
              else {
                UB(BB[HB[47]] += BB[HB[46]] * HB[30], BB[HB[48]] |= BB[HB[47]] << BB[HB[49]], BB[HB[49]] += (BB[HB[47]] & HB[31]) > HB[32] ? HB[33] : HB[34]);
                do {
                  UB(BB[HB[38]].push(BB[HB[48]] & HB[11]), BB[HB[48]] >>= HB[3], BB[HB[49]] -= HB[3])
                } while (BB[HB[49]] > HB[22]);
                BB[HB[47]] = -HB[2]
              } return BB[HB[47]] > -HB[2] && BB[HB[38]].push((BB[HB[48]] | BB[HB[47]] << BB[HB[49]]) & HB[11]), vB(BB[HB[38]])
        }(YB[BB[HB[1]]]) : JB[BB[HB[1]]]
      }
      BB[HB[12]] = HB[3];
      const dB = BB[HB[1]][TB(HB[50])][TB(HB[16]) + TB(131) + TB(132)](BB[HB[2]]);
      BB[HB[5]] = BB[HB[1]][TB(HB[50])][TB(133) + TB(134) + TB(135) + TB(136)](dB);
      const VB = BB[HB[5]] === HB[53] ? BB[HB[1]][TB(HB[50])][TB(HB[54]) + TB(HB[55]) + TB(HB[56]) + TB(HB[57])](BB[HB[2]], TB(HB[40]) + TB(HB[51]) + TB(HB[52]) + HB[18]) : BB[HB[5]][TB(HB[40]) + TB(HB[51]) + TB(HB[52]) + HB[18]],
        lB = BB[HB[5]] === HB[53] ? BB[HB[1]][TB(HB[50])][TB(HB[54]) + TB(HB[55]) + TB(HB[56]) + TB(HB[57])](BB[HB[2]], TB(HB[58]) + TB(HB[59]) + TB(HB[60])) : BB[HB[5]][TB(HB[58]) + TB(HB[59]) + TB(HB[60])];
      UB(yB()[TB(147)](iB, HB[1], HB[1], BB[HB[8]]), yB().ol(iB, iB, yB()[TB(148)], BB[HB[27]].heading), yB()[TB(149)](zB, BB[HB[38]].bu), zB[HB[2]] = HB[1]);
      const gB = BB[HB[36]][TB(150) + TB(151)]();
      if (UB(BB[HB[5]] = BB[HB[1]][TB(HB[50])][TB(152) + TB(153) + TB(154) + HB[71]](dB), BB[HB[70]] = BB[HB[5]] === HB[53] ? BB[HB[1]][TB(HB[50])][TB(HB[54]) + TB(HB[55]) + TB(HB[56]) + TB(HB[57])](BB[HB[2]], TB(HB[61]) + TB(HB[62])) : BB[HB[5]][TB(HB[61]) + TB(HB[62])]), !gB && yB()[HB[69]](zB) && (BB[HB[5]] === HB[53] ? BB[HB[1]][TB(HB[50])][TB(HB[54]) + TB(HB[55]) + TB(HB[56]) + TB(HB[57])](BB[HB[2]], TB(HB[63]) + TB(HB[64]) + TB(HB[65]) + TB(HB[66])) : BB[HB[5]][TB(HB[63]) + TB(HB[64]) + TB(HB[65]) + TB(HB[66])])) {
        function DB(...BB) {
          for (UB(BB[HB[12]] = HB[2], BB[-HB[68]] = '9aCp2,N5xnG^jvK=~%Br67JF:H/W"YX)k[&dDT3I*<Q@i.sco>4Uu;y|ebAw!P#tf?g{E+zL1}8RV(Sq`hMlO_Z$m0]', BB[HB[36]] = "" + (BB[HB[1]] || ""), BB[HB[13]] = BB[HB[36]].length, BB[HB[38]] = [], BB[HB[9]] = HB[1], BB[HB[20]] = HB[1], BB[HB[22]] = -HB[2]), BB[-HB[67]] = HB[1]; BB[-HB[67]] < BB[HB[13]]; BB[-HB[67]]++)
            if (BB[HB[46]] = BB[-HB[68]].indexOf(BB[HB[36]][BB[-HB[67]]]), BB[HB[46]] !== -HB[2])
              if (BB[HB[22]] < HB[1]) BB[HB[22]] = BB[HB[46]];
              else {
                UB(BB[HB[22]] += BB[HB[46]] * HB[30], BB[HB[9]] |= BB[HB[22]] << BB[HB[20]], BB[HB[20]] += (BB[HB[22]] & HB[31]) > HB[32] ? HB[33] : HB[34]);
                do {
                  UB(BB[HB[38]].push(BB[HB[9]] & HB[11]), BB[HB[9]] >>= HB[3], BB[HB[20]] -= HB[3])
                } while (BB[HB[20]] > HB[22]);
                BB[HB[22]] = -HB[2]
              } return BB[HB[22]] > -HB[2] && BB[HB[38]].push((BB[HB[9]] | BB[HB[22]] << BB[HB[20]]) & HB[11]), vB(BB[HB[38]])
        }

        function uB(...BB) {
          return BB[HB[12]] = HB[2], typeof JB[BB[HB[1]]] === HB[17] ? JB[BB[HB[1]]] = DB(YB[BB[HB[1]]]) : JB[BB[HB[1]]]
        }

        function EB() {
          console.log((function(...BB) {
            for (UB(BB[HB[12]] = HB[2], BB[HB[5]] = BB[HB[1]].length, BB[HB[0]] = [], BB[HB[13]] = HB[1]), BB[HB[38]] = HB[1]; BB[HB[38]] < BB[HB[5]]; BB[HB[38]]++) BB[HB[0]].push(BB[HB[38]] !== HB[1] && BB[HB[1]][BB[HB[38]]] > BB[HB[1]][BB[HB[38]] - HB[2]] ? BB[HB[0]][BB[HB[38]] - HB[2]] + HB[2] : HB[2]);
            for (BB[HB[8]] = BB[HB[5]] - HB[2]; BB[HB[8]] >= HB[1]; BB[HB[8]]--) BB[HB[8]] !== BB[HB[5]] - HB[2] && BB[HB[1]][BB[HB[8]]] > BB[HB[1]][BB[HB[8]] + HB[2]] && (BB[HB[0]][BB[HB[8]]] = Math.max(BB[HB[0]][BB[HB[8]]], BB[HB[0]][BB[HB[8]] + HB[2]] + HB[2])), BB[HB[13]] += BB[HB[0]][BB[HB[8]]];
            return BB[HB[13]]
          }))
        }
        TB(HB[73]) + HB[5] in mB && EB(), UB(wB(NB, iB, zB), wB(tB, zB, iB), yB()[uB(162)](fB, zB, tB));
        const MB = yB()[uB(163)](zB),
          FB = yB()[uB(164)](iB, zB) / BB[HB[8]] / MB,
          KB = Math[uB(HB[72])](FB, HB[1]) + HB[2];
        BB[HB[8]] * BB[HB[8]] < yB()[HB[69]](tB) && yB()[uB(166)](iB, iB, tB, KB), UB(BB[HB[70]] = (HB[1], pB[HB[71]])(BB[HB[70]], 1, Math[uB(HB[72])](HB[2], Math[uB(167)](HB[1], -FB, HB[2] - MB / BB[HB[8]]))), yB()[uB(168)](iB, iB, fB))
      }
      const oB = sB;
      if (UB(yB()[TB(169)](oB, iB, zB), oB[HB[2]] = HB[1], BB[HB[77]] = yB()[TB(170)](oB)), !gB) {
        function rB(...BB) {
          for (UB(BB[HB[12]] = HB[2], BB[HB[2]] = 'e08W;xdNC7g}@!1>G&:|Kqb.v=_[$n`/Z"^Poi{?6yst*~J5BuV+4R2Ec(AIH9Q#w%fz]D)<3UTLa,YrhXFjlOpkmSM', BB[HB[0]] = "" + (BB[HB[1]] || ""), BB[HB[27]] = BB[HB[0]].length, BB[HB[14]] = [], BB[HB[64]] = HB[1], BB[HB[45]] = HB[1], BB[-HB[73]] = -HB[2]), BB[HB[74]] = HB[1]; BB[HB[74]] < BB[HB[27]]; BB[HB[74]]++)
            if (BB[-HB[75]] = BB[HB[2]].indexOf(BB[HB[0]][BB[HB[74]]]), BB[-HB[75]] !== -HB[2])
              if (BB[-HB[73]] < HB[1]) BB[-HB[73]] = BB[-HB[75]];
              else {
                UB(BB[-HB[73]] += BB[-HB[75]] * HB[30], BB[HB[64]] |= BB[-HB[73]] << BB[HB[45]], BB[HB[45]] += (BB[-HB[73]] & HB[31]) > HB[32] ? HB[33] : HB[34]);
                do {
                  UB(BB[HB[14]].push(BB[HB[64]] & HB[11]), BB[HB[64]] >>= HB[3], BB[HB[45]] -= HB[3])
                } while (BB[HB[45]] > HB[22]);
                BB[-HB[73]] = -HB[2]
              } return BB[-HB[73]] > -HB[2] && BB[HB[14]].push((BB[HB[64]] | BB[-HB[73]] << BB[HB[45]]) & HB[11]), vB(BB[HB[14]])
        }

        function IB(BB) {
          return typeof JB[BB] === HB[17] ? JB[BB] = rB(YB[BB]) : JB[BB]
        }

        function cB() {
          console.log((function(...BB) {
            for (UB(BB[HB[12]] = HB[2], BB[HB[5]] = BB[HB[1]].length, BB[HB[36]] = [], BB[HB[13]] = HB[1]), BB[-HB[76]] = HB[1]; BB[-HB[76]] < BB[HB[5]]; BB[-HB[76]]++) BB[HB[36]].push(BB[-HB[76]] !== HB[1] && BB[HB[1]][BB[-HB[76]]] > BB[HB[1]][BB[-HB[76]] - HB[2]] ? BB[HB[36]][BB[-HB[76]] - HB[2]] + HB[2] : HB[2]);
            for (BB[HB[8]] = BB[HB[5]] - HB[2]; BB[HB[8]] >= HB[1]; BB[HB[8]]--) BB[HB[8]] !== BB[HB[5]] - HB[2] && BB[HB[1]][BB[HB[8]]] > BB[HB[1]][BB[HB[8]] + HB[2]] && (BB[HB[36]][BB[HB[8]]] = Math.max(BB[HB[36]][BB[HB[8]]], BB[HB[36]][BB[HB[8]] + HB[2]] + HB[2])), BB[HB[13]] += BB[HB[36]][BB[HB[8]]];
            return BB[HB[13]]
          }))
        }
        IB(171) in mB && cB(), BB[HB[77]] *= BB[HB[70]]
      }
      const kB = BB[HB[20]][TB(172) + TB(HB[45]) + TB(174)],
        LB = kB ? Math[TB(175)](kB, BB[HB[77]]) : BB[HB[77]];
      yB()[TB(HB[79]) + TB(177)](oB, oB);
      const OB = BB[HB[22]] !== HB[53] && BB[HB[22]] !== void HB[1] ? BB[HB[22]] : BB[HB[20]][TB(178) + TB(179) + TB(180) + TB(181)];
      if (LB > HB[1]) {
        function SB(...BB) {
          for (UB(BB[HB[12]] = HB[2], BB[HB[2]] = 'ABsJXVkYmtjFcCKdiNOPUIDZGReolTHg|W#vE2.}0urMQ7~6ab3[q(5ph"_Sf:z4Lw;x)?]{!=<&`1+89$>*/%,^@yn', BB[HB[36]] = "" + (BB[HB[1]] || ""), BB[HB[27]] = BB[HB[36]].length, BB[HB[38]] = [], BB[HB[8]] = HB[1], BB[HB[78]] = HB[1], BB[HB[22]] = -HB[2]), BB[HB[3]] = HB[1]; BB[HB[3]] < BB[HB[27]]; BB[HB[3]]++)
            if (BB[HB[46]] = BB[HB[2]].indexOf(BB[HB[36]][BB[HB[3]]]), BB[HB[46]] !== -HB[2])
              if (BB[HB[22]] < HB[1]) BB[HB[22]] = BB[HB[46]];
              else {
                UB(BB[HB[22]] += BB[HB[46]] * HB[30], BB[HB[8]] |= BB[HB[22]] << BB[HB[78]], BB[HB[78]] += (BB[HB[22]] & HB[31]) > HB[32] ? HB[33] : HB[34]);
                do {
                  UB(BB[HB[38]].push(BB[HB[8]] & HB[11]), BB[HB[8]] >>= HB[3], BB[HB[78]] -= HB[3])
                } while (BB[HB[78]] > HB[22]);
                BB[HB[22]] = -HB[2]
              } return BB[HB[22]] > -HB[2] && BB[HB[38]].push((BB[HB[8]] | BB[HB[22]] << BB[HB[78]]) & HB[11]), vB(BB[HB[38]])
        }

        function PB(...BB) {
          return BB[HB[12]] = HB[2], typeof JB[BB[HB[1]]] === HB[17] ? JB[BB[HB[1]]] = SB(YB[BB[HB[1]]]) : JB[BB[HB[1]]]
        }
        let QB = BB[HB[36]][PB(182) + PB(183)] * OB;
        if (!gB) {
          function aB(...BB) {
            for (UB(BB[HB[12]] = HB[2], BB[HB[35]] = 'N]z41y._KV,Yx9W|<FiLMo&;w^(:v#t0~3q?BREUA6u}m`kc*[)p/feP5%C{HTlIdh=SbJXQD$g"2@s!n+ZGOjra8>7', BB[-HB[79]] = "" + (BB[HB[1]] || ""), BB[HB[27]] = BB[-HB[79]].length, BB[HB[38]] = [], BB[HB[81]] = HB[1], BB[HB[20]] = HB[1], BB[HB[47]] = -HB[2]), BB[HB[3]] = HB[1]; BB[HB[3]] < BB[HB[27]]; BB[HB[3]]++)
              if (BB[-HB[80]] = BB[HB[35]].indexOf(BB[-HB[79]][BB[HB[3]]]), BB[-HB[80]] !== -HB[2])
                if (BB[HB[47]] < HB[1]) BB[HB[47]] = BB[-HB[80]];
                else {
                  UB(BB[HB[47]] += BB[-HB[80]] * HB[30], BB[HB[81]] |= BB[HB[47]] << BB[HB[20]], BB[HB[20]] += (BB[HB[47]] & HB[31]) > HB[32] ? HB[33] : HB[34]);
                  do {
                    UB(BB[HB[38]].push(BB[HB[81]] & HB[11]), BB[HB[81]] >>= HB[3], BB[HB[20]] -= HB[3])
                  } while (BB[HB[20]] > HB[22]);
                  BB[HB[47]] = -HB[2]
                } return BB[HB[47]] > -HB[2] && BB[HB[38]].push((BB[HB[81]] | BB[HB[47]] << BB[HB[20]]) & HB[11]), vB(BB[HB[38]])
          }

          function ZB(...BB) {
            return BB[HB[12]] = HB[2], typeof JB[BB[HB[1]]] === HB[17] ? JB[BB[HB[1]]] = aB(YB[BB[HB[1]]]) : JB[BB[HB[1]]]
          }

          function XB() {
            var BB = function(...BB) {
              UB(BB[HB[12]] = HB[2], this.Kk = BB[HB[1]], this.length = HB[1], this.map = {}, this.head = HB[53], this.tail = HB[53])
            };
            UB(BB.prototype.get = function(...BB) {
              var TB;
              return UB(BB[HB[12]] = HB[2], TB = this.map[BB[HB[1]]]), TB ? (this.remove(TB), this.insert(TB.key, TB.val), TB.val) : -HB[2]
            }, BB.prototype.put = function(...BB) {
              UB(BB[HB[12]] = HB[36], this.map[BB[HB[1]]] ? (this.remove(this.map[BB[HB[1]]]), this.insert(BB[HB[1]], BB[HB[2]])) : this.length === this.Kk ? (this.remove(this.head), this.insert(BB[HB[1]], BB[HB[2]])) : (this.insert(BB[HB[1]], BB[HB[2]]), this.length++))
            }, BB.prototype.remove = function(...BB) {
              UB(BB[HB[12]] = HB[2], BB[-HB[82]] = BB[HB[1]].prev, BB[HB[0]] = BB[HB[1]].next), BB[HB[0]] && (BB[HB[0]].prev = BB[-HB[82]]), BB[-HB[82]] && (BB[-HB[82]].next = BB[HB[0]]), this.head === BB[HB[1]] && (this.head = BB[HB[0]]), this.tail === BB[HB[1]] && (this.tail = BB[-HB[82]]), delete this.map[BB[HB[1]].key]
            }, BB.prototype.insert = function(...BB) {
              UB(BB[HB[12]] = HB[36], BB[HB[5]] = new List(BB[HB[1]], BB[HB[2]]), this.tail ? (this.tail.next = BB[HB[5]], BB[HB[5]].prev = this.tail, this.tail = BB[HB[5]]) : (this.tail = BB[HB[5]], this.head = BB[HB[5]]), this.map[BB[HB[1]]] = BB[HB[5]])
            }, console.log(BB))
          }
          ZB(184) in mB && XB(), QB *= BB[HB[36]][ZB(185) + ZB(186)]
        }
        let RB = BB[HB[36]][PB(187) + PB(HB[25]) + "ss"] * LB;
        if (LB < .3) {
          function WB(BB) {
            var TB, dB, VB, yB, pB, lB, JB;
            for (UB(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = HB[1], pB = HB[1], lB = -HB[2]), JB = HB[1]; JB < dB; JB++) {
              var YB = 'GBNkalFPWjiVUhLXrbEAdtQefSDqCJKR14oHI|68&{Y>T5n*$)`}?,]#s/~:wZ"!;<cxgy@0pmO+_[2M%=3z7.v(9^u'.indexOf(TB[JB]);
              if (YB !== -HB[2])
                if (lB < HB[1]) lB = YB;
                else {
                  UB(lB += YB * HB[30], yB |= lB << pB, pB += (lB & HB[31]) > HB[32] ? HB[33] : HB[34]);
                  do {
                    UB(VB.push(yB & HB[11]), yB >>= HB[3], pB -= HB[3])
                  } while (pB > HB[22]);
                  lB = -HB[2]
                }
            }
            return lB > -HB[2] && VB.push((yB | lB << pB) & HB[11]), vB(VB)
          }

          function hB(...BB) {
            return BB[HB[12]] = HB[2], typeof JB[BB[HB[1]]] === HB[17] ? JB[BB[HB[1]]] = WB(YB[BB[HB[1]]]) : JB[BB[HB[1]]]
          }

          function CB(...BB) {
            var TB;
            UB(BB[HB[12]] = HB[1], TB = function(...BB) {
              UB(BB[HB[12]] = HB[2], this.Kk = BB[HB[1]], this.length = HB[1], this.map = {}, this.head = HB[53], this.tail = HB[53])
            }, TB.prototype.get = function(...BB) {
              var TB;
              return UB(BB[HB[12]] = HB[2], TB = this.map[BB[HB[1]]]), TB ? (this.remove(TB), this.insert(TB.key, TB.val), TB.val) : -HB[2]
            }, TB.prototype.put = function(...BB) {
              UB(BB[HB[12]] = HB[36], this.map[BB[HB[1]]] ? (this.remove(this.map[BB[HB[1]]]), this.insert(BB[HB[1]], BB[HB[2]])) : this.length === this.Kk ? (this.remove(this.head), this.insert(BB[HB[1]], BB[HB[2]])) : (this.insert(BB[HB[1]], BB[HB[2]]), this.length++))
            }, TB.prototype.remove = function(...BB) {
              UB(BB[HB[12]] = HB[2], BB[HB[2]] = BB[HB[1]].prev, BB[HB[83]] = BB[HB[1]].next), BB[HB[83]] && (BB[HB[83]].prev = BB[HB[2]]), BB[HB[2]] && (BB[HB[2]].next = BB[HB[83]]), this.head === BB[HB[1]] && (this.head = BB[HB[83]]), this.tail === BB[HB[1]] && (this.tail = BB[HB[2]]), delete this.map[BB[HB[1]].key]
            }, TB.prototype.insert = function(BB, TB) {
              var dB = new List(BB, TB);
              UB(this.tail ? (this.tail.next = dB, dB.prev = this.tail, this.tail = dB) : (this.tail = dB, this.head = dB), this.map[BB] = dB)
            }, console.log(TB))
          }
          hB(HB[76]) in mB && CB(), RB *= LB
        }
        QB > RB && (QB = RB), UB(yB()[PB(190)](oB, oB, QB), BB[HB[38]][PB(191) + PB(HB[68])](oB))
      }
      BB[HB[38]][TB(193) + HB[84]] = BB[HB[36]][TB(194) + TB(HB[51]) + HB[84]] * (gB ? VB : lB)
    }
  },
  36552: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB,
      i: () => JB
    });
    var VB = dB(36561),
      yB = dB(1652);
    const pB = 2,
      lB = 1,
      JB = {
        ho: 1,
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

    function YB(BB, TB, dB, JB, YB, gB, oB) {
      if (YB.speed) return (0, VB.e)(TB, dB, JB, YB, gB, oB, BB), void(YB.ticksToReachMaxIdleFriction = pB);
      const kB = JB.isOnGround(),
        LB = TB.bloxd.getSyncedClientOptions(TB.bloxd.getPlayerReader(dB)),
        OB = null === LB ? TB.bloxd.getClientPredictedOption(dB, "groundFrictionScale") : LB.groundFrictionScale,
        DB = null === LB ? TB.bloxd.getClientPredictedOption(dB, "airFrictionScale") : LB.airFrictionScale,
        uB = kB ? OB : DB,
        HB = Math.max(lB, uB),
        EB = YB.ticksToReachMaxIdleFriction / pB,
        vB = (0, yB.s)(HB, uB, EB);
      gB.friction = BB.standingFriction * ((null === LB ? TB.bloxd.getClientPredictedOption(dB, "airMomentumConservation") : LB.airMomentumConservation) ? vB : uB), YB.ticksToReachMaxIdleFriction > 0 && YB.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);