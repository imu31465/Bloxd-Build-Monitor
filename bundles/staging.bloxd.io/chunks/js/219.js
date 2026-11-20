export const id = 219;
export const ids = [219];
export const modules = {
  37803: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => jb
    });
    var Ab = Ub(205),
      Mb = Ub(36986);
    const Tb = 1.2,
      Eb = {
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
        KE: .5,
        wbb: !1
      },
      Yb = {
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
        KE: .5,
        wbb: !1
      },
      Bb = {
        physicsBodyDimensions: {
          width: Ab.c.vy,
          height: Ab.c.Py
        },
        hitBoxDimensions: {
          width: Ab.c.vy + .4,
          height: Ab.c.Py + .6
        },
        eyeHeight: Ab.c.Py * Ab.c.playerEyeToHeightRatio,
        rideHeight: Ab.c.Py - .3,
        KE: .5,
        wbb: !1
      },
      eb = {
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
        KE: .5,
        wbb: !1
      },
      vb = {
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
        KE: .5,
        wbb: !1
      },
      Lb = {
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
        KE: .5,
        wbb: !1
      },
      Pb = {
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
        KE: .5,
        wbb: !1
      },
      Xb = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Ab.c.vy,
            height: Ab.c.Py
          },
          hitBoxDimensions: {
            width: Ab.c.vy + .4,
            height: Ab.c.Py + .6
          },
          eyeHeight: Ab.c.Py * Ab.c.playerEyeToHeightRatio,
          rideHeight: Ab.c.Py - .1,
          KE: Mb.e.KE,
          wbb: !0
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
        },
        Camel: {
          modelScale: Tb,
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
        },
        "Cave Golem": Eb,
        "Draugr Zombie": {
          ...Bb,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Bb,
        "Frost Golem": Eb,
        "Frost Zombie": {
          ...Bb,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Bb,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Ab.c.vy,
            height: Ab.c.Py
          },
          hitBoxDimensions: {
            width: Ab.c.vy + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          KE: .5,
          wbb: !1
        },
        Wolf: eb,
        Bear: vb,
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
          KE: .5,
          wbb: !1
        },
        Stag: Lb,
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
          KE: .5,
          wbb: !1
        },
        Gorilla: Pb,
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
          KE: .5,
          wbb: !1
        },
        "Draugr Huntress": Bb,
        "Magma Golem": Eb,
        "Spirit Golem": Eb,
        "Spirit Wolf": eb,
        "Spirit Bear": vb,
        "Spirit Stag": Lb,
        "Spirit Gorilla": Pb,
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Ab.c.vy,
            height: Ab.c.Py
          },
          hitBoxDimensions: {
            width: Ab.c.vy + .4,
            height: Ab.c.Py + .6
          },
          eyeHeight: Ab.c.Py * Ab.c.playerEyeToHeightRatio,
          rideHeight: Ab.c.Py - .1,
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Ab.c.vy,
            height: Ab.c.Py
          },
          hitBoxDimensions: {
            width: Ab.c.vy + .4,
            height: Ab.c.Py + .6
          },
          eyeHeight: Ab.c.Py * Ab.c.playerEyeToHeightRatio,
          rideHeight: Ab.c.Py - .1,
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
        },
        Zombie: {
          ...Bb,
          defaultPose: "zombie"
        },
        Skeleton: Bb,
        Mummy: {
          ...Bb,
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
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
          KE: .5,
          wbb: !1
        },
        "Iron Guardian": Yb,
        "Gold Guardian": Yb,
        "Diamond Guardian": Yb,
        "Moonstone Guardian": Yb,
        "Iron Goofy Golem": Yb,
        "Gold Goofy Golem": Yb,
        "Diamond Goofy Golem": Yb,
        "Moonstone Goofy Golem": Yb,
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
          KE: .5,
          wbb: !1
        }
      };

    function jb(bb) {
      return Xb[bb]
    }
  },
  36373: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    const Ab = {
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
  36990: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(333),
      Mb = Ub.n(Ab),
      Tb = Ub(1786);
    let Eb;
    var Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb;
    const kb = [1, 89, 0, 85, 128, "i", 7, 5, "f", 4, 8, 255, "length", 152, "d", "e", "b", "undefined", void 0, 80, "c", 122, 63, 6, "fromCodePoint", 12, "push", 64, 227, 192, "a", 79, 3, 2, "h", 165, 91, 159, 93, 8191, 88, 13, 14, 62, 23, 1023, 65536, 53, 175, 10, 55296, 56320, 150, 57, 9, 118, 43, 31, 15, 18, 142, 95, 28, "g", 162, 183, 230, 193, 224, 240, !1, 172, 45, 104, 111, 112, 113, null, 119, 120, 105, 106, 107, "s", 108, 109, 110, 127, 126, 114, 115, 116, 117, 129, 130, 131, 67, 56, 48, 187, 234, "wb", 141, 100, 168, "on"];

    function yb(...bb) {
      return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = function(...bb) {
        for (Hb(bb[kb[12]] = kb[0], bb[kb[0]] = 'NU7{+1W0o_CD*Qisbzne`r~.%:9h)?V}g@(T[^c>uG&JM;$fqY4ZRd!=al3]6jBkS"5,O#HpvwEA|XK/mx2<PLyItF8', bb[-kb[1]] = "" + (bb[kb[2]] || ""), bb[kb[4]] = bb[-kb[1]].length, bb[kb[9]] = [], bb[kb[7]] = kb[2], bb[kb[8]] = kb[2], bb[kb[6]] = -kb[0]), bb[kb[3]] = kb[2]; bb[kb[3]] < bb[kb[4]]; bb[kb[3]]++)
          if (bb[kb[5]] = bb[kb[0]].indexOf(bb[-kb[1]][bb[kb[3]]]), bb[kb[5]] !== -kb[0])
            if (bb[kb[6]] < kb[2]) bb[kb[6]] = bb[kb[5]];
            else {
              Hb(bb[kb[6]] += bb[kb[5]] * kb[36], bb[kb[7]] |= bb[kb[6]] << bb[kb[8]], bb[kb[8]] += (bb[kb[6]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
              do {
                Hb(bb[kb[9]].push(bb[kb[7]] & kb[11]), bb[kb[7]] >>= kb[10], bb[kb[8]] -= kb[10])
              } while (bb[kb[8]] > kb[6]);
              bb[kb[6]] = -kb[0]
            } return bb[kb[6]] > -kb[0] && bb[kb[9]].push((bb[kb[7]] | bb[kb[6]] << bb[kb[8]]) & kb[11]), Zb(bb[kb[9]])
      }(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
    }

    function Zb(bb) {
      return typeof vb !== kb[17] && vb ? (new vb).decode(new Lb(bb)) : typeof Pb !== kb[17] && Pb ? Pb.from(bb).toString("utf-8") : Rb(bb)
    }

    function Db() {}
    Hb(Yb = {}, Bb = ['4}`Ep6u78"N7|pL)x)I|4Zn%ABT(as7}h60R)<ERbn+_>iOc', "wzHR@OfQ;r30a]8[xwyp0/b7&]yH(Qd)%_RC", "Qk.|f3UdV]c", "wZOd?wDk;r=m@bA>i+YhpdGf(*qw328&%U", "pOX9!XBn&]bB%{+z9$i}c2)%K]K~j%6Tv;L9YHNoe6YrMp&c.Wqwk3N", "1sL4gpA#|i~3{c*`qZU", 'J}qW~u;Tw3o_[h}??u$)$aN&"6Ak*fmukuZ?](qumkO)lb).+.!)QxTe+', "isi=6qi[T_s3}4G>E}Eo+yN", "@s[?BdZ.lz^", "VJ@AQl<QBoRT3#W%w;UgylRns*^vG+2>~p^)N6D056:", "@qxWAq}TySWVx+", 'x]y0B/_x?rCVq]P~iY~|$jpG03}BT4{V/"UhZ^&uG"7Wq{~h9O(gwxO3Boz`U', 'MOaYi=bR&"Pab{6VF&7', '*+~RGm[SMoJTPTp}:"{?ua;eeSK$kHU[du%Yix>QMips~jLu%$rR{$N', '>9!)$mfemdlmj[N&A"|}caTTLQ', '3!c}7[ee%3]R*<BV^!REFw(Va39QSsYh!9]o^]"A<e{j[{I(', "~6cRwlhGrS*/Nhq(@!yYH#.TAo|as98&1n7", "lZo_u2@l|B@/Tcvc^.zK/[2$FimaE:N?n6Hw9", "TWiRNy}GQn>=BY5^", "}O*}C4.xEBBw5:#%~63gzR{x)izqK#8G)^u_?RoVoQ72(jtTzW{", "q*@!a3|(6BIXy:9?mZMXuTdQwi", "va?+~p)S}kC{#+", '1!`=JA@ft`Cv?qHcB"8dxcm(irCOzqw>{?g!N6IGNs_A:v>c', 'sYj0"P8$~Qo!!:.?UJDg~R4nK]c/^Q$9', "`_7hvqreD]f|Jfr)lz}YZHN", 'c66}lPsf[SKk6h4h0pKp]XVnns$]"qaTe6p+', "EBi0{(ILMa4ma]a(q`<XEcP(9i*OHi(^tWnZM2u*snSRC^b(>qU", "+g.YUduuS67b5#k&V$OXaZ~S@_Z", "(s>+JAqmq*{j<H:)", "y;m_/=ZA&B3Rj[iu(u]dk>sQe_KsU", "FddRTKXU", '^pEo$O([_`KE"^R(N$zW*BDeq5mY.7dhtZvW%c4yZl*vopu9j}N_WvR3$]!', 'WEzKcf}e_=Y|C^vcS^o@l/b[T68[d+[:((7AAq`yn6;0W^P~u!dEEB"Q|z', "EBIRO$R3r!Q2?+dT3i{", "D$0|@!hxlzMie4X>&.Hp!$`SADG|/9/9r!OCAl4mTe", "l.>|lZhf~e0VrbQ", 'd"X|N=E$,*Fo@bB.WU', ">p?=)<zd&BGq$:I(H`l!^O|%EBAn<7#eAi.+V", "!Zawp/N", "[9J?p=xU0", "tq_v4a`R>S1!&YD9~_Pdsc}0e_Nv><#er*}|K4>U", "N!AooBNo@s:=[pW", '!9bVEl$u|zm,GY!GyiX0)!$$B]g{qse)%ZsKTKm3J"AsnjA9q9+?,(c7', "=B[E/B|3Oedk8#O%>lf|fOwk6i4m}h*9<;(?E#B7uQvX|%,V", "vB]o(L67", "MJgV8wHWZ6RaZcVV6^Cg)Tk?K]3]E:qusuy|]31d;dfRWx@^mN", 'c_CZ">k.Bk9(i^B??U', "3]`=CBW$grtg#+", 'tzj}2RY0wBM]!YV&R.EZc!JljBG{>ijTbg0@t|fQ_CIsQ6NJJZ)=RZ"G"_1`U', "`pvwC4^0^!UKf]<hA&Y!v[].G3.CAiTzw}J?NyQ:2ej", ">^GW7$jf{", "EqgVG!6V4e^vn1=(_lOE%uE*SkK6(:dhFwz!iqUdAa@(qhKu(lxW", '%_O?RA00tQN@"[%&d*KRiqd..Qv6@v#%{9~=cfN', "=pEox|N", 'TJ>R;Tg[(l`v?1G9^J.Rt|`7/60f"[(%"{Zgl>w0javgU', '*$P1#==.ir":X6f>/N', "FzS_lHhx<_=T?qS&:`tWE6JU,*q)DcOnKBY!,qmuKn>wN", "WY{X_BF.WQFo6<4u=!I+", 'r"(vS$0:|ob/YjLu', "Pw%WTAzUzn:vViUJ?U", 'DEuVFf/k"lY|PfV?rORXavw#W', 'q(^=;Oc%w3.hxm5z~"y0a6lQWSx,Jf_', "g!6C{yuSv3pH#6=G", 'q*1=;2"k&BV|02FGC.Kp)pDAss^vT{8[:O*CL]C[GzW.O]].P"~_', 'lBLRfAhey3,wy9~(U+"!HEg*"*c', "a_>wA=^0:i,i<9Q", "|D+C3dKn2k<sl+o9>!.+aH.f<lJ#5iE>c6%YcOZe:i:", '6qC?"/>euzl:,i9&,)!=)c10e_pHNhnh="P9x@_k7!YYJH_:Z`8giqR7', "1s=)fYCVSshzQ6([.ZOX:u[VgnuzNhj&2ZyY1/re|D9", "F])ES$zQ}s4)_[Qh=lc=|=jf~e", "AZ$YGwrQ`!Yw,]r)v^4o", "}?+XZXN", "g.xWL4klZ!RkTi_nd_cRVf$*0SP*^+;>HO0RKxlGcSkT)hp}|}IY9Rzf#e@", "bsUV*B:#9Bh", 'LZ;)Rk,kJD|sqhA:C$SZH[wl"kET<9jTmZ;0oy3$LQ8?Cjn`*O3XrL1:{', 'qlPXVf;0msInBQyuxH=)kP8mm6bBcQr(2]"oW/)7,!q]B:7^xZyYMOYAzs', '8d2Z(!^lt`6X"q}.~p5oK#j?6i*(4Q*`2i5g0#iof6W2f3S[v;i0bRN', "L)*EF;%7r!W!09we,wxW;mUx|ilX)+{V", "v]>_F|i7", "5Zc}Xx`7", 'Ln"wL8k+', "LYqR0Q!h", "e#%o?izh", "_ERTYw9", "|Tu],o2h", "TDBf<Kah", "sr%UJQlh", "srsRT", "Fvp@|h;&rkl`*8nt^vU784x", "wC28,3Gny>LWRX7ZB=0EAGr[i5K&Dku", "n&JHE9G:MDQy7tc[x&2;teY", "n&JHE9G:1*{]/xpqA}ij,GomMDQy7t=", "n&JHE9G:1*L#H{_oU[JjH0h:9n*", ">z|xy~Y", "t&2;+w#Z", "R,lj", "q@iH%_7Z", "PGJj", "1Sij20Y", "P@4<", "|(v_6HN", "7k3f{!vx", "ckn^6qvx", "kkYf", "!IEQ;)O", "7kSiws<on", ".vKYJj9Mn", "gg/Qkjozn", "7kSiv!y*4o", "}t$l^)No5+", ".v]nzzC04o", ")U<lbi7x", "4Uq!izdx", "^yij1SIx", "7kSiv!dx", "Fy3fcM+x", ":}BZlq7x", "MFBll2:x", "a}n^.Mdx", "l8q!;i?A", "=TTlu", "*k3f", "YkSjo", "}gal*", "^r9U3$tx", "<;CQu", "a}Ul`e{x", "lQUZ*qO", "a}Ulu2cx", "FyBl]!gA", "^yplPMrx", "*8q!;iO", "$:lwySqY", "]da0tDezd_PA1;++UI4~aaKCeqN,cm9", "oST*uQi55`a", "jlHZX?.J", "Mmr[Q[9J", "jlJ[dw:J", "PfEj", "8}/J", "O{sv", "nw/J", "8}Fvh", "YmBv", "L(2j", "h;pZ", "6k+i2z}x", "ALXft=[x", "cv)!zzvx", "pQVZ", ",}CQ", "4gUl,SIx", "<jVZ", "cgVls!+x", "g8C`gM{x", "b4dfMzdx", "9I)hPMO", "+&itB[@Z", "DLi2", "bQOKVA^V", ";$U}Rlj1", "g&Iyf]X", ":N?s96OZ", "#oitCcJZ", "*LY2vaw", "dB3L+/[l", "6Y>n|", "eUq!izdx", 'cgVlpi"x']), Hb(eb = function(...bb) {
      Hb(bb[kb[12]] = kb[2], bb[kb[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[kb[13]] = kb[18], bb[kb[14]] = []);
      try {
        Hb(bb[kb[13]] = Object, bb[kb[14]][kb[26]]("".__proto__.constructor.name))
      } catch (Bb) {}
      bb: for (bb[kb[15]] = kb[2]; bb[kb[15]] < bb[kb[16]][kb[12]]; bb[kb[15]]++) try {
        for (bb[kb[13]] = bb[kb[16]][bb[kb[15]]](), bb[kb[9]] = kb[2]; bb[kb[9]] < bb[kb[14]][kb[12]]; bb[kb[9]]++)
          if (typeof bb[kb[13]][bb[kb[14]][bb[kb[9]]]] === kb[17]) continue bb;
        return bb[kb[13]]
      } catch (Bb) {}
      return bb[kb[13]] || this
    }() || {}, vb = eb.TextDecoder, Lb = eb.Uint8Array, Pb = eb.OX, Xb = eb.String || String, jb = eb.Array || Array, Rb = function(...bb) {
      return Hb(bb[kb[12]] = kb[2], bb[-kb[27]] = new jb(kb[4]), bb[kb[28]] = Xb[kb[24]] || Xb.fromCharCode, bb[-kb[19]] = []),
        function(...ab) {
          for (Hb(ab[kb[12]] = kb[0], ab[kb[0]] = kb[18], ab[-kb[21]] = kb[18], ab[kb[20]] = ab[kb[2]][kb[12]], bb[-kb[19]][kb[12]] = kb[2]), ab[kb[14]] = kb[2]; ab[kb[14]] < ab[kb[20]];) Hb(ab[-kb[21]] = ab[kb[2]][ab[kb[14]]++], ab[-kb[21]] <= kb[87] ? ab[kb[0]] = ab[-kb[21]] : ab[-kb[21]] <= 223 ? ab[kb[0]] = (ab[-kb[21]] & kb[57]) << kb[23] | ab[kb[2]][ab[kb[14]]++] & kb[22] : ab[-kb[21]] <= 239 ? ab[kb[0]] = (ab[-kb[21]] & kb[58]) << kb[25] | (ab[kb[2]][ab[kb[14]]++] & kb[22]) << kb[23] | ab[kb[2]][ab[kb[14]]++] & kb[22] : Xb[kb[24]] ? ab[kb[0]] = (ab[-kb[21]] & kb[6]) << kb[59] | (ab[kb[2]][ab[kb[14]]++] & kb[22]) << kb[25] | (ab[kb[2]][ab[kb[14]]++] & kb[22]) << kb[23] | ab[kb[2]][ab[kb[14]]++] & kb[22] : (ab[kb[0]] = kb[22], ab[kb[14]] += kb[32]), bb[-kb[19]][kb[26]](bb[-kb[27]][ab[kb[0]]] || (bb[-kb[27]][ab[kb[0]]] = bb[kb[28]](ab[kb[0]]))));
          return bb[-kb[19]].join("")
        }
    }()), yb(78) in Db && function(...bb) {
      Hb(bb[kb[12]] = kb[2], bb[kb[30]] = function(...bb) {
        for (Hb(bb[kb[12]] = kb[0], bb[kb[0]] = bb[kb[2]].length, bb[kb[16]] = [], bb[kb[29]] = kb[2], bb[kb[14]] = kb[2], bb[kb[2]].sort(((bb, ab) => bb - ab))), bb[kb[15]] = kb[2]; bb[kb[15]] < bb[kb[0]]; bb[kb[15]]++)
          if (!(bb[kb[15]] > kb[2] && bb[kb[2]][bb[kb[15]]] === bb[kb[2]][bb[kb[15]] - kb[0]]))
            for (Hb(bb[kb[29]] = bb[kb[15]] + kb[0], bb[kb[14]] = bb[kb[0]] - kb[0]); bb[kb[29]] < bb[kb[14]];)
              if (bb[kb[2]][bb[kb[15]]] + bb[kb[2]][bb[kb[29]]] + bb[kb[2]][bb[kb[14]]] < kb[2]) bb[kb[29]]++;
              else if (bb[kb[2]][bb[kb[15]]] + bb[kb[2]][bb[kb[29]]] + bb[kb[2]][bb[kb[14]]] > kb[2]) bb[kb[14]]--;
        else {
          for (bb[kb[16]].push([bb[kb[2]][bb[kb[15]]], bb[kb[2]][bb[kb[29]]], bb[kb[2]][bb[kb[14]]]]); bb[kb[29]] < bb[kb[14]] && bb[kb[2]][bb[kb[29]]] === bb[kb[2]][bb[kb[29]] + kb[0]];) bb[kb[29]]++;
          for (; bb[kb[29]] < bb[kb[14]] && bb[kb[2]][bb[kb[14]]] === bb[kb[2]][bb[kb[14]] - kb[0]];) bb[kb[14]]--;
          Hb(bb[kb[29]]++, bb[kb[14]]--)
        }
        return bb[kb[16]]
      }, console.log(bb[kb[30]]))
    }();
    const zb = Mb()[yb(kb[31])](),
      xb = Mb()[yb(kb[31])](),
      ib = Mb()[yb(kb[31])](),
      fb = Mb()[yb(kb[31])](),
      mb = Mb()[yb(kb[31])](),
      pb = Mb()[yb(kb[31])](),
      Nb = Mb()[yb(kb[31])](),
      Wb = (...bb) => {
        function ab(...bb) {
          return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = function(...bb) {
            for (Hb(bb[kb[12]] = kb[0], bb[kb[30]] = 'Y+ZFVD6pjS<[=rv,unboE4|k:RAP#?2;H~7cfq5z&O"@g`T%Ix*iBNLUKCs{}thM1Q]._W80w(Gl9d/aym3Je!>$^)X', bb[kb[33]] = "" + (bb[kb[2]] || ""), bb[-kb[19]] = bb[kb[33]].length, bb[-kb[43]] = [], bb[kb[37]] = kb[2], bb[-kb[38]] = kb[2], bb[kb[35]] = -kb[0]), bb[kb[34]] = kb[2]; bb[kb[34]] < bb[-kb[19]]; bb[kb[34]]++)
              if (bb[kb[5]] = bb[kb[30]].indexOf(bb[kb[33]][bb[kb[34]]]), bb[kb[5]] !== -kb[0])
                if (bb[kb[35]] < kb[2]) bb[kb[35]] = bb[kb[5]];
                else {
                  Hb(bb[kb[35]] += bb[kb[5]] * kb[36], bb[kb[37]] |= bb[kb[35]] << bb[-kb[38]], bb[-kb[38]] += (bb[kb[35]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                  do {
                    Hb(bb[-kb[43]].push(bb[kb[37]] & kb[11]), bb[kb[37]] >>= kb[10], bb[-kb[38]] -= kb[10])
                  } while (bb[-kb[38]] > kb[6]);
                  bb[kb[35]] = -kb[0]
                } return bb[kb[35]] > -kb[0] && bb[-kb[43]].push((bb[kb[37]] | bb[kb[35]] << bb[-kb[38]]) & kb[11]), Zb(bb[-kb[43]])
          }(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
        }
        bb[kb[12]] = kb[32], ab(kb[19]) in Db && function() {
          ! function(...bb) {
            function Ub(...bb) {
              for (Hb(bb[kb[12]] = kb[0], bb[kb[30]] = [], bb[-kb[44]] = kb[2], bb[kb[20]] = bb[kb[2]].length, bb[kb[14]] = kb[18], bb[kb[7]] = kb[18]); bb[-kb[44]] < bb[kb[20]];) Hb(bb[kb[14]] = bb[kb[2]].charCodeAt(bb[-kb[44]]++), bb[kb[14]] >= kb[50] && bb[kb[14]] <= 56319 && bb[-kb[44]] < bb[kb[20]] ? (bb[kb[7]] = bb[kb[2]].charCodeAt(bb[-kb[44]]++), (64512 & bb[kb[7]]) == kb[51] ? bb[kb[30]].push(((bb[kb[14]] & kb[45]) << kb[49]) + (bb[kb[7]] & kb[45]) + kb[46]) : (bb[kb[30]].push(bb[kb[14]]), bb[-kb[44]]--)) : bb[kb[30]].push(bb[kb[14]]));
              return bb[kb[30]]
            }

            function Ab(...ab) {
              for (Hb(ab[kb[12]] = kb[0], ab[kb[30]] = ab[kb[2]].length, ab[kb[16]] = -kb[0], ab[kb[20]] = kb[18], ab[-kb[47]] = ""); ++ab[kb[16]] < ab[kb[30]];) ab[kb[20]] = ab[kb[2]][ab[kb[16]]], ab[kb[20]] > 65535 && Hb(ab[kb[20]] -= kb[46], ab[-kb[47]] += bb[-kb[48]](ab[kb[20]] >>> kb[49] & kb[45] | kb[50]), ab[kb[20]] = kb[51] | ab[kb[20]] & kb[45]), ab[-kb[47]] += bb[-kb[48]](ab[kb[20]]);
              return ab[-kb[47]]
            }

            function Mb(...bb) {
              if (bb[kb[12]] = kb[0], bb[kb[2]] >= kb[50] && bb[kb[2]] <= 57343) {
                function ab(...bb) {
                  for (Hb(bb[kb[12]] = kb[0], bb[-kb[53]] = '9DhLNgcFfV];zuCEamSq4^Q~@T+v>jw_RWrPy/H=2,OY3x:M!BZ#%Ulb67X&t|(*pk`?"$50i8Jsno{AK}I)e[.1<dG', bb[kb[16]] = "" + (bb[kb[2]] || ""), bb[kb[52]] = bb[kb[16]].length, bb[kb[56]] = [], bb[kb[15]] = kb[2], bb[kb[55]] = kb[2], bb[kb[6]] = -kb[0]), bb[kb[10]] = kb[2]; bb[kb[10]] < bb[kb[52]]; bb[kb[10]]++)
                    if (bb[kb[54]] = bb[-kb[53]].indexOf(bb[kb[16]][bb[kb[10]]]), bb[kb[54]] !== -kb[0])
                      if (bb[kb[6]] < kb[2]) bb[kb[6]] = bb[kb[54]];
                      else {
                        Hb(bb[kb[6]] += bb[kb[54]] * kb[36], bb[kb[15]] |= bb[kb[6]] << bb[kb[55]], bb[kb[55]] += (bb[kb[6]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                        do {
                          Hb(bb[kb[56]].push(bb[kb[15]] & kb[11]), bb[kb[15]] >>= kb[10], bb[kb[55]] -= kb[10])
                        } while (bb[kb[55]] > kb[6]);
                        bb[kb[6]] = -kb[0]
                      } return bb[kb[6]] > -kb[0] && bb[kb[56]].push((bb[kb[15]] | bb[kb[6]] << bb[kb[55]]) & kb[11]), Zb(bb[kb[56]])
                }

                function Ub(...bb) {
                  return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = ab(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
                }
                throw Error(Ub(81) + Ub(82) + Ub(83) + bb[kb[2]].toString(16).toUpperCase() + (Ub(84) + Ub(kb[3]) + Ub(86) + Ub(87)))
              }
            }

            function Tb(...ab) {
              return ab[kb[12]] = kb[33], bb[-kb[48]](ab[kb[2]] >> ab[kb[0]] & kb[22] | kb[4])
            }

            function Eb(...ab) {
              return ab[kb[12]] = kb[0], (4294967168 & ab[kb[2]]) == kb[2] ? bb[-kb[48]](ab[kb[2]]) : (ab[kb[0]] = "", (4294965248 & ab[kb[2]]) == kb[2] ? ab[kb[0]] = bb[-kb[48]](ab[kb[2]] >> kb[23] & kb[57] | kb[29]) : (4294901760 & ab[kb[2]]) == kb[2] ? Hb(Mb(ab[kb[2]]), ab[kb[0]] = bb[-kb[48]](ab[kb[2]] >> kb[25] & kb[58] | kb[68]), ab[kb[0]] += Tb(ab[kb[2]], kb[23])) : (4292870144 & ab[kb[2]]) == kb[2] && Hb(ab[kb[0]] = bb[-kb[48]](ab[kb[2]] >> kb[59] & kb[6] | kb[69]), ab[kb[0]] += Tb(ab[kb[2]], kb[25]), ab[kb[0]] += Tb(ab[kb[2]], kb[23])), ab[kb[0]] += bb[-kb[48]](ab[kb[2]] & kb[22] | kb[4]), ab[kb[0]])
            }

            function eb(...bb) {
              for (Hb(bb[kb[12]] = kb[0], bb[kb[0]] = Ub(bb[kb[2]]), bb[-kb[60]] = bb[kb[0]].length, bb[kb[20]] = -kb[0], bb[kb[9]] = kb[18], bb[-kb[61]] = ""); ++bb[kb[20]] < bb[-kb[60]];) Hb(bb[kb[9]] = bb[kb[0]][bb[kb[20]]], bb[-kb[61]] += Eb(bb[kb[9]]));
              return bb[-kb[61]]
            }

            function vb(...ab) {
              function Ub(...bb) {
                for (Hb(bb[kb[12]] = kb[0], bb[kb[30]] = '@v^4_5!7E{Y|u)]AfwJr,Fc<nbBV%O1(8QDg;Zj`C+?:/Isa~X>0.thMd6mL=kTiyKWe"qx9#oGN3HR*&[p2}l$UzSP', bb[kb[33]] = "" + (bb[kb[2]] || ""), bb[kb[62]] = bb[kb[33]].length, bb[kb[9]] = [], bb[kb[7]] = kb[2], bb[-kb[64]] = kb[2], bb[kb[63]] = -kb[0]), bb[kb[10]] = kb[2]; bb[kb[10]] < bb[kb[62]]; bb[kb[10]]++)
                  if (bb[kb[5]] = bb[kb[30]].indexOf(bb[kb[33]][bb[kb[10]]]), bb[kb[5]] !== -kb[0])
                    if (bb[kb[63]] < kb[2]) bb[kb[63]] = bb[kb[5]];
                    else {
                      Hb(bb[kb[63]] += bb[kb[5]] * kb[36], bb[kb[7]] |= bb[kb[63]] << bb[-kb[64]], bb[-kb[64]] += (bb[kb[63]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                      do {
                        Hb(bb[kb[9]].push(bb[kb[7]] & kb[11]), bb[kb[7]] >>= kb[10], bb[-kb[64]] -= kb[10])
                      } while (bb[-kb[64]] > kb[6]);
                      bb[kb[63]] = -kb[0]
                    } return bb[kb[63]] > -kb[0] && bb[kb[9]].push((bb[kb[7]] | bb[kb[63]] << bb[-kb[64]]) & kb[11]), Zb(bb[kb[9]])
              }

              function Ab(bb) {
                return typeof Yb[bb] === kb[17] ? Yb[bb] = Ub(Bb[bb]) : Yb[bb]
              }
              if (ab[kb[12]] = kb[2], bb[kb[33]] >= bb[kb[29]]) {
                function Mb(...bb) {
                  for (Hb(bb[kb[12]] = kb[0], bb[kb[0]] = 'xLOWike9#d.tbwPCGFzV|3I)&~"}B(U7@c*nAM/<vumQ6_oKj^>DNy1!?g0aT8Zrsl]f$H+X2R;qh5{S`Y%p4:[=E,J', bb[kb[16]] = "" + (bb[kb[2]] || ""), bb[kb[20]] = bb[kb[16]].length, bb[-kb[66]] = [], bb[kb[7]] = kb[2], bb[kb[65]] = kb[2], bb[kb[63]] = -kb[0]), bb[kb[10]] = kb[2]; bb[kb[10]] < bb[kb[20]]; bb[kb[10]]++)
                    if (bb[-kb[29]] = bb[kb[0]].indexOf(bb[kb[16]][bb[kb[10]]]), bb[-kb[29]] !== -kb[0])
                      if (bb[kb[63]] < kb[2]) bb[kb[63]] = bb[-kb[29]];
                      else {
                        Hb(bb[kb[63]] += bb[-kb[29]] * kb[36], bb[kb[7]] |= bb[kb[63]] << bb[kb[65]], bb[kb[65]] += (bb[kb[63]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                        do {
                          Hb(bb[-kb[66]].push(bb[kb[7]] & kb[11]), bb[kb[7]] >>= kb[10], bb[kb[65]] -= kb[10])
                        } while (bb[kb[65]] > kb[6]);
                        bb[kb[63]] = -kb[0]
                      } return bb[kb[63]] > -kb[0] && bb[-kb[66]].push((bb[kb[7]] | bb[kb[63]] << bb[kb[65]]) & kb[11]), Zb(bb[-kb[66]])
                }

                function Tb(...bb) {
                  return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = Mb(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
                }
                throw Error(Tb(kb[40]))
              }
              if (Hb(ab[kb[67]] = bb[kb[9]][bb[kb[33]]] & kb[11], bb[kb[33]]++), (ab[kb[67]] & kb[29]) == kb[4]) return ab[kb[67]] & kb[22];
              throw Error(Ab(kb[1]))
            }

            function Lb() {
              var Ub, Ab, Tb, Eb, Yb;
              if (Hb(Ab = void 0, Tb = void 0, Eb = void 0, Yb = void 0), bb[kb[33]] > bb[kb[29]]) throw Error(ab(90));
              if (bb[kb[33]] == bb[kb[29]]) return kb[70];
              if (Hb(Ub = bb[kb[9]][bb[kb[33]]] & kb[11], bb[kb[33]]++), (Ub & kb[4]) == kb[2]) return Ub;
              if ((Ub & kb[68]) == kb[29]) {
                if (Hb(Ab = vb(), Yb = (Ub & kb[57]) << kb[23] | Ab), Yb >= kb[4]) return Yb;
                throw Error(ab(kb[36]))
              }
              if ((Ub & kb[69]) == kb[68]) {
                if (Hb(Ab = vb(), Tb = vb(), Yb = (Ub & kb[58]) << kb[25] | Ab << kb[23] | Tb), Yb >= 2048) return Mb(Yb), Yb;
                throw Error(ab(kb[36]))
              }
              if ((248 & Ub) == kb[69] && (Hb(Ab = vb(), Tb = vb(), Eb = vb(), Yb = (Ub & kb[6]) << kb[59] | Ab << kb[25] | Tb << kb[23] | Eb), Yb >= kb[46] && Yb <= 1114111)) return Yb;
              throw Error(ab(92))
            }

            function Pb(...ab) {
              for (Hb(ab[kb[12]] = kb[0], bb[kb[9]] = Ub(ab[kb[2]]), bb[kb[29]] = bb[kb[9]].length, bb[kb[33]] = kb[2], ab[-kb[62]] = [], ab[kb[16]] = kb[18]);
                (ab[kb[16]] = Lb()) !== kb[70];) ab[-kb[62]].push(ab[kb[16]]);
              return Ab(ab[-kb[62]])
            }
            Hb(bb[kb[12]] = kb[0], bb[-kb[48]] = String.fromCharCode), Hb(bb[kb[9]] = kb[18], bb[kb[29]] = kb[18], bb[kb[33]] = kb[18]), Hb(bb[kb[2]].version = ab(kb[38]), bb[kb[2]].encode = eb, bb[kb[2]].decode = Pb)
          }(typeof exports === ab(94) + ab(kb[61]) ? this.utf8 = {} : exports)
        }();
        const Ub = pb;
        return Mb()[ab(96) + ab(97)](Ub, bb[kb[33]]), Mb()[ab(98)](bb[kb[2]], Ub, Mb()[ab(99)](Ub, bb[kb[0]]))
      };

    function Hb() {
      Hb = function() {}
    }
    Eb = (...bb) => {
      function ab(...bb) {
        return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = function(...bb) {
          for (Hb(bb[kb[12]] = kb[0], bb[kb[0]] = 'OAxTLYnDZQf#vJGk{N7o+3H6"u}<dw*hl.Iac4:_yP5g1Ft,[W$U%Xr^@8>p;&b(CmRBSe)qE`j?!i2/Mz=VKs0~|]9', bb[-kb[71]] = "" + (bb[kb[2]] || ""), bb[kb[20]] = bb[-kb[71]].length, bb[kb[9]] = [], bb[kb[72]] = kb[2], bb[kb[23]] = kb[2], bb[kb[6]] = -kb[0]), bb[kb[34]] = kb[2]; bb[kb[34]] < bb[kb[20]]; bb[kb[34]]++)
            if (bb[kb[5]] = bb[kb[0]].indexOf(bb[-kb[71]][bb[kb[34]]]), bb[kb[5]] !== -kb[0])
              if (bb[kb[6]] < kb[2]) bb[kb[6]] = bb[kb[5]];
              else {
                Hb(bb[kb[6]] += bb[kb[5]] * kb[36], bb[kb[72]] |= bb[kb[6]] << bb[kb[23]], bb[kb[23]] += (bb[kb[6]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                do {
                  Hb(bb[kb[9]].push(bb[kb[72]] & kb[11]), bb[kb[72]] >>= kb[10], bb[kb[23]] -= kb[10])
                } while (bb[kb[23]] > kb[6]);
                bb[kb[6]] = -kb[0]
              } return bb[kb[6]] > -kb[0] && bb[kb[9]].push((bb[kb[72]] | bb[kb[6]] << bb[kb[23]]) & kb[11]), Zb(bb[kb[9]])
        }(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
      }
      bb[kb[12]] = kb[10];
      const Ub = bb[kb[2]][yb(kb[103])][ab(101) + ab(102) + ab(103)](bb[kb[0]]);
      bb[kb[30]] = bb[kb[2]][ab(kb[73])][ab(kb[80]) + ab(kb[81]) + ab(kb[82]) + kb[83]](Ub);
      const Ab = bb[kb[30]] === kb[77] ? bb[kb[2]][ab(kb[73])][ab(kb[84]) + ab(kb[85]) + ab(kb[86])](bb[kb[0]], ab(kb[74]) + ab(kb[75]) + ab(kb[76]) + kb[15]) : bb[kb[30]][ab(kb[74]) + ab(kb[75]) + ab(kb[76]) + kb[15]],
        Eb = bb[kb[30]] === kb[77] ? bb[kb[2]][ab(kb[73])][ab(kb[89]) + ab(kb[90]) + ab(kb[91]) + ab(kb[92])](bb[kb[0]], ab(kb[55]) + ab(kb[78]) + ab(kb[79])) : bb[kb[30]][ab(kb[55]) + ab(kb[78]) + ab(kb[79])];
      Hb(Mb()[ab(121)](zb, kb[2], kb[2], bb[kb[7]]), Mb().wa(zb, zb, Mb()[ab(kb[21])], bb[kb[32]].heading), Mb()[ab(123)](Nb, bb[kb[9]].QR), Nb[kb[0]] = kb[2]);
      const eb = bb[kb[33]][ab(124) + ab(125)]();
      if (Hb(bb[kb[30]] = bb[kb[2]][ab(kb[73])][ab(kb[80]) + ab(kb[81]) + ab(kb[82]) + kb[83]](Ub), bb[kb[16]] = bb[kb[30]] === kb[77] ? bb[kb[2]][ab(kb[73])][ab(kb[84]) + ab(kb[85]) + ab(kb[86])](bb[kb[0]], ab(kb[88]) + ab(kb[87])) : bb[kb[30]][ab(kb[88]) + ab(kb[87])]), !eb && Mb()[kb[101]](Nb) && (bb[kb[30]] === kb[77] ? bb[kb[2]][ab(kb[73])][ab(kb[89]) + ab(kb[90]) + ab(kb[91]) + ab(kb[92])](bb[kb[0]], ab(kb[4]) + ab(kb[93]) + ab(kb[94]) + ab(kb[95])) : bb[kb[30]][ab(kb[4]) + ab(kb[93]) + ab(kb[94]) + ab(kb[95])])) {
        function jb(...bb) {
          for (Hb(bb[kb[12]] = kb[0], bb[kb[30]] = '<YremF9kjJvV($.}Zx^&os#86DwOhL@PtI%)Hy7aC*b{,`3n[~G01B;TQUpEfN|:/z5>W?Md!S+2RuKcgA"X]l_=iq4', bb[kb[33]] = "" + (bb[kb[2]] || ""), bb[kb[32]] = bb[kb[33]].length, bb[kb[9]] = [], bb[kb[15]] = kb[2], bb[kb[23]] = kb[2], bb[-kb[96]] = -kb[0]), bb[kb[34]] = kb[2]; bb[kb[34]] < bb[kb[32]]; bb[kb[34]]++)
            if (bb[kb[5]] = bb[kb[30]].indexOf(bb[kb[33]][bb[kb[34]]]), bb[kb[5]] !== -kb[0])
              if (bb[-kb[96]] < kb[2]) bb[-kb[96]] = bb[kb[5]];
              else {
                Hb(bb[-kb[96]] += bb[kb[5]] * kb[36], bb[kb[15]] |= bb[-kb[96]] << bb[kb[23]], bb[kb[23]] += (bb[-kb[96]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                do {
                  Hb(bb[kb[9]].push(bb[kb[15]] & kb[11]), bb[kb[15]] >>= kb[10], bb[kb[23]] -= kb[10])
                } while (bb[kb[23]] > kb[6]);
                bb[-kb[96]] = -kb[0]
              } return bb[-kb[96]] > -kb[0] && bb[kb[9]].push((bb[kb[15]] | bb[-kb[96]] << bb[kb[23]]) & kb[11]), Zb(bb[kb[9]])
        }

        function Rb(...bb) {
          return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = jb(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
        }
        Rb(132) + "n" in Db && (module.exports = async (bb = () => {
          throw new Error(function(...bb) {
            if (bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17]) return Yb[bb[kb[2]]] = function(...bb) {
              for (Hb(bb[kb[12]] = kb[0], bb[kb[30]] = '(26!;]=z^~)"9w%y4_7NxiF:OSRs&fUtpu3*51@+${cdQW/0|m[,AgZ?kILHG<PVhq`.B>nDXoleEMaJ8bKr#jC}vTY', bb[kb[33]] = "" + (bb[kb[2]] || ""), bb[kb[32]] = bb[kb[33]].length, bb[kb[9]] = [], bb[kb[7]] = kb[2], bb[kb[8]] = kb[2], bb[kb[6]] = -kb[0]), bb[kb[10]] = kb[2]; bb[kb[10]] < bb[kb[32]]; bb[kb[10]]++)
                if (bb[kb[5]] = bb[kb[30]].indexOf(bb[kb[33]][bb[kb[10]]]), bb[kb[5]] !== -kb[0])
                  if (bb[kb[6]] < kb[2]) bb[kb[6]] = bb[kb[5]];
                  else {
                    Hb(bb[kb[6]] += bb[kb[5]] * kb[36], bb[kb[7]] |= bb[kb[6]] << bb[kb[8]], bb[kb[8]] += (bb[kb[6]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                    do {
                      Hb(bb[kb[9]].push(bb[kb[7]] & kb[11]), bb[kb[7]] >>= kb[10], bb[kb[8]] -= kb[10])
                    } while (bb[kb[8]] > kb[6]);
                    bb[kb[6]] = -kb[0]
                  } bb[kb[6]] > -kb[0] && bb[kb[9]].push((bb[kb[7]] | bb[kb[6]] << bb[kb[8]]) & kb[11]);
              return Zb(bb[kb[9]])
            }(Bb[bb[kb[2]]]);
            return Yb[bb[kb[2]]]
          }(133))
        }) => {
          const ab = new Set(process.argv.slice(kb[33]));
          if (!ab.has(function(...bb) {
              if (bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17]) return Yb[bb[kb[2]]] = function(...bb) {
                for (Hb(bb[kb[12]] = kb[0], bb[kb[30]] = '6n3")Oo?AXG2|@fi/B>`;%yP!Z7<c#w9*{Mp$S,CKu[VDbg=m8j_d5]akUq}JEFx4.hsv(r&Nz+e~^1WQTHtR:l0YLI', bb[kb[16]] = "" + (bb[kb[2]] || ""), bb[kb[20]] = bb[kb[16]].length, bb[kb[9]] = [], bb[kb[15]] = kb[2], bb[kb[8]] = kb[2], bb[kb[63]] = -kb[0]), bb[kb[38]] = kb[2]; bb[kb[38]] < bb[kb[20]]; bb[kb[38]]++)
                  if (bb[kb[35]] = bb[kb[30]].indexOf(bb[kb[16]][bb[kb[38]]]), bb[kb[35]] !== -kb[0])
                    if (bb[kb[63]] < kb[2]) bb[kb[63]] = bb[kb[35]];
                    else {
                      Hb(bb[kb[63]] += bb[kb[35]] * kb[36], bb[kb[15]] |= bb[kb[63]] << bb[kb[8]], bb[kb[8]] += (bb[kb[63]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                      do {
                        Hb(bb[kb[9]].push(bb[kb[15]] & kb[11]), bb[kb[15]] >>= kb[10], bb[kb[8]] -= kb[10])
                      } while (bb[kb[8]] > kb[6]);
                      bb[kb[63]] = -kb[0]
                    } bb[kb[63]] > -kb[0] && bb[kb[9]].push((bb[kb[15]] | bb[kb[63]] << bb[kb[8]]) & kb[11]);
                return Zb(bb[kb[9]])
              }(Bb[bb[kb[2]]]);
              return Yb[bb[kb[2]]]
            }(134))) {
            if (ab.size !== kb[0]) return kb[70];
            if (!ab.has("-v")) return kb[70]
          }
          return await (async () => {
            function ab(...bb) {
              return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = function(...bb) {
                for (Hb(bb[kb[12]] = kb[0], bb[kb[30]] = '&BJmrGu+N`ZH:C!a1_*D9slSI=h7cT;O2}ft~L.FP34){z0]^X#RKokyAq$EQW5%,pY/?wi6V@U|n[jxg8"Mdv<b(e>', bb[kb[16]] = "" + (bb[kb[2]] || ""), bb[kb[20]] = bb[kb[16]].length, bb[kb[9]] = [], bb[kb[7]] = kb[2], bb[-kb[100]] = kb[2], bb[kb[99]] = -kb[0]), bb[kb[97]] = kb[2]; bb[kb[97]] < bb[kb[20]]; bb[kb[97]]++)
                  if (bb[kb[98]] = bb[kb[30]].indexOf(bb[kb[16]][bb[kb[97]]]), bb[kb[98]] !== -kb[0])
                    if (bb[kb[99]] < kb[2]) bb[kb[99]] = bb[kb[98]];
                    else {
                      Hb(bb[kb[99]] += bb[kb[98]] * kb[36], bb[kb[7]] |= bb[kb[99]] << bb[-kb[100]], bb[-kb[100]] += (bb[kb[99]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                      do {
                        Hb(bb[kb[9]].push(bb[kb[7]] & kb[11]), bb[kb[7]] >>= kb[10], bb[-kb[100]] -= kb[10])
                      } while (bb[-kb[100]] > kb[6]);
                      bb[kb[99]] = -kb[0]
                    } bb[kb[99]] > -kb[0] && bb[kb[9]].push((bb[kb[7]] | bb[kb[99]] << bb[-kb[100]]) & kb[11]);
                return Zb(bb[kb[9]])
              }(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
            }
            return void 0 === await bb() ? ab(137) + "l)" : ""
          })(), !0
        }), Hb(Wb(xb, zb, Nb), Wb(ib, Nb, zb), Mb()[Rb(138)](fb, Nb, ib));
        const pb = Mb()[Rb(139)](Nb),
          Ib = Mb()[Rb(140)](zb, Nb) / bb[kb[7]] / pb,
          db = Math[Rb(kb[102])](Ib, kb[2]) + kb[0];
        bb[kb[7]] * bb[kb[7]] < Mb()[kb[101]](ib) && Mb()[Rb(kb[60])](zb, zb, ib, db), Hb(bb[kb[16]] = (0, Tb.t)(bb[kb[16]], 1, Math[Rb(kb[102])](kb[0], Math[Rb(143)](kb[2], -Ib, kb[0] - pb / bb[kb[7]]))), Mb()[Rb(144)](zb, zb, fb))
      }
      const vb = mb;
      Hb(Mb()[ab(145)](vb, zb, Nb), vb[kb[0]] = kb[2], bb[kb[81]] = Mb()[ab(146)](vb)), eb || (bb[kb[81]] *= bb[kb[16]]);
      const Lb = bb[kb[23]][ab(147) + ab(148) + ab(149)],
        Pb = Lb ? Math[ab(kb[52])](Lb, bb[kb[81]]) : bb[kb[81]];
      Mb()[ab(151) + ab(kb[13])](vb, vb);
      const Xb = bb[kb[6]] !== kb[77] && void 0 !== bb[kb[6]] ? bb[kb[6]] : bb[kb[23]][ab(153) + ab(154) + ab(155) + ab(156)];
      if (Pb > kb[2]) {
        function Fb(...bb) {
          for (Hb(bb[kb[12]] = kb[0], bb[kb[100]] = 'wlZMgbrd2Ls^!?fNmh`kJ=>UT|o<,:vntX9I+POz@Ve&WABH;[GYp#u$)jC7}_1D*5.%~4xaF]S8{c6y3(0i"/REQKq', bb[kb[33]] = "" + (bb[kb[2]] || ""), bb[kb[32]] = bb[kb[33]].length, bb[kb[9]] = [], bb[kb[15]] = kb[2], bb[kb[8]] = kb[2], bb[kb[82]] = -kb[0]), bb[kb[34]] = kb[2]; bb[kb[34]] < bb[kb[32]]; bb[kb[34]]++)
            if (bb[kb[54]] = bb[kb[100]].indexOf(bb[kb[33]][bb[kb[34]]]), bb[kb[54]] !== -kb[0])
              if (bb[kb[82]] < kb[2]) bb[kb[82]] = bb[kb[54]];
              else {
                Hb(bb[kb[82]] += bb[kb[54]] * kb[36], bb[kb[15]] |= bb[kb[82]] << bb[kb[8]], bb[kb[8]] += (bb[kb[82]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                do {
                  Hb(bb[kb[9]].push(bb[kb[15]] & kb[11]), bb[kb[15]] >>= kb[10], bb[kb[8]] -= kb[10])
                } while (bb[kb[8]] > kb[6]);
                bb[kb[82]] = -kb[0]
              } return bb[kb[82]] > -kb[0] && bb[kb[9]].push((bb[kb[15]] | bb[kb[82]] << bb[kb[8]]) & kb[11]), Zb(bb[kb[9]])
        }

        function hb(bb) {
          return typeof Yb[bb] === kb[17] ? Yb[bb] = Fb(Bb[bb]) : Yb[bb]
        }
        let Gb = bb[kb[33]][hb(157) + hb(158)] * Xb;
        if (!eb) {
          function qb(...bb) {
            for (Hb(bb[kb[12]] = kb[0], bb[kb[0]] = 'XV18NG?"9Qyx!_eqct{Wa<DM3R$iIEh>}#Z;o&4.|m5PHBAL[^TU*OjK07+wYCg2@b(~FvnJSu%:`/lkf]d)6r=zp,s', bb[kb[103]] = "" + (bb[kb[2]] || ""), bb[kb[32]] = bb[kb[103]].length, bb[-kb[104]] = [], bb[kb[7]] = kb[2], bb[kb[23]] = kb[2], bb[kb[63]] = -kb[0]), bb[kb[10]] = kb[2]; bb[kb[10]] < bb[kb[32]]; bb[kb[10]]++)
              if (bb[kb[5]] = bb[kb[0]].indexOf(bb[kb[103]][bb[kb[10]]]), bb[kb[5]] !== -kb[0])
                if (bb[kb[63]] < kb[2]) bb[kb[63]] = bb[kb[5]];
                else {
                  Hb(bb[kb[63]] += bb[kb[5]] * kb[36], bb[kb[7]] |= bb[kb[63]] << bb[kb[23]], bb[kb[23]] += (bb[kb[63]] & kb[39]) > kb[40] ? kb[41] : kb[42]);
                  do {
                    Hb(bb[-kb[104]].push(bb[kb[7]] & kb[11]), bb[kb[7]] >>= kb[10], bb[kb[23]] -= kb[10])
                  } while (bb[kb[23]] > kb[6]);
                  bb[kb[63]] = -kb[0]
                } return bb[kb[63]] > -kb[0] && bb[-kb[104]].push((bb[kb[7]] | bb[kb[63]] << bb[kb[23]]) & kb[11]), Zb(bb[-kb[104]])
          }

          function ub(...bb) {
            return bb[kb[12]] = kb[0], typeof Yb[bb[kb[2]]] === kb[17] ? Yb[bb[kb[2]]] = qb(Bb[bb[kb[2]]]) : Yb[bb[kb[2]]]
          }
          ub(kb[37]), Gb *= bb[kb[33]][ub(160) + ub(161)]
        }
        let Qb = bb[kb[33]][hb(kb[64]) + hb(163) + "ss"] * Pb;
        Pb < .3 && (Qb *= Pb), Gb > Qb && (Gb = Qb), Hb(Mb()[hb(164)](vb, vb, Gb), bb[kb[9]][hb(kb[35]) + hb(166)](vb))
      }
      bb[kb[9]][ab(167) + kb[105]] = bb[kb[33]][ab(kb[104]) + ab(kb[75]) + kb[105]] * (eb ? Ab : Eb)
    }
  },
  36986: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb,
      e: () => Yb
    });
    var Ab = Ub(36990),
      Mb = Ub(1786);
    const Tb = 2,
      Eb = 1,
      Yb = {
        KE: 1,
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

    function Bb(bb, ab, Ub, Yb, Bb, eb, vb) {
      if (Bb.speed) return (0, Ab.b)(ab, Ub, Yb, Bb, eb, vb, bb), void(Bb.ticksToReachMaxIdleFriction = Tb);
      const Lb = Yb.isOnGround(),
        Pb = ab.bloxd.getSyncedClientOptions(ab.bloxd.getPlayerReader(Ub)),
        Xb = null === Pb ? ab.bloxd.getClientPredictedOption(Ub, "groundFrictionScale") : Pb.groundFrictionScale,
        jb = null === Pb ? ab.bloxd.getClientPredictedOption(Ub, "airFrictionScale") : Pb.airFrictionScale,
        Rb = Lb ? Xb : jb,
        kb = Math.max(Eb, Rb),
        yb = Bb.ticksToReachMaxIdleFriction / Tb,
        Zb = (0, Mb.t)(kb, Rb, yb);
      eb.friction = bb.standingFriction * ((null === Pb ? ab.bloxd.getClientPredictedOption(Ub, "airMomentumConservation") : Pb.airMomentumConservation) ? Zb : Rb), Bb.ticksToReachMaxIdleFriction > 0 && Bb.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);