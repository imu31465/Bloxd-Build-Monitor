export const id = 243;
export const ids = [243];
export const modules = {
  38477: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(38486);
    const sD = [0, 0, 0];
    class KD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD;
        this.pool = DD, this.origin = zD, this.count = 0, this.free = []
      }
      take() {
        var DD;
        const zD = null !== (DD = this.free.pop()) && void 0 !== DD ? DD : this.count++;
        return zD >= this.pool.bA && this.pool.grow(Math.max(2 * this.pool.bA, zD + 1)), this.hide(zD), zD
      }
      release(DD) {
        this.hide(DD), this.free.push(DD)
      }
      write(DD, zD, wD, sD) {
        const {
          records: KD
        } = this.pool, {
          origin: rD
        } = this, LD = DD * pD.c;
        KD[LD] = zD - rD[0], KD[LD + 1] = wD - rD[1], KD[LD + 2] = sD - rD[2], KD[LD + pD.e] = 0, this.pool.markDirty(DD)
      }
      hide(DD) {
        this.pool.records[DD * pD.c + pD.e] = 1, this.pool.markDirty(DD)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class rD {
      constructor(DD, zD, wD) {
        this.api = DD, this.model = zD, this.initialCapacity = wD, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(DD) {
        let zD = this.kinds.get(DD);
        if (void 0 === zD) {
          const wD = this.api.createInstancePool({
            ...this.model,
            item: DD
          }, this.initialCapacity);
          null === wD || void 0 === wD || wD.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zD = wD && new KD(wD, this.origin), this.kinds.set(DD, zD)
        }
        return zD
      }
      follow(DD) {
        const {
          origin: zD
        } = this;
        if (Math.abs(DD[0] - zD[0]) <= 512 && Math.abs(DD[1] - zD[1]) <= 512 && Math.abs(DD[2] - zD[2]) <= 512) return !1;
        zD[0] = Math.floor(DD[0]), zD[1] = Math.floor(DD[1]), zD[2] = Math.floor(DD[2]);
        for (const wD of this.kinds.values()) null === wD || void 0 === wD || wD.pool.setOrigin(zD[0], zD[1], zD[2]);
        return !0
      }
      commit() {
        for (const DD of this.kinds.values()) null === DD || void 0 === DD || DD.commit()
      }
      dispose() {
        for (const DD of this.kinds.values()) null === DD || void 0 === DD || DD.dispose();
        this.kinds.clear()
      }
    }
  },
  38502: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      g: () => LD,
      j: () => cD
    });
    const pD = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      sD = [0, 1, 2, 0, 2, 3],
      KD = [4, 5];

    function rD(DD, zD, wD, pD, sD) {
      for (let rD = 0; rD < 6; rD++) KD.includes(rD) === sD && gD(DD, zD, wD, pD, rD)
    }

    function LD(DD, zD, wD, pD) {
      for (let sD = 0; sD < 6; sD++) gD(DD, zD, wD, pD, sD)
    }

    function cD(DD, zD, wD, KD, rD) {
      for (let LD = 0; LD < 6; LD++)
        for (const cD of [0, 1]) {
          const [gD, RD, AD] = [cD + 2, cD + 1, (cD + 3) % 4], UD = DD.length / 3;
          for (const [zD, sD] of [
              [cD, RD],
              [gD, RD],
              [gD, AD],
              [cD, AD]
            ])
            for (let cD = 0; cD < 3; cD++) {
              const gD = pD[3 * (4 * LD + zD) + cD],
                RD = pD[3 * (4 * LD + sD) + cD];
              DD.push((gD + (RD - gD) * rD) * KD / 2 + wD[cD])
            }
          for (const DD of sD) zD.push(UD + DD)
        }
    }

    function gD(DD, zD, wD, KD, rD) {
      let [LD, cD, gD] = wD, [RD, AD, UD] = KD;
      const fD = DD.length / 3;
      for (let sD = 4 * rD; sD < 4 * rD + 4; sD++) DD.push(pD[3 * sD] * RD / 2 + LD, pD[3 * sD + 1] * AD / 2 + cD, pD[3 * sD + 2] * UD / 2 + gD);
      for (const pD of sD) zD.push(fD + pD)
    }
  },
  38465: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => Jn
    });
    var pD = wD(58);
    const sD = [{
        nameKey: "tierBurner",
        cost: [],
        islandRadius: 11.5,
        machineAllowance: 16,
        beltAllowance: 64,
        newDeposits: [],
        unlocks: [],
        reward: null
      }, {
        nameKey: "tierCurrent",
        cost: [{
          item: "Iron Bar",
          amount: 40
        }, {
          item: "Glass",
          amount: 12
        }, {
          item: "Copper Bar",
          amount: 10
        }],
        islandRadius: 17,
        machineAllowance: 40,
        beltAllowance: 256,
        newDeposits: [{
          block: "Copper Deposit",
          offset: [-14, 0, 4]
        }],
        unlocks: ["Parts Bench", "Generator", "Wire Mill", "Press", "Motor", "Splitter", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Iron Hammer"],
        reward: null
      }, {
        nameKey: "tierPrecision",
        cost: [{
          item: "Motor",
          amount: 8
        }, {
          item: "Copper Wire",
          amount: 32
        }, {
          item: "Iron Plate",
          amount: 32
        }, {
          item: "Gold Bar",
          amount: 4
        }, {
          item: "Relay Coil",
          amount: 2
        }],
        islandRadius: 24,
        machineAllowance: 80,
        beltAllowance: 384,
        newDeposits: [{
          block: "Gold Deposit",
          offset: [16, 0, -14]
        }, {
          block: "Coal Deposit",
          offset: [-20, 0, 10]
        }],
        unlocks: ["Alloy Kiln", "Electric Drill", "Assembler", "Power Coupler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Logic Board", "Machine Hull", "Ore Lens", "Vein Breaker", "Arc Caster"],
        reward: null
      }, {
        nameKey: "tierVoltaic",
        cost: [{
          item: "Logic Board",
          amount: 12
        }, {
          item: "Steel Bar",
          amount: 48
        }, {
          item: "Motor",
          amount: 16
        }, {
          item: "Raw Voltite",
          amount: 8
        }, {
          item: "Diamond",
          amount: 2
        }],
        islandRadius: 32,
        machineAllowance: 140,
        beltAllowance: 512,
        newDeposits: [{
          block: "Iron Deposit",
          offset: [-22, 0, -20]
        }, {
          block: "Voltite Deposit",
          offset: [26, 0, 12]
        }],
        unlocks: ["Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Voltite Cell", "Sky Pack", "Charge Vault", "Homing Beacon", "Pull Charm"],
        reward: null
      }, {
        nameKey: "tierStarforge",
        cost: [{
          item: "Voltite Cell",
          amount: 12
        }, {
          item: "Logic Board",
          amount: 16
        }, {
          item: "Machine Hull",
          amount: 8
        }, {
          item: "Steel Bar",
          amount: 128
        }, {
          item: "Moonstone",
          amount: 4
        }, {
          item: "Diamond",
          amount: 4
        }],
        islandRadius: 42,
        machineAllowance: 220,
        beltAllowance: 768,
        newDeposits: [{
          block: "Copper Deposit",
          offset: [30, 0, 22]
        }, {
          block: "Stone Deposit",
          offset: [-36, 0, 8]
        }],
        unlocks: ["Crystal Vat", "Star Alloy", "Comet Core", "Starbore Drill", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"],
        reward: null
      }, {
        nameKey: "tierStage1",
        stage: 1,
        cost: [{
          item: "Star Alloy",
          amount: 8
        }, {
          item: "Machine Hull",
          amount: 20
        }, {
          item: "Comet Core",
          amount: 1
        }],
        charge: {
          items: [{
            item: "Steel Bar",
            amount: 60
          }],
          powerPerS: 0,
          seconds: 90
        },
        islandRadius: 46,
        machineAllowance: 248,
        beltAllowance: 912,
        newDeposits: [],
        unlocks: ["Belt Tunnel"],
        reward: null
      }, {
        nameKey: "tierStage2",
        stage: 2,
        cost: [{
          item: "Star Alloy",
          amount: 12
        }, {
          item: "Diamond",
          amount: 6
        }, {
          item: "Voltite Cell",
          amount: 32
        }, {
          item: "Comet Core",
          amount: 1
        }],
        charge: {
          items: [{
            item: "Iron Plate",
            amount: 60
          }, {
            item: "Copper Wire",
            amount: 120
          }],
          powerPerS: 0,
          seconds: 90
        },
        islandRadius: 50,
        machineAllowance: 280,
        beltAllowance: 1072,
        newDeposits: [{
          block: "Gold Deposit",
          offset: [-8, 0, 46]
        }],
        unlocks: [],
        reward: "Iron Trophy"
      }, {
        nameKey: "tierStage3",
        stage: 3,
        cost: [{
          item: "Star Alloy",
          amount: 16
        }, {
          item: "Logic Board",
          amount: 48
        }, {
          item: "Motor",
          amount: 32
        }, {
          item: "Comet Core",
          amount: 2
        }],
        charge: {
          items: [{
            item: "Logic Board",
            amount: 20
          }],
          powerPerS: 0,
          seconds: 120
        },
        islandRadius: 54,
        machineAllowance: 316,
        beltAllowance: 1248,
        newDeposits: [],
        unlocks: [],
        reward: "Gold Trophy"
      }, {
        nameKey: "tierStage4",
        stage: 4,
        cost: [{
          item: "Star Alloy",
          amount: 24
        }, {
          item: "Diamond",
          amount: 12
        }, {
          item: "Moonstone",
          amount: 8
        }, {
          item: "Comet Core",
          amount: 2
        }],
        charge: {
          items: [{
            item: "Voltite Cell",
            amount: 20
          }],
          powerPerS: 200,
          seconds: 120
        },
        islandRadius: 58,
        machineAllowance: 356,
        beltAllowance: 1440,
        newDeposits: [],
        unlocks: [],
        reward: "Diamond Trophy"
      }, {
        nameKey: "tierStage5",
        stage: 5,
        cost: [{
          item: "Star Alloy",
          amount: 32
        }, {
          item: "Voltite Cell",
          amount: 64
        }, {
          item: "Machine Hull",
          amount: 20
        }, {
          item: "Comet Core",
          amount: 3
        }],
        charge: {
          items: [{
            item: "Star Alloy",
            amount: 10
          }, {
            item: "Voltite Cell",
            amount: 10
          }, {
            item: "Steel Bar",
            amount: 60
          }],
          powerPerS: 300,
          seconds: 120
        },
        islandRadius: 62,
        machineAllowance: 400,
        beltAllowance: 1648,
        newDeposits: [],
        unlocks: ["Forge Hopper", "Starframe"],
        reward: "Moonstone Trophy"
      }, {
        nameKey: "tierIsotope",
        reactorTier: 1,
        cost: [{
          item: "Uranium Grit",
          amount: 256
        }, {
          item: "Star Alloy",
          amount: 8
        }, {
          item: "Comet Core",
          amount: 3
        }, {
          item: "Glass",
          amount: 16
        }],
        charge: {
          items: [{
            item: "Uranium Grit",
            amount: 24
          }, {
            item: "Star Alloy",
            amount: 4
          }],
          powerPerS: 200,
          seconds: 180
        },
        islandRadius: 66,
        machineAllowance: 448,
        beltAllowance: 1872,
        newDeposits: [{
          block: "Uranium Deposit",
          offset: [45, 0, 44]
        }, {
          block: "Uranium Deposit",
          offset: [-44, 0, -45]
        }],
        unlocks: ["Atomic Bench", "Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Heat Exchanger", "Synthesizer", "Containment Plate", "Battery Cell"],
        reward: null
      }, {
        nameKey: "tierFission",
        reactorTier: 2,
        cost: [{
          item: "Uranium Pellet",
          amount: 16
        }, {
          item: "Heat Exchanger",
          amount: 8
        }, {
          item: "Star Alloy",
          amount: 16
        }, {
          item: "Comet Core",
          amount: 2
        }],
        charge: {
          items: [{
            item: "Uranium Pellet",
            amount: 6
          }],
          powerPerS: 300,
          seconds: 120
        },
        islandRadius: 70,
        machineAllowance: 500,
        beltAllowance: 2112,
        newDeposits: [{
          block: "Uranium Deposit",
          offset: [0, 0, 67]
        }],
        unlocks: ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Jet Chestplate", "Mob Farm", "Mob Cage"],
        reward: null
      }, {
        nameKey: "tierCritical",
        reactorTier: 3,
        cost: [{
          item: "Uranium Pellet",
          amount: 24
        }, {
          item: "Spent Pellet",
          amount: 8
        }, {
          item: "Star Alloy",
          amount: 24
        }, {
          item: "Comet Core",
          amount: 3
        }],
        charge: {
          items: [{
            item: "Uranium Pellet",
            amount: 4
          }],
          powerPerS: 2e3,
          seconds: 120
        },
        islandRadius: 74,
        machineAllowance: 556,
        beltAllowance: 2368,
        newDeposits: [{
          block: "Uranium Deposit",
          offset: [71, 0, 0]
        }],
        unlocks: ["Express Belt", "Fast Loader", "Advanced Coupler", "Dense Silo", "Uranium Glass", "Glow Lamp", "Reactor Blueprint", "Coolant Mixer"],
        reward: null
      }, {
        nameKey: "tierCollider",
        reactorTier: 4,
        cost: [{
          item: "Plutonium Pellet",
          amount: 2
        }, {
          item: "Battery Cell",
          amount: 4
        }, {
          item: "Star Alloy",
          amount: 16
        }, {
          item: "Glow Dust",
          amount: 16
        }, {
          item: "Comet Core",
          amount: 3
        }],
        charge: {
          items: [{
            item: "Glow Dust",
            amount: 4
          }],
          powerPerS: 1e4,
          seconds: 120
        },
        islandRadius: 78,
        machineAllowance: 616,
        beltAllowance: 2640,
        newDeposits: [{
          block: "Uranium Deposit",
          offset: [53, 0, -53]
        }],
        unlocks: ["Collider", "Laser", "Focus Lens", "Wireless Terminal", "Comet Beacon"],
        reward: null
      }, {
        nameKey: "tierNovaCore",
        reactorTier: 5,
        cost: [{
          item: "Nova Matter",
          amount: 8
        }, {
          item: "Uranium Pellet",
          amount: 32
        }, {
          item: "Plutonium Pellet",
          amount: 6
        }, {
          item: "Comet Core",
          amount: 3
        }],
        charge: {
          items: [{
            item: "Spent Pellet",
            amount: 4
          }, {
            item: "Plutonium Pellet",
            amount: 1
          }],
          powerPerS: 1e4,
          seconds: 120
        },
        islandRadius: 80,
        machineAllowance: 680,
        beltAllowance: 2928,
        newDeposits: [],
        unlocks: ["Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool", "Nova Coupler", "Pocket Terminal", "Atomic Bomb", "Nova Wrench", "Nova Bomb"],
        reward: "Deposit Seed (Uranium)"
      }],
      KD = 10;
    let rD = !0;

    function LD() {
      return rD
    }

    function cD(DD) {
      rD = DD
    }
    const gD = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function RD() {
      return rD ? sD.length : KD
    }

    function AD(DD) {
      var zD, wD;
      return null !== (zD = null === (wD = sD[DD - 1]) || void 0 === wD ? void 0 : wD.reactorTier) && void 0 !== zD ? zD : 0
    }

    function UD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AD(DD) > 0;
      return wD && !rD ? "hidden" : DD <= zD ? "open" : wD ? zD < 5 ? "hidden" : zD < KD ? "teaser" : "locked" : "locked"
    }

    function fD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: pD,
        n: sD
      } = GD(DD);
      return {
        key: zD[pD],
        params: {
          [pD]: wD ? String(sD) : sD
        }
      }
    }
    const ID = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function BD(DD, zD) {
      return AD(DD) > 0 && zD < KD
    }

    function GD(DD) {
      const zD = AD(DD);
      if (zD > 0) return {
        kind: "atomic",
        n: zD,
        short: `A${zD}`
      };
      const wD = function(DD) {
        return DD >= 6 && DD <= 10 ? DD - 6 + 1 : 0
      }(DD);
      return wD > 0 ? {
        kind: "stage",
        n: wD,
        short: `S${wD}`
      } : {
        kind: "tier",
        n: DD,
        short: String(DD)
      }
    }

    function hD(DD) {
      return sD[Math.max(1, Math.min(DD, sD.length)) - 1]
    }

    function nD(DD, zD) {
      return DD < zD ? function(DD) {
        var zD;
        return null !== (zD = sD[DD]) && void 0 !== zD ? zD : null
      }(DD) : null
    }
    const MD = "baf2coresubmit",
      OD = "baf2corebankpause",
      JD = "baf2coredeposit",
      ED = "baf2corechargepause";

    function QD(DD) {
      var zD;
      return null !== (zD = DD.baf2CoreOpen) && void 0 !== zD ? zD : KD
    }
    const XD = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function VD(DD) {
      return XD.includes(DD)
    }
    const PD = (DD, zD) => zD.map((zD => [zD, [DD]])),
      CD = Object.fromEntries([...PD("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...PD("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...PD("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...PD("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...PD("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...PD("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...PD("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...PD("Parts Bench", ["Focus Lens"]), ...PD("Machine Bench", ["Laser", "Collider"]), ...PD("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...PD("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...PD("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...PD("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...PD("Tool Bench", ["Mob Cage"]), ...PD("Tool Bench", ["Pocket Terminal"]), ...PD("Tool Bench", ["Comet Beacon"]), ...PD("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function xD(DD) {
      var zD;
      return null !== (zD = CD[DD]) && void 0 !== zD ? zD : ["Workbench"]
    }

    function TD(DD) {
      return xD(DD)[0]
    }
    sD.slice(1).map(((DD, zD) => `Core Tier ${zD+2}`));
    var bD = wD(9198);
    const jD = ["on", "hud", "off"];

    function dD(DD) {
      return "on" === DD
    }
    var SD = wD(351);
    const iD = "Mob Farm",
      lD = {
        Pig: 1,
        Cow: 1,
        Sheep: 1,
        Deer: 1,
        Stag: 1,
        "Draugr Zombie": 2,
        "Draugr Skeleton": 2,
        "Cave Golem": 3,
        "Magma Golem": 3
      },
      WD = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      ND = {
        1: 20,
        2: 60,
        3: 120
      },
      ZD = "baf2farmvoid",
      yD = "Caged ",
      kD = " Spawner Block";

    function mD(DD) {
      return `lifeform:${(0,SD.ue)(DD)}`
    }

    function eD(DD) {
      if (!DD) return null;
      if (DD.startsWith(yD)) {
        const zD = DD.slice(6);
        return WD.includes(zD) ? zD : null
      }
      if (DD.endsWith(kD)) {
        const zD = DD.slice(0, -14);
        return void 0 !== lD[zD] ? zD : null
      }
      return null
    }

    function oD(DD) {
      return !0 === DD.mobFarm
    }

    function aD(DD, zD) {
      return ND[lD[zD]] * DD.opMs / 1e3
    }
    const uD = new Map;
    const vD = "baf2islands",
      tD = "baf2islandnew";

    function FD(DD) {
      const zD = sD.findIndex((zD => zD.unlocks.includes(DD)));
      return zD < 0 ? 1 : zD + 1
    }

    function YD(DD) {
      return Math.floor(DD).toLocaleString("en-US")
    }
    var HD = wD(38413);
    const qD = "baf2terminaltake",
      Dz = "baf2terminalput",
      zz = ["one", "stack", "fill"];

    function wz(DD, zD, wD) {
      return `${qD} ${DD} ${zD} ${wD}`
    }

    function pz(DD, zD, wD) {
      return `${Dz} ${DD} ${zD} ${wD}`
    }

    function sz(DD) {
      return `${Dz} ${DD}`
    }
    const Kz = [
      [`${qD} `, "take"],
      [`${Dz} `, "put"]
    ];

    function rz(DD) {
      const zD = Kz.find((zD => {
        let [wD] = zD;
        return DD.startsWith(wD)
      }));
      if (!zD) return null;
      const [wD, pD] = zD, [sD, KD, ...rD] = DD.slice(wD.length).trim().split(" "), LD = Number(sD);
      if (!Number.isSafeInteger(LD) || LD <= 0) return null;
      if ("put" === pD && void 0 === KD) return {
        kind: "putAll",
        seq: LD
      };
      const cD = function(DD) {
        if (zz.includes(DD)) return DD;
        const zD = Number(DD);
        return /^\d+$/.test(DD) && Number.isSafeInteger(zD) && zD > 0 ? zD : null
      }(null !== KD && void 0 !== KD ? KD : "");
      return null === cD || 0 === rD.length ? null : {
        kind: pD,
        seq: LD,
        mode: cD,
        item: rD.join(" ")
      }
    }

    function Lz(DD, zD) {
      const wD = "number" === typeof DD ? DD : "one" === DD ? 1 : "stack" === DD ? 99 : zD;
      return Math.min(zD, wD)
    }

    function cz(DD, zD) {
      const wD = DD => "number" === typeof DD ? DD : "one" === DD ? 1 : 99;
      return "fill" === DD || "fill" === zD ? "fill" : wD(DD) + wD(zD)
    }

    function gz(DD, zD) {
      const wD = rz(DD),
        pD = rz(zD),
        sD = wD && pD ? function(DD, zD) {
          return "take" === DD.kind || "take" === zD.kind ? "take" === DD.kind && "take" === zD.kind && DD.item === zD.item ? {
            ...zD,
            mode: cz(DD.mode, zD.mode)
          } : null : "putAll" === DD.kind || "putAll" === zD.kind ? {
            kind: "putAll",
            seq: zD.seq
          } : DD.item === zD.item ? {
            ...zD,
            mode: cz(DD.mode, zD.mode)
          } : null
        }(wD, pD) : null;
      return sD ? "putAll" === (KD = sD).kind ? sz(KD.seq) : "put" === KD.kind ? pz(KD.seq, KD.mode, KD.item) : wz(KD.seq, KD.mode, KD.item) : null;
      var KD
    }
    const Rz = "baf2rx";

    function Az(DD, zD) {
      for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD];
      return [Rz, DD[0], DD[1], DD[2], zD, ...pD].join(" ")
    }
    const Uz = 2,
      fz = 4,
      Iz = 8,
      Bz = 16,
      Gz = 32,
      hz = 64,
      nz = 128,
      Mz = 256,
      Oz = 512,
      Jz = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Ez = [{
        item: "Raw Voltite",
        chance: .545
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }, {
        item: "Comet Shard",
        chance: .0025
      }, {
        item: "Dusk Moss",
        chance: .0025
      }];
    const Qz = "Biomass",
      Xz = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function Vz(DD) {
      return {
        input: Qz,
        inputAmount: 1,
        output: DD,
        outputAmount: 1
      }
    }
    const Pz = "baf2synth",
      Cz = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      xz = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Tz = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      bz = function(DD, zD) {
        return {
          input: DD,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: zD,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      jz = function(DD, zD) {
        return {
          ...bz(DD, zD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      dz = xz.map((DD => jz(DD, "Biomass", 2))),
      Sz = {
        "Burner Drill": {
          kind: "Burner Drill",
          opMs: 4e3,
          inputSlot: null,
          fuelSlot: 0,
          outputSlots: [1, 2, 3],
          recipes: []
        },
        Crusher: {
          kind: "Crusher",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [bz("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), bz("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), bz("Raw Gold", "Gold Grit", 2), bz("Messy Stone", "Sand"), bz("Gravel", "Sand"), bz("Raw Voltite", "Voltite Dust", 2), bz("Moonstone", "Moonstone Dust", 4), bz("Wheat Seeds", "Fertiliser"), bz("Raw Uranium", "Uranium Grit", 2), jz("Mossy Messy Stone", "Sand"), ...dz],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [bz("Iron Grit", "Iron Bar"), bz("Copper Grit", "Copper Bar"), bz("Gold Grit", "Gold Bar"), bz("Raw Iron", "Iron Bar"), bz("Raw Copper", "Copper Bar"), bz("Raw Gold", "Gold Bar"), bz("Sand", "Glass"), bz("Messy Stone", "Stone"), ...SD.Tc.map((DD => bz(DD, "Charcoal", 1, 4))), bz("Wheat", "Bread", 1, 2), ...xz.map(((DD, zD) => jz(DD, Tz[zD])))],
          couplable: !0
        },
        Generator: {
          kind: "Generator",
          opMs: 4e3,
          inputSlot: null,
          fuelSlot: 0,
          outputSlots: [],
          recipes: [],
          fuels: ["Coal", "Charcoal"],
          powerMade: 80
        },
        Press: {
          kind: "Press",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [bz("Iron Bar", "Iron Plate"), bz("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [bz("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [bz("Iron Grit", "Steel Bar", 1, 2)],
          fuels: ["Coal", "Charcoal"],
          couplable: !0
        },
        "Electric Drill": {
          kind: "Electric Drill",
          opMs: 2e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [0, 1, 2],
          recipes: [],
          powerPerOp: 16
        },
        Assembler: {
          kind: "Assembler",
          opMs: 6e3,
          inputSlot: null,
          inputSlots: [0, 1, 2, 3],
          fuelSlot: null,
          outputSlots: [4, 5, 6],
          recipes: [],
          powerPerOp: 48,
          bench: null
        },
        "Tree Cutter": {
          kind: "Tree Cutter",
          opMs: 4e3,
          inputSlot: null,
          fuelSlot: 0,
          outputSlots: [1, 2, 3],
          recipes: [],
          treeCutter: !0
        },
        "Volt Engine": {
          kind: "Volt Engine",
          opMs: 4e3,
          inputSlot: null,
          fuelSlot: 0,
          outputSlots: [],
          recipes: [],
          fuels: ["Voltite Cell"],
          powerMade: 400
        },
        "Deep Drill": {
          kind: "Deep Drill",
          opMs: 1e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [0, 1, 2],
          recipes: [],
          powerPerOp: 24
        },
        "Shatter Mill": {
          kind: "Shatter Mill",
          opMs: 1e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [bz("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), bz("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), bz("Raw Gold", "Gold Grit", 3), bz("Raw Voltite", "Voltite Dust", 3), bz("Messy Stone", "Sand", 2), bz("Gravel", "Sand", 2), bz("Moonstone", "Moonstone Dust", 6), bz("Raw Uranium", "Uranium Grit", 3), jz("Mossy Messy Stone", "Sand", 2), ...dz],
          powerPerOp: 24
        },
        "Sky Tap": {
          kind: "Sky Tap",
          opMs: 12e3,
          inputSlot: null,
          fuelSlot: null,
          outputSlots: [0, 1, 2],
          recipes: [],
          powerPerOp: 72,
          table: Jz
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [bz("Coal", "Diamond", 1, 24), bz("Voltite Dust", "Moonstone", 1, 12)],
          powerPerOp: 1200
        },
        Recycler: {
          kind: "Recycler",
          opMs: 6e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 48,
          recycles: !0
        },
        "Crop Harvester": {
          kind: "Crop Harvester",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [],
          powerPerOp: 16,
          field: !0
        },
        "Mob Farm": {
          kind: "Mob Farm",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3, 4, 5, 6],
          recipes: [],
          powerPerOp: 240,
          mobFarm: !0
        },
        ...HD.m
      },
      iz = {
        Crusher: [bz("Spent Pellet", "Glow Dust"), bz("Wheat Seeds", "Biomass"), bz("Wheat", "Biomass"), bz("Dead Bush", "Biomass"), bz("Dusk Moss", "Biomass"), bz("Rotten Flesh", "Biomass"), bz("Bone", "Biomass", 2)],
        "Shatter Mill": [bz("Spent Pellet", "Glow Dust"), bz("Wheat Seeds", "Biomass"), bz("Wheat", "Biomass"), bz("Dead Bush", "Biomass"), bz("Dusk Moss", "Biomass"), bz("Rotten Flesh", "Biomass"), bz("Bone", "Biomass", 2), ...SD.Tc.map((DD => bz(DD, "Biomass")))],
        Smelter: [bz("Biomass", "Fertiliser", 2)],
        Press: [bz("Coal", "Graphite", 1, 4)]
      },
      lz = "Power Coupler",
      Wz = "Advanced Coupler",
      Nz = "Nova Coupler",
      Zz = [{
        item: lz,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: Wz,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: Nz,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const yz = new Map;

    function kz(DD) {
      var zD, wD;
      return null !== (zD = null !== (wD = DD.fuelSlot) && void 0 !== wD ? wD : DD.couplerSlot) && void 0 !== zD ? zD : null
    }

    function mz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!DD.couplable) throw new Error(`${DD.kind} takes no Power Coupler`);
      let wD = yz.get(DD);
      wD || (wD = [], yz.set(DD, wD));
      let pD = wD[zD];
      if (!pD) {
        var sD;
        const {
          divisor: KD,
          powerPerS: rD
        } = Zz[zD - 1], LD = DD.opMs / KD, cD = void 0 !== DD.fluidMade || void 0 !== DD.cryoMade ? DD.powerPerOp : rD * LD / 1e3;
        pD = {
          ...DD,
          fuelSlot: null,
          couplerSlot: null !== (sD = kz(DD)) && void 0 !== sD ? sD : void 0,
          opMs: LD,
          powerPerOp: cD,
          coupled: !0
        }, zD > 1 && (pD = {
          ...pD,
          couplerLevel: zD
        }), wD[zD] = pD
      }
      return pD
    }
    const ez = new Map;
    const oz = new Map;

    function az(DD, zD) {
      if (null === zD || (wD = zD, !Xz.includes(wD))) return DD;
      var wD;
      let pD = oz.get(zD);
      return pD || (pD = {
        ...DD,
        recipes: [Vz(zD)]
      }, oz.set(zD, pD)), pD
    }

    function uz(DD) {
      return !0 === DD.synth
    }
    const vz = (DD, zD, wD, pD) => ({
        output: DD,
        outputAmount: zD,
        tier: wD,
        inputs: pD.map((DD => {
          let [zD, wD] = DD;
          return {
            item: zD,
            amount: wD
          }
        }))
      }),
      tz = Object.fromEntries([vz("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), vz("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), vz("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), vz("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), vz("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), vz("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), vz("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), vz("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), vz("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), vz("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), vz("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), vz("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), vz("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), vz("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), vz("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), vz("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), vz("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), vz("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), vz("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), vz("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), vz("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), vz("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), vz("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), vz("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), vz("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), vz("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), vz("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), vz("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), vz("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), vz("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((DD => [DD.output, DD]))),
      Fz = new Map;

    function Yz(DD, zD) {
      let wD = Sz[DD];
      if (zD.atomic && (wD = function(DD) {
          const zD = iz[DD.kind];
          if (!zD) return DD;
          let wD = ez.get(DD.kind);
          if (!wD) {
            const pD = new Set(zD.map((DD => DD.input))),
              sD = DD.recipes.filter((DD => !pD.has(DD.input)));
            wD = {
              ...DD,
              recipes: [...sD, ...zD]
            }, ez.set(DD.kind, wD)
          }
          return wD
        }(wD)), wD.synth) return az(wD, zD.taught);
      if (zD.coupled && wD.couplable) return mz(wD, zD.level);
      const pD = wD.inputSlots && null !== zD.taught ? tz[zD.taught] : void 0;
      if (!pD) return wD;
      const sD = `${DD}|${pD.output}`;
      let KD = Fz.get(sD);
      return KD || (KD = {
        ...wD,
        bench: pD
      }, Fz.set(sD, KD)), KD
    }
    const Hz = ["Diamond", "Moonstone"];

    function qz(DD) {
      return new Set(DD.flatMap((DD => DD.bonus ? [DD.output, DD.bonus.item] : [DD.output])).filter((DD => !Hz.includes(DD))))
    }
    const Dw = Object.values(Sz).flatMap((DD => DD.recipes));
    qz(Dw.filter((DD => !0 !== DD.nuclear))), qz([...Dw.filter((DD => !0 === DD.nuclear)), ...Object.values(iz).flat()]);

    function zw(DD) {
      return null === DD.inputSlot && void 0 === DD.inputSlots && void 0 === DD.powerMade && void 0 === DD.fluidMade && !DD.treeCutter && void 0 === DD.table
    }

    function ww(DD) {
      return !0 === DD.treeCutter
    }
    const pw = ["Voltite Cell"];

    function sw(DD) {
      var zD, wD;
      return null !== (zD = null === (wD = DD.fuels) || void 0 === wD ? void 0 : wD.some((DD => pw.includes(DD)))) && void 0 !== zD && zD
    }
    const Kw = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(SD.Tc.map((DD => [DD, 8e3]))),
        ...Object.fromEntries(SD.Dd.map((DD => [DD, 2e3]))),
        "Voltite Cell": 12e4
      },
      rw = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Lw = {
        "Uranium Deposit": 4e3
      };

    function gw(DD) {
      var zD;
      return null !== (zD = Object.keys(rw).find((zD => rw[zD] === DD))) && void 0 !== zD ? zD : null
    }

    function Rw(DD) {
      return Cz.includes(DD)
    }

    function Aw(DD) {
      return !0 !== DD.nuclear || LD()
    }
    var Uw = wD(338);
    var fw = wD(9264),
      Iw = wD(9210),
      Bw = wD(9271),
      Gw = wD(9262);
    const hw = "Reactor Controller",
      nw = "Reactor Port",
      Mw = "Battery Cell",
      Ow = ["fuel", "water", "waste"],
      Jw = {
        fuel: nw,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Ew = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Qw = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Xw = "Reactor Frame",
      Vw = "Reactor Glass",
      Pw = {
        edge: [Xw],
        cap: [Vw, nw],
        wall: [Vw, nw],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [hw]
      },
      Cw = {
        edge: [Mw],
        cap: [Mw],
        wall: [Mw],
        inside: [Mw],
        ctrl: [Mw]
      },
      xw = ["edge", "cap", "wall", "inside"],
      Tw = ["Reactor Slag"];

    function bw(DD) {
      return Tw.includes(jw(DD))
    }

    function jw(DD) {
      const zD = DD.indexOf("|");
      return zD < 0 ? DD : DD.slice(0, zD)
    }

    function dw(DD) {
      return jw(DD) === hw ? "reactor" : null
    }

    function Sw(DD) {
      return jw(DD) !== nw ? null : DD.endsWith("|Water") ? "water" : DD.endsWith("|Waste") ? "waste" : "fuel"
    }

    function iw(DD) {
      const zD = Sw(DD);
      return null === zD ? null : Nw(Jw[Ow[(Ow.indexOf(zD) + 1) % Ow.length]], function(DD) {
        return DD.includes(lw)
      }(DD))
    }
    const lw = "|meta|rot1|Formed",
      Ww = new Set([Xw, Vw, nw]);

    function Nw(DD, zD) {
      var wD;
      const pD = jw(DD);
      if (!Ww.has(pD)) return DD;
      if (pD !== nw) return zD ? pD + lw : pD;
      const sD = null !== (wD = Sw(DD)) && void 0 !== wD ? wD : "fuel";
      return zD ? "fuel" === sD ? pD + lw : `${pD}${lw}|${"water"===sD?"Water":"Waste"}` : Jw[sD]
    }

    function Zw(DD, zD) {
      const wD = sp(DD, zD);
      if ("Air" === wD) return !1;
      const pD = "reactor" === DD ? Pw : Cw;
      return xw.some((DD => pD[DD].includes(wD))) || "reactor" === DD && Tw.includes(wD)
    }

    function yw(DD) {
      return Qw[DD]
    }

    function kw(DD) {
      var zD;
      return null !== (zD = Ew[DD]) && void 0 !== zD ? zD : Ew[1]
    }

    function mw(DD) {
      const [zD, , wD] = kw(DD);
      return [wD, 0, -zD]
    }

    function ew(DD, zD, wD, pD, sD, KD) {
      return {
        ctrl: [DD[0], DD[1], DD[2]],
        rot: Ew[zD] ? zD : 1,
        w: wD,
        h: pD,
        d: sD,
        cu: KD[0],
        cv: KD[1]
      }
    }

    function ow(DD, zD) {
      return "reactor" === DD ? [Math.floor((zD - 1) / 2), 0] : [0, 0]
    }

    function aw(DD, zD, wD, pD, sD) {
      let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD.rot;
      if (wD === DD.w && pD === DD.h && sD === DD.d && KD === DD.rot) return DD;
      const [rD] = ow(zD, DD.w);
      if (DD.cu === rD && DD.cv <= 1) return ew(DD.ctrl, KD, wD, pD, sD, ow(zD, wD));
      const LD = (DD, zD) => Math.max(1, Math.min(zD, DD));
      return ew(DD.ctrl, KD, wD, pD, sD, [LD(DD.cu, wD - 2), 0 === DD.cv ? 0 : LD(DD.cv, pD - 2)])
    }
    const uw = 11,
      vw = 2 * uw + 1;
    new Uint8Array(vw * vw * vw);

    function tw(DD) {
      return DD.w * DD.h * DD.d
    }

    function Fw(DD) {
      const zD = mw(DD.rot);
      return [DD.ctrl[0] - zD[0] * DD.cu, DD.ctrl[1] - DD.cv, DD.ctrl[2] - zD[2] * DD.cu]
    }

    function Yw(DD) {
      return DD.cv * DD.d * DD.w + DD.cu
    }

    function Hw(DD, zD) {
      const wD = zD % DD.w,
        pD = Math.floor(zD / DD.w) % DD.d;
      return [wD, Math.floor(zD / (DD.w * DD.d)), pD]
    }

    function qw(DD, zD) {
      const [wD, pD, sD] = Hw(DD, zD), KD = Fw(DD), rD = kw(DD.rot), LD = mw(DD.rot);
      return [KD[0] + LD[0] * wD - rD[0] * sD, KD[1] + pD, KD[2] + LD[2] * wD - rD[2] * sD]
    }

    function Dp(DD, zD) {
      const wD = Fw(DD),
        pD = kw(DD.rot),
        sD = mw(DD.rot),
        KD = zD[0] - wD[0],
        rD = zD[2] - wD[2],
        LD = KD * sD[0] + rD * sD[2],
        cD = -(KD * pD[0] + rD * pD[2]),
        gD = zD[1] - wD[1];
      return LD < 0 || LD >= DD.w || gD < 0 || gD >= DD.h || cD < 0 || cD >= DD.d ? -1 : (gD * DD.d + cD) * DD.w + LD
    }

    function zp(DD, zD) {
      if (zD === Yw(DD)) return "ctrl";
      const [wD, pD, sD] = Hw(DD, zD), KD = 0 === pD || pD === DD.h - 1, rD = Number(0 === wD || wD === DD.w - 1) + Number(KD) + Number(0 === sD || sD === DD.d - 1);
      return rD >= 2 ? "edge" : 1 === rD ? KD ? "cap" : "wall" : "inside"
    }

    function wp(DD, zD) {
      const [wD, pD, sD] = Hw(DD, zD);
      return 0 === wD || wD === DD.w - 1 || 0 === pD || pD === DD.h - 1 || 0 === sD || sD === DD.d - 1 ? -1 : ((pD - 1) * (DD.d - 2) + (sD - 1)) * (DD.w - 2) + (wD - 1)
    }

    function pp(DD, zD) {
      const wD = DD.w - 2,
        pD = DD.d - 2,
        sD = zD % wD + 1,
        KD = Math.floor(zD / wD) % pD + 1;
      return ((Math.floor(zD / (wD * pD)) + 1) * DD.d + KD) * DD.w + sD
    }

    function sp(DD, zD) {
      const wD = jw(zD);
      return "reactor" === DD && wD === hw ? Xw : wD
    }

    function Kp(DD, zD, wD) {
      const pD = "ctrl" === zD ? jw(wD) : sp(DD, wD);
      return ("reactor" === DD ? Pw : Cw)[zD].includes(pD) ? "ok" : "Air" === pD ? "missing" : Zw(DD, wD) ? "wrong" : "blocked"
    }

    function rp(DD, zD) {
      return "battery" === DD ? Mw : "inside" === zD ? null : function(DD, zD) {
        if ("inside" === zD || "ctrl" === zD || "battery" === DD) return null;
        return "edge" === zD ? Xw : Vw
      }(DD, zD)
    }
    const Lp = {
        LASER_DRAW: 5e3,
        FOCUS_BY_LASERS: [0, 1e3, 2500, 5e3, 8e3],
        NOVA_FOCUS: 48e4,
        NOVA_SA: 16,
        NOVA_GD: 4,
        SA_CAP: 128,
        GD_CAP: 32,
        OUT_CAP: 16,
        MIN_SPOTS: 2,
        LASER_D: 3,
        RESERVE_MIN: 8e3,
        RESERVE_CAP_SHARE: .5,
        SHORT_BACKOFF_MS: 5e3,
        BEAM_OFF_MS: 7e3,
        HIT_MS: 250,
        HIT_HP: 10,
        WARN_CLEAR_MS: 1e4,
        GHOST_REACH: 12,
        MAX_PER_ISLAND: 8
      },
      cp = "Collider",
      gp = "Laser",
      Rp = "Star Alloy",
      Ap = "Glow Dust",
      Up = [cp, "_Collider Focus"];

    function fp(DD) {
      return Up.indexOf(jw(DD))
    }

    function Ip(DD) {
      return jw(DD) === gp
    }

    function Bp(DD) {
      return [
        [DD[0], DD[1], DD[2]],
        [DD[0], DD[1] + 1, DD[2]]
      ]
    }
    const Gp = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function hp(DD, zD, wD) {
      const pD = Gp[zD];
      return [DD[0] + pD[0] * wD, DD[1], DD[2] + pD[2] * wD]
    }

    function np(DD, zD) {
      if (zD[1] !== DD[1]) return null;
      const wD = zD[0] - DD[0],
        pD = zD[2] - DD[2];
      if (0 !== wD === (0 !== pD)) return null;
      const sD = Math.abs(wD + pD);
      if (sD > Lp.LASER_D) return null;
      return {
        dir: pD < 0 ? 0 : wD > 0 ? 1 : pD > 0 ? 2 : 3,
        HR: sD
      }
    }

    function Mp(DD, zD, wD) {
      const pD = zD => Math.abs(DD[0] - zD[0]) <= 1 && Math.abs(DD[1] - zD[1]) <= 1;
      return pD(zD) || pD(wD)
    }

    function Op(DD, zD) {
      return function(DD, zD, wD, pD) {
        return [0, 1, 2, 3].map((sD => {
          for (let KD = 1; KD <= Lp.LASER_D; KD++) {
            const rD = hp(DD, sD, KD);
            if (Mp([rD[0], rD[2]], zD, wD) || !pD(rD)) return !1
          }
          return !0
        }))
      }(Bp(DD)[1], zD.spawnXZ, zD.coreXZ, (DD => DD[1] >= fw.j && DD[1] < fw.j + fw.n && DD[0] >= zD.minXZ[0] && DD[0] <= zD.maxXZ[0] && DD[2] >= zD.minXZ[1] && DD[2] <= zD.maxXZ[1]))
    }
    const Jp = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function Ep(DD) {
      return Math.max(48 + 16 * DD, hD(DD).machineAllowance)
    }
    const Qp = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function Xp(DD) {
      const zD = DD.split("|")[0];
      return Qp.includes(zD) ? "Solar Panel" : zD === Bw.e ? "Fluid Pipe" : fp(zD) >= 0 ? "Collider" : (wD = zD, Jp.includes(wD) ? zD : null);
      var wD
    }
    const Vp = "buildAFactory2Game:solarPanelDescription";
    const Pp = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function Cp(DD, zD) {
      var wD;
      return null !== (wD = Pp.find((wD => {
        var pD;
        return (null !== (pD = DD.level(wD)) && void 0 !== pD ? pD : 0) >= zD
      }))) && void 0 !== wD ? wD : null
    }
    const xp = "buildAFactory2Game:";
    let Tp = null;
    const bp = {
        Workbench: "lookWorkbench",
        Furnace: "lookFurnace",
        Chest: "lookChest",
        Stone: "lookStone",
        "Messy Stone": "lookMessyStone",
        Gravel: "lookGravel",
        Sand: "lookSand",
        "Tilled Soil": "lookTilledSoil",
        "Fertilised Soil": "lookFertilisedSoil",
        "Wheat Seeds": "lookWheatGrowing",
        Wheat: "lookWheatRipe",
        "Loot Chest": "lookRuinChest"
      },
      jp = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      dp = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      Sp = {
        "Loot Chest": `${xp}lookRuinChestName`
      };

    function ip(DD) {
      return "object" === typeof DD && null !== DD && "translationKey" in DD && "string" === typeof DD.translationKey ? DD.translationKey : null
    }

    function lp(DD, zD) {
      var wD;
      return null !== (wD = ip(DD.displayName(zD))) && void 0 !== wD ? wD : `item:${(0,SD.ue)(zD)}`
    }

    function Wp(DD, zD) {
      var wD, pD, sD, KD;
      let rD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zD;
      if ("Solar Panel" === Xp(zD)) return {
        name: ip(DD.displayName("Solar Panel")),
        detail: Vp,
        detailItem: null
      };
      const cD = zD.endsWith(" Ore"),
        gD = (Tp ??= new Set([...Object.keys((0, Iw.g)()), ...Object.keys((0, Bw.t)())].map((DD => DD.split("|")[0]))), Tp).has(zD),
        RD = cD || gD ? null : function(DD) {
          var zD;
          return DD.endsWith(" Log") && !DD.startsWith("Barkless ") ? "lookLog" : DD.endsWith(" Sapling") ? "lookSapling" : DD.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (zD = bp[DD]) && void 0 !== zD ? zD : null
        }(zD);
      if (!DD.isBlock(zD) || !cD && !gD && null === RD) return null;
      const AD = null !== (wD = null !== (pD = Sp[zD]) && void 0 !== pD ? pD : ip(null !== (sD = DD.displayName(rD)) && void 0 !== sD ? sD : DD.displayName(zD))) && void 0 !== wD ? wD : `item:${(0,SD.ue)(zD)}`;
      if (null !== RD) return {
        name: AD,
        detail: `${xp}${RD}`,
        detailItem: null
      };
      const UD = null !== (KD = jp[zD]) && void 0 !== KD ? KD : LD() ? dp[zD] : void 0;
      if (gD && void 0 !== UD) return {
        name: AD,
        detail: `${xp}${UD}`,
        detailItem: null
      };
      const fD = rw[zD];
      if (void 0 !== fD) return {
        name: AD,
        detail: `${xp}lookDeposit`,
        detailItem: lp(DD, fD)
      };
      const ID = DD.harvestLevel(zD);
      if (cD && "rock" === DD.harvestType(zD) && 0 !== ID) {
        const zD = Cp(DD, null !== ID && void 0 !== ID ? ID : 0);
        if (zD === Pp[0]) return {
          name: AD,
          detail: `${xp}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== zD) return {
          name: AD,
          detail: `${xp}lookPickaxe`,
          detailItem: lp(DD, zD)
        }
      }
      return {
        name: AD,
        detail: ip(DD.description(zD)),
        detailItem: null
      }
    }

    function Np(DD) {
      return DD < fw.j - 24
    }
    const Zp = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const yp = "Wrench",
      kp = "Nova Wrench";

    function mp(DD) {
      return DD === yp || DD === kp
    }
    const ep = [...fw.N, "Belt Lift", "Belt Drop"];
    const op = ["Belt Lift", "Belt Drop"],
      ap = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function vp(DD) {
      return DD.split("|")[0]
    }

    function tp(DD) {
      const zD = /\|rot(\d)/.exec(DD);
      return zD ? Number(zD[1]) : 1
    }

    function Fp(DD) {
      return DD % 4 + 1
    }

    function Yp(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === zD && "" === wD ? DD : `${DD}|meta|rot${zD}${wD}`
    }

    function Hp(DD) {
      return vp(DD) === fw.y ? (0, fw.S)(DD) ? "gateRight" : "gateLeft" : (0, fw.Z)(DD)
    }

    function qp(DD) {
      const zD = vp(DD),
        wD = tp(DD);
      if (fw.N.includes(zD)) return (0, fw.O)(zD, Fp(wD), null);
      if (zD === fw.f) return (0, fw.ab)(Fp(wD), (0, fw.W)(DD));
      if (zD === fw.B) {
        const pD = ap[(0, fw.Z)(DD)];
        return null === pD ? Yp(zD, Fp(wD)) : Yp(zD, wD, fw.F[pD])
      }
      return zD === fw.y ? (0, fw.S)(DD) ? Yp(zD, Fp(wD)) : Yp(zD, wD, fw.h) : Gw.e.includes(zD) && !op.includes(zD) || Rw(zD) ? Yp(zD, Fp(wD)) : null
    }

    function Ds(DD) {
      return Gw.e.includes(DD) || Rw(DD) || null !== Xp(DD)
    }

    function zs(DD) {
      return "Solar Panel" === Xp(DD)
    }
    const ws = "buildAFactory2Game:",
      ps = {
        leftFront: `${ws}lookSplitDetail_leftFront`,
        frontRight: `${ws}lookSplitDetail_frontRight`,
        gateRight: `${ws}lookGateDetail_gateRight`
      };

    function ss(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const sD = Hp(DD),
        KD = null === sD ? null : `${ws}${sD.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${sD}`,
        rD = null === sD ? null : null !== (wD = ps[sD]) && void 0 !== wD ? wD : null;
      if (mp(zD) && pD) {
        const wD = vp(DD);
        return zD === kp && LD() && function(DD) {
          return ep.includes(vp(DD))
        }(DD) ? {
          mode: KD,
          detail: rD,
          next: `${ws}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: KD,
          detail: rD,
          next: Ds(wD) && !zs(wD) ? `${ws}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const cD = mp(zD) ? qp(DD) : null;
      if (null === cD) return {
        mode: KD,
        detail: rD,
        next: null,
        nextState: null
      };
      const gD = Hp(cD);
      return null === gD || tp(cD) !== tp(DD) ? {
        mode: KD,
        detail: rD,
        next: `${ws}lookWrenchTurn`,
        nextState: null
      } : {
        mode: KD,
        detail: rD,
        next: `${ws}lookWrenchNext`,
        nextState: `${ws}lookWrenchState_${gD}`
      }
    }
    const Ks = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const rs = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Ls(DD) {
      return [0, 1, 2, 3].map((zD => 0 !== (DD & 1 << zD)))
    }

    function cs(DD) {
      const zD = [];
      for (let wD = 8; wD + 2 < DD.length; wD += 3) zD.push([DD[wD], DD[wD + 1], DD[wD + 2]]);
      return {
        focus: [DD[0], DD[1], DD[2]],
        lasers: Ls(DD[3]),
        open: Ls(DD[4]),
        live: Ls(DD[5]),
        on: 1 === DD[6],
        state: rs[DD[7]],
        blockers: zD
      }
    }
    const gs = "Arc Caster",
      Rs = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      As = (Object.values(Rs), "Jet Chestplate"),
      Us = "Nova Jet Chestplate",
      fs = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Is = Object.values(fs);

    function Bs(DD, zD, wD) {
      return Math.min(function(DD) {
        return LD() && AD(DD) >= 5 ? 20 : 10
      }(wD), Math.floor(function(DD, zD) {
        return Math.max(0, DD) + (LD() ? Math.max(0, zD) : 0)
      }(DD, zD) / 5))
    }

    function Gs(DD, zD, wD) {
      const pD = Bs(zD, wD, DD),
        sD = AD(DD),
        KD = (sD >= 3 ? 55 : sD >= 1 ? 50 : DD >= 8 ? 45 : 30) + pD,
        rD = Math.max(100 + pD, 2 * KD);
      return {
        arcDamage: KD,
        arcPierce: DD >= 7 ? 2 : 1,
        arcChain: DD >= 10,
        barrierMax: (sD >= 4 ? 100 : sD >= 2 ? 90 : DD >= 9 ? 80 : DD >= 6 ? 60 : 40) + 5 * pD,
        barrierRegenPerS: sD >= 5 ? 20 : DD >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * pD,
        novaShieldRegenPerS: 32,
        bladeDamage: rD,
        bladePunch: Math.round(.5 * rD),
        forgeRank: pD
      }
    }
    const hs = {
      6: "gearPerkStage1",
      7: "gearPerkStage2",
      8: "gearPerkStage3",
      9: "gearPerkStage4",
      10: "gearPerkStage5",
      11: "gearPerkAtomic1",
      12: "gearPerkAtomic2",
      13: "gearPerkAtomic3",
      14: "gearPerkAtomic4",
      15: "gearPerkAtomic5"
    };
    var ns = wD(36791),
      Ms = wD(36586),
      Os = wD(36580),
      Es = wD(20),
      Qs = wD(1648),
      Xs = wD(1044),
      Vs = wD.n(Xs);

    function Ps(DD) {
      return !0 === DD.field
    }
    const Cs = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function xs(DD) {
      return Cs.has(DD) ? `buildAFactory2Game:itemPlural_${(0,SD.ue)(DD)}` : null
    }
    var Ts = wD(1200),
      bs = wD(1057),
      ds = wD(1915),
      Ss = wD(1895),
      is = wD(36776),
      ls = wD(36783),
      Ws = wD(25),
      Ns = wD(36774);
    const Zs = "baf2QuestView",
      ys = "baf2PlayerY",
      ks = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class ms {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = DD, this.view = {
          name: null,
          rows: [],
          reward: null,
          goal: null,
          pulse: 0,
          itemNames: {},
          side: null,
          sideCameUpAt: 0,
          tier: null,
          core: null,
          chapters: null,
          also: [],
          depth: null,
          tutorial: "on",
          tutorialKnown: !1
        }, this.pickedTutorial = null, this.pickSeq = 0, this.serverTutorial = "on", this.pickTimer = null, this.clearTimer = null, this.sidesSeen = new Set, this.playerY = null
      }
      get() {
        return this.view
      }
      set(DD, zD) {
        var wD, pD, sD, KD, rD, LD, cD, gD;
        const RD = JSON.stringify(DD.baf2QuestName) === JSON.stringify(this.view.name),
          AD = new Set(this.view.rows.filter((DD => DD.done)).map((DD => DD.id))),
          UD = new Set(this.view.rows.filter((DD => DD.justFinished)).map((DD => DD.id))),
          fD = DD.baf2QuestSide,
          ID = null !== fD && !0 === DD.baf2QuestSideFocus;
        let BD = !1,
          GD = 0;
        const hD = DD.baf2QuestSteps.map((DD => {
            const zD = Ys(DD, ks.has(DD[0]) ? DD[0] : "" + GD++),
              wD = RD && zD.done && !AD.has(zD.id);
            return zD.justFinished = wD || RD && zD.done && UD.has(zD.id), BD ||= wD, zD
          })),
          nD = Fs(hD);
        nD >= 0 && !ID && (hD[nD].current = !0);
        const MD = !RD && null !== DD.baf2QuestName,
          OD = JSON.stringify(fD && [fD[0], fD[1]]),
          JD = OD === JSON.stringify(null !== (wD = null === (pD = this.view.side) || void 0 === pD ? void 0 : pD.name) && void 0 !== wD ? wD : null),
          ED = null !== fD && !this.sidesSeen.has(OD);
        ED && this.sidesSeen.add(OD), this.serverTutorial = null !== (sD = DD.baf2QuestTutorial) && void 0 !== sD ? sD : "on", (null !== (KD = DD.baf2QuestTutorialSeq) && void 0 !== KD ? KD : 0) >= this.pickSeq && this.endPick();
        const QD = !RD || !JD || DD.baf2QuestTier !== this.view.tier;
        this.view = {
          name: DD.baf2QuestName,
          rows: hD,
          reward: DD.baf2QuestReward,
          goal: DD.baf2QuestGoal,
          pulse: this.view.pulse + (BD || MD ? 1 : 0),
          itemNames: zD,
          side: fD && {
            name: [fD[0], fD[1]],
            row: {
              ...Ys(fD[2], "side"),
              current: ID
            },
            goal: null !== (rD = fD[3]) && void 0 !== rD ? rD : null
          },
          sideCameUpAt: ED ? Date.now() : this.view.sideCameUpAt,
          tier: DD.baf2QuestTier,
          core: DD.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (LD = DD.baf2QuestAlso) && void 0 !== LD ? LD : [],
          depth: null !== (cD = DD.baf2QuestDepth) && void 0 !== cD ? cD : null,
          tutorial: null !== (gD = this.pickedTutorial) && void 0 !== gD ? gD : this.serverTutorial,
          tutorialKnown: !0
        }, this.KG(), BD && this.scheduleClear(), QD && this.requestBook()
      }
      setTutorial(DD) {
        return this.endPick(), this.pickedTutorial = DD, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.KG()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: DD
        }, this.KG(), this.pickSeq
      }
      onPlayerY(DD) {
        const zD = Math.floor(DD);
        zD !== this.playerY && (this.playerY = zD, this.view.depth && Ws.l.KG(ys, zD))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(DD) {
        this.view = {
          ...this.view,
          chapters: DD.baf2BookChapters
        }, this.KG()
      }
      dispose() {
        this.stopClear(), this.endPick()
      }
      endPick() {
        this.pickedTutorial = null, null !== this.pickTimer && (clearTimeout(this.pickTimer), this.pickTimer = null)
      }
      stopClear() {
        null !== this.clearTimer && (clearTimeout(this.clearTimer), this.clearTimer = null)
      }
      scheduleClear() {
        this.stopClear(), this.clearTimer = setTimeout((() => {
          this.clearTimer = null, this.view = {
            ...this.view,
            rows: this.view.rows.map((DD => DD.justFinished ? {
              ...DD,
              justFinished: !1
            } : DD))
          }, this.KG()
        }), 2400)
      }
      KG() {
        Ws.l.KG(Zs, this.view, !0)
      }
    }

    function es(DD, zD) {
      return DD.sideCameUpAt > 0 && zD - DD.sideCameUpAt < 2400
    }

    function os(DD) {
      return (null === DD.name || as(DD)) && null === DD.side && null !== DD.chapters
    }

    function as(DD) {
      var zD;
      return "quest_forgeOngoing" === (null === (zD = DD.name) || void 0 === zD ? void 0 : zD[0])
    }

    function us(DD) {
      return DD.filter((DD => !ks.has(DD.key)))
    }

    function vs(DD) {
      return DD.key.startsWith("stepCraft")
    }

    function ts(DD, zD) {
      const wD = new Set,
        pD = DD.side ? [...DD.rows, DD.side.row] : DD.rows;
      for (const KD of pD)
        if (!KD.done) {
          !KD.item || zD && !vs(KD) || wD.add(KD.item);
          for (const [DD, zD, pD] of null !== (sD = KD.chips) && void 0 !== sD ? sD : []) {
            var sD;
            zD < pD && wD.add(DD)
          }
        } return wD
    }

    function Fs(DD) {
      const zD = DD.findIndex((DD => !DD.done && !DD.away));
      return zD >= 0 ? zD : DD.findIndex((DD => !DD.done))
    }

    function Ys(DD, zD) {
      let [wD, pD, sD, KD, rD, LD, cD, gD, RD, AD] = DD;
      return {
        id: zD,
        key: wD,
        params: pD,
        item: sD,
        amount: KD,
        total: rD,
        done: LD,
        chips: null !== cD && void 0 !== cD ? cD : null,
        current: !1,
        away: !0 === gD,
        madeFor: null !== RD && void 0 !== RD ? RD : [],
        also: null !== AD && void 0 !== AD ? AD : [],
        justFinished: !1
      }
    }
    const Hs = "baf2QuestItems",
      qs = new Set;
    let DK = new Set,
      zK = null;

    function wK(DD) {
      const zD = dD(DD.tutorial),
        wD = zD ? ts(DD, !0) : qs;
      "inventory" === Es.e.get("openInGameMenuName") ? (zK = null, (0, Ns.w)(wD)) : zK = wD;
      const pD = zD ? ts(DD, !1) : qs;
      (0, ls.c)(pD, DK) || (DK = pD, Ws.l.KG(Hs, DK))
    }

    function pK() {
      return (0, is.e)(Hs, (() => DK))
    }
    var sK = wD(34218),
      KK = wD(3288);

    function rK(DD) {
      const zD = (0, KK.e)(DD),
        wD = void 0 === zD ? void 0 : (0, sK.displayNameOf)(zD);
      return "object" === typeof wD && null !== wD && "translationKey" in wD && "string" === typeof wD.translationKey ? wD.translationKey : `item:${(0,SD.ue)(DD)}`
    }

    function LK(DD, zD) {
      return DD(rK(zD))
    }
    const cK = [{
      item: "Relay Coil",
      amount: 1,
      weight: 25,
      fromTier: 1,
      untilTier: 2,
      prize: !0
    }, {
      item: "Iron Bar",
      amount: 4,
      weight: 12,
      fromTier: 1,
      later: {
        tier: 3,
        weight: 2
      }
    }, {
      item: "Copper Bar",
      amount: 4,
      weight: 14,
      fromTier: 1,
      later: {
        tier: 3,
        weight: 2
      }
    }, {
      item: "Copper Wire",
      amount: 6,
      weight: 12,
      fromTier: 2,
      later: {
        tier: 3,
        weight: 2
      }
    }, {
      item: "Iron Plate",
      amount: 3,
      weight: 12,
      fromTier: 2,
      later: {
        tier: 3,
        weight: 2
      }
    }, {
      item: "Gold Bar",
      amount: 2,
      weight: 10,
      fromTier: 2,
      later: {
        tier: 3,
        weight: 2
      }
    }, {
      item: "Motor",
      amount: 1,
      weight: 8,
      fromTier: 2,
      later: {
        tier: 3,
        weight: 2
      }
    }, {
      item: "Deposit Seed (Copper)",
      amount: 1,
      weight: 4,
      fromTier: 2,
      later: {
        tier: 3,
        weight: 6
      },
      prize: !0
    }, {
      item: "Steel Bar",
      amount: 2,
      weight: 2,
      fromTier: 3
    }, {
      item: "Logic Board",
      amount: 1,
      weight: 6,
      fromTier: 3
    }, {
      item: "Raw Voltite",
      amount: 2,
      weight: 10,
      fromTier: 3,
      later: {
        tier: 4,
        weight: 3
      }
    }, {
      item: "Machine Hull",
      amount: 1,
      weight: 4,
      fromTier: 3
    }, {
      item: "Diamond",
      amount: 1,
      weight: 6,
      fromTier: 3,
      prize: !0
    }, {
      item: "Deposit Seed (Gold)",
      amount: 1,
      weight: 6,
      fromTier: 3,
      prize: !0
    }, {
      item: "Deposit Seed (Voltite)",
      amount: 1,
      weight: 6,
      fromTier: 4,
      prize: !0
    }, {
      item: "Voltite Cell",
      amount: 1,
      weight: 4,
      fromTier: 4
    }, {
      item: "Dusk Moss",
      amount: 1,
      weight: 6,
      fromTier: 4,
      prize: !0
    }, {
      item: "Moonstone",
      amount: 1,
      weight: 12,
      fromTier: 4,
      later: {
        tier: 5,
        weight: 6
      },
      prize: !0
    }, {
      item: "Comet Shard",
      amount: 2,
      weight: 12,
      fromTier: 5,
      prize: !0
    }];

    function gK(DD, zD) {
      return [`Deposit Seed (${DD})`, {
        item: rw[`${DD} Deposit`],
        amount: zD
      }]
    }
    const RK = Object.fromEntries([gK("Coal", 8), gK("Iron", 8), gK("Copper", 8), gK("Gold", 6), gK("Voltite", 4), gK("Uranium", 4)]),
      AK = "Relay Coil",
      UK = new Map;

    function fK(DD) {
      let zD = UK.get(DD);
      if (!zD) {
        const wD = Math.max(1, DD);
        zD = cK.filter((DD => {
          var zD;
          return wD >= DD.fromTier && wD <= (null !== (zD = DD.untilTier) && void 0 !== zD ? zD : 1 / 0)
        })).map((DD => DD.later && wD >= DD.later.tier ? {
          ...DD,
          weight: DD.later.weight
        } : DD)), UK.set(DD, zD)
      }
      return zD
    }

    function IK(DD) {
      return fK(DD).some((DD => {
        let {
          item: zD
        } = DD;
        return zD === AK
      }))
    }

    function BK(DD) {
      return DD.startsWith("Deposit Seed (")
    }

    function GK(DD, zD) {
      const wD = fK(DD);
      return zD ? wD.filter((DD => zD(DD.item))) : wD
    }

    function hK(DD) {
      return DD.reduce(((DD, zD) => DD + zD.weight), 0)
    }

    function nK(DD, zD) {
      const wD = GK(DD, zD),
        pD = hK(wD);
      return wD.map((DD => ({
        find: DD,
        chance: DD.weight / pD
      })))
    }
    const MK = 6e4,
      OK = new Intl.NumberFormat("en-US");

    function JK(DD, zD) {
      const wD = DD >= 10 ? Math.round(DD) : Math.round(10 * DD) / 10;
      return 0 === wD ? "0" : `${zD}${OK.format(wD)}`
    }

    function EK(DD) {
      return DD < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? OK.format(DD) : DD < 1e6 ? `${DD<1e5?Math.floor(DD/100)/10:Math.floor(DD/1e3)}k` : Math.floor(DD / 1e5) / 10 + "M"
    }

    function QK(DD) {
      return DD < 0 ? "\u2212" + -DD : String(DD)
    }

    function XK(DD, zD) {
      const wD = Math.max(1, Math.round(zD));
      if (wD < 60) return DD("buildAFactory2Game:durationSeconds", {
        seconds: String(wD)
      });
      const pD = Math.round(wD / 60);
      if (pD < 60) return DD("buildAFactory2Game:durationMinutes", {
        minutes: String(pD)
      });
      const sD = String(Math.floor(pD / 60));
      return pD % 60 === 0 ? DD("buildAFactory2Game:durationWholeHours", {
        hours: sD
      }) : DD("buildAFactory2Game:durationHours", {
        hours: sD,
        minutes: String(pD % 60)
      })
    }
    var VK = wD(2462);
    const PK = "(max-height: 420px), (max-width: 650px)";

    function CK() {
      return (0, VK.d)(PK)
    }
    var xK = wD(1096);

    function TK(DD, zD) {
      return null !== DD && DD > zD + 1
    }

    function bK(DD) {
      const zD = 100 * DD;
      return String(zD <= 0 || zD >= 1 ? Math.round(zD) : Math.max(.1, Math.round(10 * zD) / 10))
    }

    function jK(DD) {
      let {
        item: zD,
        amount: wD
      } = DD;
      return (0, xK.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, xK.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: zD,
            amount: 0
          })
        }), wD > 1 && (0, xK.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", wD]
        })]
      })
    }

    function dK(DD) {
      let {
        label: zD,
        names: wD
      } = DD;
      const [sD, KD] = (0, pD.useState)(!1), rD = wD.join(" / ");
      return (0, xK.jsxs)(xK.Fragment, {
        children: [(0, xK.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: rD,
          "aria-expanded": sD,
          onClick: () => {
            KD(!sD)
          },
          children: zD
        }), sD && (0, xK.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: rD
        })]
      })
    }

    function SK(DD) {
      let {
        tier: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), {
        key: pD,
        params: sD
      } = fD(zD, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), KD = wD(`buildAFactory2Game:${pD}`, sD);
      return (0, xK.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, xK.jsx)(bs.e, {
          name: "lock"
        }), KD]
      })
    }
    const iK = (0, pD.createContext)(null);

    function lK() {
      const {
        t: DD
      } = (0, Ts.E)(), zD = (0, pD.useContext)(iK);
      return (0, pD.useEffect)((() => null === zD || void 0 === zD ? void 0 : zD()), [zD]), (0, xK.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: DD("buildAFactory2Game:recipeForQuest"),
        "aria-label": DD("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function WK(DD) {
      let {
        title: zD,
        count: wD,
        children: sD,
        startOpen: KD = !0
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), [LD, cD] = (0, pD.useState)((() => KD && !CK())), [gD, RD] = (0, pD.useState)(0), AD = (0, pD.useCallback)((() => (RD((DD => DD + 1)), () => {
        RD((DD => DD - 1))
      })), []);
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2Recipes", {
          Open: LD
        }),
        children: [(0, xK.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            cD(!LD)
          },
          "aria-expanded": LD,
          children: [rD("buildAFactory2Game:recipesToggle", {
            title: zD,
            count: String(wD)
          }), (0, xK.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: LD ? "\u25be" : "\u25b8"
          })]
        }), LD && (0, xK.jsxs)(iK.Provider, {
          value: AD,
          children: [(0, xK.jsx)("ul", {
            className: "Baf2RecipeList",
            children: sD
          }), gD > 0 && (0, xK.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, xK.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), rD("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const NK = "buildAFactory2Game:",
      ZK = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const yK = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      kK = {
        "Uranium Grit": KD,
        "Raw Uranium": KD
      };

    function mK(DD) {
      var zD;
      return null !== (zD = kK[DD]) && void 0 !== zD ? zD : Math.max(FD(DD), yK[DD] ? FD(yK[DD]) : 1, function(DD) {
        const zD = sD.findIndex((zD => zD.cost.some((zD => zD.item === DD))));
        return zD > KD ? zD : 1
      }(DD))
    }

    function eK(DD, zD) {
      return oK(zD) ? mK(zD) : function(DD) {
        if (ZK.has(DD)) return 1;
        const zD = sD.findIndex((zD => zD.newDeposits.some((zD => {
          let {
            block: wD
          } = zD;
          return wD === DD
        }))));
        return zD < 0 ? 1 : zD + 1
      }(DD)
    }

    function oK(DD) {
      return DD in kK || AD(mK(DD)) > 0
    }

    function aK(DD, zD) {
      return Yz(DD, {
        coupled: !1,
        taught: null,
        atomic: LD() && zD >= 11
      }).recipes
    }

    function uK(DD, zD) {
      const wD = UD(DD, zD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AD(DD) > 0);
      return "open" === wD || "locked" === wD
    }

    function vK(DD, zD) {
      return DD.map(((DD, wD) => ({
        value: DD,
        idx: wD,
        tier: zD(DD)
      }))).sort(((DD, zD) => DD.tier - zD.tier || DD.idx - zD.idx)).map((DD => {
        let {
          value: zD
        } = DD;
        return zD
      }))
    }

    function tK(DD, zD, wD) {
      const pD = UD(DD, zD);
      if ("hidden" === pD || "open" === pD) return null;
      if ("teaser" === pD) return {
        tag: {
          translationKey: `${NK}${wD?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${NK}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const sD = fD(DD, {
          tier: wD ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        KD = fD(DD, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${NK}${sD.key}`,
          params: sD.params
        },
        reason: {
          translationKey: `${NK}${KD.key}`,
          params: KD.params
        }
      }
    }

    function FK(DD) {
      return !BK(DD)
    }

    function YK(DD) {
      let {
        seconds: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)();
      return (0, xK.jsx)(WK, {
        title: wD("buildAFactory2Game:recipesCuts", {
          seconds: zD
        }),
        count: 1,
        children: (0, xK.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, xK.jsx)(jK, {
            item: "Maple Sapling",
            amount: 1
          }), (0, xK.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, xK.jsx)(jK, {
            item: "Maple Log",
            amount: 1
          }), (0, xK.jsx)("span", {
            className: "Baf2RecipeName",
            children: wD("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function HK(DD) {
      let {
        fertilised: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)();
      return (0, xK.jsxs)(WK, {
        title: wD("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, xK.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, xK.jsx)(jK, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, xK.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, xK.jsx)(jK, {
            item: "Wheat",
            amount: 1
          }), (0, xK.jsx)(jK, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, xK.jsx)("span", {
            className: "Baf2RecipeName",
            children: wD("buildAFactory2Game:recipeField")
          })]
        }), (0, xK.jsxs)("li", {
          className: Vs()("Baf2Recipe", {
            InUse: zD
          }),
          children: [(0, xK.jsx)(jK, {
            item: "Fertiliser",
            amount: 1
          }), (0, xK.jsx)("span", {
            className: "Baf2RecipeName",
            children: wD("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function qK(DD) {
      let {
        tier: zD,
        seconds: wD
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = function(DD) {
        return DD >= 5 ? Ez : Jz
      }(zD);
      return (0, xK.jsx)(WK, {
        title: pD("buildAFactory2Game:recipesBringsUp", {
          seconds: wD
        }),
        count: sD.length,
        children: sD.map((DD => {
          let {
            item: zD,
            chance: wD
          } = DD;
          return (0, xK.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, xK.jsx)(jK, {
              item: zD,
              amount: 1
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeName",
              children: LK(pD, zD)
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: pD("buildAFactory2Game:recipeChance", {
                percent: bK(wD)
              })
            })]
          }, zD)
        }))
      })
    }

    function Dr(DD) {
      let {
        tier: zD,
        seconds: wD,
        noSeeds: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), KD = pK(), rD = nK(zD, pD ? FK : void 0), LD = pD && nK(zD).length > rD.length, cD = IK(zD);
      return (0, xK.jsxs)(WK, {
        title: sD("buildAFactory2Game:recipesRecycles", {
          seconds: wD
        }),
        count: rD.length,
        children: [rD.map((DD => {
          let {
            find: zD,
            chance: wD
          } = DD;
          return (0, xK.jsxs)("li", {
            className: "Baf2Recipe",
            children: [KD.has(zD.item) && (0, xK.jsx)(lK, {}), (0, xK.jsx)(jK, {
              item: zD.item,
              amount: zD.amount
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeName",
              children: LK(sD, zD.item)
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: sD("buildAFactory2Game:recipeChance", {
                percent: bK(wD)
              })
            })]
          }, zD.item)
        })), LD && (0, xK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xK.jsx)("span", {
            className: "Baf2RecipeName",
            children: sD("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), cD && (0, xK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xK.jsx)("span", {
            className: "Baf2RecipeName",
            children: sD("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function zr(DD) {
      let {
        tier: zD,
        seconds: wD
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = Object.entries(RK).filter((DD => {
        let [, {
          item: wD
        }] = DD;
        return uK(mK(wD), zD, oK(wD))
      }));
      return (0, xK.jsx)(WK, {
        title: pD("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: wD
        }),
        count: sD.length,
        children: sD.map((DD => {
          let [zD, {
            item: wD,
            amount: sD
          }] = DD;
          return (0, xK.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, xK.jsx)(jK, {
              item: zD,
              amount: 1
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, xK.jsx)(jK, {
              item: wD,
              amount: sD
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeName",
              children: LK(pD, wD)
            })]
          }, zD)
        }))
      })
    }

    function wr(DD) {
      let {
        tier: zD,
        seconds: wD
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = pK(), KD = vK(Object.entries(rw).filter((DD => {
        let [wD, pD] = DD;
        return uK(eK(wD, pD), zD, oK(pD))
      })), (DD => {
        let [zD, wD] = DD;
        return eK(zD, wD)
      }));
      return (0, xK.jsx)(WK, {
        title: pD("buildAFactory2Game:recipesDigs", {
          seconds: wD
        }),
        count: KD.length,
        children: KD.map((DD => {
          let [wD, KD] = DD;
          const rD = eK(wD, KD),
            LD = rD > zD ? rD : null,
            cD = Lw[wD],
            gD = null === LD && sD.has(KD);
          return (0, xK.jsxs)("li", {
            className: Vs()("Baf2Recipe", {
              Locked: null !== LD,
              Far: TK(LD, zD)
            }),
            children: [gD && (0, xK.jsx)(lK, {}), (0, xK.jsx)(jK, {
              item: wD,
              amount: 1
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, xK.jsx)(jK, {
              item: KD,
              amount: 1
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeName",
              children: LK(pD, KD)
            }), void 0 !== cD && (0, xK.jsx)("span", {
              className: "Baf2RecipeMore",
              children: pD("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / cD)
              })
            }), null !== LD && (0, xK.jsx)(SK, {
              tier: LD
            })]
          }, wD)
        }))
      })
    }

    function pr(DD) {
      var zD;
      let {
        def: wD,
        seconds: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)();
      return (0, xK.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, xK.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (zD = wD.fuels) && void 0 !== zD ? zD : []).map((DD => (0, xK.jsx)(jK, {
            item: DD,
            amount: 1
          }, DD))), (0, xK.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, xK.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, xK.jsx)(bs.e, {
              name: "bolt"
            }), sD("buildAFactory2Game:recipePower", {
              power: YD(wD.powerMade),
              seconds: pD
            })]
          })]
        })
      })
    }

    function sr(DD) {
      let {
        def: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)();
      return (0, xK.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, xK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xK.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, xK.jsx)(bs.e, {
              name: "bolt"
            }), wD("buildAFactory2Game:recipeMixer", {
              cryo: JK((0, HD.I)(zD, zD.cryoMade), "")
            })]
          })
        })
      })
    }

    function Kr(DD) {
      let {
        def: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)();
      return (0, xK.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, xK.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, xK.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, xK.jsx)(bs.e, {
              name: "bolt"
            }), wD("buildAFactory2Game:recipeCondenser", {
              power: JK((0, HD.I)(zD, zD.powerPerOp), ""),
              water: JK((0, HD.I)(zD, zD.fluidMade), "")
            })]
          })
        })
      })
    }

    function rr(DD) {
      let {
        kind: zD,
        def: wD,
        input: pD,
        tier: sD,
        noSeeds: KD = !1
      } = DD;
      const rD = String(wD.opMs / 1e3);
      return ww(wD) ? (0, xK.jsx)(YK, {
        seconds: rD
      }) : wD.field ? (0, xK.jsx)(HK, {
        fertilised: null !== pD
      }) : wD.table ? (0, xK.jsx)(qK, {
        tier: sD,
        seconds: rD
      }) : wD.recycles ? (0, xK.jsxs)(xK.Fragment, {
        children: [(0, xK.jsx)(Dr, {
          tier: sD,
          seconds: rD,
          noSeeds: KD
        }), (0, xK.jsx)(zr, {
          tier: sD,
          seconds: rD
        })]
      }) : zw(wD) ? (0, xK.jsx)(wr, {
        tier: sD,
        seconds: rD
      }) : void 0 !== wD.fluidMade ? (0, xK.jsx)(Kr, {
        def: wD
      }) : void 0 !== wD.cryoMade ? (0, xK.jsx)(sr, {
        def: wD
      }) : void 0 !== wD.powerMade ? (0, xK.jsx)(pr, {
        def: wD,
        seconds: rD
      }) : (0, xK.jsx)(Lr, {
        kind: zD,
        input: pD,
        tier: sD,
        seconds: rD
      })
    }

    function Lr(DD) {
      let {
        kind: zD,
        input: wD,
        tier: pD,
        seconds: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)(), rD = pK(), LD = vK(function(DD) {
        const zD = new Map;
        for (const sD of DD) {
          var wD, pD;
          const DD = [sD.output, sD.outputAmount, sD.inputAmount, null === (wD = sD.bonus) || void 0 === wD ? void 0 : wD.item, null === (pD = sD.bonus) || void 0 === pD ? void 0 : pD.chance].join("|"),
            KD = zD.get(DD);
          KD ? KD.inputs.push(sD.input) : zD.set(DD, {
            inputs: [sD.input],
            inputAmount: sD.inputAmount,
            output: sD.output,
            outputAmount: sD.outputAmount,
            bonus: sD.bonus
          })
        }
        return [...zD.values()]
      }(aK(zD, pD).filter(Aw)), (DD => mK(DD.output))).filter((DD => uK(mK(DD.output), pD, oK(DD.output))));
      return (0, xK.jsx)(WK, {
        title: KD("buildAFactory2Game:recipesEach", {
          seconds: sD
        }),
        count: LD.length,
        children: LD.map((DD => {
          const zD = null !== wD && DD.inputs.includes(wD),
            sD = DD.inputs.length > 3 ? [zD ? wD : DD.inputs[0]] : DD.inputs,
            LD = mK(DD.output) > pD ? mK(DD.output) : null,
            cD = null === LD && rD.has(DD.output);
          return (0, xK.jsxs)("li", {
            className: Vs()("Baf2Recipe", {
              InUse: zD,
              Locked: null !== LD,
              Far: TK(LD, pD)
            }),
            children: [cD && (0, xK.jsx)(lK, {}), sD.map(((zD, wD) => (0, xK.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [wD > 0 && (0, xK.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, xK.jsx)(jK, {
                item: zD,
                amount: DD.inputAmount
              })]
            }, zD))), sD.length < DD.inputs.length && (0, xK.jsx)(dK, {
              label: KD("buildAFactory2Game:recipeMore", {
                count: String(DD.inputs.length - sD.length)
              }),
              names: DD.inputs.filter((DD => !sD.includes(DD))).map((DD => LK(KD, DD)))
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, xK.jsx)(jK, {
              item: DD.output,
              amount: DD.outputAmount
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeName",
              children: LK(KD, DD.output)
            }), DD.bonus && (0, xK.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [KD("buildAFactory2Game:recipeBonus", {
                percent: bK(DD.bonus.chance)
              }), (0, xK.jsx)(jK, {
                item: DD.bonus.item,
                amount: 1
              })]
            }), null !== LD && (0, xK.jsx)(SK, {
              tier: LD
            })]
          }, `${DD.output}|${DD.inputs[0]}`)
        }))
      })
    }

    function cr(DD) {
      let {
        taught: zD,
        tier: wD
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = pK(), KD = vK(Object.values(tz), (DD => DD.tier)).filter((DD => uK(DD.tier, wD)));
      return (0, xK.jsx)(WK, {
        title: pD("buildAFactory2Game:benchCanMake"),
        count: KD.length,
        startOpen: !1,
        children: KD.map((DD => {
          const KD = DD.tier > wD,
            rD = !KD && sD.has(DD.output);
          return (0, xK.jsxs)("li", {
            className: Vs()("Baf2Recipe", {
              InUse: DD.output === zD,
              Locked: KD,
              Far: TK(KD ? DD.tier : null, wD)
            }),
            children: [rD && (0, xK.jsx)(lK, {}), (0, xK.jsx)(jK, {
              item: DD.output,
              amount: DD.outputAmount
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeName",
              children: LK(pD, DD.output)
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), DD.inputs.map((DD => (0, xK.jsx)(jK, {
              item: DD.item,
              amount: DD.amount
            }, DD.item))), KD && (0, xK.jsx)(SK, {
              tier: DD.tier
            })]
          }, DD.output)
        }))
      })
    }
    var gr, Rr, Ar, Ur, fr;
    const Ir = Sz.Generator,
      Br = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Gr = 1e3 * (null !== (gr = Ir.powerMade) && void 0 !== gr ? gr : 0) / Ir.opMs,
      hr = Math.min(...(null !== (Rr = Ir.fuels) && void 0 !== Rr ? Rr : []).map((DD => Kw[DD]))) / 1e3,
      nr = Sz["Volt Engine"],
      Mr = 1e3 * (null !== (Ar = nr.powerMade) && void 0 !== Ar ? Ar : 0) / nr.opMs,
      Or = Kw[null !== (Ur = null === (fr = nr.fuels) || void 0 === fr ? void 0 : fr[0]) && void 0 !== Ur ? Ur : ""] / 1e3;

    function Jr(DD) {
      let {
        item: zD,
        label: wD,
        value: pD,
        note: sD,
        dim: KD
      } = DD;
      return (0, xK.jsxs)("li", {
        className: Vs()("Baf2PowerRow", {
          Dim: KD
        }),
        children: [(0, xK.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: zD,
            amount: 0
          })
        }), (0, xK.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, xK.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: wD
          }), sD && (0, xK.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: sD
          })]
        }), (0, xK.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: pD
        })]
      })
    }

    function Er(DD, zD, wD, pD) {
      var sD;
      const KD = void 0 === pD ? Sz[DD] : function(DD, zD) {
          if (null === zD) return DD;
          let wD = uD.get(zD);
          return wD || (wD = {
            ...DD,
            powerPerOp: aD(DD, zD),
            farmMob: zD
          }, uD.set(zD, wD)), wD
        }(Sz[DD], pD),
        rD = zD && KD.couplable ? mz(KD, wD) : KD;
      return 1e3 * (null !== (sD = rD.powerPerOp) && void 0 !== sD ? sD : 0) / rD.opMs
    }

    function Qr(DD) {
      var zD, wD, pD, sD, KD, rD, LD, cD;
      let {
        message: gD
      } = DD;
      const {
        t: RD
      } = (0, Ts.E)(), AD = (DD, zD) => RD("buildAFactory2Game:powerPerSecond", {
        rate: JK(DD, zD)
      }), [UD, fD] = gD.baf2PowerGenerators, ID = gD.baf2PowerGeneratorFuel, BD = gD.baf2PowerSunPanels, GD = null !== (zD = gD.baf2PowerSunShare) && void 0 !== zD ? zD : 1, hD = gD.baf2PowerVaults, nD = gD.baf2PowerUsers, [MD, OD] = null !== (wD = gD.baf2PowerEngines) && void 0 !== wD ? wD : [0, 0], JD = null !== (pD = gD.baf2PowerEngineCells) && void 0 !== pD ? pD : 0, ED = null !== (sD = gD.baf2PowerPads) && void 0 !== sD ? sD : 0, QD = null !== (KD = gD.baf2PowerCharge) && void 0 !== KD ? KD : 0, [XD, VD] = null !== (rD = gD.baf2PowerReactors) && void 0 !== rD ? rD : [0, 0], [PD, CD] = null !== (LD = gD.baf2PowerBatteries) && void 0 !== LD ? LD : [0, 0];
      let xD = RD("buildAFactory2Game:powerEngineCells", {
        amount: String(JD)
      });
      JD > 0 && OD > 0 && (xD = RD("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(JD),
        time: XK(RD, JD * Or / OD)
      }));
      let TD = RD("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(ID)
      });
      ID > 0 && fD > 0 && (TD = RD("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(ID),
        time: XK(RD, ID * hr / fD)
      }));
      const bD = UD + MD + BD + XD;
      return (0, xK.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, xK.jsxs)("section", {
          children: [(0, xK.jsxs)("h3", {
            children: [RD("buildAFactory2Game:powerMaking"), (0, xK.jsx)("span", {
              children: AD(gD.baf2PowerMadePerS, "+")
            })]
          }), (0, xK.jsxs)("ul", {
            children: [0 === bD && (0, xK.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: RD("buildAFactory2Game:powerNoMakers")
            }), UD > 0 && (0, xK.jsx)(Jr, {
              item: "Generator",
              label: `${LK(RD,"Generator")} \xd7${UD}`,
              note: `${RD("buildAFactory2Game:powerRunning",{amount:String(fD)})} \xb7 ${TD}`,
              value: AD(fD * Gr, "+"),
              dim: 0 === fD
            }), MD > 0 && (0, xK.jsx)(Jr, {
              item: "Volt Engine",
              label: `${LK(RD,"Volt Engine")} \xd7${MD}`,
              note: `${RD("buildAFactory2Game:powerRunning",{amount:String(OD)})} \xb7 ${xD}`,
              value: AD(OD * Mr, "+"),
              dim: 0 === OD
            }), BD > 0 && (0, xK.jsx)(Jr, {
              item: "Solar Panel",
              label: `${LK(RD,"Solar Panel")} \xd7${BD}`,
              note: RD(GD < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: AD(4 * BD * GD, "+")
            }), XD > 0 && (0, xK.jsx)(Jr, {
              item: "Reactor Frame",
              label: `${RD("buildAFactory2Game:powerReactors")} \xd7${XD}`,
              note: RD("buildAFactory2Game:powerRunning", {
                amount: String(VD)
              }),
              value: AD(null !== (cD = gD.baf2PowerReactorPerS) && void 0 !== cD ? cD : 0, "+"),
              dim: 0 === VD
            })]
          })]
        }), (0, xK.jsxs)("section", {
          children: [(0, xK.jsxs)("h3", {
            children: [RD("buildAFactory2Game:powerStorage"), (0, xK.jsx)("span", {
              children: YD(gD.baf2PowerCap)
            })]
          }), (hD > 0 || PD > 0) && (0, xK.jsxs)("ul", {
            children: [hD > 0 && (0, xK.jsx)(Jr, {
              item: "Charge Vault",
              label: `${LK(RD,"Charge Vault")} \xd7${hD}`,
              value: `+${YD(8e3*hD)}`
            }), PD > 0 && (0, xK.jsx)(Jr, {
              item: "Battery Cell",
              label: `${RD("buildAFactory2Game:powerBatteries")} \xd7${PD}`,
              value: `+${YD(CD)}`
            })]
          })]
        }), (0, xK.jsxs)("section", {
          children: [(0, xK.jsxs)("h3", {
            children: [RD("buildAFactory2Game:powerUsing"), (0, xK.jsx)("span", {
              children: AD(gD.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, xK.jsxs)("ul", {
            children: [0 === nD.length && 0 === ED && 0 === QD && (0, xK.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: RD("buildAFactory2Game:powerNoUsers")
            }), nD.map((DD => {
              let [zD, wD, pD, sD, KD = 1, rD] = DD, LD = wD ? RD(Br[KD - 1], {
                name: LK(RD, zD)
              }) : LK(RD, zD);
              return void 0 !== rD && (LD = RD("buildAFactory2Game:powerFarmName", {
                name: LD,
                mob: RD(mD(rD))
              })), (0, xK.jsx)(Jr, {
                item: zD,
                label: `${LD} \xd7${pD}`,
                note: RD("buildAFactory2Game:powerRunning", {
                  amount: String(sD)
                }),
                value: sD > 0 ? AD(sD * Er(zD, wD, KD, rD), "\u2212") : RD("buildAFactory2Game:powerIdle"),
                dim: 0 === sD
              }, `${zD}|${wD}|${KD}|${rD}`)
            })), ED > 0 && (0, xK.jsx)(Jr, {
              item: "Charging Pad",
              label: `${LK(RD,"Charging Pad")} \xd7${ED}`,
              value: RD("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), QD > 0 && (0, xK.jsx)(Jr, {
              item: "Homestead Core",
              label: RD("buildAFactory2Game:powerCharge"),
              value: AD(QD, "\u2212")
            }), gD.baf2PowerStarved > 0 && (0, xK.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, xK.jsx)(bs.e, {
                name: "triangle-exclamation"
              }), RD("buildAFactory2Game:powerStarved", {
                amount: String(gD.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Xr = wD(4552),
      Vr = wD(1447);
    class Pr {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(DD) {
        this.message = DD;
        for (const zD of this.listeners) zD()
      }
      get() {
        return this.message
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
    }
    class Cr extends Pr {}

    function xr(DD, zD) {
      const wD = () => {
          const wD = DD.get();
          if (!wD || !zD) return wD;
          const [pD, sD, KD] = wD.baf2PowerAt;
          return pD === zD[0] && sD === zD[1] && KD === zD[2] ? wD : null
        },
        [sD, KD] = (0, pD.useState)(wD);
      return (0, pD.useEffect)((() => (KD(wD()), DD.subscribe((() => {
        KD(wD())
      })))), [DD, ...null !== zD && void 0 !== zD ? zD : []]), sD
    }

    function Tr(DD) {
      return {
        stored: DD.baf2PowerStored,
        cap: DD.baf2PowerCap,
        madePerS: DD.baf2PowerMadePerS,
        usedPerS: DD.baf2PowerUsedPerS
      }
    }

    function br(DD) {
      let {
        stored: zD,
        cap: wD
      } = DD;
      return (0, xK.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, xK.jsx)("div", {
          style: {
            width: `${Math.min(100,100*zD/Math.max(1,wD))}%`
          }
        })
      })
    }

    function jr(DD) {
      let {
        figures: zD,
        labelled: wD = !1
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = zD.madePerS - zD.usedPerS, {
        text: KD,
        draining: rD
      } = function(DD, zD) {
        let {
          stored: wD,
          cap: pD,
          madePerS: sD,
          usedPerS: KD
        } = zD;
        const rD = sD - KD;
        return wD >= pD ? {
          text: DD("buildAFactory2Game:powerFull"),
          draining: !1
        } : rD > .05 ? {
          text: DD("buildAFactory2Game:powerFullIn", {
            time: XK(DD, (pD - wD) / rD)
          }),
          draining: !1
        } : rD < -.05 ? {
          text: DD("buildAFactory2Game:powerEmptyIn", {
            time: XK(DD, wD / -rD)
          }),
          draining: !0
        } : {
          text: DD("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(pD, zD);
      return (0, xK.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, xK.jsx)(br, {
          stored: zD.stored,
          cap: zD.cap
        }), (0, xK.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, xK.jsx)("span", {
            children: pD(wD ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: YD(zD.stored),
              cap: YD(zD.cap)
            })
          }), (0, xK.jsxs)("span", {
            className: Vs()("Baf2PowerNet", {
              Draining: rD
            }),
            children: [pD("buildAFactory2Game:powerPerSecond", {
              rate: JK(Math.abs(sD), sD < 0 ? "\u2212" : "+")
            }), " \xb7 ", KD]
          })]
        })]
      })
    }

    function dr(DD) {
      let {
        stored: zD,
        cap: wD,
        rates: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)();
      return pD ? (0, xK.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, xK.jsx)(jr, {
          figures: {
            stored: zD,
            cap: wD,
            madePerS: pD[0],
            usedPerS: pD[1]
          },
          labelled: !0
        })
      }) : (0, xK.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, xK.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, xK.jsx)(br, {
            stored: zD,
            cap: wD
          }), (0, xK.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, xK.jsx)("span", {
              children: sD("buildAFactory2Game:powerStoredLabelled", {
                stored: YD(zD),
                cap: YD(wD)
              })
            })
          })]
        })
      })
    }

    function Sr(DD) {
      let {
        store: zD,
        close: wD
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = xr(zD);
      return (0, xK.jsx)(Xr.c, {
        close: wD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              children: [(0, xK.jsx)("h2", {
                id: "baf2PowerTitle",
                children: pD("buildAFactory2Game:powerTitle")
              }), (0, xK.jsx)("p", {
                children: pD("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, xK.jsx)(Vr.k, {
              onClick: wD
            })]
          }), sD && (0, xK.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, xK.jsx)(jr, {
              figures: Tr(sD)
            }), (0, xK.jsx)(Qr, {
              message: sD
            })]
          })]
        })
      })
    }

    function ir(DD) {
      var zD;
      let {
        kind: wD,
        def: sD,
        jp: KD,
        power: rD,
        stored: LD,
        cap: cD
      } = DD;
      const {
        t: gD
      } = (0, Ts.E)(), RD = xr(rD, KD), [AD, UD] = (0, pD.useState)(!1);
      return (0, xK.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, xK.jsx)(rr, {
          kind: wD,
          def: sD,
          input: null,
          tier: null !== (zD = null === RD || void 0 === RD ? void 0 : RD.baf2PowerTier) && void 0 !== zD ? zD : 1
        }), (0, xK.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: gD("buildAFactory2Game:powerTitle")
        }), RD && (0, xK.jsx)(jr, {
          figures: Tr(RD)
        }), !RD && (0, xK.jsx)(dr, {
          stored: LD,
          cap: cD,
          rates: null
        }), RD && (0, xK.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            UD(!AD)
          },
          "aria-expanded": AD,
          children: gD(AD ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), RD && AD && (0, xK.jsx)(Qr, {
          message: RD
        })]
      })
    }
    const lr = 2500,
      Wr = 17500,
      Nr = `${JD} `;
    const Zr = ["plan", "throttle"];

    function yr(DD) {
      if (DD.startsWith(`${Pz} `)) return DD.slice(0, DD.lastIndexOf(" "));
      const zD = DD.split(" ");
      return zD[0] === Rz && Zr.includes(zD[4]) ? zD.slice(0, 5).join(" ") : null
    }
    class kr {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = DD, this.now = zD, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.ksD = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = zD()
      }
      enqueue(DD) {
        this.queue(DD, this.nextTicket());
        const zD = this.ksD + this.pending.length;
        return this.flush(), zD
      }
      track(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wD = this.nextTicket();
        if (!zD.urgent) return this.queue(DD, wD), this.flush(), wD;
        const {
          supersedes: pD
        } = zD;
        for (let KD = this.pending.length - 1; KD >= this.urgent; KD--) {
          const zD = this.pending[KD];
          (zD.command === DD || null !== pD && void 0 !== pD && pD(zD.command)) && (this.pending.splice(KD, 1), this.markLeft(zD.tickets))
        }
        const sD = this.pending.findIndex((zD => {
          let {
            command: wD
          } = zD;
          return wD === DD
        }));
        return -1 !== sD ? this.pending[sD].tickets.push(wD) : (this.pending.splice(this.urgent, 0, {
          command: DD,
          tickets: [wD]
        }), this.urgent += 1), this.flush(), wD
      }
      leftAt(DD) {
        const zD = this.leftTimes.get(DD);
        return void 0 !== zD ? zD : this.pending.some((zD => {
          let {
            tickets: wD
          } = zD;
          return wD.includes(DD)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let DD = !0;
        return () => {
          DD && (DD = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(DD) {
        var zD;
        return (null === (zD = this.pending.at(-1)) || void 0 === zD ? void 0 : zD.command) === DD
      }
      sent() {
        return this.ksD
      }
      clear() {
        for (const {
            tickets: DD
          }
          of this.pending) this.markLeft(DD);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(DD) {
        const zD = this.now();
        for (const wD of DD) this.leftTimes.set(wD, zD);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(DD, zD) {
        const wD = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === wD || void 0 === wD ? void 0 : wD.command) === DD) return void(! function(DD) {
          return DD === ED || DD.startsWith(`${OD} `) || DD.startsWith(`${ZD} `)
        }(DD) ? wD.tickets.push(zD) : (this.pending.pop(), this.markLeft([...wD.tickets, zD])));
        const pD = void 0 === wD ? null : gz(wD.command, DD);
        if (null !== pD && void 0 !== wD) return wD.command = pD, void wD.tickets.push(zD);
        const sD = yr(DD);
        if (null !== sD && void 0 !== wD && yr(wD.command) === sD) return wD.command = DD, void wD.tickets.push(zD);
        if (null !== wD && void 0 !== wD && wD.command.startsWith(Nr) && DD.startsWith(Nr)) {
          const pD = DD.slice(Nr.length);
          if (wD.command.slice(Nr.length).split(",").includes(pD)) return void wD.tickets.push(zD);
          const sD = `${wD.command},${pD}`;
          if (sD.length <= 119) return wD.command = sD, void wD.tickets.push(zD)
        }
        this.pending.push({
          command: DD,
          tickets: [zD]
        })
      }
      flush() {
        const DD = this.now();
        for (this.tokens = Math.min(5, this.tokens + (DD - this.refilledAt) / lr), this.refilledAt = DD; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.ksD += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: DD,
            tickets: zD
          } = this.pending.shift();
          this.markLeft(zD), this.send(DD)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * lr)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class mr {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new kr(DD, zD)
      }
      send(DD) {
        return this.queue.enqueue(DD)
      }
      sent() {
        return this.queue.sent()
      }
      track(DD, zD) {
        return this.queue.track(DD, zD)
      }
      leftAt(DD) {
        return this.queue.leftAt(DD)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(DD) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = zD, this.send(DD), this.islandEdits.count
      }
      syncIslandEdits(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: wD
        } = this, pD = zD - wD.lastAtMs < Wr;
        wD.count = pD ? Math.max(wD.count, DD) : DD
      }
      clear() {
        this.queue.clear()
      }
    }
    const er = (0, pD.createContext)(null);

    function or() {
      const DD = (0, pD.useContext)(er);
      if (!DD) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return DD
    }

    function ar(DD, zD) {
      return null !== zD && void 0 !== zD ? zD : 1 === DD
    }

    function ur(DD, zD) {
      return DD.every((DD => {
        var wD;
        let [pD, , sD] = DD;
        return !ar(sD, null === (wD = zD.get(pD)) || void 0 === wD ? void 0 : wD.Nf)
      }))
    }

    function vr(DD, zD, wD) {
      if (0 === DD.size) return DD;
      const pD = new Map(DD);
      for (const [sD, KD] of DD) {
        const DD = zD.find((DD => {
          let [zD] = DD;
          return zD === sD
        }));
        (!DD || KD.Nf === (1 === DD[2]) || KD.atMs < wD) && pD.delete(sD)
      }
      return pD
    }

    function tr(DD) {
      var zD;
      let {
        jp: wD,
        input: sD,
        drops: KD,
        seconds: rD
      } = DD;
      const {
        t: LD
      } = (0, Ts.E)(), cD = or(), [gD, RD] = (0, pD.useState)(new Map);
      (0, pD.useEffect)((() => {
        KD && RD((DD => vr(DD, KD, Date.now() - Wr)))
      }), [KD]), (0, pD.useEffect)((() => {
        const DD = function(DD, zD) {
          let wD = null;
          for (const {
              atMs: pD
            }
            of DD.values()) wD = null === wD ? pD : Math.min(wD, pD);
          return null === wD ? null : wD + zD
        }(gD, Wr);
        if (null === DD || !KD) return;
        const zD = setTimeout((() => {
          RD((DD => vr(DD, KD, Date.now() - Wr)))
        }), Math.max(0, DD - Date.now()) + 1);
        return () => {
          clearTimeout(zD)
        }
      }), [gD, KD]);
      const AD = eD(sD),
        UD = null !== AD && null !== KD && ur(KD, gD),
        fD = function(DD, zD, wD) {
          return null === DD || null === zD || ur(zD, wD) ? 0 : ND[lD[DD]]
        }(AD, KD, gD);
      return (0, xK.jsxs)(WK, {
        title: LD("buildAFactory2Game:farmDropsTitle", {
          seconds: rD
        }),
        count: null !== (zD = null === KD || void 0 === KD ? void 0 : KD.length) && void 0 !== zD ? zD : 0,
        children: [fD > 0 && (0, xK.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: LD("buildAFactory2Game:farmDropsPower", {
            power: String(fD)
          })
        }), (null === AD || !KD) && (0, xK.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: LD("buildAFactory2Game:farmDropsEmpty")
        }), UD && (0, xK.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: LD("buildAFactory2Game:farmDropsAllVoided")
        }), null !== AD && (null === KD || void 0 === KD ? void 0 : KD.map((DD => {
          var zD;
          let [pD, sD, KD] = DD;
          const rD = sD < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            AD = ar(KD, null === (zD = gD.get(pD)) || void 0 === zD ? void 0 : zD.Nf);
          return (0, xK.jsxs)("li", {
            className: Vs()("Baf2Recipe Baf2FarmDrop", {
              Voided: !AD
            }),
            children: [(0, xK.jsx)(jK, {
              item: pD,
              amount: 1
            }), (0, xK.jsx)("span", {
              className: "Baf2RecipeName",
              children: LK(LD, pD)
            }), (0, xK.jsx)("span", {
              className: "Baf2FarmRate",
              children: LD(rD, {
                amount: String(sD)
              })
            }), (0, xK.jsx)("button", {
              type: "button",
              className: Vs()("Baf2FarmToggle SmallTextBold", {
                Kept: AD
              }),
              "aria-pressed": AD,
              onClick: () => {
                RD(new Map(gD).set(pD, {
                  Nf: !AD,
                  atMs: Date.now()
                })), cD.send(function(DD, zD, wD, pD) {
                  return `${ZD} ${DD} ${zD} ${wD} ${pD}`
                }(wD[0], wD[1], wD[2], pD))
              },
              children: LD(AD ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, pD)
        })))]
      })
    }
    var Fr;
    const Yr = String(null !== (Fr = Sz.Synthesizer.waterPerOp) && void 0 !== Fr ? Fr : 0);

    function Hr(DD) {
      let {
        jp: zD,
        taught: wD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), KD = or(), [rD, LD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        null !== rD && wD === rD && LD(null)
      }), [rD, wD]);
      const cD = null !== rD && void 0 !== rD ? rD : wD;
      let gD = sD("buildAFactory2Game:synthPick");
      return null !== cD && (gD = sD("buildAFactory2Game:synthGrows", {
        name: LK(sD, cD),
        input: LK(sD, Qz),
        water: Yr
      })), (0, xK.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, xK.jsx)("div", {
          className: Vs()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === cD
          }),
          children: gD
        }), (0, xK.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: Xz.map(((DD, wD) => {
            const pD = LK(sD, DD),
              rD = DD === cD;
            return (0, xK.jsx)("li", {
              children: (0, xK.jsx)("button", {
                type: "button",
                className: Vs()("Baf2SynthTile", {
                  Selected: rD
                }),
                title: pD,
                "aria-label": pD,
                "aria-pressed": rD,
                onClick: () => {
                  rD || (LD(DD), KD.send(`${Pz} ${zD[0]} ${zD[1]} ${zD[2]} ${wD}`))
                },
                children: (0, xK.jsx)(ds.d, {
                  itemName: DD,
                  amount: 0
                })
              })
            }, DD)
          }))
        })]
      })
    }
    const qr = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function DL(DD) {
      let {
        kind: zD,
        tier: wD,
        coupled: pD,
        level: sD,
        slot: KD
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), cD = FD(lz);
      if (!pD && null !== wD && wD < cD) return (0, xK.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, xK.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, xK.jsx)(bs.e, {
            name: "lock"
          })
        }), (0, xK.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: rD("buildAFactory2Game:upgradeLocked")
        }), (0, xK.jsx)("span", {
          className: "Baf2TierTag",
          children: rD("buildAFactory2Game:tierTag", {
            tier: String(cD)
          })
        })]
      });
      const gD = function(DD, zD) {
          if (LD() && "Crusher" !== DD && null !== zD) {
            if (zL(Nz, zD)) return {
              item: Nz,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (zL(Wz, zD)) return {
              item: Wz,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: lz,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(zD, wD),
        RD = rD(pD ? qr[sD - 1] : gD.emptyKey),
        AD = null !== wD ? function(DD, zD, wD, pD) {
          if (!LD() || !wD || "Crusher" === DD || zD < 10) return null;
          const sD = FD(Nz);
          if (pD < 3 && sD > 1 && (2 === pD || zD >= sD)) return {
            tier: sD,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const KD = FD(Wz);
          if (1 === pD && KD > 1) return {
            tier: KD,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(zD, wD, pD, sD) : null;
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2UpgradeSocket", {
          Fitted: pD
        }),
        children: [(0, xK.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [pD && KD, !pD && (0, xK.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, xK.jsx)(ds.d, {
              itemName: gD.item,
              amount: 0
            })
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, xK.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: rD("buildAFactory2Game:upgradeTitle")
          }), (0, xK.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: RD
          }), pD && sD >= 2 && "Crusher" === zD && (0, xK.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: rD("buildAFactory2Game:couplerCrusherHint")
          }), AD && null !== wD && wD < AD.tier && (0, xK.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, xK.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, xK.jsx)(bs.e, {
                name: "lock"
              })
            }), rD(AD.lockedKey), (0, xK.jsx)("span", {
              className: "Baf2TierTag",
              children: rD("buildAFactory2Game:tierTag", {
                tier: String(AD.tier)
              })
            })]
          }), AD && null !== wD && wD >= AD.tier && (0, xK.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: rD(AD.nextKey)
          })]
        })]
      })
    }

    function zL(DD, zD) {
      const wD = FD(DD);
      return wD > 1 && zD >= wD
    }
    var wL = wD(37015);
    const pL = (0, HD.I)(Sz.Condenser, Sz.Condenser.fluidMade),
      sL = .05;
    class KL extends Pr {}

    function rL(DD) {
      return JK(DD, "")
    }

    function LL(DD, zD, wD) {
      return DD(zD ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: wD
      })
    }

    function cL(DD, zD, wD, pD) {
      return wD <= sL && pD <= sL ? null : pD <= sL || wD <= sL ? LL(DD, zD, pD <= sL ? JK(wD, "+") : JK(pD, "\u2212")) : DD(zD ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: rL(wD),
        used: rL(pD)
      })
    }

    function gL(DD, zD) {
      return Math.min(100, 100 * DD / Math.max(1, zD))
    }

    function RL(DD) {
      let {
        stored: zD,
        cap: wD,
        netPerS: pD,
        rates: sD,
        cryo: KD
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), LD = function(DD, zD, wD, pD) {
        return wD <= 0 ? DD("buildAFactory2Game:waterNoStorage") : zD >= wD ? DD("buildAFactory2Game:powerFull") : pD > sL ? DD("buildAFactory2Game:powerFullIn", {
          time: XK(DD, (wD - zD) / pD)
        }) : pD < -.05 ? zD <= 0 ? DD("buildAFactory2Game:waterEmpty") : DD("buildAFactory2Game:powerEmptyIn", {
          time: XK(DD, zD / -pD)
        }) : DD("buildAFactory2Game:powerSteady")
      }(rD, zD, wD, pD), cD = wD > 0 && zD < wD && Math.abs(pD) <= sL, gD = rD(KD ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), RD = null !== sD ? `${sD} \xb7 ${LD}` : cD ? gD : `${gD} \xb7 ${LD}`;
      return (0, xK.jsxs)(xK.Fragment, {
        children: [(0, xK.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, xK.jsx)("div", {
            style: {
              width: `${gL(zD,wD)}%`
            }
          })
        }), (0, xK.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, xK.jsx)("span", {
            children: wD > 0 && rD("buildAFactory2Game:powerStored", {
              stored: (0, HD.R)(zD),
              cap: (0, HD.R)(wD)
            })
          }), (0, xK.jsx)("span", {
            className: Vs()("Baf2WaterNet", {
              Draining: pD < -.05
            }),
            children: RD
          })]
        })]
      })
    }

    function AL(DD) {
      let {
        water: zD,
        at: wD,
        side: pD = null
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), KD = or(), [rD, LD, cD] = zD;
      return (0, xK.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, xK.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, xK.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: sD(null === pD ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${pD}`)
          }), (0, xK.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              KD.send(`${HD.G} ${wD[0]} ${wD[1]} ${wD[2]}${"cryoOut"===pD?" cryo":""}`)
            },
            children: sD("buildAFactory2Game:waterDetails")
          })]
        }), (0, xK.jsx)(RL, {
          stored: rD,
          cap: LD,
          netPerS: cD,
          rates: LL(sD, "cryoOut" === pD, JK(Math.abs(cD), cD < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === pD
        })]
      })
    }

    function UL(DD, zD) {
      var wD, pD, sD;
      const KD = !0 === zD.baf2WaterCryo,
        rD = null !== (wD = null === (pD = zD.baf2WaterMakers.find((DD => DD[0] === (KD ? HD.e : "Condenser")))) || void 0 === pD ? void 0 : pD[1]) && void 0 !== wD ? wD : 0,
        LD = [],
        cD = (zD, wD, pD) => {
          zD > 0 && LD.push(DD(1 === zD ? wD : pD, {
            count: String(zD)
          }))
        };
      return KD ? cD(rD, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : cD(rD, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), cD(null !== (sD = zD.baf2WaterPipes) && void 0 !== sD ? sD : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), cD(zD.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), LD.join(" \xb7 ")
    }

    function fL(DD, zD) {
      if (!0 === zD.baf2WaterCryo) return function(DD, zD) {
        const wD = Sz[HD.e];
        switch (zD.baf2WaterThis) {
          case "pipe":
            return {
              text: DD("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: DD("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: DD("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: DD("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: DD("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: DD("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: DD("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var pD;
            const [sD, KD] = null !== (pD = zD.baf2WaterThisRates) && void 0 !== pD ? pD : [(0, HD.I)(wD, wD.cryoMade), (0, HD.I)(wD, wD.powerPerOp)];
            return !0 === zD.baf2WaterDriven ? {
              text: DD("buildAFactory2Game:cryoThisMixerDriven", {
                rate: rL(sD)
              }),
              bad: !1
            } : {
              text: DD("buildAFactory2Game:cryoThisMixer", {
                rate: rL(sD),
                power: rL(KD)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: DD("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(DD, zD);
      const wD = !0 === zD.baf2WaterDriven,
        pD = Sz.Condenser;
      switch (zD.baf2WaterThis) {
        case "pipe":
          return {
            text: DD("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: DD("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: DD("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: DD("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: DD("buildAFactory2Game:waterThisTank", {
              tank: (0, HD.R)(HD.w),
              cap: (0, HD.R)(zD.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var sD;
          const [KD, rD] = null !== (sD = zD.baf2WaterThisRates) && void 0 !== sD ? sD : [pL, (0, HD.I)(pD, pD.powerPerOp)];
          return wD ? {
            text: DD("buildAFactory2Game:waterThisCondenserDriven", {
              rate: rL(KD)
            }),
            bad: !1
          } : {
            text: DD("buildAFactory2Game:waterThisCondenser", {
              rate: rL(KD),
              power: rL(rD)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: DD("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function IL(DD, zD) {
      const wD = zD.baf2WaterMakers.some((DD => !0 === DD[5]));
      if (!0 === zD.baf2WaterCryo) {
        const pD = zD.baf2WaterUsedPerS - zD.baf2WaterMadePerS,
          sD = wD || pD <= sL ? 0 : (0, HD.H)(pD);
        return 0 === sD ? null : sD > 1 ? DD("buildAFactory2Game:cryoNextMixers", {
          mixers: String(sD)
        }) : DD("buildAFactory2Game:cryoNextOne")
      }
      const pD = wD ? null : function(DD, zD) {
        const wD = zD - DD;
        return wD <= sL ? null : Math.ceil(wD / pL)
      }(zD.baf2WaterMadePerS, zD.baf2WaterUsedPerS);
      return null === pD ? null : pD > 1 ? DD("buildAFactory2Game:waterNextCondensers", {
        condensers: String(pD)
      }) : DD("buildAFactory2Game:waterNextOne")
    }

    function BL(DD) {
      let {
        item: zD,
        label: wD,
        note: pD,
        value: sD,
        dim: KD,
        bad: rD
      } = DD;
      return (0, xK.jsxs)("li", {
        className: Vs()("Baf2WaterRow", {
          Dim: KD,
          Bad: rD
        }),
        children: [(0, xK.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: zD,
            amount: 0
          })
        }), (0, xK.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, xK.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: wD
          }), pD && (0, xK.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: pD
          })]
        }), (0, xK.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: sD
        })]
      })
    }

    function GL(DD) {
      return wL.m[DD] ? DD : "Reactor Port"
    }

    function hL(DD) {
      let {
        message: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), pD = !0 === zD.baf2WaterCryo, sD = (DD, zD) => LL(wD, pD, JK(DD, zD));
      return (0, xK.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, xK.jsxs)("section", {
          children: [(0, xK.jsxs)("h3", {
            children: [wD("buildAFactory2Game:waterMakes"), (0, xK.jsx)("span", {
              children: sD(zD.baf2WaterMadePerS, "+")
            })]
          }), (0, xK.jsxs)("ul", {
            children: [0 === zD.baf2WaterMakers.length && (0, xK.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: wD(pD ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), zD.baf2WaterMakers.map((DD => {
              let [zD, pD, KD, rD, LD, cD] = DD;
              const gD = wD("buildAFactory2Game:powerRunning", {
                amount: String(KD)
              });
              let RD = LD > 0 ? wD("buildAFactory2Game:waterMakerPower", {
                running: gD,
                power: rL(LD)
              }) : gD;
              return cD && (RD = wD(0 === KD && rD <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, xK.jsx)(BL, {
                item: zD,
                label: `${LK(wD,zD)} \xd7${pD}`,
                note: RD,
                value: KD > 0 || cD && rD > 0 ? sD(rD, "+") : wD("buildAFactory2Game:powerIdle"),
                dim: 0 === KD && !cD,
                bad: cD
              }, zD)
            }))]
          })]
        }), (0, xK.jsxs)("section", {
          children: [(0, xK.jsxs)("h3", {
            children: [wD("buildAFactory2Game:waterUses"), (0, xK.jsx)("span", {
              children: sD(zD.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, xK.jsxs)("ul", {
            children: [0 === zD.baf2WaterUsers.length && (0, xK.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: wD(pD ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), zD.baf2WaterUsers.map((DD => {
              let [zD, pD, KD, rD] = DD;
              const LD = wL.m[zD] ? LK(wD, zD) : zD;
              return (0, xK.jsx)(BL, {
                item: GL(zD),
                label: pD > 1 ? `${LD} \xd7${pD}` : LD,
                note: rD ? wD("buildAFactory2Game:waterPortFirst") : void 0,
                value: KD > 0 ? sD(KD, "\u2212") : wD("buildAFactory2Game:powerIdle"),
                dim: 0 === KD
              }, zD)
            }))]
          })]
        })]
      })
    }

    function nL(DD) {
      var zD, wD, sD, KD, rD;
      let {
        store: LD,
        close: cD
      } = DD;
      const {
        t: gD
      } = (0, Ts.E)(), RD = function(DD) {
        const [zD, wD] = (0, pD.useState)((() => DD.get()));
        return (0, pD.useEffect)((() => (wD(DD.get()), DD.subscribe((() => {
          wD(DD.get())
        })))), [DD]), zD
      }(LD), AD = null !== (zD = null === RD || void 0 === RD ? void 0 : RD.baf2WaterStored) && void 0 !== zD ? zD : 0, UD = null !== (wD = null === RD || void 0 === RD ? void 0 : RD.baf2WaterCap) && void 0 !== wD ? wD : 0, fD = null !== (sD = null === RD || void 0 === RD ? void 0 : RD.baf2WaterMadePerS) && void 0 !== sD ? sD : 0, ID = null !== (KD = null === RD || void 0 === RD ? void 0 : RD.baf2WaterUsedPerS) && void 0 !== KD ? KD : 0, BD = null !== (rD = null === RD || void 0 === RD ? void 0 : RD.baf2WaterNetPerS) && void 0 !== rD ? rD : fD - ID, GD = RD && fL(gD, RD), hD = RD && IL(gD, RD), nD = !0 === (null === RD || void 0 === RD ? void 0 : RD.baf2WaterCryo);
      return (0, xK.jsx)(Xr.c, {
        close: cD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== RD && UD <= 0 ? (0, xK.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, xK.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, xK.jsx)(ds.d, {
                  itemName: nD ? Bw.f : HD.o,
                  amount: 0
                })
              }), (0, xK.jsxs)("div", {
                children: [(0, xK.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: gD(nD ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), RD && (0, xK.jsx)("p", {
                  children: UL(gD, RD)
                })]
              })]
            }), (0, xK.jsx)(Vr.k, {
              onClick: cD
            })]
          }), RD && GD && (0, xK.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, xK.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, xK.jsx)(RL, {
                stored: AD,
                cap: UD,
                netPerS: BD,
                cryo: nD,
                rates: cL(gD, nD, fD, ID)
              })
            }), (0, xK.jsx)("div", {
              className: Vs()("Baf2WaterThis", {
                Bad: GD.bad
              }),
              children: GD.text
            }), RD.baf2WaterDriven && (0, xK.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, xK.jsx)(bs.e, {
                name: "bolt"
              }), gD(nD ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), hD && (0, xK.jsx)("p", {
              className: "Baf2WaterNext",
              children: hD
            }), (0, xK.jsx)(hL, {
              message: RD
            })]
          })]
        })
      })
    }
    class ML {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(DD, zD) {
        const wD = this.get(DD);
        wD && null === zD.opLeftMs && null === zD.fuelLeftMs && zD.status === wD.status ? zD = {
          ...zD,
          opLeftMs: wD.opLeftMs,
          fuelLeftMs: wD.fuelLeftMs,
          burning: wD.burning
        } : this.updates++, this.pos = DD, this.view = zD;
        for (const pD of this.listeners) pD()
      }
      get(DD) {
        return null !== this.pos && this.pos[0] === DD[0] && this.pos[1] === DD[1] && this.pos[2] === DD[2] ? this.view : null
      }
      forget(DD) {
        null !== this.get(DD) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
    }

    function OL(DD, zD, wD, pD) {
      return "noFuel" === zD && pD && !sw(Sz[DD]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === zD && !0 === (null === wD || void 0 === wD ? void 0 : wD.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === zD && !0 === (null === wD || void 0 === wD ? void 0 : wD.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === zD && !0 === (null === wD || void 0 === wD ? void 0 : wD.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === zD && !0 === (null === wD || void 0 === wD ? void 0 : wD.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : JL(zD, wD) ? "buildAFactory2Game:machineStatus_noInputShort" : function(DD, zD) {
        const wD = Sz[DD];
        if ("noFuel" === zD && void 0 !== wD.fuels) return sw(wD) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (wD.mobFarm && ("noInput" === zD || "badInput" === zD)) return `buildAFactory2Game:machineStatus_${zD}MobFarm`;
        if ("outputFull" === zD && (void 0 !== wD.table || wD.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === zD && uz(wD)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== wD.cryoMade && ("noInput" === zD || "noOutlet" === zD || "fluidFull" === zD)) return `buildAFactory2Game:machineStatus_${zD}Mixer`;
        return `buildAFactory2Game:machineStatus_${zD}`
      }(DD, zD)
    }

    function JL(DD, zD) {
      return "noInput" === DD && null !== zD && void 0 !== zD && zD.input && zD.inputShort ? {
        input: zD.input,
        short: zD.inputShort
      } : null
    }

    function EL(DD) {
      return Ps(DD) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== DD.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function QL(DD) {
      const zD = (0, SD.ue)(DD);
      return `Baf2Pane Baf2Pane${zD.charAt(0).toUpperCase()}${zD.slice(1)}`
    }

    function XL(DD, zD) {
      const [wD, sD] = (0, pD.useState)((() => DD.get(zD)));
      return (0, pD.useEffect)((() => {
        sD(DD.get(zD));
        const wD = DD.subscribe((() => {
          sD(DD.get(zD))
        }));
        return () => {
          wD(), DD.forget(zD)
        }
      }), [DD, ...zD]), wD
    }

    function VL(DD, zD, wD, pD) {
      const sD = Sz[DD],
        KD = zD && sD.couplable ? mz(sD, wD) : sD,
        rD = null !== pD && zw(KD) ? function(DD, zD) {
          var wD;
          return null !== (wD = null !== zD && zw(DD) ? Lw[zD] : void 0) && void 0 !== wD ? wD : DD.opMs
        }(KD, gw(pD)) : KD.opMs;
      return rD === KD.opMs ? KD : {
        ...KD,
        opMs: rD
      }
    }

    function PL(DD) {
      let {
        running: zD,
        opMs: wD,
        opLeftMs: pD,
        updateCount: sD
      } = DD;
      return (0, xK.jsx)("div", {
        className: Vs()("Baf2MachineProgress", {
          Running: zD
        }),
        children: (0, xK.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: wD / 1e3 + "s",
            animationDelay: null === pD ? void 0 : (pD - wD) / 1e3 + "s"
          }
        }, sD)
      })
    }

    function CL(DD) {
      let {
        running: zD,
        leftMs: wD,
        periodMs: pD,
        updateCount: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)(), rD = Math.min(Math.max(null !== wD && void 0 !== wD ? wD : 0, 0), pD), LD = zD && rD > 0, cD = KD("buildAFactory2Game:machineBarFuel");
      return (0, xK.jsx)("div", {
        className: Vs()("Baf2FuelBurn", {
          Draining: LD
        }),
        role: "img",
        title: cD,
        "aria-label": cD,
        children: (0, xK.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: LD ? {
            animationDuration: pD / 1e3 + "s",
            animationDelay: (rD - pD) / 1e3 + "s"
          } : {
            transform: `scaleY(${rD/pD})`
          }
        }, sD)
      })
    }

    function xL(DD, zD, wD) {
      let [pD, sD] = wD;
      const KD = 1 !== pD ? xs(zD) : null;
      return {
        amount: pD,
        have: sD,
        item: DD(KD || rK(zD))
      }
    }

    function TL(DD) {
      return zw(DD) ? "buildAFactory2Game:machineBarMining" : ww(DD) ? "buildAFactory2Game:machineBarCutting" : void 0 !== DD.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function bL(DD) {
      var zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD;
      let {
        kind: OD,
        jp: JD,
        store: ED,
        power: QD,
        renderSlot: XD
      } = DD;
      const {
        t: VD
      } = (0, Ts.E)(), PD = XL(ED, JD), CD = Sz[OD], xD = null !== (zD = null === PD || void 0 === PD ? void 0 : PD.coupled) && void 0 !== zD && zD, TD = null !== (wD = null === PD || void 0 === PD ? void 0 : PD.couplerLevel) && void 0 !== wD ? wD : 1, bD = VL(OD, xD, TD, null !== (pD = null === PD || void 0 === PD || null === (sD = PD.dug) || void 0 === sD ? void 0 : sD.item) && void 0 !== pD ? pD : null), jD = null !== (KD = null === PD || void 0 === PD ? void 0 : PD.status) && void 0 !== KD ? KD : null, dD = null !== (rD = null === PD || void 0 === PD ? void 0 : PD.power) && void 0 !== rD ? rD : null, SD = null !== (LD = null === PD || void 0 === PD ? void 0 : PD.opLeftMs) && void 0 !== LD ? LD : null, iD = null !== (cD = null === PD || void 0 === PD ? void 0 : PD.dug) && void 0 !== cD ? cD : null, lD = null !== iD && zw(CD) ? Lw[null !== (gD = gw(iD.item)) && void 0 !== gD ? gD : ""] : void 0, WD = void 0 === lD ? null : 6e4 / lD, ND = null !== (RD = null === PD || void 0 === PD ? void 0 : PD.powerCap) && void 0 !== RD ? RD : 4e3, ZD = null !== (AD = null === PD || void 0 === PD ? void 0 : PD.tier) && void 0 !== AD ? AD : null, yD = void 0 !== bD.powerMade, kD = null !== CD.fuelSlot ? XD(CD.fuelSlot) : null, mD = kz(CD), eD = !xD && !0 === (null === PD || void 0 === PD ? void 0 : PD.fuelFed), aD = !xD && !0 === (null === PD || void 0 === PD ? void 0 : PD.fuelFeeds), uD = null !== CD.fuelSlot && !xD, vD = null !== (UD = null === PD || void 0 === PD ? void 0 : PD.fuelLeftMs) && void 0 !== UD ? UD : null, tD = function(DD, zD, wD) {
        var pD;
        const sD = null === zD ? void 0 : Kw[zD];
        return Math.max(null !== (pD = null !== sD && void 0 !== sD ? sD : wD) && void 0 !== pD ? pD : 0, DD.opMs)
      }(bD, null !== (fD = null === PD || void 0 === PD ? void 0 : PD.burning) && void 0 !== fD ? fD : null, vD), FD = null !== (ID = null === PD || void 0 === PD ? void 0 : PD.fuelKeep) && void 0 !== ID ? ID : null, YD = null === jD ? null : OL(OD, jD, PD, eD), HD = null === jD ? null : JL(jD, PD);
      return (0, xK.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, xK.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, xK.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: VD(rK(OD))
          }), iD && (0, xK.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [VD("Tree Cutter" === OD ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, xK.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, xK.jsx)(ds.d, {
                itemName: iD.item,
                amount: 0
              })
            }), (0, xK.jsx)(Ss.e, {
              text: iD.name
            })]
          }), null !== WD && (0, xK.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: VD("buildAFactory2Game:machineDigsFixed", {
              perMin: String(WD)
            })
          }), (null === PD || void 0 === PD ? void 0 : PD.field) && (0, xK.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, xK.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, xK.jsx)(ds.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), VD("buildAFactory2Game:machineField", {
              planted: String(PD.field[0]),
              ripe: String(PD.field[1])
            })]
          }), (0, xK.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, xK.jsxs)("div", {
              className: Vs()("Baf2MachineColumn", {
                Baf2Burns: uD
              }),
              children: [null !== bD.inputSlot && (0, xK.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, xK.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: VD(EL(bD))
                }), XD(bD.inputSlot)]
              }), null !== CD.fuelSlot && !xD && (0, xK.jsxs)("div", {
                className: Vs()("Baf2MachineSlot", {
                  Baf2FuelFed: eD
                }),
                children: [(0, xK.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [eD && (0, xK.jsx)(bs.e, {
                    name: "fire"
                  }), VD("buildAFactory2Game:machineFuel")]
                }), (0, xK.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, xK.jsx)(CL, {
                    running: "running" === jD,
                    leftMs: vD,
                    periodMs: tD,
                    updateCount: ED.updateCount
                  }), kD]
                })]
              }), null !== CD.fuelSlot && xD && (0, xK.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, xK.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: VD("buildAFactory2Game:machineFuel")
                }), (0, xK.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: VD("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": VD("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, xK.jsx)(bs.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, xK.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, xK.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: VD(TL(bD))
              }), (0, xK.jsx)(PL, {
                running: "running" === jD,
                opMs: bD.opMs,
                opLeftMs: SD,
                updateCount: ED.updateCount
              })]
            }), bD.outputSlots.length > 0 && (0, xK.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, xK.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: VD("buildAFactory2Game:machineOutput")
              }), (0, xK.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: bD.outputSlots.map((DD => (0, xK.jsx)("div", {
                  children: XD(DD)
                }, DD)))
              })]
            }), null !== dD && yD && (0, xK.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, xK.jsx)("div", {
                style: {
                  height: 100 * dD / ND + "%"
                }
              })
            })]
          }), uD && null !== FD && (0, xK.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, xK.jsx)(bs.e, {
              name: "arrows-rotate"
            }), VD(ww(bD) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(FD)
            })]
          }), (eD || aD) && (0, xK.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, xK.jsx)(bs.e, {
              name: "fire"
            }), VD(eD ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), CD.couplable && (0, xK.jsx)(DL, {
            kind: OD,
            tier: ZD,
            coupled: xD,
            level: TD,
            slot: mD === CD.fuelSlot ? kD : null !== mD ? XD(mD) : null
          }), null !== dD && !yD && !0 === (null === PD || void 0 === PD ? void 0 : PD.reactorPowered) && (0, xK.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: VD("buildAFactory2Game:machineReactorPowered")
          }), null !== dD && !yD && !0 !== (null === PD || void 0 === PD ? void 0 : PD.reactorPowered) && (0, xK.jsx)(dr, {
            stored: dD,
            cap: ND,
            rates: null !== (BD = null === PD || void 0 === PD ? void 0 : PD.powerRates) && void 0 !== BD ? BD : null
          }), (null === PD || void 0 === PD ? void 0 : PD.water) && (0, xK.jsx)(AL, {
            water: PD.water,
            at: JD,
            side: PD.cryo ? "waterIn" : null
          }), (null === PD || void 0 === PD ? void 0 : PD.cryo) && (0, xK.jsx)(AL, {
            water: PD.cryo,
            at: JD,
            side: "cryoOut"
          }), null !== PD && void 0 !== PD && PD.inertCoupler ? (0, xK.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: VD("buildAFactory2Game:machineStatus_couplerOff", {
              item: LK(VD, PD.inertCoupler)
            })
          }) : null !== YD && (0, xK.jsx)("div", {
            className: Vs()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== jD
            }),
            children: VD(YD, HD ? xL(VD, HD.input, HD.short) : void 0)
          })]
        }), (0, xK.jsxs)("div", {
          className: Vs()("Baf2MachineSide", {
            Baf2SynthSide: uz(CD)
          }),
          children: [uz(CD) && (0, xK.jsx)(Hr, {
            jp: JD,
            taught: null !== (GD = null === PD || void 0 === PD ? void 0 : PD.taught) && void 0 !== GD ? GD : null
          }, JD.join(",")), yD && (0, xK.jsx)(ir, {
            kind: OD,
            def: bD,
            jp: JD,
            power: QD,
            stored: null !== dD && void 0 !== dD ? dD : 0,
            cap: ND
          }), oD(CD) && (0, xK.jsx)(tr, {
            jp: JD,
            input: null !== (hD = null === PD || void 0 === PD ? void 0 : PD.input) && void 0 !== hD ? hD : null,
            drops: null !== (nD = null === PD || void 0 === PD ? void 0 : PD.farm) && void 0 !== nD ? nD : null,
            seconds: String(bD.opMs / 1e3)
          }), !yD && !oD(CD) && !uz(CD) && (0, xK.jsx)(rr, {
            kind: OD,
            def: bD,
            input: null !== (MD = null === PD || void 0 === PD ? void 0 : PD.input) && void 0 !== MD ? MD : null,
            tier: null !== ZD && void 0 !== ZD ? ZD : 1,
            noSeeds: !0 === (null === PD || void 0 === PD ? void 0 : PD.noSeeds)
          })]
        })]
      })
    }

    function jL(DD, zD, wD, pD) {
      var sD;
      const KD = Sz[DD],
        rD = [KD.inputSlot, KD.fuelSlot, ...null !== (sD = KD.inputSlots) && void 0 !== sD ? sD : []].filter((DD => null !== DD));
      return {
        render: sD => {
          let {
            jp: KD,
            renderSlot: rD
          } = sD;
          return (0, xK.jsx)(er.Provider, {
            value: pD,
            children: (0, xK.jsx)(bL, {
              kind: DD,
              jp: KD,
              store: zD,
              power: wD,
              renderSlot: rD
            })
          })
        },
        quickMoveRange: rD.length > 0 ? [Math.min(...rD), Math.max(...rD) + 1] : [0, 0],
        className: QL(DD)
      }
    }
    const dL = "Assembler";

    function SL(DD) {
      var zD, wD, pD, sD, KD, rD, LD, cD, gD;
      let {
        jp: RD,
        store: AD,
        renderSlot: UD
      } = DD;
      const {
        t: fD
      } = (0, Ts.E)(), ID = XL(AD, RD), BD = null !== (zD = null === ID || void 0 === ID ? void 0 : ID.tier) && void 0 !== zD ? zD : 1, GD = null !== (wD = null === ID || void 0 === ID ? void 0 : ID.taught) && void 0 !== wD ? wD : null, hD = Yz(dL, {
        coupled: !1,
        taught: GD
      }), nD = null !== (pD = hD.bench) && void 0 !== pD ? pD : null, MD = null !== (sD = null === ID || void 0 === ID ? void 0 : ID.status) && void 0 !== sD ? sD : null, OD = null !== (KD = null === ID || void 0 === ID ? void 0 : ID.power) && void 0 !== KD ? KD : null, JD = null !== (rD = null === ID || void 0 === ID ? void 0 : ID.powerCap) && void 0 !== rD ? rD : 4e3;
      return (0, xK.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, xK.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, xK.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: fD(rK(dL))
          }), nD && (0, xK.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [fD("buildAFactory2Game:benchMakes"), (0, xK.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, xK.jsx)(ds.d, {
                itemName: nD.output,
                amount: 0
              })
            }), (null === ID || void 0 === ID ? void 0 : ID.taughtName) && (0, xK.jsx)(Ss.e, {
              text: ID.taughtName
            }), nD.outputAmount > 1 && (0, xK.jsxs)("span", {
              children: ["\xd7", nD.outputAmount]
            })]
          }), !nD && (0, xK.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: fD("buildAFactory2Game:benchTeachHint")
          }), (0, xK.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, xK.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (LD = hD.inputSlots) && void 0 !== LD ? LD : []).map(((DD, zD) => {
                const wD = null === nD || void 0 === nD ? void 0 : nD.inputs[zD];
                return (0, xK.jsxs)("div", {
                  className: Vs()("Baf2BenchInput", {
                    Spare: !wD
                  }),
                  children: [(0, xK.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [UD(DD), wD && (0, xK.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, xK.jsx)(ds.d, {
                        itemName: wD.item,
                        amount: 0
                      })
                    })]
                  }), (0, xK.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: wD ? `\xd7${wD.amount}` : "\xa0"
                  })]
                }, DD)
              }))
            }), (0, xK.jsx)(PL, {
              running: "running" === MD,
              opMs: hD.opMs,
              opLeftMs: null !== (cD = null === ID || void 0 === ID ? void 0 : ID.opLeftMs) && void 0 !== cD ? cD : null,
              updateCount: AD.updateCount
            }), (0, xK.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, xK.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: fD("buildAFactory2Game:machineOutput")
              }), (0, xK.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: hD.outputSlots.map((DD => (0, xK.jsx)("div", {
                  children: UD(DD)
                }, DD)))
              })]
            })]
          }), null !== OD && (0, xK.jsx)(dr, {
            stored: OD,
            cap: JD,
            rates: null !== (gD = null === ID || void 0 === ID ? void 0 : ID.powerRates) && void 0 !== gD ? gD : null
          }), null !== MD && (0, xK.jsx)("div", {
            className: Vs()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== MD
            }),
            children: fD(OL(dL, MD, ID, !1))
          }), nD && nD.inputs.length > 1 && (0, xK.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: fD("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, xK.jsx)(cr, {
            taught: GD,
            tier: BD
          }), nD && (0, xK.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: fD("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function iL(DD) {
      var zD;
      const wD = null !== (zD = Sz[dL].inputSlots) && void 0 !== zD ? zD : [];
      return {
        render: zD => {
          let {
            jp: wD,
            renderSlot: pD
          } = zD;
          return (0, xK.jsx)(SL, {
            jp: wD,
            store: DD,
            renderSlot: pD
          })
        },
        quickMoveRange: [Math.min(...wD), Math.max(...wD) + 1],
        className: QL(dL)
      }
    }
    var lL = wD(103),
      WL = wD(1127),
      NL = wD(4257);
    const ZL = 600,
      yL = .5,
      kL = 4,
      mL = 1200,
      eL = 140,
      oL = 100,
      aL = 32,
      uL = 16,
      vL = 100.5,
      tL = 90,
      FL = 1.5,
      YL = 50;

    function HL(DD) {
      switch (jw(DD)) {
        case "Fuel Rod":
          return 1;
        case "Graphite Block":
          return 2;
        case "Coolant Channel":
          return 3;
        default:
          return 0
      }
    }
    const qL = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Dc(DD) {
      const zD = Math.ceil(60 * DD / oL);
      return {
        fuel: Math.max(aL, zD),
        waste: Math.max(uL, zD)
      }
    }

    function zc(DD, zD, wD) {
      const [pD, sD, KD] = [DD - 2, zD - 2, wD - 2];
      return 2 * (pD * sD + sD * KD + KD * pD) * eL
    }

    function wc(DD, zD, wD) {
      return Math.max(0, DD - 2) * Math.max(0, zD - 2) * Math.max(0, wD - 2)
    }

    function pc(DD, zD) {
      const [wD, pD, sD] = DD, KD = wD * pD * sD, rD = new Float32Array(KD);
      let LD = 0,
        cD = 0,
        gD = 0,
        RD = 0,
        AD = 0;
      const UD = (DD, KD, rD) => DD < 0 || DD >= wD || KD < 0 || KD >= pD || rD < 0 || rD >= sD ? 0 : zD[(KD * sD + rD) * wD + DD];
      for (let GD = 0; GD < pD; GD++)
        for (let DD = 0; DD < sD; DD++)
          for (let pD = 0; pD < wD; pD++) {
            const KD = (GD * sD + DD) * wD + pD,
              fD = zD[KD];
            if (1 === fD) {
              LD++;
              let zD = 0;
              for (const [wD, sD, KD] of qL) {
                const rD = UD(pD + wD, GD + sD, DD + KD);
                1 !== rD && 2 !== rD || zD++
              }
              rD[KD] = ZL * (1 + yL * Math.min(zD, kL)), RD += rD[KD]
            } else if (2 === fD) cD++;
            else if (3 === fD) {
              gD++;
              qL.some((zD => {
                let [wD, sD, KD] = zD;
                return 1 === UD(pD + wD, GD + sD, DD + KD)
              })) && (AD += mL)
            }
          }
      const fD = zc(wD + 2, pD + 2, sD + 2),
        ID = Math.min(RD, AD, fD),
        BD = LD > 0 ? RD * oL / LD : 0;
      return {
        rods: LD,
        graphite: cD,
        channels: gD,
        fuelHeat: RD,
        cooling: AD,
        size: fD,
        max: ID,
        vol: KD,
        powerPerUnit: BD,
        pelletsPerMin: BD > 0 ? ID / BD * 60 : 0,
        waterPerS: ID * HD.t,
        rodHeat: rD
      }
    }
    const sc = 0,
      Kc = 1,
      rc = 6,
      Lc = 7,
      cc = 8;

    function gc(DD, zD) {
      const [wD, pD, sD] = DD, KD = new Uint8Array(wD * pD * sD), rD = (DD, KD, rD) => DD < 0 || DD >= wD || KD < 0 || KD >= pD || rD < 0 || rD >= sD ? 0 : zD[(KD * sD + rD) * wD + DD];
      for (let LD = 0; LD < pD; LD++)
        for (let DD = 0; DD < sD; DD++)
          for (let pD = 0; pD < wD; pD++) {
            const cD = (LD * sD + DD) * wD + pD,
              gD = zD[cD];
            if (1 === gD) {
              let zD = 0;
              for (const [wD, sD, KD] of qL) {
                const cD = rD(pD + wD, LD + sD, DD + KD);
                zD += 1 === cD || 2 === cD ? 1 : 0
              }
              KD[cD] = Kc + Math.min(zD, kL)
            } else if (3 === gD) {
              const zD = qL.some((zD => {
                let [wD, sD, KD] = zD;
                return 1 === rD(pD + wD, LD + sD, DD + KD)
              }));
              KD[cD] = zD ? rc : Lc
            } else 2 === gD && (KD[cD] = cc)
          }
      return KD
    }

    function Rc(DD) {
      return DD.fuelHeat <= DD.cooling && DD.fuelHeat <= DD.size ? "fuel" : DD.cooling <= DD.size ? "cooling" : "size"
    }
    const Ac = tL;

    function Uc(DD, zD, wD) {
      return Math.round(DD * zD * wD * 25e3 * (1 + .25 * (Math.min(DD, zD, wD) - 2)))
    }

    function fc(DD) {
      return Math.max(0, Math.min(HD.i, DD))
    }

    function Ic(DD, zD, wD) {
      const pD = zD * fc(wD);
      return DD <= 0 ? 0 : pD > 0 ? Math.min(200, 100 * DD / pD) : 200
    }

    function Bc(DD, zD) {
      const wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? FL : 1;
      return Math.min(DD.fuelHeat * wD, DD.cooling * fc(zD), DD.size * wD)
    }

    function Gc(DD) {
      return 2 + DD / 10
    }
    const hc = "buildAFactory2Game:";

    function nc(DD) {
      var zD;
      return null !== (zD = DD.baf2RxMood) && void 0 !== zD ? zD : function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const wD = [
          ["calm", 50],
          ["warm", Ac],
          ["hot", vL]
        ];
        for (const [pD, sD] of wD)
          if (DD < sD + (pD === zD ? 3 : 0)) return pD;
        return "alarm"
      }(DD.baf2RxHeat)
    }
    const Mc = 120;

    function Oc(DD) {
      const zD = DD.baf2RxState;
      if ("running" === zD && DD.baf2RxHeat > vL) return {
        label: `${hc}rxState_tooHot`,
        tone: "bad",
        fix: `${hc}rxFix_tooHot`
      };
      switch (zD) {
        case "running":
          return {
            label: `${hc}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${hc}rxState_idle`, tone: "off", fix: `${hc}rxFix_idle`
          };
        case "scram":
          return {
            label: `${hc}rxState_scram`, tone: "off", fix: DD.baf2RxHeat < YL ? `${hc}rxFix_scramCool` : `${hc}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${hc}rxState_${zD}`, tone: "off", fix: `${hc}rxFix_${zD}`
          };
        case "melted":
          return {
            label: `${hc}rxState_melted`, tone: "bad", fix: `${hc}rxFix_melted`
          };
        default:
          return {
            label: `${hc}rxState_${zD}`, tone: "warn", fix: `${hc}rxFix_${zD}`
          }
      }
    }

    function Jc(DD) {
      const [zD, wD, pD] = DD.baf2RxStats;
      return {
        fuelHeat: zD,
        cooling: wD * (DD.baf2RxCryo ? Math.max(1, fc(DD.baf2RxWater / 100)) : 1),
        size: pD
      }
    }

    function Ec(DD) {
      var zD;
      const wD = "idle" === DD.baf2RxState || "running" === DD.baf2RxState && DD.baf2RxHeat <= vL || "scram" === DD.baf2RxState && DD.baf2RxHeat < YL;
      if (0 === (DD.baf2RxFlags & Oz) || !DD.baf2RxFormed || !wD) return null;
      const {
        fuelHeat: pD,
        cooling: sD,
        size: KD
      } = Jc(DD), rD = Math.min(pD, sD, KD), LD = Rc({
        fuelHeat: pD,
        cooling: sD,
        size: KD
      }), cD = "cooling" === LD && !0 === DD.baf2RxCryoOpen && !DD.baf2RxCryo, gD = null !== (zD = DD.baf2RxCells) && void 0 !== zD ? zD : "", RD = ("fuel" === LD || "cooling" === LD && !0 === DD.baf2RxCryo) && gD.length > 0 && !gD.includes(String(0)), AD = cD ? "Cryo" : "scram" === DD.baf2RxState ? "Off" : "";
      return rD < 12e3 ? {
        key: `${hc}rxGrow_${RD?"full":LD}${AD}`,
        amount: rD
      } : null
    }

    function Qc(DD, zD) {
      return DD[0] === zD[0] && DD[1] === zD[1] && DD[2] === zD[2]
    }

    function Xc(DD) {
      return [...DD].sort(((DD, zD) => Number(zD[2] < zD[1]) - Number(DD[2] < DD[1])))
    }

    function Vc(DD, zD) {
      return zD.some((zD => {
        let [wD, pD] = zD;
        return !(pD <= 0) && ["edge", "cap", "wall", "inside"].some((zD => wD === rp(DD, zD)))
      }))
    }

    function Pc(DD, zD, wD) {
      const pD = DD.baf2RxFuel - DD.baf2RxPu > 0 ? wD : 0;
      return {
        full: DD.baf2RxWaste > zD - 3,
        fullInS: pD > 0 ? Math.max(0, zD - DD.baf2RxWaste) / pD : null
      }
    }
    const Cc = {
      frame: {
        size: .4,
        colour: [.2, .24, .32],
        alpha: .55
      },
      casing: {
        size: .4,
        colour: [.9, .94, 1],
        alpha: .55
      },
      cell: {
        size: .35,
        colour: [1, .82, .3],
        alpha: .55
      },
      rod: {
        size: .3,
        colour: [.71, 1, .23],
        alpha: .55
      },
      channel: {
        size: .3,
        colour: [.25, .82, .94],
        alpha: .55
      },
      graphite: {
        size: .3,
        colour: [.12, .12, .14],
        alpha: .6
      },
      wrong: {
        size: 1.04,
        colour: [1, .22, .18],
        alpha: .35
      }
    };

    function xc(DD) {
      return Tc[DD]
    }
    const Tc = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function bc(DD) {
      let [zD, wD, pD] = DD;
      return Math.ceil(zc(zD, wD, pD) * HD.t)
    }

    function jc(DD, zD) {
      return "battery" === DD ? zD[0] * zD[1] * zD[2] : function(DD) {
        let [zD, wD, pD] = DD;
        return zD * wD * pD - Math.max(0, zD - 2) * Math.max(0, wD - 2) * Math.max(0, pD - 2)
      }(zD) - 1
    }

    function dc(DD) {
      const zD = Math.max(0, DD);
      if (zD < 10) return String(Math.round(10 * zD) / 10);
      if (zD < 1e4) return Math.round(zD).toLocaleString("en-US");
      if (zD < 1e6) return `${zD<1e5?(Math.floor(zD/100)/10).toFixed(1):Math.floor(zD/1e3)}k`;
      const wD = zD / 1e6;
      return `${wD<10?(Math.floor(100*wD)/100).toFixed(2):wD<100?(Math.floor(10*wD)/10).toFixed(1):Math.floor(wD)}M`
    }

    function Sc(DD) {
      return DD <= 0 ? "0" : DD >= 10 ? String(Math.round(DD)) : DD.toFixed(DD >= 1 ? 1 : 2)
    }

    function ic(DD) {
      const zD = qw(DD, 0),
        wD = qw(DD, tw(DD) - 1);
      return {
        lo: [Math.min(zD[0], wD[0]), Math.min(zD[1], wD[1]), Math.min(zD[2], wD[2])],
        hi: [Math.max(zD[0], wD[0]) + 1, Math.max(zD[1], wD[1]) + 1, Math.max(zD[2], wD[2]) + 1]
      }
    }

    function lc(DD, zD, wD) {
      const pD = [zD[0] - DD[0], zD[1] - DD[1], zD[2] - DD[2]],
        sD = [(DD[0] + zD[0]) / 2, (DD[1] + zD[1]) / 2, (DD[2] + zD[2]) / 2],
        KD = [];
      for (let rD = 0; rD < 3; rD++) {
        const LD = (rD + 1) % 3,
          cD = (rD + 2) % 3;
        for (const gD of [DD[LD], zD[LD]])
          for (const RD of [DD[cD], zD[cD]]) {
            const DD = [0, 0, 0],
              zD = [wD, wD, wD];
            DD[rD] = sD[rD], zD[rD] = pD[rD] + wD, DD[LD] = gD, DD[cD] = RD, KD.push([DD, zD])
          }
      }
      return KD
    }
    const Wc = "buildAFactory2Game:",
      Nc = [`${Wc}colNorth`, `${Wc}colEast`, `${Wc}colSouth`, `${Wc}colWest`];

    function Zc(DD, zD) {
      const [wD, pD, sD] = DD.baf2ColAt;
      return `baf2col ${wD} ${pD} ${sD} ${zD}`
    }

    function yc(DD) {
      return function(DD) {
        if (!Number.isFinite(DD)) return "";
        const zD = Math.max(1, Math.round(DD));
        if (zD < 60) return `${zD}s`;
        const wD = zD % 60;
        return 0 === wD ? zD / 60 + "m" : `${Math.floor(zD/60)}m ${wD}s`
      }(function(DD) {
        const zD = Lp.FOCUS_BY_LASERS[Math.max(0, Math.min(4, DD))];
        return zD > 0 ? Lp.NOVA_FOCUS / zD : 1 / 0
      }(DD))
    }

    function kc(DD) {
      const zD = Math.abs(Math.round(DD));
      return zD < 1e3 ? Math.round(DD).toLocaleString("en-US") : zD < 1e6 ? `${zD<1e5?(DD/1e3).toFixed(1).replace(/\.0$/,""):Math.round(DD/1e3)}k` : `${(DD/1e6).toFixed(zD<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function mc(DD, zD, wD) {
      if (fp(zD) >= 0) {
        const zD = function(DD, zD) {
          return DD.find((DD => {
            let {
              focus: wD
            } = DD;
            return wD[0] === zD[0] && wD[2] === zD[2] && (zD[1] === wD[1] || zD[1] === wD[1] - 1)
          }))
        }(DD, wD);
        if (!zD) return null;
        const sD = function(DD) {
          let zD = 0,
            wD = 0;
          for (let pD = 0; pD < 4; pD++) zD += DD.laser[pD] ? 1 : 0, wD += DD.live[pD] ? 1 : 0;
          return {
            lasers: zD,
            live: wD,
            focusPerS: Lp.FOCUS_BY_LASERS[wD],
            drawPerS: Lp.LASER_DRAW * wD
          }
        }({
          laser: zD.lasers,
          live: zD.live
        });
        if (0 === sD.lasers || "noLasers" === zD.state) return {
          key: `${Wc}lookColNoLasers`
        };
        if (0 === sD.live) return {
          key: `${Wc}lookColOff_blocked`
        };
        if (!(zD.on && sD.live > 0) && ("running" !== (pD = zD.state) && "slowed" !== pD)) return {
          key: `${Wc}lookColOff_${zD.state}`
        };
        if (sD.live < sD.lasers) return {
          key: `${Wc}lookColLasersSome`,
          params: {
            lasers: String(sD.lasers),
            live: String(sD.live)
          }
        };
        const KD = zD.open.filter(Boolean).length;
        return KD < 4 ? {
          key: `${Wc}lookColLasersSpots`,
          params: {
            live: String(sD.live),
            spots: String(KD),
            time: yc(sD.live)
          }
        } : {
          key: `${Wc}lookColLasers`,
          params: {
            live: String(sD.live),
            time: yc(sD.live)
          }
        }
      }
      var pD;
      if (!Ip(zD)) return null;
      const sD = function(DD, zD) {
        for (const wD of DD) {
          const DD = np(wD.focus, [zD[0], zD[1], zD[2]]);
          if (DD && DD.HR === Lp.LASER_D && wD.lasers[DD.dir]) return {
            entry: wD,
            dir: DD.dir
          }
        }
        return null
      }(DD, wD);
      if (!sD) return {
        key: `${Wc}lookLaserNoCollider`
      };
      const {
        entry: KD,
        dir: rD
      } = sD;
      return KD.open[rD] ? KD.live[rD] ? {
        key: KD.on ? `${Wc}lookLaserFiring` : `${Wc}lookLaserReady`
      } : {
        key: `${Wc}lookLaserBlocked`
      } : {
        key: `${Wc}lookLaserClosed`
      }
    }

    function ec(DD, zD) {
      const wD = [];
      for (let pD = 1; pD < Lp.LASER_D; pD++) DD & 1 << zD * (Lp.LASER_D - 1) + pD - 1 && wD.push(pD);
      return wD
    }
    const oc = {
      firing: `${Wc}colSlotFiring`,
      ready: `${Wc}colSlotReady`,
      blocked: `${Wc}colSlotBlocked`,
      empty: `${Wc}colSlotEmpty`,
      closed: `${Wc}colSlotClosed`
    };

    function ac(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const KD = Ls(DD),
        rD = Ls(zD),
        LD = Ls(wD),
        cD = LD.filter(Boolean).length,
        gD = KD.filter(Boolean).length,
        RD = [0, 1, 2, 3].map((DD => rD[DD] ? KD[DD] ? LD[DD] ? pD ? "firing" : "ready" : "blocked" : (DD => ec(sD, DD).length > 0)(DD) ? "blocked" : "empty" : "closed")),
        AD = RD.indexOf("blocked"),
        UD = AD < 0 && gD > 0 ? RD.indexOf("empty") : -1;
      return RD.map(((DD, zD) => {
        const wD = zD === AD ? {
          key: `${Wc}colSlotClear`
        } : zD === UD ? {
          key: `${Wc}colSlotAdd`,
          params: {
            time: yc(Math.min(4, cD + 1))
          }
        } : null;
        return {
          dir: zD,
          tone: DD,
          title: {
            key: "blocked" !== DD || KD[zD] ? oc[DD] : `${Wc}colSlotGap`,
            keys: {
              dir: Nc[zD]
            }
          },
          hint: wD
        }
      }))
    }

    function uc(DD) {
      var zD;
      return "noPower" === DD.baf2ColState && DD.baf2ColRxState ? Oc({
        baf2RxState: DD.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (zD = DD.baf2ColRxHeat) && void 0 !== zD ? zD : 0
      }) : null
    }

    function vc(DD) {
      const zD = Ls(DD.baf2ColSpots).filter(Boolean).length,
        wD = Ls(DD.baf2ColLive);
      let pD = 0,
        sD = 0;
      return Ls(DD.baf2ColLasers).forEach(((DD, zD) => {
        DD && (pD++, sD += wD[zD] ? 0 : 1)
      })), sD > 0 ? {
        key: `${Wc}colSubSome`,
        params: {
          blocked: String(sD),
          lasers: String(pD)
        }
      } : zD < 4 ? {
        key: `${Wc}colSubSpots`,
        params: {
          lasers: String(pD),
          spots: String(zD)
        }
      } : {
        key: `${Wc}colSub`,
        params: {
          lasers: String(pD)
        }
      }
    }

    function tc(DD) {
      const zD = uc(DD);
      if ("idle" === DD.baf2ColRxState && zD) return {
        key: `${Wc}colState_noPowerIdle`
      };
      if (zD) return {
        key: `${Wc}colState_noPowerReactor`,
        keys: {
          state: zD.label
        }
      };
      if ("noInput" !== DD.baf2ColState) return {
        key: `${Wc}colState_${DD.baf2ColState}`
      };
      const wD = String(Math.max(0, Lp.NOVA_SA - DD.baf2ColSa)),
        pD = String(Math.max(0, Lp.NOVA_GD - DD.baf2ColGd));
      return "0" !== wD && "0" !== pD ? {
        key: `${Wc}colState_noInput`,
        params: {
          sa: wD,
          gd: pD
        }
      } : "0" !== wD ? {
        key: `${Wc}colState_noStarAlloy`,
        params: {
          sa: wD
        }
      } : "0" !== pD ? {
        key: `${Wc}colState_noGlowDust`,
        params: {
          gd: pD
        }
      } : {
        key: `${Wc}colState_running`
      }
    }

    function Fc(DD) {
      return DD.baf2ColP < 0 ? `${Wc}colNext` : function(DD) {
        const zD = DD.baf2ColState;
        return DD.baf2ColP >= 0 && ("blocked" === zD || "noLasers" === zD || "noPower" === zD)
      }(DD) ? `${Wc}colStalled` : null === Yc(DD) ? `${Wc}colMaking` : `${Wc}colNovaIn`
    }

    function Yc(DD) {
      if (DD.baf2ColP < 0 || DD.baf2ColWant <= 0) return null;
      const zD = DD.baf2ColFocusPerS * Math.min(1, DD.baf2ColDraw / DD.baf2ColWant);
      return zD > 0 ? Math.max(0, Lp.NOVA_FOCUS - DD.baf2ColP) / zD : null
    }

    function Hc(DD, zD) {
      const wD = [];
      for (let pD = 1; pD <= 3; pD++) {
        const sD = [DD[0], DD[1] - pD, DD[2]];
        if (!zD(sD)) return wD;
        wD.push(sD)
      }
      return []
    }

    function qc(DD, zD) {
      const wD = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let pD = 0; pD < 4; pD++) {
        const sD = pD,
          KD = hp(DD.focus, sD, Lp.LASER_D);
        if (DD.lasers[pD] || !DD.open[pD] || !zD(KD)) continue;
        const rD = [];
        for (let wD = 1; wD < Lp.LASER_D; wD++) {
          const pD = hp(DD.focus, sD, wD);
          zD(pD) || rD.push(pD)
        }
        wD.supports.push(...Hc(KD, zD)), 0 === rD.length ? wD.free.push(KD) : (wD.blocked.push(KD), wD.gaps.push(...rD))
      }
      return wD
    }
    const Dg = Lp.LASER_D - .25,
      zg = 4,
      wg = 2,
      pg = 16;
    const sg = {
        colours: [
          [90, 255, 60],
          [30, 200, 40]
        ],
        alpha: .9,
        size: [.07, .14],
        life: [.8, 1.4],
        power: [.2, .45],
        lift: .5,
        spread: .35,
        count: 2,
        blendMode: NL.f.Standard,
        soft: !0
      },
      Kg = {
        green: sg,
        pink: {
          ...sg,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function rg(DD, zD) {
      const wD = {
        ...zD.params
      };
      for (const [sD, KD] of Object.entries(null !== (pD = zD.keys) && void 0 !== pD ? pD : {})) {
        var pD;
        wD[sD] = DD(KD)
      }
      return wD
    }
    const Lg = "buildAFactory2Game:",
      cg = 2 * Lp.LASER_D + 1,
      gg = Lp.LASER_D;

    function Rg(DD) {
      return DD(`${Lg}colFocusTip`, {
        need: kc(Lp.NOVA_FOCUS)
      })
    }

    function Ag(DD, zD) {
      return DD(zD.key, rg(DD, zD))
    }

    function Ug(DD) {
      const zD = DD.getStatus();
      return {
        status: zD,
        entry: zD ? DD.entryAtRoot(zD.baf2ColAt) : void 0
      }
    }

    function fg(DD, zD) {
      return {
        left: 100 * (gg + DD) / cg + "%",
        top: 100 * (gg + zD) / cg + "%"
      }
    }

    function Ig(DD) {
      let {
        status: zD,
        entry: wD
      } = DD;
      const pD = Ls(zD.baf2ColLasers),
        sD = Ls(zD.baf2ColSpots),
        KD = Ls(zD.baf2ColLive),
        rD = !0 === (null === wD || void 0 === wD ? void 0 : wD.on),
        LD = Lp.LASER_D,
        cD = [];
      for (let fD = 0; fD < 4; fD++) {
        const [DD, , zD] = Gp[fD];
        if (KD[fD]) {
          const wD = 100 * (LD - 1) / cg,
            pD = DD + zD > 0 ? 100 * (gg + 1) / cg : 100 * (gg - (LD - 1)) / cg,
            sD = 100 * (gg + .35) / cg,
            KD = 30 / cg,
            gD = 0 !== DD ? {
              left: `${pD}%`,
              width: `${wD}%`,
              top: `${sD}%`,
              height: `${KD}%`
            } : {
              top: `${pD}%`,
              height: `${wD}%`,
              left: `${sD}%`,
              width: `${KD}%`
            };
          cD.push((0, xK.jsx)("i", {
            className: Vs()("Baf2ColDiagramBeam", {
              Off: !rD
            }),
            style: gD
          }, `beam${fD}`))
        }
        const wD = pD[fD] ? "Baf2ColDiagramLaser" : sD[fD] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        cD.push((0, xK.jsx)("i", {
          className: wD,
          style: fg(DD * LD, zD * LD)
        }, `spot${fD}`))
      }
      for (let fD = 0; fD < 4; fD++) {
        if (pD[fD] || !sD[fD]) continue;
        const [DD, , wD] = Gp[fD];
        for (const pD of ec(null !== (gD = zD.baf2ColGaps) && void 0 !== gD ? gD : 0, fD)) {
          var gD;
          cD.push((0, xK.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: fg(DD * pD, wD * pD)
          }, `gap${fD},${pD}`))
        }
      }
      for (const [fD, , ID] of null !== (RD = null === wD || void 0 === wD ? void 0 : wD.blockers) && void 0 !== RD ? RD : []) {
        var RD, AD, UD;
        const DD = fD - (null !== (AD = null === wD || void 0 === wD ? void 0 : wD.focus[0]) && void 0 !== AD ? AD : 0),
          zD = ID - (null !== (UD = null === wD || void 0 === wD ? void 0 : wD.focus[2]) && void 0 !== UD ? UD : 0);
        cD.push((0, xK.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: fg(DD, zD)
        }, `block${DD},${zD}`))
      }
      return (0, xK.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [cD, (0, xK.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Bg(DD) {
      let {
        status: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), pD = Ls(zD.baf2ColLive).filter(Boolean).length;
      return (0, xK.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, xK.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Rg(wD),
          children: wD(`${Lg}colLadder`)
        }), (0, xK.jsx)("ul", {
          children: [1, 2, 3, 4].map((DD => (0, xK.jsx)("li", {
            className: Vs()({
              On: DD === pD
            }),
            children: wD(`${Lg}colLadderChip`, {
              lasers: String(DD),
              time: yc(DD)
            })
          }, DD)))
        })]
      })
    }

    function Gg(DD) {
      let {
        item: zD,
        Qg: wD,
        need: pD,
        cap: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)(), rD = Math.min(wD, pD);
      return (0, xK.jsxs)("li", {
        className: Vs()("Baf2ColTile", {
          Short: wD < pD
        }),
        children: [(0, xK.jsx)(hg, {
          item: zD
        }), (0, xK.jsx)("b", {
          className: "Baf2ColTileValue",
          children: KD(`${Lg}colOutOf`, {
            amount: String(rD),
            cap: String(pD)
          })
        }), (0, xK.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, xK.jsx)("i", {
            style: {
              width: 100 * rD / pD + "%"
            }
          })
        }), wD > pD && (0, xK.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: KD(`${Lg}colIntakeHeld`, {
            amount: String(wD),
            cap: String(sD)
          })
        })]
      })
    }

    function hg(DD) {
      let {
        item: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)();
      return (0, xK.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, xK.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: zD,
            amount: 0
          })
        }), (0, xK.jsx)("span", {
          className: "Baf2ColTileName",
          children: LK(wD, zD)
        })]
      })
    }

    function ng(DD) {
      switch (DD.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Mg(DD) {
      var zD, wD, sD;
      let {
        store: KD,
        close: rD
      } = DD;
      const {
        t: LD
      } = (0, Ts.E)(), cD = or(), {
        status: gD,
        entry: RD
      } = function(DD) {
        const [zD, wD] = (0, pD.useState)((() => Ug(DD)));
        return (0, pD.useEffect)((() => (wD(Ug(DD)), DD.subscribe((() => {
          wD(Ug(DD))
        })))), [DD]), zD
      }(KD), [AD, UD] = (0, pD.useState)(null), fD = null === gD || void 0 === gD ? void 0 : gD.baf2ColHold;
      (0, pD.useEffect)((() => {
        UD(null)
      }), [fD]);
      const ID = (0, pD.useRef)({
          p: -1,
          n: 0
        }),
        BD = null !== (zD = null === gD || void 0 === gD ? void 0 : gD.baf2ColP) && void 0 !== zD ? zD : -1;
      BD < ID.current.p && ID.current.n++, ID.current.p = BD;
      const GD = (0, pD.useRef)(null),
        [hD] = (0, pD.useState)((() => {
          return (DD = KD.heldAtOpen()) === Rp || DD === Ap ? {
            key: `${Wc}colBeltItIn`,
            item: DD
          } : null;
          var DD
        }));
      if (!gD) return null;
      const nD = gD.baf2ColMember,
        MD = gD.baf2ColP >= 0,
        OD = function(DD, zD) {
          if (DD.baf2ColP >= 0 && DD.baf2ColDraw > 0) {
            const zD = DD.baf2ColWant > 0 ? Math.min(1, DD.baf2ColDraw / DD.baf2ColWant) : 0;
            return {
              focus: DD.baf2ColFocusPerS * zD,
              draw: DD.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === DD.baf2ColState && zD && zD.draw > 0 ? {
            ...zD,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(gD, GD.current);
      GD.current = OD.draw > 0 ? OD : null;
      const JD = "slowed" === gD.baf2ColState || "noPower" === gD.baf2ColState,
        ED = Yc(gD),
        QD = null !== AD && void 0 !== AD ? AD : gD.baf2ColHold,
        XD = function(DD) {
          var zD, wD;
          return "idle" === DD.baf2ColRxState ? null : null !== (zD = null === (wD = uc(DD)) || void 0 === wD ? void 0 : wD.fix) && void 0 !== zD ? zD : null
        }(gD),
        VD = null === XD && null === hD ? function(DD) {
          var zD;
          const wD = DD.baf2ColSentTo;
          if (!wD) return null;
          const pD = null !== (zD = DD.baf2ColSentHeld) && void 0 !== zD ? zD : null;
          return {
            key: null === pD ? `${Wc}colNovaSentToMachine` : `${Wc}colNovaSentTo`,
            target: wD,
            Qg: pD
          }
        }(gD) : null,
        PD = MD ? LD(`${Lg}colFocusOf`, {
          focus: kc(gD.baf2ColP),
          need: kc(Lp.NOVA_FOCUS)
        }) : null;
      return (0, xK.jsx)(Xr.c, {
        close: rD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, xK.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, xK.jsx)(ds.d, {
                  itemName: cp,
                  amount: 0
                })
              }), (0, xK.jsxs)("div", {
                children: [(0, xK.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: LK(LD, cp)
                }), (0, xK.jsx)("p", {
                  children: Ag(LD, vc(gD))
                })]
              })]
            }), (0, xK.jsx)(Vr.k, {
              onClick: rD
            })]
          }), (0, xK.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, xK.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, xK.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, xK.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: LD(Fc(gD), {
                    time: null === ED ? "" : XK(LD, ED)
                  })
                }), (0, xK.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, xK.jsx)("i", {
                    style: {
                      width: (MD ? 100 * gD.baf2ColP / Lp.NOVA_FOCUS : 0) + "%"
                    }
                  }, ID.current.n)
                }), (0, xK.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, xK.jsxs)("span", {
                    title: Rg(LD),
                    children: [(0, xK.jsx)("b", {
                      children: kc(OD.focus)
                    }), " ", LD(`${Lg}colFocusPerS`)]
                  }), (0, xK.jsxs)("span", {
                    className: Vs()("Baf2ColDraw", {
                      Short: JD
                    }),
                    children: [(0, xK.jsx)(bs.e, {
                      name: "bolt"
                    }), JD ? LD(`${Lg}colDrawOf`, {
                      draw: kc(gD.baf2ColDraw),
                      want: kc(gD.baf2ColWant)
                    }) : LD(`${Lg}colPowerPerS`, {
                      rate: kc(OD.draw)
                    })]
                  }), null !== PD && (0, xK.jsx)("span", {
                    className: "Soft",
                    children: PD
                  })]
                })]
              }), (0, xK.jsx)("p", {
                className: Vs()("Baf2ColState", ng(gD)),
                children: Ag(LD, tc(gD))
              }), null !== XD && (0, xK.jsx)("p", {
                className: "Baf2ColStateFix",
                children: LD(XD)
              }), null === XD && null !== hD && (0, xK.jsx)("p", {
                className: "Baf2ColStateFix",
                children: LD(hD.key, {
                  item: LK(LD, hD.item)
                })
              }), VD && (0, xK.jsx)("p", {
                className: "Baf2ColStateFix",
                children: LD(VD.key, {
                  target: LK(LD, VD.target),
                  amount: String(null !== (wD = VD.Qg) && void 0 !== wD ? wD : 0)
                })
              }), (0, xK.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, xK.jsx)(Gg, {
                  item: Rp,
                  Qg: gD.baf2ColSa,
                  need: Lp.NOVA_SA,
                  cap: Lp.SA_CAP
                }), (0, xK.jsx)(Gg, {
                  item: Ap,
                  Qg: gD.baf2ColGd,
                  need: Lp.NOVA_GD,
                  cap: Lp.GD_CAP
                }), (0, xK.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, xK.jsx)(hg, {
                    item: "Nova Matter"
                  }), (0, xK.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: LD(`${Lg}colNovaHeld`, {
                      amount: String(gD.baf2ColOut),
                      cap: String(Lp.OUT_CAP)
                    })
                  }), nD && (0, xK.jsx)(Vr.o, {
                    className: "Baf2ColTake",
                    disabled: 0 === gD.baf2ColOut,
                    onClick: () => {
                      cD.send(Zc(gD, "take"))
                    },
                    children: LD(`${Lg}colTake`)
                  })]
                })]
              }), nD && (0, xK.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": QD,
                className: Vs()("Baf2ColHold", {
                  On: QD
                }),
                onClick: DD => {
                  DD.detail > 0 && DD.currentTarget.blur(), UD(!QD), cD.send(Zc(gD, "hold " + (QD ? 0 : 1)))
                },
                children: [(0, xK.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, xK.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, xK.jsx)("b", {
                    children: LD(`${Lg}colHold`)
                  }), (0, xK.jsx)("span", {
                    children: LD(`${Lg}colHoldNote`)
                  })]
                })]
              })]
            }), (0, xK.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, xK.jsx)(Ig, {
                status: gD,
                entry: RD
              }), (0, xK.jsx)("ul", {
                className: "Baf2ColSlots",
                children: ac(gD.baf2ColLasers, gD.baf2ColSpots, gD.baf2ColLive, OD.beamsOn, null !== (sD = gD.baf2ColGaps) && void 0 !== sD ? sD : 0).map((DD => (0, xK.jsxs)("li", {
                  className: DD.tone,
                  children: [(0, xK.jsx)("b", {
                    children: Ag(LD, DD.title)
                  }), null !== DD.hint && (0, xK.jsx)("span", {
                    children: Ag(LD, DD.hint)
                  })]
                }, DD.dir)))
              }), (0, xK.jsx)(Bg, {
                status: gD
              })]
            })]
          })]
        })
      })
    }
    const Og = "buildAFactory2Game:",
      Jg = 36e5,
      Eg = 864e5;

    function Qg(DD, zD, wD) {
      return Math.max(0, Math.ceil((DD + zD - Math.max(wD, DD)) / 1e3))
    }

    function Xg(DD) {
      return DD.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Vg(DD) {
      return "Homestead" === DD
    }

    function Pg(DD) {
      return function(DD) {
        let zD = 0;
        for (const wD of DD) {
          const DD = /^Island ([1-9]\d{0,5})$/.exec(wD);
          DD && (zD = Math.max(zD, Number(DD[1])))
        }
        return `Island ${zD+1}`
      }(DD.map((DD => DD.baf2IslandName)))
    }

    function Cg(DD, zD) {
      return function(DD) {
        return `${Og}islandsBlocked${DD[0].toUpperCase()}${DD.slice(1)}`
      }("degraded" === DD && 0 === zD ? "stuck" : DD)
    }

    function xg(DD) {
      return DD.filter((DD => {
        var zD;
        return !DD.baf2IslandActive && void 0 === DD.baf2IslandUnreadable && void 0 === (null === (zD = DD.baf2IslandCoop) || void 0 === zD ? void 0 : zD.baf2CoopState)
      })).length
    }

    function Tg(DD) {
      return "coopMoving" === DD || "coopUnreachable" === DD
    }

    function bg(DD, zD) {
      const wD = zD > 0;
      return {
        change: null === DD && !wD,
        switch: (null === DD || "degraded" === DD || Tg(DD)) && !wD,
        rename: "loading" !== DD && "degraded" !== DD && "stuck" !== DD
      }
    }

    function jg(DD, zD) {
      return void 0 === DD || "corrupt" === DD && zD
    }
    const dg = Wr;

    function Sg(DD, zD, wD) {
      if (null !== DD && void 0 !== DD && DD.untilGone) {
        var pD;
        return !("dismiss" === DD.untilGone && void 0 === (null === (pD = zD.baf2IslandCoop) || void 0 === pD ? void 0 : pD.baf2CoopState)) && wD - DD.atMs < 32500
      }
      return void 0 !== DD && wD - DD.atMs < dg && zD.baf2IslandName === DD.from
    }
    const ig = Wr;

    function lg(DD) {
      return "core" === (null === DD || void 0 === DD ? void 0 : DD.kind) ? DD.core : "islands" === (null === DD || void 0 === DD ? void 0 : DD.kind) ? DD.backToCore : void 0
    }

    function Wg(DD) {
      return `\0${DD}\0`
    }

    function Ng(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pD = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const KD of Object.keys(wD)) pD[KD] = Wg(KD);
      let sD = Object.keys(pD).length > 0 ? DD(zD, pD) : DD(zD);
      for (const [KD, rD] of Object.entries(wD)) sD = sD.split(Wg(KD)).join(rD);
      return sD
    }

    function Zg(DD, zD) {
      return DD ? zD ? "enabled" : "disabled" : "hidden"
    }
    const yg = {
      removed: `${Og}islandsCoopRemoved`,
      deleted: `${Og}islandsCoopDeleted`,
      notReady: `${Og}islandsCoopNotReady`,
      gone: `${Og}islandsCoopGone`
    };

    function kg(DD) {
      var zD;
      return "member" !== (null === (zD = DD.baf2IslandCoop) || void 0 === zD ? void 0 : zD.baf2CoopRole) && "newer" !== DD.baf2IslandUnreadable
    }

    function mg(DD, zD, wD, pD, sD, KD) {
      const rD = DD.baf2IslandActive,
        LD = DD.baf2IslandUnreadable,
        cD = DD.baf2IslandCoop,
        gD = function(DD, zD, wD) {
          return {
            switch: DD.switch && void 0 === zD,
            delete: DD.change && jg(zD, wD)
          }
        }(zD, LD, pD),
        RD = rD && void 0 !== cD && void 0 === cD.baf2CoopState && "coopUnreachable" === KD,
        AD = {
          switch: Zg((!rD || RD) && void 0 === LD, RD || gD.switch),
          switchLabel: RD ? "tryAgain" : "switch",
          rename: Zg(!0, zD.rename),
          delete: Zg(!rD, gD.delete),
          deleteWaits: !rD && jg(LD, pD),
          people: Zg(void 0 !== DD.baf2IslandInvitable || sD && rD && void 0 === LD && void 0 === cD, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        UD = !rD && gD.delete;
      if (void 0 === cD) return wD ? {
        ...AD,
        delete: Zg(!rD, !1),
        deleteWaits: !1,
        note: UD ? {
          key: `${Og}islandsCoopKeepOwn`
        } : null
      } : AD;
      const fD = cD.baf2CoopState,
        ID = cD.baf2CoopMembers.length > 1,
        BD = {
          ...AD,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== fD && "member" === cD.baf2CoopRole) return {
        ...BD,
        dismiss: Zg(!0, zD.rename),
        note: {
          key: yg[fD],
          names: {
            owner: cD.baf2CoopOwner
          }
        }
      };
      if (void 0 !== fD) {
        let DD = {
          key: `${Og}islandsCoopOwnLost`
        };
        return UD && ID ? DD = {
          key: `${Og}islandsCoopDeleteMembers`
        } : UD && wD && (DD = {
          key: `${Og}islandsCoopKeepOwn`
        }), {
          ...BD,
          delete: Zg(!rD, gD.delete && !ID && !wD),
          deleteWaits: AD.deleteWaits && !ID && !wD,
          note: DD
        }
      }
      if ("member" === cD.baf2CoopRole) return {
        ...AD,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Zg(!0, rD ? zD.switch : zD.rename)
      };
      const GD = cD.baf2CoopManageHere;
      let hD = null;
      var nD;
      GD || rD ? UD && ID ? hD = {
        key: `${Og}islandsCoopDeleteMembers`
      } : UD && wD && (hD = {
        key: `${Og}islandsCoopKeepOwn`
      }) : hD = {
        key: null !== (nD = cD.baf2CoopLeft) && void 0 !== nD && nD.length ? `${Og}islandsCoopManageThereClaim` : `${Og}islandsCoopManageThere`
      };
      return {
        ...AD,
        rename: Zg(!0, zD.rename && GD),
        delete: Zg(!rD, gD.delete && !ID && !wD),
        deleteWaits: AD.deleteWaits && !ID && !wD,
        people: "enabled",
        peopleLabel: "players",
        unshare: Zg(GD && rD && !ID, zD.change),
        remove: GD,
        note: hD
      }
    }

    function eg(DD) {
      var zD;
      const wD = DD.baf2IslandCoop;
      if ("owner" !== (null === wD || void 0 === wD ? void 0 : wD.baf2CoopRole) || void 0 !== wD.baf2CoopState || null === (zD = wD.baf2CoopLeft) || void 0 === zD || !zD.length) return null;
      const pD = DD.baf2IslandActive && wD.baf2CoopManageHere;
      return {
        left: wD.baf2CoopLeft,
        claim: pD,
        goThere: !pD && wD.baf2CoopManageHere
      }
    }

    function og(DD) {
      return DD.baf2CoopMembers.length >= DD.baf2CoopMax
    }

    function ag(DD, zD, wD) {
      return void 0 !== DD && zD < DD.answer && wD - DD.atMs < dg
    }
    const ug = "buildAFactory2Game:";

    function vg(DD, zD) {
      return {
        onKeyDown: wD => {
          wD.stopPropagation(), wD.nativeEvent.isComposing || 229 === wD.nativeEvent.keyCode || ("Enter" === wD.key ? (wD.preventDefault(), DD()) : "Escape" === wD.key && (wD.preventDefault(), zD()))
        }
      }
    }

    function tg(DD) {
      return {
        onKeyDown: zD => {
          "Escape" !== zD.key || zD.nativeEvent.isComposing || (zD.preventDefault(), zD.stopPropagation(), DD())
        }
      }
    }

    function Fg(DD) {
      DD.currentTarget.select()
    }

    function Yg(DD, zD) {
      (0, pD.useEffect)((() => {
        var wD;
        DD && (null === (wD = zD.current) || void 0 === wD || wD.scrollIntoView({
          block: "nearest"
        }))
      }), [DD, zD])
    }

    function Hg(DD) {
      const [zD, wD] = (0, pD.useState)(null);
      return (0, pD.useEffect)((() => {
        const zD = document.querySelector(".UiRequests"),
          pD = DD.current;
        if (!zD || !pD || "undefined" === typeof ResizeObserver) return;
        const sD = () => {
          const DD = zD.getBoundingClientRect(),
            sD = pD.getBoundingClientRect(),
            KD = pD.parentElement,
            rD = KD && parseFloat(getComputedStyle(KD).paddingTop) || 0,
            LD = function(DD, zD, wD, pD) {
              if (!DD || DD.height <= 0 || DD.right <= zD.left || DD.left >= zD.right) return null;
              const sD = Math.max(pD, DD.bottom + 8);
              return {
                marginTop: Math.round(sD - pD),
                maxHeight: Math.max(0, Math.floor(wD - sD - pD))
              }
            }(DD, sD, window.innerHeight, rD);
          wD((DD => (null === DD || void 0 === DD ? void 0 : DD.marginTop) === (null === LD || void 0 === LD ? void 0 : LD.marginTop) && (null === DD || void 0 === DD ? void 0 : DD.maxHeight) === (null === LD || void 0 === LD ? void 0 : LD.maxHeight) ? DD : LD))
        };
        sD();
        const KD = new ResizeObserver(sD);
        return KD.observe(zD), window.addEventListener("resize", sD), () => {
          KD.disconnect(), window.removeEventListener("resize", sD)
        }
      }), [DD]), zD
    }

    function qg() {
      (0, pD.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function DR(DD) {
      (0, pD.useEffect)((() => {
        var zD;
        null === (zD = DD.current) || void 0 === zD || zD.focus()
      }), [DD])
    }

    function zR(DD) {
      const [zD, wD] = (0, pD.useState)(Date.now);
      return (0, pD.useEffect)((() => {
        const zD = window.setInterval((() => {
          wD(Date.now())
        }), DD);
        return () => {
          window.clearInterval(zD)
        }
      }), [DD]), zD
    }

    function wR(DD) {
      let {
        tier: zD,
        t: wD
      } = DD;
      const {
        kind: pD,
        short: sD
      } = GD(zD), KD = fD(zD, ID), rD = wD(`${ug}${KD.key}`, {
        ...KD.params,
        name: wD(`${ug}${hD(zD).nameKey}`)
      });
      return (0, xK.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, xK.jsx)("span", {
          className: Vs()("Baf2IslandTierPip", {
            Stage: "tier" !== pD
          }),
          "aria-hidden": "true",
          children: sD
        }), rD]
      })
    }

    function pR(DD) {
      let {
        note: zD,
        className: wD,
        t: pD
      } = DD;
      return (0, xK.jsx)("p", {
        className: Vs()("Baf2IslandNote", wD),
        children: Ng(pD, zD.key, zD.names, zD.params)
      })
    }
    const sR = "buildAFactory2Game:";

    function KR(DD) {
      let {
        message: zD,
        arrivedAtMs: wD,
        close: sD,
        leave: KD
      } = DD;
      const rD = or(),
        {
          t: LD
        } = (0, Ts.E)(),
        cD = zR(1e3),
        gD = (0, pD.useRef)(null);
      qg(), (0, pD.useEffect)((() => {
        var DD;
        null === (DD = gD.current) || void 0 === DD || DD.focus()
      }), []);
      const RD = Qg(wD, zD.baf2TransferInMs, cD),
        AD = wD + zD.baf2TransferInMs - 1e3,
        [UD, fD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        const DD = window.setTimeout((() => {
          fD(AD)
        }), Math.max(0, AD - Date.now()));
        return () => {
          window.clearTimeout(DD)
        }
      }), [AD]);
      const ID = UD === AD || cD >= AD,
        BD = zD.baf2TransferIsland,
        GD = zD.baf2TransferOwner;
      return (0, xK.jsx)(Xr.c, {
        close: sD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, xK.jsxs)("section", {
          ref: gD,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              children: [(0, xK.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === GD ? Ng(LD, `${sR}islandsTransferOwn`, {
                  island: BD
                }) : Ng(LD, `${sR}islandsTransfer`, {
                  island: BD,
                  owner: GD
                })
              }), (0, xK.jsx)("p", {
                children: ID ? LD(`${sR}islandsTransferNow`) : LD(`${sR}islandsTransferIn`, {
                  time: XK(LD, RD)
                })
              })]
            }), (0, xK.jsx)(Vr.k, {
              ariaLabel: LD(`${sR}islandsClose`),
              onClick: sD
            })]
          }), !ID && (0, xK.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, xK.jsx)("p", {
              className: "Baf2TransferNote",
              children: LD(`${sR}islandsTransferNote`)
            }), (0, xK.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, xK.jsx)(Vr.f, {
                onClick: () => {
                  rD.send("baf2coopstay"), KD()
                },
                children: LD(`${sR}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var rR = wD(1442),
      LR = wD(1138),
      cR = wD.n(LR);
    const gR = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const RR = "buildAFactory2Game:",
      AR = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function UR(DD, zD, wD) {
      return void 0 === zD ? wD : "string" === typeof zD ? zD : Array.isArray(zD) ? zD.map((zD => "string" === typeof zD ? zD : "translationKey" in zD ? DD(zD.translationKey) : "")).join("") : DD(zD.translationKey)
    }

    function fR(DD) {
      const zD = {};
      for (const [wD, pD] of Object.entries(null !== DD && void 0 !== DD ? DD : {})) zD[wD] = pD < 0 ? QK(pD) : pD.toLocaleString("en-US");
      return zD
    }

    function IR(DD, zD) {
      const wD = zD ? "touch" : "mouse";
      return {
        use: DD(`${RR}lookUse_${wD}`),
        Use: DD(`${RR}lookUseStart_${wD}`)
      }
    }
    const BR = (0, pD.memo)((function(DD) {
      let {
        item: zD
      } = DD;
      return (0, xK.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, xK.jsx)(ds.d, {
          itemName: zD,
          amount: 0
        })
      })
    }));

    function GR(DD) {
      let {
        label: zD,
        percent: wD,
        progress: pD
      } = DD;
      return (0, xK.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, xK.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${zD}: ${pD}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": wD,
          children: (0, xK.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${wD}%`
            }
          })
        }), (0, xK.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: pD
        })]
      })
    }

    function hR(DD) {
      let {
        chips: zD
      } = DD;
      return (0, xK.jsx)("span", {
        className: "Baf2QuestChips",
        children: zD.map((DD => {
          let [zD, wD, pD] = DD;
          const sD = wD >= pD;
          return (0, xK.jsxs)("span", {
            className: Vs()("Baf2QuestChip", {
              Met: sD
            }),
            children: [(0, xK.jsx)(BR, {
              item: zD
            }), (0, xK.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: sD ? `\u2713${pD}` : `${wD}/${pD}`
            })]
          }, zD)
        }))
      })
    }

    function nR(DD, zD) {
      const {
        key: wD,
        params: pD
      } = fD(zD, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return DD(`${RR}${wD}`, {
        ...pD,
        name: DD(`${RR}${hD(zD).nameKey}`)
      })
    }

    function MR(DD) {
      let {
        core: zD,
        t: wD
      } = DD;
      const [pD, sD] = zD, KD = sD > 0 ? Math.floor(100 * pD / sD) : 100;
      return (0, xK.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": wD(`${RR}questCoreLabel`, {
          have: String(pD),
          need: String(sD)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": KD,
        children: [(0, xK.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: wD(`${RR}questCore`, {
            percent: String(KD)
          })
        }), (0, xK.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, xK.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${KD}%`
            }
          })
        })]
      })
    }

    function OR(DD) {
      let {
        rows: zD,
        t: wD
      } = DD;
      const pD = zD.filter((DD => DD.done)).length;
      return (0, xK.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": wD(`${RR}questStepsProgress`, {
          done: String(pD),
          total: String(zD.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": zD.length,
        "aria-valuenow": pD,
        children: zD.map((DD => (0, xK.jsx)("span", {
          className: Vs()("Baf2QuestSegment", {
            Done: DD.done,
            Current: DD.current
          })
        }, DD.id)))
      })
    }
    const JR = (0, pD.memo)(QR, ER);

    function ER(DD, zD) {
      const wD = wD => DD.view.itemNames[wD] === zD.view.itemNames[wD];
      return DD.t === zD.t && DD.extra === zD.extra && (null === DD.row.item || wD(DD.row.item)) && DD.row.madeFor.every(wD) && DD.row.also.every(wD) && cR()(DD.row, zD.row)
    }

    function QR(DD) {
      let {
        row: zD,
        view: wD,
        t: pD,
        extra: sD
      } = DD;
      const {
        isTouchScreen: KD
      } = (0, Es.n)(["isTouchScreen"]), rD = zD.item ? function(DD, zD, wD) {
        return 1 !== wD && gR.has(DD) ? xs(zD) : null
      }(zD.key, zD.item, zD.total) : null, LD = rD ? pD(rD) : zD.item ? UR(pD, wD.itemNames[zD.item], zD.item) : "", cD = zD.also.map((DD => UR(pD, wD.itemNames[DD], DD))), gD = cD.join(", "), RD = function(DD, zD) {
        var wD;
        return zD.length < 2 ? null !== (wD = zD[0]) && void 0 !== wD ? wD : "" : DD(`${RR}listAnd`, {
          rest: zD.slice(0, -1).join(DD(`${RR}listComma`)),
          last: zD[zD.length - 1]
        })
      }(pD, [LD, ...cD]), AD = pD(`${RR}${zD.key}`, {
        ...IR(pD, KD),
        ...fR(zD.params),
        item: LD,
        also: gD,
        itemList: RD,
        total: String(zD.total)
      }), [UD, ...fD] = AD.split("\n"), ID = zD.total > 1 && !zD.done && !zD.away;
      return (0, xK.jsxs)("li", {
        className: Vs()("Baf2QuestStep", {
          Done: zD.done,
          Current: zD.current,
          JustFinished: zD.justFinished,
          Away: zD.away
        }),
        children: [!zD.done && null !== zD.item && (0, xK.jsx)(BR, {
          item: zD.item
        }), (zD.done || null === zD.item) && (0, xK.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: zD.done ? "\u2713" : "\u25cb"
        }), (0, xK.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, xK.jsx)("strong", {
            children: UD
          }), fD.length > 0 && (0, xK.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: fD.join(" ")
          }), !zD.done && zD.madeFor.length > 0 && (0, xK.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: pD("buildAFactory2Game:questRowFor", {
              items: zD.madeFor.map((DD => UR(pD, wD.itemNames[DD], DD))).join(" \u2192 ")
            })
          }), ID && (0, xK.jsx)(GR, {
            label: UD,
            percent: Math.round(100 * zD.amount / zD.total),
            progress: `${zD.amount.toLocaleString("en-US")}/${zD.total.toLocaleString("en-US")}`
          }), !zD.done && !zD.away && zD.chips && zD.chips.length > 0 && (0, xK.jsx)(hR, {
            chips: zD.chips
          }), sD]
        })]
      })
    }
    const XR = "buildAFactory2Game:",
      VR = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      PR = {
        on: `${XR}tutorialButtonOn`,
        hud: `${XR}tutorialButtonHud`,
        off: `${XR}tutorialButtonOff`
      },
      CR = {
        on: `${XR}tutorialPickedOn`,
        hud: `${XR}tutorialPickedHud`,
        off: `${XR}tutorialPickedOff`
      };
    class xR {
      constructor(DD, zD, wD) {
        this.commands = DD, this.quests = zD, this.toasts = wD
      }
      next() {
        const DD = function(DD) {
            return jD[(jD.indexOf(DD) + 1) % jD.length]
          }(this.quests.get().tutorial),
          zD = this.quests.setTutorial(DD);
        this.commands.send(`baf2tutorial ${DD} ${zD}`), this.toasts.show({
          baf2ToastText: [(0, SD.Wd)({
            translationKey: CR[DD]
          }, SD.I.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function TR(DD, zD) {
      let [wD, pD] = zD;
      return DD(`${RR}${wD}`, fR(pD))
    }

    function bR(DD) {
      let [zD, wD] = DD;
      return zD + JSON.stringify(wD)
    }

    function jR(DD) {
      let {
        goal: zD,
        t: wD
      } = DD;
      return zD ? (0, xK.jsx)("span", {
        className: "Baf2BookGoal",
        children: wD(`${RR}${zD}`)
      }) : null
    }

    function dR(DD) {
      let {
        view: zD,
        t: wD
      } = DD;
      if (!zD.name) return null;
      const pD = us(zD.rows);
      return (0, xK.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, xK.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: wD(`${RR}currentQuest`)
        }), (0, xK.jsx)("strong", {
          className: "Baf2BookTitle",
          children: TR(wD, zD.name)
        }), (0, xK.jsx)(jR, {
          goal: zD.goal,
          t: wD
        }), pD.length > 1 && (0, xK.jsx)(OR, {
          rows: pD,
          t: wD
        }), (0, xK.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: zD.rows.map((DD => (0, xK.jsx)(JR, {
            row: DD,
            view: zD,
            t: wD
          }, DD.id)))
        }), zD.reward && (0, xK.jsxs)("span", {
          className: "Baf2BookReward",
          children: [wD(`${RR}questReward`), (0, xK.jsx)(BR, {
            item: zD.reward
          }), UR(wD, zD.itemNames[zD.reward], zD.reward)]
        })]
      })
    }

    function SR(DD) {
      let {
        quest: zD,
        upcoming: wD,
        t: pD
      } = DD;
      return (0, xK.jsxs)("li", {
        className: Vs()("Baf2BookQuest", {
          Done: zD[3],
          Upcoming: wD
        }),
        children: [(0, xK.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: zD[3] ? "\u2713" : "\u25cb"
        }), (0, xK.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, xK.jsx)("strong", {
            className: "Baf2BookTitle",
            children: TR(pD, zD)
          }), (0, xK.jsx)(jR, {
            goal: zD[2],
            t: pD
          })]
        })]
      })
    }

    function iR(DD) {
      let {
        done: zD,
        total: wD,
        t: pD
      } = DD;
      const sD = wD > 0 ? Math.round(100 * zD / wD) : 0,
        KD = pD(`${RR}questBookChapterProgress`, {
          done: String(zD),
          total: String(wD)
        });
      return (0, xK.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, xK.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": KD,
          "aria-valuemin": 0,
          "aria-valuemax": wD,
          "aria-valuenow": zD,
          children: (0, xK.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${sD}%`
            }
          })
        }), (0, xK.jsx)("span", {
          className: "Baf2BookProgressText",
          children: KD
        })]
      })
    }

    function lR(DD) {
      let {
        view: zD,
        tier: wD,
        quests: pD,
        t: sD
      } = DD;
      const KD = wD === zD.tier,
        rD = (null !== pD && void 0 !== pD ? pD : []).filter((DD => !DD[4])),
        LD = (null !== pD && void 0 !== pD ? pD : []).filter((DD => DD[4])),
        cD = rD.filter((DD => DD[3])).length,
        gD = KD && zD.name ? bR(zD.name) : null,
        RD = rD.findIndex((DD => !DD[3] && bR(DD) === gD));
      return (0, xK.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, xK.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, xK.jsx)("h3", {
            children: nR(sD, wD)
          }), rD.length > 0 && (0, xK.jsx)(iR, {
            done: cD,
            total: rD.length,
            t: sD
          }), KD && zD.core && (0, xK.jsx)(MR, {
            core: zD.core,
            t: sD
          })]
        }), (0, xK.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === pD && KD && (0, xK.jsx)(dR, {
            view: zD,
            t: sD
          }), rD.map(((DD, wD) => wD === RD ? (0, xK.jsx)(dR, {
            view: zD,
            t: sD
          }, bR(DD)) : (0, xK.jsx)(SR, {
            quest: DD,
            upcoming: !DD[3],
            t: sD
          }, bR(DD))))]
        }), KD && zD.side && (0, xK.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, xK.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: sD(`${RR}questSide`)
          }), (0, xK.jsx)("strong", {
            className: "Baf2BookTitle",
            children: TR(sD, zD.side.name)
          }), (0, xK.jsx)(jR, {
            goal: zD.side.goal,
            t: sD
          }), (0, xK.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, xK.jsx)(JR, {
              row: zD.side.row,
              view: zD,
              t: sD
            })
          })]
        }), LD.length > 0 && (0, xK.jsxs)(xK.Fragment, {
          children: [(0, xK.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: sD(`${RR}questBookSidesDone`)
          }), (0, xK.jsx)("ol", {
            className: "Baf2BookQuests",
            children: LD.map((DD => (0, xK.jsx)(SR, {
              quest: DD,
              upcoming: !1,
              t: sD
            }, bR(DD))))
          })]
        })]
      })
    }

    function WR(DD) {
      var zD, wD, KD;
      let {
        store: rD,
        tutorial: LD,
        close: cD
      } = DD;
      const {
        t: gD
      } = (0, Ts.E)(), AD = (0, rR.k)(Zs, rD.get()), UD = null !== (zD = AD.tier) && void 0 !== zD ? zD : 1, [fD, ID] = (0, pD.useState)(null), hD = (null === fD || void 0 === fD ? void 0 : fD.at) === UD ? fD.tier : UD, nD = (0, pD.useRef)(null), MD = null !== AD.chapters;
      (0, pD.useEffect)((() => {
        var DD;
        nD.current && (nD.current.scrollTop = 0);
        const zD = null === (DD = nD.current) || void 0 === DD ? void 0 : DD.querySelector(".Baf2BookQuest.Current");
        if (nD.current && zD) {
          const DD = zD.getBoundingClientRect().bottom - nD.current.getBoundingClientRect().bottom;
          DD > 0 && (nD.current.scrollTop += Math.min(DD, zD.getBoundingClientRect().top - nD.current.getBoundingClientRect().top))
        }
      }), [hD, MD]);
      const OD = null === (wD = AD.chapters) || void 0 === wD ? void 0 : wD.find((DD => {
        let [zD] = DD;
        return zD === hD
      }));
      return (0, xK.jsx)(Xr.c, {
        close: cD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: AR,
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: gD(`${RR}questBookTitle`)
            }), (0, xK.jsx)(Vr.o, {
              className: "Baf2BookTutorialButton",
              disabled: !AD.tutorialKnown,
              ariaLabel: gD(PR[AD.tutorial]),
              title: gD(PR[AD.tutorial]),
              onClick: () => {
                LD.next()
              },
              children: (0, xK.jsx)(bs.e, {
                name: VR[AD.tutorial]
              })
            }), (0, xK.jsx)(Vr.k, {
              onClick: cD
            })]
          }), (0, xK.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": gD(`${RR}questBookChapters`),
            "data-pad-initial-area": !0,
            children: sD.slice(0, RD()).map(((DD, zD) => {
              const wD = zD + 1,
                {
                  kind: pD,
                  short: sD
                } = GD(wD),
                KD = BD(wD, UD),
                rD = KD ? gD(`${RR}coreAtomicHidden`) : nR(gD, wD);
              return (0, xK.jsx)("li", {
                children: (0, xK.jsx)("button", {
                  type: "button",
                  className: Vs()({
                    Stage: "tier" !== pD,
                    Atomic: "atomic" === pD,
                    Current: wD === UD,
                    Selected: wD === hD
                  }),
                  disabled: wD > UD,
                  "aria-pressed": wD === hD,
                  "aria-label": rD,
                  title: KD ? void 0 : rD,
                  onClick: () => {
                    ID({
                      tier: wD,
                      at: UD
                    })
                  },
                  children: KD ? "?" : sD
                })
              }, DD.nameKey)
            }))
          }), (0, xK.jsxs)("div", {
            ref: nD,
            className: "Baf2BookBody",
            children: [os(AD) && hD === UD && (0, xK.jsx)("p", {
              className: "Baf2BookEmpty",
              children: gD(`${RR}questBookAllDone`)
            }), (0, xK.jsx)(lR, {
              view: AD,
              tier: hD,
              quests: null !== (KD = null === OD || void 0 === OD ? void 0 : OD[1]) && void 0 !== KD ? KD : null,
              t: gD
            })]
          })]
        })
      })
    }
    const NR = "buildAFactory2Game:";

    function ZR(DD) {
      let {
        tiers: zD,
        from: wD,
        tier: pD,
        shown: sD,
        HU: KD
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), LD = zD.map(((DD, zD) => {
        const LD = wD + zD,
          {
            kind: cD,
            short: gD
          } = GD(LD),
          RD = BD(LD, pD);
        return (0, xK.jsx)("li", {
          children: (0, xK.jsx)("button", {
            type: "button",
            className: Vs()({
              Stage: "tier" !== cD,
              Silhouette: RD,
              Reached: LD <= pD,
              Current: LD === pD,
              Next: LD === pD + 1,
              Selected: LD === sD
            }),
            disabled: RD,
            "aria-pressed": LD === sD,
            "aria-label": RD ? rD(`${NR}coreAtomicHidden`) : void 0,
            title: RD ? void 0 : rD(`${NR}${DD.nameKey}`),
            onClick: () => {
              KD(LD)
            },
            children: RD ? "?" : gD
          })
        }, DD.nameKey)
      }));
      return (0, xK.jsx)(xK.Fragment, {
        children: LD
      })
    }

    function yR(DD) {
      let {
        id: zD,
        label: wD,
        tiers: pD,
        from: sD,
        ...KD
      } = DD;
      return (0, xK.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, xK.jsx)("span", {
          id: zD,
          className: "Baf2CoreLadderLabel",
          children: wD
        }), (0, xK.jsx)("ol", {
          "aria-labelledby": zD,
          children: (0, xK.jsx)(ZR, {
            ...KD,
            tiers: pD,
            from: sD
          })
        })]
      })
    }

    function kR(DD) {
      const {
        t: zD
      } = (0, Ts.E)(), wD = sD.findIndex((DD => void 0 !== DD.stage)), pD = sD.findIndex((DD => void 0 !== DD.reactorTier)), KD = wD < 0 ? sD : sD.slice(0, wD), rD = wD < 0 ? [] : sD.slice(wD, pD < 0 ? void 0 : pD), cD = pD < 0 || !LD() ? [] : sD.slice(pD);
      return (0, xK.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, xK.jsx)(yR, {
          ...DD,
          id: "baf2CoreTiersLabel",
          label: zD(`${NR}coreTiersLabel`),
          tiers: KD,
          from: 1
        }), rD.length > 0 && (0, xK.jsx)(yR, {
          ...DD,
          id: "baf2CoreStagesLabel",
          label: zD(`${NR}coreStagesLabel`),
          tiers: rD,
          from: wD + 1
        }), cD.length > 0 && (0, xK.jsx)(yR, {
          ...DD,
          id: "baf2CoreAtomicLabel",
          label: zD(`${NR}coreAtomicLabel`),
          tiers: cD,
          from: pD + 1
        })]
      })
    }
    const mR = "buildAFactory2Game:";

    function eR(DD) {
      let {
        item: zD,
        itemNames: wD,
        children: pD
      } = DD;
      return (0, xK.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, xK.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: zD,
            amount: 0
          })
        }), (0, xK.jsx)(Ss.e, {
          text: wD[zD]
        }), pD]
      })
    }

    function oR(DD) {
      const zD = new Map;
      for (const {
          block: pD
        }
        of DD.newDeposits) {
        var wD;
        zD.set(pD, (null !== (wD = zD.get(pD)) && void 0 !== wD ? wD : 0) + 1)
      }
      return [...zD]
    }

    function aR(DD) {
      let {
        value: zD,
        label: wD,
        more: pD
      } = DD;
      return (0, xK.jsxs)("li", {
        children: [(0, xK.jsx)("strong", {
          children: zD
        }), (0, xK.jsx)("span", {
          children: wD
        }), pD > 0 && (0, xK.jsxs)("em", {
          children: ["+", pD]
        })]
      })
    }

    function uR(DD) {
      let {
        items: zD,
        itemNames: wD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), [KD, rD] = (0, pD.useState)(null), LD = null !== KD && zD.includes(KD) ? KD : null;
      return (0, xK.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, xK.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: sD(`${mR}coreRewardUnlocks`)
        }), (0, xK.jsx)("ul", {
          children: zD.map((DD => (0, xK.jsx)("li", {
            children: (0, xK.jsx)("button", {
              type: "button",
              className: Vs()("Baf2PanelIcon", {
                Picked: DD === LD
              }),
              title: LK(sD, DD),
              "aria-label": LK(sD, DD),
              "aria-pressed": DD === LD,
              onClick: () => {
                rD(DD === LD ? null : DD)
              },
              children: (0, xK.jsx)(ds.d, {
                itemName: DD,
                amount: 0
              })
            })
          }, DD)))
        }), (0, xK.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== LD && (0, xK.jsxs)(xK.Fragment, {
            children: [(0, xK.jsx)(Ss.e, {
              text: wD[LD]
            }), " \xb7 ", (0, xK.jsx)(Ss.e, {
              text: wD[TD(LD)]
            })]
          }), null === LD && sD(`${mR}coreRecipeTap`)]
        })]
      })
    }

    function vR(DD) {
      var zD, wD;
      let {
        def: pD,
        tier: sD,
        itemNames: KD
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), LD = sD > 1 ? hD(sD - 1) : void 0, cD = Math.round(2 * pD.islandRadius), gD = LD ? Math.round(2 * LD.islandRadius) : cD, RD = sD >= 3 ? Ep(sD) : null;
      return (0, xK.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, xK.jsxs)("ul", {
          className: Vs()("Baf2CoreStats", {
            Four: null !== RD
          }),
          children: [(0, xK.jsx)(aR, {
            value: `${cD}\xd7${cD}`,
            label: rD(`${mR}coreStatIsland`),
            more: cD - gD
          }), (0, xK.jsx)(aR, {
            value: String(pD.machineAllowance),
            label: rD(`${mR}coreStatMachines`),
            more: pD.machineAllowance - (null !== (zD = null === LD || void 0 === LD ? void 0 : LD.machineAllowance) && void 0 !== zD ? zD : pD.machineAllowance)
          }), (0, xK.jsx)(aR, {
            value: String(pD.beltAllowance),
            label: rD(`${mR}coreStatBelts`),
            more: pD.beltAllowance - (null !== (wD = null === LD || void 0 === LD ? void 0 : LD.beltAllowance) && void 0 !== wD ? wD : pD.beltAllowance)
          }), null !== RD && (0, xK.jsx)(aR, {
            value: String(RD),
            label: rD(`${mR}coreStatStorage`),
            more: RD - (LD ? Ep(sD - 1) : RD)
          })]
        }), pD.reward && (0, xK.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, xK.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: rD(`${mR}coreRewardItem`)
          }), (0, xK.jsx)(eR, {
            item: pD.reward,
            itemNames: KD
          })]
        }), pD.newDeposits.length > 0 && (0, xK.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, xK.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: rD(pD.newDeposits.length > 1 ? `${mR}coreRewardDeposits` : `${mR}coreRewardDeposit`)
          }), oR(pD).map((DD => {
            let [zD, wD] = DD;
            return (0, xK.jsx)(eR, {
              item: zD,
              itemNames: KD,
              children: wD > 1 && ` \xd7${wD}`
            }, zD)
          }))]
        }), pD.unlocks.length > 0 && (0, xK.jsx)(uR, {
          items: pD.unlocks,
          itemNames: KD
        }), (0, xK.jsx)(tR, {
          tier: sD
        })]
      })
    }

    function tR(DD) {
      let {
        tier: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), pD = hs[zD];
      if (!pD) return null;
      const sD = Gs(zD, 0, 0).barrierMax !== Gs(zD - 1, 0, 0).barrierMax;
      return (0, xK.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, xK.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: sD ? Rs.Chestplate : gs,
            amount: 0
          })
        }), wD(`${mR}gearPerkLine`, {
          perk: wD(`${mR}${pD}`)
        })]
      })
    }

    function FR(DD, zD) {
      return null === DD ? zD : DD.value
    }

    function YR(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === DD || wD - DD.atMs >= pD ? null : sD(DD.value, zD) ? DD.armed ? null : DD : DD.armed ? DD : {
        ...DD,
        armed: !0
      }
    }

    function HR(DD, zD) {
      const wD = zD.filter((zD => {
        var wD;
        return !1 !== (null === (wD = DD.get(zD)) || void 0 === wD ? void 0 : wD.value)
      }));
      for (const [pD, sD] of DD) sD.value && !zD.includes(pD) && wD.push(pD);
      return wD
    }

    function qR(DD, zD, wD, sD) {
      const [KD, rD] = (0, pD.useState)((() => new Map)), LD = () => {
        rD((zD => function(DD, zD, wD, pD) {
          var sD;
          let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            rD = null;
          for (const [LD, cD] of DD) {
            const sD = YR(cD, zD(LD), wD, pD, KD);
            sD !== cD && (rD ??= new Map(DD), null === sD ? rD.delete(LD) : rD.set(LD, sD))
          }
          return null !== (sD = rD) && void 0 !== sD ? sD : DD
        }(zD, DD, Date.now(), wD, sD)))
      };
      (0, pD.useEffect)((() => {
        LD()
      }), [zD, wD]), (0, pD.useEffect)((() => {
        if (0 === KD.size) return;
        const DD = Math.min(...[...KD.values()].map((DD => DD.atMs))),
          zD = setTimeout(LD, Math.max(0, DD + wD - Date.now()) + 1);
        return () => {
          clearTimeout(zD)
        }
      }), [KD, zD, wD]);
      return [KD, (zD, wD) => {
        rD((pD => {
          const KD = new Map(pD);
          return KD.set(zD, function(DD, zD, wD) {
            return {
              value: DD,
              atMs: wD,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(DD, zD)
            }
          }(wD, DD(zD), Date.now(), sD)), KD
        }))
      }]
    }
    const DA = "buildAFactory2Game:";

    function zA(DD) {
      let {
        message: zD,
        itemNames: wD
      } = DD;
      const sD = or(),
        {
          t: KD
        } = (0, Ts.E)(),
        [rD, LD] = (0, pD.useState)(!1),
        [cD, gD] = function(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr;
          const [wD, pD] = qR((zD => DD.includes(zD)), DD, zD, Object.is);
          return [HR(wD, DD), pD]
        }(zD.baf2CoreBankPaused),
        RD = new Set(cD),
        AD = [...zD.baf2CoreBanked];
      for (const pD of RD) AD.some((DD => {
        let [zD] = DD;
        return zD === pD
      })) || AD.push([pD, 0]);
      return 0 === AD.length ? null : (0, xK.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, xK.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": rD,
          onClick: () => {
            LD(!rD)
          },
          children: [(0, xK.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: KD(`${DA}coreBankedLater`)
          }), (0, xK.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: AD.map((DD => {
              let [zD, wD] = DD;
              const pD = RD.has(zD);
              return (0, xK.jsxs)("span", {
                className: Vs()({
                  Paused: pD
                }),
                title: pD ? KD(`${DA}coreBankPausedTag`) : void 0,
                children: [(0, xK.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, xK.jsx)(ds.d, {
                    itemName: zD,
                    amount: 0
                  })
                }), wD, pD && (0, xK.jsx)(bs.e, {
                  name: "pause"
                })]
              }, zD)
            }))
          }), (0, xK.jsx)(bs.e, {
            name: rD ? "angle-up" : "angle-down"
          })]
        }), rD && (0, xK.jsxs)(xK.Fragment, {
          children: [(0, xK.jsx)("ul", {
            children: AD.map((DD => {
              let [zD, pD] = DD;
              const rD = RD.has(zD);
              return (0, xK.jsxs)("li", {
                children: [(0, xK.jsxs)(eR, {
                  item: zD,
                  itemNames: wD,
                  children: [(0, xK.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: pD
                  }), rD && (0, xK.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: KD(`${DA}coreBankPausedTag`)
                  })]
                }), (0, xK.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, xK.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === pD,
                    onClick: () => {
                      sD.send(`baf2corewithdraw ${pD} ${zD}`)
                    },
                    children: KD(`${DA}coreTake`)
                  }), (0, xK.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      sD.send(`${OD} ${zD}`), gD(zD, !rD)
                    },
                    children: KD(rD ? `${DA}coreBankResume` : `${DA}coreBankStop`)
                  })]
                })]
              }, zD)
            }))
          }), (0, xK.jsx)("p", {
            className: "Baf2CoreHint",
            children: KD(`${DA}coreBankNote`)
          })]
        })]
      })
    }
    const wA = "buildAFactory2Game:";

    function pA(DD) {
      const zD = Math.max(0, Math.floor(DD));
      return `${Math.floor(zD/60)}:${String(zD%60).padStart(2,"0")}`
    }

    function sA(DD) {
      let {
        item: zD
      } = DD;
      return (0, xK.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, xK.jsx)(ds.d, {
          itemName: zD,
          amount: 0
        })
      })
    }

    function KA() {
      return (0, xK.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, xK.jsx)(bs.e, {
          name: "bolt"
        })
      })
    }

    function rA(DD) {
      let {
        charge: zD,
        hint: wD,
        itemNames: pD
      } = DD;
      const sD = or(),
        {
          t: KD
        } = (0, Ts.E)(),
        [rD, LD, cD, gD, RD, AD, UD] = zD,
        [fD, ID] = function(DD) {
          var zD;
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr,
            pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [sD, KD] = qR((() => DD), DD, wD, pD);
          return [FR(null !== (zD = sD.get("")) && void 0 !== zD ? zD : null, DD), DD => {
            KD("", DD)
          }]
        }(UD),
        BD = fD === UD ? AD : !fD,
        GD = gD >= RD,
        hD = rD.find((DD => {
          let [, zD, wD] = DD;
          return wD < .9 * zD
        }));
      let nD = `${wA}coreChargeWaiting`,
        MD = {};
      return GD ? nD = `${wA}coreChargeDone` : fD ? nD = `${wA}coreChargeStopped` : BD && wD ? (nD = `${wA}${wD[0]}`, MD = {
        item: LK(KD, wD[1])
      }) : BD && hD ? (nD = `${wA}coreChargeShort`, MD = {
        item: LK(KD, hD[0])
      }) : BD && LD > 0 && !cD ? nD = `${wA}coreChargePower` : BD && (nD = `${wA}coreChargeRunning`), (0, xK.jsxs)("div", {
        className: Vs()("Baf2CoreCharge", {
          Waiting: !BD && !GD,
          Done: GD
        }),
        children: [(0, xK.jsxs)("h4", {
          children: [KD(`${wA}coreChargeTitle`), (0, xK.jsx)("span", {
            children: KD(`${wA}coreChargeProgress`, {
              done: pA(gD),
              need: pA(RD)
            })
          })]
        }), (0, xK.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, xK.jsx)("div", {
            style: {
              width: 100 * Math.min(gD, RD) / RD + "%"
            }
          })
        }), (0, xK.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [rD.map((DD => {
            var zD;
            let [wD, sD, rD] = DD;
            const LD = rD >= .9 * sD;
            return (0, xK.jsxs)("li", {
              className: Vs()({
                Done: LD,
                Short: BD && !LD
              }),
              children: [(0, xK.jsx)(sA, {
                item: wD
              }), (0, xK.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, xK.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, xK.jsx)(Ss.e, {
                    text: null !== (zD = pD[wD]) && void 0 !== zD ? zD : wD
                  }), (0, xK.jsx)("span", {
                    children: KD(`${wA}coreChargeItem`, {
                      now: String(rD),
                      need: String(sD)
                    })
                  })]
                }), (0, xK.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, xK.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*rD/sD)}%`
                    }
                  })
                })]
              })]
            }, wD)
          })), LD > 0 && (0, xK.jsxs)("li", {
            className: Vs()("Baf2CoreChargePower", {
              Short: BD && !cD
            }),
            children: [(0, xK.jsx)(KA, {}), (0, xK.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, xK.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, xK.jsx)("span", {
                  children: KD(`${wA}coreChargePowerRow`, {
                    power: YD(LD)
                  })
                })
              })
            })]
          })]
        }), (0, xK.jsx)("p", {
          className: "Baf2CoreHint",
          children: KD(nD, MD)
        }), !GD && (BD || fD) && (0, xK.jsx)("button", {
          type: "button",
          className: Vs()("Baf2CoreChargeToggle", {
            Stopped: fD
          }),
          onClick: () => {
            sD.send(ED), ID(!fD)
          },
          children: KD(fD ? `${wA}coreChargeRestart` : `${wA}coreChargeStop`)
        })]
      })
    }

    function LA(DD) {
      let {
        charge: zD,
        reached: wD,
        itemNames: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)();
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2CoreCharge", {
          Done: wD
        }),
        children: [(0, xK.jsxs)("h4", {
          children: [sD(`${wA}coreChargeTitle`), (0, xK.jsx)("span", {
            children: sD(`${wA}coreChargeSpecTime`, {
              time: pA(zD.seconds)
            })
          })]
        }), (0, xK.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [zD.items.map((DD => {
            var zD;
            let {
              item: KD,
              amount: rD
            } = DD;
            return (0, xK.jsxs)("li", {
              className: Vs()({
                Done: wD
              }),
              children: [(0, xK.jsx)(sA, {
                item: KD
              }), (0, xK.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, xK.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, xK.jsx)(Ss.e, {
                    text: null !== (zD = pD[KD]) && void 0 !== zD ? zD : KD
                  }), (0, xK.jsx)("span", {
                    children: sD(`${wA}coreChargeSpecItem`, {
                      need: String(rD)
                    })
                  })]
                })
              })]
            }, KD)
          })), zD.powerPerS > 0 && (0, xK.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, xK.jsx)(KA, {}), (0, xK.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, xK.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, xK.jsx)("span", {
                  children: sD(`${wA}coreChargePowerRow`, {
                    power: YD(zD.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const cA = "buildAFactory2Game:";

    function gA(DD) {
      let {
        def: zD,
        reached: wD,
        banked: pD,
        itemNames: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)();
      return (0, xK.jsx)("ul", {
        className: "Baf2CoreCost",
        children: zD.cost.map((DD => {
          let {
            item: zD,
            amount: rD
          } = DD;
          const LD = wD ? 0 : pD(zD);
          return (0, xK.jsx)("li", {
            children: (0, xK.jsx)(eR, {
              item: zD,
              itemNames: sD,
              children: (0, xK.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: LD > 0 ? KD(`${cA}coreBankedFor`, {
                  amount: String(LD),
                  total: String(rD)
                }) : `\xd7${rD}`
              })
            })
          }, zD)
        }))
      })
    }

    function RA(DD, zD) {
      if (zD >= RD()) return DD(`${cA}coreMaxTier`);
      const wD = gD[zD + 1];
      return wD && !wD.startsWith("upgradeCore") ? DD(`${cA}coreGateQuest`, {
        quest: DD(`${cA}quest_${wD}`)
      }) : DD(`${cA}coreGateClosed`)
    }

    function AA() {
      const {
        t: DD
      } = (0, Ts.E)(), zD = or(), wD = (0, pD.useRef)(null), sD = (0, pD.useRef)(Date.now());
      return Yg(!0, wD), (0, xK.jsx)("div", {
        ref: wD,
        className: "Baf2CoreGrow",
        children: (0, xK.jsx)(Vr.o, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - sD.current >= 600 && zD.send(MD)
          },
          children: DD(`${cA}coreGrow`)
        })
      })
    }

    function UA(DD) {
      let {
        message: zD,
        itemNames: wD,
        next: pD
      } = DD;
      const sD = or(),
        {
          t: KD
        } = (0, Ts.E)(),
        rD = zD.baf2CoreTier,
        LD = zD.baf2CoreReady,
        cD = zD.baf2CoreNeeds.filter((DD => {
          let [, zD, wD, pD] = DD;
          return pD > 0 && zD < wD
        })),
        gD = zD.baf2CoreNeeds.every((DD => {
          let [, zD, wD] = DD;
          return zD >= wD
        })),
        RD = zD.baf2CoreKeep;
      return (0, xK.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, xK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [LD && (0, xK.jsx)(AA, {}), (0, xK.jsx)("h3", {
            children: KD(`${cA}coreBring`)
          }), (0, xK.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: zD.baf2CoreNeeds.map((DD => {
              let [zD, pD, rD, LD] = DD;
              return (0, xK.jsxs)("li", {
                className: Vs()({
                  Done: pD >= rD
                }),
                children: [(0, xK.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, xK.jsx)(ds.d, {
                    itemName: zD,
                    amount: 0
                  })
                }), (0, xK.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, xK.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, xK.jsx)(Ss.e, {
                      text: wD[zD]
                    }), (0, xK.jsxs)("span", {
                      children: [pD, "/", rD]
                    })]
                  }), (0, xK.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, xK.jsx)("div", {
                      style: {
                        width: 100 * pD / rD + "%"
                      }
                    }), LD > 0 && (0, xK.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * LD / rD + "%"
                      }
                    })]
                  })]
                }), LD > 0 && pD < rD && (0, xK.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    sD.send(`${JD} ${zD}`)
                  },
                  children: KD(`${cA}coreDeposit`, {
                    amount: String(LD)
                  })
                })]
              }, zD)
            }))
          }), zD.baf2CoreCharge && (0, xK.jsx)(rA, {
            charge: zD.baf2CoreCharge,
            hint: zD.baf2CoreChargeHint,
            itemNames: wD
          }), !LD && cD.length > 1 && (0, xK.jsx)(Vr.o, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              sD.send(MD)
            },
            children: KD(`${cA}coreHandOver`)
          }), !LD && void 0 !== RD && (0, xK.jsx)("p", {
            className: "Baf2CoreHint",
            children: KD(`${cA}coreKeepRest`, {
              item: LK(KD, RD)
            })
          }), !LD && !gD && 0 === cD.length && void 0 === RD && (0, xK.jsx)("p", {
            className: "Baf2CoreHint",
            children: KD(`${cA}coreNothingHeld`)
          }), (0, xK.jsx)(zA, {
            message: zD,
            itemNames: wD
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, xK.jsx)("h3", {
            children: KD(`${cA}coreRewards`)
          }), (0, xK.jsx)(vR, {
            def: pD,
            tier: rD + 1,
            itemNames: wD
          })]
        })]
      })
    }

    function fA(DD) {
      let {
        message: zD,
        itemNames: wD,
        shown: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), KD = zD.baf2CoreTier, rD = hD(pD), LD = pD <= KD, cD = new Map(zD.baf2CoreBanked), gD = !nD(KD, QD(zD)) && pD === KD;
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2CoreBody", {
          Locked: !LD
        }),
        children: [(0, xK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, xK.jsx)("h3", {
            children: sD(LD ? `${cA}coreItTook` : `${cA}coreItNeeds`)
          }), 0 === rD.cost.length && (0, xK.jsx)("p", {
            className: "Baf2CoreHint",
            children: sD(`${cA}coreTierStart`)
          }), rD.cost.length > 0 && (0, xK.jsx)(gA, {
            def: rD,
            reached: LD,
            banked: DD => {
              var zD;
              return function(DD, zD, wD, pD) {
                let sD = DD;
                for (let rD = zD + 2; rD <= wD; rD++) {
                  var KD;
                  const DD = hD(rD).cost.find((DD => DD.item === pD)),
                    zD = Math.min(sD, null !== (KD = null === DD || void 0 === DD ? void 0 : DD.amount) && void 0 !== KD ? KD : 0);
                  if (rD === wD) return zD;
                  sD -= zD
                }
                return 0
              }(null !== (zD = cD.get(DD)) && void 0 !== zD ? zD : 0, KD, pD, DD)
            },
            itemNames: wD
          }), rD.charge && (0, xK.jsx)(LA, {
            charge: rD.charge,
            reached: LD,
            itemNames: wD
          }), gD && (0, xK.jsxs)(xK.Fragment, {
            children: [(0, xK.jsx)("p", {
              className: "Baf2CoreHint",
              children: RA(sD, KD)
            }), (0, xK.jsx)(zA, {
              message: zD,
              itemNames: wD
            })]
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, xK.jsx)("h3", {
            children: sD(LD ? `${cA}coreGave` : `${cA}coreLockedRewards`)
          }), (0, xK.jsx)(vR, {
            def: rD,
            tier: pD,
            itemNames: wD
          })]
        })]
      })
    }

    function IA(DD, zD) {
      const {
        key: wD,
        params: pD
      } = fD(zD - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return DD(`${cA}${wD}`, pD)
    }
    const BA = "buildAFactory2Game:",
      GA = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      hA = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function nA(DD) {
      let {
        view: zD,
        close: wD,
        askIslands: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)(), [rD, LD] = (0, pD.useState)(!1);
      (0, pD.useEffect)((() => {
        if (!rD) return;
        const DD = window.setTimeout((() => {
          LD(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(DD)
        }
      }), [rD]);
      const {
        message: cD,
        itemNames: gD
      } = zD, RD = cD.baf2CoreTier, AD = hD(RD), UD = nD(RD, QD(cD)), [BD, GD] = cD.baf2CoreMachines, [MD, OD] = cD.baf2CoreBelts, JD = cD.baf2CoreStorage, ED = cD.baf2CoreReady, [XD, VD] = (0, pD.useState)(null), PD = (null === XD || void 0 === XD ? void 0 : XD.at) === RD && XD.ready === ED ? XD.tier : UD ? RD + 1 : RD;
      let CD = "coreTierLocked";
      PD <= RD ? CD = "coreTierReached" : PD === RD + 1 && (CD = "coreTierNext");
      const xD = KD(`${BA}${hD(PD).nameKey}`),
        TD = PD === RD + 1 ? UD : null,
        bD = fD(PD, {
          tier: CD,
          stage: GA[CD],
          atomic: hA[CD]
        }),
        jD = KD(`${BA}${bD.key}`, {
          ...bD.params,
          name: xD
        }),
        dD = fD(RD, ID),
        SD = KD(`${BA}${dD.key}`, {
          ...dD.params,
          name: KD(`${BA}${AD.nameKey}`)
        });
      return (0, xK.jsx)(Xr.c, {
        close: wD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              children: [(0, xK.jsx)("h2", {
                id: "baf2CoreTitle",
                children: KD(`${BA}coreTitle`)
              }), void 0 !== cD.baf2CoreIslandName && (0, xK.jsx)("p", {
                className: "Baf2CoreIsland",
                children: cD.baf2CoreIslandName
              }), (0, xK.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, xK.jsx)("span", {
                  children: SD
                }), (0, xK.jsx)("span", {
                  className: Vs()({
                    Full: BD >= GD
                  }),
                  children: KD(`${BA}coreMachineCount`, {
                    amount: String(BD),
                    total: String(GD)
                  })
                }), (0, xK.jsx)("span", {
                  className: Vs()({
                    Full: MD >= OD
                  }),
                  children: KD(`${BA}coreBeltCount`, {
                    amount: String(MD),
                    total: String(OD)
                  })
                }), void 0 !== JD && (0, xK.jsx)("span", {
                  className: Vs()({
                    Full: JD[0] >= JD[1]
                  }),
                  children: KD(`${BA}coreStorageCount`, {
                    amount: String(JD[0]),
                    total: String(JD[1])
                  })
                })]
              })]
            }), (0, xK.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [cD.baf2CoreIslands && (0, xK.jsx)(Vr.f, {
                className: "Baf2CoreIslandsButton",
                disabled: rD,
                onClick: () => {
                  LD(!0), sD()
                },
                children: KD(`${BA}islandsOpenButton`)
              }), (0, xK.jsx)(Vr.k, {
                onClick: wD
              })]
            })]
          }), (0, xK.jsx)(kR, {
            tier: RD,
            shown: PD,
            HU: DD => {
              VD({
                tier: DD,
                at: RD,
                ready: ED
              })
            }
          }), (0, xK.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [jD, PD > RD + 1 && (0, xK.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: IA(KD, PD)
            })]
          }), 6 === PD && PD > RD && (0, xK.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: KD(`${BA}coreStagesNote`)
          }), 11 === PD && PD > RD && (0, xK.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: KD(`${BA}coreAtomicNote`)
          }), TD && (0, xK.jsx)(UA, {
            message: cD,
            itemNames: gD,
            next: TD
          }), !TD && (0, xK.jsx)(fA, {
            message: cD,
            itemNames: gD,
            shown: PD
          })]
        })
      })
    }
    const MA = {
      stepDropToRuin: "ruin",
      stepDropToOldWorks: "works",
      stepCometDrop: "comet",
      stepIsotopeAfterComet: "comet",
      stepCometOwedReady: "owed",
      stepIsotopeReady: "owed",
      stepIsotopeAgain: "owed",
      stepIsotopeAgainHome: "owed",
      stepCometThenDig: "owed",
      stepDropToDig: "dig"
    };
    const OA = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: AK,
      nameKey: "item:relayCoil",
      useKey: "buildAFactory2Game:dropSalvageCoil",
      params: {
        amount: String(2)
      }
    }, {
      item: "Deposit Seed (Copper)",
      nameKey: "buildAFactory2Game:dropSalvageSeedName",
      useKey: "buildAFactory2Game:dropSalvageSeed"
    }];

    function JA(DD) {
      return DD.baf2DropCometOreOnly ? "dropCometOre" : DD.baf2DropCometIsotope ? "seed" === DD.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function EA(DD) {
      let {
        message: zD,
        quests: wD,
        close: sD,
        leave: KD
      } = DD;
      const rD = or(),
        {
          t: LD
        } = (0, Ts.E)(),
        cD = (0, rR.k)(Zs, wD.get()),
        gD = function(DD) {
          var zD;
          if (!dD(DD.tutorial)) return null;
          const wD = DD.rows.find((DD => DD.current)),
            pD = wD ? MA[wD.key] : void 0;
          return null !== (zD = null !== pD && void 0 !== pD ? pD : DD.side ? MA[DD.side.row.key] : void 0) && void 0 !== zD ? zD : null
        }(cD),
        RD = null === cD.tier || IK(cD.tier),
        AD = RD ? OA : OA.filter((DD => {
          let {
            item: zD
          } = DD;
          return zD !== AK
        })),
        [UD, fD] = (0, pD.useState)(null),
        ID = null !== UD && void 0 !== UD ? UD : !zD.baf2DropFoundSalvage && RD,
        BD = zD.baf2DropRuinDistance,
        GD = zD.baf2DropComet,
        hD = zD.baf2DropOldWorks,
        nD = zD.baf2DropGrove,
        MD = function(DD) {
          return 2 + Number(void 0 !== DD.baf2DropComet) + Number(!!DD.baf2DropOwedComet || void 0 !== DD.baf2DropOwedWaitMinutes) + Number(void 0 !== DD.baf2DropDigDistance) + Number(void 0 !== DD.baf2DropOldWorks) + Number(void 0 !== DD.baf2DropGrove)
        }(zD),
        OD = DD => {
          rD.send(function(DD) {
            return `baf2drop ${DD}`
          }(DD)), KD()
        };
      let JD = LD("buildAFactory2Game:dropRuinNone");
      if (null !== BD) {
        let DD = zD.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        zD.baf2DropRuinOldWorks && (DD = "dropRuinOldWorks");
        const wD = void 0 === zD.baf2DropRuinCluster ? LD("buildAFactory2Game:dropRuinOpen") : LD("buildAFactory2Game:dropRuinCluster", {
          count: String(zD.baf2DropRuinCluster)
        });
        JD = `${LD(`buildAFactory2Game:${DD}`,{distance:String(BD)})} ${wD}`
      }
      let ED = LD("buildAFactory2Game:dropBelowDescription");
      void 0 !== zD.baf2DropBelowLook && (ED = LD("buildAFactory2Game:dropBelowLook", {
        look: LD(zD.baf2DropBelowLook)
      }));
      const QD = "buildAFactory2Game:wildsRegion_survivorGrove" === zD.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        XD = XK(LD, 60 * function(DD) {
          const [zD, wD] = (0, pD.useState)((() => Date.now())), [sD, KD] = (0, pD.useState)(zD);
          return (0, pD.useEffect)((() => {
            const DD = Date.now();
            wD(DD), KD(DD)
          }), [DD]), (0, pD.useEffect)((() => {
            const DD = window.setInterval((() => {
              KD(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(DD)
            }
          }), []), Math.max(1, DD.baf2DropRenewMinutes - Math.floor((sD - zD) / 6e4))
        }(zD)),
        VD = function(DD, zD, wD) {
          return "ruin" === DD && !wD || "owed" === DD && !zD.baf2DropOwedComet ? null : DD
        }(gD, zD, null !== BD),
        PD = function(DD) {
          for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
          return Vs()("Baf2DropTile", ...wD, {
            Wanted: VD === DD
          })
        };
      return (0, xK.jsx)(Xr.c, {
        close: sD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, xK.jsxs)("section", {
          className: Vs()("Baf2Panel Baf2DropMap", {
            Many: MD >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              children: [(0, xK.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: LD("buildAFactory2Game:dropMapTitle")
              }), (0, xK.jsx)("p", {
                children: LD("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, xK.jsx)(Vr.k, {
              onClick: sD
            })]
          }), (0, xK.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== GD && (0, xK.jsxs)(Vr.B, {
              className: PD("comet", "Baf2DropComet"),
              onClick: () => {
                OD("comet")
              },
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropComet")
              }), (0, xK.jsx)("span", {
                children: LD(`buildAFactory2Game:${JA(zD)}`, {
                  distance: String(GD)
                })
              })]
            }), zD.baf2DropOwedComet && (0, xK.jsxs)(Vr.B, {
              className: PD("owed", "Baf2DropComet"),
              onClick: () => {
                OD("owed")
              },
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropOwedComet")
              }), (0, xK.jsx)("span", {
                children: zD.baf2DropOwedIsotope ? LD("buildAFactory2Game:dropOwedIsotopeDescription") : LD("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== zD.baf2DropOwedWaitMinutes && (0, xK.jsxs)(Vr.B, {
              className: PD("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropOwedComet")
              }), (0, xK.jsx)("span", {
                children: LD("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(zD.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, xK.jsxs)(Vr.f, {
              className: PD("below"),
              onClick: () => {
                OD("below")
              },
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropBelow")
              }), (0, xK.jsx)("span", {
                children: ED
              })]
            }), void 0 !== zD.baf2DropDigDistance && (0, xK.jsxs)(Vr.v, {
              className: PD("dig"),
              onClick: () => {
                OD("dig")
              },
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropDig")
              }), (0, xK.jsx)("span", {
                children: LD("buildAFactory2Game:dropDigDescription", {
                  distance: String(zD.baf2DropDigDistance),
                  y: QK(zD.baf2DropDigY)
                })
              })]
            }), void 0 !== nD && (0, xK.jsxs)(Vr.v, {
              className: PD("grove", "Baf2DropGrove"),
              onClick: () => {
                OD("grove")
              },
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropGrove")
              }), (0, xK.jsx)("span", {
                children: LD(`buildAFactory2Game:${QD}`, {
                  distance: String(nD)
                })
              })]
            }), (0, xK.jsxs)(Vr.o, {
              className: PD("ruin"),
              disabled: null === BD,
              onClick: () => {
                OD("ruin")
              },
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropRuin")
              }), (0, xK.jsx)("span", {
                children: JD
              })]
            }), void 0 !== hD && (0, xK.jsxs)(Vr.R, {
              className: PD("works"),
              onClick: () => {
                OD("works")
              },
              children: [(0, xK.jsx)("strong", {
                children: LD("buildAFactory2Game:dropOldWorks")
              }), (0, xK.jsx)("span", {
                children: LD("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(hD)
                })
              })]
            })]
          }), (0, xK.jsx)("p", {
            className: "Baf2DropRenew",
            children: LD("buildAFactory2Game:dropRenew", {
              time: XD
            })
          }), (0, xK.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: ID,
            onToggle: DD => {
              DD.currentTarget.open !== ID && fD(DD.currentTarget.open)
            },
            children: [(0, xK.jsx)("summary", {
              children: LD("buildAFactory2Game:dropSalvageWhat")
            }), (0, xK.jsx)("p", {
              children: LD("buildAFactory2Game:dropSalvageIntro")
            }), (0, xK.jsx)("ul", {
              children: AD.map((DD => {
                let {
                  item: zD,
                  nameKey: wD,
                  useKey: pD,
                  params: sD
                } = DD;
                return (0, xK.jsxs)("li", {
                  children: [(0, xK.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, xK.jsx)(ds.d, {
                      itemName: zD,
                      amount: 0
                    })
                  }), (0, xK.jsxs)("span", {
                    children: [(0, xK.jsx)("strong", {
                      children: LD(wD)
                    }), ": ", LD(pD, sD)]
                  })]
                }, zD)
              }))
            })]
          })]
        })
      })
    }
    const QA = "buildAFactory2Game:";

    function XA(DD, zD) {
      return DD.sendIslandEdit(`baf2coopleave ${zD.baf2IslandId}`)
    }

    function VA(DD) {
      let {
        card: zD,
        canRename: wD,
        done: sD,
        t: KD
      } = DD;
      const rD = or(),
        [LD, cD] = (0, pD.useState)(zD.baf2IslandName),
        gD = Xg(LD),
        RD = "" === gD || Vg(gD),
        AD = () => {
          !RD && wD && (gD !== zD.baf2IslandName ? sD(rD.sendIslandEdit(`baf2islandrename ${zD.baf2IslandId} ${gD}`)) : sD(null))
        },
        UD = () => {
          sD(null)
        };
      return (0, xK.jsxs)("div", {
        className: "Baf2IslandForm",
        ...tg(UD),
        children: [(0, xK.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [KD(`${QA}islandsRenameLabel`), (0, xK.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: LD,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Fg,
            onChange: DD => {
              cD(DD.target.value)
            },
            ...vg(AD, UD)
          })]
        }), "" === gD && (0, xK.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: KD(`${QA}islandsRenameEmpty`)
        }), Vg(gD) && (0, xK.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: KD(`${QA}islandsNameReserved`)
        }), (0, xK.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, xK.jsx)(Vr.v, {
            disabled: RD || !wD,
            onClick: AD,
            children: KD(`${QA}islandsRenameSave`)
          }), (0, xK.jsx)(Vr.f, {
            onClick: UD,
            children: KD(`${QA}islandsCancel`)
          })]
        })]
      })
    }

    function PA(DD) {
      let {
        card: zD,
        canDelete: wD,
        done: sD,
        t: KD
      } = DD;
      const rD = or(),
        [LD, cD] = (0, pD.useState)(""),
        gD = function(DD, zD) {
          return Xg(DD).toLowerCase() === Xg(zD).toLowerCase()
        }(LD, zD.baf2IslandName),
        RD = () => {
          gD && wD && sD(rD.sendIslandEdit(`baf2islanddelete ${zD.baf2IslandId}`))
        },
        AD = () => {
          sD(null)
        },
        UD = Wg("name"),
        [fD, ID = ""] = KD(`${QA}islandsDeleteConfirm`, {
          name: UD
        }).split(UD);
      return (0, xK.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...tg(AD),
        children: [(0, xK.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, xK.jsxs)("span", {
            children: [fD, (0, xK.jsx)("strong", {
              children: zD.baf2IslandName
            }), ID]
          }), (0, xK.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: LD,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Fg,
            onChange: DD => {
              cD(DD.target.value)
            },
            ...vg(RD, AD)
          })]
        }), eg(zD) && (0, xK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: KD(`${QA}islandsDeleteLeftBack`)
        }), (0, xK.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, xK.jsx)(Vr.R, {
            disabled: !gD || !wD,
            onClick: RD,
            children: KD(`${QA}islandsDeleteForGood`)
          }), (0, xK.jsx)(Vr.f, {
            onClick: AD,
            children: KD(`${QA}islandsCancel`)
          })]
        })]
      })
    }

    function CA(DD) {
      let {
        members: zD,
        t: wD
      } = DD;
      const pD = zD.length;
      return (0, xK.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, xK.jsxs)("span", {
          children: [1 === pD ? wD(`${QA}islandsPlayersOne`) : wD(`${QA}islandsPlayers`, {
            count: String(pD)
          }), " "]
        }), zD.map(((DD, zD) => (0, xK.jsxs)("span", {
          className: Vs()("Baf2IslandMember", {
            Here: DD.baf2MemberHere
          }),
          title: DD.baf2MemberHere ? wD(`${QA}islandsPlayerHere`) : void 0,
          children: [DD.baf2MemberName, zD < pD - 1 ? ", " : ""]
        }, DD.baf2MemberKey)))]
      })
    }

    function xA(DD) {
      let {
        card: zD,
        answered: wD,
        nowMs: sD,
        t: KD
      } = DD;
      const rD = or(),
        [LD, cD] = (0, pD.useState)(new Map),
        gD = eg(zD);
      if (!gD) return null;
      return (0, xK.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, xK.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: KD(`${QA}islandsLeftTitle`)
        }), (0, xK.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: gD.left.map((DD => {
            const pD = DD.baf2LeftKey,
              RD = ag(LD.get(pD), wD, sD),
              AD = function(DD) {
                return 1 === DD ? [`${Og}islandsLeftItemsOne`] : [`${Og}islandsLeftItems`, {
                  count: String(DD)
                }]
              }(DD.baf2LeftItems);
            return (0, xK.jsx)("li", {
              className: Vs()("Baf2IslandPerson", {
                Pending: RD
              }),
              children: (0, xK.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, xK.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: DD.baf2LeftName
                }), (0, xK.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: KD(AD[0], AD[1])
                }), gD.claim && (0, xK.jsx)(Vr.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: RD,
                  onClick: () => {
                    (DD => {
                      const wD = rD.sendIslandEdit(`baf2coopclaim ${zD.baf2IslandId} ${DD}`);
                      cD((zD => new Map(zD).set(DD, {
                        atMs: Date.now(),
                        answer: wD
                      })))
                    })(pD)
                  },
                  children: KD(`${QA}islandsClaim`)
                })]
              })
            }, pD)
          }))
        }), gD.goThere && (0, xK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: KD(`${QA}islandsClaimGoThere`)
        })]
      })
    }

    function TA(DD) {
      let {
        card: zD,
        view: wD,
        blocked: sD,
        maxIslands: KD,
        answered: rD,
        nowMs: LD,
        done: cD,
        openSocial: gD,
        t: RD
      } = DD;
      const AD = or(),
        [UD, fD] = (0, pD.useState)(new Map),
        [ID, BD] = (0, pD.useState)(new Map),
        [GD, hD] = (0, pD.useState)(null),
        nD = (0, pD.useRef)(null);
      DR(nD);
      const MD = zD.baf2IslandId,
        OD = zD.baf2IslandCoop,
        JD = null !== OD && void 0 !== OD && OD.baf2CoopMembers.some((DD => DD.baf2MemberKey === GD)) ? GD : null,
        ED = function(DD, zD) {
          const wD = DD.baf2IslandCoop;
          return wD && og(wD) || null !== zD ? void 0 : DD.baf2IslandInvitable
        }(zD, sD),
        QD = function(DD, zD) {
          const wD = DD.baf2IslandCoop;
          return wD && og(wD) ? {
            key: `${Og}islandsCoopFull`,
            params: {
              max: String(wD.baf2CoopMax)
            }
          } : void 0 !== DD.baf2IslandInvitable && null === zD || wD && !wD.baf2CoopManageHere ? null : "degraded" === zD || "stuck" === zD ? {
            key: `${Og}islandsInviteNotLoaded`
          } : null === zD || function(DD) {
            return "notHome" === DD || "wilds" === DD || "visiting" === DD
          }(zD) || Tg(zD) ? {
            key: `${Og}islandsInviteGoThere`
          } : {
            key: `${Og}islandsInviteBusy`
          }
        }(zD, sD),
        XD = () => {
          var DD;
          hD(null), null === (DD = nD.current) || void 0 === DD || DD.focus()
        };
      return (0, xK.jsxs)("div", {
        ref: nD,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...tg(null === JD ? cD : XD),
        children: [OD && (0, xK.jsxs)(xK.Fragment, {
          children: [(0, xK.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: RD(`${QA}islandsPlayersTitle`, {
              count: String(OD.baf2CoopMembers.length),
              max: String(OD.baf2CoopMax)
            })
          }), (0, xK.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: OD.baf2CoopMembers.map(((DD, zD) => {
              const pD = DD.baf2MemberKey,
                sD = ag(UD.get(pD), rD, LD);
              return (0, xK.jsxs)("li", {
                className: Vs()("Baf2IslandPerson", {
                  Pending: sD
                }),
                children: [(0, xK.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, xK.jsx)("span", {
                    className: Vs()("Baf2IslandPersonName", {
                      Here: DD.baf2MemberHere
                    }),
                    children: DD.baf2MemberName
                  }), DD.baf2MemberHere && (0, xK.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: RD(`${QA}islandsPlayerHere`)
                  }), 0 === zD && (0, xK.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: RD(`${QA}islandsPlayerOwner`)
                  }), wD.remove && zD > 0 && !sD && JD !== pD && (0, xK.jsx)(Vr.T, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var DD;
                      hD(pD), null === (DD = nD.current) || void 0 === DD || DD.focus()
                    },
                    children: RD(`${QA}islandsRemove`)
                  })]
                }), JD === pD && (0, xK.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, xK.jsx)("p", {
                    children: Ng(RD, `${QA}islandsRemoveConfirm`, {
                      player: DD.baf2MemberName
                    })
                  }), (0, xK.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, xK.jsx)(Vr.R, {
                      onClick: () => {
                        (DD => {
                          const zD = AD.sendIslandEdit(`baf2coopremove ${MD} ${DD.baf2MemberKey}`);
                          fD((wD => new Map(wD).set(DD.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: zD
                          }))), XD()
                        })(DD)
                      },
                      children: RD(`${QA}islandsRemoveYes`)
                    }), (0, xK.jsx)(Vr.f, {
                      onClick: XD,
                      children: RD(`${QA}islandsCancel`)
                    })]
                  })]
                })]
              }, pD)
            }))
          })]
        }), (void 0 !== ED || null !== QD) && (0, xK.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: RD(`${QA}islandsInviteTitle`)
        }), !OD && (void 0 !== ED || null !== QD) && (0, xK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: RD(`${QA}islandsInviteShareNote`)
        }), 0 === (null === ED || void 0 === ED ? void 0 : ED.length) && (0, xK.jsx)(bA, {
          openSocial: gD,
          t: RD
        }), void 0 !== ED && ED.length > 0 && (0, xK.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: ED.map((DD => {
            const zD = !0 === DD.baf2InvitableSent || ag(ID.get(DD.baf2InvitableId), rD, LD);
            return (0, xK.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, xK.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, xK.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: DD.baf2InvitableName
                }), DD.baf2InvitableFull && !zD && (0, xK.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: RD(`${QA}islandsInviteTheirFull`, {
                    max: String(KD)
                  })
                }), (zD || !DD.baf2InvitableFull) && (0, xK.jsx)(Vr.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: zD,
                  onClick: () => {
                    (DD => {
                      const zD = AD.sendIslandEdit(`baf2coopinvite ${MD} ${DD}`);
                      BD((wD => new Map(wD).set(DD, {
                        atMs: Date.now(),
                        answer: zD
                      })))
                    })(DD.baf2InvitableId)
                  },
                  children: RD(zD ? `${QA}islandsInvited` : `${QA}islandsInvite`)
                })]
              })
            }, DD.baf2InvitableId)
          }))
        }), QD && (0, xK.jsx)(pR, {
          note: QD,
          t: RD
        }), (0, xK.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, xK.jsx)(Vr.f, {
            onClick: cD,
            children: RD(`${QA}islandsDone`)
          })
        })]
      })
    }

    function bA(DD) {
      let {
        openSocial: zD,
        t: wD
      } = DD;
      return (0, xK.jsxs)(xK.Fragment, {
        children: [(0, xK.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: wD(zD ? `${QA}islandsInviteNobody` : `${QA}islandsInviteNobodyGuest`)
        }), zD && (0, xK.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, xK.jsx)(Vr.f, {
            onClick: zD,
            children: wD("socialBar:social")
          })
        })]
      })
    }

    function jA(DD) {
      let {
        className: zD,
        text: wD,
        ConfirmButton: sD,
        confirmLabel: KD,
        canConfirm: rD,
        send: LD,
        done: cD,
        t: gD
      } = DD;
      const RD = (0, pD.useRef)(null);
      DR(RD);
      const AD = () => {
        cD(null)
      };
      return (0, xK.jsxs)("div", {
        ref: RD,
        tabIndex: -1,
        className: Vs()("Baf2IslandForm", zD),
        ...tg(AD),
        children: [(0, xK.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: wD
        }), (0, xK.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, xK.jsx)(sD, {
            disabled: !rD,
            onClick: () => {
              rD && cD(LD())
            },
            children: KD
          }), (0, xK.jsx)(Vr.f, {
            onClick: AD,
            children: gD(`${QA}islandsCancel`)
          })]
        })]
      })
    }

    function dA(DD) {
      return "hidden" !== DD
    }

    function SA(DD) {
      var zD, wD;
      let {
        card: sD,
        keepOwn: KD,
        blocked: rD,
        maxIslands: LD,
        serverNowMs: cD,
        nowMs: gD,
        actions: RD,
        full: AD,
        waits: UD,
        answered: fD,
        mode: ID,
        setMode: BD,
        pending: GD,
        onSent: hD,
        switchTo: nD,
        leave: MD,
        coopOn: OD,
        openSocial: JD,
        t: ED
      } = DD;
      const QD = or(),
        XD = sD.baf2IslandActive,
        VD = XD ? null : function(DD, zD) {
          if (DD <= 0) return null;
          const wD = zD - DD;
          if (wD < MK) return [`${Og}islandsPlayedJustNow`];
          if (wD < Jg) return [`${Og}islandsPlayedMinutes`, {
            minutes: String(Math.floor(wD / MK))
          }];
          if (wD < Eg) return [`${Og}islandsPlayedHours`, {
            hours: String(Math.floor(wD / Jg))
          }];
          const pD = Math.floor(wD / Eg);
          return 1 === pD ? [`${Og}islandsPlayedDay`] : [`${Og}islandsPlayedDays`, {
            days: String(pD)
          }]
        }(sD.baf2IslandLastPlayedMs, cD),
        PD = void 0 === (CD = sD.baf2IslandItems) ? null : 0 === CD ? [`${Og}islandsItemsNone`] : 1 === CD ? [`${Og}islandsItemsOne`] : [`${Og}islandsItems`, {
          count: String(CD)
        }];
      var CD;
      const xD = function(DD) {
          return DD ? 1 === DD ? [`${Og}islandsWaitingOne`] : [`${Og}islandsWaiting`, {
            count: String(DD)
          }] : null
        }(sD.baf2IslandWaiting),
        TD = sD.baf2IslandUnreadable,
        bD = sD.baf2IslandCoop,
        jD = mg(sD, RD, KD, AD, OD, rD),
        dD = (0, pD.useRef)(null);
      Yg(null !== ID, dD);
      const SD = () => {
          var DD;
          BD(null), null === (DD = dD.current) || void 0 === DD || DD.focus()
        },
        iD = (DD, zD) => {
          SD(), null !== DD && hD(DD, zD)
        },
        lD = (DD, zD) => ED(`${QA}${DD}`, {
          time: XK(ED, zD)
        });
      return (0, xK.jsxs)("li", {
        ref: dD,
        tabIndex: -1,
        className: Vs()("Baf2IslandCard", {
          Active: XD,
          Pending: GD,
          Shared: void 0 !== bD
        }),
        children: [(0, xK.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, xK.jsx)("strong", {
            className: "Baf2IslandName",
            children: sD.baf2IslandName
          }), XD && (0, xK.jsx)("span", {
            className: "Baf2IslandBadge",
            children: ED(`${QA}islandsOnThis`)
          }), bD && (0, xK.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: ED(`${QA}islandsShared`)
          })]
        }), "member" === (null === bD || void 0 === bD ? void 0 : bD.baf2CoopRole) && (0, xK.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ng(ED, `${QA}islandsSharedBy`, {
            owner: bD.baf2CoopOwner
          })
        }), void 0 !== TD && (0, xK.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: ED("newer" === TD ? `${QA}islandsUnreadable` : `${QA}islandsDamaged`)
        }), "corrupt" === TD && AD && (0, xK.jsx)("p", {
          className: "Baf2IslandStats",
          children: ED(`${QA}islandsDamagedFull`)
        }), void 0 === TD && (0, xK.jsxs)(xK.Fragment, {
          children: [(0, xK.jsx)(wR, {
            tier: sD.baf2IslandTier,
            t: ED
          }), (0, xK.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, xK.jsx)("span", {
              children: 1 === sD.baf2IslandQuestsDone ? ED(`${QA}islandsQuestsDoneOne`) : ED(`${QA}islandsQuestsDone`, {
                count: String(sD.baf2IslandQuestsDone)
              })
            }), (0, xK.jsx)("span", {
              children: 1 === sD.baf2IslandMachines ? ED(`${QA}islandsMachinesOne`) : ED(`${QA}islandsMachines`, {
                count: String(sD.baf2IslandMachines)
              })
            }), PD && (0, xK.jsx)("span", {
              children: ED(PD[0], PD[1])
            }), xD && (0, xK.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: ED(xD[0], xD[1])
            }), VD && (0, xK.jsx)("span", {
              children: ED(VD[0], VD[1])
            })]
          })]
        }), bD && void 0 === bD.baf2CoopState && "people" !== ID && (0, xK.jsx)(CA, {
          members: bD.baf2CoopMembers,
          t: ED
        }), null === ID && (0, xK.jsx)(xA, {
          card: sD,
          answered: fD,
          nowMs: gD,
          t: ED
        }), jD.note && (0, xK.jsx)(pR, {
          note: jD.note,
          className: Vs()({
            Unreachable: void 0 !== (null === bD || void 0 === bD ? void 0 : bD.baf2CoopState)
          }),
          t: ED
        }), "rename" === ID && (0, xK.jsx)(VA, {
          card: sD,
          canRename: "enabled" === jD.rename,
          done: iD,
          t: ED
        }), "delete" === ID && (0, xK.jsx)(PA, {
          card: sD,
          canDelete: "enabled" === jD.delete,
          done: DD => {
            iD(DD, bD ? "delete" : void 0)
          },
          t: ED
        }), "people" === ID && (0, xK.jsx)(TA, {
          card: sD,
          view: jD,
          blocked: rD,
          maxIslands: LD,
          answered: fD,
          nowMs: gD,
          done: SD,
          openSocial: JD,
          t: ED
        }), "leave" === ID && (0, xK.jsx)(jA, {
          className: "Leave",
          text: Ng(ED, `${QA}islandsLeaveConfirm`, {
            island: sD.baf2IslandName,
            owner: null !== (zD = null === (wD = sD.baf2IslandCoop) || void 0 === wD ? void 0 : wD.baf2CoopOwner) && void 0 !== zD ? zD : ""
          }),
          ConfirmButton: Vr.R,
          confirmLabel: ED(`${QA}islandsLeaveYes`),
          canConfirm: "enabled" === jD.leave,
          send: () => XA(QD, sD),
          done: DD => {
            iD(DD, "leave"), null !== DD && XD && MD()
          },
          t: ED
        }), "unshare" === ID && (0, xK.jsx)(jA, {
          className: "Unshare",
          text: Ng(ED, `${QA}islandsStopSharingConfirm`, {
            island: sD.baf2IslandName
          }),
          ConfirmButton: Vr.v,
          confirmLabel: ED(`${QA}islandsStopSharing`),
          canConfirm: "enabled" === jD.unshare,
          send: () => QD.sendIslandEdit(`baf2coopunshare ${sD.baf2IslandId}`),
          done: DD => {
            iD(DD), null !== DD && MD()
          },
          t: ED
        }), null === ID && !GD && (0, xK.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": sD.baf2IslandName,
          children: [dA(jD.switch) && (0, xK.jsx)(Vr.v, {
            disabled: "enabled" !== jD.switch,
            onClick: nD,
            children: "tryAgain" === jD.switchLabel ? ED(`${QA}islandsTryAgain`) : UD.switch > 0 ? lD("islandsSwitchIn", UD.switch) : ED(`${QA}islandsSwitch`)
          }), dA(jD.rename) && (0, xK.jsx)(Vr.f, {
            disabled: "enabled" !== jD.rename,
            onClick: () => {
              BD("rename")
            },
            children: ED(`${QA}islandsRename`)
          }), dA(jD.people) && (0, xK.jsx)(Vr.f, {
            disabled: "enabled" !== jD.people,
            onClick: () => {
              BD("people")
            },
            children: ED("players" === jD.peopleLabel ? `${QA}islandsPlayersButton` : `${QA}islandsInviteButton`)
          }), dA(jD.unshare) && (0, xK.jsx)(Vr.f, {
            disabled: "enabled" !== jD.unshare,
            onClick: () => {
              BD("unshare")
            },
            children: ED(`${QA}islandsStopSharing`)
          }), dA(jD.dismiss) && (0, xK.jsx)(Vr.f, {
            disabled: "enabled" !== jD.dismiss,
            onClick: () => {
              hD(XA(QD, sD), "dismiss"), XD && MD()
            },
            children: ED(`${QA}islandsDismiss`)
          }), dA(jD.leave) && (0, xK.jsx)(Vr.T, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== jD.leave,
            onClick: () => {
              BD("leave")
            },
            children: XD && UD.switch > 0 ? lD("islandsLeaveIn", UD.switch) : ED(`${QA}islandsLeave`)
          }), dA(jD.delete) && (0, xK.jsx)(Vr.T, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== jD.delete,
            onClick: () => {
              BD("delete")
            },
            children: UD.change > 0 && jD.deleteWaits ? lD("islandsDeleteIn", UD.change) : ED(`${QA}islandsDelete`)
          })]
        })]
      })
    }
    const iA = "buildAFactory2Game:";

    function lA(DD) {
      let {
        invite: zD,
        actions: wD,
        full: sD,
        maxIslands: KD,
        waitSeconds: rD,
        focus: LD,
        focused: cD,
        join: gD,
        decline: RD,
        t: AD
      } = DD;
      const [UD, fD] = (0, pD.useState)(!1), ID = (0, pD.useRef)(null);
      Yg(UD, ID), (0, pD.useEffect)((() => {
        var DD;
        LD && (fD(!0), null === (DD = ID.current) || void 0 === DD || DD.focus(), cD())
      }), [LD, cD]);
      const BD = function(DD, zD, wD, pD, sD) {
          return wD ? {
            join: !1,
            note: {
              key: `${Og}islandsJoinTooMany`,
              params: {
                max: String(pD)
              }
            }
          } : DD.baf2InvitePlayers >= sD ? {
            join: !1,
            note: {
              key: `${Og}islandsJoinFull`
            }
          } : {
            join: zD.switch,
            note: null
          }
        }(zD, wD, sD, KD, 10),
        GD = zD.baf2InviteIsland,
        hD = zD.baf2InvitePlayers,
        nD = () => {
          var DD;
          fD(!1), null === (DD = ID.current) || void 0 === DD || DD.focus()
        },
        MD = rD > 0 && null === BD.note ? AD(`${iA}islandsJoinIn`, {
          time: XK(AD, rD)
        }) : AD(`${iA}islandsJoin`);
      return (0, xK.jsxs)("li", {
        ref: ID,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...UD ? tg(nD) : {},
        children: [(0, xK.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, xK.jsx)("strong", {
            className: "Baf2IslandName",
            children: GD
          })
        }), (0, xK.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ng(AD, `${iA}islandsInvitedBy`, {
            owner: zD.baf2InviteOwner
          })
        }), (0, xK.jsx)(wR, {
          tier: zD.baf2InviteTier,
          t: AD
        }), (0, xK.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, xK.jsx)("span", {
            children: 1 === hD ? AD(`${iA}islandsPlayersCountOne`) : AD(`${iA}islandsPlayersCount`, {
              count: String(hD)
            })
          })
        }), BD.note && (0, xK.jsx)(pR, {
          note: BD.note,
          t: AD
        }), UD && (0, xK.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Ng(AD, `${iA}islandsJoinConfirm`, {
            island: GD
          })
        }), !UD && (0, xK.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": GD,
          children: [(0, xK.jsx)(Vr.v, {
            disabled: !BD.join,
            onClick: () => {
              var DD;
              fD(!0), null === (DD = ID.current) || void 0 === DD || DD.focus()
            },
            children: MD
          }), (0, xK.jsx)(Vr.f, {
            onClick: RD,
            children: AD(`${iA}islandsDecline`)
          })]
        }), UD && (0, xK.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, xK.jsx)(Vr.v, {
            disabled: !BD.join,
            onClick: gD,
            children: AD(`${iA}islandsJoinYes`)
          }), (0, xK.jsx)(Vr.f, {
            onClick: nD,
            children: AD(`${iA}islandsCancel`)
          })]
        })]
      })
    }

    function WA(DD) {
      let {
        invites: zD,
        actions: wD,
        full: pD,
        maxIslands: sD,
        waitSeconds: KD,
        focus: rD,
        focused: LD,
        leave: cD,
        declined: gD,
        t: RD
      } = DD;
      const AD = or();
      return (0, xK.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, xK.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: RD(`${iA}islandsInvitesTitle`)
        }), (0, xK.jsx)("ul", {
          className: "Baf2IslandCards",
          children: zD.map((DD => {
            const zD = DD.baf2InviteId;
            return (0, xK.jsx)(lA, {
              invite: DD,
              actions: wD,
              full: pD,
              maxIslands: sD,
              waitSeconds: KD,
              focus: rD === zD,
              focused: LD,
              join: () => {
                AD.send(`baf2coopaccept ${zD}`), cD()
              },
              decline: () => {
                AD.send(`baf2coopdecline ${zD}`), gD(zD)
              },
              t: RD
            }, zD)
          }))
        })]
      })
    }
    const NA = "buildAFactory2Game:";

    function ZA(DD) {
      let {
        cards: zD,
        activeName: wD,
        canStart: sD,
        waitSeconds: KD,
        leave: rD,
        t: LD
      } = DD;
      const cD = or(),
        [gD, RD] = (0, pD.useState)(!1),
        [AD, UD] = (0, pD.useState)(""),
        fD = (0, pD.useRef)(null);
      Yg(gD, fD), (0, pD.useEffect)((() => {
        var DD;
        gD && (null === (DD = fD.current) || void 0 === DD || DD.focus())
      }), [gD]);
      const ID = Pg(zD),
        BD = Xg(AD),
        GD = Vg(BD),
        hD = () => {
          sD && !GD && (cD.send("" === BD || BD === ID ? tD : `${tD} ${BD}`), rD())
        },
        nD = () => {
          var DD;
          RD(!1), null === (DD = fD.current) || void 0 === DD || DD.focus()
        };
      return (0, xK.jsxs)("li", {
        ref: fD,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...gD ? tg(nD) : {},
        children: [(0, xK.jsx)("strong", {
          className: "Baf2IslandName",
          children: LD(`${NA}islandsNewTitle`)
        }), !gD && (0, xK.jsx)("p", {
          className: "Baf2IslandStats",
          children: LD(`${NA}islandsNewNote`)
        }), gD && (0, xK.jsxs)(xK.Fragment, {
          children: [(0, xK.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Ng(LD, `${NA}islandsNewConfirm`, {
              name: wD
            })
          }), (0, xK.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [LD(`${NA}islandsNewNameLabel`), (0, xK.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: AD,
              placeholder: ID,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Fg,
              onChange: DD => {
                UD(DD.target.value)
              },
              ...vg(hD, nD)
            })]
          }), GD && (0, xK.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: LD(`${NA}islandsNameReserved`)
          })]
        }), (0, xK.jsxs)("div", {
          className: Vs()("Baf2IslandButtons", {
            Stacked: gD
          }),
          children: [(0, xK.jsx)(Vr.v, {
            disabled: !sD || gD && GD,
            onClick: () => {
              if (!gD) return UD(ID), void RD(!0);
              hD()
            },
            children: KD > 0 ? LD(`${NA}islandsNewIn`, {
              time: XK(LD, KD)
            }) : LD(gD ? `${NA}islandsNewConfirmButton` : `${NA}islandsNew`)
          }), gD && (0, xK.jsx)(Vr.f, {
            onClick: nD,
            children: LD(`${NA}islandsCancel`)
          })]
        })]
      })
    }

    function yA(DD) {
      var zD, wD;
      let {
        message: sD,
        arrivedAtMs: KD,
        close: rD,
        leave: LD,
        openSocial: cD
      } = DD;
      const gD = or(),
        {
          t: RD
        } = (0, Ts.E)(),
        AD = zR(1e3),
        [UD, fD] = (0, pD.useState)(null),
        [ID, BD] = (0, pD.useState)(new Map),
        [GD, hD] = (0, pD.useState)(new Set),
        nD = sD.baf2IslandCards,
        MD = function(DD, zD, wD, pD) {
          return (null !== DD && void 0 !== DD ? DD : []).filter((DD => zD + DD.baf2InviteLeftMs > wD && !pD.has(DD.baf2InviteId)))
        }(sD.baf2IslandsInvites, KD, AD, GD),
        OD = MD.map((DD => DD.baf2InviteId)).join(" "),
        JD = (0, pD.useRef)(null),
        ED = Hg(JD);
      qg(), (0, pD.useEffect)((() => {
        var DD, zD;
        null !== (DD = JD.current) && void 0 !== DD && DD.contains(document.activeElement) || (null === (zD = JD.current) || void 0 === zD || zD.focus())
      }), [sD, OD]), (0, pD.useEffect)((() => {
        BD((DD => function(DD, zD, wD, pD) {
          const sD = new Map;
          for (const KD of zD) {
            const zD = DD.get(KD.baf2IslandId);
            zD && (void 0 !== zD.untilGone || pD < zD.answer) && Sg(zD, KD, wD) && sD.set(KD.baf2IslandId, zD)
          }
          return sD.size === DD.size ? DD : sD
        }(DD, sD.baf2IslandCards, Date.now(), sD.baf2IslandsAnswered)))
      }), [sD]);
      const QD = Qg(KD, sD.baf2IslandsWaitMs, AD),
        XD = sD.baf2IslandsBlocked,
        VD = bg(XD, QD),
        PD = function(DD, zD) {
          const wD = bg(DD, 0);
          return {
            switch: wD.switch ? zD : 0,
            change: wD.change ? zD : 0
          }
        }(XD, QD),
        CD = nD.length >= sD.baf2IslandsMax,
        xD = nD.length > 0,
        TD = function(DD, zD, wD) {
          return DD + Math.max(0, wD - zD)
        }(sD.baf2IslandsNowMs, KD, AD),
        bD = null !== (zD = null === (wD = nD.find((DD => DD.baf2IslandActive))) || void 0 === wD ? void 0 : wD.baf2IslandName) && void 0 !== zD ? zD : "",
        jD = function(DD) {
          const zD = DD.filter(kg).length;
          return zD <= 1 && zD < DD.length
        }(nD),
        dD = !0 === sD.baf2IslandsCoop,
        SD = function(DD, zD) {
          const wD = DD.find((DD => DD.baf2IslandActive)),
            pD = null === wD || void 0 === wD ? void 0 : wD.baf2IslandCoop;
          return wD && "member" === (null === pD || void 0 === pD ? void 0 : pD.baf2CoopRole) ? {
            key: `${Og}islandsKeepOwnMember`,
            names: {
              owner: pD.baf2CoopOwner,
              island: wD.baf2IslandName
            }
          } : {
            key: zD ? `${Og}islandsKeepOwn` : `${Og}islandsKeepOwnSolo`
          }
        }(nD, dD),
        [iD, lD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        void 0 !== sD.baf2IslandsFocusInvite && lD(sD.baf2IslandsFocusInvite)
      }), [sD]);
      const WD = (0, pD.useCallback)((() => {
          lD(null)
        }), []),
        ND = UD ? nD.find((DD => DD.baf2IslandId === UD.id)) : void 0,
        ZD = UD && ND && "hidden" !== mg(ND, VD, jD, CD, dD, XD)[UD.mode] ? UD : null;
      return (0, xK.jsx)(Xr.c, {
        close: rD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, xK.jsxs)("section", {
          ref: JD,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: ED ? {
            marginTop: `${ED.marginTop}px`,
            maxHeight: `${ED.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              children: [(0, xK.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: RD(`${NA}islandsTitle`)
              }), xD && (0, xK.jsx)("p", {
                children: RD(`${NA}islandsSubtitle`, {
                  count: String(nD.length),
                  max: String(sD.baf2IslandsMax)
                })
              })]
            }), (0, xK.jsx)(Vr.k, {
              ariaLabel: RD(`${NA}islandsClose`),
              onClick: rD
            })]
          }), (0, xK.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== XD && (0, xK.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Ng(RD, Cg(XD, xg(nD)), {
                island: bD
              })
            }), xD && MD.length > 0 && (0, xK.jsx)(WA, {
              invites: MD,
              actions: VD,
              full: CD,
              maxIslands: sD.baf2IslandsMax,
              waitSeconds: PD.switch,
              focus: iD,
              focused: WD,
              leave: LD,
              declined: DD => {
                hD((zD => new Set(zD).add(DD)))
              },
              t: RD
            }), xD && (0, xK.jsxs)(xK.Fragment, {
              children: [CD && (0, xK.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: RD(`${NA}islandsFull`, {
                  max: String(sD.baf2IslandsMax)
                })
              }), (0, xK.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Ng(RD, SD.key, SD.names)
              }), (0, xK.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [nD.map((DD => {
                  const zD = DD.baf2IslandId;
                  return (0, xK.jsx)(SA, {
                    card: DD,
                    keepOwn: jD,
                    coopOn: dD,
                    openSocial: cD,
                    blocked: XD,
                    maxIslands: sD.baf2IslandsMax,
                    serverNowMs: TD,
                    nowMs: AD,
                    actions: VD,
                    full: CD,
                    waits: PD,
                    answered: sD.baf2IslandsAnswered,
                    mode: (null === ZD || void 0 === ZD ? void 0 : ZD.id) === zD ? ZD.mode : null,
                    setMode: DD => {
                      fD(null === DD ? null : {
                        id: zD,
                        mode: DD
                      })
                    },
                    pending: Sg(ID.get(zD), DD, AD),
                    onSent: (wD, pD) => {
                      BD((sD => {
                        const KD = {
                          atMs: Date.now(),
                          from: DD.baf2IslandName,
                          answer: wD
                        };
                        return new Map(sD).set(zD, pD ? {
                          ...KD,
                          untilGone: pD
                        } : KD)
                      }))
                    },
                    leave: LD,
                    switchTo: () => {
                      gD.send(`baf2islandswitch ${zD}`), LD()
                    },
                    t: RD
                  }, zD)
                })), !CD && (0, xK.jsx)(ZA, {
                  cards: nD,
                  activeName: bD,
                  canStart: VD.change,
                  waitSeconds: PD.change,
                  leave: LD,
                  t: RD
                })]
              })]
            })]
          })]
        })
      })
    }
    var kA = wD(5049);
    const mA = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        iD: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      eA = Object.keys(mA),
      oA = new Set([...Object.keys(tz), ...[...Sz.Press.recipes, ...Sz["Wire Mill"].recipes].map((DD => DD.output))]),
      aA = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      uA = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      vA = / Bar$|Alloy$/,
      tA = /Porkchop|Beef|Mutton|Venison|Steak/,
      FA = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const YA = (0, pD.memo)((function(DD) {
      let {
        item: zD,
        name: wD,
        amount: pD,
        selected: sD,
        small: KD,
        onPick: rD
      } = DD;
      return (0, xK.jsxs)("button", {
        type: "button",
        className: Vs()("Baf2TermTile", {
          On: sD,
          Small: KD
        }),
        "aria-label": `${wD}: ${pD}`,
        "aria-pressed": sD,
        onClick: () => {
          rD(zD)
        },
        children: [(0, xK.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: zD,
            amount: 0
          })
        }), (0, xK.jsx)("span", {
          className: "Baf2TermCount",
          children: EK(pD, 1e4)
        }), !KD && (0, xK.jsx)("span", {
          className: "Baf2TermName",
          children: wD
        })]
      })
    }));

    function HA(DD) {
      let {
        store: zD,
        close: wD,
        send: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)(), {
        isTouchScreen: rD
      } = (0, Es.n)(["isTouchScreen"]);
      ! function(DD) {
        const [zD, wD] = (0, pD.useState)(DD.version);
        (0, pD.useEffect)((() => (wD(DD.version), DD.subscribe((() => {
          wD(DD.version)
        })))), [DD])
      }(zD);
      const [LD, cD] = (0, pD.useState)("all"), [gD, RD] = (0, pD.useState)(!1), [AD, UD] = (0, pD.useState)(""), [fD, ID] = (0, pD.useState)(""), [BD, GD] = (0, pD.useState)(null), [hD, nD] = (0, pD.useState)(!1), [MD, OD, JD] = function() {
        const DD = (0, pD.useRef)(null),
          [zD, wD] = (0, pD.useState)(!1),
          sD = () => {
            const zD = DD.current;
            wD(null !== zD && zD.scrollLeft + zD.clientWidth < zD.scrollWidth - 1)
          };
        return (0, pD.useEffect)(sD), (0, pD.useEffect)((() => {
          const zD = DD.current;
          if (!zD) return;
          const wD = new ResizeObserver(sD);
          return wD.observe(zD), () => {
            wD.disconnect()
          }
        }), []), [DD, zD, sD]
      }(), ED = (0, pD.useMemo)((() => new Map), [KD]), QD = DD => {
        let zD = ED.get(DD);
        return void 0 === zD && (zD = function(DD, zD) {
          const wD = /^(.+) \((.+)\)$/.exec(DD);
          return wD ? zD(wD[2], wD[1]) : DD
        }(LK(KD, DD), ((DD, zD) => KD("buildAFactory2Game:terminalTileKind", {
          kind: DD,
          base: zD
        }))), ED.set(DD, zD)), zD
      }, XD = zD.isReadOnly(), VD = hD && !XD, PD = zD.recent(), CD = zD.items(), xD = fD.trim().toLowerCase(), TD = VD ? zD.heldItems(BD) : ("recent" === LD ? PD : CD).filter((DD => {
        const zD = QD(DD);
        return ("all" === LD || "recent" === LD || function(DD) {
          return BK(DD) ? "farm" : aA.test(DD) ? "nuclear" : vA.test(DD) ? "bars" : tA.test(DD) ? "farm" : uA.test(DD) ? "iD" : oA.has(DD) ? "parts" : FA.test(DD) ? "farm" : "other"
        }(DD) === LD) && ("" === xD || zD.toLowerCase().includes(xD)) && ("" === AD || zD.toUpperCase().startsWith(AD))
      })), bD = new Set(CD.map((DD => QD(DD).charAt(0).toUpperCase()))), jD = DD => VD ? zD.heldAmount(DD) : zD.amount(DD), dD = !VD && "recent" !== LD && PD.length > 0, SD = function(DD, zD) {
        return null !== DD && zD.includes(DD) ? DD : null
      }(BD, dD ? [...TD, ...PD] : TD), iD = null === SD ? 0 : zD.amount(SD), lD = null === SD ? 0 : jD(SD), WD = (0, pD.useCallback)((DD => {
        GD((zD => zD === DD ? null : DD))
      }), []), ND = DD => lD > 0 || VD && null === SD && "fill" === DD && TD.length > 0, ZD = VD ? [
        ["one", KD("buildAFactory2Game:terminalStoreOne")],
        ["stack", KD("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", KD(null === SD ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", KD("buildAFactory2Game:terminalTakeOne")],
        ["stack", KD("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", KD("buildAFactory2Game:terminalFill")]
      ], yD = VD ? KD("buildAFactory2Game:terminalStoreEmpty") : "" !== AD ? KD("buildAFactory2Game:terminalEmptyLetter", {
        letter: AD
      }) : "" !== xD ? KD("buildAFactory2Game:terminalEmptySearch", {
        query: fD
      }) : KD("buildAFactory2Game:terminalEmpty");
      return (0, xK.jsx)(Xr.c, {
        close: wD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              children: [(0, xK.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: KD(zD.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, xK.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, xK.jsx)("span", {
                  className: Vs()({
                    Off: VD
                  }),
                  children: KD("buildAFactory2Game:terminalSubtitle", {
                    count: String(zD.siloCount())
                  })
                }), !XD && (0, xK.jsx)("span", {
                  className: Vs()({
                    Off: !VD
                  }),
                  children: KD("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !XD && (0, xK.jsx)(kA.e, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: KD("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: KD("buildAFactory2Game:terminalModeStore")
              }],
              value: VD ? "store" : "take",
              onChange: DD => {
                nD("store" === DD), GD(null)
              },
              ariaLabel: KD("buildAFactory2Game:terminalModes")
            }), (0, xK.jsx)(Vr.k, {
              onClick: wD
            })]
          }), (0, xK.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, xK.jsxs)("div", {
              className: Vs()("Baf2TermTools", {
                Hidden: VD
              }),
              children: [(0, xK.jsx)("div", {
                ref: MD,
                className: Vs()("Baf2TermChips", {
                  MoreRight: OD
                }),
                onScroll: JD,
                children: gD ? (0, xK.jsxs)(xK.Fragment, {
                  children: [(0, xK.jsx)("button", {
                    type: "button",
                    "aria-label": KD("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      RD(!1), UD("")
                    },
                    children: "\u2190"
                  }), [...bD].sort().map((DD => (0, xK.jsx)("button", {
                    type: "button",
                    className: Vs()({
                      On: AD === DD
                    }),
                    onClick: () => {
                      UD(AD === DD ? "" : DD)
                    },
                    children: DD
                  }, DD)))]
                }) : (0, xK.jsxs)(xK.Fragment, {
                  children: [(0, xK.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      RD(!0)
                    },
                    children: KD("buildAFactory2Game:terminalLetters")
                  }), eA.map((DD => (0, xK.jsx)("button", {
                    type: "button",
                    className: Vs()({
                      On: LD === DD
                    }),
                    onClick: () => {
                      cD(DD)
                    },
                    children: KD(mA[DD])
                  }, DD)))]
                })
              }), !rD && (0, xK.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: fD,
                placeholder: KD("buildAFactory2Game:terminalSearch"),
                "aria-label": KD("buildAFactory2Game:terminalSearch"),
                onChange: DD => {
                  ID(DD.target.value)
                },
                onKeyDown: DD => {
                  DD.stopPropagation()
                }
              }), (0, xK.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": KD("buildAFactory2Game:terminalResort"),
                title: KD("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  zD.resort()
                },
                children: "\u21c5"
              })]
            }), dD && (0, xK.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, xK.jsx)("span", {
                children: KD(mA.recent)
              }), PD.map((DD => (0, xK.jsx)(YA, {
                item: DD,
                name: QD(DD),
                amount: zD.amount(DD),
                selected: SD === DD,
                small: !0,
                onPick: WD
              }, DD)))]
            }), (0, xK.jsx)("div", {
              className: "Baf2TermTiles",
              children: TD.length > 0 ? TD.map((DD => (0, xK.jsx)(YA, {
                item: DD,
                name: QD(DD),
                amount: jD(DD),
                selected: SD === DD,
                onPick: WD
              }, DD))) : (0, xK.jsx)("p", {
                className: "Baf2TermEmpty",
                children: yD
              })
            }), (0, xK.jsxs)("div", {
              className: Vs()("Baf2TermActions", {
                Hidden: VD && 0 === TD.length
              }),
              children: [(0, xK.jsx)("span", {
                className: "Baf2TermPicked",
                children: XD ? (0, xK.jsxs)(xK.Fragment, {
                  children: [null !== SD && iD > 0 ? QD(SD) : KD("buildAFactory2Game:terminalVisiting"), (0, xK.jsx)("small", {
                    children: KD("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== SD ? (0, xK.jsxs)(xK.Fragment, {
                  children: [QD(SD), (0, xK.jsx)("small", {
                    children: KD("buildAFactory2Game:terminalStored", {
                      amount: iD.toLocaleString()
                    })
                  })]
                }) : KD(VD ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !XD && ZD.map((DD => {
                let [wD, pD] = DD;
                const KD = "fill" === wD ? Vr.o : Vr.f;
                return (0, xK.jsx)(KD, {
                  className: "Baf2TermTake",
                  disabled: !ND(wD),
                  onClick: () => {
                    (DD => {
                      ND(DD) && sD(null === SD ? zD.putAll() : VD ? zD.put(DD, SD) : zD.take(DD, SD))
                    })(wD)
                  },
                  children: pD
                }, wD)
              }))]
            })]
          })]
        })
      })
    }

    function qA(DD) {
      let {
        kind: zD,
        icon: wD,
        label: pD,
        number: sD,
        preview: KD,
        note: rD,
        tone: LD = null,
        share: cD,
        onExplain: gD
      } = DD;
      return (0, xK.jsxs)("button", {
        type: "button",
        className: Vs()("NxLane", zD, {
          Warn: "warn" === LD,
          Danger: "danger" === LD
        }),
        onClick: gD,
        children: [(0, xK.jsxs)("span", {
          className: "NxLaneHead",
          children: [wD, (0, xK.jsx)("span", {
            className: "NxLaneLabel",
            children: pD
          })]
        }), (0, xK.jsxs)("span", {
          className: "NxLaneNum",
          children: [sD, KD && (0, xK.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", KD]
          })]
        }), (0, xK.jsx)("span", {
          className: "NxLaneNote",
          children: rD
        }), void 0 !== cD && (0, xK.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, cD)) + "%"
          }
        })]
      })
    }

    function DU(DD) {
      let {
        kind: zD,
        step: wD,
        short: pD,
        planned: sD
      } = DD;
      return (0, xK.jsx)("i", {
        className: Vs()("NxPipe", zD, `Step${wD}`, {
          Short: pD,
          Planned: sD
        }),
        "aria-hidden": "true"
      })
    }

    function zU(DD) {
      let {
        max: zD,
        bands: wD,
        ticks: pD,
        now: sD,
        settle: KD,
        settleTone: rD,
        onExplain: LD
      } = DD;
      const cD = DD => Math.max(0, Math.min(zD, DD)) / zD * 100 + "%";
      let gD = 0;
      return (0, xK.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: LD,
        children: [(0, xK.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [wD.map((DD => {
            const zD = {
              bottom: cD(gD),
              height: `calc(${cD(DD.upTo)} - ${cD(gD)})`
            };
            return gD = DD.upTo, (0, xK.jsx)("i", {
              className: Vs()("NxGaugeBand", DD.kind),
              style: zD
            }, DD.kind)
          })), null !== sD && (0, xK.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: cD(sD)
            }
          }), void 0 !== KD && null !== KD && (0, xK.jsx)("i", {
            className: Vs()("NxGaugeSettle", {
              Bad: "bad" === rD
            }),
            style: {
              bottom: cD(KD)
            }
          })]
        }), (0, xK.jsx)("span", {
          className: "NxGaugeTicks",
          children: pD.map((DD => (0, xK.jsx)("small", {
            style: {
              bottom: cD(DD)
            },
            children: DD
          }, DD)))
        })]
      })
    }

    function wU(DD) {
      const [zD, wD] = (0, pD.useState)(null), [sD, KD] = (0, pD.useState)((() => {
        try {
          return null === window.localStorage.getItem(DD)
        } catch {
          return !1
        }
      })), rD = (0, pD.useRef)(null);
      (0, pD.useEffect)((() => () => {
        null !== rD.current && clearTimeout(rD.current)
      }), []);
      const LD = (0, pD.useCallback)((zD => {
          wD(zD), KD(!1);
          try {
            window.localStorage.setItem(DD, "1")
          } catch {}
          null !== rD.current && clearTimeout(rD.current), rD.current = setTimeout((() => {
            rD.current = null, wD(null)
          }), 5e3)
        }), [DD]),
        cD = (0, pD.useCallback)(((zD, wD) => {
          const pD = `${DD}:${zD}`;
          try {
            if (null !== window.localStorage.getItem(pD)) return;
            window.localStorage.setItem(pD, "1")
          } catch {
            return
          }
          LD(wD)
        }), [LD, DD]);
      return {
        explained: zD,
        hinting: sD,
        explain: LD,
        explainOnce: cD
      }
    }

    function pU(DD) {
      let {
        text: zD,
        tone: wD,
        explained: pD
      } = DD;
      return (0, xK.jsxs)("p", {
        className: Vs()("NxStatus", null === pD ? wD : "Explain"),
        "aria-live": "polite",
        children: [null !== pD && (0, xK.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== pD && void 0 !== pD ? pD : zD]
      })
    }
    const sU = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function KU(DD, zD) {
      const wD = Number(DD[zD]);
      return 1 === wD || 2 === wD || 3 === wD ? wD : 0
    }

    function rU(DD) {
      return !!Vc("reactor", DD.baf2RxNeed) || void 0 !== DD.baf2RxLayout && DD.baf2RxNeed.some((DD => {
        let [zD, wD] = DD;
        return wD > 0 && sU.includes(zD)
      }))
    }
    const LU = "buildAFactory2Game:";

    function cU(DD) {
      let {
        status: zD,
        store: wD,
        busy: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)();
      return function(DD) {
        return 0 !== (DD.baf2RxFlags & Bz) && (!DD.baf2RxFormed || void 0 !== DD.baf2RxLayout)
      }(zD) ? (0, xK.jsx)(Vr.o, {
        disabled: !rU(zD) || pD,
        onClick: () => {
          wD.tap("fill", (() => {
            wD.send("fill")
          }))
        },
        children: sD(void 0 !== zD.baf2RxLayout ? `${LU}rxFillLayout` : `${LU}rxFill`)
      }) : null
    }

    function gU(DD) {
      let {
        status: zD,
        store: wD,
        readOnly: sD,
        bare: KD = !1
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), LD = zD.baf2RxLayout, [cD, gD, RD] = zD.baf2RxDims, AD = (0, pD.useMemo)((() => {
        if (void 0 === LD) return 0;
        const DD = Uint8Array.from(LD, ((DD, zD) => KU(LD, zD)));
        return pc([cD - 2, gD - 2, RD - 2], DD).max
      }), [LD, cD, gD, RD]);
      return void 0 === LD ? null : (0, xK.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!KD && (0, xK.jsx)("span", {
          className: "Baf2RxHint",
          children: rD(`${LU}rxLayoutLine`, {
            amount: dc(AD)
          })
        }), !sD && (0, xK.jsx)(Vr.f, {
          onClick: () => {
            wD.send("layout", 0)
          },
          children: rD(`${LU}rxLayoutHide`)
        })]
      })
    }
    const RU = "buildAFactory2Game:",
      AU = {
        off: {
          colour: "#6b717c",
          rows: ["........", "........", ".oo..oo.", "........", "........", "..oooo..", "........", "........"]
        },
        calm: {
          colour: "#5aa9ff",
          rows: ["........", ".oo..oo.", ".oo..oo.", "........", ".o....o.", "..oooo..", "........", "........"]
        },
        warm: {
          colour: "#ffb020",
          rows: ["........", ".oo..oo.", ".oo..oo.", "........", "........", ".oooooo.", "........", "........"]
        },
        hot: {
          colour: "#ff7a2b",
          rows: [".......w", "oo....ow", ".oo..oo.", "........", "..oooo..", ".o....o.", "........", "........"]
        },
        alarm: {
          colour: "#ff3b30",
          rows: ["o......o", ".oo..oo.", ".oo..oo.", "........", "..oooo..", "..o..o..", "..oooo..", "........"]
        }
      };

    function UU(DD) {
      let {
        id: zD,
        title: wD,
        body: pD,
        bodyParams: sD,
        yes: KD,
        cancel: rD,
        confirm: LD
      } = DD;
      const {
        t: cD
      } = (0, Ts.E)();
      return (0, xK.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": zD,
        children: [(0, xK.jsx)("h3", {
          id: zD,
          children: cD(wD)
        }), (0, xK.jsx)("p", {
          children: cD(pD, sD)
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, xK.jsx)(Vr.g, {
            onClick: rD,
            children: cD(`${RU}rxCancel`)
          }), (0, xK.jsx)(Vr.R, {
            onClick: LD,
            children: cD(KD)
          })]
        })]
      })
    }

    function fU(DD) {
      const [zD, wD] = (0, pD.useState)((() => DD.get()));
      return (0, pD.useEffect)((() => (wD(DD.get()), DD.subscribe((() => {
        wD(DD.get())
      })))), [DD]), zD
    }

    function IU(DD) {
      let {
        kind: zD,
        cap: wD,
        busy: sD = !1,
        whyNot: KD = null,
        apart: rD
      } = DD;
      const {
        t: LD
      } = (0, Ts.E)(), [cD, gD] = (0, pD.useState)(!1), RD = null !== KD, AD = (0, pD.useRef)(null);
      if ((0, pD.useEffect)((() => {
          RD && gD(!1)
        }), [RD]), (0, pD.useLayoutEffect)((() => {
          var DD;
          const zD = null === (DD = AD.current) || void 0 === DD ? void 0 : DD.firstElementChild;
          RD ? null === zD || void 0 === zD || zD.setAttribute("aria-disabled", "true") : sD || null === zD || void 0 === zD || zD.removeAttribute("aria-disabled")
        })), !cD || RD) return (0, xK.jsx)("span", {
        ref: AD,
        className: "Baf2RxApartWrap",
        children: (0, xK.jsx)(Vr.g, {
          disabled: sD,
          className: Vs()({
            Baf2RxNotYet: RD
          }),
          onClick: () => {
            KD ? KD() : gD(!0)
          },
          children: LD(`${RU}rxApart`)
        })
      });
      const UD = "battery" === zD,
        fD = void 0 === wD ? `${RU}batApartConfirmBodyPlan` : `${RU}batApartConfirmBody`;
      return (0, xK.jsx)(UU, {
        id: `baf2ApartTitle_${zD}`,
        title: UD ? `${RU}batApartConfirmTitle` : `${RU}rxApartConfirmTitle`,
        body: UD ? fD : `${RU}rxApartConfirmBody`,
        bodyParams: void 0 === wD ? void 0 : {
          cap: wD
        },
        yes: `${RU}rxApart`,
        cancel: () => {
          gD(!1)
        },
        confirm: () => {
          gD(!1), rD()
        }
      })
    }

    function BU(DD) {
      let {
        mood: zD,
        big: wD
      } = DD;
      const pD = AU[zD],
        sD = [];
      return pD.rows.forEach(((DD, zD) => {
        for (let wD = 0; wD < DD.length; wD++) "." !== DD[wD] && sD.push((0, xK.jsx)("rect", {
          x: wD + 1,
          y: zD + 1,
          width: 1,
          height: 1,
          fill: "w" === DD[wD] ? "#8fd3ff" : pD.colour
        }, `${wD},${zD}`))
      })), (0, xK.jsxs)("svg", {
        className: Vs()("Baf2RxFace", {
          Big: wD,
          Alarm: "alarm" === zD
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, xK.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, xK.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), sD]
      })
    }

    function GU(DD) {
      return JK(DD, "+").replace("+", "")
    }

    function hU(DD) {
      let {
        kind: zD,
        dims: wD,
        cap: pD,
        disabled: sD,
        compact: KD,
        resize: rD
      } = DD;
      const {
        t: LD
      } = (0, Ts.E)(), {
        min: cD,
        max: gD
      } = yw(zD), RD = Math.min(pD, gD), AD = [`${RU}rxWide`, `${RU}rxTall`, `${RU}rxDeep`], UD = {
        w: String(wD[0]),
        h: String(wD[1]),
        d: String(wD[2]),
        blocks: String(jc(zD, wD))
      };
      return (0, xK.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, xK.jsx)("div", {
          className: "Baf2RxSteppers",
          children: wD.map(((DD, zD) => {
            const KD = pD => {
                const sD = [wD[0], wD[1], wD[2]];
                sD[zD] = DD + pD, rD(sD)
              },
              UD = DD >= RD;
            return (0, xK.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, xK.jsx)("button", {
                type: "button",
                "aria-label": LD(`${RU}rxSmaller`),
                disabled: sD || DD <= cD,
                onClick: () => {
                  KD(-1)
                },
                children: "\u2212"
              }), (0, xK.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [DD, (0, xK.jsx)("small", {
                  children: LD(AD[zD])
                })]
              }), (0, xK.jsx)("button", {
                type: "button",
                "aria-label": LD(`${RU}rxBigger`),
                disabled: sD || UD,
                onClick: () => {
                  KD(1)
                },
                children: UD && pD < gD ? "\ud83d\udd12" : "+"
              })]
            }, AD[zD])
          }))
        }), !KD && (0, xK.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === zD ? LD(`${RU}rxSizeLine`, {
            ...UD,
            water: String(bc(wD))
          }) : LD(`${RU}batSizeLine`, UD)
        })]
      })
    }

    function nU(DD) {
      let {
        on: zD,
        label: wD,
        disabled: pD,
        locked: sD,
        pending: KD,
        toggle: rD
      } = DD;
      return (0, xK.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": zD,
        disabled: pD,
        "aria-disabled": sD || void 0,
        className: Vs()("Baf2RxSwitch", {
          On: zD,
          Locked: sD,
          Pending: KD
        }),
        onClick: rD,
        children: [(0, xK.jsx)("span", {
          className: "Baf2RxKnob"
        }), wD]
      })
    }
    const MU = "buildAFactory2Game:",
      OU = .95;

    function JU(DD, zD) {
      return 0 !== (DD.baf2RxFlags & zD)
    }

    function EU(DD) {
      return "cryo" === DD ? HD.p : HD.t
    }

    function QU(DD) {
      var zD, wD, pD, sD, KD, rD, LD, cD, gD;
      return DD.baf2RxCryo ? {
        Af: "cryo",
        usePerS: null !== (sD = DD.baf2RxCryoUse) && void 0 !== sD ? sD : 0,
        needPerS: null !== (KD = DD.baf2RxCryoNeed) && void 0 !== KD ? KD : 0,
        inPerS: null !== (rD = DD.baf2RxCryoIn) && void 0 !== rD ? rD : 0,
        stored: null !== (LD = DD.baf2RxCryoStored) && void 0 !== LD ? LD : 0,
        makersShort: null !== (cD = DD.baf2RxMixersShort) && void 0 !== cD ? cD : 0,
        waterBeside: null !== (gD = DD.baf2RxWaterUse) && void 0 !== gD ? gD : 0,
        pct: DD.baf2RxWater
      } : {
        Af: "water",
        usePerS: null !== (zD = DD.baf2RxWaterUse) && void 0 !== zD ? zD : 0,
        needPerS: null !== (wD = DD.baf2RxWaterNeed) && void 0 !== wD ? wD : 0,
        inPerS: DD.baf2RxWaterIn,
        stored: DD.baf2RxWaterStored,
        makersShort: null !== (pD = DD.baf2RxCondensersShort) && void 0 !== pD ? pD : 0,
        waterBeside: 0,
        pct: DD.baf2RxWater
      }
    }

    function XU(DD) {
      const zD = "running" === DD.baf2RxState || "idle" === DD.baf2RxState;
      return DD.baf2RxFormed && DD.baf2RxTarget !== DD.baf2RxThrottle && zD ? VU(DD, DD.baf2RxTarget) : null
    }

    function VU(DD, zD) {
      const [wD, pD, sD, , , , KD, , rD] = DD.baf2RxStats, LD = JU(DD, fz), cD = QU(DD), gD = cD.pct / 100, {
        gen: RD,
        out: AD,
        load: UD
      } = function(DD, zD, wD, pD) {
        const sD = wD ? FL : 1,
          KD = Math.min(DD.fuelHeat * sD * Math.max(0, Math.min(1, zD)), DD.size * sD);
        return {
          gen: KD,
          out: KD,
          load: Ic(KD, DD.cooling, pD)
        }
      }({
        fuelHeat: wD,
        cooling: pD,
        size: sD
      }, zD / 100, LD, gD), fD = Gc(KD || wc(...DD.baf2RxDims)), ID = DD.baf2RxHeat, BD = Math.abs(UD - ID), GD = function(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HD.t;
        const KD = wD ? FL : 1,
          rD = Math.min(DD.fuelHeat * KD * zD / 100, DD.size * KD),
          LD = rD,
          cD = DD.fuelHeat * KD,
          gD = DD.cooling * fc(pD.pct / 100),
          RD = cD > 0 && gD < DD.size * KD ? Math.floor(100 * gD / cD) : 100,
          AD = rD * sD - pD.inPerS;
        return {
          out: LD,
          hotAbove: RD >= 100 ? null : Math.max(0, RD),
          waterSecs: pD.pct >= 100 && AD > 1e-6 ? Math.max(0, pD.stored) / AD : null
        }
      }({
        fuelHeat: wD,
        cooling: pD,
        size: sD
      }, zD, LD, {
        pct: cD.pct,
        inPerS: cD.inPerS,
        stored: cD.stored
      }, EU(cD.Af));
      return {
        pct: zD,
        out: AD,
        coolPerS: RD * EU(cD.Af),
        pelletsPerMin: rD > 0 ? AD / rD * 60 : 0,
        settle: UD,
        settleS: BD > 2 ? fD * Math.log(BD / 2) : 0,
        overheatS: UD > 100 && ID < 100 ? fD * Math.log((UD - ID) / (UD - 100)) : null,
        hotAbove: GD.hotAbove,
        coolantSecs: GD.waterSecs
      }
    }

    function PU(DD) {
      return DD.baf2RxThrottle <= 0 && "running" !== DD.baf2RxState ? 0 : VU(DD, DD.baf2RxTarget).pelletsPerMin / 60
    }

    function CU(DD, zD) {
      if (DD <= 0 || zD <= 0) return 0;
      const wD = DD / zD;
      return wD < .25 ? 1 : wD < .5 ? 2 : wD < .8 ? 3 : 4
    }

    function xU(DD, zD) {
      const wD = {};
      for (const [pD, sD] of Object.entries(zD.params)) wD[pD] = "time" === pD ? XK(DD, sD) : "amount" === pD ? dc(sD) : String(Math.round(sD));
      return DD(zD.key, wD)
    }

    function TU(DD, zD) {
      return {
        key: `${MU}${DD}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: zD
      }
    }

    function bU(DD) {
      var zD;
      const wD = JU(DD, fz),
        pD = "running" === DD.baf2RxState,
        sD = Oc(DD),
        KD = DD.baf2RxHeat;
      var rD;
      if (pD && KD > vL) return {
        key: null !== (rD = sD.fix) && void 0 !== rD ? rD : `${MU}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const LD = pD ? VU(DD, DD.baf2RxTarget).coolantSecs : null,
        cD = "cryo" === QU(DD).Af;
      if (null !== LD && LD >= 1 && LD <= 30) return TU(cD ? "rxWarnCryo" : "rxWarnWater", "bad");
      const gD = Dc(wc(...DD.baf2RxDims)).waste,
        RD = pD ? Pc(DD, gD, PU(DD)).fullInS : null;
      if (null !== RD && RD <= 120 && DD.baf2RxWaste >= .5 * gD) return TU("rxWarnWaste", "warn");
      if (null !== LD && LD >= 1) return TU(cD ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: LD
      });
      const AD = "noWater" === DD.baf2RxState && KD > vL;
      if (DD.baf2RxDamage >= 1 && !AD) return TU("rxDamagedHeals", "warn", {
        pct: DD.baf2RxDamage
      });
      if (DD.baf2RxCryoCut) return TU("rxFix_cryoCut", "warn");
      const UD = QU(DD);
      if ("noWater" === DD.baf2RxState && "cryo" === UD.Af) return TU("noWater" === DD.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const fD = sD.fix === `${MU}rxFix_scramCool` || "idle" === DD.baf2RxState && DD.baf2RxTarget <= 0;
      if (fD && DD.baf2RxFuel <= 0) return TU("rxFix_noFuel", "warn");
      if (fD && DD.baf2RxWaterIn <= 0 && (null !== (zD = DD.baf2RxCryoIn) && void 0 !== zD ? zD : 0) <= 0) return TU("rxFix_noWater", "warn");
      const ID = sD.fix === `${MU}rxFix_scramCool` ? Ec(DD) : null;
      if (null !== ID) return {
        key: ID.key,
        params: {
          amount: ID.amount
        },
        tone: "info"
      };
      if ("running" !== DD.baf2RxState && "idle" !== DD.baf2RxState && null !== sD.fix) return {
        key: sD.fix,
        params: {},
        tone: "scram" === DD.baf2RxState ? "info" : AD ? "bad" : "warn"
      };
      var BD;
      if ("idle" === DD.baf2RxState && DD.baf2RxTarget <= 0) return {
        key: null !== (BD = sD.fix) && void 0 !== BD ? BD : `${MU}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const GD = DD.baf2RxCryoStarved;
      if ("cryo" === UD.Af && GD && UD.needPerS > 0 && UD.usePerS < OU * UD.needPerS) return TU("noWater" === GD ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const hD = "cryo" === UD.Af,
        nD = UD.needPerS > 0 && UD.usePerS < OU * UD.needPerS;
      if (hD ? nD || UD.makersShort > 0 && UD.pct < 100 : UD.pct < 100) {
        const zD = hD && nD ? Math.floor(100 * UD.usePerS / UD.needPerS) : Math.min(100, UD.pct);
        if (UD.makersShort > 0) {
          return TU(`${hD?"rxCryoShortLine":"rxWaterShortLine"}${1===UD.makersShort?"One":""}${!hD&&DD.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: zD,
            count: UD.makersShort
          })
        }
        return TU(hD ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: zD
        })
      }
      const MD = function(DD) {
        const [zD, wD, pD] = DD.baf2RxStats, sD = QU(DD), KD = Bc({
          fuelHeat: zD,
          cooling: wD,
          size: pD
        }, "cryo" === sD.Af ? HD.i : 1, !0);
        return Math.max(0, KD * EU(sD.Af) - sD.inPerS)
      }(DD);
      if (wD && MD > 0) return TU("cryo" === UD.Af ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(MD)
      });
      if (KD >= Ac) return TU("rxHotLine", "warn");
      const OD = VU(DD, DD.baf2RxTarget);
      var JD;
      if (null !== OD.overheatS) return TU("rxWillOverheat", "bad", {
        pct: DD.baf2RxTarget,
        time: OD.overheatS,
        safe: null !== (JD = OD.hotAbove) && void 0 !== JD ? JD : 100
      });
      if (Math.abs(OD.settle - KD) >= 3) return TU("rxSettling", "info", {
        pct: DD.baf2RxTarget,
        heat: Math.round(OD.settle),
        time: OD.settleS
      });
      const ED = Ec(DD);
      if (null !== ED) return {
        key: ED.key,
        params: {
          amount: ED.amount
        },
        tone: "info"
      };
      const QD = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== zD && ("running" !== zD || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === DD.rods ? `${hc}rxLimitNoRods` : `${hc}rxLimit_${Rc(DD)}`
      }({
        rods: DD.baf2RxStats[3],
        ...Jc(DD)
      }, DD.baf2RxState, DD.baf2RxOut >= OU * DD.baf2RxMaxNow, !1);
      if (QD === `${MU}rxLimit_size`) {
        const [zD, , wD, pD] = DD.baf2RxStats, sD = pD > 0 && zD > 0 ? Math.ceil(wD / (zD / pD) - 1e-9) : pD, KD = DD.baf2RxDims.every((DD => DD >= yw("reactor").max));
        if (sD < pD) return TU(KD ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: sD,
          have: pD
        });
        if (KD) return TU("rxLimit_sizeMax", "info")
      }
      return null !== QD ? {
        key: QD,
        params: {},
        tone: "info"
      } : TU("rxSteady", "ok", {
        pct: DD.baf2RxTarget
      })
    }

    function jU(DD) {
      var zD;
      if (DD.melted) return TU("rxMeltedBody", "bad");
      if (-1 === DD.bad) return TU("rxFix_noRoom", "warn");
      if (DD.bad > 0) return TU(1 === DD.bad ? "rxBadOne" : "rxBad", "warn", {
        count: DD.bad
      });
      if (DD.left > 0) {
        const zD = 1 === DD.left ? "One" : "";
        return TU(DD.canFill ? `rxPlanLeft${zD}` : `rxPlanLeftNoFill${zD}`, "info", {
          count: DD.left
        })
      }
      if (0 === DD.rods) return TU("rxLimitNoRods", "warn");
      const wD = null !== (zD = DD.idle) && void 0 !== zD ? zD : 0;
      return wD > 0 ? TU(1 === wD ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: wD
      }) : TU("rxPlanReady", "ok")
    }

    function dU(DD) {
      return Math.floor(Math.max(0, DD[1] - 1) / 2)
    }

    function SU(DD) {
      if (DD >= Kc && DD < rc) {
        const zD = DD - Kc;
        return {
          key: 0 === zD ? `${MU}rxWhy_rodAlone` : 1 === zD ? `${MU}rxWhy_rodOne` : `${MU}rxWhy_rod`,
          params: {
            count: String(zD),
            heat: String(ZL * (1 + yL * zD))
          }
        }
      }
      return DD === rc ? {
        key: `${MU}rxWhy_channel`,
        params: {
          amount: String(mL)
        }
      } : DD === Lc ? {
        key: `${MU}rxWhy_deadChannel`,
        params: {}
      } : DD === cc ? {
        key: `${MU}rxWhy_graphite`,
        params: {}
      } : {
        key: `${MU}rxWhy_core`,
        params: {}
      }
    }
    const iU = "buildAFactory2Game:";

    function lU(DD, zD) {
      return 0 !== (DD.baf2RxFlags & zD)
    }

    function WU(DD) {
      let {
        status: zD,
        pending: wD,
        store: pD,
        explain: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)(), rD = lU(zD, Uz), LD = zD.baf2RxTarget, cD = zD.baf2RxThrottle, gD = function(DD) {
        return {
          press: () => {
            DD.throttlePress()
          },
          drag: zD => {
            DD.throttleDrag(zD)
          },
          release: () => {
            DD.throttleRelease()
          }
        }
      }(pD), RD = null === (AD = VU(zD, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, AD - 10),
        red: AD
      };
      var AD;
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2RxThrottle", {
          Off: rD
        }),
        onClick: () => {
          rD && sD(`${iU}rxWhy_startFirst`)
        },
        children: [(0, xK.jsx)("span", {
          className: "HideNarrow",
          children: KD(`${iU}rxThrottle`)
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, xK.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: LD,
            disabled: rD,
            style: rD ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": KD(`${iU}rxThrottle`),
            onPointerDown: () => {
              gD.press();
              const DD = () => {
                window.removeEventListener("pointerup", DD), window.removeEventListener("pointercancel", DD), gD.release()
              };
              window.addEventListener("pointerup", DD), window.addEventListener("pointercancel", DD)
            },
            onKeyUp: gD.release,
            onChange: DD => {
              gD.drag(Number(DD.target.value))
            }
          }), (0, xK.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${RD.amber}%, #ffb020 ${RD.amber}% ${RD.red}%, #ff3b30 ${RD.red}%)`
            },
            "aria-hidden": "true"
          }), (0, xK.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${cD}% + ${8*(1-cD/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, xK.jsxs)("b", {
          children: [`${LD}%`, (0, xK.jsx)("i", {
            className: Vs()("Baf2RxPendingDot", {
              On: wD
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function NU(DD) {
      let {
        status: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), pD = VU(zD, zD.baf2RxTarget), sD = QU(zD).Af, KD = wD("cryo" === sD ? `${iU}rxRateCryo` : `${iU}rxRateWater`, {
        rate: GU(pD.coolPerS)
      }), rD = wD(`${iU}rxChain`, {
        pct: String(zD.baf2RxTarget),
        out: dc(pD.out),
        heat: String(Math.round(pD.settle)),
        coolant: KD
      }), LD = null !== pD.coolantSecs ? pD.coolantSecs >= 1 ? wD("cryo" === sD ? `${iU}rxThrottleCryoOut` : `${iU}rxThrottleWaterOut`, {
        time: XK(wD, pD.coolantSecs)
      }) : wD("cryo" === sD ? `${iU}rxThrottleCryoDry` : `${iU}rxThrottleWaterDry`) : null;
      return (0, xK.jsxs)("p", {
        className: "Baf2RxChain",
        children: [rD, null !== LD ? (0, xK.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", LD]
        }) : (0, xK.jsxs)("span", {
          children: [" \xb7 ", wD(`${iU}rxChainPellets`, {
            amount: Sc(pD.pelletsPerMin)
          })]
        })]
      })
    }

    function ZU(DD) {
      let {
        view: zD,
        store: wD,
        explain: sD,
        explainOnce: KD
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), {
        status: LD
      } = zD, [cD, gD] = (0, pD.useState)(!1), RD = lU(LD, Uz), UD = lU(LD, fz), fD = !lU(LD, Gz), ID = LD.baf2RxHeat > 100;
      return (0, xK.jsxs)(xK.Fragment, {
        children: [(0, xK.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, xK.jsx)(WU, {
            status: LD,
            pending: zD.throttlePending,
            store: wD,
            explain: sD
          }), (0, xK.jsx)(nU, {
            on: UD,
            label: UD ? rD(`${iU}rxOdLeft`, {
              time: XK(rD, LD.baf2RxOdLeft)
            }) : rD(`${iU}rxOverdrive`),
            locked: fD,
            pending: 0 !== (zD.pendingFlags & fz),
            toggle: () => {
              fD ? sD(`${iU}rxOverdriveTier`, {
                amount: String(AD(13))
              }) : UD ? wD.setFlag(fz, !1) : zD.odConfirmed ? wD.setFlag(fz, !0) : gD(!0)
            }
          }), RD || zD.startGuard ? (0, xK.jsx)(Vr.v, {
            disabled: zD.busy.has("start") || zD.startGuard,
            onClick: () => {
              wD.tap("start", (() => {
                wD.setFlag(Uz, !1)
              }))
            },
            children: rD(zD.startGuard ? `${iU}rxStarting` : `${iU}rxStart`)
          }) : (0, xK.jsx)("span", {
            className: Vs()("Baf2RxScram", {
              Pulse: ID
            }),
            children: (0, xK.jsx)(Vr.R, {
              onClick: () => {
                wD.shutDown()
              },
              children: rD(`${iU}rxScram`)
            })
          })]
        }), (0, xK.jsx)(NU, {
          status: LD
        }), cD && (0, xK.jsx)(UU, {
          id: "baf2RxOdTitle",
          title: `${iU}rxOdConfirmTitle`,
          body: `${iU}rxOdConfirmBody`,
          yes: `${iU}rxOdConfirm`,
          cancel: () => {
            gD(!1)
          },
          confirm: () => {
            gD(!1), wD.tap("odConfirm", (() => {
              wD.confirmOverdrive(), wD.setFlag(fz, !0)
            })), KD(`${iU}rxWhy_overdrive`)
          }
        })]
      })
    }

    function yU(DD) {
      let {
        view: zD,
        store: wD,
        keepSize: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), {
        status: KD
      } = zD;
      return (0, xK.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, xK.jsx)(hU, {
          kind: "reactor",
          dims: zD.dims,
          cap: KD.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: DD => {
            wD.resize(DD)
          }
        }), pD ? (0, xK.jsx)(Vr.g, {
          onClick: pD,
          children: sD(`${iU}rxKeepSize`)
        }) : (0, xK.jsxs)(xK.Fragment, {
          children: [(0, xK.jsx)(nU, {
            on: zD.guide,
            label: sD(`${iU}rxGuide`),
            toggle: () => {
              wD.toggleGuide()
            }
          }), lU(KD, nz) && (0, xK.jsx)(nU, {
            on: zD.starter,
            label: sD(`${iU}rxStarter`),
            toggle: () => {
              wD.toggleStarter()
            }
          }), (0, xK.jsx)(cU, {
            status: KD,
            store: wD,
            busy: zD.busy.has("fill")
          })]
        })]
      })
    }

    function kU(DD) {
      let {
        need: zD,
        kind: wD = "reactor",
        explain: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), KD = zD.length <= 3, rD = zD.reduce(((DD, zD) => {
        let [, wD] = zD;
        return DD + wD
      }), 0);
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2RxParts", {
          Compact: !KD
        }),
        onClick: () => {
          pD("battery" === wD ? `${iU}batWhy_store` : `${iU}rxShellHint`)
        },
        children: [rD > 0 && (0, xK.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === rD ? sD(`${iU}rxBlocksOne`) : sD(`${iU}rxBlocks`, {
            blocks: String(rD)
          })
        }), 0 === zD.length ? (0, xK.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: sD("battery" === wD ? `${iU}batPartsDone` : `${iU}rxShellDone`)
        }) : Xc(zD).map((DD => {
          let [zD, wD, pD] = DD;
          const rD = function(DD) {
            const zD = Tc[DD];
            if (void 0 === zD) return null;
            const [wD, pD, sD] = Cc[zD].colour.map((DD => Math.round(255 * DD)));
            return `rgb(${wD}, ${pD}, ${sD})`
          }(zD);
          return (0, xK.jsxs)("span", {
            className: "Baf2RxChip",
            title: LK(sD, zD),
            children: [(0, xK.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === rD ? {
                visibility: "hidden"
              } : {
                background: rD
              },
              title: sD(`${iU}rxShopGhost`)
            }), (0, xK.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, xK.jsx)(ds.d, {
                itemName: zD,
                amount: 0
              })
            }), (0, xK.jsx)("span", {
              className: "Baf2RxChipName",
              children: KD ? `${wD} ${LD=LK(sD,zD),LD.replace(/^(Reactor|Battery) (?=\S)/,"")}` : wD
            }), pD >= wD ? (0, xK.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, xK.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: KD ? sD(`${iU}rxShopShort`, {
                count: String(wD - pD)
              }) : "\u2212" + (wD - pD)
            })]
          }, zD);
          var LD
        }))]
      })
    }
    const mU = "buildAFactory2Game:";

    function eU(DD) {
      var zD, wD, sD, KD, rD, LD, cD;
      let {
        store: gD,
        close: RD
      } = DD;
      const {
        t: AD
      } = (0, Ts.E)(), UD = or(), fD = fU(gD), {
        explained: ID,
        explain: BD
      } = wU("baf2RxExplained"), GD = (0, pD.useCallback)(((DD, zD) => {
        BD(AD(DD, zD))
      }), [BD, AD]), hD = null === fD || void 0 === fD ? void 0 : fD.status, nD = !0 === (null === hD || void 0 === hD ? void 0 : hD.baf2BatReadOnly), MD = DD => {
        hD && UD.send(Az(hD.baf2BatAt, DD))
      }, [OD, JD, ED] = null !== (zD = null === fD || void 0 === fD ? void 0 : fD.dims) && void 0 !== zD ? zD : [0, 0, 0], QD = dc(null !== (wD = null === fD || void 0 === fD ? void 0 : fD.bA) && void 0 !== wD ? wD : 0), XD = !0 === (null === hD || void 0 === hD ? void 0 : hD.baf2BatFormed), VD = null !== (sD = null === hD || void 0 === hD ? void 0 : hD.baf2BatStored) && void 0 !== sD ? sD : 0, PD = Math.max(1, null !== (KD = null === hD || void 0 === hD ? void 0 : hD.baf2BatIslandCap) && void 0 !== KD ? KD : 1), CD = Math.min(100, 100 * VD / PD), xD = null === hD || void 0 === hD ? void 0 : hD.baf2BatNetPerS, TD = function(DD, zD, wD) {
        return wD > 0 && zD >= wD ? "full" : void 0 !== DD && DD >= .05 ? "charging" : void 0 !== DD && DD <= -.05 && zD > 0 ? "draining" : "steady"
      }(xD, VD, null !== (rD = null === hD || void 0 === hD ? void 0 : hD.baf2BatIslandCap) && void 0 !== rD ? rD : 0), bD = null !== (LD = null === hD || void 0 === hD ? void 0 : hD.baf2BatMadePerS) && void 0 !== LD ? LD : 0, jD = null !== (cD = null === hD || void 0 === hD ? void 0 : hD.baf2BatUsedPerS) && void 0 !== cD ? cD : 0;
      let dD, SD = {},
        iD = "info";
      if (hD)
        if (XD) "charging" === TD ? (dD = `${mU}batLine_charging`, SD = {
          time: XK(AD, (PD - VD) / Math.max(.05, null !== xD && void 0 !== xD ? xD : 0))
        }, iD = "ok") : "draining" === TD ? (dD = `${mU}batLine_draining`, SD = {
          time: XK(AD, VD / Math.max(.05, -(null !== xD && void 0 !== xD ? xD : 0)))
        }, iD = "warn") : dD = "full" === TD ? `${mU}batLine_full` : VD <= 0 && jD > 0 ? `${mU}batLine_empty` : `${mU}batLine_steady`;
        else {
          var lD;
          const DD = jU({
            left: hD.baf2BatNeed.reduce(((DD, zD) => {
              let [, wD] = zD;
              return DD + wD
            }), 0),
            bad: hD.baf2BatBad,
            rods: 1,
            canFill: !0 === hD.baf2BatCanFill,
            melted: !1
          });
          dD = DD.key, SD = {
            count: String(null !== (lD = DD.params.count) && void 0 !== lD ? lD : 0)
          }, iD = DD.tone
        }
      else dD = `${mU}batLine_steady`;
      const WD = Math.max(bD, jD, 1);
      return (0, xK.jsx)(Xr.c, {
        close: RD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, xK.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, xK.jsx)(ds.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, xK.jsxs)("div", {
                children: [(0, xK.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: AD(`${mU}batTitle`)
                }), hD && (0, xK.jsxs)("p", {
                  className: Vs()("Baf2RxSubtitle", {
                    good: XD && "charging" === TD,
                    warn: XD && "draining" === TD
                  }),
                  children: [OD, "\xd7", JD, "\xd7", ED, " \xb7 ", AD(XD ? `${mU}batState_${TD}` : `${mU}rxSubPlanShort`)]
                })]
              })]
            }), (0, xK.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [hD && !nD && (0, xK.jsx)(IU, {
                kind: "battery",
                cap: XD ? QD : void 0,
                busy: null === fD || void 0 === fD ? void 0 : fD.busy.has("apart"),
                apart: () => {
                  gD.tap("apart", (() => {
                    MD("apart")
                  }))
                }
              }), (0, xK.jsx)(Vr.k, {
                onClick: RD
              })]
            })]
          }), fD && hD && (0, xK.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, xK.jsxs)("div", {
              className: Vs()("Baf2RxFlow Baf2BatFlow", {
                Plan: !XD
              }),
              children: [(0, xK.jsx)(qA, {
                kind: "Power",
                label: AD(`${mU}batMade`),
                number: XD ? `\u26a1 ${dc(bD)}/s` : "\u2014",
                note: AD(`${mU}batMadeNote`),
                share: XD ? bD / WD : void 0,
                onExplain: () => {
                  GD(`${mU}batWhy_made`)
                }
              }), (0, xK.jsx)(DU, {
                kind: "Power",
                step: XD ? CU(bD, WD) : 0,
                planned: !XD
              }), (0, xK.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  GD(`${mU}batWhy_store`)
                },
                children: [(0, xK.jsx)(zU, {
                  max: 100,
                  bands: [{
                    upTo: XD ? CD : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, xK.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, xK.jsx)("b", {
                    className: "Baf2BatStored",
                    children: XD ? AD(`${mU}batStoredOf`, {
                      amount: dc(VD),
                      cap: dc(hD.baf2BatIslandCap)
                    }) : AD(`${mU}batWillHold`, {
                      cap: QD
                    })
                  }), (0, xK.jsx)("span", {
                    children: AD(`${mU}batAdds`, {
                      cap: QD
                    })
                  }), XD && (0, xK.jsx)("small", {
                    children: AD(`${mU}batBreakNote`, {
                      cap: QD
                    })
                  })]
                })]
              }), (0, xK.jsx)(DU, {
                kind: "Power",
                step: XD ? CU(jD, WD) : 0,
                planned: !XD
              }), (0, xK.jsx)(qA, {
                kind: "Power",
                label: AD(`${mU}batUsed`),
                number: XD ? `\u26a1 ${dc(jD)}/s` : "\u2014",
                note: AD(`${mU}batUsedNote`),
                share: XD ? jD / WD : void 0,
                onExplain: () => {
                  GD(`${mU}batWhy_used`)
                }
              })]
            }), (0, xK.jsx)(pU, {
              text: AD(dD, SD),
              tone: iD,
              explained: ID
            }), nD ? (0, xK.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: AD(`${mU}rxNotYours`)
            }) : !XD && (0, xK.jsxs)(xK.Fragment, {
              children: [(0, xK.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, xK.jsx)(hU, {
                  kind: "battery",
                  dims: fD.dims,
                  cap: hD.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: DD => {
                    gD.resize(DD)
                  }
                }), (0, xK.jsx)(nU, {
                  on: fD.guide,
                  label: AD(`${mU}rxGuide`),
                  toggle: () => {
                    gD.toggleGuide()
                  }
                }), hD.baf2BatCanFill && (0, xK.jsx)(Vr.o, {
                  disabled: !Vc("battery", hD.baf2BatNeed) || fD.busy.has("fill"),
                  onClick: () => {
                    gD.tap("fill", (() => {
                      MD("fill")
                    }))
                  },
                  children: AD(`${mU}rxFill`)
                })]
              }), (0, xK.jsx)(kU, {
                need: hD.baf2BatNeed,
                kind: "battery",
                explain: GD
              })]
            })]
          })]
        })
      })
    }
    const oU = "buildAFactory2Game:",
      aU = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function uU(DD, zD) {
      return DD === sc ? null : zD ? "#4a4440" : DD < rc ? aU[DD - Kc] : DD === rc ? "#3fd0f0" : DD === Lc ? "#2c3e4c" : "#55585e"
    }

    function vU(DD) {
      let {
        inner: zD,
        looks: wD,
        layer: pD,
        setLayer: sD,
        glow: KD,
        melted: rD,
        explain: LD
      } = DD;
      const {
        t: cD
      } = (0, Ts.E)(), [gD, RD, AD] = zD, UD = Math.max(0, Math.min(RD - 1, pD)), fD = [];
      for (let BD = 0; BD < AD; BD++)
        for (let DD = 0; DD < gD; DD++) {
          var ID;
          const zD = null !== (ID = wD[(UD * AD + BD) * gD + DD]) && void 0 !== ID ? ID : sc,
            pD = uU(zD, rD),
            sD = zD >= Kc && zD < rc;
          fD.push(null === pD ? (0, xK.jsx)("circle", {
            cx: DD + .5,
            cy: BD + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${DD},${BD}`) : (0, xK.jsx)("rect", {
            x: DD + .06,
            y: BD + .06,
            width: .88,
            height: .88,
            fill: pD,
            opacity: sD && !rD ? .5 + .5 * KD : 1,
            onClick: DD => {
              DD.stopPropagation();
              const wD = SU(zD);
              LD(wD.key, wD.params)
            }
          }, `${DD},${BD}`))
        }
      return (0, xK.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, xK.jsx)("svg", {
          className: Vs()("Baf2RxMapGrid", {
            Melted: rD
          }),
          viewBox: `0 0 ${Math.max(1,gD)} ${Math.max(1,AD)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": cD(`${oU}rxWhy_core`),
          onClick: () => {
            LD(`${oU}rxWhy_core`, {})
          },
          children: fD
        }), RD > 1 && (0, xK.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, xK.jsx)("button", {
            type: "button",
            "aria-label": cD(`${oU}rxLayerDown`),
            disabled: UD <= 0,
            onClick: () => {
              sD(UD - 1)
            },
            children: "\u25bc"
          }), (0, xK.jsxs)("span", {
            children: [(0, xK.jsx)("span", {
              className: "HideNarrow",
              children: cD(`${oU}rxLayer`, {
                n: String(UD + 1),
                of: String(RD)
              })
            }), (0, xK.jsx)("span", {
              className: "ShowNarrow",
              children: cD(`${oU}rxLayerShort`, {
                n: String(UD + 1),
                of: String(RD)
              })
            })]
          }), (0, xK.jsx)("button", {
            type: "button",
            "aria-label": cD(`${oU}rxLayerUp`),
            disabled: UD >= RD - 1,
            onClick: () => {
              sD(UD + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const tU = "buildAFactory2Game:",
      FU = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: tL,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Mc,
        kind: "red"
      }],
      YU = [50, tL, 100];

    function HU(DD) {
      let {
        stats: zD,
        t: wD,
        explain: pD
      } = DD;
      const sD = Rc(zD),
        KD = Math.max(1, zD.fuelHeat, zD.cooling, zD.size),
        rD = [
          ["fuel", `${tU}rxBarRods`, zD.fuelHeat],
          ["cooling", `${tU}rxBarCooling`, zD.cooling],
          ["size", `${tU}rxBarSize`, zD.size]
        ];
      return (0, xK.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          pD(`${tU}rxWhy_bars`)
        },
        children: [(0, xK.jsx)("span", {
          className: "Baf2RxMostLine",
          children: wD(`${tU}rxMost`, {
            amount: dc(Math.min(zD.fuelHeat, zD.cooling, zD.size))
          })
        }), (0, xK.jsx)("span", {
          className: "Baf2RxMostBars",
          children: rD.map((DD => {
            let [zD, pD, rD] = DD;
            return (0, xK.jsxs)("span", {
              className: Vs()("Baf2RxMostBar", zD, {
                Low: zD === sD
              }),
              children: [(0, xK.jsx)("small", {
                children: wD(pD)
              }), (0, xK.jsx)("i", {
                children: (0, xK.jsx)("b", {
                  style: {
                    width: 100 * rD / KD + "%"
                  }
                })
              })]
            }, zD)
          }))
        })]
      })
    }

    function qU(DD) {
      var zD;
      let {
        view: wD,
        heat: sD,
        settle: KD,
        settleLine: rD,
        settleBad: LD,
        explain: cD
      } = DD;
      const {
        t: gD
      } = (0, Ts.E)(), {
        status: RD
      } = wD, AD = RD.baf2RxAt.join(","), [UD, fD] = (0, pD.useState)((() => dU(wD.inner)));
      (0, pD.useEffect)((() => {
        fD(dU(wD.inner))
      }), [AD, wD.inner[1]]);
      const ID = null !== (zD = wD.plan) && void 0 !== zD ? zD : Jc(RD),
        BD = wD.plan ? wD.plan.powerPerUnit : RD.baf2RxStats[8],
        GD = null === sD ? null : "alarm" === (hD = nc(RD)) ? "red" : "hot" === hD ? "hot" : "warm" === hD ? "warm" : "cold";
      var hD;
      const nD = !RD.baf2RxFormed && function(DD, zD) {
          return 0 !== (DD.baf2RxFlags & zD)
        }(RD, Iz),
        MD = RD.baf2RxDamage,
        OD = RD.baf2RxDamageTrend;
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2RxCore", null !== GD && void 0 !== GD ? GD : "plan"),
        children: [(0, xK.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, xK.jsx)(vU, {
            inner: wD.inner,
            looks: wD.looks,
            layer: UD,
            setLayer: fD,
            glow: RD.baf2RxFormed ? RD.baf2RxThrottle / 100 : 1,
            melted: nD,
            explain: cD
          }), (0, xK.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              cD(`${tU}rxWhy_heat`)
            },
            children: [null !== sD ? (0, xK.jsxs)(xK.Fragment, {
              children: [(0, xK.jsx)("b", {
                children: gD(`${tU}rxHeatPct`, {
                  pct: String(sD)
                })
              }), (0, xK.jsx)("span", {
                className: Vs()("Baf2RxBand", GD),
                children: gD(`${tU}rxBand_${GD}`)
              })]
            }) : (0, xK.jsx)("b", {
              children: gD(`${tU}rxHeat`)
            }), null !== rD && (0, xK.jsx)("span", {
              className: Vs()("Baf2RxSettle", {
                Bad: LD
              }),
              children: rD
            }), MD >= 1 && (0, xK.jsxs)("span", {
              className: Vs()("Baf2RxDamage", OD),
              children: [gD(`${tU}rxDamageLine`, {
                pct: String(MD)
              }), " \xb7 ", gD(`${tU}rxDamage_${OD}`), (0, xK.jsx)("i", {
                children: (0, xK.jsx)("b", {
                  style: {
                    width: `${Math.min(100,MD)}%`
                  }
                })
              })]
            })]
          }), (0, xK.jsx)(zU, {
            max: Mc,
            bands: FU,
            ticks: YU,
            now: sD,
            settle: KD,
            settleTone: LD ? "bad" : null,
            onExplain: () => {
              cD(`${tU}rxWhy_heat`)
            }
          })]
        }), (0, xK.jsx)(HU, {
          stats: ID,
          t: gD,
          explain: cD
        }), BD > 0 && (0, xK.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            cD(`${tU}rxWhy_perPellet`)
          },
          children: gD(`${tU}rxPerPellet`, {
            amount: dc(BD)
          })
        })]
      })
    }

    function Df(DD, zD) {
      var wD;
      if (!DD.baf2RxStore) return {
        note: zD(`${tU}rxUpTo`, {
          amount: dc(DD.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [pD, sD] = DD.baf2RxStore, KD = sD > 0 ? pD / sD : 0, rD = String(Math.floor(100 * KD)), LD = null !== (wD = DD.baf2RxStoreNetPerS) && void 0 !== wD ? wD : 0, cD = function(DD) {
        var zD, wD;
        const [pD, sD] = null !== (zD = DD.baf2RxStore) && void 0 !== zD ? zD : [0, 0], KD = null !== (wD = DD.baf2RxStoreNetPerS) && void 0 !== wD ? wD : 0;
        return sD > 0 && pD >= sD - 1 ? "running" === DD.baf2RxState ? `${MU}rxStoreFull` : `${MU}rxStoreFullOnly` : KD > .05 ? `${MU}rxStoreLine` : KD < -.05 ? "running" === DD.baf2RxState ? `${MU}rxStoreUsesMore` : `${MU}rxStoreDraining` : `${MU}rxStorePct`
      }(DD);
      return {
        note: zD(cD, cD === `${tU}rxStoreLine` ? {
          pct: rD,
          time: XK(zD, (sD - pD) / LD)
        } : {
          pct: rD
        }),
        share: KD
      }
    }

    function zf(DD) {
      let {
        view: zD,
        explain: wD,
        preview: pD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), {
        status: KD
      } = zD, rD = Dc(wc(...zD.dims)), LD = PU(KD), cD = Math.min(Math.round(KD.baf2RxFuel), rD.fuel), gD = "running" === KD.baf2RxState, RD = gD ? CU(KD.baf2RxOut, KD.baf2RxMaxNow) : 0, AD = function(DD, zD, wD) {
        const pD = QU(DD),
          sD = "cryo" === pD.Af,
          KD = wD ? wD.coolantSecs : pD.pct >= 100 && DD.baf2RxOut >= 1 ? VU(DD, DD.baf2RxThrottle).coolantSecs : null;
        let rD, LD = !1;
        if (pD.pct < 100) {
          const wD = 1 === pD.makersShort,
            KD = !sD && DD.baf2RxCryoOpen ? "OrCryo" : "";
          rD = pD.makersShort > 0 ? zD(sD ? `${tU}rxCryoAddMixer${wD?"":"s"}` : `${tU}rxWaterAddCondenser${wD?"":"s"}${KD}`, {
            count: String(pD.makersShort)
          }) : zD(`${tU}rxWaterNeeds`, {
            rate: GU(pD.needPerS)
          })
        } else if (null !== KD) rD = zD(`${tU}rxWaterRunsOut`, {
          time: XK(zD, KD)
        });
        else if (pD.waterBeside > 0) rD = zD(`${tU}rxCryoPlusWater`, {
          rate: GU(pD.waterBeside)
        });
        else {
          const DD = function(DD) {
            return DD.inPerS <= 0 ? "rxWaterNoSupply" : DD.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(pD);
          LD = "rxWaterNoSupply" === DD, rD = zD(`${tU}${DD}`, {
            amount: dc(pD.stored)
          })
        }
        return {
          kind: sD ? "Cryo" : "Water",
          label: zD(sD ? `${tU}rxCryo` : `${tU}rxWater`),
          number: `${GU(pD.usePerS)}/s`,
          preview: wD ? `${GU(wD.coolPerS)}/s` : null,
          note: rD,
          tone: "noWater" === DD.baf2RxState ? "danger" : LD ? "warn" : (cD = pD.pct, gD = KD, cD < 100 ? "danger" : null === gD ? null : gD < 300 ? "danger" : "warn"),
          share: pD.pct / 100,
          why: sD ? `${tU}rxWhy_cryo` : `${tU}rxWhy_water`,
          short: pD.pct < 100
        };
        var cD, gD
      }(KD, sD, pD), UD = Pc(KD, rD.waste, LD), fD = Df(KD, sD), ID = VU(KD, KD.baf2RxTarget), BD = gD && Math.abs(ID.settle - KD.baf2RxHeat) >= 3, GD = pD ? pD.pelletsPerMin / 60 : null;
      return (0, xK.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, xK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xK.jsx)(qA, {
            kind: "Fuel",
            label: sD(`${tU}rxFuel`),
            number: String(cD),
            preview: null !== GD && GD > 0 && KD.baf2RxFuel > 0 ? XK(sD, KD.baf2RxFuel / GD) : null,
            note: KD.baf2RxFuel <= 0 ? sD(`${tU}rxFuelEmpty`) : LD > 0 ? sD(`${tU}rxFuelLeft`, {
              time: XK(sD, KD.baf2RxFuel / LD)
            }) : sD(1 === cD ? `${tU}rxFuelPellet` : `${tU}rxFuelPellets`),
            tone: "noFuel" === KD.baf2RxState ? "danger" : KD.baf2RxFuel < 2 ? "warn" : null,
            share: KD.baf2RxFuel / rD.fuel,
            onExplain: () => {
              wD(`${tU}rxWhy_fuel`)
            }
          }), (0, xK.jsx)(qA, {
            kind: AD.kind,
            label: AD.label,
            number: AD.number,
            preview: AD.preview,
            note: AD.note,
            tone: AD.tone,
            share: AD.share,
            onExplain: () => {
              wD(AD.why)
            }
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xK.jsx)(DU, {
            kind: "Fuel",
            step: RD,
            short: "noFuel" === KD.baf2RxState
          }), (0, xK.jsx)(DU, {
            kind: AD.kind,
            step: RD,
            short: AD.short || "noWater" === KD.baf2RxState
          })]
        }), (0, xK.jsx)(qU, {
          view: zD,
          heat: KD.baf2RxHeat,
          settle: Math.min(Mc, ID.settle),
          settleLine: BD ? sD(`${tU}rxHeatSettles`, {
            pct: String(Math.round(ID.settle)),
            time: XK(sD, ID.settleS)
          }) : null,
          settleBad: ID.settle > 100,
          explain: wD
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xK.jsx)(DU, {
            kind: "Power",
            step: RD
          }), (0, xK.jsx)(DU, {
            kind: "Waste",
            step: gD && KD.baf2RxFuel - KD.baf2RxPu > 0 ? RD : 0,
            short: UD.full
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xK.jsx)(qA, {
            kind: "Power",
            label: sD(`${tU}rxPowerOut`),
            number: `\u26a1 ${dc(KD.baf2RxOut)}/s`,
            preview: pD ? dc(pD.out) : null,
            note: fD.note,
            share: fD.share,
            onExplain: () => {
              wD(`${tU}rxWhy_power`)
            }
          }), (0, xK.jsx)(qA, {
            kind: "Waste",
            label: sD(`${tU}rxWaste`),
            number: `${Math.floor(KD.baf2RxWaste)}/${rD.waste}`,
            note: UD.full ? sD(`${tU}rxWasteFull`) : null !== UD.fullInS ? sD(`${tU}rxWasteFullIn`, {
              time: XK(sD, UD.fullInS)
            }) : sD(`${tU}rxWasteSpent`),
            tone: "wasteFull" === KD.baf2RxState ? "danger" : UD.full ? "warn" : null,
            share: KD.baf2RxWaste / rD.waste,
            onExplain: () => {
              wD(`${tU}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function wf(DD) {
      let {
        view: zD,
        explain: wD
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = zD.plan;
      if (!sD) return null;
      const KD = sD.fuelHeat <= 0 ? null : sD.cooling > 0 ? Math.min(Mc, 100 * sD.fuelHeat / sD.cooling) : Mc,
        rD = pD(`${tU}rxPlanAtFull`);
      return (0, xK.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, xK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xK.jsx)(qA, {
            kind: "Fuel",
            label: pD(`${tU}rxFuel`),
            number: pD(`${tU}rxPlanPerMin`, {
              amount: Sc(sD.pelletsPerMin)
            }),
            note: pD(`${tU}rxPlanPellets`),
            onExplain: () => {
              wD(`${tU}rxWhy_fuel`)
            }
          }), (0, xK.jsx)(qA, {
            kind: "Water",
            label: pD(`${tU}rxWater`),
            number: `${GU(sD.waterPerS)}/s`,
            note: zD.status.baf2RxCryoOpen && sD.waterPerS > 0 ? pD(`${tU}rxPlanOrCryo`, {
              rate: GU(Bc(sD, HD.i) * HD.p)
            }) : rD,
            onExplain: () => {
              wD(`${tU}rxWhy_water`)
            }
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xK.jsx)(DU, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, xK.jsx)(DU, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, xK.jsx)(qU, {
          view: zD,
          heat: null,
          settle: KD,
          settleLine: null === KD ? null : pD(`${tU}rxPlanHeat`, {
            pct: String(Math.round(KD))
          }),
          settleBad: null !== KD && KD > 100,
          explain: wD
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, xK.jsx)(DU, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, xK.jsx)(DU, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, xK.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, xK.jsx)(qA, {
            kind: "Power",
            label: pD(`${tU}rxPowerOut`),
            number: `\u26a1 ${dc(sD.max)}/s`,
            note: rD,
            onExplain: () => {
              wD(`${tU}rxWhy_power`)
            }
          }), (0, xK.jsx)(qA, {
            kind: "Waste",
            label: pD(`${tU}rxWaste`),
            number: pD(`${tU}rxPlanPerMin`, {
              amount: Sc(sD.pelletsPerMin)
            }),
            note: pD(`${tU}rxWasteSpent`),
            onExplain: () => {
              wD(`${tU}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const pf = "buildAFactory2Game:",
      sf = {
        key: `${pf}rxWaiting`,
        params: {},
        tone: "info"
      };

    function Kf(DD, zD) {
      return 0 !== (DD.baf2RxFlags & zD)
    }

    function rf(DD) {
      var zD, wD;
      let {
        store: sD,
        close: KD
      } = DD;
      const {
        t: rD
      } = (0, Ts.E)(), LD = fU(sD), {
        explained: cD,
        hinting: gD,
        explain: RD,
        explainOnce: AD
      } = wU("baf2RxExplained"), UD = (0, pD.useCallback)(((DD, zD) => {
        RD(rD(DD, zD))
      }), [RD, rD]), fD = (0, pD.useCallback)(((DD, zD) => {
        AD(DD, rD(DD, zD))
      }), [AD, rD]), [ID, BD] = (0, pD.useState)(!1), [GD, hD] = (0, pD.useState)(!1), nD = null === LD || void 0 === LD ? void 0 : LD.status, MD = null === nD || void 0 === nD ? void 0 : nD.baf2RxAt.join(","), OD = !0 === (null === nD || void 0 === nD ? void 0 : nD.baf2RxFormed);
      (0, pD.useEffect)((() => {
        hD(!1), BD(!1)
      }), [MD, OD]), (0, pD.useEffect)((() => (sD.opened(), () => {
        sD.closed()
      })), [sD]);
      const JD = void 0 !== nD && Kf(nD, hz),
        ED = nD ? OD ? nc(nD) : null !== LD && void 0 !== LD && LD.plan ? function(DD, zD) {
          if (DD <= 0) return "off";
          if (zD <= 0) return "alarm";
          const wD = 100 * DD / zD;
          return wD < 50 ? "calm" : wD < Ac ? "warm" : wD <= 100 ? "hot" : "alarm"
        }(LD.plan.fuelHeat, LD.plan.cooling) : "off" : "off",
        QD = nD ? Oc(nD) : null,
        XD = LD ? LD.waiting ? sf : OD ? bU(LD.status) : function(DD) {
          var zD, wD;
          const {
            status: pD
          } = DD;
          return jU({
            left: pD.baf2RxNeed.reduce(((DD, zD) => {
              let [, wD] = zD;
              return DD + wD
            }), 0),
            bad: pD.baf2RxBad,
            rods: null !== (zD = null === (wD = DD.plan) || void 0 === wD ? void 0 : wD.rods) && void 0 !== zD ? zD : 0,
            canFill: Kf(pD, Bz),
            melted: Kf(pD, Iz),
            idle: DD.looks.reduce(((DD, zD) => DD + (zD === Lc ? 1 : 0)), 0)
          })
        }(LD) : null,
        VD = gD && null !== XD && ("ok" === XD.tone || "info" === XD.tone),
        PD = nD ? function(DD) {
          const zD = 0 !== (DD.baf2RxFlags & Uz),
            wD = DD.baf2RxHeat < YL;
          return 0 !== (DD.baf2RxFlags & Iz) || wD && (zD || !DD.baf2RxFormed) ? null : DD.baf2RxFormed && !zD ? {
            key: `${hc}rxApartScram`,
            params: {}
          } : {
            key: `${hc}rxApartCooling`,
            params: {
              pct: String(YL)
            }
          }
        }(nD) : null,
        [CD, xD, TD] = null !== (zD = null === LD || void 0 === LD ? void 0 : LD.dims) && void 0 !== zD ? zD : [0, 0, 0],
        bD = `${CD}\xd7${xD}\xd7${TD}`;
      return (0, xK.jsx)(Xr.c, {
        close: KD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, xK.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, xK.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, xK.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, xK.jsx)(BU, {
                mood: ED
              }), (0, xK.jsxs)("div", {
                children: [(0, xK.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: rD(`${pf}rxTitle`)
                }), LD && (0, xK.jsxs)("p", {
                  className: Vs()("Baf2RxSubtitle", OD && (null === QD || void 0 === QD ? void 0 : QD.tone)),
                  children: [OD && !JD ? (0, xK.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": rD(`${pf}rxChangeSize`),
                    onClick: () => {
                      if (!nD) return;
                      const DD = Kf(nD, Uz);
                      var zD;
                      (zD = {
                        scram: DD,
                        heat: nD.baf2RxHeat
                      }).scram && zD.heat < YL ? BD(!0) : UD(DD ? `${pf}rxResizeCooling` : `${pf}rxResizeHot`, {
                        pct: String(YL)
                      })
                    },
                    children: [bD, " \u270e"]
                  }) : bD, " \xb7 ", rD(OD ? null !== (wD = null === QD || void 0 === QD ? void 0 : QD.label) && void 0 !== wD ? wD : `${pf}rxState_running` : `${pf}rxSubPlanShort`)]
                })]
              })]
            }), (0, xK.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [LD && !JD && (0, xK.jsx)(IU, {
                kind: "reactor",
                busy: LD.busy.has("apart"),
                whyNot: PD ? () => {
                  UD(PD.key, PD.params)
                } : null,
                apart: () => {
                  sD.tap("apart", (() => {
                    sD.send("apart")
                  }))
                }
              }), (0, xK.jsx)(Vr.k, {
                onClick: KD
              })]
            })]
          }), LD && XD && (0, xK.jsxs)("div", {
            className: "Baf2RxBody",
            children: [OD ? (0, xK.jsx)(zf, {
              view: LD,
              explain: UD,
              preview: XU(LD.status)
            }) : (0, xK.jsx)(wf, {
              view: LD,
              explain: UD
            }), (0, xK.jsx)(pU, {
              text: VD ? `${xU(rD,XD)} ${rD(`${pf}rxTapHint`)}` : xU(rD, XD),
              tone: XD.tone,
              explained: cD
            }), JD ? (0, xK.jsxs)(xK.Fragment, {
              children: [(0, xK.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: rD(`${pf}rxNotYours`)
              }), (0, xK.jsx)(gU, {
                status: LD.status,
                store: sD,
                readOnly: !0
              })]
            }) : OD && !GD ? (0, xK.jsxs)(xK.Fragment, {
              children: [(0, xK.jsx)(ZU, {
                view: LD,
                store: sD,
                explain: UD,
                explainOnce: fD
              }), void 0 !== LD.status.baf2RxLayout && rU(LD.status) && (0, xK.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, xK.jsx)(gU, {
                  status: LD.status,
                  store: sD,
                  readOnly: !1,
                  bare: !0
                }), (0, xK.jsx)(cU, {
                  status: LD.status,
                  store: sD,
                  busy: LD.busy.has("fill")
                })]
              })]
            }) : (0, xK.jsxs)(xK.Fragment, {
              children: [(0, xK.jsx)(yU, {
                view: LD,
                store: sD,
                keepSize: OD ? () => {
                  hD(!1)
                } : void 0
              }), Qc(LD.dims, LD.status.baf2RxDims) && (0, xK.jsx)(kU, {
                need: LD.status.baf2RxNeed,
                explain: UD
              }), (0, xK.jsx)(gU, {
                status: LD.status,
                store: sD,
                readOnly: !1
              })]
            }), ID && (0, xK.jsx)(UU, {
              id: "baf2ResizeTitle",
              title: `${pf}rxResizeConfirmTitle`,
              body: `${pf}rxResizeConfirmBody`,
              yes: `${pf}rxChangeSize`,
              cancel: () => {
                BD(!1)
              },
              confirm: () => {
                BD(!1), hD(!0)
              }
            })]
          })]
        })
      })
    }
    class Lf {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(DD) {
        this.view = DD;
        for (const zD of this.listeners) zD()
      }
      get() {
        return this.view
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
    }

    function gf(DD) {
      let {
        commands: zD,
        store: wD,
        power: sD,
        water: KD,
        reactor: rD,
        battery: LD,
        collider: cD,
        terminal: gD,
        quests: RD,
        tutorial: AD,
        close: UD,
        leave: fD,
        askIslands: ID,
        showCore: BD,
        openSocial: GD
      } = DD;
      const {
        userContext: hD
      } = (0, WL.c)(), nD = lL.featureFlags.useSocialFeatures && hD.isLoggedIn(), [MD, OD] = (0, pD.useState)((() => wD.get()));
      (0, pD.useEffect)((() => wD.subscribe((() => {
        OD(wD.get())
      }))), [wD]);
      const JD = "islands" === (null === MD || void 0 === MD ? void 0 : MD.kind) ? MD.backToCore : void 0;
      return (0, xK.jsxs)(er.Provider, {
        value: zD,
        children: ["core" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(nA, {
          view: MD.core,
          close: UD,
          askIslands: ID
        }), "dropMap" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(EA, {
          message: MD.dropMap,
          quests: RD,
          close: UD,
          leave: fD
        }), "islands" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(yA, {
          message: MD.islands,
          arrivedAtMs: MD.arrivedAtMs,
          close: JD ? () => {
            BD(JD)
          } : UD,
          leave: fD,
          openSocial: nD ? GD : null
        }), "quests" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(WR, {
          store: RD,
          tutorial: AD,
          close: UD
        }), "transfer" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(KR, {
          message: MD.transfer,
          arrivedAtMs: MD.arrivedAtMs,
          close: UD,
          leave: fD
        }), "power" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(Sr, {
          store: sD,
          close: UD
        }), "water" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(nL, {
          store: KD,
          close: UD
        }), "reactor" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(rf, {
          store: rD,
          close: UD
        }), "battery" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(eU, {
          store: LD,
          close: UD
        }), "collider" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(Mg, {
          store: cD,
          close: UD
        }), "terminal" === (null === MD || void 0 === MD ? void 0 : MD.kind) && (0, xK.jsx)(HA, {
          store: gD,
          close: UD,
          send: DD => {
            zD.send(DD)
          }
        })]
      })
    }
    var Rf = wD(38470);

    function Af(DD, zD) {
      return DD.distSq - zD.distSq
    }
    class Uf {
      constructor() {
        this.list = [], this.pool = []
      }
      add(DD, zD, wD, pD) {
        let sD = this.pool[this.list.length];
        sD || (sD = {
          x: 0,
          y: 0,
          distSq: 0,
          element: zD,
          liftRem: wD,
          dot: pD
        }, this.pool.push(sD)), sD.x = DD.x, sD.y = DD.y, sD.distSq = DD.distSq, sD.element = zD, sD.liftRem = wD, sD.dot = pD, this.list.push(sD)
      }
    }
    class ff {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = DD, this.sizes = new WeakMap, this.observer = new ResizeObserver((DD => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const zD of DD) {
            const DD = zD.borderBoxSize[0];
            "dot" !== zD.target.dataset.crowded && 0 !== DD.inlineSize && 0 !== DD.blockSize && this.sizes.set(zD.target, {
              width: DD.inlineSize,
              height: DD.blockSize
            })
          }
        })), this.remPx = 16, this.Nf = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.GJ = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.GJ)
      }
      observe(DD) {
        this.observer.observe(DD)
      }
      unobserve(DD) {
        this.observer.unobserve(DD)
      }
      run(DD) {
        const zD = DD.list;
        zD.sort(Af);
        const wD = this.pxPerVw,
          pD = this.pxPerVh;
        this.Nf.length = 0, this.hud && this.Nf.push(...this.hud.boxes(performance.now()));
        for (const KD of zD) {
          var sD;
          const DD = this.sizes.get(KD.element);
          let zD = "no";
          if (DD && DD.width > 0) {
            const sD = KD.x * wD,
              rD = KD.y * pD - KD.liftRem * this.remPx;
            this.fit(sD, rD, DD.width, DD.height) || (zD = KD.dot && this.fit(sD, rD, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (sD = KD.element.dataset.crowded) && void 0 !== sD ? sD : "no") !== zD && ("no" === zD ? delete KD.element.dataset.crowded : KD.element.dataset.crowded = zD), "hidden" !== zD && (0, Rf.c)(KD.element, KD.x, KD.y)
        }
        zD.length = 0
      }
      fit(DD, zD, wD, pD) {
        const sD = DD - wD / 2,
          KD = DD + wD / 2,
          rD = zD - pD,
          LD = this.Nf;
        for (let cD = 0; cD < LD.length; cD += 4)
          if (sD < LD[cD + 1] - 2 && KD > LD[cD] + 2 && rD < LD[cD + 3] - 2 && zD > LD[cD + 2] + 2) return !1;
        return LD.push(sD, KD, rD, zD), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.GJ)
      }
    }
    const If = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class Bf {
      constructor() {
        this.cards = If.map((DD => document.getElementsByClassName(DD))), this.watched = If.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(DD) {
        DD - this.refreshedAt > 1e3 && (this.refreshedAt = DD, this.stale = !0);
        for (let wD = 0; wD < this.cards.length; wD++) {
          var zD;
          const DD = null !== (zD = this.cards[wD][0]) && void 0 !== zD ? zD : null;
          DD !== this.watched[wD] && this.watch(wD, DD)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let DD = 0; DD < this.watched.length; DD++) this.watch(DD, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const DD = this.list;
        DD.length = 0;
        for (const zD of this.watched) {
          if (!zD || zD.closest(".NoRoom")) continue;
          const wD = zD.getBoundingClientRect();
          let pD = wD.top,
            sD = wD.bottom;
          if (zD === this.watched[0] && this.hud) {
            const DD = this.hud.getBoundingClientRect();
            pD = Math.max(pD, DD.top), sD = Math.min(sD, DD.bottom)
          }
          wD.width > 0 && sD > pD && DD.push(wD.left, wD.right, pD, sD)
        }
      }
      watch(DD, zD) {
        const wD = this.watched[DD];
        var pD, sD;
        (wD && this.sizes.unobserve(wD), this.watched[DD] = zD, this.stale = !0, zD && this.sizes.observe(zD), 0 === DD) && (null === (pD = this.hud) || void 0 === pD || pD.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (sD = null === zD || void 0 === zD ? void 0 : zD.closest(".Baf2QuestHud")) && void 0 !== sD ? sD : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const Gf = [0, 0, 0],
      hf = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function nf(DD, zD, wD, pD, sD, KD) {
      let [rD, LD, cD] = pD;
      const gD = (rD + .5 - wD[0]) ** 2 + (LD - wD[1]) ** 2 + (cD + .5 - wD[2]) ** 2;
      let RD = null;
      gD <= KD ** 2 && (Gf[0] = rD + .5, Gf[1] = LD + sD, Gf[2] = cD + .5, RD = zD.projectWorldPosToViewport(Gf));
      const AD = null !== RD && RD.x > -5 && RD.x < 105 && RD.y > -5 && RD.y < 105;
      return (0, Rf.d)(DD, !AD), AD ? (hf.x = RD.x, hf.y = RD.y, hf.distSq = gD, hf) : null
    }
    class Mf {
      constructor(DD) {
        this.onElement = DD, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(DD) {
        const zD = [];
        for (let wD = 0; wD + 4 < DD.length; wD += 5) {
          const pD = [DD[wD], DD[wD + 1], DD[wD + 2]];
          zD.push({
            key: pD.join(","),
            pos: pD,
            status: Ks[DD[wD + 3]],
            kind: Cz[DD[wD + 4]]
          })
        }
        this.markers = zD, this.keys = new Set(zD.map((DD => {
          let {
            key: zD
          } = DD;
          return zD
        }))), this.notify()
      }
      covers(DD) {
        return this.keys.has(DD)
      }
      get() {
        return this.markers
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      bind(DD) {
        let zD = this.refs.get(DD);
        return zD || (zD = zD => {
          const wD = this.elements.get(DD);
          var pD, sD;
          wD && (null === (pD = this.onElement) || void 0 === pD || pD.call(this, wD, !1));
          zD ? (this.elements.set(DD, zD), null === (sD = this.onElement) || void 0 === sD || sD.call(this, zD, !0)) : (this.elements.delete(DD), this.refs.delete(DD))
        }, this.refs.set(DD, zD)), zD
      }
      onAfterRender(DD, zD, wD) {
        for (const pD of this.markers) {
          const sD = this.elements.get(pD.key);
          if (!sD) continue;
          const KD = nf(sD, DD, zD, pD.pos, 1.05, 24);
          KD && wD.add(KD, sD, .45, !0)
        }
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
    }
    const Of = {
      noFuel: "Coal",
      outputFull: "Chest",
      noDeposit: "Iron Deposit",
      noPower: "Generator",
      noTree: "Maple Log",
      noSky: "Sky Tap",
      noCrops: "Wheat Seeds",
      noWater: "Fluid Tank",
      noOutlet: "Fluid Pipe"
    };
    const Jf = (0, pD.memo)((function(DD) {
        let {
          status: zD,
          kind: wD,
          bindRef: pD
        } = DD;
        const {
          t: sD
        } = (0, Ts.E)(), KD = function(DD, zD) {
          var wD;
          if ("noFuel" === DD) {
            var pD, sD;
            const DD = null === (pD = Sz[zD]) || void 0 === pD || null === (sD = pD.fuels) || void 0 === sD ? void 0 : sD.find((DD => pw.includes(DD)));
            return null !== DD && void 0 !== DD ? DD : Of.noFuel
          }
          return void 0 !== (null === (wD = Sz[zD]) || void 0 === wD ? void 0 : wD.cryoMade) ? "noOutlet" === DD ? "Fluid Pipe" : "noInput" === DD ? "Biomass" : Of[DD] : Of[DD]
        }(zD, wD);
        return (0, xK.jsxs)("div", {
          className: Vs()("Baf2StallMarker", zD),
          ref: pD,
          hidden: !0,
          children: [KD && (0, xK.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, xK.jsx)(ds.d, {
              itemName: KD,
              amount: 0
            })
          }), (0, xK.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === zD ? "?" : "!"
          }), (0, xK.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: sD(`buildAFactory2Game:stallTag_${zD}`)
          })]
        })
      })),
      Ef = (0, pD.memo)((function(DD) {
        let {
          controller: zD
        } = DD;
        const [wD, sD] = (0, pD.useState)((() => zD.get()));
        return (0, pD.useEffect)((() => (sD(zD.get()), zD.subscribe((() => {
          sD(zD.get())
        })))), [zD]), (0, xK.jsx)("div", {
          className: "Baf2StallMarkers",
          children: wD.map((DD => (0, xK.jsx)(Jf, {
            status: DD.status,
            kind: DD.kind,
            bindRef: zD.bind(DD.key)
          }, DD.key)))
        })
      })),
      Qf = Gw.k + 150;
    class Xf {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(DD, zD) {
        const wD = zD - DD;
        null === this.offset || wD < this.offset ? this.offset = wD : this.offset = Math.min(wD, this.offset + .02 * (zD - this.sampledAt)), this.sampledAt = zD
      }
      toLocal(DD) {
        var zD;
        return DD + (null !== (zD = this.offset) && void 0 !== zD ? zD : 0) + Qf
      }
    }
    var Vf = wD(38477);
    const Pf = 15 * Math.PI / 180,
      Cf = Math.SQRT2,
      xf = [4, 2];

    function Tf(DD, zD) {
      const wD = [1 / 0, 1 / 0, 1 / 0],
        pD = [-1 / 0, -1 / 0, -1 / 0];
      for (const cD of DD)
        for (let DD = 0; DD < 3; DD++) wD[DD] = Math.min(wD[DD], cD[DD]), pD[DD] = Math.max(pD[DD], cD[DD]);
      const sD = (wD[0] + pD[0]) / 2,
        KD = (wD[1] + pD[1]) / 2,
        rD = (wD[2] + pD[2]) / 2;
      let LD = 0;
      for (const cD of DD) LD = Math.max(LD, Math.hypot(cD[0] - sD, cD[1] - KD, cD[2] - rD));
      return {
        x: sD,
        y: KD,
        z: rD,
        r: LD + zD
      }
    }

    function bf(DD, zD, wD) {
      const pD = zD.x - DD.x,
        sD = zD.y - DD.y,
        KD = zD.z - DD.z,
        rD = Math.sqrt(pD * pD + sD * sD + KD * KD);
      if (rD <= zD.r + 8) return 1;
      const LD = zD.r / rD,
        cD = Math.sqrt(1 - LD * LD),
        gD = cD < -DD.cosHalf,
        RD = (pD * DD.dx + sD * DD.dy + KD * DD.dz) / rD;
      if (!gD && RD < DD.cosHalf * cD - DD.sinHalf * LD) return 0;
      const AD = wD * Cf * DD.frameMs * DD.pxPerBlock / (rD - zD.r);
      for (let UD = 0; UD < xf.length; UD++)
        if (AD * xf[UD] <= 1) return xf[UD];
      return 1
    }

    function jf(DD, zD) {
      return {
        name: DD,
        at: zD,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const df = [0, 0, 0];

    function Sf(DD, zD, wD) {
      let [, pD, sD, KD, rD, LD] = zD;
      const cD = Gw.g * (null !== rD && void 0 !== rD ? rD : 1),
        gD = [];
      for (let fD = 0; fD < pD.length; fD += 3) gD.push([pD[fD] + .5, pD[fD + 1] + .65, pD[fD + 2] + .5]);
      const RD = [];
      for (let fD = 0; fD < gD.length - 1; fD++) {
        const [DD, zD] = [gD[fD], gD[fD + 1]];
        RD.push([(DD[0] + zD[0]) / 2, (DD[1] + zD[1]) / 2, (DD[2] + zD[2]) / 2])
      }
      const AD = gD.slice(1, -1),
        UD = new Uint8Array(AD.length);
      for (const fD of null !== LD && void 0 !== LD ? LD : []) UD[fD >> 1] |= 1 & fD ? 2 : 1;
      return {
        island: DD,
        length: AD.length,
        loop: KD,
        cellsPerMs: cD,
        edges: RD,
        GA: AD,
        bounds: Tf([...RD, ...AD], .3),
        changed: !0,
        culled: !1,
        hide: UD,
        items: sD.map((DD => {
          let [zD, pD] = DD;
          return jf(zD, (0, Gw.B)(zD, pD, wD, cD).at)
        }))
      }
    }

    function lf(DD, zD) {
      const {
        items: wD
      } = DD;
      if (0 === wD.length) return;
      const pD = DD.length / DD.cellsPerMs,
        sD = Math.floor((zD - wD[0].at) / pD) - 1;
      if (sD > 0)
        for (const KD of wD) KD.at += sD * pD
    }

    function Wf(DD, zD) {
      const wD = Math.min(Math.floor(zD), DD.length - 1),
        pD = DD.hide[wD];
      return 0 !== pD && 0 !== (pD & (zD - wD < .5 ? 1 : 2))
    }

    function Nf(DD, zD) {
      const wD = Math.min(Math.floor(zD), DD.length - 1),
        pD = zD - wD,
        sD = pD < .5,
        KD = sD ? DD.edges[wD] : DD.GA[wD],
        rD = sD ? DD.GA[wD] : DD.edges[wD + 1],
        LD = sD ? 2 * pD : 2 * pD - 1;
      df[0] = KD[0] + (rD[0] - KD[0]) * LD, df[1] = KD[1] + (rD[1] - KD[1]) * LD, df[2] = KD[2] + (rD[2] - KD[2]) * LD
    }
    const Zf = Math.PI / 4;
    class yf {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new Xf, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
          x: 0,
          y: 0,
          z: 0,
          dx: 0,
          dy: 0,
          dz: 1,
          cosHalf: -1,
          sinHalf: 0,
          pxPerBlock: 0,
          frameMs: 0
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.GJ = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(DD) {
        const zD = performance.now();
        this.clock.sample(DD.baf2BeltLinesAt, zD), this.queue(DD.baf2BeltLinesAt, DD, 0, null, null, 0), this.applyDue(zD)
      }
      onMoves(DD) {
        const zD = performance.now(),
          wD = DD.baf2BeltMovesAt;
        this.clock.sample(wD, zD);
        for (const [pD, sD, KD, rD] of DD.baf2BeltMoveList) null === sD ? this.queue(wD - KD, null, pD, null, null, null !== rD && void 0 !== rD ? rD : 0) : this.queue(wD - KD, null, pD, sD, null !== rD && void 0 !== rD ? rD : null, 0);
        this.applyDue(zD)
      }
      start(DD) {
        this.pool = new Vf.c(DD, {
          scale: .3,
          yaw: Zf
        }, 64), this.GJ(), window.addEventListener("resize", this.GJ)
      }
      onAfterRender(DD) {
        const {
          pool: zD
        } = this;
        if (!zD) return;
        const wD = performance.now(),
          pD = wD - this.lastRenderAt;
        this.lastRenderAt = wD, pD < 100 && (this.frameMs += .1 * (pD - this.frameMs));
        const sD = wD + this.frameMs;
        this.applyDue(sD);
        const KD = DD.cameraPosition,
          rD = zD.follow(KD);
        this.setView(DD, KD);
        const LD = this.frame++;
        for (let cD = 0; cD < this.shown.length; cD++) {
          const DD = this.shown[cD],
            wD = bf(this.view, DD.bounds, DD.cellsPerMs),
            pD = DD.culled && 0 !== wD;
          if (DD.culled = 0 === wD, !rD && !DD.changed && !pD && (0 === wD || (LD + cD) % wD !== 0)) continue;
          DD.changed = !1, DD.loop && (lf(DD, sD), (0, Gw.v)(DD.items, DD.length, sD, DD.cellsPerMs));
          let KD = DD.length;
          for (let LD = 0; LD < DD.items.length; LD++) {
            const wD = DD.items[LD],
              pD = (0, Gw.D)(wD.at, KD, sD, DD.cellsPerMs);
            if (KD = pD - Gw.p, Wf(DD, pD)) {
              null === wD.kind || wD.hidden || (wD.kind.hide(wD.slot), wD.hidden = !0);
              continue
            }
            let cD = wD.kind;
            if (null === cD) {
              if (cD = zD.kindOf(wD.name), null === cD) continue;
              wD.kind = cD, wD.slot = cD.take(), wD.hidden = !0, wD.drawn = NaN
            } else if (pD === wD.drawn && !wD.hidden && !rD) continue;
            Nf(DD, pD), cD.write(wD.slot, df[0], df[1], df[2]), wD.hidden = !1, wD.drawn = pD
          }
        }
        zD.commit()
      }
      dispose() {
        var DD;
        window.removeEventListener("resize", this.GJ), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (DD = this.pool) || void 0 === DD || DD.dispose(), this.pool = null
      }
      setView(DD, zD) {
        const {
          cameraDir: wD,
          lastDir: pD
        } = this, sD = DD.cameraDirection;
        for (let RD = 0; RD < 3; RD++) pD[RD] = wD[RD], wD[RD] = sD[RD];
        const KD = wD[0] * pD[0] + wD[1] * pD[1] + wD[2] * pD[2],
          rD = Number.isNaN(KD) ? 0 : Math.acos(Math.min(1, Math.max(-1, KD))),
          {
            width: LD,
            height: cD
          } = this,
          gD = DD.tanHalfFovX;
        ! function(DD, zD, wD, pD, sD, KD, rD) {
          let LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          DD.x = zD[0], DD.y = zD[1], DD.z = zD[2], DD.dx = wD[0], DD.dy = wD[1], DD.dz = wD[2];
          const cD = Math.min(Math.PI, Math.atan(Math.sqrt(pD * pD + sD * sD)) + Pf + LD);
          DD.cosHalf = Math.cos(cD), DD.sinHalf = Math.sin(cD), DD.pxPerBlock = KD / (2 * sD), DD.frameMs = rD
        }(this.view, zD, wD, gD, gD * cD / LD, cD * window.devicePixelRatio, this.frameMs, rD)
      }
      queue(DD, zD, wD, pD, sD, KD) {
        const rD = Math.max(this.clock.toLocal(DD), this.lastPendingAt);
        this.lastPendingAt = rD, this.pending.push({
          at: rD,
          lines: zD,
          line: wD,
          name: pD,
          pos: sD,
          idx: KD
        })
      }
      applyDue(DD) {
        const {
          pending: zD
        } = this;
        for (; this.pendingHead < zD.length && zD[this.pendingHead].at <= DD;) {
          const DD = zD[this.pendingHead++];
          if (DD.lines) this.applyLines(DD.lines, DD.at), DD.lines = null;
          else {
            const zD = this.lines.get(DD.line);
            zD && this.applyMove(zD, DD, DD.at)
          }
        }
        this.pendingHead === zD.length ? (zD.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > zD.length && (zD.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(DD, zD) {
        this.clearIsland(DD.baf2BeltIsland);
        for (const wD of DD.baf2BeltLineList) this.lines.set(wD[0], Sf(DD.baf2BeltIsland, wD, zD));
        this.shown = [...this.lines.values()]
      }
      applyMove(DD, zD, wD) {
        let {
          name: pD,
          pos: sD,
          idx: KD
        } = zD;
        DD.changed = !0, DD.loop && (lf(DD, wD), (0, Gw.v)(DD.items, DD.length, wD, DD.cellsPerMs)), null !== pD && null !== sD ? (0, Gw.z)(DD.items, DD.length, jf(pD, wD), sD, wD, DD.cellsPerMs) : null !== pD ? DD.items.push(jf(pD, wD)) : DD.items.length > KD && this.release((0, Gw.F)(DD.items, DD.length, wD, DD.cellsPerMs, KD))
      }
      clearIsland(DD) {
        for (const [zD, wD] of this.lines)
          if (wD.island === DD) {
            for (const DD of wD.items) this.release(DD);
            this.lines.delete(zD)
          }
      }
      release(DD) {
        null !== DD.kind && (DD.kind.release(DD.slot), DD.kind = null, DD.slot = -1, DD.hidden = !0, DD.drawn = NaN)
      }
    }
    var kf = wD(36577),
      mf = wD(38493);

    function ef(DD) {
      let {
        depth: zD,
        store: wD,
        t: sD
      } = DD;
      const KD = function(DD) {
        const [zD, wD] = (0, pD.useState)(DD.lastPlayerY());
        return (0, rR.g)(ys, wD), (0, pD.useEffect)((() => {
          wD(DD.lastPlayerY())
        }), [DD]), zD
      }(wD);
      if (null === KD) return null;
      const [rD, LD] = zD, cD = KD > rD ? rD : null !== LD && KD < LD ? LD : null, gD = {
        y: QK(KD),
        target: null === cD ? "" : QK(cD)
      };
      return (0, xK.jsx)("span", {
        className: Vs()("Baf2QuestDepth", {
          Reached: null === cD
        }),
        children: sD(`${RR}${null===cD?"questDepthReached":"questDepth"}`, gD)
      })
    }

    function of(DD) {
      let {
        also: zD,
        view: wD,
        t: pD
      } = DD;
      return (0, xK.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, xK.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, xK.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, xK.jsx)("strong", {
            children: pD(`${RR}questAlsoDownHere`)
          }), (0, xK.jsx)("span", {
            className: "Baf2QuestChips",
            children: zD.map((DD => {
              let [zD, sD, KD, rD] = DD;
              return (0, xK.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": pD(`${RR}questAlsoItem`, {
                  item: UR(pD, wD.itemNames[zD], zD),
                  have: String(sD),
                  need: String(KD)
                }),
                children: [(0, xK.jsx)(BR, {
                  item: zD
                }), (0, xK.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${sD}/${KD}`
                }), null !== rD && (0, xK.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: pD(`${RR}questAlsoDepth`, {
                    y: QK(rD)
                  })
                })]
              }, zD)
            }))
          })]
        })]
      })
    }
    var af = wD(3413);

    function uf(DD) {
      let {
        expanded: zD,
        inventoryOpen: wD,
        children: sD
      } = DD;
      const KD = (0, pD.useRef)(null);
      return (0, pD.useEffect)((() => {
        const DD = KD.current,
          zD = null === DD || void 0 === DD ? void 0 : DD.closest(".RightElements"),
          pD = null === DD || void 0 === DD ? void 0 : DD.firstElementChild;
        if (!DD || !zD || !pD) return;
        return (0, mf.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [zD, pD], (() => {
          const sD = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === sD.length) return;
          const KD = Math.max(...sD.map((DD => DD.getBoundingClientRect().bottom))),
            rD = zD.getBoundingClientRect(),
            LD = wD ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (LD) {
            const zD = parseFloat(getComputedStyle(pD).marginLeft) + parseFloat(getComputedStyle(pD).marginRight),
              wD = rD.right - LD.getBoundingClientRect().right - 8 - zD;
            DD.style.setProperty("--baf2-quest-room", `${wD}px`), DD.classList.toggle("NoRoom", wD < 150)
          } else DD.style.removeProperty("--baf2-quest-room"), DD.classList.remove("NoRoom");
          const cD = KD - rD.top + 8,
            gD = function(DD, zD, wD) {
              const pD = zD.getBoundingClientRect(),
                sD = DD.getBoundingClientRect(),
                KD = (0, af.f)(sD.left, sD.right, pD.top + wD);
              if (null !== KD && KD < pD.bottom) return KD - pD.top;
              return pD.height - (parseFloat(getComputedStyle(zD).paddingBottom) || 0)
            }(DD, zD, cD) - 8,
            RD = window.innerHeight / 2 - rD.top,
            {
              top: AD,
              maxHeight: UD
            } = function(DD, zD, wD, pD, sD) {
              const KD = Math.min(wD, Math.max(0, zD - DD)),
                rD = sD ? DD : Math.max(DD, Math.min(pD - KD / 2, zD - KD));
              return {
                top: rD,
                maxHeight: Math.max(0, zD - rD)
              }
            }(cD, gD, function(DD) {
              const zD = DD.firstElementChild,
                wD = zD ? zD.scrollHeight - zD.clientHeight : 0;
              return DD.getBoundingClientRect().height + Math.max(0, wD)
            }(pD), RD, CK());
          DD.style.top = `${AD}px`, DD.style.maxHeight = `${UD}px`
        }))
      }), [wD]), (0, xK.jsx)("div", {
        ref: KD,
        className: Vs()("Baf2QuestHud", {
          Expanded: zD
        }),
        children: sD
      })
    }

    function vf(DD) {
      let {
        amount: zD,
        t: wD
      } = DD;
      return (0, xK.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, xK.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, xK.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: wD(`${RR}questStepsDone`, {
            amount: String(zD)
          })
        })]
      })
    }

    function tf(DD) {
      let {
        pulse: zD
      } = DD;
      return 0 === zD ? null : (0, xK.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, zD)
    }

    function Ff(DD) {
      var zD;
      let {
        store: wD
      } = DD;
      const sD = (0, rR.k)(Zs, wD.get()),
        [KD, rD] = (0, pD.useState)(!1),
        {
          t: LD
        } = (0, Ts.E)(),
        cD = (0, VK.h)(PK),
        {
          openInGameMenuName: gD,
          openEverythingMenuName: RD
        } = (0, Es.n)(["openInGameMenuName", "openEverythingMenuName"]),
        AD = "inventory" === gD && null === RD,
        UD = null !== gD && !AD || null !== RD;
      if (! function(DD) {
          return null !== DD.name || null !== DD.side
        }(sD) || UD || "off" === sD.tutorial) return null;
      const fD = us(sD.rows),
        ID = fD.filter((DD => DD.done)).length,
        BD = function(DD, zD) {
          const wD = Fs(DD);
          let pD = 0;
          return DD.filter(((DD, sD) => !!DD.justFinished || !(DD.done || sD < wD || pD > zD) && (pD++, !0)))
        }(sD.rows, cD ? 0 : 2),
        GD = cD ? BD : function(DD, zD) {
          const wD = zD.filter((DD => !DD.justFinished));
          if (wD.length < 2) return [...zD];
          const pD = DD.indexOf(wD[0]),
            sD = DD.indexOf(wD[wD.length - 1]),
            KD = new Set(us(DD));
          return DD.filter(((DD, wD) => zD.includes(DD) || DD.done && KD.has(DD) && wD > pD && wD < sD))
        }(sD.rows, BD),
        hD = KD ? sD.rows : GD,
        nD = KD || cD ? [] : function(DD, zD) {
          const wD = new Array(zD.length + 1).fill(0),
            pD = new Set(us(DD));
          let sD = 0;
          for (const KD of DD) sD < zD.length && KD === zD[sD] ? sD++ : KD.done && pD.has(KD) && wD[sD]++;
          return wD
        }(sD.rows, GD),
        MD = KD || GD.length < sD.rows.length || null !== sD.reward,
        OD = as(sD),
        JD = OD ? LD(`${RR}questLineComplete`) : sD.tier ? nR(LD, sD.tier) : LD(`${RR}currentQuest`),
        ED = function(DD) {
          var zD, wD;
          if (as(DD)) return null;
          const pD = null === (zD = DD.chapters) || void 0 === zD ? void 0 : zD.find((zD => {
            let [wD] = zD;
            return wD === DD.tier
          }));
          if (!pD) return null;
          const sD = pD[1].filter((DD => !DD[4]));
          if (0 === sD.length) return null;
          const KD = null === (wD = DD.name) || void 0 === wD ? void 0 : wD[0],
            rD = DD => sD.findIndex((zD => zD[0] === KD && (!DD || !zD[3]))),
            LD = rD(!0),
            cD = LD >= 0 ? LD : rD(!1);
          if (cD >= 0) return [cD + 1, sD.length];
          const gD = sD.filter((DD => DD[3])).length;
          return [Math.min(gD + 1, sD.length), sD.length]
        }(sD);
      return (0, xK.jsx)(kf.g, {
        placement: "topRight",
        children: (0, xK.jsx)(uf, {
          expanded: KD,
          inventoryOpen: AD,
          children: (0, xK.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: AR,
            children: [null !== sD.name && (0, xK.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, xK.jsx)(tf, {
                pulse: sD.pulse
              }), (0, xK.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, xK.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [JD, ED && (0, xK.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": LD(`${RR}questPlaceLabel`, {
                      n: String(ED[0]),
                      total: String(ED[1])
                    }),
                    children: LD(`${RR}questPlace`, {
                      n: String(ED[0]),
                      total: String(ED[1])
                    })
                  }), sD.tier && sD.core && !OD && (0, xK.jsx)(MR, {
                    core: sD.core,
                    t: LD
                  })]
                })
              }), (0, xK.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: LD(`${RR}${sD.name[0]}`, fR(sD.name[1]))
              }), (fD.length > 1 || MD) && (0, xK.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [fD.length > 1 && (0, xK.jsx)(OR, {
                  rows: fD,
                  t: LD
                }), MD && (0, xK.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": KD,
                  onClick: () => {
                    rD(!KD)
                  },
                  children: [(0, xK.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: LD(`${RR}questStepsToggle`, {
                      done: String(ID),
                      total: String(fD.length)
                    })
                  }), (0, xK.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: KD ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, xK.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [hD.map(((DD, zD) => {
                  var KD;
                  const rD = DD.current && sD.depth;
                  return (0, xK.jsxs)(pD.Fragment, {
                    children: [(null !== (KD = nD[zD]) && void 0 !== KD ? KD : 0) > 0 && (0, xK.jsx)(vf, {
                      amount: nD[zD],
                      t: LD
                    }), (0, xK.jsx)(JR, {
                      row: DD,
                      view: sD,
                      t: LD,
                      extra: rD && (0, xK.jsx)(ef, {
                        depth: rD,
                        store: wD,
                        t: LD
                      })
                    })]
                  }, DD.id)
                })), (null !== (zD = nD[hD.length]) && void 0 !== zD ? zD : 0) > 0 && (0, xK.jsx)(vf, {
                  amount: nD[hD.length],
                  t: LD
                }), sD.also.length > 0 && (0, xK.jsx)(of, {
                  also: sD.also,
                  view: sD,
                  t: LD
                })]
              }), KD && sD.reward && (0, xK.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [LD(`${RR}questReward`), (0, xK.jsx)(BR, {
                  item: sD.reward
                }), UR(LD, sD.itemNames[sD.reward], sD.reward)]
              })]
            }), sD.side && (0, xK.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [es(sD, Date.now()) && (0, xK.jsx)(tf, {
                pulse: sD.sideCameUpAt
              }), (0, xK.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: LD(`${RR}questSide`)
              }), (0, xK.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: LD(`${RR}${sD.side.name[0]}`, fR(sD.side.name[1]))
              }), (0, xK.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, xK.jsx)(JR, {
                  row: sD.side.row,
                  view: sD,
                  t: LD
                })
              })]
            })]
          })
        })
      })
    }
    const Yf = "baf2ToastView";
    class Hf {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = DD, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: DD,
          holdMs: zD
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const DD = this.dropCovered();
          DD && this.show(DD.message, DD.holdMs)
        }), 250));
        const wD = this.dropCovered();
        null !== wD && (wD.holdMs > 0 || "baf2ToastCelebrate" === wD.message.baf2ToastStyle) && "baf2ToastCelebrate" !== DD.baf2ToastStyle && this.show(wD.message, wD.holdMs);
        const pD = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== DD.baf2ToastStyle && pD > 0) return this.pending = {
          message: DD,
          holdMs: zD
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const DD = this.pending;
          this.pending = null, DD && this.present(DD.message, DD.holdMs)
        }), pD));
        this.present(DD, zD)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(DD, zD) {
        this.clearTimers(), this.pending = null;
        const wD = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: DD.baf2ToastText,
          style: DD.baf2ToastStyle,
          swapped: wD,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === DD.baf2ToastStyle ? 1500 : zD), this.KG();
        const pD = Math.min(8e3, Math.max(1e3, DD.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), pD)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.KG(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.KG()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const DD = this.covering;
        return this.covering = null, DD
      }
      KG() {
        Ws.l.KG(Yf, this.view, !0)
      }
    }
    var qf = wD(79);
    const DI = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function zI(DD) {
      let {
        store: zD
      } = DD;
      const wD = (0, rR.k)(Yf, zD.get()),
        {
          openInGameMenuName: pD,
          openEverythingMenuName: sD
        } = (0, Es.n)(["openInGameMenuName", "openEverythingMenuName"]),
        KD = wD && (0, xK.jsxs)("div", {
          className: Vs()("Baf2Toast", DI[wD.style], {
            Swapped: wD.swapped,
            Leaving: wD.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === wD.style && (0, xK.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, xK.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, xK.jsx)(Ss.e, {
              text: wD.text
            })
          })]
        }, wD.id);
      return null !== pD && null === sD ? (0, qf.createPortal)((0, xK.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: KD
      }), document.body) : (0, xK.jsx)(kf.g, {
        children: KD
      })
    }
    const wI = "baf2AreaView";
    class pI {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Qg = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Qg = null
      }
      arrive(DD, zD) {
        zD && function(DD) {
          return "home" === DD.baf2AreaPlace && void 0 !== DD.baf2AreaNameText
        }(DD) ? this.Qg = DD : this.show(DD)
      }
      release() {
        const DD = this.Qg;
        null !== DD && this.show(DD)
      }
      show(DD) {
        this.clearTimer(), this.Qg = null;
        const zD = void 0 === DD.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: DD,
          ms: zD
        }, this.KG(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.KG()
        }), zD)
      }
      dispose() {
        this.clearTimer(), this.Qg = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      KG() {
        Ws.l.KG(wI, this.view, !0)
      }
    }

    function sI(DD) {
      var zD;
      let {
        store: wD
      } = DD;
      const {
        t: pD
      } = (0, Ts.E)(), sD = (0, rR.k)(wI, wD.get());
      if (!sD) return null;
      const {
        area: KD
      } = sD, rD = KD.baf2AreaResetMinutes;
      return (0, xK.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": KD.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${sD.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, xK.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), KD.baf2AreaHeading && (0, xK.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: pD(KD.baf2AreaHeading)
        }), (0, xK.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (zD = KD.baf2AreaNameText) && void 0 !== zD ? zD : pD(KD.baf2AreaName)
        }), KD.baf2AreaNote && (0, xK.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: pD(KD.baf2AreaNote)
        }), void 0 !== rD && (0, xK.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: pD("buildAFactory2Game:areaWildsReset", {
            time: XK(pD, 60 * rD)
          })
        })]
      }, sD.id)
    }
    const KI = "baf2GearGauge";
    class rI {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      bJ(DD) {
        var zD;
        if (this.clearLinger(), null === DD.gearPowerKind) return void this.set(null);
        const wD = "jetpack" === DD.gearPowerKind && (pD = DD.gearChargeState, sD = DD.gearCharge, "flying" === pD || "charging" === pD || "outOfCharge" === pD || "ceiling" === pD || "offPlot" === pD || "noPower" === pD && sD <= 0);
        var pD, sD;
        const KD = !0 === (null === (zD = this.view) || void 0 === zD ? void 0 : zD.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          rD = wD || "jetpack" === DD.gearPowerKind && KD;
        this.set({
          gauge: DD,
          jetShown: rD
        }), rD && !wD && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(DD) {
        this.view = DD, Ws.l.KG(KI, DD, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const LI = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function cI(DD) {
      let {
        store: zD
      } = DD;
      const wD = (0, rR.k)(KI, zD.get());
      return wD ? "jetpack" === wD.gauge.gearPowerKind ? (0, xK.jsx)(gI, {
        view: wD
      }) : (0, xK.jsx)(RI, {
        gauge: wD.gauge
      }) : null
    }

    function gI(DD) {
      let {
        view: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), {
        gauge: pD
      } = zD, sD = pD.gearChargeMax > 0 ? Math.max(0, Math.min(1, pD.gearCharge / pD.gearChargeMax)) : 0, KD = LI[pD.gearChargeState], rD = KD ? wD(KD) : null;
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2JetArc", {
          Shown: zD.jetShown,
          Low: sD < .2,
          Warm: sD >= .2 && sD < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - sD)
        },
        "aria-hidden": !zD.jetShown,
        children: [(0, xK.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, xK.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: AI,
            pathLength: 100
          }), (0, xK.jsx)("path", {
            className: "Baf2JetArcFill",
            d: AI,
            pathLength: 100
          })]
        }), (0, xK.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * sD), "%"]
        }), rD && (0, xK.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: rD
        })]
      })
    }

    function RI(DD) {
      let {
        gauge: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), pD = function(DD, zD) {
        switch (zD.gearPowerKind) {
          case "skyPack":
            return DD("buildAFactory2Game:gearSkyPack", {
              charge: zD.gearCharge,
              max: zD.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return DD("buildAFactory2Game:gearIslandDraw", {
              power: YD(zD.gearIslandPower),
              cost: YD(zD.gearCostPerUse)
            });
          case "barrier":
            return DD("buildAFactory2Game:gearBarrier", {
              shield: Math.round(zD.gearCharge),
              max: zD.gearChargeMax,
              power: YD(zD.gearIslandPower)
            });
          default:
            return null
        }
      }(wD, zD);
      return null === pD ? null : (0, xK.jsx)(kf.g, {
        children: (0, xK.jsx)("div", {
          className: Vs()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === zD.gearChargeState || "outOfCharge" === zD.gearChargeState
          }),
          role: "status",
          children: pD
        })
      })
    }
    const AI = (() => {
      const DD = DD => {
        const zD = DD * Math.PI / 180;
        return `${(40*Math.cos(zD)).toFixed(2)} ${(40*Math.sin(zD)).toFixed(2)}`
      };
      return `M ${DD(160)} A 40 40 0 1 1 ${DD(380)}`
    })();
    class UI {
      constructor(DD) {
        this.onElement = DD, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      bJ(DD) {
        let zD = DD.baf2LabelsReset || DD.baf2LabelsIsland !== this.island;
        zD && (this.labels.clear(), this.island = DD.baf2LabelsIsland);
        for (const [wD, pD, sD, KD, rD] of DD.baf2LabelsList) {
          const DD = `${wD},${pD},${sD}`,
            LD = this.labels.get(DD);
          null === KD ? zD = this.labels.delete(DD) || zD : LD && LD.item === KD && (LD.count === rD || LD.count >= 0 && rD >= 0) ? LD.count !== rD && (LD.count = rD, this.writeCount(DD, rD)) : (this.labels.set(DD, {
            key: DD,
            pos: [wD, pD, sD],
            item: KD,
            count: rD
          }), this.writeCount(DD, rD), zD = !0)
        }
        if (this.changes++, zD) {
          this.snapshot = [...this.labels.values()];
          for (const DD of this.listeners) DD()
        }
      }
      bindCount(DD) {
        const zD = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${DD}`;
        let wD = this.countRefs.get(zD);
        return wD || (wD = wD => {
          var pD, sD;
          wD ? (this.countElements.set(zD, wD), this.writeCount(DD, null !== (pD = null === (sD = this.labels.get(DD)) || void 0 === sD ? void 0 : sD.count) && void 0 !== pD ? pD : -1)) : (this.countElements.delete(zD), this.countRefs.delete(zD))
        }, this.countRefs.set(zD, wD)), wD
      }
      setCountWords(DD) {
        this.countWords = DD;
        for (const [zD, wD] of this.labels) this.writePart(`words|${zD}`, DD(wD.count), wD.count)
      }
      writeCount(DD, zD) {
        this.writePart(`bare|${DD}`, EK(zD), zD), this.countElements.has(`words|${DD}`) && this.writePart(`words|${DD}`, this.countWords(zD), zD)
      }
      writePart(DD, zD, wD) {
        const pD = this.countElements.get(DD);
        if (!pD || wD < 0) return;
        const sD = pD.firstChild;
        sD && 3 === sD.nodeType && !sD.nextSibling ? sD.nodeValue !== zD && (sD.nodeValue = zD) : pD.textContent !== zD && (pD.textContent = zD)
      }
      list() {
        return this.snapshot
      }
      at(DD) {
        return this.labels.get(`${DD[0]},${DD[1]},${DD[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      bind(DD) {
        let zD = this.refs.get(DD);
        return zD || (zD = zD => {
          const wD = this.elements.get(DD);
          var pD, sD;
          wD && (null === (pD = this.onElement) || void 0 === pD || pD.call(this, wD, !1));
          zD ? (this.elements.set(DD, zD), null === (sD = this.onElement) || void 0 === sD || sD.call(this, zD, !0)) : (this.elements.delete(DD), this.refs.delete(DD))
        }, this.refs.set(DD, zD)), zD
      }
      onAfterRender(DD, zD, wD, pD) {
        for (const sD of this.snapshot) {
          const KD = this.elements.get(sD.key);
          if (!KD) continue;
          if (pD(sD.key)) {
            (0, Rf.d)(KD, !0);
            continue
          }
          const rD = nf(KD, DD, zD, sD.pos, 1.1, 24);
          rD && wD.add(rD, KD, 0, !1)
        }
      }
    }
    const fI = (0, pD.memo)((function(DD) {
        let {
          item: zD
        } = DD;
        return (0, xK.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, xK.jsx)(ds.d, {
            itemName: zD,
            amount: 0
          })
        })
      })),
      II = (0, pD.memo)((function(DD) {
        let {
          label: zD,
          bindRef: wD,
          countRef: pD,
          wordsRef: sD
        } = DD;
        return (0, xK.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: wD,
          hidden: !0,
          children: [(0, xK.jsx)(fI, {
            item: zD.item
          }), zD.count >= 0 && (0, xK.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, xK.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: sD
            }), (0, xK.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: pD
            })]
          })]
        })
      })),
      BI = (0, pD.memo)((function(DD) {
        let {
          store: zD
        } = DD;
        const {
          t: wD
        } = (0, Ts.E)(), [sD, KD] = (0, pD.useState)((() => zD.list()));
        return (0, pD.useEffect)((() => (KD(zD.list()), zD.subscribe((() => {
          KD(zD.list())
        })))), [zD]), (0, pD.useEffect)((() => {
          zD.setCountWords((DD => wD("buildAFactory2Game:labelSiloCount", {
            count: EK(DD)
          })))
        }), [zD, wD]), (0, xK.jsx)("div", {
          className: "Baf2IslandLabels",
          children: sD.map((DD => -2 === DD.count ? null : (0, xK.jsx)(II, {
            label: DD,
            bindRef: zD.bind(DD.key),
            countRef: zD.bindCount(DD.key),
            wordsRef: zD.bindCount(DD.key, "words")
          }, DD.key)))
        })
      })),
      GI = {
        read: () => !0,
        write: () => {}
      };

    function hI(DD) {
      return `${DD[0]},${DD[1]},${DD[2]}`
    }

    function nI(DD) {
      let [zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD] = DD;
      const fD = void 0 === AD || void 0 === UD ? function(DD) {
        return [Math.floor((DD - 1) / 2), 0]
      }(KD) : [AD, UD];
      return {
        kind: 0 === cD ? "reactor" : "battery",
        box: ew([zD, wD, pD], sD, KD, rD, LD, fD),
        formed: 1 === gD,
        level: RD
      }
    }
    class MI {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GI;
        this.guideSetting = DD, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = DD.read()
      }
      bJ(DD) {
        var zD;
        const wD = new Map;
        for (const pD of DD.baf2RxPlanList) {
          const DD = nI(pD);
          wD.set(hI(DD.box.ctrl), DD)
        }
        this.plans = wD, this.layouts = new Map((null !== (zD = DD.baf2RxLayouts) && void 0 !== zD ? zD : []).map((DD => {
          let [zD, wD, pD, sD] = DD;
          return [hI([zD, wD, pD]), sD]
        }))), this.predicted.clear(), DD.baf2RxFormedAt && (this.formed = {
          ctrl: DD.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const pD of [...this.startersOff]) {
          const DD = wD.get(pD);
          DD && !DD.formed || this.startersOff.delete(pD)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((DD => this.planByKey(DD)))
      }
      planAt(DD) {
        return this.planByKey(hI(DD))
      }
      predictSize(DD, zD) {
        this.predicted.set(hI(DD), zD), this.changed()
      }
      unpredict(DD) {
        this.predicted.delete(hI(DD)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(DD) {
        var zD;
        const wD = hI(DD);
        return this.predicted.has(wD) ? null : null !== (zD = this.layouts.get(wD)) && void 0 !== zD ? zD : null
      }
      showsStarter(DD) {
        return !this.startersOff.has(hI(DD))
      }
      setStarter(DD, zD) {
        const wD = hI(DD);
        zD ? this.startersOff.delete(wD) : this.startersOff.add(wD), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(DD) {
        this.guide = DD, this.guideSetting.write(DD), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(DD) {
        const zD = this.plans.get(DD);
        if (!zD) return null;
        const wD = this.predicted.get(DD);
        return wD ? {
          ...zD,
          box: aw(zD.box, zD.kind, wD[0], wD[1], wD[2])
        } : zD
      }
      changed() {
        this.version++;
        for (const DD of this.listeners) DD()
      }
    }
    var OI = wD(197);
    const JI = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function EI(DD, zD, wD, pD) {
      const sD = DD.length / 3;
      for (let KD = 0; KD < JI.length / 3; KD++) DD.push(JI[3 * KD] * pD[0] / 2 + wD[0], JI[3 * KD + 1] * pD[1] / 2 + wD[1], JI[3 * KD + 2] * pD[2] / 2 + wD[2]);
      for (let KD = sD; KD < sD + 24; KD += 4) zD.push(KD, KD + 1, KD + 2, KD, KD + 2, KD + 3)
    }

    function QI(DD, zD, wD) {
      const pD = zD[0][0],
        sD = [],
        KD = [];
      for (const [rD, LD] of zD) EI(sD, KD, [rD[0] - pD[0], rD[1] - pD[1], rD[2] - pD[2]], LD);
      return DD.createGameMesh({
        positions: sD,
        indices: KD
      }, wD, pD)
    }

    function XI(DD, zD) {
      const wD = DD.w - 2,
        pD = DD.d - 2;
      return 1 === function(DD, zD, wD, pD) {
        const [sD, KD, rD] = DD;
        if (Number(sD <= 2) + Number(KD <= 2) + Number(rD <= 2) >= 2) return function(DD, zD, wD) {
          return (DD + zD + wD) % 2 === 0 ? 1 : 3
        }(zD, wD, pD);
        const [LD, cD] = sD >= KD && sD >= rD ? [wD, pD] : KD >= rD ? [zD, pD] : [zD, wD];
        return LD % 2 === 0 && cD % 2 === 0 ? 1 : 3
      }([wD, DD.h - 2, pD], zD % wD, Math.floor(zD / (wD * pD)), Math.floor(zD / wD) % pD) ? "rod" : "channel"
    }

    function VI(DD, zD, wD) {
      if ("reactor" !== DD.kind || DD.formed || !zD) return !1;
      const pD = tw(DD.box);
      for (let sD = 0; sD < pD; sD++) {
        const DD = wD(sD);
        if (null !== DD && bw(DD)) return !1
      }
      return !0
    }

    function PI(DD, zD, wD, pD, sD) {
      var KD;
      let rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const LD = zp(DD.box, zD),
        cD = Kp(DD.kind, LD, wD);
      if ("wrong" === cD || "blocked" === cD) return "wrong";
      if (!sD) return null;
      if ("inside" === LD && "reactor" === DD.kind && "Air" === jw(wD)) {
        if (null !== rD) {
          var gD;
          const wD = sU[KU(rD, wp(DD.box, zD))];
          return wD && null !== (gD = xc(wD)) && void 0 !== gD ? gD : null
        }
        if (pD) return XI(DD.box, wp(DD.box, zD))
      }
      if ("missing" !== cD) return null;
      const RD = rp(DD.kind, LD);
      return null === RD ? null : null !== (KD = xc(RD)) && void 0 !== KD ? KD : null
    }
    const CI = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function xI(DD, zD, wD) {
      const pD = wD => {
        const pD = zD(qw(DD.box, wD));
        return null !== pD && function(DD, zD) {
          return "reactor" !== DD.kind || zD !== Yw(DD.box) && "inside" !== zp(DD.box, zD)
        }(DD, wD) && "ok" !== Kp(DD.kind, zp(DD.box, wD), pD)
      };
      if (wD) {
        const KD = Dp(DD.box, [Math.floor(wD[0]), Math.floor(wD[1]), Math.floor(wD[2])]);
        if (KD >= 0 && (pD(KD) || (sD = KD, "reactor" === DD.kind && "inside" === zp(DD.box, sD) && "Air" === zD(qw(DD.box, sD))))) return KD
      }
      var sD;
      const KD = tw(DD.box);
      for (let rD = 0; rD < KD; rD++)
        if (pD(rD)) return rD;
      return -1
    }

    function TI(DD, zD) {
      return Math.floor(zD / (DD.w * DD.d))
    }

    function bI(DD, zD, wD) {
      return wD >= 0 && TI(DD, zD) > TI(DD, wD)
    }

    function jI(DD, zD) {
      return zD >= 0 && DD.h >= 3 && TI(DD, zD) === DD.h - 1
    }

    function dI(DD) {
      const zD = jw(DD);
      return zD === Mw || "Collider" === zD || "Laser" === zD || zD.startsWith("_Collider ")
    }

    function SI(DD, zD, wD, pD) {
      if (pD(DD)) return null;
      if (!CI.every((zD => {
          let [pD, sD, KD] = zD;
          const rD = wD([DD[0] + pD, DD[1] + sD, DD[2] + KD]);
          return null !== rD && !Zw("reactor", rD) && "reactor" !== dw(rD)
        }))) return null;
      const sD = yw("reactor").min,
        KD = ew([DD[0], DD[1], DD[2]], function(DD, zD) {
          const wD = zD[0] - (DD[0] + .5),
            pD = zD[2] - (DD[2] + .5);
          return Math.abs(wD) >= Math.abs(pD) ? wD >= 0 ? 2 : 4 : pD >= 0 ? 1 : 3
        }(DD, zD), sD, sD, sD, ow("reactor", sD)),
        rD = Yw(KD);
      let LD = !0;
      for (let cD = 0; cD < tw(KD) && LD; cD++) {
        if (cD === rD) continue;
        const DD = qw(KD, cD),
          zD = wD(DD);
        LD = !pD(DD) && (null === zD || !dI(zD))
      }
      return {
        box: KD,
        fits: LD
      }
    }
    const iI = Cc,
      lI = "baf2Goal",
      WI = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      NI = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      ZI = .4;

    function yI(DD, zD) {
      let [wD, pD, sD] = DD;
      const KD = lc([wD - .02, pD - .02, sD - .02], [wD + 1.02, pD + 1.02, sD + 1.02], .07);
      return zD && (KD.push([
        [wD + .5, pD + 1 + .7, sD + .5],
        [.08, 1.4, .08]
      ]), KD.push([
        [wD + .5, pD + 1 + 1.4 + .2, sD + .5],
        [ZI, ZI, ZI]
      ])), KD
    }

    function kI(DD, zD) {
      let [wD, pD, sD] = zD;
      return DD.isBlockInLoadedChunk(wD, pD, sD) ? DD.blockIdToBlockName(DD.getBlockId(wD, pD, sD)) : null
    }
    let mI = null;
    const eI = new Set;
    let oI = null;

    function aI(DD) {
      mI = DD;
      for (const zD of eI) zD(DD)
    }
    class uI {
      constructor(DD) {
        var zD;
        this.plans = DD, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (zD = DD => {
          var zD, wD;
          this.setGoal(null !== (zD = null === DD || void 0 === DD ? void 0 : DD.goal) && void 0 !== zD ? zD : null, null !== (wD = null === DD || void 0 === DD ? void 0 : DD.startsBattery) && void 0 !== wD && wD)
        }, oI ??= [Ws.l.subscribe("setDirectionArrow", (DD => {
          let {
            id: zD,
            position: wD,
            text: pD
          } = DD;
          zD === lI && aI({
            goal: [Math.floor(wD[0]), Math.floor(wD[1]), Math.floor(wD[2])],
            startsBattery: JSON.stringify(null !== pD && void 0 !== pD ? pD : null).includes("arrowStartBattery")
          })
        })), Ws.l.subscribe("clearDirectionArrow", (DD => {
          let {
            id: zD
          } = DD;
          null !== zD && zD !== lI || aI(null)
        }))], eI.add(zD), zD(mI), () => {
          eI.delete(zD)
        })
      }
      onAfterRender(DD, zD) {
        const wD = performance.now();
        if (this.cues.length > 0) {
          const zD = .55 + .45 * Math.sin(wD / 1100 * Math.PI * 2);
          for (const wD of this.cues) DD.setGameMesh(wD, {
            visibility: zD
          })
        }
        if (wD - this.lastCheckMs < 150) return;
        this.lastCheckMs = wD;
        const pD = this.plans.all().filter((DD => {
            const [wD, pD, sD] = DD.box.ctrl;
            return (!DD.formed || null !== this.plans.layoutOf(DD.box.ctrl)) && (wD - zD[0]) ** 2 + (pD - zD[1]) ** 2 + (sD - zD[2]) ** 2 <= 2304
          })),
          sD = function(DD, zD) {
            const wD = OI.f.CI,
              pD = new Map;
            for (const KD of zD) {
              const zD = qw(KD.box, 0),
                rD = qw(KD.box, tw(KD.box) - 1),
                LD = [Math.min(zD[0], rD[0]), Math.min(zD[1], rD[1]), Math.min(zD[2], rD[2])].map((DD => Math.floor(DD / wD))),
                cD = [Math.max(zD[0], rD[0]), Math.max(zD[1], rD[1]), Math.max(zD[2], rD[2])].map((DD => Math.floor(DD / wD)));
              for (let wD = LD[0]; wD <= cD[0]; wD++)
                for (let zD = LD[1]; zD <= cD[1]; zD++)
                  for (let KD = LD[2]; KD <= cD[2]; KD++) {
                    var sD;
                    pD.set(`${wD},${zD},${KD}`, null !== (sD = DD.getChunkVersion(wD, zD, KD)) && void 0 !== sD ? sD : -1)
                  }
            }
            return pD
          }(DD, pD);
        this.plans.getVersion() === this.storeVersion && (function(DD, zD) {
          if (DD.size !== zD.size) return !1;
          for (const [wD, pD] of DD)
            if (zD.get(wD) !== pD) return !1;
          return !0
        }(sD, this.chunkVersions) || wD - this.lastRescanMs < 600) || (this.lastRescanMs = wD, this.storeVersion = this.plans.getVersion(), this.chunkVersions = sD, this.redraw(DD, pD))
      }
      dispose(DD) {
        this.unwatch(), mI = null, this.clearMeshes(DD), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(DD, zD) {
        var wD;
        (null === DD || void 0 === DD ? void 0 : DD.join()) === (null === (wD = this.goal) || void 0 === wD ? void 0 : wD.join()) && zD === this.startsBattery || (this.goal = DD, this.startsBattery = zD, this.storeVersion = -1)
      }
      redraw(DD, zD) {
        const wD = zD => kI(DD, zD),
          pD = new Map,
          sD = [],
          KD = this.plans.guideOn();
        for (const gD of zD) {
          const DD = KD && VI(gD, this.plans.showsStarter(gD.box.ctrl), (DD => wD(qw(gD.box, DD)))),
            zD = "reactor" === gD.kind ? this.plans.layoutOf(gD.box.ctrl) : null,
            rD = KD && !gD.formed ? xI(gD, wD, this.goal) : -1;
          rD >= 0 && sD.push([qw(gD.box, rD), jI(gD.box, rD)]);
          const LD = tw(gD.box);
          for (let sD = 0; sD < LD; sD++) {
            const LD = qw(gD.box, sD),
              cD = wD(LD),
              RD = null === cD ? null : PI(gD, sD, cD, DD, KD, zD);
            if (null !== RD) {
              const DD = "wrong" !== RD && bI(gD.box, sD, rD),
                zD = DD ? `${RD}Dim` : RD;
              let wD = pD.get(zD);
              wD || (wD = {
                draw: {
                  ghost: RD,
                  dim: DD
                },
                list: []
              }, pD.set(zD, wD)), wD.list.push(LD)
            }
          }
        }
        if (KD && this.startsBattery && this.goal) {
          const [DD, zD, sD] = this.goal, KD = [];
          for (const [pD, rD, LD] of WI) {
            const cD = [DD + pD, zD + rD, sD + LD];
            "Air" === wD(cD) && KD.push(cD)
          }
          if (KD.length > 0) {
            var rD;
            const DD = null !== (rD = pD.get("cell")) && void 0 !== rD ? rD : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            DD.list.push(...KD), pD.set("cell", DD)
          }
        }
        const LD = [...pD.keys()].sort(),
          cD = [...LD.map((DD => `${DD}:${pD.get(DD).list.join(";")}`)), `cue:${sD.join(";")}`].join("|");
        if (cD !== this.shownKey) {
          this.shownKey = cD, this.clearMeshes(DD);
          for (const zD of LD) {
            const {
              draw: wD,
              list: sD
            } = pD.get(zD);
            this.meshes.push(this.build(DD, wD, sD))
          }
          for (const [zD, wD] of sD) this.cues.push(QI(DD, yI(zD, wD), NI))
        }
      }
      build(DD, zD, wD) {
        let {
          ghost: pD,
          dim: sD
        } = zD;
        const {
          size: KD,
          colour: rD,
          alpha: LD
        } = iI[pD], cD = wD[0], gD = [], RD = [];
        for (const [AD, UD, fD] of wD) EI(gD, RD, [AD - cD[0] + .5, UD - cD[1] + .5, fD - cD[2] + .5], [KD, KD, KD]);
        return DD.createGameMesh({
          positions: gD,
          indices: RD
        }, {
          rgb: rD,
          alpha: LD * (sD ? .3 : 1)
        }, cD)
      }
      clearMeshes(DD) {
        for (const zD of [...this.meshes, ...this.cues]) DD.disposeGameMesh(zD);
        this.meshes = [], this.cues = []
      }
    }
    const vI = [.56, .83, 1],
      tI = [1, .3, .25];
    class FI {
      constructor(DD) {
        this.plans = DD, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(DD, zD, wD) {
        var pD;
        const sD = performance.now();
        if (sD - this.lastCheckMs < 150) return;
        this.lastCheckMs = sD;
        const KD = zD => kI(DD, zD),
          rD = null === (pD = DD.zwD(zD)) || void 0 === pD ? void 0 : pD.name,
          LD = rD && "Reactor Frame" === jw(rD) ? DD.getTargetedBlock() : null,
          cD = LD ? [LD.sG[0], LD.sG[1], LD.sG[2]] : null,
          gD = null !== cD && "Air" === KD(cD) && cD.every(((DD, zD) => Math.abs(DD + .5 - wD[zD]) <= 8)) ? SI(cD, wD, KD, (DD => this.inPlan(DD))) : null,
          RD = gD ? `${gD.box.ctrl.join()}|${gD.box.rot}|${gD.fits}` : "";
        RD !== this.shownKey && this.show(DD, RD, gD)
      }
      dispose(DD) {
        this.clear(DD), this.shownKey = ""
      }
      inPlan(DD) {
        return this.plans.all().some((zD => Dp(zD.box, DD) >= 0))
      }
      show(DD, zD, wD) {
        if (this.clear(DD), this.shownKey = zD, !wD) return;
        const {
          box: pD,
          fits: sD
        } = wD, KD = sD ? vI : tI, {
          lo: rD,
          hi: LD
        } = ic(pD);
        this.meshes.push(QI(DD, lc(rD, LD, .05), {
          rgb: KD,
          alpha: 1
        }));
        const cD = [],
          gD = qw(pD, 0)[1];
        for (let RD = 0; RD < pD.w * pD.d; RD++) {
          const [DD, , zD] = qw(pD, RD);
          cD.push([
            [DD + .5, gD + .02 + .01, zD + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(QI(DD, cD, {
          rgb: KD,
          alpha: .25
        }))
      }
      clear(DD) {
        for (const zD of this.meshes) DD.disposeGameMesh(zD);
        this.meshes = []
      }
    }
    const YI = "buildAFactory2Game:";

    function HI(DD, zD, wD) {
      const pD = DD => {
          const [wD, pD, sD] = DD.box.ctrl;
          return wD === zD[0] && pD === zD[1] && sD === zD[2]
        },
        sD = DD.find((DD => pD(DD) || Dp(DD.box, zD) >= 0));
      if (!sD) return null;
      const KD = function(DD, zD, wD) {
        const {
          w: pD,
          h: sD,
          d: KD
        } = DD.box, rD = "reactor" === DD.kind ? `${YI}rxTitle` : `${YI}batTitle`;
        if (DD.formed) return {
          key: `${YI}lookPlanFormed`,
          kindKey: rD,
          w: pD,
          h: sD,
          d: KD,
          count: 0
        };
        let LD = 0,
          cD = 0;
        for (let RD = 0; RD < tw(DD.box); RD++) {
          const zD = wD(qw(DD.box, RD)),
            pD = null === zD ? "ok" : Kp(DD.kind, zp(DD.box, RD), zD);
          LD += "missing" === pD ? 1 : 0, cD += "wrong" === pD || "blocked" === pD ? 1 : 0
        }
        const gD = function(DD, zD, wD) {
          if (zD < 0 || null === wD) return;
          const pD = zp(DD.box, zD),
            sD = Kp(DD.kind, pD, wD);
          return "blocked" === sD ? `${YI}lookWhy_blocked` : "wrong" === sD ? "ctrl" === pD ? `${YI}lookWhy_ctrl` : `${YI}lookWhy_reactor_${pD}` : void 0
        }(DD, Dp(DD.box, zD), wD([zD[0], zD[1], zD[2]]));
        if (LD > 0) return {
          key: `${YI}lookPlanToBuild`,
          kindKey: rD,
          w: pD,
          h: sD,
          d: KD,
          count: LD,
          why: gD
        };
        if (cD > 0) return {
          key: `${YI}lookPlanTakeOut`,
          kindKey: rD,
          w: pD,
          h: sD,
          d: KD,
          count: cD,
          why: gD
        };
        return {
          key: "reactor" === DD.kind ? `${YI}lookPlanNoRods` : `${YI}lookPlanDone`,
          kindKey: rD,
          w: pD,
          h: sD,
          d: KD,
          count: 0
        }
      }(sD, zD, wD);
      return "reactor" === sD.kind && pD(sD) ? {
        ...KD,
        ctrl: !0
      } : KD
    }

    function qI(DD, zD) {
      return DD === zD || null !== DD && null !== zD && DD.key === zD.key && DD.kindKey === zD.kindKey && DD.w === zD.w && DD.h === zD.h && DD.d === zD.d && DD.count === zD.count && DD.why === zD.why && DD.ctrl === zD.ctrl
    }

    function DB() {
      return performance.now()
    }
    class zB {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DB;
        this.ticket = DD, this.sent = zD, this.backstopMs = wD, this.now = pD, this.queuedAt = void 0, this.queuedAt = pD()
      }
      answered() {
        const DD = this.now(),
          zD = this.sent.leftAt(this.ticket);
        return null !== zD && DD - zD > 4e3 || DD - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class wB {
      constructor() {
        this.echoes = []
      }
      add(DD) {
        this.echoes = this.echoes.filter((DD => !DD.answered())), this.echoes.push(DD)
      }
      answered() {
        var DD, zD;
        return null === (DD = null === (zD = this.echoes.at(-1)) || void 0 === zD ? void 0 : zD.answered()) || void 0 === DD || DD
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((DD => DD.answered()))
      }
      age() {
        var DD, zD;
        return null !== (DD = null === (zD = this.echoes.at(-1)) || void 0 === zD ? void 0 : zD.age()) && void 0 !== DD ? DD : null
      }
      clear() {
        this.echoes = []
      }
    }
    class pB {
      constructor(DD) {
        this.send = DD, this.value = null, this.sent = null, this.echoes = new wB, this.down = !1, this.timer = null
      }
      shown(DD) {
        return null === this.value ? DD : this.down || this.value !== this.sent ? this.value : DD === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), DD) : this.value
      }
      pendingFor(DD) {
        return null !== this.value && this.value === this.sent && DD !== this.value ? this.echoes.age() : null
      }
      assume(DD, zD) {
        this.disarm(), this.down = !1, this.value = DD, this.sent = DD, this.echoes.clear(), this.echoes.add(zD)
      }
      press() {
        this.down = !0
      }
      drag(DD) {
        this.value = DD, this.arm(this.down ? 1e3 : 400)
      }
      release() {
        this.down = !1, this.flush()
      }
      flush() {
        this.disarm(), null !== this.value && this.value !== this.sent && (this.sent = this.value, this.echoes.add(this.send(this.value)))
      }
      clear() {
        this.disarm(), this.value = null, this.sent = null, this.echoes.clear(), this.down = !1
      }
      arm(DD) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), DD)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class sB {
      constructor() {
        this.pending = new Map
      }
      set(DD, zD, wD) {
        var pD;
        const sD = null !== (pD = this.pending.get(DD)) && void 0 !== pD ? pD : {
          on: zD,
          echoes: new wB
        };
        sD.on = zD, sD.echoes.add(wD), this.pending.set(DD, sD)
      }
      shown(DD) {
        let zD = DD;
        for (const [wD, {
            on: pD,
            echoes: sD
          }] of this.pending) 0 !== (DD & wD) === pD && sD.agreeCounts() || sD.answered() ? this.pending.delete(wD) : zD = pD ? zD | wD : zD & ~wD;
        return zD
      }
      pendingMask() {
        let DD = 0;
        for (const zD of this.pending.keys()) DD |= zD;
        return DD
      }
      pendingFor(DD) {
        let zD = null;
        for (const [pD, {
            on: sD,
            echoes: KD
          }] of this.pending) {
          if (void 0 !== DD && 0 !== (DD & pD) === sD) continue;
          const rD = KD.age();
          var wD;
          if (null !== rD) zD = Math.max(null !== (wD = zD) && void 0 !== wD ? wD : 0, rD)
        }
        return zD
      }
      clear() {
        this.pending.clear()
      }
    }
    class KB {
      constructor() {
        this.dims = null, this.echoes = new wB, this.unmet = null
      }
      shown(DD) {
        var zD;
        return this.dims && (rB(this.dims, DD) && this.echoes.agreeCounts() || this.echoes.answered()) && (rB(this.dims, DD) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (zD = this.dims) && void 0 !== zD ? zD : DD
      }
      takeUnmet() {
        const DD = this.unmet;
        return this.unmet = null, DD
      }
      set(DD, zD) {
        this.dims = DD, this.echoes.add(zD)
      }
      pendingFor(DD) {
        return null === this.dims || DD && rB(this.dims, DD) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function rB(DD, zD) {
      return DD[0] === zD[0] && DD[1] === zD[1] && DD[2] === zD[2]
    }
    class LB {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DB;
        this.now = DD, this.taps = new Map
      }
      tap(DD, zD, wD) {
        return !this.busy(DD) && (this.taps.set(DD, {
          at: this.now(),
          done: zD
        }), wD(), !0)
      }
      settle(DD) {
        for (const [zD, wD] of [...this.taps]) wD.done(DD) && this.taps.delete(zD)
      }
      busy(DD) {
        const zD = this.taps.get(DD);
        return !!zD && (!(this.now() - zD.at >= 3e3) || (this.taps.delete(DD), !1))
      }
      busyIds() {
        const DD = new Set;
        for (const zD of [...this.taps.keys()]) this.busy(zD) && DD.add(zD);
        return DD
      }
      clear() {
        this.taps.clear()
      }
    }

    function cB(DD) {
      return {
        send: zD => DD.track(zD),
        sendUrgent: (zD, wD) => DD.track(zD, {
          urgent: !0,
          supersedes: wD
        }),
        leftAt: zD => DD.leftAt(zD),
        holdReserve: () => DD.holdUrgentReserve(),
        answerMs: Wr
      }
    }

    function gB() {
      return performance.now()
    }

    function RB(DD) {
      const zD = DD.baf2RxNeed.map((DD => {
        let [zD, wD] = DD;
        return [zD, wD]
      }));
      return JSON.stringify([DD.baf2RxFormed, zD, DD.baf2RxBad, DD.baf2RxCells])
    }

    function AB(DD, zD) {
      const wD = 0 !== (zD & Uz),
        pD = 0 !== (DD.baf2RxFlags & Uz);
      return !wD || pD || "running" !== DD.baf2RxState && "idle" !== DD.baf2RxState ? !wD && pD && "scram" === DD.baf2RxState && DD.baf2RxFuel > 0 ? "idle" : DD.baf2RxState : "scram"
    }

    function UB(DD) {
      return JSON.stringify([DD.baf2BatFormed, DD.baf2BatNeed, DD.baf2BatBad])
    }

    function fB(DD) {
      return DD.join(",")
    }
    class IB {
      constructor() {
        this.listeners = new Set
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class BB {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(DD, zD) {
        this.lastAt = DD, this.lastUntil = DD + zD
      }
      answered(DD) {
        return this.lastAt >= DD || DD < this.lastUntil
      }
    }
    class GB {
      constructor(DD, zD) {
        this.link = DD, this.now = zD, this.hold = new KB, this.picked = null, this.notTaken = null
      }
      shown(DD) {
        const zD = this.hold.shown(DD);
        if (this.hold.takeUnmet() && this.picked) {
          var wD;
          const {
            plans: zD,
            ctrl: pD,
            at: sD
          } = this.picked;
          this.picked = null, zD.unpredict(pD), null === (wD = this.notTaken) || void 0 === wD || wD.call(this, DD, sD)
        }
        return zD
      }
      pendingFor(DD) {
        return this.hold.pendingFor(DD)
      }
      HU(DD, zD, wD) {
        DD.predictSize(zD, wD), this.picked = {
          plans: DD,
          ctrl: zD,
          at: this.now()
        };
        const pD = this.link.send(Az(zD, "plan", ...wD));
        this.hold.set(wD, new zB(pD, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class hB {
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gB;
        this.plans = DD, this.readInterior = zD, this.link = wD, this.now = pD, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new sB, this.throttle = void 0, this.oneShots = void 0, this.listeners = new IB, this.redraw = null, this.releaseReserve = null, this.size = new GB(wD, pD), this.oneShots = new LB(pD), this.throttle = new pB((DD => this.echo(this.link.send(this.command("throttle", DD)))))
      }
      set(DD) {
        !DD.baf2RxOpen && this.raw && fB(this.raw.baf2RxAt) === fB(DD.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(DD), this.KG(DD)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(DD) {
        this.size.notTaken = DD
      }
      resize(DD) {
        this.raw && (this.size.HU(this.plans, this.raw.baf2RxAt, DD), this.KG(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const DD = this.raw.baf2RxAt;
        this.plans.setStarter(DD, !this.plans.showsStarter(DD)), this.KG(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.KG(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.KG(this.raw)
      }
      send(DD) {
        if (this.raw) {
          for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
          this.link.send(this.command(DD, ...wD))
        }
      }
      tap(DD, zD) {
        this.raw && this.oneShots.tap(DD, function(DD, zD) {
          if ("start" === DD) return DD => 0 === (DD.baf2RxFlags & Uz);
          if ("odConfirm" === DD) return DD => 0 !== (DD.baf2RxFlags & fz);
          const wD = RB(zD);
          return DD => RB(DD) !== wD
        }(DD, this.raw), zD) && ("start" === DD && (this.startedAt = this.now()), this.KG(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Uz, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(DD, zD) {
        if (!this.raw) return;
        const wD = DD === Uz ? this.command(zD ? "scram" : "start") : this.command("od", zD ? 1 : 0),
          pD = zD && DD === Uz,
          sD = `${Rz} ${this.raw.baf2RxAt.join(" ")} `,
          KD = this.echo(pD ? this.link.sendUrgent(wD, (DD => {
            const zD = DD.startsWith(sD) ? DD.slice(sD.length).split(" ")[0] : null;
            return "throttle" === zD || "start" === zD
          })) : this.link.send(wD));
        this.flags.set(DD, zD, KD), pD && this.throttle.assume(0, KD), this.KG(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(DD) {
        this.throttle.drag(DD), this.raw && this.KG(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.KG(this.raw)
      }
      subscribe(DD) {
        return this.listeners.subscribe(DD)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var DD;
        this.throttle.release(), null === (DD = this.releaseReserve) || void 0 === DD || DD.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(DD) {
        for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
        return Az(this.raw.baf2RxAt, DD, ...wD)
      }
      echo(DD) {
        return new zB(DD, this.link, this.link.answerMs, this.now)
      }
      KG(DD) {
        var zD;
        this.raw = DD;
        const wD = this.flags.shown(DD.baf2RxFlags),
          pD = {
            ...DD,
            baf2RxFlags: wD,
            baf2RxTarget: this.throttle.shown(DD.baf2RxTarget),
            baf2RxState: AB(DD, wD)
          },
          sD = this.size.shown(pD.baf2RxDims),
          KD = this.throttle.pendingFor(),
          rD = [this.throttle.pendingFor(DD.baf2RxTarget), this.flags.pendingFor(DD.baf2RxFlags), this.size.pendingFor(DD.baf2RxDims)].filter((DD => null !== DD)),
          LD = rD.length > 0 ? Math.max(...rD) : null,
          cD = this.oneShots.busyIds(),
          gD = pD.baf2RxAt;
        let RD, AD, UD = null,
          fD = [Math.max(0, sD[0] - 2), Math.max(0, sD[1] - 2), Math.max(0, sD[2] - 2)];
        if (pD.baf2RxFormed) {
          const [DD, zD, wD] = pD.baf2RxDims;
          fD = [Math.max(0, DD - 2), Math.max(0, zD - 2), Math.max(0, wD - 2)], RD = Array.from(pD.baf2RxCells, Number), AD = `${fD.join(",")}:${pD.baf2RxCells}`
        } else {
          var ID;
          const DD = null === (ID = this.plans.planAt(gD)) || void 0 === ID ? void 0 : ID.box,
            zD = DD ? aw(DD, "reactor", ...sD) : ew(gD, 1, ...sD, ow("reactor", sD[0])),
            wD = this.readInterior(zD);
          UD = pc(fD, wD), RD = wD, AD = `${fD.join(",")}:${wD.join("")}`
        }(null === (zD = this.looksOf) || void 0 === zD ? void 0 : zD.key) !== AD && (this.looksOf = {
          key: AD,
          looks: gc(fD, RD)
        }), this.view = {
          status: pD,
          dims: sD,
          plan: UD,
          inner: fD,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(gD),
          odConfirmed: this.odConfirmed || 0 !== (pD.baf2RxFlags & Mz),
          guide: this.plans.guideOn(),
          throttlePending: null !== KD,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== LD && LD >= 5e3,
          busy: cD,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== LD || cD.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.KG(this.raw)
        }), 250))
      }
    }
    class nB {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gB;
        this.plans = DD, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new IB, this.redraw = null, this.size = new GB(zD, wD), this.oneShots = new LB(wD)
      }
      set(DD) {
        !DD.baf2BatOpen && this.view && fB(this.view.status.baf2BatAt) === fB(DD.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(DD), this.KG(DD)
      }
      tap(DD, zD) {
        if (!this.view) return;
        const wD = UB(this.view.status);
        this.oneShots.tap(DD, (DD => UB(DD) !== wD), zD) && this.KG(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(DD) {
        this.size.notTaken = DD
      }
      resize(DD) {
        this.view && (this.size.HU(this.plans, this.view.status.baf2BatAt, DD), this.KG(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.KG(this.view.status)
      }
      subscribe(DD) {
        return this.listeners.subscribe(DD)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      KG(DD) {
        const zD = this.size.shown(DD.baf2BatDims),
          wD = this.oneShots.busyIds();
        this.view = {
          status: DD,
          dims: zD,
          bA: Qc(zD, DD.baf2BatDims) ? DD.baf2BatCapacity : Uc(...zD),
          guide: this.plans.guideOn(),
          busy: wD
        }, this.listeners.notify(), wD.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.KG(this.view.status)
        }), 250))
      }
    }
    const MB = "buildAFactory2Game:";

    function OB() {
      var DD;
      const zD = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!zD) return null;
      const wD = zD.querySelector(".ExitButton");
      return function(DD, zD) {
        const wD = zD ? zD.left - 8 : DD.right;
        return {
          left: DD.left,
          top: DD.top,
          width: Math.max(0, wD - DD.left),
          height: DD.height
        }
      }(zD.getBoundingClientRect(), null !== (DD = null === wD || void 0 === wD ? void 0 : wD.getBoundingClientRect()) && void 0 !== DD ? DD : null)
    }
    const JB = (0, pD.memo)((function(DD) {
      let {
        store: zD
      } = DD;
      const {
        t: wD
      } = (0, Ts.E)(), [sD, KD] = (0, pD.useState)((() => zD.get())), [rD, LD] = (0, pD.useState)((() => performance.now()));
      (0, pD.useEffect)((() => (KD(zD.get()), zD.subscribe((() => {
        KD(zD.get()), LD(performance.now())
      })))), [zD]);
      const {
        alarm: cD,
        boomAt: gD
      } = sD, RD = null !== cD && null !== cD.secs, [AD, UD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        if (!RD) return;
        UD(OB());
        const DD = setInterval((() => {
          LD(performance.now()), UD(OB())
        }), 250);
        return () => {
          clearInterval(DD)
        }
      }), [RD]);
      const [fD, ID] = (0, pD.useState)(!1);
      return (0, pD.useEffect)((() => {
        if (gD === -1 / 0) return;
        ID(!0);
        const DD = setTimeout((() => {
          ID(!1)
        }), 1300);
        return () => {
          clearTimeout(DD)
        }
      }), [gD]), (0, xK.jsxs)(xK.Fragment, {
        children: [null !== cD && (0, xK.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: wD(cD.hot ? `${MB}rxAlarmSiren` : `${MB}rxAlarmDamaged`, {
            amount: String(cD.damage)
          })
        }), null !== cD && null !== cD.secs && (0, xK.jsx)("div", {
          className: AD ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== AD && void 0 !== AD ? AD : void 0,
          "aria-live": "assertive",
          children: wD(`${MB}rxAlarmCountdown`, {
            amount: String((BD = cD.secs, GD = rD - cD.receivedAt, Math.max(1, Math.ceil(BD - GD / 1e3))))
          })
        }), fD && (0, xK.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var BD, GD
    }));
    class EB {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      bJ(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const wD = DD.baf2RxAlarmAt.join(",");
        let pD = this.snapshot.boomAt;
        if (DD.baf2RxAlarmBoom) this.byReactor.delete(wD), pD = zD;
        else if (DD.baf2RxAlarmDamage <= 0) this.byReactor.delete(wD);
        else {
          var sD;
          this.byReactor.set(wD, {
            damage: DD.baf2RxAlarmDamage,
            secs: null !== (sD = DD.baf2RxAlarmSecs) && void 0 !== sD ? sD : null,
            hot: !0 === DD.baf2RxAlarmHot,
            receivedAt: zD
          })
        }
        this.KG(pD)
      }
      retain(DD) {
        let zD = !1;
        for (const wD of [...this.byReactor.keys()]) DD.has(wD) || (this.byReactor.delete(wD), zD = !0);
        zD && this.KG(this.snapshot.boomAt)
      }
      has(DD) {
        return this.byReactor.has(DD)
      }
      get() {
        return this.snapshot
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      KG(DD) {
        let zD = null;
        for (const wD of this.byReactor.values())(!zD || wD.damage > zD.damage) && (zD = wD);
        this.snapshot = {
          alarm: zD,
          boomAt: DD
        };
        for (const wD of this.listeners) wD()
      }
    }
    const QB = {
      formed: {
        colour: [1, 1, .85],
        ms: 1200,
        thick: .18
      },
      on: {
        colour: [.45, 1, .35],
        ms: 900,
        thick: .14
      }
    };

    function XB(DD) {
      return [DD[0], DD[1], DD[2]]
    }

    function VB(DD) {
      return `${DD[0]},${DD[1]},${DD[2]}`
    }
    class PB {
      constructor(DD) {
        if (this.plans = DD, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var DD;
            return {
              active: this.glows.flatMap((DD => {
                let {
                  record: zD
                } = DD;
                return zD ? [zD] : []
              })),
              log: [...null !== (DD = this.devLog) && void 0 !== DD ? DD : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var DD;
        return null !== (DD = this.devLog) && void 0 !== DD ? DD : []
      }
      check(DD, zD, wD) {
        const pD = new Set(zD.map((DD => VB(DD.box.ctrl))));
        for (const rD of function(DD, zD) {
            const wD = [],
              pD = new Map(DD);
            DD.clear();
            for (const sD of zD) {
              const zD = hI(sD.box.ctrl),
                KD = sD.formed ? sD.level : 0;
              DD.set(zD, KD), KD > 0 && 0 === pD.get(zD) && wD.push(sD)
            }
            return wD
          }(this.levels, this.plans.all())) pD.has(VB(rD.box.ctrl)) && this.show(DD, rD, "on", wD);
        const sD = this.plans.lastFormed();
        if (null === sD || sD.receivedAt <= this.flashedAt) return null;
        this.flashedAt = sD.receivedAt;
        const KD = function(DD, zD) {
          var wD;
          const pD = hI(DD);
          return null !== (wD = zD.find((DD => hI(DD.box.ctrl) === pD))) && void 0 !== wD ? wD : null
        }(sD.ctrl, zD);
        return KD && this.show(DD, KD, "formed", wD), KD
      }
      fade(DD, zD) {
        0 !== this.glows.length && (this.glows = this.glows.filter((wD => {
          let {
            mesh: pD,
            glow: sD,
            startMs: KD,
            record: rD
          } = wD;
          const LD = (zD - KD) / QB[sD].ms;
          return LD >= 1 ? (DD.disposeGameMesh(pD), rD && (rD.endMs = zD), !1) : (DD.setGameMesh(pD, {
            visibility: "formed" === sD ? 1 - LD : Math.sin(Math.PI * LD)
          }), !0)
        })))
      }
      dispose(DD) {
        for (const {
            mesh: wD
          }
          of this.glows) DD.disposeGameMesh(wD);
        this.glows = [], this.levels.clear();
        const zD = "undefined" !== typeof window ? window : null;
        (null === zD || void 0 === zD ? void 0 : zD.baf2Glows) === this.devAccessor && delete zD.baf2Glows
      }
      show(DD, zD, wD, pD) {
        const {
          lo: sD,
          hi: KD
        } = ic(zD.box);
        let rD = null;
        this.devLog && (rD = {
          glow: wD,
          ctrl: XB(zD.box.ctrl),
          lo: XB(sD),
          hi: XB(KD),
          startMs: pD,
          endMs: null
        }, this.devLog.push(rD), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(DD, wD, lc(sD, KD, QB[wD].thick)),
          glow: wD,
          startMs: pD,
          record: rD
        })
      }
      build(DD, zD, wD) {
        const pD = QI(DD, wD, {
          rgb: QB[zD].colour,
          alpha: 1
        });
        return DD.setGameMesh(pD, {
          visibility: 0
        }), pD
      }
    }
    const CB = 1 / .6,
      xB = {
        colours: [
          [150, 150, 156],
          [104, 104, 110]
        ],
        alpha: .55,
        size: [.16, .3],
        life: [1.2, 2],
        power: [.3, .6],
        lift: .15,
        spread: .15,
        count: 1,
        blendMode: NL.f.Standard,
        soft: !0
      },
      TB = {
        ...xB,
        size: [.25, .4],
        count: 2
      };

    function bB(DD) {
      return {
        colours: [DD, DD],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: NL.f.Add,
        soft: !1
      }
    }
    const jB = bB([150, 225, 255]),
      dB = bB([185, 145, 255]),
      SB = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function iB(DD) {
      const zD = Sz[DD];
      return null === zD.fuelSlot || sw(zD) ? SB.includes(DD) ? dB : jB : xB
    }
    const lB = {
        kind: "smokePuff"
      },
      WB = [.2, .025, .2];

    function NB(DD, zD) {
      const [
        [wD, pD, sD],
        [KD, rD, LD]
      ] = DD.colours;
      return {
        texture: DD.soft ? lB : "square_particle",
        bA: zD,
        minLifeTime: DD.life[0] / CB,
        maxLifeTime: DD.life[1] / CB,
        minEmitPower: DD.power[0] * CB,
        maxEmitPower: DD.power[1] * CB,
        minSize: DD.size[0],
        maxSize: DD.size[1],
        emitRate: 0,
        gravity: [0, DD.lift * CB * CB, 0],
        dir1: [-DD.spread, 1, -DD.spread],
        dir2: [DD.spread, 1, DD.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [wD, pD, sD, DD.alpha],
          maxColor: [KD, rD, LD, DD.alpha]
        }, {
          timeFraction: 1,
          minColor: [wD, pD, sD, 0],
          maxColor: [KD, rD, LD, 0]
        }],
        blendMode: DD.blendMode
      }
    }
    class ZB {
      constructor(DD) {
        this.fixed = DD, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(DD, zD, wD) {
        var pD;
        if (wD === this.lastFrame) return !1;
        this.lastFrame = wD;
        const sD = this.at;
        sD[0] = zD[0] + .5, sD[1] = zD[1] + 1.025, sD[2] = zD[2] + .5;
        const KD = null !== (pD = this.fixed) && void 0 !== pD ? pD : LD() ? TB : xB;
        let rD = this.particles.get(KD);
        return rD || (rD = DD.createParticles(function(DD) {
          return NB(DD, Math.ceil(12 * DD.count * DD.life[1]) + DD.count)
        }(KD), {
          pos: sD,
          half: WB
        }), this.particles.set(KD, rD)), rD.moveTo(sD), rD.emit(KD.count), !0
      }
      dispose() {
        for (const DD of this.particles.values()) DD.stop();
        this.particles.clear()
      }
    }
    class yB {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(DD) {
        this.indexed = !0;
        for (const zD of Cz) {
          const wD = iB(zD);
          for (let pD = 1; pD <= 4; pD++) {
            const sD = DD.blockNameToBlockId(`${zD}|meta|rot${pD}|Running`, !0);
            if (null === sD) continue;
            let KD = this.pufferIndexByStyle.get(wD);
            void 0 === KD && (KD = this.pufferList.push(new ZB(wD === xB ? null : wD)) - 1, this.pufferIndexByStyle.set(wD, KD)), this.pufferIndexById[sD] = KD + 1
          }
        }
      }
      onAfterRender(DD, zD) {
        this.indexed || this.index(DD);
        const wD = performance.now(),
          pD = 0 === this.lastMs ? 0 : Math.min(wD - this.lastMs, 250) / 1e3;
        this.lastMs = wD, this.frame++, DD.particlesEnabled() ? (this.scan(DD, zD), this.puff(DD, pD)) : this.sources = []
      }
      dispose() {
        for (const DD of this.pufferList) DD.dispose();
        this.sources = [], this.found = []
      }
      scan(DD, zD) {
        0 === this.scanRow && (this.origin = [Math.floor(zD[0]) - 12, Math.floor(zD[1]) - 6, Math.floor(zD[2]) - 12]);
        const wD = Math.min(this.scanRow + 16, 325),
          [pD, sD, KD] = this.origin,
          rD = this.hits;
        rD.length = 0;
        for (let LD = this.scanRow; LD < wD; LD++) {
          const zD = pD + LD % 25,
            wD = sD + Math.floor(LD / 25);
          DD.scanBlocks(zD, wD, KD, zD + 1, wD + 1, KD + 25, this.pufferIndexById, rD)
        }
        for (let LD = 0; LD < rD.length; LD += 4) {
          const DD = rD[LD + 3];
          this.found.push({
            pos: [rD[LD], rD[LD + 1], rD[LD + 2]],
            fR: DD,
            puffer: this.pufferList[this.pufferIndexById[DD] - 1]
          })
        }
        this.scanRow = wD, 325 === wD && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(DD, zD) {
        const wD = this.sources.length;
        if (0 !== wD) {
          this.budget = Math.min(this.budget + Math.min(wD / 1.2, 12) * zD, 2);
          for (let zD = 0; zD < wD && this.budget >= 1; zD++) {
            const zD = this.sources[this.cursor % wD];
            this.cursor = (this.cursor + 1) % wD, DD.getBlockId(zD.pos[0], zD.pos[1], zD.pos[2]) === zD.fR && (zD.puffer.puff(DD, zD.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const kB = {
        ...bB([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      mB = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function eB(DD) {
      return 0 === DD.spots.length ? 0 : Math.min(1 * DD.level, 4)
    }

    function oB(DD) {
      return 0 === DD.glass.length ? 0 : Math.min(.75 * DD.level, 3)
    }

    function aB(DD) {
      return `${DD.ctrl.join(",")}:${DD.rot}:${DD.cu},${DD.cv}:${DD.w},${DD.h},${DD.d}`
    }

    function uB(DD, zD) {
      const wD = zD.w - 2,
        pD = zD.h - 2,
        sD = zD.d - 2,
        KD = [];
      for (let rD = 0; rD < wD * pD * sD; rD++) {
        const LD = rD % wD,
          cD = Math.floor(rD / wD) % sD,
          gD = Math.floor(rD / (wD * sD));
        if (LD > 0 && LD < wD - 1 && cD > 0 && cD < sD - 1 && gD > 0 && gD < pD - 1) continue;
        const RD = qw(zD, pp(zD, rD)),
          AD = kI(DD, RD);
        if (null !== AD && "Fuel Rod" === jw(AD))
          for (const zD of mB) {
            const wD = [RD[0] + zD[0], RD[1] + zD[1], RD[2] + zD[2]];
            tB(DD, wD) && KD.push(FB(wD, zD))
          }
      }
      return KD
    }

    function vB(DD, zD) {
      const {
        lo: wD,
        hi: pD
      } = ic(zD), sD = [];
      for (let KD = wD[0]; KD < pD[0]; KD++)
        for (let zD = wD[1]; zD < pD[1]; zD++) {
          const rD = KD === wD[0] || KD === pD[0] - 1 || zD === wD[1] || zD === pD[1] - 1 ? 1 : Math.max(1, pD[2] - 1 - wD[2]);
          for (let LD = wD[2]; LD < pD[2]; LD += rD) {
            const rD = [KD, zD, LD];
            if (!tB(DD, rD)) continue;
            const cD = KD === wD[0] ? mB[1] : KD === pD[0] - 1 ? mB[0] : LD === wD[2] ? mB[5] : LD === pD[2] - 1 ? mB[4] : zD === wD[1] ? mB[3] : mB[2];
            sD.push(FB(rD, cD))
          }
        }
      return sD
    }

    function tB(DD, zD) {
      const wD = kI(DD, zD);
      return null !== wD && "Reactor Glass" === jw(wD)
    }

    function FB(DD, zD) {
      return [
        [DD[0] + .5 + .55 * zD[0], DD[1] + .5 + .55 * zD[1], DD[2] + .5 + .55 * zD[2]],
        [0 === zD[0] ? .4 : .02, 0 === zD[1] ? .4 : .02, 0 === zD[2] ? .4 : .02]
      ]
    }
    class YB {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(DD, zD, wD, pD) {
        const sD = [],
          KD = new Set;
        for (const gD of zD) {
          var rD, LD, cD;
          const {
            box: zD
          } = gD;
          if ("reactor" !== gD.kind || gD.level <= 0 || (zD.ctrl[0] - wD[0]) ** 2 + (zD.ctrl[1] - wD[1]) ** 2 + (zD.ctrl[2] - wD[2]) ** 2 > 576) continue;
          const RD = aB(zD);
          KD.add(RD);
          let AD = this.spots.get(RD);
          if ((!AD || pD - AD.at > 3e3) && (AD = {
              at: pD,
              spots: uB(DD, zD),
              glass: vB(DD, zD)
            }, this.spots.set(RD, AD)), 0 === AD.spots.length && 0 === AD.glass.length) continue;
          const UD = this.sparking.find((DD => DD.key === RD));
          sD.push({
            key: RD,
            level: gD.level,
            spots: AD.spots,
            glass: AD.glass,
            budget: null !== (rD = null === UD || void 0 === UD ? void 0 : UD.budget) && void 0 !== rD ? rD : 0,
            cursor: null !== (LD = null === UD || void 0 === UD ? void 0 : UD.cursor) && void 0 !== LD ? LD : 0,
            glassBudget: null !== (cD = null === UD || void 0 === UD ? void 0 : UD.glassBudget) && void 0 !== cD ? cD : 0
          })
        }
        for (const gD of this.spots.keys()) KD.has(gD) || this.spots.delete(gD);
        this.sparking = sD
      }
      emit(DD, zD, wD) {
        var pD;
        if (0 === this.sparking.length || !DD.particlesEnabled() || wD === this.lastFrame) return;
        this.lastFrame = wD;
        let sD = 0,
          KD = 0;
        for (const ID of this.sparking) sD += eB(ID), KD += oB(ID);
        const rD = sD > 8 ? 8 / sD : 1,
          LD = KD > 6 ? 6 / KD : 1;
        let cD, gD = null,
          RD = null;
        for (const ID of this.sparking) ID.budget = Math.min(ID.budget + eB(ID) * rD * zD, 2), ID.budget >= 1 && (!gD || ID.budget > gD.budget) && (gD = ID), ID.glassBudget = Math.min(ID.glassBudget + oB(ID) * LD * zD, 2), ID.glassBudget >= 1 && (!RD || ID.glassBudget > RD.glassBudget) && (RD = ID);
        if (gD) gD.budget--, cD = gD.spots[gD.cursor++ % gD.spots.length];
        else {
          if (!RD) return;
          RD.glassBudget--, cD = RD.glass[Math.floor(Math.random() * RD.glass.length)]
        }
        const [AD, UD] = cD, fD = null !== (pD = this.emitter) && void 0 !== pD ? pD : this.create(DD, AD, UD);
        fD.moveTo(AD, UD), fD.emit(kB.count)
      }
      dispose() {
        var DD;
        null === (DD = this.emitter) || void 0 === DD || DD.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(DD, zD, wD) {
        const pD = Math.ceil(14 * kB.count * kB.life[1]) + kB.count;
        return this.emitter = DD.createParticles(NB(kB, pD), {
          pos: zD,
          half: wD
        }), this.emitter
      }
    }
    const HB = [2, 3.2],
      qB = 1 / 3,
      DG = 1 / .6,
      zG = {
        texture: lB,
        bA: Math.ceil(18 * HB[1]) + 4,
        minLifeTime: HB[0] / DG,
        maxLifeTime: HB[1] / DG,
        minEmitPower: 1,
        maxEmitPower: 1.8333333333333335,
        minSize: .5,
        maxSize: .9,
        emitRate: 0,
        gravity: [0, .6944444444444445, 0],
        dir1: [-.2, 1, -.2],
        dir2: [.2, 1, .2],
        colorGradients: [{
          timeFraction: 0,
          minColor: [235, 245, 240, .55],
          maxColor: [215, 232, 226, .5]
        }, {
          timeFraction: 1,
          minColor: [235, 245, 240, 0],
          maxColor: [215, 232, 226, 0]
        }],
        blendMode: NL.f.Standard
      };
    class wG {
      constructor(DD) {
        this.plans = DD, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new YB, this.frame = 0, this.outline = new PB(DD)
      }
      onAfterRender(DD, zD, wD) {
        const pD = performance.now(),
          sD = 0 === this.lastMs ? 0 : Math.min(pD - this.lastMs, 250) / 1e3;
        if (this.lastMs = pD, this.outline.fade(DD, pD), this.puff(DD, sD, wD), this.sparks.emit(DD, sD, this.frame++), pD - this.lastCheckMs < 150) return;
        this.lastCheckMs = pD;
        const KD = this.plans.all().filter((DD => DD.formed && pG(DD.box.ctrl, wD) <= 4096));
        this.plumes = KD.filter((DD => "reactor" === DD.kind && DD.level > 0)).map((DD => ({
          box: DD.box,
          level: DD.level
        }))), this.updateHums(DD, zD, KD, wD), this.sparks.update(DD, KD, wD, pD), this.chimeFormed(DD, zD, KD, pD)
      }
      dispose(DD) {
        var zD;
        this.outline.dispose(DD), null === (zD = this.steam) || void 0 === zD || zD.dispose(), this.steam = null, this.sparks.dispose();
        for (const wD of this.hums.values()) wD.stop();
        this.hums.clear()
      }
      chimeFormed(DD, zD, wD, pD) {
        const sD = this.outline.check(DD, wD, pD);
        sD && DD.playSound(zD, "exp_levelup", .6, 1, {
          ws: [sD.box.ctrl[0] + .5, sD.box.ctrl[1], sD.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(DD, zD, wD) {
        const pD = this.plumes;
        if (0 === pD.length || !DD.particlesEnabled()) return void(this.plumeBudget = 0);
        const sD = pD.reduce(((DD, zD) => DD + 3 * zD.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + sD * zD, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let KD = this.plumeCursor % (sD / 3);
        this.plumeCursor++;
        let rD = pD[0];
        for (const AD of pD) {
          if (KD < AD.level) {
            rD = AD;
            break
          }
          KD -= AD.level
        }
        const {
          lo: LD,
          hi: cD
        } = ic(rD.box);
        if (function(DD, zD, wD) {
            const pD = Math.max(DD[0] - wD[0], 0, wD[0] - zD[0]),
              sD = Math.max(DD[2] - wD[2], 0, wD[2] - zD[2]);
            return Math.hypot(pD, wD[1] - zD[1], sD)
          }(LD, cD, wD) < 6 && Math.random() > qB) return;
        const gD = [(LD[0] + cD[0]) / 2, cD[1] + .05, (LD[2] + cD[2]) / 2],
          RD = [(cD[0] - LD[0]) / 2 - .5, .05, (cD[2] - LD[2]) / 2 - .5];
        this.steam ??= DD.createParticles(zG, {
          pos: gD,
          half: RD
        }), this.steam.moveTo(gD, RD), this.steam.emit(1)
      }
      updateHums(DD, zD, wD, pD) {
        const sD = new Map;
        for (const rD of wD) "reactor" === rD.kind && rD.level > 0 && pG(rD.box.ctrl, pD) <= 576 && sD.set(`${KD=rD.box.ctrl,`${KD[0]},${KD[1]},${KD[2]}`}:${rD.level}`, rD);
        var KD;
        for (const [rD, LD] of this.hums) sD.has(rD) || (LD.stop(), this.hums.delete(rD));
        for (const [rD, LD] of sD) {
          if (this.hums.has(rD)) continue;
          const {
            lo: wD,
            hi: pD
          } = ic(LD.box), sD = [(wD[0] + pD[0]) / 2, wD[1], (wD[2] + pD[2]) / 2], KD = DD.playSound(zD, "rocketEngineLoop", .08 + .06 * LD.level, .55, {
            ws: sD,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          KD && this.hums.set(rD, KD)
        }
      }
    }

    function pG(DD, zD) {
      return (DD[0] - zD[0]) ** 2 + (DD[1] - zD[1]) ** 2 + (DD[2] - zD[2]) ** 2
    }
    class sG {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      bJ(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const pD = [DD.baf2BombAt[0], DD.baf2BombAt[1], DD.baf2BombAt[2]],
          sD = DD.baf2BombR;
        if (DD.baf2BombBoom) {
          const DD = Math.hypot(zD[0] - pD[0], zD[1] - pD[1], zD[2] - pD[2]);
          this.KG({
            fuse: null,
            blast: {
              at: pD,
              r: sD,
              receivedAt: wD,
              distance: DD,
              flash: DD <= 3 * sD
            }
          })
        } else this.KG({
          ...this.snapshot,
          fuse: DD.baf2BombMs > 0 ? {
            at: pD,
            r: sD,
            endsAt: wD + DD.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      KG(DD) {
        this.snapshot = DD;
        for (const zD of this.listeners) zD()
      }
    }
    const KG = (0, pD.memo)((function(DD) {
      var zD;
      let {
        store: wD
      } = DD;
      const {
        t: sD
      } = (0, Ts.E)(), [KD, rD] = (0, pD.useState)((() => wD.get())), [LD, cD] = (0, pD.useState)((() => performance.now()));
      (0, pD.useEffect)((() => (rD(wD.get()), wD.subscribe((() => {
        rD(wD.get()), cD(performance.now())
      })))), [wD]);
      const {
        fuse: gD,
        blast: RD
      } = KD;
      (0, pD.useEffect)((() => {
        if (!gD) return;
        const DD = setInterval((() => {
          cD(performance.now())
        }), 250);
        return () => {
          clearInterval(DD)
        }
      }), [gD]);
      const [AD, UD] = (0, pD.useState)(!1);
      (0, pD.useEffect)((() => {
        if (null === RD || void 0 === RD || !RD.flash) return;
        UD(!0);
        const DD = setTimeout((() => {
          UD(!1)
        }), 2500);
        return () => {
          clearTimeout(DD)
        }
      }), [RD]);
      const fD = gD ? function(DD, zD) {
        return DD.endsAt <= zD ? 0 : Math.ceil((DD.endsAt - zD) / 1e3)
      }(gD, LD) : 0;
      return (0, xK.jsxs)(xK.Fragment, {
        children: [fD > 0 && (0, xK.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: sD("buildAFactory2Game:bombCountdown", {
            amount: String(fD),
            radius: String(null !== (zD = null === gD || void 0 === gD ? void 0 : gD.r) && void 0 !== zD ? zD : 0)
          })
        }), AD && (0, xK.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function rG(DD) {
      const zD = Math.min(4, Math.max(1, DD / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * DD / 4)),
        capSpread: Math.min(5 * DD / 8, 24 * zD),
        capThick: 6 * zD,
        stemHalfWidth: 3 * zD,
        puffScale: zD
      }
    }
    class LG {
      constructor() {
        this.Qg = !1
      }
      hold(DD) {
        DD.getCameraFar() < 1e3 && (DD.setCameraFar(1e3), this.Qg = !0)
      }
      release(DD) {
        this.Qg && (this.Qg = !1, DD.setCameraFar(null))
      }
    }
    const cG = 1 / .6,
      gG = [.2, .1, .2],
      RG = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      AG = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: NL.f.Standard,
        from: [
          [255, 170, 60, .95],
          [255, 120, 40, .9]
        ],
        to: [
          [90, 85, 80, 0],
          [70, 66, 62, 0]
        ],
        gravity: 0
      },
      UG = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: NL.f.Standard,
        from: [
          [255, 190, 110, .9],
          [200, 150, 110, .85]
        ],
        to: [
          [80, 76, 72, 0],
          [60, 58, 56, 0]
        ],
        gravity: .08
      },
      fG = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: NL.f.Standard,
        from: [
          [220, 200, 160, .85],
          [200, 180, 140, .8]
        ],
        to: [
          [170, 150, 120, 0],
          [150, 130, 110, 0]
        ],
        gravity: 0
      },
      IG = {
        texture: lB,
        bA: Math.ceil(120) + 4,
        minLifeTime: 1.62,
        maxLifeTime: 1.7999999999999998,
        minEmitPower: 33.333333333333336,
        maxEmitPower: 33.333333333333336,
        minSize: .6,
        maxSize: 1,
        emitRate: 0,
        colorGradients: [{
          timeFraction: 0,
          minColor: [140, 255, 100, .95],
          maxColor: [90, 255, 120, .9]
        }, {
          timeFraction: 1,
          minColor: [60, 200, 80, 0],
          maxColor: [40, 160, 60, 0]
        }],
        blendMode: NL.f.Add
      };
    class BG {
      constructor(DD) {
        this.store = DD, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new LG, this.timers = []
      }
      onAfterRender(DD, zD) {
        const wD = performance.now(),
          pD = 0 === this.lastMs ? 0 : Math.min(wD - this.lastMs, 250) / 1e3;
        this.lastMs = wD;
        const {
          fuse: sD,
          blast: KD
        } = this.store.get();
        null !== KD && KD !== this.shownBlast && (this.shownBlast = KD, this.startBlast(DD, zD, KD, wD));
        const rD = DD.particlesEnabled();
        null !== sD && sD.endsAt > wD && rD ? this.emitBeacon(DD, sD, pD, wD) : this.beaconBudget = 0, null !== this.cloud && (wD - this.cloud.startMs > 33e3 ? this.disposeCloud(DD) : (this.far.hold(DD), rD && this.emitCloud(DD, pD, wD)))
      }
      dispose(DD) {
        var zD;
        null === (zD = this.beacon) || void 0 === zD || zD.dispose(), this.beacon = null, this.disposeCloud(DD);
        for (const wD of this.timers) clearTimeout(wD);
        this.timers.length = 0
      }
      emitBeacon(DD, zD, wD, pD) {
        const sD = zD.endsAt - pD < 5e3 ? 350 : 1e3,
          KD = .5 + .5 * Math.sin(2 * Math.PI * pD / sD);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * KD * wD, 4), this.beaconBudget < 1) return;
        const rD = Math.floor(this.beaconBudget);
        this.beaconBudget -= rD;
        const [LD, cD, gD] = zD.at, RD = [LD + .5, cD + 1.1, gD + .5];
        this.beacon ??= DD.createParticles(IG, {
          pos: RD,
          half: gG
        }), this.beacon.moveTo(RD), this.beacon.emit(rD)
      }
      startBlast(DD, zD, wD, pD) {
        var sD;
        null === (sD = this.beacon) || void 0 === sD || sD.dispose(), this.beacon = null, this.disposeCloud(DD);
        const KD = (0, lL.isMobile)() ? .5 : 1;
        this.streams = [AG, UG, fG].map((DD => {
          const zD = Math.round(DD.count * KD);
          return {
            spec: DD,
            particles: null,
            rate: zD / ((DD.toMs - DD.fromMs) / 1e3),
            budget: 0,
            left: zD
          }
        })), this.cloud = {
          blast: wD,
          startMs: pD
        };
        const rD = Math.max(.25, 1 - wD.distance / (6 * wD.r)),
          LD = wD.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [wD, pD, sD] of RG) hG(DD, zD, wD, rD * pD, sD)
        }), LD))
      }
      emitCloud(DD, zD, wD) {
        const {
          blast: pD,
          startMs: sD
        } = this.cloud, KD = wD - sD, [rD, LD, cD] = pD.at, gD = rG(pD.r);
        for (const RD of this.streams) {
          const {
            spec: wD
          } = RD;
          if (RD.left <= 0 || KD < wD.fromMs) continue;
          RD.budget += RD.rate * zD;
          const sD = Math.min(Math.floor(RD.budget), RD.left);
          if (sD < 1) continue;
          RD.budget -= sD, RD.left -= sD;
          const AD = RD.particles ??= this.createStream(DD, wD, pD);
          if (wD === AG) {
            const DD = gD.stemHalfWidth;
            AD.moveTo([rD, LD + 1, cD], [DD, 1, DD])
          } else if (wD === UG) {
            const DD = gD.capSpread * Math.min(1, (KD - wD.fromMs) / 3e3),
              zD = Math.sqrt(Math.random()),
              pD = 2 * Math.random() * Math.PI,
              sD = Math.cos(pD) * zD,
              RD = Math.sin(pD) * zD,
              UD = rD + sD * DD,
              fD = cD + RD * DD,
              ID = gD.capThick,
              BD = LD + gD.capHeight + ID * (1 - zD * zD) * 2;
            AD.setDirections([.7 * sD, .05, .7 * RD], [sD, .2, RD]), AD.moveTo([UD, BD, fD], [ID, ID, ID])
          } else {
            this.ringAngle += 2.39996;
            const DD = Math.cos(this.ringAngle),
              zD = Math.sin(this.ringAngle);
            AD.setDirections([DD, .05, zD], [DD, .1, zD]), AD.moveTo([rD + 2 * DD, LD + .5, cD + 2 * zD], [0, .5, 0])
          }
          AD.emit(sD)
        }
      }
      createStream(DD, zD, wD) {
        const {
          r: pD
        } = wD, sD = Math.max(zD.life[0], pD / 25), KD = zD === fG ? [.9 * sD, sD] : zD.life, rD = rG(pD), LD = zD === fG ? 1 : rD.puffScale, cD = {
          texture: lB,
          bA: zD.count + 4,
          minLifeTime: KD[0] / cG,
          maxLifeTime: KD[1] / cG,
          minSize: zD.size[0] * LD,
          maxSize: zD.size[1] * LD,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, zD.gravity * cG * cG, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: zD.from[0],
            maxColor: zD.from[1]
          }, {
            timeFraction: .6,
            minColor: GG(zD.from[0], zD.to[0]),
            maxColor: GG(zD.from[1], zD.to[1])
          }, {
            timeFraction: 1,
            minColor: zD.to[0],
            maxColor: zD.to[1]
          }],
          blendMode: zD.blend
        };
        if (zD === AG) {
          const DD = rD.capHeight / ((KD[0] + KD[1]) / 2);
          cD.minEmitPower = .9 * DD * cG, cD.maxEmitPower = 1.05 * DD * cG, cD.dir1 = [-.1, 1, -.1], cD.dir2 = [.1, 1, .1]
        } else zD === UG ? (cD.minEmitPower = 1.2, cD.maxEmitPower = 2, cD.dir1 = [-1, .05, -1], cD.dir2 = [1, .2, 1]) : (cD.minEmitPower = 39.583333333333336, cD.maxEmitPower = 41.66666666666667, cD.dir1 = [1, 0, 0], cD.dir2 = [1, 0, 0]);
        return DD.createParticles(cD, {
          pos: wD.at
        })
      }
      disposeCloud(DD) {
        for (const wD of this.streams) {
          var zD;
          null === (zD = wD.particles) || void 0 === zD || zD.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(DD)
      }
    }

    function GG(DD, zD) {
      return [(DD[0] + zD[0]) / 2, (DD[1] + zD[1]) / 2, (DD[2] + zD[2]) / 2, .75 * DD[3]]
    }

    function hG(DD, zD, wD, pD, sD) {
      try {
        DD.playSound(zD, wD, pD, sD)
      } catch (KD) {
        console.error(KD)
      }
    }
    const nG = {
        bA: 720,
        perS: 100
      },
      MG = {
        bA: 320,
        perS: 44
      };
    class OG {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(DD, zD) {
        this.zone = {
          centre: [...DD.centre],
          r: DD.r,
          band: DD.band ? [DD.band[0], DD.band[1]] : void 0
        }, this.endsAt = zD
      }
      stop() {
        this.zone = null
      }
      bJ(DD, zD) {
        const {
          baf2FalloutMs: wD,
          baf2FalloutAt: pD,
          baf2FalloutR: sD,
          baf2FalloutY: KD
        } = DD;
        wD > 0 && pD && void 0 !== sD ? this.start({
          centre: pD,
          r: sD,
          band: KD
        }, zD + wD) : this.stop()
      }
      perS(DD, zD, wD) {
        const pD = this.zone;
        if (!pD) return 0;
        const sD = this.endsAt - DD;
        return sD <= 0 ? (this.zone = null, 0) : pD.band && (zD[1] < pD.band[0] || zD[1] > pD.band[1]) || Math.hypot(zD[0] - pD.centre[0], zD[2] - pD.centre[2]) > pD.r ? 0 : wD.perS * Math.min(1, sD / 5e3)
      }
    }
    const JG = [5, 7],
      EG = [24, 8, 24],
      QG = .5,
      XG = 1 / .6,
      VG = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class PG {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lL.isMobile)();
        this.state = new OG, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(DD) {
          return DD ? MG : nG
        }(DD)
      }
      startFallout(DD, zD) {
        this.state.start(DD, zD)
      }
      stopFallout() {
        this.state.stop()
      }
      bJ(DD) {
        this.state.bJ(DD, performance.now())
      }
      onAfterRender(DD, zD) {
        var wD;
        const pD = performance.now(),
          sD = 0 === this.lastMs ? 0 : Math.min(pD - this.lastMs, 250) / 1e3;
        this.lastMs = pD;
        const KD = this.state.perS(pD, zD, this.tier);
        if (KD <= 0 || !DD.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + KD * sD, KD / 4);
        const rD = Math.floor(this.budget);
        if (rD < 1) return;
        this.budget -= rD;
        const LD = this.at;
        LD[0] = zD[0], LD[1] = zD[1] + 12, LD[2] = zD[2];
        const cD = null !== (wD = this.systems) && void 0 !== wD ? wD : this.create(DD, LD),
          gD = this.amounts;
        gD[0] = 0, gD[1] = 0;
        for (let RD = 0; RD < rD; RD++) gD[Math.random() < .3 ? 1 : 0]++;
        for (let RD = 0; RD < cD.length; RD++) gD[RD] > 0 && (cD[RD].moveTo(LD, EG), cD[RD].emit(gD[RD]))
      }
      dispose() {
        for (const zD of null !== (DD = this.systems) && void 0 !== DD ? DD : []) {
          var DD;
          zD.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(DD, zD) {
        return this.systems = VG.map((wD => {
          let {
            rgba: [pD, sD, KD, rD],
            share: LD
          } = wD;
          const cD = {
            texture: "square_particle",
            bA: Math.ceil(this.tier.bA * LD),
            minLifeTime: JG[0] / XG,
            maxLifeTime: JG[1] / XG,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [QG, -1, QG],
            colorGradients: [{
              timeFraction: 0,
              minColor: [pD, sD, KD, 0]
            }, {
              timeFraction: .15,
              minColor: [pD, sD, KD, rD]
            }, {
              timeFraction: .8,
              minColor: [pD, sD, KD, rD]
            }, {
              timeFraction: 1,
              minColor: [pD, sD, KD, 0]
            }],
            blendMode: NL.f.Standard
          };
          return DD.createParticles(cD, {
            pos: zD,
            half: EG
          })
        })), this.systems
      }
    }
    const CG = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function xG(DD) {
      const zD = /\|rot(\d)/.exec(DD);
      return CG[zD ? Number(zD[1]) : 1]
    }
    var TG = wD(616),
      bG = wD(38448);
    const jG = new Set(TG.n);

    function dG(DD) {
      if (-2 !== DD.count) return null;
      const zD = eD(DD.item);
      return null !== zD && jG.has(zD) ? zD : null
    }

    function SG(DD) {
      const {
        width: zD,
        height: wD
      } = (0, bG.b)(DD).hitBoxDimensions;
      return .55 / Math.max(zD, wD)
    }

    function iG(DD, zD, wD) {
      if (!wD) return !1;
      const pD = DD[0] + .5 - zD[0],
        sD = DD[1] + .5 - zD[1],
        KD = DD[2] + .5 - zD[2];
      return pD * pD + sD * sD + KD * KD <= 576
    }

    function lG(DD, zD) {
      return Math.atan2(DD[0], DD[2]) + Math.PI + zD
    }

    function WG(DD, zD) {
      const wD = 2 * Math.PI;
      return (DD + wD * zD / 1e4) % wD
    }
    class NG {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = DD, this.now = zD, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = DD.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(DD, zD) {
        if (0 === this.farms.size) return;
        const wD = this.now(),
          pD = Number.isNaN(this.frameMs) ? 0 : Math.min(wD - this.frameMs, 100);
        this.frameMs = wD, wD - this.checkedMs >= 1e3 && (this.checkedMs = wD, this.check(DD, zD));
        for (const sD of this.farms.values()) sD.shown && sD.running && null !== sD.model && pD > 0 && (sD.spin = WG(sD.spin, pD), sD.model.setPose(sD.feet, lG(sD.front, sD.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const DD of this.farms.values()) this.drop(DD);
        this.farms.clear()
      }
      sync() {
        const DD = new Set;
        for (const zD of this.labels.list()) {
          const wD = dG(zD);
          if (null === wD) continue;
          DD.add(zD.key);
          const pD = this.farms.get(zD.key);
          if ((null === pD || void 0 === pD ? void 0 : pD.mob) === wD) continue;
          pD && this.drop(pD);
          const [sD, KD, rD] = zD.pos;
          this.farms.set(zD.key, {
            pos: zD.pos,
            feet: [sD + .5, KD + 1, rD + .5],
            mob: wD,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [zD, wD] of this.farms) DD.has(zD) || (this.drop(wD), this.farms.delete(zD));
        this.checkedMs = -1 / 0
      }
      check(DD, zD) {
        for (const wD of this.farms.values()) {
          const [pD, sD, KD] = wD.pos, rD = kI(DD, wD.pos);
          null !== rD && jw(rD) === iD && iG(wD.pos, zD, "Air" === kI(DD, [pD, sD + 1, KD])) ? (wD.running = rD.endsWith("|Running"), wD.front = xG(rD), null === wD.model && (wD.model = DD.createMobModel(wD.mob, SG(wD.mob)), null === wD.model) || (wD.model.setPose(wD.feet, lG(wD.front, wD.spin)), wD.shown || (wD.model.setVisible(!0), wD.shown = !0))) : (wD.shown && null !== wD.model && wD.model.setVisible(!1), wD.shown = !1)
        }
      }
      drop(DD) {
        var zD;
        null === (zD = DD.model) || void 0 === zD || zD.dispose(), DD.model = null, DD.shown = !1
      }
    }
    class ZG {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(DD) {
        var zD;
        this.island = DD.baf2ColIsland, this.islandSite = (zD = DD.baf2ColSite) && 8 === zD.length ? {
          spawnXZ: [zD[0], zD[1]],
          coreXZ: [zD[2], zD[3]],
          minXZ: [zD[4], zD[5]],
          maxXZ: [zD[6], zD[7]]
        } : null, this.views = DD.baf2ColList.map((DD => ({
          entry: cs(DD)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(DD) {
        this.status = DD, this.emit()
      }
      onOpen(DD) {
        this.openHeld = DD
      }
      heldAtOpen() {
        return this.openHeld
      }
      site() {
        return this.islandSite
      }
      colliders() {
        return this.views
      }
      entries() {
        return this.views.map((DD => DD.entry))
      }
      entryAtRoot(DD) {
        var zD;
        return null === (zD = this.views.find((zD => {
          let {
            entry: wD
          } = zD;
          return wD.focus[0] === DD[0] && wD.focus[1] === DD[1] + 1 && wD.focus[2] === DD[2]
        }))) || void 0 === zD ? void 0 : zD.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(DD, zD) {
        return mc(this.entries(), DD, zD)
      }
      lookSource() {
        return {
          handles: DD => fp(DD) >= 0 || Ip(DD),
          line: (DD, zD) => this.lookLine(DD, zD),
          version: () => this.beamsVersion
        }
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const DD of this.listeners) DD()
      }
    }
    const yG = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((DD => DD / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((DD => [DD, DD + 1, DD + 2, DD, DD + 2, DD + 3]))
    };

    function kG(DD, zD, wD, pD, sD, KD, rD) {
      let LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const cD = Math.cos(LD),
        gD = Math.sin(LD),
        RD = DD.positions.length / 3,
        {
          positions: AD,
          indices: UD
        } = yG;
      for (let fD = 0; fD < AD.length; fD += 3) {
        const LD = AD[fD] * sD,
          RD = AD[fD + 2] * rD;
        DD.positions.push(zD + LD * cD + RD * gD, wD + AD[fD + 1] * KD, pD - LD * gD + RD * cD)
      }
      for (const fD of UD) DD.indices.push(RD + fD)
    }

    function mG(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return zD < 1 ? {
        rgb: DD,
        alpha: zD
      } : {
        rgb: DD,
        alpha: 1,
        opaque: !0
      }
    }
    class eG {
      constructor(DD, zD) {
        this.style = DD, this.perSource = zD, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(DD) {
        this.sources = DD, 0 === DD.length && (this.budget = 0)
      }
      DU(DD, zD, wD) {
        const pD = this.sources.length;
        if (0 !== pD) {
          var sD, KD;
          this.budget = Math.min(this.budget + (sD = pD, KD = this.perSource, Math.min(sD * KD, pg) * zD), 2);
          for (let zD = 0; zD < pD && this.budget >= 1; zD++) {
            const zD = this.sources[this.cursor % pD];
            this.cursor = (this.cursor + 1) % pD;
            if (!(Math.max(Math.abs(zD.x - wD[0]), Math.abs(zD.y - wD[1]), Math.abs(zD.z - wD[2])) > 32)) return this.puff(DD, zD), void this.budget--
          }
        }
      }
      dispose() {
        var DD;
        null === (DD = this.particles) || void 0 === DD || DD.dispose(), this.particles = null, this.sources = []
      }
      puff(DD, zD) {
        let {
          x: wD,
          y: pD,
          z: sD,
          h: KD,
          faces: rD
        } = zD;
        const LD = function(DD, zD, wD, pD, sD) {
            const [KD, rD, LD] = sD[Math.floor(Math.random() * sD.length)], cD = .04, gD = (DD, zD, wD) => DD > 0 ? zD + wD + cD : DD < 0 ? zD - cD : zD + .1, RD = (DD, zD, wD) => DD > 0 ? zD + wD + cD : DD < 0 ? zD - cD : zD + wD - .1, AD = [gD(KD, DD, 1), gD(rD, zD, pD), gD(LD, wD, 1)], UD = [RD(KD, DD, 1), RD(rD, zD, pD), RD(LD, wD, 1)];
            return {
              pos: [(AD[0] + UD[0]) / 2, (AD[1] + UD[1]) / 2, (AD[2] + UD[2]) / 2],
              half: [(UD[0] - AD[0]) / 2, (UD[1] - AD[1]) / 2, (UD[2] - AD[2]) / 2],
              out: [KD, rD, LD]
            }
          }(wD, pD, sD, KD, rD),
          {
            style: cD
          } = this,
          gD = this.particles ??= DD.createParticles(NB(cD, Math.ceil(cD.count * pg * cD.life[1]) + 4), LD);
        gD.moveTo(LD.pos, LD.half);
        const [RD, AD, UD] = LD.out, fD = cD.spread;
        gD.setDirections([RD - fD, .6 + AD, UD - fD], [RD + fD, 1 + AD, UD + fD]), gD.emit(cD.count)
      }
    }
    const oG = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class aG {
      constructor() {
        this.green = new eG(Kg.green, zg), this.pink = new eG(Kg.pink, wg), this.colliders = [], this.lastMs = 0
      }
      setSources(DD) {
        this.colliders = DD;
        const zD = [],
          wD = [];
        for (const pD of DD) {
          const [DD, sD, KD] = pD.focus;
          zD.push({
            x: DD,
            y: sD - 1,
            z: KD,
            h: 2,
            faces: oG
          });
          for (let zD = 0; zD < 4; zD++) {
            if (!pD.live[zD]) continue;
            const [DD, sD, KD] = hp(pD.focus, zD, Lp.LASER_D), [rD, , LD] = Gp[zD], cD = oG.filter((DD => DD[0] !== rD || DD[2] !== LD || 0 !== DD[1]));
            wD.push({
              x: DD,
              y: sD,
              z: KD,
              h: 1,
              faces: cD
            })
          }
        }
        this.green.setSources(zD), this.pink.setSources(wD)
      }
      onAfterRender(DD) {
        const zD = performance.now(),
          wD = 0 === this.lastMs ? 0 : Math.min(zD - this.lastMs, 250) / 1e3;
        if (this.lastMs = zD, 0 === this.colliders.length || !DD.particlesEnabled()) return;
        const pD = DD.getCameraPosition();
        this.green.DU(DD, wD, pD), this.pink.DU(DD, wD, pD)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const uG = 1.04,
      vG = mG([1, 120 / 255, 220 / 255]),
      tG = mG([1, .25, .25], .35);
    class FG {
      constructor(DD) {
        this.store = DD, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new aG
      }
      onAfterRender(DD) {
        this.store.version() !== this.builtVersion && this.rebuild(DD);
        const zD = performance.now();
        for (const wD of this.beams) {
          const pD = 1 + .35 * Math.sin(zD / 700 * Math.PI * 2 + wD.phase);
          DD.setGameMesh(wD.mesh, {
            scale: [wD.alongX ? 1 : pD, pD, wD.alongX ? pD : 1]
          })
        }
        this.glow.onAfterRender(DD)
      }
      dispose(DD) {
        this.clear(DD), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(DD) {
        this.clear(DD), this.builtVersion = this.store.version();
        const zD = [];
        for (const {
            entry: wD
          }
          of this.store.colliders()) wD.on && wD.live.some(Boolean) && (this.addBeams(DD, wD), zD.push(wD)), wD.blockers.length > 0 && this.addMarkers(DD, wD);
        this.glow.setSources(zD)
      }
      addBeams(DD, zD) {
        const [wD, pD, sD] = zD.focus, KD = Dg - .25, rD = (.25 + Dg) / 2;
        for (let LD = 0; LD < 4; LD++) {
          if (!zD.live[LD]) continue;
          const [cD, , gD] = Gp[LD], RD = 0 !== cD, AD = {
            positions: [],
            indices: []
          };
          kG(AD, 0, 0, 0, RD ? KD : .2, .2, RD ? .2 : KD);
          const UD = [wD + .5 + cD * rD, pD + .5, sD + .5 + gD * rD],
            fD = DD.createGameMesh(AD, vG, UD);
          this.meshes.push(fD), this.beams.push({
            mesh: fD,
            alongX: RD,
            phase: LD * Math.PI / 2
          })
        }
      }
      addMarkers(DD, zD) {
        const wD = zD.blockers[0],
          pD = {
            positions: [],
            indices: []
          };
        for (const [sD, KD, rD] of zD.blockers) kG(pD, sD - wD[0] + .5, KD - wD[1] + .5, rD - wD[2] + .5, uG, uG, uG);
        this.meshes.push(DD.createGameMesh(pD, tG, wD))
      }
      clear(DD) {
        for (const zD of this.meshes) DD.disposeGameMesh(zD);
        this.meshes = [], this.beams = []
      }
    }
    const YG = [.56, .83, 1],
      HG = [1, .73, .08],
      qG = [1, .25, .25],
      Dh = [.85, .85, .85],
      zh = [.3, .45, .6];

    function wh(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const rD = sD / 2,
        LD = sD + KD;
      for (const cD of [-rD, rD])
        for (const sD of [-rD, rD]) kG(DD, zD, wD + cD, pD + sD, LD, KD, KD), kG(DD, zD + cD, wD, pD + sD, KD, LD, KD), kG(DD, zD + cD, wD + sD, pD, KD, KD, LD)
    }

    function ph(DD) {
      return zD => DD.isBlockInLoadedChunk(zD[0], zD[1], zD[2]) && 0 === DD.getBlockId(zD[0], zD[1], zD[2])
    }

    function sh(DD) {
      return DD.map((DD => {
        let {
          free: zD,
          blocked: wD,
          gaps: pD,
          supports: sD
        } = DD;
        return `${zD.join(";")}|${wD.join(";")}|${pD.join(";")}|${sD.join(";")}`
      })).join("/")
    }

    function Kh(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const KD = zD[0],
        rD = {
          positions: [],
          indices: []
        };
      for (const [LD, cD, gD] of zD) wh(rD, LD - KD[0] + .5, cD - KD[1] + .5, gD - KD[2] + .5, pD, sD);
      return DD.createGameMesh(rD, wD, KD)
    }
    class rh {
      constructor(DD) {
        this.store = DD, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(DD, zD, wD) {
        var pD;
        const sD = null === (pD = DD.zwD(zD)) || void 0 === pD ? void 0 : pD.name;
        if (sD !== gp && sD !== cp) return void("" !== this.shownKey && this.show(DD, "", []));
        const KD = performance.now();
        if (KD - this.lastCheckMs >= 200 && (this.lastCheckMs = KD, sD === gp ? this.check(DD, wD) : this.preview(DD, wD)), this.pulses.length > 0) {
          const zD = 1 + .12 * Math.sin(KD / 1e3 * 1.25 * Math.PI * 2),
            wD = [zD, zD, zD];
          for (const pD of this.pulses) DD.setGameMesh(pD, {
            scale: wD
          })
        }
      }
      dispose(DD) {
        this.clear(DD), this.shownKey = ""
      }
      check(DD, zD) {
        const wD = ph(DD),
          pD = [];
        for (const {
            entry: KD
          }
          of this.store.colliders()) {
          KD.focus.every(((DD, wD) => Math.abs(DD + .5 - zD[wD]) <= Lp.GHOST_REACH)) && pD.push(qc(KD, wD))
        }
        const sD = sh(pD);
        sD !== this.shownKey && this.show(DD, sD, pD)
      }
      preview(DD, zD) {
        const wD = DD.getTargetedBlock(),
          pD = wD ? [wD.sG[0], wD.sG[1], wD.sG[2]] : null,
          sD = null !== pD && pD.every(((DD, wD) => Math.abs(DD + .5 - zD[wD]) <= 8)),
          KD = this.store.site(),
          rD = sD && KD ? function(DD, zD, wD) {
            const pD = Bp(DD);
            if (!pD.every(zD)) return null;
            const sD = Op(DD, wD);
            return {
              column: pD,
              spots: qc({
                focus: pD[1],
                lasers: [!1, !1, !1, !1],
                open: sD,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, zD),
              fits: sD.filter(Boolean).length >= Lp.MIN_SPOTS
            }
          }(pD, ph(DD), KD) : null,
          LD = rD ? [rD.spots] : [],
          cD = rD ? `preview ${pD.join(",")}|${rD.fits}|${sh(LD)}` : "";
        var gD, RD;
        cD !== this.shownKey && this.show(DD, cD, LD, null !== (gD = null === rD || void 0 === rD ? void 0 : rD.column) && void 0 !== gD ? gD : [], null === (RD = null === rD || void 0 === rD ? void 0 : rD.fits) || void 0 === RD || RD)
      }
      show(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(DD), this.shownKey = zD, pD.length > 0 && this.meshes.push(Kh(DD, pD, mG(sD ? Dh : qG)));
        for (const {
            free: KD,
            blocked: rD,
            gaps: LD,
            supports: cD
          }
          of wD) {
          for (const [zD, wD, pD] of KD) {
            const sD = {
              positions: [],
              indices: []
            };
            wh(sD, 0, 0, 0);
            const KD = DD.createGameMesh(sD, mG(YG), [zD + .5, wD + .5, pD + .5]);
            this.meshes.push(KD), this.pulses.push(KD)
          }
          rD.length > 0 && this.meshes.push(Kh(DD, rD, mG(HG))), LD.length > 0 && this.meshes.push(Kh(DD, LD, mG(qG), 1.06, .07)), cD.length > 0 && this.meshes.push(Kh(DD, cD, mG(zh)))
        }
      }
      clear(DD) {
        for (const zD of this.meshes) DD.disposeGameMesh(zD);
        this.meshes = [], this.pulses = []
      }
    }
    class Lh {
      constructor() {
        this.stored = new Map, this.Qg = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(DD) {
        if (!DD.baf2TermOpen) return !1;
        DD.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [zD, wD] of DD.baf2TermItems) wD > 0 ? this.stored.set(zD, wD) : this.stored.delete(zD);
        if (DD.baf2TermHeld && (this.Qg = new Map(DD.baf2TermHeld)), this.pending = this.pending.filter((zD => zD.seq > DD.baf2TermAcked)), this.silos = DD.baf2TermSilos, this.readOnly = DD.baf2TermReadOnly, this.pocket = !0 === DD.baf2TermPocket, DD.baf2TermReset) this.resort();
        else {
          const DD = new Set(this.order);
          for (const zD of this.stored.keys()) DD.has(zD) || this.order.push(zD)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((DD, zD) => this.amount(zD) - this.amount(DD) || DD.localeCompare(zD))), this.changed()
      }
      take(DD, zD) {
        const wD = Lz(DD, this.amount(zD));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: zD,
          amount: wD,
          put: !1
        }), this.recents = [zD, ...this.recents.filter((DD => DD !== zD))].slice(0, 6), this.changed(), wz(this.seq, DD, zD)
      }
      put(DD, zD) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: zD,
          amount: Lz(DD, this.heldAmount(zD)),
          put: !0
        }), this.changed(), pz(this.seq, DD, zD)
      }
      putAll() {
        this.seq++;
        for (const DD of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: DD,
          amount: this.heldAmount(DD),
          put: !0
        });
        return this.changed(), sz(this.seq)
      }
      amount(DD) {
        var zD;
        let wD = null !== (zD = this.stored.get(DD)) && void 0 !== zD ? zD : 0;
        for (const pD of this.pending) pD.item === DD && (wD += pD.put ? pD.amount : -pD.amount);
        return Math.max(0, wD)
      }
      heldAmount(DD) {
        var zD;
        let wD = null !== (zD = this.Qg.get(DD)) && void 0 !== zD ? zD : 0;
        for (const pD of this.pending) pD.put && pD.item === DD && (wD -= pD.amount);
        return Math.max(0, wD)
      }
      heldItems() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((zD => zD === DD || this.heldAmount(zD) > 0))
      }
      items() {
        return this.order.filter((DD => this.amount(DD) > 0))
      }
      recent() {
        return this.recents.filter((DD => this.amount(DD) > 0))
      }
      siloCount() {
        return this.silos
      }
      isReadOnly() {
        return this.readOnly
      }
      isPocket() {
        return this.pocket
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      changed() {
        this.version++;
        for (const DD of this.listeners) DD()
      }
    }
    var ch = wD(38409);
    const gh = {
      isBlock: DD => void 0 !== bD.l[DD],
      harvestType: DD => {
        var zD;
        return null === (zD = bD.l[DD]) || void 0 === zD ? void 0 : zD.harvestType
      },
      harvestLevel: DD => {
        var zD;
        return null === (zD = bD.l[DD]) || void 0 === zD ? void 0 : zD.harvestLevel
      },
      dropsNothing: DD => {
        var zD;
        return null === (null === (zD = bD.l[DD]) || void 0 === zD ? void 0 : zD.drops)
      },
      displayName: DD => {
        var zD;
        return null === (zD = wL.m[DD]) || void 0 === zD ? void 0 : zD.displayName
      },
      description: DD => {
        var zD;
        return null === (zD = wL.m[DD]) || void 0 === zD ? void 0 : zD.description
      },
      harvests: DD => {
        var zD;
        return null === (zD = wL.m[DD]) || void 0 === zD ? void 0 : zD.harvests
      },
      level: DD => {
        var zD;
        return null === (zD = wL.m[DD]) || void 0 === zD ? void 0 : zD.level
      }
    };

    function Rh(DD, zD, wD) {
      return function(DD, zD, wD, pD) {
        var sD, KD;
        const rD = zD.split("|")[0],
          LD = DD.isBlock(zD) ? zD : DD.isBlock(rD) ? rD : null;
        if (null === LD || "rock" !== DD.harvestType(LD) || DD.dropsNothing(LD) && !Zp.has(rD)) return null;
        const cD = wD && "rock" === DD.harvests(wD) ? null !== (sD = DD.level(wD)) && void 0 !== sD ? sD : 0 : null,
          gD = null !== (KD = null !== pD && void 0 !== pD ? pD : DD.harvestLevel(LD)) && void 0 !== KD ? KD : 0;
        return (null !== cD ? gD <= cD : 0 === DD.harvestLevel(LD)) ? null : Cp(DD, gD)
      }(gh, DD, zD, wD)
    }

    function Ah(DD, zD) {
      return function(DD, zD, wD) {
        if (zD === Pp[0]) return [(0, SD.Wd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, SD.I.whiteUiText)];
        const pD = wD.split("|")[0],
          sD = DD.isBlock(pD) ? DD.displayName(pD) : void 0,
          KD = "string" === typeof sD ? sD : sD && "translationKey" in sD ? `$t(${sD.translationKey})` : pD;
        return [(0, SD.Wd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: KD
          }
        }, SD.I.whiteUiText), (0, SD.Wd)({
          translationKey: `item:${(0,SD.ue)(zD)}`
        }, SD.I.yellowUiText)]
      }(gh, DD, zD)
    }
    const Uh = "buildAFactory2Game:";
    const fh = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Ih(DD) {
      return DD.endsWith(" Ore")
    }
    const Bh = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Gh = [],
      hh = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: Bh,
        plan: null,
        atomic: Gh
      },
      nh = "buildAFactory2Game:",
      Mh = new Set(["Splitter", "Sorting Gate"]),
      Oh = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Jh {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = DD, this.planAt = zD, this.tierOf = wD, this.fR = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Qg = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = hh, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(DD, zD, wD) {
        var pD, sD, KD;
        let rD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const LD = null !== (pD = null === (sD = DD.zwD(zD)) || void 0 === sD ? void 0 : sD.name) && void 0 !== pD ? pD : null,
          cD = DD.isPlayerCrouching(zD),
          gD = 0 === wD ? null : this.resolve(DD, wD),
          RD = null !== gD && null !== rD && Mh.has(gD.rootName) && function(DD, zD) {
            return Oh.some((wD => {
              let [pD, sD] = wD;
              const KD = DD.getBlockId(zD[0] + pD, zD[1], zD[2] + sD);
              return 0 !== KD && "Express Belt" === DD.getMetaInfo(KD).rootName
            }))
          }(DD, rD),
          AD = this.updatePlan(0 === wD ? null : rD),
          UD = this.tierOf(),
          fD = null === rD ? null : (0, ch.f)(wD),
          ID = null !== fD && null !== rD && (0, ch.i)(function(DD) {
            return (zD, wD, pD) => DD.getBlockId(zD, wD, pD)
          }(DD), rD[0], rD[1], rD[2], fD),
          BD = this.readAfloat(DD, wD, rD);
        if (wD === this.fR && ID === this.missesMaker && BD === this.afloat && LD === this.Qg && cD === this.crouching && RD === this.express && UD === this.tier && !AD && (!this.targetsLive || !this.liveMoved(rD))) return;
        this.fR = wD, this.missesMaker = ID, this.afloat = BD, this.Qg = LD, this.crouching = cD, this.express = RD;
        const GD = RD && gD ? function(DD) {
          if (null === DD.info) return null;
          return DD.express ??= {
            ...DD.info,
            detail: `${nh}lookKeepsUpExpress`,
            detailItem: null
          }, DD.express
        }(gD) : null !== gD && ID && null !== fD ? this.besideMaker(gD, wD, fD) : null !== gD && BD ? this.hanging(gD) : null !== (KD = null === gD || void 0 === gD ? void 0 : gD.info) && void 0 !== KD ? KD : null;
        this.tier = UD;
        const hD = gD && GD ? function(DD, zD) {
          var wD, pD;
          const sD = bD.l[DD];
          if (!DD.endsWith(" Ore") || "rock" !== (null === sD || void 0 === sD ? void 0 : sD.harvestType) || 0 === sD.harvestLevel) return null;
          const KD = null !== (wD = sD.harvestLevel) && void 0 !== wD ? wD : 0,
            rD = zD ? wL.m[zD] : void 0;
          if ("rock" === (null === rD || void 0 === rD ? void 0 : rD.harvests) && (null !== (pD = rD.level) && void 0 !== pD ? pD : 0) >= KD) return null;
          const LD = (cD = KD, Cp(gh, cD));
          var cD;
          if (null === LD) return null;
          const gD = rK(LD),
            RD = /^[AEIOU]/.test(LD) ? "An" : "";
          if ("rock" === (null === rD || void 0 === rD ? void 0 : rD.harvests) && zD) return {
            key: `${nh}lookToolTooWeak${RD}`,
            Qg: rK(zD),
            needed: gD
          };
          return {
            key: LD === Pp[0] ? `${nh}lookNeedAnyPickaxe` : `${nh}lookNeedPickaxe${RD}`,
            Qg: null,
            needed: gD
          }
        }(gD.rootName, LD) : null;
        this.targetsLive = !0 === (null === gD || void 0 === gD ? void 0 : gD.live) && null !== rD;
        let nD = null;
        this.targetsLive && gD && rD && this.live && (this.livePos[0] = rD[0], this.livePos[1] = rD[1], this.livePos[2] = rD[2], this.liveVersion = this.live.version(), nD = this.live.line(gD.rootName, rD));
        const MD = null === GD ? Bh : function(DD, zD, wD) {
            const pD = function(DD, zD, wD) {
              const pD = Sw(DD);
              if (null === pD) return null;
              const sD = `${Uh}lookPortMode_${pD}`,
                KD = mp(zD);
              if (KD && wD) return {
                mode: null,
                detail: sD,
                next: `${Uh}lookWrenchPickUp`,
                nextState: null
              };
              const rD = iw(DD),
                LD = null === rD ? null : Sw(rD);
              return null === LD ? {
                mode: null,
                detail: sD,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: sD,
                next: KD ? `${Uh}lookWrenchNext` : `${Uh}lookPortWrench`,
                nextState: `${Uh}lookPortState_${LD}`
              }
            }(DD, zD, wD);
            if (null !== pD) return pD;
            const sD = ss(DD, zD, wD);
            return null === sD.mode && null === sD.next ? Bh : sD
          }(DD.blockIdToBlockName(wD), LD, cD),
          OD = this.plan,
          JD = gD && GD ? this.rowsOf(gD.rootName, UD) : Gh,
          ED = this.snapshot;
        if (!(null === GD ? !ED.visible : ED.visible && GD === ED.info && (QD = hD, XD = ED.tool, QD === XD || null !== QD && null !== XD && QD.key === XD.key && QD.Qg === XD.Qg && QD.needed === XD.needed) && function(DD, zD) {
            return DD === zD || null !== DD && null !== zD && DD.key === zD.key && JSON.stringify([DD.params, DD.keys]) === JSON.stringify([zD.params, zD.keys])
          }(nD, ED.live) && function(DD, zD) {
            return DD.mode === zD.mode && DD.detail === zD.detail && DD.next === zD.next && DD.nextState === zD.nextState
          }(MD, ED.wrench) && qI(OD, ED.plan) && JD === ED.atomic)) {
          var QD, XD;
          this.snapshot = null === GD ? {
            ...ED,
            visible: !1
          } : {
            info: GD,
            visible: !0,
            tool: hD,
            live: nD,
            wrench: MD,
            plan: OD,
            atomic: JD
          };
          for (const DD of this.listeners) DD()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = hh, this.fR = 0, this.Qg = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(DD, zD, wD) {
        if (null === wD || 0 === zD || !LD() || !Ih(this.resolve(DD, zD).rootName)) return !1;
        const pD = `${wD[0]},${wD[1]},${wD[2]},${zD}`,
          sD = performance.now();
        return pD === this.afloatKey && sD - this.afloatAt < Eh ? this.afloat : (this.afloatKey = pD, this.afloatAt = sD, function(DD, zD) {
          for (const [wD, pD, sD] of fh) {
            const KD = zD(DD[0] + wD, DD[1] + pD, DD[2] + sD);
            if (void 0 === KD || null !== KD && !Ih(KD)) return !1
          }
          return !0
        }(wD, ((zD, wD, pD) => function(DD, zD, wD, pD) {
          if (!DD.isBlockInLoadedChunk(zD, wD, pD)) return;
          const sD = DD.getBlockId(zD, wD, pD);
          return 0 === sD ? null : DD.getMetaInfo(sD).rootName
        }(DD, zD, wD, pD))))
      }
      liveMoved(DD) {
        var zD;
        const {
          livePos: wD
        } = this;
        return null === DD || DD[0] !== wD[0] || DD[1] !== wD[1] || DD[2] !== wD[2] || (null === (zD = this.live) || void 0 === zD ? void 0 : zD.version()) !== this.liveVersion
      }
      updatePlan(DD) {
        const zD = null === DD ? "" : DD.join(","),
          wD = performance.now();
        if (zD === this.planPos && wD - this.planMs < 250) return !1;
        this.planPos = zD, this.planMs = wD;
        const pD = null === DD ? null : this.planAt([DD[0], DD[1], DD[2]]),
          sD = !qI(pD, this.plan);
        return this.plan = pD, sD
      }
      besideMaker(DD, zD, wD) {
        let {
          info: pD
        } = DD;
        if (null === pD) return null;
        let sD = this.besideMakerById.get(zD);
        if (void 0 === sD) {
          const DD = "cryo" === wD ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          sD = {
            ...pD,
            detail: `${nh}${DD}`,
            detailItem: null
          }, this.besideMakerById.set(zD, sD)
        }
        return sD
      }
      hanging(DD) {
        let {
          info: zD,
          rootName: wD
        } = DD;
        if (null === zD) return null;
        let pD = this.afloatByRoot.get(wD);
        return void 0 === pD && (pD = {
          ...zD,
          detail: `${nh}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(wD, pD)), pD
      }
      rowsOf(DD, zD) {
        if (null === zD) return Gh;
        const wD = `${DD}|${zD}`;
        let pD = this.rowsByKey.get(wD);
        if (void 0 === pD) {
          const sD = function(DD, zD) {
            var wD;
            if (!(DD in Sz)) return [];
            const pD = null !== (wD = iz[DD]) && void 0 !== wD ? wD : [],
              sD = new Map;
            for (const rD of aK(DD, zD))
              if ((pD.includes(rD) || oK(rD.output) && mK(rD.output) > FD(DD)) && mK(rD.output) <= zD) {
                var KD;
                const DD = null !== (KD = sD.get(rD.output)) && void 0 !== KD ? KD : [];
                DD.push(rD.input), sD.set(rD.output, DD)
              } return vK([...sD], (DD => {
              let [zD] = DD;
              return -mK(zD)
            })).map((DD => {
              let [zD, wD] = DD;
              return {
                output: zD,
                inputs: wD
              }
            }))
          }(DD, zD);
          pD = sD.length > 0 ? sD : Gh, this.rowsByKey.set(wD, pD)
        }
        return pD
      }
      resolve(DD, zD) {
        const {
          rootId: wD,
          rootName: pD
        } = DD.getMetaInfo(zD), sD = (0, Bw.l)(pD) ? zD : wD;
        let KD = this.byRootId.get(sD);
        const rD = LD();
        if (void 0 === KD || KD.nuclear !== rD) {
          var cD;
          const wD = function(DD) {
            return Wp(gh, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD)
          }(pD, DD.blockIdToBlockName(zD));
          KD = {
            info: wD,
            rootName: pD,
            live: null !== wD && !0 === (null === (cD = this.live) || void 0 === cD ? void 0 : cD.handles(pD)),
            nuclear: rD
          }, this.byRootId.set(sD, KD)
        }
        return KD
      }
    }
    const Eh = 500;
    const Qh = (0, pD.memo)((function(DD) {
      var zD, wD;
      let {
        store: sD
      } = DD;
      const {
        t: KD
      } = (0, Ts.E)(), [rD, LD] = (0, pD.useState)((() => sD.get()));
      (0, pD.useEffect)((() => (LD(sD.get()), sD.subscribe((() => {
        LD(sD.get())
      })))), [sD]);
      const {
        openInGameMenuName: cD,
        openEverythingMenuName: gD,
        isTouchScreen: RD
      } = (0, Es.n)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: AD,
        tool: UD,
        live: fD,
        wrench: ID,
        atomic: BD
      } = rD, GD = rD.visible && null === cD && null === gD;
      if (null === AD) return null;
      const hD = null !== ID.detail ? KD(ID.detail) : null !== (zD = rD.plan) && void 0 !== zD && zD.ctrl ? KD("buildAFactory2Game:lookPlanCtrl") : null !== AD.detail ? KD(AD.detail, null === AD.detailItem ? void 0 : {
        item: KD(AD.detailItem)
      }) : null;
      return (0, xK.jsxs)("div", {
        className: Vs()("Baf2LookTarget", {
          Visible: GD
        }),
        "aria-hidden": !GD,
        children: [(0, xK.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: KD(AD.name)
        }), null !== rD.plan && (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KD(rD.plan.key, {
            kind: KD(rD.plan.kindKey),
            w: String(rD.plan.w),
            h: String(rD.plan.h),
            d: String(rD.plan.d),
            count: String(rD.plan.count)
          })
        }), void 0 !== (null === (wD = rD.plan) || void 0 === wD ? void 0 : wD.why) && (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: KD(rD.plan.why)
        }), null !== ID.mode && (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KD(ID.mode)
        }), null !== UD ? (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: KD(UD.key, {
            item: KD(UD.needed),
            Qg: null === UD.Qg ? "" : KD(UD.Qg)
          })
        }) : null !== fD ? (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KD(fD.key, rg(KD, fD))
        }) : null !== hD && (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: hD
        }), BD.length > 0 && (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KD("buildAFactory2Game:lookAtomicRecipes", {
            list: BD.map((DD => {
              let {
                output: zD,
                inputs: wD
              } = DD;
              const pD = wD.length > 1 ? ` ${KD("buildAFactory2Game:recipeMore",{count:String(wD.length-1)})}` : "";
              return `${KD(rK(wD[0]))}${pD} \u2192 ${KD(rK(zD))}`
            })).join(", ")
          })
        }), null !== ID.next && (0, xK.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: KD(ID.next, {
            state: null === ID.nextState ? "" : KD(ID.nextState),
            use: KD(RD ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Xh = wD(38502);
    const Vh = [],
      Ph = [
        [0, -1, 0]
      ];

    function Ch(DD) {
      const zD = [DD];
      for (let wD = 1; wD <= 4; wD++) wD > 1 && zD.push(`${DD}|meta|rot${wD}`), zD.push(`${DD}|meta|rot${wD}|Running`);
      return zD
    }

    function xh(DD, zD) {
      return [Math.floor(DD[0] / zD), Math.floor(DD[1] / zD), Math.floor(DD[2] / zD)]
    }

    function Th(DD, zD, wD) {
      return `${DD},${zD},${wD}`
    }

    function bh(DD) {
      const zD = DD.split("|")[0];
      if (!Rw(zD)) return Vh;
      const wD = Sz[zD];
      if (zw(wD)) return Ph;
      const pD = xG(DD);
      return ww(wD) ? [
        [-pD[0], -pD[1], -pD[2]]
      ] : Ps(wD) ? function(DD, zD) {
        const wD = DD[0] - 2 * zD[0],
          pD = DD[2] - 2 * zD[2],
          sD = [];
        for (let KD = -1; KD <= 1; KD++)
          for (let zD = -1; zD <= 1; zD++) sD.push([wD + KD, DD[1], pD + zD]);
        return sD
      }([0, 0, 0], pD) : Vh
    }
    const jh = [.5, .5, .5],
      dh = [.2, .8, .3],
      Sh = [.45, 1, .5];
    class ih {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(DD) {
        this.indexed = !0;
        for (const zD of Cz)
          for (const wD of Ch(zD)) {
            const zD = DD.blockNameToBlockId(wD, !0),
              pD = bh(wD);
            null !== zD && pD.length > 0 && (this.offsetsList.push(pD), this.offsetsIndexById[zD] = this.offsetsList.length)
          }
      }
      onAfterRender(DD, zD) {
        this.indexed || this.index(DD);
        const wD = performance.now();
        if (wD - this.lastCheckMs < 100) return;
        this.lastCheckMs = wD, this.checks++;
        const pD = OI.f.CI,
          [sD, KD, rD] = xh(zD, pD);
        let LD = !1;
        const cD = [];
        let gD = 0;
        for (let RD = sD - 2; RD <= sD + 2; RD++)
          for (let zD = KD - 1; zD <= KD + 1; zD++)
            for (let sD = rD - 2; sD <= rD + 2; sD++) {
              const KD = gD++,
                rD = Th(RD, zD, sD),
                AD = DD.getChunkVersion(RD, zD, sD);
              let UD = this.chunks.get(rD);
              null !== AD ? (UD || (UD = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(rD, UD)), UD.seenAt = this.checks, UD.checkedVersion !== AD && (UD.checkedVersion = AD, LD = !0), UD.scannedVersion !== AD && wD - UD.scannedAt >= 500 && cD.push({
                slot: KD,
                entry: UD,
                origin: [RD * pD, zD * pD, sD * pD]
              })) : (LD ||= void 0 !== UD, this.chunks.delete(rD))
            }
        this.scanDue(DD, cD) && (LD = !0);
        for (const [RD, AD] of this.chunks) AD.seenAt !== this.checks && (LD ||= AD.machines.length > 0, this.chunks.delete(RD));
        for (const RD of this.chunks.values())
          for (const [zD, wD, pD] of RD.cellChunks)(Math.abs(zD - sD) > 2 || Math.abs(wD - KD) > 1 || Math.abs(pD - rD) > 2) && this.watchCellChunk(DD, zD, wD, pD) && (LD = !0);
        for (const [RD, AD] of this.cellChunks) AD.seenAt !== this.checks && this.cellChunks.delete(RD);
        LD && this.refresh(DD)
      }
      dispose(DD) {
        this.clearMeshes(DD), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(DD, zD) {
        const wD = Math.max(zD.findIndex((DD => {
          let {
            slot: zD
          } = DD;
          return zD >= this.scanFrom
        })), 0);
        let pD = 96;
        for (let sD = 0; sD < zD.length; sD++) {
          const {
            slot: KD,
            entry: rD,
            origin: LD
          } = zD[(wD + sD) % zD.length];
          if (pD -= this.scan(DD, rD, LD), pD <= 0) {
            this.scanFrom = KD + 1;
            break
          }
        }
        return zD.length > 0
      }
      scan(DD, zD, wD) {
        let [pD, sD, KD] = wD;
        const rD = OI.f.CI,
          LD = this.hits;
        LD.length = 0;
        const cD = DD.scanBlocks(pD, sD, KD, pD + rD, sD + rD, KD + rD, this.offsetsIndexById, LD),
          gD = [];
        for (let RD = 0; RD < LD.length; RD += 4) gD.push({
          pos: [LD[RD], LD[RD + 1], LD[RD + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[LD[RD + 3]] - 1]
        });
        return zD.machines = gD, zD.cellChunks = function(DD, zD) {
          const wD = new Set,
            pD = [];
          for (const {
              pos: sD,
              offsets: KD
            }
            of DD)
            for (const [DD, rD, LD] of KD) {
              const KD = xh([sD[0] + DD, sD[1] + rD, sD[2] + LD], zD),
                cD = Th(...KD);
              wD.has(cD) || (wD.add(cD), pD.push(KD))
            }
          return pD
        }(gD, rD), zD.scannedVersion = zD.checkedVersion, zD.scannedAt = performance.now(), Math.max(cD, 1)
      }
      watchCellChunk(DD, zD, wD, pD) {
        const sD = Th(zD, wD, pD),
          KD = DD.getChunkVersion(zD, wD, pD),
          rD = this.cellChunks.get(sD);
        return null === KD ? this.cellChunks.delete(sD) : (null === rD || void 0 === rD ? void 0 : rD.version) === KD ? (rD.seenAt = this.checks, !1) : (this.cellChunks.set(sD, {
          version: KD,
          seenAt: this.checks
        }), !0)
      }
      refresh(DD) {
        const zD = function(DD, zD) {
            const wD = new Set,
              pD = [];
            for (const {
                pos: sD,
                offsets: KD
              }
              of DD)
              for (const [DD, rD, LD] of KD) {
                const KD = sD[0] + DD,
                  cD = sD[1] + rD,
                  gD = sD[2] + LD,
                  RD = `${KD},${cD},${gD}`;
                wD.has(RD) || (wD.add(RD), zD(KD, cD, gD) && pD.push([KD, cD, gD]))
              }
            return pD
          }([...this.chunks.values()].flatMap((DD => DD.machines)), ((zD, wD, pD) => DD.isBlockInLoadedChunk(zD, wD, pD) && 0 === DD.getBlockId(zD, wD, pD))),
          wD = zD.join(";");
        wD !== this.shownKey && (this.shownKey = wD, this.clearMeshes(DD), zD.length > 0 && (this.meshes = [this.build(DD, zD, !1), this.build(DD, zD, !0)]))
      }
      build(DD, zD, wD) {
        const pD = zD[0],
          sD = [],
          KD = [];
        for (const [rD, LD, cD] of zD)(0, Xh.d)(sD, KD, [rD - pD[0] + .5, LD - pD[1] + .5, cD - pD[2] + .5], jh, wD);
        return DD.createGameMesh({
          positions: sD,
          indices: KD
        }, {
          rgb: wD ? Sh : dh,
          alpha: .4
        }, pD)
      }
      clearMeshes(DD) {
        for (const zD of this.meshes) DD.disposeGameMesh(zD);
        this.meshes = []
      }
    }
    const lh = 1 / .6,
      Wh = 200,
      Nh = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Zh = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      yh = 2 * Math.PI / 3;
    class kh {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nh;
        this.style = DD, this.particles = null, this.points = new Float32Array(800), this.budget = Wh, this.lastMs = 0
      }
      static blade() {
        return new kh(Zh)
      }
      bJ(DD, zD) {
        const wD = Math.min(zD.arcStruck, zD.arcPoints.length);
        this.draw(DD, [zD.arcFrom, ...zD.arcPoints], zD.arcPoints.slice(0, wD))
      }
      onBlade(DD, zD) {
        const [wD, pD, sD] = zD.bladeCentre, [KD, rD] = zD.bladeFacing, LD = wD - 1.5 * KD, cD = sD - 1.5 * rD, gD = Math.atan2(rD, KD), RD = [];
        for (let AD = 0; AD <= 8; AD++) {
          const DD = gD - yh / 2 + yh * AD / 8;
          RD.push([LD + 2.5 * Math.cos(DD), pD, cD + 2.5 * Math.sin(DD)])
        }
        this.draw(DD, RD, zD.bladeStruck)
      }
      dispose() {
        var DD;
        null === (DD = this.particles) || void 0 === DD || DD.stop(), this.particles = null
      }
      draw(DD, zD, wD) {
        if (!DD.particlesEnabled() || zD.length < 2) return;
        const pD = performance.now();
        this.budget = Math.min(Wh, this.budget + (pD - this.lastMs) / 1e3 * Wh), this.lastMs = pD;
        const sD = [];
        let KD = 0,
          rD = zD[0];
        for (const hD of zD.slice(1)) {
          const DD = Math.min(48, Math.round(Math.hypot(hD[0] - rD[0], hD[1] - rD[1], hD[2] - rD[2]) * this.style.perBlock));
          sD.push([rD, hD, DD]), KD += DD, rD = hD
        }
        const LD = wD.length;
        KD += 10 * LD;
        const cD = KD > this.budget ? this.budget / KD : 1;
        if (0 === KD || cD * KD < 1) return;
        const gD = zD[0],
          [RD, AD, UD] = gD,
          fD = this.points;
        let ID = 0;
        const BD = (DD, zD, wD, pD) => {
          const sD = 4 * ID;
          fD[sD] = DD - RD, fD[sD + 1] = zD - AD, fD[sD + 2] = wD - UD, fD[sD + 3] = pD, ID++
        };
        sD.forEach(((DD, zD) => {
          let [wD, pD, sD] = DD;
          const KD = Math.min(Math.floor(sD * cD), Wh - ID),
            rD = Math.hypot(pD[0] - wD[0], pD[1] - wD[1], pD[2] - wD[2]),
            LD = 0 === zD && rD > 0 ? Math.min(.5, .1 * rD) / rD : 0;
          for (let cD = 0; cD < KD; cD++) {
            const DD = LD + (cD + .5) / KD * (1 - LD);
            BD(wD[0] + (pD[0] - wD[0]) * DD, wD[1] + (pD[1] - wD[1]) * DD, wD[2] + (pD[2] - wD[2]) * DD, .15)
          }
        }));
        const GD = Math.floor(10 * cD);
        for (let hD = 0; hD < LD; hD++) {
          const [DD, zD, pD] = wD[hD];
          for (let wD = 0; wD < GD && ID < Wh; wD++) BD(DD, zD, pD, 2.5)
        }
        this.budget -= ID, this.particles ??= DD.createParticles(function(DD) {
          const [zD, wD] = DD.colours;
          return {
            texture: "square_particle",
            bA: 400,
            minLifeTime: DD.life[0] / lh,
            maxLifeTime: DD.life[1] / lh,
            minSize: DD.size[0],
            maxSize: DD.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [zD[0], zD[1], zD[2], 1],
              maxColor: [wD[0], wD[1], wD[2], 1]
            }, {
              timeFraction: 1,
              minColor: [zD[0], zD[1], zD[2], 0],
              maxColor: [wD[0], wD[1], wD[2], 0]
            }],
            blendMode: NL.f.Add
          }
        }(this.style), {
          pos: gD
        }), this.particles.emitPoints(gD, fD, ID)
      }
    }
    const mh = new Set(["Sky Spring"]);

    function eh(DD, zD, wD) {
      const pD = DD.split("|")[0];
      return "Air" !== zD || wD || ! function(DD) {
        const zD = DD.split("|")[0];
        return void 0 !== rw[zD] || mh.has(zD)
      }(pD) ? null : DD
    }
    class oh {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(DD) {
        const zD = DD - this.lastTapAt >= 300;
        return this.lastTapAt = DD, zD
      }
    }
    class ah {
      constructor() {
        this.presses = new oh, this.predicted = null
      }
      tap(DD, zD) {
        const wD = this.presses.isNewPress(zD);
        return wD && (this.predicted = {
          station: DD,
          at: zD
        }), wD
      }
      consumeServerOpen(DD, zD) {
        const wD = this.predicted;
        return !(null === wD || wD.station !== DD || zD - wD.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class uh {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(DD, zD) {
        return DD && (this.thrustAt = zD), zD - this.thrustAt < 200
      }
    }
    const vh = [.1, .05, .1],
      th = {
        texture: "effect_5",
        bA: Math.ceil(48),
        minLifeTime: .35,
        maxLifeTime: .8,
        minEmitPower: 1,
        maxEmitPower: 2,
        minSize: .2,
        maxSize: .45,
        emitRate: 0,
        gravity: [0, -2, 0],
        dir1: [-.15, -1, -.15],
        dir2: [.15, -1, .15],
        colorGradients: [{
          timeFraction: 0,
          minColor: [255, 217, 77, 1],
          maxColor: [255, 242, 128, 1]
        }, {
          timeFraction: 1,
          minColor: [120, 30, 0, 1],
          maxColor: [150, 45, 5, 1]
        }],
        blendMode: NL.f.OneOne
      };
    class Fh {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new uh, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      bJ(DD, zD) {
        for (const [wD, pD] of zD.baf2JetFlames) DD.isLocalPlayer(wD) || (pD ? this.lit.add(wD) : this.lit.delete(wD))
      }
      onAfterRender(DD, zD) {
        const wD = performance.now(),
          pD = this.hold.lit(this.selfThrusting(DD, zD), wD);
        for (const [sD, KD] of this.flames)(sD === zD ? pD : this.lit.has(sD)) || this.setEmitting(KD, !1), sD === zD || DD.getPositionView(sD) ? !KD.emitting && wD - KD.offAt >= 1300 && (KD.particles.stop(), this.flames.delete(sD)) : (KD.particles.dispose(), this.flames.delete(sD), this.lit.delete(sD));
        pD && this.draw(DD, zD, zD);
        for (const sD of this.lit) this.draw(DD, zD, sD)
      }
      dispose() {
        for (const DD of this.flames.values()) DD.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(DD, zD) {
        var wD;
        const pD = DD.getLocalPlayerMovement();
        return !!pD && (null !== (sD = {
          option: null !== (wD = DD.getClientOption(zD, "jumpHoldThrust")) && void 0 !== wD ? wD : null,
          jumping: pD.jumpHeld,
          onGround: pD.onGround,
          alive: DD.isAlive(zD)
        }).option && sD.option.maxUpSpeed >= 0 && sD.jumping && !sD.onGround && sD.alive);
        var sD
      }
      draw(DD, zD, wD) {
        var pD, sD;
        const KD = this.pos;
        if (!DD.readDrawnPosition(wD, KD)) return;
        const rD = DD.readDrawnPosition(zD, this.camera) ? this.camera : KD;
        if (!((KD[0] - rD[0]) ** 2 + (KD[1] - rD[1]) ** 2 + (KD[2] - rD[2]) ** 2 < 1600) || !DD.particlesEnabled()) {
          const DD = this.flames.get(wD);
          return void(DD && this.setEmitting(DD, !1))
        }
        const LD = null !== (pD = this.flames.get(wD)) && void 0 !== pD ? pD : this.create(DD, wD, KD),
          cD = null !== (sD = DD.getDrawnHeading(wD)) && void 0 !== sD ? sD : 0,
          gD = this.at;
        gD[0] = KD[0] - .35 * Math.sin(cD), gD[1] = KD[1] + 1.05, gD[2] = KD[2] - .35 * Math.cos(cD), LD.particles.moveTo(gD), this.setEmitting(LD, !0)
      }
      setEmitting(DD, zD) {
        DD.emitting !== zD && (DD.emitting = zD, zD || (DD.offAt = performance.now()), DD.particles.setEmitRate(zD ? 60 : 0))
      }
      create(DD, zD, wD) {
        const pD = {
          particles: DD.createParticles(th, {
            pos: wD,
            half: vh
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(zD, pD), pD
      }
    }

    function Yh(DD) {
      return "Reactor Frame" === sp("reactor", DD)
    }

    function Hh(DD) {
      return Zw("reactor", DD) && !Yh(DD) && (DD.startsWith("Reactor Glass") || DD.startsWith("Reactor Port"))
    }
    const qh = "baf2Goal";
    class Dn {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Ws.l.subscribe("setDirectionArrow", (DD => {
          let {
            id: zD,
            position: wD
          } = DD;
          zD === qh && (this.goal = wD, this.checkedAt = -1 / 0)
        })), Ws.l.subscribe("clearDirectionArrow", (DD => {
          let {
            id: zD
          } = DD;
          null !== zD && zD !== qh || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const DD of this.subs) Ws.l.unsubscribe(DD)
      }
      sideOf(DD, zD, wD, pD) {
        const sD = this.goal;
        if (!sD) return 0;
        wD - this.checkedAt > 1e3 && (this.checkedAt = wD, this.open = function(DD, zD) {
          const [wD, pD, sD] = DD.map(Math.floor);
          if (!Hh(zD(wD, pD, sD))) return null;
          for (const [KD, rD] of [
              [1, 0],
              [0, 1]
            ]) {
            const DD = zD(wD + KD, pD, sD + rD),
              LD = zD(wD - KD, pD, sD - rD);
            if (Yh(LD) && Hh(DD)) return [KD, 0, rD];
            if (Yh(DD) && Hh(LD)) return [0 - KD, 0, 0 - rD]
          }
          return null
        }(sD, ((zD, wD, pD) => DD.blockIdToBlockName(DD.getBlockId(zD, wD, pD)))));
        const KD = this.open;
        if (!KD) return 0;
        const rD = pD(sD);
        if (Math.abs(rD.x - zD.x) > .05 || Math.abs(rD.y - zD.y) > .05) return 0;
        const LD = pD([sD[0] + KD[0], sD[1], sD[2] + KD[2]]).x - rD.x;
        return Math.abs(LD) < .3 ? 0 : LD > 0 ? 1 : -1
      }
    }
    class zn {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Dn, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.MI = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.GJ = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((DD => {
          for (const zD of DD) zD.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(zD.target, zD.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.MI || this.clear()
        }, window.addEventListener("resize", this.GJ)
      }
      onAfterRender(DD, zD) {
        var wD;
        this.api = DD, this.project = null !== (wD = null === zD || void 0 === zD ? void 0 : zD.projectWorldPosToScreenPos) && void 0 !== wD ? wD : null, this.queued || this.MI || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.MI = !0;
        for (const DD of this.moved.keys()) DD.style.transform = "";
        this.moved.clear();
        for (const DD of this.sideLabels.keys()) DD.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.GJ)
      }
      clear() {
        for (const KD of this.moved.keys()) KD.isConnected || this.moved.delete(KD);
        for (const KD of this.sideLabels.keys()) KD.isConnected || this.sideLabels.delete(KD);
        if (0 === this.arrows.length) return;
        const DD = performance.now(),
          zD = DD - this.refreshedAt > 1e3;
        zD && (this.refreshedAt = DD, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const wD = this.trackerBox(),
          pD = this.barsBox(),
          sD = this.toastBox(zD);
        (wD || pD || sD) && zD && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let KD = 0; KD < this.arrows.length; KD++) {
          const zD = this.arrows[KD];
          this.labelOffsets.set(zD, this.runLabelAside(zD, DD));
          const rD = (wD ? this.shiftLeftOf(zD, wD) : 0) || this.shiftOnScreen(zD),
            LD = Math.min(pD ? this.liftAbove(zD, pD, rD) : 0, sD ? this.liftAbove(zD, sD, rD) : 0),
            cD = this.moved.get(zD);
          if (0 !== rD || 0 !== LD) {
            const DD = 0 === LD ? `translateX(${rD}px)` : `translate(${rD}px, ${LD}px)`;
            cD !== DD && (zD.style.transform = DD, this.moved.set(zD, DD))
          } else void 0 !== cD && (zD.style.transform = "", this.moved.delete(zD))
        }
      }
      trackerBox() {
        var DD, zD;
        const wD = null !== (DD = this.tracker) && void 0 !== DD && DD.isConnected ? this.tracker : null !== (zD = this.trackers[0]) && void 0 !== zD ? zD : null;
        if (wD !== this.tracker && this.watch(wD), this.boxStale && wD) {
          var pD, sD, KD;
          this.boxStale = !1;
          const DD = wD.closest(".NoRoom") ? null : wD.getBoundingClientRect(),
            zD = DD && DD.width > 0 ? null === (pD = this.hud) || void 0 === pD ? void 0 : pD.getBoundingClientRect() : void 0,
            rD = DD && zD ? Math.max(DD.top, zD.top) : null !== (sD = null === DD || void 0 === DD ? void 0 : DD.top) && void 0 !== sD ? sD : 0,
            LD = DD && zD ? Math.min(DD.bottom, zD.bottom) : null !== (KD = null === DD || void 0 === DD ? void 0 : DD.bottom) && void 0 !== KD ? KD : 0;
          this.box = DD && DD.width > 0 && LD > rD ? {
            left: DD.left,
            top: rD,
            right: DD.right,
            bottom: LD
          } : null
        }
        return wD ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var DD;
          this.barsStale = !1;
          const zD = null === (DD = this.statBars[0]) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
          this.bars = zD && zD.width > 0 && zD.height > 0 ? {
            left: zD.left,
            top: zD.top,
            right: zD.right,
            bottom: zD.bottom
          } : null
        }
        return this.bars
      }
      toastBox(DD) {
        var zD;
        const wD = null !== (zD = this.toasts[0]) && void 0 !== zD ? zD : null;
        if (wD !== this.toastEl || DD && wD) {
          this.toastEl = wD;
          const DD = null === wD || void 0 === wD ? void 0 : wD.getBoundingClientRect();
          this.toast = DD && DD.width > 0 && DD.height > 0 ? {
            left: DD.left,
            top: DD.top,
            right: DD.right,
            bottom: DD.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(DD, zD, wD) {
        var pD;
        const sD = this.anchorOf(DD);
        if (!sD) return 0;
        const KD = sD.x + wD + (null !== (pD = this.labelOffsets.get(DD)) && void 0 !== pD ? pD : 0),
          {
            halfWidth: rD,
            labelled: LD
          } = this.extentOf(DD),
          cD = sD.y + this.em * (LD ? 6.2 : 3);
        return cD < zD.top - 6 || KD + rD < zD.left - 6 || KD - rD > zD.right + 6 ? 0 : zD.top - 6 - cD
      }
      watch(DD) {
        var zD, wD;
        this.tracker && this.sizes.unobserve(this.tracker), null === (zD = this.hud) || void 0 === zD || zD.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = DD, this.hud = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.closest(".Baf2QuestHud")) && void 0 !== wD ? wD : null, this.box = null, this.boxStale = !0, DD && this.sizes.observe(DD), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(DD, zD) {
        var wD;
        const pD = this.anchorOf(DD);
        if (!pD) return 0;
        const {
          y: sD
        } = pD, KD = pD.x + (null !== (wD = this.labelOffsets.get(DD)) && void 0 !== wD ? wD : 0), rD = this.em, {
          halfWidth: LD,
          labelled: cD
        } = this.extentOf(DD), gD = sD - rD, RD = KD + LD;
        return sD + rD * (cD ? 6.2 : 3) < zD.top || gD > zD.bottom || RD < zD.left - 6 || KD - LD > zD.right ? 0 : Math.max(zD.left - 6 - RD, 6 - (KD - LD))
      }
      shiftOnScreen(DD) {
        var zD;
        const wD = this.anchorOf(DD);
        if (!wD) return 0;
        const {
          halfWidth: pD
        } = this.extentOf(DD), sD = wD.x + (null !== (zD = this.labelOffsets.get(DD)) && void 0 !== zD ? zD : 0), KD = sD + pD - (this.innerWidth - 6);
        return KD > 0 ? -KD : Math.max(0, 6 - (sD - pD))
      }
      runLabelAside(DD, zD) {
        var wD;
        let pD = null;
        for (let rD = 0; rD < DD.children.length; rD++) DD.children[rD].classList.contains("DirectionArrowLabel") && (pD = DD.children[rD]);
        if (!pD) return 0;
        const sD = DD.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(DD) : null,
          KD = (sD && this.api ? this.side.sideOf(this.api, {
            x: sD.x / this.innerWidth * 100,
            y: sD.y / this.innerHeight * 100
          }, zD, this.project) : 0) * this.halfWidthOf(pD);
        return KD !== (null !== (wD = this.sideLabels.get(pD)) && void 0 !== wD ? wD : 0) && (pD.style.transform = 0 === KD ? "" : `translateX(-50%) translateX(${KD}px)`, 0 === KD ? this.sideLabels.delete(pD) : this.sideLabels.set(pD, KD)), KD
      }
      extentOf(DD) {
        let zD = this.em,
          wD = !1;
        for (let pD = 0; pD < DD.children.length; pD++) {
          const sD = DD.children[pD],
            KD = sD.classList.contains("DirectionArrowLabel");
          wD ||= KD, (KD || sD.classList.contains("DirectionArrowDistance")) && (zD = Math.max(zD, this.halfWidthOf(sD)))
        }
        return {
          halfWidth: zD,
          labelled: wD
        }
      }
      halfWidthOf(DD) {
        let zD = this.halfWidths.get(DD);
        return void 0 === zD && (zD = DD.offsetWidth / 2, this.halfWidths.set(DD, zD), this.sizes.observe(DD), this.labels.add(DD)), zD
      }
      forgetGoneLabels() {
        for (const DD of this.labels) DD.isConnected || (this.sizes.unobserve(DD), this.halfWidths.delete(DD), this.labels.delete(DD))
      }
      anchorOf(DD) {
        const zD = DD.style.translate,
          wD = this.anchors.get(DD);
        if (wD && wD.translate === zD && wD.innerWidth === this.innerWidth && wD.innerHeight === this.innerHeight) return wD;
        const pD = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(zD);
        if (!pD) return null;
        const sD = {
          translate: zD,
          x: parseFloat(pD[1]) / 100 * this.innerWidth,
          y: parseFloat(pD[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(DD, sD), sD
      }
    }
    const wn = "Baf2ArrowText";

    function pn(DD, zD) {
      const wD = DD.rows.find((DD => DD.current));
      return dD(DD.tutorial) && null !== wD && void 0 !== wD && wD.item && vs(wD) && xD(wD.item).includes(zD) ? wD.item : null
    }
    const sn = new class {
      constructor(DD) {
        this.select = DD, this.picks = new Map
      }
      open(DD, zD, wD) {
        const pD = pn(zD, DD);
        null !== pD && this.HU(DD, pD, wD)
      }
      follow(DD, zD) {
        if (LD())
          for (const [wD, {
              item: pD,
              had: sD
            }] of this.picks) {
            const KD = pn(DD, wD);
            KD !== pD && (null !== KD && zD(pD) > sD ? this.HU(wD, KD, zD) : this.picks.delete(wD))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      HU(DD, zD, wD) {
        this.picks.set(DD, {
          item: zD,
          had: wD(zD)
        }), this.select(DD, zD)
      }
    }(Ns.s);

    function Kn(DD) {
      return zD => {
        let wD = 0;
        for (const pD of DD.getInventoryItems())(null === pD || void 0 === pD ? void 0 : pD.name) === zD && (wD += null === pD.amount ? 1 : Math.max(pD.amount, 0));
        return wD
      }
    }

    function rn(DD, zD, wD, pD) {
      DD.getClientOption(zD, "canCraft") && "inventory" !== Es.e.get("openInGameMenuName") && (sn.open(wD, pD.get(), Kn(DD)), Ws.l.KG("toggleMenu", `inventory|${wD}`))
    }
    let Ln = null,
      cn = !1;

    function gn(DD) {
      const zD = CK();
      DD === Ln && zD === cn || (Ln = DD, cn = zD, (0, Ns.v)(function(DD, zD) {
        const wD = new Map;
        for (let pD = DD + 1; pD <= sD.length; pD++) {
          const sD = tK(pD, DD, zD);
          if (sD)
            for (const zD of hD(pD).unlocks) wD.set(zD, {
              ...sD,
              stepsAway: pD - DD
            })
        }
        return wD
      }(DD, zD)))
    }

    function Rn() {
      return DD = () => {
        null !== Ln && gn(Ln)
      }, (0, VK.i)(PK, DD);
      var DD
    }

    function An() {
      return (0, Ns.x)(vK(Object.keys(CD), mK)), () => {
        (0, Ns.x)([])
      }
    }

    function Un(DD, zD, wD) {
      var pD, sD;
      const KD = DD.getTargetedBlock();
      if (!KD || ! function(DD, zD, wD) {
          if ("Chest" !== zD) return !1;
          const pD = DD.split("|")[0];
          if (!Rw(pD) || 0 === Sz[pD].outputSlots.length) return !1;
          const sD = xG(DD);
          return wD[0] === sD[0] && wD[1] === sD[1] && wD[2] === sD[2]
        }(wD, null === (pD = DD.zwD(zD)) || void 0 === pD ? void 0 : pD.name, KD.normal)) return !1;
      const [rD, LD, cD] = KD.sG, gD = DD.getBlockId(rD, LD, cD);
      return 0 === gD || !0 === (null === (sD = bD.l[gD]) || void 0 === sD ? void 0 : sD.canBePlacedOver)
    }
    var fn = wD(36719);
    const In = new Set(Gw.e);
    class Bn {
      constructor(DD) {
        this.toasts = DD, this.lastAt = -1 / 0
      }
      onAltAction(DD, zD, wD) {
        const pD = DD.getTargetedBlock();
        if (!pD || function(DD) {
            const zD = DD.split("|")[0];
            return Rw(zD) || null !== Xp(zD) || VD(zD) || Gw.e.includes(zD)
          }(wD) && !In.has(wD.split("|")[0])) return;
        const sD = DD.zwD(zD);
        if (!sD || !In.has(sD.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const KD = sD.typeObj.id,
          [rD, LD, cD] = pD.sG,
          gD = DD.getBlockId(rD, LD, cD),
          RD = bD.l[gD];
        (0 === gD || null !== RD && void 0 !== RD && RD.Af || null !== RD && void 0 !== RD && RD.canBePlacedOver) && DD.isSolidToPlayerBlockId(KD) && DD.canModifyBlockAt(rD, LD, cD) && DD.OzD(rD, LD, cD, KD) && !DD.OzD(rD, LD, cD, KD, zD) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, SD.Wd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, SD.I.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class Gn {
      constructor(DD) {
        this.show = DD, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(DD, zD, wD) {
        var pD;
        if (!zD) return this.started = null, void this.gatedThisHold.clear();
        if (!DD) return void(this.started = null);
        const sD = `${DD.x},${DD.y},${DD.z},${DD.Qg}`;
        if (sD === this.started) return;
        this.started = sD;
        const KD = Np(DD.y) ? Rh(DD.block, DD.Qg, DD.level) : null;
        if (null === KD || this.gatedThisHold.has(sD)) return;
        this.gatedThisHold.add(sD);
        const rD = DD.block.split("|")[0];
        wD - (null !== (pD = this.hintedAt.get(rD)) && void 0 !== pD ? pD : -1 / 0) < 5e3 || (this.hintedAt.set(rD, wD), this.show({
          baf2ToastText: Ah(KD, DD.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var hn = wD(35);

    function nn(DD, zD) {
      const wD = [...DD.baf2CoreBankPaused];
      for (const [sD] of DD.baf2CoreBanked) wD.push(sD);
      for (const rD of sD) {
        for (const {
            item: DD
          }
          of rD.cost) wD.push(DD);
        for (const DD of rD.newDeposits) wD.push(DD.block);
        for (const DD of rD.unlocks) wD.push(DD, TD(DD));
        rD.reward && wD.push(rD.reward);
        for (const {
            item: DD
          }
          of null !== (pD = null === (KD = rD.charge) || void 0 === KD ? void 0 : KD.items) && void 0 !== pD ? pD : []) {
          var pD, KD;
          wD.push(DD)
        }
      }
      return {
        message: DD,
        itemNames: zD([...new Set(wD)])
      }
    }
    const Mn = "baf2MultiblockGuide";
    const On = new Map;
    const Jn = function(DD, zD, wD, sD) {
      let {
        localPlayerId: KD
      } = sD;
      const rD = new ML,
        LD = new Lf,
        gD = new Bf,
        RD = new ff(gD),
        AD = (DD, zD) => {
          zD ? RD.observe(DD) : RD.unobserve(DD)
        },
        UD = new Uf,
        fD = new Mf(AD),
        ID = DD => fD.covers(DD),
        BD = new yf;
      let GD;
      const hD = new mr((DD => {
          GD.sendCommand(DD)
        })),
        nD = () => {
          hD.send("baf2questbook")
        },
        MD = DD => function(DD, zD, wD) {
          const pD = {};
          for (const sD of wD) {
            let wD = On.get(sD);
            void 0 === wD && (wD = DD.getItemStat(zD, sD, "displayName"), On.set(sD, wD)), pD[sD] = wD
          }
          return pD
        }(GD, KD, DD),
        OD = new ms(nD),
        JD = new Hf((() => Es.e.get("loadingOverlayVisible"))),
        ED = new xR(hD, OD, JD),
        QD = new pI,
        XD = new Bn(JD),
        PD = new Gn((DD => {
          JD.show(DD, DD.baf2ToastMs)
        })),
        CD = new UI(AD),
        xD = new NG(CD),
        TD = new Cr,
        jD = new Lh,
        dD = new KL,
        lD = new MI({
          read: () => !1 !== hn.h.getItem(Mn),
          write: DD => {
            hn.h.setItem(Mn, DD)
          }
        }),
        WD = new uI(lD),
        ND = new FI(lD),
        ZD = new hB(lD, (DD => function(DD, zD) {
          const wD = wc(zD.w, zD.h, zD.d),
            pD = new Uint8Array(wD);
          for (let sD = 0; sD < wD; sD++) {
            const wD = kI(DD, qw(zD, pp(zD, sD)));
            pD[sD] = null === wD ? 0 : HL(wD)
          }
          return pD
        }(GD, DD)), cB(hD)),
        yD = new nB(lD, cB(hD)),
        kD = new BB,
        oD = (DD, zD) => {
          let [wD, pD, sD] = DD;
          kD.answered(zD) || JD.show({
            baf2ToastText: [(0, SD.Wd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: wD,
                h: pD,
                d: sD
              }
            }, SD.I.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      ZD.onSizeNotTaken(oD), yD.onSizeNotTaken(oD);
      const aD = new EB,
        uD = new wG(lD),
        tD = new sG,
        FD = new BG(tD),
        YD = new PG,
        qD = new ZG,
        Dz = new FG(qD),
        zz = new rh(qD),
        wz = qD.lookSource(),
        pz = new Jh({
          handles: DD => wz.handles(DD) || DD === iD,
          line: (DD, zD) => DD === iD ? function(DD, zD, wD) {
            var pD;
            const sD = eD(null === (pD = zD.at(wD)) || void 0 === pD ? void 0 : pD.item);
            return null === sD ? {
              key: `${nh}lookFarmEmpty`
            } : {
              key: DD.blockIdToBlockName(DD.getBlockId(wD[0], wD[1], wD[2])).endsWith("|Running") ? `${nh}lookFarmRunning` : `${nh}lookFarmWaiting`,
              keys: {
                mob: mD(sD)
              }
            }
          }(GD, CD, zD) : wz.line(DD, zD),
          version: () => wz.version() + CD.version()
        }, (DD => HI(lD.all(), DD, (DD => kI(GD, DD)))), (() => OD.get().tier)),
        sz = new yB,
        Kz = new ih,
        rz = new kh,
        Lz = kh.blade(),
        cz = new Fh,
        gz = new rI,
        Rz = new zn,
        Uz = new ah,
        fz = new oh;
      let Iz = -1 / 0,
        Bz = 0,
        Gz = -1 / 0,
        hz = -1 / 0;
      const nz = () => {
          hD.send("baf2islandsclose"), hz = Date.now()
        },
        Mz = [];

      function Oz(DD) {
        var zD, wD, pD, sD, KD, rD, cD;
        "core" === (null === (zD = LD.get()) || void 0 === zD ? void 0 : zD.kind) && "core" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && hD.send("baf2coreclose"), "power" === (null === (wD = LD.get()) || void 0 === wD ? void 0 : wD.kind) && "power" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && hD.send("baf2powerclose"), "water" === (null === (pD = LD.get()) || void 0 === pD ? void 0 : pD.kind) && "water" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && hD.send(HD.z), "terminal" === (null === (sD = LD.get()) || void 0 === sD ? void 0 : sD.kind) && "terminal" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && hD.send("baf2terminalclose"), "islands" === (null === (KD = LD.get()) || void 0 === KD ? void 0 : KD.kind) && "islands" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && nz();
        const gD = qD.getStatus();
        "collider" === (null === (rD = LD.get()) || void 0 === rD ? void 0 : rD.kind) && "collider" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && gD && hD.send(Zc(gD, "close"));
        const RD = DD => "reactor" === DD || "battery" === DD;
        if (RD(null === (cD = LD.get()) || void 0 === cD ? void 0 : cD.kind) && !RD(null === DD || void 0 === DD ? void 0 : DD.kind)) {
          var AD, UD, fD;
          const DD = "reactor" === (null === (AD = LD.get()) || void 0 === AD ? void 0 : AD.kind) ? null === (UD = ZD.get()) || void 0 === UD ? void 0 : UD.status.baf2RxAt : null === (fD = yD.get()) || void 0 === fD ? void 0 : fD.status.baf2BatAt;
          DD && hD.send(Az(DD, "close"))
        }
        "quests" === (null === DD || void 0 === DD ? void 0 : DD.kind) && nD(), LD.set(DD), null === DD && QD.release()
      }

      function Jz() {
        (0, Os.g)(), Oz(null)
      }
      let Ez = new Set,
        Qz = !1;
      const Xz = {
        onCreate: DD => {
          GD = DD, GD.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const zD of Cz) {
            const DD = Sz[zD].inputSlots ? iL(rD) : jL(zD, rD, TD, hD);
            Mz.push((0, ns.d)(zD, DD))
          }
          Mz.push((0, Os.w)((0, pD.createElement)(pD.Fragment, null, (0, pD.createElement)(Ef, {
            controller: fD
          }), (0, pD.createElement)(BI, {
            store: CD
          }), (0, pD.createElement)(Qh, {
            store: pz
          }), (0, pD.createElement)(Ff, {
            store: OD
          }), (0, pD.createElement)(zI, {
            store: JD
          }), (0, pD.createElement)(sI, {
            store: QD
          }), (0, pD.createElement)(cI, {
            store: gz
          }), (0, pD.createElement)(JB, {
            store: aD
          }), (0, pD.createElement)(KG, {
            store: tD
          })), {
            content: (0, pD.createElement)(gf, {
              commands: hD,
              store: LD,
              power: TD,
              water: dD,
              reactor: ZD,
              battery: yD,
              collider: qD,
              terminal: jD,
              quests: OD,
              tutorial: ED,
              close: Os.i,
              leave: () => {
                QD.dropHeld(), (0, Os.g)()
              },
              askIslands: () => {
                hz = -1 / 0, Iz = Date.now(), Bz = hD.send(vD)
              },
              openSocial: () => {
                (0, Os.g)(), Es.e.set({
                  openEverythingMenuName: Uw.l.SOCIAL
                })
              },
              showCore: DD => {
                Oz({
                  kind: "core",
                  core: DD
                }), hD.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Oz(null)
            }
          })), Mz.push((0, Ms.v)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Oz({
                kind: "quests"
              }), (0, Os.r)()
            }
          })), Mz.push(function(DD, zD) {
            let wD = null,
              pD = () => {};
            const sD = zD => {
              var sD;
              let {
                tutorial: KD,
                tutorialKnown: rD
              } = zD;
              (null === (sD = wD) || void 0 === sD ? void 0 : sD.tutorial) === KD && wD.tutorialKnown === rD || (wD = {
                tutorial: KD,
                tutorialKnown: rD
              }, pD = (0, Ms.v)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: PR[KD],
                icon: {
                  kind: "icon",
                  name: VR[KD]
                },
                iconOnly: !0,
                disabled: !rD,
                className: "Baf2TutorialButton",
                onClick: () => {
                  DD.next()
                }
              }))
            };
            sD(zD.get());
            const KD = Ws.l.subscribe(Zs, sD);
            return () => {
              Ws.l.unsubscribe(KD), pD()
            }
          }(ED, OD)), Qz = !1, Mz.push(Rn()), Mz.push(An()), Mz.push(function() {
            const DD = Ws.l.subscribe(Zs, wK),
              zD = () => {
                if (zK) {
                  const DD = zK;
                  zK = null, (0, Ns.w)(DD)
                }
              },
              wD = Ws.l.subscribe("toggleMenu", (DD => {
                "inventory" === (null === DD || void 0 === DD ? void 0 : DD.split("|")[0]) && zD()
              })),
              pD = Ws.l.subscribe("appManagerUpdated|openInGameMenuName", (DD => {
                "inventory" === DD && zD()
              }));
            return () => {
              Ws.l.unsubscribe(DD), Ws.l.unsubscribe(wD), Ws.l.unsubscribe(pD)
            }
          }()), Mz.push(function(DD) {
            const zD = Kn(DD),
              wD = Ws.l.subscribe(Zs, (DD => {
                sn.follow(DD, zD)
              }));
            return () => {
              Ws.l.unsubscribe(wD), sn.clear()
            }
          }(GD)), Mz.push(function() {
            const DD = document.documentElement,
              zD = (0, mf.d)(".InvenBodyRight", [], (() => {
                const zD = document.querySelector(".InvenBodyRight");
                zD && DD.style.setProperty("--baf2-backpack-width", `${zD.offsetWidth}px`)
              }));
            return () => {
              zD(), DD.style.removeProperty("--baf2-backpack-width")
            }
          }()), Mz.push(function() {
            const DD = document.documentElement;
            return DD.classList.add(wn), () => {
              DD.classList.remove(wn)
            }
          }()), Mz.push((() => {
            RD.dispose(), gD.dispose()
          })), BD.start(GD), Mz.push((() => {
            BD.dispose(), cz.dispose(), xD.dispose()
          }))
        },
        onClose: () => {
          (0, Ns.w)([]), zK = null, DK = new Set, Ln = null, (0, Ns.v)(new Map), On.clear();
          for (const DD of Mz) DD();
          OD.dispose(), pz.dispose(), JD.dispose(), QD.dispose(), sz.dispose(), Kz.dispose(GD), WD.dispose(GD), ND.dispose(GD), uD.dispose(GD), FD.dispose(GD), tD.dispose(), YD.dispose(), lD.dispose(), ZD.dispose(), yD.dispose(), aD.dispose(), rz.dispose(), Lz.dispose(), gz.dispose(), Dz.dispose(GD), zz.dispose(GD), qD.dispose(), Rz.dispose(), hD.clear()
        },
        onAfterRender: (DD, zD) => {
          var wD, pD, sD;
          try {
            BD.onAfterRender(zD)
          } catch (gD) {
            console.error("Error drawing BAF2 belt items", gD)
          }
          try {
            cz.onAfterRender(GD, KD)
          } catch (gD) {
            console.error("Error drawing BAF2 jet flames", gD)
          }
          Qz || (Qz = !0, hD.send("baf2clientready"));
          const rD = GD.getPositionView(KD);
          fD.onAfterRender(zD, rD, UD), CD.onAfterRender(zD, rD, UD, ID), RD.run(UD), sz.onAfterRender(GD, rD), Kz.onAfterRender(GD, rD), xD.onAfterRender(GD, rD), WD.onAfterRender(GD, rD), ND.onAfterRender(GD, KD, rD), uD.onAfterRender(GD, KD, rD), FD.onAfterRender(GD, KD), YD.onAfterRender(GD, rD), OD.onPlayerY(rD[1]), Dz.onAfterRender(GD), zz.onAfterRender(GD, KD, rD);
          const cD = GD.getTargetedBlock();
          pz.onAfterRender(GD, KD, null !== (wD = null === cD || void 0 === cD ? void 0 : cD.W8) && void 0 !== wD ? wD : 0, null !== (pD = null === cD || void 0 === cD ? void 0 : cD.position) && void 0 !== pD ? pD : null), Rz.onAfterRender(GD, zD), PD.onMining(function(DD, zD) {
            var wD, pD;
            const sD = DD.getMiningBlock();
            if (!sD) return null;
            const KD = (0, bD.h)(DD.getBlockId(sD[0], sD[1], sD[2])),
              rD = null !== (wD = null === (pD = DD.zwD(zD)) || void 0 === pD ? void 0 : pD.name) && void 0 !== wD ? wD : null,
              LD = DD.getItemStat(zD, KD.split("|")[0], "harvestLevel");
            return {
              block: KD,
              x: sD[0],
              y: sD[1],
              z: sD[2],
              Qg: rD,
              level: LD
            }
          }(GD, KD), GD.isMining(), performance.now()), "dropMap" === (null === (sD = LD.get()) || void 0 === sD ? void 0 : sD.kind) && Np(rD[1]) && Jz()
        },
        onPlayerChangeBlock: (DD, zD, wD, pD, sD, rD) => {
          DD === KD && function(DD, zD, wD, pD, sD, KD, rD) {
            const LD = eh(KD, rD, DD.isPlayerCrouching(zD));
            if (null === LD) return;
            if (DD.jT(wD, pD, sD, LD), !DD.getClientOption(zD, "canPickUpItems")) return;
            const cD = rw[LD.split("|")[0]];
            var gD, RD, AD;
            void 0 !== cD && (gD = DD.getInventoryItems(), RD = cD, AD = OI.f.maxItemStackSize, DD.getInventoryFreeSlotCount(zD) > 0 || gD.some((DD => null !== DD && DD.name === RD && null !== DD.amount && DD.amount < AD))) && DD.playSound(zD, (0, fn.g)("pickUp"), .5, 1)
          }(GD, DD, zD, wD, pD, sD, rD)
        },
        onPlayerAltAction: (DD, zD, wD, pD, sD) => {
          var rD, LD;
          if (!GD.getClientOption(KD, "canPickUpItems")) return;
          const cD = null !== (rD = null === (LD = GD.zwD(KD)) || void 0 === LD ? void 0 : LD.name) && void 0 !== rD ? rD : null,
            gD = function(DD, zD) {
              const wD = DD.split("|")[0];
              return VD(wD) && zD !== gs && "Sky Pack" !== zD ? wD : null
            }(sD, cD);
          if (null !== gD) return void(Uz.tap(gD, performance.now()) && rn(GD, KD, gD, OD));
          if (!mp(cD)) return;
          const RD = fz.isNewPress(performance.now()),
            AD = function(DD, zD, wD) {
              return !mp(zD) || wD ? null : qp(DD)
            }(sD, cD, GD.isPlayerCrouching(KD));
          null !== AD && RD && GD.jT(zD, wD, pD, AD)
        },
        onPlayerAttemptAltAction: (DD, zD, wD, pD, sD) => {
          if (function(DD, zD, wD, pD, sD) {
              "Workbench" === pD.split("|")[0] && DD.getClientOption(wD, "canCraft") && (sn.open("Workbench", sD.get(), Kn(DD)), zD.send("baf2station Workbench"))
            }(GD, hD, KD, sD, OD), Un(GD, KD, sD)) return "preventAction";
          XD.onAltAction(GD, KD, sD)
        },
        onReceivedMessageFromServer: (DD, zD) => {
          if ("baf2MachineStatus" === DD) {
            var wD, pD, sD, gD, RD, AD, UD, ID, nD, ED, XD, VD, PD, xD, bD, SD;
            const DD = zD,
              KD = DD.baf2MachineTaught;
            rD.set(DD.baf2MachinePos, {
              status: DD.baf2MachineStatus,
              power: null !== (wD = DD.baf2MachinePower) && void 0 !== wD ? wD : null,
              opLeftMs: null !== (pD = DD.baf2MachineOpLeftMs) && void 0 !== pD ? pD : null,
              dug: DD.baf2MachineYield ? {
                item: DD.baf2MachineYield,
                name: MD([DD.baf2MachineYield])[DD.baf2MachineYield]
              } : null,
              powerCap: null !== (sD = DD.baf2MachinePowerCap) && void 0 !== sD ? sD : null,
              powerRates: null !== (gD = DD.baf2MachinePowerRates) && void 0 !== gD ? gD : null,
              coupled: !0 === DD.baf2MachineCoupled,
              couplerLevel: null !== (RD = DD.baf2MachineCoupler) && void 0 !== RD ? RD : 1,
              taught: KD,
              taughtName: KD ? MD([KD])[KD] : null,
              tier: null !== (AD = DD.baf2MachineTier) && void 0 !== AD ? AD : null,
              input: null !== (UD = DD.baf2MachineInput) && void 0 !== UD ? UD : null,
              inertCoupler: null !== (ID = DD.baf2MachineInertCoupler) && void 0 !== ID ? ID : null,
              inputShort: null !== (nD = DD.baf2MachineInputShort) && void 0 !== nD ? nD : null,
              field: null !== (ED = DD.baf2MachineField) && void 0 !== ED ? ED : null,
              noSeeds: !0 === DD.baf2MachineNoSeeds,
              fuelFed: !0 === DD.baf2MachineFuelFed,
              fuelFeeds: !0 === DD.baf2MachineFuelFeeds,
              coreFull: !0 === DD.baf2MachineCoreFull,
              waterUnpowered: !0 === DD.baf2MachineWaterUnpowered,
              powerShort: !0 === DD.baf2MachinePowerShort,
              powerWait: !0 === DD.baf2MachinePowerWait,
              reactorPowered: !0 === DD.baf2MachineReactorPowered,
              fuelLeftMs: null !== (XD = DD.baf2MachineFuelLeftMs) && void 0 !== XD ? XD : null,
              burning: null !== (VD = DD.baf2MachineBurning) && void 0 !== VD ? VD : null,
              fuelKeep: null !== (PD = DD.baf2MachineFuelKeep) && void 0 !== PD ? PD : null,
              water: null !== (xD = DD.baf2MachineWater) && void 0 !== xD ? xD : null,
              farm: null !== (bD = DD.baf2MachineFarm) && void 0 !== bD ? bD : null,
              cryo: null !== (SD = DD.baf2MachineCryo) && void 0 !== SD ? SD : null
            })
          } else if ("baf2StationOpen" === DD) {
            const DD = zD.baf2Station;
            Uz.consumeServerOpen(DD, performance.now()) || rn(GD, KD, DD, OD)
          } else if ("baf2Power" === DD) {
            const DD = zD;
            TD.set(DD), DD.baf2PowerOpen && (Oz({
              kind: "power"
            }), (0, Os.r)())
          } else if (DD === HD.F) {
            const DD = zD;
            dD.set(DD), DD.baf2WaterOpen && (Oz({
              kind: "water"
            }), (0, Os.r)())
          } else if ("baf2RxPlans" === DD) {
            var iD, WD, ND;
            const DD = zD;
            lD.bJ(DD);
            const wD = new Set(DD.baf2RxPlanList.map((DD => {
              let [zD, wD, pD] = DD;
              return `${zD},${wD},${pD}`
            })));
            aD.retain(wD);
            const pD = null === (iD = LD.get()) || void 0 === iD ? void 0 : iD.kind,
              sD = "reactor" === pD ? null === (WD = ZD.get()) || void 0 === WD ? void 0 : WD.status.baf2RxAt : "battery" === pD ? null === (ND = yD.get()) || void 0 === ND ? void 0 : ND.status.baf2BatAt : void 0;
            sD && Ez.has(sD.join(",")) && !wD.has(sD.join(",")) && Jz(), Ez = wD
          } else if ("baf2RxStatus" === DD) {
            const DD = zD;
            ZD.set(DD), DD.baf2RxOpen && (Oz({
              kind: "reactor"
            }), (0, Os.r)())
          } else if ("baf2BatStatus" === DD) {
            const DD = zD;
            yD.set(DD), DD.baf2BatOpen && (Oz({
              kind: "battery"
            }), (0, Os.r)())
          } else if ("baf2RxAlarm" === DD) aD.bJ(zD);
          else if ("baf2Bomb" === DD) tD.bJ(zD, GD.getPositionView(KD));
          else if ("baf2Fallout" === DD) YD.bJ(zD);
          else if ("baf2ColBeams" === DD) qD.onBeams(zD);
          else if ("baf2ColStatus" === DD) {
            const DD = zD;
            var mD, eD;
            if (qD.onStatus(DD), DD.baf2ColOpen) qD.onOpen(null !== (mD = null === (eD = GD.zwD(KD)) || void 0 === eD ? void 0 : eD.name) && void 0 !== mD ? mD : null), Oz({
              kind: "collider"
            }), (0, Os.r)()
          } else if ("baf2Terminal" === DD) {
            const DD = zD;
            var oD;
            if (jD.apply(DD)) DD.baf2TermReset && (Oz({
              kind: "terminal"
            }), (0, Os.r)());
            else "terminal" === (null === (oD = LD.get()) || void 0 === oD ? void 0 : oD.kind) && (LD.set(null), (0, Os.g)())
          } else if ("baf2Core" === DD) {
            var uD;
            const DD = zD;
            if (cD(!0 === DD.baf2CoreNuclear), function(DD, zD) {
                return "core" === (null === DD || void 0 === DD ? void 0 : DD.kind) && zD.baf2CoreTier > DD.core.message.baf2CoreTier
              }(LD.get(), DD)) return void(0, Os.g)();
            if (DD.baf2CoreRefresh && "core" !== (null === (uD = LD.get()) || void 0 === uD ? void 0 : uD.kind)) return;
            Oz({
              kind: "core",
              core: nn(DD, MD)
            }), DD.baf2CoreRefresh || (0, Os.r)()
          } else if ("baf2WrenchUndo" === DD) {
            const {
              baf2WrenchPos: DD,
              baf2WrenchBlock: wD
            } = zD;
            GD.jT(DD[0], DD[1], DD[2], wD)
          } else if ("baf2Toast" === DD) {
            const DD = zD;
            kD.heard(performance.now(), DD.baf2ToastMs), JD.show(DD)
          } else if ("baf2Area" === DD) QD.arrive(zD, null !== LD.get());
          else if ("baf2Quest" === DD) {
            const DD = zD;
            cD(!0 === DD.baf2QuestNuclear), OD.set(DD, function(DD, zD) {
              var wD, pD, sD, KD, rD;
              const LD = [];
              for (const [, , RD, , , , , , AD, UD] of DD.baf2QuestSteps) null !== RD && LD.push(RD), LD.push(...null !== AD && void 0 !== AD ? AD : [], ...null !== UD && void 0 !== UD ? UD : []);
              DD.baf2QuestReward && LD.push(DD.baf2QuestReward);
              const cD = null === (wD = DD.baf2QuestSide) || void 0 === wD ? void 0 : wD[2][2];
              cD && LD.push(cD), LD.push(...null !== (pD = null === (sD = DD.baf2QuestSide) || void 0 === sD ? void 0 : sD[2][8]) && void 0 !== pD ? pD : [], ...null !== (KD = null === (rD = DD.baf2QuestSide) || void 0 === rD ? void 0 : rD[2][9]) && void 0 !== KD ? KD : []);
              for (const [RD] of null !== (gD = DD.baf2QuestAlso) && void 0 !== gD ? gD : []) {
                var gD;
                LD.push(RD)
              }
              return zD(LD)
            }(DD, MD)), gn(DD.baf2QuestTier)
          } else if ("baf2Route" === DD) ! function(DD, zD) {
            let {
              baf2RouteCells: wD,
              baf2RouteInto: pD
            } = zD;
            0 !== wD.length && pD ? DD.setRouteChevrons({
              cells: wD.map(((DD, zD) => {
                const [sD, , KD] = function(DD, zD, wD) {
                  const pD = wD + 1 < DD.length ? DD[wD + 1] : zD;
                  return [pD[0] - DD[wD][0], 0, pD[2] - DD[wD][2]]
                }(wD, pD, zD);
                return {
                  pos: DD,
                  way: [sD, KD]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : DD.setRouteChevrons(null)
          }(GD, zD);
          else if ("baf2QuestBook" === DD) OD.setBook(zD);
          else if ("baf2Stalls" === DD) fD.set(zD.baf2StallCells);
          else if (DD === Gw.o) BD.onMoves(zD);
          else if (DD === Gw.h) BD.onLines(zD);
          else if ("baf2Labels" === DD) CD.bJ(zD);
          else if ("baf2DropMap" === DD) Oz({
            kind: "dropMap",
            dropMap: zD
          }), (0, Os.r)();
          else if ("baf2Islands" === DD) {
            var FD, Dz;
            const DD = zD;
            if (hD.syncIslandEdits(DD.baf2IslandsAnswered), !DD.baf2IslandsOpen && "islands" !== (null === (FD = LD.get()) || void 0 === FD ? void 0 : FD.kind)) return;
            if (DD.baf2IslandsOpen) {
              var zz, wz;
              const zD = Es.e.get("openEverythingMenuName"),
                wD = hD.sent() >= Bz,
                pD = "other" !== (fz = {
                  askedAtMs: Iz,
                  askSent: wD,
                  reaskedAtMs: Gz,
                  nowMs: Date.now(),
                  panel: null !== (zz = null === (wz = LD.get()) || void 0 === wz ? void 0 : wz.kind) && void 0 !== zz ? zz : null,
                  inGameMenu: Es.e.get("openInGameMenuName"),
                  everythingMenu: null === zD ? null : zD === Uw.l.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== DD.baf2IslandsFocusInvite
                }).everythingMenu && (!!fz.focusInvite || "islands" === fz.panel && "clientGame" === fz.inGameMenu || !(fz.nowMs - fz.reaskedAtMs < ig) && (fz.askSent && fz.nowMs - fz.askedAtMs < ig ? "core" === fz.panel && "clientGame" === fz.inGameMenu && null === fz.everythingMenu : "shop" === fz.everythingMenu || null === fz.inGameMenu));
              if (wD && (Iz = -1 / 0), Gz = -1 / 0, !pD) return void nz()
            }
            const wD = (sz = DD.baf2IslandsOpen, Kz = "islands" === (null === (Dz = LD.get()) || void 0 === Dz ? void 0 : Dz.kind), Rz = hz, Az = Date.now(), sz && !Kz && Az - Rz < ig);
            Oz({
              kind: "islands",
              islands: DD,
              arrivedAtMs: Date.now(),
              backToCore: lg(LD.get())
            }), wD && (hz = -1 / 0, Gz = Date.now(), hD.send(vD)), DD.baf2IslandsOpen && ("clientGame" !== Es.e.get("openInGameMenuName") && (0, Qs.i)(), (0, Os.r)())
          } else if ("baf2CoopTransfer" === DD) {
            var pz;
            const DD = zD;
            DD.baf2TransferOn ? (Oz({
              kind: "transfer",
              transfer: DD,
              arrivedAtMs: Date.now()
            }), (0, Os.r)()) : "transfer" === (null === (pz = LD.get()) || void 0 === pz ? void 0 : pz.kind) && (0, Os.g)()
          } else "baf2IslandLeft" === DD ? (QD.dropHeld(), null !== LD.get() && Jz(), "inventory" === Es.e.get("openInGameMenuName") && (0, Qs.i)()) : "baf2Arc" === DD ? rz.bJ(GD, zD) : "baf2Blade" === DD ? Lz.onBlade(GD, zD) : "baf2JetFlame" === DD ? cz.bJ(GD, zD) : "baf2GearPower" === DD && gz.bJ(zD);
          var sz, Kz, Rz, Az, fz
        }
      };
      return Xz
    }
  },
  38493: (DD, zD, wD) => {
    function pD(DD, zD, wD) {
      const pD = new Set,
        sD = new ResizeObserver(wD),
        KD = () => {
          const zD = new Set(document.querySelectorAll(DD));
          let KD = !1;
          for (const DD of pD) zD.has(DD) || (sD.unobserve(DD), pD.delete(DD), KD = !0);
          for (const DD of zD) pD.has(DD) || (sD.observe(DD), rD.observe(DD, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), pD.add(DD));
          KD && wD()
        },
        rD = new MutationObserver((zD => {
          zD.some((DD => "attributes" === DD.type)) && wD(), zD.some((zD => function(DD, zD, wD) {
            if ("childList" !== DD.type) return !1;
            for (const pD of DD.addedNodes)
              if (pD instanceof Element && (pD.matches(zD) || pD.querySelector(zD))) return !0;
            for (const pD of DD.removedNodes)
              if (pD instanceof Element)
                for (const DD of wD)
                  if (pD.contains(DD)) return !0;
            return !1
          }(zD, DD, pD))) && KD()
        }));
      rD.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const LD of zD) sD.observe(LD);
      return window.addEventListener("resize", wD), KD(), wD(), () => {
        sD.disconnect(), rD.disconnect(), window.removeEventListener("resize", wD)
      }
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  38470: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      d: () => KD
    });
    const pD = new WeakMap;

    function sD(DD) {
      let zD = pD.get(DD);
      return zD || (zD = {
        hidden: DD.hidden,
        x: NaN,
        y: NaN
      }, pD.set(DD, zD)), zD
    }

    function KD(DD, zD) {
      const wD = sD(DD);
      wD.hidden !== zD && (wD.hidden = zD, DD.hidden = zD)
    }

    function rD(DD, zD, wD) {
      const pD = sD(DD);
      pD.x === zD && pD.y === wD || (pD.x = zD, pD.y = wD, DD.style.translate = `${zD}vw ${wD}vh`)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);