export const id = 223;
export const ids = [223];
export const modules = {
  38057: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Uk
    });
    var Dk = ik(189),
      fk = ik(37253);
    const Sk = 1.2,
      bk = {
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
        Or: .5,
        Sek: !1
      },
      rk = {
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
        Or: .5,
        Sek: !1
      },
      Pk = {
        physicsBodyDimensions: {
          width: Dk.g.zp,
          height: Dk.g.Qp
        },
        hitBoxDimensions: {
          width: Dk.g.zp + .4,
          height: Dk.g.Qp + .6
        },
        eyeHeight: Dk.g.Qp * Dk.g.playerEyeToHeightRatio,
        rideHeight: Dk.g.Qp - .3,
        Or: .5,
        Sek: !1
      },
      mk = {
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
        Or: .5,
        Sek: !1
      },
      Mk = {
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
        Or: .5,
        Sek: !1
      },
      Kk = {
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
        Or: .5,
        Sek: !1
      },
      xk = {
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
        Or: .5,
        Sek: !1
      },
      nk = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Dk.g.zp,
            height: Dk.g.Qp
          },
          hitBoxDimensions: {
            width: Dk.g.zp + .4,
            height: Dk.g.Qp + .6
          },
          eyeHeight: Dk.g.Qp * Dk.g.playerEyeToHeightRatio,
          rideHeight: Dk.g.Qp - .1,
          Or: fk.f.Or,
          Sek: !0
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
        },
        Camel: {
          modelScale: Sk,
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
        },
        "Cave Golem": bk,
        "Draugr Zombie": {
          ...Pk,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Pk,
        "Frost Golem": bk,
        "Frost Zombie": {
          ...Pk,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Pk,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Dk.g.zp,
            height: Dk.g.Qp
          },
          hitBoxDimensions: {
            width: Dk.g.zp + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          Or: .5,
          Sek: !1
        },
        Wolf: mk,
        Bear: Mk,
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
          Or: .5,
          Sek: !1
        },
        Stag: Kk,
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
          Or: .5,
          Sek: !1
        },
        Gorilla: xk,
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
          Or: .5,
          Sek: !1
        },
        "Draugr Huntress": Pk,
        "Magma Golem": bk,
        "Spirit Golem": bk,
        "Spirit Wolf": mk,
        "Spirit Bear": Mk,
        "Spirit Stag": Kk,
        "Spirit Gorilla": xk,
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Dk.g.zp,
            height: Dk.g.Qp
          },
          hitBoxDimensions: {
            width: Dk.g.zp + .4,
            height: Dk.g.Qp + .6
          },
          eyeHeight: Dk.g.Qp * Dk.g.playerEyeToHeightRatio,
          rideHeight: Dk.g.Qp - .1,
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Dk.g.zp,
            height: Dk.g.Qp
          },
          hitBoxDimensions: {
            width: Dk.g.zp + .4,
            height: Dk.g.Qp + .6
          },
          eyeHeight: Dk.g.Qp * Dk.g.playerEyeToHeightRatio,
          rideHeight: Dk.g.Qp - .1,
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
        },
        Zombie: {
          ...Pk,
          defaultPose: "zombie"
        },
        Skeleton: Pk,
        Mummy: {
          ...Pk,
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
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
          Or: .5,
          Sek: !1
        },
        "Iron Guardian": rk,
        "Gold Guardian": rk,
        "Diamond Guardian": rk,
        "Moonstone Guardian": rk,
        "Iron Goofy Golem": rk,
        "Gold Goofy Golem": rk,
        "Diamond Goofy Golem": rk,
        "Moonstone Goofy Golem": rk,
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
          Or: .5,
          Sek: !1
        }
      };

    function Uk(kk) {
      return nk[kk]
    }
  },
  36668: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    const Dk = {
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
  37258: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    var Dk = ik(330),
      fk = ik.n(Dk),
      Sk = ik(1850);
    let bk;
    var rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk;
    const wk = [1, 139, 0, 8, 11, "i", 17, "e", "f", "d", 255, "length", "b", 129, 201, "undefined", void 0, "c", 224, 3, "a", 63, 6, "fromCodePoint", 7, 12, "push", 102, 59, 94, 2, 22, 9, 159, 91, 200, 8191, 88, 13, 14, !1, !0, 203, "g", 4, 60, 210, 103, 115, 116, 117, null, 111, 112, 113, 114, 118, 119, 120, 107, 108, 109, 110, 127, 128, 130, 131, 132, 133, 134, 125, 167, 96, 5, "ck", 191, 204, 81, 157, "=", ";", 138, 73, 86, 141, 185, 190, "h", 234, 173, 47, 163, 75, 51, "-v", 105, 198, ")", "l)", 146, 57, "on"];

    function lk(...kk) {
      return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
        for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'PRUGCqKyY]t#cI.lmEX:bFw6)hQT7p2i!>r?O}o;NMZe~+{4BnJLsdWD|<=`5&AjVSaf,z3gH08ux"9%_v@(/[^$*1k', kk[-wk[1]] = "" + (kk[wk[2]] || ""), kk[-wk[4]] = kk[-wk[1]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[wk[6]] = -wk[0]), kk[wk[3]] = wk[2]; kk[wk[3]] < kk[-wk[4]]; kk[wk[3]]++)
          if (kk[wk[5]] = kk[wk[0]].indexOf(kk[-wk[1]][kk[wk[3]]]), kk[wk[5]] !== -wk[0])
            if (kk[wk[6]] < wk[2]) kk[wk[6]] = kk[wk[5]];
            else {
              Fk(kk[wk[6]] += kk[wk[5]] * wk[34], kk[wk[7]] |= kk[wk[6]] << kk[wk[8]], kk[wk[8]] += (kk[wk[6]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
              do {
                Fk(kk[wk[9]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[8]] -= wk[3])
              } while (kk[wk[8]] > wk[24]);
              kk[wk[6]] = -wk[0]
            } return kk[wk[6]] > -wk[0] && kk[wk[9]].push((kk[wk[7]] | kk[wk[6]] << kk[wk[8]]) & wk[10]), pk(kk[wk[9]])
      }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
    }

    function pk(...kk) {
      return kk[wk[11]] = wk[0], typeof Mk !== wk[15] && Mk ? (new Mk).decode(new Kk(kk[wk[2]])) : typeof xk !== wk[15] && xk ? xk.from(kk[wk[2]]).toString("utf-8") : Hk(kk[wk[2]])
    }

    function yk() {}
    Fk(rk = {}, Pk = ["G8,8_vk,0Sm2*(K", "M}XL@A0yal!zrh?OjAIiOWkrPXszP", "XQ0L6ouR", "BglK85P", 'XNLY"D%[JWd0J=O)y6+D`ry:L:c,]}U}(0>KF', "1Y(d}n*_jj}rah16aZ)K[(nyij5_P", 's6#"J=^rV]KLm43}u#,pN?AU', "+AqD3O~VL]D3$3>)V6vK8<e?~#vY<C}X_rOt", "l<RWU/72^I13oUrEp56nhgP", "BgW7T4{UBd@l:U?}3P", '~LK]A"l:jcn0b5wNjG`YRB)U', '9`Pud"522FMG9v~QDB3iIDIz:<OxR&z)76RWarP', "si3D,%?pRWpT=nkOX])W5rH2Lc/#/(DM+eaL)", "mXXTT0Iy+.7I(.22gP", "}pt!Rv{X[=5CyQ$p4L{]du2X}:0C*l8;_}G", "=G$0!gH2JWbxfly", "+QuqEOdI`Yi%h}Ni+,W06<r)::kqR", "!cpt??MySc.rnB/7<A+sED;<K:C]7`hM]elso4]:<bv|6Q`?c{G", ">8AD{3>z7A[J|lSEHEFDu(i<HbOzdB?i0`$WlJGjx.iy!G16KC;CxJP", ",Gi]4@3{!]mH}hNo<Qb8k`;ju#4t7T}:gG~p=HZ=(]W0D.T?&NG", "#g>23HA_]E{.hOBN$7SLwx3)?V#I9vF?dbU", 'T5GpZ}jL]Do0zClN},j]D"72i5B|<me;Y8t!1<%IxYEHR', "yn.Dj{;u)=}0b(N:QSJTMur8[:|?x`NQ?,bpn|U2L:Jz/5Ib/7eHY%~2k.07R", "_AMKQ<qu1Es7foe:a,syC^a2z=|", "<ND0|5`4qWS3eo?E1LR", 'JGL"h[K=Rc>HC(WNLNqiDdIRG5S_/BWN.5RK', "0BD7k<8NmaEE9vSEgB37XsP", "=W9no&#dyb,l;=MiXXRTSv>zijb}@hK}uL/8Q[P", "SiQLVBD6{lGW_TwrHb27!9kr4|5`nmR6/3g0$9HKNb=", 't{dCm(/c~YLzMh>EUa"xn/(p{`],!HS6:p4]5=3sHbR@hBVO|W!]psvMZ#', "&gLtDd8rJ]@fv_GEh!/dtz9)<E", "WBPu[<T:ijah)GvTX5+Da5c)!]$cU&*?z]g7I8bUYIcbAvf}y<aqN,P", "iG1WE<4?X5Y,l(SEo6(Yvv|2cAT", "V}qJW{E?tEV3Y;S6*`SL|5A{Dbbx{.r};pnL6J&4?<7", '4Spi(g2Om5*hj=GE}Q]L1(B{~Ak"rI@7=E|WO_MRBjH3~`cotR', "W,58v>ij{||?~TxhVKfd?9jpF=I2!4mrRC}yN,vR", "|Ep8%Auye./d.&U2eNctU{%M`Y_C(Ul", 'KQmWA8VKG]z0pq!}mj:H>`.=7`"8,TnN`WbyaO`I+FnxcGo}>pdyKB>4lF', 'Rn8"*`P', "4WTH_s4?~#8#?o#hwgEufD>y0=QHlJ.", "PaFx43Hc~|?x3Iy}K]HKgdTdytkV*`Si:<jWT(FI!jgRR", '~r0K^srcsWgh!gZQh5DCyd&ReY:%n5WM_3yWs"@)}WOxBCH}H+qy', "lg>L4}`p&`uj_4DM_+62MW5,&`1<cga2gK.x|jG:=`1V|G", 'V`"y6o&6G]S3TUY}ER', "scDs:zS<*I8!JhkZjN%C)<5)@5S#av9Nrp@LQ0fpqV8|e.c", "e}$]bo*_`S{iw}Ce9+!0Z|jMr:R9MB$rdGXL1oM?IA.utv`?8,ztZ0E:]AFSR", '/bV0*4/c_X"5VGlN|NU', '`B*09A0<"Y}04TeQW,;7OuKsdI:tcG+Q2ppy&/S6CV)G(.H}]n+t', "F{gs29F?J5QbR", 'yC/"h9v<@c{xZ3Dpi56xSB*s;ICK*lY}<g"7lx"<&d2zoIsN', "?,HW(A4jc.RWMm#:9.58:", "R]di[<32P<D", "r5%C:`bU", "hS_]aOZUIA+0G@O2sih99OvR", "Wg/Qvv4y/V~", "]{Is[(44:<XH*GSiegUqwx_8>l:=*gE;hp/dxDeyljs", "ZS~teney9|=.t&U},+UH,O(<8bgR$oohbLWy(z(zC", "*G6CyDeR", "%SXH!9[MUj+`YTw7S]oiJ3??e#@{cgM:0|R", 'g#"QiWgpml:%.@$Mk0<LZ,yuf]t6!Gvrf6Z!P5>:O:_w9hG)nW%Cc', "8bR2LLlyy", "c{RHqd}vC", "eE40o}Z=4l?rMm(N", '+};7.x{VkA.2D.iZqj5"zvFI!5f!PG=7]g"sI', "2860k[YY.XEG7`WrM8/pk`[MQ`*c;.5ZS}`Y|%:v[:", "6,UH}|KYK", 'aK;]&"#d+.#6U}qiwb9xGdmU`|W.c4PehW6>lJ8X"X', "fi.yNu7)a5(8tq!2BST!%ghdT`s)vO`Z^Bf!I", 'j0inAr:M,W<"T`FTS0H]lJIIF:QH?T@;q8*]h9h?4c', "683x[[ldxYvdG3TZ6{oC5dGM<bmA4.9:]jP2zBJXY=f?74R6tCr!T[]jll", "S,eHq8*rAXRuo3V2VAo]Ix]j$I$<foC20#in0vX3PaOH)4$?", "Q,]uf%V{1STB%Ua6OQEWB@a),][OlQ<r/iB]<;JVjj+zm`7Z_AItvv[E!lN", "1B*]#z7)J:", "=WCtEoP", "_.Ldm(o)a<<|lQv;m<iK", "Icfquzhz)bBxH)>2yW[xm", 'uSyx|/"pDb~yrIYoj6^CIBuyYb&', "8.!0djk,z:=_e@[TwlhWm<<M@W~Fr&[TzA>28zw_JcT", "qn306o2cO:|xVlX;IN1LcATyyD+)^nQZJNGqeWZ).jHhGQU}(KjC", "%|Gt43d6X5_5MBrEyjG", "d6pDZ|N)(W;s@n+;dS0!2_!U&.", "r]xQD3B2q={x%U", "0`)9FJDMo=iAyQh?:jY]WH5)g=5X<5&OwW[8k>;zS<h", "%b*]u(9N?<G=<5NoYjQp5H*r1A5`Y(Ce5}3itASR", "vG)9WjydC<=3EO#hB]V]I(.YMb(5?.v;<bwsuJ*s,I", "u`Ld}4a8m5zC}CK)U<G", "nK$]k9TpyDFS0)sN]p/QWdLIilyL~gK", 'AG]LJ"P', "<rnKl<Dy.j$foQ(r!{;0#8&MKt=C]m76SBFC;0tO[VdjQvx:TR", 'J+LYJnR?cAKr:JKhi5L!i&.Y?:@"^vr)aLQL5"hd7E<', 'a06>s"[p?5Fbl..T8+Cyb', "mj>2?4OONS[59v!ZKeFtKzeR(c", ")Q^CIz9=x.wB43Br:jruCr<j%l18hvBT+QFis=Y{_]", "CpAiUd7YoVvpEHG2vb,Qmx{cf]#SonLr8#/Q+LLRbIs|$QNo~ekY>Ns^e`dFR", 'aLoi"vbU', "1u@6!.Tv", "oIk{xqXv", "CSO1", "i+k1Yl;", "CId)", "JYIUMi6O", "]0/aw(sO", '7ricD"Fg', "H!=N6$~", 'r1;".HzO', "o1u)?pzO", '11%"', "r10iE9lO", "h1qHzHeO", "gY0iDVMO", "aFsie", "r10izHeO", 'gY;"o(sO', "l`b&aprO", "(gbaaVlO", "$m5aPirO", ",mpHiIeO", ")Yi>x0!O", "/`u){(eO", "a]pH6i:K", "Wffa+", 'U1;"', "%10>}", "`F/aU", ")8tm;MJO", "56QN+", "r10izHYU,}", "`JMa)$X}ws", "{zDuIIQR,}", "/`maTA.O", "aNm&Up~", "/`ma+VoO", "gYbaDHFK", ")Yyav(8O", "U]pH6i~", "ecbu", "B]UY", "R(EJ", "r%UY", "LvZ:mkeY", "9cWMS", "dK9J", '2+"u', "q6y&", "?1siVI`O", "H<a@*_sw", ')M7cRJ8{MAsQb2LL%P:077d@8(DW5r"', "#:ui$>0cczM", "`|&ZF5O8", "fjnA)AD8", "`|8AqIT8", 'KCG"JWcO', "oz$HIIzO", "yN2&", "d`QN", ",Fmad0!O", "5>2&", "oF2a9HsO", "F]QTF(.O", 'P,e"(IeO', "t!$qv(~", "h[6bW]fA", 'BXfT:GOdX9*ZnK22W.@1ffo`OyV7"m<', '+/e"y|IttrZ', "gdjZ@Rto", ";sGe)e`o", "gdoecPpo", "P.$K6uYA", "?B$G", "CY.`_I7P", "2=3Ov)y", "DpaZs]EA", "9W$K{2MA", "/ss:<hiN", "/B>Gn@1", "o6`BP4uN", "]>RVS", "AmpHiIeO", "oF2ayinO"]), Fk(mk = function(...kk) {
      Fk(kk[wk[11]] = wk[2], kk[wk[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], kk[wk[12]] = wk[16], kk[wk[13]] = []);
      try {
        Fk(kk[wk[12]] = Object, kk[wk[13]][wk[26]]("".__proto__.constructor.name))
      } catch (Pk) {}
      kk: for (kk[wk[9]] = wk[2]; kk[wk[9]] < kk[wk[14]][wk[11]]; kk[wk[9]]++) try {
        for (kk[wk[12]] = kk[wk[14]][kk[wk[9]]](), kk[wk[7]] = wk[2]; kk[wk[7]] < kk[wk[13]][wk[11]]; kk[wk[7]]++)
          if (typeof kk[wk[12]][kk[wk[13]][kk[wk[7]]]] === wk[15]) continue kk;
        return kk[wk[12]]
      } catch (Pk) {}
      return kk[wk[12]] || this
    }() || {}, Mk = mk.TextDecoder, Kk = mk.Uint8Array, xk = mk.hU, nk = mk.String || String, Uk = mk.Array || Array, Hk = function(...kk) {
      return Fk(kk[wk[11]] = wk[2], kk[-wk[27]] = new Uk(wk[64]), kk[-wk[28]] = nk[wk[23]] || nk.fromCharCode, kk[wk[17]] = []),
        function(...ek) {
          for (Fk(ek[wk[11]] = wk[0], ek[wk[20]] = wk[16], ek[wk[12]] = wk[16], ek[wk[19]] = ek[wk[2]][wk[11]], kk[wk[17]][wk[11]] = wk[2]), ek[-wk[18]] = wk[2]; ek[-wk[18]] < ek[wk[19]];) Fk(ek[wk[12]] = ek[wk[2]][ek[-wk[18]]++], ek[wk[12]] <= wk[63] ? ek[wk[20]] = ek[wk[12]] : ek[wk[12]] <= 223 ? ek[wk[20]] = (31 & ek[wk[12]]) << wk[22] | ek[wk[2]][ek[-wk[18]]++] & wk[21] : ek[wk[12]] <= 239 ? ek[wk[20]] = (15 & ek[wk[12]]) << wk[25] | (ek[wk[2]][ek[-wk[18]]++] & wk[21]) << wk[22] | ek[wk[2]][ek[-wk[18]]++] & wk[21] : nk[wk[23]] ? ek[wk[20]] = (ek[wk[12]] & wk[24]) << 18 | (ek[wk[2]][ek[-wk[18]]++] & wk[21]) << wk[25] | (ek[wk[2]][ek[-wk[18]]++] & wk[21]) << wk[22] | ek[wk[2]][ek[-wk[18]]++] & wk[21] : (ek[wk[20]] = wk[21], ek[-wk[18]] += wk[19]), kk[wk[17]][wk[26]](kk[-wk[27]][ek[wk[20]]] || (kk[-wk[27]][ek[wk[20]]] = kk[-wk[28]](ek[wk[20]]))));
          return kk[wk[17]].join("")
        }
    }());
    const Yk = fk()[lk(wk[29])](),
      Lk = fk()[lk(wk[29])](),
      Ck = fk()[lk(wk[29])](),
      Ak = fk()[lk(wk[29])](),
      jk = fk()[lk(wk[29])](),
      sk = fk()[lk(wk[29])](),
      dk = fk()[lk(wk[29])](),
      Vk = (...kk) => {
        function ek(...kk) {
          return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
            for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = ';0v_[%(}1+)"MK/z!@UERdBc7guC]`Yf{DX9#oTV5tnIwA*xy4Fk$L63G2NZ~=.>ir:|q^bl<pS8m,Whe&?OjHJaQsP', kk[wk[30]] = "" + (kk[wk[2]] || ""), kk[-wk[31]] = kk[wk[30]].length, kk[wk[9]] = [], kk[-wk[35]] = wk[2], kk[wk[22]] = wk[2], kk[-wk[33]] = -wk[0]), kk[wk[3]] = wk[2]; kk[wk[3]] < kk[-wk[31]]; kk[wk[3]]++)
              if (kk[wk[32]] = kk[wk[20]].indexOf(kk[wk[30]][kk[wk[3]]]), kk[wk[32]] !== -wk[0])
                if (kk[-wk[33]] < wk[2]) kk[-wk[33]] = kk[wk[32]];
                else {
                  Fk(kk[-wk[33]] += kk[wk[32]] * wk[34], kk[-wk[35]] |= kk[-wk[33]] << kk[wk[22]], kk[wk[22]] += (kk[-wk[33]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                  do {
                    Fk(kk[wk[9]].push(kk[-wk[35]] & wk[10]), kk[-wk[35]] >>= wk[3], kk[wk[22]] -= wk[3])
                  } while (kk[wk[22]] > wk[24]);
                  kk[-wk[33]] = -wk[0]
                } return kk[-wk[33]] > -wk[0] && kk[wk[9]].push((kk[-wk[35]] | kk[-wk[33]] << kk[wk[22]]) & wk[10]), pk(kk[wk[9]])
          }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
        }
        kk[wk[11]] = wk[19], ek(95) + "R" in yk && function(...kk) {
          Fk(kk[wk[11]] = wk[2], kk[-wk[42]] = function(...ek) {
            return ek[wk[11]] = wk[30], kk[wk[12]]({}, ek[wk[2]], ek[wk[0]])
          }, kk[wk[12]] = function(ek, ik, Dk) {
            var fk, Sk, bk, rk = {};
            if (ek[ik + Dk] !== wk[16]) return ek[ik + Dk];
            if (ik === Dk) return wk[41];
            for (fk = wk[2]; fk < ik.length; fk++) rk[ik[fk]] === wk[16] && (rk[ik[fk]] = wk[2]), rk[Dk[fk]] === wk[16] && (rk[Dk[fk]] = wk[2]), Fk(rk[ik[fk]]++, rk[Dk[fk]]--);
            for (Sk in rk)
              if (rk[Sk] !== wk[2]) return ek[ik + Dk] = wk[40], wk[40];
            for (bk = wk[0]; bk < ik.length; bk++)
              if (kk[wk[12]](ek, ik.substr(wk[2], bk), Dk.substr(wk[2], bk)) && kk[wk[12]](ek, ik.substr(bk), Dk.substr(bk)) || kk[wk[12]](ek, ik.substr(wk[2], bk), Dk.substr(Dk.length - bk)) && kk[wk[12]](ek, ik.substr(bk), Dk.substr(wk[2], Dk.length - bk))) return ek[ik + Dk] = wk[41], wk[41];
            return ek[ik + Dk] = wk[40], wk[40]
          }, console.log(kk[-wk[42]]))
        }();
        const ik = sk;
        return fk()[ek(wk[72]) + ek(97)](ik, kk[wk[30]]), fk()[ek(98)](kk[wk[2]], ik, fk()[ek(99)](ik, kk[wk[0]]))
      };

    function Fk() {
      Fk = function() {}
    }
    bk = (...kk) => {
      function ek(...kk) {
        return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(kk) {
          var ek, ik, Dk, fk, Sk, bk, rk;
          for (Fk(ek = "" + (kk || ""), ik = ek.length, Dk = [], fk = wk[2], Sk = wk[2], bk = -wk[0]), rk = wk[2]; rk < ik; rk++) {
            var Pk = '~KOfC%u#&N"^z@h1.Xr}s;j?n+`5eEUqa{!/o,lZYvwFxgJdc3Mm7G8)S]*y6LP4QBkb0A$p=T>:HiV_(IW2<9R|[Dt'.indexOf(ek[rk]);
            if (Pk !== -wk[0])
              if (bk < wk[2]) bk = Pk;
              else {
                Fk(bk += Pk * wk[34], fk |= bk << Sk, Sk += (bk & wk[36]) > wk[37] ? wk[38] : wk[39]);
                do {
                  Fk(Dk.push(fk & wk[10]), fk >>= wk[3], Sk -= wk[3])
                } while (Sk > wk[24]);
                bk = -wk[0]
              }
          }
          return bk > -wk[0] && Dk.push((fk | bk << Sk) & wk[10]), pk(Dk)
        }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
      }
      kk[wk[11]] = wk[3], ek(100) in yk && function(...kk) {
        kk[wk[11]] = wk[2]
      }();
      const ik = kk[wk[2]][ek(wk[47])][ek(104) + ek(wk[95]) + ek(106)](kk[wk[0]]);
      kk[wk[3]] = kk[wk[2]][ek(wk[47])][ek(wk[59]) + ek(wk[60]) + ek(wk[61]) + ek(wk[62])](ik);
      const Dk = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(wk[52]) + ek(wk[53]) + ek(wk[54]) + ek(wk[55])](kk[wk[0]], ek(wk[48]) + ek(wk[49]) + ek(wk[50]) + wk[7]) : kk[wk[3]][ek(wk[48]) + ek(wk[49]) + ek(wk[50]) + wk[7]],
        bk = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(wk[52]) + ek(wk[53]) + ek(wk[54]) + ek(wk[55])](kk[wk[0]], ek(wk[56]) + ek(wk[57]) + ek(wk[58])) : kk[wk[3]][ek(wk[56]) + ek(wk[57]) + ek(wk[58])];
      Fk(fk()[ek(121)](Yk, wk[2], wk[2], kk[wk[73]]), fk().ei(Yk, Yk, fk()[ek(122)], kk[wk[19]].heading), fk()[ek(123)](dk, kk[wk[44]].Cw), dk[wk[0]] = wk[2]);
      const mk = kk[wk[30]][ek(124) + ek(wk[70])]();
      if (Fk(kk[wk[3]] = kk[wk[2]][ek(wk[47])][ek(wk[59]) + ek(wk[60]) + ek(wk[61]) + ek(wk[62])](ik), kk[wk[32]] = kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(126) + ek(wk[63]) + ek(wk[64])](kk[wk[0]], ek(wk[13]) + ek(wk[65])) : kk[wk[3]][ek(wk[13]) + ek(wk[65])]), !mk && fk()[wk[74]](dk) && (kk[wk[3]] === wk[51] ? kk[wk[2]][ek(wk[47])][ek(wk[52]) + ek(wk[53]) + ek(wk[54]) + ek(wk[55])](kk[wk[0]], ek(wk[66]) + ek(wk[67]) + ek(wk[68]) + ek(wk[69])) : kk[wk[3]][ek(wk[66]) + ek(wk[67]) + ek(wk[68]) + ek(wk[69])])) {
        function Uk(...kk) {
          for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'Hd3pKN/muYJ^+n)]WZv#wE4BgQ%R`2!ej[h$&GF?VIf(_.zr:L8@l9XPD>xbcqi~U{AsktCMa,T";7S<5=|o0}61y*O', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[-wk[71]] = kk[wk[12]].length, kk[wk[44]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[wk[24]] = -wk[0]), kk[-wk[70]] = wk[2]; kk[-wk[70]] < kk[-wk[71]]; kk[-wk[70]]++)
            if (kk[wk[72]] = kk[wk[0]].indexOf(kk[wk[12]][kk[-wk[70]]]), kk[wk[72]] !== -wk[0])
              if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[72]];
              else {
                Fk(kk[wk[24]] += kk[wk[72]] * wk[34], kk[wk[7]] |= kk[wk[24]] << kk[wk[8]], kk[wk[8]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                do {
                  Fk(kk[wk[44]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[8]] -= wk[3])
                } while (kk[wk[8]] > wk[24]);
                kk[wk[24]] = -wk[0]
              } return kk[wk[24]] > -wk[0] && kk[wk[44]].push((kk[wk[7]] | kk[wk[24]] << kk[wk[8]]) & wk[10]), pk(kk[wk[44]])
        }

        function Hk(kk) {
          return typeof rk[kk] === wk[15] ? rk[kk] = Uk(Pk[kk]) : rk[kk]
        }
        Fk(Vk(Lk, Yk, dk), Vk(Ck, dk, Yk), fk()[Hk(135)](Ak, dk, Ck));
        const lk = fk()[Hk(136)](dk),
          sk = fk()[Hk(137)](Yk, dk) / kk[wk[73]] / lk,
          uk = Math[Hk(wk[81])](sk, wk[2]) + wk[0];
        if (kk[wk[73]] * kk[wk[73]] < fk()[wk[74]](Ck)) {
          function qk(...kk) {
            for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = 'wYNFRWiKZCMJPnTc16Ue3G49+fg5S7~#$:BXHd"hvjrxVDo=L;/0*(uy@asA{mOqI!?E<tz`b%lQ,k|2&^]>p}[8_).', kk[wk[30]] = "" + (kk[wk[2]] || ""), kk[wk[19]] = kk[wk[30]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[-wk[78]] = wk[2], kk[wk[77]] = -wk[0]), kk[wk[75]] = wk[2]; kk[wk[75]] < kk[wk[19]]; kk[wk[75]]++)
              if (kk[-wk[76]] = kk[wk[20]].indexOf(kk[wk[30]][kk[wk[75]]]), kk[-wk[76]] !== -wk[0])
                if (kk[wk[77]] < wk[2]) kk[wk[77]] = kk[-wk[76]];
                else {
                  Fk(kk[wk[77]] += kk[-wk[76]] * wk[34], kk[wk[7]] |= kk[wk[77]] << kk[-wk[78]], kk[-wk[78]] += (kk[wk[77]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                  do {
                    Fk(kk[wk[9]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[-wk[78]] -= wk[3])
                  } while (kk[-wk[78]] > wk[24]);
                  kk[wk[77]] = -wk[0]
                } return kk[wk[77]] > -wk[0] && kk[wk[9]].push((kk[wk[7]] | kk[wk[77]] << kk[-wk[78]]) & wk[10]), pk(kk[wk[9]])
          }

          function Ik(kk) {
            return typeof rk[kk] === wk[15] ? rk[kk] = qk(Pk[kk]) : rk[kk]
          }
          Ik(wk[1]), fk()[Ik(140)](Yk, Yk, Ck, uk)
        }
        Fk(kk[wk[32]] = (0, Sk.v)(kk[wk[32]], 1, Math[Hk(wk[81])](wk[0], Math[Hk(wk[84])](wk[2], -sk, wk[0] - lk / kk[wk[73]]))), fk()[Hk(142)](Yk, Yk, Ak))
      }
      const Mk = jk;
      if (Fk(fk()[ek(143)](Mk, Yk, dk), Mk[wk[0]] = wk[2], kk[wk[18]] = fk()[ek(144)](Mk)), !mk) {
        function zk(...kk) {
          for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = '1w`/)"#@]~+65430.?LzgTREjhFI|GJYip&}d:DeU$tkv_;bH^9C%c<M!r(snmaZS=q,X[PfBOyWolxN>u8A*7KQ{V2', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[wk[19]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[73]] = wk[2], kk[-wk[82]] = wk[2], kk[wk[24]] = -wk[0]), kk[wk[3]] = wk[2]; kk[wk[3]] < kk[wk[19]]; kk[wk[3]]++)
            if (kk[wk[5]] = kk[wk[20]].indexOf(kk[wk[12]][kk[wk[3]]]), kk[wk[5]] !== -wk[0])
              if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[5]];
              else {
                Fk(kk[wk[24]] += kk[wk[5]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[-wk[82]], kk[-wk[82]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                do {
                  Fk(kk[wk[9]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[-wk[82]] -= wk[3])
                } while (kk[-wk[82]] > wk[24]);
                kk[wk[24]] = -wk[0]
              } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[73]] | kk[wk[24]] << kk[-wk[82]]) & wk[10]), pk(kk[wk[9]])
        }

        function Qk(...kk) {
          return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = zk(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
        }

        function vk() {
          module.exports = async (kk = (...kk) => {
            throw kk[wk[11]] = wk[2], new Error(function(...kk) {
              return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
                for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = '6;^/2)x{,04#"!}v:AfDYOt[~hEBy|%R9_CZab`Lw.5M=ugcUrNWQSeHjPIVm+s]K(*X?noJ3&F8q$7<T>d1lz@ikpG', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[wk[83]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[73]] = wk[2], kk[wk[22]] = wk[2], kk[wk[24]] = -wk[0]), kk[wk[3]] = wk[2]; kk[wk[3]] < kk[wk[83]]; kk[wk[3]]++)
                  if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[12]][kk[wk[3]]]), kk[wk[32]] !== -wk[0])
                    if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[32]];
                    else {
                      Fk(kk[wk[24]] += kk[wk[32]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[wk[22]], kk[wk[22]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                      do {
                        Fk(kk[wk[9]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[wk[22]] -= wk[3])
                      } while (kk[wk[22]] > wk[24]);
                      kk[wk[24]] = -wk[0]
                    } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[73]] | kk[wk[24]] << kk[wk[22]]) & wk[10]), pk(kk[wk[9]])
              }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
            }(wk[99]))
          }) => {
            const ek = new Set(process.argv.slice(wk[30]));
            if (!ek.has(Qk(147))) {
              if (ek.size !== wk[0]) return wk[40];
              if (!ek.has(wk[94])) return wk[40]
            }
            return await (async () => {
              function ek(...kk) {
                return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = function(...kk) {
                  for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'L,8jn.e3^(Z&T$9CMP1YDV|]!Qy%wlWmo/HiXvOBNp*6sh+gdFtR~>E7@[_G)kux=zU"5I?J24cKbA`0;a#fqS<}{:r', kk[wk[12]] = "" + (kk[wk[2]] || ""), kk[-wk[84]] = kk[wk[12]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[wk[22]] = wk[2], kk[wk[24]] = -wk[0]), kk[-wk[85]] = wk[2]; kk[-wk[85]] < kk[-wk[84]]; kk[-wk[85]]++)
                    if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[12]][kk[-wk[85]]]), kk[wk[32]] !== -wk[0])
                      if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[32]];
                      else {
                        Fk(kk[wk[24]] += kk[wk[32]] * wk[34], kk[wk[7]] |= kk[wk[24]] << kk[wk[22]], kk[wk[22]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                        do {
                          Fk(kk[wk[9]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[22]] -= wk[3])
                        } while (kk[wk[22]] > wk[24]);
                        kk[wk[24]] = -wk[0]
                      } return kk[wk[24]] > -wk[0] && kk[wk[9]].push((kk[wk[7]] | kk[wk[24]] << kk[wk[22]]) & wk[10]), pk(kk[wk[9]])
                }(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
              }
              return void 0 === await kk() ? ek(150) + wk[98] : ""
            })(), wk[41]
          }
        }
        Qk(145) + "J" in yk && vk(), kk[wk[18]] *= kk[wk[32]]
      }
      const Kk = kk[wk[22]][ek(151) + ek(152) + ek(153)],
        xk = Kk ? Math[ek(154)](Kk, kk[wk[18]]) : kk[wk[18]];
      fk()[ek(155) + ek(156)](Mk, Mk);
      const nk = kk[wk[24]] !== wk[51] && void 0 !== kk[wk[24]] ? kk[wk[24]] : kk[wk[22]][ek(wk[78]) + ek(158) + ek(wk[33]) + ek(160)];
      if (xk > wk[2]) {
        function Ek(...kk) {
          for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = '1NAkTtdoGBZXqafpCFIjMgRlmSWHbDnVKhsJPQEeYiU.cr6LOu;>~97*,+{)#|%?/(5}[yv@:8_!w2]^`="$34<0xz&', kk[wk[86]] = "" + (kk[wk[2]] || ""), kk[wk[88]] = kk[wk[86]].length, kk[wk[38]] = [], kk[wk[7]] = wk[2], kk[wk[8]] = wk[2], kk[-wk[13]] = -wk[0]), kk[wk[87]] = wk[2]; kk[wk[87]] < kk[wk[88]]; kk[wk[87]]++)
            if (kk[wk[5]] = kk[wk[20]].indexOf(kk[wk[86]][kk[wk[87]]]), kk[wk[5]] !== -wk[0])
              if (kk[-wk[13]] < wk[2]) kk[-wk[13]] = kk[wk[5]];
              else {
                Fk(kk[-wk[13]] += kk[wk[5]] * wk[34], kk[wk[7]] |= kk[-wk[13]] << kk[wk[8]], kk[wk[8]] += (kk[-wk[13]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                do {
                  Fk(kk[wk[38]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[8]] -= wk[3])
                } while (kk[wk[8]] > wk[24]);
                kk[-wk[13]] = -wk[0]
              } return kk[-wk[13]] > -wk[0] && kk[wk[38]].push((kk[wk[7]] | kk[-wk[13]] << kk[wk[8]]) & wk[10]), pk(kk[wk[38]])
        }

        function hk(...kk) {
          return kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15] ? rk[kk[wk[2]]] = Ek(Pk[kk[wk[2]]]) : rk[kk[wk[2]]]
        }
        hk(161) in yk && (module.exports = async (kk = (...kk) => {
          throw kk[wk[11]] = wk[2], new Error(function(...kk) {
            if (kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15]) return rk[kk[wk[2]]] = function(...kk) {
              for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = ',PDrKBHd01l)<5;t@9%Va4>bv+JEQsW:uLc_FnS2z]"XkAwTYmx7Zi|^=.jIU/*3Ny#&p6{GeC}Oh[f$Mqo!~8`g?R(', kk[wk[30]] = "" + (kk[wk[2]] || ""), kk[wk[17]] = kk[wk[30]].length, kk[wk[44]] = [], kk[wk[90]] = wk[2], kk[wk[22]] = wk[2], kk[wk[76]] = -wk[0]), kk[-wk[89]] = wk[2]; kk[-wk[89]] < kk[wk[17]]; kk[-wk[89]]++)
                if (kk[wk[32]] = kk[wk[0]].indexOf(kk[wk[30]][kk[-wk[89]]]), kk[wk[32]] !== -wk[0])
                  if (kk[wk[76]] < wk[2]) kk[wk[76]] = kk[wk[32]];
                  else {
                    Fk(kk[wk[76]] += kk[wk[32]] * wk[34], kk[wk[90]] |= kk[wk[76]] << kk[wk[22]], kk[wk[22]] += (kk[wk[76]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                    do {
                      Fk(kk[wk[44]].push(kk[wk[90]] & wk[10]), kk[wk[90]] >>= wk[3], kk[wk[22]] -= wk[3])
                    } while (kk[wk[22]] > wk[24]);
                    kk[wk[76]] = -wk[0]
                  } kk[wk[76]] > -wk[0] && kk[wk[44]].push((kk[wk[90]] | kk[wk[76]] << kk[wk[22]]) & wk[10]);
              return pk(kk[wk[44]])
            }(Pk[kk[wk[2]]]);
            return rk[kk[wk[2]]]
          }(162))
        }) => {
          const ek = new Set(process.argv.slice(wk[30]));
          if (!ek.has(function(...kk) {
              if (kk[wk[11]] = wk[0], typeof rk[kk[wk[2]]] === wk[15]) return rk[kk[wk[2]]] = function(...kk) {
                for (Fk(kk[wk[11]] = wk[0], kk[-wk[92]] = 'TzqUCo+DKMdau0NIXilrf(W&)2.%3vkF"`<s6/]Jmy:H$1S8wOjb@t#Zn,>c?_AE7B~{Y=GgL4xV[Qhp|e9R*;5}^!P', kk[wk[91]] = "" + (kk[wk[2]] || ""), kk[wk[17]] = kk[wk[91]].length, kk[wk[9]] = [], kk[wk[7]] = wk[2], kk[wk[22]] = wk[2], kk[wk[93]] = -wk[0]), kk[wk[3]] = wk[2]; kk[wk[3]] < kk[wk[17]]; kk[wk[3]]++)
                  if (kk[wk[32]] = kk[-wk[92]].indexOf(kk[wk[91]][kk[wk[3]]]), kk[wk[32]] !== -wk[0])
                    if (kk[wk[93]] < wk[2]) kk[wk[93]] = kk[wk[32]];
                    else {
                      Fk(kk[wk[93]] += kk[wk[32]] * wk[34], kk[wk[7]] |= kk[wk[93]] << kk[wk[22]], kk[wk[22]] += (kk[wk[93]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                      do {
                        Fk(kk[wk[9]].push(kk[wk[7]] & wk[10]), kk[wk[7]] >>= wk[3], kk[wk[22]] -= wk[3])
                      } while (kk[wk[22]] > wk[24]);
                      kk[wk[93]] = -wk[0]
                    } kk[wk[93]] > -wk[0] && kk[wk[9]].push((kk[wk[7]] | kk[wk[93]] << kk[wk[22]]) & wk[10]);
                return pk(kk[wk[9]])
              }(Pk[kk[wk[2]]]);
              return rk[kk[wk[2]]]
            }(wk[91]))) {
            if (ek.size !== wk[0]) return wk[40];
            if (!ek.has(wk[94])) return wk[40]
          }
          return await (async () => {
            function ek(kk) {
              return typeof rk[kk] === wk[15] ? rk[kk] = function(...kk) {
                for (Fk(kk[wk[11]] = wk[0], kk[wk[20]] = ']CosGVaYTMZjp!|uLS}B`>dv$_JbrlQH/I9"#mtE[7%,<0=2w@(xi^*D~8K?)UAhFf6yRPqNk4W.5egO3Xz;c&1n+{:', kk[-wk[95]] = "" + (kk[wk[2]] || ""), kk[wk[19]] = kk[-wk[95]].length, kk[wk[44]] = [], kk[wk[73]] = wk[2], kk[wk[3]] = wk[2], kk[wk[24]] = -wk[0]), kk[-wk[96]] = wk[2]; kk[-wk[96]] < kk[wk[19]]; kk[-wk[96]]++)
                  if (kk[wk[5]] = kk[wk[20]].indexOf(kk[-wk[95]][kk[-wk[96]]]), kk[wk[5]] !== -wk[0])
                    if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[5]];
                    else {
                      Fk(kk[wk[24]] += kk[wk[5]] * wk[34], kk[wk[73]] |= kk[wk[24]] << kk[wk[3]], kk[wk[3]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                      do {
                        Fk(kk[wk[44]].push(kk[wk[73]] & wk[10]), kk[wk[73]] >>= wk[3], kk[wk[3]] -= wk[3])
                      } while (kk[wk[3]] > wk[24]);
                      kk[wk[24]] = -wk[0]
                    } kk[wk[24]] > -wk[0] && kk[wk[44]].push((kk[wk[73]] | kk[wk[24]] << kk[wk[3]]) & wk[10]);
                return pk(kk[wk[44]])
              }(Pk[kk]) : rk[kk]
            }
            return void 0 === await kk() ? ek(166) + wk[98] : ""
          })(), wk[41]
        });
        let ak = kk[wk[30]][hk(wk[71]) + hk(168)] * nk;
        if (!mk) {
          function tk(...kk) {
            for (Fk(kk[wk[11]] = wk[0], kk[wk[0]] = 'yAPqt]!d>GOoVUD@%*aQ/c:<B_YW3kuw`E"Cl=i+?,z#04pfHT|.Xm7^S1F5{R2ZN~$Jn9e(6g&}jMI[v)K;xbLsrh8', kk[-wk[99]] = "" + (kk[wk[2]] || ""), kk[wk[17]] = kk[-wk[99]].length, kk[wk[44]] = [], kk[wk[100]] = wk[2], kk[wk[22]] = wk[2], kk[wk[24]] = -wk[0]), kk[wk[3]] = wk[2]; kk[wk[3]] < kk[wk[17]]; kk[wk[3]]++)
              if (kk[wk[5]] = kk[wk[0]].indexOf(kk[-wk[99]][kk[wk[3]]]), kk[wk[5]] !== -wk[0])
                if (kk[wk[24]] < wk[2]) kk[wk[24]] = kk[wk[5]];
                else {
                  Fk(kk[wk[24]] += kk[wk[5]] * wk[34], kk[wk[100]] |= kk[wk[24]] << kk[wk[22]], kk[wk[22]] += (kk[wk[24]] & wk[36]) > wk[37] ? wk[38] : wk[39]);
                  do {
                    Fk(kk[wk[44]].push(kk[wk[100]] & wk[10]), kk[wk[100]] >>= wk[3], kk[wk[22]] -= wk[3])
                  } while (kk[wk[22]] > wk[24]);
                  kk[wk[24]] = -wk[0]
                } return kk[wk[24]] > -wk[0] && kk[wk[44]].push((kk[wk[100]] | kk[wk[24]] << kk[wk[22]]) & wk[10]), pk(kk[wk[44]])
          }

          function Xk(kk) {
            return typeof rk[kk] === wk[15] ? rk[kk] = tk(Pk[kk]) : rk[kk]
          }
          ak *= kk[wk[30]][Xk(169) + Xk(170)]
        }
        let Wk = kk[wk[30]][hk(171) + hk(172) + "ss"] * xk;
        if (xk < .3) {
          function Bk(...kk) {
            Fk(kk[wk[11]] = wk[2], kk[wk[12]] = function(kk) {
              var ek, ik, Dk, fk, Sk = kk.length;
              for (Fk(ek = [], ik = wk[2]), Dk = wk[2]; Dk < Sk; Dk++) ek.push(Dk !== wk[2] && kk[Dk] > kk[Dk - wk[0]] ? ek[Dk - wk[0]] + wk[0] : wk[0]);
              for (fk = Sk - wk[0]; fk >= wk[2]; fk--) fk !== Sk - wk[0] && kk[fk] > kk[fk + wk[0]] && (ek[fk] = Math.max(ek[fk], ek[fk + wk[0]] + wk[0])), ik += ek[fk];
              return ik
            }, console.log(kk[wk[12]]))
          }
          hk(wk[89]) in yk && Bk(), Wk *= xk
        }
        ak > Wk && (ak = Wk), Fk(fk()[hk(174)](Mk, Mk, ak), kk[wk[44]][hk(175) + hk(176)](Mk))
      }
      kk[wk[44]][ek(177) + wk[101]] = kk[wk[30]][ek(178) + ek(wk[49]) + wk[101]] * (mk ? Dk : bk)
    }
  },
  37253: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk,
      f: () => rk
    });
    var Dk = ik(37258),
      fk = ik(1850);
    const Sk = 2,
      bk = 1,
      rk = {
        Or: 1,
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

    function Pk(kk, ek, ik, rk, Pk, mk, Mk) {
      if (Pk.speed) return (0, Dk.c)(ek, ik, rk, Pk, mk, Mk, kk), void(Pk.ticksToReachMaxIdleFriction = Sk);
      const Kk = rk.isOnGround(),
        xk = ek.bloxd.getSyncedClientOptions(ek.bloxd.getPlayerReader(ik)),
        nk = null === xk ? ek.bloxd.getClientPredictedOption(ik, "groundFrictionScale") : xk.groundFrictionScale,
        Uk = null === xk ? ek.bloxd.getClientPredictedOption(ik, "airFrictionScale") : xk.airFrictionScale,
        Hk = Kk ? nk : Uk,
        wk = Math.max(bk, Hk),
        lk = Pk.ticksToReachMaxIdleFriction / Sk,
        pk = (0, fk.v)(wk, Hk, lk);
      mk.friction = kk.standingFriction * ((null === xk ? ek.bloxd.getClientPredictedOption(ik, "airMomentumConservation") : xk.airMomentumConservation) ? pk : Hk), Pk.ticksToReachMaxIdleFriction > 0 && Pk.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);