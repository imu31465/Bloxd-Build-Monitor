export const id = 204;
export const ids = [204];
export const modules = {
  37024: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => mB
    });
    var Vc = nc(174),
      Ic = nc(36197);
    const rB = 1.2,
      uc = {
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
        ku: .5,
        IMc: !1
      },
      sc = {
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
        ku: .5,
        IMc: !1
      },
      Mc = {
        physicsBodyDimensions: {
          width: Vc.e.EY,
          height: Vc.e.wY
        },
        hitBoxDimensions: {
          width: Vc.e.EY + .4,
          height: Vc.e.wY + .6
        },
        eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
        rideHeight: Vc.e.wY - .3,
        ku: .5,
        IMc: !1
      },
      Pc = {
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
        ku: .5,
        IMc: !1
      },
      qB = {
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
        ku: .5,
        IMc: !1
      },
      Oc = {
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
        ku: .5,
        IMc: !1
      },
      Tc = {
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
        ku: .5,
        IMc: !1
      },
      fc = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: Ic.e.ku,
          IMc: !0
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
        },
        Camel: {
          modelScale: rB,
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
        },
        "Cave Golem": uc,
        "Draugr Zombie": {
          ...Mc,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Mc,
        "Frost Golem": uc,
        "Frost Zombie": {
          ...Mc,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Mc,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          ku: .5,
          IMc: !1
        },
        Wolf: Pc,
        Bear: qB,
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
          ku: .5,
          IMc: !1
        },
        Stag: Oc,
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
          ku: .5,
          IMc: !1
        },
        Gorilla: Tc,
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
          ku: .5,
          IMc: !1
        },
        "Draugr Huntress": Mc,
        "Magma Golem": uc,
        "Spirit Golem": uc,
        "Spirit Wolf": Pc,
        "Spirit Bear": qB,
        "Spirit Stag": Oc,
        "Spirit Gorilla": Tc,
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
        },
        Zombie: {
          ...Mc,
          defaultPose: "zombie"
        },
        Skeleton: Mc,
        Mummy: {
          ...Mc,
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
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
          ku: .5,
          IMc: !1
        },
        "Iron Guardian": sc,
        "Gold Guardian": sc,
        "Diamond Guardian": sc,
        "Moonstone Guardian": sc,
        "Iron Goofy Golem": sc,
        "Gold Goofy Golem": sc,
        "Diamond Goofy Golem": sc,
        "Moonstone Goofy Golem": sc,
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
          ku: .5,
          IMc: !1
        }
      };

    function mB(cB) {
      return fc[cB]
    }
  },
  36978: (cB, Bc, nc) => {
    nc.d(Bc, {
      D: () => Yc,
      E: () => hc,
      F: () => pc,
      G: () => Tc,
      I: () => ec,
      K: () => Sc,
      O: () => Ic,
      d: () => qB,
      g: () => Mc,
      i: () => zB,
      k: () => Pc,
      n: () => sc,
      p: () => uc,
      t: () => rB,
      v: () => lc,
      w: () => fc,
      z: () => aB
    });
    var Vc = nc(8320);

    function Ic(cB) {
      return Math.floor(cB).toLocaleString("en-US")
    }
    const rB = 2e3,
      uc = .005,
      sc = .001,
      Mc = 2,
      Pc = "Fluid Tank",
      qB = "Coolant Mixer",
      Oc = 144;

    function Tc(cB) {
      const Bc = cB.split("|")[0];
      return (0, Vc.k)(Bc) ? Bc === Vc.e ? "cryo" : "water" : null
    }
    const fc = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      mB = 63;

    function ec(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const nc = Bc ? function(cB, Bc, nc) {
        const Vc = fc.findIndex((Vc => {
          let [Ic, rB, uc] = Vc;
          return Ic === cB && rB === Bc && uc === nc
        }));
        return Vc < 0 ? 0 : 1 << Vc
      }(Bc[0], Bc[1], Bc[2]) : 0;
      return "maker" === cB ? {
        kind: cB,
        faces: nc
      } : "user" === cB ? {
        kind: cB,
        faces: mB & ~nc
      } : {
        kind: cB,
        faces: mB
      }
    }

    function tB(cB) {
      return "pipe" === cB || "tank" === cB || "maker" === cB
    }

    function Sc(cB, Bc, nc) {
      return 0 !== (cB.faces & 1 << nc) && 0 !== (Bc.faces & 1 << (1 ^ nc)) && (tB(cB.kind) || tB(Bc.kind))
    }
    const yB = (cB, Bc, nc, Vc) => ({
        input: cB,
        inputAmount: Vc,
        output: Bc,
        outputAmount: nc
      }),
      zB = {
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
          recipes: [yB("Uranium Grit", "Uranium Pellet", 1, 12), yB("Spent Pellet", "Plutonium Pellet", 1, 4)],
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
          recipes: [yB("Biomass", "", 0, 1)],
          powerPerOp: 720,
          waterPerOp: 144,
          cryoMade: Oc,
          couplable: !0,
          couplerSlot: 1
        }
      };

    function pc(cB, Bc) {
      return 1e3 * (null !== Bc && void 0 !== Bc ? Bc : 0) / cB.opMs
    }

    function hc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const nc = pc(zB["Coolant Mixer"], Oc) * Bc;
      return cB <= 0 ? 0 : Math.ceil(cB / nc - 1e-9)
    }
    const aB = "baf2Water",
      lc = "baf2waterclose",
      Yc = "baf2wateropen"
  },
  35651: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = {
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
  36970: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Lc,
      f: () => pc,
      j: () => zB
    });
    var Vc = nc(8235),
      Ic = nc(8268),
      rB = nc(8320),
      uc = nc(36978),
      sc = nc(8317);
    const Mc = (0, uc.I)("pipe"),
      Pc = (0, uc.I)("tank"),
      qB = (0, uc.I)("port"),
      Oc = "Reactor Port";

    function Tc(cB, Bc, nc) {
      const Vc = new Set([rB.h, rB.e, Oc, ...Bc, ...nc, ...cB ? [uc.k] : []]);
      return {
        makers: new Set(Bc),
        roots: Vc
      }
    }
    const fc = {
        water: Tc(!0, ["Condenser"], ["Centrifuge", "Synthesizer", uc.d]),
        cryo: Tc(!1, [uc.d], [])
      },
      mB = new Set([...fc.water.roots, ...fc.cryo.roots]),
      ec = {
        nx: [-1, 0, 0],
        ny: [0, -1, 0],
        nz: [0, 0, -1],
        px: [1, 0, 0],
        py: [0, 1, 0],
        pz: [0, 0, 1]
      },
      tB = Ic.g.map((cB => ec[cB])),
      Sc = tB.map((cB => {
        let [Bc, nc, Vc] = cB;
        return uc.w.findIndex((cB => {
          let [Ic, rB, uc] = cB;
          return Ic === Bc && rB === nc && uc === Vc
        }))
      }));

    function yB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
      const nc = Vc.g[cB],
        Ic = null === nc || void 0 === nc ? void 0 : nc.meta.rootName,
        Tc = fc[Bc];
      if (!Ic || !Tc.roots.has(Ic)) return null;
      if ((0, rB.k)(Ic)) return (0, uc.G)(nc.name) === Bc ? Mc : null;
      if (Ic === uc.k) return Pc;
      if (Ic === Oc) return nc.name.endsWith("|Water") ? qB : null;
      const [mB, ec] = sc.f[(nc.meta.rot || 1) - 1];
      return (0, uc.I)(Tc.makers.has(Ic) ? "maker" : "user", [-mB, 0, -ec])
    }

    function zB(cB, Bc, nc, Ic) {
      let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
      const {
        makers: sc
      } = fc[rB];
      return tB.some(((Pc, qB) => {
        var Oc, Tc;
        let [fc, mB, ec] = Pc;
        const tB = cB(Bc + fc, nc + mB, Ic + ec),
          zB = yB(tB, rB);
        return null !== zB && sc.has(null !== (Oc = null === (Tc = Vc.g[tB]) || void 0 === Tc ? void 0 : Tc.meta.rootName) && void 0 !== Oc ? Oc : "") && !(0, uc.K)(Mc, zB, Sc[qB])
      }))
    }

    function pc(cB) {
      const Bc = Vc.g[cB];
      return Bc ? (0, uc.G)(Bc.name) : null
    }
    let hc = null;

    function aB(cB) {
      if (!hc) {
        hc = new Map;
        for (const cB of ["water", "cryo"])
          for (let Bc = 0; Bc < 64; Bc++)
            for (const nc of [!1, !0]) hc.set((0, rB.l)(cB, Bc, nc), {
              yV: cB,
              mask: Bc,
              full: nc
            })
      }
      return hc.get(cB)
    }
    const lc = new Map(Array.from({
      length: rB.i + 1
    }, ((cB, Bc) => [(0, rB.p)(Bc), Bc])));

    function Yc(cB, Bc, nc, Ic, rB, uc) {
      return tB.some(((sc, Mc) => {
        var Pc, qB, Oc;
        let [Tc, fc, mB] = sc;
        if (0 === (uc >> Mc & 1)) return !1;
        const ec = null !== (Pc = null === (qB = Vc.g[cB(Bc + Tc, nc + fc, Ic + mB)]) || void 0 === qB ? void 0 : qB.name) && void 0 !== Pc ? Pc : "",
          tB = aB(ec);
        return tB ? tB.yV === rB && tB.full : (null !== (Oc = function(cB) {
          var Bc;
          return null !== (Bc = lc.get(cB)) && void 0 !== Bc ? Bc : null
        }(ec)) && void 0 !== Oc ? Oc : 0) > 0
      }))
    }
    class Lc {
      constructor() {
        this.reshapeOffsets = tB
      }
      handles(cB) {
        return null !== pc(cB)
      }
      affects(cB) {
        var Bc, nc;
        return mB.has(null !== (Bc = null === (nc = Vc.g[cB]) || void 0 === nc ? void 0 : nc.meta.rootName) && void 0 !== Bc ? Bc : "")
      }
      placedBy(cB) {
        var Bc;
        return (null === (Bc = Vc.g[cB]) || void 0 === Bc ? void 0 : Bc.meta.rootName) === rB.e ? rB.h : null
      }
      shape(cB, Bc, nc, Ic, sc, Pc) {
        var qB, Oc, Tc;
        const fc = null !== (qB = null === (Oc = Vc.g[sc]) || void 0 === Oc ? void 0 : Oc.name) && void 0 !== qB ? qB : "",
          mB = Pc || fc !== rB.h ? null !== (Tc = (0, uc.G)(fc)) && void 0 !== Tc ? Tc : "water" : function(cB, Bc, nc, Vc) {
            return tB.some(((Ic, rB) => {
              let [sc, Pc, qB] = Ic;
              const Oc = yB(cB(Bc + sc, nc + Pc, Vc + qB), "cryo");
              return null !== Oc && "port" !== Oc.kind && (0, uc.K)(Mc, Oc, Sc[rB])
            })) ? "cryo" : "water"
          }(cB, Bc, nc, Ic),
          ec = function(cB, Bc, nc, Vc) {
            let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
              rB = 0;
            return tB.forEach(((sc, Pc) => {
              let [qB, Oc, Tc] = sc;
              const fc = yB(cB(Bc + qB, nc + Oc, Vc + Tc), Ic);
              fc && (0, uc.K)(Mc, fc, Sc[Pc]) && (rB |= 1 << Pc)
            })), rB
          }(cB, Bc, nc, Ic, mB),
          zB = Pc ? function(cB) {
            var Bc;
            return !0 === (null === (Bc = aB(cB)) || void 0 === Bc ? void 0 : Bc.full)
          }(fc) : Yc(cB, Bc, nc, Ic, mB, ec);
        return (0, Vc.k)((0, rB.l)(mB, ec, zB))
      }
    }
  },
  36204: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(309),
      Ic = nc.n(Vc),
      rB = nc(1534);
    let uc;
    var sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec;
    const tB = ["b", 0, 1, 8, 246, 40, 164, "g", 5, "f", 148, 255, "length", "d", 3, 50, "undefined", void 0, 7, 2, 248, "a", 63, 6, "fromCodePoint", 12, "push", 107, 33554432, 67108864, 46, 103, "e", "h", 143, 4, 109, 91, 8191, 88, 13, 14, "c", 145, 128, 115, "i", 45, 96, 17, 29, 97, 110, 111, null, 116, 117, 101, 102, 104, 105, 106, 108, 123, 124, 127, 42, 201, 53, 21, 55, 158, "qs", 9, 202, 141, 241, 237, 137, 68, 125, 80, 133, 89, 160, 90, 235, 195, 184, "on"];

    function Sc(...cB) {
      return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[16] ? sc[cB[tB[1]]] = function(...cB) {
        for (bB(cB[tB[12]] = tB[2], cB[-tB[5]] = 'X;x~IVT*1u#=R,Ck8vw@jB[?E5"G)Ncb(F!yz<A&q9+WeYr^{$2sM]0.}_S3Dl7m`i:h%6P>pQ|f4a/tdUZOJLKnHgo', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[tB[0]].length, cB[tB[10]] = [], cB[tB[8]] = tB[1], cB[tB[9]] = tB[1], cB[tB[7]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[4]]; cB[tB[3]]++)
          if (cB[-tB[6]] = cB[-tB[5]].indexOf(cB[tB[0]][cB[tB[3]]]), cB[-tB[6]] !== -tB[2])
            if (cB[tB[7]] < tB[1]) cB[tB[7]] = cB[-tB[6]];
            else {
              bB(cB[tB[7]] += cB[-tB[6]] * tB[37], cB[tB[8]] |= cB[tB[7]] << cB[tB[9]], cB[tB[9]] += (cB[tB[7]] & tB[38]) > tB[39] ? tB[40] : tB[41]);
              do {
                bB(cB[tB[10]].push(cB[tB[8]] & tB[11]), cB[tB[8]] >>= tB[3], cB[tB[9]] -= tB[3])
              } while (cB[tB[9]] > tB[18]);
              cB[tB[7]] = -tB[2]
            } return cB[tB[7]] > -tB[2] && cB[tB[10]].push((cB[tB[8]] | cB[tB[7]] << cB[tB[9]]) & tB[11]), yB(cB[tB[10]])
      }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
    }

    function yB(...cB) {
      return cB[tB[12]] = tB[2], typeof qB !== tB[16] && qB ? (new qB).decode(new Oc(cB[tB[1]])) : typeof Tc !== tB[16] && Tc ? Tc.from(cB[tB[1]]).toString("utf-8") : ec(cB[tB[1]])
    }

    function zB() {}
    bB(sc = {}, Mc = ['es<|EMoqjui$="_!,%y(lD#M@RldN$TAb0xfJ6]L9iGphC!?:Qs1B2pS41', "(u_T+$^^{mPQ*&V5p%z#MZ[x", "(|tusr4w9vVSB8r@}s]I*6_9(:3dl$,", '`35sa6KKNBmPb"~EpX', "~k>$YacE!m}3%38q@umuL6DSwDD", "(u:s1|JSwuJ1xV", '.jJa5O(xV`w7}ODz_"w(&0TE;08{(O9bhsI*yloqf}ItX', 'l7?4[MjrNw5v,{39c%h#<LG9"j,!GCe5Nu%|AZQ;K@', "uy`$zdhN[@WyVp|5}{:Vx{B*3CNphkicP<bI?/5Ul=(pnx", "Psg1oM{w_i#%lpPA=w~NK>0w{R^*nxo)Yb5fracx", "WjsaTD4w3iA:UzK)nv)NT2t;", "y~u/!/bytw04sPoNIN>$7!>9/w", "~I.QE4[z1.{QaE>Apiebd4,9)iO[&Prq1wYbD{,9Xm6d%{AEWN6|f|m;*", "<v9Gk7!EcBs", "9R9T6pt;", "z|saV]V*NC|IX>Vbr_YMTpexB`9MUI,Ajs<I", "X$[b+dvNV@las3[9brbTr$cwT@4wL{xv3qg0u_v5eC}PJ{:cYb]*ssU9G7;G;", "q7BbZ7)1?,o`v8,&~WEFPz=f2RS(kA^GzRD]z}Q_XmupNp,jf%A**K=@~", "/YEua6TPpS_arAFzF|z#OUErQjV!(~g8.T,*maLNB,", "}i?0;z9^kRr6(~7NQ}K>/UX", '0ur4OOE1Jum$n"VWFTk4SSK!)vdPd~d"H{B|.&EK}SL2C<*@QT1FrP}Mf=3', "}>D#q^Xc+=_=:U[)=<bMt_KE3idh@2[9K).u7aQ*VS;l.A(+o~D]1|Ac!DD", '@q$T9%|T~0b6sSPE[0J"Wd;,#.wSNI@q', '{0g02}/EM_kGTV1b";', ":{;TtzRK}SQd`~Z)_!mQJ2h,4]Yvd^(E9_V4E", "GqK4A^M|O@", "Mj!f!/|q~07$z^>50j>)`p#K%`<*3Sa@x0+G7SUNUm,Sz~", "zsxN0&F_J_Ua}8D?G<3]g4[MhubCV{8&1>kF|4s?hR/mu8=j=rcu#66*I_wZ;", "*%,#F/]*xmsb;", ':b"s~pN]Hv', 'vTHQfA"xwmq*#<o+RR[.l!L*L`$6&Sib]!!fdzwdyuz6EGIcv_]#e<erxR', "FsY|dU_y$w/w}k<w{b0Ilpn_w0rC%Orq,>7u{mrSj@/},{^&ruT.9$X", "cD4>$%>;", '_3h#*!"ce],tc"e5#We|RzC1kRw{BD%E8T"sR7k5~R', "]YV.d7Z!y0;8=21bmC503&L*bDjt<$J)S~bM?^{d1#c7yx", "!~kuP!2qs0Jk@ZIE>7OaPDw|S7!BI>cNsqe|w7y*)C@s[V6@q<(0PUl,#.P);", 'eiPMG31w+=W:6{p"/=%V.JwMbwup_lqbC$~', "Bi9cf6]9]SRSNIP@q7?0K2jE{wr6]<;ve7UT66EE|=oVLIS?r>h|Wy|TV,", "0qL*O2|Ts@qb?2:cUiL*", "%{7M)^#EgSdwx5QA", "Tm(TwUnyUwyp!2kGr79(V]erJ,^3`3PEBi;", 'X|o1JY.9uj+v+$W&e|nIyfN]1i+.@"mcbqh]54X', "`bV2Yf4Ecw+{u89w", "L{&IKY}SCwla#CJGi<.MUOX", "H3M]c/+Sr3/kjGT", "J5j|Tt[1UmX<Uz;?nizb]]/wrk1^yZ=5)W0*%!jx", '"i04}ru;~RDI&S+AED%b<^jM<@ITEO=AKYypSad!YB', 'bq"pltf,wkbp>Gu5|}ha87X', "<>S(PU}Mh@DI:6d&:7AM+0Sq>,f(]I9&8;", ']j&$#{ismm.4I8qwLiEFvU/TZm8pmCu"0TJV@_X', "Bq7M/.a;rk#pq>!cYqO(5L*,iD}d^OQ&e_Euu7t*~", "e_v0#KJrB0m*aE~w", "}q{$P{u5WjNbx<3yW!=NZ/_;739QF5G+ci%2)LG]xDbExV", "JQ.4r$NN4}U505/q]~R|)", "Yv7);z;,>`aNH~Fz9_/b!MIS8:<4dG;<BD;", '>sRN~.(Eu7W6UzYGi%l)TK.99S3y="hvjku0/z1`j`MQWA="$0"GoQHE~', "1I,*O7Rr8_2w]I:z~:=a{f$^j0<!hZJ[&RsN`DEcu726;895_vnMj", "@q4|iUZSO_TxLID+#|^)mt~5N:m5;", "}iHsLMX", '1r4|d>#1hu[~8O]yg=ha7J}x?`<Q"V:?5%u(/2zw],".(~"?/<%]n>X', "=WT.|2H|QvV8{~~5y!A*", "8_$T|zX+awQ}vzlv*Nb)8|gL0`?GnPW5)0rM}tW,mwD:J~J!Ki9G_a]y|j", '9?qc>.oE9vhm^C65"%E0>|ccq,{.r,~b_Y}T]sjE4356^xDNni~', "LY6Id_}K@u{QVD8Gz{/MUzYL71=,r$FEH{9({$b9T`sy_IT", "[kv/smMxsDi=r5R5I|E$r<ny<`K;.C><rj%|Xtf,dm;0HO7zYsisK2X", ".YJVWfxKa3_QN$1b:T$0R7IcI", 'KY{TDafNkk~fV{Fb/3sp0r2St};/$8bN=<.IdzIzv:a$_{;b#r_0UA"`T', "YvONU4eM[S]b{GB)0{s17JPM;m;x;", 'ri[Q"/dRvuBt4G7cg](Q7SLNw_Fp,<B)ImP$s$?^(u', "JTB|G>3y~Djs%3;?N0[FEM7%3=n_M~bcOTY#(^a,hDM", 'nie.PU}MxR.yb"d&;B.4X.?**`8{%3(?l)EFUOIzbBL|6zq".jjN9yo!Ev0', "8>1/%zv9Wv9.?Zzw|==([", "|?s(]pdS8mRZ]{R&I|V2$}ifXR%3gdxcwDS(_mk58ukT)Odq&00*@U3?Ck", 'WiQ1e<:|dRR#Qpwjk0;c>z(dWvz)+leA1"z|MZuUY]HUy2=5_Y$T', "a5qc>]zw|v}(@Z:c_?CMKMoMc3Wy5pY@x0bu#UhN)3{", "R?4Nj>EzeB8pi,3)ds?Q87u9wuK5ipE)33s(Sr>;&jIu?A;<W>8/;rqxV", "T$&4@3X", "+>S(b0cw+j[t)GNz(NdQWdsy)CrQ;", "M{a*U7pE^D/D5z!E$X", "OQ[.|7814i?~_ILGx(ha^$;6pj=S2l_9b!4NI.oMwkq", "z>k/mDOLESrBGAmvuRcb#_B9aCW", 'Wq"(O6E13i_aZ"4&BuY#>tZE[@z!tPO9gifV!$s?I', "{TuTO2X", 'suE/B>!Rl=;uJk15y_nQ&QPMw@q3o6YGC"1F#2Dc33ak98xWoX', "50%28U$^r=wGyxHy#Iz|TKu9A`RiM~", ".0wapU81)B$yr5,AJ+l|Xr81tDX/2Coy{W~V_sI1#C", "vTgTYd^_`k5TQE5?q%Da7aoRY71,1khb.sAIp27x", "6Ts]zy110,iC4k=", '@q%2*!}cM_{4b2,j"D$s@U=,6,q.;', "kR/MWszx", "CufE?jfw", ":sAbaUjx", 'm:N]9y_"', "3Jp?", "qSN?sWf", "3:0I", "+~UD+n%m", ">ZqR%+f", "dOlg?>|m", "VOwW~h|m", "OO!g", 'dOL"#0Mm', "3Ou>|>zm", 'XAL",Nom', 'tC}"z', 'dOL"|>zm', "XAlgV{}m", "M15Uthdm", "{X5ttNMm", '+:]tn"dm', 's:h>"Gzm', 'WA"x4LZm', 'dOL"|>A&sr', "1IotW+jr;}", "D|,wGGe)sr", "K1wWD{zm", 'tih>%"S<', "(aat`", "&Olg", "!OLxr", "1CKt&", "W6c:loIm", "]%eR`", "K1:ty=?m", "tR:U&hf", "K1:t`NVm", "XA5t,>C<", "WA2tJ{6m", '&ih>%"f', "K1:t`Nb&sr", 't%|"vN]r>j', "BF:UOxrGw", "6L`~_d~1", "$=bwtY(:", '7CWw8L@(d{/?l4S.m"nxoof_!*qbZ<S.!`k}!m7ep]bXy9mC<CEsx', '(d^}JZchHQ*ARlW{goC/zz8.jU%;vqW{At2$99YOgJ*Nb~R"if', '~W.Ua"Y^hv,!j)[00WXkp2aJ|(6?waSplZD?B', "C![J", "6sS^", "[u,8", "9n&>", "O],8", "LiVqgDh1", "bApaRdy6", "J%}zh3ww", "[uz>5", "1`g>", "<@q^", "u%2U", '~O}"NG1m', "<8_gI(bm", "V|+>GG|m", "2RQU", "71eR", "sC:t7LZm", "]xQU", "VCQt0>}m", "CieyC{?m", "nszg{Gzm", "cZ+uJ{f", "N*aW_dFm", "z8ao", "*+=hnWf6", '0"&tpa1b', "zHS.AqV", "4<3CO1lm", "HhaWE,vm", "SHO`|7{w", "TmF1^YZa", "e=@!k[4JD1/&b%{?K;F~__#)$cmnZ2{?$G,W$KeMyXnjB7K=2=oQ~", 'Cqv1M2]Z6A8[>E0Sz9xr::nd5k%F340S[jJDww<azM8lI;>t"u', '5g6J!CP8["e9WkE$$gn|v.!ZqibQ~!Rvx>(QY', "t9EZ", "p8Ro0cI", "S_|8N6d/", "1R]Pe", '=:h>"Gzm', 'VCQt2"Ym']), bB(Pc = function(...cB) {
      bB(cB[tB[12]] = tB[1], cB[-tB[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], cB[tB[2]] = tB[17], cB[tB[13]] = []);
      try {
        bB(cB[tB[2]] = Object, cB[tB[13]][tB[26]]("".__proto__.constructor.name))
      } catch (Mc) {}
      cB: for (cB[tB[14]] = tB[1]; cB[tB[14]] < cB[-tB[15]][tB[12]]; cB[tB[14]]++) try {
        for (cB[tB[2]] = cB[-tB[15]][cB[tB[14]]](), cB[tB[9]] = tB[1]; cB[tB[9]] < cB[tB[13]][tB[12]]; cB[tB[9]]++)
          if (typeof cB[tB[2]][cB[tB[13]][cB[tB[9]]]] === tB[16]) continue cB;
        return cB[tB[2]]
      } catch (Mc) {}
      return cB[tB[2]] || this
    }() || {}, qB = Pc.TextDecoder, Oc = Pc.Uint8Array, Tc = Pc.QV, fc = Pc.String || String, mB = Pc.Array || Array, ec = function(...cB) {
      return bB(cB[tB[12]] = tB[1], cB[-tB[27]] = new mB(tB[44]), cB[tB[2]] = fc[tB[24]] || fc.fromCharCode, cB[tB[19]] = []),
        function(...Bc) {
          for (bB(Bc[tB[12]] = tB[2], Bc[tB[21]] = tB[17], Bc[tB[0]] = tB[17], Bc[tB[18]] = Bc[tB[1]][tB[12]], cB[tB[19]][tB[12]] = tB[1]), Bc[-tB[20]] = tB[1]; Bc[-tB[20]] < Bc[tB[18]];) bB(Bc[tB[0]] = Bc[tB[1]][Bc[-tB[20]]++], Bc[tB[0]] <= tB[65] ? Bc[tB[21]] = Bc[tB[0]] : Bc[tB[0]] <= 223 ? Bc[tB[21]] = (31 & Bc[tB[0]]) << tB[23] | Bc[tB[1]][Bc[-tB[20]]++] & tB[22] : Bc[tB[0]] <= 239 ? Bc[tB[21]] = (15 & Bc[tB[0]]) << tB[25] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[22]) << tB[23] | Bc[tB[1]][Bc[-tB[20]]++] & tB[22] : fc[tB[24]] ? Bc[tB[21]] = (Bc[tB[0]] & tB[18]) << 18 | (Bc[tB[1]][Bc[-tB[20]]++] & tB[22]) << tB[25] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[22]) << tB[23] | Bc[tB[1]][Bc[-tB[20]]++] & tB[22] : (Bc[tB[21]] = tB[22], Bc[-tB[20]] += tB[14]), cB[tB[19]][tB[26]](cB[-tB[27]][Bc[tB[21]]] || (cB[-tB[27]][Bc[tB[21]]] = cB[tB[2]](Bc[tB[21]]))));
          return cB[tB[19]].join("")
        }
    }()), Sc(tB[83]) in zB && function(...cB) {
      function Bc(...cB) {
        return cB[tB[12]] = tB[2], cB[tB[1]][tB[2]] * tB[29] + (cB[tB[1]][tB[1]] < tB[1] ? tB[28] | cB[tB[1]][tB[1]] : cB[tB[1]][tB[1]])
      }

      function nc(...cB) {
        switch (cB[tB[12]] = tB[2], ((cB[tB[1]] & tB[28]) !== tB[1]) * tB[2] + (cB[tB[1]] < tB[1]) * tB[19]) {
          case tB[1]:
            return [cB[tB[1]] % tB[28], Math.trunc(cB[tB[1]] / tB[29])];
          case tB[2]:
            return [cB[tB[1]] % tB[28] - tB[28], Math.trunc(cB[tB[1]] / tB[29]) + tB[2]];
          case tB[19]:
            return [((cB[tB[1]] + tB[28]) % tB[28] + tB[28]) % tB[28], Math.round(cB[tB[1]] / tB[29])];
          case tB[14]:
            return [cB[tB[1]] % tB[28], Math.trunc(cB[tB[1]] / tB[29])]
        }
      }
      cB[tB[12]] = tB[1], bB(cB[tB[30]] = Bc([tB[19], tB[35]]), cB[tB[0]] = Bc([tB[2], tB[19]]), cB[-tB[31]] = cB[tB[30]] + cB[tB[0]], cB[tB[13]] = cB[-tB[31]] - cB[tB[0]], cB[tB[32]] = cB[tB[13]] * tB[19], cB[tB[9]] = cB[tB[32]] / tB[19], console.log(nc(cB[-tB[31]])), console.log(nc(cB[tB[13]])), console.log(nc(cB[tB[32]])), console.log(nc(cB[tB[9]])))
    }();
    const pc = Ic()[Sc(tB[37])](),
      hc = Ic()[Sc(tB[37])](),
      aB = Ic()[Sc(tB[37])](),
      lc = Ic()[Sc(tB[37])](),
      Yc = Ic()[Sc(tB[37])](),
      Lc = Ic()[Sc(tB[37])](),
      gB = Ic()[Sc(tB[37])](),
      Uc = (...cB) => {
        function Bc(cB) {
          return typeof sc[cB] === tB[16] ? sc[cB] = function(cB) {
            var Bc, nc, Vc, Ic, rB, uc, sc;
            for (bB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = tB[1], rB = tB[1], uc = -tB[2]), sc = tB[1]; sc < nc; sc++) {
              var Mc = 'fc"DCP/g?SIZXh,BFQui}0Tj`M63!Vsr]{_5$mwbR@#:%L~9G<aNtKAYn&=|+E*Hq7>[yeOW4oJU.x(l2)kpdz81;^v'.indexOf(Bc[sc]);
              if (Mc !== -tB[2])
                if (uc < tB[1]) uc = Mc;
                else {
                  bB(uc += Mc * tB[37], Ic |= uc << rB, rB += (uc & tB[38]) > tB[39] ? tB[40] : tB[41]);
                  do {
                    bB(Vc.push(Ic & tB[11]), Ic >>= tB[3], rB -= tB[3])
                  } while (rB > tB[18]);
                  uc = -tB[2]
                }
            }
            return uc > -tB[2] && Vc.push((Ic | uc << rB) & tB[11]), yB(Vc)
          }(Mc[cB]) : sc[cB]
        }
        cB[tB[12]] = tB[14];
        const nc = Lc;
        return Ic()[Bc(92) + Bc(93)](nc, cB[tB[19]]), Ic()[Bc(94)](cB[tB[1]], nc, Ic()[Bc(95)](nc, cB[tB[2]]))
      };

    function bB() {
      bB = function() {}
    }
    uc = (...cB) => {
      function Bc(...cB) {
        return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[16] ? sc[cB[tB[1]]] = function(...cB) {
          for (bB(cB[tB[12]] = tB[2], cB[tB[45]] = 'f<ma8!w.URgH|B3O?jdr}lv~Y`1]z#&utDZKVsMTAJ;C4XI7bpo:$_6WPi^2%EnFe[k5L=+hqyxS>"N@{G(Q90)*/,c', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[tB[42]] = cB[tB[0]].length, cB[-tB[49]] = [], cB[tB[44]] = tB[1], cB[-tB[48]] = tB[1], cB[-tB[47]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[42]]; cB[tB[3]]++)
            if (cB[tB[46]] = cB[tB[45]].indexOf(cB[tB[0]][cB[tB[3]]]), cB[tB[46]] !== -tB[2])
              if (cB[-tB[47]] < tB[1]) cB[-tB[47]] = cB[tB[46]];
              else {
                bB(cB[-tB[47]] += cB[tB[46]] * tB[37], cB[tB[44]] |= cB[-tB[47]] << cB[-tB[48]], cB[-tB[48]] += (cB[-tB[47]] & tB[38]) > tB[39] ? tB[40] : tB[41]);
                do {
                  bB(cB[-tB[49]].push(cB[tB[44]] & tB[11]), cB[tB[44]] >>= tB[3], cB[-tB[48]] -= tB[3])
                } while (cB[-tB[48]] > tB[18]);
                cB[-tB[47]] = -tB[2]
              } return cB[-tB[47]] > -tB[2] && cB[-tB[49]].push((cB[tB[44]] | cB[-tB[47]] << cB[-tB[48]]) & tB[11]), yB(cB[-tB[49]])
        }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
      }
      cB[tB[12]] = tB[3], Bc(tB[48]) in zB && function(...cB) {
        bB(cB[tB[12]] = tB[1], cB[tB[21]] = function(...cB) {
          for (bB(cB[tB[12]] = tB[2], cB[tB[21]] = cB[tB[1]].length, cB[tB[19]] = [], cB[tB[42]] = tB[1]), cB[tB[50]] = tB[1]; cB[tB[50]] < cB[tB[21]]; cB[tB[50]]++) cB[tB[19]].push(cB[tB[50]] !== tB[1] && cB[tB[1]][cB[tB[50]]] > cB[tB[1]][cB[tB[50]] - tB[2]] ? cB[tB[19]][cB[tB[50]] - tB[2]] + tB[2] : tB[2]);
          for (cB[tB[32]] = cB[tB[21]] - tB[2]; cB[tB[32]] >= tB[1]; cB[tB[32]]--) cB[tB[32]] !== cB[tB[21]] - tB[2] && cB[tB[1]][cB[tB[32]]] > cB[tB[1]][cB[tB[32]] + tB[2]] && (cB[tB[19]][cB[tB[32]]] = Math.max(cB[tB[19]][cB[tB[32]]], cB[tB[19]][cB[tB[32]] + tB[2]] + tB[2])), cB[tB[42]] += cB[tB[19]][cB[tB[32]]];
          return cB[tB[42]]
        }, console.log(cB[tB[21]]))
      }();
      const nc = cB[tB[1]][Bc(tB[51])][Bc(98) + Bc(99) + Bc(100)](cB[tB[2]]);
      cB[tB[21]] = cB[tB[1]][Bc(tB[51])][Bc(tB[57]) + Bc(tB[58]) + Bc(tB[31]) + Bc(tB[59])](nc);
      const Vc = cB[tB[21]] === tB[54] ? cB[tB[1]][Bc(tB[51])][Bc(tB[60]) + Bc(tB[61]) + Bc(tB[27]) + Bc(tB[62])](cB[tB[2]], Bc(tB[36]) + Bc(tB[52]) + Bc(tB[53]) + tB[32]) : cB[tB[21]][Bc(tB[36]) + Bc(tB[52]) + Bc(tB[53]) + tB[32]],
        uc = cB[tB[21]] === tB[54] ? cB[tB[1]][Bc(tB[51])][Bc(112) + Bc(113) + Bc(114)](cB[tB[2]], Bc(tB[45]) + Bc(tB[55]) + Bc(tB[56])) : cB[tB[21]][Bc(tB[45]) + Bc(tB[55]) + Bc(tB[56])];
      bB(Ic()[Bc(118)](pc, tB[1], tB[1], cB[tB[8]]), Ic().fu(pc, pc, Ic()[Bc(119)], cB[tB[14]].heading), Ic()[Bc(120)](gB, cB[tB[35]].Qu), gB[tB[2]] = tB[1]);
      const Pc = cB[tB[19]][Bc(121) + Bc(122)]();
      if (bB(cB[tB[21]] = cB[tB[1]][Bc(tB[51])][Bc(tB[57]) + Bc(tB[58]) + Bc(tB[31]) + Bc(tB[59])](nc), cB[tB[0]] = cB[tB[21]] === tB[54] ? cB[tB[1]][Bc(tB[51])][Bc(tB[60]) + Bc(tB[61]) + Bc(tB[27]) + Bc(tB[62])](cB[tB[2]], Bc(tB[63]) + Bc(tB[64])) : cB[tB[21]][Bc(tB[63]) + Bc(tB[64])]), !Pc && Ic()[tB[72]](gB) && (cB[tB[21]] === tB[54] ? cB[tB[1]][Bc(tB[51])][Bc(tB[60]) + Bc(tB[61]) + Bc(tB[27]) + Bc(tB[62])](cB[tB[2]], Bc(tB[80]) + Bc(126) + Bc(tB[65]) + Bc(tB[44])) : cB[tB[21]][Bc(129) + Bc(130) + Bc(131)])) {
        function mB(...cB) {
          for (bB(cB[tB[12]] = tB[2], cB[tB[67]] = 'N1y#`z|~^8>v@x!u{+0_;&7[*2]95<.6"%/:rtAlVRBnFbLOahkiGgeKfZoSsUdm,CpMW?DEJYXq)QjcHw}TI34(=P$', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[tB[14]] = cB[tB[0]].length, cB[tB[70]] = [], cB[tB[32]] = tB[1], cB[-tB[69]] = tB[1], cB[tB[68]] = -tB[2]), cB[tB[66]] = tB[1]; cB[tB[66]] < cB[tB[14]]; cB[tB[66]]++)
            if (cB[tB[46]] = cB[tB[67]].indexOf(cB[tB[0]][cB[tB[66]]]), cB[tB[46]] !== -tB[2])
              if (cB[tB[68]] < tB[1]) cB[tB[68]] = cB[tB[46]];
              else {
                bB(cB[tB[68]] += cB[tB[46]] * tB[37], cB[tB[32]] |= cB[tB[68]] << cB[-tB[69]], cB[-tB[69]] += (cB[tB[68]] & tB[38]) > tB[39] ? tB[40] : tB[41]);
                do {
                  bB(cB[tB[70]].push(cB[tB[32]] & tB[11]), cB[tB[32]] >>= tB[3], cB[-tB[69]] -= tB[3])
                } while (cB[-tB[69]] > tB[18]);
                cB[tB[68]] = -tB[2]
              } return cB[tB[68]] > -tB[2] && cB[tB[70]].push((cB[tB[32]] | cB[tB[68]] << cB[-tB[69]]) & tB[11]), yB(cB[tB[70]])
        }

        function ec(...cB) {
          return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[16] ? sc[cB[tB[1]]] = mB(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
        }

        function Sc(...cB) {
          cB[tB[12]] = tB[1]
        }
        ec(132) + "1" in zB && Sc(), bB(Uc(hc, pc, gB), Uc(aB, gB, pc), Ic()[ec(138)](lc, gB, aB));
        const Lc = Ic()[ec(139)](gB),
          Zc = Ic()[ec(140)](pc, gB) / cB[tB[8]] / Lc,
          Qc = Math[ec(tB[75])](Zc, tB[1]) + tB[2];
        if (cB[tB[8]] * cB[tB[8]] < Ic()[tB[72]](aB)) {
          function Cc(...cB) {
            function Bc(...cB) {
              return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[16] ? sc[cB[tB[1]]] = function(...cB) {
                for (bB(cB[tB[12]] = tB[2], cB[tB[21]] = '&w61;#vLI%80/xpl`ty)cqD<GV]nUs.Rz[,@!_iA(ugK9SJ2maTH+:5h7*YZE$={Bre}O|3d"~FfXCQ>4bPWkN^jMo?', cB[tB[19]] = "" + (cB[tB[1]] || ""), cB[tB[14]] = cB[tB[19]].length, cB[-tB[74]] = [], cB[tB[32]] = tB[1], cB[tB[8]] = tB[1], cB[tB[18]] = -tB[2]), cB[tB[33]] = tB[1]; cB[tB[33]] < cB[tB[14]]; cB[tB[33]]++)
                  if (cB[tB[73]] = cB[tB[21]].indexOf(cB[tB[19]][cB[tB[33]]]), cB[tB[73]] !== -tB[2])
                    if (cB[tB[18]] < tB[1]) cB[tB[18]] = cB[tB[73]];
                    else {
                      bB(cB[tB[18]] += cB[tB[73]] * tB[37], cB[tB[32]] |= cB[tB[18]] << cB[tB[8]], cB[tB[8]] += (cB[tB[18]] & tB[38]) > tB[39] ? tB[40] : tB[41]);
                      do {
                        bB(cB[-tB[74]].push(cB[tB[32]] & tB[11]), cB[tB[32]] >>= tB[3], cB[tB[8]] -= tB[3])
                      } while (cB[tB[8]] > tB[18]);
                      cB[tB[18]] = -tB[2]
                    } return cB[tB[18]] > -tB[2] && cB[-tB[74]].push((cB[tB[32]] | cB[tB[18]] << cB[tB[8]]) & tB[11]), yB(cB[-tB[74]])
              }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
            }
            cB[tB[12]] = tB[1];
            const nc = require("path"),
              {
                version: Vc
              } = require("../../package"),
              {
                version: Ic
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: rB
              } = require("@redacted/components/package"),
              {
                sdkVersion: uc
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), nc.resolve(__dirname, Bc(tB[34]) + Bc(144) + "js")
          }
          ec(142) + tB[9] in zB && Cc(), Ic()[ec(tB[43])](pc, pc, aB, Qc)
        }
        bB(cB[tB[0]] = (0, rB.v)(cB[tB[0]], 1, Math[ec(tB[75])](tB[2], Math[ec(146)](tB[1], -Zc, tB[2] - Lc / cB[tB[8]]))), Ic()[ec(147)](pc, pc, lc))
      }
      const qB = Yc;
      bB(Ic()[Bc(tB[10])](qB, pc, gB), qB[tB[2]] = tB[1], cB[-tB[39]] = Ic()[Bc(149)](qB)), Pc || (cB[-tB[39]] *= cB[tB[0]]);
      const Oc = cB[tB[23]][Bc(150) + Bc(151) + Bc(152)],
        Tc = Oc ? Math[Bc(153)](Oc, cB[-tB[39]]) : cB[-tB[39]];
      Ic()[Bc(154) + Bc(155)](qB, qB);
      const fc = cB[tB[18]] !== tB[54] && void 0 !== cB[tB[18]] ? cB[tB[18]] : cB[tB[23]][Bc(156) + Bc(157) + Bc(tB[71]) + Bc(159)];
      if (Tc > tB[1]) {
        function vB(...cB) {
          for (bB(cB[tB[12]] = tB[2], cB[-tB[77]] = 'I/mXGBfSo8C`g3><^Jw:vK]{;ehij40PW[O5NxlnFA+*q@_u"dQRkHU?$YEyD).zp9r=t}2cZ%~&b,1s|7MaL6(#VT!', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[-tB[76]] = cB[tB[0]].length, cB[tB[13]] = [], cB[tB[45]] = tB[1], cB[tB[9]] = tB[1], cB[tB[18]] = -tB[2]), cB[tB[33]] = tB[1]; cB[tB[33]] < cB[-tB[76]]; cB[tB[33]]++)
            if (cB[tB[73]] = cB[-tB[77]].indexOf(cB[tB[0]][cB[tB[33]]]), cB[tB[73]] !== -tB[2])
              if (cB[tB[18]] < tB[1]) cB[tB[18]] = cB[tB[73]];
              else {
                bB(cB[tB[18]] += cB[tB[73]] * tB[37], cB[tB[45]] |= cB[tB[18]] << cB[tB[9]], cB[tB[9]] += (cB[tB[18]] & tB[38]) > tB[39] ? tB[40] : tB[41]);
                do {
                  bB(cB[tB[13]].push(cB[tB[45]] & tB[11]), cB[tB[45]] >>= tB[3], cB[tB[9]] -= tB[3])
                } while (cB[tB[9]] > tB[18]);
                cB[tB[18]] = -tB[2]
              } return cB[tB[18]] > -tB[2] && cB[tB[13]].push((cB[tB[45]] | cB[tB[18]] << cB[tB[9]]) & tB[11]), yB(cB[tB[13]])
        }

        function Dc(cB) {
          return typeof sc[cB] === tB[16] ? sc[cB] = vB(Mc[cB]) : sc[cB]
        }
        let Nc = cB[tB[19]][Dc(tB[84]) + Dc(161)] * fc;
        if (!Pc) {
          function oc(...cB) {
            for (bB(cB[tB[12]] = tB[2], cB[tB[2]] = 'V6b{PjwCxU.Y5m8>#)r@/D`+=p"sSelLt9^0EH$T*n]dI<!32_|&(c1RQ:gyvozF7BJu4O%?khNW,ia~Aq}KX;M[ZfG', cB[tB[19]] = "" + (cB[tB[1]] || ""), cB[tB[42]] = cB[tB[19]].length, cB[tB[35]] = [], cB[tB[32]] = tB[1], cB[tB[23]] = tB[1], cB[-tB[78]] = -tB[2]), cB[-tB[60]] = tB[1]; cB[-tB[60]] < cB[tB[42]]; cB[-tB[60]]++)
              if (cB[tB[79]] = cB[tB[2]].indexOf(cB[tB[19]][cB[-tB[60]]]), cB[tB[79]] !== -tB[2])
                if (cB[-tB[78]] < tB[1]) cB[-tB[78]] = cB[tB[79]];
                else {
                  bB(cB[-tB[78]] += cB[tB[79]] * tB[37], cB[tB[32]] |= cB[-tB[78]] << cB[tB[23]], cB[tB[23]] += (cB[-tB[78]] & tB[38]) > tB[39] ? tB[40] : tB[41]);
                  do {
                    bB(cB[tB[35]].push(cB[tB[32]] & tB[11]), cB[tB[32]] >>= tB[3], cB[tB[23]] -= tB[3])
                  } while (cB[tB[23]] > tB[18]);
                  cB[-tB[78]] = -tB[2]
                } return cB[-tB[78]] > -tB[2] && cB[tB[35]].push((cB[tB[32]] | cB[-tB[78]] << cB[tB[23]]) & tB[11]), yB(cB[tB[35]])
          }

          function Wc(...cB) {
            return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[16] ? sc[cB[tB[1]]] = oc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
          }
          Wc(162), Nc *= cB[tB[19]][Wc(163) + Wc(tB[6])]
        }
        let Ec = cB[tB[19]][Dc(165) + Dc(166) + "ss"] * Tc;
        if (Tc < .3) {
          function wc(...cB) {
            for (bB(cB[tB[12]] = tB[2], cB[-tB[82]] = '>6w23~Hgh}De[WkFGBYNi4z+@$*cL`aP"/o=]J%VbAu5?&<sU:{178p)C0yZX,jtQMT(vSfRqIlOx^9Ed.;mn#K|r!_', cB[tB[83]] = "" + (cB[tB[1]] || ""), cB[tB[42]] = cB[tB[83]].length, cB[tB[87]] = [], cB[tB[84]] = tB[1], cB[-tB[86]] = tB[1], cB[tB[7]] = -tB[2]), cB[-tB[85]] = tB[1]; cB[-tB[85]] < cB[tB[42]]; cB[-tB[85]]++)
              if (cB[tB[73]] = cB[-tB[82]].indexOf(cB[tB[83]][cB[-tB[85]]]), cB[tB[73]] !== -tB[2])
                if (cB[tB[7]] < tB[1]) cB[tB[7]] = cB[tB[73]];
                else {
                  bB(cB[tB[7]] += cB[tB[73]] * tB[37], cB[tB[84]] |= cB[tB[7]] << cB[-tB[86]], cB[-tB[86]] += (cB[tB[7]] & tB[38]) > tB[39] ? tB[40] : tB[41]);
                  do {
                    bB(cB[tB[87]].push(cB[tB[84]] & tB[11]), cB[tB[84]] >>= tB[3], cB[-tB[86]] -= tB[3])
                  } while (cB[-tB[86]] > tB[18]);
                  cB[tB[7]] = -tB[2]
                } return cB[tB[7]] > -tB[2] && cB[tB[87]].push((cB[tB[84]] | cB[tB[7]] << cB[-tB[86]]) & tB[11]), yB(cB[tB[87]])
          }

          function kB(...cB) {
            return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[16] ? sc[cB[tB[1]]] = wc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
          }

          function Xc(...cB) {
            cB[tB[12]] = tB[1]
          }
          kB(167) in zB && Xc(), Ec *= Tc
        }
        Nc > Ec && (Nc = Ec), bB(Ic()[Dc(173)](qB, qB, Nc), cB[tB[35]][Dc(174) + Dc(175)](qB))
      }
      cB[tB[35]][Bc(176) + tB[89]] = cB[tB[19]][Bc(177) + Bc(tB[52]) + tB[89]] * (Pc ? Vc : uc)
    }
  },
  36197: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      e: () => sc
    });
    var Vc = nc(36204),
      Ic = nc(1534);
    const rB = 2,
      uc = 1,
      sc = {
        ku: 1,
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

    function Mc(cB, Bc, nc, sc, Mc, Pc, qB) {
      if (Mc.speed) return (0, Vc.e)(Bc, nc, sc, Mc, Pc, qB, cB), void(Mc.ticksToReachMaxIdleFriction = rB);
      const Oc = sc.isOnGround(),
        Tc = Bc.bloxd.getSyncedClientOptions(Bc.bloxd.getPlayerReader(nc)),
        fc = null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "groundFrictionScale") : Tc.groundFrictionScale,
        mB = null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "airFrictionScale") : Tc.airFrictionScale,
        ec = Oc ? fc : mB,
        tB = Math.max(uc, ec),
        Sc = Mc.ticksToReachMaxIdleFriction / rB,
        yB = (0, Ic.v)(tB, ec, Sc);
      Pc.friction = cB.standingFriction * ((null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "airMomentumConservation") : Tc.airMomentumConservation) ? yB : ec), Mc.ticksToReachMaxIdleFriction > 0 && Mc.ticksToReachMaxIdleFriction--
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);