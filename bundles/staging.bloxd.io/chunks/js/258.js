export const id = 258;
export const ids = [258];
export const modules = {
  39969: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ur
    });
    var Zr = Qr(208),
      Wr = Qr(39160);
    const ar = 1.2,
      jr = {
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
        sj: .5,
        pQr: !1
      },
      Ir = {
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
        sj: .5,
        pQr: !1
      },
      fr = {
        physicsBodyDimensions: {
          width: Zr.i.Nz,
          height: Zr.i.Uz
        },
        hitBoxDimensions: {
          width: Zr.i.Nz + .4,
          height: Zr.i.Uz + .6
        },
        eyeHeight: Zr.i.Uz * Zr.i.playerEyeToHeightRatio,
        rideHeight: Zr.i.Uz - .3,
        sj: .5,
        pQr: !1
      },
      Er = {
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
        sj: .5,
        pQr: !1
      },
      pr = {
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
        sj: .5,
        pQr: !1
      },
      xr = {
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
        sj: .5,
        pQr: !1
      },
      mr = {
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
        sj: .5,
        pQr: !1
      },
      Nr = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Zr.i.Nz,
            height: Zr.i.Uz
          },
          hitBoxDimensions: {
            width: Zr.i.Nz + .4,
            height: Zr.i.Uz + .6
          },
          eyeHeight: Zr.i.Uz * Zr.i.playerEyeToHeightRatio,
          rideHeight: Zr.i.Uz - .1,
          sj: Wr.d.sj,
          pQr: !0
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
        },
        Camel: {
          modelScale: ar,
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
        },
        "Cave Golem": jr,
        "Draugr Zombie": {
          ...fr,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": fr,
        "Frost Golem": jr,
        "Frost Zombie": {
          ...fr,
          defaultPose: "zombie"
        },
        "Frost Skeleton": fr,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Zr.i.Nz,
            height: Zr.i.Uz
          },
          hitBoxDimensions: {
            width: Zr.i.Nz + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          sj: .5,
          pQr: !1
        },
        Wolf: Er,
        Bear: pr,
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
          sj: .5,
          pQr: !1
        },
        Stag: xr,
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
          sj: .5,
          pQr: !1
        },
        Gorilla: mr,
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
          sj: .5,
          pQr: !1
        },
        "Draugr Huntress": fr,
        "Magma Golem": jr,
        "Spirit Golem": jr,
        "Spirit Wolf": Er,
        "Spirit Bear": pr,
        "Spirit Stag": xr,
        "Spirit Gorilla": mr,
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Zr.i.Nz,
            height: Zr.i.Uz
          },
          hitBoxDimensions: {
            width: Zr.i.Nz + .4,
            height: Zr.i.Uz + .6
          },
          eyeHeight: Zr.i.Uz * Zr.i.playerEyeToHeightRatio,
          rideHeight: Zr.i.Uz - .1,
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Zr.i.Nz,
            height: Zr.i.Uz
          },
          hitBoxDimensions: {
            width: Zr.i.Nz + .4,
            height: Zr.i.Uz + .6
          },
          eyeHeight: Zr.i.Uz * Zr.i.playerEyeToHeightRatio,
          rideHeight: Zr.i.Uz - .1,
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
        },
        Zombie: {
          ...fr,
          defaultPose: "zombie"
        },
        Skeleton: fr,
        Mummy: {
          ...fr,
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
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
          sj: .5,
          pQr: !1
        },
        "Iron Guardian": Ir,
        "Gold Guardian": Ir,
        "Diamond Guardian": Ir,
        "Moonstone Guardian": Ir,
        "Iron Goofy Golem": Ir,
        "Gold Goofy Golem": Ir,
        "Diamond Goofy Golem": Ir,
        "Moonstone Goofy Golem": Ir,
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
          sj: .5,
          pQr: !1
        }
      };

    function Ur(rr) {
      return Nr[rr]
    }
  },
  38538: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    const Zr = {
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
  39167: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(388),
      Wr = Qr.n(Zr),
      ar = Qr(2049);
    let jr;
    var Ir, fr, Er, pr, xr, mr, Nr, Ur, tr;
    const hr = [167, 0, 1, "h", 3, "a", 9, 57, 5, "f", "d", 8, 255, "length", 230, 196, 56, "b", 4, "undefined", void 0, 78, 47, 38, 63, 6, "fromCodePoint", 7, 12, "push", 2, 223, 235, !1, "c", 104, "i", "g", 91, 243, 8191, 88, 13, 14, 183, !0, 97, 233, 155, 67, 111, 114, 122, 123, 124, "e", null, 127, 128, 129, 130, 131, 115, 116, 117, 118, 119, 120, 121, 137, 138, 139, 140, 141, 142, 162, 176, 217, 190, 107, 35, "Eh", 216, 24, 240, 211, 16, 187, 32, 85, 246, 241, 86, 224, 173, 1023, 71, 65536, 10, 55296, 56320, 105, 199, 174, 31, 15, 18, 65, 125, 192, 207, 44, 26, 69, 23, 53, 209, 171, 66, 193, 101, 147, 109, 83, 94, "Q", ".", 170, 169, 99, "on"];

    function zr(rr) {
      return typeof Ir[rr] === hr[19] ? Ir[rr] = function(...rr) {
        for (lr(rr[hr[13]] = hr[2], rr[hr[5]] = 'y.}^,0=>:8|Acd%hpM/YCTJ!(bNF2`jiBH7]ufov*QlXmw"93GZ$EOVK{Rq)tUzLr56gIn?sx_#&P~4[S+D@<eaW1;k', rr[hr[0]] = "" + (rr[hr[1]] || ""), rr[hr[4]] = rr[hr[0]].length, rr[hr[10]] = [], rr[hr[8]] = hr[1], rr[hr[9]] = hr[1], rr[-hr[7]] = -hr[2]), rr[hr[3]] = hr[1]; rr[hr[3]] < rr[hr[4]]; rr[hr[3]]++)
          if (rr[hr[6]] = rr[hr[5]].indexOf(rr[hr[0]][rr[hr[3]]]), rr[hr[6]] !== -hr[2])
            if (rr[-hr[7]] < hr[1]) rr[-hr[7]] = rr[hr[6]];
            else {
              lr(rr[-hr[7]] += rr[hr[6]] * hr[38], rr[hr[8]] |= rr[-hr[7]] << rr[hr[9]], rr[hr[9]] += (rr[-hr[7]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
              do {
                lr(rr[hr[10]].push(rr[hr[8]] & hr[12]), rr[hr[8]] >>= hr[11], rr[hr[9]] -= hr[11])
              } while (rr[hr[9]] > hr[27]);
              rr[-hr[7]] = -hr[2]
            } return rr[-hr[7]] > -hr[2] && rr[hr[10]].push((rr[hr[8]] | rr[-hr[7]] << rr[hr[9]]) & hr[12]), Yr(rr[hr[10]])
      }(fr[rr]) : Ir[rr]
    }

    function Yr(...rr) {
      return rr[hr[13]] = hr[2], typeof pr !== hr[19] && pr ? (new pr).decode(new xr(rr[hr[1]])) : typeof mr !== hr[19] && mr ? mr.from(rr[hr[1]]).toString("utf-8") : tr(rr[hr[1]])
    }

    function nr() {}
    lr(Ir = {}, fr = ['TLI>eE"/ZR|5TtT2L34iDnb`Irf_`0@QE3eP/', ']cPZB*s."AOSeb%YsC6:|t7EcT|fp^.ibIT2(4y:)M,=R(B(28}', "_f<Ov_#/P%", '73aGq$T._%UL)%AbIV}`be*"(CI?A)pNS^RVm{vY6YU)qbVQG3.', ",R6OG&r=ar{2$qL!O*U|!4mc,R*M!%Z20`}", 'ZNINt75$7Y?hB@[FzCW2u&""TVy&c@r/"c):', 'gzl&fSV/qM>Vxh8Y{^W8Ux&[MLoiY}t]ti1_E<7jeY+?L?dY?5iV2)"E{5*z.', "]V8&q~%}m5@/XDIo.TaP(4e]eqA3R,[NhX(Vu{HQ1qW?dUe]VR&BLKY9dTO", "otPO2*_L=", 'CLb$hsEEytV_`fgMRs}$V?)`#)TM"G%CKCK2fIZjX5:V}bJ2~!^', '"s|&8uy', "5zuKU$M9YVqBWNofk5<`?#4#5Rl3^Z=", '08z2b4J"]cEPOUvYJ$I`/u7u=qAIGd_v', "|IzK1EC(YRC|.", "I=GV+Hj#ZV6%S)z`FszPSPAQ%TeBS92lYN:=xumjFzAC@?yjz3PNh@y", '=!}$.x/(.RhxwbvoERmiI"(}CRV_|DjuA`#B#oy', 'q*f>yarq3hp&o}V]0Lf||P?c$rN$?bb!#5nsK"W`&)GPlbifG*a>#tJ:^', 'IM?>r"?EeVi(/+F!Kz2Km$g!|MOn(,', 'NtJ_q7<EA%_"[N,/Py', "IV`|29=(xC6ScpeJ3R>EgzH`LOv2p9pvIfFxruF`UzWJho%", 'c"H&K7TQLhxJCs8iPC3GZf(u6t*', "nwBj>udQ#z&Sgq;2e?9GFeF>`z&/y^Ul}80|", "<wm|yv/S6cwM1]lbofy=s73End9nf,g(^R}", ']#c~?Z"jMc7', "=/c`=[cEVdP,$%4Y~5hjDoqj@8=5m)PolzHVb", 'ict~,tI".VM[;b#i0,R=+PP70Y;~9D:iMVS$]Uo}VYVEe3qQIy', "r*98Ev=uMVELZbk]x%m|Tnuu{C8j<^M717|$2okI,", 'E$A`lSI"[OD/zf.MA/S8$"9.', "q%,#ytZ/<Y", "#{:&53F+ZtA3.", 'itp8fe9>cTM&*^17usr$eR<"C8c!FZ+v1%ns+Ec:^8I~[}~FvX!2C', "Kw(8+P~nWd:CNfc", 'wfc`{[/(L/jnC3eQ^tN~H][d(CTi53Qb2"s=k4&Qgt:&y', 'tMWGUvfY"ABxG,n(uf_=TPl//VCiI@YQXR8BhPGY!d[h`pXY|"z2dR(">', '=/qB_PJ"@rixS^Hivfs_Lti9k)##JNK`k7T>', "#)/x@Zy", "EV{=l_7#_5=[%}", ";v}x_+T>l%Ci&%|", 'wcM4psxa,V&,4GV7L5"GQ]0LU)sSmx$F#{d#_3&QUzP#y', 'wc:87V9QHL|Ihh128XnsV7:q^Ydp<@o/_I.F_PKdH8/nu3UMI$nEr"Y.L/', "%czK+oSq|MN5Yo^Xr_}", "H3|~S+W`I8", "z%lxuI=(bz;`W}", 'TC{_>z!`JdL/Tt]i&$o_2]T9xM_?=D)Q$5QFsn2#7t+"c@2!9VGFV7S7_zK', "J`@OTPy", "(h.$HG(jh60qn,Hjy`!,l]T><Y8I}bJ247<`Y", "XfB=Xf?E3tU)v}N2{3dK.Ou}", "}cl&gx=(8Cx~e+]fO$,>uV!+P{kZ?+vi`8yVg#I/2Teu_t8vAf%E3vKd.6m", "JsuKtOWeur25s%N!IVH=+@X.", "!*n>5[j(Er|d.t]MW)Y#NV@`Ht/f^?z`]`v,", "Z$!GgKD*@80[|%a7H#XxQIzItziCch6f|L@Zp@N}@rO", "E$q~Vf;eWd3,$qFMrfr_oIWngYR)CFMNos}BuI8Q,", ')Vci?+n!A%[,ZGeFN*n|c@_`.R5~t(j!b"QV^[?=U{9KNGJ7$=(_;_X]1M', "K=HVVLIahLpF%f=/K3l&;o;R,r(qm9>/awc|p+t}5V(3=+b`fM+=K~?c{M", "ER}BL<F`OYz6+u3NAR[=|3P(0", "q%#:u)::LOpDTx/2a25VbP^OzACPan^b[C_VE<^Q_C/n99ap9zaPg#M.", "q!6Bi95$tz`Cb3``Z5WV%o`+4:0V53<28!Y`K[3j,V5].", ";5vG+uXn:Cd54GXo1lf|83Z}htZz5,", "`CZBRtxcXCw)Mp$2", "TLa2m$2E]r(qbpU!pXI#MP)Qudf|5txN13,Z/", "qIz>1R#E^Y(MqUQYP$N~Pn4EKC|p4n:/cXC~i]y/GhET#bniAI^", "L7EO]*`Y^c?_J%D29=iPZ&gQ=", "S)FxBEB(ph", "{IZ`HVT]y6T5C^`lNsc#A@~$QMi|h%O2M/b4t~l}U/Cf9D=", "O=.V;Py", "{Ns2JE}ld6KLPFaQI_d|b@Ldy/4Gz+9vThoKSR,l,V3zx^", "Tt8Bg+0Q/tf", "lR}$~R^Y@rDt.", "e)Q&~uYQudGT9?a7Oy", "|swK9q>Osd`i$D3FW=OK`sn!,8aO_t)l", "$NG=])y", "<%>H}z2S7tntChfj<3^", '}T7$.xQ&[h"EtFB!R37$0+:E}Y1?W]if', "7^N$.<>Q$tq,u^", "95Z~DzP/6Y}V:^h*0/NxO<?cd6$SA^9*i**V:39>GLI~>hk!47iEH9{#,Vo6.", ':#2`?OL]$YXn,ucYTC"KawjaHRI_S(_/sIm#.<t}', "{$^Z7*Q&rtB)W%=/L^(VjUMQ[t<~6oIot*?>6<F`eqx~3puorf@0Vfn.", 'Mcfi"?jE~zBiXqD74b@0sz_.', "Q5s_hR>>XA$6!N=(kzY|{L:uP%B5B)&v(5hE7eq(arUT.", "xzi,mURe=|R_.", "xV)O,35R%6P{usgi0hJi/P$]){p5w3!]Y$k:W9WR_qmE2)yXEi{=5v>Y^", '"7TK%3g$;5NMP@5f?__=}<Y>d)F|mF8', 'e^zihz8YLtA|qf_vZc,`(4u#hL"%ofCFT8pj$&vd#)a?!o6M>!V,x[!.', "I8<ZN4MQM/~GYo[vW5}", "Y#aP`ED*[:^}@%C7+)Z:3G!.", "&)Q$|a:/%LY=B^E7wf~iMR#/_zn2LqyjU8M$%Ky", "nz?2$L`9:KLADGof5_4iV7=/C8", "S%t`ZGy", "}#3_?nuu.R}&(p4Y>Gj8H*+dL/uF(FwF~C,#8aTn=", "8L#`}+n&7cb^A}?f", "37/&gzw&ErJ[X%xYK3:8=n*/p8", "wM`#?O8dhLW~XNAv5=~Z=z3*ErACLDV2|/K2>tR!:M##<tWJ[?=iEqG.", 'qsEO"L>WX5<?PsMFa)|BiUs>"/6)Kq^MoVp4yuy', 'xf"Ko*g!#zq?.', "vX.VNE;]R5q/lUE7j!<`gz(j>", "~Cs8E~gdXAr%j0n/$3B8Jsjc<r*%rh<2p8=K~w3E;zp7;,Y7]t.VAz6=_%", "4wA`]_EE1de:7dGv+)TE+Rz/d%S/8t>oY$k~M", "pXx=WoYd,", "+5A|aZkSlz4.4+}fUsb=j", "2V{_@sy", "+_&~3<D(`6<~5+sbr^jP0nhbHhMMs%Hu@?X|t?y", "7XI|L#WM&Mwn2,5j", ",s;=Kv>YMRaR{@vfC$U#=+y", '>"kB+nw.', "6$oi~+C}", "hHKfx1x,D", ':"T#16/B', "&=%f", "?lTfyH+", '&"kR', "P7x8t?y", "XFzBo+&q", "1Fk/9O&q", "FFLB", "+gGv(wA", "XF{3mV%q", "0Fe+&+2q", '"={3Nrnq', "u]Z32", "XF{3&+=[}Y", "RDnu/w_YCZ", "$&Nkaa*f}Y", "wh,u.3Xq", "}hO+3a2q", "/=3W5{gq", "XF{3&+2q", '"=zB14Zq', "%R;)uOXq", '4";uur%q', "7Rk/$42q", "uTO+(3?<", "s>>u#", "[FzB", "LF{WY", "R]7u[", "/@PhznDq", ",(*v#", "7Rhup|oq", "uvh)[OA", "7Rhu#r1q", '"=;uN+]<', "/=Eul4@q", "[TO+(3A", "lh`XRaJA", "K9Qd", "O/w+", "[&%?", "^Xw+", "{W!e$cmO", "F{ZawiUH", "]uOtnmCH", "jIa[{`d", "c[49@tkH", "[_oK~1zH", "Y)O*xiEH", "Y)Ya[", "BuYgDx5f?&P1|_j0cu,O_W=", "Fs@E#V.gva=G<mI~2_p[u.7drLj/o|4", "VQ[4CiMO5#7)9?P0GQZ.?+w", "3O.gFMq1p]WP~AcBJj{mDq|#@Ebnewx", 'n}G"gjyAw?3,D1TfLU(/0yS~I)R[8vM', "Fs@E#V.gvaSZE=W7tY@[E]{gVFa", "M^0b_WZ", "sl!eh46H", "mjJ=", '(uL"Z', "4iZ?", "uTkd", "e(E)", "9FZ3raRq", "<d6BDs!q", "1&w+aa&q", "EvS)", ":R*v", "}]hu:{gq", ",WS)", "1]SuV+Zq", "]T*p]4oq", ".}2B4a2q", "Pgwel4A", "b_/dXEuv", "h^:{V)1<", "&M:7", "#Mi{mPKv", ";i1yP|am", "JVuQ:fq", "?_YiCta<", "Pd:{f,H<", "ju.mAv_B", "cMR7|S3", "JV4Mhk)v", "tR@lQ", "|hO+3a2q", "1]SuE3Mq"]), lr(Er = function(...rr) {
      lr(rr[hr[13]] = hr[1], rr[hr[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], rr[hr[14]] = hr[20], rr[-hr[15]] = []);
      try {
        lr(rr[hr[14]] = Object, rr[-hr[15]][hr[29]]("".__proto__.constructor.name))
      } catch (fr) {}
      rr: for (rr[hr[16]] = hr[1]; rr[hr[16]] < rr[hr[17]][hr[13]]; rr[hr[16]]++) try {
        for (rr[hr[14]] = rr[hr[17]][rr[hr[16]]](), rr[hr[18]] = hr[1]; rr[hr[18]] < rr[-hr[15]][hr[13]]; rr[hr[18]]++)
          if (typeof rr[hr[14]][rr[-hr[15]][rr[hr[18]]]] === hr[19]) continue rr;
        return rr[hr[14]]
      } catch (fr) {}
      return rr[hr[14]] || this
    }() || {}, pr = Er.TextDecoder, xr = Er.Uint8Array, mr = Er.Dp, Nr = Er.String || String, Ur = Er.Array || Array, tr = function() {
      var rr, Sr, Qr = new Ur(hr[58]);
      return lr(rr = Nr[hr[26]] || Nr.fromCharCode, Sr = []),
        function(...Zr) {
          for (lr(Zr[hr[13]] = hr[2], Zr[hr[2]] = hr[20], Zr[-hr[23]] = hr[20], Zr[hr[22]] = Zr[hr[1]][hr[13]], Sr[hr[13]] = hr[1]), Zr[hr[21]] = hr[1]; Zr[hr[21]] < Zr[hr[22]];) lr(Zr[-hr[23]] = Zr[hr[1]][Zr[hr[21]]++], Zr[-hr[23]] <= hr[57] ? Zr[hr[2]] = Zr[-hr[23]] : Zr[-hr[23]] <= hr[31] ? Zr[hr[2]] = (Zr[-hr[23]] & hr[104]) << hr[25] | Zr[hr[1]][Zr[hr[21]]++] & hr[24] : Zr[-hr[23]] <= 239 ? Zr[hr[2]] = (Zr[-hr[23]] & hr[105]) << hr[28] | (Zr[hr[1]][Zr[hr[21]]++] & hr[24]) << hr[25] | Zr[hr[1]][Zr[hr[21]]++] & hr[24] : Nr[hr[26]] ? Zr[hr[2]] = (Zr[-hr[23]] & hr[27]) << hr[106] | (Zr[hr[1]][Zr[hr[21]]++] & hr[24]) << hr[28] | (Zr[hr[1]][Zr[hr[21]]++] & hr[24]) << hr[25] | Zr[hr[1]][Zr[hr[21]]++] & hr[24] : (Zr[hr[2]] = hr[24], Zr[hr[21]] += hr[4]), Sr[hr[29]](Qr[Zr[hr[2]]] || (Qr[Zr[hr[2]]] = rr(Zr[hr[2]]))));
          return Sr.join("")
        }
    }()), zr(103) + hr[3] in nr && function(...rr) {
      lr(rr[hr[13]] = hr[1], rr[hr[34]] = function(Sr) {
        var Qr = [];
        return (Sr === hr[2] || Sr >= hr[18]) && rr[hr[2]](Qr, [], Sr, hr[1]), Qr
      }, rr[hr[2]] = function(...Sr) {
        for (Sr[hr[13]] = hr[18], Sr[hr[18]] = Sr[hr[4]]; Sr[hr[18]] < Sr[hr[30]]; Sr[hr[18]]++) {
          if (Sr[hr[2]].length !== Sr[hr[18]]) return;
          for (Sr[hr[8]] = hr[1]; Sr[hr[8]] < Sr[hr[30]]; Sr[hr[8]]++) rr[hr[30]](Sr[hr[2]], [Sr[hr[18]], Sr[hr[8]]]) && (lr(Sr[hr[2]].push([Sr[hr[18]], Sr[hr[8]]]), rr[hr[2]](Sr[hr[1]], Sr[hr[2]], Sr[hr[30]], Sr[hr[18]] + hr[2])), Sr[hr[2]].length === Sr[hr[30]] && Sr[hr[1]].push(rr[hr[9]](Sr[hr[2]])), Sr[hr[2]].pop())
        }
      }, rr[hr[9]] = function(...rr) {
        for (lr(rr[hr[13]] = hr[2], rr[hr[2]] = [], rr[hr[32]] = rr[hr[1]].length), rr[-hr[31]] = hr[1]; rr[-hr[31]] < rr[hr[32]]; rr[-hr[31]]++)
          for (rr[hr[2]][rr[-hr[31]]] = "", rr[hr[18]] = hr[1]; rr[hr[18]] < rr[hr[32]]; rr[hr[18]]++) rr[hr[2]][rr[-hr[31]]] += rr[hr[1]][rr[-hr[31]]][hr[2]] === rr[hr[18]] ? hr[125] : hr[126];
        return rr[hr[2]]
      }, rr[hr[30]] = function(rr, Sr) {
        var Qr, Zr = rr.length;
        for (Qr = hr[1]; Qr < Zr; Qr++) {
          if (rr[Qr][hr[1]] === Sr[hr[1]] || rr[Qr][hr[2]] === Sr[hr[2]]) return hr[33];
          if (Math.abs((rr[Qr][hr[1]] - Sr[hr[1]]) / (rr[Qr][hr[2]] - Sr[hr[2]])) === hr[2]) return hr[33]
        }
        return hr[45]
      }, console.log(rr[hr[34]]))
    }();
    const er = Wr()[zr(hr[35])](),
      Kr = Wr()[zr(hr[35])](),
      yr = Wr()[zr(hr[35])](),
      Br = Wr()[zr(hr[35])](),
      Tr = Wr()[zr(hr[35])](),
      vr = Wr()[zr(hr[35])](),
      Or = Wr()[zr(hr[35])](),
      Lr = (...rr) => {
        function Sr(...rr) {
          return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = function(...rr) {
            for (lr(rr[hr[13]] = hr[2], rr[hr[2]] = '+VBDFqUPflRYcanpSoZmOkAb4r$&5|y9#x/8(:]w^,v">7~1!MgTJ;dQ0hLK[)sE?<_{6I@He*=tjuNz.i`%XCW}32G', rr[hr[17]] = "" + (rr[hr[1]] || ""), rr[hr[34]] = rr[hr[17]].length, rr[hr[18]] = [], rr[hr[39]] = hr[1], rr[-hr[0]] = hr[1], rr[hr[37]] = -hr[2]), rr[hr[11]] = hr[1]; rr[hr[11]] < rr[hr[34]]; rr[hr[11]]++)
              if (rr[hr[36]] = rr[hr[2]].indexOf(rr[hr[17]][rr[hr[11]]]), rr[hr[36]] !== -hr[2])
                if (rr[hr[37]] < hr[1]) rr[hr[37]] = rr[hr[36]];
                else {
                  lr(rr[hr[37]] += rr[hr[36]] * hr[38], rr[hr[39]] |= rr[hr[37]] << rr[-hr[0]], rr[-hr[0]] += (rr[hr[37]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                  do {
                    lr(rr[hr[18]].push(rr[hr[39]] & hr[12]), rr[hr[39]] >>= hr[11], rr[-hr[0]] -= hr[11])
                  } while (rr[-hr[0]] > hr[27]);
                  rr[hr[37]] = -hr[2]
                } return rr[hr[37]] > -hr[2] && rr[hr[18]].push((rr[hr[39]] | rr[hr[37]] << rr[-hr[0]]) & hr[12]), Yr(rr[hr[18]])
          }(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
        }
        rr[hr[13]] = hr[4], Sr(hr[101]) in nr && function(...rr) {
          lr(rr[hr[13]] = hr[1], rr[-hr[47]] = function(...Sr) {
            return Sr[hr[13]] = hr[30], rr[-hr[44]]({}, Sr[hr[1]], Sr[hr[2]])
          }, rr[-hr[44]] = function(...Sr) {
            if (lr(Sr[hr[13]] = hr[4], Sr[hr[4]] = {}), Sr[hr[1]][Sr[hr[2]] + Sr[hr[30]]] !== hr[20]) return Sr[hr[1]][Sr[hr[2]] + Sr[hr[30]]];
            if (Sr[hr[2]] === Sr[hr[30]]) return hr[45];
            for (Sr[hr[17]] = hr[1]; Sr[hr[17]] < Sr[hr[2]].length; Sr[hr[17]]++) Sr[hr[4]][Sr[hr[2]][Sr[hr[17]]]] === hr[20] && (Sr[hr[4]][Sr[hr[2]][Sr[hr[17]]]] = hr[1]), Sr[hr[4]][Sr[hr[30]][Sr[hr[17]]]] === hr[20] && (Sr[hr[4]][Sr[hr[30]][Sr[hr[17]]]] = hr[1]), lr(Sr[hr[4]][Sr[hr[2]][Sr[hr[17]]]]++, Sr[hr[4]][Sr[hr[30]][Sr[hr[17]]]]--);
            for (Sr[-hr[46]] in Sr[hr[4]])
              if (Sr[hr[4]][Sr[-hr[46]]] !== hr[1]) return Sr[hr[1]][Sr[hr[2]] + Sr[hr[30]]] = hr[33], hr[33];
            for (Sr[hr[10]] = hr[2]; Sr[hr[10]] < Sr[hr[2]].length; Sr[hr[10]]++)
              if (rr[-hr[44]](Sr[hr[1]], Sr[hr[2]].substr(hr[1], Sr[hr[10]]), Sr[hr[30]].substr(hr[1], Sr[hr[10]])) && rr[-hr[44]](Sr[hr[1]], Sr[hr[2]].substr(Sr[hr[10]]), Sr[hr[30]].substr(Sr[hr[10]])) || rr[-hr[44]](Sr[hr[1]], Sr[hr[2]].substr(hr[1], Sr[hr[10]]), Sr[hr[30]].substr(Sr[hr[30]].length - Sr[hr[10]])) && rr[-hr[44]](Sr[hr[1]], Sr[hr[2]].substr(Sr[hr[10]]), Sr[hr[30]].substr(hr[1], Sr[hr[30]].length - Sr[hr[10]]))) return Sr[hr[1]][Sr[hr[2]] + Sr[hr[30]]] = hr[45], hr[45];
            return Sr[hr[1]][Sr[hr[2]] + Sr[hr[30]]] = hr[33], hr[33]
          }, console.log(rr[-hr[47]]))
        }();
        const Qr = vr;
        return Wr()[Sr(106) + Sr(hr[79])](Qr, rr[hr[30]]), Wr()[Sr(108)](rr[hr[1]], Qr, Wr()[Sr(hr[122])](Qr, rr[hr[2]]))
      };

    function lr() {
      lr = function() {}
    }
    jr = (rr, Sr, Qr, Zr, jr, Er, pr, xr) => {
      function mr(rr) {
        return typeof Ir[rr] === hr[19] ? Ir[rr] = function(...rr) {
          for (lr(rr[hr[13]] = hr[2], rr[hr[49]] = 'A<q>dLkj)vBx&H0Fo_XYZz^9M#R,2m[eu$g71}%~=lC]5"D:!KnhQ6@/`T8E(U.t*Jy;{|wOGpW?+3ri4asSbVfIcNP', rr[hr[17]] = "" + (rr[hr[1]] || ""), rr[hr[48]] = rr[hr[17]].length, rr[hr[18]] = [], rr[hr[8]] = hr[1], rr[hr[9]] = hr[1], rr[-hr[50]] = -hr[2]), rr[hr[3]] = hr[1]; rr[hr[3]] < rr[hr[48]]; rr[hr[3]]++)
            if (rr[hr[36]] = rr[hr[49]].indexOf(rr[hr[17]][rr[hr[3]]]), rr[hr[36]] !== -hr[2])
              if (rr[-hr[50]] < hr[1]) rr[-hr[50]] = rr[hr[36]];
              else {
                lr(rr[-hr[50]] += rr[hr[36]] * hr[38], rr[hr[8]] |= rr[-hr[50]] << rr[hr[9]], rr[hr[9]] += (rr[-hr[50]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                do {
                  lr(rr[hr[18]].push(rr[hr[8]] & hr[12]), rr[hr[8]] >>= hr[11], rr[hr[9]] -= hr[11])
                } while (rr[hr[9]] > hr[27]);
                rr[-hr[50]] = -hr[2]
              } return rr[-hr[50]] > -hr[2] && rr[hr[18]].push((rr[hr[8]] | rr[-hr[50]] << rr[hr[9]]) & hr[12]), Yr(rr[hr[18]])
        }(fr[rr]) : Ir[rr]
      }
      const Nr = rr[zr(110)][mr(hr[50]) + mr(112) + mr(113)](Sr);
      let Ur = rr[mr(hr[51])][mr(hr[62]) + mr(hr[63]) + mr(hr[64]) + mr(hr[65])](Nr);
      const tr = Ur === hr[56] ? rr[mr(hr[51])][mr(hr[66]) + mr(hr[67]) + mr(hr[68])](Sr, mr(hr[52]) + mr(hr[53]) + mr(hr[54]) + hr[55]) : Ur[mr(hr[52]) + mr(hr[53]) + mr(hr[54]) + hr[55]],
        vr = Ur === hr[56] ? rr[mr(hr[51])][mr(hr[108]) + mr(126) + mr(hr[57]) + mr(hr[58])](Sr, mr(hr[59]) + mr(hr[60]) + mr(hr[61])) : Ur[mr(hr[59]) + mr(hr[60]) + mr(hr[61])];
      lr(Wr()[mr(132)](er, hr[1], hr[1], Er), Wr().mh(er, er, Wr()[mr(133)], Zr.heading), Wr()[mr(134)](Or, jr.Lh), Or[hr[2]] = hr[1]);
      const Xr = Qr[mr(135) + mr(136)]();
      Ur = rr[mr(hr[51])][mr(hr[62]) + mr(hr[63]) + mr(hr[64]) + mr(hr[65])](Nr);
      let Pr = Ur === hr[56] ? rr[mr(hr[51])][mr(hr[66]) + mr(hr[67]) + mr(hr[68])](Sr, mr(hr[69]) + mr(hr[70])) : Ur[mr(hr[69]) + mr(hr[70])];
      if (!Xr && Wr()[hr[81]](Or) && (Ur === hr[56] ? rr[mr(hr[51])][mr(hr[66]) + mr(hr[67]) + mr(hr[68])](Sr, mr(hr[71]) + mr(hr[72]) + mr(hr[73]) + mr(hr[74])) : Ur[mr(hr[71]) + mr(hr[72]) + mr(hr[73]) + mr(hr[74])])) {
        function Mr(...rr) {
          for (lr(rr[hr[13]] = hr[2], rr[hr[75]] = 'B4AFivlPd+?gT6q/!I@L5%jOx;X[UuJK"n|toS,7}Gs&E$D^c:=<~Z)N8_]Q9{R3w(y.zfCh>YekV1Habr0#W`pm2M*', rr[hr[30]] = "" + (rr[hr[1]] || ""), rr[hr[34]] = rr[hr[30]].length, rr[hr[10]] = [], rr[hr[8]] = hr[1], rr[hr[25]] = hr[1], rr[-hr[76]] = -hr[2]), rr[hr[11]] = hr[1]; rr[hr[11]] < rr[hr[34]]; rr[hr[11]]++)
            if (rr[hr[36]] = rr[hr[75]].indexOf(rr[hr[30]][rr[hr[11]]]), rr[hr[36]] !== -hr[2])
              if (rr[-hr[76]] < hr[1]) rr[-hr[76]] = rr[hr[36]];
              else {
                lr(rr[-hr[76]] += rr[hr[36]] * hr[38], rr[hr[8]] |= rr[-hr[76]] << rr[hr[25]], rr[hr[25]] += (rr[-hr[76]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                do {
                  lr(rr[hr[10]].push(rr[hr[8]] & hr[12]), rr[hr[8]] >>= hr[11], rr[hr[25]] -= hr[11])
                } while (rr[hr[25]] > hr[27]);
                rr[-hr[76]] = -hr[2]
              } return rr[-hr[76]] > -hr[2] && rr[hr[10]].push((rr[hr[8]] | rr[-hr[76]] << rr[hr[25]]) & hr[12]), Yr(rr[hr[10]])
        }

        function Gr(...rr) {
          return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = Mr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
        }

        function kr(...rr) {
          lr(rr[hr[13]] = hr[1], rr[hr[5]] = function(...rr) {
            if (lr(rr[hr[13]] = hr[2], rr[hr[5]] = rr[hr[1]].length), rr[hr[5]] < hr[30]) return hr[1];
            if (lr(rr[hr[30]] = Math.max(...rr[hr[1]]), rr[hr[4]] = Math.min(...rr[hr[1]])), rr[hr[30]] === rr[hr[4]]) return hr[1];
            for (lr(rr[hr[10]] = Array(rr[hr[5]] - hr[2]).fill(Number.MAX_SAFE_INTEGER), rr[-hr[78]] = Array(rr[hr[5]] - hr[2]).fill(Number.MIN_SAFE_INTEGER), rr[-hr[6]] = Math.ceil((rr[hr[30]] - rr[hr[4]]) / (rr[hr[5]] - hr[2])), rr[-hr[77]] = hr[1]), rr[hr[11]] = hr[1]; rr[hr[11]] < rr[hr[5]]; rr[hr[11]]++) rr[hr[1]][rr[hr[11]]] !== rr[hr[4]] && rr[hr[1]][rr[hr[11]]] !== rr[hr[30]] && lr(rr[-hr[77]] = Math.floor((rr[hr[1]][rr[hr[11]]] - rr[hr[4]]) / rr[-hr[6]]), rr[hr[10]][rr[-hr[77]]] = Math.min(rr[hr[10]][rr[-hr[77]]], rr[hr[1]][rr[hr[11]]]), rr[-hr[78]][rr[-hr[77]]] = Math.max(rr[-hr[78]][rr[-hr[77]]], rr[hr[1]][rr[hr[11]]]));
            for (lr(rr[hr[6]] = Number.MIN_SAFE_INTEGER, rr[-hr[79]] = rr[hr[4]]), rr[hr[80]] = hr[1]; rr[hr[80]] < rr[hr[5]] - hr[2]; rr[hr[80]]++) rr[hr[10]][rr[hr[80]]] === Number.MAX_SAFE_INTEGER && rr[-hr[78]][rr[hr[80]]] === Number.MIN_SAFE_INTEGER || lr(rr[hr[6]] = Math.max(rr[hr[6]], rr[hr[10]][rr[hr[80]]] - rr[-hr[79]]), rr[-hr[79]] = rr[-hr[78]][rr[hr[80]]]);
            return rr[hr[6]] = Math.max(rr[hr[6]], rr[hr[30]] - rr[-hr[79]]), rr[hr[6]]
          }, console.log(rr[hr[5]]))
        }
        Gr(143) in nr && kr(), lr(Lr(Kr, er, Or), Lr(yr, Or, er), Wr()[Gr(144)](Br, Or, yr));
        const Ar = Wr()[Gr(145)](Or),
          Vr = Wr()[Gr(146)](er, Or) / Er / Ar,
          ir = Math[Gr(hr[121])](Vr, hr[1]) + hr[2];
        if (Er * Er < Wr()[hr[81]](yr)) {
          function wr(...rr) {
            for (lr(rr[hr[13]] = hr[2], rr[hr[5]] = 'DOMkAL;I[C"Y4yNu!F>7#KQ(g12iZ36?Eeo&B~U0sl`n%+H*cmapTzSt}fb=_|{rvjGPWwJ]:$.RVh<x/dX@^9)58,q', rr[hr[32]] = "" + (rr[hr[1]] || ""), rr[-hr[83]] = rr[hr[32]].length, rr[hr[10]] = [], rr[-hr[86]] = hr[1], rr[hr[9]] = hr[1], rr[-hr[85]] = -hr[2]), rr[hr[82]] = hr[1]; rr[hr[82]] < rr[-hr[83]]; rr[hr[82]]++)
              if (rr[hr[84]] = rr[hr[5]].indexOf(rr[hr[32]][rr[hr[82]]]), rr[hr[84]] !== -hr[2])
                if (rr[-hr[85]] < hr[1]) rr[-hr[85]] = rr[hr[84]];
                else {
                  lr(rr[-hr[85]] += rr[hr[84]] * hr[38], rr[-hr[86]] |= rr[-hr[85]] << rr[hr[9]], rr[hr[9]] += (rr[-hr[85]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                  do {
                    lr(rr[hr[10]].push(rr[-hr[86]] & hr[12]), rr[-hr[86]] >>= hr[11], rr[hr[9]] -= hr[11])
                  } while (rr[hr[9]] > hr[27]);
                  rr[-hr[85]] = -hr[2]
                } return rr[-hr[85]] > -hr[2] && rr[hr[10]].push((rr[-hr[86]] | rr[-hr[85]] << rr[hr[9]]) & hr[12]), Yr(rr[hr[10]])
          }

          function cr(...rr) {
            return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = wr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
          }

          function Fr(...rr) {
            function Sr(...rr) {
              return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = function(...rr) {
                for (lr(rr[hr[13]] = hr[2], rr[hr[5]] = '8hHRV9<D=YB#},Kjf@]kpIM|%mA.67!eNwGQv"^?lO:o/$d3`FcxgZ&)TqL>tsaCu_iy~{r54S*J1+0n(EXP2;zWb[U', rr[hr[30]] = "" + (rr[hr[1]] || ""), rr[hr[4]] = rr[hr[30]].length, rr[-hr[87]] = [], rr[hr[8]] = hr[1], rr[hr[9]] = hr[1], rr[hr[37]] = -hr[2]), rr[hr[11]] = hr[1]; rr[hr[11]] < rr[hr[4]]; rr[hr[11]]++)
                  if (rr[hr[36]] = rr[hr[5]].indexOf(rr[hr[30]][rr[hr[11]]]), rr[hr[36]] !== -hr[2])
                    if (rr[hr[37]] < hr[1]) rr[hr[37]] = rr[hr[36]];
                    else {
                      lr(rr[hr[37]] += rr[hr[36]] * hr[38], rr[hr[8]] |= rr[hr[37]] << rr[hr[9]], rr[hr[9]] += (rr[hr[37]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                      do {
                        lr(rr[-hr[87]].push(rr[hr[8]] & hr[12]), rr[hr[8]] >>= hr[11], rr[hr[9]] -= hr[11])
                      } while (rr[hr[9]] > hr[27]);
                      rr[hr[37]] = -hr[2]
                    } return rr[hr[37]] > -hr[2] && rr[-hr[87]].push((rr[hr[8]] | rr[hr[37]] << rr[hr[9]]) & hr[12]), Yr(rr[-hr[87]])
              }(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
            }
            rr[hr[13]] = hr[1],
              function(...rr) {
                function Sr(...rr) {
                  for (lr(rr[hr[13]] = hr[2], rr[hr[2]] = [], rr[-hr[94]] = hr[1], rr[hr[4]] = rr[hr[1]].length, rr[hr[10]] = hr[20], rr[-hr[28]] = hr[20]); rr[-hr[94]] < rr[hr[4]];) lr(rr[hr[10]] = rr[hr[1]].charCodeAt(rr[-hr[94]]++), rr[hr[10]] >= hr[99] && rr[hr[10]] <= 56319 && rr[-hr[94]] < rr[hr[4]] ? (rr[-hr[28]] = rr[hr[1]].charCodeAt(rr[-hr[94]]++), (64512 & rr[-hr[28]]) == hr[100] ? rr[hr[2]].push(((rr[hr[10]] & hr[95]) << hr[98]) + (rr[-hr[28]] & hr[95]) + hr[97]) : (rr[hr[2]].push(rr[hr[10]]), rr[-hr[94]]--)) : rr[hr[2]].push(rr[hr[10]]));
                  return rr[hr[2]]
                }

                function Qr(...rr) {
                  if (rr[hr[13]] = hr[2], rr[hr[1]] >= hr[99] && rr[hr[1]] <= 57343) {
                    function Sr(...rr) {
                      for (lr(rr[hr[13]] = hr[2], rr[hr[5]] = 'd_HFfbVNK=9rC4lIzhQZ"&iSL[T0(7`ja!);6sqBk@#{$DP?UoguO*E|+v3.Gce,8JWnXM2wm5xYytA}1><p]R/%~^:', rr[hr[30]] = "" + (rr[hr[1]] || ""), rr[hr[34]] = rr[hr[30]].length, rr[-hr[103]] = [], rr[-hr[102]] = hr[1], rr[-hr[101]] = hr[1], rr[hr[27]] = -hr[2]), rr[hr[3]] = hr[1]; rr[hr[3]] < rr[hr[34]]; rr[hr[3]]++)
                        if (rr[hr[6]] = rr[hr[5]].indexOf(rr[hr[30]][rr[hr[3]]]), rr[hr[6]] !== -hr[2])
                          if (rr[hr[27]] < hr[1]) rr[hr[27]] = rr[hr[6]];
                          else {
                            lr(rr[hr[27]] += rr[hr[6]] * hr[38], rr[-hr[102]] |= rr[hr[27]] << rr[-hr[101]], rr[-hr[101]] += (rr[hr[27]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                            do {
                              lr(rr[-hr[103]].push(rr[-hr[102]] & hr[12]), rr[-hr[102]] >>= hr[11], rr[-hr[101]] -= hr[11])
                            } while (rr[-hr[101]] > hr[27]);
                            rr[hr[27]] = -hr[2]
                          } return rr[hr[27]] > -hr[2] && rr[-hr[103]].push((rr[-hr[102]] | rr[hr[27]] << rr[-hr[101]]) & hr[12]), Yr(rr[-hr[103]])
                    }

                    function Qr(...rr) {
                      return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = Sr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
                    }
                    throw Error(Qr(149) + Qr(150) + Qr(151) + rr[hr[1]].toString(hr[86]).toUpperCase() + (Qr(152) + Qr(153) + Qr(154) + Qr(hr[48])))
                  }
                }

                function Zr(...Sr) {
                  return Sr[hr[13]] = hr[30], rr[hr[2]](Sr[hr[1]] >> Sr[hr[2]] & hr[24] | hr[58])
                }

                function Wr(...Sr) {
                  return Sr[hr[13]] = hr[2], (4294967168 & Sr[hr[1]]) == hr[1] ? rr[hr[2]](Sr[hr[1]]) : (Sr[hr[2]] = "", (4294965248 & Sr[hr[1]]) == hr[1] ? Sr[hr[2]] = rr[hr[2]](Sr[hr[1]] >> hr[25] & hr[104] | hr[109]) : (4294901760 & Sr[hr[1]]) == hr[1] ? lr(Qr(Sr[hr[1]]), Sr[hr[2]] = rr[hr[2]](Sr[hr[1]] >> hr[28] & hr[105] | hr[93]), Sr[hr[2]] += Zr(Sr[hr[1]], hr[25])) : (4292870144 & Sr[hr[1]]) == hr[1] && lr(Sr[hr[2]] = rr[hr[2]](Sr[hr[1]] >> hr[106] & hr[27] | hr[84]), Sr[hr[2]] += Zr(Sr[hr[1]], hr[28]), Sr[hr[2]] += Zr(Sr[hr[1]], hr[25])), Sr[hr[2]] += rr[hr[2]](Sr[hr[1]] & hr[24] | hr[58]), Sr[hr[2]])
                }

                function ar(...Sr) {
                  if (Sr[hr[13]] = hr[1], rr[hr[30]] >= rr[-hr[110]]) {
                    function Qr(...rr) {
                      for (lr(rr[hr[13]] = hr[2], rr[hr[2]] = '=4@^M&26tVv0<rnA.Be#Di`bfS}k(s,Og!|j]h$Uu"NRT[p/CcldF7HX+zoE>_G?ZP*J;{w)a95Kx8Iy1%3YWQqm:L~', rr[hr[17]] = "" + (rr[hr[1]] || ""), rr[hr[34]] = rr[hr[17]].length, rr[hr[18]] = [], rr[hr[8]] = hr[1], rr[hr[9]] = hr[1], rr[hr[27]] = -hr[2]), rr[hr[3]] = hr[1]; rr[hr[3]] < rr[hr[34]]; rr[hr[3]]++)
                        if (rr[hr[6]] = rr[hr[2]].indexOf(rr[hr[17]][rr[hr[3]]]), rr[hr[6]] !== -hr[2])
                          if (rr[hr[27]] < hr[1]) rr[hr[27]] = rr[hr[6]];
                          else {
                            lr(rr[hr[27]] += rr[hr[6]] * hr[38], rr[hr[8]] |= rr[hr[27]] << rr[hr[9]], rr[hr[9]] += (rr[hr[27]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                            do {
                              lr(rr[hr[18]].push(rr[hr[8]] & hr[12]), rr[hr[8]] >>= hr[11], rr[hr[9]] -= hr[11])
                            } while (rr[hr[9]] > hr[27]);
                            rr[hr[27]] = -hr[2]
                          } return rr[hr[27]] > -hr[2] && rr[hr[18]].push((rr[hr[8]] | rr[hr[27]] << rr[hr[9]]) & hr[12]), Yr(rr[hr[18]])
                    }

                    function Zr(...rr) {
                      return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = Qr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
                    }
                    throw Error(Zr(156))
                  }
                  if (lr(Sr[hr[108]] = rr[hr[116]][rr[hr[30]]] & hr[12], rr[hr[30]]++), (Sr[hr[108]] & hr[109]) == hr[58]) return Sr[hr[108]] & hr[24];
                  throw Error(cr(157))
                }

                function jr(...Sr) {
                  if (lr(Sr[hr[13]] = hr[1], Sr[-hr[115]] = hr[20], Sr[hr[17]] = hr[20], Sr[hr[30]] = hr[20], Sr[-hr[120]] = hr[20], Sr[hr[117]] = hr[20]), rr[hr[30]] > rr[-hr[110]]) {
                    function Zr(...rr) {
                      for (lr(rr[hr[13]] = hr[2], rr[hr[5]] = 'w*<jv#}BA&^0;~2:aVhSCtN=ODz|kJZ.4`9PsgyIQxFLRdr$HGX8/6E@T"_b{?n537luq(WYo]M1ifK!)mU[+%,>ecp', rr[hr[111]] = "" + (rr[hr[1]] || ""), rr[hr[4]] = rr[hr[111]].length, rr[hr[10]] = [], rr[hr[55]] = hr[1], rr[hr[27]] = hr[1], rr[hr[114]] = -hr[2]), rr[hr[112]] = hr[1]; rr[hr[112]] < rr[hr[4]]; rr[hr[112]]++)
                        if (rr[hr[113]] = rr[hr[5]].indexOf(rr[hr[111]][rr[hr[112]]]), rr[hr[113]] !== -hr[2])
                          if (rr[hr[114]] < hr[1]) rr[hr[114]] = rr[hr[113]];
                          else {
                            lr(rr[hr[114]] += rr[hr[113]] * hr[38], rr[hr[55]] |= rr[hr[114]] << rr[hr[27]], rr[hr[27]] += (rr[hr[114]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                            do {
                              lr(rr[hr[10]].push(rr[hr[55]] & hr[12]), rr[hr[55]] >>= hr[11], rr[hr[27]] -= hr[11])
                            } while (rr[hr[27]] > hr[27]);
                            rr[hr[114]] = -hr[2]
                          } return rr[hr[114]] > -hr[2] && rr[hr[10]].push((rr[hr[55]] | rr[hr[114]] << rr[hr[27]]) & hr[12]), Yr(rr[hr[10]])
                    }

                    function Wr(...rr) {
                      return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = Zr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
                    }
                    throw Error(Wr(158))
                  }
                  if (rr[hr[30]] == rr[-hr[110]]) return hr[33];
                  if (lr(Sr[-hr[115]] = rr[hr[116]][rr[hr[30]]] & hr[12], rr[hr[30]]++), (Sr[-hr[115]] & hr[58]) == hr[1]) return Sr[-hr[115]];
                  if ((Sr[-hr[115]] & hr[93]) == hr[109]) {
                    if (lr(Sr[hr[17]] = ar(), Sr[hr[117]] = (Sr[-hr[115]] & hr[104]) << hr[25] | Sr[hr[17]]), Sr[hr[117]] >= hr[58]) return Sr[hr[117]];
                    {
                      function jr(rr) {
                        var Sr, Qr, Zr, Wr, ar, jr, Ir;
                        for (lr(Sr = "" + (rr || ""), Qr = Sr.length, Zr = [], Wr = hr[1], ar = hr[1], jr = -hr[2]), Ir = hr[1]; Ir < Qr; Ir++) {
                          var fr = 'N8v^HE)cm7}Xx5iDQ3[|F&4I1KJ%$9ZCgued,B;fOrUkT_l0RA]{Sha!s6YWjw>@pbPLt+"?z*qGMo~yn#(.:2`/=<V'.indexOf(Sr[Ir]);
                          if (fr !== -hr[2])
                            if (jr < hr[1]) jr = fr;
                            else {
                              lr(jr += fr * hr[38], Wr |= jr << ar, ar += (jr & hr[40]) > hr[41] ? hr[42] : hr[43]);
                              do {
                                lr(Zr.push(Wr & hr[12]), Wr >>= hr[11], ar -= hr[11])
                              } while (ar > hr[27]);
                              jr = -hr[2]
                            }
                        }
                        return jr > -hr[2] && Zr.push((Wr | jr << ar) & hr[12]), Yr(Zr)
                      }

                      function Er(...rr) {
                        return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = jr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
                      }
                      throw Error(Er(159))
                    }
                  }
                  if ((Sr[-hr[115]] & hr[84]) == hr[93]) {
                    if (lr(Sr[hr[17]] = ar(), Sr[hr[30]] = ar(), Sr[hr[117]] = (Sr[-hr[115]] & hr[105]) << hr[28] | Sr[hr[17]] << hr[25] | Sr[hr[30]]), Sr[hr[117]] >= 2048) return Qr(Sr[hr[117]]), Sr[hr[117]];
                    {
                      function pr(...rr) {
                        for (lr(rr[hr[13]] = hr[2], rr[hr[2]] = '7;<=&)aT/HmhMPe0>n*SgEKVAOLt#zWN"28csf:5}oZqd+!$r1?({9Bp%J|3UvXIwR,ibY^`.]yFj6Dk[~lGQu@C_x4', rr[hr[30]] = "" + (rr[hr[1]] || ""), rr[hr[34]] = rr[hr[30]].length, rr[hr[10]] = [], rr[-hr[119]] = hr[1], rr[hr[9]] = hr[1], rr[hr[27]] = -hr[2]), rr[-hr[118]] = hr[1]; rr[-hr[118]] < rr[hr[34]]; rr[-hr[118]]++)
                          if (rr[hr[6]] = rr[hr[2]].indexOf(rr[hr[30]][rr[-hr[118]]]), rr[hr[6]] !== -hr[2])
                            if (rr[hr[27]] < hr[1]) rr[hr[27]] = rr[hr[6]];
                            else {
                              lr(rr[hr[27]] += rr[hr[6]] * hr[38], rr[-hr[119]] |= rr[hr[27]] << rr[hr[9]], rr[hr[9]] += (rr[hr[27]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                              do {
                                lr(rr[hr[10]].push(rr[-hr[119]] & hr[12]), rr[-hr[119]] >>= hr[11], rr[hr[9]] -= hr[11])
                              } while (rr[hr[9]] > hr[27]);
                              rr[hr[27]] = -hr[2]
                            } return rr[hr[27]] > -hr[2] && rr[hr[10]].push((rr[-hr[119]] | rr[hr[27]] << rr[hr[9]]) & hr[12]), Yr(rr[hr[10]])
                      }

                      function xr(...rr) {
                        return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = pr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
                      }
                      throw Error(xr(160))
                    }
                  }
                  if ((248 & Sr[-hr[115]]) == hr[84] && (lr(Sr[hr[17]] = ar(), Sr[hr[30]] = ar(), Sr[-hr[120]] = ar(), Sr[hr[117]] = (Sr[-hr[115]] & hr[27]) << hr[106] | Sr[hr[17]] << hr[28] | Sr[hr[30]] << hr[25] | Sr[-hr[120]]), Sr[hr[117]] >= hr[97] && Sr[hr[117]] <= 1114111)) return Sr[hr[117]];
                  throw Error(cr(161))
                }
                rr[hr[13]] = hr[2], rr[hr[2]] = String.fromCharCode, lr(rr[hr[116]] = hr[20], rr[-hr[110]] = hr[20], rr[hr[30]] = hr[20]), lr(rr[hr[1]].version = function(...rr) {
                  return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = function(...rr) {
                    for (lr(rr[hr[13]] = hr[2], rr[hr[90]] = 'Z&GiA5(L<,we@.Ko%z{H>a07])mB1FSj8Wq$=?2^CIf6|QEY+b4rlT#v~[hX;!9/cRJONtkUd:3n"V}P_gy`uDMxps*', rr[-hr[88]] = "" + (rr[hr[1]] || ""), rr[hr[4]] = rr[-hr[88]].length, rr[hr[93]] = [], rr[hr[55]] = hr[1], rr[hr[92]] = hr[1], rr[hr[37]] = -hr[2]), rr[hr[89]] = hr[1]; rr[hr[89]] < rr[hr[4]]; rr[hr[89]]++)
                      if (rr[hr[91]] = rr[hr[90]].indexOf(rr[-hr[88]][rr[hr[89]]]), rr[hr[91]] !== -hr[2])
                        if (rr[hr[37]] < hr[1]) rr[hr[37]] = rr[hr[91]];
                        else {
                          lr(rr[hr[37]] += rr[hr[91]] * hr[38], rr[hr[55]] |= rr[hr[37]] << rr[hr[92]], rr[hr[92]] += (rr[hr[37]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                          do {
                            lr(rr[hr[93]].push(rr[hr[55]] & hr[12]), rr[hr[55]] >>= hr[11], rr[hr[92]] -= hr[11])
                          } while (rr[hr[92]] > hr[27]);
                          rr[hr[37]] = -hr[2]
                        } return rr[hr[37]] > -hr[2] && rr[hr[93]].push((rr[hr[55]] | rr[hr[37]] << rr[hr[92]]) & hr[12]), Yr(rr[hr[93]])
                  }(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
                }(hr[75]), rr[hr[1]].encode = function(...rr) {
                  for (lr(rr[hr[13]] = hr[2], rr[hr[91]] = Sr(rr[hr[1]]), rr[hr[30]] = rr[hr[91]].length, rr[hr[107]] = -hr[2], rr[hr[18]] = hr[20], rr[hr[8]] = ""); ++rr[hr[107]] < rr[hr[30]];) lr(rr[hr[18]] = rr[hr[91]][rr[hr[107]]], rr[hr[8]] += Wr(rr[hr[18]]));
                  return rr[hr[8]]
                }, rr[hr[1]].decode = function(...Qr) {
                  for (lr(Qr[hr[13]] = hr[2], rr[hr[116]] = Sr(Qr[hr[1]]), rr[-hr[110]] = rr[hr[116]].length, rr[hr[30]] = hr[1], Qr[hr[5]] = [], Qr[hr[17]] = hr[20]);
                    (Qr[hr[17]] = jr()) !== hr[33];) Qr[hr[5]].push(Qr[hr[17]]);
                  return function(...Sr) {
                    for (lr(Sr[hr[13]] = hr[2], Sr[hr[2]] = Sr[hr[1]].length, Sr[hr[17]] = -hr[2], Sr[-hr[96]] = hr[20], Sr[hr[18]] = ""); ++Sr[hr[17]] < Sr[hr[2]];) Sr[-hr[96]] = Sr[hr[1]][Sr[hr[17]]], Sr[-hr[96]] > 65535 && lr(Sr[-hr[96]] -= hr[97], Sr[hr[18]] += rr[hr[2]](Sr[-hr[96]] >>> hr[98] & hr[95] | hr[99]), Sr[-hr[96]] = hr[100] | Sr[-hr[96]] & hr[95]), Sr[hr[18]] += rr[hr[2]](Sr[-hr[96]]);
                    return Sr[hr[18]]
                  }(Qr[hr[5]])
                })
              }(typeof exports === Sr(163) + Sr(164) ? this.utf8 = {} : exports)
          }
          cr(148) + "N" in nr && Fr(), Wr()[cr(165)](er, er, yr, ir)
        }
        lr(Pr = (hr[1], ar.t)(Pr, 1, Math[Gr(hr[121])](hr[2], Math[Gr(166)](hr[1], -Vr, hr[2] - Ar / Er))), Wr()[Gr(hr[0])](er, er, Br))
      }
      const Hr = Tr;
      lr(Wr()[mr(168)](Hr, er, Or), Hr[hr[2]] = hr[1]);
      let qr = Wr()[mr(hr[128])](Hr);
      Xr || (qr *= Pr);
      const Rr = pr[mr(hr[127]) + mr(hr[117]) + mr(172)],
        gr = Rr ? Math[mr(hr[94])](Rr, qr) : qr;
      Wr()[mr(hr[103]) + mr(175)](Hr, Hr);
      const Cr = xr !== hr[56] && xr !== void hr[1] ? xr : pr[mr(hr[76]) + mr(177) + mr(178) + mr(179)];
      if (gr > hr[1]) {
        function or(...rr) {
          for (lr(rr[hr[13]] = hr[2], rr[hr[123]] = '3v<=`$BJ7Mi}5Yj_b]"DHe@gXQd6L?|l{WC+h#au1q*^wTV;~)9RnPxF!GfEs2z&cIy./KmS%0(Zo,tr48A:Okp>U[N', rr[hr[17]] = "" + (rr[hr[1]] || ""), rr[hr[4]] = rr[hr[17]].length, rr[-hr[122]] = [], rr[hr[124]] = hr[1], rr[hr[9]] = hr[1], rr[hr[37]] = -hr[2]), rr[-hr[115]] = hr[1]; rr[-hr[115]] < rr[hr[4]]; rr[-hr[115]]++)
            if (rr[-hr[32]] = rr[hr[123]].indexOf(rr[hr[17]][rr[-hr[115]]]), rr[-hr[32]] !== -hr[2])
              if (rr[hr[37]] < hr[1]) rr[hr[37]] = rr[-hr[32]];
              else {
                lr(rr[hr[37]] += rr[-hr[32]] * hr[38], rr[hr[124]] |= rr[hr[37]] << rr[hr[9]], rr[hr[9]] += (rr[hr[37]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                do {
                  lr(rr[-hr[122]].push(rr[hr[124]] & hr[12]), rr[hr[124]] >>= hr[11], rr[hr[9]] -= hr[11])
                } while (rr[hr[9]] > hr[27]);
                rr[hr[37]] = -hr[2]
              } return rr[hr[37]] > -hr[2] && rr[-hr[122]].push((rr[hr[124]] | rr[hr[37]] << rr[hr[9]]) & hr[12]), Yr(rr[-hr[122]])
        }

        function br(...rr) {
          return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = or(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
        }

        function Jr(...rr) {
          lr(rr[hr[13]] = hr[1], rr[-hr[67]] = function(...Sr) {
            return lr(Sr[hr[13]] = hr[2], Sr[hr[5]] = []), (Sr[hr[1]] === hr[2] || Sr[hr[1]] >= hr[18]) && rr[hr[2]](Sr[hr[5]], [], Sr[hr[1]], hr[1]), Sr[hr[5]]
          }, rr[hr[2]] = function(...Sr) {
            for (Sr[hr[13]] = hr[18], Sr[hr[18]] = Sr[hr[4]]; Sr[hr[18]] < Sr[hr[30]]; Sr[hr[18]]++) {
              if (Sr[hr[2]].length !== Sr[hr[18]]) return;
              for (Sr[hr[8]] = hr[1]; Sr[hr[8]] < Sr[hr[30]]; Sr[hr[8]]++) rr[hr[30]](Sr[hr[2]], [Sr[hr[18]], Sr[hr[8]]]) && (lr(Sr[hr[2]].push([Sr[hr[18]], Sr[hr[8]]]), rr[hr[2]](Sr[hr[1]], Sr[hr[2]], Sr[hr[30]], Sr[hr[18]] + hr[2])), Sr[hr[2]].length === Sr[hr[30]] && Sr[hr[1]].push(rr[hr[4]](Sr[hr[2]])), Sr[hr[2]].pop())
            }
          }, rr[hr[4]] = function(...rr) {
            for (lr(rr[hr[13]] = hr[2], rr[-hr[93]] = [], rr[hr[30]] = rr[hr[1]].length), rr[hr[34]] = hr[1]; rr[hr[34]] < rr[hr[30]]; rr[hr[34]]++)
              for (rr[-hr[93]][rr[hr[34]]] = "", rr[hr[10]] = hr[1]; rr[hr[10]] < rr[hr[30]]; rr[hr[10]]++) rr[-hr[93]][rr[hr[34]]] += rr[hr[1]][rr[hr[34]]][hr[2]] === rr[hr[10]] ? hr[125] : hr[126];
            return rr[-hr[93]]
          }, rr[hr[30]] = function(rr, Sr) {
            var Qr, Zr = rr.length;
            for (Qr = hr[1]; Qr < Zr; Qr++) {
              if (rr[Qr][hr[1]] === Sr[hr[1]] || rr[Qr][hr[2]] === Sr[hr[2]]) return hr[33];
              if (Math.abs((rr[Qr][hr[1]] - Sr[hr[1]]) / (rr[Qr][hr[2]] - Sr[hr[2]])) === hr[2]) return hr[33]
            }
            return hr[45]
          }, console.log(rr[-hr[67]]))
        }
        br(180) in nr && Jr();
        let Dr = Qr[br(181) + br(182)] * Cr;
        if (!Xr) {
          function sr(rr) {
            var Sr, Qr, Zr, Wr, ar, jr, Ir;
            for (lr(Sr = "" + (rr || ""), Qr = Sr.length, Zr = [], Wr = hr[1], ar = hr[1], jr = -hr[2]), Ir = hr[1]; Ir < Qr; Ir++) {
              var fr = 'qCmB9KWMGsQEthOYvIr(!]T_zPi8ug3xyn~;wVc`dH/*+Xp5=Z^1RFao#)Dk}%J6{,.&e<A?Lb7U0l|":fjN[S>$42@'.indexOf(Sr[Ir]);
              if (fr !== -hr[2])
                if (jr < hr[1]) jr = fr;
                else {
                  lr(jr += fr * hr[38], Wr |= jr << ar, ar += (jr & hr[40]) > hr[41] ? hr[42] : hr[43]);
                  do {
                    lr(Zr.push(Wr & hr[12]), Wr >>= hr[11], ar -= hr[11])
                  } while (ar > hr[27]);
                  jr = -hr[2]
                }
            }
            return jr > -hr[2] && Zr.push((Wr | jr << ar) & hr[12]), Yr(Zr)
          }

          function ur(...rr) {
            return rr[hr[13]] = hr[2], typeof Ir[rr[hr[1]]] === hr[19] ? Ir[rr[hr[1]]] = sr(fr[rr[hr[1]]]) : Ir[rr[hr[1]]]
          }

          function rS(...rr) {
            lr(rr[hr[13]] = hr[1], rr[hr[5]] = function(...Sr) {
              return lr(Sr[hr[13]] = hr[30], Sr[hr[5]] = [], Sr[hr[4]] = Sr[hr[1]].length, Sr[hr[1]].sort(((rr, Sr) => rr - Sr)), rr[hr[127]](Sr[hr[5]], [], hr[1], Sr[hr[4]], Sr[hr[1]], Sr[hr[2]])), Sr[hr[5]]
            }, rr[hr[127]] = function(Sr, Qr, Zr, Wr, ar, jr) {
              var Ir, fr = hr[56];
              if (!(jr < hr[1])) {
                if (jr === hr[1]) return Sr.push(Qr);
                for (Ir = Zr; Ir < Wr && !(ar[Ir] > jr); Ir++) Ir > Zr && ar[Ir] === ar[Ir - hr[2]] || lr(fr = Array.from(Qr), fr.push(ar[Ir]), rr[hr[127]](Sr, fr, Ir + hr[2], Wr, ar, jr - ar[Ir]))
              }
            }, console.log(rr[hr[5]]))
          }
          br(hr[44]) in nr && rS(), Dr *= Qr[ur(184) + ur(185)]
        }
        let dr = Qr[br(186) + br(hr[87]) + "ss"] * gr;
        if (gr < .3) {
          function SS(...rr) {
            for (lr(rr[hr[13]] = hr[2], rr[hr[2]] = 'fAB=2CyD+q*]R)T.[N8k1J{54cZx<aWQ?lU^S7|"(0tEw9I`,pos;vmVdY_u@$P:in6KFMOGLg~}/&H#zX%3h>!bejr', rr[hr[30]] = "" + (rr[hr[1]] || ""), rr[hr[34]] = rr[hr[30]].length, rr[-hr[88]] = [], rr[-hr[128]] = hr[1], rr[hr[25]] = hr[1], rr[hr[37]] = -hr[2]), rr[hr[11]] = hr[1]; rr[hr[11]] < rr[hr[34]]; rr[hr[11]]++)
              if (rr[hr[129]] = rr[hr[2]].indexOf(rr[hr[30]][rr[hr[11]]]), rr[hr[129]] !== -hr[2])
                if (rr[hr[37]] < hr[1]) rr[hr[37]] = rr[hr[129]];
                else {
                  lr(rr[hr[37]] += rr[hr[129]] * hr[38], rr[-hr[128]] |= rr[hr[37]] << rr[hr[25]], rr[hr[25]] += (rr[hr[37]] & hr[40]) > hr[41] ? hr[42] : hr[43]);
                  do {
                    lr(rr[-hr[88]].push(rr[-hr[128]] & hr[12]), rr[-hr[128]] >>= hr[11], rr[hr[25]] -= hr[11])
                  } while (rr[hr[25]] > hr[27]);
                  rr[hr[37]] = -hr[2]
                } return rr[hr[37]] > -hr[2] && rr[-hr[88]].push((rr[-hr[128]] | rr[hr[37]] << rr[hr[25]]) & hr[12]), Yr(rr[-hr[88]])
          }

          function QS(rr) {
            return typeof Ir[rr] === hr[19] ? Ir[rr] = SS(fr[rr]) : Ir[rr]
          }

          function ZS(...rr) {
            lr(rr[hr[13]] = hr[1], rr[hr[5]] = function(...Sr) {
              return lr(Sr[hr[13]] = hr[30], Sr[hr[30]] = [], Sr[hr[17]] = Sr[hr[1]].length, Sr[hr[1]].sort(((rr, Sr) => rr - Sr)), rr[hr[2]](Sr[hr[30]], [], hr[1], Sr[hr[17]], Sr[hr[1]], Sr[hr[2]])), Sr[hr[30]]
            }, rr[hr[2]] = function(...Sr) {
              if (lr(Sr[hr[13]] = hr[25], Sr[hr[25]] = hr[56]), !(Sr[hr[8]] < hr[1])) {
                if (Sr[hr[8]] === hr[1]) return Sr[hr[1]].push(Sr[hr[2]]);
                for (Sr[hr[27]] = Sr[hr[30]]; Sr[hr[27]] < Sr[hr[4]] && !(Sr[hr[18]][Sr[hr[27]]] > Sr[hr[8]]); Sr[hr[27]]++) Sr[hr[27]] > Sr[hr[30]] && Sr[hr[18]][Sr[hr[27]]] === Sr[hr[18]][Sr[hr[27]] - hr[2]] || lr(Sr[hr[25]] = Array.from(Sr[hr[2]]), Sr[hr[25]].push(Sr[hr[18]][Sr[hr[27]]]), rr[hr[2]](Sr[hr[1]], Sr[hr[25]], Sr[hr[27]] + hr[2], Sr[hr[4]], Sr[hr[18]], Sr[hr[8]] - Sr[hr[18]][Sr[hr[27]]]))
              }
            }, console.log(rr[hr[5]]))
          }
          QS(188) + "Z" in nr && ZS(), dr *= gr
        }
        Dr > dr && (Dr = dr), lr(Wr()[br(189)](Hr, Hr, Dr), jr[br(hr[78]) + br(191)](Hr))
      }
      jr[mr(hr[109]) + hr[130]] = Qr[mr(hr[119]) + mr(hr[53]) + hr[130]] * (Xr ? tr : vr)
    }
  },
  39160: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr,
      d: () => Ir
    });
    var Zr = Qr(39167),
      Wr = Qr(2049);
    const ar = 2,
      jr = 1,
      Ir = {
        sj: 1,
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

    function fr(rr, Sr, Qr, Ir, fr, Er, pr) {
      if (fr.speed) return (0, Zr.c)(Sr, Qr, Ir, fr, Er, pr, rr), void(fr.ticksToReachMaxIdleFriction = ar);
      const xr = Ir.isOnGround(),
        mr = Sr.bloxd.getSyncedClientOptions(Sr.bloxd.getPlayerReader(Qr)),
        Nr = null === mr ? Sr.bloxd.getClientPredictedOption(Qr, "groundFrictionScale") : mr.groundFrictionScale,
        Ur = null === mr ? Sr.bloxd.getClientPredictedOption(Qr, "airFrictionScale") : mr.airFrictionScale,
        tr = xr ? Nr : Ur,
        hr = Math.max(jr, tr),
        zr = fr.ticksToReachMaxIdleFriction / ar,
        Yr = (0, Wr.t)(hr, tr, zr);
      Er.friction = rr.standingFriction * ((null === mr ? Sr.bloxd.getClientPredictedOption(Qr, "airMomentumConservation") : mr.airMomentumConservation) ? Yr : tr), fr.ticksToReachMaxIdleFriction > 0 && fr.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);