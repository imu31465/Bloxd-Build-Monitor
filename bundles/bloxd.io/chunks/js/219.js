export const id = 219;
export const ids = [219];
export const modules = {
  38080: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => mb
    });
    var kb = sb(223),
      Wb = sb(37210);
    const ab = 1.2,
      Tb = {
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
        nU: .5,
        obb: !1
      },
      Ub = {
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
        nU: .5,
        obb: !1
      },
      Ib = {
        physicsBodyDimensions: {
          width: kb.e.YC,
          height: kb.e.JC
        },
        hitBoxDimensions: {
          width: kb.e.YC + .4,
          height: kb.e.JC + .6
        },
        eyeHeight: kb.e.JC * kb.e.playerEyeToHeightRatio,
        rideHeight: kb.e.JC - .3,
        nU: .5,
        obb: !1
      },
      Hb = {
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
        nU: .5,
        obb: !1
      },
      fb = {
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
        nU: .5,
        obb: !1
      },
      Mb = {
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
        nU: .5,
        obb: !1
      },
      Xb = {
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
        nU: .5,
        obb: !1
      },
      nb = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: kb.e.YC,
            height: kb.e.JC
          },
          hitBoxDimensions: {
            width: kb.e.YC + .4,
            height: kb.e.JC + .6
          },
          eyeHeight: kb.e.JC * kb.e.playerEyeToHeightRatio,
          rideHeight: kb.e.JC - .1,
          nU: Wb.e.nU,
          obb: !0
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
        },
        Camel: {
          modelScale: ab,
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
        },
        "Cave Golem": Tb,
        "Draugr Zombie": {
          ...Ib,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Ib,
        "Frost Golem": Tb,
        "Frost Zombie": {
          ...Ib,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Ib,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: kb.e.YC,
            height: kb.e.JC
          },
          hitBoxDimensions: {
            width: kb.e.YC + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          nU: .5,
          obb: !1
        },
        Wolf: Hb,
        Bear: fb,
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
          nU: .5,
          obb: !1
        },
        Stag: Mb,
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
          nU: .5,
          obb: !1
        },
        Gorilla: Xb,
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
          nU: .5,
          obb: !1
        },
        "Draugr Huntress": Ib,
        "Magma Golem": Tb,
        "Spirit Golem": Tb,
        "Spirit Wolf": Hb,
        "Spirit Bear": fb,
        "Spirit Stag": Mb,
        "Spirit Gorilla": Xb,
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: kb.e.YC,
            height: kb.e.JC
          },
          hitBoxDimensions: {
            width: kb.e.YC + .4,
            height: kb.e.JC + .6
          },
          eyeHeight: kb.e.JC * kb.e.playerEyeToHeightRatio,
          rideHeight: kb.e.JC - .1,
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: kb.e.YC,
            height: kb.e.JC
          },
          hitBoxDimensions: {
            width: kb.e.YC + .4,
            height: kb.e.JC + .6
          },
          eyeHeight: kb.e.JC * kb.e.playerEyeToHeightRatio,
          rideHeight: kb.e.JC - .1,
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
        },
        Zombie: {
          ...Ib,
          defaultPose: "zombie"
        },
        Skeleton: Ib,
        Mummy: {
          ...Ib,
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
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
          nU: .5,
          obb: !1
        },
        "Iron Guardian": Ub,
        "Gold Guardian": Ub,
        "Diamond Guardian": Ub,
        "Moonstone Guardian": Ub,
        "Iron Goofy Golem": Ub,
        "Gold Goofy Golem": Ub,
        "Diamond Goofy Golem": Ub,
        "Moonstone Goofy Golem": Ub,
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
          nU: .5,
          obb: !1
        }
      };

    function mb(bb) {
      return nb[bb]
    }
  },
  36632: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    const kb = {
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
  37214: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(356),
      Wb = sb.n(kb),
      ab = sb(1832);
    let Tb;
    var Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb;
    const Qb = [185, 0, 1, 132, 40, 41, "i", 7, "e", "f", "d", 8, 255, "length", 6, 32, "a", 4, "undefined", void 0, 3, "b", 63, "fromCodePoint", 12, "push", 213, 2, 112, 177, "h", 192, 91, 11, 8191, 88, 13, 14, 71, 17, 56, 190, 9, 43, 189, 247, 202, 160, 208, "c", 159, "g", 178, 47, 241, 127, 128, 138, null, 150, 151, 152, 146, 147, 148, 149, 153, 154, 155, 164, 165, 166, 167, 168, 97, 84, 37, 5, "nf", 83, 172, 169, 237, 60, 10, 134, 157, 67, 107, 45, 116, "?", 76, "on"];

    function eb(bb) {
      return typeof Ub[bb] === Qb[18] ? Ub[bb] = function(...bb) {
        for (tb(bb[Qb[13]] = Qb[2], bb[Qb[5]] = 'H9fd3Z~_G.F)(18Rl@?iuNPDn2S`>w<,aA4vVI^Xq=zx:!r7y5*sec/[ETKJ|b&L";jt#BQ]0%${}o6+mCgMkYhUpOW', bb[Qb[0]] = "" + (bb[Qb[1]] || ""), bb[-Qb[4]] = bb[Qb[0]].length, bb[Qb[10]] = [], bb[Qb[8]] = Qb[1], bb[Qb[9]] = Qb[1], bb[Qb[7]] = -Qb[2]), bb[Qb[3]] = Qb[1]; bb[Qb[3]] < bb[-Qb[4]]; bb[Qb[3]]++)
          if (bb[Qb[6]] = bb[Qb[5]].indexOf(bb[Qb[0]][bb[Qb[3]]]), bb[Qb[6]] !== -Qb[2])
            if (bb[Qb[7]] < Qb[1]) bb[Qb[7]] = bb[Qb[6]];
            else {
              tb(bb[Qb[7]] += bb[Qb[6]] * Qb[32], bb[Qb[8]] |= bb[Qb[7]] << bb[Qb[9]], bb[Qb[9]] += (bb[Qb[7]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
              do {
                tb(bb[Qb[10]].push(bb[Qb[8]] & Qb[12]), bb[Qb[8]] >>= Qb[11], bb[Qb[9]] -= Qb[11])
              } while (bb[Qb[9]] > Qb[7]);
              bb[Qb[7]] = -Qb[2]
            } return bb[Qb[7]] > -Qb[2] && bb[Qb[10]].push((bb[Qb[8]] | bb[Qb[7]] << bb[Qb[9]]) & Qb[12]), Cb(bb[Qb[10]])
      }(Ib[bb]) : Ub[bb]
    }

    function Cb(...bb) {
      return bb[Qb[13]] = Qb[2], typeof fb !== Qb[18] && fb ? (new fb).decode(new Mb(bb[Qb[1]])) : typeof Xb !== Qb[18] && Xb ? Xb.from(bb[Qb[1]]).toString("utf-8") : lb(bb[Qb[1]])
    }

    function Nb() {}
    tb(Ub = {}, Ib = ["pGO~m&b1@R`~Rg7X@a8,I#0hMTw`|JE4*S!FPe}na|:J9l)XZ|$oxvKKc1C)9", "Ps#oxm[9i/_dmMbDPr,<{B$(j.xB,8)XTJx0Ye9CAL1{X`hP|u}$1", "lS;~>MB9", '3.n<$TQ$H?vn/2fIUsI>,6$4u"GK:d^I*;jw,6$<>@bLtQaz', "W@U3eE%9G;58cl1^y~#ZC]<?.[f6_XNqo,&}uqErrJJ", ">;RAjC.=5T3gJK^^tDp%gAsv3", 'Du9sGhwC~"Z78C)SMJjcjkdc)8DFQ1`wdjE5S', ",DI,~4)9gir3kvX2i9", "eD~e45k4:E#mrIh=t4ecn}:qx)^%TlZ?!(8eU6>Gd", "v~Y$L+H", "e(1$^%Tv7L1+Il=Xg>tZyKr?#iWoa`c4M2%/xsiBu/6V*bQn/(@<To5=!ce", "?.gauBpnt|tJ]QKwLyb,oCfVN1yNU8Y`!&B*z5(?A(r%9", "e;Y]SY]T!)G{OVi4M4=s^gT=1j1+EJE4FLL>[QlKpKwev*%i*~P3", "iR96a%kKS;kQy`jV*H", "UuwF=5H", "=yw_~|&?3", 'S|2/>];{i.ZI.V`z+%{a?6sD&E">u]~', "FTr>!#wCWuT}B1$2@(p~TLnnQK>+Xg~", "^]6>ZB.2|c4y~Z,<", "J;:o:IxiN/0o9yj@h%%/][;=>JF<Q2z^u]:wYYR=_uRIj51XMzH~", "vde$V{aew?WQ7gZ,t,iw(hz(4L&29VLDTH", 'e;~_Iv@cu"d+pyf?@q73pekeT@3.PC[w?qwF`^3GIio$F8Q,}H', "A#WaYMJw)J30:lU>$H", "[sIea/HGJ@V_%|aDt4Q[X%LD+G&)W5V,/yga[K_9", "NqNFIvAi1?B%$CO>p&RAWM?r_", "iTqsgTa?Ii]R=0{XU!Fa)Tur]uxBz8HDvsh3", '%;:F^%AiCLy3(X{Xc4}w_$n"j(^d,f&V5;Ne?}MT;(yn#Ju>h;&3', "IIA/eL]sJJm5;y,wG#@0.|ITaR.<ld8`bdP3/cAi(8", "XwU>.|aeK)+ExS,I8x#SAeY1LGa}~bl4kH", 'z~HA!mQ<UK]v&1xSK;Mo2^"(v/{oW5v,', "&;;/dyzf", "#4C/^INcTK%tL`{X4xxaf0o_7R!F#MR`dDq<P}@C~", "#!l6sg2C);U|V`{2k,X>g!Ees/V", "lTp~,7D7ATZsk]OD}s&eOT`7?T20(0fn~x^3L|._d", "T!}SYAh4S8y%?STDi/VwdyrfA?O2}M)ie;u,.&_i$84+`J]2hH", "|8O/%C)Co)Ored", "~SU5?^6?f|q>dg.", "5dBFNB6rq;lufC8qCH", "DR_e~c$r[uSu(MrSC>.~i^[wC?3g(Md,|8[3oM/?m.r}=b)^BH", "OEGA=vH", "*;c33c%_S@f~o3dVn.B*e{U@|&>K)*m`/.k*3r&~p;YQ*5OvuRP30}(?yjA@9", "0D^>8&R98Ltar5v@!&&5m&%=_1:BjBP>h2u$d$8G:&:_.lW>[D.~P", "y;z{!gv7h11{K5,wCy$whAX1L(;eU^X?O@z{J07=7R*mq`pvs]y~erATCR`", "Mz#S>6siEKWwPZ2vADto2ev7x@~#{8N4]dJwjVlK01A`=3", "xwsa[IR1O8>KvS%^f3[e5sRcHLuyf2]2fjQ3", "b/3*$*A7}cP4~ZKDTq[}/ce<*i", ";qZ$?^y<4iiBdRWzo@y/+}`C:8>+O3ZxDql<f&qeE;orT3T>{zCsu", "s!D}oyB_jL;%&1plc./eiCr(s|@`e`i4BIxai", "MQn`cg7TAjk(z2[v_aa/3$TDHRjL7K3,=;=/uJ6q3i9A9", "+;)asK)caN?naJ0S_r,>~yC=&?#)M8q^15#cD}sL5.r}fIB2/Dd", "D._}G}ic$@", "`r4aM&>egLWo=5^2(a{w@]b1C?H{H", "`#*G0$?r#1_+KB;D[qioy5<$tT`153", "(3S{o*]1J@<;l]fV]/z0CVwTbJJvC0Fuy]?s.y|hI12", '@]BS0V"~t({ok]~', "Qzja34q<&GBmgQlS+!m5$&uf~1L2rb&z", "3??sU^Fe^1H;n`I2", ";@.6j4GecKy@GM[vLIoSOJmnbJf0uVYq|yxww]M9", 'zwn5oVb7R|"9OmS=4|2~E4meH(oR627SFqD>i', "&&Q3`vlK(JYPVd", "6EQ5`T__XKH`b0hP`r)0QCH", 't!.a>6U=ZK`+URCX(r]>mT4$LRfIu`"V0DnAM]a?5T;2D*T=y]d', "lqiop]vw2u20/^CXrxnAoChnH?M*kMN=r&<}Ae}(Hjc%VM,<44taw", "ms;/Xv!{9LP&?Z_", "N~Fs~0%{v.$a>`u>NSl<g!++zu/5*2SzNrf", "X]3ZZBnnj.m)2V4@7]o>Fh^VO;znf2RX&;%~EKICb)}V,8Rup!%~)BeKJ@P}9", "ns>wH$xv#1IetK1XSuHAH+y<&GQRMQq?O>]%WM7i;|~~c|mS?R:FT|s7,Nx", "p!O/G&X14/P4j1/`F$>on", ":~;/dcn<Y1R0&5Q?4/S{HkH", "Ga.~|ctT|;>e9", "*IR.GVGea|4J{^s=Z$/>7sfQRLgE]Q0,Q@{G|K19", "H|gGyLkn%uFD@0mS", "#>P>ae;D^K<@nMXI_9", 'J&,ex/VVb&5mJK"<WJCaDY.C$uD;*bF2v(o_m&p(l.!', "_$U55E%9fRX%{S4<WE:wg^erCL>", "(TMw3|=Bpu$vmR{Xg,Q3]*={y|y}fSOlU!:$$^zf>N", "W&P3g&E<Su6$Hk@qR5as=5bv?/7@9lf?r&u,w", "0zda/Ik4ALxmz1u4nxU.7Q6eW)_19", "6#DA:/?fz@^", "j&N>>q2=r?<15li`N/8.tcr(4T[3U^L@.]#,)yr<fL~#EnQnv|Led&uf", "6)n<{[<n@?>09|B,Us8,@BH", "[]Q,K0H", ";@A~/0_1m?i<{SBn$s=~>7(n?.)1{SWwZ].0{*c7lTY9fbI,aT`o[X@_:;uF9", "!q3$[KL{qKUCxf", "|@tGV7H", "T4PeZViw!?zFzbxS</[e[+;slRjNiS$i", "W)Z*S6Fr|J^+qy}ioI4acoDi0u73*1WlV|^_ZcsikT+Q68#I_rO/!mnf", 'r4Q_b4&?Xu7%@Ie`",X3yQzng(_;0]d<K@>oUAdid', "fxl/=IG<jRIBs`p>kQ^5f|B14iX", "5y*sRM|#4|Pgdg{iYzB_6$wBPK~+S8II85:$nqH", "p8L>4YFrw&vB_X(SVdvwu}6~LG|a@VM=/s,e_cNvJEP4`f", "3L:$Cets8?ptvMy`{;h5M^3<i(p$[M&zD|w>o}cDh1+PnMa<H|BS|rprii", "Q#^.OJv7WJGs#`~2N.MZA6Frh1q", "#db$(*pm|GW9eRjnssSo7K6r3.?gmdV2CE:,9yR_|&IF9", "N.dZ8V#KAjrBJK,z^#H/6BYTdiEa(`%i&qf", 'B!v$sg@=X"l{I2l`x$Mw`J12aNv}w3', "_SU3Q*/ePKeB%VWwoH", "#y<%tcLs2@u0_My4v(3*.T=9%&m29", "C4l/EL{+e/<841Q?8|QeAb;T$;smeJ,zNq}*a]ic/ijQ>`j@CyMwHh(f", "k%f{fCg4~1GK0`?X~wwF(&pqd", "[s/>(}xBBipoU]Gio;[.K04hpusBnV1", "!#:oE+H", 'Z5tS.BkmP"$$N03xzw[}we.=+RZ.)*n>A#2/o!qmBif1;V8', 'i]Vw~|PV"L&_X^xS"q/38}b9', "XIY*;rkq?i9A9", "OEPe>vWhdiensgg4},4`gCt{6GPd,^?>i.0~0+*rLEqmH", "O)r,`Y#~JGM$pmWz<TH/~0={;LR@qdbzOsq`b4zq,|A+a3K>8Tf", "k;{G75GVGFtQn]Ez9wWap6cwmRt>#J)2yxo_S", "Aw`o55,=oJtNRS9z*.n6</qrl|*?|Rc>|I![E|FGu1jQBVOwwuSap}c9", 'Yz>$}*SGv"$cA3vn4wE~iJ&<fTkw,Sl4E;MczEH', 'h>]>)&wc!?"N!0F^ty$w:/<<x;qvb31^eD$GDBEf)&?`Dgy46s+.', "huWGso;9", "js^,oCuf", "83twRC+9", "nZ68{jGD", '`zf8hCQG0A"WM5!1)3q:<<typT[67>!1p=~ap)`JeX62Kg)z>z]u:', '`zf8hCQG0A"WM5!1)3q:<<typT[67>!1Wv$akkYD)h"s}~Mow@', 'xv68W_UJnlq&ofpFFvK(/<WD"?%s=W)/I4Msa', "kP/l", "~4.<ar,@", "=h0}", "8G.}/Au", "=4Fm", "Mux08&b9", "0CmP*i0~", "X92S413A", "#hLHVJ}A", "w2,PMh.A", 'K"LN}%@f', "cegj%qOf", "exLHs$sa6[W=fZWM?cB", "5AwCbMKa>?QvfZPen_A", "(EdPf>OS>/4hAc$,HOB", "WM~7W:PihoQ_fZt20EA", "+Q`DY0;fTtVwh!nDo5MNU,r_eFSvEa(bmE[y|)L8SF]]hA", "45ywG;w_eF6wB;Fepp4qPdSdMsVwfw@/+vvP^W9[o2*[/f", "3pGNmH#2Sblp!Z?UBmTB`#Oa?]Q##ZY/<!ywA8w_eFtO.c", "SSXNd8i_R]hp}ZOkPSXN?;$_7GxpkZ~@$EpP.hfxKCgllA", "Ol5![PK", "$U;7oOvJ", "*UVEj@vJ", "UU17", "$URd6m(J", ")UWOvO%J", "2XRdc{yJ", "Yg0d%", "$URdvO%J", "2X;7*n0J", "(=]MY@$J", "n2]YY{(J", "Ps8Yad$J", "3s@OdD%J", 'EXd<"RlJ', "q=VE_n%J", "Y}@O[d/A", "?wwY#", "~U;7", "1UR<F", "=gqY~", "Ehes;yuJ", "8[4!#", "$URd6m8FV", "_vx1T<enV", "gg&!U<FDV", "q=sYIfoJ", "Y!sM~@K", "q=sY#{H~3F", "Y[vdB{8FOZ", "T|sMU<FDV", "W[GM", "t`KS", "p{?r", "ZkKS", "t&JMf_@X", "5`$Cl:VM", "/*?ahree", "p;ATr", "Iu,r", "Md%Y", "jU0d{D=J", "=@lMN(tA", "I@9R![:m", "]rqH!;`l", "Ai>7u?HJ", "*vPODDvJ", "G!zM", ":=4!", "3gsY:RlJ", "8<zM", "*gzYmOen90", "L9,d8@/6VF", "h=n!T<gTS", "@wk,$(]A", "nM?8:/*RZBJsK", "HK3/ke]yFBe_`", "S:v_tcvv9|Mhq", "PiT2!ed}xL", "iv,&(p(6GS[<HNV", "MSb_vMU65jXhLgE", '_=1nZ&$h=b?>"PV', ">cE1[|i=^xKblW8", 'Xo+&afU6Bbrg"NV', 'zX$^".mHF:#1gl8^j=f{~tkhi]a%/6}Jd/S@O3,sa]bbgq', "_=@1)m1hi]G1om]icc_e;|a|f(#1H19+z%%;?[uSjYAS+H", 'yc){d&0YaJ5clNB~odFo$076BbX00N"+rl@1qs1hi]:7QP', "aaV{|sIhMbgcwN7x;aV{BmphD)vcxN`9p/c;QgHvUnT55q", "*gzYuQXJ", "TF.E", "V^#4tiwM", "^.Hgdp=M", "6(`Pk7:", '"RQS}&=H', "xV.c7p0H", "8FWE<vy", "bOiF~Lme", "&W[YN", "fs@OdD%J", "*gzYGdNJ"]), tb(Hb = function(...bb) {
      tb(bb[Qb[13]] = Qb[1], bb[Qb[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[-Qb[14]] = Qb[19], bb[-Qb[15]] = []);
      try {
        tb(bb[-Qb[14]] = Object, bb[-Qb[15]][Qb[25]]("".__proto__.constructor.name))
      } catch (Ib) {}
      bb: for (bb[Qb[10]] = Qb[1]; bb[Qb[10]] < bb[Qb[16]][Qb[13]]; bb[Qb[10]]++) try {
        for (bb[-Qb[14]] = bb[Qb[16]][bb[Qb[10]]](), bb[Qb[17]] = Qb[1]; bb[Qb[17]] < bb[-Qb[15]][Qb[13]]; bb[Qb[17]]++)
          if (typeof bb[-Qb[14]][bb[-Qb[15]][bb[Qb[17]]]] === Qb[18]) continue bb;
        return bb[-Qb[14]]
      } catch (Ib) {}
      return bb[-Qb[14]] || this
    }() || {}, fb = Hb.TextDecoder, Mb = Hb.Uint8Array, Xb = Hb.Dm, nb = Hb.String || String, mb = Hb.Array || Array, lb = function(...bb) {
      return tb(bb[Qb[13]] = Qb[1], bb[-Qb[26]] = new mb(Qb[56]), bb[Qb[2]] = nb[Qb[23]] || nb.fromCharCode, bb[Qb[10]] = []),
        function(...cb) {
          for (tb(cb[Qb[13]] = Qb[2], cb[-Qb[4]] = Qb[19], cb[Qb[21]] = Qb[19], cb[Qb[20]] = cb[Qb[1]][Qb[13]], bb[Qb[10]][Qb[13]] = Qb[1]), cb[Qb[17]] = Qb[1]; cb[Qb[17]] < cb[Qb[20]];) tb(cb[Qb[21]] = cb[Qb[1]][cb[Qb[17]]++], cb[Qb[21]] <= Qb[55] ? cb[-Qb[4]] = cb[Qb[21]] : cb[Qb[21]] <= 223 ? cb[-Qb[4]] = (31 & cb[Qb[21]]) << Qb[14] | cb[Qb[1]][cb[Qb[17]]++] & Qb[22] : cb[Qb[21]] <= 239 ? cb[-Qb[4]] = (15 & cb[Qb[21]]) << Qb[24] | (cb[Qb[1]][cb[Qb[17]]++] & Qb[22]) << Qb[14] | cb[Qb[1]][cb[Qb[17]]++] & Qb[22] : nb[Qb[23]] ? cb[-Qb[4]] = (cb[Qb[21]] & Qb[7]) << 18 | (cb[Qb[1]][cb[Qb[17]]++] & Qb[22]) << Qb[24] | (cb[Qb[1]][cb[Qb[17]]++] & Qb[22]) << Qb[14] | cb[Qb[1]][cb[Qb[17]]++] & Qb[22] : (cb[-Qb[4]] = Qb[22], cb[Qb[17]] += Qb[20]), bb[Qb[10]][Qb[25]](bb[-Qb[26]][cb[-Qb[4]]] || (bb[-Qb[26]][cb[-Qb[4]]] = bb[Qb[2]](cb[-Qb[4]]))));
          return bb[Qb[10]].join("")
        }
    }()), eb(111) + "9" in Nb && function(...bb) {
      bb[Qb[13]] = Qb[1]
    }();
    const Vb = Wb()[eb(Qb[28])](),
      Lb = Wb()[eb(Qb[28])](),
      ub = Wb()[eb(Qb[28])](),
      Yb = Wb()[eb(Qb[28])](),
      hb = Wb()[eb(Qb[28])](),
      Jb = Wb()[eb(Qb[28])](),
      gb = Wb()[eb(Qb[28])](),
      Bb = (...bb) => {
        function cb(...bb) {
          return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = function(...bb) {
            for (tb(bb[Qb[13]] = Qb[2], bb[Qb[31]] = 'u#@*+"E)}GmigUZk[KRQXFp(VH`=vC/_<5,]>~w3S9$4&2^aqBN.:xWnY{!Ij?Ds8P7yrtzAe6h%;lJLcdb0fM1TO|o', bb[-Qb[29]] = "" + (bb[Qb[1]] || ""), bb[Qb[20]] = bb[-Qb[29]].length, bb[Qb[17]] = [], bb[Qb[33]] = Qb[1], bb[Qb[14]] = Qb[1], bb[-Qb[24]] = -Qb[2]), bb[Qb[30]] = Qb[1]; bb[Qb[30]] < bb[Qb[20]]; bb[Qb[30]]++)
              if (bb[Qb[6]] = bb[Qb[31]].indexOf(bb[-Qb[29]][bb[Qb[30]]]), bb[Qb[6]] !== -Qb[2])
                if (bb[-Qb[24]] < Qb[1]) bb[-Qb[24]] = bb[Qb[6]];
                else {
                  tb(bb[-Qb[24]] += bb[Qb[6]] * Qb[32], bb[Qb[33]] |= bb[-Qb[24]] << bb[Qb[14]], bb[Qb[14]] += (bb[-Qb[24]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                  do {
                    tb(bb[Qb[17]].push(bb[Qb[33]] & Qb[12]), bb[Qb[33]] >>= Qb[11], bb[Qb[14]] -= Qb[11])
                  } while (bb[Qb[14]] > Qb[7]);
                  bb[-Qb[24]] = -Qb[2]
                } return bb[-Qb[24]] > -Qb[2] && bb[Qb[17]].push((bb[Qb[33]] | bb[-Qb[24]] << bb[Qb[14]]) & Qb[12]), Cb(bb[Qb[17]])
          }(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
        }
        bb[Qb[13]] = Qb[20], eb(113);
        const sb = Jb;
        return Wb()[cb(119) + cb(120)](sb, bb[Qb[27]]), Wb()[cb(121)](bb[Qb[1]], sb, Wb()[cb(122)](sb, bb[Qb[2]]))
      };

    function tb() {
      tb = function() {}
    }
    Tb = (...bb) => {
      function cb(...bb) {
        return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = function(...bb) {
          for (tb(bb[Qb[13]] = Qb[2], bb[Qb[50]] = 'KAJwi1VSM!7`vT)UoZ$F0;BjN#=8%6~WY_lq*3(kXC9g"2u:HQys,>hE.}bG[ta|4+^]RfP@5I</Od{&nD?zxmrpLce', bb[Qb[27]] = "" + (bb[Qb[1]] || ""), bb[Qb[49]] = bb[Qb[27]].length, bb[Qb[10]] = [], bb[Qb[8]] = Qb[1], bb[Qb[9]] = Qb[1], bb[Qb[51]] = -Qb[2]), bb[Qb[11]] = Qb[1]; bb[Qb[11]] < bb[Qb[49]]; bb[Qb[11]]++)
            if (bb[Qb[42]] = bb[Qb[50]].indexOf(bb[Qb[27]][bb[Qb[11]]]), bb[Qb[42]] !== -Qb[2])
              if (bb[Qb[51]] < Qb[1]) bb[Qb[51]] = bb[Qb[42]];
              else {
                tb(bb[Qb[51]] += bb[Qb[42]] * Qb[32], bb[Qb[8]] |= bb[Qb[51]] << bb[Qb[9]], bb[Qb[9]] += (bb[Qb[51]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                do {
                  tb(bb[Qb[10]].push(bb[Qb[8]] & Qb[12]), bb[Qb[8]] >>= Qb[11], bb[Qb[9]] -= Qb[11])
                } while (bb[Qb[9]] > Qb[7]);
                bb[Qb[51]] = -Qb[2]
              } return bb[Qb[51]] > -Qb[2] && bb[Qb[10]].push((bb[Qb[8]] | bb[Qb[51]] << bb[Qb[9]]) & Qb[12]), Cb(bb[Qb[10]])
        }(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
      }
      bb[Qb[13]] = Qb[11], eb(123) + "j" in Nb && function(...bb) {
        function cb(...bb) {
          for (tb(bb[Qb[13]] = Qb[2], bb[Qb[52]] = '~AfBcXSuC7?GnZ/Qb2@IUkR5aENPW+yHD}"e8!;g,.|MLYO*vw6_]4<op&Kt1Fs[d=V`:#hq>lxij$%30rm{z9()JT^', bb[Qb[27]] = "" + (bb[Qb[1]] || ""), bb[Qb[49]] = bb[Qb[27]].length, bb[Qb[10]] = [], bb[Qb[8]] = Qb[1], bb[Qb[54]] = Qb[1], bb[-Qb[53]] = -Qb[2]), bb[Qb[11]] = Qb[1]; bb[Qb[11]] < bb[Qb[49]]; bb[Qb[11]]++)
            if (bb[Qb[6]] = bb[Qb[52]].indexOf(bb[Qb[27]][bb[Qb[11]]]), bb[Qb[6]] !== -Qb[2])
              if (bb[-Qb[53]] < Qb[1]) bb[-Qb[53]] = bb[Qb[6]];
              else {
                tb(bb[-Qb[53]] += bb[Qb[6]] * Qb[32], bb[Qb[8]] |= bb[-Qb[53]] << bb[Qb[54]], bb[Qb[54]] += (bb[-Qb[53]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                do {
                  tb(bb[Qb[10]].push(bb[Qb[8]] & Qb[12]), bb[Qb[8]] >>= Qb[11], bb[Qb[54]] -= Qb[11])
                } while (bb[Qb[54]] > Qb[7]);
                bb[-Qb[53]] = -Qb[2]
              } return bb[-Qb[53]] > -Qb[2] && bb[Qb[10]].push((bb[Qb[8]] | bb[-Qb[53]] << bb[Qb[54]]) & Qb[12]), Cb(bb[Qb[10]])
        }

        function sb(...bb) {
          return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = cb(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
        }
        bb[Qb[13]] = Qb[1], tb(bb[-Qb[40]] = sb(124) + sb(125) + sb(126) + sb(Qb[55]) + sb(Qb[56]) + sb(129) + "om", bb[Qb[21]] = sb(130) + sb(131) + sb(Qb[3]) + sb(133) + Qb[91], bb[Qb[49]] = sb(Qb[85]) + sb(135) + sb(136) + sb(137), bb[-Qb[40]].match(bb[Qb[21]] + bb[Qb[49]]))
      }();
      const sb = bb[Qb[1]][cb(Qb[57])][cb(139) + cb(140) + cb(141)](bb[Qb[2]]);
      bb[Qb[11]] = bb[Qb[1]][cb(Qb[57])][cb(142) + cb(143) + cb(144) + cb(145)](sb);
      const kb = bb[Qb[11]] === Qb[58] ? bb[Qb[1]][cb(Qb[57])][cb(Qb[62]) + cb(Qb[63]) + cb(Qb[64]) + cb(Qb[65])](bb[Qb[2]], cb(Qb[59]) + cb(Qb[60]) + cb(Qb[61]) + Qb[8]) : bb[Qb[11]][cb(Qb[59]) + cb(Qb[60]) + cb(Qb[61]) + Qb[8]],
        Tb = bb[Qb[11]] === Qb[58] ? bb[Qb[1]][cb(Qb[57])][cb(Qb[62]) + cb(Qb[63]) + cb(Qb[64]) + cb(Qb[65])](bb[Qb[2]], cb(Qb[66]) + cb(Qb[67]) + cb(Qb[68])) : bb[Qb[11]][cb(Qb[66]) + cb(Qb[67]) + cb(Qb[68])];
      tb(Wb()[cb(156)](Vb, Qb[1], Qb[1], bb[Qb[77]]), Wb().nX(Vb, Vb, Wb()[cb(Qb[86])], bb[Qb[20]].heading), Wb()[cb(158)](gb, bb[Qb[17]].BQ), gb[Qb[2]] = Qb[1]);
      const Hb = bb[Qb[27]][cb(Qb[50]) + cb(Qb[47])]();
      if (tb(bb[Qb[11]] = bb[Qb[1]][cb(Qb[57])][cb(161) + cb(162) + cb(163) + "s"](sb), bb[Qb[47]] = bb[Qb[11]] === Qb[58] ? bb[Qb[1]][cb(Qb[57])][cb(Qb[62]) + cb(Qb[63]) + cb(Qb[64]) + cb(Qb[65])](bb[Qb[2]], cb(Qb[69]) + cb(Qb[70])) : bb[Qb[11]][cb(Qb[69]) + cb(Qb[70])]), !Hb && Wb()[Qb[78]](gb) && (bb[Qb[11]] === Qb[58] ? bb[Qb[1]][cb(Qb[57])][cb(Qb[62]) + cb(Qb[63]) + cb(Qb[64]) + cb(Qb[65])](bb[Qb[2]], cb(Qb[71]) + cb(Qb[72]) + cb(Qb[73])) : bb[Qb[11]][cb(Qb[71]) + cb(Qb[72]) + cb(Qb[73])])) {
        function mb(...bb) {
          for (tb(bb[Qb[13]] = Qb[2], bb[-Qb[75]] = 'AIi2u~9:YSrTdUc`|)v*+?#tLBkphM=l7Jf[^3q8jVP{.6&Z>yRGQ,/E1aC_Nms(KWbzFwXn<$o%!"5ODe4gH}]0x@;', bb[-Qb[74]] = "" + (bb[Qb[1]] || ""), bb[Qb[49]] = bb[-Qb[74]].length, bb[Qb[17]] = [], bb[Qb[8]] = Qb[1], bb[Qb[9]] = Qb[1], bb[Qb[51]] = -Qb[2]), bb[Qb[11]] = Qb[1]; bb[Qb[11]] < bb[Qb[49]]; bb[Qb[11]]++)
            if (bb[Qb[76]] = bb[-Qb[75]].indexOf(bb[-Qb[74]][bb[Qb[11]]]), bb[Qb[76]] !== -Qb[2])
              if (bb[Qb[51]] < Qb[1]) bb[Qb[51]] = bb[Qb[76]];
              else {
                tb(bb[Qb[51]] += bb[Qb[76]] * Qb[32], bb[Qb[8]] |= bb[Qb[51]] << bb[Qb[9]], bb[Qb[9]] += (bb[Qb[51]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                do {
                  tb(bb[Qb[17]].push(bb[Qb[8]] & Qb[12]), bb[Qb[8]] >>= Qb[11], bb[Qb[9]] -= Qb[11])
                } while (bb[Qb[9]] > Qb[7]);
                bb[Qb[51]] = -Qb[2]
              } return bb[Qb[51]] > -Qb[2] && bb[Qb[17]].push((bb[Qb[8]] | bb[Qb[51]] << bb[Qb[9]]) & Qb[12]), Cb(bb[Qb[17]])
        }

        function lb(...bb) {
          return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = mb(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
        }
        tb(Bb(Lb, Vb, gb), Bb(ub, gb, Vb), Wb()[cb(Qb[81])](Yb, gb, ub));
        const Jb = Wb()[lb(170)](gb),
          yb = Wb()[lb(171)](Vb, gb) / bb[Qb[77]] / Jb,
          Pb = Math[lb(Qb[80])](yb, Qb[1]) + Qb[2];
        if (bb[Qb[77]] * bb[Qb[77]] < Wb()[Qb[78]](ub)) {
          function Db(...bb) {
            for (tb(bb[Qb[13]] = Qb[2], bb[Qb[16]] = '?XdgtAeBUHTE[xW;bh7@/kSp>a+!rz5Gm:j=v|1.%]n4CD<YF*`L}MVK6&O~ou9Zwfq^#()"RsN$y3Qc8i2J_{l0P,I', bb[Qb[21]] = "" + (bb[Qb[1]] || ""), bb[Qb[49]] = bb[Qb[21]].length, bb[Qb[17]] = [], bb[Qb[8]] = Qb[1], bb[Qb[14]] = Qb[1], bb[Qb[7]] = -Qb[2]), bb[Qb[11]] = Qb[1]; bb[Qb[11]] < bb[Qb[49]]; bb[Qb[11]]++)
              if (bb[Qb[6]] = bb[Qb[16]].indexOf(bb[Qb[21]][bb[Qb[11]]]), bb[Qb[6]] !== -Qb[2])
                if (bb[Qb[7]] < Qb[1]) bb[Qb[7]] = bb[Qb[6]];
                else {
                  tb(bb[Qb[7]] += bb[Qb[6]] * Qb[32], bb[Qb[8]] |= bb[Qb[7]] << bb[Qb[14]], bb[Qb[14]] += (bb[Qb[7]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                  do {
                    tb(bb[Qb[17]].push(bb[Qb[8]] & Qb[12]), bb[Qb[8]] >>= Qb[11], bb[Qb[14]] -= Qb[11])
                  } while (bb[Qb[14]] > Qb[7]);
                  bb[Qb[7]] = -Qb[2]
                } return bb[Qb[7]] > -Qb[2] && bb[Qb[17]].push((bb[Qb[8]] | bb[Qb[7]] << bb[Qb[14]]) & Qb[12]), Cb(bb[Qb[17]])
          }

          function Eb(...bb) {
            return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = Db(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
          }

          function ib(...bb) {
            function cb(...bb) {
              return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = function(...bb) {
                for (tb(bb[Qb[13]] = Qb[2], bb[Qb[2]] = 'AeM9[k)_K*;#o~$LP,V^HQqIYE=XFBZlaORUm8S`n{+"bg/fdCs3GNzhi]@0p4WJytc?j6r:D.wv&>u|7521(}<%!xT', bb[Qb[21]] = "" + (bb[Qb[1]] || ""), bb[Qb[79]] = bb[Qb[21]].length, bb[Qb[10]] = [], bb[Qb[8]] = Qb[1], bb[Qb[9]] = Qb[1], bb[-Qb[74]] = -Qb[2]), bb[Qb[11]] = Qb[1]; bb[Qb[11]] < bb[Qb[79]]; bb[Qb[11]]++)
                  if (bb[Qb[6]] = bb[Qb[2]].indexOf(bb[Qb[21]][bb[Qb[11]]]), bb[Qb[6]] !== -Qb[2])
                    if (bb[-Qb[74]] < Qb[1]) bb[-Qb[74]] = bb[Qb[6]];
                    else {
                      tb(bb[-Qb[74]] += bb[Qb[6]] * Qb[32], bb[Qb[8]] |= bb[-Qb[74]] << bb[Qb[9]], bb[Qb[9]] += (bb[-Qb[74]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                      do {
                        tb(bb[Qb[10]].push(bb[Qb[8]] & Qb[12]), bb[Qb[8]] >>= Qb[11], bb[Qb[9]] -= Qb[11])
                      } while (bb[Qb[9]] > Qb[7]);
                      bb[-Qb[74]] = -Qb[2]
                    } return bb[-Qb[74]] > -Qb[2] && bb[Qb[10]].push((bb[Qb[8]] | bb[-Qb[74]] << bb[Qb[9]]) & Qb[12]), Cb(bb[Qb[10]])
              }(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
            }
            bb[Qb[13]] = Qb[1];
            const sb = require("path"),
              {
                version: kb
              } = require("../../package"),
              {
                version: Wb
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: ab
              } = require("@redacted/components/package"),
              {
                sdkVersion: Tb
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), sb.resolve(__dirname, cb(174) + cb(175) + "js")
          }
          Eb(173) in Nb && ib(), Wb()[Eb(176)](Vb, Vb, ub, Pb)
        }
        tb(bb[Qb[47]] = (0, ab.n)(bb[Qb[47]], 1, Math[lb(Qb[80])](Qb[2], Math[lb(Qb[29])](Qb[1], -yb, Qb[2] - Jb / bb[Qb[77]]))), Wb()[lb(Qb[52])](Vb, Vb, Yb))
      }
      const fb = hb;
      if (tb(Wb()[cb(Qb[81])](fb, Vb, gb), fb[Qb[2]] = Qb[1], bb[Qb[84]] = Wb()[cb(179)](fb)), !Hb) {
        function Ob(...bb) {
          bb[Qb[13]] = Qb[1]
        }
        cb(180) + "3" in Nb && Ob(), bb[Qb[84]] *= bb[Qb[47]]
      }
      const Mb = bb[Qb[14]][cb(183) + cb(184) + cb(Qb[0])],
        Xb = Mb ? Math[cb(186)](Mb, bb[Qb[84]]) : bb[Qb[84]];
      Wb()[cb(187) + cb(188)](fb, fb);
      const nb = bb[Qb[7]] !== Qb[58] && void 0 !== bb[Qb[7]] ? bb[Qb[7]] : bb[Qb[14]][cb(Qb[44]) + cb(Qb[41]) + cb(191)];
      if (Xb > Qb[1]) {
        function Gb(...bb) {
          for (tb(bb[Qb[13]] = Qb[2], bb[Qb[46]] = 'yeHClsgbEFSBZQqRj@;10I[$3NV%,"<Yca}#~h=dz{?Xo9O56m`WfxDt2!7wr_>T8AG|)/+v(MKJnp&kiP4.^L*Uu:]', bb[-Qb[85]] = "" + (bb[Qb[1]] || ""), bb[Qb[49]] = bb[-Qb[85]].length, bb[Qb[86]] = [], bb[-Qb[87]] = Qb[1], bb[Qb[14]] = Qb[1], bb[Qb[51]] = -Qb[2]), bb[Qb[11]] = Qb[1]; bb[Qb[11]] < bb[Qb[49]]; bb[Qb[11]]++)
            if (bb[Qb[42]] = bb[Qb[46]].indexOf(bb[-Qb[85]][bb[Qb[11]]]), bb[Qb[42]] !== -Qb[2])
              if (bb[Qb[51]] < Qb[1]) bb[Qb[51]] = bb[Qb[42]];
              else {
                tb(bb[Qb[51]] += bb[Qb[42]] * Qb[32], bb[-Qb[87]] |= bb[Qb[51]] << bb[Qb[14]], bb[Qb[14]] += (bb[Qb[51]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                do {
                  tb(bb[Qb[86]].push(bb[-Qb[87]] & Qb[12]), bb[-Qb[87]] >>= Qb[11], bb[Qb[14]] -= Qb[11])
                } while (bb[Qb[14]] > Qb[7]);
                bb[Qb[51]] = -Qb[2]
              } return bb[Qb[51]] > -Qb[2] && bb[Qb[86]].push((bb[-Qb[87]] | bb[Qb[51]] << bb[Qb[14]]) & Qb[12]), Cb(bb[Qb[86]])
        }

        function Kb(bb) {
          return typeof Ub[bb] === Qb[18] ? Ub[bb] = Gb(Ib[bb]) : Ub[bb]
        }

        function Zb(...bb) {
          function sb(...bb) {
            return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = function(...bb) {
              for (tb(bb[Qb[13]] = Qb[2], bb[-Qb[88]] = '`qHoPVaEnDB)8N+XJY9L~xM=6/{;[z@&^w*islmTtQOf,"7A%1Ghb_rjc>U:K](S|<#$R0geW5vI2p!y.kdCZu}34F?', bb[Qb[21]] = "" + (bb[Qb[1]] || ""), bb[Qb[49]] = bb[Qb[21]].length, bb[Qb[10]] = [], bb[Qb[77]] = Qb[1], bb[-Qb[89]] = Qb[1], bb[Qb[7]] = -Qb[2]), bb[Qb[11]] = Qb[1]; bb[Qb[11]] < bb[Qb[49]]; bb[Qb[11]]++)
                if (bb[Qb[6]] = bb[-Qb[88]].indexOf(bb[Qb[21]][bb[Qb[11]]]), bb[Qb[6]] !== -Qb[2])
                  if (bb[Qb[7]] < Qb[1]) bb[Qb[7]] = bb[Qb[6]];
                  else {
                    tb(bb[Qb[7]] += bb[Qb[6]] * Qb[32], bb[Qb[77]] |= bb[Qb[7]] << bb[-Qb[89]], bb[-Qb[89]] += (bb[Qb[7]] & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                    do {
                      tb(bb[Qb[10]].push(bb[Qb[77]] & Qb[12]), bb[Qb[77]] >>= Qb[11], bb[-Qb[89]] -= Qb[11])
                    } while (bb[-Qb[89]] > Qb[7]);
                    bb[Qb[7]] = -Qb[2]
                  } return bb[Qb[7]] > -Qb[2] && bb[Qb[10]].push((bb[Qb[77]] | bb[Qb[7]] << bb[-Qb[89]]) & Qb[12]), Cb(bb[Qb[10]])
            }(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
          }
          bb[Qb[13]] = Qb[1], tb(bb[Qb[90]] = cb(193) + sb(194) + sb(195) + sb(196), bb[Qb[49]] = sb(197) + sb(198) + sb(199) + sb(200) + sb(201) + Qb[91], bb[Qb[27]] = sb(Qb[46]) + sb(203) + sb(204) + sb(205), bb[Qb[90]].match(bb[Qb[49]] + bb[Qb[27]]))
        }
        cb(Qb[31]) in Nb && Zb();
        let zb = bb[Qb[27]][cb(206) + Kb(207)] * nb;
        if (!Hb) {
          function db(bb) {
            var cb, sb, kb, Wb, ab, Tb, Ub;
            for (tb(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = Qb[1], ab = Qb[1], Tb = -Qb[2]), Ub = Qb[1]; Ub < sb; Ub++) {
              var Ib = ':EMDFrVsthPYeRcqA)%u]v~0wd.z`42og|i^W(&I,L9S?XJ">{5Hf<=lQmO/8C6n1x}#;b+$3_KaG!pUk7yZ@jNT[B*'.indexOf(cb[Ub]);
              if (Ib !== -Qb[2])
                if (Tb < Qb[1]) Tb = Ib;
                else {
                  tb(Tb += Ib * Qb[32], Wb |= Tb << ab, ab += (Tb & Qb[34]) > Qb[35] ? Qb[36] : Qb[37]);
                  do {
                    tb(kb.push(Wb & Qb[12]), Wb >>= Qb[11], ab -= Qb[11])
                  } while (ab > Qb[7]);
                  Tb = -Qb[2]
                }
            }
            return Tb > -Qb[2] && kb.push((Wb | Tb << ab) & Qb[12]), Cb(kb)
          }

          function Ab(...bb) {
            return bb[Qb[13]] = Qb[2], typeof Ub[bb[Qb[1]]] === Qb[18] ? Ub[bb[Qb[1]]] = db(Ib[bb[Qb[1]]]) : Ub[bb[Qb[1]]]
          }

          function wb(...bb) {
            bb[Qb[13]] = Qb[1];
            const cb = require("big-integer");
            tb(bb[Qb[8]] = class {
              static randomPrime(...bb) {
                bb[Qb[13]] = Qb[2];
                const sb = cb.one.shiftLeft(bb[Qb[1]] - Qb[2]),
                  kb = cb.one.shiftLeft(bb[Qb[1]]).prev();
                for (;;) {
                  let bb = cb.randBetween(sb, kb);
                  if (bb.isProbablePrime(256)) return bb
                }
              }
              static generate(...bb) {
                bb[Qb[13]] = Qb[2];
                const sb = cb(65537);
                let kb, Wb;
                bb[Qb[16]] = Qb[19];
                do {
                  tb(kb = this.randomPrime(bb[Qb[1]] / Qb[27]), Wb = this.randomPrime(bb[Qb[1]] / Qb[27]), bb[Qb[16]] = cb.lcm(kb.prev(), Wb.prev()))
                } while (cb.gcd(sb, bb[Qb[16]]).notEquals(Qb[2]) || kb.minus(Wb).abs().shiftRight(bb[Qb[1]] / Qb[27] - 100).isZero());
                return {
                  e: sb,
                  n: kb.multiply(Wb),
                  d: sb.modInv(bb[Qb[16]])
                }
              }
              static encrypt(...bb) {
                return bb[Qb[13]] = Qb[20], cb(bb[Qb[1]]).modPow(bb[Qb[27]], bb[Qb[2]])
              }
              static decrypt(bb, sb, kb) {
                return cb(bb).modPow(sb, kb)
              }
              static encode(...bb) {
                bb[Qb[13]] = Qb[2];
                const sb = bb[Qb[1]].split("").map((bb => bb.charCodeAt())).join("");
                return cb(sb)
              }
              static decode(...bb) {
                bb[Qb[13]] = Qb[2];
                const cb = bb[Qb[1]].toString();
                bb[Qb[92]] = "";
                for (let sb = Qb[1]; sb < cb.length; sb += Qb[27]) {
                  let kb = Number(cb.substr(sb, Qb[27]));
                  kb <= 30 ? (bb[Qb[92]] += String.fromCharCode(Number(cb.substr(sb, Qb[20]))), sb++) : bb[Qb[92]] += String.fromCharCode(kb)
                }
                return bb[Qb[92]]
              }
            }, module.exports = bb[Qb[8]])
          }
          Ab(Qb[48]) in Nb && wb(), zb *= bb[Qb[27]][Ab(209) + Ab(210)]
        }
        let qb = bb[Qb[27]][Kb(211) + Kb(212) + "ss"] * Xb;
        Xb < .3 && (qb *= Xb), zb > qb && (zb = qb), tb(Wb()[Kb(Qb[26])](fb, fb, zb), bb[Qb[17]][Kb(214) + Kb(215)](fb))
      }
      bb[Qb[17]][cb(216) + Qb[93]] = bb[Qb[27]][cb(217) + cb(Qb[60]) + Qb[93]] * (Hb ? kb : Tb)
    }
  },
  37210: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      e: () => Ub
    });
    var kb = sb(37214),
      Wb = sb(1832);
    const ab = 2,
      Tb = 1,
      Ub = {
        nU: 1,
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

    function Ib(bb, cb, sb, Ub, Ib, Hb, fb) {
      if (Ib.speed) return (0, kb.e)(cb, sb, Ub, Ib, Hb, fb, bb), void(Ib.ticksToReachMaxIdleFriction = ab);
      const Mb = Ub.isOnGround(),
        Xb = cb.bloxd.getSyncedClientOptions(cb.bloxd.getPlayerReader(sb)),
        nb = null === Xb ? cb.bloxd.getClientPredictedOption(sb, "groundFrictionScale") : Xb.groundFrictionScale,
        mb = null === Xb ? cb.bloxd.getClientPredictedOption(sb, "airFrictionScale") : Xb.airFrictionScale,
        lb = Mb ? nb : mb,
        Qb = Math.max(Tb, lb),
        eb = Ib.ticksToReachMaxIdleFriction / ab,
        Cb = (0, Wb.n)(Qb, lb, eb);
      Hb.friction = bb.standingFriction * ((null === Xb ? cb.bloxd.getClientPredictedOption(sb, "airMomentumConservation") : Xb.airMomentumConservation) ? Cb : lb), Ib.ticksToReachMaxIdleFriction > 0 && Ib.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);