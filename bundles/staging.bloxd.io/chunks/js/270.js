export const id = 270;
export const ids = [270];
export const modules = {
  39162: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(39167);
    const DB = [0, 0, 0];
    class QB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB;
        this.pool = BB, this.origin = OB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const OB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return OB >= this.pool.CP && this.pool.grow(Math.max(2 * this.pool.CP, OB + 1)), this.hide(OB), OB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, OB, GB, DB) {
        const {
          records: QB
        } = this.pool, {
          origin: oB
        } = this, jB = BB * YB.b;
        QB[jB] = OB - oB[0], QB[jB + 1] = GB - oB[1], QB[jB + 2] = DB - oB[2], QB[jB + YB.e] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * YB.b + YB.e] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class oB {
      constructor(BB, OB, GB) {
        this.api = BB, this.model = OB, this.initialCapacity = GB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let OB = this.kinds.get(BB);
        if (void 0 === OB) {
          const GB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === GB || void 0 === GB || GB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), OB = GB && new QB(GB, this.origin), this.kinds.set(BB, OB)
        }
        return OB
      }
      follow(BB) {
        const {
          origin: OB
        } = this;
        if (Math.abs(BB[0] - OB[0]) <= 512 && Math.abs(BB[1] - OB[1]) <= 512 && Math.abs(BB[2] - OB[2]) <= 512) return !1;
        OB[0] = Math.floor(BB[0]), OB[1] = Math.floor(BB[1]), OB[2] = Math.floor(BB[2]);
        for (const GB of this.kinds.values()) null === GB || void 0 === GB || GB.pool.setOrigin(OB[0], OB[1], OB[2]);
        return !0
      }
      commit() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.commit()
      }
      dispose() {
        for (const BB of this.kinds.values()) null === BB || void 0 === BB || BB.dispose();
        this.kinds.clear()
      }
    }
  },
  39176: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB,
      c: () => jB,
      f: () => yB
    });
    const YB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      DB = [0, 1, 2, 0, 2, 3],
      QB = [4, 5];

    function oB(BB, OB, GB, YB, DB) {
      for (let oB = 0; oB < 6; oB++) QB.includes(oB) === DB && JB(BB, OB, GB, YB, oB)
    }

    function jB(BB, OB, GB, YB) {
      for (let DB = 0; DB < 6; DB++) JB(BB, OB, GB, YB, DB)
    }

    function yB(BB, OB, GB, QB, oB) {
      for (let jB = 0; jB < 6; jB++)
        for (const yB of [0, 1]) {
          const [JB, MB, PB] = [yB + 2, yB + 1, (yB + 3) % 4], zB = BB.length / 3;
          for (const [OB, DB] of [
              [yB, MB],
              [JB, MB],
              [JB, PB],
              [yB, PB]
            ])
            for (let yB = 0; yB < 3; yB++) {
              const JB = YB[3 * (4 * jB + OB) + yB],
                MB = YB[3 * (4 * jB + DB) + yB];
              BB.push((JB + (MB - JB) * oB) * QB / 2 + GB[yB])
            }
          for (const BB of DB) OB.push(zB + BB)
        }
    }

    function JB(BB, OB, GB, QB, oB) {
      let [jB, yB, JB] = GB, [MB, PB, zB] = QB;
      const lB = BB.length / 3;
      for (let DB = 4 * oB; DB < 4 * oB + 4; DB++) BB.push(YB[3 * DB] * MB / 2 + jB, YB[3 * DB + 1] * PB / 2 + yB, YB[3 * DB + 2] * zB / 2 + JB);
      for (const YB of DB) OB.push(lB + YB)
    }
  },
  39142: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => PR
    });
    var YB = GB(56);
    const DB = [{
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
      QB = 10;
    let oB = !0;

    function jB() {
      return oB
    }

    function yB(BB) {
      oB = BB
    }
    const JB = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function MB() {
      return oB ? DB.length : QB
    }

    function PB(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = DB[BB - 1]) || void 0 === GB ? void 0 : GB.reactorTier) && void 0 !== OB ? OB : 0
    }

    function zB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PB(BB) > 0;
      return GB && !oB ? "hidden" : BB <= OB ? "open" : GB ? OB < 5 ? "hidden" : OB < QB ? "teaser" : "locked" : "locked"
    }

    function lB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: YB,
        n: DB
      } = ZB(BB);
      return {
        key: OB[YB],
        params: {
          [YB]: GB ? String(DB) : DB
        }
      }
    }
    const pB = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function qB(BB, OB) {
      return PB(BB) > 0 && OB < QB
    }

    function ZB(BB) {
      const OB = PB(BB);
      if (OB > 0) return {
        kind: "atomic",
        n: OB,
        short: `A${OB}`
      };
      const GB = function(BB) {
        return BB >= 6 && BB <= 10 ? BB - 6 + 1 : 0
      }(BB);
      return GB > 0 ? {
        kind: "stage",
        n: GB,
        short: `S${GB}`
      } : {
        kind: "tier",
        n: BB,
        short: String(BB)
      }
    }

    function NB(BB) {
      return DB[Math.max(1, Math.min(BB, DB.length)) - 1]
    }

    function RB(BB, OB) {
      return BB < OB ? function(BB) {
        var OB;
        return null !== (OB = DB[BB]) && void 0 !== OB ? OB : null
      }(BB) : null
    }
    const WB = "baf2coresubmit",
      AB = "baf2corebankpause",
      VB = "baf2coredeposit",
      SB = "baf2corechargepause";

    function nB(BB) {
      var OB;
      return null !== (OB = BB.baf2CoreOpen) && void 0 !== OB ? OB : QB
    }
    const UB = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function fB(BB) {
      return UB.includes(BB)
    }
    const kB = (BB, OB) => OB.map((OB => [OB, [BB]])),
      dB = Object.fromEntries([...kB("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...kB("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...kB("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...kB("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...kB("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...kB("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...kB("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...kB("Parts Bench", ["Focus Lens"]), ...kB("Machine Bench", ["Laser", "Collider"]), ...kB("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...kB("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...kB("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...kB("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...kB("Tool Bench", ["Mob Cage"]), ...kB("Tool Bench", ["Pocket Terminal"]), ...kB("Tool Bench", ["Comet Beacon"]), ...kB("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function KB(BB) {
      var OB;
      return null !== (OB = dB[BB]) && void 0 !== OB ? OB : ["Workbench"]
    }

    function uB(BB) {
      return KB(BB)[0]
    }
    DB.slice(1).map(((BB, OB) => `Core Tier ${OB+2}`));
    var mB = GB(9927);
    const IB = ["on", "hud", "off"];

    function FB(BB) {
      return "on" === BB
    }
    var iB = GB(353);
    const LB = "Mob Farm",
      gB = {
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
      rB = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      XB = {
        1: 20,
        2: 60,
        3: 120
      },
      wB = "baf2farmvoid",
      EB = "Caged ",
      cB = " Spawner Block";

    function hB(BB) {
      return `lifeform:${(0,iB.ef)(BB)}`
    }

    function aB(BB) {
      if (!BB) return null;
      if (BB.startsWith(EB)) {
        const OB = BB.slice(6);
        return rB.includes(OB) ? OB : null
      }
      if (BB.endsWith(cB)) {
        const OB = BB.slice(0, -14);
        return void 0 !== gB[OB] ? OB : null
      }
      return null
    }

    function eB(BB) {
      return !0 === BB.mobFarm
    }

    function TB(BB, OB) {
      return XB[gB[OB]] * BB.opMs / 1e3
    }
    const bB = new Map;
    const CB = "baf2islands",
      HB = "baf2islandnew";

    function vB(BB) {
      const OB = DB.findIndex((OB => OB.unlocks.includes(BB)));
      return OB < 0 ? 1 : OB + 1
    }

    function sB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    var xB = GB(39084);
    const tB = "baf2terminaltake",
      BO = "baf2terminalput",
      OO = ["one", "stack", "fill"];

    function GO(BB, OB, GB) {
      return `${tB} ${BB} ${OB} ${GB}`
    }

    function YO(BB, OB, GB) {
      return `${BO} ${BB} ${OB} ${GB}`
    }

    function DO(BB) {
      return `${BO} ${BB}`
    }
    const QO = [
      [`${tB} `, "take"],
      [`${BO} `, "put"]
    ];

    function oO(BB) {
      const OB = QO.find((OB => {
        let [GB] = OB;
        return BB.startsWith(GB)
      }));
      if (!OB) return null;
      const [GB, YB] = OB, [DB, QB, ...oB] = BB.slice(GB.length).trim().split(" "), jB = Number(DB);
      if (!Number.isSafeInteger(jB) || jB <= 0) return null;
      if ("put" === YB && void 0 === QB) return {
        kind: "putAll",
        seq: jB
      };
      const yB = function(BB) {
        if (OO.includes(BB)) return BB;
        const OB = Number(BB);
        return /^\d+$/.test(BB) && Number.isSafeInteger(OB) && OB > 0 ? OB : null
      }(null !== QB && void 0 !== QB ? QB : "");
      return null === yB || 0 === oB.length ? null : {
        kind: YB,
        seq: jB,
        mode: yB,
        item: oB.join(" ")
      }
    }

    function jO(BB, OB) {
      const GB = "number" === typeof BB ? BB : "one" === BB ? 1 : "stack" === BB ? 99 : OB;
      return Math.min(OB, GB)
    }

    function yO(BB, OB) {
      const GB = BB => "number" === typeof BB ? BB : "one" === BB ? 1 : 99;
      return "fill" === BB || "fill" === OB ? "fill" : GB(BB) + GB(OB)
    }

    function JO(BB, OB) {
      const GB = oO(BB),
        YB = oO(OB),
        DB = GB && YB ? function(BB, OB) {
          return "take" === BB.kind || "take" === OB.kind ? "take" === BB.kind && "take" === OB.kind && BB.item === OB.item ? {
            ...OB,
            mode: yO(BB.mode, OB.mode)
          } : null : "putAll" === BB.kind || "putAll" === OB.kind ? {
            kind: "putAll",
            seq: OB.seq
          } : BB.item === OB.item ? {
            ...OB,
            mode: yO(BB.mode, OB.mode)
          } : null
        }(GB, YB) : null;
      return DB ? "putAll" === (QB = DB).kind ? DO(QB.seq) : "put" === QB.kind ? YO(QB.seq, QB.mode, QB.item) : GO(QB.seq, QB.mode, QB.item) : null;
      var QB
    }
    const MO = "baf2rx";

    function PO(BB, OB) {
      for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
      return [MO, BB[0], BB[1], BB[2], OB, ...YB].join(" ")
    }
    const zO = 2,
      lO = 4,
      pO = 8,
      qO = 16,
      ZO = 32,
      NO = 64,
      RO = 128,
      WO = 256,
      AO = 512,
      VO = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      SO = [{
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
    const nO = "Biomass",
      UO = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function fO(BB) {
      return {
        input: nO,
        inputAmount: 1,
        output: BB,
        outputAmount: 1
      }
    }
    const kO = "baf2synth",
      dO = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      KO = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      uO = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      mO = function(BB, OB) {
        return {
          input: BB,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: OB,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      IO = function(BB, OB) {
        return {
          ...mO(BB, OB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      FO = KO.map((BB => IO(BB, "Biomass", 2))),
      iO = {
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
          recipes: [mO("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), mO("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), mO("Raw Gold", "Gold Grit", 2), mO("Messy Stone", "Sand"), mO("Gravel", "Sand"), mO("Raw Voltite", "Voltite Dust", 2), mO("Moonstone", "Moonstone Dust", 4), mO("Wheat Seeds", "Fertiliser"), mO("Raw Uranium", "Uranium Grit", 2), IO("Mossy Messy Stone", "Sand"), ...FO],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [mO("Iron Grit", "Iron Bar"), mO("Copper Grit", "Copper Bar"), mO("Gold Grit", "Gold Bar"), mO("Raw Iron", "Iron Bar"), mO("Raw Copper", "Copper Bar"), mO("Raw Gold", "Gold Bar"), mO("Sand", "Glass"), mO("Messy Stone", "Stone"), ...iB.jd.map((BB => mO(BB, "Charcoal", 1, 4))), mO("Wheat", "Bread", 1, 2), ...KO.map(((BB, OB) => IO(BB, uO[OB])))],
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
          recipes: [mO("Iron Bar", "Iron Plate"), mO("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [mO("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [mO("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [mO("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), mO("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), mO("Raw Gold", "Gold Grit", 3), mO("Raw Voltite", "Voltite Dust", 3), mO("Messy Stone", "Sand", 2), mO("Gravel", "Sand", 2), mO("Moonstone", "Moonstone Dust", 6), mO("Raw Uranium", "Uranium Grit", 3), IO("Mossy Messy Stone", "Sand", 2), ...FO],
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
          table: VO
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [mO("Coal", "Diamond", 1, 24), mO("Voltite Dust", "Moonstone", 1, 12)],
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
        ...xB.g
      },
      LO = {
        Crusher: [mO("Spent Pellet", "Glow Dust"), mO("Wheat Seeds", "Biomass"), mO("Wheat", "Biomass"), mO("Dead Bush", "Biomass"), mO("Dusk Moss", "Biomass"), mO("Rotten Flesh", "Biomass"), mO("Bone", "Biomass", 2)],
        "Shatter Mill": [mO("Spent Pellet", "Glow Dust"), mO("Wheat Seeds", "Biomass"), mO("Wheat", "Biomass"), mO("Dead Bush", "Biomass"), mO("Dusk Moss", "Biomass"), mO("Rotten Flesh", "Biomass"), mO("Bone", "Biomass", 2), ...iB.jd.map((BB => mO(BB, "Biomass")))],
        Smelter: [mO("Biomass", "Fertiliser", 2)],
        Press: [mO("Coal", "Graphite", 1, 4)]
      },
      gO = "Power Coupler",
      rO = "Advanced Coupler",
      XO = "Nova Coupler",
      wO = [{
        item: gO,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: rO,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: XO,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const EO = new Map;

    function cO(BB) {
      var OB, GB;
      return null !== (OB = null !== (GB = BB.fuelSlot) && void 0 !== GB ? GB : BB.couplerSlot) && void 0 !== OB ? OB : null
    }

    function hO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!BB.couplable) throw new Error(`${BB.kind} takes no Power Coupler`);
      let GB = EO.get(BB);
      GB || (GB = [], EO.set(BB, GB));
      let YB = GB[OB];
      if (!YB) {
        var DB;
        const {
          divisor: QB,
          powerPerS: oB
        } = wO[OB - 1], jB = BB.opMs / QB, yB = void 0 !== BB.fluidMade || void 0 !== BB.cryoMade ? BB.powerPerOp : oB * jB / 1e3;
        YB = {
          ...BB,
          fuelSlot: null,
          couplerSlot: null !== (DB = cO(BB)) && void 0 !== DB ? DB : void 0,
          opMs: jB,
          powerPerOp: yB,
          coupled: !0
        }, OB > 1 && (YB = {
          ...YB,
          couplerLevel: OB
        }), GB[OB] = YB
      }
      return YB
    }
    const aO = new Map;
    const eO = new Map;

    function TO(BB, OB) {
      if (null === OB || (GB = OB, !UO.includes(GB))) return BB;
      var GB;
      let YB = eO.get(OB);
      return YB || (YB = {
        ...BB,
        recipes: [fO(OB)]
      }, eO.set(OB, YB)), YB
    }

    function bO(BB) {
      return !0 === BB.synth
    }
    const CO = (BB, OB, GB, YB) => ({
        output: BB,
        outputAmount: OB,
        tier: GB,
        inputs: YB.map((BB => {
          let [OB, GB] = BB;
          return {
            item: OB,
            amount: GB
          }
        }))
      }),
      HO = Object.fromEntries([CO("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), CO("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), CO("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), CO("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), CO("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), CO("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), CO("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), CO("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), CO("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), CO("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), CO("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), CO("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), CO("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), CO("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), CO("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), CO("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), CO("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), CO("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), CO("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), CO("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), CO("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), CO("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), CO("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), CO("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), CO("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), CO("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), CO("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), CO("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), CO("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), CO("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((BB => [BB.output, BB]))),
      vO = new Map;

    function sO(BB, OB) {
      let GB = iO[BB];
      if (OB.atomic && (GB = function(BB) {
          const OB = LO[BB.kind];
          if (!OB) return BB;
          let GB = aO.get(BB.kind);
          if (!GB) {
            const YB = new Set(OB.map((BB => BB.input))),
              DB = BB.recipes.filter((BB => !YB.has(BB.input)));
            GB = {
              ...BB,
              recipes: [...DB, ...OB]
            }, aO.set(BB.kind, GB)
          }
          return GB
        }(GB)), GB.synth) return TO(GB, OB.taught);
      if (OB.coupled && GB.couplable) return hO(GB, OB.level);
      const YB = GB.inputSlots && null !== OB.taught ? HO[OB.taught] : void 0;
      if (!YB) return GB;
      const DB = `${BB}|${YB.output}`;
      let QB = vO.get(DB);
      return QB || (QB = {
        ...GB,
        bench: YB
      }, vO.set(DB, QB)), QB
    }
    const xO = ["Diamond", "Moonstone"];

    function tO(BB) {
      return new Set(BB.flatMap((BB => BB.bonus ? [BB.output, BB.bonus.item] : [BB.output])).filter((BB => !xO.includes(BB))))
    }
    const BG = Object.values(iO).flatMap((BB => BB.recipes));
    tO(BG.filter((BB => !0 !== BB.nuclear))), tO([...BG.filter((BB => !0 === BB.nuclear)), ...Object.values(LO).flat()]);

    function OG(BB) {
      return null === BB.inputSlot && void 0 === BB.inputSlots && void 0 === BB.powerMade && void 0 === BB.fluidMade && !BB.treeCutter && void 0 === BB.table
    }

    function GG(BB) {
      return !0 === BB.treeCutter
    }
    const YG = ["Voltite Cell"];

    function DG(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = BB.fuels) || void 0 === GB ? void 0 : GB.some((BB => YG.includes(BB)))) && void 0 !== OB && OB
    }
    const QG = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(iB.jd.map((BB => [BB, 8e3]))),
        ...Object.fromEntries(iB.Xd.map((BB => [BB, 2e3]))),
        "Voltite Cell": 12e4
      },
      oG = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      jG = {
        "Uranium Deposit": 4e3
      };

    function yG(BB) {
      var OB;
      return null !== (OB = Object.keys(oG).find((OB => oG[OB] === BB))) && void 0 !== OB ? OB : null
    }

    function JG(BB) {
      return dO.includes(BB)
    }

    function MG(BB) {
      return !0 !== BB.nuclear || jB()
    }
    var PG = GB(331);
    var zG = GB(10004),
      lG = GB(9941),
      pG = GB(10010),
      qG = GB(10001);
    const ZG = "Reactor Controller",
      NG = "Reactor Port",
      RG = "Battery Cell",
      WG = ["fuel", "water", "waste"],
      AG = {
        fuel: NG,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      VG = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      SG = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      nG = "Reactor Frame",
      UG = "Reactor Glass",
      fG = {
        edge: [nG],
        cap: [UG, NG],
        wall: [UG, NG],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [ZG]
      },
      kG = {
        edge: [RG],
        cap: [RG],
        wall: [RG],
        inside: [RG],
        ctrl: [RG]
      },
      dG = ["edge", "cap", "wall", "inside"],
      KG = ["Reactor Slag"];

    function uG(BB) {
      return KG.includes(mG(BB))
    }

    function mG(BB) {
      const OB = BB.indexOf("|");
      return OB < 0 ? BB : BB.slice(0, OB)
    }

    function IG(BB) {
      return mG(BB) === ZG ? "reactor" : null
    }

    function FG(BB) {
      return mG(BB) !== NG ? null : BB.endsWith("|Water") ? "water" : BB.endsWith("|Waste") ? "waste" : "fuel"
    }

    function iG(BB) {
      const OB = FG(BB);
      return null === OB ? null : rG(AG[WG[(WG.indexOf(OB) + 1) % WG.length]], function(BB) {
        return BB.includes(LG)
      }(BB))
    }
    const LG = "|meta|rot1|Formed",
      gG = new Set([nG, UG, NG]);

    function rG(BB, OB) {
      var GB;
      const YB = mG(BB);
      if (!gG.has(YB)) return BB;
      if (YB !== NG) return OB ? YB + LG : YB;
      const DB = null !== (GB = FG(BB)) && void 0 !== GB ? GB : "fuel";
      return OB ? "fuel" === DB ? YB + LG : `${YB}${LG}|${"water"===DB?"Water":"Waste"}` : AG[DB]
    }

    function XG(BB, OB) {
      const GB = YY(BB, OB);
      if ("Air" === GB) return !1;
      const YB = "reactor" === BB ? fG : kG;
      return dG.some((BB => YB[BB].includes(GB))) || "reactor" === BB && KG.includes(GB)
    }

    function wG(BB) {
      return SG[BB]
    }

    function EG(BB) {
      var OB;
      return null !== (OB = VG[BB]) && void 0 !== OB ? OB : VG[1]
    }

    function cG(BB) {
      const [OB, , GB] = EG(BB);
      return [GB, 0, -OB]
    }

    function hG(BB, OB, GB, YB, DB, QB) {
      return {
        ctrl: [BB[0], BB[1], BB[2]],
        rot: VG[OB] ? OB : 1,
        w: GB,
        h: YB,
        d: DB,
        cu: QB[0],
        cv: QB[1]
      }
    }

    function aG(BB, OB) {
      return "reactor" === BB ? [Math.floor((OB - 1) / 2), 0] : [0, 0]
    }

    function eG(BB, OB, GB, YB, DB) {
      let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.rot;
      if (GB === BB.w && YB === BB.h && DB === BB.d && QB === BB.rot) return BB;
      const [oB] = aG(OB, BB.w);
      if (BB.cu === oB && BB.cv <= 1) return hG(BB.ctrl, QB, GB, YB, DB, aG(OB, GB));
      const jB = (BB, OB) => Math.max(1, Math.min(OB, BB));
      return hG(BB.ctrl, QB, GB, YB, DB, [jB(BB.cu, GB - 2), 0 === BB.cv ? 0 : jB(BB.cv, YB - 2)])
    }
    const TG = 11,
      bG = 2 * TG + 1;
    new Uint8Array(bG * bG * bG);

    function CG(BB) {
      return BB.w * BB.h * BB.d
    }

    function HG(BB) {
      const OB = cG(BB.rot);
      return [BB.ctrl[0] - OB[0] * BB.cu, BB.ctrl[1] - BB.cv, BB.ctrl[2] - OB[2] * BB.cu]
    }

    function vG(BB) {
      return BB.cv * BB.d * BB.w + BB.cu
    }

    function sG(BB, OB) {
      const GB = OB % BB.w,
        YB = Math.floor(OB / BB.w) % BB.d;
      return [GB, Math.floor(OB / (BB.w * BB.d)), YB]
    }

    function xG(BB, OB) {
      const [GB, YB, DB] = sG(BB, OB), QB = HG(BB), oB = EG(BB.rot), jB = cG(BB.rot);
      return [QB[0] + jB[0] * GB - oB[0] * DB, QB[1] + YB, QB[2] + jB[2] * GB - oB[2] * DB]
    }

    function tG(BB, OB) {
      const GB = HG(BB),
        YB = EG(BB.rot),
        DB = cG(BB.rot),
        QB = OB[0] - GB[0],
        oB = OB[2] - GB[2],
        jB = QB * DB[0] + oB * DB[2],
        yB = -(QB * YB[0] + oB * YB[2]),
        JB = OB[1] - GB[1];
      return jB < 0 || jB >= BB.w || JB < 0 || JB >= BB.h || yB < 0 || yB >= BB.d ? -1 : (JB * BB.d + yB) * BB.w + jB
    }

    function BY(BB, OB) {
      if (OB === vG(BB)) return "ctrl";
      const [GB, YB, DB] = sG(BB, OB), QB = 0 === YB || YB === BB.h - 1, oB = Number(0 === GB || GB === BB.w - 1) + Number(QB) + Number(0 === DB || DB === BB.d - 1);
      return oB >= 2 ? "edge" : 1 === oB ? QB ? "cap" : "wall" : "inside"
    }

    function OY(BB, OB) {
      const [GB, YB, DB] = sG(BB, OB);
      return 0 === GB || GB === BB.w - 1 || 0 === YB || YB === BB.h - 1 || 0 === DB || DB === BB.d - 1 ? -1 : ((YB - 1) * (BB.d - 2) + (DB - 1)) * (BB.w - 2) + (GB - 1)
    }

    function GY(BB, OB) {
      const GB = BB.w - 2,
        YB = BB.d - 2,
        DB = OB % GB + 1,
        QB = Math.floor(OB / GB) % YB + 1;
      return ((Math.floor(OB / (GB * YB)) + 1) * BB.d + QB) * BB.w + DB
    }

    function YY(BB, OB) {
      const GB = mG(OB);
      return "reactor" === BB && GB === ZG ? nG : GB
    }

    function DY(BB, OB, GB) {
      const YB = "ctrl" === OB ? mG(GB) : YY(BB, GB);
      return ("reactor" === BB ? fG : kG)[OB].includes(YB) ? "ok" : "Air" === YB ? "missing" : XG(BB, GB) ? "wrong" : "blocked"
    }

    function QY(BB, OB) {
      return "battery" === BB ? RG : "inside" === OB ? null : function(BB, OB) {
        if ("inside" === OB || "ctrl" === OB || "battery" === BB) return null;
        return "edge" === OB ? nG : UG
      }(BB, OB)
    }
    const oY = {
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
      jY = "Collider",
      yY = "Laser",
      JY = "Star Alloy",
      MY = "Glow Dust",
      PY = [jY, "_Collider Focus"];

    function zY(BB) {
      return PY.indexOf(mG(BB))
    }

    function lY(BB) {
      return mG(BB) === yY
    }

    function pY(BB) {
      return [
        [BB[0], BB[1], BB[2]],
        [BB[0], BB[1] + 1, BB[2]]
      ]
    }
    const qY = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function ZY(BB, OB, GB) {
      const YB = qY[OB];
      return [BB[0] + YB[0] * GB, BB[1], BB[2] + YB[2] * GB]
    }

    function NY(BB, OB) {
      if (OB[1] !== BB[1]) return null;
      const GB = OB[0] - BB[0],
        YB = OB[2] - BB[2];
      if (0 !== GB === (0 !== YB)) return null;
      const DB = Math.abs(GB + YB);
      if (DB > oY.LASER_D) return null;
      return {
        dir: YB < 0 ? 0 : GB > 0 ? 1 : YB > 0 ? 2 : 3,
        IM: DB
      }
    }

    function RY(BB, OB, GB) {
      const YB = OB => Math.abs(BB[0] - OB[0]) <= 1 && Math.abs(BB[1] - OB[1]) <= 1;
      return YB(OB) || YB(GB)
    }

    function WY(BB, OB) {
      return function(BB, OB, GB, YB) {
        return [0, 1, 2, 3].map((DB => {
          for (let QB = 1; QB <= oY.LASER_D; QB++) {
            const oB = ZY(BB, DB, QB);
            if (RY([oB[0], oB[2]], OB, GB) || !YB(oB)) return !1
          }
          return !0
        }))
      }(pY(BB)[1], OB.spawnXZ, OB.coreXZ, (BB => BB[1] >= zG.k && BB[1] < zG.k + zG.o && BB[0] >= OB.minXZ[0] && BB[0] <= OB.maxXZ[0] && BB[2] >= OB.minXZ[1] && BB[2] <= OB.maxXZ[1]))
    }
    const AY = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function VY(BB) {
      return Math.max(48 + 16 * BB, NB(BB).machineAllowance)
    }
    const SY = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function nY(BB) {
      const OB = BB.split("|")[0];
      return SY.includes(OB) ? "Solar Panel" : OB === pG.e ? "Fluid Pipe" : zY(OB) >= 0 ? "Collider" : (GB = OB, AY.includes(GB) ? OB : null);
      var GB
    }
    const UY = "buildAFactory2Game:solarPanelDescription";
    const fY = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function kY(BB, OB) {
      var GB;
      return null !== (GB = fY.find((GB => {
        var YB;
        return (null !== (YB = BB.level(GB)) && void 0 !== YB ? YB : 0) >= OB
      }))) && void 0 !== GB ? GB : null
    }
    const dY = "buildAFactory2Game:";
    let KY = null;
    const uY = {
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
      mY = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      IY = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      FY = {
        "Loot Chest": `${dY}lookRuinChestName`
      };

    function iY(BB, OB) {
      var GB, YB, DB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB;
      if ("Solar Panel" === nY(OB)) return {
        name: (0, iB.nf)(BB.displayName("Solar Panel")),
        detail: UY,
        detailItem: null
      };
      const oB = OB.endsWith(" Ore"),
        yB = (KY ??= new Set([...Object.keys((0, lG.j)()), ...Object.keys((0, pG.s)())].map((BB => BB.split("|")[0]))), KY).has(OB),
        JB = oB || yB ? null : function(BB) {
          var OB;
          return BB.endsWith(" Log") && !BB.startsWith("Barkless ") ? "lookLog" : BB.endsWith(" Sapling") ? "lookSapling" : BB.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (OB = uY[BB]) && void 0 !== OB ? OB : null
        }(OB);
      if (!BB.isBlock(OB) || !oB && !yB && null === JB) return null;
      const MB = null !== (GB = FY[OB]) && void 0 !== GB ? GB : (0, iB.bc)(OB, null !== (YB = BB.displayName(QB)) && void 0 !== YB ? YB : BB.displayName(OB));
      if (null !== JB) return {
        name: MB,
        detail: `${dY}${JB}`,
        detailItem: null
      };
      const PB = null !== (DB = mY[OB]) && void 0 !== DB ? DB : jB() ? IY[OB] : void 0;
      if (yB && void 0 !== PB) return {
        name: MB,
        detail: `${dY}${PB}`,
        detailItem: null
      };
      const zB = oG[OB];
      if (void 0 !== zB) return {
        name: MB,
        detail: `${dY}lookDeposit`,
        detailItem: (0, iB.bc)(zB, BB.displayName(zB))
      };
      const lB = BB.harvestLevel(OB);
      if (oB && "rock" === BB.harvestType(OB) && 0 !== lB) {
        const OB = kY(BB, null !== lB && void 0 !== lB ? lB : 0);
        if (OB === fY[0]) return {
          name: MB,
          detail: `${dY}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== OB) return {
          name: MB,
          detail: `${dY}lookPickaxe`,
          detailItem: (0, iB.bc)(OB, BB.displayName(OB))
        }
      }
      return {
        name: MB,
        detail: (0, iB.nf)(BB.description(OB)),
        detailItem: null
      }
    }

    function LY(BB) {
      return BB < zG.k - 24
    }
    const gY = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const rY = "Wrench",
      XY = "Nova Wrench";

    function wY(BB) {
      return BB === rY || BB === XY
    }
    const EY = [...zG.E, "Belt Lift", "Belt Drop"];
    const cY = ["Belt Lift", "Belt Drop"],
      hY = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function aY(BB) {
      return BB.split("|")[0]
    }

    function eY(BB) {
      const OB = /\|rot(\d)/.exec(BB);
      return OB ? Number(OB[1]) : 1
    }

    function TY(BB) {
      return BB % 4 + 1
    }

    function bY(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === OB && "" === GB ? BB : `${BB}|meta|rot${OB}${GB}`
    }

    function CY(BB) {
      return aY(BB) === zG.x ? (0, zG.M)(BB) ? "gateRight" : "gateLeft" : (0, zG.Q)(BB)
    }

    function HY(BB) {
      const OB = aY(BB),
        GB = eY(BB);
      if (zG.E.includes(OB)) return (0, zG.F)(OB, TY(GB), null);
      if (OB === zG.e) return (0, zG.Y)(TY(GB), (0, zG.O)(BB));
      if (OB === zG.z) {
        const YB = hY[(0, zG.Q)(BB)];
        return null === YB ? bY(OB, TY(GB)) : bY(OB, GB, zG.B[YB])
      }
      return OB === zG.x ? (0, zG.M)(BB) ? bY(OB, TY(GB)) : bY(OB, GB, zG.i) : qG.e.includes(OB) && !cY.includes(OB) || JG(OB) ? bY(OB, TY(GB)) : null
    }

    function vY(BB) {
      return qG.e.includes(BB) || JG(BB) || null !== nY(BB)
    }

    function sY(BB) {
      return "Solar Panel" === nY(BB)
    }
    const xY = "buildAFactory2Game:",
      tY = {
        leftFront: `${xY}lookSplitDetail_leftFront`,
        frontRight: `${xY}lookSplitDetail_frontRight`,
        gateRight: `${xY}lookGateDetail_gateRight`
      };

    function BD(BB, OB) {
      var GB;
      let YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const DB = CY(BB),
        QB = null === DB ? null : `${xY}${DB.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${DB}`,
        oB = null === DB ? null : null !== (GB = tY[DB]) && void 0 !== GB ? GB : null;
      if (wY(OB) && YB) {
        const GB = aY(BB);
        return OB === XY && jB() && function(BB) {
          return EY.includes(aY(BB))
        }(BB) ? {
          mode: QB,
          detail: oB,
          next: `${xY}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: QB,
          detail: oB,
          next: vY(GB) && !sY(GB) ? `${xY}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const yB = wY(OB) ? HY(BB) : null;
      if (null === yB) return {
        mode: QB,
        detail: oB,
        next: null,
        nextState: null
      };
      const JB = CY(yB);
      return null === JB || eY(yB) !== eY(BB) ? {
        mode: QB,
        detail: oB,
        next: `${xY}lookWrenchTurn`,
        nextState: null
      } : {
        mode: QB,
        detail: oB,
        next: `${xY}lookWrenchNext`,
        nextState: `${xY}lookWrenchState_${JB}`
      }
    }
    const OD = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const GD = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function YD(BB) {
      return [0, 1, 2, 3].map((OB => 0 !== (BB & 1 << OB)))
    }

    function DD(BB) {
      const OB = [];
      for (let GB = 8; GB + 2 < BB.length; GB += 3) OB.push([BB[GB], BB[GB + 1], BB[GB + 2]]);
      return {
        focus: [BB[0], BB[1], BB[2]],
        lasers: YD(BB[3]),
        open: YD(BB[4]),
        live: YD(BB[5]),
        on: 1 === BB[6],
        state: GD[BB[7]],
        blockers: OB
      }
    }
    const QD = "Arc Caster",
      oD = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      jD = (Object.values(oD), "Jet Chestplate"),
      yD = "Nova Jet Chestplate",
      JD = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      MD = Object.values(JD);

    function PD(BB, OB, GB) {
      return Math.min(function(BB) {
        return jB() && PB(BB) >= 5 ? 20 : 10
      }(GB), Math.floor(function(BB, OB) {
        return Math.max(0, BB) + (jB() ? Math.max(0, OB) : 0)
      }(BB, OB) / 5))
    }

    function zD(BB, OB, GB) {
      const YB = PD(OB, GB, BB),
        DB = PB(BB),
        QB = (DB >= 3 ? 55 : DB >= 1 ? 50 : BB >= 8 ? 45 : 30) + YB,
        oB = Math.max(100 + YB, 2 * QB);
      return {
        arcDamage: QB,
        arcPierce: BB >= 7 ? 2 : 1,
        arcChain: BB >= 10,
        barrierMax: (DB >= 4 ? 100 : DB >= 2 ? 90 : BB >= 9 ? 80 : BB >= 6 ? 60 : 40) + 5 * YB,
        barrierRegenPerS: DB >= 5 ? 20 : BB >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * YB,
        novaShieldRegenPerS: 32,
        bladeDamage: oB,
        bladePunch: Math.round(.5 * oB),
        forgeRank: YB
      }
    }
    const lD = {
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
    var pD = GB(37523),
      qD = GB(37270),
      ZD = GB(37267),
      ND = GB(16),
      RD = GB(1699),
      WD = GB(1090),
      AD = GB.n(WD);

    function VD(BB) {
      return !0 === BB.field
    }
    const SD = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function nD(BB) {
      return SD.has(BB) ? `buildAFactory2Game:itemPlural_${(0,iB.ef)(BB)}` : null
    }
    var UD = GB(1175),
      fD = GB(1383),
      kD = GB(2012),
      dD = GB(2e3),
      KD = GB(1438),
      uD = GB(37517),
      mD = GB(25),
      ID = GB(37508);
    const FD = "baf2QuestView",
      iD = "baf2PlayerY",
      LD = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class gD {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = BB, this.view = {
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
      set(BB, OB) {
        var GB, YB, DB, QB, oB, jB, yB, JB;
        const MB = JSON.stringify(BB.baf2QuestName) === JSON.stringify(this.view.name),
          PB = new Set(this.view.rows.filter((BB => BB.done)).map((BB => BB.id))),
          zB = new Set(this.view.rows.filter((BB => BB.justFinished)).map((BB => BB.id))),
          lB = BB.baf2QuestSide,
          pB = null !== lB && !0 === BB.baf2QuestSideFocus;
        let qB = !1,
          ZB = 0;
        const NB = BB.baf2QuestSteps.map((BB => {
            const OB = eD(BB, LD.has(BB[0]) ? BB[0] : "" + ZB++),
              GB = MB && OB.done && !PB.has(OB.id);
            return OB.justFinished = GB || MB && OB.done && zB.has(OB.id), qB ||= GB, OB
          })),
          RB = aD(NB);
        RB >= 0 && !pB && (NB[RB].current = !0);
        const WB = !MB && null !== BB.baf2QuestName,
          AB = JSON.stringify(lB && [lB[0], lB[1]]),
          VB = AB === JSON.stringify(null !== (GB = null === (YB = this.view.side) || void 0 === YB ? void 0 : YB.name) && void 0 !== GB ? GB : null),
          SB = null !== lB && !this.sidesSeen.has(AB);
        SB && this.sidesSeen.add(AB), this.serverTutorial = null !== (DB = BB.baf2QuestTutorial) && void 0 !== DB ? DB : "on", (null !== (QB = BB.baf2QuestTutorialSeq) && void 0 !== QB ? QB : 0) >= this.pickSeq && this.endPick();
        const nB = !MB || !VB || BB.baf2QuestTier !== this.view.tier;
        this.view = {
          name: BB.baf2QuestName,
          rows: NB,
          reward: BB.baf2QuestReward,
          goal: BB.baf2QuestGoal,
          pulse: this.view.pulse + (qB || WB ? 1 : 0),
          itemNames: OB,
          side: lB && {
            name: [lB[0], lB[1]],
            row: {
              ...eD(lB[2], "side"),
              current: pB
            },
            goal: null !== (oB = lB[3]) && void 0 !== oB ? oB : null
          },
          sideCameUpAt: SB ? Date.now() : this.view.sideCameUpAt,
          tier: BB.baf2QuestTier,
          core: BB.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (jB = BB.baf2QuestAlso) && void 0 !== jB ? jB : [],
          depth: null !== (yB = BB.baf2QuestDepth) && void 0 !== yB ? yB : null,
          tutorial: null !== (JB = this.pickedTutorial) && void 0 !== JB ? JB : this.serverTutorial,
          tutorialKnown: !0
        }, this.tM(), qB && this.scheduleClear(), nB && this.requestBook()
      }
      setTutorial(BB) {
        return this.endPick(), this.pickedTutorial = BB, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.tM()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: BB
        }, this.tM(), this.pickSeq
      }
      onPlayerY(BB) {
        const OB = Math.floor(BB);
        OB !== this.playerY && (this.playerY = OB, this.view.depth && mD.o.tM(iD, OB))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(BB) {
        this.view = {
          ...this.view,
          chapters: BB.baf2BookChapters
        }, this.tM()
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
            rows: this.view.rows.map((BB => BB.justFinished ? {
              ...BB,
              justFinished: !1
            } : BB))
          }, this.tM()
        }), 2400)
      }
      tM() {
        mD.o.tM(FD, this.view, !0)
      }
    }

    function rD(BB, OB) {
      return BB.sideCameUpAt > 0 && OB - BB.sideCameUpAt < 2400
    }

    function XD(BB) {
      return (null === BB.name || wD(BB)) && null === BB.side && null !== BB.chapters
    }

    function wD(BB) {
      var OB;
      return "quest_forgeOngoing" === (null === (OB = BB.name) || void 0 === OB ? void 0 : OB[0])
    }

    function ED(BB) {
      return BB.filter((BB => !LD.has(BB.key)))
    }

    function cD(BB) {
      return BB.key.startsWith("stepCraft")
    }

    function hD(BB, OB) {
      const GB = new Set,
        YB = BB.side ? [...BB.rows, BB.side.row] : BB.rows;
      for (const QB of YB)
        if (!QB.done) {
          !QB.item || OB && !cD(QB) || GB.add(QB.item);
          for (const [BB, OB, YB] of null !== (DB = QB.chips) && void 0 !== DB ? DB : []) {
            var DB;
            OB < YB && GB.add(BB)
          }
        } return GB
    }

    function aD(BB) {
      const OB = BB.findIndex((BB => !BB.done && !BB.away));
      return OB >= 0 ? OB : BB.findIndex((BB => !BB.done))
    }

    function eD(BB, OB) {
      let [GB, YB, DB, QB, oB, jB, yB, JB, MB, PB] = BB;
      return {
        id: OB,
        key: GB,
        params: YB,
        item: DB,
        amount: QB,
        total: oB,
        done: jB,
        chips: null !== yB && void 0 !== yB ? yB : null,
        current: !1,
        away: !0 === JB,
        madeFor: null !== MB && void 0 !== MB ? MB : [],
        also: null !== PB && void 0 !== PB ? PB : [],
        justFinished: !1
      }
    }
    const TD = "baf2QuestItems",
      bD = new Set;
    let CD = new Set,
      HD = null;

    function vD(BB) {
      const OB = FB(BB.tutorial),
        GB = OB ? hD(BB, !0) : bD;
      "inventory" === ND.c.get("openInGameMenuName") ? (HD = null, (0, ID.v)(GB)) : HD = GB;
      const YB = OB ? hD(BB, !1) : bD;
      (0, uD.b)(YB, CD) || (CD = YB, mD.o.tM(TD, CD))
    }

    function sD() {
      return (0, KD.c)(TD, (() => CD))
    }
    var xD = GB(39151);
    const tD = [{
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

    function BQ(BB, OB) {
      return [`Deposit Seed (${BB})`, {
        item: oG[`${BB} Deposit`],
        amount: OB
      }]
    }
    const OQ = Object.fromEntries([BQ("Coal", 8), BQ("Iron", 8), BQ("Copper", 8), BQ("Gold", 6), BQ("Voltite", 4), BQ("Uranium", 4)]),
      GQ = "Relay Coil",
      YQ = new Map;

    function DQ(BB) {
      let OB = YQ.get(BB);
      if (!OB) {
        const GB = Math.max(1, BB);
        OB = tD.filter((BB => {
          var OB;
          return GB >= BB.fromTier && GB <= (null !== (OB = BB.untilTier) && void 0 !== OB ? OB : 1 / 0)
        })).map((BB => BB.later && GB >= BB.later.tier ? {
          ...BB,
          weight: BB.later.weight
        } : BB)), YQ.set(BB, OB)
      }
      return OB
    }

    function QQ(BB) {
      return DQ(BB).some((BB => {
        let {
          item: OB
        } = BB;
        return OB === GQ
      }))
    }

    function oQ(BB) {
      return BB.startsWith("Deposit Seed (")
    }

    function jQ(BB, OB) {
      const GB = DQ(BB);
      return OB ? GB.filter((BB => OB(BB.item))) : GB
    }

    function yQ(BB) {
      return BB.reduce(((BB, OB) => BB + OB.weight), 0)
    }

    function JQ(BB, OB) {
      const GB = jQ(BB, OB),
        YB = yQ(GB);
      return GB.map((BB => ({
        find: BB,
        chance: BB.weight / YB
      })))
    }
    const MQ = 6e4,
      PQ = new Intl.NumberFormat("en-US");

    function zQ(BB, OB) {
      const GB = BB >= 10 ? Math.round(BB) : Math.round(10 * BB) / 10;
      return 0 === GB ? "0" : `${OB}${PQ.format(GB)}`
    }

    function lQ(BB) {
      return BB < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? PQ.format(BB) : BB < 1e6 ? `${BB<1e5?Math.floor(BB/100)/10:Math.floor(BB/1e3)}k` : Math.floor(BB / 1e5) / 10 + "M"
    }

    function pQ(BB) {
      return BB < 0 ? "\u2212" + -BB : String(BB)
    }

    function qQ(BB, OB) {
      const GB = Math.max(1, Math.round(OB));
      if (GB < 60) return BB("buildAFactory2Game:durationSeconds", {
        seconds: String(GB)
      });
      const YB = Math.round(GB / 60);
      if (YB < 60) return BB("buildAFactory2Game:durationMinutes", {
        minutes: String(YB)
      });
      const DB = String(Math.floor(YB / 60));
      return YB % 60 === 0 ? BB("buildAFactory2Game:durationWholeHours", {
        hours: DB
      }) : BB("buildAFactory2Game:durationHours", {
        hours: DB,
        minutes: String(YB % 60)
      })
    }
    var ZQ = GB(2693);
    const NQ = "(max-height: 420px), (max-width: 650px)";

    function RQ() {
      return (0, ZQ.e)(NQ)
    }
    var WQ = GB(1282);

    function AQ(BB, OB) {
      return null !== BB && BB > OB + 1
    }

    function VQ(BB) {
      const OB = 100 * BB;
      return String(OB <= 0 || OB >= 1 ? Math.round(OB) : Math.max(.1, Math.round(10 * OB) / 10))
    }

    function SQ(BB) {
      let {
        item: OB,
        amount: GB
      } = BB;
      return (0, WQ.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: OB,
            amount: 0
          })
        }), GB > 1 && (0, WQ.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", GB]
        })]
      })
    }

    function nQ(BB) {
      let {
        label: OB,
        names: GB
      } = BB;
      const [DB, QB] = (0, YB.useState)(!1), oB = GB.join(" / ");
      return (0, WQ.jsxs)(WQ.Fragment, {
        children: [(0, WQ.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: oB,
          "aria-expanded": DB,
          onClick: () => {
            QB(!DB)
          },
          children: OB
        }), DB && (0, WQ.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: oB
        })]
      })
    }

    function UQ(BB) {
      let {
        tier: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), {
        key: YB,
        params: DB
      } = lB(OB, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), QB = GB(`buildAFactory2Game:${YB}`, DB);
      return (0, WQ.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, WQ.jsx)(fD.b, {
          name: "lock"
        }), QB]
      })
    }
    const fQ = (0, YB.createContext)(null);

    function kQ() {
      const {
        t: BB
      } = (0, UD.H)(), OB = (0, YB.useContext)(fQ);
      return (0, YB.useEffect)((() => null === OB || void 0 === OB ? void 0 : OB()), [OB]), (0, WQ.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: BB("buildAFactory2Game:recipeForQuest"),
        "aria-label": BB("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function dQ(BB) {
      let {
        title: OB,
        count: GB,
        children: DB,
        startOpen: QB = !0
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), [jB, yB] = (0, YB.useState)((() => QB && !RQ())), [JB, MB] = (0, YB.useState)(0), PB = (0, YB.useCallback)((() => (MB((BB => BB + 1)), () => {
        MB((BB => BB - 1))
      })), []);
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2Recipes", {
          Open: jB
        }),
        children: [(0, WQ.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            yB(!jB)
          },
          "aria-expanded": jB,
          children: [oB("buildAFactory2Game:recipesToggle", {
            title: OB,
            count: String(GB)
          }), (0, WQ.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: jB ? "\u25be" : "\u25b8"
          })]
        }), jB && (0, WQ.jsxs)(fQ.Provider, {
          value: PB,
          children: [(0, WQ.jsx)("ul", {
            className: "Baf2RecipeList",
            children: DB
          }), JB > 0 && (0, WQ.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, WQ.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), oB("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const KQ = "buildAFactory2Game:",
      uQ = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const mQ = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      IQ = {
        "Uranium Grit": QB,
        "Raw Uranium": QB
      };

    function FQ(BB) {
      var OB;
      return null !== (OB = IQ[BB]) && void 0 !== OB ? OB : Math.max(vB(BB), mQ[BB] ? vB(mQ[BB]) : 1, function(BB) {
        const OB = DB.findIndex((OB => OB.cost.some((OB => OB.item === BB))));
        return OB > QB ? OB : 1
      }(BB))
    }

    function iQ(BB, OB) {
      return LQ(OB) ? FQ(OB) : function(BB) {
        if (uQ.has(BB)) return 1;
        const OB = DB.findIndex((OB => OB.newDeposits.some((OB => {
          let {
            block: GB
          } = OB;
          return GB === BB
        }))));
        return OB < 0 ? 1 : OB + 1
      }(BB)
    }

    function LQ(BB) {
      return BB in IQ || PB(FQ(BB)) > 0
    }

    function gQ(BB, OB) {
      return sO(BB, {
        coupled: !1,
        taught: null,
        atomic: jB() && OB >= 11
      }).recipes
    }

    function rQ(BB, OB) {
      const GB = zB(BB, OB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PB(BB) > 0);
      return "open" === GB || "locked" === GB
    }

    function XQ(BB, OB) {
      return BB.map(((BB, GB) => ({
        value: BB,
        idx: GB,
        tier: OB(BB)
      }))).sort(((BB, OB) => BB.tier - OB.tier || BB.idx - OB.idx)).map((BB => {
        let {
          value: OB
        } = BB;
        return OB
      }))
    }

    function wQ(BB, OB, GB) {
      const YB = zB(BB, OB);
      if ("hidden" === YB || "open" === YB) return null;
      if ("teaser" === YB) return {
        tag: {
          translationKey: `${KQ}${GB?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${KQ}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const DB = lB(BB, {
          tier: GB ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        QB = lB(BB, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${KQ}${DB.key}`,
          params: DB.params
        },
        reason: {
          translationKey: `${KQ}${QB.key}`,
          params: QB.params
        }
      }
    }

    function EQ(BB) {
      return !oQ(BB)
    }

    function cQ(BB) {
      let {
        seconds: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)();
      return (0, WQ.jsx)(dQ, {
        title: GB("buildAFactory2Game:recipesCuts", {
          seconds: OB
        }),
        count: 1,
        children: (0, WQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, WQ.jsx)(SQ, {
            item: "Maple Sapling",
            amount: 1
          }), (0, WQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, WQ.jsx)(SQ, {
            item: "Maple Log",
            amount: 1
          }), (0, WQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: GB("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function hQ(BB) {
      let {
        fertilised: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)();
      return (0, WQ.jsxs)(dQ, {
        title: GB("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, WQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, WQ.jsx)(SQ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, WQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, WQ.jsx)(SQ, {
            item: "Wheat",
            amount: 1
          }), (0, WQ.jsx)(SQ, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, WQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: GB("buildAFactory2Game:recipeField")
          })]
        }), (0, WQ.jsxs)("li", {
          className: AD()("Baf2Recipe", {
            InUse: OB
          }),
          children: [(0, WQ.jsx)(SQ, {
            item: "Fertiliser",
            amount: 1
          }), (0, WQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: GB("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function aQ(BB) {
      let {
        tier: OB,
        seconds: GB
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = function(BB) {
        return BB >= 5 ? SO : VO
      }(OB);
      return (0, WQ.jsx)(dQ, {
        title: YB("buildAFactory2Game:recipesBringsUp", {
          seconds: GB
        }),
        count: DB.length,
        children: DB.map((BB => {
          let {
            item: OB,
            chance: GB
          } = BB;
          return (0, WQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, WQ.jsx)(SQ, {
              item: OB,
              amount: 1
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, xD.g)(YB, OB)
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: YB("buildAFactory2Game:recipeChance", {
                percent: VQ(GB)
              })
            })]
          }, OB)
        }))
      })
    }

    function eQ(BB) {
      let {
        tier: OB,
        seconds: GB,
        noSeeds: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), QB = sD(), oB = JQ(OB, YB ? EQ : void 0), jB = YB && JQ(OB).length > oB.length, yB = QQ(OB);
      return (0, WQ.jsxs)(dQ, {
        title: DB("buildAFactory2Game:recipesRecycles", {
          seconds: GB
        }),
        count: oB.length,
        children: [oB.map((BB => {
          let {
            find: OB,
            chance: GB
          } = BB;
          return (0, WQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [QB.has(OB.item) && (0, WQ.jsx)(kQ, {}), (0, WQ.jsx)(SQ, {
              item: OB.item,
              amount: OB.amount
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, xD.g)(DB, OB.item)
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: DB("buildAFactory2Game:recipeChance", {
                percent: VQ(GB)
              })
            })]
          }, OB.item)
        })), jB && (0, WQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: DB("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), yB && (0, WQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WQ.jsx)("span", {
            className: "Baf2RecipeName",
            children: DB("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function TQ(BB) {
      let {
        tier: OB,
        seconds: GB
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = Object.entries(OQ).filter((BB => {
        let [, {
          item: GB
        }] = BB;
        return rQ(FQ(GB), OB, LQ(GB))
      }));
      return (0, WQ.jsx)(dQ, {
        title: YB("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: GB
        }),
        count: DB.length,
        children: DB.map((BB => {
          let [OB, {
            item: GB,
            amount: DB
          }] = BB;
          return (0, WQ.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, WQ.jsx)(SQ, {
              item: OB,
              amount: 1
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, WQ.jsx)(SQ, {
              item: GB,
              amount: DB
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, xD.g)(YB, GB)
            })]
          }, OB)
        }))
      })
    }

    function bQ(BB) {
      let {
        tier: OB,
        seconds: GB
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = sD(), QB = XQ(Object.entries(oG).filter((BB => {
        let [GB, YB] = BB;
        return rQ(iQ(GB, YB), OB, LQ(YB))
      })), (BB => {
        let [OB, GB] = BB;
        return iQ(OB, GB)
      }));
      return (0, WQ.jsx)(dQ, {
        title: YB("buildAFactory2Game:recipesDigs", {
          seconds: GB
        }),
        count: QB.length,
        children: QB.map((BB => {
          let [GB, QB] = BB;
          const oB = iQ(GB, QB),
            jB = oB > OB ? oB : null,
            yB = jG[GB],
            JB = null === jB && DB.has(QB);
          return (0, WQ.jsxs)("li", {
            className: AD()("Baf2Recipe", {
              Locked: null !== jB,
              Far: AQ(jB, OB)
            }),
            children: [JB && (0, WQ.jsx)(kQ, {}), (0, WQ.jsx)(SQ, {
              item: GB,
              amount: 1
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, WQ.jsx)(SQ, {
              item: QB,
              amount: 1
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, xD.g)(YB, QB)
            }), void 0 !== yB && (0, WQ.jsx)("span", {
              className: "Baf2RecipeMore",
              children: YB("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / yB)
              })
            }), null !== jB && (0, WQ.jsx)(UQ, {
              tier: jB
            })]
          }, GB)
        }))
      })
    }

    function CQ(BB) {
      var OB;
      let {
        def: GB,
        seconds: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)();
      return (0, WQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, WQ.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (OB = GB.fuels) && void 0 !== OB ? OB : []).map((BB => (0, WQ.jsx)(SQ, {
            item: BB,
            amount: 1
          }, BB))), (0, WQ.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, WQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, WQ.jsx)(fD.b, {
              name: "bolt"
            }), DB("buildAFactory2Game:recipePower", {
              power: sB(GB.powerMade),
              seconds: YB
            })]
          })]
        })
      })
    }

    function HQ(BB) {
      let {
        def: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)();
      return (0, WQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, WQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, WQ.jsx)(fD.b, {
              name: "bolt"
            }), GB("buildAFactory2Game:recipeMixer", {
              cryo: zQ((0, xB.L)(OB, OB.cryoMade), "")
            })]
          })
        })
      })
    }

    function vQ(BB) {
      let {
        def: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)();
      return (0, WQ.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, WQ.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, WQ.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, WQ.jsx)(fD.b, {
              name: "bolt"
            }), GB("buildAFactory2Game:recipeCondenser", {
              power: zQ((0, xB.L)(OB, OB.powerPerOp), ""),
              water: zQ((0, xB.L)(OB, OB.fluidMade), "")
            })]
          })
        })
      })
    }

    function sQ(BB) {
      let {
        kind: OB,
        def: GB,
        input: YB,
        tier: DB,
        noSeeds: QB = !1
      } = BB;
      const oB = String(GB.opMs / 1e3);
      return GG(GB) ? (0, WQ.jsx)(cQ, {
        seconds: oB
      }) : GB.field ? (0, WQ.jsx)(hQ, {
        fertilised: null !== YB
      }) : GB.table ? (0, WQ.jsx)(aQ, {
        tier: DB,
        seconds: oB
      }) : GB.recycles ? (0, WQ.jsxs)(WQ.Fragment, {
        children: [(0, WQ.jsx)(eQ, {
          tier: DB,
          seconds: oB,
          noSeeds: QB
        }), (0, WQ.jsx)(TQ, {
          tier: DB,
          seconds: oB
        })]
      }) : OG(GB) ? (0, WQ.jsx)(bQ, {
        tier: DB,
        seconds: oB
      }) : void 0 !== GB.fluidMade ? (0, WQ.jsx)(vQ, {
        def: GB
      }) : void 0 !== GB.cryoMade ? (0, WQ.jsx)(HQ, {
        def: GB
      }) : void 0 !== GB.powerMade ? (0, WQ.jsx)(CQ, {
        def: GB,
        seconds: oB
      }) : (0, WQ.jsx)(xQ, {
        kind: OB,
        input: YB,
        tier: DB,
        seconds: oB
      })
    }

    function xQ(BB) {
      let {
        kind: OB,
        input: GB,
        tier: YB,
        seconds: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)(), oB = sD(), jB = XQ(function(BB) {
        const OB = new Map;
        for (const DB of BB) {
          var GB, YB;
          const BB = [DB.output, DB.outputAmount, DB.inputAmount, null === (GB = DB.bonus) || void 0 === GB ? void 0 : GB.item, null === (YB = DB.bonus) || void 0 === YB ? void 0 : YB.chance].join("|"),
            QB = OB.get(BB);
          QB ? QB.inputs.push(DB.input) : OB.set(BB, {
            inputs: [DB.input],
            inputAmount: DB.inputAmount,
            output: DB.output,
            outputAmount: DB.outputAmount,
            bonus: DB.bonus
          })
        }
        return [...OB.values()]
      }(gQ(OB, YB).filter(MG)), (BB => FQ(BB.output))).filter((BB => rQ(FQ(BB.output), YB, LQ(BB.output))));
      return (0, WQ.jsx)(dQ, {
        title: QB("buildAFactory2Game:recipesEach", {
          seconds: DB
        }),
        count: jB.length,
        children: jB.map((BB => {
          const OB = null !== GB && BB.inputs.includes(GB),
            DB = BB.inputs.length > 3 ? [OB ? GB : BB.inputs[0]] : BB.inputs,
            jB = FQ(BB.output) > YB ? FQ(BB.output) : null,
            yB = null === jB && oB.has(BB.output);
          return (0, WQ.jsxs)("li", {
            className: AD()("Baf2Recipe", {
              InUse: OB,
              Locked: null !== jB,
              Far: AQ(jB, YB)
            }),
            children: [yB && (0, WQ.jsx)(kQ, {}), DB.map(((OB, GB) => (0, WQ.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [GB > 0 && (0, WQ.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, WQ.jsx)(SQ, {
                item: OB,
                amount: BB.inputAmount
              })]
            }, OB))), DB.length < BB.inputs.length && (0, WQ.jsx)(nQ, {
              label: QB("buildAFactory2Game:recipeMore", {
                count: String(BB.inputs.length - DB.length)
              }),
              names: BB.inputs.filter((BB => !DB.includes(BB))).map((BB => (0, xD.g)(QB, BB)))
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, WQ.jsx)(SQ, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, xD.g)(QB, BB.output)
            }), BB.bonus && (0, WQ.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [QB("buildAFactory2Game:recipeBonus", {
                percent: VQ(BB.bonus.chance)
              }), (0, WQ.jsx)(SQ, {
                item: BB.bonus.item,
                amount: 1
              })]
            }), null !== jB && (0, WQ.jsx)(UQ, {
              tier: jB
            })]
          }, `${BB.output}|${BB.inputs[0]}`)
        }))
      })
    }

    function tQ(BB) {
      let {
        taught: OB,
        tier: GB
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = sD(), QB = XQ(Object.values(HO), (BB => BB.tier)).filter((BB => rQ(BB.tier, GB)));
      return (0, WQ.jsx)(dQ, {
        title: YB("buildAFactory2Game:benchCanMake"),
        count: QB.length,
        startOpen: !1,
        children: QB.map((BB => {
          const QB = BB.tier > GB,
            oB = !QB && DB.has(BB.output);
          return (0, WQ.jsxs)("li", {
            className: AD()("Baf2Recipe", {
              InUse: BB.output === OB,
              Locked: QB,
              Far: AQ(QB ? BB.tier : null, GB)
            }),
            children: [oB && (0, WQ.jsx)(kQ, {}), (0, WQ.jsx)(SQ, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, xD.g)(YB, BB.output)
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), BB.inputs.map((BB => (0, WQ.jsx)(SQ, {
              item: BB.item,
              amount: BB.amount
            }, BB.item))), QB && (0, WQ.jsx)(UQ, {
              tier: BB.tier
            })]
          }, BB.output)
        }))
      })
    }
    var Bo, Oo, Go, Yo, Do;
    const Qo = iO.Generator,
      oo = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      jo = 1e3 * (null !== (Bo = Qo.powerMade) && void 0 !== Bo ? Bo : 0) / Qo.opMs,
      yo = Math.min(...(null !== (Oo = Qo.fuels) && void 0 !== Oo ? Oo : []).map((BB => QG[BB]))) / 1e3,
      Jo = iO["Volt Engine"],
      Mo = 1e3 * (null !== (Go = Jo.powerMade) && void 0 !== Go ? Go : 0) / Jo.opMs,
      Po = QG[null !== (Yo = null === (Do = Jo.fuels) || void 0 === Do ? void 0 : Do[0]) && void 0 !== Yo ? Yo : ""] / 1e3;

    function zo(BB) {
      let {
        item: OB,
        label: GB,
        value: YB,
        note: DB,
        dim: QB
      } = BB;
      return (0, WQ.jsxs)("li", {
        className: AD()("Baf2PowerRow", {
          Dim: QB
        }),
        children: [(0, WQ.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: OB,
            amount: 0
          })
        }), (0, WQ.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, WQ.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: GB
          }), DB && (0, WQ.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: DB
          })]
        }), (0, WQ.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: YB
        })]
      })
    }

    function po(BB, OB, GB, YB) {
      var DB;
      const QB = void 0 === YB ? iO[BB] : function(BB, OB) {
          if (null === OB) return BB;
          let GB = bB.get(OB);
          return GB || (GB = {
            ...BB,
            powerPerOp: TB(BB, OB),
            farmMob: OB
          }, bB.set(OB, GB)), GB
        }(iO[BB], YB),
        oB = OB && QB.couplable ? hO(QB, GB) : QB;
      return 1e3 * (null !== (DB = oB.powerPerOp) && void 0 !== DB ? DB : 0) / oB.opMs
    }

    function qo(BB) {
      var OB, GB, YB, DB, QB, oB, jB, yB;
      let {
        message: JB
      } = BB;
      const {
        t: MB
      } = (0, UD.H)(), PB = (BB, OB) => MB("buildAFactory2Game:powerPerSecond", {
        rate: zQ(BB, OB)
      }), [zB, lB] = JB.baf2PowerGenerators, pB = JB.baf2PowerGeneratorFuel, qB = JB.baf2PowerSunPanels, ZB = null !== (OB = JB.baf2PowerSunShare) && void 0 !== OB ? OB : 1, NB = JB.baf2PowerVaults, RB = JB.baf2PowerUsers, [WB, AB] = null !== (GB = JB.baf2PowerEngines) && void 0 !== GB ? GB : [0, 0], VB = null !== (YB = JB.baf2PowerEngineCells) && void 0 !== YB ? YB : 0, SB = null !== (DB = JB.baf2PowerPads) && void 0 !== DB ? DB : 0, nB = null !== (QB = JB.baf2PowerCharge) && void 0 !== QB ? QB : 0, [UB, fB] = null !== (oB = JB.baf2PowerReactors) && void 0 !== oB ? oB : [0, 0], [kB, dB] = null !== (jB = JB.baf2PowerBatteries) && void 0 !== jB ? jB : [0, 0];
      let KB = MB("buildAFactory2Game:powerEngineCells", {
        amount: String(VB)
      });
      VB > 0 && AB > 0 && (KB = MB("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(VB),
        time: qQ(MB, VB * Po / AB)
      }));
      let uB = MB("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(pB)
      });
      pB > 0 && lB > 0 && (uB = MB("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(pB),
        time: qQ(MB, pB * yo / lB)
      }));
      const mB = zB + WB + qB + UB;
      return (0, WQ.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, WQ.jsxs)("section", {
          children: [(0, WQ.jsxs)("h3", {
            children: [MB("buildAFactory2Game:powerMaking"), (0, WQ.jsx)("span", {
              children: PB(JB.baf2PowerMadePerS, "+")
            })]
          }), (0, WQ.jsxs)("ul", {
            children: [0 === mB && (0, WQ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: MB("buildAFactory2Game:powerNoMakers")
            }), zB > 0 && (0, WQ.jsx)(zo, {
              item: "Generator",
              label: `${(0,xD.g)(MB,"Generator")} \xd7${zB}`,
              note: `${MB("buildAFactory2Game:powerRunning",{amount:String(lB)})} \xb7 ${uB}`,
              value: PB(lB * jo, "+"),
              dim: 0 === lB
            }), WB > 0 && (0, WQ.jsx)(zo, {
              item: "Volt Engine",
              label: `${(0,xD.g)(MB,"Volt Engine")} \xd7${WB}`,
              note: `${MB("buildAFactory2Game:powerRunning",{amount:String(AB)})} \xb7 ${KB}`,
              value: PB(AB * Mo, "+"),
              dim: 0 === AB
            }), qB > 0 && (0, WQ.jsx)(zo, {
              item: "Solar Panel",
              label: `${(0,xD.g)(MB,"Solar Panel")} \xd7${qB}`,
              note: MB(ZB < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: PB(4 * qB * ZB, "+")
            }), UB > 0 && (0, WQ.jsx)(zo, {
              item: "Reactor Frame",
              label: `${MB("buildAFactory2Game:powerReactors")} \xd7${UB}`,
              note: MB("buildAFactory2Game:powerRunning", {
                amount: String(fB)
              }),
              value: PB(null !== (yB = JB.baf2PowerReactorPerS) && void 0 !== yB ? yB : 0, "+"),
              dim: 0 === fB
            })]
          })]
        }), (0, WQ.jsxs)("section", {
          children: [(0, WQ.jsxs)("h3", {
            children: [MB("buildAFactory2Game:powerStorage"), (0, WQ.jsx)("span", {
              children: sB(JB.baf2PowerCap)
            })]
          }), (NB > 0 || kB > 0) && (0, WQ.jsxs)("ul", {
            children: [NB > 0 && (0, WQ.jsx)(zo, {
              item: "Charge Vault",
              label: `${(0,xD.g)(MB,"Charge Vault")} \xd7${NB}`,
              value: `+${sB(8e3*NB)}`
            }), kB > 0 && (0, WQ.jsx)(zo, {
              item: "Battery Cell",
              label: `${MB("buildAFactory2Game:powerBatteries")} \xd7${kB}`,
              value: `+${sB(dB)}`
            })]
          })]
        }), (0, WQ.jsxs)("section", {
          children: [(0, WQ.jsxs)("h3", {
            children: [MB("buildAFactory2Game:powerUsing"), (0, WQ.jsx)("span", {
              children: PB(JB.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, WQ.jsxs)("ul", {
            children: [0 === RB.length && 0 === SB && 0 === nB && (0, WQ.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: MB("buildAFactory2Game:powerNoUsers")
            }), RB.map((BB => {
              let [OB, GB, YB, DB, QB = 1, oB] = BB, jB = GB ? MB(oo[QB - 1], {
                name: (0, xD.g)(MB, OB)
              }) : (0, xD.g)(MB, OB);
              return void 0 !== oB && (jB = MB("buildAFactory2Game:powerFarmName", {
                name: jB,
                mob: MB(hB(oB))
              })), (0, WQ.jsx)(zo, {
                item: OB,
                label: `${jB} \xd7${YB}`,
                note: MB("buildAFactory2Game:powerRunning", {
                  amount: String(DB)
                }),
                value: DB > 0 ? PB(DB * po(OB, GB, QB, oB), "\u2212") : MB("buildAFactory2Game:powerIdle"),
                dim: 0 === DB
              }, `${OB}|${GB}|${QB}|${oB}`)
            })), SB > 0 && (0, WQ.jsx)(zo, {
              item: "Charging Pad",
              label: `${(0,xD.g)(MB,"Charging Pad")} \xd7${SB}`,
              value: MB("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), nB > 0 && (0, WQ.jsx)(zo, {
              item: "Homestead Core",
              label: MB("buildAFactory2Game:powerCharge"),
              value: PB(nB, "\u2212")
            }), JB.baf2PowerStarved > 0 && (0, WQ.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, WQ.jsx)(fD.b, {
                name: "triangle-exclamation"
              }), MB("buildAFactory2Game:powerStarved", {
                amount: String(JB.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Zo = GB(4946),
      No = GB(1485);
    class Ro {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(BB) {
        this.message = BB;
        for (const OB of this.listeners) OB()
      }
      get() {
        return this.message
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }
    class Wo extends Ro {}

    function Ao(BB, OB) {
      const GB = () => {
          const GB = BB.get();
          if (!GB || !OB) return GB;
          const [YB, DB, QB] = GB.baf2PowerAt;
          return YB === OB[0] && DB === OB[1] && QB === OB[2] ? GB : null
        },
        [DB, QB] = (0, YB.useState)(GB);
      return (0, YB.useEffect)((() => (QB(GB()), BB.subscribe((() => {
        QB(GB())
      })))), [BB, ...null !== OB && void 0 !== OB ? OB : []]), DB
    }

    function Vo(BB) {
      return {
        stored: BB.baf2PowerStored,
        cap: BB.baf2PowerCap,
        madePerS: BB.baf2PowerMadePerS,
        usedPerS: BB.baf2PowerUsedPerS
      }
    }

    function So(BB) {
      let {
        stored: OB,
        cap: GB
      } = BB;
      return (0, WQ.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, WQ.jsx)("div", {
          style: {
            width: `${Math.min(100,100*OB/Math.max(1,GB))}%`
          }
        })
      })
    }

    function no(BB) {
      let {
        figures: OB,
        labelled: GB = !1
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = OB.madePerS - OB.usedPerS, {
        text: QB,
        draining: oB
      } = function(BB, OB) {
        let {
          stored: GB,
          cap: YB,
          madePerS: DB,
          usedPerS: QB
        } = OB;
        const oB = DB - QB;
        return GB >= YB ? {
          text: BB("buildAFactory2Game:powerFull"),
          draining: !1
        } : oB > .05 ? {
          text: BB("buildAFactory2Game:powerFullIn", {
            time: qQ(BB, (YB - GB) / oB)
          }),
          draining: !1
        } : oB < -.05 ? {
          text: BB("buildAFactory2Game:powerEmptyIn", {
            time: qQ(BB, GB / -oB)
          }),
          draining: !0
        } : {
          text: BB("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(YB, OB);
      return (0, WQ.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, WQ.jsx)(So, {
          stored: OB.stored,
          cap: OB.cap
        }), (0, WQ.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, WQ.jsx)("span", {
            children: YB(GB ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: sB(OB.stored),
              cap: sB(OB.cap)
            })
          }), (0, WQ.jsxs)("span", {
            className: AD()("Baf2PowerNet", {
              Draining: oB
            }),
            children: [YB("buildAFactory2Game:powerPerSecond", {
              rate: zQ(Math.abs(DB), DB < 0 ? "\u2212" : "+")
            }), " \xb7 ", QB]
          })]
        })]
      })
    }

    function Uo(BB) {
      let {
        stored: OB,
        cap: GB,
        rates: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)();
      return YB ? (0, WQ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, WQ.jsx)(no, {
          figures: {
            stored: OB,
            cap: GB,
            madePerS: YB[0],
            usedPerS: YB[1]
          },
          labelled: !0
        })
      }) : (0, WQ.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, WQ.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, WQ.jsx)(So, {
            stored: OB,
            cap: GB
          }), (0, WQ.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, WQ.jsx)("span", {
              children: DB("buildAFactory2Game:powerStoredLabelled", {
                stored: sB(OB),
                cap: sB(GB)
              })
            })
          })]
        })
      })
    }

    function fo(BB) {
      let {
        store: OB,
        close: GB
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = Ao(OB);
      return (0, WQ.jsx)(Zo.d, {
        close: GB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              children: [(0, WQ.jsx)("h2", {
                id: "baf2PowerTitle",
                children: YB("buildAFactory2Game:powerTitle")
              }), (0, WQ.jsx)("p", {
                children: YB("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, WQ.jsx)(No.m, {
              onClick: GB
            })]
          }), DB && (0, WQ.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, WQ.jsx)(no, {
              figures: Vo(DB)
            }), (0, WQ.jsx)(qo, {
              message: DB
            })]
          })]
        })
      })
    }

    function ko(BB) {
      var OB;
      let {
        kind: GB,
        def: DB,
        ZO: QB,
        power: oB,
        stored: jB,
        cap: yB
      } = BB;
      const {
        t: JB
      } = (0, UD.H)(), MB = Ao(oB, QB), [PB, zB] = (0, YB.useState)(!1);
      return (0, WQ.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, WQ.jsx)(sQ, {
          kind: GB,
          def: DB,
          input: null,
          tier: null !== (OB = null === MB || void 0 === MB ? void 0 : MB.baf2PowerTier) && void 0 !== OB ? OB : 1
        }), (0, WQ.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: JB("buildAFactory2Game:powerTitle")
        }), MB && (0, WQ.jsx)(no, {
          figures: Vo(MB)
        }), !MB && (0, WQ.jsx)(Uo, {
          stored: jB,
          cap: yB,
          rates: null
        }), MB && (0, WQ.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            zB(!PB)
          },
          "aria-expanded": PB,
          children: JB(PB ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), MB && PB && (0, WQ.jsx)(qo, {
          message: MB
        })]
      })
    }
    const Ko = 2500,
      uo = 17500,
      mo = `${VB} `;
    const Io = ["plan", "throttle"];

    function Fo(BB) {
      if (BB.startsWith(`${kO} `)) return BB.slice(0, BB.lastIndexOf(" "));
      const OB = BB.split(" ");
      return OB[0] === MO && Io.includes(OB[4]) ? OB.slice(0, 5).join(" ") : null
    }
    class io {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = BB, this.now = OB, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.EQB = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = OB()
      }
      enqueue(BB) {
        this.queue(BB, this.nextTicket());
        const OB = this.EQB + this.pending.length;
        return this.flush(), OB
      }
      track(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = this.nextTicket();
        if (!OB.urgent) return this.queue(BB, GB), this.flush(), GB;
        const {
          supersedes: YB
        } = OB;
        for (let QB = this.pending.length - 1; QB >= this.urgent; QB--) {
          const OB = this.pending[QB];
          (OB.command === BB || null !== YB && void 0 !== YB && YB(OB.command)) && (this.pending.splice(QB, 1), this.markLeft(OB.tickets))
        }
        const DB = this.pending.findIndex((OB => {
          let {
            command: GB
          } = OB;
          return GB === BB
        }));
        return -1 !== DB ? this.pending[DB].tickets.push(GB) : (this.pending.splice(this.urgent, 0, {
          command: BB,
          tickets: [GB]
        }), this.urgent += 1), this.flush(), GB
      }
      leftAt(BB) {
        const OB = this.leftTimes.get(BB);
        return void 0 !== OB ? OB : this.pending.some((OB => {
          let {
            tickets: GB
          } = OB;
          return GB.includes(BB)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let BB = !0;
        return () => {
          BB && (BB = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(BB) {
        var OB;
        return (null === (OB = this.pending.at(-1)) || void 0 === OB ? void 0 : OB.command) === BB
      }
      sent() {
        return this.EQB
      }
      clear() {
        for (const {
            tickets: BB
          }
          of this.pending) this.markLeft(BB);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(BB) {
        const OB = this.now();
        for (const GB of BB) this.leftTimes.set(GB, OB);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(BB, OB) {
        const GB = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === GB || void 0 === GB ? void 0 : GB.command) === BB) return void(! function(BB) {
          return BB === SB || BB.startsWith(`${AB} `) || BB.startsWith(`${wB} `)
        }(BB) ? GB.tickets.push(OB) : (this.pending.pop(), this.markLeft([...GB.tickets, OB])));
        const YB = void 0 === GB ? null : JO(GB.command, BB);
        if (null !== YB && void 0 !== GB) return GB.command = YB, void GB.tickets.push(OB);
        const DB = Fo(BB);
        if (null !== DB && void 0 !== GB && Fo(GB.command) === DB) return GB.command = BB, void GB.tickets.push(OB);
        if (null !== GB && void 0 !== GB && GB.command.startsWith(mo) && BB.startsWith(mo)) {
          const YB = BB.slice(mo.length);
          if (GB.command.slice(mo.length).split(",").includes(YB)) return void GB.tickets.push(OB);
          const DB = `${GB.command},${YB}`;
          if (DB.length <= 119) return GB.command = DB, void GB.tickets.push(OB)
        }
        this.pending.push({
          command: BB,
          tickets: [OB]
        })
      }
      flush() {
        const BB = this.now();
        for (this.tokens = Math.min(5, this.tokens + (BB - this.refilledAt) / Ko), this.refilledAt = BB; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.EQB += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: BB,
            tickets: OB
          } = this.pending.shift();
          this.markLeft(OB), this.send(BB)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Ko)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Lo {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new io(BB, OB)
      }
      send(BB) {
        return this.queue.enqueue(BB)
      }
      sent() {
        return this.queue.sent()
      }
      track(BB, OB) {
        return this.queue.track(BB, OB)
      }
      leftAt(BB) {
        return this.queue.leftAt(BB)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(BB) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = OB, this.send(BB), this.islandEdits.count
      }
      syncIslandEdits(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: GB
        } = this, YB = OB - GB.lastAtMs < uo;
        GB.count = YB ? Math.max(GB.count, BB) : BB
      }
      clear() {
        this.queue.clear()
      }
    }
    const go = (0, YB.createContext)(null);

    function ro() {
      const BB = (0, YB.useContext)(go);
      if (!BB) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return BB
    }

    function Xo(BB, OB) {
      return null !== OB && void 0 !== OB ? OB : 1 === BB
    }

    function wo(BB, OB) {
      return BB.every((BB => {
        var GB;
        let [YB, , DB] = BB;
        return !Xo(DB, null === (GB = OB.get(YB)) || void 0 === GB ? void 0 : GB.GP)
      }))
    }

    function Eo(BB, OB, GB) {
      if (0 === BB.size) return BB;
      const YB = new Map(BB);
      for (const [DB, QB] of BB) {
        const BB = OB.find((BB => {
          let [OB] = BB;
          return OB === DB
        }));
        (!BB || QB.GP === (1 === BB[2]) || QB.atMs < GB) && YB.delete(DB)
      }
      return YB
    }

    function co(BB) {
      var OB;
      let {
        ZO: GB,
        input: DB,
        drops: QB,
        seconds: oB
      } = BB;
      const {
        t: jB
      } = (0, UD.H)(), yB = ro(), [JB, MB] = (0, YB.useState)(new Map);
      (0, YB.useEffect)((() => {
        QB && MB((BB => Eo(BB, QB, Date.now() - uo)))
      }), [QB]), (0, YB.useEffect)((() => {
        const BB = function(BB, OB) {
          let GB = null;
          for (const {
              atMs: YB
            }
            of BB.values()) GB = null === GB ? YB : Math.min(GB, YB);
          return null === GB ? null : GB + OB
        }(JB, uo);
        if (null === BB || !QB) return;
        const OB = setTimeout((() => {
          MB((BB => Eo(BB, QB, Date.now() - uo)))
        }), Math.max(0, BB - Date.now()) + 1);
        return () => {
          clearTimeout(OB)
        }
      }), [JB, QB]);
      const PB = aB(DB),
        zB = null !== PB && null !== QB && wo(QB, JB),
        lB = function(BB, OB, GB) {
          return null === BB || null === OB || wo(OB, GB) ? 0 : XB[gB[BB]]
        }(PB, QB, JB);
      return (0, WQ.jsxs)(dQ, {
        title: jB("buildAFactory2Game:farmDropsTitle", {
          seconds: oB
        }),
        count: null !== (OB = null === QB || void 0 === QB ? void 0 : QB.length) && void 0 !== OB ? OB : 0,
        children: [lB > 0 && (0, WQ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: jB("buildAFactory2Game:farmDropsPower", {
            power: String(lB)
          })
        }), (null === PB || !QB) && (0, WQ.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: jB("buildAFactory2Game:farmDropsEmpty")
        }), zB && (0, WQ.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: jB("buildAFactory2Game:farmDropsAllVoided")
        }), null !== PB && (null === QB || void 0 === QB ? void 0 : QB.map((BB => {
          var OB;
          let [YB, DB, QB] = BB;
          const oB = DB < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            PB = Xo(QB, null === (OB = JB.get(YB)) || void 0 === OB ? void 0 : OB.GP);
          return (0, WQ.jsxs)("li", {
            className: AD()("Baf2Recipe Baf2FarmDrop", {
              Voided: !PB
            }),
            children: [(0, WQ.jsx)(SQ, {
              item: YB,
              amount: 1
            }), (0, WQ.jsx)("span", {
              className: "Baf2RecipeName",
              children: (0, xD.g)(jB, YB)
            }), (0, WQ.jsx)("span", {
              className: "Baf2FarmRate",
              children: jB(oB, {
                amount: String(DB)
              })
            }), (0, WQ.jsx)("button", {
              type: "button",
              className: AD()("Baf2FarmToggle SmallTextBold", {
                Kept: PB
              }),
              "aria-pressed": PB,
              onClick: () => {
                MB(new Map(JB).set(YB, {
                  GP: !PB,
                  atMs: Date.now()
                })), yB.send(function(BB, OB, GB, YB) {
                  return `${wB} ${BB} ${OB} ${GB} ${YB}`
                }(GB[0], GB[1], GB[2], YB))
              },
              children: jB(PB ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, YB)
        })))]
      })
    }
    var ho;
    const ao = String(null !== (ho = iO.Synthesizer.waterPerOp) && void 0 !== ho ? ho : 0);

    function eo(BB) {
      let {
        ZO: OB,
        taught: GB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), QB = ro(), [oB, jB] = (0, YB.useState)(null);
      (0, YB.useEffect)((() => {
        null !== oB && GB === oB && jB(null)
      }), [oB, GB]);
      const yB = null !== oB && void 0 !== oB ? oB : GB;
      let JB = DB("buildAFactory2Game:synthPick");
      return null !== yB && (JB = DB("buildAFactory2Game:synthGrows", {
        name: (0, xD.g)(DB, yB),
        input: (0, xD.g)(DB, nO),
        water: ao
      })), (0, WQ.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, WQ.jsx)("div", {
          className: AD()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === yB
          }),
          children: JB
        }), (0, WQ.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: UO.map(((BB, GB) => {
            const YB = (0, xD.g)(DB, BB),
              oB = BB === yB;
            return (0, WQ.jsx)("li", {
              children: (0, WQ.jsx)("button", {
                type: "button",
                className: AD()("Baf2SynthTile", {
                  Selected: oB
                }),
                title: YB,
                "aria-label": YB,
                "aria-pressed": oB,
                onClick: () => {
                  oB || (jB(BB), QB.send(`${kO} ${OB[0]} ${OB[1]} ${OB[2]} ${GB}`))
                },
                children: (0, WQ.jsx)(kD.c, {
                  itemName: BB,
                  amount: 0
                })
              })
            }, BB)
          }))
        })]
      })
    }
    const To = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function bo(BB) {
      let {
        kind: OB,
        tier: GB,
        coupled: YB,
        level: DB,
        slot: QB
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), yB = vB(gO);
      if (!YB && null !== GB && GB < yB) return (0, WQ.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, WQ.jsx)(fD.b, {
            name: "lock"
          })
        }), (0, WQ.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: oB("buildAFactory2Game:upgradeLocked")
        }), (0, WQ.jsx)("span", {
          className: "Baf2TierTag",
          children: oB("buildAFactory2Game:tierTag", {
            tier: String(yB)
          })
        })]
      });
      const JB = function(BB, OB) {
          if (jB() && "Crusher" !== BB && null !== OB) {
            if (Co(XO, OB)) return {
              item: XO,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Co(rO, OB)) return {
              item: rO,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: gO,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(OB, GB),
        MB = oB(YB ? To[DB - 1] : JB.emptyKey),
        PB = null !== GB ? function(BB, OB, GB, YB) {
          if (!jB() || !GB || "Crusher" === BB || OB < 10) return null;
          const DB = vB(XO);
          if (YB < 3 && DB > 1 && (2 === YB || OB >= DB)) return {
            tier: DB,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const QB = vB(rO);
          if (1 === YB && QB > 1) return {
            tier: QB,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(OB, GB, YB, DB) : null;
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2UpgradeSocket", {
          Fitted: YB
        }),
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [YB && QB, !YB && (0, WQ.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, WQ.jsx)(kD.c, {
              itemName: JB.item,
              amount: 0
            })
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, WQ.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: oB("buildAFactory2Game:upgradeTitle")
          }), (0, WQ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: MB
          }), YB && DB >= 2 && "Crusher" === OB && (0, WQ.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: oB("buildAFactory2Game:couplerCrusherHint")
          }), PB && null !== GB && GB < PB.tier && (0, WQ.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, WQ.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, WQ.jsx)(fD.b, {
                name: "lock"
              })
            }), oB(PB.lockedKey), (0, WQ.jsx)("span", {
              className: "Baf2TierTag",
              children: oB("buildAFactory2Game:tierTag", {
                tier: String(PB.tier)
              })
            })]
          }), PB && null !== GB && GB >= PB.tier && (0, WQ.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: oB(PB.nextKey)
          })]
        })]
      })
    }

    function Co(BB, OB) {
      const GB = vB(BB);
      return GB > 1 && OB >= GB
    }
    var Ho = GB(37723);
    const vo = (0, xB.L)(iO.Condenser, iO.Condenser.fluidMade),
      so = .05;
    class xo extends Ro {}

    function to(BB) {
      return zQ(BB, "")
    }

    function Bj(BB, OB, GB) {
      return BB(OB ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: GB
      })
    }

    function Oj(BB, OB, GB, YB) {
      return GB <= so && YB <= so ? null : YB <= so || GB <= so ? Bj(BB, OB, YB <= so ? zQ(GB, "+") : zQ(YB, "\u2212")) : BB(OB ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: to(GB),
        used: to(YB)
      })
    }

    function Gj(BB, OB) {
      return Math.min(100, 100 * BB / Math.max(1, OB))
    }

    function Yj(BB) {
      let {
        stored: OB,
        cap: GB,
        netPerS: YB,
        rates: DB,
        cryo: QB
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), jB = function(BB, OB, GB, YB) {
        return GB <= 0 ? BB("buildAFactory2Game:waterNoStorage") : OB >= GB ? BB("buildAFactory2Game:powerFull") : YB > so ? BB("buildAFactory2Game:powerFullIn", {
          time: qQ(BB, (GB - OB) / YB)
        }) : YB < -.05 ? OB <= 0 ? BB("buildAFactory2Game:waterEmpty") : BB("buildAFactory2Game:powerEmptyIn", {
          time: qQ(BB, OB / -YB)
        }) : BB("buildAFactory2Game:powerSteady")
      }(oB, OB, GB, YB), yB = GB > 0 && OB < GB && Math.abs(YB) <= so, JB = oB(QB ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), MB = null !== DB ? `${DB} \xb7 ${jB}` : yB ? JB : `${JB} \xb7 ${jB}`;
      return (0, WQ.jsxs)(WQ.Fragment, {
        children: [(0, WQ.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, WQ.jsx)("div", {
            style: {
              width: `${Gj(OB,GB)}%`
            }
          })
        }), (0, WQ.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, WQ.jsx)("span", {
            children: GB > 0 && oB("buildAFactory2Game:powerStored", {
              stored: (0, xB.W)(OB),
              cap: (0, xB.W)(GB)
            })
          }), (0, WQ.jsx)("span", {
            className: AD()("Baf2WaterNet", {
              Draining: YB < -.05
            }),
            children: MB
          })]
        })]
      })
    }

    function Dj(BB) {
      let {
        water: OB,
        at: GB,
        side: YB = null
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), QB = ro(), [oB, jB, yB] = OB;
      return (0, WQ.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, WQ.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: DB(null === YB ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${YB}`)
          }), (0, WQ.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              QB.send(`${xB.F} ${GB[0]} ${GB[1]} ${GB[2]}${"cryoOut"===YB?" cryo":""}`)
            },
            children: DB("buildAFactory2Game:waterDetails")
          })]
        }), (0, WQ.jsx)(Yj, {
          stored: oB,
          cap: jB,
          netPerS: yB,
          rates: Bj(DB, "cryoOut" === YB, zQ(Math.abs(yB), yB < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === YB
        })]
      })
    }

    function Qj(BB, OB) {
      var GB, YB, DB;
      const QB = !0 === OB.baf2WaterCryo,
        oB = null !== (GB = null === (YB = OB.baf2WaterMakers.find((BB => BB[0] === (QB ? xB.b : "Condenser")))) || void 0 === YB ? void 0 : YB[1]) && void 0 !== GB ? GB : 0,
        jB = [],
        yB = (OB, GB, YB) => {
          OB > 0 && jB.push(BB(1 === OB ? GB : YB, {
            count: String(OB)
          }))
        };
      return QB ? yB(oB, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : yB(oB, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), yB(null !== (DB = OB.baf2WaterPipes) && void 0 !== DB ? DB : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), yB(OB.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), jB.join(" \xb7 ")
    }

    function oj(BB, OB) {
      if (!0 === OB.baf2WaterCryo) return function(BB, OB) {
        const GB = iO[xB.b];
        switch (OB.baf2WaterThis) {
          case "pipe":
            return {
              text: BB("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: BB("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var YB;
            const [DB, QB] = null !== (YB = OB.baf2WaterThisRates) && void 0 !== YB ? YB : [(0, xB.L)(GB, GB.cryoMade), (0, xB.L)(GB, GB.powerPerOp)];
            return !0 === OB.baf2WaterDriven ? {
              text: BB("buildAFactory2Game:cryoThisMixerDriven", {
                rate: to(DB)
              }),
              bad: !1
            } : {
              text: BB("buildAFactory2Game:cryoThisMixer", {
                rate: to(DB),
                power: to(QB)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: BB("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(BB, OB);
      const GB = !0 === OB.baf2WaterDriven,
        YB = iO.Condenser;
      switch (OB.baf2WaterThis) {
        case "pipe":
          return {
            text: BB("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: BB("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: BB("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: BB("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: BB("buildAFactory2Game:waterThisTank", {
              tank: (0, xB.W)(xB.u),
              cap: (0, xB.W)(OB.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var DB;
          const [QB, oB] = null !== (DB = OB.baf2WaterThisRates) && void 0 !== DB ? DB : [vo, (0, xB.L)(YB, YB.powerPerOp)];
          return GB ? {
            text: BB("buildAFactory2Game:waterThisCondenserDriven", {
              rate: to(QB)
            }),
            bad: !1
          } : {
            text: BB("buildAFactory2Game:waterThisCondenser", {
              rate: to(QB),
              power: to(oB)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: BB("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function jj(BB, OB) {
      const GB = OB.baf2WaterMakers.some((BB => !0 === BB[5]));
      if (!0 === OB.baf2WaterCryo) {
        const YB = OB.baf2WaterUsedPerS - OB.baf2WaterMadePerS,
          DB = GB || YB <= so ? 0 : (0, xB.J)(YB);
        return 0 === DB ? null : DB > 1 ? BB("buildAFactory2Game:cryoNextMixers", {
          mixers: String(DB)
        }) : BB("buildAFactory2Game:cryoNextOne")
      }
      const YB = GB ? null : function(BB, OB) {
        const GB = OB - BB;
        return GB <= so ? null : Math.ceil(GB / vo)
      }(OB.baf2WaterMadePerS, OB.baf2WaterUsedPerS);
      return null === YB ? null : YB > 1 ? BB("buildAFactory2Game:waterNextCondensers", {
        condensers: String(YB)
      }) : BB("buildAFactory2Game:waterNextOne")
    }

    function yj(BB) {
      let {
        item: OB,
        label: GB,
        note: YB,
        value: DB,
        dim: QB,
        bad: oB
      } = BB;
      return (0, WQ.jsxs)("li", {
        className: AD()("Baf2WaterRow", {
          Dim: QB,
          Bad: oB
        }),
        children: [(0, WQ.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: OB,
            amount: 0
          })
        }), (0, WQ.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, WQ.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: GB
          }), YB && (0, WQ.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: YB
          })]
        }), (0, WQ.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: DB
        })]
      })
    }

    function Jj(BB) {
      return Ho.p[BB] ? BB : "Reactor Port"
    }

    function Mj(BB) {
      let {
        message: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), YB = !0 === OB.baf2WaterCryo, DB = (BB, OB) => Bj(GB, YB, zQ(BB, OB));
      return (0, WQ.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, WQ.jsxs)("section", {
          children: [(0, WQ.jsxs)("h3", {
            children: [GB("buildAFactory2Game:waterMakes"), (0, WQ.jsx)("span", {
              children: DB(OB.baf2WaterMadePerS, "+")
            })]
          }), (0, WQ.jsxs)("ul", {
            children: [0 === OB.baf2WaterMakers.length && (0, WQ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: GB(YB ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), OB.baf2WaterMakers.map((BB => {
              let [OB, YB, QB, oB, jB, yB] = BB;
              const JB = GB("buildAFactory2Game:powerRunning", {
                amount: String(QB)
              });
              let MB = jB > 0 ? GB("buildAFactory2Game:waterMakerPower", {
                running: JB,
                power: to(jB)
              }) : JB;
              return yB && (MB = GB(0 === QB && oB <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, WQ.jsx)(yj, {
                item: OB,
                label: `${(0,xD.g)(GB,OB)} \xd7${YB}`,
                note: MB,
                value: QB > 0 || yB && oB > 0 ? DB(oB, "+") : GB("buildAFactory2Game:powerIdle"),
                dim: 0 === QB && !yB,
                bad: yB
              }, OB)
            }))]
          })]
        }), (0, WQ.jsxs)("section", {
          children: [(0, WQ.jsxs)("h3", {
            children: [GB("buildAFactory2Game:waterUses"), (0, WQ.jsx)("span", {
              children: DB(OB.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, WQ.jsxs)("ul", {
            children: [0 === OB.baf2WaterUsers.length && (0, WQ.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: GB(YB ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), OB.baf2WaterUsers.map((BB => {
              let [OB, YB, QB, oB] = BB;
              const jB = Ho.p[OB] ? (0, xD.g)(GB, OB) : OB;
              return (0, WQ.jsx)(yj, {
                item: Jj(OB),
                label: YB > 1 ? `${jB} \xd7${YB}` : jB,
                note: oB ? GB("buildAFactory2Game:waterPortFirst") : void 0,
                value: QB > 0 ? DB(QB, "\u2212") : GB("buildAFactory2Game:powerIdle"),
                dim: 0 === QB
              }, OB)
            }))]
          })]
        })]
      })
    }

    function Pj(BB) {
      var OB, GB, DB, QB, oB;
      let {
        store: jB,
        close: yB
      } = BB;
      const {
        t: JB
      } = (0, UD.H)(), MB = function(BB) {
        const [OB, GB] = (0, YB.useState)((() => BB.get()));
        return (0, YB.useEffect)((() => (GB(BB.get()), BB.subscribe((() => {
          GB(BB.get())
        })))), [BB]), OB
      }(jB), PB = null !== (OB = null === MB || void 0 === MB ? void 0 : MB.baf2WaterStored) && void 0 !== OB ? OB : 0, zB = null !== (GB = null === MB || void 0 === MB ? void 0 : MB.baf2WaterCap) && void 0 !== GB ? GB : 0, lB = null !== (DB = null === MB || void 0 === MB ? void 0 : MB.baf2WaterMadePerS) && void 0 !== DB ? DB : 0, pB = null !== (QB = null === MB || void 0 === MB ? void 0 : MB.baf2WaterUsedPerS) && void 0 !== QB ? QB : 0, qB = null !== (oB = null === MB || void 0 === MB ? void 0 : MB.baf2WaterNetPerS) && void 0 !== oB ? oB : lB - pB, ZB = MB && oj(JB, MB), NB = MB && jj(JB, MB), RB = !0 === (null === MB || void 0 === MB ? void 0 : MB.baf2WaterCryo);
      return (0, WQ.jsx)(Zo.d, {
        close: yB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== MB && zB <= 0 ? (0, WQ.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, WQ.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, WQ.jsx)(kD.c, {
                  itemName: RB ? pG.g : xB.j,
                  amount: 0
                })
              }), (0, WQ.jsxs)("div", {
                children: [(0, WQ.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: JB(RB ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), MB && (0, WQ.jsx)("p", {
                  children: Qj(JB, MB)
                })]
              })]
            }), (0, WQ.jsx)(No.m, {
              onClick: yB
            })]
          }), MB && ZB && (0, WQ.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, WQ.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, WQ.jsx)(Yj, {
                stored: PB,
                cap: zB,
                netPerS: qB,
                cryo: RB,
                rates: Oj(JB, RB, lB, pB)
              })
            }), (0, WQ.jsx)("div", {
              className: AD()("Baf2WaterThis", {
                Bad: ZB.bad
              }),
              children: ZB.text
            }), MB.baf2WaterDriven && (0, WQ.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, WQ.jsx)(fD.b, {
                name: "bolt"
              }), JB(RB ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), NB && (0, WQ.jsx)("p", {
              className: "Baf2WaterNext",
              children: NB
            }), (0, WQ.jsx)(Mj, {
              message: MB
            })]
          })]
        })
      })
    }
    class zj {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(BB, OB) {
        const GB = this.get(BB);
        GB && null === OB.opLeftMs && null === OB.fuelLeftMs && OB.status === GB.status ? OB = {
          ...OB,
          opLeftMs: GB.opLeftMs,
          fuelLeftMs: GB.fuelLeftMs,
          burning: GB.burning
        } : this.updates++, this.pos = BB, this.view = OB;
        for (const YB of this.listeners) YB()
      }
      get(BB) {
        return null !== this.pos && this.pos[0] === BB[0] && this.pos[1] === BB[1] && this.pos[2] === BB[2] ? this.view : null
      }
      forget(BB) {
        null !== this.get(BB) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }

    function lj(BB, OB, GB, YB) {
      return "noFuel" === OB && YB && !DG(iO[BB]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === OB && !0 === (null === GB || void 0 === GB ? void 0 : GB.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === OB && !0 === (null === GB || void 0 === GB ? void 0 : GB.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === OB && !0 === (null === GB || void 0 === GB ? void 0 : GB.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === OB && !0 === (null === GB || void 0 === GB ? void 0 : GB.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : pj(OB, GB) ? "buildAFactory2Game:machineStatus_noInputShort" : function(BB, OB) {
        const GB = iO[BB];
        if ("noFuel" === OB && void 0 !== GB.fuels) return DG(GB) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (GB.mobFarm && ("noInput" === OB || "badInput" === OB)) return `buildAFactory2Game:machineStatus_${OB}MobFarm`;
        if ("outputFull" === OB && (void 0 !== GB.table || GB.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === OB && bO(GB)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== GB.cryoMade && ("noInput" === OB || "noOutlet" === OB || "fluidFull" === OB)) return `buildAFactory2Game:machineStatus_${OB}Mixer`;
        return `buildAFactory2Game:machineStatus_${OB}`
      }(BB, OB)
    }

    function pj(BB, OB) {
      return "noInput" === BB && null !== OB && void 0 !== OB && OB.input && OB.inputShort ? {
        input: OB.input,
        short: OB.inputShort
      } : null
    }

    function qj(BB) {
      return VD(BB) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== BB.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Zj(BB) {
      const OB = (0, iB.ef)(BB);
      return `Baf2Pane Baf2Pane${OB.charAt(0).toUpperCase()}${OB.slice(1)}`
    }

    function Nj(BB, OB) {
      const [GB, DB] = (0, YB.useState)((() => BB.get(OB)));
      return (0, YB.useEffect)((() => {
        DB(BB.get(OB));
        const GB = BB.subscribe((() => {
          DB(BB.get(OB))
        }));
        return () => {
          GB(), BB.forget(OB)
        }
      }), [BB, ...OB]), GB
    }

    function Rj(BB, OB, GB, YB) {
      const DB = iO[BB],
        QB = OB && DB.couplable ? hO(DB, GB) : DB,
        oB = null !== YB && OG(QB) ? function(BB, OB) {
          var GB;
          return null !== (GB = null !== OB && OG(BB) ? jG[OB] : void 0) && void 0 !== GB ? GB : BB.opMs
        }(QB, yG(YB)) : QB.opMs;
      return oB === QB.opMs ? QB : {
        ...QB,
        opMs: oB
      }
    }

    function Wj(BB) {
      let {
        running: OB,
        opMs: GB,
        opLeftMs: YB,
        updateCount: DB
      } = BB;
      return (0, WQ.jsx)("div", {
        className: AD()("Baf2MachineProgress", {
          Running: OB
        }),
        children: (0, WQ.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: GB / 1e3 + "s",
            animationDelay: null === YB ? void 0 : (YB - GB) / 1e3 + "s"
          }
        }, DB)
      })
    }

    function Aj(BB) {
      let {
        running: OB,
        leftMs: GB,
        periodMs: YB,
        updateCount: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)(), oB = Math.min(Math.max(null !== GB && void 0 !== GB ? GB : 0, 0), YB), jB = OB && oB > 0, yB = QB("buildAFactory2Game:machineBarFuel");
      return (0, WQ.jsx)("div", {
        className: AD()("Baf2FuelBurn", {
          Draining: jB
        }),
        role: "img",
        title: yB,
        "aria-label": yB,
        children: (0, WQ.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: jB ? {
            animationDuration: YB / 1e3 + "s",
            animationDelay: (oB - YB) / 1e3 + "s"
          } : {
            transform: `scaleY(${oB/YB})`
          }
        }, DB)
      })
    }

    function Vj(BB, OB, GB) {
      let [YB, DB] = GB;
      const QB = 1 !== YB ? nD(OB) : null;
      return {
        amount: YB,
        have: DB,
        item: BB(QB || (0, xD.d)(OB))
      }
    }

    function Sj(BB) {
      return OG(BB) ? "buildAFactory2Game:machineBarMining" : GG(BB) ? "buildAFactory2Game:machineBarCutting" : void 0 !== BB.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function nj(BB) {
      var OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB;
      let {
        kind: AB,
        ZO: VB,
        store: SB,
        power: nB,
        renderSlot: UB
      } = BB;
      const {
        t: fB
      } = (0, UD.H)(), kB = Nj(SB, VB), dB = iO[AB], KB = null !== (OB = null === kB || void 0 === kB ? void 0 : kB.coupled) && void 0 !== OB && OB, uB = null !== (GB = null === kB || void 0 === kB ? void 0 : kB.couplerLevel) && void 0 !== GB ? GB : 1, mB = Rj(AB, KB, uB, null !== (YB = null === kB || void 0 === kB || null === (DB = kB.dug) || void 0 === DB ? void 0 : DB.item) && void 0 !== YB ? YB : null), IB = null !== (QB = null === kB || void 0 === kB ? void 0 : kB.status) && void 0 !== QB ? QB : null, FB = null !== (oB = null === kB || void 0 === kB ? void 0 : kB.power) && void 0 !== oB ? oB : null, iB = null !== (jB = null === kB || void 0 === kB ? void 0 : kB.opLeftMs) && void 0 !== jB ? jB : null, LB = null !== (yB = null === kB || void 0 === kB ? void 0 : kB.dug) && void 0 !== yB ? yB : null, gB = null !== LB && OG(dB) ? jG[null !== (JB = yG(LB.item)) && void 0 !== JB ? JB : ""] : void 0, rB = void 0 === gB ? null : 6e4 / gB, XB = null !== (MB = null === kB || void 0 === kB ? void 0 : kB.powerCap) && void 0 !== MB ? MB : 4e3, wB = null !== (PB = null === kB || void 0 === kB ? void 0 : kB.tier) && void 0 !== PB ? PB : null, EB = void 0 !== mB.powerMade, cB = null !== dB.fuelSlot ? UB(dB.fuelSlot) : null, hB = cO(dB), aB = !KB && !0 === (null === kB || void 0 === kB ? void 0 : kB.fuelFed), TB = !KB && !0 === (null === kB || void 0 === kB ? void 0 : kB.fuelFeeds), bB = null !== dB.fuelSlot && !KB, CB = null !== (zB = null === kB || void 0 === kB ? void 0 : kB.fuelLeftMs) && void 0 !== zB ? zB : null, HB = function(BB, OB, GB) {
        var YB;
        const DB = null === OB ? void 0 : QG[OB];
        return Math.max(null !== (YB = null !== DB && void 0 !== DB ? DB : GB) && void 0 !== YB ? YB : 0, BB.opMs)
      }(mB, null !== (lB = null === kB || void 0 === kB ? void 0 : kB.burning) && void 0 !== lB ? lB : null, CB), vB = null !== (pB = null === kB || void 0 === kB ? void 0 : kB.fuelKeep) && void 0 !== pB ? pB : null, sB = null === IB ? null : lj(AB, IB, kB, aB), xB = null === IB ? null : pj(IB, kB);
      return (0, WQ.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, WQ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: fB((0, xD.d)(AB))
          }), LB && (0, WQ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [fB("Tree Cutter" === AB ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, WQ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, WQ.jsx)(kD.c, {
                itemName: LB.item,
                amount: 0
              })
            }), (0, WQ.jsx)(dD.b, {
              text: LB.name
            })]
          }), null !== rB && (0, WQ.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: fB("buildAFactory2Game:machineDigsFixed", {
              perMin: String(rB)
            })
          }), (null === kB || void 0 === kB ? void 0 : kB.field) && (0, WQ.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, WQ.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, WQ.jsx)(kD.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), fB("buildAFactory2Game:machineField", {
              planted: String(kB.field[0]),
              ripe: String(kB.field[1])
            })]
          }), (0, WQ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, WQ.jsxs)("div", {
              className: AD()("Baf2MachineColumn", {
                Baf2Burns: bB
              }),
              children: [null !== mB.inputSlot && (0, WQ.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, WQ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: fB(qj(mB))
                }), UB(mB.inputSlot)]
              }), null !== dB.fuelSlot && !KB && (0, WQ.jsxs)("div", {
                className: AD()("Baf2MachineSlot", {
                  Baf2FuelFed: aB
                }),
                children: [(0, WQ.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [aB && (0, WQ.jsx)(fD.b, {
                    name: "fire"
                  }), fB("buildAFactory2Game:machineFuel")]
                }), (0, WQ.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, WQ.jsx)(Aj, {
                    running: "running" === IB,
                    leftMs: CB,
                    periodMs: HB,
                    updateCount: SB.updateCount
                  }), cB]
                })]
              }), null !== dB.fuelSlot && KB && (0, WQ.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, WQ.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: fB("buildAFactory2Game:machineFuel")
                }), (0, WQ.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: fB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": fB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, WQ.jsx)(fD.b, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, WQ.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, WQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: fB(Sj(mB))
              }), (0, WQ.jsx)(Wj, {
                running: "running" === IB,
                opMs: mB.opMs,
                opLeftMs: iB,
                updateCount: SB.updateCount
              })]
            }), mB.outputSlots.length > 0 && (0, WQ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, WQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: fB("buildAFactory2Game:machineOutput")
              }), (0, WQ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: mB.outputSlots.map((BB => (0, WQ.jsx)("div", {
                  children: UB(BB)
                }, BB)))
              })]
            }), null !== FB && EB && (0, WQ.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, WQ.jsx)("div", {
                style: {
                  height: 100 * FB / XB + "%"
                }
              })
            })]
          }), bB && null !== vB && (0, WQ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, WQ.jsx)(fD.b, {
              name: "arrows-rotate"
            }), fB(GG(mB) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(vB)
            })]
          }), (aB || TB) && (0, WQ.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, WQ.jsx)(fD.b, {
              name: "fire"
            }), fB(aB ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), dB.couplable && (0, WQ.jsx)(bo, {
            kind: AB,
            tier: wB,
            coupled: KB,
            level: uB,
            slot: hB === dB.fuelSlot ? cB : null !== hB ? UB(hB) : null
          }), null !== FB && !EB && !0 === (null === kB || void 0 === kB ? void 0 : kB.reactorPowered) && (0, WQ.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: fB("buildAFactory2Game:machineReactorPowered")
          }), null !== FB && !EB && !0 !== (null === kB || void 0 === kB ? void 0 : kB.reactorPowered) && (0, WQ.jsx)(Uo, {
            stored: FB,
            cap: XB,
            rates: null !== (qB = null === kB || void 0 === kB ? void 0 : kB.powerRates) && void 0 !== qB ? qB : null
          }), (null === kB || void 0 === kB ? void 0 : kB.water) && (0, WQ.jsx)(Dj, {
            water: kB.water,
            at: VB,
            side: kB.cryo ? "waterIn" : null
          }), (null === kB || void 0 === kB ? void 0 : kB.cryo) && (0, WQ.jsx)(Dj, {
            water: kB.cryo,
            at: VB,
            side: "cryoOut"
          }), null !== kB && void 0 !== kB && kB.inertCoupler ? (0, WQ.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: fB("buildAFactory2Game:machineStatus_couplerOff", {
              item: (0, xD.g)(fB, kB.inertCoupler)
            })
          }) : null !== sB && (0, WQ.jsx)("div", {
            className: AD()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== IB
            }),
            children: fB(sB, xB ? Vj(fB, xB.input, xB.short) : void 0)
          })]
        }), (0, WQ.jsxs)("div", {
          className: AD()("Baf2MachineSide", {
            Baf2SynthSide: bO(dB)
          }),
          children: [bO(dB) && (0, WQ.jsx)(eo, {
            ZO: VB,
            taught: null !== (ZB = null === kB || void 0 === kB ? void 0 : kB.taught) && void 0 !== ZB ? ZB : null
          }, VB.join(",")), EB && (0, WQ.jsx)(ko, {
            kind: AB,
            def: mB,
            ZO: VB,
            power: nB,
            stored: null !== FB && void 0 !== FB ? FB : 0,
            cap: XB
          }), eB(dB) && (0, WQ.jsx)(co, {
            ZO: VB,
            input: null !== (NB = null === kB || void 0 === kB ? void 0 : kB.input) && void 0 !== NB ? NB : null,
            drops: null !== (RB = null === kB || void 0 === kB ? void 0 : kB.farm) && void 0 !== RB ? RB : null,
            seconds: String(mB.opMs / 1e3)
          }), !EB && !eB(dB) && !bO(dB) && (0, WQ.jsx)(sQ, {
            kind: AB,
            def: mB,
            input: null !== (WB = null === kB || void 0 === kB ? void 0 : kB.input) && void 0 !== WB ? WB : null,
            tier: null !== wB && void 0 !== wB ? wB : 1,
            noSeeds: !0 === (null === kB || void 0 === kB ? void 0 : kB.noSeeds)
          })]
        })]
      })
    }

    function Uj(BB, OB, GB, YB) {
      var DB;
      const QB = iO[BB],
        oB = [QB.inputSlot, QB.fuelSlot, ...null !== (DB = QB.inputSlots) && void 0 !== DB ? DB : []].filter((BB => null !== BB));
      return {
        render: DB => {
          let {
            ZO: QB,
            renderSlot: oB
          } = DB;
          return (0, WQ.jsx)(go.Provider, {
            value: YB,
            children: (0, WQ.jsx)(nj, {
              kind: BB,
              ZO: QB,
              store: OB,
              power: GB,
              renderSlot: oB
            })
          })
        },
        quickMoveRange: oB.length > 0 ? [Math.min(...oB), Math.max(...oB) + 1] : [0, 0],
        className: Zj(BB)
      }
    }
    const fj = "Assembler";

    function kj(BB) {
      var OB, GB, YB, DB, QB, oB, jB, yB, JB;
      let {
        ZO: MB,
        store: PB,
        renderSlot: zB
      } = BB;
      const {
        t: lB
      } = (0, UD.H)(), pB = Nj(PB, MB), qB = null !== (OB = null === pB || void 0 === pB ? void 0 : pB.tier) && void 0 !== OB ? OB : 1, ZB = null !== (GB = null === pB || void 0 === pB ? void 0 : pB.taught) && void 0 !== GB ? GB : null, NB = sO(fj, {
        coupled: !1,
        taught: ZB
      }), RB = null !== (YB = NB.bench) && void 0 !== YB ? YB : null, WB = null !== (DB = null === pB || void 0 === pB ? void 0 : pB.status) && void 0 !== DB ? DB : null, AB = null !== (QB = null === pB || void 0 === pB ? void 0 : pB.power) && void 0 !== QB ? QB : null, VB = null !== (oB = null === pB || void 0 === pB ? void 0 : pB.powerCap) && void 0 !== oB ? oB : 4e3;
      return (0, WQ.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, WQ.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: lB((0, xD.d)(fj))
          }), RB && (0, WQ.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [lB("buildAFactory2Game:benchMakes"), (0, WQ.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, WQ.jsx)(kD.c, {
                itemName: RB.output,
                amount: 0
              })
            }), (null === pB || void 0 === pB ? void 0 : pB.taughtName) && (0, WQ.jsx)(dD.b, {
              text: pB.taughtName
            }), RB.outputAmount > 1 && (0, WQ.jsxs)("span", {
              children: ["\xd7", RB.outputAmount]
            })]
          }), !RB && (0, WQ.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: lB("buildAFactory2Game:benchTeachHint")
          }), (0, WQ.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, WQ.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (jB = NB.inputSlots) && void 0 !== jB ? jB : []).map(((BB, OB) => {
                const GB = null === RB || void 0 === RB ? void 0 : RB.inputs[OB];
                return (0, WQ.jsxs)("div", {
                  className: AD()("Baf2BenchInput", {
                    Spare: !GB
                  }),
                  children: [(0, WQ.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [zB(BB), GB && (0, WQ.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, WQ.jsx)(kD.c, {
                        itemName: GB.item,
                        amount: 0
                      })
                    })]
                  }), (0, WQ.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: GB ? `\xd7${GB.amount}` : "\xa0"
                  })]
                }, BB)
              }))
            }), (0, WQ.jsx)(Wj, {
              running: "running" === WB,
              opMs: NB.opMs,
              opLeftMs: null !== (yB = null === pB || void 0 === pB ? void 0 : pB.opLeftMs) && void 0 !== yB ? yB : null,
              updateCount: PB.updateCount
            }), (0, WQ.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, WQ.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: lB("buildAFactory2Game:machineOutput")
              }), (0, WQ.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: NB.outputSlots.map((BB => (0, WQ.jsx)("div", {
                  children: zB(BB)
                }, BB)))
              })]
            })]
          }), null !== AB && (0, WQ.jsx)(Uo, {
            stored: AB,
            cap: VB,
            rates: null !== (JB = null === pB || void 0 === pB ? void 0 : pB.powerRates) && void 0 !== JB ? JB : null
          }), null !== WB && (0, WQ.jsx)("div", {
            className: AD()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== WB
            }),
            children: lB(lj(fj, WB, pB, !1))
          }), RB && RB.inputs.length > 1 && (0, WQ.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: lB("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, WQ.jsx)(tQ, {
            taught: ZB,
            tier: qB
          }), RB && (0, WQ.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: lB("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function dj(BB) {
      var OB;
      const GB = null !== (OB = iO[fj].inputSlots) && void 0 !== OB ? OB : [];
      return {
        render: OB => {
          let {
            ZO: GB,
            renderSlot: YB
          } = OB;
          return (0, WQ.jsx)(kj, {
            ZO: GB,
            store: BB,
            renderSlot: YB
          })
        },
        quickMoveRange: [Math.min(...GB), Math.max(...GB) + 1],
        className: Zj(fj)
      }
    }
    var Kj = GB(92),
      uj = GB(1112),
      mj = GB(4642);
    const Ij = 600,
      Fj = .5,
      ij = 4,
      Lj = 1200,
      gj = 140,
      rj = 100,
      Xj = 32,
      wj = 16,
      Ej = 100.5,
      cj = 90,
      hj = 1.5,
      aj = 50;

    function ej(BB) {
      switch (mG(BB)) {
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
    const Tj = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function bj(BB) {
      const OB = Math.ceil(60 * BB / rj);
      return {
        fuel: Math.max(Xj, OB),
        waste: Math.max(wj, OB)
      }
    }

    function Cj(BB, OB, GB) {
      const [YB, DB, QB] = [BB - 2, OB - 2, GB - 2];
      return 2 * (YB * DB + DB * QB + QB * YB) * gj
    }

    function Hj(BB, OB, GB) {
      return Math.max(0, BB - 2) * Math.max(0, OB - 2) * Math.max(0, GB - 2)
    }

    function vj(BB, OB) {
      const [GB, YB, DB] = BB, QB = GB * YB * DB, oB = new Float32Array(QB);
      let jB = 0,
        yB = 0,
        JB = 0,
        MB = 0,
        PB = 0;
      const zB = (BB, QB, oB) => BB < 0 || BB >= GB || QB < 0 || QB >= YB || oB < 0 || oB >= DB ? 0 : OB[(QB * DB + oB) * GB + BB];
      for (let ZB = 0; ZB < YB; ZB++)
        for (let BB = 0; BB < DB; BB++)
          for (let YB = 0; YB < GB; YB++) {
            const QB = (ZB * DB + BB) * GB + YB,
              lB = OB[QB];
            if (1 === lB) {
              jB++;
              let OB = 0;
              for (const [GB, DB, QB] of Tj) {
                const oB = zB(YB + GB, ZB + DB, BB + QB);
                1 !== oB && 2 !== oB || OB++
              }
              oB[QB] = Ij * (1 + Fj * Math.min(OB, ij)), MB += oB[QB]
            } else if (2 === lB) yB++;
            else if (3 === lB) {
              JB++;
              Tj.some((OB => {
                let [GB, DB, QB] = OB;
                return 1 === zB(YB + GB, ZB + DB, BB + QB)
              })) && (PB += Lj)
            }
          }
      const lB = Cj(GB + 2, YB + 2, DB + 2),
        pB = Math.min(MB, PB, lB),
        qB = jB > 0 ? MB * rj / jB : 0;
      return {
        rods: jB,
        graphite: yB,
        channels: JB,
        fuelHeat: MB,
        cooling: PB,
        size: lB,
        max: pB,
        vol: QB,
        powerPerUnit: qB,
        pelletsPerMin: qB > 0 ? pB / qB * 60 : 0,
        waterPerS: pB * xB.q,
        rodHeat: oB
      }
    }
    const sj = 0,
      xj = 1,
      tj = 6,
      By = 7,
      Oy = 8;

    function Gy(BB, OB) {
      const [GB, YB, DB] = BB, QB = new Uint8Array(GB * YB * DB), oB = (BB, QB, oB) => BB < 0 || BB >= GB || QB < 0 || QB >= YB || oB < 0 || oB >= DB ? 0 : OB[(QB * DB + oB) * GB + BB];
      for (let jB = 0; jB < YB; jB++)
        for (let BB = 0; BB < DB; BB++)
          for (let YB = 0; YB < GB; YB++) {
            const yB = (jB * DB + BB) * GB + YB,
              JB = OB[yB];
            if (1 === JB) {
              let OB = 0;
              for (const [GB, DB, QB] of Tj) {
                const yB = oB(YB + GB, jB + DB, BB + QB);
                OB += 1 === yB || 2 === yB ? 1 : 0
              }
              QB[yB] = xj + Math.min(OB, ij)
            } else if (3 === JB) {
              const OB = Tj.some((OB => {
                let [GB, DB, QB] = OB;
                return 1 === oB(YB + GB, jB + DB, BB + QB)
              }));
              QB[yB] = OB ? tj : By
            } else 2 === JB && (QB[yB] = Oy)
          }
      return QB
    }

    function Yy(BB) {
      return BB.fuelHeat <= BB.cooling && BB.fuelHeat <= BB.size ? "fuel" : BB.cooling <= BB.size ? "cooling" : "size"
    }
    const Dy = cj;

    function Qy(BB, OB, GB) {
      return Math.round(BB * OB * GB * 25e3 * (1 + .25 * (Math.min(BB, OB, GB) - 2)))
    }

    function oy(BB) {
      return Math.max(0, Math.min(xB.e, BB))
    }

    function jy(BB, OB, GB) {
      const YB = OB * oy(GB);
      return BB <= 0 ? 0 : YB > 0 ? Math.min(200, 100 * BB / YB) : 200
    }

    function yy(BB, OB) {
      const GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? hj : 1;
      return Math.min(BB.fuelHeat * GB, BB.cooling * oy(OB), BB.size * GB)
    }

    function Jy(BB) {
      return 2 + BB / 10
    }
    const My = "buildAFactory2Game:";

    function Py(BB) {
      var OB;
      return null !== (OB = BB.baf2RxMood) && void 0 !== OB ? OB : function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const GB = [
          ["calm", 50],
          ["warm", Dy],
          ["hot", Ej]
        ];
        for (const [YB, DB] of GB)
          if (BB < DB + (YB === OB ? 3 : 0)) return YB;
        return "alarm"
      }(BB.baf2RxHeat)
    }
    const zy = 120;

    function ly(BB) {
      const OB = BB.baf2RxState;
      if ("running" === OB && BB.baf2RxHeat > Ej) return {
        label: `${My}rxState_tooHot`,
        tone: "bad",
        fix: `${My}rxFix_tooHot`
      };
      switch (OB) {
        case "running":
          return {
            label: `${My}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${My}rxState_idle`, tone: "off", fix: `${My}rxFix_idle`
          };
        case "scram":
          return {
            label: `${My}rxState_scram`, tone: "off", fix: BB.baf2RxHeat < aj ? `${My}rxFix_scramCool` : `${My}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${My}rxState_${OB}`, tone: "off", fix: `${My}rxFix_${OB}`
          };
        case "melted":
          return {
            label: `${My}rxState_melted`, tone: "bad", fix: `${My}rxFix_melted`
          };
        default:
          return {
            label: `${My}rxState_${OB}`, tone: "warn", fix: `${My}rxFix_${OB}`
          }
      }
    }

    function py(BB) {
      const [OB, GB, YB] = BB.baf2RxStats;
      return {
        fuelHeat: OB,
        cooling: GB * (BB.baf2RxCryo ? Math.max(1, oy(BB.baf2RxWater / 100)) : 1),
        size: YB
      }
    }

    function qy(BB) {
      var OB;
      const GB = "idle" === BB.baf2RxState || "running" === BB.baf2RxState && BB.baf2RxHeat <= Ej || "scram" === BB.baf2RxState && BB.baf2RxHeat < aj;
      if (0 === (BB.baf2RxFlags & AO) || !BB.baf2RxFormed || !GB) return null;
      const {
        fuelHeat: YB,
        cooling: DB,
        size: QB
      } = py(BB), oB = Math.min(YB, DB, QB), jB = Yy({
        fuelHeat: YB,
        cooling: DB,
        size: QB
      }), yB = "cooling" === jB && !0 === BB.baf2RxCryoOpen && !BB.baf2RxCryo, JB = null !== (OB = BB.baf2RxCells) && void 0 !== OB ? OB : "", MB = ("fuel" === jB || "cooling" === jB && !0 === BB.baf2RxCryo) && JB.length > 0 && !JB.includes(String(0)), PB = yB ? "Cryo" : "scram" === BB.baf2RxState ? "Off" : "";
      return oB < 12e3 ? {
        key: `${My}rxGrow_${MB?"full":jB}${PB}`,
        amount: oB
      } : null
    }

    function Zy(BB, OB) {
      return BB[0] === OB[0] && BB[1] === OB[1] && BB[2] === OB[2]
    }

    function Ny(BB) {
      return [...BB].sort(((BB, OB) => Number(OB[2] < OB[1]) - Number(BB[2] < BB[1])))
    }

    function Ry(BB, OB) {
      return OB.some((OB => {
        let [GB, YB] = OB;
        return !(YB <= 0) && ["edge", "cap", "wall", "inside"].some((OB => GB === QY(BB, OB)))
      }))
    }

    function Wy(BB, OB, GB) {
      const YB = BB.baf2RxFuel - BB.baf2RxPu > 0 ? GB : 0;
      return {
        full: BB.baf2RxWaste > OB - 3,
        fullInS: YB > 0 ? Math.max(0, OB - BB.baf2RxWaste) / YB : null
      }
    }
    const Ay = {
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

    function Vy(BB) {
      return Sy[BB]
    }
    const Sy = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function ny(BB) {
      let [OB, GB, YB] = BB;
      return Math.ceil(Cj(OB, GB, YB) * xB.q)
    }

    function Uy(BB, OB) {
      return "battery" === BB ? OB[0] * OB[1] * OB[2] : function(BB) {
        let [OB, GB, YB] = BB;
        return OB * GB * YB - Math.max(0, OB - 2) * Math.max(0, GB - 2) * Math.max(0, YB - 2)
      }(OB) - 1
    }

    function fy(BB) {
      const OB = Math.max(0, BB);
      if (OB < 10) return String(Math.round(10 * OB) / 10);
      if (OB < 1e4) return Math.round(OB).toLocaleString("en-US");
      if (OB < 1e6) return `${OB<1e5?(Math.floor(OB/100)/10).toFixed(1):Math.floor(OB/1e3)}k`;
      const GB = OB / 1e6;
      return `${GB<10?(Math.floor(100*GB)/100).toFixed(2):GB<100?(Math.floor(10*GB)/10).toFixed(1):Math.floor(GB)}M`
    }

    function ky(BB) {
      return BB <= 0 ? "0" : BB >= 10 ? String(Math.round(BB)) : BB.toFixed(BB >= 1 ? 1 : 2)
    }

    function dy(BB) {
      const OB = xG(BB, 0),
        GB = xG(BB, CG(BB) - 1);
      return {
        lo: [Math.min(OB[0], GB[0]), Math.min(OB[1], GB[1]), Math.min(OB[2], GB[2])],
        hi: [Math.max(OB[0], GB[0]) + 1, Math.max(OB[1], GB[1]) + 1, Math.max(OB[2], GB[2]) + 1]
      }
    }

    function Ky(BB, OB, GB) {
      const YB = [OB[0] - BB[0], OB[1] - BB[1], OB[2] - BB[2]],
        DB = [(BB[0] + OB[0]) / 2, (BB[1] + OB[1]) / 2, (BB[2] + OB[2]) / 2],
        QB = [];
      for (let oB = 0; oB < 3; oB++) {
        const jB = (oB + 1) % 3,
          yB = (oB + 2) % 3;
        for (const JB of [BB[jB], OB[jB]])
          for (const MB of [BB[yB], OB[yB]]) {
            const BB = [0, 0, 0],
              OB = [GB, GB, GB];
            BB[oB] = DB[oB], OB[oB] = YB[oB] + GB, BB[jB] = JB, BB[yB] = MB, QB.push([BB, OB])
          }
      }
      return QB
    }
    const uy = "buildAFactory2Game:",
      my = [`${uy}colNorth`, `${uy}colEast`, `${uy}colSouth`, `${uy}colWest`];

    function Iy(BB, OB) {
      const [GB, YB, DB] = BB.baf2ColAt;
      return `baf2col ${GB} ${YB} ${DB} ${OB}`
    }

    function Fy(BB) {
      return function(BB) {
        if (!Number.isFinite(BB)) return "";
        const OB = Math.max(1, Math.round(BB));
        if (OB < 60) return `${OB}s`;
        const GB = OB % 60;
        return 0 === GB ? OB / 60 + "m" : `${Math.floor(OB/60)}m ${GB}s`
      }(function(BB) {
        const OB = oY.FOCUS_BY_LASERS[Math.max(0, Math.min(4, BB))];
        return OB > 0 ? oY.NOVA_FOCUS / OB : 1 / 0
      }(BB))
    }

    function iy(BB) {
      const OB = Math.abs(Math.round(BB));
      return OB < 1e3 ? Math.round(BB).toLocaleString("en-US") : OB < 1e6 ? `${OB<1e5?(BB/1e3).toFixed(1).replace(/\.0$/,""):Math.round(BB/1e3)}k` : `${(BB/1e6).toFixed(OB<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Ly(BB, OB, GB) {
      if (zY(OB) >= 0) {
        const OB = function(BB, OB) {
          return BB.find((BB => {
            let {
              focus: GB
            } = BB;
            return GB[0] === OB[0] && GB[2] === OB[2] && (OB[1] === GB[1] || OB[1] === GB[1] - 1)
          }))
        }(BB, GB);
        if (!OB) return null;
        const DB = function(BB) {
          let OB = 0,
            GB = 0;
          for (let YB = 0; YB < 4; YB++) OB += BB.laser[YB] ? 1 : 0, GB += BB.live[YB] ? 1 : 0;
          return {
            lasers: OB,
            live: GB,
            focusPerS: oY.FOCUS_BY_LASERS[GB],
            drawPerS: oY.LASER_DRAW * GB
          }
        }({
          laser: OB.lasers,
          live: OB.live
        });
        if (0 === DB.lasers || "noLasers" === OB.state) return {
          key: `${uy}lookColNoLasers`
        };
        if (0 === DB.live) return {
          key: `${uy}lookColOff_blocked`
        };
        if (!(OB.on && DB.live > 0) && ("running" !== (YB = OB.state) && "slowed" !== YB)) return {
          key: `${uy}lookColOff_${OB.state}`
        };
        if (DB.live < DB.lasers) return {
          key: `${uy}lookColLasersSome`,
          params: {
            lasers: String(DB.lasers),
            live: String(DB.live)
          }
        };
        const QB = OB.open.filter(Boolean).length;
        return QB < 4 ? {
          key: `${uy}lookColLasersSpots`,
          params: {
            live: String(DB.live),
            spots: String(QB),
            time: Fy(DB.live)
          }
        } : {
          key: `${uy}lookColLasers`,
          params: {
            live: String(DB.live),
            time: Fy(DB.live)
          }
        }
      }
      var YB;
      if (!lY(OB)) return null;
      const DB = function(BB, OB) {
        for (const GB of BB) {
          const BB = NY(GB.focus, [OB[0], OB[1], OB[2]]);
          if (BB && BB.IM === oY.LASER_D && GB.lasers[BB.dir]) return {
            entry: GB,
            dir: BB.dir
          }
        }
        return null
      }(BB, GB);
      if (!DB) return {
        key: `${uy}lookLaserNoCollider`
      };
      const {
        entry: QB,
        dir: oB
      } = DB;
      return QB.open[oB] ? QB.live[oB] ? {
        key: QB.on ? `${uy}lookLaserFiring` : `${uy}lookLaserReady`
      } : {
        key: `${uy}lookLaserBlocked`
      } : {
        key: `${uy}lookLaserClosed`
      }
    }

    function gy(BB, OB) {
      const GB = [];
      for (let YB = 1; YB < oY.LASER_D; YB++) BB & 1 << OB * (oY.LASER_D - 1) + YB - 1 && GB.push(YB);
      return GB
    }
    const ry = {
      firing: `${uy}colSlotFiring`,
      ready: `${uy}colSlotReady`,
      blocked: `${uy}colSlotBlocked`,
      empty: `${uy}colSlotEmpty`,
      closed: `${uy}colSlotClosed`
    };

    function Xy(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const QB = YD(BB),
        oB = YD(OB),
        jB = YD(GB),
        yB = jB.filter(Boolean).length,
        JB = QB.filter(Boolean).length,
        MB = [0, 1, 2, 3].map((BB => oB[BB] ? QB[BB] ? jB[BB] ? YB ? "firing" : "ready" : "blocked" : (BB => gy(DB, BB).length > 0)(BB) ? "blocked" : "empty" : "closed")),
        PB = MB.indexOf("blocked"),
        zB = PB < 0 && JB > 0 ? MB.indexOf("empty") : -1;
      return MB.map(((BB, OB) => {
        const GB = OB === PB ? {
          key: `${uy}colSlotClear`
        } : OB === zB ? {
          key: `${uy}colSlotAdd`,
          params: {
            time: Fy(Math.min(4, yB + 1))
          }
        } : null;
        return {
          dir: OB,
          tone: BB,
          title: {
            key: "blocked" !== BB || QB[OB] ? ry[BB] : `${uy}colSlotGap`,
            keys: {
              dir: my[OB]
            }
          },
          hint: GB
        }
      }))
    }

    function wy(BB) {
      var OB;
      return "noPower" === BB.baf2ColState && BB.baf2ColRxState ? ly({
        baf2RxState: BB.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (OB = BB.baf2ColRxHeat) && void 0 !== OB ? OB : 0
      }) : null
    }

    function Ey(BB) {
      const OB = YD(BB.baf2ColSpots).filter(Boolean).length,
        GB = YD(BB.baf2ColLive);
      let YB = 0,
        DB = 0;
      return YD(BB.baf2ColLasers).forEach(((BB, OB) => {
        BB && (YB++, DB += GB[OB] ? 0 : 1)
      })), DB > 0 ? {
        key: `${uy}colSubSome`,
        params: {
          blocked: String(DB),
          lasers: String(YB)
        }
      } : OB < 4 ? {
        key: `${uy}colSubSpots`,
        params: {
          lasers: String(YB),
          spots: String(OB)
        }
      } : {
        key: `${uy}colSub`,
        params: {
          lasers: String(YB)
        }
      }
    }

    function cy(BB) {
      const OB = wy(BB);
      if ("idle" === BB.baf2ColRxState && OB) return {
        key: `${uy}colState_noPowerIdle`
      };
      if (OB) return {
        key: `${uy}colState_noPowerReactor`,
        keys: {
          state: OB.label
        }
      };
      if ("noInput" !== BB.baf2ColState) return {
        key: `${uy}colState_${BB.baf2ColState}`
      };
      const GB = String(Math.max(0, oY.NOVA_SA - BB.baf2ColSa)),
        YB = String(Math.max(0, oY.NOVA_GD - BB.baf2ColGd));
      return "0" !== GB && "0" !== YB ? {
        key: `${uy}colState_noInput`,
        params: {
          sa: GB,
          gd: YB
        }
      } : "0" !== GB ? {
        key: `${uy}colState_noStarAlloy`,
        params: {
          sa: GB
        }
      } : "0" !== YB ? {
        key: `${uy}colState_noGlowDust`,
        params: {
          gd: YB
        }
      } : {
        key: `${uy}colState_running`
      }
    }

    function hy(BB) {
      return BB.baf2ColP < 0 ? `${uy}colNext` : function(BB) {
        const OB = BB.baf2ColState;
        return BB.baf2ColP >= 0 && ("blocked" === OB || "noLasers" === OB || "noPower" === OB)
      }(BB) ? `${uy}colStalled` : null === ay(BB) ? `${uy}colMaking` : `${uy}colNovaIn`
    }

    function ay(BB) {
      if (BB.baf2ColP < 0 || BB.baf2ColWant <= 0) return null;
      const OB = BB.baf2ColFocusPerS * Math.min(1, BB.baf2ColDraw / BB.baf2ColWant);
      return OB > 0 ? Math.max(0, oY.NOVA_FOCUS - BB.baf2ColP) / OB : null
    }

    function ey(BB, OB) {
      const GB = [];
      for (let YB = 1; YB <= 3; YB++) {
        const DB = [BB[0], BB[1] - YB, BB[2]];
        if (!OB(DB)) return GB;
        GB.push(DB)
      }
      return []
    }

    function Ty(BB, OB) {
      const GB = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let YB = 0; YB < 4; YB++) {
        const DB = YB,
          QB = ZY(BB.focus, DB, oY.LASER_D);
        if (BB.lasers[YB] || !BB.open[YB] || !OB(QB)) continue;
        const oB = [];
        for (let GB = 1; GB < oY.LASER_D; GB++) {
          const YB = ZY(BB.focus, DB, GB);
          OB(YB) || oB.push(YB)
        }
        GB.supports.push(...ey(QB, OB)), 0 === oB.length ? GB.free.push(QB) : (GB.blocked.push(QB), GB.gaps.push(...oB))
      }
      return GB
    }
    const by = oY.LASER_D - .25,
      Cy = 4,
      Hy = 2,
      vy = 16;
    const sy = {
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
        blendMode: mj.f.Standard,
        soft: !0
      },
      xy = {
        green: sy,
        pink: {
          ...sy,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function ty(BB, OB) {
      const GB = {
        ...OB.params
      };
      for (const [DB, QB] of Object.entries(null !== (YB = OB.keys) && void 0 !== YB ? YB : {})) {
        var YB;
        GB[DB] = BB(QB)
      }
      return GB
    }
    const BJ = "buildAFactory2Game:",
      OJ = 2 * oY.LASER_D + 1,
      GJ = oY.LASER_D;

    function YJ(BB) {
      return BB(`${BJ}colFocusTip`, {
        need: iy(oY.NOVA_FOCUS)
      })
    }

    function DJ(BB, OB) {
      return BB(OB.key, ty(BB, OB))
    }

    function QJ(BB) {
      const OB = BB.getStatus();
      return {
        status: OB,
        entry: OB ? BB.entryAtRoot(OB.baf2ColAt) : void 0
      }
    }

    function oJ(BB, OB) {
      return {
        left: 100 * (GJ + BB) / OJ + "%",
        top: 100 * (GJ + OB) / OJ + "%"
      }
    }

    function jJ(BB) {
      let {
        status: OB,
        entry: GB
      } = BB;
      const YB = YD(OB.baf2ColLasers),
        DB = YD(OB.baf2ColSpots),
        QB = YD(OB.baf2ColLive),
        oB = !0 === (null === GB || void 0 === GB ? void 0 : GB.on),
        jB = oY.LASER_D,
        yB = [];
      for (let lB = 0; lB < 4; lB++) {
        const [BB, , OB] = qY[lB];
        if (QB[lB]) {
          const GB = 100 * (jB - 1) / OJ,
            YB = BB + OB > 0 ? 100 * (GJ + 1) / OJ : 100 * (GJ - (jB - 1)) / OJ,
            DB = 100 * (GJ + .35) / OJ,
            QB = 30 / OJ,
            JB = 0 !== BB ? {
              left: `${YB}%`,
              width: `${GB}%`,
              top: `${DB}%`,
              height: `${QB}%`
            } : {
              top: `${YB}%`,
              height: `${GB}%`,
              left: `${DB}%`,
              width: `${QB}%`
            };
          yB.push((0, WQ.jsx)("i", {
            className: AD()("Baf2ColDiagramBeam", {
              Off: !oB
            }),
            style: JB
          }, `beam${lB}`))
        }
        const GB = YB[lB] ? "Baf2ColDiagramLaser" : DB[lB] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        yB.push((0, WQ.jsx)("i", {
          className: GB,
          style: oJ(BB * jB, OB * jB)
        }, `spot${lB}`))
      }
      for (let lB = 0; lB < 4; lB++) {
        if (YB[lB] || !DB[lB]) continue;
        const [BB, , GB] = qY[lB];
        for (const YB of gy(null !== (JB = OB.baf2ColGaps) && void 0 !== JB ? JB : 0, lB)) {
          var JB;
          yB.push((0, WQ.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: oJ(BB * YB, GB * YB)
          }, `gap${lB},${YB}`))
        }
      }
      for (const [lB, , pB] of null !== (MB = null === GB || void 0 === GB ? void 0 : GB.blockers) && void 0 !== MB ? MB : []) {
        var MB, PB, zB;
        const BB = lB - (null !== (PB = null === GB || void 0 === GB ? void 0 : GB.focus[0]) && void 0 !== PB ? PB : 0),
          OB = pB - (null !== (zB = null === GB || void 0 === GB ? void 0 : GB.focus[2]) && void 0 !== zB ? zB : 0);
        yB.push((0, WQ.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: oJ(BB, OB)
        }, `block${BB},${OB}`))
      }
      return (0, WQ.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [yB, (0, WQ.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function yJ(BB) {
      let {
        status: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), YB = YD(OB.baf2ColLive).filter(Boolean).length;
      return (0, WQ.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: YJ(GB),
          children: GB(`${BJ}colLadder`)
        }), (0, WQ.jsx)("ul", {
          children: [1, 2, 3, 4].map((BB => (0, WQ.jsx)("li", {
            className: AD()({
              On: BB === YB
            }),
            children: GB(`${BJ}colLadderChip`, {
              lasers: String(BB),
              time: Fy(BB)
            })
          }, BB)))
        })]
      })
    }

    function JJ(BB) {
      let {
        item: OB,
        sJ: GB,
        need: YB,
        cap: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)(), oB = Math.min(GB, YB);
      return (0, WQ.jsxs)("li", {
        className: AD()("Baf2ColTile", {
          Short: GB < YB
        }),
        children: [(0, WQ.jsx)(MJ, {
          item: OB
        }), (0, WQ.jsx)("b", {
          className: "Baf2ColTileValue",
          children: QB(`${BJ}colOutOf`, {
            amount: String(oB),
            cap: String(YB)
          })
        }), (0, WQ.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, WQ.jsx)("i", {
            style: {
              width: 100 * oB / YB + "%"
            }
          })
        }), GB > YB && (0, WQ.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: QB(`${BJ}colIntakeHeld`, {
            amount: String(GB),
            cap: String(DB)
          })
        })]
      })
    }

    function MJ(BB) {
      let {
        item: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)();
      return (0, WQ.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: OB,
            amount: 0
          })
        }), (0, WQ.jsx)("span", {
          className: "Baf2ColTileName",
          children: (0, xD.g)(GB, OB)
        })]
      })
    }

    function PJ(BB) {
      switch (BB.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function zJ(BB) {
      var OB, GB, DB;
      let {
        store: QB,
        close: oB
      } = BB;
      const {
        t: jB
      } = (0, UD.H)(), yB = ro(), {
        status: JB,
        entry: MB
      } = function(BB) {
        const [OB, GB] = (0, YB.useState)((() => QJ(BB)));
        return (0, YB.useEffect)((() => (GB(QJ(BB)), BB.subscribe((() => {
          GB(QJ(BB))
        })))), [BB]), OB
      }(QB), [PB, zB] = (0, YB.useState)(null), lB = null === JB || void 0 === JB ? void 0 : JB.baf2ColHold;
      (0, YB.useEffect)((() => {
        zB(null)
      }), [lB]);
      const pB = (0, YB.useRef)({
          p: -1,
          n: 0
        }),
        qB = null !== (OB = null === JB || void 0 === JB ? void 0 : JB.baf2ColP) && void 0 !== OB ? OB : -1;
      qB < pB.current.p && pB.current.n++, pB.current.p = qB;
      const ZB = (0, YB.useRef)(null),
        [NB] = (0, YB.useState)((() => {
          return (BB = QB.heldAtOpen()) === JY || BB === MY ? {
            key: `${uy}colBeltItIn`,
            item: BB
          } : null;
          var BB
        }));
      if (!JB) return null;
      const RB = JB.baf2ColMember,
        WB = JB.baf2ColP >= 0,
        AB = function(BB, OB) {
          if (BB.baf2ColP >= 0 && BB.baf2ColDraw > 0) {
            const OB = BB.baf2ColWant > 0 ? Math.min(1, BB.baf2ColDraw / BB.baf2ColWant) : 0;
            return {
              focus: BB.baf2ColFocusPerS * OB,
              draw: BB.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === BB.baf2ColState && OB && OB.draw > 0 ? {
            ...OB,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(JB, ZB.current);
      ZB.current = AB.draw > 0 ? AB : null;
      const VB = "slowed" === JB.baf2ColState || "noPower" === JB.baf2ColState,
        SB = ay(JB),
        nB = null !== PB && void 0 !== PB ? PB : JB.baf2ColHold,
        UB = function(BB) {
          var OB, GB;
          return "idle" === BB.baf2ColRxState ? null : null !== (OB = null === (GB = wy(BB)) || void 0 === GB ? void 0 : GB.fix) && void 0 !== OB ? OB : null
        }(JB),
        fB = null === UB && null === NB ? function(BB) {
          var OB;
          const GB = BB.baf2ColSentTo;
          if (!GB) return null;
          const YB = null !== (OB = BB.baf2ColSentHeld) && void 0 !== OB ? OB : null;
          return {
            key: null === YB ? `${uy}colNovaSentToMachine` : `${uy}colNovaSentTo`,
            target: GB,
            sJ: YB
          }
        }(JB) : null,
        kB = WB ? jB(`${BJ}colFocusOf`, {
          focus: iy(JB.baf2ColP),
          need: iy(oY.NOVA_FOCUS)
        }) : null;
      return (0, WQ.jsx)(Zo.d, {
        close: oB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, WQ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, WQ.jsx)(kD.c, {
                  itemName: jY,
                  amount: 0
                })
              }), (0, WQ.jsxs)("div", {
                children: [(0, WQ.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: (0, xD.g)(jB, jY)
                }), (0, WQ.jsx)("p", {
                  children: DJ(jB, Ey(JB))
                })]
              })]
            }), (0, WQ.jsx)(No.m, {
              onClick: oB
            })]
          }), (0, WQ.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, WQ.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, WQ.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, WQ.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: jB(hy(JB), {
                    time: null === SB ? "" : qQ(jB, SB)
                  })
                }), (0, WQ.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, WQ.jsx)("i", {
                    style: {
                      width: (WB ? 100 * JB.baf2ColP / oY.NOVA_FOCUS : 0) + "%"
                    }
                  }, pB.current.n)
                }), (0, WQ.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, WQ.jsxs)("span", {
                    title: YJ(jB),
                    children: [(0, WQ.jsx)("b", {
                      children: iy(AB.focus)
                    }), " ", jB(`${BJ}colFocusPerS`)]
                  }), (0, WQ.jsxs)("span", {
                    className: AD()("Baf2ColDraw", {
                      Short: VB
                    }),
                    children: [(0, WQ.jsx)(fD.b, {
                      name: "bolt"
                    }), VB ? jB(`${BJ}colDrawOf`, {
                      draw: iy(JB.baf2ColDraw),
                      want: iy(JB.baf2ColWant)
                    }) : jB(`${BJ}colPowerPerS`, {
                      rate: iy(AB.draw)
                    })]
                  }), null !== kB && (0, WQ.jsx)("span", {
                    className: "Soft",
                    children: kB
                  })]
                })]
              }), (0, WQ.jsx)("p", {
                className: AD()("Baf2ColState", PJ(JB)),
                children: DJ(jB, cy(JB))
              }), null !== UB && (0, WQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: jB(UB)
              }), null === UB && null !== NB && (0, WQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: jB(NB.key, {
                  item: (0, xD.g)(jB, NB.item)
                })
              }), fB && (0, WQ.jsx)("p", {
                className: "Baf2ColStateFix",
                children: jB(fB.key, {
                  target: (0, xD.g)(jB, fB.target),
                  amount: String(null !== (GB = fB.sJ) && void 0 !== GB ? GB : 0)
                })
              }), (0, WQ.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, WQ.jsx)(JJ, {
                  item: JY,
                  sJ: JB.baf2ColSa,
                  need: oY.NOVA_SA,
                  cap: oY.SA_CAP
                }), (0, WQ.jsx)(JJ, {
                  item: MY,
                  sJ: JB.baf2ColGd,
                  need: oY.NOVA_GD,
                  cap: oY.GD_CAP
                }), (0, WQ.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, WQ.jsx)(MJ, {
                    item: "Nova Matter"
                  }), (0, WQ.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: jB(`${BJ}colNovaHeld`, {
                      amount: String(JB.baf2ColOut),
                      cap: String(oY.OUT_CAP)
                    })
                  }), RB && (0, WQ.jsx)(No.q, {
                    className: "Baf2ColTake",
                    disabled: 0 === JB.baf2ColOut,
                    onClick: () => {
                      yB.send(Iy(JB, "take"))
                    },
                    children: jB(`${BJ}colTake`)
                  })]
                })]
              }), RB && (0, WQ.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": nB,
                className: AD()("Baf2ColHold", {
                  On: nB
                }),
                onClick: BB => {
                  BB.detail > 0 && BB.currentTarget.blur(), zB(!nB), yB.send(Iy(JB, "hold " + (nB ? 0 : 1)))
                },
                children: [(0, WQ.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, WQ.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, WQ.jsx)("b", {
                    children: jB(`${BJ}colHold`)
                  }), (0, WQ.jsx)("span", {
                    children: jB(`${BJ}colHoldNote`)
                  })]
                })]
              })]
            }), (0, WQ.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, WQ.jsx)(jJ, {
                status: JB,
                entry: MB
              }), (0, WQ.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Xy(JB.baf2ColLasers, JB.baf2ColSpots, JB.baf2ColLive, AB.beamsOn, null !== (DB = JB.baf2ColGaps) && void 0 !== DB ? DB : 0).map((BB => (0, WQ.jsxs)("li", {
                  className: BB.tone,
                  children: [(0, WQ.jsx)("b", {
                    children: DJ(jB, BB.title)
                  }), null !== BB.hint && (0, WQ.jsx)("span", {
                    children: DJ(jB, BB.hint)
                  })]
                }, BB.dir)))
              }), (0, WQ.jsx)(yJ, {
                status: JB
              })]
            })]
          })]
        })
      })
    }
    const lJ = "buildAFactory2Game:",
      pJ = 36e5,
      qJ = 864e5;

    function ZJ(BB, OB, GB) {
      return Math.max(0, Math.ceil((BB + OB - Math.max(GB, BB)) / 1e3))
    }

    function NJ(BB) {
      return BB.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function RJ(BB) {
      return "Homestead" === BB
    }

    function WJ(BB) {
      return function(BB) {
        let OB = 0;
        for (const GB of BB) {
          const BB = /^Island ([1-9]\d{0,5})$/.exec(GB);
          BB && (OB = Math.max(OB, Number(BB[1])))
        }
        return `Island ${OB+1}`
      }(BB.map((BB => BB.baf2IslandName)))
    }

    function AJ(BB, OB) {
      return function(BB) {
        return `${lJ}islandsBlocked${BB[0].toUpperCase()}${BB.slice(1)}`
      }("degraded" === BB && 0 === OB ? "stuck" : BB)
    }

    function VJ(BB) {
      return BB.filter((BB => {
        var OB;
        return !BB.baf2IslandActive && void 0 === BB.baf2IslandUnreadable && void 0 === (null === (OB = BB.baf2IslandCoop) || void 0 === OB ? void 0 : OB.baf2CoopState)
      })).length
    }

    function SJ(BB) {
      return "coopMoving" === BB || "coopUnreachable" === BB
    }

    function nJ(BB, OB) {
      const GB = OB > 0;
      return {
        change: null === BB && !GB,
        switch: (null === BB || "degraded" === BB || SJ(BB)) && !GB,
        rename: "loading" !== BB && "degraded" !== BB && "stuck" !== BB
      }
    }

    function UJ(BB, OB) {
      return void 0 === BB || "corrupt" === BB && OB
    }
    const fJ = uo;

    function kJ(BB, OB, GB) {
      if (null !== BB && void 0 !== BB && BB.untilGone) {
        var YB;
        return !("dismiss" === BB.untilGone && void 0 === (null === (YB = OB.baf2IslandCoop) || void 0 === YB ? void 0 : YB.baf2CoopState)) && GB - BB.atMs < 32500
      }
      return void 0 !== BB && GB - BB.atMs < fJ && OB.baf2IslandName === BB.from
    }
    const dJ = uo;

    function KJ(BB) {
      return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.core : "islands" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.backToCore : void 0
    }

    function uJ(BB) {
      return `\0${BB}\0`
    }

    function mJ(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const YB = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const QB of Object.keys(GB)) YB[QB] = uJ(QB);
      let DB = Object.keys(YB).length > 0 ? BB(OB, YB) : BB(OB);
      for (const [QB, oB] of Object.entries(GB)) DB = DB.split(uJ(QB)).join(oB);
      return DB
    }

    function IJ(BB, OB) {
      return BB ? OB ? "enabled" : "disabled" : "hidden"
    }
    const FJ = {
      removed: `${lJ}islandsCoopRemoved`,
      deleted: `${lJ}islandsCoopDeleted`,
      notReady: `${lJ}islandsCoopNotReady`,
      gone: `${lJ}islandsCoopGone`
    };

    function iJ(BB) {
      var OB;
      return "member" !== (null === (OB = BB.baf2IslandCoop) || void 0 === OB ? void 0 : OB.baf2CoopRole) && "newer" !== BB.baf2IslandUnreadable
    }

    function LJ(BB, OB, GB, YB, DB, QB) {
      const oB = BB.baf2IslandActive,
        jB = BB.baf2IslandUnreadable,
        yB = BB.baf2IslandCoop,
        JB = function(BB, OB, GB) {
          return {
            switch: BB.switch && void 0 === OB,
            delete: BB.change && UJ(OB, GB)
          }
        }(OB, jB, YB),
        MB = oB && void 0 !== yB && void 0 === yB.baf2CoopState && "coopUnreachable" === QB,
        PB = {
          switch: IJ((!oB || MB) && void 0 === jB, MB || JB.switch),
          switchLabel: MB ? "tryAgain" : "switch",
          rename: IJ(!0, OB.rename),
          delete: IJ(!oB, JB.delete),
          deleteWaits: !oB && UJ(jB, YB),
          people: IJ(void 0 !== BB.baf2IslandInvitable || DB && oB && void 0 === jB && void 0 === yB, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        zB = !oB && JB.delete;
      if (void 0 === yB) return GB ? {
        ...PB,
        delete: IJ(!oB, !1),
        deleteWaits: !1,
        note: zB ? {
          key: `${lJ}islandsCoopKeepOwn`
        } : null
      } : PB;
      const lB = yB.baf2CoopState,
        pB = yB.baf2CoopMembers.length > 1,
        qB = {
          ...PB,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== lB && "member" === yB.baf2CoopRole) return {
        ...qB,
        dismiss: IJ(!0, OB.rename),
        note: {
          key: FJ[lB],
          names: {
            owner: yB.baf2CoopOwner
          }
        }
      };
      if (void 0 !== lB) {
        let BB = {
          key: `${lJ}islandsCoopOwnLost`
        };
        return zB && pB ? BB = {
          key: `${lJ}islandsCoopDeleteMembers`
        } : zB && GB && (BB = {
          key: `${lJ}islandsCoopKeepOwn`
        }), {
          ...qB,
          delete: IJ(!oB, JB.delete && !pB && !GB),
          deleteWaits: PB.deleteWaits && !pB && !GB,
          note: BB
        }
      }
      if ("member" === yB.baf2CoopRole) return {
        ...PB,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: IJ(!0, oB ? OB.switch : OB.rename)
      };
      const ZB = yB.baf2CoopManageHere;
      let NB = null;
      var RB;
      ZB || oB ? zB && pB ? NB = {
        key: `${lJ}islandsCoopDeleteMembers`
      } : zB && GB && (NB = {
        key: `${lJ}islandsCoopKeepOwn`
      }) : NB = {
        key: null !== (RB = yB.baf2CoopLeft) && void 0 !== RB && RB.length ? `${lJ}islandsCoopManageThereClaim` : `${lJ}islandsCoopManageThere`
      };
      return {
        ...PB,
        rename: IJ(!0, OB.rename && ZB),
        delete: IJ(!oB, JB.delete && !pB && !GB),
        deleteWaits: PB.deleteWaits && !pB && !GB,
        people: "enabled",
        peopleLabel: "players",
        unshare: IJ(ZB && oB && !pB, OB.change),
        remove: ZB,
        note: NB
      }
    }

    function gJ(BB) {
      var OB;
      const GB = BB.baf2IslandCoop;
      if ("owner" !== (null === GB || void 0 === GB ? void 0 : GB.baf2CoopRole) || void 0 !== GB.baf2CoopState || null === (OB = GB.baf2CoopLeft) || void 0 === OB || !OB.length) return null;
      const YB = BB.baf2IslandActive && GB.baf2CoopManageHere;
      return {
        left: GB.baf2CoopLeft,
        claim: YB,
        goThere: !YB && GB.baf2CoopManageHere
      }
    }

    function rJ(BB) {
      return BB.baf2CoopMembers.length >= BB.baf2CoopMax
    }

    function XJ(BB, OB, GB) {
      return void 0 !== BB && OB < BB.answer && GB - BB.atMs < fJ
    }
    const wJ = "buildAFactory2Game:";

    function EJ(BB, OB) {
      return {
        onKeyDown: GB => {
          GB.stopPropagation(), GB.nativeEvent.isComposing || 229 === GB.nativeEvent.keyCode || ("Enter" === GB.key ? (GB.preventDefault(), BB()) : "Escape" === GB.key && (GB.preventDefault(), OB()))
        }
      }
    }

    function cJ(BB) {
      return {
        onKeyDown: OB => {
          "Escape" !== OB.key || OB.nativeEvent.isComposing || (OB.preventDefault(), OB.stopPropagation(), BB())
        }
      }
    }

    function hJ(BB) {
      BB.currentTarget.select()
    }

    function aJ(BB, OB) {
      (0, YB.useEffect)((() => {
        var GB;
        BB && (null === (GB = OB.current) || void 0 === GB || GB.scrollIntoView({
          block: "nearest"
        }))
      }), [BB, OB])
    }

    function eJ(BB) {
      const [OB, GB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        const OB = document.querySelector(".UiRequests"),
          YB = BB.current;
        if (!OB || !YB || "undefined" === typeof ResizeObserver) return;
        const DB = () => {
          const BB = OB.getBoundingClientRect(),
            DB = YB.getBoundingClientRect(),
            QB = YB.parentElement,
            oB = QB && parseFloat(getComputedStyle(QB).paddingTop) || 0,
            jB = function(BB, OB, GB, YB) {
              if (!BB || BB.height <= 0 || BB.right <= OB.left || BB.left >= OB.right) return null;
              const DB = Math.max(YB, BB.bottom + 8);
              return {
                marginTop: Math.round(DB - YB),
                maxHeight: Math.max(0, Math.floor(GB - DB - YB))
              }
            }(BB, DB, window.innerHeight, oB);
          GB((BB => (null === BB || void 0 === BB ? void 0 : BB.marginTop) === (null === jB || void 0 === jB ? void 0 : jB.marginTop) && (null === BB || void 0 === BB ? void 0 : BB.maxHeight) === (null === jB || void 0 === jB ? void 0 : jB.maxHeight) ? BB : jB))
        };
        DB();
        const QB = new ResizeObserver(DB);
        return QB.observe(OB), window.addEventListener("resize", DB), () => {
          QB.disconnect(), window.removeEventListener("resize", DB)
        }
      }), [BB]), OB
    }

    function TJ() {
      (0, YB.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function bJ(BB) {
      (0, YB.useEffect)((() => {
        var OB;
        null === (OB = BB.current) || void 0 === OB || OB.focus()
      }), [BB])
    }

    function CJ(BB) {
      const [OB, GB] = (0, YB.useState)(Date.now);
      return (0, YB.useEffect)((() => {
        const OB = window.setInterval((() => {
          GB(Date.now())
        }), BB);
        return () => {
          window.clearInterval(OB)
        }
      }), [BB]), OB
    }

    function HJ(BB) {
      let {
        tier: OB,
        t: GB
      } = BB;
      const {
        kind: YB,
        short: DB
      } = ZB(OB), QB = lB(OB, pB), oB = GB(`${wJ}${QB.key}`, {
        ...QB.params,
        name: GB(`${wJ}${NB(OB).nameKey}`)
      });
      return (0, WQ.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, WQ.jsx)("span", {
          className: AD()("Baf2IslandTierPip", {
            Stage: "tier" !== YB
          }),
          "aria-hidden": "true",
          children: DB
        }), oB]
      })
    }

    function vJ(BB) {
      let {
        note: OB,
        className: GB,
        t: YB
      } = BB;
      return (0, WQ.jsx)("p", {
        className: AD()("Baf2IslandNote", GB),
        children: mJ(YB, OB.key, OB.names, OB.params)
      })
    }
    const sJ = "buildAFactory2Game:";

    function xJ(BB) {
      let {
        message: OB,
        arrivedAtMs: GB,
        close: DB,
        leave: QB
      } = BB;
      const oB = ro(),
        {
          t: jB
        } = (0, UD.H)(),
        yB = CJ(1e3),
        JB = (0, YB.useRef)(null);
      TJ(), (0, YB.useEffect)((() => {
        var BB;
        null === (BB = JB.current) || void 0 === BB || BB.focus()
      }), []);
      const MB = ZJ(GB, OB.baf2TransferInMs, yB),
        PB = GB + OB.baf2TransferInMs - 1e3,
        [zB, lB] = (0, YB.useState)(null);
      (0, YB.useEffect)((() => {
        const BB = window.setTimeout((() => {
          lB(PB)
        }), Math.max(0, PB - Date.now()));
        return () => {
          window.clearTimeout(BB)
        }
      }), [PB]);
      const pB = zB === PB || yB >= PB,
        qB = OB.baf2TransferIsland,
        ZB = OB.baf2TransferOwner;
      return (0, WQ.jsx)(Zo.d, {
        close: DB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, WQ.jsxs)("section", {
          ref: JB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              children: [(0, WQ.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === ZB ? mJ(jB, `${sJ}islandsTransferOwn`, {
                  island: qB
                }) : mJ(jB, `${sJ}islandsTransfer`, {
                  island: qB,
                  owner: ZB
                })
              }), (0, WQ.jsx)("p", {
                children: pB ? jB(`${sJ}islandsTransferNow`) : jB(`${sJ}islandsTransferIn`, {
                  time: qQ(jB, MB)
                })
              })]
            }), (0, WQ.jsx)(No.m, {
              ariaLabel: jB(`${sJ}islandsClose`),
              onClick: DB
            })]
          }), !pB && (0, WQ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, WQ.jsx)("p", {
              className: "Baf2TransferNote",
              children: jB(`${sJ}islandsTransferNote`)
            }), (0, WQ.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, WQ.jsx)(No.f, {
                onClick: () => {
                  oB.send("baf2coopstay"), QB()
                },
                children: jB(`${sJ}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var tJ = GB(1480),
      BM = GB(1127),
      OM = GB.n(BM);
    const GM = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const YM = "buildAFactory2Game:",
      DM = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function QM(BB, OB, GB) {
      return void 0 === OB ? GB : "string" === typeof OB ? OB : Array.isArray(OB) ? OB.map((OB => "string" === typeof OB ? OB : "translationKey" in OB ? BB(OB.translationKey) : "")).join("") : BB(OB.translationKey)
    }

    function oM(BB) {
      const OB = {};
      for (const [GB, YB] of Object.entries(null !== BB && void 0 !== BB ? BB : {})) OB[GB] = YB < 0 ? pQ(YB) : YB.toLocaleString("en-US");
      return OB
    }

    function jM(BB, OB) {
      const GB = OB ? "touch" : "mouse";
      return {
        use: BB(`${YM}lookUse_${GB}`),
        Use: BB(`${YM}lookUseStart_${GB}`)
      }
    }
    const yM = (0, YB.memo)((function(BB) {
      let {
        item: OB
      } = BB;
      return (0, WQ.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, WQ.jsx)(kD.c, {
          itemName: OB,
          amount: 0
        })
      })
    }));

    function JM(BB) {
      let {
        label: OB,
        percent: GB,
        progress: YB
      } = BB;
      return (0, WQ.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${OB}: ${YB}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": GB,
          children: (0, WQ.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${GB}%`
            }
          })
        }), (0, WQ.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: YB
        })]
      })
    }

    function MM(BB) {
      let {
        chips: OB
      } = BB;
      return (0, WQ.jsx)("span", {
        className: "Baf2QuestChips",
        children: OB.map((BB => {
          let [OB, GB, YB] = BB;
          const DB = GB >= YB;
          return (0, WQ.jsxs)("span", {
            className: AD()("Baf2QuestChip", {
              Met: DB
            }),
            children: [(0, WQ.jsx)(yM, {
              item: OB
            }), (0, WQ.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: DB ? `\u2713${YB}` : `${GB}/${YB}`
            })]
          }, OB)
        }))
      })
    }

    function PM(BB, OB) {
      const {
        key: GB,
        params: YB
      } = lB(OB, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return BB(`${YM}${GB}`, {
        ...YB,
        name: BB(`${YM}${NB(OB).nameKey}`)
      })
    }

    function zM(BB) {
      let {
        core: OB,
        t: GB
      } = BB;
      const [YB, DB] = OB, QB = DB > 0 ? Math.floor(100 * YB / DB) : 100;
      return (0, WQ.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": GB(`${YM}questCoreLabel`, {
          have: String(YB),
          need: String(DB)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": QB,
        children: [(0, WQ.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: GB(`${YM}questCore`, {
            percent: String(QB)
          })
        }), (0, WQ.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, WQ.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${QB}%`
            }
          })
        })]
      })
    }

    function lM(BB) {
      let {
        rows: OB,
        t: GB
      } = BB;
      const YB = OB.filter((BB => BB.done)).length;
      return (0, WQ.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": GB(`${YM}questStepsProgress`, {
          done: String(YB),
          total: String(OB.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": OB.length,
        "aria-valuenow": YB,
        children: OB.map((BB => (0, WQ.jsx)("span", {
          className: AD()("Baf2QuestSegment", {
            Done: BB.done,
            Current: BB.current
          })
        }, BB.id)))
      })
    }
    const pM = (0, YB.memo)(ZM, qM);

    function qM(BB, OB) {
      const GB = GB => BB.view.itemNames[GB] === OB.view.itemNames[GB];
      return BB.t === OB.t && BB.extra === OB.extra && (null === BB.row.item || GB(BB.row.item)) && BB.row.madeFor.every(GB) && BB.row.also.every(GB) && OM()(BB.row, OB.row)
    }

    function ZM(BB) {
      let {
        row: OB,
        view: GB,
        t: YB,
        extra: DB
      } = BB;
      const {
        isTouchScreen: QB
      } = (0, ND.o)(["isTouchScreen"]), oB = OB.item ? function(BB, OB, GB) {
        return 1 !== GB && GM.has(BB) ? nD(OB) : null
      }(OB.key, OB.item, OB.total) : null, jB = oB ? YB(oB) : OB.item ? QM(YB, GB.itemNames[OB.item], OB.item) : "", yB = OB.also.map((BB => QM(YB, GB.itemNames[BB], BB))), JB = yB.join(", "), MB = function(BB, OB) {
        var GB;
        return OB.length < 2 ? null !== (GB = OB[0]) && void 0 !== GB ? GB : "" : BB(`${YM}listAnd`, {
          rest: OB.slice(0, -1).join(BB(`${YM}listComma`)),
          last: OB[OB.length - 1]
        })
      }(YB, [jB, ...yB]), PB = YB(`${YM}${OB.key}`, {
        ...jM(YB, QB),
        ...oM(OB.params),
        item: jB,
        also: JB,
        itemList: MB,
        total: String(OB.total)
      }), [zB, ...lB] = PB.split("\n"), pB = OB.total > 1 && !OB.done && !OB.away;
      return (0, WQ.jsxs)("li", {
        className: AD()("Baf2QuestStep", {
          Done: OB.done,
          Current: OB.current,
          JustFinished: OB.justFinished,
          Away: OB.away
        }),
        children: [!OB.done && null !== OB.item && (0, WQ.jsx)(yM, {
          item: OB.item
        }), (OB.done || null === OB.item) && (0, WQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: OB.done ? "\u2713" : "\u25cb"
        }), (0, WQ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, WQ.jsx)("strong", {
            children: zB
          }), lB.length > 0 && (0, WQ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: lB.join(" ")
          }), !OB.done && OB.madeFor.length > 0 && (0, WQ.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: YB("buildAFactory2Game:questRowFor", {
              items: OB.madeFor.map((BB => QM(YB, GB.itemNames[BB], BB))).join(" \u2192 ")
            })
          }), pB && (0, WQ.jsx)(JM, {
            label: zB,
            percent: Math.round(100 * OB.amount / OB.total),
            progress: `${OB.amount.toLocaleString("en-US")}/${OB.total.toLocaleString("en-US")}`
          }), !OB.done && !OB.away && OB.chips && OB.chips.length > 0 && (0, WQ.jsx)(MM, {
            chips: OB.chips
          }), DB]
        })]
      })
    }
    const NM = "buildAFactory2Game:",
      RM = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      WM = {
        on: `${NM}tutorialButtonOn`,
        hud: `${NM}tutorialButtonHud`,
        off: `${NM}tutorialButtonOff`
      },
      AM = {
        on: `${NM}tutorialPickedOn`,
        hud: `${NM}tutorialPickedHud`,
        off: `${NM}tutorialPickedOff`
      };
    class VM {
      constructor(BB, OB, GB) {
        this.commands = BB, this.quests = OB, this.toasts = GB
      }
      next() {
        const BB = function(BB) {
            return IB[(IB.indexOf(BB) + 1) % IB.length]
          }(this.quests.get().tutorial),
          OB = this.quests.setTutorial(BB);
        this.commands.send(`baf2tutorial ${BB} ${OB}`), this.toasts.show({
          baf2ToastText: [(0, iB.Ae)({
            translationKey: AM[BB]
          }, iB.J.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function SM(BB, OB) {
      let [GB, YB] = OB;
      return BB(`${YM}${GB}`, oM(YB))
    }

    function nM(BB) {
      let [OB, GB] = BB;
      return OB + JSON.stringify(GB)
    }

    function UM(BB) {
      let {
        goal: OB,
        t: GB
      } = BB;
      return OB ? (0, WQ.jsx)("span", {
        className: "Baf2BookGoal",
        children: GB(`${YM}${OB}`)
      }) : null
    }

    function fM(BB) {
      let {
        view: OB,
        t: GB
      } = BB;
      if (!OB.name) return null;
      const YB = ED(OB.rows);
      return (0, WQ.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: GB(`${YM}currentQuest`)
        }), (0, WQ.jsx)("strong", {
          className: "Baf2BookTitle",
          children: SM(GB, OB.name)
        }), (0, WQ.jsx)(UM, {
          goal: OB.goal,
          t: GB
        }), YB.length > 1 && (0, WQ.jsx)(lM, {
          rows: YB,
          t: GB
        }), (0, WQ.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: OB.rows.map((BB => (0, WQ.jsx)(pM, {
            row: BB,
            view: OB,
            t: GB
          }, BB.id)))
        }), OB.reward && (0, WQ.jsxs)("span", {
          className: "Baf2BookReward",
          children: [GB(`${YM}questReward`), (0, WQ.jsx)(yM, {
            item: OB.reward
          }), QM(GB, OB.itemNames[OB.reward], OB.reward)]
        })]
      })
    }

    function kM(BB) {
      let {
        quest: OB,
        upcoming: GB,
        t: YB
      } = BB;
      return (0, WQ.jsxs)("li", {
        className: AD()("Baf2BookQuest", {
          Done: OB[3],
          Upcoming: GB
        }),
        children: [(0, WQ.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: OB[3] ? "\u2713" : "\u25cb"
        }), (0, WQ.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, WQ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: SM(YB, OB)
          }), (0, WQ.jsx)(UM, {
            goal: OB[2],
            t: YB
          })]
        })]
      })
    }

    function dM(BB) {
      let {
        done: OB,
        total: GB,
        t: YB
      } = BB;
      const DB = GB > 0 ? Math.round(100 * OB / GB) : 0,
        QB = YB(`${YM}questBookChapterProgress`, {
          done: String(OB),
          total: String(GB)
        });
      return (0, WQ.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": QB,
          "aria-valuemin": 0,
          "aria-valuemax": GB,
          "aria-valuenow": OB,
          children: (0, WQ.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${DB}%`
            }
          })
        }), (0, WQ.jsx)("span", {
          className: "Baf2BookProgressText",
          children: QB
        })]
      })
    }

    function KM(BB) {
      let {
        view: OB,
        tier: GB,
        quests: YB,
        t: DB
      } = BB;
      const QB = GB === OB.tier,
        oB = (null !== YB && void 0 !== YB ? YB : []).filter((BB => !BB[4])),
        jB = (null !== YB && void 0 !== YB ? YB : []).filter((BB => BB[4])),
        yB = oB.filter((BB => BB[3])).length,
        JB = QB && OB.name ? nM(OB.name) : null,
        MB = oB.findIndex((BB => !BB[3] && nM(BB) === JB));
      return (0, WQ.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, WQ.jsx)("h3", {
            children: PM(DB, GB)
          }), oB.length > 0 && (0, WQ.jsx)(dM, {
            done: yB,
            total: oB.length,
            t: DB
          }), QB && OB.core && (0, WQ.jsx)(zM, {
            core: OB.core,
            t: DB
          })]
        }), (0, WQ.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === YB && QB && (0, WQ.jsx)(fM, {
            view: OB,
            t: DB
          }), oB.map(((BB, GB) => GB === MB ? (0, WQ.jsx)(fM, {
            view: OB,
            t: DB
          }, nM(BB)) : (0, WQ.jsx)(kM, {
            quest: BB,
            upcoming: !BB[3],
            t: DB
          }, nM(BB))))]
        }), QB && OB.side && (0, WQ.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, WQ.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: DB(`${YM}questSide`)
          }), (0, WQ.jsx)("strong", {
            className: "Baf2BookTitle",
            children: SM(DB, OB.side.name)
          }), (0, WQ.jsx)(UM, {
            goal: OB.side.goal,
            t: DB
          }), (0, WQ.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, WQ.jsx)(pM, {
              row: OB.side.row,
              view: OB,
              t: DB
            })
          })]
        }), jB.length > 0 && (0, WQ.jsxs)(WQ.Fragment, {
          children: [(0, WQ.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: DB(`${YM}questBookSidesDone`)
          }), (0, WQ.jsx)("ol", {
            className: "Baf2BookQuests",
            children: jB.map((BB => (0, WQ.jsx)(kM, {
              quest: BB,
              upcoming: !1,
              t: DB
            }, nM(BB))))
          })]
        })]
      })
    }

    function uM(BB) {
      var OB, GB, QB;
      let {
        store: oB,
        tutorial: jB,
        close: yB
      } = BB;
      const {
        t: JB
      } = (0, UD.H)(), PB = (0, tJ.i)(FD, oB.get()), zB = null !== (OB = PB.tier) && void 0 !== OB ? OB : 1, [lB, pB] = (0, YB.useState)(null), NB = (null === lB || void 0 === lB ? void 0 : lB.at) === zB ? lB.tier : zB, RB = (0, YB.useRef)(null), WB = null !== PB.chapters;
      (0, YB.useEffect)((() => {
        var BB;
        RB.current && (RB.current.scrollTop = 0);
        const OB = null === (BB = RB.current) || void 0 === BB ? void 0 : BB.querySelector(".Baf2BookQuest.Current");
        if (RB.current && OB) {
          const BB = OB.getBoundingClientRect().bottom - RB.current.getBoundingClientRect().bottom;
          BB > 0 && (RB.current.scrollTop += Math.min(BB, OB.getBoundingClientRect().top - RB.current.getBoundingClientRect().top))
        }
      }), [NB, WB]);
      const AB = null === (GB = PB.chapters) || void 0 === GB ? void 0 : GB.find((BB => {
        let [OB] = BB;
        return OB === NB
      }));
      return (0, WQ.jsx)(Zo.d, {
        close: yB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: DM,
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: JB(`${YM}questBookTitle`)
            }), (0, WQ.jsx)(No.q, {
              className: "Baf2BookTutorialButton",
              disabled: !PB.tutorialKnown,
              ariaLabel: JB(WM[PB.tutorial]),
              title: JB(WM[PB.tutorial]),
              onClick: () => {
                jB.next()
              },
              children: (0, WQ.jsx)(fD.b, {
                name: RM[PB.tutorial]
              })
            }), (0, WQ.jsx)(No.m, {
              onClick: yB
            })]
          }), (0, WQ.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": JB(`${YM}questBookChapters`),
            "data-pad-initial-area": !0,
            children: DB.slice(0, MB()).map(((BB, OB) => {
              const GB = OB + 1,
                {
                  kind: YB,
                  short: DB
                } = ZB(GB),
                QB = qB(GB, zB),
                oB = QB ? JB(`${YM}coreAtomicHidden`) : PM(JB, GB);
              return (0, WQ.jsx)("li", {
                children: (0, WQ.jsx)("button", {
                  type: "button",
                  className: AD()({
                    Stage: "tier" !== YB,
                    Atomic: "atomic" === YB,
                    Current: GB === zB,
                    Selected: GB === NB
                  }),
                  disabled: GB > zB,
                  "aria-pressed": GB === NB,
                  "aria-label": oB,
                  title: QB ? void 0 : oB,
                  onClick: () => {
                    pB({
                      tier: GB,
                      at: zB
                    })
                  },
                  children: QB ? "?" : DB
                })
              }, BB.nameKey)
            }))
          }), (0, WQ.jsxs)("div", {
            ref: RB,
            className: "Baf2BookBody",
            children: [XD(PB) && NB === zB && (0, WQ.jsx)("p", {
              className: "Baf2BookEmpty",
              children: JB(`${YM}questBookAllDone`)
            }), (0, WQ.jsx)(KM, {
              view: PB,
              tier: NB,
              quests: null !== (QB = null === AB || void 0 === AB ? void 0 : AB[1]) && void 0 !== QB ? QB : null,
              t: JB
            })]
          })]
        })
      })
    }
    const mM = "buildAFactory2Game:";

    function IM(BB) {
      let {
        tiers: OB,
        from: GB,
        tier: YB,
        shown: DB,
        pl: QB
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), jB = OB.map(((BB, OB) => {
        const jB = GB + OB,
          {
            kind: yB,
            short: JB
          } = ZB(jB),
          MB = qB(jB, YB);
        return (0, WQ.jsx)("li", {
          children: (0, WQ.jsx)("button", {
            type: "button",
            className: AD()({
              Stage: "tier" !== yB,
              Silhouette: MB,
              Reached: jB <= YB,
              Current: jB === YB,
              Next: jB === YB + 1,
              Selected: jB === DB
            }),
            disabled: MB,
            "aria-pressed": jB === DB,
            "aria-label": MB ? oB(`${mM}coreAtomicHidden`) : void 0,
            title: MB ? void 0 : oB(`${mM}${BB.nameKey}`),
            onClick: () => {
              QB(jB)
            },
            children: MB ? "?" : JB
          })
        }, BB.nameKey)
      }));
      return (0, WQ.jsx)(WQ.Fragment, {
        children: jB
      })
    }

    function FM(BB) {
      let {
        id: OB,
        label: GB,
        tiers: YB,
        from: DB,
        ...QB
      } = BB;
      return (0, WQ.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, WQ.jsx)("span", {
          id: OB,
          className: "Baf2CoreLadderLabel",
          children: GB
        }), (0, WQ.jsx)("ol", {
          "aria-labelledby": OB,
          children: (0, WQ.jsx)(IM, {
            ...QB,
            tiers: YB,
            from: DB
          })
        })]
      })
    }

    function iM(BB) {
      const {
        t: OB
      } = (0, UD.H)(), GB = DB.findIndex((BB => void 0 !== BB.stage)), YB = DB.findIndex((BB => void 0 !== BB.reactorTier)), QB = GB < 0 ? DB : DB.slice(0, GB), oB = GB < 0 ? [] : DB.slice(GB, YB < 0 ? void 0 : YB), yB = YB < 0 || !jB() ? [] : DB.slice(YB);
      return (0, WQ.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, WQ.jsx)(FM, {
          ...BB,
          id: "baf2CoreTiersLabel",
          label: OB(`${mM}coreTiersLabel`),
          tiers: QB,
          from: 1
        }), oB.length > 0 && (0, WQ.jsx)(FM, {
          ...BB,
          id: "baf2CoreStagesLabel",
          label: OB(`${mM}coreStagesLabel`),
          tiers: oB,
          from: GB + 1
        }), yB.length > 0 && (0, WQ.jsx)(FM, {
          ...BB,
          id: "baf2CoreAtomicLabel",
          label: OB(`${mM}coreAtomicLabel`),
          tiers: yB,
          from: YB + 1
        })]
      })
    }
    const LM = "buildAFactory2Game:";

    function gM(BB) {
      let {
        item: OB,
        itemNames: GB,
        children: YB
      } = BB;
      return (0, WQ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: OB,
            amount: 0
          })
        }), (0, WQ.jsx)(dD.b, {
          text: GB[OB]
        }), YB]
      })
    }

    function rM(BB) {
      const OB = new Map;
      for (const {
          block: YB
        }
        of BB.newDeposits) {
        var GB;
        OB.set(YB, (null !== (GB = OB.get(YB)) && void 0 !== GB ? GB : 0) + 1)
      }
      return [...OB]
    }

    function XM(BB) {
      let {
        value: OB,
        label: GB,
        more: YB
      } = BB;
      return (0, WQ.jsxs)("li", {
        children: [(0, WQ.jsx)("strong", {
          children: OB
        }), (0, WQ.jsx)("span", {
          children: GB
        }), YB > 0 && (0, WQ.jsxs)("em", {
          children: ["+", YB]
        })]
      })
    }

    function wM(BB) {
      let {
        items: OB,
        itemNames: GB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), [QB, oB] = (0, YB.useState)(null), jB = null !== QB && OB.includes(QB) ? QB : null;
      return (0, WQ.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, WQ.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: DB(`${LM}coreRewardUnlocks`)
        }), (0, WQ.jsx)("ul", {
          children: OB.map((BB => (0, WQ.jsx)("li", {
            children: (0, WQ.jsx)("button", {
              type: "button",
              className: AD()("Baf2PanelIcon", {
                Picked: BB === jB
              }),
              title: (0, xD.g)(DB, BB),
              "aria-label": (0, xD.g)(DB, BB),
              "aria-pressed": BB === jB,
              onClick: () => {
                oB(BB === jB ? null : BB)
              },
              children: (0, WQ.jsx)(kD.c, {
                itemName: BB,
                amount: 0
              })
            })
          }, BB)))
        }), (0, WQ.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== jB && (0, WQ.jsxs)(WQ.Fragment, {
            children: [(0, WQ.jsx)(dD.b, {
              text: GB[jB]
            }), " \xb7 ", (0, WQ.jsx)(dD.b, {
              text: GB[uB(jB)]
            })]
          }), null === jB && DB(`${LM}coreRecipeTap`)]
        })]
      })
    }

    function EM(BB) {
      var OB, GB;
      let {
        def: YB,
        tier: DB,
        itemNames: QB
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), jB = DB > 1 ? NB(DB - 1) : void 0, yB = Math.round(2 * YB.islandRadius), JB = jB ? Math.round(2 * jB.islandRadius) : yB, MB = DB >= 3 ? VY(DB) : null;
      return (0, WQ.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, WQ.jsxs)("ul", {
          className: AD()("Baf2CoreStats", {
            Four: null !== MB
          }),
          children: [(0, WQ.jsx)(XM, {
            value: `${yB}\xd7${yB}`,
            label: oB(`${LM}coreStatIsland`),
            more: yB - JB
          }), (0, WQ.jsx)(XM, {
            value: String(YB.machineAllowance),
            label: oB(`${LM}coreStatMachines`),
            more: YB.machineAllowance - (null !== (OB = null === jB || void 0 === jB ? void 0 : jB.machineAllowance) && void 0 !== OB ? OB : YB.machineAllowance)
          }), (0, WQ.jsx)(XM, {
            value: String(YB.beltAllowance),
            label: oB(`${LM}coreStatBelts`),
            more: YB.beltAllowance - (null !== (GB = null === jB || void 0 === jB ? void 0 : jB.beltAllowance) && void 0 !== GB ? GB : YB.beltAllowance)
          }), null !== MB && (0, WQ.jsx)(XM, {
            value: String(MB),
            label: oB(`${LM}coreStatStorage`),
            more: MB - (jB ? VY(DB - 1) : MB)
          })]
        }), YB.reward && (0, WQ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, WQ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: oB(`${LM}coreRewardItem`)
          }), (0, WQ.jsx)(gM, {
            item: YB.reward,
            itemNames: QB
          })]
        }), YB.newDeposits.length > 0 && (0, WQ.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, WQ.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: oB(YB.newDeposits.length > 1 ? `${LM}coreRewardDeposits` : `${LM}coreRewardDeposit`)
          }), rM(YB).map((BB => {
            let [OB, GB] = BB;
            return (0, WQ.jsx)(gM, {
              item: OB,
              itemNames: QB,
              children: GB > 1 && ` \xd7${GB}`
            }, OB)
          }))]
        }), YB.unlocks.length > 0 && (0, WQ.jsx)(wM, {
          items: YB.unlocks,
          itemNames: QB
        }), (0, WQ.jsx)(cM, {
          tier: DB
        })]
      })
    }

    function cM(BB) {
      let {
        tier: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), YB = lD[OB];
      if (!YB) return null;
      const DB = zD(OB, 0, 0).barrierMax !== zD(OB - 1, 0, 0).barrierMax;
      return (0, WQ.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: DB ? oD.Chestplate : QD,
            amount: 0
          })
        }), GB(`${LM}gearPerkLine`, {
          perk: GB(`${LM}${YB}`)
        })]
      })
    }

    function hM(BB, OB) {
      return null === BB ? OB : BB.value
    }

    function aM(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === BB || GB - BB.atMs >= YB ? null : DB(BB.value, OB) ? BB.armed ? null : BB : BB.armed ? BB : {
        ...BB,
        armed: !0
      }
    }

    function eM(BB, OB) {
      const GB = OB.filter((OB => {
        var GB;
        return !1 !== (null === (GB = BB.get(OB)) || void 0 === GB ? void 0 : GB.value)
      }));
      for (const [YB, DB] of BB) DB.value && !OB.includes(YB) && GB.push(YB);
      return GB
    }

    function TM(BB, OB, GB, DB) {
      const [QB, oB] = (0, YB.useState)((() => new Map)), jB = () => {
        oB((OB => function(BB, OB, GB, YB) {
          var DB;
          let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            oB = null;
          for (const [jB, yB] of BB) {
            const DB = aM(yB, OB(jB), GB, YB, QB);
            DB !== yB && (oB ??= new Map(BB), null === DB ? oB.delete(jB) : oB.set(jB, DB))
          }
          return null !== (DB = oB) && void 0 !== DB ? DB : BB
        }(OB, BB, Date.now(), GB, DB)))
      };
      (0, YB.useEffect)((() => {
        jB()
      }), [OB, GB]), (0, YB.useEffect)((() => {
        if (0 === QB.size) return;
        const BB = Math.min(...[...QB.values()].map((BB => BB.atMs))),
          OB = setTimeout(jB, Math.max(0, BB + GB - Date.now()) + 1);
        return () => {
          clearTimeout(OB)
        }
      }), [QB, OB, GB]);
      return [QB, (OB, GB) => {
        oB((YB => {
          const QB = new Map(YB);
          return QB.set(OB, function(BB, OB, GB) {
            return {
              value: BB,
              atMs: GB,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(BB, OB)
            }
          }(GB, BB(OB), Date.now(), DB)), QB
        }))
      }]
    }
    const bM = "buildAFactory2Game:";

    function CM(BB) {
      let {
        message: OB,
        itemNames: GB
      } = BB;
      const DB = ro(),
        {
          t: QB
        } = (0, UD.H)(),
        [oB, jB] = (0, YB.useState)(!1),
        [yB, JB] = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uo;
          const [GB, YB] = TM((OB => BB.includes(OB)), BB, OB, Object.is);
          return [eM(GB, BB), YB]
        }(OB.baf2CoreBankPaused),
        MB = new Set(yB),
        PB = [...OB.baf2CoreBanked];
      for (const YB of MB) PB.some((BB => {
        let [OB] = BB;
        return OB === YB
      })) || PB.push([YB, 0]);
      return 0 === PB.length ? null : (0, WQ.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, WQ.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": oB,
          onClick: () => {
            jB(!oB)
          },
          children: [(0, WQ.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: QB(`${bM}coreBankedLater`)
          }), (0, WQ.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: PB.map((BB => {
              let [OB, GB] = BB;
              const YB = MB.has(OB);
              return (0, WQ.jsxs)("span", {
                className: AD()({
                  Paused: YB
                }),
                title: YB ? QB(`${bM}coreBankPausedTag`) : void 0,
                children: [(0, WQ.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, WQ.jsx)(kD.c, {
                    itemName: OB,
                    amount: 0
                  })
                }), GB, YB && (0, WQ.jsx)(fD.b, {
                  name: "pause"
                })]
              }, OB)
            }))
          }), (0, WQ.jsx)(fD.b, {
            name: oB ? "angle-up" : "angle-down"
          })]
        }), oB && (0, WQ.jsxs)(WQ.Fragment, {
          children: [(0, WQ.jsx)("ul", {
            children: PB.map((BB => {
              let [OB, YB] = BB;
              const oB = MB.has(OB);
              return (0, WQ.jsxs)("li", {
                children: [(0, WQ.jsxs)(gM, {
                  item: OB,
                  itemNames: GB,
                  children: [(0, WQ.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: YB
                  }), oB && (0, WQ.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: QB(`${bM}coreBankPausedTag`)
                  })]
                }), (0, WQ.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, WQ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === YB,
                    onClick: () => {
                      DB.send(`baf2corewithdraw ${YB} ${OB}`)
                    },
                    children: QB(`${bM}coreTake`)
                  }), (0, WQ.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      DB.send(`${AB} ${OB}`), JB(OB, !oB)
                    },
                    children: QB(oB ? `${bM}coreBankResume` : `${bM}coreBankStop`)
                  })]
                })]
              }, OB)
            }))
          }), (0, WQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: QB(`${bM}coreBankNote`)
          })]
        })]
      })
    }
    const HM = "buildAFactory2Game:";

    function vM(BB) {
      const OB = Math.max(0, Math.floor(BB));
      return `${Math.floor(OB/60)}:${String(OB%60).padStart(2,"0")}`
    }

    function sM(BB) {
      let {
        item: OB
      } = BB;
      return (0, WQ.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, WQ.jsx)(kD.c, {
          itemName: OB,
          amount: 0
        })
      })
    }

    function xM() {
      return (0, WQ.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, WQ.jsx)(fD.b, {
          name: "bolt"
        })
      })
    }

    function tM(BB) {
      let {
        charge: OB,
        hint: GB,
        itemNames: YB
      } = BB;
      const DB = ro(),
        {
          t: QB
        } = (0, UD.H)(),
        [oB, jB, yB, JB, MB, PB, zB] = OB,
        [lB, pB] = function(BB) {
          var OB;
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uo,
            YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [DB, QB] = TM((() => BB), BB, GB, YB);
          return [hM(null !== (OB = DB.get("")) && void 0 !== OB ? OB : null, BB), BB => {
            QB("", BB)
          }]
        }(zB),
        qB = lB === zB ? PB : !lB,
        ZB = JB >= MB,
        NB = oB.find((BB => {
          let [, OB, GB] = BB;
          return GB < .9 * OB
        }));
      let RB = `${HM}coreChargeWaiting`,
        WB = {};
      return ZB ? RB = `${HM}coreChargeDone` : lB ? RB = `${HM}coreChargeStopped` : qB && GB ? (RB = `${HM}${GB[0]}`, WB = {
        item: (0, xD.g)(QB, GB[1])
      }) : qB && NB ? (RB = `${HM}coreChargeShort`, WB = {
        item: (0, xD.g)(QB, NB[0])
      }) : qB && jB > 0 && !yB ? RB = `${HM}coreChargePower` : qB && (RB = `${HM}coreChargeRunning`), (0, WQ.jsxs)("div", {
        className: AD()("Baf2CoreCharge", {
          Waiting: !qB && !ZB,
          Done: ZB
        }),
        children: [(0, WQ.jsxs)("h4", {
          children: [QB(`${HM}coreChargeTitle`), (0, WQ.jsx)("span", {
            children: QB(`${HM}coreChargeProgress`, {
              done: vM(JB),
              need: vM(MB)
            })
          })]
        }), (0, WQ.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, WQ.jsx)("div", {
            style: {
              width: 100 * Math.min(JB, MB) / MB + "%"
            }
          })
        }), (0, WQ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [oB.map((BB => {
            var OB;
            let [GB, DB, oB] = BB;
            const jB = oB >= .9 * DB;
            return (0, WQ.jsxs)("li", {
              className: AD()({
                Done: jB,
                Short: qB && !jB
              }),
              children: [(0, WQ.jsx)(sM, {
                item: GB
              }), (0, WQ.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, WQ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, WQ.jsx)(dD.b, {
                    text: null !== (OB = YB[GB]) && void 0 !== OB ? OB : GB
                  }), (0, WQ.jsx)("span", {
                    children: QB(`${HM}coreChargeItem`, {
                      now: String(oB),
                      need: String(DB)
                    })
                  })]
                }), (0, WQ.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, WQ.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*oB/DB)}%`
                    }
                  })
                })]
              })]
            }, GB)
          })), jB > 0 && (0, WQ.jsxs)("li", {
            className: AD()("Baf2CoreChargePower", {
              Short: qB && !yB
            }),
            children: [(0, WQ.jsx)(xM, {}), (0, WQ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, WQ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, WQ.jsx)("span", {
                  children: QB(`${HM}coreChargePowerRow`, {
                    power: sB(jB)
                  })
                })
              })
            })]
          })]
        }), (0, WQ.jsx)("p", {
          className: "Baf2CoreHint",
          children: QB(RB, WB)
        }), !ZB && (qB || lB) && (0, WQ.jsx)("button", {
          type: "button",
          className: AD()("Baf2CoreChargeToggle", {
            Stopped: lB
          }),
          onClick: () => {
            DB.send(SB), pB(!lB)
          },
          children: QB(lB ? `${HM}coreChargeRestart` : `${HM}coreChargeStop`)
        })]
      })
    }

    function BP(BB) {
      let {
        charge: OB,
        reached: GB,
        itemNames: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)();
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2CoreCharge", {
          Done: GB
        }),
        children: [(0, WQ.jsxs)("h4", {
          children: [DB(`${HM}coreChargeTitle`), (0, WQ.jsx)("span", {
            children: DB(`${HM}coreChargeSpecTime`, {
              time: vM(OB.seconds)
            })
          })]
        }), (0, WQ.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [OB.items.map((BB => {
            var OB;
            let {
              item: QB,
              amount: oB
            } = BB;
            return (0, WQ.jsxs)("li", {
              className: AD()({
                Done: GB
              }),
              children: [(0, WQ.jsx)(sM, {
                item: QB
              }), (0, WQ.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, WQ.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, WQ.jsx)(dD.b, {
                    text: null !== (OB = YB[QB]) && void 0 !== OB ? OB : QB
                  }), (0, WQ.jsx)("span", {
                    children: DB(`${HM}coreChargeSpecItem`, {
                      need: String(oB)
                    })
                  })]
                })
              })]
            }, QB)
          })), OB.powerPerS > 0 && (0, WQ.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, WQ.jsx)(xM, {}), (0, WQ.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, WQ.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, WQ.jsx)("span", {
                  children: DB(`${HM}coreChargePowerRow`, {
                    power: sB(OB.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const OP = "buildAFactory2Game:";

    function GP(BB) {
      let {
        def: OB,
        reached: GB,
        banked: YB,
        itemNames: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)();
      return (0, WQ.jsx)("ul", {
        className: "Baf2CoreCost",
        children: OB.cost.map((BB => {
          let {
            item: OB,
            amount: oB
          } = BB;
          const jB = GB ? 0 : YB(OB);
          return (0, WQ.jsx)("li", {
            children: (0, WQ.jsx)(gM, {
              item: OB,
              itemNames: DB,
              children: (0, WQ.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: jB > 0 ? QB(`${OP}coreBankedFor`, {
                  amount: String(jB),
                  total: String(oB)
                }) : `\xd7${oB}`
              })
            })
          }, OB)
        }))
      })
    }

    function YP(BB, OB) {
      if (OB >= MB()) return BB(`${OP}coreMaxTier`);
      const GB = JB[OB + 1];
      return GB && !GB.startsWith("upgradeCore") ? BB(`${OP}coreGateQuest`, {
        quest: BB(`${OP}quest_${GB}`)
      }) : BB(`${OP}coreGateClosed`)
    }

    function DP() {
      const {
        t: BB
      } = (0, UD.H)(), OB = ro(), GB = (0, YB.useRef)(null), DB = (0, YB.useRef)(Date.now());
      return aJ(!0, GB), (0, WQ.jsx)("div", {
        ref: GB,
        className: "Baf2CoreGrow",
        children: (0, WQ.jsx)(No.q, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - DB.current >= 600 && OB.send(WB)
          },
          children: BB(`${OP}coreGrow`)
        })
      })
    }

    function QP(BB) {
      let {
        message: OB,
        itemNames: GB,
        next: YB
      } = BB;
      const DB = ro(),
        {
          t: QB
        } = (0, UD.H)(),
        oB = OB.baf2CoreTier,
        jB = OB.baf2CoreReady,
        yB = OB.baf2CoreNeeds.filter((BB => {
          let [, OB, GB, YB] = BB;
          return YB > 0 && OB < GB
        })),
        JB = OB.baf2CoreNeeds.every((BB => {
          let [, OB, GB] = BB;
          return OB >= GB
        })),
        MB = OB.baf2CoreKeep;
      return (0, WQ.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [jB && (0, WQ.jsx)(DP, {}), (0, WQ.jsx)("h3", {
            children: QB(`${OP}coreBring`)
          }), (0, WQ.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: OB.baf2CoreNeeds.map((BB => {
              let [OB, YB, oB, jB] = BB;
              return (0, WQ.jsxs)("li", {
                className: AD()({
                  Done: YB >= oB
                }),
                children: [(0, WQ.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, WQ.jsx)(kD.c, {
                    itemName: OB,
                    amount: 0
                  })
                }), (0, WQ.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, WQ.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, WQ.jsx)(dD.b, {
                      text: GB[OB]
                    }), (0, WQ.jsxs)("span", {
                      children: [YB, "/", oB]
                    })]
                  }), (0, WQ.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, WQ.jsx)("div", {
                      style: {
                        width: 100 * YB / oB + "%"
                      }
                    }), jB > 0 && (0, WQ.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * jB / oB + "%"
                      }
                    })]
                  })]
                }), jB > 0 && YB < oB && (0, WQ.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    DB.send(`${VB} ${OB}`)
                  },
                  children: QB(`${OP}coreDeposit`, {
                    amount: String(jB)
                  })
                })]
              }, OB)
            }))
          }), OB.baf2CoreCharge && (0, WQ.jsx)(tM, {
            charge: OB.baf2CoreCharge,
            hint: OB.baf2CoreChargeHint,
            itemNames: GB
          }), !jB && yB.length > 1 && (0, WQ.jsx)(No.q, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              DB.send(WB)
            },
            children: QB(`${OP}coreHandOver`)
          }), !jB && void 0 !== MB && (0, WQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: QB(`${OP}coreKeepRest`, {
              item: (0, xD.g)(QB, MB)
            })
          }), !jB && !JB && 0 === yB.length && void 0 === MB && (0, WQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: QB(`${OP}coreNothingHeld`)
          }), (0, WQ.jsx)(CM, {
            message: OB,
            itemNames: GB
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, WQ.jsx)("h3", {
            children: QB(`${OP}coreRewards`)
          }), (0, WQ.jsx)(EM, {
            def: YB,
            tier: oB + 1,
            itemNames: GB
          })]
        })]
      })
    }

    function oP(BB) {
      let {
        message: OB,
        itemNames: GB,
        shown: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), QB = OB.baf2CoreTier, oB = NB(YB), jB = YB <= QB, yB = new Map(OB.baf2CoreBanked), JB = !RB(QB, nB(OB)) && YB === QB;
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2CoreBody", {
          Locked: !jB
        }),
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, WQ.jsx)("h3", {
            children: DB(jB ? `${OP}coreItTook` : `${OP}coreItNeeds`)
          }), 0 === oB.cost.length && (0, WQ.jsx)("p", {
            className: "Baf2CoreHint",
            children: DB(`${OP}coreTierStart`)
          }), oB.cost.length > 0 && (0, WQ.jsx)(GP, {
            def: oB,
            reached: jB,
            banked: BB => {
              var OB;
              return function(BB, OB, GB, YB) {
                let DB = BB;
                for (let oB = OB + 2; oB <= GB; oB++) {
                  var QB;
                  const BB = NB(oB).cost.find((BB => BB.item === YB)),
                    OB = Math.min(DB, null !== (QB = null === BB || void 0 === BB ? void 0 : BB.amount) && void 0 !== QB ? QB : 0);
                  if (oB === GB) return OB;
                  DB -= OB
                }
                return 0
              }(null !== (OB = yB.get(BB)) && void 0 !== OB ? OB : 0, QB, YB, BB)
            },
            itemNames: GB
          }), oB.charge && (0, WQ.jsx)(BP, {
            charge: oB.charge,
            reached: jB,
            itemNames: GB
          }), JB && (0, WQ.jsxs)(WQ.Fragment, {
            children: [(0, WQ.jsx)("p", {
              className: "Baf2CoreHint",
              children: YP(DB, QB)
            }), (0, WQ.jsx)(CM, {
              message: OB,
              itemNames: GB
            })]
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, WQ.jsx)("h3", {
            children: DB(jB ? `${OP}coreGave` : `${OP}coreLockedRewards`)
          }), (0, WQ.jsx)(EM, {
            def: oB,
            tier: YB,
            itemNames: GB
          })]
        })]
      })
    }

    function jP(BB, OB) {
      const {
        key: GB,
        params: YB
      } = lB(OB - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return BB(`${OP}${GB}`, YB)
    }
    const yP = "buildAFactory2Game:",
      JP = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      MP = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function PP(BB) {
      let {
        view: OB,
        close: GB,
        askIslands: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)(), [oB, jB] = (0, YB.useState)(!1);
      (0, YB.useEffect)((() => {
        if (!oB) return;
        const BB = window.setTimeout((() => {
          jB(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(BB)
        }
      }), [oB]);
      const {
        message: yB,
        itemNames: JB
      } = OB, MB = yB.baf2CoreTier, PB = NB(MB), zB = RB(MB, nB(yB)), [qB, ZB] = yB.baf2CoreMachines, [WB, AB] = yB.baf2CoreBelts, VB = yB.baf2CoreStorage, SB = yB.baf2CoreReady, [UB, fB] = (0, YB.useState)(null), kB = (null === UB || void 0 === UB ? void 0 : UB.at) === MB && UB.ready === SB ? UB.tier : zB ? MB + 1 : MB;
      let dB = "coreTierLocked";
      kB <= MB ? dB = "coreTierReached" : kB === MB + 1 && (dB = "coreTierNext");
      const KB = QB(`${yP}${NB(kB).nameKey}`),
        uB = kB === MB + 1 ? zB : null,
        mB = lB(kB, {
          tier: dB,
          stage: JP[dB],
          atomic: MP[dB]
        }),
        IB = QB(`${yP}${mB.key}`, {
          ...mB.params,
          name: KB
        }),
        FB = lB(MB, pB),
        iB = QB(`${yP}${FB.key}`, {
          ...FB.params,
          name: QB(`${yP}${PB.nameKey}`)
        });
      return (0, WQ.jsx)(Zo.d, {
        close: GB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              children: [(0, WQ.jsx)("h2", {
                id: "baf2CoreTitle",
                children: QB(`${yP}coreTitle`)
              }), void 0 !== yB.baf2CoreIslandName && (0, WQ.jsx)("p", {
                className: "Baf2CoreIsland",
                children: yB.baf2CoreIslandName
              }), (0, WQ.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, WQ.jsx)("span", {
                  children: iB
                }), (0, WQ.jsx)("span", {
                  className: AD()({
                    Full: qB >= ZB
                  }),
                  children: QB(`${yP}coreMachineCount`, {
                    amount: String(qB),
                    total: String(ZB)
                  })
                }), (0, WQ.jsx)("span", {
                  className: AD()({
                    Full: WB >= AB
                  }),
                  children: QB(`${yP}coreBeltCount`, {
                    amount: String(WB),
                    total: String(AB)
                  })
                }), void 0 !== VB && (0, WQ.jsx)("span", {
                  className: AD()({
                    Full: VB[0] >= VB[1]
                  }),
                  children: QB(`${yP}coreStorageCount`, {
                    amount: String(VB[0]),
                    total: String(VB[1])
                  })
                })]
              })]
            }), (0, WQ.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [yB.baf2CoreIslands && (0, WQ.jsx)(No.f, {
                className: "Baf2CoreIslandsButton",
                disabled: oB,
                onClick: () => {
                  jB(!0), DB()
                },
                children: QB(`${yP}islandsOpenButton`)
              }), (0, WQ.jsx)(No.m, {
                onClick: GB
              })]
            })]
          }), (0, WQ.jsx)(iM, {
            tier: MB,
            shown: kB,
            pl: BB => {
              fB({
                tier: BB,
                at: MB,
                ready: SB
              })
            }
          }), (0, WQ.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [IB, kB > MB + 1 && (0, WQ.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: jP(QB, kB)
            })]
          }), 6 === kB && kB > MB && (0, WQ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: QB(`${yP}coreStagesNote`)
          }), 11 === kB && kB > MB && (0, WQ.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: QB(`${yP}coreAtomicNote`)
          }), uB && (0, WQ.jsx)(QP, {
            message: yB,
            itemNames: JB,
            next: uB
          }), !uB && (0, WQ.jsx)(oP, {
            message: yB,
            itemNames: JB,
            shown: kB
          })]
        })
      })
    }
    const zP = {
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
    const lP = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: GQ,
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

    function pP(BB) {
      return BB.baf2DropCometOreOnly ? "dropCometOre" : BB.baf2DropCometIsotope ? "seed" === BB.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function qP(BB) {
      let {
        message: OB,
        quests: GB,
        close: DB,
        leave: QB
      } = BB;
      const oB = ro(),
        {
          t: jB
        } = (0, UD.H)(),
        yB = (0, tJ.i)(FD, GB.get()),
        JB = function(BB) {
          var OB;
          if (!FB(BB.tutorial)) return null;
          const GB = BB.rows.find((BB => BB.current)),
            YB = GB ? zP[GB.key] : void 0;
          return null !== (OB = null !== YB && void 0 !== YB ? YB : BB.side ? zP[BB.side.row.key] : void 0) && void 0 !== OB ? OB : null
        }(yB),
        MB = null === yB.tier || QQ(yB.tier),
        PB = MB ? lP : lP.filter((BB => {
          let {
            item: OB
          } = BB;
          return OB !== GQ
        })),
        [zB, lB] = (0, YB.useState)(null),
        pB = null !== zB && void 0 !== zB ? zB : !OB.baf2DropFoundSalvage && MB,
        qB = OB.baf2DropRuinDistance,
        ZB = OB.baf2DropComet,
        NB = OB.baf2DropOldWorks,
        RB = OB.baf2DropGrove,
        WB = function(BB) {
          return 2 + Number(void 0 !== BB.baf2DropComet) + Number(!!BB.baf2DropOwedComet || void 0 !== BB.baf2DropOwedWaitMinutes) + Number(void 0 !== BB.baf2DropDigDistance) + Number(void 0 !== BB.baf2DropOldWorks) + Number(void 0 !== BB.baf2DropGrove)
        }(OB),
        AB = BB => {
          oB.send(function(BB) {
            return `baf2drop ${BB}`
          }(BB)), QB()
        };
      let VB = jB("buildAFactory2Game:dropRuinNone");
      if (null !== qB) {
        let BB = OB.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        OB.baf2DropRuinOldWorks && (BB = "dropRuinOldWorks");
        const GB = void 0 === OB.baf2DropRuinCluster ? jB("buildAFactory2Game:dropRuinOpen") : jB("buildAFactory2Game:dropRuinCluster", {
          count: String(OB.baf2DropRuinCluster)
        });
        VB = `${jB(`buildAFactory2Game:${BB}`,{distance:String(qB)})} ${GB}`
      }
      let SB = jB("buildAFactory2Game:dropBelowDescription");
      void 0 !== OB.baf2DropBelowLook && (SB = jB("buildAFactory2Game:dropBelowLook", {
        look: jB(OB.baf2DropBelowLook)
      }));
      const nB = "buildAFactory2Game:wildsRegion_survivorGrove" === OB.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        UB = qQ(jB, 60 * function(BB) {
          const [OB, GB] = (0, YB.useState)((() => Date.now())), [DB, QB] = (0, YB.useState)(OB);
          return (0, YB.useEffect)((() => {
            const BB = Date.now();
            GB(BB), QB(BB)
          }), [BB]), (0, YB.useEffect)((() => {
            const BB = window.setInterval((() => {
              QB(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(BB)
            }
          }), []), Math.max(1, BB.baf2DropRenewMinutes - Math.floor((DB - OB) / 6e4))
        }(OB)),
        fB = function(BB, OB, GB) {
          return "ruin" === BB && !GB || "owed" === BB && !OB.baf2DropOwedComet ? null : BB
        }(JB, OB, null !== qB),
        kB = function(BB) {
          for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
          return AD()("Baf2DropTile", ...GB, {
            Wanted: fB === BB
          })
        };
      return (0, WQ.jsx)(Zo.d, {
        close: DB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, WQ.jsxs)("section", {
          className: AD()("Baf2Panel Baf2DropMap", {
            Many: WB >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              children: [(0, WQ.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: jB("buildAFactory2Game:dropMapTitle")
              }), (0, WQ.jsx)("p", {
                children: jB("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, WQ.jsx)(No.m, {
              onClick: DB
            })]
          }), (0, WQ.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== ZB && (0, WQ.jsxs)(No.C, {
              className: kB("comet", "Baf2DropComet"),
              onClick: () => {
                AB("comet")
              },
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropComet")
              }), (0, WQ.jsx)("span", {
                children: jB(`buildAFactory2Game:${pP(OB)}`, {
                  distance: String(ZB)
                })
              })]
            }), OB.baf2DropOwedComet && (0, WQ.jsxs)(No.C, {
              className: kB("owed", "Baf2DropComet"),
              onClick: () => {
                AB("owed")
              },
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropOwedComet")
              }), (0, WQ.jsx)("span", {
                children: OB.baf2DropOwedIsotope ? jB("buildAFactory2Game:dropOwedIsotopeDescription") : jB("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== OB.baf2DropOwedWaitMinutes && (0, WQ.jsxs)(No.C, {
              className: kB("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropOwedComet")
              }), (0, WQ.jsx)("span", {
                children: jB("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(OB.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, WQ.jsxs)(No.f, {
              className: kB("below"),
              onClick: () => {
                AB("below")
              },
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropBelow")
              }), (0, WQ.jsx)("span", {
                children: SB
              })]
            }), void 0 !== OB.baf2DropDigDistance && (0, WQ.jsxs)(No.v, {
              className: kB("dig"),
              onClick: () => {
                AB("dig")
              },
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropDig")
              }), (0, WQ.jsx)("span", {
                children: jB("buildAFactory2Game:dropDigDescription", {
                  distance: String(OB.baf2DropDigDistance),
                  y: pQ(OB.baf2DropDigY)
                })
              })]
            }), void 0 !== RB && (0, WQ.jsxs)(No.v, {
              className: kB("grove", "Baf2DropGrove"),
              onClick: () => {
                AB("grove")
              },
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropGrove")
              }), (0, WQ.jsx)("span", {
                children: jB(`buildAFactory2Game:${nB}`, {
                  distance: String(RB)
                })
              })]
            }), (0, WQ.jsxs)(No.q, {
              className: kB("ruin"),
              disabled: null === qB,
              onClick: () => {
                AB("ruin")
              },
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropRuin")
              }), (0, WQ.jsx)("span", {
                children: VB
              })]
            }), void 0 !== NB && (0, WQ.jsxs)(No.Q, {
              className: kB("works"),
              onClick: () => {
                AB("works")
              },
              children: [(0, WQ.jsx)("strong", {
                children: jB("buildAFactory2Game:dropOldWorks")
              }), (0, WQ.jsx)("span", {
                children: jB("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(NB)
                })
              })]
            })]
          }), (0, WQ.jsx)("p", {
            className: "Baf2DropRenew",
            children: jB("buildAFactory2Game:dropRenew", {
              time: UB
            })
          }), (0, WQ.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: pB,
            onToggle: BB => {
              BB.currentTarget.open !== pB && lB(BB.currentTarget.open)
            },
            children: [(0, WQ.jsx)("summary", {
              children: jB("buildAFactory2Game:dropSalvageWhat")
            }), (0, WQ.jsx)("p", {
              children: jB("buildAFactory2Game:dropSalvageIntro")
            }), (0, WQ.jsx)("ul", {
              children: PB.map((BB => {
                let {
                  item: OB,
                  nameKey: GB,
                  useKey: YB,
                  params: DB
                } = BB;
                return (0, WQ.jsxs)("li", {
                  children: [(0, WQ.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, WQ.jsx)(kD.c, {
                      itemName: OB,
                      amount: 0
                    })
                  }), (0, WQ.jsxs)("span", {
                    children: [(0, WQ.jsx)("strong", {
                      children: jB(GB)
                    }), ": ", jB(YB, DB)]
                  })]
                }, OB)
              }))
            })]
          })]
        })
      })
    }
    const ZP = "buildAFactory2Game:";

    function NP(BB, OB) {
      return BB.sendIslandEdit(`baf2coopleave ${OB.baf2IslandId}`)
    }

    function RP(BB) {
      let {
        card: OB,
        canRename: GB,
        done: DB,
        t: QB
      } = BB;
      const oB = ro(),
        [jB, yB] = (0, YB.useState)(OB.baf2IslandName),
        JB = NJ(jB),
        MB = "" === JB || RJ(JB),
        PB = () => {
          !MB && GB && (JB !== OB.baf2IslandName ? DB(oB.sendIslandEdit(`baf2islandrename ${OB.baf2IslandId} ${JB}`)) : DB(null))
        },
        zB = () => {
          DB(null)
        };
      return (0, WQ.jsxs)("div", {
        className: "Baf2IslandForm",
        ...cJ(zB),
        children: [(0, WQ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [QB(`${ZP}islandsRenameLabel`), (0, WQ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: jB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: hJ,
            onChange: BB => {
              yB(BB.target.value)
            },
            ...EJ(PB, zB)
          })]
        }), "" === JB && (0, WQ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: QB(`${ZP}islandsRenameEmpty`)
        }), RJ(JB) && (0, WQ.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: QB(`${ZP}islandsNameReserved`)
        }), (0, WQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, WQ.jsx)(No.v, {
            disabled: MB || !GB,
            onClick: PB,
            children: QB(`${ZP}islandsRenameSave`)
          }), (0, WQ.jsx)(No.f, {
            onClick: zB,
            children: QB(`${ZP}islandsCancel`)
          })]
        })]
      })
    }

    function WP(BB) {
      let {
        card: OB,
        canDelete: GB,
        done: DB,
        t: QB
      } = BB;
      const oB = ro(),
        [jB, yB] = (0, YB.useState)(""),
        JB = function(BB, OB) {
          return NJ(BB).toLowerCase() === NJ(OB).toLowerCase()
        }(jB, OB.baf2IslandName),
        MB = () => {
          JB && GB && DB(oB.sendIslandEdit(`baf2islanddelete ${OB.baf2IslandId}`))
        },
        PB = () => {
          DB(null)
        },
        zB = uJ("name"),
        [lB, pB = ""] = QB(`${ZP}islandsDeleteConfirm`, {
          name: zB
        }).split(zB);
      return (0, WQ.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...cJ(PB),
        children: [(0, WQ.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, WQ.jsxs)("span", {
            children: [lB, (0, WQ.jsx)("strong", {
              children: OB.baf2IslandName
            }), pB]
          }), (0, WQ.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: jB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: hJ,
            onChange: BB => {
              yB(BB.target.value)
            },
            ...EJ(MB, PB)
          })]
        }), gJ(OB) && (0, WQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: QB(`${ZP}islandsDeleteLeftBack`)
        }), (0, WQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, WQ.jsx)(No.Q, {
            disabled: !JB || !GB,
            onClick: MB,
            children: QB(`${ZP}islandsDeleteForGood`)
          }), (0, WQ.jsx)(No.f, {
            onClick: PB,
            children: QB(`${ZP}islandsCancel`)
          })]
        })]
      })
    }

    function AP(BB) {
      let {
        members: OB,
        t: GB
      } = BB;
      const YB = OB.length;
      return (0, WQ.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, WQ.jsxs)("span", {
          children: [1 === YB ? GB(`${ZP}islandsPlayersOne`) : GB(`${ZP}islandsPlayers`, {
            count: String(YB)
          }), " "]
        }), OB.map(((BB, OB) => (0, WQ.jsxs)("span", {
          className: AD()("Baf2IslandMember", {
            Here: BB.baf2MemberHere
          }),
          title: BB.baf2MemberHere ? GB(`${ZP}islandsPlayerHere`) : void 0,
          children: [BB.baf2MemberName, OB < YB - 1 ? ", " : ""]
        }, BB.baf2MemberKey)))]
      })
    }

    function VP(BB) {
      let {
        card: OB,
        answered: GB,
        nowMs: DB,
        t: QB
      } = BB;
      const oB = ro(),
        [jB, yB] = (0, YB.useState)(new Map),
        JB = gJ(OB);
      if (!JB) return null;
      return (0, WQ.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, WQ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: QB(`${ZP}islandsLeftTitle`)
        }), (0, WQ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: JB.left.map((BB => {
            const YB = BB.baf2LeftKey,
              MB = XJ(jB.get(YB), GB, DB),
              PB = function(BB) {
                return 1 === BB ? [`${lJ}islandsLeftItemsOne`] : [`${lJ}islandsLeftItems`, {
                  count: String(BB)
                }]
              }(BB.baf2LeftItems);
            return (0, WQ.jsx)("li", {
              className: AD()("Baf2IslandPerson", {
                Pending: MB
              }),
              children: (0, WQ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, WQ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2LeftName
                }), (0, WQ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: QB(PB[0], PB[1])
                }), JB.claim && (0, WQ.jsx)(No.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: MB,
                  onClick: () => {
                    (BB => {
                      const GB = oB.sendIslandEdit(`baf2coopclaim ${OB.baf2IslandId} ${BB}`);
                      yB((OB => new Map(OB).set(BB, {
                        atMs: Date.now(),
                        answer: GB
                      })))
                    })(YB)
                  },
                  children: QB(`${ZP}islandsClaim`)
                })]
              })
            }, YB)
          }))
        }), JB.goThere && (0, WQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: QB(`${ZP}islandsClaimGoThere`)
        })]
      })
    }

    function SP(BB) {
      let {
        card: OB,
        view: GB,
        blocked: DB,
        maxIslands: QB,
        answered: oB,
        nowMs: jB,
        done: yB,
        openSocial: JB,
        t: MB
      } = BB;
      const PB = ro(),
        [zB, lB] = (0, YB.useState)(new Map),
        [pB, qB] = (0, YB.useState)(new Map),
        [ZB, NB] = (0, YB.useState)(null),
        RB = (0, YB.useRef)(null);
      bJ(RB);
      const WB = OB.baf2IslandId,
        AB = OB.baf2IslandCoop,
        VB = null !== AB && void 0 !== AB && AB.baf2CoopMembers.some((BB => BB.baf2MemberKey === ZB)) ? ZB : null,
        SB = function(BB, OB) {
          const GB = BB.baf2IslandCoop;
          return GB && rJ(GB) || null !== OB ? void 0 : BB.baf2IslandInvitable
        }(OB, DB),
        nB = function(BB, OB) {
          const GB = BB.baf2IslandCoop;
          return GB && rJ(GB) ? {
            key: `${lJ}islandsCoopFull`,
            params: {
              max: String(GB.baf2CoopMax)
            }
          } : void 0 !== BB.baf2IslandInvitable && null === OB || GB && !GB.baf2CoopManageHere ? null : "degraded" === OB || "stuck" === OB ? {
            key: `${lJ}islandsInviteNotLoaded`
          } : null === OB || function(BB) {
            return "notHome" === BB || "wilds" === BB || "visiting" === BB
          }(OB) || SJ(OB) ? {
            key: `${lJ}islandsInviteGoThere`
          } : {
            key: `${lJ}islandsInviteBusy`
          }
        }(OB, DB),
        UB = () => {
          var BB;
          NB(null), null === (BB = RB.current) || void 0 === BB || BB.focus()
        };
      return (0, WQ.jsxs)("div", {
        ref: RB,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...cJ(null === VB ? yB : UB),
        children: [AB && (0, WQ.jsxs)(WQ.Fragment, {
          children: [(0, WQ.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: MB(`${ZP}islandsPlayersTitle`, {
              count: String(AB.baf2CoopMembers.length),
              max: String(AB.baf2CoopMax)
            })
          }), (0, WQ.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: AB.baf2CoopMembers.map(((BB, OB) => {
              const YB = BB.baf2MemberKey,
                DB = XJ(zB.get(YB), oB, jB);
              return (0, WQ.jsxs)("li", {
                className: AD()("Baf2IslandPerson", {
                  Pending: DB
                }),
                children: [(0, WQ.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, WQ.jsx)("span", {
                    className: AD()("Baf2IslandPersonName", {
                      Here: BB.baf2MemberHere
                    }),
                    children: BB.baf2MemberName
                  }), BB.baf2MemberHere && (0, WQ.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: MB(`${ZP}islandsPlayerHere`)
                  }), 0 === OB && (0, WQ.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: MB(`${ZP}islandsPlayerOwner`)
                  }), GB.remove && OB > 0 && !DB && VB !== YB && (0, WQ.jsx)(No.R, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var BB;
                      NB(YB), null === (BB = RB.current) || void 0 === BB || BB.focus()
                    },
                    children: MB(`${ZP}islandsRemove`)
                  })]
                }), VB === YB && (0, WQ.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, WQ.jsx)("p", {
                    children: mJ(MB, `${ZP}islandsRemoveConfirm`, {
                      player: BB.baf2MemberName
                    })
                  }), (0, WQ.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, WQ.jsx)(No.Q, {
                      onClick: () => {
                        (BB => {
                          const OB = PB.sendIslandEdit(`baf2coopremove ${WB} ${BB.baf2MemberKey}`);
                          lB((GB => new Map(GB).set(BB.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: OB
                          }))), UB()
                        })(BB)
                      },
                      children: MB(`${ZP}islandsRemoveYes`)
                    }), (0, WQ.jsx)(No.f, {
                      onClick: UB,
                      children: MB(`${ZP}islandsCancel`)
                    })]
                  })]
                })]
              }, YB)
            }))
          })]
        }), (void 0 !== SB || null !== nB) && (0, WQ.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: MB(`${ZP}islandsInviteTitle`)
        }), !AB && (void 0 !== SB || null !== nB) && (0, WQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: MB(`${ZP}islandsInviteShareNote`)
        }), 0 === (null === SB || void 0 === SB ? void 0 : SB.length) && (0, WQ.jsx)(nP, {
          openSocial: JB,
          t: MB
        }), void 0 !== SB && SB.length > 0 && (0, WQ.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: SB.map((BB => {
            const OB = !0 === BB.baf2InvitableSent || XJ(pB.get(BB.baf2InvitableId), oB, jB);
            return (0, WQ.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, WQ.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, WQ.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2InvitableName
                }), BB.baf2InvitableFull && !OB && (0, WQ.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: MB(`${ZP}islandsInviteTheirFull`, {
                    max: String(QB)
                  })
                }), (OB || !BB.baf2InvitableFull) && (0, WQ.jsx)(No.v, {
                  className: "Baf2IslandPersonButton",
                  disabled: OB,
                  onClick: () => {
                    (BB => {
                      const OB = PB.sendIslandEdit(`baf2coopinvite ${WB} ${BB}`);
                      qB((GB => new Map(GB).set(BB, {
                        atMs: Date.now(),
                        answer: OB
                      })))
                    })(BB.baf2InvitableId)
                  },
                  children: MB(OB ? `${ZP}islandsInvited` : `${ZP}islandsInvite`)
                })]
              })
            }, BB.baf2InvitableId)
          }))
        }), nB && (0, WQ.jsx)(vJ, {
          note: nB,
          t: MB
        }), (0, WQ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, WQ.jsx)(No.f, {
            onClick: yB,
            children: MB(`${ZP}islandsDone`)
          })
        })]
      })
    }

    function nP(BB) {
      let {
        openSocial: OB,
        t: GB
      } = BB;
      return (0, WQ.jsxs)(WQ.Fragment, {
        children: [(0, WQ.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: GB(OB ? `${ZP}islandsInviteNobody` : `${ZP}islandsInviteNobodyGuest`)
        }), OB && (0, WQ.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, WQ.jsx)(No.f, {
            onClick: OB,
            children: GB("socialBar:social")
          })
        })]
      })
    }

    function UP(BB) {
      let {
        className: OB,
        text: GB,
        ConfirmButton: DB,
        confirmLabel: QB,
        canConfirm: oB,
        send: jB,
        done: yB,
        t: JB
      } = BB;
      const MB = (0, YB.useRef)(null);
      bJ(MB);
      const PB = () => {
        yB(null)
      };
      return (0, WQ.jsxs)("div", {
        ref: MB,
        tabIndex: -1,
        className: AD()("Baf2IslandForm", OB),
        ...cJ(PB),
        children: [(0, WQ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: GB
        }), (0, WQ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, WQ.jsx)(DB, {
            disabled: !oB,
            onClick: () => {
              oB && yB(jB())
            },
            children: QB
          }), (0, WQ.jsx)(No.f, {
            onClick: PB,
            children: JB(`${ZP}islandsCancel`)
          })]
        })]
      })
    }

    function fP(BB) {
      return "hidden" !== BB
    }

    function kP(BB) {
      var OB, GB;
      let {
        card: DB,
        keepOwn: QB,
        blocked: oB,
        maxIslands: jB,
        serverNowMs: yB,
        nowMs: JB,
        actions: MB,
        full: PB,
        waits: zB,
        answered: lB,
        mode: pB,
        setMode: qB,
        pending: ZB,
        onSent: NB,
        switchTo: RB,
        leave: WB,
        coopOn: AB,
        openSocial: VB,
        t: SB
      } = BB;
      const nB = ro(),
        UB = DB.baf2IslandActive,
        fB = UB ? null : function(BB, OB) {
          if (BB <= 0) return null;
          const GB = OB - BB;
          if (GB < MQ) return [`${lJ}islandsPlayedJustNow`];
          if (GB < pJ) return [`${lJ}islandsPlayedMinutes`, {
            minutes: String(Math.floor(GB / MQ))
          }];
          if (GB < qJ) return [`${lJ}islandsPlayedHours`, {
            hours: String(Math.floor(GB / pJ))
          }];
          const YB = Math.floor(GB / qJ);
          return 1 === YB ? [`${lJ}islandsPlayedDay`] : [`${lJ}islandsPlayedDays`, {
            days: String(YB)
          }]
        }(DB.baf2IslandLastPlayedMs, yB),
        kB = void 0 === (dB = DB.baf2IslandItems) ? null : 0 === dB ? [`${lJ}islandsItemsNone`] : 1 === dB ? [`${lJ}islandsItemsOne`] : [`${lJ}islandsItems`, {
          count: String(dB)
        }];
      var dB;
      const KB = function(BB) {
          return BB ? 1 === BB ? [`${lJ}islandsWaitingOne`] : [`${lJ}islandsWaiting`, {
            count: String(BB)
          }] : null
        }(DB.baf2IslandWaiting),
        uB = DB.baf2IslandUnreadable,
        mB = DB.baf2IslandCoop,
        IB = LJ(DB, MB, QB, PB, AB, oB),
        FB = (0, YB.useRef)(null);
      aJ(null !== pB, FB);
      const iB = () => {
          var BB;
          qB(null), null === (BB = FB.current) || void 0 === BB || BB.focus()
        },
        LB = (BB, OB) => {
          iB(), null !== BB && NB(BB, OB)
        },
        gB = (BB, OB) => SB(`${ZP}${BB}`, {
          time: qQ(SB, OB)
        });
      return (0, WQ.jsxs)("li", {
        ref: FB,
        tabIndex: -1,
        className: AD()("Baf2IslandCard", {
          Active: UB,
          Pending: ZB,
          Shared: void 0 !== mB
        }),
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, WQ.jsx)("strong", {
            className: "Baf2IslandName",
            children: DB.baf2IslandName
          }), UB && (0, WQ.jsx)("span", {
            className: "Baf2IslandBadge",
            children: SB(`${ZP}islandsOnThis`)
          }), mB && (0, WQ.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: SB(`${ZP}islandsShared`)
          })]
        }), "member" === (null === mB || void 0 === mB ? void 0 : mB.baf2CoopRole) && (0, WQ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: mJ(SB, `${ZP}islandsSharedBy`, {
            owner: mB.baf2CoopOwner
          })
        }), void 0 !== uB && (0, WQ.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: SB("newer" === uB ? `${ZP}islandsUnreadable` : `${ZP}islandsDamaged`)
        }), "corrupt" === uB && PB && (0, WQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: SB(`${ZP}islandsDamagedFull`)
        }), void 0 === uB && (0, WQ.jsxs)(WQ.Fragment, {
          children: [(0, WQ.jsx)(HJ, {
            tier: DB.baf2IslandTier,
            t: SB
          }), (0, WQ.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, WQ.jsx)("span", {
              children: 1 === DB.baf2IslandQuestsDone ? SB(`${ZP}islandsQuestsDoneOne`) : SB(`${ZP}islandsQuestsDone`, {
                count: String(DB.baf2IslandQuestsDone)
              })
            }), (0, WQ.jsx)("span", {
              children: 1 === DB.baf2IslandMachines ? SB(`${ZP}islandsMachinesOne`) : SB(`${ZP}islandsMachines`, {
                count: String(DB.baf2IslandMachines)
              })
            }), kB && (0, WQ.jsx)("span", {
              children: SB(kB[0], kB[1])
            }), KB && (0, WQ.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: SB(KB[0], KB[1])
            }), fB && (0, WQ.jsx)("span", {
              children: SB(fB[0], fB[1])
            })]
          })]
        }), mB && void 0 === mB.baf2CoopState && "people" !== pB && (0, WQ.jsx)(AP, {
          members: mB.baf2CoopMembers,
          t: SB
        }), null === pB && (0, WQ.jsx)(VP, {
          card: DB,
          answered: lB,
          nowMs: JB,
          t: SB
        }), IB.note && (0, WQ.jsx)(vJ, {
          note: IB.note,
          className: AD()({
            Unreachable: void 0 !== (null === mB || void 0 === mB ? void 0 : mB.baf2CoopState)
          }),
          t: SB
        }), "rename" === pB && (0, WQ.jsx)(RP, {
          card: DB,
          canRename: "enabled" === IB.rename,
          done: LB,
          t: SB
        }), "delete" === pB && (0, WQ.jsx)(WP, {
          card: DB,
          canDelete: "enabled" === IB.delete,
          done: BB => {
            LB(BB, mB ? "delete" : void 0)
          },
          t: SB
        }), "people" === pB && (0, WQ.jsx)(SP, {
          card: DB,
          view: IB,
          blocked: oB,
          maxIslands: jB,
          answered: lB,
          nowMs: JB,
          done: iB,
          openSocial: VB,
          t: SB
        }), "leave" === pB && (0, WQ.jsx)(UP, {
          className: "Leave",
          text: mJ(SB, `${ZP}islandsLeaveConfirm`, {
            island: DB.baf2IslandName,
            owner: null !== (OB = null === (GB = DB.baf2IslandCoop) || void 0 === GB ? void 0 : GB.baf2CoopOwner) && void 0 !== OB ? OB : ""
          }),
          ConfirmButton: No.Q,
          confirmLabel: SB(`${ZP}islandsLeaveYes`),
          canConfirm: "enabled" === IB.leave,
          send: () => NP(nB, DB),
          done: BB => {
            LB(BB, "leave"), null !== BB && UB && WB()
          },
          t: SB
        }), "unshare" === pB && (0, WQ.jsx)(UP, {
          className: "Unshare",
          text: mJ(SB, `${ZP}islandsStopSharingConfirm`, {
            island: DB.baf2IslandName
          }),
          ConfirmButton: No.v,
          confirmLabel: SB(`${ZP}islandsStopSharing`),
          canConfirm: "enabled" === IB.unshare,
          send: () => nB.sendIslandEdit(`baf2coopunshare ${DB.baf2IslandId}`),
          done: BB => {
            LB(BB), null !== BB && WB()
          },
          t: SB
        }), null === pB && !ZB && (0, WQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": DB.baf2IslandName,
          children: [fP(IB.switch) && (0, WQ.jsx)(No.v, {
            disabled: "enabled" !== IB.switch,
            onClick: RB,
            children: "tryAgain" === IB.switchLabel ? SB(`${ZP}islandsTryAgain`) : zB.switch > 0 ? gB("islandsSwitchIn", zB.switch) : SB(`${ZP}islandsSwitch`)
          }), fP(IB.rename) && (0, WQ.jsx)(No.f, {
            disabled: "enabled" !== IB.rename,
            onClick: () => {
              qB("rename")
            },
            children: SB(`${ZP}islandsRename`)
          }), fP(IB.people) && (0, WQ.jsx)(No.f, {
            disabled: "enabled" !== IB.people,
            onClick: () => {
              qB("people")
            },
            children: SB("players" === IB.peopleLabel ? `${ZP}islandsPlayersButton` : `${ZP}islandsInviteButton`)
          }), fP(IB.unshare) && (0, WQ.jsx)(No.f, {
            disabled: "enabled" !== IB.unshare,
            onClick: () => {
              qB("unshare")
            },
            children: SB(`${ZP}islandsStopSharing`)
          }), fP(IB.dismiss) && (0, WQ.jsx)(No.f, {
            disabled: "enabled" !== IB.dismiss,
            onClick: () => {
              NB(NP(nB, DB), "dismiss"), UB && WB()
            },
            children: SB(`${ZP}islandsDismiss`)
          }), fP(IB.leave) && (0, WQ.jsx)(No.R, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== IB.leave,
            onClick: () => {
              qB("leave")
            },
            children: UB && zB.switch > 0 ? gB("islandsLeaveIn", zB.switch) : SB(`${ZP}islandsLeave`)
          }), fP(IB.delete) && (0, WQ.jsx)(No.R, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== IB.delete,
            onClick: () => {
              qB("delete")
            },
            children: zB.change > 0 && IB.deleteWaits ? gB("islandsDeleteIn", zB.change) : SB(`${ZP}islandsDelete`)
          })]
        })]
      })
    }
    const dP = "buildAFactory2Game:";

    function KP(BB) {
      let {
        invite: OB,
        actions: GB,
        full: DB,
        maxIslands: QB,
        waitSeconds: oB,
        focus: jB,
        focused: yB,
        join: JB,
        decline: MB,
        t: PB
      } = BB;
      const [zB, lB] = (0, YB.useState)(!1), pB = (0, YB.useRef)(null);
      aJ(zB, pB), (0, YB.useEffect)((() => {
        var BB;
        jB && (lB(!0), null === (BB = pB.current) || void 0 === BB || BB.focus(), yB())
      }), [jB, yB]);
      const qB = function(BB, OB, GB, YB, DB) {
          return GB ? {
            join: !1,
            note: {
              key: `${lJ}islandsJoinTooMany`,
              params: {
                max: String(YB)
              }
            }
          } : BB.baf2InvitePlayers >= DB ? {
            join: !1,
            note: {
              key: `${lJ}islandsJoinFull`
            }
          } : {
            join: OB.switch,
            note: null
          }
        }(OB, GB, DB, QB, 10),
        ZB = OB.baf2InviteIsland,
        NB = OB.baf2InvitePlayers,
        RB = () => {
          var BB;
          lB(!1), null === (BB = pB.current) || void 0 === BB || BB.focus()
        },
        WB = oB > 0 && null === qB.note ? PB(`${dP}islandsJoinIn`, {
          time: qQ(PB, oB)
        }) : PB(`${dP}islandsJoin`);
      return (0, WQ.jsxs)("li", {
        ref: pB,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...zB ? cJ(RB) : {},
        children: [(0, WQ.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, WQ.jsx)("strong", {
            className: "Baf2IslandName",
            children: ZB
          })
        }), (0, WQ.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: mJ(PB, `${dP}islandsInvitedBy`, {
            owner: OB.baf2InviteOwner
          })
        }), (0, WQ.jsx)(HJ, {
          tier: OB.baf2InviteTier,
          t: PB
        }), (0, WQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, WQ.jsx)("span", {
            children: 1 === NB ? PB(`${dP}islandsPlayersCountOne`) : PB(`${dP}islandsPlayersCount`, {
              count: String(NB)
            })
          })
        }), qB.note && (0, WQ.jsx)(vJ, {
          note: qB.note,
          t: PB
        }), zB && (0, WQ.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: mJ(PB, `${dP}islandsJoinConfirm`, {
            island: ZB
          })
        }), !zB && (0, WQ.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": ZB,
          children: [(0, WQ.jsx)(No.v, {
            disabled: !qB.join,
            onClick: () => {
              var BB;
              lB(!0), null === (BB = pB.current) || void 0 === BB || BB.focus()
            },
            children: WB
          }), (0, WQ.jsx)(No.f, {
            onClick: MB,
            children: PB(`${dP}islandsDecline`)
          })]
        }), zB && (0, WQ.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, WQ.jsx)(No.v, {
            disabled: !qB.join,
            onClick: JB,
            children: PB(`${dP}islandsJoinYes`)
          }), (0, WQ.jsx)(No.f, {
            onClick: RB,
            children: PB(`${dP}islandsCancel`)
          })]
        })]
      })
    }

    function uP(BB) {
      let {
        invites: OB,
        actions: GB,
        full: YB,
        maxIslands: DB,
        waitSeconds: QB,
        focus: oB,
        focused: jB,
        leave: yB,
        declined: JB,
        t: MB
      } = BB;
      const PB = ro();
      return (0, WQ.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, WQ.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: MB(`${dP}islandsInvitesTitle`)
        }), (0, WQ.jsx)("ul", {
          className: "Baf2IslandCards",
          children: OB.map((BB => {
            const OB = BB.baf2InviteId;
            return (0, WQ.jsx)(KP, {
              invite: BB,
              actions: GB,
              full: YB,
              maxIslands: DB,
              waitSeconds: QB,
              focus: oB === OB,
              focused: jB,
              join: () => {
                PB.send(`baf2coopaccept ${OB}`), yB()
              },
              decline: () => {
                PB.send(`baf2coopdecline ${OB}`), JB(OB)
              },
              t: MB
            }, OB)
          }))
        })]
      })
    }
    const mP = "buildAFactory2Game:";

    function IP(BB) {
      let {
        cards: OB,
        activeName: GB,
        canStart: DB,
        waitSeconds: QB,
        leave: oB,
        t: jB
      } = BB;
      const yB = ro(),
        [JB, MB] = (0, YB.useState)(!1),
        [PB, zB] = (0, YB.useState)(""),
        lB = (0, YB.useRef)(null);
      aJ(JB, lB), (0, YB.useEffect)((() => {
        var BB;
        JB && (null === (BB = lB.current) || void 0 === BB || BB.focus())
      }), [JB]);
      const pB = WJ(OB),
        qB = NJ(PB),
        ZB = RJ(qB),
        NB = () => {
          DB && !ZB && (yB.send("" === qB || qB === pB ? HB : `${HB} ${qB}`), oB())
        },
        RB = () => {
          var BB;
          MB(!1), null === (BB = lB.current) || void 0 === BB || BB.focus()
        };
      return (0, WQ.jsxs)("li", {
        ref: lB,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...JB ? cJ(RB) : {},
        children: [(0, WQ.jsx)("strong", {
          className: "Baf2IslandName",
          children: jB(`${mP}islandsNewTitle`)
        }), !JB && (0, WQ.jsx)("p", {
          className: "Baf2IslandStats",
          children: jB(`${mP}islandsNewNote`)
        }), JB && (0, WQ.jsxs)(WQ.Fragment, {
          children: [(0, WQ.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: mJ(jB, `${mP}islandsNewConfirm`, {
              name: GB
            })
          }), (0, WQ.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [jB(`${mP}islandsNewNameLabel`), (0, WQ.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: PB,
              placeholder: pB,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: hJ,
              onChange: BB => {
                zB(BB.target.value)
              },
              ...EJ(NB, RB)
            })]
          }), ZB && (0, WQ.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: jB(`${mP}islandsNameReserved`)
          })]
        }), (0, WQ.jsxs)("div", {
          className: AD()("Baf2IslandButtons", {
            Stacked: JB
          }),
          children: [(0, WQ.jsx)(No.v, {
            disabled: !DB || JB && ZB,
            onClick: () => {
              if (!JB) return zB(pB), void MB(!0);
              NB()
            },
            children: QB > 0 ? jB(`${mP}islandsNewIn`, {
              time: qQ(jB, QB)
            }) : jB(JB ? `${mP}islandsNewConfirmButton` : `${mP}islandsNew`)
          }), JB && (0, WQ.jsx)(No.f, {
            onClick: RB,
            children: jB(`${mP}islandsCancel`)
          })]
        })]
      })
    }

    function FP(BB) {
      var OB, GB;
      let {
        message: DB,
        arrivedAtMs: QB,
        close: oB,
        leave: jB,
        openSocial: yB
      } = BB;
      const JB = ro(),
        {
          t: MB
        } = (0, UD.H)(),
        PB = CJ(1e3),
        [zB, lB] = (0, YB.useState)(null),
        [pB, qB] = (0, YB.useState)(new Map),
        [ZB, NB] = (0, YB.useState)(new Set),
        RB = DB.baf2IslandCards,
        WB = function(BB, OB, GB, YB) {
          return (null !== BB && void 0 !== BB ? BB : []).filter((BB => OB + BB.baf2InviteLeftMs > GB && !YB.has(BB.baf2InviteId)))
        }(DB.baf2IslandsInvites, QB, PB, ZB),
        AB = WB.map((BB => BB.baf2InviteId)).join(" "),
        VB = (0, YB.useRef)(null),
        SB = eJ(VB);
      TJ(), (0, YB.useEffect)((() => {
        var BB, OB;
        null !== (BB = VB.current) && void 0 !== BB && BB.contains(document.activeElement) || (null === (OB = VB.current) || void 0 === OB || OB.focus())
      }), [DB, AB]), (0, YB.useEffect)((() => {
        qB((BB => function(BB, OB, GB, YB) {
          const DB = new Map;
          for (const QB of OB) {
            const OB = BB.get(QB.baf2IslandId);
            OB && (void 0 !== OB.untilGone || YB < OB.answer) && kJ(OB, QB, GB) && DB.set(QB.baf2IslandId, OB)
          }
          return DB.size === BB.size ? BB : DB
        }(BB, DB.baf2IslandCards, Date.now(), DB.baf2IslandsAnswered)))
      }), [DB]);
      const nB = ZJ(QB, DB.baf2IslandsWaitMs, PB),
        UB = DB.baf2IslandsBlocked,
        fB = nJ(UB, nB),
        kB = function(BB, OB) {
          const GB = nJ(BB, 0);
          return {
            switch: GB.switch ? OB : 0,
            change: GB.change ? OB : 0
          }
        }(UB, nB),
        dB = RB.length >= DB.baf2IslandsMax,
        KB = RB.length > 0,
        uB = function(BB, OB, GB) {
          return BB + Math.max(0, GB - OB)
        }(DB.baf2IslandsNowMs, QB, PB),
        mB = null !== (OB = null === (GB = RB.find((BB => BB.baf2IslandActive))) || void 0 === GB ? void 0 : GB.baf2IslandName) && void 0 !== OB ? OB : "",
        IB = function(BB) {
          const OB = BB.filter(iJ).length;
          return OB <= 1 && OB < BB.length
        }(RB),
        FB = !0 === DB.baf2IslandsCoop,
        iB = function(BB, OB) {
          const GB = BB.find((BB => BB.baf2IslandActive)),
            YB = null === GB || void 0 === GB ? void 0 : GB.baf2IslandCoop;
          return GB && "member" === (null === YB || void 0 === YB ? void 0 : YB.baf2CoopRole) ? {
            key: `${lJ}islandsKeepOwnMember`,
            names: {
              owner: YB.baf2CoopOwner,
              island: GB.baf2IslandName
            }
          } : {
            key: OB ? `${lJ}islandsKeepOwn` : `${lJ}islandsKeepOwnSolo`
          }
        }(RB, FB),
        [LB, gB] = (0, YB.useState)(null);
      (0, YB.useEffect)((() => {
        void 0 !== DB.baf2IslandsFocusInvite && gB(DB.baf2IslandsFocusInvite)
      }), [DB]);
      const rB = (0, YB.useCallback)((() => {
          gB(null)
        }), []),
        XB = zB ? RB.find((BB => BB.baf2IslandId === zB.id)) : void 0,
        wB = zB && XB && "hidden" !== LJ(XB, fB, IB, dB, FB, UB)[zB.mode] ? zB : null;
      return (0, WQ.jsx)(Zo.d, {
        close: oB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, WQ.jsxs)("section", {
          ref: VB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: SB ? {
            marginTop: `${SB.marginTop}px`,
            maxHeight: `${SB.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              children: [(0, WQ.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: MB(`${mP}islandsTitle`)
              }), KB && (0, WQ.jsx)("p", {
                children: MB(`${mP}islandsSubtitle`, {
                  count: String(RB.length),
                  max: String(DB.baf2IslandsMax)
                })
              })]
            }), (0, WQ.jsx)(No.m, {
              ariaLabel: MB(`${mP}islandsClose`),
              onClick: oB
            })]
          }), (0, WQ.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== UB && (0, WQ.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: mJ(MB, AJ(UB, VJ(RB)), {
                island: mB
              })
            }), KB && WB.length > 0 && (0, WQ.jsx)(uP, {
              invites: WB,
              actions: fB,
              full: dB,
              maxIslands: DB.baf2IslandsMax,
              waitSeconds: kB.switch,
              focus: LB,
              focused: rB,
              leave: jB,
              declined: BB => {
                NB((OB => new Set(OB).add(BB)))
              },
              t: MB
            }), KB && (0, WQ.jsxs)(WQ.Fragment, {
              children: [dB && (0, WQ.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: MB(`${mP}islandsFull`, {
                  max: String(DB.baf2IslandsMax)
                })
              }), (0, WQ.jsx)("p", {
                className: "Baf2IslandsNote",
                children: mJ(MB, iB.key, iB.names)
              }), (0, WQ.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [RB.map((BB => {
                  const OB = BB.baf2IslandId;
                  return (0, WQ.jsx)(kP, {
                    card: BB,
                    keepOwn: IB,
                    coopOn: FB,
                    openSocial: yB,
                    blocked: UB,
                    maxIslands: DB.baf2IslandsMax,
                    serverNowMs: uB,
                    nowMs: PB,
                    actions: fB,
                    full: dB,
                    waits: kB,
                    answered: DB.baf2IslandsAnswered,
                    mode: (null === wB || void 0 === wB ? void 0 : wB.id) === OB ? wB.mode : null,
                    setMode: BB => {
                      lB(null === BB ? null : {
                        id: OB,
                        mode: BB
                      })
                    },
                    pending: kJ(pB.get(OB), BB, PB),
                    onSent: (GB, YB) => {
                      qB((DB => {
                        const QB = {
                          atMs: Date.now(),
                          from: BB.baf2IslandName,
                          answer: GB
                        };
                        return new Map(DB).set(OB, YB ? {
                          ...QB,
                          untilGone: YB
                        } : QB)
                      }))
                    },
                    leave: jB,
                    switchTo: () => {
                      JB.send(`baf2islandswitch ${OB}`), jB()
                    },
                    t: MB
                  }, OB)
                })), !dB && (0, WQ.jsx)(IP, {
                  cards: RB,
                  activeName: mB,
                  canStart: fB.change,
                  waitSeconds: kB.change,
                  leave: jB,
                  t: MB
                })]
              })]
            })]
          })]
        })
      })
    }
    var iP = GB(5512);
    const LP = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        lQ: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      gP = Object.keys(LP),
      rP = new Set([...Object.keys(HO), ...[...iO.Press.recipes, ...iO["Wire Mill"].recipes].map((BB => BB.output))]),
      XP = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      wP = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      EP = / Bar$|Alloy$/,
      cP = /Porkchop|Beef|Mutton|Venison|Steak/,
      hP = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const aP = (0, YB.memo)((function(BB) {
      let {
        item: OB,
        name: GB,
        amount: YB,
        selected: DB,
        small: QB,
        onPick: oB
      } = BB;
      return (0, WQ.jsxs)("button", {
        type: "button",
        className: AD()("Baf2TermTile", {
          On: DB,
          Small: QB
        }),
        "aria-label": `${GB}: ${YB}`,
        "aria-pressed": DB,
        onClick: () => {
          oB(OB)
        },
        children: [(0, WQ.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: OB,
            amount: 0
          })
        }), (0, WQ.jsx)("span", {
          className: "Baf2TermCount",
          children: lQ(YB, 1e4)
        }), !QB && (0, WQ.jsx)("span", {
          className: "Baf2TermName",
          children: GB
        })]
      })
    }));

    function eP(BB) {
      let {
        store: OB,
        close: GB,
        send: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)(), {
        isTouchScreen: oB
      } = (0, ND.o)(["isTouchScreen"]);
      ! function(BB) {
        const [OB, GB] = (0, YB.useState)(BB.version);
        (0, YB.useEffect)((() => (GB(BB.version), BB.subscribe((() => {
          GB(BB.version)
        })))), [BB])
      }(OB);
      const [jB, yB] = (0, YB.useState)("all"), [JB, MB] = (0, YB.useState)(!1), [PB, zB] = (0, YB.useState)(""), [lB, pB] = (0, YB.useState)(""), [qB, ZB] = (0, YB.useState)(null), [NB, RB] = (0, YB.useState)(!1), [WB, AB, VB] = function() {
        const BB = (0, YB.useRef)(null),
          [OB, GB] = (0, YB.useState)(!1),
          DB = () => {
            const OB = BB.current;
            GB(null !== OB && OB.scrollLeft + OB.clientWidth < OB.scrollWidth - 1)
          };
        return (0, YB.useEffect)(DB), (0, YB.useEffect)((() => {
          const OB = BB.current;
          if (!OB) return;
          const GB = new ResizeObserver(DB);
          return GB.observe(OB), () => {
            GB.disconnect()
          }
        }), []), [BB, OB, DB]
      }(), SB = (0, YB.useMemo)((() => new Map), [QB]), nB = BB => {
        let OB = SB.get(BB);
        return void 0 === OB && (OB = function(BB, OB) {
          const GB = /^(.+) \((.+)\)$/.exec(BB);
          return GB ? OB(GB[2], GB[1]) : BB
        }((0, xD.g)(QB, BB), ((BB, OB) => QB("buildAFactory2Game:terminalTileKind", {
          kind: BB,
          base: OB
        }))), SB.set(BB, OB)), OB
      }, UB = OB.isReadOnly(), fB = NB && !UB, kB = OB.recent(), dB = OB.items(), KB = lB.trim().toLowerCase(), uB = fB ? OB.heldItems(qB) : ("recent" === jB ? kB : dB).filter((BB => {
        const OB = nB(BB);
        return ("all" === jB || "recent" === jB || function(BB) {
          return oQ(BB) ? "farm" : XP.test(BB) ? "nuclear" : EP.test(BB) ? "bars" : cP.test(BB) ? "farm" : wP.test(BB) ? "lQ" : rP.has(BB) ? "parts" : hP.test(BB) ? "farm" : "other"
        }(BB) === jB) && ("" === KB || OB.toLowerCase().includes(KB)) && ("" === PB || OB.toUpperCase().startsWith(PB))
      })), mB = new Set(dB.map((BB => nB(BB).charAt(0).toUpperCase()))), IB = BB => fB ? OB.heldAmount(BB) : OB.amount(BB), FB = !fB && "recent" !== jB && kB.length > 0, iB = function(BB, OB) {
        return null !== BB && OB.includes(BB) ? BB : null
      }(qB, FB ? [...uB, ...kB] : uB), LB = null === iB ? 0 : OB.amount(iB), gB = null === iB ? 0 : IB(iB), rB = (0, YB.useCallback)((BB => {
        ZB((OB => OB === BB ? null : BB))
      }), []), XB = BB => gB > 0 || fB && null === iB && "fill" === BB && uB.length > 0, wB = fB ? [
        ["one", QB("buildAFactory2Game:terminalStoreOne")],
        ["stack", QB("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", QB(null === iB ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", QB("buildAFactory2Game:terminalTakeOne")],
        ["stack", QB("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", QB("buildAFactory2Game:terminalFill")]
      ], EB = fB ? QB("buildAFactory2Game:terminalStoreEmpty") : "" !== PB ? QB("buildAFactory2Game:terminalEmptyLetter", {
        letter: PB
      }) : "" !== KB ? QB("buildAFactory2Game:terminalEmptySearch", {
        query: lB
      }) : QB("buildAFactory2Game:terminalEmpty");
      return (0, WQ.jsx)(Zo.d, {
        close: GB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              children: [(0, WQ.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: QB(OB.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, WQ.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, WQ.jsx)("span", {
                  className: AD()({
                    Off: fB
                  }),
                  children: QB("buildAFactory2Game:terminalSubtitle", {
                    count: String(OB.siloCount())
                  })
                }), !UB && (0, WQ.jsx)("span", {
                  className: AD()({
                    Off: !fB
                  }),
                  children: QB("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !UB && (0, WQ.jsx)(iP.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: QB("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: QB("buildAFactory2Game:terminalModeStore")
              }],
              value: fB ? "store" : "take",
              onChange: BB => {
                RB("store" === BB), ZB(null)
              },
              ariaLabel: QB("buildAFactory2Game:terminalModes")
            }), (0, WQ.jsx)(No.m, {
              onClick: GB
            })]
          }), (0, WQ.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, WQ.jsxs)("div", {
              className: AD()("Baf2TermTools", {
                Hidden: fB
              }),
              children: [(0, WQ.jsx)("div", {
                ref: WB,
                className: AD()("Baf2TermChips", {
                  MoreRight: AB
                }),
                onScroll: VB,
                children: JB ? (0, WQ.jsxs)(WQ.Fragment, {
                  children: [(0, WQ.jsx)("button", {
                    type: "button",
                    "aria-label": QB("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      MB(!1), zB("")
                    },
                    children: "\u2190"
                  }), [...mB].sort().map((BB => (0, WQ.jsx)("button", {
                    type: "button",
                    className: AD()({
                      On: PB === BB
                    }),
                    onClick: () => {
                      zB(PB === BB ? "" : BB)
                    },
                    children: BB
                  }, BB)))]
                }) : (0, WQ.jsxs)(WQ.Fragment, {
                  children: [(0, WQ.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      MB(!0)
                    },
                    children: QB("buildAFactory2Game:terminalLetters")
                  }), gP.map((BB => (0, WQ.jsx)("button", {
                    type: "button",
                    className: AD()({
                      On: jB === BB
                    }),
                    onClick: () => {
                      yB(BB)
                    },
                    children: QB(LP[BB])
                  }, BB)))]
                })
              }), !oB && (0, WQ.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: lB,
                placeholder: QB("buildAFactory2Game:terminalSearch"),
                "aria-label": QB("buildAFactory2Game:terminalSearch"),
                onChange: BB => {
                  pB(BB.target.value)
                },
                onKeyDown: BB => {
                  BB.stopPropagation()
                }
              }), (0, WQ.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": QB("buildAFactory2Game:terminalResort"),
                title: QB("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  OB.resort()
                },
                children: "\u21c5"
              })]
            }), FB && (0, WQ.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, WQ.jsx)("span", {
                children: QB(LP.recent)
              }), kB.map((BB => (0, WQ.jsx)(aP, {
                item: BB,
                name: nB(BB),
                amount: OB.amount(BB),
                selected: iB === BB,
                small: !0,
                onPick: rB
              }, BB)))]
            }), (0, WQ.jsx)("div", {
              className: "Baf2TermTiles",
              children: uB.length > 0 ? uB.map((BB => (0, WQ.jsx)(aP, {
                item: BB,
                name: nB(BB),
                amount: IB(BB),
                selected: iB === BB,
                onPick: rB
              }, BB))) : (0, WQ.jsx)("p", {
                className: "Baf2TermEmpty",
                children: EB
              })
            }), (0, WQ.jsxs)("div", {
              className: AD()("Baf2TermActions", {
                Hidden: fB && 0 === uB.length
              }),
              children: [(0, WQ.jsx)("span", {
                className: "Baf2TermPicked",
                children: UB ? (0, WQ.jsxs)(WQ.Fragment, {
                  children: [null !== iB && LB > 0 ? nB(iB) : QB("buildAFactory2Game:terminalVisiting"), (0, WQ.jsx)("small", {
                    children: QB("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== iB ? (0, WQ.jsxs)(WQ.Fragment, {
                  children: [nB(iB), (0, WQ.jsx)("small", {
                    children: QB("buildAFactory2Game:terminalStored", {
                      amount: LB.toLocaleString()
                    })
                  })]
                }) : QB(fB ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !UB && wB.map((BB => {
                let [GB, YB] = BB;
                const QB = "fill" === GB ? No.q : No.f;
                return (0, WQ.jsx)(QB, {
                  className: "Baf2TermTake",
                  disabled: !XB(GB),
                  onClick: () => {
                    (BB => {
                      XB(BB) && DB(null === iB ? OB.putAll() : fB ? OB.put(BB, iB) : OB.take(BB, iB))
                    })(GB)
                  },
                  children: YB
                }, GB)
              }))]
            })]
          })]
        })
      })
    }

    function TP(BB) {
      let {
        kind: OB,
        icon: GB,
        label: YB,
        number: DB,
        preview: QB,
        note: oB,
        tone: jB = null,
        share: yB,
        onExplain: JB
      } = BB;
      return (0, WQ.jsxs)("button", {
        type: "button",
        className: AD()("NxLane", OB, {
          Warn: "warn" === jB,
          Danger: "danger" === jB
        }),
        onClick: JB,
        children: [(0, WQ.jsxs)("span", {
          className: "NxLaneHead",
          children: [GB, (0, WQ.jsx)("span", {
            className: "NxLaneLabel",
            children: YB
          })]
        }), (0, WQ.jsxs)("span", {
          className: "NxLaneNum",
          children: [DB, QB && (0, WQ.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", QB]
          })]
        }), (0, WQ.jsx)("span", {
          className: "NxLaneNote",
          children: oB
        }), void 0 !== yB && (0, WQ.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, yB)) + "%"
          }
        })]
      })
    }

    function bP(BB) {
      let {
        kind: OB,
        step: GB,
        short: YB,
        planned: DB
      } = BB;
      return (0, WQ.jsx)("i", {
        className: AD()("NxPipe", OB, `Step${GB}`, {
          Short: YB,
          Planned: DB
        }),
        "aria-hidden": "true"
      })
    }

    function CP(BB) {
      let {
        max: OB,
        bands: GB,
        ticks: YB,
        now: DB,
        settle: QB,
        settleTone: oB,
        onExplain: jB
      } = BB;
      const yB = BB => Math.max(0, Math.min(OB, BB)) / OB * 100 + "%";
      let JB = 0;
      return (0, WQ.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: jB,
        children: [(0, WQ.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [GB.map((BB => {
            const OB = {
              bottom: yB(JB),
              height: `calc(${yB(BB.upTo)} - ${yB(JB)})`
            };
            return JB = BB.upTo, (0, WQ.jsx)("i", {
              className: AD()("NxGaugeBand", BB.kind),
              style: OB
            }, BB.kind)
          })), null !== DB && (0, WQ.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: yB(DB)
            }
          }), void 0 !== QB && null !== QB && (0, WQ.jsx)("i", {
            className: AD()("NxGaugeSettle", {
              Bad: "bad" === oB
            }),
            style: {
              bottom: yB(QB)
            }
          })]
        }), (0, WQ.jsx)("span", {
          className: "NxGaugeTicks",
          children: YB.map((BB => (0, WQ.jsx)("small", {
            style: {
              bottom: yB(BB)
            },
            children: BB
          }, BB)))
        })]
      })
    }

    function HP(BB) {
      const [OB, GB] = (0, YB.useState)(null), [DB, QB] = (0, YB.useState)((() => {
        try {
          return null === window.localStorage.getItem(BB)
        } catch {
          return !1
        }
      })), oB = (0, YB.useRef)(null);
      (0, YB.useEffect)((() => () => {
        null !== oB.current && clearTimeout(oB.current)
      }), []);
      const jB = (0, YB.useCallback)((OB => {
          GB(OB), QB(!1);
          try {
            window.localStorage.setItem(BB, "1")
          } catch {}
          null !== oB.current && clearTimeout(oB.current), oB.current = setTimeout((() => {
            oB.current = null, GB(null)
          }), 5e3)
        }), [BB]),
        yB = (0, YB.useCallback)(((OB, GB) => {
          const YB = `${BB}:${OB}`;
          try {
            if (null !== window.localStorage.getItem(YB)) return;
            window.localStorage.setItem(YB, "1")
          } catch {
            return
          }
          jB(GB)
        }), [jB, BB]);
      return {
        explained: OB,
        hinting: DB,
        explain: jB,
        explainOnce: yB
      }
    }

    function vP(BB) {
      let {
        text: OB,
        tone: GB,
        explained: YB
      } = BB;
      return (0, WQ.jsxs)("p", {
        className: AD()("NxStatus", null === YB ? GB : "Explain"),
        "aria-live": "polite",
        children: [null !== YB && (0, WQ.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== YB && void 0 !== YB ? YB : OB]
      })
    }
    const sP = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function xP(BB, OB) {
      const GB = Number(BB[OB]);
      return 1 === GB || 2 === GB || 3 === GB ? GB : 0
    }

    function tP(BB) {
      return !!Ry("reactor", BB.baf2RxNeed) || void 0 !== BB.baf2RxLayout && BB.baf2RxNeed.some((BB => {
        let [OB, GB] = BB;
        return GB > 0 && sP.includes(OB)
      }))
    }
    const Bz = "buildAFactory2Game:";

    function Oz(BB) {
      let {
        status: OB,
        store: GB,
        busy: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)();
      return function(BB) {
        return 0 !== (BB.baf2RxFlags & qO) && (!BB.baf2RxFormed || void 0 !== BB.baf2RxLayout)
      }(OB) ? (0, WQ.jsx)(No.q, {
        disabled: !tP(OB) || YB,
        onClick: () => {
          GB.tap("fill", (() => {
            GB.send("fill")
          }))
        },
        children: DB(void 0 !== OB.baf2RxLayout ? `${Bz}rxFillLayout` : `${Bz}rxFill`)
      }) : null
    }

    function Gz(BB) {
      let {
        status: OB,
        store: GB,
        readOnly: DB,
        bare: QB = !1
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), jB = OB.baf2RxLayout, [yB, JB, MB] = OB.baf2RxDims, PB = (0, YB.useMemo)((() => {
        if (void 0 === jB) return 0;
        const BB = Uint8Array.from(jB, ((BB, OB) => xP(jB, OB)));
        return vj([yB - 2, JB - 2, MB - 2], BB).max
      }), [jB, yB, JB, MB]);
      return void 0 === jB ? null : (0, WQ.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!QB && (0, WQ.jsx)("span", {
          className: "Baf2RxHint",
          children: oB(`${Bz}rxLayoutLine`, {
            amount: fy(PB)
          })
        }), !DB && (0, WQ.jsx)(No.f, {
          onClick: () => {
            GB.send("layout", 0)
          },
          children: oB(`${Bz}rxLayoutHide`)
        })]
      })
    }
    const Yz = "buildAFactory2Game:",
      Dz = {
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

    function Qz(BB) {
      let {
        id: OB,
        title: GB,
        body: YB,
        bodyParams: DB,
        yes: QB,
        cancel: oB,
        confirm: jB
      } = BB;
      const {
        t: yB
      } = (0, UD.H)();
      return (0, WQ.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": OB,
        children: [(0, WQ.jsx)("h3", {
          id: OB,
          children: yB(GB)
        }), (0, WQ.jsx)("p", {
          children: yB(YB, DB)
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, WQ.jsx)(No.j, {
            onClick: oB,
            children: yB(`${Yz}rxCancel`)
          }), (0, WQ.jsx)(No.Q, {
            onClick: jB,
            children: yB(QB)
          })]
        })]
      })
    }

    function oz(BB) {
      const [OB, GB] = (0, YB.useState)((() => BB.get()));
      return (0, YB.useEffect)((() => (GB(BB.get()), BB.subscribe((() => {
        GB(BB.get())
      })))), [BB]), OB
    }

    function jz(BB) {
      let {
        kind: OB,
        cap: GB,
        busy: DB = !1,
        whyNot: QB = null,
        apart: oB
      } = BB;
      const {
        t: jB
      } = (0, UD.H)(), [yB, JB] = (0, YB.useState)(!1), MB = null !== QB, PB = (0, YB.useRef)(null);
      if ((0, YB.useEffect)((() => {
          MB && JB(!1)
        }), [MB]), (0, YB.useLayoutEffect)((() => {
          var BB;
          const OB = null === (BB = PB.current) || void 0 === BB ? void 0 : BB.firstElementChild;
          MB ? null === OB || void 0 === OB || OB.setAttribute("aria-disabled", "true") : DB || null === OB || void 0 === OB || OB.removeAttribute("aria-disabled")
        })), !yB || MB) return (0, WQ.jsx)("span", {
        ref: PB,
        className: "Baf2RxApartWrap",
        children: (0, WQ.jsx)(No.j, {
          disabled: DB,
          className: AD()({
            Baf2RxNotYet: MB
          }),
          onClick: () => {
            QB ? QB() : JB(!0)
          },
          children: jB(`${Yz}rxApart`)
        })
      });
      const zB = "battery" === OB,
        lB = void 0 === GB ? `${Yz}batApartConfirmBodyPlan` : `${Yz}batApartConfirmBody`;
      return (0, WQ.jsx)(Qz, {
        id: `baf2ApartTitle_${OB}`,
        title: zB ? `${Yz}batApartConfirmTitle` : `${Yz}rxApartConfirmTitle`,
        body: zB ? lB : `${Yz}rxApartConfirmBody`,
        bodyParams: void 0 === GB ? void 0 : {
          cap: GB
        },
        yes: `${Yz}rxApart`,
        cancel: () => {
          JB(!1)
        },
        confirm: () => {
          JB(!1), oB()
        }
      })
    }

    function yz(BB) {
      let {
        mood: OB,
        big: GB
      } = BB;
      const YB = Dz[OB],
        DB = [];
      return YB.rows.forEach(((BB, OB) => {
        for (let GB = 0; GB < BB.length; GB++) "." !== BB[GB] && DB.push((0, WQ.jsx)("rect", {
          x: GB + 1,
          y: OB + 1,
          width: 1,
          height: 1,
          fill: "w" === BB[GB] ? "#8fd3ff" : YB.colour
        }, `${GB},${OB}`))
      })), (0, WQ.jsxs)("svg", {
        className: AD()("Baf2RxFace", {
          Big: GB,
          Alarm: "alarm" === OB
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, WQ.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, WQ.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), DB]
      })
    }

    function Jz(BB) {
      return zQ(BB, "+").replace("+", "")
    }

    function Mz(BB) {
      let {
        kind: OB,
        dims: GB,
        cap: YB,
        disabled: DB,
        compact: QB,
        resize: oB
      } = BB;
      const {
        t: jB
      } = (0, UD.H)(), {
        min: yB,
        max: JB
      } = wG(OB), MB = Math.min(YB, JB), PB = [`${Yz}rxWide`, `${Yz}rxTall`, `${Yz}rxDeep`], zB = {
        w: String(GB[0]),
        h: String(GB[1]),
        d: String(GB[2]),
        blocks: String(Uy(OB, GB))
      };
      return (0, WQ.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, WQ.jsx)("div", {
          className: "Baf2RxSteppers",
          children: GB.map(((BB, OB) => {
            const QB = YB => {
                const DB = [GB[0], GB[1], GB[2]];
                DB[OB] = BB + YB, oB(DB)
              },
              zB = BB >= MB;
            return (0, WQ.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, WQ.jsx)("button", {
                type: "button",
                "aria-label": jB(`${Yz}rxSmaller`),
                disabled: DB || BB <= yB,
                onClick: () => {
                  QB(-1)
                },
                children: "\u2212"
              }), (0, WQ.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [BB, (0, WQ.jsx)("small", {
                  children: jB(PB[OB])
                })]
              }), (0, WQ.jsx)("button", {
                type: "button",
                "aria-label": jB(`${Yz}rxBigger`),
                disabled: DB || zB,
                onClick: () => {
                  QB(1)
                },
                children: zB && YB < JB ? "\ud83d\udd12" : "+"
              })]
            }, PB[OB])
          }))
        }), !QB && (0, WQ.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === OB ? jB(`${Yz}rxSizeLine`, {
            ...zB,
            water: String(ny(GB))
          }) : jB(`${Yz}batSizeLine`, zB)
        })]
      })
    }

    function Pz(BB) {
      let {
        on: OB,
        label: GB,
        disabled: YB,
        locked: DB,
        pending: QB,
        toggle: oB
      } = BB;
      return (0, WQ.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": OB,
        disabled: YB,
        "aria-disabled": DB || void 0,
        className: AD()("Baf2RxSwitch", {
          On: OB,
          Locked: DB,
          Pending: QB
        }),
        onClick: oB,
        children: [(0, WQ.jsx)("span", {
          className: "Baf2RxKnob"
        }), GB]
      })
    }
    const zz = "buildAFactory2Game:",
      lz = .95;

    function pz(BB, OB) {
      return 0 !== (BB.baf2RxFlags & OB)
    }

    function qz(BB) {
      return "cryo" === BB ? xB.m : xB.q
    }

    function Zz(BB) {
      var OB, GB, YB, DB, QB, oB, jB, yB, JB;
      return BB.baf2RxCryo ? {
        fl: "cryo",
        usePerS: null !== (DB = BB.baf2RxCryoUse) && void 0 !== DB ? DB : 0,
        needPerS: null !== (QB = BB.baf2RxCryoNeed) && void 0 !== QB ? QB : 0,
        inPerS: null !== (oB = BB.baf2RxCryoIn) && void 0 !== oB ? oB : 0,
        stored: null !== (jB = BB.baf2RxCryoStored) && void 0 !== jB ? jB : 0,
        makersShort: null !== (yB = BB.baf2RxMixersShort) && void 0 !== yB ? yB : 0,
        waterBeside: null !== (JB = BB.baf2RxWaterUse) && void 0 !== JB ? JB : 0,
        pct: BB.baf2RxWater
      } : {
        fl: "water",
        usePerS: null !== (OB = BB.baf2RxWaterUse) && void 0 !== OB ? OB : 0,
        needPerS: null !== (GB = BB.baf2RxWaterNeed) && void 0 !== GB ? GB : 0,
        inPerS: BB.baf2RxWaterIn,
        stored: BB.baf2RxWaterStored,
        makersShort: null !== (YB = BB.baf2RxCondensersShort) && void 0 !== YB ? YB : 0,
        waterBeside: 0,
        pct: BB.baf2RxWater
      }
    }

    function Nz(BB) {
      const OB = "running" === BB.baf2RxState || "idle" === BB.baf2RxState;
      return BB.baf2RxFormed && BB.baf2RxTarget !== BB.baf2RxThrottle && OB ? Rz(BB, BB.baf2RxTarget) : null
    }

    function Rz(BB, OB) {
      const [GB, YB, DB, , , , QB, , oB] = BB.baf2RxStats, jB = pz(BB, lO), yB = Zz(BB), JB = yB.pct / 100, {
        gen: MB,
        out: PB,
        load: zB
      } = function(BB, OB, GB, YB) {
        const DB = GB ? hj : 1,
          QB = Math.min(BB.fuelHeat * DB * Math.max(0, Math.min(1, OB)), BB.size * DB);
        return {
          gen: QB,
          out: QB,
          load: jy(QB, BB.cooling, YB)
        }
      }({
        fuelHeat: GB,
        cooling: YB,
        size: DB
      }, OB / 100, jB, JB), lB = Jy(QB || Hj(...BB.baf2RxDims)), pB = BB.baf2RxHeat, qB = Math.abs(zB - pB), ZB = function(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xB.q;
        const QB = GB ? hj : 1,
          oB = Math.min(BB.fuelHeat * QB * OB / 100, BB.size * QB),
          jB = oB,
          yB = BB.fuelHeat * QB,
          JB = BB.cooling * oy(YB.pct / 100),
          MB = yB > 0 && JB < BB.size * QB ? Math.floor(100 * JB / yB) : 100,
          PB = oB * DB - YB.inPerS;
        return {
          out: jB,
          hotAbove: MB >= 100 ? null : Math.max(0, MB),
          waterSecs: YB.pct >= 100 && PB > 1e-6 ? Math.max(0, YB.stored) / PB : null
        }
      }({
        fuelHeat: GB,
        cooling: YB,
        size: DB
      }, OB, jB, {
        pct: yB.pct,
        inPerS: yB.inPerS,
        stored: yB.stored
      }, qz(yB.fl));
      return {
        pct: OB,
        out: PB,
        coolPerS: MB * qz(yB.fl),
        pelletsPerMin: oB > 0 ? PB / oB * 60 : 0,
        settle: zB,
        settleS: qB > 2 ? lB * Math.log(qB / 2) : 0,
        overheatS: zB > 100 && pB < 100 ? lB * Math.log((zB - pB) / (zB - 100)) : null,
        hotAbove: ZB.hotAbove,
        coolantSecs: ZB.waterSecs
      }
    }

    function Wz(BB) {
      return BB.baf2RxThrottle <= 0 && "running" !== BB.baf2RxState ? 0 : Rz(BB, BB.baf2RxTarget).pelletsPerMin / 60
    }

    function Az(BB, OB) {
      if (BB <= 0 || OB <= 0) return 0;
      const GB = BB / OB;
      return GB < .25 ? 1 : GB < .5 ? 2 : GB < .8 ? 3 : 4
    }

    function Vz(BB, OB) {
      const GB = {};
      for (const [YB, DB] of Object.entries(OB.params)) GB[YB] = "time" === YB ? qQ(BB, DB) : "amount" === YB ? fy(DB) : String(Math.round(DB));
      return BB(OB.key, GB)
    }

    function Sz(BB, OB) {
      return {
        key: `${zz}${BB}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: OB
      }
    }

    function nz(BB) {
      var OB;
      const GB = pz(BB, lO),
        YB = "running" === BB.baf2RxState,
        DB = ly(BB),
        QB = BB.baf2RxHeat;
      var oB;
      if (YB && QB > Ej) return {
        key: null !== (oB = DB.fix) && void 0 !== oB ? oB : `${zz}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const jB = YB ? Rz(BB, BB.baf2RxTarget).coolantSecs : null,
        yB = "cryo" === Zz(BB).fl;
      if (null !== jB && jB >= 1 && jB <= 30) return Sz(yB ? "rxWarnCryo" : "rxWarnWater", "bad");
      const JB = bj(Hj(...BB.baf2RxDims)).waste,
        MB = YB ? Wy(BB, JB, Wz(BB)).fullInS : null;
      if (null !== MB && MB <= 120 && BB.baf2RxWaste >= .5 * JB) return Sz("rxWarnWaste", "warn");
      if (null !== jB && jB >= 1) return Sz(yB ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: jB
      });
      const PB = "noWater" === BB.baf2RxState && QB > Ej;
      if (BB.baf2RxDamage >= 1 && !PB) return Sz("rxDamagedHeals", "warn", {
        pct: BB.baf2RxDamage
      });
      if (BB.baf2RxCryoCut) return Sz("rxFix_cryoCut", "warn");
      const zB = Zz(BB);
      if ("noWater" === BB.baf2RxState && "cryo" === zB.fl) return Sz("noWater" === BB.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const lB = DB.fix === `${zz}rxFix_scramCool` || "idle" === BB.baf2RxState && BB.baf2RxTarget <= 0;
      if (lB && BB.baf2RxFuel <= 0) return Sz("rxFix_noFuel", "warn");
      if (lB && BB.baf2RxWaterIn <= 0 && (null !== (OB = BB.baf2RxCryoIn) && void 0 !== OB ? OB : 0) <= 0) return Sz("rxFix_noWater", "warn");
      const pB = DB.fix === `${zz}rxFix_scramCool` ? qy(BB) : null;
      if (null !== pB) return {
        key: pB.key,
        params: {
          amount: pB.amount
        },
        tone: "info"
      };
      if ("running" !== BB.baf2RxState && "idle" !== BB.baf2RxState && null !== DB.fix) return {
        key: DB.fix,
        params: {},
        tone: "scram" === BB.baf2RxState ? "info" : PB ? "bad" : "warn"
      };
      var qB;
      if ("idle" === BB.baf2RxState && BB.baf2RxTarget <= 0) return {
        key: null !== (qB = DB.fix) && void 0 !== qB ? qB : `${zz}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const ZB = BB.baf2RxCryoStarved;
      if ("cryo" === zB.fl && ZB && zB.needPerS > 0 && zB.usePerS < lz * zB.needPerS) return Sz("noWater" === ZB ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const NB = "cryo" === zB.fl,
        RB = zB.needPerS > 0 && zB.usePerS < lz * zB.needPerS;
      if (NB ? RB || zB.makersShort > 0 && zB.pct < 100 : zB.pct < 100) {
        const OB = NB && RB ? Math.floor(100 * zB.usePerS / zB.needPerS) : Math.min(100, zB.pct);
        if (zB.makersShort > 0) {
          return Sz(`${NB?"rxCryoShortLine":"rxWaterShortLine"}${1===zB.makersShort?"One":""}${!NB&&BB.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: OB,
            count: zB.makersShort
          })
        }
        return Sz(NB ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: OB
        })
      }
      const WB = function(BB) {
        const [OB, GB, YB] = BB.baf2RxStats, DB = Zz(BB), QB = yy({
          fuelHeat: OB,
          cooling: GB,
          size: YB
        }, "cryo" === DB.fl ? xB.e : 1, !0);
        return Math.max(0, QB * qz(DB.fl) - DB.inPerS)
      }(BB);
      if (GB && WB > 0) return Sz("cryo" === zB.fl ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(WB)
      });
      if (QB >= Dy) return Sz("rxHotLine", "warn");
      const AB = Rz(BB, BB.baf2RxTarget);
      var VB;
      if (null !== AB.overheatS) return Sz("rxWillOverheat", "bad", {
        pct: BB.baf2RxTarget,
        time: AB.overheatS,
        safe: null !== (VB = AB.hotAbove) && void 0 !== VB ? VB : 100
      });
      if (Math.abs(AB.settle - QB) >= 3) return Sz("rxSettling", "info", {
        pct: BB.baf2RxTarget,
        heat: Math.round(AB.settle),
        time: AB.settleS
      });
      const SB = qy(BB);
      if (null !== SB) return {
        key: SB.key,
        params: {
          amount: SB.amount
        },
        tone: "info"
      };
      const nB = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== OB && ("running" !== OB || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === BB.rods ? `${My}rxLimitNoRods` : `${My}rxLimit_${Yy(BB)}`
      }({
        rods: BB.baf2RxStats[3],
        ...py(BB)
      }, BB.baf2RxState, BB.baf2RxOut >= lz * BB.baf2RxMaxNow, !1);
      if (nB === `${zz}rxLimit_size`) {
        const [OB, , GB, YB] = BB.baf2RxStats, DB = YB > 0 && OB > 0 ? Math.ceil(GB / (OB / YB) - 1e-9) : YB, QB = BB.baf2RxDims.every((BB => BB >= wG("reactor").max));
        if (DB < YB) return Sz(QB ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: DB,
          have: YB
        });
        if (QB) return Sz("rxLimit_sizeMax", "info")
      }
      return null !== nB ? {
        key: nB,
        params: {},
        tone: "info"
      } : Sz("rxSteady", "ok", {
        pct: BB.baf2RxTarget
      })
    }

    function Uz(BB) {
      var OB;
      if (BB.melted) return Sz("rxMeltedBody", "bad");
      if (-1 === BB.bad) return Sz("rxFix_noRoom", "warn");
      if (BB.bad > 0) return Sz(1 === BB.bad ? "rxBadOne" : "rxBad", "warn", {
        count: BB.bad
      });
      if (BB.left > 0) {
        const OB = 1 === BB.left ? "One" : "";
        return Sz(BB.canFill ? `rxPlanLeft${OB}` : `rxPlanLeftNoFill${OB}`, "info", {
          count: BB.left
        })
      }
      if (0 === BB.rods) return Sz("rxLimitNoRods", "warn");
      const GB = null !== (OB = BB.idle) && void 0 !== OB ? OB : 0;
      return GB > 0 ? Sz(1 === GB ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: GB
      }) : Sz("rxPlanReady", "ok")
    }

    function fz(BB) {
      return Math.floor(Math.max(0, BB[1] - 1) / 2)
    }

    function kz(BB) {
      if (BB >= xj && BB < tj) {
        const OB = BB - xj;
        return {
          key: 0 === OB ? `${zz}rxWhy_rodAlone` : 1 === OB ? `${zz}rxWhy_rodOne` : `${zz}rxWhy_rod`,
          params: {
            count: String(OB),
            heat: String(Ij * (1 + Fj * OB))
          }
        }
      }
      return BB === tj ? {
        key: `${zz}rxWhy_channel`,
        params: {
          amount: String(Lj)
        }
      } : BB === By ? {
        key: `${zz}rxWhy_deadChannel`,
        params: {}
      } : BB === Oy ? {
        key: `${zz}rxWhy_graphite`,
        params: {}
      } : {
        key: `${zz}rxWhy_core`,
        params: {}
      }
    }
    const dz = "buildAFactory2Game:";

    function Kz(BB, OB) {
      return 0 !== (BB.baf2RxFlags & OB)
    }

    function uz(BB) {
      let {
        status: OB,
        pending: GB,
        store: YB,
        explain: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)(), oB = Kz(OB, zO), jB = OB.baf2RxTarget, yB = OB.baf2RxThrottle, JB = function(BB) {
        return {
          press: () => {
            BB.throttlePress()
          },
          drag: OB => {
            BB.throttleDrag(OB)
          },
          release: () => {
            BB.throttleRelease()
          }
        }
      }(YB), MB = null === (PB = Rz(OB, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, PB - 10),
        red: PB
      };
      var PB;
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2RxThrottle", {
          Off: oB
        }),
        onClick: () => {
          oB && DB(`${dz}rxWhy_startFirst`)
        },
        children: [(0, WQ.jsx)("span", {
          className: "HideNarrow",
          children: QB(`${dz}rxThrottle`)
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, WQ.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: jB,
            disabled: oB,
            style: oB ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": QB(`${dz}rxThrottle`),
            onPointerDown: () => {
              JB.press();
              const BB = () => {
                window.removeEventListener("pointerup", BB), window.removeEventListener("pointercancel", BB), JB.release()
              };
              window.addEventListener("pointerup", BB), window.addEventListener("pointercancel", BB)
            },
            onKeyUp: JB.release,
            onChange: BB => {
              JB.drag(Number(BB.target.value))
            }
          }), (0, WQ.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${MB.amber}%, #ffb020 ${MB.amber}% ${MB.red}%, #ff3b30 ${MB.red}%)`
            },
            "aria-hidden": "true"
          }), (0, WQ.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${yB}% + ${8*(1-yB/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, WQ.jsxs)("b", {
          children: [`${jB}%`, (0, WQ.jsx)("i", {
            className: AD()("Baf2RxPendingDot", {
              On: GB
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function mz(BB) {
      let {
        status: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), YB = Rz(OB, OB.baf2RxTarget), DB = Zz(OB).fl, QB = GB("cryo" === DB ? `${dz}rxRateCryo` : `${dz}rxRateWater`, {
        rate: Jz(YB.coolPerS)
      }), oB = GB(`${dz}rxChain`, {
        pct: String(OB.baf2RxTarget),
        out: fy(YB.out),
        heat: String(Math.round(YB.settle)),
        coolant: QB
      }), jB = null !== YB.coolantSecs ? YB.coolantSecs >= 1 ? GB("cryo" === DB ? `${dz}rxThrottleCryoOut` : `${dz}rxThrottleWaterOut`, {
        time: qQ(GB, YB.coolantSecs)
      }) : GB("cryo" === DB ? `${dz}rxThrottleCryoDry` : `${dz}rxThrottleWaterDry`) : null;
      return (0, WQ.jsxs)("p", {
        className: "Baf2RxChain",
        children: [oB, null !== jB ? (0, WQ.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", jB]
        }) : (0, WQ.jsxs)("span", {
          children: [" \xb7 ", GB(`${dz}rxChainPellets`, {
            amount: ky(YB.pelletsPerMin)
          })]
        })]
      })
    }

    function Iz(BB) {
      let {
        view: OB,
        store: GB,
        explain: DB,
        explainOnce: QB
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), {
        status: jB
      } = OB, [yB, JB] = (0, YB.useState)(!1), MB = Kz(jB, zO), zB = Kz(jB, lO), lB = !Kz(jB, ZO), pB = jB.baf2RxHeat > 100;
      return (0, WQ.jsxs)(WQ.Fragment, {
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, WQ.jsx)(uz, {
            status: jB,
            pending: OB.throttlePending,
            store: GB,
            explain: DB
          }), (0, WQ.jsx)(Pz, {
            on: zB,
            label: zB ? oB(`${dz}rxOdLeft`, {
              time: qQ(oB, jB.baf2RxOdLeft)
            }) : oB(`${dz}rxOverdrive`),
            locked: lB,
            pending: 0 !== (OB.pendingFlags & lO),
            toggle: () => {
              lB ? DB(`${dz}rxOverdriveTier`, {
                amount: String(PB(13))
              }) : zB ? GB.setFlag(lO, !1) : OB.odConfirmed ? GB.setFlag(lO, !0) : JB(!0)
            }
          }), MB || OB.startGuard ? (0, WQ.jsx)(No.v, {
            disabled: OB.busy.has("start") || OB.startGuard,
            onClick: () => {
              GB.tap("start", (() => {
                GB.setFlag(zO, !1)
              }))
            },
            children: oB(OB.startGuard ? `${dz}rxStarting` : `${dz}rxStart`)
          }) : (0, WQ.jsx)("span", {
            className: AD()("Baf2RxScram", {
              Pulse: pB
            }),
            children: (0, WQ.jsx)(No.Q, {
              onClick: () => {
                GB.shutDown()
              },
              children: oB(`${dz}rxScram`)
            })
          })]
        }), (0, WQ.jsx)(mz, {
          status: jB
        }), yB && (0, WQ.jsx)(Qz, {
          id: "baf2RxOdTitle",
          title: `${dz}rxOdConfirmTitle`,
          body: `${dz}rxOdConfirmBody`,
          yes: `${dz}rxOdConfirm`,
          cancel: () => {
            JB(!1)
          },
          confirm: () => {
            JB(!1), GB.tap("odConfirm", (() => {
              GB.confirmOverdrive(), GB.setFlag(lO, !0)
            })), QB(`${dz}rxWhy_overdrive`)
          }
        })]
      })
    }

    function Fz(BB) {
      let {
        view: OB,
        store: GB,
        keepSize: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), {
        status: QB
      } = OB;
      return (0, WQ.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, WQ.jsx)(Mz, {
          kind: "reactor",
          dims: OB.dims,
          cap: QB.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: BB => {
            GB.resize(BB)
          }
        }), YB ? (0, WQ.jsx)(No.j, {
          onClick: YB,
          children: DB(`${dz}rxKeepSize`)
        }) : (0, WQ.jsxs)(WQ.Fragment, {
          children: [(0, WQ.jsx)(Pz, {
            on: OB.guide,
            label: DB(`${dz}rxGuide`),
            toggle: () => {
              GB.toggleGuide()
            }
          }), Kz(QB, RO) && (0, WQ.jsx)(Pz, {
            on: OB.starter,
            label: DB(`${dz}rxStarter`),
            toggle: () => {
              GB.toggleStarter()
            }
          }), (0, WQ.jsx)(Oz, {
            status: QB,
            store: GB,
            busy: OB.busy.has("fill")
          })]
        })]
      })
    }

    function iz(BB) {
      let {
        need: OB,
        kind: GB = "reactor",
        explain: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), QB = OB.length <= 3, oB = OB.reduce(((BB, OB) => {
        let [, GB] = OB;
        return BB + GB
      }), 0);
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2RxParts", {
          Compact: !QB
        }),
        onClick: () => {
          YB("battery" === GB ? `${dz}batWhy_store` : `${dz}rxShellHint`)
        },
        children: [oB > 0 && (0, WQ.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === oB ? DB(`${dz}rxBlocksOne`) : DB(`${dz}rxBlocks`, {
            blocks: String(oB)
          })
        }), 0 === OB.length ? (0, WQ.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: DB("battery" === GB ? `${dz}batPartsDone` : `${dz}rxShellDone`)
        }) : Ny(OB).map((BB => {
          let [OB, GB, YB] = BB;
          const oB = function(BB) {
            const OB = Sy[BB];
            if (void 0 === OB) return null;
            const [GB, YB, DB] = Ay[OB].colour.map((BB => Math.round(255 * BB)));
            return `rgb(${GB}, ${YB}, ${DB})`
          }(OB);
          return (0, WQ.jsxs)("span", {
            className: "Baf2RxChip",
            title: (0, xD.g)(DB, OB),
            children: [(0, WQ.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === oB ? {
                visibility: "hidden"
              } : {
                background: oB
              },
              title: DB(`${dz}rxShopGhost`)
            }), (0, WQ.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, WQ.jsx)(kD.c, {
                itemName: OB,
                amount: 0
              })
            }), (0, WQ.jsx)("span", {
              className: "Baf2RxChipName",
              children: QB ? `${GB} ${jB=(0,xD.g)(DB,OB),jB.replace(/^(Reactor|Battery) (?=\S)/,"")}` : GB
            }), YB >= GB ? (0, WQ.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, WQ.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: QB ? DB(`${dz}rxShopShort`, {
                count: String(GB - YB)
              }) : "\u2212" + (GB - YB)
            })]
          }, OB);
          var jB
        }))]
      })
    }
    const Lz = "buildAFactory2Game:";

    function gz(BB) {
      var OB, GB, DB, QB, oB, jB, yB;
      let {
        store: JB,
        close: MB
      } = BB;
      const {
        t: PB
      } = (0, UD.H)(), zB = ro(), lB = oz(JB), {
        explained: pB,
        explain: qB
      } = HP("baf2RxExplained"), ZB = (0, YB.useCallback)(((BB, OB) => {
        qB(PB(BB, OB))
      }), [qB, PB]), NB = null === lB || void 0 === lB ? void 0 : lB.status, RB = !0 === (null === NB || void 0 === NB ? void 0 : NB.baf2BatReadOnly), WB = BB => {
        NB && zB.send(PO(NB.baf2BatAt, BB))
      }, [AB, VB, SB] = null !== (OB = null === lB || void 0 === lB ? void 0 : lB.dims) && void 0 !== OB ? OB : [0, 0, 0], nB = fy(null !== (GB = null === lB || void 0 === lB ? void 0 : lB.CP) && void 0 !== GB ? GB : 0), UB = !0 === (null === NB || void 0 === NB ? void 0 : NB.baf2BatFormed), fB = null !== (DB = null === NB || void 0 === NB ? void 0 : NB.baf2BatStored) && void 0 !== DB ? DB : 0, kB = Math.max(1, null !== (QB = null === NB || void 0 === NB ? void 0 : NB.baf2BatIslandCap) && void 0 !== QB ? QB : 1), dB = Math.min(100, 100 * fB / kB), KB = null === NB || void 0 === NB ? void 0 : NB.baf2BatNetPerS, uB = function(BB, OB, GB) {
        return GB > 0 && OB >= GB ? "full" : void 0 !== BB && BB >= .05 ? "charging" : void 0 !== BB && BB <= -.05 && OB > 0 ? "draining" : "steady"
      }(KB, fB, null !== (oB = null === NB || void 0 === NB ? void 0 : NB.baf2BatIslandCap) && void 0 !== oB ? oB : 0), mB = null !== (jB = null === NB || void 0 === NB ? void 0 : NB.baf2BatMadePerS) && void 0 !== jB ? jB : 0, IB = null !== (yB = null === NB || void 0 === NB ? void 0 : NB.baf2BatUsedPerS) && void 0 !== yB ? yB : 0;
      let FB, iB = {},
        LB = "info";
      if (NB)
        if (UB) "charging" === uB ? (FB = `${Lz}batLine_charging`, iB = {
          time: qQ(PB, (kB - fB) / Math.max(.05, null !== KB && void 0 !== KB ? KB : 0))
        }, LB = "ok") : "draining" === uB ? (FB = `${Lz}batLine_draining`, iB = {
          time: qQ(PB, fB / Math.max(.05, -(null !== KB && void 0 !== KB ? KB : 0)))
        }, LB = "warn") : FB = "full" === uB ? `${Lz}batLine_full` : fB <= 0 && IB > 0 ? `${Lz}batLine_empty` : `${Lz}batLine_steady`;
        else {
          var gB;
          const BB = Uz({
            left: NB.baf2BatNeed.reduce(((BB, OB) => {
              let [, GB] = OB;
              return BB + GB
            }), 0),
            bad: NB.baf2BatBad,
            rods: 1,
            canFill: !0 === NB.baf2BatCanFill,
            melted: !1
          });
          FB = BB.key, iB = {
            count: String(null !== (gB = BB.params.count) && void 0 !== gB ? gB : 0)
          }, LB = BB.tone
        }
      else FB = `${Lz}batLine_steady`;
      const rB = Math.max(mB, IB, 1);
      return (0, WQ.jsx)(Zo.d, {
        close: MB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, WQ.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, WQ.jsx)(kD.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, WQ.jsxs)("div", {
                children: [(0, WQ.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: PB(`${Lz}batTitle`)
                }), NB && (0, WQ.jsxs)("p", {
                  className: AD()("Baf2RxSubtitle", {
                    good: UB && "charging" === uB,
                    warn: UB && "draining" === uB
                  }),
                  children: [AB, "\xd7", VB, "\xd7", SB, " \xb7 ", PB(UB ? `${Lz}batState_${uB}` : `${Lz}rxSubPlanShort`)]
                })]
              })]
            }), (0, WQ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [NB && !RB && (0, WQ.jsx)(jz, {
                kind: "battery",
                cap: UB ? nB : void 0,
                busy: null === lB || void 0 === lB ? void 0 : lB.busy.has("apart"),
                apart: () => {
                  JB.tap("apart", (() => {
                    WB("apart")
                  }))
                }
              }), (0, WQ.jsx)(No.m, {
                onClick: MB
              })]
            })]
          }), lB && NB && (0, WQ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, WQ.jsxs)("div", {
              className: AD()("Baf2RxFlow Baf2BatFlow", {
                Plan: !UB
              }),
              children: [(0, WQ.jsx)(TP, {
                kind: "Power",
                label: PB(`${Lz}batMade`),
                number: UB ? `\u26a1 ${fy(mB)}/s` : "\u2014",
                note: PB(`${Lz}batMadeNote`),
                share: UB ? mB / rB : void 0,
                onExplain: () => {
                  ZB(`${Lz}batWhy_made`)
                }
              }), (0, WQ.jsx)(bP, {
                kind: "Power",
                step: UB ? Az(mB, rB) : 0,
                planned: !UB
              }), (0, WQ.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  ZB(`${Lz}batWhy_store`)
                },
                children: [(0, WQ.jsx)(CP, {
                  max: 100,
                  bands: [{
                    upTo: UB ? dB : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, WQ.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, WQ.jsx)("b", {
                    className: "Baf2BatStored",
                    children: UB ? PB(`${Lz}batStoredOf`, {
                      amount: fy(fB),
                      cap: fy(NB.baf2BatIslandCap)
                    }) : PB(`${Lz}batWillHold`, {
                      cap: nB
                    })
                  }), (0, WQ.jsx)("span", {
                    children: PB(`${Lz}batAdds`, {
                      cap: nB
                    })
                  }), UB && (0, WQ.jsx)("small", {
                    children: PB(`${Lz}batBreakNote`, {
                      cap: nB
                    })
                  })]
                })]
              }), (0, WQ.jsx)(bP, {
                kind: "Power",
                step: UB ? Az(IB, rB) : 0,
                planned: !UB
              }), (0, WQ.jsx)(TP, {
                kind: "Power",
                label: PB(`${Lz}batUsed`),
                number: UB ? `\u26a1 ${fy(IB)}/s` : "\u2014",
                note: PB(`${Lz}batUsedNote`),
                share: UB ? IB / rB : void 0,
                onExplain: () => {
                  ZB(`${Lz}batWhy_used`)
                }
              })]
            }), (0, WQ.jsx)(vP, {
              text: PB(FB, iB),
              tone: LB,
              explained: pB
            }), RB ? (0, WQ.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: PB(`${Lz}rxNotYours`)
            }) : !UB && (0, WQ.jsxs)(WQ.Fragment, {
              children: [(0, WQ.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, WQ.jsx)(Mz, {
                  kind: "battery",
                  dims: lB.dims,
                  cap: NB.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: BB => {
                    JB.resize(BB)
                  }
                }), (0, WQ.jsx)(Pz, {
                  on: lB.guide,
                  label: PB(`${Lz}rxGuide`),
                  toggle: () => {
                    JB.toggleGuide()
                  }
                }), NB.baf2BatCanFill && (0, WQ.jsx)(No.q, {
                  disabled: !Ry("battery", NB.baf2BatNeed) || lB.busy.has("fill"),
                  onClick: () => {
                    JB.tap("fill", (() => {
                      WB("fill")
                    }))
                  },
                  children: PB(`${Lz}rxFill`)
                })]
              }), (0, WQ.jsx)(iz, {
                need: NB.baf2BatNeed,
                kind: "battery",
                explain: ZB
              })]
            })]
          })]
        })
      })
    }
    const rz = "buildAFactory2Game:",
      Xz = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function wz(BB, OB) {
      return BB === sj ? null : OB ? "#4a4440" : BB < tj ? Xz[BB - xj] : BB === tj ? "#3fd0f0" : BB === By ? "#2c3e4c" : "#55585e"
    }

    function Ez(BB) {
      let {
        inner: OB,
        looks: GB,
        layer: YB,
        setLayer: DB,
        glow: QB,
        melted: oB,
        explain: jB
      } = BB;
      const {
        t: yB
      } = (0, UD.H)(), [JB, MB, PB] = OB, zB = Math.max(0, Math.min(MB - 1, YB)), lB = [];
      for (let qB = 0; qB < PB; qB++)
        for (let BB = 0; BB < JB; BB++) {
          var pB;
          const OB = null !== (pB = GB[(zB * PB + qB) * JB + BB]) && void 0 !== pB ? pB : sj,
            YB = wz(OB, oB),
            DB = OB >= xj && OB < tj;
          lB.push(null === YB ? (0, WQ.jsx)("circle", {
            cx: BB + .5,
            cy: qB + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${BB},${qB}`) : (0, WQ.jsx)("rect", {
            x: BB + .06,
            y: qB + .06,
            width: .88,
            height: .88,
            fill: YB,
            opacity: DB && !oB ? .5 + .5 * QB : 1,
            onClick: BB => {
              BB.stopPropagation();
              const GB = kz(OB);
              jB(GB.key, GB.params)
            }
          }, `${BB},${qB}`))
        }
      return (0, WQ.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, WQ.jsx)("svg", {
          className: AD()("Baf2RxMapGrid", {
            Melted: oB
          }),
          viewBox: `0 0 ${Math.max(1,JB)} ${Math.max(1,PB)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": yB(`${rz}rxWhy_core`),
          onClick: () => {
            jB(`${rz}rxWhy_core`, {})
          },
          children: lB
        }), MB > 1 && (0, WQ.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, WQ.jsx)("button", {
            type: "button",
            "aria-label": yB(`${rz}rxLayerDown`),
            disabled: zB <= 0,
            onClick: () => {
              DB(zB - 1)
            },
            children: "\u25bc"
          }), (0, WQ.jsxs)("span", {
            children: [(0, WQ.jsx)("span", {
              className: "HideNarrow",
              children: yB(`${rz}rxLayer`, {
                n: String(zB + 1),
                of: String(MB)
              })
            }), (0, WQ.jsx)("span", {
              className: "ShowNarrow",
              children: yB(`${rz}rxLayerShort`, {
                n: String(zB + 1),
                of: String(MB)
              })
            })]
          }), (0, WQ.jsx)("button", {
            type: "button",
            "aria-label": yB(`${rz}rxLayerUp`),
            disabled: zB >= MB - 1,
            onClick: () => {
              DB(zB + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const cz = "buildAFactory2Game:",
      hz = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: cj,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: zy,
        kind: "red"
      }],
      az = [50, cj, 100];

    function ez(BB) {
      let {
        stats: OB,
        t: GB,
        explain: YB
      } = BB;
      const DB = Yy(OB),
        QB = Math.max(1, OB.fuelHeat, OB.cooling, OB.size),
        oB = [
          ["fuel", `${cz}rxBarRods`, OB.fuelHeat],
          ["cooling", `${cz}rxBarCooling`, OB.cooling],
          ["size", `${cz}rxBarSize`, OB.size]
        ];
      return (0, WQ.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          YB(`${cz}rxWhy_bars`)
        },
        children: [(0, WQ.jsx)("span", {
          className: "Baf2RxMostLine",
          children: GB(`${cz}rxMost`, {
            amount: fy(Math.min(OB.fuelHeat, OB.cooling, OB.size))
          })
        }), (0, WQ.jsx)("span", {
          className: "Baf2RxMostBars",
          children: oB.map((BB => {
            let [OB, YB, oB] = BB;
            return (0, WQ.jsxs)("span", {
              className: AD()("Baf2RxMostBar", OB, {
                Low: OB === DB
              }),
              children: [(0, WQ.jsx)("small", {
                children: GB(YB)
              }), (0, WQ.jsx)("i", {
                children: (0, WQ.jsx)("b", {
                  style: {
                    width: 100 * oB / QB + "%"
                  }
                })
              })]
            }, OB)
          }))
        })]
      })
    }

    function Tz(BB) {
      var OB;
      let {
        view: GB,
        heat: DB,
        settle: QB,
        settleLine: oB,
        settleBad: jB,
        explain: yB
      } = BB;
      const {
        t: JB
      } = (0, UD.H)(), {
        status: MB
      } = GB, PB = MB.baf2RxAt.join(","), [zB, lB] = (0, YB.useState)((() => fz(GB.inner)));
      (0, YB.useEffect)((() => {
        lB(fz(GB.inner))
      }), [PB, GB.inner[1]]);
      const pB = null !== (OB = GB.plan) && void 0 !== OB ? OB : py(MB),
        qB = GB.plan ? GB.plan.powerPerUnit : MB.baf2RxStats[8],
        ZB = null === DB ? null : "alarm" === (NB = Py(MB)) ? "red" : "hot" === NB ? "hot" : "warm" === NB ? "warm" : "cold";
      var NB;
      const RB = !MB.baf2RxFormed && function(BB, OB) {
          return 0 !== (BB.baf2RxFlags & OB)
        }(MB, pO),
        WB = MB.baf2RxDamage,
        AB = MB.baf2RxDamageTrend;
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2RxCore", null !== ZB && void 0 !== ZB ? ZB : "plan"),
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, WQ.jsx)(Ez, {
            inner: GB.inner,
            looks: GB.looks,
            layer: zB,
            setLayer: lB,
            glow: MB.baf2RxFormed ? MB.baf2RxThrottle / 100 : 1,
            melted: RB,
            explain: yB
          }), (0, WQ.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              yB(`${cz}rxWhy_heat`)
            },
            children: [null !== DB ? (0, WQ.jsxs)(WQ.Fragment, {
              children: [(0, WQ.jsx)("b", {
                children: JB(`${cz}rxHeatPct`, {
                  pct: String(DB)
                })
              }), (0, WQ.jsx)("span", {
                className: AD()("Baf2RxBand", ZB),
                children: JB(`${cz}rxBand_${ZB}`)
              })]
            }) : (0, WQ.jsx)("b", {
              children: JB(`${cz}rxHeat`)
            }), null !== oB && (0, WQ.jsx)("span", {
              className: AD()("Baf2RxSettle", {
                Bad: jB
              }),
              children: oB
            }), WB >= 1 && (0, WQ.jsxs)("span", {
              className: AD()("Baf2RxDamage", AB),
              children: [JB(`${cz}rxDamageLine`, {
                pct: String(WB)
              }), " \xb7 ", JB(`${cz}rxDamage_${AB}`), (0, WQ.jsx)("i", {
                children: (0, WQ.jsx)("b", {
                  style: {
                    width: `${Math.min(100,WB)}%`
                  }
                })
              })]
            })]
          }), (0, WQ.jsx)(CP, {
            max: zy,
            bands: hz,
            ticks: az,
            now: DB,
            settle: QB,
            settleTone: jB ? "bad" : null,
            onExplain: () => {
              yB(`${cz}rxWhy_heat`)
            }
          })]
        }), (0, WQ.jsx)(ez, {
          stats: pB,
          t: JB,
          explain: yB
        }), qB > 0 && (0, WQ.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            yB(`${cz}rxWhy_perPellet`)
          },
          children: JB(`${cz}rxPerPellet`, {
            amount: fy(qB)
          })
        })]
      })
    }

    function bz(BB, OB) {
      var GB;
      if (!BB.baf2RxStore) return {
        note: OB(`${cz}rxUpTo`, {
          amount: fy(BB.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [YB, DB] = BB.baf2RxStore, QB = DB > 0 ? YB / DB : 0, oB = String(Math.floor(100 * QB)), jB = null !== (GB = BB.baf2RxStoreNetPerS) && void 0 !== GB ? GB : 0, yB = function(BB) {
        var OB, GB;
        const [YB, DB] = null !== (OB = BB.baf2RxStore) && void 0 !== OB ? OB : [0, 0], QB = null !== (GB = BB.baf2RxStoreNetPerS) && void 0 !== GB ? GB : 0;
        return DB > 0 && YB >= DB - 1 ? "running" === BB.baf2RxState ? `${zz}rxStoreFull` : `${zz}rxStoreFullOnly` : QB > .05 ? `${zz}rxStoreLine` : QB < -.05 ? "running" === BB.baf2RxState ? `${zz}rxStoreUsesMore` : `${zz}rxStoreDraining` : `${zz}rxStorePct`
      }(BB);
      return {
        note: OB(yB, yB === `${cz}rxStoreLine` ? {
          pct: oB,
          time: qQ(OB, (DB - YB) / jB)
        } : {
          pct: oB
        }),
        share: QB
      }
    }

    function Cz(BB) {
      let {
        view: OB,
        explain: GB,
        preview: YB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), {
        status: QB
      } = OB, oB = bj(Hj(...OB.dims)), jB = Wz(QB), yB = Math.min(Math.round(QB.baf2RxFuel), oB.fuel), JB = "running" === QB.baf2RxState, MB = JB ? Az(QB.baf2RxOut, QB.baf2RxMaxNow) : 0, PB = function(BB, OB, GB) {
        const YB = Zz(BB),
          DB = "cryo" === YB.fl,
          QB = GB ? GB.coolantSecs : YB.pct >= 100 && BB.baf2RxOut >= 1 ? Rz(BB, BB.baf2RxThrottle).coolantSecs : null;
        let oB, jB = !1;
        if (YB.pct < 100) {
          const GB = 1 === YB.makersShort,
            QB = !DB && BB.baf2RxCryoOpen ? "OrCryo" : "";
          oB = YB.makersShort > 0 ? OB(DB ? `${cz}rxCryoAddMixer${GB?"":"s"}` : `${cz}rxWaterAddCondenser${GB?"":"s"}${QB}`, {
            count: String(YB.makersShort)
          }) : OB(`${cz}rxWaterNeeds`, {
            rate: Jz(YB.needPerS)
          })
        } else if (null !== QB) oB = OB(`${cz}rxWaterRunsOut`, {
          time: qQ(OB, QB)
        });
        else if (YB.waterBeside > 0) oB = OB(`${cz}rxCryoPlusWater`, {
          rate: Jz(YB.waterBeside)
        });
        else {
          const BB = function(BB) {
            return BB.inPerS <= 0 ? "rxWaterNoSupply" : BB.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(YB);
          jB = "rxWaterNoSupply" === BB, oB = OB(`${cz}${BB}`, {
            amount: fy(YB.stored)
          })
        }
        return {
          kind: DB ? "Cryo" : "Water",
          label: OB(DB ? `${cz}rxCryo` : `${cz}rxWater`),
          number: `${Jz(YB.usePerS)}/s`,
          preview: GB ? `${Jz(GB.coolPerS)}/s` : null,
          note: oB,
          tone: "noWater" === BB.baf2RxState ? "danger" : jB ? "warn" : (yB = YB.pct, JB = QB, yB < 100 ? "danger" : null === JB ? null : JB < 300 ? "danger" : "warn"),
          share: YB.pct / 100,
          why: DB ? `${cz}rxWhy_cryo` : `${cz}rxWhy_water`,
          short: YB.pct < 100
        };
        var yB, JB
      }(QB, DB, YB), zB = Wy(QB, oB.waste, jB), lB = bz(QB, DB), pB = Rz(QB, QB.baf2RxTarget), qB = JB && Math.abs(pB.settle - QB.baf2RxHeat) >= 3, ZB = YB ? YB.pelletsPerMin / 60 : null;
      return (0, WQ.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WQ.jsx)(TP, {
            kind: "Fuel",
            label: DB(`${cz}rxFuel`),
            number: String(yB),
            preview: null !== ZB && ZB > 0 && QB.baf2RxFuel > 0 ? qQ(DB, QB.baf2RxFuel / ZB) : null,
            note: QB.baf2RxFuel <= 0 ? DB(`${cz}rxFuelEmpty`) : jB > 0 ? DB(`${cz}rxFuelLeft`, {
              time: qQ(DB, QB.baf2RxFuel / jB)
            }) : DB(1 === yB ? `${cz}rxFuelPellet` : `${cz}rxFuelPellets`),
            tone: "noFuel" === QB.baf2RxState ? "danger" : QB.baf2RxFuel < 2 ? "warn" : null,
            share: QB.baf2RxFuel / oB.fuel,
            onExplain: () => {
              GB(`${cz}rxWhy_fuel`)
            }
          }), (0, WQ.jsx)(TP, {
            kind: PB.kind,
            label: PB.label,
            number: PB.number,
            preview: PB.preview,
            note: PB.note,
            tone: PB.tone,
            share: PB.share,
            onExplain: () => {
              GB(PB.why)
            }
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WQ.jsx)(bP, {
            kind: "Fuel",
            step: MB,
            short: "noFuel" === QB.baf2RxState
          }), (0, WQ.jsx)(bP, {
            kind: PB.kind,
            step: MB,
            short: PB.short || "noWater" === QB.baf2RxState
          })]
        }), (0, WQ.jsx)(Tz, {
          view: OB,
          heat: QB.baf2RxHeat,
          settle: Math.min(zy, pB.settle),
          settleLine: qB ? DB(`${cz}rxHeatSettles`, {
            pct: String(Math.round(pB.settle)),
            time: qQ(DB, pB.settleS)
          }) : null,
          settleBad: pB.settle > 100,
          explain: GB
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WQ.jsx)(bP, {
            kind: "Power",
            step: MB
          }), (0, WQ.jsx)(bP, {
            kind: "Waste",
            step: JB && QB.baf2RxFuel - QB.baf2RxPu > 0 ? MB : 0,
            short: zB.full
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WQ.jsx)(TP, {
            kind: "Power",
            label: DB(`${cz}rxPowerOut`),
            number: `\u26a1 ${fy(QB.baf2RxOut)}/s`,
            preview: YB ? fy(YB.out) : null,
            note: lB.note,
            share: lB.share,
            onExplain: () => {
              GB(`${cz}rxWhy_power`)
            }
          }), (0, WQ.jsx)(TP, {
            kind: "Waste",
            label: DB(`${cz}rxWaste`),
            number: `${Math.floor(QB.baf2RxWaste)}/${oB.waste}`,
            note: zB.full ? DB(`${cz}rxWasteFull`) : null !== zB.fullInS ? DB(`${cz}rxWasteFullIn`, {
              time: qQ(DB, zB.fullInS)
            }) : DB(`${cz}rxWasteSpent`),
            tone: "wasteFull" === QB.baf2RxState ? "danger" : zB.full ? "warn" : null,
            share: QB.baf2RxWaste / oB.waste,
            onExplain: () => {
              GB(`${cz}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Hz(BB) {
      let {
        view: OB,
        explain: GB
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = OB.plan;
      if (!DB) return null;
      const QB = DB.fuelHeat <= 0 ? null : DB.cooling > 0 ? Math.min(zy, 100 * DB.fuelHeat / DB.cooling) : zy,
        oB = YB(`${cz}rxPlanAtFull`);
      return (0, WQ.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, WQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WQ.jsx)(TP, {
            kind: "Fuel",
            label: YB(`${cz}rxFuel`),
            number: YB(`${cz}rxPlanPerMin`, {
              amount: ky(DB.pelletsPerMin)
            }),
            note: YB(`${cz}rxPlanPellets`),
            onExplain: () => {
              GB(`${cz}rxWhy_fuel`)
            }
          }), (0, WQ.jsx)(TP, {
            kind: "Water",
            label: YB(`${cz}rxWater`),
            number: `${Jz(DB.waterPerS)}/s`,
            note: OB.status.baf2RxCryoOpen && DB.waterPerS > 0 ? YB(`${cz}rxPlanOrCryo`, {
              rate: Jz(yy(DB, xB.e) * xB.m)
            }) : oB,
            onExplain: () => {
              GB(`${cz}rxWhy_water`)
            }
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WQ.jsx)(bP, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, WQ.jsx)(bP, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, WQ.jsx)(Tz, {
          view: OB,
          heat: null,
          settle: QB,
          settleLine: null === QB ? null : YB(`${cz}rxPlanHeat`, {
            pct: String(Math.round(QB))
          }),
          settleBad: null !== QB && QB > 100,
          explain: GB
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, WQ.jsx)(bP, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, WQ.jsx)(bP, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, WQ.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, WQ.jsx)(TP, {
            kind: "Power",
            label: YB(`${cz}rxPowerOut`),
            number: `\u26a1 ${fy(DB.max)}/s`,
            note: oB,
            onExplain: () => {
              GB(`${cz}rxWhy_power`)
            }
          }), (0, WQ.jsx)(TP, {
            kind: "Waste",
            label: YB(`${cz}rxWaste`),
            number: YB(`${cz}rxPlanPerMin`, {
              amount: ky(DB.pelletsPerMin)
            }),
            note: YB(`${cz}rxWasteSpent`),
            onExplain: () => {
              GB(`${cz}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const vz = "buildAFactory2Game:",
      sz = {
        key: `${vz}rxWaiting`,
        params: {},
        tone: "info"
      };

    function xz(BB, OB) {
      return 0 !== (BB.baf2RxFlags & OB)
    }

    function tz(BB) {
      var OB, GB;
      let {
        store: DB,
        close: QB
      } = BB;
      const {
        t: oB
      } = (0, UD.H)(), jB = oz(DB), {
        explained: yB,
        hinting: JB,
        explain: MB,
        explainOnce: PB
      } = HP("baf2RxExplained"), zB = (0, YB.useCallback)(((BB, OB) => {
        MB(oB(BB, OB))
      }), [MB, oB]), lB = (0, YB.useCallback)(((BB, OB) => {
        PB(BB, oB(BB, OB))
      }), [PB, oB]), [pB, qB] = (0, YB.useState)(!1), [ZB, NB] = (0, YB.useState)(!1), RB = null === jB || void 0 === jB ? void 0 : jB.status, WB = null === RB || void 0 === RB ? void 0 : RB.baf2RxAt.join(","), AB = !0 === (null === RB || void 0 === RB ? void 0 : RB.baf2RxFormed);
      (0, YB.useEffect)((() => {
        NB(!1), qB(!1)
      }), [WB, AB]), (0, YB.useEffect)((() => (DB.opened(), () => {
        DB.closed()
      })), [DB]);
      const VB = void 0 !== RB && xz(RB, NO),
        SB = RB ? AB ? Py(RB) : null !== jB && void 0 !== jB && jB.plan ? function(BB, OB) {
          if (BB <= 0) return "off";
          if (OB <= 0) return "alarm";
          const GB = 100 * BB / OB;
          return GB < 50 ? "calm" : GB < Dy ? "warm" : GB <= 100 ? "hot" : "alarm"
        }(jB.plan.fuelHeat, jB.plan.cooling) : "off" : "off",
        nB = RB ? ly(RB) : null,
        UB = jB ? jB.waiting ? sz : AB ? nz(jB.status) : function(BB) {
          var OB, GB;
          const {
            status: YB
          } = BB;
          return Uz({
            left: YB.baf2RxNeed.reduce(((BB, OB) => {
              let [, GB] = OB;
              return BB + GB
            }), 0),
            bad: YB.baf2RxBad,
            rods: null !== (OB = null === (GB = BB.plan) || void 0 === GB ? void 0 : GB.rods) && void 0 !== OB ? OB : 0,
            canFill: xz(YB, qO),
            melted: xz(YB, pO),
            idle: BB.looks.reduce(((BB, OB) => BB + (OB === By ? 1 : 0)), 0)
          })
        }(jB) : null,
        fB = JB && null !== UB && ("ok" === UB.tone || "info" === UB.tone),
        kB = RB ? function(BB) {
          const OB = 0 !== (BB.baf2RxFlags & zO),
            GB = BB.baf2RxHeat < aj;
          return 0 !== (BB.baf2RxFlags & pO) || GB && (OB || !BB.baf2RxFormed) ? null : BB.baf2RxFormed && !OB ? {
            key: `${My}rxApartScram`,
            params: {}
          } : {
            key: `${My}rxApartCooling`,
            params: {
              pct: String(aj)
            }
          }
        }(RB) : null,
        [dB, KB, uB] = null !== (OB = null === jB || void 0 === jB ? void 0 : jB.dims) && void 0 !== OB ? OB : [0, 0, 0],
        mB = `${dB}\xd7${KB}\xd7${uB}`;
      return (0, WQ.jsx)(Zo.d, {
        close: QB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, WQ.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, WQ.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, WQ.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, WQ.jsx)(yz, {
                mood: SB
              }), (0, WQ.jsxs)("div", {
                children: [(0, WQ.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: oB(`${vz}rxTitle`)
                }), jB && (0, WQ.jsxs)("p", {
                  className: AD()("Baf2RxSubtitle", AB && (null === nB || void 0 === nB ? void 0 : nB.tone)),
                  children: [AB && !VB ? (0, WQ.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": oB(`${vz}rxChangeSize`),
                    onClick: () => {
                      if (!RB) return;
                      const BB = xz(RB, zO);
                      var OB;
                      (OB = {
                        scram: BB,
                        heat: RB.baf2RxHeat
                      }).scram && OB.heat < aj ? qB(!0) : zB(BB ? `${vz}rxResizeCooling` : `${vz}rxResizeHot`, {
                        pct: String(aj)
                      })
                    },
                    children: [mB, " \u270e"]
                  }) : mB, " \xb7 ", oB(AB ? null !== (GB = null === nB || void 0 === nB ? void 0 : nB.label) && void 0 !== GB ? GB : `${vz}rxState_running` : `${vz}rxSubPlanShort`)]
                })]
              })]
            }), (0, WQ.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [jB && !VB && (0, WQ.jsx)(jz, {
                kind: "reactor",
                busy: jB.busy.has("apart"),
                whyNot: kB ? () => {
                  zB(kB.key, kB.params)
                } : null,
                apart: () => {
                  DB.tap("apart", (() => {
                    DB.send("apart")
                  }))
                }
              }), (0, WQ.jsx)(No.m, {
                onClick: QB
              })]
            })]
          }), jB && UB && (0, WQ.jsxs)("div", {
            className: "Baf2RxBody",
            children: [AB ? (0, WQ.jsx)(Cz, {
              view: jB,
              explain: zB,
              preview: Nz(jB.status)
            }) : (0, WQ.jsx)(Hz, {
              view: jB,
              explain: zB
            }), (0, WQ.jsx)(vP, {
              text: fB ? `${Vz(oB,UB)} ${oB(`${vz}rxTapHint`)}` : Vz(oB, UB),
              tone: UB.tone,
              explained: yB
            }), VB ? (0, WQ.jsxs)(WQ.Fragment, {
              children: [(0, WQ.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: oB(`${vz}rxNotYours`)
              }), (0, WQ.jsx)(Gz, {
                status: jB.status,
                store: DB,
                readOnly: !0
              })]
            }) : AB && !ZB ? (0, WQ.jsxs)(WQ.Fragment, {
              children: [(0, WQ.jsx)(Iz, {
                view: jB,
                store: DB,
                explain: zB,
                explainOnce: lB
              }), void 0 !== jB.status.baf2RxLayout && tP(jB.status) && (0, WQ.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, WQ.jsx)(Gz, {
                  status: jB.status,
                  store: DB,
                  readOnly: !1,
                  bare: !0
                }), (0, WQ.jsx)(Oz, {
                  status: jB.status,
                  store: DB,
                  busy: jB.busy.has("fill")
                })]
              })]
            }) : (0, WQ.jsxs)(WQ.Fragment, {
              children: [(0, WQ.jsx)(Fz, {
                view: jB,
                store: DB,
                keepSize: AB ? () => {
                  NB(!1)
                } : void 0
              }), Zy(jB.dims, jB.status.baf2RxDims) && (0, WQ.jsx)(iz, {
                need: jB.status.baf2RxNeed,
                explain: zB
              }), (0, WQ.jsx)(Gz, {
                status: jB.status,
                store: DB,
                readOnly: !1
              })]
            }), pB && (0, WQ.jsx)(Qz, {
              id: "baf2ResizeTitle",
              title: `${vz}rxResizeConfirmTitle`,
              body: `${vz}rxResizeConfirmBody`,
              yes: `${vz}rxChangeSize`,
              cancel: () => {
                qB(!1)
              },
              confirm: () => {
                qB(!1), NB(!0)
              }
            })]
          })]
        })
      })
    }
    class Bl {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(BB) {
        this.view = BB;
        for (const OB of this.listeners) OB()
      }
      get() {
        return this.view
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }

    function Ol(BB) {
      let {
        commands: OB,
        store: GB,
        power: DB,
        water: QB,
        reactor: oB,
        battery: jB,
        collider: yB,
        terminal: JB,
        quests: MB,
        tutorial: PB,
        close: zB,
        leave: lB,
        askIslands: pB,
        showCore: qB,
        openSocial: ZB
      } = BB;
      const {
        userContext: NB
      } = (0, uj.d)(), RB = Kj.featureFlags.useSocialFeatures && NB.isLoggedIn(), [WB, AB] = (0, YB.useState)((() => GB.get()));
      (0, YB.useEffect)((() => GB.subscribe((() => {
        AB(GB.get())
      }))), [GB]);
      const VB = "islands" === (null === WB || void 0 === WB ? void 0 : WB.kind) ? WB.backToCore : void 0;
      return (0, WQ.jsxs)(go.Provider, {
        value: OB,
        children: ["core" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(PP, {
          view: WB.core,
          close: zB,
          askIslands: pB
        }), "dropMap" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(qP, {
          message: WB.dropMap,
          quests: MB,
          close: zB,
          leave: lB
        }), "islands" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(FP, {
          message: WB.islands,
          arrivedAtMs: WB.arrivedAtMs,
          close: VB ? () => {
            qB(VB)
          } : zB,
          leave: lB,
          openSocial: RB ? ZB : null
        }), "quests" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(uM, {
          store: MB,
          tutorial: PB,
          close: zB
        }), "transfer" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(xJ, {
          message: WB.transfer,
          arrivedAtMs: WB.arrivedAtMs,
          close: zB,
          leave: lB
        }), "power" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(fo, {
          store: DB,
          close: zB
        }), "water" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(Pj, {
          store: QB,
          close: zB
        }), "reactor" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(tz, {
          store: oB,
          close: zB
        }), "battery" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(gz, {
          store: jB,
          close: zB
        }), "collider" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(zJ, {
          store: yB,
          close: zB
        }), "terminal" === (null === WB || void 0 === WB ? void 0 : WB.kind) && (0, WQ.jsx)(eP, {
          store: JB,
          close: zB,
          send: BB => {
            OB.send(BB)
          }
        })]
      })
    }
    var Gl = GB(39154);

    function Yl(BB, OB) {
      return BB.distSq - OB.distSq
    }
    class Dl {
      constructor() {
        this.list = [], this.pool = []
      }
      add(BB, OB, GB, YB) {
        let DB = this.pool[this.list.length];
        DB || (DB = {
          x: 0,
          y: 0,
          distSq: 0,
          element: OB,
          liftRem: GB,
          dot: YB
        }, this.pool.push(DB)), DB.x = BB.x, DB.y = BB.y, DB.distSq = BB.distSq, DB.element = OB, DB.liftRem = GB, DB.dot = YB, this.list.push(DB)
      }
    }
    class Ql {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = BB, this.sizes = new WeakMap, this.observer = new ResizeObserver((BB => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const OB of BB) {
            const BB = OB.borderBoxSize[0];
            "dot" !== OB.target.dataset.crowded && 0 !== BB.inlineSize && 0 !== BB.blockSize && this.sizes.set(OB.target, {
              width: BB.inlineSize,
              height: BB.blockSize
            })
          }
        })), this.remPx = 16, this.GP = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.vN = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.vN)
      }
      observe(BB) {
        this.observer.observe(BB)
      }
      unobserve(BB) {
        this.observer.unobserve(BB)
      }
      run(BB) {
        const OB = BB.list;
        OB.sort(Yl);
        const GB = this.pxPerVw,
          YB = this.pxPerVh;
        this.GP.length = 0, this.hud && this.GP.push(...this.hud.boxes(performance.now()));
        for (const QB of OB) {
          var DB;
          const BB = this.sizes.get(QB.element);
          let OB = "no";
          if (BB && BB.width > 0) {
            const DB = QB.x * GB,
              oB = QB.y * YB - QB.liftRem * this.remPx;
            this.fit(DB, oB, BB.width, BB.height) || (OB = QB.dot && this.fit(DB, oB, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (DB = QB.element.dataset.crowded) && void 0 !== DB ? DB : "no") !== OB && ("no" === OB ? delete QB.element.dataset.crowded : QB.element.dataset.crowded = OB), "hidden" !== OB && (0, Gl.d)(QB.element, QB.x, QB.y)
        }
        OB.length = 0
      }
      fit(BB, OB, GB, YB) {
        const DB = BB - GB / 2,
          QB = BB + GB / 2,
          oB = OB - YB,
          jB = this.GP;
        for (let yB = 0; yB < jB.length; yB += 4)
          if (DB < jB[yB + 1] - 2 && QB > jB[yB] + 2 && oB < jB[yB + 3] - 2 && OB > jB[yB + 2] + 2) return !1;
        return jB.push(DB, QB, oB, OB), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.vN)
      }
    }
    const ol = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class jl {
      constructor() {
        this.cards = ol.map((BB => document.getElementsByClassName(BB))), this.watched = ol.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(BB) {
        BB - this.refreshedAt > 1e3 && (this.refreshedAt = BB, this.stale = !0);
        for (let GB = 0; GB < this.cards.length; GB++) {
          var OB;
          const BB = null !== (OB = this.cards[GB][0]) && void 0 !== OB ? OB : null;
          BB !== this.watched[GB] && this.watch(GB, BB)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let BB = 0; BB < this.watched.length; BB++) this.watch(BB, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const BB = this.list;
        BB.length = 0;
        for (const OB of this.watched) {
          if (!OB || OB.closest(".NoRoom")) continue;
          const GB = OB.getBoundingClientRect();
          let YB = GB.top,
            DB = GB.bottom;
          if (OB === this.watched[0] && this.hud) {
            const BB = this.hud.getBoundingClientRect();
            YB = Math.max(YB, BB.top), DB = Math.min(DB, BB.bottom)
          }
          GB.width > 0 && DB > YB && BB.push(GB.left, GB.right, YB, DB)
        }
      }
      watch(BB, OB) {
        const GB = this.watched[BB];
        var YB, DB;
        (GB && this.sizes.unobserve(GB), this.watched[BB] = OB, this.stale = !0, OB && this.sizes.observe(OB), 0 === BB) && (null === (YB = this.hud) || void 0 === YB || YB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (DB = null === OB || void 0 === OB ? void 0 : OB.closest(".Baf2QuestHud")) && void 0 !== DB ? DB : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    var yl = GB(39157);
    class Jl {
      constructor(BB) {
        this.onElement = BB, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(BB) {
        const OB = [];
        for (let GB = 0; GB + 4 < BB.length; GB += 5) {
          const YB = [BB[GB], BB[GB + 1], BB[GB + 2]];
          OB.push({
            key: YB.join(","),
            pos: YB,
            status: OD[BB[GB + 3]],
            kind: dO[BB[GB + 4]]
          })
        }
        this.markers = OB, this.keys = new Set(OB.map((BB => {
          let {
            key: OB
          } = BB;
          return OB
        }))), this.notify()
      }
      covers(BB) {
        return this.keys.has(BB)
      }
      get() {
        return this.markers
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      bind(BB) {
        let OB = this.refs.get(BB);
        return OB || (OB = OB => {
          const GB = this.elements.get(BB);
          var YB, DB;
          GB && (null === (YB = this.onElement) || void 0 === YB || YB.call(this, GB, !1));
          OB ? (this.elements.set(BB, OB), null === (DB = this.onElement) || void 0 === DB || DB.call(this, OB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, OB)), OB
      }
      onAfterRender(BB, OB, GB) {
        for (const YB of this.markers) {
          const DB = this.elements.get(YB.key);
          if (!DB) continue;
          const QB = (0, yl.b)(DB, BB, OB, YB.pos, 1.05, 24);
          QB && GB.add(QB, DB, .45, !0)
        }
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
    }
    const Ml = {
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
    const Pl = (0, YB.memo)((function(BB) {
        let {
          status: OB,
          kind: GB,
          bindRef: YB
        } = BB;
        const {
          t: DB
        } = (0, UD.H)(), QB = function(BB, OB) {
          var GB;
          if ("noFuel" === BB) {
            var YB, DB;
            const BB = null === (YB = iO[OB]) || void 0 === YB || null === (DB = YB.fuels) || void 0 === DB ? void 0 : DB.find((BB => YG.includes(BB)));
            return null !== BB && void 0 !== BB ? BB : Ml.noFuel
          }
          return void 0 !== (null === (GB = iO[OB]) || void 0 === GB ? void 0 : GB.cryoMade) ? "noOutlet" === BB ? "Fluid Pipe" : "noInput" === BB ? "Biomass" : Ml[BB] : Ml[BB]
        }(OB, GB);
        return (0, WQ.jsxs)("div", {
          className: AD()("Baf2StallMarker", OB),
          ref: YB,
          hidden: !0,
          children: [QB && (0, WQ.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, WQ.jsx)(kD.c, {
              itemName: QB,
              amount: 0
            })
          }), (0, WQ.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === OB ? "?" : "!"
          }), (0, WQ.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: DB(`buildAFactory2Game:stallTag_${OB}`)
          })]
        })
      })),
      zl = (0, YB.memo)((function(BB) {
        let {
          controller: OB
        } = BB;
        const [GB, DB] = (0, YB.useState)((() => OB.get()));
        return (0, YB.useEffect)((() => (DB(OB.get()), OB.subscribe((() => {
          DB(OB.get())
        })))), [OB]), (0, WQ.jsx)("div", {
          className: "Baf2StallMarkers",
          children: GB.map((BB => (0, WQ.jsx)(Pl, {
            status: BB.status,
            kind: BB.kind,
            bindRef: OB.bind(BB.key)
          }, BB.key)))
        })
      })),
      ll = qG.l + 150;
    class pl {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(BB, OB) {
        const GB = OB - BB;
        null === this.offset || GB < this.offset ? this.offset = GB : this.offset = Math.min(GB, this.offset + .02 * (OB - this.sampledAt)), this.sampledAt = OB
      }
      toLocal(BB) {
        var OB;
        return BB + (null !== (OB = this.offset) && void 0 !== OB ? OB : 0) + ll
      }
    }
    var ql = GB(39162);
    const Zl = 15 * Math.PI / 180,
      Nl = Math.SQRT2,
      Rl = [4, 2];

    function Wl(BB, OB) {
      const GB = [1 / 0, 1 / 0, 1 / 0],
        YB = [-1 / 0, -1 / 0, -1 / 0];
      for (const yB of BB)
        for (let BB = 0; BB < 3; BB++) GB[BB] = Math.min(GB[BB], yB[BB]), YB[BB] = Math.max(YB[BB], yB[BB]);
      const DB = (GB[0] + YB[0]) / 2,
        QB = (GB[1] + YB[1]) / 2,
        oB = (GB[2] + YB[2]) / 2;
      let jB = 0;
      for (const yB of BB) jB = Math.max(jB, Math.hypot(yB[0] - DB, yB[1] - QB, yB[2] - oB));
      return {
        x: DB,
        y: QB,
        z: oB,
        r: jB + OB
      }
    }

    function Al(BB, OB, GB) {
      const YB = OB.x - BB.x,
        DB = OB.y - BB.y,
        QB = OB.z - BB.z,
        oB = Math.sqrt(YB * YB + DB * DB + QB * QB);
      if (oB <= OB.r + 8) return 1;
      const jB = OB.r / oB,
        yB = Math.sqrt(1 - jB * jB),
        JB = yB < -BB.cosHalf,
        MB = (YB * BB.dx + DB * BB.dy + QB * BB.dz) / oB;
      if (!JB && MB < BB.cosHalf * yB - BB.sinHalf * jB) return 0;
      const PB = GB * Nl * BB.frameMs * BB.pxPerBlock / (oB - OB.r);
      for (let zB = 0; zB < Rl.length; zB++)
        if (PB * Rl[zB] <= 1) return Rl[zB];
      return 1
    }

    function Vl(BB, OB) {
      return {
        name: BB,
        at: OB,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const Sl = [0, 0, 0];

    function nl(BB, OB, GB) {
      let [, YB, DB, QB, oB, jB] = OB;
      const yB = qG.g * (null !== oB && void 0 !== oB ? oB : 1),
        JB = [];
      for (let lB = 0; lB < YB.length; lB += 3) JB.push([YB[lB] + .5, YB[lB + 1] + .65, YB[lB + 2] + .5]);
      const MB = [];
      for (let lB = 0; lB < JB.length - 1; lB++) {
        const [BB, OB] = [JB[lB], JB[lB + 1]];
        MB.push([(BB[0] + OB[0]) / 2, (BB[1] + OB[1]) / 2, (BB[2] + OB[2]) / 2])
      }
      const PB = JB.slice(1, -1),
        zB = new Uint8Array(PB.length);
      for (const lB of null !== jB && void 0 !== jB ? jB : []) zB[lB >> 1] |= 1 & lB ? 2 : 1;
      return {
        island: BB,
        length: PB.length,
        loop: QB,
        cellsPerMs: yB,
        edges: MB,
        DZ: PB,
        bounds: Wl([...MB, ...PB], .3),
        changed: !0,
        culled: !1,
        hide: zB,
        items: DB.map((BB => {
          let [OB, YB] = BB;
          return Vl(OB, (0, qG.E)(OB, YB, GB, yB).at)
        }))
      }
    }

    function Ul(BB, OB) {
      const {
        items: GB
      } = BB;
      if (0 === GB.length) return;
      const YB = BB.length / BB.cellsPerMs,
        DB = Math.floor((OB - GB[0].at) / YB) - 1;
      if (DB > 0)
        for (const QB of GB) QB.at += DB * YB
    }

    function fl(BB, OB) {
      const GB = Math.min(Math.floor(OB), BB.length - 1),
        YB = BB.hide[GB];
      return 0 !== YB && 0 !== (YB & (OB - GB < .5 ? 1 : 2))
    }

    function kl(BB, OB) {
      const GB = Math.min(Math.floor(OB), BB.length - 1),
        YB = OB - GB,
        DB = YB < .5,
        QB = DB ? BB.edges[GB] : BB.DZ[GB],
        oB = DB ? BB.DZ[GB] : BB.edges[GB + 1],
        jB = DB ? 2 * YB : 2 * YB - 1;
      Sl[0] = QB[0] + (oB[0] - QB[0]) * jB, Sl[1] = QB[1] + (oB[1] - QB[1]) * jB, Sl[2] = QB[2] + (oB[2] - QB[2]) * jB
    }
    const dl = Math.PI / 4;
    class Kl {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new pl, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.vN = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(BB) {
        const OB = performance.now();
        this.clock.sample(BB.baf2BeltLinesAt, OB), this.queue(BB.baf2BeltLinesAt, BB, 0, null, null, 0), this.applyDue(OB)
      }
      onMoves(BB) {
        const OB = performance.now(),
          GB = BB.baf2BeltMovesAt;
        this.clock.sample(GB, OB);
        for (const [YB, DB, QB, oB] of BB.baf2BeltMoveList) null === DB ? this.queue(GB - QB, null, YB, null, null, null !== oB && void 0 !== oB ? oB : 0) : this.queue(GB - QB, null, YB, DB, null !== oB && void 0 !== oB ? oB : null, 0);
        this.applyDue(OB)
      }
      start(BB) {
        this.pool = new ql.c(BB, {
          scale: .3,
          yaw: dl
        }, 64), this.vN(), window.addEventListener("resize", this.vN)
      }
      onAfterRender(BB) {
        const {
          pool: OB
        } = this;
        if (!OB) return;
        const GB = performance.now(),
          YB = GB - this.lastRenderAt;
        this.lastRenderAt = GB, YB < 100 && (this.frameMs += .1 * (YB - this.frameMs));
        const DB = GB + this.frameMs;
        this.applyDue(DB);
        const QB = BB.cameraPosition,
          oB = OB.follow(QB);
        this.setView(BB, QB);
        const jB = this.frame++;
        for (let yB = 0; yB < this.shown.length; yB++) {
          const BB = this.shown[yB],
            GB = Al(this.view, BB.bounds, BB.cellsPerMs),
            YB = BB.culled && 0 !== GB;
          if (BB.culled = 0 === GB, !oB && !BB.changed && !YB && (0 === GB || (jB + yB) % GB !== 0)) continue;
          BB.changed = !1, BB.loop && (Ul(BB, DB), (0, qG.A)(BB.items, BB.length, DB, BB.cellsPerMs));
          let QB = BB.length;
          for (let jB = 0; jB < BB.items.length; jB++) {
            const GB = BB.items[jB],
              YB = (0, qG.G)(GB.at, QB, DB, BB.cellsPerMs);
            if (QB = YB - qG.r, fl(BB, YB)) {
              null === GB.kind || GB.hidden || (GB.kind.hide(GB.slot), GB.hidden = !0);
              continue
            }
            let yB = GB.kind;
            if (null === yB) {
              if (yB = OB.kindOf(GB.name), null === yB) continue;
              GB.kind = yB, GB.slot = yB.take(), GB.hidden = !0, GB.drawn = NaN
            } else if (YB === GB.drawn && !GB.hidden && !oB) continue;
            kl(BB, YB), yB.write(GB.slot, Sl[0], Sl[1], Sl[2]), GB.hidden = !1, GB.drawn = YB
          }
        }
        OB.commit()
      }
      dispose() {
        var BB;
        window.removeEventListener("resize", this.vN), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (BB = this.pool) || void 0 === BB || BB.dispose(), this.pool = null
      }
      setView(BB, OB) {
        const {
          cameraDir: GB,
          lastDir: YB
        } = this, DB = BB.cameraDirection;
        for (let MB = 0; MB < 3; MB++) YB[MB] = GB[MB], GB[MB] = DB[MB];
        const QB = GB[0] * YB[0] + GB[1] * YB[1] + GB[2] * YB[2],
          oB = Number.isNaN(QB) ? 0 : Math.acos(Math.min(1, Math.max(-1, QB))),
          {
            width: jB,
            height: yB
          } = this,
          JB = BB.tanHalfFovX;
        ! function(BB, OB, GB, YB, DB, QB, oB) {
          let jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          BB.x = OB[0], BB.y = OB[1], BB.z = OB[2], BB.dx = GB[0], BB.dy = GB[1], BB.dz = GB[2];
          const yB = Math.min(Math.PI, Math.atan(Math.sqrt(YB * YB + DB * DB)) + Zl + jB);
          BB.cosHalf = Math.cos(yB), BB.sinHalf = Math.sin(yB), BB.pxPerBlock = QB / (2 * DB), BB.frameMs = oB
        }(this.view, OB, GB, JB, JB * yB / jB, yB * window.devicePixelRatio, this.frameMs, oB)
      }
      queue(BB, OB, GB, YB, DB, QB) {
        const oB = Math.max(this.clock.toLocal(BB), this.lastPendingAt);
        this.lastPendingAt = oB, this.pending.push({
          at: oB,
          lines: OB,
          line: GB,
          name: YB,
          pos: DB,
          idx: QB
        })
      }
      applyDue(BB) {
        const {
          pending: OB
        } = this;
        for (; this.pendingHead < OB.length && OB[this.pendingHead].at <= BB;) {
          const BB = OB[this.pendingHead++];
          if (BB.lines) this.applyLines(BB.lines, BB.at), BB.lines = null;
          else {
            const OB = this.lines.get(BB.line);
            OB && this.applyMove(OB, BB, BB.at)
          }
        }
        this.pendingHead === OB.length ? (OB.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > OB.length && (OB.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(BB, OB) {
        this.clearIsland(BB.baf2BeltIsland);
        for (const GB of BB.baf2BeltLineList) this.lines.set(GB[0], nl(BB.baf2BeltIsland, GB, OB));
        this.shown = [...this.lines.values()]
      }
      applyMove(BB, OB, GB) {
        let {
          name: YB,
          pos: DB,
          idx: QB
        } = OB;
        BB.changed = !0, BB.loop && (Ul(BB, GB), (0, qG.A)(BB.items, BB.length, GB, BB.cellsPerMs)), null !== YB && null !== DB ? (0, qG.B)(BB.items, BB.length, Vl(YB, GB), DB, GB, BB.cellsPerMs) : null !== YB ? BB.items.push(Vl(YB, GB)) : BB.items.length > QB && this.release((0, qG.K)(BB.items, BB.length, GB, BB.cellsPerMs, QB))
      }
      clearIsland(BB) {
        for (const [OB, GB] of this.lines)
          if (GB.island === BB) {
            for (const BB of GB.items) this.release(BB);
            this.lines.delete(OB)
          }
      }
      release(BB) {
        null !== BB.kind && (BB.kind.release(BB.slot), BB.kind = null, BB.slot = -1, BB.hidden = !0, BB.drawn = NaN)
      }
    }
    var ul = GB(37263),
      ml = GB(39173);

    function Il(BB) {
      let {
        depth: OB,
        store: GB,
        t: DB
      } = BB;
      const QB = function(BB) {
        const [OB, GB] = (0, YB.useState)(BB.lastPlayerY());
        return (0, tJ.f)(iD, GB), (0, YB.useEffect)((() => {
          GB(BB.lastPlayerY())
        }), [BB]), OB
      }(GB);
      if (null === QB) return null;
      const [oB, jB] = OB, yB = QB > oB ? oB : null !== jB && QB < jB ? jB : null, JB = {
        y: pQ(QB),
        target: null === yB ? "" : pQ(yB)
      };
      return (0, WQ.jsx)("span", {
        className: AD()("Baf2QuestDepth", {
          Reached: null === yB
        }),
        children: DB(`${YM}${null===yB?"questDepthReached":"questDepth"}`, JB)
      })
    }

    function Fl(BB) {
      let {
        also: OB,
        view: GB,
        t: YB
      } = BB;
      return (0, WQ.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, WQ.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, WQ.jsx)("strong", {
            children: YB(`${YM}questAlsoDownHere`)
          }), (0, WQ.jsx)("span", {
            className: "Baf2QuestChips",
            children: OB.map((BB => {
              let [OB, DB, QB, oB] = BB;
              return (0, WQ.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": YB(`${YM}questAlsoItem`, {
                  item: QM(YB, GB.itemNames[OB], OB),
                  have: String(DB),
                  need: String(QB)
                }),
                children: [(0, WQ.jsx)(yM, {
                  item: OB
                }), (0, WQ.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${DB}/${QB}`
                }), null !== oB && (0, WQ.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: YB(`${YM}questAlsoDepth`, {
                    y: pQ(oB)
                  })
                })]
              }, OB)
            }))
          })]
        })]
      })
    }
    var il = GB(3831);

    function Ll(BB) {
      let {
        expanded: OB,
        inventoryOpen: GB,
        children: DB
      } = BB;
      const QB = (0, YB.useRef)(null);
      return (0, YB.useEffect)((() => {
        const BB = QB.current,
          OB = null === BB || void 0 === BB ? void 0 : BB.closest(".RightElements"),
          YB = null === BB || void 0 === BB ? void 0 : BB.firstElementChild;
        if (!BB || !OB || !YB) return;
        return (0, ml.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [OB, YB], (() => {
          const DB = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === DB.length) return;
          const QB = Math.max(...DB.map((BB => BB.getBoundingClientRect().bottom))),
            oB = OB.getBoundingClientRect(),
            jB = GB ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (jB) {
            const OB = parseFloat(getComputedStyle(YB).marginLeft) + parseFloat(getComputedStyle(YB).marginRight),
              GB = oB.right - jB.getBoundingClientRect().right - 8 - OB;
            BB.style.setProperty("--baf2-quest-room", `${GB}px`), BB.classList.toggle("NoRoom", GB < 150)
          } else BB.style.removeProperty("--baf2-quest-room"), BB.classList.remove("NoRoom");
          const yB = QB - oB.top + 8,
            JB = function(BB, OB, GB) {
              const YB = OB.getBoundingClientRect(),
                DB = BB.getBoundingClientRect(),
                QB = (0, il.j)(DB.left, DB.right, YB.top + GB);
              if (null !== QB && QB < YB.bottom) return QB - YB.top;
              return YB.height - (parseFloat(getComputedStyle(OB).paddingBottom) || 0)
            }(BB, OB, yB) - 8,
            MB = window.innerHeight / 2 - oB.top,
            {
              top: PB,
              maxHeight: zB
            } = function(BB, OB, GB, YB, DB) {
              const QB = Math.min(GB, Math.max(0, OB - BB)),
                oB = DB ? BB : Math.max(BB, Math.min(YB - QB / 2, OB - QB));
              return {
                top: oB,
                maxHeight: Math.max(0, OB - oB)
              }
            }(yB, JB, function(BB) {
              const OB = BB.firstElementChild,
                GB = OB ? OB.scrollHeight - OB.clientHeight : 0;
              return BB.getBoundingClientRect().height + Math.max(0, GB)
            }(YB), MB, RQ());
          BB.style.top = `${PB}px`, BB.style.maxHeight = `${zB}px`
        }))
      }), [GB]), (0, WQ.jsx)("div", {
        ref: QB,
        className: AD()("Baf2QuestHud", {
          Expanded: OB
        }),
        children: DB
      })
    }

    function gl(BB) {
      let {
        amount: OB,
        t: GB
      } = BB;
      return (0, WQ.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, WQ.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, WQ.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: GB(`${YM}questStepsDone`, {
            amount: String(OB)
          })
        })]
      })
    }

    function rl(BB) {
      let {
        pulse: OB
      } = BB;
      return 0 === OB ? null : (0, WQ.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, OB)
    }

    function Xl(BB) {
      var OB;
      let {
        store: GB
      } = BB;
      const DB = (0, tJ.i)(FD, GB.get()),
        [QB, oB] = (0, YB.useState)(!1),
        {
          t: jB
        } = (0, UD.H)(),
        yB = (0, ZQ.i)(NQ),
        {
          openInGameMenuName: JB,
          openEverythingMenuName: MB
        } = (0, ND.o)(["openInGameMenuName", "openEverythingMenuName"]),
        PB = "inventory" === JB && null === MB,
        zB = null !== JB && !PB || null !== MB;
      if (! function(BB) {
          return null !== BB.name || null !== BB.side
        }(DB) || zB || "off" === DB.tutorial) return null;
      const lB = ED(DB.rows),
        pB = lB.filter((BB => BB.done)).length,
        qB = function(BB, OB) {
          const GB = aD(BB);
          let YB = 0;
          return BB.filter(((BB, DB) => !!BB.justFinished || !(BB.done || DB < GB || YB > OB) && (YB++, !0)))
        }(DB.rows, yB ? 0 : 2),
        ZB = yB ? qB : function(BB, OB) {
          const GB = OB.filter((BB => !BB.justFinished));
          if (GB.length < 2) return [...OB];
          const YB = BB.indexOf(GB[0]),
            DB = BB.indexOf(GB[GB.length - 1]),
            QB = new Set(ED(BB));
          return BB.filter(((BB, GB) => OB.includes(BB) || BB.done && QB.has(BB) && GB > YB && GB < DB))
        }(DB.rows, qB),
        NB = QB ? DB.rows : ZB,
        RB = QB || yB ? [] : function(BB, OB) {
          const GB = new Array(OB.length + 1).fill(0),
            YB = new Set(ED(BB));
          let DB = 0;
          for (const QB of BB) DB < OB.length && QB === OB[DB] ? DB++ : QB.done && YB.has(QB) && GB[DB]++;
          return GB
        }(DB.rows, ZB),
        WB = QB || ZB.length < DB.rows.length || null !== DB.reward,
        AB = wD(DB),
        VB = AB ? jB(`${YM}questLineComplete`) : DB.tier ? PM(jB, DB.tier) : jB(`${YM}currentQuest`),
        SB = function(BB) {
          var OB, GB;
          if (wD(BB)) return null;
          const YB = null === (OB = BB.chapters) || void 0 === OB ? void 0 : OB.find((OB => {
            let [GB] = OB;
            return GB === BB.tier
          }));
          if (!YB) return null;
          const DB = YB[1].filter((BB => !BB[4]));
          if (0 === DB.length) return null;
          const QB = null === (GB = BB.name) || void 0 === GB ? void 0 : GB[0],
            oB = BB => DB.findIndex((OB => OB[0] === QB && (!BB || !OB[3]))),
            jB = oB(!0),
            yB = jB >= 0 ? jB : oB(!1);
          if (yB >= 0) return [yB + 1, DB.length];
          const JB = DB.filter((BB => BB[3])).length;
          return [Math.min(JB + 1, DB.length), DB.length]
        }(DB);
      return (0, WQ.jsx)(ul.e, {
        placement: "topRight",
        children: (0, WQ.jsx)(Ll, {
          expanded: QB,
          inventoryOpen: PB,
          children: (0, WQ.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: DM,
            children: [null !== DB.name && (0, WQ.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, WQ.jsx)(rl, {
                pulse: DB.pulse
              }), (0, WQ.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, WQ.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [VB, SB && (0, WQ.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": jB(`${YM}questPlaceLabel`, {
                      n: String(SB[0]),
                      total: String(SB[1])
                    }),
                    children: jB(`${YM}questPlace`, {
                      n: String(SB[0]),
                      total: String(SB[1])
                    })
                  }), DB.tier && DB.core && !AB && (0, WQ.jsx)(zM, {
                    core: DB.core,
                    t: jB
                  })]
                })
              }), (0, WQ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: jB(`${YM}${DB.name[0]}`, oM(DB.name[1]))
              }), (lB.length > 1 || WB) && (0, WQ.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [lB.length > 1 && (0, WQ.jsx)(lM, {
                  rows: lB,
                  t: jB
                }), WB && (0, WQ.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": QB,
                  onClick: () => {
                    oB(!QB)
                  },
                  children: [(0, WQ.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: jB(`${YM}questStepsToggle`, {
                      done: String(pB),
                      total: String(lB.length)
                    })
                  }), (0, WQ.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: QB ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, WQ.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [NB.map(((BB, OB) => {
                  var QB;
                  const oB = BB.current && DB.depth;
                  return (0, WQ.jsxs)(YB.Fragment, {
                    children: [(null !== (QB = RB[OB]) && void 0 !== QB ? QB : 0) > 0 && (0, WQ.jsx)(gl, {
                      amount: RB[OB],
                      t: jB
                    }), (0, WQ.jsx)(pM, {
                      row: BB,
                      view: DB,
                      t: jB,
                      extra: oB && (0, WQ.jsx)(Il, {
                        depth: oB,
                        store: GB,
                        t: jB
                      })
                    })]
                  }, BB.id)
                })), (null !== (OB = RB[NB.length]) && void 0 !== OB ? OB : 0) > 0 && (0, WQ.jsx)(gl, {
                  amount: RB[NB.length],
                  t: jB
                }), DB.also.length > 0 && (0, WQ.jsx)(Fl, {
                  also: DB.also,
                  view: DB,
                  t: jB
                })]
              }), QB && DB.reward && (0, WQ.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [jB(`${YM}questReward`), (0, WQ.jsx)(yM, {
                  item: DB.reward
                }), QM(jB, DB.itemNames[DB.reward], DB.reward)]
              })]
            }), DB.side && (0, WQ.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [rD(DB, Date.now()) && (0, WQ.jsx)(rl, {
                pulse: DB.sideCameUpAt
              }), (0, WQ.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: jB(`${YM}questSide`)
              }), (0, WQ.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: jB(`${YM}${DB.side.name[0]}`, oM(DB.side.name[1]))
              }), (0, WQ.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, WQ.jsx)(pM, {
                  row: DB.side.row,
                  view: DB,
                  t: jB
                })
              })]
            })]
          })
        })
      })
    }
    const wl = "baf2ToastView";
    class El {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = BB, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: BB,
          holdMs: OB
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const BB = this.dropCovered();
          BB && this.show(BB.message, BB.holdMs)
        }), 250));
        const GB = this.dropCovered();
        null !== GB && (GB.holdMs > 0 || "baf2ToastCelebrate" === GB.message.baf2ToastStyle) && "baf2ToastCelebrate" !== BB.baf2ToastStyle && this.show(GB.message, GB.holdMs);
        const YB = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== BB.baf2ToastStyle && YB > 0) return this.pending = {
          message: BB,
          holdMs: OB
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const BB = this.pending;
          this.pending = null, BB && this.present(BB.message, BB.holdMs)
        }), YB));
        this.present(BB, OB)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(BB, OB) {
        this.clearTimers(), this.pending = null;
        const GB = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: BB.baf2ToastText,
          style: BB.baf2ToastStyle,
          swapped: GB,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === BB.baf2ToastStyle ? 1500 : OB), this.tM();
        const YB = Math.min(8e3, Math.max(1e3, BB.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), YB)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.tM(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.tM()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const BB = this.covering;
        return this.covering = null, BB
      }
      tM() {
        mD.o.tM(wl, this.view, !0)
      }
    }
    var cl = GB(70);
    const hl = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function al(BB) {
      let {
        store: OB
      } = BB;
      const GB = (0, tJ.i)(wl, OB.get()),
        {
          openInGameMenuName: YB,
          openEverythingMenuName: DB
        } = (0, ND.o)(["openInGameMenuName", "openEverythingMenuName"]),
        QB = GB && (0, WQ.jsxs)("div", {
          className: AD()("Baf2Toast", hl[GB.style], {
            Swapped: GB.swapped,
            Leaving: GB.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === GB.style && (0, WQ.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, WQ.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, WQ.jsx)(dD.b, {
              text: GB.text
            })
          })]
        }, GB.id);
      return null !== YB && null === DB ? (0, cl.createPortal)((0, WQ.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: QB
      }), document.body) : (0, WQ.jsx)(ul.e, {
        children: QB
      })
    }
    const el = "baf2AreaView";
    class Tl {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.sJ = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.sJ = null
      }
      arrive(BB, OB) {
        OB && function(BB) {
          return "home" === BB.baf2AreaPlace && void 0 !== BB.baf2AreaNameText
        }(BB) ? this.sJ = BB : this.show(BB)
      }
      release() {
        const BB = this.sJ;
        null !== BB && this.show(BB)
      }
      show(BB) {
        this.clearTimer(), this.sJ = null;
        const OB = void 0 === BB.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: BB,
          ms: OB
        }, this.tM(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.tM()
        }), OB)
      }
      dispose() {
        this.clearTimer(), this.sJ = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      tM() {
        mD.o.tM(el, this.view, !0)
      }
    }

    function bl(BB) {
      var OB;
      let {
        store: GB
      } = BB;
      const {
        t: YB
      } = (0, UD.H)(), DB = (0, tJ.i)(el, GB.get());
      if (!DB) return null;
      const {
        area: QB
      } = DB, oB = QB.baf2AreaResetMinutes;
      return (0, WQ.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": QB.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${DB.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, WQ.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), QB.baf2AreaHeading && (0, WQ.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: YB(QB.baf2AreaHeading)
        }), (0, WQ.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (OB = QB.baf2AreaNameText) && void 0 !== OB ? OB : YB(QB.baf2AreaName)
        }), QB.baf2AreaNote && (0, WQ.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: YB(QB.baf2AreaNote)
        }), void 0 !== oB && (0, WQ.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: YB("buildAFactory2Game:areaWildsReset", {
            time: qQ(YB, 60 * oB)
          })
        })]
      }, DB.id)
    }
    const Cl = "baf2GearGauge";
    class Hl {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      kR(BB) {
        var OB;
        if (this.clearLinger(), null === BB.gearPowerKind) return void this.set(null);
        const GB = "jetpack" === BB.gearPowerKind && (YB = BB.gearChargeState, DB = BB.gearCharge, "flying" === YB || "charging" === YB || "outOfCharge" === YB || "ceiling" === YB || "offPlot" === YB || "noPower" === YB && DB <= 0);
        var YB, DB;
        const QB = !0 === (null === (OB = this.view) || void 0 === OB ? void 0 : OB.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          oB = GB || "jetpack" === BB.gearPowerKind && QB;
        this.set({
          gauge: BB,
          jetShown: oB
        }), oB && !GB && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(BB) {
        this.view = BB, mD.o.tM(Cl, BB, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const vl = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function sl(BB) {
      let {
        store: OB
      } = BB;
      const GB = (0, tJ.i)(Cl, OB.get());
      return GB ? "jetpack" === GB.gauge.gearPowerKind ? (0, WQ.jsx)(xl, {
        view: GB
      }) : (0, WQ.jsx)(tl, {
        gauge: GB.gauge
      }) : null
    }

    function xl(BB) {
      let {
        view: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), {
        gauge: YB
      } = OB, DB = YB.gearChargeMax > 0 ? Math.max(0, Math.min(1, YB.gearCharge / YB.gearChargeMax)) : 0, QB = vl[YB.gearChargeState], oB = QB ? GB(QB) : null;
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2JetArc", {
          Shown: OB.jetShown,
          Low: DB < .2,
          Warm: DB >= .2 && DB < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - DB)
        },
        "aria-hidden": !OB.jetShown,
        children: [(0, WQ.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, WQ.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Bp,
            pathLength: 100
          }), (0, WQ.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Bp,
            pathLength: 100
          })]
        }), (0, WQ.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * DB), "%"]
        }), oB && (0, WQ.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: oB
        })]
      })
    }

    function tl(BB) {
      let {
        gauge: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), YB = function(BB, OB) {
        switch (OB.gearPowerKind) {
          case "skyPack":
            return BB("buildAFactory2Game:gearSkyPack", {
              charge: OB.gearCharge,
              max: OB.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return BB("buildAFactory2Game:gearIslandDraw", {
              power: sB(OB.gearIslandPower),
              cost: sB(OB.gearCostPerUse)
            });
          case "barrier":
            return BB("buildAFactory2Game:gearBarrier", {
              shield: Math.round(OB.gearCharge),
              max: OB.gearChargeMax,
              power: sB(OB.gearIslandPower)
            });
          default:
            return null
        }
      }(GB, OB);
      return null === YB ? null : (0, WQ.jsx)(ul.e, {
        children: (0, WQ.jsx)("div", {
          className: AD()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === OB.gearChargeState || "outOfCharge" === OB.gearChargeState
          }),
          role: "status",
          children: YB
        })
      })
    }
    const Bp = (() => {
      const BB = BB => {
        const OB = BB * Math.PI / 180;
        return `${(40*Math.cos(OB)).toFixed(2)} ${(40*Math.sin(OB)).toFixed(2)}`
      };
      return `M ${BB(160)} A 40 40 0 1 1 ${BB(380)}`
    })();
    class Op {
      constructor(BB) {
        this.onElement = BB, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      kR(BB) {
        let OB = BB.baf2LabelsReset || BB.baf2LabelsIsland !== this.island;
        OB && (this.labels.clear(), this.island = BB.baf2LabelsIsland);
        for (const [GB, YB, DB, QB, oB] of BB.baf2LabelsList) {
          const BB = `${GB},${YB},${DB}`,
            jB = this.labels.get(BB);
          null === QB ? OB = this.labels.delete(BB) || OB : jB && jB.item === QB && (jB.count === oB || jB.count >= 0 && oB >= 0) ? jB.count !== oB && (jB.count = oB, this.writeCount(BB, oB)) : (this.labels.set(BB, {
            key: BB,
            pos: [GB, YB, DB],
            item: QB,
            count: oB
          }), this.writeCount(BB, oB), OB = !0)
        }
        if (this.changes++, OB) {
          this.snapshot = [...this.labels.values()];
          for (const BB of this.listeners) BB()
        }
      }
      bindCount(BB) {
        const OB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${BB}`;
        let GB = this.countRefs.get(OB);
        return GB || (GB = GB => {
          var YB, DB;
          GB ? (this.countElements.set(OB, GB), this.writeCount(BB, null !== (YB = null === (DB = this.labels.get(BB)) || void 0 === DB ? void 0 : DB.count) && void 0 !== YB ? YB : -1)) : (this.countElements.delete(OB), this.countRefs.delete(OB))
        }, this.countRefs.set(OB, GB)), GB
      }
      setCountWords(BB) {
        this.countWords = BB;
        for (const [OB, GB] of this.labels) this.writePart(`words|${OB}`, BB(GB.count), GB.count)
      }
      writeCount(BB, OB) {
        this.writePart(`bare|${BB}`, lQ(OB), OB), this.countElements.has(`words|${BB}`) && this.writePart(`words|${BB}`, this.countWords(OB), OB)
      }
      writePart(BB, OB, GB) {
        const YB = this.countElements.get(BB);
        if (!YB || GB < 0) return;
        const DB = YB.firstChild;
        DB && 3 === DB.nodeType && !DB.nextSibling ? DB.nodeValue !== OB && (DB.nodeValue = OB) : YB.textContent !== OB && (YB.textContent = OB)
      }
      list() {
        return this.snapshot
      }
      at(BB) {
        return this.labels.get(`${BB[0]},${BB[1]},${BB[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      bind(BB) {
        let OB = this.refs.get(BB);
        return OB || (OB = OB => {
          const GB = this.elements.get(BB);
          var YB, DB;
          GB && (null === (YB = this.onElement) || void 0 === YB || YB.call(this, GB, !1));
          OB ? (this.elements.set(BB, OB), null === (DB = this.onElement) || void 0 === DB || DB.call(this, OB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, OB)), OB
      }
      onAfterRender(BB, OB, GB, YB) {
        for (const DB of this.snapshot) {
          const QB = this.elements.get(DB.key);
          if (!QB) continue;
          if (YB(DB.key)) {
            (0, Gl.f)(QB, !0);
            continue
          }
          const oB = (0, yl.b)(QB, BB, OB, DB.pos, 1.1, 24);
          oB && GB.add(oB, QB, 0, !1)
        }
      }
    }
    const Gp = (0, YB.memo)((function(BB) {
        let {
          item: OB
        } = BB;
        return (0, WQ.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, WQ.jsx)(kD.c, {
            itemName: OB,
            amount: 0
          })
        })
      })),
      Yp = (0, YB.memo)((function(BB) {
        let {
          label: OB,
          bindRef: GB,
          countRef: YB,
          wordsRef: DB
        } = BB;
        return (0, WQ.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: GB,
          hidden: !0,
          children: [(0, WQ.jsx)(Gp, {
            item: OB.item
          }), OB.count >= 0 && (0, WQ.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, WQ.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: DB
            }), (0, WQ.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: YB
            })]
          })]
        })
      })),
      Dp = (0, YB.memo)((function(BB) {
        let {
          store: OB
        } = BB;
        const {
          t: GB
        } = (0, UD.H)(), [DB, QB] = (0, YB.useState)((() => OB.list()));
        return (0, YB.useEffect)((() => (QB(OB.list()), OB.subscribe((() => {
          QB(OB.list())
        })))), [OB]), (0, YB.useEffect)((() => {
          OB.setCountWords((BB => GB("buildAFactory2Game:labelSiloCount", {
            count: lQ(BB)
          })))
        }), [OB, GB]), (0, WQ.jsx)("div", {
          className: "Baf2IslandLabels",
          children: DB.map((BB => -2 === BB.count ? null : (0, WQ.jsx)(Yp, {
            label: BB,
            bindRef: OB.bind(BB.key),
            countRef: OB.bindCount(BB.key),
            wordsRef: OB.bindCount(BB.key, "words")
          }, BB.key)))
        })
      })),
      Qp = {
        read: () => !0,
        write: () => {}
      };

    function op(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }

    function jp(BB) {
      let [OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB] = BB;
      const lB = void 0 === PB || void 0 === zB ? function(BB) {
        return [Math.floor((BB - 1) / 2), 0]
      }(QB) : [PB, zB];
      return {
        kind: 0 === yB ? "reactor" : "battery",
        box: hG([OB, GB, YB], DB, QB, oB, jB, lB),
        formed: 1 === JB,
        level: MB
      }
    }
    class yp {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qp;
        this.guideSetting = BB, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = BB.read()
      }
      kR(BB) {
        var OB;
        const GB = new Map;
        for (const YB of BB.baf2RxPlanList) {
          const BB = jp(YB);
          GB.set(op(BB.box.ctrl), BB)
        }
        this.plans = GB, this.layouts = new Map((null !== (OB = BB.baf2RxLayouts) && void 0 !== OB ? OB : []).map((BB => {
          let [OB, GB, YB, DB] = BB;
          return [op([OB, GB, YB]), DB]
        }))), this.predicted.clear(), BB.baf2RxFormedAt && (this.formed = {
          ctrl: BB.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const YB of [...this.startersOff]) {
          const BB = GB.get(YB);
          BB && !BB.formed || this.startersOff.delete(YB)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((BB => this.planByKey(BB)))
      }
      planAt(BB) {
        return this.planByKey(op(BB))
      }
      predictSize(BB, OB) {
        this.predicted.set(op(BB), OB), this.changed()
      }
      unpredict(BB) {
        this.predicted.delete(op(BB)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(BB) {
        var OB;
        const GB = op(BB);
        return this.predicted.has(GB) ? null : null !== (OB = this.layouts.get(GB)) && void 0 !== OB ? OB : null
      }
      showsStarter(BB) {
        return !this.startersOff.has(op(BB))
      }
      setStarter(BB, OB) {
        const GB = op(BB);
        OB ? this.startersOff.delete(GB) : this.startersOff.add(GB), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(BB) {
        this.guide = BB, this.guideSetting.write(BB), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(BB) {
        const OB = this.plans.get(BB);
        if (!OB) return null;
        const GB = this.predicted.get(BB);
        return GB ? {
          ...OB,
          box: eG(OB.box, OB.kind, GB[0], GB[1], GB[2])
        } : OB
      }
      changed() {
        this.version++;
        for (const BB of this.listeners) BB()
      }
    }
    var Jp = GB(192);
    const Mp = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function Pp(BB, OB, GB, YB) {
      const DB = BB.length / 3;
      for (let QB = 0; QB < Mp.length / 3; QB++) BB.push(Mp[3 * QB] * YB[0] / 2 + GB[0], Mp[3 * QB + 1] * YB[1] / 2 + GB[1], Mp[3 * QB + 2] * YB[2] / 2 + GB[2]);
      for (let QB = DB; QB < DB + 24; QB += 4) OB.push(QB, QB + 1, QB + 2, QB, QB + 2, QB + 3)
    }

    function zp(BB, OB, GB) {
      const YB = OB[0][0],
        DB = [],
        QB = [];
      for (const [oB, jB] of OB) Pp(DB, QB, [oB[0] - YB[0], oB[1] - YB[1], oB[2] - YB[2]], jB);
      return BB.createGameMesh({
        positions: DB,
        indices: QB
      }, GB, YB)
    }

    function lp(BB, OB) {
      const GB = BB.w - 2,
        YB = BB.d - 2;
      return 1 === function(BB, OB, GB, YB) {
        const [DB, QB, oB] = BB;
        if (Number(DB <= 2) + Number(QB <= 2) + Number(oB <= 2) >= 2) return function(BB, OB, GB) {
          return (BB + OB + GB) % 2 === 0 ? 1 : 3
        }(OB, GB, YB);
        const [jB, yB] = DB >= QB && DB >= oB ? [GB, YB] : QB >= oB ? [OB, YB] : [OB, GB];
        return jB % 2 === 0 && yB % 2 === 0 ? 1 : 3
      }([GB, BB.h - 2, YB], OB % GB, Math.floor(OB / (GB * YB)), Math.floor(OB / GB) % YB) ? "rod" : "channel"
    }

    function pp(BB, OB, GB) {
      if ("reactor" !== BB.kind || BB.formed || !OB) return !1;
      const YB = CG(BB.box);
      for (let DB = 0; DB < YB; DB++) {
        const BB = GB(DB);
        if (null !== BB && uG(BB)) return !1
      }
      return !0
    }

    function qp(BB, OB, GB, YB, DB) {
      var QB;
      let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const jB = BY(BB.box, OB),
        yB = DY(BB.kind, jB, GB);
      if ("wrong" === yB || "blocked" === yB) return "wrong";
      if (!DB) return null;
      if ("inside" === jB && "reactor" === BB.kind && "Air" === mG(GB)) {
        if (null !== oB) {
          var JB;
          const GB = sP[xP(oB, OY(BB.box, OB))];
          return GB && null !== (JB = Vy(GB)) && void 0 !== JB ? JB : null
        }
        if (YB) return lp(BB.box, OY(BB.box, OB))
      }
      if ("missing" !== yB) return null;
      const MB = QY(BB.kind, jB);
      return null === MB ? null : null !== (QB = Vy(MB)) && void 0 !== QB ? QB : null
    }
    const Zp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Np(BB, OB, GB) {
      const YB = GB => {
        const YB = OB(xG(BB.box, GB));
        return null !== YB && function(BB, OB) {
          return "reactor" !== BB.kind || OB !== vG(BB.box) && "inside" !== BY(BB.box, OB)
        }(BB, GB) && "ok" !== DY(BB.kind, BY(BB.box, GB), YB)
      };
      if (GB) {
        const QB = tG(BB.box, [Math.floor(GB[0]), Math.floor(GB[1]), Math.floor(GB[2])]);
        if (QB >= 0 && (YB(QB) || (DB = QB, "reactor" === BB.kind && "inside" === BY(BB.box, DB) && "Air" === OB(xG(BB.box, DB))))) return QB
      }
      var DB;
      const QB = CG(BB.box);
      for (let oB = 0; oB < QB; oB++)
        if (YB(oB)) return oB;
      return -1
    }

    function Rp(BB, OB) {
      return Math.floor(OB / (BB.w * BB.d))
    }

    function Wp(BB, OB, GB) {
      return GB >= 0 && Rp(BB, OB) > Rp(BB, GB)
    }

    function Ap(BB, OB) {
      return OB >= 0 && BB.h >= 3 && Rp(BB, OB) === BB.h - 1
    }

    function Vp(BB) {
      const OB = mG(BB);
      return OB === RG || "Collider" === OB || "Laser" === OB || OB.startsWith("_Collider ")
    }

    function Sp(BB, OB, GB, YB) {
      if (YB(BB)) return null;
      if (!Zp.every((OB => {
          let [YB, DB, QB] = OB;
          const oB = GB([BB[0] + YB, BB[1] + DB, BB[2] + QB]);
          return null !== oB && !XG("reactor", oB) && "reactor" !== IG(oB)
        }))) return null;
      const DB = wG("reactor").min,
        QB = hG([BB[0], BB[1], BB[2]], function(BB, OB) {
          const GB = OB[0] - (BB[0] + .5),
            YB = OB[2] - (BB[2] + .5);
          return Math.abs(GB) >= Math.abs(YB) ? GB >= 0 ? 2 : 4 : YB >= 0 ? 1 : 3
        }(BB, OB), DB, DB, DB, aG("reactor", DB)),
        oB = vG(QB);
      let jB = !0;
      for (let yB = 0; yB < CG(QB) && jB; yB++) {
        if (yB === oB) continue;
        const BB = xG(QB, yB),
          OB = GB(BB);
        jB = !YB(BB) && (null === OB || !Vp(OB))
      }
      return {
        box: QB,
        fits: jB
      }
    }
    const np = Ay,
      Up = "baf2Goal",
      fp = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      kp = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      dp = .4;

    function Kp(BB, OB) {
      let [GB, YB, DB] = BB;
      const QB = Ky([GB - .02, YB - .02, DB - .02], [GB + 1.02, YB + 1.02, DB + 1.02], .07);
      return OB && (QB.push([
        [GB + .5, YB + 1 + .7, DB + .5],
        [.08, 1.4, .08]
      ]), QB.push([
        [GB + .5, YB + 1 + 1.4 + .2, DB + .5],
        [dp, dp, dp]
      ])), QB
    }

    function mp(BB, OB) {
      let [GB, YB, DB] = OB;
      return BB.isBlockInLoadedChunk(GB, YB, DB) ? BB.blockIdToBlockName(BB.getBlockId(GB, YB, DB)) : null
    }
    let Ip = null;
    const Fp = new Set;
    let ip = null;

    function Lp(BB) {
      Ip = BB;
      for (const OB of Fp) OB(BB)
    }
    class gp {
      constructor(BB) {
        var OB;
        this.plans = BB, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (OB = BB => {
          var OB, GB;
          this.setGoal(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.goal) && void 0 !== OB ? OB : null, null !== (GB = null === BB || void 0 === BB ? void 0 : BB.startsBattery) && void 0 !== GB && GB)
        }, ip ??= [mD.o.subscribe("setDirectionArrow", (BB => {
          let {
            id: OB,
            position: GB,
            text: YB
          } = BB;
          OB === Up && Lp({
            goal: [Math.floor(GB[0]), Math.floor(GB[1]), Math.floor(GB[2])],
            startsBattery: JSON.stringify(null !== YB && void 0 !== YB ? YB : null).includes("arrowStartBattery")
          })
        })), mD.o.subscribe("clearDirectionArrow", (BB => {
          let {
            id: OB
          } = BB;
          null !== OB && OB !== Up || Lp(null)
        }))], Fp.add(OB), OB(Ip), () => {
          Fp.delete(OB)
        })
      }
      onAfterRender(BB, OB) {
        const GB = performance.now();
        if (this.cues.length > 0) {
          const OB = .55 + .45 * Math.sin(GB / 1100 * Math.PI * 2);
          for (const GB of this.cues) BB.setGameMesh(GB, {
            visibility: OB
          })
        }
        if (GB - this.lastCheckMs < 150) return;
        this.lastCheckMs = GB;
        const YB = this.plans.all().filter((BB => {
            const [GB, YB, DB] = BB.box.ctrl;
            return (!BB.formed || null !== this.plans.layoutOf(BB.box.ctrl)) && (GB - OB[0]) ** 2 + (YB - OB[1]) ** 2 + (DB - OB[2]) ** 2 <= 2304
          })),
          DB = function(BB, OB) {
            const GB = Jp.f.pP,
              YB = new Map;
            for (const QB of OB) {
              const OB = xG(QB.box, 0),
                oB = xG(QB.box, CG(QB.box) - 1),
                jB = [Math.min(OB[0], oB[0]), Math.min(OB[1], oB[1]), Math.min(OB[2], oB[2])].map((BB => Math.floor(BB / GB))),
                yB = [Math.max(OB[0], oB[0]), Math.max(OB[1], oB[1]), Math.max(OB[2], oB[2])].map((BB => Math.floor(BB / GB)));
              for (let GB = jB[0]; GB <= yB[0]; GB++)
                for (let OB = jB[1]; OB <= yB[1]; OB++)
                  for (let QB = jB[2]; QB <= yB[2]; QB++) {
                    var DB;
                    YB.set(`${GB},${OB},${QB}`, null !== (DB = BB.getChunkVersion(GB, OB, QB)) && void 0 !== DB ? DB : -1)
                  }
            }
            return YB
          }(BB, YB);
        this.plans.getVersion() === this.storeVersion && (function(BB, OB) {
          if (BB.size !== OB.size) return !1;
          for (const [GB, YB] of BB)
            if (OB.get(GB) !== YB) return !1;
          return !0
        }(DB, this.chunkVersions) || GB - this.lastRescanMs < 600) || (this.lastRescanMs = GB, this.storeVersion = this.plans.getVersion(), this.chunkVersions = DB, this.redraw(BB, YB))
      }
      dispose(BB) {
        this.unwatch(), Ip = null, this.clearMeshes(BB), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(BB, OB) {
        var GB;
        (null === BB || void 0 === BB ? void 0 : BB.join()) === (null === (GB = this.goal) || void 0 === GB ? void 0 : GB.join()) && OB === this.startsBattery || (this.goal = BB, this.startsBattery = OB, this.storeVersion = -1)
      }
      redraw(BB, OB) {
        const GB = OB => mp(BB, OB),
          YB = new Map,
          DB = [],
          QB = this.plans.guideOn();
        for (const JB of OB) {
          const BB = QB && pp(JB, this.plans.showsStarter(JB.box.ctrl), (BB => GB(xG(JB.box, BB)))),
            OB = "reactor" === JB.kind ? this.plans.layoutOf(JB.box.ctrl) : null,
            oB = QB && !JB.formed ? Np(JB, GB, this.goal) : -1;
          oB >= 0 && DB.push([xG(JB.box, oB), Ap(JB.box, oB)]);
          const jB = CG(JB.box);
          for (let DB = 0; DB < jB; DB++) {
            const jB = xG(JB.box, DB),
              yB = GB(jB),
              MB = null === yB ? null : qp(JB, DB, yB, BB, QB, OB);
            if (null !== MB) {
              const BB = "wrong" !== MB && Wp(JB.box, DB, oB),
                OB = BB ? `${MB}Dim` : MB;
              let GB = YB.get(OB);
              GB || (GB = {
                draw: {
                  ghost: MB,
                  dim: BB
                },
                list: []
              }, YB.set(OB, GB)), GB.list.push(jB)
            }
          }
        }
        if (QB && this.startsBattery && this.goal) {
          const [BB, OB, DB] = this.goal, QB = [];
          for (const [YB, oB, jB] of fp) {
            const yB = [BB + YB, OB + oB, DB + jB];
            "Air" === GB(yB) && QB.push(yB)
          }
          if (QB.length > 0) {
            var oB;
            const BB = null !== (oB = YB.get("cell")) && void 0 !== oB ? oB : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            BB.list.push(...QB), YB.set("cell", BB)
          }
        }
        const jB = [...YB.keys()].sort(),
          yB = [...jB.map((BB => `${BB}:${YB.get(BB).list.join(";")}`)), `cue:${DB.join(";")}`].join("|");
        if (yB !== this.shownKey) {
          this.shownKey = yB, this.clearMeshes(BB);
          for (const OB of jB) {
            const {
              draw: GB,
              list: DB
            } = YB.get(OB);
            this.meshes.push(this.build(BB, GB, DB))
          }
          for (const [OB, GB] of DB) this.cues.push(zp(BB, Kp(OB, GB), kp))
        }
      }
      build(BB, OB, GB) {
        let {
          ghost: YB,
          dim: DB
        } = OB;
        const {
          size: QB,
          colour: oB,
          alpha: jB
        } = np[YB], yB = GB[0], JB = [], MB = [];
        for (const [PB, zB, lB] of GB) Pp(JB, MB, [PB - yB[0] + .5, zB - yB[1] + .5, lB - yB[2] + .5], [QB, QB, QB]);
        return BB.createGameMesh({
          positions: JB,
          indices: MB
        }, {
          rgb: oB,
          alpha: jB * (DB ? .3 : 1)
        }, yB)
      }
      clearMeshes(BB) {
        for (const OB of [...this.meshes, ...this.cues]) BB.disposeGameMesh(OB);
        this.meshes = [], this.cues = []
      }
    }
    const rp = [.56, .83, 1],
      Xp = [1, .3, .25];
    class wp {
      constructor(BB) {
        this.plans = BB, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, OB, GB) {
        var YB;
        const DB = performance.now();
        if (DB - this.lastCheckMs < 150) return;
        this.lastCheckMs = DB;
        const QB = OB => mp(BB, OB),
          oB = null === (YB = BB.MYB(OB)) || void 0 === YB ? void 0 : YB.name,
          jB = oB && "Reactor Frame" === mG(oB) ? BB.getTargetedBlock() : null,
          yB = jB ? [jB.yZ[0], jB.yZ[1], jB.yZ[2]] : null,
          JB = null !== yB && "Air" === QB(yB) && yB.every(((BB, OB) => Math.abs(BB + .5 - GB[OB]) <= 8)) ? Sp(yB, GB, QB, (BB => this.inPlan(BB))) : null,
          MB = JB ? `${JB.box.ctrl.join()}|${JB.box.rot}|${JB.fits}` : "";
        MB !== this.shownKey && this.show(BB, MB, JB)
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      inPlan(BB) {
        return this.plans.all().some((OB => tG(OB.box, BB) >= 0))
      }
      show(BB, OB, GB) {
        if (this.clear(BB), this.shownKey = OB, !GB) return;
        const {
          box: YB,
          fits: DB
        } = GB, QB = DB ? rp : Xp, {
          lo: oB,
          hi: jB
        } = dy(YB);
        this.meshes.push(zp(BB, Ky(oB, jB, .05), {
          rgb: QB,
          alpha: 1
        }));
        const yB = [],
          JB = xG(YB, 0)[1];
        for (let MB = 0; MB < YB.w * YB.d; MB++) {
          const [BB, , OB] = xG(YB, MB);
          yB.push([
            [BB + .5, JB + .02 + .01, OB + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(zp(BB, yB, {
          rgb: QB,
          alpha: .25
        }))
      }
      clear(BB) {
        for (const OB of this.meshes) BB.disposeGameMesh(OB);
        this.meshes = []
      }
    }
    const Ep = "buildAFactory2Game:";

    function cp(BB, OB, GB) {
      const YB = BB => {
          const [GB, YB, DB] = BB.box.ctrl;
          return GB === OB[0] && YB === OB[1] && DB === OB[2]
        },
        DB = BB.find((BB => YB(BB) || tG(BB.box, OB) >= 0));
      if (!DB) return null;
      const QB = function(BB, OB, GB) {
        const {
          w: YB,
          h: DB,
          d: QB
        } = BB.box, oB = "reactor" === BB.kind ? `${Ep}rxTitle` : `${Ep}batTitle`;
        if (BB.formed) return {
          key: `${Ep}lookPlanFormed`,
          kindKey: oB,
          w: YB,
          h: DB,
          d: QB,
          count: 0
        };
        let jB = 0,
          yB = 0;
        for (let MB = 0; MB < CG(BB.box); MB++) {
          const OB = GB(xG(BB.box, MB)),
            YB = null === OB ? "ok" : DY(BB.kind, BY(BB.box, MB), OB);
          jB += "missing" === YB ? 1 : 0, yB += "wrong" === YB || "blocked" === YB ? 1 : 0
        }
        const JB = function(BB, OB, GB) {
          if (OB < 0 || null === GB) return;
          const YB = BY(BB.box, OB),
            DB = DY(BB.kind, YB, GB);
          return "blocked" === DB ? `${Ep}lookWhy_blocked` : "wrong" === DB ? "ctrl" === YB ? `${Ep}lookWhy_ctrl` : `${Ep}lookWhy_reactor_${YB}` : void 0
        }(BB, tG(BB.box, OB), GB([OB[0], OB[1], OB[2]]));
        if (jB > 0) return {
          key: `${Ep}lookPlanToBuild`,
          kindKey: oB,
          w: YB,
          h: DB,
          d: QB,
          count: jB,
          why: JB
        };
        if (yB > 0) return {
          key: `${Ep}lookPlanTakeOut`,
          kindKey: oB,
          w: YB,
          h: DB,
          d: QB,
          count: yB,
          why: JB
        };
        return {
          key: "reactor" === BB.kind ? `${Ep}lookPlanNoRods` : `${Ep}lookPlanDone`,
          kindKey: oB,
          w: YB,
          h: DB,
          d: QB,
          count: 0
        }
      }(DB, OB, GB);
      return "reactor" === DB.kind && YB(DB) ? {
        ...QB,
        ctrl: !0
      } : QB
    }

    function hp(BB, OB) {
      return BB === OB || null !== BB && null !== OB && BB.key === OB.key && BB.kindKey === OB.kindKey && BB.w === OB.w && BB.h === OB.h && BB.d === OB.d && BB.count === OB.count && BB.why === OB.why && BB.ctrl === OB.ctrl
    }

    function ap() {
      return performance.now()
    }
    class ep {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ap;
        this.ticket = BB, this.sent = OB, this.backstopMs = GB, this.now = YB, this.queuedAt = void 0, this.queuedAt = YB()
      }
      answered() {
        const BB = this.now(),
          OB = this.sent.leftAt(this.ticket);
        return null !== OB && BB - OB > 4e3 || BB - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Tp {
      constructor() {
        this.echoes = []
      }
      add(BB) {
        this.echoes = this.echoes.filter((BB => !BB.answered())), this.echoes.push(BB)
      }
      answered() {
        var BB, OB;
        return null === (BB = null === (OB = this.echoes.at(-1)) || void 0 === OB ? void 0 : OB.answered()) || void 0 === BB || BB
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((BB => BB.answered()))
      }
      age() {
        var BB, OB;
        return null !== (BB = null === (OB = this.echoes.at(-1)) || void 0 === OB ? void 0 : OB.age()) && void 0 !== BB ? BB : null
      }
      clear() {
        this.echoes = []
      }
    }
    class bp {
      constructor(BB) {
        this.send = BB, this.value = null, this.sent = null, this.echoes = new Tp, this.down = !1, this.timer = null
      }
      shown(BB) {
        return null === this.value ? BB : this.down || this.value !== this.sent ? this.value : BB === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), BB) : this.value
      }
      pendingFor(BB) {
        return null !== this.value && this.value === this.sent && BB !== this.value ? this.echoes.age() : null
      }
      assume(BB, OB) {
        this.disarm(), this.down = !1, this.value = BB, this.sent = BB, this.echoes.clear(), this.echoes.add(OB)
      }
      press() {
        this.down = !0
      }
      drag(BB) {
        this.value = BB, this.arm(this.down ? 1e3 : 400)
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
      arm(BB) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), BB)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Cp {
      constructor() {
        this.pending = new Map
      }
      set(BB, OB, GB) {
        var YB;
        const DB = null !== (YB = this.pending.get(BB)) && void 0 !== YB ? YB : {
          on: OB,
          echoes: new Tp
        };
        DB.on = OB, DB.echoes.add(GB), this.pending.set(BB, DB)
      }
      shown(BB) {
        let OB = BB;
        for (const [GB, {
            on: YB,
            echoes: DB
          }] of this.pending) 0 !== (BB & GB) === YB && DB.agreeCounts() || DB.answered() ? this.pending.delete(GB) : OB = YB ? OB | GB : OB & ~GB;
        return OB
      }
      pendingMask() {
        let BB = 0;
        for (const OB of this.pending.keys()) BB |= OB;
        return BB
      }
      pendingFor(BB) {
        let OB = null;
        for (const [YB, {
            on: DB,
            echoes: QB
          }] of this.pending) {
          if (void 0 !== BB && 0 !== (BB & YB) === DB) continue;
          const oB = QB.age();
          var GB;
          if (null !== oB) OB = Math.max(null !== (GB = OB) && void 0 !== GB ? GB : 0, oB)
        }
        return OB
      }
      clear() {
        this.pending.clear()
      }
    }
    class Hp {
      constructor() {
        this.dims = null, this.echoes = new Tp, this.unmet = null
      }
      shown(BB) {
        var OB;
        return this.dims && (vp(this.dims, BB) && this.echoes.agreeCounts() || this.echoes.answered()) && (vp(this.dims, BB) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (OB = this.dims) && void 0 !== OB ? OB : BB
      }
      takeUnmet() {
        const BB = this.unmet;
        return this.unmet = null, BB
      }
      set(BB, OB) {
        this.dims = BB, this.echoes.add(OB)
      }
      pendingFor(BB) {
        return null === this.dims || BB && vp(this.dims, BB) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function vp(BB, OB) {
      return BB[0] === OB[0] && BB[1] === OB[1] && BB[2] === OB[2]
    }
    class sp {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ap;
        this.now = BB, this.taps = new Map
      }
      tap(BB, OB, GB) {
        return !this.busy(BB) && (this.taps.set(BB, {
          at: this.now(),
          done: OB
        }), GB(), !0)
      }
      settle(BB) {
        for (const [OB, GB] of [...this.taps]) GB.done(BB) && this.taps.delete(OB)
      }
      busy(BB) {
        const OB = this.taps.get(BB);
        return !!OB && (!(this.now() - OB.at >= 3e3) || (this.taps.delete(BB), !1))
      }
      busyIds() {
        const BB = new Set;
        for (const OB of [...this.taps.keys()]) this.busy(OB) && BB.add(OB);
        return BB
      }
      clear() {
        this.taps.clear()
      }
    }

    function xp(BB) {
      return {
        send: OB => BB.track(OB),
        sendUrgent: (OB, GB) => BB.track(OB, {
          urgent: !0,
          supersedes: GB
        }),
        leftAt: OB => BB.leftAt(OB),
        holdReserve: () => BB.holdUrgentReserve(),
        answerMs: uo
      }
    }

    function tp() {
      return performance.now()
    }

    function Bq(BB) {
      const OB = BB.baf2RxNeed.map((BB => {
        let [OB, GB] = BB;
        return [OB, GB]
      }));
      return JSON.stringify([BB.baf2RxFormed, OB, BB.baf2RxBad, BB.baf2RxCells])
    }

    function Oq(BB, OB) {
      const GB = 0 !== (OB & zO),
        YB = 0 !== (BB.baf2RxFlags & zO);
      return !GB || YB || "running" !== BB.baf2RxState && "idle" !== BB.baf2RxState ? !GB && YB && "scram" === BB.baf2RxState && BB.baf2RxFuel > 0 ? "idle" : BB.baf2RxState : "scram"
    }

    function Gq(BB) {
      return JSON.stringify([BB.baf2BatFormed, BB.baf2BatNeed, BB.baf2BatBad])
    }

    function Yq(BB) {
      return BB.join(",")
    }
    class Dq {
      constructor() {
        this.listeners = new Set
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class Qq {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(BB, OB) {
        this.lastAt = BB, this.lastUntil = BB + OB
      }
      answered(BB) {
        return this.lastAt >= BB || BB < this.lastUntil
      }
    }
    class oq {
      constructor(BB, OB) {
        this.link = BB, this.now = OB, this.hold = new Hp, this.picked = null, this.notTaken = null
      }
      shown(BB) {
        const OB = this.hold.shown(BB);
        if (this.hold.takeUnmet() && this.picked) {
          var GB;
          const {
            plans: OB,
            ctrl: YB,
            at: DB
          } = this.picked;
          this.picked = null, OB.unpredict(YB), null === (GB = this.notTaken) || void 0 === GB || GB.call(this, BB, DB)
        }
        return OB
      }
      pendingFor(BB) {
        return this.hold.pendingFor(BB)
      }
      pl(BB, OB, GB) {
        BB.predictSize(OB, GB), this.picked = {
          plans: BB,
          ctrl: OB,
          at: this.now()
        };
        const YB = this.link.send(PO(OB, "plan", ...GB));
        this.hold.set(GB, new ep(YB, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class jq {
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tp;
        this.plans = BB, this.readInterior = OB, this.link = GB, this.now = YB, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Cp, this.throttle = void 0, this.oneShots = void 0, this.listeners = new Dq, this.redraw = null, this.releaseReserve = null, this.size = new oq(GB, YB), this.oneShots = new sp(YB), this.throttle = new bp((BB => this.echo(this.link.send(this.command("throttle", BB)))))
      }
      set(BB) {
        !BB.baf2RxOpen && this.raw && Yq(this.raw.baf2RxAt) === Yq(BB.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(BB), this.tM(BB)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.raw && (this.size.pl(this.plans, this.raw.baf2RxAt, BB), this.tM(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const BB = this.raw.baf2RxAt;
        this.plans.setStarter(BB, !this.plans.showsStarter(BB)), this.tM(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.tM(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.tM(this.raw)
      }
      send(BB) {
        if (this.raw) {
          for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
          this.link.send(this.command(BB, ...GB))
        }
      }
      tap(BB, OB) {
        this.raw && this.oneShots.tap(BB, function(BB, OB) {
          if ("start" === BB) return BB => 0 === (BB.baf2RxFlags & zO);
          if ("odConfirm" === BB) return BB => 0 !== (BB.baf2RxFlags & lO);
          const GB = Bq(OB);
          return BB => Bq(BB) !== GB
        }(BB, this.raw), OB) && ("start" === BB && (this.startedAt = this.now()), this.tM(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(zO, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(BB, OB) {
        if (!this.raw) return;
        const GB = BB === zO ? this.command(OB ? "scram" : "start") : this.command("od", OB ? 1 : 0),
          YB = OB && BB === zO,
          DB = `${MO} ${this.raw.baf2RxAt.join(" ")} `,
          QB = this.echo(YB ? this.link.sendUrgent(GB, (BB => {
            const OB = BB.startsWith(DB) ? BB.slice(DB.length).split(" ")[0] : null;
            return "throttle" === OB || "start" === OB
          })) : this.link.send(GB));
        this.flags.set(BB, OB, QB), YB && this.throttle.assume(0, QB), this.tM(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(BB) {
        this.throttle.drag(BB), this.raw && this.tM(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.tM(this.raw)
      }
      subscribe(BB) {
        return this.listeners.subscribe(BB)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var BB;
        this.throttle.release(), null === (BB = this.releaseReserve) || void 0 === BB || BB.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(BB) {
        for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
        return PO(this.raw.baf2RxAt, BB, ...GB)
      }
      echo(BB) {
        return new ep(BB, this.link, this.link.answerMs, this.now)
      }
      tM(BB) {
        var OB;
        this.raw = BB;
        const GB = this.flags.shown(BB.baf2RxFlags),
          YB = {
            ...BB,
            baf2RxFlags: GB,
            baf2RxTarget: this.throttle.shown(BB.baf2RxTarget),
            baf2RxState: Oq(BB, GB)
          },
          DB = this.size.shown(YB.baf2RxDims),
          QB = this.throttle.pendingFor(),
          oB = [this.throttle.pendingFor(BB.baf2RxTarget), this.flags.pendingFor(BB.baf2RxFlags), this.size.pendingFor(BB.baf2RxDims)].filter((BB => null !== BB)),
          jB = oB.length > 0 ? Math.max(...oB) : null,
          yB = this.oneShots.busyIds(),
          JB = YB.baf2RxAt;
        let MB, PB, zB = null,
          lB = [Math.max(0, DB[0] - 2), Math.max(0, DB[1] - 2), Math.max(0, DB[2] - 2)];
        if (YB.baf2RxFormed) {
          const [BB, OB, GB] = YB.baf2RxDims;
          lB = [Math.max(0, BB - 2), Math.max(0, OB - 2), Math.max(0, GB - 2)], MB = Array.from(YB.baf2RxCells, Number), PB = `${lB.join(",")}:${YB.baf2RxCells}`
        } else {
          var pB;
          const BB = null === (pB = this.plans.planAt(JB)) || void 0 === pB ? void 0 : pB.box,
            OB = BB ? eG(BB, "reactor", ...DB) : hG(JB, 1, ...DB, aG("reactor", DB[0])),
            GB = this.readInterior(OB);
          zB = vj(lB, GB), MB = GB, PB = `${lB.join(",")}:${GB.join("")}`
        }(null === (OB = this.looksOf) || void 0 === OB ? void 0 : OB.key) !== PB && (this.looksOf = {
          key: PB,
          looks: Gy(lB, MB)
        }), this.view = {
          status: YB,
          dims: DB,
          plan: zB,
          inner: lB,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(JB),
          odConfirmed: this.odConfirmed || 0 !== (YB.baf2RxFlags & WO),
          guide: this.plans.guideOn(),
          throttlePending: null !== QB,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== jB && jB >= 5e3,
          busy: yB,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== jB || yB.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.tM(this.raw)
        }), 250))
      }
    }
    class yq {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tp;
        this.plans = BB, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new Dq, this.redraw = null, this.size = new oq(OB, GB), this.oneShots = new sp(GB)
      }
      set(BB) {
        !BB.baf2BatOpen && this.view && Yq(this.view.status.baf2BatAt) === Yq(BB.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(BB), this.tM(BB)
      }
      tap(BB, OB) {
        if (!this.view) return;
        const GB = Gq(this.view.status);
        this.oneShots.tap(BB, (BB => Gq(BB) !== GB), OB) && this.tM(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.view && (this.size.pl(this.plans, this.view.status.baf2BatAt, BB), this.tM(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.tM(this.view.status)
      }
      subscribe(BB) {
        return this.listeners.subscribe(BB)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      tM(BB) {
        const OB = this.size.shown(BB.baf2BatDims),
          GB = this.oneShots.busyIds();
        this.view = {
          status: BB,
          dims: OB,
          CP: Zy(OB, BB.baf2BatDims) ? BB.baf2BatCapacity : Qy(...OB),
          guide: this.plans.guideOn(),
          busy: GB
        }, this.listeners.notify(), GB.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.tM(this.view.status)
        }), 250))
      }
    }
    const Jq = "buildAFactory2Game:";

    function Mq() {
      var BB;
      const OB = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!OB) return null;
      const GB = OB.querySelector(".ExitButton");
      return function(BB, OB) {
        const GB = OB ? OB.left - 8 : BB.right;
        return {
          left: BB.left,
          top: BB.top,
          width: Math.max(0, GB - BB.left),
          height: BB.height
        }
      }(OB.getBoundingClientRect(), null !== (BB = null === GB || void 0 === GB ? void 0 : GB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
    }
    const Pq = (0, YB.memo)((function(BB) {
      let {
        store: OB
      } = BB;
      const {
        t: GB
      } = (0, UD.H)(), [DB, QB] = (0, YB.useState)((() => OB.get())), [oB, jB] = (0, YB.useState)((() => performance.now()));
      (0, YB.useEffect)((() => (QB(OB.get()), OB.subscribe((() => {
        QB(OB.get()), jB(performance.now())
      })))), [OB]);
      const {
        alarm: yB,
        boomAt: JB
      } = DB, MB = null !== yB && null !== yB.secs, [PB, zB] = (0, YB.useState)(null);
      (0, YB.useEffect)((() => {
        if (!MB) return;
        zB(Mq());
        const BB = setInterval((() => {
          jB(performance.now()), zB(Mq())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [MB]);
      const [lB, pB] = (0, YB.useState)(!1);
      return (0, YB.useEffect)((() => {
        if (JB === -1 / 0) return;
        pB(!0);
        const BB = setTimeout((() => {
          pB(!1)
        }), 1300);
        return () => {
          clearTimeout(BB)
        }
      }), [JB]), (0, WQ.jsxs)(WQ.Fragment, {
        children: [null !== yB && (0, WQ.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: GB(yB.hot ? `${Jq}rxAlarmSiren` : `${Jq}rxAlarmDamaged`, {
            amount: String(yB.damage)
          })
        }), null !== yB && null !== yB.secs && (0, WQ.jsx)("div", {
          className: PB ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== PB && void 0 !== PB ? PB : void 0,
          "aria-live": "assertive",
          children: GB(`${Jq}rxAlarmCountdown`, {
            amount: String((qB = yB.secs, ZB = oB - yB.receivedAt, Math.max(1, Math.ceil(qB - ZB / 1e3))))
          })
        }), lB && (0, WQ.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var qB, ZB
    }));
    class zq {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      kR(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const GB = BB.baf2RxAlarmAt.join(",");
        let YB = this.snapshot.boomAt;
        if (BB.baf2RxAlarmBoom) this.byReactor.delete(GB), YB = OB;
        else if (BB.baf2RxAlarmDamage <= 0) this.byReactor.delete(GB);
        else {
          var DB;
          this.byReactor.set(GB, {
            damage: BB.baf2RxAlarmDamage,
            secs: null !== (DB = BB.baf2RxAlarmSecs) && void 0 !== DB ? DB : null,
            hot: !0 === BB.baf2RxAlarmHot,
            receivedAt: OB
          })
        }
        this.tM(YB)
      }
      retain(BB) {
        let OB = !1;
        for (const GB of [...this.byReactor.keys()]) BB.has(GB) || (this.byReactor.delete(GB), OB = !0);
        OB && this.tM(this.snapshot.boomAt)
      }
      has(BB) {
        return this.byReactor.has(BB)
      }
      get() {
        return this.snapshot
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      tM(BB) {
        let OB = null;
        for (const GB of this.byReactor.values())(!OB || GB.damage > OB.damage) && (OB = GB);
        this.snapshot = {
          alarm: OB,
          boomAt: BB
        };
        for (const GB of this.listeners) GB()
      }
    }
    const lq = {
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

    function pq(BB) {
      return [BB[0], BB[1], BB[2]]
    }

    function qq(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    class Zq {
      constructor(BB) {
        if (this.plans = BB, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var BB;
            return {
              active: this.glows.flatMap((BB => {
                let {
                  record: OB
                } = BB;
                return OB ? [OB] : []
              })),
              log: [...null !== (BB = this.devLog) && void 0 !== BB ? BB : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var BB;
        return null !== (BB = this.devLog) && void 0 !== BB ? BB : []
      }
      check(BB, OB, GB) {
        const YB = new Set(OB.map((BB => qq(BB.box.ctrl))));
        for (const oB of function(BB, OB) {
            const GB = [],
              YB = new Map(BB);
            BB.clear();
            for (const DB of OB) {
              const OB = op(DB.box.ctrl),
                QB = DB.formed ? DB.level : 0;
              BB.set(OB, QB), QB > 0 && 0 === YB.get(OB) && GB.push(DB)
            }
            return GB
          }(this.levels, this.plans.all())) YB.has(qq(oB.box.ctrl)) && this.show(BB, oB, "on", GB);
        const DB = this.plans.lastFormed();
        if (null === DB || DB.receivedAt <= this.flashedAt) return null;
        this.flashedAt = DB.receivedAt;
        const QB = function(BB, OB) {
          var GB;
          const YB = op(BB);
          return null !== (GB = OB.find((BB => op(BB.box.ctrl) === YB))) && void 0 !== GB ? GB : null
        }(DB.ctrl, OB);
        return QB && this.show(BB, QB, "formed", GB), QB
      }
      fade(BB, OB) {
        0 !== this.glows.length && (this.glows = this.glows.filter((GB => {
          let {
            mesh: YB,
            glow: DB,
            startMs: QB,
            record: oB
          } = GB;
          const jB = (OB - QB) / lq[DB].ms;
          return jB >= 1 ? (BB.disposeGameMesh(YB), oB && (oB.endMs = OB), !1) : (BB.setGameMesh(YB, {
            visibility: "formed" === DB ? 1 - jB : Math.sin(Math.PI * jB)
          }), !0)
        })))
      }
      dispose(BB) {
        for (const {
            mesh: GB
          }
          of this.glows) BB.disposeGameMesh(GB);
        this.glows = [], this.levels.clear();
        const OB = "undefined" !== typeof window ? window : null;
        (null === OB || void 0 === OB ? void 0 : OB.baf2Glows) === this.devAccessor && delete OB.baf2Glows
      }
      show(BB, OB, GB, YB) {
        const {
          lo: DB,
          hi: QB
        } = dy(OB.box);
        let oB = null;
        this.devLog && (oB = {
          glow: GB,
          ctrl: pq(OB.box.ctrl),
          lo: pq(DB),
          hi: pq(QB),
          startMs: YB,
          endMs: null
        }, this.devLog.push(oB), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(BB, GB, Ky(DB, QB, lq[GB].thick)),
          glow: GB,
          startMs: YB,
          record: oB
        })
      }
      build(BB, OB, GB) {
        const YB = zp(BB, GB, {
          rgb: lq[OB].colour,
          alpha: 1
        });
        return BB.setGameMesh(YB, {
          visibility: 0
        }), YB
      }
    }
    const Nq = 1 / .6,
      Rq = {
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
        blendMode: mj.f.Standard,
        soft: !0
      },
      Wq = {
        ...Rq,
        size: [.25, .4],
        count: 2
      };

    function Aq(BB) {
      return {
        colours: [BB, BB],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: mj.f.Add,
        soft: !1
      }
    }
    const Vq = Aq([150, 225, 255]),
      Sq = Aq([185, 145, 255]),
      nq = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function Uq(BB) {
      const OB = iO[BB];
      return null === OB.fuelSlot || DG(OB) ? nq.includes(BB) ? Sq : Vq : Rq
    }
    const fq = {
        kind: "smokePuff"
      },
      kq = [.2, .025, .2];

    function dq(BB, OB) {
      const [
        [GB, YB, DB],
        [QB, oB, jB]
      ] = BB.colours;
      return {
        texture: BB.soft ? fq : "square_particle",
        CP: OB,
        minLifeTime: BB.life[0] / Nq,
        maxLifeTime: BB.life[1] / Nq,
        minEmitPower: BB.power[0] * Nq,
        maxEmitPower: BB.power[1] * Nq,
        minSize: BB.size[0],
        maxSize: BB.size[1],
        emitRate: 0,
        gravity: [0, BB.lift * Nq * Nq, 0],
        dir1: [-BB.spread, 1, -BB.spread],
        dir2: [BB.spread, 1, BB.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [GB, YB, DB, BB.alpha],
          maxColor: [QB, oB, jB, BB.alpha]
        }, {
          timeFraction: 1,
          minColor: [GB, YB, DB, 0],
          maxColor: [QB, oB, jB, 0]
        }],
        blendMode: BB.blendMode
      }
    }
    class Kq {
      constructor(BB) {
        this.fixed = BB, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(BB, OB, GB) {
        var YB;
        if (GB === this.lastFrame) return !1;
        this.lastFrame = GB;
        const DB = this.at;
        DB[0] = OB[0] + .5, DB[1] = OB[1] + 1.025, DB[2] = OB[2] + .5;
        const QB = null !== (YB = this.fixed) && void 0 !== YB ? YB : jB() ? Wq : Rq;
        let oB = this.particles.get(QB);
        return oB || (oB = BB.createParticles(function(BB) {
          return dq(BB, Math.ceil(12 * BB.count * BB.life[1]) + BB.count)
        }(QB), {
          pos: DB,
          half: kq
        }), this.particles.set(QB, oB)), oB.moveTo(DB), oB.emit(QB.count), !0
      }
      dispose() {
        for (const BB of this.particles.values()) BB.stop();
        this.particles.clear()
      }
    }
    class uq {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(BB) {
        this.indexed = !0;
        for (const OB of dO) {
          const GB = Uq(OB);
          for (let YB = 1; YB <= 4; YB++) {
            const DB = BB.blockNameToBlockId(`${OB}|meta|rot${YB}|Running`, !0);
            if (null === DB) continue;
            let QB = this.pufferIndexByStyle.get(GB);
            void 0 === QB && (QB = this.pufferList.push(new Kq(GB === Rq ? null : GB)) - 1, this.pufferIndexByStyle.set(GB, QB)), this.pufferIndexById[DB] = QB + 1
          }
        }
      }
      onAfterRender(BB, OB) {
        this.indexed || this.index(BB);
        const GB = performance.now(),
          YB = 0 === this.lastMs ? 0 : Math.min(GB - this.lastMs, 250) / 1e3;
        this.lastMs = GB, this.frame++, BB.particlesEnabled() ? (this.scan(BB, OB), this.puff(BB, YB)) : this.sources = []
      }
      dispose() {
        for (const BB of this.pufferList) BB.dispose();
        this.sources = [], this.found = []
      }
      scan(BB, OB) {
        0 === this.scanRow && (this.origin = [Math.floor(OB[0]) - 12, Math.floor(OB[1]) - 6, Math.floor(OB[2]) - 12]);
        const GB = Math.min(this.scanRow + 16, 325),
          [YB, DB, QB] = this.origin,
          oB = this.hits;
        oB.length = 0;
        for (let jB = this.scanRow; jB < GB; jB++) {
          const OB = YB + jB % 25,
            GB = DB + Math.floor(jB / 25);
          BB.scanBlocks(OB, GB, QB, OB + 1, GB + 1, QB + 25, this.pufferIndexById, oB)
        }
        for (let jB = 0; jB < oB.length; jB += 4) {
          const BB = oB[jB + 3];
          this.found.push({
            pos: [oB[jB], oB[jB + 1], oB[jB + 2]],
            SM: BB,
            puffer: this.pufferList[this.pufferIndexById[BB] - 1]
          })
        }
        this.scanRow = GB, 325 === GB && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(BB, OB) {
        const GB = this.sources.length;
        if (0 !== GB) {
          this.budget = Math.min(this.budget + Math.min(GB / 1.2, 12) * OB, 2);
          for (let OB = 0; OB < GB && this.budget >= 1; OB++) {
            const OB = this.sources[this.cursor % GB];
            this.cursor = (this.cursor + 1) % GB, BB.getBlockId(OB.pos[0], OB.pos[1], OB.pos[2]) === OB.SM && (OB.puffer.puff(BB, OB.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const mq = {
        ...Aq([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      Iq = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function Fq(BB) {
      return 0 === BB.spots.length ? 0 : Math.min(1 * BB.level, 4)
    }

    function iq(BB) {
      return 0 === BB.glass.length ? 0 : Math.min(.75 * BB.level, 3)
    }

    function Lq(BB) {
      return `${BB.ctrl.join(",")}:${BB.rot}:${BB.cu},${BB.cv}:${BB.w},${BB.h},${BB.d}`
    }

    function gq(BB, OB) {
      const GB = OB.w - 2,
        YB = OB.h - 2,
        DB = OB.d - 2,
        QB = [];
      for (let oB = 0; oB < GB * YB * DB; oB++) {
        const jB = oB % GB,
          yB = Math.floor(oB / GB) % DB,
          JB = Math.floor(oB / (GB * DB));
        if (jB > 0 && jB < GB - 1 && yB > 0 && yB < DB - 1 && JB > 0 && JB < YB - 1) continue;
        const MB = xG(OB, GY(OB, oB)),
          PB = mp(BB, MB);
        if (null !== PB && "Fuel Rod" === mG(PB))
          for (const OB of Iq) {
            const GB = [MB[0] + OB[0], MB[1] + OB[1], MB[2] + OB[2]];
            Xq(BB, GB) && QB.push(wq(GB, OB))
          }
      }
      return QB
    }

    function rq(BB, OB) {
      const {
        lo: GB,
        hi: YB
      } = dy(OB), DB = [];
      for (let QB = GB[0]; QB < YB[0]; QB++)
        for (let OB = GB[1]; OB < YB[1]; OB++) {
          const oB = QB === GB[0] || QB === YB[0] - 1 || OB === GB[1] || OB === YB[1] - 1 ? 1 : Math.max(1, YB[2] - 1 - GB[2]);
          for (let jB = GB[2]; jB < YB[2]; jB += oB) {
            const oB = [QB, OB, jB];
            if (!Xq(BB, oB)) continue;
            const yB = QB === GB[0] ? Iq[1] : QB === YB[0] - 1 ? Iq[0] : jB === GB[2] ? Iq[5] : jB === YB[2] - 1 ? Iq[4] : OB === GB[1] ? Iq[3] : Iq[2];
            DB.push(wq(oB, yB))
          }
        }
      return DB
    }

    function Xq(BB, OB) {
      const GB = mp(BB, OB);
      return null !== GB && "Reactor Glass" === mG(GB)
    }

    function wq(BB, OB) {
      return [
        [BB[0] + .5 + .55 * OB[0], BB[1] + .5 + .55 * OB[1], BB[2] + .5 + .55 * OB[2]],
        [0 === OB[0] ? .4 : .02, 0 === OB[1] ? .4 : .02, 0 === OB[2] ? .4 : .02]
      ]
    }
    class Eq {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(BB, OB, GB, YB) {
        const DB = [],
          QB = new Set;
        for (const JB of OB) {
          var oB, jB, yB;
          const {
            box: OB
          } = JB;
          if ("reactor" !== JB.kind || JB.level <= 0 || (OB.ctrl[0] - GB[0]) ** 2 + (OB.ctrl[1] - GB[1]) ** 2 + (OB.ctrl[2] - GB[2]) ** 2 > 576) continue;
          const MB = Lq(OB);
          QB.add(MB);
          let PB = this.spots.get(MB);
          if ((!PB || YB - PB.at > 3e3) && (PB = {
              at: YB,
              spots: gq(BB, OB),
              glass: rq(BB, OB)
            }, this.spots.set(MB, PB)), 0 === PB.spots.length && 0 === PB.glass.length) continue;
          const zB = this.sparking.find((BB => BB.key === MB));
          DB.push({
            key: MB,
            level: JB.level,
            spots: PB.spots,
            glass: PB.glass,
            budget: null !== (oB = null === zB || void 0 === zB ? void 0 : zB.budget) && void 0 !== oB ? oB : 0,
            cursor: null !== (jB = null === zB || void 0 === zB ? void 0 : zB.cursor) && void 0 !== jB ? jB : 0,
            glassBudget: null !== (yB = null === zB || void 0 === zB ? void 0 : zB.glassBudget) && void 0 !== yB ? yB : 0
          })
        }
        for (const JB of this.spots.keys()) QB.has(JB) || this.spots.delete(JB);
        this.sparking = DB
      }
      emit(BB, OB, GB) {
        var YB;
        if (0 === this.sparking.length || !BB.particlesEnabled() || GB === this.lastFrame) return;
        this.lastFrame = GB;
        let DB = 0,
          QB = 0;
        for (const pB of this.sparking) DB += Fq(pB), QB += iq(pB);
        const oB = DB > 8 ? 8 / DB : 1,
          jB = QB > 6 ? 6 / QB : 1;
        let yB, JB = null,
          MB = null;
        for (const pB of this.sparking) pB.budget = Math.min(pB.budget + Fq(pB) * oB * OB, 2), pB.budget >= 1 && (!JB || pB.budget > JB.budget) && (JB = pB), pB.glassBudget = Math.min(pB.glassBudget + iq(pB) * jB * OB, 2), pB.glassBudget >= 1 && (!MB || pB.glassBudget > MB.glassBudget) && (MB = pB);
        if (JB) JB.budget--, yB = JB.spots[JB.cursor++ % JB.spots.length];
        else {
          if (!MB) return;
          MB.glassBudget--, yB = MB.glass[Math.floor(Math.random() * MB.glass.length)]
        }
        const [PB, zB] = yB, lB = null !== (YB = this.emitter) && void 0 !== YB ? YB : this.create(BB, PB, zB);
        lB.moveTo(PB, zB), lB.emit(mq.count)
      }
      dispose() {
        var BB;
        null === (BB = this.emitter) || void 0 === BB || BB.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(BB, OB, GB) {
        const YB = Math.ceil(14 * mq.count * mq.life[1]) + mq.count;
        return this.emitter = BB.createParticles(dq(mq, YB), {
          pos: OB,
          half: GB
        }), this.emitter
      }
    }
    const cq = [2, 3.2],
      hq = 1 / 3,
      aq = 1 / .6,
      eq = {
        texture: fq,
        CP: Math.ceil(18 * cq[1]) + 4,
        minLifeTime: cq[0] / aq,
        maxLifeTime: cq[1] / aq,
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
        blendMode: mj.f.Standard
      };
    class Tq {
      constructor(BB) {
        this.plans = BB, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Eq, this.frame = 0, this.outline = new Zq(BB)
      }
      onAfterRender(BB, OB, GB) {
        const YB = performance.now(),
          DB = 0 === this.lastMs ? 0 : Math.min(YB - this.lastMs, 250) / 1e3;
        if (this.lastMs = YB, this.outline.fade(BB, YB), this.puff(BB, DB, GB), this.sparks.emit(BB, DB, this.frame++), YB - this.lastCheckMs < 150) return;
        this.lastCheckMs = YB;
        const QB = this.plans.all().filter((BB => BB.formed && bq(BB.box.ctrl, GB) <= 4096));
        this.plumes = QB.filter((BB => "reactor" === BB.kind && BB.level > 0)).map((BB => ({
          box: BB.box,
          level: BB.level
        }))), this.updateHums(BB, OB, QB, GB), this.sparks.update(BB, QB, GB, YB), this.chimeFormed(BB, OB, QB, YB)
      }
      dispose(BB) {
        var OB;
        this.outline.dispose(BB), null === (OB = this.steam) || void 0 === OB || OB.dispose(), this.steam = null, this.sparks.dispose();
        for (const GB of this.hums.values()) GB.stop();
        this.hums.clear()
      }
      chimeFormed(BB, OB, GB, YB) {
        const DB = this.outline.check(BB, GB, YB);
        DB && BB.playSound(OB, "exp_levelup", .6, 1, {
          fD: [DB.box.ctrl[0] + .5, DB.box.ctrl[1], DB.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(BB, OB, GB) {
        const YB = this.plumes;
        if (0 === YB.length || !BB.particlesEnabled()) return void(this.plumeBudget = 0);
        const DB = YB.reduce(((BB, OB) => BB + 3 * OB.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + DB * OB, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let QB = this.plumeCursor % (DB / 3);
        this.plumeCursor++;
        let oB = YB[0];
        for (const PB of YB) {
          if (QB < PB.level) {
            oB = PB;
            break
          }
          QB -= PB.level
        }
        const {
          lo: jB,
          hi: yB
        } = dy(oB.box);
        if (function(BB, OB, GB) {
            const YB = Math.max(BB[0] - GB[0], 0, GB[0] - OB[0]),
              DB = Math.max(BB[2] - GB[2], 0, GB[2] - OB[2]);
            return Math.hypot(YB, GB[1] - OB[1], DB)
          }(jB, yB, GB) < 6 && Math.random() > hq) return;
        const JB = [(jB[0] + yB[0]) / 2, yB[1] + .05, (jB[2] + yB[2]) / 2],
          MB = [(yB[0] - jB[0]) / 2 - .5, .05, (yB[2] - jB[2]) / 2 - .5];
        this.steam ??= BB.createParticles(eq, {
          pos: JB,
          half: MB
        }), this.steam.moveTo(JB, MB), this.steam.emit(1)
      }
      updateHums(BB, OB, GB, YB) {
        const DB = new Map;
        for (const oB of GB) "reactor" === oB.kind && oB.level > 0 && bq(oB.box.ctrl, YB) <= 576 && DB.set(`${QB=oB.box.ctrl,`${QB[0]},${QB[1]},${QB[2]}`}:${oB.level}`, oB);
        var QB;
        for (const [oB, jB] of this.hums) DB.has(oB) || (jB.stop(), this.hums.delete(oB));
        for (const [oB, jB] of DB) {
          if (this.hums.has(oB)) continue;
          const {
            lo: GB,
            hi: YB
          } = dy(jB.box), DB = [(GB[0] + YB[0]) / 2, GB[1], (GB[2] + YB[2]) / 2], QB = BB.playSound(OB, "rocketEngineLoop", .08 + .06 * jB.level, .55, {
            fD: DB,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          QB && this.hums.set(oB, QB)
        }
      }
    }

    function bq(BB, OB) {
      return (BB[0] - OB[0]) ** 2 + (BB[1] - OB[1]) ** 2 + (BB[2] - OB[2]) ** 2
    }
    class Cq {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      kR(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const YB = [BB.baf2BombAt[0], BB.baf2BombAt[1], BB.baf2BombAt[2]],
          DB = BB.baf2BombR;
        if (BB.baf2BombBoom) {
          const BB = Math.hypot(OB[0] - YB[0], OB[1] - YB[1], OB[2] - YB[2]);
          this.tM({
            fuse: null,
            blast: {
              at: YB,
              r: DB,
              receivedAt: GB,
              distance: BB,
              flash: BB <= 3 * DB
            }
          })
        } else this.tM({
          ...this.snapshot,
          fuse: BB.baf2BombMs > 0 ? {
            at: YB,
            r: DB,
            endsAt: GB + BB.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      tM(BB) {
        this.snapshot = BB;
        for (const OB of this.listeners) OB()
      }
    }
    const Hq = (0, YB.memo)((function(BB) {
      var OB;
      let {
        store: GB
      } = BB;
      const {
        t: DB
      } = (0, UD.H)(), [QB, oB] = (0, YB.useState)((() => GB.get())), [jB, yB] = (0, YB.useState)((() => performance.now()));
      (0, YB.useEffect)((() => (oB(GB.get()), GB.subscribe((() => {
        oB(GB.get()), yB(performance.now())
      })))), [GB]);
      const {
        fuse: JB,
        blast: MB
      } = QB;
      (0, YB.useEffect)((() => {
        if (!JB) return;
        const BB = setInterval((() => {
          yB(performance.now())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [JB]);
      const [PB, zB] = (0, YB.useState)(!1);
      (0, YB.useEffect)((() => {
        if (null === MB || void 0 === MB || !MB.flash) return;
        zB(!0);
        const BB = setTimeout((() => {
          zB(!1)
        }), 2500);
        return () => {
          clearTimeout(BB)
        }
      }), [MB]);
      const lB = JB ? function(BB, OB) {
        return BB.endsAt <= OB ? 0 : Math.ceil((BB.endsAt - OB) / 1e3)
      }(JB, jB) : 0;
      return (0, WQ.jsxs)(WQ.Fragment, {
        children: [lB > 0 && (0, WQ.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: DB("buildAFactory2Game:bombCountdown", {
            amount: String(lB),
            radius: String(null !== (OB = null === JB || void 0 === JB ? void 0 : JB.r) && void 0 !== OB ? OB : 0)
          })
        }), PB && (0, WQ.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function vq(BB) {
      const OB = Math.min(4, Math.max(1, BB / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * BB / 4)),
        capSpread: Math.min(5 * BB / 8, 24 * OB),
        capThick: 6 * OB,
        stemHalfWidth: 3 * OB,
        puffScale: OB
      }
    }
    class sq {
      constructor() {
        this.sJ = !1
      }
      hold(BB) {
        BB.getCameraFar() < 1e3 && (BB.setCameraFar(1e3), this.sJ = !0)
      }
      release(BB) {
        this.sJ && (this.sJ = !1, BB.setCameraFar(null))
      }
    }
    const xq = 1 / .6,
      tq = [.2, .1, .2],
      BZ = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      OZ = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: mj.f.Standard,
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
      GZ = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: mj.f.Standard,
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
      YZ = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: mj.f.Standard,
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
      DZ = {
        texture: fq,
        CP: Math.ceil(120) + 4,
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
        blendMode: mj.f.Add
      };
    class QZ {
      constructor(BB) {
        this.store = BB, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new sq, this.timers = []
      }
      onAfterRender(BB, OB) {
        const GB = performance.now(),
          YB = 0 === this.lastMs ? 0 : Math.min(GB - this.lastMs, 250) / 1e3;
        this.lastMs = GB;
        const {
          fuse: DB,
          blast: QB
        } = this.store.get();
        null !== QB && QB !== this.shownBlast && (this.shownBlast = QB, this.startBlast(BB, OB, QB, GB));
        const oB = BB.particlesEnabled();
        null !== DB && DB.endsAt > GB && oB ? this.emitBeacon(BB, DB, YB, GB) : this.beaconBudget = 0, null !== this.cloud && (GB - this.cloud.startMs > 33e3 ? this.disposeCloud(BB) : (this.far.hold(BB), oB && this.emitCloud(BB, YB, GB)))
      }
      dispose(BB) {
        var OB;
        null === (OB = this.beacon) || void 0 === OB || OB.dispose(), this.beacon = null, this.disposeCloud(BB);
        for (const GB of this.timers) clearTimeout(GB);
        this.timers.length = 0
      }
      emitBeacon(BB, OB, GB, YB) {
        const DB = OB.endsAt - YB < 5e3 ? 350 : 1e3,
          QB = .5 + .5 * Math.sin(2 * Math.PI * YB / DB);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * QB * GB, 4), this.beaconBudget < 1) return;
        const oB = Math.floor(this.beaconBudget);
        this.beaconBudget -= oB;
        const [jB, yB, JB] = OB.at, MB = [jB + .5, yB + 1.1, JB + .5];
        this.beacon ??= BB.createParticles(DZ, {
          pos: MB,
          half: tq
        }), this.beacon.moveTo(MB), this.beacon.emit(oB)
      }
      startBlast(BB, OB, GB, YB) {
        var DB;
        null === (DB = this.beacon) || void 0 === DB || DB.dispose(), this.beacon = null, this.disposeCloud(BB);
        const QB = (0, Kj.isMobile)() ? .5 : 1;
        this.streams = [OZ, GZ, YZ].map((BB => {
          const OB = Math.round(BB.count * QB);
          return {
            spec: BB,
            particles: null,
            rate: OB / ((BB.toMs - BB.fromMs) / 1e3),
            budget: 0,
            left: OB
          }
        })), this.cloud = {
          blast: GB,
          startMs: YB
        };
        const oB = Math.max(.25, 1 - GB.distance / (6 * GB.r)),
          jB = GB.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [GB, YB, DB] of BZ) jZ(BB, OB, GB, oB * YB, DB)
        }), jB))
      }
      emitCloud(BB, OB, GB) {
        const {
          blast: YB,
          startMs: DB
        } = this.cloud, QB = GB - DB, [oB, jB, yB] = YB.at, JB = vq(YB.r);
        for (const MB of this.streams) {
          const {
            spec: GB
          } = MB;
          if (MB.left <= 0 || QB < GB.fromMs) continue;
          MB.budget += MB.rate * OB;
          const DB = Math.min(Math.floor(MB.budget), MB.left);
          if (DB < 1) continue;
          MB.budget -= DB, MB.left -= DB;
          const PB = MB.particles ??= this.createStream(BB, GB, YB);
          if (GB === OZ) {
            const BB = JB.stemHalfWidth;
            PB.moveTo([oB, jB + 1, yB], [BB, 1, BB])
          } else if (GB === GZ) {
            const BB = JB.capSpread * Math.min(1, (QB - GB.fromMs) / 3e3),
              OB = Math.sqrt(Math.random()),
              YB = 2 * Math.random() * Math.PI,
              DB = Math.cos(YB) * OB,
              MB = Math.sin(YB) * OB,
              zB = oB + DB * BB,
              lB = yB + MB * BB,
              pB = JB.capThick,
              qB = jB + JB.capHeight + pB * (1 - OB * OB) * 2;
            PB.setDirections([.7 * DB, .05, .7 * MB], [DB, .2, MB]), PB.moveTo([zB, qB, lB], [pB, pB, pB])
          } else {
            this.ringAngle += 2.39996;
            const BB = Math.cos(this.ringAngle),
              OB = Math.sin(this.ringAngle);
            PB.setDirections([BB, .05, OB], [BB, .1, OB]), PB.moveTo([oB + 2 * BB, jB + .5, yB + 2 * OB], [0, .5, 0])
          }
          PB.emit(DB)
        }
      }
      createStream(BB, OB, GB) {
        const {
          r: YB
        } = GB, DB = Math.max(OB.life[0], YB / 25), QB = OB === YZ ? [.9 * DB, DB] : OB.life, oB = vq(YB), jB = OB === YZ ? 1 : oB.puffScale, yB = {
          texture: fq,
          CP: OB.count + 4,
          minLifeTime: QB[0] / xq,
          maxLifeTime: QB[1] / xq,
          minSize: OB.size[0] * jB,
          maxSize: OB.size[1] * jB,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, OB.gravity * xq * xq, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: OB.from[0],
            maxColor: OB.from[1]
          }, {
            timeFraction: .6,
            minColor: oZ(OB.from[0], OB.to[0]),
            maxColor: oZ(OB.from[1], OB.to[1])
          }, {
            timeFraction: 1,
            minColor: OB.to[0],
            maxColor: OB.to[1]
          }],
          blendMode: OB.blend
        };
        if (OB === OZ) {
          const BB = oB.capHeight / ((QB[0] + QB[1]) / 2);
          yB.minEmitPower = .9 * BB * xq, yB.maxEmitPower = 1.05 * BB * xq, yB.dir1 = [-.1, 1, -.1], yB.dir2 = [.1, 1, .1]
        } else OB === GZ ? (yB.minEmitPower = 1.2, yB.maxEmitPower = 2, yB.dir1 = [-1, .05, -1], yB.dir2 = [1, .2, 1]) : (yB.minEmitPower = 39.583333333333336, yB.maxEmitPower = 41.66666666666667, yB.dir1 = [1, 0, 0], yB.dir2 = [1, 0, 0]);
        return BB.createParticles(yB, {
          pos: GB.at
        })
      }
      disposeCloud(BB) {
        for (const GB of this.streams) {
          var OB;
          null === (OB = GB.particles) || void 0 === OB || OB.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(BB)
      }
    }

    function oZ(BB, OB) {
      return [(BB[0] + OB[0]) / 2, (BB[1] + OB[1]) / 2, (BB[2] + OB[2]) / 2, .75 * BB[3]]
    }

    function jZ(BB, OB, GB, YB, DB) {
      try {
        BB.playSound(OB, GB, YB, DB)
      } catch (QB) {
        console.error(QB)
      }
    }
    const yZ = {
        CP: 720,
        perS: 100
      },
      JZ = {
        CP: 320,
        perS: 44
      };
    class MZ {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(BB, OB) {
        this.zone = {
          centre: [...BB.centre],
          r: BB.r,
          band: BB.band ? [BB.band[0], BB.band[1]] : void 0
        }, this.endsAt = OB
      }
      stop() {
        this.zone = null
      }
      kR(BB, OB) {
        const {
          baf2FalloutMs: GB,
          baf2FalloutAt: YB,
          baf2FalloutR: DB,
          baf2FalloutY: QB
        } = BB;
        GB > 0 && YB && void 0 !== DB ? this.start({
          centre: YB,
          r: DB,
          band: QB
        }, OB + GB) : this.stop()
      }
      perS(BB, OB, GB) {
        const YB = this.zone;
        if (!YB) return 0;
        const DB = this.endsAt - BB;
        return DB <= 0 ? (this.zone = null, 0) : YB.band && (OB[1] < YB.band[0] || OB[1] > YB.band[1]) || Math.hypot(OB[0] - YB.centre[0], OB[2] - YB.centre[2]) > YB.r ? 0 : GB.perS * Math.min(1, DB / 5e3)
      }
    }
    const PZ = [5, 7],
      zZ = [24, 8, 24],
      lZ = .5,
      pZ = 1 / .6,
      qZ = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class ZZ {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Kj.isMobile)();
        this.state = new MZ, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(BB) {
          return BB ? JZ : yZ
        }(BB)
      }
      startFallout(BB, OB) {
        this.state.start(BB, OB)
      }
      stopFallout() {
        this.state.stop()
      }
      kR(BB) {
        this.state.kR(BB, performance.now())
      }
      onAfterRender(BB, OB) {
        var GB;
        const YB = performance.now(),
          DB = 0 === this.lastMs ? 0 : Math.min(YB - this.lastMs, 250) / 1e3;
        this.lastMs = YB;
        const QB = this.state.perS(YB, OB, this.tier);
        if (QB <= 0 || !BB.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + QB * DB, QB / 4);
        const oB = Math.floor(this.budget);
        if (oB < 1) return;
        this.budget -= oB;
        const jB = this.at;
        jB[0] = OB[0], jB[1] = OB[1] + 12, jB[2] = OB[2];
        const yB = null !== (GB = this.systems) && void 0 !== GB ? GB : this.create(BB, jB),
          JB = this.amounts;
        JB[0] = 0, JB[1] = 0;
        for (let MB = 0; MB < oB; MB++) JB[Math.random() < .3 ? 1 : 0]++;
        for (let MB = 0; MB < yB.length; MB++) JB[MB] > 0 && (yB[MB].moveTo(jB, zZ), yB[MB].emit(JB[MB]))
      }
      dispose() {
        for (const OB of null !== (BB = this.systems) && void 0 !== BB ? BB : []) {
          var BB;
          OB.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(BB, OB) {
        return this.systems = qZ.map((GB => {
          let {
            rgba: [YB, DB, QB, oB],
            share: jB
          } = GB;
          const yB = {
            texture: "square_particle",
            CP: Math.ceil(this.tier.CP * jB),
            minLifeTime: PZ[0] / pZ,
            maxLifeTime: PZ[1] / pZ,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [lZ, -1, lZ],
            colorGradients: [{
              timeFraction: 0,
              minColor: [YB, DB, QB, 0]
            }, {
              timeFraction: .15,
              minColor: [YB, DB, QB, oB]
            }, {
              timeFraction: .8,
              minColor: [YB, DB, QB, oB]
            }, {
              timeFraction: 1,
              minColor: [YB, DB, QB, 0]
            }],
            blendMode: mj.f.Standard
          };
          return BB.createParticles(yB, {
            pos: OB,
            half: zZ
          })
        })), this.systems
      }
    }
    const NZ = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function RZ(BB) {
      const OB = /\|rot(\d)/.exec(BB);
      return NZ[OB ? Number(OB[1]) : 1]
    }
    var WZ = GB(635),
      AZ = GB(39127);
    const VZ = new Set(WZ.o);

    function SZ(BB) {
      if (-2 !== BB.count) return null;
      const OB = aB(BB.item);
      return null !== OB && VZ.has(OB) ? OB : null
    }

    function nZ(BB) {
      const {
        width: OB,
        height: GB
      } = (0, AZ.b)(BB).hitBoxDimensions;
      return .55 / Math.max(OB, GB)
    }

    function UZ(BB, OB, GB) {
      if (!GB) return !1;
      const YB = BB[0] + .5 - OB[0],
        DB = BB[1] + .5 - OB[1],
        QB = BB[2] + .5 - OB[2];
      return YB * YB + DB * DB + QB * QB <= 576
    }

    function fZ(BB, OB) {
      return Math.atan2(BB[0], BB[2]) + Math.PI + OB
    }

    function kZ(BB, OB) {
      const GB = 2 * Math.PI;
      return (BB + GB * OB / 1e4) % GB
    }
    class dZ {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = BB, this.now = OB, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = BB.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(BB, OB) {
        if (0 === this.farms.size) return;
        const GB = this.now(),
          YB = Number.isNaN(this.frameMs) ? 0 : Math.min(GB - this.frameMs, 100);
        this.frameMs = GB, GB - this.checkedMs >= 1e3 && (this.checkedMs = GB, this.check(BB, OB));
        for (const DB of this.farms.values()) DB.shown && DB.running && null !== DB.model && YB > 0 && (DB.spin = kZ(DB.spin, YB), DB.model.setPose(DB.feet, fZ(DB.front, DB.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const BB of this.farms.values()) this.drop(BB);
        this.farms.clear()
      }
      sync() {
        const BB = new Set;
        for (const OB of this.labels.list()) {
          const GB = SZ(OB);
          if (null === GB) continue;
          BB.add(OB.key);
          const YB = this.farms.get(OB.key);
          if ((null === YB || void 0 === YB ? void 0 : YB.mob) === GB) continue;
          YB && this.drop(YB);
          const [DB, QB, oB] = OB.pos;
          this.farms.set(OB.key, {
            pos: OB.pos,
            feet: [DB + .5, QB + 1, oB + .5],
            mob: GB,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [OB, GB] of this.farms) BB.has(OB) || (this.drop(GB), this.farms.delete(OB));
        this.checkedMs = -1 / 0
      }
      check(BB, OB) {
        for (const GB of this.farms.values()) {
          const [YB, DB, QB] = GB.pos, oB = mp(BB, GB.pos);
          null !== oB && mG(oB) === LB && UZ(GB.pos, OB, "Air" === mp(BB, [YB, DB + 1, QB])) ? (GB.running = oB.endsWith("|Running"), GB.front = RZ(oB), null === GB.model && (GB.model = BB.createMobModel(GB.mob, nZ(GB.mob)), null === GB.model) || (GB.model.setPose(GB.feet, fZ(GB.front, GB.spin)), GB.shown || (GB.model.setVisible(!0), GB.shown = !0))) : (GB.shown && null !== GB.model && GB.model.setVisible(!1), GB.shown = !1)
        }
      }
      drop(BB) {
        var OB;
        null === (OB = BB.model) || void 0 === OB || OB.dispose(), BB.model = null, BB.shown = !1
      }
    }
    class KZ {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(BB) {
        var OB;
        this.island = BB.baf2ColIsland, this.islandSite = (OB = BB.baf2ColSite) && 8 === OB.length ? {
          spawnXZ: [OB[0], OB[1]],
          coreXZ: [OB[2], OB[3]],
          minXZ: [OB[4], OB[5]],
          maxXZ: [OB[6], OB[7]]
        } : null, this.views = BB.baf2ColList.map((BB => ({
          entry: DD(BB)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(BB) {
        this.status = BB, this.emit()
      }
      onOpen(BB) {
        this.openHeld = BB
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
        return this.views.map((BB => BB.entry))
      }
      entryAtRoot(BB) {
        var OB;
        return null === (OB = this.views.find((OB => {
          let {
            entry: GB
          } = OB;
          return GB.focus[0] === BB[0] && GB.focus[1] === BB[1] + 1 && GB.focus[2] === BB[2]
        }))) || void 0 === OB ? void 0 : OB.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(BB, OB) {
        return Ly(this.entries(), BB, OB)
      }
      lookSource() {
        return {
          handles: BB => zY(BB) >= 0 || lY(BB),
          line: (BB, OB) => this.lookLine(BB, OB),
          version: () => this.beamsVersion
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const BB of this.listeners) BB()
      }
    }
    const uZ = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((BB => BB / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((BB => [BB, BB + 1, BB + 2, BB, BB + 2, BB + 3]))
    };

    function mZ(BB, OB, GB, YB, DB, QB, oB) {
      let jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const yB = Math.cos(jB),
        JB = Math.sin(jB),
        MB = BB.positions.length / 3,
        {
          positions: PB,
          indices: zB
        } = uZ;
      for (let lB = 0; lB < PB.length; lB += 3) {
        const jB = PB[lB] * DB,
          MB = PB[lB + 2] * oB;
        BB.positions.push(OB + jB * yB + MB * JB, GB + PB[lB + 1] * QB, YB - jB * JB + MB * yB)
      }
      for (const lB of zB) BB.indices.push(MB + lB)
    }

    function IZ(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return OB < 1 ? {
        rgb: BB,
        alpha: OB
      } : {
        rgb: BB,
        alpha: 1,
        opaque: !0
      }
    }
    class FZ {
      constructor(BB, OB) {
        this.style = BB, this.perSource = OB, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(BB) {
        this.sources = BB, 0 === BB.length && (this.budget = 0)
      }
      kP(BB, OB, GB) {
        const YB = this.sources.length;
        if (0 !== YB) {
          var DB, QB;
          this.budget = Math.min(this.budget + (DB = YB, QB = this.perSource, Math.min(DB * QB, vy) * OB), 2);
          for (let OB = 0; OB < YB && this.budget >= 1; OB++) {
            const OB = this.sources[this.cursor % YB];
            this.cursor = (this.cursor + 1) % YB;
            if (!(Math.max(Math.abs(OB.x - GB[0]), Math.abs(OB.y - GB[1]), Math.abs(OB.z - GB[2])) > 32)) return this.puff(BB, OB), void this.budget--
          }
        }
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.dispose(), this.particles = null, this.sources = []
      }
      puff(BB, OB) {
        let {
          x: GB,
          y: YB,
          z: DB,
          h: QB,
          faces: oB
        } = OB;
        const jB = function(BB, OB, GB, YB, DB) {
            const [QB, oB, jB] = DB[Math.floor(Math.random() * DB.length)], yB = .04, JB = (BB, OB, GB) => BB > 0 ? OB + GB + yB : BB < 0 ? OB - yB : OB + .1, MB = (BB, OB, GB) => BB > 0 ? OB + GB + yB : BB < 0 ? OB - yB : OB + GB - .1, PB = [JB(QB, BB, 1), JB(oB, OB, YB), JB(jB, GB, 1)], zB = [MB(QB, BB, 1), MB(oB, OB, YB), MB(jB, GB, 1)];
            return {
              pos: [(PB[0] + zB[0]) / 2, (PB[1] + zB[1]) / 2, (PB[2] + zB[2]) / 2],
              half: [(zB[0] - PB[0]) / 2, (zB[1] - PB[1]) / 2, (zB[2] - PB[2]) / 2],
              out: [QB, oB, jB]
            }
          }(GB, YB, DB, QB, oB),
          {
            style: yB
          } = this,
          JB = this.particles ??= BB.createParticles(dq(yB, Math.ceil(yB.count * vy * yB.life[1]) + 4), jB);
        JB.moveTo(jB.pos, jB.half);
        const [MB, PB, zB] = jB.out, lB = yB.spread;
        JB.setDirections([MB - lB, .6 + PB, zB - lB], [MB + lB, 1 + PB, zB + lB]), JB.emit(yB.count)
      }
    }
    const iZ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class LZ {
      constructor() {
        this.green = new FZ(xy.green, Cy), this.pink = new FZ(xy.pink, Hy), this.colliders = [], this.lastMs = 0
      }
      setSources(BB) {
        this.colliders = BB;
        const OB = [],
          GB = [];
        for (const YB of BB) {
          const [BB, DB, QB] = YB.focus;
          OB.push({
            x: BB,
            y: DB - 1,
            z: QB,
            h: 2,
            faces: iZ
          });
          for (let OB = 0; OB < 4; OB++) {
            if (!YB.live[OB]) continue;
            const [BB, DB, QB] = ZY(YB.focus, OB, oY.LASER_D), [oB, , jB] = qY[OB], yB = iZ.filter((BB => BB[0] !== oB || BB[2] !== jB || 0 !== BB[1]));
            GB.push({
              x: BB,
              y: DB,
              z: QB,
              h: 1,
              faces: yB
            })
          }
        }
        this.green.setSources(OB), this.pink.setSources(GB)
      }
      onAfterRender(BB) {
        const OB = performance.now(),
          GB = 0 === this.lastMs ? 0 : Math.min(OB - this.lastMs, 250) / 1e3;
        if (this.lastMs = OB, 0 === this.colliders.length || !BB.particlesEnabled()) return;
        const YB = BB.getCameraPosition();
        this.green.kP(BB, GB, YB), this.pink.kP(BB, GB, YB)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const gZ = 1.04,
      rZ = IZ([1, 120 / 255, 220 / 255]),
      XZ = IZ([1, .25, .25], .35);
    class wZ {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new LZ
      }
      onAfterRender(BB) {
        this.store.version() !== this.builtVersion && this.rebuild(BB);
        const OB = performance.now();
        for (const GB of this.beams) {
          const YB = 1 + .35 * Math.sin(OB / 700 * Math.PI * 2 + GB.phase);
          BB.setGameMesh(GB.mesh, {
            scale: [GB.alongX ? 1 : YB, YB, GB.alongX ? YB : 1]
          })
        }
        this.glow.onAfterRender(BB)
      }
      dispose(BB) {
        this.clear(BB), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(BB) {
        this.clear(BB), this.builtVersion = this.store.version();
        const OB = [];
        for (const {
            entry: GB
          }
          of this.store.colliders()) GB.on && GB.live.some(Boolean) && (this.addBeams(BB, GB), OB.push(GB)), GB.blockers.length > 0 && this.addMarkers(BB, GB);
        this.glow.setSources(OB)
      }
      addBeams(BB, OB) {
        const [GB, YB, DB] = OB.focus, QB = by - .25, oB = (.25 + by) / 2;
        for (let jB = 0; jB < 4; jB++) {
          if (!OB.live[jB]) continue;
          const [yB, , JB] = qY[jB], MB = 0 !== yB, PB = {
            positions: [],
            indices: []
          };
          mZ(PB, 0, 0, 0, MB ? QB : .2, .2, MB ? .2 : QB);
          const zB = [GB + .5 + yB * oB, YB + .5, DB + .5 + JB * oB],
            lB = BB.createGameMesh(PB, rZ, zB);
          this.meshes.push(lB), this.beams.push({
            mesh: lB,
            alongX: MB,
            phase: jB * Math.PI / 2
          })
        }
      }
      addMarkers(BB, OB) {
        const GB = OB.blockers[0],
          YB = {
            positions: [],
            indices: []
          };
        for (const [DB, QB, oB] of OB.blockers) mZ(YB, DB - GB[0] + .5, QB - GB[1] + .5, oB - GB[2] + .5, gZ, gZ, gZ);
        this.meshes.push(BB.createGameMesh(YB, XZ, GB))
      }
      clear(BB) {
        for (const OB of this.meshes) BB.disposeGameMesh(OB);
        this.meshes = [], this.beams = []
      }
    }
    const EZ = [.56, .83, 1],
      cZ = [1, .73, .08],
      hZ = [1, .25, .25],
      aZ = [.85, .85, .85],
      eZ = [.3, .45, .6];

    function TZ(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const oB = DB / 2,
        jB = DB + QB;
      for (const yB of [-oB, oB])
        for (const DB of [-oB, oB]) mZ(BB, OB, GB + yB, YB + DB, jB, QB, QB), mZ(BB, OB + yB, GB, YB + DB, QB, jB, QB), mZ(BB, OB + yB, GB + DB, YB, QB, QB, jB)
    }

    function bZ(BB) {
      return OB => BB.isBlockInLoadedChunk(OB[0], OB[1], OB[2]) && 0 === BB.getBlockId(OB[0], OB[1], OB[2])
    }

    function CZ(BB) {
      return BB.map((BB => {
        let {
          free: OB,
          blocked: GB,
          gaps: YB,
          supports: DB
        } = BB;
        return `${OB.join(";")}|${GB.join(";")}|${YB.join(";")}|${DB.join(";")}`
      })).join("/")
    }

    function HZ(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const QB = OB[0],
        oB = {
          positions: [],
          indices: []
        };
      for (const [jB, yB, JB] of OB) TZ(oB, jB - QB[0] + .5, yB - QB[1] + .5, JB - QB[2] + .5, YB, DB);
      return BB.createGameMesh(oB, GB, QB)
    }
    class vZ {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, OB, GB) {
        var YB;
        const DB = null === (YB = BB.MYB(OB)) || void 0 === YB ? void 0 : YB.name;
        if (DB !== yY && DB !== jY) return void("" !== this.shownKey && this.show(BB, "", []));
        const QB = performance.now();
        if (QB - this.lastCheckMs >= 200 && (this.lastCheckMs = QB, DB === yY ? this.check(BB, GB) : this.preview(BB, GB)), this.pulses.length > 0) {
          const OB = 1 + .12 * Math.sin(QB / 1e3 * 1.25 * Math.PI * 2),
            GB = [OB, OB, OB];
          for (const YB of this.pulses) BB.setGameMesh(YB, {
            scale: GB
          })
        }
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      check(BB, OB) {
        const GB = bZ(BB),
          YB = [];
        for (const {
            entry: QB
          }
          of this.store.colliders()) {
          QB.focus.every(((BB, GB) => Math.abs(BB + .5 - OB[GB]) <= oY.GHOST_REACH)) && YB.push(Ty(QB, GB))
        }
        const DB = CZ(YB);
        DB !== this.shownKey && this.show(BB, DB, YB)
      }
      preview(BB, OB) {
        const GB = BB.getTargetedBlock(),
          YB = GB ? [GB.yZ[0], GB.yZ[1], GB.yZ[2]] : null,
          DB = null !== YB && YB.every(((BB, GB) => Math.abs(BB + .5 - OB[GB]) <= 8)),
          QB = this.store.site(),
          oB = DB && QB ? function(BB, OB, GB) {
            const YB = pY(BB);
            if (!YB.every(OB)) return null;
            const DB = WY(BB, GB);
            return {
              column: YB,
              spots: Ty({
                focus: YB[1],
                lasers: [!1, !1, !1, !1],
                open: DB,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, OB),
              fits: DB.filter(Boolean).length >= oY.MIN_SPOTS
            }
          }(YB, bZ(BB), QB) : null,
          jB = oB ? [oB.spots] : [],
          yB = oB ? `preview ${YB.join(",")}|${oB.fits}|${CZ(jB)}` : "";
        var JB, MB;
        yB !== this.shownKey && this.show(BB, yB, jB, null !== (JB = null === oB || void 0 === oB ? void 0 : oB.column) && void 0 !== JB ? JB : [], null === (MB = null === oB || void 0 === oB ? void 0 : oB.fits) || void 0 === MB || MB)
      }
      show(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(BB), this.shownKey = OB, YB.length > 0 && this.meshes.push(HZ(BB, YB, IZ(DB ? aZ : hZ)));
        for (const {
            free: QB,
            blocked: oB,
            gaps: jB,
            supports: yB
          }
          of GB) {
          for (const [OB, GB, YB] of QB) {
            const DB = {
              positions: [],
              indices: []
            };
            TZ(DB, 0, 0, 0);
            const QB = BB.createGameMesh(DB, IZ(EZ), [OB + .5, GB + .5, YB + .5]);
            this.meshes.push(QB), this.pulses.push(QB)
          }
          oB.length > 0 && this.meshes.push(HZ(BB, oB, IZ(cZ))), jB.length > 0 && this.meshes.push(HZ(BB, jB, IZ(hZ), 1.06, .07)), yB.length > 0 && this.meshes.push(HZ(BB, yB, IZ(eZ)))
        }
      }
      clear(BB) {
        for (const OB of this.meshes) BB.disposeGameMesh(OB);
        this.meshes = [], this.pulses = []
      }
    }
    class sZ {
      constructor() {
        this.stored = new Map, this.sJ = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(BB) {
        if (!BB.baf2TermOpen) return !1;
        BB.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [OB, GB] of BB.baf2TermItems) GB > 0 ? this.stored.set(OB, GB) : this.stored.delete(OB);
        if (BB.baf2TermHeld && (this.sJ = new Map(BB.baf2TermHeld)), this.pending = this.pending.filter((OB => OB.seq > BB.baf2TermAcked)), this.silos = BB.baf2TermSilos, this.readOnly = BB.baf2TermReadOnly, this.pocket = !0 === BB.baf2TermPocket, BB.baf2TermReset) this.resort();
        else {
          const BB = new Set(this.order);
          for (const OB of this.stored.keys()) BB.has(OB) || this.order.push(OB)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((BB, OB) => this.amount(OB) - this.amount(BB) || BB.localeCompare(OB))), this.changed()
      }
      take(BB, OB) {
        const GB = jO(BB, this.amount(OB));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: OB,
          amount: GB,
          put: !1
        }), this.recents = [OB, ...this.recents.filter((BB => BB !== OB))].slice(0, 6), this.changed(), GO(this.seq, BB, OB)
      }
      put(BB, OB) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: OB,
          amount: jO(BB, this.heldAmount(OB)),
          put: !0
        }), this.changed(), YO(this.seq, BB, OB)
      }
      putAll() {
        this.seq++;
        for (const BB of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: BB,
          amount: this.heldAmount(BB),
          put: !0
        });
        return this.changed(), DO(this.seq)
      }
      amount(BB) {
        var OB;
        let GB = null !== (OB = this.stored.get(BB)) && void 0 !== OB ? OB : 0;
        for (const YB of this.pending) YB.item === BB && (GB += YB.put ? YB.amount : -YB.amount);
        return Math.max(0, GB)
      }
      heldAmount(BB) {
        var OB;
        let GB = null !== (OB = this.sJ.get(BB)) && void 0 !== OB ? OB : 0;
        for (const YB of this.pending) YB.put && YB.item === BB && (GB -= YB.amount);
        return Math.max(0, GB)
      }
      heldItems() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((OB => OB === BB || this.heldAmount(OB) > 0))
      }
      items() {
        return this.order.filter((BB => this.amount(BB) > 0))
      }
      recent() {
        return this.recents.filter((BB => this.amount(BB) > 0))
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
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      changed() {
        this.version++;
        for (const BB of this.listeners) BB()
      }
    }
    var xZ = GB(39081);
    const tZ = {
      isBlock: BB => void 0 !== mB.h[BB],
      harvestType: BB => {
        var OB;
        return null === (OB = mB.h[BB]) || void 0 === OB ? void 0 : OB.harvestType
      },
      harvestLevel: BB => {
        var OB;
        return null === (OB = mB.h[BB]) || void 0 === OB ? void 0 : OB.harvestLevel
      },
      dropsNothing: BB => {
        var OB;
        return null === (null === (OB = mB.h[BB]) || void 0 === OB ? void 0 : OB.drops)
      },
      displayName: BB => {
        var OB;
        return null === (OB = Ho.p[BB]) || void 0 === OB ? void 0 : OB.displayName
      },
      description: BB => {
        var OB;
        return null === (OB = Ho.p[BB]) || void 0 === OB ? void 0 : OB.description
      },
      harvests: BB => {
        var OB;
        return null === (OB = Ho.p[BB]) || void 0 === OB ? void 0 : OB.harvests
      },
      level: BB => {
        var OB;
        return null === (OB = Ho.p[BB]) || void 0 === OB ? void 0 : OB.level
      }
    };

    function BN(BB, OB, GB) {
      return function(BB, OB, GB, YB) {
        var DB, QB;
        const oB = OB.split("|")[0],
          jB = BB.isBlock(OB) ? OB : BB.isBlock(oB) ? oB : null;
        if (null === jB || "rock" !== BB.harvestType(jB) || BB.dropsNothing(jB) && !gY.has(oB)) return null;
        const yB = GB && "rock" === BB.harvests(GB) ? null !== (DB = BB.level(GB)) && void 0 !== DB ? DB : 0 : null,
          JB = null !== (QB = null !== YB && void 0 !== YB ? YB : BB.harvestLevel(jB)) && void 0 !== QB ? QB : 0;
        return (null !== yB ? JB <= yB : 0 === BB.harvestLevel(jB)) ? null : kY(BB, JB)
      }(tZ, BB, OB, GB)
    }

    function ON(BB, OB) {
      return function(BB, OB, GB) {
        if (OB === fY[0]) return [(0, iB.Ae)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, iB.J.whiteUiText)];
        const YB = GB.split("|")[0],
          DB = BB.isBlock(YB) ? BB.displayName(YB) : void 0,
          QB = "string" === typeof DB ? DB : DB && "translationKey" in DB ? `$t(${DB.translationKey})` : YB;
        return [(0, iB.Ae)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: QB
          }
        }, iB.J.whiteUiText), (0, iB.Ae)({
          translationKey: `item:${(0,iB.ef)(OB)}`
        }, iB.J.yellowUiText)]
      }(tZ, BB, OB)
    }
    const GN = "buildAFactory2Game:";
    const YN = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function DN(BB) {
      return BB.endsWith(" Ore")
    }
    const QN = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      oN = [],
      jN = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: QN,
        plan: null,
        atomic: oN
      },
      yN = "buildAFactory2Game:",
      JN = new Set(["Splitter", "Sorting Gate"]),
      MN = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class PN {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = BB, this.planAt = OB, this.tierOf = GB, this.SM = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.sJ = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = jN, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(BB, OB, GB) {
        var YB, DB, QB;
        let oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const jB = null !== (YB = null === (DB = BB.MYB(OB)) || void 0 === DB ? void 0 : DB.name) && void 0 !== YB ? YB : null,
          yB = BB.isPlayerCrouching(OB),
          JB = 0 === GB ? null : this.resolve(BB, GB),
          MB = null !== JB && null !== oB && JN.has(JB.rootName) && function(BB, OB) {
            return MN.some((GB => {
              let [YB, DB] = GB;
              const QB = BB.getBlockId(OB[0] + YB, OB[1], OB[2] + DB);
              return 0 !== QB && "Express Belt" === BB.getMetaInfo(QB).rootName
            }))
          }(BB, oB),
          PB = this.updatePlan(0 === GB ? null : oB),
          zB = this.tierOf(),
          lB = null === oB ? null : (0, xZ.g)(GB),
          pB = null !== lB && null !== oB && (0, xZ.k)(function(BB) {
            return (OB, GB, YB) => BB.getBlockId(OB, GB, YB)
          }(BB), oB[0], oB[1], oB[2], lB),
          qB = this.readAfloat(BB, GB, oB);
        if (GB === this.SM && pB === this.missesMaker && qB === this.afloat && jB === this.sJ && yB === this.crouching && MB === this.express && zB === this.tier && !PB && (!this.targetsLive || !this.liveMoved(oB))) return;
        this.SM = GB, this.missesMaker = pB, this.afloat = qB, this.sJ = jB, this.crouching = yB, this.express = MB;
        const ZB = MB && JB ? function(BB) {
          if (null === BB.info) return null;
          return BB.express ??= {
            ...BB.info,
            detail: `${yN}lookKeepsUpExpress`,
            detailItem: null
          }, BB.express
        }(JB) : null !== JB && pB && null !== lB ? this.besideMaker(JB, GB, lB) : null !== JB && qB ? this.hanging(JB) : null !== (QB = null === JB || void 0 === JB ? void 0 : JB.info) && void 0 !== QB ? QB : null;
        this.tier = zB;
        const NB = JB && ZB ? function(BB, OB) {
          var GB, YB;
          const DB = mB.h[BB];
          if (!BB.endsWith(" Ore") || "rock" !== (null === DB || void 0 === DB ? void 0 : DB.harvestType) || 0 === DB.harvestLevel) return null;
          const QB = null !== (GB = DB.harvestLevel) && void 0 !== GB ? GB : 0,
            oB = OB ? Ho.p[OB] : void 0;
          if ("rock" === (null === oB || void 0 === oB ? void 0 : oB.harvests) && (null !== (YB = oB.level) && void 0 !== YB ? YB : 0) >= QB) return null;
          const jB = (yB = QB, kY(tZ, yB));
          var yB;
          if (null === jB) return null;
          const JB = (0, xD.d)(jB),
            MB = /^[AEIOU]/.test(jB) ? "An" : "";
          if ("rock" === (null === oB || void 0 === oB ? void 0 : oB.harvests) && OB) return {
            key: `${yN}lookToolTooWeak${MB}`,
            sJ: (0, xD.d)(OB),
            needed: JB
          };
          return {
            key: jB === fY[0] ? `${yN}lookNeedAnyPickaxe` : `${yN}lookNeedPickaxe${MB}`,
            sJ: null,
            needed: JB
          }
        }(JB.rootName, jB) : null;
        this.targetsLive = !0 === (null === JB || void 0 === JB ? void 0 : JB.live) && null !== oB;
        let RB = null;
        this.targetsLive && JB && oB && this.live && (this.livePos[0] = oB[0], this.livePos[1] = oB[1], this.livePos[2] = oB[2], this.liveVersion = this.live.version(), RB = this.live.line(JB.rootName, oB));
        const WB = null === ZB ? QN : function(BB, OB, GB) {
            const YB = function(BB, OB, GB) {
              const YB = FG(BB);
              if (null === YB) return null;
              const DB = `${GN}lookPortMode_${YB}`,
                QB = wY(OB);
              if (QB && GB) return {
                mode: null,
                detail: DB,
                next: `${GN}lookWrenchPickUp`,
                nextState: null
              };
              const oB = iG(BB),
                jB = null === oB ? null : FG(oB);
              return null === jB ? {
                mode: null,
                detail: DB,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: DB,
                next: QB ? `${GN}lookWrenchNext` : `${GN}lookPortWrench`,
                nextState: `${GN}lookPortState_${jB}`
              }
            }(BB, OB, GB);
            if (null !== YB) return YB;
            const DB = BD(BB, OB, GB);
            return null === DB.mode && null === DB.next ? QN : DB
          }(BB.blockIdToBlockName(GB), jB, yB),
          AB = this.plan,
          VB = JB && ZB ? this.rowsOf(JB.rootName, zB) : oN,
          SB = this.snapshot;
        if (!(null === ZB ? !SB.visible : SB.visible && ZB === SB.info && (nB = NB, UB = SB.tool, nB === UB || null !== nB && null !== UB && nB.key === UB.key && nB.sJ === UB.sJ && nB.needed === UB.needed) && function(BB, OB) {
            return BB === OB || null !== BB && null !== OB && BB.key === OB.key && JSON.stringify([BB.params, BB.keys]) === JSON.stringify([OB.params, OB.keys])
          }(RB, SB.live) && function(BB, OB) {
            return BB.mode === OB.mode && BB.detail === OB.detail && BB.next === OB.next && BB.nextState === OB.nextState
          }(WB, SB.wrench) && hp(AB, SB.plan) && VB === SB.atomic)) {
          var nB, UB;
          this.snapshot = null === ZB ? {
            ...SB,
            visible: !1
          } : {
            info: ZB,
            visible: !0,
            tool: NB,
            live: RB,
            wrench: WB,
            plan: AB,
            atomic: VB
          };
          for (const BB of this.listeners) BB()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = jN, this.SM = 0, this.sJ = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(BB, OB, GB) {
        if (null === GB || 0 === OB || !jB() || !DN(this.resolve(BB, OB).rootName)) return !1;
        const YB = `${GB[0]},${GB[1]},${GB[2]},${OB}`,
          DB = performance.now();
        return YB === this.afloatKey && DB - this.afloatAt < zN ? this.afloat : (this.afloatKey = YB, this.afloatAt = DB, function(BB, OB) {
          for (const [GB, YB, DB] of YN) {
            const QB = OB(BB[0] + GB, BB[1] + YB, BB[2] + DB);
            if (void 0 === QB || null !== QB && !DN(QB)) return !1
          }
          return !0
        }(GB, ((OB, GB, YB) => function(BB, OB, GB, YB) {
          if (!BB.isBlockInLoadedChunk(OB, GB, YB)) return;
          const DB = BB.getBlockId(OB, GB, YB);
          return 0 === DB ? null : BB.getMetaInfo(DB).rootName
        }(BB, OB, GB, YB))))
      }
      liveMoved(BB) {
        var OB;
        const {
          livePos: GB
        } = this;
        return null === BB || BB[0] !== GB[0] || BB[1] !== GB[1] || BB[2] !== GB[2] || (null === (OB = this.live) || void 0 === OB ? void 0 : OB.version()) !== this.liveVersion
      }
      updatePlan(BB) {
        const OB = null === BB ? "" : BB.join(","),
          GB = performance.now();
        if (OB === this.planPos && GB - this.planMs < 250) return !1;
        this.planPos = OB, this.planMs = GB;
        const YB = null === BB ? null : this.planAt([BB[0], BB[1], BB[2]]),
          DB = !hp(YB, this.plan);
        return this.plan = YB, DB
      }
      besideMaker(BB, OB, GB) {
        let {
          info: YB
        } = BB;
        if (null === YB) return null;
        let DB = this.besideMakerById.get(OB);
        if (void 0 === DB) {
          const BB = "cryo" === GB ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          DB = {
            ...YB,
            detail: `${yN}${BB}`,
            detailItem: null
          }, this.besideMakerById.set(OB, DB)
        }
        return DB
      }
      hanging(BB) {
        let {
          info: OB,
          rootName: GB
        } = BB;
        if (null === OB) return null;
        let YB = this.afloatByRoot.get(GB);
        return void 0 === YB && (YB = {
          ...OB,
          detail: `${yN}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(GB, YB)), YB
      }
      rowsOf(BB, OB) {
        if (null === OB) return oN;
        const GB = `${BB}|${OB}`;
        let YB = this.rowsByKey.get(GB);
        if (void 0 === YB) {
          const DB = function(BB, OB) {
            var GB;
            if (!(BB in iO)) return [];
            const YB = null !== (GB = LO[BB]) && void 0 !== GB ? GB : [],
              DB = new Map;
            for (const oB of gQ(BB, OB))
              if ((YB.includes(oB) || LQ(oB.output) && FQ(oB.output) > vB(BB)) && FQ(oB.output) <= OB) {
                var QB;
                const BB = null !== (QB = DB.get(oB.output)) && void 0 !== QB ? QB : [];
                BB.push(oB.input), DB.set(oB.output, BB)
              } return XQ([...DB], (BB => {
              let [OB] = BB;
              return -FQ(OB)
            })).map((BB => {
              let [OB, GB] = BB;
              return {
                output: OB,
                inputs: GB
              }
            }))
          }(BB, OB);
          YB = DB.length > 0 ? DB : oN, this.rowsByKey.set(GB, YB)
        }
        return YB
      }
      resolve(BB, OB) {
        const {
          rootId: GB,
          rootName: YB
        } = BB.getMetaInfo(OB), DB = (0, pG.n)(YB) ? OB : GB;
        let QB = this.byRootId.get(DB);
        const oB = jB();
        if (void 0 === QB || QB.nuclear !== oB) {
          var yB;
          const GB = function(BB) {
            return iY(tZ, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB)
          }(YB, BB.blockIdToBlockName(OB));
          QB = {
            info: GB,
            rootName: YB,
            live: null !== GB && !0 === (null === (yB = this.live) || void 0 === yB ? void 0 : yB.handles(YB)),
            nuclear: oB
          }, this.byRootId.set(DB, QB)
        }
        return QB
      }
    }
    const zN = 500;
    const lN = (0, YB.memo)((function(BB) {
      var OB, GB;
      let {
        store: DB
      } = BB;
      const {
        t: QB
      } = (0, UD.H)(), [oB, jB] = (0, YB.useState)((() => DB.get()));
      (0, YB.useEffect)((() => (jB(DB.get()), DB.subscribe((() => {
        jB(DB.get())
      })))), [DB]);
      const {
        openInGameMenuName: yB,
        openEverythingMenuName: JB,
        isTouchScreen: MB
      } = (0, ND.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: PB,
        tool: zB,
        live: lB,
        wrench: pB,
        atomic: qB
      } = oB, ZB = oB.visible && null === yB && null === JB;
      if (null === PB) return null;
      const NB = null !== pB.detail ? QB(pB.detail) : null !== (OB = oB.plan) && void 0 !== OB && OB.ctrl ? QB("buildAFactory2Game:lookPlanCtrl") : null !== PB.detail ? QB(PB.detail, null === PB.detailItem ? void 0 : {
        item: QB(PB.detailItem)
      }) : null;
      return (0, WQ.jsxs)("div", {
        className: AD()("Baf2LookTarget", {
          Visible: ZB
        }),
        "aria-hidden": !ZB,
        children: [(0, WQ.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: QB(PB.name)
        }), null !== oB.plan && (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QB(oB.plan.key, {
            kind: QB(oB.plan.kindKey),
            w: String(oB.plan.w),
            h: String(oB.plan.h),
            d: String(oB.plan.d),
            count: String(oB.plan.count)
          })
        }), void 0 !== (null === (GB = oB.plan) || void 0 === GB ? void 0 : GB.why) && (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: QB(oB.plan.why)
        }), null !== pB.mode && (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QB(pB.mode)
        }), null !== zB ? (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: QB(zB.key, {
            item: QB(zB.needed),
            sJ: null === zB.sJ ? "" : QB(zB.sJ)
          })
        }) : null !== lB ? (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QB(lB.key, ty(QB, lB))
        }) : null !== NB && (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: NB
        }), qB.length > 0 && (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QB("buildAFactory2Game:lookAtomicRecipes", {
            list: qB.map((BB => {
              let {
                output: OB,
                inputs: GB
              } = BB;
              const YB = GB.length > 1 ? ` ${QB("buildAFactory2Game:recipeMore",{count:String(GB.length-1)})}` : "";
              return `${QB((0,xD.d)(GB[0]))}${YB} \u2192 ${QB((0,xD.d)(OB))}`
            })).join(", ")
          })
        }), null !== pB.next && (0, WQ.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: QB(pB.next, {
            state: null === pB.nextState ? "" : QB(pB.nextState),
            use: QB(MB ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var pN = GB(39176);
    const qN = [],
      ZN = [
        [0, -1, 0]
      ];

    function NN(BB) {
      const OB = [BB];
      for (let GB = 1; GB <= 4; GB++) GB > 1 && OB.push(`${BB}|meta|rot${GB}`), OB.push(`${BB}|meta|rot${GB}|Running`);
      return OB
    }

    function RN(BB, OB) {
      return [Math.floor(BB[0] / OB), Math.floor(BB[1] / OB), Math.floor(BB[2] / OB)]
    }

    function WN(BB, OB, GB) {
      return `${BB},${OB},${GB}`
    }

    function AN(BB) {
      const OB = BB.split("|")[0];
      if (!JG(OB)) return qN;
      const GB = iO[OB];
      if (OG(GB)) return ZN;
      const YB = RZ(BB);
      return GG(GB) ? [
        [-YB[0], -YB[1], -YB[2]]
      ] : VD(GB) ? function(BB, OB) {
        const GB = BB[0] - 2 * OB[0],
          YB = BB[2] - 2 * OB[2],
          DB = [];
        for (let QB = -1; QB <= 1; QB++)
          for (let OB = -1; OB <= 1; OB++) DB.push([GB + QB, BB[1], YB + OB]);
        return DB
      }([0, 0, 0], YB) : qN
    }
    const VN = [.5, .5, .5],
      SN = [.2, .8, .3],
      nN = [.45, 1, .5];
    class UN {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(BB) {
        this.indexed = !0;
        for (const OB of dO)
          for (const GB of NN(OB)) {
            const OB = BB.blockNameToBlockId(GB, !0),
              YB = AN(GB);
            null !== OB && YB.length > 0 && (this.offsetsList.push(YB), this.offsetsIndexById[OB] = this.offsetsList.length)
          }
      }
      onAfterRender(BB, OB) {
        this.indexed || this.index(BB);
        const GB = performance.now();
        if (GB - this.lastCheckMs < 100) return;
        this.lastCheckMs = GB, this.checks++;
        const YB = Jp.f.pP,
          [DB, QB, oB] = RN(OB, YB);
        let jB = !1;
        const yB = [];
        let JB = 0;
        for (let MB = DB - 2; MB <= DB + 2; MB++)
          for (let OB = QB - 1; OB <= QB + 1; OB++)
            for (let DB = oB - 2; DB <= oB + 2; DB++) {
              const QB = JB++,
                oB = WN(MB, OB, DB),
                PB = BB.getChunkVersion(MB, OB, DB);
              let zB = this.chunks.get(oB);
              null !== PB ? (zB || (zB = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(oB, zB)), zB.seenAt = this.checks, zB.checkedVersion !== PB && (zB.checkedVersion = PB, jB = !0), zB.scannedVersion !== PB && GB - zB.scannedAt >= 500 && yB.push({
                slot: QB,
                entry: zB,
                origin: [MB * YB, OB * YB, DB * YB]
              })) : (jB ||= void 0 !== zB, this.chunks.delete(oB))
            }
        this.scanDue(BB, yB) && (jB = !0);
        for (const [MB, PB] of this.chunks) PB.seenAt !== this.checks && (jB ||= PB.machines.length > 0, this.chunks.delete(MB));
        for (const MB of this.chunks.values())
          for (const [OB, GB, YB] of MB.cellChunks)(Math.abs(OB - DB) > 2 || Math.abs(GB - QB) > 1 || Math.abs(YB - oB) > 2) && this.watchCellChunk(BB, OB, GB, YB) && (jB = !0);
        for (const [MB, PB] of this.cellChunks) PB.seenAt !== this.checks && this.cellChunks.delete(MB);
        jB && this.refresh(BB)
      }
      dispose(BB) {
        this.clearMeshes(BB), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(BB, OB) {
        const GB = Math.max(OB.findIndex((BB => {
          let {
            slot: OB
          } = BB;
          return OB >= this.scanFrom
        })), 0);
        let YB = 96;
        for (let DB = 0; DB < OB.length; DB++) {
          const {
            slot: QB,
            entry: oB,
            origin: jB
          } = OB[(GB + DB) % OB.length];
          if (YB -= this.scan(BB, oB, jB), YB <= 0) {
            this.scanFrom = QB + 1;
            break
          }
        }
        return OB.length > 0
      }
      scan(BB, OB, GB) {
        let [YB, DB, QB] = GB;
        const oB = Jp.f.pP,
          jB = this.hits;
        jB.length = 0;
        const yB = BB.scanBlocks(YB, DB, QB, YB + oB, DB + oB, QB + oB, this.offsetsIndexById, jB),
          JB = [];
        for (let MB = 0; MB < jB.length; MB += 4) JB.push({
          pos: [jB[MB], jB[MB + 1], jB[MB + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[jB[MB + 3]] - 1]
        });
        return OB.machines = JB, OB.cellChunks = function(BB, OB) {
          const GB = new Set,
            YB = [];
          for (const {
              pos: DB,
              offsets: QB
            }
            of BB)
            for (const [BB, oB, jB] of QB) {
              const QB = RN([DB[0] + BB, DB[1] + oB, DB[2] + jB], OB),
                yB = WN(...QB);
              GB.has(yB) || (GB.add(yB), YB.push(QB))
            }
          return YB
        }(JB, oB), OB.scannedVersion = OB.checkedVersion, OB.scannedAt = performance.now(), Math.max(yB, 1)
      }
      watchCellChunk(BB, OB, GB, YB) {
        const DB = WN(OB, GB, YB),
          QB = BB.getChunkVersion(OB, GB, YB),
          oB = this.cellChunks.get(DB);
        return null === QB ? this.cellChunks.delete(DB) : (null === oB || void 0 === oB ? void 0 : oB.version) === QB ? (oB.seenAt = this.checks, !1) : (this.cellChunks.set(DB, {
          version: QB,
          seenAt: this.checks
        }), !0)
      }
      refresh(BB) {
        const OB = function(BB, OB) {
            const GB = new Set,
              YB = [];
            for (const {
                pos: DB,
                offsets: QB
              }
              of BB)
              for (const [BB, oB, jB] of QB) {
                const QB = DB[0] + BB,
                  yB = DB[1] + oB,
                  JB = DB[2] + jB,
                  MB = `${QB},${yB},${JB}`;
                GB.has(MB) || (GB.add(MB), OB(QB, yB, JB) && YB.push([QB, yB, JB]))
              }
            return YB
          }([...this.chunks.values()].flatMap((BB => BB.machines)), ((OB, GB, YB) => BB.isBlockInLoadedChunk(OB, GB, YB) && 0 === BB.getBlockId(OB, GB, YB))),
          GB = OB.join(";");
        GB !== this.shownKey && (this.shownKey = GB, this.clearMeshes(BB), OB.length > 0 && (this.meshes = [this.build(BB, OB, !1), this.build(BB, OB, !0)]))
      }
      build(BB, OB, GB) {
        const YB = OB[0],
          DB = [],
          QB = [];
        for (const [oB, jB, yB] of OB)(0, pN.b)(DB, QB, [oB - YB[0] + .5, jB - YB[1] + .5, yB - YB[2] + .5], VN, GB);
        return BB.createGameMesh({
          positions: DB,
          indices: QB
        }, {
          rgb: GB ? nN : SN,
          alpha: .4
        }, YB)
      }
      clearMeshes(BB) {
        for (const OB of this.meshes) BB.disposeGameMesh(OB);
        this.meshes = []
      }
    }
    const fN = 1 / .6,
      kN = 200,
      dN = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      KN = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      uN = 2 * Math.PI / 3;
    class mN {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dN;
        this.style = BB, this.particles = null, this.points = new Float32Array(800), this.budget = kN, this.lastMs = 0
      }
      static blade() {
        return new mN(KN)
      }
      kR(BB, OB) {
        const GB = Math.min(OB.arcStruck, OB.arcPoints.length);
        this.draw(BB, [OB.arcFrom, ...OB.arcPoints], OB.arcPoints.slice(0, GB))
      }
      onBlade(BB, OB) {
        const [GB, YB, DB] = OB.bladeCentre, [QB, oB] = OB.bladeFacing, jB = GB - 1.5 * QB, yB = DB - 1.5 * oB, JB = Math.atan2(oB, QB), MB = [];
        for (let PB = 0; PB <= 8; PB++) {
          const BB = JB - uN / 2 + uN * PB / 8;
          MB.push([jB + 2.5 * Math.cos(BB), YB, yB + 2.5 * Math.sin(BB)])
        }
        this.draw(BB, MB, OB.bladeStruck)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
      draw(BB, OB, GB) {
        if (!BB.particlesEnabled() || OB.length < 2) return;
        const YB = performance.now();
        this.budget = Math.min(kN, this.budget + (YB - this.lastMs) / 1e3 * kN), this.lastMs = YB;
        const DB = [];
        let QB = 0,
          oB = OB[0];
        for (const NB of OB.slice(1)) {
          const BB = Math.min(48, Math.round(Math.hypot(NB[0] - oB[0], NB[1] - oB[1], NB[2] - oB[2]) * this.style.perBlock));
          DB.push([oB, NB, BB]), QB += BB, oB = NB
        }
        const jB = GB.length;
        QB += 10 * jB;
        const yB = QB > this.budget ? this.budget / QB : 1;
        if (0 === QB || yB * QB < 1) return;
        const JB = OB[0],
          [MB, PB, zB] = JB,
          lB = this.points;
        let pB = 0;
        const qB = (BB, OB, GB, YB) => {
          const DB = 4 * pB;
          lB[DB] = BB - MB, lB[DB + 1] = OB - PB, lB[DB + 2] = GB - zB, lB[DB + 3] = YB, pB++
        };
        DB.forEach(((BB, OB) => {
          let [GB, YB, DB] = BB;
          const QB = Math.min(Math.floor(DB * yB), kN - pB),
            oB = Math.hypot(YB[0] - GB[0], YB[1] - GB[1], YB[2] - GB[2]),
            jB = 0 === OB && oB > 0 ? Math.min(.5, .1 * oB) / oB : 0;
          for (let yB = 0; yB < QB; yB++) {
            const BB = jB + (yB + .5) / QB * (1 - jB);
            qB(GB[0] + (YB[0] - GB[0]) * BB, GB[1] + (YB[1] - GB[1]) * BB, GB[2] + (YB[2] - GB[2]) * BB, .15)
          }
        }));
        const ZB = Math.floor(10 * yB);
        for (let NB = 0; NB < jB; NB++) {
          const [BB, OB, YB] = GB[NB];
          for (let GB = 0; GB < ZB && pB < kN; GB++) qB(BB, OB, YB, 2.5)
        }
        this.budget -= pB, this.particles ??= BB.createParticles(function(BB) {
          const [OB, GB] = BB.colours;
          return {
            texture: "square_particle",
            CP: 400,
            minLifeTime: BB.life[0] / fN,
            maxLifeTime: BB.life[1] / fN,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [OB[0], OB[1], OB[2], 1],
              maxColor: [GB[0], GB[1], GB[2], 1]
            }, {
              timeFraction: 1,
              minColor: [OB[0], OB[1], OB[2], 0],
              maxColor: [GB[0], GB[1], GB[2], 0]
            }],
            blendMode: mj.f.Add
          }
        }(this.style), {
          pos: JB
        }), this.particles.emitPoints(JB, lB, pB)
      }
    }
    const IN = new Set(["Sky Spring"]);

    function FN(BB, OB, GB) {
      const YB = BB.split("|")[0];
      return "Air" !== OB || GB || ! function(BB) {
        const OB = BB.split("|")[0];
        return void 0 !== oG[OB] || IN.has(OB)
      }(YB) ? null : BB
    }
    class iN {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(BB) {
        const OB = BB - this.lastTapAt >= 300;
        return this.lastTapAt = BB, OB
      }
    }
    class LN {
      constructor() {
        this.presses = new iN, this.predicted = null
      }
      tap(BB, OB) {
        const GB = this.presses.isNewPress(OB);
        return GB && (this.predicted = {
          station: BB,
          at: OB
        }), GB
      }
      consumeServerOpen(BB, OB) {
        const GB = this.predicted;
        return !(null === GB || GB.station !== BB || OB - GB.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class gN {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(BB, OB) {
        return BB && (this.thrustAt = OB), OB - this.thrustAt < 200
      }
    }
    const rN = [.1, .05, .1],
      XN = {
        texture: "effect_5",
        CP: Math.ceil(48),
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
        blendMode: mj.f.OneOne
      };
    class wN {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new gN, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      kR(BB, OB) {
        for (const [GB, YB] of OB.baf2JetFlames) BB.isLocalPlayer(GB) || (YB ? this.lit.add(GB) : this.lit.delete(GB))
      }
      onAfterRender(BB, OB) {
        const GB = performance.now(),
          YB = this.hold.lit(this.selfThrusting(BB, OB), GB);
        for (const [DB, QB] of this.flames)(DB === OB ? YB : this.lit.has(DB)) || this.setEmitting(QB, !1), DB === OB || BB.getPositionView(DB) ? !QB.emitting && GB - QB.offAt >= 1300 && (QB.particles.stop(), this.flames.delete(DB)) : (QB.particles.dispose(), this.flames.delete(DB), this.lit.delete(DB));
        YB && this.draw(BB, OB, OB);
        for (const DB of this.lit) this.draw(BB, OB, DB)
      }
      dispose() {
        for (const BB of this.flames.values()) BB.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(BB, OB) {
        var GB;
        const YB = BB.getLocalPlayerMovement();
        return !!YB && (null !== (DB = {
          option: null !== (GB = BB.getClientOption(OB, "jumpHoldThrust")) && void 0 !== GB ? GB : null,
          jumping: YB.jumpHeld,
          onGround: YB.onGround,
          alive: BB.isAlive(OB)
        }).option && DB.option.maxUpSpeed >= 0 && DB.jumping && !DB.onGround && DB.alive);
        var DB
      }
      draw(BB, OB, GB) {
        var YB, DB;
        const QB = this.pos;
        if (!BB.readDrawnPosition(GB, QB)) return;
        const oB = BB.readDrawnPosition(OB, this.camera) ? this.camera : QB;
        if (!((QB[0] - oB[0]) ** 2 + (QB[1] - oB[1]) ** 2 + (QB[2] - oB[2]) ** 2 < 1600) || !BB.particlesEnabled()) {
          const BB = this.flames.get(GB);
          return void(BB && this.setEmitting(BB, !1))
        }
        const jB = null !== (YB = this.flames.get(GB)) && void 0 !== YB ? YB : this.create(BB, GB, QB),
          yB = null !== (DB = BB.getDrawnHeading(GB)) && void 0 !== DB ? DB : 0,
          JB = this.at;
        JB[0] = QB[0] - .35 * Math.sin(yB), JB[1] = QB[1] + 1.05, JB[2] = QB[2] - .35 * Math.cos(yB), jB.particles.moveTo(JB), this.setEmitting(jB, !0)
      }
      setEmitting(BB, OB) {
        BB.emitting !== OB && (BB.emitting = OB, OB || (BB.offAt = performance.now()), BB.particles.setEmitRate(OB ? 60 : 0))
      }
      create(BB, OB, GB) {
        const YB = {
          particles: BB.createParticles(XN, {
            pos: GB,
            half: rN
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(OB, YB), YB
      }
    }

    function EN(BB) {
      return "Reactor Frame" === YY("reactor", BB)
    }

    function cN(BB) {
      return XG("reactor", BB) && !EN(BB) && (BB.startsWith("Reactor Glass") || BB.startsWith("Reactor Port"))
    }
    const hN = "baf2Goal";
    class aN {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [mD.o.subscribe("setDirectionArrow", (BB => {
          let {
            id: OB,
            position: GB
          } = BB;
          OB === hN && (this.goal = GB, this.checkedAt = -1 / 0)
        })), mD.o.subscribe("clearDirectionArrow", (BB => {
          let {
            id: OB
          } = BB;
          null !== OB && OB !== hN || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const BB of this.subs) mD.o.unsubscribe(BB)
      }
      sideOf(BB, OB, GB, YB) {
        const DB = this.goal;
        if (!DB) return 0;
        GB - this.checkedAt > 1e3 && (this.checkedAt = GB, this.open = function(BB, OB) {
          const [GB, YB, DB] = BB.map(Math.floor);
          if (!cN(OB(GB, YB, DB))) return null;
          for (const [QB, oB] of [
              [1, 0],
              [0, 1]
            ]) {
            const BB = OB(GB + QB, YB, DB + oB),
              jB = OB(GB - QB, YB, DB - oB);
            if (EN(jB) && cN(BB)) return [QB, 0, oB];
            if (EN(BB) && cN(jB)) return [0 - QB, 0, 0 - oB]
          }
          return null
        }(DB, ((OB, GB, YB) => BB.blockIdToBlockName(BB.getBlockId(OB, GB, YB)))));
        const QB = this.open;
        if (!QB) return 0;
        const oB = YB(DB);
        if (Math.abs(oB.x - OB.x) > .05 || Math.abs(oB.y - OB.y) > .05) return 0;
        const jB = YB([DB[0] + QB[0], DB[1], DB[2] + QB[2]]).x - oB.x;
        return Math.abs(jB) < .3 ? 0 : jB > 0 ? 1 : -1
      }
    }
    class eN {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new aN, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Vp = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.vN = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((BB => {
          for (const OB of BB) OB.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(OB.target, OB.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Vp || this.clear()
        }, window.addEventListener("resize", this.vN)
      }
      onAfterRender(BB, OB) {
        var GB;
        this.api = BB, this.project = null !== (GB = null === OB || void 0 === OB ? void 0 : OB.projectWorldPosToScreenPos) && void 0 !== GB ? GB : null, this.queued || this.Vp || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Vp = !0;
        for (const BB of this.moved.keys()) BB.style.transform = "";
        this.moved.clear();
        for (const BB of this.sideLabels.keys()) BB.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.vN)
      }
      clear() {
        for (const QB of this.moved.keys()) QB.isConnected || this.moved.delete(QB);
        for (const QB of this.sideLabels.keys()) QB.isConnected || this.sideLabels.delete(QB);
        if (0 === this.arrows.length) return;
        const BB = performance.now(),
          OB = BB - this.refreshedAt > 1e3;
        OB && (this.refreshedAt = BB, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const GB = this.trackerBox(),
          YB = this.barsBox(),
          DB = this.toastBox(OB);
        (GB || YB || DB) && OB && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let QB = 0; QB < this.arrows.length; QB++) {
          const OB = this.arrows[QB];
          this.labelOffsets.set(OB, this.runLabelAside(OB, BB));
          const oB = (GB ? this.shiftLeftOf(OB, GB) : 0) || this.shiftOnScreen(OB),
            jB = Math.min(YB ? this.liftAbove(OB, YB, oB) : 0, DB ? this.liftAbove(OB, DB, oB) : 0),
            yB = this.moved.get(OB);
          if (0 !== oB || 0 !== jB) {
            const BB = 0 === jB ? `translateX(${oB}px)` : `translate(${oB}px, ${jB}px)`;
            yB !== BB && (OB.style.transform = BB, this.moved.set(OB, BB))
          } else void 0 !== yB && (OB.style.transform = "", this.moved.delete(OB))
        }
      }
      trackerBox() {
        var BB, OB;
        const GB = null !== (BB = this.tracker) && void 0 !== BB && BB.isConnected ? this.tracker : null !== (OB = this.trackers[0]) && void 0 !== OB ? OB : null;
        if (GB !== this.tracker && this.watch(GB), this.boxStale && GB) {
          var YB, DB, QB;
          this.boxStale = !1;
          const BB = GB.closest(".NoRoom") ? null : GB.getBoundingClientRect(),
            OB = BB && BB.width > 0 ? null === (YB = this.hud) || void 0 === YB ? void 0 : YB.getBoundingClientRect() : void 0,
            oB = BB && OB ? Math.max(BB.top, OB.top) : null !== (DB = null === BB || void 0 === BB ? void 0 : BB.top) && void 0 !== DB ? DB : 0,
            jB = BB && OB ? Math.min(BB.bottom, OB.bottom) : null !== (QB = null === BB || void 0 === BB ? void 0 : BB.bottom) && void 0 !== QB ? QB : 0;
          this.box = BB && BB.width > 0 && jB > oB ? {
            left: BB.left,
            top: oB,
            right: BB.right,
            bottom: jB
          } : null
        }
        return GB ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var BB;
          this.barsStale = !1;
          const OB = null === (BB = this.statBars[0]) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
          this.bars = OB && OB.width > 0 && OB.height > 0 ? {
            left: OB.left,
            top: OB.top,
            right: OB.right,
            bottom: OB.bottom
          } : null
        }
        return this.bars
      }
      toastBox(BB) {
        var OB;
        const GB = null !== (OB = this.toasts[0]) && void 0 !== OB ? OB : null;
        if (GB !== this.toastEl || BB && GB) {
          this.toastEl = GB;
          const BB = null === GB || void 0 === GB ? void 0 : GB.getBoundingClientRect();
          this.toast = BB && BB.width > 0 && BB.height > 0 ? {
            left: BB.left,
            top: BB.top,
            right: BB.right,
            bottom: BB.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(BB, OB, GB) {
        var YB;
        const DB = this.anchorOf(BB);
        if (!DB) return 0;
        const QB = DB.x + GB + (null !== (YB = this.labelOffsets.get(BB)) && void 0 !== YB ? YB : 0),
          {
            halfWidth: oB,
            labelled: jB
          } = this.extentOf(BB),
          yB = DB.y + this.em * (jB ? 6.2 : 3);
        return yB < OB.top - 6 || QB + oB < OB.left - 6 || QB - oB > OB.right + 6 ? 0 : OB.top - 6 - yB
      }
      watch(BB) {
        var OB, GB;
        this.tracker && this.sizes.unobserve(this.tracker), null === (OB = this.hud) || void 0 === OB || OB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = BB, this.hud = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.closest(".Baf2QuestHud")) && void 0 !== GB ? GB : null, this.box = null, this.boxStale = !0, BB && this.sizes.observe(BB), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(BB, OB) {
        var GB;
        const YB = this.anchorOf(BB);
        if (!YB) return 0;
        const {
          y: DB
        } = YB, QB = YB.x + (null !== (GB = this.labelOffsets.get(BB)) && void 0 !== GB ? GB : 0), oB = this.em, {
          halfWidth: jB,
          labelled: yB
        } = this.extentOf(BB), JB = DB - oB, MB = QB + jB;
        return DB + oB * (yB ? 6.2 : 3) < OB.top || JB > OB.bottom || MB < OB.left - 6 || QB - jB > OB.right ? 0 : Math.max(OB.left - 6 - MB, 6 - (QB - jB))
      }
      shiftOnScreen(BB) {
        var OB;
        const GB = this.anchorOf(BB);
        if (!GB) return 0;
        const {
          halfWidth: YB
        } = this.extentOf(BB), DB = GB.x + (null !== (OB = this.labelOffsets.get(BB)) && void 0 !== OB ? OB : 0), QB = DB + YB - (this.innerWidth - 6);
        return QB > 0 ? -QB : Math.max(0, 6 - (DB - YB))
      }
      runLabelAside(BB, OB) {
        var GB;
        let YB = null;
        for (let oB = 0; oB < BB.children.length; oB++) BB.children[oB].classList.contains("DirectionArrowLabel") && (YB = BB.children[oB]);
        if (!YB) return 0;
        const DB = BB.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(BB) : null,
          QB = (DB && this.api ? this.side.sideOf(this.api, {
            x: DB.x / this.innerWidth * 100,
            y: DB.y / this.innerHeight * 100
          }, OB, this.project) : 0) * this.halfWidthOf(YB);
        return QB !== (null !== (GB = this.sideLabels.get(YB)) && void 0 !== GB ? GB : 0) && (YB.style.transform = 0 === QB ? "" : `translateX(-50%) translateX(${QB}px)`, 0 === QB ? this.sideLabels.delete(YB) : this.sideLabels.set(YB, QB)), QB
      }
      extentOf(BB) {
        let OB = this.em,
          GB = !1;
        for (let YB = 0; YB < BB.children.length; YB++) {
          const DB = BB.children[YB],
            QB = DB.classList.contains("DirectionArrowLabel");
          GB ||= QB, (QB || DB.classList.contains("DirectionArrowDistance")) && (OB = Math.max(OB, this.halfWidthOf(DB)))
        }
        return {
          halfWidth: OB,
          labelled: GB
        }
      }
      halfWidthOf(BB) {
        let OB = this.halfWidths.get(BB);
        return void 0 === OB && (OB = BB.offsetWidth / 2, this.halfWidths.set(BB, OB), this.sizes.observe(BB), this.labels.add(BB)), OB
      }
      forgetGoneLabels() {
        for (const BB of this.labels) BB.isConnected || (this.sizes.unobserve(BB), this.halfWidths.delete(BB), this.labels.delete(BB))
      }
      anchorOf(BB) {
        const OB = BB.style.translate,
          GB = this.anchors.get(BB);
        if (GB && GB.translate === OB && GB.innerWidth === this.innerWidth && GB.innerHeight === this.innerHeight) return GB;
        const YB = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(OB);
        if (!YB) return null;
        const DB = {
          translate: OB,
          x: parseFloat(YB[1]) / 100 * this.innerWidth,
          y: parseFloat(YB[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(BB, DB), DB
      }
    }
    const TN = "Baf2ArrowText";

    function bN(BB, OB) {
      const GB = BB.rows.find((BB => BB.current));
      return FB(BB.tutorial) && null !== GB && void 0 !== GB && GB.item && cD(GB) && KB(GB.item).includes(OB) ? GB.item : null
    }
    const CN = new class {
      constructor(BB) {
        this.select = BB, this.picks = new Map
      }
      open(BB, OB, GB) {
        const YB = bN(OB, BB);
        null !== YB && this.pl(BB, YB, GB)
      }
      follow(BB, OB) {
        if (jB())
          for (const [GB, {
              item: YB,
              had: DB
            }] of this.picks) {
            const QB = bN(BB, GB);
            QB !== YB && (null !== QB && OB(YB) > DB ? this.pl(GB, QB, OB) : this.picks.delete(GB))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      pl(BB, OB, GB) {
        this.picks.set(BB, {
          item: OB,
          had: GB(OB)
        }), this.select(BB, OB)
      }
    }(ID.p);

    function HN(BB) {
      return OB => {
        let GB = 0;
        for (const YB of BB.getInventoryItems())(null === YB || void 0 === YB ? void 0 : YB.name) === OB && (GB += null === YB.amount ? 1 : Math.max(YB.amount, 0));
        return GB
      }
    }

    function vN(BB, OB, GB, YB) {
      BB.getClientOption(OB, "canCraft") && "inventory" !== ND.c.get("openInGameMenuName") && (CN.open(GB, YB.get(), HN(BB)), mD.o.tM("toggleMenu", `inventory|${GB}`))
    }
    let sN = null,
      xN = !1;

    function tN(BB) {
      const OB = RQ();
      BB === sN && OB === xN || (sN = BB, xN = OB, (0, ID.t)(function(BB, OB) {
        const GB = new Map;
        for (let YB = BB + 1; YB <= DB.length; YB++) {
          const DB = wQ(YB, BB, OB);
          if (DB)
            for (const OB of NB(YB).unlocks) GB.set(OB, {
              ...DB,
              stepsAway: YB - BB
            })
        }
        return GB
      }(BB, OB)))
    }

    function BR() {
      return BB = () => {
        null !== sN && tN(sN)
      }, (0, ZQ.m)(NQ, BB);
      var BB
    }

    function OR() {
      return (0, ID.x)(XQ(Object.keys(dB), FQ)), () => {
        (0, ID.x)([])
      }
    }

    function GR(BB, OB, GB) {
      var YB, DB;
      const QB = BB.getTargetedBlock();
      if (!QB || ! function(BB, OB, GB) {
          if ("Chest" !== OB) return !1;
          const YB = BB.split("|")[0];
          if (!JG(YB) || 0 === iO[YB].outputSlots.length) return !1;
          const DB = RZ(BB);
          return GB[0] === DB[0] && GB[1] === DB[1] && GB[2] === DB[2]
        }(GB, null === (YB = BB.MYB(OB)) || void 0 === YB ? void 0 : YB.name, QB.normal)) return !1;
      const [oB, jB, yB] = QB.yZ, JB = BB.getBlockId(oB, jB, yB);
      return 0 === JB || !0 === (null === (DB = mB.h[JB]) || void 0 === DB ? void 0 : DB.canBePlacedOver)
    }
    var YR = GB(37436);
    const DR = new Set(qG.e);
    class QR {
      constructor(BB) {
        this.toasts = BB, this.lastAt = -1 / 0
      }
      onAltAction(BB, OB, GB) {
        const YB = BB.getTargetedBlock();
        if (!YB || function(BB) {
            const OB = BB.split("|")[0];
            return JG(OB) || null !== nY(OB) || fB(OB) || qG.e.includes(OB)
          }(GB) && !DR.has(GB.split("|")[0])) return;
        const DB = BB.MYB(OB);
        if (!DB || !DR.has(DB.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const QB = DB.typeObj.id,
          [oB, jB, yB] = YB.yZ,
          JB = BB.getBlockId(oB, jB, yB),
          MB = mB.h[JB];
        (0 === JB || null !== MB && void 0 !== MB && MB.fl || null !== MB && void 0 !== MB && MB.canBePlacedOver) && BB.isSolidToPlayerBlockId(QB) && BB.canModifyBlockAt(oB, jB, yB) && BB.mGB(oB, jB, yB, QB) && !BB.mGB(oB, jB, yB, QB, OB) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, iB.Ae)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, iB.J.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class oR {
      constructor(BB) {
        this.show = BB, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(BB, OB, GB) {
        var YB;
        if (!OB) return this.started = null, void this.gatedThisHold.clear();
        if (!BB) return void(this.started = null);
        const DB = `${BB.x},${BB.y},${BB.z},${BB.sJ}`;
        if (DB === this.started) return;
        this.started = DB;
        const QB = LY(BB.y) ? BN(BB.block, BB.sJ, BB.level) : null;
        if (null === QB || this.gatedThisHold.has(DB)) return;
        this.gatedThisHold.add(DB);
        const oB = BB.block.split("|")[0];
        GB - (null !== (YB = this.hintedAt.get(oB)) && void 0 !== YB ? YB : -1 / 0) < 5e3 || (this.hintedAt.set(oB, GB), this.show({
          baf2ToastText: ON(QB, BB.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var jR = GB(31);

    function yR(BB, OB) {
      const GB = [...BB.baf2CoreBankPaused];
      for (const [DB] of BB.baf2CoreBanked) GB.push(DB);
      for (const oB of DB) {
        for (const {
            item: BB
          }
          of oB.cost) GB.push(BB);
        for (const BB of oB.newDeposits) GB.push(BB.block);
        for (const BB of oB.unlocks) GB.push(BB, uB(BB));
        oB.reward && GB.push(oB.reward);
        for (const {
            item: BB
          }
          of null !== (YB = null === (QB = oB.charge) || void 0 === QB ? void 0 : QB.items) && void 0 !== YB ? YB : []) {
          var YB, QB;
          GB.push(BB)
        }
      }
      return {
        message: BB,
        itemNames: OB([...new Set(GB)])
      }
    }
    const JR = "baf2MultiblockGuide";
    const MR = new Map;
    const PR = function(BB, OB, GB, DB) {
      let {
        localPlayerId: QB
      } = DB;
      const oB = new zj,
        jB = new Bl,
        JB = new jl,
        MB = new Ql(JB),
        PB = (BB, OB) => {
          OB ? MB.observe(BB) : MB.unobserve(BB)
        },
        zB = new Dl,
        lB = new Jl(PB),
        pB = BB => lB.covers(BB),
        qB = new Kl;
      let ZB;
      const NB = new Lo((BB => {
          ZB.sendCommand(BB)
        })),
        RB = () => {
          NB.send("baf2questbook")
        },
        WB = BB => function(BB, OB, GB) {
          const YB = {};
          for (const DB of GB) {
            let GB = MR.get(DB);
            void 0 === GB && (GB = BB.getItemStat(OB, DB, "displayName"), MR.set(DB, GB)), YB[DB] = GB
          }
          return YB
        }(ZB, QB, BB),
        AB = new gD(RB),
        VB = new El((() => ND.c.get("loadingOverlayVisible"))),
        SB = new VM(NB, AB, VB),
        nB = new Tl,
        UB = new QR(VB),
        kB = new oR((BB => {
          VB.show(BB, BB.baf2ToastMs)
        })),
        dB = new Op(PB),
        KB = new dZ(dB),
        uB = new Wo,
        IB = new sZ,
        FB = new xo,
        gB = new yp({
          read: () => !1 !== jR.g.getItem(JR),
          write: BB => {
            jR.g.setItem(JR, BB)
          }
        }),
        rB = new gp(gB),
        XB = new wp(gB),
        wB = new jq(gB, (BB => function(BB, OB) {
          const GB = Hj(OB.w, OB.h, OB.d),
            YB = new Uint8Array(GB);
          for (let DB = 0; DB < GB; DB++) {
            const GB = mp(BB, xG(OB, GY(OB, DB)));
            YB[DB] = null === GB ? 0 : ej(GB)
          }
          return YB
        }(ZB, BB)), xp(NB)),
        EB = new yq(gB, xp(NB)),
        cB = new Qq,
        eB = (BB, OB) => {
          let [GB, YB, DB] = BB;
          cB.answered(OB) || VB.show({
            baf2ToastText: [(0, iB.Ae)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: GB,
                h: YB,
                d: DB
              }
            }, iB.J.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      wB.onSizeNotTaken(eB), EB.onSizeNotTaken(eB);
      const TB = new zq,
        bB = new Tq(gB),
        HB = new Cq,
        vB = new QZ(HB),
        sB = new ZZ,
        tB = new KZ,
        BO = new wZ(tB),
        OO = new vZ(tB),
        GO = tB.lookSource(),
        YO = new PN({
          handles: BB => GO.handles(BB) || BB === LB,
          line: (BB, OB) => BB === LB ? function(BB, OB, GB) {
            var YB;
            const DB = aB(null === (YB = OB.at(GB)) || void 0 === YB ? void 0 : YB.item);
            return null === DB ? {
              key: `${yN}lookFarmEmpty`
            } : {
              key: BB.blockIdToBlockName(BB.getBlockId(GB[0], GB[1], GB[2])).endsWith("|Running") ? `${yN}lookFarmRunning` : `${yN}lookFarmWaiting`,
              keys: {
                mob: hB(DB)
              }
            }
          }(ZB, dB, OB) : GO.line(BB, OB),
          version: () => GO.version() + dB.version()
        }, (BB => cp(gB.all(), BB, (BB => mp(ZB, BB)))), (() => AB.get().tier)),
        DO = new uq,
        QO = new UN,
        oO = new mN,
        jO = mN.blade(),
        yO = new wN,
        JO = new Hl,
        MO = new eN,
        zO = new LN,
        lO = new iN;
      let pO = -1 / 0,
        qO = 0,
        ZO = -1 / 0,
        NO = -1 / 0;
      const RO = () => {
          NB.send("baf2islandsclose"), NO = Date.now()
        },
        WO = [];

      function AO(BB) {
        var OB, GB, YB, DB, QB, oB, yB;
        "core" === (null === (OB = jB.get()) || void 0 === OB ? void 0 : OB.kind) && "core" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && NB.send("baf2coreclose"), "power" === (null === (GB = jB.get()) || void 0 === GB ? void 0 : GB.kind) && "power" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && NB.send("baf2powerclose"), "water" === (null === (YB = jB.get()) || void 0 === YB ? void 0 : YB.kind) && "water" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && NB.send(xB.x), "terminal" === (null === (DB = jB.get()) || void 0 === DB ? void 0 : DB.kind) && "terminal" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && NB.send("baf2terminalclose"), "islands" === (null === (QB = jB.get()) || void 0 === QB ? void 0 : QB.kind) && "islands" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && RO();
        const JB = tB.getStatus();
        "collider" === (null === (oB = jB.get()) || void 0 === oB ? void 0 : oB.kind) && "collider" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && JB && NB.send(Iy(JB, "close"));
        const MB = BB => "reactor" === BB || "battery" === BB;
        if (MB(null === (yB = jB.get()) || void 0 === yB ? void 0 : yB.kind) && !MB(null === BB || void 0 === BB ? void 0 : BB.kind)) {
          var PB, zB, lB;
          const BB = "reactor" === (null === (PB = jB.get()) || void 0 === PB ? void 0 : PB.kind) ? null === (zB = wB.get()) || void 0 === zB ? void 0 : zB.status.baf2RxAt : null === (lB = EB.get()) || void 0 === lB ? void 0 : lB.status.baf2BatAt;
          BB && NB.send(PO(BB, "close"))
        }
        "quests" === (null === BB || void 0 === BB ? void 0 : BB.kind) && RB(), jB.set(BB), null === BB && nB.release()
      }

      function VO() {
        (0, ZD.g)(), AO(null)
      }
      let SO = new Set,
        nO = !1;
      const UO = {
        onCreate: BB => {
          ZB = BB, ZB.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const OB of dO) {
            const BB = iO[OB].inputSlots ? dj(oB) : Uj(OB, oB, uB, NB);
            WO.push((0, pD.h)(OB, BB))
          }
          WO.push((0, ZD.s)((0, YB.createElement)(YB.Fragment, null, (0, YB.createElement)(zl, {
            controller: lB
          }), (0, YB.createElement)(Dp, {
            store: dB
          }), (0, YB.createElement)(lN, {
            store: YO
          }), (0, YB.createElement)(Xl, {
            store: AB
          }), (0, YB.createElement)(al, {
            store: VB
          }), (0, YB.createElement)(bl, {
            store: nB
          }), (0, YB.createElement)(sl, {
            store: JO
          }), (0, YB.createElement)(Pq, {
            store: TB
          }), (0, YB.createElement)(Hq, {
            store: HB
          })), {
            content: (0, YB.createElement)(Ol, {
              commands: NB,
              store: jB,
              power: uB,
              water: FB,
              reactor: wB,
              battery: EB,
              collider: tB,
              terminal: IB,
              quests: AB,
              tutorial: SB,
              close: ZD.i,
              leave: () => {
                nB.dropHeld(), (0, ZD.g)()
              },
              askIslands: () => {
                NO = -1 / 0, pO = Date.now(), qO = NB.send(CB)
              },
              openSocial: () => {
                (0, ZD.g)(), ND.c.set({
                  openEverythingMenuName: PG.p.SOCIAL
                })
              },
              showCore: BB => {
                AO({
                  kind: "core",
                  core: BB
                }), NB.send("baf2corereopen")
              }
            }),
            onClose: () => {
              AO(null)
            }
          })), WO.push((0, qD.z)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              AO({
                kind: "quests"
              }), (0, ZD.o)()
            }
          })), WO.push(function(BB, OB) {
            let GB = null,
              YB = () => {};
            const DB = OB => {
              var DB;
              let {
                tutorial: QB,
                tutorialKnown: oB
              } = OB;
              (null === (DB = GB) || void 0 === DB ? void 0 : DB.tutorial) === QB && GB.tutorialKnown === oB || (GB = {
                tutorial: QB,
                tutorialKnown: oB
              }, YB = (0, qD.z)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: WM[QB],
                icon: {
                  kind: "icon",
                  name: RM[QB]
                },
                iconOnly: !0,
                disabled: !oB,
                className: "Baf2TutorialButton",
                onClick: () => {
                  BB.next()
                }
              }))
            };
            DB(OB.get());
            const QB = mD.o.subscribe(FD, DB);
            return () => {
              mD.o.unsubscribe(QB), YB()
            }
          }(SB, AB)), nO = !1, WO.push(BR()), WO.push(OR()), WO.push(function() {
            const BB = mD.o.subscribe(FD, vD),
              OB = () => {
                if (HD) {
                  const BB = HD;
                  HD = null, (0, ID.v)(BB)
                }
              },
              GB = mD.o.subscribe("toggleMenu", (BB => {
                "inventory" === (null === BB || void 0 === BB ? void 0 : BB.split("|")[0]) && OB()
              })),
              YB = mD.o.subscribe("appManagerUpdated|openInGameMenuName", (BB => {
                "inventory" === BB && OB()
              }));
            return () => {
              mD.o.unsubscribe(BB), mD.o.unsubscribe(GB), mD.o.unsubscribe(YB)
            }
          }()), WO.push(function(BB) {
            const OB = HN(BB),
              GB = mD.o.subscribe(FD, (BB => {
                CN.follow(BB, OB)
              }));
            return () => {
              mD.o.unsubscribe(GB), CN.clear()
            }
          }(ZB)), WO.push(function() {
            const BB = document.documentElement,
              OB = (0, ml.d)(".InvenBodyRight", [], (() => {
                const OB = document.querySelector(".InvenBodyRight");
                OB && BB.style.setProperty("--baf2-backpack-width", `${OB.offsetWidth}px`)
              }));
            return () => {
              OB(), BB.style.removeProperty("--baf2-backpack-width")
            }
          }()), WO.push(function() {
            const BB = document.documentElement;
            return BB.classList.add(TN), () => {
              BB.classList.remove(TN)
            }
          }()), WO.push((() => {
            MB.dispose(), JB.dispose()
          })), qB.start(ZB), WO.push((() => {
            qB.dispose(), yO.dispose(), KB.dispose()
          }))
        },
        onClose: () => {
          (0, ID.v)([]), HD = null, CD = new Set, sN = null, (0, ID.t)(new Map), MR.clear();
          for (const BB of WO) BB();
          AB.dispose(), YO.dispose(), VB.dispose(), nB.dispose(), DO.dispose(), QO.dispose(ZB), rB.dispose(ZB), XB.dispose(ZB), bB.dispose(ZB), vB.dispose(ZB), HB.dispose(), sB.dispose(), gB.dispose(), wB.dispose(), EB.dispose(), TB.dispose(), oO.dispose(), jO.dispose(), JO.dispose(), BO.dispose(ZB), OO.dispose(ZB), tB.dispose(), MO.dispose(), NB.clear()
        },
        onAfterRender: (BB, OB) => {
          var GB, YB, DB;
          try {
            qB.onAfterRender(OB)
          } catch (JB) {
            console.error("Error drawing BAF2 belt items", JB)
          }
          try {
            yO.onAfterRender(ZB, QB)
          } catch (JB) {
            console.error("Error drawing BAF2 jet flames", JB)
          }
          nO || (nO = !0, NB.send("baf2clientready"));
          const oB = ZB.getPositionView(QB);
          lB.onAfterRender(OB, oB, zB), dB.onAfterRender(OB, oB, zB, pB), MB.run(zB), DO.onAfterRender(ZB, oB), QO.onAfterRender(ZB, oB), KB.onAfterRender(ZB, oB), rB.onAfterRender(ZB, oB), XB.onAfterRender(ZB, QB, oB), bB.onAfterRender(ZB, QB, oB), vB.onAfterRender(ZB, QB), sB.onAfterRender(ZB, oB), AB.onPlayerY(oB[1]), BO.onAfterRender(ZB), OO.onAfterRender(ZB, QB, oB);
          const yB = ZB.getTargetedBlock();
          YO.onAfterRender(ZB, QB, null !== (GB = null === yB || void 0 === yB ? void 0 : yB.r_) && void 0 !== GB ? GB : 0, null !== (YB = null === yB || void 0 === yB ? void 0 : yB.position) && void 0 !== YB ? YB : null), MO.onAfterRender(ZB, OB), kB.onMining(function(BB, OB) {
            var GB, YB;
            const DB = BB.getMiningBlock();
            if (!DB) return null;
            const QB = (0, mB.d)(BB.getBlockId(DB[0], DB[1], DB[2])),
              oB = null !== (GB = null === (YB = BB.MYB(OB)) || void 0 === YB ? void 0 : YB.name) && void 0 !== GB ? GB : null,
              jB = BB.getItemStat(OB, QB.split("|")[0], "harvestLevel");
            return {
              block: QB,
              x: DB[0],
              y: DB[1],
              z: DB[2],
              sJ: oB,
              level: jB
            }
          }(ZB, QB), ZB.isMining(), performance.now()), "dropMap" === (null === (DB = jB.get()) || void 0 === DB ? void 0 : DB.kind) && LY(oB[1]) && VO()
        },
        onPlayerChangeBlock: (BB, OB, GB, YB, DB, oB) => {
          BB === QB && function(BB, OB, GB, YB, DB, QB, oB) {
            const jB = FN(QB, oB, BB.isPlayerCrouching(OB));
            if (null === jB) return;
            if (BB.qm(GB, YB, DB, jB), !BB.getClientOption(OB, "canPickUpItems")) return;
            const yB = oG[jB.split("|")[0]];
            var JB, MB, PB;
            void 0 !== yB && (JB = BB.getInventoryItems(), MB = yB, PB = Jp.f.maxItemStackSize, BB.getInventoryFreeSlotCount(OB) > 0 || JB.some((BB => null !== BB && BB.name === MB && null !== BB.amount && BB.amount < PB))) && BB.playSound(OB, (0, YR.f)("pickUp"), .5, 1)
          }(ZB, BB, OB, GB, YB, DB, oB)
        },
        onPlayerAltAction: (BB, OB, GB, YB, DB) => {
          var oB, jB;
          if (!ZB.getClientOption(QB, "canPickUpItems")) return;
          const yB = null !== (oB = null === (jB = ZB.MYB(QB)) || void 0 === jB ? void 0 : jB.name) && void 0 !== oB ? oB : null,
            JB = function(BB, OB) {
              const GB = BB.split("|")[0];
              return fB(GB) && OB !== QD && "Sky Pack" !== OB ? GB : null
            }(DB, yB);
          if (null !== JB) return void(zO.tap(JB, performance.now()) && vN(ZB, QB, JB, AB));
          if (!wY(yB)) return;
          const MB = lO.isNewPress(performance.now()),
            PB = function(BB, OB, GB) {
              return !wY(OB) || GB ? null : HY(BB)
            }(DB, yB, ZB.isPlayerCrouching(QB));
          null !== PB && MB && ZB.qm(OB, GB, YB, PB)
        },
        onPlayerAttemptAltAction: (BB, OB, GB, YB, DB) => {
          if (function(BB, OB, GB, YB, DB) {
              "Workbench" === YB.split("|")[0] && BB.getClientOption(GB, "canCraft") && (CN.open("Workbench", DB.get(), HN(BB)), OB.send("baf2station Workbench"))
            }(ZB, NB, QB, DB, AB), GR(ZB, QB, DB)) return "preventAction";
          UB.onAltAction(ZB, QB, DB)
        },
        onReceivedMessageFromServer: (BB, OB) => {
          if ("baf2MachineStatus" === BB) {
            var GB, YB, DB, JB, MB, PB, zB, pB, RB, SB, UB, fB, kB, KB, mB, iB;
            const BB = OB,
              QB = BB.baf2MachineTaught;
            oB.set(BB.baf2MachinePos, {
              status: BB.baf2MachineStatus,
              power: null !== (GB = BB.baf2MachinePower) && void 0 !== GB ? GB : null,
              opLeftMs: null !== (YB = BB.baf2MachineOpLeftMs) && void 0 !== YB ? YB : null,
              dug: BB.baf2MachineYield ? {
                item: BB.baf2MachineYield,
                name: WB([BB.baf2MachineYield])[BB.baf2MachineYield]
              } : null,
              powerCap: null !== (DB = BB.baf2MachinePowerCap) && void 0 !== DB ? DB : null,
              powerRates: null !== (JB = BB.baf2MachinePowerRates) && void 0 !== JB ? JB : null,
              coupled: !0 === BB.baf2MachineCoupled,
              couplerLevel: null !== (MB = BB.baf2MachineCoupler) && void 0 !== MB ? MB : 1,
              taught: QB,
              taughtName: QB ? WB([QB])[QB] : null,
              tier: null !== (PB = BB.baf2MachineTier) && void 0 !== PB ? PB : null,
              input: null !== (zB = BB.baf2MachineInput) && void 0 !== zB ? zB : null,
              inertCoupler: null !== (pB = BB.baf2MachineInertCoupler) && void 0 !== pB ? pB : null,
              inputShort: null !== (RB = BB.baf2MachineInputShort) && void 0 !== RB ? RB : null,
              field: null !== (SB = BB.baf2MachineField) && void 0 !== SB ? SB : null,
              noSeeds: !0 === BB.baf2MachineNoSeeds,
              fuelFed: !0 === BB.baf2MachineFuelFed,
              fuelFeeds: !0 === BB.baf2MachineFuelFeeds,
              coreFull: !0 === BB.baf2MachineCoreFull,
              waterUnpowered: !0 === BB.baf2MachineWaterUnpowered,
              powerShort: !0 === BB.baf2MachinePowerShort,
              powerWait: !0 === BB.baf2MachinePowerWait,
              reactorPowered: !0 === BB.baf2MachineReactorPowered,
              fuelLeftMs: null !== (UB = BB.baf2MachineFuelLeftMs) && void 0 !== UB ? UB : null,
              burning: null !== (fB = BB.baf2MachineBurning) && void 0 !== fB ? fB : null,
              fuelKeep: null !== (kB = BB.baf2MachineFuelKeep) && void 0 !== kB ? kB : null,
              water: null !== (KB = BB.baf2MachineWater) && void 0 !== KB ? KB : null,
              farm: null !== (mB = BB.baf2MachineFarm) && void 0 !== mB ? mB : null,
              cryo: null !== (iB = BB.baf2MachineCryo) && void 0 !== iB ? iB : null
            })
          } else if ("baf2StationOpen" === BB) {
            const BB = OB.baf2Station;
            zO.consumeServerOpen(BB, performance.now()) || vN(ZB, QB, BB, AB)
          } else if ("baf2Power" === BB) {
            const BB = OB;
            uB.set(BB), BB.baf2PowerOpen && (AO({
              kind: "power"
            }), (0, ZD.o)())
          } else if (BB === xB.C) {
            const BB = OB;
            FB.set(BB), BB.baf2WaterOpen && (AO({
              kind: "water"
            }), (0, ZD.o)())
          } else if ("baf2RxPlans" === BB) {
            var LB, rB, XB;
            const BB = OB;
            gB.kR(BB);
            const GB = new Set(BB.baf2RxPlanList.map((BB => {
              let [OB, GB, YB] = BB;
              return `${OB},${GB},${YB}`
            })));
            TB.retain(GB);
            const YB = null === (LB = jB.get()) || void 0 === LB ? void 0 : LB.kind,
              DB = "reactor" === YB ? null === (rB = wB.get()) || void 0 === rB ? void 0 : rB.status.baf2RxAt : "battery" === YB ? null === (XB = EB.get()) || void 0 === XB ? void 0 : XB.status.baf2BatAt : void 0;
            DB && SO.has(DB.join(",")) && !GB.has(DB.join(",")) && VO(), SO = GB
          } else if ("baf2RxStatus" === BB) {
            const BB = OB;
            wB.set(BB), BB.baf2RxOpen && (AO({
              kind: "reactor"
            }), (0, ZD.o)())
          } else if ("baf2BatStatus" === BB) {
            const BB = OB;
            EB.set(BB), BB.baf2BatOpen && (AO({
              kind: "battery"
            }), (0, ZD.o)())
          } else if ("baf2RxAlarm" === BB) TB.kR(OB);
          else if ("baf2Bomb" === BB) HB.kR(OB, ZB.getPositionView(QB));
          else if ("baf2Fallout" === BB) sB.kR(OB);
          else if ("baf2ColBeams" === BB) tB.onBeams(OB);
          else if ("baf2ColStatus" === BB) {
            const BB = OB;
            var hB, aB;
            if (tB.onStatus(BB), BB.baf2ColOpen) tB.onOpen(null !== (hB = null === (aB = ZB.MYB(QB)) || void 0 === aB ? void 0 : aB.name) && void 0 !== hB ? hB : null), AO({
              kind: "collider"
            }), (0, ZD.o)()
          } else if ("baf2Terminal" === BB) {
            const BB = OB;
            var eB;
            if (IB.apply(BB)) BB.baf2TermReset && (AO({
              kind: "terminal"
            }), (0, ZD.o)());
            else "terminal" === (null === (eB = jB.get()) || void 0 === eB ? void 0 : eB.kind) && (jB.set(null), (0, ZD.g)())
          } else if ("baf2Core" === BB) {
            var bB;
            const BB = OB;
            if (yB(!0 === BB.baf2CoreNuclear), function(BB, OB) {
                return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) && OB.baf2CoreTier > BB.core.message.baf2CoreTier
              }(jB.get(), BB)) return void(0, ZD.g)();
            if (BB.baf2CoreRefresh && "core" !== (null === (bB = jB.get()) || void 0 === bB ? void 0 : bB.kind)) return;
            AO({
              kind: "core",
              core: yR(BB, WB)
            }), BB.baf2CoreRefresh || (0, ZD.o)()
          } else if ("baf2WrenchUndo" === BB) {
            const {
              baf2WrenchPos: BB,
              baf2WrenchBlock: GB
            } = OB;
            ZB.qm(BB[0], BB[1], BB[2], GB)
          } else if ("baf2Toast" === BB) {
            const BB = OB;
            cB.heard(performance.now(), BB.baf2ToastMs), VB.show(BB)
          } else if ("baf2Area" === BB) nB.arrive(OB, null !== jB.get());
          else if ("baf2Quest" === BB) {
            const BB = OB;
            yB(!0 === BB.baf2QuestNuclear), AB.set(BB, function(BB, OB) {
              var GB, YB, DB, QB, oB;
              const jB = [];
              for (const [, , MB, , , , , , PB, zB] of BB.baf2QuestSteps) null !== MB && jB.push(MB), jB.push(...null !== PB && void 0 !== PB ? PB : [], ...null !== zB && void 0 !== zB ? zB : []);
              BB.baf2QuestReward && jB.push(BB.baf2QuestReward);
              const yB = null === (GB = BB.baf2QuestSide) || void 0 === GB ? void 0 : GB[2][2];
              yB && jB.push(yB), jB.push(...null !== (YB = null === (DB = BB.baf2QuestSide) || void 0 === DB ? void 0 : DB[2][8]) && void 0 !== YB ? YB : [], ...null !== (QB = null === (oB = BB.baf2QuestSide) || void 0 === oB ? void 0 : oB[2][9]) && void 0 !== QB ? QB : []);
              for (const [MB] of null !== (JB = BB.baf2QuestAlso) && void 0 !== JB ? JB : []) {
                var JB;
                jB.push(MB)
              }
              return OB(jB)
            }(BB, WB)), tN(BB.baf2QuestTier)
          } else if ("baf2Route" === BB) ! function(BB, OB) {
            let {
              baf2RouteCells: GB,
              baf2RouteInto: YB
            } = OB;
            0 !== GB.length && YB ? BB.setRouteChevrons({
              cells: GB.map(((BB, OB) => {
                const [DB, , QB] = function(BB, OB, GB) {
                  const YB = GB + 1 < BB.length ? BB[GB + 1] : OB;
                  return [YB[0] - BB[GB][0], 0, YB[2] - BB[GB][2]]
                }(GB, YB, OB);
                return {
                  pos: BB,
                  way: [DB, QB]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : BB.setRouteChevrons(null)
          }(ZB, OB);
          else if ("baf2QuestBook" === BB) AB.setBook(OB);
          else if ("baf2Stalls" === BB) lB.set(OB.baf2StallCells);
          else if (BB === qG.n) qB.onMoves(OB);
          else if (BB === qG.i) qB.onLines(OB);
          else if ("baf2Labels" === BB) dB.kR(OB);
          else if ("baf2DropMap" === BB) AO({
            kind: "dropMap",
            dropMap: OB
          }), (0, ZD.o)();
          else if ("baf2Islands" === BB) {
            var vB, BO;
            const BB = OB;
            if (NB.syncIslandEdits(BB.baf2IslandsAnswered), !BB.baf2IslandsOpen && "islands" !== (null === (vB = jB.get()) || void 0 === vB ? void 0 : vB.kind)) return;
            if (BB.baf2IslandsOpen) {
              var OO, GO;
              const OB = ND.c.get("openEverythingMenuName"),
                GB = NB.sent() >= qO,
                YB = "other" !== (lO = {
                  askedAtMs: pO,
                  askSent: GB,
                  reaskedAtMs: ZO,
                  nowMs: Date.now(),
                  panel: null !== (OO = null === (GO = jB.get()) || void 0 === GO ? void 0 : GO.kind) && void 0 !== OO ? OO : null,
                  inGameMenu: ND.c.get("openInGameMenuName"),
                  everythingMenu: null === OB ? null : OB === PG.p.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== BB.baf2IslandsFocusInvite
                }).everythingMenu && (!!lO.focusInvite || "islands" === lO.panel && "clientGame" === lO.inGameMenu || !(lO.nowMs - lO.reaskedAtMs < dJ) && (lO.askSent && lO.nowMs - lO.askedAtMs < dJ ? "core" === lO.panel && "clientGame" === lO.inGameMenu && null === lO.everythingMenu : "shop" === lO.everythingMenu || null === lO.inGameMenu));
              if (GB && (pO = -1 / 0), ZO = -1 / 0, !YB) return void RO()
            }
            const GB = (DO = BB.baf2IslandsOpen, QO = "islands" === (null === (BO = jB.get()) || void 0 === BO ? void 0 : BO.kind), MO = NO, PO = Date.now(), DO && !QO && PO - MO < dJ);
            AO({
              kind: "islands",
              islands: BB,
              arrivedAtMs: Date.now(),
              backToCore: KJ(jB.get())
            }), GB && (NO = -1 / 0, ZO = Date.now(), NB.send(CB)), BB.baf2IslandsOpen && ("clientGame" !== ND.c.get("openInGameMenuName") && (0, RD.f)(), (0, ZD.o)())
          } else if ("baf2CoopTransfer" === BB) {
            var YO;
            const BB = OB;
            BB.baf2TransferOn ? (AO({
              kind: "transfer",
              transfer: BB,
              arrivedAtMs: Date.now()
            }), (0, ZD.o)()) : "transfer" === (null === (YO = jB.get()) || void 0 === YO ? void 0 : YO.kind) && (0, ZD.g)()
          } else "baf2IslandLeft" === BB ? (nB.dropHeld(), null !== jB.get() && VO(), "inventory" === ND.c.get("openInGameMenuName") && (0, RD.f)()) : "baf2Arc" === BB ? oO.kR(ZB, OB) : "baf2Blade" === BB ? jO.onBlade(ZB, OB) : "baf2JetFlame" === BB ? yO.kR(ZB, OB) : "baf2GearPower" === BB && JO.kR(OB);
          var DO, QO, MO, PO, lO
        }
      };
      return UO
    }
  },
  39151: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      g: () => jB
    });
    var YB = GB(353),
      DB = GB(34813),
      QB = GB(3708);

    function oB(BB) {
      const OB = (0, QB.c)(BB);
      return (0, YB.bc)(BB, void 0 === OB ? void 0 : (0, DB.displayNameOf)(OB))
    }

    function jB(BB, OB) {
      return BB(oB(OB))
    }
  },
  39173: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      const YB = new Set,
        DB = new ResizeObserver(GB),
        QB = () => {
          const OB = new Set(document.querySelectorAll(BB));
          let QB = !1;
          for (const BB of YB) OB.has(BB) || (DB.unobserve(BB), YB.delete(BB), QB = !0);
          for (const BB of OB) YB.has(BB) || (DB.observe(BB), oB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), YB.add(BB));
          QB && GB()
        },
        oB = new MutationObserver((OB => {
          OB.some((BB => "attributes" === BB.type)) && GB(), OB.some((OB => function(BB, OB, GB) {
            if ("childList" !== BB.type) return !1;
            for (const YB of BB.addedNodes)
              if (YB instanceof Element && (YB.matches(OB) || YB.querySelector(OB))) return !0;
            for (const YB of BB.removedNodes)
              if (YB instanceof Element)
                for (const BB of GB)
                  if (YB.contains(BB)) return !0;
            return !1
          }(OB, BB, YB))) && QB()
        }));
      oB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const jB of OB) DB.observe(jB);
      return window.addEventListener("resize", GB), QB(), GB(), () => {
        DB.disconnect(), oB.disconnect(), window.removeEventListener("resize", GB)
      }
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  39157: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB
    });
    var YB = GB(39154);
    const DB = 5,
      QB = [0, 0, 0],
      oB = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function jB(BB, OB, GB, jB, yB, JB) {
      let [MB, PB, zB] = jB;
      const lB = (MB + .5 - GB[0]) ** 2 + (PB - GB[1]) ** 2 + (zB + .5 - GB[2]) ** 2;
      let pB = null;
      lB <= JB ** 2 && (QB[0] = MB + .5, QB[1] = PB + yB, QB[2] = zB + .5, pB = OB.projectWorldPosToViewport(QB));
      const qB = null !== pB && pB.x > -DB && pB.x < 100 + DB && pB.y > -DB && pB.y < 100 + DB;
      return (0, YB.f)(BB, !qB), qB ? (oB.x = pB.x, oB.y = pB.y, oB.distSq = lB, oB) : null
    }
  },
  39154: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => QB
    });
    const YB = new WeakMap;

    function DB(BB) {
      let OB = YB.get(BB);
      return OB || (OB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, YB.set(BB, OB)), OB
    }

    function QB(BB, OB) {
      const GB = DB(BB);
      GB.hidden !== OB && (GB.hidden = OB, BB.hidden = OB)
    }

    function oB(BB, OB, GB) {
      const YB = DB(BB);
      YB.x === OB && YB.y === GB || (YB.x = OB, YB.y = GB, BB.style.translate = `${OB}vw ${GB}vh`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);