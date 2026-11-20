export const id = 220;
export const ids = [220];
export const modules = {
  38455: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => aq
    });
    var Yq = gq(190),
      lq = gq(37656);
    const Oq = 1.2,
      mq = {
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
        Am: .5,
        wEq: !1
      },
      xq = {
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
        Am: .5,
        wEq: !1
      },
      Aq = {
        physicsBodyDimensions: {
          width: Yq.c.ZH,
          height: Yq.c.UH
        },
        hitBoxDimensions: {
          width: Yq.c.ZH + .4,
          height: Yq.c.UH + .6
        },
        eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
        rideHeight: Yq.c.UH - .3,
        Am: .5,
        wEq: !1
      },
      cq = {
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
        Am: .5,
        wEq: !1
      },
      uq = {
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
        Am: .5,
        wEq: !1
      },
      Bq = {
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
        Am: .5,
        wEq: !1
      },
      Wq = {
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
        Am: .5,
        wEq: !1
      },
      Nq = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Yq.c.ZH,
            height: Yq.c.UH
          },
          hitBoxDimensions: {
            width: Yq.c.ZH + .4,
            height: Yq.c.UH + .6
          },
          eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
          rideHeight: Yq.c.UH - .1,
          Am: lq.g.Am,
          wEq: !0
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
        },
        Camel: {
          modelScale: Oq,
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
        },
        "Cave Golem": mq,
        "Draugr Zombie": {
          ...Aq,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Aq,
        "Frost Golem": mq,
        "Frost Zombie": {
          ...Aq,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Aq,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Yq.c.ZH,
            height: Yq.c.UH
          },
          hitBoxDimensions: {
            width: Yq.c.ZH + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Am: .5,
          wEq: !1
        },
        Wolf: cq,
        Bear: uq,
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
          Am: .5,
          wEq: !1
        },
        Stag: Bq,
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
          Am: .5,
          wEq: !1
        },
        Gorilla: Wq,
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
          Am: .5,
          wEq: !1
        },
        "Draugr Huntress": Aq,
        "Magma Golem": mq,
        "Spirit Golem": mq,
        "Spirit Wolf": cq,
        "Spirit Bear": uq,
        "Spirit Stag": Bq,
        "Spirit Gorilla": Wq,
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Yq.c.ZH,
            height: Yq.c.UH
          },
          hitBoxDimensions: {
            width: Yq.c.ZH + .4,
            height: Yq.c.UH + .6
          },
          eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
          rideHeight: Yq.c.UH - .1,
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Yq.c.ZH,
            height: Yq.c.UH
          },
          hitBoxDimensions: {
            width: Yq.c.ZH + .4,
            height: Yq.c.UH + .6
          },
          eyeHeight: Yq.c.UH * Yq.c.playerEyeToHeightRatio,
          rideHeight: Yq.c.UH - .1,
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
        },
        Zombie: {
          ...Aq,
          defaultPose: "zombie"
        },
        Skeleton: Aq,
        Mummy: {
          ...Aq,
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
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
          Am: .5,
          wEq: !1
        },
        "Iron Guardian": xq,
        "Gold Guardian": xq,
        "Diamond Guardian": xq,
        "Moonstone Guardian": xq,
        "Iron Goofy Golem": xq,
        "Gold Goofy Golem": xq,
        "Diamond Goofy Golem": xq,
        "Moonstone Goofy Golem": xq,
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
          Am: .5,
          wEq: !1
        }
      };

    function aq(qq) {
      return Nq[qq]
    }
  },
  37111: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
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
  37661: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq
    });
    var Yq = gq(317),
      lq = gq.n(Yq),
      Oq = gq(1870);
    let mq;
    var xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq;
    const dq = [229, 0, 1, "h", 3, 62, "i", 231, "e", 230, 203, 8, 255, "length", "c", "d", "a", "undefined", void 0, 131, 16, "b", 117, 63, 6, "fromCodePoint", 7, 12, "push", 246, 115, 106, 57, 52, 9, 91, 8191, 88, 13, 14, 4, 196, "g", "f", !1, 2, 34, 130, 116, 127, 128, 129, null, 134, 135, 136, 120, 121, 122, 123, 124, 125, 126, 142, 143, 132, 133, 144, 145, 146, 147, 27, 151, 5, 154, "pg", 249, 242, 180, 31, 1023, 65536, 10, 55296, 56320, 226, 15, 18, 37, 219, 66, 202, 110, 193, 189, 192, 207, 197, 224, 232, 204, 240, 96, 90, 174, 152, 54, 195, 86, 141, 47, 53, 210, 87, 118, 29, 56, 248, 50, 200, 19, 221, "k", 70, "on"];

    function jq(...qq) {
      return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
        for (bq(qq[dq[13]] = dq[2], qq[dq[5]] = 'XEHGhQieZbaRPDC5O)#S8.6:t*knl^>uL&JgB`do"=!xVAp(MFjm2WzU%yfqsc_NK@|T<r,Iw~1v079}?4/[$3]{+Y;', qq[-dq[0]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[-dq[0]].length, qq[-dq[10]] = [], qq[dq[8]] = dq[1], qq[-dq[9]] = dq[1], qq[dq[7]] = -dq[2]), qq[dq[3]] = dq[1]; qq[dq[3]] < qq[dq[4]]; qq[dq[3]]++)
          if (qq[dq[6]] = qq[dq[5]].indexOf(qq[-dq[0]][qq[dq[3]]]), qq[dq[6]] !== -dq[2])
            if (qq[dq[7]] < dq[1]) qq[dq[7]] = qq[dq[6]];
            else {
              bq(qq[dq[7]] += qq[dq[6]] * dq[35], qq[dq[8]] |= qq[dq[7]] << qq[-dq[9]], qq[-dq[9]] += (qq[dq[7]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
              do {
                bq(qq[-dq[10]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[-dq[9]] -= dq[11])
              } while (qq[-dq[9]] > dq[26]);
              qq[dq[7]] = -dq[2]
            } return qq[dq[7]] > -dq[2] && qq[-dq[10]].push((qq[dq[8]] | qq[dq[7]] << qq[-dq[9]]) & dq[12]), Hq(qq[-dq[10]])
      }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
    }

    function Hq(...qq) {
      return qq[dq[13]] = dq[2], typeof uq !== dq[17] && uq ? (new uq).decode(new Bq(qq[dq[1]])) : typeof Wq !== dq[17] && Wq ? Wq.from(qq[dq[1]]).toString("utf-8") : Vq(qq[dq[1]])
    }

    function oq() {}
    bq(xq = {}, Aq = ["ubHv{yYeQKpuiQ+gJ1S^dFIE", "dbrUb_Y}dKnthGd*Egm7b].E", 'tx,Iy,Q*55.`4wO"J:Ae=<apk8Sv(GEu&m903Iz2(sq', "Umm^eBiB;C;k85Zu{ML~Qrl#$by0VGs=zIOi9rs]!_`}X", "ux7Iz$|1xqDw$hrt;R}Fbr|t@yC/t(_>3,jn(ox(TS:0L(/l~i:&zJlH", 'o:9lWw/"sR4sJDC', '*<N~V%)=bCJ@Ew"u.1<7Djd>eD/E1ru:}l*>cW:4&b[snksg:<~Z?BX', "&iOb^(V2Gy+*)BJ)zIQe&FQS|zdC?5[J}@Zns,a#SbUg&w[=vX", "d@luUNi28b:MdDh*(_`h.3WgjNRMh[OJKzd~P", "8L:0L({E>5Sil[UJmyT1rwevgycl<qP", "Sz+z,4:gN5cq<[%!?@QaBzLBsCZv{HI#@_oF>3{=A_1,dF7ShFtb", ']J.1;3,ff_()!DUgHx&v51&SXPK~DBbSm"87^2U^7%I5R/_!Gs"FGJ]"G', "w@=zoF7^&zlJN/EtdMDu5y]tEPY4Pn6=8z{h", '&y"~h1LPVq1#6`$l%kt9S9cv/PvRCcQu/Mj^D', 'T`U~5yZZ7Ra`gkS"LM3I&zlB?Pd2?G=u7u[QeB*^ACF', "akjmEs81hzT,_dZkUAo0S_~=!@j.FOX#7qohHpF(Ob?%2G", "KlxwA`G=Ls@g%GG`gxNb42`49Z/#NCY=)PpUK}X", "SsyL32mD95UC+gl>DL0W{2(y@P77:C7dF@>ud%FerS", "``.1tIImEz{^wq_>mi?b[jevE5a>}kDoIX", "PF]FwM0J7Rt_4w{6Yq<QBq`DD|@7(/>BDI:b", "ruzlI46tu#/,Yr,dEsluarM>6Sn)DsYgZL4mY&EvWD@C`MOkikU24rX", "o@*nN7$pP@Qb@t.=eI_h>", '$@0W:IV"gsZitGed,bJnx/<1l_$6SCxd{MzU)yAD4yHn0Ge', '!IUiNJjKn)?RsG*l_uph!,DNSb;78I~SA"LzJF/"h', '&y%b>c/25|I,"G', '>^dlh]m=$bp~Y?ngGFzb?0|i>|tt+IL:?mb>w4}=b@kJC`&)gbJvq7pf"f|#E', '"GvQi}(S9R(0c4AoeFMbis/P_N17HkU"ZxwF7U92vCz0H/]=', "WmN0j`ImkCnUz`~*.P4icof<QS", '<zrl+(xyeD7E8nMnrljnCUMpKyd|64cB&M|Lcf[Ef)!2|*3"VPiexmW:"D', "3J`Ubys>P@Owp*GxJJO9fp8]K#a<(/Kt?%.uO4eE", "fI`ld(V?;CS`2Gxk6mQuP1:E", "cbLbM$geSbzgrthd?%UlkdINnqi8|DgucCK~)0=E", 'mmanZsI^Aq%?,Fa8TAZbO[/fR)Gf>`W"DychW7rmRC', "diubVg_1Xs$s%G", "(`X>^~K]?Pti^OPkt<T7<J`e=8CUT,qgYC7kKoCH", ">z~L*2[=?WZD&O!k<!=n!g6fR8Y^C`q=zmG", "gxwFk0.($KZwIfS=[lG7/9b*a8s2UdPSD5L>mF%pEPHb]*{^", "},4Lxc2>;@}T{kx*ZpZ&mfSDiKe(JcitlxAuF`c(i", "+@1Liw5S&#awz,J#gsNhOBgebaU2&O^!v<[ZWN!2R)`aoH", "F@$j7UX", "$C3e8[L2[b8`E", "&J]01rkHwDv7uk<dFz(b?_#BQa1Z>c*lYmXnLq22=@%?FwZu;C9u)", "T</Q<}0J/bw6RH", "[!Z>G_dPJb}FFw3lo_G", 'iz;7zfF3JP&_ed)"#s<^`gkBA.|,J`3ggM9b', "4l%F&3JHBbAelGAny8G", "mGt~H]|>?5#i6c,#H1=v3&]tUDZiRd@:^<@Z!vU^>..wNCS=%X", '~GDUX}K#My+PB(]J{myZq7Agw8}4b$$l"y8a7[i#_ZOG@t8n61:b', 'Jx9hm/A(EzurW`_!g1uFU743cWIFzD("DpMFX]X', 'e<X>(N/"}P"Md*DkJbobGpvE[zSvws+Ov8zlhpRS6faa%n]lI_jWWw:E', "TG50~sitaUGm+IG)HyZ&rJr:*ChvwGX`88TL8rX", "ViB^brf#@s7B]rWgihkm,1X,<K4%Sku)", 'n"Ob!?tBLN[RLI^^SpBus,PZ}#_2m,kl}8s19U.DNs0%V(a', '/idU8jref8F?,*?n]m=vvr|iBbTgWszlx"FnAgXZQ', 'Nzbi"g$p9qTL2Got&PplVgyE7C3^!DH)mA"i:rX', "P#6ll3>>!8B", "Uktbe4X", "A)<^|1*=|PI7yseda#`U{qSeO|^84h4kz)wi;y@E", '."~m#_.=Xy#}.Q:^c)52ug5WcWu@C4l>mG>u+2f"!R]s94s!I)`1Um~E', '>sq^|W!p1R4ZR/)8n:4iX]|f,f?BC4+lH5">D07m,KW|q/9kZIOb', '8yLF~_FvHs%CM5akhF"zA%R*wD', "/Gbi4BX", "g`|Zn[1tp%t", 'oMT7H]=(Fz(R@ss>;Cx^i]f]_%||^O#J9R"ipcaKl_puRkq=WG{hwU#tC5', ")s=>b}?iFs|.Ess>.:8a~M7e|bIl<[K!<uDUh1Hf9RDObBhtVIgaHpRSQzU", 'o<=nz$X?Aq"~xH{OZNQ0"NX', '_bl^moP#L5>rgHL:ls%F}j"p#P:G>Qt=', "+loladAegbeG6cjJ$!?F}IX#9Za>}deSQNXv.", "LbI0:jm=k)9#Rd%!Gy+Ft9D=ON;48ITu0)5bd%.De", "Mxru!z,2i", "@:mLOj^^cRtn8nngFIg^HWgD2bseKqg`yGMb7[Ygx84phG/l_<tzU7_tpR=", '7<Deu3DekqZwXs]lcM/L4AOfWDq?)wF"vCyz,BsH`z]BEO2nFu1ZrwB#O.`wE', "V<71ym]2R@qC:kotiNNb+2k?L#oG4?`ut@{~,4!>95I*{,g)E#]2&<21i", "XyHn(,9JHzW?X", "Mm1^TMPBmKZvI[N^dMg^+I2K(.EvIk>t}_27<wFS5.:UOG@u?X", ";A*L_}d2G", "WI#Lq,JB[S7B$5<dUy[Z}j3yqq)}!`HB>pk^OyBtjSg.Ln`>", "DIMzTM7NY@p0]FxoKz7h}AIDsq8rZG", ';_Q1#_5(1@&uOGy:`m<k{r+tO.ZO3M$"+m~Z4_/2a8{*<q>ttxx7ZsppcC', "5L:0^c%pYfIFgfd`T`LbG1%>cCh:ekD", ']8fmk3ipqC>_S/6"ay~L{IMK#P+yVq>)zy6bi4Xt.zI,6C"d}~`upFX', "=^&izo/tlq`.p`pkdxMF!c9J)N9NYhfg", 'fCv^CB[yBb|~vn*lpk"i', "EyHL:3@EJb`wH/ZS0%duirug@5lJ&hznDhH", "9iKz4Ak>t@)vBq5o2bIl0Md#FPwTb4u`#E", 'CFaw3I"pLbTCE', "o<IzV`VpqR)/vCot^1de!?{gV@l@:Ciu}X", '?,Va9U"H8b;7@4lB.yPu#', 'Lz~L1r{E|N3Nhnz=EN3kUmc(TP<Nkcn=.mOn01_t&s~pyBz"%@$u2oc:Q', "i^zlCMFN)b{sfDPkupRayN=yZ8", '65@iQWz"VW.uT/7ng:*mZ}3Dzfl2odEx_qH', '"zI2Ojtt>qJ}B(K!U_Lmir6H', "xm_l60Sgy@CUE", 'ru21#[_p#Nemz*!u*"(~Gpp"aCa`5/(ob<vZjvwt|Pd0M["krzN0#', 'o@9h^"bE', 'U@km|pl1y@<Z%5}"+mh7B3|>)z%2ej>!Js}zLIZB<yJ064tJwA<7P', 'pxMb?4VtrS"', "$mtzOBTECqQJ0G", "|MHv!,82*C*w>HAoGsXvcM>#Tzv%8qxof_,0%oFS<b~%?q{=dzXi_1}^f)ltE", 'LJ.UNod>u.6J4tM"DNsaVgHKKs8wEM}oqzi&EoM27Wl)8qUJQ1O&n', '}`FiY08pHy2rrts!pb{0g"L2VRCcG/ASSb.e8rCtgy7pWhNBJ5ti(cX', "b1?zX$gS`Sz*l[=o4GNFk0wPVZ20cM!d&MFw1j?PKsnU4?u:38Hwf7HB0qo", "n@e>]yh][y@Cho[=P<X98", "Kq]e@o]27Cpe8qOJI_xLF<pp~)IL~B0d4%v^dFmSNZhwAMBukx2^Hw{:h", "myIFmFrD#zW?0[X#XyZ91jk2Gsn@;F4oju]eU/3rR@V", "|~En+qKPtf*nB[b*O`amFN*eLb", "|mdu748H", "yQRfazoN", "</7t>sWL", "QD8_8R%L", "mUOE$(+o", "#uXvsH|N", "h0Lj", "2fXjFU<", "hu@7", ":>@6wYm*", "8<J&B.}", "9gu4V8Ly", "sg>+MxLy", "gg14", "9g/q6~0y", "|gh8L8ly", "mw/qXd?y", "Qnpql", "9g/qL8ly", "mwu4sYpy", '0DI"Qx9y', "YmIQQd0y", ".UAQRq9y", "kUx8qHly", "+wqe!/<y", "9g/qL8wKkS", "D%?Q+.jS^p", "GLX>HH`[kS", "aD>+GYly", "QWx8Bq:*", "f@@Q3", "Kgu4", "1g/eS", "DnaQK", "+;ZUu?%y", "AB`&3", "aDUQtcVy", 'Q&U"Kx}', "aDUQ3dsy", "mwIQX8n*", "+w)QFY;y", "KWx8Bq}", "SJiaQJmp", "aH9!", "h~]T", "=Woj", "c[]T", "LawsK>4p", "Fuz5`/NG", "U2|A(nxG", "~V5_uM=", ":_@<rAiDs", "VF0O#QCQE", "K2yaH3bMs", "1`#*)3,$@W{]HvOJ.`G4vi&", "[;(6x,tmH8ifsoDd~3YyFt*&>]Uv0c#", "S&7TXt`$qyj4p)@nx&%o)+~", "ZPjius43L`2RSmo[6&{>D4N(7z~)}|0", ':ZG8_w,Ov~UgA!eB;`#q1,T["nJ}Pst', "yPcoei=9h/{7oDIm&@c|o,:9iy/", "]9Za?2,", "39={+usN", ">T[1", "h~qjx", "ps(j", "%l2!", 'hB)"', "MgpqdHDy", "8/[xDdly", "*=54%fiy", "sL.8HHLy", ')&O"', "TD`&", "knUQT/<y", 'AeO"', "snOQ~8ZY^p", "N^7qAx:6>S", ";DY&benb(", ">PG=p8sK", "+}FT7MbK", "OoFQ", ".D[]FW<C", "[O_)`iZC", "c=p.9ya7w@HNRBZAP8),jjLn#b:zK_ZA#+e[#Pc%gJzWD`P=_=2M,", "KDGIZ|Qf=ie,d/PjU>%suu<9O:{~36Pj,qX[FFzNUZe)0@dnH2", 'qR8X}+p.7U^)Q":??Ra[Nd}Y6E@ZH}gNfi,Zb', "L):Y", "!x_){L]C", "Vuyq$2/", "Pm<yk$sK", "*AFT|e~K", '"|.XwqYg', "!4jLK,1c", "lj^$6[<m2U?@7~4(_*zkhhR{KonIPL4(KguFK_lf3WIdQO_jLj`,k", "+ayLl2b1&m@{QO;k3SYM``}_dA^jZI;k{PeR))Jc3l@Ti0QtG5", "Pzv1X.Q~D,q/V{_HHzx;=^XCOrA&5Xf=i$j&`", "0/_C", "aSYbsne!", "wovQnNH", 'j7io+8M"', "$vpG>", "cUx8qHly", "snOQ)qPy"]), bq(cq = function(...qq) {
      bq(qq[dq[13]] = dq[1], qq[dq[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], qq[dq[2]] = dq[18], qq[dq[14]] = []);
      try {
        bq(qq[dq[2]] = Object, qq[dq[14]][dq[28]]("".__proto__.constructor.name))
      } catch (Aq) {}
      qq: for (qq[dq[15]] = dq[1]; qq[dq[15]] < qq[dq[16]][dq[13]]; qq[dq[15]]++) try {
        for (qq[dq[2]] = qq[dq[16]][qq[dq[15]]](), qq[dq[8]] = dq[1]; qq[dq[8]] < qq[dq[14]][dq[13]]; qq[dq[8]]++)
          if (typeof qq[dq[2]][qq[dq[14]][qq[dq[8]]]] === dq[17]) continue qq;
        return qq[dq[2]]
      } catch (Aq) {}
      return qq[dq[2]] || this
    }() || {}, uq = cq.TextDecoder, Bq = cq.Uint8Array, Wq = cq.IN, Nq = cq.String || String, aq = cq.Array || Array, Vq = function(...qq) {
      return bq(qq[dq[13]] = dq[1], qq[dq[29]] = new aq(dq[50]), qq[dq[30]] = Nq[dq[25]] || Nq.fromCharCode, qq[dq[19]] = []),
        function(...Eq) {
          for (bq(Eq[dq[13]] = dq[2], Eq[-dq[22]] = dq[18], Eq[dq[21]] = dq[18], Eq[dq[4]] = Eq[dq[1]][dq[13]], qq[dq[19]][dq[13]] = dq[1]), Eq[dq[20]] = dq[1]; Eq[dq[20]] < Eq[dq[4]];) bq(Eq[dq[21]] = Eq[dq[1]][Eq[dq[20]]++], Eq[dq[21]] <= dq[49] ? Eq[-dq[22]] = Eq[dq[21]] : Eq[dq[21]] <= 223 ? Eq[-dq[22]] = (Eq[dq[21]] & dq[79]) << dq[24] | Eq[dq[1]][Eq[dq[20]]++] & dq[23] : Eq[dq[21]] <= 239 ? Eq[-dq[22]] = (Eq[dq[21]] & dq[86]) << dq[27] | (Eq[dq[1]][Eq[dq[20]]++] & dq[23]) << dq[24] | Eq[dq[1]][Eq[dq[20]]++] & dq[23] : Nq[dq[25]] ? Eq[-dq[22]] = (Eq[dq[21]] & dq[26]) << dq[87] | (Eq[dq[1]][Eq[dq[20]]++] & dq[23]) << dq[27] | (Eq[dq[1]][Eq[dq[20]]++] & dq[23]) << dq[24] | Eq[dq[1]][Eq[dq[20]]++] & dq[23] : (Eq[-dq[22]] = dq[23], Eq[dq[20]] += dq[4]), qq[dq[19]][dq[28]](qq[dq[29]][Eq[-dq[22]]] || (qq[dq[29]][Eq[-dq[22]]] = qq[dq[30]](Eq[-dq[22]]))));
          return qq[dq[19]].join("")
        }
    }());
    const Pq = lq()[jq(dq[31])](),
      Qq = lq()[jq(dq[31])](),
      yq = lq()[jq(dq[31])](),
      tq = lq()[jq(dq[31])](),
      rq = lq()[jq(dq[31])](),
      vq = lq()[jq(dq[31])](),
      hq = lq()[jq(dq[31])](),
      nq = (...qq) => {
        function Eq(...qq) {
          return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
            for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '<tNaAqiCjf7p~}w`_{>G.@9K1/Vhe$F?v!|b6#nJRl,uoy"sdgPXkz*I[QZOc5%x2rB&H(TUDW08=;4):+ELMm]^SY3', qq[-dq[32]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[-dq[32]].length, qq[dq[40]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[1], qq[dq[26]] = -dq[2]), qq[-dq[33]] = dq[1]; qq[-dq[33]] < qq[dq[14]]; qq[-dq[33]]++)
              if (qq[dq[34]] = qq[dq[2]].indexOf(qq[-dq[32]][qq[-dq[33]]]), qq[dq[34]] !== -dq[2])
                if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[34]];
                else {
                  bq(qq[dq[26]] += qq[dq[34]] * dq[35], qq[dq[8]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                  do {
                    bq(qq[dq[40]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
                  } while (qq[dq[24]] > dq[26]);
                  qq[dq[26]] = -dq[2]
                } return qq[dq[26]] > -dq[2] && qq[dq[40]].push((qq[dq[8]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
          }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
        }
        qq[dq[13]] = dq[4], Eq(107) + dq[21] in oq && function(...qq) {
          function Eq(...qq) {
            for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = 'fLoNAXth+Oy!u2cp]G)?`"H<7d#z3V&g|.Drq=:jZWFQKUk%1BREwl$s^I(PxYv;iSn~ae>@JbM_Cm}968540,[*/{T', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[8]] = dq[1], qq[dq[43]] = dq[1], qq[dq[42]] = -dq[2]), qq[dq[11]] = dq[1]; qq[dq[11]] < qq[dq[14]]; qq[dq[11]]++)
              if (qq[dq[41]] = qq[dq[16]].indexOf(qq[dq[21]][qq[dq[11]]]), qq[dq[41]] !== -dq[2])
                if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[41]];
                else {
                  bq(qq[dq[42]] += qq[dq[41]] * dq[35], qq[dq[8]] |= qq[dq[42]] << qq[dq[43]], qq[dq[43]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                  do {
                    bq(qq[dq[15]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[43]] -= dq[11])
                  } while (qq[dq[43]] > dq[26]);
                  qq[dq[42]] = -dq[2]
                } return qq[dq[42]] > -dq[2] && qq[dq[15]].push((qq[dq[8]] | qq[dq[42]] << qq[dq[43]]) & dq[12]), Hq(qq[dq[15]])
          }

          function gq(...qq) {
            return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Eq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
          }

          function Yq(qq) {
            const Eq = {};
            for (let gq of qq.replace(/[^w]/g, "").toLowerCase()) Eq[gq] = Eq[gq] + dq[2] || dq[2];
            return Eq
          }

          function lq(...qq) {
            qq[dq[13]] = dq[45];
            const Eq = buildCharMap(qq[dq[1]]),
              gq = buildCharMap(qq[dq[2]]);
            for (let Yq in Eq)
              if (Eq[Yq] !== gq[Yq]) return dq[44];
            return Object.keys(Eq).length === Object.keys(gq).length || dq[44]
          }

          function Oq(...qq) {
            qq[dq[13]] = dq[2];
            return mq(qq[dq[1]]) !== 1 / 0
          }

          function mq(...qq) {
            if (qq[dq[13]] = dq[2], !qq[dq[1]]) return -dq[2];
            const Eq = mq(qq[dq[1]].left),
              gq = mq(qq[dq[1]].right),
              Yq = Math.abs(Eq - gq);
            if (Eq === 1 / 0 || gq === 1 / 0 || Yq > dq[2]) return 1 / 0;
            return Math.max(Eq, gq) + dq[2]
          }
          qq[dq[13]] = dq[1], window[gq(108) + gq(109) + gq(dq[92]) + "_"] = {
            buildCharacterMap: Yq,
            isAnagrams: lq,
            isBalanced: Oq,
            getHeightBalanced: mq
          }
        }();
        const gq = vq;
        return lq()[Eq(111) + Eq(112)](gq, qq[dq[45]]), lq()[Eq(113)](qq[dq[1]], gq, lq()[Eq(114)](gq, qq[dq[2]]))
      };

    function bq() {
      bq = function() {}
    }
    mq = (...qq) => {
      function Eq(...qq) {
        return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
          for (bq(qq[dq[13]] = dq[2], qq[-dq[46]] = '}*y@=1>("&4{Lb|gVj9SpuzMP3DAl6KhQG<ask0vwF^n!m%Tio?U75;+EWr)B2R,`_#I/c.xJte:8qd]YHfO$~[CNXZ', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[dq[45]].length, qq[dq[47]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[1], qq[dq[42]] = -dq[2]), qq[dq[11]] = dq[1]; qq[dq[11]] < qq[dq[4]]; qq[dq[11]]++)
            if (qq[dq[34]] = qq[-dq[46]].indexOf(qq[dq[45]][qq[dq[11]]]), qq[dq[34]] !== -dq[2])
              if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[34]];
              else {
                bq(qq[dq[42]] += qq[dq[34]] * dq[35], qq[dq[8]] |= qq[dq[42]] << qq[dq[24]], qq[dq[24]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                do {
                  bq(qq[dq[47]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
                } while (qq[dq[24]] > dq[26]);
                qq[dq[42]] = -dq[2]
              } return qq[dq[42]] > -dq[2] && qq[dq[47]].push((qq[dq[8]] | qq[dq[42]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[47]])
        }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
      }
      qq[dq[13]] = dq[11], Eq(dq[30]) in oq && function(...qq) {
        qq[dq[13]] = dq[1]
      }();
      const gq = qq[dq[1]][Eq(dq[48])][Eq(dq[22]) + Eq(dq[114]) + Eq(119)](qq[dq[2]]);
      qq[dq[16]] = qq[dq[1]][Eq(dq[48])][Eq(dq[56]) + Eq(dq[57]) + Eq(dq[58]) + Eq(dq[59])](gq);
      const Yq = qq[dq[16]] === dq[52] ? qq[dq[1]][Eq(dq[48])][Eq(dq[60]) + Eq(dq[61]) + Eq(dq[62]) + Eq(dq[49])](qq[dq[2]], Eq(dq[50]) + Eq(dq[51]) + Eq(dq[47]) + dq[8]) : qq[dq[16]][Eq(dq[50]) + Eq(dq[51]) + Eq(dq[47]) + dq[8]],
        mq = qq[dq[16]] === dq[52] ? qq[dq[1]][Eq(dq[48])][Eq(dq[19]) + Eq(dq[65]) + Eq(dq[66])](qq[dq[2]], Eq(dq[53]) + Eq(dq[54]) + Eq(dq[55])) : qq[dq[16]][Eq(dq[53]) + Eq(dq[54]) + Eq(dq[55])];
      bq(lq()[Eq(137)](Pq, dq[1], dq[1], qq[dq[73]]), lq().tm(Pq, Pq, lq()[Eq(138)], qq[dq[4]].heading), lq()[Eq(139)](hq, qq[dq[40]].JV), hq[dq[2]] = dq[1]);
      const cq = qq[dq[45]][Eq(140) + Eq(dq[109])]();
      if (bq(qq[dq[16]] = qq[dq[1]][Eq(dq[48])][Eq(dq[56]) + Eq(dq[57]) + Eq(dq[58]) + Eq(dq[59])](gq), qq[dq[34]] = qq[dq[16]] === dq[52] ? qq[dq[1]][Eq(dq[48])][Eq(dq[60]) + Eq(dq[61]) + Eq(dq[62]) + Eq(dq[49])](qq[dq[2]], Eq(dq[63]) + Eq(dq[64])) : qq[dq[16]][Eq(dq[63]) + Eq(dq[64])]), !cq && lq()[dq[75]](hq) && (qq[dq[16]] === dq[52] ? qq[dq[1]][Eq(dq[48])][Eq(dq[19]) + Eq(dq[65]) + Eq(dq[66])](qq[dq[2]], Eq(dq[67]) + Eq(dq[68]) + Eq(dq[69]) + Eq(dq[70])) : qq[dq[16]][Eq(dq[67]) + Eq(dq[68]) + Eq(dq[69]) + Eq(dq[70])])) {
        function aq(...qq) {
          for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = ';pA?sqPB!TjklF)~XKCbDoYh0&[=x%IaOn,:>@_w3QyWE1^cUe/VG(M"zm|9H5ir]4N}<RdZ#Jv2gL+*87{S6$fu.t`', qq[-dq[58]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[-dq[58]].length, qq[dq[15]] = [], qq[dq[72]] = dq[1], qq[dq[24]] = dq[1], qq[dq[26]] = -dq[2]), qq[dq[71]] = dq[1]; qq[dq[71]] < qq[dq[4]]; qq[dq[71]]++)
            if (qq[dq[6]] = qq[dq[2]].indexOf(qq[-dq[58]][qq[dq[71]]]), qq[dq[6]] !== -dq[2])
              if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
              else {
                bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[dq[72]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                do {
                  bq(qq[dq[15]].push(qq[dq[72]] & dq[12]), qq[dq[72]] >>= dq[11], qq[dq[24]] -= dq[11])
                } while (qq[dq[24]] > dq[26]);
                qq[dq[26]] = -dq[2]
              } return qq[dq[26]] > -dq[2] && qq[dq[15]].push((qq[dq[72]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[15]])
        }

        function Vq(...qq) {
          return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = aq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
        }

        function jq(...qq) {
          bq(qq[dq[13]] = dq[1], qq[dq[74]] = function(...Eq) {
            return bq(Eq[dq[13]] = dq[45], Eq[dq[16]] = [], Eq[dq[21]] = Eq[dq[1]].length, Eq[dq[1]].sort(((qq, Eq) => qq - Eq)), qq[dq[14]](Eq[dq[16]], [], dq[1], Eq[dq[21]], Eq[dq[1]], Eq[dq[2]])), Eq[dq[16]]
          }, qq[dq[14]] = function(...Eq) {
            if (bq(Eq[dq[13]] = dq[24], Eq[dq[24]] = dq[52]), !(Eq[dq[73]] < dq[1])) {
              if (Eq[dq[73]] === dq[1]) return Eq[dq[1]].push(Eq[dq[2]]);
              for (Eq[dq[21]] = Eq[dq[45]]; Eq[dq[21]] < Eq[dq[4]] && !(Eq[dq[40]][Eq[dq[21]]] > Eq[dq[73]]); Eq[dq[21]]++) Eq[dq[21]] > Eq[dq[45]] && Eq[dq[40]][Eq[dq[21]]] === Eq[dq[40]][Eq[dq[21]] - dq[2]] || bq(Eq[dq[24]] = Array.from(Eq[dq[2]]), Eq[dq[24]].push(Eq[dq[40]][Eq[dq[21]]]), qq[dq[14]](Eq[dq[1]], Eq[dq[24]], Eq[dq[21]] + dq[2], Eq[dq[4]], Eq[dq[40]], Eq[dq[73]] - Eq[dq[40]][Eq[dq[21]]]))
            }
          }, console.log(qq[dq[74]]))
        }
        Vq(148) in oq && jq(), bq(nq(Qq, Pq, hq), nq(yq, hq, Pq), lq()[Vq(149)](tq, hq, yq));
        const vq = lq()[Vq(150)](hq),
          iq = lq()[Vq(dq[72])](Pq, hq) / qq[dq[73]] / vq,
          Zq = Math[Vq(dq[105])](iq, dq[1]) + dq[2];
        if (qq[dq[73]] * qq[dq[73]] < lq()[dq[75]](yq)) {
          function fq(...qq) {
            function Eq(...qq) {
              return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
                for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = 'E+NW}Z<w12$lMb:T7XrmA/|Rg>iQsa={I.4SvkdJ9xYF6nGy*K"PzBL,5V%&`3]cD~t)U!h0u#C[ofjqp(;^H_O?8e@', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[-dq[76]] = qq[dq[45]].length, qq[dq[40]] = [], qq[dq[73]] = dq[1], qq[dq[24]] = dq[1], qq[dq[26]] = -dq[2]), qq[dq[3]] = dq[1]; qq[dq[3]] < qq[-dq[76]]; qq[dq[3]]++)
                  if (qq[dq[34]] = qq[dq[16]].indexOf(qq[dq[45]][qq[dq[3]]]), qq[dq[34]] !== -dq[2])
                    if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[34]];
                    else {
                      bq(qq[dq[26]] += qq[dq[34]] * dq[35], qq[dq[73]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                      do {
                        bq(qq[dq[40]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[24]] -= dq[11])
                      } while (qq[dq[24]] > dq[26]);
                      qq[dq[26]] = -dq[2]
                    } return qq[dq[26]] > -dq[2] && qq[dq[40]].push((qq[dq[73]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
              }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
            }
            qq[dq[13]] = dq[1],
              function(...qq) {
                function Eq(...qq) {
                  for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = [], qq[dq[45]] = dq[1], qq[-dq[47]] = qq[dq[1]].length, qq[dq[15]] = dq[18], qq[-dq[79]] = dq[18]); qq[dq[45]] < qq[-dq[47]];) bq(qq[dq[15]] = qq[dq[1]].charCodeAt(qq[dq[45]]++), qq[dq[15]] >= dq[83] && qq[dq[15]] <= 56319 && qq[dq[45]] < qq[-dq[47]] ? (qq[-dq[79]] = qq[dq[1]].charCodeAt(qq[dq[45]]++), (64512 & qq[-dq[79]]) == dq[84] ? qq[dq[16]].push(((qq[dq[15]] & dq[80]) << dq[82]) + (qq[-dq[79]] & dq[80]) + dq[81]) : (qq[dq[16]].push(qq[dq[15]]), qq[dq[45]]--)) : qq[dq[16]].push(qq[dq[15]]));
                  return qq[dq[16]]
                }

                function gq(...qq) {
                  if (qq[dq[13]] = dq[2], qq[dq[1]] >= dq[83] && qq[dq[1]] <= 57343) {
                    function Eq(...qq) {
                      for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '=YGFJmEs;1<8x@[V$+WzId/!D_,ZqeM~50l>{TL"*rtuj}baNH92|c&P?7]Co:BvKw6(3QO`ng4fXAy.%hk)U#iSRp^', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[45]].length, qq[dq[15]] = [], qq[-dq[85]] = dq[1], qq[dq[43]] = dq[1], qq[dq[26]] = -dq[2]), qq[dq[11]] = dq[1]; qq[dq[11]] < qq[dq[14]]; qq[dq[11]]++)
                        if (qq[dq[6]] = qq[dq[2]].indexOf(qq[dq[45]][qq[dq[11]]]), qq[dq[6]] !== -dq[2])
                          if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
                          else {
                            bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[-dq[85]] |= qq[dq[26]] << qq[dq[43]], qq[dq[43]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                            do {
                              bq(qq[dq[15]].push(qq[-dq[85]] & dq[12]), qq[-dq[85]] >>= dq[11], qq[dq[43]] -= dq[11])
                            } while (qq[dq[43]] > dq[26]);
                            qq[dq[26]] = -dq[2]
                          } return qq[dq[26]] > -dq[2] && qq[dq[15]].push((qq[-dq[85]] | qq[dq[26]] << qq[dq[43]]) & dq[12]), Hq(qq[dq[15]])
                    }

                    function gq(...qq) {
                      return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Eq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
                    }
                    throw Error(gq(dq[74]) + gq(155) + gq(156) + qq[dq[1]].toString(dq[20]).toUpperCase() + (gq(157) + gq(158) + gq(159) + dq[8]))
                  }
                }

                function Yq(...Eq) {
                  return Eq[dq[13]] = dq[45], qq[dq[2]](Eq[dq[1]] >> Eq[dq[2]] & dq[23] | dq[50])
                }

                function lq(...Eq) {
                  return Eq[dq[13]] = dq[2], (4294967168 & Eq[dq[1]]) == dq[1] ? qq[dq[2]](Eq[dq[1]]) : (Eq[dq[16]] = "", (4294965248 & Eq[dq[1]]) == dq[1] ? Eq[dq[16]] = qq[dq[2]](Eq[dq[1]] >> dq[24] & dq[79] | dq[95]) : (4294901760 & Eq[dq[1]]) == dq[1] ? bq(gq(Eq[dq[1]]), Eq[dq[16]] = qq[dq[2]](Eq[dq[1]] >> dq[27] & dq[86] | dq[98]), Eq[dq[16]] += Yq(Eq[dq[1]], dq[24])) : (4292870144 & Eq[dq[1]]) == dq[1] && bq(Eq[dq[16]] = qq[dq[2]](Eq[dq[1]] >> dq[87] & dq[26] | dq[101]), Eq[dq[16]] += Yq(Eq[dq[1]], dq[27]), Eq[dq[16]] += Yq(Eq[dq[1]], dq[24])), Eq[dq[16]] += qq[dq[2]](Eq[dq[1]] & dq[23] | dq[50]), Eq[dq[16]])
                }

                function Oq(...Eq) {
                  if (Eq[dq[13]] = dq[1], qq[-dq[94]] >= qq[dq[14]]) {
                    function gq(...qq) {
                      for (bq(qq[dq[13]] = dq[2], qq[-dq[93]] = '&IZlUWVhEfQJSRK|q1~g)_A8$+=%wjG4*THObpsY`>!uNzaB/.}d([^0ytPk7v?@n{9mce:6FM,<3x"2]rX#iLD5C;o', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[92]] = qq[dq[21]].length, qq[dq[40]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[1], qq[dq[26]] = -dq[2]), qq[dq[11]] = dq[1]; qq[dq[11]] < qq[dq[92]]; qq[dq[11]]++)
                        if (qq[dq[6]] = qq[-dq[93]].indexOf(qq[dq[21]][qq[dq[11]]]), qq[dq[6]] !== -dq[2])
                          if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
                          else {
                            bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[dq[8]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                            do {
                              bq(qq[dq[40]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
                            } while (qq[dq[24]] > dq[26]);
                            qq[dq[26]] = -dq[2]
                          } return qq[dq[26]] > -dq[2] && qq[dq[40]].push((qq[dq[8]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
                    }

                    function Yq(...qq) {
                      return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = gq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
                    }
                    throw Error(Yq(160))
                  }
                  if (bq(Eq[dq[21]] = qq[dq[40]][qq[-dq[94]]] & dq[12], qq[-dq[94]]++), (Eq[dq[21]] & dq[95]) == dq[50]) return Eq[dq[21]] & dq[23];
                  throw Error(function(...qq) {
                    return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
                      for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = 'A<wue]jDyLKh#PrF4[a*x=R:m`~IV^Z96q0W)d%T;bQM?O|n1o8Yl2g$S/@i3c!>HUf{5BE_pCtN,.s7v&z(kG+X}"J', qq[-dq[90]] = "" + (qq[dq[1]] || ""), qq[-dq[62]] = qq[-dq[90]].length, qq[dq[40]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[1], qq[-dq[4]] = -dq[2]), qq[dq[3]] = dq[1]; qq[dq[3]] < qq[-dq[62]]; qq[dq[3]]++)
                        if (qq[-dq[91]] = qq[dq[16]].indexOf(qq[-dq[90]][qq[dq[3]]]), qq[-dq[91]] !== -dq[2])
                          if (qq[-dq[4]] < dq[1]) qq[-dq[4]] = qq[-dq[91]];
                          else {
                            bq(qq[-dq[4]] += qq[-dq[91]] * dq[35], qq[dq[8]] |= qq[-dq[4]] << qq[dq[24]], qq[dq[24]] += (qq[-dq[4]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                            do {
                              bq(qq[dq[40]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
                            } while (qq[dq[24]] > dq[26]);
                            qq[-dq[4]] = -dq[2]
                          } return qq[-dq[4]] > -dq[2] && qq[dq[40]].push((qq[dq[8]] | qq[-dq[4]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
                    }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
                  }(161))
                }

                function mq(...Eq) {
                  if (Eq[dq[13]] = dq[1], bq(Eq[-dq[97]] = dq[18], Eq[dq[26]] = dq[18], Eq[dq[14]] = dq[18], Eq[dq[4]] = dq[18], Eq[dq[40]] = dq[18]), qq[-dq[94]] > qq[dq[14]]) {
                    function Yq(...qq) {
                      for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '~!;6sy,?meHnPz/}5S(>X9uc$#vfJ1%oTMp@Ai2D&a]l38:Zwx_hWV{dGIrFC)*qBjY0<UO".E`Qt^RN4kb7+K|[=gL', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[45]].length, qq[-dq[69]] = [], qq[dq[96]] = dq[1], qq[dq[43]] = dq[1], qq[dq[26]] = -dq[2]), qq[dq[11]] = dq[1]; qq[dq[11]] < qq[dq[14]]; qq[dq[11]]++)
                        if (qq[dq[34]] = qq[dq[2]].indexOf(qq[dq[45]][qq[dq[11]]]), qq[dq[34]] !== -dq[2])
                          if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[34]];
                          else {
                            bq(qq[dq[26]] += qq[dq[34]] * dq[35], qq[dq[96]] |= qq[dq[26]] << qq[dq[43]], qq[dq[43]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                            do {
                              bq(qq[-dq[69]].push(qq[dq[96]] & dq[12]), qq[dq[96]] >>= dq[11], qq[dq[43]] -= dq[11])
                            } while (qq[dq[43]] > dq[26]);
                            qq[dq[26]] = -dq[2]
                          } return qq[dq[26]] > -dq[2] && qq[-dq[69]].push((qq[dq[96]] | qq[dq[26]] << qq[dq[43]]) & dq[12]), Hq(qq[-dq[69]])
                    }

                    function lq(...qq) {
                      return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Yq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
                    }
                    throw Error(lq(162))
                  }
                  if (qq[-dq[94]] == qq[dq[14]]) return dq[44];
                  if (bq(Eq[-dq[97]] = qq[dq[40]][qq[-dq[94]]] & dq[12], qq[-dq[94]]++), (Eq[-dq[97]] & dq[50]) == dq[1]) return Eq[-dq[97]];
                  if ((Eq[-dq[97]] & dq[98]) == dq[95]) {
                    if (bq(Eq[dq[26]] = Oq(), Eq[dq[40]] = (Eq[-dq[97]] & dq[79]) << dq[24] | Eq[dq[26]]), Eq[dq[40]] >= dq[50]) return Eq[dq[40]];
                    {
                      function mq(...qq) {
                        for (bq(qq[dq[13]] = dq[2], qq[dq[99]] = 'Hw/$Gzvo>JEr0+qDFZCNuVln3X6?y@^ti]}M_[x;P<ha:BUb5m`{K.I,f8*2&|T7L~R#e19cg%4Ys!SA)(pj="dQkOW', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[-dq[100]] = dq[1], qq[dq[24]] = dq[1], qq[dq[42]] = -dq[2]), qq[dq[3]] = dq[1]; qq[dq[3]] < qq[dq[14]]; qq[dq[3]]++)
                          if (qq[dq[6]] = qq[dq[99]].indexOf(qq[dq[21]][qq[dq[3]]]), qq[dq[6]] !== -dq[2])
                            if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[6]];
                            else {
                              bq(qq[dq[42]] += qq[dq[6]] * dq[35], qq[-dq[100]] |= qq[dq[42]] << qq[dq[24]], qq[dq[24]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                              do {
                                bq(qq[dq[15]].push(qq[-dq[100]] & dq[12]), qq[-dq[100]] >>= dq[11], qq[dq[24]] -= dq[11])
                              } while (qq[dq[24]] > dq[26]);
                              qq[dq[42]] = -dq[2]
                            } return qq[dq[42]] > -dq[2] && qq[dq[15]].push((qq[-dq[100]] | qq[dq[42]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[15]])
                      }

                      function cq(...qq) {
                        return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = mq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
                      }
                      throw Error(cq(163))
                    }
                  }
                  if ((Eq[-dq[97]] & dq[101]) == dq[98]) {
                    if (bq(Eq[dq[26]] = Oq(), Eq[dq[14]] = Oq(), Eq[dq[40]] = (Eq[-dq[97]] & dq[86]) << dq[27] | Eq[dq[26]] << dq[24] | Eq[dq[14]]), Eq[dq[40]] >= 2048) return gq(Eq[dq[40]]), Eq[dq[40]];
                    {
                      function uq(...qq) {
                        for (bq(qq[dq[13]] = dq[2], qq[-dq[103]] = 'Kocu3n)eq?=2txC1|:WT_SkmO9;5r$@68jPL^B&{ZdI.DFl7y!~#haH0+/%U`sb"vJg]4RE(zp,Qw*A>}[XGM<YNVif', qq[-dq[102]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[-dq[102]].length, qq[dq[40]] = [], qq[-dq[104]] = dq[1], qq[dq[24]] = dq[1], qq[dq[26]] = -dq[2]), qq[dq[11]] = dq[1]; qq[dq[11]] < qq[dq[14]]; qq[dq[11]]++)
                          if (qq[dq[6]] = qq[-dq[103]].indexOf(qq[-dq[102]][qq[dq[11]]]), qq[dq[6]] !== -dq[2])
                            if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
                            else {
                              bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[-dq[104]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                              do {
                                bq(qq[dq[40]].push(qq[-dq[104]] & dq[12]), qq[-dq[104]] >>= dq[11], qq[dq[24]] -= dq[11])
                              } while (qq[dq[24]] > dq[26]);
                              qq[dq[26]] = -dq[2]
                            } return qq[dq[26]] > -dq[2] && qq[dq[40]].push((qq[-dq[104]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
                      }

                      function Bq(...qq) {
                        return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = uq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
                      }
                      throw Error(Bq(164))
                    }
                  }
                  if ((Eq[-dq[97]] & dq[117]) == dq[101] && (bq(Eq[dq[26]] = Oq(), Eq[dq[14]] = Oq(), Eq[dq[4]] = Oq(), Eq[dq[40]] = (Eq[-dq[97]] & dq[26]) << dq[87] | Eq[dq[26]] << dq[27] | Eq[dq[14]] << dq[24] | Eq[dq[4]]), Eq[dq[40]] >= dq[81] && Eq[dq[40]] <= 1114111)) return Eq[dq[40]];
                  throw Error(function(...qq) {
                    return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
                      for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = '_83*!(z.|~j@O;0t1yEmenC?9M2J7Y+Uo4VWa"x<PFQbd`pLws/qX[{&v#)D>H:5h]}$Ilk,^g=riN%GBRfcKTSu6ZA', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[73]] = dq[1], qq[dq[24]] = dq[1], qq[dq[42]] = -dq[2]), qq[dq[11]] = dq[1]; qq[dq[11]] < qq[dq[4]]; qq[dq[11]]++)
                        if (qq[dq[34]] = qq[dq[16]].indexOf(qq[dq[21]][qq[dq[11]]]), qq[dq[34]] !== -dq[2])
                          if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[34]];
                          else {
                            bq(qq[dq[42]] += qq[dq[34]] * dq[35], qq[dq[73]] |= qq[dq[42]] << qq[dq[24]], qq[dq[24]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                            do {
                              bq(qq[dq[15]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[24]] -= dq[11])
                            } while (qq[dq[24]] > dq[26]);
                            qq[dq[42]] = -dq[2]
                          } return qq[dq[42]] > -dq[2] && qq[dq[15]].push((qq[dq[73]] | qq[dq[42]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[15]])
                    }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
                  }(165))
                }
                qq[dq[13]] = dq[2], qq[dq[2]] = String.fromCharCode, bq(qq[dq[40]] = dq[18], qq[dq[14]] = dq[18], qq[-dq[94]] = dq[18]), bq(qq[dq[1]].version = function(qq) {
                  return typeof xq[qq] === dq[17] ? xq[qq] = function(...qq) {
                    for (bq(qq[dq[13]] = dq[2], qq[-dq[5]] = ',zy";g3)!M($b.UqdX[KL#Z:>xcwYE`vS2AR%_W9mCrf/Qt}{a5Vuj784<BFHkh~*nO^J=o1eN|Ds+@0?iPp6&]GIlT', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[78]] = dq[1], qq[dq[43]] = dq[1], qq[dq[42]] = -dq[2]), qq[dq[77]] = dq[1]; qq[dq[77]] < qq[dq[4]]; qq[dq[77]]++)
                      if (qq[dq[34]] = qq[-dq[5]].indexOf(qq[dq[21]][qq[dq[77]]]), qq[dq[34]] !== -dq[2])
                        if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[34]];
                        else {
                          bq(qq[dq[42]] += qq[dq[34]] * dq[35], qq[dq[78]] |= qq[dq[42]] << qq[dq[43]], qq[dq[43]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                          do {
                            bq(qq[dq[15]].push(qq[dq[78]] & dq[12]), qq[dq[78]] >>= dq[11], qq[dq[43]] -= dq[11])
                          } while (qq[dq[43]] > dq[26]);
                          qq[dq[42]] = -dq[2]
                        } return qq[dq[42]] > -dq[2] && qq[dq[15]].push((qq[dq[78]] | qq[dq[42]] << qq[dq[43]]) & dq[12]), Hq(qq[dq[15]])
                  }(Aq[qq]) : xq[qq]
                }(166), qq[dq[1]].encode = function(...qq) {
                  for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = Eq(qq[dq[1]]), qq[dq[21]] = qq[dq[2]].length, qq[-dq[88]] = -dq[2], qq[-dq[89]] = dq[18], qq[dq[8]] = ""); ++qq[-dq[88]] < qq[dq[21]];) bq(qq[-dq[89]] = qq[dq[2]][qq[-dq[88]]], qq[dq[8]] += lq(qq[-dq[89]]));
                  return qq[dq[8]]
                }, qq[dq[1]].decode = function(...gq) {
                  for (bq(gq[dq[13]] = dq[2], qq[dq[40]] = Eq(gq[dq[1]]), qq[dq[14]] = qq[dq[40]].length, qq[-dq[94]] = dq[1], gq[dq[2]] = [], gq[-dq[64]] = dq[18]);
                    (gq[-dq[64]] = mq()) !== dq[44];) gq[dq[2]].push(gq[-dq[64]]);
                  return function(...Eq) {
                    for (bq(Eq[dq[13]] = dq[2], Eq[dq[2]] = Eq[dq[1]].length, Eq[dq[21]] = -dq[2], Eq[dq[4]] = dq[18], Eq[-dq[74]] = ""); ++Eq[dq[21]] < Eq[dq[2]];) Eq[dq[4]] = Eq[dq[1]][Eq[dq[21]]], Eq[dq[4]] > 65535 && bq(Eq[dq[4]] -= dq[81], Eq[-dq[74]] += qq[dq[2]](Eq[dq[4]] >>> dq[82] & dq[80] | dq[83]), Eq[dq[4]] = dq[84] | Eq[dq[4]] & dq[80]), Eq[-dq[74]] += qq[dq[2]](Eq[dq[4]]);
                    return Eq[-dq[74]]
                  }(gq[dq[2]])
                })
              }(typeof exports === Eq(167) + Eq(168) ? this.utf8 = {} : exports)
          }
          Vq(153) + "P" in oq && fq(), lq()[Vq(169)](Pq, Pq, yq, Zq)
        }
        bq(qq[dq[34]] = (0, Oq.w)(qq[dq[34]], 1, Math[Vq(dq[105])](dq[2], Math[Vq(170)](dq[1], -iq, dq[2] - vq / qq[dq[73]]))), lq()[Vq(171)](Pq, Pq, tq))
      }
      const uq = rq;
      if (bq(lq()[Eq(172)](uq, Pq, hq), uq[dq[2]] = dq[1], qq[dq[107]] = lq()[Eq(173)](uq)), !cq) {
        function Mq(...qq) {
          var Eq;
          bq(qq[dq[13]] = dq[1], Eq = function(...qq) {
            bq(qq[dq[13]] = dq[2], this.WB = qq[dq[1]], this.length = dq[1], this.map = {}, this.head = dq[52], this.tail = dq[52])
          }, Eq.prototype.get = function(...qq) {
            var Eq;
            return bq(qq[dq[13]] = dq[2], Eq = this.map[qq[dq[1]]]), Eq ? (this.remove(Eq), this.insert(Eq.key, Eq.val), Eq.val) : -dq[2]
          }, Eq.prototype.put = function(...qq) {
            bq(qq[dq[13]] = dq[45], this.map[qq[dq[1]]] ? (this.remove(this.map[qq[dq[1]]]), this.insert(qq[dq[1]], qq[dq[2]])) : this.length === this.WB ? (this.remove(this.head), this.insert(qq[dq[1]], qq[dq[2]])) : (this.insert(qq[dq[1]], qq[dq[2]]), this.length++))
          }, Eq.prototype.remove = function(...qq) {
            bq(qq[dq[13]] = dq[2], qq[dq[2]] = qq[dq[1]].prev, qq[-dq[106]] = qq[dq[1]].next), qq[-dq[106]] && (qq[-dq[106]].prev = qq[dq[2]]), qq[dq[2]] && (qq[dq[2]].next = qq[-dq[106]]), this.head === qq[dq[1]] && (this.head = qq[-dq[106]]), this.tail === qq[dq[1]] && (this.tail = qq[dq[2]]), delete this.map[qq[dq[1]].key]
          }, Eq.prototype.insert = function(...qq) {
            bq(qq[dq[13]] = dq[45], qq[dq[45]] = new List(qq[dq[1]], qq[dq[2]]), this.tail ? (this.tail.next = qq[dq[45]], qq[dq[45]].prev = this.tail, this.tail = qq[dq[45]]) : (this.tail = qq[dq[45]], this.head = qq[dq[45]]), this.map[qq[dq[1]]] = qq[dq[45]])
          }, console.log(Eq))
        }
        Eq(dq[104]) in oq && Mq(), qq[dq[107]] *= qq[dq[34]]
      }
      const Bq = qq[dq[24]][Eq(175) + Eq(176) + Eq(177)],
        Wq = Bq ? Math[Eq(178)](Bq, qq[dq[107]]) : qq[dq[107]];
      lq()[Eq(179) + Eq(dq[78])](uq, uq);
      const Nq = qq[dq[26]] !== dq[52] && void 0 !== qq[dq[26]] ? qq[dq[26]] : qq[dq[24]][Eq(181) + Eq(182) + Eq(183)];
      if (Wq > dq[1]) {
        function Tq(qq) {
          var Eq, gq, Yq, lq, Oq, mq, xq;
          for (bq(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = dq[1], Oq = dq[1], mq = -dq[2]), xq = dq[1]; xq < gq; xq++) {
            var Aq = 'H"KWh.JjQoygu<[m?:`D~Xpz0>At3PnGTEkV+ls4b#;}^I7a_M(v!*&2S]|@R1dOwY/cqUBN,=C{Le$%ixrFf865)9Z'.indexOf(Eq[xq]);
            if (Aq !== -dq[2])
              if (mq < dq[1]) mq = Aq;
              else {
                bq(mq += Aq * dq[35], lq |= mq << Oq, Oq += (mq & dq[36]) > dq[37] ? dq[38] : dq[39]);
                do {
                  bq(Yq.push(lq & dq[12]), lq >>= dq[11], Oq -= dq[11])
                } while (Oq > dq[26]);
                mq = -dq[2]
              }
          }
          return mq > -dq[2] && Yq.push((lq | mq << Oq) & dq[12]), Hq(Yq)
        }

        function zq(...qq) {
          return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Tq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
        }

        function Sq(...qq) {
          bq(qq[dq[13]] = dq[1], qq[dq[16]] = function(...Eq) {
            return bq(Eq[dq[13]] = dq[45], Eq[dq[45]] = [], Eq[dq[4]] = Eq[dq[1]].length, Eq[dq[1]].sort(((qq, Eq) => qq - Eq)), qq[dq[2]](Eq[dq[45]], [], dq[1], Eq[dq[4]], Eq[dq[1]], Eq[dq[2]])), Eq[dq[45]]
          }, qq[dq[2]] = function(...Eq) {
            if (bq(Eq[dq[13]] = dq[24], Eq[dq[108]] = dq[52]), !(Eq[dq[73]] < dq[1])) {
              if (Eq[dq[73]] === dq[1]) return Eq[dq[1]].push(Eq[dq[2]]);
              for (Eq[dq[21]] = Eq[dq[45]]; Eq[dq[21]] < Eq[dq[4]] && !(Eq[dq[40]][Eq[dq[21]]] > Eq[dq[73]]); Eq[dq[21]]++) Eq[dq[21]] > Eq[dq[45]] && Eq[dq[40]][Eq[dq[21]]] === Eq[dq[40]][Eq[dq[21]] - dq[2]] || bq(Eq[dq[108]] = Array.from(Eq[dq[2]]), Eq[dq[108]].push(Eq[dq[40]][Eq[dq[21]]]), qq[dq[2]](Eq[dq[1]], Eq[dq[108]], Eq[dq[21]] + dq[2], Eq[dq[4]], Eq[dq[40]], Eq[dq[73]] - Eq[dq[40]][Eq[dq[21]]]))
            }
          }, console.log(qq[dq[16]]))
        }
        zq(184) + "Y" in oq && Sq();
        let pq = qq[dq[45]][zq(185) + zq(186)] * Nq;
        if (!cq) {
          function Lq(...qq) {
            for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '/UCTcNbflMq?X"YpJ7}B=kv~Z{x%yodt)>,!ru5Q8|mze;WI[Sw_:0]ghO#`<AVFPD@K&63(R*E4^iLH$2js9G1a.n+', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[40]] = [], qq[dq[73]] = dq[1], qq[dq[24]] = dq[1], qq[-dq[109]] = -dq[2]), qq[dq[110]] = dq[1]; qq[dq[110]] < qq[dq[14]]; qq[dq[110]]++)
              if (qq[dq[6]] = qq[dq[2]].indexOf(qq[dq[21]][qq[dq[110]]]), qq[dq[6]] !== -dq[2])
                if (qq[-dq[109]] < dq[1]) qq[-dq[109]] = qq[dq[6]];
                else {
                  bq(qq[-dq[109]] += qq[dq[6]] * dq[35], qq[dq[73]] |= qq[-dq[109]] << qq[dq[24]], qq[dq[24]] += (qq[-dq[109]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                  do {
                    bq(qq[dq[40]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[24]] -= dq[11])
                  } while (qq[dq[24]] > dq[26]);
                  qq[-dq[109]] = -dq[2]
                } return qq[-dq[109]] > -dq[2] && qq[dq[40]].push((qq[dq[73]] | qq[-dq[109]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
          }

          function Jq(...qq) {
            return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Lq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
          }

          function kq(...qq) {
            qq[dq[13]] = dq[1]
          }
          Jq(187) + "n" in oq && kq(), pq *= qq[dq[45]][Jq(dq[93]) + Jq(194)]
        }
        let Gq = qq[dq[45]][zq(dq[107]) + zq(dq[41]) + "ss"] * Wq;
        if (Wq < .3) {
          function Rq(qq) {
            var Eq, gq, Yq, lq, Oq, mq, xq;
            for (bq(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = dq[1], Oq = dq[1], mq = -dq[2]), xq = dq[1]; xq < gq; xq++) {
              var Aq = '5gcsXmUVERMkniPSO+/^l]3w1D=:%<?FLQ|;tuo>aGZzHB{[!IqjW#Cve4~KJYh&fA*xrNT.07bd2,`p8)}y$6_(@9"'.indexOf(Eq[xq]);
              if (Aq !== -dq[2])
                if (mq < dq[1]) mq = Aq;
                else {
                  bq(mq += Aq * dq[35], lq |= mq << Oq, Oq += (mq & dq[36]) > dq[37] ? dq[38] : dq[39]);
                  do {
                    bq(Yq.push(lq & dq[12]), lq >>= dq[11], Oq -= dq[11])
                  } while (Oq > dq[26]);
                  mq = -dq[2]
                }
            }
            return mq > -dq[2] && Yq.push((lq | mq << Oq) & dq[12]), Hq(Yq)
          }

          function Uq(...qq) {
            return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Rq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
          }

          function Fq(...qq) {
            qq[dq[13]] = dq[1]
          }
          Uq(dq[97]) + "3" in oq && Fq(), Gq *= Wq
        }
        if (pq > Gq) {
          function sq(...qq) {
            for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = '*!<,D;^+b"Av.9V{L(z%SO#)7=FHBj_U~ud|Isl$R6cCopm3>1yarJ}NZ]EfT@q8Kx?Q2k5h&Gin4:0wXeMt/`W[PgY', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[73]] = dq[1], qq[dq[43]] = dq[1], qq[dq[26]] = -dq[2]), qq[-dq[66]] = dq[1]; qq[-dq[66]] < qq[dq[14]]; qq[-dq[66]]++)
              if (qq[dq[6]] = qq[dq[16]].indexOf(qq[dq[21]][qq[-dq[66]]]), qq[dq[6]] !== -dq[2])
                if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
                else {
                  bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[dq[73]] |= qq[dq[26]] << qq[dq[43]], qq[dq[43]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
                  do {
                    bq(qq[dq[15]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[43]] -= dq[11])
                  } while (qq[dq[43]] > dq[26]);
                  qq[dq[26]] = -dq[2]
                } return qq[dq[26]] > -dq[2] && qq[dq[15]].push((qq[dq[73]] | qq[dq[26]] << qq[dq[43]]) & dq[12]), Hq(qq[dq[15]])
          }

          function Xq(...qq) {
            return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = sq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
          }

          function wq(...qq) {
            bq(qq[dq[13]] = dq[1], qq[dq[123]] = function(...qq) {
              if (bq(qq[dq[13]] = dq[2], qq[dq[16]] = qq[dq[1]].length), qq[dq[16]] < dq[45]) return dq[1];
              if (bq(qq[-dq[7]] = Math.max(...qq[dq[1]]), qq[dq[14]] = Math.min(...qq[dq[1]])), qq[-dq[7]] === qq[dq[14]]) return dq[1];
              for (bq(qq[dq[15]] = Array(qq[dq[16]] - dq[2]).fill(Number.MAX_SAFE_INTEGER), qq[dq[73]] = Array(qq[dq[16]] - dq[2]).fill(Number.MIN_SAFE_INTEGER), qq[-dq[121]] = Math.ceil((qq[-dq[7]] - qq[dq[14]]) / (qq[dq[16]] - dq[2])), qq[dq[42]] = dq[1]), qq[dq[3]] = dq[1]; qq[dq[3]] < qq[dq[16]]; qq[dq[3]]++) qq[dq[1]][qq[dq[3]]] !== qq[dq[14]] && qq[dq[1]][qq[dq[3]]] !== qq[-dq[7]] && bq(qq[dq[42]] = Math.floor((qq[dq[1]][qq[dq[3]]] - qq[dq[14]]) / qq[-dq[121]]), qq[dq[15]][qq[dq[42]]] = Math.min(qq[dq[15]][qq[dq[42]]], qq[dq[1]][qq[dq[3]]]), qq[dq[73]][qq[dq[42]]] = Math.max(qq[dq[73]][qq[dq[42]]], qq[dq[1]][qq[dq[3]]]));
              for (bq(qq[dq[6]] = Number.MIN_SAFE_INTEGER, qq[dq[82]] = qq[dq[14]]), qq[dq[122]] = dq[1]; qq[dq[122]] < qq[dq[16]] - dq[2]; qq[dq[122]]++) qq[dq[15]][qq[dq[122]]] === Number.MAX_SAFE_INTEGER && qq[dq[73]][qq[dq[122]]] === Number.MIN_SAFE_INTEGER || bq(qq[dq[6]] = Math.max(qq[dq[6]], qq[dq[15]][qq[dq[122]]] - qq[dq[82]]), qq[dq[82]] = qq[dq[73]][qq[dq[122]]]);
              return qq[dq[6]] = Math.max(qq[dq[6]], qq[-dq[7]] - qq[dq[82]]), qq[dq[6]]
            }, console.log(qq[dq[123]]))
          }
          Xq(dq[10]) + "l" in oq && wq(), pq = Gq
        }
        bq(lq()[zq(dq[100])](uq, uq, pq), qq[dq[40]][zq(205) + zq(206)](uq))
      }
      qq[dq[40]][Eq(dq[96]) + dq[124]] = qq[dq[45]][Eq(208) + Eq(dq[51]) + dq[124]] * (cq ? Yq : mq)
    }
  },
  37656: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq,
      g: () => xq
    });
    var Yq = gq(37661),
      lq = gq(1870);
    const Oq = 2,
      mq = 1,
      xq = {
        Am: 1,
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

    function Aq(qq, Eq, gq, xq, Aq, cq, uq) {
      if (Aq.speed) return (0, Yq.c)(Eq, gq, xq, Aq, cq, uq, qq), void(Aq.ticksToReachMaxIdleFriction = Oq);
      const Bq = xq.isOnGround(),
        Wq = Eq.bloxd.getSyncedClientOptions(Eq.bloxd.getPlayerReader(gq)),
        Nq = null === Wq ? Eq.bloxd.getClientPredictedOption(gq, "groundFrictionScale") : Wq.groundFrictionScale,
        aq = null === Wq ? Eq.bloxd.getClientPredictedOption(gq, "airFrictionScale") : Wq.airFrictionScale,
        Vq = Bq ? Nq : aq,
        dq = Math.max(mq, Vq),
        jq = Aq.ticksToReachMaxIdleFriction / Oq,
        Hq = (0, lq.w)(dq, Vq, jq);
      cq.friction = qq.standingFriction * ((null === Wq ? Eq.bloxd.getClientPredictedOption(gq, "airMomentumConservation") : Wq.airMomentumConservation) ? Hq : Vq), Aq.ticksToReachMaxIdleFriction > 0 && Aq.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);