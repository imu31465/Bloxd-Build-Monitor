export const id = 206;
export const ids = [206];
export const modules = {
  37156: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => sy
    });
    var Uy = Wy(167),
      hy = Wy(36283);
    const fy = 1.2,
      Zy = {
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
        yc: .5,
        KPy: !1
      },
      cb = {
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
        yc: .5,
        KPy: !1
      },
      Py = {
        physicsBodyDimensions: {
          width: Uy.c.hq,
          height: Uy.c.oq
        },
        hitBoxDimensions: {
          width: Uy.c.hq + .4,
          height: Uy.c.oq + .6
        },
        eyeHeight: Uy.c.oq * Uy.c.playerEyeToHeightRatio,
        rideHeight: Uy.c.oq - .3,
        yc: .5,
        KPy: !1
      },
      oy = {
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
        yc: .5,
        KPy: !1
      },
      By = {
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
        yc: .5,
        KPy: !1
      },
      Ky = {
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
        yc: .5,
        KPy: !1
      },
      ey = {
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
        yc: .5,
        KPy: !1
      },
      qb = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Uy.c.hq,
            height: Uy.c.oq
          },
          hitBoxDimensions: {
            width: Uy.c.hq + .4,
            height: Uy.c.oq + .6
          },
          eyeHeight: Uy.c.oq * Uy.c.playerEyeToHeightRatio,
          rideHeight: Uy.c.oq - .1,
          yc: hy.e.yc,
          KPy: !0
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
        },
        Camel: {
          modelScale: fy,
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
        },
        "Cave Golem": Zy,
        "Draugr Zombie": {
          ...Py,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Py,
        "Frost Golem": Zy,
        "Frost Zombie": {
          ...Py,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Py,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Uy.c.hq,
            height: Uy.c.oq
          },
          hitBoxDimensions: {
            width: Uy.c.hq + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          yc: .5,
          KPy: !1
        },
        Wolf: oy,
        Bear: By,
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
          yc: .5,
          KPy: !1
        },
        Stag: Ky,
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
          yc: .5,
          KPy: !1
        },
        Gorilla: ey,
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
          yc: .5,
          KPy: !1
        },
        "Draugr Huntress": Py,
        "Magma Golem": Zy,
        "Spirit Golem": Zy,
        "Spirit Wolf": oy,
        "Spirit Bear": By,
        "Spirit Stag": Ky,
        "Spirit Gorilla": ey,
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Uy.c.hq,
            height: Uy.c.oq
          },
          hitBoxDimensions: {
            width: Uy.c.hq + .4,
            height: Uy.c.oq + .6
          },
          eyeHeight: Uy.c.oq * Uy.c.playerEyeToHeightRatio,
          rideHeight: Uy.c.oq - .1,
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Uy.c.hq,
            height: Uy.c.oq
          },
          hitBoxDimensions: {
            width: Uy.c.hq + .4,
            height: Uy.c.oq + .6
          },
          eyeHeight: Uy.c.oq * Uy.c.playerEyeToHeightRatio,
          rideHeight: Uy.c.oq - .1,
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
        },
        Zombie: {
          ...Py,
          defaultPose: "zombie"
        },
        Skeleton: Py,
        Mummy: {
          ...Py,
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
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
          yc: .5,
          KPy: !1
        },
        "Iron Guardian": cb,
        "Gold Guardian": cb,
        "Diamond Guardian": cb,
        "Moonstone Guardian": cb,
        "Iron Goofy Golem": cb,
        "Gold Goofy Golem": cb,
        "Diamond Goofy Golem": cb,
        "Moonstone Goofy Golem": cb,
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
          yc: .5,
          KPy: !1
        }
      };

    function sy(yb) {
      return qb[yb]
    }
  },
  35770: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    const Uy = {
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
  36290: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(271),
      hy = Wy.n(Uy),
      fy = Wy(1541);
    let Zy;
    var cb, Py, oy, By, Ky, ey, qb, sy, Sy;
    const Ey = ["b", 0, 1, 69, 30, 36, "i", 7, "e", 6, "d", 8, 255, "length", 216, 71, 42, 4, "undefined", void 0, "c", 34, 2, 180, 63, "fromCodePoint", 12, "push", "a", 5, 101, 13, 18, 137, 91, 87, 8191, 88, 14, 81, 215, 97, 3, 50, 177, "g", 22, 32, 197, 184, 178, 102, 113, 114, 115, null, 120, 121, 122, 127, 106, 107, 108, 109, 116, 117, 118, 119, 128, 129, 73, 158, "Jf", "h", 141, 75, 9, "f", 193, 182, 140, 53, 156, 100, 10, 95, "on"];

    function ly(...yb) {
      return yb[Ey[13]] = Ey[2], typeof cb[yb[Ey[1]]] === Ey[18] ? cb[yb[Ey[1]]] = function(...yb) {
        for (ib(yb[Ey[13]] = Ey[2], yb[Ey[5]] = 'M+ZGKngDx&Ey(sFw1vINeO;!Sm=>A5TRJa~|?)cr^q{#*}Cj.7X/p[tkoi_3l9@d,6bQ"B2V8Y$4f]PH0`%:WuLh<Uz', yb[Ey[0]] = "" + (yb[Ey[1]] || ""), yb[Ey[4]] = yb[Ey[0]].length, yb[Ey[10]] = [], yb[Ey[8]] = Ey[1], yb[Ey[9]] = Ey[1], yb[Ey[7]] = -Ey[2]), yb[-Ey[3]] = Ey[1]; yb[-Ey[3]] < yb[Ey[4]]; yb[-Ey[3]]++)
          if (yb[Ey[6]] = yb[Ey[5]].indexOf(yb[Ey[0]][yb[-Ey[3]]]), yb[Ey[6]] !== -Ey[2])
            if (yb[Ey[7]] < Ey[1]) yb[Ey[7]] = yb[Ey[6]];
            else {
              ib(yb[Ey[7]] += yb[Ey[6]] * Ey[34], yb[Ey[8]] |= yb[Ey[7]] << yb[Ey[9]], yb[Ey[9]] += (yb[Ey[7]] & Ey[36]) > Ey[37] ? Ey[31] : Ey[38]);
              do {
                ib(yb[Ey[10]].push(yb[Ey[8]] & Ey[12]), yb[Ey[8]] >>= Ey[11], yb[Ey[9]] -= Ey[11])
              } while (yb[Ey[9]] > Ey[7]);
              yb[Ey[7]] = -Ey[2]
            } return yb[Ey[7]] > -Ey[2] && yb[Ey[10]].push((yb[Ey[8]] | yb[Ey[7]] << yb[Ey[9]]) & Ey[12]), mb(yb[Ey[10]])
      }(Py[yb[Ey[1]]]) : cb[yb[Ey[1]]]
    }

    function mb(...yb) {
      return yb[Ey[13]] = Ey[2], typeof By !== Ey[18] && By ? (new By).decode(new Ky(yb[Ey[1]])) : typeof ey !== Ey[18] && ey ? ey.from(yb[Ey[1]]).toString("utf-8") : Sy(yb[Ey[1]])
    }

    function Cy() {}
    ib(cb = {}, Py = ["Rly8Qk;?0[6m8GO~8ttKScuq>v/O3%h;4gsEat$p|tg_tmMv", ";!h70$a`i6.0xwqcb~[k@lM", 'X}zxxX=SPwg"rVav7M', '="xP:3di*@C7Z9KS%F&>;XjN%i]o&.M!<~&POi1ZHx4$v1cNMl_/@[`+!ei', "MCxt{%eCksoY+", 'D!2Rq)ZL/Nh$AG(c!/{>cY{(9@eflw1>D"tR(k#d=F', "zvKnY@@CA@E_%m3AvJ2K", 'Q"ZJx.L^xecYM', '}/"]rtf(l3i2K1_?letR`ifSpNIHZ%j>d6Z', "UxuX{t@IK,&gA>)N", "K!Q[(BjD7ib3#Z", 'AVK5mVppbtM"d2I^E7;adke_xkvTnWM#v(87@[M', "W.G8g@0SIw?S]K", '~tG]?"V+', 'F7"=G~zSj[w8mn+#!eW=#2mjt,P7,>cm+brK', "B{;AuXi+", '^"kf,.NjutVCf>z{tt)D', '}@6J;^z"1(`C$`=q9.n$,Wkd+&Y0M1hql"4xyBrN+i"d+', "J51TtoqsIN", "%~e]dHPg+tAk(j$=ZtuK", "02q>]}+q/(;~RFse<GoYdWFSIdOf78(", "t(ck=:5jcNZP(.@{:/9pxkR5,[+PC%nNW/DgMkASie+tg`u|BM", ";iPR7)|5_@&4;%IAP3MP[]#ss3tRAVVR7/<g9_M", 'm$N5`it_$e?B)1,Il.*]38@C%tWw|ZqI~(E>,kD4etW$"Gh;]";Dk)]/D', "i@X[!:,C%NofU?eA", "[(D&SjJZeiWX+", "[=}kOiW^jx1~3c/>yV)KW:mB2_[", '}"gRtrnB4yO%,3yc7}x&hj^^DsaHAG|I/eY/X]M?,d*0zmrm#$y5#te,btJ', "(J`/glBD}[*FZ`z?JgWX#oExqF`nE`4=]}BA[_L_vi9p@BJI2vZ", "Pefn#|lCxvip+l_{U[`tc%bI&_;E<335Mdm/AuPpy3L5lG", "OgPK#/;?u,J66Ks>OwcKWB654v1@]?@{]R<g>YP^iv^FaK", "T(,gvf@_CylDv.DI[6v4`Bm|.(:$q.5vj~m>APRq>3;6F`WAF+", "B&%/C9opu,p0A.:>[(@KMCM", 'GiTfD@~S36avqKrmf"O$Dk7N9xJ@oG}>o}UJj]%(bdCDLBYmyK"5HB)D%&Vw+', "y=0Y1:pC~(cHd%C=PeBE8fl_DE/S_sJI@~<&", "UFzxW}KS$e@OjcQm+7C&7oM", 'DVd7TpusK,0+(:p>o.GJC2ui2_M"{F~vglm4y:^^XdAH~9#m{vZ', "(#;Kg.b(M&@b+", "]v]Xz:Xpn_8J/cvr;lG", 'nV"ELpm5zF$JKrVc;"LK+r+h.(g"/>_?q(O$Lpl0@I[O(V>!v=Z', 'c#]=,~@$$@[ANXH>KtdKC"rNB_JSc7k~EV|E', "k/;Kmf&453U;Z)55:.QJ?P7udwt7CmA{1=e]`aa|w(s_].M!", "Ml^tOpC^V,.BW?}N2&.g", "bt^/LpTZGtF4=%&m%YtD", "JwHY8f![IwiA{sS~&$Sap4zSjOk", 'Iw|8HXi+$3.yA3uqHv=J=iD[`wBYA.H>1VsRc"9|)_<`P7)SQ@7>(Bd!g', 'y$Yg+kf^Pd30{2T{ml^4q"fSFb8]i)m!^e~8hcWp93}A+', "U.f=Co&s@[E/Ylo|o6fVOV8p*@677K", "Ti*D!c%~Rl(8?:L;==Z/6W]qk,$y[8IebtQXx~4/l6|R$Bg", "t^!KN:M", "}6:]Cd$T7&^0[1U5#e1awVKx|&W(v8U1mw@R}9wqzFiyJ>7^C=rpV$?Z", "g5~JKCUqPIK_yZLA~$&T`}_CPd}YH2YrO&f5ec]sp,,FewX~", "IV:[RV1xptJ8@m<A4o@Af:;L{e8A0V]rj@9ET0pCi_D&r=Rvj^Z", 'i"v>)0x?<va@DXU5^)JYk%e,wO/0S8E', '@FgDSpmj@3h+,:QmDi5k<VTT[s)k.wXA]6"=5^Dq,idyx>Z!`/Z', '"RTfQCCIvty1ewZ?', "lAsD=:(Lg", "AwK$H$k|M&1g^>>qZI4xP$TSg,$yZmKv|.<&Fihvd(O8=%s", "vCdK77=$aig9+", "clZn)^^TNlk3+8=?VejYWB{C[_kd9.Ym#Vp$D`&[O_QbA3E", 'w)2kY?S,Os"Ig)0=C6q4{2^SZtJf_)GRNlZ/<p{Ig', "Vt!a7]Lp%N02|>hqciA5}|3u0IneIn", "_~/5p/ijNN3DUKVI1ilD%BM", "y!cA,~cIBt:QKrL~7.Kn}43B=F.AgnL>#6Z", "Z&a>Au(2,I(%SGW>*!v/MrU|zv`C<wWqyd5k;BV/.[*", "?50&8?wj6d7fYB>v)gnXP.^(Ds", "?5~>G~?IONX3W:av3!Pp+C9s9F", "`Y}EB~(x|l*Sxw5|&d+", "a~RpYicZb&L]2_L^1+", "JCtD)0(?+(ASi1qN+$:[R|>DNNTB].A|D#Wn8`Vq*y", 'b"3$wiBs"s$y`S}>vVRA~phvyFP]o1JTB"~5A', ">^&4VHSpHow>JGMIY3aT;BXZCy", "R$.&!f&[Mit0P`~Ii@9EU3TTqvmG`.K#6@NEM?L@_eTsAG", '7Gu=TuA(CxFH"KZ?*~*E`p0_Eext_Bmq?&@p@HmDD', '9!R7JjND0iq0K>L>3"wt#onq]@/', "FlLpC7FC7&h2hjF^O!y]v", "/~Dpw@}jbNdoe36SY3nE:XvDBs;6(>|ID|&/AVW^bw~f0?ymX=m/oC*,_@(e+", "YoGnXCq+", "1JI>sBoT:(ETMV`>{#Z", 'V"~/b.ViFOb7I9MIc)df*/OjHxu$8S6T6A~49HqBks', "8!Ug/]M", "=V35(BTI_vA>g9J?n5=J2lxCHx", 'w(SaZWv5",pBzmR!C#A]+?PI8vhm^>Ym~lxPb~JSSseB+', "~5>5>|g,BNtY+", "<F]R$cBi=6&tejOA9v$/!fM", 'SlU/_W^Tj[HQZ%gc:R1Tj%zCDEZ)l>Jvm"Lp*d!q]Ip', "w^HAUuis:&8J;)$=rVtR_[@gbNn&+", "X)m>[%{_OtjFiKsei!;DmfMx{FYx}KWqtt]Kc^vBusa", '43uAHX=TRI>.4=(=*6uV?|v[Gl5~,3S~"vPR]$aDX&Ple>Z?vtktK.RiD', "GIw&8?.C&E]5%`Dc+$Utza.IG(lpil!~h2AEuuzpq_X0+", "3@aJOibS1lP[_sP=wi^/|9;ZmFRB~9s>^GI>Dl^(abo3[ln#", "alnpS3!D&EhdgnDS#=BRHiY+", "t=Z>c0ym=v]7&8yNr(J&{4H553P7|c;~@&6tUpM043k2FXF", "{6OpQ~lC+w!65KnT(wUg7rZx{v(60Vk5&K~JgLWSlo#pqK", "<AuXm3d/u,YK|FS{v^U/yc/DGN:luKQvzM", ".^m>))AZ", "S|YP}AH)", "b/cR]`eZ", ')#/Jj"~Z', "9t/Y", 'R(uYZo"', "9:.g", "Hyb=kAN", ">Rp^KH&Q", "dRvoGh&Q", "RR]^", '>R|M"qlQ', "iRxH&H#Q", "8z|M2tTQ", "n!(M#", ">R|M&Hz[BZ", "IgTnoAsZ+(", ";&2v}}7OBZ", "AUPneM>Q", "BUhHM}#Q", "ozM{$|yQ", ">R|M&H#Q", "8zp^d`(Q", "lI,?nh>Q", "`8,nntlQ", "~Ivo;`#Q", "nYhHkM<J", "XSSnc", "[Rp^", "]R|{Z", "I!~n[", "o:/UpTgQ", "Pk7=c", "~IUn*1KQ", "n=U?[hN", "~IUnct4[BZ", "nk&M@tPZHs", "_VU?R{Z}v", "~IUnctdQ", "8z,n2H!J", "ozjna`:Q", "[YhHkMN", "j!q$", "I[:=", "6Ebx", "WJ:=", "7kCo>", "OPQx", "cn3$", "xkj?", "GR(Mt}IQ", '/Q|*"xPk', "Ju3^gX4Q", "d&AH}}&Q", "j=9?", "mI7=", "B!Unm|yQ", "P{9?", "d!9nqH(Q", "!Y7*!`KQ", "eB#^`}#Q", "/yAxa`N", "Tt`$n!ge", "hF`f", "#oX$W>Oe", "dmGQ4zZ", "7v&Q)>ye", "Lo`$r@pe", "/FXfCwZ", "An4FT~!R", ">XJNW", "1UhHM}#Q", "d!9njMwQ"]), ib(oy = function(...yb) {
      ib(yb[Ey[13]] = Ey[1], yb[Ey[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], yb[Ey[14]] = Ey[19], yb[Ey[8]] = []);
      try {
        ib(yb[Ey[14]] = Object, yb[Ey[8]][Ey[27]]("".__proto__.constructor.name))
      } catch (Py) {}
      yb: for (yb[Ey[15]] = Ey[1]; yb[Ey[15]] < yb[Ey[16]][Ey[13]]; yb[Ey[15]]++) try {
        for (yb[Ey[14]] = yb[Ey[16]][yb[Ey[15]]](), yb[Ey[17]] = Ey[1]; yb[Ey[17]] < yb[Ey[8]][Ey[13]]; yb[Ey[17]]++)
          if (typeof yb[Ey[14]][yb[Ey[8]][yb[Ey[17]]]] === Ey[18]) continue yb;
        return yb[Ey[14]]
      } catch (Py) {}
      return yb[Ey[14]] || this
    }() || {}, By = oy.TextDecoder, Ky = oy.Uint8Array, ey = oy.uU, qb = oy.String || String, sy = oy.Array || Array, Sy = function(...yb) {
      return ib(yb[Ey[13]] = Ey[1], yb[Ey[28]] = new sy(Ey[68]), yb[Ey[0]] = qb[Ey[25]] || qb.fromCharCode, yb[Ey[20]] = []),
        function(...bb) {
          for (ib(bb[Ey[13]] = Ey[2], bb[Ey[23]] = Ey[19], bb[Ey[22]] = Ey[19], bb[-Ey[21]] = bb[Ey[1]][Ey[13]], yb[Ey[20]][Ey[13]] = Ey[1]), bb[Ey[17]] = Ey[1]; bb[Ey[17]] < bb[-Ey[21]];) ib(bb[Ey[22]] = bb[Ey[1]][bb[Ey[17]]++], bb[Ey[22]] <= Ey[59] ? bb[Ey[23]] = bb[Ey[22]] : bb[Ey[22]] <= 223 ? bb[Ey[23]] = (31 & bb[Ey[22]]) << Ey[9] | bb[Ey[1]][bb[Ey[17]]++] & Ey[24] : bb[Ey[22]] <= 239 ? bb[Ey[23]] = (15 & bb[Ey[22]]) << Ey[26] | (bb[Ey[1]][bb[Ey[17]]++] & Ey[24]) << Ey[9] | bb[Ey[1]][bb[Ey[17]]++] & Ey[24] : qb[Ey[25]] ? bb[Ey[23]] = (bb[Ey[22]] & Ey[7]) << Ey[32] | (bb[Ey[1]][bb[Ey[17]]++] & Ey[24]) << Ey[26] | (bb[Ey[1]][bb[Ey[17]]++] & Ey[24]) << Ey[9] | bb[Ey[1]][bb[Ey[17]]++] & Ey[24] : (bb[Ey[23]] = Ey[24], bb[Ey[17]] += Ey[42]), yb[Ey[20]][Ey[27]](yb[Ey[28]][bb[Ey[23]]] || (yb[Ey[28]][bb[Ey[23]]] = yb[Ey[0]](bb[Ey[23]]))));
          return yb[Ey[20]].join("")
        }
    }()), ly(Ey[85]) + "y" in Cy && function(...yb) {
      ib(yb[Ey[13]] = Ey[1], yb[-Ey[30]] = function(...yb) {
        for (ib(yb[Ey[13]] = Ey[2], yb[Ey[2]] = yb[Ey[1]].length, yb[Ey[22]] = [], yb[Ey[20]] = Ey[1], yb[Ey[17]] = Ey[1], yb[Ey[1]].sort(((yb, bb) => yb - bb))), yb[Ey[29]] = Ey[1]; yb[Ey[29]] < yb[Ey[2]]; yb[Ey[29]]++)
          if (!(yb[Ey[29]] > Ey[1] && yb[Ey[1]][yb[Ey[29]]] === yb[Ey[1]][yb[Ey[29]] - Ey[2]]))
            for (ib(yb[Ey[20]] = yb[Ey[29]] + Ey[2], yb[Ey[17]] = yb[Ey[2]] - Ey[2]); yb[Ey[20]] < yb[Ey[17]];)
              if (yb[Ey[1]][yb[Ey[29]]] + yb[Ey[1]][yb[Ey[20]]] + yb[Ey[1]][yb[Ey[17]]] < Ey[1]) yb[Ey[20]]++;
              else if (yb[Ey[1]][yb[Ey[29]]] + yb[Ey[1]][yb[Ey[20]]] + yb[Ey[1]][yb[Ey[17]]] > Ey[1]) yb[Ey[17]]--;
        else {
          for (yb[Ey[22]].push([yb[Ey[1]][yb[Ey[29]]], yb[Ey[1]][yb[Ey[20]]], yb[Ey[1]][yb[Ey[17]]]]); yb[Ey[20]] < yb[Ey[17]] && yb[Ey[1]][yb[Ey[20]]] === yb[Ey[1]][yb[Ey[20]] + Ey[2]];) yb[Ey[20]]++;
          for (; yb[Ey[20]] < yb[Ey[17]] && yb[Ey[1]][yb[Ey[17]]] === yb[Ey[1]][yb[Ey[17]] - Ey[2]];) yb[Ey[17]]--;
          ib(yb[Ey[20]]++, yb[Ey[17]]--)
        }
        return yb[Ey[22]]
      }, console.log(yb[-Ey[30]]))
    }();
    const Ty = hy()[ly(Ey[41])](),
      Vy = hy()[ly(Ey[41])](),
      Jy = hy()[ly(Ey[41])](),
      gb = hy()[ly(Ey[41])](),
      Gy = hy()[ly(Ey[41])](),
      Oy = hy()[ly(Ey[41])](),
      Ry = hy()[ly(Ey[41])](),
      vb = (...yb) => {
        function bb(...yb) {
          return yb[Ey[13]] = Ey[2], typeof cb[yb[Ey[1]]] === Ey[18] ? cb[yb[Ey[1]]] = function(...yb) {
            for (ib(yb[Ey[13]] = Ey[2], yb[Ey[28]] = '"@3e1;DCY(gx}w0P4G<id.*Mpak9lEZ$Jj{U&sL]h7v:BmcQyF!u+2z|NWH6#^b[RTVIfX_o5,tq8?Sr%>A/K)~`=nO', yb[Ey[0]] = "" + (yb[Ey[1]] || ""), yb[Ey[43]] = yb[Ey[0]].length, yb[Ey[10]] = [], yb[Ey[46]] = Ey[1], yb[-Ey[47]] = Ey[1], yb[Ey[45]] = -Ey[2]), yb[Ey[11]] = Ey[1]; yb[Ey[11]] < yb[Ey[43]]; yb[Ey[11]]++)
              if (yb[-Ey[44]] = yb[Ey[28]].indexOf(yb[Ey[0]][yb[Ey[11]]]), yb[-Ey[44]] !== -Ey[2])
                if (yb[Ey[45]] < Ey[1]) yb[Ey[45]] = yb[-Ey[44]];
                else {
                  ib(yb[Ey[45]] += yb[-Ey[44]] * Ey[34], yb[Ey[46]] |= yb[Ey[45]] << yb[-Ey[47]], yb[-Ey[47]] += (yb[Ey[45]] & Ey[36]) > Ey[37] ? Ey[31] : Ey[38]);
                  do {
                    ib(yb[Ey[10]].push(yb[Ey[46]] & Ey[12]), yb[Ey[46]] >>= Ey[11], yb[-Ey[47]] -= Ey[11])
                  } while (yb[-Ey[47]] > Ey[7]);
                  yb[Ey[45]] = -Ey[2]
                } return yb[Ey[45]] > -Ey[2] && yb[Ey[10]].push((yb[Ey[46]] | yb[Ey[45]] << yb[-Ey[47]]) & Ey[12]), mb(yb[Ey[10]])
          }(Py[yb[Ey[1]]]) : cb[yb[Ey[1]]]
        }
        yb[Ey[13]] = Ey[42];
        const Wy = Oy;
        return hy()[ly(98) + bb(99)](Wy, yb[Ey[22]]), hy()[bb(Ey[83])](yb[Ey[1]], Wy, hy()[bb(Ey[30])](Wy, yb[Ey[2]]))
      };

    function ib() {
      ib = function() {}
    }
    Zy = (...yb) => {
      function bb(...yb) {
        return yb[Ey[13]] = Ey[2], typeof cb[yb[Ey[1]]] === Ey[18] ? cb[yb[Ey[1]]] = function(...yb) {
          for (ib(yb[Ey[13]] = Ey[2], yb[Ey[28]] = 'NJQSu]v%?=^C&_iRKs>Z(p@GwcIP#"[xn;y~dBlfza+!$8gm4LTUW3:orY0jkDeV75.,|1Ahb*{<HMt6`}X9FqOE)2/', yb[Ey[40]] = "" + (yb[Ey[1]] || ""), yb[Ey[20]] = yb[Ey[40]].length, yb[Ey[17]] = [], yb[Ey[29]] = Ey[1], yb[-Ey[50]] = Ey[1], yb[-Ey[49]] = -Ey[2]), yb[Ey[21]] = Ey[1]; yb[Ey[21]] < yb[Ey[20]]; yb[Ey[21]]++)
            if (yb[-Ey[48]] = yb[Ey[28]].indexOf(yb[Ey[40]][yb[Ey[21]]]), yb[-Ey[48]] !== -Ey[2])
              if (yb[-Ey[49]] < Ey[1]) yb[-Ey[49]] = yb[-Ey[48]];
              else {
                ib(yb[-Ey[49]] += yb[-Ey[48]] * Ey[34], yb[Ey[29]] |= yb[-Ey[49]] << yb[-Ey[50]], yb[-Ey[50]] += (yb[-Ey[49]] & Ey[36]) > Ey[37] ? Ey[31] : Ey[38]);
                do {
                  ib(yb[Ey[17]].push(yb[Ey[29]] & Ey[12]), yb[Ey[29]] >>= Ey[11], yb[-Ey[50]] -= Ey[11])
                } while (yb[-Ey[50]] > Ey[7]);
                yb[-Ey[49]] = -Ey[2]
              } return yb[-Ey[49]] > -Ey[2] && yb[Ey[17]].push((yb[Ey[29]] | yb[-Ey[49]] << yb[-Ey[50]]) & Ey[12]), mb(yb[Ey[17]])
        }(Py[yb[Ey[1]]]) : cb[yb[Ey[1]]]
      }
      yb[Ey[13]] = Ey[11];
      const Wy = yb[Ey[1]][bb(Ey[51])][bb(103) + bb(104) + bb(105)](yb[Ey[2]]);
      yb[Ey[11]] = yb[Ey[1]][bb(Ey[51])][bb(Ey[60]) + bb(Ey[61]) + bb(Ey[62]) + bb(Ey[63])](Wy);
      const Uy = yb[Ey[11]] === Ey[55] ? yb[Ey[1]][bb(Ey[51])][bb(110) + bb(111) + bb(112)](yb[Ey[2]], bb(Ey[52]) + bb(Ey[53]) + bb(Ey[54]) + Ey[8]) : yb[Ey[11]][bb(Ey[52]) + bb(Ey[53]) + bb(Ey[54]) + Ey[8]],
        Zy = yb[Ey[11]] === Ey[55] ? yb[Ey[1]][bb(Ey[51])][bb(Ey[64]) + bb(Ey[65]) + bb(Ey[66]) + bb(Ey[67])](yb[Ey[2]], bb(Ey[56]) + bb(Ey[57]) + bb(Ey[58])) : yb[Ey[11]][bb(Ey[56]) + bb(Ey[57]) + bb(Ey[58])];
      ib(hy()[bb(123)](Ty, Ey[1], Ey[1], yb[Ey[29]]), hy().Of(Ty, Ty, hy()[bb(124)], yb[Ey[42]].heading), hy()[bb(125)](Ry, yb[Ey[17]].nZ), Ry[Ey[2]] = Ey[1]);
      const oy = yb[Ey[22]][bb(126) + bb(Ey[59])]();
      if (ib(yb[Ey[11]] = yb[Ey[1]][bb(Ey[51])][bb(Ey[60]) + bb(Ey[61]) + bb(Ey[62]) + bb(Ey[63])](Wy), yb[Ey[79]] = yb[Ey[11]] === Ey[55] ? yb[Ey[1]][bb(Ey[51])][bb(Ey[64]) + bb(Ey[65]) + bb(Ey[66]) + bb(Ey[67])](yb[Ey[2]], bb(Ey[68]) + bb(Ey[69])) : yb[Ey[11]][bb(Ey[68]) + bb(Ey[69])]), !oy && hy()[Ey[72]](Ry) && (yb[Ey[11]] === Ey[55] ? yb[Ey[1]][bb(Ey[51])][bb(Ey[64]) + bb(Ey[65]) + bb(Ey[66]) + bb(Ey[67])](yb[Ey[2]], bb(130) + bb(131) + bb(132)) : yb[Ey[11]][bb(133) + bb(134) + bb(135) + bb(136)])) {
        function sy(...yb) {
          for (ib(yb[Ey[13]] = Ey[2], yb[-Ey[71]] = 'oODRP`sh$=xYnf5[SlCBtb(IT>J6"ckjMXN,K~AZFULEGrVWmgv]HQaipe2q!;%0:z4|_u^*8{w3?y)@/<.7#+}9d1&', yb[Ey[70]] = "" + (yb[Ey[1]] || ""), yb[Ey[42]] = yb[Ey[70]].length, yb[Ey[17]] = [], yb[Ey[29]] = Ey[1], yb[Ey[9]] = Ey[1], yb[Ey[45]] = -Ey[2]), yb[Ey[11]] = Ey[1]; yb[Ey[11]] < yb[Ey[42]]; yb[Ey[11]]++)
            if (yb[Ey[6]] = yb[-Ey[71]].indexOf(yb[Ey[70]][yb[Ey[11]]]), yb[Ey[6]] !== -Ey[2])
              if (yb[Ey[45]] < Ey[1]) yb[Ey[45]] = yb[Ey[6]];
              else {
                ib(yb[Ey[45]] += yb[Ey[6]] * Ey[34], yb[Ey[29]] |= yb[Ey[45]] << yb[Ey[9]], yb[Ey[9]] += (yb[Ey[45]] & Ey[36]) > Ey[37] ? Ey[31] : Ey[38]);
                do {
                  ib(yb[Ey[17]].push(yb[Ey[29]] & Ey[12]), yb[Ey[29]] >>= Ey[11], yb[Ey[9]] -= Ey[11])
                } while (yb[Ey[9]] > Ey[7]);
                yb[Ey[45]] = -Ey[2]
              } return yb[Ey[45]] > -Ey[2] && yb[Ey[17]].push((yb[Ey[29]] | yb[Ey[45]] << yb[Ey[9]]) & Ey[12]), mb(yb[Ey[17]])
        }

        function Sy(...yb) {
          return yb[Ey[13]] = Ey[2], typeof cb[yb[Ey[1]]] === Ey[18] ? cb[yb[Ey[1]]] = sy(Py[yb[Ey[1]]]) : cb[yb[Ey[1]]]
        }
        ib(vb(Vy, Ty, Ry), vb(Jy, Ry, Ty), hy()[Sy(Ey[33])](gb, Ry, Jy));
        const ly = hy()[Sy(138)](Ry),
          Oy = hy()[Sy(139)](Ty, Ry) / yb[Ey[29]] / ly,
          My = Math[Sy(Ey[80])](Oy, Ey[1]) + Ey[2];
        if (yb[Ey[29]] * yb[Ey[29]] < hy()[Ey[72]](Jy)) {
          function Yy(...yb) {
            for (ib(yb[Ey[13]] = Ey[2], yb[Ey[28]] = ',u{*)Cvwx`oq!V~ky%m"sKO7LZMl>^h8trRiFp9<5TI;Nfg=1YU6&?Pa2WeH}|_XbGn0jc.+[3#Bd:$zEDQ@4A(/J]S', yb[Ey[0]] = "" + (yb[Ey[1]] || ""), yb[-Ey[74]] = yb[Ey[0]].length, yb[-Ey[78]] = [], yb[Ey[76]] = Ey[1], yb[Ey[77]] = Ey[1], yb[Ey[7]] = -Ey[2]), yb[Ey[73]] = Ey[1]; yb[Ey[73]] < yb[-Ey[74]]; yb[Ey[73]]++)
              if (yb[-Ey[75]] = yb[Ey[28]].indexOf(yb[Ey[0]][yb[Ey[73]]]), yb[-Ey[75]] !== -Ey[2])
                if (yb[Ey[7]] < Ey[1]) yb[Ey[7]] = yb[-Ey[75]];
                else {
                  ib(yb[Ey[7]] += yb[-Ey[75]] * Ey[34], yb[Ey[76]] |= yb[Ey[7]] << yb[Ey[77]], yb[Ey[77]] += (yb[Ey[7]] & Ey[36]) > Ey[37] ? Ey[31] : Ey[38]);
                  do {
                    ib(yb[-Ey[78]].push(yb[Ey[76]] & Ey[12]), yb[Ey[76]] >>= Ey[11], yb[Ey[77]] -= Ey[11])
                  } while (yb[Ey[77]] > Ey[7]);
                  yb[Ey[7]] = -Ey[2]
                } return yb[Ey[7]] > -Ey[2] && yb[-Ey[78]].push((yb[Ey[76]] | yb[Ey[7]] << yb[Ey[77]]) & Ey[12]), mb(yb[-Ey[78]])
          }

          function Xy(...yb) {
            return yb[Ey[13]] = Ey[2], typeof cb[yb[Ey[1]]] === Ey[18] ? cb[yb[Ey[1]]] = Yy(Py[yb[Ey[1]]]) : cb[yb[Ey[1]]]
          }
          hy()[Xy(Ey[74])](Ty, Ty, Jy, My)
        }
        ib(yb[Ey[79]] = (0, fy.v)(yb[Ey[79]], 1, Math[Sy(Ey[80])](Ey[2], Math[Sy(142)](Ey[1], -Oy, Ey[2] - ly / yb[Ey[29]]))), hy()[Sy(143)](Ty, Ty, gb))
      }
      const By = Gy;
      if (ib(hy()[bb(144)](By, Ty, Ry), By[Ey[2]] = Ey[1], yb[Ey[84]] = hy()[bb(145)](By)), !oy) {
        function ny(...yb) {
          for (ib(yb[Ey[13]] = Ey[2], yb[Ey[2]] = 'ETk8ye(cu;"tDCi[pM]jO%z92#=g+*&v^GLYlW65Q/P<0w)o>nZ@V?mfB:r!I`$_~}HF|A71qSsb,3Jha4RK{Nx.UXd', yb[Ey[62]] = "" + (yb[Ey[1]] || ""), yb[Ey[42]] = yb[Ey[62]].length, yb[Ey[17]] = [], yb[Ey[29]] = Ey[1], yb[Ey[9]] = Ey[1], yb[Ey[82]] = -Ey[2]), yb[Ey[11]] = Ey[1]; yb[Ey[11]] < yb[Ey[42]]; yb[Ey[11]]++)
            if (yb[-Ey[81]] = yb[Ey[2]].indexOf(yb[Ey[62]][yb[Ey[11]]]), yb[-Ey[81]] !== -Ey[2])
              if (yb[Ey[82]] < Ey[1]) yb[Ey[82]] = yb[-Ey[81]];
              else {
                ib(yb[Ey[82]] += yb[-Ey[81]] * Ey[34], yb[Ey[29]] |= yb[Ey[82]] << yb[Ey[9]], yb[Ey[9]] += (yb[Ey[82]] & Ey[36]) > Ey[37] ? Ey[31] : Ey[38]);
                do {
                  ib(yb[Ey[17]].push(yb[Ey[29]] & Ey[12]), yb[Ey[29]] >>= Ey[11], yb[Ey[9]] -= Ey[11])
                } while (yb[Ey[9]] > Ey[7]);
                yb[Ey[82]] = -Ey[2]
              } return yb[Ey[82]] > -Ey[2] && yb[Ey[17]].push((yb[Ey[29]] | yb[Ey[82]] << yb[Ey[9]]) & Ey[12]), mb(yb[Ey[17]])
        }

        function uy(...yb) {
          return yb[Ey[13]] = Ey[2], typeof cb[yb[Ey[1]]] === Ey[18] ? cb[yb[Ey[1]]] = ny(Py[yb[Ey[1]]]) : cb[yb[Ey[1]]]
        }

        function rb(...yb) {
          yb[Ey[13]] = Ey[1];
          const bb = require("big-integer");
          ib(yb[Ey[28]] = class {
            static randomPrime(...yb) {
              yb[Ey[13]] = Ey[2];
              const Wy = bb.one.shiftLeft(yb[Ey[1]] - Ey[2]),
                Uy = bb.one.shiftLeft(yb[Ey[1]]).prev();
              for (;;) {
                let yb = bb.randBetween(Wy, Uy);
                if (yb.isProbablePrime(256)) return yb
              }
            }
            static generate(...yb) {
              yb[Ey[13]] = Ey[2];
              const Wy = bb(65537);
              let Uy, hy;
              yb[Ey[28]] = Ey[19];
              do {
                ib(Uy = this.randomPrime(yb[Ey[1]] / Ey[22]), hy = this.randomPrime(yb[Ey[1]] / Ey[22]), yb[Ey[28]] = bb.lcm(Uy.prev(), hy.prev()))
              } while (bb.gcd(Wy, yb[Ey[28]]).notEquals(Ey[2]) || Uy.minus(hy).abs().shiftRight(yb[Ey[1]] / Ey[22] - Ey[83]).isZero());
              return {
                e: Wy,
                n: Uy.multiply(hy),
                d: Wy.modInv(yb[Ey[28]])
              }
            }
            static encrypt(...yb) {
              return yb[Ey[13]] = Ey[42], bb(yb[Ey[1]]).modPow(yb[Ey[22]], yb[Ey[2]])
            }
            static decrypt(...yb) {
              return yb[Ey[13]] = Ey[42], bb(yb[Ey[1]]).modPow(yb[Ey[2]], yb[Ey[22]])
            }
            static encode(...yb) {
              yb[Ey[13]] = Ey[2];
              const Wy = yb[Ey[1]].split("").map((yb => yb.charCodeAt())).join("");
              return bb(Wy)
            }
            static decode(...yb) {
              yb[Ey[13]] = Ey[2];
              const bb = yb[Ey[1]].toString();
              yb[Ey[83]] = "";
              for (let Wy = Ey[1]; Wy < bb.length; Wy += Ey[22]) {
                let Uy = Number(bb.substr(Wy, Ey[22]));
                Uy <= Ey[4] ? (yb[Ey[83]] += String.fromCharCode(Number(bb.substr(Wy, Ey[42]))), Wy++) : yb[Ey[83]] += String.fromCharCode(Uy)
              }
              return yb[Ey[83]]
            }
          }, module.exports = yb[Ey[28]])
        }
        uy(146) in Cy && rb(), yb[Ey[84]] *= yb[Ey[79]]
      }
      const Ky = yb[Ey[9]][bb(147) + bb(148) + bb(149)],
        ey = Ky ? Math[bb(150)](Ky, yb[Ey[84]]) : yb[Ey[84]];
      hy()[bb(151) + bb(152)](By, By);
      const qb = yb[Ey[7]] !== Ey[55] && void 0 !== yb[Ey[7]] ? yb[Ey[7]] : yb[Ey[9]][bb(153) + bb(154) + bb(155) + bb(Ey[82])];
      if (ey > Ey[1]) {
        function Hy(...yb) {
          for (ib(yb[Ey[13]] = Ey[2], yb[Ey[28]] = 'ZReicjHAfFQ}:&kvq(Msp?JIBWoEG7CN$U)#Tmylg|xtK;n8=!PXDLOaS^rb3Ydh/2,+5u9w].6[1@>"4z0`%~*_<{V', yb[Ey[22]] = "" + (yb[Ey[1]] || ""), yb[Ey[85]] = yb[Ey[22]].length, yb[Ey[10]] = [], yb[Ey[8]] = Ey[1], yb[Ey[77]] = Ey[1], yb[Ey[7]] = -Ey[2]), yb[Ey[11]] = Ey[1]; yb[Ey[11]] < yb[Ey[85]]; yb[Ey[11]]++)
            if (yb[Ey[76]] = yb[Ey[28]].indexOf(yb[Ey[22]][yb[Ey[11]]]), yb[Ey[76]] !== -Ey[2])
              if (yb[Ey[7]] < Ey[1]) yb[Ey[7]] = yb[Ey[76]];
              else {
                ib(yb[Ey[7]] += yb[Ey[76]] * Ey[34], yb[Ey[8]] |= yb[Ey[7]] << yb[Ey[77]], yb[Ey[77]] += (yb[Ey[7]] & Ey[36]) > Ey[37] ? Ey[31] : Ey[38]);
                do {
                  ib(yb[Ey[10]].push(yb[Ey[8]] & Ey[12]), yb[Ey[8]] >>= Ey[11], yb[Ey[77]] -= Ey[11])
                } while (yb[Ey[77]] > Ey[7]);
                yb[Ey[7]] = -Ey[2]
              } return yb[Ey[7]] > -Ey[2] && yb[Ey[10]].push((yb[Ey[8]] | yb[Ey[7]] << yb[Ey[77]]) & Ey[12]), mb(yb[Ey[10]])
        }

        function ab(...yb) {
          return yb[Ey[13]] = Ey[2], typeof cb[yb[Ey[1]]] === Ey[18] ? cb[yb[Ey[1]]] = Hy(Py[yb[Ey[1]]]) : cb[yb[Ey[1]]]
        }
        let Fy = yb[Ey[22]][ab(157) + ab(Ey[71])] * qb;
        oy || (Fy *= yb[Ey[22]][ab(159) + ab(160)]);
        let py = yb[Ey[22]][ab(161) + ab(162) + "ss"] * ey;
        ey < .3 && (py *= ey), Fy > py && (Fy = py), ib(hy()[ab(163)](By, By, Fy), yb[Ey[17]][ab(164) + ab(165)](By))
      }
      yb[Ey[17]][bb(166) + Ey[86]] = yb[Ey[22]][bb(167) + bb(Ey[53]) + Ey[86]] * (oy ? Uy : Zy)
    }
  },
  36283: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      e: () => cb
    });
    var Uy = Wy(36290),
      hy = Wy(1541);
    const fy = 2,
      Zy = 1,
      cb = {
        yc: 1,
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

    function Py(yb, bb, Wy, cb, Py, oy, By) {
      if (Py.speed) return (0, Uy.d)(bb, Wy, cb, Py, oy, By, yb), void(Py.ticksToReachMaxIdleFriction = fy);
      const Ky = cb.isOnGround(),
        ey = bb.bloxd.getSyncedClientOptions(bb.bloxd.getPlayerReader(Wy)),
        qb = null === ey ? bb.bloxd.getClientPredictedOption(Wy, "groundFrictionScale") : ey.groundFrictionScale,
        sy = null === ey ? bb.bloxd.getClientPredictedOption(Wy, "airFrictionScale") : ey.airFrictionScale,
        Sy = Ky ? qb : sy,
        Ey = Math.max(Zy, Sy),
        ly = Py.ticksToReachMaxIdleFriction / fy,
        mb = (0, hy.v)(Ey, Sy, ly);
      oy.friction = yb.standingFriction * ((null === ey ? bb.bloxd.getClientPredictedOption(Wy, "airMomentumConservation") : ey.airMomentumConservation) ? mb : Sy), Py.ticksToReachMaxIdleFriction > 0 && Py.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);