export const id = 220;
export const ids = [220];
export const modules = {
  38095: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Xb
    });
    var Bb = hb(191),
      Ob = hb(37279);
    const Gb = 1.2,
      Ub = {
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
        AU: .5,
        gub: !1
      },
      Lb = {
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
        AU: .5,
        gub: !1
      },
      Yb = {
        physicsBodyDimensions: {
          width: Bb.e.Vl,
          height: Bb.e.Tl
        },
        hitBoxDimensions: {
          width: Bb.e.Vl + .4,
          height: Bb.e.Tl + .6
        },
        eyeHeight: Bb.e.Tl * Bb.e.playerEyeToHeightRatio,
        rideHeight: Bb.e.Tl - .3,
        AU: .5,
        gub: !1
      },
      Sb = {
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
        AU: .5,
        gub: !1
      },
      ab = {
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
        AU: .5,
        gub: !1
      },
      Hb = {
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
        AU: .5,
        gub: !1
      },
      wb = {
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
        AU: .5,
        gub: !1
      },
      Zb = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Bb.e.Vl,
            height: Bb.e.Tl
          },
          hitBoxDimensions: {
            width: Bb.e.Vl + .4,
            height: Bb.e.Tl + .6
          },
          eyeHeight: Bb.e.Tl * Bb.e.playerEyeToHeightRatio,
          rideHeight: Bb.e.Tl - .1,
          AU: Ob.i.AU,
          gub: !0
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
        },
        Camel: {
          modelScale: Gb,
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
        },
        "Cave Golem": Ub,
        "Draugr Zombie": {
          ...Yb,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Yb,
        "Frost Golem": Ub,
        "Frost Zombie": {
          ...Yb,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Yb,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Bb.e.Vl,
            height: Bb.e.Tl
          },
          hitBoxDimensions: {
            width: Bb.e.Vl + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          AU: .5,
          gub: !1
        },
        Wolf: Sb,
        Bear: ab,
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
          AU: .5,
          gub: !1
        },
        Stag: Hb,
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
          AU: .5,
          gub: !1
        },
        Gorilla: wb,
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
          AU: .5,
          gub: !1
        },
        "Draugr Huntress": Yb,
        "Magma Golem": Ub,
        "Spirit Golem": Ub,
        "Spirit Wolf": Sb,
        "Spirit Bear": ab,
        "Spirit Stag": Hb,
        "Spirit Gorilla": wb,
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Bb.e.Vl,
            height: Bb.e.Tl
          },
          hitBoxDimensions: {
            width: Bb.e.Vl + .4,
            height: Bb.e.Tl + .6
          },
          eyeHeight: Bb.e.Tl * Bb.e.playerEyeToHeightRatio,
          rideHeight: Bb.e.Tl - .1,
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Bb.e.Vl,
            height: Bb.e.Tl
          },
          hitBoxDimensions: {
            width: Bb.e.Vl + .4,
            height: Bb.e.Tl + .6
          },
          eyeHeight: Bb.e.Tl * Bb.e.playerEyeToHeightRatio,
          rideHeight: Bb.e.Tl - .1,
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
        },
        Zombie: {
          ...Yb,
          defaultPose: "zombie"
        },
        Skeleton: Yb,
        Mummy: {
          ...Yb,
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
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
          AU: .5,
          gub: !1
        },
        "Iron Guardian": Lb,
        "Gold Guardian": Lb,
        "Diamond Guardian": Lb,
        "Moonstone Guardian": Lb,
        "Iron Goofy Golem": Lb,
        "Gold Goofy Golem": Lb,
        "Diamond Goofy Golem": Lb,
        "Moonstone Goofy Golem": Lb,
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
          AU: .5,
          gub: !1
        }
      };

    function Xb(bb) {
      return Zb[bb]
    }
  },
  36704: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    const Bb = {
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
  37286: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(324),
      Ob = hb.n(Bb),
      Gb = hb(1784);
    let Ub;
    var Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb;
    const ob = [20, 0, 1, "h", 3, "a", 73, 81, 90, "f", 4, 8, 255, "length", 2, "d", "undefined", void 0, "c", 132, "b", 112, 63, 6, "fromCodePoint", 7, 12, "push", 141, 117, 230, 65, "g", 91, 5, 8191, 88, 13, 14, null, 226, 237, 151, !1, 127, 128, 129, 142, 143, "e", 137, 138, 139, 140, 144, 145, 146, 155, 156, "du", 9, 71, 167, 180, 234, 187, 214, 43, 30, 147, 203, 107, 33554432, 67108864, "on"];

    function Ab(bb) {
      return typeof Lb[bb] === ob[16] ? Lb[bb] = function(...bb) {
        for (zb(bb[ob[13]] = ob[2], bb[ob[5]] = '<w]+4|;TmGDZX#dLF5%.ls}97BjRfvEJ:)S/A!=*"$(eCO>qIV62ni@?NHy,^hbQ31aPK`u[cMgx~YpokWr_z0{8Ut&', bb[ob[0]] = "" + (bb[ob[1]] || ""), bb[ob[4]] = bb[ob[0]].length, bb[ob[10]] = [], bb[ob[8]] = ob[1], bb[ob[9]] = ob[1], bb[ob[7]] = -ob[2]), bb[ob[3]] = ob[1]; bb[ob[3]] < bb[ob[4]]; bb[ob[3]]++)
          if (bb[-ob[6]] = bb[ob[5]].indexOf(bb[ob[0]][bb[ob[3]]]), bb[-ob[6]] !== -ob[2])
            if (bb[ob[7]] < ob[1]) bb[ob[7]] = bb[-ob[6]];
            else {
              zb(bb[ob[7]] += bb[-ob[6]] * ob[33], bb[ob[8]] |= bb[ob[7]] << bb[ob[9]], bb[ob[9]] += (bb[ob[7]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
              do {
                zb(bb[ob[10]].push(bb[ob[8]] & ob[12]), bb[ob[8]] >>= ob[11], bb[ob[9]] -= ob[11])
              } while (bb[ob[9]] > ob[25]);
              bb[ob[7]] = -ob[2]
            } return bb[ob[7]] > -ob[2] && bb[ob[10]].push((bb[ob[8]] | bb[ob[7]] << bb[ob[9]]) & ob[12]), lb(bb[ob[10]])
      }(Yb[bb]) : Lb[bb]
    }

    function lb(...bb) {
      return bb[ob[13]] = ob[2], typeof ab !== ob[16] && ab ? (new ab).decode(new Hb(bb[ob[1]])) : typeof wb !== ob[16] && wb ? wb.from(bb[ob[1]]).toString("utf-8") : pb(bb[ob[1]])
    }

    function Kb() {}
    zb(Lb = {}, Yb = ["x,YfXI|#bZ?khBoRm9i?z6mm;.fILdv(*I7G", "c2PYo?r{e,8v#z9SS2eD}H9vqitPeR:5<VKY3o:nvdU}k[5lh19~,iE]", "jG7Meh@gl@)~/6/![IVmh^f3B5qbk[$.^l6m", ":9H@0OI][l*nLd=%F>52V!EnL^Z#*r0fh9v?0_gEP.&i;W7Sz<", 'J9uJB0+x(d%cW`+%$KvTLWw8:a"~?d4e2[hD/xQ9,1i', "*1u?v0Bvl.jbm[H9uGVRr=&nLLJ~vF<vMOyi|`H0VLC", "de<;3o!.ed@B=!0/*Kk@|^m{;", "2+sJCQ<", "6;^g,c=n*3Wi$Iwe/@?~Qy?#2._L%|&v6<", 'v"H;l=QQY,Mw>#g=weoMx=""k^NdC[PJ>!oV+ozX0#gMn+{$xdT)Y`{n#a$', "H2JG7,WwD,FxJ[g=;9wRvk*W1Q$`~c9$f>sJQ?T.jb.JbWDl:@)@uW,$m#?", "g({T%pd3oi8H7R!7%2ziS/vTd,QTT6u!5;*4*09wT", "jv>?lnl]v%gkrBnSESmEPcP$!#d#U+?$DH0fc?9i5%EDc,3%Vl?4", "zBt@X?!/+H{W9]", "~,*n<y<", "&I8Mg`:n/.j`!Bj$jePvj=P#,lbn14", 'jj!D~_4A%L~LOc(jyjKj,uw.eZq4A++!,1<;_OM$7#+R^L3vLG"V]>hQ4', "`@R:YH<k)Hi", 'V"s?IN&{5H^NwI`B:+r:1W<7;', '{1ETB"iv&18:5FYjbJsTX{InbLqsEhu!=H(c/0X7]HY%rVQ9', 'U*F;Ki~;wXT#<R452"zgUpH#e,U.o]W*6"BRU6E7VH+Fk+Mj', "/v_:h2jmO,;9/]:%oN]vC!l]ELlo9,q*&l}n[oF7K#)lw", "rf=4[WRq~b{wvIt9IG}fc?`v{3GEx=~jV<", "%H,mKSe`FXvS0^195eon|Ae.SXWB|Ay$SHlJ@u{XxmyYzIQ(7w", "lL8GmSY$qNBb<+", "AgL)erRW;", "WNM:%H)${.FcMBU/AKDR7=L#^1MM*RG", "?[mET^<", ")@9f*KMQ:^DE3Lu7_ukG7,eT&b6kodgJKK+D]zW2:HgY=#,f&*@T", ",l.vf/U7syn/7[5lqX|T_6e/]@PkKAv9@K=M]g=AWG[/:[4E%XkGx`ew", "AL~|;6=nz@]pt^ej$5]:|iexNy4FwzR$1K):/,cnqsL;.dtfyl8~(!tw", 'QSsJ[?B.TDFK]h$.l":@cA("pQ#1edT=dGxv}0<', "#VmEgW(EDlVk8Lt}CKwENSQ9&,*TU/m=d;8Vs`5iu3hZ6h^EVj+", ":e&:+bB.e10W<*Qv]Q}T(u7E7#DD@!w5QIG2Xg<", "_IY~hIf%8liB~R4!C9:GB[@]5^*M/[^/*9<EgHuE;", ")vKi^*>>|32kv4", "LL+Y;?I>|", "iHd)X{[#bNWPY4nS+^Svbg!`jd5I96[.o<", "KS.YiNgE6.8g]WP5)2G:vk1#=#,4r`IRG4ZvrHo2YbpAYI5lc1~JehI%|", "v@2icST#S.xkGF0$6jeYiYJT]Q3V+=,9x!~vzn<", 'd:Jf;`:]dL[MJqJ9g!/ca>L#gZ9oVBY*&5}JJ[+QVL"M<', "6HN;T{JQ#,1NF+", "?H^T#_6{p%Jc+_*=c!IV^2Ti&dSbn_C=:+`TtHo#&bPm9=Ev8OuJ5", 'X"mpl"5/wQNV/d)AD>[VQyg{)L>sK+', ";/z|Z{nERb2Qj|*7YJK|[b@ErLc4L]DBj>I2@Q2#L^ZEz+Oj", "P!G@~`=7hZ#KIFKET:F;3?T.@.", 'UIOnmg_HEs?B"+', "oO6mqKT#gdkB*=BfN@V:FHRiv%c:#I,vB@sJs", "{1@nxbm3;", 'HS"M/q[2i.KBc,%l6j[VEh|.:L5+L]`.49P:U)yEOds;mL`._I]', "lH:;iymy;", "uOj:|cEE<X", "PKjvKSx#pi{Q+j=B`<", '>Jj2m{B.=3J7qy"JNG9fRMJ`0#KsH4', ':"@J0H.w', "`J2m4?$w", 'N"NG,>"7T', "{f#J9_aKG?~VA+*BRv6RKg<", ')2J@l~{">s2Zw', "h+@~M~@]", "HKPD=M;ABlouo]O=*+wxW)W2z#q7NLwJpJK6.p4(EaI~_jK=.X*4M~OQH5aMw", "*gFGR/0vtyjRBIx*6j+", "22b?aW~g!#VN9db/iOQnuo=%KGO4>V&A)IF@t[<", ",@+g.p$/]@:+McK7Y2oVX", 'D>BpQSAEpQxm*dqjlvsDCu^793d;FLP%,l:Eh^I"c5PkhV{fEL~va>y]', "wg#D|cBT@#PYe_37G>q~B0&nN1!ISh:9_O0n8,wi.G;@*jsS}L`gdHby1Qq?w", 'meXY.[SEs#y:sAJvM(6R!x{"q^2QMISAr2?4', "5[>MYA_T^NToW7,$zI_gnyVT^N/+:q.R}:jc?u)QR,!aPymJg2=Te!}>;", ';@|ne/p"|3V7:RZ', 'L^LG]igEgdHT2rF""I`~Tb(7pm[^N_u7%:+', "1KB@z,NkCbeb1c8$%w", 'YN|~v0(">LxZrW~=(1jc,S&"J^%`{`T.Y2t:Nux2Ull2(B{F%jNVVYH9JX%Iw', "J@BRo[AXtb?", '=e@~b>e.L^"', "!^J;^i:71HZy=#gj>bQ~%=TBz3uBQyHvKG3MOk6]", '{;W;s_#q"lKiGA_RB9~gpOFyP@vn|Ihv62VR_,+8!.4rxu[=', '1ITE<*"AhNA', "?2KJjMKXFG4qX[K%.w", "|@}~+bj{`#nk8dBSSI#gycf76L8wCqEApfCv@*5/i.7?EVm", "k+)xo=OTq%nMoq:E6G`6&ME7T", "HG)E4o$#rX7~%dIjI25@r~x$AHso.r4JH9(:]i2qemxuM4?$r;vT!K=7S.+;w", "C27xj_L$3iF;bVK%1fk@^^(k/GyM[=qR{B?fNrd]", "h9OJbY.`,5", '%:$x4ArXQ^Saqdk*x(M@MI?/j5ydWc0$O[=?t~{7VaVfc,d"/H,DChX]', 'G>(R,S%k3%"Iw', '.@onZ=?/ZbNB"[==vSYJ"r85qm5`=#zRV2dG|g*.ZlI4o]=Js[]', "T[O4Xb$q|@LSI_kRvKk;o~x2_.5x*[<(01tmFAvv@.}5,rD", '+4mG:p"X^Z7+S!m%#[JMOr@E(lHT{VP!}[t;R0#Q}yIM;|', "(2q;D=K%*l7o=!8$hl)RX?b]T", "9K<pycP9/X}r(#J7<>?4&Hsq6HAc>#/%", "af<E~AtHo%j#96~.", ']G!g=!X7H5+2Qr"JD>2:INBq}3tvyB?/', "k2oG2VjE:^Hn:RWjY53G6KHvX,I5z/;", "zS?Mr6kn<%.R~LU/qJpJkWwW,ZL9(BwJPKvfHc<", "4@V;jM5Bvsv~mz^/(2;~Un29g5~Y4F7fd^7)w*rySXmxy`V*pbBRo?/H%HEdw", 'DKO?IzW0JLE~6dz"=bt;fq9q{yNBTjA5?<', "8fT~>KV$z3(", "N2!gD{<", "H9mpKA:nK@nQl,Q5A@L@1^~y;#4;^+", "xd*~AkG.eb~gxRhAV;m)rA_vpmjDPy=!?G$x<o?T8y5o|A[Bkl+", "=g`6Xgt54GrNY4.SJ@pnK?fEVLa,n+", 'F;%:nu5$!yQB1I"%~OFEiQq0@3~A&V;', "ESG@r)l7/Ga%A[GBTKw@8H,v>%xVw", "#>)cS0nnnG", "k16viQBqXs", "]L=f@>.q2^rZuVrSw^NVVz,$!y@uHcDl0<", "PbAv0)XANlhTw", '"[7V``0w|y}JF[eBP(*4(hH/,,UY/]DBY1PmmgR$s.pWW4G', 'B1}4N*Y0i.pWU_?v0I%Y[oW$/@"d_dc=>[$EMASX,Z', "YOT;F=unwLbNpWwA(HlTPIo#Ydou9=Q!#Q^Jr=6nL^C`3A$Ba@ziR,<", 'jG&206%A"5DhvFx*}:%:f__vy,MM<[m=Dgwxdb2w', '(bunR0H9p%ri[=".iH`gQyW#5a:b3+>Ry@Sc__b7e5>,/j3(', '_!?n76n3NyT;d|"B72"xpg#B5Q7', 'L[2g(ujn]@`:;hG.QS#DUptH%HLx[d".b5AD%', "`!r:kHeT8y@V*y;", "NKdnNo@>S^]R=hJE}[`T,YPH/@7#;h.$d%$E5", "<e^i%6WH]L?~pjC.xK06wzdmYb=JF_U/NSkV<Adntd%x|FkSk!]", "a2=JYWl]", "6Isf2Y$w", "SYq],(0W", "B</j", "R6qjd^u", "BYr;", "*Ynm*e>L", "i{:)j&Ps{cl8dUOOM}hv::y[PYqTo!1", "?B*RtODrrZ{", "<!;/UakV", "eTNIzI|V", "<!VIS#@V", "mu9v(=N", "k5J;hm1t", "^5nHp&1t", "55i;", "k5fKG*gt", "E5jm1mFt", "?]fK_:St", "W{$KF", "k5fK1mFt", "?]J;^b$t", "g|xDW&kt", "b?xWW:gt", "=TVWlKkt", "dT&mK.Ft", "H]KAXfut", "a|nHebFt", "W}&m(KPL", "y``WI", "M5J;", "i5fAq", "|{aWM", 'H7"TJSQt', "V(rvI", "k5fKG*Vqn", 'e10i~A"bn', "{{6v5Aq.n", "a|TW#3ht", "WvTDM&N", "a|TWI:/Mdq", "W(1KC:Vqmc", "~4TD5Aq.n", "a|TWI:^t", "?]xW_m{L", "H]BW>b7t", "M}&m(KN", "OmHu", "Qwp!", "q>Av", "}dp!", "2yJ^q", "%=xv", "i/1u", "j(BD", "p5$K:.|t", "LU+;Qy/t", "^1=m..1t", "Bv,D", ")|rv", "d{TW)fut", "VA,D", "^{,W*m$t", "{}r#{bht", "ldF;b.Ft", '"u=j>bN', "ZoUa<zAC", "T$a~uI58", "?kUJX!//", "5Y6.GA!u", ";{6b", "0%>7)Zeb", "iQq8w}p", "=xJgKh$u", "t~6.q2Uu", "^U0lJcd}", "]{rb}SP", "3Gs{5:AC", "hr1fp", "3T&mK.Ft", "^{,WBKzt"]), zb(Sb = function(...bb) {
      zb(bb[ob[13]] = ob[1], bb[ob[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[ob[2]] = ob[17], bb[ob[14]] = []);
      try {
        zb(bb[ob[2]] = Object, bb[ob[14]][ob[27]]("".__proto__.constructor.name))
      } catch (Yb) {}
      bb: for (bb[ob[15]] = ob[1]; bb[ob[15]] < bb[ob[5]][ob[13]]; bb[ob[15]]++) try {
        for (bb[ob[2]] = bb[ob[5]][bb[ob[15]]](), bb[ob[10]] = ob[1]; bb[ob[10]] < bb[ob[14]][ob[13]]; bb[ob[10]]++)
          if (typeof bb[ob[2]][bb[ob[14]][bb[ob[10]]]] === ob[16]) continue bb;
        return bb[ob[2]]
      } catch (Yb) {}
      return bb[ob[2]] || this
    }() || {}, ab = Sb.TextDecoder, Hb = Sb.Uint8Array, wb = Sb.VZ, Zb = Sb.String || String, Xb = Sb.Array || Array, pb = function(...bb) {
      return zb(bb[ob[13]] = ob[1], bb[-ob[28]] = new Xb(ob[45]), bb[ob[2]] = Zb[ob[24]] || Zb.fromCharCode, bb[ob[18]] = []),
        function(...ub) {
          for (zb(ub[ob[13]] = ob[2], ub[ob[21]] = ob[17], ub[ob[20]] = ob[17], ub[ob[19]] = ub[ob[1]][ob[13]], bb[ob[18]][ob[13]] = ob[1]), ub[ob[10]] = ob[1]; ub[ob[10]] < ub[ob[19]];) zb(ub[ob[20]] = ub[ob[1]][ub[ob[10]]++], ub[ob[20]] <= ob[44] ? ub[ob[21]] = ub[ob[20]] : ub[ob[20]] <= 223 ? ub[ob[21]] = (31 & ub[ob[20]]) << ob[23] | ub[ob[1]][ub[ob[10]]++] & ob[22] : ub[ob[20]] <= 239 ? ub[ob[21]] = (15 & ub[ob[20]]) << ob[26] | (ub[ob[1]][ub[ob[10]]++] & ob[22]) << ob[23] | ub[ob[1]][ub[ob[10]]++] & ob[22] : Zb[ob[24]] ? ub[ob[21]] = (ub[ob[20]] & ob[25]) << 18 | (ub[ob[1]][ub[ob[10]]++] & ob[22]) << ob[26] | (ub[ob[1]][ub[ob[10]]++] & ob[22]) << ob[23] | ub[ob[1]][ub[ob[10]]++] & ob[22] : (ub[ob[21]] = ob[22], ub[ob[10]] += ob[4]), bb[ob[18]][ob[27]](bb[-ob[28]][ub[ob[21]]] || (bb[-ob[28]][ub[ob[21]]] = bb[ob[2]](ub[ob[21]]))));
          return bb[ob[18]].join("")
        }
    }());
    const Wb = Ob()[Ab(ob[29])](),
      Cb = Ob()[Ab(ob[29])](),
      db = Ob()[Ab(ob[29])](),
      rb = Ob()[Ab(ob[29])](),
      jb = Ob()[Ab(ob[29])](),
      nb = Ob()[Ab(ob[29])](),
      Db = Ob()[Ab(ob[29])](),
      xb = (...bb) => {
        function ub(bb) {
          return typeof Lb[bb] === ob[16] ? Lb[bb] = function(...bb) {
            for (zb(bb[ob[13]] = ob[2], bb[ob[2]] = 'utWFlkA&j6;Vo5$iP>bsOr_}a"`BT:d[]80GNSX!fCcY~yD,z%HqvIQL7m+Ug4?{R*2J(hE^eK<#)1p.9M3/=|wZ@xn', bb[ob[20]] = "" + (bb[ob[1]] || ""), bb[ob[4]] = bb[ob[20]].length, bb[ob[15]] = [], bb[ob[34]] = ob[1], bb[ob[23]] = ob[1], bb[ob[32]] = -ob[2]), bb[ob[30]] = ob[1]; bb[ob[30]] < bb[ob[4]]; bb[ob[30]]++)
              if (bb[ob[31]] = bb[ob[2]].indexOf(bb[ob[20]][bb[ob[30]]]), bb[ob[31]] !== -ob[2])
                if (bb[ob[32]] < ob[1]) bb[ob[32]] = bb[ob[31]];
                else {
                  zb(bb[ob[32]] += bb[ob[31]] * ob[33], bb[ob[34]] |= bb[ob[32]] << bb[ob[23]], bb[ob[23]] += (bb[ob[32]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
                  do {
                    zb(bb[ob[15]].push(bb[ob[34]] & ob[12]), bb[ob[34]] >>= ob[11], bb[ob[23]] -= ob[11])
                  } while (bb[ob[23]] > ob[25]);
                  bb[ob[32]] = -ob[2]
                } return bb[ob[32]] > -ob[2] && bb[ob[15]].push((bb[ob[34]] | bb[ob[32]] << bb[ob[23]]) & ob[12]), lb(bb[ob[15]])
          }(Yb[bb]) : Lb[bb]
        }
        bb[ob[13]] = ob[4], Ab(118) in Kb && function(...bb) {
          bb[ob[13]] = ob[1]
        }();
        const hb = nb;
        return Ob()[ub(119) + ub(120)](hb, bb[ob[14]]), Ob()[ub(121)](bb[ob[1]], hb, Ob()[ub(122)](hb, bb[ob[2]]))
      };

    function zb() {
      zb = function() {}
    }
    Ub = (...bb) => {
      function ub(...bb) {
        return bb[ob[13]] = ob[2], typeof Lb[bb[ob[1]]] === ob[16] ? Lb[bb[ob[1]]] = function(...bb) {
          for (zb(bb[ob[13]] = ob[2], bb[ob[5]] = 'NLt`UinsDv;w1~E5hckq$JCpzI|VFGMjWeua^dgO]>o{X?Q)/!ST8+7H2}@B(Rl4rY<xf3=&9#APmK:6b.y,0*[%Z_"', bb[-ob[40]] = "" + (bb[ob[1]] || ""), bb[ob[18]] = bb[-ob[40]].length, bb[ob[15]] = [], bb[ob[34]] = ob[1], bb[ob[23]] = ob[1], bb[ob[25]] = -ob[2]), bb[ob[41]] = ob[1]; bb[ob[41]] < bb[ob[18]]; bb[ob[41]]++)
            if (bb[ob[42]] = bb[ob[5]].indexOf(bb[-ob[40]][bb[ob[41]]]), bb[ob[42]] !== -ob[2])
              if (bb[ob[25]] < ob[1]) bb[ob[25]] = bb[ob[42]];
              else {
                zb(bb[ob[25]] += bb[ob[42]] * ob[33], bb[ob[34]] |= bb[ob[25]] << bb[ob[23]], bb[ob[23]] += (bb[ob[25]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
                do {
                  zb(bb[ob[15]].push(bb[ob[34]] & ob[12]), bb[ob[34]] >>= ob[11], bb[ob[23]] -= ob[11])
                } while (bb[ob[23]] > ob[25]);
                bb[ob[25]] = -ob[2]
              } return bb[ob[25]] > -ob[2] && bb[ob[15]].push((bb[ob[34]] | bb[ob[25]] << bb[ob[23]]) & ob[12]), lb(bb[ob[15]])
        }(Yb[bb[ob[1]]]) : Lb[bb[ob[1]]]
      }
      bb[ob[13]] = ob[11], ub(123) + "7" in Kb && (module.exports = async (bb = () => {
        throw new Error(ub(124))
      }) => {
        function hb(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb = '=QVTNh?}H^/;@9qDlnJZ|_!CPf%)41u(R25iMBk~"tbxA>,L7U+g.ro{dv3FzwEj6W&0a#Xy`$KG8I<]O*peS[smY:c';
          for (zb(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = ob[1], Gb = ob[1], Ub = -ob[2]), Lb = ob[1]; Lb < hb; Lb++) {
            var Sb = Yb.indexOf(ub[Lb]);
            if (Sb !== -ob[2])
              if (Ub < ob[1]) Ub = Sb;
              else {
                zb(Ub += Sb * ob[33], Ob |= Ub << Gb, Gb += (Ub & ob[35]) > ob[36] ? ob[37] : ob[38]);
                do {
                  zb(Bb.push(Ob & ob[12]), Ob >>= ob[11], Gb -= ob[11])
                } while (Gb > ob[25]);
                Ub = -ob[2]
              }
          }
          return Ub > -ob[2] && Bb.push((Ob | Ub << Gb) & ob[12]), lb(Bb)
        }

        function Bb(...bb) {
          return bb[ob[13]] = ob[2], typeof Lb[bb[ob[1]]] === ob[16] ? Lb[bb[ob[1]]] = hb(Yb[bb[ob[1]]]) : Lb[bb[ob[1]]]
        }
        const Ob = new Set(process.argv.slice(ob[14]));
        if (!Ob.has(Bb(125))) {
          if (Ob.size !== ob[2]) return ob[43];
          if (!Ob.has("-v")) return ob[43]
        }
        return await (async (ub, hb) => hb === await bb() ? Bb(ob[45]) + "l)" : "")(), !0
      });
      const hb = bb[ob[1]][ub(ob[46])][ub(130) + ub(131) + ub(ob[19])](bb[ob[2]]);
      bb[ob[5]] = bb[ob[1]][ub(ob[46])][ub(133) + ub(134) + ub(135) + ub(136)](hb);
      const Bb = bb[ob[5]] === ob[39] ? bb[ob[1]][ub(ob[46])][ub(ob[50]) + ub(ob[51]) + ub(ob[52]) + ub(ob[53])](bb[ob[2]], ub(ob[28]) + ub(ob[47]) + ub(ob[48]) + ob[49]) : bb[ob[5]][ub(ob[28]) + ub(ob[47]) + ub(ob[48]) + ob[49]],
        Ub = bb[ob[5]] === ob[39] ? bb[ob[1]][ub(ob[46])][ub(ob[50]) + ub(ob[51]) + ub(ob[52]) + ub(ob[53])](bb[ob[2]], ub(ob[54]) + ub(ob[55]) + ub(ob[56])) : bb[ob[5]][ub(ob[54]) + ub(ob[55]) + ub(ob[56])];
      zb(Ob()[ub(ob[69])](Wb, ob[1], ob[1], bb[ob[34]]), Ob().nY(Wb, Wb, Ob()[ub(148)], bb[ob[4]].heading), Ob()[ub(149)](Db, bb[ob[10]].Mp), Db[ob[2]] = ob[1]);
      const Sb = bb[ob[14]][ub(150) + ub(ob[42])]();
      if (zb(bb[ob[5]] = bb[ob[1]][ub(ob[46])][ub(152) + ub(153) + ub(154) + "s"](hb), bb[ob[61]] = bb[ob[5]] === ob[39] ? bb[ob[1]][ub(ob[46])][ub(ob[50]) + ub(ob[51]) + ub(ob[52]) + ub(ob[53])](bb[ob[2]], ub(ob[57]) + ub(ob[58])) : bb[ob[5]][ub(ob[57]) + ub(ob[58])]), !Sb && Ob()[ob[59]](Db) && (bb[ob[5]] === ob[39] ? bb[ob[1]][ub(ob[46])][ub(ob[50]) + ub(ob[51]) + ub(ob[52]) + ub(ob[53])](bb[ob[2]], ub(157) + ub(158) + ub(159)) : bb[ob[5]][ub(160) + ub(161) + ub(162) + ub(163)])) {
        function Xb(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb;
          for (zb(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = ob[1], Gb = ob[1], Ub = -ob[2]), Lb = ob[1]; Lb < hb; Lb++) {
            var Yb = 'B%~3=:9{u!v"/0,w;LXgNAKQJRdqhiYOGsZETWrjM(6>[+]}lUD2bx&*ty|Hmo#npze._cCa4?I1P7F`Vf)5^@S8k$<'.indexOf(ub[Lb]);
            if (Yb !== -ob[2])
              if (Ub < ob[1]) Ub = Yb;
              else {
                zb(Ub += Yb * ob[33], Ob |= Ub << Gb, Gb += (Ub & ob[35]) > ob[36] ? ob[37] : ob[38]);
                do {
                  zb(Bb.push(Ob & ob[12]), Ob >>= ob[11], Gb -= ob[11])
                } while (Gb > ob[25]);
                Ub = -ob[2]
              }
          }
          return Ub > -ob[2] && Bb.push((Ob | Ub << Gb) & ob[12]), lb(Bb)
        }

        function pb(...bb) {
          return bb[ob[13]] = ob[2], typeof Lb[bb[ob[1]]] === ob[16] ? Lb[bb[ob[1]]] = Xb(Yb[bb[ob[1]]]) : Lb[bb[ob[1]]]
        }
        zb(xb(Cb, Wb, Db), xb(db, Db, Wb), Ob()[pb(164)](rb, Db, db));
        const Ab = Ob()[pb(165)](Db),
          nb = Ob()[pb(166)](Wb, Db) / bb[ob[34]] / Ab,
          gb = Math[pb(ob[62])](nb, ob[1]) + ob[2];
        if (bb[ob[34]] * bb[ob[34]] < Ob()[ob[59]](db)) {
          function ib(...bb) {
            for (zb(bb[ob[13]] = ob[2], bb[ob[2]] = 'DLC*_JVwuc^p5(gyB79bUG42svx)qQeoa&0EAS"8}=.N>{@m1K$dzXM6tnZHhlRW!<F|Y#+/:~%fj,3O];i`[ITPrk?', bb[ob[14]] = "" + (bb[ob[1]] || ""), bb[ob[4]] = bb[ob[14]].length, bb[ob[10]] = [], bb[ob[49]] = ob[1], bb[ob[9]] = ob[1], bb[ob[32]] = -ob[2]), bb[ob[3]] = ob[1]; bb[ob[3]] < bb[ob[4]]; bb[ob[3]]++)
              if (bb[ob[60]] = bb[ob[2]].indexOf(bb[ob[14]][bb[ob[3]]]), bb[ob[60]] !== -ob[2])
                if (bb[ob[32]] < ob[1]) bb[ob[32]] = bb[ob[60]];
                else {
                  zb(bb[ob[32]] += bb[ob[60]] * ob[33], bb[ob[49]] |= bb[ob[32]] << bb[ob[9]], bb[ob[9]] += (bb[ob[32]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
                  do {
                    zb(bb[ob[10]].push(bb[ob[49]] & ob[12]), bb[ob[49]] >>= ob[11], bb[ob[9]] -= ob[11])
                  } while (bb[ob[9]] > ob[25]);
                  bb[ob[32]] = -ob[2]
                } return bb[ob[32]] > -ob[2] && bb[ob[10]].push((bb[ob[49]] | bb[ob[32]] << bb[ob[9]]) & ob[12]), lb(bb[ob[10]])
          }

          function vb(...bb) {
            return bb[ob[13]] = ob[2], typeof Lb[bb[ob[1]]] === ob[16] ? Lb[bb[ob[1]]] = ib(Yb[bb[ob[1]]]) : Lb[bb[ob[1]]]
          }
          Ob()[vb(168)](Wb, Wb, db, gb)
        }
        zb(bb[ob[61]] = (0, Gb.t)(bb[ob[61]], 1, Math[pb(ob[62])](ob[2], Math[pb(169)](ob[1], -nb, ob[2] - Ab / bb[ob[34]]))), Ob()[pb(170)](Wb, Wb, rb))
      }
      const ab = jb;
      zb(Ob()[ub(171)](ab, Wb, Db), ab[ob[2]] = ob[1], bb[ob[18]] = Ob()[ub(172)](ab)), Sb || (bb[ob[18]] *= bb[ob[61]]);
      const Hb = bb[ob[23]][ub(173) + ub(174) + ub(175)],
        wb = Hb ? Math[ub(176)](Hb, bb[ob[18]]) : bb[ob[18]];
      Ob()[ub(177) + ub(178)](ab, ab);
      const Zb = bb[ob[25]] !== ob[39] && void 0 !== bb[ob[25]] ? bb[ob[25]] : bb[ob[23]][ub(179) + ub(ob[63]) + ub(181) + ub(182)];
      if (wb > ob[1]) {
        function tb(...bb) {
          for (zb(bb[ob[13]] = ob[2], bb[ob[64]] = 'PCuVv`[3b{gwDJHxd?EMUy1elp~7j=}f.XK^5n$c!TNY@oG>WAir+t&9R#q*,|";])/QBFZSLOaIz2hks046%:(_8<m', bb[ob[20]] = "" + (bb[ob[1]] || ""), bb[ob[4]] = bb[ob[20]].length, bb[-ob[63]] = [], bb[ob[34]] = ob[1], bb[ob[23]] = ob[1], bb[ob[25]] = -ob[2]), bb[ob[11]] = ob[1]; bb[ob[11]] < bb[ob[4]]; bb[ob[11]]++)
            if (bb[ob[60]] = bb[ob[64]].indexOf(bb[ob[20]][bb[ob[11]]]), bb[ob[60]] !== -ob[2])
              if (bb[ob[25]] < ob[1]) bb[ob[25]] = bb[ob[60]];
              else {
                zb(bb[ob[25]] += bb[ob[60]] * ob[33], bb[ob[34]] |= bb[ob[25]] << bb[ob[23]], bb[ob[23]] += (bb[ob[25]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
                do {
                  zb(bb[-ob[63]].push(bb[ob[34]] & ob[12]), bb[ob[34]] >>= ob[11], bb[ob[23]] -= ob[11])
                } while (bb[ob[23]] > ob[25]);
                bb[ob[25]] = -ob[2]
              } return bb[ob[25]] > -ob[2] && bb[-ob[63]].push((bb[ob[34]] | bb[ob[25]] << bb[ob[23]]) & ob[12]), lb(bb[-ob[63]])
        }

        function Jb(...bb) {
          return bb[ob[13]] = ob[2], typeof Lb[bb[ob[1]]] === ob[16] ? Lb[bb[ob[1]]] = tb(Yb[bb[ob[1]]]) : Lb[bb[ob[1]]]
        }

        function eb(...bb) {
          function ub(...bb) {
            return bb[ob[13]] = ob[2], typeof Lb[bb[ob[1]]] === ob[16] ? Lb[bb[ob[1]]] = function(...bb) {
              for (zb(bb[ob[13]] = ob[2], bb[ob[65]] = 'w/8g^QB}Wk;LRDaojc5:m%4P_EYN|V@uJ.+,Gil$hFHpOq?03~e<b6MX9r`f=)[t]>zU"(!Ixs{d*&A2yT17Z#SvCKn', bb[ob[14]] = "" + (bb[ob[1]] || ""), bb[ob[18]] = bb[ob[14]].length, bb[ob[10]] = [], bb[ob[34]] = ob[1], bb[-ob[67]] = ob[1], bb[ob[66]] = -ob[2]), bb[ob[46]] = ob[1]; bb[ob[46]] < bb[ob[18]]; bb[ob[46]]++)
                if (bb[ob[60]] = bb[ob[65]].indexOf(bb[ob[14]][bb[ob[46]]]), bb[ob[60]] !== -ob[2])
                  if (bb[ob[66]] < ob[1]) bb[ob[66]] = bb[ob[60]];
                  else {
                    zb(bb[ob[66]] += bb[ob[60]] * ob[33], bb[ob[34]] |= bb[ob[66]] << bb[-ob[67]], bb[-ob[67]] += (bb[ob[66]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
                    do {
                      zb(bb[ob[10]].push(bb[ob[34]] & ob[12]), bb[ob[34]] >>= ob[11], bb[-ob[67]] -= ob[11])
                    } while (bb[-ob[67]] > ob[25]);
                    bb[ob[66]] = -ob[2]
                  } return bb[ob[66]] > -ob[2] && bb[ob[10]].push((bb[ob[34]] | bb[ob[66]] << bb[-ob[67]]) & ob[12]), lb(bb[ob[10]])
            }(Yb[bb[ob[1]]]) : Lb[bb[ob[1]]]
          }
          bb[ob[13]] = ob[1];
          const hb = require("path"),
            {
              version: Bb
            } = require("../../package"),
            {
              version: Ob
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: Gb
            } = require("@redacted/components/package"),
            {
              sdkVersion: Ub
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), hb.resolve(__dirname, ub(184) + ub(185) + "js")
        }
        Jb(183) + "6" in Kb && eb();
        let Nb = bb[ob[14]][Jb(186) + Jb(ob[65])] * Zb;
        if (!Sb) {
          function Mb(...bb) {
            for (zb(bb[ob[13]] = ob[2], bb[ob[5]] = 'p/bmaBhkR98~Y1NloA=P<x#cU)%vq5LV7dz0JQyK2g@{SjtWMO$>DfeX+?s][ri3&!T"|u*:HGC6(nZ4w}`^_EI,.F;', bb[ob[20]] = "" + (bb[ob[1]] || ""), bb[ob[4]] = bb[ob[20]].length, bb[ob[10]] = [], bb[ob[34]] = ob[1], bb[ob[23]] = ob[1], bb[ob[32]] = -ob[2]), bb[ob[3]] = ob[1]; bb[ob[3]] < bb[ob[4]]; bb[ob[3]]++)
              if (bb[ob[7]] = bb[ob[5]].indexOf(bb[ob[20]][bb[ob[3]]]), bb[ob[7]] !== -ob[2])
                if (bb[ob[32]] < ob[1]) bb[ob[32]] = bb[ob[7]];
                else {
                  zb(bb[ob[32]] += bb[ob[7]] * ob[33], bb[ob[34]] |= bb[ob[32]] << bb[ob[23]], bb[ob[23]] += (bb[ob[32]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
                  do {
                    zb(bb[ob[10]].push(bb[ob[34]] & ob[12]), bb[ob[34]] >>= ob[11], bb[ob[23]] -= ob[11])
                  } while (bb[ob[23]] > ob[25]);
                  bb[ob[32]] = -ob[2]
                } return bb[ob[32]] > -ob[2] && bb[ob[10]].push((bb[ob[34]] | bb[ob[32]] << bb[ob[23]]) & ob[12]), lb(bb[ob[10]])
          }

          function mb(...bb) {
            return bb[ob[13]] = ob[2], typeof Lb[bb[ob[1]]] === ob[16] ? Lb[bb[ob[1]]] = Mb(Yb[bb[ob[1]]]) : Lb[bb[ob[1]]]
          }
          Nb *= bb[ob[14]][mb(188) + mb(189)]
        }
        let sb = bb[ob[14]][Jb(190) + Jb(191) + "ss"] * wb;
        if (wb < .3 && (sb *= wb), Nb > sb) {
          function Ib(...bb) {
            for (zb(bb[ob[13]] = ob[2], bb[ob[70]] = '1!}@>8)l.ANW3^Rt4ed,]raMh+2?9V0OU$qJz(YLjy6x{*mBZ<`&i=SQCkfD%p|~#_5XPT/Ig7:Fson"EwvGKc[H;ub', bb[ob[20]] = "" + (bb[ob[1]] || ""), bb[ob[4]] = bb[ob[20]].length, bb[ob[15]] = [], bb[ob[71]] = ob[1], bb[ob[23]] = ob[1], bb[ob[25]] = -ob[2]), bb[ob[68]] = ob[1]; bb[ob[68]] < bb[ob[4]]; bb[ob[68]]++)
              if (bb[-ob[69]] = bb[ob[70]].indexOf(bb[ob[20]][bb[ob[68]]]), bb[-ob[69]] !== -ob[2])
                if (bb[ob[25]] < ob[1]) bb[ob[25]] = bb[-ob[69]];
                else {
                  zb(bb[ob[25]] += bb[-ob[69]] * ob[33], bb[ob[71]] |= bb[ob[25]] << bb[ob[23]], bb[ob[23]] += (bb[ob[25]] & ob[35]) > ob[36] ? ob[37] : ob[38]);
                  do {
                    zb(bb[ob[15]].push(bb[ob[71]] & ob[12]), bb[ob[71]] >>= ob[11], bb[ob[23]] -= ob[11])
                  } while (bb[ob[23]] > ob[25]);
                  bb[ob[25]] = -ob[2]
                } return bb[ob[25]] > -ob[2] && bb[ob[15]].push((bb[ob[71]] | bb[ob[25]] << bb[ob[23]]) & ob[12]), lb(bb[ob[15]])
          }

          function Pb(bb) {
            return typeof Lb[bb] === ob[16] ? Lb[bb] = Ib(Yb[bb]) : Lb[bb]
          }

          function qb(...bb) {
            function ub(...bb) {
              return bb[ob[13]] = ob[2], bb[ob[1]][ob[2]] * ob[73] + (bb[ob[1]][ob[1]] < ob[1] ? ob[72] | bb[ob[1]][ob[1]] : bb[ob[1]][ob[1]])
            }

            function hb(...bb) {
              switch (bb[ob[13]] = ob[2], ((bb[ob[1]] & ob[72]) !== ob[1]) * ob[2] + (bb[ob[1]] < ob[1]) * ob[14]) {
                case ob[1]:
                  return [bb[ob[1]] % ob[72], Math.trunc(bb[ob[1]] / ob[73])];
                case ob[2]:
                  return [bb[ob[1]] % ob[72] - ob[72], Math.trunc(bb[ob[1]] / ob[73]) + ob[2]];
                case ob[14]:
                  return [((bb[ob[1]] + ob[72]) % ob[72] + ob[72]) % ob[72], Math.round(bb[ob[1]] / ob[73])];
                case ob[4]:
                  return [bb[ob[1]] % ob[72], Math.trunc(bb[ob[1]] / ob[73])]
              }
            }
            bb[ob[13]] = ob[1], zb(bb[ob[5]] = ub([ob[14], ob[10]]), bb[-ob[57]] = ub([ob[2], ob[14]]), bb[ob[18]] = bb[ob[5]] + bb[-ob[57]], bb[ob[15]] = bb[ob[18]] - bb[-ob[57]], bb[ob[49]] = bb[ob[15]] * ob[14], bb[ob[9]] = bb[ob[49]] / ob[14], console.log(hb(bb[ob[18]])), console.log(hb(bb[ob[15]])), console.log(hb(bb[ob[49]])), console.log(hb(bb[ob[9]])))
          }
          Pb(192) in Kb && qb(), Nb = sb
        }
        zb(Ob()[Jb(193)](ab, ab, Nb), bb[ob[10]][Jb(194) + Jb(195)](ab))
      }
      bb[ob[10]][ub(196) + ob[74]] = bb[ob[14]][ub(197) + ub(ob[47]) + ob[74]] * (Sb ? Bb : Ub)
    }
  },
  37279: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Yb,
      i: () => Lb
    });
    var Bb = hb(37286),
      Ob = hb(1784);
    const Gb = 2,
      Ub = 1,
      Lb = {
        AU: 1,
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

    function Yb(bb, ub, hb, Lb, Yb, Sb, ab) {
      if (Yb.speed) return (0, Bb.b)(ub, hb, Lb, Yb, Sb, ab, bb), void(Yb.ticksToReachMaxIdleFriction = Gb);
      const Hb = Lb.isOnGround(),
        wb = ub.bloxd.getSyncedClientOptions(ub.bloxd.getPlayerReader(hb)),
        Zb = null === wb ? ub.bloxd.getClientPredictedOption(hb, "groundFrictionScale") : wb.groundFrictionScale,
        Xb = null === wb ? ub.bloxd.getClientPredictedOption(hb, "airFrictionScale") : wb.airFrictionScale,
        pb = Hb ? Zb : Xb,
        ob = Math.max(Ub, pb),
        Ab = Yb.ticksToReachMaxIdleFriction / Gb,
        lb = (0, Ob.t)(ob, pb, Ab);
      Sb.friction = bb.standingFriction * ((null === wb ? ub.bloxd.getClientPredictedOption(hb, "airMomentumConservation") : wb.airMomentumConservation) ? lb : pb), Yb.ticksToReachMaxIdleFriction > 0 && Yb.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);