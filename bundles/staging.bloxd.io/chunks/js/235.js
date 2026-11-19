export const id = 235;
export const ids = [235];
export const modules = {
  37872: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(37879);
    const pD = [0, 0, 0];
    class iD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD;
        this.pool = DD, this.origin = CD, this.count = 0, this.free = []
      }
      take() {
        var DD;
        const CD = null !== (DD = this.free.pop()) && void 0 !== DD ? DD : this.count++;
        return CD >= this.pool.LB && this.pool.grow(Math.max(2 * this.pool.LB, CD + 1)), this.hide(CD), CD
      }
      release(DD) {
        this.hide(DD), this.free.push(DD)
      }
      write(DD, CD, cD, pD) {
        const {
          records: iD
        } = this.pool, {
          origin: fD
        } = this, bD = DD * ID.b;
        iD[bD] = CD - fD[0], iD[bD + 1] = cD - fD[1], iD[bD + 2] = pD - fD[2], iD[bD + ID.f] = 0, this.pool.markDirty(DD)
      }
      hide(DD) {
        this.pool.records[DD * ID.b + ID.f] = 1, this.pool.markDirty(DD)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class fD {
      constructor(DD, CD, cD) {
        this.api = DD, this.model = CD, this.initialCapacity = cD, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(DD) {
        let CD = this.kinds.get(DD);
        if (void 0 === CD) {
          const cD = this.api.createInstancePool({
            ...this.model,
            item: DD
          }, this.initialCapacity);
          null === cD || void 0 === cD || cD.setOrigin(this.origin[0], this.origin[1], this.origin[2]), CD = cD && new iD(cD, this.origin), this.kinds.set(DD, CD)
        }
        return CD
      }
      follow(DD) {
        const {
          origin: CD
        } = this;
        if (Math.abs(DD[0] - CD[0]) <= 512 && Math.abs(DD[1] - CD[1]) <= 512 && Math.abs(DD[2] - CD[2]) <= 512) return !1;
        CD[0] = Math.floor(DD[0]), CD[1] = Math.floor(DD[1]), CD[2] = Math.floor(DD[2]);
        for (const cD of this.kinds.values()) null === cD || void 0 === cD || cD.pool.setOrigin(CD[0], CD[1], CD[2]);
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
  37892: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      g: () => bD,
      j: () => QD
    });
    const ID = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      pD = [0, 1, 2, 0, 2, 3],
      iD = [4, 5];

    function fD(DD, CD, cD, ID, pD) {
      for (let fD = 0; fD < 6; fD++) iD.includes(fD) === pD && wD(DD, CD, cD, ID, fD)
    }

    function bD(DD, CD, cD, ID) {
      for (let pD = 0; pD < 6; pD++) wD(DD, CD, cD, ID, pD)
    }

    function QD(DD, CD, cD, iD, fD) {
      for (let bD = 0; bD < 6; bD++)
        for (const QD of [0, 1]) {
          const [wD, SD, BD] = [QD + 2, QD + 1, (QD + 3) % 4], yD = DD.length / 3;
          for (const [CD, pD] of [
              [QD, SD],
              [wD, SD],
              [wD, BD],
              [QD, BD]
            ])
            for (let QD = 0; QD < 3; QD++) {
              const wD = ID[3 * (4 * bD + CD) + QD],
                SD = ID[3 * (4 * bD + pD) + QD];
              DD.push((wD + (SD - wD) * fD) * iD / 2 + cD[QD])
            }
          for (const DD of pD) CD.push(yD + DD)
        }
    }

    function wD(DD, CD, cD, iD, fD) {
      let [bD, QD, wD] = cD, [SD, BD, yD] = iD;
      const MD = DD.length / 3;
      for (let pD = 4 * fD; pD < 4 * fD + 4; pD++) DD.push(ID[3 * pD] * SD / 2 + bD, ID[3 * pD + 1] * BD / 2 + QD, ID[3 * pD + 2] * yD / 2 + wD);
      for (const ID of pD) CD.push(MD + ID)
    }
  },
  37865: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => nN
    });
    var ID = cD(53);
    const pD = [{
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
      iD = 10;
    let fD = !0;

    function bD() {
      return fD
    }

    function QD(DD) {
      fD = DD
    }
    const wD = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function SD() {
      return fD ? pD.length : iD
    }

    function BD(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = pD[DD - 1]) || void 0 === cD ? void 0 : cD.reactorTier) && void 0 !== CD ? CD : 0
    }

    function yD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BD(DD) > 0;
      return cD && !fD ? "hidden" : DD <= CD ? "open" : cD ? CD < 5 ? "hidden" : CD < iD ? "teaser" : "locked" : "locked"
    }

    function MD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: ID,
        n: pD
      } = oD(DD);
      return {
        key: CD[ID],
        params: {
          [ID]: cD ? String(pD) : pD
        }
      }
    }
    const tD = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function ZD(DD, CD) {
      return BD(DD) > 0 && CD < iD
    }

    function oD(DD) {
      const CD = BD(DD);
      if (CD > 0) return {
        kind: "atomic",
        n: CD,
        short: `A${CD}`
      };
      const cD = function(DD) {
        return DD >= 6 && DD <= 10 ? DD - 6 + 1 : 0
      }(DD);
      return cD > 0 ? {
        kind: "stage",
        n: cD,
        short: `S${cD}`
      } : {
        kind: "tier",
        n: DD,
        short: String(DD)
      }
    }

    function vD(DD) {
      return pD[Math.max(1, Math.min(DD, pD.length)) - 1]
    }

    function ND(DD, CD) {
      return DD < CD ? function(DD) {
        var CD;
        return null !== (CD = pD[DD]) && void 0 !== CD ? CD : null
      }(DD) : null
    }
    const gD = "baf2coresubmit",
      XD = "baf2corebankpause",
      mD = "baf2coredeposit",
      nD = "baf2corechargepause";

    function OD(DD) {
      var CD;
      return null !== (CD = DD.baf2CoreOpen) && void 0 !== CD ? CD : iD
    }
    const PD = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function HD(DD) {
      return PD.includes(DD)
    }
    const UD = (DD, CD) => CD.map((CD => [CD, [DD]])),
      xD = Object.fromEntries([...UD("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...UD("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...UD("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...UD("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...UD("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...UD("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...UD("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...UD("Parts Bench", ["Focus Lens"]), ...UD("Machine Bench", ["Laser", "Collider"]), ...UD("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...UD("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...UD("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...UD("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...UD("Tool Bench", ["Mob Cage"]), ...UD("Tool Bench", ["Pocket Terminal"]), ...UD("Tool Bench", ["Comet Beacon"]), ...UD("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function qD(DD) {
      var CD;
      return null !== (CD = xD[DD]) && void 0 !== CD ? CD : ["Workbench"]
    }

    function JD(DD) {
      return qD(DD)[0]
    }
    pD.slice(1).map(((DD, CD) => `Core Tier ${CD+2}`));
    var KD = cD(9141);
    const aD = ["on", "hud", "off"];

    function VD(DD) {
      return "on" === DD
    }
    var zD = cD(326);
    const jD = "Mob Farm",
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
      LD = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      TD = {
        1: 20,
        2: 60,
        3: 120
      },
      GD = "baf2farmvoid",
      RD = "Caged ",
      kD = " Spawner Block";

    function dD(DD) {
      return `lifeform:${(0,zD.le)(DD)}`
    }

    function YD(DD) {
      if (!DD) return null;
      if (DD.startsWith(RD)) {
        const CD = DD.slice(6);
        return LD.includes(CD) ? CD : null
      }
      if (DD.endsWith(kD)) {
        const CD = DD.slice(0, -14);
        return void 0 !== lD[CD] ? CD : null
      }
      return null
    }

    function WD(DD) {
      return !0 === DD.mobFarm
    }

    function sD(DD, CD) {
      return TD[lD[CD]] * DD.opMs / 1e3
    }
    const ED = new Map;
    const eD = "baf2islands",
      uD = "baf2islandnew";

    function hD(DD) {
      const CD = pD.findIndex((CD => CD.unlocks.includes(DD)));
      return CD < 0 ? 1 : CD + 1
    }

    function rD(DD) {
      return Math.floor(DD).toLocaleString("en-US")
    }
    var AD = cD(37804);
    const FD = "baf2terminaltake",
      DC = "baf2terminalput",
      CC = ["one", "stack", "fill"];

    function cC(DD, CD, cD) {
      return `${FD} ${DD} ${CD} ${cD}`
    }

    function IC(DD, CD, cD) {
      return `${DC} ${DD} ${CD} ${cD}`
    }

    function pC(DD) {
      return `${DC} ${DD}`
    }
    const iC = [
      [`${FD} `, "take"],
      [`${DC} `, "put"]
    ];

    function fC(DD) {
      const CD = iC.find((CD => {
        let [cD] = CD;
        return DD.startsWith(cD)
      }));
      if (!CD) return null;
      const [cD, ID] = CD, [pD, iD, ...fD] = DD.slice(cD.length).trim().split(" "), bD = Number(pD);
      if (!Number.isSafeInteger(bD) || bD <= 0) return null;
      if ("put" === ID && void 0 === iD) return {
        kind: "putAll",
        seq: bD
      };
      const QD = function(DD) {
        if (CC.includes(DD)) return DD;
        const CD = Number(DD);
        return /^\d+$/.test(DD) && Number.isSafeInteger(CD) && CD > 0 ? CD : null
      }(null !== iD && void 0 !== iD ? iD : "");
      return null === QD || 0 === fD.length ? null : {
        kind: ID,
        seq: bD,
        mode: QD,
        item: fD.join(" ")
      }
    }

    function bC(DD, CD) {
      const cD = "number" === typeof DD ? DD : "one" === DD ? 1 : "stack" === DD ? 99 : CD;
      return Math.min(CD, cD)
    }

    function QC(DD, CD) {
      const cD = DD => "number" === typeof DD ? DD : "one" === DD ? 1 : 99;
      return "fill" === DD || "fill" === CD ? "fill" : cD(DD) + cD(CD)
    }

    function wC(DD, CD) {
      const cD = fC(DD),
        ID = fC(CD),
        pD = cD && ID ? function(DD, CD) {
          return "take" === DD.kind || "take" === CD.kind ? "take" === DD.kind && "take" === CD.kind && DD.item === CD.item ? {
            ...CD,
            mode: QC(DD.mode, CD.mode)
          } : null : "putAll" === DD.kind || "putAll" === CD.kind ? {
            kind: "putAll",
            seq: CD.seq
          } : DD.item === CD.item ? {
            ...CD,
            mode: QC(DD.mode, CD.mode)
          } : null
        }(cD, ID) : null;
      return pD ? "putAll" === (iD = pD).kind ? pC(iD.seq) : "put" === iD.kind ? IC(iD.seq, iD.mode, iD.item) : cC(iD.seq, iD.mode, iD.item) : null;
      var iD
    }
    const SC = "baf2rx";

    function BC(DD, CD) {
      for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD];
      return [SC, DD[0], DD[1], DD[2], CD, ...ID].join(" ")
    }
    const yC = 2,
      MC = 4,
      tC = 8,
      ZC = 16,
      oC = 32,
      vC = 64,
      NC = 128,
      gC = 256,
      XC = 512,
      mC = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      nC = [{
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
    const OC = "Biomass",
      PC = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function HC(DD) {
      return {
        input: OC,
        inputAmount: 1,
        output: DD,
        outputAmount: 1
      }
    }
    const UC = "baf2synth",
      xC = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      qC = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      JC = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      KC = function(DD, CD) {
        return {
          input: DD,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: CD,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      aC = function(DD, CD) {
        return {
          ...KC(DD, CD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      VC = qC.map((DD => aC(DD, "Biomass", 2))),
      zC = {
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
          recipes: [KC("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), KC("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), KC("Raw Gold", "Gold Grit", 2), KC("Messy Stone", "Sand"), KC("Gravel", "Sand"), KC("Raw Voltite", "Voltite Dust", 2), KC("Moonstone", "Moonstone Dust", 4), KC("Wheat Seeds", "Fertiliser"), KC("Raw Uranium", "Uranium Grit", 2), aC("Mossy Messy Stone", "Sand"), ...VC],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [KC("Iron Grit", "Iron Bar"), KC("Copper Grit", "Copper Bar"), KC("Gold Grit", "Gold Bar"), KC("Raw Iron", "Iron Bar"), KC("Raw Copper", "Copper Bar"), KC("Raw Gold", "Gold Bar"), KC("Sand", "Glass"), KC("Messy Stone", "Stone"), ...zD.Qc.map((DD => KC(DD, "Charcoal", 1, 4))), KC("Wheat", "Bread", 1, 2), ...qC.map(((DD, CD) => aC(DD, JC[CD])))],
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
          recipes: [KC("Iron Bar", "Iron Plate"), KC("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [KC("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [KC("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [KC("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), KC("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), KC("Raw Gold", "Gold Grit", 3), KC("Raw Voltite", "Voltite Dust", 3), KC("Messy Stone", "Sand", 2), KC("Gravel", "Sand", 2), KC("Moonstone", "Moonstone Dust", 6), KC("Raw Uranium", "Uranium Grit", 3), aC("Mossy Messy Stone", "Sand", 2), ...VC],
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
          table: mC
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [KC("Coal", "Diamond", 1, 24), KC("Voltite Dust", "Moonstone", 1, 12)],
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
        ...AD.e
      },
      jC = {
        Crusher: [KC("Spent Pellet", "Glow Dust"), KC("Wheat Seeds", "Biomass"), KC("Wheat", "Biomass"), KC("Dead Bush", "Biomass"), KC("Dusk Moss", "Biomass"), KC("Rotten Flesh", "Biomass"), KC("Bone", "Biomass", 2)],
        "Shatter Mill": [KC("Spent Pellet", "Glow Dust"), KC("Wheat Seeds", "Biomass"), KC("Wheat", "Biomass"), KC("Dead Bush", "Biomass"), KC("Dusk Moss", "Biomass"), KC("Rotten Flesh", "Biomass"), KC("Bone", "Biomass", 2), ...zD.Qc.map((DD => KC(DD, "Biomass")))],
        Smelter: [KC("Biomass", "Fertiliser", 2)],
        Press: [KC("Coal", "Graphite", 1, 4)]
      },
      lC = "Power Coupler",
      LC = "Advanced Coupler",
      TC = "Nova Coupler",
      GC = [{
        item: lC,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: LC,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: TC,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const RC = new Map;

    function kC(DD) {
      var CD, cD;
      return null !== (CD = null !== (cD = DD.fuelSlot) && void 0 !== cD ? cD : DD.couplerSlot) && void 0 !== CD ? CD : null
    }

    function dC(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!DD.couplable) throw new Error(`${DD.kind} takes no Power Coupler`);
      let cD = RC.get(DD);
      cD || (cD = [], RC.set(DD, cD));
      let ID = cD[CD];
      if (!ID) {
        var pD;
        const {
          divisor: iD,
          powerPerS: fD
        } = GC[CD - 1], bD = DD.opMs / iD, QD = void 0 !== DD.fluidMade || void 0 !== DD.cryoMade ? DD.powerPerOp : fD * bD / 1e3;
        ID = {
          ...DD,
          fuelSlot: null,
          couplerSlot: null !== (pD = kC(DD)) && void 0 !== pD ? pD : void 0,
          opMs: bD,
          powerPerOp: QD,
          coupled: !0
        }, CD > 1 && (ID = {
          ...ID,
          couplerLevel: CD
        }), cD[CD] = ID
      }
      return ID
    }
    const YC = new Map;
    const WC = new Map;

    function sC(DD, CD) {
      if (null === CD || (cD = CD, !PC.includes(cD))) return DD;
      var cD;
      let ID = WC.get(CD);
      return ID || (ID = {
        ...DD,
        recipes: [HC(CD)]
      }, WC.set(CD, ID)), ID
    }

    function EC(DD) {
      return !0 === DD.synth
    }
    const eC = (DD, CD, cD, ID) => ({
        output: DD,
        outputAmount: CD,
        tier: cD,
        inputs: ID.map((DD => {
          let [CD, cD] = DD;
          return {
            item: CD,
            amount: cD
          }
        }))
      }),
      uC = Object.fromEntries([eC("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), eC("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), eC("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), eC("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), eC("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), eC("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), eC("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), eC("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), eC("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), eC("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), eC("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), eC("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), eC("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), eC("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), eC("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), eC("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), eC("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), eC("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), eC("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), eC("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), eC("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), eC("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), eC("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), eC("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), eC("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), eC("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), eC("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), eC("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), eC("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), eC("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((DD => [DD.output, DD]))),
      hC = new Map;

    function rC(DD, CD) {
      let cD = zC[DD];
      if (CD.atomic && (cD = function(DD) {
          const CD = jC[DD.kind];
          if (!CD) return DD;
          let cD = YC.get(DD.kind);
          if (!cD) {
            const ID = new Set(CD.map((DD => DD.input))),
              pD = DD.recipes.filter((DD => !ID.has(DD.input)));
            cD = {
              ...DD,
              recipes: [...pD, ...CD]
            }, YC.set(DD.kind, cD)
          }
          return cD
        }(cD)), cD.synth) return sC(cD, CD.taught);
      if (CD.coupled && cD.couplable) return dC(cD, CD.level);
      const ID = cD.inputSlots && null !== CD.taught ? uC[CD.taught] : void 0;
      if (!ID) return cD;
      const pD = `${DD}|${ID.output}`;
      let iD = hC.get(pD);
      return iD || (iD = {
        ...cD,
        bench: ID
      }, hC.set(pD, iD)), iD
    }
    const AC = ["Diamond", "Moonstone"];

    function FC(DD) {
      return new Set(DD.flatMap((DD => DD.bonus ? [DD.output, DD.bonus.item] : [DD.output])).filter((DD => !AC.includes(DD))))
    }
    const Dc = Object.values(zC).flatMap((DD => DD.recipes));
    FC(Dc.filter((DD => !0 !== DD.nuclear))), FC([...Dc.filter((DD => !0 === DD.nuclear)), ...Object.values(jC).flat()]);

    function Cc(DD) {
      return null === DD.inputSlot && void 0 === DD.inputSlots && void 0 === DD.powerMade && void 0 === DD.fluidMade && !DD.treeCutter && void 0 === DD.table
    }

    function cc(DD) {
      return !0 === DD.treeCutter
    }
    const Ic = ["Voltite Cell"];

    function pc(DD) {
      var CD, cD;
      return null !== (CD = null === (cD = DD.fuels) || void 0 === cD ? void 0 : cD.some((DD => Ic.includes(DD)))) && void 0 !== CD && CD
    }
    const ic = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(zD.Qc.map((DD => [DD, 8e3]))),
        ...Object.fromEntries(zD.zd.map((DD => [DD, 2e3]))),
        "Voltite Cell": 12e4
      },
      fc = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      bc = {
        "Uranium Deposit": 4e3
      };

    function Qc(DD) {
      var CD;
      return null !== (CD = Object.keys(fc).find((CD => fc[CD] === DD))) && void 0 !== CD ? CD : null
    }

    function wc(DD) {
      return xC.includes(DD)
    }

    function Sc(DD) {
      return !0 !== DD.nuclear || bD()
    }
    var Bc = cD(312);
    var yc = cD(9226),
      Mc = cD(9151),
      tc = cD(9230),
      Zc = cD(9218);
    const oc = "Reactor Controller",
      vc = "Reactor Port",
      Nc = "Battery Cell",
      gc = ["fuel", "water", "waste"],
      Xc = {
        fuel: vc,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      mc = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      nc = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Oc = "Reactor Frame",
      Pc = "Reactor Glass",
      Hc = {
        edge: [Oc],
        cap: [Pc, vc],
        wall: [Pc, vc],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [oc]
      },
      Uc = {
        edge: [Nc],
        cap: [Nc],
        wall: [Nc],
        inside: [Nc],
        ctrl: [Nc]
      },
      xc = ["edge", "cap", "wall", "inside"],
      qc = ["Reactor Slag"];

    function Jc(DD) {
      return qc.includes(Kc(DD))
    }

    function Kc(DD) {
      const CD = DD.indexOf("|");
      return CD < 0 ? DD : DD.slice(0, CD)
    }

    function ac(DD) {
      return Kc(DD) === oc ? "reactor" : null
    }

    function Vc(DD) {
      return Kc(DD) !== vc ? null : DD.endsWith("|Water") ? "water" : DD.endsWith("|Waste") ? "waste" : "fuel"
    }

    function zc(DD) {
      const CD = Vc(DD);
      return null === CD ? null : Lc(Xc[gc[(gc.indexOf(CD) + 1) % gc.length]], function(DD) {
        return DD.includes(jc)
      }(DD))
    }
    const jc = "|meta|rot1|Formed",
      lc = new Set([Oc, Pc, vc]);

    function Lc(DD, CD) {
      var cD;
      const ID = Kc(DD);
      if (!lc.has(ID)) return DD;
      if (ID !== vc) return CD ? ID + jc : ID;
      const pD = null !== (cD = Vc(DD)) && void 0 !== cD ? cD : "fuel";
      return CD ? "fuel" === pD ? ID + jc : `${ID}${jc}|${"water"===pD?"Water":"Waste"}` : Xc[pD]
    }

    function Tc(DD, CD) {
      const cD = II(DD, CD);
      if ("Air" === cD) return !1;
      const ID = "reactor" === DD ? Hc : Uc;
      return xc.some((DD => ID[DD].includes(cD))) || "reactor" === DD && qc.includes(cD)
    }

    function Gc(DD) {
      return nc[DD]
    }

    function Rc(DD) {
      var CD;
      return null !== (CD = mc[DD]) && void 0 !== CD ? CD : mc[1]
    }

    function kc(DD) {
      const [CD, , cD] = Rc(DD);
      return [cD, 0, -CD]
    }

    function dc(DD, CD, cD, ID, pD, iD) {
      return {
        ctrl: [DD[0], DD[1], DD[2]],
        rot: mc[CD] ? CD : 1,
        w: cD,
        h: ID,
        d: pD,
        cu: iD[0],
        cv: iD[1]
      }
    }

    function Yc(DD, CD) {
      return "reactor" === DD ? [Math.floor((CD - 1) / 2), 0] : [0, 0]
    }

    function Wc(DD, CD, cD, ID, pD) {
      let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : DD.rot;
      if (cD === DD.w && ID === DD.h && pD === DD.d && iD === DD.rot) return DD;
      const [fD] = Yc(CD, DD.w);
      if (DD.cu === fD && DD.cv <= 1) return dc(DD.ctrl, iD, cD, ID, pD, Yc(CD, cD));
      const bD = (DD, CD) => Math.max(1, Math.min(CD, DD));
      return dc(DD.ctrl, iD, cD, ID, pD, [bD(DD.cu, cD - 2), 0 === DD.cv ? 0 : bD(DD.cv, ID - 2)])
    }
    const sc = 11,
      Ec = 2 * sc + 1;
    new Uint8Array(Ec * Ec * Ec);

    function ec(DD) {
      return DD.w * DD.h * DD.d
    }

    function uc(DD) {
      const CD = kc(DD.rot);
      return [DD.ctrl[0] - CD[0] * DD.cu, DD.ctrl[1] - DD.cv, DD.ctrl[2] - CD[2] * DD.cu]
    }

    function hc(DD) {
      return DD.cv * DD.d * DD.w + DD.cu
    }

    function rc(DD, CD) {
      const cD = CD % DD.w,
        ID = Math.floor(CD / DD.w) % DD.d;
      return [cD, Math.floor(CD / (DD.w * DD.d)), ID]
    }

    function Ac(DD, CD) {
      const [cD, ID, pD] = rc(DD, CD), iD = uc(DD), fD = Rc(DD.rot), bD = kc(DD.rot);
      return [iD[0] + bD[0] * cD - fD[0] * pD, iD[1] + ID, iD[2] + bD[2] * cD - fD[2] * pD]
    }

    function Fc(DD, CD) {
      const cD = uc(DD),
        ID = Rc(DD.rot),
        pD = kc(DD.rot),
        iD = CD[0] - cD[0],
        fD = CD[2] - cD[2],
        bD = iD * pD[0] + fD * pD[2],
        QD = -(iD * ID[0] + fD * ID[2]),
        wD = CD[1] - cD[1];
      return bD < 0 || bD >= DD.w || wD < 0 || wD >= DD.h || QD < 0 || QD >= DD.d ? -1 : (wD * DD.d + QD) * DD.w + bD
    }

    function DI(DD, CD) {
      if (CD === hc(DD)) return "ctrl";
      const [cD, ID, pD] = rc(DD, CD), iD = 0 === ID || ID === DD.h - 1, fD = Number(0 === cD || cD === DD.w - 1) + Number(iD) + Number(0 === pD || pD === DD.d - 1);
      return fD >= 2 ? "edge" : 1 === fD ? iD ? "cap" : "wall" : "inside"
    }

    function CI(DD, CD) {
      const [cD, ID, pD] = rc(DD, CD);
      return 0 === cD || cD === DD.w - 1 || 0 === ID || ID === DD.h - 1 || 0 === pD || pD === DD.d - 1 ? -1 : ((ID - 1) * (DD.d - 2) + (pD - 1)) * (DD.w - 2) + (cD - 1)
    }

    function cI(DD, CD) {
      const cD = DD.w - 2,
        ID = DD.d - 2,
        pD = CD % cD + 1,
        iD = Math.floor(CD / cD) % ID + 1;
      return ((Math.floor(CD / (cD * ID)) + 1) * DD.d + iD) * DD.w + pD
    }

    function II(DD, CD) {
      const cD = Kc(CD);
      return "reactor" === DD && cD === oc ? Oc : cD
    }

    function pI(DD, CD, cD) {
      const ID = "ctrl" === CD ? Kc(cD) : II(DD, cD);
      return ("reactor" === DD ? Hc : Uc)[CD].includes(ID) ? "ok" : "Air" === ID ? "missing" : Tc(DD, cD) ? "wrong" : "blocked"
    }

    function iI(DD, CD) {
      return "battery" === DD ? Nc : "inside" === CD ? null : function(DD, CD) {
        if ("inside" === CD || "ctrl" === CD || "battery" === DD) return null;
        return "edge" === CD ? Oc : Pc
      }(DD, CD)
    }
    const fI = {
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
      bI = "Collider",
      QI = "Laser",
      wI = "Star Alloy",
      SI = "Glow Dust",
      BI = [bI, "_Collider Focus"];

    function yI(DD) {
      return BI.indexOf(Kc(DD))
    }

    function MI(DD) {
      return Kc(DD) === QI
    }

    function tI(DD) {
      return [
        [DD[0], DD[1], DD[2]],
        [DD[0], DD[1] + 1, DD[2]]
      ]
    }
    const ZI = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function oI(DD, CD, cD) {
      const ID = ZI[CD];
      return [DD[0] + ID[0] * cD, DD[1], DD[2] + ID[2] * cD]
    }

    function vI(DD, CD) {
      if (CD[1] !== DD[1]) return null;
      const cD = CD[0] - DD[0],
        ID = CD[2] - DD[2];
      if (0 !== cD === (0 !== ID)) return null;
      const pD = Math.abs(cD + ID);
      if (pD > fI.LASER_D) return null;
      return {
        dir: ID < 0 ? 0 : cD > 0 ? 1 : ID > 0 ? 2 : 3,
        yb: pD
      }
    }

    function NI(DD, CD, cD) {
      const ID = CD => Math.abs(DD[0] - CD[0]) <= 1 && Math.abs(DD[1] - CD[1]) <= 1;
      return ID(CD) || ID(cD)
    }

    function gI(DD, CD) {
      return function(DD, CD, cD, ID) {
        return [0, 1, 2, 3].map((pD => {
          for (let iD = 1; iD <= fI.LASER_D; iD++) {
            const fD = oI(DD, pD, iD);
            if (NI([fD[0], fD[2]], CD, cD) || !ID(fD)) return !1
          }
          return !0
        }))
      }(tI(DD)[1], CD.spawnXZ, CD.coreXZ, (DD => DD[1] >= yc.p && DD[1] < yc.p + yc.t && DD[0] >= CD.minXZ[0] && DD[0] <= CD.maxXZ[0] && DD[2] >= CD.minXZ[1] && DD[2] <= CD.maxXZ[1]))
    }
    const XI = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function mI(DD) {
      return Math.max(48 + 16 * DD, vD(DD).machineAllowance)
    }
    const nI = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function OI(DD) {
      const CD = DD.split("|")[0];
      return nI.includes(CD) ? "Solar Panel" : CD === tc.c ? "Fluid Pipe" : yI(CD) >= 0 ? "Collider" : (cD = CD, XI.includes(cD) ? CD : null);
      var cD
    }
    const PI = "buildAFactory2Game:solarPanelDescription";
    const HI = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function UI(DD, CD) {
      var cD;
      return null !== (cD = HI.find((cD => {
        var ID;
        return (null !== (ID = DD.level(cD)) && void 0 !== ID ? ID : 0) >= CD
      }))) && void 0 !== cD ? cD : null
    }
    const xI = "buildAFactory2Game:";
    let qI = null;
    const JI = {
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
      KI = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      aI = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      VI = {
        "Loot Chest": `${xI}lookRuinChestName`
      };

    function zI(DD) {
      return "object" === typeof DD && null !== DD && "translationKey" in DD && "string" === typeof DD.translationKey ? DD.translationKey : null
    }

    function jI(DD, CD) {
      var cD;
      return null !== (cD = zI(DD.displayName(CD))) && void 0 !== cD ? cD : `item:${(0,zD.le)(CD)}`
    }

    function lI(DD, CD) {
      var cD, ID, pD, iD;
      let fD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CD;
      if ("Solar Panel" === OI(CD)) return {
        name: zI(DD.displayName("Solar Panel")),
        detail: PI,
        detailItem: null
      };
      const QD = CD.endsWith(" Ore"),
        wD = (qI ??= new Set([...Object.keys((0, Mc.h)()), ...Object.keys((0, tc.w)())].map((DD => DD.split("|")[0]))), qI).has(CD),
        SD = QD || wD ? null : function(DD) {
          var CD;
          return DD.endsWith(" Log") && !DD.startsWith("Barkless ") ? "lookLog" : DD.endsWith(" Sapling") ? "lookSapling" : DD.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (CD = JI[DD]) && void 0 !== CD ? CD : null
        }(CD);
      if (!DD.isBlock(CD) || !QD && !wD && null === SD) return null;
      const BD = null !== (cD = null !== (ID = VI[CD]) && void 0 !== ID ? ID : zI(null !== (pD = DD.displayName(fD)) && void 0 !== pD ? pD : DD.displayName(CD))) && void 0 !== cD ? cD : `item:${(0,zD.le)(CD)}`;
      if (null !== SD) return {
        name: BD,
        detail: `${xI}${SD}`,
        detailItem: null
      };
      const yD = null !== (iD = KI[CD]) && void 0 !== iD ? iD : bD() ? aI[CD] : void 0;
      if (wD && void 0 !== yD) return {
        name: BD,
        detail: `${xI}${yD}`,
        detailItem: null
      };
      const MD = fc[CD];
      if (void 0 !== MD) return {
        name: BD,
        detail: `${xI}lookDeposit`,
        detailItem: jI(DD, MD)
      };
      const tD = DD.harvestLevel(CD);
      if (QD && "rock" === DD.harvestType(CD) && 0 !== tD) {
        const CD = UI(DD, null !== tD && void 0 !== tD ? tD : 0);
        if (CD === HI[0]) return {
          name: BD,
          detail: `${xI}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== CD) return {
          name: BD,
          detail: `${xI}lookPickaxe`,
          detailItem: jI(DD, CD)
        }
      }
      return {
        name: BD,
        detail: zI(DD.description(CD)),
        detailItem: null
      }
    }

    function LI(DD) {
      return DD < yc.p - 24
    }
    const TI = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const GI = "Wrench",
      RI = "Nova Wrench";

    function kI(DD) {
      return DD === GI || DD === RI
    }
    const dI = [...yc.J, "Belt Lift", "Belt Drop"];
    const YI = ["Belt Lift", "Belt Drop"],
      WI = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function sI(DD) {
      return DD.split("|")[0]
    }

    function EI(DD) {
      const CD = /\|rot(\d)/.exec(DD);
      return CD ? Number(CD[1]) : 1
    }

    function eI(DD) {
      return DD % 4 + 1
    }

    function uI(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === CD && "" === cD ? DD : `${DD}|meta|rot${CD}${cD}`
    }

    function hI(DD) {
      return sI(DD) === yc.A ? (0, yc.Q)(DD) ? "gateRight" : "gateLeft" : (0, yc.W)(DD)
    }

    function rI(DD) {
      const CD = sI(DD),
        cD = EI(DD);
      if (yc.J.includes(CD)) return (0, yc.K)(CD, eI(cD), null);
      if (CD === yc.g) return (0, yc._)(eI(cD), (0, yc.T)(DD));
      if (CD === yc.D) {
        const ID = WI[(0, yc.W)(DD)];
        return null === ID ? uI(CD, eI(cD)) : uI(CD, cD, yc.E[ID])
      }
      return CD === yc.A ? (0, yc.Q)(DD) ? uI(CD, eI(cD)) : uI(CD, cD, yc.l) : Zc.e.includes(CD) && !YI.includes(CD) || wc(CD) ? uI(CD, eI(cD)) : null
    }

    function AI(DD) {
      return Zc.e.includes(DD) || wc(DD) || null !== OI(DD)
    }

    function FI(DD) {
      return "Solar Panel" === OI(DD)
    }
    const Dp = "buildAFactory2Game:",
      Cp = {
        leftFront: `${Dp}lookSplitDetail_leftFront`,
        frontRight: `${Dp}lookSplitDetail_frontRight`,
        gateRight: `${Dp}lookGateDetail_gateRight`
      };

    function cp(DD, CD) {
      var cD;
      let ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const pD = hI(DD),
        iD = null === pD ? null : `${Dp}${pD.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${pD}`,
        fD = null === pD ? null : null !== (cD = Cp[pD]) && void 0 !== cD ? cD : null;
      if (kI(CD) && ID) {
        const cD = sI(DD);
        return CD === RI && bD() && function(DD) {
          return dI.includes(sI(DD))
        }(DD) ? {
          mode: iD,
          detail: fD,
          next: `${Dp}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: iD,
          detail: fD,
          next: AI(cD) && !FI(cD) ? `${Dp}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const QD = kI(CD) ? rI(DD) : null;
      if (null === QD) return {
        mode: iD,
        detail: fD,
        next: null,
        nextState: null
      };
      const wD = hI(QD);
      return null === wD || EI(QD) !== EI(DD) ? {
        mode: iD,
        detail: fD,
        next: `${Dp}lookWrenchTurn`,
        nextState: null
      } : {
        mode: iD,
        detail: fD,
        next: `${Dp}lookWrenchNext`,
        nextState: `${Dp}lookWrenchState_${wD}`
      }
    }
    const Ip = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const pp = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function ip(DD) {
      return [0, 1, 2, 3].map((CD => 0 !== (DD & 1 << CD)))
    }

    function fp(DD) {
      const CD = [];
      for (let cD = 8; cD + 2 < DD.length; cD += 3) CD.push([DD[cD], DD[cD + 1], DD[cD + 2]]);
      return {
        focus: [DD[0], DD[1], DD[2]],
        lasers: ip(DD[3]),
        open: ip(DD[4]),
        live: ip(DD[5]),
        on: 1 === DD[6],
        state: pp[DD[7]],
        blockers: CD
      }
    }
    const bp = "Arc Caster",
      Qp = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      wp = (Object.values(Qp), "Jet Chestplate"),
      Sp = "Nova Jet Chestplate",
      Bp = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      yp = Object.values(Bp);

    function Mp(DD, CD, cD) {
      return Math.min(function(DD) {
        return bD() && BD(DD) >= 5 ? 20 : 10
      }(cD), Math.floor(function(DD, CD) {
        return Math.max(0, DD) + (bD() ? Math.max(0, CD) : 0)
      }(DD, CD) / 5))
    }

    function tp(DD, CD, cD) {
      const ID = Mp(CD, cD, DD),
        pD = BD(DD),
        iD = (pD >= 3 ? 55 : pD >= 1 ? 50 : DD >= 8 ? 45 : 30) + ID,
        fD = Math.max(100 + ID, 2 * iD);
      return {
        arcDamage: iD,
        arcPierce: DD >= 7 ? 2 : 1,
        arcChain: DD >= 10,
        barrierMax: (pD >= 4 ? 100 : pD >= 2 ? 90 : DD >= 9 ? 80 : DD >= 6 ? 60 : 40) + 5 * ID,
        barrierRegenPerS: pD >= 5 ? 20 : DD >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * ID,
        novaShieldRegenPerS: 32,
        bladeDamage: fD,
        bladePunch: Math.round(.5 * fD),
        forgeRank: ID
      }
    }
    const Zp = {
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
    var op = cD(36181),
      vp = cD(36002),
      Np = cD(35996),
      gp = cD(16),
      Xp = cD(1627),
      mp = cD(1049),
      np = cD.n(mp);

    function Op(DD) {
      return !0 === DD.field
    }
    const Pp = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Hp(DD) {
      return Pp.has(DD) ? `buildAFactory2Game:itemPlural_${(0,zD.le)(DD)}` : null
    }
    var Up = cD(1192),
      xp = cD(1064),
      qp = cD(1893),
      Jp = cD(1872),
      Kp = cD(36169),
      ap = cD(36175),
      Vp = cD(20),
      zp = cD(36161);
    const jp = "baf2QuestView",
      lp = "baf2PlayerY",
      Lp = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class Tp {
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
      set(DD, CD) {
        var cD, ID, pD, iD, fD, bD, QD, wD;
        const SD = JSON.stringify(DD.baf2QuestName) === JSON.stringify(this.view.name),
          BD = new Set(this.view.rows.filter((DD => DD.done)).map((DD => DD.id))),
          yD = new Set(this.view.rows.filter((DD => DD.justFinished)).map((DD => DD.id))),
          MD = DD.baf2QuestSide,
          tD = null !== MD && !0 === DD.baf2QuestSideFocus;
        let ZD = !1,
          oD = 0;
        const vD = DD.baf2QuestSteps.map((DD => {
            const CD = Ep(DD, Lp.has(DD[0]) ? DD[0] : "" + oD++),
              cD = SD && CD.done && !BD.has(CD.id);
            return CD.justFinished = cD || SD && CD.done && yD.has(CD.id), ZD ||= cD, CD
          })),
          ND = sp(vD);
        ND >= 0 && !tD && (vD[ND].current = !0);
        const gD = !SD && null !== DD.baf2QuestName,
          XD = JSON.stringify(MD && [MD[0], MD[1]]),
          mD = XD === JSON.stringify(null !== (cD = null === (ID = this.view.side) || void 0 === ID ? void 0 : ID.name) && void 0 !== cD ? cD : null),
          nD = null !== MD && !this.sidesSeen.has(XD);
        nD && this.sidesSeen.add(XD), this.serverTutorial = null !== (pD = DD.baf2QuestTutorial) && void 0 !== pD ? pD : "on", (null !== (iD = DD.baf2QuestTutorialSeq) && void 0 !== iD ? iD : 0) >= this.pickSeq && this.endPick();
        const OD = !SD || !mD || DD.baf2QuestTier !== this.view.tier;
        this.view = {
          name: DD.baf2QuestName,
          rows: vD,
          reward: DD.baf2QuestReward,
          goal: DD.baf2QuestGoal,
          pulse: this.view.pulse + (ZD || gD ? 1 : 0),
          itemNames: CD,
          side: MD && {
            name: [MD[0], MD[1]],
            row: {
              ...Ep(MD[2], "side"),
              current: tD
            },
            goal: null !== (fD = MD[3]) && void 0 !== fD ? fD : null
          },
          sideCameUpAt: nD ? Date.now() : this.view.sideCameUpAt,
          tier: DD.baf2QuestTier,
          core: DD.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (bD = DD.baf2QuestAlso) && void 0 !== bD ? bD : [],
          depth: null !== (QD = DD.baf2QuestDepth) && void 0 !== QD ? QD : null,
          tutorial: null !== (wD = this.pickedTutorial) && void 0 !== wD ? wD : this.serverTutorial,
          tutorialKnown: !0
        }, this.Uo(), ZD && this.scheduleClear(), OD && this.requestBook()
      }
      setTutorial(DD) {
        return this.endPick(), this.pickedTutorial = DD, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.Uo()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: DD
        }, this.Uo(), this.pickSeq
      }
      onPlayerY(DD) {
        const CD = Math.floor(DD);
        CD !== this.playerY && (this.playerY = CD, this.view.depth && Vp.i.Uo(lp, CD))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(DD) {
        this.view = {
          ...this.view,
          chapters: DD.baf2BookChapters
        }, this.Uo()
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
          }, this.Uo()
        }), 2400)
      }
      Uo() {
        Vp.i.Uo(jp, this.view, !0)
      }
    }

    function Gp(DD, CD) {
      return DD.sideCameUpAt > 0 && CD - DD.sideCameUpAt < 2400
    }

    function Rp(DD) {
      return (null === DD.name || kp(DD)) && null === DD.side && null !== DD.chapters
    }

    function kp(DD) {
      var CD;
      return "quest_forgeOngoing" === (null === (CD = DD.name) || void 0 === CD ? void 0 : CD[0])
    }

    function dp(DD) {
      return DD.filter((DD => !Lp.has(DD.key)))
    }

    function Yp(DD) {
      return DD.key.startsWith("stepCraft")
    }

    function Wp(DD, CD) {
      const cD = new Set,
        ID = DD.side ? [...DD.rows, DD.side.row] : DD.rows;
      for (const iD of ID)
        if (!iD.done) {
          !iD.item || CD && !Yp(iD) || cD.add(iD.item);
          for (const [DD, CD, ID] of null !== (pD = iD.chips) && void 0 !== pD ? pD : []) {
            var pD;
            CD < ID && cD.add(DD)
          }
        } return cD
    }

    function sp(DD) {
      const CD = DD.findIndex((DD => !DD.done && !DD.away));
      return CD >= 0 ? CD : DD.findIndex((DD => !DD.done))
    }

    function Ep(DD, CD) {
      let [cD, ID, pD, iD, fD, bD, QD, wD, SD, BD] = DD;
      return {
        id: CD,
        key: cD,
        params: ID,
        item: pD,
        amount: iD,
        total: fD,
        done: bD,
        chips: null !== QD && void 0 !== QD ? QD : null,
        current: !1,
        away: !0 === wD,
        madeFor: null !== SD && void 0 !== SD ? SD : [],
        also: null !== BD && void 0 !== BD ? BD : [],
        justFinished: !1
      }
    }
    const ep = "baf2QuestItems",
      hp = new Set;
    let rp = new Set,
      Ap = null;

    function Fp(DD) {
      const CD = VD(DD.tutorial),
        cD = CD ? Wp(DD, !0) : hp;
      "inventory" === gp.d.get("openInGameMenuName") ? (Ap = null, (0, zp.t)(cD)) : Ap = cD;
      const ID = CD ? Wp(DD, !1) : hp;
      (0, ap.c)(ID, rp) || (rp = ID, Vp.i.Uo(ep, rp))
    }

    function Di() {
      return (0, Kp.d)(ep, (() => rp))
    }
    var Ci = cD(9062),
      ci = cD(3083);

    function Ii(DD) {
      const CD = (0, ci.e)(DD),
        cD = void 0 === CD ? void 0 : (0, Ci.displayNameOf)(CD);
      return "object" === typeof cD && null !== cD && "translationKey" in cD && "string" === typeof cD.translationKey ? cD.translationKey : `item:${(0,zD.le)(DD)}`
    }

    function ii(DD, CD) {
      return DD(Ii(CD))
    }
    const fi = [{
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

    function bi(DD, CD) {
      return [`Deposit Seed (${DD})`, {
        item: fc[`${DD} Deposit`],
        amount: CD
      }]
    }
    const Qi = Object.fromEntries([bi("Coal", 8), bi("Iron", 8), bi("Copper", 8), bi("Gold", 6), bi("Voltite", 4), bi("Uranium", 4)]),
      wi = "Relay Coil",
      Si = new Map;

    function Bi(DD) {
      let CD = Si.get(DD);
      if (!CD) {
        const cD = Math.max(1, DD);
        CD = fi.filter((DD => {
          var CD;
          return cD >= DD.fromTier && cD <= (null !== (CD = DD.untilTier) && void 0 !== CD ? CD : 1 / 0)
        })).map((DD => DD.later && cD >= DD.later.tier ? {
          ...DD,
          weight: DD.later.weight
        } : DD)), Si.set(DD, CD)
      }
      return CD
    }

    function yi(DD) {
      return Bi(DD).some((DD => {
        let {
          item: CD
        } = DD;
        return CD === wi
      }))
    }

    function Mi(DD) {
      return DD.startsWith("Deposit Seed (")
    }

    function ti(DD, CD) {
      const cD = Bi(DD);
      return CD ? cD.filter((DD => CD(DD.item))) : cD
    }

    function Zi(DD) {
      return DD.reduce(((DD, CD) => DD + CD.weight), 0)
    }

    function oi(DD, CD) {
      const cD = ti(DD, CD),
        ID = Zi(cD);
      return cD.map((DD => ({
        find: DD,
        chance: DD.weight / ID
      })))
    }
    const vi = 6e4,
      Ni = new Intl.NumberFormat("en-US");

    function gi(DD, CD) {
      const cD = DD >= 10 ? Math.round(DD) : Math.round(10 * DD) / 10;
      return 0 === cD ? "0" : `${CD}${Ni.format(cD)}`
    }

    function Xi(DD) {
      return DD < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Ni.format(DD) : DD < 1e6 ? `${DD<1e5?Math.floor(DD/100)/10:Math.floor(DD/1e3)}k` : Math.floor(DD / 1e5) / 10 + "M"
    }

    function mi(DD) {
      return DD < 0 ? "\u2212" + -DD : String(DD)
    }

    function ni(DD, CD) {
      const cD = Math.max(1, Math.round(CD));
      if (cD < 60) return DD("buildAFactory2Game:durationSeconds", {
        seconds: String(cD)
      });
      const ID = Math.round(cD / 60);
      if (ID < 60) return DD("buildAFactory2Game:durationMinutes", {
        minutes: String(ID)
      });
      const pD = String(Math.floor(ID / 60));
      return ID % 60 === 0 ? DD("buildAFactory2Game:durationWholeHours", {
        hours: pD
      }) : DD("buildAFactory2Game:durationHours", {
        hours: pD,
        minutes: String(ID % 60)
      })
    }
    const Oi = "(max-height: 420px), (max-width: 650px)";

    function Pi() {
      return "undefined" !== typeof window && window.matchMedia(Oi).matches
    }

    function Hi(DD) {
      const CD = window.matchMedia(Oi),
        cD = () => {
          DD(CD.matches)
        };
      return CD.addEventListener("change", cD), () => {
        CD.removeEventListener("change", cD)
      }
    }
    var Ui = cD(1093);

    function xi(DD, CD) {
      return null !== DD && DD > CD + 1
    }

    function qi(DD) {
      const CD = 100 * DD;
      return String(CD <= 0 || CD >= 1 ? Math.round(CD) : Math.max(.1, Math.round(10 * CD) / 10))
    }

    function Ji(DD) {
      let {
        item: CD,
        amount: cD
      } = DD;
      return (0, Ui.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: CD,
            amount: 0
          })
        }), cD > 1 && (0, Ui.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", cD]
        })]
      })
    }

    function Ki(DD) {
      let {
        label: CD,
        names: cD
      } = DD;
      const [pD, iD] = (0, ID.useState)(!1), fD = cD.join(" / ");
      return (0, Ui.jsxs)(Ui.Fragment, {
        children: [(0, Ui.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: fD,
          "aria-expanded": pD,
          onClick: () => {
            iD(!pD)
          },
          children: CD
        }), pD && (0, Ui.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: fD
        })]
      })
    }

    function ai(DD) {
      let {
        tier: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), {
        key: ID,
        params: pD
      } = MD(CD, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), iD = cD(`buildAFactory2Game:${ID}`, pD);
      return (0, Ui.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Ui.jsx)(xp.c, {
          name: "lock"
        }), iD]
      })
    }
    const Vi = (0, ID.createContext)(null);

    function zi() {
      const {
        t: DD
      } = (0, Up.F)(), CD = (0, ID.useContext)(Vi);
      return (0, ID.useEffect)((() => null === CD || void 0 === CD ? void 0 : CD()), [CD]), (0, Ui.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: DD("buildAFactory2Game:recipeForQuest"),
        "aria-label": DD("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function ji(DD) {
      let {
        title: CD,
        count: cD,
        children: pD,
        startOpen: iD = !0
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), [bD, QD] = (0, ID.useState)((() => iD && !Pi())), [wD, SD] = (0, ID.useState)(0), BD = (0, ID.useCallback)((() => (SD((DD => DD + 1)), () => {
        SD((DD => DD - 1))
      })), []);
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2Recipes", {
          Open: bD
        }),
        children: [(0, Ui.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            QD(!bD)
          },
          "aria-expanded": bD,
          children: [fD("buildAFactory2Game:recipesToggle", {
            title: CD,
            count: String(cD)
          }), (0, Ui.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: bD ? "\u25be" : "\u25b8"
          })]
        }), bD && (0, Ui.jsxs)(Vi.Provider, {
          value: BD,
          children: [(0, Ui.jsx)("ul", {
            className: "Baf2RecipeList",
            children: pD
          }), wD > 0 && (0, Ui.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Ui.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), fD("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const li = "buildAFactory2Game:",
      Li = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Ti = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      Gi = {
        "Uranium Grit": iD,
        "Raw Uranium": iD
      };

    function Ri(DD) {
      var CD;
      return null !== (CD = Gi[DD]) && void 0 !== CD ? CD : Math.max(hD(DD), Ti[DD] ? hD(Ti[DD]) : 1, function(DD) {
        const CD = pD.findIndex((CD => CD.cost.some((CD => CD.item === DD))));
        return CD > iD ? CD : 1
      }(DD))
    }

    function ki(DD, CD) {
      return di(CD) ? Ri(CD) : function(DD) {
        if (Li.has(DD)) return 1;
        const CD = pD.findIndex((CD => CD.newDeposits.some((CD => {
          let {
            block: cD
          } = CD;
          return cD === DD
        }))));
        return CD < 0 ? 1 : CD + 1
      }(DD)
    }

    function di(DD) {
      return DD in Gi || BD(Ri(DD)) > 0
    }

    function Yi(DD, CD) {
      return rC(DD, {
        coupled: !1,
        taught: null,
        atomic: bD() && CD >= 11
      }).recipes
    }

    function Wi(DD, CD) {
      const cD = yD(DD, CD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BD(DD) > 0);
      return "open" === cD || "locked" === cD
    }

    function si(DD, CD) {
      return DD.map(((DD, cD) => ({
        value: DD,
        idx: cD,
        tier: CD(DD)
      }))).sort(((DD, CD) => DD.tier - CD.tier || DD.idx - CD.idx)).map((DD => {
        let {
          value: CD
        } = DD;
        return CD
      }))
    }

    function Ei(DD, CD, cD) {
      const ID = yD(DD, CD);
      if ("hidden" === ID || "open" === ID) return null;
      if ("teaser" === ID) return {
        tag: {
          translationKey: `${li}${cD?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${li}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const pD = MD(DD, {
          tier: cD ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        iD = MD(DD, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${li}${pD.key}`,
          params: pD.params
        },
        reason: {
          translationKey: `${li}${iD.key}`,
          params: iD.params
        }
      }
    }

    function ei(DD) {
      return !Mi(DD)
    }

    function ui(DD) {
      let {
        seconds: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)();
      return (0, Ui.jsx)(ji, {
        title: cD("buildAFactory2Game:recipesCuts", {
          seconds: CD
        }),
        count: 1,
        children: (0, Ui.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ui.jsx)(Ji, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Ui.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ui.jsx)(Ji, {
            item: "Maple Log",
            amount: 1
          }), (0, Ui.jsx)("span", {
            className: "Baf2RecipeName",
            children: cD("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function ri(DD) {
      let {
        fertilised: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)();
      return (0, Ui.jsxs)(ji, {
        title: cD("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Ui.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Ui.jsx)(Ji, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ui.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ui.jsx)(Ji, {
            item: "Wheat",
            amount: 1
          }), (0, Ui.jsx)(Ji, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Ui.jsx)("span", {
            className: "Baf2RecipeName",
            children: cD("buildAFactory2Game:recipeField")
          })]
        }), (0, Ui.jsxs)("li", {
          className: np()("Baf2Recipe", {
            InUse: CD
          }),
          children: [(0, Ui.jsx)(Ji, {
            item: "Fertiliser",
            amount: 1
          }), (0, Ui.jsx)("span", {
            className: "Baf2RecipeName",
            children: cD("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Ai(DD) {
      let {
        tier: CD,
        seconds: cD
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = function(DD) {
        return DD >= 5 ? nC : mC
      }(CD);
      return (0, Ui.jsx)(ji, {
        title: ID("buildAFactory2Game:recipesBringsUp", {
          seconds: cD
        }),
        count: pD.length,
        children: pD.map((DD => {
          let {
            item: CD,
            chance: cD
          } = DD;
          return (0, Ui.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ui.jsx)(Ji, {
              item: CD,
              amount: 1
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeName",
              children: ii(ID, CD)
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: ID("buildAFactory2Game:recipeChance", {
                percent: qi(cD)
              })
            })]
          }, CD)
        }))
      })
    }

    function Fi(DD) {
      let {
        tier: CD,
        seconds: cD,
        noSeeds: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), iD = Di(), fD = oi(CD, ID ? ei : void 0), bD = ID && oi(CD).length > fD.length, QD = yi(CD);
      return (0, Ui.jsxs)(ji, {
        title: pD("buildAFactory2Game:recipesRecycles", {
          seconds: cD
        }),
        count: fD.length,
        children: [fD.map((DD => {
          let {
            find: CD,
            chance: cD
          } = DD;
          return (0, Ui.jsxs)("li", {
            className: "Baf2Recipe",
            children: [iD.has(CD.item) && (0, Ui.jsx)(zi, {}), (0, Ui.jsx)(Ji, {
              item: CD.item,
              amount: CD.amount
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeName",
              children: ii(pD, CD.item)
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: pD("buildAFactory2Game:recipeChance", {
                percent: qi(cD)
              })
            })]
          }, CD.item)
        })), bD && (0, Ui.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ui.jsx)("span", {
            className: "Baf2RecipeName",
            children: pD("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), QD && (0, Ui.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ui.jsx)("span", {
            className: "Baf2RecipeName",
            children: pD("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function Df(DD) {
      let {
        tier: CD,
        seconds: cD
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = Object.entries(Qi).filter((DD => {
        let [, {
          item: cD
        }] = DD;
        return Wi(Ri(cD), CD, di(cD))
      }));
      return (0, Ui.jsx)(ji, {
        title: ID("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: cD
        }),
        count: pD.length,
        children: pD.map((DD => {
          let [CD, {
            item: cD,
            amount: pD
          }] = DD;
          return (0, Ui.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Ui.jsx)(Ji, {
              item: CD,
              amount: 1
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ui.jsx)(Ji, {
              item: cD,
              amount: pD
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeName",
              children: ii(ID, cD)
            })]
          }, CD)
        }))
      })
    }

    function Cf(DD) {
      let {
        tier: CD,
        seconds: cD
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = Di(), iD = si(Object.entries(fc).filter((DD => {
        let [cD, ID] = DD;
        return Wi(ki(cD, ID), CD, di(ID))
      })), (DD => {
        let [CD, cD] = DD;
        return ki(CD, cD)
      }));
      return (0, Ui.jsx)(ji, {
        title: ID("buildAFactory2Game:recipesDigs", {
          seconds: cD
        }),
        count: iD.length,
        children: iD.map((DD => {
          let [cD, iD] = DD;
          const fD = ki(cD, iD),
            bD = fD > CD ? fD : null,
            QD = bc[cD],
            wD = null === bD && pD.has(iD);
          return (0, Ui.jsxs)("li", {
            className: np()("Baf2Recipe", {
              Locked: null !== bD,
              Far: xi(bD, CD)
            }),
            children: [wD && (0, Ui.jsx)(zi, {}), (0, Ui.jsx)(Ji, {
              item: cD,
              amount: 1
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ui.jsx)(Ji, {
              item: iD,
              amount: 1
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeName",
              children: ii(ID, iD)
            }), void 0 !== QD && (0, Ui.jsx)("span", {
              className: "Baf2RecipeMore",
              children: ID("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / QD)
              })
            }), null !== bD && (0, Ui.jsx)(ai, {
              tier: bD
            })]
          }, cD)
        }))
      })
    }

    function If(DD) {
      var CD;
      let {
        def: cD,
        seconds: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)();
      return (0, Ui.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ui.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (CD = cD.fuels) && void 0 !== CD ? CD : []).map((DD => (0, Ui.jsx)(Ji, {
            item: DD,
            amount: 1
          }, DD))), (0, Ui.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Ui.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ui.jsx)(xp.c, {
              name: "bolt"
            }), pD("buildAFactory2Game:recipePower", {
              power: rD(cD.powerMade),
              seconds: ID
            })]
          })]
        })
      })
    }

    function pf(DD) {
      let {
        def: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)();
      return (0, Ui.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ui.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ui.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ui.jsx)(xp.c, {
              name: "bolt"
            }), cD("buildAFactory2Game:recipeMixer", {
              cryo: gi((0, AD.D)(CD, CD.cryoMade), "")
            })]
          })
        })
      })
    }

    function ff(DD) {
      let {
        def: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)();
      return (0, Ui.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Ui.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Ui.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Ui.jsx)(xp.c, {
              name: "bolt"
            }), cD("buildAFactory2Game:recipeCondenser", {
              power: gi((0, AD.D)(CD, CD.powerPerOp), ""),
              water: gi((0, AD.D)(CD, CD.fluidMade), "")
            })]
          })
        })
      })
    }

    function bf(DD) {
      let {
        kind: CD,
        def: cD,
        input: ID,
        tier: pD,
        noSeeds: iD = !1
      } = DD;
      const fD = String(cD.opMs / 1e3);
      return cc(cD) ? (0, Ui.jsx)(ui, {
        seconds: fD
      }) : cD.field ? (0, Ui.jsx)(ri, {
        fertilised: null !== ID
      }) : cD.table ? (0, Ui.jsx)(Ai, {
        tier: pD,
        seconds: fD
      }) : cD.recycles ? (0, Ui.jsxs)(Ui.Fragment, {
        children: [(0, Ui.jsx)(Fi, {
          tier: pD,
          seconds: fD,
          noSeeds: iD
        }), (0, Ui.jsx)(Df, {
          tier: pD,
          seconds: fD
        })]
      }) : Cc(cD) ? (0, Ui.jsx)(Cf, {
        tier: pD,
        seconds: fD
      }) : void 0 !== cD.fluidMade ? (0, Ui.jsx)(ff, {
        def: cD
      }) : void 0 !== cD.cryoMade ? (0, Ui.jsx)(pf, {
        def: cD
      }) : void 0 !== cD.powerMade ? (0, Ui.jsx)(If, {
        def: cD,
        seconds: fD
      }) : (0, Ui.jsx)(Qf, {
        kind: CD,
        input: ID,
        tier: pD,
        seconds: fD
      })
    }

    function Qf(DD) {
      let {
        kind: CD,
        input: cD,
        tier: ID,
        seconds: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)(), fD = Di(), bD = si(function(DD) {
        const CD = new Map;
        for (const pD of DD) {
          var cD, ID;
          const DD = [pD.output, pD.outputAmount, pD.inputAmount, null === (cD = pD.bonus) || void 0 === cD ? void 0 : cD.item, null === (ID = pD.bonus) || void 0 === ID ? void 0 : ID.chance].join("|"),
            iD = CD.get(DD);
          iD ? iD.inputs.push(pD.input) : CD.set(DD, {
            inputs: [pD.input],
            inputAmount: pD.inputAmount,
            output: pD.output,
            outputAmount: pD.outputAmount,
            bonus: pD.bonus
          })
        }
        return [...CD.values()]
      }(Yi(CD, ID).filter(Sc)), (DD => Ri(DD.output))).filter((DD => Wi(Ri(DD.output), ID, di(DD.output))));
      return (0, Ui.jsx)(ji, {
        title: iD("buildAFactory2Game:recipesEach", {
          seconds: pD
        }),
        count: bD.length,
        children: bD.map((DD => {
          const CD = null !== cD && DD.inputs.includes(cD),
            pD = DD.inputs.length > 3 ? [CD ? cD : DD.inputs[0]] : DD.inputs,
            bD = Ri(DD.output) > ID ? Ri(DD.output) : null,
            QD = null === bD && fD.has(DD.output);
          return (0, Ui.jsxs)("li", {
            className: np()("Baf2Recipe", {
              InUse: CD,
              Locked: null !== bD,
              Far: xi(bD, ID)
            }),
            children: [QD && (0, Ui.jsx)(zi, {}), pD.map(((CD, cD) => (0, Ui.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [cD > 0 && (0, Ui.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Ui.jsx)(Ji, {
                item: CD,
                amount: DD.inputAmount
              })]
            }, CD))), pD.length < DD.inputs.length && (0, Ui.jsx)(Ki, {
              label: iD("buildAFactory2Game:recipeMore", {
                count: String(DD.inputs.length - pD.length)
              }),
              names: DD.inputs.filter((DD => !pD.includes(DD))).map((DD => ii(iD, DD)))
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Ui.jsx)(Ji, {
              item: DD.output,
              amount: DD.outputAmount
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeName",
              children: ii(iD, DD.output)
            }), DD.bonus && (0, Ui.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [iD("buildAFactory2Game:recipeBonus", {
                percent: qi(DD.bonus.chance)
              }), (0, Ui.jsx)(Ji, {
                item: DD.bonus.item,
                amount: 1
              })]
            }), null !== bD && (0, Ui.jsx)(ai, {
              tier: bD
            })]
          }, `${DD.output}|${DD.inputs[0]}`)
        }))
      })
    }

    function wf(DD) {
      let {
        taught: CD,
        tier: cD
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = Di(), iD = si(Object.values(uC), (DD => DD.tier)).filter((DD => Wi(DD.tier, cD)));
      return (0, Ui.jsx)(ji, {
        title: ID("buildAFactory2Game:benchCanMake"),
        count: iD.length,
        startOpen: !1,
        children: iD.map((DD => {
          const iD = DD.tier > cD,
            fD = !iD && pD.has(DD.output);
          return (0, Ui.jsxs)("li", {
            className: np()("Baf2Recipe", {
              InUse: DD.output === CD,
              Locked: iD,
              Far: xi(iD ? DD.tier : null, cD)
            }),
            children: [fD && (0, Ui.jsx)(zi, {}), (0, Ui.jsx)(Ji, {
              item: DD.output,
              amount: DD.outputAmount
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeName",
              children: ii(ID, DD.output)
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), DD.inputs.map((DD => (0, Ui.jsx)(Ji, {
              item: DD.item,
              amount: DD.amount
            }, DD.item))), iD && (0, Ui.jsx)(ai, {
              tier: DD.tier
            })]
          }, DD.output)
        }))
      })
    }
    var Sf, Bf, yf, Mf, tf;
    const Zf = zC.Generator,
      of = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      vf = 1e3 * (null !== (Sf = Zf.powerMade) && void 0 !== Sf ? Sf : 0) / Zf.opMs,
      Nf = Math.min(...(null !== (Bf = Zf.fuels) && void 0 !== Bf ? Bf : []).map((DD => ic[DD]))) / 1e3,
      gf = zC["Volt Engine"],
      Xf = 1e3 * (null !== (yf = gf.powerMade) && void 0 !== yf ? yf : 0) / gf.opMs,
      mf = ic[null !== (Mf = null === (tf = gf.fuels) || void 0 === tf ? void 0 : tf[0]) && void 0 !== Mf ? Mf : ""] / 1e3;

    function nf(DD) {
      let {
        item: CD,
        label: cD,
        value: ID,
        note: pD,
        dim: iD
      } = DD;
      return (0, Ui.jsxs)("li", {
        className: np()("Baf2PowerRow", {
          Dim: iD
        }),
        children: [(0, Ui.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: CD,
            amount: 0
          })
        }), (0, Ui.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Ui.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: cD
          }), pD && (0, Ui.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: pD
          })]
        }), (0, Ui.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: ID
        })]
      })
    }

    function Of(DD, CD, cD, ID) {
      var pD;
      const iD = void 0 === ID ? zC[DD] : function(DD, CD) {
          if (null === CD) return DD;
          let cD = ED.get(CD);
          return cD || (cD = {
            ...DD,
            powerPerOp: sD(DD, CD),
            farmMob: CD
          }, ED.set(CD, cD)), cD
        }(zC[DD], ID),
        fD = CD && iD.couplable ? dC(iD, cD) : iD;
      return 1e3 * (null !== (pD = fD.powerPerOp) && void 0 !== pD ? pD : 0) / fD.opMs
    }

    function Pf(DD) {
      var CD, cD, ID, pD, iD, fD, bD, QD;
      let {
        message: wD
      } = DD;
      const {
        t: SD
      } = (0, Up.F)(), BD = (DD, CD) => SD("buildAFactory2Game:powerPerSecond", {
        rate: gi(DD, CD)
      }), [yD, MD] = wD.baf2PowerGenerators, tD = wD.baf2PowerGeneratorFuel, ZD = wD.baf2PowerSunPanels, oD = null !== (CD = wD.baf2PowerSunShare) && void 0 !== CD ? CD : 1, vD = wD.baf2PowerVaults, ND = wD.baf2PowerUsers, [gD, XD] = null !== (cD = wD.baf2PowerEngines) && void 0 !== cD ? cD : [0, 0], mD = null !== (ID = wD.baf2PowerEngineCells) && void 0 !== ID ? ID : 0, nD = null !== (pD = wD.baf2PowerPads) && void 0 !== pD ? pD : 0, OD = null !== (iD = wD.baf2PowerCharge) && void 0 !== iD ? iD : 0, [PD, HD] = null !== (fD = wD.baf2PowerReactors) && void 0 !== fD ? fD : [0, 0], [UD, xD] = null !== (bD = wD.baf2PowerBatteries) && void 0 !== bD ? bD : [0, 0];
      let qD = SD("buildAFactory2Game:powerEngineCells", {
        amount: String(mD)
      });
      mD > 0 && XD > 0 && (qD = SD("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(mD),
        time: ni(SD, mD * mf / XD)
      }));
      let JD = SD("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(tD)
      });
      tD > 0 && MD > 0 && (JD = SD("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(tD),
        time: ni(SD, tD * Nf / MD)
      }));
      const KD = yD + gD + ZD + PD;
      return (0, Ui.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Ui.jsxs)("section", {
          children: [(0, Ui.jsxs)("h3", {
            children: [SD("buildAFactory2Game:powerMaking"), (0, Ui.jsx)("span", {
              children: BD(wD.baf2PowerMadePerS, "+")
            })]
          }), (0, Ui.jsxs)("ul", {
            children: [0 === KD && (0, Ui.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: SD("buildAFactory2Game:powerNoMakers")
            }), yD > 0 && (0, Ui.jsx)(nf, {
              item: "Generator",
              label: `${ii(SD,"Generator")} \xd7${yD}`,
              note: `${SD("buildAFactory2Game:powerRunning",{amount:String(MD)})} \xb7 ${JD}`,
              value: BD(MD * vf, "+"),
              dim: 0 === MD
            }), gD > 0 && (0, Ui.jsx)(nf, {
              item: "Volt Engine",
              label: `${ii(SD,"Volt Engine")} \xd7${gD}`,
              note: `${SD("buildAFactory2Game:powerRunning",{amount:String(XD)})} \xb7 ${qD}`,
              value: BD(XD * Xf, "+"),
              dim: 0 === XD
            }), ZD > 0 && (0, Ui.jsx)(nf, {
              item: "Solar Panel",
              label: `${ii(SD,"Solar Panel")} \xd7${ZD}`,
              note: SD(oD < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: BD(4 * ZD * oD, "+")
            }), PD > 0 && (0, Ui.jsx)(nf, {
              item: "Reactor Frame",
              label: `${SD("buildAFactory2Game:powerReactors")} \xd7${PD}`,
              note: SD("buildAFactory2Game:powerRunning", {
                amount: String(HD)
              }),
              value: BD(null !== (QD = wD.baf2PowerReactorPerS) && void 0 !== QD ? QD : 0, "+"),
              dim: 0 === HD
            })]
          })]
        }), (0, Ui.jsxs)("section", {
          children: [(0, Ui.jsxs)("h3", {
            children: [SD("buildAFactory2Game:powerStorage"), (0, Ui.jsx)("span", {
              children: rD(wD.baf2PowerCap)
            })]
          }), (vD > 0 || UD > 0) && (0, Ui.jsxs)("ul", {
            children: [vD > 0 && (0, Ui.jsx)(nf, {
              item: "Charge Vault",
              label: `${ii(SD,"Charge Vault")} \xd7${vD}`,
              value: `+${rD(8e3*vD)}`
            }), UD > 0 && (0, Ui.jsx)(nf, {
              item: "Battery Cell",
              label: `${SD("buildAFactory2Game:powerBatteries")} \xd7${UD}`,
              value: `+${rD(xD)}`
            })]
          })]
        }), (0, Ui.jsxs)("section", {
          children: [(0, Ui.jsxs)("h3", {
            children: [SD("buildAFactory2Game:powerUsing"), (0, Ui.jsx)("span", {
              children: BD(wD.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Ui.jsxs)("ul", {
            children: [0 === ND.length && 0 === nD && 0 === OD && (0, Ui.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: SD("buildAFactory2Game:powerNoUsers")
            }), ND.map((DD => {
              let [CD, cD, ID, pD, iD = 1, fD] = DD, bD = cD ? SD(of [iD - 1], {
                name: ii(SD, CD)
              }) : ii(SD, CD);
              return void 0 !== fD && (bD = SD("buildAFactory2Game:powerFarmName", {
                name: bD,
                mob: SD(dD(fD))
              })), (0, Ui.jsx)(nf, {
                item: CD,
                label: `${bD} \xd7${ID}`,
                note: SD("buildAFactory2Game:powerRunning", {
                  amount: String(pD)
                }),
                value: pD > 0 ? BD(pD * Of(CD, cD, iD, fD), "\u2212") : SD("buildAFactory2Game:powerIdle"),
                dim: 0 === pD
              }, `${CD}|${cD}|${iD}|${fD}`)
            })), nD > 0 && (0, Ui.jsx)(nf, {
              item: "Charging Pad",
              label: `${ii(SD,"Charging Pad")} \xd7${nD}`,
              value: SD("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), OD > 0 && (0, Ui.jsx)(nf, {
              item: "Homestead Core",
              label: SD("buildAFactory2Game:powerCharge"),
              value: BD(OD, "\u2212")
            }), wD.baf2PowerStarved > 0 && (0, Ui.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Ui.jsx)(xp.c, {
                name: "triangle-exclamation"
              }), SD("buildAFactory2Game:powerStarved", {
                amount: String(wD.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Hf = cD(4325),
      Uf = cD(1442);
    class xf {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(DD) {
        this.message = DD;
        for (const CD of this.listeners) CD()
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
    class qf extends xf {}

    function Jf(DD, CD) {
      const cD = () => {
          const cD = DD.get();
          if (!cD || !CD) return cD;
          const [ID, pD, iD] = cD.baf2PowerAt;
          return ID === CD[0] && pD === CD[1] && iD === CD[2] ? cD : null
        },
        [pD, iD] = (0, ID.useState)(cD);
      return (0, ID.useEffect)((() => (iD(cD()), DD.subscribe((() => {
        iD(cD())
      })))), [DD, ...null !== CD && void 0 !== CD ? CD : []]), pD
    }

    function Kf(DD) {
      return {
        stored: DD.baf2PowerStored,
        cap: DD.baf2PowerCap,
        madePerS: DD.baf2PowerMadePerS,
        usedPerS: DD.baf2PowerUsedPerS
      }
    }

    function af(DD) {
      let {
        stored: CD,
        cap: cD
      } = DD;
      return (0, Ui.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Ui.jsx)("div", {
          style: {
            width: `${Math.min(100,100*CD/Math.max(1,cD))}%`
          }
        })
      })
    }

    function Vf(DD) {
      let {
        figures: CD,
        labelled: cD = !1
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = CD.madePerS - CD.usedPerS, {
        text: iD,
        draining: fD
      } = function(DD, CD) {
        let {
          stored: cD,
          cap: ID,
          madePerS: pD,
          usedPerS: iD
        } = CD;
        const fD = pD - iD;
        return cD >= ID ? {
          text: DD("buildAFactory2Game:powerFull"),
          draining: !1
        } : fD > .05 ? {
          text: DD("buildAFactory2Game:powerFullIn", {
            time: ni(DD, (ID - cD) / fD)
          }),
          draining: !1
        } : fD < -.05 ? {
          text: DD("buildAFactory2Game:powerEmptyIn", {
            time: ni(DD, cD / -fD)
          }),
          draining: !0
        } : {
          text: DD("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(ID, CD);
      return (0, Ui.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Ui.jsx)(af, {
          stored: CD.stored,
          cap: CD.cap
        }), (0, Ui.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Ui.jsx)("span", {
            children: ID(cD ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: rD(CD.stored),
              cap: rD(CD.cap)
            })
          }), (0, Ui.jsxs)("span", {
            className: np()("Baf2PowerNet", {
              Draining: fD
            }),
            children: [ID("buildAFactory2Game:powerPerSecond", {
              rate: gi(Math.abs(pD), pD < 0 ? "\u2212" : "+")
            }), " \xb7 ", iD]
          })]
        })]
      })
    }

    function zf(DD) {
      let {
        stored: CD,
        cap: cD,
        rates: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)();
      return ID ? (0, Ui.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ui.jsx)(Vf, {
          figures: {
            stored: CD,
            cap: cD,
            madePerS: ID[0],
            usedPerS: ID[1]
          },
          labelled: !0
        })
      }) : (0, Ui.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Ui.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Ui.jsx)(af, {
            stored: CD,
            cap: cD
          }), (0, Ui.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Ui.jsx)("span", {
              children: pD("buildAFactory2Game:powerStoredLabelled", {
                stored: rD(CD),
                cap: rD(cD)
              })
            })
          })]
        })
      })
    }

    function jf(DD) {
      let {
        store: CD,
        close: cD
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = Jf(CD);
      return (0, Ui.jsx)(Hf.e, {
        close: cD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              children: [(0, Ui.jsx)("h2", {
                id: "baf2PowerTitle",
                children: ID("buildAFactory2Game:powerTitle")
              }), (0, Ui.jsx)("p", {
                children: ID("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Ui.jsx)(Uf.l, {
              onClick: cD
            })]
          }), pD && (0, Ui.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Ui.jsx)(Vf, {
              figures: Kf(pD)
            }), (0, Ui.jsx)(Pf, {
              message: pD
            })]
          })]
        })
      })
    }

    function lf(DD) {
      var CD;
      let {
        kind: cD,
        def: pD,
        si: iD,
        power: fD,
        stored: bD,
        cap: QD
      } = DD;
      const {
        t: wD
      } = (0, Up.F)(), SD = Jf(fD, iD), [BD, yD] = (0, ID.useState)(!1);
      return (0, Ui.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Ui.jsx)(bf, {
          kind: cD,
          def: pD,
          input: null,
          tier: null !== (CD = null === SD || void 0 === SD ? void 0 : SD.baf2PowerTier) && void 0 !== CD ? CD : 1
        }), (0, Ui.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: wD("buildAFactory2Game:powerTitle")
        }), SD && (0, Ui.jsx)(Vf, {
          figures: Kf(SD)
        }), !SD && (0, Ui.jsx)(zf, {
          stored: bD,
          cap: QD,
          rates: null
        }), SD && (0, Ui.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            yD(!BD)
          },
          "aria-expanded": BD,
          children: wD(BD ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), SD && BD && (0, Ui.jsx)(Pf, {
          message: SD
        })]
      })
    }
    const Lf = 2500,
      Tf = 17500,
      Gf = `${mD} `;
    const Rf = ["plan", "throttle"];

    function kf(DD) {
      if (DD.startsWith(`${UC} `)) return DD.slice(0, DD.lastIndexOf(" "));
      const CD = DD.split(" ");
      return CD[0] === SC && Rf.includes(CD[4]) ? CD.slice(0, 5).join(" ") : null
    }
    class df {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = DD, this.now = CD, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.sID = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = CD()
      }
      enqueue(DD) {
        this.queue(DD, this.nextTicket());
        const CD = this.sID + this.pending.length;
        return this.flush(), CD
      }
      track(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cD = this.nextTicket();
        if (!CD.urgent) return this.queue(DD, cD), this.flush(), cD;
        const {
          supersedes: ID
        } = CD;
        for (let iD = this.pending.length - 1; iD >= this.urgent; iD--) {
          const CD = this.pending[iD];
          (CD.command === DD || null !== ID && void 0 !== ID && ID(CD.command)) && (this.pending.splice(iD, 1), this.markLeft(CD.tickets))
        }
        const pD = this.pending.findIndex((CD => {
          let {
            command: cD
          } = CD;
          return cD === DD
        }));
        return -1 !== pD ? this.pending[pD].tickets.push(cD) : (this.pending.splice(this.urgent, 0, {
          command: DD,
          tickets: [cD]
        }), this.urgent += 1), this.flush(), cD
      }
      leftAt(DD) {
        const CD = this.leftTimes.get(DD);
        return void 0 !== CD ? CD : this.pending.some((CD => {
          let {
            tickets: cD
          } = CD;
          return cD.includes(DD)
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
        var CD;
        return (null === (CD = this.pending.at(-1)) || void 0 === CD ? void 0 : CD.command) === DD
      }
      sent() {
        return this.sID
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
        const CD = this.now();
        for (const cD of DD) this.leftTimes.set(cD, CD);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(DD, CD) {
        const cD = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === cD || void 0 === cD ? void 0 : cD.command) === DD) return void(! function(DD) {
          return DD === nD || DD.startsWith(`${XD} `) || DD.startsWith(`${GD} `)
        }(DD) ? cD.tickets.push(CD) : (this.pending.pop(), this.markLeft([...cD.tickets, CD])));
        const ID = void 0 === cD ? null : wC(cD.command, DD);
        if (null !== ID && void 0 !== cD) return cD.command = ID, void cD.tickets.push(CD);
        const pD = kf(DD);
        if (null !== pD && void 0 !== cD && kf(cD.command) === pD) return cD.command = DD, void cD.tickets.push(CD);
        if (null !== cD && void 0 !== cD && cD.command.startsWith(Gf) && DD.startsWith(Gf)) {
          const ID = DD.slice(Gf.length);
          if (cD.command.slice(Gf.length).split(",").includes(ID)) return void cD.tickets.push(CD);
          const pD = `${cD.command},${ID}`;
          if (pD.length <= 119) return cD.command = pD, void cD.tickets.push(CD)
        }
        this.pending.push({
          command: DD,
          tickets: [CD]
        })
      }
      flush() {
        const DD = this.now();
        for (this.tokens = Math.min(5, this.tokens + (DD - this.refilledAt) / Lf), this.refilledAt = DD; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.sID += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: DD,
            tickets: CD
          } = this.pending.shift();
          this.markLeft(CD), this.send(DD)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Lf)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Yf {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new df(DD, CD)
      }
      send(DD) {
        return this.queue.enqueue(DD)
      }
      sent() {
        return this.queue.sent()
      }
      track(DD, CD) {
        return this.queue.track(DD, CD)
      }
      leftAt(DD) {
        return this.queue.leftAt(DD)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(DD) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = CD, this.send(DD), this.islandEdits.count
      }
      syncIslandEdits(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: cD
        } = this, ID = CD - cD.lastAtMs < Tf;
        cD.count = ID ? Math.max(cD.count, DD) : DD
      }
      clear() {
        this.queue.clear()
      }
    }
    const Wf = (0, ID.createContext)(null);

    function sf() {
      const DD = (0, ID.useContext)(Wf);
      if (!DD) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return DD
    }

    function Ef(DD, CD) {
      return null !== CD && void 0 !== CD ? CD : 1 === DD
    }

    function ef(DD, CD) {
      return DD.every((DD => {
        var cD;
        let [ID, , pD] = DD;
        return !Ef(pD, null === (cD = CD.get(ID)) || void 0 === cD ? void 0 : cD.uM)
      }))
    }

    function uf(DD, CD, cD) {
      if (0 === DD.size) return DD;
      const ID = new Map(DD);
      for (const [pD, iD] of DD) {
        const DD = CD.find((DD => {
          let [CD] = DD;
          return CD === pD
        }));
        (!DD || iD.uM === (1 === DD[2]) || iD.atMs < cD) && ID.delete(pD)
      }
      return ID
    }

    function hf(DD) {
      var CD;
      let {
        si: cD,
        input: pD,
        drops: iD,
        seconds: fD
      } = DD;
      const {
        t: bD
      } = (0, Up.F)(), QD = sf(), [wD, SD] = (0, ID.useState)(new Map);
      (0, ID.useEffect)((() => {
        iD && SD((DD => uf(DD, iD, Date.now() - Tf)))
      }), [iD]), (0, ID.useEffect)((() => {
        const DD = function(DD, CD) {
          let cD = null;
          for (const {
              atMs: ID
            }
            of DD.values()) cD = null === cD ? ID : Math.min(cD, ID);
          return null === cD ? null : cD + CD
        }(wD, Tf);
        if (null === DD || !iD) return;
        const CD = setTimeout((() => {
          SD((DD => uf(DD, iD, Date.now() - Tf)))
        }), Math.max(0, DD - Date.now()) + 1);
        return () => {
          clearTimeout(CD)
        }
      }), [wD, iD]);
      const BD = YD(pD),
        yD = null !== BD && null !== iD && ef(iD, wD),
        MD = function(DD, CD, cD) {
          return null === DD || null === CD || ef(CD, cD) ? 0 : TD[lD[DD]]
        }(BD, iD, wD);
      return (0, Ui.jsxs)(ji, {
        title: bD("buildAFactory2Game:farmDropsTitle", {
          seconds: fD
        }),
        count: null !== (CD = null === iD || void 0 === iD ? void 0 : iD.length) && void 0 !== CD ? CD : 0,
        children: [MD > 0 && (0, Ui.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: bD("buildAFactory2Game:farmDropsPower", {
            power: String(MD)
          })
        }), (null === BD || !iD) && (0, Ui.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: bD("buildAFactory2Game:farmDropsEmpty")
        }), yD && (0, Ui.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: bD("buildAFactory2Game:farmDropsAllVoided")
        }), null !== BD && (null === iD || void 0 === iD ? void 0 : iD.map((DD => {
          var CD;
          let [ID, pD, iD] = DD;
          const fD = pD < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            BD = Ef(iD, null === (CD = wD.get(ID)) || void 0 === CD ? void 0 : CD.uM);
          return (0, Ui.jsxs)("li", {
            className: np()("Baf2Recipe Baf2FarmDrop", {
              Voided: !BD
            }),
            children: [(0, Ui.jsx)(Ji, {
              item: ID,
              amount: 1
            }), (0, Ui.jsx)("span", {
              className: "Baf2RecipeName",
              children: ii(bD, ID)
            }), (0, Ui.jsx)("span", {
              className: "Baf2FarmRate",
              children: bD(fD, {
                amount: String(pD)
              })
            }), (0, Ui.jsx)("button", {
              type: "button",
              className: np()("Baf2FarmToggle SmallTextBold", {
                Kept: BD
              }),
              "aria-pressed": BD,
              onClick: () => {
                SD(new Map(wD).set(ID, {
                  uM: !BD,
                  atMs: Date.now()
                })), QD.send(function(DD, CD, cD, ID) {
                  return `${GD} ${DD} ${CD} ${cD} ${ID}`
                }(cD[0], cD[1], cD[2], ID))
              },
              children: bD(BD ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, ID)
        })))]
      })
    }
    var rf;
    const Af = String(null !== (rf = zC.Synthesizer.waterPerOp) && void 0 !== rf ? rf : 0);

    function Ff(DD) {
      let {
        si: CD,
        taught: cD
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), iD = sf(), [fD, bD] = (0, ID.useState)(null);
      (0, ID.useEffect)((() => {
        null !== fD && cD === fD && bD(null)
      }), [fD, cD]);
      const QD = null !== fD && void 0 !== fD ? fD : cD;
      let wD = pD("buildAFactory2Game:synthPick");
      return null !== QD && (wD = pD("buildAFactory2Game:synthGrows", {
        name: ii(pD, QD),
        input: ii(pD, OC),
        water: Af
      })), (0, Ui.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Ui.jsx)("div", {
          className: np()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === QD
          }),
          children: wD
        }), (0, Ui.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: PC.map(((DD, cD) => {
            const ID = ii(pD, DD),
              fD = DD === QD;
            return (0, Ui.jsx)("li", {
              children: (0, Ui.jsx)("button", {
                type: "button",
                className: np()("Baf2SynthTile", {
                  Selected: fD
                }),
                title: ID,
                "aria-label": ID,
                "aria-pressed": fD,
                onClick: () => {
                  fD || (bD(DD), iD.send(`${UC} ${CD[0]} ${CD[1]} ${CD[2]} ${cD}`))
                },
                children: (0, Ui.jsx)(qp.d, {
                  itemName: DD,
                  amount: 0
                })
              })
            }, DD)
          }))
        })]
      })
    }
    const Db = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Cb(DD) {
      let {
        kind: CD,
        tier: cD,
        coupled: ID,
        level: pD,
        slot: iD
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), QD = hD(lC);
      if (!ID && null !== cD && cD < QD) return (0, Ui.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Ui.jsx)(xp.c, {
            name: "lock"
          })
        }), (0, Ui.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: fD("buildAFactory2Game:upgradeLocked")
        }), (0, Ui.jsx)("span", {
          className: "Baf2TierTag",
          children: fD("buildAFactory2Game:tierTag", {
            tier: String(QD)
          })
        })]
      });
      const wD = function(DD, CD) {
          if (bD() && "Crusher" !== DD && null !== CD) {
            if (cb(TC, CD)) return {
              item: TC,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (cb(LC, CD)) return {
              item: LC,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: lC,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(CD, cD),
        SD = fD(ID ? Db[pD - 1] : wD.emptyKey),
        BD = null !== cD ? function(DD, CD, cD, ID) {
          if (!bD() || !cD || "Crusher" === DD || CD < 10) return null;
          const pD = hD(TC);
          if (ID < 3 && pD > 1 && (2 === ID || CD >= pD)) return {
            tier: pD,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const iD = hD(LC);
          if (1 === ID && iD > 1) return {
            tier: iD,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(CD, cD, ID, pD) : null;
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2UpgradeSocket", {
          Fitted: ID
        }),
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [ID && iD, !ID && (0, Ui.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Ui.jsx)(qp.d, {
              itemName: wD.item,
              amount: 0
            })
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Ui.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: fD("buildAFactory2Game:upgradeTitle")
          }), (0, Ui.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: SD
          }), ID && pD >= 2 && "Crusher" === CD && (0, Ui.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: fD("buildAFactory2Game:couplerCrusherHint")
          }), BD && null !== cD && cD < BD.tier && (0, Ui.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Ui.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Ui.jsx)(xp.c, {
                name: "lock"
              })
            }), fD(BD.lockedKey), (0, Ui.jsx)("span", {
              className: "Baf2TierTag",
              children: fD("buildAFactory2Game:tierTag", {
                tier: String(BD.tier)
              })
            })]
          }), BD && null !== cD && cD >= BD.tier && (0, Ui.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: fD(BD.nextKey)
          })]
        })]
      })
    }

    function cb(DD, CD) {
      const cD = hD(DD);
      return cD > 1 && CD >= cD
    }
    var Ib = cD(36402);
    const pb = (0, AD.D)(zC.Condenser, zC.Condenser.fluidMade),
      ib = .05;
    class fb extends xf {}

    function bb(DD) {
      return gi(DD, "")
    }

    function Qb(DD, CD, cD) {
      return DD(CD ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: cD
      })
    }

    function wb(DD, CD, cD, ID) {
      return cD <= ib && ID <= ib ? null : ID <= ib || cD <= ib ? Qb(DD, CD, ID <= ib ? gi(cD, "+") : gi(ID, "\u2212")) : DD(CD ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: bb(cD),
        used: bb(ID)
      })
    }

    function Sb(DD, CD) {
      return Math.min(100, 100 * DD / Math.max(1, CD))
    }

    function Bb(DD) {
      let {
        stored: CD,
        cap: cD,
        netPerS: ID,
        rates: pD,
        cryo: iD
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), bD = function(DD, CD, cD, ID) {
        return cD <= 0 ? DD("buildAFactory2Game:waterNoStorage") : CD >= cD ? DD("buildAFactory2Game:powerFull") : ID > ib ? DD("buildAFactory2Game:powerFullIn", {
          time: ni(DD, (cD - CD) / ID)
        }) : ID < -.05 ? CD <= 0 ? DD("buildAFactory2Game:waterEmpty") : DD("buildAFactory2Game:powerEmptyIn", {
          time: ni(DD, CD / -ID)
        }) : DD("buildAFactory2Game:powerSteady")
      }(fD, CD, cD, ID), QD = cD > 0 && CD < cD && Math.abs(ID) <= ib, wD = fD(iD ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), SD = null !== pD ? `${pD} \xb7 ${bD}` : QD ? wD : `${wD} \xb7 ${bD}`;
      return (0, Ui.jsxs)(Ui.Fragment, {
        children: [(0, Ui.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Ui.jsx)("div", {
            style: {
              width: `${Sb(CD,cD)}%`
            }
          })
        }), (0, Ui.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Ui.jsx)("span", {
            children: cD > 0 && fD("buildAFactory2Game:powerStored", {
              stored: (0, AD.O)(CD),
              cap: (0, AD.O)(cD)
            })
          }), (0, Ui.jsx)("span", {
            className: np()("Baf2WaterNet", {
              Draining: ID < -.05
            }),
            children: SD
          })]
        })]
      })
    }

    function yb(DD) {
      let {
        water: CD,
        at: cD,
        side: ID = null
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), iD = sf(), [fD, bD, QD] = CD;
      return (0, Ui.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Ui.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: pD(null === ID ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${ID}`)
          }), (0, Ui.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              iD.send(`${AD.B} ${cD[0]} ${cD[1]} ${cD[2]}${"cryoOut"===ID?" cryo":""}`)
            },
            children: pD("buildAFactory2Game:waterDetails")
          })]
        }), (0, Ui.jsx)(Bb, {
          stored: fD,
          cap: bD,
          netPerS: QD,
          rates: Qb(pD, "cryoOut" === ID, gi(Math.abs(QD), QD < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === ID
        })]
      })
    }

    function Mb(DD, CD) {
      var cD, ID, pD;
      const iD = !0 === CD.baf2WaterCryo,
        fD = null !== (cD = null === (ID = CD.baf2WaterMakers.find((DD => DD[0] === (iD ? AD.c : "Condenser")))) || void 0 === ID ? void 0 : ID[1]) && void 0 !== cD ? cD : 0,
        bD = [],
        QD = (CD, cD, ID) => {
          CD > 0 && bD.push(DD(1 === CD ? cD : ID, {
            count: String(CD)
          }))
        };
      return iD ? QD(fD, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : QD(fD, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), QD(null !== (pD = CD.baf2WaterPipes) && void 0 !== pD ? pD : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), QD(CD.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), bD.join(" \xb7 ")
    }

    function tb(DD, CD) {
      if (!0 === CD.baf2WaterCryo) return function(DD, CD) {
        const cD = zC[AD.c];
        switch (CD.baf2WaterThis) {
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
            var ID;
            const [pD, iD] = null !== (ID = CD.baf2WaterThisRates) && void 0 !== ID ? ID : [(0, AD.D)(cD, cD.cryoMade), (0, AD.D)(cD, cD.powerPerOp)];
            return !0 === CD.baf2WaterDriven ? {
              text: DD("buildAFactory2Game:cryoThisMixerDriven", {
                rate: bb(pD)
              }),
              bad: !1
            } : {
              text: DD("buildAFactory2Game:cryoThisMixer", {
                rate: bb(pD),
                power: bb(iD)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: DD("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(DD, CD);
      const cD = !0 === CD.baf2WaterDriven,
        ID = zC.Condenser;
      switch (CD.baf2WaterThis) {
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
              tank: (0, AD.O)(AD.q),
              cap: (0, AD.O)(CD.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var pD;
          const [iD, fD] = null !== (pD = CD.baf2WaterThisRates) && void 0 !== pD ? pD : [pb, (0, AD.D)(ID, ID.powerPerOp)];
          return cD ? {
            text: DD("buildAFactory2Game:waterThisCondenserDriven", {
              rate: bb(iD)
            }),
            bad: !1
          } : {
            text: DD("buildAFactory2Game:waterThisCondenser", {
              rate: bb(iD),
              power: bb(fD)
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

    function Zb(DD, CD) {
      const cD = CD.baf2WaterMakers.some((DD => !0 === DD[5]));
      if (!0 === CD.baf2WaterCryo) {
        const ID = CD.baf2WaterUsedPerS - CD.baf2WaterMadePerS,
          pD = cD || ID <= ib ? 0 : (0, AD.C)(ID);
        return 0 === pD ? null : pD > 1 ? DD("buildAFactory2Game:cryoNextMixers", {
          mixers: String(pD)
        }) : DD("buildAFactory2Game:cryoNextOne")
      }
      const ID = cD ? null : function(DD, CD) {
        const cD = CD - DD;
        return cD <= ib ? null : Math.ceil(cD / pb)
      }(CD.baf2WaterMadePerS, CD.baf2WaterUsedPerS);
      return null === ID ? null : ID > 1 ? DD("buildAFactory2Game:waterNextCondensers", {
        condensers: String(ID)
      }) : DD("buildAFactory2Game:waterNextOne")
    }

    function ob(DD) {
      let {
        item: CD,
        label: cD,
        note: ID,
        value: pD,
        dim: iD,
        bad: fD
      } = DD;
      return (0, Ui.jsxs)("li", {
        className: np()("Baf2WaterRow", {
          Dim: iD,
          Bad: fD
        }),
        children: [(0, Ui.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: CD,
            amount: 0
          })
        }), (0, Ui.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Ui.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: cD
          }), ID && (0, Ui.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: ID
          })]
        }), (0, Ui.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: pD
        })]
      })
    }

    function vb(DD) {
      return Ib.l[DD] ? DD : "Reactor Port"
    }

    function Nb(DD) {
      let {
        message: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), ID = !0 === CD.baf2WaterCryo, pD = (DD, CD) => Qb(cD, ID, gi(DD, CD));
      return (0, Ui.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Ui.jsxs)("section", {
          children: [(0, Ui.jsxs)("h3", {
            children: [cD("buildAFactory2Game:waterMakes"), (0, Ui.jsx)("span", {
              children: pD(CD.baf2WaterMadePerS, "+")
            })]
          }), (0, Ui.jsxs)("ul", {
            children: [0 === CD.baf2WaterMakers.length && (0, Ui.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: cD(ID ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), CD.baf2WaterMakers.map((DD => {
              let [CD, ID, iD, fD, bD, QD] = DD;
              const wD = cD("buildAFactory2Game:powerRunning", {
                amount: String(iD)
              });
              let SD = bD > 0 ? cD("buildAFactory2Game:waterMakerPower", {
                running: wD,
                power: bb(bD)
              }) : wD;
              return QD && (SD = cD(0 === iD && fD <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Ui.jsx)(ob, {
                item: CD,
                label: `${ii(cD,CD)} \xd7${ID}`,
                note: SD,
                value: iD > 0 || QD && fD > 0 ? pD(fD, "+") : cD("buildAFactory2Game:powerIdle"),
                dim: 0 === iD && !QD,
                bad: QD
              }, CD)
            }))]
          })]
        }), (0, Ui.jsxs)("section", {
          children: [(0, Ui.jsxs)("h3", {
            children: [cD("buildAFactory2Game:waterUses"), (0, Ui.jsx)("span", {
              children: pD(CD.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Ui.jsxs)("ul", {
            children: [0 === CD.baf2WaterUsers.length && (0, Ui.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: cD(ID ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), CD.baf2WaterUsers.map((DD => {
              let [CD, ID, iD, fD] = DD;
              const bD = Ib.l[CD] ? ii(cD, CD) : CD;
              return (0, Ui.jsx)(ob, {
                item: vb(CD),
                label: ID > 1 ? `${bD} \xd7${ID}` : bD,
                note: fD ? cD("buildAFactory2Game:waterPortFirst") : void 0,
                value: iD > 0 ? pD(iD, "\u2212") : cD("buildAFactory2Game:powerIdle"),
                dim: 0 === iD
              }, CD)
            }))]
          })]
        })]
      })
    }

    function gb(DD) {
      var CD, cD, pD, iD, fD;
      let {
        store: bD,
        close: QD
      } = DD;
      const {
        t: wD
      } = (0, Up.F)(), SD = function(DD) {
        const [CD, cD] = (0, ID.useState)((() => DD.get()));
        return (0, ID.useEffect)((() => (cD(DD.get()), DD.subscribe((() => {
          cD(DD.get())
        })))), [DD]), CD
      }(bD), BD = null !== (CD = null === SD || void 0 === SD ? void 0 : SD.baf2WaterStored) && void 0 !== CD ? CD : 0, yD = null !== (cD = null === SD || void 0 === SD ? void 0 : SD.baf2WaterCap) && void 0 !== cD ? cD : 0, MD = null !== (pD = null === SD || void 0 === SD ? void 0 : SD.baf2WaterMadePerS) && void 0 !== pD ? pD : 0, tD = null !== (iD = null === SD || void 0 === SD ? void 0 : SD.baf2WaterUsedPerS) && void 0 !== iD ? iD : 0, ZD = null !== (fD = null === SD || void 0 === SD ? void 0 : SD.baf2WaterNetPerS) && void 0 !== fD ? fD : MD - tD, oD = SD && tb(wD, SD), vD = SD && Zb(wD, SD), ND = !0 === (null === SD || void 0 === SD ? void 0 : SD.baf2WaterCryo);
      return (0, Ui.jsx)(Hf.e, {
        close: QD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== SD && yD <= 0 ? (0, Ui.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Ui.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Ui.jsx)(qp.d, {
                  itemName: ND ? tc.f : AD.f,
                  amount: 0
                })
              }), (0, Ui.jsxs)("div", {
                children: [(0, Ui.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: wD(ND ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), SD && (0, Ui.jsx)("p", {
                  children: Mb(wD, SD)
                })]
              })]
            }), (0, Ui.jsx)(Uf.l, {
              onClick: QD
            })]
          }), SD && oD && (0, Ui.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Ui.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Ui.jsx)(Bb, {
                stored: BD,
                cap: yD,
                netPerS: ZD,
                cryo: ND,
                rates: wb(wD, ND, MD, tD)
              })
            }), (0, Ui.jsx)("div", {
              className: np()("Baf2WaterThis", {
                Bad: oD.bad
              }),
              children: oD.text
            }), SD.baf2WaterDriven && (0, Ui.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Ui.jsx)(xp.c, {
                name: "bolt"
              }), wD(ND ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), vD && (0, Ui.jsx)("p", {
              className: "Baf2WaterNext",
              children: vD
            }), (0, Ui.jsx)(Nb, {
              message: SD
            })]
          })]
        })
      })
    }
    class Xb {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(DD, CD) {
        const cD = this.get(DD);
        cD && null === CD.opLeftMs && null === CD.fuelLeftMs && CD.status === cD.status ? CD = {
          ...CD,
          opLeftMs: cD.opLeftMs,
          fuelLeftMs: cD.fuelLeftMs,
          burning: cD.burning
        } : this.updates++, this.pos = DD, this.view = CD;
        for (const ID of this.listeners) ID()
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

    function mb(DD, CD, cD, ID) {
      return "noFuel" === CD && ID && !pc(zC[DD]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === CD && !0 === (null === cD || void 0 === cD ? void 0 : cD.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === CD && !0 === (null === cD || void 0 === cD ? void 0 : cD.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === CD && !0 === (null === cD || void 0 === cD ? void 0 : cD.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === CD && !0 === (null === cD || void 0 === cD ? void 0 : cD.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : nb(CD, cD) ? "buildAFactory2Game:machineStatus_noInputShort" : function(DD, CD) {
        const cD = zC[DD];
        if ("noFuel" === CD && void 0 !== cD.fuels) return pc(cD) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (cD.mobFarm && ("noInput" === CD || "badInput" === CD)) return `buildAFactory2Game:machineStatus_${CD}MobFarm`;
        if ("outputFull" === CD && (void 0 !== cD.table || cD.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === CD && EC(cD)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== cD.cryoMade && ("noInput" === CD || "noOutlet" === CD || "fluidFull" === CD)) return `buildAFactory2Game:machineStatus_${CD}Mixer`;
        return `buildAFactory2Game:machineStatus_${CD}`
      }(DD, CD)
    }

    function nb(DD, CD) {
      return "noInput" === DD && null !== CD && void 0 !== CD && CD.input && CD.inputShort ? {
        input: CD.input,
        short: CD.inputShort
      } : null
    }

    function Ob(DD) {
      return Op(DD) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== DD.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Pb(DD) {
      const CD = (0, zD.le)(DD);
      return `Baf2Pane Baf2Pane${CD.charAt(0).toUpperCase()}${CD.slice(1)}`
    }

    function Hb(DD, CD) {
      const [cD, pD] = (0, ID.useState)((() => DD.get(CD)));
      return (0, ID.useEffect)((() => {
        pD(DD.get(CD));
        const cD = DD.subscribe((() => {
          pD(DD.get(CD))
        }));
        return () => {
          cD(), DD.forget(CD)
        }
      }), [DD, ...CD]), cD
    }

    function Ub(DD, CD, cD, ID) {
      const pD = zC[DD],
        iD = CD && pD.couplable ? dC(pD, cD) : pD,
        fD = null !== ID && Cc(iD) ? function(DD, CD) {
          var cD;
          return null !== (cD = null !== CD && Cc(DD) ? bc[CD] : void 0) && void 0 !== cD ? cD : DD.opMs
        }(iD, Qc(ID)) : iD.opMs;
      return fD === iD.opMs ? iD : {
        ...iD,
        opMs: fD
      }
    }

    function xb(DD) {
      let {
        running: CD,
        opMs: cD,
        opLeftMs: ID,
        updateCount: pD
      } = DD;
      return (0, Ui.jsx)("div", {
        className: np()("Baf2MachineProgress", {
          Running: CD
        }),
        children: (0, Ui.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: cD / 1e3 + "s",
            animationDelay: null === ID ? void 0 : (ID - cD) / 1e3 + "s"
          }
        }, pD)
      })
    }

    function qb(DD) {
      let {
        running: CD,
        leftMs: cD,
        periodMs: ID,
        updateCount: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)(), fD = Math.min(Math.max(null !== cD && void 0 !== cD ? cD : 0, 0), ID), bD = CD && fD > 0, QD = iD("buildAFactory2Game:machineBarFuel");
      return (0, Ui.jsx)("div", {
        className: np()("Baf2FuelBurn", {
          Draining: bD
        }),
        role: "img",
        title: QD,
        "aria-label": QD,
        children: (0, Ui.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: bD ? {
            animationDuration: ID / 1e3 + "s",
            animationDelay: (fD - ID) / 1e3 + "s"
          } : {
            transform: `scaleY(${fD/ID})`
          }
        }, pD)
      })
    }

    function Jb(DD, CD, cD) {
      let [ID, pD] = cD;
      const iD = 1 !== ID ? Hp(CD) : null;
      return {
        amount: ID,
        have: pD,
        item: DD(iD || Ii(CD))
      }
    }

    function Kb(DD) {
      return Cc(DD) ? "buildAFactory2Game:machineBarMining" : cc(DD) ? "buildAFactory2Game:machineBarCutting" : void 0 !== DD.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function ab(DD) {
      var CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD;
      let {
        kind: XD,
        si: mD,
        store: nD,
        power: OD,
        renderSlot: PD
      } = DD;
      const {
        t: HD
      } = (0, Up.F)(), UD = Hb(nD, mD), xD = zC[XD], qD = null !== (CD = null === UD || void 0 === UD ? void 0 : UD.coupled) && void 0 !== CD && CD, JD = null !== (cD = null === UD || void 0 === UD ? void 0 : UD.couplerLevel) && void 0 !== cD ? cD : 1, KD = Ub(XD, qD, JD, null !== (ID = null === UD || void 0 === UD || null === (pD = UD.dug) || void 0 === pD ? void 0 : pD.item) && void 0 !== ID ? ID : null), aD = null !== (iD = null === UD || void 0 === UD ? void 0 : UD.status) && void 0 !== iD ? iD : null, VD = null !== (fD = null === UD || void 0 === UD ? void 0 : UD.power) && void 0 !== fD ? fD : null, zD = null !== (bD = null === UD || void 0 === UD ? void 0 : UD.opLeftMs) && void 0 !== bD ? bD : null, jD = null !== (QD = null === UD || void 0 === UD ? void 0 : UD.dug) && void 0 !== QD ? QD : null, lD = null !== jD && Cc(xD) ? bc[null !== (wD = Qc(jD.item)) && void 0 !== wD ? wD : ""] : void 0, LD = void 0 === lD ? null : 6e4 / lD, TD = null !== (SD = null === UD || void 0 === UD ? void 0 : UD.powerCap) && void 0 !== SD ? SD : 4e3, GD = null !== (BD = null === UD || void 0 === UD ? void 0 : UD.tier) && void 0 !== BD ? BD : null, RD = void 0 !== KD.powerMade, kD = null !== xD.fuelSlot ? PD(xD.fuelSlot) : null, dD = kC(xD), YD = !qD && !0 === (null === UD || void 0 === UD ? void 0 : UD.fuelFed), sD = !qD && !0 === (null === UD || void 0 === UD ? void 0 : UD.fuelFeeds), ED = null !== xD.fuelSlot && !qD, eD = null !== (yD = null === UD || void 0 === UD ? void 0 : UD.fuelLeftMs) && void 0 !== yD ? yD : null, uD = function(DD, CD, cD) {
        var ID;
        const pD = null === CD ? void 0 : ic[CD];
        return Math.max(null !== (ID = null !== pD && void 0 !== pD ? pD : cD) && void 0 !== ID ? ID : 0, DD.opMs)
      }(KD, null !== (MD = null === UD || void 0 === UD ? void 0 : UD.burning) && void 0 !== MD ? MD : null, eD), hD = null !== (tD = null === UD || void 0 === UD ? void 0 : UD.fuelKeep) && void 0 !== tD ? tD : null, rD = null === aD ? null : mb(XD, aD, UD, YD), AD = null === aD ? null : nb(aD, UD);
      return (0, Ui.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ui.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: HD(Ii(XD))
          }), jD && (0, Ui.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [HD("Tree Cutter" === XD ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Ui.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ui.jsx)(qp.d, {
                itemName: jD.item,
                amount: 0
              })
            }), (0, Ui.jsx)(Jp.c, {
              text: jD.name
            })]
          }), null !== LD && (0, Ui.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: HD("buildAFactory2Game:machineDigsFixed", {
              perMin: String(LD)
            })
          }), (null === UD || void 0 === UD ? void 0 : UD.field) && (0, Ui.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Ui.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Ui.jsx)(qp.d, {
                itemName: "Wheat",
                amount: 0
              })
            }), HD("buildAFactory2Game:machineField", {
              planted: String(UD.field[0]),
              ripe: String(UD.field[1])
            })]
          }), (0, Ui.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ui.jsxs)("div", {
              className: np()("Baf2MachineColumn", {
                Baf2Burns: ED
              }),
              children: [null !== KD.inputSlot && (0, Ui.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Ui.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: HD(Ob(KD))
                }), PD(KD.inputSlot)]
              }), null !== xD.fuelSlot && !qD && (0, Ui.jsxs)("div", {
                className: np()("Baf2MachineSlot", {
                  Baf2FuelFed: YD
                }),
                children: [(0, Ui.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [YD && (0, Ui.jsx)(xp.c, {
                    name: "fire"
                  }), HD("buildAFactory2Game:machineFuel")]
                }), (0, Ui.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Ui.jsx)(qb, {
                    running: "running" === aD,
                    leftMs: eD,
                    periodMs: uD,
                    updateCount: nD.updateCount
                  }), kD]
                })]
              }), null !== xD.fuelSlot && qD && (0, Ui.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Ui.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: HD("buildAFactory2Game:machineFuel")
                }), (0, Ui.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: HD("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": HD("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Ui.jsx)(xp.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Ui.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Ui.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: HD(Kb(KD))
              }), (0, Ui.jsx)(xb, {
                running: "running" === aD,
                opMs: KD.opMs,
                opLeftMs: zD,
                updateCount: nD.updateCount
              })]
            }), KD.outputSlots.length > 0 && (0, Ui.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ui.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: HD("buildAFactory2Game:machineOutput")
              }), (0, Ui.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: KD.outputSlots.map((DD => (0, Ui.jsx)("div", {
                  children: PD(DD)
                }, DD)))
              })]
            }), null !== VD && RD && (0, Ui.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Ui.jsx)("div", {
                style: {
                  height: 100 * VD / TD + "%"
                }
              })
            })]
          }), ED && null !== hD && (0, Ui.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ui.jsx)(xp.c, {
              name: "arrows-rotate"
            }), HD(cc(KD) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(hD)
            })]
          }), (YD || sD) && (0, Ui.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Ui.jsx)(xp.c, {
              name: "fire"
            }), HD(YD ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), xD.couplable && (0, Ui.jsx)(Cb, {
            kind: XD,
            tier: GD,
            coupled: qD,
            level: JD,
            slot: dD === xD.fuelSlot ? kD : null !== dD ? PD(dD) : null
          }), null !== VD && !RD && !0 === (null === UD || void 0 === UD ? void 0 : UD.reactorPowered) && (0, Ui.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: HD("buildAFactory2Game:machineReactorPowered")
          }), null !== VD && !RD && !0 !== (null === UD || void 0 === UD ? void 0 : UD.reactorPowered) && (0, Ui.jsx)(zf, {
            stored: VD,
            cap: TD,
            rates: null !== (ZD = null === UD || void 0 === UD ? void 0 : UD.powerRates) && void 0 !== ZD ? ZD : null
          }), (null === UD || void 0 === UD ? void 0 : UD.water) && (0, Ui.jsx)(yb, {
            water: UD.water,
            at: mD,
            side: UD.cryo ? "waterIn" : null
          }), (null === UD || void 0 === UD ? void 0 : UD.cryo) && (0, Ui.jsx)(yb, {
            water: UD.cryo,
            at: mD,
            side: "cryoOut"
          }), null !== UD && void 0 !== UD && UD.inertCoupler ? (0, Ui.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: HD("buildAFactory2Game:machineStatus_couplerOff", {
              item: ii(HD, UD.inertCoupler)
            })
          }) : null !== rD && (0, Ui.jsx)("div", {
            className: np()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== aD
            }),
            children: HD(rD, AD ? Jb(HD, AD.input, AD.short) : void 0)
          })]
        }), (0, Ui.jsxs)("div", {
          className: np()("Baf2MachineSide", {
            Baf2SynthSide: EC(xD)
          }),
          children: [EC(xD) && (0, Ui.jsx)(Ff, {
            si: mD,
            taught: null !== (oD = null === UD || void 0 === UD ? void 0 : UD.taught) && void 0 !== oD ? oD : null
          }, mD.join(",")), RD && (0, Ui.jsx)(lf, {
            kind: XD,
            def: KD,
            si: mD,
            power: OD,
            stored: null !== VD && void 0 !== VD ? VD : 0,
            cap: TD
          }), WD(xD) && (0, Ui.jsx)(hf, {
            si: mD,
            input: null !== (vD = null === UD || void 0 === UD ? void 0 : UD.input) && void 0 !== vD ? vD : null,
            drops: null !== (ND = null === UD || void 0 === UD ? void 0 : UD.farm) && void 0 !== ND ? ND : null,
            seconds: String(KD.opMs / 1e3)
          }), !RD && !WD(xD) && !EC(xD) && (0, Ui.jsx)(bf, {
            kind: XD,
            def: KD,
            input: null !== (gD = null === UD || void 0 === UD ? void 0 : UD.input) && void 0 !== gD ? gD : null,
            tier: null !== GD && void 0 !== GD ? GD : 1,
            noSeeds: !0 === (null === UD || void 0 === UD ? void 0 : UD.noSeeds)
          })]
        })]
      })
    }

    function Vb(DD, CD, cD, ID) {
      var pD;
      const iD = zC[DD],
        fD = [iD.inputSlot, iD.fuelSlot, ...null !== (pD = iD.inputSlots) && void 0 !== pD ? pD : []].filter((DD => null !== DD));
      return {
        render: pD => {
          let {
            si: iD,
            renderSlot: fD
          } = pD;
          return (0, Ui.jsx)(Wf.Provider, {
            value: ID,
            children: (0, Ui.jsx)(ab, {
              kind: DD,
              si: iD,
              store: CD,
              power: cD,
              renderSlot: fD
            })
          })
        },
        quickMoveRange: fD.length > 0 ? [Math.min(...fD), Math.max(...fD) + 1] : [0, 0],
        className: Pb(DD)
      }
    }
    const zb = "Assembler";

    function jb(DD) {
      var CD, cD, ID, pD, iD, fD, bD, QD, wD;
      let {
        si: SD,
        store: BD,
        renderSlot: yD
      } = DD;
      const {
        t: MD
      } = (0, Up.F)(), tD = Hb(BD, SD), ZD = null !== (CD = null === tD || void 0 === tD ? void 0 : tD.tier) && void 0 !== CD ? CD : 1, oD = null !== (cD = null === tD || void 0 === tD ? void 0 : tD.taught) && void 0 !== cD ? cD : null, vD = rC(zb, {
        coupled: !1,
        taught: oD
      }), ND = null !== (ID = vD.bench) && void 0 !== ID ? ID : null, gD = null !== (pD = null === tD || void 0 === tD ? void 0 : tD.status) && void 0 !== pD ? pD : null, XD = null !== (iD = null === tD || void 0 === tD ? void 0 : tD.power) && void 0 !== iD ? iD : null, mD = null !== (fD = null === tD || void 0 === tD ? void 0 : tD.powerCap) && void 0 !== fD ? fD : 4e3;
      return (0, Ui.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Ui.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: MD(Ii(zb))
          }), ND && (0, Ui.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [MD("buildAFactory2Game:benchMakes"), (0, Ui.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Ui.jsx)(qp.d, {
                itemName: ND.output,
                amount: 0
              })
            }), (null === tD || void 0 === tD ? void 0 : tD.taughtName) && (0, Ui.jsx)(Jp.c, {
              text: tD.taughtName
            }), ND.outputAmount > 1 && (0, Ui.jsxs)("span", {
              children: ["\xd7", ND.outputAmount]
            })]
          }), !ND && (0, Ui.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: MD("buildAFactory2Game:benchTeachHint")
          }), (0, Ui.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Ui.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (bD = vD.inputSlots) && void 0 !== bD ? bD : []).map(((DD, CD) => {
                const cD = null === ND || void 0 === ND ? void 0 : ND.inputs[CD];
                return (0, Ui.jsxs)("div", {
                  className: np()("Baf2BenchInput", {
                    Spare: !cD
                  }),
                  children: [(0, Ui.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [yD(DD), cD && (0, Ui.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Ui.jsx)(qp.d, {
                        itemName: cD.item,
                        amount: 0
                      })
                    })]
                  }), (0, Ui.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: cD ? `\xd7${cD.amount}` : "\xa0"
                  })]
                }, DD)
              }))
            }), (0, Ui.jsx)(xb, {
              running: "running" === gD,
              opMs: vD.opMs,
              opLeftMs: null !== (QD = null === tD || void 0 === tD ? void 0 : tD.opLeftMs) && void 0 !== QD ? QD : null,
              updateCount: BD.updateCount
            }), (0, Ui.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Ui.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: MD("buildAFactory2Game:machineOutput")
              }), (0, Ui.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: vD.outputSlots.map((DD => (0, Ui.jsx)("div", {
                  children: yD(DD)
                }, DD)))
              })]
            })]
          }), null !== XD && (0, Ui.jsx)(zf, {
            stored: XD,
            cap: mD,
            rates: null !== (wD = null === tD || void 0 === tD ? void 0 : tD.powerRates) && void 0 !== wD ? wD : null
          }), null !== gD && (0, Ui.jsx)("div", {
            className: np()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== gD
            }),
            children: MD(mb(zb, gD, tD, !1))
          }), ND && ND.inputs.length > 1 && (0, Ui.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: MD("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Ui.jsx)(wf, {
            taught: oD,
            tier: ZD
          }), ND && (0, Ui.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: MD("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function lb(DD) {
      var CD;
      const cD = null !== (CD = zC[zb].inputSlots) && void 0 !== CD ? CD : [];
      return {
        render: CD => {
          let {
            si: cD,
            renderSlot: ID
          } = CD;
          return (0, Ui.jsx)(jb, {
            si: cD,
            store: DD,
            renderSlot: ID
          })
        },
        quickMoveRange: [Math.min(...cD), Math.max(...cD) + 1],
        className: Pb(zb)
      }
    }
    var Lb = cD(90),
      Tb = cD(1120),
      Gb = cD(4081);
    const Rb = 600,
      kb = .5,
      db = 4,
      Yb = 1200,
      Wb = 140,
      sb = 100,
      Eb = 32,
      eb = 16,
      ub = 100.5,
      hb = 90,
      rb = 1.5,
      Ab = 50;

    function Fb(DD) {
      switch (Kc(DD)) {
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
    const DQ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function CQ(DD) {
      const CD = Math.ceil(60 * DD / sb);
      return {
        fuel: Math.max(Eb, CD),
        waste: Math.max(eb, CD)
      }
    }

    function cQ(DD, CD, cD) {
      const [ID, pD, iD] = [DD - 2, CD - 2, cD - 2];
      return 2 * (ID * pD + pD * iD + iD * ID) * Wb
    }

    function IQ(DD, CD, cD) {
      return Math.max(0, DD - 2) * Math.max(0, CD - 2) * Math.max(0, cD - 2)
    }

    function pQ(DD, CD) {
      const [cD, ID, pD] = DD, iD = cD * ID * pD, fD = new Float32Array(iD);
      let bD = 0,
        QD = 0,
        wD = 0,
        SD = 0,
        BD = 0;
      const yD = (DD, iD, fD) => DD < 0 || DD >= cD || iD < 0 || iD >= ID || fD < 0 || fD >= pD ? 0 : CD[(iD * pD + fD) * cD + DD];
      for (let oD = 0; oD < ID; oD++)
        for (let DD = 0; DD < pD; DD++)
          for (let ID = 0; ID < cD; ID++) {
            const iD = (oD * pD + DD) * cD + ID,
              MD = CD[iD];
            if (1 === MD) {
              bD++;
              let CD = 0;
              for (const [cD, pD, iD] of DQ) {
                const fD = yD(ID + cD, oD + pD, DD + iD);
                1 !== fD && 2 !== fD || CD++
              }
              fD[iD] = Rb * (1 + kb * Math.min(CD, db)), SD += fD[iD]
            } else if (2 === MD) QD++;
            else if (3 === MD) {
              wD++;
              DQ.some((CD => {
                let [cD, pD, iD] = CD;
                return 1 === yD(ID + cD, oD + pD, DD + iD)
              })) && (BD += Yb)
            }
          }
      const MD = cQ(cD + 2, ID + 2, pD + 2),
        tD = Math.min(SD, BD, MD),
        ZD = bD > 0 ? SD * sb / bD : 0;
      return {
        rods: bD,
        graphite: QD,
        channels: wD,
        fuelHeat: SD,
        cooling: BD,
        size: MD,
        max: tD,
        vol: iD,
        powerPerUnit: ZD,
        pelletsPerMin: ZD > 0 ? tD / ZD * 60 : 0,
        waterPerS: tD * AD.n,
        rodHeat: fD
      }
    }
    const iQ = 0,
      fQ = 1,
      bQ = 6,
      QQ = 7,
      wQ = 8;

    function SQ(DD, CD) {
      const [cD, ID, pD] = DD, iD = new Uint8Array(cD * ID * pD), fD = (DD, iD, fD) => DD < 0 || DD >= cD || iD < 0 || iD >= ID || fD < 0 || fD >= pD ? 0 : CD[(iD * pD + fD) * cD + DD];
      for (let bD = 0; bD < ID; bD++)
        for (let DD = 0; DD < pD; DD++)
          for (let ID = 0; ID < cD; ID++) {
            const QD = (bD * pD + DD) * cD + ID,
              wD = CD[QD];
            if (1 === wD) {
              let CD = 0;
              for (const [cD, pD, iD] of DQ) {
                const QD = fD(ID + cD, bD + pD, DD + iD);
                CD += 1 === QD || 2 === QD ? 1 : 0
              }
              iD[QD] = fQ + Math.min(CD, db)
            } else if (3 === wD) {
              const CD = DQ.some((CD => {
                let [cD, pD, iD] = CD;
                return 1 === fD(ID + cD, bD + pD, DD + iD)
              }));
              iD[QD] = CD ? bQ : QQ
            } else 2 === wD && (iD[QD] = wQ)
          }
      return iD
    }

    function BQ(DD) {
      return DD.fuelHeat <= DD.cooling && DD.fuelHeat <= DD.size ? "fuel" : DD.cooling <= DD.size ? "cooling" : "size"
    }
    const yQ = hb;

    function MQ(DD, CD, cD) {
      return Math.round(DD * CD * cD * 25e3 * (1 + .25 * (Math.min(DD, CD, cD) - 2)))
    }

    function tQ(DD) {
      return Math.max(0, Math.min(AD.d, DD))
    }

    function ZQ(DD, CD, cD) {
      const ID = CD * tQ(cD);
      return DD <= 0 ? 0 : ID > 0 ? Math.min(200, 100 * DD / ID) : 200
    }

    function oQ(DD, CD) {
      const cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? rb : 1;
      return Math.min(DD.fuelHeat * cD, DD.cooling * tQ(CD), DD.size * cD)
    }

    function vQ(DD) {
      return 2 + DD / 10
    }
    const NQ = "buildAFactory2Game:";

    function gQ(DD) {
      var CD;
      return null !== (CD = DD.baf2RxMood) && void 0 !== CD ? CD : function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const cD = [
          ["calm", 50],
          ["warm", yQ],
          ["hot", ub]
        ];
        for (const [ID, pD] of cD)
          if (DD < pD + (ID === CD ? 3 : 0)) return ID;
        return "alarm"
      }(DD.baf2RxHeat)
    }
    const XQ = 120;

    function mQ(DD) {
      const CD = DD.baf2RxState;
      if ("running" === CD && DD.baf2RxHeat > ub) return {
        label: `${NQ}rxState_tooHot`,
        tone: "bad",
        fix: `${NQ}rxFix_tooHot`
      };
      switch (CD) {
        case "running":
          return {
            label: `${NQ}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${NQ}rxState_idle`, tone: "off", fix: `${NQ}rxFix_idle`
          };
        case "scram":
          return {
            label: `${NQ}rxState_scram`, tone: "off", fix: DD.baf2RxHeat < Ab ? `${NQ}rxFix_scramCool` : `${NQ}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${NQ}rxState_${CD}`, tone: "off", fix: `${NQ}rxFix_${CD}`
          };
        case "melted":
          return {
            label: `${NQ}rxState_melted`, tone: "bad", fix: `${NQ}rxFix_melted`
          };
        default:
          return {
            label: `${NQ}rxState_${CD}`, tone: "warn", fix: `${NQ}rxFix_${CD}`
          }
      }
    }

    function nQ(DD) {
      const [CD, cD, ID] = DD.baf2RxStats;
      return {
        fuelHeat: CD,
        cooling: cD * (DD.baf2RxCryo ? Math.max(1, tQ(DD.baf2RxWater / 100)) : 1),
        size: ID
      }
    }

    function OQ(DD) {
      var CD;
      const cD = "idle" === DD.baf2RxState || "running" === DD.baf2RxState && DD.baf2RxHeat <= ub || "scram" === DD.baf2RxState && DD.baf2RxHeat < Ab;
      if (0 === (DD.baf2RxFlags & XC) || !DD.baf2RxFormed || !cD) return null;
      const {
        fuelHeat: ID,
        cooling: pD,
        size: iD
      } = nQ(DD), fD = Math.min(ID, pD, iD), bD = BQ({
        fuelHeat: ID,
        cooling: pD,
        size: iD
      }), QD = "cooling" === bD && !0 === DD.baf2RxCryoOpen && !DD.baf2RxCryo, wD = null !== (CD = DD.baf2RxCells) && void 0 !== CD ? CD : "", SD = ("fuel" === bD || "cooling" === bD && !0 === DD.baf2RxCryo) && wD.length > 0 && !wD.includes(String(0)), BD = QD ? "Cryo" : "scram" === DD.baf2RxState ? "Off" : "";
      return fD < 12e3 ? {
        key: `${NQ}rxGrow_${SD?"full":bD}${BD}`,
        amount: fD
      } : null
    }

    function PQ(DD, CD) {
      return DD[0] === CD[0] && DD[1] === CD[1] && DD[2] === CD[2]
    }

    function HQ(DD) {
      return [...DD].sort(((DD, CD) => Number(CD[2] < CD[1]) - Number(DD[2] < DD[1])))
    }

    function UQ(DD, CD) {
      return CD.some((CD => {
        let [cD, ID] = CD;
        return !(ID <= 0) && ["edge", "cap", "wall", "inside"].some((CD => cD === iI(DD, CD)))
      }))
    }

    function xQ(DD, CD, cD) {
      const ID = DD.baf2RxFuel - DD.baf2RxPu > 0 ? cD : 0;
      return {
        full: DD.baf2RxWaste > CD - 3,
        fullInS: ID > 0 ? Math.max(0, CD - DD.baf2RxWaste) / ID : null
      }
    }
    const qQ = {
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

    function JQ(DD) {
      return KQ[DD]
    }
    const KQ = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function aQ(DD) {
      let [CD, cD, ID] = DD;
      return Math.ceil(cQ(CD, cD, ID) * AD.n)
    }

    function VQ(DD, CD) {
      return "battery" === DD ? CD[0] * CD[1] * CD[2] : function(DD) {
        let [CD, cD, ID] = DD;
        return CD * cD * ID - Math.max(0, CD - 2) * Math.max(0, cD - 2) * Math.max(0, ID - 2)
      }(CD) - 1
    }

    function zQ(DD) {
      const CD = Math.max(0, DD);
      if (CD < 10) return String(Math.round(10 * CD) / 10);
      if (CD < 1e4) return Math.round(CD).toLocaleString("en-US");
      if (CD < 1e6) return `${CD<1e5?(Math.floor(CD/100)/10).toFixed(1):Math.floor(CD/1e3)}k`;
      const cD = CD / 1e6;
      return `${cD<10?(Math.floor(100*cD)/100).toFixed(2):cD<100?(Math.floor(10*cD)/10).toFixed(1):Math.floor(cD)}M`
    }

    function jQ(DD) {
      return DD <= 0 ? "0" : DD >= 10 ? String(Math.round(DD)) : DD.toFixed(DD >= 1 ? 1 : 2)
    }

    function lQ(DD) {
      const CD = Ac(DD, 0),
        cD = Ac(DD, ec(DD) - 1);
      return {
        lo: [Math.min(CD[0], cD[0]), Math.min(CD[1], cD[1]), Math.min(CD[2], cD[2])],
        hi: [Math.max(CD[0], cD[0]) + 1, Math.max(CD[1], cD[1]) + 1, Math.max(CD[2], cD[2]) + 1]
      }
    }

    function LQ(DD, CD, cD) {
      const ID = [CD[0] - DD[0], CD[1] - DD[1], CD[2] - DD[2]],
        pD = [(DD[0] + CD[0]) / 2, (DD[1] + CD[1]) / 2, (DD[2] + CD[2]) / 2],
        iD = [];
      for (let fD = 0; fD < 3; fD++) {
        const bD = (fD + 1) % 3,
          QD = (fD + 2) % 3;
        for (const wD of [DD[bD], CD[bD]])
          for (const SD of [DD[QD], CD[QD]]) {
            const DD = [0, 0, 0],
              CD = [cD, cD, cD];
            DD[fD] = pD[fD], CD[fD] = ID[fD] + cD, DD[bD] = wD, DD[QD] = SD, iD.push([DD, CD])
          }
      }
      return iD
    }
    const TQ = "buildAFactory2Game:",
      GQ = [`${TQ}colNorth`, `${TQ}colEast`, `${TQ}colSouth`, `${TQ}colWest`];

    function RQ(DD, CD) {
      const [cD, ID, pD] = DD.baf2ColAt;
      return `baf2col ${cD} ${ID} ${pD} ${CD}`
    }

    function kQ(DD) {
      return function(DD) {
        if (!Number.isFinite(DD)) return "";
        const CD = Math.max(1, Math.round(DD));
        if (CD < 60) return `${CD}s`;
        const cD = CD % 60;
        return 0 === cD ? CD / 60 + "m" : `${Math.floor(CD/60)}m ${cD}s`
      }(function(DD) {
        const CD = fI.FOCUS_BY_LASERS[Math.max(0, Math.min(4, DD))];
        return CD > 0 ? fI.NOVA_FOCUS / CD : 1 / 0
      }(DD))
    }

    function dQ(DD) {
      const CD = Math.abs(Math.round(DD));
      return CD < 1e3 ? Math.round(DD).toLocaleString("en-US") : CD < 1e6 ? `${CD<1e5?(DD/1e3).toFixed(1).replace(/\.0$/,""):Math.round(DD/1e3)}k` : `${(DD/1e6).toFixed(CD<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function YQ(DD, CD, cD) {
      if (yI(CD) >= 0) {
        const CD = function(DD, CD) {
          return DD.find((DD => {
            let {
              focus: cD
            } = DD;
            return cD[0] === CD[0] && cD[2] === CD[2] && (CD[1] === cD[1] || CD[1] === cD[1] - 1)
          }))
        }(DD, cD);
        if (!CD) return null;
        const pD = function(DD) {
          let CD = 0,
            cD = 0;
          for (let ID = 0; ID < 4; ID++) CD += DD.laser[ID] ? 1 : 0, cD += DD.live[ID] ? 1 : 0;
          return {
            lasers: CD,
            live: cD,
            focusPerS: fI.FOCUS_BY_LASERS[cD],
            drawPerS: fI.LASER_DRAW * cD
          }
        }({
          laser: CD.lasers,
          live: CD.live
        });
        if (0 === pD.lasers || "noLasers" === CD.state) return {
          key: `${TQ}lookColNoLasers`
        };
        if (0 === pD.live) return {
          key: `${TQ}lookColOff_blocked`
        };
        if (!(CD.on && pD.live > 0) && ("running" !== (ID = CD.state) && "slowed" !== ID)) return {
          key: `${TQ}lookColOff_${CD.state}`
        };
        if (pD.live < pD.lasers) return {
          key: `${TQ}lookColLasersSome`,
          params: {
            lasers: String(pD.lasers),
            live: String(pD.live)
          }
        };
        const iD = CD.open.filter(Boolean).length;
        return iD < 4 ? {
          key: `${TQ}lookColLasersSpots`,
          params: {
            live: String(pD.live),
            spots: String(iD),
            time: kQ(pD.live)
          }
        } : {
          key: `${TQ}lookColLasers`,
          params: {
            live: String(pD.live),
            time: kQ(pD.live)
          }
        }
      }
      var ID;
      if (!MI(CD)) return null;
      const pD = function(DD, CD) {
        for (const cD of DD) {
          const DD = vI(cD.focus, [CD[0], CD[1], CD[2]]);
          if (DD && DD.yb === fI.LASER_D && cD.lasers[DD.dir]) return {
            entry: cD,
            dir: DD.dir
          }
        }
        return null
      }(DD, cD);
      if (!pD) return {
        key: `${TQ}lookLaserNoCollider`
      };
      const {
        entry: iD,
        dir: fD
      } = pD;
      return iD.open[fD] ? iD.live[fD] ? {
        key: iD.on ? `${TQ}lookLaserFiring` : `${TQ}lookLaserReady`
      } : {
        key: `${TQ}lookLaserBlocked`
      } : {
        key: `${TQ}lookLaserClosed`
      }
    }

    function WQ(DD, CD) {
      const cD = [];
      for (let ID = 1; ID < fI.LASER_D; ID++) DD & 1 << CD * (fI.LASER_D - 1) + ID - 1 && cD.push(ID);
      return cD
    }
    const sQ = {
      firing: `${TQ}colSlotFiring`,
      ready: `${TQ}colSlotReady`,
      blocked: `${TQ}colSlotBlocked`,
      empty: `${TQ}colSlotEmpty`,
      closed: `${TQ}colSlotClosed`
    };

    function EQ(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const iD = ip(DD),
        fD = ip(CD),
        bD = ip(cD),
        QD = bD.filter(Boolean).length,
        wD = iD.filter(Boolean).length,
        SD = [0, 1, 2, 3].map((DD => fD[DD] ? iD[DD] ? bD[DD] ? ID ? "firing" : "ready" : "blocked" : (DD => WQ(pD, DD).length > 0)(DD) ? "blocked" : "empty" : "closed")),
        BD = SD.indexOf("blocked"),
        yD = BD < 0 && wD > 0 ? SD.indexOf("empty") : -1;
      return SD.map(((DD, CD) => {
        const cD = CD === BD ? {
          key: `${TQ}colSlotClear`
        } : CD === yD ? {
          key: `${TQ}colSlotAdd`,
          params: {
            time: kQ(Math.min(4, QD + 1))
          }
        } : null;
        return {
          dir: CD,
          tone: DD,
          title: {
            key: "blocked" !== DD || iD[CD] ? sQ[DD] : `${TQ}colSlotGap`,
            keys: {
              dir: GQ[CD]
            }
          },
          hint: cD
        }
      }))
    }

    function eQ(DD) {
      var CD;
      return "noPower" === DD.baf2ColState && DD.baf2ColRxState ? mQ({
        baf2RxState: DD.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (CD = DD.baf2ColRxHeat) && void 0 !== CD ? CD : 0
      }) : null
    }

    function uQ(DD) {
      const CD = ip(DD.baf2ColSpots).filter(Boolean).length,
        cD = ip(DD.baf2ColLive);
      let ID = 0,
        pD = 0;
      return ip(DD.baf2ColLasers).forEach(((DD, CD) => {
        DD && (ID++, pD += cD[CD] ? 0 : 1)
      })), pD > 0 ? {
        key: `${TQ}colSubSome`,
        params: {
          blocked: String(pD),
          lasers: String(ID)
        }
      } : CD < 4 ? {
        key: `${TQ}colSubSpots`,
        params: {
          lasers: String(ID),
          spots: String(CD)
        }
      } : {
        key: `${TQ}colSub`,
        params: {
          lasers: String(ID)
        }
      }
    }

    function hQ(DD) {
      const CD = eQ(DD);
      if ("idle" === DD.baf2ColRxState && CD) return {
        key: `${TQ}colState_noPowerIdle`
      };
      if (CD) return {
        key: `${TQ}colState_noPowerReactor`,
        keys: {
          state: CD.label
        }
      };
      if ("noInput" !== DD.baf2ColState) return {
        key: `${TQ}colState_${DD.baf2ColState}`
      };
      const cD = String(Math.max(0, fI.NOVA_SA - DD.baf2ColSa)),
        ID = String(Math.max(0, fI.NOVA_GD - DD.baf2ColGd));
      return "0" !== cD && "0" !== ID ? {
        key: `${TQ}colState_noInput`,
        params: {
          sa: cD,
          gd: ID
        }
      } : "0" !== cD ? {
        key: `${TQ}colState_noStarAlloy`,
        params: {
          sa: cD
        }
      } : "0" !== ID ? {
        key: `${TQ}colState_noGlowDust`,
        params: {
          gd: ID
        }
      } : {
        key: `${TQ}colState_running`
      }
    }

    function rQ(DD) {
      return DD.baf2ColP < 0 ? `${TQ}colNext` : function(DD) {
        const CD = DD.baf2ColState;
        return DD.baf2ColP >= 0 && ("blocked" === CD || "noLasers" === CD || "noPower" === CD)
      }(DD) ? `${TQ}colStalled` : null === AQ(DD) ? `${TQ}colMaking` : `${TQ}colNovaIn`
    }

    function AQ(DD) {
      if (DD.baf2ColP < 0 || DD.baf2ColWant <= 0) return null;
      const CD = DD.baf2ColFocusPerS * Math.min(1, DD.baf2ColDraw / DD.baf2ColWant);
      return CD > 0 ? Math.max(0, fI.NOVA_FOCUS - DD.baf2ColP) / CD : null
    }

    function FQ(DD, CD) {
      const cD = [];
      for (let ID = 1; ID <= 3; ID++) {
        const pD = [DD[0], DD[1] - ID, DD[2]];
        if (!CD(pD)) return cD;
        cD.push(pD)
      }
      return []
    }

    function Dw(DD, CD) {
      const cD = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let ID = 0; ID < 4; ID++) {
        const pD = ID,
          iD = oI(DD.focus, pD, fI.LASER_D);
        if (DD.lasers[ID] || !DD.open[ID] || !CD(iD)) continue;
        const fD = [];
        for (let cD = 1; cD < fI.LASER_D; cD++) {
          const ID = oI(DD.focus, pD, cD);
          CD(ID) || fD.push(ID)
        }
        cD.supports.push(...FQ(iD, CD)), 0 === fD.length ? cD.free.push(iD) : (cD.blocked.push(iD), cD.gaps.push(...fD))
      }
      return cD
    }
    const Cw = fI.LASER_D - .25,
      Iw = 4,
      pw = 2,
      iw = 16;
    const fw = {
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
        blendMode: Gb.c.Standard,
        soft: !0
      },
      bw = {
        green: fw,
        pink: {
          ...fw,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Qw(DD, CD) {
      const cD = {
        ...CD.params
      };
      for (const [pD, iD] of Object.entries(null !== (ID = CD.keys) && void 0 !== ID ? ID : {})) {
        var ID;
        cD[pD] = DD(iD)
      }
      return cD
    }
    const ww = "buildAFactory2Game:",
      Sw = 2 * fI.LASER_D + 1,
      Bw = fI.LASER_D;

    function yw(DD) {
      return DD(`${ww}colFocusTip`, {
        need: dQ(fI.NOVA_FOCUS)
      })
    }

    function Mw(DD, CD) {
      return DD(CD.key, Qw(DD, CD))
    }

    function tw(DD) {
      const CD = DD.getStatus();
      return {
        status: CD,
        entry: CD ? DD.entryAtRoot(CD.baf2ColAt) : void 0
      }
    }

    function Zw(DD, CD) {
      return {
        left: 100 * (Bw + DD) / Sw + "%",
        top: 100 * (Bw + CD) / Sw + "%"
      }
    }

    function ow(DD) {
      let {
        status: CD,
        entry: cD
      } = DD;
      const ID = ip(CD.baf2ColLasers),
        pD = ip(CD.baf2ColSpots),
        iD = ip(CD.baf2ColLive),
        fD = !0 === (null === cD || void 0 === cD ? void 0 : cD.on),
        bD = fI.LASER_D,
        QD = [];
      for (let MD = 0; MD < 4; MD++) {
        const [DD, , CD] = ZI[MD];
        if (iD[MD]) {
          const cD = 100 * (bD - 1) / Sw,
            ID = DD + CD > 0 ? 100 * (Bw + 1) / Sw : 100 * (Bw - (bD - 1)) / Sw,
            pD = 100 * (Bw + .35) / Sw,
            iD = 30 / Sw,
            wD = 0 !== DD ? {
              left: `${ID}%`,
              width: `${cD}%`,
              top: `${pD}%`,
              height: `${iD}%`
            } : {
              top: `${ID}%`,
              height: `${cD}%`,
              left: `${pD}%`,
              width: `${iD}%`
            };
          QD.push((0, Ui.jsx)("i", {
            className: np()("Baf2ColDiagramBeam", {
              Off: !fD
            }),
            style: wD
          }, `beam${MD}`))
        }
        const cD = ID[MD] ? "Baf2ColDiagramLaser" : pD[MD] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        QD.push((0, Ui.jsx)("i", {
          className: cD,
          style: Zw(DD * bD, CD * bD)
        }, `spot${MD}`))
      }
      for (let MD = 0; MD < 4; MD++) {
        if (ID[MD] || !pD[MD]) continue;
        const [DD, , cD] = ZI[MD];
        for (const ID of WQ(null !== (wD = CD.baf2ColGaps) && void 0 !== wD ? wD : 0, MD)) {
          var wD;
          QD.push((0, Ui.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Zw(DD * ID, cD * ID)
          }, `gap${MD},${ID}`))
        }
      }
      for (const [MD, , tD] of null !== (SD = null === cD || void 0 === cD ? void 0 : cD.blockers) && void 0 !== SD ? SD : []) {
        var SD, BD, yD;
        const DD = MD - (null !== (BD = null === cD || void 0 === cD ? void 0 : cD.focus[0]) && void 0 !== BD ? BD : 0),
          CD = tD - (null !== (yD = null === cD || void 0 === cD ? void 0 : cD.focus[2]) && void 0 !== yD ? yD : 0);
        QD.push((0, Ui.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Zw(DD, CD)
        }, `block${DD},${CD}`))
      }
      return (0, Ui.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [QD, (0, Ui.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function vw(DD) {
      let {
        status: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), ID = ip(CD.baf2ColLive).filter(Boolean).length;
      return (0, Ui.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: yw(cD),
          children: cD(`${ww}colLadder`)
        }), (0, Ui.jsx)("ul", {
          children: [1, 2, 3, 4].map((DD => (0, Ui.jsx)("li", {
            className: np()({
              On: DD === ID
            }),
            children: cD(`${ww}colLadderChip`, {
              lasers: String(DD),
              time: kQ(DD)
            })
          }, DD)))
        })]
      })
    }

    function Nw(DD) {
      let {
        item: CD,
        Lb: cD,
        need: ID,
        cap: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)(), fD = Math.min(cD, ID);
      return (0, Ui.jsxs)("li", {
        className: np()("Baf2ColTile", {
          Short: cD < ID
        }),
        children: [(0, Ui.jsx)(gw, {
          item: CD
        }), (0, Ui.jsx)("b", {
          className: "Baf2ColTileValue",
          children: iD(`${ww}colOutOf`, {
            amount: String(fD),
            cap: String(ID)
          })
        }), (0, Ui.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Ui.jsx)("i", {
            style: {
              width: 100 * fD / ID + "%"
            }
          })
        }), cD > ID && (0, Ui.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: iD(`${ww}colIntakeHeld`, {
            amount: String(cD),
            cap: String(pD)
          })
        })]
      })
    }

    function gw(DD) {
      let {
        item: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)();
      return (0, Ui.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: CD,
            amount: 0
          })
        }), (0, Ui.jsx)("span", {
          className: "Baf2ColTileName",
          children: ii(cD, CD)
        })]
      })
    }

    function Xw(DD) {
      switch (DD.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function mw(DD) {
      var CD, cD, pD;
      let {
        store: iD,
        close: fD
      } = DD;
      const {
        t: bD
      } = (0, Up.F)(), QD = sf(), {
        status: wD,
        entry: SD
      } = function(DD) {
        const [CD, cD] = (0, ID.useState)((() => tw(DD)));
        return (0, ID.useEffect)((() => (cD(tw(DD)), DD.subscribe((() => {
          cD(tw(DD))
        })))), [DD]), CD
      }(iD), [BD, yD] = (0, ID.useState)(null), MD = null === wD || void 0 === wD ? void 0 : wD.baf2ColHold;
      (0, ID.useEffect)((() => {
        yD(null)
      }), [MD]);
      const tD = (0, ID.useRef)({
          p: -1,
          n: 0
        }),
        ZD = null !== (CD = null === wD || void 0 === wD ? void 0 : wD.baf2ColP) && void 0 !== CD ? CD : -1;
      ZD < tD.current.p && tD.current.n++, tD.current.p = ZD;
      const oD = (0, ID.useRef)(null),
        [vD] = (0, ID.useState)((() => {
          return (DD = iD.heldAtOpen()) === wI || DD === SI ? {
            key: `${TQ}colBeltItIn`,
            item: DD
          } : null;
          var DD
        }));
      if (!wD) return null;
      const ND = wD.baf2ColMember,
        gD = wD.baf2ColP >= 0,
        XD = function(DD, CD) {
          if (DD.baf2ColP >= 0 && DD.baf2ColDraw > 0) {
            const CD = DD.baf2ColWant > 0 ? Math.min(1, DD.baf2ColDraw / DD.baf2ColWant) : 0;
            return {
              focus: DD.baf2ColFocusPerS * CD,
              draw: DD.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === DD.baf2ColState && CD && CD.draw > 0 ? {
            ...CD,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(wD, oD.current);
      oD.current = XD.draw > 0 ? XD : null;
      const mD = "slowed" === wD.baf2ColState || "noPower" === wD.baf2ColState,
        nD = AQ(wD),
        OD = null !== BD && void 0 !== BD ? BD : wD.baf2ColHold,
        PD = function(DD) {
          var CD, cD;
          return "idle" === DD.baf2ColRxState ? null : null !== (CD = null === (cD = eQ(DD)) || void 0 === cD ? void 0 : cD.fix) && void 0 !== CD ? CD : null
        }(wD),
        HD = null === PD && null === vD ? function(DD) {
          var CD;
          const cD = DD.baf2ColSentTo;
          if (!cD) return null;
          const ID = null !== (CD = DD.baf2ColSentHeld) && void 0 !== CD ? CD : null;
          return {
            key: null === ID ? `${TQ}colNovaSentToMachine` : `${TQ}colNovaSentTo`,
            target: cD,
            Lb: ID
          }
        }(wD) : null,
        UD = gD ? bD(`${ww}colFocusOf`, {
          focus: dQ(wD.baf2ColP),
          need: dQ(fI.NOVA_FOCUS)
        }) : null;
      return (0, Ui.jsx)(Hf.e, {
        close: fD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Ui.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ui.jsx)(qp.d, {
                  itemName: bI,
                  amount: 0
                })
              }), (0, Ui.jsxs)("div", {
                children: [(0, Ui.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: ii(bD, bI)
                }), (0, Ui.jsx)("p", {
                  children: Mw(bD, uQ(wD))
                })]
              })]
            }), (0, Ui.jsx)(Uf.l, {
              onClick: fD
            })]
          }), (0, Ui.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Ui.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Ui.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Ui.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: bD(rQ(wD), {
                    time: null === nD ? "" : ni(bD, nD)
                  })
                }), (0, Ui.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Ui.jsx)("i", {
                    style: {
                      width: (gD ? 100 * wD.baf2ColP / fI.NOVA_FOCUS : 0) + "%"
                    }
                  }, tD.current.n)
                }), (0, Ui.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Ui.jsxs)("span", {
                    title: yw(bD),
                    children: [(0, Ui.jsx)("b", {
                      children: dQ(XD.focus)
                    }), " ", bD(`${ww}colFocusPerS`)]
                  }), (0, Ui.jsxs)("span", {
                    className: np()("Baf2ColDraw", {
                      Short: mD
                    }),
                    children: [(0, Ui.jsx)(xp.c, {
                      name: "bolt"
                    }), mD ? bD(`${ww}colDrawOf`, {
                      draw: dQ(wD.baf2ColDraw),
                      want: dQ(wD.baf2ColWant)
                    }) : bD(`${ww}colPowerPerS`, {
                      rate: dQ(XD.draw)
                    })]
                  }), null !== UD && (0, Ui.jsx)("span", {
                    className: "Soft",
                    children: UD
                  })]
                })]
              }), (0, Ui.jsx)("p", {
                className: np()("Baf2ColState", Xw(wD)),
                children: Mw(bD, hQ(wD))
              }), null !== PD && (0, Ui.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bD(PD)
              }), null === PD && null !== vD && (0, Ui.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bD(vD.key, {
                  item: ii(bD, vD.item)
                })
              }), HD && (0, Ui.jsx)("p", {
                className: "Baf2ColStateFix",
                children: bD(HD.key, {
                  target: ii(bD, HD.target),
                  amount: String(null !== (cD = HD.Lb) && void 0 !== cD ? cD : 0)
                })
              }), (0, Ui.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Ui.jsx)(Nw, {
                  item: wI,
                  Lb: wD.baf2ColSa,
                  need: fI.NOVA_SA,
                  cap: fI.SA_CAP
                }), (0, Ui.jsx)(Nw, {
                  item: SI,
                  Lb: wD.baf2ColGd,
                  need: fI.NOVA_GD,
                  cap: fI.GD_CAP
                }), (0, Ui.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Ui.jsx)(gw, {
                    item: "Nova Matter"
                  }), (0, Ui.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: bD(`${ww}colNovaHeld`, {
                      amount: String(wD.baf2ColOut),
                      cap: String(fI.OUT_CAP)
                    })
                  }), ND && (0, Ui.jsx)(Uf.o, {
                    className: "Baf2ColTake",
                    disabled: 0 === wD.baf2ColOut,
                    onClick: () => {
                      QD.send(RQ(wD, "take"))
                    },
                    children: bD(`${ww}colTake`)
                  })]
                })]
              }), ND && (0, Ui.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": OD,
                className: np()("Baf2ColHold", {
                  On: OD
                }),
                onClick: DD => {
                  DD.detail > 0 && DD.currentTarget.blur(), yD(!OD), QD.send(RQ(wD, "hold " + (OD ? 0 : 1)))
                },
                children: [(0, Ui.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Ui.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Ui.jsx)("b", {
                    children: bD(`${ww}colHold`)
                  }), (0, Ui.jsx)("span", {
                    children: bD(`${ww}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Ui.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Ui.jsx)(ow, {
                status: wD,
                entry: SD
              }), (0, Ui.jsx)("ul", {
                className: "Baf2ColSlots",
                children: EQ(wD.baf2ColLasers, wD.baf2ColSpots, wD.baf2ColLive, XD.beamsOn, null !== (pD = wD.baf2ColGaps) && void 0 !== pD ? pD : 0).map((DD => (0, Ui.jsxs)("li", {
                  className: DD.tone,
                  children: [(0, Ui.jsx)("b", {
                    children: Mw(bD, DD.title)
                  }), null !== DD.hint && (0, Ui.jsx)("span", {
                    children: Mw(bD, DD.hint)
                  })]
                }, DD.dir)))
              }), (0, Ui.jsx)(vw, {
                status: wD
              })]
            })]
          })]
        })
      })
    }
    const nw = "buildAFactory2Game:",
      Ow = 36e5,
      Pw = 864e5;

    function Hw(DD, CD, cD) {
      return Math.max(0, Math.ceil((DD + CD - Math.max(cD, DD)) / 1e3))
    }

    function Uw(DD) {
      return DD.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function xw(DD) {
      return "Homestead" === DD
    }

    function qw(DD) {
      return function(DD) {
        let CD = 0;
        for (const cD of DD) {
          const DD = /^Island ([1-9]\d{0,5})$/.exec(cD);
          DD && (CD = Math.max(CD, Number(DD[1])))
        }
        return `Island ${CD+1}`
      }(DD.map((DD => DD.baf2IslandName)))
    }

    function Jw(DD, CD) {
      return function(DD) {
        return `${nw}islandsBlocked${DD[0].toUpperCase()}${DD.slice(1)}`
      }("degraded" === DD && 0 === CD ? "stuck" : DD)
    }

    function Kw(DD) {
      return DD.filter((DD => {
        var CD;
        return !DD.baf2IslandActive && void 0 === DD.baf2IslandUnreadable && void 0 === (null === (CD = DD.baf2IslandCoop) || void 0 === CD ? void 0 : CD.baf2CoopState)
      })).length
    }

    function aw(DD) {
      return "coopMoving" === DD || "coopUnreachable" === DD
    }

    function Vw(DD, CD) {
      const cD = CD > 0;
      return {
        change: null === DD && !cD,
        switch: (null === DD || "degraded" === DD || aw(DD)) && !cD,
        rename: "loading" !== DD && "degraded" !== DD && "stuck" !== DD
      }
    }

    function zw(DD, CD) {
      return void 0 === DD || "corrupt" === DD && CD
    }
    const jw = Tf;

    function lw(DD, CD, cD) {
      if (null !== DD && void 0 !== DD && DD.untilGone) {
        var ID;
        return !("dismiss" === DD.untilGone && void 0 === (null === (ID = CD.baf2IslandCoop) || void 0 === ID ? void 0 : ID.baf2CoopState)) && cD - DD.atMs < 32500
      }
      return void 0 !== DD && cD - DD.atMs < jw && CD.baf2IslandName === DD.from
    }
    const Lw = Tf;

    function Tw(DD) {
      return "core" === (null === DD || void 0 === DD ? void 0 : DD.kind) ? DD.core : "islands" === (null === DD || void 0 === DD ? void 0 : DD.kind) ? DD.backToCore : void 0
    }

    function Gw(DD) {
      return `\0${DD}\0`
    }

    function Rw(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ID = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const iD of Object.keys(cD)) ID[iD] = Gw(iD);
      let pD = Object.keys(ID).length > 0 ? DD(CD, ID) : DD(CD);
      for (const [iD, fD] of Object.entries(cD)) pD = pD.split(Gw(iD)).join(fD);
      return pD
    }

    function kw(DD, CD) {
      return DD ? CD ? "enabled" : "disabled" : "hidden"
    }
    const dw = {
      removed: `${nw}islandsCoopRemoved`,
      deleted: `${nw}islandsCoopDeleted`,
      notReady: `${nw}islandsCoopNotReady`,
      gone: `${nw}islandsCoopGone`
    };

    function Yw(DD) {
      var CD;
      return "member" !== (null === (CD = DD.baf2IslandCoop) || void 0 === CD ? void 0 : CD.baf2CoopRole) && "newer" !== DD.baf2IslandUnreadable
    }

    function Ww(DD, CD, cD, ID, pD, iD) {
      const fD = DD.baf2IslandActive,
        bD = DD.baf2IslandUnreadable,
        QD = DD.baf2IslandCoop,
        wD = function(DD, CD, cD) {
          return {
            switch: DD.switch && void 0 === CD,
            delete: DD.change && zw(CD, cD)
          }
        }(CD, bD, ID),
        SD = fD && void 0 !== QD && void 0 === QD.baf2CoopState && "coopUnreachable" === iD,
        BD = {
          switch: kw((!fD || SD) && void 0 === bD, SD || wD.switch),
          switchLabel: SD ? "tryAgain" : "switch",
          rename: kw(!0, CD.rename),
          delete: kw(!fD, wD.delete),
          deleteWaits: !fD && zw(bD, ID),
          people: kw(void 0 !== DD.baf2IslandInvitable || pD && fD && void 0 === bD && void 0 === QD, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        yD = !fD && wD.delete;
      if (void 0 === QD) return cD ? {
        ...BD,
        delete: kw(!fD, !1),
        deleteWaits: !1,
        note: yD ? {
          key: `${nw}islandsCoopKeepOwn`
        } : null
      } : BD;
      const MD = QD.baf2CoopState,
        tD = QD.baf2CoopMembers.length > 1,
        ZD = {
          ...BD,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== MD && "member" === QD.baf2CoopRole) return {
        ...ZD,
        dismiss: kw(!0, CD.rename),
        note: {
          key: dw[MD],
          names: {
            owner: QD.baf2CoopOwner
          }
        }
      };
      if (void 0 !== MD) {
        let DD = {
          key: `${nw}islandsCoopOwnLost`
        };
        return yD && tD ? DD = {
          key: `${nw}islandsCoopDeleteMembers`
        } : yD && cD && (DD = {
          key: `${nw}islandsCoopKeepOwn`
        }), {
          ...ZD,
          delete: kw(!fD, wD.delete && !tD && !cD),
          deleteWaits: BD.deleteWaits && !tD && !cD,
          note: DD
        }
      }
      if ("member" === QD.baf2CoopRole) return {
        ...BD,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: kw(!0, fD ? CD.switch : CD.rename)
      };
      const oD = QD.baf2CoopManageHere;
      let vD = null;
      var ND;
      oD || fD ? yD && tD ? vD = {
        key: `${nw}islandsCoopDeleteMembers`
      } : yD && cD && (vD = {
        key: `${nw}islandsCoopKeepOwn`
      }) : vD = {
        key: null !== (ND = QD.baf2CoopLeft) && void 0 !== ND && ND.length ? `${nw}islandsCoopManageThereClaim` : `${nw}islandsCoopManageThere`
      };
      return {
        ...BD,
        rename: kw(!0, CD.rename && oD),
        delete: kw(!fD, wD.delete && !tD && !cD),
        deleteWaits: BD.deleteWaits && !tD && !cD,
        people: "enabled",
        peopleLabel: "players",
        unshare: kw(oD && fD && !tD, CD.change),
        remove: oD,
        note: vD
      }
    }

    function sw(DD) {
      var CD;
      const cD = DD.baf2IslandCoop;
      if ("owner" !== (null === cD || void 0 === cD ? void 0 : cD.baf2CoopRole) || void 0 !== cD.baf2CoopState || null === (CD = cD.baf2CoopLeft) || void 0 === CD || !CD.length) return null;
      const ID = DD.baf2IslandActive && cD.baf2CoopManageHere;
      return {
        left: cD.baf2CoopLeft,
        claim: ID,
        goThere: !ID && cD.baf2CoopManageHere
      }
    }

    function Ew(DD) {
      return DD.baf2CoopMembers.length >= DD.baf2CoopMax
    }

    function ew(DD, CD, cD) {
      return void 0 !== DD && CD < DD.answer && cD - DD.atMs < jw
    }
    const uw = "buildAFactory2Game:";

    function hw(DD, CD) {
      return {
        onKeyDown: cD => {
          cD.stopPropagation(), cD.nativeEvent.isComposing || 229 === cD.nativeEvent.keyCode || ("Enter" === cD.key ? (cD.preventDefault(), DD()) : "Escape" === cD.key && (cD.preventDefault(), CD()))
        }
      }
    }

    function rw(DD) {
      return {
        onKeyDown: CD => {
          "Escape" !== CD.key || CD.nativeEvent.isComposing || (CD.preventDefault(), CD.stopPropagation(), DD())
        }
      }
    }

    function Aw(DD) {
      DD.currentTarget.select()
    }

    function Fw(DD, CD) {
      (0, ID.useEffect)((() => {
        var cD;
        DD && (null === (cD = CD.current) || void 0 === cD || cD.scrollIntoView({
          block: "nearest"
        }))
      }), [DD, CD])
    }

    function DS(DD) {
      const [CD, cD] = (0, ID.useState)(null);
      return (0, ID.useEffect)((() => {
        const CD = document.querySelector(".UiRequests"),
          ID = DD.current;
        if (!CD || !ID || "undefined" === typeof ResizeObserver) return;
        const pD = () => {
          const DD = CD.getBoundingClientRect(),
            pD = ID.getBoundingClientRect(),
            iD = ID.parentElement,
            fD = iD && parseFloat(getComputedStyle(iD).paddingTop) || 0,
            bD = function(DD, CD, cD, ID) {
              if (!DD || DD.height <= 0 || DD.right <= CD.left || DD.left >= CD.right) return null;
              const pD = Math.max(ID, DD.bottom + 8);
              return {
                marginTop: Math.round(pD - ID),
                maxHeight: Math.max(0, Math.floor(cD - pD - ID))
              }
            }(DD, pD, window.innerHeight, fD);
          cD((DD => (null === DD || void 0 === DD ? void 0 : DD.marginTop) === (null === bD || void 0 === bD ? void 0 : bD.marginTop) && (null === DD || void 0 === DD ? void 0 : DD.maxHeight) === (null === bD || void 0 === bD ? void 0 : bD.maxHeight) ? DD : bD))
        };
        pD();
        const iD = new ResizeObserver(pD);
        return iD.observe(CD), window.addEventListener("resize", pD), () => {
          iD.disconnect(), window.removeEventListener("resize", pD)
        }
      }), [DD]), CD
    }

    function CS(DD) {
      (0, ID.useEffect)((() => {
        var CD;
        null === (CD = DD.current) || void 0 === CD || CD.focus()
      }), [DD])
    }

    function cS(DD) {
      const [CD, cD] = (0, ID.useState)(Date.now);
      return (0, ID.useEffect)((() => {
        const CD = window.setInterval((() => {
          cD(Date.now())
        }), DD);
        return () => {
          window.clearInterval(CD)
        }
      }), [DD]), CD
    }

    function IS(DD) {
      let {
        tier: CD,
        t: cD
      } = DD;
      const {
        kind: ID,
        short: pD
      } = oD(CD), iD = MD(CD, tD), fD = cD(`${uw}${iD.key}`, {
        ...iD.params,
        name: cD(`${uw}${vD(CD).nameKey}`)
      });
      return (0, Ui.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Ui.jsx)("span", {
          className: np()("Baf2IslandTierPip", {
            Stage: "tier" !== ID
          }),
          "aria-hidden": "true",
          children: pD
        }), fD]
      })
    }

    function pS(DD) {
      let {
        note: CD,
        className: cD,
        t: ID
      } = DD;
      return (0, Ui.jsx)("p", {
        className: np()("Baf2IslandNote", cD),
        children: Rw(ID, CD.key, CD.names, CD.params)
      })
    }
    const iS = "buildAFactory2Game:";

    function fS(DD) {
      let {
        message: CD,
        arrivedAtMs: cD,
        close: pD,
        leave: iD
      } = DD;
      const fD = sf(),
        {
          t: bD
        } = (0, Up.F)(),
        QD = cS(1e3),
        wD = (0, ID.useRef)(null);
      (0, ID.useEffect)((() => {
        var DD;
        null === (DD = wD.current) || void 0 === DD || DD.focus()
      }), []);
      const SD = Hw(cD, CD.baf2TransferInMs, QD),
        BD = cD + CD.baf2TransferInMs - 1e3,
        [yD, MD] = (0, ID.useState)(null);
      (0, ID.useEffect)((() => {
        const DD = window.setTimeout((() => {
          MD(BD)
        }), Math.max(0, BD - Date.now()));
        return () => {
          window.clearTimeout(DD)
        }
      }), [BD]);
      const tD = yD === BD || QD >= BD,
        ZD = CD.baf2TransferIsland,
        oD = CD.baf2TransferOwner;
      return (0, Ui.jsx)(Hf.e, {
        close: pD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ui.jsxs)("section", {
          ref: wD,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              children: [(0, Ui.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === oD ? Rw(bD, `${iS}islandsTransferOwn`, {
                  island: ZD
                }) : Rw(bD, `${iS}islandsTransfer`, {
                  island: ZD,
                  owner: oD
                })
              }), (0, Ui.jsx)("p", {
                children: tD ? bD(`${iS}islandsTransferNow`) : bD(`${iS}islandsTransferIn`, {
                  time: ni(bD, SD)
                })
              })]
            }), (0, Ui.jsx)(Uf.l, {
              ariaLabel: bD(`${iS}islandsClose`),
              onClick: pD
            })]
          }), !tD && (0, Ui.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Ui.jsx)("p", {
              className: "Baf2TransferNote",
              children: bD(`${iS}islandsTransferNote`)
            }), (0, Ui.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Ui.jsx)(Uf.i, {
                onClick: () => {
                  fD.send("baf2coopstay"), iD()
                },
                children: bD(`${iS}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var bS = cD(1440),
      QS = cD(1129),
      wS = cD.n(QS);
    const SS = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const BS = "buildAFactory2Game:",
      yS = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function MS(DD, CD, cD) {
      return void 0 === CD ? cD : "string" === typeof CD ? CD : Array.isArray(CD) ? CD.map((CD => "string" === typeof CD ? CD : "translationKey" in CD ? DD(CD.translationKey) : "")).join("") : DD(CD.translationKey)
    }

    function tS(DD) {
      const CD = {};
      for (const [cD, ID] of Object.entries(null !== DD && void 0 !== DD ? DD : {})) CD[cD] = ID < 0 ? mi(ID) : ID.toLocaleString("en-US");
      return CD
    }

    function ZS(DD, CD) {
      const cD = CD ? "touch" : "mouse";
      return {
        use: DD(`${BS}lookUse_${cD}`),
        Use: DD(`${BS}lookUseStart_${cD}`)
      }
    }
    const oS = (0, ID.memo)((function(DD) {
      let {
        item: CD
      } = DD;
      return (0, Ui.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Ui.jsx)(qp.d, {
          itemName: CD,
          amount: 0
        })
      })
    }));

    function vS(DD) {
      let {
        label: CD,
        percent: cD,
        progress: ID
      } = DD;
      return (0, Ui.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${CD}: ${ID}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": cD,
          children: (0, Ui.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${cD}%`
            }
          })
        }), (0, Ui.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: ID
        })]
      })
    }

    function NS(DD) {
      let {
        chips: CD
      } = DD;
      return (0, Ui.jsx)("span", {
        className: "Baf2QuestChips",
        children: CD.map((DD => {
          let [CD, cD, ID] = DD;
          const pD = cD >= ID;
          return (0, Ui.jsxs)("span", {
            className: np()("Baf2QuestChip", {
              Met: pD
            }),
            children: [(0, Ui.jsx)(oS, {
              item: CD
            }), (0, Ui.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: pD ? `\u2713${ID}` : `${cD}/${ID}`
            })]
          }, CD)
        }))
      })
    }

    function gS(DD, CD) {
      const {
        key: cD,
        params: ID
      } = MD(CD, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return DD(`${BS}${cD}`, {
        ...ID,
        name: DD(`${BS}${vD(CD).nameKey}`)
      })
    }

    function XS(DD) {
      let {
        core: CD,
        t: cD
      } = DD;
      const [ID, pD] = CD, iD = pD > 0 ? Math.floor(100 * ID / pD) : 100;
      return (0, Ui.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": cD(`${BS}questCoreLabel`, {
          have: String(ID),
          need: String(pD)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": iD,
        children: [(0, Ui.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: cD(`${BS}questCore`, {
            percent: String(iD)
          })
        }), (0, Ui.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Ui.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${iD}%`
            }
          })
        })]
      })
    }

    function mS(DD) {
      let {
        rows: CD,
        t: cD
      } = DD;
      const ID = CD.filter((DD => DD.done)).length;
      return (0, Ui.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": cD(`${BS}questStepsProgress`, {
          done: String(ID),
          total: String(CD.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": CD.length,
        "aria-valuenow": ID,
        children: CD.map((DD => (0, Ui.jsx)("span", {
          className: np()("Baf2QuestSegment", {
            Done: DD.done,
            Current: DD.current
          })
        }, DD.id)))
      })
    }
    const nS = (0, ID.memo)(PS, OS);

    function OS(DD, CD) {
      const cD = cD => DD.view.itemNames[cD] === CD.view.itemNames[cD];
      return DD.t === CD.t && DD.extra === CD.extra && (null === DD.row.item || cD(DD.row.item)) && DD.row.madeFor.every(cD) && DD.row.also.every(cD) && wS()(DD.row, CD.row)
    }

    function PS(DD) {
      let {
        row: CD,
        view: cD,
        t: ID,
        extra: pD
      } = DD;
      const {
        isTouchScreen: iD
      } = (0, gp.o)(["isTouchScreen"]), fD = CD.item ? function(DD, CD, cD) {
        return 1 !== cD && SS.has(DD) ? Hp(CD) : null
      }(CD.key, CD.item, CD.total) : null, bD = fD ? ID(fD) : CD.item ? MS(ID, cD.itemNames[CD.item], CD.item) : "", QD = CD.also.map((DD => MS(ID, cD.itemNames[DD], DD))), wD = QD.join(", "), SD = function(DD, CD) {
        var cD;
        return CD.length < 2 ? null !== (cD = CD[0]) && void 0 !== cD ? cD : "" : DD(`${BS}listAnd`, {
          rest: CD.slice(0, -1).join(DD(`${BS}listComma`)),
          last: CD[CD.length - 1]
        })
      }(ID, [bD, ...QD]), BD = ID(`${BS}${CD.key}`, {
        ...ZS(ID, iD),
        ...tS(CD.params),
        item: bD,
        also: wD,
        itemList: SD,
        total: String(CD.total)
      }), [yD, ...MD] = BD.split("\n"), tD = CD.total > 1 && !CD.done && !CD.away;
      return (0, Ui.jsxs)("li", {
        className: np()("Baf2QuestStep", {
          Done: CD.done,
          Current: CD.current,
          JustFinished: CD.justFinished,
          Away: CD.away
        }),
        children: [!CD.done && null !== CD.item && (0, Ui.jsx)(oS, {
          item: CD.item
        }), (CD.done || null === CD.item) && (0, Ui.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: CD.done ? "\u2713" : "\u25cb"
        }), (0, Ui.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ui.jsx)("strong", {
            children: yD
          }), MD.length > 0 && (0, Ui.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: MD.join(" ")
          }), !CD.done && CD.madeFor.length > 0 && (0, Ui.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: ID("buildAFactory2Game:questRowFor", {
              items: CD.madeFor.map((DD => MS(ID, cD.itemNames[DD], DD))).join(" \u2192 ")
            })
          }), tD && (0, Ui.jsx)(vS, {
            label: yD,
            percent: Math.round(100 * CD.amount / CD.total),
            progress: `${CD.amount.toLocaleString("en-US")}/${CD.total.toLocaleString("en-US")}`
          }), !CD.done && !CD.away && CD.chips && CD.chips.length > 0 && (0, Ui.jsx)(NS, {
            chips: CD.chips
          }), pD]
        })]
      })
    }

    function HS(DD, CD) {
      let [cD, ID] = CD;
      return DD(`${BS}${cD}`, tS(ID))
    }

    function US(DD) {
      let [CD, cD] = DD;
      return CD + JSON.stringify(cD)
    }

    function xS(DD) {
      let {
        goal: CD,
        t: cD
      } = DD;
      return CD ? (0, Ui.jsx)("span", {
        className: "Baf2BookGoal",
        children: cD(`${BS}${CD}`)
      }) : null
    }

    function qS(DD) {
      let {
        view: CD,
        t: cD
      } = DD;
      if (!CD.name) return null;
      const ID = dp(CD.rows);
      return (0, Ui.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: cD(`${BS}currentQuest`)
        }), (0, Ui.jsx)("strong", {
          className: "Baf2BookTitle",
          children: HS(cD, CD.name)
        }), (0, Ui.jsx)(xS, {
          goal: CD.goal,
          t: cD
        }), ID.length > 1 && (0, Ui.jsx)(mS, {
          rows: ID,
          t: cD
        }), (0, Ui.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: CD.rows.map((DD => (0, Ui.jsx)(nS, {
            row: DD,
            view: CD,
            t: cD
          }, DD.id)))
        }), CD.reward && (0, Ui.jsxs)("span", {
          className: "Baf2BookReward",
          children: [cD(`${BS}questReward`), (0, Ui.jsx)(oS, {
            item: CD.reward
          }), MS(cD, CD.itemNames[CD.reward], CD.reward)]
        })]
      })
    }

    function JS(DD) {
      let {
        quest: CD,
        upcoming: cD,
        t: ID
      } = DD;
      return (0, Ui.jsxs)("li", {
        className: np()("Baf2BookQuest", {
          Done: CD[3],
          Upcoming: cD
        }),
        children: [(0, Ui.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: CD[3] ? "\u2713" : "\u25cb"
        }), (0, Ui.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Ui.jsx)("strong", {
            className: "Baf2BookTitle",
            children: HS(ID, CD)
          }), (0, Ui.jsx)(xS, {
            goal: CD[2],
            t: ID
          })]
        })]
      })
    }

    function KS(DD) {
      let {
        done: CD,
        total: cD,
        t: ID
      } = DD;
      const pD = cD > 0 ? Math.round(100 * CD / cD) : 0,
        iD = ID(`${BS}questBookChapterProgress`, {
          done: String(CD),
          total: String(cD)
        });
      return (0, Ui.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": iD,
          "aria-valuemin": 0,
          "aria-valuemax": cD,
          "aria-valuenow": CD,
          children: (0, Ui.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${pD}%`
            }
          })
        }), (0, Ui.jsx)("span", {
          className: "Baf2BookProgressText",
          children: iD
        })]
      })
    }

    function aS(DD) {
      let {
        view: CD,
        tier: cD,
        quests: ID,
        t: pD
      } = DD;
      const iD = cD === CD.tier,
        fD = (null !== ID && void 0 !== ID ? ID : []).filter((DD => !DD[4])),
        bD = (null !== ID && void 0 !== ID ? ID : []).filter((DD => DD[4])),
        QD = fD.filter((DD => DD[3])).length,
        wD = iD && CD.name ? US(CD.name) : null,
        SD = fD.findIndex((DD => !DD[3] && US(DD) === wD));
      return (0, Ui.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Ui.jsx)("h3", {
            children: gS(pD, cD)
          }), fD.length > 0 && (0, Ui.jsx)(KS, {
            done: QD,
            total: fD.length,
            t: pD
          }), iD && CD.core && (0, Ui.jsx)(XS, {
            core: CD.core,
            t: pD
          })]
        }), (0, Ui.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === ID && iD && (0, Ui.jsx)(qS, {
            view: CD,
            t: pD
          }), fD.map(((DD, cD) => cD === SD ? (0, Ui.jsx)(qS, {
            view: CD,
            t: pD
          }, US(DD)) : (0, Ui.jsx)(JS, {
            quest: DD,
            upcoming: !DD[3],
            t: pD
          }, US(DD))))]
        }), iD && CD.side && (0, Ui.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Ui.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: pD(`${BS}questSide`)
          }), (0, Ui.jsx)("strong", {
            className: "Baf2BookTitle",
            children: HS(pD, CD.side.name)
          }), (0, Ui.jsx)(xS, {
            goal: CD.side.goal,
            t: pD
          }), (0, Ui.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Ui.jsx)(nS, {
              row: CD.side.row,
              view: CD,
              t: pD
            })
          })]
        }), bD.length > 0 && (0, Ui.jsxs)(Ui.Fragment, {
          children: [(0, Ui.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: pD(`${BS}questBookSidesDone`)
          }), (0, Ui.jsx)("ol", {
            className: "Baf2BookQuests",
            children: bD.map((DD => (0, Ui.jsx)(JS, {
              quest: DD,
              upcoming: !1,
              t: pD
            }, US(DD))))
          })]
        })]
      })
    }

    function VS(DD) {
      var CD, cD, iD;
      let {
        store: fD,
        close: bD
      } = DD;
      const {
        t: QD
      } = (0, Up.F)(), wD = (0, bS.g)(jp, fD.get()), BD = null !== (CD = wD.tier) && void 0 !== CD ? CD : 1, [yD, MD] = (0, ID.useState)(null), tD = (null === yD || void 0 === yD ? void 0 : yD.at) === BD ? yD.tier : BD, vD = (0, ID.useRef)(null), ND = null !== wD.chapters;
      (0, ID.useEffect)((() => {
        var DD;
        vD.current && (vD.current.scrollTop = 0);
        const CD = null === (DD = vD.current) || void 0 === DD ? void 0 : DD.querySelector(".Baf2BookQuest.Current");
        if (vD.current && CD) {
          const DD = CD.getBoundingClientRect().bottom - vD.current.getBoundingClientRect().bottom;
          DD > 0 && (vD.current.scrollTop += Math.min(DD, CD.getBoundingClientRect().top - vD.current.getBoundingClientRect().top))
        }
      }), [tD, ND]);
      const gD = null === (cD = wD.chapters) || void 0 === cD ? void 0 : cD.find((DD => {
        let [CD] = DD;
        return CD === tD
      }));
      return (0, Ui.jsx)(Hf.e, {
        close: bD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: yS,
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: QD(`${BS}questBookTitle`)
            }), (0, Ui.jsx)(Uf.l, {
              onClick: bD
            })]
          }), (0, Ui.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": QD(`${BS}questBookChapters`),
            children: pD.slice(0, SD()).map(((DD, CD) => {
              const cD = CD + 1,
                {
                  kind: ID,
                  short: pD
                } = oD(cD),
                iD = ZD(cD, BD),
                fD = iD ? QD(`${BS}coreAtomicHidden`) : gS(QD, cD);
              return (0, Ui.jsx)("li", {
                children: (0, Ui.jsx)("button", {
                  type: "button",
                  className: np()({
                    Stage: "tier" !== ID,
                    Atomic: "atomic" === ID,
                    Current: cD === BD,
                    Selected: cD === tD
                  }),
                  disabled: cD > BD,
                  "aria-pressed": cD === tD,
                  "aria-label": fD,
                  title: iD ? void 0 : fD,
                  onClick: () => {
                    MD({
                      tier: cD,
                      at: BD
                    })
                  },
                  children: iD ? "?" : pD
                })
              }, DD.nameKey)
            }))
          }), (0, Ui.jsxs)("div", {
            ref: vD,
            className: "Baf2BookBody",
            children: [Rp(wD) && tD === BD && (0, Ui.jsx)("p", {
              className: "Baf2BookEmpty",
              children: QD(`${BS}questBookAllDone`)
            }), (0, Ui.jsx)(aS, {
              view: wD,
              tier: tD,
              quests: null !== (iD = null === gD || void 0 === gD ? void 0 : gD[1]) && void 0 !== iD ? iD : null,
              t: QD
            })]
          })]
        })
      })
    }
    const zS = "buildAFactory2Game:";

    function jS(DD) {
      let {
        tiers: CD,
        from: cD,
        tier: ID,
        shown: pD,
        MM: iD
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), bD = CD.map(((DD, CD) => {
        const bD = cD + CD,
          {
            kind: QD,
            short: wD
          } = oD(bD),
          SD = ZD(bD, ID);
        return (0, Ui.jsx)("li", {
          children: (0, Ui.jsx)("button", {
            type: "button",
            className: np()({
              Stage: "tier" !== QD,
              Silhouette: SD,
              Reached: bD <= ID,
              Current: bD === ID,
              Next: bD === ID + 1,
              Selected: bD === pD
            }),
            disabled: SD,
            "aria-pressed": bD === pD,
            "aria-label": SD ? fD(`${zS}coreAtomicHidden`) : void 0,
            title: SD ? void 0 : fD(`${zS}${DD.nameKey}`),
            onClick: () => {
              iD(bD)
            },
            children: SD ? "?" : wD
          })
        }, DD.nameKey)
      }));
      return (0, Ui.jsx)(Ui.Fragment, {
        children: bD
      })
    }

    function lS(DD) {
      let {
        id: CD,
        label: cD,
        tiers: ID,
        from: pD,
        ...iD
      } = DD;
      return (0, Ui.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Ui.jsx)("span", {
          id: CD,
          className: "Baf2CoreLadderLabel",
          children: cD
        }), (0, Ui.jsx)("ol", {
          "aria-labelledby": CD,
          children: (0, Ui.jsx)(jS, {
            ...iD,
            tiers: ID,
            from: pD
          })
        })]
      })
    }

    function LS(DD) {
      const {
        t: CD
      } = (0, Up.F)(), cD = pD.findIndex((DD => void 0 !== DD.stage)), ID = pD.findIndex((DD => void 0 !== DD.reactorTier)), iD = cD < 0 ? pD : pD.slice(0, cD), fD = cD < 0 ? [] : pD.slice(cD, ID < 0 ? void 0 : ID), QD = ID < 0 || !bD() ? [] : pD.slice(ID);
      return (0, Ui.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Ui.jsx)(lS, {
          ...DD,
          id: "baf2CoreTiersLabel",
          label: CD(`${zS}coreTiersLabel`),
          tiers: iD,
          from: 1
        }), fD.length > 0 && (0, Ui.jsx)(lS, {
          ...DD,
          id: "baf2CoreStagesLabel",
          label: CD(`${zS}coreStagesLabel`),
          tiers: fD,
          from: cD + 1
        }), QD.length > 0 && (0, Ui.jsx)(lS, {
          ...DD,
          id: "baf2CoreAtomicLabel",
          label: CD(`${zS}coreAtomicLabel`),
          tiers: QD,
          from: ID + 1
        })]
      })
    }
    const TS = "buildAFactory2Game:";

    function GS(DD) {
      let {
        item: CD,
        itemNames: cD,
        children: ID
      } = DD;
      return (0, Ui.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: CD,
            amount: 0
          })
        }), (0, Ui.jsx)(Jp.c, {
          text: cD[CD]
        }), ID]
      })
    }

    function RS(DD) {
      const CD = new Map;
      for (const {
          block: ID
        }
        of DD.newDeposits) {
        var cD;
        CD.set(ID, (null !== (cD = CD.get(ID)) && void 0 !== cD ? cD : 0) + 1)
      }
      return [...CD]
    }

    function kS(DD) {
      let {
        value: CD,
        label: cD,
        more: ID
      } = DD;
      return (0, Ui.jsxs)("li", {
        children: [(0, Ui.jsx)("strong", {
          children: CD
        }), (0, Ui.jsx)("span", {
          children: cD
        }), ID > 0 && (0, Ui.jsxs)("em", {
          children: ["+", ID]
        })]
      })
    }

    function dS(DD) {
      let {
        items: CD,
        itemNames: cD
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), [iD, fD] = (0, ID.useState)(null), bD = null !== iD && CD.includes(iD) ? iD : null;
      return (0, Ui.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Ui.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: pD(`${TS}coreRewardUnlocks`)
        }), (0, Ui.jsx)("ul", {
          children: CD.map((DD => (0, Ui.jsx)("li", {
            children: (0, Ui.jsx)("button", {
              type: "button",
              className: np()("Baf2PanelIcon", {
                Picked: DD === bD
              }),
              title: ii(pD, DD),
              "aria-label": ii(pD, DD),
              "aria-pressed": DD === bD,
              onClick: () => {
                fD(DD === bD ? null : DD)
              },
              children: (0, Ui.jsx)(qp.d, {
                itemName: DD,
                amount: 0
              })
            })
          }, DD)))
        }), (0, Ui.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== bD && (0, Ui.jsxs)(Ui.Fragment, {
            children: [(0, Ui.jsx)(Jp.c, {
              text: cD[bD]
            }), " \xb7 ", (0, Ui.jsx)(Jp.c, {
              text: cD[JD(bD)]
            })]
          }), null === bD && pD(`${TS}coreRecipeTap`)]
        })]
      })
    }

    function YS(DD) {
      var CD, cD;
      let {
        def: ID,
        tier: pD,
        itemNames: iD
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), bD = pD > 1 ? vD(pD - 1) : void 0, QD = Math.round(2 * ID.islandRadius), wD = bD ? Math.round(2 * bD.islandRadius) : QD, SD = pD >= 3 ? mI(pD) : null;
      return (0, Ui.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Ui.jsxs)("ul", {
          className: np()("Baf2CoreStats", {
            Four: null !== SD
          }),
          children: [(0, Ui.jsx)(kS, {
            value: `${QD}\xd7${QD}`,
            label: fD(`${TS}coreStatIsland`),
            more: QD - wD
          }), (0, Ui.jsx)(kS, {
            value: String(ID.machineAllowance),
            label: fD(`${TS}coreStatMachines`),
            more: ID.machineAllowance - (null !== (CD = null === bD || void 0 === bD ? void 0 : bD.machineAllowance) && void 0 !== CD ? CD : ID.machineAllowance)
          }), (0, Ui.jsx)(kS, {
            value: String(ID.beltAllowance),
            label: fD(`${TS}coreStatBelts`),
            more: ID.beltAllowance - (null !== (cD = null === bD || void 0 === bD ? void 0 : bD.beltAllowance) && void 0 !== cD ? cD : ID.beltAllowance)
          }), null !== SD && (0, Ui.jsx)(kS, {
            value: String(SD),
            label: fD(`${TS}coreStatStorage`),
            more: SD - (bD ? mI(pD - 1) : SD)
          })]
        }), ID.reward && (0, Ui.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ui.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: fD(`${TS}coreRewardItem`)
          }), (0, Ui.jsx)(GS, {
            item: ID.reward,
            itemNames: iD
          })]
        }), ID.newDeposits.length > 0 && (0, Ui.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Ui.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: fD(ID.newDeposits.length > 1 ? `${TS}coreRewardDeposits` : `${TS}coreRewardDeposit`)
          }), RS(ID).map((DD => {
            let [CD, cD] = DD;
            return (0, Ui.jsx)(GS, {
              item: CD,
              itemNames: iD,
              children: cD > 1 && ` \xd7${cD}`
            }, CD)
          }))]
        }), ID.unlocks.length > 0 && (0, Ui.jsx)(dS, {
          items: ID.unlocks,
          itemNames: iD
        }), (0, Ui.jsx)(WS, {
          tier: pD
        })]
      })
    }

    function WS(DD) {
      let {
        tier: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), ID = Zp[CD];
      if (!ID) return null;
      const pD = tp(CD, 0, 0).barrierMax !== tp(CD - 1, 0, 0).barrierMax;
      return (0, Ui.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: pD ? Qp.Chestplate : bp,
            amount: 0
          })
        }), cD(`${TS}gearPerkLine`, {
          perk: cD(`${TS}${ID}`)
        })]
      })
    }

    function sS(DD, CD) {
      return null === DD ? CD : DD.value
    }

    function ES(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === DD || cD - DD.atMs >= ID ? null : pD(DD.value, CD) ? DD.armed ? null : DD : DD.armed ? DD : {
        ...DD,
        armed: !0
      }
    }

    function eS(DD, CD) {
      const cD = CD.filter((CD => {
        var cD;
        return !1 !== (null === (cD = DD.get(CD)) || void 0 === cD ? void 0 : cD.value)
      }));
      for (const [ID, pD] of DD) pD.value && !CD.includes(ID) && cD.push(ID);
      return cD
    }

    function uS(DD, CD, cD, pD) {
      const [iD, fD] = (0, ID.useState)((() => new Map)), bD = () => {
        fD((CD => function(DD, CD, cD, ID) {
          var pD;
          let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            fD = null;
          for (const [bD, QD] of DD) {
            const pD = ES(QD, CD(bD), cD, ID, iD);
            pD !== QD && (fD ??= new Map(DD), null === pD ? fD.delete(bD) : fD.set(bD, pD))
          }
          return null !== (pD = fD) && void 0 !== pD ? pD : DD
        }(CD, DD, Date.now(), cD, pD)))
      };
      (0, ID.useEffect)((() => {
        bD()
      }), [CD, cD]), (0, ID.useEffect)((() => {
        if (0 === iD.size) return;
        const DD = Math.min(...[...iD.values()].map((DD => DD.atMs))),
          CD = setTimeout(bD, Math.max(0, DD + cD - Date.now()) + 1);
        return () => {
          clearTimeout(CD)
        }
      }), [iD, CD, cD]);
      return [iD, (CD, cD) => {
        fD((ID => {
          const iD = new Map(ID);
          return iD.set(CD, function(DD, CD, cD) {
            return {
              value: DD,
              atMs: cD,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(DD, CD)
            }
          }(cD, DD(CD), Date.now(), pD)), iD
        }))
      }]
    }
    const hS = "buildAFactory2Game:";

    function rS(DD) {
      let {
        message: CD,
        itemNames: cD
      } = DD;
      const pD = sf(),
        {
          t: iD
        } = (0, Up.F)(),
        [fD, bD] = (0, ID.useState)(!1),
        [QD, wD] = function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tf;
          const [cD, ID] = uS((CD => DD.includes(CD)), DD, CD, Object.is);
          return [eS(cD, DD), ID]
        }(CD.baf2CoreBankPaused),
        SD = new Set(QD),
        BD = [...CD.baf2CoreBanked];
      for (const ID of SD) BD.some((DD => {
        let [CD] = DD;
        return CD === ID
      })) || BD.push([ID, 0]);
      return 0 === BD.length ? null : (0, Ui.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Ui.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": fD,
          onClick: () => {
            bD(!fD)
          },
          children: [(0, Ui.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: iD(`${hS}coreBankedLater`)
          }), (0, Ui.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: BD.map((DD => {
              let [CD, cD] = DD;
              const ID = SD.has(CD);
              return (0, Ui.jsxs)("span", {
                className: np()({
                  Paused: ID
                }),
                title: ID ? iD(`${hS}coreBankPausedTag`) : void 0,
                children: [(0, Ui.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Ui.jsx)(qp.d, {
                    itemName: CD,
                    amount: 0
                  })
                }), cD, ID && (0, Ui.jsx)(xp.c, {
                  name: "pause"
                })]
              }, CD)
            }))
          }), (0, Ui.jsx)(xp.c, {
            name: fD ? "angle-up" : "angle-down"
          })]
        }), fD && (0, Ui.jsxs)(Ui.Fragment, {
          children: [(0, Ui.jsx)("ul", {
            children: BD.map((DD => {
              let [CD, ID] = DD;
              const fD = SD.has(CD);
              return (0, Ui.jsxs)("li", {
                children: [(0, Ui.jsxs)(GS, {
                  item: CD,
                  itemNames: cD,
                  children: [(0, Ui.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: ID
                  }), fD && (0, Ui.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: iD(`${hS}coreBankPausedTag`)
                  })]
                }), (0, Ui.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Ui.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === ID,
                    onClick: () => {
                      pD.send(`baf2corewithdraw ${ID} ${CD}`)
                    },
                    children: iD(`${hS}coreTake`)
                  }), (0, Ui.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      pD.send(`${XD} ${CD}`), wD(CD, !fD)
                    },
                    children: iD(fD ? `${hS}coreBankResume` : `${hS}coreBankStop`)
                  })]
                })]
              }, CD)
            }))
          }), (0, Ui.jsx)("p", {
            className: "Baf2CoreHint",
            children: iD(`${hS}coreBankNote`)
          })]
        })]
      })
    }
    const AS = "buildAFactory2Game:";

    function FS(DD) {
      const CD = Math.max(0, Math.floor(DD));
      return `${Math.floor(CD/60)}:${String(CD%60).padStart(2,"0")}`
    }

    function DB(DD) {
      let {
        item: CD
      } = DD;
      return (0, Ui.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Ui.jsx)(qp.d, {
          itemName: CD,
          amount: 0
        })
      })
    }

    function CB() {
      return (0, Ui.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Ui.jsx)(xp.c, {
          name: "bolt"
        })
      })
    }

    function cB(DD) {
      let {
        charge: CD,
        hint: cD,
        itemNames: ID
      } = DD;
      const pD = sf(),
        {
          t: iD
        } = (0, Up.F)(),
        [fD, bD, QD, wD, SD, BD, yD] = CD,
        [MD, tD] = function(DD) {
          var CD;
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tf,
            ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [pD, iD] = uS((() => DD), DD, cD, ID);
          return [sS(null !== (CD = pD.get("")) && void 0 !== CD ? CD : null, DD), DD => {
            iD("", DD)
          }]
        }(yD),
        ZD = MD === yD ? BD : !MD,
        oD = wD >= SD,
        vD = fD.find((DD => {
          let [, CD, cD] = DD;
          return cD < .9 * CD
        }));
      let ND = `${AS}coreChargeWaiting`,
        gD = {};
      return oD ? ND = `${AS}coreChargeDone` : MD ? ND = `${AS}coreChargeStopped` : ZD && cD ? (ND = `${AS}${cD[0]}`, gD = {
        item: ii(iD, cD[1])
      }) : ZD && vD ? (ND = `${AS}coreChargeShort`, gD = {
        item: ii(iD, vD[0])
      }) : ZD && bD > 0 && !QD ? ND = `${AS}coreChargePower` : ZD && (ND = `${AS}coreChargeRunning`), (0, Ui.jsxs)("div", {
        className: np()("Baf2CoreCharge", {
          Waiting: !ZD && !oD,
          Done: oD
        }),
        children: [(0, Ui.jsxs)("h4", {
          children: [iD(`${AS}coreChargeTitle`), (0, Ui.jsx)("span", {
            children: iD(`${AS}coreChargeProgress`, {
              done: FS(wD),
              need: FS(SD)
            })
          })]
        }), (0, Ui.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Ui.jsx)("div", {
            style: {
              width: 100 * Math.min(wD, SD) / SD + "%"
            }
          })
        }), (0, Ui.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [fD.map((DD => {
            var CD;
            let [cD, pD, fD] = DD;
            const bD = fD >= .9 * pD;
            return (0, Ui.jsxs)("li", {
              className: np()({
                Done: bD,
                Short: ZD && !bD
              }),
              children: [(0, Ui.jsx)(DB, {
                item: cD
              }), (0, Ui.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Ui.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ui.jsx)(Jp.c, {
                    text: null !== (CD = ID[cD]) && void 0 !== CD ? CD : cD
                  }), (0, Ui.jsx)("span", {
                    children: iD(`${AS}coreChargeItem`, {
                      now: String(fD),
                      need: String(pD)
                    })
                  })]
                }), (0, Ui.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Ui.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*fD/pD)}%`
                    }
                  })
                })]
              })]
            }, cD)
          })), bD > 0 && (0, Ui.jsxs)("li", {
            className: np()("Baf2CoreChargePower", {
              Short: ZD && !QD
            }),
            children: [(0, Ui.jsx)(CB, {}), (0, Ui.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ui.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ui.jsx)("span", {
                  children: iD(`${AS}coreChargePowerRow`, {
                    power: rD(bD)
                  })
                })
              })
            })]
          })]
        }), (0, Ui.jsx)("p", {
          className: "Baf2CoreHint",
          children: iD(ND, gD)
        }), !oD && (ZD || MD) && (0, Ui.jsx)("button", {
          type: "button",
          className: np()("Baf2CoreChargeToggle", {
            Stopped: MD
          }),
          onClick: () => {
            pD.send(nD), tD(!MD)
          },
          children: iD(MD ? `${AS}coreChargeRestart` : `${AS}coreChargeStop`)
        })]
      })
    }

    function IB(DD) {
      let {
        charge: CD,
        reached: cD,
        itemNames: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)();
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2CoreCharge", {
          Done: cD
        }),
        children: [(0, Ui.jsxs)("h4", {
          children: [pD(`${AS}coreChargeTitle`), (0, Ui.jsx)("span", {
            children: pD(`${AS}coreChargeSpecTime`, {
              time: FS(CD.seconds)
            })
          })]
        }), (0, Ui.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [CD.items.map((DD => {
            var CD;
            let {
              item: iD,
              amount: fD
            } = DD;
            return (0, Ui.jsxs)("li", {
              className: np()({
                Done: cD
              }),
              children: [(0, Ui.jsx)(DB, {
                item: iD
              }), (0, Ui.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Ui.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Ui.jsx)(Jp.c, {
                    text: null !== (CD = ID[iD]) && void 0 !== CD ? CD : iD
                  }), (0, Ui.jsx)("span", {
                    children: pD(`${AS}coreChargeSpecItem`, {
                      need: String(fD)
                    })
                  })]
                })
              })]
            }, iD)
          })), CD.powerPerS > 0 && (0, Ui.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Ui.jsx)(CB, {}), (0, Ui.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Ui.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Ui.jsx)("span", {
                  children: pD(`${AS}coreChargePowerRow`, {
                    power: rD(CD.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const pB = "buildAFactory2Game:";

    function iB(DD) {
      let {
        def: CD,
        reached: cD,
        banked: ID,
        itemNames: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)();
      return (0, Ui.jsx)("ul", {
        className: "Baf2CoreCost",
        children: CD.cost.map((DD => {
          let {
            item: CD,
            amount: fD
          } = DD;
          const bD = cD ? 0 : ID(CD);
          return (0, Ui.jsx)("li", {
            children: (0, Ui.jsx)(GS, {
              item: CD,
              itemNames: pD,
              children: (0, Ui.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: bD > 0 ? iD(`${pB}coreBankedFor`, {
                  amount: String(bD),
                  total: String(fD)
                }) : `\xd7${fD}`
              })
            })
          }, CD)
        }))
      })
    }

    function fB(DD, CD) {
      if (CD >= SD()) return DD(`${pB}coreMaxTier`);
      const cD = wD[CD + 1];
      return cD && !cD.startsWith("upgradeCore") ? DD(`${pB}coreGateQuest`, {
        quest: DD(`${pB}quest_${cD}`)
      }) : DD(`${pB}coreGateClosed`)
    }

    function bB() {
      const {
        t: DD
      } = (0, Up.F)(), CD = sf(), cD = (0, ID.useRef)(null), pD = (0, ID.useRef)(Date.now());
      return Fw(!0, cD), (0, Ui.jsx)("div", {
        ref: cD,
        className: "Baf2CoreGrow",
        children: (0, Ui.jsx)(Uf.o, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - pD.current >= 600 && CD.send(gD)
          },
          children: DD(`${pB}coreGrow`)
        })
      })
    }

    function QB(DD) {
      let {
        message: CD,
        itemNames: cD,
        next: ID
      } = DD;
      const pD = sf(),
        {
          t: iD
        } = (0, Up.F)(),
        fD = CD.baf2CoreTier,
        bD = CD.baf2CoreReady,
        QD = CD.baf2CoreNeeds.filter((DD => {
          let [, CD, cD, ID] = DD;
          return ID > 0 && CD < cD
        })),
        wD = CD.baf2CoreNeeds.every((DD => {
          let [, CD, cD] = DD;
          return CD >= cD
        })),
        SD = CD.baf2CoreKeep;
      return (0, Ui.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [bD && (0, Ui.jsx)(bB, {}), (0, Ui.jsx)("h3", {
            children: iD(`${pB}coreBring`)
          }), (0, Ui.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: CD.baf2CoreNeeds.map((DD => {
              let [CD, ID, fD, bD] = DD;
              return (0, Ui.jsxs)("li", {
                className: np()({
                  Done: ID >= fD
                }),
                children: [(0, Ui.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Ui.jsx)(qp.d, {
                    itemName: CD,
                    amount: 0
                  })
                }), (0, Ui.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Ui.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Ui.jsx)(Jp.c, {
                      text: cD[CD]
                    }), (0, Ui.jsxs)("span", {
                      children: [ID, "/", fD]
                    })]
                  }), (0, Ui.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Ui.jsx)("div", {
                      style: {
                        width: 100 * ID / fD + "%"
                      }
                    }), bD > 0 && (0, Ui.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * bD / fD + "%"
                      }
                    })]
                  })]
                }), bD > 0 && ID < fD && (0, Ui.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    pD.send(`${mD} ${CD}`)
                  },
                  children: iD(`${pB}coreDeposit`, {
                    amount: String(bD)
                  })
                })]
              }, CD)
            }))
          }), CD.baf2CoreCharge && (0, Ui.jsx)(cB, {
            charge: CD.baf2CoreCharge,
            hint: CD.baf2CoreChargeHint,
            itemNames: cD
          }), !bD && QD.length > 1 && (0, Ui.jsx)(Uf.o, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              pD.send(gD)
            },
            children: iD(`${pB}coreHandOver`)
          }), !bD && void 0 !== SD && (0, Ui.jsx)("p", {
            className: "Baf2CoreHint",
            children: iD(`${pB}coreKeepRest`, {
              item: ii(iD, SD)
            })
          }), !bD && !wD && 0 === QD.length && void 0 === SD && (0, Ui.jsx)("p", {
            className: "Baf2CoreHint",
            children: iD(`${pB}coreNothingHeld`)
          }), (0, Ui.jsx)(rS, {
            message: CD,
            itemNames: cD
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ui.jsx)("h3", {
            children: iD(`${pB}coreRewards`)
          }), (0, Ui.jsx)(YS, {
            def: ID,
            tier: fD + 1,
            itemNames: cD
          })]
        })]
      })
    }

    function wB(DD) {
      let {
        message: CD,
        itemNames: cD,
        shown: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), iD = CD.baf2CoreTier, fD = vD(ID), bD = ID <= iD, QD = new Map(CD.baf2CoreBanked), wD = !ND(iD, OD(CD)) && ID === iD;
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2CoreBody", {
          Locked: !bD
        }),
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ui.jsx)("h3", {
            children: pD(bD ? `${pB}coreItTook` : `${pB}coreItNeeds`)
          }), 0 === fD.cost.length && (0, Ui.jsx)("p", {
            className: "Baf2CoreHint",
            children: pD(`${pB}coreTierStart`)
          }), fD.cost.length > 0 && (0, Ui.jsx)(iB, {
            def: fD,
            reached: bD,
            banked: DD => {
              var CD;
              return function(DD, CD, cD, ID) {
                let pD = DD;
                for (let fD = CD + 2; fD <= cD; fD++) {
                  var iD;
                  const DD = vD(fD).cost.find((DD => DD.item === ID)),
                    CD = Math.min(pD, null !== (iD = null === DD || void 0 === DD ? void 0 : DD.amount) && void 0 !== iD ? iD : 0);
                  if (fD === cD) return CD;
                  pD -= CD
                }
                return 0
              }(null !== (CD = QD.get(DD)) && void 0 !== CD ? CD : 0, iD, ID, DD)
            },
            itemNames: cD
          }), fD.charge && (0, Ui.jsx)(IB, {
            charge: fD.charge,
            reached: bD,
            itemNames: cD
          }), wD && (0, Ui.jsxs)(Ui.Fragment, {
            children: [(0, Ui.jsx)("p", {
              className: "Baf2CoreHint",
              children: fB(pD, iD)
            }), (0, Ui.jsx)(rS, {
              message: CD,
              itemNames: cD
            })]
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Ui.jsx)("h3", {
            children: pD(bD ? `${pB}coreGave` : `${pB}coreLockedRewards`)
          }), (0, Ui.jsx)(YS, {
            def: fD,
            tier: ID,
            itemNames: cD
          })]
        })]
      })
    }

    function SB(DD, CD) {
      const {
        key: cD,
        params: ID
      } = MD(CD - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return DD(`${pB}${cD}`, ID)
    }
    const BB = "buildAFactory2Game:",
      yB = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      MB = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function tB(DD) {
      let {
        view: CD,
        close: cD,
        askIslands: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)(), [fD, bD] = (0, ID.useState)(!1);
      (0, ID.useEffect)((() => {
        if (!fD) return;
        const DD = window.setTimeout((() => {
          bD(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(DD)
        }
      }), [fD]);
      const {
        message: QD,
        itemNames: wD
      } = CD, SD = QD.baf2CoreTier, BD = vD(SD), yD = ND(SD, OD(QD)), [ZD, oD] = QD.baf2CoreMachines, [gD, XD] = QD.baf2CoreBelts, mD = QD.baf2CoreStorage, nD = QD.baf2CoreReady, [PD, HD] = (0, ID.useState)(null), UD = (null === PD || void 0 === PD ? void 0 : PD.at) === SD && PD.ready === nD ? PD.tier : yD ? SD + 1 : SD;
      let xD = "coreTierLocked";
      UD <= SD ? xD = "coreTierReached" : UD === SD + 1 && (xD = "coreTierNext");
      const qD = iD(`${BB}${vD(UD).nameKey}`),
        JD = UD === SD + 1 ? yD : null,
        KD = MD(UD, {
          tier: xD,
          stage: yB[xD],
          atomic: MB[xD]
        }),
        aD = iD(`${BB}${KD.key}`, {
          ...KD.params,
          name: qD
        }),
        VD = MD(SD, tD),
        zD = iD(`${BB}${VD.key}`, {
          ...VD.params,
          name: iD(`${BB}${BD.nameKey}`)
        });
      return (0, Ui.jsx)(Hf.e, {
        close: cD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              children: [(0, Ui.jsx)("h2", {
                id: "baf2CoreTitle",
                children: iD(`${BB}coreTitle`)
              }), void 0 !== QD.baf2CoreIslandName && (0, Ui.jsx)("p", {
                className: "Baf2CoreIsland",
                children: QD.baf2CoreIslandName
              }), (0, Ui.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Ui.jsx)("span", {
                  children: zD
                }), (0, Ui.jsx)("span", {
                  className: np()({
                    Full: ZD >= oD
                  }),
                  children: iD(`${BB}coreMachineCount`, {
                    amount: String(ZD),
                    total: String(oD)
                  })
                }), (0, Ui.jsx)("span", {
                  className: np()({
                    Full: gD >= XD
                  }),
                  children: iD(`${BB}coreBeltCount`, {
                    amount: String(gD),
                    total: String(XD)
                  })
                }), void 0 !== mD && (0, Ui.jsx)("span", {
                  className: np()({
                    Full: mD[0] >= mD[1]
                  }),
                  children: iD(`${BB}coreStorageCount`, {
                    amount: String(mD[0]),
                    total: String(mD[1])
                  })
                })]
              })]
            }), (0, Ui.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [QD.baf2CoreIslands && (0, Ui.jsx)(Uf.i, {
                className: "Baf2CoreIslandsButton",
                disabled: fD,
                onClick: () => {
                  bD(!0), pD()
                },
                children: iD(`${BB}islandsOpenButton`)
              }), (0, Ui.jsx)(Uf.l, {
                onClick: cD
              })]
            })]
          }), (0, Ui.jsx)(LS, {
            tier: SD,
            shown: UD,
            MM: DD => {
              HD({
                tier: DD,
                at: SD,
                ready: nD
              })
            }
          }), (0, Ui.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [aD, UD > SD + 1 && (0, Ui.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: SB(iD, UD)
            })]
          }), 6 === UD && UD > SD && (0, Ui.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: iD(`${BB}coreStagesNote`)
          }), 11 === UD && UD > SD && (0, Ui.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: iD(`${BB}coreAtomicNote`)
          }), JD && (0, Ui.jsx)(QB, {
            message: QD,
            itemNames: wD,
            next: JD
          }), !JD && (0, Ui.jsx)(wB, {
            message: QD,
            itemNames: wD,
            shown: UD
          })]
        })
      })
    }
    const ZB = {
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
    const oB = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: wi,
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

    function vB(DD) {
      return DD.baf2DropCometOreOnly ? "dropCometOre" : DD.baf2DropCometIsotope ? "seed" === DD.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function NB(DD) {
      let {
        message: CD,
        quests: cD,
        close: pD,
        leave: iD
      } = DD;
      const fD = sf(),
        {
          t: bD
        } = (0, Up.F)(),
        QD = (0, bS.g)(jp, cD.get()),
        wD = function(DD) {
          var CD;
          if (!VD(DD.tutorial)) return null;
          const cD = DD.rows.find((DD => DD.current)),
            ID = cD ? ZB[cD.key] : void 0;
          return null !== (CD = null !== ID && void 0 !== ID ? ID : DD.side ? ZB[DD.side.row.key] : void 0) && void 0 !== CD ? CD : null
        }(QD),
        SD = null === QD.tier || yi(QD.tier),
        BD = SD ? oB : oB.filter((DD => {
          let {
            item: CD
          } = DD;
          return CD !== wi
        })),
        [yD, MD] = (0, ID.useState)(null),
        tD = null !== yD && void 0 !== yD ? yD : !CD.baf2DropFoundSalvage && SD,
        ZD = CD.baf2DropRuinDistance,
        oD = CD.baf2DropComet,
        vD = CD.baf2DropOldWorks,
        ND = CD.baf2DropGrove,
        gD = function(DD) {
          return 2 + Number(void 0 !== DD.baf2DropComet) + Number(!!DD.baf2DropOwedComet || void 0 !== DD.baf2DropOwedWaitMinutes) + Number(void 0 !== DD.baf2DropDigDistance) + Number(void 0 !== DD.baf2DropOldWorks) + Number(void 0 !== DD.baf2DropGrove)
        }(CD),
        XD = DD => {
          fD.send(function(DD) {
            return `baf2drop ${DD}`
          }(DD)), iD()
        };
      let mD = bD("buildAFactory2Game:dropRuinNone");
      if (null !== ZD) {
        let DD = CD.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        CD.baf2DropRuinOldWorks && (DD = "dropRuinOldWorks");
        const cD = void 0 === CD.baf2DropRuinCluster ? bD("buildAFactory2Game:dropRuinOpen") : bD("buildAFactory2Game:dropRuinCluster", {
          count: String(CD.baf2DropRuinCluster)
        });
        mD = `${bD(`buildAFactory2Game:${DD}`,{distance:String(ZD)})} ${cD}`
      }
      let nD = bD("buildAFactory2Game:dropBelowDescription");
      void 0 !== CD.baf2DropBelowLook && (nD = bD("buildAFactory2Game:dropBelowLook", {
        look: bD(CD.baf2DropBelowLook)
      }));
      const OD = "buildAFactory2Game:wildsRegion_survivorGrove" === CD.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        PD = ni(bD, 60 * function(DD) {
          const [CD, cD] = (0, ID.useState)((() => Date.now())), [pD, iD] = (0, ID.useState)(CD);
          return (0, ID.useEffect)((() => {
            const DD = Date.now();
            cD(DD), iD(DD)
          }), [DD]), (0, ID.useEffect)((() => {
            const DD = window.setInterval((() => {
              iD(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(DD)
            }
          }), []), Math.max(1, DD.baf2DropRenewMinutes - Math.floor((pD - CD) / 6e4))
        }(CD)),
        HD = function(DD, CD, cD) {
          return "ruin" === DD && !cD || "owed" === DD && !CD.baf2DropOwedComet ? null : DD
        }(wD, CD, null !== ZD),
        UD = function(DD) {
          for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
          return np()("Baf2DropTile", ...cD, {
            Wanted: HD === DD
          })
        };
      return (0, Ui.jsx)(Hf.e, {
        close: pD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Ui.jsxs)("section", {
          className: np()("Baf2Panel Baf2DropMap", {
            Many: gD >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              children: [(0, Ui.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: bD("buildAFactory2Game:dropMapTitle")
              }), (0, Ui.jsx)("p", {
                children: bD("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Ui.jsx)(Uf.l, {
              onClick: pD
            })]
          }), (0, Ui.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== oD && (0, Ui.jsxs)(Uf.x, {
              className: UD("comet", "Baf2DropComet"),
              onClick: () => {
                XD("comet")
              },
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropComet")
              }), (0, Ui.jsx)("span", {
                children: bD(`buildAFactory2Game:${vB(CD)}`, {
                  distance: String(oD)
                })
              })]
            }), CD.baf2DropOwedComet && (0, Ui.jsxs)(Uf.x, {
              className: UD("owed", "Baf2DropComet"),
              onClick: () => {
                XD("owed")
              },
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropOwedComet")
              }), (0, Ui.jsx)("span", {
                children: CD.baf2DropOwedIsotope ? bD("buildAFactory2Game:dropOwedIsotopeDescription") : bD("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== CD.baf2DropOwedWaitMinutes && (0, Ui.jsxs)(Uf.x, {
              className: UD("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropOwedComet")
              }), (0, Ui.jsx)("span", {
                children: bD("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(CD.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Ui.jsxs)(Uf.i, {
              className: UD("below"),
              onClick: () => {
                XD("below")
              },
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropBelow")
              }), (0, Ui.jsx)("span", {
                children: nD
              })]
            }), void 0 !== CD.baf2DropDigDistance && (0, Ui.jsxs)(Uf.r, {
              className: UD("dig"),
              onClick: () => {
                XD("dig")
              },
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropDig")
              }), (0, Ui.jsx)("span", {
                children: bD("buildAFactory2Game:dropDigDescription", {
                  distance: String(CD.baf2DropDigDistance),
                  y: mi(CD.baf2DropDigY)
                })
              })]
            }), void 0 !== ND && (0, Ui.jsxs)(Uf.r, {
              className: UD("grove", "Baf2DropGrove"),
              onClick: () => {
                XD("grove")
              },
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropGrove")
              }), (0, Ui.jsx)("span", {
                children: bD(`buildAFactory2Game:${OD}`, {
                  distance: String(ND)
                })
              })]
            }), (0, Ui.jsxs)(Uf.o, {
              className: UD("ruin"),
              disabled: null === ZD,
              onClick: () => {
                XD("ruin")
              },
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropRuin")
              }), (0, Ui.jsx)("span", {
                children: mD
              })]
            }), void 0 !== vD && (0, Ui.jsxs)(Uf.J, {
              className: UD("works"),
              onClick: () => {
                XD("works")
              },
              children: [(0, Ui.jsx)("strong", {
                children: bD("buildAFactory2Game:dropOldWorks")
              }), (0, Ui.jsx)("span", {
                children: bD("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(vD)
                })
              })]
            })]
          }), (0, Ui.jsx)("p", {
            className: "Baf2DropRenew",
            children: bD("buildAFactory2Game:dropRenew", {
              time: PD
            })
          }), (0, Ui.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: tD,
            onToggle: DD => {
              DD.currentTarget.open !== tD && MD(DD.currentTarget.open)
            },
            children: [(0, Ui.jsx)("summary", {
              children: bD("buildAFactory2Game:dropSalvageWhat")
            }), (0, Ui.jsx)("p", {
              children: bD("buildAFactory2Game:dropSalvageIntro")
            }), (0, Ui.jsx)("ul", {
              children: BD.map((DD => {
                let {
                  item: CD,
                  nameKey: cD,
                  useKey: ID,
                  params: pD
                } = DD;
                return (0, Ui.jsxs)("li", {
                  children: [(0, Ui.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Ui.jsx)(qp.d, {
                      itemName: CD,
                      amount: 0
                    })
                  }), (0, Ui.jsxs)("span", {
                    children: [(0, Ui.jsx)("strong", {
                      children: bD(cD)
                    }), ": ", bD(ID, pD)]
                  })]
                }, CD)
              }))
            })]
          })]
        })
      })
    }
    const gB = "buildAFactory2Game:";

    function XB(DD, CD) {
      return DD.sendIslandEdit(`baf2coopleave ${CD.baf2IslandId}`)
    }

    function mB(DD) {
      let {
        card: CD,
        canRename: cD,
        done: pD,
        t: iD
      } = DD;
      const fD = sf(),
        [bD, QD] = (0, ID.useState)(CD.baf2IslandName),
        wD = Uw(bD),
        SD = "" === wD || xw(wD),
        BD = () => {
          !SD && cD && (wD !== CD.baf2IslandName ? pD(fD.sendIslandEdit(`baf2islandrename ${CD.baf2IslandId} ${wD}`)) : pD(null))
        },
        yD = () => {
          pD(null)
        };
      return (0, Ui.jsxs)("div", {
        className: "Baf2IslandForm",
        ...rw(yD),
        children: [(0, Ui.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [iD(`${gB}islandsRenameLabel`), (0, Ui.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bD,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Aw,
            onChange: DD => {
              QD(DD.target.value)
            },
            ...hw(BD, yD)
          })]
        }), "" === wD && (0, Ui.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: iD(`${gB}islandsRenameEmpty`)
        }), xw(wD) && (0, Ui.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: iD(`${gB}islandsNameReserved`)
        }), (0, Ui.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ui.jsx)(Uf.r, {
            disabled: SD || !cD,
            onClick: BD,
            children: iD(`${gB}islandsRenameSave`)
          }), (0, Ui.jsx)(Uf.i, {
            onClick: yD,
            children: iD(`${gB}islandsCancel`)
          })]
        })]
      })
    }

    function nB(DD) {
      let {
        card: CD,
        canDelete: cD,
        done: pD,
        t: iD
      } = DD;
      const fD = sf(),
        [bD, QD] = (0, ID.useState)(""),
        wD = function(DD, CD) {
          return Uw(DD).toLowerCase() === Uw(CD).toLowerCase()
        }(bD, CD.baf2IslandName),
        SD = () => {
          wD && cD && pD(fD.sendIslandEdit(`baf2islanddelete ${CD.baf2IslandId}`))
        },
        BD = () => {
          pD(null)
        },
        yD = Gw("name"),
        [MD, tD = ""] = iD(`${gB}islandsDeleteConfirm`, {
          name: yD
        }).split(yD);
      return (0, Ui.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...rw(BD),
        children: [(0, Ui.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Ui.jsxs)("span", {
            children: [MD, (0, Ui.jsx)("strong", {
              children: CD.baf2IslandName
            }), tD]
          }), (0, Ui.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: bD,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Aw,
            onChange: DD => {
              QD(DD.target.value)
            },
            ...hw(SD, BD)
          })]
        }), sw(CD) && (0, Ui.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: iD(`${gB}islandsDeleteLeftBack`)
        }), (0, Ui.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Ui.jsx)(Uf.J, {
            disabled: !wD || !cD,
            onClick: SD,
            children: iD(`${gB}islandsDeleteForGood`)
          }), (0, Ui.jsx)(Uf.i, {
            onClick: BD,
            children: iD(`${gB}islandsCancel`)
          })]
        })]
      })
    }

    function OB(DD) {
      let {
        members: CD,
        t: cD
      } = DD;
      const ID = CD.length;
      return (0, Ui.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Ui.jsxs)("span", {
          children: [1 === ID ? cD(`${gB}islandsPlayersOne`) : cD(`${gB}islandsPlayers`, {
            count: String(ID)
          }), " "]
        }), CD.map(((DD, CD) => (0, Ui.jsxs)("span", {
          className: np()("Baf2IslandMember", {
            Here: DD.baf2MemberHere
          }),
          title: DD.baf2MemberHere ? cD(`${gB}islandsPlayerHere`) : void 0,
          children: [DD.baf2MemberName, CD < ID - 1 ? ", " : ""]
        }, DD.baf2MemberKey)))]
      })
    }

    function PB(DD) {
      let {
        card: CD,
        answered: cD,
        nowMs: pD,
        t: iD
      } = DD;
      const fD = sf(),
        [bD, QD] = (0, ID.useState)(new Map),
        wD = sw(CD);
      if (!wD) return null;
      return (0, Ui.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Ui.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: iD(`${gB}islandsLeftTitle`)
        }), (0, Ui.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: wD.left.map((DD => {
            const ID = DD.baf2LeftKey,
              SD = ew(bD.get(ID), cD, pD),
              BD = function(DD) {
                return 1 === DD ? [`${nw}islandsLeftItemsOne`] : [`${nw}islandsLeftItems`, {
                  count: String(DD)
                }]
              }(DD.baf2LeftItems);
            return (0, Ui.jsx)("li", {
              className: np()("Baf2IslandPerson", {
                Pending: SD
              }),
              children: (0, Ui.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ui.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: DD.baf2LeftName
                }), (0, Ui.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: iD(BD[0], BD[1])
                }), wD.claim && (0, Ui.jsx)(Uf.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: SD,
                  onClick: () => {
                    (DD => {
                      const cD = fD.sendIslandEdit(`baf2coopclaim ${CD.baf2IslandId} ${DD}`);
                      QD((CD => new Map(CD).set(DD, {
                        atMs: Date.now(),
                        answer: cD
                      })))
                    })(ID)
                  },
                  children: iD(`${gB}islandsClaim`)
                })]
              })
            }, ID)
          }))
        }), wD.goThere && (0, Ui.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: iD(`${gB}islandsClaimGoThere`)
        })]
      })
    }

    function HB(DD) {
      let {
        card: CD,
        view: cD,
        blocked: pD,
        maxIslands: iD,
        answered: fD,
        nowMs: bD,
        done: QD,
        openSocial: wD,
        t: SD
      } = DD;
      const BD = sf(),
        [yD, MD] = (0, ID.useState)(new Map),
        [tD, ZD] = (0, ID.useState)(new Map),
        [oD, vD] = (0, ID.useState)(null),
        ND = (0, ID.useRef)(null);
      CS(ND);
      const gD = CD.baf2IslandId,
        XD = CD.baf2IslandCoop,
        mD = null !== XD && void 0 !== XD && XD.baf2CoopMembers.some((DD => DD.baf2MemberKey === oD)) ? oD : null,
        nD = function(DD, CD) {
          const cD = DD.baf2IslandCoop;
          return cD && Ew(cD) || null !== CD ? void 0 : DD.baf2IslandInvitable
        }(CD, pD),
        OD = function(DD, CD) {
          const cD = DD.baf2IslandCoop;
          return cD && Ew(cD) ? {
            key: `${nw}islandsCoopFull`,
            params: {
              max: String(cD.baf2CoopMax)
            }
          } : void 0 !== DD.baf2IslandInvitable && null === CD || cD && !cD.baf2CoopManageHere ? null : "degraded" === CD || "stuck" === CD ? {
            key: `${nw}islandsInviteNotLoaded`
          } : null === CD || function(DD) {
            return "notHome" === DD || "wilds" === DD || "visiting" === DD
          }(CD) || aw(CD) ? {
            key: `${nw}islandsInviteGoThere`
          } : {
            key: `${nw}islandsInviteBusy`
          }
        }(CD, pD),
        PD = () => {
          var DD;
          vD(null), null === (DD = ND.current) || void 0 === DD || DD.focus()
        };
      return (0, Ui.jsxs)("div", {
        ref: ND,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...rw(null === mD ? QD : PD),
        children: [XD && (0, Ui.jsxs)(Ui.Fragment, {
          children: [(0, Ui.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: SD(`${gB}islandsPlayersTitle`, {
              count: String(XD.baf2CoopMembers.length),
              max: String(XD.baf2CoopMax)
            })
          }), (0, Ui.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: XD.baf2CoopMembers.map(((DD, CD) => {
              const ID = DD.baf2MemberKey,
                pD = ew(yD.get(ID), fD, bD);
              return (0, Ui.jsxs)("li", {
                className: np()("Baf2IslandPerson", {
                  Pending: pD
                }),
                children: [(0, Ui.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Ui.jsx)("span", {
                    className: np()("Baf2IslandPersonName", {
                      Here: DD.baf2MemberHere
                    }),
                    children: DD.baf2MemberName
                  }), DD.baf2MemberHere && (0, Ui.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: SD(`${gB}islandsPlayerHere`)
                  }), 0 === CD && (0, Ui.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: SD(`${gB}islandsPlayerOwner`)
                  }), cD.remove && CD > 0 && !pD && mD !== ID && (0, Ui.jsx)(Uf.N, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var DD;
                      vD(ID), null === (DD = ND.current) || void 0 === DD || DD.focus()
                    },
                    children: SD(`${gB}islandsRemove`)
                  })]
                }), mD === ID && (0, Ui.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Ui.jsx)("p", {
                    children: Rw(SD, `${gB}islandsRemoveConfirm`, {
                      player: DD.baf2MemberName
                    })
                  }), (0, Ui.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Ui.jsx)(Uf.J, {
                      onClick: () => {
                        (DD => {
                          const CD = BD.sendIslandEdit(`baf2coopremove ${gD} ${DD.baf2MemberKey}`);
                          MD((cD => new Map(cD).set(DD.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: CD
                          }))), PD()
                        })(DD)
                      },
                      children: SD(`${gB}islandsRemoveYes`)
                    }), (0, Ui.jsx)(Uf.i, {
                      onClick: PD,
                      children: SD(`${gB}islandsCancel`)
                    })]
                  })]
                })]
              }, ID)
            }))
          })]
        }), (void 0 !== nD || null !== OD) && (0, Ui.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: SD(`${gB}islandsInviteTitle`)
        }), !XD && (void 0 !== nD || null !== OD) && (0, Ui.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: SD(`${gB}islandsInviteShareNote`)
        }), 0 === (null === nD || void 0 === nD ? void 0 : nD.length) && (0, Ui.jsx)(UB, {
          openSocial: wD,
          t: SD
        }), void 0 !== nD && nD.length > 0 && (0, Ui.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: nD.map((DD => {
            const CD = !0 === DD.baf2InvitableSent || ew(tD.get(DD.baf2InvitableId), fD, bD);
            return (0, Ui.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Ui.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Ui.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: DD.baf2InvitableName
                }), DD.baf2InvitableFull && !CD && (0, Ui.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: SD(`${gB}islandsInviteTheirFull`, {
                    max: String(iD)
                  })
                }), (CD || !DD.baf2InvitableFull) && (0, Ui.jsx)(Uf.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: CD,
                  onClick: () => {
                    (DD => {
                      const CD = BD.sendIslandEdit(`baf2coopinvite ${gD} ${DD}`);
                      ZD((cD => new Map(cD).set(DD, {
                        atMs: Date.now(),
                        answer: CD
                      })))
                    })(DD.baf2InvitableId)
                  },
                  children: SD(CD ? `${gB}islandsInvited` : `${gB}islandsInvite`)
                })]
              })
            }, DD.baf2InvitableId)
          }))
        }), OD && (0, Ui.jsx)(pS, {
          note: OD,
          t: SD
        }), (0, Ui.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ui.jsx)(Uf.i, {
            onClick: QD,
            children: SD(`${gB}islandsDone`)
          })
        })]
      })
    }

    function UB(DD) {
      let {
        openSocial: CD,
        t: cD
      } = DD;
      return (0, Ui.jsxs)(Ui.Fragment, {
        children: [(0, Ui.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: cD(CD ? `${gB}islandsInviteNobody` : `${gB}islandsInviteNobodyGuest`)
        }), CD && (0, Ui.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Ui.jsx)(Uf.i, {
            onClick: CD,
            children: cD("socialBar:social")
          })
        })]
      })
    }

    function xB(DD) {
      let {
        className: CD,
        text: cD,
        ConfirmButton: pD,
        confirmLabel: iD,
        canConfirm: fD,
        send: bD,
        done: QD,
        t: wD
      } = DD;
      const SD = (0, ID.useRef)(null);
      CS(SD);
      const BD = () => {
        QD(null)
      };
      return (0, Ui.jsxs)("div", {
        ref: SD,
        tabIndex: -1,
        className: np()("Baf2IslandForm", CD),
        ...rw(BD),
        children: [(0, Ui.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: cD
        }), (0, Ui.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ui.jsx)(pD, {
            disabled: !fD,
            onClick: () => {
              fD && QD(bD())
            },
            children: iD
          }), (0, Ui.jsx)(Uf.i, {
            onClick: BD,
            children: wD(`${gB}islandsCancel`)
          })]
        })]
      })
    }

    function qB(DD) {
      return "hidden" !== DD
    }

    function JB(DD) {
      var CD, cD;
      let {
        card: pD,
        keepOwn: iD,
        blocked: fD,
        maxIslands: bD,
        serverNowMs: QD,
        nowMs: wD,
        actions: SD,
        full: BD,
        waits: yD,
        answered: MD,
        mode: tD,
        setMode: ZD,
        pending: oD,
        onSent: vD,
        switchTo: ND,
        leave: gD,
        coopOn: XD,
        openSocial: mD,
        t: nD
      } = DD;
      const OD = sf(),
        PD = pD.baf2IslandActive,
        HD = PD ? null : function(DD, CD) {
          if (DD <= 0) return null;
          const cD = CD - DD;
          if (cD < vi) return [`${nw}islandsPlayedJustNow`];
          if (cD < Ow) return [`${nw}islandsPlayedMinutes`, {
            minutes: String(Math.floor(cD / vi))
          }];
          if (cD < Pw) return [`${nw}islandsPlayedHours`, {
            hours: String(Math.floor(cD / Ow))
          }];
          const ID = Math.floor(cD / Pw);
          return 1 === ID ? [`${nw}islandsPlayedDay`] : [`${nw}islandsPlayedDays`, {
            days: String(ID)
          }]
        }(pD.baf2IslandLastPlayedMs, QD),
        UD = void 0 === (xD = pD.baf2IslandItems) ? null : 0 === xD ? [`${nw}islandsItemsNone`] : 1 === xD ? [`${nw}islandsItemsOne`] : [`${nw}islandsItems`, {
          count: String(xD)
        }];
      var xD;
      const qD = function(DD) {
          return DD ? 1 === DD ? [`${nw}islandsWaitingOne`] : [`${nw}islandsWaiting`, {
            count: String(DD)
          }] : null
        }(pD.baf2IslandWaiting),
        JD = pD.baf2IslandUnreadable,
        KD = pD.baf2IslandCoop,
        aD = Ww(pD, SD, iD, BD, XD, fD),
        VD = (0, ID.useRef)(null);
      Fw(null !== tD, VD);
      const zD = () => {
          var DD;
          ZD(null), null === (DD = VD.current) || void 0 === DD || DD.focus()
        },
        jD = (DD, CD) => {
          zD(), null !== DD && vD(DD, CD)
        },
        lD = (DD, CD) => nD(`${gB}${DD}`, {
          time: ni(nD, CD)
        });
      return (0, Ui.jsxs)("li", {
        ref: VD,
        tabIndex: -1,
        className: np()("Baf2IslandCard", {
          Active: PD,
          Pending: oD,
          Shared: void 0 !== KD
        }),
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Ui.jsx)("strong", {
            className: "Baf2IslandName",
            children: pD.baf2IslandName
          }), PD && (0, Ui.jsx)("span", {
            className: "Baf2IslandBadge",
            children: nD(`${gB}islandsOnThis`)
          }), KD && (0, Ui.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: nD(`${gB}islandsShared`)
          })]
        }), "member" === (null === KD || void 0 === KD ? void 0 : KD.baf2CoopRole) && (0, Ui.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Rw(nD, `${gB}islandsSharedBy`, {
            owner: KD.baf2CoopOwner
          })
        }), void 0 !== JD && (0, Ui.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: nD("newer" === JD ? `${gB}islandsUnreadable` : `${gB}islandsDamaged`)
        }), "corrupt" === JD && BD && (0, Ui.jsx)("p", {
          className: "Baf2IslandStats",
          children: nD(`${gB}islandsDamagedFull`)
        }), void 0 === JD && (0, Ui.jsxs)(Ui.Fragment, {
          children: [(0, Ui.jsx)(IS, {
            tier: pD.baf2IslandTier,
            t: nD
          }), (0, Ui.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Ui.jsx)("span", {
              children: 1 === pD.baf2IslandQuestsDone ? nD(`${gB}islandsQuestsDoneOne`) : nD(`${gB}islandsQuestsDone`, {
                count: String(pD.baf2IslandQuestsDone)
              })
            }), (0, Ui.jsx)("span", {
              children: 1 === pD.baf2IslandMachines ? nD(`${gB}islandsMachinesOne`) : nD(`${gB}islandsMachines`, {
                count: String(pD.baf2IslandMachines)
              })
            }), UD && (0, Ui.jsx)("span", {
              children: nD(UD[0], UD[1])
            }), qD && (0, Ui.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: nD(qD[0], qD[1])
            }), HD && (0, Ui.jsx)("span", {
              children: nD(HD[0], HD[1])
            })]
          })]
        }), KD && void 0 === KD.baf2CoopState && "people" !== tD && (0, Ui.jsx)(OB, {
          members: KD.baf2CoopMembers,
          t: nD
        }), null === tD && (0, Ui.jsx)(PB, {
          card: pD,
          answered: MD,
          nowMs: wD,
          t: nD
        }), aD.note && (0, Ui.jsx)(pS, {
          note: aD.note,
          className: np()({
            Unreachable: void 0 !== (null === KD || void 0 === KD ? void 0 : KD.baf2CoopState)
          }),
          t: nD
        }), "rename" === tD && (0, Ui.jsx)(mB, {
          card: pD,
          canRename: "enabled" === aD.rename,
          done: jD,
          t: nD
        }), "delete" === tD && (0, Ui.jsx)(nB, {
          card: pD,
          canDelete: "enabled" === aD.delete,
          done: DD => {
            jD(DD, KD ? "delete" : void 0)
          },
          t: nD
        }), "people" === tD && (0, Ui.jsx)(HB, {
          card: pD,
          view: aD,
          blocked: fD,
          maxIslands: bD,
          answered: MD,
          nowMs: wD,
          done: zD,
          openSocial: mD,
          t: nD
        }), "leave" === tD && (0, Ui.jsx)(xB, {
          className: "Leave",
          text: Rw(nD, `${gB}islandsLeaveConfirm`, {
            island: pD.baf2IslandName,
            owner: null !== (CD = null === (cD = pD.baf2IslandCoop) || void 0 === cD ? void 0 : cD.baf2CoopOwner) && void 0 !== CD ? CD : ""
          }),
          ConfirmButton: Uf.J,
          confirmLabel: nD(`${gB}islandsLeaveYes`),
          canConfirm: "enabled" === aD.leave,
          send: () => XB(OD, pD),
          done: DD => {
            jD(DD, "leave"), null !== DD && PD && gD()
          },
          t: nD
        }), "unshare" === tD && (0, Ui.jsx)(xB, {
          className: "Unshare",
          text: Rw(nD, `${gB}islandsStopSharingConfirm`, {
            island: pD.baf2IslandName
          }),
          ConfirmButton: Uf.r,
          confirmLabel: nD(`${gB}islandsStopSharing`),
          canConfirm: "enabled" === aD.unshare,
          send: () => OD.sendIslandEdit(`baf2coopunshare ${pD.baf2IslandId}`),
          done: DD => {
            jD(DD), null !== DD && gD()
          },
          t: nD
        }), null === tD && !oD && (0, Ui.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": pD.baf2IslandName,
          children: [qB(aD.switch) && (0, Ui.jsx)(Uf.r, {
            disabled: "enabled" !== aD.switch,
            onClick: ND,
            children: "tryAgain" === aD.switchLabel ? nD(`${gB}islandsTryAgain`) : yD.switch > 0 ? lD("islandsSwitchIn", yD.switch) : nD(`${gB}islandsSwitch`)
          }), qB(aD.rename) && (0, Ui.jsx)(Uf.i, {
            disabled: "enabled" !== aD.rename,
            onClick: () => {
              ZD("rename")
            },
            children: nD(`${gB}islandsRename`)
          }), qB(aD.people) && (0, Ui.jsx)(Uf.i, {
            disabled: "enabled" !== aD.people,
            onClick: () => {
              ZD("people")
            },
            children: nD("players" === aD.peopleLabel ? `${gB}islandsPlayersButton` : `${gB}islandsInviteButton`)
          }), qB(aD.unshare) && (0, Ui.jsx)(Uf.i, {
            disabled: "enabled" !== aD.unshare,
            onClick: () => {
              ZD("unshare")
            },
            children: nD(`${gB}islandsStopSharing`)
          }), qB(aD.dismiss) && (0, Ui.jsx)(Uf.i, {
            disabled: "enabled" !== aD.dismiss,
            onClick: () => {
              vD(XB(OD, pD), "dismiss"), PD && gD()
            },
            children: nD(`${gB}islandsDismiss`)
          }), qB(aD.leave) && (0, Ui.jsx)(Uf.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== aD.leave,
            onClick: () => {
              ZD("leave")
            },
            children: PD && yD.switch > 0 ? lD("islandsLeaveIn", yD.switch) : nD(`${gB}islandsLeave`)
          }), qB(aD.delete) && (0, Ui.jsx)(Uf.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== aD.delete,
            onClick: () => {
              ZD("delete")
            },
            children: yD.change > 0 && aD.deleteWaits ? lD("islandsDeleteIn", yD.change) : nD(`${gB}islandsDelete`)
          })]
        })]
      })
    }
    const KB = "buildAFactory2Game:";

    function aB(DD) {
      let {
        invite: CD,
        actions: cD,
        full: pD,
        maxIslands: iD,
        waitSeconds: fD,
        focus: bD,
        focused: QD,
        join: wD,
        decline: SD,
        t: BD
      } = DD;
      const [yD, MD] = (0, ID.useState)(!1), tD = (0, ID.useRef)(null);
      Fw(yD, tD), (0, ID.useEffect)((() => {
        var DD;
        bD && (MD(!0), null === (DD = tD.current) || void 0 === DD || DD.focus(), QD())
      }), [bD, QD]);
      const ZD = function(DD, CD, cD, ID, pD) {
          return cD ? {
            join: !1,
            note: {
              key: `${nw}islandsJoinTooMany`,
              params: {
                max: String(ID)
              }
            }
          } : DD.baf2InvitePlayers >= pD ? {
            join: !1,
            note: {
              key: `${nw}islandsJoinFull`
            }
          } : {
            join: CD.switch,
            note: null
          }
        }(CD, cD, pD, iD, 10),
        oD = CD.baf2InviteIsland,
        vD = CD.baf2InvitePlayers,
        ND = () => {
          var DD;
          MD(!1), null === (DD = tD.current) || void 0 === DD || DD.focus()
        },
        gD = fD > 0 && null === ZD.note ? BD(`${KB}islandsJoinIn`, {
          time: ni(BD, fD)
        }) : BD(`${KB}islandsJoin`);
      return (0, Ui.jsxs)("li", {
        ref: tD,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...yD ? rw(ND) : {},
        children: [(0, Ui.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Ui.jsx)("strong", {
            className: "Baf2IslandName",
            children: oD
          })
        }), (0, Ui.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Rw(BD, `${KB}islandsInvitedBy`, {
            owner: CD.baf2InviteOwner
          })
        }), (0, Ui.jsx)(IS, {
          tier: CD.baf2InviteTier,
          t: BD
        }), (0, Ui.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Ui.jsx)("span", {
            children: 1 === vD ? BD(`${KB}islandsPlayersCountOne`) : BD(`${KB}islandsPlayersCount`, {
              count: String(vD)
            })
          })
        }), ZD.note && (0, Ui.jsx)(pS, {
          note: ZD.note,
          t: BD
        }), yD && (0, Ui.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Rw(BD, `${KB}islandsJoinConfirm`, {
            island: oD
          })
        }), !yD && (0, Ui.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": oD,
          children: [(0, Ui.jsx)(Uf.r, {
            disabled: !ZD.join,
            onClick: () => {
              var DD;
              MD(!0), null === (DD = tD.current) || void 0 === DD || DD.focus()
            },
            children: gD
          }), (0, Ui.jsx)(Uf.i, {
            onClick: SD,
            children: BD(`${KB}islandsDecline`)
          })]
        }), yD && (0, Ui.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Ui.jsx)(Uf.r, {
            disabled: !ZD.join,
            onClick: wD,
            children: BD(`${KB}islandsJoinYes`)
          }), (0, Ui.jsx)(Uf.i, {
            onClick: ND,
            children: BD(`${KB}islandsCancel`)
          })]
        })]
      })
    }

    function VB(DD) {
      let {
        invites: CD,
        actions: cD,
        full: ID,
        maxIslands: pD,
        waitSeconds: iD,
        focus: fD,
        focused: bD,
        leave: QD,
        declined: wD,
        t: SD
      } = DD;
      const BD = sf();
      return (0, Ui.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Ui.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: SD(`${KB}islandsInvitesTitle`)
        }), (0, Ui.jsx)("ul", {
          className: "Baf2IslandCards",
          children: CD.map((DD => {
            const CD = DD.baf2InviteId;
            return (0, Ui.jsx)(aB, {
              invite: DD,
              actions: cD,
              full: ID,
              maxIslands: pD,
              waitSeconds: iD,
              focus: fD === CD,
              focused: bD,
              join: () => {
                BD.send(`baf2coopaccept ${CD}`), QD()
              },
              decline: () => {
                BD.send(`baf2coopdecline ${CD}`), wD(CD)
              },
              t: SD
            }, CD)
          }))
        })]
      })
    }
    const zB = "buildAFactory2Game:";

    function jB(DD) {
      let {
        cards: CD,
        activeName: cD,
        canStart: pD,
        waitSeconds: iD,
        leave: fD,
        t: bD
      } = DD;
      const QD = sf(),
        [wD, SD] = (0, ID.useState)(!1),
        [BD, yD] = (0, ID.useState)(""),
        MD = (0, ID.useRef)(null);
      Fw(wD, MD), (0, ID.useEffect)((() => {
        var DD;
        wD && (null === (DD = MD.current) || void 0 === DD || DD.focus())
      }), [wD]);
      const tD = qw(CD),
        ZD = Uw(BD),
        oD = xw(ZD),
        vD = () => {
          pD && !oD && (QD.send("" === ZD || ZD === tD ? uD : `${uD} ${ZD}`), fD())
        },
        ND = () => {
          var DD;
          SD(!1), null === (DD = MD.current) || void 0 === DD || DD.focus()
        };
      return (0, Ui.jsxs)("li", {
        ref: MD,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...wD ? rw(ND) : {},
        children: [(0, Ui.jsx)("strong", {
          className: "Baf2IslandName",
          children: bD(`${zB}islandsNewTitle`)
        }), !wD && (0, Ui.jsx)("p", {
          className: "Baf2IslandStats",
          children: bD(`${zB}islandsNewNote`)
        }), wD && (0, Ui.jsxs)(Ui.Fragment, {
          children: [(0, Ui.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Rw(bD, `${zB}islandsNewConfirm`, {
              name: cD
            })
          }), (0, Ui.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [bD(`${zB}islandsNewNameLabel`), (0, Ui.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: BD,
              placeholder: tD,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Aw,
              onChange: DD => {
                yD(DD.target.value)
              },
              ...hw(vD, ND)
            })]
          }), oD && (0, Ui.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: bD(`${zB}islandsNameReserved`)
          })]
        }), (0, Ui.jsxs)("div", {
          className: np()("Baf2IslandButtons", {
            Stacked: wD
          }),
          children: [(0, Ui.jsx)(Uf.r, {
            disabled: !pD || wD && oD,
            onClick: () => {
              if (!wD) return yD(tD), void SD(!0);
              vD()
            },
            children: iD > 0 ? bD(`${zB}islandsNewIn`, {
              time: ni(bD, iD)
            }) : bD(wD ? `${zB}islandsNewConfirmButton` : `${zB}islandsNew`)
          }), wD && (0, Ui.jsx)(Uf.i, {
            onClick: ND,
            children: bD(`${zB}islandsCancel`)
          })]
        })]
      })
    }

    function lB(DD) {
      var CD, cD;
      let {
        message: pD,
        arrivedAtMs: iD,
        close: fD,
        leave: bD,
        openSocial: QD
      } = DD;
      const wD = sf(),
        {
          t: SD
        } = (0, Up.F)(),
        BD = cS(1e3),
        [yD, MD] = (0, ID.useState)(null),
        [tD, ZD] = (0, ID.useState)(new Map),
        [oD, vD] = (0, ID.useState)(new Set),
        ND = pD.baf2IslandCards,
        gD = function(DD, CD, cD, ID) {
          return (null !== DD && void 0 !== DD ? DD : []).filter((DD => CD + DD.baf2InviteLeftMs > cD && !ID.has(DD.baf2InviteId)))
        }(pD.baf2IslandsInvites, iD, BD, oD),
        XD = gD.map((DD => DD.baf2InviteId)).join(" "),
        mD = (0, ID.useRef)(null),
        nD = DS(mD);
      (0, ID.useEffect)((() => {
        var DD, CD;
        null !== (DD = mD.current) && void 0 !== DD && DD.contains(document.activeElement) || (null === (CD = mD.current) || void 0 === CD || CD.focus())
      }), [pD, XD]), (0, ID.useEffect)((() => {
        ZD((DD => function(DD, CD, cD, ID) {
          const pD = new Map;
          for (const iD of CD) {
            const CD = DD.get(iD.baf2IslandId);
            CD && (void 0 !== CD.untilGone || ID < CD.answer) && lw(CD, iD, cD) && pD.set(iD.baf2IslandId, CD)
          }
          return pD.size === DD.size ? DD : pD
        }(DD, pD.baf2IslandCards, Date.now(), pD.baf2IslandsAnswered)))
      }), [pD]);
      const OD = Hw(iD, pD.baf2IslandsWaitMs, BD),
        PD = pD.baf2IslandsBlocked,
        HD = Vw(PD, OD),
        UD = function(DD, CD) {
          const cD = Vw(DD, 0);
          return {
            switch: cD.switch ? CD : 0,
            change: cD.change ? CD : 0
          }
        }(PD, OD),
        xD = ND.length >= pD.baf2IslandsMax,
        qD = ND.length > 0,
        JD = function(DD, CD, cD) {
          return DD + Math.max(0, cD - CD)
        }(pD.baf2IslandsNowMs, iD, BD),
        KD = null !== (CD = null === (cD = ND.find((DD => DD.baf2IslandActive))) || void 0 === cD ? void 0 : cD.baf2IslandName) && void 0 !== CD ? CD : "",
        aD = function(DD) {
          const CD = DD.filter(Yw).length;
          return CD <= 1 && CD < DD.length
        }(ND),
        VD = !0 === pD.baf2IslandsCoop,
        zD = function(DD, CD) {
          const cD = DD.find((DD => DD.baf2IslandActive)),
            ID = null === cD || void 0 === cD ? void 0 : cD.baf2IslandCoop;
          return cD && "member" === (null === ID || void 0 === ID ? void 0 : ID.baf2CoopRole) ? {
            key: `${nw}islandsKeepOwnMember`,
            names: {
              owner: ID.baf2CoopOwner,
              island: cD.baf2IslandName
            }
          } : {
            key: CD ? `${nw}islandsKeepOwn` : `${nw}islandsKeepOwnSolo`
          }
        }(ND, VD),
        [jD, lD] = (0, ID.useState)(null);
      (0, ID.useEffect)((() => {
        void 0 !== pD.baf2IslandsFocusInvite && lD(pD.baf2IslandsFocusInvite)
      }), [pD]);
      const LD = (0, ID.useCallback)((() => {
          lD(null)
        }), []),
        TD = yD ? ND.find((DD => DD.baf2IslandId === yD.id)) : void 0,
        GD = yD && TD && "hidden" !== Ww(TD, HD, aD, xD, VD, PD)[yD.mode] ? yD : null;
      return (0, Ui.jsx)(Hf.e, {
        close: fD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Ui.jsxs)("section", {
          ref: mD,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: nD ? {
            marginTop: `${nD.marginTop}px`,
            maxHeight: `${nD.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              children: [(0, Ui.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: SD(`${zB}islandsTitle`)
              }), qD && (0, Ui.jsx)("p", {
                children: SD(`${zB}islandsSubtitle`, {
                  count: String(ND.length),
                  max: String(pD.baf2IslandsMax)
                })
              })]
            }), (0, Ui.jsx)(Uf.l, {
              ariaLabel: SD(`${zB}islandsClose`),
              onClick: fD
            })]
          }), (0, Ui.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== PD && (0, Ui.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Rw(SD, Jw(PD, Kw(ND)), {
                island: KD
              })
            }), qD && gD.length > 0 && (0, Ui.jsx)(VB, {
              invites: gD,
              actions: HD,
              full: xD,
              maxIslands: pD.baf2IslandsMax,
              waitSeconds: UD.switch,
              focus: jD,
              focused: LD,
              leave: bD,
              declined: DD => {
                vD((CD => new Set(CD).add(DD)))
              },
              t: SD
            }), qD && (0, Ui.jsxs)(Ui.Fragment, {
              children: [xD && (0, Ui.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: SD(`${zB}islandsFull`, {
                  max: String(pD.baf2IslandsMax)
                })
              }), (0, Ui.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Rw(SD, zD.key, zD.names)
              }), (0, Ui.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [ND.map((DD => {
                  const CD = DD.baf2IslandId;
                  return (0, Ui.jsx)(JB, {
                    card: DD,
                    keepOwn: aD,
                    coopOn: VD,
                    openSocial: QD,
                    blocked: PD,
                    maxIslands: pD.baf2IslandsMax,
                    serverNowMs: JD,
                    nowMs: BD,
                    actions: HD,
                    full: xD,
                    waits: UD,
                    answered: pD.baf2IslandsAnswered,
                    mode: (null === GD || void 0 === GD ? void 0 : GD.id) === CD ? GD.mode : null,
                    setMode: DD => {
                      MD(null === DD ? null : {
                        id: CD,
                        mode: DD
                      })
                    },
                    pending: lw(tD.get(CD), DD, BD),
                    onSent: (cD, ID) => {
                      ZD((pD => {
                        const iD = {
                          atMs: Date.now(),
                          from: DD.baf2IslandName,
                          answer: cD
                        };
                        return new Map(pD).set(CD, ID ? {
                          ...iD,
                          untilGone: ID
                        } : iD)
                      }))
                    },
                    leave: bD,
                    switchTo: () => {
                      wD.send(`baf2islandswitch ${CD}`), bD()
                    },
                    t: SD
                  }, CD)
                })), !xD && (0, Ui.jsx)(jB, {
                  cards: ND,
                  activeName: KD,
                  canStart: HD.change,
                  waitSeconds: UD.change,
                  leave: bD,
                  t: SD
                })]
              })]
            })]
          })]
        })
      })
    }
    var LB = cD(4799);
    const TB = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        uI: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      GB = Object.keys(TB),
      RB = new Set([...Object.keys(uC), ...[...zC.Press.recipes, ...zC["Wire Mill"].recipes].map((DD => DD.output))]),
      kB = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      dB = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      YB = / Bar$|Alloy$/,
      WB = /Porkchop|Beef|Mutton|Venison|Steak/,
      sB = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const EB = (0, ID.memo)((function(DD) {
      let {
        item: CD,
        name: cD,
        amount: ID,
        selected: pD,
        small: iD,
        onPick: fD
      } = DD;
      return (0, Ui.jsxs)("button", {
        type: "button",
        className: np()("Baf2TermTile", {
          On: pD,
          Small: iD
        }),
        "aria-label": `${cD}: ${ID}`,
        "aria-pressed": pD,
        onClick: () => {
          fD(CD)
        },
        children: [(0, Ui.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: CD,
            amount: 0
          })
        }), (0, Ui.jsx)("span", {
          className: "Baf2TermCount",
          children: Xi(ID, 1e4)
        }), !iD && (0, Ui.jsx)("span", {
          className: "Baf2TermName",
          children: cD
        })]
      })
    }));

    function eB(DD) {
      let {
        store: CD,
        close: cD,
        send: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)(), {
        isTouchScreen: fD
      } = (0, gp.o)(["isTouchScreen"]);
      ! function(DD) {
        const [CD, cD] = (0, ID.useState)(DD.version);
        (0, ID.useEffect)((() => (cD(DD.version), DD.subscribe((() => {
          cD(DD.version)
        })))), [DD])
      }(CD);
      const [bD, QD] = (0, ID.useState)("all"), [wD, SD] = (0, ID.useState)(!1), [BD, yD] = (0, ID.useState)(""), [MD, tD] = (0, ID.useState)(""), [ZD, oD] = (0, ID.useState)(null), [vD, ND] = (0, ID.useState)(!1), [gD, XD, mD] = function() {
        const DD = (0, ID.useRef)(null),
          [CD, cD] = (0, ID.useState)(!1),
          pD = () => {
            const CD = DD.current;
            cD(null !== CD && CD.scrollLeft + CD.clientWidth < CD.scrollWidth - 1)
          };
        return (0, ID.useEffect)(pD), (0, ID.useEffect)((() => {
          const CD = DD.current;
          if (!CD) return;
          const cD = new ResizeObserver(pD);
          return cD.observe(CD), () => {
            cD.disconnect()
          }
        }), []), [DD, CD, pD]
      }(), nD = (0, ID.useMemo)((() => new Map), [iD]), OD = DD => {
        let CD = nD.get(DD);
        return void 0 === CD && (CD = function(DD, CD) {
          const cD = /^(.+) \((.+)\)$/.exec(DD);
          return cD ? CD(cD[2], cD[1]) : DD
        }(ii(iD, DD), ((DD, CD) => iD("buildAFactory2Game:terminalTileKind", {
          kind: DD,
          base: CD
        }))), nD.set(DD, CD)), CD
      }, PD = CD.isReadOnly(), HD = vD && !PD, UD = CD.recent(), xD = CD.items(), qD = MD.trim().toLowerCase(), JD = HD ? CD.heldItems(ZD) : ("recent" === bD ? UD : xD).filter((DD => {
        const CD = OD(DD);
        return ("all" === bD || "recent" === bD || function(DD) {
          return Mi(DD) ? "farm" : kB.test(DD) ? "nuclear" : YB.test(DD) ? "bars" : WB.test(DD) ? "farm" : dB.test(DD) ? "uI" : RB.has(DD) ? "parts" : sB.test(DD) ? "farm" : "other"
        }(DD) === bD) && ("" === qD || CD.toLowerCase().includes(qD)) && ("" === BD || CD.toUpperCase().startsWith(BD))
      })), KD = new Set(xD.map((DD => OD(DD).charAt(0).toUpperCase()))), aD = DD => HD ? CD.heldAmount(DD) : CD.amount(DD), VD = !HD && "recent" !== bD && UD.length > 0, zD = function(DD, CD) {
        return null !== DD && CD.includes(DD) ? DD : null
      }(ZD, VD ? [...JD, ...UD] : JD), jD = null === zD ? 0 : CD.amount(zD), lD = null === zD ? 0 : aD(zD), LD = (0, ID.useCallback)((DD => {
        oD((CD => CD === DD ? null : DD))
      }), []), TD = DD => lD > 0 || HD && null === zD && "fill" === DD && JD.length > 0, GD = HD ? [
        ["one", iD("buildAFactory2Game:terminalStoreOne")],
        ["stack", iD("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", iD(null === zD ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", iD("buildAFactory2Game:terminalTakeOne")],
        ["stack", iD("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", iD("buildAFactory2Game:terminalFill")]
      ], RD = HD ? iD("buildAFactory2Game:terminalStoreEmpty") : "" !== BD ? iD("buildAFactory2Game:terminalEmptyLetter", {
        letter: BD
      }) : "" !== qD ? iD("buildAFactory2Game:terminalEmptySearch", {
        query: MD
      }) : iD("buildAFactory2Game:terminalEmpty");
      return (0, Ui.jsx)(Hf.e, {
        close: cD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              children: [(0, Ui.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: iD(CD.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Ui.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Ui.jsx)("span", {
                  className: np()({
                    Off: HD
                  }),
                  children: iD("buildAFactory2Game:terminalSubtitle", {
                    count: String(CD.siloCount())
                  })
                }), !PD && (0, Ui.jsx)("span", {
                  className: np()({
                    Off: !HD
                  }),
                  children: iD("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !PD && (0, Ui.jsx)(LB.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: iD("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: iD("buildAFactory2Game:terminalModeStore")
              }],
              value: HD ? "store" : "take",
              onChange: DD => {
                ND("store" === DD), oD(null)
              },
              ariaLabel: iD("buildAFactory2Game:terminalModes")
            }), (0, Ui.jsx)(Uf.l, {
              onClick: cD
            })]
          }), (0, Ui.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Ui.jsxs)("div", {
              className: np()("Baf2TermTools", {
                Hidden: HD
              }),
              children: [(0, Ui.jsx)("div", {
                ref: gD,
                className: np()("Baf2TermChips", {
                  MoreRight: XD
                }),
                onScroll: mD,
                children: wD ? (0, Ui.jsxs)(Ui.Fragment, {
                  children: [(0, Ui.jsx)("button", {
                    type: "button",
                    "aria-label": iD("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      SD(!1), yD("")
                    },
                    children: "\u2190"
                  }), [...KD].sort().map((DD => (0, Ui.jsx)("button", {
                    type: "button",
                    className: np()({
                      On: BD === DD
                    }),
                    onClick: () => {
                      yD(BD === DD ? "" : DD)
                    },
                    children: DD
                  }, DD)))]
                }) : (0, Ui.jsxs)(Ui.Fragment, {
                  children: [(0, Ui.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      SD(!0)
                    },
                    children: iD("buildAFactory2Game:terminalLetters")
                  }), GB.map((DD => (0, Ui.jsx)("button", {
                    type: "button",
                    className: np()({
                      On: bD === DD
                    }),
                    onClick: () => {
                      QD(DD)
                    },
                    children: iD(TB[DD])
                  }, DD)))]
                })
              }), !fD && (0, Ui.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: MD,
                placeholder: iD("buildAFactory2Game:terminalSearch"),
                "aria-label": iD("buildAFactory2Game:terminalSearch"),
                onChange: DD => {
                  tD(DD.target.value)
                },
                onKeyDown: DD => {
                  DD.stopPropagation()
                }
              }), (0, Ui.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": iD("buildAFactory2Game:terminalResort"),
                title: iD("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  CD.resort()
                },
                children: "\u21c5"
              })]
            }), VD && (0, Ui.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Ui.jsx)("span", {
                children: iD(TB.recent)
              }), UD.map((DD => (0, Ui.jsx)(EB, {
                item: DD,
                name: OD(DD),
                amount: CD.amount(DD),
                selected: zD === DD,
                small: !0,
                onPick: LD
              }, DD)))]
            }), (0, Ui.jsx)("div", {
              className: "Baf2TermTiles",
              children: JD.length > 0 ? JD.map((DD => (0, Ui.jsx)(EB, {
                item: DD,
                name: OD(DD),
                amount: aD(DD),
                selected: zD === DD,
                onPick: LD
              }, DD))) : (0, Ui.jsx)("p", {
                className: "Baf2TermEmpty",
                children: RD
              })
            }), (0, Ui.jsxs)("div", {
              className: np()("Baf2TermActions", {
                Hidden: HD && 0 === JD.length
              }),
              children: [(0, Ui.jsx)("span", {
                className: "Baf2TermPicked",
                children: PD ? (0, Ui.jsxs)(Ui.Fragment, {
                  children: [null !== zD && jD > 0 ? OD(zD) : iD("buildAFactory2Game:terminalVisiting"), (0, Ui.jsx)("small", {
                    children: iD("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== zD ? (0, Ui.jsxs)(Ui.Fragment, {
                  children: [OD(zD), (0, Ui.jsx)("small", {
                    children: iD("buildAFactory2Game:terminalStored", {
                      amount: jD.toLocaleString()
                    })
                  })]
                }) : iD(HD ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !PD && GD.map((DD => {
                let [cD, ID] = DD;
                const iD = "fill" === cD ? Uf.o : Uf.i;
                return (0, Ui.jsx)(iD, {
                  className: "Baf2TermTake",
                  disabled: !TD(cD),
                  onClick: () => {
                    (DD => {
                      TD(DD) && pD(null === zD ? CD.putAll() : HD ? CD.put(DD, zD) : CD.take(DD, zD))
                    })(cD)
                  },
                  children: ID
                }, cD)
              }))]
            })]
          })]
        })
      })
    }

    function uB(DD) {
      let {
        kind: CD,
        icon: cD,
        label: ID,
        number: pD,
        preview: iD,
        note: fD,
        tone: bD = null,
        share: QD,
        onExplain: wD
      } = DD;
      return (0, Ui.jsxs)("button", {
        type: "button",
        className: np()("NxLane", CD, {
          Warn: "warn" === bD,
          Danger: "danger" === bD
        }),
        onClick: wD,
        children: [(0, Ui.jsxs)("span", {
          className: "NxLaneHead",
          children: [cD, (0, Ui.jsx)("span", {
            className: "NxLaneLabel",
            children: ID
          })]
        }), (0, Ui.jsxs)("span", {
          className: "NxLaneNum",
          children: [pD, iD && (0, Ui.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", iD]
          })]
        }), (0, Ui.jsx)("span", {
          className: "NxLaneNote",
          children: fD
        }), void 0 !== QD && (0, Ui.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, QD)) + "%"
          }
        })]
      })
    }

    function hB(DD) {
      let {
        kind: CD,
        step: cD,
        short: ID,
        planned: pD
      } = DD;
      return (0, Ui.jsx)("i", {
        className: np()("NxPipe", CD, `Step${cD}`, {
          Short: ID,
          Planned: pD
        }),
        "aria-hidden": "true"
      })
    }

    function rB(DD) {
      let {
        max: CD,
        bands: cD,
        ticks: ID,
        now: pD,
        settle: iD,
        settleTone: fD,
        onExplain: bD
      } = DD;
      const QD = DD => Math.max(0, Math.min(CD, DD)) / CD * 100 + "%";
      let wD = 0;
      return (0, Ui.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: bD,
        children: [(0, Ui.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [cD.map((DD => {
            const CD = {
              bottom: QD(wD),
              height: `calc(${QD(DD.upTo)} - ${QD(wD)})`
            };
            return wD = DD.upTo, (0, Ui.jsx)("i", {
              className: np()("NxGaugeBand", DD.kind),
              style: CD
            }, DD.kind)
          })), null !== pD && (0, Ui.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: QD(pD)
            }
          }), void 0 !== iD && null !== iD && (0, Ui.jsx)("i", {
            className: np()("NxGaugeSettle", {
              Bad: "bad" === fD
            }),
            style: {
              bottom: QD(iD)
            }
          })]
        }), (0, Ui.jsx)("span", {
          className: "NxGaugeTicks",
          children: ID.map((DD => (0, Ui.jsx)("small", {
            style: {
              bottom: QD(DD)
            },
            children: DD
          }, DD)))
        })]
      })
    }

    function AB(DD) {
      const [CD, cD] = (0, ID.useState)(null), [pD, iD] = (0, ID.useState)((() => {
        try {
          return null === window.localStorage.getItem(DD)
        } catch {
          return !1
        }
      })), fD = (0, ID.useRef)(null);
      (0, ID.useEffect)((() => () => {
        null !== fD.current && clearTimeout(fD.current)
      }), []);
      const bD = (0, ID.useCallback)((CD => {
          cD(CD), iD(!1);
          try {
            window.localStorage.setItem(DD, "1")
          } catch {}
          null !== fD.current && clearTimeout(fD.current), fD.current = setTimeout((() => {
            fD.current = null, cD(null)
          }), 5e3)
        }), [DD]),
        QD = (0, ID.useCallback)(((CD, cD) => {
          const ID = `${DD}:${CD}`;
          try {
            if (null !== window.localStorage.getItem(ID)) return;
            window.localStorage.setItem(ID, "1")
          } catch {
            return
          }
          bD(cD)
        }), [bD, DD]);
      return {
        explained: CD,
        hinting: pD,
        explain: bD,
        explainOnce: QD
      }
    }

    function FB(DD) {
      let {
        text: CD,
        tone: cD,
        explained: ID
      } = DD;
      return (0, Ui.jsxs)("p", {
        className: np()("NxStatus", null === ID ? cD : "Explain"),
        "aria-live": "polite",
        children: [null !== ID && (0, Ui.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== ID && void 0 !== ID ? ID : CD]
      })
    }
    const Dy = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Cy(DD, CD) {
      const cD = Number(DD[CD]);
      return 1 === cD || 2 === cD || 3 === cD ? cD : 0
    }

    function cy(DD) {
      return !!UQ("reactor", DD.baf2RxNeed) || void 0 !== DD.baf2RxLayout && DD.baf2RxNeed.some((DD => {
        let [CD, cD] = DD;
        return cD > 0 && Dy.includes(CD)
      }))
    }
    const Iy = "buildAFactory2Game:";

    function py(DD) {
      let {
        status: CD,
        store: cD,
        busy: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)();
      return function(DD) {
        return 0 !== (DD.baf2RxFlags & ZC) && (!DD.baf2RxFormed || void 0 !== DD.baf2RxLayout)
      }(CD) ? (0, Ui.jsx)(Uf.o, {
        disabled: !cy(CD) || ID,
        onClick: () => {
          cD.tap("fill", (() => {
            cD.send("fill")
          }))
        },
        children: pD(void 0 !== CD.baf2RxLayout ? `${Iy}rxFillLayout` : `${Iy}rxFill`)
      }) : null
    }

    function iy(DD) {
      let {
        status: CD,
        store: cD,
        readOnly: pD,
        bare: iD = !1
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), bD = CD.baf2RxLayout, [QD, wD, SD] = CD.baf2RxDims, BD = (0, ID.useMemo)((() => {
        if (void 0 === bD) return 0;
        const DD = Uint8Array.from(bD, ((DD, CD) => Cy(bD, CD)));
        return pQ([QD - 2, wD - 2, SD - 2], DD).max
      }), [bD, QD, wD, SD]);
      return void 0 === bD ? null : (0, Ui.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!iD && (0, Ui.jsx)("span", {
          className: "Baf2RxHint",
          children: fD(`${Iy}rxLayoutLine`, {
            amount: zQ(BD)
          })
        }), !pD && (0, Ui.jsx)(Uf.i, {
          onClick: () => {
            cD.send("layout", 0)
          },
          children: fD(`${Iy}rxLayoutHide`)
        })]
      })
    }
    const fy = "buildAFactory2Game:",
      by = {
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

    function Qy(DD) {
      let {
        id: CD,
        title: cD,
        body: ID,
        bodyParams: pD,
        yes: iD,
        cancel: fD,
        confirm: bD
      } = DD;
      const {
        t: QD
      } = (0, Up.F)();
      return (0, Ui.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": CD,
        children: [(0, Ui.jsx)("h3", {
          id: CD,
          children: QD(cD)
        }), (0, Ui.jsx)("p", {
          children: QD(ID, pD)
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Ui.jsx)(Uf.k, {
            onClick: fD,
            children: QD(`${fy}rxCancel`)
          }), (0, Ui.jsx)(Uf.J, {
            onClick: bD,
            children: QD(iD)
          })]
        })]
      })
    }

    function wy(DD) {
      const [CD, cD] = (0, ID.useState)((() => DD.get()));
      return (0, ID.useEffect)((() => (cD(DD.get()), DD.subscribe((() => {
        cD(DD.get())
      })))), [DD]), CD
    }

    function Sy(DD) {
      let {
        kind: CD,
        cap: cD,
        busy: pD = !1,
        whyNot: iD = null,
        apart: fD
      } = DD;
      const {
        t: bD
      } = (0, Up.F)(), [QD, wD] = (0, ID.useState)(!1), SD = null !== iD, BD = (0, ID.useRef)(null);
      if ((0, ID.useEffect)((() => {
          SD && wD(!1)
        }), [SD]), (0, ID.useLayoutEffect)((() => {
          var DD;
          const CD = null === (DD = BD.current) || void 0 === DD ? void 0 : DD.firstElementChild;
          SD ? null === CD || void 0 === CD || CD.setAttribute("aria-disabled", "true") : pD || null === CD || void 0 === CD || CD.removeAttribute("aria-disabled")
        })), !QD || SD) return (0, Ui.jsx)("span", {
        ref: BD,
        className: "Baf2RxApartWrap",
        children: (0, Ui.jsx)(Uf.k, {
          disabled: pD,
          className: np()({
            Baf2RxNotYet: SD
          }),
          onClick: () => {
            iD ? iD() : wD(!0)
          },
          children: bD(`${fy}rxApart`)
        })
      });
      const yD = "battery" === CD,
        MD = void 0 === cD ? `${fy}batApartConfirmBodyPlan` : `${fy}batApartConfirmBody`;
      return (0, Ui.jsx)(Qy, {
        id: `baf2ApartTitle_${CD}`,
        title: yD ? `${fy}batApartConfirmTitle` : `${fy}rxApartConfirmTitle`,
        body: yD ? MD : `${fy}rxApartConfirmBody`,
        bodyParams: void 0 === cD ? void 0 : {
          cap: cD
        },
        yes: `${fy}rxApart`,
        cancel: () => {
          wD(!1)
        },
        confirm: () => {
          wD(!1), fD()
        }
      })
    }

    function By(DD) {
      let {
        mood: CD,
        big: cD
      } = DD;
      const ID = by[CD],
        pD = [];
      return ID.rows.forEach(((DD, CD) => {
        for (let cD = 0; cD < DD.length; cD++) "." !== DD[cD] && pD.push((0, Ui.jsx)("rect", {
          x: cD + 1,
          y: CD + 1,
          width: 1,
          height: 1,
          fill: "w" === DD[cD] ? "#8fd3ff" : ID.colour
        }, `${cD},${CD}`))
      })), (0, Ui.jsxs)("svg", {
        className: np()("Baf2RxFace", {
          Big: cD,
          Alarm: "alarm" === CD
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Ui.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Ui.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), pD]
      })
    }

    function yy(DD) {
      return gi(DD, "+").replace("+", "")
    }

    function My(DD) {
      let {
        kind: CD,
        dims: cD,
        cap: ID,
        disabled: pD,
        compact: iD,
        resize: fD
      } = DD;
      const {
        t: bD
      } = (0, Up.F)(), {
        min: QD,
        max: wD
      } = Gc(CD), SD = Math.min(ID, wD), BD = [`${fy}rxWide`, `${fy}rxTall`, `${fy}rxDeep`], yD = {
        w: String(cD[0]),
        h: String(cD[1]),
        d: String(cD[2]),
        blocks: String(VQ(CD, cD))
      };
      return (0, Ui.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Ui.jsx)("div", {
          className: "Baf2RxSteppers",
          children: cD.map(((DD, CD) => {
            const iD = ID => {
                const pD = [cD[0], cD[1], cD[2]];
                pD[CD] = DD + ID, fD(pD)
              },
              yD = DD >= SD;
            return (0, Ui.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Ui.jsx)("button", {
                type: "button",
                "aria-label": bD(`${fy}rxSmaller`),
                disabled: pD || DD <= QD,
                onClick: () => {
                  iD(-1)
                },
                children: "\u2212"
              }), (0, Ui.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [DD, (0, Ui.jsx)("small", {
                  children: bD(BD[CD])
                })]
              }), (0, Ui.jsx)("button", {
                type: "button",
                "aria-label": bD(`${fy}rxBigger`),
                disabled: pD || yD,
                onClick: () => {
                  iD(1)
                },
                children: yD && ID < wD ? "\ud83d\udd12" : "+"
              })]
            }, BD[CD])
          }))
        }), !iD && (0, Ui.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === CD ? bD(`${fy}rxSizeLine`, {
            ...yD,
            water: String(aQ(cD))
          }) : bD(`${fy}batSizeLine`, yD)
        })]
      })
    }

    function ty(DD) {
      let {
        on: CD,
        label: cD,
        disabled: ID,
        locked: pD,
        pending: iD,
        toggle: fD
      } = DD;
      return (0, Ui.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": CD,
        disabled: ID,
        "aria-disabled": pD || void 0,
        className: np()("Baf2RxSwitch", {
          On: CD,
          Locked: pD,
          Pending: iD
        }),
        onClick: fD,
        children: [(0, Ui.jsx)("span", {
          className: "Baf2RxKnob"
        }), cD]
      })
    }
    const Zy = "buildAFactory2Game:",
      oy = .95;

    function vy(DD, CD) {
      return 0 !== (DD.baf2RxFlags & CD)
    }

    function Ny(DD) {
      return "cryo" === DD ? AD.j : AD.n
    }

    function gy(DD) {
      var CD, cD, ID, pD, iD, fD, bD, QD, wD;
      return DD.baf2RxCryo ? {
        HM: "cryo",
        usePerS: null !== (pD = DD.baf2RxCryoUse) && void 0 !== pD ? pD : 0,
        needPerS: null !== (iD = DD.baf2RxCryoNeed) && void 0 !== iD ? iD : 0,
        inPerS: null !== (fD = DD.baf2RxCryoIn) && void 0 !== fD ? fD : 0,
        stored: null !== (bD = DD.baf2RxCryoStored) && void 0 !== bD ? bD : 0,
        makersShort: null !== (QD = DD.baf2RxMixersShort) && void 0 !== QD ? QD : 0,
        waterBeside: null !== (wD = DD.baf2RxWaterUse) && void 0 !== wD ? wD : 0,
        pct: DD.baf2RxWater
      } : {
        HM: "water",
        usePerS: null !== (CD = DD.baf2RxWaterUse) && void 0 !== CD ? CD : 0,
        needPerS: null !== (cD = DD.baf2RxWaterNeed) && void 0 !== cD ? cD : 0,
        inPerS: DD.baf2RxWaterIn,
        stored: DD.baf2RxWaterStored,
        makersShort: null !== (ID = DD.baf2RxCondensersShort) && void 0 !== ID ? ID : 0,
        waterBeside: 0,
        pct: DD.baf2RxWater
      }
    }

    function Xy(DD) {
      const CD = "running" === DD.baf2RxState || "idle" === DD.baf2RxState;
      return DD.baf2RxFormed && DD.baf2RxTarget !== DD.baf2RxThrottle && CD ? my(DD, DD.baf2RxTarget) : null
    }

    function my(DD, CD) {
      const [cD, ID, pD, , , , iD, , fD] = DD.baf2RxStats, bD = vy(DD, MC), QD = gy(DD), wD = QD.pct / 100, {
        gen: SD,
        out: BD,
        load: yD
      } = function(DD, CD, cD, ID) {
        const pD = cD ? rb : 1,
          iD = Math.min(DD.fuelHeat * pD * Math.max(0, Math.min(1, CD)), DD.size * pD);
        return {
          gen: iD,
          out: iD,
          load: ZQ(iD, DD.cooling, ID)
        }
      }({
        fuelHeat: cD,
        cooling: ID,
        size: pD
      }, CD / 100, bD, wD), MD = vQ(iD || IQ(...DD.baf2RxDims)), tD = DD.baf2RxHeat, ZD = Math.abs(yD - tD), oD = function(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : AD.n;
        const iD = cD ? rb : 1,
          fD = Math.min(DD.fuelHeat * iD * CD / 100, DD.size * iD),
          bD = fD,
          QD = DD.fuelHeat * iD,
          wD = DD.cooling * tQ(ID.pct / 100),
          SD = QD > 0 && wD < DD.size * iD ? Math.floor(100 * wD / QD) : 100,
          BD = fD * pD - ID.inPerS;
        return {
          out: bD,
          hotAbove: SD >= 100 ? null : Math.max(0, SD),
          waterSecs: ID.pct >= 100 && BD > 1e-6 ? Math.max(0, ID.stored) / BD : null
        }
      }({
        fuelHeat: cD,
        cooling: ID,
        size: pD
      }, CD, bD, {
        pct: QD.pct,
        inPerS: QD.inPerS,
        stored: QD.stored
      }, Ny(QD.HM));
      return {
        pct: CD,
        out: BD,
        coolPerS: SD * Ny(QD.HM),
        pelletsPerMin: fD > 0 ? BD / fD * 60 : 0,
        settle: yD,
        settleS: ZD > 2 ? MD * Math.log(ZD / 2) : 0,
        overheatS: yD > 100 && tD < 100 ? MD * Math.log((yD - tD) / (yD - 100)) : null,
        hotAbove: oD.hotAbove,
        coolantSecs: oD.waterSecs
      }
    }

    function ny(DD) {
      return DD.baf2RxThrottle <= 0 && "running" !== DD.baf2RxState ? 0 : my(DD, DD.baf2RxTarget).pelletsPerMin / 60
    }

    function Oy(DD, CD) {
      if (DD <= 0 || CD <= 0) return 0;
      const cD = DD / CD;
      return cD < .25 ? 1 : cD < .5 ? 2 : cD < .8 ? 3 : 4
    }

    function Py(DD, CD) {
      const cD = {};
      for (const [ID, pD] of Object.entries(CD.params)) cD[ID] = "time" === ID ? ni(DD, pD) : "amount" === ID ? zQ(pD) : String(Math.round(pD));
      return DD(CD.key, cD)
    }

    function Hy(DD, CD) {
      return {
        key: `${Zy}${DD}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: CD
      }
    }

    function Uy(DD) {
      var CD;
      const cD = vy(DD, MC),
        ID = "running" === DD.baf2RxState,
        pD = mQ(DD),
        iD = DD.baf2RxHeat;
      var fD;
      if (ID && iD > ub) return {
        key: null !== (fD = pD.fix) && void 0 !== fD ? fD : `${Zy}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const bD = ID ? my(DD, DD.baf2RxTarget).coolantSecs : null,
        QD = "cryo" === gy(DD).HM;
      if (null !== bD && bD >= 1 && bD <= 30) return Hy(QD ? "rxWarnCryo" : "rxWarnWater", "bad");
      const wD = CQ(IQ(...DD.baf2RxDims)).waste,
        SD = ID ? xQ(DD, wD, ny(DD)).fullInS : null;
      if (null !== SD && SD <= 120 && DD.baf2RxWaste >= .5 * wD) return Hy("rxWarnWaste", "warn");
      if (null !== bD && bD >= 1) return Hy(QD ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: bD
      });
      const BD = "noWater" === DD.baf2RxState && iD > ub;
      if (DD.baf2RxDamage >= 1 && !BD) return Hy("rxDamagedHeals", "warn", {
        pct: DD.baf2RxDamage
      });
      if (DD.baf2RxCryoCut) return Hy("rxFix_cryoCut", "warn");
      const yD = gy(DD);
      if ("noWater" === DD.baf2RxState && "cryo" === yD.HM) return Hy("noWater" === DD.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const MD = pD.fix === `${Zy}rxFix_scramCool` || "idle" === DD.baf2RxState && DD.baf2RxTarget <= 0;
      if (MD && DD.baf2RxFuel <= 0) return Hy("rxFix_noFuel", "warn");
      if (MD && DD.baf2RxWaterIn <= 0 && (null !== (CD = DD.baf2RxCryoIn) && void 0 !== CD ? CD : 0) <= 0) return Hy("rxFix_noWater", "warn");
      const tD = pD.fix === `${Zy}rxFix_scramCool` ? OQ(DD) : null;
      if (null !== tD) return {
        key: tD.key,
        params: {
          amount: tD.amount
        },
        tone: "info"
      };
      if ("running" !== DD.baf2RxState && "idle" !== DD.baf2RxState && null !== pD.fix) return {
        key: pD.fix,
        params: {},
        tone: "scram" === DD.baf2RxState ? "info" : BD ? "bad" : "warn"
      };
      var ZD;
      if ("idle" === DD.baf2RxState && DD.baf2RxTarget <= 0) return {
        key: null !== (ZD = pD.fix) && void 0 !== ZD ? ZD : `${Zy}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const oD = DD.baf2RxCryoStarved;
      if ("cryo" === yD.HM && oD && yD.needPerS > 0 && yD.usePerS < oy * yD.needPerS) return Hy("noWater" === oD ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const vD = "cryo" === yD.HM,
        ND = yD.needPerS > 0 && yD.usePerS < oy * yD.needPerS;
      if (vD ? ND || yD.makersShort > 0 && yD.pct < 100 : yD.pct < 100) {
        const CD = vD && ND ? Math.floor(100 * yD.usePerS / yD.needPerS) : Math.min(100, yD.pct);
        if (yD.makersShort > 0) {
          return Hy(`${vD?"rxCryoShortLine":"rxWaterShortLine"}${1===yD.makersShort?"One":""}${!vD&&DD.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: CD,
            count: yD.makersShort
          })
        }
        return Hy(vD ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: CD
        })
      }
      const gD = function(DD) {
        const [CD, cD, ID] = DD.baf2RxStats, pD = gy(DD), iD = oQ({
          fuelHeat: CD,
          cooling: cD,
          size: ID
        }, "cryo" === pD.HM ? AD.d : 1, !0);
        return Math.max(0, iD * Ny(pD.HM) - pD.inPerS)
      }(DD);
      if (cD && gD > 0) return Hy("cryo" === yD.HM ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(gD)
      });
      if (iD >= yQ) return Hy("rxHotLine", "warn");
      const XD = my(DD, DD.baf2RxTarget);
      var mD;
      if (null !== XD.overheatS) return Hy("rxWillOverheat", "bad", {
        pct: DD.baf2RxTarget,
        time: XD.overheatS,
        safe: null !== (mD = XD.hotAbove) && void 0 !== mD ? mD : 100
      });
      if (Math.abs(XD.settle - iD) >= 3) return Hy("rxSettling", "info", {
        pct: DD.baf2RxTarget,
        heat: Math.round(XD.settle),
        time: XD.settleS
      });
      const nD = OQ(DD);
      if (null !== nD) return {
        key: nD.key,
        params: {
          amount: nD.amount
        },
        tone: "info"
      };
      const OD = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== CD && ("running" !== CD || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === DD.rods ? `${NQ}rxLimitNoRods` : `${NQ}rxLimit_${BQ(DD)}`
      }({
        rods: DD.baf2RxStats[3],
        ...nQ(DD)
      }, DD.baf2RxState, DD.baf2RxOut >= oy * DD.baf2RxMaxNow, !1);
      if (OD === `${Zy}rxLimit_size`) {
        const [CD, , cD, ID] = DD.baf2RxStats, pD = ID > 0 && CD > 0 ? Math.ceil(cD / (CD / ID) - 1e-9) : ID, iD = DD.baf2RxDims.every((DD => DD >= Gc("reactor").max));
        if (pD < ID) return Hy(iD ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: pD,
          have: ID
        });
        if (iD) return Hy("rxLimit_sizeMax", "info")
      }
      return null !== OD ? {
        key: OD,
        params: {},
        tone: "info"
      } : Hy("rxSteady", "ok", {
        pct: DD.baf2RxTarget
      })
    }

    function xy(DD) {
      var CD;
      if (DD.melted) return Hy("rxMeltedBody", "bad");
      if (-1 === DD.bad) return Hy("rxFix_noRoom", "warn");
      if (DD.bad > 0) return Hy(1 === DD.bad ? "rxBadOne" : "rxBad", "warn", {
        count: DD.bad
      });
      if (DD.left > 0) {
        const CD = 1 === DD.left ? "One" : "";
        return Hy(DD.canFill ? `rxPlanLeft${CD}` : `rxPlanLeftNoFill${CD}`, "info", {
          count: DD.left
        })
      }
      if (0 === DD.rods) return Hy("rxLimitNoRods", "warn");
      const cD = null !== (CD = DD.idle) && void 0 !== CD ? CD : 0;
      return cD > 0 ? Hy(1 === cD ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: cD
      }) : Hy("rxPlanReady", "ok")
    }

    function qy(DD) {
      return Math.floor(Math.max(0, DD[1] - 1) / 2)
    }

    function Jy(DD) {
      if (DD >= fQ && DD < bQ) {
        const CD = DD - fQ;
        return {
          key: 0 === CD ? `${Zy}rxWhy_rodAlone` : 1 === CD ? `${Zy}rxWhy_rodOne` : `${Zy}rxWhy_rod`,
          params: {
            count: String(CD),
            heat: String(Rb * (1 + kb * CD))
          }
        }
      }
      return DD === bQ ? {
        key: `${Zy}rxWhy_channel`,
        params: {
          amount: String(Yb)
        }
      } : DD === QQ ? {
        key: `${Zy}rxWhy_deadChannel`,
        params: {}
      } : DD === wQ ? {
        key: `${Zy}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Zy}rxWhy_core`,
        params: {}
      }
    }
    const Ky = "buildAFactory2Game:";

    function ay(DD, CD) {
      return 0 !== (DD.baf2RxFlags & CD)
    }

    function Vy(DD) {
      let {
        status: CD,
        pending: cD,
        store: ID,
        explain: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)(), fD = ay(CD, yC), bD = CD.baf2RxTarget, QD = CD.baf2RxThrottle, wD = function(DD) {
        return {
          press: () => {
            DD.throttlePress()
          },
          drag: CD => {
            DD.throttleDrag(CD)
          },
          release: () => {
            DD.throttleRelease()
          }
        }
      }(ID), SD = null === (BD = my(CD, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, BD - 10),
        red: BD
      };
      var BD;
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2RxThrottle", {
          Off: fD
        }),
        onClick: () => {
          fD && pD(`${Ky}rxWhy_startFirst`)
        },
        children: [(0, Ui.jsx)("span", {
          className: "HideNarrow",
          children: iD(`${Ky}rxThrottle`)
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Ui.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: bD,
            disabled: fD,
            style: fD ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": iD(`${Ky}rxThrottle`),
            onPointerDown: () => {
              wD.press();
              const DD = () => {
                window.removeEventListener("pointerup", DD), window.removeEventListener("pointercancel", DD), wD.release()
              };
              window.addEventListener("pointerup", DD), window.addEventListener("pointercancel", DD)
            },
            onKeyUp: wD.release,
            onChange: DD => {
              wD.drag(Number(DD.target.value))
            }
          }), (0, Ui.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${SD.amber}%, #ffb020 ${SD.amber}% ${SD.red}%, #ff3b30 ${SD.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Ui.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${QD}% + ${8*(1-QD/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Ui.jsxs)("b", {
          children: [`${bD}%`, (0, Ui.jsx)("i", {
            className: np()("Baf2RxPendingDot", {
              On: cD
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function zy(DD) {
      let {
        status: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), ID = my(CD, CD.baf2RxTarget), pD = gy(CD).HM, iD = cD("cryo" === pD ? `${Ky}rxRateCryo` : `${Ky}rxRateWater`, {
        rate: yy(ID.coolPerS)
      }), fD = cD(`${Ky}rxChain`, {
        pct: String(CD.baf2RxTarget),
        out: zQ(ID.out),
        heat: String(Math.round(ID.settle)),
        coolant: iD
      }), bD = null !== ID.coolantSecs ? ID.coolantSecs >= 1 ? cD("cryo" === pD ? `${Ky}rxThrottleCryoOut` : `${Ky}rxThrottleWaterOut`, {
        time: ni(cD, ID.coolantSecs)
      }) : cD("cryo" === pD ? `${Ky}rxThrottleCryoDry` : `${Ky}rxThrottleWaterDry`) : null;
      return (0, Ui.jsxs)("p", {
        className: "Baf2RxChain",
        children: [fD, null !== bD ? (0, Ui.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", bD]
        }) : (0, Ui.jsxs)("span", {
          children: [" \xb7 ", cD(`${Ky}rxChainPellets`, {
            amount: jQ(ID.pelletsPerMin)
          })]
        })]
      })
    }

    function jy(DD) {
      let {
        view: CD,
        store: cD,
        explain: pD,
        explainOnce: iD
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), {
        status: bD
      } = CD, [QD, wD] = (0, ID.useState)(!1), SD = ay(bD, yC), yD = ay(bD, MC), MD = !ay(bD, oC), tD = bD.baf2RxHeat > 100;
      return (0, Ui.jsxs)(Ui.Fragment, {
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Ui.jsx)(Vy, {
            status: bD,
            pending: CD.throttlePending,
            store: cD,
            explain: pD
          }), (0, Ui.jsx)(ty, {
            on: yD,
            label: yD ? fD(`${Ky}rxOdLeft`, {
              time: ni(fD, bD.baf2RxOdLeft)
            }) : fD(`${Ky}rxOverdrive`),
            locked: MD,
            pending: 0 !== (CD.pendingFlags & MC),
            toggle: () => {
              MD ? pD(`${Ky}rxOverdriveTier`, {
                amount: String(BD(13))
              }) : yD ? cD.setFlag(MC, !1) : CD.odConfirmed ? cD.setFlag(MC, !0) : wD(!0)
            }
          }), SD || CD.startGuard ? (0, Ui.jsx)(Uf.r, {
            disabled: CD.busy.has("start") || CD.startGuard,
            onClick: () => {
              cD.tap("start", (() => {
                cD.setFlag(yC, !1)
              }))
            },
            children: fD(CD.startGuard ? `${Ky}rxStarting` : `${Ky}rxStart`)
          }) : (0, Ui.jsx)("span", {
            className: np()("Baf2RxScram", {
              Pulse: tD
            }),
            children: (0, Ui.jsx)(Uf.J, {
              onClick: () => {
                cD.shutDown()
              },
              children: fD(`${Ky}rxScram`)
            })
          })]
        }), (0, Ui.jsx)(zy, {
          status: bD
        }), QD && (0, Ui.jsx)(Qy, {
          id: "baf2RxOdTitle",
          title: `${Ky}rxOdConfirmTitle`,
          body: `${Ky}rxOdConfirmBody`,
          yes: `${Ky}rxOdConfirm`,
          cancel: () => {
            wD(!1)
          },
          confirm: () => {
            wD(!1), cD.tap("odConfirm", (() => {
              cD.confirmOverdrive(), cD.setFlag(MC, !0)
            })), iD(`${Ky}rxWhy_overdrive`)
          }
        })]
      })
    }

    function ly(DD) {
      let {
        view: CD,
        store: cD,
        keepSize: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), {
        status: iD
      } = CD;
      return (0, Ui.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Ui.jsx)(My, {
          kind: "reactor",
          dims: CD.dims,
          cap: iD.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: DD => {
            cD.resize(DD)
          }
        }), ID ? (0, Ui.jsx)(Uf.k, {
          onClick: ID,
          children: pD(`${Ky}rxKeepSize`)
        }) : (0, Ui.jsxs)(Ui.Fragment, {
          children: [(0, Ui.jsx)(ty, {
            on: CD.guide,
            label: pD(`${Ky}rxGuide`),
            toggle: () => {
              cD.toggleGuide()
            }
          }), ay(iD, NC) && (0, Ui.jsx)(ty, {
            on: CD.starter,
            label: pD(`${Ky}rxStarter`),
            toggle: () => {
              cD.toggleStarter()
            }
          }), (0, Ui.jsx)(py, {
            status: iD,
            store: cD,
            busy: CD.busy.has("fill")
          })]
        })]
      })
    }

    function Ly(DD) {
      let {
        need: CD,
        kind: cD = "reactor",
        explain: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), iD = CD.length <= 3, fD = CD.reduce(((DD, CD) => {
        let [, cD] = CD;
        return DD + cD
      }), 0);
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2RxParts", {
          Compact: !iD
        }),
        onClick: () => {
          ID("battery" === cD ? `${Ky}batWhy_store` : `${Ky}rxShellHint`)
        },
        children: [fD > 0 && (0, Ui.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === fD ? pD(`${Ky}rxBlocksOne`) : pD(`${Ky}rxBlocks`, {
            blocks: String(fD)
          })
        }), 0 === CD.length ? (0, Ui.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: pD("battery" === cD ? `${Ky}batPartsDone` : `${Ky}rxShellDone`)
        }) : HQ(CD).map((DD => {
          let [CD, cD, ID] = DD;
          const fD = function(DD) {
            const CD = KQ[DD];
            if (void 0 === CD) return null;
            const [cD, ID, pD] = qQ[CD].colour.map((DD => Math.round(255 * DD)));
            return `rgb(${cD}, ${ID}, ${pD})`
          }(CD);
          return (0, Ui.jsxs)("span", {
            className: "Baf2RxChip",
            title: ii(pD, CD),
            children: [(0, Ui.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === fD ? {
                visibility: "hidden"
              } : {
                background: fD
              },
              title: pD(`${Ky}rxShopGhost`)
            }), (0, Ui.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Ui.jsx)(qp.d, {
                itemName: CD,
                amount: 0
              })
            }), (0, Ui.jsx)("span", {
              className: "Baf2RxChipName",
              children: iD ? `${cD} ${bD=ii(pD,CD),bD.replace(/^(Reactor|Battery) (?=\S)/,"")}` : cD
            }), ID >= cD ? (0, Ui.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Ui.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: iD ? pD(`${Ky}rxShopShort`, {
                count: String(cD - ID)
              }) : "\u2212" + (cD - ID)
            })]
          }, CD);
          var bD
        }))]
      })
    }
    const Ty = "buildAFactory2Game:";

    function Gy(DD) {
      var CD, cD, pD, iD, fD, bD, QD;
      let {
        store: wD,
        close: SD
      } = DD;
      const {
        t: BD
      } = (0, Up.F)(), yD = sf(), MD = wy(wD), {
        explained: tD,
        explain: ZD
      } = AB("baf2RxExplained"), oD = (0, ID.useCallback)(((DD, CD) => {
        ZD(BD(DD, CD))
      }), [ZD, BD]), vD = null === MD || void 0 === MD ? void 0 : MD.status, ND = !0 === (null === vD || void 0 === vD ? void 0 : vD.baf2BatReadOnly), gD = DD => {
        vD && yD.send(BC(vD.baf2BatAt, DD))
      }, [XD, mD, nD] = null !== (CD = null === MD || void 0 === MD ? void 0 : MD.dims) && void 0 !== CD ? CD : [0, 0, 0], OD = zQ(null !== (cD = null === MD || void 0 === MD ? void 0 : MD.LB) && void 0 !== cD ? cD : 0), PD = !0 === (null === vD || void 0 === vD ? void 0 : vD.baf2BatFormed), HD = null !== (pD = null === vD || void 0 === vD ? void 0 : vD.baf2BatStored) && void 0 !== pD ? pD : 0, UD = Math.max(1, null !== (iD = null === vD || void 0 === vD ? void 0 : vD.baf2BatIslandCap) && void 0 !== iD ? iD : 1), xD = Math.min(100, 100 * HD / UD), qD = null === vD || void 0 === vD ? void 0 : vD.baf2BatNetPerS, JD = function(DD, CD, cD) {
        return cD > 0 && CD >= cD ? "full" : void 0 !== DD && DD >= .05 ? "charging" : void 0 !== DD && DD <= -.05 && CD > 0 ? "draining" : "steady"
      }(qD, HD, null !== (fD = null === vD || void 0 === vD ? void 0 : vD.baf2BatIslandCap) && void 0 !== fD ? fD : 0), KD = null !== (bD = null === vD || void 0 === vD ? void 0 : vD.baf2BatMadePerS) && void 0 !== bD ? bD : 0, aD = null !== (QD = null === vD || void 0 === vD ? void 0 : vD.baf2BatUsedPerS) && void 0 !== QD ? QD : 0;
      let VD, zD = {},
        jD = "info";
      if (vD)
        if (PD) "charging" === JD ? (VD = `${Ty}batLine_charging`, zD = {
          time: ni(BD, (UD - HD) / Math.max(.05, null !== qD && void 0 !== qD ? qD : 0))
        }, jD = "ok") : "draining" === JD ? (VD = `${Ty}batLine_draining`, zD = {
          time: ni(BD, HD / Math.max(.05, -(null !== qD && void 0 !== qD ? qD : 0)))
        }, jD = "warn") : VD = "full" === JD ? `${Ty}batLine_full` : HD <= 0 && aD > 0 ? `${Ty}batLine_empty` : `${Ty}batLine_steady`;
        else {
          var lD;
          const DD = xy({
            left: vD.baf2BatNeed.reduce(((DD, CD) => {
              let [, cD] = CD;
              return DD + cD
            }), 0),
            bad: vD.baf2BatBad,
            rods: 1,
            canFill: !0 === vD.baf2BatCanFill,
            melted: !1
          });
          VD = DD.key, zD = {
            count: String(null !== (lD = DD.params.count) && void 0 !== lD ? lD : 0)
          }, jD = DD.tone
        }
      else VD = `${Ty}batLine_steady`;
      const LD = Math.max(KD, aD, 1);
      return (0, Ui.jsx)(Hf.e, {
        close: SD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ui.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Ui.jsx)(qp.d, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Ui.jsxs)("div", {
                children: [(0, Ui.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: BD(`${Ty}batTitle`)
                }), vD && (0, Ui.jsxs)("p", {
                  className: np()("Baf2RxSubtitle", {
                    good: PD && "charging" === JD,
                    warn: PD && "draining" === JD
                  }),
                  children: [XD, "\xd7", mD, "\xd7", nD, " \xb7 ", BD(PD ? `${Ty}batState_${JD}` : `${Ty}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ui.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [vD && !ND && (0, Ui.jsx)(Sy, {
                kind: "battery",
                cap: PD ? OD : void 0,
                busy: null === MD || void 0 === MD ? void 0 : MD.busy.has("apart"),
                apart: () => {
                  wD.tap("apart", (() => {
                    gD("apart")
                  }))
                }
              }), (0, Ui.jsx)(Uf.l, {
                onClick: SD
              })]
            })]
          }), MD && vD && (0, Ui.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Ui.jsxs)("div", {
              className: np()("Baf2RxFlow Baf2BatFlow", {
                Plan: !PD
              }),
              children: [(0, Ui.jsx)(uB, {
                kind: "Power",
                label: BD(`${Ty}batMade`),
                number: PD ? `\u26a1 ${zQ(KD)}/s` : "\u2014",
                note: BD(`${Ty}batMadeNote`),
                share: PD ? KD / LD : void 0,
                onExplain: () => {
                  oD(`${Ty}batWhy_made`)
                }
              }), (0, Ui.jsx)(hB, {
                kind: "Power",
                step: PD ? Oy(KD, LD) : 0,
                planned: !PD
              }), (0, Ui.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  oD(`${Ty}batWhy_store`)
                },
                children: [(0, Ui.jsx)(rB, {
                  max: 100,
                  bands: [{
                    upTo: PD ? xD : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Ui.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Ui.jsx)("b", {
                    className: "Baf2BatStored",
                    children: PD ? BD(`${Ty}batStoredOf`, {
                      amount: zQ(HD),
                      cap: zQ(vD.baf2BatIslandCap)
                    }) : BD(`${Ty}batWillHold`, {
                      cap: OD
                    })
                  }), (0, Ui.jsx)("span", {
                    children: BD(`${Ty}batAdds`, {
                      cap: OD
                    })
                  }), PD && (0, Ui.jsx)("small", {
                    children: BD(`${Ty}batBreakNote`, {
                      cap: OD
                    })
                  })]
                })]
              }), (0, Ui.jsx)(hB, {
                kind: "Power",
                step: PD ? Oy(aD, LD) : 0,
                planned: !PD
              }), (0, Ui.jsx)(uB, {
                kind: "Power",
                label: BD(`${Ty}batUsed`),
                number: PD ? `\u26a1 ${zQ(aD)}/s` : "\u2014",
                note: BD(`${Ty}batUsedNote`),
                share: PD ? aD / LD : void 0,
                onExplain: () => {
                  oD(`${Ty}batWhy_used`)
                }
              })]
            }), (0, Ui.jsx)(FB, {
              text: BD(VD, zD),
              tone: jD,
              explained: tD
            }), ND ? (0, Ui.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: BD(`${Ty}rxNotYours`)
            }) : !PD && (0, Ui.jsxs)(Ui.Fragment, {
              children: [(0, Ui.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Ui.jsx)(My, {
                  kind: "battery",
                  dims: MD.dims,
                  cap: vD.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: DD => {
                    wD.resize(DD)
                  }
                }), (0, Ui.jsx)(ty, {
                  on: MD.guide,
                  label: BD(`${Ty}rxGuide`),
                  toggle: () => {
                    wD.toggleGuide()
                  }
                }), vD.baf2BatCanFill && (0, Ui.jsx)(Uf.o, {
                  disabled: !UQ("battery", vD.baf2BatNeed) || MD.busy.has("fill"),
                  onClick: () => {
                    wD.tap("fill", (() => {
                      gD("fill")
                    }))
                  },
                  children: BD(`${Ty}rxFill`)
                })]
              }), (0, Ui.jsx)(Ly, {
                need: vD.baf2BatNeed,
                kind: "battery",
                explain: oD
              })]
            })]
          })]
        })
      })
    }
    const Ry = "buildAFactory2Game:",
      ky = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function dy(DD, CD) {
      return DD === iQ ? null : CD ? "#4a4440" : DD < bQ ? ky[DD - fQ] : DD === bQ ? "#3fd0f0" : DD === QQ ? "#2c3e4c" : "#55585e"
    }

    function Yy(DD) {
      let {
        inner: CD,
        looks: cD,
        layer: ID,
        setLayer: pD,
        glow: iD,
        melted: fD,
        explain: bD
      } = DD;
      const {
        t: QD
      } = (0, Up.F)(), [wD, SD, BD] = CD, yD = Math.max(0, Math.min(SD - 1, ID)), MD = [];
      for (let ZD = 0; ZD < BD; ZD++)
        for (let DD = 0; DD < wD; DD++) {
          var tD;
          const CD = null !== (tD = cD[(yD * BD + ZD) * wD + DD]) && void 0 !== tD ? tD : iQ,
            ID = dy(CD, fD),
            pD = CD >= fQ && CD < bQ;
          MD.push(null === ID ? (0, Ui.jsx)("circle", {
            cx: DD + .5,
            cy: ZD + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${DD},${ZD}`) : (0, Ui.jsx)("rect", {
            x: DD + .06,
            y: ZD + .06,
            width: .88,
            height: .88,
            fill: ID,
            opacity: pD && !fD ? .5 + .5 * iD : 1,
            onClick: DD => {
              DD.stopPropagation();
              const cD = Jy(CD);
              bD(cD.key, cD.params)
            }
          }, `${DD},${ZD}`))
        }
      return (0, Ui.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Ui.jsx)("svg", {
          className: np()("Baf2RxMapGrid", {
            Melted: fD
          }),
          viewBox: `0 0 ${Math.max(1,wD)} ${Math.max(1,BD)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": QD(`${Ry}rxWhy_core`),
          onClick: () => {
            bD(`${Ry}rxWhy_core`, {})
          },
          children: MD
        }), SD > 1 && (0, Ui.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Ui.jsx)("button", {
            type: "button",
            "aria-label": QD(`${Ry}rxLayerDown`),
            disabled: yD <= 0,
            onClick: () => {
              pD(yD - 1)
            },
            children: "\u25bc"
          }), (0, Ui.jsxs)("span", {
            children: [(0, Ui.jsx)("span", {
              className: "HideNarrow",
              children: QD(`${Ry}rxLayer`, {
                n: String(yD + 1),
                of: String(SD)
              })
            }), (0, Ui.jsx)("span", {
              className: "ShowNarrow",
              children: QD(`${Ry}rxLayerShort`, {
                n: String(yD + 1),
                of: String(SD)
              })
            })]
          }), (0, Ui.jsx)("button", {
            type: "button",
            "aria-label": QD(`${Ry}rxLayerUp`),
            disabled: yD >= SD - 1,
            onClick: () => {
              pD(yD + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Wy = "buildAFactory2Game:",
      sy = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: hb,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: XQ,
        kind: "red"
      }],
      Ey = [50, hb, 100];

    function ey(DD) {
      let {
        stats: CD,
        t: cD,
        explain: ID
      } = DD;
      const pD = BQ(CD),
        iD = Math.max(1, CD.fuelHeat, CD.cooling, CD.size),
        fD = [
          ["fuel", `${Wy}rxBarRods`, CD.fuelHeat],
          ["cooling", `${Wy}rxBarCooling`, CD.cooling],
          ["size", `${Wy}rxBarSize`, CD.size]
        ];
      return (0, Ui.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          ID(`${Wy}rxWhy_bars`)
        },
        children: [(0, Ui.jsx)("span", {
          className: "Baf2RxMostLine",
          children: cD(`${Wy}rxMost`, {
            amount: zQ(Math.min(CD.fuelHeat, CD.cooling, CD.size))
          })
        }), (0, Ui.jsx)("span", {
          className: "Baf2RxMostBars",
          children: fD.map((DD => {
            let [CD, ID, fD] = DD;
            return (0, Ui.jsxs)("span", {
              className: np()("Baf2RxMostBar", CD, {
                Low: CD === pD
              }),
              children: [(0, Ui.jsx)("small", {
                children: cD(ID)
              }), (0, Ui.jsx)("i", {
                children: (0, Ui.jsx)("b", {
                  style: {
                    width: 100 * fD / iD + "%"
                  }
                })
              })]
            }, CD)
          }))
        })]
      })
    }

    function uy(DD) {
      var CD;
      let {
        view: cD,
        heat: pD,
        settle: iD,
        settleLine: fD,
        settleBad: bD,
        explain: QD
      } = DD;
      const {
        t: wD
      } = (0, Up.F)(), {
        status: SD
      } = cD, BD = SD.baf2RxAt.join(","), [yD, MD] = (0, ID.useState)((() => qy(cD.inner)));
      (0, ID.useEffect)((() => {
        MD(qy(cD.inner))
      }), [BD, cD.inner[1]]);
      const tD = null !== (CD = cD.plan) && void 0 !== CD ? CD : nQ(SD),
        ZD = cD.plan ? cD.plan.powerPerUnit : SD.baf2RxStats[8],
        oD = null === pD ? null : "alarm" === (vD = gQ(SD)) ? "red" : "hot" === vD ? "hot" : "warm" === vD ? "warm" : "cold";
      var vD;
      const ND = !SD.baf2RxFormed && function(DD, CD) {
          return 0 !== (DD.baf2RxFlags & CD)
        }(SD, tC),
        gD = SD.baf2RxDamage,
        XD = SD.baf2RxDamageTrend;
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2RxCore", null !== oD && void 0 !== oD ? oD : "plan"),
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Ui.jsx)(Yy, {
            inner: cD.inner,
            looks: cD.looks,
            layer: yD,
            setLayer: MD,
            glow: SD.baf2RxFormed ? SD.baf2RxThrottle / 100 : 1,
            melted: ND,
            explain: QD
          }), (0, Ui.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              QD(`${Wy}rxWhy_heat`)
            },
            children: [null !== pD ? (0, Ui.jsxs)(Ui.Fragment, {
              children: [(0, Ui.jsx)("b", {
                children: wD(`${Wy}rxHeatPct`, {
                  pct: String(pD)
                })
              }), (0, Ui.jsx)("span", {
                className: np()("Baf2RxBand", oD),
                children: wD(`${Wy}rxBand_${oD}`)
              })]
            }) : (0, Ui.jsx)("b", {
              children: wD(`${Wy}rxHeat`)
            }), null !== fD && (0, Ui.jsx)("span", {
              className: np()("Baf2RxSettle", {
                Bad: bD
              }),
              children: fD
            }), gD >= 1 && (0, Ui.jsxs)("span", {
              className: np()("Baf2RxDamage", XD),
              children: [wD(`${Wy}rxDamageLine`, {
                pct: String(gD)
              }), " \xb7 ", wD(`${Wy}rxDamage_${XD}`), (0, Ui.jsx)("i", {
                children: (0, Ui.jsx)("b", {
                  style: {
                    width: `${Math.min(100,gD)}%`
                  }
                })
              })]
            })]
          }), (0, Ui.jsx)(rB, {
            max: XQ,
            bands: sy,
            ticks: Ey,
            now: pD,
            settle: iD,
            settleTone: bD ? "bad" : null,
            onExplain: () => {
              QD(`${Wy}rxWhy_heat`)
            }
          })]
        }), (0, Ui.jsx)(ey, {
          stats: tD,
          t: wD,
          explain: QD
        }), ZD > 0 && (0, Ui.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            QD(`${Wy}rxWhy_perPellet`)
          },
          children: wD(`${Wy}rxPerPellet`, {
            amount: zQ(ZD)
          })
        })]
      })
    }

    function hy(DD, CD) {
      var cD;
      if (!DD.baf2RxStore) return {
        note: CD(`${Wy}rxUpTo`, {
          amount: zQ(DD.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [ID, pD] = DD.baf2RxStore, iD = pD > 0 ? ID / pD : 0, fD = String(Math.floor(100 * iD)), bD = null !== (cD = DD.baf2RxStoreNetPerS) && void 0 !== cD ? cD : 0, QD = function(DD) {
        var CD, cD;
        const [ID, pD] = null !== (CD = DD.baf2RxStore) && void 0 !== CD ? CD : [0, 0], iD = null !== (cD = DD.baf2RxStoreNetPerS) && void 0 !== cD ? cD : 0;
        return pD > 0 && ID >= pD - 1 ? "running" === DD.baf2RxState ? `${Zy}rxStoreFull` : `${Zy}rxStoreFullOnly` : iD > .05 ? `${Zy}rxStoreLine` : iD < -.05 ? "running" === DD.baf2RxState ? `${Zy}rxStoreUsesMore` : `${Zy}rxStoreDraining` : `${Zy}rxStorePct`
      }(DD);
      return {
        note: CD(QD, QD === `${Wy}rxStoreLine` ? {
          pct: fD,
          time: ni(CD, (pD - ID) / bD)
        } : {
          pct: fD
        }),
        share: iD
      }
    }

    function ry(DD) {
      let {
        view: CD,
        explain: cD,
        preview: ID
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), {
        status: iD
      } = CD, fD = CQ(IQ(...CD.dims)), bD = ny(iD), QD = Math.min(Math.round(iD.baf2RxFuel), fD.fuel), wD = "running" === iD.baf2RxState, SD = wD ? Oy(iD.baf2RxOut, iD.baf2RxMaxNow) : 0, BD = function(DD, CD, cD) {
        const ID = gy(DD),
          pD = "cryo" === ID.HM,
          iD = cD ? cD.coolantSecs : ID.pct >= 100 && DD.baf2RxOut >= 1 ? my(DD, DD.baf2RxThrottle).coolantSecs : null;
        let fD, bD = !1;
        if (ID.pct < 100) {
          const cD = 1 === ID.makersShort,
            iD = !pD && DD.baf2RxCryoOpen ? "OrCryo" : "";
          fD = ID.makersShort > 0 ? CD(pD ? `${Wy}rxCryoAddMixer${cD?"":"s"}` : `${Wy}rxWaterAddCondenser${cD?"":"s"}${iD}`, {
            count: String(ID.makersShort)
          }) : CD(`${Wy}rxWaterNeeds`, {
            rate: yy(ID.needPerS)
          })
        } else if (null !== iD) fD = CD(`${Wy}rxWaterRunsOut`, {
          time: ni(CD, iD)
        });
        else if (ID.waterBeside > 0) fD = CD(`${Wy}rxCryoPlusWater`, {
          rate: yy(ID.waterBeside)
        });
        else {
          const DD = function(DD) {
            return DD.inPerS <= 0 ? "rxWaterNoSupply" : DD.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(ID);
          bD = "rxWaterNoSupply" === DD, fD = CD(`${Wy}${DD}`, {
            amount: zQ(ID.stored)
          })
        }
        return {
          kind: pD ? "Cryo" : "Water",
          label: CD(pD ? `${Wy}rxCryo` : `${Wy}rxWater`),
          number: `${yy(ID.usePerS)}/s`,
          preview: cD ? `${yy(cD.coolPerS)}/s` : null,
          note: fD,
          tone: "noWater" === DD.baf2RxState ? "danger" : bD ? "warn" : (QD = ID.pct, wD = iD, QD < 100 ? "danger" : null === wD ? null : wD < 300 ? "danger" : "warn"),
          share: ID.pct / 100,
          why: pD ? `${Wy}rxWhy_cryo` : `${Wy}rxWhy_water`,
          short: ID.pct < 100
        };
        var QD, wD
      }(iD, pD, ID), yD = xQ(iD, fD.waste, bD), MD = hy(iD, pD), tD = my(iD, iD.baf2RxTarget), ZD = wD && Math.abs(tD.settle - iD.baf2RxHeat) >= 3, oD = ID ? ID.pelletsPerMin / 60 : null;
      return (0, Ui.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ui.jsx)(uB, {
            kind: "Fuel",
            label: pD(`${Wy}rxFuel`),
            number: String(QD),
            preview: null !== oD && oD > 0 && iD.baf2RxFuel > 0 ? ni(pD, iD.baf2RxFuel / oD) : null,
            note: iD.baf2RxFuel <= 0 ? pD(`${Wy}rxFuelEmpty`) : bD > 0 ? pD(`${Wy}rxFuelLeft`, {
              time: ni(pD, iD.baf2RxFuel / bD)
            }) : pD(1 === QD ? `${Wy}rxFuelPellet` : `${Wy}rxFuelPellets`),
            tone: "noFuel" === iD.baf2RxState ? "danger" : iD.baf2RxFuel < 2 ? "warn" : null,
            share: iD.baf2RxFuel / fD.fuel,
            onExplain: () => {
              cD(`${Wy}rxWhy_fuel`)
            }
          }), (0, Ui.jsx)(uB, {
            kind: BD.kind,
            label: BD.label,
            number: BD.number,
            preview: BD.preview,
            note: BD.note,
            tone: BD.tone,
            share: BD.share,
            onExplain: () => {
              cD(BD.why)
            }
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ui.jsx)(hB, {
            kind: "Fuel",
            step: SD,
            short: "noFuel" === iD.baf2RxState
          }), (0, Ui.jsx)(hB, {
            kind: BD.kind,
            step: SD,
            short: BD.short || "noWater" === iD.baf2RxState
          })]
        }), (0, Ui.jsx)(uy, {
          view: CD,
          heat: iD.baf2RxHeat,
          settle: Math.min(XQ, tD.settle),
          settleLine: ZD ? pD(`${Wy}rxHeatSettles`, {
            pct: String(Math.round(tD.settle)),
            time: ni(pD, tD.settleS)
          }) : null,
          settleBad: tD.settle > 100,
          explain: cD
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ui.jsx)(hB, {
            kind: "Power",
            step: SD
          }), (0, Ui.jsx)(hB, {
            kind: "Waste",
            step: wD && iD.baf2RxFuel - iD.baf2RxPu > 0 ? SD : 0,
            short: yD.full
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ui.jsx)(uB, {
            kind: "Power",
            label: pD(`${Wy}rxPowerOut`),
            number: `\u26a1 ${zQ(iD.baf2RxOut)}/s`,
            preview: ID ? zQ(ID.out) : null,
            note: MD.note,
            share: MD.share,
            onExplain: () => {
              cD(`${Wy}rxWhy_power`)
            }
          }), (0, Ui.jsx)(uB, {
            kind: "Waste",
            label: pD(`${Wy}rxWaste`),
            number: `${Math.floor(iD.baf2RxWaste)}/${fD.waste}`,
            note: yD.full ? pD(`${Wy}rxWasteFull`) : null !== yD.fullInS ? pD(`${Wy}rxWasteFullIn`, {
              time: ni(pD, yD.fullInS)
            }) : pD(`${Wy}rxWasteSpent`),
            tone: "wasteFull" === iD.baf2RxState ? "danger" : yD.full ? "warn" : null,
            share: iD.baf2RxWaste / fD.waste,
            onExplain: () => {
              cD(`${Wy}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Ay(DD) {
      let {
        view: CD,
        explain: cD
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = CD.plan;
      if (!pD) return null;
      const iD = pD.fuelHeat <= 0 ? null : pD.cooling > 0 ? Math.min(XQ, 100 * pD.fuelHeat / pD.cooling) : XQ,
        fD = ID(`${Wy}rxPlanAtFull`);
      return (0, Ui.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Ui.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ui.jsx)(uB, {
            kind: "Fuel",
            label: ID(`${Wy}rxFuel`),
            number: ID(`${Wy}rxPlanPerMin`, {
              amount: jQ(pD.pelletsPerMin)
            }),
            note: ID(`${Wy}rxPlanPellets`),
            onExplain: () => {
              cD(`${Wy}rxWhy_fuel`)
            }
          }), (0, Ui.jsx)(uB, {
            kind: "Water",
            label: ID(`${Wy}rxWater`),
            number: `${yy(pD.waterPerS)}/s`,
            note: CD.status.baf2RxCryoOpen && pD.waterPerS > 0 ? ID(`${Wy}rxPlanOrCryo`, {
              rate: yy(oQ(pD, AD.d) * AD.j)
            }) : fD,
            onExplain: () => {
              cD(`${Wy}rxWhy_water`)
            }
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ui.jsx)(hB, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Ui.jsx)(hB, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Ui.jsx)(uy, {
          view: CD,
          heat: null,
          settle: iD,
          settleLine: null === iD ? null : ID(`${Wy}rxPlanHeat`, {
            pct: String(Math.round(iD))
          }),
          settleBad: null !== iD && iD > 100,
          explain: cD
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Ui.jsx)(hB, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Ui.jsx)(hB, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Ui.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Ui.jsx)(uB, {
            kind: "Power",
            label: ID(`${Wy}rxPowerOut`),
            number: `\u26a1 ${zQ(pD.max)}/s`,
            note: fD,
            onExplain: () => {
              cD(`${Wy}rxWhy_power`)
            }
          }), (0, Ui.jsx)(uB, {
            kind: "Waste",
            label: ID(`${Wy}rxWaste`),
            number: ID(`${Wy}rxPlanPerMin`, {
              amount: jQ(pD.pelletsPerMin)
            }),
            note: ID(`${Wy}rxWasteSpent`),
            onExplain: () => {
              cD(`${Wy}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const Fy = "buildAFactory2Game:",
      DM = {
        key: `${Fy}rxWaiting`,
        params: {},
        tone: "info"
      };

    function CM(DD, CD) {
      return 0 !== (DD.baf2RxFlags & CD)
    }

    function cM(DD) {
      var CD, cD;
      let {
        store: pD,
        close: iD
      } = DD;
      const {
        t: fD
      } = (0, Up.F)(), bD = wy(pD), {
        explained: QD,
        hinting: wD,
        explain: SD,
        explainOnce: BD
      } = AB("baf2RxExplained"), yD = (0, ID.useCallback)(((DD, CD) => {
        SD(fD(DD, CD))
      }), [SD, fD]), MD = (0, ID.useCallback)(((DD, CD) => {
        BD(DD, fD(DD, CD))
      }), [BD, fD]), [tD, ZD] = (0, ID.useState)(!1), [oD, vD] = (0, ID.useState)(!1), ND = null === bD || void 0 === bD ? void 0 : bD.status, gD = null === ND || void 0 === ND ? void 0 : ND.baf2RxAt.join(","), XD = !0 === (null === ND || void 0 === ND ? void 0 : ND.baf2RxFormed);
      (0, ID.useEffect)((() => {
        vD(!1), ZD(!1)
      }), [gD, XD]), (0, ID.useEffect)((() => (pD.opened(), () => {
        pD.closed()
      })), [pD]);
      const mD = void 0 !== ND && CM(ND, vC),
        nD = ND ? XD ? gQ(ND) : null !== bD && void 0 !== bD && bD.plan ? function(DD, CD) {
          if (DD <= 0) return "off";
          if (CD <= 0) return "alarm";
          const cD = 100 * DD / CD;
          return cD < 50 ? "calm" : cD < yQ ? "warm" : cD <= 100 ? "hot" : "alarm"
        }(bD.plan.fuelHeat, bD.plan.cooling) : "off" : "off",
        OD = ND ? mQ(ND) : null,
        PD = bD ? bD.waiting ? DM : XD ? Uy(bD.status) : function(DD) {
          var CD, cD;
          const {
            status: ID
          } = DD;
          return xy({
            left: ID.baf2RxNeed.reduce(((DD, CD) => {
              let [, cD] = CD;
              return DD + cD
            }), 0),
            bad: ID.baf2RxBad,
            rods: null !== (CD = null === (cD = DD.plan) || void 0 === cD ? void 0 : cD.rods) && void 0 !== CD ? CD : 0,
            canFill: CM(ID, ZC),
            melted: CM(ID, tC),
            idle: DD.looks.reduce(((DD, CD) => DD + (CD === QQ ? 1 : 0)), 0)
          })
        }(bD) : null,
        HD = wD && null !== PD && ("ok" === PD.tone || "info" === PD.tone),
        UD = ND ? function(DD) {
          const CD = 0 !== (DD.baf2RxFlags & yC),
            cD = DD.baf2RxHeat < Ab;
          return 0 !== (DD.baf2RxFlags & tC) || cD && (CD || !DD.baf2RxFormed) ? null : DD.baf2RxFormed && !CD ? {
            key: `${NQ}rxApartScram`,
            params: {}
          } : {
            key: `${NQ}rxApartCooling`,
            params: {
              pct: String(Ab)
            }
          }
        }(ND) : null,
        [xD, qD, JD] = null !== (CD = null === bD || void 0 === bD ? void 0 : bD.dims) && void 0 !== CD ? CD : [0, 0, 0],
        KD = `${xD}\xd7${qD}\xd7${JD}`;
      return (0, Ui.jsx)(Hf.e, {
        close: iD,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Ui.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Ui.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Ui.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Ui.jsx)(By, {
                mood: nD
              }), (0, Ui.jsxs)("div", {
                children: [(0, Ui.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: fD(`${Fy}rxTitle`)
                }), bD && (0, Ui.jsxs)("p", {
                  className: np()("Baf2RxSubtitle", XD && (null === OD || void 0 === OD ? void 0 : OD.tone)),
                  children: [XD && !mD ? (0, Ui.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": fD(`${Fy}rxChangeSize`),
                    onClick: () => {
                      if (!ND) return;
                      const DD = CM(ND, yC);
                      var CD;
                      (CD = {
                        scram: DD,
                        heat: ND.baf2RxHeat
                      }).scram && CD.heat < Ab ? ZD(!0) : yD(DD ? `${Fy}rxResizeCooling` : `${Fy}rxResizeHot`, {
                        pct: String(Ab)
                      })
                    },
                    children: [KD, " \u270e"]
                  }) : KD, " \xb7 ", fD(XD ? null !== (cD = null === OD || void 0 === OD ? void 0 : OD.label) && void 0 !== cD ? cD : `${Fy}rxState_running` : `${Fy}rxSubPlanShort`)]
                })]
              })]
            }), (0, Ui.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [bD && !mD && (0, Ui.jsx)(Sy, {
                kind: "reactor",
                busy: bD.busy.has("apart"),
                whyNot: UD ? () => {
                  yD(UD.key, UD.params)
                } : null,
                apart: () => {
                  pD.tap("apart", (() => {
                    pD.send("apart")
                  }))
                }
              }), (0, Ui.jsx)(Uf.l, {
                onClick: iD
              })]
            })]
          }), bD && PD && (0, Ui.jsxs)("div", {
            className: "Baf2RxBody",
            children: [XD ? (0, Ui.jsx)(ry, {
              view: bD,
              explain: yD,
              preview: Xy(bD.status)
            }) : (0, Ui.jsx)(Ay, {
              view: bD,
              explain: yD
            }), (0, Ui.jsx)(FB, {
              text: HD ? `${Py(fD,PD)} ${fD(`${Fy}rxTapHint`)}` : Py(fD, PD),
              tone: PD.tone,
              explained: QD
            }), mD ? (0, Ui.jsxs)(Ui.Fragment, {
              children: [(0, Ui.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: fD(`${Fy}rxNotYours`)
              }), (0, Ui.jsx)(iy, {
                status: bD.status,
                store: pD,
                readOnly: !0
              })]
            }) : XD && !oD ? (0, Ui.jsxs)(Ui.Fragment, {
              children: [(0, Ui.jsx)(jy, {
                view: bD,
                store: pD,
                explain: yD,
                explainOnce: MD
              }), void 0 !== bD.status.baf2RxLayout && cy(bD.status) && (0, Ui.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Ui.jsx)(iy, {
                  status: bD.status,
                  store: pD,
                  readOnly: !1,
                  bare: !0
                }), (0, Ui.jsx)(py, {
                  status: bD.status,
                  store: pD,
                  busy: bD.busy.has("fill")
                })]
              })]
            }) : (0, Ui.jsxs)(Ui.Fragment, {
              children: [(0, Ui.jsx)(ly, {
                view: bD,
                store: pD,
                keepSize: XD ? () => {
                  vD(!1)
                } : void 0
              }), PQ(bD.dims, bD.status.baf2RxDims) && (0, Ui.jsx)(Ly, {
                need: bD.status.baf2RxNeed,
                explain: yD
              }), (0, Ui.jsx)(iy, {
                status: bD.status,
                store: pD,
                readOnly: !1
              })]
            }), tD && (0, Ui.jsx)(Qy, {
              id: "baf2ResizeTitle",
              title: `${Fy}rxResizeConfirmTitle`,
              body: `${Fy}rxResizeConfirmBody`,
              yes: `${Fy}rxChangeSize`,
              cancel: () => {
                ZD(!1)
              },
              confirm: () => {
                ZD(!1), vD(!0)
              }
            })]
          })]
        })
      })
    }
    class IM {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(DD) {
        this.view = DD;
        for (const CD of this.listeners) CD()
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

    function pM(DD) {
      let {
        commands: CD,
        store: cD,
        power: pD,
        water: iD,
        reactor: fD,
        battery: bD,
        collider: QD,
        terminal: wD,
        quests: SD,
        close: BD,
        leave: yD,
        askIslands: MD,
        showCore: tD,
        openSocial: ZD
      } = DD;
      const {
        userContext: oD
      } = (0, Tb.c)(), vD = Lb.featureFlags.useSocialFeatures && oD.isLoggedIn(), [ND, gD] = (0, ID.useState)((() => cD.get()));
      (0, ID.useEffect)((() => cD.subscribe((() => {
        gD(cD.get())
      }))), [cD]);
      const XD = "islands" === (null === ND || void 0 === ND ? void 0 : ND.kind) ? ND.backToCore : void 0;
      return (0, Ui.jsxs)(Wf.Provider, {
        value: CD,
        children: ["core" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(tB, {
          view: ND.core,
          close: BD,
          askIslands: MD
        }), "dropMap" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(NB, {
          message: ND.dropMap,
          quests: SD,
          close: BD,
          leave: yD
        }), "islands" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(lB, {
          message: ND.islands,
          arrivedAtMs: ND.arrivedAtMs,
          close: XD ? () => {
            tD(XD)
          } : BD,
          leave: yD,
          openSocial: vD ? ZD : null
        }), "quests" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(VS, {
          store: SD,
          close: BD
        }), "transfer" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(fS, {
          message: ND.transfer,
          arrivedAtMs: ND.arrivedAtMs,
          close: BD,
          leave: yD
        }), "power" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(jf, {
          store: pD,
          close: BD
        }), "water" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(gb, {
          store: iD,
          close: BD
        }), "reactor" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(cM, {
          store: fD,
          close: BD
        }), "battery" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(Gy, {
          store: bD,
          close: BD
        }), "collider" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(mw, {
          store: QD,
          close: BD
        }), "terminal" === (null === ND || void 0 === ND ? void 0 : ND.kind) && (0, Ui.jsx)(eB, {
          store: wD,
          close: BD,
          send: DD => {
            CD.send(DD)
          }
        })]
      })
    }
    var iM = cD(37870);

    function fM(DD, CD) {
      return DD.distSq - CD.distSq
    }
    class bM {
      constructor() {
        this.list = [], this.pool = []
      }
      add(DD, CD, cD, ID) {
        let pD = this.pool[this.list.length];
        pD || (pD = {
          x: 0,
          y: 0,
          distSq: 0,
          element: CD,
          liftRem: cD,
          dot: ID
        }, this.pool.push(pD)), pD.x = DD.x, pD.y = DD.y, pD.distSq = DD.distSq, pD.element = CD, pD.liftRem = cD, pD.dot = ID, this.list.push(pD)
      }
    }
    class QM {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = DD, this.sizes = new WeakMap, this.observer = new ResizeObserver((DD => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const CD of DD) {
            const DD = CD.borderBoxSize[0];
            "dot" !== CD.target.dataset.crowded && 0 !== DD.inlineSize && 0 !== DD.blockSize && this.sizes.set(CD.target, {
              width: DD.inlineSize,
              height: DD.blockSize
            })
          }
        })), this.remPx = 16, this.uM = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.yX = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.yX)
      }
      observe(DD) {
        this.observer.observe(DD)
      }
      unobserve(DD) {
        this.observer.unobserve(DD)
      }
      run(DD) {
        const CD = DD.list;
        CD.sort(fM);
        const cD = this.pxPerVw,
          ID = this.pxPerVh;
        this.uM.length = 0, this.hud && this.uM.push(...this.hud.boxes(performance.now()));
        for (const iD of CD) {
          var pD;
          const DD = this.sizes.get(iD.element);
          let CD = "no";
          if (DD && DD.width > 0) {
            const pD = iD.x * cD,
              fD = iD.y * ID - iD.liftRem * this.remPx;
            this.fit(pD, fD, DD.width, DD.height) || (CD = iD.dot && this.fit(pD, fD, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (pD = iD.element.dataset.crowded) && void 0 !== pD ? pD : "no") !== CD && ("no" === CD ? delete iD.element.dataset.crowded : iD.element.dataset.crowded = CD), "hidden" !== CD && (0, iM.c)(iD.element, iD.x, iD.y)
        }
        CD.length = 0
      }
      fit(DD, CD, cD, ID) {
        const pD = DD - cD / 2,
          iD = DD + cD / 2,
          fD = CD - ID,
          bD = this.uM;
        for (let QD = 0; QD < bD.length; QD += 4)
          if (pD < bD[QD + 1] - 2 && iD > bD[QD] + 2 && fD < bD[QD + 3] - 2 && CD > bD[QD + 2] + 2) return !1;
        return bD.push(pD, iD, fD, CD), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.yX)
      }
    }
    const wM = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class SM {
      constructor() {
        this.cards = wM.map((DD => document.getElementsByClassName(DD))), this.watched = wM.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(DD) {
        DD - this.refreshedAt > 1e3 && (this.refreshedAt = DD, this.stale = !0);
        for (let cD = 0; cD < this.cards.length; cD++) {
          var CD;
          const DD = null !== (CD = this.cards[cD][0]) && void 0 !== CD ? CD : null;
          DD !== this.watched[cD] && this.watch(cD, DD)
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
        for (const CD of this.watched) {
          if (!CD || CD.closest(".NoRoom")) continue;
          const cD = CD.getBoundingClientRect();
          let ID = cD.top,
            pD = cD.bottom;
          if (CD === this.watched[0] && this.hud) {
            const DD = this.hud.getBoundingClientRect();
            ID = Math.max(ID, DD.top), pD = Math.min(pD, DD.bottom)
          }
          cD.width > 0 && pD > ID && DD.push(cD.left, cD.right, ID, pD)
        }
      }
      watch(DD, CD) {
        const cD = this.watched[DD];
        var ID, pD;
        (cD && this.sizes.unobserve(cD), this.watched[DD] = CD, this.stale = !0, CD && this.sizes.observe(CD), 0 === DD) && (null === (ID = this.hud) || void 0 === ID || ID.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (pD = null === CD || void 0 === CD ? void 0 : CD.closest(".Baf2QuestHud")) && void 0 !== pD ? pD : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const BM = [0, 0, 0],
      yM = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function MM(DD, CD, cD, ID, pD, iD) {
      let [fD, bD, QD] = ID;
      const wD = (fD + .5 - cD[0]) ** 2 + (bD - cD[1]) ** 2 + (QD + .5 - cD[2]) ** 2;
      let SD = null;
      wD <= iD ** 2 && (BM[0] = fD + .5, BM[1] = bD + pD, BM[2] = QD + .5, SD = CD.projectWorldPosToViewport(BM));
      const BD = null !== SD && SD.x > -5 && SD.x < 105 && SD.y > -5 && SD.y < 105;
      return (0, iM.e)(DD, !BD), BD ? (yM.x = SD.x, yM.y = SD.y, yM.distSq = wD, yM) : null
    }
    class tM {
      constructor(DD) {
        this.onElement = DD, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(DD) {
        const CD = [];
        for (let cD = 0; cD + 4 < DD.length; cD += 5) {
          const ID = [DD[cD], DD[cD + 1], DD[cD + 2]];
          CD.push({
            key: ID.join(","),
            pos: ID,
            status: Ip[DD[cD + 3]],
            kind: xC[DD[cD + 4]]
          })
        }
        this.markers = CD, this.keys = new Set(CD.map((DD => {
          let {
            key: CD
          } = DD;
          return CD
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
        let CD = this.refs.get(DD);
        return CD || (CD = CD => {
          const cD = this.elements.get(DD);
          var ID, pD;
          cD && (null === (ID = this.onElement) || void 0 === ID || ID.call(this, cD, !1));
          CD ? (this.elements.set(DD, CD), null === (pD = this.onElement) || void 0 === pD || pD.call(this, CD, !0)) : (this.elements.delete(DD), this.refs.delete(DD))
        }, this.refs.set(DD, CD)), CD
      }
      onAfterRender(DD, CD, cD) {
        for (const ID of this.markers) {
          const pD = this.elements.get(ID.key);
          if (!pD) continue;
          const iD = MM(pD, DD, CD, ID.pos, 1.05, 24);
          iD && cD.add(iD, pD, .45, !0)
        }
      }
      notify() {
        for (const DD of this.listeners) DD()
      }
    }
    const ZM = {
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
    const oM = (0, ID.memo)((function(DD) {
        let {
          status: CD,
          kind: cD,
          bindRef: ID
        } = DD;
        const {
          t: pD
        } = (0, Up.F)(), iD = function(DD, CD) {
          var cD;
          if ("noFuel" === DD) {
            var ID, pD;
            const DD = null === (ID = zC[CD]) || void 0 === ID || null === (pD = ID.fuels) || void 0 === pD ? void 0 : pD.find((DD => Ic.includes(DD)));
            return null !== DD && void 0 !== DD ? DD : ZM.noFuel
          }
          return void 0 !== (null === (cD = zC[CD]) || void 0 === cD ? void 0 : cD.cryoMade) ? "noOutlet" === DD ? "Fluid Pipe" : "noInput" === DD ? "Biomass" : ZM[DD] : ZM[DD]
        }(CD, cD);
        return (0, Ui.jsxs)("div", {
          className: np()("Baf2StallMarker", CD),
          ref: ID,
          hidden: !0,
          children: [iD && (0, Ui.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Ui.jsx)(qp.d, {
              itemName: iD,
              amount: 0
            })
          }), (0, Ui.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === CD ? "?" : "!"
          }), (0, Ui.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: pD(`buildAFactory2Game:stallTag_${CD}`)
          })]
        })
      })),
      vM = (0, ID.memo)((function(DD) {
        let {
          controller: CD
        } = DD;
        const [cD, pD] = (0, ID.useState)((() => CD.get()));
        return (0, ID.useEffect)((() => (pD(CD.get()), CD.subscribe((() => {
          pD(CD.get())
        })))), [CD]), (0, Ui.jsx)("div", {
          className: "Baf2StallMarkers",
          children: cD.map((DD => (0, Ui.jsx)(oM, {
            status: DD.status,
            kind: DD.kind,
            bindRef: CD.bind(DD.key)
          }, DD.key)))
        })
      })),
      NM = Zc.l + 150;
    class gM {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(DD, CD) {
        const cD = CD - DD;
        null === this.offset || cD < this.offset ? this.offset = cD : this.offset = Math.min(cD, this.offset + .02 * (CD - this.sampledAt)), this.sampledAt = CD
      }
      toLocal(DD) {
        var CD;
        return DD + (null !== (CD = this.offset) && void 0 !== CD ? CD : 0) + NM
      }
    }
    var XM = cD(37872);
    const mM = 15 * Math.PI / 180,
      nM = Math.SQRT2,
      OM = [4, 2];

    function PM(DD, CD) {
      const cD = [1 / 0, 1 / 0, 1 / 0],
        ID = [-1 / 0, -1 / 0, -1 / 0];
      for (const QD of DD)
        for (let DD = 0; DD < 3; DD++) cD[DD] = Math.min(cD[DD], QD[DD]), ID[DD] = Math.max(ID[DD], QD[DD]);
      const pD = (cD[0] + ID[0]) / 2,
        iD = (cD[1] + ID[1]) / 2,
        fD = (cD[2] + ID[2]) / 2;
      let bD = 0;
      for (const QD of DD) bD = Math.max(bD, Math.hypot(QD[0] - pD, QD[1] - iD, QD[2] - fD));
      return {
        x: pD,
        y: iD,
        z: fD,
        r: bD + CD
      }
    }

    function HM(DD, CD, cD) {
      const ID = CD.x - DD.x,
        pD = CD.y - DD.y,
        iD = CD.z - DD.z,
        fD = Math.sqrt(ID * ID + pD * pD + iD * iD);
      if (fD <= CD.r + 8) return 1;
      const bD = CD.r / fD,
        QD = Math.sqrt(1 - bD * bD),
        wD = QD < -DD.cosHalf,
        SD = (ID * DD.dx + pD * DD.dy + iD * DD.dz) / fD;
      if (!wD && SD < DD.cosHalf * QD - DD.sinHalf * bD) return 0;
      const BD = cD * nM * DD.frameMs * DD.pxPerBlock / (fD - CD.r);
      for (let yD = 0; yD < OM.length; yD++)
        if (BD * OM[yD] <= 1) return OM[yD];
      return 1
    }

    function UM(DD, CD) {
      return {
        name: DD,
        at: CD,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const xM = [0, 0, 0];

    function qM(DD, CD, cD) {
      let [, ID, pD, iD, fD, bD] = CD;
      const QD = Zc.g * (null !== fD && void 0 !== fD ? fD : 1),
        wD = [];
      for (let MD = 0; MD < ID.length; MD += 3) wD.push([ID[MD] + .5, ID[MD + 1] + .65, ID[MD + 2] + .5]);
      const SD = [];
      for (let MD = 0; MD < wD.length - 1; MD++) {
        const [DD, CD] = [wD[MD], wD[MD + 1]];
        SD.push([(DD[0] + CD[0]) / 2, (DD[1] + CD[1]) / 2, (DD[2] + CD[2]) / 2])
      }
      const BD = wD.slice(1, -1),
        yD = new Uint8Array(BD.length);
      for (const MD of null !== bD && void 0 !== bD ? bD : []) yD[MD >> 1] |= 1 & MD ? 2 : 1;
      return {
        island: DD,
        length: BD.length,
        loop: iD,
        cellsPerMs: QD,
        edges: SD,
        wi: BD,
        bounds: PM([...SD, ...BD], .3),
        changed: !0,
        culled: !1,
        hide: yD,
        items: pD.map((DD => {
          let [CD, ID] = DD;
          return UM(CD, (0, Zc.D)(CD, ID, cD, QD).at)
        }))
      }
    }

    function JM(DD, CD) {
      const {
        items: cD
      } = DD;
      if (0 === cD.length) return;
      const ID = DD.length / DD.cellsPerMs,
        pD = Math.floor((CD - cD[0].at) / ID) - 1;
      if (pD > 0)
        for (const iD of cD) iD.at += pD * ID
    }

    function KM(DD, CD) {
      const cD = Math.min(Math.floor(CD), DD.length - 1),
        ID = DD.hide[cD];
      return 0 !== ID && 0 !== (ID & (CD - cD < .5 ? 1 : 2))
    }

    function aM(DD, CD) {
      const cD = Math.min(Math.floor(CD), DD.length - 1),
        ID = CD - cD,
        pD = ID < .5,
        iD = pD ? DD.edges[cD] : DD.wi[cD],
        fD = pD ? DD.wi[cD] : DD.edges[cD + 1],
        bD = pD ? 2 * ID : 2 * ID - 1;
      xM[0] = iD[0] + (fD[0] - iD[0]) * bD, xM[1] = iD[1] + (fD[1] - iD[1]) * bD, xM[2] = iD[2] + (fD[2] - iD[2]) * bD
    }
    const VM = Math.PI / 4;
    class zM {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new gM, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.yX = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(DD) {
        const CD = performance.now();
        this.clock.sample(DD.baf2BeltLinesAt, CD), this.queue(DD.baf2BeltLinesAt, DD, 0, null, null, 0), this.applyDue(CD)
      }
      onMoves(DD) {
        const CD = performance.now(),
          cD = DD.baf2BeltMovesAt;
        this.clock.sample(cD, CD);
        for (const [ID, pD, iD, fD] of DD.baf2BeltMoveList) null === pD ? this.queue(cD - iD, null, ID, null, null, null !== fD && void 0 !== fD ? fD : 0) : this.queue(cD - iD, null, ID, pD, null !== fD && void 0 !== fD ? fD : null, 0);
        this.applyDue(CD)
      }
      start(DD) {
        this.pool = new XM.e(DD, {
          scale: .3,
          yaw: VM
        }, 64), this.yX(), window.addEventListener("resize", this.yX)
      }
      onAfterRender(DD) {
        const {
          pool: CD
        } = this;
        if (!CD) return;
        const cD = performance.now(),
          ID = cD - this.lastRenderAt;
        this.lastRenderAt = cD, ID < 100 && (this.frameMs += .1 * (ID - this.frameMs));
        const pD = cD + this.frameMs;
        this.applyDue(pD);
        const iD = DD.cameraPosition,
          fD = CD.follow(iD);
        this.setView(DD, iD);
        const bD = this.frame++;
        for (let QD = 0; QD < this.shown.length; QD++) {
          const DD = this.shown[QD],
            cD = HM(this.view, DD.bounds, DD.cellsPerMs),
            ID = DD.culled && 0 !== cD;
          if (DD.culled = 0 === cD, !fD && !DD.changed && !ID && (0 === cD || (bD + QD) % cD !== 0)) continue;
          DD.changed = !1, DD.loop && (JM(DD, pD), (0, Zc.w)(DD.items, DD.length, pD, DD.cellsPerMs));
          let iD = DD.length;
          for (let bD = 0; bD < DD.items.length; bD++) {
            const cD = DD.items[bD],
              ID = (0, Zc.H)(cD.at, iD, pD, DD.cellsPerMs);
            if (iD = ID - Zc.q, KM(DD, ID)) {
              null === cD.kind || cD.hidden || (cD.kind.hide(cD.slot), cD.hidden = !0);
              continue
            }
            let QD = cD.kind;
            if (null === QD) {
              if (QD = CD.kindOf(cD.name), null === QD) continue;
              cD.kind = QD, cD.slot = QD.take(), cD.hidden = !0, cD.drawn = NaN
            } else if (ID === cD.drawn && !cD.hidden && !fD) continue;
            aM(DD, ID), QD.write(cD.slot, xM[0], xM[1], xM[2]), cD.hidden = !1, cD.drawn = ID
          }
        }
        CD.commit()
      }
      dispose() {
        var DD;
        window.removeEventListener("resize", this.yX), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (DD = this.pool) || void 0 === DD || DD.dispose(), this.pool = null
      }
      setView(DD, CD) {
        const {
          cameraDir: cD,
          lastDir: ID
        } = this, pD = DD.cameraDirection;
        for (let SD = 0; SD < 3; SD++) ID[SD] = cD[SD], cD[SD] = pD[SD];
        const iD = cD[0] * ID[0] + cD[1] * ID[1] + cD[2] * ID[2],
          fD = Number.isNaN(iD) ? 0 : Math.acos(Math.min(1, Math.max(-1, iD))),
          {
            width: bD,
            height: QD
          } = this,
          wD = DD.tanHalfFovX;
        ! function(DD, CD, cD, ID, pD, iD, fD) {
          let bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          DD.x = CD[0], DD.y = CD[1], DD.z = CD[2], DD.dx = cD[0], DD.dy = cD[1], DD.dz = cD[2];
          const QD = Math.min(Math.PI, Math.atan(Math.sqrt(ID * ID + pD * pD)) + mM + bD);
          DD.cosHalf = Math.cos(QD), DD.sinHalf = Math.sin(QD), DD.pxPerBlock = iD / (2 * pD), DD.frameMs = fD
        }(this.view, CD, cD, wD, wD * QD / bD, QD * window.devicePixelRatio, this.frameMs, fD)
      }
      queue(DD, CD, cD, ID, pD, iD) {
        const fD = Math.max(this.clock.toLocal(DD), this.lastPendingAt);
        this.lastPendingAt = fD, this.pending.push({
          at: fD,
          lines: CD,
          line: cD,
          name: ID,
          pos: pD,
          idx: iD
        })
      }
      applyDue(DD) {
        const {
          pending: CD
        } = this;
        for (; this.pendingHead < CD.length && CD[this.pendingHead].at <= DD;) {
          const DD = CD[this.pendingHead++];
          if (DD.lines) this.applyLines(DD.lines, DD.at), DD.lines = null;
          else {
            const CD = this.lines.get(DD.line);
            CD && this.applyMove(CD, DD, DD.at)
          }
        }
        this.pendingHead === CD.length ? (CD.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > CD.length && (CD.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(DD, CD) {
        this.clearIsland(DD.baf2BeltIsland);
        for (const cD of DD.baf2BeltLineList) this.lines.set(cD[0], qM(DD.baf2BeltIsland, cD, CD));
        this.shown = [...this.lines.values()]
      }
      applyMove(DD, CD, cD) {
        let {
          name: ID,
          pos: pD,
          idx: iD
        } = CD;
        DD.changed = !0, DD.loop && (JM(DD, cD), (0, Zc.w)(DD.items, DD.length, cD, DD.cellsPerMs)), null !== ID && null !== pD ? (0, Zc.A)(DD.items, DD.length, UM(ID, cD), pD, cD, DD.cellsPerMs) : null !== ID ? DD.items.push(UM(ID, cD)) : DD.items.length > iD && this.release((0, Zc.J)(DD.items, DD.length, cD, DD.cellsPerMs, iD))
      }
      clearIsland(DD) {
        for (const [CD, cD] of this.lines)
          if (cD.island === DD) {
            for (const DD of cD.items) this.release(DD);
            this.lines.delete(CD)
          }
      }
      release(DD) {
        null !== DD.kind && (DD.kind.release(DD.slot), DD.kind = null, DD.slot = -1, DD.hidden = !0, DD.drawn = NaN)
      }
    }
    var jM = cD(35994),
      lM = cD(37885);

    function LM(DD) {
      let {
        depth: CD,
        store: cD,
        t: pD
      } = DD;
      const iD = function(DD) {
        const [CD, cD] = (0, ID.useState)(DD.lastPlayerY());
        return (0, bS.f)(lp, cD), (0, ID.useEffect)((() => {
          cD(DD.lastPlayerY())
        }), [DD]), CD
      }(cD);
      if (null === iD) return null;
      const [fD, bD] = CD, QD = iD > fD ? fD : null !== bD && iD < bD ? bD : null, wD = {
        y: mi(iD),
        target: null === QD ? "" : mi(QD)
      };
      return (0, Ui.jsx)("span", {
        className: np()("Baf2QuestDepth", {
          Reached: null === QD
        }),
        children: pD(`${BS}${null===QD?"questDepthReached":"questDepth"}`, wD)
      })
    }

    function TM(DD) {
      let {
        also: CD,
        view: cD,
        t: ID
      } = DD;
      return (0, Ui.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Ui.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Ui.jsx)("strong", {
            children: ID(`${BS}questAlsoDownHere`)
          }), (0, Ui.jsx)("span", {
            className: "Baf2QuestChips",
            children: CD.map((DD => {
              let [CD, pD, iD, fD] = DD;
              return (0, Ui.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": ID(`${BS}questAlsoItem`, {
                  item: MS(ID, cD.itemNames[CD], CD),
                  have: String(pD),
                  need: String(iD)
                }),
                children: [(0, Ui.jsx)(oS, {
                  item: CD
                }), (0, Ui.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${pD}/${iD}`
                }), null !== fD && (0, Ui.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: ID(`${BS}questAlsoDepth`, {
                    y: mi(fD)
                  })
                })]
              }, CD)
            }))
          })]
        })]
      })
    }
    var GM = cD(3200);

    function RM(DD) {
      let {
        expanded: CD,
        inventoryOpen: cD,
        children: pD
      } = DD;
      const iD = (0, ID.useRef)(null);
      return (0, ID.useEffect)((() => {
        const DD = iD.current,
          CD = null === DD || void 0 === DD ? void 0 : DD.closest(".RightElements"),
          ID = null === DD || void 0 === DD ? void 0 : DD.firstElementChild;
        if (!DD || !CD || !ID) return;
        return (0, lM.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [CD, ID], (() => {
          const pD = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === pD.length) return;
          const iD = Math.max(...pD.map((DD => DD.getBoundingClientRect().bottom))),
            fD = CD.getBoundingClientRect(),
            bD = cD ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (bD) {
            const CD = parseFloat(getComputedStyle(ID).marginLeft) + parseFloat(getComputedStyle(ID).marginRight),
              cD = fD.right - bD.getBoundingClientRect().right - 8 - CD;
            DD.style.setProperty("--baf2-quest-room", `${cD}px`), DD.classList.toggle("NoRoom", cD < 150)
          } else DD.style.removeProperty("--baf2-quest-room"), DD.classList.remove("NoRoom");
          const QD = iD - fD.top + 8,
            wD = function(DD, CD, cD) {
              const ID = CD.getBoundingClientRect(),
                pD = DD.getBoundingClientRect(),
                iD = (0, GM.f)(pD.left, pD.right, ID.top + cD);
              if (null !== iD && iD < ID.bottom) return iD - ID.top;
              return ID.height - (parseFloat(getComputedStyle(CD).paddingBottom) || 0)
            }(DD, CD, QD) - 8,
            SD = window.innerHeight / 2 - fD.top,
            {
              top: BD,
              maxHeight: yD
            } = function(DD, CD, cD, ID, pD) {
              const iD = Math.min(cD, Math.max(0, CD - DD)),
                fD = pD ? DD : Math.max(DD, Math.min(ID - iD / 2, CD - iD));
              return {
                top: fD,
                maxHeight: Math.max(0, CD - fD)
              }
            }(QD, wD, function(DD) {
              const CD = DD.firstElementChild,
                cD = CD ? CD.scrollHeight - CD.clientHeight : 0;
              return DD.getBoundingClientRect().height + Math.max(0, cD)
            }(ID), SD, Pi());
          DD.style.top = `${BD}px`, DD.style.maxHeight = `${yD}px`
        }))
      }), [cD]), (0, Ui.jsx)("div", {
        ref: iD,
        className: np()("Baf2QuestHud", {
          Expanded: CD
        }),
        children: pD
      })
    }

    function kM(DD) {
      let {
        amount: CD,
        t: cD
      } = DD;
      return (0, Ui.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Ui.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Ui.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: cD(`${BS}questStepsDone`, {
            amount: String(CD)
          })
        })]
      })
    }

    function dM(DD) {
      let {
        pulse: CD
      } = DD;
      return 0 === CD ? null : (0, Ui.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, CD)
    }

    function YM(DD) {
      var CD;
      let {
        store: cD
      } = DD;
      const pD = (0, bS.g)(jp, cD.get()),
        [iD, fD] = (0, ID.useState)(!1),
        {
          t: bD
        } = (0, Up.F)(),
        QD = function() {
          const [DD, CD] = (0, ID.useState)(Pi);
          return (0, ID.useEffect)((() => (CD(Pi()), Hi(CD))), []), DD
        }(),
        {
          openInGameMenuName: wD,
          openEverythingMenuName: SD
        } = (0, gp.o)(["openInGameMenuName", "openEverythingMenuName"]),
        BD = "inventory" === wD && null === SD,
        yD = null !== wD && !BD || null !== SD;
      if (! function(DD) {
          return null !== DD.name || null !== DD.side
        }(pD) || yD || "off" === pD.tutorial) return null;
      const MD = dp(pD.rows),
        tD = MD.filter((DD => DD.done)).length,
        ZD = function(DD, CD) {
          const cD = sp(DD);
          let ID = 0;
          return DD.filter(((DD, pD) => !!DD.justFinished || !(DD.done || pD < cD || ID > CD) && (ID++, !0)))
        }(pD.rows, QD ? 0 : 2),
        oD = QD ? ZD : function(DD, CD) {
          const cD = CD.filter((DD => !DD.justFinished));
          if (cD.length < 2) return [...CD];
          const ID = DD.indexOf(cD[0]),
            pD = DD.indexOf(cD[cD.length - 1]),
            iD = new Set(dp(DD));
          return DD.filter(((DD, cD) => CD.includes(DD) || DD.done && iD.has(DD) && cD > ID && cD < pD))
        }(pD.rows, ZD),
        vD = iD ? pD.rows : oD,
        ND = iD || QD ? [] : function(DD, CD) {
          const cD = new Array(CD.length + 1).fill(0),
            ID = new Set(dp(DD));
          let pD = 0;
          for (const iD of DD) pD < CD.length && iD === CD[pD] ? pD++ : iD.done && ID.has(iD) && cD[pD]++;
          return cD
        }(pD.rows, oD),
        gD = iD || oD.length < pD.rows.length || null !== pD.reward,
        XD = kp(pD),
        mD = XD ? bD(`${BS}questLineComplete`) : pD.tier ? gS(bD, pD.tier) : bD(`${BS}currentQuest`),
        nD = function(DD) {
          var CD, cD;
          if (kp(DD)) return null;
          const ID = null === (CD = DD.chapters) || void 0 === CD ? void 0 : CD.find((CD => {
            let [cD] = CD;
            return cD === DD.tier
          }));
          if (!ID) return null;
          const pD = ID[1].filter((DD => !DD[4]));
          if (0 === pD.length) return null;
          const iD = null === (cD = DD.name) || void 0 === cD ? void 0 : cD[0],
            fD = DD => pD.findIndex((CD => CD[0] === iD && (!DD || !CD[3]))),
            bD = fD(!0),
            QD = bD >= 0 ? bD : fD(!1);
          if (QD >= 0) return [QD + 1, pD.length];
          const wD = pD.filter((DD => DD[3])).length;
          return [Math.min(wD + 1, pD.length), pD.length]
        }(pD);
      return (0, Ui.jsx)(jM.e, {
        placement: "topRight",
        children: (0, Ui.jsx)(RM, {
          expanded: iD,
          inventoryOpen: BD,
          children: (0, Ui.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: yS,
            children: [null !== pD.name && (0, Ui.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Ui.jsx)(dM, {
                pulse: pD.pulse
              }), (0, Ui.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Ui.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [mD, nD && (0, Ui.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": bD(`${BS}questPlaceLabel`, {
                      n: String(nD[0]),
                      total: String(nD[1])
                    }),
                    children: bD(`${BS}questPlace`, {
                      n: String(nD[0]),
                      total: String(nD[1])
                    })
                  }), pD.tier && pD.core && !XD && (0, Ui.jsx)(XS, {
                    core: pD.core,
                    t: bD
                  })]
                })
              }), (0, Ui.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bD(`${BS}${pD.name[0]}`, tS(pD.name[1]))
              }), (MD.length > 1 || gD) && (0, Ui.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [MD.length > 1 && (0, Ui.jsx)(mS, {
                  rows: MD,
                  t: bD
                }), gD && (0, Ui.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": iD,
                  onClick: () => {
                    fD(!iD)
                  },
                  children: [(0, Ui.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: bD(`${BS}questStepsToggle`, {
                      done: String(tD),
                      total: String(MD.length)
                    })
                  }), (0, Ui.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: iD ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Ui.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [vD.map(((DD, CD) => {
                  var iD;
                  const fD = DD.current && pD.depth;
                  return (0, Ui.jsxs)(ID.Fragment, {
                    children: [(null !== (iD = ND[CD]) && void 0 !== iD ? iD : 0) > 0 && (0, Ui.jsx)(kM, {
                      amount: ND[CD],
                      t: bD
                    }), (0, Ui.jsx)(nS, {
                      row: DD,
                      view: pD,
                      t: bD,
                      extra: fD && (0, Ui.jsx)(LM, {
                        depth: fD,
                        store: cD,
                        t: bD
                      })
                    })]
                  }, DD.id)
                })), (null !== (CD = ND[vD.length]) && void 0 !== CD ? CD : 0) > 0 && (0, Ui.jsx)(kM, {
                  amount: ND[vD.length],
                  t: bD
                }), pD.also.length > 0 && (0, Ui.jsx)(TM, {
                  also: pD.also,
                  view: pD,
                  t: bD
                })]
              }), iD && pD.reward && (0, Ui.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [bD(`${BS}questReward`), (0, Ui.jsx)(oS, {
                  item: pD.reward
                }), MS(bD, pD.itemNames[pD.reward], pD.reward)]
              })]
            }), pD.side && (0, Ui.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Gp(pD, Date.now()) && (0, Ui.jsx)(dM, {
                pulse: pD.sideCameUpAt
              }), (0, Ui.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: bD(`${BS}questSide`)
              }), (0, Ui.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: bD(`${BS}${pD.side.name[0]}`, tS(pD.side.name[1]))
              }), (0, Ui.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Ui.jsx)(nS, {
                  row: pD.side.row,
                  view: pD,
                  t: bD
                })
              })]
            })]
          })
        })
      })
    }
    const WM = "baf2ToastView";
    class sM {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = DD, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: DD,
          holdMs: CD
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const DD = this.dropCovered();
          DD && this.show(DD.message, DD.holdMs)
        }), 250));
        const cD = this.dropCovered();
        null !== cD && (cD.holdMs > 0 || "baf2ToastCelebrate" === cD.message.baf2ToastStyle) && "baf2ToastCelebrate" !== DD.baf2ToastStyle && this.show(cD.message, cD.holdMs);
        const ID = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== DD.baf2ToastStyle && ID > 0) return this.pending = {
          message: DD,
          holdMs: CD
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const DD = this.pending;
          this.pending = null, DD && this.present(DD.message, DD.holdMs)
        }), ID));
        this.present(DD, CD)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(DD, CD) {
        this.clearTimers(), this.pending = null;
        const cD = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: DD.baf2ToastText,
          style: DD.baf2ToastStyle,
          swapped: cD,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === DD.baf2ToastStyle ? 1500 : CD), this.Uo();
        const ID = Math.min(8e3, Math.max(1e3, DD.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), ID)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.Uo(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Uo()
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
      Uo() {
        Vp.i.Uo(WM, this.view, !0)
      }
    }
    var EM = cD(62);
    const eM = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function uM(DD) {
      let {
        store: CD
      } = DD;
      const cD = (0, bS.g)(WM, CD.get()),
        {
          openInGameMenuName: ID,
          openEverythingMenuName: pD
        } = (0, gp.o)(["openInGameMenuName", "openEverythingMenuName"]),
        iD = cD && (0, Ui.jsxs)("div", {
          className: np()("Baf2Toast", eM[cD.style], {
            Swapped: cD.swapped,
            Leaving: cD.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === cD.style && (0, Ui.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Ui.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Ui.jsx)(Jp.c, {
              text: cD.text
            })
          })]
        }, cD.id);
      return null !== ID && null === pD ? (0, EM.createPortal)((0, Ui.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: iD
      }), document.body) : (0, Ui.jsx)(jM.e, {
        children: iD
      })
    }
    const hM = "baf2AreaView";
    class rM {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Lb = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Lb = null
      }
      arrive(DD, CD) {
        CD && function(DD) {
          return "home" === DD.baf2AreaPlace && void 0 !== DD.baf2AreaNameText
        }(DD) ? this.Lb = DD : this.show(DD)
      }
      release() {
        const DD = this.Lb;
        null !== DD && this.show(DD)
      }
      show(DD) {
        this.clearTimer(), this.Lb = null;
        const CD = void 0 === DD.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: DD,
          ms: CD
        }, this.Uo(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.Uo()
        }), CD)
      }
      dispose() {
        this.clearTimer(), this.Lb = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      Uo() {
        Vp.i.Uo(hM, this.view, !0)
      }
    }

    function AM(DD) {
      var CD;
      let {
        store: cD
      } = DD;
      const {
        t: ID
      } = (0, Up.F)(), pD = (0, bS.g)(hM, cD.get());
      if (!pD) return null;
      const {
        area: iD
      } = pD, fD = iD.baf2AreaResetMinutes;
      return (0, Ui.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": iD.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${pD.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Ui.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), iD.baf2AreaHeading && (0, Ui.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: ID(iD.baf2AreaHeading)
        }), (0, Ui.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (CD = iD.baf2AreaNameText) && void 0 !== CD ? CD : ID(iD.baf2AreaName)
        }), iD.baf2AreaNote && (0, Ui.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: ID(iD.baf2AreaNote)
        }), void 0 !== fD && (0, Ui.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: ID("buildAFactory2Game:areaWildsReset", {
            time: ni(ID, 60 * fD)
          })
        })]
      }, pD.id)
    }
    const FM = "baf2GearGauge";
    class Dt {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Qm(DD) {
        var CD;
        if (this.clearLinger(), null === DD.gearPowerKind) return void this.set(null);
        const cD = "jetpack" === DD.gearPowerKind && (ID = DD.gearChargeState, pD = DD.gearCharge, "flying" === ID || "charging" === ID || "outOfCharge" === ID || "ceiling" === ID || "offPlot" === ID || "noPower" === ID && pD <= 0);
        var ID, pD;
        const iD = !0 === (null === (CD = this.view) || void 0 === CD ? void 0 : CD.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          fD = cD || "jetpack" === DD.gearPowerKind && iD;
        this.set({
          gauge: DD,
          jetShown: fD
        }), fD && !cD && (this.lingerTimer = setTimeout((() => {
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
        this.view = DD, Vp.i.Uo(FM, DD, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Ct = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function ct(DD) {
      let {
        store: CD
      } = DD;
      const cD = (0, bS.g)(FM, CD.get());
      return cD ? "jetpack" === cD.gauge.gearPowerKind ? (0, Ui.jsx)(It, {
        view: cD
      }) : (0, Ui.jsx)(pt, {
        gauge: cD.gauge
      }) : null
    }

    function It(DD) {
      let {
        view: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), {
        gauge: ID
      } = CD, pD = ID.gearChargeMax > 0 ? Math.max(0, Math.min(1, ID.gearCharge / ID.gearChargeMax)) : 0, iD = Ct[ID.gearChargeState], fD = iD ? cD(iD) : null;
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2JetArc", {
          Shown: CD.jetShown,
          Low: pD < .2,
          Warm: pD >= .2 && pD < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - pD)
        },
        "aria-hidden": !CD.jetShown,
        children: [(0, Ui.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Ui.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: it,
            pathLength: 100
          }), (0, Ui.jsx)("path", {
            className: "Baf2JetArcFill",
            d: it,
            pathLength: 100
          })]
        }), (0, Ui.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * pD), "%"]
        }), fD && (0, Ui.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: fD
        })]
      })
    }

    function pt(DD) {
      let {
        gauge: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), ID = function(DD, CD) {
        switch (CD.gearPowerKind) {
          case "skyPack":
            return DD("buildAFactory2Game:gearSkyPack", {
              charge: CD.gearCharge,
              max: CD.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return DD("buildAFactory2Game:gearIslandDraw", {
              power: rD(CD.gearIslandPower),
              cost: rD(CD.gearCostPerUse)
            });
          case "barrier":
            return DD("buildAFactory2Game:gearBarrier", {
              shield: Math.round(CD.gearCharge),
              max: CD.gearChargeMax,
              power: rD(CD.gearIslandPower)
            });
          default:
            return null
        }
      }(cD, CD);
      return null === ID ? null : (0, Ui.jsx)(jM.e, {
        children: (0, Ui.jsx)("div", {
          className: np()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === CD.gearChargeState || "outOfCharge" === CD.gearChargeState
          }),
          role: "status",
          children: ID
        })
      })
    }
    const it = (() => {
      const DD = DD => {
        const CD = DD * Math.PI / 180;
        return `${(40*Math.cos(CD)).toFixed(2)} ${(40*Math.sin(CD)).toFixed(2)}`
      };
      return `M ${DD(160)} A 40 40 0 1 1 ${DD(380)}`
    })();
    class ft {
      constructor(DD) {
        this.onElement = DD, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Qm(DD) {
        let CD = DD.baf2LabelsReset || DD.baf2LabelsIsland !== this.island;
        CD && (this.labels.clear(), this.island = DD.baf2LabelsIsland);
        for (const [cD, ID, pD, iD, fD] of DD.baf2LabelsList) {
          const DD = `${cD},${ID},${pD}`,
            bD = this.labels.get(DD);
          null === iD ? CD = this.labels.delete(DD) || CD : bD && bD.item === iD && (bD.count === fD || bD.count >= 0 && fD >= 0) ? bD.count !== fD && (bD.count = fD, this.writeCount(DD, fD)) : (this.labels.set(DD, {
            key: DD,
            pos: [cD, ID, pD],
            item: iD,
            count: fD
          }), this.writeCount(DD, fD), CD = !0)
        }
        if (this.changes++, CD) {
          this.snapshot = [...this.labels.values()];
          for (const DD of this.listeners) DD()
        }
      }
      bindCount(DD) {
        const CD = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${DD}`;
        let cD = this.countRefs.get(CD);
        return cD || (cD = cD => {
          var ID, pD;
          cD ? (this.countElements.set(CD, cD), this.writeCount(DD, null !== (ID = null === (pD = this.labels.get(DD)) || void 0 === pD ? void 0 : pD.count) && void 0 !== ID ? ID : -1)) : (this.countElements.delete(CD), this.countRefs.delete(CD))
        }, this.countRefs.set(CD, cD)), cD
      }
      setCountWords(DD) {
        this.countWords = DD;
        for (const [CD, cD] of this.labels) this.writePart(`words|${CD}`, DD(cD.count), cD.count)
      }
      writeCount(DD, CD) {
        this.writePart(`bare|${DD}`, Xi(CD), CD), this.countElements.has(`words|${DD}`) && this.writePart(`words|${DD}`, this.countWords(CD), CD)
      }
      writePart(DD, CD, cD) {
        const ID = this.countElements.get(DD);
        if (!ID || cD < 0) return;
        const pD = ID.firstChild;
        pD && 3 === pD.nodeType && !pD.nextSibling ? pD.nodeValue !== CD && (pD.nodeValue = CD) : ID.textContent !== CD && (ID.textContent = CD)
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
        let CD = this.refs.get(DD);
        return CD || (CD = CD => {
          const cD = this.elements.get(DD);
          var ID, pD;
          cD && (null === (ID = this.onElement) || void 0 === ID || ID.call(this, cD, !1));
          CD ? (this.elements.set(DD, CD), null === (pD = this.onElement) || void 0 === pD || pD.call(this, CD, !0)) : (this.elements.delete(DD), this.refs.delete(DD))
        }, this.refs.set(DD, CD)), CD
      }
      onAfterRender(DD, CD, cD, ID) {
        for (const pD of this.snapshot) {
          const iD = this.elements.get(pD.key);
          if (!iD) continue;
          if (ID(pD.key)) {
            (0, iM.e)(iD, !0);
            continue
          }
          const fD = MM(iD, DD, CD, pD.pos, 1.1, 24);
          fD && cD.add(fD, iD, 0, !1)
        }
      }
    }
    const bt = (0, ID.memo)((function(DD) {
        let {
          item: CD
        } = DD;
        return (0, Ui.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Ui.jsx)(qp.d, {
            itemName: CD,
            amount: 0
          })
        })
      })),
      Qt = (0, ID.memo)((function(DD) {
        let {
          label: CD,
          bindRef: cD,
          countRef: ID,
          wordsRef: pD
        } = DD;
        return (0, Ui.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: cD,
          hidden: !0,
          children: [(0, Ui.jsx)(bt, {
            item: CD.item
          }), CD.count >= 0 && (0, Ui.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Ui.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: pD
            }), (0, Ui.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: ID
            })]
          })]
        })
      })),
      wt = (0, ID.memo)((function(DD) {
        let {
          store: CD
        } = DD;
        const {
          t: cD
        } = (0, Up.F)(), [pD, iD] = (0, ID.useState)((() => CD.list()));
        return (0, ID.useEffect)((() => (iD(CD.list()), CD.subscribe((() => {
          iD(CD.list())
        })))), [CD]), (0, ID.useEffect)((() => {
          CD.setCountWords((DD => cD("buildAFactory2Game:labelSiloCount", {
            count: Xi(DD)
          })))
        }), [CD, cD]), (0, Ui.jsx)("div", {
          className: "Baf2IslandLabels",
          children: pD.map((DD => -2 === DD.count ? null : (0, Ui.jsx)(Qt, {
            label: DD,
            bindRef: CD.bind(DD.key),
            countRef: CD.bindCount(DD.key),
            wordsRef: CD.bindCount(DD.key, "words")
          }, DD.key)))
        })
      })),
      St = {
        read: () => !0,
        write: () => {}
      };

    function Bt(DD) {
      return `${DD[0]},${DD[1]},${DD[2]}`
    }

    function yt(DD) {
      let [CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD] = DD;
      const MD = void 0 === BD || void 0 === yD ? function(DD) {
        return [Math.floor((DD - 1) / 2), 0]
      }(iD) : [BD, yD];
      return {
        kind: 0 === QD ? "reactor" : "battery",
        box: dc([CD, cD, ID], pD, iD, fD, bD, MD),
        formed: 1 === wD,
        level: SD
      }
    }
    class Mt {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St;
        this.guideSetting = DD, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = DD.read()
      }
      Qm(DD) {
        var CD;
        const cD = new Map;
        for (const ID of DD.baf2RxPlanList) {
          const DD = yt(ID);
          cD.set(Bt(DD.box.ctrl), DD)
        }
        this.plans = cD, this.layouts = new Map((null !== (CD = DD.baf2RxLayouts) && void 0 !== CD ? CD : []).map((DD => {
          let [CD, cD, ID, pD] = DD;
          return [Bt([CD, cD, ID]), pD]
        }))), this.predicted.clear(), DD.baf2RxFormedAt && (this.formed = {
          ctrl: DD.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const ID of [...this.startersOff]) {
          const DD = cD.get(ID);
          DD && !DD.formed || this.startersOff.delete(ID)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((DD => this.planByKey(DD)))
      }
      planAt(DD) {
        return this.planByKey(Bt(DD))
      }
      predictSize(DD, CD) {
        this.predicted.set(Bt(DD), CD), this.changed()
      }
      unpredict(DD) {
        this.predicted.delete(Bt(DD)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(DD) {
        var CD;
        const cD = Bt(DD);
        return this.predicted.has(cD) ? null : null !== (CD = this.layouts.get(cD)) && void 0 !== CD ? CD : null
      }
      showsStarter(DD) {
        return !this.startersOff.has(Bt(DD))
      }
      setStarter(DD, CD) {
        const cD = Bt(DD);
        CD ? this.startersOff.delete(cD) : this.startersOff.add(cD), this.changed()
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
        const CD = this.plans.get(DD);
        if (!CD) return null;
        const cD = this.predicted.get(DD);
        return cD ? {
          ...CD,
          box: Wc(CD.box, CD.kind, cD[0], cD[1], cD[2])
        } : CD
      }
      changed() {
        this.version++;
        for (const DD of this.listeners) DD()
      }
    }
    var tt = cD(194);
    const Zt = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function ot(DD, CD, cD, ID) {
      const pD = DD.length / 3;
      for (let iD = 0; iD < Zt.length / 3; iD++) DD.push(Zt[3 * iD] * ID[0] / 2 + cD[0], Zt[3 * iD + 1] * ID[1] / 2 + cD[1], Zt[3 * iD + 2] * ID[2] / 2 + cD[2]);
      for (let iD = pD; iD < pD + 24; iD += 4) CD.push(iD, iD + 1, iD + 2, iD, iD + 2, iD + 3)
    }

    function vt(DD, CD, cD) {
      const ID = CD[0][0],
        pD = [],
        iD = [];
      for (const [fD, bD] of CD) ot(pD, iD, [fD[0] - ID[0], fD[1] - ID[1], fD[2] - ID[2]], bD);
      return DD.createGameMesh({
        positions: pD,
        indices: iD
      }, cD, ID)
    }

    function Nt(DD, CD) {
      const cD = DD.w - 2,
        ID = DD.d - 2;
      return 1 === function(DD, CD, cD, ID) {
        const [pD, iD, fD] = DD;
        if (Number(pD <= 2) + Number(iD <= 2) + Number(fD <= 2) >= 2) return function(DD, CD, cD) {
          return (DD + CD + cD) % 2 === 0 ? 1 : 3
        }(CD, cD, ID);
        const [bD, QD] = pD >= iD && pD >= fD ? [cD, ID] : iD >= fD ? [CD, ID] : [CD, cD];
        return bD % 2 === 0 && QD % 2 === 0 ? 1 : 3
      }([cD, DD.h - 2, ID], CD % cD, Math.floor(CD / (cD * ID)), Math.floor(CD / cD) % ID) ? "rod" : "channel"
    }

    function gt(DD, CD, cD) {
      if ("reactor" !== DD.kind || DD.formed || !CD) return !1;
      const ID = ec(DD.box);
      for (let pD = 0; pD < ID; pD++) {
        const DD = cD(pD);
        if (null !== DD && Jc(DD)) return !1
      }
      return !0
    }

    function Xt(DD, CD, cD, ID, pD) {
      var iD;
      let fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const bD = DI(DD.box, CD),
        QD = pI(DD.kind, bD, cD);
      if ("wrong" === QD || "blocked" === QD) return "wrong";
      if (!pD) return null;
      if ("inside" === bD && "reactor" === DD.kind && "Air" === Kc(cD)) {
        if (null !== fD) {
          var wD;
          const cD = Dy[Cy(fD, CI(DD.box, CD))];
          return cD && null !== (wD = JQ(cD)) && void 0 !== wD ? wD : null
        }
        if (ID) return Nt(DD.box, CI(DD.box, CD))
      }
      if ("missing" !== QD) return null;
      const SD = iI(DD.kind, bD);
      return null === SD ? null : null !== (iD = JQ(SD)) && void 0 !== iD ? iD : null
    }
    const mt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function nt(DD, CD, cD) {
      const ID = cD => {
        const ID = CD(Ac(DD.box, cD));
        return null !== ID && function(DD, CD) {
          return "reactor" !== DD.kind || CD !== hc(DD.box) && "inside" !== DI(DD.box, CD)
        }(DD, cD) && "ok" !== pI(DD.kind, DI(DD.box, cD), ID)
      };
      if (cD) {
        const iD = Fc(DD.box, [Math.floor(cD[0]), Math.floor(cD[1]), Math.floor(cD[2])]);
        if (iD >= 0 && (ID(iD) || (pD = iD, "reactor" === DD.kind && "inside" === DI(DD.box, pD) && "Air" === CD(Ac(DD.box, pD))))) return iD
      }
      var pD;
      const iD = ec(DD.box);
      for (let fD = 0; fD < iD; fD++)
        if (ID(fD)) return fD;
      return -1
    }

    function Ot(DD, CD) {
      return Math.floor(CD / (DD.w * DD.d))
    }

    function Pt(DD, CD, cD) {
      return cD >= 0 && Ot(DD, CD) > Ot(DD, cD)
    }

    function Ht(DD, CD) {
      return CD >= 0 && DD.h >= 3 && Ot(DD, CD) === DD.h - 1
    }

    function Ut(DD) {
      const CD = Kc(DD);
      return CD === Nc || "Collider" === CD || "Laser" === CD || CD.startsWith("_Collider ")
    }

    function xt(DD, CD, cD, ID) {
      if (ID(DD)) return null;
      if (!mt.every((CD => {
          let [ID, pD, iD] = CD;
          const fD = cD([DD[0] + ID, DD[1] + pD, DD[2] + iD]);
          return null !== fD && !Tc("reactor", fD) && "reactor" !== ac(fD)
        }))) return null;
      const pD = Gc("reactor").min,
        iD = dc([DD[0], DD[1], DD[2]], function(DD, CD) {
          const cD = CD[0] - (DD[0] + .5),
            ID = CD[2] - (DD[2] + .5);
          return Math.abs(cD) >= Math.abs(ID) ? cD >= 0 ? 2 : 4 : ID >= 0 ? 1 : 3
        }(DD, CD), pD, pD, pD, Yc("reactor", pD)),
        fD = hc(iD);
      let bD = !0;
      for (let QD = 0; QD < ec(iD) && bD; QD++) {
        if (QD === fD) continue;
        const DD = Ac(iD, QD),
          CD = cD(DD);
        bD = !ID(DD) && (null === CD || !Ut(CD))
      }
      return {
        box: iD,
        fits: bD
      }
    }
    const qt = qQ,
      Jt = "baf2Goal",
      Kt = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Vt = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      zt = .4;

    function jt(DD, CD) {
      let [cD, ID, pD] = DD;
      const iD = LQ([cD - .02, ID - .02, pD - .02], [cD + 1.02, ID + 1.02, pD + 1.02], .07);
      return CD && (iD.push([
        [cD + .5, ID + 1 + .7, pD + .5],
        [.08, 1.4, .08]
      ]), iD.push([
        [cD + .5, ID + 1 + 1.4 + .2, pD + .5],
        [zt, zt, zt]
      ])), iD
    }

    function lt(DD, CD) {
      let [cD, ID, pD] = CD;
      return DD.isBlockInLoadedChunk(cD, ID, pD) ? DD.blockIdToBlockName(DD.getBlockId(cD, ID, pD)) : null
    }
    let Lt = null;
    const Tt = new Set;
    let Gt = null;

    function Rt(DD) {
      Lt = DD;
      for (const CD of Tt) CD(DD)
    }
    class kt {
      constructor(DD) {
        var CD;
        this.plans = DD, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (CD = DD => {
          var CD, cD;
          this.setGoal(null !== (CD = null === DD || void 0 === DD ? void 0 : DD.goal) && void 0 !== CD ? CD : null, null !== (cD = null === DD || void 0 === DD ? void 0 : DD.startsBattery) && void 0 !== cD && cD)
        }, Gt ??= [Vp.i.subscribe("setDirectionArrow", (DD => {
          let {
            id: CD,
            position: cD,
            text: ID
          } = DD;
          CD === Jt && Rt({
            goal: [Math.floor(cD[0]), Math.floor(cD[1]), Math.floor(cD[2])],
            startsBattery: JSON.stringify(null !== ID && void 0 !== ID ? ID : null).includes("arrowStartBattery")
          })
        })), Vp.i.subscribe("clearDirectionArrow", (DD => {
          let {
            id: CD
          } = DD;
          null !== CD && CD !== Jt || Rt(null)
        }))], Tt.add(CD), CD(Lt), () => {
          Tt.delete(CD)
        })
      }
      onAfterRender(DD, CD) {
        const cD = performance.now();
        if (this.cues.length > 0) {
          const CD = .55 + .45 * Math.sin(cD / 1100 * Math.PI * 2);
          for (const cD of this.cues) DD.setGameMesh(cD, {
            visibility: CD
          })
        }
        if (cD - this.lastCheckMs < 150) return;
        this.lastCheckMs = cD;
        const ID = this.plans.all().filter((DD => {
            const [cD, ID, pD] = DD.box.ctrl;
            return (!DD.formed || null !== this.plans.layoutOf(DD.box.ctrl)) && (cD - CD[0]) ** 2 + (ID - CD[1]) ** 2 + (pD - CD[2]) ** 2 <= 2304
          })),
          pD = function(DD, CD) {
            const cD = tt.h.Wt,
              ID = new Map;
            for (const iD of CD) {
              const CD = Ac(iD.box, 0),
                fD = Ac(iD.box, ec(iD.box) - 1),
                bD = [Math.min(CD[0], fD[0]), Math.min(CD[1], fD[1]), Math.min(CD[2], fD[2])].map((DD => Math.floor(DD / cD))),
                QD = [Math.max(CD[0], fD[0]), Math.max(CD[1], fD[1]), Math.max(CD[2], fD[2])].map((DD => Math.floor(DD / cD)));
              for (let cD = bD[0]; cD <= QD[0]; cD++)
                for (let CD = bD[1]; CD <= QD[1]; CD++)
                  for (let iD = bD[2]; iD <= QD[2]; iD++) {
                    var pD;
                    ID.set(`${cD},${CD},${iD}`, null !== (pD = DD.getChunkVersion(cD, CD, iD)) && void 0 !== pD ? pD : -1)
                  }
            }
            return ID
          }(DD, ID);
        this.plans.getVersion() === this.storeVersion && (function(DD, CD) {
          if (DD.size !== CD.size) return !1;
          for (const [cD, ID] of DD)
            if (CD.get(cD) !== ID) return !1;
          return !0
        }(pD, this.chunkVersions) || cD - this.lastRescanMs < 600) || (this.lastRescanMs = cD, this.storeVersion = this.plans.getVersion(), this.chunkVersions = pD, this.redraw(DD, ID))
      }
      dispose(DD) {
        this.unwatch(), Lt = null, this.clearMeshes(DD), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(DD, CD) {
        var cD;
        (null === DD || void 0 === DD ? void 0 : DD.join()) === (null === (cD = this.goal) || void 0 === cD ? void 0 : cD.join()) && CD === this.startsBattery || (this.goal = DD, this.startsBattery = CD, this.storeVersion = -1)
      }
      redraw(DD, CD) {
        const cD = CD => lt(DD, CD),
          ID = new Map,
          pD = [],
          iD = this.plans.guideOn();
        for (const wD of CD) {
          const DD = iD && gt(wD, this.plans.showsStarter(wD.box.ctrl), (DD => cD(Ac(wD.box, DD)))),
            CD = "reactor" === wD.kind ? this.plans.layoutOf(wD.box.ctrl) : null,
            fD = iD && !wD.formed ? nt(wD, cD, this.goal) : -1;
          fD >= 0 && pD.push([Ac(wD.box, fD), Ht(wD.box, fD)]);
          const bD = ec(wD.box);
          for (let pD = 0; pD < bD; pD++) {
            const bD = Ac(wD.box, pD),
              QD = cD(bD),
              SD = null === QD ? null : Xt(wD, pD, QD, DD, iD, CD);
            if (null !== SD) {
              const DD = "wrong" !== SD && Pt(wD.box, pD, fD),
                CD = DD ? `${SD}Dim` : SD;
              let cD = ID.get(CD);
              cD || (cD = {
                draw: {
                  ghost: SD,
                  dim: DD
                },
                list: []
              }, ID.set(CD, cD)), cD.list.push(bD)
            }
          }
        }
        if (iD && this.startsBattery && this.goal) {
          const [DD, CD, pD] = this.goal, iD = [];
          for (const [ID, fD, bD] of Kt) {
            const QD = [DD + ID, CD + fD, pD + bD];
            "Air" === cD(QD) && iD.push(QD)
          }
          if (iD.length > 0) {
            var fD;
            const DD = null !== (fD = ID.get("cell")) && void 0 !== fD ? fD : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            DD.list.push(...iD), ID.set("cell", DD)
          }
        }
        const bD = [...ID.keys()].sort(),
          QD = [...bD.map((DD => `${DD}:${ID.get(DD).list.join(";")}`)), `cue:${pD.join(";")}`].join("|");
        if (QD !== this.shownKey) {
          this.shownKey = QD, this.clearMeshes(DD);
          for (const CD of bD) {
            const {
              draw: cD,
              list: pD
            } = ID.get(CD);
            this.meshes.push(this.build(DD, cD, pD))
          }
          for (const [CD, cD] of pD) this.cues.push(vt(DD, jt(CD, cD), Vt))
        }
      }
      build(DD, CD, cD) {
        let {
          ghost: ID,
          dim: pD
        } = CD;
        const {
          size: iD,
          colour: fD,
          alpha: bD
        } = qt[ID], QD = cD[0], wD = [], SD = [];
        for (const [BD, yD, MD] of cD) ot(wD, SD, [BD - QD[0] + .5, yD - QD[1] + .5, MD - QD[2] + .5], [iD, iD, iD]);
        return DD.createGameMesh({
          positions: wD,
          indices: SD
        }, {
          rgb: fD,
          alpha: bD * (pD ? .3 : 1)
        }, QD)
      }
      clearMeshes(DD) {
        for (const CD of [...this.meshes, ...this.cues]) DD.disposeGameMesh(CD);
        this.meshes = [], this.cues = []
      }
    }
    const dt = [.56, .83, 1],
      Yt = [1, .3, .25];
    class Wt {
      constructor(DD) {
        this.plans = DD, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(DD, CD, cD) {
        var ID;
        const pD = performance.now();
        if (pD - this.lastCheckMs < 150) return;
        this.lastCheckMs = pD;
        const iD = CD => lt(DD, CD),
          fD = null === (ID = DD.FDD(CD)) || void 0 === ID ? void 0 : ID.name,
          bD = fD && "Reactor Frame" === Kc(fD) ? DD.getTargetedBlock() : null,
          QD = bD ? [bD.Of[0], bD.Of[1], bD.Of[2]] : null,
          wD = null !== QD && "Air" === iD(QD) && QD.every(((DD, CD) => Math.abs(DD + .5 - cD[CD]) <= 8)) ? xt(QD, cD, iD, (DD => this.inPlan(DD))) : null,
          SD = wD ? `${wD.box.ctrl.join()}|${wD.box.rot}|${wD.fits}` : "";
        SD !== this.shownKey && this.show(DD, SD, wD)
      }
      dispose(DD) {
        this.clear(DD), this.shownKey = ""
      }
      inPlan(DD) {
        return this.plans.all().some((CD => Fc(CD.box, DD) >= 0))
      }
      show(DD, CD, cD) {
        if (this.clear(DD), this.shownKey = CD, !cD) return;
        const {
          box: ID,
          fits: pD
        } = cD, iD = pD ? dt : Yt, {
          lo: fD,
          hi: bD
        } = lQ(ID);
        this.meshes.push(vt(DD, LQ(fD, bD, .05), {
          rgb: iD,
          alpha: 1
        }));
        const QD = [],
          wD = Ac(ID, 0)[1];
        for (let SD = 0; SD < ID.w * ID.d; SD++) {
          const [DD, , CD] = Ac(ID, SD);
          QD.push([
            [DD + .5, wD + .02 + .01, CD + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(vt(DD, QD, {
          rgb: iD,
          alpha: .25
        }))
      }
      clear(DD) {
        for (const CD of this.meshes) DD.disposeGameMesh(CD);
        this.meshes = []
      }
    }
    const st = "buildAFactory2Game:";

    function Et(DD, CD, cD) {
      const ID = DD => {
          const [cD, ID, pD] = DD.box.ctrl;
          return cD === CD[0] && ID === CD[1] && pD === CD[2]
        },
        pD = DD.find((DD => ID(DD) || Fc(DD.box, CD) >= 0));
      if (!pD) return null;
      const iD = function(DD, CD, cD) {
        const {
          w: ID,
          h: pD,
          d: iD
        } = DD.box, fD = "reactor" === DD.kind ? `${st}rxTitle` : `${st}batTitle`;
        if (DD.formed) return {
          key: `${st}lookPlanFormed`,
          kindKey: fD,
          w: ID,
          h: pD,
          d: iD,
          count: 0
        };
        let bD = 0,
          QD = 0;
        for (let SD = 0; SD < ec(DD.box); SD++) {
          const CD = cD(Ac(DD.box, SD)),
            ID = null === CD ? "ok" : pI(DD.kind, DI(DD.box, SD), CD);
          bD += "missing" === ID ? 1 : 0, QD += "wrong" === ID || "blocked" === ID ? 1 : 0
        }
        const wD = function(DD, CD, cD) {
          if (CD < 0 || null === cD) return;
          const ID = DI(DD.box, CD),
            pD = pI(DD.kind, ID, cD);
          return "blocked" === pD ? `${st}lookWhy_blocked` : "wrong" === pD ? "ctrl" === ID ? `${st}lookWhy_ctrl` : `${st}lookWhy_reactor_${ID}` : void 0
        }(DD, Fc(DD.box, CD), cD([CD[0], CD[1], CD[2]]));
        if (bD > 0) return {
          key: `${st}lookPlanToBuild`,
          kindKey: fD,
          w: ID,
          h: pD,
          d: iD,
          count: bD,
          why: wD
        };
        if (QD > 0) return {
          key: `${st}lookPlanTakeOut`,
          kindKey: fD,
          w: ID,
          h: pD,
          d: iD,
          count: QD,
          why: wD
        };
        return {
          key: "reactor" === DD.kind ? `${st}lookPlanNoRods` : `${st}lookPlanDone`,
          kindKey: fD,
          w: ID,
          h: pD,
          d: iD,
          count: 0
        }
      }(pD, CD, cD);
      return "reactor" === pD.kind && ID(pD) ? {
        ...iD,
        ctrl: !0
      } : iD
    }

    function et(DD, CD) {
      return DD === CD || null !== DD && null !== CD && DD.key === CD.key && DD.kindKey === CD.kindKey && DD.w === CD.w && DD.h === CD.h && DD.d === CD.d && DD.count === CD.count && DD.why === CD.why && DD.ctrl === CD.ctrl
    }

    function ut() {
      return performance.now()
    }
    class ht {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ut;
        this.ticket = DD, this.sent = CD, this.backstopMs = cD, this.now = ID, this.queuedAt = void 0, this.queuedAt = ID()
      }
      answered() {
        const DD = this.now(),
          CD = this.sent.leftAt(this.ticket);
        return null !== CD && DD - CD > 4e3 || DD - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class rt {
      constructor() {
        this.echoes = []
      }
      add(DD) {
        this.echoes = this.echoes.filter((DD => !DD.answered())), this.echoes.push(DD)
      }
      answered() {
        var DD, CD;
        return null === (DD = null === (CD = this.echoes.at(-1)) || void 0 === CD ? void 0 : CD.answered()) || void 0 === DD || DD
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((DD => DD.answered()))
      }
      age() {
        var DD, CD;
        return null !== (DD = null === (CD = this.echoes.at(-1)) || void 0 === CD ? void 0 : CD.age()) && void 0 !== DD ? DD : null
      }
      clear() {
        this.echoes = []
      }
    }
    class At {
      constructor(DD) {
        this.send = DD, this.value = null, this.sent = null, this.echoes = new rt, this.down = !1, this.timer = null
      }
      shown(DD) {
        return null === this.value ? DD : this.down || this.value !== this.sent ? this.value : DD === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), DD) : this.value
      }
      pendingFor(DD) {
        return null !== this.value && this.value === this.sent && DD !== this.value ? this.echoes.age() : null
      }
      assume(DD, CD) {
        this.disarm(), this.down = !1, this.value = DD, this.sent = DD, this.echoes.clear(), this.echoes.add(CD)
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
    class Ft {
      constructor() {
        this.pending = new Map
      }
      set(DD, CD, cD) {
        var ID;
        const pD = null !== (ID = this.pending.get(DD)) && void 0 !== ID ? ID : {
          on: CD,
          echoes: new rt
        };
        pD.on = CD, pD.echoes.add(cD), this.pending.set(DD, pD)
      }
      shown(DD) {
        let CD = DD;
        for (const [cD, {
            on: ID,
            echoes: pD
          }] of this.pending) 0 !== (DD & cD) === ID && pD.agreeCounts() || pD.answered() ? this.pending.delete(cD) : CD = ID ? CD | cD : CD & ~cD;
        return CD
      }
      pendingMask() {
        let DD = 0;
        for (const CD of this.pending.keys()) DD |= CD;
        return DD
      }
      pendingFor(DD) {
        let CD = null;
        for (const [ID, {
            on: pD,
            echoes: iD
          }] of this.pending) {
          if (void 0 !== DD && 0 !== (DD & ID) === pD) continue;
          const fD = iD.age();
          var cD;
          if (null !== fD) CD = Math.max(null !== (cD = CD) && void 0 !== cD ? cD : 0, fD)
        }
        return CD
      }
      clear() {
        this.pending.clear()
      }
    }
    class DZ {
      constructor() {
        this.dims = null, this.echoes = new rt, this.unmet = null
      }
      shown(DD) {
        var CD;
        return this.dims && (CZ(this.dims, DD) && this.echoes.agreeCounts() || this.echoes.answered()) && (CZ(this.dims, DD) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (CD = this.dims) && void 0 !== CD ? CD : DD
      }
      takeUnmet() {
        const DD = this.unmet;
        return this.unmet = null, DD
      }
      set(DD, CD) {
        this.dims = DD, this.echoes.add(CD)
      }
      pendingFor(DD) {
        return null === this.dims || DD && CZ(this.dims, DD) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function CZ(DD, CD) {
      return DD[0] === CD[0] && DD[1] === CD[1] && DD[2] === CD[2]
    }
    class cZ {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut;
        this.now = DD, this.taps = new Map
      }
      tap(DD, CD, cD) {
        return !this.busy(DD) && (this.taps.set(DD, {
          at: this.now(),
          done: CD
        }), cD(), !0)
      }
      settle(DD) {
        for (const [CD, cD] of [...this.taps]) cD.done(DD) && this.taps.delete(CD)
      }
      busy(DD) {
        const CD = this.taps.get(DD);
        return !!CD && (!(this.now() - CD.at >= 3e3) || (this.taps.delete(DD), !1))
      }
      busyIds() {
        const DD = new Set;
        for (const CD of [...this.taps.keys()]) this.busy(CD) && DD.add(CD);
        return DD
      }
      clear() {
        this.taps.clear()
      }
    }

    function IZ(DD) {
      return {
        send: CD => DD.track(CD),
        sendUrgent: (CD, cD) => DD.track(CD, {
          urgent: !0,
          supersedes: cD
        }),
        leftAt: CD => DD.leftAt(CD),
        holdReserve: () => DD.holdUrgentReserve(),
        answerMs: Tf
      }
    }

    function pZ() {
      return performance.now()
    }

    function iZ(DD) {
      const CD = DD.baf2RxNeed.map((DD => {
        let [CD, cD] = DD;
        return [CD, cD]
      }));
      return JSON.stringify([DD.baf2RxFormed, CD, DD.baf2RxBad, DD.baf2RxCells])
    }

    function fZ(DD, CD) {
      const cD = 0 !== (CD & yC),
        ID = 0 !== (DD.baf2RxFlags & yC);
      return !cD || ID || "running" !== DD.baf2RxState && "idle" !== DD.baf2RxState ? !cD && ID && "scram" === DD.baf2RxState && DD.baf2RxFuel > 0 ? "idle" : DD.baf2RxState : "scram"
    }

    function bZ(DD) {
      return JSON.stringify([DD.baf2BatFormed, DD.baf2BatNeed, DD.baf2BatBad])
    }

    function QZ(DD) {
      return DD.join(",")
    }
    class wZ {
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
    class SZ {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(DD, CD) {
        this.lastAt = DD, this.lastUntil = DD + CD
      }
      answered(DD) {
        return this.lastAt >= DD || DD < this.lastUntil
      }
    }
    class BZ {
      constructor(DD, CD) {
        this.link = DD, this.now = CD, this.hold = new DZ, this.picked = null, this.notTaken = null
      }
      shown(DD) {
        const CD = this.hold.shown(DD);
        if (this.hold.takeUnmet() && this.picked) {
          var cD;
          const {
            plans: CD,
            ctrl: ID,
            at: pD
          } = this.picked;
          this.picked = null, CD.unpredict(ID), null === (cD = this.notTaken) || void 0 === cD || cD.call(this, DD, pD)
        }
        return CD
      }
      pendingFor(DD) {
        return this.hold.pendingFor(DD)
      }
      MM(DD, CD, cD) {
        DD.predictSize(CD, cD), this.picked = {
          plans: DD,
          ctrl: CD,
          at: this.now()
        };
        const ID = this.link.send(BC(CD, "plan", ...cD));
        this.hold.set(cD, new ht(ID, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class yZ {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pZ;
        this.plans = DD, this.readInterior = CD, this.link = cD, this.now = ID, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Ft, this.throttle = void 0, this.oneShots = void 0, this.listeners = new wZ, this.redraw = null, this.releaseReserve = null, this.size = new BZ(cD, ID), this.oneShots = new cZ(ID), this.throttle = new At((DD => this.echo(this.link.send(this.command("throttle", DD)))))
      }
      set(DD) {
        !DD.baf2RxOpen && this.raw && QZ(this.raw.baf2RxAt) === QZ(DD.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(DD), this.Uo(DD)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(DD) {
        this.size.notTaken = DD
      }
      resize(DD) {
        this.raw && (this.size.MM(this.plans, this.raw.baf2RxAt, DD), this.Uo(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const DD = this.raw.baf2RxAt;
        this.plans.setStarter(DD, !this.plans.showsStarter(DD)), this.Uo(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.Uo(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.Uo(this.raw)
      }
      send(DD) {
        if (this.raw) {
          for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
          this.link.send(this.command(DD, ...cD))
        }
      }
      tap(DD, CD) {
        this.raw && this.oneShots.tap(DD, function(DD, CD) {
          if ("start" === DD) return DD => 0 === (DD.baf2RxFlags & yC);
          if ("odConfirm" === DD) return DD => 0 !== (DD.baf2RxFlags & MC);
          const cD = iZ(CD);
          return DD => iZ(DD) !== cD
        }(DD, this.raw), CD) && ("start" === DD && (this.startedAt = this.now()), this.Uo(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(yC, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(DD, CD) {
        if (!this.raw) return;
        const cD = DD === yC ? this.command(CD ? "scram" : "start") : this.command("od", CD ? 1 : 0),
          ID = CD && DD === yC,
          pD = `${SC} ${this.raw.baf2RxAt.join(" ")} `,
          iD = this.echo(ID ? this.link.sendUrgent(cD, (DD => {
            const CD = DD.startsWith(pD) ? DD.slice(pD.length).split(" ")[0] : null;
            return "throttle" === CD || "start" === CD
          })) : this.link.send(cD));
        this.flags.set(DD, CD, iD), ID && this.throttle.assume(0, iD), this.Uo(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(DD) {
        this.throttle.drag(DD), this.raw && this.Uo(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.Uo(this.raw)
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
        for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
        return BC(this.raw.baf2RxAt, DD, ...cD)
      }
      echo(DD) {
        return new ht(DD, this.link, this.link.answerMs, this.now)
      }
      Uo(DD) {
        var CD;
        this.raw = DD;
        const cD = this.flags.shown(DD.baf2RxFlags),
          ID = {
            ...DD,
            baf2RxFlags: cD,
            baf2RxTarget: this.throttle.shown(DD.baf2RxTarget),
            baf2RxState: fZ(DD, cD)
          },
          pD = this.size.shown(ID.baf2RxDims),
          iD = this.throttle.pendingFor(),
          fD = [this.throttle.pendingFor(DD.baf2RxTarget), this.flags.pendingFor(DD.baf2RxFlags), this.size.pendingFor(DD.baf2RxDims)].filter((DD => null !== DD)),
          bD = fD.length > 0 ? Math.max(...fD) : null,
          QD = this.oneShots.busyIds(),
          wD = ID.baf2RxAt;
        let SD, BD, yD = null,
          MD = [Math.max(0, pD[0] - 2), Math.max(0, pD[1] - 2), Math.max(0, pD[2] - 2)];
        if (ID.baf2RxFormed) {
          const [DD, CD, cD] = ID.baf2RxDims;
          MD = [Math.max(0, DD - 2), Math.max(0, CD - 2), Math.max(0, cD - 2)], SD = Array.from(ID.baf2RxCells, Number), BD = `${MD.join(",")}:${ID.baf2RxCells}`
        } else {
          var tD;
          const DD = null === (tD = this.plans.planAt(wD)) || void 0 === tD ? void 0 : tD.box,
            CD = DD ? Wc(DD, "reactor", ...pD) : dc(wD, 1, ...pD, Yc("reactor", pD[0])),
            cD = this.readInterior(CD);
          yD = pQ(MD, cD), SD = cD, BD = `${MD.join(",")}:${cD.join("")}`
        }(null === (CD = this.looksOf) || void 0 === CD ? void 0 : CD.key) !== BD && (this.looksOf = {
          key: BD,
          looks: SQ(MD, SD)
        }), this.view = {
          status: ID,
          dims: pD,
          plan: yD,
          inner: MD,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(wD),
          odConfirmed: this.odConfirmed || 0 !== (ID.baf2RxFlags & gC),
          guide: this.plans.guideOn(),
          throttlePending: null !== iD,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== bD && bD >= 5e3,
          busy: QD,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== bD || QD.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.Uo(this.raw)
        }), 250))
      }
    }
    class MZ {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pZ;
        this.plans = DD, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new wZ, this.redraw = null, this.size = new BZ(CD, cD), this.oneShots = new cZ(cD)
      }
      set(DD) {
        !DD.baf2BatOpen && this.view && QZ(this.view.status.baf2BatAt) === QZ(DD.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(DD), this.Uo(DD)
      }
      tap(DD, CD) {
        if (!this.view) return;
        const cD = bZ(this.view.status);
        this.oneShots.tap(DD, (DD => bZ(DD) !== cD), CD) && this.Uo(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(DD) {
        this.size.notTaken = DD
      }
      resize(DD) {
        this.view && (this.size.MM(this.plans, this.view.status.baf2BatAt, DD), this.Uo(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.Uo(this.view.status)
      }
      subscribe(DD) {
        return this.listeners.subscribe(DD)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      Uo(DD) {
        const CD = this.size.shown(DD.baf2BatDims),
          cD = this.oneShots.busyIds();
        this.view = {
          status: DD,
          dims: CD,
          LB: PQ(CD, DD.baf2BatDims) ? DD.baf2BatCapacity : MQ(...CD),
          guide: this.plans.guideOn(),
          busy: cD
        }, this.listeners.notify(), cD.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.Uo(this.view.status)
        }), 250))
      }
    }
    const tZ = "buildAFactory2Game:";

    function ZZ() {
      var DD;
      const CD = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!CD) return null;
      const cD = CD.querySelector(".ExitButton");
      return function(DD, CD) {
        const cD = CD ? CD.left - 8 : DD.right;
        return {
          left: DD.left,
          top: DD.top,
          width: Math.max(0, cD - DD.left),
          height: DD.height
        }
      }(CD.getBoundingClientRect(), null !== (DD = null === cD || void 0 === cD ? void 0 : cD.getBoundingClientRect()) && void 0 !== DD ? DD : null)
    }
    const oZ = (0, ID.memo)((function(DD) {
      let {
        store: CD
      } = DD;
      const {
        t: cD
      } = (0, Up.F)(), [pD, iD] = (0, ID.useState)((() => CD.get())), [fD, bD] = (0, ID.useState)((() => performance.now()));
      (0, ID.useEffect)((() => (iD(CD.get()), CD.subscribe((() => {
        iD(CD.get()), bD(performance.now())
      })))), [CD]);
      const {
        alarm: QD,
        boomAt: wD
      } = pD, SD = null !== QD && null !== QD.secs, [BD, yD] = (0, ID.useState)(null);
      (0, ID.useEffect)((() => {
        if (!SD) return;
        yD(ZZ());
        const DD = setInterval((() => {
          bD(performance.now()), yD(ZZ())
        }), 250);
        return () => {
          clearInterval(DD)
        }
      }), [SD]);
      const [MD, tD] = (0, ID.useState)(!1);
      return (0, ID.useEffect)((() => {
        if (wD === -1 / 0) return;
        tD(!0);
        const DD = setTimeout((() => {
          tD(!1)
        }), 1300);
        return () => {
          clearTimeout(DD)
        }
      }), [wD]), (0, Ui.jsxs)(Ui.Fragment, {
        children: [null !== QD && (0, Ui.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: cD(QD.hot ? `${tZ}rxAlarmSiren` : `${tZ}rxAlarmDamaged`, {
            amount: String(QD.damage)
          })
        }), null !== QD && null !== QD.secs && (0, Ui.jsx)("div", {
          className: BD ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== BD && void 0 !== BD ? BD : void 0,
          "aria-live": "assertive",
          children: cD(`${tZ}rxAlarmCountdown`, {
            amount: String((ZD = QD.secs, oD = fD - QD.receivedAt, Math.max(1, Math.ceil(ZD - oD / 1e3))))
          })
        }), MD && (0, Ui.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var ZD, oD
    }));
    class vZ {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Qm(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const cD = DD.baf2RxAlarmAt.join(",");
        let ID = this.snapshot.boomAt;
        if (DD.baf2RxAlarmBoom) this.byReactor.delete(cD), ID = CD;
        else if (DD.baf2RxAlarmDamage <= 0) this.byReactor.delete(cD);
        else {
          var pD;
          this.byReactor.set(cD, {
            damage: DD.baf2RxAlarmDamage,
            secs: null !== (pD = DD.baf2RxAlarmSecs) && void 0 !== pD ? pD : null,
            hot: !0 === DD.baf2RxAlarmHot,
            receivedAt: CD
          })
        }
        this.Uo(ID)
      }
      retain(DD) {
        let CD = !1;
        for (const cD of [...this.byReactor.keys()]) DD.has(cD) || (this.byReactor.delete(cD), CD = !0);
        CD && this.Uo(this.snapshot.boomAt)
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
      Uo(DD) {
        let CD = null;
        for (const cD of this.byReactor.values())(!CD || cD.damage > CD.damage) && (CD = cD);
        this.snapshot = {
          alarm: CD,
          boomAt: DD
        };
        for (const cD of this.listeners) cD()
      }
    }
    const NZ = {
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

    function gZ(DD) {
      return [DD[0], DD[1], DD[2]]
    }

    function XZ(DD) {
      return `${DD[0]},${DD[1]},${DD[2]}`
    }
    class mZ {
      constructor(DD) {
        if (this.plans = DD, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var DD;
            return {
              active: this.glows.flatMap((DD => {
                let {
                  record: CD
                } = DD;
                return CD ? [CD] : []
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
      check(DD, CD, cD) {
        const ID = new Set(CD.map((DD => XZ(DD.box.ctrl))));
        for (const fD of function(DD, CD) {
            const cD = [],
              ID = new Map(DD);
            DD.clear();
            for (const pD of CD) {
              const CD = Bt(pD.box.ctrl),
                iD = pD.formed ? pD.level : 0;
              DD.set(CD, iD), iD > 0 && 0 === ID.get(CD) && cD.push(pD)
            }
            return cD
          }(this.levels, this.plans.all())) ID.has(XZ(fD.box.ctrl)) && this.show(DD, fD, "on", cD);
        const pD = this.plans.lastFormed();
        if (null === pD || pD.receivedAt <= this.flashedAt) return null;
        this.flashedAt = pD.receivedAt;
        const iD = function(DD, CD) {
          var cD;
          const ID = Bt(DD);
          return null !== (cD = CD.find((DD => Bt(DD.box.ctrl) === ID))) && void 0 !== cD ? cD : null
        }(pD.ctrl, CD);
        return iD && this.show(DD, iD, "formed", cD), iD
      }
      fade(DD, CD) {
        0 !== this.glows.length && (this.glows = this.glows.filter((cD => {
          let {
            mesh: ID,
            glow: pD,
            startMs: iD,
            record: fD
          } = cD;
          const bD = (CD - iD) / NZ[pD].ms;
          return bD >= 1 ? (DD.disposeGameMesh(ID), fD && (fD.endMs = CD), !1) : (DD.setGameMesh(ID, {
            visibility: "formed" === pD ? 1 - bD : Math.sin(Math.PI * bD)
          }), !0)
        })))
      }
      dispose(DD) {
        for (const {
            mesh: cD
          }
          of this.glows) DD.disposeGameMesh(cD);
        this.glows = [], this.levels.clear();
        const CD = "undefined" !== typeof window ? window : null;
        (null === CD || void 0 === CD ? void 0 : CD.baf2Glows) === this.devAccessor && delete CD.baf2Glows
      }
      show(DD, CD, cD, ID) {
        const {
          lo: pD,
          hi: iD
        } = lQ(CD.box);
        let fD = null;
        this.devLog && (fD = {
          glow: cD,
          ctrl: gZ(CD.box.ctrl),
          lo: gZ(pD),
          hi: gZ(iD),
          startMs: ID,
          endMs: null
        }, this.devLog.push(fD), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(DD, cD, LQ(pD, iD, NZ[cD].thick)),
          glow: cD,
          startMs: ID,
          record: fD
        })
      }
      build(DD, CD, cD) {
        const ID = vt(DD, cD, {
          rgb: NZ[CD].colour,
          alpha: 1
        });
        return DD.setGameMesh(ID, {
          visibility: 0
        }), ID
      }
    }
    const nZ = 1 / .6,
      OZ = {
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
        blendMode: Gb.c.Standard,
        soft: !0
      },
      PZ = {
        ...OZ,
        size: [.25, .4],
        count: 2
      };

    function HZ(DD) {
      return {
        colours: [DD, DD],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: Gb.c.Add,
        soft: !1
      }
    }
    const UZ = HZ([150, 225, 255]),
      xZ = HZ([185, 145, 255]),
      qZ = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function JZ(DD) {
      const CD = zC[DD];
      return null === CD.fuelSlot || pc(CD) ? qZ.includes(DD) ? xZ : UZ : OZ
    }
    const KZ = {
        kind: "smokePuff"
      },
      aZ = [.2, .025, .2];

    function VZ(DD, CD) {
      const [
        [cD, ID, pD],
        [iD, fD, bD]
      ] = DD.colours;
      return {
        texture: DD.soft ? KZ : "square_particle",
        LB: CD,
        minLifeTime: DD.life[0] / nZ,
        maxLifeTime: DD.life[1] / nZ,
        minEmitPower: DD.power[0] * nZ,
        maxEmitPower: DD.power[1] * nZ,
        minSize: DD.size[0],
        maxSize: DD.size[1],
        emitRate: 0,
        gravity: [0, DD.lift * nZ * nZ, 0],
        dir1: [-DD.spread, 1, -DD.spread],
        dir2: [DD.spread, 1, DD.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [cD, ID, pD, DD.alpha],
          maxColor: [iD, fD, bD, DD.alpha]
        }, {
          timeFraction: 1,
          minColor: [cD, ID, pD, 0],
          maxColor: [iD, fD, bD, 0]
        }],
        blendMode: DD.blendMode
      }
    }
    class zZ {
      constructor(DD) {
        this.fixed = DD, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(DD, CD, cD) {
        var ID;
        if (cD === this.lastFrame) return !1;
        this.lastFrame = cD;
        const pD = this.at;
        pD[0] = CD[0] + .5, pD[1] = CD[1] + 1.025, pD[2] = CD[2] + .5;
        const iD = null !== (ID = this.fixed) && void 0 !== ID ? ID : bD() ? PZ : OZ;
        let fD = this.particles.get(iD);
        return fD || (fD = DD.createParticles(function(DD) {
          return VZ(DD, Math.ceil(12 * DD.count * DD.life[1]) + DD.count)
        }(iD), {
          pos: pD,
          half: aZ
        }), this.particles.set(iD, fD)), fD.moveTo(pD), fD.emit(iD.count), !0
      }
      dispose() {
        for (const DD of this.particles.values()) DD.stop();
        this.particles.clear()
      }
    }
    class jZ {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(DD) {
        this.indexed = !0;
        for (const CD of xC) {
          const cD = JZ(CD);
          for (let ID = 1; ID <= 4; ID++) {
            const pD = DD.blockNameToBlockId(`${CD}|meta|rot${ID}|Running`, !0);
            if (null === pD) continue;
            let iD = this.pufferIndexByStyle.get(cD);
            void 0 === iD && (iD = this.pufferList.push(new zZ(cD === OZ ? null : cD)) - 1, this.pufferIndexByStyle.set(cD, iD)), this.pufferIndexById[pD] = iD + 1
          }
        }
      }
      onAfterRender(DD, CD) {
        this.indexed || this.index(DD);
        const cD = performance.now(),
          ID = 0 === this.lastMs ? 0 : Math.min(cD - this.lastMs, 250) / 1e3;
        this.lastMs = cD, this.frame++, DD.particlesEnabled() ? (this.scan(DD, CD), this.puff(DD, ID)) : this.sources = []
      }
      dispose() {
        for (const DD of this.pufferList) DD.dispose();
        this.sources = [], this.found = []
      }
      scan(DD, CD) {
        0 === this.scanRow && (this.origin = [Math.floor(CD[0]) - 12, Math.floor(CD[1]) - 6, Math.floor(CD[2]) - 12]);
        const cD = Math.min(this.scanRow + 16, 325),
          [ID, pD, iD] = this.origin,
          fD = this.hits;
        fD.length = 0;
        for (let bD = this.scanRow; bD < cD; bD++) {
          const CD = ID + bD % 25,
            cD = pD + Math.floor(bD / 25);
          DD.scanBlocks(CD, cD, iD, CD + 1, cD + 1, iD + 25, this.pufferIndexById, fD)
        }
        for (let bD = 0; bD < fD.length; bD += 4) {
          const DD = fD[bD + 3];
          this.found.push({
            pos: [fD[bD], fD[bD + 1], fD[bD + 2]],
            HS: DD,
            puffer: this.pufferList[this.pufferIndexById[DD] - 1]
          })
        }
        this.scanRow = cD, 325 === cD && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(DD, CD) {
        const cD = this.sources.length;
        if (0 !== cD) {
          this.budget = Math.min(this.budget + Math.min(cD / 1.2, 12) * CD, 2);
          for (let CD = 0; CD < cD && this.budget >= 1; CD++) {
            const CD = this.sources[this.cursor % cD];
            this.cursor = (this.cursor + 1) % cD, DD.getBlockId(CD.pos[0], CD.pos[1], CD.pos[2]) === CD.HS && (CD.puffer.puff(DD, CD.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const lZ = {
        ...HZ([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      LZ = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function TZ(DD) {
      return 0 === DD.spots.length ? 0 : Math.min(1 * DD.level, 4)
    }

    function GZ(DD) {
      return 0 === DD.glass.length ? 0 : Math.min(.75 * DD.level, 3)
    }

    function RZ(DD) {
      return `${DD.ctrl.join(",")}:${DD.rot}:${DD.cu},${DD.cv}:${DD.w},${DD.h},${DD.d}`
    }

    function kZ(DD, CD) {
      const cD = CD.w - 2,
        ID = CD.h - 2,
        pD = CD.d - 2,
        iD = [];
      for (let fD = 0; fD < cD * ID * pD; fD++) {
        const bD = fD % cD,
          QD = Math.floor(fD / cD) % pD,
          wD = Math.floor(fD / (cD * pD));
        if (bD > 0 && bD < cD - 1 && QD > 0 && QD < pD - 1 && wD > 0 && wD < ID - 1) continue;
        const SD = Ac(CD, cI(CD, fD)),
          BD = lt(DD, SD);
        if (null !== BD && "Fuel Rod" === Kc(BD))
          for (const CD of LZ) {
            const cD = [SD[0] + CD[0], SD[1] + CD[1], SD[2] + CD[2]];
            YZ(DD, cD) && iD.push(WZ(cD, CD))
          }
      }
      return iD
    }

    function dZ(DD, CD) {
      const {
        lo: cD,
        hi: ID
      } = lQ(CD), pD = [];
      for (let iD = cD[0]; iD < ID[0]; iD++)
        for (let CD = cD[1]; CD < ID[1]; CD++) {
          const fD = iD === cD[0] || iD === ID[0] - 1 || CD === cD[1] || CD === ID[1] - 1 ? 1 : Math.max(1, ID[2] - 1 - cD[2]);
          for (let bD = cD[2]; bD < ID[2]; bD += fD) {
            const fD = [iD, CD, bD];
            if (!YZ(DD, fD)) continue;
            const QD = iD === cD[0] ? LZ[1] : iD === ID[0] - 1 ? LZ[0] : bD === cD[2] ? LZ[5] : bD === ID[2] - 1 ? LZ[4] : CD === cD[1] ? LZ[3] : LZ[2];
            pD.push(WZ(fD, QD))
          }
        }
      return pD
    }

    function YZ(DD, CD) {
      const cD = lt(DD, CD);
      return null !== cD && "Reactor Glass" === Kc(cD)
    }

    function WZ(DD, CD) {
      return [
        [DD[0] + .5 + .55 * CD[0], DD[1] + .5 + .55 * CD[1], DD[2] + .5 + .55 * CD[2]],
        [0 === CD[0] ? .4 : .02, 0 === CD[1] ? .4 : .02, 0 === CD[2] ? .4 : .02]
      ]
    }
    class sZ {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(DD, CD, cD, ID) {
        const pD = [],
          iD = new Set;
        for (const wD of CD) {
          var fD, bD, QD;
          const {
            box: CD
          } = wD;
          if ("reactor" !== wD.kind || wD.level <= 0 || (CD.ctrl[0] - cD[0]) ** 2 + (CD.ctrl[1] - cD[1]) ** 2 + (CD.ctrl[2] - cD[2]) ** 2 > 576) continue;
          const SD = RZ(CD);
          iD.add(SD);
          let BD = this.spots.get(SD);
          if ((!BD || ID - BD.at > 3e3) && (BD = {
              at: ID,
              spots: kZ(DD, CD),
              glass: dZ(DD, CD)
            }, this.spots.set(SD, BD)), 0 === BD.spots.length && 0 === BD.glass.length) continue;
          const yD = this.sparking.find((DD => DD.key === SD));
          pD.push({
            key: SD,
            level: wD.level,
            spots: BD.spots,
            glass: BD.glass,
            budget: null !== (fD = null === yD || void 0 === yD ? void 0 : yD.budget) && void 0 !== fD ? fD : 0,
            cursor: null !== (bD = null === yD || void 0 === yD ? void 0 : yD.cursor) && void 0 !== bD ? bD : 0,
            glassBudget: null !== (QD = null === yD || void 0 === yD ? void 0 : yD.glassBudget) && void 0 !== QD ? QD : 0
          })
        }
        for (const wD of this.spots.keys()) iD.has(wD) || this.spots.delete(wD);
        this.sparking = pD
      }
      emit(DD, CD, cD) {
        var ID;
        if (0 === this.sparking.length || !DD.particlesEnabled() || cD === this.lastFrame) return;
        this.lastFrame = cD;
        let pD = 0,
          iD = 0;
        for (const tD of this.sparking) pD += TZ(tD), iD += GZ(tD);
        const fD = pD > 8 ? 8 / pD : 1,
          bD = iD > 6 ? 6 / iD : 1;
        let QD, wD = null,
          SD = null;
        for (const tD of this.sparking) tD.budget = Math.min(tD.budget + TZ(tD) * fD * CD, 2), tD.budget >= 1 && (!wD || tD.budget > wD.budget) && (wD = tD), tD.glassBudget = Math.min(tD.glassBudget + GZ(tD) * bD * CD, 2), tD.glassBudget >= 1 && (!SD || tD.glassBudget > SD.glassBudget) && (SD = tD);
        if (wD) wD.budget--, QD = wD.spots[wD.cursor++ % wD.spots.length];
        else {
          if (!SD) return;
          SD.glassBudget--, QD = SD.glass[Math.floor(Math.random() * SD.glass.length)]
        }
        const [BD, yD] = QD, MD = null !== (ID = this.emitter) && void 0 !== ID ? ID : this.create(DD, BD, yD);
        MD.moveTo(BD, yD), MD.emit(lZ.count)
      }
      dispose() {
        var DD;
        null === (DD = this.emitter) || void 0 === DD || DD.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(DD, CD, cD) {
        const ID = Math.ceil(14 * lZ.count * lZ.life[1]) + lZ.count;
        return this.emitter = DD.createParticles(VZ(lZ, ID), {
          pos: CD,
          half: cD
        }), this.emitter
      }
    }
    const EZ = [2, 3.2],
      eZ = 1 / 3,
      uZ = 1 / .6,
      hZ = {
        texture: KZ,
        LB: Math.ceil(18 * EZ[1]) + 4,
        minLifeTime: EZ[0] / uZ,
        maxLifeTime: EZ[1] / uZ,
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
        blendMode: Gb.c.Standard
      };
    class rZ {
      constructor(DD) {
        this.plans = DD, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new sZ, this.frame = 0, this.outline = new mZ(DD)
      }
      onAfterRender(DD, CD, cD) {
        const ID = performance.now(),
          pD = 0 === this.lastMs ? 0 : Math.min(ID - this.lastMs, 250) / 1e3;
        if (this.lastMs = ID, this.outline.fade(DD, ID), this.puff(DD, pD, cD), this.sparks.emit(DD, pD, this.frame++), ID - this.lastCheckMs < 150) return;
        this.lastCheckMs = ID;
        const iD = this.plans.all().filter((DD => DD.formed && AZ(DD.box.ctrl, cD) <= 4096));
        this.plumes = iD.filter((DD => "reactor" === DD.kind && DD.level > 0)).map((DD => ({
          box: DD.box,
          level: DD.level
        }))), this.updateHums(DD, CD, iD, cD), this.sparks.update(DD, iD, cD, ID), this.chimeFormed(DD, CD, iD, ID)
      }
      dispose(DD) {
        var CD;
        this.outline.dispose(DD), null === (CD = this.steam) || void 0 === CD || CD.dispose(), this.steam = null, this.sparks.dispose();
        for (const cD of this.hums.values()) cD.stop();
        this.hums.clear()
      }
      chimeFormed(DD, CD, cD, ID) {
        const pD = this.outline.check(DD, cD, ID);
        pD && DD.playSound(CD, "exp_levelup", .6, 1, {
          xp: [pD.box.ctrl[0] + .5, pD.box.ctrl[1], pD.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(DD, CD, cD) {
        const ID = this.plumes;
        if (0 === ID.length || !DD.particlesEnabled()) return void(this.plumeBudget = 0);
        const pD = ID.reduce(((DD, CD) => DD + 3 * CD.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + pD * CD, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let iD = this.plumeCursor % (pD / 3);
        this.plumeCursor++;
        let fD = ID[0];
        for (const BD of ID) {
          if (iD < BD.level) {
            fD = BD;
            break
          }
          iD -= BD.level
        }
        const {
          lo: bD,
          hi: QD
        } = lQ(fD.box);
        if (function(DD, CD, cD) {
            const ID = Math.max(DD[0] - cD[0], 0, cD[0] - CD[0]),
              pD = Math.max(DD[2] - cD[2], 0, cD[2] - CD[2]);
            return Math.hypot(ID, cD[1] - CD[1], pD)
          }(bD, QD, cD) < 6 && Math.random() > eZ) return;
        const wD = [(bD[0] + QD[0]) / 2, QD[1] + .05, (bD[2] + QD[2]) / 2],
          SD = [(QD[0] - bD[0]) / 2 - .5, .05, (QD[2] - bD[2]) / 2 - .5];
        this.steam ??= DD.createParticles(hZ, {
          pos: wD,
          half: SD
        }), this.steam.moveTo(wD, SD), this.steam.emit(1)
      }
      updateHums(DD, CD, cD, ID) {
        const pD = new Map;
        for (const fD of cD) "reactor" === fD.kind && fD.level > 0 && AZ(fD.box.ctrl, ID) <= 576 && pD.set(`${iD=fD.box.ctrl,`${iD[0]},${iD[1]},${iD[2]}`}:${fD.level}`, fD);
        var iD;
        for (const [fD, bD] of this.hums) pD.has(fD) || (bD.stop(), this.hums.delete(fD));
        for (const [fD, bD] of pD) {
          if (this.hums.has(fD)) continue;
          const {
            lo: cD,
            hi: ID
          } = lQ(bD.box), pD = [(cD[0] + ID[0]) / 2, cD[1], (cD[2] + ID[2]) / 2], iD = DD.playSound(CD, "rocketEngineLoop", .08 + .06 * bD.level, .55, {
            xp: pD,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          iD && this.hums.set(fD, iD)
        }
      }
    }

    function AZ(DD, CD) {
      return (DD[0] - CD[0]) ** 2 + (DD[1] - CD[1]) ** 2 + (DD[2] - CD[2]) ** 2
    }
    class FZ {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Qm(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const ID = [DD.baf2BombAt[0], DD.baf2BombAt[1], DD.baf2BombAt[2]],
          pD = DD.baf2BombR;
        if (DD.baf2BombBoom) {
          const DD = Math.hypot(CD[0] - ID[0], CD[1] - ID[1], CD[2] - ID[2]);
          this.Uo({
            fuse: null,
            blast: {
              at: ID,
              r: pD,
              receivedAt: cD,
              distance: DD,
              flash: DD <= 3 * pD
            }
          })
        } else this.Uo({
          ...this.snapshot,
          fuse: DD.baf2BombMs > 0 ? {
            at: ID,
            r: pD,
            endsAt: cD + DD.baf2BombMs
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
      Uo(DD) {
        this.snapshot = DD;
        for (const CD of this.listeners) CD()
      }
    }
    const Do = (0, ID.memo)((function(DD) {
      var CD;
      let {
        store: cD
      } = DD;
      const {
        t: pD
      } = (0, Up.F)(), [iD, fD] = (0, ID.useState)((() => cD.get())), [bD, QD] = (0, ID.useState)((() => performance.now()));
      (0, ID.useEffect)((() => (fD(cD.get()), cD.subscribe((() => {
        fD(cD.get()), QD(performance.now())
      })))), [cD]);
      const {
        fuse: wD,
        blast: SD
      } = iD;
      (0, ID.useEffect)((() => {
        if (!wD) return;
        const DD = setInterval((() => {
          QD(performance.now())
        }), 250);
        return () => {
          clearInterval(DD)
        }
      }), [wD]);
      const [BD, yD] = (0, ID.useState)(!1);
      (0, ID.useEffect)((() => {
        if (null === SD || void 0 === SD || !SD.flash) return;
        yD(!0);
        const DD = setTimeout((() => {
          yD(!1)
        }), 2500);
        return () => {
          clearTimeout(DD)
        }
      }), [SD]);
      const MD = wD ? function(DD, CD) {
        return DD.endsAt <= CD ? 0 : Math.ceil((DD.endsAt - CD) / 1e3)
      }(wD, bD) : 0;
      return (0, Ui.jsxs)(Ui.Fragment, {
        children: [MD > 0 && (0, Ui.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: pD("buildAFactory2Game:bombCountdown", {
            amount: String(MD),
            radius: String(null !== (CD = null === wD || void 0 === wD ? void 0 : wD.r) && void 0 !== CD ? CD : 0)
          })
        }), BD && (0, Ui.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Co(DD) {
      const CD = Math.min(4, Math.max(1, DD / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * DD / 4)),
        capSpread: Math.min(5 * DD / 8, 24 * CD),
        capThick: 6 * CD,
        stemHalfWidth: 3 * CD,
        puffScale: CD
      }
    }
    class co {
      constructor() {
        this.Lb = !1
      }
      hold(DD) {
        DD.getCameraFar() < 1e3 && (DD.setCameraFar(1e3), this.Lb = !0)
      }
      release(DD) {
        this.Lb && (this.Lb = !1, DD.setCameraFar(null))
      }
    }
    const Io = 1 / .6,
      po = [.2, .1, .2],
      io = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      fo = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: Gb.c.Standard,
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
      bo = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: Gb.c.Standard,
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
      Qo = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: Gb.c.Standard,
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
      wo = {
        texture: KZ,
        LB: Math.ceil(120) + 4,
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
        blendMode: Gb.c.Add
      };
    class So {
      constructor(DD) {
        this.store = DD, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new co, this.timers = []
      }
      onAfterRender(DD, CD) {
        const cD = performance.now(),
          ID = 0 === this.lastMs ? 0 : Math.min(cD - this.lastMs, 250) / 1e3;
        this.lastMs = cD;
        const {
          fuse: pD,
          blast: iD
        } = this.store.get();
        null !== iD && iD !== this.shownBlast && (this.shownBlast = iD, this.startBlast(DD, CD, iD, cD));
        const fD = DD.particlesEnabled();
        null !== pD && pD.endsAt > cD && fD ? this.emitBeacon(DD, pD, ID, cD) : this.beaconBudget = 0, null !== this.cloud && (cD - this.cloud.startMs > 33e3 ? this.disposeCloud(DD) : (this.far.hold(DD), fD && this.emitCloud(DD, ID, cD)))
      }
      dispose(DD) {
        var CD;
        null === (CD = this.beacon) || void 0 === CD || CD.dispose(), this.beacon = null, this.disposeCloud(DD);
        for (const cD of this.timers) clearTimeout(cD);
        this.timers.length = 0
      }
      emitBeacon(DD, CD, cD, ID) {
        const pD = CD.endsAt - ID < 5e3 ? 350 : 1e3,
          iD = .5 + .5 * Math.sin(2 * Math.PI * ID / pD);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * iD * cD, 4), this.beaconBudget < 1) return;
        const fD = Math.floor(this.beaconBudget);
        this.beaconBudget -= fD;
        const [bD, QD, wD] = CD.at, SD = [bD + .5, QD + 1.1, wD + .5];
        this.beacon ??= DD.createParticles(wo, {
          pos: SD,
          half: po
        }), this.beacon.moveTo(SD), this.beacon.emit(fD)
      }
      startBlast(DD, CD, cD, ID) {
        var pD;
        null === (pD = this.beacon) || void 0 === pD || pD.dispose(), this.beacon = null, this.disposeCloud(DD);
        const iD = (0, Lb.isMobile)() ? .5 : 1;
        this.streams = [fo, bo, Qo].map((DD => {
          const CD = Math.round(DD.count * iD);
          return {
            spec: DD,
            particles: null,
            rate: CD / ((DD.toMs - DD.fromMs) / 1e3),
            budget: 0,
            left: CD
          }
        })), this.cloud = {
          blast: cD,
          startMs: ID
        };
        const fD = Math.max(.25, 1 - cD.distance / (6 * cD.r)),
          bD = cD.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [cD, ID, pD] of io) yo(DD, CD, cD, fD * ID, pD)
        }), bD))
      }
      emitCloud(DD, CD, cD) {
        const {
          blast: ID,
          startMs: pD
        } = this.cloud, iD = cD - pD, [fD, bD, QD] = ID.at, wD = Co(ID.r);
        for (const SD of this.streams) {
          const {
            spec: cD
          } = SD;
          if (SD.left <= 0 || iD < cD.fromMs) continue;
          SD.budget += SD.rate * CD;
          const pD = Math.min(Math.floor(SD.budget), SD.left);
          if (pD < 1) continue;
          SD.budget -= pD, SD.left -= pD;
          const BD = SD.particles ??= this.createStream(DD, cD, ID);
          if (cD === fo) {
            const DD = wD.stemHalfWidth;
            BD.moveTo([fD, bD + 1, QD], [DD, 1, DD])
          } else if (cD === bo) {
            const DD = wD.capSpread * Math.min(1, (iD - cD.fromMs) / 3e3),
              CD = Math.sqrt(Math.random()),
              ID = 2 * Math.random() * Math.PI,
              pD = Math.cos(ID) * CD,
              SD = Math.sin(ID) * CD,
              yD = fD + pD * DD,
              MD = QD + SD * DD,
              tD = wD.capThick,
              ZD = bD + wD.capHeight + tD * (1 - CD * CD) * 2;
            BD.setDirections([.7 * pD, .05, .7 * SD], [pD, .2, SD]), BD.moveTo([yD, ZD, MD], [tD, tD, tD])
          } else {
            this.ringAngle += 2.39996;
            const DD = Math.cos(this.ringAngle),
              CD = Math.sin(this.ringAngle);
            BD.setDirections([DD, .05, CD], [DD, .1, CD]), BD.moveTo([fD + 2 * DD, bD + .5, QD + 2 * CD], [0, .5, 0])
          }
          BD.emit(pD)
        }
      }
      createStream(DD, CD, cD) {
        const {
          r: ID
        } = cD, pD = Math.max(CD.life[0], ID / 25), iD = CD === Qo ? [.9 * pD, pD] : CD.life, fD = Co(ID), bD = CD === Qo ? 1 : fD.puffScale, QD = {
          texture: KZ,
          LB: CD.count + 4,
          minLifeTime: iD[0] / Io,
          maxLifeTime: iD[1] / Io,
          minSize: CD.size[0] * bD,
          maxSize: CD.size[1] * bD,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, CD.gravity * Io * Io, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: CD.from[0],
            maxColor: CD.from[1]
          }, {
            timeFraction: .6,
            minColor: Bo(CD.from[0], CD.to[0]),
            maxColor: Bo(CD.from[1], CD.to[1])
          }, {
            timeFraction: 1,
            minColor: CD.to[0],
            maxColor: CD.to[1]
          }],
          blendMode: CD.blend
        };
        if (CD === fo) {
          const DD = fD.capHeight / ((iD[0] + iD[1]) / 2);
          QD.minEmitPower = .9 * DD * Io, QD.maxEmitPower = 1.05 * DD * Io, QD.dir1 = [-.1, 1, -.1], QD.dir2 = [.1, 1, .1]
        } else CD === bo ? (QD.minEmitPower = 1.2, QD.maxEmitPower = 2, QD.dir1 = [-1, .05, -1], QD.dir2 = [1, .2, 1]) : (QD.minEmitPower = 39.583333333333336, QD.maxEmitPower = 41.66666666666667, QD.dir1 = [1, 0, 0], QD.dir2 = [1, 0, 0]);
        return DD.createParticles(QD, {
          pos: cD.at
        })
      }
      disposeCloud(DD) {
        for (const cD of this.streams) {
          var CD;
          null === (CD = cD.particles) || void 0 === CD || CD.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(DD)
      }
    }

    function Bo(DD, CD) {
      return [(DD[0] + CD[0]) / 2, (DD[1] + CD[1]) / 2, (DD[2] + CD[2]) / 2, .75 * DD[3]]
    }

    function yo(DD, CD, cD, ID, pD) {
      try {
        DD.playSound(CD, cD, ID, pD)
      } catch (iD) {
        console.error(iD)
      }
    }
    const Mo = {
        LB: 720,
        perS: 100
      },
      to = {
        LB: 320,
        perS: 44
      };
    class Zo {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(DD, CD) {
        this.zone = {
          centre: [...DD.centre],
          r: DD.r,
          band: DD.band ? [DD.band[0], DD.band[1]] : void 0
        }, this.endsAt = CD
      }
      stop() {
        this.zone = null
      }
      Qm(DD, CD) {
        const {
          baf2FalloutMs: cD,
          baf2FalloutAt: ID,
          baf2FalloutR: pD,
          baf2FalloutY: iD
        } = DD;
        cD > 0 && ID && void 0 !== pD ? this.start({
          centre: ID,
          r: pD,
          band: iD
        }, CD + cD) : this.stop()
      }
      perS(DD, CD, cD) {
        const ID = this.zone;
        if (!ID) return 0;
        const pD = this.endsAt - DD;
        return pD <= 0 ? (this.zone = null, 0) : ID.band && (CD[1] < ID.band[0] || CD[1] > ID.band[1]) || Math.hypot(CD[0] - ID.centre[0], CD[2] - ID.centre[2]) > ID.r ? 0 : cD.perS * Math.min(1, pD / 5e3)
      }
    }
    const oo = [5, 7],
      vo = [24, 8, 24],
      No = .5,
      go = 1 / .6,
      Xo = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class mo {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Lb.isMobile)();
        this.state = new Zo, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(DD) {
          return DD ? to : Mo
        }(DD)
      }
      startFallout(DD, CD) {
        this.state.start(DD, CD)
      }
      stopFallout() {
        this.state.stop()
      }
      Qm(DD) {
        this.state.Qm(DD, performance.now())
      }
      onAfterRender(DD, CD) {
        var cD;
        const ID = performance.now(),
          pD = 0 === this.lastMs ? 0 : Math.min(ID - this.lastMs, 250) / 1e3;
        this.lastMs = ID;
        const iD = this.state.perS(ID, CD, this.tier);
        if (iD <= 0 || !DD.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + iD * pD, iD / 4);
        const fD = Math.floor(this.budget);
        if (fD < 1) return;
        this.budget -= fD;
        const bD = this.at;
        bD[0] = CD[0], bD[1] = CD[1] + 12, bD[2] = CD[2];
        const QD = null !== (cD = this.systems) && void 0 !== cD ? cD : this.create(DD, bD),
          wD = this.amounts;
        wD[0] = 0, wD[1] = 0;
        for (let SD = 0; SD < fD; SD++) wD[Math.random() < .3 ? 1 : 0]++;
        for (let SD = 0; SD < QD.length; SD++) wD[SD] > 0 && (QD[SD].moveTo(bD, vo), QD[SD].emit(wD[SD]))
      }
      dispose() {
        for (const CD of null !== (DD = this.systems) && void 0 !== DD ? DD : []) {
          var DD;
          CD.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(DD, CD) {
        return this.systems = Xo.map((cD => {
          let {
            rgba: [ID, pD, iD, fD],
            share: bD
          } = cD;
          const QD = {
            texture: "square_particle",
            LB: Math.ceil(this.tier.LB * bD),
            minLifeTime: oo[0] / go,
            maxLifeTime: oo[1] / go,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [No, -1, No],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ID, pD, iD, 0]
            }, {
              timeFraction: .15,
              minColor: [ID, pD, iD, fD]
            }, {
              timeFraction: .8,
              minColor: [ID, pD, iD, fD]
            }, {
              timeFraction: 1,
              minColor: [ID, pD, iD, 0]
            }],
            blendMode: Gb.c.Standard
          };
          return DD.createParticles(QD, {
            pos: CD,
            half: vo
          })
        })), this.systems
      }
    }
    const no = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Oo(DD) {
      const CD = /\|rot(\d)/.exec(DD);
      return no[CD ? Number(CD[1]) : 1]
    }
    var Po = cD(618),
      Ho = cD(37839);
    const Uo = new Set(Po.n);

    function xo(DD) {
      if (-2 !== DD.count) return null;
      const CD = YD(DD.item);
      return null !== CD && Uo.has(CD) ? CD : null
    }

    function qo(DD) {
      const {
        width: CD,
        height: cD
      } = (0, Ho.c)(DD).hitBoxDimensions;
      return .55 / Math.max(CD, cD)
    }

    function Jo(DD, CD, cD) {
      if (!cD) return !1;
      const ID = DD[0] + .5 - CD[0],
        pD = DD[1] + .5 - CD[1],
        iD = DD[2] + .5 - CD[2];
      return ID * ID + pD * pD + iD * iD <= 576
    }

    function Ko(DD, CD) {
      return Math.atan2(DD[0], DD[2]) + Math.PI + CD
    }

    function ao(DD, CD) {
      const cD = 2 * Math.PI;
      return (DD + cD * CD / 1e4) % cD
    }
    class Vo {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = DD, this.now = CD, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = DD.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(DD, CD) {
        if (0 === this.farms.size) return;
        const cD = this.now(),
          ID = Number.isNaN(this.frameMs) ? 0 : Math.min(cD - this.frameMs, 100);
        this.frameMs = cD, cD - this.checkedMs >= 1e3 && (this.checkedMs = cD, this.check(DD, CD));
        for (const pD of this.farms.values()) pD.shown && pD.running && null !== pD.model && ID > 0 && (pD.spin = ao(pD.spin, ID), pD.model.setPose(pD.feet, Ko(pD.front, pD.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const DD of this.farms.values()) this.drop(DD);
        this.farms.clear()
      }
      sync() {
        const DD = new Set;
        for (const CD of this.labels.list()) {
          const cD = xo(CD);
          if (null === cD) continue;
          DD.add(CD.key);
          const ID = this.farms.get(CD.key);
          if ((null === ID || void 0 === ID ? void 0 : ID.mob) === cD) continue;
          ID && this.drop(ID);
          const [pD, iD, fD] = CD.pos;
          this.farms.set(CD.key, {
            pos: CD.pos,
            feet: [pD + .5, iD + 1, fD + .5],
            mob: cD,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [CD, cD] of this.farms) DD.has(CD) || (this.drop(cD), this.farms.delete(CD));
        this.checkedMs = -1 / 0
      }
      check(DD, CD) {
        for (const cD of this.farms.values()) {
          const [ID, pD, iD] = cD.pos, fD = lt(DD, cD.pos);
          null !== fD && Kc(fD) === jD && Jo(cD.pos, CD, "Air" === lt(DD, [ID, pD + 1, iD])) ? (cD.running = fD.endsWith("|Running"), cD.front = Oo(fD), null === cD.model && (cD.model = DD.createMobModel(cD.mob, qo(cD.mob)), null === cD.model) || (cD.model.setPose(cD.feet, Ko(cD.front, cD.spin)), cD.shown || (cD.model.setVisible(!0), cD.shown = !0))) : (cD.shown && null !== cD.model && cD.model.setVisible(!1), cD.shown = !1)
        }
      }
      drop(DD) {
        var CD;
        null === (CD = DD.model) || void 0 === CD || CD.dispose(), DD.model = null, DD.shown = !1
      }
    }
    class zo {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(DD) {
        var CD;
        this.island = DD.baf2ColIsland, this.islandSite = (CD = DD.baf2ColSite) && 8 === CD.length ? {
          spawnXZ: [CD[0], CD[1]],
          coreXZ: [CD[2], CD[3]],
          minXZ: [CD[4], CD[5]],
          maxXZ: [CD[6], CD[7]]
        } : null, this.views = DD.baf2ColList.map((DD => ({
          entry: fp(DD)
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
        var CD;
        return null === (CD = this.views.find((CD => {
          let {
            entry: cD
          } = CD;
          return cD.focus[0] === DD[0] && cD.focus[1] === DD[1] + 1 && cD.focus[2] === DD[2]
        }))) || void 0 === CD ? void 0 : CD.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(DD, CD) {
        return YQ(this.entries(), DD, CD)
      }
      lookSource() {
        return {
          handles: DD => yI(DD) >= 0 || MI(DD),
          line: (DD, CD) => this.lookLine(DD, CD),
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
    const jo = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((DD => DD / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((DD => [DD, DD + 1, DD + 2, DD, DD + 2, DD + 3]))
    };

    function Lo(DD, CD, cD, ID, pD, iD, fD) {
      let bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const QD = Math.cos(bD),
        wD = Math.sin(bD),
        SD = DD.positions.length / 3,
        {
          positions: BD,
          indices: yD
        } = jo;
      for (let MD = 0; MD < BD.length; MD += 3) {
        const bD = BD[MD] * pD,
          SD = BD[MD + 2] * fD;
        DD.positions.push(CD + bD * QD + SD * wD, cD + BD[MD + 1] * iD, ID - bD * wD + SD * QD)
      }
      for (const MD of yD) DD.indices.push(SD + MD)
    }

    function To(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return CD < 1 ? {
        rgb: DD,
        alpha: CD
      } : {
        rgb: DD,
        alpha: 1,
        opaque: !0
      }
    }
    class Go {
      constructor(DD, CD) {
        this.style = DD, this.perSource = CD, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(DD) {
        this.sources = DD, 0 === DD.length && (this.budget = 0)
      }
      wy(DD, CD, cD) {
        const ID = this.sources.length;
        if (0 !== ID) {
          var pD, iD;
          this.budget = Math.min(this.budget + (pD = ID, iD = this.perSource, Math.min(pD * iD, iw) * CD), 2);
          for (let CD = 0; CD < ID && this.budget >= 1; CD++) {
            const CD = this.sources[this.cursor % ID];
            this.cursor = (this.cursor + 1) % ID;
            if (!(Math.max(Math.abs(CD.x - cD[0]), Math.abs(CD.y - cD[1]), Math.abs(CD.z - cD[2])) > 32)) return this.puff(DD, CD), void this.budget--
          }
        }
      }
      dispose() {
        var DD;
        null === (DD = this.particles) || void 0 === DD || DD.dispose(), this.particles = null, this.sources = []
      }
      puff(DD, CD) {
        let {
          x: cD,
          y: ID,
          z: pD,
          h: iD,
          faces: fD
        } = CD;
        const bD = function(DD, CD, cD, ID, pD) {
            const [iD, fD, bD] = pD[Math.floor(Math.random() * pD.length)], QD = .04, wD = (DD, CD, cD) => DD > 0 ? CD + cD + QD : DD < 0 ? CD - QD : CD + .1, SD = (DD, CD, cD) => DD > 0 ? CD + cD + QD : DD < 0 ? CD - QD : CD + cD - .1, BD = [wD(iD, DD, 1), wD(fD, CD, ID), wD(bD, cD, 1)], yD = [SD(iD, DD, 1), SD(fD, CD, ID), SD(bD, cD, 1)];
            return {
              pos: [(BD[0] + yD[0]) / 2, (BD[1] + yD[1]) / 2, (BD[2] + yD[2]) / 2],
              half: [(yD[0] - BD[0]) / 2, (yD[1] - BD[1]) / 2, (yD[2] - BD[2]) / 2],
              out: [iD, fD, bD]
            }
          }(cD, ID, pD, iD, fD),
          {
            style: QD
          } = this,
          wD = this.particles ??= DD.createParticles(VZ(QD, Math.ceil(QD.count * iw * QD.life[1]) + 4), bD);
        wD.moveTo(bD.pos, bD.half);
        const [SD, BD, yD] = bD.out, MD = QD.spread;
        wD.setDirections([SD - MD, .6 + BD, yD - MD], [SD + MD, 1 + BD, yD + MD]), wD.emit(QD.count)
      }
    }
    const Ro = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class ko {
      constructor() {
        this.green = new Go(bw.green, Iw), this.pink = new Go(bw.pink, pw), this.colliders = [], this.lastMs = 0
      }
      setSources(DD) {
        this.colliders = DD;
        const CD = [],
          cD = [];
        for (const ID of DD) {
          const [DD, pD, iD] = ID.focus;
          CD.push({
            x: DD,
            y: pD - 1,
            z: iD,
            h: 2,
            faces: Ro
          });
          for (let CD = 0; CD < 4; CD++) {
            if (!ID.live[CD]) continue;
            const [DD, pD, iD] = oI(ID.focus, CD, fI.LASER_D), [fD, , bD] = ZI[CD], QD = Ro.filter((DD => DD[0] !== fD || DD[2] !== bD || 0 !== DD[1]));
            cD.push({
              x: DD,
              y: pD,
              z: iD,
              h: 1,
              faces: QD
            })
          }
        }
        this.green.setSources(CD), this.pink.setSources(cD)
      }
      onAfterRender(DD) {
        const CD = performance.now(),
          cD = 0 === this.lastMs ? 0 : Math.min(CD - this.lastMs, 250) / 1e3;
        if (this.lastMs = CD, 0 === this.colliders.length || !DD.particlesEnabled()) return;
        const ID = DD.getCameraPosition();
        this.green.wy(DD, cD, ID), this.pink.wy(DD, cD, ID)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Yo = 1.04,
      Wo = To([1, 120 / 255, 220 / 255]),
      so = To([1, .25, .25], .35);
    class Eo {
      constructor(DD) {
        this.store = DD, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new ko
      }
      onAfterRender(DD) {
        this.store.version() !== this.builtVersion && this.rebuild(DD);
        const CD = performance.now();
        for (const cD of this.beams) {
          const ID = 1 + .35 * Math.sin(CD / 700 * Math.PI * 2 + cD.phase);
          DD.setGameMesh(cD.mesh, {
            scale: [cD.alongX ? 1 : ID, ID, cD.alongX ? ID : 1]
          })
        }
        this.glow.onAfterRender(DD)
      }
      dispose(DD) {
        this.clear(DD), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(DD) {
        this.clear(DD), this.builtVersion = this.store.version();
        const CD = [];
        for (const {
            entry: cD
          }
          of this.store.colliders()) cD.on && cD.live.some(Boolean) && (this.addBeams(DD, cD), CD.push(cD)), cD.blockers.length > 0 && this.addMarkers(DD, cD);
        this.glow.setSources(CD)
      }
      addBeams(DD, CD) {
        const [cD, ID, pD] = CD.focus, iD = Cw - .25, fD = (.25 + Cw) / 2;
        for (let bD = 0; bD < 4; bD++) {
          if (!CD.live[bD]) continue;
          const [QD, , wD] = ZI[bD], SD = 0 !== QD, BD = {
            positions: [],
            indices: []
          };
          Lo(BD, 0, 0, 0, SD ? iD : .2, .2, SD ? .2 : iD);
          const yD = [cD + .5 + QD * fD, ID + .5, pD + .5 + wD * fD],
            MD = DD.createGameMesh(BD, Wo, yD);
          this.meshes.push(MD), this.beams.push({
            mesh: MD,
            alongX: SD,
            phase: bD * Math.PI / 2
          })
        }
      }
      addMarkers(DD, CD) {
        const cD = CD.blockers[0],
          ID = {
            positions: [],
            indices: []
          };
        for (const [pD, iD, fD] of CD.blockers) Lo(ID, pD - cD[0] + .5, iD - cD[1] + .5, fD - cD[2] + .5, Yo, Yo, Yo);
        this.meshes.push(DD.createGameMesh(ID, so, cD))
      }
      clear(DD) {
        for (const CD of this.meshes) DD.disposeGameMesh(CD);
        this.meshes = [], this.beams = []
      }
    }
    const eo = [.56, .83, 1],
      uo = [1, .73, .08],
      ho = [1, .25, .25],
      ro = [.85, .85, .85],
      Ao = [.3, .45, .6];

    function Fo(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const fD = pD / 2,
        bD = pD + iD;
      for (const QD of [-fD, fD])
        for (const pD of [-fD, fD]) Lo(DD, CD, cD + QD, ID + pD, bD, iD, iD), Lo(DD, CD + QD, cD, ID + pD, iD, bD, iD), Lo(DD, CD + QD, cD + pD, ID, iD, iD, bD)
    }

    function Dv(DD) {
      return CD => DD.isBlockInLoadedChunk(CD[0], CD[1], CD[2]) && 0 === DD.getBlockId(CD[0], CD[1], CD[2])
    }

    function Cv(DD) {
      return DD.map((DD => {
        let {
          free: CD,
          blocked: cD,
          gaps: ID,
          supports: pD
        } = DD;
        return `${CD.join(";")}|${cD.join(";")}|${ID.join(";")}|${pD.join(";")}`
      })).join("/")
    }

    function cv(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const iD = CD[0],
        fD = {
          positions: [],
          indices: []
        };
      for (const [bD, QD, wD] of CD) Fo(fD, bD - iD[0] + .5, QD - iD[1] + .5, wD - iD[2] + .5, ID, pD);
      return DD.createGameMesh(fD, cD, iD)
    }
    class Iv {
      constructor(DD) {
        this.store = DD, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(DD, CD, cD) {
        var ID;
        const pD = null === (ID = DD.FDD(CD)) || void 0 === ID ? void 0 : ID.name;
        if (pD !== QI && pD !== bI) return void("" !== this.shownKey && this.show(DD, "", []));
        const iD = performance.now();
        if (iD - this.lastCheckMs >= 200 && (this.lastCheckMs = iD, pD === QI ? this.check(DD, cD) : this.preview(DD, cD)), this.pulses.length > 0) {
          const CD = 1 + .12 * Math.sin(iD / 1e3 * 1.25 * Math.PI * 2),
            cD = [CD, CD, CD];
          for (const ID of this.pulses) DD.setGameMesh(ID, {
            scale: cD
          })
        }
      }
      dispose(DD) {
        this.clear(DD), this.shownKey = ""
      }
      check(DD, CD) {
        const cD = Dv(DD),
          ID = [];
        for (const {
            entry: iD
          }
          of this.store.colliders()) {
          iD.focus.every(((DD, cD) => Math.abs(DD + .5 - CD[cD]) <= fI.GHOST_REACH)) && ID.push(Dw(iD, cD))
        }
        const pD = Cv(ID);
        pD !== this.shownKey && this.show(DD, pD, ID)
      }
      preview(DD, CD) {
        const cD = DD.getTargetedBlock(),
          ID = cD ? [cD.Of[0], cD.Of[1], cD.Of[2]] : null,
          pD = null !== ID && ID.every(((DD, cD) => Math.abs(DD + .5 - CD[cD]) <= 8)),
          iD = this.store.site(),
          fD = pD && iD ? function(DD, CD, cD) {
            const ID = tI(DD);
            if (!ID.every(CD)) return null;
            const pD = gI(DD, cD);
            return {
              column: ID,
              spots: Dw({
                focus: ID[1],
                lasers: [!1, !1, !1, !1],
                open: pD,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, CD),
              fits: pD.filter(Boolean).length >= fI.MIN_SPOTS
            }
          }(ID, Dv(DD), iD) : null,
          bD = fD ? [fD.spots] : [],
          QD = fD ? `preview ${ID.join(",")}|${fD.fits}|${Cv(bD)}` : "";
        var wD, SD;
        QD !== this.shownKey && this.show(DD, QD, bD, null !== (wD = null === fD || void 0 === fD ? void 0 : fD.column) && void 0 !== wD ? wD : [], null === (SD = null === fD || void 0 === fD ? void 0 : fD.fits) || void 0 === SD || SD)
      }
      show(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(DD), this.shownKey = CD, ID.length > 0 && this.meshes.push(cv(DD, ID, To(pD ? ro : ho)));
        for (const {
            free: iD,
            blocked: fD,
            gaps: bD,
            supports: QD
          }
          of cD) {
          for (const [CD, cD, ID] of iD) {
            const pD = {
              positions: [],
              indices: []
            };
            Fo(pD, 0, 0, 0);
            const iD = DD.createGameMesh(pD, To(eo), [CD + .5, cD + .5, ID + .5]);
            this.meshes.push(iD), this.pulses.push(iD)
          }
          fD.length > 0 && this.meshes.push(cv(DD, fD, To(uo))), bD.length > 0 && this.meshes.push(cv(DD, bD, To(ho), 1.06, .07)), QD.length > 0 && this.meshes.push(cv(DD, QD, To(Ao)))
        }
      }
      clear(DD) {
        for (const CD of this.meshes) DD.disposeGameMesh(CD);
        this.meshes = [], this.pulses = []
      }
    }
    class pv {
      constructor() {
        this.stored = new Map, this.Lb = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(DD) {
        if (!DD.baf2TermOpen) return !1;
        DD.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [CD, cD] of DD.baf2TermItems) cD > 0 ? this.stored.set(CD, cD) : this.stored.delete(CD);
        if (DD.baf2TermHeld && (this.Lb = new Map(DD.baf2TermHeld)), this.pending = this.pending.filter((CD => CD.seq > DD.baf2TermAcked)), this.silos = DD.baf2TermSilos, this.readOnly = DD.baf2TermReadOnly, this.pocket = !0 === DD.baf2TermPocket, DD.baf2TermReset) this.resort();
        else {
          const DD = new Set(this.order);
          for (const CD of this.stored.keys()) DD.has(CD) || this.order.push(CD)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((DD, CD) => this.amount(CD) - this.amount(DD) || DD.localeCompare(CD))), this.changed()
      }
      take(DD, CD) {
        const cD = bC(DD, this.amount(CD));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: CD,
          amount: cD,
          put: !1
        }), this.recents = [CD, ...this.recents.filter((DD => DD !== CD))].slice(0, 6), this.changed(), cC(this.seq, DD, CD)
      }
      put(DD, CD) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: CD,
          amount: bC(DD, this.heldAmount(CD)),
          put: !0
        }), this.changed(), IC(this.seq, DD, CD)
      }
      putAll() {
        this.seq++;
        for (const DD of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: DD,
          amount: this.heldAmount(DD),
          put: !0
        });
        return this.changed(), pC(this.seq)
      }
      amount(DD) {
        var CD;
        let cD = null !== (CD = this.stored.get(DD)) && void 0 !== CD ? CD : 0;
        for (const ID of this.pending) ID.item === DD && (cD += ID.put ? ID.amount : -ID.amount);
        return Math.max(0, cD)
      }
      heldAmount(DD) {
        var CD;
        let cD = null !== (CD = this.Lb.get(DD)) && void 0 !== CD ? CD : 0;
        for (const ID of this.pending) ID.put && ID.item === DD && (cD -= ID.amount);
        return Math.max(0, cD)
      }
      heldItems() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((CD => CD === DD || this.heldAmount(CD) > 0))
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
    var iv = cD(37797);
    const fv = {
      isBlock: DD => void 0 !== KD.g[DD],
      harvestType: DD => {
        var CD;
        return null === (CD = KD.g[DD]) || void 0 === CD ? void 0 : CD.harvestType
      },
      harvestLevel: DD => {
        var CD;
        return null === (CD = KD.g[DD]) || void 0 === CD ? void 0 : CD.harvestLevel
      },
      dropsNothing: DD => {
        var CD;
        return null === (null === (CD = KD.g[DD]) || void 0 === CD ? void 0 : CD.drops)
      },
      displayName: DD => {
        var CD;
        return null === (CD = Ib.l[DD]) || void 0 === CD ? void 0 : CD.displayName
      },
      description: DD => {
        var CD;
        return null === (CD = Ib.l[DD]) || void 0 === CD ? void 0 : CD.description
      },
      harvests: DD => {
        var CD;
        return null === (CD = Ib.l[DD]) || void 0 === CD ? void 0 : CD.harvests
      },
      level: DD => {
        var CD;
        return null === (CD = Ib.l[DD]) || void 0 === CD ? void 0 : CD.level
      }
    };

    function bv(DD, CD, cD) {
      return function(DD, CD, cD, ID) {
        var pD, iD;
        const fD = CD.split("|")[0],
          bD = DD.isBlock(CD) ? CD : DD.isBlock(fD) ? fD : null;
        if (null === bD || "rock" !== DD.harvestType(bD) || DD.dropsNothing(bD) && !TI.has(fD)) return null;
        const QD = cD && "rock" === DD.harvests(cD) ? null !== (pD = DD.level(cD)) && void 0 !== pD ? pD : 0 : null,
          wD = null !== (iD = null !== ID && void 0 !== ID ? ID : DD.harvestLevel(bD)) && void 0 !== iD ? iD : 0;
        return (null !== QD ? wD <= QD : 0 === DD.harvestLevel(bD)) ? null : UI(DD, wD)
      }(fv, DD, CD, cD)
    }

    function Qv(DD, CD) {
      return function(DD, CD, cD) {
        if (CD === HI[0]) return [(0, zD.Ud)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, zD.J.whiteUiText)];
        const ID = cD.split("|")[0],
          pD = DD.isBlock(ID) ? DD.displayName(ID) : void 0,
          iD = "string" === typeof pD ? pD : pD && "translationKey" in pD ? `$t(${pD.translationKey})` : ID;
        return [(0, zD.Ud)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: iD
          }
        }, zD.J.whiteUiText), (0, zD.Ud)({
          translationKey: `item:${(0,zD.le)(CD)}`
        }, zD.J.yellowUiText)]
      }(fv, DD, CD)
    }
    const wv = "buildAFactory2Game:";
    const Sv = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Bv(DD) {
      return DD.endsWith(" Ore")
    }
    const yv = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      Mv = [],
      tv = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: yv,
        plan: null,
        atomic: Mv
      },
      Zv = "buildAFactory2Game:",
      ov = new Set(["Splitter", "Sorting Gate"]),
      vv = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class Nv {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = DD, this.planAt = CD, this.tierOf = cD, this.HS = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Lb = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = tv, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(DD, CD, cD) {
        var ID, pD, iD;
        let fD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bD = null !== (ID = null === (pD = DD.FDD(CD)) || void 0 === pD ? void 0 : pD.name) && void 0 !== ID ? ID : null,
          QD = DD.isPlayerCrouching(CD),
          wD = 0 === cD ? null : this.resolve(DD, cD),
          SD = null !== wD && null !== fD && ov.has(wD.rootName) && function(DD, CD) {
            return vv.some((cD => {
              let [ID, pD] = cD;
              const iD = DD.getBlockId(CD[0] + ID, CD[1], CD[2] + pD);
              return 0 !== iD && "Express Belt" === DD.getMetaInfo(iD).rootName
            }))
          }(DD, fD),
          BD = this.updatePlan(0 === cD ? null : fD),
          yD = this.tierOf(),
          MD = null === fD ? null : (0, iv.g)(cD),
          tD = null !== MD && null !== fD && (0, iv.j)(function(DD) {
            return (CD, cD, ID) => DD.getBlockId(CD, cD, ID)
          }(DD), fD[0], fD[1], fD[2], MD),
          ZD = this.readAfloat(DD, cD, fD);
        if (cD === this.HS && tD === this.missesMaker && ZD === this.afloat && bD === this.Lb && QD === this.crouching && SD === this.express && yD === this.tier && !BD && (!this.targetsLive || !this.liveMoved(fD))) return;
        this.HS = cD, this.missesMaker = tD, this.afloat = ZD, this.Lb = bD, this.crouching = QD, this.express = SD;
        const oD = SD && wD ? function(DD) {
          if (null === DD.info) return null;
          return DD.express ??= {
            ...DD.info,
            detail: `${Zv}lookKeepsUpExpress`,
            detailItem: null
          }, DD.express
        }(wD) : null !== wD && tD && null !== MD ? this.besideMaker(wD, cD, MD) : null !== wD && ZD ? this.hanging(wD) : null !== (iD = null === wD || void 0 === wD ? void 0 : wD.info) && void 0 !== iD ? iD : null;
        this.tier = yD;
        const vD = wD && oD ? function(DD, CD) {
          var cD, ID;
          const pD = KD.g[DD];
          if (!DD.endsWith(" Ore") || "rock" !== (null === pD || void 0 === pD ? void 0 : pD.harvestType) || 0 === pD.harvestLevel) return null;
          const iD = null !== (cD = pD.harvestLevel) && void 0 !== cD ? cD : 0,
            fD = CD ? Ib.l[CD] : void 0;
          if ("rock" === (null === fD || void 0 === fD ? void 0 : fD.harvests) && (null !== (ID = fD.level) && void 0 !== ID ? ID : 0) >= iD) return null;
          const bD = (QD = iD, UI(fv, QD));
          var QD;
          if (null === bD) return null;
          const wD = Ii(bD),
            SD = /^[AEIOU]/.test(bD) ? "An" : "";
          if ("rock" === (null === fD || void 0 === fD ? void 0 : fD.harvests) && CD) return {
            key: `${Zv}lookToolTooWeak${SD}`,
            Lb: Ii(CD),
            needed: wD
          };
          return {
            key: bD === HI[0] ? `${Zv}lookNeedAnyPickaxe` : `${Zv}lookNeedPickaxe${SD}`,
            Lb: null,
            needed: wD
          }
        }(wD.rootName, bD) : null;
        this.targetsLive = !0 === (null === wD || void 0 === wD ? void 0 : wD.live) && null !== fD;
        let ND = null;
        this.targetsLive && wD && fD && this.live && (this.livePos[0] = fD[0], this.livePos[1] = fD[1], this.livePos[2] = fD[2], this.liveVersion = this.live.version(), ND = this.live.line(wD.rootName, fD));
        const gD = null === oD ? yv : function(DD, CD, cD) {
            const ID = function(DD, CD, cD) {
              const ID = Vc(DD);
              if (null === ID) return null;
              const pD = `${wv}lookPortMode_${ID}`,
                iD = kI(CD);
              if (iD && cD) return {
                mode: null,
                detail: pD,
                next: `${wv}lookWrenchPickUp`,
                nextState: null
              };
              const fD = zc(DD),
                bD = null === fD ? null : Vc(fD);
              return null === bD ? {
                mode: null,
                detail: pD,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: pD,
                next: iD ? `${wv}lookWrenchNext` : `${wv}lookPortWrench`,
                nextState: `${wv}lookPortState_${bD}`
              }
            }(DD, CD, cD);
            if (null !== ID) return ID;
            const pD = cp(DD, CD, cD);
            return null === pD.mode && null === pD.next ? yv : pD
          }(DD.blockIdToBlockName(cD), bD, QD),
          XD = this.plan,
          mD = wD && oD ? this.rowsOf(wD.rootName, yD) : Mv,
          nD = this.snapshot;
        if (!(null === oD ? !nD.visible : nD.visible && oD === nD.info && (OD = vD, PD = nD.tool, OD === PD || null !== OD && null !== PD && OD.key === PD.key && OD.Lb === PD.Lb && OD.needed === PD.needed) && function(DD, CD) {
            return DD === CD || null !== DD && null !== CD && DD.key === CD.key && JSON.stringify([DD.params, DD.keys]) === JSON.stringify([CD.params, CD.keys])
          }(ND, nD.live) && function(DD, CD) {
            return DD.mode === CD.mode && DD.detail === CD.detail && DD.next === CD.next && DD.nextState === CD.nextState
          }(gD, nD.wrench) && et(XD, nD.plan) && mD === nD.atomic)) {
          var OD, PD;
          this.snapshot = null === oD ? {
            ...nD,
            visible: !1
          } : {
            info: oD,
            visible: !0,
            tool: vD,
            live: ND,
            wrench: gD,
            plan: XD,
            atomic: mD
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = tv, this.HS = 0, this.Lb = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(DD, CD, cD) {
        if (null === cD || 0 === CD || !bD() || !Bv(this.resolve(DD, CD).rootName)) return !1;
        const ID = `${cD[0]},${cD[1]},${cD[2]},${CD}`,
          pD = performance.now();
        return ID === this.afloatKey && pD - this.afloatAt < gv ? this.afloat : (this.afloatKey = ID, this.afloatAt = pD, function(DD, CD) {
          for (const [cD, ID, pD] of Sv) {
            const iD = CD(DD[0] + cD, DD[1] + ID, DD[2] + pD);
            if (void 0 === iD || null !== iD && !Bv(iD)) return !1
          }
          return !0
        }(cD, ((CD, cD, ID) => function(DD, CD, cD, ID) {
          if (!DD.isBlockInLoadedChunk(CD, cD, ID)) return;
          const pD = DD.getBlockId(CD, cD, ID);
          return 0 === pD ? null : DD.getMetaInfo(pD).rootName
        }(DD, CD, cD, ID))))
      }
      liveMoved(DD) {
        var CD;
        const {
          livePos: cD
        } = this;
        return null === DD || DD[0] !== cD[0] || DD[1] !== cD[1] || DD[2] !== cD[2] || (null === (CD = this.live) || void 0 === CD ? void 0 : CD.version()) !== this.liveVersion
      }
      updatePlan(DD) {
        const CD = null === DD ? "" : DD.join(","),
          cD = performance.now();
        if (CD === this.planPos && cD - this.planMs < 250) return !1;
        this.planPos = CD, this.planMs = cD;
        const ID = null === DD ? null : this.planAt([DD[0], DD[1], DD[2]]),
          pD = !et(ID, this.plan);
        return this.plan = ID, pD
      }
      besideMaker(DD, CD, cD) {
        let {
          info: ID
        } = DD;
        if (null === ID) return null;
        let pD = this.besideMakerById.get(CD);
        if (void 0 === pD) {
          const DD = "cryo" === cD ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          pD = {
            ...ID,
            detail: `${Zv}${DD}`,
            detailItem: null
          }, this.besideMakerById.set(CD, pD)
        }
        return pD
      }
      hanging(DD) {
        let {
          info: CD,
          rootName: cD
        } = DD;
        if (null === CD) return null;
        let ID = this.afloatByRoot.get(cD);
        return void 0 === ID && (ID = {
          ...CD,
          detail: `${Zv}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(cD, ID)), ID
      }
      rowsOf(DD, CD) {
        if (null === CD) return Mv;
        const cD = `${DD}|${CD}`;
        let ID = this.rowsByKey.get(cD);
        if (void 0 === ID) {
          const pD = function(DD, CD) {
            var cD;
            if (!(DD in zC)) return [];
            const ID = null !== (cD = jC[DD]) && void 0 !== cD ? cD : [],
              pD = new Map;
            for (const fD of Yi(DD, CD))
              if ((ID.includes(fD) || di(fD.output) && Ri(fD.output) > hD(DD)) && Ri(fD.output) <= CD) {
                var iD;
                const DD = null !== (iD = pD.get(fD.output)) && void 0 !== iD ? iD : [];
                DD.push(fD.input), pD.set(fD.output, DD)
              } return si([...pD], (DD => {
              let [CD] = DD;
              return -Ri(CD)
            })).map((DD => {
              let [CD, cD] = DD;
              return {
                output: CD,
                inputs: cD
              }
            }))
          }(DD, CD);
          ID = pD.length > 0 ? pD : Mv, this.rowsByKey.set(cD, ID)
        }
        return ID
      }
      resolve(DD, CD) {
        const {
          rootId: cD,
          rootName: ID
        } = DD.getMetaInfo(CD), pD = (0, tc.n)(ID) ? CD : cD;
        let iD = this.byRootId.get(pD);
        const fD = bD();
        if (void 0 === iD || iD.nuclear !== fD) {
          var QD;
          const cD = function(DD) {
            return lI(fv, DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD)
          }(ID, DD.blockIdToBlockName(CD));
          iD = {
            info: cD,
            rootName: ID,
            live: null !== cD && !0 === (null === (QD = this.live) || void 0 === QD ? void 0 : QD.handles(ID)),
            nuclear: fD
          }, this.byRootId.set(pD, iD)
        }
        return iD
      }
    }
    const gv = 500;
    const Xv = (0, ID.memo)((function(DD) {
      var CD, cD;
      let {
        store: pD
      } = DD;
      const {
        t: iD
      } = (0, Up.F)(), [fD, bD] = (0, ID.useState)((() => pD.get()));
      (0, ID.useEffect)((() => (bD(pD.get()), pD.subscribe((() => {
        bD(pD.get())
      })))), [pD]);
      const {
        openInGameMenuName: QD,
        openEverythingMenuName: wD,
        isTouchScreen: SD
      } = (0, gp.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: BD,
        tool: yD,
        live: MD,
        wrench: tD,
        atomic: ZD
      } = fD, oD = fD.visible && null === QD && null === wD;
      if (null === BD) return null;
      const vD = null !== tD.detail ? iD(tD.detail) : null !== (CD = fD.plan) && void 0 !== CD && CD.ctrl ? iD("buildAFactory2Game:lookPlanCtrl") : null !== BD.detail ? iD(BD.detail, null === BD.detailItem ? void 0 : {
        item: iD(BD.detailItem)
      }) : null;
      return (0, Ui.jsxs)("div", {
        className: np()("Baf2LookTarget", {
          Visible: oD
        }),
        "aria-hidden": !oD,
        children: [(0, Ui.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: iD(BD.name)
        }), null !== fD.plan && (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iD(fD.plan.key, {
            kind: iD(fD.plan.kindKey),
            w: String(fD.plan.w),
            h: String(fD.plan.h),
            d: String(fD.plan.d),
            count: String(fD.plan.count)
          })
        }), void 0 !== (null === (cD = fD.plan) || void 0 === cD ? void 0 : cD.why) && (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: iD(fD.plan.why)
        }), null !== tD.mode && (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iD(tD.mode)
        }), null !== yD ? (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: iD(yD.key, {
            item: iD(yD.needed),
            Lb: null === yD.Lb ? "" : iD(yD.Lb)
          })
        }) : null !== MD ? (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iD(MD.key, Qw(iD, MD))
        }) : null !== vD && (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: vD
        }), ZD.length > 0 && (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iD("buildAFactory2Game:lookAtomicRecipes", {
            list: ZD.map((DD => {
              let {
                output: CD,
                inputs: cD
              } = DD;
              const ID = cD.length > 1 ? ` ${iD("buildAFactory2Game:recipeMore",{count:String(cD.length-1)})}` : "";
              return `${iD(Ii(cD[0]))}${ID} \u2192 ${iD(Ii(CD))}`
            })).join(", ")
          })
        }), null !== tD.next && (0, Ui.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: iD(tD.next, {
            state: null === tD.nextState ? "" : iD(tD.nextState),
            use: iD(SD ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var mv = cD(37892);
    const nv = [],
      Ov = [
        [0, -1, 0]
      ];

    function Pv(DD) {
      const CD = [DD];
      for (let cD = 1; cD <= 4; cD++) cD > 1 && CD.push(`${DD}|meta|rot${cD}`), CD.push(`${DD}|meta|rot${cD}|Running`);
      return CD
    }

    function Hv(DD, CD) {
      return [Math.floor(DD[0] / CD), Math.floor(DD[1] / CD), Math.floor(DD[2] / CD)]
    }

    function Uv(DD, CD, cD) {
      return `${DD},${CD},${cD}`
    }

    function xv(DD) {
      const CD = DD.split("|")[0];
      if (!wc(CD)) return nv;
      const cD = zC[CD];
      if (Cc(cD)) return Ov;
      const ID = Oo(DD);
      return cc(cD) ? [
        [-ID[0], -ID[1], -ID[2]]
      ] : Op(cD) ? function(DD, CD) {
        const cD = DD[0] - 2 * CD[0],
          ID = DD[2] - 2 * CD[2],
          pD = [];
        for (let iD = -1; iD <= 1; iD++)
          for (let CD = -1; CD <= 1; CD++) pD.push([cD + iD, DD[1], ID + CD]);
        return pD
      }([0, 0, 0], ID) : nv
    }
    const qv = [.5, .5, .5],
      Jv = [.2, .8, .3],
      Kv = [.45, 1, .5];
    class av {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(DD) {
        this.indexed = !0;
        for (const CD of xC)
          for (const cD of Pv(CD)) {
            const CD = DD.blockNameToBlockId(cD, !0),
              ID = xv(cD);
            null !== CD && ID.length > 0 && (this.offsetsList.push(ID), this.offsetsIndexById[CD] = this.offsetsList.length)
          }
      }
      onAfterRender(DD, CD) {
        this.indexed || this.index(DD);
        const cD = performance.now();
        if (cD - this.lastCheckMs < 100) return;
        this.lastCheckMs = cD, this.checks++;
        const ID = tt.h.Wt,
          [pD, iD, fD] = Hv(CD, ID);
        let bD = !1;
        const QD = [];
        let wD = 0;
        for (let SD = pD - 2; SD <= pD + 2; SD++)
          for (let CD = iD - 1; CD <= iD + 1; CD++)
            for (let pD = fD - 2; pD <= fD + 2; pD++) {
              const iD = wD++,
                fD = Uv(SD, CD, pD),
                BD = DD.getChunkVersion(SD, CD, pD);
              let yD = this.chunks.get(fD);
              null !== BD ? (yD || (yD = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(fD, yD)), yD.seenAt = this.checks, yD.checkedVersion !== BD && (yD.checkedVersion = BD, bD = !0), yD.scannedVersion !== BD && cD - yD.scannedAt >= 500 && QD.push({
                slot: iD,
                entry: yD,
                origin: [SD * ID, CD * ID, pD * ID]
              })) : (bD ||= void 0 !== yD, this.chunks.delete(fD))
            }
        this.scanDue(DD, QD) && (bD = !0);
        for (const [SD, BD] of this.chunks) BD.seenAt !== this.checks && (bD ||= BD.machines.length > 0, this.chunks.delete(SD));
        for (const SD of this.chunks.values())
          for (const [CD, cD, ID] of SD.cellChunks)(Math.abs(CD - pD) > 2 || Math.abs(cD - iD) > 1 || Math.abs(ID - fD) > 2) && this.watchCellChunk(DD, CD, cD, ID) && (bD = !0);
        for (const [SD, BD] of this.cellChunks) BD.seenAt !== this.checks && this.cellChunks.delete(SD);
        bD && this.refresh(DD)
      }
      dispose(DD) {
        this.clearMeshes(DD), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(DD, CD) {
        const cD = Math.max(CD.findIndex((DD => {
          let {
            slot: CD
          } = DD;
          return CD >= this.scanFrom
        })), 0);
        let ID = 96;
        for (let pD = 0; pD < CD.length; pD++) {
          const {
            slot: iD,
            entry: fD,
            origin: bD
          } = CD[(cD + pD) % CD.length];
          if (ID -= this.scan(DD, fD, bD), ID <= 0) {
            this.scanFrom = iD + 1;
            break
          }
        }
        return CD.length > 0
      }
      scan(DD, CD, cD) {
        let [ID, pD, iD] = cD;
        const fD = tt.h.Wt,
          bD = this.hits;
        bD.length = 0;
        const QD = DD.scanBlocks(ID, pD, iD, ID + fD, pD + fD, iD + fD, this.offsetsIndexById, bD),
          wD = [];
        for (let SD = 0; SD < bD.length; SD += 4) wD.push({
          pos: [bD[SD], bD[SD + 1], bD[SD + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[bD[SD + 3]] - 1]
        });
        return CD.machines = wD, CD.cellChunks = function(DD, CD) {
          const cD = new Set,
            ID = [];
          for (const {
              pos: pD,
              offsets: iD
            }
            of DD)
            for (const [DD, fD, bD] of iD) {
              const iD = Hv([pD[0] + DD, pD[1] + fD, pD[2] + bD], CD),
                QD = Uv(...iD);
              cD.has(QD) || (cD.add(QD), ID.push(iD))
            }
          return ID
        }(wD, fD), CD.scannedVersion = CD.checkedVersion, CD.scannedAt = performance.now(), Math.max(QD, 1)
      }
      watchCellChunk(DD, CD, cD, ID) {
        const pD = Uv(CD, cD, ID),
          iD = DD.getChunkVersion(CD, cD, ID),
          fD = this.cellChunks.get(pD);
        return null === iD ? this.cellChunks.delete(pD) : (null === fD || void 0 === fD ? void 0 : fD.version) === iD ? (fD.seenAt = this.checks, !1) : (this.cellChunks.set(pD, {
          version: iD,
          seenAt: this.checks
        }), !0)
      }
      refresh(DD) {
        const CD = function(DD, CD) {
            const cD = new Set,
              ID = [];
            for (const {
                pos: pD,
                offsets: iD
              }
              of DD)
              for (const [DD, fD, bD] of iD) {
                const iD = pD[0] + DD,
                  QD = pD[1] + fD,
                  wD = pD[2] + bD,
                  SD = `${iD},${QD},${wD}`;
                cD.has(SD) || (cD.add(SD), CD(iD, QD, wD) && ID.push([iD, QD, wD]))
              }
            return ID
          }([...this.chunks.values()].flatMap((DD => DD.machines)), ((CD, cD, ID) => DD.isBlockInLoadedChunk(CD, cD, ID) && 0 === DD.getBlockId(CD, cD, ID))),
          cD = CD.join(";");
        cD !== this.shownKey && (this.shownKey = cD, this.clearMeshes(DD), CD.length > 0 && (this.meshes = [this.build(DD, CD, !1), this.build(DD, CD, !0)]))
      }
      build(DD, CD, cD) {
        const ID = CD[0],
          pD = [],
          iD = [];
        for (const [fD, bD, QD] of CD)(0, mv.d)(pD, iD, [fD - ID[0] + .5, bD - ID[1] + .5, QD - ID[2] + .5], qv, cD);
        return DD.createGameMesh({
          positions: pD,
          indices: iD
        }, {
          rgb: cD ? Kv : Jv,
          alpha: .4
        }, ID)
      }
      clearMeshes(DD) {
        for (const CD of this.meshes) DD.disposeGameMesh(CD);
        this.meshes = []
      }
    }
    const Vv = 1 / .6,
      zv = 200,
      jv = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      lv = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Lv = 2 * Math.PI / 3;
    class Tv {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jv;
        this.style = DD, this.particles = null, this.points = new Float32Array(800), this.budget = zv, this.lastMs = 0
      }
      static blade() {
        return new Tv(lv)
      }
      Qm(DD, CD) {
        const cD = Math.min(CD.arcStruck, CD.arcPoints.length);
        this.draw(DD, [CD.arcFrom, ...CD.arcPoints], CD.arcPoints.slice(0, cD))
      }
      onBlade(DD, CD) {
        const [cD, ID, pD] = CD.bladeCentre, [iD, fD] = CD.bladeFacing, bD = cD - 1.5 * iD, QD = pD - 1.5 * fD, wD = Math.atan2(fD, iD), SD = [];
        for (let BD = 0; BD <= 8; BD++) {
          const DD = wD - Lv / 2 + Lv * BD / 8;
          SD.push([bD + 2.5 * Math.cos(DD), ID, QD + 2.5 * Math.sin(DD)])
        }
        this.draw(DD, SD, CD.bladeStruck)
      }
      dispose() {
        var DD;
        null === (DD = this.particles) || void 0 === DD || DD.stop(), this.particles = null
      }
      draw(DD, CD, cD) {
        if (!DD.particlesEnabled() || CD.length < 2) return;
        const ID = performance.now();
        this.budget = Math.min(zv, this.budget + (ID - this.lastMs) / 1e3 * zv), this.lastMs = ID;
        const pD = [];
        let iD = 0,
          fD = CD[0];
        for (const vD of CD.slice(1)) {
          const DD = Math.min(48, Math.round(Math.hypot(vD[0] - fD[0], vD[1] - fD[1], vD[2] - fD[2]) * this.style.perBlock));
          pD.push([fD, vD, DD]), iD += DD, fD = vD
        }
        const bD = cD.length;
        iD += 10 * bD;
        const QD = iD > this.budget ? this.budget / iD : 1;
        if (0 === iD || QD * iD < 1) return;
        const wD = CD[0],
          [SD, BD, yD] = wD,
          MD = this.points;
        let tD = 0;
        const ZD = (DD, CD, cD, ID) => {
          const pD = 4 * tD;
          MD[pD] = DD - SD, MD[pD + 1] = CD - BD, MD[pD + 2] = cD - yD, MD[pD + 3] = ID, tD++
        };
        pD.forEach(((DD, CD) => {
          let [cD, ID, pD] = DD;
          const iD = Math.min(Math.floor(pD * QD), zv - tD),
            fD = Math.hypot(ID[0] - cD[0], ID[1] - cD[1], ID[2] - cD[2]),
            bD = 0 === CD && fD > 0 ? Math.min(.5, .1 * fD) / fD : 0;
          for (let QD = 0; QD < iD; QD++) {
            const DD = bD + (QD + .5) / iD * (1 - bD);
            ZD(cD[0] + (ID[0] - cD[0]) * DD, cD[1] + (ID[1] - cD[1]) * DD, cD[2] + (ID[2] - cD[2]) * DD, .15)
          }
        }));
        const oD = Math.floor(10 * QD);
        for (let vD = 0; vD < bD; vD++) {
          const [DD, CD, ID] = cD[vD];
          for (let cD = 0; cD < oD && tD < zv; cD++) ZD(DD, CD, ID, 2.5)
        }
        this.budget -= tD, this.particles ??= DD.createParticles(function(DD) {
          const [CD, cD] = DD.colours;
          return {
            texture: "square_particle",
            LB: 400,
            minLifeTime: DD.life[0] / Vv,
            maxLifeTime: DD.life[1] / Vv,
            minSize: DD.size[0],
            maxSize: DD.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [CD[0], CD[1], CD[2], 1],
              maxColor: [cD[0], cD[1], cD[2], 1]
            }, {
              timeFraction: 1,
              minColor: [CD[0], CD[1], CD[2], 0],
              maxColor: [cD[0], cD[1], cD[2], 0]
            }],
            blendMode: Gb.c.Add
          }
        }(this.style), {
          pos: wD
        }), this.particles.emitPoints(wD, MD, tD)
      }
    }
    const Gv = new Set(["Sky Spring"]);

    function Rv(DD, CD, cD) {
      const ID = DD.split("|")[0];
      return "Air" !== CD || cD || ! function(DD) {
        const CD = DD.split("|")[0];
        return void 0 !== fc[CD] || Gv.has(CD)
      }(ID) ? null : DD
    }
    class kv {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(DD) {
        const CD = DD - this.lastTapAt >= 300;
        return this.lastTapAt = DD, CD
      }
    }
    class dv {
      constructor() {
        this.presses = new kv, this.predicted = null
      }
      tap(DD, CD) {
        const cD = this.presses.isNewPress(CD);
        return cD && (this.predicted = {
          station: DD,
          at: CD
        }), cD
      }
      consumeServerOpen(DD, CD) {
        const cD = this.predicted;
        return !(null === cD || cD.station !== DD || CD - cD.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class Yv {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(DD, CD) {
        return DD && (this.thrustAt = CD), CD - this.thrustAt < 200
      }
    }
    const Wv = [.1, .05, .1],
      sv = {
        texture: "effect_5",
        LB: Math.ceil(48),
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
        blendMode: Gb.c.OneOne
      };
    class Ev {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new Yv, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Qm(DD, CD) {
        for (const [cD, ID] of CD.baf2JetFlames) DD.isLocalPlayer(cD) || (ID ? this.lit.add(cD) : this.lit.delete(cD))
      }
      onAfterRender(DD, CD) {
        const cD = performance.now(),
          ID = this.hold.lit(this.selfThrusting(DD, CD), cD);
        for (const [pD, iD] of this.flames)(pD === CD ? ID : this.lit.has(pD)) || this.setEmitting(iD, !1), pD === CD || DD.getPositionView(pD) ? !iD.emitting && cD - iD.offAt >= 1300 && (iD.particles.stop(), this.flames.delete(pD)) : (iD.particles.dispose(), this.flames.delete(pD), this.lit.delete(pD));
        ID && this.draw(DD, CD, CD);
        for (const pD of this.lit) this.draw(DD, CD, pD)
      }
      dispose() {
        for (const DD of this.flames.values()) DD.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(DD, CD) {
        var cD;
        const ID = DD.getLocalPlayerMovement();
        return !!ID && (null !== (pD = {
          option: null !== (cD = DD.getClientOption(CD, "jumpHoldThrust")) && void 0 !== cD ? cD : null,
          jumping: ID.jumpHeld,
          onGround: ID.onGround,
          alive: DD.isAlive(CD)
        }).option && pD.option.maxUpSpeed >= 0 && pD.jumping && !pD.onGround && pD.alive);
        var pD
      }
      draw(DD, CD, cD) {
        var ID, pD;
        const iD = this.pos;
        if (!DD.readDrawnPosition(cD, iD)) return;
        const fD = DD.readDrawnPosition(CD, this.camera) ? this.camera : iD;
        if (!((iD[0] - fD[0]) ** 2 + (iD[1] - fD[1]) ** 2 + (iD[2] - fD[2]) ** 2 < 1600) || !DD.particlesEnabled()) {
          const DD = this.flames.get(cD);
          return void(DD && this.setEmitting(DD, !1))
        }
        const bD = null !== (ID = this.flames.get(cD)) && void 0 !== ID ? ID : this.create(DD, cD, iD),
          QD = null !== (pD = DD.getDrawnHeading(cD)) && void 0 !== pD ? pD : 0,
          wD = this.at;
        wD[0] = iD[0] - .35 * Math.sin(QD), wD[1] = iD[1] + 1.05, wD[2] = iD[2] - .35 * Math.cos(QD), bD.particles.moveTo(wD), this.setEmitting(bD, !0)
      }
      setEmitting(DD, CD) {
        DD.emitting !== CD && (DD.emitting = CD, CD || (DD.offAt = performance.now()), DD.particles.setEmitRate(CD ? 60 : 0))
      }
      create(DD, CD, cD) {
        const ID = {
          particles: DD.createParticles(sv, {
            pos: cD,
            half: Wv
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(CD, ID), ID
      }
    }

    function ev(DD) {
      return "Reactor Frame" === II("reactor", DD)
    }

    function uv(DD) {
      return Tc("reactor", DD) && !ev(DD) && (DD.startsWith("Reactor Glass") || DD.startsWith("Reactor Port"))
    }
    const hv = "baf2Goal";
    class rv {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Vp.i.subscribe("setDirectionArrow", (DD => {
          let {
            id: CD,
            position: cD
          } = DD;
          CD === hv && (this.goal = cD, this.checkedAt = -1 / 0)
        })), Vp.i.subscribe("clearDirectionArrow", (DD => {
          let {
            id: CD
          } = DD;
          null !== CD && CD !== hv || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const DD of this.subs) Vp.i.unsubscribe(DD)
      }
      sideOf(DD, CD, cD, ID) {
        const pD = this.goal;
        if (!pD) return 0;
        cD - this.checkedAt > 1e3 && (this.checkedAt = cD, this.open = function(DD, CD) {
          const [cD, ID, pD] = DD.map(Math.floor);
          if (!uv(CD(cD, ID, pD))) return null;
          for (const [iD, fD] of [
              [1, 0],
              [0, 1]
            ]) {
            const DD = CD(cD + iD, ID, pD + fD),
              bD = CD(cD - iD, ID, pD - fD);
            if (ev(bD) && uv(DD)) return [iD, 0, fD];
            if (ev(DD) && uv(bD)) return [0 - iD, 0, 0 - fD]
          }
          return null
        }(pD, ((CD, cD, ID) => DD.blockIdToBlockName(DD.getBlockId(CD, cD, ID)))));
        const iD = this.open;
        if (!iD) return 0;
        const fD = ID(pD);
        if (Math.abs(fD.x - CD.x) > .05 || Math.abs(fD.y - CD.y) > .05) return 0;
        const bD = ID([pD[0] + iD[0], pD[1], pD[2] + iD[2]]).x - fD.x;
        return Math.abs(bD) < .3 ? 0 : bD > 0 ? 1 : -1
      }
    }
    class Av {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new rv, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Lt = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.yX = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((DD => {
          for (const CD of DD) CD.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(CD.target, CD.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Lt || this.clear()
        }, window.addEventListener("resize", this.yX)
      }
      onAfterRender(DD, CD) {
        var cD;
        this.api = DD, this.project = null !== (cD = null === CD || void 0 === CD ? void 0 : CD.projectWorldPosToScreenPos) && void 0 !== cD ? cD : null, this.queued || this.Lt || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Lt = !0;
        for (const DD of this.moved.keys()) DD.style.transform = "";
        this.moved.clear();
        for (const DD of this.sideLabels.keys()) DD.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.yX)
      }
      clear() {
        for (const iD of this.moved.keys()) iD.isConnected || this.moved.delete(iD);
        for (const iD of this.sideLabels.keys()) iD.isConnected || this.sideLabels.delete(iD);
        if (0 === this.arrows.length) return;
        const DD = performance.now(),
          CD = DD - this.refreshedAt > 1e3;
        CD && (this.refreshedAt = DD, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const cD = this.trackerBox(),
          ID = this.barsBox(),
          pD = this.toastBox(CD);
        (cD || ID || pD) && CD && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let iD = 0; iD < this.arrows.length; iD++) {
          const CD = this.arrows[iD];
          this.labelOffsets.set(CD, this.runLabelAside(CD, DD));
          const fD = (cD ? this.shiftLeftOf(CD, cD) : 0) || this.shiftOnScreen(CD),
            bD = Math.min(ID ? this.liftAbove(CD, ID, fD) : 0, pD ? this.liftAbove(CD, pD, fD) : 0),
            QD = this.moved.get(CD);
          if (0 !== fD || 0 !== bD) {
            const DD = 0 === bD ? `translateX(${fD}px)` : `translate(${fD}px, ${bD}px)`;
            QD !== DD && (CD.style.transform = DD, this.moved.set(CD, DD))
          } else void 0 !== QD && (CD.style.transform = "", this.moved.delete(CD))
        }
      }
      trackerBox() {
        var DD, CD;
        const cD = null !== (DD = this.tracker) && void 0 !== DD && DD.isConnected ? this.tracker : null !== (CD = this.trackers[0]) && void 0 !== CD ? CD : null;
        if (cD !== this.tracker && this.watch(cD), this.boxStale && cD) {
          var ID, pD, iD;
          this.boxStale = !1;
          const DD = cD.closest(".NoRoom") ? null : cD.getBoundingClientRect(),
            CD = DD && DD.width > 0 ? null === (ID = this.hud) || void 0 === ID ? void 0 : ID.getBoundingClientRect() : void 0,
            fD = DD && CD ? Math.max(DD.top, CD.top) : null !== (pD = null === DD || void 0 === DD ? void 0 : DD.top) && void 0 !== pD ? pD : 0,
            bD = DD && CD ? Math.min(DD.bottom, CD.bottom) : null !== (iD = null === DD || void 0 === DD ? void 0 : DD.bottom) && void 0 !== iD ? iD : 0;
          this.box = DD && DD.width > 0 && bD > fD ? {
            left: DD.left,
            top: fD,
            right: DD.right,
            bottom: bD
          } : null
        }
        return cD ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var DD;
          this.barsStale = !1;
          const CD = null === (DD = this.statBars[0]) || void 0 === DD ? void 0 : DD.getBoundingClientRect();
          this.bars = CD && CD.width > 0 && CD.height > 0 ? {
            left: CD.left,
            top: CD.top,
            right: CD.right,
            bottom: CD.bottom
          } : null
        }
        return this.bars
      }
      toastBox(DD) {
        var CD;
        const cD = null !== (CD = this.toasts[0]) && void 0 !== CD ? CD : null;
        if (cD !== this.toastEl || DD && cD) {
          this.toastEl = cD;
          const DD = null === cD || void 0 === cD ? void 0 : cD.getBoundingClientRect();
          this.toast = DD && DD.width > 0 && DD.height > 0 ? {
            left: DD.left,
            top: DD.top,
            right: DD.right,
            bottom: DD.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(DD, CD, cD) {
        var ID;
        const pD = this.anchorOf(DD);
        if (!pD) return 0;
        const iD = pD.x + cD + (null !== (ID = this.labelOffsets.get(DD)) && void 0 !== ID ? ID : 0),
          {
            halfWidth: fD,
            labelled: bD
          } = this.extentOf(DD),
          QD = pD.y + this.em * (bD ? 6.2 : 3);
        return QD < CD.top - 6 || iD + fD < CD.left - 6 || iD - fD > CD.right + 6 ? 0 : CD.top - 6 - QD
      }
      watch(DD) {
        var CD, cD;
        this.tracker && this.sizes.unobserve(this.tracker), null === (CD = this.hud) || void 0 === CD || CD.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = DD, this.hud = null !== (cD = null === DD || void 0 === DD ? void 0 : DD.closest(".Baf2QuestHud")) && void 0 !== cD ? cD : null, this.box = null, this.boxStale = !0, DD && this.sizes.observe(DD), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(DD, CD) {
        var cD;
        const ID = this.anchorOf(DD);
        if (!ID) return 0;
        const {
          y: pD
        } = ID, iD = ID.x + (null !== (cD = this.labelOffsets.get(DD)) && void 0 !== cD ? cD : 0), fD = this.em, {
          halfWidth: bD,
          labelled: QD
        } = this.extentOf(DD), wD = pD - fD, SD = iD + bD;
        return pD + fD * (QD ? 6.2 : 3) < CD.top || wD > CD.bottom || SD < CD.left - 6 || iD - bD > CD.right ? 0 : Math.max(CD.left - 6 - SD, 6 - (iD - bD))
      }
      shiftOnScreen(DD) {
        var CD;
        const cD = this.anchorOf(DD);
        if (!cD) return 0;
        const {
          halfWidth: ID
        } = this.extentOf(DD), pD = cD.x + (null !== (CD = this.labelOffsets.get(DD)) && void 0 !== CD ? CD : 0), iD = pD + ID - (this.innerWidth - 6);
        return iD > 0 ? -iD : Math.max(0, 6 - (pD - ID))
      }
      runLabelAside(DD, CD) {
        var cD;
        let ID = null;
        for (let fD = 0; fD < DD.children.length; fD++) DD.children[fD].classList.contains("DirectionArrowLabel") && (ID = DD.children[fD]);
        if (!ID) return 0;
        const pD = DD.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(DD) : null,
          iD = (pD && this.api ? this.side.sideOf(this.api, {
            x: pD.x / this.innerWidth * 100,
            y: pD.y / this.innerHeight * 100
          }, CD, this.project) : 0) * this.halfWidthOf(ID);
        return iD !== (null !== (cD = this.sideLabels.get(ID)) && void 0 !== cD ? cD : 0) && (ID.style.transform = 0 === iD ? "" : `translateX(-50%) translateX(${iD}px)`, 0 === iD ? this.sideLabels.delete(ID) : this.sideLabels.set(ID, iD)), iD
      }
      extentOf(DD) {
        let CD = this.em,
          cD = !1;
        for (let ID = 0; ID < DD.children.length; ID++) {
          const pD = DD.children[ID],
            iD = pD.classList.contains("DirectionArrowLabel");
          cD ||= iD, (iD || pD.classList.contains("DirectionArrowDistance")) && (CD = Math.max(CD, this.halfWidthOf(pD)))
        }
        return {
          halfWidth: CD,
          labelled: cD
        }
      }
      halfWidthOf(DD) {
        let CD = this.halfWidths.get(DD);
        return void 0 === CD && (CD = DD.offsetWidth / 2, this.halfWidths.set(DD, CD), this.sizes.observe(DD), this.labels.add(DD)), CD
      }
      forgetGoneLabels() {
        for (const DD of this.labels) DD.isConnected || (this.sizes.unobserve(DD), this.halfWidths.delete(DD), this.labels.delete(DD))
      }
      anchorOf(DD) {
        const CD = DD.style.translate,
          cD = this.anchors.get(DD);
        if (cD && cD.translate === CD && cD.innerWidth === this.innerWidth && cD.innerHeight === this.innerHeight) return cD;
        const ID = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(CD);
        if (!ID) return null;
        const pD = {
          translate: CD,
          x: parseFloat(ID[1]) / 100 * this.innerWidth,
          y: parseFloat(ID[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(DD, pD), pD
      }
    }
    const Fv = "Baf2ArrowText";

    function DN(DD, CD) {
      const cD = DD.rows.find((DD => DD.current));
      return VD(DD.tutorial) && null !== cD && void 0 !== cD && cD.item && Yp(cD) && qD(cD.item).includes(CD) ? cD.item : null
    }
    const CN = new class {
      constructor(DD) {
        this.select = DD, this.picks = new Map
      }
      open(DD, CD, cD) {
        const ID = DN(CD, DD);
        null !== ID && this.MM(DD, ID, cD)
      }
      follow(DD, CD) {
        if (bD())
          for (const [cD, {
              item: ID,
              had: pD
            }] of this.picks) {
            const iD = DN(DD, cD);
            iD !== ID && (null !== iD && CD(ID) > pD ? this.MM(cD, iD, CD) : this.picks.delete(cD))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      MM(DD, CD, cD) {
        this.picks.set(DD, {
          item: CD,
          had: cD(CD)
        }), this.select(DD, CD)
      }
    }(zp.n);

    function cN(DD) {
      return CD => {
        let cD = 0;
        for (const ID of DD.getInventoryItems())(null === ID || void 0 === ID ? void 0 : ID.name) === CD && (cD += null === ID.amount ? 1 : Math.max(ID.amount, 0));
        return cD
      }
    }

    function IN(DD, CD, cD, ID) {
      DD.getClientOption(CD, "canCraft") && "inventory" !== gp.d.get("openInGameMenuName") && (CN.open(cD, ID.get(), cN(DD)), Vp.i.Uo("toggleMenu", `inventory|${cD}`))
    }
    let pN = null,
      iN = !1;

    function fN(DD) {
      const CD = Pi();
      DD === pN && CD === iN || (pN = DD, iN = CD, (0, zp.r)(function(DD, CD) {
        const cD = new Map;
        for (let ID = DD + 1; ID <= pD.length; ID++) {
          const pD = Ei(ID, DD, CD);
          if (pD)
            for (const CD of vD(ID).unlocks) cD.set(CD, {
              ...pD,
              stepsAway: ID - DD
            })
        }
        return cD
      }(DD, CD)))
    }

    function bN() {
      return (0, zp.v)(si(Object.keys(xD), Ri)), () => {
        (0, zp.v)([])
      }
    }
    const QN = "buildAFactory2Game:",
      wN = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      SN = {
        on: `${QN}tutorialButtonOn`,
        hud: `${QN}tutorialButtonHud`,
        off: `${QN}tutorialButtonOff`
      },
      BN = {
        on: `${QN}tutorialPickedOn`,
        hud: `${QN}tutorialPickedHud`,
        off: `${QN}tutorialPickedOff`
      };

    function yN(DD, CD, cD) {
      let ID = null,
        pD = () => {};
      const iD = iD => {
        var fD;
        let {
          tutorial: bD,
          tutorialKnown: QD
        } = iD;
        (null === (fD = ID) || void 0 === fD ? void 0 : fD.tutorial) === bD && ID.tutorialKnown === QD || (ID = {
          tutorial: bD,
          tutorialKnown: QD
        }, pD = (0, vp.x)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: SN[bD],
          icon: {
            kind: "icon",
            name: wN[bD]
          },
          iconOnly: !0,
          disabled: !QD,
          className: "Baf2TutorialButton",
          onClick: () => {
            var ID;
            (ID => {
              const pD = CD.setTutorial(ID);
              DD.send(`baf2tutorial ${ID} ${pD}`), cD.show({
                baf2ToastText: [(0, zD.Ud)({
                  translationKey: BN[ID]
                }, zD.J.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((ID = CD.get().tutorial, aD[(aD.indexOf(ID) + 1) % aD.length]))
          }
        }))
      };
      iD(CD.get());
      const fD = Vp.i.subscribe(jp, iD);
      return () => {
        Vp.i.unsubscribe(fD), pD()
      }
    }

    function MN(DD, CD, cD) {
      var ID, pD;
      const iD = DD.getTargetedBlock();
      if (!iD || ! function(DD, CD, cD) {
          if ("Chest" !== CD) return !1;
          const ID = DD.split("|")[0];
          if (!wc(ID) || 0 === zC[ID].outputSlots.length) return !1;
          const pD = Oo(DD);
          return cD[0] === pD[0] && cD[1] === pD[1] && cD[2] === pD[2]
        }(cD, null === (ID = DD.FDD(CD)) || void 0 === ID ? void 0 : ID.name, iD.normal)) return !1;
      const [fD, bD, QD] = iD.Of, wD = DD.getBlockId(fD, bD, QD);
      return 0 === wD || !0 === (null === (pD = KD.g[wD]) || void 0 === pD ? void 0 : pD.canBePlacedOver)
    }
    var tN = cD(36122);
    const ZN = new Set(Zc.e);
    class oN {
      constructor(DD) {
        this.toasts = DD, this.lastAt = -1 / 0
      }
      onAltAction(DD, CD, cD) {
        const ID = DD.getTargetedBlock();
        if (!ID || function(DD) {
            const CD = DD.split("|")[0];
            return wc(CD) || null !== OI(CD) || HD(CD) || Zc.e.includes(CD)
          }(cD) && !ZN.has(cD.split("|")[0])) return;
        const pD = DD.FDD(CD);
        if (!pD || !ZN.has(pD.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const iD = pD.typeObj.id,
          [fD, bD, QD] = ID.Of,
          wD = DD.getBlockId(fD, bD, QD),
          SD = KD.g[wD];
        (0 === wD || null !== SD && void 0 !== SD && SD.HM || null !== SD && void 0 !== SD && SD.canBePlacedOver) && DD.isSolidToPlayerBlockId(iD) && DD.canModifyBlockAt(fD, bD, QD) && DD.NDD(fD, bD, QD, iD) && !DD.NDD(fD, bD, QD, iD, CD) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, zD.Ud)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, zD.J.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class vN {
      constructor(DD) {
        this.show = DD, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(DD, CD, cD) {
        var ID;
        if (!CD) return this.started = null, void this.gatedThisHold.clear();
        if (!DD) return void(this.started = null);
        const pD = `${DD.x},${DD.y},${DD.z},${DD.Lb}`;
        if (pD === this.started) return;
        this.started = pD;
        const iD = LI(DD.y) ? bv(DD.block, DD.Lb, DD.level) : null;
        if (null === iD || this.gatedThisHold.has(pD)) return;
        this.gatedThisHold.add(pD);
        const fD = DD.block.split("|")[0];
        cD - (null !== (ID = this.hintedAt.get(fD)) && void 0 !== ID ? ID : -1 / 0) < 5e3 || (this.hintedAt.set(fD, cD), this.show({
          baf2ToastText: Qv(iD, DD.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var NN = cD(36);

    function gN(DD, CD) {
      const cD = [...DD.baf2CoreBankPaused];
      for (const [pD] of DD.baf2CoreBanked) cD.push(pD);
      for (const fD of pD) {
        for (const {
            item: DD
          }
          of fD.cost) cD.push(DD);
        for (const DD of fD.newDeposits) cD.push(DD.block);
        for (const DD of fD.unlocks) cD.push(DD, JD(DD));
        fD.reward && cD.push(fD.reward);
        for (const {
            item: DD
          }
          of null !== (ID = null === (iD = fD.charge) || void 0 === iD ? void 0 : iD.items) && void 0 !== ID ? ID : []) {
          var ID, iD;
          cD.push(DD)
        }
      }
      return {
        message: DD,
        itemNames: CD([...new Set(cD)])
      }
    }
    const XN = "baf2MultiblockGuide";
    const mN = new Map;
    const nN = function(DD, CD, cD, pD) {
      let {
        localPlayerId: iD
      } = pD;
      const fD = new Xb,
        bD = new IM,
        wD = new SM,
        SD = new QM(wD),
        BD = (DD, CD) => {
          CD ? SD.observe(DD) : SD.unobserve(DD)
        },
        yD = new bM,
        MD = new tM(BD),
        tD = DD => MD.covers(DD),
        ZD = new zM;
      let oD;
      const vD = new Yf((DD => {
          oD.sendCommand(DD)
        })),
        ND = () => {
          vD.send("baf2questbook")
        },
        gD = DD => function(DD, CD, cD) {
          const ID = {};
          for (const pD of cD) {
            let cD = mN.get(pD);
            void 0 === cD && (cD = DD.getItemStat(CD, pD, "displayName"), mN.set(pD, cD)), ID[pD] = cD
          }
          return ID
        }(oD, iD, DD),
        XD = new Tp(ND),
        mD = new sM((() => gp.d.get("loadingOverlayVisible"))),
        nD = new rM,
        OD = new oN(mD),
        PD = new vN((DD => {
          mD.show(DD, DD.baf2ToastMs)
        })),
        UD = new ft(BD),
        xD = new Vo(UD),
        qD = new qf,
        JD = new pv,
        aD = new fb,
        VD = new Mt({
          read: () => !1 !== NN.h.getItem(XN),
          write: DD => {
            NN.h.setItem(XN, DD)
          }
        }),
        lD = new kt(VD),
        LD = new Wt(VD),
        TD = new yZ(VD, (DD => function(DD, CD) {
          const cD = IQ(CD.w, CD.h, CD.d),
            ID = new Uint8Array(cD);
          for (let pD = 0; pD < cD; pD++) {
            const cD = lt(DD, Ac(CD, cI(CD, pD)));
            ID[pD] = null === cD ? 0 : Fb(cD)
          }
          return ID
        }(oD, DD)), IZ(vD)),
        GD = new MZ(VD, IZ(vD)),
        RD = new SZ,
        kD = (DD, CD) => {
          let [cD, ID, pD] = DD;
          RD.answered(CD) || mD.show({
            baf2ToastText: [(0, zD.Ud)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: cD,
                h: ID,
                d: pD
              }
            }, zD.J.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      TD.onSizeNotTaken(kD), GD.onSizeNotTaken(kD);
      const WD = new vZ,
        sD = new rZ(VD),
        ED = new FZ,
        uD = new So(ED),
        hD = new mo,
        rD = new zo,
        FD = new Eo(rD),
        DC = new Iv(rD),
        CC = rD.lookSource(),
        cC = new Nv({
          handles: DD => CC.handles(DD) || DD === jD,
          line: (DD, CD) => DD === jD ? function(DD, CD, cD) {
            var ID;
            const pD = YD(null === (ID = CD.at(cD)) || void 0 === ID ? void 0 : ID.item);
            return null === pD ? {
              key: `${Zv}lookFarmEmpty`
            } : {
              key: DD.blockIdToBlockName(DD.getBlockId(cD[0], cD[1], cD[2])).endsWith("|Running") ? `${Zv}lookFarmRunning` : `${Zv}lookFarmWaiting`,
              keys: {
                mob: dD(pD)
              }
            }
          }(oD, UD, CD) : CC.line(DD, CD),
          version: () => CC.version() + UD.version()
        }, (DD => Et(VD.all(), DD, (DD => lt(oD, DD)))), (() => XD.get().tier)),
        IC = new jZ,
        pC = new av,
        iC = new Tv,
        fC = Tv.blade(),
        bC = new Ev,
        QC = new Dt,
        wC = new Av,
        SC = new dv,
        yC = new kv;
      let MC = -1 / 0,
        tC = 0,
        ZC = -1 / 0,
        oC = -1 / 0;
      const vC = () => {
          vD.send("baf2islandsclose"), oC = Date.now()
        },
        NC = [];

      function gC(DD) {
        var CD, cD, ID, pD, iD, fD, QD;
        "core" === (null === (CD = bD.get()) || void 0 === CD ? void 0 : CD.kind) && "core" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && vD.send("baf2coreclose"), "power" === (null === (cD = bD.get()) || void 0 === cD ? void 0 : cD.kind) && "power" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && vD.send("baf2powerclose"), "water" === (null === (ID = bD.get()) || void 0 === ID ? void 0 : ID.kind) && "water" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && vD.send(AD.r), "terminal" === (null === (pD = bD.get()) || void 0 === pD ? void 0 : pD.kind) && "terminal" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && vD.send("baf2terminalclose"), "islands" === (null === (iD = bD.get()) || void 0 === iD ? void 0 : iD.kind) && "islands" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && vC();
        const wD = rD.getStatus();
        "collider" === (null === (fD = bD.get()) || void 0 === fD ? void 0 : fD.kind) && "collider" !== (null === DD || void 0 === DD ? void 0 : DD.kind) && wD && vD.send(RQ(wD, "close"));
        const SD = DD => "reactor" === DD || "battery" === DD;
        if (SD(null === (QD = bD.get()) || void 0 === QD ? void 0 : QD.kind) && !SD(null === DD || void 0 === DD ? void 0 : DD.kind)) {
          var BD, yD, MD;
          const DD = "reactor" === (null === (BD = bD.get()) || void 0 === BD ? void 0 : BD.kind) ? null === (yD = TD.get()) || void 0 === yD ? void 0 : yD.status.baf2RxAt : null === (MD = GD.get()) || void 0 === MD ? void 0 : MD.status.baf2BatAt;
          DD && vD.send(BC(DD, "close"))
        }
        "quests" === (null === DD || void 0 === DD ? void 0 : DD.kind) && ND(), bD.set(DD), null === DD && nD.release()
      }

      function XC() {
        (0, Np.e)(), gC(null)
      }
      let mC = new Set,
        nC = !1;
      const OC = {
        onCreate: DD => {
          oD = DD, oD.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const CD of xC) {
            const DD = zC[CD].inputSlots ? lb(fD) : Vb(CD, fD, qD, vD);
            NC.push((0, op.c)(CD, DD))
          }
          NC.push((0, Np.v)((0, ID.createElement)(ID.Fragment, null, (0, ID.createElement)(vM, {
            controller: MD
          }), (0, ID.createElement)(wt, {
            store: UD
          }), (0, ID.createElement)(Xv, {
            store: cC
          }), (0, ID.createElement)(YM, {
            store: XD
          }), (0, ID.createElement)(uM, {
            store: mD
          }), (0, ID.createElement)(AM, {
            store: nD
          }), (0, ID.createElement)(ct, {
            store: QC
          }), (0, ID.createElement)(oZ, {
            store: WD
          }), (0, ID.createElement)(Do, {
            store: ED
          })), {
            content: (0, ID.createElement)(pM, {
              commands: vD,
              store: bD,
              power: qD,
              water: aD,
              reactor: TD,
              battery: GD,
              collider: rD,
              terminal: JD,
              quests: XD,
              close: Np.i,
              leave: () => {
                nD.dropHeld(), (0, Np.e)()
              },
              askIslands: () => {
                oC = -1 / 0, MC = Date.now(), tC = vD.send(eD)
              },
              openSocial: () => {
                (0, Np.e)(), gp.d.set({
                  openEverythingMenuName: Bc.q.SOCIAL
                })
              },
              showCore: DD => {
                gC({
                  kind: "core",
                  core: DD
                }), vD.send("baf2corereopen")
              }
            }),
            onClose: () => {
              gC(null)
            }
          })), NC.push((0, vp.x)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              gC({
                kind: "quests"
              }), (0, Np.s)()
            }
          })), NC.push(yN(vD, XD, mD)), nC = !1, NC.push(Hi((() => {
            null !== pN && fN(pN)
          }))), NC.push(bN()), NC.push(function() {
            const DD = Vp.i.subscribe(jp, Fp),
              CD = () => {
                if (Ap) {
                  const DD = Ap;
                  Ap = null, (0, zp.t)(DD)
                }
              },
              cD = Vp.i.subscribe("toggleMenu", (DD => {
                "inventory" === (null === DD || void 0 === DD ? void 0 : DD.split("|")[0]) && CD()
              })),
              ID = Vp.i.subscribe("appManagerUpdated|openInGameMenuName", (DD => {
                "inventory" === DD && CD()
              }));
            return () => {
              Vp.i.unsubscribe(DD), Vp.i.unsubscribe(cD), Vp.i.unsubscribe(ID)
            }
          }()), NC.push(function(DD) {
            const CD = cN(DD),
              cD = Vp.i.subscribe(jp, (DD => {
                CN.follow(DD, CD)
              }));
            return () => {
              Vp.i.unsubscribe(cD), CN.clear()
            }
          }(oD)), NC.push(function() {
            const DD = document.documentElement,
              CD = (0, lM.d)(".InvenBodyRight", [], (() => {
                const CD = document.querySelector(".InvenBodyRight");
                CD && DD.style.setProperty("--baf2-backpack-width", `${CD.offsetWidth}px`)
              }));
            return () => {
              CD(), DD.style.removeProperty("--baf2-backpack-width")
            }
          }()), NC.push(function() {
            const DD = document.documentElement;
            return DD.classList.add(Fv), () => {
              DD.classList.remove(Fv)
            }
          }()), NC.push((() => {
            SD.dispose(), wD.dispose()
          })), ZD.start(oD), NC.push((() => {
            ZD.dispose(), bC.dispose(), xD.dispose()
          }))
        },
        onClose: () => {
          (0, zp.t)([]), Ap = null, rp = new Set, pN = null, (0, zp.r)(new Map), mN.clear();
          for (const DD of NC) DD();
          XD.dispose(), cC.dispose(), mD.dispose(), nD.dispose(), IC.dispose(), pC.dispose(oD), lD.dispose(oD), LD.dispose(oD), sD.dispose(oD), uD.dispose(oD), ED.dispose(), hD.dispose(), VD.dispose(), TD.dispose(), GD.dispose(), WD.dispose(), iC.dispose(), fC.dispose(), QC.dispose(), FD.dispose(oD), DC.dispose(oD), rD.dispose(), wC.dispose(), vD.clear()
        },
        onAfterRender: (DD, CD) => {
          var cD, ID, pD;
          try {
            ZD.onAfterRender(CD)
          } catch (wD) {
            console.error("Error drawing BAF2 belt items", wD)
          }
          try {
            bC.onAfterRender(oD, iD)
          } catch (wD) {
            console.error("Error drawing BAF2 jet flames", wD)
          }
          nC || (nC = !0, vD.send("baf2clientready"));
          const fD = oD.getPositionView(iD);
          MD.onAfterRender(CD, fD, yD), UD.onAfterRender(CD, fD, yD, tD), SD.run(yD), IC.onAfterRender(oD, fD), pC.onAfterRender(oD, fD), xD.onAfterRender(oD, fD), lD.onAfterRender(oD, fD), LD.onAfterRender(oD, iD, fD), sD.onAfterRender(oD, iD, fD), uD.onAfterRender(oD, iD), hD.onAfterRender(oD, fD), XD.onPlayerY(fD[1]), FD.onAfterRender(oD), DC.onAfterRender(oD, iD, fD);
          const QD = oD.getTargetedBlock();
          cC.onAfterRender(oD, iD, null !== (cD = null === QD || void 0 === QD ? void 0 : QD.EW) && void 0 !== cD ? cD : 0, null !== (ID = null === QD || void 0 === QD ? void 0 : QD.position) && void 0 !== ID ? ID : null), wC.onAfterRender(oD, CD), PD.onMining(function(DD, CD) {
            var cD, ID;
            const pD = DD.getMiningBlock();
            if (!pD) return null;
            const iD = (0, KD.f)(DD.getBlockId(pD[0], pD[1], pD[2])),
              fD = null !== (cD = null === (ID = DD.FDD(CD)) || void 0 === ID ? void 0 : ID.name) && void 0 !== cD ? cD : null,
              bD = DD.getItemStat(CD, iD.split("|")[0], "harvestLevel");
            return {
              block: iD,
              x: pD[0],
              y: pD[1],
              z: pD[2],
              Lb: fD,
              level: bD
            }
          }(oD, iD), oD.isMining(), performance.now()), "dropMap" === (null === (pD = bD.get()) || void 0 === pD ? void 0 : pD.kind) && LI(fD[1]) && XC()
        },
        onPlayerChangeBlock: (DD, CD, cD, ID, pD, fD) => {
          DD === iD && function(DD, CD, cD, ID, pD, iD, fD) {
            const bD = Rv(iD, fD, DD.isPlayerCrouching(CD));
            if (null === bD) return;
            if (DD.Hx(cD, ID, pD, bD), !DD.getClientOption(CD, "canPickUpItems")) return;
            const QD = fc[bD.split("|")[0]];
            var wD, SD, BD;
            void 0 !== QD && (wD = DD.getInventoryItems(), SD = QD, BD = tt.h.maxItemStackSize, DD.getInventoryFreeSlotCount(CD) > 0 || wD.some((DD => null !== DD && DD.name === SD && null !== DD.amount && DD.amount < BD))) && DD.playSound(CD, (0, tN.c)("pickUp"), .5, 1)
          }(oD, DD, CD, cD, ID, pD, fD)
        },
        onPlayerAltAction: (DD, CD, cD, ID, pD) => {
          var fD, bD;
          if (!oD.getClientOption(iD, "canPickUpItems")) return;
          const QD = null !== (fD = null === (bD = oD.FDD(iD)) || void 0 === bD ? void 0 : bD.name) && void 0 !== fD ? fD : null,
            wD = function(DD, CD) {
              const cD = DD.split("|")[0];
              return HD(cD) && CD !== bp && "Sky Pack" !== CD ? cD : null
            }(pD, QD);
          if (null !== wD) return void(SC.tap(wD, performance.now()) && IN(oD, iD, wD, XD));
          if (!kI(QD)) return;
          const SD = yC.isNewPress(performance.now()),
            BD = function(DD, CD, cD) {
              return !kI(CD) || cD ? null : rI(DD)
            }(pD, QD, oD.isPlayerCrouching(iD));
          null !== BD && SD && oD.Hx(CD, cD, ID, BD)
        },
        onPlayerAttemptAltAction: (DD, CD, cD, ID, pD) => {
          if (function(DD, CD, cD, ID, pD) {
              "Workbench" === ID.split("|")[0] && DD.getClientOption(cD, "canCraft") && (CN.open("Workbench", pD.get(), cN(DD)), CD.send("baf2station Workbench"))
            }(oD, vD, iD, pD, XD), MN(oD, iD, pD)) return "preventAction";
          OD.onAltAction(oD, iD, pD)
        },
        onReceivedMessageFromServer: (DD, CD) => {
          if ("baf2MachineStatus" === DD) {
            var cD, ID, pD, wD, SD, BD, yD, tD, ND, OD, PD, HD, xD, KD, zD, jD;
            const DD = CD,
              iD = DD.baf2MachineTaught;
            fD.set(DD.baf2MachinePos, {
              status: DD.baf2MachineStatus,
              power: null !== (cD = DD.baf2MachinePower) && void 0 !== cD ? cD : null,
              opLeftMs: null !== (ID = DD.baf2MachineOpLeftMs) && void 0 !== ID ? ID : null,
              dug: DD.baf2MachineYield ? {
                item: DD.baf2MachineYield,
                name: gD([DD.baf2MachineYield])[DD.baf2MachineYield]
              } : null,
              powerCap: null !== (pD = DD.baf2MachinePowerCap) && void 0 !== pD ? pD : null,
              powerRates: null !== (wD = DD.baf2MachinePowerRates) && void 0 !== wD ? wD : null,
              coupled: !0 === DD.baf2MachineCoupled,
              couplerLevel: null !== (SD = DD.baf2MachineCoupler) && void 0 !== SD ? SD : 1,
              taught: iD,
              taughtName: iD ? gD([iD])[iD] : null,
              tier: null !== (BD = DD.baf2MachineTier) && void 0 !== BD ? BD : null,
              input: null !== (yD = DD.baf2MachineInput) && void 0 !== yD ? yD : null,
              inertCoupler: null !== (tD = DD.baf2MachineInertCoupler) && void 0 !== tD ? tD : null,
              inputShort: null !== (ND = DD.baf2MachineInputShort) && void 0 !== ND ? ND : null,
              field: null !== (OD = DD.baf2MachineField) && void 0 !== OD ? OD : null,
              noSeeds: !0 === DD.baf2MachineNoSeeds,
              fuelFed: !0 === DD.baf2MachineFuelFed,
              fuelFeeds: !0 === DD.baf2MachineFuelFeeds,
              coreFull: !0 === DD.baf2MachineCoreFull,
              waterUnpowered: !0 === DD.baf2MachineWaterUnpowered,
              powerShort: !0 === DD.baf2MachinePowerShort,
              powerWait: !0 === DD.baf2MachinePowerWait,
              reactorPowered: !0 === DD.baf2MachineReactorPowered,
              fuelLeftMs: null !== (PD = DD.baf2MachineFuelLeftMs) && void 0 !== PD ? PD : null,
              burning: null !== (HD = DD.baf2MachineBurning) && void 0 !== HD ? HD : null,
              fuelKeep: null !== (xD = DD.baf2MachineFuelKeep) && void 0 !== xD ? xD : null,
              water: null !== (KD = DD.baf2MachineWater) && void 0 !== KD ? KD : null,
              farm: null !== (zD = DD.baf2MachineFarm) && void 0 !== zD ? zD : null,
              cryo: null !== (jD = DD.baf2MachineCryo) && void 0 !== jD ? jD : null
            })
          } else if ("baf2StationOpen" === DD) {
            const DD = CD.baf2Station;
            SC.consumeServerOpen(DD, performance.now()) || IN(oD, iD, DD, XD)
          } else if ("baf2Power" === DD) {
            const DD = CD;
            qD.set(DD), DD.baf2PowerOpen && (gC({
              kind: "power"
            }), (0, Np.s)())
          } else if (DD === AD.x) {
            const DD = CD;
            aD.set(DD), DD.baf2WaterOpen && (gC({
              kind: "water"
            }), (0, Np.s)())
          } else if ("baf2RxPlans" === DD) {
            var lD, LD, kD;
            const DD = CD;
            VD.Qm(DD);
            const cD = new Set(DD.baf2RxPlanList.map((DD => {
              let [CD, cD, ID] = DD;
              return `${CD},${cD},${ID}`
            })));
            WD.retain(cD);
            const ID = null === (lD = bD.get()) || void 0 === lD ? void 0 : lD.kind,
              pD = "reactor" === ID ? null === (LD = TD.get()) || void 0 === LD ? void 0 : LD.status.baf2RxAt : "battery" === ID ? null === (kD = GD.get()) || void 0 === kD ? void 0 : kD.status.baf2BatAt : void 0;
            pD && mC.has(pD.join(",")) && !cD.has(pD.join(",")) && XC(), mC = cD
          } else if ("baf2RxStatus" === DD) {
            const DD = CD;
            TD.set(DD), DD.baf2RxOpen && (gC({
              kind: "reactor"
            }), (0, Np.s)())
          } else if ("baf2BatStatus" === DD) {
            const DD = CD;
            GD.set(DD), DD.baf2BatOpen && (gC({
              kind: "battery"
            }), (0, Np.s)())
          } else if ("baf2RxAlarm" === DD) WD.Qm(CD);
          else if ("baf2Bomb" === DD) ED.Qm(CD, oD.getPositionView(iD));
          else if ("baf2Fallout" === DD) hD.Qm(CD);
          else if ("baf2ColBeams" === DD) rD.onBeams(CD);
          else if ("baf2ColStatus" === DD) {
            const DD = CD;
            var dD, YD;
            if (rD.onStatus(DD), DD.baf2ColOpen) rD.onOpen(null !== (dD = null === (YD = oD.FDD(iD)) || void 0 === YD ? void 0 : YD.name) && void 0 !== dD ? dD : null), gC({
              kind: "collider"
            }), (0, Np.s)()
          } else if ("baf2Terminal" === DD) {
            const DD = CD;
            var sD;
            if (JD.apply(DD)) DD.baf2TermReset && (gC({
              kind: "terminal"
            }), (0, Np.s)());
            else "terminal" === (null === (sD = bD.get()) || void 0 === sD ? void 0 : sD.kind) && (bD.set(null), (0, Np.e)())
          } else if ("baf2Core" === DD) {
            var uD;
            const DD = CD;
            if (QD(!0 === DD.baf2CoreNuclear), function(DD, CD) {
                return "core" === (null === DD || void 0 === DD ? void 0 : DD.kind) && CD.baf2CoreTier > DD.core.message.baf2CoreTier
              }(bD.get(), DD)) return void(0, Np.e)();
            if (DD.baf2CoreRefresh && "core" !== (null === (uD = bD.get()) || void 0 === uD ? void 0 : uD.kind)) return;
            gC({
              kind: "core",
              core: gN(DD, gD)
            }), DD.baf2CoreRefresh || (0, Np.s)()
          } else if ("baf2WrenchUndo" === DD) {
            const {
              baf2WrenchPos: DD,
              baf2WrenchBlock: cD
            } = CD;
            oD.Hx(DD[0], DD[1], DD[2], cD)
          } else if ("baf2Toast" === DD) {
            const DD = CD;
            RD.heard(performance.now(), DD.baf2ToastMs), mD.show(DD)
          } else if ("baf2Area" === DD) nD.arrive(CD, null !== bD.get());
          else if ("baf2Quest" === DD) {
            const DD = CD;
            QD(!0 === DD.baf2QuestNuclear), XD.set(DD, function(DD, CD) {
              var cD, ID, pD, iD, fD;
              const bD = [];
              for (const [, , SD, , , , , , BD, yD] of DD.baf2QuestSteps) null !== SD && bD.push(SD), bD.push(...null !== BD && void 0 !== BD ? BD : [], ...null !== yD && void 0 !== yD ? yD : []);
              DD.baf2QuestReward && bD.push(DD.baf2QuestReward);
              const QD = null === (cD = DD.baf2QuestSide) || void 0 === cD ? void 0 : cD[2][2];
              QD && bD.push(QD), bD.push(...null !== (ID = null === (pD = DD.baf2QuestSide) || void 0 === pD ? void 0 : pD[2][8]) && void 0 !== ID ? ID : [], ...null !== (iD = null === (fD = DD.baf2QuestSide) || void 0 === fD ? void 0 : fD[2][9]) && void 0 !== iD ? iD : []);
              for (const [SD] of null !== (wD = DD.baf2QuestAlso) && void 0 !== wD ? wD : []) {
                var wD;
                bD.push(SD)
              }
              return CD(bD)
            }(DD, gD)), fN(DD.baf2QuestTier)
          } else if ("baf2Route" === DD) ! function(DD, CD) {
            let {
              baf2RouteCells: cD,
              baf2RouteInto: ID
            } = CD;
            0 !== cD.length && ID ? DD.setRouteChevrons({
              cells: cD.map(((DD, CD) => {
                const [pD, , iD] = function(DD, CD, cD) {
                  const ID = cD + 1 < DD.length ? DD[cD + 1] : CD;
                  return [ID[0] - DD[cD][0], 0, ID[2] - DD[cD][2]]
                }(cD, ID, CD);
                return {
                  pos: DD,
                  way: [pD, iD]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : DD.setRouteChevrons(null)
          }(oD, CD);
          else if ("baf2QuestBook" === DD) XD.setBook(CD);
          else if ("baf2Stalls" === DD) MD.set(CD.baf2StallCells);
          else if (DD === Zc.n) ZD.onMoves(CD);
          else if (DD === Zc.j) ZD.onLines(CD);
          else if ("baf2Labels" === DD) UD.Qm(CD);
          else if ("baf2DropMap" === DD) gC({
            kind: "dropMap",
            dropMap: CD
          }), (0, Np.s)();
          else if ("baf2Islands" === DD) {
            var FD, DC;
            const DD = CD;
            if (vD.syncIslandEdits(DD.baf2IslandsAnswered), !DD.baf2IslandsOpen && "islands" !== (null === (FD = bD.get()) || void 0 === FD ? void 0 : FD.kind)) return;
            if (DD.baf2IslandsOpen) {
              var CC, cC;
              const CD = gp.d.get("openEverythingMenuName"),
                cD = vD.sent() >= tC,
                ID = "other" !== (NC = {
                  askedAtMs: MC,
                  askSent: cD,
                  reaskedAtMs: ZC,
                  nowMs: Date.now(),
                  panel: null !== (CC = null === (cC = bD.get()) || void 0 === cC ? void 0 : cC.kind) && void 0 !== CC ? CC : null,
                  inGameMenu: gp.d.get("openInGameMenuName"),
                  everythingMenu: null === CD ? null : CD === Bc.q.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== DD.baf2IslandsFocusInvite
                }).everythingMenu && (!!NC.focusInvite || "islands" === NC.panel && "clientGame" === NC.inGameMenu || !(NC.nowMs - NC.reaskedAtMs < Lw) && (NC.askSent && NC.nowMs - NC.askedAtMs < Lw ? "core" === NC.panel && "clientGame" === NC.inGameMenu && null === NC.everythingMenu : "shop" === NC.everythingMenu || null === NC.inGameMenu));
              if (cD && (MC = -1 / 0), ZC = -1 / 0, !ID) return void vC()
            }
            const cD = (pC = DD.baf2IslandsOpen, wC = "islands" === (null === (DC = bD.get()) || void 0 === DC ? void 0 : DC.kind), BC = oC, yC = Date.now(), pC && !wC && yC - BC < Lw);
            gC({
              kind: "islands",
              islands: DD,
              arrivedAtMs: Date.now(),
              backToCore: Tw(bD.get())
            }), cD && (oC = -1 / 0, ZC = Date.now(), vD.send(eD)), DD.baf2IslandsOpen && ("clientGame" !== gp.d.get("openInGameMenuName") && (0, Xp.g)(), (0, Np.s)())
          } else if ("baf2CoopTransfer" === DD) {
            var IC;
            const DD = CD;
            DD.baf2TransferOn ? (gC({
              kind: "transfer",
              transfer: DD,
              arrivedAtMs: Date.now()
            }), (0, Np.s)()) : "transfer" === (null === (IC = bD.get()) || void 0 === IC ? void 0 : IC.kind) && (0, Np.e)()
          } else "baf2IslandLeft" === DD ? (nD.dropHeld(), null !== bD.get() && XC(), "inventory" === gp.d.get("openInGameMenuName") && (0, Xp.g)()) : "baf2Arc" === DD ? iC.Qm(oD, CD) : "baf2Blade" === DD ? fC.onBlade(oD, CD) : "baf2JetFlame" === DD ? bC.Qm(oD, CD) : "baf2GearPower" === DD && QC.Qm(CD);
          var pC, wC, BC, yC, NC
        }
      };
      return OC
    }
  },
  37885: (DD, CD, cD) => {
    function ID(DD, CD, cD) {
      const ID = new Set,
        pD = new ResizeObserver(cD),
        iD = () => {
          const CD = new Set(document.querySelectorAll(DD));
          let iD = !1;
          for (const DD of ID) CD.has(DD) || (pD.unobserve(DD), ID.delete(DD), iD = !0);
          for (const DD of CD) ID.has(DD) || (pD.observe(DD), fD.observe(DD, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), ID.add(DD));
          iD && cD()
        },
        fD = new MutationObserver((CD => {
          CD.some((DD => "attributes" === DD.type)) && cD(), CD.some((CD => function(DD, CD, cD) {
            if ("childList" !== DD.type) return !1;
            for (const ID of DD.addedNodes)
              if (ID instanceof Element && (ID.matches(CD) || ID.querySelector(CD))) return !0;
            for (const ID of DD.removedNodes)
              if (ID instanceof Element)
                for (const DD of cD)
                  if (ID.contains(DD)) return !0;
            return !1
          }(CD, DD, ID))) && iD()
        }));
      fD.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const bD of CD) pD.observe(bD);
      return window.addEventListener("resize", cD), iD(), cD(), () => {
        pD.disconnect(), fD.disconnect(), window.removeEventListener("resize", cD)
      }
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  37870: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      e: () => iD
    });
    const ID = new WeakMap;

    function pD(DD) {
      let CD = ID.get(DD);
      return CD || (CD = {
        hidden: DD.hidden,
        x: NaN,
        y: NaN
      }, ID.set(DD, CD)), CD
    }

    function iD(DD, CD) {
      const cD = pD(DD);
      cD.hidden !== CD && (cD.hidden = CD, DD.hidden = CD)
    }

    function fD(DD, CD, cD) {
      const ID = pD(DD);
      ID.x === CD && ID.y === cD || (ID.x = CD, ID.y = cD, DD.style.translate = `${CD}vw ${cD}vh`)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);