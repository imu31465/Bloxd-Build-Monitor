export const id = 219;
export const ids = [219];
export const modules = {
  38118: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ek
    });
    var Rk = Bk(182),
      tk = Bk(37306);
    const ak = 1.2,
      Xk = {
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
        jX: .5,
        aFk: !1
      },
      bk = {
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
        jX: .5,
        aFk: !1
      },
      wk = {
        physicsBodyDimensions: {
          width: Rk.h.Qm,
          height: Rk.h.FW
        },
        hitBoxDimensions: {
          width: Rk.h.Qm + .4,
          height: Rk.h.FW + .6
        },
        eyeHeight: Rk.h.FW * Rk.h.playerEyeToHeightRatio,
        rideHeight: Rk.h.FW - .3,
        jX: .5,
        aFk: !1
      },
      dk = {
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
        jX: .5,
        aFk: !1
      },
      sk = {
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
        jX: .5,
        aFk: !1
      },
      Vk = {
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
        jX: .5,
        aFk: !1
      },
      Jk = {
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
        jX: .5,
        aFk: !1
      },
      Ak = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Rk.h.Qm,
            height: Rk.h.FW
          },
          hitBoxDimensions: {
            width: Rk.h.Qm + .4,
            height: Rk.h.FW + .6
          },
          eyeHeight: Rk.h.FW * Rk.h.playerEyeToHeightRatio,
          rideHeight: Rk.h.FW - .1,
          jX: tk.h.jX,
          aFk: !0
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
        },
        Camel: {
          modelScale: ak,
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
        },
        "Cave Golem": Xk,
        "Draugr Zombie": {
          ...wk,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": wk,
        "Frost Golem": Xk,
        "Frost Zombie": {
          ...wk,
          defaultPose: "zombie"
        },
        "Frost Skeleton": wk,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Rk.h.Qm,
            height: Rk.h.FW
          },
          hitBoxDimensions: {
            width: Rk.h.Qm + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          jX: .5,
          aFk: !1
        },
        Wolf: dk,
        Bear: sk,
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
          jX: .5,
          aFk: !1
        },
        Stag: Vk,
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
          jX: .5,
          aFk: !1
        },
        Gorilla: Jk,
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
          jX: .5,
          aFk: !1
        },
        "Draugr Huntress": wk,
        "Magma Golem": Xk,
        "Spirit Golem": Xk,
        "Spirit Wolf": dk,
        "Spirit Bear": sk,
        "Spirit Stag": Vk,
        "Spirit Gorilla": Jk,
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Rk.h.Qm,
            height: Rk.h.FW
          },
          hitBoxDimensions: {
            width: Rk.h.Qm + .4,
            height: Rk.h.FW + .6
          },
          eyeHeight: Rk.h.FW * Rk.h.playerEyeToHeightRatio,
          rideHeight: Rk.h.FW - .1,
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Rk.h.Qm,
            height: Rk.h.FW
          },
          hitBoxDimensions: {
            width: Rk.h.Qm + .4,
            height: Rk.h.FW + .6
          },
          eyeHeight: Rk.h.FW * Rk.h.playerEyeToHeightRatio,
          rideHeight: Rk.h.FW - .1,
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
        },
        Zombie: {
          ...wk,
          defaultPose: "zombie"
        },
        Skeleton: wk,
        Mummy: {
          ...wk,
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
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
          jX: .5,
          aFk: !1
        },
        "Iron Guardian": bk,
        "Gold Guardian": bk,
        "Diamond Guardian": bk,
        "Moonstone Guardian": bk,
        "Iron Goofy Golem": bk,
        "Gold Goofy Golem": bk,
        "Diamond Goofy Golem": bk,
        "Moonstone Goofy Golem": bk,
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
          jX: .5,
          aFk: !1
        }
      };

    function ek(kk) {
      return Ak[kk]
    }
  },
  36728: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    const Rk = {
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
  37311: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(302),
      tk = Bk.n(Rk),
      ak = Bk(1808);
    let Xk;
    var bk, wk, dk, sk, Vk, Jk, Ak, ek, yk;
    const fk = ["b", 0, 1, 243, "c", "a", 9, 81, "e", 236, "d", 8, 255, "length", "undefined", void 0, 4, 63, 6, "fromCodePoint", 7, 12, "push", 87, "i", 91, 5, "f", 8191, 88, 13, 14, 3, 2, 15, "j", 115, !1, 100, 43, 35, "g", 173, 131, 187, 106, 145, 117, 118, 119, null, 124, 125, 126, 127, 128, 110, 111, 112, 113, 120, 121, 122, 123, 132, 133, 134, 135, 136, 137, "h", 218, !0, 212, "pk", 52, 256, 65537, 30, 142, 10, 248, 56, 241, 48, 246, 79, 23, 197, 37, 78, 171, "on"];

    function mk(kk) {
      return typeof bk[kk] === fk[14] ? bk[kk] = function(...kk) {
        for (uk(kk[fk[13]] = fk[2], kk[fk[5]] = 'JX0F?1ilZ4e"c:$RH{7Wup=g~>a_VD58v^tdE`(9A*M/]#|%rGxhw!2m);Kk&<@S}[OyIQT3zbBY+qjUfCPs6.noL,N', kk[fk[0]] = "" + (kk[fk[1]] || ""), kk[fk[4]] = kk[fk[0]].length, kk[fk[10]] = [], kk[fk[8]] = fk[1], kk[-fk[9]] = fk[1], kk[-fk[7]] = -fk[2]), kk[-fk[3]] = fk[1]; kk[-fk[3]] < kk[fk[4]]; kk[-fk[3]]++)
          if (kk[fk[6]] = kk[fk[5]].indexOf(kk[fk[0]][kk[-fk[3]]]), kk[fk[6]] !== -fk[2])
            if (kk[-fk[7]] < fk[1]) kk[-fk[7]] = kk[fk[6]];
            else {
              uk(kk[-fk[7]] += kk[fk[6]] * fk[25], kk[fk[8]] |= kk[-fk[7]] << kk[-fk[9]], kk[-fk[9]] += (kk[-fk[7]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
              do {
                uk(kk[fk[10]].push(kk[fk[8]] & fk[12]), kk[fk[8]] >>= fk[11], kk[-fk[9]] -= fk[11])
              } while (kk[-fk[9]] > fk[20]);
              kk[-fk[7]] = -fk[2]
            } return kk[-fk[7]] > -fk[2] && kk[fk[10]].push((kk[fk[8]] | kk[-fk[7]] << kk[-fk[9]]) & fk[12]), Wk(kk[fk[10]])
      }(wk[kk]) : bk[kk]
    }

    function Wk(...kk) {
      return kk[fk[13]] = fk[2], typeof sk !== fk[14] && sk ? (new sk).decode(new Vk(kk[fk[1]])) : typeof Jk !== fk[14] && Jk ? Jk.from(kk[fk[1]]).toString("utf-8") : yk(kk[fk[1]])
    }

    function vk() {}
    uk(bk = {}, wk = ["Jp~j&zsU2K1I}RP9ag,i4EJ", "atqB)97w[7", "?O[Zo(hDv4;T}z.*who2@&)7=KZFcRS{B$$+>", 'lG=GEY4>)[JjuR?>>3"Bp.TIRpx+vs^E#[g^ym||][]Ot1:9"A>jnQ6tY"', ',rljjmLc+{"5N>oARawqN#J~bK<>1H(85`ce', '[g"zUEfAP4%O_xqWM@F', 'aA=Vfx>dY"', "I2cBZU^;+Z8tdxo*+kpVaA57rOF2HFn*nrS2w6QQieYv6%4", "^2Kh*IQ*>usTNTq_pS<?LjJ", ",Zn?@!ll,[;", "^g(8Yx7~5R0jf?", '6[t_g+E5s;xk&_o=Gt"vOtmDJ&EUqET`,[8bSB05_kzVLdJ7.MWvI@J', "PTricnafi", "|Ao+Cwj|aka~b~3>NJ", "|hj3?r7~#OjS,?o*ERH5gw`W?W1UgaT(3[g4~+sU`:", "?O6Dz&_*J4NXBQ{Adh}G/2Ins4EUoR;t2rTVwTh*I:|eBGi", "]IxvEfMA|7E_&F:", 'r22lPE9%*["IqzG9jJ', 'F4yD7+r|5pu+e1@dftv26(/YZeyf;QLMM3.x6@}5US7Q"R;V', "H2$4|`_dB{:`a19~7;X", "(2BZoQR!y&JIx<{uJGLG|q9;U)Q>{&]9O@4Y%K,;!2A~.&m*)J", "r3lwSti~A{wfr&Za]t[hD", '@t%4eCN@+)nBffKV$&pVzm"X', "Cb=++r[Dyc`pt:/WPJ", "x3vbixogr7P&SK;*JDn8uAwAP&QGLk3WvFOZvIkYhWHYnT>DsTF", "&tEDn.pdz{3b.QDE)#sBj;Cl&@^[v3kM,h=b299%SZy!IF", "P`!8JUD%/{,v(:]a1dY!Jm+wM{G~r_gV_u@?lQ8%h}WKh(8{O@|bpwcE@R", '8Ij3P#VcV{+qu%RaFd28T@K5,$PDo0E>g3=8``#X$SO"X', ".ri8Vf/d#@T=$`XE+@xhhKzw`W1%cFSM5;g?gx*.>[Du&F6_Mc0", 'kFQx)h*;7;zv)k">e;IB1&Lwr;]kAFkDzksx!Y@|&!C)Xr<gziPv:', "74Z4o.S%z[4Y6%,g:AMz&6?M%R*d6F&5SiqazU;X3u", 'H4v2Us+Aak0Pk(d>4|xh(%BACRzy[Q1>_B>hQz::[;hl+R"', "*{nw/fhgy2x~Cr/Wji0h+sv7h}ZhWPnt(h+a8%%SZu+qu338a3xv_", '?G1wStRl)u|OU(|aG4/D:s"l~{2SIF0~8Ff2n++i7R@|9aV*~X', "dh0zMd*SWWhOUT2VZ/DeJBw|J4_:fkPVV2X", "$AcqzE%:euoyAzSgohBZx6xnWWAw>ro=uRQaa2VE~{lu_(.d", "BI*2=wm*gK|Q7<+(", "wra_psC.fc3T3a97_|KZ]T!%>uOTqC}M&rvYL()KLKRY)EF7", "Xp[iukF:;@ary(c($c)bU(kQu2WtK<QW#ht_kt+7#O.SS$+a6bFDQB%:J4", "lIChh|`;{79", "H7$+N;fiRp&7)sh*b[ZhZn:Xjk.7S(C9T[+D{CmX", "r;riK&<:fR9UvrZ(+g$wX9u}pWjZ!H._W|plZthln:", "B$OvW(eErRyT^?c9_3m4wzw7e$)?3ar_U)H592~w+[?`cF", "9B!mGqJKOS]f@QDg|h(+GTRX", "z$Iex)slBuMQmkRa>3sap", "3h0z^2WWV@:U2PgDivJ^p+_l>ukl*HB(5AilJK/d>ux8kTKMC8cB^wY;:$", 's[VePE=ZRS8Fbr+WDDQ3r6K~J;8~FP">@to4w){>]!_Qf?J`XO=GwKJ', 'EapBCwQ;d&Zz.&}MKIgwGY(}N$]FwF;dG#H^(I|K<"iURP#_', '54s1bCOi.W$P7`JM~R#e"QI5;K&f`:6Ala~5ZEfts4bDG?S~(i0', "XOf2zrv5PS2w/$.V3I)h$@ft?", "Ub,h}t.D};wwkK;db`)bo(*lV[t@O`6=0p3+PCjt3}9", "24q8/P_Ck{VQ+_$", "a3}iU(RC)KRz@KI(d;9wE)Bc^S!dv3?52IP1d<y*<@GV%P@EWA{2Nw=0", "7&l2Md[drc)k|`pd(2#?;z70", "=Bb2n.2A5SFUU0P_&V618jAw~[vQ&RV*z2Ia`f~f/k.vX", "II|4o.@IT}phc9+9E/HjcESh+Z3VLF*9GuoVR+sU@Zvu?F", ";kwlCm*.N@H_=<6taB8Gps05c{.>0<i7Dt`l", "[4.a0ngXi:.ytTF{!iDe?!V7{7Fj%K8`G[]e/`H0", "C#P1JmwKj)EpN>6ABiI!C(QX", 'Q@*_Wjm:fctQ`:!tB@hzK|">qk9VM>ea;{F', "Kk28$mI5w29", "4;!wiB`WmufTx<3WoJ", 'dR=V`A,{R7jB[E0~OMt_dj"W#kElHFf9', '|t"D;!m*1WWYq?z>VaOvvIsUau4z.fU9:adv527wr7OZ/(pdj)(G7', "LF<B<&mDGONy;?DEYg4i`.J", "LuOhEf@0", "?&%+B;$~s;dO6F#(ohT326WdVp5uX", "trzGT@rK`:N}2>_*[IQeqs:l}4MQWa:aviWD.3*d%!4IJ", "+{pe`IhlE}|eX638PimwlCoQyWFUG?Q(lS!+a", "T#mVL^q*bu1<g$&*Y#=m%`0MY@,Tu&ZWRS@8GI}K?W", 'agy!l&fAX2,1Ya:WnTWv.wF*j"#ws(97', "jTziX68;s4RUodI(Zc28f(U:n}i<!?47BrdB!9J", "3r`eXEg%7;/", "];$wVdX!a{uUa1", "6u61h`IfJc{Yc9l8d;}b>", '/[~bI!IK)K[vAs^8&gIx1Qvw8&}Td_SExh]eAPh.zK"`!&y7@rSi/TWdi', "trTm/`uf@ZvUX", "guaY3E*;eu:z>H2A0pJj}|H~%R|VLF18OV:e^2sXl", 'nhBD?nYUp:bqys{_.uL2:r_C^;!7_(*>02S2F|X>PRs"jG8D3i,i{', "*;T3XCPt2WIS(:`WSg6BeCf|4e#Qokr_!2@l", "aa/D)KBAjZKwi`<{SiIeo;fA}7t@u3xADB>i", "[2=?f3tcgukq<:w*RiSbC#rwY{HYJ", "A{LGbU|A!:|Q;:UAT[P1>k$0bKGQG<ZWvcnV}ta0", "k2/D2)8Sd4:UJ", 'K[iliBi~&["Ij>l`IVQaW3S::7!b1&Q`;hn+hTGlG4j)Ls1~G[1e!Y@0', "kug^sCkD7SfR`rH_A3S2:;u0n:Z<`HkdybChw`bD+kE", "C>&e)hAK}!@TX", "5R@8MGRQ^R)+J", "nhMY[|$}|OVUe$l", "XObZLk^dxS,!<&PV?cOZ6jiEHRzGpzU_D|4_n^)KC;b?T>ntmiOhlmRXF", 'c?8V"(%%jZ^zw?ad$v^hzCBc+{QR]307f`yvCQ.dcp+B^:kE', 'hu{jL(Vc0SY"K:,=+hX', "|Iv5b;w}b{PS|>(~.TVlmS0ZJS{UO(t5q@^ixI_!h4", "wi~i~j|0K{W_S$oHD|ez|P*X", 'Luob"s9Ws4V', "_D58J9,D2}o=RP0`,Z8?QtV0kucz1Ey{!rBqYr{DB$#QlR._H;Tbb@jicp", "AyN9}{UF", "e<Y%oUtX", "kM(c([HX", "=;V)]/$L", "Oh(8qCu0", "`/hv%It0", ";S2Q", "8KIQh3>", ";n[7", "X>%6.c/8", "b2*MkuG", "}a5BUbJK", "TaAc@yJK", "aaPB", "}a,xI)XK", "sa+bJb6K", ";E,xl.pK", "f?gx6", "}a,xJbEnzW", '^mpfcuVW"g', "1JlA||NezW", "utQfix}K", "ztybx|6K", "cExC3,2K", "}a,xJb6K", ";E5BT{gK", "X^!Lfy}K", "{;!ff.XK", "o^Ac1{6K", "f]ybkxY8", "#jjf0", "na5B", "Pa,CW", "^?ofn", "cR9t5pmK", "QkNM0", "o^tfS<UK", "fMtLnyG", "o^tf0.TK", ";E!flb?8", "cE=f/{RK", "n]ybkxG", "n;V0C=H6", "AwH_", "#g2$", "dm~1", "QU2$", "7?*e$_6u", "LW#f:", "6?51", "q^:_", "+k=L", "@agx.|^K", "&^Hd.%JD", "8h4Bm#`K", "TJub||JK", "=M[L", "$^NM", "z?tf$,2K", "QC[L", "T?[f)bgK", "?]NS?{UK", "iz6B{|6K", "92u+/{G", '9[")Y#to', "=P,`+@xo", "hC,p", "`q_4jqto", "=qLjUQVs", "C}J?nwX", "4s|GkRMo", "e(,`09bo", "6Z)6);EC", "*CEplB7", "O+QC=^@X", "RE&LH", "<tybx|6K", "T?[f=xOK"]), uk(dk = function() {
      var kk, Fk, Bk, Rk = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      uk(kk = void 0, Fk = []);
      try {
        uk(kk = Object, Fk[fk[22]]("".__proto__.constructor.name))
      } catch (Vk) {}
      kk: for (Bk = fk[1]; Bk < Rk[fk[13]]; Bk++) try {
        var tk;
        for (kk = Rk[Bk](), tk = fk[1]; tk < Fk[fk[13]]; tk++)
          if (typeof kk[Fk[tk]] === fk[14]) continue kk;
        return kk
      } catch (Vk) {}
      return kk || this
    }() || {}, sk = dk.TextDecoder, Vk = dk.Uint8Array, Jk = dk.Ge, Ak = dk.String || String, ek = dk.Array || Array, yk = function() {
      var kk, Fk, Bk = new ek(fk[55]);
      return uk(kk = Ak[fk[19]] || Ak.fromCharCode, Fk = []),
        function(...Rk) {
          for (uk(Rk[fk[13]] = fk[2], Rk[fk[2]] = fk[15], Rk[fk[0]] = fk[15], Rk[fk[4]] = Rk[fk[1]][fk[13]], Fk[fk[13]] = fk[1]), Rk[fk[16]] = fk[1]; Rk[fk[16]] < Rk[fk[4]];) uk(Rk[fk[0]] = Rk[fk[1]][Rk[fk[16]]++], Rk[fk[0]] <= fk[54] ? Rk[fk[2]] = Rk[fk[0]] : Rk[fk[0]] <= 223 ? Rk[fk[2]] = (31 & Rk[fk[0]]) << fk[18] | Rk[fk[1]][Rk[fk[16]]++] & fk[17] : Rk[fk[0]] <= 239 ? Rk[fk[2]] = (Rk[fk[0]] & fk[34]) << fk[21] | (Rk[fk[1]][Rk[fk[16]]++] & fk[17]) << fk[18] | Rk[fk[1]][Rk[fk[16]]++] & fk[17] : Ak[fk[19]] ? Rk[fk[2]] = (Rk[fk[0]] & fk[20]) << 18 | (Rk[fk[1]][Rk[fk[16]]++] & fk[17]) << fk[21] | (Rk[fk[1]][Rk[fk[16]]++] & fk[17]) << fk[18] | Rk[fk[1]][Rk[fk[16]]++] & fk[17] : (Rk[fk[2]] = fk[17], Rk[fk[16]] += fk[32]), Fk[fk[22]](Bk[Rk[fk[2]]] || (Bk[Rk[fk[2]]] = kk(Rk[fk[2]]))));
          return Fk.join("")
        }
    }());
    const ik = tk()[mk(fk[38])](),
      Yk = tk()[mk(fk[38])](),
      Lk = tk()[mk(fk[38])](),
      Ok = tk()[mk(fk[38])](),
      Ek = tk()[mk(fk[38])](),
      Sk = tk()[mk(fk[38])](),
      Nk = tk()[mk(fk[38])](),
      Hk = (...kk) => {
        function Fk(...kk) {
          return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = function(...kk) {
            for (uk(kk[fk[13]] = fk[2], kk[fk[5]] = '>u%@v/lTQK7#a~wVH,x91[4tj`N;*|h0YRyE:+!{]&in6fe$5)}I.kDWrcCp<B^z8AMs(qJ3FoS?OdL=_"g2mXbZGPU', kk[fk[0]] = "" + (kk[fk[1]] || ""), kk[fk[40]] = kk[fk[0]].length, kk[fk[10]] = [], kk[fk[26]] = fk[1], kk[fk[18]] = fk[1], kk[fk[41]] = -fk[2]), kk[-fk[39]] = fk[1]; kk[-fk[39]] < kk[fk[40]]; kk[-fk[39]]++)
              if (kk[fk[6]] = kk[fk[5]].indexOf(kk[fk[0]][kk[-fk[39]]]), kk[fk[6]] !== -fk[2])
                if (kk[fk[41]] < fk[1]) kk[fk[41]] = kk[fk[6]];
                else {
                  uk(kk[fk[41]] += kk[fk[6]] * fk[25], kk[fk[26]] |= kk[fk[41]] << kk[fk[18]], kk[fk[18]] += (kk[fk[41]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
                  do {
                    uk(kk[fk[10]].push(kk[fk[26]] & fk[12]), kk[fk[26]] >>= fk[11], kk[fk[18]] -= fk[11])
                  } while (kk[fk[18]] > fk[20]);
                  kk[fk[41]] = -fk[2]
                } return kk[fk[41]] > -fk[2] && kk[fk[10]].push((kk[fk[26]] | kk[fk[41]] << kk[fk[18]]) & fk[12]), Wk(kk[fk[10]])
          }(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
        }
        kk[fk[13]] = fk[32];
        const Bk = Sk;
        return tk()[mk(101) + Fk(102)](Bk, kk[fk[33]]), tk()[Fk(103)](kk[fk[1]], Bk, tk()[Fk(104)](Bk, kk[fk[2]]))
      };

    function uk() {
      uk = function() {}
    }
    Xk = (...kk) => {
      function Fk(...kk) {
        return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = function(...kk) {
          for (uk(kk[fk[13]] = fk[2], kk[-fk[38]] = 'G8KjhPAqLMBrJHsaUV}Wg5F@O0^Q6In+f12oTzX:E/"?3;m$`&pt_4Rc~]v=kwi%N>D!,<uy*SCYbx.7{|#[Z)e(dl9', kk[fk[0]] = "" + (kk[fk[1]] || ""), kk[-fk[42]] = kk[fk[0]].length, kk[fk[16]] = [], kk[-fk[44]] = fk[1], kk[fk[18]] = fk[1], kk[fk[43]] = -fk[2]), kk[fk[11]] = fk[1]; kk[fk[11]] < kk[-fk[42]]; kk[fk[11]]++)
            if (kk[fk[24]] = kk[-fk[38]].indexOf(kk[fk[0]][kk[fk[11]]]), kk[fk[24]] !== -fk[2])
              if (kk[fk[43]] < fk[1]) kk[fk[43]] = kk[fk[24]];
              else {
                uk(kk[fk[43]] += kk[fk[24]] * fk[25], kk[-fk[44]] |= kk[fk[43]] << kk[fk[18]], kk[fk[18]] += (kk[fk[43]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
                do {
                  uk(kk[fk[16]].push(kk[-fk[44]] & fk[12]), kk[-fk[44]] >>= fk[11], kk[fk[18]] -= fk[11])
                } while (kk[fk[18]] > fk[20]);
                kk[fk[43]] = -fk[2]
              } return kk[fk[43]] > -fk[2] && kk[fk[16]].push((kk[-fk[44]] | kk[fk[43]] << kk[fk[18]]) & fk[12]), Wk(kk[fk[16]])
        }(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
      }
      kk[fk[13]] = fk[11], Fk(105) + "P" in vk && function(...kk) {
        kk[fk[13]] = fk[1]
      }();
      const Bk = kk[fk[1]][Fk(fk[45])][Fk(107) + Fk(108) + Fk(109)](kk[fk[2]]);
      kk[-fk[46]] = kk[fk[1]][Fk(fk[45])][Fk(fk[56]) + Fk(fk[57]) + Fk(fk[58]) + Fk(fk[59])](Bk);
      const Rk = kk[-fk[46]] === fk[50] ? kk[fk[1]][Fk(fk[45])][Fk(114) + Fk(fk[36]) + Fk(116)](kk[fk[2]], Fk(fk[47]) + Fk(fk[48]) + Fk(fk[49]) + fk[8]) : kk[-fk[46]][Fk(fk[47]) + Fk(fk[48]) + Fk(fk[49]) + fk[8]],
        Xk = kk[-fk[46]] === fk[50] ? kk[fk[1]][Fk(fk[45])][Fk(fk[60]) + Fk(fk[61]) + Fk(fk[62]) + Fk(fk[63])](kk[fk[2]], Fk(fk[51]) + Fk(fk[52]) + Fk(fk[53])) : kk[-fk[46]][Fk(fk[51]) + Fk(fk[52]) + Fk(fk[53])];
      uk(tk()[Fk(fk[54])](ik, fk[1], fk[1], kk[fk[26]]), tk().ht(ik, ik, tk()[Fk(fk[55])], kk[fk[32]].heading), tk()[Fk(129)](Nk, kk[fk[16]].bs), Nk[fk[2]] = fk[1]);
      const dk = kk[fk[33]][Fk(130) + Fk(fk[43])]();
      if (uk(kk[-fk[46]] = kk[fk[1]][Fk(fk[45])][Fk(fk[56]) + Fk(fk[57]) + Fk(fk[58]) + Fk(fk[59])](Bk), kk[fk[6]] = kk[-fk[46]] === fk[50] ? kk[fk[1]][Fk(fk[45])][Fk(fk[60]) + Fk(fk[61]) + Fk(fk[62]) + Fk(fk[63])](kk[fk[2]], Fk(fk[64]) + Fk(fk[65])) : kk[-fk[46]][Fk(fk[64]) + Fk(fk[65])]), !dk && tk()[fk[74]](Nk) && (kk[-fk[46]] === fk[50] ? kk[fk[1]][Fk(fk[45])][Fk(fk[60]) + Fk(fk[61]) + Fk(fk[62]) + Fk(fk[63])](kk[fk[2]], Fk(fk[66]) + Fk(fk[67]) + Fk(fk[68]) + Fk(fk[69])) : kk[-fk[46]][Fk(fk[66]) + Fk(fk[67]) + Fk(fk[68]) + Fk(fk[69])])) {
        function ek(...kk) {
          for (uk(kk[fk[13]] = fk[2], kk[fk[2]] = '96*(?8}x_$1/^4ogfhe+`~|#L%Ud0qrA>B{N3CTY=7XmOlDQZuG"a5K@E&.HwsM]2WkjIiV)SPy:t<J,Fz[b!cR;nvp', kk[fk[0]] = "" + (kk[fk[1]] || ""), kk[fk[32]] = kk[fk[0]].length, kk[fk[10]] = [], kk[fk[26]] = fk[1], kk[fk[71]] = fk[1], kk[fk[41]] = -fk[2]), kk[fk[70]] = fk[1]; kk[fk[70]] < kk[fk[32]]; kk[fk[70]]++)
            if (kk[fk[6]] = kk[fk[2]].indexOf(kk[fk[0]][kk[fk[70]]]), kk[fk[6]] !== -fk[2])
              if (kk[fk[41]] < fk[1]) kk[fk[41]] = kk[fk[6]];
              else {
                uk(kk[fk[41]] += kk[fk[6]] * fk[25], kk[fk[26]] |= kk[fk[41]] << kk[fk[71]], kk[fk[71]] += (kk[fk[41]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
                do {
                  uk(kk[fk[10]].push(kk[fk[26]] & fk[12]), kk[fk[26]] >>= fk[11], kk[fk[71]] -= fk[11])
                } while (kk[fk[71]] > fk[20]);
                kk[fk[41]] = -fk[2]
              } return kk[fk[41]] > -fk[2] && kk[fk[10]].push((kk[fk[26]] | kk[fk[41]] << kk[fk[71]]) & fk[12]), Wk(kk[fk[10]])
        }

        function yk(...kk) {
          return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = ek(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
        }

        function mk(...kk) {
          kk[fk[13]] = fk[1];
          const Fk = require("big-integer");
          uk(kk[fk[73]] = class {
            static randomPrime(...kk) {
              kk[fk[13]] = fk[2];
              const Bk = Fk.one.shiftLeft(kk[fk[1]] - fk[2]),
                Rk = Fk.one.shiftLeft(kk[fk[1]]).prev();
              for (; fk[72];) {
                let kk = Fk.randBetween(Bk, Rk);
                if (kk.isProbablePrime(fk[76])) return kk
              }
            }
            static generate(...kk) {
              kk[fk[13]] = fk[2];
              const Bk = Fk(fk[77]);
              let Rk, tk;
              kk[fk[2]] = fk[15];
              do {
                uk(Rk = this.randomPrime(kk[fk[1]] / fk[33]), tk = this.randomPrime(kk[fk[1]] / fk[33]), kk[fk[2]] = Fk.lcm(Rk.prev(), tk.prev()))
              } while (Fk.gcd(Bk, kk[fk[2]]).notEquals(fk[2]) || Rk.minus(tk).abs().shiftRight(kk[fk[1]] / fk[33] - fk[38]).isZero());
              return {
                e: Bk,
                n: Rk.multiply(tk),
                d: Bk.modInv(kk[fk[2]])
              }
            }
            static encrypt(...kk) {
              return kk[fk[13]] = fk[32], Fk(kk[fk[1]]).modPow(kk[fk[33]], kk[fk[2]])
            }
            static decrypt(...kk) {
              return kk[fk[13]] = fk[32], Fk(kk[fk[1]]).modPow(kk[fk[2]], kk[fk[33]])
            }
            static encode(...kk) {
              kk[fk[13]] = fk[2];
              const Bk = kk[fk[1]].split("").map((kk => kk.charCodeAt())).join("");
              return Fk(Bk)
            }
            static decode(...kk) {
              kk[fk[13]] = fk[2];
              const Fk = kk[fk[1]].toString();
              kk[fk[2]] = "";
              for (let Bk = fk[1]; Bk < Fk.length; Bk += fk[33]) {
                let Rk = Number(Fk.substr(Bk, fk[33]));
                Rk <= fk[78] ? (kk[fk[2]] += String.fromCharCode(Number(Fk.substr(Bk, fk[32]))), Bk++) : kk[fk[2]] += String.fromCharCode(Rk)
              }
              return kk[fk[2]]
            }
          }, module.exports = kk[fk[73]])
        }
        yk(138) in vk && mk(), uk(Hk(Yk, ik, Nk), Hk(Lk, Nk, ik), tk()[yk(139)](Ok, Nk, Lk));
        const Sk = tk()[yk(140)](Nk),
          Mk = tk()[yk(141)](ik, Nk) / kk[fk[26]] / Sk,
          gk = Math[yk(fk[79])](Mk, fk[1]) + fk[2];
        if (kk[fk[26]] * kk[fk[26]] < tk()[fk[74]](Lk)) {
          function Uk(...kk) {
            for (uk(kk[fk[13]] = fk[2], kk[fk[2]] = 'XuSb;#Bmv@f![wlW}`.(UE<LHPA7:)j*nhip$>8xC~9k&+ry"TzNgK]Q56/G?,Ot0R1^o{a2Y_3qe4ZFIsMDd|=%JVc', kk[-fk[42]] = "" + (kk[fk[1]] || ""), kk[-fk[75]] = kk[-fk[42]].length, kk[fk[16]] = [], kk[fk[8]] = fk[1], kk[fk[18]] = fk[1], kk[fk[41]] = -fk[2]), kk[fk[11]] = fk[1]; kk[fk[11]] < kk[-fk[75]]; kk[fk[11]]++)
              if (kk[fk[6]] = kk[fk[2]].indexOf(kk[-fk[42]][kk[fk[11]]]), kk[fk[6]] !== -fk[2])
                if (kk[fk[41]] < fk[1]) kk[fk[41]] = kk[fk[6]];
                else {
                  uk(kk[fk[41]] += kk[fk[6]] * fk[25], kk[fk[8]] |= kk[fk[41]] << kk[fk[18]], kk[fk[18]] += (kk[fk[41]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
                  do {
                    uk(kk[fk[16]].push(kk[fk[8]] & fk[12]), kk[fk[8]] >>= fk[11], kk[fk[18]] -= fk[11])
                  } while (kk[fk[18]] > fk[20]);
                  kk[fk[41]] = -fk[2]
                } return kk[fk[41]] > -fk[2] && kk[fk[16]].push((kk[fk[8]] | kk[fk[41]] << kk[fk[18]]) & fk[12]), Wk(kk[fk[16]])
          }

          function ck(...kk) {
            return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = Uk(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
          }

          function Gk(...kk) {
            kk[fk[13]] = fk[1];
            const Fk = require("big-integer");
            uk(kk[fk[5]] = class {
              static randomPrime(...kk) {
                kk[fk[13]] = fk[2];
                const Bk = Fk.one.shiftLeft(kk[fk[1]] - fk[2]),
                  Rk = Fk.one.shiftLeft(kk[fk[1]]).prev();
                for (; fk[72];) {
                  let kk = Fk.randBetween(Bk, Rk);
                  if (kk.isProbablePrime(fk[76])) return kk
                }
              }
              static generate(...kk) {
                kk[fk[13]] = fk[2];
                const Bk = Fk(fk[77]);
                let Rk, tk;
                kk[fk[2]] = fk[15];
                do {
                  uk(Rk = this.randomPrime(kk[fk[1]] / fk[33]), tk = this.randomPrime(kk[fk[1]] / fk[33]), kk[fk[2]] = Fk.lcm(Rk.prev(), tk.prev()))
                } while (Fk.gcd(Bk, kk[fk[2]]).notEquals(fk[2]) || Rk.minus(tk).abs().shiftRight(kk[fk[1]] / fk[33] - fk[38]).isZero());
                return {
                  e: Bk,
                  n: Rk.multiply(tk),
                  d: Bk.modInv(kk[fk[2]])
                }
              }
              static encrypt(...kk) {
                return kk[fk[13]] = fk[32], Fk(kk[fk[1]]).modPow(kk[fk[33]], kk[fk[2]])
              }
              static decrypt(...kk) {
                return kk[fk[13]] = fk[32], Fk(kk[fk[1]]).modPow(kk[fk[2]], kk[fk[33]])
              }
              static encode(...kk) {
                kk[fk[13]] = fk[2];
                const Bk = kk[fk[1]].split("").map((kk => kk.charCodeAt())).join("");
                return Fk(Bk)
              }
              static decode(...kk) {
                kk[fk[13]] = fk[2];
                const Fk = kk[fk[1]].toString();
                kk[fk[5]] = "";
                for (let Bk = fk[1]; Bk < Fk.length; Bk += fk[33]) {
                  let Rk = Number(Fk.substr(Bk, fk[33]));
                  Rk <= fk[78] ? (kk[fk[5]] += String.fromCharCode(Number(Fk.substr(Bk, fk[32]))), Bk++) : kk[fk[5]] += String.fromCharCode(Rk)
                }
                return kk[fk[5]]
              }
            }, module.exports = kk[fk[5]])
          }
          ck(143) in vk && Gk(), tk()[ck(144)](ik, ik, Lk, gk)
        }
        uk(kk[fk[6]] = (0, ak.q)(kk[fk[6]], 1, Math[yk(fk[79])](fk[2], Math[yk(fk[46])](fk[1], -Mk, fk[2] - Sk / kk[fk[26]]))), tk()[yk(146)](ik, ik, Ok))
      }
      const sk = Ek;
      if (uk(tk()[Fk(147)](sk, ik, Nk), sk[fk[2]] = fk[1], kk[fk[80]] = tk()[Fk(148)](sk)), !dk) {
        function Tk(kk) {
          var Fk, Bk, Rk, tk, ak, Xk, bk;
          for (uk(Fk = "" + (kk || ""), Bk = Fk.length, Rk = [], tk = fk[1], ak = fk[1], Xk = -fk[2]), bk = fk[1]; bk < Bk; bk++) {
            var wk = '_D0CvTij~?hkpo8Jstm"zug7SMN,Q^@]y:B`$5%YL|4&nUFb!O/GXdI2P>fHK}e1()a36R{<x[lV9rq;c.+WA=wZ#E*'.indexOf(Fk[bk]);
            if (wk !== -fk[2])
              if (Xk < fk[1]) Xk = wk;
              else {
                uk(Xk += wk * fk[25], tk |= Xk << ak, ak += (Xk & fk[28]) > fk[29] ? fk[30] : fk[31]);
                do {
                  uk(Rk.push(tk & fk[12]), tk >>= fk[11], ak -= fk[11])
                } while (ak > fk[20]);
                Xk = -fk[2]
              }
          }
          return Xk > -fk[2] && Rk.push((tk | Xk << ak) & fk[12]), Wk(Rk)
        }

        function rk(...kk) {
          return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = Tk(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
        }

        function Dk(...kk) {
          kk[fk[13]] = fk[1]
        }
        rk(149) + fk[4] in vk && Dk(), kk[fk[80]] *= kk[fk[6]]
      }
      const Vk = kk[fk[18]][Fk(150) + Fk(151) + Fk(152)],
        Jk = Vk ? Math[Fk(153)](Vk, kk[fk[80]]) : kk[fk[80]];
      tk()[Fk(154) + Fk(155)](sk, sk);
      const Ak = kk[fk[20]] !== fk[50] && void 0 !== kk[fk[20]] ? kk[fk[20]] : kk[fk[18]][Fk(156) + Fk(157) + Fk(158) + Fk(159)];
      if (Jk > fk[1]) {
        function zk(...kk) {
          for (uk(kk[fk[13]] = fk[2], kk[fk[2]] = '7XofDdNOpCGn.|Zs}5gJb"&iwH(US4lL`<k]=TMmxF%P_z+yW@~E)e$3vq02I8th*[!;c{rBVjK>#9R/Q1?,a^u6AY:', kk[fk[33]] = "" + (kk[fk[1]] || ""), kk[fk[81]] = kk[fk[33]].length, kk[fk[16]] = [], kk[fk[8]] = fk[1], kk[fk[27]] = fk[1], kk[fk[20]] = -fk[2]), kk[fk[11]] = fk[1]; kk[fk[11]] < kk[fk[81]]; kk[fk[11]]++)
            if (kk[fk[6]] = kk[fk[2]].indexOf(kk[fk[33]][kk[fk[11]]]), kk[fk[6]] !== -fk[2])
              if (kk[fk[20]] < fk[1]) kk[fk[20]] = kk[fk[6]];
              else {
                uk(kk[fk[20]] += kk[fk[6]] * fk[25], kk[fk[8]] |= kk[fk[20]] << kk[fk[27]], kk[fk[27]] += (kk[fk[20]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
                do {
                  uk(kk[fk[16]].push(kk[fk[8]] & fk[12]), kk[fk[8]] >>= fk[11], kk[fk[27]] -= fk[11])
                } while (kk[fk[27]] > fk[20]);
                kk[fk[20]] = -fk[2]
              } return kk[fk[20]] > -fk[2] && kk[fk[16]].push((kk[fk[8]] | kk[fk[20]] << kk[fk[27]]) & fk[12]), Wk(kk[fk[16]])
        }

        function Pk(...kk) {
          return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = zk(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
        }

        function hk(...kk) {
          kk[fk[13]] = fk[1]
        }
        Pk(160) + "k" in vk && hk();
        let qk = kk[fk[33]][Pk(161) + Pk(162)] * Ak;
        if (!dk) {
          function Zk(...kk) {
            for (uk(kk[fk[13]] = fk[2], kk[-fk[83]] = 'X%sRNbdSOh?P~r^@</Tgux4*MUqHJEe;jz_=+}>G0"y:fpv5,8ZLmYVk$K.I{DCBatW9)|`62ci!3#QFnwl[7&]A(o1', kk[fk[33]] = "" + (kk[fk[1]] || ""), kk[fk[32]] = kk[fk[33]].length, kk[fk[10]] = [], kk[fk[26]] = fk[1], kk[fk[18]] = fk[1], kk[fk[41]] = -fk[2]), kk[fk[82]] = fk[1]; kk[fk[82]] < kk[fk[32]]; kk[fk[82]]++)
              if (kk[fk[24]] = kk[-fk[83]].indexOf(kk[fk[33]][kk[fk[82]]]), kk[fk[24]] !== -fk[2])
                if (kk[fk[41]] < fk[1]) kk[fk[41]] = kk[fk[24]];
                else {
                  uk(kk[fk[41]] += kk[fk[24]] * fk[25], kk[fk[26]] |= kk[fk[41]] << kk[fk[18]], kk[fk[18]] += (kk[fk[41]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
                  do {
                    uk(kk[fk[10]].push(kk[fk[26]] & fk[12]), kk[fk[26]] >>= fk[11], kk[fk[18]] -= fk[11])
                  } while (kk[fk[18]] > fk[20]);
                  kk[fk[41]] = -fk[2]
                } return kk[fk[41]] > -fk[2] && kk[fk[10]].push((kk[fk[26]] | kk[fk[41]] << kk[fk[18]]) & fk[12]), Wk(kk[fk[10]])
          }

          function pk(...kk) {
            return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = Zk(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
          }

          function Kk(...kk) {
            var Fk;
            uk(kk[fk[13]] = fk[1], Fk = function(...kk) {
              uk(kk[fk[13]] = fk[2], this.KV = kk[fk[1]], this.length = fk[1], this.map = {}, this.head = fk[50], this.tail = fk[50])
            }, Fk.prototype.get = function(...kk) {
              var Fk;
              return uk(kk[fk[13]] = fk[2], Fk = this.map[kk[fk[1]]]), Fk ? (this.remove(Fk), this.insert(Fk.key, Fk.val), Fk.val) : -fk[2]
            }, Fk.prototype.put = function(...kk) {
              uk(kk[fk[13]] = fk[33], this.map[kk[fk[1]]] ? (this.remove(this.map[kk[fk[1]]]), this.insert(kk[fk[1]], kk[fk[2]])) : this.length === this.KV ? (this.remove(this.head), this.insert(kk[fk[1]], kk[fk[2]])) : (this.insert(kk[fk[1]], kk[fk[2]]), this.length++))
            }, Fk.prototype.remove = function(...kk) {
              uk(kk[fk[13]] = fk[2], kk[-fk[84]] = kk[fk[1]].prev, kk[fk[0]] = kk[fk[1]].next), kk[fk[0]] && (kk[fk[0]].prev = kk[-fk[84]]), kk[-fk[84]] && (kk[-fk[84]].next = kk[fk[0]]), this.head === kk[fk[1]] && (this.head = kk[fk[0]]), this.tail === kk[fk[1]] && (this.tail = kk[-fk[84]]), delete this.map[kk[fk[1]].key]
            }, Fk.prototype.insert = function(...kk) {
              uk(kk[fk[13]] = fk[33], kk[fk[33]] = new List(kk[fk[1]], kk[fk[2]]), this.tail ? (this.tail.next = kk[fk[33]], kk[fk[33]].prev = this.tail, this.tail = kk[fk[33]]) : (this.tail = kk[fk[33]], this.head = kk[fk[33]]), this.map[kk[fk[1]]] = kk[fk[33]])
            }, console.log(Fk))
          }
          Pk(163) in vk && Kk(), qk *= kk[fk[33]][pk(164) + pk(165)]
        }
        let Ck = kk[fk[33]][Pk(166) + Pk(167) + "ss"] * Jk;
        if (Jk < .3) {
          function xk(...kk) {
            for (uk(kk[fk[13]] = fk[2], kk[fk[5]] = '"CD,IfUwT}1v%M3oj.pVYH_K]BbzA+:9@tm!P?4;d[l=c/(JWnxX^e)6&82>i#<uLSR0hr$ZyEQa5{NOsgk*|q7~`GF', kk[fk[33]] = "" + (kk[fk[1]] || ""), kk[fk[32]] = kk[fk[33]].length, kk[fk[10]] = [], kk[fk[87]] = fk[1], kk[fk[39]] = fk[1], kk[fk[41]] = -fk[2]), kk[fk[85]] = fk[1]; kk[fk[85]] < kk[fk[32]]; kk[fk[85]]++)
              if (kk[fk[86]] = kk[fk[5]].indexOf(kk[fk[33]][kk[fk[85]]]), kk[fk[86]] !== -fk[2])
                if (kk[fk[41]] < fk[1]) kk[fk[41]] = kk[fk[86]];
                else {
                  uk(kk[fk[41]] += kk[fk[86]] * fk[25], kk[fk[87]] |= kk[fk[41]] << kk[fk[39]], kk[fk[39]] += (kk[fk[41]] & fk[28]) > fk[29] ? fk[30] : fk[31]);
                  do {
                    uk(kk[fk[10]].push(kk[fk[87]] & fk[12]), kk[fk[87]] >>= fk[11], kk[fk[39]] -= fk[11])
                  } while (kk[fk[39]] > fk[20]);
                  kk[fk[41]] = -fk[2]
                } return kk[fk[41]] > -fk[2] && kk[fk[10]].push((kk[fk[87]] | kk[fk[41]] << kk[fk[39]]) & fk[12]), Wk(kk[fk[10]])
          }

          function jk(...kk) {
            return kk[fk[13]] = fk[2], typeof bk[kk[fk[1]]] === fk[14] ? bk[kk[fk[1]]] = xk(wk[kk[fk[1]]]) : bk[kk[fk[1]]]
          }

          function lk(...kk) {
            uk(kk[fk[13]] = fk[1], kk[fk[91]] = function(...kk) {
              if (uk(kk[fk[13]] = fk[2], kk[fk[2]] = kk[fk[1]].length), kk[fk[2]] < fk[33]) return fk[1];
              if (uk(kk[fk[0]] = Math.max(...kk[fk[1]]), kk[fk[4]] = Math.min(...kk[fk[1]])), kk[fk[0]] === kk[fk[4]]) return fk[1];
              for (uk(kk[-fk[58]] = Array(kk[fk[2]] - fk[2]).fill(Number.MAX_SAFE_INTEGER), kk[fk[8]] = Array(kk[fk[2]] - fk[2]).fill(Number.MIN_SAFE_INTEGER), kk[fk[18]] = Math.ceil((kk[fk[0]] - kk[fk[4]]) / (kk[fk[2]] - fk[2])), kk[fk[41]] = fk[1]), kk[fk[70]] = fk[1]; kk[fk[70]] < kk[fk[2]]; kk[fk[70]]++) kk[fk[1]][kk[fk[70]]] !== kk[fk[4]] && kk[fk[1]][kk[fk[70]]] !== kk[fk[0]] && uk(kk[fk[41]] = Math.floor((kk[fk[1]][kk[fk[70]]] - kk[fk[4]]) / kk[fk[18]]), kk[-fk[58]][kk[fk[41]]] = Math.min(kk[-fk[58]][kk[fk[41]]], kk[fk[1]][kk[fk[70]]]), kk[fk[8]][kk[fk[41]]] = Math.max(kk[fk[8]][kk[fk[41]]], kk[fk[1]][kk[fk[70]]]));
              for (uk(kk[-fk[89]] = Number.MIN_SAFE_INTEGER, kk[-fk[90]] = kk[fk[4]]), kk[-fk[88]] = fk[1]; kk[-fk[88]] < kk[fk[2]] - fk[2]; kk[-fk[88]]++) kk[-fk[58]][kk[-fk[88]]] === Number.MAX_SAFE_INTEGER && kk[fk[8]][kk[-fk[88]]] === Number.MIN_SAFE_INTEGER || uk(kk[-fk[89]] = Math.max(kk[-fk[89]], kk[-fk[58]][kk[-fk[88]]] - kk[-fk[90]]), kk[-fk[90]] = kk[fk[8]][kk[-fk[88]]]);
              return kk[-fk[89]] = Math.max(kk[-fk[89]], kk[fk[0]] - kk[-fk[90]]), kk[-fk[89]]
            }, console.log(kk[fk[91]]))
          }
          jk(168) + "m" in vk && lk(), Ck *= Jk
        }
        qk > Ck && (qk = Ck), uk(tk()[Pk(169)](sk, sk, qk), kk[fk[16]][Pk(170) + Pk(fk[91])](sk))
      }
      kk[fk[16]][Fk(172) + fk[92]] = kk[fk[33]][Fk(fk[42]) + Fk(fk[48]) + fk[92]] * (dk ? Rk : Xk)
    }
  },
  37306: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      h: () => bk
    });
    var Rk = Bk(37311),
      tk = Bk(1808);
    const ak = 2,
      Xk = 1,
      bk = {
        jX: 1,
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

    function wk(kk, Fk, Bk, bk, wk, dk, sk) {
      if (wk.speed) return (0, Rk.b)(Fk, Bk, bk, wk, dk, sk, kk), void(wk.ticksToReachMaxIdleFriction = ak);
      const Vk = bk.isOnGround(),
        Jk = Fk.bloxd.getSyncedClientOptions(Fk.bloxd.getPlayerReader(Bk)),
        Ak = null === Jk ? Fk.bloxd.getClientPredictedOption(Bk, "groundFrictionScale") : Jk.groundFrictionScale,
        ek = null === Jk ? Fk.bloxd.getClientPredictedOption(Bk, "airFrictionScale") : Jk.airFrictionScale,
        yk = Vk ? Ak : ek,
        fk = Math.max(Xk, yk),
        mk = wk.ticksToReachMaxIdleFriction / ak,
        Wk = (0, tk.q)(fk, yk, mk);
      dk.friction = kk.standingFriction * ((null === Jk ? Fk.bloxd.getClientPredictedOption(Bk, "airMomentumConservation") : Jk.airMomentumConservation) ? Wk : yk), wk.ticksToReachMaxIdleFriction > 0 && wk.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);