export const id = 225;
export const ids = [225];
export const modules = {
  38570: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Om
    });
    var hm = fm(198),
      Am = fm(37721);
    const am = 1.2,
      xm = {
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
        Ri: .5,
        JTm: !1
      },
      wm = {
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
        Ri: .5,
        JTm: !1
      },
      Dm = {
        physicsBodyDimensions: {
          width: hm.f.dq,
          height: hm.f.gq
        },
        hitBoxDimensions: {
          width: hm.f.dq + .4,
          height: hm.f.gq + .6
        },
        eyeHeight: hm.f.gq * hm.f.playerEyeToHeightRatio,
        rideHeight: hm.f.gq - .3,
        Ri: .5,
        JTm: !1
      },
      im = {
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
        Ri: .5,
        JTm: !1
      },
      Rm = {
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
        Ri: .5,
        JTm: !1
      },
      pm = {
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
        Ri: .5,
        JTm: !1
      },
      Em = {
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
        Ri: .5,
        JTm: !1
      },
      om = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: hm.f.dq,
            height: hm.f.gq
          },
          hitBoxDimensions: {
            width: hm.f.dq + .4,
            height: hm.f.gq + .6
          },
          eyeHeight: hm.f.gq * hm.f.playerEyeToHeightRatio,
          rideHeight: hm.f.gq - .1,
          Ri: Am.f.Ri,
          JTm: !0
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
        },
        Camel: {
          modelScale: am,
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
        },
        "Cave Golem": xm,
        "Draugr Zombie": {
          ...Dm,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Dm,
        "Frost Golem": xm,
        "Frost Zombie": {
          ...Dm,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Dm,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: hm.f.dq,
            height: hm.f.gq
          },
          hitBoxDimensions: {
            width: hm.f.dq + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Ri: .5,
          JTm: !1
        },
        Wolf: im,
        Bear: Rm,
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
          Ri: .5,
          JTm: !1
        },
        Stag: pm,
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
          Ri: .5,
          JTm: !1
        },
        Gorilla: Em,
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
          Ri: .5,
          JTm: !1
        },
        "Draugr Huntress": Dm,
        "Magma Golem": xm,
        "Spirit Golem": xm,
        "Spirit Wolf": im,
        "Spirit Bear": Rm,
        "Spirit Stag": pm,
        "Spirit Gorilla": Em,
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: hm.f.dq,
            height: hm.f.gq
          },
          hitBoxDimensions: {
            width: hm.f.dq + .4,
            height: hm.f.gq + .6
          },
          eyeHeight: hm.f.gq * hm.f.playerEyeToHeightRatio,
          rideHeight: hm.f.gq - .1,
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: hm.f.dq,
            height: hm.f.gq
          },
          hitBoxDimensions: {
            width: hm.f.dq + .4,
            height: hm.f.gq + .6
          },
          eyeHeight: hm.f.gq * hm.f.playerEyeToHeightRatio,
          rideHeight: hm.f.gq - .1,
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
        },
        Zombie: {
          ...Dm,
          defaultPose: "zombie"
        },
        Skeleton: Dm,
        Mummy: {
          ...Dm,
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
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
          Ri: .5,
          JTm: !1
        },
        "Iron Guardian": wm,
        "Gold Guardian": wm,
        "Diamond Guardian": wm,
        "Moonstone Guardian": wm,
        "Iron Goofy Golem": wm,
        "Gold Goofy Golem": wm,
        "Diamond Goofy Golem": wm,
        "Moonstone Goofy Golem": wm,
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
          Ri: .5,
          JTm: !1
        }
      };

    function Om(mm) {
      return om[mm]
    }
  },
  37164: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    const hm = {
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
  37727: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(362),
      Am = fm.n(hm),
      am = fm(1877);
    let xm;
    var wm, Dm, im, Rm, pm, Em, om, Om, Ym;
    const qm = [1, "b", 0, 45, 3, 9, 7, 5, 124, "d", 8, 255, "length", 107, "c", 136, 163, "undefined", void 0, 2, 4, 63, 6, "fromCodePoint", 12, "push", 141, "e", 18, 42, 27, "a", 108, "g", 91, 11, 8191, 88, 13, 14, 111, 176, 170, "f", null, 114, "s", 127, 125, 126, 121, 122, 123, 128, 129, 130, 118, 119, 120, 137, "nf", 227, "i", 149, 10, 159, "h", 21, 46, 77, 143, 37, 81, 140, 57, 20, 156, 202, 29, 70, 248, 47, 203, 89, 216, 98, 60, "on"];

    function jm(...mm) {
      return mm[qm[12]] = qm[0], typeof wm[mm[qm[2]]] === qm[17] ? wm[mm[qm[2]]] = function(...mm) {
        for (bm(mm[qm[12]] = qm[0], mm[qm[0]] = '8x`.|=%$y54#]~603w{/iICXeW@VJH"c_voG!*u}^T2>[+mzp,1j:gsOQaBP<nENYqZrb?tflA)kRd9LD(7K&;UShMF', mm[qm[1]] = "" + (mm[qm[2]] || ""), mm[qm[4]] = mm[qm[1]].length, mm[qm[9]] = [], mm[qm[7]] = qm[2], mm[-qm[8]] = qm[2], mm[qm[6]] = -qm[0]), mm[qm[3]] = qm[2]; mm[qm[3]] < mm[qm[4]]; mm[qm[3]]++)
          if (mm[qm[5]] = mm[qm[0]].indexOf(mm[qm[1]][mm[qm[3]]]), mm[qm[5]] !== -qm[0])
            if (mm[qm[6]] < qm[2]) mm[qm[6]] = mm[qm[5]];
            else {
              bm(mm[qm[6]] += mm[qm[5]] * qm[34], mm[qm[7]] |= mm[qm[6]] << mm[-qm[8]], mm[-qm[8]] += (mm[qm[6]] & qm[36]) > qm[37] ? qm[38] : qm[39]);
              do {
                bm(mm[qm[9]].push(mm[qm[7]] & qm[11]), mm[qm[7]] >>= qm[10], mm[-qm[8]] -= qm[10])
              } while (mm[-qm[8]] > qm[6]);
              mm[qm[6]] = -qm[0]
            } return mm[qm[6]] > -qm[0] && mm[qm[9]].push((mm[qm[7]] | mm[qm[6]] << mm[-qm[8]]) & qm[11]), Vm(mm[qm[9]])
      }(Dm[mm[qm[2]]]) : wm[mm[qm[2]]]
    }

    function Vm(...mm) {
      return mm[qm[12]] = qm[0], typeof Rm !== qm[17] && Rm ? (new Rm).decode(new pm(mm[qm[2]])) : typeof Em !== qm[17] && Em ? Em.from(mm[qm[2]]).toString("utf-8") : Ym(mm[qm[2]])
    }

    function Im() {}
    bm(wm = {}, Dm = ["joUJ$oR%6{.l6u?W4mVlsB7]S~wiM|", ")P?Rngl:Q~P$q|y@iHjypbH/E#/lttGcwf<H=<U]OBeE[VhGUo2VTQTG+ge", '$f&HN<y:G]Xiz7"".Gz5Yot)//f<Z?}*9Q9chv8', "es]d)E;Tw0ODc7{i2]z|>n+~MEkxpPU^y@ok6).W%4+", "bsS,tg5/!5|Bx", 'F+i$t!fNv0cLv,ITH]k_4a~(O~A,V7VTVq}%URl"z{7__V6', 's]"$NgMXE{H?&!5}L%`k~)e"o5]Ls*AWp.c5kE%ymPC%)(IGaEL%ZgMw;YW', "MpW_zjy!w5Jl]&t*/NzJl1?ap<(x:.:V", "&A%cTQ.~cNfm^zT}h}kg6RGzbs%%;!!{S+~4bmNHG<7N+36", "~N<c]K5To<$bZ6H2THtR>*~~js*pQV(^3]lAX9hm_IJjj6@J}i.", "o]qsJKR^4O{*0uYeS8", "VHlA_DSHVw;)(Wtu$>y%>thUZ<x3V`F3.,3kW", '2q1gR!~znQ>G[KUo`ax9v,+z$BAtt@"!y,6v!^9B2qFdNtTW?8', "4]vVlpS$9QWq7,Ee!bUf]pLTAwkd2@5/gogO%L8", "F+iHMKQUQBlGYPcHO6`", 'OfmOuzbUQBQt`WsTDcR@Ypw/hwu.QV/iJfOsKP0$Z5$"YK>@Myh,/uKTo/P', "96@_smEmmI,R,,UC#m=$t)NxPEI?p|sVPfb$<t9eY5ucx", "r5N|w(!eZ/6O[zR/6{{Vs*ckw0", ':s3s";%eP#"wp.(^`NDA7a$$[6Q#K@x2@<e%wK8yb~&g"=', "ia}:#uZ%~Z?dq?nXwf1VDfpB&Yie}BxX<@Wj{uJ:nEK#x", '0]w"?<~$|', 'u%vj4UbBMB"O_K;JTXxk(+)m<62Ial%uojH4gj/H/5}$]./Jzq},,Q$/%', "K*okO}DB|", '@fJH}N+G[P0q6*iV{s{l)?H/v05"0@#}', "qXp5+G]Y46P,zty", 'x_u$SzR:d{n#1W`!"ql%+*^{2q@~pV_w~b:g=LK?_ZciYP5', "Pi;1F;zaz0b{H3+V#H}AA?UoWinQ0@aH#aO5s7fx", "Yc!H3O+zk#2?L@u*Gs}su^{BuY=`dpp@2]d1La8", "MA+c$)!eN<8`w<i^y)c:]", '.,8"$?Mwm0}4|.y@[c:4', "V>{jAR5$N<9C|fZ!~_s:fEw~:YDmX`%WEq4d}NBm]w7t8l+}1@jg2nj/%", "r%u$>D/TQi6b<|", 'o]~4=gEB<wR,!K#Wz5k_C9:"$', "(jojF9GNn#7H!V4cn6*4Fs+~OB4s?!v!_s)d@", "]bFj|ghEpZ*4|KF3^qw_aL_]:~Sdlp6", 'MPPg(OF]xZkx1~x",p(_c;k;EQ{Bx', "Sj?1ajI~dPg?B6fe;%%:]OBmB#ddx", "?*=cs7oeuYU)y3T@wf8%((D%JIvPX6r*t.URrgwzd{l|o=", "]|Hc4(l%>6&=x", 'dwps`<_!N{))L`uc%]Rg"nb"i~PP@nY"SwJHajtm)EI73..!G%f,SK[{{<T', "C<yj311:JIWl}P*cy,T%Bm;$|a@By}f*rEkgus[:Pi@wx", "Xf:cLRQ:PQLm06B2Lj&fK9{!5w.*3VEXkcPg~", "`H+)N}o)J6~ip08{[%S|jmckY<555lNwb+EO~O~x.", 'b+~c":Nz308`t,QJjq7jjt2ec0X4x', "y)2_YBjND{+:w<*/>)Ds4!%ma6", "D6])w(cG2q/Bx", "coc|/uA$w{;C2WrW[^3vKuP~$", "RjGdQm:^0],RJK$uL6SJi9HT)i(tE7*WA*~4TG82;s,D+py", "Q+pjXa*(awCi!Pso:fYA|<u!5wip;p%ue@UJIKz;Ry", "|XU:ElqXE0Q#~p0}y]tOFvB^*BIL_.", "DQ^%rm/$;~6E(Do!L#B_^,sB#w=34***+cmRosqGfie~%(1ol2)_!n#x,sUax", ':Xw"Fs.T_a}J07>}Xin4t<_{zgsNS@X^6]M%1,Sa~I`n.7|"_aW%0E8', "H<r_alZ%dE&r)uu*Mq.", "%N,l_:*z;/|n&zqX>wMsJ", "Ut[4Z<aXV6wkOuUT0<x", "3<scnouYBiFW%nR/p^O,t?2m@iQ,1W!**fRcz,.Sg~%5t(wV*b9cAae!>i", 'DQ0vTQ%m{<[ZC=duf+6c{Ky":Y1G"=^W**ajloSx4wEW;e0}<w`l~', 'E.U$#ENTrs+I2*o"_sk_|l7DhiXRw*8e', "WXS|_AjxA6|spV8eZw%RV^mY1soZ@*.{*j%:,dXg#iZNB~FJ^s^,rgho|", 'Z%sRvb&BvZ8kSfG"e^NJMacaHI', 'Aj?f^,u"U/PGx', "uqT_LR%t[6H?sW1J{].", "dW>HVA;?uYEAlp%", 'qs/_ztE"~{&yq!I^8mbHA(GH7sW???x*u5MjGP8"+6Wwp.bw^EQ%e:,~FwLt8', "=,XJ/?Do!YFrOB0}PE0vgN,T|", "y,yvLf|2^~X.=pvwvsW_x!u!p{1Dx=HGgpvj,bN~OB,", '5|J)rlgkk#"i(l:^L#`l*;fNAww?|lD@ojL:,dD^%', "Q+#lkKIH&5N,C*fWS+Byi", 'Wb^%lL5x54wl3pc*cmM_@R@"{]J?n~$', 'Gb=O6RGanE+R80[}r*gcTse"i~+4t(3@3*gcMKLjr<Ick6Io', "Dq6cS1S?Y<.3Z,H!`,tfvs2^!~OGz`FHL*B_z7./+Qi*%n[}.<mA+bnx", 'Np3v!PgTh~876==":i3%d+^!q{[I7WTu"<Y,"', "S.4_*k[mei,Q2WG*`<uRYps^8{@V1Wyc|0u:Juz~26", "I0UfNLNG?sbd>z}uw{&ds7X$lBODx", "+]l%q(K?%BE,1WIG", "KPxV8Owgv5z#,leJ>cO:2tjGmNiLS.s^w_<)t<Do6{D<K`l/!jT_1m2m~ZRHx", '*@T%hfck:sPP&zr"<^[)Vz,zYa)tFW%', 'c<cRX:e`Z0M/:K~Vnse"!Pwx~6^cw3+Vx_(jrLckWwd,L6yWopdc01NXi~', "g]NA:Nx~{5HLI=5/&6#_5Oj/?sD!9?$u0j.", '!]&HTD["Aw', '(+ry??O~+{AJnlEHAbWVpt@"(NmAZ6)WAPTl7u%:_NrDepY23N.', "u@tRH^))%Y(y5pR@{@Jdk)emdET", "e@)yPlKa8]G?~l|>i%y%t(!`$", "$N6:3aPHUY1I9(~isoE|Fs[:JP^Jzu<2#mqsA!/~b5", "BXI$d+O$aBKH<0WJ)qb$jQ8", 'AcX5?<u"d6gRu~IV|<?:<traOYm:@=', "}HVlq&;aD{@l=3]iO^?@KuCyOi.%R.|WXsSs.Lrj?/ooapVHmEW9;+8", "c<hsp&8", "}f6cA(fHRgS0c`d@s5`_r(/?WqU]!P<2Qf[H+k.?#Py5pPF2tsk)V", "&.jdpQjXh~aD_zt{Do@jjkPTD<KgS`yuE6$vGD|e+y", '8<`H.m_![wMm01!e{NZy/9^"c{#bO65@I0sRNo`2~{5%:K~V9J^,w', "RP59jB|{+Ig", "d%Q%pb!)9y;Qx", 'QP.ltgEm4E)g,l+}_X?@_P"):YHqB(HHSjzR&+5~%', "Vqa_DK!{2i]kzVKol+X5obXG10we>tSCsq3kDf^Y(Nkdqeh3(+pVb)7U*~U_x", "Y*evB<e!5OAQ>B.wEJvsk1#g2PL0wlfcex", "z@aj41M;Y<kD7`)cX<S5,jR^_NNt2~7J^)n$)(kT/<DyG@J2KpJc`&>x", "w{@l!PW$Rw", "V^rHI?zz+6n6.@fW)p|dQ&~W+Qwjx", "RcL5&9uD$~6*hfhG!>bHMu8!CYuE5p*crAWk`mE%/Y+6x", "asajQjL;)ird{7.W)*R)=g=N[6e~[K&^gscs[b($u/NIx", 'C]"Jlo1m_0AJdl`{(p:gm7M?I/Mrx', 'Ob8"G^/g,5ZZ6nz}4,tJ?LjXbsrD:<XGx5JdypUoWi"$X@^{RqX,|L*a1NIcx', "r2rg7RNXL<MWPu)uQw~)p&KHLycc|Vf{L8", "!<3kt(FUxa6i>@uutb`jvA6yaErP)?xe9J;@I:jH.saD^.wVGje9R!5x", "m^=4,bgzEQVLs*k/}>_%Bt}a]PJiE~N!J*HO!D]yKY_E;p@T}bS5", "@0IOU9;X1aDtjVy/GXe9Lu~/)q;d(DSC!a@k<oI(NNO|:V)/qbAsb)W/|5", 'D.":K?Mx', "Zjucd(i`", "ao(Lu*Sn", "e~=P", "yE(PH#J", "eoAh", "sg_u(XF}", "SX(u3DL", "/K5T_S+=", "yKl8ZM+=", "KKqT", "/K.6B0,Ul", "C+iqhgdfl", "%%nuKgU?l", "/K.6+S)=", "I<5Tyfs=", "azmJVM/=", "fImVV{a=", "DY,Vj6/=", "PYMS6?)=", "8<6g!.X=", "Gzl8Cf)=", 'VFMS36"}', "@wwVr", "vK5T", "qK.gU", "z%GVv", "8RdY5:1=", ",3#ur", "GzYV$~_=", "VuYJvML", "GzYVr{y=", "I<mV9S%}", "8<|VefR=", "vFMS36L", "GzYVr{NvPU", "V3+6c{,US4", "hOYJKgU?l", "FLr%pm|x", "9N$@", "0o:f", ">ClZ", "5v:f", ":&aei", "uznZ", "=.?@", "[3|J", "ZKs6{?z=", "}E`T1@N=", "y+DS??+=", "|uQJ", "2z#u", "P%YV2.X=", ",gQJ", "y%QV0Sdf*s", 'k*b6,M"BlU', "Rzfuhg%h;", "/uSqKM`}", "0B(1W)>y", "^F_hUJm}<YXM5.$k13sbHH|(+`dO0z$k+fVP+1^=e*O)p%1FzFo?b", "&sA^NlT*UjOz<g4pZ=H/xx}c2qaI`74pzE9055kQZNO[,><b_B", "J7Dl?uSqYa!Q5tk007cFG*?O_U(s@?9GKW>s$", "EQkO", "y%QV1]<=", "uM@b", "tMl*y$.K", "3;c[,]x", "whGX!,yR", "F}@pe`=R", "r&y*&:[R", "%4GE2dl@", "W>?.2aB5", "DM%bB{O", "ka8MZ_oq", ",%1(U", "~YMS6?)=", "y%QV|6A="]), bm(im = function(...mm) {
      bm(mm[qm[12]] = qm[2], mm[qm[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], mm[-qm[13]] = qm[18], mm[qm[14]] = []);
      try {
        bm(mm[-qm[13]] = Object, mm[qm[14]][qm[25]]("".__proto__.constructor.name))
      } catch (Dm) {}
      mm: for (mm[qm[9]] = qm[2]; mm[qm[9]] < mm[qm[15]][qm[12]]; mm[qm[9]]++) try {
        for (mm[-qm[13]] = mm[qm[15]][mm[qm[9]]](), mm[-qm[16]] = qm[2]; mm[-qm[16]] < mm[qm[14]][qm[12]]; mm[-qm[16]]++)
          if (typeof mm[-qm[13]][mm[qm[14]][mm[-qm[16]]]] === qm[17]) continue mm;
        return mm[-qm[13]]
      } catch (Dm) {}
      return mm[-qm[13]] || this
    }() || {}, Rm = im.TextDecoder, pm = im.Uint8Array, Em = im.XO, om = im.String || String, Om = im.Array || Array, Ym = function(...mm) {
      return bm(mm[qm[12]] = qm[2], mm[qm[26]] = new Om(qm[53]), mm[qm[27]] = om[qm[23]] || om.fromCharCode, mm[qm[19]] = []),
        function(...Tm) {
          for (bm(Tm[qm[12]] = qm[0], Tm[qm[0]] = qm[18], Tm[qm[1]] = qm[18], Tm[qm[14]] = Tm[qm[2]][qm[12]], mm[qm[19]][qm[12]] = qm[2]), Tm[qm[20]] = qm[2]; Tm[qm[20]] < Tm[qm[14]];) bm(Tm[qm[1]] = Tm[qm[2]][Tm[qm[20]]++], Tm[qm[1]] <= qm[47] ? Tm[qm[0]] = Tm[qm[1]] : Tm[qm[1]] <= 223 ? Tm[qm[0]] = (31 & Tm[qm[1]]) << qm[22] | Tm[qm[2]][Tm[qm[20]]++] & qm[21] : Tm[qm[1]] <= 239 ? Tm[qm[0]] = (15 & Tm[qm[1]]) << qm[24] | (Tm[qm[2]][Tm[qm[20]]++] & qm[21]) << qm[22] | Tm[qm[2]][Tm[qm[20]]++] & qm[21] : om[qm[23]] ? Tm[qm[0]] = (Tm[qm[1]] & qm[6]) << qm[28] | (Tm[qm[2]][Tm[qm[20]]++] & qm[21]) << qm[24] | (Tm[qm[2]][Tm[qm[20]]++] & qm[21]) << qm[22] | Tm[qm[2]][Tm[qm[20]]++] & qm[21] : (Tm[qm[0]] = qm[21], Tm[qm[20]] += qm[4]), mm[qm[19]][qm[25]](mm[qm[26]][Tm[qm[0]]] || (mm[qm[26]][Tm[qm[0]]] = mm[qm[27]](Tm[qm[0]]))));
          return mm[qm[19]].join("")
        }
    }()), jm(qm[13]) in Im && function(...mm) {
      bm(mm[qm[12]] = qm[2], mm[qm[31]] = function(...mm) {
        for (bm(mm[qm[12]] = qm[0], mm[qm[0]] = qm[2], mm[-qm[29]] = {}, mm[qm[14]] = qm[2], mm[qm[9]] = qm[2], mm[qm[7]] = qm[2], mm[qm[28]] = mm[qm[2]].length), mm[-qm[16]] = qm[2]; mm[-qm[16]] < mm[qm[28]]; mm[-qm[16]]++) {
          for (bm(mm[-qm[29]] = {}, mm[qm[14]] = qm[2], mm[qm[9]] = qm[0]), mm[qm[30]] = mm[-qm[16]] + qm[0]; mm[qm[30]] < mm[qm[28]]; mm[qm[30]]++) mm[qm[2]][mm[-qm[16]]].x !== mm[qm[2]][mm[qm[30]]].x || mm[qm[2]][mm[-qm[16]]].y !== mm[qm[2]][mm[qm[30]]].y ? (mm[qm[2]][mm[-qm[16]]].y === mm[qm[2]][mm[qm[30]]].y ? mm[qm[7]] = Number.MAX_SAFE_INTEGER : mm[qm[7]] = (mm[qm[2]][mm[-qm[16]]].x - mm[qm[2]][mm[qm[30]]].x) / (mm[qm[2]][mm[-qm[16]]].y - mm[qm[2]][mm[qm[30]]].y), mm[-qm[29]][mm[qm[7]]] || (mm[-qm[29]][mm[qm[7]]] = qm[2]), bm(mm[-qm[29]][mm[qm[7]]]++, mm[qm[14]] = Math.max(mm[qm[14]], mm[-qm[29]][mm[qm[7]]]))) : mm[qm[9]]++;
          bm(mm[qm[14]] += mm[qm[9]], mm[qm[0]] = Math.max(mm[qm[0]], mm[qm[14]]))
        }
        return mm[qm[0]]
      }, console.log(mm[qm[31]]))
    }();
    const Km = Am()[jm(qm[32])](),
      Qm = Am()[jm(qm[32])](),
      nm = Am()[jm(qm[32])](),
      Jm = Am()[jm(qm[32])](),
      cm = Am()[jm(qm[32])](),
      zm = Am()[jm(qm[32])](),
      Zm = Am()[jm(qm[32])](),
      km = (...mm) => {
        function Tm(...mm) {
          return mm[qm[12]] = qm[0], typeof wm[mm[qm[2]]] === qm[17] ? wm[mm[qm[2]]] = function(...mm) {
            for (bm(mm[qm[12]] = qm[0], mm[qm[31]] = 'JpnFTgkXPEhDcCQBMVldYAtsIRZeUfHGLiSjNaqmKWOorb;u/8&(+[{|1%]v3<!?yz_}*)>#62~`09^7,.w=@$:5x"4', mm[qm[1]] = "" + (mm[qm[2]] || ""), mm[qm[14]] = mm[qm[1]].length, mm[qm[20]] = [], mm[qm[27]] = qm[2], mm[qm[35]] = qm[2], mm[qm[33]] = -qm[0]), mm[qm[10]] = qm[2]; mm[qm[10]] < mm[qm[14]]; mm[qm[10]]++)
              if (mm[qm[5]] = mm[qm[31]].indexOf(mm[qm[1]][mm[qm[10]]]), mm[qm[5]] !== -qm[0])
                if (mm[qm[33]] < qm[2]) mm[qm[33]] = mm[qm[5]];
                else {
                  bm(mm[qm[33]] += mm[qm[5]] * qm[34], mm[qm[27]] |= mm[qm[33]] << mm[qm[35]], mm[qm[35]] += (mm[qm[33]] & qm[36]) > qm[37] ? qm[38] : qm[39]);
                  do {
                    bm(mm[qm[20]].push(mm[qm[27]] & qm[11]), mm[qm[27]] >>= qm[10], mm[qm[35]] -= qm[10])
                  } while (mm[qm[35]] > qm[6]);
                  mm[qm[33]] = -qm[0]
                } return mm[qm[33]] > -qm[0] && mm[qm[20]].push((mm[qm[27]] | mm[qm[33]] << mm[qm[35]]) & qm[11]), Vm(mm[qm[20]])
          }(Dm[mm[qm[2]]]) : wm[mm[qm[2]]]
        }
        mm[qm[12]] = qm[4];
        const fm = zm;
        return Am()[Tm(109) + Tm(110)](fm, mm[qm[19]]), Am()[Tm(qm[40])](mm[qm[2]], fm, Am()[Tm(112)](fm, mm[qm[0]]))
      };

    function bm() {
      bm = function() {}
    }
    xm = (...mm) => {
      function Tm(...mm) {
        return mm[qm[12]] = qm[0], typeof wm[mm[qm[2]]] === qm[17] ? wm[mm[qm[2]]] = function(...mm) {
          for (bm(mm[qm[12]] = qm[0], mm[qm[0]] = 'L}=wEql;JuTo+htK_4/Us5cZArz,)Bv[VCXGyPa><e*%!I12N]:Yb`R8pFH|3xjO#&^m.~DM($g"S6{nf?@Qi0W7k9d', mm[qm[1]] = "" + (mm[qm[2]] || ""), mm[qm[14]] = mm[qm[1]].length, mm[qm[20]] = [], mm[-qm[42]] = qm[2], mm[qm[43]] = qm[2], mm[qm[40]] = -qm[0]), mm[qm[41]] = qm[2]; mm[qm[41]] < mm[qm[14]]; mm[qm[41]]++)
            if (mm[qm[5]] = mm[qm[0]].indexOf(mm[qm[1]][mm[qm[41]]]), mm[qm[5]] !== -qm[0])
              if (mm[qm[40]] < qm[2]) mm[qm[40]] = mm[qm[5]];
              else {
                bm(mm[qm[40]] += mm[qm[5]] * qm[34], mm[-qm[42]] |= mm[qm[40]] << mm[qm[43]], mm[qm[43]] += (mm[qm[40]] & qm[36]) > qm[37] ? qm[38] : qm[39]);
                do {
                  bm(mm[qm[20]].push(mm[-qm[42]] & qm[11]), mm[-qm[42]] >>= qm[10], mm[qm[43]] -= qm[10])
                } while (mm[qm[43]] > qm[6]);
                mm[qm[40]] = -qm[0]
              } return mm[qm[40]] > -qm[0] && mm[qm[20]].push((mm[-qm[42]] | mm[qm[40]] << mm[qm[43]]) & qm[11]), Vm(mm[qm[20]])
        }(Dm[mm[qm[2]]]) : wm[mm[qm[2]]]
      }
      mm[qm[12]] = qm[10], Tm(113) + qm[46] in Im && function(...mm) {
        mm[qm[12]] = qm[2]
      }();
      const fm = mm[qm[2]][Tm(qm[45])][Tm(115) + Tm(116) + Tm(117)](mm[qm[0]]);
      mm[qm[10]] = mm[qm[2]][Tm(qm[45])][Tm(qm[56]) + Tm(qm[57]) + Tm(qm[58]) + qm[46]](fm);
      const hm = mm[qm[10]] === qm[44] ? mm[qm[2]][Tm(qm[45])][Tm(qm[50]) + Tm(qm[51]) + Tm(qm[52]) + Tm(qm[8])](mm[qm[0]], Tm(qm[48]) + Tm(qm[49]) + Tm(qm[47]) + qm[27]) : mm[qm[10]][Tm(qm[48]) + Tm(qm[49]) + Tm(qm[47]) + qm[27]],
        xm = mm[qm[10]] === qm[44] ? mm[qm[2]][Tm(qm[45])][Tm(qm[50]) + Tm(qm[51]) + Tm(qm[52]) + Tm(qm[8])](mm[qm[0]], Tm(qm[53]) + Tm(qm[54]) + Tm(qm[55])) : mm[qm[10]][Tm(qm[53]) + Tm(qm[54]) + Tm(qm[55])];
      bm(Am()[Tm(131)](Km, qm[2], qm[2], mm[qm[7]]), Am().pa(Km, Km, Am()[Tm(132)], mm[qm[4]].heading), Am()[Tm(133)](Zm, mm[qm[20]].qq), Zm[qm[0]] = qm[2]);
      const im = mm[qm[19]][Tm(134) + Tm(135)]();
      if (bm(mm[qm[10]] = mm[qm[2]][Tm(qm[45])][Tm(qm[56]) + Tm(qm[57]) + Tm(qm[58]) + qm[46]](fm), mm[qm[5]] = mm[qm[10]] === qm[44] ? mm[qm[2]][Tm(qm[45])][Tm(qm[50]) + Tm(qm[51]) + Tm(qm[52]) + Tm(qm[8])](mm[qm[0]], Tm(qm[15]) + Tm(qm[59])) : mm[qm[10]][Tm(qm[15]) + Tm(qm[59])]), !im && Am()[qm[60]](Zm) && (mm[qm[10]] === qm[44] ? mm[qm[2]][Tm(qm[45])][Tm(qm[50]) + Tm(qm[51]) + Tm(qm[52]) + Tm(qm[8])](mm[qm[0]], Tm(138) + Tm(139) + Tm(qm[73]) + Tm(qm[26])) : mm[qm[10]][Tm(142) + Tm(qm[70]) + Tm(144)])) {
        function Om(...mm) {
          for (bm(mm[qm[12]] = qm[0], mm[qm[31]] = 'Bux2zQ%8@fZA.GJo~*1cPl<0[3v>q=w9y(E4/F]!keHCp,Y5s#dLTni+t&|$NmI}:rbKhD7V{_X?jRWOaMgUS;6)^`"', mm[qm[19]] = "" + (mm[qm[2]] || ""), mm[qm[4]] = mm[qm[19]].length, mm[qm[20]] = [], mm[qm[7]] = qm[2], mm[qm[43]] = qm[2], mm[qm[33]] = -qm[0]), mm[qm[10]] = qm[2]; mm[qm[10]] < mm[qm[4]]; mm[qm[10]]++)
            if (mm[qm[56]] = mm[qm[31]].indexOf(mm[qm[19]][mm[qm[10]]]), mm[qm[56]] !== -qm[0])
              if (mm[qm[33]] < qm[2]) mm[qm[33]] = mm[qm[56]];
              else {
                bm(mm[qm[33]] += mm[qm[56]] * qm[34], mm[qm[7]] |= mm[qm[33]] << mm[qm[43]], mm[qm[43]] += (mm[qm[33]] & qm[36]) > qm[37] ? qm[38] : qm[39]);
                do {
                  bm(mm[qm[20]].push(mm[qm[7]] & qm[11]), mm[qm[7]] >>= qm[10], mm[qm[43]] -= qm[10])
                } while (mm[qm[43]] > qm[6]);
                mm[qm[33]] = -qm[0]
              } return mm[qm[33]] > -qm[0] && mm[qm[20]].push((mm[qm[7]] | mm[qm[33]] << mm[qm[43]]) & qm[11]), Vm(mm[qm[20]])
        }

        function Ym(...mm) {
          return mm[qm[12]] = qm[0], typeof wm[mm[qm[2]]] === qm[17] ? wm[mm[qm[2]]] = Om(Dm[mm[qm[2]]]) : wm[mm[qm[2]]]
        }

        function jm(...mm) {
          mm[qm[12]] = qm[2]
        }
        Ym(145) + "F" in Im && jm(), bm(km(Qm, Km, Zm), km(nm, Zm, Km), Am()[Ym(146)](Jm, Zm, nm));
        const zm = Am()[Ym(147)](Zm),
          Sm = Am()[Ym(148)](Km, Zm) / mm[qm[7]] / zm,
          em = Math[Ym(qm[63])](Sm, qm[2]) + qm[0];
        if (mm[qm[7]] * mm[qm[7]] < Am()[qm[60]](nm)) {
          function Nm(...mm) {
            for (bm(mm[qm[12]] = qm[0], mm[qm[61]] = '9AdhRaycu<e/{[E&V$xg7+U:6Ok=ivl`_wGjtfDp(r,on5"b~?3XN1SHT^84ILP]m.#>Y0Wz2B}%QF;qKsJ!@|C*Z)M', mm[qm[19]] = "" + (mm[qm[2]] || ""), mm[qm[14]] = mm[qm[19]].length, mm[qm[9]] = [], mm[qm[7]] = qm[2], mm[qm[43]] = qm[2], mm[qm[33]] = -qm[0]), mm[qm[10]] = qm[2]; mm[qm[10]] < mm[qm[14]]; mm[qm[10]]++)
              if (mm[qm[62]] = mm[qm[61]].indexOf(mm[qm[19]][mm[qm[10]]]), mm[qm[62]] !== -qm[0])
                if (mm[qm[33]] < qm[2]) mm[qm[33]] = mm[qm[62]];
                else {
                  bm(mm[qm[33]] += mm[qm[62]] * qm[34], mm[qm[7]] |= mm[qm[33]] << mm[qm[43]], mm[qm[43]] += (mm[qm[33]] & qm[36]) > qm[37] ? qm[38] : qm[39]);
                  do {
                    bm(mm[qm[9]].push(mm[qm[7]] & qm[11]), mm[qm[7]] >>= qm[10], mm[qm[43]] -= qm[10])
                  } while (mm[qm[43]] > qm[6]);
                  mm[qm[33]] = -qm[0]
                } return mm[qm[33]] > -qm[0] && mm[qm[9]].push((mm[qm[7]] | mm[qm[33]] << mm[qm[43]]) & qm[11]), Vm(mm[qm[9]])
          }

          function Gm(...mm) {
            return mm[qm[12]] = qm[0], typeof wm[mm[qm[2]]] === qm[17] ? wm[mm[qm[2]]] = Nm(Dm[mm[qm[2]]]) : wm[mm[qm[2]]]
          }
          Am()[Gm(150)](Km, Km, nm, em)
        }
        bm(mm[qm[5]] = (0, am.z)(mm[qm[5]], 1, Math[Ym(qm[63])](qm[0], Math[Ym(151)](qm[2], -Sm, qm[0] - zm / mm[qm[7]]))), Am()[Ym(152)](Km, Km, Jm))
      }
      const Rm = cm;
      bm(Am()[Tm(153)](Rm, Km, Zm), Rm[qm[0]] = qm[2], mm[qm[64]] = Am()[Tm(154)](Rm)), im || (mm[qm[64]] *= mm[qm[5]]);
      const pm = mm[qm[22]][Tm(155) + Tm(qm[76]) + Tm(157)],
        Em = pm ? Math[Tm(158)](pm, mm[qm[64]]) : mm[qm[64]];
      Am()[Tm(qm[65]) + Tm(160)](Rm, Rm);
      const om = mm[qm[6]] !== qm[44] && void 0 !== mm[qm[6]] ? mm[qm[6]] : mm[qm[22]][Tm(161) + Tm(162) + Tm(qm[16])];
      if (Em > qm[2]) {
        function Xm(...mm) {
          for (bm(mm[qm[12]] = qm[0], mm[qm[31]] = 'OqRElAfkbMXgIG[hS7Yt=W1v3U}0*wB(p"!^ZVyT6NsrmKaQnod%/FHiJCexjPLuD.:2?$4{9<|+~`,)8>5@z_;]&#c', mm[qm[1]] = "" + (mm[qm[2]] || ""), mm[qm[4]] = mm[qm[1]].length, mm[qm[9]] = [], mm[qm[7]] = qm[2], mm[qm[68]] = qm[2], mm[qm[67]] = -qm[0]), mm[qm[66]] = qm[2]; mm[qm[66]] < mm[qm[4]]; mm[qm[66]]++)
            if (mm[qm[5]] = mm[qm[31]].indexOf(mm[qm[1]][mm[qm[66]]]), mm[qm[5]] !== -qm[0])
              if (mm[qm[67]] < qm[2]) mm[qm[67]] = mm[qm[5]];
              else {
                bm(mm[qm[67]] += mm[qm[5]] * qm[34], mm[qm[7]] |= mm[qm[67]] << mm[qm[68]], mm[qm[68]] += (mm[qm[67]] & qm[36]) > qm[37] ? qm[38] : qm[39]);
                do {
                  bm(mm[qm[9]].push(mm[qm[7]] & qm[11]), mm[qm[7]] >>= qm[10], mm[qm[68]] -= qm[10])
                } while (mm[qm[68]] > qm[6]);
                mm[qm[67]] = -qm[0]
              } return mm[qm[67]] > -qm[0] && mm[qm[9]].push((mm[qm[7]] | mm[qm[67]] << mm[qm[68]]) & qm[11]), Vm(mm[qm[9]])
        }

        function Pm(...mm) {
          return mm[qm[12]] = qm[0], typeof wm[mm[qm[2]]] === qm[17] ? wm[mm[qm[2]]] = Xm(Dm[mm[qm[2]]]) : wm[mm[qm[2]]]
        }

        function Hm(...mm) {
          mm[qm[12]] = qm[2]
        }
        Tm(164) + "X" in Im && Hm();
        let ym = mm[qm[19]][Tm(qm[42]) + Pm(171)] * om;
        if (!im) {
          function rm(...mm) {
            for (bm(mm[qm[12]] = qm[0], mm[qm[31]] = 'xaKrLU=}"4[5gQHCbIG%u(DOdyMAcv>m*FVt|;+oZX9h7^<:p?1lJE.#`_ie{f30PB@YS8n6T~wqW2$N,])R&s!zk/j', mm[qm[1]] = "" + (mm[qm[2]] || ""), mm[qm[81]] = mm[qm[1]].length, mm[-qm[83]] = [], mm[qm[7]] = qm[2], mm[-qm[13]] = qm[2], mm[qm[82]] = -qm[0]), mm[-qm[80]] = qm[2]; mm[-qm[80]] < mm[qm[81]]; mm[-qm[80]]++)
              if (mm[qm[5]] = mm[qm[31]].indexOf(mm[qm[1]][mm[-qm[80]]]), mm[qm[5]] !== -qm[0])
                if (mm[qm[82]] < qm[2]) mm[qm[82]] = mm[qm[5]];
                else {
                  bm(mm[qm[82]] += mm[qm[5]] * qm[34], mm[qm[7]] |= mm[qm[82]] << mm[-qm[13]], mm[-qm[13]] += (mm[qm[82]] & qm[36]) > qm[37] ? qm[38] : qm[39]);
                  do {
                    bm(mm[-qm[83]].push(mm[qm[7]] & qm[11]), mm[qm[7]] >>= qm[10], mm[-qm[13]] -= qm[10])
                  } while (mm[-qm[13]] > qm[6]);
                  mm[qm[82]] = -qm[0]
                } return mm[qm[82]] > -qm[0] && mm[-qm[83]].push((mm[qm[7]] | mm[qm[82]] << mm[-qm[13]]) & qm[11]), Vm(mm[-qm[83]])
          }

          function sm(...mm) {
            return mm[qm[12]] = qm[0], typeof wm[mm[qm[2]]] === qm[17] ? wm[mm[qm[2]]] = rm(Dm[mm[qm[2]]]) : wm[mm[qm[2]]]
          }
          ym *= mm[qm[19]][sm(172) + sm(173)]
        }
        let Cm = mm[qm[19]][Pm(174) + Pm(175) + "ss"] * Em;
        if (Em < .3) {
          function lm(...mm) {
            mm[qm[12]] = qm[2]
          }
          Pm(qm[41]) in Im && lm(), Cm *= Em
        }
        ym > Cm && (ym = Cm), bm(Am()[Pm(179)](Rm, Rm, ym), mm[qm[20]][Pm(180) + Pm(181)](Rm))
      }
      mm[qm[20]][Tm(182) + qm[87]] = mm[qm[19]][Tm(183) + Tm(qm[49]) + qm[87]] * (im ? hm : xm)
    }
  },
  37721: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Dm,
      f: () => wm
    });
    var hm = fm(37727),
      Am = fm(1877);
    const am = 2,
      xm = 1,
      wm = {
        Ri: 1,
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

    function Dm(mm, Tm, fm, wm, Dm, im, Rm) {
      if (Dm.speed) return (0, hm.e)(Tm, fm, wm, Dm, im, Rm, mm), void(Dm.ticksToReachMaxIdleFriction = am);
      const pm = wm.isOnGround(),
        Em = Tm.bloxd.getSyncedClientOptions(Tm.bloxd.getPlayerReader(fm)),
        om = null === Em ? Tm.bloxd.getClientPredictedOption(fm, "groundFrictionScale") : Em.groundFrictionScale,
        Om = null === Em ? Tm.bloxd.getClientPredictedOption(fm, "airFrictionScale") : Em.airFrictionScale,
        Ym = pm ? om : Om,
        qm = Math.max(xm, Ym),
        jm = Dm.ticksToReachMaxIdleFriction / am,
        Vm = (0, Am.z)(qm, Ym, jm);
      im.friction = mm.standingFriction * ((null === Em ? Tm.bloxd.getClientPredictedOption(fm, "airMomentumConservation") : Em.airMomentumConservation) ? Vm : Ym), Dm.ticksToReachMaxIdleFriction > 0 && Dm.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);