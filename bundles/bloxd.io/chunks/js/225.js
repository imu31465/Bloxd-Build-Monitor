export const id = 225;
export const ids = [225];
export const modules = {
  38460: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ek
    });
    var Xk = Ik(187),
      Tk = Ik(37680);
    const ik = 1.2,
      yk = {
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
        Xq: .5,
        zFk: !1
      },
      lk = {
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
        Xq: .5,
        zFk: !1
      },
      ak = {
        physicsBodyDimensions: {
          width: Xk.f.CH,
          height: Xk.f.NH
        },
        hitBoxDimensions: {
          width: Xk.f.CH + .4,
          height: Xk.f.NH + .6
        },
        eyeHeight: Xk.f.NH * Xk.f.playerEyeToHeightRatio,
        rideHeight: Xk.f.NH - .3,
        Xq: .5,
        zFk: !1
      },
      qk = {
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
        Xq: .5,
        zFk: !1
      },
      Lk = {
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
        Xq: .5,
        zFk: !1
      },
      tk = {
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
        Xq: .5,
        zFk: !1
      },
      Zk = {
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
        Xq: .5,
        zFk: !1
      },
      jk = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Xk.f.CH,
            height: Xk.f.NH
          },
          hitBoxDimensions: {
            width: Xk.f.CH + .4,
            height: Xk.f.NH + .6
          },
          eyeHeight: Xk.f.NH * Xk.f.playerEyeToHeightRatio,
          rideHeight: Xk.f.NH - .1,
          Xq: Tk.f.Xq,
          zFk: !0
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
        },
        Camel: {
          modelScale: ik,
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
        },
        "Cave Golem": yk,
        "Draugr Zombie": {
          ...ak,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": ak,
        "Frost Golem": yk,
        "Frost Zombie": {
          ...ak,
          defaultPose: "zombie"
        },
        "Frost Skeleton": ak,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Xk.f.CH,
            height: Xk.f.NH
          },
          hitBoxDimensions: {
            width: Xk.f.CH + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Xq: .5,
          zFk: !1
        },
        Wolf: qk,
        Bear: Lk,
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
          Xq: .5,
          zFk: !1
        },
        Stag: tk,
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
          Xq: .5,
          zFk: !1
        },
        Gorilla: Zk,
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
          Xq: .5,
          zFk: !1
        },
        "Draugr Huntress": ak,
        "Magma Golem": yk,
        "Spirit Golem": yk,
        "Spirit Wolf": qk,
        "Spirit Bear": Lk,
        "Spirit Stag": tk,
        "Spirit Gorilla": Zk,
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Xk.f.CH,
            height: Xk.f.NH
          },
          hitBoxDimensions: {
            width: Xk.f.CH + .4,
            height: Xk.f.NH + .6
          },
          eyeHeight: Xk.f.NH * Xk.f.playerEyeToHeightRatio,
          rideHeight: Xk.f.NH - .1,
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Xk.f.CH,
            height: Xk.f.NH
          },
          hitBoxDimensions: {
            width: Xk.f.CH + .4,
            height: Xk.f.NH + .6
          },
          eyeHeight: Xk.f.NH * Xk.f.playerEyeToHeightRatio,
          rideHeight: Xk.f.NH - .1,
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
        },
        Zombie: {
          ...ak,
          defaultPose: "zombie"
        },
        Skeleton: ak,
        Mummy: {
          ...ak,
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
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
          Xq: .5,
          zFk: !1
        },
        "Iron Guardian": lk,
        "Gold Guardian": lk,
        "Diamond Guardian": lk,
        "Moonstone Guardian": lk,
        "Iron Goofy Golem": lk,
        "Gold Goofy Golem": lk,
        "Diamond Goofy Golem": lk,
        "Moonstone Goofy Golem": lk,
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
          Xq: .5,
          zFk: !1
        }
      };

    function ek(kk) {
      return jk[kk]
    }
  },
  37118: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    const Xk = {
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
  37686: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(354),
      Tk = Ik.n(Xk),
      ik = Ik(1844);
    let yk;
    var lk, ak, qk, Lk, tk, Zk, jk, ek, wk;
    const Hk = [1, "b", 0, 90, "c", "i", "g", 69, 177, 4, 8, 255, "length", 2, 49, 50, 73, "undefined", 120, 63, 6, "fromCodePoint", 7, 12, "push", 95, 238, "h", 35, 9, 79, 91, "e", "f", 8191, 88, 13, 14, 224, 181, 166, 154, null, 47, 10, 59, 123, 3, 127, 188, 128, 80, "a", 40, 11, "d", 226, 60, 15, 135, 144, 145, 146, 150, 151, 152, 136, 137, 138, 139, 147, 148, 149, 158, 159, 140, 141, 142, 143, 70, 17, 193, 180, 24, 1e3, "s=", "=", ";", "/", 5, "ck", 204, 163, 173, 20, void 0, 37, 33, 64, 165, 84, 196, 190, 101, 241, "on"];

    function Jk(...kk) {
      return kk[Hk[12]] = Hk[0], typeof lk[kk[Hk[2]]] === Hk[17] ? lk[kk[Hk[2]]] = function(...kk) {
        for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[0]] = 'z)jAO0*|&hg7f"#CsB~a,;u4Z2x+/%[5It>!1R(U?m^Q<E=vVWiS@8Kq_FDH3pwd}Ne]Gl6:9kTM.oJ${bnYPrLXy`c', kk[Hk[1]] = "" + (kk[Hk[2]] || ""), kk[Hk[4]] = kk[Hk[1]].length, kk[Hk[9]] = [], kk[-Hk[7]] = Hk[2], kk[-Hk[8]] = Hk[2], kk[Hk[6]] = -Hk[0]), kk[-Hk[3]] = Hk[2]; kk[-Hk[3]] < kk[Hk[4]]; kk[-Hk[3]]++)
          if (kk[Hk[5]] = kk[Hk[0]].indexOf(kk[Hk[1]][kk[-Hk[3]]]), kk[Hk[5]] !== -Hk[0])
            if (kk[Hk[6]] < Hk[2]) kk[Hk[6]] = kk[Hk[5]];
            else {
              Ok(kk[Hk[6]] += kk[Hk[5]] * Hk[31], kk[-Hk[7]] |= kk[Hk[6]] << kk[-Hk[8]], kk[-Hk[8]] += (kk[Hk[6]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
              do {
                Ok(kk[Hk[9]].push(kk[-Hk[7]] & Hk[11]), kk[-Hk[7]] >>= Hk[10], kk[-Hk[8]] -= Hk[10])
              } while (kk[-Hk[8]] > Hk[22]);
              kk[Hk[6]] = -Hk[0]
            } return kk[Hk[6]] > -Hk[0] && kk[Hk[9]].push((kk[-Hk[7]] | kk[Hk[6]] << kk[-Hk[8]]) & Hk[11]), xk(kk[Hk[9]])
      }(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
    }

    function xk(...kk) {
      return kk[Hk[12]] = Hk[0], typeof Lk !== Hk[17] && Lk ? (new Lk).decode(new tk(kk[Hk[2]])) : typeof Zk !== Hk[17] && Zk ? Zk.from(kk[Hk[2]]).toString("utf-8") : wk(kk[Hk[2]])
    }

    function Pk() {}
    Ok(lk = {}, ak = ["&T$kLi~@2wNI#pL?SxtK;F&ZwC/,)", "n*Z[fl:%c##waih", 'I?<%ZvyZvCb]kZ",[3=q..o|.79=PH?x%N7oD8S)wd=B+#gU~:Og:1z', 'M_"q$FG=d3QqipRa:E;.KRz', "[=:.ewnZIFQg}A0[nA38O>`|JHD_AxK/", 'p5Q%rHB"IF3', "_V#hzLyfO}h9}+r?:Gh*4J5Mg#pe8V,>.z", '5*>Mct"v(a)s,v]~UVI[;l+akNf9)9dRr>1TBYA2h#Q', "|Fi+G1x[*gc]20I4]k(.Ho,&zevqnW,>0~N*gwrl5;,.`O&RiSh9JbKTsftN)", 'pK"TsYz[TwYTPA', "_S;Te9O^fNGdLW/1ESGi@MN4$CvOwW5B)?A%)3;md855Fs7x}>a%C.q)", ':,q.w$E)38n_="`m1KtK6$:"k,E#KW|R=F=@KRld>3%g[px/3AA', "HBK@WdL??NKk7nG(,%(/[", "]/Xh6V48.H+D)9.xUf(5)=Wvih*$)", "1T5k<R$Sk#=wVY6(xQZhyv#@Hw#9/O3[^%Y8~", 'IR!%%!W|FBb&)9lZ)%J:P.6Zkwn8o1GZ<TY8@6vm+Hu"`3s>JE8O', 't%PilT!"mNOnzAeBuI5/H8nLmBE._YYm_A{KbtBl5d%9.O4%', "dw(W93;8tf,l}1NB!KUWeTl||", "G*t[2YQv%wroEOhUF:6/K_<f*}wWtV:R+40|O=dmGhHIipY>yVj", "`/M%4YB!<HN/a(:5S?vk@o72.#iH*ptZx4_WCYa)$&", 'G4{h4F#@jhBG[#4>:,l:y:3D+HCn^2^a53".8U~@G}"q&:q%cz', ']Bd.8_o$r"2DMx{>CW.|d8YFgB^{EOZmz3_WrlT>F,r203IZ', "&IKqzVTfkwHo7:d^KxPoVG/fYf<l[j3%CRj", 'hW9*(p9@o_ARr1%4:N{S"iH)', "%hhM(K2%DB%whs@+{NKk#bO1[e4D7j,>", '8FxS+:>}i39u)s)QUG]0:b[1/;Ge9:3[Vh5k4(LfxwODhPVxjh8goEK=4"', '`B^+Ud!"E;$8elhUAIa9J./1[dwe)', "?Aw.klJT_Dq", "4GvhF=FrAh", "9_|hKPB![dWBX#t4YSOo_39**", "e/h*8Uqv*g3@;si/5Rl|y@Bb/#n6,A", "^BoT89+80g?{7C#", ">A~9@omv.8{_,A6agO8gk.A8}8C,PA3%lKaoBYS)IF,>2s_/q>j", ";%_W%@_?)f)v`ZH%sf!9XJRaJd}H`O", "OOJ:VS7aVC$={A", "?F[|h.S%|gU5VY&(Ae^%vM^{?,/+=2fUBfz[X:mdZD;.5AkUVR<TLlodsf", "V5QoXv(1id!eNO+BRQ,oPEW!{~zn{AeZ;4ykQ6kS{Fc0P!C+3:S9/!tF|", "AW=5Sdz1Tw*>~R7xSF4O^M]SlKG_q#026KGo?dq46amkvv&", ".,4W}q*[HB/@Ax$x(*q.D8kMhqmB/:z43KuO&L^jWK&su0g", "bV_WoFZ}3wzKe2[[fWP0mG{?=;QV)", ".wJW!pn=t3*n6Wamx=.x!?PT&gL6.:9aP6(Ofluj", 'P>lg@nWvBK"[b{r!34=5YHGf<&P]iW/!%=~ImRl"EHKW{:w[jF(h%', '|W=h&Ti@^H=.]#)[b_whY(zDAKn&O+lRvw(|g1+8&"5ZwWs,7f4@u@m"iftA)', 'L6IM^{X)B~ToIV[^$**@<S%%2B4V!ni?*%W*D6|m_"', '#3=Ojw)"mB[,g07,sFx+Z', "Q*j9:Tw~*gu$tW*Rf=:*T(n@$3C*&:oUVf3o@dz", "TRK|=d^DDwq6)", ">FQ%A>g~X}B$AU}~0d)JZ:jZ^H,A]D!RO3=qP@$mSK%$qCz%]A2*p$[1r}K", ")O!%kq??0g", "s~e&8dr)", "*K&JERa|rK7A9Cgx", '6VtS:q%M~KCqZH_!qxPx$1*ZT#"GtsF>MS0.%k*&PaMI!xn>UQ>IIv"v$f', ';S;5@dujS}t+|nA2V:y*^{kM0"3', 'FwI+kVT~&"XT7n|a^G)', "eGX@.Y(f*", "[3dKDD}D)~(|IvL?8:utVWK@@hsG^R+^9N^9m_<~*", "gG3TZYh8|", "HV!Tr:s&W~L8wRcmUfw|S=]m|", 'pVe0C10"0}^lNV3^/=}KB14!o8NdeR+Bf~{*(Wy>h,P~)', '9wK@J.6*TBS.R"rm0!ox"', "]Ba%OqjZyBZDA64!/)", "kV$WYYHl]hco@VW+^Ssh@MyfBe?BFVmUuI<TaJq)H,b8#05^", ";I]&6bO~4}NojRj1%3B+&b5m5;pHyv#xlGgIC13=S3M)d6eRAdEg?nz", "Sx65qn11fN0$Bsd%0fW+_3??I~|SFZl~yw;|Z.l4K}N#ms2!+3^S)90)", ")W%/)qZ=|qb3$x~/I?%5/(oSCd[>WO", "QS!9KUM|SFGCyC>43,j", '~f"|gFr|AfAM+ir?6w<gxkK=t3*$5j', 'm,j9bFW"$~4gyYeBC~]%BF")zC._ms6~U:=k(GS||', "*32+VPc{3wsG`ZeR*f&[)V7|zfH#EO[%7)", "%3eI.Y<[Ph;$cxC,Y2B+si6=2N6ouxK+84j", '?S~I?_PDE#Ql>#!~x=O|T(0M|"e8"3DmrkiI+', '?%q@{iNSdC9Inb6~FVMI.1u=/w"R!j', "0W_kKR0)", ';Ij+[vuj#HW5r1VUnA(5~1kF>d9]1HLu=R?*sw!![e"G+vs?Xz', "3w7%YHT*h,Yuan31QxPx!ro)", "?GnS1Mo|5;T7OA", "h~_h*bCvPFV.pZ31mNJ/sYX)", 'tK%@7q9Tp8A+^2g2HHlqrr{f9"w)fva+OCIksF]4`#K', "vKdhEn=fseT~eR0R,3s[rYT>7NQ", 'l^nIK={=m,uBPHa>3hfTKUQ!|"G6TxH/`,M8BFF%4,=w)', "*%q@`YY)=7nIDWNZ0T[/}$)2F,", ">f^S4it|:DC9elUa]4^M08jD]KuA{Yh", ':79htvdSX"/>A(A50Km[o1taR"gpv(L>u:5K#b.=GhMI$6t4>fPx^k!b=~', "/=jMR?D=mNE#{A", "6^+%aY;aVf0vIveZ:hyW2@e~0})M](NBx:~ID3z", '"dHT[@!bg#L6dC"ayE&KhFZ[H7zJIO', "l,u@~.p!M7vB)", '7R%T@M^@Jd5wq6[1o2rifVb"&DVlolc1;?u@]$d)', "kE7TmKfL]a", "qK4W1?K~]KlW[WNB>?YI%?Rv<HR.O:|a|)", "QGWK1?]!QB/|rZ9xD><%x", 'b5JOG9|)7#xVhPoa3w8qLtb"Tw*GZ162Zxj', "OW]xL(iDYKfG5:g(<?O0VWh)", "<,Y&Clv|5f^;:(|(L2L/$qL?ZB^{9CIRIfdhjL:)", '+:]iriqMVfal_VlRS:OqW_g=0ak{cW72/=4[nJ.LX">>X6h', "P69*VGmvS}mAzC2>[GZSz1{f_Ba[C#ExaIA", "mG(.G>cL*Dvk^WK?ZK<g$(oS>hE5>Wt1*IL.}3`rsf_@VA", 'yHt[ES:"<7(A]6)1`/5hWMj^8"<gc2~+I%L|Fdz', "*F2J3Uk|p88kt0o(NK[h", "RRM0h3r!;}vqd#65?fxSuJ!!)K*v)", "$H,%oVkF8a^;WsP+kETSK_(1}fyIRV%%Sz", "qF]8>@EaBd;A7#s,9EkS)=0m|}B+FZ>4b*L:QdC|H&hMzA62C:A", '6*V*FUWm*D_.7vmU$wg+4@H"{d}kS+)^bNo/>roF)f', '#fv@K=9~r"z99O', "!Fv@N9:M;a?wIH%!7R@g9Ta){d@ejbY+z?iS5rA22N0pHn`!j35h", "~?0iFPF%K}po@O6aeA.ikV%lAaK5<+.(t%8qWd5m4Dd67x*Q?*?k!?b%ua<#)", "`8vO*>n@38e{Y!_!DAbSZ(e[o7BG19|a5C,g", "7TZtO=Y!zhS~Tl5R:SZhC1^fWeNe=2?5eS>MtJf=Vd>+Tbh", "$H%gbF4meFgG;9%4#I6::>(@=dzta#V?(N:OoY:mm#lk)", "Z3G:}U=j}8uV!(&", 'i>aoNVY%.He2x04?aIXk[J02,akkJbN5t*2KMVr%yD$1sA"+j;9hvDn>|', "SR6|`v/ZGa];{:?x,)", '9#:kZ:"aV;hVhsy!vSAi"Fq%K}{Chs9(', "?Q+%(kz", "w?3%!!e*z3e6C#>~0:JW#wHm%~93?Hp4RG1o9q|2.BLf)Pb?)I,goiz", "!4%|/:)!CC", '}KC@4v?f#~?.rWw1)W"g^kn>U,cI2V0RTH(W8Px[IFf9AU`4dN)', "@x3gMYw=,F+9=(g", "!3;ON$&1E;t>=WL??TSI<pcGv8jhIYU5P2#q|b<j", ']EH&|TCm!K1$=#K?OhIWSDtm#dc0"3?xV:RT)3blTw(A]#(R!TJ55rr)', '2=^M;Fc=jai.31,/5?i9D6I[p#*R@+`s_Gb&qU")', "~fqWVW*1K};5d6v+d/?*", "@=5_4?5M", "eS(5ob,j", "RQSIvG>j", "+TY&", "}hS&[:z", "+Q;g", "AeKWK=|)", "9^1#C*}n", "Y.2tCB?O", ".>9h36z", "QeMf8mkn", "$e_V+)kn", "ee:f", "mK`2?1J", 'Qe=~"Sbn', "!eHmkmXn", "oz=~I>.n", "4Pl~X", "Qe=~kmXn", "ozMf$pln", "byR&4)Qn", "poR44>bn", "1}%4W~Qn", "0})m~CXn", "Vz~c5=Kn", "Qe=~kmzj0B", "y9.4V1^B|l", "#kI_CCia0B", "ry_V#pXn", "4,)m?~3(", "ZDD4;", "jeMf", ":e=cB", "yPr4j", "VuN}M.9n", "%?i2;", "ry}4[A8n", "42}&j)J", "ry}4;>Ej0B", "4?k~Y>%Bm^", "]U}&ecBC_", "ry}4;>$n", "ozR4ImP(", "Vz/4Fpun", "j,)m?~J", "u@>m(X>d", 'wDMX2:")', "|Nz&2ri`", "rN*g", "yD:m", "[]|e", "G~:m", "o@2_dNJf", 'yDte"', "fLse", "xS6g", "H?/&", "+el~>Cyn", "yYWL0Iec", "(vsf9ZEn", "$k1mCCkn", "/2q&", "<yi2", "0P}4<=Kn", "%cq&", "$Pq4Smln", "P,i[Pp8n", "W0XfpCXn", "NK1HFpJ", ',Ip3r"KA', "^Hph", "KCroD[^N", "1RYP:56", "DuWkSgOA", "wxp3y`LA", "[RCj>#5w", "HdvutPBD", "QKcTt<AY", "jH5hF78", 'ar%H,m"G', "g5/l#", "A})m~CXn", "$Pq4/~tn"]), Ok(qk = function(...kk) {
      Ok(kk[Hk[12]] = Hk[2], kk[Hk[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], kk[Hk[1]] = Hk[95], kk[Hk[13]] = []);
      try {
        Ok(kk[Hk[1]] = Object, kk[Hk[13]][Hk[24]]("".__proto__.constructor.name))
      } catch (ak) {}
      kk: for (kk[Hk[14]] = Hk[2]; kk[Hk[14]] < kk[Hk[15]][Hk[12]]; kk[Hk[14]]++) try {
        for (kk[Hk[1]] = kk[Hk[15]][kk[Hk[14]]](), kk[Hk[16]] = Hk[2]; kk[Hk[16]] < kk[Hk[13]][Hk[12]]; kk[Hk[16]]++)
          if (typeof kk[Hk[1]][kk[Hk[13]][kk[Hk[16]]]] === Hk[17]) continue kk;
        return kk[Hk[1]]
      } catch (ak) {}
      return kk[Hk[1]] || this
    }() || {}, Lk = qk.TextDecoder, tk = qk.Uint8Array, Zk = qk.je, jk = qk.String || String, ek = qk.Array || Array, wk = function(...kk) {
      return Ok(kk[Hk[12]] = Hk[2], kk[Hk[25]] = new ek(Hk[50]), kk[Hk[1]] = jk[Hk[21]] || jk.fromCharCode, kk[Hk[18]] = []),
        function(Fk) {
          var Ik, Xk, Tk, ik;
          for (Ok(Xk = void 0, Tk = Fk[Hk[12]], kk[Hk[18]][Hk[12]] = Hk[2]), ik = Hk[2]; ik < Tk;) Ok(Xk = Fk[ik++], Xk <= Hk[48] ? Ik = Xk : Xk <= 223 ? Ik = (31 & Xk) << Hk[20] | Fk[ik++] & Hk[19] : Xk <= 239 ? Ik = (Xk & Hk[58]) << Hk[23] | (Fk[ik++] & Hk[19]) << Hk[20] | Fk[ik++] & Hk[19] : jk[Hk[21]] ? Ik = (Xk & Hk[22]) << 18 | (Fk[ik++] & Hk[19]) << Hk[23] | (Fk[ik++] & Hk[19]) << Hk[20] | Fk[ik++] & Hk[19] : (Ik = Hk[19], ik += Hk[47]), kk[Hk[18]][Hk[24]](kk[Hk[25]][Ik] || (kk[Hk[25]][Ik] = kk[Hk[1]](Ik))));
          return kk[Hk[18]].join("")
        }
    }());
    const Kk = Tk()[Jk(Hk[46])](),
      Qk = Tk()[Jk(Hk[46])](),
      sk = Tk()[Jk(Hk[46])](),
      Vk = Tk()[Jk(Hk[46])](),
      zk = Tk()[Jk(Hk[46])](),
      Sk = Tk()[Jk(Hk[46])](),
      vk = Tk()[Jk(Hk[46])](),
      Ek = (...kk) => {
        kk[Hk[12]] = Hk[47];
        const Fk = Sk;
        return Tk()[Jk(124) + Jk(125)](Fk, kk[Hk[13]]), Tk()[Jk(126)](kk[Hk[2]], Fk, Tk()[Jk(Hk[48])](Fk, kk[Hk[0]]))
      };

    function Ok() {
      Ok = function() {}
    }
    yk = (...kk) => {
      function Fk(...kk) {
        return kk[Hk[12]] = Hk[0], typeof lk[kk[Hk[2]]] === Hk[17] ? lk[kk[Hk[2]]] = function(...kk) {
          for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[0]] = 'J(nDv:_w&2fxk]!e8^QBlMY+t;y%X"jH4#Kr$0bGzF|P5o9<E{.}LsuV*,g/?OWUi6@R=A1)`[c3m~>7pCZqdSaThIN', kk[Hk[1]] = "" + (kk[Hk[2]] || ""), kk[Hk[49]] = kk[Hk[1]].length, kk[Hk[9]] = [], kk[Hk[32]] = Hk[2], kk[Hk[20]] = Hk[2], kk[Hk[6]] = -Hk[0]), kk[Hk[10]] = Hk[2]; kk[Hk[10]] < kk[Hk[49]]; kk[Hk[10]]++)
            if (kk[Hk[29]] = kk[Hk[0]].indexOf(kk[Hk[1]][kk[Hk[10]]]), kk[Hk[29]] !== -Hk[0])
              if (kk[Hk[6]] < Hk[2]) kk[Hk[6]] = kk[Hk[29]];
              else {
                Ok(kk[Hk[6]] += kk[Hk[29]] * Hk[31], kk[Hk[32]] |= kk[Hk[6]] << kk[Hk[20]], kk[Hk[20]] += (kk[Hk[6]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
                do {
                  Ok(kk[Hk[9]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
                } while (kk[Hk[20]] > Hk[22]);
                kk[Hk[6]] = -Hk[0]
              } return kk[Hk[6]] > -Hk[0] && kk[Hk[9]].push((kk[Hk[32]] | kk[Hk[6]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[9]])
        }(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
      }
      kk[Hk[12]] = Hk[10], Jk(Hk[50]) in Pk && function(...kk) {
        kk[Hk[12]] = Hk[2]
      }();
      const Ik = kk[Hk[2]][Jk(131)][Fk(132) + Fk(133) + Fk(134)](kk[Hk[0]]);
      kk[-Hk[58]] = kk[Hk[2]][Fk(Hk[59])][Fk(Hk[66]) + Fk(Hk[67]) + Fk(Hk[68]) + Fk(Hk[69])](Ik);
      const Xk = kk[-Hk[58]] === Hk[42] ? kk[Hk[2]][Fk(Hk[59])][Fk(Hk[75]) + Fk(Hk[76]) + Fk(Hk[77]) + Fk(Hk[78])](kk[Hk[0]], Fk(Hk[60]) + Fk(Hk[61]) + Fk(Hk[62]) + Hk[32]) : kk[-Hk[58]][Fk(Hk[60]) + Fk(Hk[61]) + Fk(Hk[62]) + Hk[32]],
        yk = kk[-Hk[58]] === Hk[42] ? kk[Hk[2]][Fk(Hk[59])][Fk(Hk[70]) + Fk(Hk[71]) + Fk(Hk[72])](kk[Hk[0]], Fk(Hk[63]) + Fk(Hk[64]) + Fk(Hk[65])) : kk[-Hk[58]][Fk(Hk[63]) + Fk(Hk[64]) + Fk(Hk[65])];
      Ok(Tk()[Fk(153)](Kk, Hk[2], Hk[2], kk[Hk[89]]), Tk().ei(Kk, Kk, Tk()[Fk(Hk[41])], kk[Hk[47]].heading), Tk()[Fk(155)](vk, kk[Hk[9]].TH), vk[Hk[0]] = Hk[2]);
      const qk = kk[Hk[13]][Fk(156) + Fk(157)]();
      if (Ok(kk[-Hk[58]] = kk[Hk[2]][Fk(Hk[59])][Fk(Hk[66]) + Fk(Hk[67]) + Fk(Hk[68]) + Fk(Hk[69])](Ik), kk[-Hk[13]] = kk[-Hk[58]] === Hk[42] ? kk[Hk[2]][Fk(Hk[59])][Fk(Hk[70]) + Fk(Hk[71]) + Fk(Hk[72])](kk[Hk[0]], Fk(Hk[73]) + Fk(Hk[74])) : kk[-Hk[58]][Fk(Hk[73]) + Fk(Hk[74])]), !qk && Tk()[Hk[90]](vk) && (kk[-Hk[58]] === Hk[42] ? kk[Hk[2]][Fk(Hk[59])][Fk(Hk[75]) + Fk(Hk[76]) + Fk(Hk[77]) + Fk(Hk[78])](kk[Hk[0]], Fk(160) + Fk(161) + Fk(162)) : kk[-Hk[58]][Fk(Hk[92]) + Fk(164) + Fk(Hk[99]) + Fk(Hk[40])])) {
        function ek(...kk) {
          for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[80]] = '{fdALtCjgmeRS<0D`VT8@|3yaH~["x_r+2BU?9)Q>#P]=oEG1(IZws;&Okb*NJ%c:4YqX5F7/,W6!vnz^$}hlK.iMup', kk[Hk[1]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[1]].length, kk[Hk[55]] = [], kk[Hk[32]] = Hk[2], kk[Hk[20]] = Hk[2], kk[Hk[22]] = -Hk[0]), kk[-Hk[79]] = Hk[2]; kk[-Hk[79]] < kk[Hk[47]]; kk[-Hk[79]]++)
            if (kk[Hk[81]] = kk[Hk[80]].indexOf(kk[Hk[1]][kk[-Hk[79]]]), kk[Hk[81]] !== -Hk[0])
              if (kk[Hk[22]] < Hk[2]) kk[Hk[22]] = kk[Hk[81]];
              else {
                Ok(kk[Hk[22]] += kk[Hk[81]] * Hk[31], kk[Hk[32]] |= kk[Hk[22]] << kk[Hk[20]], kk[Hk[20]] += (kk[Hk[22]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
                do {
                  Ok(kk[Hk[55]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
                } while (kk[Hk[20]] > Hk[22]);
                kk[Hk[22]] = -Hk[0]
              } return kk[Hk[22]] > -Hk[0] && kk[Hk[55]].push((kk[Hk[32]] | kk[Hk[22]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[55]])
        }

        function wk(kk) {
          return typeof lk[kk] === Hk[17] ? lk[kk] = ek(ak[kk]) : lk[kk]
        }

        function Sk(...kk) {
          kk[Hk[12]] = Hk[2]
        }
        wk(167) + Hk[4] in Pk && Sk(), Ok(Ek(Qk, Kk, vk), Ek(sk, vk, Kk), Tk()[wk(170)](Vk, vk, sk));
        const nk = Tk()[wk(171)](vk),
          Gk = Tk()[wk(172)](Kk, vk) / kk[Hk[89]] / nk,
          pk = Math[wk(Hk[93])](Gk, Hk[2]) + Hk[0];
        if (kk[Hk[89]] * kk[Hk[89]] < Tk()[Hk[90]](sk)) {
          function uk(...kk) {
            function Fk() {}
            kk[Hk[12]] = Hk[2], Ok(kk[Hk[1]] = function(...kk) {
              for (Ok(kk[Hk[12]] = Hk[13], kk[-Hk[3]] = Hk[2], kk[Hk[1]] = Hk[2], kk[Hk[91]] = new Fk(Hk[2]), kk[Hk[55]] = kk[Hk[91]], kk[Hk[20]] = kk[Hk[2]], kk[-Hk[92]] = kk[Hk[0]]); kk[Hk[20]] !== Hk[42] || kk[-Hk[92]] !== Hk[42];) Ok(kk[Hk[1]] = (kk[Hk[20]] ? kk[Hk[20]].val : Hk[2]) + (kk[-Hk[92]] ? kk[-Hk[92]].val : Hk[2]) + kk[-Hk[3]], kk[-Hk[3]] = Math.floor(kk[Hk[1]] / Hk[44]), kk[Hk[55]].next = new Fk(kk[Hk[1]] % Hk[44]), kk[Hk[55]] = kk[Hk[55]].next, kk[Hk[20]] = kk[Hk[20]] ? kk[Hk[20]].next : Hk[42], kk[-Hk[92]] = kk[-Hk[92]] ? kk[-Hk[92]].next : Hk[42]);
              return kk[-Hk[3]] && (kk[Hk[55]].next = new Fk(kk[-Hk[3]])), kk[Hk[91]].next
            }, console.log(kk[Hk[1]]))
          }
          wk(174) in Pk && uk(), Tk()[wk(175)](Kk, Kk, sk, pk)
        }
        Ok(kk[-Hk[13]] = (0, ik.u)(kk[-Hk[13]], 1, Math[wk(Hk[93])](Hk[0], Math[wk(176)](Hk[2], -Gk, Hk[0] - nk / kk[Hk[89]]))), Tk()[wk(Hk[8])](Kk, Kk, Vk))
      }
      const Lk = zk;
      if (Ok(Tk()[Fk(178)](Lk, Kk, vk), Lk[Hk[0]] = Hk[2], kk[Hk[44]] = Tk()[Fk(179)](Lk)), !qk) {
        function bk(...kk) {
          for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[0]] = '@cDnVmGqoLaNkA!f9_J&}8Uiw;^j=$X>pt*g#RvSW3yzB[46d+1Kh?Cs)IQEre<H~ZFl|"T2/0YbM%`{]OxP5u(,7.:', kk[Hk[13]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[13]].length, kk[Hk[9]] = [], kk[Hk[32]] = Hk[2], kk[Hk[20]] = Hk[2], kk[Hk[22]] = -Hk[0]), kk[Hk[27]] = Hk[2]; kk[Hk[27]] < kk[Hk[47]]; kk[Hk[27]]++)
            if (kk[-Hk[94]] = kk[Hk[0]].indexOf(kk[Hk[13]][kk[Hk[27]]]), kk[-Hk[94]] !== -Hk[0])
              if (kk[Hk[22]] < Hk[2]) kk[Hk[22]] = kk[-Hk[94]];
              else {
                Ok(kk[Hk[22]] += kk[-Hk[94]] * Hk[31], kk[Hk[32]] |= kk[Hk[22]] << kk[Hk[20]], kk[Hk[20]] += (kk[Hk[22]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
                do {
                  Ok(kk[Hk[9]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
                } while (kk[Hk[20]] > Hk[22]);
                kk[Hk[22]] = -Hk[0]
              } return kk[Hk[22]] > -Hk[0] && kk[Hk[9]].push((kk[Hk[32]] | kk[Hk[22]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[9]])
        }

        function Rk(...kk) {
          return kk[Hk[12]] = Hk[0], typeof lk[kk[Hk[2]]] === Hk[17] ? lk[kk[Hk[2]]] = bk(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
        }

        function Uk(...kk) {
          kk[Hk[12]] = Hk[2];
          const Fk = require("big-integer");
          Ok(kk[Hk[41]] = class {
            static randomPrime(...kk) {
              kk[Hk[12]] = Hk[0];
              const Ik = Fk.one.shiftLeft(kk[Hk[2]] - Hk[0]),
                Xk = Fk.one.shiftLeft(kk[Hk[2]]).prev();
              for (;;) {
                let kk = Fk.randBetween(Ik, Xk);
                if (kk.isProbablePrime(256)) return kk
              }
            }
            static generate(...kk) {
              kk[Hk[12]] = Hk[0];
              const Ik = Fk(65537);
              let Xk, Tk;
              kk[-Hk[94]] = Hk[95];
              do {
                Ok(Xk = this.randomPrime(kk[Hk[2]] / Hk[13]), Tk = this.randomPrime(kk[Hk[2]] / Hk[13]), kk[-Hk[94]] = Fk.lcm(Xk.prev(), Tk.prev()))
              } while (Fk.gcd(Ik, kk[-Hk[94]]).notEquals(Hk[0]) || Xk.minus(Tk).abs().shiftRight(kk[Hk[2]] / Hk[13] - 100).isZero());
              return {
                e: Ik,
                n: Xk.multiply(Tk),
                d: Ik.modInv(kk[-Hk[94]])
              }
            }
            static encrypt(...kk) {
              return kk[Hk[12]] = Hk[47], Fk(kk[Hk[2]]).modPow(kk[Hk[13]], kk[Hk[0]])
            }
            static decrypt(...kk) {
              return kk[Hk[12]] = Hk[47], Fk(kk[Hk[2]]).modPow(kk[Hk[0]], kk[Hk[13]])
            }
            static encode(kk) {
              const Ik = kk.split("").map((kk => kk.charCodeAt())).join("");
              return Fk(Ik)
            }
            static decode(...kk) {
              kk[Hk[12]] = Hk[0];
              const Fk = kk[Hk[2]].toString();
              kk[-Hk[70]] = "";
              for (let Ik = Hk[2]; Ik < Fk.length; Ik += Hk[13]) {
                let Xk = Number(Fk.substr(Ik, Hk[13]));
                Xk <= 30 ? (kk[-Hk[70]] += String.fromCharCode(Number(Fk.substr(Ik, Hk[47]))), Ik++) : kk[-Hk[70]] += String.fromCharCode(Xk)
              }
              return kk[-Hk[70]]
            }
          }, module.exports = kk[Hk[41]])
        }
        Rk(Hk[82]) in Pk && Uk(), kk[Hk[44]] *= kk[-Hk[13]]
      }
      const tk = kk[Hk[20]][Fk(Hk[39]) + Fk(182) + Fk(183)],
        Zk = tk ? Math[Fk(184)](tk, kk[Hk[44]]) : kk[Hk[44]];
      Tk()[Fk(185) + Fk(186)](Lk, Lk);
      const jk = kk[Hk[22]] !== Hk[42] && void 0 !== kk[Hk[22]] ? kk[Hk[22]] : kk[Hk[20]][Fk(187) + Fk(Hk[49]) + Fk(189) + Fk(Hk[102])];
      if (Zk > Hk[2]) {
        function Ck(...kk) {
          for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[0]] = '8GAPbftahHkEUW}uQ|=2L>/)e#xdiDFl3nSV,ZO~K<sINXr;?"659wMzR1y.JCo^jcq4+T_7YBv*(`g$%0:p&m[@]!{', kk[Hk[1]] = "" + (kk[Hk[2]] || ""), kk[-Hk[61]] = kk[Hk[1]].length, kk[-Hk[37]] = [], kk[-Hk[97]] = Hk[2], kk[Hk[33]] = Hk[2], kk[Hk[6]] = -Hk[0]), kk[-Hk[96]] = Hk[2]; kk[-Hk[96]] < kk[-Hk[61]]; kk[-Hk[96]]++)
            if (kk[Hk[5]] = kk[Hk[0]].indexOf(kk[Hk[1]][kk[-Hk[96]]]), kk[Hk[5]] !== -Hk[0])
              if (kk[Hk[6]] < Hk[2]) kk[Hk[6]] = kk[Hk[5]];
              else {
                Ok(kk[Hk[6]] += kk[Hk[5]] * Hk[31], kk[-Hk[97]] |= kk[Hk[6]] << kk[Hk[33]], kk[Hk[33]] += (kk[Hk[6]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
                do {
                  Ok(kk[-Hk[37]].push(kk[-Hk[97]] & Hk[11]), kk[-Hk[97]] >>= Hk[10], kk[Hk[33]] -= Hk[10])
                } while (kk[Hk[33]] > Hk[22]);
                kk[Hk[6]] = -Hk[0]
              } return kk[Hk[6]] > -Hk[0] && kk[-Hk[37]].push((kk[-Hk[97]] | kk[Hk[6]] << kk[Hk[33]]) & Hk[11]), xk(kk[-Hk[37]])
        }

        function Nk(...kk) {
          return kk[Hk[12]] = Hk[0], typeof lk[kk[Hk[2]]] === Hk[17] ? lk[kk[Hk[2]]] = Ck(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
        }
        let ck = kk[Hk[13]][Nk(191) + Nk(192)] * jk;
        if (!qk) {
          function fk(...kk) {
            for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[52]] = '6LNjIWnZHsPGQSapeFgTkfcXEDCBYqmJodlKVRiMtxA;hzU49Obr7?^)u"v#{<1}+]32/>*|%&_w$=[@:5y.`0!(~8,', kk[Hk[98]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[98]].length, kk[Hk[55]] = [], kk[Hk[32]] = Hk[2], kk[Hk[20]] = Hk[2], kk[-Hk[28]] = -Hk[0]), kk[Hk[27]] = Hk[2]; kk[Hk[27]] < kk[Hk[47]]; kk[Hk[27]]++)
              if (kk[Hk[5]] = kk[Hk[52]].indexOf(kk[Hk[98]][kk[Hk[27]]]), kk[Hk[5]] !== -Hk[0])
                if (kk[-Hk[28]] < Hk[2]) kk[-Hk[28]] = kk[Hk[5]];
                else {
                  Ok(kk[-Hk[28]] += kk[Hk[5]] * Hk[31], kk[Hk[32]] |= kk[-Hk[28]] << kk[Hk[20]], kk[Hk[20]] += (kk[-Hk[28]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
                  do {
                    Ok(kk[Hk[55]].push(kk[Hk[32]] & Hk[11]), kk[Hk[32]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
                  } while (kk[Hk[20]] > Hk[22]);
                  kk[-Hk[28]] = -Hk[0]
                } return kk[-Hk[28]] > -Hk[0] && kk[Hk[55]].push((kk[Hk[32]] | kk[-Hk[28]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[55]])
          }

          function Bk(...kk) {
            return kk[Hk[12]] = Hk[0], typeof lk[kk[Hk[2]]] === Hk[17] ? lk[kk[Hk[2]]] = fk(ak[kk[Hk[2]]]) : lk[kk[Hk[2]]]
          }
          ck *= kk[Hk[13]][Bk(Hk[81]) + Bk(194)]
        }
        let Wk = kk[Hk[13]][Nk(195) + Nk(Hk[101]) + "ss"] * Zk;
        if (Zk < .3 && (Wk *= Zk), ck > Wk) {
          function dk(...kk) {
            for (Ok(kk[Hk[12]] = Hk[0], kk[Hk[43]] = 'y&wx?Mj;sldD5BLA1.{TPE+v^b7gqF=$K|S>N@_4"Zk/XHrGfe,)[Y#8U269~ic%JR<tQu!*:(]Oho3CmIz}Vp`aW0n', kk[Hk[13]] = "" + (kk[Hk[2]] || ""), kk[Hk[47]] = kk[Hk[13]].length, kk[Hk[55]] = [], kk[Hk[89]] = Hk[2], kk[Hk[20]] = Hk[2], kk[Hk[100]] = -Hk[0]), kk[-Hk[99]] = Hk[2]; kk[-Hk[99]] < kk[Hk[47]]; kk[-Hk[99]]++)
              if (kk[Hk[29]] = kk[Hk[43]].indexOf(kk[Hk[13]][kk[-Hk[99]]]), kk[Hk[29]] !== -Hk[0])
                if (kk[Hk[100]] < Hk[2]) kk[Hk[100]] = kk[Hk[29]];
                else {
                  Ok(kk[Hk[100]] += kk[Hk[29]] * Hk[31], kk[Hk[89]] |= kk[Hk[100]] << kk[Hk[20]], kk[Hk[20]] += (kk[Hk[100]] & Hk[34]) > Hk[35] ? Hk[36] : Hk[37]);
                  do {
                    Ok(kk[Hk[55]].push(kk[Hk[89]] & Hk[11]), kk[Hk[89]] >>= Hk[10], kk[Hk[20]] -= Hk[10])
                  } while (kk[Hk[20]] > Hk[22]);
                  kk[Hk[100]] = -Hk[0]
                } return kk[Hk[100]] > -Hk[0] && kk[Hk[55]].push((kk[Hk[89]] | kk[Hk[100]] << kk[Hk[20]]) & Hk[11]), xk(kk[Hk[55]])
          }

          function Yk(kk) {
            return typeof lk[kk] === Hk[17] ? lk[kk] = dk(ak[kk]) : lk[kk]
          }
          Yk(197), ck = Wk
        }
        Ok(Tk()[Nk(200)](Lk, Lk, ck), kk[Hk[9]][Nk(201) + Nk(202)](Lk))
      }
      kk[Hk[9]][Fk(203) + Hk[105]] = kk[Hk[13]][Fk(Hk[91]) + Fk(Hk[61]) + Hk[105]] * (qk ? Xk : yk)
    }
  },
  37680: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => lk
    });
    var Xk = Ik(37686),
      Tk = Ik(1844);
    const ik = 2,
      yk = 1,
      lk = {
        Xq: 1,
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

    function ak(kk, Fk, Ik, lk, ak, qk, Lk) {
      if (ak.speed) return (0, Xk.c)(Fk, Ik, lk, ak, qk, Lk, kk), void(ak.ticksToReachMaxIdleFriction = ik);
      const tk = lk.isOnGround(),
        Zk = Fk.bloxd.getSyncedClientOptions(Fk.bloxd.getPlayerReader(Ik)),
        jk = null === Zk ? Fk.bloxd.getClientPredictedOption(Ik, "groundFrictionScale") : Zk.groundFrictionScale,
        ek = null === Zk ? Fk.bloxd.getClientPredictedOption(Ik, "airFrictionScale") : Zk.airFrictionScale,
        wk = tk ? jk : ek,
        Hk = Math.max(yk, wk),
        Jk = ak.ticksToReachMaxIdleFriction / ik,
        xk = (0, Tk.u)(Hk, wk, Jk);
      qk.friction = kk.standingFriction * ((null === Zk ? Fk.bloxd.getClientPredictedOption(Ik, "airMomentumConservation") : Zk.airMomentumConservation) ? xk : wk), ak.ticksToReachMaxIdleFriction > 0 && ak.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);