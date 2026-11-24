export const id = 225;
export const ids = [225];
export const modules = {
  38502: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => KS
    });
    var tS = gS(198),
      bS = gS(37680);
    const XS = 1.2,
      xS = {
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
        gu: .5,
        aHS: !1
      },
      NS = {
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
        gu: .5,
        aHS: !1
      },
      qS = {
        physicsBodyDimensions: {
          width: tS.e.UG,
          height: tS.e.pG
        },
        hitBoxDimensions: {
          width: tS.e.UG + .4,
          height: tS.e.pG + .6
        },
        eyeHeight: tS.e.pG * tS.e.playerEyeToHeightRatio,
        rideHeight: tS.e.pG - .3,
        gu: .5,
        aHS: !1
      },
      uS = {
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
        gu: .5,
        aHS: !1
      },
      IS = {
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
        gu: .5,
        aHS: !1
      },
      fS = {
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
        gu: .5,
        aHS: !1
      },
      kS = {
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
        gu: .5,
        aHS: !1
      },
      aS = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: tS.e.UG,
            height: tS.e.pG
          },
          hitBoxDimensions: {
            width: tS.e.UG + .4,
            height: tS.e.pG + .6
          },
          eyeHeight: tS.e.pG * tS.e.playerEyeToHeightRatio,
          rideHeight: tS.e.pG - .1,
          gu: bS.f.gu,
          aHS: !0
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
        },
        Camel: {
          modelScale: XS,
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
        },
        "Cave Golem": xS,
        "Draugr Zombie": {
          ...qS,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": qS,
        "Frost Golem": xS,
        "Frost Zombie": {
          ...qS,
          defaultPose: "zombie"
        },
        "Frost Skeleton": qS,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: tS.e.UG,
            height: tS.e.pG
          },
          hitBoxDimensions: {
            width: tS.e.UG + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          gu: .5,
          aHS: !1
        },
        Wolf: uS,
        Bear: IS,
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
          gu: .5,
          aHS: !1
        },
        Stag: fS,
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
          gu: .5,
          aHS: !1
        },
        Gorilla: kS,
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
          gu: .5,
          aHS: !1
        },
        "Draugr Huntress": qS,
        "Magma Golem": xS,
        "Spirit Golem": xS,
        "Spirit Wolf": uS,
        "Spirit Bear": IS,
        "Spirit Stag": fS,
        "Spirit Gorilla": kS,
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: tS.e.UG,
            height: tS.e.pG
          },
          hitBoxDimensions: {
            width: tS.e.UG + .4,
            height: tS.e.pG + .6
          },
          eyeHeight: tS.e.pG * tS.e.playerEyeToHeightRatio,
          rideHeight: tS.e.pG - .1,
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: tS.e.UG,
            height: tS.e.pG
          },
          hitBoxDimensions: {
            width: tS.e.UG + .4,
            height: tS.e.pG + .6
          },
          eyeHeight: tS.e.pG * tS.e.playerEyeToHeightRatio,
          rideHeight: tS.e.pG - .1,
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
        },
        Zombie: {
          ...qS,
          defaultPose: "zombie"
        },
        Skeleton: qS,
        Mummy: {
          ...qS,
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
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
          gu: .5,
          aHS: !1
        },
        "Iron Guardian": NS,
        "Gold Guardian": NS,
        "Diamond Guardian": NS,
        "Moonstone Guardian": NS,
        "Iron Goofy Golem": NS,
        "Gold Goofy Golem": NS,
        "Diamond Goofy Golem": NS,
        "Moonstone Goofy Golem": NS,
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
          gu: .5,
          aHS: !1
        }
      };

    function KS(SS) {
      return aS[SS]
    }
  },
  37093: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    const tS = {
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
  37685: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(402),
      bS = gS.n(tS),
      XS = gS(2022);
    let xS;
    var NS, qS, uS, IS, fS, kS, aS, KS, jS;
    const GS = [0, 1, 8, 255, "d", 3, "b", "length", "undefined", "a", void 0, 2, 4, 238, 63, 6, "fromCodePoint", 7, 12, "push", 95, "h", 241, "i", "g", 91, 5, 8191, 88, 13, 14, 143, 11, 216, 21, 177, 100, 112, 113, 114, "e", null, 108, 109, 110, 111, 115, 116, 117, 104, 105, 106, 107, 123, 124, 127, 128, 129, 130, 131, "c", 171, 154, 33, !1, 86, "nX", 99, 157, "f", 178, 136, 10, 175, 205, 9, 161, 62, 15, 142, 82, 137, 119, 153, 224, 193, 118, 202, 46, 38, 231, 247, 79, 26, !0, "on"];

    function CS(SS) {
      return typeof NS[SS] === GS[8] ? NS[SS] = function(SS) {
        var HS, gS, tS, bS, XS, xS, NS;
        for (cS(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = GS[0], XS = GS[0], xS = -GS[1]), NS = GS[0]; NS < gS; NS++) {
          var qS = 'Te2>lELa~P<^iu0?rH.*p95,J!G1gIW8S&6s/fCv)Z=]$k_VoYRQ+NF(XmjwU}yz#DK"ch:q43|@{MxB7AtnbO%[;`d'.indexOf(HS[NS]);
          if (qS !== -GS[1])
            if (xS < GS[0]) xS = qS;
            else {
              cS(xS += qS * GS[25], bS |= xS << XS, XS += (xS & GS[27]) > GS[28] ? GS[29] : GS[30]);
              do {
                cS(tS.push(bS & GS[3]), bS >>= GS[2], XS -= GS[2])
              } while (XS > GS[17]);
              xS = -GS[1]
            }
        }
        return xS > -GS[1] && tS.push((bS | xS << XS) & GS[3]), nS(tS)
      }(qS[SS]) : NS[SS]
    }

    function nS(...SS) {
      return SS[GS[7]] = GS[1], typeof IS !== GS[8] && IS ? (new IS).decode(new fS(SS[GS[0]])) : typeof kS !== GS[8] && kS ? kS.from(SS[GS[0]]).toString("utf-8") : jS(SS[GS[0]])
    }

    function PS() {}
    cS(NS = {}, qS = ["(qXQvc7){^*85E+1~cr@NbQZIKEBz?s/pz:(1", "lc0P,m|+2mHHrn[5Gc`SD/qa.zHB5R9gvp)W7(8Za", "ky6@q|G~p#oYcwL.BXN<iy#.?zh7^14CdDVlah3aJp(zs:;6xX2", "GF&S%q0+u.ylH/<C1U8+W", "ID,YXU!Nkyw7V0.gzw1<$}~jdD>1.AIIkpV+@y_){N#e1GG/XT", 'y0q3"(Pe}0s4Hr)87L#YgCgJTzjaC!P.*qnEXb!@$0*JI4b51U>', 'Dy6IksLJzX,>yuO)LPUM]@"u#.[?zj~', ";kcqRY,ZDF#.F!y,wDh(Amp/K?:SZl0", "tDFYz_8I>mP4F}PvF0E(Iwr#,uSHe48HUgLa>4euA?N", "8f~W|UR_v#a@YulWC>*MH", "^m.1~6AZXu", "kc?+@|ZhHmv8&oX6#yfa/XsVGpSHonu", 'D3!xtC"e', '=cAFA+c_KU:7Z}%Z$DwSXz#|0.p<$1^G"k?W8qp%c#%ms0IIOwca', "zci(}bkh_Xr4Qw6J<]jQ7C<.tP.L5AW/%3)FTo))Y?O?A7Hv", "aqC8Xv$)~u8BFt2fNPhG#/g|!H", "Ts>IzMSJ6FR{eAnZ5,!Q?A+)#Ue2yfGI(62", "PIW{9mT", "Y):{RtIz0KF", "OL4Fq(<.oP^te", '|Xv+YfbiQP%"!Y]G}cO|vYQZmjI8JV+6}y?+0{|_Ymr@c?]*HmyllBT', "L.(gpw:%L<O:A!8fXH}8=}9a2?Y8?2Y1d3h8RtsIJHc7.Ed/vo$(~{cLl", "B3ER7y(@Si^c^VDHCc>", "*mVlVM@ehFTcPA`,P.(3[C~#cF@S/V%6^S%8|/T", "jqWg2/d6mj[AE/af=DQI,h%yL", "GU#QQjT", '7pM8d+eNt*"XIo+1Jc;Le%Am*PGhKt:C?]nSSs0:ri=aEr[sQFbR#jG/]04Ue', '"=DQgOvaJpcMT', "UyrP`{WJ1yol.}wIEzl(3Accb#+3`YB1FFzP@h+_]~%N?0P.:kcM&)T", "]Gk87(o%!Hq:m!v!A3`LU6G+tFg+SnL!Mc9a", "KHi<f7Zzj0;!Uw[5", "y8%a^h~j{wF34UtgyDu+aAgiZ0|e2E>.&]]Mv@G/W9]w1R)GbLVY&x|JQi,6e", "f?bRT/na?UeFe", "8)nS,{LWL", '}H}||h}I[pD:]>wI/i"Ssw7)tPNao>*6ADB+PB[eDi[zZr=CYp>', '6FGS"N?aB.3sDl', 'jo%gDU*VO*n:qw$*"8&Wq64+c*g<e', "&iZ@+z]sAiOM|A?vQ6N8eNHsQ#`Me", "5Uu|}oT", "]IqY1)~~_KOS_!&,*.zY;niJ9FJDvt.g(ke", "!?|Qnq3mD.3:6E", "|X&4l(ke", "?.d~yjBa5*)3.Cn1F6jSQ@biE#{|aGpgb8$|$skmV?", "Jc43`nQ*:u6o6E0)t:p(y_nZom<F?t/8[H&L", 'RoP4`mqaSPQ0Tqt6?zFl[+$7bF"N.fi*fFOqCYT', '$yQSAyZsUD+hHfeJdX"R1C",BU)7=!TJoQk+g)1Nl', "{cF3*Rm,lm.j_f.6T|vlz|R2", 'd=5+~/8h$yhMK!).`y:Y!O"Qkwi6+1R)', "Psvl)@#cnmf", "DoY1h|bJiyR{W02,#6dSUbO,n*+8*Cuv[Hka7CL#iy_(;>3*", "%DxYBAeN.ib|=jrG%08lyj:Jw0}M6!<CEsc<", "emFavO/.wHyX]:L.G]~PaAa!ni0u/w!,;~~Le4YZ2F|M1>", "5FI8Ko.+~(LPr?mZasQ4OhOZ}NhYMUC!}fv+yN*hJp^1Al", 'lc?FFzJ+g9Fg!/71wD&Q"NZukNTQ]GT]Fc>', "wf3Lp)AaU~iu;>NgrQa{/V+j]^d*wtwZ!qlI9)^AL", "$Q/|}jT", "eK[{#UjW4jdIT>[IVDE<jQwIbu3_[Cu1", "w)43bkkz`D2Q6!TWn!2", "d0ZFPB},z?z_J>", "1G:g.y@Q{wOE*tT,&>ua<hAIiwt:Vn.gumI8e/>N<H4MhYq8", ":FL8A(HVV.U", "asiM`3ha_XIj3/s._QNlrnj7L", "Aw_(*nT~;p?t{>UsXPp|D_T", "J?L(Lyzee.C", 'iqTW?qb+y^k{pqnZKc"|Hn}ujHJHLfivO:(+.yT', 't6(YhN"u}."gb?uvco,YWx1A7.c:jhzHP_Maf}y2R*5tbV6J', 'rq#3Rj"Z!jR8,2zI3olEZY{j{XeLx!Q1L.i<COT', "]6830(Me", "5I:qjNj.@DO:i>k1hT", "GDh88xAs`j1ye", "{8&FZsZuVK7?$>", "|L@NYb62a<ELe", "joKMOq)iYi`!+>^", "BXeS>Bk*Tz04R}!g3T", "oFvl/x6W3jY", "ElW8xCnuM0", 'xkn|H/ks_K4:v>H)^G@~@nkVM0;"M!h*<]E8K_]e', "16/<by_)(pM|jj.6Dox{)sZaf*K:C:f!`yDQ;Rqe=wGojYeJ*|$MH", "pPZ1w6wVpPetIl+1LmeL~|J//#xX6EwZ:k~W*", "Tlh8JR#i!HIh74#=<m(gX4;+rUfayhJs(6_+2o^AYm1(e", "=mqY{nT", "^I98^AZ*$Xf+E4ws@H(3!)O,N#4MWCg,ZI=@gwyiDU|Y/w,IPmr&pCy_W9", "CmQS:4<~g9A:*t|G+T", ";HiMZf6%M^F", "xwZF[nHe", "FDYSc6ti[#icMAqfzg(3]FBQQFRhS>N),qD~nkUJbuS0*0q!vcvl", "RP=44UD,HF4XEo*Zi.OqBCIIdH", 'bwU|||{J2i<4%Ge8gD9|S3zs)DO"X4,Zd^JxB/(,`H[SN4ov%Hz+!{?!a', "TIxa*AyWM.HJMJ7)*Qp(PhcJfj+g#1]!", "A>PFJC?*HFR7Qt~CrU(F5m|JJDi40RNsy>aP", "+pHL+:F2wp8JB0JsmPFa3yi:+FgaFYT=l.F+,CH*eKRKVCj/ZH@~", "wf&@$@T", "~qI(k7_+niqK2E[ryD2@VQ*a#.IJp>wZ.m1S1CVe", "q0QI./faa#X7F0C*0qWgLhG7Vza@}Y,ZX0q{?q~:U0", "1Up|aB{|@^yYj!k17kqFQ@sAJjF{@C{G8f2", "KQC8MAp2", ")1&@]zH:", "?nkA", "j/&A$4{", "?1CB", ",]>K!$(", "AD1ZR,Lt", '"DT2=uLt', "DDbZ", "AD65{})t", "jDJ,L,xt", "#_65WSIt", "MfH5x", "AD65L,xt", '#_1Z"sHt', ")*vhMuAt", "s#vMMS)t", "$?4M[5At", "3?u,5Oxt", "2_5i06]t", "z*T2|sxt", "MXu,!5+d", ".kkMw", "GD1Z", "bD6iV", "*fzMG", "2/q?1I&t", "4!CKw", "z*?MmBRt", "MK?hGu(", "AD65L,_G3V", "*&IM2$PVgH", "|LWTOOC73V", 'z*?MwS"t', "#_vMW,fd", "2_~Mas/t", "GXu,!5(", "B22`!!Dt", "P0Sh", "*G)2", "XsCg", "Kr)2", "jkheI", "NRWg", "w{Eh", "J!~h", "=DH5SO*t", "do;Z&.Yt", '"L$,OOLt', "~K8h", "E*CK", "3f?ME6]t", "4i8h", '"f8M},Ht', "fXCmfsRt", "[3xZsOxt", "q]$Jas(", "G/a/#5%t", "*2Stm:Zj", "QB!d~&VV", 'n@"Z5>/t', '08"3', "TUOr(9>f", "h40l%tVg", "E|YA5~k", ",S&H^PVt", 'GL"Z9Bpt', 'r/6,7")t', "CBm;6T23BMo4KnxxjeLlmm&`29hs+.I", "${PXIKU!!Wk", "#lZR<i0K", "*BMb&b6K", "#lKb;V~K", "~8U3mej", "=5D8nW>f", "PU*lA", "B?u,5Oxt", '"f8M~59t']), cS(uS = function(...SS) {
      cS(SS[GS[7]] = GS[0], SS[GS[6]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], SS[GS[1]] = GS[10], SS[GS[4]] = []);
      try {
        cS(SS[GS[1]] = Object, SS[GS[4]][GS[19]]("".__proto__.constructor.name))
      } catch (qS) {}
      SS: for (SS[GS[5]] = GS[0]; SS[GS[5]] < SS[GS[6]][GS[7]]; SS[GS[5]]++) try {
        for (SS[GS[1]] = SS[GS[6]][SS[GS[5]]](), SS[GS[2]] = GS[0]; SS[GS[2]] < SS[GS[4]][GS[7]]; SS[GS[2]]++)
          if (typeof SS[GS[1]][SS[GS[4]][SS[GS[2]]]] === GS[8]) continue SS;
        return SS[GS[1]]
      } catch (qS) {}
      return SS[GS[1]] || this
    }() || {}, IS = uS.TextDecoder, fS = uS.Uint8Array, kS = uS.CK, aS = uS.String || String, KS = uS.Array || Array, jS = function(...SS) {
      return cS(SS[GS[7]] = GS[0], SS[GS[9]] = new KS(GS[56]), SS[GS[1]] = aS[GS[16]] || aS.fromCharCode, SS[GS[11]] = []),
        function(...HS) {
          for (cS(HS[GS[7]] = GS[1], HS[GS[9]] = GS[10], HS[GS[11]] = GS[10], HS[GS[13]] = HS[GS[0]][GS[7]], SS[GS[11]][GS[7]] = GS[0]), HS[GS[12]] = GS[0]; HS[GS[12]] < HS[GS[13]];) cS(HS[GS[11]] = HS[GS[0]][HS[GS[12]]++], HS[GS[11]] <= GS[55] ? HS[GS[9]] = HS[GS[11]] : HS[GS[11]] <= 223 ? HS[GS[9]] = (31 & HS[GS[11]]) << GS[15] | HS[GS[0]][HS[GS[12]]++] & GS[14] : HS[GS[11]] <= 239 ? HS[GS[9]] = (HS[GS[11]] & GS[78]) << GS[18] | (HS[GS[0]][HS[GS[12]]++] & GS[14]) << GS[15] | HS[GS[0]][HS[GS[12]]++] & GS[14] : aS[GS[16]] ? HS[GS[9]] = (HS[GS[11]] & GS[17]) << 18 | (HS[GS[0]][HS[GS[12]]++] & GS[14]) << GS[18] | (HS[GS[0]][HS[GS[12]]++] & GS[14]) << GS[15] | HS[GS[0]][HS[GS[12]]++] & GS[14] : (HS[GS[9]] = GS[14], HS[GS[12]] += GS[5]), SS[GS[11]][GS[19]](SS[GS[9]][HS[GS[9]]] || (SS[GS[9]][HS[GS[9]]] = SS[GS[1]](HS[GS[9]]))));
          return SS[GS[11]].join("")
        }
    }());
    const QS = bS()[CS(GS[20])](),
      DS = bS()[CS(GS[20])](),
      wS = bS()[CS(GS[20])](),
      hS = bS()[CS(GS[20])](),
      ZS = bS()[CS(GS[20])](),
      JS = bS()[CS(GS[20])](),
      OS = bS()[CS(GS[20])](),
      dS = (SS, HS, gS) => {
        function tS(...SS) {
          return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = function(...SS) {
            for (cS(SS[GS[7]] = GS[1], SS[-GS[22]] = '{|:*!UmNA/B"7,l=LSpyFCx%hEK?8Z$X@oH[w);(f<q1b~r]_a}&D.vY9u+OPJT2jRtWz034G>ngQiM#c56k`eI^Vds', SS[GS[6]] = "" + (SS[GS[0]] || ""), SS[GS[5]] = SS[GS[6]].length, SS[GS[12]] = [], SS[GS[26]] = GS[0], SS[GS[15]] = GS[0], SS[GS[24]] = -GS[1]), SS[GS[21]] = GS[0]; SS[GS[21]] < SS[GS[5]]; SS[GS[21]]++)
              if (SS[GS[23]] = SS[-GS[22]].indexOf(SS[GS[6]][SS[GS[21]]]), SS[GS[23]] !== -GS[1])
                if (SS[GS[24]] < GS[0]) SS[GS[24]] = SS[GS[23]];
                else {
                  cS(SS[GS[24]] += SS[GS[23]] * GS[25], SS[GS[26]] |= SS[GS[24]] << SS[GS[15]], SS[GS[15]] += (SS[GS[24]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                  do {
                    cS(SS[GS[12]].push(SS[GS[26]] & GS[3]), SS[GS[26]] >>= GS[2], SS[GS[15]] -= GS[2])
                  } while (SS[GS[15]] > GS[17]);
                  SS[GS[24]] = -GS[1]
                } return SS[GS[24]] > -GS[1] && SS[GS[12]].push((SS[GS[26]] | SS[GS[24]] << SS[GS[15]]) & GS[3]), nS(SS[GS[12]])
          }(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
        }
        const XS = JS;
        return bS()[tS(96) + tS(97)](XS, gS), bS()[tS(98)](SS, XS, bS()[tS(GS[67])](XS, HS))
      };

    function cS() {
      cS = function() {}
    }
    xS = (...SS) => {
      function HS(...SS) {
        return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = function(...SS) {
          for (cS(SS[GS[7]] = GS[1], SS[GS[32]] = '(dtkobTchKZlLUjDRPAVH1N=9w*4x{GJM|]z"3)@_agf0#&EYQI?%;/2nXp~!:[yCe`v6B$u>mi+,5S<sO.8^}7rFWq', SS[GS[11]] = "" + (SS[GS[0]] || ""), SS[GS[5]] = SS[GS[11]].length, SS[GS[35]] = [], SS[-GS[34]] = GS[0], SS[GS[15]] = GS[0], SS[GS[17]] = -GS[1]), SS[GS[31]] = GS[0]; SS[GS[31]] < SS[GS[5]]; SS[GS[31]]++)
            if (SS[-GS[33]] = SS[GS[32]].indexOf(SS[GS[11]][SS[GS[31]]]), SS[-GS[33]] !== -GS[1])
              if (SS[GS[17]] < GS[0]) SS[GS[17]] = SS[-GS[33]];
              else {
                cS(SS[GS[17]] += SS[-GS[33]] * GS[25], SS[-GS[34]] |= SS[GS[17]] << SS[GS[15]], SS[GS[15]] += (SS[GS[17]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                do {
                  cS(SS[GS[35]].push(SS[-GS[34]] & GS[3]), SS[-GS[34]] >>= GS[2], SS[GS[15]] -= GS[2])
                } while (SS[GS[15]] > GS[17]);
                SS[GS[17]] = -GS[1]
              } return SS[GS[17]] > -GS[1] && SS[GS[35]].push((SS[-GS[34]] | SS[GS[17]] << SS[GS[15]]) & GS[3]), nS(SS[GS[35]])
        }(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
      }
      SS[GS[7]] = GS[2];
      const gS = SS[GS[0]][HS(GS[36])][HS(101) + HS(102) + HS(103)](SS[GS[1]]);
      SS[GS[2]] = SS[GS[0]][HS(GS[36])][HS(GS[49]) + HS(GS[50]) + HS(GS[51]) + HS(GS[52])](gS);
      const tS = SS[GS[2]] === GS[41] ? SS[GS[0]][HS(GS[36])][HS(GS[42]) + HS(GS[43]) + HS(GS[44]) + HS(GS[45])](SS[GS[1]], HS(GS[37]) + HS(GS[38]) + HS(GS[39]) + GS[40]) : SS[GS[2]][HS(GS[37]) + HS(GS[38]) + HS(GS[39]) + GS[40]],
        xS = SS[GS[2]] === GS[41] ? SS[GS[0]][HS(GS[36])][HS(GS[42]) + HS(GS[43]) + HS(GS[44]) + HS(GS[45])](SS[GS[1]], HS(GS[46]) + HS(GS[47]) + HS(GS[48])) : SS[GS[2]][HS(GS[46]) + HS(GS[47]) + HS(GS[48])];
      cS(bS()[HS(GS[86])](QS, GS[0], GS[0], SS[GS[26]]), bS().bu(QS, QS, bS()[HS(GS[82])], SS[GS[5]].heading), bS()[HS(120)](OS, SS[GS[12]].xG), OS[GS[1]] = GS[0]);
      const uS = SS[GS[11]][HS(121) + HS(122)]();
      if (cS(SS[GS[2]] = SS[GS[0]][HS(GS[36])][HS(GS[49]) + HS(GS[50]) + HS(GS[51]) + HS(GS[52])](gS), SS[GS[70]] = SS[GS[2]] === GS[41] ? SS[GS[0]][HS(GS[36])][HS(GS[42]) + HS(GS[43]) + HS(GS[44]) + HS(GS[45])](SS[GS[1]], HS(GS[53]) + HS(GS[54])) : SS[GS[2]][HS(GS[53]) + HS(GS[54])]), !uS && bS()[GS[66]](OS) && (SS[GS[2]] === GS[41] ? SS[GS[0]][HS(GS[36])][HS(125) + HS(126) + HS(GS[55])](SS[GS[1]], HS(GS[56]) + HS(GS[57]) + HS(GS[58]) + HS(GS[59])) : SS[GS[2]][HS(GS[56]) + HS(GS[57]) + HS(GS[58]) + HS(GS[59])])) {
        function KS(SS) {
          var HS, gS, tS, bS, XS, xS, NS;
          for (cS(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = GS[0], XS = GS[0], xS = -GS[1]), NS = GS[0]; NS < gS; NS++) {
            var qS = 'dNt[R+`8h2g1{mOGDz,|LCQ*9?rX}wZP~UvclBfy.V<sb&qKA>7]jWFu/5=S03Hn)T%o(!^kIYME@e4Jxpi6_$#:"a;'.indexOf(HS[NS]);
            if (qS !== -GS[1])
              if (xS < GS[0]) xS = qS;
              else {
                cS(xS += qS * GS[25], bS |= xS << XS, XS += (xS & GS[27]) > GS[28] ? GS[29] : GS[30]);
                do {
                  cS(tS.push(bS & GS[3]), bS >>= GS[2], XS -= GS[2])
                } while (XS > GS[17]);
                xS = -GS[1]
              }
          }
          return xS > -GS[1] && tS.push((bS | xS << XS) & GS[3]), nS(tS)
        }

        function jS(...SS) {
          return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = KS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
        }

        function CS(...SS) {
          cS(SS[GS[7]] = GS[0], SS[GS[65]] = function(...HS) {
            return cS(HS[GS[7]] = GS[1], HS[GS[1]] = []), (HS[GS[0]] === GS[1] || HS[GS[0]] >= GS[12]) && SS[GS[1]](HS[GS[1]], [], HS[GS[0]], GS[0]), HS[GS[1]]
          }, SS[GS[1]] = function(...HS) {
            for (HS[GS[7]] = GS[12], HS[GS[12]] = HS[GS[5]]; HS[GS[12]] < HS[GS[11]]; HS[GS[12]]++) {
              if (HS[GS[1]].length !== HS[GS[12]]) return;
              for (HS[GS[6]] = GS[0]; HS[GS[6]] < HS[GS[11]]; HS[GS[6]]++) SS[GS[62]](HS[GS[1]], [HS[GS[12]], HS[GS[6]]]) && (cS(HS[GS[1]].push([HS[GS[12]], HS[GS[6]]]), SS[GS[1]](HS[GS[0]], HS[GS[1]], HS[GS[11]], HS[GS[12]] + GS[1])), HS[GS[1]].length === HS[GS[11]] && HS[GS[0]].push(SS[GS[52]](HS[GS[1]])), HS[GS[1]].pop())
            }
          }, SS[GS[52]] = function(...SS) {
            for (cS(SS[GS[7]] = GS[1], SS[GS[9]] = [], SS[GS[11]] = SS[GS[0]].length), SS[GS[60]] = GS[0]; SS[GS[60]] < SS[GS[11]]; SS[GS[60]]++)
              for (SS[GS[9]][SS[GS[60]]] = "", SS[-GS[61]] = GS[0]; SS[-GS[61]] < SS[GS[11]]; SS[-GS[61]]++) SS[GS[9]][SS[GS[60]]] += SS[GS[0]][SS[GS[60]]][GS[1]] === SS[-GS[61]] ? "Q" : ".";
            return SS[GS[9]]
          }, SS[GS[62]] = function(...SS) {
            for (cS(SS[GS[7]] = GS[11], SS[GS[11]] = SS[GS[0]].length), SS[GS[63]] = GS[0]; SS[GS[63]] < SS[GS[11]]; SS[GS[63]]++) {
              if (SS[GS[0]][SS[GS[63]]][GS[0]] === SS[GS[1]][GS[0]] || SS[GS[0]][SS[GS[63]]][GS[1]] === SS[GS[1]][GS[1]]) return GS[64];
              if (Math.abs((SS[GS[0]][SS[GS[63]]][GS[0]] - SS[GS[1]][GS[0]]) / (SS[GS[0]][SS[GS[63]]][GS[1]] - SS[GS[1]][GS[1]])) === GS[1]) return GS[64]
            }
            return GS[94]
          }, console.log(SS[GS[65]]))
        }
        jS(132) in PS && CS(), cS(dS(DS, QS, OS), dS(wS, OS, QS), bS()[jS(133)](hS, OS, wS));
        const JS = bS()[jS(134)](OS),
          vS = bS()[jS(135)](QS, OS) / SS[GS[26]] / JS,
          ES = Math[jS(GS[71])](vS, GS[0]) + GS[1];
        if (SS[GS[26]] * SS[GS[26]] < bS()[GS[66]](wS)) {
          function LS(...SS) {
            for (cS(SS[GS[7]] = GS[1], SS[GS[68]] = 'V~foAhODaZeJRYpkLsFUmrEjbdNMIiGXtBSWcTHKlQg&]8?;{2"%w7,y0}#^=`*>zx9+5:[.3|4qv<$nP1/_6u(C!@)', SS[GS[11]] = "" + (SS[GS[0]] || ""), SS[-GS[67]] = SS[GS[11]].length, SS[GS[12]] = [], SS[GS[40]] = GS[0], SS[GS[69]] = GS[0], SS[GS[24]] = -GS[1]), SS[GS[21]] = GS[0]; SS[GS[21]] < SS[-GS[67]]; SS[GS[21]]++)
              if (SS[GS[23]] = SS[GS[68]].indexOf(SS[GS[11]][SS[GS[21]]]), SS[GS[23]] !== -GS[1])
                if (SS[GS[24]] < GS[0]) SS[GS[24]] = SS[GS[23]];
                else {
                  cS(SS[GS[24]] += SS[GS[23]] * GS[25], SS[GS[40]] |= SS[GS[24]] << SS[GS[69]], SS[GS[69]] += (SS[GS[24]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                  do {
                    cS(SS[GS[12]].push(SS[GS[40]] & GS[3]), SS[GS[40]] >>= GS[2], SS[GS[69]] -= GS[2])
                  } while (SS[GS[69]] > GS[17]);
                  SS[GS[24]] = -GS[1]
                } return SS[GS[24]] > -GS[1] && SS[GS[12]].push((SS[GS[40]] | SS[GS[24]] << SS[GS[69]]) & GS[3]), nS(SS[GS[12]])
          }

          function YS(...SS) {
            return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = LS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
          }
          bS()[YS(GS[81])](QS, QS, wS, ES)
        }
        cS(SS[GS[70]] = (0, XS.y)(SS[GS[70]], 1, Math[jS(GS[71])](GS[1], Math[jS(138)](GS[0], -vS, GS[1] - JS / SS[GS[26]]))), bS()[jS(139)](QS, QS, hS))
      }
      const IS = ZS;
      cS(bS()[HS(140)](IS, QS, OS), IS[GS[1]] = GS[0], SS[GS[72]] = bS()[HS(141)](IS)), uS || (SS[GS[72]] *= SS[GS[70]]);
      const fS = SS[GS[15]][HS(GS[79]) + HS(GS[31]) + HS(144)],
        kS = fS ? Math[HS(145)](fS, SS[GS[72]]) : SS[GS[72]];
      bS()[HS(146) + HS(147)](IS, IS);
      const aS = SS[GS[17]] !== GS[41] && void 0 !== SS[GS[17]] ? SS[GS[17]] : SS[GS[15]][HS(148) + HS(149) + HS(150) + HS(151)];
      if (kS > GS[0]) {
        function AS(...SS) {
          for (cS(SS[GS[7]] = GS[1], SS[GS[9]] = 'jftqs+;=38H%F&!SNK)7pI*MiAL:r,mlZ_^XnCV}/E$@ud5hk>#UvGwOQc9(J<?0~oT46`.e1g{a2BPyDz["]WbRYx|', SS[GS[73]] = "" + (SS[GS[0]] || ""), SS[GS[60]] = SS[GS[73]].length, SS[GS[12]] = [], SS[GS[76]] = GS[0], SS[GS[77]] = GS[0], SS[GS[17]] = -GS[1]), SS[-GS[74]] = GS[0]; SS[-GS[74]] < SS[GS[60]]; SS[-GS[74]]++)
            if (SS[GS[75]] = SS[GS[9]].indexOf(SS[GS[73]][SS[-GS[74]]]), SS[GS[75]] !== -GS[1])
              if (SS[GS[17]] < GS[0]) SS[GS[17]] = SS[GS[75]];
              else {
                cS(SS[GS[17]] += SS[GS[75]] * GS[25], SS[GS[76]] |= SS[GS[17]] << SS[GS[77]], SS[GS[77]] += (SS[GS[17]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                do {
                  cS(SS[GS[12]].push(SS[GS[76]] & GS[3]), SS[GS[76]] >>= GS[2], SS[GS[77]] -= GS[2])
                } while (SS[GS[77]] > GS[17]);
                SS[GS[17]] = -GS[1]
              } return SS[GS[17]] > -GS[1] && SS[GS[12]].push((SS[GS[76]] | SS[GS[17]] << SS[GS[77]]) & GS[3]), nS(SS[GS[12]])
        }

        function yS(...SS) {
          return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = AS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
        }

        function VS(...SS) {
          function HS(SS) {
            return typeof NS[SS] === GS[8] ? NS[SS] = function(...SS) {
              for (cS(SS[GS[7]] = GS[1], SS[GS[1]] = 'XVjCNJlWHBrFYRSUfEZDiAIMOKGknscmdabLTq_21=+@?oQh^tPgp(#~8,5<x{vw7)"!}4&:%9$0z63|u*`/;>[y.]e', SS[GS[6]] = "" + (SS[GS[0]] || ""), SS[GS[5]] = SS[GS[6]].length, SS[GS[78]] = [], SS[GS[79]] = GS[0], SS[GS[15]] = GS[0], SS[GS[17]] = -GS[1]), SS[GS[2]] = GS[0]; SS[GS[2]] < SS[GS[5]]; SS[GS[2]]++)
                if (SS[GS[23]] = SS[GS[1]].indexOf(SS[GS[6]][SS[GS[2]]]), SS[GS[23]] !== -GS[1])
                  if (SS[GS[17]] < GS[0]) SS[GS[17]] = SS[GS[23]];
                  else {
                    cS(SS[GS[17]] += SS[GS[23]] * GS[25], SS[GS[79]] |= SS[GS[17]] << SS[GS[15]], SS[GS[15]] += (SS[GS[17]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                    do {
                      cS(SS[GS[78]].push(SS[GS[79]] & GS[3]), SS[GS[79]] >>= GS[2], SS[GS[15]] -= GS[2])
                    } while (SS[GS[15]] > GS[17]);
                    SS[GS[17]] = -GS[1]
                  } return SS[GS[17]] > -GS[1] && SS[GS[78]].push((SS[GS[79]] | SS[GS[17]] << SS[GS[15]]) & GS[3]), nS(SS[GS[78]])
            }(qS[SS]) : NS[SS]
          }
          SS[GS[7]] = GS[0];
          const gS = require("path"),
            {
              version: tS
            } = require("../../package"),
            {
              version: bS
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: XS
            } = require("@redacted/components/package"),
            {
              sdkVersion: xS
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gS.resolve(__dirname, HS(GS[83]) + HS(GS[62]) + "js")
        }
        HS(152) in PS && VS();
        let iS = SS[GS[11]][yS(155) + yS(156)] * aS;
        if (!uS) {
          function zS(...SS) {
            for (cS(SS[GS[7]] = GS[1], SS[GS[1]] = 'k!gp?:ID=sAeP><6T(uHn_{JU%4}Y#^olLNh7|GFcmbqQ.)z9*$0"ZVBd`i,KaEfXWOv[R@+S2&rCwtj5~8]x/y13;M', SS[GS[80]] = "" + (SS[GS[0]] || ""), SS[GS[60]] = SS[GS[80]].length, SS[GS[12]] = [], SS[GS[40]] = GS[0], SS[GS[69]] = GS[0], SS[GS[81]] = -GS[1]), SS[GS[21]] = GS[0]; SS[GS[21]] < SS[GS[60]]; SS[GS[21]]++)
              if (SS[-GS[82]] = SS[GS[1]].indexOf(SS[GS[80]][SS[GS[21]]]), SS[-GS[82]] !== -GS[1])
                if (SS[GS[81]] < GS[0]) SS[GS[81]] = SS[-GS[82]];
                else {
                  cS(SS[GS[81]] += SS[-GS[82]] * GS[25], SS[GS[40]] |= SS[GS[81]] << SS[GS[69]], SS[GS[69]] += (SS[GS[81]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                  do {
                    cS(SS[GS[12]].push(SS[GS[40]] & GS[3]), SS[GS[40]] >>= GS[2], SS[GS[69]] -= GS[2])
                  } while (SS[GS[69]] > GS[17]);
                  SS[GS[81]] = -GS[1]
                } return SS[GS[81]] > -GS[1] && SS[GS[12]].push((SS[GS[40]] | SS[GS[81]] << SS[GS[69]]) & GS[3]), nS(SS[GS[12]])
          }

          function US(...SS) {
            return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = zS(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
          }

          function pS() {
            var SS = function(SS) {
              cS(this.hf = SS, this.length = GS[0], this.map = {}, this.head = GS[41], this.tail = GS[41])
            };
            cS(SS.prototype.get = function(...SS) {
              var HS;
              return cS(SS[GS[7]] = GS[1], HS = this.map[SS[GS[0]]]), HS ? (this.remove(HS), this.insert(HS.key, HS.val), HS.val) : -GS[1]
            }, SS.prototype.put = function(...SS) {
              cS(SS[GS[7]] = GS[11], this.map[SS[GS[0]]] ? (this.remove(this.map[SS[GS[0]]]), this.insert(SS[GS[0]], SS[GS[1]])) : this.length === this.hf ? (this.remove(this.head), this.insert(SS[GS[0]], SS[GS[1]])) : (this.insert(SS[GS[0]], SS[GS[1]]), this.length++))
            }, SS.prototype.remove = function(...SS) {
              cS(SS[GS[7]] = GS[1], SS[-GS[42]] = SS[GS[0]].prev, SS[GS[11]] = SS[GS[0]].next), SS[GS[11]] && (SS[GS[11]].prev = SS[-GS[42]]), SS[-GS[42]] && (SS[-GS[42]].next = SS[GS[11]]), this.head === SS[GS[0]] && (this.head = SS[GS[11]]), this.tail === SS[GS[0]] && (this.tail = SS[-GS[42]]), delete this.map[SS[GS[0]].key]
            }, SS.prototype.insert = function(SS, HS) {
              var gS = new List(SS, HS);
              cS(this.tail ? (this.tail.next = gS, gS.prev = this.tail, this.tail = gS) : (this.tail = gS, this.head = gS), this.map[SS] = gS)
            }, console.log(SS))
          }
          yS(GS[68]) + "l" in PS && pS(), iS *= SS[GS[11]][US(158) + US(159)]
        }
        let WS = SS[GS[11]][yS(160) + yS(GS[76]) + "ss"] * kS;
        if (kS < .3 && (WS *= kS), iS > WS) {
          yS(162) + "k" in PS && (module.exports = async (SS = (...SS) => {
            throw SS[GS[7]] = GS[0], new Error(function(...SS) {
              if (SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8]) return NS[SS[GS[0]]] = function(...SS) {
                for (cS(SS[GS[7]] = GS[1], SS[GS[1]] = 'H"DpnCa3,lbRIP#5LMchz[W~FS^G>0j6!|=Z*Kwx8g+B<rV;k.fs4Y/NOe_UvJoqA9{duEQTi)t2yXm$1?&7:(`}@%]', SS[GS[11]] = "" + (SS[GS[0]] || ""), SS[-GS[83]] = SS[GS[11]].length, SS[GS[4]] = [], SS[GS[40]] = GS[0], SS[-GS[84]] = GS[0], SS[GS[17]] = -GS[1]), SS[GS[21]] = GS[0]; SS[GS[21]] < SS[-GS[83]]; SS[GS[21]]++)
                  if (SS[GS[49]] = SS[GS[1]].indexOf(SS[GS[11]][SS[GS[21]]]), SS[GS[49]] !== -GS[1])
                    if (SS[GS[17]] < GS[0]) SS[GS[17]] = SS[GS[49]];
                    else {
                      cS(SS[GS[17]] += SS[GS[49]] * GS[25], SS[GS[40]] |= SS[GS[17]] << SS[-GS[84]], SS[-GS[84]] += (SS[GS[17]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                      do {
                        cS(SS[GS[4]].push(SS[GS[40]] & GS[3]), SS[GS[40]] >>= GS[2], SS[-GS[84]] -= GS[2])
                      } while (SS[-GS[84]] > GS[17]);
                      SS[GS[17]] = -GS[1]
                    } SS[GS[17]] > -GS[1] && SS[GS[4]].push((SS[GS[40]] | SS[GS[17]] << SS[-GS[84]]) & GS[3]);
                return nS(SS[GS[4]])
              }(qS[SS[GS[0]]]);
              return NS[SS[GS[0]]]
            }(163))
          }) => {
            const HS = new Set(process.argv.slice(GS[11]));
            if (!HS.has(function(...SS) {
                if (SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8]) return NS[SS[GS[0]]] = function(...SS) {
                  for (cS(SS[GS[7]] = GS[1], SS[-GS[87]] = ')7295"$t,G?=6q^UzydWN>B%pTEO&Y]1Xb/`;{ejvILf30A}8[umi!Fk+4n~(x<oc.lDCJ*#ZRr_S@hQKPwgVaHs|M:', SS[GS[85]] = "" + (SS[GS[0]] || ""), SS[GS[1]] = SS[GS[85]].length, SS[GS[4]] = [], SS[-GS[61]] = GS[0], SS[GS[89]] = GS[0], SS[-GS[88]] = -GS[1]), SS[-GS[86]] = GS[0]; SS[-GS[86]] < SS[GS[1]]; SS[-GS[86]]++)
                    if (SS[-GS[51]] = SS[-GS[87]].indexOf(SS[GS[85]][SS[-GS[86]]]), SS[-GS[51]] !== -GS[1])
                      if (SS[-GS[88]] < GS[0]) SS[-GS[88]] = SS[-GS[51]];
                      else {
                        cS(SS[-GS[88]] += SS[-GS[51]] * GS[25], SS[-GS[61]] |= SS[-GS[88]] << SS[GS[89]], SS[GS[89]] += (SS[-GS[88]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                        do {
                          cS(SS[GS[4]].push(SS[-GS[61]] & GS[3]), SS[-GS[61]] >>= GS[2], SS[GS[89]] -= GS[2])
                        } while (SS[GS[89]] > GS[17]);
                        SS[-GS[88]] = -GS[1]
                      } SS[-GS[88]] > -GS[1] && SS[GS[4]].push((SS[-GS[61]] | SS[-GS[88]] << SS[GS[89]]) & GS[3]);
                  return nS(SS[GS[4]])
                }(qS[SS[GS[0]]]);
                return NS[SS[GS[0]]]
              }(164))) {
              if (HS.size !== GS[1]) return GS[64];
              if (!HS.has("-v")) return GS[64]
            }
            return await (async () => {
              function HS(...SS) {
                return SS[GS[7]] = GS[1], typeof NS[SS[GS[0]]] === GS[8] ? NS[SS[GS[0]]] = function(...SS) {
                  for (cS(SS[GS[7]] = GS[1], SS[GS[1]] = 'uAKBMOrgpaRZ~4z@N(5o6Jl.|+9TmF?UPCY=vy0DqL"E$e%]!<3k:dtn>)Hc&71IxG[`iVs}w2fh/b#S_{Q*;8Wj^,X', SS[GS[6]] = "" + (SS[GS[0]] || ""), SS[GS[91]] = SS[GS[6]].length, SS[GS[93]] = [], SS[-GS[92]] = GS[0], SS[GS[15]] = GS[0], SS[GS[49]] = -GS[1]), SS[GS[90]] = GS[0]; SS[GS[90]] < SS[GS[91]]; SS[GS[90]]++)
                    if (SS[GS[23]] = SS[GS[1]].indexOf(SS[GS[6]][SS[GS[90]]]), SS[GS[23]] !== -GS[1])
                      if (SS[GS[49]] < GS[0]) SS[GS[49]] = SS[GS[23]];
                      else {
                        cS(SS[GS[49]] += SS[GS[23]] * GS[25], SS[-GS[92]] |= SS[GS[49]] << SS[GS[15]], SS[GS[15]] += (SS[GS[49]] & GS[27]) > GS[28] ? GS[29] : GS[30]);
                        do {
                          cS(SS[GS[93]].push(SS[-GS[92]] & GS[3]), SS[-GS[92]] >>= GS[2], SS[GS[15]] -= GS[2])
                        } while (SS[GS[15]] > GS[17]);
                        SS[GS[49]] = -GS[1]
                      } SS[GS[49]] > -GS[1] && SS[GS[93]].push((SS[-GS[92]] | SS[GS[49]] << SS[GS[15]]) & GS[3]);
                  return nS(SS[GS[93]])
                }(qS[SS[GS[0]]]) : NS[SS[GS[0]]]
              }
              return void 0 === await SS() ? HS(167) + "l)" : ""
            })(), GS[94]
          }), iS = WS
        }
        cS(bS()[yS(168)](IS, IS, iS), SS[GS[12]][yS(169) + yS(170)](IS))
      }
      SS[GS[12]][HS(GS[61]) + GS[95]] = SS[GS[11]][HS(172) + HS(GS[38]) + GS[95]] * (uS ? tS : xS)
    }
  },
  37680: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS,
      f: () => NS
    });
    var tS = gS(37685),
      bS = gS(2022);
    const XS = 2,
      xS = 1,
      NS = {
        gu: 1,
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

    function qS(SS, HS, gS, NS, qS, uS, IS) {
      if (qS.speed) return (0, tS.d)(HS, gS, NS, qS, uS, IS, SS), void(qS.ticksToReachMaxIdleFriction = XS);
      const fS = NS.isOnGround(),
        kS = HS.bloxd.getSyncedClientOptions(HS.bloxd.getPlayerReader(gS)),
        aS = null === kS ? HS.bloxd.getClientPredictedOption(gS, "groundFrictionScale") : kS.groundFrictionScale,
        KS = null === kS ? HS.bloxd.getClientPredictedOption(gS, "airFrictionScale") : kS.airFrictionScale,
        jS = fS ? aS : KS,
        GS = Math.max(xS, jS),
        CS = qS.ticksToReachMaxIdleFriction / XS,
        nS = (0, bS.y)(GS, jS, CS);
      uS.friction = SS.standingFriction * ((null === kS ? HS.bloxd.getClientPredictedOption(gS, "airMomentumConservation") : kS.airMomentumConservation) ? nS : jS), qS.ticksToReachMaxIdleFriction > 0 && qS.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);