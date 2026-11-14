export const id = 199;
export const ids = [199];
export const modules = {
  36537: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => gR
    });
    var wW = MW(173),
      CW = MW(35716);
    const zR = 1.2,
      AW = {
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
        aA: .5,
        jyW: !1
      },
      bR = {
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
        aA: .5,
        jyW: !1
      },
      yR = {
        physicsBodyDimensions: {
          width: wW.c.bI,
          height: wW.c.yI
        },
        hitBoxDimensions: {
          width: wW.c.bI + .4,
          height: wW.c.yI + .6
        },
        eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
        rideHeight: wW.c.yI - .3,
        aA: .5,
        jyW: !1
      },
      NW = {
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
        aA: .5,
        jyW: !1
      },
      eW = {
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
        aA: .5,
        jyW: !1
      },
      BW = {
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
        aA: .5,
        jyW: !1
      },
      tR = {
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
        aA: .5,
        jyW: !1
      },
      TW = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: CW.f.aA,
          jyW: !0
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        Camel: {
          modelScale: zR,
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        "Cave Golem": AW,
        "Draugr Zombie": {
          ...yR,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": yR,
        "Frost Golem": AW,
        "Frost Zombie": {
          ...yR,
          defaultPose: "zombie"
        },
        "Frost Skeleton": yR,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          aA: .5,
          jyW: !1
        },
        Wolf: NW,
        Bear: eW,
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
          aA: .5,
          jyW: !1
        },
        Stag: BW,
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
          aA: .5,
          jyW: !1
        },
        Gorilla: tR,
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
          aA: .5,
          jyW: !1
        },
        "Draugr Huntress": yR,
        "Magma Golem": AW,
        "Spirit Golem": AW,
        "Spirit Wolf": NW,
        "Spirit Bear": eW,
        "Spirit Stag": BW,
        "Spirit Gorilla": tR,
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        Zombie: {
          ...yR,
          defaultPose: "zombie"
        },
        Skeleton: yR,
        Mummy: {
          ...yR,
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        "Iron Guardian": bR,
        "Gold Guardian": bR,
        "Diamond Guardian": bR,
        "Moonstone Guardian": bR,
        "Iron Goofy Golem": bR,
        "Gold Goofy Golem": bR,
        "Diamond Goofy Golem": bR,
        "Moonstone Goofy Golem": bR,
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
          aA: .5,
          jyW: !1
        }
      };

    function gR(WW) {
      return TW[WW]
    }
  },
  36495: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => lW,
      E: () => oW,
      F: () => tR,
      H: () => iR,
      J: () => JW,
      N: () => CW,
      e: () => eW,
      g: () => yR,
      h: () => IW,
      j: () => NW,
      n: () => bR,
      r: () => AW,
      t: () => zR,
      u: () => fW,
      v: () => TW,
      x: () => FW,
      y: () => QW
    });
    var wW = MW(8257);

    function CW(WW) {
      return Math.floor(WW).toLocaleString("en-US")
    }
    const zR = 2e3,
      AW = .005,
      bR = .001,
      yR = 2,
      NW = "Fluid Tank",
      eW = "Coolant Mixer",
      BW = 144;

    function tR(WW) {
      const RW = WW.split("|")[0];
      return (0, wW.o)(RW) ? RW === wW.c ? "cryo" : "water" : null
    }
    const TW = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      gR = 63;

    function iR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const MW = RW ? function(WW, RW, MW) {
        const wW = TW.findIndex((wW => {
          let [CW, zR, AW] = wW;
          return CW === WW && zR === RW && AW === MW
        }));
        return wW < 0 ? 0 : 1 << wW
      }(RW[0], RW[1], RW[2]) : 0;
      return "maker" === WW ? {
        kind: WW,
        faces: MW
      } : "user" === WW ? {
        kind: WW,
        faces: gR & ~MW
      } : {
        kind: WW,
        faces: gR
      }
    }

    function YW(WW) {
      return "pipe" === WW || "tank" === WW || "maker" === WW
    }

    function JW(WW, RW, MW) {
      return 0 !== (WW.faces & 1 << MW) && 0 !== (RW.faces & 1 << (1 ^ MW)) && (YW(WW.kind) || YW(RW.kind))
    }
    const PW = (WW, RW, MW, wW) => ({
        input: WW,
        inputAmount: wW,
        output: RW,
        outputAmount: MW
      }),
      IW = {
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
          recipes: [PW("Uranium Grit", "Uranium Pellet", 1, 12), PW("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [PW("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: BW,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function oW(WW, RW) {
      return 1e3 * (null !== RW && void 0 !== RW ? RW : 0) / WW.opMs
    }

    function lW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const MW = oW(IW["Coolant Mixer"], BW) * RW;
      return WW <= 0 ? 0 : Math.ceil(WW / MW - 1e-9)
    }
    const FW = "baf2Water",
      fW = "baf2waterclose",
      QW = "baf2wateropen"
  },
  35221: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = {
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
  36492: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => rR,
      f: () => oW,
      j: () => IW
    });
    var wW = MW(8180),
      CW = MW(8201),
      zR = MW(8257),
      AW = MW(36495),
      bR = MW(8249);
    const yR = (0, AW.H)("pipe"),
      NW = (0, AW.H)("tank"),
      eW = (0, AW.H)("port"),
      BW = "Reactor Port";

    function tR(WW, RW, MW) {
      const wW = new Set([zR.g, zR.c, BW, ...RW, ...MW, ...WW ? [AW.j] : []]);
      return {
        makers: new Set(RW),
        roots: wW
      }
    }
    const TW = {
        water: tR(!0, ["Condenser"], ["Centrifuge", "Synthesizer", AW.e]),
        cryo: tR(!1, [AW.e], [])
      },
      gR = new Set([...TW.water.roots, ...TW.cryo.roots]),
      iR = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      YW = CW.f.map((WW => iR[WW])),
      JW = YW.map((WW => {
        let [RW, MW, wW] = WW;
        return AW.v.findIndex((WW => {
          let [CW, zR, AW] = WW;
          return CW === RW && zR === MW && AW === wW
        }))
      }));

    function PW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const MW = wW.g[WW],
        CW = null === MW || void 0 === MW ? void 0 : MW.meta.rootName,
        tR = TW[RW];
      if (!CW || !tR.roots.has(CW)) return null;
      if ((0, zR.o)(CW)) return (0, AW.F)(MW.name) === RW ? yR : null;
      if (CW === AW.j) return NW;
      if (CW === BW) return MW.name.endsWith("|Water") ? eW : null;
      const [gR, iR] = bR.c[(MW.meta.rot || 1) - 1];
      return (0, AW.H)(tR.makers.has(CW) ? "maker" : "user", [-gR, 0, -iR])
    }

    function IW(WW, RW, MW, CW) {
      let zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: bR
      } = TW[zR];
      return YW.some(((NW, eW) => {
        var BW, tR;
        let [TW, gR, iR] = NW;
        const YW = WW(RW + TW, MW + gR, CW + iR),
          IW = PW(YW, zR);
        return null !== IW && bR.has(null !== (BW = null === (tR = wW.g[YW]) || void 0 === tR ? void 0 : tR.meta.rootName) && void 0 !== BW ? BW : "") && !(0, AW.J)(yR, IW, JW[eW])
      }))
    }

    function oW(WW) {
      const RW = wW.g[WW];
      return RW ? (0, AW.F)(RW.name) : null
    }
    let lW = null;

    function FW(WW) {
      if (!lW) {
        lW = new Map;
        for (const WW of ["water", "cryo"])
          for (let RW = 0; RW < 64; RW++)
            for (const MW of [!1, !0]) lW.set((0, zR.s)(WW, RW, MW), {
              tw: WW,
              mask: RW,
              full: MW
            })
      }
      return lW.get(WW)
    }
    const fW = new Map(Array.from({
      length: zR.k + 1
    }, ((WW, RW) => [(0, zR.u)(RW), RW])));

    function QW(WW, RW, MW, CW, zR, AW) {
      return YW.some(((bR, yR) => {
        var NW, eW, BW;
        let [tR, TW, gR] = bR;
        if (0 === (AW >> yR & 1)) return !1;
        const iR = null !== (NW = null === (eW = wW.g[WW(RW + tR, MW + TW, CW + gR)]) || void 0 === eW ? void 0 : eW.name) && void 0 !== NW ? NW : "",
          YW = FW(iR);
        return YW ? YW.tw === zR && YW.full : (null !== (BW = function(WW) {
          var RW;
          return null !== (RW = fW.get(WW)) && void 0 !== RW ? RW : null
        }(iR)) && void 0 !== BW ? BW : 0) > 0
      }))
    }
    class rR {
      constructor() {
        this.reshapeOffsets = YW
      }
      handles(WW) {
        return null !== oW(WW)
      }
      affects(WW) {
        var RW, MW;
        return gR.has(null !== (RW = null === (MW = wW.g[WW]) || void 0 === MW ? void 0 : MW.meta.rootName) && void 0 !== RW ? RW : "")
      }
      placedBy(WW) {
        var RW;
        return (null === (RW = wW.g[WW]) || void 0 === RW ? void 0 : RW.meta.rootName) === zR.c ? zR.g : null
      }
      shape(WW, RW, MW, CW, bR, NW) {
        var eW, BW, tR;
        const TW = null !== (eW = null === (BW = wW.g[bR]) || void 0 === BW ? void 0 : BW.name) && void 0 !== eW ? eW : "",
          gR = NW || TW !== zR.g ? null !== (tR = (0, AW.F)(TW)) && void 0 !== tR ? tR : "water" : function(WW, RW, MW, wW) {
            return YW.some(((CW, zR) => {
              let [bR, NW, eW] = CW;
              const BW = PW(WW(RW + bR, MW + NW, wW + eW), "cryo");
              return null !== BW && "port" !== BW.kind && (0, AW.J)(yR, BW, JW[zR])
            })) ? "cryo" : "water"
          }(WW, RW, MW, CW),
          iR = function(WW, RW, MW, wW) {
            let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              zR = 0;
            return YW.forEach(((bR, NW) => {
              let [eW, BW, tR] = bR;
              const TW = PW(WW(RW + eW, MW + BW, wW + tR), CW);
              TW && (0, AW.J)(yR, TW, JW[NW]) && (zR |= 1 << NW)
            })), zR
          }(WW, RW, MW, CW, gR),
          IW = NW ? function(WW) {
            var RW;
            return !0 === (null === (RW = FW(WW)) || void 0 === RW ? void 0 : RW.full)
          }(TW) : QW(WW, RW, MW, CW, gR, iR);
        return (0, wW.i)((0, zR.s)(gR, iR, IW))
      }
    }
  },
  35721: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(290),
      CW = MW.n(wW),
      zR = MW(1050);
    let AW;
    var bR, yR, NW, eW, BW, tR, TW, gR, iR;
    const YW = [2, 0, 1, 8, 3, 29, 160, 7, "e", 218, 201, 255, "length", 172, 229, "d", "a", 105, "undefined", 14, void 0, "b", 63, 6, "fromCodePoint", 12, "push", 210, 33554432, 67108864, 17, 5, 124, 237, 4, 23, "c", 119, 91, 133, 8191, 88, 13, "h", 80, 9, 240, "i", 235, 206, 202, 1023, 199, 186, 65536, 157, 10, 55296, 56320, 110, "g", 216, 127, 128, 31, 15, 18, 245, 66, 180, 34, 68, 69, 192, 226, 71, 224, 175, 238, "f", !1, 227, 145, 159, 155, 221, 146, 158, null, 154, 156, 161, 162, 163, 150, 151, 152, 153, 169, 170, 174, 176, 177, 39, "CA", 167, 58, 200, 181, 130, 149, 239, 118, 165, 44, 173, 139, "on"];

    function JW(...WW) {
      return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = function(...WW) {
        for (jR(WW[YW[12]] = YW[2], WW[-YW[5]] = 'xXoZAUIiTjCpeEcOl=)4~tRV8uB`%F6MdzD3vS<([.r/hf*?$:g5a,2_k&yw7W>b@QKL|9{nPqmH]1Y"#GJs!+0^;N}', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[4]] = WW[YW[0]].length, WW[-YW[10]] = [], WW[YW[8]] = YW[1], WW[YW[9]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[4]]; WW[YW[3]]++)
          if (WW[YW[6]] = WW[-YW[5]].indexOf(WW[YW[0]][WW[YW[3]]]), WW[YW[6]] !== -YW[2])
            if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[6]];
            else {
              jR(WW[YW[7]] += WW[YW[6]] * YW[38], WW[YW[8]] |= WW[YW[7]] << WW[YW[9]], WW[YW[9]] += (WW[YW[7]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
              do {
                jR(WW[-YW[10]].push(WW[YW[8]] & YW[11]), WW[YW[8]] >>= YW[3], WW[YW[9]] -= YW[3])
              } while (WW[YW[9]] > YW[7]);
              WW[YW[7]] = -YW[2]
            } return WW[YW[7]] > -YW[2] && WW[-YW[10]].push((WW[YW[8]] | WW[YW[7]] << WW[YW[9]]) & YW[11]), PW(WW[-YW[10]])
      }(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
    }

    function PW(...WW) {
      return WW[YW[12]] = YW[2], typeof eW !== YW[18] && eW ? (new eW).decode(new BW(WW[YW[1]])) : typeof tR !== YW[18] && tR ? tR.from(WW[YW[1]]).toString("utf-8") : iR(WW[YW[1]])
    }

    function IW() {}
    jR(bR = {}, yR = ["M7VIT7KI^E|1i<&Freu2dnRaYpYp|`J`id#j", "1c!1Va4XV@$K~nbFp&,Ad?~v*tg]NvLSw=Z", "p*+Me]lTW,a%OJw=jb:2EgJe/T4`hn](Jf|1^YS4j=qFX", "I)?%2{i,mcs,W7Sut[=H{g)o", "a5=YM2Bo!4}v2uj4?IS_C9W?MOi21AuD9>X", "q>1%EgC8S@oP>{U48VOje", "]~CP`?6v{yDCu$8D[QHdK>*6e=qqSEBrFn0i}aU4cblJncT<", "RB8Ys91FZ", "jmgTSk.+I", "%Dhmpmry/>VQ7ZPuZOX2^&*eTy%=/o94h&~M8g]Ii~4SfP;%qwbj8Yx", "hmDd*SK#o7&u7`n4srcahJS4/cGLP$^.cbZFA7VX", "F*tCwD%8C>,uX", "ww%m(?w3*k?wX7TB:/5doPyoq~CVY:c~1puH^zj,f,h>@Zm4", "p)Ya]v#D!43", "&|HT&*Ei=)9)PnK6#c{iBsLVLe", 'um!,Y_W9WpJL4n3)eO^A=]~T`~"7b{Zu]co', "s$:2/:U,Kj)HuGSS]>bje9XH2@]1FA", 'f~*Mk"lv6b9b({D)`78:%?r[/cGXCS>8v/jI', "x[BHL>(ig4N4asP)F/Vz`YtFA", "N(<a<+(?o&?afAZ=VQ2Mw(QHt4", "yntabmt?]T", "~eZP[2PIx)&AlOb=M[FCg:l8:b{{PZ", '@Z0%<#9E)7e|qvy%WQ!i_(4?s@A"9EXMXmlz[3X^UEA5X!T', "IV@:3qe8jyZyflk%nM(a+n0>Gj", 'd$V%^9=FwkN{>{76l2nax$c{b,~"SlX)//HdQ"qX', 'XdfmAv6oz)2A$`"BFm5d>(/9/Q{)#ZTSvmP:iDZuN=N{uA.4oKsFdnx', "3VJT_D9FqQV]yE73T&Z", "rnl2_JR*o&I6XlDv}$#qhWu,]ciV=Pp4Ab|mAvu3i", "9Vs,ak}*.~_]QEkDTm;I", "2Zba*#B6]T3w,A&DVF!Ft", 'B~HU"naa,yo5)Gp(NT)`e_|yAj@)+v:[', "9$?]K>+=z)>*}9B%rSZ", 'Ce&5"9Q.p>l|Jo3=JZKd|vd8mc%ybJX/GD:IA$5.*K<>%wf`R7o', "b|oHE$,i:KPT}:WFI3j6VgYa92_M*W6=t|F_l", '*B"A/q;[oOF93o', "y=lzayx", ".Q[qs>0yr=V~A(c", "#k@5%s+V&Qi~=l!.O&+mn7fb8yq,yS6r+qS_T7z4KOS%_{T", '`**i_1"5$eAl*St33mBHS|])yQ;m!we4MI4d!aNX', "?e[IA_Jy0E(aX", "<V@q#vC6ewKuPwf(QM;j&!70KeVE$`>ro&Pq6qN&]p", '"wsTG&6@8yRyY9e<hB;jo7>mWpsUDU5%K5!n)G2#Ke0{!A', 'g&7mo$]0zbmF(c"(X2q2K>:..Qp_)S1(3$Ri', "b=V:/:Ty>w$c5y}F6mYM^s<v.y>%ZB/<VmpdTGOu5ja", '>jb:3Y:X/c"G[wj', ',$[:igS3B=^{rJ<8dVXHlvXHt4Nv=$br@|3CC0[vK&z"tW>F_$o', "dD+gxvP6P~Quq7br.nCd{$33vj0bkZ", "R7d2$!)0kyD8`JH<$&o", "j)rHRne0;y>pZBE~0Io56qZE~joHE7USuj^]R9x", "_woF77~*/T:]WEy._>$5gHR#D2AE%ZQM", "`[r`v2Eij~*=MoNR0wm1<?bHfpT|BJ]4HwTIPGi.F)FMe(BF#>p1r:GEBwh", "=e;:T>**LeKqX", '_2BP&12*se&{,$,[45"j;w8o:)~Mfl;.Jc>Ah3b?e>w1hwC~Hwu2z?*o', 'B[6%2DI)OetEl`g[;>wC"f;ecOUJ~O5`7[uI', ">Zbj%#[)|E>%X", "&Z[jV]@IYO|p#?+`", "l26:Uv|87=BZ>uJ`Lx", "4Fam?H9XFK8_X", ",50n5y.+g7jPWGF3=5F%}+>o", "&ZC5rH70W,o5(B(<PQDF^9YmrcTjO<U8j&bj", "t*Oz=]xv`~SaQ80lZB]Uk{2y6tv", '_D,M[2I)A@"kcW`r&jCHVww.Bw:pAsz8z5Ld^<{al&oy[ZCufS:5*bzi*p*9X', 'tFG2"_|8=)<"x', 'KVpdU$a6b7"vuv*B5I{%w5voxbr9m{;D8|m5E', "#>>:esWHsj$i^<wFNq_:wyg[#7O~Tn8%X2a,M?@)g2Kb*S(u", "[V<a/SPaFce|[Z8F:[VA", "^~u`Q!CTu>dPaln)EnPqu<uFICn{#n;%wjsU>yH5~2;X&A&VA:^%33Z,Ec(_X", "lS|m`<I)p>g#pnF3x&j2!9>e;~5bmu|<5[o", "Dm,_f1lv#)}{v$9M47o", "gZQI9P.?&>i6gSn4|x", "Um4P{gwbXO6>v?ZSh>0qes6)E>zMyWHu/>DFm$;*5jFC8`)DyBoPR&`,A", "0wsUTmU4[=", 'M2;:9"K)qye|cgpB"S_A', "},V20]0D]QhCIS3)RQZ", 'np7F7(&EkQw:9${)"qCduYpbbOHd]s]BIm[IZm|)ycf', ",VOjpgo@bO$cA`R[:&?atn>e*T(ZrW}rn2RiJ]`Fs&Jk2SE", "(B}5^]h64jIWr:wFjVJ5S|0[Q2xY<udFzSY]sn2mQjEQjlr<Wn9i2J9i|E~8X", "}qX6f:r6Ec[avZyFM&eM=GRvC~]OvZhBg5O]7,=FUE|{q7V3sI9CADpEQj", "cdP2A7re|&9d0994aj?%m]G5a4ZSyGN%<Qu6dYx", '7[RMU,co"k7tt7qMlX', "C)izb*e)9@?iFA}v/euHHmiX", "B|2aN+K0x)|1cB{M(2b:*J?3t2T`wyzM<QzIW1(bYk)J6UNl!%Z", "CmV%TgW?CQ%9FU@S;=[Iznaa>,/3E$?`ud,_q_@IU", "KD9n3wiG3j8_(oj4&ZcifWX4$)%>2uh<nfk5MY0m@7f]8P%v{2)dp<tX", 'mp*iLGY[}QpyxZpBEO0%`q[#JeU"?<a%su/d[k6#Z47k]Z>=mQ@I', "AbuHG]x", "{ZEi%w)oa&)6V<0D;=9BlG4?:e{7(oGDHf(6+gWFpcpZnB2[l[vCX0ha!Er", ",j/P]vXH>kxI?oR[tQ=`>(08ljHk9$QMAj}5I_Irw~", "zDuHJf=GhTcJl?&./&?%`&68],I|lOp", "vBUi195F)jfi~sjMLqFMB[b9Py[qflY[r~]F1$,b#7EPXS#B&QX5z[x", "}Zf_B+HE&QbalwBF||4P0Y[8SE6]ry,`zD>]D##DI@oyX", "?>YAdw33Hp;mTOz86*hiZ,r#lKeE;sSM0{#5*Jryd)v`ru`r#wiYnGdodt", "8[em^]~T2y;{kOmBn>9B:!>8(@v]?wov5MYiZP:3I", "eB;q^nb&Q7aq)Gd8;%Vj}q#y928", "ncRM|>BvBQSK.A!`", "/Dca8&GEz7AWoua%!u^]/kiid&yd@ZdV<I]gU9loH>@#/{E", "nSz58sT)Z&D", "_>i6%#:i6KLq<<NVe*+MZ$@Ii", "B7QdL*9HA", "`[R_8<+F6)n%sBiuMX", "pd@:.W~T7Qs1hPj", 'Dj(A3wqHEw@chn=[Gq3Pu&![7kKd"{>r4),i9$AT@juP)cyrswT2X7x', '~jgT"f9E*p(', ')&6qi"z4eQv]/wHu^QdHKD+VHwq{SWn4pSlzCv6#3&3C_{4.2VDPhb2o', "[=<axvy*J&)H|8IMVd/FL$sX", ')5,iF[(i/kftiJUSRnMqfJLEZjhcM<E({S":/{00Fw<DfA&V221m/kx', "l7djJa=ElO8Qwyw.?23CaHbV!2=$qA", "YfLgPDO,QOC$v`3S", 'U)n%P"I):j{{+$Uul&dI<Sm66tlI~ZI/GD;jD[00I', "E[!,S[4?G)V]SuuDzF#:R<X3o7NLfA%rA|o", "#w?]/S{|8ya9|Aj<R&7C]9do", '|V"a#>TTq=LK(c_[j/1i7Dl{~2/=]ZWvS&o', ";=$:?{tG#)*]ll^[an>MM?Ni+Emm>yAMAAC`;s{6=))9X", "8[Am>*EXs73PryY[,&ei.kg@I@i`gE6=", ":$!,CgQ&seTEcGHB^IaF!Y#aL&FCqA", "u*9mq>x", "l&L15J**hp.>H{druX", "p&nA?(vy]pQd<W)~K5zP:{m*|jw", 'V~d:}wlaYO5>yG=`8d|B0&>87wgMW$T)zI*aAD"X', "K>[2un`,=j|%pB`.`SljQ*mmQjQ*cU", "]S8z<J=.wwQd$ZKV", 'Q2[`"s8*Qe', "&|DdNajHI", "72)`xmBo", "K5<M1G~o", "%cT9O~Bp", "V8|mM+^(", "4F,3.nH(", ':&m!8?"', "P!Lb13a(", "!zd~q%[(", "ho,i*+6(", "hohm!", "Ak]{pK@5DH#4bIJgYk8*IQ1", "DN]2G[:r/5X!4MYRaftmh:bqdL;@Qg<", 'hO"fY(PC_i]~n>.ZDO9T>;2', 'hO"fY(PCHvcV*DR#?y|KSP&X_i]~n>d', 'z:|eN9wgV5]>M2"br{!L/wBYQo(3`;U', "PWyBtz+k;_`eB<7d$NyOB!?kzP_", "~bfnQ@*", "hDlP>t)=", "1m#J", "#8|f+znp", 'JP"K', "HW|K9U2", "J8@a", "P6`+&oV", "UzCm)Pdf", "ezju(4df", "zzkm", "UzW]Q!Of", "vzBPdPFf", "YMW]>p<f", "2Eg]F", "UzW]dPFf", "YMCme{gf", "O~;N24Uf", "{Y;22pOf", "o%y23]Uf", "7%4P]_Ff", "uM]tSW6f", "D~ju?{Ff", "2K4P&],Z", "hLL2w", "qzCm", "kzWti", "~ED2q", "u8n%C<:f", "y&J+w", "D~%2R#)f", "2+%Nq4V", "UzW]dPMq7i", "~:<2uo$i*g", "?d>j__Jx7i", "D~%2wpef", "YM;2>PEZ", "uMa2T{8f", "qK4P&]V", "=v|u", "dDqh", "ikYa", "s+qh", "fbuOKQ0L", "),rA8", "GA?a", "U&.u", "B&aN", "(zg]p_~f", "B+C7&Jx;", "ZH5m:h|f", "edoP__df", "a+}N", "c~J+", "7E%2cW6f", "yt}N", "eE}2!Pgf", "EKJRE{)f", "37Fm{_Ff", "n6oBT{V", "Y~aNx=.[", "9Ias", "Q{pNm#2[", "NPZ?_0H", "_Zlcb#4[", '"{aN<!;[', "1^|THlk?", "?IpsoUD", "PxOIY3=e", "#p:$m", "#%4P]_Ff", "eE}2a]lf"]), jR(NW = function(...WW) {
      jR(WW[YW[12]] = YW[1], WW[YW[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], WW[YW[13]] = YW[20], WW[YW[14]] = []);
      try {
        jR(WW[YW[13]] = Object, WW[YW[14]][YW[26]]("".__proto__.constructor.name))
      } catch (yR) {}
      WW: for (WW[YW[15]] = YW[1]; WW[YW[15]] < WW[YW[16]][YW[12]]; WW[YW[15]]++) try {
        for (WW[YW[13]] = WW[YW[16]][WW[YW[15]]](), WW[YW[17]] = YW[1]; WW[YW[17]] < WW[YW[14]][YW[12]]; WW[YW[17]]++)
          if (typeof WW[YW[13]][WW[YW[14]][WW[YW[17]]]] === YW[18]) continue WW;
        return WW[YW[13]]
      } catch (yR) {}
      return WW[YW[13]] || this
    }() || {}, eW = NW.TextDecoder, BW = NW.Uint8Array, tR = NW.fw, TW = NW.String || String, gR = NW.Array || Array, iR = function(...WW) {
      return jR(WW[YW[12]] = YW[1], WW[YW[19]] = new gR(YW[63]), WW[YW[27]] = TW[YW[24]] || TW.fromCharCode, WW[YW[0]] = []),
        function(...RW) {
          for (jR(RW[YW[12]] = YW[2], RW[YW[2]] = YW[20], RW[YW[21]] = YW[20], RW[YW[4]] = RW[YW[1]][YW[12]], WW[YW[0]][YW[12]] = YW[1]), RW[YW[15]] = YW[1]; RW[YW[15]] < RW[YW[4]];) jR(RW[YW[21]] = RW[YW[1]][RW[YW[15]]++], RW[YW[21]] <= YW[62] ? RW[YW[2]] = RW[YW[21]] : RW[YW[21]] <= 223 ? RW[YW[2]] = (RW[YW[21]] & YW[64]) << YW[23] | RW[YW[1]][RW[YW[15]]++] & YW[22] : RW[YW[21]] <= YW[111] ? RW[YW[2]] = (RW[YW[21]] & YW[65]) << YW[25] | (RW[YW[1]][RW[YW[15]]++] & YW[22]) << YW[23] | RW[YW[1]][RW[YW[15]]++] & YW[22] : TW[YW[24]] ? RW[YW[2]] = (RW[YW[21]] & YW[7]) << YW[66] | (RW[YW[1]][RW[YW[15]]++] & YW[22]) << YW[25] | (RW[YW[1]][RW[YW[15]]++] & YW[22]) << YW[23] | RW[YW[1]][RW[YW[15]]++] & YW[22] : (RW[YW[2]] = YW[22], RW[YW[15]] += YW[4]), WW[YW[0]][YW[26]](WW[YW[19]][RW[YW[2]]] || (WW[YW[19]][RW[YW[2]]] = WW[YW[27]](RW[YW[2]]))));
          return WW[YW[0]].join("")
        }
    }()), JW(123) + "1" in IW && function(...WW) {
      function RW(...WW) {
        return WW[YW[12]] = YW[2], WW[YW[1]][YW[2]] * YW[29] + (WW[YW[1]][YW[1]] < YW[1] ? YW[28] | WW[YW[1]][YW[1]] : WW[YW[1]][YW[1]])
      }

      function MW(...WW) {
        switch (WW[YW[12]] = YW[2], ((WW[YW[1]] & YW[28]) !== YW[1]) * YW[2] + (WW[YW[1]] < YW[1]) * YW[0]) {
          case YW[1]:
            return [WW[YW[1]] % YW[28], Math.trunc(WW[YW[1]] / YW[29])];
          case YW[2]:
            return [WW[YW[1]] % YW[28] - YW[28], Math.trunc(WW[YW[1]] / YW[29]) + YW[2]];
          case YW[0]:
            return [((WW[YW[1]] + YW[28]) % YW[28] + YW[28]) % YW[28], Math.round(WW[YW[1]] / YW[29])];
          case YW[4]:
            return [WW[YW[1]] % YW[28], Math.trunc(WW[YW[1]] / YW[29])]
        }
      }
      WW[YW[12]] = YW[1], jR(WW[YW[16]] = RW([YW[0], YW[34]]), WW[-YW[14]] = RW([YW[2], YW[0]]), WW[YW[30]] = WW[YW[16]] + WW[-YW[14]], WW[YW[4]] = WW[YW[30]] - WW[-YW[14]], WW[YW[8]] = WW[YW[4]] * YW[0], WW[YW[31]] = WW[YW[8]] / YW[0], console.log(MW(WW[YW[30]])), console.log(MW(WW[YW[4]])), console.log(MW(WW[YW[8]])), console.log(MW(WW[YW[31]])))
    }();
    const oW = CW()[JW(YW[32])](),
      lW = CW()[JW(YW[32])](),
      FW = CW()[JW(YW[32])](),
      fW = CW()[JW(YW[32])](),
      QW = CW()[JW(YW[32])](),
      rR = CW()[JW(YW[32])](),
      cR = CW()[JW(YW[32])](),
      XW = (...WW) => {
        function RW(...WW) {
          return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = function(...WW) {
            for (jR(WW[YW[12]] = YW[2], WW[YW[2]] = '2GpteisRKWaZdLuSmh!&Y@b7CI?J3l9Tfjn.6#^gO1B8)[A+}Dv|Ew{05oxcy>/_H]VQz,FUk%P4(:*M~XN";$<r=q`', WW[YW[33]] = "" + (WW[YW[1]] || ""), WW[YW[36]] = WW[YW[33]].length, WW[YW[34]] = [], WW[-YW[39]] = YW[1], WW[YW[23]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[35]] = YW[1]; WW[YW[35]] < WW[YW[36]]; WW[YW[35]]++)
              if (WW[YW[37]] = WW[YW[2]].indexOf(WW[YW[33]][WW[YW[35]]]), WW[YW[37]] !== -YW[2])
                if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[37]];
                else {
                  jR(WW[YW[7]] += WW[YW[37]] * YW[38], WW[-YW[39]] |= WW[YW[7]] << WW[YW[23]], WW[YW[23]] += (WW[YW[7]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                  do {
                    jR(WW[YW[34]].push(WW[-YW[39]] & YW[11]), WW[-YW[39]] >>= YW[3], WW[YW[23]] -= YW[3])
                  } while (WW[YW[23]] > YW[7]);
                  WW[YW[7]] = -YW[2]
                } return WW[YW[7]] > -YW[2] && WW[YW[34]].push((WW[-YW[39]] | WW[YW[7]] << WW[YW[23]]) & YW[11]), PW(WW[YW[34]])
          }(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }
        WW[YW[12]] = YW[4], RW(125) in IW && function(...WW) {
          function MW(...WW) {
            for (jR(WW[YW[12]] = YW[2], WW[-YW[44]] = '(>=!`^+$JK&Y|UTmNSCj3Ocez1;R)HlP"vr~<anBDx4:5MEpGL/uZw92FAkWQh@Xgq.VI7%btd*#}yfs?[]i8o60,{_', WW[YW[21]] = "" + (WW[YW[1]] || ""), WW[YW[4]] = WW[YW[21]].length, WW[YW[15]] = [], WW[YW[31]] = YW[1], WW[-YW[6]] = YW[1], WW[-YW[46]] = -YW[2]), WW[YW[43]] = YW[1]; WW[YW[43]] < WW[YW[4]]; WW[YW[43]]++)
              if (WW[YW[45]] = WW[-YW[44]].indexOf(WW[YW[21]][WW[YW[43]]]), WW[YW[45]] !== -YW[2])
                if (WW[-YW[46]] < YW[1]) WW[-YW[46]] = WW[YW[45]];
                else {
                  jR(WW[-YW[46]] += WW[YW[45]] * YW[38], WW[YW[31]] |= WW[-YW[46]] << WW[-YW[6]], WW[-YW[6]] += (WW[-YW[46]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                  do {
                    jR(WW[YW[15]].push(WW[YW[31]] & YW[11]), WW[YW[31]] >>= YW[3], WW[-YW[6]] -= YW[3])
                  } while (WW[-YW[6]] > YW[7]);
                  WW[-YW[46]] = -YW[2]
                } return WW[-YW[46]] > -YW[2] && WW[YW[15]].push((WW[YW[31]] | WW[-YW[46]] << WW[-YW[6]]) & YW[11]), PW(WW[YW[15]])
          }

          function wW(...WW) {
            return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = MW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }
          WW[YW[12]] = YW[1],
            function(...WW) {
              function MW(...WW) {
                for (jR(WW[YW[12]] = YW[2], WW[YW[16]] = '*`4&)3;$JAuX]vHw}B8s(qfS9[x5+a:oG@#K1N{bCI6Oil%Ztn_!hYy"DL|p<zRg=ek>.UEcF,2^TV?jQW0mM/~d7rP', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[36]] = WW[YW[0]].length, WW[YW[50]] = [], WW[YW[14]] = YW[1], WW[YW[49]] = YW[1], WW[YW[48]] = -YW[2]), WW[YW[43]] = YW[1]; WW[YW[43]] < WW[YW[36]]; WW[YW[43]]++)
                  if (WW[YW[47]] = WW[YW[16]].indexOf(WW[YW[0]][WW[YW[43]]]), WW[YW[47]] !== -YW[2])
                    if (WW[YW[48]] < YW[1]) WW[YW[48]] = WW[YW[47]];
                    else {
                      jR(WW[YW[48]] += WW[YW[47]] * YW[38], WW[YW[14]] |= WW[YW[48]] << WW[YW[49]], WW[YW[49]] += (WW[YW[48]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                      do {
                        jR(WW[YW[50]].push(WW[YW[14]] & YW[11]), WW[YW[14]] >>= YW[3], WW[YW[49]] -= YW[3])
                      } while (WW[YW[49]] > YW[7]);
                      WW[YW[48]] = -YW[2]
                    } return WW[YW[48]] > -YW[2] && WW[YW[50]].push((WW[YW[14]] | WW[YW[48]] << WW[YW[49]]) & YW[11]), PW(WW[YW[50]])
              }

              function wW(...WW) {
                return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = MW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
              }

              function CW(WW) {
                var RW, MW, wW, CW, zR = [];
                for (jR(RW = YW[1], MW = WW.length, wW = void 0, CW = void 0); RW < MW;) jR(wW = WW.charCodeAt(RW++), wW >= YW[57] && wW <= 56319 && RW < MW ? (64512 & (CW = WW.charCodeAt(RW++))) == YW[58] ? zR.push(((wW & YW[51]) << YW[56]) + (CW & YW[51]) + YW[54]) : (zR.push(wW), RW--) : zR.push(wW));
                return zR
              }

              function zR(...RW) {
                for (jR(RW[YW[12]] = YW[2], RW[-YW[53]] = RW[YW[1]].length, RW[YW[52]] = -YW[2], RW[YW[36]] = YW[20], RW[YW[15]] = ""); ++RW[YW[52]] < RW[-YW[53]];) RW[YW[36]] = RW[YW[1]][RW[YW[52]]], RW[YW[36]] > 65535 && jR(RW[YW[36]] -= YW[54], RW[YW[15]] += WW[-YW[55]](RW[YW[36]] >>> YW[56] & YW[51] | YW[57]), RW[YW[36]] = YW[58] | RW[YW[36]] & YW[51]), RW[YW[15]] += WW[-YW[55]](RW[YW[36]]);
                return RW[YW[15]]
              }

              function AW(...WW) {
                if (WW[YW[12]] = YW[2], WW[YW[1]] >= YW[57] && WW[YW[1]] <= 57343) {
                  function RW(...WW) {
                    for (jR(WW[YW[12]] = YW[2], WW[YW[2]] = '"z(VB_}7~wb2HLR&[]=|QG+lI!Ck)f?:mZoJt>xea1N85sSg^dAF,i6$KD0p{PvEYc<.urTMnj*hy3#;%XW@4U`9qO/', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[59]] = WW[YW[0]].length, WW[YW[15]] = [], WW[YW[61]] = YW[1], WW[YW[23]] = YW[1], WW[YW[60]] = -YW[2]), WW[YW[43]] = YW[1]; WW[YW[43]] < WW[YW[59]]; WW[YW[43]]++)
                      if (WW[YW[47]] = WW[YW[2]].indexOf(WW[YW[0]][WW[YW[43]]]), WW[YW[47]] !== -YW[2])
                        if (WW[YW[60]] < YW[1]) WW[YW[60]] = WW[YW[47]];
                        else {
                          jR(WW[YW[60]] += WW[YW[47]] * YW[38], WW[YW[61]] |= WW[YW[60]] << WW[YW[23]], WW[YW[23]] += (WW[YW[60]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                          do {
                            jR(WW[YW[15]].push(WW[YW[61]] & YW[11]), WW[YW[61]] >>= YW[3], WW[YW[23]] -= YW[3])
                          } while (WW[YW[23]] > YW[7]);
                          WW[YW[60]] = -YW[2]
                        } return WW[YW[60]] > -YW[2] && WW[YW[15]].push((WW[YW[61]] | WW[YW[60]] << WW[YW[23]]) & YW[11]), PW(WW[YW[15]])
                  }

                  function MW(...WW) {
                    return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = RW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
                  }
                  throw Error(MW(126) + MW(YW[62]) + MW(YW[63]) + WW[YW[1]].toString(16).toUpperCase() + (MW(129) + MW(YW[109]) + MW(131) + MW(132)))
                }
              }

              function NW(...RW) {
                return RW[YW[12]] = YW[0], WW[-YW[55]](RW[YW[1]] >> RW[YW[2]] & YW[22] | YW[63])
              }

              function eW(...RW) {
                return RW[YW[12]] = YW[2], (4294967168 & RW[YW[1]]) == YW[1] ? WW[-YW[55]](RW[YW[1]]) : (RW[YW[2]] = "", (4294965248 & RW[YW[1]]) == YW[1] ? RW[YW[2]] = WW[-YW[55]](RW[YW[1]] >> YW[23] & YW[64] | YW[73]) : (4294901760 & RW[YW[1]]) == YW[1] ? jR(AW(RW[YW[1]]), RW[YW[2]] = WW[-YW[55]](RW[YW[1]] >> YW[25] & YW[65] | YW[76]), RW[YW[2]] += NW(RW[YW[1]], YW[23])) : (4292870144 & RW[YW[1]]) == YW[1] && jR(RW[YW[2]] = WW[-YW[55]](RW[YW[1]] >> YW[66] & YW[7] | YW[46]), RW[YW[2]] += NW(RW[YW[1]], YW[25]), RW[YW[2]] += NW(RW[YW[1]], YW[23])), RW[YW[2]] += WW[-YW[55]](RW[YW[1]] & YW[22] | YW[63]), RW[YW[2]])
              }

              function BW(...WW) {
                for (jR(WW[YW[12]] = YW[2], WW[-YW[67]] = CW(WW[YW[1]]), WW[YW[0]] = WW[-YW[67]].length, WW[YW[36]] = -YW[2], WW[YW[15]] = YW[20], WW[YW[31]] = ""); ++WW[YW[36]] < WW[YW[0]];) jR(WW[YW[15]] = WW[-YW[67]][WW[YW[36]]], WW[YW[31]] += eW(WW[YW[15]]));
                return WW[YW[31]]
              }

              function tR(...RW) {
                function MW(...WW) {
                  for (jR(WW[YW[12]] = YW[2], WW[-YW[69]] = ',y0&1LJYm3*V<oihTDAbGKWerPa_?~"62`Q>|R^}N.CsUv+nwM5tIEz{8$%Xfgud/;!ZHF(=xc:S[74l@qj]#)pkBO9', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[36]] = WW[YW[0]].length, WW[YW[34]] = [], WW[YW[8]] = YW[1], WW[YW[23]] = YW[1], WW[YW[60]] = -YW[2]), WW[YW[68]] = YW[1]; WW[YW[68]] < WW[YW[36]]; WW[YW[68]]++)
                    if (WW[-YW[70]] = WW[-YW[69]].indexOf(WW[YW[0]][WW[YW[68]]]), WW[-YW[70]] !== -YW[2])
                      if (WW[YW[60]] < YW[1]) WW[YW[60]] = WW[-YW[70]];
                      else {
                        jR(WW[YW[60]] += WW[-YW[70]] * YW[38], WW[YW[8]] |= WW[YW[60]] << WW[YW[23]], WW[YW[23]] += (WW[YW[60]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                        do {
                          jR(WW[YW[34]].push(WW[YW[8]] & YW[11]), WW[YW[8]] >>= YW[3], WW[YW[23]] -= YW[3])
                        } while (WW[YW[23]] > YW[7]);
                        WW[YW[60]] = -YW[2]
                      } return WW[YW[60]] > -YW[2] && WW[YW[34]].push((WW[YW[8]] | WW[YW[60]] << WW[YW[23]]) & YW[11]), PW(WW[YW[34]])
                }

                function wW(...WW) {
                  return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = MW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
                }
                if (RW[YW[12]] = YW[1], WW[-YW[72]] >= WW[YW[36]]) {
                  function CW(...WW) {
                    for (jR(WW[YW[12]] = YW[2], WW[YW[71]] = '1cNLnHfRVEjghPlTZAoep67<50m?X"8*{xbJ>MiFk;:CrOw)yYU%=S&Gtvz$sI~Dd#3/|(+._`@qK!2a4[,]QW9B^u}', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[4]] = WW[YW[0]].length, WW[YW[15]] = [], WW[YW[8]] = YW[1], WW[YW[23]] = YW[1], WW[YW[60]] = -YW[2]), WW[-YW[13]] = YW[1]; WW[-YW[13]] < WW[YW[4]]; WW[-YW[13]]++)
                      if (WW[YW[47]] = WW[YW[71]].indexOf(WW[YW[0]][WW[-YW[13]]]), WW[YW[47]] !== -YW[2])
                        if (WW[YW[60]] < YW[1]) WW[YW[60]] = WW[YW[47]];
                        else {
                          jR(WW[YW[60]] += WW[YW[47]] * YW[38], WW[YW[8]] |= WW[YW[60]] << WW[YW[23]], WW[YW[23]] += (WW[YW[60]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                          do {
                            jR(WW[YW[15]].push(WW[YW[8]] & YW[11]), WW[YW[8]] >>= YW[3], WW[YW[23]] -= YW[3])
                          } while (WW[YW[23]] > YW[7]);
                          WW[YW[60]] = -YW[2]
                        } return WW[YW[60]] > -YW[2] && WW[YW[15]].push((WW[YW[8]] | WW[YW[60]] << WW[YW[23]]) & YW[11]), PW(WW[YW[15]])
                  }

                  function zR(...WW) {
                    return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = CW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
                  }
                  throw Error(zR(YW[39]))
                }
                if (jR(RW[YW[16]] = WW[YW[34]][WW[-YW[72]]] & YW[11], WW[-YW[72]]++), (RW[YW[16]] & YW[73]) == YW[63]) return RW[YW[16]] & YW[22];
                throw Error(wW(134))
              }

              function TW(...MW) {
                function wW(...WW) {
                  for (jR(WW[YW[12]] = YW[2], WW[YW[16]] = 'gnsfIGTHOrDNVSXpmPodtjFCkbLceaZMBlRhUEQKWiqYA]/{x5_*&9`$^}0<6)?.;=":7v,!|>+4z2u[1w#y@3%~(J8', WW[YW[21]] = "" + (WW[YW[1]] || ""), WW[YW[36]] = WW[YW[21]].length, WW[YW[15]] = [], WW[YW[74]] = YW[1], WW[-YW[75]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[36]]; WW[YW[3]]++)
                    if (WW[-YW[52]] = WW[YW[16]].indexOf(WW[YW[21]][WW[YW[3]]]), WW[-YW[52]] !== -YW[2])
                      if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[-YW[52]];
                      else {
                        jR(WW[YW[7]] += WW[-YW[52]] * YW[38], WW[YW[74]] |= WW[YW[7]] << WW[-YW[75]], WW[-YW[75]] += (WW[YW[7]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                        do {
                          jR(WW[YW[15]].push(WW[YW[74]] & YW[11]), WW[YW[74]] >>= YW[3], WW[-YW[75]] -= YW[3])
                        } while (WW[-YW[75]] > YW[7]);
                        WW[YW[7]] = -YW[2]
                      } return WW[YW[7]] > -YW[2] && WW[YW[15]].push((WW[YW[74]] | WW[YW[7]] << WW[-YW[75]]) & YW[11]), PW(WW[YW[15]])
                }

                function CW(...WW) {
                  return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = wW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
                }
                if (MW[YW[12]] = YW[1], jR(MW[YW[21]] = YW[20], MW[YW[2]] = YW[20], MW[YW[0]] = YW[20], MW[YW[4]] = YW[20], MW[YW[77]] = YW[20]), WW[-YW[72]] > WW[YW[36]]) throw Error(RW(135));
                if (WW[-YW[72]] == WW[YW[36]]) return YW[80];
                if (jR(MW[YW[21]] = WW[YW[34]][WW[-YW[72]]] & YW[11], WW[-YW[72]]++), (MW[YW[21]] & YW[63]) == YW[1]) return MW[YW[21]];
                if ((MW[YW[21]] & YW[76]) == YW[73]) {
                  if (jR(MW[YW[2]] = tR(), MW[YW[77]] = (MW[YW[21]] & YW[64]) << YW[23] | MW[YW[2]]), MW[YW[77]] >= YW[63]) return MW[YW[77]];
                  throw Error(RW(136))
                }
                if ((MW[YW[21]] & YW[46]) == YW[76]) {
                  if (jR(MW[YW[2]] = tR(), MW[YW[0]] = tR(), MW[YW[77]] = (MW[YW[21]] & YW[65]) << YW[25] | MW[YW[2]] << YW[23] | MW[YW[0]]), MW[YW[77]] >= 2048) return AW(MW[YW[77]]), MW[YW[77]];
                  {
                    function zR(...WW) {
                      for (jR(WW[YW[12]] = YW[2], WW[YW[2]] = 'W1RiAoC"LH@FUO)/[zJBNtuSg,rah6jDe}`x#bnv:ZXsdp*mI25!cG=.lP<]{;^QV(>fT8&~0_w$9KM43Y%|y7q+k?E', WW[-YW[78]] = "" + (WW[YW[1]] || ""), WW[YW[36]] = WW[-YW[78]].length, WW[YW[15]] = [], WW[YW[31]] = YW[1], WW[YW[79]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[43]] = YW[1]; WW[YW[43]] < WW[YW[36]]; WW[YW[43]]++)
                        if (WW[YW[45]] = WW[YW[2]].indexOf(WW[-YW[78]][WW[YW[43]]]), WW[YW[45]] !== -YW[2])
                          if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[45]];
                          else {
                            jR(WW[YW[7]] += WW[YW[45]] * YW[38], WW[YW[31]] |= WW[YW[7]] << WW[YW[79]], WW[YW[79]] += (WW[YW[7]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                            do {
                              jR(WW[YW[15]].push(WW[YW[31]] & YW[11]), WW[YW[31]] >>= YW[3], WW[YW[79]] -= YW[3])
                            } while (WW[YW[79]] > YW[7]);
                            WW[YW[7]] = -YW[2]
                          } return WW[YW[7]] > -YW[2] && WW[YW[15]].push((WW[YW[31]] | WW[YW[7]] << WW[YW[79]]) & YW[11]), PW(WW[YW[15]])
                    }

                    function NW(...WW) {
                      return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = zR(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
                    }
                    throw Error(NW(137))
                  }
                }
                if ((248 & MW[YW[21]]) == YW[46] && (jR(MW[YW[2]] = tR(), MW[YW[0]] = tR(), MW[YW[4]] = tR(), MW[YW[77]] = (MW[YW[21]] & YW[7]) << YW[66] | MW[YW[2]] << YW[25] | MW[YW[0]] << YW[23] | MW[YW[4]]), MW[YW[77]] >= YW[54] && MW[YW[77]] <= 1114111)) return MW[YW[77]];
                throw Error(CW(138))
              }

              function gR(...RW) {
                for (jR(RW[YW[12]] = YW[2], WW[YW[34]] = CW(RW[YW[1]]), WW[YW[36]] = WW[YW[34]].length, WW[-YW[72]] = YW[1], RW[-YW[81]] = [], RW[YW[0]] = YW[20]);
                  (RW[YW[0]] = TW()) !== YW[80];) RW[-YW[81]].push(RW[YW[0]]);
                return zR(RW[-YW[81]])
              }
              WW[YW[12]] = YW[2], WW[-YW[55]] = String.fromCharCode, jR(WW[YW[34]] = YW[20], WW[YW[36]] = YW[20], WW[-YW[72]] = YW[20]), jR(WW[YW[1]].version = wW(YW[116]), WW[YW[1]].encode = BW, WW[YW[1]].decode = gR)
            }(typeof exports === wW(140) + wW(141) ? this.utf8 = {} : exports)
        }();
        const MW = rR;
        return CW()[RW(142) + RW(143)](MW, WW[YW[0]]), CW()[RW(144)](WW[YW[1]], MW, CW()[RW(YW[82])](MW, WW[YW[2]]))
      };

    function jR() {
      jR = function() {}
    }
    AW = (...WW) => {
      function RW(...WW) {
        return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = function(...WW) {
          for (jR(WW[YW[12]] = YW[2], WW[YW[16]] = 'VZfLHkj=N+m9drvz)$UigC1(lw~yFQqB2?6De7OAMT*ESY:c|G<%s58u.K@a&I3"J/X;W#o4`Rt,P]p^{_h}b!x0[>n', WW[YW[31]] = "" + (WW[YW[1]] || ""), WW[YW[84]] = WW[YW[31]].length, WW[YW[15]] = [], WW[YW[8]] = YW[1], WW[-YW[82]] = YW[1], WW[-YW[85]] = -YW[2]), WW[-YW[83]] = YW[1]; WW[-YW[83]] < WW[YW[84]]; WW[-YW[83]]++)
            if (WW[YW[45]] = WW[YW[16]].indexOf(WW[YW[31]][WW[-YW[83]]]), WW[YW[45]] !== -YW[2])
              if (WW[-YW[85]] < YW[1]) WW[-YW[85]] = WW[YW[45]];
              else {
                jR(WW[-YW[85]] += WW[YW[45]] * YW[38], WW[YW[8]] |= WW[-YW[85]] << WW[-YW[82]], WW[-YW[82]] += (WW[-YW[85]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                do {
                  jR(WW[YW[15]].push(WW[YW[8]] & YW[11]), WW[YW[8]] >>= YW[3], WW[-YW[82]] -= YW[3])
                } while (WW[-YW[82]] > YW[7]);
                WW[-YW[85]] = -YW[2]
              } return WW[-YW[85]] > -YW[2] && WW[YW[15]].push((WW[YW[8]] | WW[-YW[85]] << WW[-YW[82]]) & YW[11]), PW(WW[YW[15]])
        }(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
      }
      WW[YW[12]] = YW[3];
      const MW = WW[YW[1]][RW(YW[86])][RW(147) + RW(148) + RW(YW[110])](WW[YW[2]]);
      WW[YW[3]] = WW[YW[1]][RW(YW[86])][RW(YW[94]) + RW(YW[95]) + RW(YW[96]) + RW(YW[97])](MW);
      const wW = WW[YW[3]] === YW[88] ? WW[YW[1]][RW(YW[86])][RW(YW[89]) + RW(YW[84]) + RW(YW[90]) + RW(YW[55])](WW[YW[2]], RW(YW[87]) + RW(YW[83]) + RW(YW[6]) + YW[8]) : WW[YW[3]][RW(YW[87]) + RW(YW[83]) + RW(YW[6]) + YW[8]],
        AW = WW[YW[3]] === YW[88] ? WW[YW[1]][RW(YW[86])][RW(YW[89]) + RW(YW[84]) + RW(YW[90]) + RW(YW[55])](WW[YW[2]], RW(YW[91]) + RW(YW[92]) + RW(YW[93])) : WW[YW[3]][RW(YW[91]) + RW(YW[92]) + RW(YW[93])];
      jR(CW()[RW(164)](oW, YW[1], YW[1], WW[YW[31]]), CW().bb(oW, oW, CW()[RW(YW[113])], WW[YW[4]].heading), CW()[RW(166)](cR, WW[YW[34]].lA), cR[YW[2]] = YW[1]);
      const NW = WW[YW[0]][RW(YW[105]) + RW(168)]();
      if (jR(WW[YW[3]] = WW[YW[1]][RW(YW[86])][RW(YW[94]) + RW(YW[95]) + RW(YW[96]) + RW(YW[97])](MW), WW[YW[21]] = WW[YW[3]] === YW[88] ? WW[YW[1]][RW(YW[86])][RW(YW[89]) + RW(YW[84]) + RW(YW[90]) + RW(YW[55])](WW[YW[2]], RW(YW[98]) + RW(YW[99])) : WW[YW[3]][RW(YW[98]) + RW(YW[99])]), !NW && CW()[YW[104]](cR) && (WW[YW[3]] === YW[88] ? WW[YW[1]][RW(YW[86])][RW(171) + RW(YW[13]) + RW(YW[115])](WW[YW[2]], RW(YW[100]) + RW(YW[77]) + RW(YW[101]) + RW(YW[102])) : WW[YW[3]][RW(YW[100]) + RW(YW[77]) + RW(YW[101]) + RW(YW[102])])) {
        function gR(...WW) {
          for (jR(WW[YW[12]] = YW[2], WW[YW[16]] = '!GFCAOeluhaL&4<D{>[Z1Ycdr0+iPU`=M$"6%@/57p2kfB8sI,nEz?jRto)|vwK~qSJ*m_};V93.(H^Q]Ngy#:xTXWb', WW[YW[0]] = "" + (WW[YW[1]] || ""), WW[YW[36]] = WW[YW[0]].length, WW[YW[34]] = [], WW[-YW[103]] = YW[1], WW[YW[23]] = YW[1], WW[YW[60]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[36]]; WW[YW[3]]++)
            if (WW[YW[47]] = WW[YW[16]].indexOf(WW[YW[0]][WW[YW[3]]]), WW[YW[47]] !== -YW[2])
              if (WW[YW[60]] < YW[1]) WW[YW[60]] = WW[YW[47]];
              else {
                jR(WW[YW[60]] += WW[YW[47]] * YW[38], WW[-YW[103]] |= WW[YW[60]] << WW[YW[23]], WW[YW[23]] += (WW[YW[60]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                do {
                  jR(WW[YW[34]].push(WW[-YW[103]] & YW[11]), WW[-YW[103]] >>= YW[3], WW[YW[23]] -= YW[3])
                } while (WW[YW[23]] > YW[7]);
                WW[YW[60]] = -YW[2]
              } return WW[YW[60]] > -YW[2] && WW[YW[34]].push((WW[-YW[103]] | WW[YW[60]] << WW[YW[23]]) & YW[11]), PW(WW[YW[34]])
        }

        function iR(...WW) {
          return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = gR(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }
        jR(XW(lW, oW, cR), XW(FW, cR, oW), CW()[iR(178)](fW, cR, FW));
        const JW = CW()[iR(179)](cR),
          rR = CW()[iR(YW[69])](oW, cR) / WW[YW[31]] / JW,
          kR = Math[iR(YW[108])](rR, YW[1]) + YW[2];
        if (WW[YW[31]] * WW[YW[31]] < CW()[YW[104]](FW)) {
          function aR(...WW) {
            for (jR(WW[YW[12]] = YW[2], WW[YW[84]] = '5LIx(rzF3%AMjYk,7@KZW0.)1"p!8~`fO]Ba4=JgqmX&_9}tsRe?+C2lhUoPbw|c<N#H{6^>*E/S[iQDnv$uyTGV:d;', WW[YW[21]] = "" + (WW[YW[1]] || ""), WW[YW[105]] = WW[YW[21]].length, WW[YW[34]] = [], WW[YW[31]] = YW[1], WW[YW[79]] = YW[1], WW[YW[60]] = -YW[2]), WW[YW[43]] = YW[1]; WW[YW[43]] < WW[YW[105]]; WW[YW[43]]++)
              if (WW[YW[106]] = WW[YW[84]].indexOf(WW[YW[21]][WW[YW[43]]]), WW[YW[106]] !== -YW[2])
                if (WW[YW[60]] < YW[1]) WW[YW[60]] = WW[YW[106]];
                else {
                  jR(WW[YW[60]] += WW[YW[106]] * YW[38], WW[YW[31]] |= WW[YW[60]] << WW[YW[79]], WW[YW[79]] += (WW[YW[60]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                  do {
                    jR(WW[YW[34]].push(WW[YW[31]] & YW[11]), WW[YW[31]] >>= YW[3], WW[YW[79]] -= YW[3])
                  } while (WW[YW[79]] > YW[7]);
                  WW[YW[60]] = -YW[2]
                } return WW[YW[60]] > -YW[2] && WW[YW[34]].push((WW[YW[31]] | WW[YW[60]] << WW[YW[79]]) & YW[11]), PW(WW[YW[34]])
          }

          function sW(...WW) {
            return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = aR(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }

          function dW(...WW) {
            WW[YW[12]] = YW[1];
            const RW = require("big-integer");
            jR(WW[YW[16]] = class {
              static randomPrime(...WW) {
                WW[YW[12]] = YW[2];
                const MW = RW.one.shiftLeft(WW[YW[1]] - YW[2]),
                  wW = RW.one.shiftLeft(WW[YW[1]]).prev();
                for (;;) {
                  let WW = RW.randBetween(MW, wW);
                  if (WW.isProbablePrime(256)) return WW
                }
              }
              static generate(...WW) {
                WW[YW[12]] = YW[2];
                const MW = RW(65537);
                let wW, CW;
                WW[YW[16]] = YW[20];
                do {
                  jR(wW = this.randomPrime(WW[YW[1]] / YW[0]), CW = this.randomPrime(WW[YW[1]] / YW[0]), WW[YW[16]] = RW.lcm(wW.prev(), CW.prev()))
                } while (RW.gcd(MW, WW[YW[16]]).notEquals(YW[2]) || wW.minus(CW).abs().shiftRight(WW[YW[1]] / YW[0] - 100).isZero());
                return {
                  e: MW,
                  n: wW.multiply(CW),
                  d: MW.modInv(WW[YW[16]])
                }
              }
              static encrypt(...WW) {
                return WW[YW[12]] = YW[4], RW(WW[YW[1]]).modPow(WW[YW[0]], WW[YW[2]])
              }
              static decrypt(...WW) {
                return WW[YW[12]] = YW[4], RW(WW[YW[1]]).modPow(WW[YW[2]], WW[YW[0]])
              }
              static encode(...WW) {
                WW[YW[12]] = YW[2];
                const MW = WW[YW[1]].split("").map((WW => WW.charCodeAt())).join("");
                return RW(MW)
              }
              static decode(...WW) {
                WW[YW[12]] = YW[2];
                const RW = WW[YW[1]].toString();
                WW[YW[107]] = "";
                for (let MW = YW[1]; MW < RW.length; MW += YW[0]) {
                  let wW = Number(RW.substr(MW, YW[0]));
                  wW <= 30 ? (WW[YW[107]] += String.fromCharCode(Number(RW.substr(MW, YW[4]))), MW++) : WW[YW[107]] += String.fromCharCode(wW)
                }
                return WW[YW[107]]
              }
            }, module.exports = WW[YW[16]])
          }
          sW(182) + "k" in IW && dW(), CW()[sW(183)](oW, oW, FW, kR)
        }
        jR(WW[YW[21]] = (0, zR.r)(WW[YW[21]], 1, Math[iR(YW[108])](YW[2], Math[iR(184)](YW[1], -rR, YW[2] - JW / WW[YW[31]]))), CW()[iR(185)](oW, oW, fW))
      }
      const eW = QW;
      if (jR(CW()[RW(YW[53])](eW, oW, cR), eW[YW[2]] = YW[1], WW[YW[36]] = CW()[RW(187)](eW)), !NW) {
        function pW(...WW) {
          for (jR(WW[YW[12]] = YW[2], WW[YW[16]] = 'c;kHNam.7,]fWr4!eT[i>|`#u%ZbEVFRQ6J"v_DLKx$*~n/p:GMdqO9)UBP}{&zh2tygS(<+=Cwl1@jsIA05^Y3Xo8?', WW[-YW[109]] = "" + (WW[YW[1]] || ""), WW[YW[36]] = WW[-YW[109]].length, WW[YW[34]] = [], WW[-YW[110]] = YW[1], WW[-YW[103]] = YW[1], WW[YW[60]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[36]]; WW[YW[3]]++)
            if (WW[YW[103]] = WW[YW[16]].indexOf(WW[-YW[109]][WW[YW[3]]]), WW[YW[103]] !== -YW[2])
              if (WW[YW[60]] < YW[1]) WW[YW[60]] = WW[YW[103]];
              else {
                jR(WW[YW[60]] += WW[YW[103]] * YW[38], WW[-YW[110]] |= WW[YW[60]] << WW[-YW[103]], WW[-YW[103]] += (WW[YW[60]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                do {
                  jR(WW[YW[34]].push(WW[-YW[110]] & YW[11]), WW[-YW[110]] >>= YW[3], WW[-YW[103]] -= YW[3])
                } while (WW[-YW[103]] > YW[7]);
                WW[YW[60]] = -YW[2]
              } return WW[YW[60]] > -YW[2] && WW[YW[34]].push((WW[-YW[110]] | WW[YW[60]] << WW[-YW[103]]) & YW[11]), PW(WW[YW[34]])
        }

        function hW(...WW) {
          return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = pW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }

        function UW(...WW) {
          WW[YW[12]] = YW[1]
        }
        hW(188) + YW[79] in IW && UW(), WW[YW[36]] *= WW[YW[21]]
      }
      const BW = WW[YW[23]][RW(189) + RW(190) + RW(191)],
        tR = BW ? Math[RW(YW[73])](BW, WW[YW[36]]) : WW[YW[36]];
      CW()[RW(193) + RW(194)](eW, eW);
      const TW = WW[YW[7]] !== YW[88] && void 0 !== WW[YW[7]] ? WW[YW[7]] : WW[YW[23]][RW(195) + RW(196) + RW(197) + RW(198)];
      if (tR > YW[1]) {
        function EW(WW) {
          var RW, MW, wW, CW, zR, AW, bR;
          for (jR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = YW[1], zR = YW[1], AW = -YW[2]), bR = YW[1]; bR < MW; bR++) {
            var yR = 'De[WCtRPsIcjhliZzTFM;^:Hum{J&_o$N1bQYn4d.SG~r7xLv=yp("2`K/<B*Vg9?X@k0]qU}f)wE!#AO+6a>35%|8,'.indexOf(RW[bR]);
            if (yR !== -YW[2])
              if (AW < YW[1]) AW = yR;
              else {
                jR(AW += yR * YW[38], CW |= AW << zR, zR += (AW & YW[40]) > YW[41] ? YW[42] : YW[19]);
                do {
                  jR(wW.push(CW & YW[11]), CW >>= YW[3], zR -= YW[3])
                } while (zR > YW[7]);
                AW = -YW[2]
              }
          }
          return AW > -YW[2] && wW.push((CW | AW << zR) & YW[11]), PW(wW)
        }

        function VW(...WW) {
          return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = EW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
        }
        let mR = WW[YW[0]][VW(YW[52]) + VW(YW[107])] * TW;
        if (!NW) {
          function vR(...WW) {
            for (jR(WW[YW[12]] = YW[2], WW[-YW[39]] = 'HLxUmnGgy!?8&JYif$jF4R]TO*l{ZpbQMIXroP"zKW)dBu@9qDs^kv/a>Sc,E<N7[}5ACV;ht1.w6(#|_02`%:+~3e=', WW[-YW[112]] = "" + (WW[YW[1]] || ""), WW[YW[111]] = WW[-YW[112]].length, WW[-YW[113]] = [], WW[YW[8]] = YW[1], WW[YW[23]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[114]] = YW[1]; WW[YW[114]] < WW[YW[111]]; WW[YW[114]]++)
              if (WW[YW[47]] = WW[-YW[39]].indexOf(WW[-YW[112]][WW[YW[114]]]), WW[YW[47]] !== -YW[2])
                if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[47]];
                else {
                  jR(WW[YW[7]] += WW[YW[47]] * YW[38], WW[YW[8]] |= WW[YW[7]] << WW[YW[23]], WW[YW[23]] += (WW[YW[7]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                  do {
                    jR(WW[-YW[113]].push(WW[YW[8]] & YW[11]), WW[YW[8]] >>= YW[3], WW[YW[23]] -= YW[3])
                  } while (WW[YW[23]] > YW[7]);
                  WW[YW[7]] = -YW[2]
                } return WW[YW[7]] > -YW[2] && WW[-YW[113]].push((WW[YW[8]] | WW[YW[7]] << WW[YW[23]]) & YW[11]), PW(WW[-YW[113]])
          }

          function KW(...WW) {
            return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = vR(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }
          mR *= WW[YW[0]][VW(YW[10]) + KW(YW[50])]
        }
        let xR = WW[YW[0]][VW(203) + VW(204) + "ss"] * tR;
        if (tR < .3 && (xR *= tR), mR > xR) {
          function uW(...WW) {
            for (jR(WW[YW[12]] = YW[2], WW[YW[2]] = 'R<?xdCTh,Z"s]=k@ub7v9~/{(r.+q68zyN_UAg}mYIQ!w)>nHlG;M50OJ[E$1tDc4Lf:KBa^%PoVXW`iFjSe3*#|2p&', WW[YW[21]] = "" + (WW[YW[1]] || ""), WW[YW[4]] = WW[YW[21]].length, WW[YW[34]] = [], WW[YW[31]] = YW[1], WW[YW[79]] = YW[1], WW[YW[7]] = -YW[2]), WW[YW[3]] = YW[1]; WW[YW[3]] < WW[YW[4]]; WW[YW[3]]++)
              if (WW[YW[45]] = WW[YW[2]].indexOf(WW[YW[21]][WW[YW[3]]]), WW[YW[45]] !== -YW[2])
                if (WW[YW[7]] < YW[1]) WW[YW[7]] = WW[YW[45]];
                else {
                  jR(WW[YW[7]] += WW[YW[45]] * YW[38], WW[YW[31]] |= WW[YW[7]] << WW[YW[79]], WW[YW[79]] += (WW[YW[7]] & YW[40]) > YW[41] ? YW[42] : YW[19]);
                  do {
                    jR(WW[YW[34]].push(WW[YW[31]] & YW[11]), WW[YW[31]] >>= YW[3], WW[YW[79]] -= YW[3])
                  } while (WW[YW[79]] > YW[7]);
                  WW[YW[7]] = -YW[2]
                } return WW[YW[7]] > -YW[2] && WW[YW[34]].push((WW[YW[31]] | WW[YW[7]] << WW[YW[79]]) & YW[11]), PW(WW[YW[34]])
          }

          function OW(...WW) {
            return WW[YW[12]] = YW[2], typeof bR[WW[YW[1]]] === YW[18] ? bR[WW[YW[1]]] = uW(yR[WW[YW[1]]]) : bR[WW[YW[1]]]
          }

          function nW(...WW) {
            jR(WW[YW[12]] = YW[1], WW[YW[16]] = function(...WW) {
              for (jR(WW[YW[12]] = YW[2], WW[YW[115]] = WW[YW[1]].length, WW[YW[21]] = [], WW[-YW[116]] = YW[1], WW[YW[75]] = YW[1], WW[YW[1]].sort(((WW, RW) => WW - RW))), WW[YW[8]] = YW[1]; WW[YW[8]] < WW[YW[115]]; WW[YW[8]]++)
                if (!(WW[YW[8]] > YW[1] && WW[YW[1]][WW[YW[8]]] === WW[YW[1]][WW[YW[8]] - YW[2]]))
                  for (jR(WW[-YW[116]] = WW[YW[8]] + YW[2], WW[YW[75]] = WW[YW[115]] - YW[2]); WW[-YW[116]] < WW[YW[75]];)
                    if (WW[YW[1]][WW[YW[8]]] + WW[YW[1]][WW[-YW[116]]] + WW[YW[1]][WW[YW[75]]] < YW[1]) WW[-YW[116]]++;
                    else if (WW[YW[1]][WW[YW[8]]] + WW[YW[1]][WW[-YW[116]]] + WW[YW[1]][WW[YW[75]]] > YW[1]) WW[YW[75]]--;
              else {
                for (WW[YW[21]].push([WW[YW[1]][WW[YW[8]]], WW[YW[1]][WW[-YW[116]]], WW[YW[1]][WW[YW[75]]]]); WW[-YW[116]] < WW[YW[75]] && WW[YW[1]][WW[-YW[116]]] === WW[YW[1]][WW[-YW[116]] + YW[2]];) WW[-YW[116]]++;
                for (; WW[-YW[116]] < WW[YW[75]] && WW[YW[1]][WW[YW[75]]] === WW[YW[1]][WW[YW[75]] - YW[2]];) WW[YW[75]]--;
                jR(WW[-YW[116]]++, WW[YW[75]]--)
              }
              return WW[YW[21]]
            }, console.log(WW[YW[16]]))
          }
          OW(205) + "5" in IW && nW(), mR = xR
        }
        jR(CW()[VW(YW[49])](eW, eW, mR), WW[YW[34]][VW(207) + VW(208)](eW))
      }
      WW[YW[34]][RW(209) + YW[117]] = WW[YW[0]][RW(YW[27]) + RW(YW[83]) + YW[117]] * (NW ? wW : AW)
    }
  },
  35716: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      f: () => bR
    });
    var wW = MW(35721),
      CW = MW(1050);
    const zR = 2,
      AW = 1,
      bR = {
        aA: 1,
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

    function yR(WW, RW, MW, bR, yR, NW, eW) {
      if (yR.speed) return (0, wW.c)(RW, MW, bR, yR, NW, eW, WW), void(yR.ticksToReachMaxIdleFriction = zR);
      const BW = bR.isOnGround(),
        tR = RW.bloxd.getSyncedClientOptions(RW.bloxd.getPlayerReader(MW)),
        TW = null === tR ? RW.bloxd.getClientPredictedOption(MW, "groundFrictionScale") : tR.groundFrictionScale,
        gR = null === tR ? RW.bloxd.getClientPredictedOption(MW, "airFrictionScale") : tR.airFrictionScale,
        iR = BW ? TW : gR,
        YW = Math.max(AW, iR),
        JW = yR.ticksToReachMaxIdleFriction / zR,
        PW = (0, CW.r)(YW, iR, JW);
      NW.friction = WW.standingFriction * ((null === tR ? RW.bloxd.getClientPredictedOption(MW, "airMomentumConservation") : tR.airMomentumConservation) ? PW : iR), yR.ticksToReachMaxIdleFriction > 0 && yR.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);