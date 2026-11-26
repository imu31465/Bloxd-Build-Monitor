export const id = 252;
export const ids = [252];
export const modules = {
  39342: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => uH
    });
    var AH = LH(176),
      rH = LH(38491);
    const SH = 1.2,
      hH = {
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
        rE: .5,
        cLH: !1
      },
      tH = {
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
        rE: .5,
        cLH: !1
      },
      zH = {
        physicsBodyDimensions: {
          width: AH.g.JW,
          height: AH.g.iW
        },
        hitBoxDimensions: {
          width: AH.g.JW + .4,
          height: AH.g.iW + .6
        },
        eyeHeight: AH.g.iW * AH.g.playerEyeToHeightRatio,
        rideHeight: AH.g.iW - .3,
        rE: .5,
        cLH: !1
      },
      CH = {
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
        rE: .5,
        cLH: !1
      },
      EH = {
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
        rE: .5,
        cLH: !1
      },
      XH = {
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
        rE: .5,
        cLH: !1
      },
      GH = {
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
        rE: .5,
        cLH: !1
      },
      YH = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: AH.g.JW,
            height: AH.g.iW
          },
          hitBoxDimensions: {
            width: AH.g.JW + .4,
            height: AH.g.iW + .6
          },
          eyeHeight: AH.g.iW * AH.g.playerEyeToHeightRatio,
          rideHeight: AH.g.iW - .1,
          rE: rH.d.rE,
          cLH: !0
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
        },
        Camel: {
          modelScale: SH,
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
        },
        "Cave Golem": hH,
        "Draugr Zombie": {
          ...zH,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": zH,
        "Frost Golem": hH,
        "Frost Zombie": {
          ...zH,
          defaultPose: "zombie"
        },
        "Frost Skeleton": zH,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: AH.g.JW,
            height: AH.g.iW
          },
          hitBoxDimensions: {
            width: AH.g.JW + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          rE: .5,
          cLH: !1
        },
        Wolf: CH,
        Bear: EH,
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
          rE: .5,
          cLH: !1
        },
        Stag: XH,
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
          rE: .5,
          cLH: !1
        },
        Gorilla: GH,
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
          rE: .5,
          cLH: !1
        },
        "Draugr Huntress": zH,
        "Magma Golem": hH,
        "Spirit Golem": hH,
        "Spirit Wolf": CH,
        "Spirit Bear": EH,
        "Spirit Stag": XH,
        "Spirit Gorilla": GH,
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: AH.g.JW,
            height: AH.g.iW
          },
          hitBoxDimensions: {
            width: AH.g.JW + .4,
            height: AH.g.iW + .6
          },
          eyeHeight: AH.g.iW * AH.g.playerEyeToHeightRatio,
          rideHeight: AH.g.iW - .1,
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: AH.g.JW,
            height: AH.g.iW
          },
          hitBoxDimensions: {
            width: AH.g.JW + .4,
            height: AH.g.iW + .6
          },
          eyeHeight: AH.g.iW * AH.g.playerEyeToHeightRatio,
          rideHeight: AH.g.iW - .1,
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
        },
        Zombie: {
          ...zH,
          defaultPose: "zombie"
        },
        Skeleton: zH,
        Mummy: {
          ...zH,
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
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
          rE: .5,
          cLH: !1
        },
        "Iron Guardian": tH,
        "Gold Guardian": tH,
        "Diamond Guardian": tH,
        "Moonstone Guardian": tH,
        "Iron Goofy Golem": tH,
        "Gold Goofy Golem": tH,
        "Diamond Goofy Golem": tH,
        "Moonstone Goofy Golem": tH,
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
          rE: .5,
          cLH: !1
        }
      };

    function uH(HH) {
      return YH[HH]
    }
  },
  37941: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = {
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
  38499: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(330),
      rH = LH.n(AH),
      SH = LH(1962);
    let hH;
    var tH, zH, CH, EH, XH, GH, YH, uH, QH;
    const WH = ["b", 0, 1, "h", 3, 179, 9, 7, 48, 6, 4, 8, 255, "length", "undefined", void 0, "d", 2, 63, "fromCodePoint", 12, "push", 91, 8191, 88, 13, 14, 192, 106, 5, "f", 96, 107, 108, "e", null, 103, 104, 105, 109, 110, 111, 121, 122, 127, 128, 89, 138, 58, "bu", "c", 204, 75, 73, 133, 226, 71, "g", 67, 220, 243, 239, 1023, 65536, 10, 55296, 56320, 119, "i", 202, 31, 15, 18, 64, 86, 191, "a", 170, 224, 245, 131, 167, 240, 156, !1, 132, 98, 222, 244, 231, 62, "on"];

    function MH(...HH) {
      return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
        for (oH(HH[WH[13]] = WH[2], HH[-WH[5]] = 'JwQzaD(U?:t$%4+Y;R[.SXHu>n"1s3#AjL@VB7TNgx)!9<8p&E=IbhP^}oy~qr`26*Omef/_Zc|C0dvF]MGW{,5liKk', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[4]] = HH[WH[0]].length, HH[WH[10]] = [], HH[WH[8]] = WH[1], HH[WH[9]] = WH[1], HH[WH[7]] = -WH[2]), HH[WH[3]] = WH[1]; HH[WH[3]] < HH[WH[4]]; HH[WH[3]]++)
          if (HH[WH[6]] = HH[-WH[5]].indexOf(HH[WH[0]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
            if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[6]];
            else {
              oH(HH[WH[7]] += HH[WH[6]] * WH[22], HH[WH[8]] |= HH[WH[7]] << HH[WH[9]], HH[WH[9]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
              do {
                oH(HH[WH[10]].push(HH[WH[8]] & WH[12]), HH[WH[8]] >>= WH[11], HH[WH[9]] -= WH[11])
              } while (HH[WH[9]] > WH[7]);
              HH[WH[7]] = -WH[2]
            } return HH[WH[7]] > -WH[2] && HH[WH[10]].push((HH[WH[8]] | HH[WH[7]] << HH[WH[9]]) & WH[12]), xH(HH[WH[10]])
      }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
    }

    function xH(...HH) {
      return HH[WH[13]] = WH[2], typeof EH !== WH[14] && EH ? (new EH).decode(new XH(HH[WH[1]])) : typeof GH !== WH[14] && GH ? GH.from(HH[WH[1]]).toString("utf-8") : QH(HH[WH[1]])
    }

    function vH() {}
    oH(tH = {}, zH = ['?"xC%^7.M2X*uGsu7"9d&Cy8nRi|vQ', 'sP"1>be81*(QD;4', ",/kINrQ[pYX(V+v1", "K`St{vE24~Z?oaA3]/z=bZ5%&OF24;Xx^*%A@V9>C}/8[Mcna|et^GsB@q5mJ", "@|;LwBb#&[+yJ1yV>_9t<dJ[=%*E_/MN!Iw", ">jcIY0bb`hmX:{VR/7@I[MtyU^u(S~!.P<_E;", "G<%dS0!V4[:;4;jRq`~?DZ8QUSfc,])n>Y{hT,N.o*tZP7#)", "5&#^Mo`Q~+Oct+4", "!*bhHoPbmPIA]W6[", 'V7vAffq8&YS&^GlHPu1Z^ymuLoCh#rF"@!t1^Gr3R:zF{aEN1|(U3WXxp[h', "(qL#B,]>fPpEyf$.A7uaHgEUgy=[3ZU..2&Ic&c3)*jFWQnu6IaU.", "{zk?sg7pI.ccaYi39S+b&erw", "._*(`@PQm6k3|n.@M<:1Lgz4w%.($+t", "FRzd2{mu!S$(0_mR]$r|>oyy(", "|(oP=G>#4`lnBzQ>2`haR_/(w%", "nevU{WO8ZS(F$1`#~_a3C`3x<~|HoZ:", "dsrULPKVL%5BX;41}`IZVp)>!+Z]FY@>}u]E&NRfAYJ:w", "O&~?>_0@}yZcrqENuIIj~/h3X.wCN/5g(w", '6gbhi=KV(t:rD&k)l/8cKo"bv~I$iYkHrg:vs,r4_60]MERN0Sz', "b@2cqqp4W:ec=yz7O7PUWT>8%R1Ru+mRO&Db%", "6PVZMBhU+2u`o&kxDP$3C`hwK`R>#D$", "r+pb(B(8v[A+w", "Wz;#BrRh0`g0BW3Rs3d=X_^3DPW/~+ZA!(1d4", "q&L(}@KVo*VA;W#)N`FbubAVm:#Al+w)UoztyIz4|S@f[rw!dJ", "jY|?b/Vpv}/[wq&N[2XAFf|%,y]/`f&gH_zjL,}Q", "=(@ZDMNVj%xz{z})<ge30&5`Fhd2w", "F@f|CWwxg4BZhqnxcInI|T:U%RP[naKHhu*PGoJ", 'Lg=1&y>BG.3Z`4T.0~[dvTf4s`pcJzE">P[CvM##n`]mYY$', "|Az3qhFIRY=", "NoBANpj6,4]ETE:.jzkI1", 'D[f"(@9]OPK|qzwB`zVdp2^4b:E>(r^Vyu]:ib=8Goh', '73E(1gW3/.%*5EoVQYPbz&<VO%*Vi~9."|`A>', '"e13MoSB}4haXqx.L(nv>bf4~~G[lQV#|~w', "m7G?>b<Vn*MD{YIs2Rk?$=TBy$N0:B$TH_S^E//(<Ocm{z", 'm<,s/&q>62NA0~UTe(:#`qE2a6>Zm1[gV!0"9IYp]2*[YQ<"r*l(GW)>YO>', "o~wPwZuh+Ov?gz`uo<xjryD4cy_qD&j>:w", "W/Vj)GT[L[Q1QnRNz2Kj$MAVSP&~w", "sPxj3p$U>yVf37O[EAZ(i_XU4+o0Baf>R:,|QhmVUygsw", 'C7qd)/zxC?&aVQ13("P0tf/(gS@~e1YSd@:CYM.UEOTb)7/7r`>#@]B#lS}', "S30dw&6#9h5mnE{sSYz", 'IPmDVc(/<$C|A1Q[N%<tML*4AO%t~+ksEPHA"', "/)jcxE:ML:`O2/t", "Aem3^hHBz", '6AXAEee[9hj*."ks3q3A#P<.b49&?1A#x_pEhNEVL%GqtDEgI:"Z:`+Q', "q~&P8rA.cRLzaz~)uezZ>_Z%B6OOh;VRv/5a}2&#q?Y`ATAu%|{hCMMVX4E", 'HqC"qdyg*:,|B;_7n_RIv^}QW6.&<Zd1(PJvmFXh`~G?l/]g1*b3BCO#z', "(3J#z|R322y}n&p1xojE]0I47P.1Pnqx~_N0IyVVl4w1sWO>", "qe]EVrUw0R+RJ_w7F`ZcAPUUS4|H=rvgW/J#/`#Qz6FM<&CNsw", 'QEZ:|`(/mo`w$T`>"|OjlfMwl6BbW"1RLodAYoX.%+{jyf~xOJ', '?o~3>=`yM2n4614.s7)C4fe(n+GEiYp"#qQ', "5+&:wNMF`[k?6WKs", "bPyhAbD2@qn>fqRShz;PFo9[pXIforisSqvssP*u:SSG0Yns]/,sJ|E,(", "+o?#>~p.qRGm[7y)g`Ih[W+Ba", "y:+U6@O>3[`c8Gl3ue[jpeCUF}y~eYusNIt19I<V5.Q@Qnt", "F`<s*{n.(.}", "Sq0U|0>8[Y/OD;kHB!P^@bRhc+wCK>`)/)z", 'M@JPi0!U8$tt~+~uYYAcwB2w2}5/1W$"}<%t+0g8z6rE.G?"K*v:J5p,]qpfJ', 'h@?:kbXM{P@Z*f#3|&bt^8A2?S?:T4RN4"z', "woVt9GKUq?Ayw", "!3jE|BRwY%}aiW?", 'D%nC~ds?2}$@ras#Y!n(~h>]=q@XiV;"w%)177wxa', "B_HEX_R.xRU:3&&@1w", "L(4Aw^loqRV0}YYS;PxI7]55][!UuTl@=glE_BV.0RwPoB@7Rq/sl,Iu8$", "tgj:>b[8U", "O&hsF<M4wo@FB~Q[9**I<7tBB6HAZzV7}&Q", "wPe|i_4.q+O[%z", "?[n#@Eu3)+ld0Y2RT_6:6y:fAX", "<Rus7Cbb1+Dy2y5Ht2QC<eMVOq5oF+&@!`J#X_Xw", "fI$|MBlVJ%A`2y[g97<tz5XfZS7ZI/=@W<5a+Ba5SP%u5M`)|(R(;|J", "C+~jfq>Q", "L:6ET,q#I6N", "&@mj`{mxz:Sz!Q51uguLmhMU)*.^9z", "!*&:S=YpO2E~PnP1(u5s&EJ", "T3H^Jq%>mqw#;W:APJ", '}Pbh(h%8X61`!",V3_#syIKVA[kw*&JuA!~?tTKuN4', "Ms;(8}|#!$IXJ1S1i(B|9I[Bz%F}&WJ)wo]E,oJ", "Yo=?Sg6%*Y.toBxN33z", "p`8UY=hpd+mOaYJ#C+;:", "7Sr|d&Xp623ZC+N>uw", "Sog#/BBb+YaF`/oxqA5Uto{|9}$@naU", '0((b,_]8P4&U~G_.H:_a"09geoGD,&+', "1q5sJFVUB6`X<;N.)%j#YMJ[:^q+spz!2~eDWMcU9+", "s8ZP[`}b{PgcEnRN,sg#Tr3..:F$bYQ>N7Vd0=Rhz", "}zE(:oe#eoodUG;N*zV3,~wnwYmV[D&1ZIJvdMW3K*)", "NSyI1V)#*[g", "?a?Lj]V4Py]hJN(TKIvUrFBQ!}>(eY9.;q_:_B6[<[RFo7rVc~w#(&z.a", "HjC3jpm3%XS0w", "q@%|d074z%iwKa4", 'v/vEf&:h%~e/,az[H"S3^N,3Xy>*)n+', 'f`6Pd|[b"+1>D;CTH:>#~8k8EOK|D{wur&cIcM~,phjFSZ~RO:Q', "NI+^l~WoSP+eKqMN,<4t", "OITAdMSQ", "jiq#$:or", "ap3G", ".HqG64]", "aiuc", "8f0=x6d", "lzTn~8{t", "pzXuPJ{t", "zzOn", "lzeRYH>1X", "%{qOyN|BX", "@@w=zN1/X", "lzeR{8vrZ1", 'F$4"u6[1`g', "%{aX//UjZ1", '6h>"ERlt', "ZhJ8R/;t", "uvRNmeft", "7FXu%B;t", '"^J8xR#M', 'Ikk"L', "rzTn", "OzeN1", 'F@7"r', "uS|hT4$t", ">xU=L", "lzeRYH+t", "Azc8{8;t", "!veRab4t", '"@gR;', '7Fh".*~t', '"=hirJd', '7Fh"Lbpt', '!v2"a8@M', 'uv9"sBSt', "r^J8xRd", '7Fh"Lb(rZ1', '"x{R,b>18[', "yKhizN1/X", ")[2S", "rWaM", "k*!b", "tIaM", "MKDP5", "xPeb", "|i:S", "cx9i", "PzgRb/Ft", "MDQn$I(t", "p{68//{t", "9=Ci", "<FU=", 'Z@h"<eft', ">NCi", 'p@C"H8|B`g', "W`3R>J#YX1", "SFB=yN@y_", "u(.i[3sM", "JuGy?xgd", "bD^e5Mhd", "#Fyju]Q", "SjK,Ae7O=", "FJtm|:P:U", "pD[awl(]=", "648T*X{Zje(a}~/2J4QB~VA", '[vC"g8N}U49)b?_ZFxhizN1/KO]Bf&{', '[vC"g8N}KO]Bf&7:?vrc&qd', "Sz5:r~;L!N@8[/aPF+$KV;my3W%_i*c", "V>lB1$0?vPksBpY<M~lqBu:?$VP", "jV,?B%d", "25hoxtXw", "D[%1", "u:P1J>La", "sjP*", "$/G18Wxa", "fx5nsqe", "0oIe`WOa", "4/P1S3{a", "W1OMZV$|", "FjG*fg~", "HJqjuY>i", "WG)#8", "*hJ8R/;t", 'p@C"9R}t']), oH(CH = function() {
      var HH, BH, LH, AH = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      oH(HH = void 0, BH = []);
      try {
        oH(HH = Object, BH[WH[21]]("".__proto__.constructor.name))
      } catch (XH) {}
      HH: for (LH = WH[1]; LH < AH[WH[13]]; LH++) try {
        var rH;
        for (HH = AH[LH](), rH = WH[1]; rH < BH[WH[13]]; rH++)
          if (typeof HH[BH[rH]] === WH[14]) continue HH;
        return HH
      } catch (XH) {}
      return HH || this
    }() || {}, EH = CH.TextDecoder, XH = CH.Uint8Array, GH = CH.rX, YH = CH.String || String, uH = CH.Array || Array, QH = function() {
      var HH, BH, LH = new uH(WH[45]);
      return oH(HH = YH[WH[19]] || YH.fromCharCode, BH = []),
        function(...AH) {
          for (oH(AH[WH[13]] = WH[2], AH[WH[2]] = WH[15], AH[WH[17]] = WH[15], AH[WH[4]] = AH[WH[1]][WH[13]], BH[WH[13]] = WH[1]), AH[WH[16]] = WH[1]; AH[WH[16]] < AH[WH[4]];) oH(AH[WH[17]] = AH[WH[1]][AH[WH[16]]++], AH[WH[17]] <= WH[44] ? AH[WH[2]] = AH[WH[17]] : AH[WH[17]] <= 223 ? AH[WH[2]] = (AH[WH[17]] & WH[70]) << WH[9] | AH[WH[1]][AH[WH[16]]++] & WH[18] : AH[WH[17]] <= WH[61] ? AH[WH[2]] = (AH[WH[17]] & WH[71]) << WH[20] | (AH[WH[1]][AH[WH[16]]++] & WH[18]) << WH[9] | AH[WH[1]][AH[WH[16]]++] & WH[18] : YH[WH[19]] ? AH[WH[2]] = (AH[WH[17]] & WH[7]) << WH[72] | (AH[WH[1]][AH[WH[16]]++] & WH[18]) << WH[20] | (AH[WH[1]][AH[WH[16]]++] & WH[18]) << WH[9] | AH[WH[1]][AH[WH[16]]++] & WH[18] : (AH[WH[2]] = WH[18], AH[WH[16]] += WH[4]), BH[WH[21]](LH[AH[WH[2]]] || (LH[AH[WH[2]]] = HH(AH[WH[2]]))));
          return BH.join("")
        }
    }());
    const PH = rH()[MH(WH[22])](),
      TH = rH()[MH(WH[22])](),
      UH = rH()[MH(WH[22])](),
      VH = rH()[MH(WH[22])](),
      OH = rH()[MH(WH[22])](),
      bH = rH()[MH(WH[22])](),
      kH = rH()[MH(WH[22])](),
      mH = (...HH) => {
        function BH(...HH) {
          return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(HH) {
            var BH, LH, AH, rH, SH, hH, tH;
            for (oH(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = WH[1], SH = WH[1], hH = -WH[2]), tH = WH[1]; tH < LH; tH++) {
              var zH = ']UrJZdVeGHcbhATWCIlFfugXM!}a{<62#vo[`j,~DPwi^8K$&)Lq*1+xyY%N"@BO._R;:tS4/Qp=|zk>(7m390sE5?n'.indexOf(BH[tH]);
              if (zH !== -WH[2])
                if (hH < WH[1]) hH = zH;
                else {
                  oH(hH += zH * WH[22], rH |= hH << SH, SH += (hH & WH[23]) > WH[24] ? WH[25] : WH[26]);
                  do {
                    oH(AH.push(rH & WH[12]), rH >>= WH[11], SH -= WH[11])
                  } while (SH > WH[7]);
                  hH = -WH[2]
                }
            }
            return hH > -WH[2] && AH.push((rH | hH << SH) & WH[12]), xH(AH)
          }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
        }
        HH[WH[13]] = WH[4];
        const LH = bH;
        return rH()[BH(92) + BH(93)](LH, HH[WH[17]]), rH()[BH(94)](HH[WH[1]], LH, rH()[BH(95)](LH, HH[WH[2]]))
      };

    function oH() {
      oH = function() {}
    }
    hH = (...HH) => {
      function BH(...HH) {
        return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
          for (oH(HH[WH[13]] = WH[2], HH[-WH[28]] = 'dMtkDOX_i=n:{yAz~[l1gT,P}LF>;Yrc"%f7pZ+Vvs`@m!$<(?4h3QSuo^59x&EKU])2e*6J0.N#8RbwB/ICqHjGWa|', HH[-WH[7]] = "" + (HH[WH[1]] || ""), HH[-WH[27]] = HH[-WH[7]].length, HH[WH[16]] = [], HH[WH[29]] = WH[1], HH[WH[30]] = WH[1], HH[WH[7]] = -WH[2]), HH[WH[3]] = WH[1]; HH[WH[3]] < HH[-WH[27]]; HH[WH[3]]++)
            if (HH[WH[6]] = HH[-WH[28]].indexOf(HH[-WH[7]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
              if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[6]];
              else {
                oH(HH[WH[7]] += HH[WH[6]] * WH[22], HH[WH[29]] |= HH[WH[7]] << HH[WH[30]], HH[WH[30]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                do {
                  oH(HH[WH[16]].push(HH[WH[29]] & WH[12]), HH[WH[29]] >>= WH[11], HH[WH[30]] -= WH[11])
                } while (HH[WH[30]] > WH[7]);
                HH[WH[7]] = -WH[2]
              } return HH[WH[7]] > -WH[2] && HH[WH[16]].push((HH[WH[29]] | HH[WH[7]] << HH[WH[30]]) & WH[12]), xH(HH[WH[16]])
        }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
      }
      HH[WH[13]] = WH[11];
      const LH = HH[WH[1]][BH(WH[31])][BH(97) + BH(WH[86]) + BH(99)](HH[WH[2]]);
      HH[WH[11]] = HH[WH[1]][BH(WH[31])][BH(100) + BH(101) + BH(102) + "s"](LH);
      const AH = HH[WH[11]] === WH[35] ? HH[WH[1]][BH(WH[31])][BH(WH[36]) + BH(WH[37]) + BH(WH[38])](HH[WH[2]], BH(WH[28]) + BH(WH[32]) + BH(WH[33]) + WH[34]) : HH[WH[11]][BH(WH[28]) + BH(WH[32]) + BH(WH[33]) + WH[34]],
        hH = HH[WH[11]] === WH[35] ? HH[WH[1]][BH(WH[31])][BH(WH[36]) + BH(WH[37]) + BH(WH[38])](HH[WH[2]], BH(WH[39]) + BH(WH[40]) + BH(WH[41])) : HH[WH[11]][BH(WH[39]) + BH(WH[40]) + BH(WH[41])];
      oH(rH()[BH(112)](PH, WH[1], WH[1], HH[WH[29]]), rH().iQ(PH, PH, rH()[BH(113)], HH[WH[4]].heading), rH()[BH(114)](kH, HH[WH[10]].EW), kH[WH[2]] = WH[1]);
      const CH = HH[WH[17]][BH(115) + BH(116)]();
      if (oH(HH[WH[11]] = HH[WH[1]][BH(WH[31])][BH(117) + BH(118) + BH(WH[67]) + BH(120)](LH), HH[WH[6]] = HH[WH[11]] === WH[35] ? HH[WH[1]][BH(WH[31])][BH(WH[36]) + BH(WH[37]) + BH(WH[38])](HH[WH[2]], BH(WH[42]) + BH(WH[43])) : HH[WH[11]][BH(WH[42]) + BH(WH[43])]), !CH && rH()[WH[49]](kH) && (HH[WH[11]] === WH[35] ? HH[WH[1]][BH(WH[31])][BH(WH[36]) + BH(WH[37]) + BH(WH[38])](HH[WH[2]], BH(123) + BH(124) + BH(125) + BH(126)) : HH[WH[11]][BH(WH[44]) + BH(WH[45]) + BH(129)])) {
        function uH(...HH) {
          for (oH(HH[WH[13]] = WH[2], HH[-WH[46]] = 'CxsgPlTVSMbqiB6W^"0}#!fr?1Ik7|y)wD&@%HR+U.J*XN5tv,uc4emOhE(2[93`an/_AzpY=LZ:8{$G<oK>FQdj~];', HH[WH[17]] = "" + (HH[WH[1]] || ""), HH[WH[4]] = HH[WH[17]].length, HH[-WH[48]] = [], HH[WH[29]] = WH[1], HH[WH[9]] = WH[1], HH[WH[7]] = -WH[2]), HH[WH[3]] = WH[1]; HH[WH[3]] < HH[WH[4]]; HH[WH[3]]++)
            if (HH[-WH[47]] = HH[-WH[46]].indexOf(HH[WH[17]][HH[WH[3]]]), HH[-WH[47]] !== -WH[2])
              if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[-WH[47]];
              else {
                oH(HH[WH[7]] += HH[-WH[47]] * WH[22], HH[WH[29]] |= HH[WH[7]] << HH[WH[9]], HH[WH[9]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                do {
                  oH(HH[-WH[48]].push(HH[WH[29]] & WH[12]), HH[WH[29]] >>= WH[11], HH[WH[9]] -= WH[11])
                } while (HH[WH[9]] > WH[7]);
                HH[WH[7]] = -WH[2]
              } return HH[WH[7]] > -WH[2] && HH[-WH[48]].push((HH[WH[29]] | HH[WH[7]] << HH[WH[9]]) & WH[12]), xH(HH[-WH[48]])
        }

        function QH(...HH) {
          return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = uH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
        }
        oH(mH(TH, PH, kH), mH(UH, kH, PH), rH()[QH(130)](VH, kH, UH));
        const MH = rH()[QH(WH[80])](kH),
          bH = rH()[QH(WH[85])](PH, kH) / HH[WH[29]] / MH,
          IH = Math[QH(WH[54])](bH, WH[1]) + WH[2];
        if (HH[WH[29]] * HH[WH[29]] < rH()[WH[49]](UH)) {
          function fH(...HH) {
            for (oH(HH[WH[13]] = WH[2], HH[-WH[51]] = 'xlQNZDTeUWPpRBbKu($*7]mMV`/#58JH}%jf<k1vyq!c~wXo@+)>[;h0&6,Yd{23nI.E_?G=a^rFg4LC9iAszO|S":t', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[0]].length, HH[WH[16]] = [], HH[WH[34]] = WH[1], HH[WH[9]] = WH[1], HH[-WH[53]] = -WH[2]), HH[WH[3]] = WH[1]; HH[WH[3]] < HH[WH[50]]; HH[WH[3]]++)
              if (HH[WH[52]] = HH[-WH[51]].indexOf(HH[WH[0]][HH[WH[3]]]), HH[WH[52]] !== -WH[2])
                if (HH[-WH[53]] < WH[1]) HH[-WH[53]] = HH[WH[52]];
                else {
                  oH(HH[-WH[53]] += HH[WH[52]] * WH[22], HH[WH[34]] |= HH[-WH[53]] << HH[WH[9]], HH[WH[9]] += (HH[-WH[53]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                  do {
                    oH(HH[WH[16]].push(HH[WH[34]] & WH[12]), HH[WH[34]] >>= WH[11], HH[WH[9]] -= WH[11])
                  } while (HH[WH[9]] > WH[7]);
                  HH[-WH[53]] = -WH[2]
                } return HH[-WH[53]] > -WH[2] && HH[WH[16]].push((HH[WH[34]] | HH[-WH[53]] << HH[WH[9]]) & WH[12]), xH(HH[WH[16]])
          }

          function lH(HH) {
            return typeof tH[HH] === WH[14] ? tH[HH] = fH(zH[HH]) : tH[HH]
          }
          rH()[lH(134)](PH, PH, UH, IH)
        }
        oH(HH[WH[6]] = (0, SH.p)(HH[WH[6]], 1, Math[QH(WH[54])](WH[2], Math[QH(135)](WH[1], -bH, WH[2] - MH / HH[WH[29]]))), rH()[QH(136)](PH, PH, VH))
      }
      const EH = OH;
      oH(rH()[BH(137)](EH, PH, kH), EH[WH[2]] = WH[1], HH[WH[50]] = rH()[BH(WH[47])](EH)), CH || (HH[WH[50]] *= HH[WH[6]]);
      const XH = HH[WH[9]][BH(139) + BH(140) + BH(141)],
        GH = XH ? Math[BH(142)](XH, HH[WH[50]]) : HH[WH[50]];
      rH()[BH(143) + BH(144)](EH, EH);
      const YH = HH[WH[7]] !== WH[35] && void 0 !== HH[WH[7]] ? HH[WH[7]] : HH[WH[9]][BH(145) + BH(146) + BH(147)];
      if (GH > WH[1]) {
        function KH(...HH) {
          for (oH(HH[WH[13]] = WH[2], HH[-WH[55]] = '~iatlTmH*je(cIwoK[R?{h)^Z8/C}0f#1.`$udO%L=2:"UJ;&>nGp4x|b+S_!<AsFXDkN]@gQ76z53Wrq9,PVYvyMEB', HH[WH[17]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[17]].length, HH[WH[10]] = [], HH[WH[29]] = WH[1], HH[WH[9]] = WH[1], HH[WH[57]] = -WH[2]), HH[WH[11]] = WH[1]; HH[WH[11]] < HH[WH[50]]; HH[WH[11]]++)
            if (HH[-WH[56]] = HH[-WH[55]].indexOf(HH[WH[17]][HH[WH[11]]]), HH[-WH[56]] !== -WH[2])
              if (HH[WH[57]] < WH[1]) HH[WH[57]] = HH[-WH[56]];
              else {
                oH(HH[WH[57]] += HH[-WH[56]] * WH[22], HH[WH[29]] |= HH[WH[57]] << HH[WH[9]], HH[WH[9]] += (HH[WH[57]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                do {
                  oH(HH[WH[10]].push(HH[WH[29]] & WH[12]), HH[WH[29]] >>= WH[11], HH[WH[9]] -= WH[11])
                } while (HH[WH[9]] > WH[7]);
                HH[WH[57]] = -WH[2]
              } return HH[WH[57]] > -WH[2] && HH[WH[10]].push((HH[WH[29]] | HH[WH[57]] << HH[WH[9]]) & WH[12]), xH(HH[WH[10]])
        }

        function cH(...HH) {
          return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = KH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
        }

        function eH(...HH) {
          function LH(...HH) {
            return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
              for (oH(HH[WH[13]] = WH[2], HH[WH[59]] = 'Fxw_@:;=1{#!*,T[U<8CB~IRODA(XVhoYNvbc)Zy5+MPE|JiH"Wlz}^me?QGu24K7r]&p/q>t.d%9$6j0LSagskf`n3', HH[-WH[58]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[-WH[58]].length, HH[WH[10]] = [], HH[WH[34]] = WH[1], HH[WH[9]] = WH[1], HH[WH[60]] = -WH[2]), HH[WH[3]] = WH[1]; HH[WH[3]] < HH[WH[50]]; HH[WH[3]]++)
                if (HH[WH[6]] = HH[WH[59]].indexOf(HH[-WH[58]][HH[WH[3]]]), HH[WH[6]] !== -WH[2])
                  if (HH[WH[60]] < WH[1]) HH[WH[60]] = HH[WH[6]];
                  else {
                    oH(HH[WH[60]] += HH[WH[6]] * WH[22], HH[WH[34]] |= HH[WH[60]] << HH[WH[9]], HH[WH[9]] += (HH[WH[60]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                    do {
                      oH(HH[WH[10]].push(HH[WH[34]] & WH[12]), HH[WH[34]] >>= WH[11], HH[WH[9]] -= WH[11])
                    } while (HH[WH[9]] > WH[7]);
                    HH[WH[60]] = -WH[2]
                  } return HH[WH[60]] > -WH[2] && HH[WH[10]].push((HH[WH[34]] | HH[WH[60]] << HH[WH[9]]) & WH[12]), xH(HH[WH[10]])
            }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
          }
          HH[WH[13]] = WH[1],
            function(HH) {
              var LH, AH, rH, SH = String.fromCharCode;

              function hH(...HH) {
                for (oH(HH[WH[13]] = WH[2], HH[WH[2]] = [], HH[WH[0]] = WH[1], HH[WH[50]] = HH[WH[1]].length, HH[-WH[61]] = WH[15], HH[WH[29]] = WH[15]); HH[WH[0]] < HH[WH[50]];) oH(HH[-WH[61]] = HH[WH[1]].charCodeAt(HH[WH[0]]++), HH[-WH[61]] >= WH[65] && HH[-WH[61]] <= 56319 && HH[WH[0]] < HH[WH[50]] ? (HH[WH[29]] = HH[WH[1]].charCodeAt(HH[WH[0]]++), (64512 & HH[WH[29]]) == WH[66] ? HH[WH[2]].push(((HH[-WH[61]] & WH[62]) << WH[64]) + (HH[WH[29]] & WH[62]) + WH[63]) : (HH[WH[2]].push(HH[-WH[61]]), HH[WH[0]]--)) : HH[WH[2]].push(HH[-WH[61]]));
                return HH[WH[2]]
              }

              function CH(...HH) {
                if (HH[WH[13]] = WH[2], HH[WH[1]] >= WH[65] && HH[WH[1]] <= 57343) {
                  function BH(...HH) {
                    for (oH(HH[WH[13]] = WH[2], HH[-WH[67]] = 'Q*dJrcU=X!,>hK@F".CGZ$xBOj&/4v]#yt1IqE+ikATu62(agwnD^{`VYLoP)SsRpH;5l:m?M0zN9e[8W<f_b|7}~%3', HH[WH[17]] = "" + (HH[WH[1]] || ""), HH[WH[4]] = HH[WH[17]].length, HH[WH[16]] = [], HH[-WH[69]] = WH[1], HH[WH[38]] = WH[1], HH[WH[57]] = -WH[2]), HH[WH[11]] = WH[1]; HH[WH[11]] < HH[WH[4]]; HH[WH[11]]++)
                      if (HH[WH[68]] = HH[-WH[67]].indexOf(HH[WH[17]][HH[WH[11]]]), HH[WH[68]] !== -WH[2])
                        if (HH[WH[57]] < WH[1]) HH[WH[57]] = HH[WH[68]];
                        else {
                          oH(HH[WH[57]] += HH[WH[68]] * WH[22], HH[-WH[69]] |= HH[WH[57]] << HH[WH[38]], HH[WH[38]] += (HH[WH[57]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                          do {
                            oH(HH[WH[16]].push(HH[-WH[69]] & WH[12]), HH[-WH[69]] >>= WH[11], HH[WH[38]] -= WH[11])
                          } while (HH[WH[38]] > WH[7]);
                          HH[WH[57]] = -WH[2]
                        } return HH[WH[57]] > -WH[2] && HH[WH[16]].push((HH[-WH[69]] | HH[WH[57]] << HH[WH[38]]) & WH[12]), xH(HH[WH[16]])
                  }

                  function LH(...HH) {
                    return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = BH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
                  }
                  throw Error(LH(149) + LH(150) + LH(151) + HH[WH[1]].toString(16).toUpperCase() + (LH(152) + LH(153) + LH(154) + WH[34]))
                }
              }

              function EH(...HH) {
                return HH[WH[13]] = WH[17], SH(HH[WH[1]] >> HH[WH[2]] & WH[18] | WH[45])
              }

              function XH(...HH) {
                return HH[WH[13]] = WH[2], (4294967168 & HH[WH[1]]) == WH[1] ? SH(HH[WH[1]]) : (HH[-WH[51]] = "", (4294965248 & HH[WH[1]]) == WH[1] ? HH[-WH[51]] = SH(HH[WH[1]] >> WH[9] & WH[70] | WH[27]) : (4294901760 & HH[WH[1]]) == WH[1] ? oH(CH(HH[WH[1]]), HH[-WH[51]] = SH(HH[WH[1]] >> WH[20] & WH[71] | WH[78]), HH[-WH[51]] += EH(HH[WH[1]], WH[9])) : (4292870144 & HH[WH[1]]) == WH[1] && oH(HH[-WH[51]] = SH(HH[WH[1]] >> WH[72] & WH[7] | WH[82]), HH[-WH[51]] += EH(HH[WH[1]], WH[20]), HH[-WH[51]] += EH(HH[WH[1]], WH[9])), HH[-WH[51]] += SH(HH[WH[1]] & WH[18] | WH[45]), HH[-WH[51]])
              }

              function GH(...HH) {
                if (HH[WH[13]] = WH[1], rH >= AH) {
                  function SH(...HH) {
                    for (oH(HH[WH[13]] = WH[2], HH[WH[2]] = 'A>iqFeY7sb:2&)!Wv6rR*Kh?Zw,.I+QBTu}/]_"34%k1tfCxmJnD[#=PNMo`y~Lj@(^p|O0d<z{$X5lca;98VESHGUg', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[4]] = HH[WH[0]].length, HH[WH[16]] = [], HH[WH[74]] = WH[1], HH[WH[75]] = WH[1], HH[WH[57]] = -WH[2]), HH[-WH[73]] = WH[1]; HH[-WH[73]] < HH[WH[4]]; HH[-WH[73]]++)
                      if (HH[WH[38]] = HH[WH[2]].indexOf(HH[WH[0]][HH[-WH[73]]]), HH[WH[38]] !== -WH[2])
                        if (HH[WH[57]] < WH[1]) HH[WH[57]] = HH[WH[38]];
                        else {
                          oH(HH[WH[57]] += HH[WH[38]] * WH[22], HH[WH[74]] |= HH[WH[57]] << HH[WH[75]], HH[WH[75]] += (HH[WH[57]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                          do {
                            oH(HH[WH[16]].push(HH[WH[74]] & WH[12]), HH[WH[74]] >>= WH[11], HH[WH[75]] -= WH[11])
                          } while (HH[WH[75]] > WH[7]);
                          HH[WH[57]] = -WH[2]
                        } return HH[WH[57]] > -WH[2] && HH[WH[16]].push((HH[WH[74]] | HH[WH[57]] << HH[WH[75]]) & WH[12]), xH(HH[WH[16]])
                  }

                  function hH(HH) {
                    return typeof tH[HH] === WH[14] ? tH[HH] = SH(zH[HH]) : tH[HH]
                  }
                  throw Error(hH(155))
                }
                if (oH(HH[WH[20]] = LH[rH] & WH[12], rH++), (HH[WH[20]] & WH[27]) == WH[45]) return HH[WH[20]] & WH[18];
                throw Error(BH(WH[83]))
              }

              function YH(...HH) {
                if (HH[WH[13]] = WH[1], oH(HH[WH[77]] = WH[15], HH[WH[2]] = WH[15], HH[WH[17]] = WH[15], HH[-WH[31]] = WH[15], HH[-WH[79]] = WH[15]), rH > AH) throw Error(BH(157));
                if (rH == AH) return WH[84];
                if (oH(HH[WH[77]] = LH[rH] & WH[12], rH++), (HH[WH[77]] & WH[45]) == WH[1]) return HH[WH[77]];
                if ((HH[WH[77]] & WH[78]) == WH[27]) {
                  if (oH(HH[WH[2]] = GH(), HH[-WH[79]] = (HH[WH[77]] & WH[70]) << WH[9] | HH[WH[2]]), HH[-WH[79]] >= WH[45]) return HH[-WH[79]];
                  {
                    function SH(...HH) {
                      for (oH(HH[WH[13]] = WH[2], HH[WH[2]] = 'YATEgWZaKJGHcthVbSImrBfsLlFkOqU}:jiowPCQzn(?pd4D2/N$RM<,6Xx@+*#3!%8=v)`>"0;&~7[^_y95{e|u1].', HH[WH[17]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[17]].length, HH[-WH[81]] = [], HH[WH[6]] = WH[1], HH[WH[80]] = WH[1], HH[WH[7]] = -WH[2]), HH[WH[11]] = WH[1]; HH[WH[11]] < HH[WH[50]]; HH[WH[11]]++)
                        if (HH[WH[68]] = HH[WH[2]].indexOf(HH[WH[17]][HH[WH[11]]]), HH[WH[68]] !== -WH[2])
                          if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[68]];
                          else {
                            oH(HH[WH[7]] += HH[WH[68]] * WH[22], HH[WH[6]] |= HH[WH[7]] << HH[WH[80]], HH[WH[80]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                            do {
                              oH(HH[-WH[81]].push(HH[WH[6]] & WH[12]), HH[WH[6]] >>= WH[11], HH[WH[80]] -= WH[11])
                            } while (HH[WH[80]] > WH[7]);
                            HH[WH[7]] = -WH[2]
                          } return HH[WH[7]] > -WH[2] && HH[-WH[81]].push((HH[WH[6]] | HH[WH[7]] << HH[WH[80]]) & WH[12]), xH(HH[-WH[81]])
                    }

                    function hH(...HH) {
                      return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = SH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
                    }
                    throw Error(hH(158))
                  }
                }
                if ((HH[WH[77]] & WH[82]) == WH[78]) {
                  if (oH(HH[WH[2]] = GH(), HH[WH[17]] = GH(), HH[-WH[79]] = (HH[WH[77]] & WH[71]) << WH[20] | HH[WH[2]] << WH[9] | HH[WH[17]]), HH[-WH[79]] >= 2048) return CH(HH[-WH[79]]), HH[-WH[79]];
                  throw Error(BH(WH[83]))
                }
                if ((248 & HH[WH[77]]) == WH[82] && (oH(HH[WH[2]] = GH(), HH[WH[17]] = GH(), HH[-WH[31]] = GH(), HH[-WH[79]] = (HH[WH[77]] & WH[7]) << WH[72] | HH[WH[2]] << WH[20] | HH[WH[17]] << WH[9] | HH[-WH[31]]), HH[-WH[79]] >= WH[63] && HH[-WH[79]] <= 1114111)) return HH[-WH[79]];
                throw Error(function(...HH) {
                  return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = function(...HH) {
                    for (oH(HH[WH[13]] = WH[2], HH[WH[76]] = '#i"AH6x}qem~gZF@WV%<1cz_?|JysTh9B!USC8Dd>]/2KRon(LP7ajkMw53pfQ:tv`,)Y*Gu4{0.$&XN;=rl+[Ib^EO', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[50]] = HH[WH[0]].length, HH[WH[16]] = [], HH[WH[34]] = WH[1], HH[WH[30]] = WH[1], HH[WH[7]] = -WH[2]), HH[WH[11]] = WH[1]; HH[WH[11]] < HH[WH[50]]; HH[WH[11]]++)
                      if (HH[WH[6]] = HH[WH[76]].indexOf(HH[WH[0]][HH[WH[11]]]), HH[WH[6]] !== -WH[2])
                        if (HH[WH[7]] < WH[1]) HH[WH[7]] = HH[WH[6]];
                        else {
                          oH(HH[WH[7]] += HH[WH[6]] * WH[22], HH[WH[34]] |= HH[WH[7]] << HH[WH[30]], HH[WH[30]] += (HH[WH[7]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                          do {
                            oH(HH[WH[16]].push(HH[WH[34]] & WH[12]), HH[WH[34]] >>= WH[11], HH[WH[30]] -= WH[11])
                          } while (HH[WH[30]] > WH[7]);
                          HH[WH[7]] = -WH[2]
                        } return HH[WH[7]] > -WH[2] && HH[WH[16]].push((HH[WH[34]] | HH[WH[7]] << HH[WH[30]]) & WH[12]), xH(HH[WH[16]])
                  }(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
                }(159))
              }
              oH(LH = void 0, AH = void 0, rH = void 0), oH(HH.version = BH(160), HH.encode = function(...HH) {
                for (oH(HH[WH[13]] = WH[2], HH[WH[2]] = hH(HH[WH[1]]), HH[WH[17]] = HH[WH[2]].length, HH[WH[50]] = -WH[2], HH[WH[16]] = WH[15], HH[WH[34]] = ""); ++HH[WH[50]] < HH[WH[17]];) oH(HH[WH[16]] = HH[WH[2]][HH[WH[50]]], HH[WH[34]] += XH(HH[WH[16]]));
                return HH[WH[34]]
              }, HH.decode = function(...HH) {
                for (oH(HH[WH[13]] = WH[2], LH = hH(HH[WH[1]]), AH = LH.length, rH = WH[1], HH[WH[2]] = [], HH[WH[0]] = WH[15]);
                  (HH[WH[0]] = YH()) !== WH[84];) HH[WH[2]].push(HH[WH[0]]);
                return function(HH) {
                  var BH, LH, AH, rH = HH.length;
                  for (oH(BH = -WH[2], LH = void 0, AH = ""); ++BH < rH;)(LH = HH[BH]) > 65535 && oH(LH -= WH[63], AH += SH(LH >>> WH[64] & WH[62] | WH[65]), LH = WH[66] | LH & WH[62]), AH += SH(LH);
                  return AH
                }(HH[WH[2]])
              })
            }(typeof exports === LH(161) + LH(162) ? this.utf8 = {} : exports)
        }
        BH(148) in vH && eH();
        let qH = HH[WH[17]][cH(163) + cH(164)] * YH;
        if (!CH) {
          function NH(...HH) {
            for (oH(HH[WH[13]] = WH[2], HH[WH[2]] = 'eQLXjFcRhOnH]T9`0=@JaUMg#E7/5&,1G"oyIxPkY:Wt!%$m2wpvB(uNZbi4K.f^A8l3_D?*6SVr<z;>sqCd{~+|)[}', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[WH[85]] = HH[WH[0]].length, HH[WH[16]] = [], HH[-WH[86]] = WH[1], HH[WH[9]] = WH[1], HH[-WH[87]] = -WH[2]), HH[WH[11]] = WH[1]; HH[WH[11]] < HH[WH[85]]; HH[WH[11]]++)
              if (HH[WH[6]] = HH[WH[2]].indexOf(HH[WH[0]][HH[WH[11]]]), HH[WH[6]] !== -WH[2])
                if (HH[-WH[87]] < WH[1]) HH[-WH[87]] = HH[WH[6]];
                else {
                  oH(HH[-WH[87]] += HH[WH[6]] * WH[22], HH[-WH[86]] |= HH[-WH[87]] << HH[WH[9]], HH[WH[9]] += (HH[-WH[87]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                  do {
                    oH(HH[WH[16]].push(HH[-WH[86]] & WH[12]), HH[-WH[86]] >>= WH[11], HH[WH[9]] -= WH[11])
                  } while (HH[WH[9]] > WH[7]);
                  HH[-WH[87]] = -WH[2]
                } return HH[-WH[87]] > -WH[2] && HH[WH[16]].push((HH[-WH[86]] | HH[-WH[87]] << HH[WH[9]]) & WH[12]), xH(HH[WH[16]])
          }

          function RH(...HH) {
            return HH[WH[13]] = WH[2], typeof tH[HH[WH[1]]] === WH[14] ? tH[HH[WH[1]]] = NH(zH[HH[WH[1]]]) : tH[HH[WH[1]]]
          }
          qH *= HH[WH[17]][cH(165) + RH(166)]
        }
        let gH = HH[WH[17]][cH(WH[81]) + cH(168) + "ss"] * GH;
        if (GH < .3 && (gH *= GH), qH > gH) {
          function jH(...HH) {
            for (oH(HH[WH[13]] = WH[2], HH[WH[2]] = '!?|09[;C$ODNxKp}R"=^o,#{re1UWw*zv`c&Qnu/2ZiFBY5jIV]gEsM)h><6Hkmd%ayL:~+b7TJS@tAGPl4.qX(f_83', HH[WH[0]] = "" + (HH[WH[1]] || ""), HH[-WH[88]] = HH[WH[0]].length, HH[WH[89]] = [], HH[-WH[10]] = WH[1], HH[WH[9]] = WH[1], HH[WH[57]] = -WH[2]), HH[WH[4]] = WH[1]; HH[WH[4]] < HH[-WH[88]]; HH[WH[4]]++)
              if (HH[WH[68]] = HH[WH[2]].indexOf(HH[WH[0]][HH[WH[4]]]), HH[WH[68]] !== -WH[2])
                if (HH[WH[57]] < WH[1]) HH[WH[57]] = HH[WH[68]];
                else {
                  oH(HH[WH[57]] += HH[WH[68]] * WH[22], HH[-WH[10]] |= HH[WH[57]] << HH[WH[9]], HH[WH[9]] += (HH[WH[57]] & WH[23]) > WH[24] ? WH[25] : WH[26]);
                  do {
                    oH(HH[WH[89]].push(HH[-WH[10]] & WH[12]), HH[-WH[10]] >>= WH[11], HH[WH[9]] -= WH[11])
                  } while (HH[WH[9]] > WH[7]);
                  HH[WH[57]] = -WH[2]
                } return HH[WH[57]] > -WH[2] && HH[WH[89]].push((HH[-WH[10]] | HH[WH[57]] << HH[WH[9]]) & WH[12]), xH(HH[WH[89]])
          }

          function nH(HH) {
            return typeof tH[HH] === WH[14] ? tH[HH] = jH(zH[HH]) : tH[HH]
          }

          function FH(...HH) {
            oH(HH[WH[13]] = WH[1], HH[WH[90]] = function(BH, LH) {
              var AH, rH = [];
              return oH(AH = BH.length, BH.sort(((HH, BH) => HH - BH)), HH[WH[0]](rH, [], WH[1], AH, BH, LH)), rH
            }, HH[WH[0]] = function(BH, LH, AH, rH, SH, hH) {
              var tH, zH = WH[35];
              if (!(hH < WH[1])) {
                if (hH === WH[1]) return BH.push(LH);
                for (tH = AH; tH < rH && !(SH[tH] > hH); tH++) tH > AH && SH[tH] === SH[tH - WH[2]] || oH(zH = Array.from(LH), zH.push(SH[tH]), HH[WH[0]](BH, zH, tH + WH[2], rH, SH, hH - SH[tH]))
              }
            }, console.log(HH[WH[90]]))
          }
          nH(169) in vH && FH(), qH = gH
        }
        oH(rH()[cH(WH[77])](EH, EH, qH), HH[WH[10]][cH(171) + cH(172)](EH))
      }
      HH[WH[10]][BH(173) + WH[91]] = HH[WH[17]][BH(174) + BH(WH[32]) + WH[91]] * (CH ? AH : hH)
    }
  },
  38491: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH,
      d: () => tH
    });
    var AH = LH(38499),
      rH = LH(1962);
    const SH = 2,
      hH = 1,
      tH = {
        rE: 1,
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

    function zH(HH, BH, LH, tH, zH, CH, EH) {
      if (zH.speed) return (0, AH.d)(BH, LH, tH, zH, CH, EH, HH), void(zH.ticksToReachMaxIdleFriction = SH);
      const XH = tH.isOnGround(),
        GH = BH.bloxd.getSyncedClientOptions(BH.bloxd.getPlayerReader(LH)),
        YH = null === GH ? BH.bloxd.getClientPredictedOption(LH, "groundFrictionScale") : GH.groundFrictionScale,
        uH = null === GH ? BH.bloxd.getClientPredictedOption(LH, "airFrictionScale") : GH.airFrictionScale,
        QH = XH ? YH : uH,
        WH = Math.max(hH, QH),
        MH = zH.ticksToReachMaxIdleFriction / SH,
        xH = (0, rH.p)(WH, QH, MH);
      CH.friction = HH.standingFriction * ((null === GH ? BH.bloxd.getClientPredictedOption(LH, "airMomentumConservation") : GH.airMomentumConservation) ? xH : QH), zH.ticksToReachMaxIdleFriction > 0 && zH.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);