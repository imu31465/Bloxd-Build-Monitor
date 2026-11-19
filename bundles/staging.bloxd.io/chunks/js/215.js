export const id = 215;
export const ids = [215];
export const modules = {
  37453: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => cT
    });
    var iT = IT(193),
      zT = IT(36564);
    const kT = 1.2,
      WT = {
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
        GW: .5,
        zoT: !1
      },
      XT = {
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
        GW: .5,
        zoT: !1
      },
      BT = {
        physicsBodyDimensions: {
          width: iT.c.Iw,
          height: iT.c.Xw
        },
        hitBoxDimensions: {
          width: iT.c.Iw + .4,
          height: iT.c.Xw + .6
        },
        eyeHeight: iT.c.Xw * iT.c.playerEyeToHeightRatio,
        rideHeight: iT.c.Xw - .3,
        GW: .5,
        zoT: !1
      },
      FT = {
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
        GW: .5,
        zoT: !1
      },
      ST = {
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
        GW: .5,
        zoT: !1
      },
      DT = {
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
        GW: .5,
        zoT: !1
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
        GW: .5,
        zoT: !1
      },
      xT = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: iT.c.Iw,
            height: iT.c.Xw
          },
          hitBoxDimensions: {
            width: iT.c.Iw + .4,
            height: iT.c.Xw + .6
          },
          eyeHeight: iT.c.Xw * iT.c.playerEyeToHeightRatio,
          rideHeight: iT.c.Xw - .1,
          GW: zT.e.GW,
          zoT: !0
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
        },
        Camel: {
          modelScale: kT,
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
        },
        "Cave Golem": WT,
        "Draugr Zombie": {
          ...BT,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": BT,
        "Frost Golem": WT,
        "Frost Zombie": {
          ...BT,
          defaultPose: "zombie"
        },
        "Frost Skeleton": BT,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: iT.c.Iw,
            height: iT.c.Xw
          },
          hitBoxDimensions: {
            width: iT.c.Iw + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          GW: .5,
          zoT: !1
        },
        Wolf: FT,
        Bear: ST,
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
          GW: .5,
          zoT: !1
        },
        Stag: DT,
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
        },
        "Draugr Huntress": BT,
        "Magma Golem": WT,
        "Spirit Golem": WT,
        "Spirit Wolf": FT,
        "Spirit Bear": ST,
        "Spirit Stag": DT,
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: iT.c.Iw,
            height: iT.c.Xw
          },
          hitBoxDimensions: {
            width: iT.c.Iw + .4,
            height: iT.c.Xw + .6
          },
          eyeHeight: iT.c.Xw * iT.c.playerEyeToHeightRatio,
          rideHeight: iT.c.Xw - .1,
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: iT.c.Iw,
            height: iT.c.Xw
          },
          hitBoxDimensions: {
            width: iT.c.Iw + .4,
            height: iT.c.Xw + .6
          },
          eyeHeight: iT.c.Xw * iT.c.playerEyeToHeightRatio,
          rideHeight: iT.c.Xw - .1,
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
        },
        Zombie: {
          ...BT,
          defaultPose: "zombie"
        },
        Skeleton: BT,
        Mummy: {
          ...BT,
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
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
          GW: .5,
          zoT: !1
        },
        "Iron Guardian": XT,
        "Gold Guardian": XT,
        "Diamond Guardian": XT,
        "Moonstone Guardian": XT,
        "Iron Goofy Golem": XT,
        "Gold Goofy Golem": XT,
        "Diamond Goofy Golem": XT,
        "Moonstone Goofy Golem": XT,
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
          GW: .5,
          zoT: !1
        }
      };

    function cT(TT) {
      return xT[TT]
    }
  },
  36017: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    const iT = {
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
  36568: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT
    });
    var iT = IT(319),
      zT = IT.n(iT),
      kT = IT(1724);
    let WT;
    var XT, BT, FT, ST, DT, LT, xT, cT, KT;
    const MT = [1, 203, 0, "h", 3, 20, 234, 5, 190, 9, 8, 255, "length", "b", 2, "a", 4, "undefined", "c", 63, 6, "fromCodePoint", 7, 12, "push", 11, 101, 153, "i", 91, 207, "f", 8191, 88, 13, 14, "d", 128, "g", 59, 106, 79, 118, 119, 120, "e", null, 114, 115, 116, 117, 121, 122, 123, 127, 110, 111, 112, 113, 129, 130, 131, 132, 133, 134, 94, "ci", 217, void 0, !1, !0, 185, 138, 135, 87, 40, 219, 240, 61, 109, 53, 154, 218, 84, 82, 149, 165, 42, 10, 33554432, 67108864, 108, 57, 161, 23, 66, 21, 178, 83, "on"];

    function rT(...TT) {
      return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = function(...TT) {
        for (fT(TT[MT[12]] = MT[0], TT[MT[0]] = 'xLFNclqHtg0RSZXIJ:$)|s~9%A,B&"+OCDo7d*VT3pU2njE>f8wzPGY}r1M.?`<6^;/hyb[i(@4]_vu#K!W{Qek5=ma', TT[-MT[1]] = "" + (TT[MT[2]] || ""), TT[MT[4]] = TT[-MT[1]].length, TT[-MT[9]] = [], TT[MT[7]] = MT[2], TT[-MT[8]] = MT[2], TT[-MT[6]] = -MT[0]), TT[MT[3]] = MT[2]; TT[MT[3]] < TT[MT[4]]; TT[MT[3]]++)
          if (TT[-MT[5]] = TT[MT[0]].indexOf(TT[-MT[1]][TT[MT[3]]]), TT[-MT[5]] !== -MT[0])
            if (TT[-MT[6]] < MT[2]) TT[-MT[6]] = TT[-MT[5]];
            else {
              fT(TT[-MT[6]] += TT[-MT[5]] * MT[29], TT[MT[7]] |= TT[-MT[6]] << TT[-MT[8]], TT[-MT[8]] += (TT[-MT[6]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
              do {
                fT(TT[-MT[9]].push(TT[MT[7]] & MT[11]), TT[MT[7]] >>= MT[10], TT[-MT[8]] -= MT[10])
              } while (TT[-MT[8]] > MT[22]);
              TT[-MT[6]] = -MT[0]
            } return TT[-MT[6]] > -MT[0] && TT[-MT[9]].push((TT[MT[7]] | TT[-MT[6]] << TT[-MT[8]]) & MT[11]), AT(TT[-MT[9]])
      }(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
    }

    function AT(...TT) {
      return TT[MT[12]] = MT[0], typeof ST !== MT[17] && ST ? (new ST).decode(new DT(TT[MT[2]])) : typeof LT !== MT[17] && LT ? LT.from(TT[MT[2]]).toString("utf-8") : KT(TT[MT[2]])
    }

    function gT() {}
    fT(XT = {}, BT = ["ty*0H?:)yZ8<wZC+wN3gcEqdjGnbpfFdM.9@X<8eR.ZBn>jB]yePcEF[q", "R1b0xE69E.yGg?O:Yy#8[<V%@:Bq({o:cI^YSkgGA;J;L?83Qfj}bf%%(;@@L", "oy%DEv(4_tX0~!Bpzx", "~icv367)fS3Pa8`7TS1zWdb12|T@L", '/@0]`v{":$$z/!r&(;OcK{zp>I', '.Y/z~P@6&<Y@6.x+l,?0au4o=;B;mf6"Qx', "=U~_6451N?urRF+%", "N/C+Nf$k@:", "VY|}q}|%x6&#&{S", "X60zP(C%2:}@kV&7z;L", "M;#_|_QKMX6$AdvTk@8Y.zp)S.ih(?D9Wx", "efoC2`[kdY1vt{eBq9uH", "{;wBZf%thgs(uAkJ,L", '_rclvf5"];wb(B[Vp2N', "rfqDX<|tA;CXV*Z)[x", "J,*}!D/40<A", "EogB=DZGl0gqS.|&;<}YF4KqKg*#h{gO^ONl[fO)c", 'vR{"EyqMq^aCL', 'j3Wt0b@"i|P%,l', 'A?tgCY/qPZ>:VAH)Rywv<EBH2trC%iW3"yHgB.F+>t', 'nq"4OPgH:$Obsd(O_zKzXdG9Pgn<tB/:&9JDB1]ZyZZJ1%L%<gbHMz&F', "Zi`}fTIA3:4ctNK,JL", "I*9Pj86]KSo/f.4Vj<*&o7(SLI@@FAq2].J][Gx", "XS+H$_>L", "}<QO.G#ZrMG6[8F%", "8q?G>8tkQYf", "5[NlqbD)x/9}nBj,r99&IVzeb)DBSB0Vu;Iud7q$))&b*(vBV2Ql", "lilP3Y>6)1MPxIl),ID]HwPF", 'I1z(vw6p=:%#W!@)+I6PME"]z1)q<ZI3kx', "zS*4xd[q]X", "oz*}{1_3jR<&9,.:nO$BA3Y+3Z%ZAJsocIf8!{x", "tEO_vdmL", "I*hCV@!pzS3#IF", '=|*H5i)"R.eAaAh+wx', '?&n0T6m"W14[xN;+&i6qHk7>dgAzf>]Vix', 'B;Og;E:7U:J|sJa&:?}8PTj1:?ZyDZOdVY+}y?(P"/e?=IApM;kHGT:Gz1n', "hU~cXdU$X._4cf,p(.iYVKx", ":Iy4U*LbQY<c,*eB}y:q5V$tmXo_!bgO.|P4@<(PhS", "0EVPX}n3uRJz#,Q~MgFC=_e9WgqF$`x+ix", "CE$(*`Z>{1=[k8e78Nhvt_b9Z/|%o*57@NNl!_rPCg}[x", 'r:{"8zkyntSy3i0', "XEjHq?#H0<xuZdZTAir8Bi=%S;so^B=7dzl0`MJt:Iw_q*ZTrjV8jv+4,<G", '}9HDmV3Kz)OMRFYpXggYEv=3SX|#"(&U*qHPMMtEdZ', "NgkOuVjZa:Gsvc", "A?.GD3.9YZz_L", 'x"T@=iqkK?,}_N/:~ye&Ww<%{?Z]Dcx*Yywv%{p))gw:Hw&7$6Fl)u1ec', 'c7%ucdU%Qg6E1?s7|1}P9VvZK6Sf"c?+Z*Z4G(|K6GT', "#|y,n7g)hg!R~l5&$*zviwB7z^7bjAh$K|H_(?8)*Y`@PN", 'p1%Ds.c$gM5"`(`"2o4t1Eb"+/Ng*J.9My38SkOHV^/EbdcVGx', "=zeimj!pMRQ[2Vx9IC2CF4NZ{gj%LJm~(rZH1TeZ$1gy?%m~9L", ',?u8#dM+ISS|#,QBHyeH/G1>&;@h0VeBW&0z~1!bw?W"M8%U(.%q=.L6h1R|L', "fNtDrTW3lZX`f>**s4,]io}p]X[&:?.9>iP4ioK3`Rady.%UU3(YkwA7dZ}", '^<{tO`1pj<@CUAP3?Xg]"@vzg}]vzBMp', "$z;qAV17QY09[8x%fx", "D1ZP?Q#1E$7", '|3TPn*:"pMN*qlOU)3Dq{u0$c1u!?BJ,].3]>[q+a.v6L', "uj/z5wy%V^?", 'Eo/tld}pDI?H@fGB!O#8V@>)G)RoJ.W&H"BvLf3+m|XZ7[m9|zdvsPx', '4fgzmeJM(|zXOXDd@;zv[?QKoS*O"J*O,I3qQiyqjt{hYAY&?3F', "*2rqyG/EB;7_XWb*W@=q]{u%d)0f>Mq*`;O+D@rP&<cJzXxd7z}_Ji#L", "{qMCUWp>:S5LL?}pG;!ql}nSC?HJ:Jt).3T8_{yqz)1XMAq", "5.vH<fRAH", '|"ki5>KSjt;6TFFO>1`0,', 'v9VO8];9g:Lu%d=&)"b}J', "M.vPv_jZq^lFLQ7+U;cl~eNAfgd&HV1&bUw(>y)pO?xz]X;:(r#8QPx", "GyG47]f$0}7#oZ4O", "S6b_%u]L", '^za"y#x', "JSEOTedd!6|N=NB&T<cH)<jL", 'm|i@!PA!+$T&zM0,5|YPX4Rp+$*b@!ZB;9hvR{UE+I!hjAuTd"F', "x43gNkQPXIO<;d+dl?_H!P]z~^:B_BH%>ztzA3$Pf$t`5,g$F$^gpy;9Q1B(L", "sCDB5up>W6C:JIq*cC?vTy4+C?E%mKHOz;%]GM4$l", '$EAYq4"p:IcMRVZ', 'vA0CW{j><rel%.q$|z9uy#0kl)jO{[pTs9]Gp`@"6r27RF', "(ywzU73PPYo<8(=Ux1}P5u7Z|g~#cIlANY6YUyu$oSd", 'Xq%Da_fM|1_K+,k3t6"c4_8)J?[CLQ+UV9+}?[x', 'Dozt#<}L(Z0y4,()W&F]R}h"f6=1!%wTvrE@6#{ZO6w7i,OUq9N', "(;D+d3{7YZelL", 'Ji|vMEe"%M4CW8qV0Sy"Ty:AEt', "KN,z^Q43H", "W;Luh}R)Z.*#k!97;@o(v}pH{^&b7MyOO*1z1GqUO/YAb(lO]U5Pt_&F", ':6O@"`:Ax1UPL', 'b*zG"`gL', "7YIuBuNpj.QdRV3Vw3Ig>`.p[^h@,*epN/OP~eU3M<eA!(qAc1`&D7=P`X]GL", '0"%+ioLbX/ewOX!3{.j0f[sG/6&_s*{B^fTqT`x', 'O"Az]!=o#6M[/!7+{Nc0`oVM(ZKd(B^d:C`4u14M];[cL', "32pzHo7bMXUK4A&UOq/Co.{ZPY&_@%w&1g`H;}XtY)EXL", "y9~_N4RADIcq6XSTBENvHk<%n<EbCi3$~iN", "$C^8g1dF", ".YgqAPN!h)(RLJ1o%?G4id$dL$/&L", "ur*HuwiL6rE_/*B:$I<OxkQP!?gB`%&+oyN", '4|xqqde"nRE@d.b)T1rg', "yy:]@_A)f6rCHV)Byyb_)", "gSLubo?E4;A<`f3,sY[cEW*>/1_I1f:TjzsO7Y61c", 'CY#qJ<Mk)1+<NV(,Xq:zo8"]f$', 'aU(8Er{1"X9:1?])', "%3CY|P{#Y^%(5[$3i:Z}YEbLnsD<vfy+", '&3Qw,@`"8$eCNwxUp,F]n`Fk*ZF(H{Gp,IB"BizL]|g|Xl^9F6FBQ_3%#$', "7Ymt_<B!`R+Z9F", 't1f@nWO"v<2Na!()CfL+N}RZY^ON1fzog32"xEQKx?8:xIm"Go}PU]u47ggqL', "8z4G0wd$kZ+bgJYB3S.v:dE+p|%#`(<%Dq/znyK%f$w_GcC+T9S47]#H0;.", "/zVOv!|F", "*2zC>yoF", "@!6Z", "$EsZf|;", "@B>Y", "%F}kM(0", "m]OQj%`Z", "#]cH{t`Z", "]]YQ", "m]V?a>zZ", "N]h%`%vZ", "+3V?!TbZ", "8e6?v", "m]V?`%vZ", "+3OQ#o6Z", "z^df8tmZ", "o+d88TzZ", "(s:85?mZ", '"st%?wvZ', "H3?J.VFZ", "*^cH9ovZ", "82t%M?AR", "|PP8D", "=]OQ", "Y]VJg", "^e*8=", "HnIsOb4Z", ":M$kD", "*^s8;/jZ", "8ksf=t0", "*^s8DT#Z", "+3d8!%eR", "H378GonZ", "=2t%M?0", "hM7f", "WkVG", "BSZR", ".YVG", "sk`}5_Fm", "p)58<", "msiR", "OgpT", "{]6?Tw^Z", "`w.h>]~l", "Y%/L`t{l", "7y4K|d&TPuf>+S5LcVFejjk:,.rDwU5L,AZ^,c71t)DO93cyUy_Ne", 'Z~0r%f/:|?*U.t"ev,I;NN9!@A]5Oj"eURH^{{Pdv%*zup.x}c', 'XcT(6b5AWZHU"*7ggc2Y)i63^t>Q06!)v]fQ$', "MU73", "RX[Q4|qZ", "#`(%ww`Z", "7k@f", "<^$k", '"es8<VFZ', ":J@f", "#e@8>%6Z", "e2$;eojZ", '5"vQowvZ', "IF(hGo0", "K&,d|x>u", "hk@(8H?z", "&C@~", "*|{)ZSuy", "rH#znJq|", "u2*ds.tC~{KEHnW03b=hffZ|m!%:rgW0mJy(m3uvAR:9qc32g2$Ph", "`;$0!3fh%+Ow5cNonC:GzzVe~A>a7BNow,)<sstEn!OqjK5UgZ", 'y6/s!H<}nMWK2j:]]6,8v=!P_?@QJ!lvxe"Q&', "kK:P", "oi3=AkF,", "/`)V0+(", "!a/[ILcz", "fq@(SdEz", "[!Bi.B%z", "JCO~vXG", "58|Ch9Hu", "LOD0p", "/st%?wvZ", "#e@87?)Z"]), fT(FT = function(...TT) {
      fT(TT[MT[12]] = MT[2], TT[MT[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[MT[13]] = MT[68], TT[MT[14]] = []);
      try {
        fT(TT[MT[13]] = Object, TT[MT[14]][MT[24]]("".__proto__.constructor.name))
      } catch (BT) {}
      TT: for (TT[-MT[14]] = MT[2]; TT[-MT[14]] < TT[MT[15]][MT[12]]; TT[-MT[14]]++) try {
        for (TT[MT[13]] = TT[MT[15]][TT[-MT[14]]](), TT[MT[16]] = MT[2]; TT[MT[16]] < TT[MT[14]][MT[12]]; TT[MT[16]]++)
          if (typeof TT[MT[13]][TT[MT[14]][TT[MT[16]]]] === MT[17]) continue TT;
        return TT[MT[13]]
      } catch (BT) {}
      return TT[MT[13]] || this
    }() || {}, ST = FT.TextDecoder, DT = FT.Uint8Array, LT = FT.vc, xT = FT.String || String, cT = FT.Array || Array, KT = function(...TT) {
      return fT(TT[MT[12]] = MT[2], TT[MT[25]] = new cT(MT[37]), TT[MT[0]] = xT[MT[21]] || xT.fromCharCode, TT[MT[18]] = []),
        function(oT) {
          var IT, iT, zT, kT;
          for (fT(iT = void 0, zT = oT[MT[12]], TT[MT[18]][MT[12]] = MT[2]), kT = MT[2]; kT < zT;) fT(iT = oT[kT++], iT <= MT[54] ? IT = iT : iT <= 223 ? IT = (31 & iT) << MT[20] | oT[kT++] & MT[19] : iT <= 239 ? IT = (15 & iT) << MT[23] | (oT[kT++] & MT[19]) << MT[20] | oT[kT++] & MT[19] : xT[MT[21]] ? IT = (iT & MT[22]) << 18 | (oT[kT++] & MT[19]) << MT[23] | (oT[kT++] & MT[19]) << MT[20] | oT[kT++] & MT[19] : (IT = MT[19], kT += MT[4]), TT[MT[18]][MT[24]](TT[MT[25]][IT] || (TT[MT[25]][IT] = TT[MT[0]](IT))));
          return TT[MT[18]].join("")
        }
    }());
    const hT = zT()[rT(MT[26])](),
      wT = zT()[rT(MT[26])](),
      mT = zT()[rT(MT[26])](),
      eT = zT()[rT(MT[26])](),
      RT = zT()[rT(MT[26])](),
      uT = zT()[rT(MT[26])](),
      vT = zT()[rT(MT[26])](),
      ET = (...TT) => {
        function oT(...TT) {
          return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = function(...TT) {
            for (fT(TT[MT[12]] = MT[0], TT[MT[0]] = ';bglcRMhZEYQDCxp5I7Oi>{,2o#@U^fmGk~LPXJa:dwB9rzv"WysF3t./uj?[TA<$`4]&)}|8K!*0n=HN1%6_(SVq+e', TT[MT[27]] = "" + (TT[MT[2]] || ""), TT[MT[18]] = TT[MT[27]].length, TT[MT[36]] = [], TT[MT[30]] = MT[2], TT[MT[31]] = MT[2], TT[MT[22]] = -MT[0]), TT[MT[3]] = MT[2]; TT[MT[3]] < TT[MT[18]]; TT[MT[3]]++)
              if (TT[MT[28]] = TT[MT[0]].indexOf(TT[MT[27]][TT[MT[3]]]), TT[MT[28]] !== -MT[0])
                if (TT[MT[22]] < MT[2]) TT[MT[22]] = TT[MT[28]];
                else {
                  fT(TT[MT[22]] += TT[MT[28]] * MT[29], TT[MT[30]] |= TT[MT[22]] << TT[MT[31]], TT[MT[31]] += (TT[MT[22]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
                  do {
                    fT(TT[MT[36]].push(TT[MT[30]] & MT[11]), TT[MT[30]] >>= MT[10], TT[MT[31]] -= MT[10])
                  } while (TT[MT[31]] > MT[22]);
                  TT[MT[22]] = -MT[0]
                } return TT[MT[22]] > -MT[0] && TT[MT[36]].push((TT[MT[30]] | TT[MT[22]] << TT[MT[31]]) & MT[11]), AT(TT[MT[36]])
          }(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
        }
        TT[MT[12]] = MT[4];
        const IT = uT;
        return zT()[rT(102) + oT(103)](IT, TT[MT[14]]), zT()[oT(104)](TT[MT[2]], IT, zT()[oT(105)](IT, TT[MT[0]]))
      };

    function fT() {
      fT = function() {}
    }
    WT = (...TT) => {
      function oT(...TT) {
        return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = function(...TT) {
          for (fT(TT[MT[12]] = MT[0], TT[MT[15]] = '0RZPXYcCfkQp`lN]jumg6O_{)D^:va=h89F*#"z,3GEe.+4<qWbsL[nH~2y7MS5U$&BdV/(t};JA%?Tiow|@1>rKx!I', TT[MT[14]] = "" + (TT[MT[2]] || ""), TT[MT[4]] = TT[MT[14]].length, TT[MT[16]] = [], TT[MT[39]] = MT[2], TT[MT[9]] = MT[2], TT[MT[38]] = -MT[0]), TT[MT[3]] = MT[2]; TT[MT[3]] < TT[MT[4]]; TT[MT[3]]++)
            if (TT[-MT[37]] = TT[MT[15]].indexOf(TT[MT[14]][TT[MT[3]]]), TT[-MT[37]] !== -MT[0])
              if (TT[MT[38]] < MT[2]) TT[MT[38]] = TT[-MT[37]];
              else {
                fT(TT[MT[38]] += TT[-MT[37]] * MT[29], TT[MT[39]] |= TT[MT[38]] << TT[MT[9]], TT[MT[9]] += (TT[MT[38]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
                do {
                  fT(TT[MT[16]].push(TT[MT[39]] & MT[11]), TT[MT[39]] >>= MT[10], TT[MT[9]] -= MT[10])
                } while (TT[MT[9]] > MT[22]);
                TT[MT[38]] = -MT[0]
              } return TT[MT[38]] > -MT[0] && TT[MT[16]].push((TT[MT[39]] | TT[MT[38]] << TT[MT[9]]) & MT[11]), AT(TT[MT[16]])
        }(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
      }
      TT[MT[12]] = MT[10];
      const IT = TT[MT[2]][oT(MT[40])][oT(107) + oT(MT[91]) + oT(MT[79])](TT[MT[0]]);
      TT[-MT[41]] = TT[MT[2]][oT(MT[40])][oT(MT[55]) + oT(MT[56]) + oT(MT[57]) + oT(MT[58])](IT);
      const iT = TT[-MT[41]] === MT[46] ? TT[MT[2]][oT(MT[40])][oT(MT[47]) + oT(MT[48]) + oT(MT[49]) + oT(MT[50])](TT[MT[0]], oT(MT[42]) + oT(MT[43]) + oT(MT[44]) + MT[45]) : TT[-MT[41]][oT(MT[42]) + oT(MT[43]) + oT(MT[44]) + MT[45]],
        WT = TT[-MT[41]] === MT[46] ? TT[MT[2]][oT(MT[40])][oT(MT[47]) + oT(MT[48]) + oT(MT[49]) + oT(MT[50])](TT[MT[0]], oT(MT[51]) + oT(MT[52]) + oT(MT[53])) : TT[-MT[41]][oT(MT[51]) + oT(MT[52]) + oT(MT[53])];
      fT(zT()[oT(124)](hT, MT[2], MT[2], TT[MT[7]]), zT().ei(hT, hT, zT()[oT(125)], TT[MT[4]].heading), zT()[oT(126)](vT, TT[MT[16]].LM), vT[MT[0]] = MT[2]);
      const FT = TT[MT[14]][oT(MT[54]) + oT(MT[37])]();
      if (fT(TT[-MT[41]] = TT[MT[2]][oT(MT[40])][oT(MT[55]) + oT(MT[56]) + oT(MT[57]) + oT(MT[58])](IT), TT[MT[13]] = TT[-MT[41]] === MT[46] ? TT[MT[2]][oT(MT[40])][oT(MT[47]) + oT(MT[48]) + oT(MT[49]) + oT(MT[50])](TT[MT[0]], oT(MT[59]) + oT(MT[60])) : TT[-MT[41]][oT(MT[59]) + oT(MT[60])]), !FT && zT()[MT[66]](vT) && (TT[-MT[41]] === MT[46] ? TT[MT[2]][oT(MT[40])][oT(MT[47]) + oT(MT[48]) + oT(MT[49]) + oT(MT[50])](TT[MT[0]], oT(MT[61]) + oT(MT[62]) + oT(MT[63]) + oT(MT[64])) : TT[-MT[41]][oT(MT[61]) + oT(MT[62]) + oT(MT[63]) + oT(MT[64])])) {
        function cT(...TT) {
          for (fT(TT[MT[12]] = MT[0], TT[MT[0]] = '@mDCsMXjTGRIgKnkNaJQrZtWoqYBhOd[}!`1ec*9UALS3_+.$b(z|i~y?H&wEP6/VFv],f72{=4p0l8u%x)#">;:^5<', TT[MT[13]] = "" + (TT[MT[2]] || ""), TT[MT[65]] = TT[MT[13]].length, TT[MT[16]] = [], TT[MT[45]] = MT[2], TT[MT[20]] = MT[2], TT[MT[38]] = -MT[0]), TT[MT[10]] = MT[2]; TT[MT[10]] < TT[MT[65]]; TT[MT[10]]++)
            if (TT[MT[9]] = TT[MT[0]].indexOf(TT[MT[13]][TT[MT[10]]]), TT[MT[9]] !== -MT[0])
              if (TT[MT[38]] < MT[2]) TT[MT[38]] = TT[MT[9]];
              else {
                fT(TT[MT[38]] += TT[MT[9]] * MT[29], TT[MT[45]] |= TT[MT[38]] << TT[MT[20]], TT[MT[20]] += (TT[MT[38]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
                do {
                  fT(TT[MT[16]].push(TT[MT[45]] & MT[11]), TT[MT[45]] >>= MT[10], TT[MT[20]] -= MT[10])
                } while (TT[MT[20]] > MT[22]);
                TT[MT[38]] = -MT[0]
              } return TT[MT[38]] > -MT[0] && TT[MT[16]].push((TT[MT[45]] | TT[MT[38]] << TT[MT[20]]) & MT[11]), AT(TT[MT[16]])
        }

        function KT(...TT) {
          return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = cT(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
        }
        fT(ET(wT, hT, vT), ET(mT, vT, hT), zT()[oT(MT[73])](eT, vT, mT));
        const rT = zT()[KT(136)](vT),
          uT = zT()[KT(137)](hT, vT) / TT[MT[7]] / rT,
          CT = Math[KT(MT[72])](uT, MT[2]) + MT[0];
        if (TT[MT[7]] * TT[MT[7]] < zT()[MT[66]](mT)) {
          function jT(...TT) {
            for (fT(TT[MT[12]] = MT[0], TT[MT[0]] = 'AHB@*5P^=68w~Rz)7>3XjhMp?;%"<E}dFks#vg[{TGlLeN0+Q(D!&W_]J4ZCV,9$Yxm/`:u2ry.|K1bnIafcOSUotiq', TT[MT[13]] = "" + (TT[MT[2]] || ""), TT[-MT[67]] = TT[MT[13]].length, TT[MT[16]] = [], TT[MT[7]] = MT[2], TT[MT[31]] = MT[2], TT[MT[22]] = -MT[0]), TT[MT[3]] = MT[2]; TT[MT[3]] < TT[-MT[67]]; TT[MT[3]]++)
              if (TT[MT[9]] = TT[MT[0]].indexOf(TT[MT[13]][TT[MT[3]]]), TT[MT[9]] !== -MT[0])
                if (TT[MT[22]] < MT[2]) TT[MT[22]] = TT[MT[9]];
                else {
                  fT(TT[MT[22]] += TT[MT[9]] * MT[29], TT[MT[7]] |= TT[MT[22]] << TT[MT[31]], TT[MT[31]] += (TT[MT[22]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
                  do {
                    fT(TT[MT[16]].push(TT[MT[7]] & MT[11]), TT[MT[7]] >>= MT[10], TT[MT[31]] -= MT[10])
                  } while (TT[MT[31]] > MT[22]);
                  TT[MT[22]] = -MT[0]
                } return TT[MT[22]] > -MT[0] && TT[MT[16]].push((TT[MT[7]] | TT[MT[22]] << TT[MT[31]]) & MT[11]), AT(TT[MT[16]])
          }

          function JT(...TT) {
            return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = jT(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
          }

          function UT(...TT) {
            fT(TT[MT[12]] = MT[2], TT[-MT[71]] = function(...oT) {
              return oT[MT[12]] = MT[14], TT[MT[0]]({}, oT[MT[2]], oT[MT[0]])
            }, TT[MT[0]] = function(oT, IT, iT) {
              var zT, kT, WT, XT = {};
              if (oT[IT + iT] !== MT[68]) return oT[IT + iT];
              if (IT === iT) return MT[70];
              for (zT = MT[2]; zT < IT.length; zT++) XT[IT[zT]] === MT[68] && (XT[IT[zT]] = MT[2]), XT[iT[zT]] === MT[68] && (XT[iT[zT]] = MT[2]), fT(XT[IT[zT]]++, XT[iT[zT]]--);
              for (kT in XT)
                if (XT[kT] !== MT[2]) return oT[IT + iT] = MT[69], MT[69];
              for (WT = MT[0]; WT < IT.length; WT++)
                if (TT[MT[0]](oT, IT.substr(MT[2], WT), iT.substr(MT[2], WT)) && TT[MT[0]](oT, IT.substr(WT), iT.substr(WT)) || TT[MT[0]](oT, IT.substr(MT[2], WT), iT.substr(iT.length - WT)) && TT[MT[0]](oT, IT.substr(WT), iT.substr(MT[2], iT.length - WT))) return oT[IT + iT] = MT[70], MT[70];
              return oT[IT + iT] = MT[69], MT[69]
            }, console.log(TT[-MT[71]]))
          }
          KT(139) + "5" in gT && UT(), zT()[JT(140)](hT, hT, mT, CT)
        }
        fT(TT[MT[13]] = (0, kT.v)(TT[MT[13]], 1, Math[KT(MT[72])](MT[0], Math[KT(141)](MT[2], -uT, MT[0] - rT / TT[MT[7]]))), zT()[KT(142)](hT, hT, eT))
      }
      const ST = RT;
      if (fT(zT()[oT(MT[73])](ST, hT, vT), ST[MT[0]] = MT[2], TT[MT[85]] = zT()[oT(143)](ST)), !FT) {
        function aT(...TT) {
          for (fT(TT[MT[12]] = MT[0], TT[-MT[75]] = 'zNlUam?|M=dP3ngjx(@OX*~Z{8[J<>HhLKwr!iWb]sIQo6;kY,"/G.$}q%e`FEpTDC1BScR:95V2^t)&vuA7#_yf04+', TT[MT[13]] = "" + (TT[MT[2]] || ""), TT[-MT[74]] = TT[MT[13]].length, TT[MT[16]] = [], TT[MT[45]] = MT[2], TT[MT[20]] = MT[2], TT[-MT[76]] = -MT[0]), TT[MT[3]] = MT[2]; TT[MT[3]] < TT[-MT[74]]; TT[MT[3]]++)
            if (TT[MT[9]] = TT[-MT[75]].indexOf(TT[MT[13]][TT[MT[3]]]), TT[MT[9]] !== -MT[0])
              if (TT[-MT[76]] < MT[2]) TT[-MT[76]] = TT[MT[9]];
              else {
                fT(TT[-MT[76]] += TT[MT[9]] * MT[29], TT[MT[45]] |= TT[-MT[76]] << TT[MT[20]], TT[MT[20]] += (TT[-MT[76]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
                do {
                  fT(TT[MT[16]].push(TT[MT[45]] & MT[11]), TT[MT[45]] >>= MT[10], TT[MT[20]] -= MT[10])
                } while (TT[MT[20]] > MT[22]);
                TT[-MT[76]] = -MT[0]
              } return TT[-MT[76]] > -MT[0] && TT[MT[16]].push((TT[MT[45]] | TT[-MT[76]] << TT[MT[20]]) & MT[11]), AT(TT[MT[16]])
        }

        function YT(...TT) {
          return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = aT(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
        }
        YT(144), TT[MT[85]] *= TT[MT[13]]
      }
      const DT = TT[MT[20]][oT(150) + oT(151) + oT(152)],
        LT = DT ? Math[oT(MT[27])](DT, TT[MT[85]]) : TT[MT[85]];
      zT()[oT(MT[81]) + oT(155)](ST, ST);
      const xT = TT[MT[22]] !== MT[46] && void 0 !== TT[MT[22]] ? TT[MT[22]] : TT[MT[20]][oT(156) + oT(157) + oT(158) + oT(159)];
      if (LT > MT[2]) {
        function QT(...TT) {
          for (fT(TT[MT[12]] = MT[0], TT[MT[87]] = 'Guz_^*}5~C[r%/TaFKgNERDAtpqiZ!v0(BI:h=cn?V,kQl8o]H3OwfU{sjSb4Yx&JW)1m"+X<MP>edL;|72@y9.`6$#', TT[-MT[84]] = "" + (TT[MT[2]] || ""), TT[-MT[86]] = TT[-MT[84]].length, TT[MT[36]] = [], TT[MT[7]] = MT[2], TT[MT[88]] = MT[2], TT[-MT[61]] = -MT[0]), TT[MT[10]] = MT[2]; TT[MT[10]] < TT[-MT[86]]; TT[MT[10]]++)
            if (TT[MT[28]] = TT[MT[87]].indexOf(TT[-MT[84]][TT[MT[10]]]), TT[MT[28]] !== -MT[0])
              if (TT[-MT[61]] < MT[2]) TT[-MT[61]] = TT[MT[28]];
              else {
                fT(TT[-MT[61]] += TT[MT[28]] * MT[29], TT[MT[7]] |= TT[-MT[61]] << TT[MT[88]], TT[MT[88]] += (TT[-MT[61]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
                do {
                  fT(TT[MT[36]].push(TT[MT[7]] & MT[11]), TT[MT[7]] >>= MT[10], TT[MT[88]] -= MT[10])
                } while (TT[MT[88]] > MT[22]);
                TT[-MT[61]] = -MT[0]
              } return TT[-MT[61]] > -MT[0] && TT[MT[36]].push((TT[MT[7]] | TT[-MT[61]] << TT[MT[88]]) & MT[11]), AT(TT[MT[36]])
        }

        function OT(...TT) {
          return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = QT(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
        }

        function HT(...TT) {
          function oT(...TT) {
            return TT[MT[12]] = MT[0], TT[MT[2]][MT[0]] * MT[90] + (TT[MT[2]][MT[2]] < MT[2] ? MT[89] | TT[MT[2]][MT[2]] : TT[MT[2]][MT[2]])
          }

          function IT(...TT) {
            switch (TT[MT[12]] = MT[0], ((TT[MT[2]] & MT[89]) !== MT[2]) * MT[0] + (TT[MT[2]] < MT[2]) * MT[14]) {
              case MT[2]:
                return [TT[MT[2]] % MT[89], Math.trunc(TT[MT[2]] / MT[90])];
              case MT[0]:
                return [TT[MT[2]] % MT[89] - MT[89], Math.trunc(TT[MT[2]] / MT[90]) + MT[0]];
              case MT[14]:
                return [((TT[MT[2]] + MT[89]) % MT[89] + MT[89]) % MT[89], Math.round(TT[MT[2]] / MT[90])];
              case MT[4]:
                return [TT[MT[2]] % MT[89], Math.trunc(TT[MT[2]] / MT[90])]
            }
          }
          TT[MT[12]] = MT[2], fT(TT[-MT[91]] = oT([MT[14], MT[16]]), TT[MT[0]] = oT([MT[0], MT[14]]), TT[MT[31]] = TT[-MT[91]] + TT[MT[0]], TT[-MT[92]] = TT[MT[31]] - TT[MT[0]], TT[MT[3]] = TT[-MT[92]] * MT[14], TT[MT[7]] = TT[MT[3]] / MT[14], console.log(IT(TT[MT[31]])), console.log(IT(TT[-MT[92]])), console.log(IT(TT[MT[3]])), console.log(IT(TT[MT[7]])))
        }
        OT(160) + "_" in gT && HT();
        let nT = TT[MT[14]][OT(MT[93]) + OT(162)] * xT;
        if (!FT) {
          function ZT(...TT) {
            for (fT(TT[MT[12]] = MT[0], TT[MT[0]] = '(y,^%]PO#sVxX!2Jb}@MZzDW1Ain)Bl>=f*og`S[|Ermw<GLCHU3Y"F67aKpjv/cQIhq.dtN$R?T8;ke0+_u&4~{:95', TT[MT[14]] = "" + (TT[MT[2]] || ""), TT[MT[18]] = TT[MT[14]].length, TT[MT[16]] = [], TT[MT[7]] = MT[2], TT[MT[93]] = MT[2], TT[MT[38]] = -MT[0]), TT[MT[3]] = MT[2]; TT[MT[3]] < TT[MT[18]]; TT[MT[3]]++)
              if (TT[MT[28]] = TT[MT[0]].indexOf(TT[MT[14]][TT[MT[3]]]), TT[MT[28]] !== -MT[0])
                if (TT[MT[38]] < MT[2]) TT[MT[38]] = TT[MT[28]];
                else {
                  fT(TT[MT[38]] += TT[MT[28]] * MT[29], TT[MT[7]] |= TT[MT[38]] << TT[MT[93]], TT[MT[93]] += (TT[MT[38]] & MT[32]) > MT[33] ? MT[34] : MT[35]);
                  do {
                    fT(TT[MT[16]].push(TT[MT[7]] & MT[11]), TT[MT[7]] >>= MT[10], TT[MT[93]] -= MT[10])
                  } while (TT[MT[93]] > MT[22]);
                  TT[MT[38]] = -MT[0]
                } return TT[MT[38]] > -MT[0] && TT[MT[16]].push((TT[MT[7]] | TT[MT[38]] << TT[MT[93]]) & MT[11]), AT(TT[MT[16]])
          }

          function lT(...TT) {
            return TT[MT[12]] = MT[0], typeof XT[TT[MT[2]]] === MT[17] ? XT[TT[MT[2]]] = ZT(BT[TT[MT[2]]]) : XT[TT[MT[2]]]
          }

          function sT(...TT) {
            TT[MT[12]] = MT[2]
          }
          lT(163) + "E" in gT && sT(), nT *= TT[MT[14]][lT(169) + lT(170)]
        }
        let qT = TT[MT[14]][OT(171) + OT(172) + "ss"] * LT;
        if (LT < .3) {
          function tT(...TT) {
            fT(TT[MT[12]] = MT[2], TT[MT[13]] = function(...TT) {
              for (fT(TT[MT[12]] = MT[0], TT[MT[15]] = TT[MT[2]].length, TT[-MT[25]] = [], TT[MT[18]] = MT[2], TT[MT[16]] = MT[2], TT[MT[2]].sort(((TT, oT) => TT - oT))), TT[-MT[98]] = MT[2]; TT[-MT[98]] < TT[MT[15]]; TT[-MT[98]]++)
                if (!(TT[-MT[98]] > MT[2] && TT[MT[2]][TT[-MT[98]]] === TT[MT[2]][TT[-MT[98]] - MT[0]]))
                  for (fT(TT[MT[18]] = TT[-MT[98]] + MT[0], TT[MT[16]] = TT[MT[15]] - MT[0]); TT[MT[18]] < TT[MT[16]];)
                    if (TT[MT[2]][TT[-MT[98]]] + TT[MT[2]][TT[MT[18]]] + TT[MT[2]][TT[MT[16]]] < MT[2]) TT[MT[18]]++;
                    else if (TT[MT[2]][TT[-MT[98]]] + TT[MT[2]][TT[MT[18]]] + TT[MT[2]][TT[MT[16]]] > MT[2]) TT[MT[16]]--;
              else {
                for (TT[-MT[25]].push([TT[MT[2]][TT[-MT[98]]], TT[MT[2]][TT[MT[18]]], TT[MT[2]][TT[MT[16]]]]); TT[MT[18]] < TT[MT[16]] && TT[MT[2]][TT[MT[18]]] === TT[MT[2]][TT[MT[18]] + MT[0]];) TT[MT[18]]++;
                for (; TT[MT[18]] < TT[MT[16]] && TT[MT[2]][TT[MT[16]]] === TT[MT[2]][TT[MT[16]] - MT[0]];) TT[MT[16]]--;
                fT(TT[MT[18]]++, TT[MT[16]]--)
              }
              return TT[-MT[25]]
            }, console.log(TT[MT[13]]))
          }
          OT(173) + "W" in gT && tT(), qT *= LT
        }
        nT > qT && (nT = qT), fT(zT()[OT(174)](ST, ST, nT), TT[MT[16]][OT(175) + OT(176)](ST))
      }
      TT[MT[16]][oT(177) + MT[99]] = TT[MT[14]][oT(MT[97]) + oT(MT[43]) + MT[99]] * (FT ? iT : WT)
    }
  },
  36564: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      e: () => XT
    });
    var iT = IT(36568),
      zT = IT(1724);
    const kT = 2,
      WT = 1,
      XT = {
        GW: 1,
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

    function BT(TT, oT, IT, XT, BT, FT, ST) {
      if (BT.speed) return (0, iT.b)(oT, IT, XT, BT, FT, ST, TT), void(BT.ticksToReachMaxIdleFriction = kT);
      const DT = XT.isOnGround(),
        LT = oT.bloxd.getSyncedClientOptions(oT.bloxd.getPlayerReader(IT)),
        xT = null === LT ? oT.bloxd.getClientPredictedOption(IT, "groundFrictionScale") : LT.groundFrictionScale,
        cT = null === LT ? oT.bloxd.getClientPredictedOption(IT, "airFrictionScale") : LT.airFrictionScale,
        KT = DT ? xT : cT,
        MT = Math.max(WT, KT),
        rT = BT.ticksToReachMaxIdleFriction / kT,
        AT = (0, zT.v)(MT, KT, rT);
      FT.friction = TT.standingFriction * ((null === LT ? oT.bloxd.getClientPredictedOption(IT, "airMomentumConservation") : LT.airMomentumConservation) ? AT : KT), BT.ticksToReachMaxIdleFriction > 0 && BT.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);