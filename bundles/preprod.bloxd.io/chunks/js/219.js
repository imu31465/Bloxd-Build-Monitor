export const id = 219;
export const ids = [219];
export const modules = {
  37859: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Zz
    });
    var Ez = bz(195),
      nz = bz(37105);
    const iz = 1.2,
      lz = {
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
        RM: .5,
        czz: !1
      },
      Mz = {
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
        RM: .5,
        czz: !1
      },
      tz = {
        physicsBodyDimensions: {
          width: Ez.e.Gw,
          height: Ez.e.mw
        },
        hitBoxDimensions: {
          width: Ez.e.Gw + .4,
          height: Ez.e.mw + .6
        },
        eyeHeight: Ez.e.mw * Ez.e.playerEyeToHeightRatio,
        rideHeight: Ez.e.mw - .3,
        RM: .5,
        czz: !1
      },
      Hz = {
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
        RM: .5,
        czz: !1
      },
      Oz = {
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
        RM: .5,
        czz: !1
      },
      pz = {
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
        RM: .5,
        czz: !1
      },
      dz = {
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
        RM: .5,
        czz: !1
      },
      Fz = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Ez.e.Gw,
            height: Ez.e.mw
          },
          hitBoxDimensions: {
            width: Ez.e.Gw + .4,
            height: Ez.e.mw + .6
          },
          eyeHeight: Ez.e.mw * Ez.e.playerEyeToHeightRatio,
          rideHeight: Ez.e.mw - .1,
          RM: nz.f.RM,
          czz: !0
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
        },
        Camel: {
          modelScale: iz,
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
        },
        "Cave Golem": lz,
        "Draugr Zombie": {
          ...tz,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": tz,
        "Frost Golem": lz,
        "Frost Zombie": {
          ...tz,
          defaultPose: "zombie"
        },
        "Frost Skeleton": tz,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Ez.e.Gw,
            height: Ez.e.mw
          },
          hitBoxDimensions: {
            width: Ez.e.Gw + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          RM: .5,
          czz: !1
        },
        Wolf: Hz,
        Bear: Oz,
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
          RM: .5,
          czz: !1
        },
        Stag: pz,
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
          RM: .5,
          czz: !1
        },
        Gorilla: dz,
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
          RM: .5,
          czz: !1
        },
        "Draugr Huntress": tz,
        "Magma Golem": lz,
        "Spirit Golem": lz,
        "Spirit Wolf": Hz,
        "Spirit Bear": Oz,
        "Spirit Stag": pz,
        "Spirit Gorilla": dz,
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Ez.e.Gw,
            height: Ez.e.mw
          },
          hitBoxDimensions: {
            width: Ez.e.Gw + .4,
            height: Ez.e.mw + .6
          },
          eyeHeight: Ez.e.mw * Ez.e.playerEyeToHeightRatio,
          rideHeight: Ez.e.mw - .1,
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Ez.e.Gw,
            height: Ez.e.mw
          },
          hitBoxDimensions: {
            width: Ez.e.Gw + .4,
            height: Ez.e.mw + .6
          },
          eyeHeight: Ez.e.mw * Ez.e.playerEyeToHeightRatio,
          rideHeight: Ez.e.mw - .1,
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
        },
        Zombie: {
          ...tz,
          defaultPose: "zombie"
        },
        Skeleton: tz,
        Mummy: {
          ...tz,
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
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
          RM: .5,
          czz: !1
        },
        "Iron Guardian": Mz,
        "Gold Guardian": Mz,
        "Diamond Guardian": Mz,
        "Moonstone Guardian": Mz,
        "Iron Goofy Golem": Mz,
        "Gold Goofy Golem": Mz,
        "Diamond Goofy Golem": Mz,
        "Moonstone Goofy Golem": Mz,
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
          RM: .5,
          czz: !1
        }
      };

    function Zz(zz) {
      return Fz[zz]
    }
  },
  36491: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    const Ez = {
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
  37111: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(332),
      nz = bz.n(Ez),
      iz = bz(1840);
    let lz;
    var Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz;
    const Kz = [0, 1, 8, 255, "length", 48, 3, "a", 4, "undefined", void 0, "c", 169, 209, 220, 63, 6, "fromCodePoint", 7, 12, "push", 56, 186, 126, 91, 121, 177, "e", 8191, 88, 13, 14, 2, 50, 9, 103, 131, 216, "i", "j", "f", 111, 104, 16, "b", 119, "X", 512, 127, 74, 130, 29, "g", "d", 15, 61, 5, 227, 201, 118, 237, 228, 123, 1023, 31, 128, 18, 108, 149, 65, 32, 24, 10, 19, 64, 65535, 41, 114, 44, 236, 47, 120, 122, null, 116, 117, 124, 125, 112, 113, 115, 132, 78, 106, "h", 185, "hu", 144, 146, 231, 178, 39, 90, 192, 160, 219, 75, 204, 87, 171, 92, !1, "on"];

    function wz(...zz) {
      return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = function(zz) {
        var uz, bz, Ez, nz, iz, lz, Mz;
        for (Tz(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = Kz[0], iz = Kz[0], lz = -Kz[1]), Mz = Kz[0]; Mz < bz; Mz++) {
          var tz = '"7!u><=%z1,OIRx+&X[Sb`edo#aZs_UVrpwc8t~HLl:j.4fY0?/9@;^DhT{)NM6BFkK5vq2|i]A3QJ(Pny*CEm}$gWG'.indexOf(uz[Mz]);
          if (tz !== -Kz[1])
            if (lz < Kz[0]) lz = tz;
            else {
              Tz(lz += tz * Kz[24], nz |= lz << iz, iz += (lz & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
              do {
                Tz(Ez.push(nz & Kz[3]), nz >>= Kz[2], iz -= Kz[2])
              } while (iz > Kz[18]);
              lz = -Kz[1]
            }
        }
        return lz > -Kz[1] && Ez.push((nz | lz << iz) & Kz[3]), Xz(Ez)
      }(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
    }

    function Xz(zz) {
      return typeof Oz !== Kz[9] && Oz ? (new Oz).decode(new pz(zz)) : typeof dz !== Kz[9] && dz ? dz.from(zz).toString("utf-8") : Rz(zz)
    }

    function fz() {}
    Tz(Mz = {}, tz = ["dv;%$@&f?K;nIN(L?kUQ@tBY>S", "O|EV=A`cfzsP8)!UTk<Dd@X_BB)K/t~o@4xDKE)dDb#", "D1F1>}*f%{Anou", "LaJ%}/.fjx/6&+9Z8vRQ[", "mw6D$|^!*TGyB~hsxIo(K;s8.`uZ;&algx!", "245z~vkd0`Idx<KV>NV1RDK}R)lnH!", "svma5ip_M;{JOZ>VYII_E4sIdF0QnnHS*4fV%D97", '$bv_sLBq3XG2[a6X8TQ<DE"', "KX/9U(5RS1vB{M4S", "pdXZ2ynAz{Ns*q__Qwu", "U+:rxycT.)a", "VvciH*K{91?OB*[b:jW=NP`c&1[o5*9wZ1n?j]+SKT}fP!=", "+t=@iQf[EF_DTNCZ4bbJ){VS1x=b@u5#", 'J==@PD"U=Sj)iCdlrj5<m4Q@nT#=wRuo.6=DfvjR^R', "wv9_b6v}E^0hLu5[", "/tl=xqF}&NQJ/{PHPhlUX6~!.Xtqyn2[4jI,FErF2F(2HxR~3vDQ);N!", "+L5JH39Y9^q>B~sdjL7=*@)B&Kciy8Fdw_l9C(i=16X0g|CZ7^6?:^>zu", "Z++QR/v=Z6.Viu|#mVVQd/#lQO0Vw?TcI7", "R|Ar^f<;)hd9N+;cqsU%YMIf<", "Bw[rqqSc<^~DEu", "P#jip?j%*^j", "xto^JQPBP;}+6R*w=|Grzw^!", "<TNA>0U8VN%RM8>oks5rE4[8=", "@Vb_N;RyA6UP7", 'CHV1Bw"', "<[(>H^$_BIf`7", 'xaoUO~>z;R:`wRsU29cr$(Ddn1|+Vx#d0TfD6;Q[mSTs6?"d.a3rNw({~R', "*ti^&|U@2F_q)ZhlxL)zh2ORk+", "&L<D%88!", "ix:iBA0@0+.DVxh:jar]5P4RdFhrFC|SuNd?u0JRq{XkIu", 'R[+Q|/73ibUZXNRZ6)AJ*6S%CN!^H{7VzfwZ@J"', 'q:0?%P"', "%v4s?t!8bFfQiNK8uB|@=DeFSSt,daw[V=UV}m:[zR", ",an]36:L|F#X_&}Z1a~QR82okI]?NCG8]t5_q;/!)h?", "U_h^,AT74zMnJ>", "*9[r;hrIgX", "U+<Dp?*Iw^E2+|iV@kL^){=fGkDxgYF:^|wJ7fdcH{Ksy8:a", "OT0?@9VB3OBK{#AaEk<,$qv=WX^2f?I", "o961$4.!", "XBlZI8gfu", "3w2sQQ*I9^!3P2)c^9kza(>}wN1u|xNUH0d]jB`;?T9QTq&LYa%pth9lW6I*7", 'x>e%P83%[^=MVx":<_D@sm/ny1"(DCal()NDZ~no,k:Xr||[muS_t3"', "H^q>J42=qRa,+~tS1_D>", "cT?90*&otRvJ?RpovwX9k0:@vS@V{qV_1TE;ANP9*+5n&u", ">dg=6;6f5IF?=ymcL0ar36r!", 'MbMV%AVB:xhOf#nHr_p^OD_%w+Nc"ZYZ{v3_kPym9Sh%A?na3=T^)ij7', ",vfsc?S%Ikf`1iko}H2Vzyb{PB9]:~PZ#1L]NN(@u1a=mo~o>^!_R", "=^l9C)j3wITx6t>oqvai#@TY0+pV&+=", ')x#9*qyRES:,f#jHXaQ<?B7Rzko=|~`LA"', "ea=Q:3T_C1hV2yHtXB^?aTL[r[`VQ+ew", "$u><50/{V+;Q/~+azTZrtL[zs`", "?V9_:M]TpKsDM8;ctb?^<wd;kT>=1&fH<B4%jMjTW{;nUtKo4=C<", 'XLZ_"DQ[wSvs9x&HN|MDY3ZcbRK){R<#v"', 'uBds)iy%HbhxN+rdw0fD"NU[H{(77', "1TA_w(z}M;u&>u<j8+n1JQa}qRJJq8{_?0mV<;a8I`35@&c[?9JAl?x!&+^", "KuMV4M,8RKy?!<K8q^q>&Qr!BN2?^tkV_wu", "7+h19fFvCTCO~tbL^LqA$Y6!/TaZ$~(acI6@)Py_wBs", "T^L?g@~n)OauJocX%_i1", "YkHUA/DctStPJNqtSBg^]NQIQXzM0)=", "VL:rJ0k_Y;)x?0VXu?4,Z)gwcFkxAqocS9e@a@!8{6Sw$2TdaNm|MNsU>", '=["p+y(f`Rn77', "#_N_d/Ycax0QI)~#,>RDj*TBOk=&2ykoCk4DBNVBNhP7|2A~0u_AZ", 'rdV>^*Qw]bp0Fu"dHtf>m|^f>Tu9/RnwdrG9E)kq.z5s`8R', "dkeD4c@U=", "6X}Viyz}`RQJTMU:])wruiP72R", "$6bDhN>[EFyy92SlZ|^@N{!o_`", "?0+@AN#;7^3+$~;lO>F]E)eojk~@D~_d%T7UMw]qST7YrZTc36;A:tYT)Xny7", 'HdP?}@"ocTQn;i"8gw|>92*@Q6L@I)V:b_</dqL8=', "ljjikfLU~R", "F]l=w(&{&NyB/?wt500^<P`70B0Qp>", "TxW^=wk_{Otip#xbA)2@wLZY,6rPUa3SEk&^Lh#3G6.Qh):aV7", "cdd1xqpSLXa07", "D03/g~tY|RTQMN>UUkU1", '|:F]dTJ%vT<&Za"XEkSr_@.[Ak)>4>', '_|3A"D#;N)_qKxgw]tfsdYof;RpXXN)Xm4.AFNu#jzSuHx{:l=6%', "A9Y1.2Gf${^sp0YH$4><ccd%0K4Q&)QHt^R@Zc4c*Tc", "y]#^@inIxKkBzu", "w9X=g~_cV`An:!CL~XfDpY&o*B3+:?A#", "7cQ_#C6f3bYD3a6d~|?936GoKT#", 'M|bD8m7c>^,^XN(L^a9z;H8U8R3nBui#P"', '+au<d~@[)zPBEYSZP2)rh9"', "}s<A<qk91,|5da~[Ct&U|Ai@?T/", '=dQA(4a8TxC[Ji5X>TJQ.nSSX^.n>uDLUdzpeQ"', ":aZqH${A", "RQsz]%t4", "<m.8", "NLEMu?#7A(WH?$C?_rc8K?fm2*", "U4l:^fQ!T8Kf@Q=_qHQ;,@Wc>*", "6%,;,#`$w9U.As4bl_`MNhby8_", '"j>bp6.f', "tgI6GYcM", 'qo.qY"Xk', "IZ1F8", "n!{EGlpk", "qo.q?Q5M", "%${Vz", "fy(1OgI+OLY", "nf}7yr,M<)F", "%hKSbcSSpOx", "i`;Z|4*ix#:", "5YhPC{UUd6h", "<ONG6NNmx:g", "}PUrMb)K90e", "K9~VJyb!", ",3lN4+sK", "T0{I", 'ajlI~"g', "T3J!", "vJ4H}7R", "KDthIvTN", "PDYxM^TN", "DDVh", 'KD"ys&zN', "iDjvTvaN", 'L_"y:=ZN', "qBXya", 'KD"yTvaN', "L_thP`XN", "zm[Qq^KN", "`L[qq=zN", "7OFq]yKN", "wO^vy1aN", 'x_y%$"JN', "gmYxb`aN", "q6^v}y!G", "uffqU", "nDth", 'VD"%p', "mBgqn", "x|eOtZdN", "F}9HU", "gmOq*8IN", "qHOQn^R", "gmOqU=2nwp", "q}TyA=FpvE", "o?OQD%p1Y", "gmOqU=PN", "L_[q:vBG", "x_(q#`|N", "n6^v}yR", "h_!{2<CG", "h>@A", "+&rp", "c805", "ZLrp", "L6sf>", "TK<5", 'mY"A', "j}(Q", "MDXy=1mN", ":/OmCV,)", "Gl{hdu2N", "PT7v11TN", "(H0Q", "Wm9H", 'wBOqW"JN', "F%0Q", "PB0q&vXN", "B69*B`IN", "]wah`1aN", "eJ7j#`R", "PB0qd<_N", "Xd|O", ".i:okI;7", '^C)J"{0', "aKiqz?EV", "}L|8T=!V", "]8Bd4TGeC", "sdJOc6Z", "@Upd)S5y", "?JWlY", "8O^vy1aN", "PB0q(ySN"]), Tz(Hz = function(...zz) {
      Tz(zz[Kz[4]] = Kz[0], zz[Kz[7]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[Kz[1]] = Kz[10], zz[-Kz[5]] = []);
      try {
        Tz(zz[Kz[1]] = Object, zz[-Kz[5]][Kz[20]]("".__proto__.constructor.name))
      } catch (tz) {}
      zz: for (zz[Kz[6]] = Kz[0]; zz[Kz[6]] < zz[Kz[7]][Kz[4]]; zz[Kz[6]]++) try {
        for (zz[Kz[1]] = zz[Kz[7]][zz[Kz[6]]](), zz[Kz[8]] = Kz[0]; zz[Kz[8]] < zz[-Kz[5]][Kz[4]]; zz[Kz[8]]++)
          if (typeof zz[Kz[1]][zz[-Kz[5]][zz[Kz[8]]]] === Kz[9]) continue zz;
        return zz[Kz[1]]
      } catch (tz) {}
      return zz[Kz[1]] || this
    }() || {}, Oz = Hz.TextDecoder, pz = Hz.Uint8Array, dz = Hz.gZ, Fz = Hz.String || String, Zz = Hz.Array || Array, Rz = function(...zz) {
      return Tz(zz[Kz[4]] = Kz[0], zz[-Kz[21]] = new Zz(Kz[65]), zz[Kz[22]] = Fz[Kz[17]] || Fz.fromCharCode, zz[Kz[11]] = []),
        function(...uz) {
          for (Tz(uz[Kz[4]] = Kz[1], uz[-Kz[14]] = Kz[10], uz[-Kz[13]] = Kz[10], uz[-Kz[12]] = uz[Kz[0]][Kz[4]], zz[Kz[11]][Kz[4]] = Kz[0]), uz[Kz[8]] = Kz[0]; uz[Kz[8]] < uz[-Kz[12]];) Tz(uz[-Kz[13]] = uz[Kz[0]][uz[Kz[8]]++], uz[-Kz[13]] <= Kz[48] ? uz[-Kz[14]] = uz[-Kz[13]] : uz[-Kz[13]] <= 223 ? uz[-Kz[14]] = (uz[-Kz[13]] & Kz[64]) << Kz[16] | uz[Kz[0]][uz[Kz[8]]++] & Kz[15] : uz[-Kz[13]] <= 239 ? uz[-Kz[14]] = (uz[-Kz[13]] & Kz[54]) << Kz[19] | (uz[Kz[0]][uz[Kz[8]]++] & Kz[15]) << Kz[16] | uz[Kz[0]][uz[Kz[8]]++] & Kz[15] : Fz[Kz[17]] ? uz[-Kz[14]] = (uz[-Kz[13]] & Kz[18]) << Kz[66] | (uz[Kz[0]][uz[Kz[8]]++] & Kz[15]) << Kz[19] | (uz[Kz[0]][uz[Kz[8]]++] & Kz[15]) << Kz[16] | uz[Kz[0]][uz[Kz[8]]++] & Kz[15] : (uz[-Kz[14]] = Kz[15], uz[Kz[8]] += Kz[6]), zz[Kz[11]][Kz[20]](zz[-Kz[21]][uz[-Kz[14]]] || (zz[-Kz[21]][uz[-Kz[14]]] = zz[Kz[22]](uz[-Kz[14]]))));
          return zz[Kz[11]].join("")
        }
    }());
    const sz = nz()[wz(Kz[35])](),
      rz = nz()[wz(Kz[35])](),
      oz = nz()[wz(Kz[35])](),
      Nz = nz()[wz(Kz[35])](),
      vz = nz()[wz(Kz[35])](),
      xz = nz()[wz(Kz[35])](),
      Jz = nz()[wz(Kz[35])](),
      Az = (...zz) => {
        function uz(...zz) {
          return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = function(...zz) {
            for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[7]] = 'gVKnQGuUIj!6ficFdqDpPJL1$x9TZ@~YN5st},bmCOH3#7)4BE]lA_z&W^eM=whRaSrk+Xv"%|0;2`?y8[*{(/.><:o', zz[Kz[32]] = "" + (zz[Kz[0]] || ""), zz[Kz[6]] = zz[Kz[32]].length, zz[-Kz[76]] = [], zz[Kz[27]] = Kz[0], zz[Kz[62]] = Kz[0], zz[Kz[52]] = -Kz[1]), zz[-Kz[77]] = Kz[0]; zz[-Kz[77]] < zz[Kz[6]]; zz[-Kz[77]]++)
              if (zz[-Kz[78]] = zz[Kz[7]].indexOf(zz[Kz[32]][zz[-Kz[77]]]), zz[-Kz[78]] !== -Kz[1])
                if (zz[Kz[52]] < Kz[0]) zz[Kz[52]] = zz[-Kz[78]];
                else {
                  Tz(zz[Kz[52]] += zz[-Kz[78]] * Kz[24], zz[Kz[27]] |= zz[Kz[52]] << zz[Kz[62]], zz[Kz[62]] += (zz[Kz[52]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
                  do {
                    Tz(zz[-Kz[76]].push(zz[Kz[27]] & Kz[3]), zz[Kz[27]] >>= Kz[2], zz[Kz[62]] -= Kz[2])
                  } while (zz[Kz[62]] > Kz[18]);
                  zz[Kz[52]] = -Kz[1]
                } return zz[Kz[52]] > -Kz[1] && zz[-Kz[76]].push((zz[Kz[27]] | zz[Kz[52]] << zz[Kz[62]]) & Kz[3]), Xz(zz[-Kz[76]])
          }(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
        }
        zz[Kz[4]] = Kz[6];
        const bz = xz;
        return nz()[uz(Kz[42]) + uz(105)](bz, zz[Kz[32]]), nz()[uz(Kz[93])](zz[Kz[0]], bz, nz()[uz(107)](bz, zz[Kz[1]]))
      };

    function Tz() {
      Tz = function() {}
    }
    lz = (...zz) => {
      function uz(...zz) {
        return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = function(...zz) {
          for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[7]] = 'RGNflVYCQHhcToiDIEKpXtAMSUmFasnjqbJgPwz,_#rB$LdW2<ZOk{|x;63(}+]?9)@["87^4*%!vy=/`1u05&.~>:e', zz[Kz[32]] = "" + (zz[Kz[0]] || ""), zz[Kz[6]] = zz[Kz[32]].length, zz[-Kz[80]] = [], zz[-Kz[79]] = Kz[0], zz[Kz[40]] = Kz[0], zz[Kz[52]] = -Kz[1]), zz[Kz[2]] = Kz[0]; zz[Kz[2]] < zz[Kz[6]]; zz[Kz[2]]++)
            if (zz[-Kz[21]] = zz[Kz[7]].indexOf(zz[Kz[32]][zz[Kz[2]]]), zz[-Kz[21]] !== -Kz[1])
              if (zz[Kz[52]] < Kz[0]) zz[Kz[52]] = zz[-Kz[21]];
              else {
                Tz(zz[Kz[52]] += zz[-Kz[21]] * Kz[24], zz[-Kz[79]] |= zz[Kz[52]] << zz[Kz[40]], zz[Kz[40]] += (zz[Kz[52]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
                do {
                  Tz(zz[-Kz[80]].push(zz[-Kz[79]] & Kz[3]), zz[-Kz[79]] >>= Kz[2], zz[Kz[40]] -= Kz[2])
                } while (zz[Kz[40]] > Kz[18]);
                zz[Kz[52]] = -Kz[1]
              } return zz[Kz[52]] > -Kz[1] && zz[-Kz[80]].push((zz[-Kz[79]] | zz[Kz[52]] << zz[Kz[40]]) & Kz[3]), Xz(zz[-Kz[80]])
        }(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
      }
      zz[Kz[4]] = Kz[2];
      const bz = zz[Kz[0]][uz(Kz[67])][uz(109) + uz(110) + uz(Kz[41])](zz[Kz[1]]);
      zz[Kz[7]] = zz[Kz[0]][uz(Kz[67])][uz(Kz[88]) + uz(Kz[89]) + uz(Kz[77]) + uz(Kz[90])](bz);
      const Ez = zz[Kz[7]] === Kz[83] ? zz[Kz[0]][uz(Kz[67])][uz(Kz[84]) + uz(Kz[85]) + uz(Kz[59]) + uz(Kz[45])](zz[Kz[1]], uz(Kz[81]) + uz(Kz[25]) + uz(Kz[82]) + Kz[27]) : zz[Kz[7]][uz(Kz[81]) + uz(Kz[25]) + uz(Kz[82]) + Kz[27]],
        lz = zz[Kz[7]] === Kz[83] ? zz[Kz[0]][uz(Kz[67])][uz(Kz[84]) + uz(Kz[85]) + uz(Kz[59]) + uz(Kz[45])](zz[Kz[1]], uz(Kz[62]) + uz(Kz[86]) + uz(Kz[87])) : zz[Kz[7]][uz(Kz[62]) + uz(Kz[86]) + uz(Kz[87])];
      Tz(nz()[uz(Kz[23])](sz, Kz[0], Kz[0], zz[Kz[56]]), nz().rb(sz, sz, nz()[uz(Kz[48])], zz[Kz[6]].heading), nz()[uz(Kz[65])](Jz, zz[Kz[8]].ht), Jz[Kz[1]] = Kz[0]);
      const Hz = zz[Kz[32]][uz(129) + uz(Kz[50])]();
      if (Tz(zz[Kz[7]] = zz[Kz[0]][uz(Kz[67])][uz(Kz[88]) + uz(Kz[89]) + uz(Kz[77]) + uz(Kz[90])](bz), zz[-Kz[88]] = zz[Kz[7]] === Kz[83] ? zz[Kz[0]][uz(Kz[67])][uz(Kz[84]) + uz(Kz[85]) + uz(Kz[59]) + uz(Kz[45])](zz[Kz[1]], uz(Kz[36]) + uz(Kz[91])) : zz[Kz[7]][uz(Kz[36]) + uz(Kz[91])]), !Hz && nz()[Kz[96]](Jz) && (zz[Kz[7]] === Kz[83] ? zz[Kz[0]][uz(Kz[67])][uz(Kz[84]) + uz(Kz[85]) + uz(Kz[59]) + uz(Kz[45])](zz[Kz[1]], uz(133) + uz(134) + uz(135)) : zz[Kz[7]][uz(136) + uz(137) + uz(138) + uz(139)])) {
        function Zz(...zz) {
          for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[7]] = '!TRdKofQAp5FYtB&U)9P}0,+niLcDmSh4(3bVzHs]I=8k|aZ6W17g<G{Cxe@>[*$rqlE^~J_wuj"v2X%;.?O`yM/#:N', zz[Kz[92]] = "" + (zz[Kz[0]] || ""), zz[Kz[6]] = zz[Kz[92]].length, zz[-Kz[93]] = [], zz[Kz[27]] = Kz[0], zz[Kz[16]] = Kz[0], zz[Kz[18]] = -Kz[1]), zz[Kz[94]] = Kz[0]; zz[Kz[94]] < zz[Kz[6]]; zz[Kz[94]]++)
            if (zz[Kz[38]] = zz[Kz[7]].indexOf(zz[Kz[92]][zz[Kz[94]]]), zz[Kz[38]] !== -Kz[1])
              if (zz[Kz[18]] < Kz[0]) zz[Kz[18]] = zz[Kz[38]];
              else {
                Tz(zz[Kz[18]] += zz[Kz[38]] * Kz[24], zz[Kz[27]] |= zz[Kz[18]] << zz[Kz[16]], zz[Kz[16]] += (zz[Kz[18]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
                do {
                  Tz(zz[-Kz[93]].push(zz[Kz[27]] & Kz[3]), zz[Kz[27]] >>= Kz[2], zz[Kz[16]] -= Kz[2])
                } while (zz[Kz[16]] > Kz[18]);
                zz[Kz[18]] = -Kz[1]
              } return zz[Kz[18]] > -Kz[1] && zz[-Kz[93]].push((zz[Kz[27]] | zz[Kz[18]] << zz[Kz[16]]) & Kz[3]), Xz(zz[-Kz[93]])
        }

        function Rz(...zz) {
          return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = Zz(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
        }

        function wz() {
          var zz;

          function uz() {}
          Tz(zz = function(...zz) {
            for (Tz(zz[Kz[4]] = Kz[32], zz[Kz[7]] = Kz[0], zz[-Kz[69]] = Kz[0], zz[-Kz[95]] = new uz(Kz[0]), zz[Kz[53]] = zz[-Kz[95]], zz[Kz[27]] = zz[Kz[0]], zz[Kz[18]] = zz[Kz[1]]); zz[Kz[27]] !== Kz[83] || zz[Kz[18]] !== Kz[83];) Tz(zz[-Kz[69]] = (zz[Kz[27]] ? zz[Kz[27]].val : Kz[0]) + (zz[Kz[18]] ? zz[Kz[18]].val : Kz[0]) + zz[Kz[7]], zz[Kz[7]] = Math.floor(zz[-Kz[69]] / Kz[72]), zz[Kz[53]].next = new uz(zz[-Kz[69]] % Kz[72]), zz[Kz[53]] = zz[Kz[53]].next, zz[Kz[27]] = zz[Kz[27]] ? zz[Kz[27]].next : Kz[83], zz[Kz[18]] = zz[Kz[18]] ? zz[Kz[18]].next : Kz[83]);
            return zz[Kz[7]] && (zz[Kz[53]].next = new uz(zz[Kz[7]])), zz[-Kz[95]].next
          }, console.log(zz))
        }
        uz(140) + "p" in fz && wz(), Tz(Az(rz, sz, Jz), Az(oz, Jz, sz), nz()[Rz(141)](Nz, Jz, oz));
        const xz = nz()[Rz(142)](Jz),
          Lz = nz()[Rz(143)](sz, Jz) / zz[Kz[56]] / xz,
          Pz = Math[Rz(Kz[97])](Lz, Kz[0]) + Kz[1];
        if (zz[Kz[56]] * zz[Kz[56]] < nz()[Kz[96]](oz)) {
          function Gz(zz) {
            var uz, bz, Ez, nz, iz, lz, Mz;
            for (Tz(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = Kz[0], iz = Kz[0], lz = -Kz[1]), Mz = Kz[0]; Mz < bz; Mz++) {
              var tz = ')eZThsmiSPf1;9d64X0Q7,cL~!?b>@Uv|<t+O]3YD}pA5G"V^JM/_xEg%w&*Kn8Bz[(r=:`N.HjyWIkluaF$CRo{#2q'.indexOf(uz[Mz]);
              if (tz !== -Kz[1])
                if (lz < Kz[0]) lz = tz;
                else {
                  Tz(lz += tz * Kz[24], nz |= lz << iz, iz += (lz & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
                  do {
                    Tz(Ez.push(nz & Kz[3]), nz >>= Kz[2], iz -= Kz[2])
                  } while (iz > Kz[18]);
                  lz = -Kz[1]
                }
            }
            return lz > -Kz[1] && Ez.push((nz | lz << iz) & Kz[3]), Xz(Ez)
          }

          function az(...zz) {
            return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = Gz(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
          }
          nz()[az(145)](sz, sz, oz, Pz)
        }
        Tz(zz[-Kz[88]] = (0, iz.u)(zz[-Kz[88]], 1, Math[Rz(Kz[97])](Kz[1], Math[Rz(Kz[98])](Kz[0], -Lz, Kz[1] - xz / zz[Kz[56]]))), nz()[Rz(147)](sz, sz, Nz))
      }
      const Oz = vz;
      if (Tz(nz()[uz(148)](Oz, sz, Jz), Oz[Kz[1]] = Kz[0], zz[Kz[11]] = nz()[uz(Kz[68])](Oz)), !Hz) {
        function Vz(...zz) {
          for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[1]] = 'G)DqpLNlZRmHS!P_rCB&5Y*Qf70x`wEKJMW@IagT:An(iXh+o#[e;1"|tV3=6j.c{/^92Ob]UkFds4>}<v?%uy$z8,~', zz[Kz[44]] = "" + (zz[Kz[0]] || ""), zz[Kz[11]] = zz[Kz[44]].length, zz[Kz[53]] = [], zz[Kz[27]] = Kz[0], zz[Kz[40]] = Kz[0], zz[Kz[98]] = -Kz[1]), zz[Kz[2]] = Kz[0]; zz[Kz[2]] < zz[Kz[11]]; zz[Kz[2]]++)
            if (zz[Kz[34]] = zz[Kz[1]].indexOf(zz[Kz[44]][zz[Kz[2]]]), zz[Kz[34]] !== -Kz[1])
              if (zz[Kz[98]] < Kz[0]) zz[Kz[98]] = zz[Kz[34]];
              else {
                Tz(zz[Kz[98]] += zz[Kz[34]] * Kz[24], zz[Kz[27]] |= zz[Kz[98]] << zz[Kz[40]], zz[Kz[40]] += (zz[Kz[98]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
                do {
                  Tz(zz[Kz[53]].push(zz[Kz[27]] & Kz[3]), zz[Kz[27]] >>= Kz[2], zz[Kz[40]] -= Kz[2])
                } while (zz[Kz[40]] > Kz[18]);
                zz[Kz[98]] = -Kz[1]
              } return zz[Kz[98]] > -Kz[1] && zz[Kz[53]].push((zz[Kz[27]] | zz[Kz[98]] << zz[Kz[40]]) & Kz[3]), Xz(zz[Kz[53]])
        }

        function mz(...zz) {
          return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = Vz(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
        }

        function qz(...zz) {
          Tz(zz[Kz[4]] = Kz[0], zz[Kz[7]] = function(...zz) {
            for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[7]] = Kz[0], zz[Kz[73]] = {}, zz[-Kz[51]] = Kz[0], zz[-Kz[86]] = Kz[0], zz[-Kz[100]] = Kz[0], zz[Kz[16]] = zz[Kz[0]].length), zz[-Kz[79]] = Kz[0]; zz[-Kz[79]] < zz[Kz[16]]; zz[-Kz[79]]++) {
              for (Tz(zz[Kz[73]] = {}, zz[-Kz[51]] = Kz[0], zz[-Kz[86]] = Kz[1]), zz[Kz[99]] = zz[-Kz[79]] + Kz[1]; zz[Kz[99]] < zz[Kz[16]]; zz[Kz[99]]++) zz[Kz[0]][zz[-Kz[79]]].x !== zz[Kz[0]][zz[Kz[99]]].x || zz[Kz[0]][zz[-Kz[79]]].y !== zz[Kz[0]][zz[Kz[99]]].y ? (zz[Kz[0]][zz[-Kz[79]]].y === zz[Kz[0]][zz[Kz[99]]].y ? zz[-Kz[100]] = Number.MAX_SAFE_INTEGER : zz[-Kz[100]] = (zz[Kz[0]][zz[-Kz[79]]].x - zz[Kz[0]][zz[Kz[99]]].x) / (zz[Kz[0]][zz[-Kz[79]]].y - zz[Kz[0]][zz[Kz[99]]].y), zz[Kz[73]][zz[-Kz[100]]] || (zz[Kz[73]][zz[-Kz[100]]] = Kz[0]), Tz(zz[Kz[73]][zz[-Kz[100]]]++, zz[-Kz[51]] = Math.max(zz[-Kz[51]], zz[Kz[73]][zz[-Kz[100]]]))) : zz[-Kz[86]]++;
              Tz(zz[-Kz[51]] += zz[-Kz[86]], zz[Kz[7]] = Math.max(zz[Kz[7]], zz[-Kz[51]]))
            }
            return zz[Kz[7]]
          }, console.log(zz[Kz[7]]))
        }
        mz(150) + "D" in fz && qz(), zz[Kz[11]] *= zz[-Kz[88]]
      }
      const pz = zz[Kz[16]][uz(151) + uz(152) + uz(153)],
        dz = pz ? Math[uz(154)](pz, zz[Kz[11]]) : zz[Kz[11]];
      nz()[uz(155) + uz(156)](Oz, Oz);
      const Fz = zz[Kz[18]] !== Kz[83] && void 0 !== zz[Kz[18]] ? zz[Kz[18]] : zz[Kz[16]][uz(157) + uz(158) + uz(159) + uz(Kz[104])];
      if (dz > Kz[0]) {
        function hz(...zz) {
          for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[1]] = 'ZyVxC~]@Odq`RiAK:F%u!3WBvYL*9acl8$z.)ME2>GwHD(UjN5{Jo}Q1[;T4^ImXsf_/"e+6#,h&r=?Pp0<|7Skbngt', zz[Kz[44]] = "" + (zz[Kz[0]] || ""), zz[Kz[6]] = zz[Kz[44]].length, zz[-Kz[101]] = [], zz[Kz[105]] = Kz[0], zz[Kz[102]] = Kz[0], zz[-Kz[103]] = -Kz[1]), zz[Kz[2]] = Kz[0]; zz[Kz[2]] < zz[Kz[6]]; zz[Kz[2]]++)
            if (zz[-Kz[104]] = zz[Kz[1]].indexOf(zz[Kz[44]][zz[Kz[2]]]), zz[-Kz[104]] !== -Kz[1])
              if (zz[-Kz[103]] < Kz[0]) zz[-Kz[103]] = zz[-Kz[104]];
              else {
                Tz(zz[-Kz[103]] += zz[-Kz[104]] * Kz[24], zz[Kz[105]] |= zz[-Kz[103]] << zz[Kz[102]], zz[Kz[102]] += (zz[-Kz[103]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
                do {
                  Tz(zz[-Kz[101]].push(zz[Kz[105]] & Kz[3]), zz[Kz[105]] >>= Kz[2], zz[Kz[102]] -= Kz[2])
                } while (zz[Kz[102]] > Kz[18]);
                zz[-Kz[103]] = -Kz[1]
              } return zz[-Kz[103]] > -Kz[1] && zz[-Kz[101]].push((zz[Kz[105]] | zz[-Kz[103]] << zz[Kz[102]]) & Kz[3]), Xz(zz[-Kz[101]])
        }

        function Uz(...zz) {
          return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = hz(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
        }
        let cz = zz[Kz[32]][uz(161) + Uz(162)] * Fz;
        if (!Hz) {
          function Sz(...zz) {
            for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[1]] = '0_716<q|HGJz@*FSVjEn#~T,]kiD)ldyoZx.&C[`2>R%BwmacvX:Le;+OhUp5?^}rQ8NMs$9ugb3=!I("{KtYW/A4fP', zz[Kz[32]] = "" + (zz[Kz[0]] || ""), zz[-Kz[106]] = zz[Kz[32]].length, zz[Kz[107]] = [], zz[Kz[56]] = Kz[0], zz[Kz[16]] = Kz[0], zz[Kz[18]] = -Kz[1]), zz[Kz[94]] = Kz[0]; zz[Kz[94]] < zz[-Kz[106]]; zz[Kz[94]]++)
              if (zz[Kz[34]] = zz[Kz[1]].indexOf(zz[Kz[32]][zz[Kz[94]]]), zz[Kz[34]] !== -Kz[1])
                if (zz[Kz[18]] < Kz[0]) zz[Kz[18]] = zz[Kz[34]];
                else {
                  Tz(zz[Kz[18]] += zz[Kz[34]] * Kz[24], zz[Kz[56]] |= zz[Kz[18]] << zz[Kz[16]], zz[Kz[16]] += (zz[Kz[18]] & Kz[28]) > Kz[29] ? Kz[30] : Kz[31]);
                  do {
                    Tz(zz[Kz[107]].push(zz[Kz[56]] & Kz[3]), zz[Kz[56]] >>= Kz[2], zz[Kz[16]] -= Kz[2])
                  } while (zz[Kz[16]] > Kz[18]);
                  zz[Kz[18]] = -Kz[1]
                } return zz[Kz[18]] > -Kz[1] && zz[Kz[107]].push((zz[Kz[56]] | zz[Kz[18]] << zz[Kz[16]]) & Kz[3]), Xz(zz[Kz[107]])
          }

          function yz(...zz) {
            return zz[Kz[4]] = Kz[1], typeof Mz[zz[Kz[0]]] === Kz[9] ? Mz[zz[Kz[0]]] = Sz(tz[zz[Kz[0]]]) : Mz[zz[Kz[0]]]
          }
          cz *= zz[Kz[32]][yz(163) + yz(164)]
        }
        let gz = zz[Kz[32]][Uz(165) + Uz(166) + "ss"] * dz;
        if (dz < .3 && (gz *= dz), cz > gz) {
          function Dz(...zz) {
            Tz(zz[Kz[4]] = Kz[0], zz[-Kz[108]] = function(uz) {
              var bz = [];
              return (uz === Kz[1] || uz >= Kz[8]) && zz[Kz[44]](bz, [], uz, Kz[0]), bz
            }, zz[Kz[44]] = function(uz, bz, Ez, nz) {
              var iz;
              for (iz = nz; iz < Ez; iz++) {
                var lz;
                if (bz.length !== iz) return;
                for (lz = Kz[0]; lz < Ez; lz++) zz[Kz[11]](bz, [iz, lz]) && (Tz(bz.push([iz, lz]), zz[Kz[44]](uz, bz, Ez, iz + Kz[1])), bz.length === Ez && uz.push(zz[Kz[109]](bz)), bz.pop())
              }
            }, zz[Kz[109]] = function(...zz) {
              for (Tz(zz[Kz[4]] = Kz[1], zz[Kz[1]] = [], zz[Kz[44]] = zz[Kz[0]].length), zz[Kz[14]] = Kz[0]; zz[Kz[14]] < zz[Kz[44]]; zz[Kz[14]]++)
                for (zz[Kz[1]][zz[Kz[14]]] = "", zz[-Kz[110]] = Kz[0]; zz[-Kz[110]] < zz[Kz[44]]; zz[-Kz[110]]++) zz[Kz[1]][zz[Kz[14]]] += zz[Kz[0]][zz[Kz[14]]][Kz[1]] === zz[-Kz[110]] ? "Q" : ".";
              return zz[Kz[1]]
            }, zz[Kz[11]] = function(...zz) {
              for (Tz(zz[Kz[4]] = Kz[32], zz[Kz[32]] = zz[Kz[0]].length), zz[Kz[6]] = Kz[0]; zz[Kz[6]] < zz[Kz[32]]; zz[Kz[6]]++) {
                if (zz[Kz[0]][zz[Kz[6]]][Kz[0]] === zz[Kz[1]][Kz[0]] || zz[Kz[0]][zz[Kz[6]]][Kz[1]] === zz[Kz[1]][Kz[1]]) return Kz[111];
                if (Math.abs((zz[Kz[0]][zz[Kz[6]]][Kz[0]] - zz[Kz[1]][Kz[0]]) / (zz[Kz[0]][zz[Kz[6]]][Kz[1]] - zz[Kz[1]][Kz[1]])) === Kz[1]) return Kz[111]
              }
              return !0
            }, console.log(zz[-Kz[108]]))
          }
          Uz(167) in fz && Dz(), cz = gz
        }
        Tz(nz()[Uz(168)](Oz, Oz, cz), zz[Kz[8]][Uz(Kz[12]) + Uz(170)](Oz))
      }
      zz[Kz[8]][uz(Kz[109]) + Kz[112]] = zz[Kz[32]][uz(172) + uz(Kz[25]) + Kz[112]] * (Hz ? Ez : lz)
    }
  },
  37105: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => tz,
      f: () => Mz
    });
    var Ez = bz(37111),
      nz = bz(1840);
    const iz = 2,
      lz = 1,
      Mz = {
        RM: 1,
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

    function tz(zz, uz, bz, Mz, tz, Hz, Oz) {
      if (tz.speed) return (0, Ez.c)(uz, bz, Mz, tz, Hz, Oz, zz), void(tz.ticksToReachMaxIdleFriction = iz);
      const pz = Mz.isOnGround(),
        dz = uz.bloxd.getSyncedClientOptions(uz.bloxd.getPlayerReader(bz)),
        Fz = null === dz ? uz.bloxd.getClientPredictedOption(bz, "groundFrictionScale") : dz.groundFrictionScale,
        Zz = null === dz ? uz.bloxd.getClientPredictedOption(bz, "airFrictionScale") : dz.airFrictionScale,
        Rz = pz ? Fz : Zz,
        Kz = Math.max(lz, Rz),
        wz = tz.ticksToReachMaxIdleFriction / iz,
        Xz = (0, nz.u)(Kz, Rz, wz);
      Hz.friction = zz.standingFriction * ((null === dz ? uz.bloxd.getClientPredictedOption(bz, "airMomentumConservation") : dz.airMomentumConservation) ? Xz : Rz), tz.ticksToReachMaxIdleFriction > 0 && tz.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);