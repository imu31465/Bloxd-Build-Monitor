export const id = 252;
export const ids = [252];
export const modules = {
  39259: (ee, ie, He) => {
    He.d(ie, {
      d: () => fe
    });
    var ye = He(186),
      be = He(38476);
    const Me = 1.2,
      Ke = {
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
        XF: .5,
        Rye: !1
      },
      Ue = {
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
        XF: .5,
        Rye: !1
      },
      Fe = {
        physicsBodyDimensions: {
          width: ye.g.KX,
          height: ye.g.UX
        },
        hitBoxDimensions: {
          width: ye.g.KX + .4,
          height: ye.g.UX + .6
        },
        eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
        rideHeight: ye.g.UX - .3,
        XF: .5,
        Rye: !1
      },
      Je = {
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
        XF: .5,
        Rye: !1
      },
      oe = {
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
        XF: .5,
        Rye: !1
      },
      Re = {
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
        XF: .5,
        Rye: !1
      },
      ke = {
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
        XF: .5,
        Rye: !1
      },
      qe = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: ye.g.KX,
            height: ye.g.UX
          },
          hitBoxDimensions: {
            width: ye.g.KX + .4,
            height: ye.g.UX + .6
          },
          eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
          rideHeight: ye.g.UX - .1,
          XF: be.e.XF,
          Rye: !0
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
        },
        Camel: {
          modelScale: Me,
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
        },
        "Cave Golem": Ke,
        "Draugr Zombie": {
          ...Fe,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Fe,
        "Frost Golem": Ke,
        "Frost Zombie": {
          ...Fe,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Fe,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: ye.g.KX,
            height: ye.g.UX
          },
          hitBoxDimensions: {
            width: ye.g.KX + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          XF: .5,
          Rye: !1
        },
        Wolf: Je,
        Bear: oe,
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
          XF: .5,
          Rye: !1
        },
        Stag: Re,
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
          XF: .5,
          Rye: !1
        },
        Gorilla: ke,
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
          XF: .5,
          Rye: !1
        },
        "Draugr Huntress": Fe,
        "Magma Golem": Ke,
        "Spirit Golem": Ke,
        "Spirit Wolf": Je,
        "Spirit Bear": oe,
        "Spirit Stag": Re,
        "Spirit Gorilla": ke,
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: ye.g.KX,
            height: ye.g.UX
          },
          hitBoxDimensions: {
            width: ye.g.KX + .4,
            height: ye.g.UX + .6
          },
          eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
          rideHeight: ye.g.UX - .1,
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: ye.g.KX,
            height: ye.g.UX
          },
          hitBoxDimensions: {
            width: ye.g.KX + .4,
            height: ye.g.UX + .6
          },
          eyeHeight: ye.g.UX * ye.g.playerEyeToHeightRatio,
          rideHeight: ye.g.UX - .1,
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
        },
        Zombie: {
          ...Fe,
          defaultPose: "zombie"
        },
        Skeleton: Fe,
        Mummy: {
          ...Fe,
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
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
          XF: .5,
          Rye: !1
        },
        "Iron Guardian": Ue,
        "Gold Guardian": Ue,
        "Diamond Guardian": Ue,
        "Moonstone Guardian": Ue,
        "Iron Goofy Golem": Ue,
        "Gold Goofy Golem": Ue,
        "Diamond Goofy Golem": Ue,
        "Moonstone Goofy Golem": Ue,
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
          XF: .5,
          Rye: !1
        }
      };

    function fe(ee) {
      return qe[ee]
    }
  },
  37893: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = {
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
  38478: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(352),
      be = He.n(ye),
      Me = He(1952);
    let Ke;
    var Ue, Fe, Je, oe, Re, ke, qe, fe, Te;
    const pe = [2, 0, 1, 150, 133, "a", 224, 7, 5, 103, "d", 8, 255, "length", 223, 112, 249, "undefined", void 0, "b", "c", 63, 6, "fromCodePoint", 12, "push", 85, 68, 9, 148, 91, 179, 55, 8191, 88, 13, 14, 4, 3, "h", 21, "i", "g", 62, 198, 106, 117, 155, 186, !1, 105, 125, "f", 123, 124, "e", null, 127, 128, 129, 130, 131, 119, 120, 121, 122, 141, 142, 143, 144, 145, 146, 116, "pk", 76, 153, 90, 242, !0, 151, 33554432, 67108864, 10, 243, 89, "Q", ".", 27, 149, 176, 92, 99, 200, 35, 39, 47, 180, 20, 190, 81, 183, 77, 19, 107, 49, 205, 94, "on"];

    function Xe(ee) {
      return typeof Ue[ee] === pe[17] ? Ue[ee] = function(...ee) {
        for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'auDmHP:FEhqtg4+2NsRj|XfOr6e<?$}`iW5!o8=c#T*b,AIB1@xGkLCQ93~M^/zZ.[>vU")&KyS(n;J0l_%w{YV7pd]', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[-pe[4]] = ee[pe[0]].length, ee[pe[10]] = [], ee[pe[8]] = pe[1], ee[-pe[9]] = pe[1], ee[pe[7]] = -pe[2]), ee[-pe[3]] = pe[1]; ee[-pe[3]] < ee[-pe[4]]; ee[-pe[3]]++)
          if (ee[pe[6]] = ee[pe[5]].indexOf(ee[pe[0]][ee[-pe[3]]]), ee[pe[6]] !== -pe[2])
            if (ee[pe[7]] < pe[1]) ee[pe[7]] = ee[pe[6]];
            else {
              De(ee[pe[7]] += ee[pe[6]] * pe[30], ee[pe[8]] |= ee[pe[7]] << ee[-pe[9]], ee[-pe[9]] += (ee[pe[7]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
              do {
                De(ee[pe[10]].push(ee[pe[8]] & pe[12]), ee[pe[8]] >>= pe[11], ee[-pe[9]] -= pe[11])
              } while (ee[-pe[9]] > pe[7]);
              ee[pe[7]] = -pe[2]
            } return ee[pe[7]] > -pe[2] && ee[pe[10]].push((ee[pe[8]] | ee[pe[7]] << ee[-pe[9]]) & pe[12]), ze(ee[pe[10]])
      }(Fe[ee]) : Ue[ee]
    }

    function ze(...ee) {
      return ee[pe[13]] = pe[2], typeof oe !== pe[17] && oe ? (new oe).decode(new Re(ee[pe[1]])) : typeof ke !== pe[17] && ke ? ke.from(ee[pe[1]]).toString("utf-8") : Te(ee[pe[1]])
    }

    function Be() {}
    De(Ue = {}, Fe = [">U;`9ca", "W:w;r3:oF", 'r$z?!y04Tz.t#mV!^U)k^KC#aRp_(+G?:i"e.ca', "dA0Cq1a", '~OxG("s!F.&)(<]?bsTGs=z:52j0w=9!', "=e)kJ16T<s?0rK=R?boqDL:*LjGRu", "L35i5Y)~94", ";:5KA92L$M[6:8O!c:6<5#oRT[oFC/Q!(9(L1Ga", "Bb7@%AtZ<s2O{2P=rCHFZ0BY[h/l)4l52ZKCLK1}~z%)K&l5Igm", 'D@{;Yk|~D380_^v}7sMLbZsj}M#?yr$s5msJG87"I9t|k<t', "Kt?;IU@j7.oq_rQ!<&s:h3?o!g|0a", "!26}J_3Ys22~K&+e~|CnFVv!]+nIEc4", 'TG~L{nOuzMcMa<Zoi:*("SZB|4', 'T1r},9)IPqCn7&y6Chp@&oqVm3"Ls^3!Dh~EdWPLBRvyfxL?(MUFpMa', "_?#:QLsT;+t:f8s<9G*$7Yn5[h", ".GE}2znr4Mq(Mm", "pE7Hy3GOAth(eP%<$5OhiyzVuhQy}8Z*5Oeix{[u", "%+QH7J/4HCQ", '?[Jh+1nr|3k"<&^Obb0@@ZBFW2w$3H,cgO`@gQtFA9?5pw2c~|Ri#(DR*s', '~&R$b(lrHhGlY@c`y[;n=%P(uZ4}"^v8i8n;B@`BuR5"M2:bm2hCTypr_2#', "Rhrh_z%V+RUlu", "Usk;jxnr|3>64{]fr&6J_na", '}C/?Dz:*zt7Z.<}!d|Qhzc%5qsP0Q=Aje#zQ{kM$8je".1KR&[|;EQa', "D2rWN&O_FQ7fce&8", '?Umi#9n#{.|qjx1e*85<=Y_!_CSiuNC5P@)F;"34Rh<53oL?', "(Ui(c%DE3+j<`D", 'S*<;?k^S^El@?MU=kh7HYY?k?+J6"o#`FHW<L%9#+XvEu', "xGT}C)u(IRGRJ66O+3r@qoQTPC7v0eFR!U~G6kJ#C~tKEoE", 'O#n$g"3u', "qe7njx6T#~250Dt", '0Gv;+"yu)4h4oBcRS1"H<y_G$+vt/Kw5iGt;C)iVnE^l+Pj#[a', ".zU;WU4jwCs<M)q6%6!iLZyGY~P%)4<?Ce7h)1I.j3::NwV#GA&H", '4H.:$/[uWCb"22u}N2Hxh"[3BE[uD_`8w:DKtV=kx^&y1NzohgUe$', "S1Y?z1G4~[Jou", "$h9hZQE}Vj+/3KFRmSi}q1s4@2%fgwe?tS_CF^Z46+", 'jR1ho#.gJ9l)yKWrVcz`F"4u7~[i{wB<kA"QcY/$Mz=', "~+JHI;:ED3P~F=W`$51@vI,R[^@!u", 's&.CPSQul3WMT115`I]En":E]+o>311c@5U$O3%gez=0Y6p?A[ph', "_)8nJA04XjOsM%<*WG;?^c6jjC~)PKd$NI9@=Ya", '0[Bk/;9D:4$"=@(=/O7@fYQFys,F$H"}KObKWU^D', "0zAShVl~FQB++8f58^ME", 'r["nYYD}=4IQv+3?X[Q:9IdF]+J9f/l#MCPk6=4BJLS!c+S=', "E3PS/^;Thz+|<xPbpEh:6J^D!C3)^oMT[G]$=ysj:", "_yoSOx>~02O0OBV?_+M$A(qR!g2s@H", "[1{$B/3Y(tEN=88j{a", "+ZU$7&^Vxg}K.opN5bc@cUwu", "JULS2Q5}[3mK.1Y?KtKC/crSL4Y6rw=Rr^w$zc|DO~aG*64", "`OAQaQ)gj^@nx%#eOUhJ%WPFu^*!O+g", "MCLQgzF6ZZ{Z6HuR&G?FmS+Ii^UZ|<6T7s}H9{X_bt8", 'YGa<DI|D~s_If/B<SGtq$&LOr[$5o<cr1[/Hhz$"C~];C)"`O^Uq', "=ef`e=RVGhluimv6s2)``y,I5^`nNmKj51r@@)(FBE", "{`9CK1$F:", "T#OH8B%kshhU4{G5$U$ndwCIu2", "s29:ExkD9[EU!)m`=s)Q@ZUg;9^9LNMOfI(S$", "Ab4`:K@jiZPGXKL<qU`hc/sjL~q(qD]?A5a}S1frRgkRv)95f2ry=/w!m", "y+VHk(|k1gZMlw{fT:V&0zY$(zeG^<VTW^e(>z`F*tf43H", "qS+`e=%gV~SvV+Kj]a", 'cg,;S"ujaXcmN2s5$8C?3Z.~r~=kWH35EIYnI~Y4Xj^HXK=6P&m', '4Ibi|x("tMhKXN]O~#gS>1+k{C>L8HzoP2X`b/^VB2rnk<t6$#r}HV4LmjE4u', 'UU`nb%}g,9O4"^h`L3bSQ)d3ig<KH&!RJs6}IZa)@2#zl&q', "JA}`BZh4~z+Qpw7fz`C`YY9D", ")8u}30Ik|C``TKar>C:W_w@B4>N}&==={6$q]=Sr!^IFjxC5<|KyS_a", ">1phsQ.V_3Ultw;j>s`kTUf~1ZkyT/c6ZO}n6yfDWg", "d9LqI;%~w380rm", '.mQy~KjLbMz@!xL<y**i|MM(}>dS"@R#FUSL{AoD*tE[u', ':Om$[KoDJLIy"oR#o&0@%"yFighU91"`+3nL4', "jGvP;1HEl3`0P/g=2b6}L~@4:", "SOnP)1[TILP02&Dr*#W:C%84K[oQI8H=s^NWWM@!I9f:kMg", "[hFWAZNrzRs<v=q", "FC0Hp3dFX~(2.we$GAUqA(_YUCDJn1<*V1LnNw_FH", "XGLq(3^~NR$KNBERB[VkOntLrsuNnm", '^+OneCSklhX"A@@<.ze(l_:~xg:0P1tc%`0kCL4Li3T"j2oscOdCgQ<!s2', "hIl@W#`BbE~k~@lezz2W<", "#Szkm5sjJMyiimyeR3(;<w(Fh|m:u", 'O${SWJ.gK~))`x7$?Ihi"^t4v^8"M2|#>AhCD^h4"C1lb)4<sgm', "?bnPI96(22T", "7Mz@YkdTAt;^D/L#6S^LVJaly[E:N<88Pil:{=*RIR7$!)[`i^?qf#i}H", "DZwL0w4_02D(58W`h8FW.oiD", "@#o$$!eog[w^C/>Rk3SE|Mj4H4t~5P=8V1VHy_ju;zw2f/b6&sI`~Ga", ".G^QlQCSP4Ash1p!1`:k5kb3c4!0Ox:re58Qu1a", "n9hKm1$L&|Joe8z}0?VnxI#D0^i+H2M$Ya", "%)5$a1a", '71fn+SAYl^+QyKr!fCB:"0wTt+G"wMe*cU2nI/a', "KM]i$lz:|hX0Dxu8hb4`$", "Ymmi#l5.f.%6a<%cN:VkL8CST[N0J6m6[sOy__ujM|x>u^H}", '.?5idYhjW2UE]@O5A37?TZn#Q~bXiw{55^+njM=o8C@ly"Y!k&A`9)a', "@:d:SzT_s3e[@1/O1&!Ka0y4,9DB|&V5V?`HT(nR22S6^wEeka", ">zyieY?rF|oq0=>R:S%G[1|o~zzIdH", "bGWidBHEezg};1ms~eQy/~T(ZL$n(+9?e81y:os!BZt/x8=RR&{`N", '%[$Sd3KIt|(9l<"ro8aWX"sLH3}kj=h', "5^K:O&URAE`K:e>sJsGik9dO.ZO|KMk?~CM;uI9~GCK6~4u8qeD", "R#FW*@0Zvj<:~/^*?&OHOn,R|j", "qi=kmSS#`R@!X1q=ahhC>^LBoC_flw_c%8}QG%@43+)!%@a*>a", "m@7kAld!Rh@!*6bcJM{`x@9UHCPCUw`*]zUL$yUrntLr3H", "R$vi*)TBZ24(x=[O)zGSdWm73s`Mq_*e[yB?m_yus^3;>+D8)a", "g&AQ(zM!BgS)b~~T+ik$s", "OCf?A%1V`2FOg2ar/s=F", "K`W(PK~In[ZXiMh", 'Uzz@&QJkF.Wn*4G?Z`O@ey6TPCj0aN)jhUYe~^Sk;+Y;pmG?&1/F"0a', "#C@CQc!$qQj0+PiRv?A`lwpVp~e<ePdfqgBn&^_G%gK^w+:ROiD", 'I8=n{"a', 'h3(PWyH*d+j0]_(=n+?$tVy$h|Q)u/B<LAU&$B`$".!mu', "gIfHMK_uk4x9$KD}zzPqNSk#StJ;ex6T[:`kWYyuK[D(A4>}teRK8#a", "k5jgH)m3", "{qo#i_RA", "hE,D|8kk", ">G=`;_|D", ":RMLvKRD", "8bGiBU5D", "z3eZ", "xC=ZpWb", "z;Gv", "xj7M_#u", "eEngAxfT", "5Eb;m*fT", "EEhg", "eE2w(0[rb", "Vf)hLD@Jb", "~~4MEDrqb", "eE2wfxzT", "kong5JNT", "<>}ci*eT", "Jk}iiW<T", "#Q[i{weT", "1Q*xwqzT", ";owD32jT", "eE2wfxos1r", ">=Zi;#Rr`N", "Vf^bqqY:1r", "t>b;VJzT", "i$*x_w+S", '"XXiG', "sEng", "hE2Dr", ">~tis", ";I@QnZ=T", "[_YMG", "eE2w(0<T", "HE9xfxzT", "ko2w^WZT", "i~Nwz", "t>QiU/AT", "iMQcs*u", "t>QiGW5T", "ko}i^x~S", ";oOi6JIT", "s$*x_wu", "!jFji7av", "5@6q", "%:0Y", 'V#A"', "E=0Y", "]8PzVt)4", "ZvI<o", 'u`>"', "$!yq", "9_Oc", "mENwWq>T", "=2DhoyIT", 'Sp]g="&T', "5f#xqqfT", "OM,c", "v>YM", "1~Qiv2jT", "[D,c", "5~,i0xNT", "~$YU~JAT", "{1zgJqzT", "@j#96Ju", "9_Vs+<4S", "5~,i=BoT", "yM,c", "X_dB|%BS", "Hb1Z+{fx", 'P"kpZ&iE>dU,oYKfHb8R``lOe!g1S%Kfex[aeHP6(v1]t?H"%"7uR', '[k,cRwT:/~if*9hy="n?;;_UP)J@X>hyf$dI||ql=Ri`Lj*KQH', "LB1Z2sG>H#`yG", "ZNdn%6_wUKu4p", "JCES2y@c8G<Rd", ",v]l", "7BHZ(1c:", "g]_2XiL", "=pHS:V0G", "1RwnjcXG", "+bhPw$Wx", '7PnrcTw"', "Br,IKka", "(eir~<L$", "V,3?y", "/Q*xwqzT", "5~,iOwKT"]), De(Je = function(...ee) {
      De(ee[pe[13]] = pe[1], ee[-pe[0]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], ee[pe[2]] = pe[18], ee[-pe[14]] = []);
      try {
        De(ee[pe[2]] = Object, ee[-pe[14]][pe[25]]("".__proto__.constructor.name))
      } catch (Fe) {}
      ee: for (ee[-pe[15]] = pe[1]; ee[-pe[15]] < ee[-pe[0]][pe[13]]; ee[-pe[15]]++) try {
        for (ee[pe[2]] = ee[-pe[0]][ee[-pe[15]]](), ee[pe[16]] = pe[1]; ee[pe[16]] < ee[-pe[14]][pe[13]]; ee[pe[16]]++)
          if (typeof ee[pe[2]][ee[-pe[14]][ee[pe[16]]]] === pe[17]) continue ee;
        return ee[pe[2]]
      } catch (Fe) {}
      return ee[pe[2]] || this
    }() || {}, oe = Je.TextDecoder, Re = Je.Uint8Array, ke = Je.bR, qe = Je.String || String, fe = Je.Array || Array, Te = function(...ee) {
      return De(ee[pe[13]] = pe[1], ee[pe[5]] = new fe(pe[58]), ee[pe[19]] = qe[pe[23]] || qe.fromCharCode, ee[pe[0]] = []),
        function(...ie) {
          for (De(ie[pe[13]] = pe[2], ie[pe[2]] = pe[18], ie[pe[19]] = pe[18], ie[pe[20]] = ie[pe[1]][pe[13]], ee[pe[0]][pe[13]] = pe[1]), ie[pe[10]] = pe[1]; ie[pe[10]] < ie[pe[20]];) De(ie[pe[19]] = ie[pe[1]][ie[pe[10]]++], ie[pe[19]] <= pe[57] ? ie[pe[2]] = ie[pe[19]] : ie[pe[19]] <= pe[14] ? ie[pe[2]] = (31 & ie[pe[19]]) << pe[22] | ie[pe[1]][ie[pe[10]]++] & pe[21] : ie[pe[19]] <= 239 ? ie[pe[2]] = (15 & ie[pe[19]]) << pe[24] | (ie[pe[1]][ie[pe[10]]++] & pe[21]) << pe[22] | ie[pe[1]][ie[pe[10]]++] & pe[21] : qe[pe[23]] ? ie[pe[2]] = (ie[pe[19]] & pe[7]) << 18 | (ie[pe[1]][ie[pe[10]]++] & pe[21]) << pe[24] | (ie[pe[1]][ie[pe[10]]++] & pe[21]) << pe[22] | ie[pe[1]][ie[pe[10]]++] & pe[21] : (ie[pe[2]] = pe[21], ie[pe[10]] += pe[38]), ee[pe[0]][pe[25]](ee[pe[5]][ie[pe[2]]] || (ee[pe[5]][ie[pe[2]]] = ee[pe[19]](ie[pe[2]]))));
          return ee[pe[0]].join("")
        }
    }());
    const Ee = be()[Xe(pe[45])](),
      ge = be()[Xe(pe[45])](),
      Oe = be()[Xe(pe[45])](),
      de = be()[Xe(pe[45])](),
      We = be()[Xe(pe[45])](),
      te = be()[Xe(pe[45])](),
      Ze = be()[Xe(pe[45])](),
      we = (...ee) => {
        function ie(...ee) {
          return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = function(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[-pe[47]] = 'bH@uo,_dZCv#VRnL&Ds>.G9?KQ1z0Yp`/:JjFagT(|5;i<N7B%~=4m2"I*Ek6+Pfx$USX)OWrl3[MAqct^}e!8]ywh{', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[-pe[46]] = ee[pe[0]].length, ee[pe[10]] = [], ee[pe[8]] = pe[1], ee[pe[22]] = pe[1], ee[pe[7]] = -pe[2]), ee[pe[11]] = pe[1]; ee[pe[11]] < ee[-pe[46]]; ee[pe[11]]++)
              if (ee[pe[41]] = ee[-pe[47]].indexOf(ee[pe[0]][ee[pe[11]]]), ee[pe[41]] !== -pe[2])
                if (ee[pe[7]] < pe[1]) ee[pe[7]] = ee[pe[41]];
                else {
                  De(ee[pe[7]] += ee[pe[41]] * pe[30], ee[pe[8]] |= ee[pe[7]] << ee[pe[22]], ee[pe[22]] += (ee[pe[7]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
                  do {
                    De(ee[pe[10]].push(ee[pe[8]] & pe[12]), ee[pe[8]] >>= pe[11], ee[pe[22]] -= pe[11])
                  } while (ee[pe[22]] > pe[7]);
                  ee[pe[7]] = -pe[2]
                } return ee[pe[7]] > -pe[2] && ee[pe[10]].push((ee[pe[8]] | ee[pe[7]] << ee[pe[22]]) & pe[12]), ze(ee[pe[10]])
          }(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
        }
        ee[pe[13]] = pe[38], Xe(pe[103]) + "X" in Be && function(...ee) {
          De(ee[pe[13]] = pe[1], ee[pe[5]] = function(...ie) {
            return De(ie[pe[13]] = pe[2], ie[pe[2]] = []), (ie[pe[1]] === pe[2] || ie[pe[1]] >= pe[37]) && ee[pe[19]](ie[pe[2]], [], ie[pe[1]], pe[1]), ie[pe[2]]
          }, ee[pe[19]] = function(...ie) {
            for (ie[pe[13]] = pe[37], ie[pe[5]] = ie[pe[38]]; ie[pe[5]] < ie[pe[0]]; ie[pe[5]]++) {
              if (ie[pe[2]].length !== ie[pe[5]]) return;
              for (ie[pe[19]] = pe[1]; ie[pe[19]] < ie[pe[0]]; ie[pe[19]]++) ee[pe[48]](ie[pe[2]], [ie[pe[5]], ie[pe[19]]]) && (De(ie[pe[2]].push([ie[pe[5]], ie[pe[19]]]), ee[pe[19]](ie[pe[1]], ie[pe[2]], ie[pe[0]], ie[pe[5]] + pe[2])), ie[pe[2]].length === ie[pe[0]] && ie[pe[1]].push(ee[pe[10]](ie[pe[2]])), ie[pe[2]].pop())
            }
          }, ee[pe[10]] = function(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[pe[5]] = [], ee[pe[0]] = ee[pe[1]].length), ee[pe[38]] = pe[1]; ee[pe[38]] < ee[pe[0]]; ee[pe[38]]++)
              for (ee[pe[5]][ee[pe[38]]] = "", ee[pe[37]] = pe[1]; ee[pe[37]] < ee[pe[0]]; ee[pe[37]]++) ee[pe[5]][ee[pe[38]]] += ee[pe[1]][ee[pe[38]]][pe[2]] === ee[pe[37]] ? pe[85] : pe[86];
            return ee[pe[5]]
          }, ee[pe[48]] = function(...ee) {
            for (De(ee[pe[13]] = pe[0], ee[pe[0]] = ee[pe[1]].length), ee[pe[19]] = pe[1]; ee[pe[19]] < ee[pe[0]]; ee[pe[19]]++) {
              if (ee[pe[1]][ee[pe[19]]][pe[1]] === ee[pe[2]][pe[1]] || ee[pe[1]][ee[pe[19]]][pe[2]] === ee[pe[2]][pe[2]]) return pe[49];
              if (Math.abs((ee[pe[1]][ee[pe[19]]][pe[1]] - ee[pe[2]][pe[1]]) / (ee[pe[1]][ee[pe[19]]][pe[2]] - ee[pe[2]][pe[2]])) === pe[2]) return pe[49]
            }
            return pe[78]
          }, console.log(ee[pe[5]]))
        }();
        const He = te;
        return be()[Xe(108) + ie(109)](He, ee[pe[0]]), be()[ie(110)](ee[pe[1]], He, be()[ie(111)](He, ee[pe[2]]))
      };

    function De() {
      De = function() {}
    }
    Ke = (...ee) => {
      function ie(...ee) {
        return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = function(...ee) {
          for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'uSTXphbPcMglfLHEARerNnamKG>[z(s9iVjt51<do6`~3k=v&BZQ%]I;C$8O_.{yY!F}2/#*7UD+xwW4Jq",)0:?|^@', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[-pe[50]] = ee[pe[0]].length, ee[pe[10]] = [], ee[pe[51]] = pe[1], ee[pe[52]] = pe[1], ee[pe[42]] = -pe[2]), ee[pe[11]] = pe[1]; ee[pe[11]] < ee[-pe[50]]; ee[pe[11]]++)
            if (ee[pe[28]] = ee[pe[5]].indexOf(ee[pe[0]][ee[pe[11]]]), ee[pe[28]] !== -pe[2])
              if (ee[pe[42]] < pe[1]) ee[pe[42]] = ee[pe[28]];
              else {
                De(ee[pe[42]] += ee[pe[28]] * pe[30], ee[pe[51]] |= ee[pe[42]] << ee[pe[52]], ee[pe[52]] += (ee[pe[42]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
                do {
                  De(ee[pe[10]].push(ee[pe[51]] & pe[12]), ee[pe[51]] >>= pe[11], ee[pe[52]] -= pe[11])
                } while (ee[pe[52]] > pe[7]);
                ee[pe[42]] = -pe[2]
              } return ee[pe[42]] > -pe[2] && ee[pe[10]].push((ee[pe[51]] | ee[pe[42]] << ee[pe[52]]) & pe[12]), ze(ee[pe[10]])
        }(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
      }
      ee[pe[13]] = pe[11];
      const He = ee[pe[1]][ie(pe[15])][ie(113) + ie(114) + ie(115)](ee[pe[2]]);
      ee[pe[5]] = ee[pe[1]][ie(pe[15])][ie(pe[72]) + ie(pe[46]) + ie(118) + "s"](He);
      const ye = ee[pe[5]] === pe[56] ? ee[pe[1]][ie(pe[15])][ie(pe[62]) + ie(pe[63]) + ie(pe[64]) + ie(pe[65])](ee[pe[2]], ie(pe[53]) + ie(pe[54]) + ie(pe[51]) + pe[55]) : ee[pe[5]][ie(pe[53]) + ie(pe[54]) + ie(pe[51]) + pe[55]],
        Ke = ee[pe[5]] === pe[56] ? ee[pe[1]][ie(pe[15])][ie(126) + ie(pe[57]) + ie(pe[58])](ee[pe[2]], ie(pe[59]) + ie(pe[60]) + ie(pe[61])) : ee[pe[5]][ie(pe[59]) + ie(pe[60]) + ie(pe[61])];
      De(be()[ie(132)](Ee, pe[1], pe[1], ee[pe[8]]), be().sq(Ee, Ee, be()[ie(pe[4])], ee[pe[38]].heading), be()[ie(134)](Ze, ee[pe[37]].Op), Ze[pe[2]] = pe[1]);
      const Je = ee[pe[0]][ie(135) + ie(136)]();
      if (De(ee[pe[5]] = ee[pe[1]][ie(pe[15])][ie(137) + ie(138) + ie(139) + ie(140)](He), ee[pe[28]] = ee[pe[5]] === pe[56] ? ee[pe[1]][ie(pe[15])][ie(pe[62]) + ie(pe[63]) + ie(pe[64]) + ie(pe[65])](ee[pe[2]], ie(pe[66]) + ie(pe[67])) : ee[pe[5]][ie(pe[66]) + ie(pe[67])]), !Je && be()[pe[73]](Ze) && (ee[pe[5]] === pe[56] ? ee[pe[1]][ie(pe[15])][ie(pe[62]) + ie(pe[63]) + ie(pe[64]) + ie(pe[65])](ee[pe[2]], ie(pe[68]) + ie(pe[69]) + ie(pe[70]) + ie(pe[71])) : ee[pe[5]][ie(pe[68]) + ie(pe[69]) + ie(pe[70]) + ie(pe[71])])) {
        function fe(ee) {
          var ie, He, ye, be, Me, Ke, Ue;
          for (De(ie = "" + (ee || ""), He = ie.length, ye = [], be = pe[1], Me = pe[1], Ke = -pe[2]), Ue = pe[1]; Ue < He; Ue++) {
            var Fe = '~uv8`),eqY"h!nl:ib93KAw%po=VC$X5/I&GJgFWT.[#PQaEmjrZc>|1*+z6@]MU0<O4^SL{Dx7yd_(B2kHfst;?R}N'.indexOf(ie[Ue]);
            if (Fe !== -pe[2])
              if (Ke < pe[1]) Ke = Fe;
              else {
                De(Ke += Fe * pe[30], be |= Ke << Me, Me += (Ke & pe[33]) > pe[34] ? pe[35] : pe[36]);
                do {
                  De(ye.push(be & pe[12]), be >>= pe[11], Me -= pe[11])
                } while (Me > pe[7]);
                Ke = -pe[2]
              }
          }
          return Ke > -pe[2] && ye.push((be | Ke << Me) & pe[12]), ze(ye)
        }

        function Te(...ee) {
          return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = fe(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
        }

        function Xe() {
          console.log((function(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[pe[5]] = pe[1], ee[pe[19]] = {}, ee[-pe[72]] = pe[1], ee[pe[10]] = pe[1], ee[pe[8]] = pe[1], ee[pe[46]] = ee[pe[1]].length), ee[pe[7]] = pe[1]; ee[pe[7]] < ee[pe[46]]; ee[pe[7]]++) {
              for (De(ee[pe[19]] = {}, ee[-pe[72]] = pe[1], ee[pe[10]] = pe[2]), ee[pe[11]] = ee[pe[7]] + pe[2]; ee[pe[11]] < ee[pe[46]]; ee[pe[11]]++) ee[pe[1]][ee[pe[7]]].x !== ee[pe[1]][ee[pe[11]]].x || ee[pe[1]][ee[pe[7]]].y !== ee[pe[1]][ee[pe[11]]].y ? (ee[pe[1]][ee[pe[7]]].y === ee[pe[1]][ee[pe[11]]].y ? ee[pe[8]] = Number.MAX_SAFE_INTEGER : ee[pe[8]] = (ee[pe[1]][ee[pe[7]]].x - ee[pe[1]][ee[pe[11]]].x) / (ee[pe[1]][ee[pe[7]]].y - ee[pe[1]][ee[pe[11]]].y), ee[pe[19]][ee[pe[8]]] || (ee[pe[19]][ee[pe[8]]] = pe[1]), De(ee[pe[19]][ee[pe[8]]]++, ee[-pe[72]] = Math.max(ee[-pe[72]], ee[pe[19]][ee[pe[8]]]))) : ee[pe[10]]++;
              De(ee[-pe[72]] += ee[pe[10]], ee[pe[5]] = Math.max(ee[pe[5]], ee[-pe[72]]))
            }
            return ee[pe[5]]
          }))
        }
        Te(147) + pe[52] in Be && Xe(), De(we(ge, Ee, Ze), we(Oe, Ze, Ee), be()[Te(pe[29])](de, Ze, Oe));
        const te = be()[Te(pe[88])](Ze),
          Pe = be()[Te(pe[3])](Ee, Ze) / ee[pe[8]] / te,
          Ae = Math[Te(pe[79])](Pe, pe[1]) + pe[2];
        if (ee[pe[8]] * ee[pe[8]] < be()[pe[73]](Oe)) {
          function Ye(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[pe[74]] = 'S4hDRIkng:<u/>rvH}Q9K~0Z%PX*olU8OW=N7,ac2p#@$yFBYe5zbJ`_L!+w3Am;6j{TxECd1?]Vs[.)&tiM|Gfq("^', ee[pe[0]] = "" + (ee[pe[1]] || ""), ee[pe[38]] = ee[pe[0]].length, ee[pe[37]] = [], ee[pe[8]] = pe[1], ee[pe[52]] = pe[1], ee[pe[75]] = -pe[2]), ee[pe[11]] = pe[1]; ee[pe[11]] < ee[pe[38]]; ee[pe[11]]++)
              if (ee[pe[41]] = ee[pe[74]].indexOf(ee[pe[0]][ee[pe[11]]]), ee[pe[41]] !== -pe[2])
                if (ee[pe[75]] < pe[1]) ee[pe[75]] = ee[pe[41]];
                else {
                  De(ee[pe[75]] += ee[pe[41]] * pe[30], ee[pe[8]] |= ee[pe[75]] << ee[pe[52]], ee[pe[52]] += (ee[pe[75]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
                  do {
                    De(ee[pe[37]].push(ee[pe[8]] & pe[12]), ee[pe[8]] >>= pe[11], ee[pe[52]] -= pe[11])
                  } while (ee[pe[52]] > pe[7]);
                  ee[pe[75]] = -pe[2]
                } return ee[pe[75]] > -pe[2] && ee[pe[37]].push((ee[pe[8]] | ee[pe[75]] << ee[pe[52]]) & pe[12]), ze(ee[pe[37]])
          }

          function Ve(...ee) {
            return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = Ye(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
          }

          function ae(...ee) {
            De(ee[pe[13]] = pe[1], ee[pe[5]] = function(...ie) {
              return De(ie[pe[13]] = pe[38], ie[pe[76]] = {}), ie[pe[0]].length !== ie[pe[1]].length + ie[pe[2]].length ? pe[49] : ee[-pe[77]](ie[pe[1]], ie[pe[2]], ie[pe[0]], pe[1], pe[1], pe[1], ie[pe[76]])
            }, ee[-pe[77]] = function(ie, He, ye, be, Me, Ke, Ue) {
              var Fe = pe[49];
              return Ke >= ye.length ? pe[78] : Ue["" + be + Me + Ke] !== pe[18] ? Ue["" + be + Me + Ke] : (ye[Ke] === ie[be] && ye[Ke] === He[Me] ? Fe = ee[-pe[77]](ie, He, ye, be + pe[2], Me, Ke + pe[2], Ue) || ee[-pe[77]](ie, He, ye, be, Me + pe[2], Ke + pe[2], Ue) : ye[Ke] === ie[be] ? Fe = ee[-pe[77]](ie, He, ye, be + pe[2], Me, Ke + pe[2], Ue) : ye[Ke] === He[Me] && (Fe = ee[-pe[77]](ie, He, ye, be, Me + pe[2], Ke + pe[2], Ue)), Ue["" + be + Me + Ke] = Fe, Fe)
            }, console.log(ee[pe[5]]))
          }
          Ve(152) + "r" in Be && ae(), be()[Ve(pe[75])](Ee, Ee, Oe, Ae)
        }
        De(ee[pe[28]] = (pe[1], Me.v)(ee[pe[28]], 1, Math[Te(pe[79])](pe[2], Math[Te(154)](pe[1], -Pe, pe[2] - te / ee[pe[8]]))), be()[Te(pe[47])](Ee, Ee, de))
      }
      const oe = We;
      if (De(be()[ie(156)](oe, Ee, Ze), oe[pe[2]] = pe[1], ee[pe[82]] = be()[ie(157)](oe)), !Je) {
        function ce() {
          function ee(...ee) {
            return ee[pe[13]] = pe[2], ee[pe[1]][pe[2]] * pe[81] + (ee[pe[1]][pe[1]] < pe[1] ? pe[80] | ee[pe[1]][pe[1]] : ee[pe[1]][pe[1]])
          }

          function ie(...ee) {
            switch (ee[pe[13]] = pe[2], ((ee[pe[1]] & pe[80]) !== pe[1]) * pe[2] + (ee[pe[1]] < pe[1]) * pe[0]) {
              case pe[1]:
                return [ee[pe[1]] % pe[80], Math.trunc(ee[pe[1]] / pe[81])];
              case pe[2]:
                return [ee[pe[1]] % pe[80] - pe[80], Math.trunc(ee[pe[1]] / pe[81]) + pe[2]];
              case pe[0]:
                return [((ee[pe[1]] + pe[80]) % pe[80] + pe[80]) % pe[80], Math.round(ee[pe[1]] / pe[81])];
              case pe[38]:
                return [ee[pe[1]] % pe[80], Math.trunc(ee[pe[1]] / pe[81])]
            }
          }
          let He = ee([pe[0], pe[37]]),
            ye = ee([pe[2], pe[0]]),
            be = He + ye,
            Me = be - ye,
            Ke = Me * pe[0],
            Ue = Ke / pe[0];
          De(console.log(ie(be)), console.log(ie(Me)), console.log(ie(Ke)), console.log(ie(Ue)))
        }
        ie(158) + "9" in Be && ce(), ee[pe[82]] *= ee[pe[28]]
      }
      const Re = ee[pe[22]][ie(159) + ie(160) + ie(161)],
        ke = Re ? Math[ie(162)](Re, ee[pe[82]]) : ee[pe[82]];
      be()[ie(163) + ie(164)](oe, oe);
      const qe = ee[pe[7]] !== pe[56] && ee[pe[7]] !== void pe[1] ? ee[pe[7]] : ee[pe[22]][ie(165) + ie(166) + ie(167) + ie(168)];
      if (ke > pe[1]) {
        function xe(ee) {
          var ie, He, ye, be, Me, Ke, Ue;
          for (De(ie = "" + (ee || ""), He = ie.length, ye = [], be = pe[1], Me = pe[1], Ke = -pe[2]), Ue = pe[1]; Ue < He; Ue++) {
            var Fe = 'a$G)"Fz(IrSTPH4pu%8EXd3hmyR*.=K?nJ:9~_0DC7U{]6eNtLs,x1&OMoj|Z#fYB;!2g+>kbA@Q/cV[ivlwq<5}`^W'.indexOf(ie[Ue]);
            if (Fe !== -pe[2])
              if (Ke < pe[1]) Ke = Fe;
              else {
                De(Ke += Fe * pe[30], be |= Ke << Me, Me += (Ke & pe[33]) > pe[34] ? pe[35] : pe[36]);
                do {
                  De(ye.push(be & pe[12]), be >>= pe[11], Me -= pe[11])
                } while (Me > pe[7]);
                Ke = -pe[2]
              }
          }
          return Ke > -pe[2] && ye.push((be | Ke << Me) & pe[12]), ze(ye)
        }

        function Le(...ee) {
          return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = xe(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
        }

        function Ce(...ee) {
          De(ee[pe[13]] = pe[1], ee[pe[87]] = function(...ie) {
            return De(ie[pe[13]] = pe[2], ie[pe[83]] = []), (ie[pe[1]] === pe[2] || ie[pe[1]] >= pe[37]) && ee[pe[2]](ie[pe[83]], [], ie[pe[1]], pe[1]), ie[pe[83]]
          }, ee[pe[2]] = function(...ie) {
            for (ie[pe[13]] = pe[37], ie[pe[37]] = ie[pe[38]]; ie[pe[37]] < ie[pe[0]]; ie[pe[37]]++) {
              if (ie[pe[2]].length !== ie[pe[37]]) return;
              for (ie[pe[8]] = pe[1]; ie[pe[8]] < ie[pe[0]]; ie[pe[8]]++) ee[pe[10]](ie[pe[2]], [ie[pe[37]], ie[pe[8]]]) && (De(ie[pe[2]].push([ie[pe[37]], ie[pe[8]]]), ee[pe[2]](ie[pe[1]], ie[pe[2]], ie[pe[0]], ie[pe[37]] + pe[2])), ie[pe[2]].length === ie[pe[0]] && ie[pe[1]].push(ee[pe[38]](ie[pe[2]])), ie[pe[2]].pop())
            }
          }, ee[pe[38]] = function(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[pe[2]] = [], ee[pe[84]] = ee[pe[1]].length), ee[pe[20]] = pe[1]; ee[pe[20]] < ee[pe[84]]; ee[pe[20]]++)
              for (ee[pe[2]][ee[pe[20]]] = "", ee[pe[10]] = pe[1]; ee[pe[10]] < ee[pe[84]]; ee[pe[10]]++) ee[pe[2]][ee[pe[20]]] += ee[pe[1]][ee[pe[20]]][pe[2]] === ee[pe[10]] ? pe[85] : pe[86];
            return ee[pe[2]]
          }, ee[pe[10]] = function(...ee) {
            for (De(ee[pe[13]] = pe[0], ee[pe[0]] = ee[pe[1]].length), ee[pe[38]] = pe[1]; ee[pe[38]] < ee[pe[0]]; ee[pe[38]]++) {
              if (ee[pe[1]][ee[pe[38]]][pe[1]] === ee[pe[2]][pe[1]] || ee[pe[1]][ee[pe[38]]][pe[2]] === ee[pe[2]][pe[2]]) return pe[49];
              if (Math.abs((ee[pe[1]][ee[pe[38]]][pe[1]] - ee[pe[2]][pe[1]]) / (ee[pe[1]][ee[pe[38]]][pe[2]] - ee[pe[2]][pe[2]])) === pe[2]) return pe[49]
            }
            return pe[78]
          }, console.log(ee[pe[87]]))
        }
        ie(169) in Be && Ce();
        let ve = ee[pe[0]][ie(170) + ie(171)] * qe;
        if (!Je) {
          function me(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'LM:x0P@)Y{2wVyIFAQ}=5R4ou(B9_NS"Z*p7n]/lvd^;jmOt,%`HGzcC<6q~!fg$bsa>U.eJk[#hrD1WXiTE?K|3+8&', ee[-pe[88]] = "" + (ee[pe[1]] || ""), ee[pe[89]] = ee[-pe[88]].length, ee[-pe[91]] = [], ee[pe[90]] = pe[1], ee[pe[22]] = pe[1], ee[-pe[31]] = -pe[2]), ee[pe[39]] = pe[1]; ee[pe[39]] < ee[pe[89]]; ee[pe[39]]++)
              if (ee[pe[41]] = ee[pe[5]].indexOf(ee[-pe[88]][ee[pe[39]]]), ee[pe[41]] !== -pe[2])
                if (ee[-pe[31]] < pe[1]) ee[-pe[31]] = ee[pe[41]];
                else {
                  De(ee[-pe[31]] += ee[pe[41]] * pe[30], ee[pe[90]] |= ee[-pe[31]] << ee[pe[22]], ee[pe[22]] += (ee[-pe[31]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
                  do {
                    De(ee[-pe[91]].push(ee[pe[90]] & pe[12]), ee[pe[90]] >>= pe[11], ee[pe[22]] -= pe[11])
                  } while (ee[pe[22]] > pe[7]);
                  ee[-pe[31]] = -pe[2]
                } return ee[-pe[31]] > -pe[2] && ee[-pe[91]].push((ee[pe[90]] | ee[-pe[31]] << ee[pe[22]]) & pe[12]), ze(ee[-pe[91]])
          }

          function le(ee) {
            return typeof Ue[ee] === pe[17] ? Ue[ee] = me(Fe[ee]) : Ue[ee]
          }

          function Se(...ee) {
            ee[pe[13]] = pe[1]
          }
          ie(172) + "p" in Be && Se(), ve *= ee[pe[0]][le(pe[96]) + le(181)]
        }
        let ue = ee[pe[0]][Le(182) + Le(pe[100]) + "ss"] * ke;
        if (ke < .3) {
          function ne(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[pe[5]] = ';.x[)9/#_w~Mb@JAeH:IV=rGBL`kD}s4|]+pQl*5YNXF8yovjuOqWa%d,S72&R{0^nT3<fKPCEg!$h>tUZz?(1i6m"c', ee[pe[19]] = "" + (ee[pe[1]] || ""), ee[pe[38]] = ee[pe[19]].length, ee[pe[10]] = [], ee[-pe[102]] = pe[1], ee[pe[52]] = pe[1], ee[pe[42]] = -pe[2]), ee[pe[11]] = pe[1]; ee[pe[11]] < ee[pe[38]]; ee[pe[11]]++)
              if (ee[pe[28]] = ee[pe[5]].indexOf(ee[pe[19]][ee[pe[11]]]), ee[pe[28]] !== -pe[2])
                if (ee[pe[42]] < pe[1]) ee[pe[42]] = ee[pe[28]];
                else {
                  De(ee[pe[42]] += ee[pe[28]] * pe[30], ee[-pe[102]] |= ee[pe[42]] << ee[pe[52]], ee[pe[52]] += (ee[pe[42]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
                  do {
                    De(ee[pe[10]].push(ee[-pe[102]] & pe[12]), ee[-pe[102]] >>= pe[11], ee[pe[52]] -= pe[11])
                  } while (ee[pe[52]] > pe[7]);
                  ee[pe[42]] = -pe[2]
                } return ee[pe[42]] > -pe[2] && ee[pe[10]].push((ee[-pe[102]] | ee[pe[42]] << ee[pe[52]]) & pe[12]), ze(ee[pe[10]])
          }

          function je(...ee) {
            return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = ne(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
          }

          function se(...ee) {
            ee[pe[13]] = pe[1]
          }
          je(184) + "I" in Be && se(), ue *= ke
        }
        if (ve > ue) {
          function Ie(...ee) {
            for (De(ee[pe[13]] = pe[2], ee[pe[5]] = 'f"ReyQx$!A51#%^w)FiHdYEnBlXVpSr=&}0|7ZtbmjDhqUC2G8k<9O+aWPIgTvsc(*zKNLoJ~/?36.4,:>@];`{_[uM', ee[pe[19]] = "" + (ee[pe[1]] || ""), ee[pe[104]] = ee[pe[19]].length, ee[pe[10]] = [], ee[pe[103]] = pe[1], ee[pe[22]] = pe[1], ee[pe[105]] = -pe[2]), ee[pe[39]] = pe[1]; ee[pe[39]] < ee[pe[104]]; ee[pe[39]]++)
              if (ee[pe[64]] = ee[pe[5]].indexOf(ee[pe[19]][ee[pe[39]]]), ee[pe[64]] !== -pe[2])
                if (ee[pe[105]] < pe[1]) ee[pe[105]] = ee[pe[64]];
                else {
                  De(ee[pe[105]] += ee[pe[64]] * pe[30], ee[pe[103]] |= ee[pe[105]] << ee[pe[22]], ee[pe[22]] += (ee[pe[105]] & pe[33]) > pe[34] ? pe[35] : pe[36]);
                  do {
                    De(ee[pe[10]].push(ee[pe[103]] & pe[12]), ee[pe[103]] >>= pe[11], ee[pe[22]] -= pe[11])
                  } while (ee[pe[22]] > pe[7]);
                  ee[pe[105]] = -pe[2]
                } return ee[pe[105]] > -pe[2] && ee[pe[10]].push((ee[pe[103]] | ee[pe[105]] << ee[pe[22]]) & pe[12]), ze(ee[pe[10]])
          }

          function he(...ee) {
            return ee[pe[13]] = pe[2], typeof Ue[ee[pe[1]]] === pe[17] ? Ue[ee[pe[1]]] = Ie(Fe[ee[pe[1]]]) : Ue[ee[pe[1]]]
          }

          function Ne(...ee) {
            De(ee[pe[13]] = pe[1], ee[pe[106]] = function(...ie) {
              return ie[pe[13]] = pe[0], ee[pe[19]]({}, ie[pe[1]], ie[pe[2]])
            }, ee[pe[19]] = function(...ie) {
              if (De(ie[pe[13]] = pe[38], ie[pe[38]] = {}), ie[pe[1]][ie[pe[2]] + ie[pe[0]]] !== pe[18]) return ie[pe[1]][ie[pe[2]] + ie[pe[0]]];
              if (ie[pe[2]] === ie[pe[0]]) return pe[78];
              for (ie[pe[19]] = pe[1]; ie[pe[19]] < ie[pe[2]].length; ie[pe[19]]++) ie[pe[38]][ie[pe[2]][ie[pe[19]]]] === pe[18] && (ie[pe[38]][ie[pe[2]][ie[pe[19]]]] = pe[1]), ie[pe[38]][ie[pe[0]][ie[pe[19]]]] === pe[18] && (ie[pe[38]][ie[pe[0]][ie[pe[19]]]] = pe[1]), De(ie[pe[38]][ie[pe[2]][ie[pe[19]]]]++, ie[pe[38]][ie[pe[0]][ie[pe[19]]]]--);
              for (ie[pe[67]] in ie[pe[38]])
                if (ie[pe[38]][ie[pe[67]]] !== pe[1]) return ie[pe[1]][ie[pe[2]] + ie[pe[0]]] = pe[49], pe[49];
              for (ie[pe[22]] = pe[2]; ie[pe[22]] < ie[pe[2]].length; ie[pe[22]]++)
                if (ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(pe[1], ie[pe[22]]), ie[pe[0]].substr(pe[1], ie[pe[22]])) && ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(ie[pe[22]]), ie[pe[0]].substr(ie[pe[22]])) || ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(pe[1], ie[pe[22]]), ie[pe[0]].substr(ie[pe[0]].length - ie[pe[22]])) && ee[pe[19]](ie[pe[1]], ie[pe[2]].substr(ie[pe[22]]), ie[pe[0]].substr(pe[1], ie[pe[0]].length - ie[pe[22]]))) return ie[pe[1]][ie[pe[2]] + ie[pe[0]]] = pe[78], pe[78];
              return ie[pe[1]][ie[pe[2]] + ie[pe[0]]] = pe[49], pe[49]
            }, console.log(ee[pe[106]]))
          }
          he(185) + pe[52] in Be && Ne(), ve = ue
        }
        De(be()[Le(pe[48])](oe, oe, ve), ee[pe[37]][Le(187) + Le(188)](oe))
      }
      ee[pe[37]][ie(189) + pe[107]] = ee[pe[0]][ie(pe[98]) + ie(pe[54]) + pe[107]] * (Je ? ye : Ke)
    }
  },
  38476: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      e: () => Ue
    });
    var ye = He(38478),
      be = He(1952);
    const Me = 2,
      Ke = 1,
      Ue = {
        XF: 1,
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

    function Fe(ee, ie, He, Ue, Fe, Je, oe) {
      if (Fe.speed) return (0, ye.e)(ie, He, Ue, Fe, Je, oe, ee), void(Fe.ticksToReachMaxIdleFriction = Me);
      const Re = Ue.isOnGround(),
        ke = ie.bloxd.getSyncedClientOptions(ie.bloxd.getPlayerReader(He)),
        qe = null === ke ? ie.bloxd.getClientPredictedOption(He, "groundFrictionScale") : ke.groundFrictionScale,
        fe = null === ke ? ie.bloxd.getClientPredictedOption(He, "airFrictionScale") : ke.airFrictionScale,
        Te = Re ? qe : fe,
        pe = Math.max(Ke, Te),
        Xe = Fe.ticksToReachMaxIdleFriction / Me,
        ze = (0, be.v)(pe, Te, Xe);
      Je.friction = ee.standingFriction * ((null === ke ? ie.bloxd.getClientPredictedOption(He, "airMomentumConservation") : ke.airMomentumConservation) ? ze : Te), Fe.ticksToReachMaxIdleFriction > 0 && Fe.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);