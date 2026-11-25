export const id = 230;
export const ids = [230];
export const modules = {
  38874: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => KG
    });
    var wG = ZG(188),
      SG = ZG(38053);
    const LG = 1.2,
      yG = {
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
        Ck: .5,
        RbG: !1
      },
      kG = {
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
        Ck: .5,
        RbG: !1
      },
      UG = {
        physicsBodyDimensions: {
          width: wG.d.Hd,
          height: wG.d.td
        },
        hitBoxDimensions: {
          width: wG.d.Hd + .4,
          height: wG.d.td + .6
        },
        eyeHeight: wG.d.td * wG.d.playerEyeToHeightRatio,
        rideHeight: wG.d.td - .3,
        Ck: .5,
        RbG: !1
      },
      YG = {
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
        Ck: .5,
        RbG: !1
      },
      VG = {
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
        Ck: .5,
        RbG: !1
      },
      pG = {
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
        Ck: .5,
        RbG: !1
      },
      fG = {
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
        Ck: .5,
        RbG: !1
      },
      QG = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: wG.d.Hd,
            height: wG.d.td
          },
          hitBoxDimensions: {
            width: wG.d.Hd + .4,
            height: wG.d.td + .6
          },
          eyeHeight: wG.d.td * wG.d.playerEyeToHeightRatio,
          rideHeight: wG.d.td - .1,
          Ck: SG.f.Ck,
          RbG: !0
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
        },
        Camel: {
          modelScale: LG,
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
        },
        "Cave Golem": yG,
        "Draugr Zombie": {
          ...UG,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": UG,
        "Frost Golem": yG,
        "Frost Zombie": {
          ...UG,
          defaultPose: "zombie"
        },
        "Frost Skeleton": UG,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: wG.d.Hd,
            height: wG.d.td
          },
          hitBoxDimensions: {
            width: wG.d.Hd + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Ck: .5,
          RbG: !1
        },
        Wolf: YG,
        Bear: VG,
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
          Ck: .5,
          RbG: !1
        },
        Stag: pG,
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
          Ck: .5,
          RbG: !1
        },
        Gorilla: fG,
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
          Ck: .5,
          RbG: !1
        },
        "Draugr Huntress": UG,
        "Magma Golem": yG,
        "Spirit Golem": yG,
        "Spirit Wolf": YG,
        "Spirit Bear": VG,
        "Spirit Stag": pG,
        "Spirit Gorilla": fG,
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: wG.d.Hd,
            height: wG.d.td
          },
          hitBoxDimensions: {
            width: wG.d.Hd + .4,
            height: wG.d.td + .6
          },
          eyeHeight: wG.d.td * wG.d.playerEyeToHeightRatio,
          rideHeight: wG.d.td - .1,
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: wG.d.Hd,
            height: wG.d.td
          },
          hitBoxDimensions: {
            width: wG.d.Hd + .4,
            height: wG.d.td + .6
          },
          eyeHeight: wG.d.td * wG.d.playerEyeToHeightRatio,
          rideHeight: wG.d.td - .1,
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
        },
        Zombie: {
          ...UG,
          defaultPose: "zombie"
        },
        Skeleton: UG,
        Mummy: {
          ...UG,
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
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
          Ck: .5,
          RbG: !1
        },
        "Iron Guardian": kG,
        "Gold Guardian": kG,
        "Diamond Guardian": kG,
        "Moonstone Guardian": kG,
        "Iron Goofy Golem": kG,
        "Gold Goofy Golem": kG,
        "Diamond Goofy Golem": kG,
        "Moonstone Goofy Golem": kG,
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
          Ck: .5,
          RbG: !1
        }
      };

    function KG(GG) {
      return QG[GG]
    }
  },
  37420: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    const wG = {
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
  38056: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(364),
      SG = ZG.n(wG),
      LG = ZG(1873);
    let yG;
    var kG, UG, YG, VG, pG, fG, QG, KG, hG;
    const dG = [1, "b", 0, 133, 3, 154, 7, 5, 83, 4, 8, 255, "length", 74, "d", 124, "undefined", void 0, "c", 163, 25, 18, 119, 63, 6, "fromCodePoint", 12, "push", "a", 95, "h", "i", "g", 91, 60, "f", 8191, 88, 13, 14, 138, 54, 171, 33, 2, 185, 197, 9, 236, 86, 175, 111, 112, 45, 15, 46, 117, 87, 100, 135, 107, 208, null, 118, 120, "e", 114, 115, 116, 121, 122, 123, 127, 128, 134, 136, 137, "GL", 101, 52, 102, 170, !1, !0, 142, 139, 223, 109, 20, 106, 84, 245, 103, 157, 146, 224, 33554432, 67108864, 239, "on"];

    function JG(...GG) {
      return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = function(...GG) {
        for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = 'A{BIHRCiOKpgDVZjUx37!#%f.}^41d?s)]h~wm0EWn|*J,tGa8To>y6$vk&Su+(:"=_eQc9YbF<Xq;zr`L/5[lNM@P2', GG[dG[1]] = "" + (GG[dG[2]] || ""), GG[dG[4]] = GG[dG[1]].length, GG[dG[9]] = [], GG[dG[7]] = dG[2], GG[dG[8]] = dG[2], GG[dG[6]] = -dG[0]), GG[-dG[3]] = dG[2]; GG[-dG[3]] < GG[dG[4]]; GG[-dG[3]]++)
          if (GG[dG[5]] = GG[dG[0]].indexOf(GG[dG[1]][GG[-dG[3]]]), GG[dG[5]] !== -dG[0])
            if (GG[dG[6]] < dG[2]) GG[dG[6]] = GG[dG[5]];
            else {
              IG(GG[dG[6]] += GG[dG[5]] * dG[33], GG[dG[7]] |= GG[dG[6]] << GG[dG[8]], GG[dG[8]] += (GG[dG[6]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
              do {
                IG(GG[dG[9]].push(GG[dG[7]] & dG[11]), GG[dG[7]] >>= dG[10], GG[dG[8]] -= dG[10])
              } while (GG[dG[8]] > dG[6]);
              GG[dG[6]] = -dG[0]
            } return GG[dG[6]] > -dG[0] && GG[dG[9]].push((GG[dG[7]] | GG[dG[6]] << GG[dG[8]]) & dG[11]), rG(GG[dG[9]])
      }(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
    }

    function rG(...GG) {
      return GG[dG[12]] = dG[0], typeof VG !== dG[16] && VG ? (new VG).decode(new pG(GG[dG[2]])) : typeof fG !== dG[16] && fG ? fG.from(GG[dG[2]]).toString("utf-8") : hG(GG[dG[2]])
    }

    function zG() {}
    IG(kG = {}, UG = ["u6:H_t5d.=Mt{u_.O35;n`A", "]W@K$/I}/k44%R;Ebg?H9rV}*xX`6&uwPyQYL0(D&xF9_cG^", "dKe)Za:~(OE>BLI33{", "B3*b/,in.xtFW4Bwu!kC:<skIu/)DY}f4W6Hd>A", "Au|d6;^N8Ksqab,4b(Fo?z#i>62<^TY}EY/OCaViqZ_t{", "H<>y%qen^Z%qCRq0E6{)UYE7=kY`.Ha42Iud}0z.m6XdS9nE0(($0W&B", 'Y(X<Rhf78_CGH5"w)uQY)SC?=3=>Paemyft$X50./kX{{', "C:7<bwoiK$Z(#wQ3`mrK$m_tBK^=jZ2%R~86p0Rcn=K&&}[4LA", "Rj{o=E3wP(#c&Vn}MA", "zSv8iT${XvE(I^S1fKc<`5b?rj", "_hXR|9A", "^*Vs1YJ&5kp={", "ZC}oD<:~JOgo9c;7UD,<T8E{R", "1uD;`$vQs#k1OENU~f!pJXg},g%pzcF};,;ilqvQz3!mL`M~]6)K5cx{", ",(t>}kY:^ZqHQjqE[,m<uyliS!Xv|}j^hk$>^5A", "n=UzBL;ka_1=Bmsf}tT4$yZw}Z<8sB", 'k=OCZL3<x:"#<}{?C<vF6m{~G#qdqSJ^]6>sAEmi@VqO~/ohvaLO^0A', ";xO]d+@>!V|`}wBmjj$qpao{", "@=!dJ`W>xDb1B}+|@hHp.5ND|=69&9}1z9RT)>8i.x]r2}Y.}Q8o*FA", '#jys*~^w~DK6KaSfju?$wv.B^S.b.Y%nVucYzw0w5"Eq_}vh5S/;r5,{', "+ZOCpqxd2gTZITcm4Q.?2FAOG:c3JS1~)f=C:t1?c6%!!4{?L9Pozw`>@VE~{", "<=Qpw~93KZQ9o/Z!{*ys*og{", "qQqyQyEX#Vq:dU2Uo=edU>^w<Zz3O4ew4Q$K!T@.%&quAj4~Bk#pjw}d=K8c{", 'ECg)/0GlC")q@.m}FA', ":=YK46DtID!c6&m77kup", 'Moui"t#d*!!c?^]fOQup', "l|Xd/5Ydl7P7]H~m2v`8Ba^?;S2e?Z1n0=;>zLgn5uK?IT4~GD*b5TN>xk=){", "U:@6O<L~M!#rQ4WsB8})ON8{", "c(D;EF/.`uHh4Zw.SW>p1", '0Y68PzVcw"k;`4D', "*Y&o3wW`q(T1VUl42,r6$o;d^==y=aW0to6>Mz*Grj/974K", '*QpbAuXV@=$FgZ^1=m[R(byltv^&`GB3%kf6fk6NN"~ida9}yWB', "%YJd{rqCBupV@~^1|m(q7", "6Yf?;q1w|ZhZp+Ys>Icp^6yd(3KI&cf~UYIRwWA", '=C<oi<Pd]6p/kH21fCAzzqVn~u1(E9}nnC><VqjGi!W`j4"wNA', "zZMqStrn+ydcp/{*nadp", "L}$1YTdkP&(Z`j?fSKgb!>Vy86BUz8FE%oR>*my:Gy1x~Z<E|Q01#", "hK~b9rln<(M:40xWM1v8^l.<8KJI!GH?!{", "&SEqDqzD@xl:~0e3ZYp)6y!N|ZAzvIP1p<Cst+n7VZ", 'HQkC&["Q`3CBRakdJhZiT[t`36P{PHAx9aA4.S2.4x(H`Y?d', "EYRs>XN<?34oqIZ46xe)[zA", 'tm@KQtGiGDs.bSb^4Y$1v&!<A_~sQ4ZEzmiqHw;d!7"8+HE3YII', "lC%HYrkd`3}&+H", "N1dinFb39&sxWI", '+Kf8Uk0>O!~4cw"?bA', 'n!N>[(ILryk}e/l4/9"oVwA', "X=1dMz>WeKF9Fu>h~<B", ".)HRKrGi=6u8~B", 'O:Y6S&yfe7RK=b61p8;TWGWD1x`gRUo4$,"FxLxy/jy`wH', "/F`C;5qDOVDb3R", ")a1$Nk|?36oiE0R.TKdiyX^w_KqdBRC.^QOXSbw3?3e`o&~xL=SO", "K<N>hlKcJ(?sh8Bm#t{", '$=7<?Yck4!Gq"IW7coWFt+MiXvLtzLMhHkbCFuzCSS,(MB', "GKobur7Lb&V$fZ{*N15;JoRypZ[Dt}D", "QQOzNqW3Sg.xOIw}Xm^)^", "pmrFVTA", "n^:>uE`CwkV!?8Is2gHTVqgc*=/:7Z51EC4)Kw9tZ3", "C)J<WG>&DZAfFb!W)atHT;/tS!^c|&g7O*l^`T%.j3Wpc.7nlA", "i^VpwG_.(:4.E^b}mClik9IyJv>_ka}16K|bRyj}[Kp+FH", "(mSysSP{nZ_FGIps:aYC(;KyR", "YI]o^z7dhkjC$0!4g:o<[TzCR", "hf>dE~^OW!7?1GL4lSwp{t9DqOrL{wC}H3aK{N}7aj", "SWys<T[t,Ohcj5.1nfRimm=oeujXsS3!d*ci^0Xil7jX!wO", 'GKmpE+dG6"N).Yy4H^1;]l^?A:V+Y^&~Ot{', "8k%HO<C?G#vq~IC7$,Ao~z*cXS>F?^ex{:;sqq[Dj#x41SrEbS&y|Ql{", "YZ~):<GnX=d>.G*04{", "kQ}bz0ef/:_tG0c.jYs8&tW.4!8SEByW;mK6*8@``D7o_c/hifgdZwt?}Z", "(m=o4W4~t_<3e9DEG*Qp@Tz>C", 'wkO][5Xn_j#seZ/EVksCpauB<gP"wGIsqsHRxL?D~kn(^m(?z=Xy]6Q.R', "$^[^<crdQ68Z{a_xik{", "?<61:teX`3jf!Yuw&IVpZkA", "*Dd$_(`N4STF+b=s&Z0i$E03P=]I3+sfy,5dU", "[otqi$B.c&7bj4FE=IO?.WQD97CQ4GaW`vxoo96QxjD$*ZSx=A", "R:7p$/$V@=.(!j;7Zm|X/zqtGu,qZRqEvYN>{L~G=3DUTVMW*YNHOq1?[7", "yYa62>E{T:q:}w9.emG8=w@tO=Db3RV7qf2okt%taK", "wjJ;P5WwBD", "B_c<Y$A", '/oU?z,pt`KxIbIe?.o0Fs>m7zyW>sBH}>I%1g(T"36Tvr9W0Kf.z{[V:7K,S{', "AjS)n:)wHK).tV0s!WeO$/DB", "vY{)a8`t/D`jj0.|N=$6#lm7|(;HFbR*WoOo>9#dd#Y%L`5hqmB", "l,G1mFA?R", "!W1dfz&B", "D:e)8Evta:B?9}8Wl9ts}5(.?:X~8HhfzA", "+SyqAaLo{jDr:/W7y!Yqeh>B", "$!Q^|mzCK(^p4BU^!uCqN>XrN&S`=VC.zo4d}SatzO", '}!r1E+Px>"JqnUd|E(N8]Wutl6N;QSI?[!yihz(Nx:eOR[W^vWuyMYA', ")u^dPF_Ch7iUcuC0J=ls#Wh3@VLtlwVEjt~p", "OkJ$rwp>}ZDXu4O}W=5O~8k{ID1>USv1a=?K.G5lfVNe0&#n", ")mud{EA", "sh,<U>7y@&K6{uU^", "nCPC9Lh>ruf4Cm1~@F;i$;!&1x", "C:[;|8%wL:AUAjX0", "uYm>QuI}&Z", "(1sq]+H3uvk`.U}fzx6H7kSca3", "bI!;x(VVLDaFUI", "_o0s;L!B", "aKed1zM{", "F1fZk~q8", '/7cZ@%eq^9Y<;tw!$ipj??N0CX*fO"w!CbI,C$/DE>fU#x$7"7=5j', "2RY1(Wc:9Sk#`inV<[!+33PZChUd@EnV#/seJJoI<(k,xQ`>B~", "2D!V,3[UC76?P$`;;Dm%p^,Av*+=/,lpgKa=n", "I?`A", "g/S%{qnK", "Rs_B", "obSBdp:", "R/,D", "MajqaEo{", "H+YuhRC", 'Z":9#Hwt', '?"l0V|wt', '""F9', 'Z"qU{L!>l', "dwXFr)(%l", '//[u")>Wl', 'Z"qUwHpt', "$f:9?%Et", "Q1KJg|Zt", "%$Kgg8Qt", "RP!gxUZt", ";P|HUWpt", "0fU)Gq+t", "61l0d%pt", "gj|HhUy~", "Neeg4", 'D":9', 'F"q)>', "1/6gD", "0](P:znt", "!hbu4", 'Z"qU{LQt', 's"3HwHpt', "$fqU58zt", "g/EUp", "61Pgko#t", "guPJD|C", "61Pg48?t", "$fKg5H/~", "0f`g@%]t", "Dj|HhUC", "3h`J", "&L1a", "gs/S", "BK1a", "#AnRkk3B", "|PXC1", "fiGS", "(Wbo", 'V"EU8W1t', "LE.79hT~", "~Oc9nN.t", "?wRHWWwt", "`uSJ", "_1bu", ";/Pg_q+t", "!)SJ", "?/SgLHEt", "/jbk/%#t", "x;p9%Wpt", "(+R3@%C", "0|/)E}r~", "?/Sgn7ft", "G^b|", "qox.n]9O", '@/p"~Md', "];K7NOJv", "9AbH?zxv", "wG7DmHDu", "T^s|ho#", "`C}^@$[=", "OsWtl", "oP|HUWpt", "?/Sg`Uat"]), IG(YG = function(...GG) {
      IG(GG[dG[12]] = dG[2], GG[-dG[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], GG[dG[1]] = dG[17], GG[-dG[13]] = []);
      try {
        IG(GG[dG[1]] = Object, GG[-dG[13]][dG[27]]("".__proto__.constructor.name))
      } catch (UG) {}
      GG: for (GG[dG[14]] = dG[2]; GG[dG[14]] < GG[-dG[15]][dG[12]]; GG[dG[14]]++) try {
        for (GG[dG[1]] = GG[-dG[15]][GG[dG[14]]](), GG[-dG[3]] = dG[2]; GG[-dG[3]] < GG[-dG[13]][dG[12]]; GG[-dG[3]]++)
          if (typeof GG[dG[1]][GG[-dG[13]][GG[-dG[3]]]] === dG[16]) continue GG;
        return GG[dG[1]]
      } catch (UG) {}
      return GG[dG[1]] || this
    }() || {}, VG = YG.TextDecoder, pG = YG.Uint8Array, fG = YG.VK, QG = YG.String || String, KG = YG.Array || Array, hG = function(...GG) {
      return IG(GG[dG[12]] = dG[2], GG[dG[28]] = new KG(dG[73]), GG[dG[1]] = QG[dG[25]] || QG.fromCharCode, GG[dG[18]] = []),
        function(...bG) {
          for (IG(bG[dG[12]] = dG[0], bG[-dG[22]] = dG[17], bG[dG[21]] = dG[17], bG[-dG[20]] = bG[dG[2]][dG[12]], GG[dG[18]][dG[12]] = dG[2]), bG[dG[19]] = dG[2]; bG[dG[19]] < bG[-dG[20]];) IG(bG[dG[21]] = bG[dG[2]][bG[dG[19]]++], bG[dG[21]] <= dG[72] ? bG[-dG[22]] = bG[dG[21]] : bG[dG[21]] <= dG[86] ? bG[-dG[22]] = (31 & bG[dG[21]]) << dG[24] | bG[dG[2]][bG[dG[19]]++] & dG[23] : bG[dG[21]] <= dG[98] ? bG[-dG[22]] = (bG[dG[21]] & dG[54]) << dG[26] | (bG[dG[2]][bG[dG[19]]++] & dG[23]) << dG[24] | bG[dG[2]][bG[dG[19]]++] & dG[23] : QG[dG[25]] ? bG[-dG[22]] = (bG[dG[21]] & dG[6]) << dG[21] | (bG[dG[2]][bG[dG[19]]++] & dG[23]) << dG[26] | (bG[dG[2]][bG[dG[19]]++] & dG[23]) << dG[24] | bG[dG[2]][bG[dG[19]]++] & dG[23] : (bG[-dG[22]] = dG[23], bG[dG[19]] += dG[4]), GG[dG[18]][dG[27]](GG[dG[28]][bG[-dG[22]]] || (GG[dG[28]][bG[-dG[22]]] = GG[dG[1]](bG[-dG[22]]))));
          return GG[dG[18]].join("")
        }
    }());
    const EG = SG()[JG(dG[29])](),
      oG = SG()[JG(dG[29])](),
      XG = SG()[JG(dG[29])](),
      uG = SG()[JG(dG[29])](),
      iG = SG()[JG(dG[29])](),
      CG = SG()[JG(dG[29])](),
      WG = SG()[JG(dG[29])](),
      mG = (...GG) => {
        function bG(...GG) {
          return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = function(...GG) {
            for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = ':VKCNcIjBbDPkWfMaLX?5,.F;4ZR$ld3%=n<1g&T6|]/0)#{AzJS[8Qyixwe@UrHo^}7q(vptmsEu!O"~92_>+*Yh`G', GG[dG[1]] = "" + (GG[dG[2]] || ""), GG[dG[18]] = GG[dG[1]].length, GG[dG[14]] = [], GG[-dG[34]] = dG[2], GG[dG[35]] = dG[2], GG[dG[32]] = -dG[0]), GG[dG[30]] = dG[2]; GG[dG[30]] < GG[dG[18]]; GG[dG[30]]++)
              if (GG[dG[31]] = GG[dG[0]].indexOf(GG[dG[1]][GG[dG[30]]]), GG[dG[31]] !== -dG[0])
                if (GG[dG[32]] < dG[2]) GG[dG[32]] = GG[dG[31]];
                else {
                  IG(GG[dG[32]] += GG[dG[31]] * dG[33], GG[-dG[34]] |= GG[dG[32]] << GG[dG[35]], GG[dG[35]] += (GG[dG[32]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
                  do {
                    IG(GG[dG[14]].push(GG[-dG[34]] & dG[11]), GG[-dG[34]] >>= dG[10], GG[dG[35]] -= dG[10])
                  } while (GG[dG[35]] > dG[6]);
                  GG[dG[32]] = -dG[0]
                } return GG[dG[32]] > -dG[0] && GG[dG[14]].push((GG[-dG[34]] | GG[dG[32]] << GG[dG[35]]) & dG[11]), rG(GG[dG[14]])
          }(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
        }
        GG[dG[12]] = dG[4], JG(96) in zG && function(...GG) {
          GG[dG[12]] = dG[2]
        }();
        const ZG = CG;
        return SG()[bG(dG[80]) + bG(dG[92])](ZG, GG[dG[44]]), SG()[bG(104)](GG[dG[2]], ZG, SG()[bG(105)](ZG, GG[dG[0]]))
      };

    function IG() {
      IG = function() {}
    }
    yG = (...GG) => {
      function bG(GG) {
        return typeof kG[GG] === dG[16] ? kG[GG] = function(...GG) {
          for (IG(GG[dG[12]] = dG[0], GG[-dG[55]] = 'C~teOFlIJu9vwrs"#MZ>E:iVa41!p{D3gd+6?;Q&f@B/G$n_.7zP}c]02j=`hAx^bT*KqoR|Yk)yHU8[%WNSXLm,<5(', GG[dG[1]] = "" + (GG[dG[2]] || ""), GG[dG[18]] = GG[dG[1]].length, GG[dG[14]] = [], GG[-dG[54]] = dG[2], GG[dG[24]] = dG[2], GG[dG[57]] = -dG[0]), GG[dG[30]] = dG[2]; GG[dG[30]] < GG[dG[18]]; GG[dG[30]]++)
            if (GG[dG[56]] = GG[-dG[55]].indexOf(GG[dG[1]][GG[dG[30]]]), GG[dG[56]] !== -dG[0])
              if (GG[dG[57]] < dG[2]) GG[dG[57]] = GG[dG[56]];
              else {
                IG(GG[dG[57]] += GG[dG[56]] * dG[33], GG[-dG[54]] |= GG[dG[57]] << GG[dG[24]], GG[dG[24]] += (GG[dG[57]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
                do {
                  IG(GG[dG[14]].push(GG[-dG[54]] & dG[11]), GG[-dG[54]] >>= dG[10], GG[dG[24]] -= dG[10])
                } while (GG[dG[24]] > dG[6]);
                GG[dG[57]] = -dG[0]
              } return GG[dG[57]] > -dG[0] && GG[dG[14]].push((GG[-dG[54]] | GG[dG[57]] << GG[dG[24]]) & dG[11]), rG(GG[dG[14]])
        }(UG[GG]) : kG[GG]
      }
      GG[dG[12]] = dG[10], JG(dG[89]) in zG && function() {
        const GG = require("big-integer");
        class bG {
          static randomPrime(...bG) {
            bG[dG[12]] = dG[0];
            const ZG = GG.one.shiftLeft(bG[dG[2]] - dG[0]),
              wG = GG.one.shiftLeft(bG[dG[2]]).prev();
            for (; dG[83];) {
              let bG = GG.randBetween(ZG, wG);
              if (bG.isProbablePrime(256)) return bG
            }
          }
          static generate(...bG) {
            bG[dG[12]] = dG[0];
            const ZG = GG(65537);
            let wG, SG;
            bG[dG[0]] = dG[17];
            do {
              IG(wG = this.randomPrime(bG[dG[2]] / dG[44]), SG = this.randomPrime(bG[dG[2]] / dG[44]), bG[dG[0]] = GG.lcm(wG.prev(), SG.prev()))
            } while (GG.gcd(ZG, bG[dG[0]]).notEquals(dG[0]) || wG.minus(SG).abs().shiftRight(bG[dG[2]] / dG[44] - dG[58]).isZero());
            return {
              e: ZG,
              n: wG.multiply(SG),
              d: ZG.modInv(bG[dG[0]])
            }
          }
          static encrypt(...bG) {
            return bG[dG[12]] = dG[4], GG(bG[dG[2]]).modPow(bG[dG[44]], bG[dG[0]])
          }
          static decrypt(...bG) {
            return bG[dG[12]] = dG[4], GG(bG[dG[2]]).modPow(bG[dG[0]], bG[dG[44]])
          }
          static encode(...bG) {
            bG[dG[12]] = dG[0];
            const ZG = bG[dG[2]].split("").map((GG => GG.charCodeAt())).join("");
            return GG(ZG)
          }
          static decode(...GG) {
            GG[dG[12]] = dG[0];
            const bG = GG[dG[2]].toString();
            GG[dG[59]] = "";
            for (let ZG = dG[2]; ZG < bG.length; ZG += dG[44]) {
              let wG = Number(bG.substr(ZG, dG[44]));
              wG <= 30 ? (GG[dG[59]] += String.fromCharCode(Number(bG.substr(ZG, dG[4]))), ZG++) : GG[dG[59]] += String.fromCharCode(wG)
            }
            return GG[dG[59]]
          }
        }
        module.exports = bG
      }();
      const ZG = GG[dG[2]][bG(dG[60])][bG(108) + bG(dG[87]) + bG(110)](GG[dG[0]]);
      GG[-dG[61]] = GG[dG[2]][bG(dG[60])][bG(dG[51]) + bG(dG[52]) + bG(113) + "s"](ZG);
      const wG = GG[-dG[61]] === dG[62] ? GG[dG[2]][bG(dG[60])][bG(dG[66]) + bG(dG[67]) + bG(dG[68]) + bG(dG[56])](GG[dG[0]], bG(dG[63]) + bG(dG[22]) + bG(dG[64]) + dG[65]) : GG[-dG[61]][bG(dG[63]) + bG(dG[22]) + bG(dG[64]) + dG[65]],
        yG = GG[-dG[61]] === dG[62] ? GG[dG[2]][bG(dG[60])][bG(dG[66]) + bG(dG[67]) + bG(dG[68]) + bG(dG[56])](GG[dG[0]], bG(dG[69]) + bG(dG[70]) + bG(dG[71])) : GG[-dG[61]][bG(dG[69]) + bG(dG[70]) + bG(dG[71])];
      IG(SG()[bG(dG[15])](EG, dG[2], dG[2], GG[dG[7]]), SG().ck(EG, EG, SG()[bG(125)], GG[dG[4]].heading), SG()[bG(126)](WG, GG[dG[9]].Sd), WG[dG[0]] = dG[2]);
      const YG = GG[dG[44]][bG(dG[72]) + bG(dG[73])]();
      if (IG(GG[-dG[61]] = GG[dG[2]][bG(dG[60])][bG(129) + bG(130) + bG(131) + bG(132)](ZG), GG[dG[47]] = GG[-dG[61]] === dG[62] ? GG[dG[2]][bG(dG[60])][bG(dG[66]) + bG(dG[67]) + bG(dG[68]) + bG(dG[56])](GG[dG[0]], bG(dG[3]) + bG(dG[74])) : GG[-dG[61]][bG(dG[3]) + bG(dG[74])]), !YG && SG()[dG[77]](WG) && (GG[-dG[61]] === dG[62] ? GG[dG[2]][bG(dG[60])][bG(dG[66]) + bG(dG[67]) + bG(dG[68]) + bG(dG[56])](GG[dG[0]], bG(dG[59]) + bG(dG[75]) + bG(dG[76]) + bG(dG[40])) : GG[-dG[61]][bG(dG[59]) + bG(dG[75]) + bG(dG[76]) + bG(dG[40])])) {
        function KG(GG) {
          var bG, ZG, wG, SG, LG, yG, kG;
          for (IG(bG = "" + (GG || ""), ZG = bG.length, wG = [], SG = dG[2], LG = dG[2], yG = -dG[0]), kG = dG[2]; kG < ZG; kG++) {
            var UG = 'wfVmiktroaSZWhvL=,C)P/p&AjKgY(D<74JTH_M`N#qsEe*B:0?UdG$}!I~{RlQ21|";Xz^9yFOb]cn3@>+ux[8.56%'.indexOf(bG[kG]);
            if (UG !== -dG[0])
              if (yG < dG[2]) yG = UG;
              else {
                IG(yG += UG * dG[33], SG |= yG << LG, LG += (yG & dG[36]) > dG[37] ? dG[38] : dG[39]);
                do {
                  IG(wG.push(SG & dG[11]), SG >>= dG[10], LG -= dG[10])
                } while (LG > dG[6]);
                yG = -dG[0]
              }
          }
          return yG > -dG[0] && wG.push((SG | yG << LG) & dG[11]), rG(wG)
        }

        function hG(...GG) {
          return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = KG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
        }
        IG(mG(oG, EG, WG), mG(XG, WG, EG), SG()[bG(dG[85])](uG, WG, XG));
        const CG = SG()[hG(140)](WG),
          FG = SG()[hG(141)](EG, WG) / GG[dG[7]] / CG,
          vG = Math[hG(dG[84])](FG, dG[2]) + dG[0];
        if (GG[dG[7]] * GG[dG[7]] < SG()[dG[77]](XG)) {
          function aG(...GG) {
            for (IG(GG[dG[12]] = dG[0], GG[dG[79]] = 'zYBbfXRVEAC<ue~PU`JTZ>x|$MNd15mS7,%&j;F:n!Is?]@W^k0}=oL2[iy{3G.rKvt_O*4#Q"qaw96pD(l)/h+Hgc8', GG[dG[44]] = "" + (GG[dG[2]] || ""), GG[dG[46]] = GG[dG[44]].length, GG[-dG[50]] = [], GG[dG[65]] = dG[2], GG[dG[78]] = dG[2], GG[dG[32]] = -dG[0]), GG[-dG[9]] = dG[2]; GG[-dG[9]] < GG[dG[46]]; GG[-dG[9]]++)
              if (GG[dG[31]] = GG[dG[79]].indexOf(GG[dG[44]][GG[-dG[9]]]), GG[dG[31]] !== -dG[0])
                if (GG[dG[32]] < dG[2]) GG[dG[32]] = GG[dG[31]];
                else {
                  IG(GG[dG[32]] += GG[dG[31]] * dG[33], GG[dG[65]] |= GG[dG[32]] << GG[dG[78]], GG[dG[78]] += (GG[dG[32]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
                  do {
                    IG(GG[-dG[50]].push(GG[dG[65]] & dG[11]), GG[dG[65]] >>= dG[10], GG[dG[78]] -= dG[10])
                  } while (GG[dG[78]] > dG[6]);
                  GG[dG[32]] = -dG[0]
                } return GG[dG[32]] > -dG[0] && GG[-dG[50]].push((GG[dG[65]] | GG[dG[32]] << GG[dG[78]]) & dG[11]), rG(GG[-dG[50]])
          }

          function cG(...GG) {
            return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = aG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
          }

          function lG(...GG) {
            IG(GG[dG[12]] = dG[2], GG[dG[28]] = function(...bG) {
              return IG(bG[dG[12]] = dG[0], bG[-dG[80]] = []), (bG[dG[2]] === dG[0] || bG[dG[2]] >= dG[9]) && GG[-dG[81]](bG[-dG[80]], [], bG[dG[2]], dG[2]), bG[-dG[80]]
            }, GG[-dG[81]] = function(...bG) {
              for (bG[dG[12]] = dG[9], bG[dG[9]] = bG[dG[4]]; bG[dG[9]] < bG[dG[44]]; bG[dG[9]]++) {
                if (bG[dG[0]].length !== bG[dG[9]]) return;
                for (bG[dG[7]] = dG[2]; bG[dG[7]] < bG[dG[44]]; bG[dG[7]]++) GG[dG[18]](bG[dG[0]], [bG[dG[9]], bG[dG[7]]]) && (IG(bG[dG[0]].push([bG[dG[9]], bG[dG[7]]]), GG[-dG[81]](bG[dG[2]], bG[dG[0]], bG[dG[44]], bG[dG[9]] + dG[0])), bG[dG[0]].length === bG[dG[44]] && bG[dG[2]].push(GG[dG[14]](bG[dG[0]])), bG[dG[0]].pop())
              }
            }, GG[dG[14]] = function(...GG) {
              for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = [], GG[dG[44]] = GG[dG[2]].length), GG[dG[4]] = dG[2]; GG[dG[4]] < GG[dG[44]]; GG[dG[4]]++)
                for (GG[dG[0]][GG[dG[4]]] = "", GG[dG[9]] = dG[2]; GG[dG[9]] < GG[dG[44]]; GG[dG[9]]++) GG[dG[0]][GG[dG[4]]] += GG[dG[2]][GG[dG[4]]][dG[0]] === GG[dG[9]] ? "Q" : ".";
              return GG[dG[0]]
            }, GG[dG[18]] = function(...GG) {
              for (IG(GG[dG[12]] = dG[44], GG[dG[44]] = GG[dG[2]].length), GG[dG[4]] = dG[2]; GG[dG[4]] < GG[dG[44]]; GG[dG[4]]++) {
                if (GG[dG[2]][GG[dG[4]]][dG[2]] === GG[dG[0]][dG[2]] || GG[dG[2]][GG[dG[4]]][dG[0]] === GG[dG[0]][dG[0]]) return dG[82];
                if (Math.abs((GG[dG[2]][GG[dG[4]]][dG[2]] - GG[dG[0]][dG[2]]) / (GG[dG[2]][GG[dG[4]]][dG[0]] - GG[dG[0]][dG[0]])) === dG[0]) return dG[82]
              }
              return dG[83]
            }, console.log(GG[dG[28]]))
          }
          cG(143) + dG[1] in zG && lG(), SG()[cG(144)](EG, EG, XG, vG)
        }
        IG(GG[dG[47]] = (0, LG.x)(GG[dG[47]], 1, Math[hG(dG[84])](dG[0], Math[hG(145)](dG[2], -FG, dG[0] - CG / GG[dG[7]]))), SG()[hG(dG[94])](EG, EG, uG))
      }
      const VG = iG;
      if (IG(SG()[bG(dG[85])](VG, EG, WG), VG[dG[0]] = dG[2], GG[dG[18]] = SG()[bG(147)](VG)), !YG) {
        function jG(...GG) {
          GG[dG[12]] = dG[2]
        }
        bG(148) + "U" in zG && jG(), GG[dG[18]] *= GG[dG[47]]
      }
      const pG = GG[dG[24]][bG(149) + bG(150) + bG(151)],
        fG = pG ? Math[bG(152)](pG, GG[dG[18]]) : GG[dG[18]];
      SG()[bG(153) + bG(dG[5])](VG, VG);
      const QG = GG[dG[6]] !== dG[62] && void 0 !== GG[dG[6]] ? GG[dG[6]] : GG[dG[24]][bG(155) + bG(156) + bG(dG[93]) + bG(158)];
      if (fG > dG[2]) {
        function PG(...GG) {
          for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = '#=v1:4)`|^72UKY;LSQRxyW8_lAu"]htH>Np@3JkXBVq0FCaI[/si9+M.!?%{r,GTDned6ZoEP*f5zO~}&jbw$mg<(c', GG[dG[1]] = "" + (GG[dG[2]] || ""), GG[dG[88]] = GG[dG[1]].length, GG[dG[91]] = [], GG[dG[89]] = dG[2], GG[-dG[90]] = dG[2], GG[dG[6]] = -dG[0]), GG[dG[10]] = dG[2]; GG[dG[10]] < GG[dG[88]]; GG[dG[10]]++)
            if (GG[dG[31]] = GG[dG[0]].indexOf(GG[dG[1]][GG[dG[10]]]), GG[dG[31]] !== -dG[0])
              if (GG[dG[6]] < dG[2]) GG[dG[6]] = GG[dG[31]];
              else {
                IG(GG[dG[6]] += GG[dG[31]] * dG[33], GG[dG[89]] |= GG[dG[6]] << GG[-dG[90]], GG[-dG[90]] += (GG[dG[6]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
                do {
                  IG(GG[dG[91]].push(GG[dG[89]] & dG[11]), GG[dG[89]] >>= dG[10], GG[-dG[90]] -= dG[10])
                } while (GG[-dG[90]] > dG[6]);
                GG[dG[6]] = -dG[0]
              } return GG[dG[6]] > -dG[0] && GG[dG[91]].push((GG[dG[89]] | GG[dG[6]] << GG[-dG[90]]) & dG[11]), rG(GG[dG[91]])
        }

        function MG(...GG) {
          return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = PG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
        }

        function AG(...GG) {
          GG[dG[12]] = dG[2]
        }
        bG(159) + "_" in zG && AG();
        let sG = GG[dG[44]][bG(160) + MG(161)] * QG;
        if (!YG) {
          function nG(...GG) {
            for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = 'dEO$b8)zZT"t14*_`<:2X,y}>nojpDu6.a;qJ/NC+ARHe?U[50vxsw9{cP=iI&@QV(FL7#%|Gf3l^!]B~MKgmkhWYrS', GG[dG[44]] = "" + (GG[dG[2]] || ""), GG[dG[4]] = GG[dG[44]].length, GG[dG[9]] = [], GG[dG[7]] = dG[2], GG[dG[35]] = dG[2], GG[-dG[92]] = -dG[0]), GG[dG[30]] = dG[2]; GG[dG[30]] < GG[dG[4]]; GG[dG[30]]++)
              if (GG[dG[47]] = GG[dG[0]].indexOf(GG[dG[44]][GG[dG[30]]]), GG[dG[47]] !== -dG[0])
                if (GG[-dG[92]] < dG[2]) GG[-dG[92]] = GG[dG[47]];
                else {
                  IG(GG[-dG[92]] += GG[dG[47]] * dG[33], GG[dG[7]] |= GG[-dG[92]] << GG[dG[35]], GG[dG[35]] += (GG[-dG[92]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
                  do {
                    IG(GG[dG[9]].push(GG[dG[7]] & dG[11]), GG[dG[7]] >>= dG[10], GG[dG[35]] -= dG[10])
                  } while (GG[dG[35]] > dG[6]);
                  GG[-dG[92]] = -dG[0]
                } return GG[-dG[92]] > -dG[0] && GG[dG[9]].push((GG[dG[7]] | GG[-dG[92]] << GG[dG[35]]) & dG[11]), rG(GG[dG[9]])
          }

          function gG(...GG) {
            return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = nG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
          }
          sG *= GG[dG[44]][gG(162) + gG(dG[19])]
        }
        let qG = GG[dG[44]][MG(164) + MG(165) + "ss"] * fG;
        if (fG < .3 && (qG *= fG), sG > qG) {
          function eG(...GG) {
            for (IG(GG[dG[12]] = dG[0], GG[dG[0]] = 'qvuA%I}yVi8^~S/JBl&@CgK.n>j[!X#orQfbW9w$d7;+Y<4?a"=P*,DRz0`EG|H_2NtZ5pOLFkxT1M:h]3mes{U)(6c', GG[dG[44]] = "" + (GG[dG[2]] || ""), GG[dG[4]] = GG[dG[44]].length, GG[-dG[95]] = [], GG[-dG[93]] = dG[2], GG[-dG[94]] = dG[2], GG[dG[6]] = -dG[0]), GG[dG[10]] = dG[2]; GG[dG[10]] < GG[dG[4]]; GG[dG[10]]++)
              if (GG[dG[47]] = GG[dG[0]].indexOf(GG[dG[44]][GG[dG[10]]]), GG[dG[47]] !== -dG[0])
                if (GG[dG[6]] < dG[2]) GG[dG[6]] = GG[dG[47]];
                else {
                  IG(GG[dG[6]] += GG[dG[47]] * dG[33], GG[-dG[93]] |= GG[dG[6]] << GG[-dG[94]], GG[-dG[94]] += (GG[dG[6]] & dG[36]) > dG[37] ? dG[38] : dG[39]);
                  do {
                    IG(GG[-dG[95]].push(GG[-dG[93]] & dG[11]), GG[-dG[93]] >>= dG[10], GG[-dG[94]] -= dG[10])
                  } while (GG[-dG[94]] > dG[6]);
                  GG[dG[6]] = -dG[0]
                } return GG[dG[6]] > -dG[0] && GG[-dG[95]].push((GG[-dG[93]] | GG[dG[6]] << GG[-dG[94]]) & dG[11]), rG(GG[-dG[95]])
          }

          function RG(...GG) {
            return GG[dG[12]] = dG[0], typeof kG[GG[dG[2]]] === dG[16] ? kG[GG[dG[2]]] = eG(UG[GG[dG[2]]]) : kG[GG[dG[2]]]
          }

          function TG(...GG) {
            function bG(...GG) {
              return GG[dG[12]] = dG[0], GG[dG[2]][dG[0]] * dG[97] + (GG[dG[2]][dG[2]] < dG[2] ? dG[96] | GG[dG[2]][dG[2]] : GG[dG[2]][dG[2]])
            }

            function ZG(...GG) {
              switch (GG[dG[12]] = dG[0], ((GG[dG[2]] & dG[96]) !== dG[2]) * dG[0] + (GG[dG[2]] < dG[2]) * dG[44]) {
                case dG[2]:
                  return [GG[dG[2]] % dG[96], Math.trunc(GG[dG[2]] / dG[97])];
                case dG[0]:
                  return [GG[dG[2]] % dG[96] - dG[96], Math.trunc(GG[dG[2]] / dG[97]) + dG[0]];
                case dG[44]:
                  return [((GG[dG[2]] + dG[96]) % dG[96] + dG[96]) % dG[96], Math.round(GG[dG[2]] / dG[97])];
                case dG[4]:
                  return [GG[dG[2]] % dG[96], Math.trunc(GG[dG[2]] / dG[97])]
              }
            }
            GG[dG[12]] = dG[2], IG(GG[dG[1]] = bG([dG[44], dG[9]]), GG[-dG[98]] = bG([dG[0], dG[44]]), GG[dG[66]] = GG[dG[1]] + GG[-dG[98]], GG[dG[65]] = GG[dG[66]] - GG[-dG[98]], GG[dG[9]] = GG[dG[65]] * dG[44], GG[dG[7]] = GG[dG[9]] / dG[44], console.log(ZG(GG[dG[66]])), console.log(ZG(GG[dG[65]])), console.log(ZG(GG[dG[9]])), console.log(ZG(GG[dG[7]])))
          }
          RG(166) in zG && TG(), sG = qG
        }
        IG(SG()[MG(167)](VG, VG, sG), GG[dG[9]][MG(168) + MG(169)](VG))
      }
      GG[dG[9]][bG(dG[81]) + dG[99]] = GG[dG[44]][bG(dG[42]) + bG(dG[22]) + dG[99]] * (YG ? wG : yG)
    }
  },
  38053: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => UG,
      f: () => kG
    });
    var wG = ZG(38056),
      SG = ZG(1873);
    const LG = 2,
      yG = 1,
      kG = {
        Ck: 1,
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

    function UG(GG, bG, ZG, kG, UG, YG, VG) {
      if (UG.speed) return (0, wG.b)(bG, ZG, kG, UG, YG, VG, GG), void(UG.ticksToReachMaxIdleFriction = LG);
      const pG = kG.isOnGround(),
        fG = bG.bloxd.getSyncedClientOptions(bG.bloxd.getPlayerReader(ZG)),
        QG = null === fG ? bG.bloxd.getClientPredictedOption(ZG, "groundFrictionScale") : fG.groundFrictionScale,
        KG = null === fG ? bG.bloxd.getClientPredictedOption(ZG, "airFrictionScale") : fG.airFrictionScale,
        hG = pG ? QG : KG,
        dG = Math.max(yG, hG),
        JG = UG.ticksToReachMaxIdleFriction / LG,
        rG = (0, SG.x)(dG, hG, JG);
      YG.friction = GG.standingFriction * ((null === fG ? bG.bloxd.getClientPredictedOption(ZG, "airMomentumConservation") : fG.airMomentumConservation) ? rG : hG), UG.ticksToReachMaxIdleFriction > 0 && UG.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);