export const id = 220;
export const ids = [220];
export const modules = {
  37989: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => av
    });
    var hv = Pv(185),
      Sv = Pv(37154);
    const ev = 1.2,
      gv = {
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
        Dl: .5,
        Gvv: !1
      },
      pv = {
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
        Dl: .5,
        Gvv: !1
      },
      dv = {
        physicsBodyDimensions: {
          width: hv.f.pG,
          height: hv.f.lG
        },
        hitBoxDimensions: {
          width: hv.f.pG + .4,
          height: hv.f.lG + .6
        },
        eyeHeight: hv.f.lG * hv.f.playerEyeToHeightRatio,
        rideHeight: hv.f.lG - .3,
        Dl: .5,
        Gvv: !1
      },
      Nv = {
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
        Dl: .5,
        Gvv: !1
      },
      lv = {
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
        Dl: .5,
        Gvv: !1
      },
      Tv = {
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
        Dl: .5,
        Gvv: !1
      },
      Wv = {
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
        Dl: .5,
        Gvv: !1
      },
      wv = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: hv.f.pG,
            height: hv.f.lG
          },
          hitBoxDimensions: {
            width: hv.f.pG + .4,
            height: hv.f.lG + .6
          },
          eyeHeight: hv.f.lG * hv.f.playerEyeToHeightRatio,
          rideHeight: hv.f.lG - .1,
          Dl: Sv.g.Dl,
          Gvv: !0
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
        },
        Camel: {
          modelScale: ev,
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
        },
        "Cave Golem": gv,
        "Draugr Zombie": {
          ...dv,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": dv,
        "Frost Golem": gv,
        "Frost Zombie": {
          ...dv,
          defaultPose: "zombie"
        },
        "Frost Skeleton": dv,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: hv.f.pG,
            height: hv.f.lG
          },
          hitBoxDimensions: {
            width: hv.f.pG + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Dl: .5,
          Gvv: !1
        },
        Wolf: Nv,
        Bear: lv,
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
          Dl: .5,
          Gvv: !1
        },
        Stag: Tv,
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
          Dl: .5,
          Gvv: !1
        },
        Gorilla: Wv,
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
          Dl: .5,
          Gvv: !1
        },
        "Draugr Huntress": dv,
        "Magma Golem": gv,
        "Spirit Golem": gv,
        "Spirit Wolf": Nv,
        "Spirit Bear": lv,
        "Spirit Stag": Tv,
        "Spirit Gorilla": Wv,
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: hv.f.pG,
            height: hv.f.lG
          },
          hitBoxDimensions: {
            width: hv.f.pG + .4,
            height: hv.f.lG + .6
          },
          eyeHeight: hv.f.lG * hv.f.playerEyeToHeightRatio,
          rideHeight: hv.f.lG - .1,
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: hv.f.pG,
            height: hv.f.lG
          },
          hitBoxDimensions: {
            width: hv.f.pG + .4,
            height: hv.f.lG + .6
          },
          eyeHeight: hv.f.lG * hv.f.playerEyeToHeightRatio,
          rideHeight: hv.f.lG - .1,
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
        },
        Zombie: {
          ...dv,
          defaultPose: "zombie"
        },
        Skeleton: dv,
        Mummy: {
          ...dv,
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
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
          Dl: .5,
          Gvv: !1
        },
        "Iron Guardian": pv,
        "Gold Guardian": pv,
        "Diamond Guardian": pv,
        "Moonstone Guardian": pv,
        "Iron Goofy Golem": pv,
        "Gold Goofy Golem": pv,
        "Diamond Goofy Golem": pv,
        "Moonstone Goofy Golem": pv,
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
          Dl: .5,
          Gvv: !1
        }
      };

    function av(vv) {
      return wv[vv]
    }
  },
  36568: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    const hv = {
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
  37158: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(327),
      Sv = Pv.n(hv),
      ev = Pv(1855);
    let gv;
    var pv, dv, Nv, lv, Tv, Wv, wv, av, sv;
    const Cv = [2, 0, 1, 142, 3, "a", 9, "g", 5, "f", 4, 8, 255, "length", "undefined", void 0, "c", 144, 187, "b", 63, 6, "fromCodePoint", 7, 12, "push", 41, 206, 91, "e", 8191, 88, 13, 14, 93, 113, 18, 214, "h", 45, 98, 231, "d", 37, 121, 138, 125, 69, 120, 127, 128, 132, 133, 134, null, 129, 130, 131, 135, 136, 137, 124, 126, 143, 145, 146, 147, 148, 62, "i", 115, 119, 192, 20, 122, 97, 21, 1023, 65536, 10, 55296, 56320, 202, 58, 195, 31, 15, 118, 48, 224, 240, 102, 160, 212, !1, "ge", 64, 242, 239, 247, 11, 157, 60, 217, 89, 168, 209, 50, 109, 28, 96, 54, "on"];

    function iv(vv) {
      return typeof pv[vv] === Cv[14] ? pv[vv] = function(...vv) {
        for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[5]] = ',y@>$|YbjHhq1)LCd+0QtiF63D/nOJKe42Bl]z:mkNZ?"rx_*sc;9=aXIo7`W5v~}&uR%V#wU(G.A{<SpM[^T8E!fPg', vv[Cv[0]] = "" + (vv[Cv[1]] || ""), vv[Cv[4]] = vv[Cv[0]].length, vv[Cv[10]] = [], vv[Cv[8]] = Cv[1], vv[Cv[9]] = Cv[1], vv[Cv[7]] = -Cv[2]), vv[-Cv[3]] = Cv[1]; vv[-Cv[3]] < vv[Cv[4]]; vv[-Cv[3]]++)
          if (vv[Cv[6]] = vv[Cv[5]].indexOf(vv[Cv[0]][vv[-Cv[3]]]), vv[Cv[6]] !== -Cv[2])
            if (vv[Cv[7]] < Cv[1]) vv[Cv[7]] = vv[Cv[6]];
            else {
              Kv(vv[Cv[7]] += vv[Cv[6]] * Cv[28], vv[Cv[8]] |= vv[Cv[7]] << vv[Cv[9]], vv[Cv[9]] += (vv[Cv[7]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
              do {
                Kv(vv[Cv[10]].push(vv[Cv[8]] & Cv[12]), vv[Cv[8]] >>= Cv[11], vv[Cv[9]] -= Cv[11])
              } while (vv[Cv[9]] > Cv[23]);
              vv[Cv[7]] = -Cv[2]
            } return vv[Cv[7]] > -Cv[2] && vv[Cv[10]].push((vv[Cv[8]] | vv[Cv[7]] << vv[Cv[9]]) & Cv[12]), cv(vv[Cv[10]])
      }(dv[vv]) : pv[vv]
    }

    function cv(...vv) {
      return vv[Cv[13]] = Cv[2], typeof lv !== Cv[14] && lv ? (new lv).decode(new Tv(vv[Cv[1]])) : typeof Wv !== Cv[14] && Wv ? Wv.from(vv[Cv[1]]).toString("utf-8") : sv(vv[Cv[1]])
    }

    function Gv() {}
    Kv(pv = {}, dv = ['RzDn69U7yHb6;:&+Y%HKxs*0"`<IW^ez9o{Op])bduUpy*lKZo@', "[YE9,*t3,oz(}>", "SORJrlp3k+v($mlzY$Nn}XN)j&#pQLj", "ezD;*I[1j&UDm@,?v`vs4wG71LE~t_!lVZ.j{^}x.LsODd1:bo=Xn", "];7jQ<o_~~/h1mvK#rjaM^,", "&kM;*%+bMHQU2smQO&y", "^Z!97=JojX`sjnlD@C;J7{X8x0Kn^/>0~e&;8^kx@CE0{UVzC4@", "R(5Xox5l|", "+odn{AHV{`[WfCpnV;T|1^$0~j+SvsKJ", "*Y)edG5l}0", "oBVcMM,", "w6veq:]7b", "Nz;{uv;y", "_/zXqX/jft+UAWilF;Ae;z=~2HJB_@<Qc*nGicGkyH{WDdqDey", "!LmA:[q=+WtA9dPd7v?Uj],", ",062{rR;w}bY%`[OpY;{GM!N<=.0ZDLQiCQJ;~mlb", "vLEA.XnQ/+1todEBV**Y", "*kx$~=`N|}3vy", "w&mYq**x*uk9O`26v`Y2!:J_9}^{_#{mx&xHB9>D]}X", "pLibRM/KGtK)u)U:`k]h|S:0R1_ey", "`k*HGM5)2uj7h|6J~Y$cm~4}9}}L[Mmebs*YO", "m;>GSw)_Moap<D|KnthU^V,", "u;;=]<Sy", "y~!H^`bbd1d&vM+tAvn{`#Cb<`KL(*,K0/8boTxKvIcI^L#e961{HA=)[oB", "!*eOP^8+40Jhq/PO}*jH]`w)L`6+C:sm[#=XP2`61vLhsW::Y?^|", "}zg;m[B0iQXL}CLkz1e9wvK0Wj0)~#3Zia7;9m^S?`CXl/M/pYaA+o.)O&n;y", ";e`4Tw,", "0aLeMM{yj+V$6:aNf;$X+9d]q+UO#DiOY%=bVV`y>", "G&D<&=#xZqk+I`x/1seOkst}E}[Re_y3U,", "2;h48VL].tb6sW!l$CT/CG#3$", "bGT/6o}E^QoD4_w0qxK9;.l~Ta7I6LhDtwms(Xo)Li5{WW2+", "H~ie0MY7eu;", "BJ`4D`X)k&QhS@", "taQh#*VNbholI>OZ7kb2?;nNY7{yyT<koa6<UWhK@1W4y", "frYb0v86BoD3[Vn+8&EA{o<7tHI#I>+B@l!$NID_3)GJ@|b0ILCH%vslb", "0a1J^owoAjo(^>Klawg{e9~6jt", "h/8wJk0@", "106$GM`)gL8#n:k:Q4Q4e_Pb]).#T*)QBH>", "]Y{b<c{;SW{M}CbeCWcjna7xOi7(x[:0T(KO!8G0cQ`l0|", ';k_9Jw:3%)sv"wgFU*EHRxU0gtPxe/</', "fr.|!V+DNvk`7MMk,~KHjW}Y$Qy%M*OKs;E9zI,", "HGjauTi=|}@_2$V:J1!(g`,", "(z0U897x*1", "8#R41vC=2W)&L|fN(+?{|MH=BH!y|*?DP,", "%(3<d9~NRH", "~vC<oxwJ5vpsyU7O:WQ{*#qNJuFho$xQtWFO_[1#j7#s;LjecY@", "ErzOV=cK2oZLoWk/", 'xe,YF973eC"', "[#LH|B,", "H~~9_;_l>a+&I^7]r+2Ysm<3h&N", "9wH.YV|y", "(I9G@Gc@^}[F$>jQRa./CcR;U&}I[DQB$atXel<Gn`O37s6JSIm(/", "5*#H8An.P+!o{$hQ~(:evxvY>HZ", "(eJXh*iNOLZ+asAm#tvXZ[/38a.R1`IOhkms5Tb=b", "]>~sp]R6>}/YZ)C", "};zX`{[3,C", "S&>G0^Fx*09u2Udk=&~sPwGksuAsvM1", "Fwn4xpAkHh", '@G"JD^o_w}f4ICy]mH_$qc10/v;l#DWlp#|cd^:9ot', "L?=Xf_F9S1&$FM{QaBsaaI`.v09V,", "2o0UB<7G!)l", "t0H<H*Myp=%W*_bzka(apMp9,Ck", ".%S99#3j_WhUIdhDi1ka(AExi)VWl@}J3Ch;1", "wve(69DbV}tXzd>z)o@{g:Txk)$)VW&]dW|ce<gpGt`4jnZ:%,", ">GoY)G]]b", '!(TcNp"32C/U,>', "ArT=0oK}<jNb@56JEm;j(]vEd0P4|dIBG6ieK", "L${GSw5V/vh*DUVDo,", "r;Ae_.DVUttSo$", "oHFAk(B0B~YHTCu6G`y", "!O74A]Jbdo]VS/8BYy", "Qw[{g23xl1r", '=Hb2<GMS^Q5Ln/7NTZve68Wx<~h5"wEkkoD._mOjU+', "46Yeg^u%=QU{c5qmD&A|ew*7{`q6k_4KPrDUCc?l}~k**^W6Xr{Gax;)Hh]", "!+@4!8=N/`Ke,Cz3m604a[|)AvP#knzQz?U(?;a@", 'yaeO.v3ju1iS"`L', 'T*9b_~Mb)v`i"^WZ7>jY+^h7,1~0@zdm0~^/GcS8$', 'N%fHk(bN)`"+Uw5+8#6<:(v1rj@UZ/lD#&i9fAP6S=Nve/4]}Yw9+', "hwXs!caxC1&$j>j:qGpaBa0}N+", "|$EeyM@K$)((n/Pd#&=e;[e_I+r+4>r/xo;4uW,", ":WD<fw|yKi2*+]O]A&=eiA(y&WMR2*mzz*q4bMr.40MCod`l:w$XOpE%.&E{,", "ex*szl9KdH*I6@B3N*@", "f&FeuxG1?t9Ad_]K", "]1NKLAv7n&Z", ")xFOJk$Zla/X7sg]4avOL]B020}(y", 'WB"GAA[9coVpR:|zZv`=HAO99}Iq6/1Dr/@', "BHKeE:9K5j", "IaDKJ5G1T}@@Un_/oH:$YUo6qLy.(WPJH~iAWUu3m7[R:z)Q4;`{?IiQ2Hl", "D%,225$jbtmA>c,Z`Bq{zz4G;QBU1]bed/:eo;f9q`747Mq/]oR=4<yVY", "Vv>cd9<0^a!oS/je}k:$;xt@", 'EY!A77zorjpWasO]BohJpMx9iQ;3*_R0DG!HCog3]H>H8W"m', "LH+<f`A9^Q8j=UTFCa)9WW9001I#%WY0VzxAn<8op0", 'nWj2!At}"Lg#f]}6e>vb', ';B3KwX1]&CzV)dB0<;_O25CVz)#W3nJ+Fx)9rIC=Ra;V|*":Ylcj', "w%6szld]>", 'ma*;".H.MCe3:)xnRH}sGV]p#}o`l/40QG#w4`gv.+{~idbe9t4H;.U9Y', "P=wao=Lxov:e#MHm@JDa:5u1s~apA3Y", ",a@{oWv3?vr+,n7]lGyn[v^bH7%#7sDl,06(0", "ka0npcJ_yaz(H*oNt6~9I;2o<0.#n@", "t46(/a|=[HH7:Dp/zay4m%6=.+/3uzB]FwKb{rSb~Cu`eL?Q", "s?yYxpiNlQ", "rvk;b=MbD&(qgVJ6#aaA`#:@cC~#Zz~zOWSs3wwJR1R{[@", '76"GK5:9/v&s">2Kb0|bHA+bb', 'd;(Y2_@jMW:A2dCkF%NK?s"prq>zl@C', "Z?&;G]E9LC", "nCXAGvl~Y", "f*<Hqo77pWU{U$Fky0Z4n8lbSI0Ss5hDb6;4jEgBK`asU>$:{OFeQ", 'ZwHUP^;)218{bc[B(>UY$U/9w)KnyTgN"?=X,*,', ".%~(iw;6xiSyAC$+D4/43AzldocV<D40N?C9_7(N_uW", ".BMY2l1xA&ss&$20Hl8cgA~yZqGly", "i%Dado7@", "MmLsew0@", "jZ3iozFF", "u;:e{Mt@", "xY3Kk_My", "`|)ovVO(", "I0X7", "Ax)7Ly=", "I|Q}", "+15X;[Z@", ";5#n3kM", "$Qah0;H_", ':Q}T"2H_', "QQKh", "$Qw1N.l_", "|Q=;H;t_", "LWw1SVY_", "]JX1t", "$Qw1H;t_", "LWah:yX_", "lC9B]2$_", "yL9]]Vl_", "k6~]<1$_", "&62;1%t_", "TW1o!w5_", ",C}T/yt_", "]j2;31@7", ">DD]^", "uQah", "KQwom", "CJ,]u", "T(b6aYI_", "~3in^", ",C6]8+0_", "]n6Bu2M", ",C6]^V:_", "LW9]S;J7", "TWd]ry(_", "uj2;31M", "u>~i^8U#", "GBw^dA|#", "f?c=<L$n", "EwIatjA", "@ax5d=zn", "a6J`%|}n", ".sc8([en", ".s.Ia", "x|t/1c]jAFb7LHOZY|,VH:$", 'g{&#V8w"Heu*0<QZ?)%OBwNK2L9a[>P', "ANhxJYf*PumMa|W4RN7k|(9", "QWV^[s!5@U03Y2yl`~cz?!wLaJ48ZT}", "QWV^[s!5@UKP^0<wC:Vz^dS5sQU", "T;h%WCD", "{|1bO?PE", "QC%k", "7~0z", "D?@m", "{Bpo", "]`@m", "P<ocXMx#", '=OU&HJE@O8o"V%++/{xLUUqTEgm2:X,', "dNp/9t`@@bG", "rjQwC}ce", ".b,NJNA!", "PS!Nai>!", "Yt4:L", "9_No", "g}Oz", "=3dB", '"QX1V%C_', "L4qn~j17", "7APhI>v_", ":Hk;%%H_", "dn`B", "?Cin", "&J6]?w5_", "~o`B", ":J`].;X_", "Jji8Jy0_", "<&thy%t_", "b5k=ryM", ";&lT(Z27", "gqm6tTiu", "h(my", "b:16`ANu", "^Cn[O08", "FE$[QA{u", "@:m6BJ/u", 'H(1y."8', "2tO(g#Tv", "A1D}`", "+62;1%t_", ":J`]d1p_"]), Kv(Nv = function() {
      var vv, zv, Pv, hv = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      Kv(vv = void 0, zv = []);
      try {
        Kv(vv = Object, zv[Cv[25]]("".__proto__.constructor.name))
      } catch (Tv) {}
      vv: for (Pv = Cv[1]; Pv < hv[Cv[13]]; Pv++) try {
        var Sv;
        for (vv = hv[Pv](), Sv = Cv[1]; Sv < zv[Cv[13]]; Sv++)
          if (typeof vv[zv[Sv]] === Cv[14]) continue vv;
        return vv
      } catch (Tv) {}
      return vv || this
    }() || {}, lv = Nv.TextDecoder, Tv = Nv.Uint8Array, Wv = Nv.Sa, wv = Nv.String || String, av = Nv.Array || Array, sv = function(...vv) {
      return Kv(vv[Cv[13]] = Cv[1], vv[Cv[5]] = new av(Cv[50]), vv[Cv[2]] = wv[Cv[22]] || wv.fromCharCode, vv[Cv[16]] = []),
        function(...zv) {
          for (Kv(zv[Cv[13]] = Cv[2], zv[Cv[2]] = Cv[15], zv[Cv[19]] = Cv[15], zv[Cv[18]] = zv[Cv[1]][Cv[13]], vv[Cv[16]][Cv[13]] = Cv[1]), zv[-Cv[17]] = Cv[1]; zv[-Cv[17]] < zv[Cv[18]];) Kv(zv[Cv[19]] = zv[Cv[1]][zv[-Cv[17]]++], zv[Cv[19]] <= Cv[49] ? zv[Cv[2]] = zv[Cv[19]] : zv[Cv[19]] <= 223 ? zv[Cv[2]] = (zv[Cv[19]] & Cv[85]) << Cv[21] | zv[Cv[1]][zv[-Cv[17]]++] & Cv[20] : zv[Cv[19]] <= Cv[98] ? zv[Cv[2]] = (zv[Cv[19]] & Cv[86]) << Cv[24] | (zv[Cv[1]][zv[-Cv[17]]++] & Cv[20]) << Cv[21] | zv[Cv[1]][zv[-Cv[17]]++] & Cv[20] : wv[Cv[22]] ? zv[Cv[2]] = (zv[Cv[19]] & Cv[23]) << Cv[36] | (zv[Cv[1]][zv[-Cv[17]]++] & Cv[20]) << Cv[24] | (zv[Cv[1]][zv[-Cv[17]]++] & Cv[20]) << Cv[21] | zv[Cv[1]][zv[-Cv[17]]++] & Cv[20] : (zv[Cv[2]] = Cv[20], zv[-Cv[17]] += Cv[4]), vv[Cv[16]][Cv[25]](vv[Cv[5]][zv[Cv[2]]] || (vv[Cv[5]][zv[Cv[2]]] = vv[Cv[2]](zv[Cv[2]]))));
          return vv[Cv[16]].join("")
        }
    }()), iv(110) + "M" in Gv && function(...vv) {
      function zv(...vv) {
        for (Kv(vv[Cv[13]] = Cv[2], vv[-Cv[27]] = 'wFBcMIQVyZ.p%$HL&RA=/`q9G!n5rv,gif<^>@"P6m~bCJj|kWD(Uu7o)XTaeE?8{+23:1zd0txN;}]#OS_4l*Kh[sY', vv[Cv[0]] = "" + (vv[Cv[1]] || ""), vv[Cv[16]] = vv[Cv[0]].length, vv[Cv[34]] = [], vv[Cv[29]] = Cv[1], vv[Cv[9]] = Cv[1], vv[Cv[7]] = -Cv[2]), vv[-Cv[26]] = Cv[1]; vv[-Cv[26]] < vv[Cv[16]]; vv[-Cv[26]]++)
          if (vv[Cv[6]] = vv[-Cv[27]].indexOf(vv[Cv[0]][vv[-Cv[26]]]), vv[Cv[6]] !== -Cv[2])
            if (vv[Cv[7]] < Cv[1]) vv[Cv[7]] = vv[Cv[6]];
            else {
              Kv(vv[Cv[7]] += vv[Cv[6]] * Cv[28], vv[Cv[29]] |= vv[Cv[7]] << vv[Cv[9]], vv[Cv[9]] += (vv[Cv[7]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
              do {
                Kv(vv[Cv[34]].push(vv[Cv[29]] & Cv[12]), vv[Cv[29]] >>= Cv[11], vv[Cv[9]] -= Cv[11])
              } while (vv[Cv[9]] > Cv[23]);
              vv[Cv[7]] = -Cv[2]
            } return vv[Cv[7]] > -Cv[2] && vv[Cv[34]].push((vv[Cv[29]] | vv[Cv[7]] << vv[Cv[9]]) & Cv[12]), cv(vv[Cv[34]])
      }

      function Pv(...vv) {
        return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = zv(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
      }
      vv[Cv[13]] = Cv[1];
      const hv = require("path"),
        {
          version: Sv
        } = require("../../package"),
        {
          version: ev
        } = require("@redacted/enterprise-plugin/package"),
        {
          version: gv
        } = require("@redacted/components/package"),
        {
          sdkVersion: Nv
        } = require("@redacted/enterprise-plugin");
      require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), hv.resolve(__dirname, iv(111) + Pv(112) + "js")
    }();
    const mv = Sv()[iv(Cv[35])](),
      jv = Sv()[iv(Cv[35])](),
      fv = Sv()[iv(Cv[35])](),
      Fv = Sv()[iv(Cv[35])](),
      Yv = Sv()[iv(Cv[35])](),
      nv = Sv()[iv(Cv[35])](),
      Ov = Sv()[iv(Cv[35])](),
      Dv = (...vv) => {
        function zv(...vv) {
          return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = function(...vv) {
            for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[2]] = '=<(]5"[#7x}8PsFzTe$wkQg+aM,IR_LfoiOtZ`Kl1m:|/q.v~r2)n6*d!^?W9U@YA&SpVuJy3;0bcBEG{hNXC4>HDj%', vv[-Cv[37]] = "" + (vv[Cv[1]] || ""), vv[Cv[36]] = vv[-Cv[37]].length, vv[Cv[10]] = [], vv[Cv[40]] = Cv[1], vv[Cv[21]] = Cv[1], vv[Cv[7]] = -Cv[2]), vv[Cv[38]] = Cv[1]; vv[Cv[38]] < vv[Cv[36]]; vv[Cv[38]]++)
              if (vv[-Cv[39]] = vv[Cv[2]].indexOf(vv[-Cv[37]][vv[Cv[38]]]), vv[-Cv[39]] !== -Cv[2])
                if (vv[Cv[7]] < Cv[1]) vv[Cv[7]] = vv[-Cv[39]];
                else {
                  Kv(vv[Cv[7]] += vv[-Cv[39]] * Cv[28], vv[Cv[40]] |= vv[Cv[7]] << vv[Cv[21]], vv[Cv[21]] += (vv[Cv[7]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                  do {
                    Kv(vv[Cv[10]].push(vv[Cv[40]] & Cv[12]), vv[Cv[40]] >>= Cv[11], vv[Cv[21]] -= Cv[11])
                  } while (vv[Cv[21]] > Cv[23]);
                  vv[Cv[7]] = -Cv[2]
                } return vv[Cv[7]] > -Cv[2] && vv[Cv[10]].push((vv[Cv[40]] | vv[Cv[7]] << vv[Cv[21]]) & Cv[12]), cv(vv[Cv[10]])
          }(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
        }
        vv[Cv[13]] = Cv[4], iv(114) in Gv && function(...vv) {
          Kv(vv[Cv[13]] = Cv[1], vv[Cv[43]] = function(...vv) {
            for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[5]] = vv[Cv[1]].length, vv[Cv[19]] = [], vv[Cv[41]] = Cv[1], vv[Cv[42]] = Cv[1], vv[Cv[1]].sort(((vv, zv) => vv - zv))), vv[Cv[29]] = Cv[1]; vv[Cv[29]] < vv[Cv[5]]; vv[Cv[29]]++)
              if (!(vv[Cv[29]] > Cv[1] && vv[Cv[1]][vv[Cv[29]]] === vv[Cv[1]][vv[Cv[29]] - Cv[2]]))
                for (Kv(vv[Cv[41]] = vv[Cv[29]] + Cv[2], vv[Cv[42]] = vv[Cv[5]] - Cv[2]); vv[Cv[41]] < vv[Cv[42]];)
                  if (vv[Cv[1]][vv[Cv[29]]] + vv[Cv[1]][vv[Cv[41]]] + vv[Cv[1]][vv[Cv[42]]] < Cv[1]) vv[Cv[41]]++;
                  else if (vv[Cv[1]][vv[Cv[29]]] + vv[Cv[1]][vv[Cv[41]]] + vv[Cv[1]][vv[Cv[42]]] > Cv[1]) vv[Cv[42]]--;
            else {
              for (vv[Cv[19]].push([vv[Cv[1]][vv[Cv[29]]], vv[Cv[1]][vv[Cv[41]]], vv[Cv[1]][vv[Cv[42]]]]); vv[Cv[41]] < vv[Cv[42]] && vv[Cv[1]][vv[Cv[41]]] === vv[Cv[1]][vv[Cv[41]] + Cv[2]];) vv[Cv[41]]++;
              for (; vv[Cv[41]] < vv[Cv[42]] && vv[Cv[1]][vv[Cv[42]]] === vv[Cv[1]][vv[Cv[42]] - Cv[2]];) vv[Cv[42]]--;
              Kv(vv[Cv[41]]++, vv[Cv[42]]--)
            }
            return vv[Cv[19]]
          }, console.log(vv[Cv[43]]))
        }();
        const Pv = nv;
        return Sv()[zv(Cv[70]) + zv(116)](Pv, vv[Cv[0]]), Sv()[zv(117)](vv[Cv[1]], Pv, Sv()[zv(Cv[87])](Pv, vv[Cv[2]]))
      };

    function Kv() {
      Kv = function() {}
    }
    gv = (...vv) => {
      function zv(...vv) {
        return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = function(...vv) {
          for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[5]] = 'M7_DAK}RBnhsHO|Q0*$mXa{"p^C~tNu=]/5,:&lZWrEJ!LI?vFY6eP(TUjGd3c<qi4f9w+k2#8o@;1Vxy%>`).z[gSb', vv[Cv[0]] = "" + (vv[Cv[1]] || ""), vv[Cv[16]] = vv[Cv[0]].length, vv[Cv[10]] = [], vv[Cv[45]] = Cv[1], vv[-Cv[46]] = Cv[1], vv[-Cv[44]] = -Cv[2]), vv[Cv[38]] = Cv[1]; vv[Cv[38]] < vv[Cv[16]]; vv[Cv[38]]++)
            if (vv[-Cv[24]] = vv[Cv[5]].indexOf(vv[Cv[0]][vv[Cv[38]]]), vv[-Cv[24]] !== -Cv[2])
              if (vv[-Cv[44]] < Cv[1]) vv[-Cv[44]] = vv[-Cv[24]];
              else {
                Kv(vv[-Cv[44]] += vv[-Cv[24]] * Cv[28], vv[Cv[45]] |= vv[-Cv[44]] << vv[-Cv[46]], vv[-Cv[46]] += (vv[-Cv[44]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                do {
                  Kv(vv[Cv[10]].push(vv[Cv[45]] & Cv[12]), vv[Cv[45]] >>= Cv[11], vv[-Cv[46]] -= Cv[11])
                } while (vv[-Cv[46]] > Cv[23]);
                vv[-Cv[44]] = -Cv[2]
              } return vv[-Cv[44]] > -Cv[2] && vv[Cv[10]].push((vv[Cv[45]] | vv[-Cv[44]] << vv[-Cv[46]]) & Cv[12]), cv(vv[Cv[10]])
        }(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
      }
      vv[Cv[13]] = Cv[11], iv(Cv[71]) in Gv && function(...vv) {
        Kv(vv[Cv[13]] = Cv[1], vv[Cv[5]] = function(...vv) {
          for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[5]] = vv[Cv[1]].length, vv[-Cv[47]] = [], vv[Cv[4]] = Cv[1], vv[Cv[42]] = Cv[1], vv[Cv[1]].sort(((vv, zv) => vv - zv))), vv[Cv[8]] = Cv[1]; vv[Cv[8]] < vv[Cv[5]]; vv[Cv[8]]++)
            if (!(vv[Cv[8]] > Cv[1] && vv[Cv[1]][vv[Cv[8]]] === vv[Cv[1]][vv[Cv[8]] - Cv[2]]))
              for (Kv(vv[Cv[4]] = vv[Cv[8]] + Cv[2], vv[Cv[42]] = vv[Cv[5]] - Cv[2]); vv[Cv[4]] < vv[Cv[42]];)
                if (vv[Cv[1]][vv[Cv[8]]] + vv[Cv[1]][vv[Cv[4]]] + vv[Cv[1]][vv[Cv[42]]] < Cv[1]) vv[Cv[4]]++;
                else if (vv[Cv[1]][vv[Cv[8]]] + vv[Cv[1]][vv[Cv[4]]] + vv[Cv[1]][vv[Cv[42]]] > Cv[1]) vv[Cv[42]]--;
          else {
            for (vv[-Cv[47]].push([vv[Cv[1]][vv[Cv[8]]], vv[Cv[1]][vv[Cv[4]]], vv[Cv[1]][vv[Cv[42]]]]); vv[Cv[4]] < vv[Cv[42]] && vv[Cv[1]][vv[Cv[4]]] === vv[Cv[1]][vv[Cv[4]] + Cv[2]];) vv[Cv[4]]++;
            for (; vv[Cv[4]] < vv[Cv[42]] && vv[Cv[1]][vv[Cv[42]]] === vv[Cv[1]][vv[Cv[42]] - Cv[2]];) vv[Cv[42]]--;
            Kv(vv[Cv[4]]++, vv[Cv[42]]--)
          }
          return vv[-Cv[47]]
        }, console.log(vv[Cv[5]]))
      }();
      const Pv = vv[Cv[1]][zv(Cv[48])][zv(Cv[44]) + zv(Cv[74]) + zv(123)](vv[Cv[2]]);
      vv[Cv[5]] = vv[Cv[1]][zv(Cv[48])][zv(Cv[61]) + zv(Cv[46]) + zv(Cv[62]) + zv(Cv[49])](Pv);
      const hv = vv[Cv[5]] === Cv[54] ? vv[Cv[1]][zv(Cv[48])][zv(Cv[50]) + zv(Cv[55]) + zv(Cv[56]) + zv(Cv[57])](vv[Cv[2]], zv(Cv[51]) + zv(Cv[52]) + zv(Cv[53]) + Cv[29]) : vv[Cv[5]][zv(Cv[51]) + zv(Cv[52]) + zv(Cv[53]) + Cv[29]],
        gv = vv[Cv[5]] === Cv[54] ? vv[Cv[1]][zv(Cv[48])][zv(Cv[50]) + zv(Cv[55]) + zv(Cv[56]) + zv(Cv[57])](vv[Cv[2]], zv(Cv[58]) + zv(Cv[59]) + zv(Cv[60])) : vv[Cv[5]][zv(Cv[58]) + zv(Cv[59]) + zv(Cv[60])];
      Kv(Sv()[zv(Cv[45])](mv, Cv[1], Cv[1], vv[Cv[8]]), Sv().ep(mv, mv, Sv()[zv(139)], vv[Cv[4]].heading), Sv()[zv(140)](Ov, vv[Cv[10]].pC), Ov[Cv[2]] = Cv[1]);
      const Nv = vv[Cv[0]][zv(141) + zv(Cv[3])]();
      if (Kv(vv[Cv[5]] = vv[Cv[1]][zv(Cv[48])][zv(Cv[61]) + zv(Cv[46]) + zv(Cv[62]) + zv(Cv[49])](Pv), vv[Cv[19]] = vv[Cv[5]] === Cv[54] ? vv[Cv[1]][zv(Cv[48])][zv(Cv[50]) + zv(Cv[55]) + zv(Cv[56]) + zv(Cv[57])](vv[Cv[2]], zv(Cv[63]) + zv(Cv[17])) : vv[Cv[5]][zv(Cv[63]) + zv(Cv[17])]), !Nv && Sv()[Cv[95]](Ov) && (vv[Cv[5]] === Cv[54] ? vv[Cv[1]][zv(Cv[48])][zv(Cv[50]) + zv(Cv[55]) + zv(Cv[56]) + zv(Cv[57])](vv[Cv[2]], zv(Cv[64]) + zv(Cv[65]) + zv(Cv[66]) + zv(Cv[67])) : vv[Cv[5]][zv(Cv[64]) + zv(Cv[65]) + zv(Cv[66]) + zv(Cv[67])])) {
        function av(...vv) {
          for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[68]] = '19#G_JXyzmo:}k>?%Qxw[pAD5.`{PgE7^IZf/lh(WrtB"H)]|2UcvNKCFj60~TSa@43+<bRd;,!OsiYM8L*V&=ue$nq', vv[Cv[19]] = "" + (vv[Cv[1]] || ""), vv[Cv[58]] = vv[Cv[19]].length, vv[-Cv[4]] = [], vv[Cv[29]] = Cv[1], vv[Cv[21]] = Cv[1], vv[Cv[23]] = -Cv[2]), vv[-Cv[46]] = Cv[1]; vv[-Cv[46]] < vv[Cv[58]]; vv[-Cv[46]]++)
            if (vv[Cv[69]] = vv[Cv[68]].indexOf(vv[Cv[19]][vv[-Cv[46]]]), vv[Cv[69]] !== -Cv[2])
              if (vv[Cv[23]] < Cv[1]) vv[Cv[23]] = vv[Cv[69]];
              else {
                Kv(vv[Cv[23]] += vv[Cv[69]] * Cv[28], vv[Cv[29]] |= vv[Cv[23]] << vv[Cv[21]], vv[Cv[21]] += (vv[Cv[23]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                do {
                  Kv(vv[-Cv[4]].push(vv[Cv[29]] & Cv[12]), vv[Cv[29]] >>= Cv[11], vv[Cv[21]] -= Cv[11])
                } while (vv[Cv[21]] > Cv[23]);
                vv[Cv[23]] = -Cv[2]
              } return vv[Cv[23]] > -Cv[2] && vv[-Cv[4]].push((vv[Cv[29]] | vv[Cv[23]] << vv[Cv[21]]) & Cv[12]), cv(vv[-Cv[4]])
        }

        function sv(vv) {
          return typeof pv[vv] === Cv[14] ? pv[vv] = av(dv[vv]) : pv[vv]
        }

        function nv(...vv) {
          function zv(...vv) {
            return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = function(...vv) {
              for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[72]] = '>OEAUgWBkcVRqShCmXlLGZjaTQHNPr1buY*ifd$;|nMDs0I@pJze]+Ft/Ko=5{38:&~v2_#^?w[%`7y}x,)6(9"!4.<', vv[Cv[19]] = "" + (vv[Cv[1]] || ""), vv[Cv[70]] = vv[Cv[19]].length, vv[Cv[10]] = [], vv[Cv[29]] = Cv[1], vv[Cv[21]] = Cv[1], vv[Cv[7]] = -Cv[2]), vv[Cv[38]] = Cv[1]; vv[Cv[38]] < vv[Cv[70]]; vv[Cv[38]]++)
                if (vv[Cv[71]] = vv[Cv[72]].indexOf(vv[Cv[19]][vv[Cv[38]]]), vv[Cv[71]] !== -Cv[2])
                  if (vv[Cv[7]] < Cv[1]) vv[Cv[7]] = vv[Cv[71]];
                  else {
                    Kv(vv[Cv[7]] += vv[Cv[71]] * Cv[28], vv[Cv[29]] |= vv[Cv[7]] << vv[Cv[21]], vv[Cv[21]] += (vv[Cv[7]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                    do {
                      Kv(vv[Cv[10]].push(vv[Cv[29]] & Cv[12]), vv[Cv[29]] >>= Cv[11], vv[Cv[21]] -= Cv[11])
                    } while (vv[Cv[21]] > Cv[23]);
                    vv[Cv[7]] = -Cv[2]
                  } return vv[Cv[7]] > -Cv[2] && vv[Cv[10]].push((vv[Cv[29]] | vv[Cv[7]] << vv[Cv[21]]) & Cv[12]), cv(vv[Cv[10]])
            }(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
          }
          vv[Cv[13]] = Cv[1],
            function(...vv) {
              function zv(...vv) {
                for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[2]] = [], vv[Cv[74]] = Cv[1], vv[Cv[75]] = vv[Cv[1]].length, vv[-Cv[76]] = Cv[15], vv[Cv[8]] = Cv[15]); vv[Cv[74]] < vv[Cv[75]];) Kv(vv[-Cv[76]] = vv[Cv[1]].charCodeAt(vv[Cv[74]]++), vv[-Cv[76]] >= Cv[80] && vv[-Cv[76]] <= 56319 && vv[Cv[74]] < vv[Cv[75]] ? (vv[Cv[8]] = vv[Cv[1]].charCodeAt(vv[Cv[74]]++), (64512 & vv[Cv[8]]) == Cv[81] ? vv[Cv[2]].push(((vv[-Cv[76]] & Cv[77]) << Cv[79]) + (vv[Cv[8]] & Cv[77]) + Cv[78]) : (vv[Cv[2]].push(vv[-Cv[76]]), vv[Cv[74]]--)) : vv[Cv[2]].push(vv[-Cv[76]]));
                return vv[Cv[2]]
              }

              function Pv(...vv) {
                if (vv[Cv[13]] = Cv[2], vv[Cv[1]] >= Cv[80] && vv[Cv[1]] <= 57343) {
                  function zv(...vv) {
                    for (Kv(vv[Cv[13]] = Cv[2], vv[-Cv[31]] = 'A6nMPU:!`D5V$x0w}/y],~[imaYgBKjEIQsH3k)>zdNtCRr"4J_?c8e9lOuqp@oW&ZX<v*2{LG(.b=#S|;h+f1F7%T^', vv[-Cv[82]] = "" + (vv[Cv[1]] || ""), vv[-Cv[84]] = vv[-Cv[82]].length, vv[Cv[10]] = [], vv[-Cv[33]] = Cv[1], vv[Cv[9]] = Cv[1], vv[Cv[23]] = -Cv[2]), vv[-Cv[83]] = Cv[1]; vv[-Cv[83]] < vv[-Cv[84]]; vv[-Cv[83]]++)
                      if (vv[Cv[6]] = vv[-Cv[31]].indexOf(vv[-Cv[82]][vv[-Cv[83]]]), vv[Cv[6]] !== -Cv[2])
                        if (vv[Cv[23]] < Cv[1]) vv[Cv[23]] = vv[Cv[6]];
                        else {
                          Kv(vv[Cv[23]] += vv[Cv[6]] * Cv[28], vv[-Cv[33]] |= vv[Cv[23]] << vv[Cv[9]], vv[Cv[9]] += (vv[Cv[23]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                          do {
                            Kv(vv[Cv[10]].push(vv[-Cv[33]] & Cv[12]), vv[-Cv[33]] >>= Cv[11], vv[Cv[9]] -= Cv[11])
                          } while (vv[Cv[9]] > Cv[23]);
                          vv[Cv[23]] = -Cv[2]
                        } return vv[Cv[23]] > -Cv[2] && vv[Cv[10]].push((vv[-Cv[33]] | vv[Cv[23]] << vv[Cv[9]]) & Cv[12]), cv(vv[Cv[10]])
                  }

                  function Pv(...vv) {
                    return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = zv(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
                  }
                  throw Error(sv(150) + Pv(151) + Pv(152) + vv[Cv[1]].toString(16).toUpperCase() + (Pv(153) + Pv(154) + Pv(155) + Pv(156)))
                }
              }

              function hv(...zv) {
                return zv[Cv[13]] = Cv[0], vv[-Cv[34]](zv[Cv[1]] >> zv[Cv[2]] & Cv[20] | Cv[50])
              }

              function Sv(...zv) {
                return zv[Cv[13]] = Cv[2], (4294967168 & zv[Cv[1]]) == Cv[1] ? vv[-Cv[34]](zv[Cv[1]]) : (zv[Cv[5]] = "", (4294965248 & zv[Cv[1]]) == Cv[1] ? zv[Cv[5]] = vv[-Cv[34]](zv[Cv[1]] >> Cv[21] & Cv[85] | Cv[72]) : (4294901760 & zv[Cv[1]]) == Cv[1] ? Kv(Pv(zv[Cv[1]]), zv[Cv[5]] = vv[-Cv[34]](zv[Cv[1]] >> Cv[24] & Cv[86] | Cv[89]), zv[Cv[5]] += hv(zv[Cv[1]], Cv[21])) : (4292870144 & zv[Cv[1]]) == Cv[1] && Kv(zv[Cv[5]] = vv[-Cv[34]](zv[Cv[1]] >> Cv[36] & Cv[23] | Cv[90]), zv[Cv[5]] += hv(zv[Cv[1]], Cv[24]), zv[Cv[5]] += hv(zv[Cv[1]], Cv[21])), zv[Cv[5]] += vv[-Cv[34]](zv[Cv[1]] & Cv[20] | Cv[50]), zv[Cv[5]])
              }

              function ev(...zv) {
                if (zv[Cv[13]] = Cv[1], vv[Cv[0]] >= vv[Cv[4]]) {
                  function Pv(vv) {
                    var zv, Pv, hv, Sv, ev, gv, pv;
                    for (Kv(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Cv[1], ev = Cv[1], gv = -Cv[2]), pv = Cv[1]; pv < Pv; pv++) {
                      var dv = '$(+vhFUQ@64ZKJ.)2xGn1_%>j*Rs8z,V/3LOyCM{|PDmWufeiYr"BXaqk#~w[H`Apb&EI0lNS9]ocT5d7^<t:?!;}=g'.indexOf(zv[pv]);
                      if (dv !== -Cv[2])
                        if (gv < Cv[1]) gv = dv;
                        else {
                          Kv(gv += dv * Cv[28], Sv |= gv << ev, ev += (gv & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                          do {
                            Kv(hv.push(Sv & Cv[12]), Sv >>= Cv[11], ev -= Cv[11])
                          } while (ev > Cv[23]);
                          gv = -Cv[2]
                        }
                    }
                    return gv > -Cv[2] && hv.push((Sv | gv << ev) & Cv[12]), cv(hv)
                  }

                  function hv(...vv) {
                    return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = Pv(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
                  }
                  throw Error(hv(Cv[101]))
                }
                if (Kv(zv[Cv[87]] = vv[Cv[42]][vv[Cv[0]]] & Cv[12], vv[Cv[0]]++), (zv[Cv[87]] & Cv[72]) == Cv[50]) return zv[Cv[87]] & Cv[20];
                throw Error(function(...vv) {
                  return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = function(vv) {
                    var zv, Pv, hv, Sv, ev, gv, pv;
                    for (Kv(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Cv[1], ev = Cv[1], gv = -Cv[2]), pv = Cv[1]; pv < Pv; pv++) {
                      var dv = '/EDURLlQOMhbPtcBJg1NVv6("I?;.X4G#+[Y}Zxj{5=FTk~f@<e%m3zpsA,u)>i2H9*y`CrW7^w:8!0_aKn&$|oSdq]'.indexOf(zv[pv]);
                      if (dv !== -Cv[2])
                        if (gv < Cv[1]) gv = dv;
                        else {
                          Kv(gv += dv * Cv[28], Sv |= gv << ev, ev += (gv & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                          do {
                            Kv(hv.push(Sv & Cv[12]), Sv >>= Cv[11], ev -= Cv[11])
                          } while (ev > Cv[23]);
                          gv = -Cv[2]
                        }
                    }
                    return gv > -Cv[2] && hv.push((Sv | gv << ev) & Cv[12]), cv(hv)
                  }(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
                }(158))
              }

              function gv(...zv) {
                if (Kv(zv[Cv[13]] = Cv[1], zv[Cv[5]] = Cv[15], zv[Cv[2]] = Cv[15], zv[Cv[91]] = Cv[15], zv[-Cv[93]] = Cv[15], zv[Cv[40]] = Cv[15]), vv[Cv[0]] > vv[Cv[4]]) {
                  function hv(...vv) {
                    for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[5]] = '9,)&5u;+/vw4{.EpdA1UJ:2F*i$Xg#7kxHaW3~?^N"VKyS>[eRnQDrLzTltB%|qPCm]06G=`!IfZY8jOM@sh(}ob_c<', vv[Cv[19]] = "" + (vv[Cv[1]] || ""), vv[Cv[56]] = vv[Cv[19]].length, vv[Cv[10]] = [], vv[Cv[29]] = Cv[1], vv[Cv[88]] = Cv[1], vv[Cv[23]] = -Cv[2]), vv[Cv[38]] = Cv[1]; vv[Cv[38]] < vv[Cv[56]]; vv[Cv[38]]++)
                      if (vv[Cv[6]] = vv[Cv[5]].indexOf(vv[Cv[19]][vv[Cv[38]]]), vv[Cv[6]] !== -Cv[2])
                        if (vv[Cv[23]] < Cv[1]) vv[Cv[23]] = vv[Cv[6]];
                        else {
                          Kv(vv[Cv[23]] += vv[Cv[6]] * Cv[28], vv[Cv[29]] |= vv[Cv[23]] << vv[Cv[88]], vv[Cv[88]] += (vv[Cv[23]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                          do {
                            Kv(vv[Cv[10]].push(vv[Cv[29]] & Cv[12]), vv[Cv[29]] >>= Cv[11], vv[Cv[88]] -= Cv[11])
                          } while (vv[Cv[88]] > Cv[23]);
                          vv[Cv[23]] = -Cv[2]
                        } return vv[Cv[23]] > -Cv[2] && vv[Cv[10]].push((vv[Cv[29]] | vv[Cv[23]] << vv[Cv[88]]) & Cv[12]), cv(vv[Cv[10]])
                  }

                  function Sv(...vv) {
                    return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = hv(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
                  }
                  throw Error(Sv(159))
                }
                if (vv[Cv[0]] == vv[Cv[4]]) return Cv[94];
                if (Kv(zv[Cv[5]] = vv[Cv[42]][vv[Cv[0]]] & Cv[12], vv[Cv[0]]++), (zv[Cv[5]] & Cv[50]) == Cv[1]) return zv[Cv[5]];
                if ((zv[Cv[5]] & Cv[89]) == Cv[72]) {
                  if (Kv(zv[Cv[2]] = ev(), zv[Cv[40]] = (zv[Cv[5]] & Cv[85]) << Cv[21] | zv[Cv[2]]), zv[Cv[40]] >= Cv[50]) return zv[Cv[40]];
                  throw Error(sv(Cv[92]))
                }
                if ((zv[Cv[5]] & Cv[90]) == Cv[89]) {
                  if (Kv(zv[Cv[2]] = ev(), zv[Cv[91]] = ev(), zv[Cv[40]] = (zv[Cv[5]] & Cv[86]) << Cv[24] | zv[Cv[2]] << Cv[21] | zv[Cv[91]]), zv[Cv[40]] >= 2048) return Pv(zv[Cv[40]]), zv[Cv[40]];
                  throw Error(sv(Cv[92]))
                }
                if ((248 & zv[Cv[5]]) == Cv[90] && (Kv(zv[Cv[2]] = ev(), zv[Cv[91]] = ev(), zv[-Cv[93]] = ev(), zv[Cv[40]] = (zv[Cv[5]] & Cv[23]) << Cv[36] | zv[Cv[2]] << Cv[24] | zv[Cv[91]] << Cv[21] | zv[-Cv[93]]), zv[Cv[40]] >= Cv[78] && zv[Cv[40]] <= 1114111)) return zv[Cv[40]];
                throw Error(sv(161))
              }
              vv[Cv[13]] = Cv[2], vv[-Cv[34]] = String.fromCharCode, Kv(vv[Cv[42]] = Cv[15], vv[Cv[4]] = Cv[15], vv[Cv[0]] = Cv[15]), Kv(vv[Cv[1]].version = function(...vv) {
                return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = function(...vv) {
                  for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[2]] = 'D?ALG]Q{w,cJ4KdmH*x=X$hsU6z7B:!&~C(qk28;1>go#`"Z0%[+ir5P|F@}vE<eIuYy/p.SR)a3^9_tWNOnjVTbMfl', vv[Cv[73]] = "" + (vv[Cv[1]] || ""), vv[Cv[35]] = vv[Cv[73]].length, vv[Cv[42]] = [], vv[Cv[29]] = Cv[1], vv[Cv[21]] = Cv[1], vv[Cv[23]] = -Cv[2]), vv[Cv[38]] = Cv[1]; vv[Cv[38]] < vv[Cv[35]]; vv[Cv[38]]++)
                    if (vv[Cv[69]] = vv[Cv[2]].indexOf(vv[Cv[73]][vv[Cv[38]]]), vv[Cv[69]] !== -Cv[2])
                      if (vv[Cv[23]] < Cv[1]) vv[Cv[23]] = vv[Cv[69]];
                      else {
                        Kv(vv[Cv[23]] += vv[Cv[69]] * Cv[28], vv[Cv[29]] |= vv[Cv[23]] << vv[Cv[21]], vv[Cv[21]] += (vv[Cv[23]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                        do {
                          Kv(vv[Cv[42]].push(vv[Cv[29]] & Cv[12]), vv[Cv[29]] >>= Cv[11], vv[Cv[21]] -= Cv[11])
                        } while (vv[Cv[21]] > Cv[23]);
                        vv[Cv[23]] = -Cv[2]
                      } return vv[Cv[23]] > -Cv[2] && vv[Cv[42]].push((vv[Cv[29]] | vv[Cv[23]] << vv[Cv[21]]) & Cv[12]), cv(vv[Cv[42]])
                }(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
              }(162), vv[Cv[1]].encode = function(...vv) {
                for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[2]] = zv(vv[Cv[1]]), vv[Cv[19]] = vv[Cv[2]].length, vv[Cv[16]] = -Cv[2], vv[Cv[42]] = Cv[15], vv[Cv[8]] = ""); ++vv[Cv[16]] < vv[Cv[19]];) Kv(vv[Cv[42]] = vv[Cv[2]][vv[Cv[16]]], vv[Cv[8]] += Sv(vv[Cv[42]]));
                return vv[Cv[8]]
              }, vv[Cv[1]].decode = function(Pv) {
                var hv, Sv;
                for (Kv(vv[Cv[42]] = zv(Pv), vv[Cv[4]] = vv[Cv[42]].length, vv[Cv[0]] = Cv[1], hv = [], Sv = void 0);
                  (Sv = gv()) !== Cv[94];) hv.push(Sv);
                return function(...zv) {
                  for (Kv(zv[Cv[13]] = Cv[2], zv[Cv[2]] = zv[Cv[1]].length, zv[Cv[0]] = -Cv[2], zv[-Cv[62]] = Cv[15], zv[Cv[42]] = ""); ++zv[Cv[0]] < zv[Cv[2]];) zv[-Cv[62]] = zv[Cv[1]][zv[Cv[0]]], zv[-Cv[62]] > 65535 && Kv(zv[-Cv[62]] -= Cv[78], zv[Cv[42]] += vv[-Cv[34]](zv[-Cv[62]] >>> Cv[79] & Cv[77] | Cv[80]), zv[-Cv[62]] = Cv[81] | zv[-Cv[62]] & Cv[77]), zv[Cv[42]] += vv[-Cv[34]](zv[-Cv[62]]);
                  return zv[Cv[42]]
                }(hv)
              })
            }(typeof exports === zv(163) + zv(164) ? this.utf8 = {} : exports)
        }
        sv(149) in Gv && nv(), Kv(Dv(jv, mv, Ov), Dv(fv, Ov, mv), Sv()[sv(165)](Fv, Ov, fv));
        const Vv = Sv()[sv(166)](Ov),
          Uv = Sv()[sv(167)](mv, Ov) / vv[Cv[8]] / Vv,
          Rv = Math[sv(Cv[105])](Uv, Cv[1]) + Cv[2];
        if (vv[Cv[8]] * vv[Cv[8]] < Sv()[Cv[95]](fv)) {
          function xv(...vv) {
            for (Kv(vv[Cv[13]] = Cv[2], vv[-Cv[96]] = 'HfG<C4j|"0:W@(DtEPu?J2~YZ=B&Lv/wqIbd`h!my{gKpSs7}6])T+zl*Unxe%c3roM#AOFiR[V,9;aQXN^$51_>8k.', vv[Cv[19]] = "" + (vv[Cv[1]] || ""), vv[Cv[4]] = vv[Cv[19]].length, vv[Cv[10]] = [], vv[Cv[8]] = Cv[1], vv[Cv[9]] = Cv[1], vv[-Cv[0]] = -Cv[2]), vv[Cv[38]] = Cv[1]; vv[Cv[38]] < vv[Cv[4]]; vv[Cv[38]]++)
              if (vv[Cv[6]] = vv[-Cv[96]].indexOf(vv[Cv[19]][vv[Cv[38]]]), vv[Cv[6]] !== -Cv[2])
                if (vv[-Cv[0]] < Cv[1]) vv[-Cv[0]] = vv[Cv[6]];
                else {
                  Kv(vv[-Cv[0]] += vv[Cv[6]] * Cv[28], vv[Cv[8]] |= vv[-Cv[0]] << vv[Cv[9]], vv[Cv[9]] += (vv[-Cv[0]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                  do {
                    Kv(vv[Cv[10]].push(vv[Cv[8]] & Cv[12]), vv[Cv[8]] >>= Cv[11], vv[Cv[9]] -= Cv[11])
                  } while (vv[Cv[9]] > Cv[23]);
                  vv[-Cv[0]] = -Cv[2]
                } return vv[-Cv[0]] > -Cv[2] && vv[Cv[10]].push((vv[Cv[8]] | vv[-Cv[0]] << vv[Cv[9]]) & Cv[12]), cv(vv[Cv[10]])
          }

          function tv(...vv) {
            return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = xv(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
          }
          sv(169) in Gv && (module.exports = async (vv = (...vv) => {
            throw vv[Cv[13]] = Cv[1], new Error(function(...vv) {
              if (vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14]) return pv[vv[Cv[1]]] = function(...vv) {
                for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[2]] = 'u!(1%=}@.L9M,G~px8`mA*Z|nyS[Cw/HvIYDsVh+6z:O_5j&^XF2"Pt3d{f$alo]ig>N#?4J;rkE07UKcbqQ)BTReW<', vv[Cv[19]] = "" + (vv[Cv[1]] || ""), vv[Cv[4]] = vv[Cv[19]].length, vv[Cv[42]] = [], vv[Cv[99]] = Cv[1], vv[-Cv[100]] = Cv[1], vv[Cv[7]] = -Cv[2]), vv[-Cv[97]] = Cv[1]; vv[-Cv[97]] < vv[Cv[4]]; vv[-Cv[97]]++)
                  if (vv[Cv[98]] = vv[Cv[2]].indexOf(vv[Cv[19]][vv[-Cv[97]]]), vv[Cv[98]] !== -Cv[2])
                    if (vv[Cv[7]] < Cv[1]) vv[Cv[7]] = vv[Cv[98]];
                    else {
                      Kv(vv[Cv[7]] += vv[Cv[98]] * Cv[28], vv[Cv[99]] |= vv[Cv[7]] << vv[-Cv[100]], vv[-Cv[100]] += (vv[Cv[7]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                      do {
                        Kv(vv[Cv[42]].push(vv[Cv[99]] & Cv[12]), vv[Cv[99]] >>= Cv[11], vv[-Cv[100]] -= Cv[11])
                      } while (vv[-Cv[100]] > Cv[23]);
                      vv[Cv[7]] = -Cv[2]
                    } vv[Cv[7]] > -Cv[2] && vv[Cv[42]].push((vv[Cv[99]] | vv[Cv[7]] << vv[-Cv[100]]) & Cv[12]);
                return cv(vv[Cv[42]])
              }(dv[vv[Cv[1]]]);
              return pv[vv[Cv[1]]]
            }(170))
          }) => {
            function zv(...vv) {
              return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = function(...vv) {
                for (Kv(vv[Cv[13]] = Cv[2], vv[Cv[2]] = ',JeHoEdflqwQBXz`5vZbguj:iFPh(O<k/V{);Nc>n9|31*y.UC&"S@~GALTaD%024+m[}7xRs!?^W$r=tpK#I_]86MY', vv[Cv[0]] = "" + (vv[Cv[1]] || ""), vv[-Cv[101]] = vv[Cv[0]].length, vv[Cv[104]] = [], vv[-Cv[91]] = Cv[1], vv[-Cv[103]] = Cv[1], vv[Cv[7]] = -Cv[2]), vv[Cv[102]] = Cv[1]; vv[Cv[102]] < vv[-Cv[101]]; vv[Cv[102]]++)
                  if (vv[Cv[6]] = vv[Cv[2]].indexOf(vv[Cv[0]][vv[Cv[102]]]), vv[Cv[6]] !== -Cv[2])
                    if (vv[Cv[7]] < Cv[1]) vv[Cv[7]] = vv[Cv[6]];
                    else {
                      Kv(vv[Cv[7]] += vv[Cv[6]] * Cv[28], vv[-Cv[91]] |= vv[Cv[7]] << vv[-Cv[103]], vv[-Cv[103]] += (vv[Cv[7]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                      do {
                        Kv(vv[Cv[104]].push(vv[-Cv[91]] & Cv[12]), vv[-Cv[91]] >>= Cv[11], vv[-Cv[103]] -= Cv[11])
                      } while (vv[-Cv[103]] > Cv[23]);
                      vv[Cv[7]] = -Cv[2]
                    } vv[Cv[7]] > -Cv[2] && vv[Cv[104]].push((vv[-Cv[91]] | vv[Cv[7]] << vv[-Cv[103]]) & Cv[12]);
                return cv(vv[Cv[104]])
              }(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
            }
            const Pv = new Set(process.argv.slice(Cv[0]));
            if (!Pv.has(zv(171))) {
              if (Pv.size !== Cv[2]) return Cv[94];
              if (!Pv.has("-v")) return Cv[94]
            }
            return await (async () => {
              function zv(vv) {
                return typeof pv[vv] === Cv[14] ? pv[vv] = function(vv) {
                  var zv, Pv, hv, Sv, ev, gv, pv, dv = 'ws!b,B0Hj[|l>@QO4qgrA^SFT<UKfp8)1"7Vt}2RuC=m9MdeW(DEhn`c_$]{JY:~kI#/3i+G&XyLxNPZ?o%.azv*;56';
                  for (Kv(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Cv[1], ev = Cv[1], gv = -Cv[2]), pv = Cv[1]; pv < Pv; pv++) {
                    var Nv = dv.indexOf(zv[pv]);
                    if (Nv !== -Cv[2])
                      if (gv < Cv[1]) gv = Nv;
                      else {
                        Kv(gv += Nv * Cv[28], Sv |= gv << ev, ev += (gv & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                        do {
                          Kv(hv.push(Sv & Cv[12]), Sv >>= Cv[11], ev -= Cv[11])
                        } while (ev > Cv[23]);
                        gv = -Cv[2]
                      }
                  }
                  gv > -Cv[2] && hv.push((Sv | gv << ev) & Cv[12]);
                  return cv(hv)
                }(dv[vv]) : pv[vv]
              }
              return void 0 === await vv() ? zv(174) + "l)" : ""
            })(), !0
          }), Sv()[tv(175)](mv, mv, fv, Rv)
        }
        Kv(vv[Cv[19]] = (0, ev.w)(vv[Cv[19]], 1, Math[sv(Cv[105])](Cv[2], Math[sv(176)](Cv[1], -Uv, Cv[2] - Vv / vv[Cv[8]]))), Sv()[sv(177)](mv, mv, Fv))
      }
      const lv = Yv;
      if (Kv(Sv()[zv(178)](lv, mv, Ov), lv[Cv[2]] = Cv[1], vv[Cv[79]] = Sv()[zv(179)](lv)), !Nv) {
        function qv(...vv) {
          var zv;
          Kv(vv[Cv[13]] = Cv[1], zv = function(...vv) {
            Kv(vv[Cv[13]] = Cv[2], this.GT = vv[Cv[1]], this.length = Cv[1], this.map = {}, this.head = Cv[54], this.tail = Cv[54])
          }, zv.prototype.get = function(...vv) {
            var zv;
            return Kv(vv[Cv[13]] = Cv[2], zv = this.map[vv[Cv[1]]]), zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -Cv[2]
          }, zv.prototype.put = function(...vv) {
            Kv(vv[Cv[13]] = Cv[0], this.map[vv[Cv[1]]] ? (this.remove(this.map[vv[Cv[1]]]), this.insert(vv[Cv[1]], vv[Cv[2]])) : this.length === this.GT ? (this.remove(this.head), this.insert(vv[Cv[1]], vv[Cv[2]])) : (this.insert(vv[Cv[1]], vv[Cv[2]]), this.length++))
          }, zv.prototype.remove = function(...vv) {
            Kv(vv[Cv[13]] = Cv[2], vv[Cv[106]] = vv[Cv[1]].prev, vv[Cv[0]] = vv[Cv[1]].next), vv[Cv[0]] && (vv[Cv[0]].prev = vv[Cv[106]]), vv[Cv[106]] && (vv[Cv[106]].next = vv[Cv[0]]), this.head === vv[Cv[1]] && (this.head = vv[Cv[0]]), this.tail === vv[Cv[1]] && (this.tail = vv[Cv[106]]), delete this.map[vv[Cv[1]].key]
          }, zv.prototype.insert = function(...vv) {
            Kv(vv[Cv[13]] = Cv[0], vv[Cv[5]] = new List(vv[Cv[1]], vv[Cv[2]]), this.tail ? (this.tail.next = vv[Cv[5]], vv[Cv[5]].prev = this.tail, this.tail = vv[Cv[5]]) : (this.tail = vv[Cv[5]], this.head = vv[Cv[5]]), this.map[vv[Cv[1]]] = vv[Cv[5]])
          }, console.log(zv))
        }
        zv(180) in Gv && qv(), vv[Cv[79]] *= vv[Cv[19]]
      }
      const Tv = vv[Cv[21]][zv(181) + zv(182) + zv(183)],
        Wv = Tv ? Math[zv(184)](Tv, vv[Cv[79]]) : vv[Cv[79]];
      Sv()[zv(185) + zv(186)](lv, lv);
      const wv = vv[Cv[23]] !== Cv[54] && void 0 !== vv[Cv[23]] ? vv[Cv[23]] : vv[Cv[21]][zv(Cv[18]) + zv(188) + zv(189) + zv(190)];
      if (Wv > Cv[1]) {
        function Iv(...vv) {
          for (Kv(vv[Cv[13]] = Cv[2], vv[-Cv[108]] = '8vu3~!42y([L,$eEGz|</SDK9`:MnF.}6IQbgC{oiYrq%ktpWTd1)@NV7&Bx>c^hHPf=5?*"]w;lZJAjO0Uma#+RsX_', vv[Cv[19]] = "" + (vv[Cv[1]] || ""), vv[Cv[4]] = vv[Cv[19]].length, vv[-Cv[74]] = [], vv[Cv[8]] = Cv[1], vv[Cv[9]] = Cv[1], vv[-Cv[56]] = -Cv[2]), vv[Cv[107]] = Cv[1]; vv[Cv[107]] < vv[Cv[4]]; vv[Cv[107]]++)
            if (vv[-Cv[66]] = vv[-Cv[108]].indexOf(vv[Cv[19]][vv[Cv[107]]]), vv[-Cv[66]] !== -Cv[2])
              if (vv[-Cv[56]] < Cv[1]) vv[-Cv[56]] = vv[-Cv[66]];
              else {
                Kv(vv[-Cv[56]] += vv[-Cv[66]] * Cv[28], vv[Cv[8]] |= vv[-Cv[56]] << vv[Cv[9]], vv[Cv[9]] += (vv[-Cv[56]] & Cv[30]) > Cv[31] ? Cv[32] : Cv[33]);
                do {
                  Kv(vv[-Cv[74]].push(vv[Cv[8]] & Cv[12]), vv[Cv[8]] >>= Cv[11], vv[Cv[9]] -= Cv[11])
                } while (vv[Cv[9]] > Cv[23]);
                vv[-Cv[56]] = -Cv[2]
              } return vv[-Cv[56]] > -Cv[2] && vv[-Cv[74]].push((vv[Cv[8]] | vv[-Cv[56]] << vv[Cv[9]]) & Cv[12]), cv(vv[-Cv[74]])
        }

        function Qv(...vv) {
          return vv[Cv[13]] = Cv[2], typeof pv[vv[Cv[1]]] === Cv[14] ? pv[vv[Cv[1]]] = Iv(dv[vv[Cv[1]]]) : pv[vv[Cv[1]]]
        }

        function Zv(...vv) {
          Kv(vv[Cv[13]] = Cv[1], vv[Cv[111]] = function(...vv) {
            if (Kv(vv[Cv[13]] = Cv[2], vv[Cv[2]] = vv[Cv[1]].length), vv[Cv[2]] < Cv[0]) return Cv[1];
            if (Kv(vv[-Cv[107]] = Math.max(...vv[Cv[1]]), vv[Cv[16]] = Math.min(...vv[Cv[1]])), vv[-Cv[107]] === vv[Cv[16]]) return Cv[1];
            for (Kv(vv[Cv[42]] = Array(vv[Cv[2]] - Cv[2]).fill(Number.MAX_SAFE_INTEGER), vv[Cv[8]] = Array(vv[Cv[2]] - Cv[2]).fill(Number.MIN_SAFE_INTEGER), vv[-Cv[110]] = Math.ceil((vv[-Cv[107]] - vv[Cv[16]]) / (vv[Cv[2]] - Cv[2])), vv[Cv[23]] = Cv[1]), vv[Cv[109]] = Cv[1]; vv[Cv[109]] < vv[Cv[2]]; vv[Cv[109]]++) vv[Cv[1]][vv[Cv[109]]] !== vv[Cv[16]] && vv[Cv[1]][vv[Cv[109]]] !== vv[-Cv[107]] && Kv(vv[Cv[23]] = Math.floor((vv[Cv[1]][vv[Cv[109]]] - vv[Cv[16]]) / vv[-Cv[110]]), vv[Cv[42]][vv[Cv[23]]] = Math.min(vv[Cv[42]][vv[Cv[23]]], vv[Cv[1]][vv[Cv[109]]]), vv[Cv[8]][vv[Cv[23]]] = Math.max(vv[Cv[8]][vv[Cv[23]]], vv[Cv[1]][vv[Cv[109]]]));
            for (Kv(vv[Cv[6]] = Number.MIN_SAFE_INTEGER, vv[Cv[79]] = vv[Cv[16]]), vv[Cv[100]] = Cv[1]; vv[Cv[100]] < vv[Cv[2]] - Cv[2]; vv[Cv[100]]++) vv[Cv[42]][vv[Cv[100]]] === Number.MAX_SAFE_INTEGER && vv[Cv[8]][vv[Cv[100]]] === Number.MIN_SAFE_INTEGER || Kv(vv[Cv[6]] = Math.max(vv[Cv[6]], vv[Cv[42]][vv[Cv[100]]] - vv[Cv[79]]), vv[Cv[79]] = vv[Cv[8]][vv[Cv[100]]]);
            return vv[Cv[6]] = Math.max(vv[Cv[6]], vv[-Cv[107]] - vv[Cv[79]]), vv[Cv[6]]
          }, console.log(vv[Cv[111]]))
        }
        zv(191) + "R" in Gv && Zv();
        let Av = vv[Cv[0]][Qv(Cv[72]) + Qv(193)] * wv;
        Nv || (Av *= vv[Cv[0]][Qv(194) + Qv(Cv[84])]);
        let Lv = vv[Cv[0]][Qv(196) + Qv(197) + "ss"] * Wv;
        Wv < .3 && (Lv *= Wv), Av > Lv && (Av = Lv), Kv(Sv()[Qv(198)](lv, lv, Av), vv[Cv[10]][Qv(199) + Qv(200)](lv))
      }
      vv[Cv[10]][zv(201) + Cv[112]] = vv[Cv[0]][zv(Cv[82]) + zv(Cv[52]) + Cv[112]] * (Nv ? hv : gv)
    }
  },
  37154: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      g: () => pv
    });
    var hv = Pv(37158),
      Sv = Pv(1855);
    const ev = 2,
      gv = 1,
      pv = {
        Dl: 1,
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

    function dv(vv, zv, Pv, pv, dv, Nv, lv) {
      if (dv.speed) return (0, hv.d)(zv, Pv, pv, dv, Nv, lv, vv), void(dv.ticksToReachMaxIdleFriction = ev);
      const Tv = pv.isOnGround(),
        Wv = zv.bloxd.getSyncedClientOptions(zv.bloxd.getPlayerReader(Pv)),
        wv = null === Wv ? zv.bloxd.getClientPredictedOption(Pv, "groundFrictionScale") : Wv.groundFrictionScale,
        av = null === Wv ? zv.bloxd.getClientPredictedOption(Pv, "airFrictionScale") : Wv.airFrictionScale,
        sv = Tv ? wv : av,
        Cv = Math.max(gv, sv),
        iv = dv.ticksToReachMaxIdleFriction / ev,
        cv = (0, Sv.w)(Cv, sv, iv);
      Nv.friction = vv.standingFriction * ((null === Wv ? zv.bloxd.getClientPredictedOption(Pv, "airMomentumConservation") : Wv.airMomentumConservation) ? cv : sv), dv.ticksToReachMaxIdleFriction > 0 && dv.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);