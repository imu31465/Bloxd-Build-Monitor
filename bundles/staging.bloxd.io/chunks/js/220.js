export const id = 220;
export const ids = [220];
export const modules = {
  38613: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Ld
    });
    var pd = kd(193),
      Nd = kd(37856);
    const Wd = 1.2,
      Pd = {
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
        vP: .5,
        TJd: !1
      },
      Zd = {
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
        vP: .5,
        TJd: !1
      },
      gd = {
        physicsBodyDimensions: {
          width: pd.g.yR,
          height: pd.g.uR
        },
        hitBoxDimensions: {
          width: pd.g.yR + .4,
          height: pd.g.uR + .6
        },
        eyeHeight: pd.g.uR * pd.g.playerEyeToHeightRatio,
        rideHeight: pd.g.uR - .3,
        vP: .5,
        TJd: !1
      },
      Cd = {
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
        vP: .5,
        TJd: !1
      },
      Kd = {
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
        vP: .5,
        TJd: !1
      },
      od = {
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
        vP: .5,
        TJd: !1
      },
      ld = {
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
        vP: .5,
        TJd: !1
      },
      Qd = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: pd.g.yR,
            height: pd.g.uR
          },
          hitBoxDimensions: {
            width: pd.g.yR + .4,
            height: pd.g.uR + .6
          },
          eyeHeight: pd.g.uR * pd.g.playerEyeToHeightRatio,
          rideHeight: pd.g.uR - .1,
          vP: Nd.h.vP,
          TJd: !0
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
        },
        Camel: {
          modelScale: Wd,
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
        },
        "Cave Golem": Pd,
        "Draugr Zombie": {
          ...gd,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": gd,
        "Frost Golem": Pd,
        "Frost Zombie": {
          ...gd,
          defaultPose: "zombie"
        },
        "Frost Skeleton": gd,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: pd.g.yR,
            height: pd.g.uR
          },
          hitBoxDimensions: {
            width: pd.g.yR + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          vP: .5,
          TJd: !1
        },
        Wolf: Cd,
        Bear: Kd,
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
          vP: .5,
          TJd: !1
        },
        Stag: od,
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
          vP: .5,
          TJd: !1
        },
        Gorilla: ld,
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
          vP: .5,
          TJd: !1
        },
        "Draugr Huntress": gd,
        "Magma Golem": Pd,
        "Spirit Golem": Pd,
        "Spirit Wolf": Cd,
        "Spirit Bear": Kd,
        "Spirit Stag": od,
        "Spirit Gorilla": ld,
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: pd.g.yR,
            height: pd.g.uR
          },
          hitBoxDimensions: {
            width: pd.g.yR + .4,
            height: pd.g.uR + .6
          },
          eyeHeight: pd.g.uR * pd.g.playerEyeToHeightRatio,
          rideHeight: pd.g.uR - .1,
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: pd.g.yR,
            height: pd.g.uR
          },
          hitBoxDimensions: {
            width: pd.g.yR + .4,
            height: pd.g.uR + .6
          },
          eyeHeight: pd.g.uR * pd.g.playerEyeToHeightRatio,
          rideHeight: pd.g.uR - .1,
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
        },
        Zombie: {
          ...gd,
          defaultPose: "zombie"
        },
        Skeleton: gd,
        Mummy: {
          ...gd,
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
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
          vP: .5,
          TJd: !1
        },
        "Iron Guardian": Zd,
        "Gold Guardian": Zd,
        "Diamond Guardian": Zd,
        "Moonstone Guardian": Zd,
        "Iron Goofy Golem": Zd,
        "Gold Goofy Golem": Zd,
        "Diamond Goofy Golem": Zd,
        "Moonstone Goofy Golem": Zd,
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
          vP: .5,
          TJd: !1
        }
      };

    function Ld(dd) {
      return Qd[dd]
    }
  },
  37212: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    const pd = {
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
  37858: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd
    });
    var pd = kd(325),
      Nd = kd.n(pd),
      Wd = kd(1901);
    let Pd;
    var Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od;
    const ed = [1, 151, 0, 157, "c", 53, "g", 173, "f", "d", 8, 255, "length", 206, 73, 29, "e", "undefined", void 0, 154, 155, "b", 107, 63, 6, "fromCodePoint", 7, 12, "push", 69, 92, 221, 9, 91, 5, 8191, 88, 13, 14, 204, !1, 3, 4, 2, 77, "h", 41, "a", 249, 62, "i", 135, !0, 100, 101, 102, null, 96, 97, 98, 99, 103, 104, 105, 117, 118, 119, 120, 121, 122, 46, 168, 30, "k", 59, 11, 167, 127, "ek", 214, 128, 134, 33554432, 67108864, 174, 195, 10, 75, 44, 28, 32, "on"];

    function Rd(dd) {
      return typeof Zd[dd] === ed[17] ? Zd[dd] = function(...dd) {
        for (Yd(dd[ed[12]] = ed[0], dd[ed[0]] = 'ayBtAhrqTeEISlodY0/s=_@f+g195POCHpv2NnxbcKV`L{XZi|&kW6D(M[%.?<$Rz)JumU;>G#F4w,*~8^jQ3"7}!]:', dd[-ed[1]] = "" + (dd[ed[2]] || ""), dd[ed[4]] = dd[-ed[1]].length, dd[ed[9]] = [], dd[ed[7]] = ed[2], dd[ed[8]] = ed[2], dd[ed[6]] = -ed[0]), dd[-ed[3]] = ed[2]; dd[-ed[3]] < dd[ed[4]]; dd[-ed[3]]++)
          if (dd[ed[5]] = dd[ed[0]].indexOf(dd[-ed[1]][dd[-ed[3]]]), dd[ed[5]] !== -ed[0])
            if (dd[ed[6]] < ed[2]) dd[ed[6]] = dd[ed[5]];
            else {
              Yd(dd[ed[6]] += dd[ed[5]] * ed[33], dd[ed[7]] |= dd[ed[6]] << dd[ed[8]], dd[ed[8]] += (dd[ed[6]] & ed[35]) > ed[36] ? ed[37] : ed[38]);
              do {
                Yd(dd[ed[9]].push(dd[ed[7]] & ed[11]), dd[ed[7]] >>= ed[10], dd[ed[8]] -= ed[10])
              } while (dd[ed[8]] > ed[26]);
              dd[ed[6]] = -ed[0]
            } return dd[ed[6]] > -ed[0] && dd[ed[9]].push((dd[ed[7]] | dd[ed[6]] << dd[ed[8]]) & ed[11]), Id(dd[ed[9]])
      }(gd[dd]) : Zd[dd]
    }

    function Id(dd) {
      return typeof Kd !== ed[17] && Kd ? (new Kd).decode(new od(dd)) : typeof ld !== ed[17] && ld ? ld.from(dd).toString("utf-8") : Od(dd)
    }

    function Gd() {}
    Yd(Zd = {}, gd = ["YnR5EU=+h", "{$aex|.4^RhDitb+wmn5J637&SM;WA95Y?@5q&_6^R4,ujL1f=xW|3TX?o1", "vd2Pn4@B", "~514pD?%r", "Gn5E]#+X`=s~dB;g?v2P5WMcrzb5S>Ig4oI,Z%}fzR[;F;<P)#XW7[hyq", "wk_A$,>qveDq=.&c;ke9g#sKi_*/S9UsBdO(CDa", "~oB9(31FkeqjeY9Px?:P%X,P6s/i|Yic9F5PP>Q[W[Cv]A>n,)xW]>a", "3;EkNmrWO_G2]8Exb=R|t6T+%I9U9By`4o3,q(L8mzG80Gh`QoOC%Xa", "GiTp22,quzte1<egJ$zr9xr7G=,FdoTs?et", 'A`TDZ;BTTlFI+QDK&10DHZ?+/[O9TtWKxe!#/&|y"z6', "I|+|K<)f!=^IEhU+KP>|(nLOP.f0w.mOEXTO)b$S0eQMnYwx4=5PQxd^A", "aA7CE^Z[4IG;j|`g}0C|kM7vS0iC#i|cz#Ce/*oTr", "Od`Hx8Ig]00n(xM2Krm1*[&%8SK8v1S", "|Cwh<knU0e/iN9r`6{ie1*cO|D3Fi.eCnP%Tg[5B?IQ@BgQc9>;#+", "hec|EN}y", "ura*2cOBI$Z#jBd", "te{(<v:XF=6AA>7vC[tP>&Ky", "1=rquFIqclM#iYt`6k|9ava", '~g6(2"DB', "1H&91.pK|D7uy", "FM<5iM06Jdan)iN/qm_wH8bZpec", "i=x(Vna", "BR+9HcaTM=", 'vti#<v;/g$;2"AJC0cC|Xm:W|J0U4tYv5=7W%Xp2O_QX>xe', "{f.PODbyOd0+MQg58t}|q$}P/[lv%g{b.0nq{kvOkzX#[YfP", "vfw&0Q6K/DN+o<.0NtFT", "%cuh+.RP1$*F=QCPGVsHqN[2{Tfl@nugqAxCNmAV])R_4o;C&iR|nmiB", "3=DA+>wr[$,R}B.0P):,xZ5W<I", "Vk_FFUa", "@fM#5>wv]o3;<^wb6tyka(c%x%gry", "R)lqWRsZL_:;KAWv7;`H6M/+?ok2?t", "Z[BhZnrN^/o%uoOO7ky", ":T2GlFR[tS+w{gex#ot", "l?7|aNa", "hFQ,+Z:8ddcqv<Ex_HapVDeqpJD8dx#CB|4hyi4y", '3."qibO7$Tjhk;HVtAvHmFG+pS', 'a2eDO"<lZ6kJuoqx{cz|BG<Zc)?qmdy/Zk]rpW9sFIX$adXs2SG#^xNB', "ine98F)[ye##bZJN[mOAw(&Wue!un|IgXC!r(,N/S0nJfxws!tthh(UR:o", '3r"qi;lK%.p~nnM2=DeOK8uKrsAju;tn`)?qZRa', "(tmF{,gs$Mglsj^9`=yDIx5B", "L>1G!Z!+l_+i)GT/&[UF+QS/s[|Ii.XcKcUE$%i%Gl{UX<l", "i)7q|4S/r", '[$Wq<vTNk?U?~1ExPFV9D,q6jD"yKY)C|[IEVDfqSo[5^N:Nsd)k+wTXwTb', "Gt4,rUa+:.1UdZf2y|PE%;*/<6GAYZr", '"kuF;^a;1$]hB^:K}{eH]#@z0d', "iD|TlwPKI=..~B#1>)c|G?,q=l", "WruPC<g2:olv+QEg0eh(H8kZh%oGX|%5l|:,8^JSA", "y[VGG(uyDlSm`oo9JvZeT&;/E)O)a9<PV[Ze0QTOS_", "z5!#/$uf!%(#Q>Rf9Fm1S7ET)dP05tY1ptw1s", "r22,CW.lae*FGGeC3.Ge", 'bfXAAX5Bnz2~4x<f<vRecZG+HSKiZo?K"{9E#~a', "xSceL2m/*RY4jBbg[{Q6rvdy1).2vg`s)tFkp8jSM0", 'eX"FY(XSq%a)k;pf+y', 'j=}w"&7cp[pw<U(2b0$CiMm7O/rD0i"5PdQ,c8nqp[Qu;gS=ry', ')$"A*(bUmDcq[Ab/Aey*nM6qXT];jU?2r/pk+w:+y/fi6A}v2my', "YXYe$iXXfza=`xE", "*$`Py7ksd?wy+t5O3CI,p<by", "YXrC_U`lZRg0xgt`/>!DG$@T&e{UJ|81>k5(Bv/7@zn~}1Ks{[e4.GDB", "c)C|?i_y", '|{TD1D8F#)<Wdo!@r|t&.6EO<M6R3>69";(wg#m%)[9C`xOP?fxCv2Ksp/', "Km~5rGiWY/2U7geb*m<5gwRPc)0~9.)+0?^kM3SN0S<|y", "{02H<6RfPJfk%|?O:)A&E[xNBd", "fD*qTv)l8Sp_b1p0drfW(;mXBs^@y", "+d7Ak|h6vD<#v%|9@?IE;~~q3lslboS1B[oqB$vWRMf=]A", "wrC#5cps3[]sO<Lx]6FTf*#Pf%)oL.z/cS1H~F(Z1)9", ",fCW9c!+oJ!TG9I1IFmP#^Xc50TYH9,bpn0r:#a", '8;{qbZ{s0J"?KATg>Vt', "DDRwU^_6^eBlt;:5KS6FgW}P@s/kIomO7=/Hf[57{_WM8QTsS|7C=", 'te_qO"w+~d&8Xjr+ZC|r:{Cq<68?N>MV*Mt', ",)W6nnP2jS7@|G>xI|:,$XG+:0S)V|m/E`+|bj#[/e", "n[betX;W$dF|jUa/:6qDGvcOus=(|i.P<m@Wr^)[WzIE89_5Mci|j&h^bl", '{k9,>~~K@%Jgxl1VoAE49cATbl;HRom01d|D[X5W&S"Hy', '=FQP2"=84.u2:ghO;{~#,(uyf%J;_YQca?U5hv,kNl', "eF?FMGuR=ziUMd$Ne>y*0^KZ$6J;c9jb%f!eDn[Z6DqmG9nge`yr", "<e+rgZj7|eWw2oGx#n)kY[*7Wz:NpA", "EcZ|/wUy", "n:0^y}hc", "JkxC,^=B", "f#n,g~48", ":U8t6d<LUS%FjwggoPs(88pb<9|TDez", '|"&n^![rr4Y', "w<cmoI7C", "#1MKeKDC", "w<CKHOGC", '"B#nIZDw', "PH?p", "fA#p>@+", "PBgK", "dRxJBn9", "@GFYXdw8", ';GP6V"w8', "GGHY", "@GpuS$k8", ">GhdwdT8", "CapugZ{8", "EW=uT", "@GpuwdT8", "CaFY;_=8", 'k7QME"@8', "_CQEEZk8", "n5?E`u@8", 'U5"du(T8', "6au#OpR8", ".7P6m_T8", 'E3"dBucs', "qIIEf", "NGFY", "HGp#e", "7W.EN", "6,<5F{z8", "?B}Jf", "@GpuS$?eP", "mw[H)#<_P", "WW2JG#e(P", "@GpuwdaNUe", "7z{E6n1eD=", "mwgP((}/Ue", ".75E|AX8", 'EJ5MN"9', ".75EfZ;8", "CaQEgdWs", "6a&Et_,8", 'N3"dBu9', "kEx1%D8N", "RgL$", "]`eV", "Q#y^", "BFeV", "e+Hp^", "NcA^", "z;9$", "hB&M", "VG=uZ(78", "ov/$r;#+", "svrYzqj8", ";wnd((w8", "&J4M", ":7}J", "UW5E:pR8", "?#4M", ";W4E$d<_D=", ']D!u?"cSPe', ",7_J)#W)K", "qX<dk50O", "h[`NuFc$", "X6`P", "bG7%9pzP", "UVFubo%l", "g6{y}7v", "U!igk5J$", "^A`NB&_$", 'D6pPs"M', "Tu16h9FO", "5pbeK", 'A5"du(T8', ";W4E&u%8"]), Yd(Cd = function(...dd) {
      Yd(dd[ed[12]] = ed[2], dd[ed[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], dd[-ed[13]] = ed[18], dd[ed[4]] = []);
      try {
        Yd(dd[-ed[13]] = Object, dd[ed[4]][ed[28]]("".__proto__.constructor.name))
      } catch (gd) {}
      dd: for (dd[-ed[14]] = ed[2]; dd[-ed[14]] < dd[ed[15]][ed[12]]; dd[-ed[14]]++) try {
        for (dd[-ed[13]] = dd[ed[15]][dd[-ed[14]]](), dd[ed[16]] = ed[2]; dd[ed[16]] < dd[ed[4]][ed[12]]; dd[ed[16]]++)
          if (typeof dd[-ed[13]][dd[ed[4]][dd[ed[16]]]] === ed[17]) continue dd;
        return dd[-ed[13]]
      } catch (gd) {}
      return dd[-ed[13]] || this
    }() || {}, Kd = Cd.TextDecoder, od = Cd.Uint8Array, ld = Cd.kL, Qd = Cd.String || String, Ld = Cd.Array || Array, Od = function() {
      var dd, Jd, kd = new Ld(ed[80]);
      return Yd(dd = Qd[ed[25]] || Qd.fromCharCode, Jd = []),
        function(...pd) {
          for (Yd(pd[ed[12]] = ed[0], pd[ed[22]] = ed[18], pd[ed[21]] = ed[18], pd[ed[20]] = pd[ed[2]][ed[12]], Jd[ed[12]] = ed[2]), pd[ed[19]] = ed[2]; pd[ed[19]] < pd[ed[20]];) Yd(pd[ed[21]] = pd[ed[2]][pd[ed[19]]++], pd[ed[21]] <= ed[77] ? pd[ed[22]] = pd[ed[21]] : pd[ed[21]] <= 223 ? pd[ed[22]] = (31 & pd[ed[21]]) << ed[24] | pd[ed[2]][pd[ed[19]]++] & ed[23] : pd[ed[21]] <= 239 ? pd[ed[22]] = (15 & pd[ed[21]]) << ed[27] | (pd[ed[2]][pd[ed[19]]++] & ed[23]) << ed[24] | pd[ed[2]][pd[ed[19]]++] & ed[23] : Qd[ed[25]] ? pd[ed[22]] = (pd[ed[21]] & ed[26]) << 18 | (pd[ed[2]][pd[ed[19]]++] & ed[23]) << ed[27] | (pd[ed[2]][pd[ed[19]]++] & ed[23]) << ed[24] | pd[ed[2]][pd[ed[19]]++] & ed[23] : (pd[ed[22]] = ed[23], pd[ed[19]] += ed[41]), Jd[ed[28]](kd[pd[ed[22]]] || (kd[pd[ed[22]]] = dd(pd[ed[22]]))));
          return Jd.join("")
        }
    }()), Rd(ed[87]) + ed[73] in Gd && function(...dd) {
      Yd(dd[ed[12]] = ed[2], dd[ed[29]] = function(dd) {
        var Jd, kd, pd, Nd, Wd = dd.length;
        for (Yd(Jd = [], kd = ed[2], pd = ed[2], dd.sort(((dd, Jd) => dd - Jd))), Nd = ed[2]; Nd < Wd; Nd++)
          if (!(Nd > ed[2] && dd[Nd] === dd[Nd - ed[0]]))
            for (Yd(kd = Nd + ed[0], pd = Wd - ed[0]); kd < pd;)
              if (dd[Nd] + dd[kd] + dd[pd] < ed[2]) kd++;
              else if (dd[Nd] + dd[kd] + dd[pd] > ed[2]) pd--;
        else {
          for (Jd.push([dd[Nd], dd[kd], dd[pd]]); kd < pd && dd[kd] === dd[kd + ed[0]];) kd++;
          for (; kd < pd && dd[pd] === dd[pd - ed[0]];) pd--;
          Yd(kd++, pd--)
        }
        return Jd
      }, console.log(dd[ed[29]]))
    }();
    const vd = Nd()[Rd(ed[44])](),
      xd = Nd()[Rd(ed[44])](),
      qd = Nd()[Rd(ed[44])](),
      Bd = Nd()[Rd(ed[44])](),
      sd = Nd()[Rd(ed[44])](),
      ad = Nd()[Rd(ed[44])](),
      Md = Nd()[Rd(ed[44])](),
      Fd = (...dd) => {
        function Jd(dd) {
          return typeof Zd[dd] === ed[17] ? Zd[dd] = function(...dd) {
            for (Yd(dd[ed[12]] = ed[0], dd[ed[47]] = '+8wx/`|=pAKM31a[dTu4%g9RyV6PEU>Jn;Dl2"5N(^GB*}tI),~#vrzY<0ikqW.CfS_$ZFm@{bHecLQ7!&]?OXo:jsh', dd[ed[41]] = "" + (dd[ed[2]] || ""), dd[-ed[46]] = dd[ed[41]].length, dd[-ed[48]] = [], dd[ed[34]] = ed[2], dd[ed[8]] = ed[2], dd[ed[6]] = -ed[0]), dd[ed[45]] = ed[2]; dd[ed[45]] < dd[-ed[46]]; dd[ed[45]]++)
              if (dd[ed[32]] = dd[ed[47]].indexOf(dd[ed[41]][dd[ed[45]]]), dd[ed[32]] !== -ed[0])
                if (dd[ed[6]] < ed[2]) dd[ed[6]] = dd[ed[32]];
                else {
                  Yd(dd[ed[6]] += dd[ed[32]] * ed[33], dd[ed[34]] |= dd[ed[6]] << dd[ed[8]], dd[ed[8]] += (dd[ed[6]] & ed[35]) > ed[36] ? ed[37] : ed[38]);
                  do {
                    Yd(dd[-ed[48]].push(dd[ed[34]] & ed[11]), dd[ed[34]] >>= ed[10], dd[ed[8]] -= ed[10])
                  } while (dd[ed[8]] > ed[26]);
                  dd[ed[6]] = -ed[0]
                } return dd[ed[6]] > -ed[0] && dd[-ed[48]].push((dd[ed[34]] | dd[ed[6]] << dd[ed[8]]) & ed[11]), Id(dd[-ed[48]])
          }(gd[dd]) : Zd[dd]
        }
        dd[ed[12]] = ed[41], Jd(78) in Gd && (module.exports = async (dd = (...dd) => {
          function Jd(dd) {
            var Jd, kd, pd, Nd, Wd, Pd, Zd, gd = 'u32&w:XLk(_.zxHrsSE|f=KWQI]Z5;o6{R>+`j[gqBDUl@1t,e*TFOy$aPA!vc%)}9V^"Gnd?/4<#M8Y0CpmJhb~iN7';
            for (Yd(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = ed[2], Wd = ed[2], Pd = -ed[0]), Zd = ed[2]; Zd < kd; Zd++) {
              var Cd = gd.indexOf(Jd[Zd]);
              if (Cd !== -ed[0])
                if (Pd < ed[2]) Pd = Cd;
                else {
                  Yd(Pd += Cd * ed[33], Nd |= Pd << Wd, Wd += (Pd & ed[35]) > ed[36] ? ed[37] : ed[38]);
                  do {
                    Yd(pd.push(Nd & ed[11]), Nd >>= ed[10], Wd -= ed[10])
                  } while (Wd > ed[26]);
                  Pd = -ed[0]
                }
            }
            return Pd > -ed[0] && pd.push((Nd | Pd << Wd) & ed[11]), Id(pd)
          }

          function kd(dd) {
            return typeof Zd[dd] === ed[17] ? Zd[dd] = Jd(gd[dd]) : Zd[dd]
          }
          throw dd[ed[12]] = ed[2], new Error(kd(79))
        }) => {
          const kd = new Set(process.argv.slice(ed[43]));
          if (!kd.has(Jd(80))) {
            if (kd.size !== ed[0]) return ed[40];
            if (!kd.has("-v")) return ed[40]
          }
          return await (async (Jd, kd) => {
            function pd(...dd) {
              for (Yd(dd[ed[12]] = ed[0], dd[ed[47]] = 'ZkC1MWNlqhmcGsrbB)^}DA<PEfFp_?0R8Q=S3~7/9n4&zYd;To@,t{U.(J"yei[5j`2!IOL+$Xx6>Kw|gv%#H]Va*u:', dd[ed[43]] = "" + (dd[ed[2]] || ""), dd[ed[4]] = dd[ed[43]].length, dd[ed[42]] = [], dd[ed[34]] = ed[2], dd[-ed[51]] = ed[2], dd[ed[6]] = -ed[0]), dd[ed[49]] = ed[2]; dd[ed[49]] < dd[ed[4]]; dd[ed[49]]++)
                if (dd[ed[50]] = dd[ed[47]].indexOf(dd[ed[43]][dd[ed[49]]]), dd[ed[50]] !== -ed[0])
                  if (dd[ed[6]] < ed[2]) dd[ed[6]] = dd[ed[50]];
                  else {
                    Yd(dd[ed[6]] += dd[ed[50]] * ed[33], dd[ed[34]] |= dd[ed[6]] << dd[-ed[51]], dd[-ed[51]] += (dd[ed[6]] & ed[35]) > ed[36] ? ed[37] : ed[38]);
                    do {
                      Yd(dd[ed[42]].push(dd[ed[34]] & ed[11]), dd[ed[34]] >>= ed[10], dd[-ed[51]] -= ed[10])
                    } while (dd[-ed[51]] > ed[26]);
                    dd[ed[6]] = -ed[0]
                  } return dd[ed[6]] > -ed[0] && dd[ed[42]].push((dd[ed[34]] | dd[ed[6]] << dd[-ed[51]]) & ed[11]), Id(dd[ed[42]])
            }

            function Nd(...dd) {
              return dd[ed[12]] = ed[0], typeof Zd[dd[ed[2]]] === ed[17] ? Zd[dd[ed[2]]] = pd(gd[dd[ed[2]]]) : Zd[dd[ed[2]]]
            }
            return kd === await dd() ? Nd(83) + "l)" : ""
          })(), ed[52]
        });
        const kd = ad;
        return Nd()[Jd(84) + Jd(85)](kd, dd[ed[43]]), Nd()[Jd(86)](dd[ed[2]], kd, Nd()[Jd(87)](kd, dd[ed[0]]))
      };

    function Yd() {
      Yd = function() {}
    }
    Pd = (...dd) => {
      function Jd(...dd) {
        return dd[ed[12]] = ed[0], typeof Zd[dd[ed[2]]] === ed[17] ? Zd[dd[ed[2]]] = function(dd) {
          var Jd, kd, pd, Nd, Wd, Pd, Zd;
          for (Yd(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = ed[2], Wd = ed[2], Pd = -ed[0]), Zd = ed[2]; Zd < kd; Zd++) {
            var gd = '9s8IvHPKMJY*w)>GX1@e=FbV%f7?TSNhEmR.;Uk+atDWOCz:jL{5!r,6^3l&B~`y}0iQpAn"x|#cduZ2_(q4[$/o]g<'.indexOf(Jd[Zd]);
            if (gd !== -ed[0])
              if (Pd < ed[2]) Pd = gd;
              else {
                Yd(Pd += gd * ed[33], Nd |= Pd << Wd, Wd += (Pd & ed[35]) > ed[36] ? ed[37] : ed[38]);
                do {
                  Yd(pd.push(Nd & ed[11]), Nd >>= ed[10], Wd -= ed[10])
                } while (Wd > ed[26]);
                Pd = -ed[0]
              }
          }
          return Pd > -ed[0] && pd.push((Nd | Pd << Wd) & ed[11]), Id(pd)
        }(gd[dd[ed[2]]]) : Zd[dd[ed[2]]]
      }
      dd[ed[12]] = ed[10];
      const kd = dd[ed[2]][Jd(ed[36])][Jd(89) + Jd(90) + Jd(ed[33])](dd[ed[0]]);
      dd[ed[10]] = dd[ed[2]][Jd(ed[36])][Jd(ed[30]) + Jd(93) + Jd(94) + Jd(95)](kd);
      const pd = dd[ed[10]] === ed[56] ? dd[ed[2]][Jd(ed[36])][Jd(ed[57]) + Jd(ed[58]) + Jd(ed[59]) + Jd(ed[60])](dd[ed[0]], Jd(ed[53]) + Jd(ed[54]) + Jd(ed[55]) + ed[16]) : dd[ed[10]][Jd(ed[53]) + Jd(ed[54]) + Jd(ed[55]) + ed[16]],
        Pd = dd[ed[10]] === ed[56] ? dd[ed[2]][Jd(ed[36])][Jd(ed[57]) + Jd(ed[58]) + Jd(ed[59]) + Jd(ed[60])](dd[ed[0]], Jd(ed[61]) + Jd(ed[62]) + Jd(ed[63])) : dd[ed[10]][Jd(ed[61]) + Jd(ed[62]) + Jd(ed[63])];
      Yd(Nd()[Jd(106)](vd, ed[2], ed[2], dd[ed[34]]), Nd().gp(vd, vd, Nd()[Jd(ed[22])], dd[ed[41]].heading), Nd()[Jd(108)](Md, dd[ed[42]].hO), Md[ed[0]] = ed[2]);
      const Cd = dd[ed[43]][Jd(109) + Jd(110)]();
      if (Yd(dd[ed[10]] = dd[ed[2]][Jd(ed[36])][Jd(111) + Jd(112) + Jd(113) + "s"](kd), dd[ed[32]] = dd[ed[10]] === ed[56] ? dd[ed[2]][Jd(ed[36])][Jd(114) + Jd(115) + Jd(116)](dd[ed[0]], Jd(ed[64]) + Jd(ed[65])) : dd[ed[10]][Jd(ed[64]) + Jd(ed[65])]), !Cd && Nd()[ed[78]](Md) && (dd[ed[10]] === ed[56] ? dd[ed[2]][Jd(ed[36])][Jd(ed[57]) + Jd(ed[58]) + Jd(ed[59]) + Jd(ed[60])](dd[ed[0]], Jd(ed[66]) + Jd(ed[67]) + Jd(ed[68]) + Jd(ed[69])) : dd[ed[10]][Jd(ed[66]) + Jd(ed[67]) + Jd(ed[68]) + Jd(ed[69])])) {
        function Ld(...dd) {
          for (Yd(dd[ed[12]] = ed[0], dd[ed[0]] = 'uNjmcnXC$V^[;Ix`tvYa7y~]T"FQJzsRU%0h<p+rP}4#)GfB/2io1Al@,d{Lg6WqeE5:_wZ3|8O9b*D=&(?!.>KHkMS', dd[ed[43]] = "" + (dd[ed[2]] || ""), dd[ed[71]] = dd[ed[43]].length, dd[ed[9]] = [], dd[-ed[72]] = ed[2], dd[ed[8]] = ed[2], dd[ed[26]] = -ed[0]), dd[-ed[70]] = ed[2]; dd[-ed[70]] < dd[ed[71]]; dd[-ed[70]]++)
            if (dd[ed[50]] = dd[ed[0]].indexOf(dd[ed[43]][dd[-ed[70]]]), dd[ed[50]] !== -ed[0])
              if (dd[ed[26]] < ed[2]) dd[ed[26]] = dd[ed[50]];
              else {
                Yd(dd[ed[26]] += dd[ed[50]] * ed[33], dd[-ed[72]] |= dd[ed[26]] << dd[ed[8]], dd[ed[8]] += (dd[ed[26]] & ed[35]) > ed[36] ? ed[37] : ed[38]);
                do {
                  Yd(dd[ed[9]].push(dd[-ed[72]] & ed[11]), dd[-ed[72]] >>= ed[10], dd[ed[8]] -= ed[10])
                } while (dd[ed[8]] > ed[26]);
                dd[ed[26]] = -ed[0]
              } return dd[ed[26]] > -ed[0] && dd[ed[9]].push((dd[-ed[72]] | dd[ed[26]] << dd[ed[8]]) & ed[11]), Id(dd[ed[9]])
        }

        function Od(...dd) {
          return dd[ed[12]] = ed[0], typeof Zd[dd[ed[2]]] === ed[17] ? Zd[dd[ed[2]]] = Ld(gd[dd[ed[2]]]) : Zd[dd[ed[2]]]
        }

        function Rd(...dd) {
          Yd(dd[ed[12]] = ed[2], dd[ed[21]] = function(Jd) {
            var kd = [];
            return (Jd === ed[0] || Jd >= ed[42]) && dd[-ed[74]](kd, [], Jd, ed[2]), kd
          }, dd[-ed[74]] = function(...Jd) {
            for (Jd[ed[12]] = ed[42], Jd[-ed[75]] = Jd[ed[41]]; Jd[-ed[75]] < Jd[ed[43]]; Jd[-ed[75]]++) {
              if (Jd[ed[0]].length !== Jd[-ed[75]]) return;
              for (Jd[ed[21]] = ed[2]; Jd[ed[21]] < Jd[ed[43]]; Jd[ed[21]]++) dd[ed[41]](Jd[ed[0]], [Jd[-ed[75]], Jd[ed[21]]]) && (Yd(Jd[ed[0]].push([Jd[-ed[75]], Jd[ed[21]]]), dd[-ed[74]](Jd[ed[2]], Jd[ed[0]], Jd[ed[43]], Jd[-ed[75]] + ed[0])), Jd[ed[0]].length === Jd[ed[43]] && Jd[ed[2]].push(dd[ed[45]](Jd[ed[0]])), Jd[ed[0]].pop())
            }
          }, dd[ed[45]] = function(...dd) {
            for (Yd(dd[ed[12]] = ed[0], dd[ed[76]] = [], dd[ed[43]] = dd[ed[2]].length), dd[ed[41]] = ed[2]; dd[ed[41]] < dd[ed[43]]; dd[ed[41]]++)
              for (dd[ed[76]][dd[ed[41]]] = "", dd[ed[42]] = ed[2]; dd[ed[42]] < dd[ed[43]]; dd[ed[42]]++) dd[ed[76]][dd[ed[41]]] += dd[ed[2]][dd[ed[41]]][ed[0]] === dd[ed[42]] ? "Q" : ".";
            return dd[ed[76]]
          }, dd[ed[41]] = function(dd, Jd) {
            var kd, pd = dd.length;
            for (kd = ed[2]; kd < pd; kd++) {
              if (dd[kd][ed[2]] === Jd[ed[2]] || dd[kd][ed[0]] === Jd[ed[0]]) return ed[40];
              if (Math.abs((dd[kd][ed[2]] - Jd[ed[2]]) / (dd[kd][ed[0]] - Jd[ed[0]])) === ed[0]) return ed[40]
            }
            return ed[52]
          }, console.log(dd[ed[21]]))
        }
        Od(123) + ed[73] in Gd && Rd(), Yd(Fd(xd, vd, Md), Fd(qd, Md, vd), Nd()[Od(124)](Bd, Md, qd));
        const ad = Nd()[Od(125)](Md),
          md = Nd()[Od(126)](vd, Md) / dd[ed[34]] / ad,
          bd = Math[Od(ed[77])](md, ed[2]) + ed[0];
        if (dd[ed[34]] * dd[ed[34]] < Nd()[ed[78]](qd)) {
          function Sd(...dd) {
            for (Yd(dd[ed[12]] = ed[0], dd[ed[0]] = 'PuynGHNKo`p>,$C+ZYqI!vBe}Q=T^Dl&tL6j"4?*:c<%h3@#i1;8r/0W]Ak.wxRO9gdsz2~7(JmSMFX){a_[U5fEb|V', dd[ed[21]] = "" + (dd[ed[2]] || ""), dd[ed[4]] = dd[ed[21]].length, dd[ed[42]] = [], dd[ed[34]] = ed[2], dd[ed[8]] = ed[2], dd[ed[6]] = -ed[0]), dd[ed[10]] = ed[2]; dd[ed[10]] < dd[ed[4]]; dd[ed[10]]++)
              if (dd[ed[79]] = dd[ed[0]].indexOf(dd[ed[21]][dd[ed[10]]]), dd[ed[79]] !== -ed[0])
                if (dd[ed[6]] < ed[2]) dd[ed[6]] = dd[ed[79]];
                else {
                  Yd(dd[ed[6]] += dd[ed[79]] * ed[33], dd[ed[34]] |= dd[ed[6]] << dd[ed[8]], dd[ed[8]] += (dd[ed[6]] & ed[35]) > ed[36] ? ed[37] : ed[38]);
                  do {
                    Yd(dd[ed[42]].push(dd[ed[34]] & ed[11]), dd[ed[34]] >>= ed[10], dd[ed[8]] -= ed[10])
                  } while (dd[ed[8]] > ed[26]);
                  dd[ed[6]] = -ed[0]
                } return dd[ed[6]] > -ed[0] && dd[ed[42]].push((dd[ed[34]] | dd[ed[6]] << dd[ed[8]]) & ed[11]), Id(dd[ed[42]])
          }

          function jd(dd) {
            return typeof Zd[dd] === ed[17] ? Zd[dd] = Sd(gd[dd]) : Zd[dd]
          }
          Nd()[jd(ed[80])](vd, vd, qd, bd)
        }
        Yd(dd[ed[32]] = (ed[2], Wd.A)(dd[ed[32]], 1, Math[Od(ed[77])](ed[0], Math[Od(129)](ed[2], -md, ed[0] - ad / dd[ed[34]]))), Nd()[Od(130)](vd, vd, Bd))
      }
      const Kd = sd;
      if (Yd(Nd()[Jd(131)](Kd, vd, Md), Kd[ed[0]] = ed[2], dd[ed[86]] = Nd()[Jd(132)](Kd)), !Cd) {
        function Xd(...dd) {
          for (Yd(dd[ed[12]] = ed[0], dd[ed[0]] = 'bX+r&q,HxD]@w>SVP=`5eElA1s78FOp)o%;I^Y4g#.t*?f_M{z$6(!vy<3"2|u}90:~[c/BCNWZKajkGQUhdRLiJnmT', dd[ed[21]] = "" + (dd[ed[2]] || ""), dd[ed[4]] = dd[ed[21]].length, dd[ed[42]] = [], dd[-ed[75]] = ed[2], dd[ed[24]] = ed[2], dd[ed[6]] = -ed[0]), dd[ed[26]] = ed[2]; dd[ed[26]] < dd[ed[4]]; dd[ed[26]]++)
            if (dd[-ed[81]] = dd[ed[0]].indexOf(dd[ed[21]][dd[ed[26]]]), dd[-ed[81]] !== -ed[0])
              if (dd[ed[6]] < ed[2]) dd[ed[6]] = dd[-ed[81]];
              else {
                Yd(dd[ed[6]] += dd[-ed[81]] * ed[33], dd[-ed[75]] |= dd[ed[6]] << dd[ed[24]], dd[ed[24]] += (dd[ed[6]] & ed[35]) > ed[36] ? ed[37] : ed[38]);
                do {
                  Yd(dd[ed[42]].push(dd[-ed[75]] & ed[11]), dd[-ed[75]] >>= ed[10], dd[ed[24]] -= ed[10])
                } while (dd[ed[24]] > ed[26]);
                dd[ed[6]] = -ed[0]
              } return dd[ed[6]] > -ed[0] && dd[ed[42]].push((dd[-ed[75]] | dd[ed[6]] << dd[ed[24]]) & ed[11]), Id(dd[ed[42]])
        }

        function fd(dd) {
          return typeof Zd[dd] === ed[17] ? Zd[dd] = Xd(gd[dd]) : Zd[dd]
        }

        function nd(...dd) {
          function Jd(...dd) {
            return dd[ed[12]] = ed[0], dd[ed[2]][ed[0]] * ed[83] + (dd[ed[2]][ed[2]] < ed[2] ? ed[82] | dd[ed[2]][ed[2]] : dd[ed[2]][ed[2]])
          }

          function kd(...dd) {
            switch (dd[ed[12]] = ed[0], ((dd[ed[2]] & ed[82]) !== ed[2]) * ed[0] + (dd[ed[2]] < ed[2]) * ed[43]) {
              case ed[2]:
                return [dd[ed[2]] % ed[82], Math.trunc(dd[ed[2]] / ed[83])];
              case ed[0]:
                return [dd[ed[2]] % ed[82] - ed[82], Math.trunc(dd[ed[2]] / ed[83]) + ed[0]];
              case ed[43]:
                return [((dd[ed[2]] + ed[82]) % ed[82] + ed[82]) % ed[82], Math.round(dd[ed[2]] / ed[83])];
              case ed[41]:
                return [dd[ed[2]] % ed[82], Math.trunc(dd[ed[2]] / ed[83])]
            }
          }
          dd[ed[12]] = ed[2], Yd(dd[ed[62]] = Jd([ed[43], ed[42]]), dd[ed[84]] = Jd([ed[0], ed[43]]), dd[ed[43]] = dd[ed[62]] + dd[ed[84]], dd[ed[9]] = dd[ed[43]] - dd[ed[84]], dd[ed[42]] = dd[ed[9]] * ed[43], dd[-ed[85]] = dd[ed[42]] / ed[43], console.log(kd(dd[ed[43]])), console.log(kd(dd[ed[9]])), console.log(kd(dd[ed[42]])), console.log(kd(dd[-ed[85]])))
        }
        fd(133) + "t" in Gd && nd(), dd[ed[86]] *= dd[ed[32]]
      }
      const od = dd[ed[24]][Jd(ed[81]) + Jd(ed[51]) + Jd(136)],
        ld = od ? Math[Jd(137)](od, dd[ed[86]]) : dd[ed[86]];
      Nd()[Jd(138) + Jd(139)](Kd, Kd);
      const Qd = dd[ed[26]] !== ed[56] && dd[ed[26]] !== void ed[2] ? dd[ed[26]] : dd[ed[24]][Jd(140) + Jd(141) + Jd(142)];
      if (ld > ed[2]) {
        function Ud(...dd) {
          for (Yd(dd[ed[12]] = ed[0], dd[ed[47]] = 'MO$2wqLTP6g0miZ!7>IC_,b?<KAdvUseN#k4hQJGc=a[nWuVRF3pY^{/rfB@Sj~XD.Eozt]"ly%x|&5*1:+`)98;}(H', dd[ed[87]] = "" + (dd[ed[2]] || ""), dd[ed[41]] = dd[ed[87]].length, dd[ed[9]] = [], dd[-ed[88]] = ed[2], dd[ed[24]] = ed[2], dd[ed[6]] = -ed[0]), dd[ed[45]] = ed[2]; dd[ed[45]] < dd[ed[41]]; dd[ed[45]]++)
            if (dd[ed[32]] = dd[ed[47]].indexOf(dd[ed[87]][dd[ed[45]]]), dd[ed[32]] !== -ed[0])
              if (dd[ed[6]] < ed[2]) dd[ed[6]] = dd[ed[32]];
              else {
                Yd(dd[ed[6]] += dd[ed[32]] * ed[33], dd[-ed[88]] |= dd[ed[6]] << dd[ed[24]], dd[ed[24]] += (dd[ed[6]] & ed[35]) > ed[36] ? ed[37] : ed[38]);
                do {
                  Yd(dd[ed[9]].push(dd[-ed[88]] & ed[11]), dd[-ed[88]] >>= ed[10], dd[ed[24]] -= ed[10])
                } while (dd[ed[24]] > ed[26]);
                dd[ed[6]] = -ed[0]
              } return dd[ed[6]] > -ed[0] && dd[ed[9]].push((dd[-ed[88]] | dd[ed[6]] << dd[ed[24]]) & ed[11]), Id(dd[ed[9]])
        }

        function yd(dd) {
          return typeof Zd[dd] === ed[17] ? Zd[dd] = Ud(gd[dd]) : Zd[dd]
        }

        function Dd(...dd) {
          Yd(dd[ed[12]] = ed[2], dd[-ed[90]] = function(...Jd) {
            return Jd[ed[12]] = ed[43], dd[ed[0]]({}, Jd[ed[2]], Jd[ed[0]])
          }, dd[ed[0]] = function(...Jd) {
            if (Yd(Jd[ed[12]] = ed[41], Jd[ed[41]] = {}), Jd[ed[2]][Jd[ed[0]] + Jd[ed[43]]] !== ed[18]) return Jd[ed[2]][Jd[ed[0]] + Jd[ed[43]]];
            if (Jd[ed[0]] === Jd[ed[43]]) return ed[52];
            for (Jd[-ed[89]] = ed[2]; Jd[-ed[89]] < Jd[ed[0]].length; Jd[-ed[89]]++) Jd[ed[41]][Jd[ed[0]][Jd[-ed[89]]]] === ed[18] && (Jd[ed[41]][Jd[ed[0]][Jd[-ed[89]]]] = ed[2]), Jd[ed[41]][Jd[ed[43]][Jd[-ed[89]]]] === ed[18] && (Jd[ed[41]][Jd[ed[43]][Jd[-ed[89]]]] = ed[2]), Yd(Jd[ed[41]][Jd[ed[0]][Jd[-ed[89]]]]++, Jd[ed[41]][Jd[ed[43]][Jd[-ed[89]]]]--);
            for (Jd[ed[4]] in Jd[ed[41]])
              if (Jd[ed[41]][Jd[ed[4]]] !== ed[2]) return Jd[ed[2]][Jd[ed[0]] + Jd[ed[43]]] = ed[40], ed[40];
            for (Jd[ed[9]] = ed[0]; Jd[ed[9]] < Jd[ed[0]].length; Jd[ed[9]]++)
              if (dd[ed[0]](Jd[ed[2]], Jd[ed[0]].substr(ed[2], Jd[ed[9]]), Jd[ed[43]].substr(ed[2], Jd[ed[9]])) && dd[ed[0]](Jd[ed[2]], Jd[ed[0]].substr(Jd[ed[9]]), Jd[ed[43]].substr(Jd[ed[9]])) || dd[ed[0]](Jd[ed[2]], Jd[ed[0]].substr(ed[2], Jd[ed[9]]), Jd[ed[43]].substr(Jd[ed[43]].length - Jd[ed[9]])) && dd[ed[0]](Jd[ed[2]], Jd[ed[0]].substr(Jd[ed[9]]), Jd[ed[43]].substr(ed[2], Jd[ed[43]].length - Jd[ed[9]]))) return Jd[ed[2]][Jd[ed[0]] + Jd[ed[43]]] = ed[52], ed[52];
            return Jd[ed[2]][Jd[ed[0]] + Jd[ed[43]]] = ed[40], ed[40]
          }, console.log(dd[-ed[90]]))
        }
        yd(143) in Gd && Dd();
        let Td = dd[ed[43]][yd(144) + yd(145)] * Qd;
        if (!Cd) {
          function cd(dd) {
            var Jd, kd, pd, Nd, Wd, Pd, Zd;
            for (Yd(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = ed[2], Wd = ed[2], Pd = -ed[0]), Zd = ed[2]; Zd < kd; Zd++) {
              var gd = 'vPlZHhcsQDyn@Kq+f9xi>0X/BbVA{Y.*umNUW6p2rM|w4a][O$EF!k%(t~1TJIg,&e3S:`=jLdGC5Roz}7#)^<;_8?"'.indexOf(Jd[Zd]);
              if (gd !== -ed[0])
                if (Pd < ed[2]) Pd = gd;
                else {
                  Yd(Pd += gd * ed[33], Nd |= Pd << Wd, Wd += (Pd & ed[35]) > ed[36] ? ed[37] : ed[38]);
                  do {
                    Yd(pd.push(Nd & ed[11]), Nd >>= ed[10], Wd -= ed[10])
                  } while (Wd > ed[26]);
                  Pd = -ed[0]
                }
            }
            return Pd > -ed[0] && pd.push((Nd | Pd << Wd) & ed[11]), Id(pd)
          }

          function hd(dd) {
            return typeof Zd[dd] === ed[17] ? Zd[dd] = cd(gd[dd]) : Zd[dd]
          }

          function rd() {
            var dd;
            Yd(dd = function(Jd, kd, pd, Nd, Wd, Pd, Zd) {
              var gd = ed[40];
              return Pd >= pd.length ? ed[52] : Zd["" + Nd + Wd + Pd] !== ed[18] ? Zd["" + Nd + Wd + Pd] : (pd[Pd] === Jd[Nd] && pd[Pd] === kd[Wd] ? gd = dd(Jd, kd, pd, Nd + ed[0], Wd, Pd + ed[0], Zd) || dd(Jd, kd, pd, Nd, Wd + ed[0], Pd + ed[0], Zd) : pd[Pd] === Jd[Nd] ? gd = dd(Jd, kd, pd, Nd + ed[0], Wd, Pd + ed[0], Zd) : pd[Pd] === kd[Wd] && (gd = dd(Jd, kd, pd, Nd, Wd + ed[0], Pd + ed[0], Zd)), Zd["" + Nd + Wd + Pd] = gd, gd)
            }, console.log((function(Jd, kd, pd) {
              return pd.length !== Jd.length + kd.length ? ed[40] : dd(Jd, kd, pd, ed[2], ed[2], ed[2], {})
            })))
          }
          hd(146) in Gd && rd(), Td *= dd[ed[43]][hd(147) + hd(148)]
        }
        let Ed = dd[ed[43]][yd(149) + yd(150) + "ss"] * ld;
        ld < .3 && (Ed *= ld), Td > Ed && (Td = Ed), Yd(Nd()[yd(ed[1])](Kd, Kd, Td), dd[ed[42]][yd(152) + yd(153)](Kd))
      }
      dd[ed[42]][Jd(ed[19]) + ed[91]] = dd[ed[43]][Jd(ed[20]) + Jd(ed[54]) + ed[91]] * (Cd ? pd : Pd)
    }
  },
  37856: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      h: () => Zd
    });
    var pd = kd(37858),
      Nd = kd(1901);
    const Wd = 2,
      Pd = 1,
      Zd = {
        vP: 1,
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

    function gd(dd, Jd, kd, Zd, gd, Cd, Kd) {
      if (gd.speed) return (0, pd.d)(Jd, kd, Zd, gd, Cd, Kd, dd), void(gd.ticksToReachMaxIdleFriction = Wd);
      const od = Zd.isOnGround(),
        ld = Jd.bloxd.getSyncedClientOptions(Jd.bloxd.getPlayerReader(kd)),
        Qd = null === ld ? Jd.bloxd.getClientPredictedOption(kd, "groundFrictionScale") : ld.groundFrictionScale,
        Ld = null === ld ? Jd.bloxd.getClientPredictedOption(kd, "airFrictionScale") : ld.airFrictionScale,
        Od = od ? Qd : Ld,
        ed = Math.max(Pd, Od),
        Rd = gd.ticksToReachMaxIdleFriction / Wd,
        Id = (0, Nd.A)(ed, Od, Rd);
      Cd.friction = dd.standingFriction * ((null === ld ? Jd.bloxd.getClientPredictedOption(kd, "airMomentumConservation") : ld.airMomentumConservation) ? Id : Od), gd.ticksToReachMaxIdleFriction > 0 && gd.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);