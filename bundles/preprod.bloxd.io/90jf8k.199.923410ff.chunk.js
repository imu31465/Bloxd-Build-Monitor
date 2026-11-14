export const id = 199;
export const ids = [199];
export const modules = {
  36909: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => QF
    });
    var CF = SF(161),
      AF = SF(36036);
    const uF = 1.2,
      hF = {
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
        xh: .5,
        MbF: !1
      },
      bW = {
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
        xh: .5,
        MbF: !1
      },
      dF = {
        physicsBodyDimensions: {
          width: CF.h.RV,
          height: CF.h.aN
        },
        hitBoxDimensions: {
          width: CF.h.RV + .4,
          height: CF.h.aN + .6
        },
        eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
        rideHeight: CF.h.aN - .3,
        xh: .5,
        MbF: !1
      },
      PF = {
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
        xh: .5,
        MbF: !1
      },
      RF = {
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
        xh: .5,
        MbF: !1
      },
      iW = {
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
        xh: .5,
        MbF: !1
      },
      eF = {
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
        xh: .5,
        MbF: !1
      },
      EF = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: AF.g.xh,
          MbF: !0
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        Camel: {
          modelScale: uF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Cave Golem": hF,
        "Draugr Zombie": {
          ...dF,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": dF,
        "Frost Golem": hF,
        "Frost Zombie": {
          ...dF,
          defaultPose: "zombie"
        },
        "Frost Skeleton": dF,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          xh: .5,
          MbF: !1
        },
        Wolf: PF,
        Bear: RF,
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
          xh: .5,
          MbF: !1
        },
        Stag: iW,
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
          xh: .5,
          MbF: !1
        },
        Gorilla: eF,
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
          xh: .5,
          MbF: !1
        },
        "Draugr Huntress": dF,
        "Magma Golem": hF,
        "Spirit Golem": hF,
        "Spirit Wolf": PF,
        "Spirit Bear": RF,
        "Spirit Stag": iW,
        "Spirit Gorilla": eF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        Zombie: {
          ...dF,
          defaultPose: "zombie"
        },
        Skeleton: dF,
        Mummy: {
          ...dF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Iron Guardian": bW,
        "Gold Guardian": bW,
        "Diamond Guardian": bW,
        "Moonstone Guardian": bW,
        "Iron Goofy Golem": bW,
        "Gold Goofy Golem": bW,
        "Diamond Goofy Golem": bW,
        "Moonstone Goofy Golem": bW,
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
          xh: .5,
          MbF: !1
        }
      };

    function QF(FF) {
      return EF[FF]
    }
  },
  36872: (FF, WF, SF) => {
    SF.d(WF, {
      D: () => VF,
      G: () => DF,
      J: () => qW,
      M: () => kW,
      N: () => eF,
      R: () => rW,
      U: () => tW,
      Y: () => AF,
      e: () => RF,
      g: () => dF,
      k: () => aW,
      n: () => PF,
      o: () => bW,
      s: () => hF,
      t: () => uF,
      w: () => NF,
      z: () => EF
    });
    var CF = SF(8324);

    function AF(FF) {
      return Math.floor(FF).toLocaleString("en-US")
    }
    const uF = 2e3,
      hF = .005,
      bW = .001,
      dF = 2,
      PF = "Fluid Tank",
      RF = "Coolant Mixer",
      iW = 144;

    function eF(FF) {
      const WF = FF.split("|")[0];
      return (0, CF.h)(WF) ? WF === CF.d ? "cryo" : "water" : null
    }
    const EF = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      QF = 63;

    function rW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const SF = WF ? function(FF, WF, SF) {
        const CF = EF.findIndex((CF => {
          let [AF, uF, hF] = CF;
          return AF === FF && uF === WF && hF === SF
        }));
        return CF < 0 ? 0 : 1 << CF
      }(WF[0], WF[1], WF[2]) : 0;
      return "maker" === FF ? {
        kind: FF,
        faces: SF
      } : "user" === FF ? {
        kind: FF,
        faces: QF & ~SF
      } : {
        kind: FF,
        faces: QF
      }
    }

    function gW(FF) {
      return "pipe" === FF || "tank" === FF || "maker" === FF
    }

    function tW(FF, WF, SF) {
      return 0 !== (FF.faces & 1 << SF) && 0 !== (WF.faces & 1 << (1 ^ SF)) && (gW(FF.kind) || gW(WF.kind))
    }
    const TF = (FF, WF, SF, CF) => ({
        input: FF,
        inputAmount: CF,
        output: WF,
        outputAmount: SF
      }),
      aW = {
        Condenser: {
          kind: "Condenser",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [],
          recipes: [],
          powerPerOp: 60,
          fluidMade: 12,
          couplable: !0,
          couplerSlot: 0
        },
        Centrifuge: {
          kind: "Centrifuge",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [TF("Uranium Grit", "Uranium Pellet", 1, 12), TF("Spent Pellet", "Plutonium Pellet", 1, 4)],
          powerPerOp: 600,
          waterPerOp: 24
        },
        Synthesizer: {
          kind: "Synthesizer",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 120,
          waterPerOp: 12,
          synth: !0
        },
        "Coolant Mixer": {
          kind: "Coolant Mixer",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [],
          recipes: [TF("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: iW,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function kW(FF, WF) {
      return 1e3 * (null !== WF && void 0 !== WF ? WF : 0) / FF.opMs
    }

    function qW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const SF = kW(aW["Coolant Mixer"], iW) * WF;
      return FF <= 0 ? 0 : Math.ceil(FF / SF - 1e-9)
    }
    const VF = "baf2Water",
      NF = "baf2waterclose",
      DF = "baf2wateropen"
  },
  35520: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    const CF = {
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
  36865: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => LF,
      f: () => kW,
      h: () => aW
    });
    var CF = SF(8242),
      AF = SF(8263),
      uF = SF(8324),
      hF = SF(36872),
      bW = SF(8320);
    const dF = (0, hF.R)("pipe"),
      PF = (0, hF.R)("tank"),
      RF = (0, hF.R)("port"),
      iW = "Reactor Port";

    function eF(FF, WF, SF) {
      const CF = new Set([uF.e, uF.d, iW, ...WF, ...SF, ...FF ? [hF.n] : []]);
      return {
        makers: new Set(WF),
        roots: CF
      }
    }
    const EF = {
        water: eF(!0, ["Condenser"], ["Centrifuge", "Synthesizer", hF.e]),
        cryo: eF(!1, [hF.e], [])
      },
      QF = new Set([...EF.water.roots, ...EF.cryo.roots]),
      rW = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      gW = AF.c.map((FF => rW[FF])),
      tW = gW.map((FF => {
        let [WF, SF, CF] = FF;
        return hF.z.findIndex((FF => {
          let [AF, uF, hF] = FF;
          return AF === WF && uF === SF && hF === CF
        }))
      }));

    function TF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const SF = CF.i[FF],
        AF = null === SF || void 0 === SF ? void 0 : SF.meta.rootName,
        eF = EF[WF];
      if (!AF || !eF.roots.has(AF)) return null;
      if ((0, uF.h)(AF)) return (0, hF.N)(SF.name) === WF ? dF : null;
      if (AF === hF.n) return PF;
      if (AF === iW) return SF.name.endsWith("|Water") ? RF : null;
      const [QF, rW] = bW.e[(SF.meta.rot || 1) - 1];
      return (0, hF.R)(eF.makers.has(AF) ? "maker" : "user", [-QF, 0, -rW])
    }

    function aW(FF, WF, SF, AF) {
      let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: bW
      } = EF[uF];
      return gW.some(((PF, RF) => {
        var iW, eF;
        let [EF, QF, rW] = PF;
        const gW = FF(WF + EF, SF + QF, AF + rW),
          aW = TF(gW, uF);
        return null !== aW && bW.has(null !== (iW = null === (eF = CF.i[gW]) || void 0 === eF ? void 0 : eF.meta.rootName) && void 0 !== iW ? iW : "") && !(0, hF.U)(dF, aW, tW[RF])
      }))
    }

    function kW(FF) {
      const WF = CF.i[FF];
      return WF ? (0, hF.N)(WF.name) : null
    }
    let qW = null;

    function VF(FF) {
      if (!qW) {
        qW = new Map;
        for (const FF of ["water", "cryo"])
          for (let WF = 0; WF < 64; WF++)
            for (const SF of [!1, !0]) qW.set((0, uF.j)(FF, WF, SF), {
              iC: FF,
              mask: WF,
              full: SF
            })
      }
      return qW.get(FF)
    }
    const NF = new Map(Array.from({
      length: uF.g + 1
    }, ((FF, WF) => [(0, uF.l)(WF), WF])));

    function DF(FF, WF, SF, AF, uF, hF) {
      return gW.some(((bW, dF) => {
        var PF, RF, iW;
        let [eF, EF, QF] = bW;
        if (0 === (hF >> dF & 1)) return !1;
        const rW = null !== (PF = null === (RF = CF.i[FF(WF + eF, SF + EF, AF + QF)]) || void 0 === RF ? void 0 : RF.name) && void 0 !== PF ? PF : "",
          gW = VF(rW);
        return gW ? gW.iC === uF && gW.full : (null !== (iW = function(FF) {
          var WF;
          return null !== (WF = NF.get(FF)) && void 0 !== WF ? WF : null
        }(rW)) && void 0 !== iW ? iW : 0) > 0
      }))
    }
    class LF {
      constructor() {
        this.reshapeOffsets = gW
      }
      handles(FF) {
        return null !== kW(FF)
      }
      affects(FF) {
        var WF, SF;
        return QF.has(null !== (WF = null === (SF = CF.i[FF]) || void 0 === SF ? void 0 : SF.meta.rootName) && void 0 !== WF ? WF : "")
      }
      placedBy(FF) {
        var WF;
        return (null === (WF = CF.i[FF]) || void 0 === WF ? void 0 : WF.meta.rootName) === uF.d ? uF.e : null
      }
      shape(FF, WF, SF, AF, bW, PF) {
        var RF, iW, eF;
        const EF = null !== (RF = null === (iW = CF.i[bW]) || void 0 === iW ? void 0 : iW.name) && void 0 !== RF ? RF : "",
          QF = PF || EF !== uF.e ? null !== (eF = (0, hF.N)(EF)) && void 0 !== eF ? eF : "water" : function(FF, WF, SF, CF) {
            return gW.some(((AF, uF) => {
              let [bW, PF, RF] = AF;
              const iW = TF(FF(WF + bW, SF + PF, CF + RF), "cryo");
              return null !== iW && "port" !== iW.kind && (0, hF.U)(dF, iW, tW[uF])
            })) ? "cryo" : "water"
          }(FF, WF, SF, AF),
          rW = function(FF, WF, SF, CF) {
            let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              uF = 0;
            return gW.forEach(((bW, PF) => {
              let [RF, iW, eF] = bW;
              const EF = TF(FF(WF + RF, SF + iW, CF + eF), AF);
              EF && (0, hF.U)(dF, EF, tW[PF]) && (uF |= 1 << PF)
            })), uF
          }(FF, WF, SF, AF, QF),
          aW = PF ? function(FF) {
            var WF;
            return !0 === (null === (WF = VF(FF)) || void 0 === WF ? void 0 : WF.full)
          }(EF) : DF(FF, WF, SF, AF, QF, rW);
        return (0, CF.k)((0, uF.j)(QF, rW, aW))
      }
    }
  },
  36039: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(282),
      AF = SF.n(CF),
      uF = SF(1079);
    let hF;
    var bW, dF, PF, RF, iW, eF, EF, QF, rW;
    const gW = [2, 0, 1, "h", "c", "a", 9, 7, "e", 132, 224, 8, 255, "length", "b", "f", "undefined", void 0, 91, 4, 48, 63, 6, "fromCodePoint", 12, "push", 172, 3, 5, 173, 141, 192, 208, 219, 86, 8191, 88, 13, 14, "d", 109, 193, 242, 218, 234, 33, !1, 158, 44, 116, 175, "i", "g", 236, 232, 35, 247, 16, 104, 148, 127, 128, null, 126, 135, 136, 137, 131, 133, 134, 138, 139, 140, 129, 130, 146, 147, 123, 46, 96, 39, 11, 64, 145, ")", "lu", 119, 82, 51, 154, 222, 92, 32, 27, 174, 235, 41, 217, 195, 98, 120, "?", 57, 10, 52, 66, 223, "k", "j", 89, 182, 36, "on"];

    function tW(...FF) {
      return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = function(...FF) {
        for (xW(FF[gW[13]] = gW[2], FF[gW[5]] = 'm=NnXJWEO60)riAh3;He:Rl%Qz`y7f#,!Dox2Z+|tY>/M}1?UsSbw<(F4c9jL.pPk[T@Gvgu~C"IqVBa&_5]{^K$d*8', FF[gW[0]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[gW[0]].length, FF[-gW[10]] = [], FF[gW[8]] = gW[1], FF[-gW[9]] = gW[1], FF[gW[7]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[4]]; FF[gW[3]]++)
          if (FF[gW[6]] = FF[gW[5]].indexOf(FF[gW[0]][FF[gW[3]]]), FF[gW[6]] !== -gW[2])
            if (FF[gW[7]] < gW[1]) FF[gW[7]] = FF[gW[6]];
            else {
              xW(FF[gW[7]] += FF[gW[6]] * gW[18], FF[gW[8]] |= FF[gW[7]] << FF[-gW[9]], FF[-gW[9]] += (FF[gW[7]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
              do {
                xW(FF[-gW[10]].push(FF[gW[8]] & gW[12]), FF[gW[8]] >>= gW[11], FF[-gW[9]] -= gW[11])
              } while (FF[-gW[9]] > gW[7]);
              FF[gW[7]] = -gW[2]
            } return FF[gW[7]] > -gW[2] && FF[-gW[10]].push((FF[gW[8]] | FF[gW[7]] << FF[-gW[9]]) & gW[12]), TF(FF[-gW[10]])
      }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
    }

    function TF(...FF) {
      return FF[gW[13]] = gW[2], typeof RF !== gW[16] && RF ? (new RF).decode(new iW(FF[gW[1]])) : typeof eF !== gW[16] && eF ? eF.from(FF[gW[1]]).toString("utf-8") : rW(FF[gW[1]])
    }

    function aW() {}
    xW(bW = {}, dF = ["cubf*}ow7;u@m", "Ac17yB:1gi", "jt_b<9Hwt9e~X{.f^[c!lBc?&HO:*U!H<n,C?9#QKe", "&AY(3SNk2(W.^XRthbHbZj`#&Li%3?0`f(R7hpcIscpX6{92", "GpXfI+nzz;", "y(bfF{@%6pgH@+A", 'N6cWZ4kQhh3oSz)+AclDnK9t!rHagzvQTUlC~aIf}R8JxAX/4(8fJ"7#n', 'J`Y(sG[Y3T]"+`^xO/;yy?4N', 'mcv,$u=zs(NB0.eo+"[bfwQ2cpgxSi[H[b>Is4^=', "*A*Wi2(#Ri2a`AHo|ue!2t_^Q:gC$Aj2srUWmam", '7Z*W:ubi26s)0.M|A/70oGH"}R$VP9^xum', 'wrFsowk#F:7~CzhycU<7j9!#Xed2Bz",0PKCI+OOX(X~v~ltDWn', "fZKuUIubIANilJ", "B,j<mK[x*A{r#./`H`N!^S(#.A(g?N/zA61q]ujIX", 'jo,6r+gQVp9R^Q"+q[lwsZ)_2kf:mn)', "PZ1E7&DfKitCiZZebUw,x?be0F,yWZ)`)c{,[|yfFk@&bhJ,]7N", "nRpq_pne8jr3.Un;61/fKq6YE", 'uGY!i">rz9tphAr', "(r+X$q3OW", "Sc=I&+Mw)p&zC2K7f6[(lwKpDh`[=~4>", '<u]V[Lv%}O1w?NSyrsk67xBr{c[g(zEQ_ClEcL91krqh*L=2r"mDgSS&X', "BjBClBSt?O", "g}@`na7rW", 'Ucx0?GSHWiQ9=3@#zG`y"vR?be7v#Nz>7o!s.bqw?R`~=', "xGTfU{sE,P7alNq`0GE6>C7QY9%0C~&`&42fIcBr}R", "#(XVE281jA^OLn?``GpX:", "[G=~$]%EBPaHkyP#PG?C%B#HO0*L,Ah", "?/^`mF_fWF2~`_>+v(j<b92N;ruV~nn#;b<7ot]xL4On^2nZs:+,E_eEn", "5Z#wh_qwz:l:+sJeKWaX", "#r&6F9OQorLs9iC`rus~e+01di`~`.I|+pK,bI8QDr@&=", "LpWw:uz<_H", "N6)!Kv;E4;UC_vte:L[b2(uE^(8JSscfU/vFCpx_2kD[Qy]t/ogX", "{})~_+uEY:q!W.mQMWYbi", ';cy0Ivzx"A5!#JWQsUD#L96E.O', "2U#E~_`&p4).:y&yh(BuRw!Hv(C!+Z[;zG20E<eY/4?x[Xr|*>qV8cCco6:b=", '="hD`wfxGiqO^Uz7A/R"U|i?WeaLxAj>[,n', "2WxV;]Q#1T@jFAX;As6WJU;x561A`JEH~pZ,JFFxZ9Q9#.n;b(.E", '>:AEqU7"Tr@7SzC|s[X"Hp/e<(O~#SNQ', "Wul7`wr2fTZEL]zxKbQW,C#w;P9jqjxZms%w4|vc&HX(=L`Yr=", "B:b~jVDe~ig&P5L#Oxn", "L;GJB}:w|km:=", "3uKCMIBW[6~L,`+ZvG)Vl+}E*:c", "|G{V3umQp<:n/N+Z?p_!jbm", "UupsZ^yfqpxQ(.0zoU_W+5%ENecXxgn,=sgXW<)=", 'B;V`J2GQ_(V"[Qcf^,HIP9WQ:66%7yP%GWkC3cjYW', "t:zy/4eY@(i%XyoQ{gLVQB}iJiA;!ycfVolqASE<mR:bWZ4x)G1F8])=", '+p8O6cQk?R*"/?iy=P,qnK_x*9i;|5@;^>707?{K8:A#Ln)', "^UI!8}VE#jZ7Gye:R!,X", 'I>X"a"%Yphfi62M+0fBX}Vm', "X(LF[<&roh[<4yP>e1d6a_bY%i.X6Lr|", "3P7,g<nYVAjVcZ.xDnN", "[C%6$D[icAcCw3PZkpbfB}sEAPJannnZyGd(npHN", "wne~ApPi,P0(#J", "h(EwT{CP;hkTE`$tEs%7QBL1VOW[,S?|~U`V.~?eGcV):un/f%*b`", "+U^Xk|Ok/)3Q3unZ0HF7IvXO2c,E6LKYv;OD5Bsi~9!~63b7{Un", "`G>I]B=P8pi.Un+Zs,3#GoDeThLHr?C,IGt6", "ZZ!#_w4H>jvV{LWZ?,{`.|LHAH8_=", 'Nc1w"puEiRtp@AN2rs+7/(OKfj7,=', "is|CfCci(kg!R3<Y@}<E[||x<k4XXnxzpA3#S9NO?4RU5s*fI:|C7?m", "MZKEHpx_2k6~VU,#0c5bZ.0#)A(C+AStrGeV.a^cjp81&]6", '~U`~iF1t"p^fx`I`_}C!#wKt?RRvqU~,K})0R', 'knl,B"<?c[@<aAZQIG$(3qJix(ssg_<yjok6>IyYO[TH2]r|2c#Fe+_fn', "hP#srq5rAP@RjAFY4jQy%+m", "<nB7Yx>tS($h)NkZ4bbOyB[fI)muQ2zfx`n!91>wE", "xWQD?b@=", "4%IV]pFiPO0%nS$xP,u6e", "C>*()vm", 'zuL"Kw.%r;O(|`f;*m', 'Xfcb]vH1>AFE*QS7po{S(o{od:"x,`co|[IJ(Pvix(")%N', '{z1wn"mOC9|', 'rc$7sGPfY9Pzngu,QL@fKwT"I;<wr|gQXfK7fw%xNc]"=', "`ZN!8c;x*pVhh+h|v}]Ocbm", '|nDWgF2"&r*1{hAy8}N', 'BjrF%?bej)vHR35t)cX09{AQsPRo*QoZ%"M0ZxX9z[4CmnE+E!KEz', '%%3D9<_i"j""%]=Ql!&(w4=$Tr>n2n:otGaqH', "euq,;]m", 'F:"b%?>N', 'PCoy|.4&9:<7psZ,"W?XZG31m6*c|9=QAHuqs4IbF:}', 'wo#7DuKo7[^"mnOz4na7^c<E}4]zCLlY', "]ze!>s>1Y[wvQynZKm", "R(zWS432a4,Etn1y}o.EwPor$k1v*_W", 'b(MEu"H&WkTg"+s|Uoo!jgf<2kLRbgr|0ZlqnU&t=hp)E`nz', 'wU^X(5=e!63W?96,+[6yq"+2aP3aJ2PZ', '?`^"<4b?]L%nGj.%#Lg6DCD_t9HU7yXQ)so!p1j^HrXoKsSo]7m(otEe>:', '+6r"b|"K2kFs@AI`!Gy!o&LGW', "615b7tDcjptCrnBy>%(7~2ZiqpjVVsW", "|(.EWaPf~:pEZ~l7F%=($jC=aL?T=~<Y<}SOX<=$!H", "q;70oGU9fA", "U(V,,B,P8pz~eh6z3h9!`CUNnrq)mh7;u>?sf", ";Pl7>(Bt.<>&khPQz1}F#", "]n=#Q]OObc@CZs!#5m", "NRUW{S)=", "vp#ESI>t:eiZhN8x3=", '#Gn"bI_bM;*24jP#oGgC;clQP<IV)]0', "S}<qdq?=G6Fz(ZCe+%vS=~H236+7sL97?6h6", "g6(wD&*vkH~V5N", 'Q"P7*?+rd94gm', "cjNJ}V7HyAE:Gn*l^jb~SgUH?O?vDivQ2U1q/xd&g9dOC~@Z=sdW$ct13LRam", "]:vEv<iYu9kCZ3j;>/n", "Ubs!y^%x#RHnCX$7gU{fT<0QMAYpzX", "WuuW$}|iSL#oI+kH,%w05DY=", '2ue"]S[b<9"@yN4xLG=', "H`3#L{5r1<j44nly~>5by]U#L409A.Q>9[%(3", 'g>SOc~jIbcM&wXRyhs(7h"~1/j?sY~|+Acn', "^>p,Mb9#O:vRS.[24uEwSgDe#HCg4LeYtc@O", "LtqS7^KQUhhG:3pfW%/~&27Qg9ZCosP#$o8OL9i=", 'U:[WA"4#EFcAT_#>BAH!ox|vM4{2=', "Fu^`*]/i/[LA(i?yoLtIhqKQj:Yp*X,>e=", 'jj^,(~}cgeV2.~gzAhUWk"{98:J?,N1e', "dp?w|(>N", "92>0sDB+", 'o1~NO7Gd1BD6qA33y"lM~~JPGRu>KC$', "Q<~fauWMMK1", "8NeW+yh=", 'pcPlnl"=', "8N=lI6;=", "Tb+,V_:N", "wu/#eDWm", "toCj!N$m", "`AqX", "IzCXZJd", "`o<#", "qo~6Lgm", "HhR03qrN", "E7yiB<AL", "77k8", "0WPm~j6", "X7xS#bHL", "q750A0uL", "?*xSc,sL", "FM@Su", "X7xSA0uL", "?*U8E/@L", "H{$|F<XL", "/?$FF,HL", "jQgF[SXL", "^Q<0SeuL", "i*SzKxWL", "9{yi&/uL", "F=<0~SNf", "`hhFC", "d7U8", "k7xz)", "{M9Fd", "i]>QUstL", "g~1mC", "9{QFJlaL", "FmQ|d<6", "9{QFC,Dd^)", "F~ASG,g)0O", "RwQ|7z)ey", "9{QFC,EL", "?*$Fc0Mf", "i*%FZ/]L", "d=<0~S6", "lf^_]1GV", "mSAv<{mR", "XV=Q/O?w", "K+c3%8vw", "y=Ng#+~w", '"!c&v2AI', "sl,o2a6I", "l)c3DRD`70Wnw", "K@o.yk6I1=BPY", "$bf7*K6QOD_+Y", "P@MgI96Q9T/+w", "6GnBE?dPYA:6w", "Oihg:+6Qo/P{Y", "$}4BqheIrU%y+fbB.G#&[NHzljQt@`PZi@0x>pcuQj__@`AT,D`gPWV0~D`9w", "]wf_=2hA1jme|e&lwf^&5Ns)d1)dF;fJH@0xGWQM&=;Kf;qT:fsa`MJmP_NhY", 'P@0x/!QAG_w~T;UlQQX&Mu^z5_+dv;6FgQX&]eRzE|)dF;YAR@dg~+I)"*,LY', "s.=S", "K;?`", "v+LD", "<M?`", "brMdg}*l", "C*QJ,!m_", 'Vo3J"`OmE)MsTtnS;:N#GG<1AB8QdjnSAR}5A;VF$WQYrv;ojo9{#', 'Vo3J"`OmE)MsTtnS;:N#GG<1AB8QdjnSsl%522|_;"Mw&}TxIX', '<ebI(dG"X:k96Z#xxeot+`(f_a[pq(W+RDwpK', "^9#f", ">lHB4", "VCxD", "Q!{S", "5~%|", "B7@S,e{L", ".m$#)[Qf", "/|`goNExOGLQ6", 'L~+Ce<":c8<I6', "koSwv<SSJQ{s0", '_c"aV#E`rn', "cSyF@R@gWkm=0", ">CaBeZX([2^`9", "M3KWx>X%h@$19", "`CQu(,X%,7w10", "Xd=^]A<`9JbX0", "hEzub1X%aw`L9", "MNP^.zp(*o)e1K3^BdTjHv!sc5%iCg%", "Bo&jh={1nh+X|_qIgi1e*m_SvBOXl53", "<<w#uQ%QT@)e(eJ7MiiuDmYkB2qk~z%", "!Ckldm%Qj2G>KG.7bK_#gQnq`$vz>G8", "bKle0Uesc5oX|_qIgibe*m_Sx[YL`4[", "wdle:puY<2qk+c`}btf;Km<%}]OL9", "fYI8t`DL", "EAj0eeAL", "%mr|", "o{1m", "^MQFoxWL", "gzr|", "EMrFb0@L", "M=1JM/aL", "[^u8/euL", ">Wj5Z/6", "#whxshGn", "hA(;w_:P", '"`(T', "tM6(+K0G", "_xFb*h[", "2sb7V[HP", "Fc(;CG,P", 'hqxB6("n', "xeV00!fN", "k`NT<l.", "uwi`hY_n", "[N&m+", "lQ<0SeuL", "EMrF%S!L"]), xW(PF = function(...FF) {
      xW(FF[gW[13]] = gW[1], FF[gW[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], FF[gW[2]] = gW[17], FF[gW[0]] = []);
      try {
        xW(FF[gW[2]] = Object, FF[gW[0]][gW[25]]("".__proto__.constructor.name))
      } catch (dF) {}
      FF: for (FF[gW[8]] = gW[1]; FF[gW[8]] < FF[gW[14]][gW[13]]; FF[gW[8]]++) try {
        for (FF[gW[2]] = FF[gW[14]][FF[gW[8]]](), FF[gW[15]] = gW[1]; FF[gW[15]] < FF[gW[0]][gW[13]]; FF[gW[15]]++)
          if (typeof FF[gW[2]][FF[gW[0]][FF[gW[15]]]] === gW[16]) continue FF;
        return FF[gW[2]]
      } catch (dF) {}
      return FF[gW[2]] || this
    }() || {}, RF = PF.TextDecoder, iW = PF.Uint8Array, eF = PF.NC, EF = PF.String || String, QF = PF.Array || Array, rW = function(...FF) {
      return xW(FF[gW[13]] = gW[1], FF[gW[5]] = new QF(gW[61]), FF[gW[26]] = EF[gW[23]] || EF.fromCharCode, FF[gW[4]] = []),
        function(...WF) {
          for (xW(WF[gW[13]] = gW[2], WF[gW[5]] = gW[17], WF[gW[18]] = gW[17], WF[gW[20]] = WF[gW[1]][gW[13]], FF[gW[4]][gW[13]] = gW[1]), WF[gW[19]] = gW[1]; WF[gW[19]] < WF[gW[20]];) xW(WF[gW[18]] = WF[gW[1]][WF[gW[19]]++], WF[gW[18]] <= gW[60] ? WF[gW[5]] = WF[gW[18]] : WF[gW[18]] <= gW[106] ? WF[gW[5]] = (31 & WF[gW[18]]) << gW[22] | WF[gW[1]][WF[gW[19]]++] & gW[21] : WF[gW[18]] <= 239 ? WF[gW[5]] = (15 & WF[gW[18]]) << gW[24] | (WF[gW[1]][WF[gW[19]]++] & gW[21]) << gW[22] | WF[gW[1]][WF[gW[19]]++] & gW[21] : EF[gW[23]] ? WF[gW[5]] = (WF[gW[18]] & gW[7]) << 18 | (WF[gW[1]][WF[gW[19]]++] & gW[21]) << gW[24] | (WF[gW[1]][WF[gW[19]]++] & gW[21]) << gW[22] | WF[gW[1]][WF[gW[19]]++] & gW[21] : (WF[gW[5]] = gW[21], WF[gW[19]] += gW[27]), FF[gW[4]][gW[25]](FF[gW[5]][WF[gW[5]]] || (FF[gW[5]][WF[gW[5]]] = FF[gW[26]](WF[gW[5]]))));
          return FF[gW[4]].join("")
        }
    }()), tW(gW[40]) in aW && function(...FF) {
      xW(FF[gW[13]] = gW[1], FF[gW[5]] = function(...WF) {
        return xW(WF[gW[13]] = gW[0], WF[gW[5]] = [], WF[gW[27]] = WF[gW[1]].length, WF[gW[1]].sort(((FF, WF) => FF - WF)), FF[gW[2]](WF[gW[5]], [], gW[1], WF[gW[27]], WF[gW[1]], WF[gW[2]])), WF[gW[5]]
      }, FF[gW[2]] = function(...WF) {
        if (xW(WF[gW[13]] = gW[22], WF[gW[5]] = gW[62]), !(WF[gW[28]] < gW[1])) {
          if (WF[gW[28]] === gW[1]) return WF[gW[1]].push(WF[gW[2]]);
          for (WF[-gW[29]] = WF[gW[0]]; WF[-gW[29]] < WF[gW[27]] && !(WF[gW[19]][WF[-gW[29]]] > WF[gW[28]]); WF[-gW[29]]++) WF[-gW[29]] > WF[gW[0]] && WF[gW[19]][WF[-gW[29]]] === WF[gW[19]][WF[-gW[29]] - gW[2]] || xW(WF[gW[5]] = Array.from(WF[gW[2]]), WF[gW[5]].push(WF[gW[19]][WF[-gW[29]]]), FF[gW[2]](WF[gW[1]], WF[gW[5]], WF[-gW[29]] + gW[2], WF[gW[27]], WF[gW[19]], WF[gW[28]] - WF[gW[19]][WF[-gW[29]]]))
        }
      }, console.log(FF[gW[5]]))
    }();
    const kW = AF()[tW(gW[49])](),
      qW = AF()[tW(gW[49])](),
      VF = AF()[tW(gW[49])](),
      NF = AF()[tW(gW[49])](),
      DF = AF()[tW(gW[49])](),
      LF = AF()[tW(gW[49])](),
      mW = AF()[tW(gW[49])](),
      OF = (...FF) => {
        function WF(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = function(...FF) {
            for (xW(FF[gW[13]] = gW[2], FF[gW[2]] = 'd*m=HG76Xz#+@MTLWSP"u<.0RFx`:_Z,jh$vktEb)Ywo(DU!;lrCVg4p>f%1Q/BnI|yKNaiJ?}A3Oe2~c{sq9&]^8[5', FF[gW[0]] = "" + (FF[gW[1]] || ""), FF[-gW[50]] = FF[gW[0]].length, FF[gW[55]] = [], FF[gW[53]] = gW[1], FF[-gW[54]] = gW[1], FF[gW[52]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[-gW[50]]; FF[gW[3]]++)
              if (FF[gW[51]] = FF[gW[2]].indexOf(FF[gW[0]][FF[gW[3]]]), FF[gW[51]] !== -gW[2])
                if (FF[gW[52]] < gW[1]) FF[gW[52]] = FF[gW[51]];
                else {
                  xW(FF[gW[52]] += FF[gW[51]] * gW[18], FF[gW[53]] |= FF[gW[52]] << FF[-gW[54]], FF[-gW[54]] += (FF[gW[52]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                  do {
                    xW(FF[gW[55]].push(FF[gW[53]] & gW[12]), FF[gW[53]] >>= gW[11], FF[-gW[54]] -= gW[11])
                  } while (FF[-gW[54]] > gW[7]);
                  FF[gW[52]] = -gW[2]
                } return FF[gW[52]] > -gW[2] && FF[gW[55]].push((FF[gW[53]] | FF[gW[52]] << FF[-gW[54]]) & gW[12]), TF(FF[gW[55]])
          }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }
        FF[gW[13]] = gW[27], WF(117) + gW[8] in aW && function(...FF) {
          FF[gW[13]] = gW[1]
        }();
        const SF = LF;
        return AF()[WF(118) + WF(gW[86])](SF, FF[gW[0]]), AF()[WF(gW[100])](FF[gW[1]], SF, AF()[WF(121)](SF, FF[gW[2]]))
      };

    function xW() {
      xW = function() {}
    }
    hF = (...FF) => {
      function WF(...FF) {
        return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = function(...FF) {
          for (xW(FF[gW[13]] = gW[2], FF[gW[10]] = '6fLhYkyV|m8(ARq7aOX)@UGB!C{gu#d5F&W9E^H3*Z_MK?toD;sQ2I]i.=v%~"[w1n4$xlj<PJzN0S,:/e`rTbp+}c>', FF[gW[43]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[gW[43]].length, FF[-gW[59]] = [], FF[gW[58]] = gW[1], FF[gW[15]] = gW[1], FF[gW[57]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[4]]; FF[gW[3]]++)
            if (FF[gW[56]] = FF[gW[10]].indexOf(FF[gW[43]][FF[gW[3]]]), FF[gW[56]] !== -gW[2])
              if (FF[gW[57]] < gW[1]) FF[gW[57]] = FF[gW[56]];
              else {
                xW(FF[gW[57]] += FF[gW[56]] * gW[18], FF[gW[58]] |= FF[gW[57]] << FF[gW[15]], FF[gW[15]] += (FF[gW[57]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                do {
                  xW(FF[-gW[59]].push(FF[gW[58]] & gW[12]), FF[gW[58]] >>= gW[11], FF[gW[15]] -= gW[11])
                } while (FF[gW[15]] > gW[7]);
                FF[gW[57]] = -gW[2]
              } return FF[gW[57]] > -gW[2] && FF[-gW[59]].push((FF[gW[58]] | FF[gW[57]] << FF[gW[15]]) & gW[12]), TF(FF[-gW[59]])
        }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
      }
      FF[gW[13]] = gW[11];
      const SF = FF[gW[1]][tW(122)][tW(gW[77]) + WF(124) + WF(125)](FF[gW[2]]);
      FF[gW[5]] = FF[gW[1]][WF(gW[63])][WF(gW[60]) + WF(gW[61]) + WF(gW[73]) + WF(gW[74])](SF);
      const CF = FF[gW[5]] === gW[62] ? FF[gW[1]][WF(gW[63])][WF(gW[67]) + WF(gW[9]) + WF(gW[68]) + WF(gW[69])](FF[gW[2]], WF(gW[64]) + WF(gW[65]) + WF(gW[66]) + gW[8]) : FF[gW[5]][WF(gW[64]) + WF(gW[65]) + WF(gW[66]) + gW[8]],
        hF = FF[gW[5]] === gW[62] ? FF[gW[1]][WF(gW[63])][WF(gW[67]) + WF(gW[9]) + WF(gW[68]) + WF(gW[69])](FF[gW[2]], WF(gW[70]) + WF(gW[71]) + WF(gW[72])) : FF[gW[5]][WF(gW[70]) + WF(gW[71]) + WF(gW[72])];
      xW(AF()[WF(gW[30])](kW, gW[1], gW[1], FF[gW[28]]), AF().Sh(kW, kW, AF()[WF(142)], FF[gW[27]].heading), AF()[WF(143)](mW, FF[gW[19]].Th), mW[gW[2]] = gW[1]);
      const PF = FF[gW[0]][WF(144) + WF(gW[83])]();
      if (xW(FF[gW[5]] = FF[gW[1]][WF(gW[63])][WF(gW[60]) + WF(gW[61]) + WF(gW[73]) + WF(gW[74])](SF), FF[gW[6]] = FF[gW[5]] === gW[62] ? FF[gW[1]][WF(gW[63])][WF(gW[67]) + WF(gW[9]) + WF(gW[68]) + WF(gW[69])](FF[gW[2]], WF(gW[75]) + WF(gW[76])) : FF[gW[5]][WF(gW[75]) + WF(gW[76])]), !PF && AF()[gW[85]](mW) && (FF[gW[5]] === gW[62] ? FF[gW[1]][WF(gW[63])][WF(gW[67]) + WF(gW[9]) + WF(gW[68]) + WF(gW[69])](FF[gW[2]], WF(gW[59]) + WF(149) + WF(150)) : FF[gW[5]][WF(151) + WF(152) + WF(153) + WF(gW[89])])) {
        function QF(...FF) {
          for (xW(FF[gW[13]] = gW[2], FF[-gW[78]] = 'RVl3CnBUS`Dr!w*;54uzoL:KPJMv>Q|sE$/#W[@~TG&+t(p<X6Yd_x^1I}9=.8Ny?0Zch]2%,)"{F7aHmgAqjkOefbi', FF[gW[14]] = "" + (FF[gW[1]] || ""), FF[gW[27]] = FF[gW[14]].length, FF[gW[19]] = [], FF[gW[28]] = gW[1], FF[gW[79]] = gW[1], FF[-gW[77]] = -gW[2]), FF[gW[11]] = gW[1]; FF[gW[11]] < FF[gW[27]]; FF[gW[11]]++)
            if (FF[gW[6]] = FF[-gW[78]].indexOf(FF[gW[14]][FF[gW[11]]]), FF[gW[6]] !== -gW[2])
              if (FF[-gW[77]] < gW[1]) FF[-gW[77]] = FF[gW[6]];
              else {
                xW(FF[-gW[77]] += FF[gW[6]] * gW[18], FF[gW[28]] |= FF[-gW[77]] << FF[gW[79]], FF[gW[79]] += (FF[-gW[77]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                do {
                  xW(FF[gW[19]].push(FF[gW[28]] & gW[12]), FF[gW[28]] >>= gW[11], FF[gW[79]] -= gW[11])
                } while (FF[gW[79]] > gW[7]);
                FF[-gW[77]] = -gW[2]
              } return FF[-gW[77]] > -gW[2] && FF[gW[19]].push((FF[gW[28]] | FF[-gW[77]] << FF[gW[79]]) & gW[12]), TF(FF[gW[19]])
        }

        function rW(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = QF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }

        function LF(...FF) {
          function WF(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = function(...FF) {
              for (xW(FF[gW[13]] = gW[2], FF[-gW[82]] = 'YwISsXQ1*E]|b;T}Z=AJ[F5G`@&gW$x3Bv!lufe,N~>#cq6mty7z_/:.d{"UOjD0Mn%4kK+a9L)^oR2?hHiC(VPp8r<', FF[gW[14]] = "" + (FF[gW[1]] || ""), FF[-gW[81]] = FF[gW[14]].length, FF[gW[39]] = [], FF[gW[56]] = gW[1], FF[gW[22]] = gW[1], FF[gW[7]] = -gW[2]), FF[gW[80]] = gW[1]; FF[gW[80]] < FF[-gW[81]]; FF[gW[80]]++)
                if (FF[gW[6]] = FF[-gW[82]].indexOf(FF[gW[14]][FF[gW[80]]]), FF[gW[6]] !== -gW[2])
                  if (FF[gW[7]] < gW[1]) FF[gW[7]] = FF[gW[6]];
                  else {
                    xW(FF[gW[7]] += FF[gW[6]] * gW[18], FF[gW[56]] |= FF[gW[7]] << FF[gW[22]], FF[gW[22]] += (FF[gW[7]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                    do {
                      xW(FF[gW[39]].push(FF[gW[56]] & gW[12]), FF[gW[56]] >>= gW[11], FF[gW[22]] -= gW[11])
                    } while (FF[gW[22]] > gW[7]);
                    FF[gW[7]] = -gW[2]
                  } return FF[gW[7]] > -gW[2] && FF[gW[39]].push((FF[gW[56]] | FF[gW[7]] << FF[gW[22]]) & gW[12]), TF(FF[gW[39]])
            }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }
          FF[gW[13]] = gW[1], xW(FF[gW[5]] = rW(156) + WF(157) + WF(gW[47]) + WF(159) + WF(160) + WF(161) + "om", FF[gW[83]] = WF(162) + WF(163) + WF(164) + WF(165) + WF(166) + WF(167) + gW[101], FF[gW[0]] = WF(168) + WF(169) + WF(170) + gW[84], FF[gW[5]].match(FF[gW[83]] + FF[gW[0]]))
        }
        rW(155) in aW && LF(), xW(OF(qW, kW, mW), OF(VF, mW, kW), AF()[rW(171)](NF, mW, VF));
        const ZF = AF()[rW(gW[26])](mW),
          oF = AF()[rW(gW[29])](kW, mW) / FF[gW[28]] / ZF,
          YF = Math[rW(gW[94])](oF, gW[1]) + gW[2];
        if (FF[gW[28]] * FF[gW[28]] < AF()[gW[85]](VF)) {
          function MF(...FF) {
            for (xW(FF[gW[13]] = gW[2], FF[gW[2]] = 'qRnfcHPwKzB$8eWl`da5D&9>!+O)4|b;@[3tu~6Gx}S0MU#2ov_Qp.1gs%C?F^]=Y*<TN(h7":,yI{miJrZLEXAVjk/', FF[gW[63]] = "" + (FF[gW[1]] || ""), FF[-gW[86]] = FF[gW[63]].length, FF[gW[19]] = [], FF[-gW[88]] = gW[1], FF[-gW[45]] = gW[1], FF[gW[52]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[-gW[86]]; FF[gW[3]]++)
              if (FF[gW[87]] = FF[gW[2]].indexOf(FF[gW[63]][FF[gW[3]]]), FF[gW[87]] !== -gW[2])
                if (FF[gW[52]] < gW[1]) FF[gW[52]] = FF[gW[87]];
                else {
                  xW(FF[gW[52]] += FF[gW[87]] * gW[18], FF[-gW[88]] |= FF[gW[52]] << FF[-gW[45]], FF[-gW[45]] += (FF[gW[52]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                  do {
                    xW(FF[gW[19]].push(FF[-gW[88]] & gW[12]), FF[-gW[88]] >>= gW[11], FF[-gW[45]] -= gW[11])
                  } while (FF[-gW[45]] > gW[7]);
                  FF[gW[52]] = -gW[2]
                } return FF[gW[52]] > -gW[2] && FF[gW[19]].push((FF[-gW[88]] | FF[gW[52]] << FF[-gW[45]]) & gW[12]), TF(FF[gW[19]])
          }

          function cW(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = MF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }

          function GF(...FF) {
            FF[gW[13]] = gW[1]
          }
          rW(gW[50]) + "3" in aW && GF(), AF()[cW(181)](kW, kW, VF, YF)
        }
        xW(FF[gW[6]] = (0, uF.x)(FF[gW[6]], 1, Math[rW(gW[94])](gW[2], Math[rW(gW[110])](gW[1], -oF, gW[2] - ZF / FF[gW[28]]))), AF()[rW(183)](kW, kW, NF))
      }
      const RF = DF;
      if (xW(AF()[WF(184)](RF, kW, mW), RF[gW[2]] = gW[1], FF[gW[103]] = AF()[WF(185)](RF)), !PF) {
        function zW(...FF) {
          function SF(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = function(...FF) {
              for (xW(FF[gW[13]] = gW[2], FF[gW[5]] = '90(;_8%[x]?&3G7N}2JnHr{dgCjumMlF^/IcUKp"v|6Ty.XqieWs$wbB<L4oh5@kQ=)PZ>1#,tS:aRVAz!E+~Y`Of*D', FF[-gW[95]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[-gW[95]].length, FF[gW[99]] = [], FF[gW[97]] = gW[1], FF[gW[98]] = gW[1], FF[gW[36]] = -gW[2]), FF[gW[11]] = gW[1]; FF[gW[11]] < FF[gW[4]]; FF[gW[11]]++)
                if (FF[-gW[96]] = FF[gW[5]].indexOf(FF[-gW[95]][FF[gW[11]]]), FF[-gW[96]] !== -gW[2])
                  if (FF[gW[36]] < gW[1]) FF[gW[36]] = FF[-gW[96]];
                  else {
                    xW(FF[gW[36]] += FF[-gW[96]] * gW[18], FF[gW[97]] |= FF[gW[36]] << FF[gW[98]], FF[gW[98]] += (FF[gW[36]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                    do {
                      xW(FF[gW[99]].push(FF[gW[97]] & gW[12]), FF[gW[97]] >>= gW[11], FF[gW[98]] -= gW[11])
                    } while (FF[gW[98]] > gW[7]);
                    FF[gW[36]] = -gW[2]
                  } return FF[gW[36]] > -gW[2] && FF[gW[99]].push((FF[gW[97]] | FF[gW[36]] << FF[gW[98]]) & gW[12]), TF(FF[gW[99]])
            }(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }
          FF[gW[13]] = gW[1], xW(FF[-gW[102]] = WF(187) + WF(188) + SF(189) + SF(190), FF[-gW[100]] = SF(191) + SF(gW[31]) + SF(gW[41]) + SF(194) + SF(gW[98]) + SF(196) + gW[101], FF[gW[4]] = SF(197) + SF(198) + SF(199) + SF(200) + SF(201) + SF(202), FF[-gW[102]].match(FF[-gW[100]] + FF[gW[4]]))
        }
        WF(186) in aW && zW(), FF[gW[103]] *= FF[gW[6]]
      }
      const iW = FF[gW[22]][WF(203) + WF(204) + WF(205)],
        eF = iW ? Math[WF(206)](iW, FF[gW[103]]) : FF[gW[103]];
      AF()[WF(207) + WF(gW[32])](RF, RF);
      const EF = FF[gW[7]] !== gW[62] && void 0 !== FF[gW[7]] ? FF[gW[7]] : FF[gW[22]][WF(209) + WF(210) + WF(211) + WF(212)];
      if (eF > gW[1]) {
        function IF(...FF) {
          for (xW(FF[gW[13]] = gW[2], FF[gW[2]] = '.nPJ%Z/uT`7*|b#sq0@t,I&R{+cv12<m;3V}hdH^:j~A98wLS_DNzF6x$]C)BWr"kKXU>E?loO=4!G[Qipf(MYa5yge', FF[gW[14]] = "" + (FF[gW[1]] || ""), FF[gW[66]] = FF[gW[14]].length, FF[gW[39]] = [], FF[gW[28]] = gW[1], FF[gW[22]] = gW[1], FF[gW[52]] = -gW[2]), FF[gW[104]] = gW[1]; FF[gW[104]] < FF[gW[66]]; FF[gW[104]]++)
            if (FF[gW[6]] = FF[gW[2]].indexOf(FF[gW[14]][FF[gW[104]]]), FF[gW[6]] !== -gW[2])
              if (FF[gW[52]] < gW[1]) FF[gW[52]] = FF[gW[6]];
              else {
                xW(FF[gW[52]] += FF[gW[6]] * gW[18], FF[gW[28]] |= FF[gW[52]] << FF[gW[22]], FF[gW[22]] += (FF[gW[52]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                do {
                  xW(FF[gW[39]].push(FF[gW[28]] & gW[12]), FF[gW[28]] >>= gW[11], FF[gW[22]] -= gW[11])
                } while (FF[gW[22]] > gW[7]);
                FF[gW[52]] = -gW[2]
              } return FF[gW[52]] > -gW[2] && FF[gW[39]].push((FF[gW[28]] | FF[gW[52]] << FF[gW[22]]) & gW[12]), TF(FF[gW[39]])
        }

        function fF(...FF) {
          return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = IF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
        }

        function yW(...FF) {
          FF[gW[13]] = gW[1]
        }
        fF(213) in aW && yW();
        let sF = FF[gW[0]][fF(214) + fF(215)] * EF;
        if (!PF) {
          function HF(...FF) {
            for (xW(FF[gW[13]] = gW[2], FF[gW[5]] = '[LGCBRfiPmbNTjaOpYy]:Ud#V+MXF,~7(o|tgxSw@DzQZqJW13$6r`02{)lvAu_9}8%.!kes/4&^c"KE*h<nH;=I?5>', FF[gW[0]] = "" + (FF[gW[1]] || ""), FF[gW[27]] = FF[gW[0]].length, FF[gW[105]] = [], FF[gW[8]] = gW[1], FF[gW[22]] = gW[1], FF[gW[52]] = -gW[2]), FF[gW[11]] = gW[1]; FF[gW[11]] < FF[gW[27]]; FF[gW[11]]++)
              if (FF[gW[51]] = FF[gW[5]].indexOf(FF[gW[0]][FF[gW[11]]]), FF[gW[51]] !== -gW[2])
                if (FF[gW[52]] < gW[1]) FF[gW[52]] = FF[gW[51]];
                else {
                  xW(FF[gW[52]] += FF[gW[51]] * gW[18], FF[gW[8]] |= FF[gW[52]] << FF[gW[22]], FF[gW[22]] += (FF[gW[52]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                  do {
                    xW(FF[gW[105]].push(FF[gW[8]] & gW[12]), FF[gW[8]] >>= gW[11], FF[gW[22]] -= gW[11])
                  } while (FF[gW[22]] > gW[7]);
                  FF[gW[52]] = -gW[2]
                } return FF[gW[52]] > -gW[2] && FF[gW[105]].push((FF[gW[8]] | FF[gW[52]] << FF[gW[22]]) & gW[12]), TF(FF[gW[105]])
          }

          function KF(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = HF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }
          sF *= FF[gW[0]][KF(216) + KF(gW[97])]
        }
        let nF = FF[gW[0]][fF(gW[43]) + fF(gW[33]) + "ss"] * eF;
        if (eF < .3) {
          function wF(...FF) {
            for (xW(FF[gW[13]] = gW[2], FF[-gW[55]] = '0OnjSP7%?x>+y.WuY{";vKo9=`w$gl#1RDr_3qT:FAQeVM(p~dcEC8mfh@s!Z/N6J*t)X2a&,Hb}|LB^k[G4]5UIz<i', FF[gW[14]] = "" + (FF[gW[1]] || ""), FF[gW[4]] = FF[gW[14]].length, FF[-gW[106]] = [], FF[gW[98]] = gW[1], FF[gW[22]] = gW[1], FF[gW[55]] = -gW[2]), FF[gW[3]] = gW[1]; FF[gW[3]] < FF[gW[4]]; FF[gW[3]]++)
              if (FF[gW[6]] = FF[-gW[55]].indexOf(FF[gW[14]][FF[gW[3]]]), FF[gW[6]] !== -gW[2])
                if (FF[gW[55]] < gW[1]) FF[gW[55]] = FF[gW[6]];
                else {
                  xW(FF[gW[55]] += FF[gW[6]] * gW[18], FF[gW[98]] |= FF[gW[55]] << FF[gW[22]], FF[gW[22]] += (FF[gW[55]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                  do {
                    xW(FF[-gW[106]].push(FF[gW[98]] & gW[12]), FF[gW[98]] >>= gW[11], FF[gW[22]] -= gW[11])
                  } while (FF[gW[22]] > gW[7]);
                  FF[gW[55]] = -gW[2]
                } return FF[gW[55]] > -gW[2] && FF[-gW[106]].push((FF[gW[98]] | FF[gW[55]] << FF[gW[22]]) & gW[12]), TF(FF[-gW[106]])
          }

          function XF(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = wF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }

          function UF(...FF) {
            xW(FF[gW[13]] = gW[1], FF[gW[109]] = function(...FF) {
              if (xW(FF[gW[13]] = gW[2], FF[gW[21]] = FF[gW[1]].length), FF[gW[21]] < gW[0]) return gW[1];
              if (xW(FF[gW[0]] = Math.max(...FF[gW[1]]), FF[-gW[57]] = Math.min(...FF[gW[1]])), FF[gW[0]] === FF[-gW[57]]) return gW[1];
              for (xW(FF[gW[19]] = Array(FF[gW[21]] - gW[2]).fill(Number.MAX_SAFE_INTEGER), FF[gW[28]] = Array(FF[gW[21]] - gW[2]).fill(Number.MIN_SAFE_INTEGER), FF[gW[15]] = Math.ceil((FF[gW[0]] - FF[-gW[57]]) / (FF[gW[21]] - gW[2])), FF[gW[52]] = gW[1]), FF[gW[11]] = gW[1]; FF[gW[11]] < FF[gW[21]]; FF[gW[11]]++) FF[gW[1]][FF[gW[11]]] !== FF[-gW[57]] && FF[gW[1]][FF[gW[11]]] !== FF[gW[0]] && xW(FF[gW[52]] = Math.floor((FF[gW[1]][FF[gW[11]]] - FF[-gW[57]]) / FF[gW[15]]), FF[gW[19]][FF[gW[52]]] = Math.min(FF[gW[19]][FF[gW[52]]], FF[gW[1]][FF[gW[11]]]), FF[gW[28]][FF[gW[52]]] = Math.max(FF[gW[28]][FF[gW[52]]], FF[gW[1]][FF[gW[11]]]));
              for (xW(FF[gW[51]] = Number.MIN_SAFE_INTEGER, FF[gW[108]] = FF[-gW[57]]), FF[gW[107]] = gW[1]; FF[gW[107]] < FF[gW[21]] - gW[2]; FF[gW[107]]++) FF[gW[19]][FF[gW[107]]] === Number.MAX_SAFE_INTEGER && FF[gW[28]][FF[gW[107]]] === Number.MIN_SAFE_INTEGER || xW(FF[gW[51]] = Math.max(FF[gW[51]], FF[gW[19]][FF[gW[107]]] - FF[gW[108]]), FF[gW[108]] = FF[gW[28]][FF[gW[107]]]);
              return FF[gW[51]] = Math.max(FF[gW[51]], FF[gW[0]] - FF[gW[108]]), FF[gW[51]]
            }, console.log(FF[gW[109]]))
          }
          XF(220) in aW && UF(), nF *= eF
        }
        if (sF > nF) {
          function BF(...FF) {
            for (xW(FF[gW[13]] = gW[2], FF[gW[111]] = '&NRAKCeZXsIngTht=B)<9Q~/km[_c|+b#8,l:LdfHE@Dq]%?uMvWoP*0j^;.z1"rJaGyw2Vx5O$7}>3!F(YS{Ui46`p', FF[gW[14]] = "" + (FF[gW[1]] || ""), FF[gW[110]] = FF[gW[14]].length, FF[gW[39]] = [], FF[gW[74]] = gW[1], FF[gW[15]] = gW[1], FF[gW[7]] = -gW[2]), FF[gW[11]] = gW[1]; FF[gW[11]] < FF[gW[110]]; FF[gW[11]]++)
              if (FF[gW[51]] = FF[gW[111]].indexOf(FF[gW[14]][FF[gW[11]]]), FF[gW[51]] !== -gW[2])
                if (FF[gW[7]] < gW[1]) FF[gW[7]] = FF[gW[51]];
                else {
                  xW(FF[gW[7]] += FF[gW[51]] * gW[18], FF[gW[74]] |= FF[gW[7]] << FF[gW[15]], FF[gW[15]] += (FF[gW[7]] & gW[35]) > gW[36] ? gW[37] : gW[38]);
                  do {
                    xW(FF[gW[39]].push(FF[gW[74]] & gW[12]), FF[gW[74]] >>= gW[11], FF[gW[15]] -= gW[11])
                  } while (FF[gW[15]] > gW[7]);
                  FF[gW[7]] = -gW[2]
                } return FF[gW[7]] > -gW[2] && FF[gW[39]].push((FF[gW[74]] | FF[gW[7]] << FF[gW[15]]) & gW[12]), TF(FF[gW[39]])
          }

          function jW(...FF) {
            return FF[gW[13]] = gW[2], typeof bW[FF[gW[1]]] === gW[16] ? bW[FF[gW[1]]] = BF(dF[FF[gW[1]]]) : bW[FF[gW[1]]]
          }

          function vW(...FF) {
            FF[gW[13]] = gW[1]
          }
          jW(221) in aW && vW(), sF = nF
        }
        xW(AF()[fF(gW[90])](RF, RF, sF), FF[gW[19]][fF(gW[106]) + fF(gW[10])](RF))
      }
      FF[gW[19]][WF(225) + gW[112]] = FF[gW[0]][WF(226) + WF(gW[65]) + gW[112]] * (PF ? CF : hF)
    }
  },
  36036: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      g: () => bW
    });
    var CF = SF(36039),
      AF = SF(1079);
    const uF = 2,
      hF = 1,
      bW = {
        xh: 1,
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

    function dF(FF, WF, SF, bW, dF, PF, RF) {
      if (dF.speed) return (0, CF.e)(WF, SF, bW, dF, PF, RF, FF), void(dF.ticksToReachMaxIdleFriction = uF);
      const iW = bW.isOnGround(),
        eF = WF.bloxd.getSyncedClientOptions(WF.bloxd.getPlayerReader(SF)),
        EF = null === eF ? WF.bloxd.getClientPredictedOption(SF, "groundFrictionScale") : eF.groundFrictionScale,
        QF = null === eF ? WF.bloxd.getClientPredictedOption(SF, "airFrictionScale") : eF.airFrictionScale,
        rW = iW ? EF : QF,
        gW = Math.max(hF, rW),
        tW = dF.ticksToReachMaxIdleFriction / uF,
        TF = (0, AF.x)(gW, rW, tW);
      PF.friction = FF.standingFriction * ((null === eF ? WF.bloxd.getClientPredictedOption(SF, "airMomentumConservation") : eF.airMomentumConservation) ? TF : rW), dF.ticksToReachMaxIdleFriction > 0 && dF.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);