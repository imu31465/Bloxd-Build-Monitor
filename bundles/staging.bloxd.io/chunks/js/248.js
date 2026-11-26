export const id = 248;
export const ids = [248];
export const modules = {
  39624: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => kV
    });
    var JV = xV(206),
      YV = xV(38799);
    const UV = 1.2,
      yV = {
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
        eZ: .5,
        IxV: !1
      },
      pV = {
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
        eZ: .5,
        IxV: !1
      },
      QV = {
        physicsBodyDimensions: {
          width: JV.f.QB,
          height: JV.f.nB
        },
        hitBoxDimensions: {
          width: JV.f.QB + .4,
          height: JV.f.nB + .6
        },
        eyeHeight: JV.f.nB * JV.f.playerEyeToHeightRatio,
        rideHeight: JV.f.nB - .3,
        eZ: .5,
        IxV: !1
      },
      nV = {
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
        eZ: .5,
        IxV: !1
      },
      wV = {
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
        eZ: .5,
        IxV: !1
      },
      ZV = {
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
        eZ: .5,
        IxV: !1
      },
      vV = {
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
        eZ: .5,
        IxV: !1
      },
      rV = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: JV.f.QB,
            height: JV.f.nB
          },
          hitBoxDimensions: {
            width: JV.f.QB + .4,
            height: JV.f.nB + .6
          },
          eyeHeight: JV.f.nB * JV.f.playerEyeToHeightRatio,
          rideHeight: JV.f.nB - .1,
          eZ: YV.g.eZ,
          IxV: !0
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
        },
        Camel: {
          modelScale: UV,
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
        },
        "Cave Golem": yV,
        "Draugr Zombie": {
          ...QV,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": QV,
        "Frost Golem": yV,
        "Frost Zombie": {
          ...QV,
          defaultPose: "zombie"
        },
        "Frost Skeleton": QV,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: JV.f.QB,
            height: JV.f.nB
          },
          hitBoxDimensions: {
            width: JV.f.QB + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          eZ: .5,
          IxV: !1
        },
        Wolf: nV,
        Bear: wV,
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
          eZ: .5,
          IxV: !1
        },
        Stag: ZV,
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
          eZ: .5,
          IxV: !1
        },
        Gorilla: vV,
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
          eZ: .5,
          IxV: !1
        },
        "Draugr Huntress": QV,
        "Magma Golem": yV,
        "Spirit Golem": yV,
        "Spirit Wolf": nV,
        "Spirit Bear": wV,
        "Spirit Stag": ZV,
        "Spirit Gorilla": vV,
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: JV.f.QB,
            height: JV.f.nB
          },
          hitBoxDimensions: {
            width: JV.f.QB + .4,
            height: JV.f.nB + .6
          },
          eyeHeight: JV.f.nB * JV.f.playerEyeToHeightRatio,
          rideHeight: JV.f.nB - .1,
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: JV.f.QB,
            height: JV.f.nB
          },
          hitBoxDimensions: {
            width: JV.f.QB + .4,
            height: JV.f.nB + .6
          },
          eyeHeight: JV.f.nB * JV.f.playerEyeToHeightRatio,
          rideHeight: JV.f.nB - .1,
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
        },
        Zombie: {
          ...QV,
          defaultPose: "zombie"
        },
        Skeleton: QV,
        Mummy: {
          ...QV,
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
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
          eZ: .5,
          IxV: !1
        },
        "Iron Guardian": pV,
        "Gold Guardian": pV,
        "Diamond Guardian": pV,
        "Moonstone Guardian": pV,
        "Iron Goofy Golem": pV,
        "Gold Goofy Golem": pV,
        "Diamond Goofy Golem": pV,
        "Moonstone Goofy Golem": pV,
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
          eZ: .5,
          IxV: !1
        }
      };

    function kV(VV) {
      return rV[VV]
    }
  },
  38245: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = {
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
  38803: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(380),
      YV = xV.n(JV),
      UV = xV(2014);
    let yV;
    var pV, QV, nV, wV, ZV, vV, rV, kV, bV;
    const EV = [1, 2, 0, 8, "c", 9, 98, "e", 131, 4, 255, "length", 72, 142, "a", 146, "undefined", void 0, "d", "b", 63, 6, "fromCodePoint", 7, 12, "push", 51, 139, "g", 91, 237, 8191, 88, 13, 14, !1, "h", 179, 117, 3, 45, 235, 68, 33554432, 67108864, 209, 17, 47, 41, "f", 217, 18, 125, 102, "i", 81, 127, 110, 128, 138, 150, 151, 152, null, 147, 148, 149, 153, 154, 155, 143, 144, 145, 161, 162, 163, 164, 165, 166, !0, 5, "pr", "A", 171, 181, 231, 246, "on"];

    function BV(...VV) {
      return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = function(...VV) {
        for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = 'sAh7;D/T?~2ve6`=u1z.>R435JiWQEk0K^][|_9HM",lX!@+Zx{b$%pd*8tqw}#y(F):PV<CjBfLmaGIcNonrgUOSY&', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[4]] = VV[EV[1]].length, VV[EV[9]] = [], VV[EV[7]] = EV[2], VV[-EV[8]] = EV[2], VV[EV[6]] = -EV[0]), VV[EV[3]] = EV[2]; VV[EV[3]] < VV[EV[4]]; VV[EV[3]]++)
          if (VV[EV[5]] = VV[EV[0]].indexOf(VV[EV[1]][VV[EV[3]]]), VV[EV[5]] !== -EV[0])
            if (VV[EV[6]] < EV[2]) VV[EV[6]] = VV[EV[5]];
            else {
              zV(VV[EV[6]] += VV[EV[5]] * EV[29], VV[EV[7]] |= VV[EV[6]] << VV[-EV[8]], VV[-EV[8]] += (VV[EV[6]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
              do {
                zV(VV[EV[9]].push(VV[EV[7]] & EV[10]), VV[EV[7]] >>= EV[3], VV[-EV[8]] -= EV[3])
              } while (VV[-EV[8]] > EV[23]);
              VV[EV[6]] = -EV[0]
            } return VV[EV[6]] > -EV[0] && VV[EV[9]].push((VV[EV[7]] | VV[EV[6]] << VV[-EV[8]]) & EV[10]), jV(VV[EV[9]])
      }(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
    }

    function jV(...VV) {
      return VV[EV[11]] = EV[0], typeof wV !== EV[16] && wV ? (new wV).decode(new ZV(VV[EV[2]])) : typeof vV !== EV[16] && vV ? vV.from(VV[EV[2]]).toString("utf-8") : bV(VV[EV[2]])
    }

    function qV() {}
    zV(pV = {}, QV = ["yZ!THx8LB1qaVJdE*!ski8B8avma1uY43wp0xH*k81kml<V0XbA", '"iMkKcq[KyeIR}9_SZ^/.9]hVp#<NwL.8~+B3n3EkRijboH0', "YbpQx*|zgttzA", "K~~khZ8EJtMB<xwk", ",FS~>qS5?2eWWoS,*1[jwa|eF=pTr7YQN/3B^$V3+=", "jb3;anCTkzl1:tS]r`~W=9n[9(/Ps", 'e81p/Ib"9tc4Q7ui_Z3^y].[!R@Rr[xWj,n?', 'q35p]MU@"F>/ixsz:#x/(w"[eRsG";S]8Fg$WMB6|(bm^6LigF9m.9vA', "@]>aiBk|(%e>M+#|PbCp#Hot+)|V!6Fzm/cx2NFb7", ":b/~Fj<@D(]IXq*[(PEd_P#h", "p>:K@a4|6`K1bo$Q8CzK5{o]D6r=3h0|*~E0lo]f*>9", '+8o?jf7J&>BK$qp"jv<do{IE;6zI6D', '"F*pta0"3tuZN|kEWp(~,BM|6)zI}Jq,L!$%1', 'q1#m+oT%3>Uf)<~H"#5kNV1T"Fl$Q7iQx8bE<IMz.~M2mC/9c!lfeZs', "VZ#d&8Y151", '"Z$2r#/zO(uPhDeHlE;D$<*$0yVJr+cWb~Y/', 'j>bE`Z&eFwJjwqKk`xfDsU7JStuoP=DkM#:2efAVO6"13i8]gZt?5nS$7', "81RTdys|~#QdA", ",3Zpmd)5[8>0L9_._lY/|pe$h~mAA", "PpTpd_1[fqXd96F0", "o!madoMk`)pQ+t&4hwu/", "cq2aFjg6/dx`C9[zvM~W&pVA", "iKIQv9pP/(6dKCO4,bA", "Kb4^>maE;6XTv9O[3pI$NNZheF3FA", "cJhjPw)Uf>(yA|>M%81LFj,M!q&<_;;k}##;?#&e!vbBix8[r`]bG8AJ/", "w#d/#tp@D", "+#{K:]H+;601+o9zC#Jj7@s", "Ax;f%a@z!*Ro(=)_w#7", 'a#Wf=#S]a%"B09K|lF9;yH}+N8Y|fJG.hwC~.', 'DlGQjw^yq1l$pxuW=xH/z8"A', '&7+B}t`?6`hjH93"p7q?_Lc5{yowjWr]#0ijr{j/mFJ/GxlJ{0yQAIqy=R=tA', "+8d/[x6Nw*.5kDF0DfAL>mIbgp:<O[s,E_}TD|xLJF#R|7Y]7[=~~ds", "p1%dg^83I=x$iNvJsMBb/jET@yuPgZ%Md7yma!,zw?D>V5=iUq+B5MQe*6", ";K<QDfqE^)_dB;2J.=?pVjs", "9PC/RC4@Otkm1w)_MiiK]pFEIz~t~||z~A", "[fpdb<,h", '~ymD3C*k,#8qt_jz<,MB=mI"!qZ0KnBHoFV;`', "03@$5GK5r~Ajcw;lWE,Kn9r$!`", "tZU0e{>U*t!1GVF3!C8KK[abY1", "zCD$btV8[e8TYwuW", "?PQ2kB^Vn8NK#x5,O`Y/", 'GPp~9xn">.^mk_s3', "5F3kKC*ff`2_zD5[@#EQ:IZM?10`)_kEd>CmI{`h", ".CcbtbX5s~/pOi,9TA", "^_=$P@%[W#9)B;bMpP1/8@VyJ1E#Dww[BPE2<Ie?$.e2.iP02M<;d_kh*1/6A", "P#p$p_R6/ddBb7Qk_14m%jg6~F!R>+jiX0qaPjs", "6w#;]BSeuw7uEu!Wx~b%`moeqqvZ4NC_/E+$@}i?owyq:<DJbpMpz", "zE(~%%}AT", "489BXPW[yzi", "JfALzn.%%6M2A", 'bCHBd@lTzp?j]o8"y062fmYg=RHTvh_9$37', "vx8K3q*tW>fKcChz>f;E*<*@r6;oV;7kqqA", "OqLDN#5fzw}*3{Q|wpxb_[lThy&{%ui3NQ=^_Lih", 'e8,j/InAG=)BYc*Q$3ra0["A4.Fy[iSQV07', "4C`T+t}3bw@$XW,JQCH~TI;kD6j:ScGiYbC~:@/,uz<BohG.I13B__=A", "q>ibt%F8xwK`@Jjz=pfElcO[==AP/Nk,lf}f29A[#=?LC7|kL/p$!a)t@z", "`~D28H[8hw0In7:|,E,K1nd[}?n<Ex~.`_Bb?|>$u8UwA", "W=_d59,@l`i7|7]|>z5~c#G/T>zo@Je9<ZCmWnVbw`r<XuV5>A", ">/@Qlpq3Ky#`Bj&uo7_dD%hcKzCJNcf9&QM~u#.+sy360{m.tZ!;K$e5R6", "d3ZxZHv.,1F<qn_.U,9T*H(ksRC4F;v", "lPE0xynV:81LA", "&H+B1$z5,#Xm3`90bb>2*HJE:~GJn9?", "^Zzb/jX@p6h^!uoW4fD2`", '980QZLC"x~B4*=29N<xp(IFb,FKW3o4M^lgi(ds', "_83B~VGtD(8", "2@JGW+Qh[(=]Z7oM7zDfEBZc^y*B.iA0`~DT/j5h/.8`4D{QO1UC*yN8n~azA", "B0V{8w9|$8Fc9`GHw37aXb[Ek)5", "!lri[G9t6#(<v{9zb0#dQC+6}zi", 'g!3~.Ghkye~pjWk5<!cBu$&]@%Km5|C0exuGCd<kl>YJNwb">p|EhfVA', "2ebE^PY8;p0$W`M0#ZmT7Ub.;6p$ixT.x7Wa]cdTneA/,_LiL,)b(HBA", 'E>Q2QC@zv1zV~Ny1XF;DkM)tvFC@p6k|+~"bsjGe/tOy$=e', "GFxpRg*zyw_", "|=V{KP/?(egy.9;zXiHx18QzEz.oMnt|c7CQ%o=%m*|]Rj/9IBYpg^B6D", "5@Qa,o]chw]W)_O]$/40FIH.~d}aHh@Ht`1WyaR+Nz&%[`W,!1*x^xs", "N/+;2wh?}*7oSqp]O7|2{aRT].|jI`#3I]YpwbO1O(|mwW2", '.KS~hNt@`="B9t%Qy]^W$a2k<.;]?7', ".ExWvfLE7.o*#6$]KMxb7%~J:8!QaZW3M7{bbHC6u)g=4DT", '}Z(pjwSe/6+`uW%"~K`0u8mef>h+e7Q[vPn%]Ms', ">KQEw%U@ZzvZ>7", "ifkdT#g3?tf@I`!Wf!LiPIxL>p+v1uqEN<^L&Bs", "+e~L7@*PZeAFz}k,{_7", 'L3rD]}^"X`(;<6__sw]WY!Mz7', "ZieExrgA7", "(~5^vU>csz{14D", "#FvKAdgIuwTIS;AzX_Qa6", "g]LKufy+>6$qq`R]TA", 'Vbri,}otX?V*l`R"!M>2fm~62`bm>Z(,4A', "&F%0DVZh!)i2{6EE4A", "O!:2@Pv%`zi", "Hi,WtjS5S>42AZciqqVT", "YqF/2ZH6T", "y0UQO$A.=wx`&J6", "s~2K1Cs", ')b{%MP."4t9B;HbW:/OmXbOA', ".b8?9}s5(yTFA", ")/]L>$eUF8!$mqA_W_4Tba_Ll1yqF;:kvx%$ML+y<t_B`h]0P,@TxLs", 'hejBmdi5b([IFx01==]bG8@t"tkj:9t|K]R2;jvA}`B<=`V5Df;E>ns', "A8a{inx+0R|]wn|kr!=ki", 'Yb1pzmz("1', "g>@;Rn#ep.@0mCCJ(PsG~V&eb8VB.Wi,PbQ25{NA", "5lB/)jhtZwyxh_H_IbSBS+V8y=", '~8+Q;%r@"1Tu1u%WOBHBq@VA:(Y<%ubMhpDdNn0.#zQ0awBJ', "L#DdT%!.Gv^It6C_YZD$mdtM#y&:Nx[0~y:{[MK$*>raX7", 'e390t@}LLFz5%jeiuC{a_M+T+%S([t*[e8Xfk$="Gz|2v9i|5A', "Vb~jVIR+)~9QZ=~it]$faN4U$pUEGN&uL_@Ted.6XRvjAumH:P|fW", 'Q]MxxP_V9(3FZ+O[O>u^A%MM<6c<.="H{ZP{O^]k56@mb`iQ|/h', "4eIm*wCbt>J7tVj.1wG;OG#tl1nzEumHzA", ":1|aq%g3~dE5q9mH#1|f5+,MFz;u}ZF0R/0$Lfv%q>|IRN^0le#TQ", "SbGxk$B8nwDPdon]>8dmLnr5)~M75n;5?@PTFjH+a`taQZp]aF!0N^TJY1", "/yuk0[=%A~z]m7?J8qE2VVy89t_T9J^_sf,W_Bu$JFONg;E[ef9;e", "=8@B1NFA", "K@jQ|_wW", "cD}4}&rW", "=Iny,1VC", "m5ZvTp6]", "6fGZ*E{r", "uS[Y=hll", ")b90aN>h", "4Z;Qs@X6", "Dn:fK78P", "a,%x", "5A:x]WB", "anmJ", "h]=@5dvA", "@)5a/r`.eZn9o", "n=|MibUu#1bgo", "H,[gYl[[QzZ93", "LWIs*b56J?", "W[vSt+thRH~Vn;d", "ZHDg[ZGh:Tw9?xp", "g0P)8S&90D}27Ld", "2lpP~zW0kJ=D!NA", "wKjS]%Gh1D_x7;d", ">w&k7@{n#,^Px!AkT0%$FYi9WU]yMh6(5MHE0", "A@1rC.J/0e;qiqvjK5^Nv.=EHdwVG{<mYORrh", "0Ad$gmi90D}=`L@wZV)a/VoXYt>yn;ae6MHEc", '@)K)!~l]]T#2k=$eL_c$/VD]reLyn;kQ"Mc$0', "B7c$]%w/G)=+D@ZW3!sbi4w26p[lJ;kQiM3", "$YfgF4<", ">nyZG$KA", "(nrS}dKA", "nnPZ", ">n]1J)XA", "Ln@$K$^A", 'j6]1"2vA', "B*u1^", ">n]1K$^A", "j6yZ(,uA", "X`/QBd>A", ",j/BB2XA", "4pNBw1>A", "ipd$15^A", "S61EM]YA", "#`rS:,^A", "B~d$F1?O", "|CCB8", "[nyZ", "Pn]Et", "`*#B[", "S7+pyv!A", "NFUg8", "#`pB_;GA", "BgpQ[d<", "#`pB82(A", 'j6/B"$*O', "S6&Bz,7A", "[~d$F1<", "}aIP]|a.", "D,IS", "ahKN", "v$?n", "R_KN", "YmfsR", ".pdn", "PkCS", "@F&Q", "}nu125`A", "OR0Z!|%A", "(K4$55KA", "&goQ", "V`Ug", "i*pBV]YA", "NEoQ", "(*oB)$uA", "*~U_*,GA", "wi^Z,5^A", "+Y4@z,<", "(*oB!.6A", "pq6C", "3=?+Y0!P", "6BG?w7x", "[&cDz0xP", "$=6+K@#P", "fElk!<~*", "_q?C>dI", "UXwq4(~*", "0?v^Y", ";pd$15^A", "(*oB&19A"]), zV(nV = function(...VV) {
      zV(VV[EV[11]] = EV[2], VV[EV[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], VV[EV[12]] = EV[17], VV[EV[4]] = []);
      try {
        zV(VV[EV[12]] = Object, VV[EV[4]][EV[25]]("".__proto__.constructor.name))
      } catch (QV) {}
      VV: for (VV[-EV[13]] = EV[2]; VV[-EV[13]] < VV[EV[14]][EV[11]]; VV[-EV[13]]++) try {
        for (VV[EV[12]] = VV[EV[14]][VV[-EV[13]]](), VV[EV[15]] = EV[2]; VV[EV[15]] < VV[EV[4]][EV[11]]; VV[EV[15]]++)
          if (typeof VV[EV[12]][VV[EV[4]][VV[EV[15]]]] === EV[16]) continue VV;
        return VV[EV[12]]
      } catch (QV) {}
      return VV[EV[12]] || this
    }() || {}, wV = nV.TextDecoder, ZV = nV.Uint8Array, vV = nV.nZ, rV = nV.String || String, kV = nV.Array || Array, bV = function() {
      var VV, eV, xV = new kV(EV[58]);
      return zV(VV = rV[EV[22]] || rV.fromCharCode, eV = []),
        function(...JV) {
          for (zV(JV[EV[11]] = EV[0], JV[EV[0]] = EV[17], JV[EV[19]] = EV[17], JV[EV[4]] = JV[EV[2]][EV[11]], eV[EV[11]] = EV[2]), JV[EV[18]] = EV[2]; JV[EV[18]] < JV[EV[4]];) zV(JV[EV[19]] = JV[EV[2]][JV[EV[18]]++], JV[EV[19]] <= EV[56] ? JV[EV[0]] = JV[EV[19]] : JV[EV[19]] <= 223 ? JV[EV[0]] = (31 & JV[EV[19]]) << EV[21] | JV[EV[2]][JV[EV[18]]++] & EV[20] : JV[EV[19]] <= 239 ? JV[EV[0]] = (15 & JV[EV[19]]) << EV[24] | (JV[EV[2]][JV[EV[18]]++] & EV[20]) << EV[21] | JV[EV[2]][JV[EV[18]]++] & EV[20] : rV[EV[22]] ? JV[EV[0]] = (JV[EV[19]] & EV[23]) << EV[51] | (JV[EV[2]][JV[EV[18]]++] & EV[20]) << EV[24] | (JV[EV[2]][JV[EV[18]]++] & EV[20]) << EV[21] | JV[EV[2]][JV[EV[18]]++] & EV[20] : (JV[EV[0]] = EV[20], JV[EV[18]] += EV[39]), eV[EV[25]](xV[JV[EV[0]]] || (xV[JV[EV[0]]] = VV(JV[EV[0]]))));
          return eV.join("")
        }
    }()), BV(EV[57]) in qV && function(...VV) {
      function eV(...VV) {
        for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = 'GWCOHXQLVnRhabfdpkeNsJoKjUEmZBSPiMDtl"TA/wYcgIqr0[&y!3,_?u18<972z]x~.+|5`#*4%=>v6}{(;)^$@F:', VV[EV[19]] = "" + (VV[EV[2]] || ""), VV[EV[4]] = VV[EV[19]].length, VV[EV[18]] = [], VV[EV[30]] = EV[2], VV[EV[21]] = EV[2], VV[EV[28]] = -EV[0]), VV[EV[26]] = EV[2]; VV[EV[26]] < VV[EV[4]]; VV[EV[26]]++)
          if (VV[EV[27]] = VV[EV[0]].indexOf(VV[EV[19]][VV[EV[26]]]), VV[EV[27]] !== -EV[0])
            if (VV[EV[28]] < EV[2]) VV[EV[28]] = VV[EV[27]];
            else {
              zV(VV[EV[28]] += VV[EV[27]] * EV[29], VV[EV[30]] |= VV[EV[28]] << VV[EV[21]], VV[EV[21]] += (VV[EV[28]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
              do {
                zV(VV[EV[18]].push(VV[EV[30]] & EV[10]), VV[EV[30]] >>= EV[3], VV[EV[21]] -= EV[3])
              } while (VV[EV[21]] > EV[23]);
              VV[EV[28]] = -EV[0]
            } return VV[EV[28]] > -EV[0] && VV[EV[18]].push((VV[EV[30]] | VV[EV[28]] << VV[EV[21]]) & EV[10]), jV(VV[EV[18]])
      }

      function xV(...VV) {
        return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = eV(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
      }

      function JV(...VV) {
        VV[EV[11]] = EV[0];
        const eV = {};
        for (let xV of VV[EV[2]].replace(/[^w]/g, "").toLowerCase()) eV[xV] = eV[xV] + EV[0] || EV[0];
        return eV
      }

      function YV(...VV) {
        VV[EV[11]] = EV[1];
        const eV = buildCharMap(VV[EV[2]]),
          xV = buildCharMap(VV[EV[0]]);
        for (let JV in eV)
          if (eV[JV] !== xV[JV]) return EV[35];
        return Object.keys(eV).length !== Object.keys(xV).length ? EV[35] : EV[79]
      }

      function UV(VV) {
        return yV(VV) !== 1 / 0
      }

      function yV(...VV) {
        if (VV[EV[11]] = EV[0], !VV[EV[2]]) return -EV[0];
        const eV = yV(VV[EV[2]].left),
          xV = yV(VV[EV[2]].right),
          JV = Math.abs(eV - xV);
        if (eV === 1 / 0 || xV === 1 / 0 || JV > EV[0]) return 1 / 0;
        return Math.max(eV, xV) + EV[0]
      }
      VV[EV[11]] = EV[2], window[xV(111) + xV(112) + xV(113) + "_"] = {
        buildCharacterMap: JV,
        isAnagrams: YV,
        isBalanced: UV,
        getHeightBalanced: yV
      }
    }();
    const tV = YV()[BV(EV[38])](),
      FV = YV()[BV(EV[38])](),
      TV = YV()[BV(EV[38])](),
      PV = YV()[BV(EV[38])](),
      AV = YV()[BV(EV[38])](),
      NV = YV()[BV(EV[38])](),
      XV = YV()[BV(EV[38])](),
      MV = (...VV) => {
        function eV(...VV) {
          return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = function(...VV) {
            for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = 'B6PLQit=xAJc>UyTOG?drmS;<VYa($]hfM8q[D#F/.}n1RzKZj~:!blu")oe@`^p5g*|7X9WsE,{I_C3NH+%v42w&0k', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[4]] = VV[EV[1]].length, VV[EV[9]] = [], VV[EV[42]] = EV[2], VV[EV[21]] = EV[2], VV[EV[23]] = -EV[0]), VV[-EV[40]] = EV[2]; VV[-EV[40]] < VV[EV[4]]; VV[-EV[40]]++)
              if (VV[-EV[41]] = VV[EV[0]].indexOf(VV[EV[1]][VV[-EV[40]]]), VV[-EV[41]] !== -EV[0])
                if (VV[EV[23]] < EV[2]) VV[EV[23]] = VV[-EV[41]];
                else {
                  zV(VV[EV[23]] += VV[-EV[41]] * EV[29], VV[EV[42]] |= VV[EV[23]] << VV[EV[21]], VV[EV[21]] += (VV[EV[23]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
                  do {
                    zV(VV[EV[9]].push(VV[EV[42]] & EV[10]), VV[EV[42]] >>= EV[3], VV[EV[21]] -= EV[3])
                  } while (VV[EV[21]] > EV[23]);
                  VV[EV[23]] = -EV[0]
                } return VV[EV[23]] > -EV[0] && VV[EV[9]].push((VV[EV[42]] | VV[EV[23]] << VV[EV[21]]) & EV[10]), jV(VV[EV[9]])
          }(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
        }
        VV[EV[11]] = EV[39], eV(118) + "B" in qV && function(...VV) {
          function eV(...VV) {
            return VV[EV[11]] = EV[0], VV[EV[2]][EV[0]] * EV[44] + (VV[EV[2]][EV[2]] < EV[2] ? EV[43] | VV[EV[2]][EV[2]] : VV[EV[2]][EV[2]])
          }

          function xV(VV) {
            switch (((VV & EV[43]) !== EV[2]) * EV[0] + (VV < EV[2]) * EV[1]) {
              case EV[2]:
                return [VV % EV[43], Math.trunc(VV / EV[44])];
              case EV[0]:
                return [VV % EV[43] - EV[43], Math.trunc(VV / EV[44]) + EV[0]];
              case EV[1]:
                return [((VV + EV[43]) % EV[43] + EV[43]) % EV[43], Math.round(VV / EV[44])];
              case EV[39]:
                return [VV % EV[43], Math.trunc(VV / EV[44])]
            }
          }
          VV[EV[11]] = EV[2], zV(VV[EV[45]] = eV([EV[1], EV[9]]), VV[EV[46]] = eV([EV[0], EV[1]]), VV[-EV[47]] = VV[EV[45]] + VV[EV[46]], VV[-EV[48]] = VV[-EV[47]] - VV[EV[46]], VV[EV[7]] = VV[-EV[48]] * EV[1], VV[EV[49]] = VV[EV[7]] / EV[1], console.log(xV(VV[-EV[47]])), console.log(xV(VV[-EV[48]])), console.log(xV(VV[EV[7]])), console.log(xV(VV[EV[49]])))
        }();
        const xV = NV;
        return YV()[eV(119) + eV(120)](xV, VV[EV[1]]), YV()[eV(121)](VV[EV[2]], xV, YV()[eV(122)](xV, VV[EV[0]]))
      };

    function zV() {
      zV = function() {}
    }
    yV = (VV, eV, xV, JV, yV, nV, wV, ZV) => {
      function vV(...VV) {
        return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = function(...VV) {
          for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = '<OACRPrlQgZqKTLnGs>tuy3}98`N^J[@B:Y#(iXI6zh*Mj!V%.vpH07Se~k&FbwaUWD/];4df_E?$12c,5|o=)xm{"+', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[50]] = VV[EV[1]].length, VV[-EV[13]] = [], VV[-EV[52]] = EV[2], VV[EV[5]] = EV[2], VV[EV[23]] = -EV[0]), VV[EV[3]] = EV[2]; VV[EV[3]] < VV[EV[50]]; VV[EV[3]]++)
            if (VV[EV[51]] = VV[EV[0]].indexOf(VV[EV[1]][VV[EV[3]]]), VV[EV[51]] !== -EV[0])
              if (VV[EV[23]] < EV[2]) VV[EV[23]] = VV[EV[51]];
              else {
                zV(VV[EV[23]] += VV[EV[51]] * EV[29], VV[-EV[52]] |= VV[EV[23]] << VV[EV[5]], VV[EV[5]] += (VV[EV[23]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
                do {
                  zV(VV[-EV[13]].push(VV[-EV[52]] & EV[10]), VV[-EV[52]] >>= EV[3], VV[EV[5]] -= EV[3])
                } while (VV[EV[5]] > EV[23]);
                VV[EV[23]] = -EV[0]
              } return VV[EV[23]] > -EV[0] && VV[-EV[13]].push((VV[-EV[52]] | VV[EV[23]] << VV[EV[5]]) & EV[10]), jV(VV[-EV[13]])
        }(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
      }
      vV(123) + "J" in qV && function(...VV) {
        function eV(...VV) {
          for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = 'o3nKLd]p)O1cA;jw(eQ?FJZ0hM$a~>ESk4mW`!{IYBC%v7X/yPR9Dg_Tl2G,=UtHzV^&.qxbN:[rs+*u@i5"8<6|f#}', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[39]] = VV[EV[1]].length, VV[-EV[55]] = [], VV[EV[5]] = EV[2], VV[EV[21]] = EV[2], VV[EV[23]] = -EV[0]), VV[-EV[53]] = EV[2]; VV[-EV[53]] < VV[EV[39]]; VV[-EV[53]]++)
            if (VV[EV[54]] = VV[EV[0]].indexOf(VV[EV[1]][VV[-EV[53]]]), VV[EV[54]] !== -EV[0])
              if (VV[EV[23]] < EV[2]) VV[EV[23]] = VV[EV[54]];
              else {
                zV(VV[EV[23]] += VV[EV[54]] * EV[29], VV[EV[5]] |= VV[EV[23]] << VV[EV[21]], VV[EV[21]] += (VV[EV[23]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
                do {
                  zV(VV[-EV[55]].push(VV[EV[5]] & EV[10]), VV[EV[5]] >>= EV[3], VV[EV[21]] -= EV[3])
                } while (VV[EV[21]] > EV[23]);
                VV[EV[23]] = -EV[0]
              } return VV[EV[23]] > -EV[0] && VV[-EV[55]].push((VV[EV[5]] | VV[EV[23]] << VV[EV[21]]) & EV[10]), jV(VV[-EV[55]])
        }

        function xV(...VV) {
          return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = eV(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
        }
        VV[EV[11]] = EV[2], zV(VV[EV[19]] = xV(124) + xV(EV[52]) + xV(126) + xV(EV[56]), VV[EV[57]] = xV(EV[58]) + xV(129) + xV(130) + xV(EV[8]) + xV(132) + "?", VV[EV[18]] = xV(133) + xV(134) + xV(135) + xV(136) + xV(137), VV[EV[19]].match(VV[EV[57]] + VV[EV[18]]))
      }();
      const rV = VV[vV(EV[59])][vV(EV[27]) + vV(140) + vV(141)](eV);
      let kV = VV[vV(EV[59])][vV(EV[13]) + vV(EV[70]) + vV(EV[71]) + vV(EV[72])](rV);
      const bV = kV === EV[63] ? VV[vV(EV[59])][vV(EV[15]) + vV(EV[64]) + vV(EV[65]) + vV(EV[66])](eV, vV(EV[60]) + vV(EV[61]) + vV(EV[62]) + EV[7]) : kV[vV(EV[60]) + vV(EV[61]) + vV(EV[62]) + EV[7]],
        BV = kV === EV[63] ? VV[vV(EV[59])][vV(EV[15]) + vV(EV[64]) + vV(EV[65]) + vV(EV[66])](eV, vV(EV[67]) + vV(EV[68]) + vV(EV[69])) : kV[vV(EV[67]) + vV(EV[68]) + vV(EV[69])];
      zV(YV()[vV(156)](tV, EV[2], EV[2], nV), YV().pk(tV, tV, YV()[vV(157)], JV.heading), YV()[vV(158)](XV, yV.ME), XV[EV[0]] = EV[2]);
      const NV = xV[vV(159) + vV(160)]();
      kV = VV[vV(EV[59])][vV(EV[13]) + vV(EV[70]) + vV(EV[71]) + vV(EV[72])](rV);
      let GV = kV === EV[63] ? VV[vV(EV[59])][vV(EV[15]) + vV(EV[64]) + vV(EV[65]) + vV(EV[66])](eV, vV(EV[73]) + vV(EV[74])) : kV[vV(EV[73]) + vV(EV[74])];
      if (!NV && YV()[EV[81]](XV) && (kV === EV[63] ? VV[vV(EV[59])][vV(EV[15]) + vV(EV[64]) + vV(EV[65]) + vV(EV[66])](eV, vV(EV[75]) + vV(EV[76]) + vV(EV[77]) + vV(EV[78])) : kV[vV(EV[75]) + vV(EV[76]) + vV(EV[77]) + vV(EV[78])])) {
        function CV(VV) {
          var eV, xV, JV, YV, UV, yV, pV;
          for (zV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = EV[2], UV = EV[2], yV = -EV[0]), pV = EV[2]; pV < xV; pV++) {
            var QV = 'G.bcpfZFSNnMkHqhg>/i:?0auj_vtP3D)]Y14(%WJ`+$m}oRUXr"Ldey<OAI,ET{K=^V|BsQl[*C9&2~@w6x75z8;#!'.indexOf(eV[pV]);
            if (QV !== -EV[0])
              if (yV < EV[2]) yV = QV;
              else {
                zV(yV += QV * EV[29], YV |= yV << UV, UV += (yV & EV[31]) > EV[32] ? EV[33] : EV[34]);
                do {
                  zV(JV.push(YV & EV[10]), YV >>= EV[3], UV -= EV[3])
                } while (UV > EV[23]);
                yV = -EV[0]
              }
          }
          return yV > -EV[0] && JV.push((YV | yV << UV) & EV[10]), jV(JV)
        }

        function aV(...VV) {
          return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = CV(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
        }

        function oV(...VV) {
          zV(VV[EV[11]] = EV[2], VV[EV[19]] = function(...eV) {
            return zV(eV[EV[11]] = EV[39], eV[EV[39]] = {}), eV[EV[1]].length !== eV[EV[2]].length + eV[EV[0]].length ? EV[35] : VV[EV[0]](eV[EV[2]], eV[EV[0]], eV[EV[1]], EV[2], EV[2], EV[2], eV[EV[39]])
          }, VV[EV[0]] = function(...eV) {
            return zV(eV[EV[11]] = EV[23], eV[EV[14]] = EV[35]), eV[EV[80]] >= eV[EV[1]].length ? EV[79] : eV[EV[21]]["" + eV[EV[39]] + eV[EV[9]] + eV[EV[80]]] !== EV[17] ? eV[EV[21]]["" + eV[EV[39]] + eV[EV[9]] + eV[EV[80]]] : (eV[EV[1]][eV[EV[80]]] === eV[EV[2]][eV[EV[39]]] && eV[EV[1]][eV[EV[80]]] === eV[EV[0]][eV[EV[9]]] ? eV[EV[14]] = VV[EV[0]](eV[EV[2]], eV[EV[0]], eV[EV[1]], eV[EV[39]] + EV[0], eV[EV[9]], eV[EV[80]] + EV[0], eV[EV[21]]) || VV[EV[0]](eV[EV[2]], eV[EV[0]], eV[EV[1]], eV[EV[39]], eV[EV[9]] + EV[0], eV[EV[80]] + EV[0], eV[EV[21]]) : eV[EV[1]][eV[EV[80]]] === eV[EV[2]][eV[EV[39]]] ? eV[EV[14]] = VV[EV[0]](eV[EV[2]], eV[EV[0]], eV[EV[1]], eV[EV[39]] + EV[0], eV[EV[9]], eV[EV[80]] + EV[0], eV[EV[21]]) : eV[EV[1]][eV[EV[80]]] === eV[EV[0]][eV[EV[9]]] && (eV[EV[14]] = VV[EV[0]](eV[EV[2]], eV[EV[0]], eV[EV[1]], eV[EV[39]], eV[EV[9]] + EV[0], eV[EV[80]] + EV[0], eV[EV[21]])), eV[EV[21]]["" + eV[EV[39]] + eV[EV[9]] + eV[EV[80]]] = eV[EV[14]], eV[EV[14]])
          }, console.log(VV[EV[19]]))
        }
        aV(167) + "9" in qV && oV(), zV(MV(FV, tV, XV), MV(TV, XV, tV), YV()[aV(168)](PV, XV, TV));
        const cV = YV()[aV(169)](XV),
          hV = YV()[aV(170)](tV, XV) / nV / cV,
          lV = Math[aV(EV[83])](hV, EV[2]) + EV[0];
        if (nV * nV < YV()[EV[81]](TV)) {
          function LV(...VV) {
            for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = '"HWAVfaUTSsqLKFmedNIiBGYZlJORhQkXCnD`;grEx~6P&[Mjbp#o<c0?=t|24}{/!^*$u3y79_vz:8+,)@5]%w(1>.', VV[EV[1]] = "" + (VV[EV[2]] || ""), VV[EV[4]] = VV[EV[1]].length, VV[EV[9]] = [], VV[EV[80]] = EV[2], VV[EV[21]] = EV[2], VV[EV[28]] = -EV[0]), VV[EV[48]] = EV[2]; VV[EV[48]] < VV[EV[4]]; VV[EV[48]]++)
              if (VV[EV[5]] = VV[EV[0]].indexOf(VV[EV[1]][VV[EV[48]]]), VV[EV[5]] !== -EV[0])
                if (VV[EV[28]] < EV[2]) VV[EV[28]] = VV[EV[5]];
                else {
                  zV(VV[EV[28]] += VV[EV[5]] * EV[29], VV[EV[80]] |= VV[EV[28]] << VV[EV[21]], VV[EV[21]] += (VV[EV[28]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
                  do {
                    zV(VV[EV[9]].push(VV[EV[80]] & EV[10]), VV[EV[80]] >>= EV[3], VV[EV[21]] -= EV[3])
                  } while (VV[EV[21]] > EV[23]);
                  VV[EV[28]] = -EV[0]
                } return VV[EV[28]] > -EV[0] && VV[EV[9]].push((VV[EV[80]] | VV[EV[28]] << VV[EV[21]]) & EV[10]), jV(VV[EV[9]])
          }

          function fV(...VV) {
            return VV[EV[11]] = EV[0], typeof pV[VV[EV[2]]] === EV[16] ? pV[VV[EV[2]]] = LV(QV[VV[EV[2]]]) : pV[VV[EV[2]]]
          }
          YV()[fV(172)](tV, tV, TV, lV)
        }
        zV(GV = (0, UV[EV[82]])(GV, 1, Math[aV(EV[83])](EV[0], Math[aV(173)](EV[2], -hV, EV[0] - cV / nV))), YV()[aV(174)](tV, tV, PV))
      }
      const WV = AV;
      zV(YV()[vV(175)](WV, tV, XV), WV[EV[0]] = EV[2]);
      let RV = YV()[vV(176)](WV);
      NV || (RV *= GV);
      const gV = wV[vV(177) + vV(178) + vV(EV[37])],
        DV = gV ? Math[vV(180)](gV, RV) : RV;
      YV()[vV(EV[84]) + vV(182)](WV, WV);
      const iV = ZV !== EV[63] && void 0 !== ZV ? ZV : wV[vV(183) + vV(184) + vV(185) + vV(186)];
      if (DV > EV[2]) {
        function mV(VV) {
          var eV, xV, JV, YV, UV, yV, pV;
          for (zV(eV = "" + (VV || ""), xV = eV.length, JV = [], YV = EV[2], UV = EV[2], yV = -EV[0]), pV = EV[2]; pV < xV; pV++) {
            var QV = 'I*PRTmNUCqDFScJ&luob#nv1;Y=kH[>^+8z34BxM%i`WsEXO)~t?Q$!.jLK",:9p_}5{h]Ad7gGVf@02wya6<(/rZe|'.indexOf(eV[pV]);
            if (QV !== -EV[0])
              if (yV < EV[2]) yV = QV;
              else {
                zV(yV += QV * EV[29], YV |= yV << UV, UV += (yV & EV[31]) > EV[32] ? EV[33] : EV[34]);
                do {
                  zV(JV.push(YV & EV[10]), YV >>= EV[3], UV -= EV[3])
                } while (UV > EV[23]);
                yV = -EV[0]
              }
          }
          return yV > -EV[0] && JV.push((YV | yV << UV) & EV[10]), jV(JV)
        }

        function KV(VV) {
          return typeof pV[VV] === EV[16] ? pV[VV] = mV(QV[VV]) : pV[VV]
        }
        let HV = xV[vV(187) + KV(188)] * iV;
        if (!NV) {
          function sV(...VV) {
            for (zV(VV[EV[11]] = EV[0], VV[EV[0]] = 'xIErR"Dd#U?QHcnsq*W.~}{C!Xj%Gp;Mi),b$B_kFt[0=|/u+ve]A2KLSgf5J>64zl9ay@O:`PZYT&31w7V(<N8^moh', VV[EV[19]] = "" + (VV[EV[2]] || ""), VV[EV[39]] = VV[EV[19]].length, VV[EV[18]] = [], VV[EV[80]] = EV[2], VV[EV[21]] = EV[2], VV[EV[84]] = -EV[0]), VV[-EV[85]] = EV[2]; VV[-EV[85]] < VV[EV[39]]; VV[-EV[85]]++)
              if (VV[EV[5]] = VV[EV[0]].indexOf(VV[EV[19]][VV[-EV[85]]]), VV[EV[5]] !== -EV[0])
                if (VV[EV[84]] < EV[2]) VV[EV[84]] = VV[EV[5]];
                else {
                  zV(VV[EV[84]] += VV[EV[5]] * EV[29], VV[EV[80]] |= VV[EV[84]] << VV[EV[21]], VV[EV[21]] += (VV[EV[84]] & EV[31]) > EV[32] ? EV[33] : EV[34]);
                  do {
                    zV(VV[EV[18]].push(VV[EV[80]] & EV[10]), VV[EV[80]] >>= EV[3], VV[EV[21]] -= EV[3])
                  } while (VV[EV[21]] > EV[23]);
                  VV[EV[84]] = -EV[0]
                } return VV[EV[84]] > -EV[0] && VV[EV[18]].push((VV[EV[80]] | VV[EV[84]] << VV[EV[21]]) & EV[10]), jV(VV[EV[18]])
          }

          function SV(VV) {
            return typeof pV[VV] === EV[16] ? pV[VV] = sV(QV[VV]) : pV[VV]
          }
          HV *= xV[KV(189) + SV(190)]
        }
        let uV = xV[KV(191) + KV(192) + "ss"] * DV;
        if (DV < .3 && (uV *= DV), HV > uV) {
          function IV(...VV) {
            function eV(...VV) {
              return VV[EV[11]] = EV[0], VV[EV[2]][EV[0]] * EV[44] + (VV[EV[2]][EV[2]] < EV[2] ? EV[43] | VV[EV[2]][EV[2]] : VV[EV[2]][EV[2]])
            }

            function xV(VV) {
              switch (((VV & EV[43]) !== EV[2]) * EV[0] + (VV < EV[2]) * EV[1]) {
                case EV[2]:
                  return [VV % EV[43], Math.trunc(VV / EV[44])];
                case EV[0]:
                  return [VV % EV[43] - EV[43], Math.trunc(VV / EV[44]) + EV[0]];
                case EV[1]:
                  return [((VV + EV[43]) % EV[43] + EV[43]) % EV[43], Math.round(VV / EV[44])];
                case EV[39]:
                  return [VV % EV[43], Math.trunc(VV / EV[44])]
              }
            }
            VV[EV[11]] = EV[2], zV(VV[EV[19]] = eV([EV[1], EV[9]]), VV[EV[0]] = eV([EV[0], EV[1]]), VV[-EV[86]] = VV[EV[19]] + VV[EV[0]], VV[EV[39]] = VV[-EV[86]] - VV[EV[0]], VV[EV[49]] = VV[EV[39]] * EV[1], VV[EV[80]] = VV[EV[49]] / EV[1], console.log(xV(VV[-EV[86]])), console.log(xV(VV[EV[39]])), console.log(xV(VV[EV[49]])), console.log(xV(VV[EV[80]])))
          }
          KV(193) + EV[54] in qV && IV(), HV = uV
        }
        zV(YV()[KV(194)](WV, WV, HV), yV[KV(195) + KV(196)](WV))
      }
      yV[vV(197) + EV[87]] = xV[vV(198) + vV(EV[61]) + EV[87]] * (NV ? bV : BV)
    }
  },
  38799: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV,
      g: () => pV
    });
    var JV = xV(38803),
      YV = xV(2014);
    const UV = 2,
      yV = 1,
      pV = {
        eZ: 1,
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

    function QV(VV, eV, xV, pV, QV, nV, wV) {
      if (QV.speed) return (0, JV.b)(eV, xV, pV, QV, nV, wV, VV), void(QV.ticksToReachMaxIdleFriction = UV);
      const ZV = pV.isOnGround(),
        vV = eV.bloxd.getSyncedClientOptions(eV.bloxd.getPlayerReader(xV)),
        rV = null === vV ? eV.bloxd.getClientPredictedOption(xV, "groundFrictionScale") : vV.groundFrictionScale,
        kV = null === vV ? eV.bloxd.getClientPredictedOption(xV, "airFrictionScale") : vV.airFrictionScale,
        bV = ZV ? rV : kV,
        EV = Math.max(yV, bV),
        BV = QV.ticksToReachMaxIdleFriction / UV,
        jV = (0, YV.A)(EV, bV, BV);
      nV.friction = VV.standingFriction * ((null === vV ? eV.bloxd.getClientPredictedOption(xV, "airMomentumConservation") : vV.airMomentumConservation) ? jV : bV), QV.ticksToReachMaxIdleFriction > 0 && QV.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);