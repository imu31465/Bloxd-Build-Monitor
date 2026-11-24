export const id = 230;
export const ids = [230];
export const modules = {
  38598: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => BT
    });
    var WT = mT(208),
      zT = mT(37773);
    const MT = 1.2,
      gT = {
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
        Zn: .5,
        XUT: !1
      },
      nT = {
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
        Zn: .5,
        XUT: !1
      },
      HT = {
        physicsBodyDimensions: {
          width: WT.f.sc,
          height: WT.f.Fc
        },
        hitBoxDimensions: {
          width: WT.f.sc + .4,
          height: WT.f.Fc + .6
        },
        eyeHeight: WT.f.Fc * WT.f.playerEyeToHeightRatio,
        rideHeight: WT.f.Fc - .3,
        Zn: .5,
        XUT: !1
      },
      kT = {
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
        Zn: .5,
        XUT: !1
      },
      jT = {
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
        Zn: .5,
        XUT: !1
      },
      lT = {
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
        Zn: .5,
        XUT: !1
      },
      LT = {
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
        Zn: .5,
        XUT: !1
      },
      pT = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: WT.f.sc,
            height: WT.f.Fc
          },
          hitBoxDimensions: {
            width: WT.f.sc + .4,
            height: WT.f.Fc + .6
          },
          eyeHeight: WT.f.Fc * WT.f.playerEyeToHeightRatio,
          rideHeight: WT.f.Fc - .1,
          Zn: zT.c.Zn,
          XUT: !0
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
        },
        Camel: {
          modelScale: MT,
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
        },
        "Cave Golem": gT,
        "Draugr Zombie": {
          ...HT,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": HT,
        "Frost Golem": gT,
        "Frost Zombie": {
          ...HT,
          defaultPose: "zombie"
        },
        "Frost Skeleton": HT,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: WT.f.sc,
            height: WT.f.Fc
          },
          hitBoxDimensions: {
            width: WT.f.sc + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Zn: .5,
          XUT: !1
        },
        Wolf: kT,
        Bear: jT,
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
          Zn: .5,
          XUT: !1
        },
        Stag: lT,
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
          Zn: .5,
          XUT: !1
        },
        Gorilla: LT,
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
          Zn: .5,
          XUT: !1
        },
        "Draugr Huntress": HT,
        "Magma Golem": gT,
        "Spirit Golem": gT,
        "Spirit Wolf": kT,
        "Spirit Bear": jT,
        "Spirit Stag": lT,
        "Spirit Gorilla": LT,
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: WT.f.sc,
            height: WT.f.Fc
          },
          hitBoxDimensions: {
            width: WT.f.sc + .4,
            height: WT.f.Fc + .6
          },
          eyeHeight: WT.f.Fc * WT.f.playerEyeToHeightRatio,
          rideHeight: WT.f.Fc - .1,
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: WT.f.sc,
            height: WT.f.Fc
          },
          hitBoxDimensions: {
            width: WT.f.sc + .4,
            height: WT.f.Fc + .6
          },
          eyeHeight: WT.f.Fc * WT.f.playerEyeToHeightRatio,
          rideHeight: WT.f.Fc - .1,
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
        },
        Zombie: {
          ...HT,
          defaultPose: "zombie"
        },
        Skeleton: HT,
        Mummy: {
          ...HT,
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
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
          Zn: .5,
          XUT: !1
        },
        "Iron Guardian": nT,
        "Gold Guardian": nT,
        "Diamond Guardian": nT,
        "Moonstone Guardian": nT,
        "Iron Goofy Golem": nT,
        "Gold Goofy Golem": nT,
        "Diamond Goofy Golem": nT,
        "Moonstone Goofy Golem": nT,
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
          Zn: .5,
          XUT: !1
        }
      };

    function BT(TT) {
      return pT[TT]
    }
  },
  37162: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    const WT = {
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
  37781: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(375),
      zT = mT.n(WT),
      MT = mT(2014);
    let gT;
    var nT, HT, kT, jT, lT, LT, pT, BT, ZT;
    const cT = [2, 0, 1, 249, "c", 110, 139, "g", 5, "f", 4, 8, 255, "length", "undefined", void 0, "b", 238, 63, 6, "fromCodePoint", 7, 12, "push", "a", 215, 76, 3, 243, 14, "d", "e", 137, 101, 91, 8191, 88, 13, 219, 162, 227, 106, 217, null, 118, 119, 120, 114, 115, 116, 117, 121, 122, 123, 127, 128, 135, 136, 138, 140, 131, 192, 17, 9, 221, 210, 149, 226, "h", 163, "pk", !1, !0, 229, 150, 126, "i", 69, "j", "on"];

    function vT(...TT) {
      return TT[cT[13]] = cT[2], typeof nT[TT[cT[1]]] === cT[14] ? nT[TT[cT[1]]] = function(...TT) {
        for (wT(TT[cT[13]] = cT[2], TT[cT[5]] = 'w&60zT!Ws]cy3EM5(oHu*t|DkJK~S2v4RV%FCL@?"_,Qh8OrqBXA+}>nZ<d.)YU#f^mIe{GP`/=b71:N[aj;gp9ix$l', TT[cT[0]] = "" + (TT[cT[1]] || ""), TT[cT[4]] = TT[cT[0]].length, TT[cT[10]] = [], TT[cT[8]] = cT[1], TT[cT[9]] = cT[1], TT[cT[7]] = -cT[2]), TT[-cT[3]] = cT[1]; TT[-cT[3]] < TT[cT[4]]; TT[-cT[3]]++)
          if (TT[cT[6]] = TT[cT[5]].indexOf(TT[cT[0]][TT[-cT[3]]]), TT[cT[6]] !== -cT[2])
            if (TT[cT[7]] < cT[1]) TT[cT[7]] = TT[cT[6]];
            else {
              wT(TT[cT[7]] += TT[cT[6]] * cT[34], TT[cT[8]] |= TT[cT[7]] << TT[cT[9]], TT[cT[9]] += (TT[cT[7]] & cT[35]) > cT[36] ? cT[37] : cT[29]);
              do {
                wT(TT[cT[10]].push(TT[cT[8]] & cT[12]), TT[cT[8]] >>= cT[11], TT[cT[9]] -= cT[11])
              } while (TT[cT[9]] > cT[21]);
              TT[cT[7]] = -cT[2]
            } return TT[cT[7]] > -cT[2] && TT[cT[10]].push((TT[cT[8]] | TT[cT[7]] << TT[cT[9]]) & cT[12]), fT(TT[cT[10]])
      }(HT[TT[cT[1]]]) : nT[TT[cT[1]]]
    }

    function fT(TT) {
      return typeof jT !== cT[14] && jT ? (new jT).decode(new lT(TT)) : typeof LT !== cT[14] && LT ? LT.from(TT).toString("utf-8") : ZT(TT)
    }

    function qT() {}
    wT(nT = {}, HT = ["z)vSP)dvBH~02(RCX>8=v:12r}~`BEwvNZe}:CLFsEAZo`<S", "Oee4YAf!d.;Z`0}%@2%`k@}2X<Bo/`UoZ*$>|", 'w<=Tj{QpTEm1Xdvo*>"~_ba<Pdv*~KmLw]=sc9)Of)_[lK/H~^OWmU8b{u', "i.I2J:tEa]mBf;TQoQ6", '?L7TJ"|+rHr.h0SF(#n!', ";G)2>L:kh}P196<FZPZ>4.C6c^|n&", "9.M+_eZH8t6`y5LJ`8r7R[*kwHseXGg%Z8J>P)Z6", '1e9BLFW_03x=cKj%"LScK<TW$dB{daVC(3On?>K6T', '$qlR8Fk6c.qmz?xS3<S4I`J2a3FUE`N~"Q|7vPpNOsKo}`/uA<0', 'd]9SR.zvOtiIgC&Q<MgK%:PA_Mr/C0]HIAn+;@FE]Mp5Eq9"', "F]P7CFTbWny(dL&C&zXA!`>+)sP1w", "u>T7J/%H)U|%s0a?T)1zAjo{wm.Myj]", "0B(v%ezd1y[5?jWJ*PSWj<mHEH0N);s", "b^|zzNIDU.cbeCLk(L[]b<W_5m+", 'teW]OBO"+]:1#5&,HOpz>dV#/^V4GB7K8L@S,>]W+]', "AP;sLL!,$dc(uM%LX>0T[UlOid71C(+SJ^j2z}C=Fu]!&", "(Q1P#?^Fu]kd~6y", "9AQRP)*km<#/_z<Dy#pX(UnE^<$C<)2oLP{==<!OW", 'F)@+t;qO[<:=pCt"&]0', "WPk~/a6,V<]]L`R,@>u1qbpNo##B`0y@]R_!c{w", "]#t7W9Pba]gsw0", "Y]YWTC~rMmR`FK{H|5lR7{^&", 'GqKRqg^AF>r48qt~"2+cC.D}vH"Uk0', "9oB~6}gkO#u{${Gk0=x!k<5}^)R*#@$FszI2U%zvZEQnz;bJn>pK8b7H03>", ">o[B{},vLuc~DjGLK&", '[AvS,F~2|u|L?MTul.E4Fp)H6u:HMag~/q`!AA"OT', "g.j1)}rEO#_/D.[K9.oR2[v6/MrU4XMK?Q^>Q>EE^3R7kzJS&)lRUq`d8._", ')>4+77o2M5=Iz?|%HH"BrGN<guF7*r~Dy&', "uHeTeNpF^>)ML`a~W<N!oPw", "*)i+M<aEm)I##M=K.DUzwgVbV]", "[A6~_rcH.yuv6YQJ!HOzf%]uVH;}&", '{,PBx+MO%3fFdJFL1JsV,j*+5HA[taO"`^T73Cxk7^W!>B;%aw', "fq.s:qW}:HQq?@_u,=I}bUk9TumZy@}F[w", "mo2c(@IFdM`[EL]?{0NB3q#2scL%k;A~/UeT&Orb%3[IB(cK9J&b_Zo2A)n", ')q>n[+zf!fq/)0PLNL"]*P2F@Ed+7;%LrU}zz`"vd.rn4jCkq4t=M=l%Et', "u<bs/7+e}u}{+`kS8oG+.d_F5#E`O@}S03|4v+)vdoGSC;T4}e~c*@9k0", 'A*Dzl;l"_^g3N6K_40eTN8_btE^HFM0v<oLW', "6<.2>`N_#}oj=Ja?j8Lc2;tEUs8.&", "rP&Rk.HCo>LokP[~hUCn~P~F8myniMw2lo}nk.%v#5u{q50J$?G4t", 'hKs!WCv+l*v`|@F4,"O7}Zw', "/!_!)%S+zEXtk;i|<qzX}Zd6rm&(Uas", "u>DvB?`vX<8nBzILD=jA,/Br8tydlBs@fAWVkr{W%52nC;]", "|2n/+?RHKU>4>JwC;MzTAAcGz", "`.D/LZrW/d*NE`D2>Kz2o", "6<+2Ia#2T", '8Q#/D+Y&%5<FHTf2seovS">6', "CPZB_BKvxd+{<qQ?uR*1N7skj5+.aCf,L=n]", "7yrSReo22m;1BLC@f]H`!%$o1y>#nMa%j!`!", 'Ze6~{aS9WE^M&)]J&5N]/)+v;<$13(>"~PCco+!v3.MvNMIoA4eT5{w', "Q*C=<)w", "=*&!TqSk^>#&TC4o#U?BZ`1<Q.$Iw", '("B~cU*so<QW9Jr~Ny7}.%WJVm11:6{H1A&>*{*9B<%`)Cq?_"w!2', 'd"}n5Pdvcn;IyKl_C5#]i{2W3ts!yjTJ]B24j7w', "42o>n1,d`Eko#G=K{]Z!7{,6f<J!vB3@3DP]H{BWCu#WcT", "!K:7aamH%3IG&", "..Gn(X|+C]H{aC3@3L1WdgE&", "g^A`cafvdUB{r@%vxS6", ")et=@Y?#`*l|7;1~8Q0", "?<K2J/P#sd8Mo(lDjMtnWaaWW", 'uH{4[X|=o]7sda[?3R#S={^Fu<8{!@t_V)wVb<cs^H_qE`M*S"~25U"3Xu', 'yP01(+x%6uR0a`*Sn"?S)Onrhy`BuKFJv"sVR.vk4t0`w', "W##!p8ss8.(UFK6LYP~26q@krs", "?qV`F[C+3UN}bM/@{*J!2", '"Q?zSF2F=oM^%JVkc"g}[C%C$M(!T(&C!K]AR/@v!', "yDN7Iq+6", "#UZBLZ(6", "BP8Sn1I<BH=zPd9|N.1W}d=v7U:z[~WJ;SK~UN{Wr}$&~@SC+q5v#),6", "#/4/W9,OcoK^]C:K$Zyc", "7LmAS;JF6>&`((TJiGS4H;xk%)YM*~N~7UIR}bbbUs.1D6", "3RLc(;h6=oZ+Ha#oxqi+~;7d5#|*.@C@sK$>VBDa{u", "5>A2u<`OJ*k7]`xS]2e=8#Gk9En/~..olw", "HR#z]9Q&", 'i^<RSrJ_YZX7AjN~wOaARr,vs*I["`)CdK`/6`oWg>9HNGE?(AT+UgDrR5', "$^N!FYX+ndR44KsLDe71*Xl9iE", ").;=Wno}b*!%oqT4", 'R5]!]CE_M5lG$a_usBB~C"j[&#"/IdN~Gw', "cO57]7TJ,^qF#@(*=8As", "mq~1z%,dA]5e@6g%.PW]i7q[_oU+7.]", '4"V~OYorbsgRTgs', '~"?/V"X[&<a2e0),tPOWXgcd7oGR&`FL|Ae=Ad]bOmn#4MvF>>n>ua~uYUK', 'J)h=yn9kF>v*";^4)D?SL"f!/U^FEg!kK&', "&Qr]l:`v.U6(hrMK}>:zZ)Y2M.?S)~^k{w", ')"_~R[GdO}{B(PIoyHT=Waf[E.^RmEKSPL_>cqC+}fFqz5k_)SJ>"BAr3o', 'J=i+J+"dpEV{JYy@Zw', "&z^>ZND}(mS{3?*%uP)4n%sG{uOU.ja?+3!7OGEWA]A[q)<_N^]!])w", 'ZUTnjXNp0]P);MgSU^.cpPm!I]WElB|"`,+1l8xOsd8.~6&k8<!]', "j4,`K>9k:st7Z(7u4e!W1{]}I),{Rrb@E<`A!Cj+hU%76a5?{w", '6zlsaP|O1H"MPKTQ@QEWTqQpby`[}JH*V314^}eHlM>J+0$%a/NSeq^<Lu~', '5"s:F"Y2pdP|hr*S}<{WMnp&', '{!7=>%:%$d=IP.2oPy@WqG}E|d&("0DS+Pq/<`jOcnV^F6', "A^@7M<l3OHz`q(x,&Q#zJ/`3c^75&", "OeCcOYmHm):C}z", "XAQR&g2btE.[u6", "|<Tc:CDWWnK`cM=?_=$>VFd6]Ms([;fD[w", "CeF`.}w", '#L_!(+)OX>"cqr`ue>s!c{{E]UaZOJRv8U+}@rw', "Y.?S&)w", 'YSMnfnmk|ETNOJ]@^SVA(nO3^]?/wg9_S"GnS@>9I]@', "{,w:nd_Wif;)IMg%v^9S+ZWJR#C{y6", '[AI1"bR6', "?3lR$@W&", "mA@41a*6", "]Tq9M8Y<", "^[h1", "RCq1.:a", "^T#L", "1mM3pDy", "cYhTU19?", "]Y@;.+9?", "YYBT", "cY0eu,d?", "OY!191z?", "<:0eX^b?", "`(=ez", "cY0e91z?", "<:hT]W=?", "d%|N`+c?", "W<|``^d?", "Dt&`6ec?", "$t+1e#z?", ";:eq_0m?", "E%@;kWz?", "`H+1pe7~", "){{`C", "IYhT", "BY0q5", "%(E`I", ";R}thbg?", "&p>3C", "cY0eu,&5@", "k9oBPq}W@", "((a3Yq5#@", "cY0e91:I$5", "%gb`;DA5G=", "k9X@##>r$5", "E%t`Q*U?", "`3tNI+y", "E%t`C^]?", "<:|`X1(~", ";:n`FWR?", "IH+1pey", "V@gx:Qe~", "lHt`nev?", '<]gAv8i}WG0%7(2n,M~KIIC+f"Fwu[2nf/bHf,<QZ!wTDY,][]y$K', 'LlyYi}1E6ez_QMSRqP=A@@*&2!I]V8SR_Z"Cxx04qiz>XwQdfG', "WO8#wC~fs$@y?jR11Otk4{wPar|A5w]4FSbAc", "9yRP", "?JRz", "^u0y", "H|TW", "MV0y", "vE<VerdU", "^udWI", "U~bW", "N4jz", "!pnN", ".Y=e^#%?", "~x2Tg)l?", "]9D1##9?", "n38N", "S%>3", "$(t`S0m?", "&q8N", "](8`,1=?", "(H>Q(WU?", "6$zTW#z?", "}mD!FWy", "Vwuno+`2", "kU%Ev{Zl", "FG%C", "mTWE[~3l", "aiE`t,4", ".c1i]~Ml", "PT%E!V#l", "rGWC0Ie", "LvDGk:{2", "~Whu[", "*t+1e#z?", "](8`nev?"]), wT(kT = function() {
      var TT, UT, mT, WT = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      wT(TT = void 0, UT = []);
      try {
        wT(TT = Object, UT[cT[23]]("".__proto__.constructor.name))
      } catch (lT) {}
      TT: for (mT = cT[1]; mT < WT[cT[13]]; mT++) try {
        var zT;
        for (TT = WT[mT](), zT = cT[1]; zT < UT[cT[13]]; zT++)
          if (typeof TT[UT[zT]] === cT[14]) continue TT;
        return TT
      } catch (lT) {}
      return TT || this
    }() || {}, jT = kT.TextDecoder, lT = kT.Uint8Array, LT = kT.HB, pT = kT.String || String, BT = kT.Array || Array, ZT = function() {
      var TT, UT, mT = new BT(cT[55]);
      return wT(TT = pT[cT[20]] || pT.fromCharCode, UT = []),
        function(...WT) {
          for (wT(WT[cT[13]] = cT[2], WT[cT[17]] = cT[15], WT[cT[16]] = cT[15], WT[cT[4]] = WT[cT[1]][cT[13]], UT[cT[13]] = cT[1]), WT[cT[10]] = cT[1]; WT[cT[10]] < WT[cT[4]];) wT(WT[cT[16]] = WT[cT[1]][WT[cT[10]]++], WT[cT[16]] <= cT[54] ? WT[cT[17]] = WT[cT[16]] : WT[cT[16]] <= 223 ? WT[cT[17]] = (31 & WT[cT[16]]) << cT[19] | WT[cT[1]][WT[cT[10]]++] & cT[18] : WT[cT[16]] <= 239 ? WT[cT[17]] = (15 & WT[cT[16]]) << cT[22] | (WT[cT[1]][WT[cT[10]]++] & cT[18]) << cT[19] | WT[cT[1]][WT[cT[10]]++] & cT[18] : pT[cT[20]] ? WT[cT[17]] = (WT[cT[16]] & cT[21]) << 18 | (WT[cT[1]][WT[cT[10]]++] & cT[18]) << cT[22] | (WT[cT[1]][WT[cT[10]]++] & cT[18]) << cT[19] | WT[cT[1]][WT[cT[10]]++] & cT[18] : (WT[cT[17]] = cT[18], WT[cT[10]] += cT[27]), UT[cT[23]](mT[WT[cT[17]]] || (mT[WT[cT[17]]] = TT(WT[cT[17]]))));
          return UT.join("")
        }
    }()), vT(99) in qT && function() {
      var TT, UT = function(...UT) {
        return wT(UT[cT[13]] = cT[0], UT[cT[24]] = [], UT[cT[25]] = UT[cT[1]].length, UT[cT[1]].sort(((TT, UT) => TT - UT)), TT(UT[cT[24]], [], cT[1], UT[cT[25]], UT[cT[1]], UT[cT[2]])), UT[cT[24]]
      };
      wT(TT = function(...UT) {
        if (wT(UT[cT[13]] = cT[19], UT[-cT[28]] = cT[43]), !(UT[cT[8]] < cT[1])) {
          if (UT[cT[8]] === cT[1]) return UT[cT[1]].push(UT[cT[2]]);
          for (UT[cT[26]] = UT[cT[0]]; UT[cT[26]] < UT[cT[27]] && !(UT[cT[10]][UT[cT[26]]] > UT[cT[8]]); UT[cT[26]]++) UT[cT[26]] > UT[cT[0]] && UT[cT[10]][UT[cT[26]]] === UT[cT[10]][UT[cT[26]] - cT[2]] || wT(UT[-cT[28]] = Array.from(UT[cT[2]]), UT[-cT[28]].push(UT[cT[10]][UT[cT[26]]]), TT(UT[cT[1]], UT[-cT[28]], UT[cT[26]] + cT[2], UT[cT[27]], UT[cT[10]], UT[cT[8]] - UT[cT[10]][UT[cT[26]]]))
        }
      }, console.log(UT))
    }();
    const iT = zT()[vT(cT[33])](),
      bT = zT()[vT(cT[33])](),
      OT = zT()[vT(cT[33])](),
      eT = zT()[vT(cT[33])](),
      YT = zT()[vT(cT[33])](),
      JT = zT()[vT(cT[33])](),
      xT = zT()[vT(cT[33])](),
      dT = (...TT) => {
        function UT(...TT) {
          return TT[cT[13]] = cT[2], typeof nT[TT[cT[1]]] === cT[14] ? nT[TT[cT[1]]] = function(TT) {
            var UT, mT, WT, zT, MT, gT, nT;
            for (wT(UT = "" + (TT || ""), mT = UT.length, WT = [], zT = cT[1], MT = cT[1], gT = -cT[2]), nT = cT[1]; nT < mT; nT++) {
              var HT = 'aw<v5}4y1CL_6K"xHu$f!#XVot|^z&.39lYJO]7DdcWT,{;M?A`q=p~0+(2m@/)UR%>*8GQ:sB[FinZINEghjPSbekr'.indexOf(UT[nT]);
              if (HT !== -cT[2])
                if (gT < cT[1]) gT = HT;
                else {
                  wT(gT += HT * cT[34], zT |= gT << MT, MT += (gT & cT[35]) > cT[36] ? cT[37] : cT[29]);
                  do {
                    wT(WT.push(zT & cT[12]), zT >>= cT[11], MT -= cT[11])
                  } while (MT > cT[21]);
                  gT = -cT[2]
                }
            }
            return gT > -cT[2] && WT.push((zT | gT << MT) & cT[12]), fT(WT)
          }(HT[TT[cT[1]]]) : nT[TT[cT[1]]]
        }
        TT[cT[13]] = cT[27];
        const mT = JT;
        return zT()[UT(102) + UT(103)](mT, TT[cT[0]]), zT()[UT(104)](TT[cT[1]], mT, zT()[UT(105)](mT, TT[cT[2]]))
      };

    function wT() {
      wT = function() {}
    }
    gT = (...TT) => {
      function UT(...TT) {
        return TT[cT[13]] = cT[2], typeof nT[TT[cT[1]]] === cT[14] ? nT[TT[cT[1]]] = function(...TT) {
          for (wT(TT[cT[13]] = cT[2], TT[cT[2]] = 'y~?{xB@wN3T[9POYUAc5=hf.vC%&zuI!`kmE]$dj:FG(_<gSlibtV2R;"HsnpK6J>/Z|0*D+MQq71e^aW#)8o,rL4X}', TT[cT[16]] = "" + (TT[cT[1]] || ""), TT[cT[4]] = TT[cT[16]].length, TT[cT[10]] = [], TT[cT[8]] = cT[1], TT[-cT[40]] = cT[1], TT[-cT[39]] = -cT[2]), TT[cT[11]] = cT[1]; TT[cT[11]] < TT[cT[4]]; TT[cT[11]]++)
            if (TT[cT[38]] = TT[cT[2]].indexOf(TT[cT[16]][TT[cT[11]]]), TT[cT[38]] !== -cT[2])
              if (TT[-cT[39]] < cT[1]) TT[-cT[39]] = TT[cT[38]];
              else {
                wT(TT[-cT[39]] += TT[cT[38]] * cT[34], TT[cT[8]] |= TT[-cT[39]] << TT[-cT[40]], TT[-cT[40]] += (TT[-cT[39]] & cT[35]) > cT[36] ? cT[37] : cT[29]);
                do {
                  wT(TT[cT[10]].push(TT[cT[8]] & cT[12]), TT[cT[8]] >>= cT[11], TT[-cT[40]] -= cT[11])
                } while (TT[-cT[40]] > cT[21]);
                TT[-cT[39]] = -cT[2]
              } return TT[-cT[39]] > -cT[2] && TT[cT[10]].push((TT[cT[8]] | TT[-cT[39]] << TT[-cT[40]]) & cT[12]), fT(TT[cT[10]])
        }(HT[TT[cT[1]]]) : nT[TT[cT[1]]]
      }
      TT[cT[13]] = cT[11];
      const mT = TT[cT[1]][UT(cT[41])][UT(107) + UT(108) + UT(109)](TT[cT[2]]);
      TT[-cT[42]] = TT[cT[1]][UT(cT[41])][UT(cT[5]) + UT(111) + UT(112) + UT(113)](mT);
      const WT = TT[-cT[42]] === cT[43] ? TT[cT[1]][UT(cT[41])][UT(cT[47]) + UT(cT[48]) + UT(cT[49]) + UT(cT[50])](TT[cT[2]], UT(cT[44]) + UT(cT[45]) + UT(cT[46]) + cT[31]) : TT[-cT[42]][UT(cT[44]) + UT(cT[45]) + UT(cT[46]) + cT[31]],
        gT = TT[-cT[42]] === cT[43] ? TT[cT[1]][UT(cT[41])][UT(cT[47]) + UT(cT[48]) + UT(cT[49]) + UT(cT[50])](TT[cT[2]], UT(cT[51]) + UT(cT[52]) + UT(cT[53])) : TT[-cT[42]][UT(cT[51]) + UT(cT[52]) + UT(cT[53])];
      wT(zT()[UT(124)](iT, cT[1], cT[1], TT[cT[8]]), zT().cj(iT, iT, zT()[UT(125)], TT[cT[27]].heading), zT()[UT(cT[75])](xT, TT[cT[10]].Tc), xT[cT[2]] = cT[1]);
      const kT = TT[cT[0]][UT(cT[54]) + UT(cT[55])]();
      if (wT(TT[-cT[42]] = TT[cT[1]][UT(cT[41])][UT(129) + UT(130) + UT(cT[60]) + "s"](mT), TT[cT[16]] = TT[-cT[42]] === cT[43] ? TT[cT[1]][UT(cT[41])][UT(132) + UT(133) + UT(134)](TT[cT[2]], UT(cT[56]) + UT(cT[57])) : TT[-cT[42]][UT(cT[56]) + UT(cT[57])]), !kT && zT()[cT[70]](xT) && (TT[-cT[42]] === cT[43] ? TT[cT[1]][UT(cT[41])][UT(cT[47]) + UT(cT[48]) + UT(cT[49]) + UT(cT[50])](TT[cT[2]], UT(cT[32]) + UT(cT[58]) + UT(cT[6]) + UT(cT[59])) : TT[-cT[42]][UT(cT[32]) + UT(cT[58]) + UT(cT[6]) + UT(cT[59])])) {
        function BT(...TT) {
          for (wT(TT[cT[13]] = cT[2], TT[cT[62]] = '$UAf~dBezyW94hiu.vFC[T!^s}VHINp?EQ)GXPmL%5]|2SoM#_`/DbOlZg,RJnYK01t+&8{(;c6j<kar*>:=qx7w@3"', TT[-cT[60]] = "" + (TT[cT[1]] || ""), TT[-cT[61]] = TT[-cT[60]].length, TT[cT[10]] = [], TT[cT[65]] = cT[1], TT[cT[19]] = cT[1], TT[cT[64]] = -cT[2]), TT[cT[11]] = cT[1]; TT[cT[11]] < TT[-cT[61]]; TT[cT[11]]++)
            if (TT[cT[63]] = TT[cT[62]].indexOf(TT[-cT[60]][TT[cT[11]]]), TT[cT[63]] !== -cT[2])
              if (TT[cT[64]] < cT[1]) TT[cT[64]] = TT[cT[63]];
              else {
                wT(TT[cT[64]] += TT[cT[63]] * cT[34], TT[cT[65]] |= TT[cT[64]] << TT[cT[19]], TT[cT[19]] += (TT[cT[64]] & cT[35]) > cT[36] ? cT[37] : cT[29]);
                do {
                  wT(TT[cT[10]].push(TT[cT[65]] & cT[12]), TT[cT[65]] >>= cT[11], TT[cT[19]] -= cT[11])
                } while (TT[cT[19]] > cT[21]);
                TT[cT[64]] = -cT[2]
              } return TT[cT[64]] > -cT[2] && TT[cT[10]].push((TT[cT[65]] | TT[cT[64]] << TT[cT[19]]) & cT[12]), fT(TT[cT[10]])
        }

        function ZT(...TT) {
          return TT[cT[13]] = cT[2], typeof nT[TT[cT[1]]] === cT[14] ? nT[TT[cT[1]]] = BT(HT[TT[cT[1]]]) : nT[TT[cT[1]]]
        }
        UT(141), wT(dT(bT, iT, xT), dT(OT, xT, iT), zT()[ZT(147)](eT, xT, OT));
        const vT = zT()[ZT(148)](xT),
          JT = zT()[ZT(cT[66])](iT, xT) / TT[cT[8]] / vT,
          tT = Math[ZT(cT[74])](JT, cT[1]) + cT[2];
        if (TT[cT[8]] * TT[cT[8]] < zT()[cT[70]](OT)) {
          function aT(...TT) {
            wT(TT[cT[13]] = cT[1], TT[cT[73]] = function(...UT) {
              return UT[cT[13]] = cT[0], TT[cT[2]]({}, UT[cT[1]], UT[cT[2]])
            }, TT[cT[2]] = function(UT, mT, WT) {
              var zT, MT, gT, nT = {};
              if (UT[mT + WT] !== cT[15]) return UT[mT + WT];
              if (mT === WT) return cT[72];
              for (zT = cT[1]; zT < mT.length; zT++) nT[mT[zT]] === cT[15] && (nT[mT[zT]] = cT[1]), nT[WT[zT]] === cT[15] && (nT[WT[zT]] = cT[1]), wT(nT[mT[zT]]++, nT[WT[zT]]--);
              for (MT in nT)
                if (nT[MT] !== cT[1]) return UT[mT + WT] = cT[71], cT[71];
              for (gT = cT[2]; gT < mT.length; gT++)
                if (TT[cT[2]](UT, mT.substr(cT[1], gT), WT.substr(cT[1], gT)) && TT[cT[2]](UT, mT.substr(gT), WT.substr(gT)) || TT[cT[2]](UT, mT.substr(cT[1], gT), WT.substr(WT.length - gT)) && TT[cT[2]](UT, mT.substr(gT), WT.substr(cT[1], WT.length - gT))) return UT[mT + WT] = cT[72], cT[72];
              return UT[mT + WT] = cT[71], cT[71]
            }, console.log(TT[cT[73]]))
          }
          ZT(151) in qT && aT(), zT()[ZT(152)](iT, iT, OT, tT)
        }
        wT(TT[cT[16]] = (0, MT.z)(TT[cT[16]], 1, Math[ZT(cT[74])](cT[2], Math[ZT(153)](cT[1], -JT, cT[2] - vT / TT[cT[8]]))), zT()[ZT(154)](iT, iT, eT))
      }
      const jT = YT;
      wT(zT()[UT(155)](jT, iT, xT), jT[cT[2]] = cT[1], TT[cT[4]] = zT()[UT(156)](jT)), kT || (TT[cT[4]] *= TT[cT[16]]);
      const lT = TT[cT[19]][UT(157) + UT(158) + UT(159)],
        LT = lT ? Math[UT(160)](lT, TT[cT[4]]) : TT[cT[4]];
      zT()[UT(161) + UT(cT[39])](jT, jT);
      const pT = TT[cT[21]] !== cT[43] && void 0 !== TT[cT[21]] ? TT[cT[21]] : TT[cT[19]][UT(cT[69]) + UT(164) + UT(165) + UT(166)];
      if (LT > cT[1]) {
        function yT(TT) {
          var UT, mT, WT, zT, MT, gT, nT;
          for (wT(UT = "" + (TT || ""), mT = UT.length, WT = [], zT = cT[1], MT = cT[1], gT = -cT[2]), nT = cT[1]; nT < mT; nT++) {
            var HT = 'e2lqnABLCGi>51@c<j9O#*h46[Tty.0uEp]mkoM&Z`;U}Qv,f{aWKP3?(S!s_JwFrHYz+xgIN7$8XV~|DRb%d:"^)/='.indexOf(UT[nT]);
            if (HT !== -cT[2])
              if (gT < cT[1]) gT = HT;
              else {
                wT(gT += HT * cT[34], zT |= gT << MT, MT += (gT & cT[35]) > cT[36] ? cT[37] : cT[29]);
                do {
                  wT(WT.push(zT & cT[12]), zT >>= cT[11], MT -= cT[11])
                } while (MT > cT[21]);
                gT = -cT[2]
              }
          }
          return gT > -cT[2] && WT.push((zT | gT << MT) & cT[12]), fT(WT)
        }

        function XT(...TT) {
          return TT[cT[13]] = cT[2], typeof nT[TT[cT[1]]] === cT[14] ? nT[TT[cT[1]]] = yT(HT[TT[cT[1]]]) : nT[TT[cT[1]]]
        }

        function IT(...TT) {
          TT[cT[13]] = cT[1]
        }
        XT(167) + "x" in qT && IT();
        let QT = TT[cT[0]][XT(168) + XT(169)] * pT;
        if (!kT) {
          function FT(...TT) {
            for (wT(TT[cT[13]] = cT[2], TT[cT[24]] = '4HPrRDAmTV`Wnw8Moep/x[fB!vY2EQLyO.g&_ib#F;Izl@<10d5U"Xu=SJq]*sa73+K>~}jC)Nc:h$|Gt,Z%9^?k{6(', TT[cT[16]] = "" + (TT[cT[1]] || ""), TT[-cT[77]] = TT[cT[16]].length, TT[-cT[75]] = [], TT[cT[8]] = cT[1], TT[cT[7]] = cT[1], TT[cT[21]] = -cT[2]), TT[cT[76]] = cT[1]; TT[cT[76]] < TT[-cT[77]]; TT[cT[76]]++)
              if (TT[cT[78]] = TT[cT[24]].indexOf(TT[cT[16]][TT[cT[76]]]), TT[cT[78]] !== -cT[2])
                if (TT[cT[21]] < cT[1]) TT[cT[21]] = TT[cT[78]];
                else {
                  wT(TT[cT[21]] += TT[cT[78]] * cT[34], TT[cT[8]] |= TT[cT[21]] << TT[cT[7]], TT[cT[7]] += (TT[cT[21]] & cT[35]) > cT[36] ? cT[37] : cT[29]);
                  do {
                    wT(TT[-cT[75]].push(TT[cT[8]] & cT[12]), TT[cT[8]] >>= cT[11], TT[cT[7]] -= cT[11])
                  } while (TT[cT[7]] > cT[21]);
                  TT[cT[21]] = -cT[2]
                } return TT[cT[21]] > -cT[2] && TT[-cT[75]].push((TT[cT[8]] | TT[cT[21]] << TT[cT[7]]) & cT[12]), fT(TT[-cT[75]])
          }

          function PT(...TT) {
            return TT[cT[13]] = cT[2], typeof nT[TT[cT[1]]] === cT[14] ? nT[TT[cT[1]]] = FT(HT[TT[cT[1]]]) : nT[TT[cT[1]]]
          }
          QT *= TT[cT[0]][XT(170) + PT(171)]
        }
        let sT = TT[cT[0]][XT(172) + XT(173) + "ss"] * LT;
        LT < .3 && (sT *= LT), QT > sT && (QT = sT), wT(zT()[XT(174)](jT, jT, QT), TT[cT[10]][XT(175) + XT(176)](jT))
      }
      TT[cT[10]][UT(177) + cT[79]] = TT[cT[0]][UT(178) + UT(cT[45]) + cT[79]] * (kT ? WT : gT)
    }
  },
  37773: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT,
      c: () => nT
    });
    var WT = mT(37781),
      zT = mT(2014);
    const MT = 2,
      gT = 1,
      nT = {
        Zn: 1,
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

    function HT(TT, UT, mT, nT, HT, kT, jT) {
      if (HT.speed) return (0, WT.c)(UT, mT, nT, HT, kT, jT, TT), void(HT.ticksToReachMaxIdleFriction = MT);
      const lT = nT.isOnGround(),
        LT = UT.bloxd.getSyncedClientOptions(UT.bloxd.getPlayerReader(mT)),
        pT = null === LT ? UT.bloxd.getClientPredictedOption(mT, "groundFrictionScale") : LT.groundFrictionScale,
        BT = null === LT ? UT.bloxd.getClientPredictedOption(mT, "airFrictionScale") : LT.airFrictionScale,
        ZT = lT ? pT : BT,
        cT = Math.max(gT, ZT),
        vT = HT.ticksToReachMaxIdleFriction / MT,
        fT = (0, zT.z)(cT, ZT, vT);
      kT.friction = TT.standingFriction * ((null === LT ? UT.bloxd.getClientPredictedOption(mT, "airMomentumConservation") : LT.airMomentumConservation) ? fT : ZT), HT.ticksToReachMaxIdleFriction > 0 && HT.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);