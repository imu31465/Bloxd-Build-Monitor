export const id = 224;
export const ids = [224];
export const modules = {
  37450: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(37458);
    const yB = [0, 0, 0];
    class pB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB;
        this.pool = BB, this.origin = TB, this.count = 0, this.free = []
      }
      take() {
        var BB;
        const TB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.count++;
        return TB >= this.pool.Kk && this.pool.grow(Math.max(2 * this.pool.Kk, TB + 1)), this.hide(TB), TB
      }
      release(BB) {
        this.hide(BB), this.free.push(BB)
      }
      write(BB, TB, dB, yB) {
        const {
          records: pB
        } = this.pool, {
          origin: lB
        } = this, JB = BB * VB.e;
        pB[JB] = TB - lB[0], pB[JB + 1] = dB - lB[1], pB[JB + 2] = yB - lB[2], pB[JB + VB.h] = 0, this.pool.markDirty(BB)
      }
      hide(BB) {
        this.pool.records[BB * VB.e + VB.h] = 1, this.pool.markDirty(BB)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class lB {
      constructor(BB, TB, dB) {
        this.api = BB, this.model = TB, this.initialCapacity = dB, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(BB) {
        let TB = this.kinds.get(BB);
        if (void 0 === TB) {
          const dB = this.api.createInstancePool({
            ...this.model,
            item: BB
          }, this.initialCapacity);
          null === dB || void 0 === dB || dB.setOrigin(this.origin[0], this.origin[1], this.origin[2]), TB = dB && new pB(dB, this.origin), this.kinds.set(BB, TB)
        }
        return TB
      }
      follow(BB) {
        const {
          origin: TB
        } = this;
        if (Math.abs(BB[0] - TB[0]) <= 512 && Math.abs(BB[1] - TB[1]) <= 512 && Math.abs(BB[2] - TB[2]) <= 512) return !1;
        TB[0] = Math.floor(BB[0]), TB[1] = Math.floor(BB[1]), TB[2] = Math.floor(BB[2]);
        for (const dB of this.kinds.values()) null === dB || void 0 === dB || dB.pool.setOrigin(TB[0], TB[1], TB[2]);
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
  37470: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      f: () => JB,
      g: () => YB
    });
    const VB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      yB = [0, 1, 2, 0, 2, 3],
      pB = [4, 5];

    function lB(BB, TB, dB, VB, yB) {
      for (let lB = 0; lB < 6; lB++) pB.includes(lB) === yB && gB(BB, TB, dB, VB, lB)
    }

    function JB(BB, TB, dB, VB) {
      for (let yB = 0; yB < 6; yB++) gB(BB, TB, dB, VB, yB)
    }

    function YB(BB, TB, dB, pB, lB) {
      for (let JB = 0; JB < 6; JB++)
        for (const YB of [0, 1]) {
          const [gB, oB, kB] = [YB + 2, YB + 1, (YB + 3) % 4], LB = BB.length / 3;
          for (const [TB, yB] of [
              [YB, oB],
              [gB, oB],
              [gB, kB],
              [YB, kB]
            ])
            for (let YB = 0; YB < 3; YB++) {
              const gB = VB[3 * (4 * JB + TB) + YB],
                oB = VB[3 * (4 * JB + yB) + YB];
              BB.push((gB + (oB - gB) * lB) * pB / 2 + dB[YB])
            }
          for (const BB of yB) TB.push(LB + BB)
        }
    }

    function gB(BB, TB, dB, pB, lB) {
      let [JB, YB, gB] = dB, [oB, kB, LB] = pB;
      const OB = BB.length / 3;
      for (let yB = 4 * lB; yB < 4 * lB + 4; yB++) BB.push(VB[3 * yB] * oB / 2 + JB, VB[3 * yB + 1] * kB / 2 + YB, VB[3 * yB + 2] * LB / 2 + gB);
      for (const VB of yB) TB.push(OB + VB)
    }
  },
  37439: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => ov
    });
    var VB = dB(62);
    const yB = [{
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
      pB = 10;
    let lB = !0;

    function JB() {
      return lB
    }

    function YB(BB) {
      lB = BB
    }
    const gB = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function oB() {
      return lB ? yB.length : pB
    }

    function kB(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = yB[BB - 1]) || void 0 === dB ? void 0 : dB.reactorTier) && void 0 !== TB ? TB : 0
    }

    function LB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kB(BB) > 0;
      return dB && !lB ? "hidden" : BB <= TB ? "open" : dB ? TB < 5 ? "hidden" : TB < pB ? "teaser" : "locked" : "locked"
    }

    function OB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: VB,
        n: yB
      } = HB(BB);
      return {
        key: TB[VB],
        params: {
          [VB]: dB ? String(yB) : yB
        }
      }
    }
    const DB = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function uB(BB, TB) {
      return kB(BB) > 0 && TB < pB
    }

    function HB(BB) {
      const TB = kB(BB);
      if (TB > 0) return {
        kind: "atomic",
        n: TB,
        short: `A${TB}`
      };
      const dB = function(BB) {
        return BB >= 6 && BB <= 10 ? BB - 6 + 1 : 0
      }(BB);
      return dB > 0 ? {
        kind: "stage",
        n: dB,
        short: `S${dB}`
      } : {
        kind: "tier",
        n: BB,
        short: String(BB)
      }
    }

    function EB(BB) {
      return yB[Math.max(1, Math.min(BB, yB.length)) - 1]
    }

    function vB(BB, TB) {
      return BB < TB ? function(BB) {
        var TB;
        return null !== (TB = yB[BB]) && void 0 !== TB ? TB : null
      }(BB) : null
    }
    const mB = "baf2coresubmit",
      iB = "baf2corebankpause",
      NB = "baf2coredeposit",
      tB = "baf2corechargepause";

    function fB(BB) {
      var TB;
      return null !== (TB = BB.baf2CoreOpen) && void 0 !== TB ? TB : pB
    }
    const sB = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function MB(BB) {
      return sB.includes(BB)
    }
    const zB = (BB, TB) => TB.map((TB => [TB, [BB]])),
      wB = Object.fromEntries([...zB("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...zB("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...zB("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...zB("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...zB("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...zB("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...zB("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...zB("Parts Bench", ["Focus Lens"]), ...zB("Machine Bench", ["Laser", "Collider"]), ...zB("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...zB("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...zB("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...zB("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...zB("Tool Bench", ["Mob Cage"]), ...zB("Tool Bench", ["Pocket Terminal"]), ...zB("Tool Bench", ["Comet Beacon"]), ...zB("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function UB(BB) {
      var TB;
      return null !== (TB = wB[BB]) && void 0 !== TB ? TB : ["Workbench"]
    }

    function FB(BB) {
      return UB(BB)[0]
    }
    yB.slice(1).map(((BB, TB) => `Core Tier ${TB+2}`));
    var KB = dB(8653);
    const rB = ["on", "hud", "off"];

    function IB(BB) {
      return "on" === BB
    }
    var cB = dB(279);
    const SB = "Mob Farm",
      PB = {
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
      QB = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      RB = {
        1: 20,
        2: 60,
        3: 120
      },
      aB = "baf2farmvoid",
      ZB = "Caged ",
      XB = " Spawner Block";

    function WB(BB) {
      return `lifeform:${(0,cB.qe)(BB)}`
    }

    function hB(BB) {
      if (!BB) return null;
      if (BB.startsWith(ZB)) {
        const TB = BB.slice(6);
        return QB.includes(TB) ? TB : null
      }
      if (BB.endsWith(XB)) {
        const TB = BB.slice(0, -14);
        return void 0 !== PB[TB] ? TB : null
      }
      return null
    }

    function CB(BB) {
      return !0 === BB.mobFarm
    }

    function GB(BB, TB) {
      return RB[PB[TB]] * BB.opMs / 1e3
    }
    const qB = new Map;
    const xB = "baf2islands",
      jB = "baf2islandnew";

    function AB(BB) {
      const TB = yB.findIndex((TB => TB.unlocks.includes(BB)));
      return TB < 0 ? 1 : TB + 1
    }

    function bB(BB) {
      return Math.floor(BB).toLocaleString("en-US")
    }
    var nB = dB(37372);
    const eB = "baf2terminaltake",
      BT = ["one", "stack", "fill"];

    function TT(BB, TB, dB) {
      return `${eB} ${BB} ${TB} ${dB}`
    }

    function dT(BB) {
      const [TB, dB, ...VB] = BB.trim().split(" "), yB = Number(TB), pB = function(BB) {
        if (BT.includes(BB)) return BB;
        const TB = Number(BB);
        return /^\d+$/.test(BB) && Number.isSafeInteger(TB) && TB > 0 ? TB : null
      }(null !== dB && void 0 !== dB ? dB : "");
      return !Number.isSafeInteger(yB) || yB <= 0 || null === pB || 0 === VB.length ? null : {
        seq: yB,
        mode: pB,
        item: VB.join(" ")
      }
    }
    const VT = "baf2rx";

    function yT(BB, TB) {
      for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB];
      return [VT, BB[0], BB[1], BB[2], TB, ...VB].join(" ")
    }
    const pT = 2,
      lT = 4,
      JT = 8,
      YT = 16,
      gT = 32,
      oT = 64,
      kT = 128,
      LT = 256,
      OT = 512,
      DT = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      uT = [{
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
    const HT = "Biomass",
      ET = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function vT(BB) {
      return {
        input: HT,
        inputAmount: 1,
        output: BB,
        outputAmount: 1
      }
    }
    const mT = "baf2synth",
      iT = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      NT = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      tT = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      fT = function(BB, TB) {
        return {
          input: BB,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: TB,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      sT = function(BB, TB) {
        return {
          ...fT(BB, TB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      MT = NT.map((BB => sT(BB, "Biomass", 2))),
      zT = {
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
          recipes: [fT("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), fT("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), fT("Raw Gold", "Gold Grit", 2), fT("Messy Stone", "Sand"), fT("Gravel", "Sand"), fT("Raw Voltite", "Voltite Dust", 2), fT("Moonstone", "Moonstone Dust", 4), fT("Wheat Seeds", "Fertiliser"), fT("Raw Uranium", "Uranium Grit", 2), sT("Mossy Messy Stone", "Sand"), ...MT],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [fT("Iron Grit", "Iron Bar"), fT("Copper Grit", "Copper Bar"), fT("Gold Grit", "Gold Bar"), fT("Raw Iron", "Iron Bar"), fT("Raw Copper", "Copper Bar"), fT("Raw Gold", "Gold Bar"), fT("Sand", "Glass"), fT("Messy Stone", "Stone"), ...cB.Sc.map((BB => fT(BB, "Charcoal", 1, 4))), fT("Wheat", "Bread", 1, 2), ...NT.map(((BB, TB) => sT(BB, tT[TB])))],
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
          recipes: [fT("Iron Bar", "Iron Plate"), fT("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [fT("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [fT("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [fT("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), fT("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), fT("Raw Gold", "Gold Grit", 3), fT("Raw Voltite", "Voltite Dust", 3), fT("Messy Stone", "Sand", 2), fT("Gravel", "Sand", 2), fT("Moonstone", "Moonstone Dust", 6), fT("Raw Uranium", "Uranium Grit", 3), sT("Mossy Messy Stone", "Sand", 2), ...MT],
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
          table: DT
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [fT("Coal", "Diamond", 1, 24), fT("Voltite Dust", "Moonstone", 1, 12)],
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
        ...nB.h
      },
      wT = {
        Crusher: [fT("Spent Pellet", "Glow Dust"), fT("Wheat Seeds", "Biomass"), fT("Wheat", "Biomass"), fT("Dead Bush", "Biomass"), fT("Dusk Moss", "Biomass"), fT("Rotten Flesh", "Biomass"), fT("Bone", "Biomass", 2)],
        "Shatter Mill": [fT("Spent Pellet", "Glow Dust"), fT("Wheat Seeds", "Biomass"), fT("Wheat", "Biomass"), fT("Dead Bush", "Biomass"), fT("Dusk Moss", "Biomass"), fT("Rotten Flesh", "Biomass"), fT("Bone", "Biomass", 2), ...cB.Sc.map((BB => fT(BB, "Biomass")))],
        Smelter: [fT("Biomass", "Fertiliser", 2)],
        Press: [fT("Coal", "Graphite", 1, 4)]
      },
      UT = "Power Coupler",
      FT = "Advanced Coupler",
      KT = "Nova Coupler",
      rT = [{
        item: UT,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: FT,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: KT,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const IT = new Map;

    function cT(BB) {
      var TB, dB;
      return null !== (TB = null !== (dB = BB.fuelSlot) && void 0 !== dB ? dB : BB.couplerSlot) && void 0 !== TB ? TB : null
    }

    function ST(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!BB.couplable) throw new Error(`${BB.kind} takes no Power Coupler`);
      let dB = IT.get(BB);
      dB || (dB = [], IT.set(BB, dB));
      let VB = dB[TB];
      if (!VB) {
        var yB;
        const {
          divisor: pB,
          powerPerS: lB
        } = rT[TB - 1], JB = BB.opMs / pB, YB = void 0 !== BB.fluidMade || void 0 !== BB.cryoMade ? BB.powerPerOp : lB * JB / 1e3;
        VB = {
          ...BB,
          fuelSlot: null,
          couplerSlot: null !== (yB = cT(BB)) && void 0 !== yB ? yB : void 0,
          opMs: JB,
          powerPerOp: YB,
          coupled: !0
        }, TB > 1 && (VB = {
          ...VB,
          couplerLevel: TB
        }), dB[TB] = VB
      }
      return VB
    }
    const PT = new Map;
    const QT = new Map;

    function RT(BB, TB) {
      if (null === TB || (dB = TB, !ET.includes(dB))) return BB;
      var dB;
      let VB = QT.get(TB);
      return VB || (VB = {
        ...BB,
        recipes: [vT(TB)]
      }, QT.set(TB, VB)), VB
    }

    function aT(BB) {
      return !0 === BB.synth
    }
    const ZT = (BB, TB, dB, VB) => ({
        output: BB,
        outputAmount: TB,
        tier: dB,
        inputs: VB.map((BB => {
          let [TB, dB] = BB;
          return {
            item: TB,
            amount: dB
          }
        }))
      }),
      XT = Object.fromEntries([ZT("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), ZT("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), ZT("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ZT("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), ZT("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), ZT("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), ZT("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), ZT("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), ZT("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), ZT("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), ZT("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), ZT("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), ZT("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), ZT("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), ZT("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), ZT("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), ZT("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ZT("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), ZT("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), ZT("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), ZT("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), ZT("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), ZT("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), ZT("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), ZT("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), ZT("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), ZT("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), ZT("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), ZT("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), ZT("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((BB => [BB.output, BB]))),
      WT = new Map;

    function hT(BB, TB) {
      let dB = zT[BB];
      if (TB.atomic && (dB = function(BB) {
          const TB = wT[BB.kind];
          if (!TB) return BB;
          let dB = PT.get(BB.kind);
          if (!dB) {
            const VB = new Set(TB.map((BB => BB.input))),
              yB = BB.recipes.filter((BB => !VB.has(BB.input)));
            dB = {
              ...BB,
              recipes: [...yB, ...TB]
            }, PT.set(BB.kind, dB)
          }
          return dB
        }(dB)), dB.synth) return RT(dB, TB.taught);
      if (TB.coupled && dB.couplable) return ST(dB, TB.level);
      const VB = dB.inputSlots && null !== TB.taught ? XT[TB.taught] : void 0;
      if (!VB) return dB;
      const yB = `${BB}|${VB.output}`;
      let pB = WT.get(yB);
      return pB || (pB = {
        ...dB,
        bench: VB
      }, WT.set(yB, pB)), pB
    }
    const CT = ["Diamond", "Moonstone"];

    function GT(BB) {
      return new Set(BB.flatMap((BB => BB.bonus ? [BB.output, BB.bonus.item] : [BB.output])).filter((BB => !CT.includes(BB))))
    }
    const qT = Object.values(zT).flatMap((BB => BB.recipes));
    GT(qT.filter((BB => !0 !== BB.nuclear))), GT([...qT.filter((BB => !0 === BB.nuclear)), ...Object.values(wT).flat()]);

    function xT(BB) {
      return null === BB.inputSlot && void 0 === BB.inputSlots && void 0 === BB.powerMade && void 0 === BB.fluidMade && !BB.treeCutter && void 0 === BB.table
    }

    function jT(BB) {
      return !0 === BB.treeCutter
    }
    const AT = ["Voltite Cell"];

    function bT(BB) {
      var TB, dB;
      return null !== (TB = null === (dB = BB.fuels) || void 0 === dB ? void 0 : dB.some((BB => AT.includes(BB)))) && void 0 !== TB && TB
    }
    const nT = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(cB.Sc.map((BB => [BB, 8e3]))),
        ...Object.fromEntries(cB.zd.map((BB => [BB, 2e3]))),
        "Voltite Cell": 12e4
      },
      eT = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      Bd = {
        "Uranium Deposit": 4e3
      };

    function Td(BB) {
      var TB;
      return null !== (TB = Object.keys(eT).find((TB => eT[TB] === BB))) && void 0 !== TB ? TB : null
    }

    function dd(BB) {
      return iT.includes(BB)
    }

    function Vd(BB) {
      return !0 !== BB.nuclear || JB()
    }
    var yd = dB(270);
    var pd = dB(8737),
      ld = dB(8668),
      Jd = dB(8743),
      Yd = dB(8732);
    const gd = "Reactor Controller",
      od = "Reactor Port",
      kd = "Battery Cell",
      Ld = ["fuel", "water", "waste"],
      Od = {
        fuel: od,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Dd = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      ud = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      Hd = "Reactor Frame",
      Ed = "Reactor Glass",
      vd = {
        edge: [Hd],
        cap: [Ed, od],
        wall: [Ed, od],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [gd]
      },
      md = {
        edge: [kd],
        cap: [kd],
        wall: [kd],
        inside: [kd],
        ctrl: [kd]
      },
      Nd = ["edge", "cap", "wall", "inside"],
      td = ["Reactor Slag"];

    function fd(BB) {
      return td.includes(sd(BB))
    }

    function sd(BB) {
      const TB = BB.indexOf("|");
      return TB < 0 ? BB : BB.slice(0, TB)
    }

    function Md(BB) {
      return sd(BB) === gd ? "reactor" : null
    }

    function zd(BB) {
      return sd(BB) !== od ? null : BB.endsWith("|Water") ? "water" : BB.endsWith("|Waste") ? "waste" : "fuel"
    }

    function wd(BB) {
      const TB = zd(BB);
      return null === TB ? null : Kd(Od[Ld[(Ld.indexOf(TB) + 1) % Ld.length]], function(BB) {
        return BB.includes(Ud)
      }(BB))
    }
    const Ud = "|meta|rot1|Formed",
      Fd = new Set([Hd, Ed, od]);

    function Kd(BB, TB) {
      var dB;
      const VB = sd(BB);
      if (!Fd.has(VB)) return BB;
      if (VB !== od) return TB ? VB + Ud : VB;
      const yB = null !== (dB = zd(BB)) && void 0 !== dB ? dB : "fuel";
      return TB ? "fuel" === yB ? VB + Ud : `${VB}${Ud}|${"water"===yB?"Water":"Waste"}` : Od[yB]
    }

    function rd(BB, TB) {
      const dB = bd(BB, TB);
      if ("Air" === dB) return !1;
      const VB = "reactor" === BB ? vd : md;
      return Nd.some((BB => VB[BB].includes(dB))) || "reactor" === BB && td.includes(dB)
    }

    function Id(BB) {
      return ud[BB]
    }

    function cd(BB) {
      var TB;
      return null !== (TB = Dd[BB]) && void 0 !== TB ? TB : Dd[1]
    }

    function Sd(BB) {
      const [TB, , dB] = cd(BB);
      return [dB, 0, -TB]
    }

    function Pd(BB, TB, dB, VB, yB, pB) {
      return {
        ctrl: [BB[0], BB[1], BB[2]],
        rot: Dd[TB] ? TB : 1,
        w: dB,
        h: VB,
        d: yB,
        cu: pB[0],
        cv: pB[1]
      }
    }

    function Qd(BB, TB) {
      return "reactor" === BB ? [Math.floor((TB - 1) / 2), 0] : [0, 0]
    }

    function Rd(BB, TB, dB, VB, yB) {
      let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB.rot;
      if (dB === BB.w && VB === BB.h && yB === BB.d && pB === BB.rot) return BB;
      const [lB] = Qd(TB, BB.w);
      if (BB.cu === lB && BB.cv <= 1) return Pd(BB.ctrl, pB, dB, VB, yB, Qd(TB, dB));
      const JB = (BB, TB) => Math.max(1, Math.min(TB, BB));
      return Pd(BB.ctrl, pB, dB, VB, yB, [JB(BB.cu, dB - 2), 0 === BB.cv ? 0 : JB(BB.cv, VB - 2)])
    }
    const ad = 11,
      Zd = 2 * ad + 1;
    new Uint8Array(Zd * Zd * Zd);

    function Xd(BB) {
      return BB.w * BB.h * BB.d
    }

    function Wd(BB) {
      const TB = Sd(BB.rot);
      return [BB.ctrl[0] - TB[0] * BB.cu, BB.ctrl[1] - BB.cv, BB.ctrl[2] - TB[2] * BB.cu]
    }

    function hd(BB) {
      return BB.cv * BB.d * BB.w + BB.cu
    }

    function Cd(BB, TB) {
      const dB = TB % BB.w,
        VB = Math.floor(TB / BB.w) % BB.d;
      return [dB, Math.floor(TB / (BB.w * BB.d)), VB]
    }

    function Gd(BB, TB) {
      const [dB, VB, yB] = Cd(BB, TB), pB = Wd(BB), lB = cd(BB.rot), JB = Sd(BB.rot);
      return [pB[0] + JB[0] * dB - lB[0] * yB, pB[1] + VB, pB[2] + JB[2] * dB - lB[2] * yB]
    }

    function qd(BB, TB) {
      const dB = Wd(BB),
        VB = cd(BB.rot),
        yB = Sd(BB.rot),
        pB = TB[0] - dB[0],
        lB = TB[2] - dB[2],
        JB = pB * yB[0] + lB * yB[2],
        YB = -(pB * VB[0] + lB * VB[2]),
        gB = TB[1] - dB[1];
      return JB < 0 || JB >= BB.w || gB < 0 || gB >= BB.h || YB < 0 || YB >= BB.d ? -1 : (gB * BB.d + YB) * BB.w + JB
    }

    function xd(BB, TB) {
      if (TB === hd(BB)) return "ctrl";
      const [dB, VB, yB] = Cd(BB, TB), pB = 0 === VB || VB === BB.h - 1, lB = Number(0 === dB || dB === BB.w - 1) + Number(pB) + Number(0 === yB || yB === BB.d - 1);
      return lB >= 2 ? "edge" : 1 === lB ? pB ? "cap" : "wall" : "inside"
    }

    function jd(BB, TB) {
      const [dB, VB, yB] = Cd(BB, TB);
      return 0 === dB || dB === BB.w - 1 || 0 === VB || VB === BB.h - 1 || 0 === yB || yB === BB.d - 1 ? -1 : ((VB - 1) * (BB.d - 2) + (yB - 1)) * (BB.w - 2) + (dB - 1)
    }

    function Ad(BB, TB) {
      const dB = BB.w - 2,
        VB = BB.d - 2,
        yB = TB % dB + 1,
        pB = Math.floor(TB / dB) % VB + 1;
      return ((Math.floor(TB / (dB * VB)) + 1) * BB.d + pB) * BB.w + yB
    }

    function bd(BB, TB) {
      const dB = sd(TB);
      return "reactor" === BB && dB === gd ? Hd : dB
    }

    function nd(BB, TB, dB) {
      const VB = "ctrl" === TB ? sd(dB) : bd(BB, dB);
      return ("reactor" === BB ? vd : md)[TB].includes(VB) ? "ok" : "Air" === VB ? "missing" : rd(BB, dB) ? "wrong" : "blocked"
    }

    function ed(BB, TB) {
      return "battery" === BB ? kd : "inside" === TB ? null : function(BB, TB) {
        if ("inside" === TB || "ctrl" === TB || "battery" === BB) return null;
        return "edge" === TB ? Hd : Ed
      }(BB, TB)
    }
    const BV = {
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
      TV = "Collider",
      dV = "Laser",
      VV = "Star Alloy",
      yV = "Glow Dust",
      pV = [TV, "_Collider Focus"];

    function lV(BB) {
      return pV.indexOf(sd(BB))
    }

    function JV(BB) {
      return sd(BB) === dV
    }

    function YV(BB) {
      return [
        [BB[0], BB[1], BB[2]],
        [BB[0], BB[1] + 1, BB[2]]
      ]
    }
    const gV = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function oV(BB, TB, dB) {
      const VB = gV[TB];
      return [BB[0] + VB[0] * dB, BB[1], BB[2] + VB[2] * dB]
    }

    function kV(BB, TB) {
      if (TB[1] !== BB[1]) return null;
      const dB = TB[0] - BB[0],
        VB = TB[2] - BB[2];
      if (0 !== dB === (0 !== VB)) return null;
      const yB = Math.abs(dB + VB);
      if (yB > BV.LASER_D) return null;
      return {
        dir: VB < 0 ? 0 : dB > 0 ? 1 : VB > 0 ? 2 : 3,
        cg: yB
      }
    }

    function LV(BB, TB, dB) {
      const VB = TB => Math.abs(BB[0] - TB[0]) <= 1 && Math.abs(BB[1] - TB[1]) <= 1;
      return VB(TB) || VB(dB)
    }

    function OV(BB, TB) {
      return function(BB, TB, dB, VB) {
        return [0, 1, 2, 3].map((yB => {
          for (let pB = 1; pB <= BV.LASER_D; pB++) {
            const lB = oV(BB, yB, pB);
            if (LV([lB[0], lB[2]], TB, dB) || !VB(lB)) return !1
          }
          return !0
        }))
      }(YV(BB)[1], TB.spawnXZ, TB.coreXZ, (BB => BB[1] >= pd.t && BB[1] < pd.t + pd.w && BB[0] >= TB.minXZ[0] && BB[0] <= TB.maxXZ[0] && BB[2] >= TB.minXZ[1] && BB[2] <= TB.maxXZ[1]))
    }
    const DV = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function uV(BB) {
      return Math.max(48 + 16 * BB, EB(BB).machineAllowance)
    }
    const HV = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function EV(BB) {
      const TB = BB.split("|")[0];
      return HV.includes(TB) ? "Solar Panel" : TB === Jd.e ? "Fluid Pipe" : lV(TB) >= 0 ? "Collider" : (dB = TB, DV.includes(dB) ? TB : null);
      var dB
    }
    const vV = "buildAFactory2Game:solarPanelDescription";
    const mV = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function iV(BB, TB) {
      var dB;
      return null !== (dB = mV.find((dB => {
        var VB;
        return (null !== (VB = BB.level(dB)) && void 0 !== VB ? VB : 0) >= TB
      }))) && void 0 !== dB ? dB : null
    }
    const NV = "buildAFactory2Game:";
    let tV = null;
    const fV = {
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
      sV = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      MV = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      zV = {
        "Loot Chest": `${NV}lookRuinChestName`
      };

    function wV(BB) {
      return "object" === typeof BB && null !== BB && "translationKey" in BB && "string" === typeof BB.translationKey ? BB.translationKey : null
    }

    function UV(BB, TB) {
      var dB;
      return null !== (dB = wV(BB.displayName(TB))) && void 0 !== dB ? dB : `item:${(0,cB.qe)(TB)}`
    }

    function FV(BB, TB) {
      var dB, VB, yB, pB;
      let lB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TB;
      if ("Solar Panel" === EV(TB)) return {
        name: wV(BB.displayName("Solar Panel")),
        detail: vV,
        detailItem: null
      };
      const YB = TB.endsWith(" Ore"),
        gB = (tV ??= new Set([...Object.keys((0, ld.m)()), ...Object.keys((0, Jd.r)())].map((BB => BB.split("|")[0]))), tV).has(TB),
        oB = YB || gB ? null : function(BB) {
          var TB;
          return BB.endsWith(" Log") && !BB.startsWith("Barkless ") ? "lookLog" : BB.endsWith(" Sapling") ? "lookSapling" : BB.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (TB = fV[BB]) && void 0 !== TB ? TB : null
        }(TB);
      if (!BB.isBlock(TB) || !YB && !gB && null === oB) return null;
      const kB = null !== (dB = null !== (VB = zV[TB]) && void 0 !== VB ? VB : wV(null !== (yB = BB.displayName(lB)) && void 0 !== yB ? yB : BB.displayName(TB))) && void 0 !== dB ? dB : `item:${(0,cB.qe)(TB)}`;
      if (null !== oB) return {
        name: kB,
        detail: `${NV}${oB}`,
        detailItem: null
      };
      const LB = null !== (pB = sV[TB]) && void 0 !== pB ? pB : JB() ? MV[TB] : void 0;
      if (gB && void 0 !== LB) return {
        name: kB,
        detail: `${NV}${LB}`,
        detailItem: null
      };
      const OB = eT[TB];
      if (void 0 !== OB) return {
        name: kB,
        detail: `${NV}lookDeposit`,
        detailItem: UV(BB, OB)
      };
      const DB = BB.harvestLevel(TB);
      if (YB && "rock" === BB.harvestType(TB) && 0 !== DB) {
        const TB = iV(BB, null !== DB && void 0 !== DB ? DB : 0);
        if (TB === mV[0]) return {
          name: kB,
          detail: `${NV}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== TB) return {
          name: kB,
          detail: `${NV}lookPickaxe`,
          detailItem: UV(BB, TB)
        }
      }
      return {
        name: kB,
        detail: wV(BB.description(TB)),
        detailItem: null
      }
    }

    function KV(BB) {
      return BB < pd.t - 24
    }
    const rV = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const IV = "Wrench",
      cV = "Nova Wrench";

    function SV(BB) {
      return BB === IV || BB === cV
    }
    const PV = [...pd.Q, "Belt Lift", "Belt Drop"];
    const QV = ["Belt Lift", "Belt Drop"],
      RV = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function aV(BB) {
      return BB.split("|")[0]
    }

    function ZV(BB) {
      const TB = /\|rot(\d)/.exec(BB);
      return TB ? Number(TB[1]) : 1
    }

    function XV(BB) {
      return BB % 4 + 1
    }

    function WV(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === TB && "" === dB ? BB : `${BB}|meta|rot${TB}${dB}`
    }

    function hV(BB) {
      return aV(BB) === pd.C ? (0, pd.Y)(BB) ? "gateRight" : "gateLeft" : (0, pd.eb)(BB)
    }

    function CV(BB) {
      const TB = aV(BB),
        dB = ZV(BB);
      if (pd.Q.includes(TB)) return (0, pd.U)(TB, XV(dB), null);
      if (TB === pd.j) return (0, pd.jb)(XV(dB), (0, pd.ab)(BB));
      if (TB === pd.G) {
        const VB = RV[(0, pd.eb)(BB)];
        return null === VB ? WV(TB, XV(dB)) : WV(TB, dB, pd.K[VB])
      }
      return TB === pd.C ? (0, pd.Y)(BB) ? WV(TB, XV(dB)) : WV(TB, dB, pd.p) : Yd.c.includes(TB) && !QV.includes(TB) || dd(TB) ? WV(TB, XV(dB)) : null
    }

    function GV(BB) {
      return Yd.c.includes(BB) || dd(BB) || null !== EV(BB)
    }

    function qV(BB) {
      return "Solar Panel" === EV(BB)
    }
    const xV = "buildAFactory2Game:",
      jV = {
        leftFront: `${xV}lookSplitDetail_leftFront`,
        frontRight: `${xV}lookSplitDetail_frontRight`,
        gateRight: `${xV}lookGateDetail_gateRight`
      };

    function AV(BB, TB) {
      var dB;
      let VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const yB = hV(BB),
        pB = null === yB ? null : `${xV}${yB.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${yB}`,
        lB = null === yB ? null : null !== (dB = jV[yB]) && void 0 !== dB ? dB : null;
      if (SV(TB) && VB) {
        const dB = aV(BB);
        return TB === cV && JB() && function(BB) {
          return PV.includes(aV(BB))
        }(BB) ? {
          mode: pB,
          detail: lB,
          next: `${xV}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: pB,
          detail: lB,
          next: GV(dB) && !qV(dB) ? `${xV}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const YB = SV(TB) ? CV(BB) : null;
      if (null === YB) return {
        mode: pB,
        detail: lB,
        next: null,
        nextState: null
      };
      const gB = hV(YB);
      return null === gB || ZV(YB) !== ZV(BB) ? {
        mode: pB,
        detail: lB,
        next: `${xV}lookWrenchTurn`,
        nextState: null
      } : {
        mode: pB,
        detail: lB,
        next: `${xV}lookWrenchNext`,
        nextState: `${xV}lookWrenchState_${gB}`
      }
    }
    const bV = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const nV = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function eV(BB) {
      return [0, 1, 2, 3].map((TB => 0 !== (BB & 1 << TB)))
    }

    function By(BB) {
      const TB = [];
      for (let dB = 8; dB + 2 < BB.length; dB += 3) TB.push([BB[dB], BB[dB + 1], BB[dB + 2]]);
      return {
        focus: [BB[0], BB[1], BB[2]],
        lasers: eV(BB[3]),
        open: eV(BB[4]),
        live: eV(BB[5]),
        on: 1 === BB[6],
        state: nV[BB[7]],
        blockers: TB
      }
    }
    const Ty = "Arc Caster",
      dy = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      Vy = (Object.values(dy), "Jet Chestplate"),
      yy = "Nova Jet Chestplate",
      py = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      ly = Object.values(py);

    function Jy(BB, TB, dB) {
      return Math.min(function(BB) {
        return JB() && kB(BB) >= 5 ? 20 : 10
      }(dB), Math.floor(function(BB, TB) {
        return Math.max(0, BB) + (JB() ? Math.max(0, TB) : 0)
      }(BB, TB) / 5))
    }

    function Yy(BB, TB, dB) {
      const VB = Jy(TB, dB, BB),
        yB = kB(BB),
        pB = (yB >= 3 ? 55 : yB >= 1 ? 50 : BB >= 8 ? 45 : 30) + VB,
        lB = Math.max(100 + VB, 2 * pB);
      return {
        arcDamage: pB,
        arcPierce: BB >= 7 ? 2 : 1,
        arcChain: BB >= 10,
        barrierMax: (yB >= 4 ? 100 : yB >= 2 ? 90 : BB >= 9 ? 80 : BB >= 6 ? 60 : 40) + 5 * VB,
        barrierRegenPerS: yB >= 5 ? 20 : BB >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * VB,
        novaShieldRegenPerS: 32,
        bladeDamage: lB,
        bladePunch: Math.round(.5 * lB),
        forgeRank: VB
      }
    }
    const gy = {
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
    var oy = dB(35805),
      ky = dB(35601),
      Ly = dB(35595),
      Oy = dB(21),
      Dy = dB(1507),
      uy = dB(933),
      Hy = dB.n(uy);

    function Ey(BB) {
      return !0 === BB.field
    }
    const vy = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function my(BB) {
      return vy.has(BB) ? `buildAFactory2Game:itemPlural_${(0,cB.qe)(BB)}` : null
    }
    var iy = dB(1078),
      Ny = dB(946),
      ty = dB(1666),
      fy = dB(1657),
      sy = dB(35789),
      My = dB(35798),
      zy = dB(24),
      wy = dB(35780);
    const Uy = "baf2QuestView",
      Fy = "baf2PlayerY",
      Ky = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class ry {
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
      set(BB, TB) {
        var dB, VB, yB, pB, lB, JB, YB, gB;
        const oB = JSON.stringify(BB.baf2QuestName) === JSON.stringify(this.view.name),
          kB = new Set(this.view.rows.filter((BB => BB.done)).map((BB => BB.id))),
          LB = new Set(this.view.rows.filter((BB => BB.justFinished)).map((BB => BB.id))),
          OB = BB.baf2QuestSide,
          DB = null !== OB && !0 === BB.baf2QuestSideFocus;
        let uB = !1,
          HB = 0;
        const EB = BB.baf2QuestSteps.map((BB => {
            const TB = Zy(BB, Ky.has(BB[0]) ? BB[0] : "" + HB++),
              dB = oB && TB.done && !kB.has(TB.id);
            return TB.justFinished = dB || oB && TB.done && LB.has(TB.id), uB ||= dB, TB
          })),
          vB = ay(EB);
        vB >= 0 && !DB && (EB[vB].current = !0);
        const mB = !oB && null !== BB.baf2QuestName,
          iB = JSON.stringify(OB && [OB[0], OB[1]]),
          NB = iB === JSON.stringify(null !== (dB = null === (VB = this.view.side) || void 0 === VB ? void 0 : VB.name) && void 0 !== dB ? dB : null),
          tB = null !== OB && !this.sidesSeen.has(iB);
        tB && this.sidesSeen.add(iB), this.serverTutorial = null !== (yB = BB.baf2QuestTutorial) && void 0 !== yB ? yB : "on", (null !== (pB = BB.baf2QuestTutorialSeq) && void 0 !== pB ? pB : 0) >= this.pickSeq && this.endPick();
        const fB = !oB || !NB || BB.baf2QuestTier !== this.view.tier;
        this.view = {
          name: BB.baf2QuestName,
          rows: EB,
          reward: BB.baf2QuestReward,
          goal: BB.baf2QuestGoal,
          pulse: this.view.pulse + (uB || mB ? 1 : 0),
          itemNames: TB,
          side: OB && {
            name: [OB[0], OB[1]],
            row: {
              ...Zy(OB[2], "side"),
              current: DB
            },
            goal: null !== (lB = OB[3]) && void 0 !== lB ? lB : null
          },
          sideCameUpAt: tB ? Date.now() : this.view.sideCameUpAt,
          tier: BB.baf2QuestTier,
          core: BB.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (JB = BB.baf2QuestAlso) && void 0 !== JB ? JB : [],
          depth: null !== (YB = BB.baf2QuestDepth) && void 0 !== YB ? YB : null,
          tutorial: null !== (gB = this.pickedTutorial) && void 0 !== gB ? gB : this.serverTutorial,
          tutorialKnown: !0
        }, this.yH(), uB && this.scheduleClear(), fB && this.requestBook()
      }
      setTutorial(BB) {
        return this.endPick(), this.pickedTutorial = BB, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.yH()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: BB
        }, this.yH(), this.pickSeq
      }
      onPlayerY(BB) {
        const TB = Math.floor(BB);
        TB !== this.playerY && (this.playerY = TB, this.view.depth && zy.h.yH(Fy, TB))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(BB) {
        this.view = {
          ...this.view,
          chapters: BB.baf2BookChapters
        }, this.yH()
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
          }, this.yH()
        }), 2400)
      }
      yH() {
        zy.h.yH(Uy, this.view, !0)
      }
    }

    function Iy(BB, TB) {
      return BB.sideCameUpAt > 0 && TB - BB.sideCameUpAt < 2400
    }

    function cy(BB) {
      return (null === BB.name || Sy(BB)) && null === BB.side && null !== BB.chapters
    }

    function Sy(BB) {
      var TB;
      return "quest_forgeOngoing" === (null === (TB = BB.name) || void 0 === TB ? void 0 : TB[0])
    }

    function Py(BB) {
      return BB.filter((BB => !Ky.has(BB.key)))
    }

    function Qy(BB) {
      return BB.key.startsWith("stepCraft")
    }

    function Ry(BB, TB) {
      const dB = new Set,
        VB = BB.side ? [...BB.rows, BB.side.row] : BB.rows;
      for (const pB of VB)
        if (!pB.done) {
          !pB.item || TB && !Qy(pB) || dB.add(pB.item);
          for (const [BB, TB, VB] of null !== (yB = pB.chips) && void 0 !== yB ? yB : []) {
            var yB;
            TB < VB && dB.add(BB)
          }
        } return dB
    }

    function ay(BB) {
      const TB = BB.findIndex((BB => !BB.done && !BB.away));
      return TB >= 0 ? TB : BB.findIndex((BB => !BB.done))
    }

    function Zy(BB, TB) {
      let [dB, VB, yB, pB, lB, JB, YB, gB, oB, kB] = BB;
      return {
        id: TB,
        key: dB,
        params: VB,
        item: yB,
        amount: pB,
        total: lB,
        done: JB,
        chips: null !== YB && void 0 !== YB ? YB : null,
        current: !1,
        away: !0 === gB,
        madeFor: null !== oB && void 0 !== oB ? oB : [],
        also: null !== kB && void 0 !== kB ? kB : [],
        justFinished: !1
      }
    }
    const Xy = "baf2QuestItems",
      Wy = new Set;
    let hy = new Set,
      Cy = null;

    function Gy(BB) {
      const TB = IB(BB.tutorial),
        dB = TB ? Ry(BB, !0) : Wy;
      "inventory" === Oy.d.get("openInGameMenuName") ? (Cy = null, (0, wy.r)(dB)) : Cy = dB;
      const VB = TB ? Ry(BB, !1) : Wy;
      (0, My.b)(VB, hy) || (hy = VB, zy.h.yH(Xy, hy))
    }

    function qy() {
      return (0, sy.c)(Xy, (() => hy))
    }
    var xy = dB(35681),
      jy = dB(2760);

    function Ay(BB) {
      const TB = (0, jy.b)(BB),
        dB = void 0 === TB ? void 0 : (0, xy.displayNameOf)(TB);
      return "object" === typeof dB && null !== dB && "translationKey" in dB && "string" === typeof dB.translationKey ? dB.translationKey : `item:${(0,cB.qe)(BB)}`
    }

    function by(BB, TB) {
      return BB(Ay(TB))
    }
    const ny = [{
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

    function ey(BB, TB) {
      return [`Deposit Seed (${BB})`, {
        item: eT[`${BB} Deposit`],
        amount: TB
      }]
    }
    const Bp = Object.fromEntries([ey("Coal", 8), ey("Iron", 8), ey("Copper", 8), ey("Gold", 6), ey("Voltite", 4), ey("Uranium", 4)]),
      Tp = "Relay Coil",
      dp = new Map;

    function Vp(BB) {
      let TB = dp.get(BB);
      if (!TB) {
        const dB = Math.max(1, BB);
        TB = ny.filter((BB => {
          var TB;
          return dB >= BB.fromTier && dB <= (null !== (TB = BB.untilTier) && void 0 !== TB ? TB : 1 / 0)
        })).map((BB => BB.later && dB >= BB.later.tier ? {
          ...BB,
          weight: BB.later.weight
        } : BB)), dp.set(BB, TB)
      }
      return TB
    }

    function yp(BB) {
      return Vp(BB).some((BB => {
        let {
          item: TB
        } = BB;
        return TB === Tp
      }))
    }

    function pp(BB) {
      return BB.startsWith("Deposit Seed (")
    }

    function lp(BB, TB) {
      const dB = Vp(BB);
      return TB ? dB.filter((BB => TB(BB.item))) : dB
    }

    function Jp(BB) {
      return BB.reduce(((BB, TB) => BB + TB.weight), 0)
    }

    function Yp(BB, TB) {
      const dB = lp(BB, TB),
        VB = Jp(dB);
      return dB.map((BB => ({
        find: BB,
        chance: BB.weight / VB
      })))
    }
    const gp = 6e4,
      op = new Intl.NumberFormat("en-US");

    function kp(BB, TB) {
      const dB = BB >= 10 ? Math.round(BB) : Math.round(10 * BB) / 10;
      return 0 === dB ? "0" : `${TB}${op.format(dB)}`
    }

    function Lp(BB) {
      return BB < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? op.format(BB) : BB < 1e6 ? `${BB<1e5?Math.floor(BB/100)/10:Math.floor(BB/1e3)}k` : Math.floor(BB / 1e5) / 10 + "M"
    }

    function Op(BB) {
      return BB < 0 ? "\u2212" + -BB : String(BB)
    }

    function Dp(BB, TB) {
      const dB = Math.max(1, Math.round(TB));
      if (dB < 60) return BB("buildAFactory2Game:durationSeconds", {
        seconds: String(dB)
      });
      const VB = Math.round(dB / 60);
      if (VB < 60) return BB("buildAFactory2Game:durationMinutes", {
        minutes: String(VB)
      });
      const yB = String(Math.floor(VB / 60));
      return VB % 60 === 0 ? BB("buildAFactory2Game:durationWholeHours", {
        hours: yB
      }) : BB("buildAFactory2Game:durationHours", {
        hours: yB,
        minutes: String(VB % 60)
      })
    }
    const Hp = "(max-height: 420px), (max-width: 650px)";

    function Ep() {
      return "undefined" !== typeof window && window.matchMedia(Hp).matches
    }

    function vp(BB) {
      const TB = window.matchMedia(Hp),
        dB = () => {
          BB(TB.matches)
        };
      return TB.addEventListener("change", dB), () => {
        TB.removeEventListener("change", dB)
      }
    }
    var mp = dB(980);

    function ip(BB, TB) {
      return null !== BB && BB > TB + 1
    }

    function Np(BB) {
      const TB = 100 * BB;
      return String(TB <= 0 || TB >= 1 ? Math.round(TB) : Math.max(.1, Math.round(10 * TB) / 10))
    }

    function tp(BB) {
      let {
        item: TB,
        amount: dB
      } = BB;
      return (0, mp.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, mp.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: TB,
            amount: 0
          })
        }), dB > 1 && (0, mp.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", dB]
        })]
      })
    }

    function fp(BB) {
      let {
        label: TB,
        names: dB
      } = BB;
      const [yB, pB] = (0, VB.useState)(!1), lB = dB.join(" / ");
      return (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: lB,
          "aria-expanded": yB,
          onClick: () => {
            pB(!yB)
          },
          children: TB
        }), yB && (0, mp.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: lB
        })]
      })
    }

    function sp(BB) {
      let {
        tier: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), {
        key: VB,
        params: yB
      } = OB(TB, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), pB = dB(`buildAFactory2Game:${VB}`, yB);
      return (0, mp.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, mp.jsx)(Ny.e, {
          name: "lock"
        }), pB]
      })
    }
    const Mp = (0, VB.createContext)(null);

    function zp() {
      const {
        t: BB
      } = (0, iy.z)(), TB = (0, VB.useContext)(Mp);
      return (0, VB.useEffect)((() => null === TB || void 0 === TB ? void 0 : TB()), [TB]), (0, mp.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: BB("buildAFactory2Game:recipeForQuest"),
        "aria-label": BB("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function wp(BB) {
      let {
        title: TB,
        count: dB,
        children: yB,
        startOpen: pB = !0
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), [JB, YB] = (0, VB.useState)((() => pB && !Ep())), [gB, oB] = (0, VB.useState)(0), kB = (0, VB.useCallback)((() => (oB((BB => BB + 1)), () => {
        oB((BB => BB - 1))
      })), []);
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2Recipes", {
          Open: JB
        }),
        children: [(0, mp.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            YB(!JB)
          },
          "aria-expanded": JB,
          children: [lB("buildAFactory2Game:recipesToggle", {
            title: TB,
            count: String(dB)
          }), (0, mp.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: JB ? "\u25be" : "\u25b8"
          })]
        }), JB && (0, mp.jsxs)(Mp.Provider, {
          value: kB,
          children: [(0, mp.jsx)("ul", {
            className: "Baf2RecipeList",
            children: yB
          }), gB > 0 && (0, mp.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, mp.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), lB("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Up = "buildAFactory2Game:",
      Fp = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const Kp = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      rp = {
        "Uranium Grit": pB,
        "Raw Uranium": pB
      };

    function Ip(BB) {
      var TB;
      return null !== (TB = rp[BB]) && void 0 !== TB ? TB : Math.max(AB(BB), Kp[BB] ? AB(Kp[BB]) : 1, function(BB) {
        const TB = yB.findIndex((TB => TB.cost.some((TB => TB.item === BB))));
        return TB > pB ? TB : 1
      }(BB))
    }

    function cp(BB, TB) {
      return Sp(TB) ? Ip(TB) : function(BB) {
        if (Fp.has(BB)) return 1;
        const TB = yB.findIndex((TB => TB.newDeposits.some((TB => {
          let {
            block: dB
          } = TB;
          return dB === BB
        }))));
        return TB < 0 ? 1 : TB + 1
      }(BB)
    }

    function Sp(BB) {
      return BB in rp || kB(Ip(BB)) > 0
    }

    function Pp(BB, TB) {
      return hT(BB, {
        coupled: !1,
        taught: null,
        atomic: JB() && TB >= 11
      }).recipes
    }

    function Qp(BB, TB) {
      const dB = LB(BB, TB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kB(BB) > 0);
      return "open" === dB || "locked" === dB
    }

    function Rp(BB, TB) {
      return BB.map(((BB, dB) => ({
        value: BB,
        idx: dB,
        tier: TB(BB)
      }))).sort(((BB, TB) => BB.tier - TB.tier || BB.idx - TB.idx)).map((BB => {
        let {
          value: TB
        } = BB;
        return TB
      }))
    }

    function ap(BB, TB, dB) {
      const VB = LB(BB, TB);
      if ("hidden" === VB || "open" === VB) return null;
      if ("teaser" === VB) return {
        tag: {
          translationKey: `${Up}${dB?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Up}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const yB = OB(BB, {
          tier: dB ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        pB = OB(BB, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Up}${yB.key}`,
          params: yB.params
        },
        reason: {
          translationKey: `${Up}${pB.key}`,
          params: pB.params
        }
      }
    }

    function Zp(BB) {
      return !pp(BB)
    }

    function Xp(BB) {
      let {
        seconds: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)();
      return (0, mp.jsx)(wp, {
        title: dB("buildAFactory2Game:recipesCuts", {
          seconds: TB
        }),
        count: 1,
        children: (0, mp.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mp.jsx)(tp, {
            item: "Maple Sapling",
            amount: 1
          }), (0, mp.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mp.jsx)(tp, {
            item: "Maple Log",
            amount: 1
          }), (0, mp.jsx)("span", {
            className: "Baf2RecipeName",
            children: dB("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Wp(BB) {
      let {
        fertilised: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)();
      return (0, mp.jsxs)(wp, {
        title: dB("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, mp.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, mp.jsx)(tp, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mp.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mp.jsx)(tp, {
            item: "Wheat",
            amount: 1
          }), (0, mp.jsx)(tp, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, mp.jsx)("span", {
            className: "Baf2RecipeName",
            children: dB("buildAFactory2Game:recipeField")
          })]
        }), (0, mp.jsxs)("li", {
          className: Hy()("Baf2Recipe", {
            InUse: TB
          }),
          children: [(0, mp.jsx)(tp, {
            item: "Fertiliser",
            amount: 1
          }), (0, mp.jsx)("span", {
            className: "Baf2RecipeName",
            children: dB("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function hp(BB) {
      let {
        tier: TB,
        seconds: dB
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = function(BB) {
        return BB >= 5 ? uT : DT
      }(TB);
      return (0, mp.jsx)(wp, {
        title: VB("buildAFactory2Game:recipesBringsUp", {
          seconds: dB
        }),
        count: yB.length,
        children: yB.map((BB => {
          let {
            item: TB,
            chance: dB
          } = BB;
          return (0, mp.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mp.jsx)(tp, {
              item: TB,
              amount: 1
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeName",
              children: by(VB, TB)
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: VB("buildAFactory2Game:recipeChance", {
                percent: Np(dB)
              })
            })]
          }, TB)
        }))
      })
    }

    function Cp(BB) {
      let {
        tier: TB,
        seconds: dB,
        noSeeds: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), pB = qy(), lB = Yp(TB, VB ? Zp : void 0), JB = VB && Yp(TB).length > lB.length, YB = yp(TB);
      return (0, mp.jsxs)(wp, {
        title: yB("buildAFactory2Game:recipesRecycles", {
          seconds: dB
        }),
        count: lB.length,
        children: [lB.map((BB => {
          let {
            find: TB,
            chance: dB
          } = BB;
          return (0, mp.jsxs)("li", {
            className: "Baf2Recipe",
            children: [pB.has(TB.item) && (0, mp.jsx)(zp, {}), (0, mp.jsx)(tp, {
              item: TB.item,
              amount: TB.amount
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeName",
              children: by(yB, TB.item)
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: yB("buildAFactory2Game:recipeChance", {
                percent: Np(dB)
              })
            })]
          }, TB.item)
        })), JB && (0, mp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mp.jsx)("span", {
            className: "Baf2RecipeName",
            children: yB("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), YB && (0, mp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mp.jsx)("span", {
            className: "Baf2RecipeName",
            children: yB("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function Gp(BB) {
      let {
        tier: TB,
        seconds: dB
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = Object.entries(Bp).filter((BB => {
        let [, {
          item: dB
        }] = BB;
        return Qp(Ip(dB), TB, Sp(dB))
      }));
      return (0, mp.jsx)(wp, {
        title: VB("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: dB
        }),
        count: yB.length,
        children: yB.map((BB => {
          let [TB, {
            item: dB,
            amount: yB
          }] = BB;
          return (0, mp.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, mp.jsx)(tp, {
              item: TB,
              amount: 1
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mp.jsx)(tp, {
              item: dB,
              amount: yB
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeName",
              children: by(VB, dB)
            })]
          }, TB)
        }))
      })
    }

    function qp(BB) {
      let {
        tier: TB,
        seconds: dB
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = qy(), pB = Rp(Object.entries(eT).filter((BB => {
        let [dB, VB] = BB;
        return Qp(cp(dB, VB), TB, Sp(VB))
      })), (BB => {
        let [TB, dB] = BB;
        return cp(TB, dB)
      }));
      return (0, mp.jsx)(wp, {
        title: VB("buildAFactory2Game:recipesDigs", {
          seconds: dB
        }),
        count: pB.length,
        children: pB.map((BB => {
          let [dB, pB] = BB;
          const lB = cp(dB, pB),
            JB = lB > TB ? lB : null,
            YB = Bd[dB],
            gB = null === JB && yB.has(pB);
          return (0, mp.jsxs)("li", {
            className: Hy()("Baf2Recipe", {
              Locked: null !== JB,
              Far: ip(JB, TB)
            }),
            children: [gB && (0, mp.jsx)(zp, {}), (0, mp.jsx)(tp, {
              item: dB,
              amount: 1
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mp.jsx)(tp, {
              item: pB,
              amount: 1
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeName",
              children: by(VB, pB)
            }), void 0 !== YB && (0, mp.jsx)("span", {
              className: "Baf2RecipeMore",
              children: VB("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / YB)
              })
            }), null !== JB && (0, mp.jsx)(sp, {
              tier: JB
            })]
          }, dB)
        }))
      })
    }

    function xp(BB) {
      var TB;
      let {
        def: dB,
        seconds: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)();
      return (0, mp.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mp.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (TB = dB.fuels) && void 0 !== TB ? TB : []).map((BB => (0, mp.jsx)(tp, {
            item: BB,
            amount: 1
          }, BB))), (0, mp.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, mp.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mp.jsx)(Ny.e, {
              name: "bolt"
            }), yB("buildAFactory2Game:recipePower", {
              power: bB(dB.powerMade),
              seconds: VB
            })]
          })]
        })
      })
    }

    function jp(BB) {
      let {
        def: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)();
      return (0, mp.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mp.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mp.jsx)(Ny.e, {
              name: "bolt"
            }), dB("buildAFactory2Game:recipeMixer", {
              cryo: kp((0, nB.K)(TB, TB.cryoMade), "")
            })]
          })
        })
      })
    }

    function Ap(BB) {
      let {
        def: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)();
      return (0, mp.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, mp.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, mp.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, mp.jsx)(Ny.e, {
              name: "bolt"
            }), dB("buildAFactory2Game:recipeCondenser", {
              power: kp((0, nB.K)(TB, TB.powerPerOp), ""),
              water: kp((0, nB.K)(TB, TB.fluidMade), "")
            })]
          })
        })
      })
    }

    function bp(BB) {
      let {
        kind: TB,
        def: dB,
        input: VB,
        tier: yB,
        noSeeds: pB = !1
      } = BB;
      const lB = String(dB.opMs / 1e3);
      return jT(dB) ? (0, mp.jsx)(Xp, {
        seconds: lB
      }) : dB.field ? (0, mp.jsx)(Wp, {
        fertilised: null !== VB
      }) : dB.table ? (0, mp.jsx)(hp, {
        tier: yB,
        seconds: lB
      }) : dB.recycles ? (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsx)(Cp, {
          tier: yB,
          seconds: lB,
          noSeeds: pB
        }), (0, mp.jsx)(Gp, {
          tier: yB,
          seconds: lB
        })]
      }) : xT(dB) ? (0, mp.jsx)(qp, {
        tier: yB,
        seconds: lB
      }) : void 0 !== dB.fluidMade ? (0, mp.jsx)(Ap, {
        def: dB
      }) : void 0 !== dB.cryoMade ? (0, mp.jsx)(jp, {
        def: dB
      }) : void 0 !== dB.powerMade ? (0, mp.jsx)(xp, {
        def: dB,
        seconds: lB
      }) : (0, mp.jsx)(np, {
        kind: TB,
        input: VB,
        tier: yB,
        seconds: lB
      })
    }

    function np(BB) {
      let {
        kind: TB,
        input: dB,
        tier: VB,
        seconds: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)(), lB = qy(), JB = Rp(function(BB) {
        const TB = new Map;
        for (const yB of BB) {
          var dB, VB;
          const BB = [yB.output, yB.outputAmount, yB.inputAmount, null === (dB = yB.bonus) || void 0 === dB ? void 0 : dB.item, null === (VB = yB.bonus) || void 0 === VB ? void 0 : VB.chance].join("|"),
            pB = TB.get(BB);
          pB ? pB.inputs.push(yB.input) : TB.set(BB, {
            inputs: [yB.input],
            inputAmount: yB.inputAmount,
            output: yB.output,
            outputAmount: yB.outputAmount,
            bonus: yB.bonus
          })
        }
        return [...TB.values()]
      }(Pp(TB, VB).filter(Vd)), (BB => Ip(BB.output))).filter((BB => Qp(Ip(BB.output), VB, Sp(BB.output))));
      return (0, mp.jsx)(wp, {
        title: pB("buildAFactory2Game:recipesEach", {
          seconds: yB
        }),
        count: JB.length,
        children: JB.map((BB => {
          const TB = null !== dB && BB.inputs.includes(dB),
            yB = BB.inputs.length > 3 ? [TB ? dB : BB.inputs[0]] : BB.inputs,
            JB = Ip(BB.output) > VB ? Ip(BB.output) : null,
            YB = null === JB && lB.has(BB.output);
          return (0, mp.jsxs)("li", {
            className: Hy()("Baf2Recipe", {
              InUse: TB,
              Locked: null !== JB,
              Far: ip(JB, VB)
            }),
            children: [YB && (0, mp.jsx)(zp, {}), yB.map(((TB, dB) => (0, mp.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [dB > 0 && (0, mp.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, mp.jsx)(tp, {
                item: TB,
                amount: BB.inputAmount
              })]
            }, TB))), yB.length < BB.inputs.length && (0, mp.jsx)(fp, {
              label: pB("buildAFactory2Game:recipeMore", {
                count: String(BB.inputs.length - yB.length)
              }),
              names: BB.inputs.filter((BB => !yB.includes(BB))).map((BB => by(pB, BB)))
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, mp.jsx)(tp, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeName",
              children: by(pB, BB.output)
            }), BB.bonus && (0, mp.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [pB("buildAFactory2Game:recipeBonus", {
                percent: Np(BB.bonus.chance)
              }), (0, mp.jsx)(tp, {
                item: BB.bonus.item,
                amount: 1
              })]
            }), null !== JB && (0, mp.jsx)(sp, {
              tier: JB
            })]
          }, `${BB.output}|${BB.inputs[0]}`)
        }))
      })
    }

    function ep(BB) {
      let {
        taught: TB,
        tier: dB
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = qy(), pB = Rp(Object.values(XT), (BB => BB.tier)).filter((BB => Qp(BB.tier, dB)));
      return (0, mp.jsx)(wp, {
        title: VB("buildAFactory2Game:benchCanMake"),
        count: pB.length,
        startOpen: !1,
        children: pB.map((BB => {
          const pB = BB.tier > dB,
            lB = !pB && yB.has(BB.output);
          return (0, mp.jsxs)("li", {
            className: Hy()("Baf2Recipe", {
              InUse: BB.output === TB,
              Locked: pB,
              Far: ip(pB ? BB.tier : null, dB)
            }),
            children: [lB && (0, mp.jsx)(zp, {}), (0, mp.jsx)(tp, {
              item: BB.output,
              amount: BB.outputAmount
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeName",
              children: by(VB, BB.output)
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), BB.inputs.map((BB => (0, mp.jsx)(tp, {
              item: BB.item,
              amount: BB.amount
            }, BB.item))), pB && (0, mp.jsx)(sp, {
              tier: BB.tier
            })]
          }, BB.output)
        }))
      })
    }
    var Bl, Tl, dl, Vl, yl;
    const pl = zT.Generator,
      ll = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      Jl = 1e3 * (null !== (Bl = pl.powerMade) && void 0 !== Bl ? Bl : 0) / pl.opMs,
      Yl = Math.min(...(null !== (Tl = pl.fuels) && void 0 !== Tl ? Tl : []).map((BB => nT[BB]))) / 1e3,
      gl = zT["Volt Engine"],
      ol = 1e3 * (null !== (dl = gl.powerMade) && void 0 !== dl ? dl : 0) / gl.opMs,
      kl = nT[null !== (Vl = null === (yl = gl.fuels) || void 0 === yl ? void 0 : yl[0]) && void 0 !== Vl ? Vl : ""] / 1e3;

    function Ll(BB) {
      let {
        item: TB,
        label: dB,
        value: VB,
        note: yB,
        dim: pB
      } = BB;
      return (0, mp.jsxs)("li", {
        className: Hy()("Baf2PowerRow", {
          Dim: pB
        }),
        children: [(0, mp.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: TB,
            amount: 0
          })
        }), (0, mp.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, mp.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: dB
          }), yB && (0, mp.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: yB
          })]
        }), (0, mp.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: VB
        })]
      })
    }

    function Ol(BB, TB, dB, VB) {
      var yB;
      const pB = void 0 === VB ? zT[BB] : function(BB, TB) {
          if (null === TB) return BB;
          let dB = qB.get(TB);
          return dB || (dB = {
            ...BB,
            powerPerOp: GB(BB, TB),
            farmMob: TB
          }, qB.set(TB, dB)), dB
        }(zT[BB], VB),
        lB = TB && pB.couplable ? ST(pB, dB) : pB;
      return 1e3 * (null !== (yB = lB.powerPerOp) && void 0 !== yB ? yB : 0) / lB.opMs
    }

    function Dl(BB) {
      var TB, dB, VB, yB, pB, lB, JB, YB;
      let {
        message: gB
      } = BB;
      const {
        t: oB
      } = (0, iy.z)(), kB = (BB, TB) => oB("buildAFactory2Game:powerPerSecond", {
        rate: kp(BB, TB)
      }), [LB, OB] = gB.baf2PowerGenerators, DB = gB.baf2PowerGeneratorFuel, uB = gB.baf2PowerSunPanels, HB = null !== (TB = gB.baf2PowerSunShare) && void 0 !== TB ? TB : 1, EB = gB.baf2PowerVaults, vB = gB.baf2PowerUsers, [mB, iB] = null !== (dB = gB.baf2PowerEngines) && void 0 !== dB ? dB : [0, 0], NB = null !== (VB = gB.baf2PowerEngineCells) && void 0 !== VB ? VB : 0, tB = null !== (yB = gB.baf2PowerPads) && void 0 !== yB ? yB : 0, fB = null !== (pB = gB.baf2PowerCharge) && void 0 !== pB ? pB : 0, [sB, MB] = null !== (lB = gB.baf2PowerReactors) && void 0 !== lB ? lB : [0, 0], [zB, wB] = null !== (JB = gB.baf2PowerBatteries) && void 0 !== JB ? JB : [0, 0];
      let UB = oB("buildAFactory2Game:powerEngineCells", {
        amount: String(NB)
      });
      NB > 0 && iB > 0 && (UB = oB("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(NB),
        time: Dp(oB, NB * kl / iB)
      }));
      let FB = oB("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(DB)
      });
      DB > 0 && OB > 0 && (FB = oB("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(DB),
        time: Dp(oB, DB * Yl / OB)
      }));
      const KB = LB + mB + uB + sB;
      return (0, mp.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, mp.jsxs)("section", {
          children: [(0, mp.jsxs)("h3", {
            children: [oB("buildAFactory2Game:powerMaking"), (0, mp.jsx)("span", {
              children: kB(gB.baf2PowerMadePerS, "+")
            })]
          }), (0, mp.jsxs)("ul", {
            children: [0 === KB && (0, mp.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: oB("buildAFactory2Game:powerNoMakers")
            }), LB > 0 && (0, mp.jsx)(Ll, {
              item: "Generator",
              label: `${by(oB,"Generator")} \xd7${LB}`,
              note: `${oB("buildAFactory2Game:powerRunning",{amount:String(OB)})} \xb7 ${FB}`,
              value: kB(OB * Jl, "+"),
              dim: 0 === OB
            }), mB > 0 && (0, mp.jsx)(Ll, {
              item: "Volt Engine",
              label: `${by(oB,"Volt Engine")} \xd7${mB}`,
              note: `${oB("buildAFactory2Game:powerRunning",{amount:String(iB)})} \xb7 ${UB}`,
              value: kB(iB * ol, "+"),
              dim: 0 === iB
            }), uB > 0 && (0, mp.jsx)(Ll, {
              item: "Solar Panel",
              label: `${by(oB,"Solar Panel")} \xd7${uB}`,
              note: oB(HB < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: kB(4 * uB * HB, "+")
            }), sB > 0 && (0, mp.jsx)(Ll, {
              item: "Reactor Frame",
              label: `${oB("buildAFactory2Game:powerReactors")} \xd7${sB}`,
              note: oB("buildAFactory2Game:powerRunning", {
                amount: String(MB)
              }),
              value: kB(null !== (YB = gB.baf2PowerReactorPerS) && void 0 !== YB ? YB : 0, "+"),
              dim: 0 === MB
            })]
          })]
        }), (0, mp.jsxs)("section", {
          children: [(0, mp.jsxs)("h3", {
            children: [oB("buildAFactory2Game:powerStorage"), (0, mp.jsx)("span", {
              children: bB(gB.baf2PowerCap)
            })]
          }), (EB > 0 || zB > 0) && (0, mp.jsxs)("ul", {
            children: [EB > 0 && (0, mp.jsx)(Ll, {
              item: "Charge Vault",
              label: `${by(oB,"Charge Vault")} \xd7${EB}`,
              value: `+${bB(8e3*EB)}`
            }), zB > 0 && (0, mp.jsx)(Ll, {
              item: "Battery Cell",
              label: `${oB("buildAFactory2Game:powerBatteries")} \xd7${zB}`,
              value: `+${bB(wB)}`
            })]
          })]
        }), (0, mp.jsxs)("section", {
          children: [(0, mp.jsxs)("h3", {
            children: [oB("buildAFactory2Game:powerUsing"), (0, mp.jsx)("span", {
              children: kB(gB.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, mp.jsxs)("ul", {
            children: [0 === vB.length && 0 === tB && 0 === fB && (0, mp.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: oB("buildAFactory2Game:powerNoUsers")
            }), vB.map((BB => {
              let [TB, dB, VB, yB, pB = 1, lB] = BB, JB = dB ? oB(ll[pB - 1], {
                name: by(oB, TB)
              }) : by(oB, TB);
              return void 0 !== lB && (JB = oB("buildAFactory2Game:powerFarmName", {
                name: JB,
                mob: oB(WB(lB))
              })), (0, mp.jsx)(Ll, {
                item: TB,
                label: `${JB} \xd7${VB}`,
                note: oB("buildAFactory2Game:powerRunning", {
                  amount: String(yB)
                }),
                value: yB > 0 ? kB(yB * Ol(TB, dB, pB, lB), "\u2212") : oB("buildAFactory2Game:powerIdle"),
                dim: 0 === yB
              }, `${TB}|${dB}|${pB}|${lB}`)
            })), tB > 0 && (0, mp.jsx)(Ll, {
              item: "Charging Pad",
              label: `${by(oB,"Charging Pad")} \xd7${tB}`,
              value: oB("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), fB > 0 && (0, mp.jsx)(Ll, {
              item: "Homestead Core",
              label: oB("buildAFactory2Game:powerCharge"),
              value: kB(fB, "\u2212")
            }), gB.baf2PowerStarved > 0 && (0, mp.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, mp.jsx)(Ny.e, {
                name: "triangle-exclamation"
              }), oB("buildAFactory2Game:powerStarved", {
                amount: String(gB.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var ul = dB(3942),
      Hl = dB(1324);
    class El {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(BB) {
        this.message = BB;
        for (const TB of this.listeners) TB()
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
    class vl extends El {}

    function ml(BB, TB) {
      const dB = () => {
          const dB = BB.get();
          if (!dB || !TB) return dB;
          const [VB, yB, pB] = dB.baf2PowerAt;
          return VB === TB[0] && yB === TB[1] && pB === TB[2] ? dB : null
        },
        [yB, pB] = (0, VB.useState)(dB);
      return (0, VB.useEffect)((() => (pB(dB()), BB.subscribe((() => {
        pB(dB())
      })))), [BB, ...null !== TB && void 0 !== TB ? TB : []]), yB
    }

    function il(BB) {
      return {
        stored: BB.baf2PowerStored,
        cap: BB.baf2PowerCap,
        madePerS: BB.baf2PowerMadePerS,
        usedPerS: BB.baf2PowerUsedPerS
      }
    }

    function Nl(BB) {
      let {
        stored: TB,
        cap: dB
      } = BB;
      return (0, mp.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, mp.jsx)("div", {
          style: {
            width: `${Math.min(100,100*TB/Math.max(1,dB))}%`
          }
        })
      })
    }

    function tl(BB) {
      let {
        figures: TB,
        labelled: dB = !1
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = TB.madePerS - TB.usedPerS, {
        text: pB,
        draining: lB
      } = function(BB, TB) {
        let {
          stored: dB,
          cap: VB,
          madePerS: yB,
          usedPerS: pB
        } = TB;
        const lB = yB - pB;
        return dB >= VB ? {
          text: BB("buildAFactory2Game:powerFull"),
          draining: !1
        } : lB > .05 ? {
          text: BB("buildAFactory2Game:powerFullIn", {
            time: Dp(BB, (VB - dB) / lB)
          }),
          draining: !1
        } : lB < -.05 ? {
          text: BB("buildAFactory2Game:powerEmptyIn", {
            time: Dp(BB, dB / -lB)
          }),
          draining: !0
        } : {
          text: BB("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(VB, TB);
      return (0, mp.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, mp.jsx)(Nl, {
          stored: TB.stored,
          cap: TB.cap
        }), (0, mp.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, mp.jsx)("span", {
            children: VB(dB ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: bB(TB.stored),
              cap: bB(TB.cap)
            })
          }), (0, mp.jsxs)("span", {
            className: Hy()("Baf2PowerNet", {
              Draining: lB
            }),
            children: [VB("buildAFactory2Game:powerPerSecond", {
              rate: kp(Math.abs(yB), yB < 0 ? "\u2212" : "+")
            }), " \xb7 ", pB]
          })]
        })]
      })
    }

    function fl(BB) {
      let {
        stored: TB,
        cap: dB,
        rates: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)();
      return VB ? (0, mp.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mp.jsx)(tl, {
          figures: {
            stored: TB,
            cap: dB,
            madePerS: VB[0],
            usedPerS: VB[1]
          },
          labelled: !0
        })
      }) : (0, mp.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, mp.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, mp.jsx)(Nl, {
            stored: TB,
            cap: dB
          }), (0, mp.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, mp.jsx)("span", {
              children: yB("buildAFactory2Game:powerStoredLabelled", {
                stored: bB(TB),
                cap: bB(dB)
              })
            })
          })]
        })
      })
    }

    function sl(BB) {
      let {
        store: TB,
        close: dB
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = ml(TB);
      return (0, mp.jsx)(ul.b, {
        close: dB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              children: [(0, mp.jsx)("h2", {
                id: "baf2PowerTitle",
                children: VB("buildAFactory2Game:powerTitle")
              }), (0, mp.jsx)("p", {
                children: VB("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, mp.jsx)(Hl.i, {
              onClick: dB
            })]
          }), yB && (0, mp.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, mp.jsx)(tl, {
              figures: il(yB)
            }), (0, mp.jsx)(Dl, {
              message: yB
            })]
          })]
        })
      })
    }

    function Ml(BB) {
      var TB;
      let {
        kind: dB,
        def: yB,
        ad: pB,
        power: lB,
        stored: JB,
        cap: YB
      } = BB;
      const {
        t: gB
      } = (0, iy.z)(), oB = ml(lB, pB), [kB, LB] = (0, VB.useState)(!1);
      return (0, mp.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, mp.jsx)(bp, {
          kind: dB,
          def: yB,
          input: null,
          tier: null !== (TB = null === oB || void 0 === oB ? void 0 : oB.baf2PowerTier) && void 0 !== TB ? TB : 1
        }), (0, mp.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: gB("buildAFactory2Game:powerTitle")
        }), oB && (0, mp.jsx)(tl, {
          figures: il(oB)
        }), !oB && (0, mp.jsx)(fl, {
          stored: JB,
          cap: YB,
          rates: null
        }), oB && (0, mp.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            LB(!kB)
          },
          "aria-expanded": kB,
          children: gB(kB ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), oB && kB && (0, mp.jsx)(Dl, {
          message: oB
        })]
      })
    }
    const zl = 2500,
      wl = 17500,
      Ul = `${NB} `;
    const Fl = ["plan", "throttle"];

    function Kl(BB) {
      if (BB.startsWith(`${mT} `)) return BB.slice(0, BB.lastIndexOf(" "));
      const TB = BB.split(" ");
      return TB[0] === VT && Fl.includes(TB[4]) ? TB.slice(0, 5).join(" ") : null
    }
    class rl {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = BB, this.now = TB, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.ZyB = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = TB()
      }
      enqueue(BB) {
        this.queue(BB, this.nextTicket());
        const TB = this.ZyB + this.pending.length;
        return this.flush(), TB
      }
      track(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const dB = this.nextTicket();
        if (!TB.urgent) return this.queue(BB, dB), this.flush(), dB;
        const {
          supersedes: VB
        } = TB;
        for (let pB = this.pending.length - 1; pB >= this.urgent; pB--) {
          const TB = this.pending[pB];
          (TB.command === BB || null !== VB && void 0 !== VB && VB(TB.command)) && (this.pending.splice(pB, 1), this.markLeft(TB.tickets))
        }
        const yB = this.pending.findIndex((TB => {
          let {
            command: dB
          } = TB;
          return dB === BB
        }));
        return -1 !== yB ? this.pending[yB].tickets.push(dB) : (this.pending.splice(this.urgent, 0, {
          command: BB,
          tickets: [dB]
        }), this.urgent += 1), this.flush(), dB
      }
      leftAt(BB) {
        const TB = this.leftTimes.get(BB);
        return void 0 !== TB ? TB : this.pending.some((TB => {
          let {
            tickets: dB
          } = TB;
          return dB.includes(BB)
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
        var TB;
        return (null === (TB = this.pending.at(-1)) || void 0 === TB ? void 0 : TB.command) === BB
      }
      sent() {
        return this.ZyB
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
        const TB = this.now();
        for (const dB of BB) this.leftTimes.set(dB, TB);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(BB, TB) {
        const dB = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === dB || void 0 === dB ? void 0 : dB.command) === BB) return void(! function(BB) {
          return BB === tB || BB.startsWith(`${iB} `) || BB.startsWith(`${aB} `)
        }(BB) ? dB.tickets.push(TB) : (this.pending.pop(), this.markLeft([...dB.tickets, TB])));
        const VB = void 0 === dB ? null : function(BB, TB) {
          const dB = `${eB} `;
          if (!BB.startsWith(dB) || !TB.startsWith(dB)) return null;
          const VB = dT(BB.slice(dB.length)),
            yB = dT(TB.slice(dB.length));
          return VB && yB && VB.item === yB.item ? TT(yB.seq, function(BB, TB) {
            const dB = BB => "number" === typeof BB ? BB : "one" === BB ? 1 : 99;
            return "fill" === BB || "fill" === TB ? "fill" : dB(BB) + dB(TB)
          }(VB.mode, yB.mode), yB.item) : null
        }(dB.command, BB);
        if (null !== VB && void 0 !== dB) return dB.command = VB, void dB.tickets.push(TB);
        const yB = Kl(BB);
        if (null !== yB && void 0 !== dB && Kl(dB.command) === yB) return dB.command = BB, void dB.tickets.push(TB);
        if (null !== dB && void 0 !== dB && dB.command.startsWith(Ul) && BB.startsWith(Ul)) {
          const VB = BB.slice(Ul.length);
          if (dB.command.slice(Ul.length).split(",").includes(VB)) return void dB.tickets.push(TB);
          const yB = `${dB.command},${VB}`;
          if (yB.length <= 119) return dB.command = yB, void dB.tickets.push(TB)
        }
        this.pending.push({
          command: BB,
          tickets: [TB]
        })
      }
      flush() {
        const BB = this.now();
        for (this.tokens = Math.min(5, this.tokens + (BB - this.refilledAt) / zl), this.refilledAt = BB; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.ZyB += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: BB,
            tickets: TB
          } = this.pending.shift();
          this.markLeft(TB), this.send(BB)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * zl)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class Il {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new rl(BB, TB)
      }
      send(BB) {
        return this.queue.enqueue(BB)
      }
      sent() {
        return this.queue.sent()
      }
      track(BB, TB) {
        return this.queue.track(BB, TB)
      }
      leftAt(BB) {
        return this.queue.leftAt(BB)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(BB) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = TB, this.send(BB), this.islandEdits.count
      }
      syncIslandEdits(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: dB
        } = this, VB = TB - dB.lastAtMs < wl;
        dB.count = VB ? Math.max(dB.count, BB) : BB
      }
      clear() {
        this.queue.clear()
      }
    }
    const cl = (0, VB.createContext)(null);

    function Sl() {
      const BB = (0, VB.useContext)(cl);
      if (!BB) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return BB
    }

    function Pl(BB, TB) {
      return null !== TB && void 0 !== TB ? TB : 1 === BB
    }

    function Ql(BB, TB) {
      return BB.every((BB => {
        var dB;
        let [VB, , yB] = BB;
        return !Pl(yB, null === (dB = TB.get(VB)) || void 0 === dB ? void 0 : dB.RO)
      }))
    }

    function Rl(BB, TB, dB) {
      if (0 === BB.size) return BB;
      const VB = new Map(BB);
      for (const [yB, pB] of BB) {
        const BB = TB.find((BB => {
          let [TB] = BB;
          return TB === yB
        }));
        (!BB || pB.RO === (1 === BB[2]) || pB.atMs < dB) && VB.delete(yB)
      }
      return VB
    }

    function al(BB) {
      var TB;
      let {
        ad: dB,
        input: yB,
        drops: pB,
        seconds: lB
      } = BB;
      const {
        t: JB
      } = (0, iy.z)(), YB = Sl(), [gB, oB] = (0, VB.useState)(new Map);
      (0, VB.useEffect)((() => {
        pB && oB((BB => Rl(BB, pB, Date.now() - wl)))
      }), [pB]), (0, VB.useEffect)((() => {
        const BB = function(BB, TB) {
          let dB = null;
          for (const {
              atMs: VB
            }
            of BB.values()) dB = null === dB ? VB : Math.min(dB, VB);
          return null === dB ? null : dB + TB
        }(gB, wl);
        if (null === BB || !pB) return;
        const TB = setTimeout((() => {
          oB((BB => Rl(BB, pB, Date.now() - wl)))
        }), Math.max(0, BB - Date.now()) + 1);
        return () => {
          clearTimeout(TB)
        }
      }), [gB, pB]);
      const kB = hB(yB),
        LB = null !== kB && null !== pB && Ql(pB, gB),
        OB = function(BB, TB, dB) {
          return null === BB || null === TB || Ql(TB, dB) ? 0 : RB[PB[BB]]
        }(kB, pB, gB);
      return (0, mp.jsxs)(wp, {
        title: JB("buildAFactory2Game:farmDropsTitle", {
          seconds: lB
        }),
        count: null !== (TB = null === pB || void 0 === pB ? void 0 : pB.length) && void 0 !== TB ? TB : 0,
        children: [OB > 0 && (0, mp.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: JB("buildAFactory2Game:farmDropsPower", {
            power: String(OB)
          })
        }), (null === kB || !pB) && (0, mp.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: JB("buildAFactory2Game:farmDropsEmpty")
        }), LB && (0, mp.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: JB("buildAFactory2Game:farmDropsAllVoided")
        }), null !== kB && (null === pB || void 0 === pB ? void 0 : pB.map((BB => {
          var TB;
          let [VB, yB, pB] = BB;
          const lB = yB < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            kB = Pl(pB, null === (TB = gB.get(VB)) || void 0 === TB ? void 0 : TB.RO);
          return (0, mp.jsxs)("li", {
            className: Hy()("Baf2Recipe Baf2FarmDrop", {
              Voided: !kB
            }),
            children: [(0, mp.jsx)(tp, {
              item: VB,
              amount: 1
            }), (0, mp.jsx)("span", {
              className: "Baf2RecipeName",
              children: by(JB, VB)
            }), (0, mp.jsx)("span", {
              className: "Baf2FarmRate",
              children: JB(lB, {
                amount: String(yB)
              })
            }), (0, mp.jsx)("button", {
              type: "button",
              className: Hy()("Baf2FarmToggle SmallTextBold", {
                Kept: kB
              }),
              "aria-pressed": kB,
              onClick: () => {
                oB(new Map(gB).set(VB, {
                  RO: !kB,
                  atMs: Date.now()
                })), YB.send(function(BB, TB, dB, VB) {
                  return `${aB} ${BB} ${TB} ${dB} ${VB}`
                }(dB[0], dB[1], dB[2], VB))
              },
              children: JB(kB ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, VB)
        })))]
      })
    }
    var Zl;
    const Xl = String(null !== (Zl = zT.Synthesizer.waterPerOp) && void 0 !== Zl ? Zl : 0);

    function Wl(BB) {
      let {
        ad: TB,
        taught: dB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), pB = Sl(), [lB, JB] = (0, VB.useState)(null);
      (0, VB.useEffect)((() => {
        null !== lB && dB === lB && JB(null)
      }), [lB, dB]);
      const YB = null !== lB && void 0 !== lB ? lB : dB;
      let gB = yB("buildAFactory2Game:synthPick");
      return null !== YB && (gB = yB("buildAFactory2Game:synthGrows", {
        name: by(yB, YB),
        input: by(yB, HT),
        water: Xl
      })), (0, mp.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, mp.jsx)("div", {
          className: Hy()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === YB
          }),
          children: gB
        }), (0, mp.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: ET.map(((BB, dB) => {
            const VB = by(yB, BB),
              lB = BB === YB;
            return (0, mp.jsx)("li", {
              children: (0, mp.jsx)("button", {
                type: "button",
                className: Hy()("Baf2SynthTile", {
                  Selected: lB
                }),
                title: VB,
                "aria-label": VB,
                "aria-pressed": lB,
                onClick: () => {
                  lB || (JB(BB), pB.send(`${mT} ${TB[0]} ${TB[1]} ${TB[2]} ${dB}`))
                },
                children: (0, mp.jsx)(ty.c, {
                  itemName: BB,
                  amount: 0
                })
              })
            }, BB)
          }))
        })]
      })
    }
    const hl = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Cl(BB) {
      let {
        kind: TB,
        tier: dB,
        coupled: VB,
        level: yB,
        slot: pB
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), YB = AB(UT);
      if (!VB && null !== dB && dB < YB) return (0, mp.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, mp.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, mp.jsx)(Ny.e, {
            name: "lock"
          })
        }), (0, mp.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: lB("buildAFactory2Game:upgradeLocked")
        }), (0, mp.jsx)("span", {
          className: "Baf2TierTag",
          children: lB("buildAFactory2Game:tierTag", {
            tier: String(YB)
          })
        })]
      });
      const gB = function(BB, TB) {
          if (JB() && "Crusher" !== BB && null !== TB) {
            if (Gl(KT, TB)) return {
              item: KT,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Gl(FT, TB)) return {
              item: FT,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: UT,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(TB, dB),
        oB = lB(VB ? hl[yB - 1] : gB.emptyKey),
        kB = null !== dB ? function(BB, TB, dB, VB) {
          if (!JB() || !dB || "Crusher" === BB || TB < 10) return null;
          const yB = AB(KT);
          if (VB < 3 && yB > 1 && (2 === VB || TB >= yB)) return {
            tier: yB,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const pB = AB(FT);
          if (1 === VB && pB > 1) return {
            tier: pB,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(TB, dB, VB, yB) : null;
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2UpgradeSocket", {
          Fitted: VB
        }),
        children: [(0, mp.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [VB && pB, !VB && (0, mp.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, mp.jsx)(ty.c, {
              itemName: gB.item,
              amount: 0
            })
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, mp.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: lB("buildAFactory2Game:upgradeTitle")
          }), (0, mp.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: oB
          }), VB && yB >= 2 && "Crusher" === TB && (0, mp.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: lB("buildAFactory2Game:couplerCrusherHint")
          }), kB && null !== dB && dB < kB.tier && (0, mp.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, mp.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, mp.jsx)(Ny.e, {
                name: "lock"
              })
            }), lB(kB.lockedKey), (0, mp.jsx)("span", {
              className: "Baf2TierTag",
              children: lB("buildAFactory2Game:tierTag", {
                tier: String(kB.tier)
              })
            })]
          }), kB && null !== dB && dB >= kB.tier && (0, mp.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: lB(kB.nextKey)
          })]
        })]
      })
    }

    function Gl(BB, TB) {
      const dB = AB(BB);
      return dB > 1 && TB >= dB
    }
    var ql = dB(35984);
    const xl = (0, nB.K)(zT.Condenser, zT.Condenser.fluidMade),
      jl = .05;
    class Al extends El {}

    function bl(BB) {
      return kp(BB, "")
    }

    function nl(BB, TB, dB) {
      return BB(TB ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: dB
      })
    }

    function el(BB, TB, dB, VB) {
      return dB <= jl && VB <= jl ? null : VB <= jl || dB <= jl ? nl(BB, TB, VB <= jl ? kp(dB, "+") : kp(VB, "\u2212")) : BB(TB ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: bl(dB),
        used: bl(VB)
      })
    }

    function BJ(BB, TB) {
      return Math.min(100, 100 * BB / Math.max(1, TB))
    }

    function TJ(BB) {
      let {
        stored: TB,
        cap: dB,
        netPerS: VB,
        rates: yB,
        cryo: pB
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), JB = function(BB, TB, dB, VB) {
        return dB <= 0 ? BB("buildAFactory2Game:waterNoStorage") : TB >= dB ? BB("buildAFactory2Game:powerFull") : VB > jl ? BB("buildAFactory2Game:powerFullIn", {
          time: Dp(BB, (dB - TB) / VB)
        }) : VB < -.05 ? TB <= 0 ? BB("buildAFactory2Game:waterEmpty") : BB("buildAFactory2Game:powerEmptyIn", {
          time: Dp(BB, TB / -VB)
        }) : BB("buildAFactory2Game:powerSteady")
      }(lB, TB, dB, VB), YB = dB > 0 && TB < dB && Math.abs(VB) <= jl, gB = lB(pB ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), oB = null !== yB ? `${yB} \xb7 ${JB}` : YB ? gB : `${gB} \xb7 ${JB}`;
      return (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, mp.jsx)("div", {
            style: {
              width: `${BJ(TB,dB)}%`
            }
          })
        }), (0, mp.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, mp.jsx)("span", {
            children: dB > 0 && lB("buildAFactory2Game:powerStored", {
              stored: (0, nB.W)(TB),
              cap: (0, nB.W)(dB)
            })
          }), (0, mp.jsx)("span", {
            className: Hy()("Baf2WaterNet", {
              Draining: VB < -.05
            }),
            children: oB
          })]
        })]
      })
    }

    function dJ(BB) {
      let {
        water: TB,
        at: dB,
        side: VB = null
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), pB = Sl(), [lB, JB, YB] = TB;
      return (0, mp.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, mp.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, mp.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: yB(null === VB ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${VB}`)
          }), (0, mp.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              pB.send(`${nB.E} ${dB[0]} ${dB[1]} ${dB[2]}${"cryoOut"===VB?" cryo":""}`)
            },
            children: yB("buildAFactory2Game:waterDetails")
          })]
        }), (0, mp.jsx)(TJ, {
          stored: lB,
          cap: JB,
          netPerS: YB,
          rates: nl(yB, "cryoOut" === VB, kp(Math.abs(YB), YB < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === VB
        })]
      })
    }

    function VJ(BB, TB) {
      var dB, VB, yB;
      const pB = !0 === TB.baf2WaterCryo,
        lB = null !== (dB = null === (VB = TB.baf2WaterMakers.find((BB => BB[0] === (pB ? nB.c : "Condenser")))) || void 0 === VB ? void 0 : VB[1]) && void 0 !== dB ? dB : 0,
        JB = [],
        YB = (TB, dB, VB) => {
          TB > 0 && JB.push(BB(1 === TB ? dB : VB, {
            count: String(TB)
          }))
        };
      return pB ? YB(lB, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : YB(lB, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), YB(null !== (yB = TB.baf2WaterPipes) && void 0 !== yB ? yB : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), YB(TB.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), JB.join(" \xb7 ")
    }

    function yJ(BB, TB) {
      if (!0 === TB.baf2WaterCryo) return function(BB, TB) {
        const dB = zT[nB.c];
        switch (TB.baf2WaterThis) {
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
            var VB;
            const [yB, pB] = null !== (VB = TB.baf2WaterThisRates) && void 0 !== VB ? VB : [(0, nB.K)(dB, dB.cryoMade), (0, nB.K)(dB, dB.powerPerOp)];
            return !0 === TB.baf2WaterDriven ? {
              text: BB("buildAFactory2Game:cryoThisMixerDriven", {
                rate: bl(yB)
              }),
              bad: !1
            } : {
              text: BB("buildAFactory2Game:cryoThisMixer", {
                rate: bl(yB),
                power: bl(pB)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: BB("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(BB, TB);
      const dB = !0 === TB.baf2WaterDriven,
        VB = zT.Condenser;
      switch (TB.baf2WaterThis) {
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
              tank: (0, nB.W)(nB.v),
              cap: (0, nB.W)(TB.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var yB;
          const [pB, lB] = null !== (yB = TB.baf2WaterThisRates) && void 0 !== yB ? yB : [xl, (0, nB.K)(VB, VB.powerPerOp)];
          return dB ? {
            text: BB("buildAFactory2Game:waterThisCondenserDriven", {
              rate: bl(pB)
            }),
            bad: !1
          } : {
            text: BB("buildAFactory2Game:waterThisCondenser", {
              rate: bl(pB),
              power: bl(lB)
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

    function pJ(BB, TB) {
      const dB = TB.baf2WaterMakers.some((BB => !0 === BB[5]));
      if (!0 === TB.baf2WaterCryo) {
        const VB = TB.baf2WaterUsedPerS - TB.baf2WaterMadePerS,
          yB = dB || VB <= jl ? 0 : (0, nB.I)(VB);
        return 0 === yB ? null : yB > 1 ? BB("buildAFactory2Game:cryoNextMixers", {
          mixers: String(yB)
        }) : BB("buildAFactory2Game:cryoNextOne")
      }
      const VB = dB ? null : function(BB, TB) {
        const dB = TB - BB;
        return dB <= jl ? null : Math.ceil(dB / xl)
      }(TB.baf2WaterMadePerS, TB.baf2WaterUsedPerS);
      return null === VB ? null : VB > 1 ? BB("buildAFactory2Game:waterNextCondensers", {
        condensers: String(VB)
      }) : BB("buildAFactory2Game:waterNextOne")
    }

    function lJ(BB) {
      let {
        item: TB,
        label: dB,
        note: VB,
        value: yB,
        dim: pB,
        bad: lB
      } = BB;
      return (0, mp.jsxs)("li", {
        className: Hy()("Baf2WaterRow", {
          Dim: pB,
          Bad: lB
        }),
        children: [(0, mp.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: TB,
            amount: 0
          })
        }), (0, mp.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, mp.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: dB
          }), VB && (0, mp.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: VB
          })]
        }), (0, mp.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: yB
        })]
      })
    }

    function JJ(BB) {
      return ql.k[BB] ? BB : "Reactor Port"
    }

    function YJ(BB) {
      let {
        message: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), VB = !0 === TB.baf2WaterCryo, yB = (BB, TB) => nl(dB, VB, kp(BB, TB));
      return (0, mp.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, mp.jsxs)("section", {
          children: [(0, mp.jsxs)("h3", {
            children: [dB("buildAFactory2Game:waterMakes"), (0, mp.jsx)("span", {
              children: yB(TB.baf2WaterMadePerS, "+")
            })]
          }), (0, mp.jsxs)("ul", {
            children: [0 === TB.baf2WaterMakers.length && (0, mp.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: dB(VB ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), TB.baf2WaterMakers.map((BB => {
              let [TB, VB, pB, lB, JB, YB] = BB;
              const gB = dB("buildAFactory2Game:powerRunning", {
                amount: String(pB)
              });
              let oB = JB > 0 ? dB("buildAFactory2Game:waterMakerPower", {
                running: gB,
                power: bl(JB)
              }) : gB;
              return YB && (oB = dB(0 === pB && lB <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, mp.jsx)(lJ, {
                item: TB,
                label: `${by(dB,TB)} \xd7${VB}`,
                note: oB,
                value: pB > 0 || YB && lB > 0 ? yB(lB, "+") : dB("buildAFactory2Game:powerIdle"),
                dim: 0 === pB && !YB,
                bad: YB
              }, TB)
            }))]
          })]
        }), (0, mp.jsxs)("section", {
          children: [(0, mp.jsxs)("h3", {
            children: [dB("buildAFactory2Game:waterUses"), (0, mp.jsx)("span", {
              children: yB(TB.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, mp.jsxs)("ul", {
            children: [0 === TB.baf2WaterUsers.length && (0, mp.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: dB(VB ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), TB.baf2WaterUsers.map((BB => {
              let [TB, VB, pB, lB] = BB;
              const JB = ql.k[TB] ? by(dB, TB) : TB;
              return (0, mp.jsx)(lJ, {
                item: JJ(TB),
                label: VB > 1 ? `${JB} \xd7${VB}` : JB,
                note: lB ? dB("buildAFactory2Game:waterPortFirst") : void 0,
                value: pB > 0 ? yB(pB, "\u2212") : dB("buildAFactory2Game:powerIdle"),
                dim: 0 === pB
              }, TB)
            }))]
          })]
        })]
      })
    }

    function gJ(BB) {
      var TB, dB, yB, pB, lB;
      let {
        store: JB,
        close: YB
      } = BB;
      const {
        t: gB
      } = (0, iy.z)(), oB = function(BB) {
        const [TB, dB] = (0, VB.useState)((() => BB.get()));
        return (0, VB.useEffect)((() => (dB(BB.get()), BB.subscribe((() => {
          dB(BB.get())
        })))), [BB]), TB
      }(JB), kB = null !== (TB = null === oB || void 0 === oB ? void 0 : oB.baf2WaterStored) && void 0 !== TB ? TB : 0, LB = null !== (dB = null === oB || void 0 === oB ? void 0 : oB.baf2WaterCap) && void 0 !== dB ? dB : 0, OB = null !== (yB = null === oB || void 0 === oB ? void 0 : oB.baf2WaterMadePerS) && void 0 !== yB ? yB : 0, DB = null !== (pB = null === oB || void 0 === oB ? void 0 : oB.baf2WaterUsedPerS) && void 0 !== pB ? pB : 0, uB = null !== (lB = null === oB || void 0 === oB ? void 0 : oB.baf2WaterNetPerS) && void 0 !== lB ? lB : OB - DB, HB = oB && yJ(gB, oB), EB = oB && pJ(gB, oB), vB = !0 === (null === oB || void 0 === oB ? void 0 : oB.baf2WaterCryo);
      return (0, mp.jsx)(ul.b, {
        close: YB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== oB && LB <= 0 ? (0, mp.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, mp.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, mp.jsx)(ty.c, {
                  itemName: vB ? Jd.f : nB.l,
                  amount: 0
                })
              }), (0, mp.jsxs)("div", {
                children: [(0, mp.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: gB(vB ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), oB && (0, mp.jsx)("p", {
                  children: VJ(gB, oB)
                })]
              })]
            }), (0, mp.jsx)(Hl.i, {
              onClick: YB
            })]
          }), oB && HB && (0, mp.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, mp.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, mp.jsx)(TJ, {
                stored: kB,
                cap: LB,
                netPerS: uB,
                cryo: vB,
                rates: el(gB, vB, OB, DB)
              })
            }), (0, mp.jsx)("div", {
              className: Hy()("Baf2WaterThis", {
                Bad: HB.bad
              }),
              children: HB.text
            }), oB.baf2WaterDriven && (0, mp.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, mp.jsx)(Ny.e, {
                name: "bolt"
              }), gB(vB ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), EB && (0, mp.jsx)("p", {
              className: "Baf2WaterNext",
              children: EB
            }), (0, mp.jsx)(YJ, {
              message: oB
            })]
          })]
        })
      })
    }
    class oJ {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(BB, TB) {
        const dB = this.get(BB);
        dB && null === TB.opLeftMs && null === TB.fuelLeftMs && TB.status === dB.status ? TB = {
          ...TB,
          opLeftMs: dB.opLeftMs,
          fuelLeftMs: dB.fuelLeftMs,
          burning: dB.burning
        } : this.updates++, this.pos = BB, this.view = TB;
        for (const VB of this.listeners) VB()
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

    function kJ(BB, TB, dB, VB) {
      return "noFuel" === TB && VB && !bT(zT[BB]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === TB && !0 === (null === dB || void 0 === dB ? void 0 : dB.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === TB && !0 === (null === dB || void 0 === dB ? void 0 : dB.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === TB && !0 === (null === dB || void 0 === dB ? void 0 : dB.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === TB && !0 === (null === dB || void 0 === dB ? void 0 : dB.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : LJ(TB, dB) ? "buildAFactory2Game:machineStatus_noInputShort" : function(BB, TB) {
        const dB = zT[BB];
        if ("noFuel" === TB && void 0 !== dB.fuels) return bT(dB) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (dB.mobFarm && ("noInput" === TB || "badInput" === TB)) return `buildAFactory2Game:machineStatus_${TB}MobFarm`;
        if ("outputFull" === TB && (void 0 !== dB.table || dB.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === TB && aT(dB)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== dB.cryoMade && ("noInput" === TB || "noOutlet" === TB || "fluidFull" === TB)) return `buildAFactory2Game:machineStatus_${TB}Mixer`;
        return `buildAFactory2Game:machineStatus_${TB}`
      }(BB, TB)
    }

    function LJ(BB, TB) {
      return "noInput" === BB && null !== TB && void 0 !== TB && TB.input && TB.inputShort ? {
        input: TB.input,
        short: TB.inputShort
      } : null
    }

    function OJ(BB) {
      return Ey(BB) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== BB.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function DJ(BB) {
      const TB = (0, cB.qe)(BB);
      return `Baf2Pane Baf2Pane${TB.charAt(0).toUpperCase()}${TB.slice(1)}`
    }

    function uJ(BB, TB) {
      const [dB, yB] = (0, VB.useState)((() => BB.get(TB)));
      return (0, VB.useEffect)((() => {
        yB(BB.get(TB));
        const dB = BB.subscribe((() => {
          yB(BB.get(TB))
        }));
        return () => {
          dB(), BB.forget(TB)
        }
      }), [BB, ...TB]), dB
    }

    function HJ(BB, TB, dB, VB) {
      const yB = zT[BB],
        pB = TB && yB.couplable ? ST(yB, dB) : yB,
        lB = null !== VB && xT(pB) ? function(BB, TB) {
          var dB;
          return null !== (dB = null !== TB && xT(BB) ? Bd[TB] : void 0) && void 0 !== dB ? dB : BB.opMs
        }(pB, Td(VB)) : pB.opMs;
      return lB === pB.opMs ? pB : {
        ...pB,
        opMs: lB
      }
    }

    function EJ(BB) {
      let {
        running: TB,
        opMs: dB,
        opLeftMs: VB,
        updateCount: yB
      } = BB;
      return (0, mp.jsx)("div", {
        className: Hy()("Baf2MachineProgress", {
          Running: TB
        }),
        children: (0, mp.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: dB / 1e3 + "s",
            animationDelay: null === VB ? void 0 : (VB - dB) / 1e3 + "s"
          }
        }, yB)
      })
    }

    function vJ(BB) {
      let {
        running: TB,
        leftMs: dB,
        periodMs: VB,
        updateCount: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)(), lB = Math.min(Math.max(null !== dB && void 0 !== dB ? dB : 0, 0), VB), JB = TB && lB > 0, YB = pB("buildAFactory2Game:machineBarFuel");
      return (0, mp.jsx)("div", {
        className: Hy()("Baf2FuelBurn", {
          Draining: JB
        }),
        role: "img",
        title: YB,
        "aria-label": YB,
        children: (0, mp.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: JB ? {
            animationDuration: VB / 1e3 + "s",
            animationDelay: (lB - VB) / 1e3 + "s"
          } : {
            transform: `scaleY(${lB/VB})`
          }
        }, yB)
      })
    }

    function mJ(BB, TB, dB) {
      let [VB, yB] = dB;
      const pB = 1 !== VB ? my(TB) : null;
      return {
        amount: VB,
        have: yB,
        item: BB(pB || Ay(TB))
      }
    }

    function iJ(BB) {
      return xT(BB) ? "buildAFactory2Game:machineBarMining" : jT(BB) ? "buildAFactory2Game:machineBarCutting" : void 0 !== BB.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function NJ(BB) {
      var TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB;
      let {
        kind: iB,
        ad: NB,
        store: tB,
        power: fB,
        renderSlot: sB
      } = BB;
      const {
        t: MB
      } = (0, iy.z)(), zB = uJ(tB, NB), wB = zT[iB], UB = null !== (TB = null === zB || void 0 === zB ? void 0 : zB.coupled) && void 0 !== TB && TB, FB = null !== (dB = null === zB || void 0 === zB ? void 0 : zB.couplerLevel) && void 0 !== dB ? dB : 1, KB = HJ(iB, UB, FB, null !== (VB = null === zB || void 0 === zB || null === (yB = zB.dug) || void 0 === yB ? void 0 : yB.item) && void 0 !== VB ? VB : null), rB = null !== (pB = null === zB || void 0 === zB ? void 0 : zB.status) && void 0 !== pB ? pB : null, IB = null !== (lB = null === zB || void 0 === zB ? void 0 : zB.power) && void 0 !== lB ? lB : null, cB = null !== (JB = null === zB || void 0 === zB ? void 0 : zB.opLeftMs) && void 0 !== JB ? JB : null, SB = null !== (YB = null === zB || void 0 === zB ? void 0 : zB.dug) && void 0 !== YB ? YB : null, PB = null !== SB && xT(wB) ? Bd[null !== (gB = Td(SB.item)) && void 0 !== gB ? gB : ""] : void 0, QB = void 0 === PB ? null : 6e4 / PB, RB = null !== (oB = null === zB || void 0 === zB ? void 0 : zB.powerCap) && void 0 !== oB ? oB : 4e3, aB = null !== (kB = null === zB || void 0 === zB ? void 0 : zB.tier) && void 0 !== kB ? kB : null, ZB = void 0 !== KB.powerMade, XB = null !== wB.fuelSlot ? sB(wB.fuelSlot) : null, WB = cT(wB), hB = !UB && !0 === (null === zB || void 0 === zB ? void 0 : zB.fuelFed), GB = !UB && !0 === (null === zB || void 0 === zB ? void 0 : zB.fuelFeeds), qB = null !== wB.fuelSlot && !UB, xB = null !== (LB = null === zB || void 0 === zB ? void 0 : zB.fuelLeftMs) && void 0 !== LB ? LB : null, jB = function(BB, TB, dB) {
        var VB;
        const yB = null === TB ? void 0 : nT[TB];
        return Math.max(null !== (VB = null !== yB && void 0 !== yB ? yB : dB) && void 0 !== VB ? VB : 0, BB.opMs)
      }(KB, null !== (OB = null === zB || void 0 === zB ? void 0 : zB.burning) && void 0 !== OB ? OB : null, xB), AB = null !== (DB = null === zB || void 0 === zB ? void 0 : zB.fuelKeep) && void 0 !== DB ? DB : null, bB = null === rB ? null : kJ(iB, rB, zB, hB), nB = null === rB ? null : LJ(rB, zB);
      return (0, mp.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, mp.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mp.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: MB(Ay(iB))
          }), SB && (0, mp.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [MB("Tree Cutter" === iB ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, mp.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mp.jsx)(ty.c, {
                itemName: SB.item,
                amount: 0
              })
            }), (0, mp.jsx)(fy.e, {
              text: SB.name
            })]
          }), null !== QB && (0, mp.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: MB("buildAFactory2Game:machineDigsFixed", {
              perMin: String(QB)
            })
          }), (null === zB || void 0 === zB ? void 0 : zB.field) && (0, mp.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, mp.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, mp.jsx)(ty.c, {
                itemName: "Wheat",
                amount: 0
              })
            }), MB("buildAFactory2Game:machineField", {
              planted: String(zB.field[0]),
              ripe: String(zB.field[1])
            })]
          }), (0, mp.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mp.jsxs)("div", {
              className: Hy()("Baf2MachineColumn", {
                Baf2Burns: qB
              }),
              children: [null !== KB.inputSlot && (0, mp.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, mp.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: MB(OJ(KB))
                }), sB(KB.inputSlot)]
              }), null !== wB.fuelSlot && !UB && (0, mp.jsxs)("div", {
                className: Hy()("Baf2MachineSlot", {
                  Baf2FuelFed: hB
                }),
                children: [(0, mp.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [hB && (0, mp.jsx)(Ny.e, {
                    name: "fire"
                  }), MB("buildAFactory2Game:machineFuel")]
                }), (0, mp.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, mp.jsx)(vJ, {
                    running: "running" === rB,
                    leftMs: xB,
                    periodMs: jB,
                    updateCount: tB.updateCount
                  }), XB]
                })]
              }), null !== wB.fuelSlot && UB && (0, mp.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, mp.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: MB("buildAFactory2Game:machineFuel")
                }), (0, mp.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: MB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": MB("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, mp.jsx)(Ny.e, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, mp.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, mp.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: MB(iJ(KB))
              }), (0, mp.jsx)(EJ, {
                running: "running" === rB,
                opMs: KB.opMs,
                opLeftMs: cB,
                updateCount: tB.updateCount
              })]
            }), KB.outputSlots.length > 0 && (0, mp.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mp.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: MB("buildAFactory2Game:machineOutput")
              }), (0, mp.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: KB.outputSlots.map((BB => (0, mp.jsx)("div", {
                  children: sB(BB)
                }, BB)))
              })]
            }), null !== IB && ZB && (0, mp.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, mp.jsx)("div", {
                style: {
                  height: 100 * IB / RB + "%"
                }
              })
            })]
          }), qB && null !== AB && (0, mp.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mp.jsx)(Ny.e, {
              name: "arrows-rotate"
            }), MB(jT(KB) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(AB)
            })]
          }), (hB || GB) && (0, mp.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, mp.jsx)(Ny.e, {
              name: "fire"
            }), MB(hB ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), wB.couplable && (0, mp.jsx)(Cl, {
            kind: iB,
            tier: aB,
            coupled: UB,
            level: FB,
            slot: WB === wB.fuelSlot ? XB : null !== WB ? sB(WB) : null
          }), null !== IB && !ZB && !0 === (null === zB || void 0 === zB ? void 0 : zB.reactorPowered) && (0, mp.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: MB("buildAFactory2Game:machineReactorPowered")
          }), null !== IB && !ZB && !0 !== (null === zB || void 0 === zB ? void 0 : zB.reactorPowered) && (0, mp.jsx)(fl, {
            stored: IB,
            cap: RB,
            rates: null !== (uB = null === zB || void 0 === zB ? void 0 : zB.powerRates) && void 0 !== uB ? uB : null
          }), (null === zB || void 0 === zB ? void 0 : zB.water) && (0, mp.jsx)(dJ, {
            water: zB.water,
            at: NB,
            side: zB.cryo ? "waterIn" : null
          }), (null === zB || void 0 === zB ? void 0 : zB.cryo) && (0, mp.jsx)(dJ, {
            water: zB.cryo,
            at: NB,
            side: "cryoOut"
          }), null !== zB && void 0 !== zB && zB.inertCoupler ? (0, mp.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: MB("buildAFactory2Game:machineStatus_couplerOff", {
              item: by(MB, zB.inertCoupler)
            })
          }) : null !== bB && (0, mp.jsx)("div", {
            className: Hy()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== rB
            }),
            children: MB(bB, nB ? mJ(MB, nB.input, nB.short) : void 0)
          })]
        }), (0, mp.jsxs)("div", {
          className: Hy()("Baf2MachineSide", {
            Baf2SynthSide: aT(wB)
          }),
          children: [aT(wB) && (0, mp.jsx)(Wl, {
            ad: NB,
            taught: null !== (HB = null === zB || void 0 === zB ? void 0 : zB.taught) && void 0 !== HB ? HB : null
          }, NB.join(",")), ZB && (0, mp.jsx)(Ml, {
            kind: iB,
            def: KB,
            ad: NB,
            power: fB,
            stored: null !== IB && void 0 !== IB ? IB : 0,
            cap: RB
          }), CB(wB) && (0, mp.jsx)(al, {
            ad: NB,
            input: null !== (EB = null === zB || void 0 === zB ? void 0 : zB.input) && void 0 !== EB ? EB : null,
            drops: null !== (vB = null === zB || void 0 === zB ? void 0 : zB.farm) && void 0 !== vB ? vB : null,
            seconds: String(KB.opMs / 1e3)
          }), !ZB && !CB(wB) && !aT(wB) && (0, mp.jsx)(bp, {
            kind: iB,
            def: KB,
            input: null !== (mB = null === zB || void 0 === zB ? void 0 : zB.input) && void 0 !== mB ? mB : null,
            tier: null !== aB && void 0 !== aB ? aB : 1,
            noSeeds: !0 === (null === zB || void 0 === zB ? void 0 : zB.noSeeds)
          })]
        })]
      })
    }

    function tJ(BB, TB, dB, VB) {
      var yB;
      const pB = zT[BB],
        lB = [pB.inputSlot, pB.fuelSlot, ...null !== (yB = pB.inputSlots) && void 0 !== yB ? yB : []].filter((BB => null !== BB));
      return {
        render: yB => {
          let {
            ad: pB,
            renderSlot: lB
          } = yB;
          return (0, mp.jsx)(cl.Provider, {
            value: VB,
            children: (0, mp.jsx)(NJ, {
              kind: BB,
              ad: pB,
              store: TB,
              power: dB,
              renderSlot: lB
            })
          })
        },
        quickMoveRange: lB.length > 0 ? [Math.min(...lB), Math.max(...lB) + 1] : [0, 0],
        className: DJ(BB)
      }
    }
    const fJ = "Assembler";

    function sJ(BB) {
      var TB, dB, VB, yB, pB, lB, JB, YB, gB;
      let {
        ad: oB,
        store: kB,
        renderSlot: LB
      } = BB;
      const {
        t: OB
      } = (0, iy.z)(), DB = uJ(kB, oB), uB = null !== (TB = null === DB || void 0 === DB ? void 0 : DB.tier) && void 0 !== TB ? TB : 1, HB = null !== (dB = null === DB || void 0 === DB ? void 0 : DB.taught) && void 0 !== dB ? dB : null, EB = hT(fJ, {
        coupled: !1,
        taught: HB
      }), vB = null !== (VB = EB.bench) && void 0 !== VB ? VB : null, mB = null !== (yB = null === DB || void 0 === DB ? void 0 : DB.status) && void 0 !== yB ? yB : null, iB = null !== (pB = null === DB || void 0 === DB ? void 0 : DB.power) && void 0 !== pB ? pB : null, NB = null !== (lB = null === DB || void 0 === DB ? void 0 : DB.powerCap) && void 0 !== lB ? lB : 4e3;
      return (0, mp.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, mp.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, mp.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: OB(Ay(fJ))
          }), vB && (0, mp.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [OB("buildAFactory2Game:benchMakes"), (0, mp.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, mp.jsx)(ty.c, {
                itemName: vB.output,
                amount: 0
              })
            }), (null === DB || void 0 === DB ? void 0 : DB.taughtName) && (0, mp.jsx)(fy.e, {
              text: DB.taughtName
            }), vB.outputAmount > 1 && (0, mp.jsxs)("span", {
              children: ["\xd7", vB.outputAmount]
            })]
          }), !vB && (0, mp.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: OB("buildAFactory2Game:benchTeachHint")
          }), (0, mp.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, mp.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (JB = EB.inputSlots) && void 0 !== JB ? JB : []).map(((BB, TB) => {
                const dB = null === vB || void 0 === vB ? void 0 : vB.inputs[TB];
                return (0, mp.jsxs)("div", {
                  className: Hy()("Baf2BenchInput", {
                    Spare: !dB
                  }),
                  children: [(0, mp.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [LB(BB), dB && (0, mp.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, mp.jsx)(ty.c, {
                        itemName: dB.item,
                        amount: 0
                      })
                    })]
                  }), (0, mp.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: dB ? `\xd7${dB.amount}` : "\xa0"
                  })]
                }, BB)
              }))
            }), (0, mp.jsx)(EJ, {
              running: "running" === mB,
              opMs: EB.opMs,
              opLeftMs: null !== (YB = null === DB || void 0 === DB ? void 0 : DB.opLeftMs) && void 0 !== YB ? YB : null,
              updateCount: kB.updateCount
            }), (0, mp.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, mp.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: OB("buildAFactory2Game:machineOutput")
              }), (0, mp.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: EB.outputSlots.map((BB => (0, mp.jsx)("div", {
                  children: LB(BB)
                }, BB)))
              })]
            })]
          }), null !== iB && (0, mp.jsx)(fl, {
            stored: iB,
            cap: NB,
            rates: null !== (gB = null === DB || void 0 === DB ? void 0 : DB.powerRates) && void 0 !== gB ? gB : null
          }), null !== mB && (0, mp.jsx)("div", {
            className: Hy()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== mB
            }),
            children: OB(kJ(fJ, mB, DB, !1))
          }), vB && vB.inputs.length > 1 && (0, mp.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: OB("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, mp.jsx)(ep, {
            taught: HB,
            tier: uB
          }), vB && (0, mp.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: OB("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function MJ(BB) {
      var TB;
      const dB = null !== (TB = zT[fJ].inputSlots) && void 0 !== TB ? TB : [];
      return {
        render: TB => {
          let {
            ad: dB,
            renderSlot: VB
          } = TB;
          return (0, mp.jsx)(sJ, {
            ad: dB,
            store: BB,
            renderSlot: VB
          })
        },
        quickMoveRange: [Math.min(...dB), Math.max(...dB) + 1],
        className: DJ(fJ)
      }
    }
    var zJ = dB(95),
      wJ = dB(1011),
      UJ = dB(3716);
    const FJ = 600,
      KJ = .5,
      rJ = 4,
      IJ = 1200,
      cJ = 140,
      SJ = 100,
      PJ = 32,
      QJ = 16,
      RJ = 100.5,
      aJ = 90,
      ZJ = 1.5,
      XJ = 50;

    function WJ(BB) {
      switch (sd(BB)) {
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
    const hJ = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function CJ(BB) {
      const TB = Math.ceil(60 * BB / SJ);
      return {
        fuel: Math.max(PJ, TB),
        waste: Math.max(QJ, TB)
      }
    }

    function GJ(BB, TB, dB) {
      const [VB, yB, pB] = [BB - 2, TB - 2, dB - 2];
      return 2 * (VB * yB + yB * pB + pB * VB) * cJ
    }

    function qJ(BB, TB, dB) {
      return Math.max(0, BB - 2) * Math.max(0, TB - 2) * Math.max(0, dB - 2)
    }

    function xJ(BB, TB) {
      const [dB, VB, yB] = BB, pB = dB * VB * yB, lB = new Float32Array(pB);
      let JB = 0,
        YB = 0,
        gB = 0,
        oB = 0,
        kB = 0;
      const LB = (BB, pB, lB) => BB < 0 || BB >= dB || pB < 0 || pB >= VB || lB < 0 || lB >= yB ? 0 : TB[(pB * yB + lB) * dB + BB];
      for (let HB = 0; HB < VB; HB++)
        for (let BB = 0; BB < yB; BB++)
          for (let VB = 0; VB < dB; VB++) {
            const pB = (HB * yB + BB) * dB + VB,
              OB = TB[pB];
            if (1 === OB) {
              JB++;
              let TB = 0;
              for (const [dB, yB, pB] of hJ) {
                const lB = LB(VB + dB, HB + yB, BB + pB);
                1 !== lB && 2 !== lB || TB++
              }
              lB[pB] = FJ * (1 + KJ * Math.min(TB, rJ)), oB += lB[pB]
            } else if (2 === OB) YB++;
            else if (3 === OB) {
              gB++;
              hJ.some((TB => {
                let [dB, yB, pB] = TB;
                return 1 === LB(VB + dB, HB + yB, BB + pB)
              })) && (kB += IJ)
            }
          }
      const OB = GJ(dB + 2, VB + 2, yB + 2),
        DB = Math.min(oB, kB, OB),
        uB = JB > 0 ? oB * SJ / JB : 0;
      return {
        rods: JB,
        graphite: YB,
        channels: gB,
        fuelHeat: oB,
        cooling: kB,
        size: OB,
        max: DB,
        vol: pB,
        powerPerUnit: uB,
        pelletsPerMin: uB > 0 ? DB / uB * 60 : 0,
        waterPerS: DB * nB.t,
        rodHeat: lB
      }
    }
    const jJ = 0,
      AJ = 1,
      bJ = 6,
      nJ = 7,
      eJ = 8;

    function BY(BB, TB) {
      const [dB, VB, yB] = BB, pB = new Uint8Array(dB * VB * yB), lB = (BB, pB, lB) => BB < 0 || BB >= dB || pB < 0 || pB >= VB || lB < 0 || lB >= yB ? 0 : TB[(pB * yB + lB) * dB + BB];
      for (let JB = 0; JB < VB; JB++)
        for (let BB = 0; BB < yB; BB++)
          for (let VB = 0; VB < dB; VB++) {
            const YB = (JB * yB + BB) * dB + VB,
              gB = TB[YB];
            if (1 === gB) {
              let TB = 0;
              for (const [dB, yB, pB] of hJ) {
                const YB = lB(VB + dB, JB + yB, BB + pB);
                TB += 1 === YB || 2 === YB ? 1 : 0
              }
              pB[YB] = AJ + Math.min(TB, rJ)
            } else if (3 === gB) {
              const TB = hJ.some((TB => {
                let [dB, yB, pB] = TB;
                return 1 === lB(VB + dB, JB + yB, BB + pB)
              }));
              pB[YB] = TB ? bJ : nJ
            } else 2 === gB && (pB[YB] = eJ)
          }
      return pB
    }

    function TY(BB) {
      return BB.fuelHeat <= BB.cooling && BB.fuelHeat <= BB.size ? "fuel" : BB.cooling <= BB.size ? "cooling" : "size"
    }
    const dY = aJ;

    function VY(BB, TB, dB) {
      return Math.round(BB * TB * dB * 25e3 * (1 + .25 * (Math.min(BB, TB, dB) - 2)))
    }

    function yY(BB) {
      return Math.max(0, Math.min(nB.e, BB))
    }

    function pY(BB, TB, dB) {
      const VB = TB * yY(dB);
      return BB <= 0 ? 0 : VB > 0 ? Math.min(200, 100 * BB / VB) : 200
    }

    function lY(BB, TB) {
      const dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? ZJ : 1;
      return Math.min(BB.fuelHeat * dB, BB.cooling * yY(TB), BB.size * dB)
    }

    function JY(BB) {
      return 2 + BB / 10
    }
    const YY = "buildAFactory2Game:";

    function gY(BB) {
      var TB;
      return null !== (TB = BB.baf2RxMood) && void 0 !== TB ? TB : function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const dB = [
          ["calm", 50],
          ["warm", dY],
          ["hot", RJ]
        ];
        for (const [VB, yB] of dB)
          if (BB < yB + (VB === TB ? 3 : 0)) return VB;
        return "alarm"
      }(BB.baf2RxHeat)
    }
    const oY = 120;

    function kY(BB) {
      const TB = BB.baf2RxState;
      if ("running" === TB && BB.baf2RxHeat > RJ) return {
        label: `${YY}rxState_tooHot`,
        tone: "bad",
        fix: `${YY}rxFix_tooHot`
      };
      switch (TB) {
        case "running":
          return {
            label: `${YY}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${YY}rxState_idle`, tone: "off", fix: `${YY}rxFix_idle`
          };
        case "scram":
          return {
            label: `${YY}rxState_scram`, tone: "off", fix: BB.baf2RxHeat < XJ ? `${YY}rxFix_scramCool` : `${YY}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${YY}rxState_${TB}`, tone: "off", fix: `${YY}rxFix_${TB}`
          };
        case "melted":
          return {
            label: `${YY}rxState_melted`, tone: "bad", fix: `${YY}rxFix_melted`
          };
        default:
          return {
            label: `${YY}rxState_${TB}`, tone: "warn", fix: `${YY}rxFix_${TB}`
          }
      }
    }

    function LY(BB) {
      const [TB, dB, VB] = BB.baf2RxStats;
      return {
        fuelHeat: TB,
        cooling: dB * (BB.baf2RxCryo ? Math.max(1, yY(BB.baf2RxWater / 100)) : 1),
        size: VB
      }
    }

    function OY(BB) {
      var TB;
      const dB = "idle" === BB.baf2RxState || "running" === BB.baf2RxState && BB.baf2RxHeat <= RJ || "scram" === BB.baf2RxState && BB.baf2RxHeat < XJ;
      if (0 === (BB.baf2RxFlags & OT) || !BB.baf2RxFormed || !dB) return null;
      const {
        fuelHeat: VB,
        cooling: yB,
        size: pB
      } = LY(BB), lB = Math.min(VB, yB, pB), JB = TY({
        fuelHeat: VB,
        cooling: yB,
        size: pB
      }), YB = "cooling" === JB && !0 === BB.baf2RxCryoOpen && !BB.baf2RxCryo, gB = null !== (TB = BB.baf2RxCells) && void 0 !== TB ? TB : "", oB = ("fuel" === JB || "cooling" === JB && !0 === BB.baf2RxCryo) && gB.length > 0 && !gB.includes(String(0)), kB = YB ? "Cryo" : "scram" === BB.baf2RxState ? "Off" : "";
      return lB < 12e3 ? {
        key: `${YY}rxGrow_${oB?"full":JB}${kB}`,
        amount: lB
      } : null
    }

    function DY(BB, TB) {
      return BB[0] === TB[0] && BB[1] === TB[1] && BB[2] === TB[2]
    }

    function uY(BB) {
      return [...BB].sort(((BB, TB) => Number(TB[2] < TB[1]) - Number(BB[2] < BB[1])))
    }

    function HY(BB, TB) {
      return TB.some((TB => {
        let [dB, VB] = TB;
        return !(VB <= 0) && ["edge", "cap", "wall", "inside"].some((TB => dB === ed(BB, TB)))
      }))
    }

    function EY(BB, TB, dB) {
      const VB = BB.baf2RxFuel - BB.baf2RxPu > 0 ? dB : 0;
      return {
        full: BB.baf2RxWaste > TB - 3,
        fullInS: VB > 0 ? Math.max(0, TB - BB.baf2RxWaste) / VB : null
      }
    }
    const vY = {
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

    function mY(BB) {
      return iY[BB]
    }
    const iY = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function NY(BB) {
      let [TB, dB, VB] = BB;
      return Math.ceil(GJ(TB, dB, VB) * nB.t)
    }

    function tY(BB, TB) {
      return "battery" === BB ? TB[0] * TB[1] * TB[2] : function(BB) {
        let [TB, dB, VB] = BB;
        return TB * dB * VB - Math.max(0, TB - 2) * Math.max(0, dB - 2) * Math.max(0, VB - 2)
      }(TB) - 1
    }

    function fY(BB) {
      const TB = Math.max(0, BB);
      if (TB < 10) return String(Math.round(10 * TB) / 10);
      if (TB < 1e4) return Math.round(TB).toLocaleString("en-US");
      if (TB < 1e6) return `${TB<1e5?(Math.floor(TB/100)/10).toFixed(1):Math.floor(TB/1e3)}k`;
      const dB = TB / 1e6;
      return `${dB<10?(Math.floor(100*dB)/100).toFixed(2):dB<100?(Math.floor(10*dB)/10).toFixed(1):Math.floor(dB)}M`
    }

    function sY(BB) {
      return BB <= 0 ? "0" : BB >= 10 ? String(Math.round(BB)) : BB.toFixed(BB >= 1 ? 1 : 2)
    }

    function MY(BB) {
      const TB = Gd(BB, 0),
        dB = Gd(BB, Xd(BB) - 1);
      return {
        lo: [Math.min(TB[0], dB[0]), Math.min(TB[1], dB[1]), Math.min(TB[2], dB[2])],
        hi: [Math.max(TB[0], dB[0]) + 1, Math.max(TB[1], dB[1]) + 1, Math.max(TB[2], dB[2]) + 1]
      }
    }

    function zY(BB, TB, dB) {
      const VB = [TB[0] - BB[0], TB[1] - BB[1], TB[2] - BB[2]],
        yB = [(BB[0] + TB[0]) / 2, (BB[1] + TB[1]) / 2, (BB[2] + TB[2]) / 2],
        pB = [];
      for (let lB = 0; lB < 3; lB++) {
        const JB = (lB + 1) % 3,
          YB = (lB + 2) % 3;
        for (const gB of [BB[JB], TB[JB]])
          for (const oB of [BB[YB], TB[YB]]) {
            const BB = [0, 0, 0],
              TB = [dB, dB, dB];
            BB[lB] = yB[lB], TB[lB] = VB[lB] + dB, BB[JB] = gB, BB[YB] = oB, pB.push([BB, TB])
          }
      }
      return pB
    }
    const wY = "buildAFactory2Game:",
      UY = [`${wY}colNorth`, `${wY}colEast`, `${wY}colSouth`, `${wY}colWest`];

    function FY(BB, TB) {
      const [dB, VB, yB] = BB.baf2ColAt;
      return `baf2col ${dB} ${VB} ${yB} ${TB}`
    }

    function KY(BB) {
      return function(BB) {
        if (!Number.isFinite(BB)) return "";
        const TB = Math.max(1, Math.round(BB));
        if (TB < 60) return `${TB}s`;
        const dB = TB % 60;
        return 0 === dB ? TB / 60 + "m" : `${Math.floor(TB/60)}m ${dB}s`
      }(function(BB) {
        const TB = BV.FOCUS_BY_LASERS[Math.max(0, Math.min(4, BB))];
        return TB > 0 ? BV.NOVA_FOCUS / TB : 1 / 0
      }(BB))
    }

    function rY(BB) {
      const TB = Math.abs(Math.round(BB));
      return TB < 1e3 ? Math.round(BB).toLocaleString("en-US") : TB < 1e6 ? `${TB<1e5?(BB/1e3).toFixed(1).replace(/\.0$/,""):Math.round(BB/1e3)}k` : `${(BB/1e6).toFixed(TB<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function IY(BB, TB, dB) {
      if (lV(TB) >= 0) {
        const TB = function(BB, TB) {
          return BB.find((BB => {
            let {
              focus: dB
            } = BB;
            return dB[0] === TB[0] && dB[2] === TB[2] && (TB[1] === dB[1] || TB[1] === dB[1] - 1)
          }))
        }(BB, dB);
        if (!TB) return null;
        const yB = function(BB) {
          let TB = 0,
            dB = 0;
          for (let VB = 0; VB < 4; VB++) TB += BB.laser[VB] ? 1 : 0, dB += BB.live[VB] ? 1 : 0;
          return {
            lasers: TB,
            live: dB,
            focusPerS: BV.FOCUS_BY_LASERS[dB],
            drawPerS: BV.LASER_DRAW * dB
          }
        }({
          laser: TB.lasers,
          live: TB.live
        });
        if (0 === yB.lasers || "noLasers" === TB.state) return {
          key: `${wY}lookColNoLasers`
        };
        if (0 === yB.live) return {
          key: `${wY}lookColOff_blocked`
        };
        if (!(TB.on && yB.live > 0) && ("running" !== (VB = TB.state) && "slowed" !== VB)) return {
          key: `${wY}lookColOff_${TB.state}`
        };
        if (yB.live < yB.lasers) return {
          key: `${wY}lookColLasersSome`,
          params: {
            lasers: String(yB.lasers),
            live: String(yB.live)
          }
        };
        const pB = TB.open.filter(Boolean).length;
        return pB < 4 ? {
          key: `${wY}lookColLasersSpots`,
          params: {
            live: String(yB.live),
            spots: String(pB),
            time: KY(yB.live)
          }
        } : {
          key: `${wY}lookColLasers`,
          params: {
            live: String(yB.live),
            time: KY(yB.live)
          }
        }
      }
      var VB;
      if (!JV(TB)) return null;
      const yB = function(BB, TB) {
        for (const dB of BB) {
          const BB = kV(dB.focus, [TB[0], TB[1], TB[2]]);
          if (BB && BB.cg === BV.LASER_D && dB.lasers[BB.dir]) return {
            entry: dB,
            dir: BB.dir
          }
        }
        return null
      }(BB, dB);
      if (!yB) return {
        key: `${wY}lookLaserNoCollider`
      };
      const {
        entry: pB,
        dir: lB
      } = yB;
      return pB.open[lB] ? pB.live[lB] ? {
        key: pB.on ? `${wY}lookLaserFiring` : `${wY}lookLaserReady`
      } : {
        key: `${wY}lookLaserBlocked`
      } : {
        key: `${wY}lookLaserClosed`
      }
    }

    function cY(BB, TB) {
      const dB = [];
      for (let VB = 1; VB < BV.LASER_D; VB++) BB & 1 << TB * (BV.LASER_D - 1) + VB - 1 && dB.push(VB);
      return dB
    }
    const SY = {
      firing: `${wY}colSlotFiring`,
      ready: `${wY}colSlotReady`,
      blocked: `${wY}colSlotBlocked`,
      empty: `${wY}colSlotEmpty`,
      closed: `${wY}colSlotClosed`
    };

    function PY(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const pB = eV(BB),
        lB = eV(TB),
        JB = eV(dB),
        YB = JB.filter(Boolean).length,
        gB = pB.filter(Boolean).length,
        oB = [0, 1, 2, 3].map((BB => lB[BB] ? pB[BB] ? JB[BB] ? VB ? "firing" : "ready" : "blocked" : (BB => cY(yB, BB).length > 0)(BB) ? "blocked" : "empty" : "closed")),
        kB = oB.indexOf("blocked"),
        LB = kB < 0 && gB > 0 ? oB.indexOf("empty") : -1;
      return oB.map(((BB, TB) => {
        const dB = TB === kB ? {
          key: `${wY}colSlotClear`
        } : TB === LB ? {
          key: `${wY}colSlotAdd`,
          params: {
            time: KY(Math.min(4, YB + 1))
          }
        } : null;
        return {
          dir: TB,
          tone: BB,
          title: {
            key: "blocked" !== BB || pB[TB] ? SY[BB] : `${wY}colSlotGap`,
            keys: {
              dir: UY[TB]
            }
          },
          hint: dB
        }
      }))
    }

    function QY(BB) {
      var TB;
      return "noPower" === BB.baf2ColState && BB.baf2ColRxState ? kY({
        baf2RxState: BB.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (TB = BB.baf2ColRxHeat) && void 0 !== TB ? TB : 0
      }) : null
    }

    function RY(BB) {
      const TB = eV(BB.baf2ColSpots).filter(Boolean).length,
        dB = eV(BB.baf2ColLive);
      let VB = 0,
        yB = 0;
      return eV(BB.baf2ColLasers).forEach(((BB, TB) => {
        BB && (VB++, yB += dB[TB] ? 0 : 1)
      })), yB > 0 ? {
        key: `${wY}colSubSome`,
        params: {
          blocked: String(yB),
          lasers: String(VB)
        }
      } : TB < 4 ? {
        key: `${wY}colSubSpots`,
        params: {
          lasers: String(VB),
          spots: String(TB)
        }
      } : {
        key: `${wY}colSub`,
        params: {
          lasers: String(VB)
        }
      }
    }

    function aY(BB) {
      const TB = QY(BB);
      if ("idle" === BB.baf2ColRxState && TB) return {
        key: `${wY}colState_noPowerIdle`
      };
      if (TB) return {
        key: `${wY}colState_noPowerReactor`,
        keys: {
          state: TB.label
        }
      };
      if ("noInput" !== BB.baf2ColState) return {
        key: `${wY}colState_${BB.baf2ColState}`
      };
      const dB = String(Math.max(0, BV.NOVA_SA - BB.baf2ColSa)),
        VB = String(Math.max(0, BV.NOVA_GD - BB.baf2ColGd));
      return "0" !== dB && "0" !== VB ? {
        key: `${wY}colState_noInput`,
        params: {
          sa: dB,
          gd: VB
        }
      } : "0" !== dB ? {
        key: `${wY}colState_noStarAlloy`,
        params: {
          sa: dB
        }
      } : "0" !== VB ? {
        key: `${wY}colState_noGlowDust`,
        params: {
          gd: VB
        }
      } : {
        key: `${wY}colState_running`
      }
    }

    function ZY(BB) {
      return BB.baf2ColP < 0 ? `${wY}colNext` : function(BB) {
        const TB = BB.baf2ColState;
        return BB.baf2ColP >= 0 && ("blocked" === TB || "noLasers" === TB || "noPower" === TB)
      }(BB) ? `${wY}colStalled` : null === XY(BB) ? `${wY}colMaking` : `${wY}colNovaIn`
    }

    function XY(BB) {
      if (BB.baf2ColP < 0 || BB.baf2ColWant <= 0) return null;
      const TB = BB.baf2ColFocusPerS * Math.min(1, BB.baf2ColDraw / BB.baf2ColWant);
      return TB > 0 ? Math.max(0, BV.NOVA_FOCUS - BB.baf2ColP) / TB : null
    }

    function WY(BB, TB) {
      const dB = [];
      for (let VB = 1; VB <= 3; VB++) {
        const yB = [BB[0], BB[1] - VB, BB[2]];
        if (!TB(yB)) return dB;
        dB.push(yB)
      }
      return []
    }

    function hY(BB, TB) {
      const dB = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let VB = 0; VB < 4; VB++) {
        const yB = VB,
          pB = oV(BB.focus, yB, BV.LASER_D);
        if (BB.lasers[VB] || !BB.open[VB] || !TB(pB)) continue;
        const lB = [];
        for (let dB = 1; dB < BV.LASER_D; dB++) {
          const VB = oV(BB.focus, yB, dB);
          TB(VB) || lB.push(VB)
        }
        dB.supports.push(...WY(pB, TB)), 0 === lB.length ? dB.free.push(pB) : (dB.blocked.push(pB), dB.gaps.push(...lB))
      }
      return dB
    }
    const CY = BV.LASER_D - .25,
      GY = 4,
      qY = 2,
      xY = 16;
    const jY = {
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
        blendMode: UJ.e.Standard,
        soft: !0
      },
      AY = {
        green: jY,
        pink: {
          ...jY,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function bY(BB, TB) {
      const dB = {
        ...TB.params
      };
      for (const [yB, pB] of Object.entries(null !== (VB = TB.keys) && void 0 !== VB ? VB : {})) {
        var VB;
        dB[yB] = BB(pB)
      }
      return dB
    }
    const nY = "buildAFactory2Game:",
      eY = 2 * BV.LASER_D + 1,
      Bg = BV.LASER_D;

    function Tg(BB) {
      return BB(`${nY}colFocusTip`, {
        need: rY(BV.NOVA_FOCUS)
      })
    }

    function dg(BB, TB) {
      return BB(TB.key, bY(BB, TB))
    }

    function Vg(BB) {
      const TB = BB.getStatus();
      return {
        status: TB,
        entry: TB ? BB.entryAtRoot(TB.baf2ColAt) : void 0
      }
    }

    function yg(BB, TB) {
      return {
        left: 100 * (Bg + BB) / eY + "%",
        top: 100 * (Bg + TB) / eY + "%"
      }
    }

    function pg(BB) {
      let {
        status: TB,
        entry: dB
      } = BB;
      const VB = eV(TB.baf2ColLasers),
        yB = eV(TB.baf2ColSpots),
        pB = eV(TB.baf2ColLive),
        lB = !0 === (null === dB || void 0 === dB ? void 0 : dB.on),
        JB = BV.LASER_D,
        YB = [];
      for (let OB = 0; OB < 4; OB++) {
        const [BB, , TB] = gV[OB];
        if (pB[OB]) {
          const dB = 100 * (JB - 1) / eY,
            VB = BB + TB > 0 ? 100 * (Bg + 1) / eY : 100 * (Bg - (JB - 1)) / eY,
            yB = 100 * (Bg + .35) / eY,
            pB = 30 / eY,
            gB = 0 !== BB ? {
              left: `${VB}%`,
              width: `${dB}%`,
              top: `${yB}%`,
              height: `${pB}%`
            } : {
              top: `${VB}%`,
              height: `${dB}%`,
              left: `${yB}%`,
              width: `${pB}%`
            };
          YB.push((0, mp.jsx)("i", {
            className: Hy()("Baf2ColDiagramBeam", {
              Off: !lB
            }),
            style: gB
          }, `beam${OB}`))
        }
        const dB = VB[OB] ? "Baf2ColDiagramLaser" : yB[OB] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        YB.push((0, mp.jsx)("i", {
          className: dB,
          style: yg(BB * JB, TB * JB)
        }, `spot${OB}`))
      }
      for (let OB = 0; OB < 4; OB++) {
        if (VB[OB] || !yB[OB]) continue;
        const [BB, , dB] = gV[OB];
        for (const VB of cY(null !== (gB = TB.baf2ColGaps) && void 0 !== gB ? gB : 0, OB)) {
          var gB;
          YB.push((0, mp.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: yg(BB * VB, dB * VB)
          }, `gap${OB},${VB}`))
        }
      }
      for (const [OB, , DB] of null !== (oB = null === dB || void 0 === dB ? void 0 : dB.blockers) && void 0 !== oB ? oB : []) {
        var oB, kB, LB;
        const BB = OB - (null !== (kB = null === dB || void 0 === dB ? void 0 : dB.focus[0]) && void 0 !== kB ? kB : 0),
          TB = DB - (null !== (LB = null === dB || void 0 === dB ? void 0 : dB.focus[2]) && void 0 !== LB ? LB : 0);
        YB.push((0, mp.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: yg(BB, TB)
        }, `block${BB},${TB}`))
      }
      return (0, mp.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [YB, (0, mp.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function lg(BB) {
      let {
        status: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), VB = eV(TB.baf2ColLive).filter(Boolean).length;
      return (0, mp.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, mp.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Tg(dB),
          children: dB(`${nY}colLadder`)
        }), (0, mp.jsx)("ul", {
          children: [1, 2, 3, 4].map((BB => (0, mp.jsx)("li", {
            className: Hy()({
              On: BB === VB
            }),
            children: dB(`${nY}colLadderChip`, {
              lasers: String(BB),
              time: KY(BB)
            })
          }, BB)))
        })]
      })
    }

    function Jg(BB) {
      let {
        item: TB,
        Dg: dB,
        need: VB,
        cap: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)(), lB = Math.min(dB, VB);
      return (0, mp.jsxs)("li", {
        className: Hy()("Baf2ColTile", {
          Short: dB < VB
        }),
        children: [(0, mp.jsx)(Yg, {
          item: TB
        }), (0, mp.jsx)("b", {
          className: "Baf2ColTileValue",
          children: pB(`${nY}colOutOf`, {
            amount: String(lB),
            cap: String(VB)
          })
        }), (0, mp.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, mp.jsx)("i", {
            style: {
              width: 100 * lB / VB + "%"
            }
          })
        }), dB > VB && (0, mp.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: pB(`${nY}colIntakeHeld`, {
            amount: String(dB),
            cap: String(yB)
          })
        })]
      })
    }

    function Yg(BB) {
      let {
        item: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)();
      return (0, mp.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, mp.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: TB,
            amount: 0
          })
        }), (0, mp.jsx)("span", {
          className: "Baf2ColTileName",
          children: by(dB, TB)
        })]
      })
    }

    function gg(BB) {
      switch (BB.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function og(BB) {
      var TB, dB, yB;
      let {
        store: pB,
        close: lB
      } = BB;
      const {
        t: JB
      } = (0, iy.z)(), YB = Sl(), {
        status: gB,
        entry: oB
      } = function(BB) {
        const [TB, dB] = (0, VB.useState)((() => Vg(BB)));
        return (0, VB.useEffect)((() => (dB(Vg(BB)), BB.subscribe((() => {
          dB(Vg(BB))
        })))), [BB]), TB
      }(pB), [kB, LB] = (0, VB.useState)(null), OB = null === gB || void 0 === gB ? void 0 : gB.baf2ColHold;
      (0, VB.useEffect)((() => {
        LB(null)
      }), [OB]);
      const DB = (0, VB.useRef)({
          p: -1,
          n: 0
        }),
        uB = null !== (TB = null === gB || void 0 === gB ? void 0 : gB.baf2ColP) && void 0 !== TB ? TB : -1;
      uB < DB.current.p && DB.current.n++, DB.current.p = uB;
      const HB = (0, VB.useRef)(null),
        [EB] = (0, VB.useState)((() => {
          return (BB = pB.heldAtOpen()) === VV || BB === yV ? {
            key: `${wY}colBeltItIn`,
            item: BB
          } : null;
          var BB
        }));
      if (!gB) return null;
      const vB = gB.baf2ColMember,
        mB = gB.baf2ColP >= 0,
        iB = function(BB, TB) {
          if (BB.baf2ColP >= 0 && BB.baf2ColDraw > 0) {
            const TB = BB.baf2ColWant > 0 ? Math.min(1, BB.baf2ColDraw / BB.baf2ColWant) : 0;
            return {
              focus: BB.baf2ColFocusPerS * TB,
              draw: BB.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === BB.baf2ColState && TB && TB.draw > 0 ? {
            ...TB,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(gB, HB.current);
      HB.current = iB.draw > 0 ? iB : null;
      const NB = "slowed" === gB.baf2ColState || "noPower" === gB.baf2ColState,
        tB = XY(gB),
        fB = null !== kB && void 0 !== kB ? kB : gB.baf2ColHold,
        sB = function(BB) {
          var TB, dB;
          return "idle" === BB.baf2ColRxState ? null : null !== (TB = null === (dB = QY(BB)) || void 0 === dB ? void 0 : dB.fix) && void 0 !== TB ? TB : null
        }(gB),
        MB = null === sB && null === EB ? function(BB) {
          var TB;
          const dB = BB.baf2ColSentTo;
          if (!dB) return null;
          const VB = null !== (TB = BB.baf2ColSentHeld) && void 0 !== TB ? TB : null;
          return {
            key: null === VB ? `${wY}colNovaSentToMachine` : `${wY}colNovaSentTo`,
            target: dB,
            Dg: VB
          }
        }(gB) : null,
        zB = mB ? JB(`${nY}colFocusOf`, {
          focus: rY(gB.baf2ColP),
          need: rY(BV.NOVA_FOCUS)
        }) : null;
      return (0, mp.jsx)(ul.b, {
        close: lB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, mp.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mp.jsx)(ty.c, {
                  itemName: TV,
                  amount: 0
                })
              }), (0, mp.jsxs)("div", {
                children: [(0, mp.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: by(JB, TV)
                }), (0, mp.jsx)("p", {
                  children: dg(JB, RY(gB))
                })]
              })]
            }), (0, mp.jsx)(Hl.i, {
              onClick: lB
            })]
          }), (0, mp.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, mp.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, mp.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, mp.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: JB(ZY(gB), {
                    time: null === tB ? "" : Dp(JB, tB)
                  })
                }), (0, mp.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, mp.jsx)("i", {
                    style: {
                      width: (mB ? 100 * gB.baf2ColP / BV.NOVA_FOCUS : 0) + "%"
                    }
                  }, DB.current.n)
                }), (0, mp.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, mp.jsxs)("span", {
                    title: Tg(JB),
                    children: [(0, mp.jsx)("b", {
                      children: rY(iB.focus)
                    }), " ", JB(`${nY}colFocusPerS`)]
                  }), (0, mp.jsxs)("span", {
                    className: Hy()("Baf2ColDraw", {
                      Short: NB
                    }),
                    children: [(0, mp.jsx)(Ny.e, {
                      name: "bolt"
                    }), NB ? JB(`${nY}colDrawOf`, {
                      draw: rY(gB.baf2ColDraw),
                      want: rY(gB.baf2ColWant)
                    }) : JB(`${nY}colPowerPerS`, {
                      rate: rY(iB.draw)
                    })]
                  }), null !== zB && (0, mp.jsx)("span", {
                    className: "Soft",
                    children: zB
                  })]
                })]
              }), (0, mp.jsx)("p", {
                className: Hy()("Baf2ColState", gg(gB)),
                children: dg(JB, aY(gB))
              }), null !== sB && (0, mp.jsx)("p", {
                className: "Baf2ColStateFix",
                children: JB(sB)
              }), null === sB && null !== EB && (0, mp.jsx)("p", {
                className: "Baf2ColStateFix",
                children: JB(EB.key, {
                  item: by(JB, EB.item)
                })
              }), MB && (0, mp.jsx)("p", {
                className: "Baf2ColStateFix",
                children: JB(MB.key, {
                  target: by(JB, MB.target),
                  amount: String(null !== (dB = MB.Dg) && void 0 !== dB ? dB : 0)
                })
              }), (0, mp.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, mp.jsx)(Jg, {
                  item: VV,
                  Dg: gB.baf2ColSa,
                  need: BV.NOVA_SA,
                  cap: BV.SA_CAP
                }), (0, mp.jsx)(Jg, {
                  item: yV,
                  Dg: gB.baf2ColGd,
                  need: BV.NOVA_GD,
                  cap: BV.GD_CAP
                }), (0, mp.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, mp.jsx)(Yg, {
                    item: "Nova Matter"
                  }), (0, mp.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: JB(`${nY}colNovaHeld`, {
                      amount: String(gB.baf2ColOut),
                      cap: String(BV.OUT_CAP)
                    })
                  }), vB && (0, mp.jsx)(Hl.k, {
                    className: "Baf2ColTake",
                    disabled: 0 === gB.baf2ColOut,
                    onClick: () => {
                      YB.send(FY(gB, "take"))
                    },
                    children: JB(`${nY}colTake`)
                  })]
                })]
              }), vB && (0, mp.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": fB,
                className: Hy()("Baf2ColHold", {
                  On: fB
                }),
                onClick: BB => {
                  BB.detail > 0 && BB.currentTarget.blur(), LB(!fB), YB.send(FY(gB, "hold " + (fB ? 0 : 1)))
                },
                children: [(0, mp.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, mp.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, mp.jsx)("b", {
                    children: JB(`${nY}colHold`)
                  }), (0, mp.jsx)("span", {
                    children: JB(`${nY}colHoldNote`)
                  })]
                })]
              })]
            }), (0, mp.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, mp.jsx)(pg, {
                status: gB,
                entry: oB
              }), (0, mp.jsx)("ul", {
                className: "Baf2ColSlots",
                children: PY(gB.baf2ColLasers, gB.baf2ColSpots, gB.baf2ColLive, iB.beamsOn, null !== (yB = gB.baf2ColGaps) && void 0 !== yB ? yB : 0).map((BB => (0, mp.jsxs)("li", {
                  className: BB.tone,
                  children: [(0, mp.jsx)("b", {
                    children: dg(JB, BB.title)
                  }), null !== BB.hint && (0, mp.jsx)("span", {
                    children: dg(JB, BB.hint)
                  })]
                }, BB.dir)))
              }), (0, mp.jsx)(lg, {
                status: gB
              })]
            })]
          })]
        })
      })
    }
    const kg = "buildAFactory2Game:",
      Lg = 36e5,
      Og = 864e5;

    function Dg(BB, TB, dB) {
      return Math.max(0, Math.ceil((BB + TB - Math.max(dB, BB)) / 1e3))
    }

    function ug(BB) {
      return BB.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Hg(BB) {
      return "Homestead" === BB
    }

    function Eg(BB) {
      return function(BB) {
        let TB = 0;
        for (const dB of BB) {
          const BB = /^Island ([1-9]\d{0,5})$/.exec(dB);
          BB && (TB = Math.max(TB, Number(BB[1])))
        }
        return `Island ${TB+1}`
      }(BB.map((BB => BB.baf2IslandName)))
    }

    function vg(BB, TB) {
      return function(BB) {
        return `${kg}islandsBlocked${BB[0].toUpperCase()}${BB.slice(1)}`
      }("degraded" === BB && 0 === TB ? "stuck" : BB)
    }

    function mg(BB) {
      return BB.filter((BB => {
        var TB;
        return !BB.baf2IslandActive && void 0 === BB.baf2IslandUnreadable && void 0 === (null === (TB = BB.baf2IslandCoop) || void 0 === TB ? void 0 : TB.baf2CoopState)
      })).length
    }

    function ig(BB) {
      return "coopMoving" === BB || "coopUnreachable" === BB
    }

    function Ng(BB, TB) {
      const dB = TB > 0;
      return {
        change: null === BB && !dB,
        switch: (null === BB || "degraded" === BB || ig(BB)) && !dB,
        rename: "loading" !== BB && "degraded" !== BB && "stuck" !== BB
      }
    }

    function tg(BB, TB) {
      return void 0 === BB || "corrupt" === BB && TB
    }
    const fg = wl;

    function sg(BB, TB, dB) {
      if (null !== BB && void 0 !== BB && BB.untilGone) {
        var VB;
        return !("dismiss" === BB.untilGone && void 0 === (null === (VB = TB.baf2IslandCoop) || void 0 === VB ? void 0 : VB.baf2CoopState)) && dB - BB.atMs < 32500
      }
      return void 0 !== BB && dB - BB.atMs < fg && TB.baf2IslandName === BB.from
    }
    const Mg = wl;

    function zg(BB) {
      return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.core : "islands" === (null === BB || void 0 === BB ? void 0 : BB.kind) ? BB.backToCore : void 0
    }

    function wg(BB) {
      return `\0${BB}\0`
    }

    function Ug(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const VB = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const pB of Object.keys(dB)) VB[pB] = wg(pB);
      let yB = Object.keys(VB).length > 0 ? BB(TB, VB) : BB(TB);
      for (const [pB, lB] of Object.entries(dB)) yB = yB.split(wg(pB)).join(lB);
      return yB
    }

    function Fg(BB, TB) {
      return BB ? TB ? "enabled" : "disabled" : "hidden"
    }
    const Kg = {
      removed: `${kg}islandsCoopRemoved`,
      deleted: `${kg}islandsCoopDeleted`,
      notReady: `${kg}islandsCoopNotReady`,
      gone: `${kg}islandsCoopGone`
    };

    function rg(BB) {
      var TB;
      return "member" !== (null === (TB = BB.baf2IslandCoop) || void 0 === TB ? void 0 : TB.baf2CoopRole) && "newer" !== BB.baf2IslandUnreadable
    }

    function Ig(BB, TB, dB, VB, yB) {
      const pB = BB.baf2IslandActive,
        lB = BB.baf2IslandUnreadable,
        JB = BB.baf2IslandCoop,
        YB = function(BB, TB, dB) {
          return {
            switch: BB.switch && void 0 === TB,
            delete: BB.change && tg(TB, dB)
          }
        }(TB, lB, VB),
        gB = {
          switch: Fg(!pB && void 0 === lB, YB.switch),
          rename: Fg(!0, TB.rename),
          delete: Fg(!pB, YB.delete),
          deleteWaits: !pB && tg(lB, VB),
          people: Fg(void 0 !== BB.baf2IslandInvitable || yB && pB && void 0 === lB && void 0 === JB, !0),
          peopleLabel: "invite",
          lD: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        oB = !pB && YB.delete;
      if (void 0 === JB) return dB ? {
        ...gB,
        delete: Fg(!pB, !1),
        deleteWaits: !1,
        note: oB ? {
          key: `${kg}islandsCoopKeepOwn`
        } : null
      } : gB;
      const kB = JB.baf2CoopState,
        LB = JB.baf2CoopMembers.length > 1,
        OB = {
          ...gB,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== kB && "member" === JB.baf2CoopRole) return {
        ...OB,
        dismiss: Fg(!0, TB.rename),
        note: {
          key: Kg[kB],
          names: {
            owner: JB.baf2CoopOwner
          }
        }
      };
      if (void 0 !== kB) {
        let BB = {
          key: `${kg}islandsCoopOwnLost`
        };
        return oB && LB ? BB = {
          key: `${kg}islandsCoopDeleteMembers`
        } : oB && dB && (BB = {
          key: `${kg}islandsCoopKeepOwn`
        }), {
          ...OB,
          delete: Fg(!pB, YB.delete && !LB && !dB),
          deleteWaits: gB.deleteWaits && !LB && !dB,
          note: BB
        }
      }
      if ("member" === JB.baf2CoopRole) return {
        ...gB,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        lD: Fg(!0, pB ? TB.switch : TB.rename)
      };
      const DB = JB.baf2CoopManageHere;
      let uB = null;
      var HB;
      DB ? oB && LB ? uB = {
        key: `${kg}islandsCoopDeleteMembers`
      } : oB && dB && (uB = {
        key: `${kg}islandsCoopKeepOwn`
      }) : uB = {
        key: null !== (HB = JB.baf2CoopLeft) && void 0 !== HB && HB.length ? `${kg}islandsCoopManageThereClaim` : `${kg}islandsCoopManageThere`
      };
      return {
        ...gB,
        rename: Fg(!0, TB.rename && DB),
        delete: Fg(!pB, YB.delete && !LB && !dB),
        deleteWaits: gB.deleteWaits && !LB && !dB,
        people: "enabled",
        peopleLabel: "players",
        unshare: Fg(DB && pB && !LB, TB.change),
        remove: DB,
        note: uB
      }
    }

    function cg(BB) {
      var TB;
      const dB = BB.baf2IslandCoop;
      if ("owner" !== (null === dB || void 0 === dB ? void 0 : dB.baf2CoopRole) || void 0 !== dB.baf2CoopState || null === (TB = dB.baf2CoopLeft) || void 0 === TB || !TB.length) return null;
      const VB = BB.baf2IslandActive && dB.baf2CoopManageHere;
      return {
        left: dB.baf2CoopLeft,
        claim: VB,
        goThere: !VB && dB.baf2CoopManageHere
      }
    }

    function Sg(BB) {
      return BB.baf2CoopMembers.length >= BB.baf2CoopMax
    }

    function Pg(BB, TB, dB) {
      return void 0 !== BB && TB < BB.answer && dB - BB.atMs < fg
    }
    const Qg = "buildAFactory2Game:";

    function Rg(BB, TB) {
      return {
        onKeyDown: dB => {
          dB.stopPropagation(), dB.nativeEvent.isComposing || 229 === dB.nativeEvent.keyCode || ("Enter" === dB.key ? (dB.preventDefault(), BB()) : "Escape" === dB.key && (dB.preventDefault(), TB()))
        }
      }
    }

    function ag(BB) {
      return {
        onKeyDown: TB => {
          "Escape" !== TB.key || TB.nativeEvent.isComposing || (TB.preventDefault(), TB.stopPropagation(), BB())
        }
      }
    }

    function Zg(BB) {
      BB.currentTarget.select()
    }

    function Xg(BB, TB) {
      (0, VB.useEffect)((() => {
        var dB;
        BB && (null === (dB = TB.current) || void 0 === dB || dB.scrollIntoView({
          block: "nearest"
        }))
      }), [BB, TB])
    }

    function Wg(BB) {
      const [TB, dB] = (0, VB.useState)(null);
      return (0, VB.useEffect)((() => {
        const TB = document.querySelector(".UiRequests"),
          VB = BB.current;
        if (!TB || !VB || "undefined" === typeof ResizeObserver) return;
        const yB = () => {
          const BB = TB.getBoundingClientRect(),
            yB = VB.getBoundingClientRect(),
            pB = VB.parentElement,
            lB = pB && parseFloat(getComputedStyle(pB).paddingTop) || 0,
            JB = function(BB, TB, dB, VB) {
              if (!BB || BB.height <= 0 || BB.right <= TB.left || BB.left >= TB.right) return null;
              const yB = Math.max(VB, BB.bottom + 8);
              return {
                marginTop: Math.round(yB - VB),
                maxHeight: Math.max(0, Math.floor(dB - yB - VB))
              }
            }(BB, yB, window.innerHeight, lB);
          dB((BB => (null === BB || void 0 === BB ? void 0 : BB.marginTop) === (null === JB || void 0 === JB ? void 0 : JB.marginTop) && (null === BB || void 0 === BB ? void 0 : BB.maxHeight) === (null === JB || void 0 === JB ? void 0 : JB.maxHeight) ? BB : JB))
        };
        yB();
        const pB = new ResizeObserver(yB);
        return pB.observe(TB), window.addEventListener("resize", yB), () => {
          pB.disconnect(), window.removeEventListener("resize", yB)
        }
      }), [BB]), TB
    }

    function hg(BB) {
      (0, VB.useEffect)((() => {
        var TB;
        null === (TB = BB.current) || void 0 === TB || TB.focus()
      }), [BB])
    }

    function Cg(BB) {
      const [TB, dB] = (0, VB.useState)(Date.now);
      return (0, VB.useEffect)((() => {
        const TB = window.setInterval((() => {
          dB(Date.now())
        }), BB);
        return () => {
          window.clearInterval(TB)
        }
      }), [BB]), TB
    }

    function Gg(BB) {
      let {
        tier: TB,
        t: dB
      } = BB;
      const {
        kind: VB,
        short: yB
      } = HB(TB), pB = OB(TB, DB), lB = dB(`${Qg}${pB.key}`, {
        ...pB.params,
        name: dB(`${Qg}${EB(TB).nameKey}`)
      });
      return (0, mp.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, mp.jsx)("span", {
          className: Hy()("Baf2IslandTierPip", {
            Stage: "tier" !== VB
          }),
          "aria-hidden": "true",
          children: yB
        }), lB]
      })
    }

    function qg(BB) {
      let {
        note: TB,
        className: dB,
        t: VB
      } = BB;
      return (0, mp.jsx)("p", {
        className: Hy()("Baf2IslandNote", dB),
        children: Ug(VB, TB.key, TB.names, TB.params)
      })
    }
    const xg = "buildAFactory2Game:";

    function jg(BB) {
      let {
        message: TB,
        arrivedAtMs: dB,
        close: yB,
        lD: pB
      } = BB;
      const lB = Sl(),
        {
          t: JB
        } = (0, iy.z)(),
        YB = Cg(1e3),
        gB = (0, VB.useRef)(null);
      (0, VB.useEffect)((() => {
        var BB;
        null === (BB = gB.current) || void 0 === BB || BB.focus()
      }), []);
      const oB = Dg(dB, TB.baf2TransferInMs, YB),
        kB = dB + TB.baf2TransferInMs - 1e3,
        [LB, OB] = (0, VB.useState)(null);
      (0, VB.useEffect)((() => {
        const BB = window.setTimeout((() => {
          OB(kB)
        }), Math.max(0, kB - Date.now()));
        return () => {
          window.clearTimeout(BB)
        }
      }), [kB]);
      const DB = LB === kB || YB >= kB,
        uB = TB.baf2TransferIsland,
        HB = TB.baf2TransferOwner;
      return (0, mp.jsx)(ul.b, {
        close: yB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mp.jsxs)("section", {
          ref: gB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              children: [(0, mp.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === HB ? Ug(JB, `${xg}islandsTransferOwn`, {
                  island: uB
                }) : Ug(JB, `${xg}islandsTransfer`, {
                  island: uB,
                  owner: HB
                })
              }), (0, mp.jsx)("p", {
                children: DB ? JB(`${xg}islandsTransferNow`) : JB(`${xg}islandsTransferIn`, {
                  time: Dp(JB, oB)
                })
              })]
            }), (0, mp.jsx)(Hl.i, {
              ariaLabel: JB(`${xg}islandsClose`),
              onClick: yB
            })]
          }), !DB && (0, mp.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, mp.jsx)("p", {
              className: "Baf2TransferNote",
              children: JB(`${xg}islandsTransferNote`)
            }), (0, mp.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, mp.jsx)(Hl.d, {
                onClick: () => {
                  lB.send("baf2coopstay"), pB()
                },
                children: JB(`${xg}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var Ag = dB(1317),
      bg = dB(35692),
      ng = dB.n(bg);
    const eg = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Bo = "buildAFactory2Game:",
      To = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Vo(BB, TB, dB) {
      return void 0 === TB ? dB : "string" === typeof TB ? TB : Array.isArray(TB) ? TB.map((TB => "string" === typeof TB ? TB : "translationKey" in TB ? BB(TB.translationKey) : "")).join("") : BB(TB.translationKey)
    }

    function yo(BB) {
      const TB = {};
      for (const [dB, VB] of Object.entries(null !== BB && void 0 !== BB ? BB : {})) TB[dB] = VB < 0 ? Op(VB) : VB.toLocaleString("en-US");
      return TB
    }

    function po(BB, TB) {
      const dB = TB ? "touch" : "mouse";
      return {
        use: BB(`${Bo}lookUse_${dB}`),
        Use: BB(`${Bo}lookUseStart_${dB}`)
      }
    }
    const Jo = (0, VB.memo)((function(BB) {
      let {
        item: TB
      } = BB;
      return (0, mp.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, mp.jsx)(ty.c, {
          itemName: TB,
          amount: 0
        })
      })
    }));

    function Yo(BB) {
      let {
        label: TB,
        percent: dB,
        progress: VB
      } = BB;
      return (0, mp.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, mp.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${TB}: ${VB}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": dB,
          children: (0, mp.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${dB}%`
            }
          })
        }), (0, mp.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: VB
        })]
      })
    }

    function go(BB) {
      let {
        chips: TB
      } = BB;
      return (0, mp.jsx)("span", {
        className: "Baf2QuestChips",
        children: TB.map((BB => {
          let [TB, dB, VB] = BB;
          const yB = dB >= VB;
          return (0, mp.jsxs)("span", {
            className: Hy()("Baf2QuestChip", {
              Met: yB
            }),
            children: [(0, mp.jsx)(Jo, {
              item: TB
            }), (0, mp.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: yB ? `\u2713${VB}` : `${dB}/${VB}`
            })]
          }, TB)
        }))
      })
    }

    function oo(BB, TB) {
      const {
        key: dB,
        params: VB
      } = OB(TB, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return BB(`${Bo}${dB}`, {
        ...VB,
        name: BB(`${Bo}${EB(TB).nameKey}`)
      })
    }

    function ko(BB) {
      let {
        core: TB,
        t: dB
      } = BB;
      const [VB, yB] = TB, pB = yB > 0 ? Math.floor(100 * VB / yB) : 100;
      return (0, mp.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": dB(`${Bo}questCoreLabel`, {
          have: String(VB),
          need: String(yB)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": pB,
        children: [(0, mp.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: dB(`${Bo}questCore`, {
            percent: String(pB)
          })
        }), (0, mp.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, mp.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${pB}%`
            }
          })
        })]
      })
    }

    function Lo(BB) {
      let {
        rows: TB,
        t: dB
      } = BB;
      const VB = TB.filter((BB => BB.done)).length;
      return (0, mp.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": dB(`${Bo}questStepsProgress`, {
          done: String(VB),
          total: String(TB.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": TB.length,
        "aria-valuenow": VB,
        children: TB.map((BB => (0, mp.jsx)("span", {
          className: Hy()("Baf2QuestSegment", {
            Done: BB.done,
            Current: BB.current
          })
        }, BB.id)))
      })
    }
    const Oo = (0, VB.memo)(uo, Do);

    function Do(BB, TB) {
      const dB = dB => BB.view.itemNames[dB] === TB.view.itemNames[dB];
      return BB.t === TB.t && BB.extra === TB.extra && (null === BB.row.item || dB(BB.row.item)) && BB.row.madeFor.every(dB) && BB.row.also.every(dB) && ng()(BB.row, TB.row)
    }

    function uo(BB) {
      let {
        row: TB,
        view: dB,
        t: VB,
        extra: yB
      } = BB;
      const {
        isTouchScreen: pB
      } = (0, Oy.m)(["isTouchScreen"]), lB = TB.item ? function(BB, TB, dB) {
        return 1 !== dB && eg.has(BB) ? my(TB) : null
      }(TB.key, TB.item, TB.total) : null, JB = lB ? VB(lB) : TB.item ? Vo(VB, dB.itemNames[TB.item], TB.item) : "", YB = TB.also.map((BB => Vo(VB, dB.itemNames[BB], BB))), gB = YB.join(", "), oB = function(BB, TB) {
        var dB;
        return TB.length < 2 ? null !== (dB = TB[0]) && void 0 !== dB ? dB : "" : BB(`${Bo}listAnd`, {
          rest: TB.slice(0, -1).join(BB(`${Bo}listComma`)),
          last: TB[TB.length - 1]
        })
      }(VB, [JB, ...YB]), kB = VB(`${Bo}${TB.key}`, {
        ...po(VB, pB),
        ...yo(TB.params),
        item: JB,
        also: gB,
        itemList: oB,
        total: String(TB.total)
      }), [LB, ...OB] = kB.split("\n"), DB = TB.total > 1 && !TB.done && !TB.away;
      return (0, mp.jsxs)("li", {
        className: Hy()("Baf2QuestStep", {
          Done: TB.done,
          Current: TB.current,
          JustFinished: TB.justFinished,
          Away: TB.away
        }),
        children: [!TB.done && null !== TB.item && (0, mp.jsx)(Jo, {
          item: TB.item
        }), (TB.done || null === TB.item) && (0, mp.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: TB.done ? "\u2713" : "\u25cb"
        }), (0, mp.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mp.jsx)("strong", {
            children: LB
          }), OB.length > 0 && (0, mp.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: OB.join(" ")
          }), !TB.done && TB.madeFor.length > 0 && (0, mp.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: VB("buildAFactory2Game:questRowFor", {
              items: TB.madeFor.map((BB => Vo(VB, dB.itemNames[BB], BB))).join(" \u2192 ")
            })
          }), DB && (0, mp.jsx)(Yo, {
            label: LB,
            percent: Math.round(100 * TB.amount / TB.total),
            progress: `${TB.amount.toLocaleString("en-US")}/${TB.total.toLocaleString("en-US")}`
          }), !TB.done && !TB.away && TB.chips && TB.chips.length > 0 && (0, mp.jsx)(go, {
            chips: TB.chips
          }), yB]
        })]
      })
    }

    function Ho(BB, TB) {
      let [dB, VB] = TB;
      return BB(`${Bo}${dB}`, yo(VB))
    }

    function Eo(BB) {
      let [TB, dB] = BB;
      return TB + JSON.stringify(dB)
    }

    function vo(BB) {
      let {
        goal: TB,
        t: dB
      } = BB;
      return TB ? (0, mp.jsx)("span", {
        className: "Baf2BookGoal",
        children: dB(`${Bo}${TB}`)
      }) : null
    }

    function mo(BB) {
      let {
        view: TB,
        t: dB
      } = BB;
      if (!TB.name) return null;
      const VB = Py(TB.rows);
      return (0, mp.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, mp.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: dB(`${Bo}currentQuest`)
        }), (0, mp.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Ho(dB, TB.name)
        }), (0, mp.jsx)(vo, {
          goal: TB.goal,
          t: dB
        }), VB.length > 1 && (0, mp.jsx)(Lo, {
          rows: VB,
          t: dB
        }), (0, mp.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: TB.rows.map((BB => (0, mp.jsx)(Oo, {
            row: BB,
            view: TB,
            t: dB
          }, BB.id)))
        }), TB.reward && (0, mp.jsxs)("span", {
          className: "Baf2BookReward",
          children: [dB(`${Bo}questReward`), (0, mp.jsx)(Jo, {
            item: TB.reward
          }), Vo(dB, TB.itemNames[TB.reward], TB.reward)]
        })]
      })
    }

    function io(BB) {
      let {
        quest: TB,
        upcoming: dB,
        t: VB
      } = BB;
      return (0, mp.jsxs)("li", {
        className: Hy()("Baf2BookQuest", {
          Done: TB[3],
          Upcoming: dB
        }),
        children: [(0, mp.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: TB[3] ? "\u2713" : "\u25cb"
        }), (0, mp.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, mp.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Ho(VB, TB)
          }), (0, mp.jsx)(vo, {
            goal: TB[2],
            t: VB
          })]
        })]
      })
    }

    function No(BB) {
      let {
        done: TB,
        total: dB,
        t: VB
      } = BB;
      const yB = dB > 0 ? Math.round(100 * TB / dB) : 0,
        pB = VB(`${Bo}questBookChapterProgress`, {
          done: String(TB),
          total: String(dB)
        });
      return (0, mp.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, mp.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": pB,
          "aria-valuemin": 0,
          "aria-valuemax": dB,
          "aria-valuenow": TB,
          children: (0, mp.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${yB}%`
            }
          })
        }), (0, mp.jsx)("span", {
          className: "Baf2BookProgressText",
          children: pB
        })]
      })
    }

    function to(BB) {
      let {
        view: TB,
        tier: dB,
        quests: VB,
        t: yB
      } = BB;
      const pB = dB === TB.tier,
        lB = (null !== VB && void 0 !== VB ? VB : []).filter((BB => !BB[4])),
        JB = (null !== VB && void 0 !== VB ? VB : []).filter((BB => BB[4])),
        YB = lB.filter((BB => BB[3])).length,
        gB = pB && TB.name ? Eo(TB.name) : null,
        oB = lB.findIndex((BB => !BB[3] && Eo(BB) === gB));
      return (0, mp.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, mp.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, mp.jsx)("h3", {
            children: oo(yB, dB)
          }), lB.length > 0 && (0, mp.jsx)(No, {
            done: YB,
            total: lB.length,
            t: yB
          }), pB && TB.core && (0, mp.jsx)(ko, {
            core: TB.core,
            t: yB
          })]
        }), (0, mp.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === VB && pB && (0, mp.jsx)(mo, {
            view: TB,
            t: yB
          }), lB.map(((BB, dB) => dB === oB ? (0, mp.jsx)(mo, {
            view: TB,
            t: yB
          }, Eo(BB)) : (0, mp.jsx)(io, {
            quest: BB,
            upcoming: !BB[3],
            t: yB
          }, Eo(BB))))]
        }), pB && TB.side && (0, mp.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, mp.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: yB(`${Bo}questSide`)
          }), (0, mp.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Ho(yB, TB.side.name)
          }), (0, mp.jsx)(vo, {
            goal: TB.side.goal,
            t: yB
          }), (0, mp.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, mp.jsx)(Oo, {
              row: TB.side.row,
              view: TB,
              t: yB
            })
          })]
        }), JB.length > 0 && (0, mp.jsxs)(mp.Fragment, {
          children: [(0, mp.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: yB(`${Bo}questBookSidesDone`)
          }), (0, mp.jsx)("ol", {
            className: "Baf2BookQuests",
            children: JB.map((BB => (0, mp.jsx)(io, {
              quest: BB,
              upcoming: !1,
              t: yB
            }, Eo(BB))))
          })]
        })]
      })
    }

    function fo(BB) {
      var TB, dB, pB;
      let {
        store: lB,
        close: JB
      } = BB;
      const {
        t: YB
      } = (0, iy.z)(), gB = (0, Ag.f)(Uy, lB.get()), kB = null !== (TB = gB.tier) && void 0 !== TB ? TB : 1, [LB, OB] = (0, VB.useState)(null), DB = (null === LB || void 0 === LB ? void 0 : LB.at) === kB ? LB.tier : kB, EB = (0, VB.useRef)(null), vB = null !== gB.chapters;
      (0, VB.useEffect)((() => {
        var BB;
        EB.current && (EB.current.scrollTop = 0);
        const TB = null === (BB = EB.current) || void 0 === BB ? void 0 : BB.querySelector(".Baf2BookQuest.Current");
        if (EB.current && TB) {
          const BB = TB.getBoundingClientRect().bottom - EB.current.getBoundingClientRect().bottom;
          BB > 0 && (EB.current.scrollTop += Math.min(BB, TB.getBoundingClientRect().top - EB.current.getBoundingClientRect().top))
        }
      }), [DB, vB]);
      const mB = null === (dB = gB.chapters) || void 0 === dB ? void 0 : dB.find((BB => {
        let [TB] = BB;
        return TB === DB
      }));
      return (0, mp.jsx)(ul.b, {
        close: JB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: To,
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: YB(`${Bo}questBookTitle`)
            }), (0, mp.jsx)(Hl.i, {
              onClick: JB
            })]
          }), (0, mp.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": YB(`${Bo}questBookChapters`),
            children: yB.slice(0, oB()).map(((BB, TB) => {
              const dB = TB + 1,
                {
                  kind: VB,
                  short: yB
                } = HB(dB),
                pB = uB(dB, kB),
                lB = pB ? YB(`${Bo}coreAtomicHidden`) : oo(YB, dB);
              return (0, mp.jsx)("li", {
                children: (0, mp.jsx)("button", {
                  type: "button",
                  className: Hy()({
                    Stage: "tier" !== VB,
                    Atomic: "atomic" === VB,
                    Current: dB === kB,
                    Selected: dB === DB
                  }),
                  disabled: dB > kB,
                  "aria-pressed": dB === DB,
                  "aria-label": lB,
                  title: pB ? void 0 : lB,
                  onClick: () => {
                    OB({
                      tier: dB,
                      at: kB
                    })
                  },
                  children: pB ? "?" : yB
                })
              }, BB.nameKey)
            }))
          }), (0, mp.jsxs)("div", {
            ref: EB,
            className: "Baf2BookBody",
            children: [cy(gB) && DB === kB && (0, mp.jsx)("p", {
              className: "Baf2BookEmpty",
              children: YB(`${Bo}questBookAllDone`)
            }), (0, mp.jsx)(to, {
              view: gB,
              tier: DB,
              quests: null !== (pB = null === mB || void 0 === mB ? void 0 : mB[1]) && void 0 !== pB ? pB : null,
              t: YB
            })]
          })]
        })
      })
    }
    const so = "buildAFactory2Game:";

    function Mo(BB) {
      let {
        tiers: TB,
        from: dB,
        tier: VB,
        shown: yB,
        dO: pB
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), JB = TB.map(((BB, TB) => {
        const JB = dB + TB,
          {
            kind: YB,
            short: gB
          } = HB(JB),
          oB = uB(JB, VB);
        return (0, mp.jsx)("li", {
          children: (0, mp.jsx)("button", {
            type: "button",
            className: Hy()({
              Stage: "tier" !== YB,
              Silhouette: oB,
              Reached: JB <= VB,
              Current: JB === VB,
              Next: JB === VB + 1,
              Selected: JB === yB
            }),
            disabled: oB,
            "aria-pressed": JB === yB,
            "aria-label": oB ? lB(`${so}coreAtomicHidden`) : void 0,
            title: oB ? void 0 : lB(`${so}${BB.nameKey}`),
            onClick: () => {
              pB(JB)
            },
            children: oB ? "?" : gB
          })
        }, BB.nameKey)
      }));
      return (0, mp.jsx)(mp.Fragment, {
        children: JB
      })
    }

    function zo(BB) {
      let {
        id: TB,
        label: dB,
        tiers: VB,
        from: yB,
        ...pB
      } = BB;
      return (0, mp.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, mp.jsx)("span", {
          id: TB,
          className: "Baf2CoreLadderLabel",
          children: dB
        }), (0, mp.jsx)("ol", {
          "aria-labelledby": TB,
          children: (0, mp.jsx)(Mo, {
            ...pB,
            tiers: VB,
            from: yB
          })
        })]
      })
    }

    function wo(BB) {
      const {
        t: TB
      } = (0, iy.z)(), dB = yB.findIndex((BB => void 0 !== BB.stage)), VB = yB.findIndex((BB => void 0 !== BB.reactorTier)), pB = dB < 0 ? yB : yB.slice(0, dB), lB = dB < 0 ? [] : yB.slice(dB, VB < 0 ? void 0 : VB), YB = VB < 0 || !JB() ? [] : yB.slice(VB);
      return (0, mp.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, mp.jsx)(zo, {
          ...BB,
          id: "baf2CoreTiersLabel",
          label: TB(`${so}coreTiersLabel`),
          tiers: pB,
          from: 1
        }), lB.length > 0 && (0, mp.jsx)(zo, {
          ...BB,
          id: "baf2CoreStagesLabel",
          label: TB(`${so}coreStagesLabel`),
          tiers: lB,
          from: dB + 1
        }), YB.length > 0 && (0, mp.jsx)(zo, {
          ...BB,
          id: "baf2CoreAtomicLabel",
          label: TB(`${so}coreAtomicLabel`),
          tiers: YB,
          from: VB + 1
        })]
      })
    }
    const Uo = "buildAFactory2Game:";

    function Fo(BB) {
      let {
        item: TB,
        itemNames: dB,
        children: VB
      } = BB;
      return (0, mp.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mp.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: TB,
            amount: 0
          })
        }), (0, mp.jsx)(fy.e, {
          text: dB[TB]
        }), VB]
      })
    }

    function Ko(BB) {
      const TB = new Map;
      for (const {
          block: VB
        }
        of BB.newDeposits) {
        var dB;
        TB.set(VB, (null !== (dB = TB.get(VB)) && void 0 !== dB ? dB : 0) + 1)
      }
      return [...TB]
    }

    function ro(BB) {
      let {
        value: TB,
        label: dB,
        more: VB
      } = BB;
      return (0, mp.jsxs)("li", {
        children: [(0, mp.jsx)("strong", {
          children: TB
        }), (0, mp.jsx)("span", {
          children: dB
        }), VB > 0 && (0, mp.jsxs)("em", {
          children: ["+", VB]
        })]
      })
    }

    function Io(BB) {
      let {
        items: TB,
        itemNames: dB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), [pB, lB] = (0, VB.useState)(null), JB = null !== pB && TB.includes(pB) ? pB : null;
      return (0, mp.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, mp.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: yB(`${Uo}coreRewardUnlocks`)
        }), (0, mp.jsx)("ul", {
          children: TB.map((BB => (0, mp.jsx)("li", {
            children: (0, mp.jsx)("button", {
              type: "button",
              className: Hy()("Baf2PanelIcon", {
                Picked: BB === JB
              }),
              title: by(yB, BB),
              "aria-label": by(yB, BB),
              "aria-pressed": BB === JB,
              onClick: () => {
                lB(BB === JB ? null : BB)
              },
              children: (0, mp.jsx)(ty.c, {
                itemName: BB,
                amount: 0
              })
            })
          }, BB)))
        }), (0, mp.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== JB && (0, mp.jsxs)(mp.Fragment, {
            children: [(0, mp.jsx)(fy.e, {
              text: dB[JB]
            }), " \xb7 ", (0, mp.jsx)(fy.e, {
              text: dB[FB(JB)]
            })]
          }), null === JB && yB(`${Uo}coreRecipeTap`)]
        })]
      })
    }

    function co(BB) {
      var TB, dB;
      let {
        def: VB,
        tier: yB,
        itemNames: pB
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), JB = yB > 1 ? EB(yB - 1) : void 0, YB = Math.round(2 * VB.islandRadius), gB = JB ? Math.round(2 * JB.islandRadius) : YB, oB = yB >= 3 ? uV(yB) : null;
      return (0, mp.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, mp.jsxs)("ul", {
          className: Hy()("Baf2CoreStats", {
            Four: null !== oB
          }),
          children: [(0, mp.jsx)(ro, {
            value: `${YB}\xd7${YB}`,
            label: lB(`${Uo}coreStatIsland`),
            more: YB - gB
          }), (0, mp.jsx)(ro, {
            value: String(VB.machineAllowance),
            label: lB(`${Uo}coreStatMachines`),
            more: VB.machineAllowance - (null !== (TB = null === JB || void 0 === JB ? void 0 : JB.machineAllowance) && void 0 !== TB ? TB : VB.machineAllowance)
          }), (0, mp.jsx)(ro, {
            value: String(VB.beltAllowance),
            label: lB(`${Uo}coreStatBelts`),
            more: VB.beltAllowance - (null !== (dB = null === JB || void 0 === JB ? void 0 : JB.beltAllowance) && void 0 !== dB ? dB : VB.beltAllowance)
          }), null !== oB && (0, mp.jsx)(ro, {
            value: String(oB),
            label: lB(`${Uo}coreStatStorage`),
            more: oB - (JB ? uV(yB - 1) : oB)
          })]
        }), VB.reward && (0, mp.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mp.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: lB(`${Uo}coreRewardItem`)
          }), (0, mp.jsx)(Fo, {
            item: VB.reward,
            itemNames: pB
          })]
        }), VB.newDeposits.length > 0 && (0, mp.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, mp.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: lB(VB.newDeposits.length > 1 ? `${Uo}coreRewardDeposits` : `${Uo}coreRewardDeposit`)
          }), Ko(VB).map((BB => {
            let [TB, dB] = BB;
            return (0, mp.jsx)(Fo, {
              item: TB,
              itemNames: pB,
              children: dB > 1 && ` \xd7${dB}`
            }, TB)
          }))]
        }), VB.unlocks.length > 0 && (0, mp.jsx)(Io, {
          items: VB.unlocks,
          itemNames: pB
        }), (0, mp.jsx)(So, {
          tier: yB
        })]
      })
    }

    function So(BB) {
      let {
        tier: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), VB = gy[TB];
      if (!VB) return null;
      const yB = Yy(TB, 0, 0).barrierMax !== Yy(TB - 1, 0, 0).barrierMax;
      return (0, mp.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, mp.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: yB ? dy.Chestplate : Ty,
            amount: 0
          })
        }), dB(`${Uo}gearPerkLine`, {
          perk: dB(`${Uo}${VB}`)
        })]
      })
    }

    function Po(BB, TB) {
      return null === BB ? TB : BB.value
    }

    function Qo(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === BB || dB - BB.atMs >= VB ? null : yB(BB.value, TB) ? BB.armed ? null : BB : BB.armed ? BB : {
        ...BB,
        armed: !0
      }
    }

    function Ro(BB, TB) {
      const dB = TB.filter((TB => {
        var dB;
        return !1 !== (null === (dB = BB.get(TB)) || void 0 === dB ? void 0 : dB.value)
      }));
      for (const [VB, yB] of BB) yB.value && !TB.includes(VB) && dB.push(VB);
      return dB
    }

    function ao(BB, TB, dB, yB) {
      const [pB, lB] = (0, VB.useState)((() => new Map)), JB = () => {
        lB((TB => function(BB, TB, dB, VB) {
          var yB;
          let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            lB = null;
          for (const [JB, YB] of BB) {
            const yB = Qo(YB, TB(JB), dB, VB, pB);
            yB !== YB && (lB ??= new Map(BB), null === yB ? lB.delete(JB) : lB.set(JB, yB))
          }
          return null !== (yB = lB) && void 0 !== yB ? yB : BB
        }(TB, BB, Date.now(), dB, yB)))
      };
      (0, VB.useEffect)((() => {
        JB()
      }), [TB, dB]), (0, VB.useEffect)((() => {
        if (0 === pB.size) return;
        const BB = Math.min(...[...pB.values()].map((BB => BB.atMs))),
          TB = setTimeout(JB, Math.max(0, BB + dB - Date.now()) + 1);
        return () => {
          clearTimeout(TB)
        }
      }), [pB, TB, dB]);
      return [pB, (TB, dB) => {
        lB((VB => {
          const pB = new Map(VB);
          return pB.set(TB, function(BB, TB, dB) {
            return {
              value: BB,
              atMs: dB,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(BB, TB)
            }
          }(dB, BB(TB), Date.now(), yB)), pB
        }))
      }]
    }
    const Zo = "buildAFactory2Game:";

    function Xo(BB) {
      let {
        message: TB,
        itemNames: dB
      } = BB;
      const yB = Sl(),
        {
          t: pB
        } = (0, iy.z)(),
        [lB, JB] = (0, VB.useState)(!1),
        [YB, gB] = function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wl;
          const [dB, VB] = ao((TB => BB.includes(TB)), BB, TB, Object.is);
          return [Ro(dB, BB), VB]
        }(TB.baf2CoreBankPaused),
        oB = new Set(YB),
        kB = [...TB.baf2CoreBanked];
      for (const VB of oB) kB.some((BB => {
        let [TB] = BB;
        return TB === VB
      })) || kB.push([VB, 0]);
      return 0 === kB.length ? null : (0, mp.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, mp.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": lB,
          onClick: () => {
            JB(!lB)
          },
          children: [(0, mp.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: pB(`${Zo}coreBankedLater`)
          }), (0, mp.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: kB.map((BB => {
              let [TB, dB] = BB;
              const VB = oB.has(TB);
              return (0, mp.jsxs)("span", {
                className: Hy()({
                  Paused: VB
                }),
                title: VB ? pB(`${Zo}coreBankPausedTag`) : void 0,
                children: [(0, mp.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, mp.jsx)(ty.c, {
                    itemName: TB,
                    amount: 0
                  })
                }), dB, VB && (0, mp.jsx)(Ny.e, {
                  name: "pause"
                })]
              }, TB)
            }))
          }), (0, mp.jsx)(Ny.e, {
            name: lB ? "angle-up" : "angle-down"
          })]
        }), lB && (0, mp.jsxs)(mp.Fragment, {
          children: [(0, mp.jsx)("ul", {
            children: kB.map((BB => {
              let [TB, VB] = BB;
              const lB = oB.has(TB);
              return (0, mp.jsxs)("li", {
                children: [(0, mp.jsxs)(Fo, {
                  item: TB,
                  itemNames: dB,
                  children: [(0, mp.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: VB
                  }), lB && (0, mp.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: pB(`${Zo}coreBankPausedTag`)
                  })]
                }), (0, mp.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, mp.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === VB,
                    onClick: () => {
                      yB.send(`baf2corewithdraw ${VB} ${TB}`)
                    },
                    children: pB(`${Zo}coreTake`)
                  }), (0, mp.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      yB.send(`${iB} ${TB}`), gB(TB, !lB)
                    },
                    children: pB(lB ? `${Zo}coreBankResume` : `${Zo}coreBankStop`)
                  })]
                })]
              }, TB)
            }))
          }), (0, mp.jsx)("p", {
            className: "Baf2CoreHint",
            children: pB(`${Zo}coreBankNote`)
          })]
        })]
      })
    }
    const Wo = "buildAFactory2Game:";

    function ho(BB) {
      const TB = Math.max(0, Math.floor(BB));
      return `${Math.floor(TB/60)}:${String(TB%60).padStart(2,"0")}`
    }

    function Co(BB) {
      let {
        item: TB
      } = BB;
      return (0, mp.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, mp.jsx)(ty.c, {
          itemName: TB,
          amount: 0
        })
      })
    }

    function Go() {
      return (0, mp.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, mp.jsx)(Ny.e, {
          name: "bolt"
        })
      })
    }

    function qo(BB) {
      let {
        charge: TB,
        hint: dB,
        itemNames: VB
      } = BB;
      const yB = Sl(),
        {
          t: pB
        } = (0, iy.z)(),
        [lB, JB, YB, gB, oB, kB, LB] = TB,
        [OB, DB] = function(BB) {
          var TB;
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wl,
            VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [yB, pB] = ao((() => BB), BB, dB, VB);
          return [Po(null !== (TB = yB.get("")) && void 0 !== TB ? TB : null, BB), BB => {
            pB("", BB)
          }]
        }(LB),
        uB = OB === LB ? kB : !OB,
        HB = gB >= oB,
        EB = lB.find((BB => {
          let [, TB, dB] = BB;
          return dB < .9 * TB
        }));
      let vB = `${Wo}coreChargeWaiting`,
        mB = {};
      return HB ? vB = `${Wo}coreChargeDone` : OB ? vB = `${Wo}coreChargeStopped` : uB && dB ? (vB = `${Wo}${dB[0]}`, mB = {
        item: by(pB, dB[1])
      }) : uB && EB ? (vB = `${Wo}coreChargeShort`, mB = {
        item: by(pB, EB[0])
      }) : uB && JB > 0 && !YB ? vB = `${Wo}coreChargePower` : uB && (vB = `${Wo}coreChargeRunning`), (0, mp.jsxs)("div", {
        className: Hy()("Baf2CoreCharge", {
          Waiting: !uB && !HB,
          Done: HB
        }),
        children: [(0, mp.jsxs)("h4", {
          children: [pB(`${Wo}coreChargeTitle`), (0, mp.jsx)("span", {
            children: pB(`${Wo}coreChargeProgress`, {
              done: ho(gB),
              need: ho(oB)
            })
          })]
        }), (0, mp.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, mp.jsx)("div", {
            style: {
              width: 100 * Math.min(gB, oB) / oB + "%"
            }
          })
        }), (0, mp.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [lB.map((BB => {
            var TB;
            let [dB, yB, lB] = BB;
            const JB = lB >= .9 * yB;
            return (0, mp.jsxs)("li", {
              className: Hy()({
                Done: JB,
                Short: uB && !JB
              }),
              children: [(0, mp.jsx)(Co, {
                item: dB
              }), (0, mp.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, mp.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mp.jsx)(fy.e, {
                    text: null !== (TB = VB[dB]) && void 0 !== TB ? TB : dB
                  }), (0, mp.jsx)("span", {
                    children: pB(`${Wo}coreChargeItem`, {
                      now: String(lB),
                      need: String(yB)
                    })
                  })]
                }), (0, mp.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, mp.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*lB/yB)}%`
                    }
                  })
                })]
              })]
            }, dB)
          })), JB > 0 && (0, mp.jsxs)("li", {
            className: Hy()("Baf2CoreChargePower", {
              Short: uB && !YB
            }),
            children: [(0, mp.jsx)(Go, {}), (0, mp.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mp.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mp.jsx)("span", {
                  children: pB(`${Wo}coreChargePowerRow`, {
                    power: bB(JB)
                  })
                })
              })
            })]
          })]
        }), (0, mp.jsx)("p", {
          className: "Baf2CoreHint",
          children: pB(vB, mB)
        }), !HB && (uB || OB) && (0, mp.jsx)("button", {
          type: "button",
          className: Hy()("Baf2CoreChargeToggle", {
            Stopped: OB
          }),
          onClick: () => {
            yB.send(tB), DB(!OB)
          },
          children: pB(OB ? `${Wo}coreChargeRestart` : `${Wo}coreChargeStop`)
        })]
      })
    }

    function xo(BB) {
      let {
        charge: TB,
        reached: dB,
        itemNames: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)();
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2CoreCharge", {
          Done: dB
        }),
        children: [(0, mp.jsxs)("h4", {
          children: [yB(`${Wo}coreChargeTitle`), (0, mp.jsx)("span", {
            children: yB(`${Wo}coreChargeSpecTime`, {
              time: ho(TB.seconds)
            })
          })]
        }), (0, mp.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [TB.items.map((BB => {
            var TB;
            let {
              item: pB,
              amount: lB
            } = BB;
            return (0, mp.jsxs)("li", {
              className: Hy()({
                Done: dB
              }),
              children: [(0, mp.jsx)(Co, {
                item: pB
              }), (0, mp.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, mp.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, mp.jsx)(fy.e, {
                    text: null !== (TB = VB[pB]) && void 0 !== TB ? TB : pB
                  }), (0, mp.jsx)("span", {
                    children: yB(`${Wo}coreChargeSpecItem`, {
                      need: String(lB)
                    })
                  })]
                })
              })]
            }, pB)
          })), TB.powerPerS > 0 && (0, mp.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, mp.jsx)(Go, {}), (0, mp.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, mp.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, mp.jsx)("span", {
                  children: yB(`${Wo}coreChargePowerRow`, {
                    power: bB(TB.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const jo = "buildAFactory2Game:";

    function Ao(BB) {
      let {
        def: TB,
        reached: dB,
        banked: VB,
        itemNames: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)();
      return (0, mp.jsx)("ul", {
        className: "Baf2CoreCost",
        children: TB.cost.map((BB => {
          let {
            item: TB,
            amount: lB
          } = BB;
          const JB = dB ? 0 : VB(TB);
          return (0, mp.jsx)("li", {
            children: (0, mp.jsx)(Fo, {
              item: TB,
              itemNames: yB,
              children: (0, mp.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: JB > 0 ? pB(`${jo}coreBankedFor`, {
                  amount: String(JB),
                  total: String(lB)
                }) : `\xd7${lB}`
              })
            })
          }, TB)
        }))
      })
    }

    function bo(BB, TB) {
      if (TB >= oB()) return BB(`${jo}coreMaxTier`);
      const dB = gB[TB + 1];
      return dB && !dB.startsWith("upgradeCore") ? BB(`${jo}coreGateQuest`, {
        quest: BB(`${jo}quest_${dB}`)
      }) : BB(`${jo}coreGateClosed`)
    }

    function no() {
      const {
        t: BB
      } = (0, iy.z)(), TB = Sl(), dB = (0, VB.useRef)(null), yB = (0, VB.useRef)(Date.now());
      return Xg(!0, dB), (0, mp.jsx)("div", {
        ref: dB,
        className: "Baf2CoreGrow",
        children: (0, mp.jsx)(Hl.k, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - yB.current >= 600 && TB.send(mB)
          },
          children: BB(`${jo}coreGrow`)
        })
      })
    }

    function eo(BB) {
      let {
        message: TB,
        itemNames: dB,
        next: VB
      } = BB;
      const yB = Sl(),
        {
          t: pB
        } = (0, iy.z)(),
        lB = TB.baf2CoreTier,
        JB = TB.baf2CoreReady,
        YB = TB.baf2CoreNeeds.filter((BB => {
          let [, TB, dB, VB] = BB;
          return VB > 0 && TB < dB
        })),
        gB = TB.baf2CoreNeeds.every((BB => {
          let [, TB, dB] = BB;
          return TB >= dB
        })),
        oB = TB.baf2CoreKeep;
      return (0, mp.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, mp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [JB && (0, mp.jsx)(no, {}), (0, mp.jsx)("h3", {
            children: pB(`${jo}coreBring`)
          }), (0, mp.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: TB.baf2CoreNeeds.map((BB => {
              let [TB, VB, lB, JB] = BB;
              return (0, mp.jsxs)("li", {
                className: Hy()({
                  Done: VB >= lB
                }),
                children: [(0, mp.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, mp.jsx)(ty.c, {
                    itemName: TB,
                    amount: 0
                  })
                }), (0, mp.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, mp.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, mp.jsx)(fy.e, {
                      text: dB[TB]
                    }), (0, mp.jsxs)("span", {
                      children: [VB, "/", lB]
                    })]
                  }), (0, mp.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, mp.jsx)("div", {
                      style: {
                        width: 100 * VB / lB + "%"
                      }
                    }), JB > 0 && (0, mp.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * JB / lB + "%"
                      }
                    })]
                  })]
                }), JB > 0 && VB < lB && (0, mp.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    yB.send(`${NB} ${TB}`)
                  },
                  children: pB(`${jo}coreDeposit`, {
                    amount: String(JB)
                  })
                })]
              }, TB)
            }))
          }), TB.baf2CoreCharge && (0, mp.jsx)(qo, {
            charge: TB.baf2CoreCharge,
            hint: TB.baf2CoreChargeHint,
            itemNames: dB
          }), !JB && YB.length > 1 && (0, mp.jsx)(Hl.k, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              yB.send(mB)
            },
            children: pB(`${jo}coreHandOver`)
          }), !JB && void 0 !== oB && (0, mp.jsx)("p", {
            className: "Baf2CoreHint",
            children: pB(`${jo}coreKeepRest`, {
              item: by(pB, oB)
            })
          }), !JB && !gB && 0 === YB.length && void 0 === oB && (0, mp.jsx)("p", {
            className: "Baf2CoreHint",
            children: pB(`${jo}coreNothingHeld`)
          }), (0, mp.jsx)(Xo, {
            message: TB,
            itemNames: dB
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mp.jsx)("h3", {
            children: pB(`${jo}coreRewards`)
          }), (0, mp.jsx)(co, {
            def: VB,
            tier: lB + 1,
            itemNames: dB
          })]
        })]
      })
    }

    function Bk(BB) {
      let {
        message: TB,
        itemNames: dB,
        shown: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), pB = TB.baf2CoreTier, lB = EB(VB), JB = VB <= pB, YB = new Map(TB.baf2CoreBanked), gB = !vB(pB, fB(TB)) && VB === pB;
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2CoreBody", {
          Locked: !JB
        }),
        children: [(0, mp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mp.jsx)("h3", {
            children: yB(JB ? `${jo}coreItTook` : `${jo}coreItNeeds`)
          }), 0 === lB.cost.length && (0, mp.jsx)("p", {
            className: "Baf2CoreHint",
            children: yB(`${jo}coreTierStart`)
          }), lB.cost.length > 0 && (0, mp.jsx)(Ao, {
            def: lB,
            reached: JB,
            banked: BB => {
              var TB;
              return function(BB, TB, dB, VB) {
                let yB = BB;
                for (let lB = TB + 2; lB <= dB; lB++) {
                  var pB;
                  const BB = EB(lB).cost.find((BB => BB.item === VB)),
                    TB = Math.min(yB, null !== (pB = null === BB || void 0 === BB ? void 0 : BB.amount) && void 0 !== pB ? pB : 0);
                  if (lB === dB) return TB;
                  yB -= TB
                }
                return 0
              }(null !== (TB = YB.get(BB)) && void 0 !== TB ? TB : 0, pB, VB, BB)
            },
            itemNames: dB
          }), lB.charge && (0, mp.jsx)(xo, {
            charge: lB.charge,
            reached: JB,
            itemNames: dB
          }), gB && (0, mp.jsxs)(mp.Fragment, {
            children: [(0, mp.jsx)("p", {
              className: "Baf2CoreHint",
              children: bo(yB, pB)
            }), (0, mp.jsx)(Xo, {
              message: TB,
              itemNames: dB
            })]
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, mp.jsx)("h3", {
            children: yB(JB ? `${jo}coreGave` : `${jo}coreLockedRewards`)
          }), (0, mp.jsx)(co, {
            def: lB,
            tier: VB,
            itemNames: dB
          })]
        })]
      })
    }

    function Tk(BB, TB) {
      const {
        key: dB,
        params: VB
      } = OB(TB - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return BB(`${jo}${dB}`, VB)
    }
    const dk = "buildAFactory2Game:",
      Vk = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      yk = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function pk(BB) {
      let {
        view: TB,
        close: dB,
        askIslands: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)(), [lB, JB] = (0, VB.useState)(!1);
      (0, VB.useEffect)((() => {
        if (!lB) return;
        const BB = window.setTimeout((() => {
          JB(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(BB)
        }
      }), [lB]);
      const {
        message: YB,
        itemNames: gB
      } = TB, oB = YB.baf2CoreTier, kB = EB(oB), LB = vB(oB, fB(YB)), [uB, HB] = YB.baf2CoreMachines, [mB, iB] = YB.baf2CoreBelts, NB = YB.baf2CoreStorage, tB = YB.baf2CoreReady, [sB, MB] = (0, VB.useState)(null), zB = (null === sB || void 0 === sB ? void 0 : sB.at) === oB && sB.ready === tB ? sB.tier : LB ? oB + 1 : oB;
      let wB = "coreTierLocked";
      zB <= oB ? wB = "coreTierReached" : zB === oB + 1 && (wB = "coreTierNext");
      const UB = pB(`${dk}${EB(zB).nameKey}`),
        FB = zB === oB + 1 ? LB : null,
        KB = OB(zB, {
          tier: wB,
          stage: Vk[wB],
          atomic: yk[wB]
        }),
        rB = pB(`${dk}${KB.key}`, {
          ...KB.params,
          name: UB
        }),
        IB = OB(oB, DB),
        cB = pB(`${dk}${IB.key}`, {
          ...IB.params,
          name: pB(`${dk}${kB.nameKey}`)
        });
      return (0, mp.jsx)(ul.b, {
        close: dB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              children: [(0, mp.jsx)("h2", {
                id: "baf2CoreTitle",
                children: pB(`${dk}coreTitle`)
              }), void 0 !== YB.baf2CoreIslandName && (0, mp.jsx)("p", {
                className: "Baf2CoreIsland",
                children: YB.baf2CoreIslandName
              }), (0, mp.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, mp.jsx)("span", {
                  children: cB
                }), (0, mp.jsx)("span", {
                  className: Hy()({
                    Full: uB >= HB
                  }),
                  children: pB(`${dk}coreMachineCount`, {
                    amount: String(uB),
                    total: String(HB)
                  })
                }), (0, mp.jsx)("span", {
                  className: Hy()({
                    Full: mB >= iB
                  }),
                  children: pB(`${dk}coreBeltCount`, {
                    amount: String(mB),
                    total: String(iB)
                  })
                }), void 0 !== NB && (0, mp.jsx)("span", {
                  className: Hy()({
                    Full: NB[0] >= NB[1]
                  }),
                  children: pB(`${dk}coreStorageCount`, {
                    amount: String(NB[0]),
                    total: String(NB[1])
                  })
                })]
              })]
            }), (0, mp.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [YB.baf2CoreIslands && (0, mp.jsx)(Hl.d, {
                className: "Baf2CoreIslandsButton",
                disabled: lB,
                onClick: () => {
                  JB(!0), yB()
                },
                children: pB(`${dk}islandsOpenButton`)
              }), (0, mp.jsx)(Hl.i, {
                onClick: dB
              })]
            })]
          }), (0, mp.jsx)(wo, {
            tier: oB,
            shown: zB,
            dO: BB => {
              MB({
                tier: BB,
                at: oB,
                ready: tB
              })
            }
          }), (0, mp.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [rB, zB > oB + 1 && (0, mp.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: Tk(pB, zB)
            })]
          }), 6 === zB && zB > oB && (0, mp.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: pB(`${dk}coreStagesNote`)
          }), 11 === zB && zB > oB && (0, mp.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: pB(`${dk}coreAtomicNote`)
          }), FB && (0, mp.jsx)(eo, {
            message: YB,
            itemNames: gB,
            next: FB
          }), !FB && (0, mp.jsx)(Bk, {
            message: YB,
            itemNames: gB,
            shown: zB
          })]
        })
      })
    }
    const lk = {
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
    const Jk = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: Tp,
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

    function Yk(BB) {
      return BB.baf2DropCometOreOnly ? "dropCometOre" : BB.baf2DropCometIsotope ? "seed" === BB.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function gk(BB) {
      let {
        message: TB,
        quests: dB,
        close: yB,
        lD: pB
      } = BB;
      const lB = Sl(),
        {
          t: JB
        } = (0, iy.z)(),
        YB = (0, Ag.f)(Uy, dB.get()),
        gB = function(BB) {
          var TB;
          if (!IB(BB.tutorial)) return null;
          const dB = BB.rows.find((BB => BB.current)),
            VB = dB ? lk[dB.key] : void 0;
          return null !== (TB = null !== VB && void 0 !== VB ? VB : BB.side ? lk[BB.side.row.key] : void 0) && void 0 !== TB ? TB : null
        }(YB),
        oB = null === YB.tier || yp(YB.tier),
        kB = oB ? Jk : Jk.filter((BB => {
          let {
            item: TB
          } = BB;
          return TB !== Tp
        })),
        [LB, OB] = (0, VB.useState)(null),
        DB = null !== LB && void 0 !== LB ? LB : !TB.baf2DropFoundSalvage && oB,
        uB = TB.baf2DropRuinDistance,
        HB = TB.baf2DropComet,
        EB = TB.baf2DropOldWorks,
        vB = TB.baf2DropGrove,
        mB = function(BB) {
          return 2 + Number(void 0 !== BB.baf2DropComet) + Number(!!BB.baf2DropOwedComet || void 0 !== BB.baf2DropOwedWaitMinutes) + Number(void 0 !== BB.baf2DropDigDistance) + Number(void 0 !== BB.baf2DropOldWorks) + Number(void 0 !== BB.baf2DropGrove)
        }(TB),
        iB = BB => {
          lB.send(function(BB) {
            return `baf2drop ${BB}`
          }(BB)), pB()
        };
      let NB = JB("buildAFactory2Game:dropRuinNone");
      if (null !== uB) {
        let BB = TB.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        TB.baf2DropRuinOldWorks && (BB = "dropRuinOldWorks");
        const dB = void 0 === TB.baf2DropRuinCluster ? JB("buildAFactory2Game:dropRuinOpen") : JB("buildAFactory2Game:dropRuinCluster", {
          count: String(TB.baf2DropRuinCluster)
        });
        NB = `${JB(`buildAFactory2Game:${BB}`,{distance:String(uB)})} ${dB}`
      }
      let tB = JB("buildAFactory2Game:dropBelowDescription");
      void 0 !== TB.baf2DropBelowLook && (tB = JB("buildAFactory2Game:dropBelowLook", {
        look: JB(TB.baf2DropBelowLook)
      }));
      const fB = "buildAFactory2Game:wildsRegion_survivorGrove" === TB.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        sB = Dp(JB, 60 * function(BB) {
          const [TB, dB] = (0, VB.useState)((() => Date.now())), [yB, pB] = (0, VB.useState)(TB);
          return (0, VB.useEffect)((() => {
            const BB = Date.now();
            dB(BB), pB(BB)
          }), [BB]), (0, VB.useEffect)((() => {
            const BB = window.setInterval((() => {
              pB(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(BB)
            }
          }), []), Math.max(1, BB.baf2DropRenewMinutes - Math.floor((yB - TB) / 6e4))
        }(TB)),
        MB = function(BB, TB, dB) {
          return "ruin" === BB && !dB || "owed" === BB && !TB.baf2DropOwedComet ? null : BB
        }(gB, TB, null !== uB),
        zB = function(BB) {
          for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
          return Hy()("Baf2DropTile", ...dB, {
            Wanted: MB === BB
          })
        };
      return (0, mp.jsx)(ul.b, {
        close: yB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mp.jsxs)("section", {
          className: Hy()("Baf2Panel Baf2DropMap", {
            Many: mB >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              children: [(0, mp.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: JB("buildAFactory2Game:dropMapTitle")
              }), (0, mp.jsx)("p", {
                children: JB("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, mp.jsx)(Hl.i, {
              onClick: yB
            })]
          }), (0, mp.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== HB && (0, mp.jsxs)(Hl.x, {
              className: zB("comet", "Baf2DropComet"),
              onClick: () => {
                iB("comet")
              },
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropComet")
              }), (0, mp.jsx)("span", {
                children: JB(`buildAFactory2Game:${Yk(TB)}`, {
                  distance: String(HB)
                })
              })]
            }), TB.baf2DropOwedComet && (0, mp.jsxs)(Hl.x, {
              className: zB("owed", "Baf2DropComet"),
              onClick: () => {
                iB("owed")
              },
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropOwedComet")
              }), (0, mp.jsx)("span", {
                children: TB.baf2DropOwedIsotope ? JB("buildAFactory2Game:dropOwedIsotopeDescription") : JB("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== TB.baf2DropOwedWaitMinutes && (0, mp.jsxs)(Hl.x, {
              className: zB("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropOwedComet")
              }), (0, mp.jsx)("span", {
                children: JB("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(TB.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, mp.jsxs)(Hl.d, {
              className: zB("below"),
              onClick: () => {
                iB("below")
              },
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropBelow")
              }), (0, mp.jsx)("span", {
                children: tB
              })]
            }), void 0 !== TB.baf2DropDigDistance && (0, mp.jsxs)(Hl.r, {
              className: zB("dig"),
              onClick: () => {
                iB("dig")
              },
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropDig")
              }), (0, mp.jsx)("span", {
                children: JB("buildAFactory2Game:dropDigDescription", {
                  distance: String(TB.baf2DropDigDistance),
                  y: Op(TB.baf2DropDigY)
                })
              })]
            }), void 0 !== vB && (0, mp.jsxs)(Hl.r, {
              className: zB("grove", "Baf2DropGrove"),
              onClick: () => {
                iB("grove")
              },
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropGrove")
              }), (0, mp.jsx)("span", {
                children: JB(`buildAFactory2Game:${fB}`, {
                  distance: String(vB)
                })
              })]
            }), (0, mp.jsxs)(Hl.k, {
              className: zB("ruin"),
              disabled: null === uB,
              onClick: () => {
                iB("ruin")
              },
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropRuin")
              }), (0, mp.jsx)("span", {
                children: NB
              })]
            }), void 0 !== EB && (0, mp.jsxs)(Hl.K, {
              className: zB("works"),
              onClick: () => {
                iB("works")
              },
              children: [(0, mp.jsx)("strong", {
                children: JB("buildAFactory2Game:dropOldWorks")
              }), (0, mp.jsx)("span", {
                children: JB("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(EB)
                })
              })]
            })]
          }), (0, mp.jsx)("p", {
            className: "Baf2DropRenew",
            children: JB("buildAFactory2Game:dropRenew", {
              time: sB
            })
          }), (0, mp.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: DB,
            onToggle: BB => {
              BB.currentTarget.open !== DB && OB(BB.currentTarget.open)
            },
            children: [(0, mp.jsx)("summary", {
              children: JB("buildAFactory2Game:dropSalvageWhat")
            }), (0, mp.jsx)("p", {
              children: JB("buildAFactory2Game:dropSalvageIntro")
            }), (0, mp.jsx)("ul", {
              children: kB.map((BB => {
                let {
                  item: TB,
                  nameKey: dB,
                  useKey: VB,
                  params: yB
                } = BB;
                return (0, mp.jsxs)("li", {
                  children: [(0, mp.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, mp.jsx)(ty.c, {
                      itemName: TB,
                      amount: 0
                    })
                  }), (0, mp.jsxs)("span", {
                    children: [(0, mp.jsx)("strong", {
                      children: JB(dB)
                    }), ": ", JB(VB, yB)]
                  })]
                }, TB)
              }))
            })]
          })]
        })
      })
    }
    const kk = "buildAFactory2Game:";

    function Lk(BB, TB) {
      return BB.sendIslandEdit(`baf2coopleave ${TB.baf2IslandId}`)
    }

    function Ok(BB) {
      let {
        card: TB,
        canRename: dB,
        done: yB,
        t: pB
      } = BB;
      const lB = Sl(),
        [JB, YB] = (0, VB.useState)(TB.baf2IslandName),
        gB = ug(JB),
        oB = "" === gB || Hg(gB),
        kB = () => {
          !oB && dB && (gB !== TB.baf2IslandName ? yB(lB.sendIslandEdit(`baf2islandrename ${TB.baf2IslandId} ${gB}`)) : yB(null))
        },
        LB = () => {
          yB(null)
        };
      return (0, mp.jsxs)("div", {
        className: "Baf2IslandForm",
        ...ag(LB),
        children: [(0, mp.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [pB(`${kk}islandsRenameLabel`), (0, mp.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: JB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Zg,
            onChange: BB => {
              YB(BB.target.value)
            },
            ...Rg(kB, LB)
          })]
        }), "" === gB && (0, mp.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: pB(`${kk}islandsRenameEmpty`)
        }), Hg(gB) && (0, mp.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: pB(`${kk}islandsNameReserved`)
        }), (0, mp.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mp.jsx)(Hl.r, {
            disabled: oB || !dB,
            onClick: kB,
            children: pB(`${kk}islandsRenameSave`)
          }), (0, mp.jsx)(Hl.d, {
            onClick: LB,
            children: pB(`${kk}islandsCancel`)
          })]
        })]
      })
    }

    function Dk(BB) {
      let {
        card: TB,
        canDelete: dB,
        done: yB,
        t: pB
      } = BB;
      const lB = Sl(),
        [JB, YB] = (0, VB.useState)(""),
        gB = function(BB, TB) {
          return ug(BB).toLowerCase() === ug(TB).toLowerCase()
        }(JB, TB.baf2IslandName),
        oB = () => {
          gB && dB && yB(lB.sendIslandEdit(`baf2islanddelete ${TB.baf2IslandId}`))
        },
        kB = () => {
          yB(null)
        },
        LB = wg("name"),
        [OB, DB = ""] = pB(`${kk}islandsDeleteConfirm`, {
          name: LB
        }).split(LB);
      return (0, mp.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...ag(kB),
        children: [(0, mp.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, mp.jsxs)("span", {
            children: [OB, (0, mp.jsx)("strong", {
              children: TB.baf2IslandName
            }), DB]
          }), (0, mp.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: JB,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: Zg,
            onChange: BB => {
              YB(BB.target.value)
            },
            ...Rg(oB, kB)
          })]
        }), cg(TB) && (0, mp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: pB(`${kk}islandsDeleteLeftBack`)
        }), (0, mp.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, mp.jsx)(Hl.K, {
            disabled: !gB || !dB,
            onClick: oB,
            children: pB(`${kk}islandsDeleteForGood`)
          }), (0, mp.jsx)(Hl.d, {
            onClick: kB,
            children: pB(`${kk}islandsCancel`)
          })]
        })]
      })
    }

    function uk(BB) {
      let {
        members: TB,
        t: dB
      } = BB;
      const VB = TB.length;
      return (0, mp.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, mp.jsxs)("span", {
          children: [1 === VB ? dB(`${kk}islandsPlayersOne`) : dB(`${kk}islandsPlayers`, {
            count: String(VB)
          }), " "]
        }), TB.map(((BB, TB) => (0, mp.jsxs)("span", {
          className: Hy()("Baf2IslandMember", {
            Here: BB.baf2MemberHere
          }),
          title: BB.baf2MemberHere ? dB(`${kk}islandsPlayerHere`) : void 0,
          children: [BB.baf2MemberName, TB < VB - 1 ? ", " : ""]
        }, BB.baf2MemberKey)))]
      })
    }

    function Hk(BB) {
      let {
        card: TB,
        answered: dB,
        nowMs: yB,
        t: pB
      } = BB;
      const lB = Sl(),
        [JB, YB] = (0, VB.useState)(new Map),
        gB = cg(TB);
      if (!gB) return null;
      return (0, mp.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, mp.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: pB(`${kk}islandsLeftTitle`)
        }), (0, mp.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: gB.left.map((BB => {
            const VB = BB.baf2LeftKey,
              oB = Pg(JB.get(VB), dB, yB),
              kB = function(BB) {
                return 1 === BB ? [`${kg}islandsLeftItemsOne`] : [`${kg}islandsLeftItems`, {
                  count: String(BB)
                }]
              }(BB.baf2LeftItems);
            return (0, mp.jsx)("li", {
              className: Hy()("Baf2IslandPerson", {
                Pending: oB
              }),
              children: (0, mp.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mp.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2LeftName
                }), (0, mp.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: pB(kB[0], kB[1])
                }), gB.claim && (0, mp.jsx)(Hl.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: oB,
                  onClick: () => {
                    (BB => {
                      const dB = lB.sendIslandEdit(`baf2coopclaim ${TB.baf2IslandId} ${BB}`);
                      YB((TB => new Map(TB).set(BB, {
                        atMs: Date.now(),
                        answer: dB
                      })))
                    })(VB)
                  },
                  children: pB(`${kk}islandsClaim`)
                })]
              })
            }, VB)
          }))
        }), gB.goThere && (0, mp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: pB(`${kk}islandsClaimGoThere`)
        })]
      })
    }

    function Ek(BB) {
      let {
        card: TB,
        view: dB,
        blocked: yB,
        maxIslands: pB,
        answered: lB,
        nowMs: JB,
        done: YB,
        openSocial: gB,
        t: oB
      } = BB;
      const kB = Sl(),
        [LB, OB] = (0, VB.useState)(new Map),
        [DB, uB] = (0, VB.useState)(new Map),
        [HB, EB] = (0, VB.useState)(null),
        vB = (0, VB.useRef)(null);
      hg(vB);
      const mB = TB.baf2IslandId,
        iB = TB.baf2IslandCoop,
        NB = null !== iB && void 0 !== iB && iB.baf2CoopMembers.some((BB => BB.baf2MemberKey === HB)) ? HB : null,
        tB = function(BB, TB) {
          const dB = BB.baf2IslandCoop;
          return dB && Sg(dB) || null !== TB ? void 0 : BB.baf2IslandInvitable
        }(TB, yB),
        fB = function(BB, TB) {
          const dB = BB.baf2IslandCoop;
          return dB && Sg(dB) ? {
            key: `${kg}islandsCoopFull`,
            params: {
              max: String(dB.baf2CoopMax)
            }
          } : void 0 !== BB.baf2IslandInvitable && null === TB || dB && !dB.baf2CoopManageHere ? null : "degraded" === TB || "stuck" === TB ? {
            key: `${kg}islandsInviteNotLoaded`
          } : null === TB || function(BB) {
            return "notHome" === BB || "wilds" === BB || "visiting" === BB
          }(TB) || ig(TB) ? {
            key: `${kg}islandsInviteGoThere`
          } : {
            key: `${kg}islandsInviteBusy`
          }
        }(TB, yB),
        sB = () => {
          var BB;
          EB(null), null === (BB = vB.current) || void 0 === BB || BB.focus()
        };
      return (0, mp.jsxs)("div", {
        ref: vB,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...ag(null === NB ? YB : sB),
        children: [iB && (0, mp.jsxs)(mp.Fragment, {
          children: [(0, mp.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: oB(`${kk}islandsPlayersTitle`, {
              count: String(iB.baf2CoopMembers.length),
              max: String(iB.baf2CoopMax)
            })
          }), (0, mp.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: iB.baf2CoopMembers.map(((BB, TB) => {
              const VB = BB.baf2MemberKey,
                yB = Pg(LB.get(VB), lB, JB);
              return (0, mp.jsxs)("li", {
                className: Hy()("Baf2IslandPerson", {
                  Pending: yB
                }),
                children: [(0, mp.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, mp.jsx)("span", {
                    className: Hy()("Baf2IslandPersonName", {
                      Here: BB.baf2MemberHere
                    }),
                    children: BB.baf2MemberName
                  }), BB.baf2MemberHere && (0, mp.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: oB(`${kk}islandsPlayerHere`)
                  }), 0 === TB && (0, mp.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: oB(`${kk}islandsPlayerOwner`)
                  }), dB.remove && TB > 0 && !yB && NB !== VB && (0, mp.jsx)(Hl.N, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var BB;
                      EB(VB), null === (BB = vB.current) || void 0 === BB || BB.focus()
                    },
                    children: oB(`${kk}islandsRemove`)
                  })]
                }), NB === VB && (0, mp.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, mp.jsx)("p", {
                    children: Ug(oB, `${kk}islandsRemoveConfirm`, {
                      player: BB.baf2MemberName
                    })
                  }), (0, mp.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, mp.jsx)(Hl.K, {
                      onClick: () => {
                        (BB => {
                          const TB = kB.sendIslandEdit(`baf2coopremove ${mB} ${BB.baf2MemberKey}`);
                          OB((dB => new Map(dB).set(BB.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: TB
                          }))), sB()
                        })(BB)
                      },
                      children: oB(`${kk}islandsRemoveYes`)
                    }), (0, mp.jsx)(Hl.d, {
                      onClick: sB,
                      children: oB(`${kk}islandsCancel`)
                    })]
                  })]
                })]
              }, VB)
            }))
          })]
        }), (void 0 !== tB || null !== fB) && (0, mp.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: oB(`${kk}islandsInviteTitle`)
        }), !iB && (void 0 !== tB || null !== fB) && (0, mp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: oB(`${kk}islandsInviteShareNote`)
        }), 0 === (null === tB || void 0 === tB ? void 0 : tB.length) && (0, mp.jsx)(vk, {
          openSocial: gB,
          t: oB
        }), void 0 !== tB && tB.length > 0 && (0, mp.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: tB.map((BB => {
            const TB = !0 === BB.baf2InvitableSent || Pg(DB.get(BB.baf2InvitableId), lB, JB);
            return (0, mp.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, mp.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, mp.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: BB.baf2InvitableName
                }), BB.baf2InvitableFull && !TB && (0, mp.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: oB(`${kk}islandsInviteTheirFull`, {
                    max: String(pB)
                  })
                }), (TB || !BB.baf2InvitableFull) && (0, mp.jsx)(Hl.r, {
                  className: "Baf2IslandPersonButton",
                  disabled: TB,
                  onClick: () => {
                    (BB => {
                      const TB = kB.sendIslandEdit(`baf2coopinvite ${mB} ${BB}`);
                      uB((dB => new Map(dB).set(BB, {
                        atMs: Date.now(),
                        answer: TB
                      })))
                    })(BB.baf2InvitableId)
                  },
                  children: oB(TB ? `${kk}islandsInvited` : `${kk}islandsInvite`)
                })]
              })
            }, BB.baf2InvitableId)
          }))
        }), fB && (0, mp.jsx)(qg, {
          note: fB,
          t: oB
        }), (0, mp.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mp.jsx)(Hl.d, {
            onClick: YB,
            children: oB(`${kk}islandsDone`)
          })
        })]
      })
    }

    function vk(BB) {
      let {
        openSocial: TB,
        t: dB
      } = BB;
      return (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: dB(TB ? `${kk}islandsInviteNobody` : `${kk}islandsInviteNobodyGuest`)
        }), TB && (0, mp.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, mp.jsx)(Hl.d, {
            onClick: TB,
            children: dB("socialBar:social")
          })
        })]
      })
    }

    function mk(BB) {
      let {
        className: TB,
        text: dB,
        ConfirmButton: yB,
        confirmLabel: pB,
        canConfirm: lB,
        send: JB,
        done: YB,
        t: gB
      } = BB;
      const oB = (0, VB.useRef)(null);
      hg(oB);
      const kB = () => {
        YB(null)
      };
      return (0, mp.jsxs)("div", {
        ref: oB,
        tabIndex: -1,
        className: Hy()("Baf2IslandForm", TB),
        ...ag(kB),
        children: [(0, mp.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: dB
        }), (0, mp.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mp.jsx)(yB, {
            disabled: !lB,
            onClick: () => {
              lB && YB(JB())
            },
            children: pB
          }), (0, mp.jsx)(Hl.d, {
            onClick: kB,
            children: gB(`${kk}islandsCancel`)
          })]
        })]
      })
    }

    function ik(BB) {
      return "hidden" !== BB
    }

    function Nk(BB) {
      var TB, dB;
      let {
        card: yB,
        keepOwn: pB,
        blocked: lB,
        maxIslands: JB,
        serverNowMs: YB,
        nowMs: gB,
        actions: oB,
        full: kB,
        waits: LB,
        answered: OB,
        mode: DB,
        setMode: uB,
        pending: HB,
        onSent: EB,
        switchTo: vB,
        lD: mB,
        coopOn: iB,
        openSocial: NB,
        t: tB
      } = BB;
      const fB = Sl(),
        sB = yB.baf2IslandActive,
        MB = sB ? null : function(BB, TB) {
          if (BB <= 0) return null;
          const dB = TB - BB;
          if (dB < gp) return [`${kg}islandsPlayedJustNow`];
          if (dB < Lg) return [`${kg}islandsPlayedMinutes`, {
            minutes: String(Math.floor(dB / gp))
          }];
          if (dB < Og) return [`${kg}islandsPlayedHours`, {
            hours: String(Math.floor(dB / Lg))
          }];
          const VB = Math.floor(dB / Og);
          return 1 === VB ? [`${kg}islandsPlayedDay`] : [`${kg}islandsPlayedDays`, {
            days: String(VB)
          }]
        }(yB.baf2IslandLastPlayedMs, YB),
        zB = void 0 === (wB = yB.baf2IslandItems) ? null : 0 === wB ? [`${kg}islandsItemsNone`] : 1 === wB ? [`${kg}islandsItemsOne`] : [`${kg}islandsItems`, {
          count: String(wB)
        }];
      var wB;
      const UB = function(BB) {
          return BB ? 1 === BB ? [`${kg}islandsWaitingOne`] : [`${kg}islandsWaiting`, {
            count: String(BB)
          }] : null
        }(yB.baf2IslandWaiting),
        FB = yB.baf2IslandUnreadable,
        KB = yB.baf2IslandCoop,
        rB = Ig(yB, oB, pB, kB, iB),
        IB = (0, VB.useRef)(null);
      Xg(null !== DB, IB);
      const cB = () => {
          var BB;
          uB(null), null === (BB = IB.current) || void 0 === BB || BB.focus()
        },
        SB = (BB, TB) => {
          cB(), null !== BB && EB(BB, TB)
        },
        PB = (BB, TB) => tB(`${kk}${BB}`, {
          time: Dp(tB, TB)
        });
      return (0, mp.jsxs)("li", {
        ref: IB,
        tabIndex: -1,
        className: Hy()("Baf2IslandCard", {
          Active: sB,
          Pending: HB,
          Shared: void 0 !== KB
        }),
        children: [(0, mp.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, mp.jsx)("strong", {
            className: "Baf2IslandName",
            children: yB.baf2IslandName
          }), sB && (0, mp.jsx)("span", {
            className: "Baf2IslandBadge",
            children: tB(`${kk}islandsOnThis`)
          }), KB && (0, mp.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: tB(`${kk}islandsShared`)
          })]
        }), "member" === (null === KB || void 0 === KB ? void 0 : KB.baf2CoopRole) && (0, mp.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ug(tB, `${kk}islandsSharedBy`, {
            owner: KB.baf2CoopOwner
          })
        }), void 0 !== FB && (0, mp.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: tB("newer" === FB ? `${kk}islandsUnreadable` : `${kk}islandsDamaged`)
        }), "corrupt" === FB && kB && (0, mp.jsx)("p", {
          className: "Baf2IslandStats",
          children: tB(`${kk}islandsDamagedFull`)
        }), void 0 === FB && (0, mp.jsxs)(mp.Fragment, {
          children: [(0, mp.jsx)(Gg, {
            tier: yB.baf2IslandTier,
            t: tB
          }), (0, mp.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, mp.jsx)("span", {
              children: 1 === yB.baf2IslandQuestsDone ? tB(`${kk}islandsQuestsDoneOne`) : tB(`${kk}islandsQuestsDone`, {
                count: String(yB.baf2IslandQuestsDone)
              })
            }), (0, mp.jsx)("span", {
              children: 1 === yB.baf2IslandMachines ? tB(`${kk}islandsMachinesOne`) : tB(`${kk}islandsMachines`, {
                count: String(yB.baf2IslandMachines)
              })
            }), zB && (0, mp.jsx)("span", {
              children: tB(zB[0], zB[1])
            }), UB && (0, mp.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: tB(UB[0], UB[1])
            }), MB && (0, mp.jsx)("span", {
              children: tB(MB[0], MB[1])
            })]
          })]
        }), KB && void 0 === KB.baf2CoopState && "people" !== DB && (0, mp.jsx)(uk, {
          members: KB.baf2CoopMembers,
          t: tB
        }), null === DB && (0, mp.jsx)(Hk, {
          card: yB,
          answered: OB,
          nowMs: gB,
          t: tB
        }), rB.note && (0, mp.jsx)(qg, {
          note: rB.note,
          className: Hy()({
            Unreachable: void 0 !== (null === KB || void 0 === KB ? void 0 : KB.baf2CoopState)
          }),
          t: tB
        }), "rename" === DB && (0, mp.jsx)(Ok, {
          card: yB,
          canRename: "enabled" === rB.rename,
          done: SB,
          t: tB
        }), "delete" === DB && (0, mp.jsx)(Dk, {
          card: yB,
          canDelete: "enabled" === rB.delete,
          done: BB => {
            SB(BB, KB ? "delete" : void 0)
          },
          t: tB
        }), "people" === DB && (0, mp.jsx)(Ek, {
          card: yB,
          view: rB,
          blocked: lB,
          maxIslands: JB,
          answered: OB,
          nowMs: gB,
          done: cB,
          openSocial: NB,
          t: tB
        }), "lD" === DB && (0, mp.jsx)(mk, {
          className: "Leave",
          text: Ug(tB, `${kk}islandsLeaveConfirm`, {
            island: yB.baf2IslandName,
            owner: null !== (TB = null === (dB = yB.baf2IslandCoop) || void 0 === dB ? void 0 : dB.baf2CoopOwner) && void 0 !== TB ? TB : ""
          }),
          ConfirmButton: Hl.K,
          confirmLabel: tB(`${kk}islandsLeaveYes`),
          canConfirm: "enabled" === rB.lD,
          send: () => Lk(fB, yB),
          done: BB => {
            SB(BB, "lD"), null !== BB && sB && mB()
          },
          t: tB
        }), "unshare" === DB && (0, mp.jsx)(mk, {
          className: "Unshare",
          text: Ug(tB, `${kk}islandsStopSharingConfirm`, {
            island: yB.baf2IslandName
          }),
          ConfirmButton: Hl.r,
          confirmLabel: tB(`${kk}islandsStopSharing`),
          canConfirm: "enabled" === rB.unshare,
          send: () => fB.sendIslandEdit(`baf2coopunshare ${yB.baf2IslandId}`),
          done: BB => {
            SB(BB), null !== BB && mB()
          },
          t: tB
        }), null === DB && !HB && (0, mp.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": yB.baf2IslandName,
          children: [ik(rB.switch) && (0, mp.jsx)(Hl.r, {
            disabled: "enabled" !== rB.switch,
            onClick: vB,
            children: LB.switch > 0 ? PB("islandsSwitchIn", LB.switch) : tB(`${kk}islandsSwitch`)
          }), ik(rB.rename) && (0, mp.jsx)(Hl.d, {
            disabled: "enabled" !== rB.rename,
            onClick: () => {
              uB("rename")
            },
            children: tB(`${kk}islandsRename`)
          }), ik(rB.people) && (0, mp.jsx)(Hl.d, {
            disabled: "enabled" !== rB.people,
            onClick: () => {
              uB("people")
            },
            children: tB("players" === rB.peopleLabel ? `${kk}islandsPlayersButton` : `${kk}islandsInviteButton`)
          }), ik(rB.unshare) && (0, mp.jsx)(Hl.d, {
            disabled: "enabled" !== rB.unshare,
            onClick: () => {
              uB("unshare")
            },
            children: tB(`${kk}islandsStopSharing`)
          }), ik(rB.dismiss) && (0, mp.jsx)(Hl.d, {
            disabled: "enabled" !== rB.dismiss,
            onClick: () => {
              EB(Lk(fB, yB), "dismiss"), sB && mB()
            },
            children: tB(`${kk}islandsDismiss`)
          }), ik(rB.lD) && (0, mp.jsx)(Hl.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== rB.lD,
            onClick: () => {
              uB("lD")
            },
            children: sB && LB.switch > 0 ? PB("islandsLeaveIn", LB.switch) : tB(`${kk}islandsLeave`)
          }), ik(rB.delete) && (0, mp.jsx)(Hl.N, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== rB.delete,
            onClick: () => {
              uB("delete")
            },
            children: LB.change > 0 && rB.deleteWaits ? PB("islandsDeleteIn", LB.change) : tB(`${kk}islandsDelete`)
          })]
        })]
      })
    }
    const tk = "buildAFactory2Game:";

    function fk(BB) {
      let {
        invite: TB,
        actions: dB,
        full: yB,
        maxIslands: pB,
        waitSeconds: lB,
        focus: JB,
        focused: YB,
        join: gB,
        decline: oB,
        t: kB
      } = BB;
      const [LB, OB] = (0, VB.useState)(!1), DB = (0, VB.useRef)(null);
      Xg(LB, DB), (0, VB.useEffect)((() => {
        var BB;
        JB && (OB(!0), null === (BB = DB.current) || void 0 === BB || BB.focus(), YB())
      }), [JB, YB]);
      const uB = function(BB, TB, dB, VB, yB) {
          return dB ? {
            join: !1,
            note: {
              key: `${kg}islandsJoinTooMany`,
              params: {
                max: String(VB)
              }
            }
          } : BB.baf2InvitePlayers >= yB ? {
            join: !1,
            note: {
              key: `${kg}islandsJoinFull`
            }
          } : {
            join: TB.switch,
            note: null
          }
        }(TB, dB, yB, pB, 10),
        HB = TB.baf2InviteIsland,
        EB = TB.baf2InvitePlayers,
        vB = () => {
          var BB;
          OB(!1), null === (BB = DB.current) || void 0 === BB || BB.focus()
        },
        mB = lB > 0 && null === uB.note ? kB(`${tk}islandsJoinIn`, {
          time: Dp(kB, lB)
        }) : kB(`${tk}islandsJoin`);
      return (0, mp.jsxs)("li", {
        ref: DB,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...LB ? ag(vB) : {},
        children: [(0, mp.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, mp.jsx)("strong", {
            className: "Baf2IslandName",
            children: HB
          })
        }), (0, mp.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: Ug(kB, `${tk}islandsInvitedBy`, {
            owner: TB.baf2InviteOwner
          })
        }), (0, mp.jsx)(Gg, {
          tier: TB.baf2InviteTier,
          t: kB
        }), (0, mp.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, mp.jsx)("span", {
            children: 1 === EB ? kB(`${tk}islandsPlayersCountOne`) : kB(`${tk}islandsPlayersCount`, {
              count: String(EB)
            })
          })
        }), uB.note && (0, mp.jsx)(qg, {
          note: uB.note,
          t: kB
        }), LB && (0, mp.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: Ug(kB, `${tk}islandsJoinConfirm`, {
            island: HB
          })
        }), !LB && (0, mp.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": HB,
          children: [(0, mp.jsx)(Hl.r, {
            disabled: !uB.join,
            onClick: () => {
              var BB;
              OB(!0), null === (BB = DB.current) || void 0 === BB || BB.focus()
            },
            children: mB
          }), (0, mp.jsx)(Hl.d, {
            onClick: oB,
            children: kB(`${tk}islandsDecline`)
          })]
        }), LB && (0, mp.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, mp.jsx)(Hl.r, {
            disabled: !uB.join,
            onClick: gB,
            children: kB(`${tk}islandsJoinYes`)
          }), (0, mp.jsx)(Hl.d, {
            onClick: vB,
            children: kB(`${tk}islandsCancel`)
          })]
        })]
      })
    }

    function sk(BB) {
      let {
        invites: TB,
        actions: dB,
        full: VB,
        maxIslands: yB,
        waitSeconds: pB,
        focus: lB,
        focused: JB,
        lD: YB,
        declined: gB,
        t: oB
      } = BB;
      const kB = Sl();
      return (0, mp.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, mp.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: oB(`${tk}islandsInvitesTitle`)
        }), (0, mp.jsx)("ul", {
          className: "Baf2IslandCards",
          children: TB.map((BB => {
            const TB = BB.baf2InviteId;
            return (0, mp.jsx)(fk, {
              invite: BB,
              actions: dB,
              full: VB,
              maxIslands: yB,
              waitSeconds: pB,
              focus: lB === TB,
              focused: JB,
              join: () => {
                kB.send(`baf2coopaccept ${TB}`), YB()
              },
              decline: () => {
                kB.send(`baf2coopdecline ${TB}`), gB(TB)
              },
              t: oB
            }, TB)
          }))
        })]
      })
    }
    const Mk = "buildAFactory2Game:";

    function zk(BB) {
      let {
        cards: TB,
        activeName: dB,
        canStart: yB,
        waitSeconds: pB,
        lD: lB,
        t: JB
      } = BB;
      const YB = Sl(),
        [gB, oB] = (0, VB.useState)(!1),
        [kB, LB] = (0, VB.useState)(""),
        OB = (0, VB.useRef)(null);
      Xg(gB, OB), (0, VB.useEffect)((() => {
        var BB;
        gB && (null === (BB = OB.current) || void 0 === BB || BB.focus())
      }), [gB]);
      const DB = Eg(TB),
        uB = ug(kB),
        HB = Hg(uB),
        EB = () => {
          yB && !HB && (YB.send("" === uB || uB === DB ? jB : `${jB} ${uB}`), lB())
        },
        vB = () => {
          var BB;
          oB(!1), null === (BB = OB.current) || void 0 === BB || BB.focus()
        };
      return (0, mp.jsxs)("li", {
        ref: OB,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...gB ? ag(vB) : {},
        children: [(0, mp.jsx)("strong", {
          className: "Baf2IslandName",
          children: JB(`${Mk}islandsNewTitle`)
        }), !gB && (0, mp.jsx)("p", {
          className: "Baf2IslandStats",
          children: JB(`${Mk}islandsNewNote`)
        }), gB && (0, mp.jsxs)(mp.Fragment, {
          children: [(0, mp.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: Ug(JB, `${Mk}islandsNewConfirm`, {
              name: dB
            })
          }), (0, mp.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [JB(`${Mk}islandsNewNameLabel`), (0, mp.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: kB,
              placeholder: DB,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: Zg,
              onChange: BB => {
                LB(BB.target.value)
              },
              ...Rg(EB, vB)
            })]
          }), HB && (0, mp.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: JB(`${Mk}islandsNameReserved`)
          })]
        }), (0, mp.jsxs)("div", {
          className: Hy()("Baf2IslandButtons", {
            Stacked: gB
          }),
          children: [(0, mp.jsx)(Hl.r, {
            disabled: !yB || gB && HB,
            onClick: () => {
              if (!gB) return LB(DB), void oB(!0);
              EB()
            },
            children: pB > 0 ? JB(`${Mk}islandsNewIn`, {
              time: Dp(JB, pB)
            }) : JB(gB ? `${Mk}islandsNewConfirmButton` : `${Mk}islandsNew`)
          }), gB && (0, mp.jsx)(Hl.d, {
            onClick: vB,
            children: JB(`${Mk}islandsCancel`)
          })]
        })]
      })
    }

    function wk(BB) {
      var TB, dB;
      let {
        message: yB,
        arrivedAtMs: pB,
        close: lB,
        lD: JB,
        openSocial: YB
      } = BB;
      const gB = Sl(),
        {
          t: oB
        } = (0, iy.z)(),
        kB = Cg(1e3),
        [LB, OB] = (0, VB.useState)(null),
        [DB, uB] = (0, VB.useState)(new Map),
        [HB, EB] = (0, VB.useState)(new Set),
        vB = yB.baf2IslandCards,
        mB = function(BB, TB, dB, VB) {
          return (null !== BB && void 0 !== BB ? BB : []).filter((BB => TB + BB.baf2InviteLeftMs > dB && !VB.has(BB.baf2InviteId)))
        }(yB.baf2IslandsInvites, pB, kB, HB),
        iB = mB.map((BB => BB.baf2InviteId)).join(" "),
        NB = (0, VB.useRef)(null),
        tB = Wg(NB);
      (0, VB.useEffect)((() => {
        var BB, TB;
        null !== (BB = NB.current) && void 0 !== BB && BB.contains(document.activeElement) || (null === (TB = NB.current) || void 0 === TB || TB.focus())
      }), [yB, iB]), (0, VB.useEffect)((() => {
        uB((BB => function(BB, TB, dB, VB) {
          const yB = new Map;
          for (const pB of TB) {
            const TB = BB.get(pB.baf2IslandId);
            TB && (void 0 !== TB.untilGone || VB < TB.answer) && sg(TB, pB, dB) && yB.set(pB.baf2IslandId, TB)
          }
          return yB.size === BB.size ? BB : yB
        }(BB, yB.baf2IslandCards, Date.now(), yB.baf2IslandsAnswered)))
      }), [yB]);
      const fB = Dg(pB, yB.baf2IslandsWaitMs, kB),
        sB = yB.baf2IslandsBlocked,
        MB = Ng(sB, fB),
        zB = function(BB, TB) {
          const dB = Ng(BB, 0);
          return {
            switch: dB.switch ? TB : 0,
            change: dB.change ? TB : 0
          }
        }(sB, fB),
        wB = vB.length >= yB.baf2IslandsMax,
        UB = vB.length > 0,
        FB = function(BB, TB, dB) {
          return BB + Math.max(0, dB - TB)
        }(yB.baf2IslandsNowMs, pB, kB),
        KB = null !== (TB = null === (dB = vB.find((BB => BB.baf2IslandActive))) || void 0 === dB ? void 0 : dB.baf2IslandName) && void 0 !== TB ? TB : "",
        rB = function(BB) {
          const TB = BB.filter(rg).length;
          return TB <= 1 && TB < BB.length
        }(vB),
        IB = !0 === yB.baf2IslandsCoop,
        cB = function(BB, TB) {
          const dB = BB.find((BB => BB.baf2IslandActive)),
            VB = null === dB || void 0 === dB ? void 0 : dB.baf2IslandCoop;
          return dB && "member" === (null === VB || void 0 === VB ? void 0 : VB.baf2CoopRole) ? {
            key: `${kg}islandsKeepOwnMember`,
            names: {
              owner: VB.baf2CoopOwner,
              island: dB.baf2IslandName
            }
          } : {
            key: TB ? `${kg}islandsKeepOwn` : `${kg}islandsKeepOwnSolo`
          }
        }(vB, IB),
        [SB, PB] = (0, VB.useState)(null);
      (0, VB.useEffect)((() => {
        void 0 !== yB.baf2IslandsFocusInvite && PB(yB.baf2IslandsFocusInvite)
      }), [yB]);
      const QB = (0, VB.useCallback)((() => {
          PB(null)
        }), []),
        RB = LB ? vB.find((BB => BB.baf2IslandId === LB.id)) : void 0,
        aB = LB && RB && "hidden" !== Ig(RB, MB, rB, wB, IB)[LB.mode] ? LB : null;
      return (0, mp.jsx)(ul.b, {
        close: lB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, mp.jsxs)("section", {
          ref: NB,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: tB ? {
            marginTop: `${tB.marginTop}px`,
            maxHeight: `${tB.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              children: [(0, mp.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: oB(`${Mk}islandsTitle`)
              }), UB && (0, mp.jsx)("p", {
                children: oB(`${Mk}islandsSubtitle`, {
                  count: String(vB.length),
                  max: String(yB.baf2IslandsMax)
                })
              })]
            }), (0, mp.jsx)(Hl.i, {
              ariaLabel: oB(`${Mk}islandsClose`),
              onClick: lB
            })]
          }), (0, mp.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== sB && (0, mp.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: Ug(oB, vg(sB, mg(vB)), {
                island: KB
              })
            }), UB && mB.length > 0 && (0, mp.jsx)(sk, {
              invites: mB,
              actions: MB,
              full: wB,
              maxIslands: yB.baf2IslandsMax,
              waitSeconds: zB.switch,
              focus: SB,
              focused: QB,
              lD: JB,
              declined: BB => {
                EB((TB => new Set(TB).add(BB)))
              },
              t: oB
            }), UB && (0, mp.jsxs)(mp.Fragment, {
              children: [wB && (0, mp.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: oB(`${Mk}islandsFull`, {
                  max: String(yB.baf2IslandsMax)
                })
              }), (0, mp.jsx)("p", {
                className: "Baf2IslandsNote",
                children: Ug(oB, cB.key, cB.names)
              }), (0, mp.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [vB.map((BB => {
                  const TB = BB.baf2IslandId;
                  return (0, mp.jsx)(Nk, {
                    card: BB,
                    keepOwn: rB,
                    coopOn: IB,
                    openSocial: YB,
                    blocked: sB,
                    maxIslands: yB.baf2IslandsMax,
                    serverNowMs: FB,
                    nowMs: kB,
                    actions: MB,
                    full: wB,
                    waits: zB,
                    answered: yB.baf2IslandsAnswered,
                    mode: (null === aB || void 0 === aB ? void 0 : aB.id) === TB ? aB.mode : null,
                    setMode: BB => {
                      OB(null === BB ? null : {
                        id: TB,
                        mode: BB
                      })
                    },
                    pending: sg(DB.get(TB), BB, kB),
                    onSent: (dB, VB) => {
                      uB((yB => {
                        const pB = {
                          atMs: Date.now(),
                          from: BB.baf2IslandName,
                          answer: dB
                        };
                        return new Map(yB).set(TB, VB ? {
                          ...pB,
                          untilGone: VB
                        } : pB)
                      }))
                    },
                    lD: JB,
                    switchTo: () => {
                      gB.send(`baf2islandswitch ${TB}`), JB()
                    },
                    t: oB
                  }, TB)
                })), !wB && (0, mp.jsx)(zk, {
                  cards: vB,
                  activeName: KB,
                  canStart: MB.change,
                  waitSeconds: zB.change,
                  lD: JB,
                  t: oB
                })]
              })]
            })]
          })]
        })
      })
    }
    const Uk = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        VT: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      Fk = Object.keys(Uk),
      Kk = new Set([...Object.keys(XT), ...[...zT.Press.recipes, ...zT["Wire Mill"].recipes].map((BB => BB.output))]),
      rk = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      Ik = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      ck = / Bar$|Alloy$/,
      Sk = /Porkchop|Beef|Mutton|Venison|Steak/,
      Pk = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;

    function Qk(BB) {
      let {
        item: TB,
        name: dB,
        amount: VB,
        selected: yB,
        small: pB,
        onPick: lB
      } = BB;
      return (0, mp.jsxs)("button", {
        type: "button",
        className: Hy()("Baf2TermTile", {
          On: yB,
          Small: pB
        }),
        "aria-label": `${dB}: ${VB}`,
        "aria-pressed": yB,
        onClick: lB,
        children: [(0, mp.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: TB,
            amount: 0
          })
        }), (0, mp.jsx)("span", {
          className: "Baf2TermCount",
          children: Lp(VB, 1e4)
        }), !pB && (0, mp.jsx)("span", {
          className: "Baf2TermName",
          children: dB
        })]
      })
    }

    function Rk(BB) {
      let {
        store: TB,
        close: dB,
        send: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)(), {
        isTouchScreen: lB
      } = (0, Oy.m)(["isTouchScreen"]);
      ! function(BB) {
        const [TB, dB] = (0, VB.useState)(BB.version);
        (0, VB.useEffect)((() => (dB(BB.version), BB.subscribe((() => {
          dB(BB.version)
        })))), [BB])
      }(TB);
      const [JB, YB] = (0, VB.useState)("all"), [gB, oB] = (0, VB.useState)(!1), [kB, LB] = (0, VB.useState)(""), [OB, DB] = (0, VB.useState)(""), [uB, HB] = (0, VB.useState)(null), [EB, vB, mB] = function() {
        const BB = (0, VB.useRef)(null),
          [TB, dB] = (0, VB.useState)(!1),
          yB = () => {
            const TB = BB.current;
            dB(null !== TB && TB.scrollLeft + TB.clientWidth < TB.scrollWidth - 1)
          };
        return (0, VB.useEffect)(yB), (0, VB.useEffect)((() => {
          const TB = BB.current;
          if (!TB) return;
          const dB = new ResizeObserver(yB);
          return dB.observe(TB), () => {
            dB.disconnect()
          }
        }), []), [BB, TB, yB]
      }(), iB = (0, VB.useMemo)((() => new Map), [pB]), NB = BB => {
        let TB = iB.get(BB);
        return void 0 === TB && (TB = function(BB, TB) {
          const dB = /^(.+) \((.+)\)$/.exec(BB);
          return dB ? TB(dB[2], dB[1]) : BB
        }(by(pB, BB), ((BB, TB) => pB("buildAFactory2Game:terminalTileKind", {
          kind: BB,
          base: TB
        }))), iB.set(BB, TB)), TB
      }, tB = TB.isReadOnly(), fB = TB.recent(), sB = TB.items(), MB = OB.trim().toLowerCase(), zB = ("recent" === JB ? fB : sB).filter((BB => {
        const TB = NB(BB);
        return ("all" === JB || "recent" === JB || function(BB) {
          return pp(BB) ? "farm" : rk.test(BB) ? "nuclear" : ck.test(BB) ? "bars" : Sk.test(BB) ? "farm" : Ik.test(BB) ? "VT" : Kk.has(BB) ? "parts" : Pk.test(BB) ? "farm" : "other"
        }(BB) === JB) && ("" === MB || TB.toLowerCase().includes(MB)) && ("" === kB || TB.toUpperCase().startsWith(kB))
      })), wB = new Set(sB.map((BB => NB(BB).charAt(0).toUpperCase()))), UB = "recent" !== JB && fB.length > 0, FB = function(BB, TB) {
        return null !== BB && TB.includes(BB) ? BB : null
      }(uB, UB ? [...zB, ...fB] : zB), KB = null === FB ? 0 : TB.amount(FB), rB = BB => {
        HB(FB === BB ? null : BB)
      }, IB = BB => {
        null !== FB && KB > 0 && yB(TB.take(BB, FB))
      }, cB = "" !== kB ? pB("buildAFactory2Game:terminalEmptyLetter", {
        letter: kB
      }) : "" !== MB ? pB("buildAFactory2Game:terminalEmptySearch", {
        query: OB
      }) : pB("buildAFactory2Game:terminalEmpty");
      return (0, mp.jsx)(ul.b, {
        close: dB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              children: [(0, mp.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: pB(TB.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, mp.jsx)("p", {
                children: pB("buildAFactory2Game:terminalSubtitle", {
                  count: String(TB.siloCount())
                })
              })]
            }), (0, mp.jsx)(Hl.i, {
              onClick: dB
            })]
          }), (0, mp.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, mp.jsxs)("div", {
              className: "Baf2TermTools",
              children: [(0, mp.jsx)("div", {
                ref: EB,
                className: Hy()("Baf2TermChips", {
                  MoreRight: vB
                }),
                onScroll: mB,
                children: gB ? (0, mp.jsxs)(mp.Fragment, {
                  children: [(0, mp.jsx)("button", {
                    type: "button",
                    "aria-label": pB("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      oB(!1), LB("")
                    },
                    children: "\u2190"
                  }), [...wB].sort().map((BB => (0, mp.jsx)("button", {
                    type: "button",
                    className: Hy()({
                      On: kB === BB
                    }),
                    onClick: () => {
                      LB(kB === BB ? "" : BB)
                    },
                    children: BB
                  }, BB)))]
                }) : (0, mp.jsxs)(mp.Fragment, {
                  children: [(0, mp.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      oB(!0)
                    },
                    children: pB("buildAFactory2Game:terminalLetters")
                  }), Fk.map((BB => (0, mp.jsx)("button", {
                    type: "button",
                    className: Hy()({
                      On: JB === BB
                    }),
                    onClick: () => {
                      YB(BB)
                    },
                    children: pB(Uk[BB])
                  }, BB)))]
                })
              }), !lB && (0, mp.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: OB,
                placeholder: pB("buildAFactory2Game:terminalSearch"),
                "aria-label": pB("buildAFactory2Game:terminalSearch"),
                onChange: BB => {
                  DB(BB.target.value)
                },
                onKeyDown: BB => {
                  BB.stopPropagation()
                }
              }), (0, mp.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": pB("buildAFactory2Game:terminalResort"),
                title: pB("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  TB.resort()
                },
                children: "\u21c5"
              })]
            }), UB && (0, mp.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, mp.jsx)("span", {
                children: pB(Uk.recent)
              }), fB.map((BB => (0, mp.jsx)(Qk, {
                item: BB,
                name: NB(BB),
                amount: TB.amount(BB),
                selected: FB === BB,
                small: !0,
                onPick: () => {
                  rB(BB)
                }
              }, BB)))]
            }), (0, mp.jsx)("div", {
              className: "Baf2TermTiles",
              children: zB.length > 0 ? zB.map((BB => (0, mp.jsx)(Qk, {
                item: BB,
                name: NB(BB),
                amount: TB.amount(BB),
                selected: FB === BB,
                onPick: () => {
                  rB(BB)
                }
              }, BB))) : (0, mp.jsx)("p", {
                className: "Baf2TermEmpty",
                children: cB
              })
            }), (0, mp.jsxs)("div", {
              className: "Baf2TermActions",
              children: [(0, mp.jsx)("span", {
                className: "Baf2TermPicked",
                children: tB ? (0, mp.jsxs)(mp.Fragment, {
                  children: [null !== FB && KB > 0 ? NB(FB) : pB("buildAFactory2Game:terminalVisiting"), (0, mp.jsx)("small", {
                    children: pB("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== FB && KB > 0 ? (0, mp.jsxs)(mp.Fragment, {
                  children: [NB(FB), (0, mp.jsx)("small", {
                    children: pB("buildAFactory2Game:terminalStored", {
                      amount: KB.toLocaleString()
                    })
                  })]
                }) : pB("buildAFactory2Game:terminalPick")
              }), !tB && (0, mp.jsxs)(mp.Fragment, {
                children: [(0, mp.jsx)(Hl.d, {
                  className: "Baf2TermTake",
                  disabled: 0 === KB,
                  onClick: () => {
                    IB("one")
                  },
                  children: pB("buildAFactory2Game:terminalTakeOne")
                }), (0, mp.jsx)(Hl.d, {
                  className: "Baf2TermTake",
                  disabled: 0 === KB,
                  onClick: () => {
                    IB("stack")
                  },
                  children: pB("buildAFactory2Game:terminalTakeStack", {
                    amount: String(99)
                  })
                }), (0, mp.jsx)(Hl.k, {
                  className: "Baf2TermTake",
                  disabled: 0 === KB,
                  onClick: () => {
                    IB("fill")
                  },
                  children: pB("buildAFactory2Game:terminalFill")
                })]
              })]
            })]
          })]
        })
      })
    }

    function ak(BB) {
      let {
        kind: TB,
        icon: dB,
        label: VB,
        number: yB,
        preview: pB,
        note: lB,
        tone: JB = null,
        share: YB,
        onExplain: gB
      } = BB;
      return (0, mp.jsxs)("button", {
        type: "button",
        className: Hy()("NxLane", TB, {
          Warn: "warn" === JB,
          Danger: "danger" === JB
        }),
        onClick: gB,
        children: [(0, mp.jsxs)("span", {
          className: "NxLaneHead",
          children: [dB, (0, mp.jsx)("span", {
            className: "NxLaneLabel",
            children: VB
          })]
        }), (0, mp.jsxs)("span", {
          className: "NxLaneNum",
          children: [yB, pB && (0, mp.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", pB]
          })]
        }), (0, mp.jsx)("span", {
          className: "NxLaneNote",
          children: lB
        }), void 0 !== YB && (0, mp.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, YB)) + "%"
          }
        })]
      })
    }

    function Zk(BB) {
      let {
        kind: TB,
        step: dB,
        short: VB,
        planned: yB
      } = BB;
      return (0, mp.jsx)("i", {
        className: Hy()("NxPipe", TB, `Step${dB}`, {
          Short: VB,
          Planned: yB
        }),
        "aria-hidden": "true"
      })
    }

    function Xk(BB) {
      let {
        max: TB,
        bands: dB,
        ticks: VB,
        now: yB,
        settle: pB,
        settleTone: lB,
        onExplain: JB
      } = BB;
      const YB = BB => Math.max(0, Math.min(TB, BB)) / TB * 100 + "%";
      let gB = 0;
      return (0, mp.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: JB,
        children: [(0, mp.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [dB.map((BB => {
            const TB = {
              bottom: YB(gB),
              height: `calc(${YB(BB.upTo)} - ${YB(gB)})`
            };
            return gB = BB.upTo, (0, mp.jsx)("i", {
              className: Hy()("NxGaugeBand", BB.kind),
              style: TB
            }, BB.kind)
          })), null !== yB && (0, mp.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: YB(yB)
            }
          }), void 0 !== pB && null !== pB && (0, mp.jsx)("i", {
            className: Hy()("NxGaugeSettle", {
              Bad: "bad" === lB
            }),
            style: {
              bottom: YB(pB)
            }
          })]
        }), (0, mp.jsx)("span", {
          className: "NxGaugeTicks",
          children: VB.map((BB => (0, mp.jsx)("small", {
            style: {
              bottom: YB(BB)
            },
            children: BB
          }, BB)))
        })]
      })
    }

    function Wk(BB) {
      const [TB, dB] = (0, VB.useState)(null), [yB, pB] = (0, VB.useState)((() => {
        try {
          return null === window.localStorage.getItem(BB)
        } catch {
          return !1
        }
      })), lB = (0, VB.useRef)(null);
      (0, VB.useEffect)((() => () => {
        null !== lB.current && clearTimeout(lB.current)
      }), []);
      const JB = (0, VB.useCallback)((TB => {
          dB(TB), pB(!1);
          try {
            window.localStorage.setItem(BB, "1")
          } catch {}
          null !== lB.current && clearTimeout(lB.current), lB.current = setTimeout((() => {
            lB.current = null, dB(null)
          }), 5e3)
        }), [BB]),
        YB = (0, VB.useCallback)(((TB, dB) => {
          const VB = `${BB}:${TB}`;
          try {
            if (null !== window.localStorage.getItem(VB)) return;
            window.localStorage.setItem(VB, "1")
          } catch {
            return
          }
          JB(dB)
        }), [JB, BB]);
      return {
        explained: TB,
        hinting: yB,
        explain: JB,
        explainOnce: YB
      }
    }

    function hk(BB) {
      let {
        text: TB,
        tone: dB,
        explained: VB
      } = BB;
      return (0, mp.jsxs)("p", {
        className: Hy()("NxStatus", null === VB ? dB : "Explain"),
        "aria-live": "polite",
        children: [null !== VB && (0, mp.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== VB && void 0 !== VB ? VB : TB]
      })
    }
    const Ck = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Gk(BB, TB) {
      const dB = Number(BB[TB]);
      return 1 === dB || 2 === dB || 3 === dB ? dB : 0
    }

    function qk(BB) {
      return !!HY("reactor", BB.baf2RxNeed) || void 0 !== BB.baf2RxLayout && BB.baf2RxNeed.some((BB => {
        let [TB, dB] = BB;
        return dB > 0 && Ck.includes(TB)
      }))
    }
    const xk = "buildAFactory2Game:";

    function jk(BB) {
      let {
        status: TB,
        store: dB,
        busy: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)();
      return function(BB) {
        return 0 !== (BB.baf2RxFlags & YT) && (!BB.baf2RxFormed || void 0 !== BB.baf2RxLayout)
      }(TB) ? (0, mp.jsx)(Hl.k, {
        disabled: !qk(TB) || VB,
        onClick: () => {
          dB.tap("fill", (() => {
            dB.send("fill")
          }))
        },
        children: yB(void 0 !== TB.baf2RxLayout ? `${xk}rxFillLayout` : `${xk}rxFill`)
      }) : null
    }

    function Ak(BB) {
      let {
        status: TB,
        store: dB,
        readOnly: yB,
        bare: pB = !1
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), JB = TB.baf2RxLayout, [YB, gB, oB] = TB.baf2RxDims, kB = (0, VB.useMemo)((() => {
        if (void 0 === JB) return 0;
        const BB = Uint8Array.from(JB, ((BB, TB) => Gk(JB, TB)));
        return xJ([YB - 2, gB - 2, oB - 2], BB).max
      }), [JB, YB, gB, oB]);
      return void 0 === JB ? null : (0, mp.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!pB && (0, mp.jsx)("span", {
          className: "Baf2RxHint",
          children: lB(`${xk}rxLayoutLine`, {
            amount: fY(kB)
          })
        }), !yB && (0, mp.jsx)(Hl.d, {
          onClick: () => {
            dB.send("layout", 0)
          },
          children: lB(`${xk}rxLayoutHide`)
        })]
      })
    }
    const bk = "buildAFactory2Game:",
      nk = {
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

    function ek(BB) {
      let {
        id: TB,
        title: dB,
        body: VB,
        bodyParams: yB,
        yes: pB,
        cancel: lB,
        confirm: JB
      } = BB;
      const {
        t: YB
      } = (0, iy.z)();
      return (0, mp.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": TB,
        children: [(0, mp.jsx)("h3", {
          id: TB,
          children: YB(dB)
        }), (0, mp.jsx)("p", {
          children: YB(VB, yB)
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, mp.jsx)(Hl.g, {
            onClick: lB,
            children: YB(`${bk}rxCancel`)
          }), (0, mp.jsx)(Hl.K, {
            onClick: JB,
            children: YB(pB)
          })]
        })]
      })
    }

    function BL(BB) {
      const [TB, dB] = (0, VB.useState)((() => BB.get()));
      return (0, VB.useEffect)((() => (dB(BB.get()), BB.subscribe((() => {
        dB(BB.get())
      })))), [BB]), TB
    }

    function TL(BB) {
      let {
        kind: TB,
        cap: dB,
        busy: yB = !1,
        whyNot: pB = null,
        apart: lB
      } = BB;
      const {
        t: JB
      } = (0, iy.z)(), [YB, gB] = (0, VB.useState)(!1), oB = null !== pB, kB = (0, VB.useRef)(null);
      if ((0, VB.useEffect)((() => {
          oB && gB(!1)
        }), [oB]), (0, VB.useLayoutEffect)((() => {
          var BB;
          const TB = null === (BB = kB.current) || void 0 === BB ? void 0 : BB.firstElementChild;
          oB ? null === TB || void 0 === TB || TB.setAttribute("aria-disabled", "true") : yB || null === TB || void 0 === TB || TB.removeAttribute("aria-disabled")
        })), !YB || oB) return (0, mp.jsx)("span", {
        ref: kB,
        className: "Baf2RxApartWrap",
        children: (0, mp.jsx)(Hl.g, {
          disabled: yB,
          className: Hy()({
            Baf2RxNotYet: oB
          }),
          onClick: () => {
            pB ? pB() : gB(!0)
          },
          children: JB(`${bk}rxApart`)
        })
      });
      const LB = "battery" === TB,
        OB = void 0 === dB ? `${bk}batApartConfirmBodyPlan` : `${bk}batApartConfirmBody`;
      return (0, mp.jsx)(ek, {
        id: `baf2ApartTitle_${TB}`,
        title: LB ? `${bk}batApartConfirmTitle` : `${bk}rxApartConfirmTitle`,
        body: LB ? OB : `${bk}rxApartConfirmBody`,
        bodyParams: void 0 === dB ? void 0 : {
          cap: dB
        },
        yes: `${bk}rxApart`,
        cancel: () => {
          gB(!1)
        },
        confirm: () => {
          gB(!1), lB()
        }
      })
    }

    function dL(BB) {
      let {
        mood: TB,
        big: dB
      } = BB;
      const VB = nk[TB],
        yB = [];
      return VB.rows.forEach(((BB, TB) => {
        for (let dB = 0; dB < BB.length; dB++) "." !== BB[dB] && yB.push((0, mp.jsx)("rect", {
          x: dB + 1,
          y: TB + 1,
          width: 1,
          height: 1,
          fill: "w" === BB[dB] ? "#8fd3ff" : VB.colour
        }, `${dB},${TB}`))
      })), (0, mp.jsxs)("svg", {
        className: Hy()("Baf2RxFace", {
          Big: dB,
          Alarm: "alarm" === TB
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, mp.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, mp.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), yB]
      })
    }

    function VL(BB) {
      return kp(BB, "+").replace("+", "")
    }

    function yL(BB) {
      let {
        kind: TB,
        dims: dB,
        cap: VB,
        disabled: yB,
        compact: pB,
        resize: lB
      } = BB;
      const {
        t: JB
      } = (0, iy.z)(), {
        min: YB,
        max: gB
      } = Id(TB), oB = Math.min(VB, gB), kB = [`${bk}rxWide`, `${bk}rxTall`, `${bk}rxDeep`], LB = {
        w: String(dB[0]),
        h: String(dB[1]),
        d: String(dB[2]),
        blocks: String(tY(TB, dB))
      };
      return (0, mp.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, mp.jsx)("div", {
          className: "Baf2RxSteppers",
          children: dB.map(((BB, TB) => {
            const pB = VB => {
                const yB = [dB[0], dB[1], dB[2]];
                yB[TB] = BB + VB, lB(yB)
              },
              LB = BB >= oB;
            return (0, mp.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, mp.jsx)("button", {
                type: "button",
                "aria-label": JB(`${bk}rxSmaller`),
                disabled: yB || BB <= YB,
                onClick: () => {
                  pB(-1)
                },
                children: "\u2212"
              }), (0, mp.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [BB, (0, mp.jsx)("small", {
                  children: JB(kB[TB])
                })]
              }), (0, mp.jsx)("button", {
                type: "button",
                "aria-label": JB(`${bk}rxBigger`),
                disabled: yB || LB,
                onClick: () => {
                  pB(1)
                },
                children: LB && VB < gB ? "\ud83d\udd12" : "+"
              })]
            }, kB[TB])
          }))
        }), !pB && (0, mp.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === TB ? JB(`${bk}rxSizeLine`, {
            ...LB,
            water: String(NY(dB))
          }) : JB(`${bk}batSizeLine`, LB)
        })]
      })
    }

    function pL(BB) {
      let {
        on: TB,
        label: dB,
        disabled: VB,
        locked: yB,
        pending: pB,
        toggle: lB
      } = BB;
      return (0, mp.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": TB,
        disabled: VB,
        "aria-disabled": yB || void 0,
        className: Hy()("Baf2RxSwitch", {
          On: TB,
          Locked: yB,
          Pending: pB
        }),
        onClick: lB,
        children: [(0, mp.jsx)("span", {
          className: "Baf2RxKnob"
        }), dB]
      })
    }
    const lL = "buildAFactory2Game:",
      JL = .95;

    function YL(BB, TB) {
      return 0 !== (BB.baf2RxFlags & TB)
    }

    function gL(BB) {
      return "cryo" === BB ? nB.p : nB.t
    }

    function oL(BB) {
      var TB, dB, VB, yB, pB, lB, JB, YB, gB;
      return BB.baf2RxCryo ? {
        DO: "cryo",
        usePerS: null !== (yB = BB.baf2RxCryoUse) && void 0 !== yB ? yB : 0,
        needPerS: null !== (pB = BB.baf2RxCryoNeed) && void 0 !== pB ? pB : 0,
        inPerS: null !== (lB = BB.baf2RxCryoIn) && void 0 !== lB ? lB : 0,
        stored: null !== (JB = BB.baf2RxCryoStored) && void 0 !== JB ? JB : 0,
        makersShort: null !== (YB = BB.baf2RxMixersShort) && void 0 !== YB ? YB : 0,
        waterBeside: null !== (gB = BB.baf2RxWaterUse) && void 0 !== gB ? gB : 0,
        pct: BB.baf2RxWater
      } : {
        DO: "water",
        usePerS: null !== (TB = BB.baf2RxWaterUse) && void 0 !== TB ? TB : 0,
        needPerS: null !== (dB = BB.baf2RxWaterNeed) && void 0 !== dB ? dB : 0,
        inPerS: BB.baf2RxWaterIn,
        stored: BB.baf2RxWaterStored,
        makersShort: null !== (VB = BB.baf2RxCondensersShort) && void 0 !== VB ? VB : 0,
        waterBeside: 0,
        pct: BB.baf2RxWater
      }
    }

    function kL(BB) {
      const TB = "running" === BB.baf2RxState || "idle" === BB.baf2RxState;
      return BB.baf2RxFormed && BB.baf2RxTarget !== BB.baf2RxThrottle && TB ? LL(BB, BB.baf2RxTarget) : null
    }

    function LL(BB, TB) {
      const [dB, VB, yB, , , , pB, , lB] = BB.baf2RxStats, JB = YL(BB, lT), YB = oL(BB), gB = YB.pct / 100, {
        gen: oB,
        out: kB,
        load: LB
      } = function(BB, TB, dB, VB) {
        const yB = dB ? ZJ : 1,
          pB = Math.min(BB.fuelHeat * yB * Math.max(0, Math.min(1, TB)), BB.size * yB);
        return {
          gen: pB,
          out: pB,
          load: pY(pB, BB.cooling, VB)
        }
      }({
        fuelHeat: dB,
        cooling: VB,
        size: yB
      }, TB / 100, JB, gB), OB = JY(pB || qJ(...BB.baf2RxDims)), DB = BB.baf2RxHeat, uB = Math.abs(LB - DB), HB = function(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nB.t;
        const pB = dB ? ZJ : 1,
          lB = Math.min(BB.fuelHeat * pB * TB / 100, BB.size * pB),
          JB = lB,
          YB = BB.fuelHeat * pB,
          gB = BB.cooling * yY(VB.pct / 100),
          oB = YB > 0 && gB < BB.size * pB ? Math.floor(100 * gB / YB) : 100,
          kB = lB * yB - VB.inPerS;
        return {
          out: JB,
          hotAbove: oB >= 100 ? null : Math.max(0, oB),
          waterSecs: VB.pct >= 100 && kB > 1e-6 ? Math.max(0, VB.stored) / kB : null
        }
      }({
        fuelHeat: dB,
        cooling: VB,
        size: yB
      }, TB, JB, {
        pct: YB.pct,
        inPerS: YB.inPerS,
        stored: YB.stored
      }, gL(YB.DO));
      return {
        pct: TB,
        out: kB,
        coolPerS: oB * gL(YB.DO),
        pelletsPerMin: lB > 0 ? kB / lB * 60 : 0,
        settle: LB,
        settleS: uB > 2 ? OB * Math.log(uB / 2) : 0,
        overheatS: LB > 100 && DB < 100 ? OB * Math.log((LB - DB) / (LB - 100)) : null,
        hotAbove: HB.hotAbove,
        coolantSecs: HB.waterSecs
      }
    }

    function OL(BB) {
      return BB.baf2RxThrottle <= 0 && "running" !== BB.baf2RxState ? 0 : LL(BB, BB.baf2RxTarget).pelletsPerMin / 60
    }

    function DL(BB, TB) {
      if (BB <= 0 || TB <= 0) return 0;
      const dB = BB / TB;
      return dB < .25 ? 1 : dB < .5 ? 2 : dB < .8 ? 3 : 4
    }

    function uL(BB, TB) {
      const dB = {};
      for (const [VB, yB] of Object.entries(TB.params)) dB[VB] = "time" === VB ? Dp(BB, yB) : "amount" === VB ? fY(yB) : String(Math.round(yB));
      return BB(TB.key, dB)
    }

    function HL(BB, TB) {
      return {
        key: `${lL}${BB}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: TB
      }
    }

    function EL(BB) {
      var TB;
      const dB = YL(BB, lT),
        VB = "running" === BB.baf2RxState,
        yB = kY(BB),
        pB = BB.baf2RxHeat;
      var lB;
      if (VB && pB > RJ) return {
        key: null !== (lB = yB.fix) && void 0 !== lB ? lB : `${lL}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const JB = VB ? LL(BB, BB.baf2RxTarget).coolantSecs : null,
        YB = "cryo" === oL(BB).DO;
      if (null !== JB && JB >= 1 && JB <= 30) return HL(YB ? "rxWarnCryo" : "rxWarnWater", "bad");
      const gB = CJ(qJ(...BB.baf2RxDims)).waste,
        oB = VB ? EY(BB, gB, OL(BB)).fullInS : null;
      if (null !== oB && oB <= 120 && BB.baf2RxWaste >= .5 * gB) return HL("rxWarnWaste", "warn");
      if (null !== JB && JB >= 1) return HL(YB ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: JB
      });
      const kB = "noWater" === BB.baf2RxState && pB > RJ;
      if (BB.baf2RxDamage >= 1 && !kB) return HL("rxDamagedHeals", "warn", {
        pct: BB.baf2RxDamage
      });
      if (BB.baf2RxCryoCut) return HL("rxFix_cryoCut", "warn");
      const LB = oL(BB);
      if ("noWater" === BB.baf2RxState && "cryo" === LB.DO) return HL("noWater" === BB.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const OB = yB.fix === `${lL}rxFix_scramCool` || "idle" === BB.baf2RxState && BB.baf2RxTarget <= 0;
      if (OB && BB.baf2RxFuel <= 0) return HL("rxFix_noFuel", "warn");
      if (OB && BB.baf2RxWaterIn <= 0 && (null !== (TB = BB.baf2RxCryoIn) && void 0 !== TB ? TB : 0) <= 0) return HL("rxFix_noWater", "warn");
      const DB = yB.fix === `${lL}rxFix_scramCool` ? OY(BB) : null;
      if (null !== DB) return {
        key: DB.key,
        params: {
          amount: DB.amount
        },
        tone: "info"
      };
      if ("running" !== BB.baf2RxState && "idle" !== BB.baf2RxState && null !== yB.fix) return {
        key: yB.fix,
        params: {},
        tone: "scram" === BB.baf2RxState ? "info" : kB ? "bad" : "warn"
      };
      var uB;
      if ("idle" === BB.baf2RxState && BB.baf2RxTarget <= 0) return {
        key: null !== (uB = yB.fix) && void 0 !== uB ? uB : `${lL}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const HB = BB.baf2RxCryoStarved;
      if ("cryo" === LB.DO && HB && LB.needPerS > 0 && LB.usePerS < JL * LB.needPerS) return HL("noWater" === HB ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const EB = "cryo" === LB.DO,
        vB = LB.needPerS > 0 && LB.usePerS < JL * LB.needPerS;
      if (EB ? vB || LB.makersShort > 0 && LB.pct < 100 : LB.pct < 100) {
        const TB = EB && vB ? Math.floor(100 * LB.usePerS / LB.needPerS) : Math.min(100, LB.pct);
        if (LB.makersShort > 0) {
          return HL(`${EB?"rxCryoShortLine":"rxWaterShortLine"}${1===LB.makersShort?"One":""}${!EB&&BB.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: TB,
            count: LB.makersShort
          })
        }
        return HL(EB ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: TB
        })
      }
      const mB = function(BB) {
        const [TB, dB, VB] = BB.baf2RxStats, yB = oL(BB), pB = lY({
          fuelHeat: TB,
          cooling: dB,
          size: VB
        }, "cryo" === yB.DO ? nB.e : 1, !0);
        return Math.max(0, pB * gL(yB.DO) - yB.inPerS)
      }(BB);
      if (dB && mB > 0) return HL("cryo" === LB.DO ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(mB)
      });
      if (pB >= dY) return HL("rxHotLine", "warn");
      const iB = LL(BB, BB.baf2RxTarget);
      var NB;
      if (null !== iB.overheatS) return HL("rxWillOverheat", "bad", {
        pct: BB.baf2RxTarget,
        time: iB.overheatS,
        safe: null !== (NB = iB.hotAbove) && void 0 !== NB ? NB : 100
      });
      if (Math.abs(iB.settle - pB) >= 3) return HL("rxSettling", "info", {
        pct: BB.baf2RxTarget,
        heat: Math.round(iB.settle),
        time: iB.settleS
      });
      const tB = OY(BB);
      if (null !== tB) return {
        key: tB.key,
        params: {
          amount: tB.amount
        },
        tone: "info"
      };
      const fB = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== TB && ("running" !== TB || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === BB.rods ? `${YY}rxLimitNoRods` : `${YY}rxLimit_${TY(BB)}`
      }({
        rods: BB.baf2RxStats[3],
        ...LY(BB)
      }, BB.baf2RxState, BB.baf2RxOut >= JL * BB.baf2RxMaxNow, !1);
      if (fB === `${lL}rxLimit_size`) {
        const [TB, , dB, VB] = BB.baf2RxStats, yB = VB > 0 && TB > 0 ? Math.ceil(dB / (TB / VB) - 1e-9) : VB, pB = BB.baf2RxDims.every((BB => BB >= Id("reactor").max));
        if (yB < VB) return HL(pB ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: yB,
          have: VB
        });
        if (pB) return HL("rxLimit_sizeMax", "info")
      }
      return null !== fB ? {
        key: fB,
        params: {},
        tone: "info"
      } : HL("rxSteady", "ok", {
        pct: BB.baf2RxTarget
      })
    }

    function vL(BB) {
      var TB;
      if (BB.melted) return HL("rxMeltedBody", "bad");
      if (-1 === BB.bad) return HL("rxFix_noRoom", "warn");
      if (BB.bad > 0) return HL(1 === BB.bad ? "rxBadOne" : "rxBad", "warn", {
        count: BB.bad
      });
      if (BB.left > 0) {
        const TB = 1 === BB.left ? "One" : "";
        return HL(BB.canFill ? `rxPlanLeft${TB}` : `rxPlanLeftNoFill${TB}`, "info", {
          count: BB.left
        })
      }
      if (0 === BB.rods) return HL("rxLimitNoRods", "warn");
      const dB = null !== (TB = BB.idle) && void 0 !== TB ? TB : 0;
      return dB > 0 ? HL(1 === dB ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: dB
      }) : HL("rxPlanReady", "ok")
    }

    function mL(BB) {
      return Math.floor(Math.max(0, BB[1] - 1) / 2)
    }

    function iL(BB) {
      if (BB >= AJ && BB < bJ) {
        const TB = BB - AJ;
        return {
          key: 0 === TB ? `${lL}rxWhy_rodAlone` : 1 === TB ? `${lL}rxWhy_rodOne` : `${lL}rxWhy_rod`,
          params: {
            count: String(TB),
            heat: String(FJ * (1 + KJ * TB))
          }
        }
      }
      return BB === bJ ? {
        key: `${lL}rxWhy_channel`,
        params: {
          amount: String(IJ)
        }
      } : BB === nJ ? {
        key: `${lL}rxWhy_deadChannel`,
        params: {}
      } : BB === eJ ? {
        key: `${lL}rxWhy_graphite`,
        params: {}
      } : {
        key: `${lL}rxWhy_core`,
        params: {}
      }
    }
    const NL = "buildAFactory2Game:";

    function tL(BB, TB) {
      return 0 !== (BB.baf2RxFlags & TB)
    }

    function fL(BB) {
      let {
        status: TB,
        pending: dB,
        store: VB,
        explain: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)(), lB = tL(TB, pT), JB = TB.baf2RxTarget, YB = TB.baf2RxThrottle, gB = function(BB) {
        return {
          press: () => {
            BB.throttlePress()
          },
          drag: TB => {
            BB.throttleDrag(TB)
          },
          release: () => {
            BB.throttleRelease()
          }
        }
      }(VB), oB = null === (kB = LL(TB, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, kB - 10),
        red: kB
      };
      var kB;
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2RxThrottle", {
          Off: lB
        }),
        onClick: () => {
          lB && yB(`${NL}rxWhy_startFirst`)
        },
        children: [(0, mp.jsx)("span", {
          className: "HideNarrow",
          children: pB(`${NL}rxThrottle`)
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, mp.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: JB,
            disabled: lB,
            style: lB ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": pB(`${NL}rxThrottle`),
            onPointerDown: () => {
              gB.press();
              const BB = () => {
                window.removeEventListener("pointerup", BB), window.removeEventListener("pointercancel", BB), gB.release()
              };
              window.addEventListener("pointerup", BB), window.addEventListener("pointercancel", BB)
            },
            onKeyUp: gB.release,
            onChange: BB => {
              gB.drag(Number(BB.target.value))
            }
          }), (0, mp.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${oB.amber}%, #ffb020 ${oB.amber}% ${oB.red}%, #ff3b30 ${oB.red}%)`
            },
            "aria-hidden": "true"
          }), (0, mp.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${YB}% + ${8*(1-YB/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, mp.jsxs)("b", {
          children: [`${JB}%`, (0, mp.jsx)("i", {
            className: Hy()("Baf2RxPendingDot", {
              On: dB
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function sL(BB) {
      let {
        status: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), VB = LL(TB, TB.baf2RxTarget), yB = oL(TB).DO, pB = dB("cryo" === yB ? `${NL}rxRateCryo` : `${NL}rxRateWater`, {
        rate: VL(VB.coolPerS)
      }), lB = dB(`${NL}rxChain`, {
        pct: String(TB.baf2RxTarget),
        out: fY(VB.out),
        heat: String(Math.round(VB.settle)),
        coolant: pB
      }), JB = null !== VB.coolantSecs ? VB.coolantSecs >= 1 ? dB("cryo" === yB ? `${NL}rxThrottleCryoOut` : `${NL}rxThrottleWaterOut`, {
        time: Dp(dB, VB.coolantSecs)
      }) : dB("cryo" === yB ? `${NL}rxThrottleCryoDry` : `${NL}rxThrottleWaterDry`) : null;
      return (0, mp.jsxs)("p", {
        className: "Baf2RxChain",
        children: [lB, null !== JB ? (0, mp.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", JB]
        }) : (0, mp.jsxs)("span", {
          children: [" \xb7 ", dB(`${NL}rxChainPellets`, {
            amount: sY(VB.pelletsPerMin)
          })]
        })]
      })
    }

    function ML(BB) {
      let {
        view: TB,
        store: dB,
        explain: yB,
        explainOnce: pB
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), {
        status: JB
      } = TB, [YB, gB] = (0, VB.useState)(!1), oB = tL(JB, pT), LB = tL(JB, lT), OB = !tL(JB, gT), DB = JB.baf2RxHeat > 100;
      return (0, mp.jsxs)(mp.Fragment, {
        children: [(0, mp.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, mp.jsx)(fL, {
            status: JB,
            pending: TB.throttlePending,
            store: dB,
            explain: yB
          }), (0, mp.jsx)(pL, {
            on: LB,
            label: LB ? lB(`${NL}rxOdLeft`, {
              time: Dp(lB, JB.baf2RxOdLeft)
            }) : lB(`${NL}rxOverdrive`),
            locked: OB,
            pending: 0 !== (TB.pendingFlags & lT),
            toggle: () => {
              OB ? yB(`${NL}rxOverdriveTier`, {
                amount: String(kB(13))
              }) : LB ? dB.setFlag(lT, !1) : TB.odConfirmed ? dB.setFlag(lT, !0) : gB(!0)
            }
          }), oB || TB.startGuard ? (0, mp.jsx)(Hl.r, {
            disabled: TB.busy.has("start") || TB.startGuard,
            onClick: () => {
              dB.tap("start", (() => {
                dB.setFlag(pT, !1)
              }))
            },
            children: lB(TB.startGuard ? `${NL}rxStarting` : `${NL}rxStart`)
          }) : (0, mp.jsx)("span", {
            className: Hy()("Baf2RxScram", {
              Pulse: DB
            }),
            children: (0, mp.jsx)(Hl.K, {
              onClick: () => {
                dB.shutDown()
              },
              children: lB(`${NL}rxScram`)
            })
          })]
        }), (0, mp.jsx)(sL, {
          status: JB
        }), YB && (0, mp.jsx)(ek, {
          id: "baf2RxOdTitle",
          title: `${NL}rxOdConfirmTitle`,
          body: `${NL}rxOdConfirmBody`,
          yes: `${NL}rxOdConfirm`,
          cancel: () => {
            gB(!1)
          },
          confirm: () => {
            gB(!1), dB.tap("odConfirm", (() => {
              dB.confirmOverdrive(), dB.setFlag(lT, !0)
            })), pB(`${NL}rxWhy_overdrive`)
          }
        })]
      })
    }

    function zL(BB) {
      let {
        view: TB,
        store: dB,
        keepSize: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), {
        status: pB
      } = TB;
      return (0, mp.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, mp.jsx)(yL, {
          kind: "reactor",
          dims: TB.dims,
          cap: pB.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: BB => {
            dB.resize(BB)
          }
        }), VB ? (0, mp.jsx)(Hl.g, {
          onClick: VB,
          children: yB(`${NL}rxKeepSize`)
        }) : (0, mp.jsxs)(mp.Fragment, {
          children: [(0, mp.jsx)(pL, {
            on: TB.guide,
            label: yB(`${NL}rxGuide`),
            toggle: () => {
              dB.toggleGuide()
            }
          }), tL(pB, kT) && (0, mp.jsx)(pL, {
            on: TB.starter,
            label: yB(`${NL}rxStarter`),
            toggle: () => {
              dB.toggleStarter()
            }
          }), (0, mp.jsx)(jk, {
            status: pB,
            store: dB,
            busy: TB.busy.has("fill")
          })]
        })]
      })
    }

    function wL(BB) {
      let {
        need: TB,
        kind: dB = "reactor",
        explain: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), pB = TB.length <= 3, lB = TB.reduce(((BB, TB) => {
        let [, dB] = TB;
        return BB + dB
      }), 0);
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2RxParts", {
          Compact: !pB
        }),
        onClick: () => {
          VB("battery" === dB ? `${NL}batWhy_store` : `${NL}rxShellHint`)
        },
        children: [lB > 0 && (0, mp.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === lB ? yB(`${NL}rxBlocksOne`) : yB(`${NL}rxBlocks`, {
            blocks: String(lB)
          })
        }), 0 === TB.length ? (0, mp.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: yB("battery" === dB ? `${NL}batPartsDone` : `${NL}rxShellDone`)
        }) : uY(TB).map((BB => {
          let [TB, dB, VB] = BB;
          const lB = function(BB) {
            const TB = iY[BB];
            if (void 0 === TB) return null;
            const [dB, VB, yB] = vY[TB].colour.map((BB => Math.round(255 * BB)));
            return `rgb(${dB}, ${VB}, ${yB})`
          }(TB);
          return (0, mp.jsxs)("span", {
            className: "Baf2RxChip",
            title: by(yB, TB),
            children: [(0, mp.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === lB ? {
                visibility: "hidden"
              } : {
                background: lB
              },
              title: yB(`${NL}rxShopGhost`)
            }), (0, mp.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, mp.jsx)(ty.c, {
                itemName: TB,
                amount: 0
              })
            }), (0, mp.jsx)("span", {
              className: "Baf2RxChipName",
              children: pB ? `${dB} ${JB=by(yB,TB),JB.replace(/^(Reactor|Battery) (?=\S)/,"")}` : dB
            }), VB >= dB ? (0, mp.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, mp.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: pB ? yB(`${NL}rxShopShort`, {
                count: String(dB - VB)
              }) : "\u2212" + (dB - VB)
            })]
          }, TB);
          var JB
        }))]
      })
    }
    const UL = "buildAFactory2Game:";

    function FL(BB) {
      var TB, dB, yB, pB, lB, JB, YB;
      let {
        store: gB,
        close: oB
      } = BB;
      const {
        t: kB
      } = (0, iy.z)(), LB = Sl(), OB = BL(gB), {
        explained: DB,
        explain: uB
      } = Wk("baf2RxExplained"), HB = (0, VB.useCallback)(((BB, TB) => {
        uB(kB(BB, TB))
      }), [uB, kB]), EB = null === OB || void 0 === OB ? void 0 : OB.status, vB = !0 === (null === EB || void 0 === EB ? void 0 : EB.baf2BatReadOnly), mB = BB => {
        EB && LB.send(yT(EB.baf2BatAt, BB))
      }, [iB, NB, tB] = null !== (TB = null === OB || void 0 === OB ? void 0 : OB.dims) && void 0 !== TB ? TB : [0, 0, 0], fB = fY(null !== (dB = null === OB || void 0 === OB ? void 0 : OB.Kk) && void 0 !== dB ? dB : 0), sB = !0 === (null === EB || void 0 === EB ? void 0 : EB.baf2BatFormed), MB = null !== (yB = null === EB || void 0 === EB ? void 0 : EB.baf2BatStored) && void 0 !== yB ? yB : 0, zB = Math.max(1, null !== (pB = null === EB || void 0 === EB ? void 0 : EB.baf2BatIslandCap) && void 0 !== pB ? pB : 1), wB = Math.min(100, 100 * MB / zB), UB = null === EB || void 0 === EB ? void 0 : EB.baf2BatNetPerS, FB = function(BB, TB, dB) {
        return dB > 0 && TB >= dB ? "full" : void 0 !== BB && BB >= .05 ? "charging" : void 0 !== BB && BB <= -.05 && TB > 0 ? "draining" : "steady"
      }(UB, MB, null !== (lB = null === EB || void 0 === EB ? void 0 : EB.baf2BatIslandCap) && void 0 !== lB ? lB : 0), KB = null !== (JB = null === EB || void 0 === EB ? void 0 : EB.baf2BatMadePerS) && void 0 !== JB ? JB : 0, rB = null !== (YB = null === EB || void 0 === EB ? void 0 : EB.baf2BatUsedPerS) && void 0 !== YB ? YB : 0;
      let IB, cB = {},
        SB = "info";
      if (EB)
        if (sB) "charging" === FB ? (IB = `${UL}batLine_charging`, cB = {
          time: Dp(kB, (zB - MB) / Math.max(.05, null !== UB && void 0 !== UB ? UB : 0))
        }, SB = "ok") : "draining" === FB ? (IB = `${UL}batLine_draining`, cB = {
          time: Dp(kB, MB / Math.max(.05, -(null !== UB && void 0 !== UB ? UB : 0)))
        }, SB = "warn") : IB = "full" === FB ? `${UL}batLine_full` : MB <= 0 && rB > 0 ? `${UL}batLine_empty` : `${UL}batLine_steady`;
        else {
          var PB;
          const BB = vL({
            left: EB.baf2BatNeed.reduce(((BB, TB) => {
              let [, dB] = TB;
              return BB + dB
            }), 0),
            bad: EB.baf2BatBad,
            rods: 1,
            canFill: !0 === EB.baf2BatCanFill,
            melted: !1
          });
          IB = BB.key, cB = {
            count: String(null !== (PB = BB.params.count) && void 0 !== PB ? PB : 0)
          }, SB = BB.tone
        }
      else IB = `${UL}batLine_steady`;
      const QB = Math.max(KB, rB, 1);
      return (0, mp.jsx)(ul.b, {
        close: oB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mp.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, mp.jsx)(ty.c, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, mp.jsxs)("div", {
                children: [(0, mp.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: kB(`${UL}batTitle`)
                }), EB && (0, mp.jsxs)("p", {
                  className: Hy()("Baf2RxSubtitle", {
                    good: sB && "charging" === FB,
                    warn: sB && "draining" === FB
                  }),
                  children: [iB, "\xd7", NB, "\xd7", tB, " \xb7 ", kB(sB ? `${UL}batState_${FB}` : `${UL}rxSubPlanShort`)]
                })]
              })]
            }), (0, mp.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [EB && !vB && (0, mp.jsx)(TL, {
                kind: "battery",
                cap: sB ? fB : void 0,
                busy: null === OB || void 0 === OB ? void 0 : OB.busy.has("apart"),
                apart: () => {
                  gB.tap("apart", (() => {
                    mB("apart")
                  }))
                }
              }), (0, mp.jsx)(Hl.i, {
                onClick: oB
              })]
            })]
          }), OB && EB && (0, mp.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, mp.jsxs)("div", {
              className: Hy()("Baf2RxFlow Baf2BatFlow", {
                Plan: !sB
              }),
              children: [(0, mp.jsx)(ak, {
                kind: "Power",
                label: kB(`${UL}batMade`),
                number: sB ? `\u26a1 ${fY(KB)}/s` : "\u2014",
                note: kB(`${UL}batMadeNote`),
                share: sB ? KB / QB : void 0,
                onExplain: () => {
                  HB(`${UL}batWhy_made`)
                }
              }), (0, mp.jsx)(Zk, {
                kind: "Power",
                step: sB ? DL(KB, QB) : 0,
                planned: !sB
              }), (0, mp.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  HB(`${UL}batWhy_store`)
                },
                children: [(0, mp.jsx)(Xk, {
                  max: 100,
                  bands: [{
                    upTo: sB ? wB : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, mp.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, mp.jsx)("b", {
                    className: "Baf2BatStored",
                    children: sB ? kB(`${UL}batStoredOf`, {
                      amount: fY(MB),
                      cap: fY(EB.baf2BatIslandCap)
                    }) : kB(`${UL}batWillHold`, {
                      cap: fB
                    })
                  }), (0, mp.jsx)("span", {
                    children: kB(`${UL}batAdds`, {
                      cap: fB
                    })
                  }), sB && (0, mp.jsx)("small", {
                    children: kB(`${UL}batBreakNote`, {
                      cap: fB
                    })
                  })]
                })]
              }), (0, mp.jsx)(Zk, {
                kind: "Power",
                step: sB ? DL(rB, QB) : 0,
                planned: !sB
              }), (0, mp.jsx)(ak, {
                kind: "Power",
                label: kB(`${UL}batUsed`),
                number: sB ? `\u26a1 ${fY(rB)}/s` : "\u2014",
                note: kB(`${UL}batUsedNote`),
                share: sB ? rB / QB : void 0,
                onExplain: () => {
                  HB(`${UL}batWhy_used`)
                }
              })]
            }), (0, mp.jsx)(hk, {
              text: kB(IB, cB),
              tone: SB,
              explained: DB
            }), vB ? (0, mp.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: kB(`${UL}rxNotYours`)
            }) : !sB && (0, mp.jsxs)(mp.Fragment, {
              children: [(0, mp.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, mp.jsx)(yL, {
                  kind: "battery",
                  dims: OB.dims,
                  cap: EB.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: BB => {
                    gB.resize(BB)
                  }
                }), (0, mp.jsx)(pL, {
                  on: OB.guide,
                  label: kB(`${UL}rxGuide`),
                  toggle: () => {
                    gB.toggleGuide()
                  }
                }), EB.baf2BatCanFill && (0, mp.jsx)(Hl.k, {
                  disabled: !HY("battery", EB.baf2BatNeed) || OB.busy.has("fill"),
                  onClick: () => {
                    gB.tap("fill", (() => {
                      mB("fill")
                    }))
                  },
                  children: kB(`${UL}rxFill`)
                })]
              }), (0, mp.jsx)(wL, {
                need: EB.baf2BatNeed,
                kind: "battery",
                explain: HB
              })]
            })]
          })]
        })
      })
    }
    const KL = "buildAFactory2Game:",
      rL = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function IL(BB, TB) {
      return BB === jJ ? null : TB ? "#4a4440" : BB < bJ ? rL[BB - AJ] : BB === bJ ? "#3fd0f0" : BB === nJ ? "#2c3e4c" : "#55585e"
    }

    function cL(BB) {
      let {
        inner: TB,
        looks: dB,
        layer: VB,
        setLayer: yB,
        glow: pB,
        melted: lB,
        explain: JB
      } = BB;
      const {
        t: YB
      } = (0, iy.z)(), [gB, oB, kB] = TB, LB = Math.max(0, Math.min(oB - 1, VB)), OB = [];
      for (let uB = 0; uB < kB; uB++)
        for (let BB = 0; BB < gB; BB++) {
          var DB;
          const TB = null !== (DB = dB[(LB * kB + uB) * gB + BB]) && void 0 !== DB ? DB : jJ,
            VB = IL(TB, lB),
            yB = TB >= AJ && TB < bJ;
          OB.push(null === VB ? (0, mp.jsx)("circle", {
            cx: BB + .5,
            cy: uB + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${BB},${uB}`) : (0, mp.jsx)("rect", {
            x: BB + .06,
            y: uB + .06,
            width: .88,
            height: .88,
            fill: VB,
            opacity: yB && !lB ? .5 + .5 * pB : 1,
            onClick: BB => {
              BB.stopPropagation();
              const dB = iL(TB);
              JB(dB.key, dB.params)
            }
          }, `${BB},${uB}`))
        }
      return (0, mp.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, mp.jsx)("svg", {
          className: Hy()("Baf2RxMapGrid", {
            Melted: lB
          }),
          viewBox: `0 0 ${Math.max(1,gB)} ${Math.max(1,kB)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": YB(`${KL}rxWhy_core`),
          onClick: () => {
            JB(`${KL}rxWhy_core`, {})
          },
          children: OB
        }), oB > 1 && (0, mp.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, mp.jsx)("button", {
            type: "button",
            "aria-label": YB(`${KL}rxLayerDown`),
            disabled: LB <= 0,
            onClick: () => {
              yB(LB - 1)
            },
            children: "\u25bc"
          }), (0, mp.jsxs)("span", {
            children: [(0, mp.jsx)("span", {
              className: "HideNarrow",
              children: YB(`${KL}rxLayer`, {
                n: String(LB + 1),
                of: String(oB)
              })
            }), (0, mp.jsx)("span", {
              className: "ShowNarrow",
              children: YB(`${KL}rxLayerShort`, {
                n: String(LB + 1),
                of: String(oB)
              })
            })]
          }), (0, mp.jsx)("button", {
            type: "button",
            "aria-label": YB(`${KL}rxLayerUp`),
            disabled: LB >= oB - 1,
            onClick: () => {
              yB(LB + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const SL = "buildAFactory2Game:",
      PL = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: aJ,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: oY,
        kind: "red"
      }],
      QL = [50, aJ, 100];

    function RL(BB) {
      let {
        stats: TB,
        t: dB,
        explain: VB
      } = BB;
      const yB = TY(TB),
        pB = Math.max(1, TB.fuelHeat, TB.cooling, TB.size),
        lB = [
          ["fuel", `${SL}rxBarRods`, TB.fuelHeat],
          ["cooling", `${SL}rxBarCooling`, TB.cooling],
          ["size", `${SL}rxBarSize`, TB.size]
        ];
      return (0, mp.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          VB(`${SL}rxWhy_bars`)
        },
        children: [(0, mp.jsx)("span", {
          className: "Baf2RxMostLine",
          children: dB(`${SL}rxMost`, {
            amount: fY(Math.min(TB.fuelHeat, TB.cooling, TB.size))
          })
        }), (0, mp.jsx)("span", {
          className: "Baf2RxMostBars",
          children: lB.map((BB => {
            let [TB, VB, lB] = BB;
            return (0, mp.jsxs)("span", {
              className: Hy()("Baf2RxMostBar", TB, {
                Low: TB === yB
              }),
              children: [(0, mp.jsx)("small", {
                children: dB(VB)
              }), (0, mp.jsx)("i", {
                children: (0, mp.jsx)("b", {
                  style: {
                    width: 100 * lB / pB + "%"
                  }
                })
              })]
            }, TB)
          }))
        })]
      })
    }

    function aL(BB) {
      var TB;
      let {
        view: dB,
        heat: yB,
        settle: pB,
        settleLine: lB,
        settleBad: JB,
        explain: YB
      } = BB;
      const {
        t: gB
      } = (0, iy.z)(), {
        status: oB
      } = dB, kB = oB.baf2RxAt.join(","), [LB, OB] = (0, VB.useState)((() => mL(dB.inner)));
      (0, VB.useEffect)((() => {
        OB(mL(dB.inner))
      }), [kB, dB.inner[1]]);
      const DB = null !== (TB = dB.plan) && void 0 !== TB ? TB : LY(oB),
        uB = dB.plan ? dB.plan.powerPerUnit : oB.baf2RxStats[8],
        HB = null === yB ? null : "alarm" === (EB = gY(oB)) ? "red" : "hot" === EB ? "hot" : "warm" === EB ? "warm" : "cold";
      var EB;
      const vB = !oB.baf2RxFormed && function(BB, TB) {
          return 0 !== (BB.baf2RxFlags & TB)
        }(oB, JT),
        mB = oB.baf2RxDamage,
        iB = oB.baf2RxDamageTrend;
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2RxCore", null !== HB && void 0 !== HB ? HB : "plan"),
        children: [(0, mp.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, mp.jsx)(cL, {
            inner: dB.inner,
            looks: dB.looks,
            layer: LB,
            setLayer: OB,
            glow: oB.baf2RxFormed ? oB.baf2RxThrottle / 100 : 1,
            melted: vB,
            explain: YB
          }), (0, mp.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              YB(`${SL}rxWhy_heat`)
            },
            children: [null !== yB ? (0, mp.jsxs)(mp.Fragment, {
              children: [(0, mp.jsx)("b", {
                children: gB(`${SL}rxHeatPct`, {
                  pct: String(yB)
                })
              }), (0, mp.jsx)("span", {
                className: Hy()("Baf2RxBand", HB),
                children: gB(`${SL}rxBand_${HB}`)
              })]
            }) : (0, mp.jsx)("b", {
              children: gB(`${SL}rxHeat`)
            }), null !== lB && (0, mp.jsx)("span", {
              className: Hy()("Baf2RxSettle", {
                Bad: JB
              }),
              children: lB
            }), mB >= 1 && (0, mp.jsxs)("span", {
              className: Hy()("Baf2RxDamage", iB),
              children: [gB(`${SL}rxDamageLine`, {
                pct: String(mB)
              }), " \xb7 ", gB(`${SL}rxDamage_${iB}`), (0, mp.jsx)("i", {
                children: (0, mp.jsx)("b", {
                  style: {
                    width: `${Math.min(100,mB)}%`
                  }
                })
              })]
            })]
          }), (0, mp.jsx)(Xk, {
            max: oY,
            bands: PL,
            ticks: QL,
            now: yB,
            settle: pB,
            settleTone: JB ? "bad" : null,
            onExplain: () => {
              YB(`${SL}rxWhy_heat`)
            }
          })]
        }), (0, mp.jsx)(RL, {
          stats: DB,
          t: gB,
          explain: YB
        }), uB > 0 && (0, mp.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            YB(`${SL}rxWhy_perPellet`)
          },
          children: gB(`${SL}rxPerPellet`, {
            amount: fY(uB)
          })
        })]
      })
    }

    function ZL(BB, TB) {
      var dB;
      if (!BB.baf2RxStore) return {
        note: TB(`${SL}rxUpTo`, {
          amount: fY(BB.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [VB, yB] = BB.baf2RxStore, pB = yB > 0 ? VB / yB : 0, lB = String(Math.floor(100 * pB)), JB = null !== (dB = BB.baf2RxStoreNetPerS) && void 0 !== dB ? dB : 0, YB = function(BB) {
        var TB, dB;
        const [VB, yB] = null !== (TB = BB.baf2RxStore) && void 0 !== TB ? TB : [0, 0], pB = null !== (dB = BB.baf2RxStoreNetPerS) && void 0 !== dB ? dB : 0;
        return yB > 0 && VB >= yB - 1 ? "running" === BB.baf2RxState ? `${lL}rxStoreFull` : `${lL}rxStoreFullOnly` : pB > .05 ? `${lL}rxStoreLine` : pB < -.05 ? "running" === BB.baf2RxState ? `${lL}rxStoreUsesMore` : `${lL}rxStoreDraining` : `${lL}rxStorePct`
      }(BB);
      return {
        note: TB(YB, YB === `${SL}rxStoreLine` ? {
          pct: lB,
          time: Dp(TB, (yB - VB) / JB)
        } : {
          pct: lB
        }),
        share: pB
      }
    }

    function XL(BB) {
      let {
        view: TB,
        explain: dB,
        preview: VB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), {
        status: pB
      } = TB, lB = CJ(qJ(...TB.dims)), JB = OL(pB), YB = Math.min(Math.round(pB.baf2RxFuel), lB.fuel), gB = "running" === pB.baf2RxState, oB = gB ? DL(pB.baf2RxOut, pB.baf2RxMaxNow) : 0, kB = function(BB, TB, dB) {
        const VB = oL(BB),
          yB = "cryo" === VB.DO,
          pB = dB ? dB.coolantSecs : VB.pct >= 100 && BB.baf2RxOut >= 1 ? LL(BB, BB.baf2RxThrottle).coolantSecs : null;
        let lB, JB = !1;
        if (VB.pct < 100) {
          const dB = 1 === VB.makersShort,
            pB = !yB && BB.baf2RxCryoOpen ? "OrCryo" : "";
          lB = VB.makersShort > 0 ? TB(yB ? `${SL}rxCryoAddMixer${dB?"":"s"}` : `${SL}rxWaterAddCondenser${dB?"":"s"}${pB}`, {
            count: String(VB.makersShort)
          }) : TB(`${SL}rxWaterNeeds`, {
            rate: VL(VB.needPerS)
          })
        } else if (null !== pB) lB = TB(`${SL}rxWaterRunsOut`, {
          time: Dp(TB, pB)
        });
        else if (VB.waterBeside > 0) lB = TB(`${SL}rxCryoPlusWater`, {
          rate: VL(VB.waterBeside)
        });
        else {
          const BB = function(BB) {
            return BB.inPerS <= 0 ? "rxWaterNoSupply" : BB.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(VB);
          JB = "rxWaterNoSupply" === BB, lB = TB(`${SL}${BB}`, {
            amount: fY(VB.stored)
          })
        }
        return {
          kind: yB ? "Cryo" : "Water",
          label: TB(yB ? `${SL}rxCryo` : `${SL}rxWater`),
          number: `${VL(VB.usePerS)}/s`,
          preview: dB ? `${VL(dB.coolPerS)}/s` : null,
          note: lB,
          tone: "noWater" === BB.baf2RxState ? "danger" : JB ? "warn" : (YB = VB.pct, gB = pB, YB < 100 ? "danger" : null === gB ? null : gB < 300 ? "danger" : "warn"),
          share: VB.pct / 100,
          why: yB ? `${SL}rxWhy_cryo` : `${SL}rxWhy_water`,
          short: VB.pct < 100
        };
        var YB, gB
      }(pB, yB, VB), LB = EY(pB, lB.waste, JB), OB = ZL(pB, yB), DB = LL(pB, pB.baf2RxTarget), uB = gB && Math.abs(DB.settle - pB.baf2RxHeat) >= 3, HB = VB ? VB.pelletsPerMin / 60 : null;
      return (0, mp.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, mp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mp.jsx)(ak, {
            kind: "Fuel",
            label: yB(`${SL}rxFuel`),
            number: String(YB),
            preview: null !== HB && HB > 0 && pB.baf2RxFuel > 0 ? Dp(yB, pB.baf2RxFuel / HB) : null,
            note: pB.baf2RxFuel <= 0 ? yB(`${SL}rxFuelEmpty`) : JB > 0 ? yB(`${SL}rxFuelLeft`, {
              time: Dp(yB, pB.baf2RxFuel / JB)
            }) : yB(1 === YB ? `${SL}rxFuelPellet` : `${SL}rxFuelPellets`),
            tone: "noFuel" === pB.baf2RxState ? "danger" : pB.baf2RxFuel < 2 ? "warn" : null,
            share: pB.baf2RxFuel / lB.fuel,
            onExplain: () => {
              dB(`${SL}rxWhy_fuel`)
            }
          }), (0, mp.jsx)(ak, {
            kind: kB.kind,
            label: kB.label,
            number: kB.number,
            preview: kB.preview,
            note: kB.note,
            tone: kB.tone,
            share: kB.share,
            onExplain: () => {
              dB(kB.why)
            }
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mp.jsx)(Zk, {
            kind: "Fuel",
            step: oB,
            short: "noFuel" === pB.baf2RxState
          }), (0, mp.jsx)(Zk, {
            kind: kB.kind,
            step: oB,
            short: kB.short || "noWater" === pB.baf2RxState
          })]
        }), (0, mp.jsx)(aL, {
          view: TB,
          heat: pB.baf2RxHeat,
          settle: Math.min(oY, DB.settle),
          settleLine: uB ? yB(`${SL}rxHeatSettles`, {
            pct: String(Math.round(DB.settle)),
            time: Dp(yB, DB.settleS)
          }) : null,
          settleBad: DB.settle > 100,
          explain: dB
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mp.jsx)(Zk, {
            kind: "Power",
            step: oB
          }), (0, mp.jsx)(Zk, {
            kind: "Waste",
            step: gB && pB.baf2RxFuel - pB.baf2RxPu > 0 ? oB : 0,
            short: LB.full
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mp.jsx)(ak, {
            kind: "Power",
            label: yB(`${SL}rxPowerOut`),
            number: `\u26a1 ${fY(pB.baf2RxOut)}/s`,
            preview: VB ? fY(VB.out) : null,
            note: OB.note,
            share: OB.share,
            onExplain: () => {
              dB(`${SL}rxWhy_power`)
            }
          }), (0, mp.jsx)(ak, {
            kind: "Waste",
            label: yB(`${SL}rxWaste`),
            number: `${Math.floor(pB.baf2RxWaste)}/${lB.waste}`,
            note: LB.full ? yB(`${SL}rxWasteFull`) : null !== LB.fullInS ? yB(`${SL}rxWasteFullIn`, {
              time: Dp(yB, LB.fullInS)
            }) : yB(`${SL}rxWasteSpent`),
            tone: "wasteFull" === pB.baf2RxState ? "danger" : LB.full ? "warn" : null,
            share: pB.baf2RxWaste / lB.waste,
            onExplain: () => {
              dB(`${SL}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function WL(BB) {
      let {
        view: TB,
        explain: dB
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = TB.plan;
      if (!yB) return null;
      const pB = yB.fuelHeat <= 0 ? null : yB.cooling > 0 ? Math.min(oY, 100 * yB.fuelHeat / yB.cooling) : oY,
        lB = VB(`${SL}rxPlanAtFull`);
      return (0, mp.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, mp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mp.jsx)(ak, {
            kind: "Fuel",
            label: VB(`${SL}rxFuel`),
            number: VB(`${SL}rxPlanPerMin`, {
              amount: sY(yB.pelletsPerMin)
            }),
            note: VB(`${SL}rxPlanPellets`),
            onExplain: () => {
              dB(`${SL}rxWhy_fuel`)
            }
          }), (0, mp.jsx)(ak, {
            kind: "Water",
            label: VB(`${SL}rxWater`),
            number: `${VL(yB.waterPerS)}/s`,
            note: TB.status.baf2RxCryoOpen && yB.waterPerS > 0 ? VB(`${SL}rxPlanOrCryo`, {
              rate: VL(lY(yB, nB.e) * nB.p)
            }) : lB,
            onExplain: () => {
              dB(`${SL}rxWhy_water`)
            }
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mp.jsx)(Zk, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, mp.jsx)(Zk, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, mp.jsx)(aL, {
          view: TB,
          heat: null,
          settle: pB,
          settleLine: null === pB ? null : VB(`${SL}rxPlanHeat`, {
            pct: String(Math.round(pB))
          }),
          settleBad: null !== pB && pB > 100,
          explain: dB
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, mp.jsx)(Zk, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, mp.jsx)(Zk, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, mp.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, mp.jsx)(ak, {
            kind: "Power",
            label: VB(`${SL}rxPowerOut`),
            number: `\u26a1 ${fY(yB.max)}/s`,
            note: lB,
            onExplain: () => {
              dB(`${SL}rxWhy_power`)
            }
          }), (0, mp.jsx)(ak, {
            kind: "Waste",
            label: VB(`${SL}rxWaste`),
            number: VB(`${SL}rxPlanPerMin`, {
              amount: sY(yB.pelletsPerMin)
            }),
            note: VB(`${SL}rxWasteSpent`),
            onExplain: () => {
              dB(`${SL}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const hL = "buildAFactory2Game:",
      CL = {
        key: `${hL}rxWaiting`,
        params: {},
        tone: "info"
      };

    function GL(BB, TB) {
      return 0 !== (BB.baf2RxFlags & TB)
    }

    function qL(BB) {
      var TB, dB;
      let {
        store: yB,
        close: pB
      } = BB;
      const {
        t: lB
      } = (0, iy.z)(), JB = BL(yB), {
        explained: YB,
        hinting: gB,
        explain: oB,
        explainOnce: kB
      } = Wk("baf2RxExplained"), LB = (0, VB.useCallback)(((BB, TB) => {
        oB(lB(BB, TB))
      }), [oB, lB]), OB = (0, VB.useCallback)(((BB, TB) => {
        kB(BB, lB(BB, TB))
      }), [kB, lB]), [DB, uB] = (0, VB.useState)(!1), [HB, EB] = (0, VB.useState)(!1), vB = null === JB || void 0 === JB ? void 0 : JB.status, mB = null === vB || void 0 === vB ? void 0 : vB.baf2RxAt.join(","), iB = !0 === (null === vB || void 0 === vB ? void 0 : vB.baf2RxFormed);
      (0, VB.useEffect)((() => {
        EB(!1), uB(!1)
      }), [mB, iB]), (0, VB.useEffect)((() => (yB.opened(), () => {
        yB.closed()
      })), [yB]);
      const NB = void 0 !== vB && GL(vB, oT),
        tB = vB ? iB ? gY(vB) : null !== JB && void 0 !== JB && JB.plan ? function(BB, TB) {
          if (BB <= 0) return "off";
          if (TB <= 0) return "alarm";
          const dB = 100 * BB / TB;
          return dB < 50 ? "calm" : dB < dY ? "warm" : dB <= 100 ? "hot" : "alarm"
        }(JB.plan.fuelHeat, JB.plan.cooling) : "off" : "off",
        fB = vB ? kY(vB) : null,
        sB = JB ? JB.waiting ? CL : iB ? EL(JB.status) : function(BB) {
          var TB, dB;
          const {
            status: VB
          } = BB;
          return vL({
            left: VB.baf2RxNeed.reduce(((BB, TB) => {
              let [, dB] = TB;
              return BB + dB
            }), 0),
            bad: VB.baf2RxBad,
            rods: null !== (TB = null === (dB = BB.plan) || void 0 === dB ? void 0 : dB.rods) && void 0 !== TB ? TB : 0,
            canFill: GL(VB, YT),
            melted: GL(VB, JT),
            idle: BB.looks.reduce(((BB, TB) => BB + (TB === nJ ? 1 : 0)), 0)
          })
        }(JB) : null,
        MB = gB && null !== sB && ("ok" === sB.tone || "info" === sB.tone),
        zB = vB ? function(BB) {
          const TB = 0 !== (BB.baf2RxFlags & pT),
            dB = BB.baf2RxHeat < XJ;
          return 0 !== (BB.baf2RxFlags & JT) || dB && (TB || !BB.baf2RxFormed) ? null : BB.baf2RxFormed && !TB ? {
            key: `${YY}rxApartScram`,
            params: {}
          } : {
            key: `${YY}rxApartCooling`,
            params: {
              pct: String(XJ)
            }
          }
        }(vB) : null,
        [wB, UB, FB] = null !== (TB = null === JB || void 0 === JB ? void 0 : JB.dims) && void 0 !== TB ? TB : [0, 0, 0],
        KB = `${wB}\xd7${UB}\xd7${FB}`;
      return (0, mp.jsx)(ul.b, {
        close: pB,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, mp.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, mp.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, mp.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, mp.jsx)(dL, {
                mood: tB
              }), (0, mp.jsxs)("div", {
                children: [(0, mp.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: lB(`${hL}rxTitle`)
                }), JB && (0, mp.jsxs)("p", {
                  className: Hy()("Baf2RxSubtitle", iB && (null === fB || void 0 === fB ? void 0 : fB.tone)),
                  children: [iB && !NB ? (0, mp.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": lB(`${hL}rxChangeSize`),
                    onClick: () => {
                      if (!vB) return;
                      const BB = GL(vB, pT);
                      var TB;
                      (TB = {
                        scram: BB,
                        heat: vB.baf2RxHeat
                      }).scram && TB.heat < XJ ? uB(!0) : LB(BB ? `${hL}rxResizeCooling` : `${hL}rxResizeHot`, {
                        pct: String(XJ)
                      })
                    },
                    children: [KB, " \u270e"]
                  }) : KB, " \xb7 ", lB(iB ? null !== (dB = null === fB || void 0 === fB ? void 0 : fB.label) && void 0 !== dB ? dB : `${hL}rxState_running` : `${hL}rxSubPlanShort`)]
                })]
              })]
            }), (0, mp.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [JB && !NB && (0, mp.jsx)(TL, {
                kind: "reactor",
                busy: JB.busy.has("apart"),
                whyNot: zB ? () => {
                  LB(zB.key, zB.params)
                } : null,
                apart: () => {
                  yB.tap("apart", (() => {
                    yB.send("apart")
                  }))
                }
              }), (0, mp.jsx)(Hl.i, {
                onClick: pB
              })]
            })]
          }), JB && sB && (0, mp.jsxs)("div", {
            className: "Baf2RxBody",
            children: [iB ? (0, mp.jsx)(XL, {
              view: JB,
              explain: LB,
              preview: kL(JB.status)
            }) : (0, mp.jsx)(WL, {
              view: JB,
              explain: LB
            }), (0, mp.jsx)(hk, {
              text: MB ? `${uL(lB,sB)} ${lB(`${hL}rxTapHint`)}` : uL(lB, sB),
              tone: sB.tone,
              explained: YB
            }), NB ? (0, mp.jsxs)(mp.Fragment, {
              children: [(0, mp.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: lB(`${hL}rxNotYours`)
              }), (0, mp.jsx)(Ak, {
                status: JB.status,
                store: yB,
                readOnly: !0
              })]
            }) : iB && !HB ? (0, mp.jsxs)(mp.Fragment, {
              children: [(0, mp.jsx)(ML, {
                view: JB,
                store: yB,
                explain: LB,
                explainOnce: OB
              }), void 0 !== JB.status.baf2RxLayout && qk(JB.status) && (0, mp.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, mp.jsx)(Ak, {
                  status: JB.status,
                  store: yB,
                  readOnly: !1,
                  bare: !0
                }), (0, mp.jsx)(jk, {
                  status: JB.status,
                  store: yB,
                  busy: JB.busy.has("fill")
                })]
              })]
            }) : (0, mp.jsxs)(mp.Fragment, {
              children: [(0, mp.jsx)(zL, {
                view: JB,
                store: yB,
                keepSize: iB ? () => {
                  EB(!1)
                } : void 0
              }), DY(JB.dims, JB.status.baf2RxDims) && (0, mp.jsx)(wL, {
                need: JB.status.baf2RxNeed,
                explain: LB
              }), (0, mp.jsx)(Ak, {
                status: JB.status,
                store: yB,
                readOnly: !1
              })]
            }), DB && (0, mp.jsx)(ek, {
              id: "baf2ResizeTitle",
              title: `${hL}rxResizeConfirmTitle`,
              body: `${hL}rxResizeConfirmBody`,
              yes: `${hL}rxChangeSize`,
              cancel: () => {
                uB(!1)
              },
              confirm: () => {
                uB(!1), EB(!0)
              }
            })]
          })]
        })
      })
    }
    class xL {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(BB) {
        this.view = BB;
        for (const TB of this.listeners) TB()
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

    function jL(BB) {
      let {
        commands: TB,
        store: dB,
        power: yB,
        water: pB,
        reactor: lB,
        battery: JB,
        collider: YB,
        terminal: gB,
        quests: oB,
        close: kB,
        lD: LB,
        askIslands: OB,
        showCore: DB,
        openSocial: uB
      } = BB;
      const {
        userContext: HB
      } = (0, wJ.b)(), EB = zJ.featureFlags.useSocialFeatures && HB.isLoggedIn(), [vB, mB] = (0, VB.useState)((() => dB.get()));
      (0, VB.useEffect)((() => dB.subscribe((() => {
        mB(dB.get())
      }))), [dB]);
      const iB = "islands" === (null === vB || void 0 === vB ? void 0 : vB.kind) ? vB.backToCore : void 0;
      return (0, mp.jsxs)(cl.Provider, {
        value: TB,
        children: ["core" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(pk, {
          view: vB.core,
          close: kB,
          askIslands: OB
        }), "dropMap" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(gk, {
          message: vB.dropMap,
          quests: oB,
          close: kB,
          lD: LB
        }), "islands" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(wk, {
          message: vB.islands,
          arrivedAtMs: vB.arrivedAtMs,
          close: iB ? () => {
            DB(iB)
          } : kB,
          lD: LB,
          openSocial: EB ? uB : null
        }), "quests" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(fo, {
          store: oB,
          close: kB
        }), "transfer" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(jg, {
          message: vB.transfer,
          arrivedAtMs: vB.arrivedAtMs,
          close: kB,
          lD: LB
        }), "power" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(sl, {
          store: yB,
          close: kB
        }), "water" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(gJ, {
          store: pB,
          close: kB
        }), "reactor" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(qL, {
          store: lB,
          close: kB
        }), "battery" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(FL, {
          store: JB,
          close: kB
        }), "collider" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(og, {
          store: YB,
          close: kB
        }), "terminal" === (null === vB || void 0 === vB ? void 0 : vB.kind) && (0, mp.jsx)(Rk, {
          store: gB,
          close: kB,
          send: BB => {
            TB.send(BB)
          }
        })]
      })
    }
    var AL = dB(37444);

    function bL(BB, TB) {
      return BB.distSq - TB.distSq
    }
    class nL {
      constructor() {
        this.list = [], this.pool = []
      }
      add(BB, TB, dB, VB) {
        let yB = this.pool[this.list.length];
        yB || (yB = {
          x: 0,
          y: 0,
          distSq: 0,
          element: TB,
          liftRem: dB,
          dot: VB
        }, this.pool.push(yB)), yB.x = BB.x, yB.y = BB.y, yB.distSq = BB.distSq, yB.element = TB, yB.liftRem = dB, yB.dot = VB, this.list.push(yB)
      }
    }
    class eL {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = BB, this.sizes = new WeakMap, this.observer = new ResizeObserver((BB => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const TB of BB) {
            const BB = TB.borderBoxSize[0];
            "dot" !== TB.target.dataset.crowded && 0 !== BB.inlineSize && 0 !== BB.blockSize && this.sizes.set(TB.target, {
              width: BB.inlineSize,
              height: BB.blockSize
            })
          }
        })), this.remPx = 16, this.RO = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.qE = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.qE)
      }
      observe(BB) {
        this.observer.observe(BB)
      }
      unobserve(BB) {
        this.observer.unobserve(BB)
      }
      run(BB) {
        const TB = BB.list;
        TB.sort(bL);
        const dB = this.pxPerVw,
          VB = this.pxPerVh;
        this.RO.length = 0, this.hud && this.RO.push(...this.hud.boxes(performance.now()));
        for (const pB of TB) {
          var yB;
          const BB = this.sizes.get(pB.element);
          let TB = "no";
          if (BB && BB.width > 0) {
            const yB = pB.x * dB,
              lB = pB.y * VB - pB.liftRem * this.remPx;
            this.fit(yB, lB, BB.width, BB.height) || (TB = pB.dot && this.fit(yB, lB, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (yB = pB.element.dataset.crowded) && void 0 !== yB ? yB : "no") !== TB && ("no" === TB ? delete pB.element.dataset.crowded : pB.element.dataset.crowded = TB), "hidden" !== TB && (0, AL.b)(pB.element, pB.x, pB.y)
        }
        TB.length = 0
      }
      fit(BB, TB, dB, VB) {
        const yB = BB - dB / 2,
          pB = BB + dB / 2,
          lB = TB - VB,
          JB = this.RO;
        for (let YB = 0; YB < JB.length; YB += 4)
          if (yB < JB[YB + 1] - 2 && pB > JB[YB] + 2 && lB < JB[YB + 3] - 2 && TB > JB[YB + 2] + 2) return !1;
        return JB.push(yB, pB, lB, TB), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.qE)
      }
    }
    const BO = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class TO {
      constructor() {
        this.cards = BO.map((BB => document.getElementsByClassName(BB))), this.watched = BO.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(BB) {
        BB - this.refreshedAt > 1e3 && (this.refreshedAt = BB, this.stale = !0);
        for (let dB = 0; dB < this.cards.length; dB++) {
          var TB;
          const BB = null !== (TB = this.cards[dB][0]) && void 0 !== TB ? TB : null;
          BB !== this.watched[dB] && this.watch(dB, BB)
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
        for (const TB of this.watched) {
          if (!TB || TB.closest(".NoRoom")) continue;
          const dB = TB.getBoundingClientRect();
          let VB = dB.top,
            yB = dB.bottom;
          if (TB === this.watched[0] && this.hud) {
            const BB = this.hud.getBoundingClientRect();
            VB = Math.max(VB, BB.top), yB = Math.min(yB, BB.bottom)
          }
          dB.width > 0 && yB > VB && BB.push(dB.left, dB.right, VB, yB)
        }
      }
      watch(BB, TB) {
        const dB = this.watched[BB];
        var VB, yB;
        (dB && this.sizes.unobserve(dB), this.watched[BB] = TB, this.stale = !0, TB && this.sizes.observe(TB), 0 === BB) && (null === (VB = this.hud) || void 0 === VB || VB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (yB = null === TB || void 0 === TB ? void 0 : TB.closest(".Baf2QuestHud")) && void 0 !== yB ? yB : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const dO = [0, 0, 0],
      VO = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function yO(BB, TB, dB, VB, yB, pB) {
      let [lB, JB, YB] = VB;
      const gB = (lB + .5 - dB[0]) ** 2 + (JB - dB[1]) ** 2 + (YB + .5 - dB[2]) ** 2;
      let oB = null;
      gB <= pB ** 2 && (dO[0] = lB + .5, dO[1] = JB + yB, dO[2] = YB + .5, oB = TB.projectWorldPosToViewport(dO));
      const kB = null !== oB && oB.x > -5 && oB.x < 105 && oB.y > -5 && oB.y < 105;
      return (0, AL.c)(BB, !kB), kB ? (VO.x = oB.x, VO.y = oB.y, VO.distSq = gB, VO) : null
    }
    class pO {
      constructor(BB) {
        this.onElement = BB, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(BB) {
        const TB = [];
        for (let dB = 0; dB + 4 < BB.length; dB += 5) {
          const VB = [BB[dB], BB[dB + 1], BB[dB + 2]];
          TB.push({
            key: VB.join(","),
            pos: VB,
            status: bV[BB[dB + 3]],
            kind: iT[BB[dB + 4]]
          })
        }
        this.markers = TB, this.keys = new Set(TB.map((BB => {
          let {
            key: TB
          } = BB;
          return TB
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
        let TB = this.refs.get(BB);
        return TB || (TB = TB => {
          const dB = this.elements.get(BB);
          var VB, yB;
          dB && (null === (VB = this.onElement) || void 0 === VB || VB.call(this, dB, !1));
          TB ? (this.elements.set(BB, TB), null === (yB = this.onElement) || void 0 === yB || yB.call(this, TB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, TB)), TB
      }
      onAfterRender(BB, TB, dB) {
        for (const VB of this.markers) {
          const yB = this.elements.get(VB.key);
          if (!yB) continue;
          const pB = yO(yB, BB, TB, VB.pos, 1.05, 24);
          pB && dB.add(pB, yB, .45, !0)
        }
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
    }
    const lO = {
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
    const JO = (0, VB.memo)((function(BB) {
        let {
          status: TB,
          kind: dB,
          bindRef: VB
        } = BB;
        const {
          t: yB
        } = (0, iy.z)(), pB = function(BB, TB) {
          var dB;
          if ("noFuel" === BB) {
            var VB, yB;
            const BB = null === (VB = zT[TB]) || void 0 === VB || null === (yB = VB.fuels) || void 0 === yB ? void 0 : yB.find((BB => AT.includes(BB)));
            return null !== BB && void 0 !== BB ? BB : lO.noFuel
          }
          return void 0 !== (null === (dB = zT[TB]) || void 0 === dB ? void 0 : dB.cryoMade) ? "noOutlet" === BB ? "Fluid Pipe" : "noInput" === BB ? "Biomass" : lO[BB] : lO[BB]
        }(TB, dB);
        return (0, mp.jsxs)("div", {
          className: Hy()("Baf2StallMarker", TB),
          ref: VB,
          hidden: !0,
          children: [pB && (0, mp.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, mp.jsx)(ty.c, {
              itemName: pB,
              amount: 0
            })
          }), (0, mp.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === TB ? "?" : "!"
          }), (0, mp.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: yB(`buildAFactory2Game:stallTag_${TB}`)
          })]
        })
      })),
      YO = (0, VB.memo)((function(BB) {
        let {
          controller: TB
        } = BB;
        const [dB, yB] = (0, VB.useState)((() => TB.get()));
        return (0, VB.useEffect)((() => (yB(TB.get()), TB.subscribe((() => {
          yB(TB.get())
        })))), [TB]), (0, mp.jsx)("div", {
          className: "Baf2StallMarkers",
          children: dB.map((BB => (0, mp.jsx)(JO, {
            status: BB.status,
            kind: BB.kind,
            bindRef: TB.bind(BB.key)
          }, BB.key)))
        })
      })),
      gO = Yd.h + 150;
    class oO {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(BB, TB) {
        const dB = TB - BB;
        null === this.offset || dB < this.offset ? this.offset = dB : this.offset = Math.min(dB, this.offset + .02 * (TB - this.sampledAt)), this.sampledAt = TB
      }
      toLocal(BB) {
        var TB;
        return BB + (null !== (TB = this.offset) && void 0 !== TB ? TB : 0) + gO
      }
    }
    var kO = dB(37450);
    const LO = 15 * Math.PI / 180,
      OO = Math.SQRT2,
      DO = [4, 2];

    function uO(BB, TB) {
      const dB = [1 / 0, 1 / 0, 1 / 0],
        VB = [-1 / 0, -1 / 0, -1 / 0];
      for (const YB of BB)
        for (let BB = 0; BB < 3; BB++) dB[BB] = Math.min(dB[BB], YB[BB]), VB[BB] = Math.max(VB[BB], YB[BB]);
      const yB = (dB[0] + VB[0]) / 2,
        pB = (dB[1] + VB[1]) / 2,
        lB = (dB[2] + VB[2]) / 2;
      let JB = 0;
      for (const YB of BB) JB = Math.max(JB, Math.hypot(YB[0] - yB, YB[1] - pB, YB[2] - lB));
      return {
        x: yB,
        y: pB,
        z: lB,
        r: JB + TB
      }
    }

    function HO(BB, TB, dB) {
      const VB = TB.x - BB.x,
        yB = TB.y - BB.y,
        pB = TB.z - BB.z,
        lB = Math.sqrt(VB * VB + yB * yB + pB * pB);
      if (lB <= TB.r + 8) return 1;
      const JB = TB.r / lB,
        YB = Math.sqrt(1 - JB * JB),
        gB = YB < -BB.cosHalf,
        oB = (VB * BB.dx + yB * BB.dy + pB * BB.dz) / lB;
      if (!gB && oB < BB.cosHalf * YB - BB.sinHalf * JB) return 0;
      const kB = dB * OO * BB.frameMs * BB.pxPerBlock / (lB - TB.r);
      for (let LB = 0; LB < DO.length; LB++)
        if (kB * DO[LB] <= 1) return DO[LB];
      return 1
    }

    function EO(BB, TB) {
      return {
        name: BB,
        at: TB,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const vO = [0, 0, 0];

    function mO(BB, TB, dB) {
      let [, VB, yB, pB, lB, JB] = TB;
      const YB = Yd.e * (null !== lB && void 0 !== lB ? lB : 1),
        gB = [];
      for (let OB = 0; OB < VB.length; OB += 3) gB.push([VB[OB] + .5, VB[OB + 1] + .65, VB[OB + 2] + .5]);
      const oB = [];
      for (let OB = 0; OB < gB.length - 1; OB++) {
        const [BB, TB] = [gB[OB], gB[OB + 1]];
        oB.push([(BB[0] + TB[0]) / 2, (BB[1] + TB[1]) / 2, (BB[2] + TB[2]) / 2])
      }
      const kB = gB.slice(1, -1),
        LB = new Uint8Array(kB.length);
      for (const OB of null !== JB && void 0 !== JB ? JB : []) LB[OB >> 1] |= 1 & OB ? 2 : 1;
      return {
        island: BB,
        length: kB.length,
        loop: pB,
        cellsPerMs: YB,
        edges: oB,
        nY: kB,
        bounds: uO([...oB, ...kB], .3),
        changed: !0,
        culled: !1,
        hide: LB,
        items: yB.map((BB => {
          let [TB, VB] = BB;
          return EO(TB, (0, Yd.y)(TB, VB, dB, YB).at)
        }))
      }
    }

    function iO(BB, TB) {
      const {
        items: dB
      } = BB;
      if (0 === dB.length) return;
      const VB = BB.length / BB.cellsPerMs,
        yB = Math.floor((TB - dB[0].at) / VB) - 1;
      if (yB > 0)
        for (const pB of dB) pB.at += yB * VB
    }

    function NO(BB, TB) {
      const dB = Math.min(Math.floor(TB), BB.length - 1),
        VB = BB.hide[dB];
      return 0 !== VB && 0 !== (VB & (TB - dB < .5 ? 1 : 2))
    }

    function tO(BB, TB) {
      const dB = Math.min(Math.floor(TB), BB.length - 1),
        VB = TB - dB,
        yB = VB < .5,
        pB = yB ? BB.edges[dB] : BB.nY[dB],
        lB = yB ? BB.nY[dB] : BB.edges[dB + 1],
        JB = yB ? 2 * VB : 2 * VB - 1;
      vO[0] = pB[0] + (lB[0] - pB[0]) * JB, vO[1] = pB[1] + (lB[1] - pB[1]) * JB, vO[2] = pB[2] + (lB[2] - pB[2]) * JB
    }
    const fO = Math.PI / 4;
    class sO {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new oO, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.qE = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(BB) {
        const TB = performance.now();
        this.clock.sample(BB.baf2BeltLinesAt, TB), this.queue(BB.baf2BeltLinesAt, BB, 0, null, null, 0), this.applyDue(TB)
      }
      onMoves(BB) {
        const TB = performance.now(),
          dB = BB.baf2BeltMovesAt;
        this.clock.sample(dB, TB);
        for (const [VB, yB, pB, lB] of BB.baf2BeltMoveList) null === yB ? this.queue(dB - pB, null, VB, null, null, null !== lB && void 0 !== lB ? lB : 0) : this.queue(dB - pB, null, VB, yB, null !== lB && void 0 !== lB ? lB : null, 0);
        this.applyDue(TB)
      }
      start(BB) {
        this.pool = new kO.c(BB, {
          scale: .3,
          yaw: fO
        }, 64), this.qE(), window.addEventListener("resize", this.qE)
      }
      onAfterRender(BB) {
        const {
          pool: TB
        } = this;
        if (!TB) return;
        const dB = performance.now(),
          VB = dB - this.lastRenderAt;
        this.lastRenderAt = dB, VB < 100 && (this.frameMs += .1 * (VB - this.frameMs));
        const yB = dB + this.frameMs;
        this.applyDue(yB);
        const pB = BB.cameraPosition,
          lB = TB.follow(pB);
        this.setView(BB, pB);
        const JB = this.frame++;
        for (let YB = 0; YB < this.shown.length; YB++) {
          const BB = this.shown[YB],
            dB = HO(this.view, BB.bounds, BB.cellsPerMs),
            VB = BB.culled && 0 !== dB;
          if (BB.culled = 0 === dB, !lB && !BB.changed && !VB && (0 === dB || (JB + YB) % dB !== 0)) continue;
          BB.changed = !1, BB.loop && (iO(BB, yB), (0, Yd.t)(BB.items, BB.length, yB, BB.cellsPerMs));
          let pB = BB.length;
          for (let JB = 0; JB < BB.items.length; JB++) {
            const dB = BB.items[JB],
              VB = (0, Yd.B)(dB.at, pB, yB, BB.cellsPerMs);
            if (pB = VB - Yd.n, NO(BB, VB)) {
              null === dB.kind || dB.hidden || (dB.kind.hide(dB.slot), dB.hidden = !0);
              continue
            }
            let YB = dB.kind;
            if (null === YB) {
              if (YB = TB.kindOf(dB.name), null === YB) continue;
              dB.kind = YB, dB.slot = YB.take(), dB.hidden = !0, dB.drawn = NaN
            } else if (VB === dB.drawn && !dB.hidden && !lB) continue;
            tO(BB, VB), YB.write(dB.slot, vO[0], vO[1], vO[2]), dB.hidden = !1, dB.drawn = VB
          }
        }
        TB.commit()
      }
      dispose() {
        var BB;
        window.removeEventListener("resize", this.qE), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (BB = this.pool) || void 0 === BB || BB.dispose(), this.pool = null
      }
      setView(BB, TB) {
        const {
          cameraDir: dB,
          lastDir: VB
        } = this, yB = BB.cameraDirection;
        for (let oB = 0; oB < 3; oB++) VB[oB] = dB[oB], dB[oB] = yB[oB];
        const pB = dB[0] * VB[0] + dB[1] * VB[1] + dB[2] * VB[2],
          lB = Number.isNaN(pB) ? 0 : Math.acos(Math.min(1, Math.max(-1, pB))),
          {
            width: JB,
            height: YB
          } = this,
          gB = BB.tanHalfFovX;
        ! function(BB, TB, dB, VB, yB, pB, lB) {
          let JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          BB.x = TB[0], BB.y = TB[1], BB.z = TB[2], BB.dx = dB[0], BB.dy = dB[1], BB.dz = dB[2];
          const YB = Math.min(Math.PI, Math.atan(Math.sqrt(VB * VB + yB * yB)) + LO + JB);
          BB.cosHalf = Math.cos(YB), BB.sinHalf = Math.sin(YB), BB.pxPerBlock = pB / (2 * yB), BB.frameMs = lB
        }(this.view, TB, dB, gB, gB * YB / JB, YB * window.devicePixelRatio, this.frameMs, lB)
      }
      queue(BB, TB, dB, VB, yB, pB) {
        const lB = Math.max(this.clock.toLocal(BB), this.lastPendingAt);
        this.lastPendingAt = lB, this.pending.push({
          at: lB,
          lines: TB,
          line: dB,
          name: VB,
          pos: yB,
          idx: pB
        })
      }
      applyDue(BB) {
        const {
          pending: TB
        } = this;
        for (; this.pendingHead < TB.length && TB[this.pendingHead].at <= BB;) {
          const BB = TB[this.pendingHead++];
          if (BB.lines) this.applyLines(BB.lines, BB.at), BB.lines = null;
          else {
            const TB = this.lines.get(BB.line);
            TB && this.applyMove(TB, BB, BB.at)
          }
        }
        this.pendingHead === TB.length ? (TB.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > TB.length && (TB.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(BB, TB) {
        this.clearIsland(BB.baf2BeltIsland);
        for (const dB of BB.baf2BeltLineList) this.lines.set(dB[0], mO(BB.baf2BeltIsland, dB, TB));
        this.shown = [...this.lines.values()]
      }
      applyMove(BB, TB, dB) {
        let {
          name: VB,
          pos: yB,
          idx: pB
        } = TB;
        BB.changed = !0, BB.loop && (iO(BB, dB), (0, Yd.t)(BB.items, BB.length, dB, BB.cellsPerMs)), null !== VB && null !== yB ? (0, Yd.w)(BB.items, BB.length, EO(VB, dB), yB, dB, BB.cellsPerMs) : null !== VB ? BB.items.push(EO(VB, dB)) : BB.items.length > pB && this.release((0, Yd.F)(BB.items, BB.length, dB, BB.cellsPerMs, pB))
      }
      clearIsland(BB) {
        for (const [TB, dB] of this.lines)
          if (dB.island === BB) {
            for (const BB of dB.items) this.release(BB);
            this.lines.delete(TB)
          }
      }
      release(BB) {
        null !== BB.kind && (BB.kind.release(BB.slot), BB.kind = null, BB.slot = -1, BB.hidden = !0, BB.drawn = NaN)
      }
    }
    var MO = dB(35589),
      zO = dB(37463);

    function wO(BB) {
      let {
        depth: TB,
        store: dB,
        t: yB
      } = BB;
      const pB = function(BB) {
        const [TB, dB] = (0, VB.useState)(BB.lastPlayerY());
        return (0, Ag.e)(Fy, dB), (0, VB.useEffect)((() => {
          dB(BB.lastPlayerY())
        }), [BB]), TB
      }(dB);
      if (null === pB) return null;
      const [lB, JB] = TB, YB = pB > lB ? lB : null !== JB && pB < JB ? JB : null, gB = {
        y: Op(pB),
        target: null === YB ? "" : Op(YB)
      };
      return (0, mp.jsx)("span", {
        className: Hy()("Baf2QuestDepth", {
          Reached: null === YB
        }),
        children: yB(`${Bo}${null===YB?"questDepthReached":"questDepth"}`, gB)
      })
    }

    function UO(BB) {
      let {
        also: TB,
        view: dB,
        t: VB
      } = BB;
      return (0, mp.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, mp.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, mp.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, mp.jsx)("strong", {
            children: VB(`${Bo}questAlsoDownHere`)
          }), (0, mp.jsx)("span", {
            className: "Baf2QuestChips",
            children: TB.map((BB => {
              let [TB, yB, pB, lB] = BB;
              return (0, mp.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": VB(`${Bo}questAlsoItem`, {
                  item: Vo(VB, dB.itemNames[TB], TB),
                  have: String(yB),
                  need: String(pB)
                }),
                children: [(0, mp.jsx)(Jo, {
                  item: TB
                }), (0, mp.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${yB}/${pB}`
                }), null !== lB && (0, mp.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: VB(`${Bo}questAlsoDepth`, {
                    y: Op(lB)
                  })
                })]
              }, TB)
            }))
          })]
        })]
      })
    }
    var FO = dB(2884);

    function KO(BB) {
      let {
        expanded: TB,
        inventoryOpen: dB,
        children: yB
      } = BB;
      const pB = (0, VB.useRef)(null);
      return (0, VB.useEffect)((() => {
        const BB = pB.current,
          TB = null === BB || void 0 === BB ? void 0 : BB.closest(".RightElements"),
          VB = null === BB || void 0 === BB ? void 0 : BB.firstElementChild;
        if (!BB || !TB || !VB) return;
        return (0, zO.d)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [TB, VB], (() => {
          const yB = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === yB.length) return;
          const pB = Math.max(...yB.map((BB => BB.getBoundingClientRect().bottom))),
            lB = TB.getBoundingClientRect(),
            JB = dB ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (JB) {
            const TB = parseFloat(getComputedStyle(VB).marginLeft) + parseFloat(getComputedStyle(VB).marginRight),
              dB = lB.right - JB.getBoundingClientRect().right - 8 - TB;
            BB.style.setProperty("--baf2-quest-room", `${dB}px`), BB.classList.toggle("NoRoom", dB < 150)
          } else BB.style.removeProperty("--baf2-quest-room"), BB.classList.remove("NoRoom");
          const YB = pB - lB.top + 8,
            gB = function(BB, TB, dB) {
              const VB = TB.getBoundingClientRect(),
                yB = BB.getBoundingClientRect(),
                pB = (0, FO.h)(yB.left, yB.right, VB.top + dB);
              if (null !== pB && pB < VB.bottom) return pB - VB.top;
              return VB.height - (parseFloat(getComputedStyle(TB).paddingBottom) || 0)
            }(BB, TB, YB) - 8,
            oB = window.innerHeight / 2 - lB.top,
            {
              top: kB,
              maxHeight: LB
            } = function(BB, TB, dB, VB, yB) {
              const pB = Math.min(dB, Math.max(0, TB - BB)),
                lB = yB ? BB : Math.max(BB, Math.min(VB - pB / 2, TB - pB));
              return {
                top: lB,
                maxHeight: Math.max(0, TB - lB)
              }
            }(YB, gB, function(BB) {
              const TB = BB.firstElementChild,
                dB = TB ? TB.scrollHeight - TB.clientHeight : 0;
              return BB.getBoundingClientRect().height + Math.max(0, dB)
            }(VB), oB, Ep());
          BB.style.top = `${kB}px`, BB.style.maxHeight = `${LB}px`
        }))
      }), [dB]), (0, mp.jsx)("div", {
        ref: pB,
        className: Hy()("Baf2QuestHud", {
          Expanded: TB
        }),
        children: yB
      })
    }

    function rO(BB) {
      let {
        amount: TB,
        t: dB
      } = BB;
      return (0, mp.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, mp.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, mp.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: dB(`${Bo}questStepsDone`, {
            amount: String(TB)
          })
        })]
      })
    }

    function IO(BB) {
      let {
        pulse: TB
      } = BB;
      return 0 === TB ? null : (0, mp.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, TB)
    }

    function cO(BB) {
      var TB;
      let {
        store: dB
      } = BB;
      const yB = (0, Ag.f)(Uy, dB.get()),
        [pB, lB] = (0, VB.useState)(!1),
        {
          t: JB
        } = (0, iy.z)(),
        YB = function() {
          const [BB, TB] = (0, VB.useState)(Ep);
          return (0, VB.useEffect)((() => (TB(Ep()), vp(TB))), []), BB
        }(),
        {
          openInGameMenuName: gB,
          openEverythingMenuName: oB
        } = (0, Oy.m)(["openInGameMenuName", "openEverythingMenuName"]),
        kB = "inventory" === gB && null === oB,
        LB = null !== gB && !kB || null !== oB;
      if (! function(BB) {
          return null !== BB.name || null !== BB.side
        }(yB) || LB || "off" === yB.tutorial) return null;
      const OB = Py(yB.rows),
        DB = OB.filter((BB => BB.done)).length,
        uB = function(BB, TB) {
          const dB = ay(BB);
          let VB = 0;
          return BB.filter(((BB, yB) => !!BB.justFinished || !(BB.done || yB < dB || VB > TB) && (VB++, !0)))
        }(yB.rows, YB ? 0 : 2),
        HB = YB ? uB : function(BB, TB) {
          const dB = TB.filter((BB => !BB.justFinished));
          if (dB.length < 2) return [...TB];
          const VB = BB.indexOf(dB[0]),
            yB = BB.indexOf(dB[dB.length - 1]),
            pB = new Set(Py(BB));
          return BB.filter(((BB, dB) => TB.includes(BB) || BB.done && pB.has(BB) && dB > VB && dB < yB))
        }(yB.rows, uB),
        EB = pB ? yB.rows : HB,
        vB = pB || YB ? [] : function(BB, TB) {
          const dB = new Array(TB.length + 1).fill(0),
            VB = new Set(Py(BB));
          let yB = 0;
          for (const pB of BB) yB < TB.length && pB === TB[yB] ? yB++ : pB.done && VB.has(pB) && dB[yB]++;
          return dB
        }(yB.rows, HB),
        mB = pB || HB.length < yB.rows.length || null !== yB.reward,
        iB = Sy(yB),
        NB = iB ? JB(`${Bo}questLineComplete`) : yB.tier ? oo(JB, yB.tier) : JB(`${Bo}currentQuest`),
        tB = function(BB) {
          var TB, dB;
          if (Sy(BB)) return null;
          const VB = null === (TB = BB.chapters) || void 0 === TB ? void 0 : TB.find((TB => {
            let [dB] = TB;
            return dB === BB.tier
          }));
          if (!VB) return null;
          const yB = VB[1].filter((BB => !BB[4]));
          if (0 === yB.length) return null;
          const pB = null === (dB = BB.name) || void 0 === dB ? void 0 : dB[0],
            lB = BB => yB.findIndex((TB => TB[0] === pB && (!BB || !TB[3]))),
            JB = lB(!0),
            YB = JB >= 0 ? JB : lB(!1);
          if (YB >= 0) return [YB + 1, yB.length];
          const gB = yB.filter((BB => BB[3])).length;
          return [Math.min(gB + 1, yB.length), yB.length]
        }(yB);
      return (0, mp.jsx)(MO.e, {
        placement: "topRight",
        children: (0, mp.jsx)(KO, {
          expanded: pB,
          inventoryOpen: kB,
          children: (0, mp.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: To,
            children: [null !== yB.name && (0, mp.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, mp.jsx)(IO, {
                pulse: yB.pulse
              }), (0, mp.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, mp.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [NB, tB && (0, mp.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": JB(`${Bo}questPlaceLabel`, {
                      n: String(tB[0]),
                      total: String(tB[1])
                    }),
                    children: JB(`${Bo}questPlace`, {
                      n: String(tB[0]),
                      total: String(tB[1])
                    })
                  }), yB.tier && yB.core && !iB && (0, mp.jsx)(ko, {
                    core: yB.core,
                    t: JB
                  })]
                })
              }), (0, mp.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: JB(`${Bo}${yB.name[0]}`, yo(yB.name[1]))
              }), (OB.length > 1 || mB) && (0, mp.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [OB.length > 1 && (0, mp.jsx)(Lo, {
                  rows: OB,
                  t: JB
                }), mB && (0, mp.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": pB,
                  onClick: () => {
                    lB(!pB)
                  },
                  children: [(0, mp.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: JB(`${Bo}questStepsToggle`, {
                      done: String(DB),
                      total: String(OB.length)
                    })
                  }), (0, mp.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: pB ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, mp.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [EB.map(((BB, TB) => {
                  var pB;
                  const lB = BB.current && yB.depth;
                  return (0, mp.jsxs)(VB.Fragment, {
                    children: [(null !== (pB = vB[TB]) && void 0 !== pB ? pB : 0) > 0 && (0, mp.jsx)(rO, {
                      amount: vB[TB],
                      t: JB
                    }), (0, mp.jsx)(Oo, {
                      row: BB,
                      view: yB,
                      t: JB,
                      extra: lB && (0, mp.jsx)(wO, {
                        depth: lB,
                        store: dB,
                        t: JB
                      })
                    })]
                  }, BB.id)
                })), (null !== (TB = vB[EB.length]) && void 0 !== TB ? TB : 0) > 0 && (0, mp.jsx)(rO, {
                  amount: vB[EB.length],
                  t: JB
                }), yB.also.length > 0 && (0, mp.jsx)(UO, {
                  also: yB.also,
                  view: yB,
                  t: JB
                })]
              }), pB && yB.reward && (0, mp.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [JB(`${Bo}questReward`), (0, mp.jsx)(Jo, {
                  item: yB.reward
                }), Vo(JB, yB.itemNames[yB.reward], yB.reward)]
              })]
            }), yB.side && (0, mp.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Iy(yB, Date.now()) && (0, mp.jsx)(IO, {
                pulse: yB.sideCameUpAt
              }), (0, mp.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: JB(`${Bo}questSide`)
              }), (0, mp.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: JB(`${Bo}${yB.side.name[0]}`, yo(yB.side.name[1]))
              }), (0, mp.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, mp.jsx)(Oo, {
                  row: yB.side.row,
                  view: yB,
                  t: JB
                })
              })]
            })]
          })
        })
      })
    }
    const SO = "baf2ToastView";
    class PO {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = BB, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: BB,
          holdMs: TB
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const BB = this.dropCovered();
          BB && this.show(BB.message, BB.holdMs)
        }), 250));
        const dB = this.dropCovered();
        null !== dB && (dB.holdMs > 0 || "baf2ToastCelebrate" === dB.message.baf2ToastStyle) && "baf2ToastCelebrate" !== BB.baf2ToastStyle && this.show(dB.message, dB.holdMs);
        const VB = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== BB.baf2ToastStyle && VB > 0) return this.pending = {
          message: BB,
          holdMs: TB
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const BB = this.pending;
          this.pending = null, BB && this.present(BB.message, BB.holdMs)
        }), VB));
        this.present(BB, TB)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(BB, TB) {
        this.clearTimers(), this.pending = null;
        const dB = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: BB.baf2ToastText,
          style: BB.baf2ToastStyle,
          swapped: dB,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === BB.baf2ToastStyle ? 1500 : TB), this.yH();
        const VB = Math.min(8e3, Math.max(1e3, BB.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.lD()
        }), VB)
      }
      lD() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.yH(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.yH()
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
      yH() {
        zy.h.yH(SO, this.view, !0)
      }
    }
    var QO = dB(72);
    const RO = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function aO(BB) {
      let {
        store: TB
      } = BB;
      const dB = (0, Ag.f)(SO, TB.get()),
        {
          openInGameMenuName: VB,
          openEverythingMenuName: yB
        } = (0, Oy.m)(["openInGameMenuName", "openEverythingMenuName"]),
        pB = dB && (0, mp.jsxs)("div", {
          className: Hy()("Baf2Toast", RO[dB.style], {
            Swapped: dB.swapped,
            Leaving: dB.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === dB.style && (0, mp.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, mp.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, mp.jsx)(fy.e, {
              text: dB.text
            })
          })]
        }, dB.id);
      return null !== VB && null === yB ? (0, QO.createPortal)((0, mp.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: pB
      }), document.body) : (0, mp.jsx)(MO.e, {
        children: pB
      })
    }
    const ZO = "baf2AreaView";
    class XO {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.Dg = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.Dg = null
      }
      arrive(BB, TB) {
        TB && function(BB) {
          return "home" === BB.baf2AreaPlace && void 0 !== BB.baf2AreaNameText
        }(BB) ? this.Dg = BB : this.show(BB)
      }
      release() {
        const BB = this.Dg;
        null !== BB && this.show(BB)
      }
      show(BB) {
        this.clearTimer(), this.Dg = null;
        const TB = void 0 === BB.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: BB,
          ms: TB
        }, this.yH(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.yH()
        }), TB)
      }
      dispose() {
        this.clearTimer(), this.Dg = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      yH() {
        zy.h.yH(ZO, this.view, !0)
      }
    }

    function WO(BB) {
      var TB;
      let {
        store: dB
      } = BB;
      const {
        t: VB
      } = (0, iy.z)(), yB = (0, Ag.f)(ZO, dB.get());
      if (!yB) return null;
      const {
        area: pB
      } = yB, lB = pB.baf2AreaResetMinutes;
      return (0, mp.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": pB.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${yB.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, mp.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), pB.baf2AreaHeading && (0, mp.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: VB(pB.baf2AreaHeading)
        }), (0, mp.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (TB = pB.baf2AreaNameText) && void 0 !== TB ? TB : VB(pB.baf2AreaName)
        }), pB.baf2AreaNote && (0, mp.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: VB(pB.baf2AreaNote)
        }), void 0 !== lB && (0, mp.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: VB("buildAFactory2Game:areaWildsReset", {
            time: Dp(VB, 60 * lB)
          })
        })]
      }, yB.id)
    }
    const hO = "baf2GearGauge";
    class CO {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      Qv(BB) {
        var TB;
        if (this.clearLinger(), null === BB.gearPowerKind) return void this.set(null);
        const dB = "jetpack" === BB.gearPowerKind && (VB = BB.gearChargeState, yB = BB.gearCharge, "flying" === VB || "charging" === VB || "outOfCharge" === VB || "ceiling" === VB || "offPlot" === VB || "noPower" === VB && yB <= 0);
        var VB, yB;
        const pB = !0 === (null === (TB = this.view) || void 0 === TB ? void 0 : TB.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          lB = dB || "jetpack" === BB.gearPowerKind && pB;
        this.set({
          gauge: BB,
          jetShown: lB
        }), lB && !dB && (this.lingerTimer = setTimeout((() => {
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
        this.view = BB, zy.h.yH(hO, BB, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const GO = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function qO(BB) {
      let {
        store: TB
      } = BB;
      const dB = (0, Ag.f)(hO, TB.get());
      return dB ? "jetpack" === dB.gauge.gearPowerKind ? (0, mp.jsx)(xO, {
        view: dB
      }) : (0, mp.jsx)(jO, {
        gauge: dB.gauge
      }) : null
    }

    function xO(BB) {
      let {
        view: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), {
        gauge: VB
      } = TB, yB = VB.gearChargeMax > 0 ? Math.max(0, Math.min(1, VB.gearCharge / VB.gearChargeMax)) : 0, pB = GO[VB.gearChargeState], lB = pB ? dB(pB) : null;
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2JetArc", {
          Shown: TB.jetShown,
          Low: yB < .2,
          Warm: yB >= .2 && yB < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - yB)
        },
        "aria-hidden": !TB.jetShown,
        children: [(0, mp.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, mp.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: AO,
            pathLength: 100
          }), (0, mp.jsx)("path", {
            className: "Baf2JetArcFill",
            d: AO,
            pathLength: 100
          })]
        }), (0, mp.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * yB), "%"]
        }), lB && (0, mp.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: lB
        })]
      })
    }

    function jO(BB) {
      let {
        gauge: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), VB = function(BB, TB) {
        switch (TB.gearPowerKind) {
          case "skyPack":
            return BB("buildAFactory2Game:gearSkyPack", {
              charge: TB.gearCharge,
              max: TB.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return BB("buildAFactory2Game:gearIslandDraw", {
              power: bB(TB.gearIslandPower),
              cost: bB(TB.gearCostPerUse)
            });
          case "barrier":
            return BB("buildAFactory2Game:gearBarrier", {
              shield: Math.round(TB.gearCharge),
              max: TB.gearChargeMax,
              power: bB(TB.gearIslandPower)
            });
          default:
            return null
        }
      }(dB, TB);
      return null === VB ? null : (0, mp.jsx)(MO.e, {
        children: (0, mp.jsx)("div", {
          className: Hy()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === TB.gearChargeState || "outOfCharge" === TB.gearChargeState
          }),
          role: "status",
          children: VB
        })
      })
    }
    const AO = (() => {
      const BB = BB => {
        const TB = BB * Math.PI / 180;
        return `${(40*Math.cos(TB)).toFixed(2)} ${(40*Math.sin(TB)).toFixed(2)}`
      };
      return `M ${BB(160)} A 40 40 0 1 1 ${BB(380)}`
    })();
    class bO {
      constructor(BB) {
        this.onElement = BB, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      Qv(BB) {
        let TB = BB.baf2LabelsReset || BB.baf2LabelsIsland !== this.island;
        TB && (this.labels.clear(), this.island = BB.baf2LabelsIsland);
        for (const [dB, VB, yB, pB, lB] of BB.baf2LabelsList) {
          const BB = `${dB},${VB},${yB}`,
            JB = this.labels.get(BB);
          null === pB ? TB = this.labels.delete(BB) || TB : JB && JB.item === pB && (JB.count === lB || JB.count >= 0 && lB >= 0) ? JB.count !== lB && (JB.count = lB, this.writeCount(BB, lB)) : (this.labels.set(BB, {
            key: BB,
            pos: [dB, VB, yB],
            item: pB,
            count: lB
          }), this.writeCount(BB, lB), TB = !0)
        }
        if (this.changes++, TB) {
          this.snapshot = [...this.labels.values()];
          for (const BB of this.listeners) BB()
        }
      }
      bindCount(BB) {
        const TB = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${BB}`;
        let dB = this.countRefs.get(TB);
        return dB || (dB = dB => {
          var VB, yB;
          dB ? (this.countElements.set(TB, dB), this.writeCount(BB, null !== (VB = null === (yB = this.labels.get(BB)) || void 0 === yB ? void 0 : yB.count) && void 0 !== VB ? VB : -1)) : (this.countElements.delete(TB), this.countRefs.delete(TB))
        }, this.countRefs.set(TB, dB)), dB
      }
      setCountWords(BB) {
        this.countWords = BB;
        for (const [TB, dB] of this.labels) this.writePart(`words|${TB}`, BB(dB.count), dB.count)
      }
      writeCount(BB, TB) {
        this.writePart(`bare|${BB}`, Lp(TB), TB), this.countElements.has(`words|${BB}`) && this.writePart(`words|${BB}`, this.countWords(TB), TB)
      }
      writePart(BB, TB, dB) {
        const VB = this.countElements.get(BB);
        if (!VB || dB < 0) return;
        const yB = VB.firstChild;
        yB && 3 === yB.nodeType && !yB.nextSibling ? yB.nodeValue !== TB && (yB.nodeValue = TB) : VB.textContent !== TB && (VB.textContent = TB)
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
        let TB = this.refs.get(BB);
        return TB || (TB = TB => {
          const dB = this.elements.get(BB);
          var VB, yB;
          dB && (null === (VB = this.onElement) || void 0 === VB || VB.call(this, dB, !1));
          TB ? (this.elements.set(BB, TB), null === (yB = this.onElement) || void 0 === yB || yB.call(this, TB, !0)) : (this.elements.delete(BB), this.refs.delete(BB))
        }, this.refs.set(BB, TB)), TB
      }
      onAfterRender(BB, TB, dB, VB) {
        for (const yB of this.snapshot) {
          const pB = this.elements.get(yB.key);
          if (!pB) continue;
          if (VB(yB.key)) {
            (0, AL.c)(pB, !0);
            continue
          }
          const lB = yO(pB, BB, TB, yB.pos, 1.1, 24);
          lB && dB.add(lB, pB, 0, !1)
        }
      }
    }
    const nO = (0, VB.memo)((function(BB) {
        let {
          item: TB
        } = BB;
        return (0, mp.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, mp.jsx)(ty.c, {
            itemName: TB,
            amount: 0
          })
        })
      })),
      eO = (0, VB.memo)((function(BB) {
        let {
          label: TB,
          bindRef: dB,
          countRef: VB,
          wordsRef: yB
        } = BB;
        return (0, mp.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: dB,
          hidden: !0,
          children: [(0, mp.jsx)(nO, {
            item: TB.item
          }), TB.count >= 0 && (0, mp.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, mp.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: yB
            }), (0, mp.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: VB
            })]
          })]
        })
      })),
      BD = (0, VB.memo)((function(BB) {
        let {
          store: TB
        } = BB;
        const {
          t: dB
        } = (0, iy.z)(), [yB, pB] = (0, VB.useState)((() => TB.list()));
        return (0, VB.useEffect)((() => (pB(TB.list()), TB.subscribe((() => {
          pB(TB.list())
        })))), [TB]), (0, VB.useEffect)((() => {
          TB.setCountWords((BB => dB("buildAFactory2Game:labelSiloCount", {
            count: Lp(BB)
          })))
        }), [TB, dB]), (0, mp.jsx)("div", {
          className: "Baf2IslandLabels",
          children: yB.map((BB => -2 === BB.count ? null : (0, mp.jsx)(eO, {
            label: BB,
            bindRef: TB.bind(BB.key),
            countRef: TB.bindCount(BB.key),
            wordsRef: TB.bindCount(BB.key, "words")
          }, BB.key)))
        })
      })),
      TD = {
        read: () => !0,
        write: () => {}
      };

    function dD(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }

    function VD(BB) {
      let [TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB] = BB;
      const OB = void 0 === kB || void 0 === LB ? function(BB) {
        return [Math.floor((BB - 1) / 2), 0]
      }(pB) : [kB, LB];
      return {
        kind: 0 === YB ? "reactor" : "battery",
        box: Pd([TB, dB, VB], yB, pB, lB, JB, OB),
        formed: 1 === gB,
        level: oB
      }
    }
    class yD {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TD;
        this.guideSetting = BB, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = BB.read()
      }
      Qv(BB) {
        var TB;
        const dB = new Map;
        for (const VB of BB.baf2RxPlanList) {
          const BB = VD(VB);
          dB.set(dD(BB.box.ctrl), BB)
        }
        this.plans = dB, this.layouts = new Map((null !== (TB = BB.baf2RxLayouts) && void 0 !== TB ? TB : []).map((BB => {
          let [TB, dB, VB, yB] = BB;
          return [dD([TB, dB, VB]), yB]
        }))), this.predicted.clear(), BB.baf2RxFormedAt && (this.formed = {
          ctrl: BB.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const VB of [...this.startersOff]) {
          const BB = dB.get(VB);
          BB && !BB.formed || this.startersOff.delete(VB)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((BB => this.planByKey(BB)))
      }
      planAt(BB) {
        return this.planByKey(dD(BB))
      }
      predictSize(BB, TB) {
        this.predicted.set(dD(BB), TB), this.changed()
      }
      unpredict(BB) {
        this.predicted.delete(dD(BB)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(BB) {
        var TB;
        const dB = dD(BB);
        return this.predicted.has(dB) ? null : null !== (TB = this.layouts.get(dB)) && void 0 !== TB ? TB : null
      }
      showsStarter(BB) {
        return !this.startersOff.has(dD(BB))
      }
      setStarter(BB, TB) {
        const dB = dD(BB);
        TB ? this.startersOff.delete(dB) : this.startersOff.add(dB), this.changed()
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
        const TB = this.plans.get(BB);
        if (!TB) return null;
        const dB = this.predicted.get(BB);
        return dB ? {
          ...TB,
          box: Rd(TB.box, TB.kind, dB[0], dB[1], dB[2])
        } : TB
      }
      changed() {
        this.version++;
        for (const BB of this.listeners) BB()
      }
    }
    var pD = dB(184);
    const lD = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function JD(BB, TB, dB, VB) {
      const yB = BB.length / 3;
      for (let pB = 0; pB < lD.length / 3; pB++) BB.push(lD[3 * pB] * VB[0] / 2 + dB[0], lD[3 * pB + 1] * VB[1] / 2 + dB[1], lD[3 * pB + 2] * VB[2] / 2 + dB[2]);
      for (let pB = yB; pB < yB + 24; pB += 4) TB.push(pB, pB + 1, pB + 2, pB, pB + 2, pB + 3)
    }

    function YD(BB, TB, dB) {
      const VB = TB[0][0],
        yB = [],
        pB = [];
      for (const [lB, JB] of TB) JD(yB, pB, [lB[0] - VB[0], lB[1] - VB[1], lB[2] - VB[2]], JB);
      return BB.createGameMesh({
        positions: yB,
        indices: pB
      }, dB, VB)
    }

    function gD(BB, TB) {
      const dB = BB.w - 2,
        VB = BB.d - 2;
      return 1 === function(BB, TB, dB, VB) {
        const [yB, pB, lB] = BB;
        if (Number(yB <= 2) + Number(pB <= 2) + Number(lB <= 2) >= 2) return function(BB, TB, dB) {
          return (BB + TB + dB) % 2 === 0 ? 1 : 3
        }(TB, dB, VB);
        const [JB, YB] = yB >= pB && yB >= lB ? [dB, VB] : pB >= lB ? [TB, VB] : [TB, dB];
        return JB % 2 === 0 && YB % 2 === 0 ? 1 : 3
      }([dB, BB.h - 2, VB], TB % dB, Math.floor(TB / (dB * VB)), Math.floor(TB / dB) % VB) ? "rod" : "channel"
    }

    function oD(BB, TB, dB) {
      if ("reactor" !== BB.kind || BB.formed || !TB) return !1;
      const VB = Xd(BB.box);
      for (let yB = 0; yB < VB; yB++) {
        const BB = dB(yB);
        if (null !== BB && fd(BB)) return !1
      }
      return !0
    }

    function kD(BB, TB, dB, VB, yB) {
      var pB;
      let lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const JB = xd(BB.box, TB),
        YB = nd(BB.kind, JB, dB);
      if ("wrong" === YB || "blocked" === YB) return "wrong";
      if (!yB) return null;
      if ("inside" === JB && "reactor" === BB.kind && "Air" === sd(dB)) {
        if (null !== lB) {
          var gB;
          const dB = Ck[Gk(lB, jd(BB.box, TB))];
          return dB && null !== (gB = mY(dB)) && void 0 !== gB ? gB : null
        }
        if (VB) return gD(BB.box, jd(BB.box, TB))
      }
      if ("missing" !== YB) return null;
      const oB = ed(BB.kind, JB);
      return null === oB ? null : null !== (pB = mY(oB)) && void 0 !== pB ? pB : null
    }
    const LD = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function OD(BB, TB, dB) {
      const VB = dB => {
        const VB = TB(Gd(BB.box, dB));
        return null !== VB && function(BB, TB) {
          return "reactor" !== BB.kind || TB !== hd(BB.box) && "inside" !== xd(BB.box, TB)
        }(BB, dB) && "ok" !== nd(BB.kind, xd(BB.box, dB), VB)
      };
      if (dB) {
        const pB = qd(BB.box, [Math.floor(dB[0]), Math.floor(dB[1]), Math.floor(dB[2])]);
        if (pB >= 0 && (VB(pB) || (yB = pB, "reactor" === BB.kind && "inside" === xd(BB.box, yB) && "Air" === TB(Gd(BB.box, yB))))) return pB
      }
      var yB;
      const pB = Xd(BB.box);
      for (let lB = 0; lB < pB; lB++)
        if (VB(lB)) return lB;
      return -1
    }

    function DD(BB, TB) {
      return Math.floor(TB / (BB.w * BB.d))
    }

    function uD(BB, TB, dB) {
      return dB >= 0 && DD(BB, TB) > DD(BB, dB)
    }

    function HD(BB, TB) {
      return TB >= 0 && BB.h >= 3 && DD(BB, TB) === BB.h - 1
    }

    function ED(BB) {
      const TB = sd(BB);
      return TB === kd || "Collider" === TB || "Laser" === TB || TB.startsWith("_Collider ")
    }

    function vD(BB, TB, dB, VB) {
      if (VB(BB)) return null;
      if (!LD.every((TB => {
          let [VB, yB, pB] = TB;
          const lB = dB([BB[0] + VB, BB[1] + yB, BB[2] + pB]);
          return null !== lB && !rd("reactor", lB) && "reactor" !== Md(lB)
        }))) return null;
      const yB = Id("reactor").min,
        pB = Pd([BB[0], BB[1], BB[2]], function(BB, TB) {
          const dB = TB[0] - (BB[0] + .5),
            VB = TB[2] - (BB[2] + .5);
          return Math.abs(dB) >= Math.abs(VB) ? dB >= 0 ? 2 : 4 : VB >= 0 ? 1 : 3
        }(BB, TB), yB, yB, yB, Qd("reactor", yB)),
        lB = hd(pB);
      let JB = !0;
      for (let YB = 0; YB < Xd(pB) && JB; YB++) {
        if (YB === lB) continue;
        const BB = Gd(pB, YB),
          TB = dB(BB);
        JB = !VB(BB) && (null === TB || !ED(TB))
      }
      return {
        box: pB,
        fits: JB
      }
    }
    const mD = vY,
      iD = "baf2Goal",
      ND = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      tD = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      fD = .4;

    function sD(BB, TB) {
      let [dB, VB, yB] = BB;
      const pB = zY([dB - .02, VB - .02, yB - .02], [dB + 1.02, VB + 1.02, yB + 1.02], .07);
      return TB && (pB.push([
        [dB + .5, VB + 1 + .7, yB + .5],
        [.08, 1.4, .08]
      ]), pB.push([
        [dB + .5, VB + 1 + 1.4 + .2, yB + .5],
        [fD, fD, fD]
      ])), pB
    }

    function MD(BB, TB) {
      let [dB, VB, yB] = TB;
      return BB.isBlockInLoadedChunk(dB, VB, yB) ? BB.blockIdToBlockName(BB.getBlockId(dB, VB, yB)) : null
    }
    let zD = null;
    const wD = new Set;
    let UD = null;

    function FD(BB) {
      zD = BB;
      for (const TB of wD) TB(BB)
    }
    class KD {
      constructor(BB) {
        var TB;
        this.plans = BB, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (TB = BB => {
          var TB, dB;
          this.setGoal(null !== (TB = null === BB || void 0 === BB ? void 0 : BB.goal) && void 0 !== TB ? TB : null, null !== (dB = null === BB || void 0 === BB ? void 0 : BB.startsBattery) && void 0 !== dB && dB)
        }, UD ??= [zy.h.subscribe("setDirectionArrow", (BB => {
          let {
            id: TB,
            position: dB,
            text: VB
          } = BB;
          TB === iD && FD({
            goal: [Math.floor(dB[0]), Math.floor(dB[1]), Math.floor(dB[2])],
            startsBattery: JSON.stringify(null !== VB && void 0 !== VB ? VB : null).includes("arrowStartBattery")
          })
        })), zy.h.subscribe("clearDirectionArrow", (BB => {
          let {
            id: TB
          } = BB;
          null !== TB && TB !== iD || FD(null)
        }))], wD.add(TB), TB(zD), () => {
          wD.delete(TB)
        })
      }
      onAfterRender(BB, TB) {
        const dB = performance.now();
        if (this.cues.length > 0) {
          const TB = .55 + .45 * Math.sin(dB / 1100 * Math.PI * 2);
          for (const dB of this.cues) BB.setGameMesh(dB, {
            visibility: TB
          })
        }
        if (dB - this.lastCheckMs < 150) return;
        this.lastCheckMs = dB;
        const VB = this.plans.all().filter((BB => {
            const [dB, VB, yB] = BB.box.ctrl;
            return (!BB.formed || null !== this.plans.layoutOf(BB.box.ctrl)) && (dB - TB[0]) ** 2 + (VB - TB[1]) ** 2 + (yB - TB[2]) ** 2 <= 2304
          })),
          yB = function(BB, TB) {
            const dB = pD.c.UD,
              VB = new Map;
            for (const pB of TB) {
              const TB = Gd(pB.box, 0),
                lB = Gd(pB.box, Xd(pB.box) - 1),
                JB = [Math.min(TB[0], lB[0]), Math.min(TB[1], lB[1]), Math.min(TB[2], lB[2])].map((BB => Math.floor(BB / dB))),
                YB = [Math.max(TB[0], lB[0]), Math.max(TB[1], lB[1]), Math.max(TB[2], lB[2])].map((BB => Math.floor(BB / dB)));
              for (let dB = JB[0]; dB <= YB[0]; dB++)
                for (let TB = JB[1]; TB <= YB[1]; TB++)
                  for (let pB = JB[2]; pB <= YB[2]; pB++) {
                    var yB;
                    VB.set(`${dB},${TB},${pB}`, null !== (yB = BB.getChunkVersion(dB, TB, pB)) && void 0 !== yB ? yB : -1)
                  }
            }
            return VB
          }(BB, VB);
        this.plans.getVersion() === this.storeVersion && (function(BB, TB) {
          if (BB.size !== TB.size) return !1;
          for (const [dB, VB] of BB)
            if (TB.get(dB) !== VB) return !1;
          return !0
        }(yB, this.chunkVersions) || dB - this.lastRescanMs < 600) || (this.lastRescanMs = dB, this.storeVersion = this.plans.getVersion(), this.chunkVersions = yB, this.redraw(BB, VB))
      }
      dispose(BB) {
        this.unwatch(), zD = null, this.clearMeshes(BB), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(BB, TB) {
        var dB;
        (null === BB || void 0 === BB ? void 0 : BB.join()) === (null === (dB = this.goal) || void 0 === dB ? void 0 : dB.join()) && TB === this.startsBattery || (this.goal = BB, this.startsBattery = TB, this.storeVersion = -1)
      }
      redraw(BB, TB) {
        const dB = TB => MD(BB, TB),
          VB = new Map,
          yB = [],
          pB = this.plans.guideOn();
        for (const gB of TB) {
          const BB = pB && oD(gB, this.plans.showsStarter(gB.box.ctrl), (BB => dB(Gd(gB.box, BB)))),
            TB = "reactor" === gB.kind ? this.plans.layoutOf(gB.box.ctrl) : null,
            lB = pB && !gB.formed ? OD(gB, dB, this.goal) : -1;
          lB >= 0 && yB.push([Gd(gB.box, lB), HD(gB.box, lB)]);
          const JB = Xd(gB.box);
          for (let yB = 0; yB < JB; yB++) {
            const JB = Gd(gB.box, yB),
              YB = dB(JB),
              oB = null === YB ? null : kD(gB, yB, YB, BB, pB, TB);
            if (null !== oB) {
              const BB = "wrong" !== oB && uD(gB.box, yB, lB),
                TB = BB ? `${oB}Dim` : oB;
              let dB = VB.get(TB);
              dB || (dB = {
                draw: {
                  ghost: oB,
                  dim: BB
                },
                list: []
              }, VB.set(TB, dB)), dB.list.push(JB)
            }
          }
        }
        if (pB && this.startsBattery && this.goal) {
          const [BB, TB, yB] = this.goal, pB = [];
          for (const [VB, lB, JB] of ND) {
            const YB = [BB + VB, TB + lB, yB + JB];
            "Air" === dB(YB) && pB.push(YB)
          }
          if (pB.length > 0) {
            var lB;
            const BB = null !== (lB = VB.get("cell")) && void 0 !== lB ? lB : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            BB.list.push(...pB), VB.set("cell", BB)
          }
        }
        const JB = [...VB.keys()].sort(),
          YB = [...JB.map((BB => `${BB}:${VB.get(BB).list.join(";")}`)), `cue:${yB.join(";")}`].join("|");
        if (YB !== this.shownKey) {
          this.shownKey = YB, this.clearMeshes(BB);
          for (const TB of JB) {
            const {
              draw: dB,
              list: yB
            } = VB.get(TB);
            this.meshes.push(this.build(BB, dB, yB))
          }
          for (const [TB, dB] of yB) this.cues.push(YD(BB, sD(TB, dB), tD))
        }
      }
      build(BB, TB, dB) {
        let {
          ghost: VB,
          dim: yB
        } = TB;
        const {
          size: pB,
          colour: lB,
          alpha: JB
        } = mD[VB], YB = dB[0], gB = [], oB = [];
        for (const [kB, LB, OB] of dB) JD(gB, oB, [kB - YB[0] + .5, LB - YB[1] + .5, OB - YB[2] + .5], [pB, pB, pB]);
        return BB.createGameMesh({
          positions: gB,
          indices: oB
        }, {
          rgb: lB,
          alpha: JB * (yB ? .3 : 1)
        }, YB)
      }
      clearMeshes(BB) {
        for (const TB of [...this.meshes, ...this.cues]) BB.disposeGameMesh(TB);
        this.meshes = [], this.cues = []
      }
    }
    const rD = [.56, .83, 1],
      ID = [1, .3, .25];
    class cD {
      constructor(BB) {
        this.plans = BB, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, TB, dB) {
        var VB;
        const yB = performance.now();
        if (yB - this.lastCheckMs < 150) return;
        this.lastCheckMs = yB;
        const pB = TB => MD(BB, TB),
          lB = null === (VB = BB.gdB(TB)) || void 0 === VB ? void 0 : VB.name,
          JB = lB && "Reactor Frame" === sd(lB) ? BB.getTargetedBlock() : null,
          YB = JB ? [JB.ck[0], JB.ck[1], JB.ck[2]] : null,
          gB = null !== YB && "Air" === pB(YB) && YB.every(((BB, TB) => Math.abs(BB + .5 - dB[TB]) <= 8)) ? vD(YB, dB, pB, (BB => this.inPlan(BB))) : null,
          oB = gB ? `${gB.box.ctrl.join()}|${gB.box.rot}|${gB.fits}` : "";
        oB !== this.shownKey && this.show(BB, oB, gB)
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      inPlan(BB) {
        return this.plans.all().some((TB => qd(TB.box, BB) >= 0))
      }
      show(BB, TB, dB) {
        if (this.clear(BB), this.shownKey = TB, !dB) return;
        const {
          box: VB,
          fits: yB
        } = dB, pB = yB ? rD : ID, {
          lo: lB,
          hi: JB
        } = MY(VB);
        this.meshes.push(YD(BB, zY(lB, JB, .05), {
          rgb: pB,
          alpha: 1
        }));
        const YB = [],
          gB = Gd(VB, 0)[1];
        for (let oB = 0; oB < VB.w * VB.d; oB++) {
          const [BB, , TB] = Gd(VB, oB);
          YB.push([
            [BB + .5, gB + .02 + .01, TB + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(YD(BB, YB, {
          rgb: pB,
          alpha: .25
        }))
      }
      clear(BB) {
        for (const TB of this.meshes) BB.disposeGameMesh(TB);
        this.meshes = []
      }
    }
    const SD = "buildAFactory2Game:";

    function PD(BB, TB, dB) {
      const VB = BB => {
          const [dB, VB, yB] = BB.box.ctrl;
          return dB === TB[0] && VB === TB[1] && yB === TB[2]
        },
        yB = BB.find((BB => VB(BB) || qd(BB.box, TB) >= 0));
      if (!yB) return null;
      const pB = function(BB, TB, dB) {
        const {
          w: VB,
          h: yB,
          d: pB
        } = BB.box, lB = "reactor" === BB.kind ? `${SD}rxTitle` : `${SD}batTitle`;
        if (BB.formed) return {
          key: `${SD}lookPlanFormed`,
          kindKey: lB,
          w: VB,
          h: yB,
          d: pB,
          count: 0
        };
        let JB = 0,
          YB = 0;
        for (let oB = 0; oB < Xd(BB.box); oB++) {
          const TB = dB(Gd(BB.box, oB)),
            VB = null === TB ? "ok" : nd(BB.kind, xd(BB.box, oB), TB);
          JB += "missing" === VB ? 1 : 0, YB += "wrong" === VB || "blocked" === VB ? 1 : 0
        }
        const gB = function(BB, TB, dB) {
          if (TB < 0 || null === dB) return;
          const VB = xd(BB.box, TB),
            yB = nd(BB.kind, VB, dB);
          return "blocked" === yB ? `${SD}lookWhy_blocked` : "wrong" === yB ? "ctrl" === VB ? `${SD}lookWhy_ctrl` : `${SD}lookWhy_reactor_${VB}` : void 0
        }(BB, qd(BB.box, TB), dB([TB[0], TB[1], TB[2]]));
        if (JB > 0) return {
          key: `${SD}lookPlanToBuild`,
          kindKey: lB,
          w: VB,
          h: yB,
          d: pB,
          count: JB,
          why: gB
        };
        if (YB > 0) return {
          key: `${SD}lookPlanTakeOut`,
          kindKey: lB,
          w: VB,
          h: yB,
          d: pB,
          count: YB,
          why: gB
        };
        return {
          key: "reactor" === BB.kind ? `${SD}lookPlanNoRods` : `${SD}lookPlanDone`,
          kindKey: lB,
          w: VB,
          h: yB,
          d: pB,
          count: 0
        }
      }(yB, TB, dB);
      return "reactor" === yB.kind && VB(yB) ? {
        ...pB,
        ctrl: !0
      } : pB
    }

    function QD(BB, TB) {
      return BB === TB || null !== BB && null !== TB && BB.key === TB.key && BB.kindKey === TB.kindKey && BB.w === TB.w && BB.h === TB.h && BB.d === TB.d && BB.count === TB.count && BB.why === TB.why && BB.ctrl === TB.ctrl
    }

    function RD() {
      return performance.now()
    }
    class aD {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RD;
        this.ticket = BB, this.sent = TB, this.backstopMs = dB, this.now = VB, this.queuedAt = void 0, this.queuedAt = VB()
      }
      answered() {
        const BB = this.now(),
          TB = this.sent.leftAt(this.ticket);
        return null !== TB && BB - TB > 4e3 || BB - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class ZD {
      constructor() {
        this.echoes = []
      }
      add(BB) {
        this.echoes = this.echoes.filter((BB => !BB.answered())), this.echoes.push(BB)
      }
      answered() {
        var BB, TB;
        return null === (BB = null === (TB = this.echoes.at(-1)) || void 0 === TB ? void 0 : TB.answered()) || void 0 === BB || BB
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((BB => BB.answered()))
      }
      age() {
        var BB, TB;
        return null !== (BB = null === (TB = this.echoes.at(-1)) || void 0 === TB ? void 0 : TB.age()) && void 0 !== BB ? BB : null
      }
      clear() {
        this.echoes = []
      }
    }
    class XD {
      constructor(BB) {
        this.send = BB, this.value = null, this.sent = null, this.echoes = new ZD, this.down = !1, this.timer = null
      }
      shown(BB) {
        return null === this.value ? BB : this.down || this.value !== this.sent ? this.value : BB === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), BB) : this.value
      }
      pendingFor(BB) {
        return null !== this.value && this.value === this.sent && BB !== this.value ? this.echoes.age() : null
      }
      assume(BB, TB) {
        this.disarm(), this.down = !1, this.value = BB, this.sent = BB, this.echoes.clear(), this.echoes.add(TB)
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
    class WD {
      constructor() {
        this.pending = new Map
      }
      set(BB, TB, dB) {
        var VB;
        const yB = null !== (VB = this.pending.get(BB)) && void 0 !== VB ? VB : {
          on: TB,
          echoes: new ZD
        };
        yB.on = TB, yB.echoes.add(dB), this.pending.set(BB, yB)
      }
      shown(BB) {
        let TB = BB;
        for (const [dB, {
            on: VB,
            echoes: yB
          }] of this.pending) 0 !== (BB & dB) === VB && yB.agreeCounts() || yB.answered() ? this.pending.delete(dB) : TB = VB ? TB | dB : TB & ~dB;
        return TB
      }
      pendingMask() {
        let BB = 0;
        for (const TB of this.pending.keys()) BB |= TB;
        return BB
      }
      pendingFor(BB) {
        let TB = null;
        for (const [VB, {
            on: yB,
            echoes: pB
          }] of this.pending) {
          if (void 0 !== BB && 0 !== (BB & VB) === yB) continue;
          const lB = pB.age();
          var dB;
          if (null !== lB) TB = Math.max(null !== (dB = TB) && void 0 !== dB ? dB : 0, lB)
        }
        return TB
      }
      clear() {
        this.pending.clear()
      }
    }
    class hD {
      constructor() {
        this.dims = null, this.echoes = new ZD, this.unmet = null
      }
      shown(BB) {
        var TB;
        return this.dims && (CD(this.dims, BB) && this.echoes.agreeCounts() || this.echoes.answered()) && (CD(this.dims, BB) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (TB = this.dims) && void 0 !== TB ? TB : BB
      }
      takeUnmet() {
        const BB = this.unmet;
        return this.unmet = null, BB
      }
      set(BB, TB) {
        this.dims = BB, this.echoes.add(TB)
      }
      pendingFor(BB) {
        return null === this.dims || BB && CD(this.dims, BB) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function CD(BB, TB) {
      return BB[0] === TB[0] && BB[1] === TB[1] && BB[2] === TB[2]
    }
    class GD {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RD;
        this.now = BB, this.taps = new Map
      }
      tap(BB, TB, dB) {
        return !this.busy(BB) && (this.taps.set(BB, {
          at: this.now(),
          done: TB
        }), dB(), !0)
      }
      settle(BB) {
        for (const [TB, dB] of [...this.taps]) dB.done(BB) && this.taps.delete(TB)
      }
      busy(BB) {
        const TB = this.taps.get(BB);
        return !!TB && (!(this.now() - TB.at >= 3e3) || (this.taps.delete(BB), !1))
      }
      busyIds() {
        const BB = new Set;
        for (const TB of [...this.taps.keys()]) this.busy(TB) && BB.add(TB);
        return BB
      }
      clear() {
        this.taps.clear()
      }
    }

    function qD(BB) {
      return {
        send: TB => BB.track(TB),
        sendUrgent: (TB, dB) => BB.track(TB, {
          urgent: !0,
          supersedes: dB
        }),
        leftAt: TB => BB.leftAt(TB),
        holdReserve: () => BB.holdUrgentReserve(),
        answerMs: wl
      }
    }

    function xD() {
      return performance.now()
    }

    function jD(BB) {
      const TB = BB.baf2RxNeed.map((BB => {
        let [TB, dB] = BB;
        return [TB, dB]
      }));
      return JSON.stringify([BB.baf2RxFormed, TB, BB.baf2RxBad, BB.baf2RxCells])
    }

    function AD(BB, TB) {
      const dB = 0 !== (TB & pT),
        VB = 0 !== (BB.baf2RxFlags & pT);
      return !dB || VB || "running" !== BB.baf2RxState && "idle" !== BB.baf2RxState ? !dB && VB && "scram" === BB.baf2RxState && BB.baf2RxFuel > 0 ? "idle" : BB.baf2RxState : "scram"
    }

    function bD(BB) {
      return JSON.stringify([BB.baf2BatFormed, BB.baf2BatNeed, BB.baf2BatBad])
    }

    function nD(BB) {
      return BB.join(",")
    }
    class eD {
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
    class Bu {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(BB, TB) {
        this.lastAt = BB, this.lastUntil = BB + TB
      }
      answered(BB) {
        return this.lastAt >= BB || BB < this.lastUntil
      }
    }
    class Tu {
      constructor(BB, TB) {
        this.link = BB, this.now = TB, this.hold = new hD, this.picked = null, this.notTaken = null
      }
      shown(BB) {
        const TB = this.hold.shown(BB);
        if (this.hold.takeUnmet() && this.picked) {
          var dB;
          const {
            plans: TB,
            ctrl: VB,
            at: yB
          } = this.picked;
          this.picked = null, TB.unpredict(VB), null === (dB = this.notTaken) || void 0 === dB || dB.call(this, BB, yB)
        }
        return TB
      }
      pendingFor(BB) {
        return this.hold.pendingFor(BB)
      }
      dO(BB, TB, dB) {
        BB.predictSize(TB, dB), this.picked = {
          plans: BB,
          ctrl: TB,
          at: this.now()
        };
        const VB = this.link.send(yT(TB, "plan", ...dB));
        this.hold.set(dB, new aD(VB, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class du {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xD;
        this.plans = BB, this.readInterior = TB, this.link = dB, this.now = VB, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new WD, this.throttle = void 0, this.oneShots = void 0, this.listeners = new eD, this.redraw = null, this.releaseReserve = null, this.size = new Tu(dB, VB), this.oneShots = new GD(VB), this.throttle = new XD((BB => this.echo(this.link.send(this.command("throttle", BB)))))
      }
      set(BB) {
        !BB.baf2RxOpen && this.raw && nD(this.raw.baf2RxAt) === nD(BB.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(BB), this.yH(BB)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.raw && (this.size.dO(this.plans, this.raw.baf2RxAt, BB), this.yH(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const BB = this.raw.baf2RxAt;
        this.plans.setStarter(BB, !this.plans.showsStarter(BB)), this.yH(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.yH(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.yH(this.raw)
      }
      send(BB) {
        if (this.raw) {
          for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
          this.link.send(this.command(BB, ...dB))
        }
      }
      tap(BB, TB) {
        this.raw && this.oneShots.tap(BB, function(BB, TB) {
          if ("start" === BB) return BB => 0 === (BB.baf2RxFlags & pT);
          if ("odConfirm" === BB) return BB => 0 !== (BB.baf2RxFlags & lT);
          const dB = jD(TB);
          return BB => jD(BB) !== dB
        }(BB, this.raw), TB) && ("start" === BB && (this.startedAt = this.now()), this.yH(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(pT, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(BB, TB) {
        if (!this.raw) return;
        const dB = BB === pT ? this.command(TB ? "scram" : "start") : this.command("od", TB ? 1 : 0),
          VB = TB && BB === pT,
          yB = `${VT} ${this.raw.baf2RxAt.join(" ")} `,
          pB = this.echo(VB ? this.link.sendUrgent(dB, (BB => {
            const TB = BB.startsWith(yB) ? BB.slice(yB.length).split(" ")[0] : null;
            return "throttle" === TB || "start" === TB
          })) : this.link.send(dB));
        this.flags.set(BB, TB, pB), VB && this.throttle.assume(0, pB), this.yH(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(BB) {
        this.throttle.drag(BB), this.raw && this.yH(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.yH(this.raw)
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
        for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
        return yT(this.raw.baf2RxAt, BB, ...dB)
      }
      echo(BB) {
        return new aD(BB, this.link, this.link.answerMs, this.now)
      }
      yH(BB) {
        var TB;
        this.raw = BB;
        const dB = this.flags.shown(BB.baf2RxFlags),
          VB = {
            ...BB,
            baf2RxFlags: dB,
            baf2RxTarget: this.throttle.shown(BB.baf2RxTarget),
            baf2RxState: AD(BB, dB)
          },
          yB = this.size.shown(VB.baf2RxDims),
          pB = this.throttle.pendingFor(),
          lB = [this.throttle.pendingFor(BB.baf2RxTarget), this.flags.pendingFor(BB.baf2RxFlags), this.size.pendingFor(BB.baf2RxDims)].filter((BB => null !== BB)),
          JB = lB.length > 0 ? Math.max(...lB) : null,
          YB = this.oneShots.busyIds(),
          gB = VB.baf2RxAt;
        let oB, kB, LB = null,
          OB = [Math.max(0, yB[0] - 2), Math.max(0, yB[1] - 2), Math.max(0, yB[2] - 2)];
        if (VB.baf2RxFormed) {
          const [BB, TB, dB] = VB.baf2RxDims;
          OB = [Math.max(0, BB - 2), Math.max(0, TB - 2), Math.max(0, dB - 2)], oB = Array.from(VB.baf2RxCells, Number), kB = `${OB.join(",")}:${VB.baf2RxCells}`
        } else {
          var DB;
          const BB = null === (DB = this.plans.planAt(gB)) || void 0 === DB ? void 0 : DB.box,
            TB = BB ? Rd(BB, "reactor", ...yB) : Pd(gB, 1, ...yB, Qd("reactor", yB[0])),
            dB = this.readInterior(TB);
          LB = xJ(OB, dB), oB = dB, kB = `${OB.join(",")}:${dB.join("")}`
        }(null === (TB = this.looksOf) || void 0 === TB ? void 0 : TB.key) !== kB && (this.looksOf = {
          key: kB,
          looks: BY(OB, oB)
        }), this.view = {
          status: VB,
          dims: yB,
          plan: LB,
          inner: OB,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(gB),
          odConfirmed: this.odConfirmed || 0 !== (VB.baf2RxFlags & LT),
          guide: this.plans.guideOn(),
          throttlePending: null !== pB,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== JB && JB >= 5e3,
          busy: YB,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== JB || YB.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.yH(this.raw)
        }), 250))
      }
    }
    class Vu {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xD;
        this.plans = BB, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new eD, this.redraw = null, this.size = new Tu(TB, dB), this.oneShots = new GD(dB)
      }
      set(BB) {
        !BB.baf2BatOpen && this.view && nD(this.view.status.baf2BatAt) === nD(BB.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(BB), this.yH(BB)
      }
      tap(BB, TB) {
        if (!this.view) return;
        const dB = bD(this.view.status);
        this.oneShots.tap(BB, (BB => bD(BB) !== dB), TB) && this.yH(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(BB) {
        this.size.notTaken = BB
      }
      resize(BB) {
        this.view && (this.size.dO(this.plans, this.view.status.baf2BatAt, BB), this.yH(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.yH(this.view.status)
      }
      subscribe(BB) {
        return this.listeners.subscribe(BB)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      yH(BB) {
        const TB = this.size.shown(BB.baf2BatDims),
          dB = this.oneShots.busyIds();
        this.view = {
          status: BB,
          dims: TB,
          Kk: DY(TB, BB.baf2BatDims) ? BB.baf2BatCapacity : VY(...TB),
          guide: this.plans.guideOn(),
          busy: dB
        }, this.listeners.notify(), dB.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.yH(this.view.status)
        }), 250))
      }
    }
    const yu = "buildAFactory2Game:";

    function pu() {
      var BB;
      const TB = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!TB) return null;
      const dB = TB.querySelector(".ExitButton");
      return function(BB, TB) {
        const dB = TB ? TB.left - 8 : BB.right;
        return {
          left: BB.left,
          top: BB.top,
          width: Math.max(0, dB - BB.left),
          height: BB.height
        }
      }(TB.getBoundingClientRect(), null !== (BB = null === dB || void 0 === dB ? void 0 : dB.getBoundingClientRect()) && void 0 !== BB ? BB : null)
    }
    const lu = (0, VB.memo)((function(BB) {
      let {
        store: TB
      } = BB;
      const {
        t: dB
      } = (0, iy.z)(), [yB, pB] = (0, VB.useState)((() => TB.get())), [lB, JB] = (0, VB.useState)((() => performance.now()));
      (0, VB.useEffect)((() => (pB(TB.get()), TB.subscribe((() => {
        pB(TB.get()), JB(performance.now())
      })))), [TB]);
      const {
        alarm: YB,
        boomAt: gB
      } = yB, oB = null !== YB && null !== YB.secs, [kB, LB] = (0, VB.useState)(null);
      (0, VB.useEffect)((() => {
        if (!oB) return;
        LB(pu());
        const BB = setInterval((() => {
          JB(performance.now()), LB(pu())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [oB]);
      const [OB, DB] = (0, VB.useState)(!1);
      return (0, VB.useEffect)((() => {
        if (gB === -1 / 0) return;
        DB(!0);
        const BB = setTimeout((() => {
          DB(!1)
        }), 1300);
        return () => {
          clearTimeout(BB)
        }
      }), [gB]), (0, mp.jsxs)(mp.Fragment, {
        children: [null !== YB && (0, mp.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: dB(YB.hot ? `${yu}rxAlarmSiren` : `${yu}rxAlarmDamaged`, {
            amount: String(YB.damage)
          })
        }), null !== YB && null !== YB.secs && (0, mp.jsx)("div", {
          className: kB ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== kB && void 0 !== kB ? kB : void 0,
          "aria-live": "assertive",
          children: dB(`${yu}rxAlarmCountdown`, {
            amount: String((uB = YB.secs, HB = lB - YB.receivedAt, Math.max(1, Math.ceil(uB - HB / 1e3))))
          })
        }), OB && (0, mp.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var uB, HB
    }));
    class Ju {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      Qv(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const dB = BB.baf2RxAlarmAt.join(",");
        let VB = this.snapshot.boomAt;
        if (BB.baf2RxAlarmBoom) this.byReactor.delete(dB), VB = TB;
        else if (BB.baf2RxAlarmDamage <= 0) this.byReactor.delete(dB);
        else {
          var yB;
          this.byReactor.set(dB, {
            damage: BB.baf2RxAlarmDamage,
            secs: null !== (yB = BB.baf2RxAlarmSecs) && void 0 !== yB ? yB : null,
            hot: !0 === BB.baf2RxAlarmHot,
            receivedAt: TB
          })
        }
        this.yH(VB)
      }
      retain(BB) {
        let TB = !1;
        for (const dB of [...this.byReactor.keys()]) BB.has(dB) || (this.byReactor.delete(dB), TB = !0);
        TB && this.yH(this.snapshot.boomAt)
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
      yH(BB) {
        let TB = null;
        for (const dB of this.byReactor.values())(!TB || dB.damage > TB.damage) && (TB = dB);
        this.snapshot = {
          alarm: TB,
          boomAt: BB
        };
        for (const dB of this.listeners) dB()
      }
    }
    const Yu = {
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

    function gu(BB) {
      return [BB[0], BB[1], BB[2]]
    }

    function ou(BB) {
      return `${BB[0]},${BB[1]},${BB[2]}`
    }
    class ku {
      constructor(BB) {
        if (this.plans = BB, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var BB;
            return {
              active: this.glows.flatMap((BB => {
                let {
                  record: TB
                } = BB;
                return TB ? [TB] : []
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
      check(BB, TB, dB) {
        const VB = new Set(TB.map((BB => ou(BB.box.ctrl))));
        for (const lB of function(BB, TB) {
            const dB = [],
              VB = new Map(BB);
            BB.clear();
            for (const yB of TB) {
              const TB = dD(yB.box.ctrl),
                pB = yB.formed ? yB.level : 0;
              BB.set(TB, pB), pB > 0 && 0 === VB.get(TB) && dB.push(yB)
            }
            return dB
          }(this.levels, this.plans.all())) VB.has(ou(lB.box.ctrl)) && this.show(BB, lB, "on", dB);
        const yB = this.plans.lastFormed();
        if (null === yB || yB.receivedAt <= this.flashedAt) return null;
        this.flashedAt = yB.receivedAt;
        const pB = function(BB, TB) {
          var dB;
          const VB = dD(BB);
          return null !== (dB = TB.find((BB => dD(BB.box.ctrl) === VB))) && void 0 !== dB ? dB : null
        }(yB.ctrl, TB);
        return pB && this.show(BB, pB, "formed", dB), pB
      }
      fade(BB, TB) {
        0 !== this.glows.length && (this.glows = this.glows.filter((dB => {
          let {
            mesh: VB,
            glow: yB,
            startMs: pB,
            record: lB
          } = dB;
          const JB = (TB - pB) / Yu[yB].ms;
          return JB >= 1 ? (BB.disposeGameMesh(VB), lB && (lB.endMs = TB), !1) : (BB.setGameMesh(VB, {
            visibility: "formed" === yB ? 1 - JB : Math.sin(Math.PI * JB)
          }), !0)
        })))
      }
      dispose(BB) {
        for (const {
            mesh: dB
          }
          of this.glows) BB.disposeGameMesh(dB);
        this.glows = [], this.levels.clear();
        const TB = "undefined" !== typeof window ? window : null;
        (null === TB || void 0 === TB ? void 0 : TB.baf2Glows) === this.devAccessor && delete TB.baf2Glows
      }
      show(BB, TB, dB, VB) {
        const {
          lo: yB,
          hi: pB
        } = MY(TB.box);
        let lB = null;
        this.devLog && (lB = {
          glow: dB,
          ctrl: gu(TB.box.ctrl),
          lo: gu(yB),
          hi: gu(pB),
          startMs: VB,
          endMs: null
        }, this.devLog.push(lB), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(BB, dB, zY(yB, pB, Yu[dB].thick)),
          glow: dB,
          startMs: VB,
          record: lB
        })
      }
      build(BB, TB, dB) {
        const VB = YD(BB, dB, {
          rgb: Yu[TB].colour,
          alpha: 1
        });
        return BB.setGameMesh(VB, {
          visibility: 0
        }), VB
      }
    }
    const Lu = 1 / .6,
      Ou = {
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
        blendMode: UJ.e.Standard,
        soft: !0
      },
      Du = {
        ...Ou,
        size: [.25, .4],
        count: 2
      };

    function uu(BB) {
      return {
        colours: [BB, BB],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: UJ.e.Add,
        soft: !1
      }
    }
    const Hu = uu([150, 225, 255]),
      Eu = uu([185, 145, 255]),
      vu = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function mu(BB) {
      const TB = zT[BB];
      return null === TB.fuelSlot || bT(TB) ? vu.includes(BB) ? Eu : Hu : Ou
    }
    const iu = {
        kind: "smokePuff"
      },
      Nu = [.2, .025, .2];

    function tu(BB, TB) {
      const [
        [dB, VB, yB],
        [pB, lB, JB]
      ] = BB.colours;
      return {
        texture: BB.soft ? iu : "square_particle",
        Kk: TB,
        minLifeTime: BB.life[0] / Lu,
        maxLifeTime: BB.life[1] / Lu,
        minEmitPower: BB.power[0] * Lu,
        maxEmitPower: BB.power[1] * Lu,
        minSize: BB.size[0],
        maxSize: BB.size[1],
        emitRate: 0,
        gravity: [0, BB.lift * Lu * Lu, 0],
        dir1: [-BB.spread, 1, -BB.spread],
        dir2: [BB.spread, 1, BB.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [dB, VB, yB, BB.alpha],
          maxColor: [pB, lB, JB, BB.alpha]
        }, {
          timeFraction: 1,
          minColor: [dB, VB, yB, 0],
          maxColor: [pB, lB, JB, 0]
        }],
        blendMode: BB.blendMode
      }
    }
    class fu {
      constructor(BB) {
        this.fixed = BB, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(BB, TB, dB) {
        var VB;
        if (dB === this.lastFrame) return !1;
        this.lastFrame = dB;
        const yB = this.at;
        yB[0] = TB[0] + .5, yB[1] = TB[1] + 1.025, yB[2] = TB[2] + .5;
        const pB = null !== (VB = this.fixed) && void 0 !== VB ? VB : JB() ? Du : Ou;
        let lB = this.particles.get(pB);
        return lB || (lB = BB.createParticles(function(BB) {
          return tu(BB, Math.ceil(12 * BB.count * BB.life[1]) + BB.count)
        }(pB), {
          pos: yB,
          half: Nu
        }), this.particles.set(pB, lB)), lB.moveTo(yB), lB.emit(pB.count), !0
      }
      dispose() {
        for (const BB of this.particles.values()) BB.stop();
        this.particles.clear()
      }
    }
    class su {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(BB) {
        this.indexed = !0;
        for (const TB of iT) {
          const dB = mu(TB);
          for (let VB = 1; VB <= 4; VB++) {
            const yB = BB.blockNameToBlockId(`${TB}|meta|rot${VB}|Running`, !0);
            if (null === yB) continue;
            let pB = this.pufferIndexByStyle.get(dB);
            void 0 === pB && (pB = this.pufferList.push(new fu(dB === Ou ? null : dB)) - 1, this.pufferIndexByStyle.set(dB, pB)), this.pufferIndexById[yB] = pB + 1
          }
        }
      }
      onAfterRender(BB, TB) {
        this.indexed || this.index(BB);
        const dB = performance.now(),
          VB = 0 === this.lastMs ? 0 : Math.min(dB - this.lastMs, 250) / 1e3;
        this.lastMs = dB, this.frame++, BB.particlesEnabled() ? (this.scan(BB, TB), this.puff(BB, VB)) : this.sources = []
      }
      dispose() {
        for (const BB of this.pufferList) BB.dispose();
        this.sources = [], this.found = []
      }
      scan(BB, TB) {
        0 === this.scanRow && (this.origin = [Math.floor(TB[0]) - 12, Math.floor(TB[1]) - 6, Math.floor(TB[2]) - 12]);
        const dB = Math.min(this.scanRow + 16, 325),
          [VB, yB, pB] = this.origin,
          lB = this.hits;
        lB.length = 0;
        for (let JB = this.scanRow; JB < dB; JB++) {
          const TB = VB + JB % 25,
            dB = yB + Math.floor(JB / 25);
          BB.scanBlocks(TB, dB, pB, TB + 1, dB + 1, pB + 25, this.pufferIndexById, lB)
        }
        for (let JB = 0; JB < lB.length; JB += 4) {
          const BB = lB[JB + 3];
          this.found.push({
            pos: [lB[JB], lB[JB + 1], lB[JB + 2]],
            rY: BB,
            puffer: this.pufferList[this.pufferIndexById[BB] - 1]
          })
        }
        this.scanRow = dB, 325 === dB && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(BB, TB) {
        const dB = this.sources.length;
        if (0 !== dB) {
          this.budget = Math.min(this.budget + Math.min(dB / 1.2, 12) * TB, 2);
          for (let TB = 0; TB < dB && this.budget >= 1; TB++) {
            const TB = this.sources[this.cursor % dB];
            this.cursor = (this.cursor + 1) % dB, BB.getBlockId(TB.pos[0], TB.pos[1], TB.pos[2]) === TB.rY && (TB.puffer.puff(BB, TB.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const Mu = {
        ...uu([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      zu = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function wu(BB) {
      return 0 === BB.spots.length ? 0 : Math.min(1 * BB.level, 4)
    }

    function Uu(BB) {
      return 0 === BB.glass.length ? 0 : Math.min(.75 * BB.level, 3)
    }

    function Fu(BB) {
      return `${BB.ctrl.join(",")}:${BB.rot}:${BB.cu},${BB.cv}:${BB.w},${BB.h},${BB.d}`
    }

    function Ku(BB, TB) {
      const dB = TB.w - 2,
        VB = TB.h - 2,
        yB = TB.d - 2,
        pB = [];
      for (let lB = 0; lB < dB * VB * yB; lB++) {
        const JB = lB % dB,
          YB = Math.floor(lB / dB) % yB,
          gB = Math.floor(lB / (dB * yB));
        if (JB > 0 && JB < dB - 1 && YB > 0 && YB < yB - 1 && gB > 0 && gB < VB - 1) continue;
        const oB = Gd(TB, Ad(TB, lB)),
          kB = MD(BB, oB);
        if (null !== kB && "Fuel Rod" === sd(kB))
          for (const TB of zu) {
            const dB = [oB[0] + TB[0], oB[1] + TB[1], oB[2] + TB[2]];
            Iu(BB, dB) && pB.push(cu(dB, TB))
          }
      }
      return pB
    }

    function ru(BB, TB) {
      const {
        lo: dB,
        hi: VB
      } = MY(TB), yB = [];
      for (let pB = dB[0]; pB < VB[0]; pB++)
        for (let TB = dB[1]; TB < VB[1]; TB++) {
          const lB = pB === dB[0] || pB === VB[0] - 1 || TB === dB[1] || TB === VB[1] - 1 ? 1 : Math.max(1, VB[2] - 1 - dB[2]);
          for (let JB = dB[2]; JB < VB[2]; JB += lB) {
            const lB = [pB, TB, JB];
            if (!Iu(BB, lB)) continue;
            const YB = pB === dB[0] ? zu[1] : pB === VB[0] - 1 ? zu[0] : JB === dB[2] ? zu[5] : JB === VB[2] - 1 ? zu[4] : TB === dB[1] ? zu[3] : zu[2];
            yB.push(cu(lB, YB))
          }
        }
      return yB
    }

    function Iu(BB, TB) {
      const dB = MD(BB, TB);
      return null !== dB && "Reactor Glass" === sd(dB)
    }

    function cu(BB, TB) {
      return [
        [BB[0] + .5 + .55 * TB[0], BB[1] + .5 + .55 * TB[1], BB[2] + .5 + .55 * TB[2]],
        [0 === TB[0] ? .4 : .02, 0 === TB[1] ? .4 : .02, 0 === TB[2] ? .4 : .02]
      ]
    }
    class Su {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(BB, TB, dB, VB) {
        const yB = [],
          pB = new Set;
        for (const gB of TB) {
          var lB, JB, YB;
          const {
            box: TB
          } = gB;
          if ("reactor" !== gB.kind || gB.level <= 0 || (TB.ctrl[0] - dB[0]) ** 2 + (TB.ctrl[1] - dB[1]) ** 2 + (TB.ctrl[2] - dB[2]) ** 2 > 576) continue;
          const oB = Fu(TB);
          pB.add(oB);
          let kB = this.spots.get(oB);
          if ((!kB || VB - kB.at > 3e3) && (kB = {
              at: VB,
              spots: Ku(BB, TB),
              glass: ru(BB, TB)
            }, this.spots.set(oB, kB)), 0 === kB.spots.length && 0 === kB.glass.length) continue;
          const LB = this.sparking.find((BB => BB.key === oB));
          yB.push({
            key: oB,
            level: gB.level,
            spots: kB.spots,
            glass: kB.glass,
            budget: null !== (lB = null === LB || void 0 === LB ? void 0 : LB.budget) && void 0 !== lB ? lB : 0,
            cursor: null !== (JB = null === LB || void 0 === LB ? void 0 : LB.cursor) && void 0 !== JB ? JB : 0,
            glassBudget: null !== (YB = null === LB || void 0 === LB ? void 0 : LB.glassBudget) && void 0 !== YB ? YB : 0
          })
        }
        for (const gB of this.spots.keys()) pB.has(gB) || this.spots.delete(gB);
        this.sparking = yB
      }
      emit(BB, TB, dB) {
        var VB;
        if (0 === this.sparking.length || !BB.particlesEnabled() || dB === this.lastFrame) return;
        this.lastFrame = dB;
        let yB = 0,
          pB = 0;
        for (const DB of this.sparking) yB += wu(DB), pB += Uu(DB);
        const lB = yB > 8 ? 8 / yB : 1,
          JB = pB > 6 ? 6 / pB : 1;
        let YB, gB = null,
          oB = null;
        for (const DB of this.sparking) DB.budget = Math.min(DB.budget + wu(DB) * lB * TB, 2), DB.budget >= 1 && (!gB || DB.budget > gB.budget) && (gB = DB), DB.glassBudget = Math.min(DB.glassBudget + Uu(DB) * JB * TB, 2), DB.glassBudget >= 1 && (!oB || DB.glassBudget > oB.glassBudget) && (oB = DB);
        if (gB) gB.budget--, YB = gB.spots[gB.cursor++ % gB.spots.length];
        else {
          if (!oB) return;
          oB.glassBudget--, YB = oB.glass[Math.floor(Math.random() * oB.glass.length)]
        }
        const [kB, LB] = YB, OB = null !== (VB = this.emitter) && void 0 !== VB ? VB : this.create(BB, kB, LB);
        OB.moveTo(kB, LB), OB.emit(Mu.count)
      }
      dispose() {
        var BB;
        null === (BB = this.emitter) || void 0 === BB || BB.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(BB, TB, dB) {
        const VB = Math.ceil(14 * Mu.count * Mu.life[1]) + Mu.count;
        return this.emitter = BB.createParticles(tu(Mu, VB), {
          pos: TB,
          half: dB
        }), this.emitter
      }
    }
    const Pu = [2, 3.2],
      Qu = 1 / 3,
      Ru = 1 / .6,
      au = {
        texture: iu,
        Kk: Math.ceil(18 * Pu[1]) + 4,
        minLifeTime: Pu[0] / Ru,
        maxLifeTime: Pu[1] / Ru,
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
        blendMode: UJ.e.Standard
      };
    class Zu {
      constructor(BB) {
        this.plans = BB, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new Su, this.frame = 0, this.outline = new ku(BB)
      }
      onAfterRender(BB, TB, dB) {
        const VB = performance.now(),
          yB = 0 === this.lastMs ? 0 : Math.min(VB - this.lastMs, 250) / 1e3;
        if (this.lastMs = VB, this.outline.fade(BB, VB), this.puff(BB, yB, dB), this.sparks.emit(BB, yB, this.frame++), VB - this.lastCheckMs < 150) return;
        this.lastCheckMs = VB;
        const pB = this.plans.all().filter((BB => BB.formed && Xu(BB.box.ctrl, dB) <= 4096));
        this.plumes = pB.filter((BB => "reactor" === BB.kind && BB.level > 0)).map((BB => ({
          box: BB.box,
          level: BB.level
        }))), this.updateHums(BB, TB, pB, dB), this.sparks.update(BB, pB, dB, VB), this.chimeFormed(BB, TB, pB, VB)
      }
      dispose(BB) {
        var TB;
        this.outline.dispose(BB), null === (TB = this.steam) || void 0 === TB || TB.dispose(), this.steam = null, this.sparks.dispose();
        for (const dB of this.hums.values()) dB.stop();
        this.hums.clear()
      }
      chimeFormed(BB, TB, dB, VB) {
        const yB = this.outline.check(BB, dB, VB);
        yB && BB.playSound(TB, "exp_levelup", .6, 1, {
          xp: [yB.box.ctrl[0] + .5, yB.box.ctrl[1], yB.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(BB, TB, dB) {
        const VB = this.plumes;
        if (0 === VB.length || !BB.particlesEnabled()) return void(this.plumeBudget = 0);
        const yB = VB.reduce(((BB, TB) => BB + 3 * TB.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + yB * TB, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let pB = this.plumeCursor % (yB / 3);
        this.plumeCursor++;
        let lB = VB[0];
        for (const kB of VB) {
          if (pB < kB.level) {
            lB = kB;
            break
          }
          pB -= kB.level
        }
        const {
          lo: JB,
          hi: YB
        } = MY(lB.box);
        if (function(BB, TB, dB) {
            const VB = Math.max(BB[0] - dB[0], 0, dB[0] - TB[0]),
              yB = Math.max(BB[2] - dB[2], 0, dB[2] - TB[2]);
            return Math.hypot(VB, dB[1] - TB[1], yB)
          }(JB, YB, dB) < 6 && Math.random() > Qu) return;
        const gB = [(JB[0] + YB[0]) / 2, YB[1] + .05, (JB[2] + YB[2]) / 2],
          oB = [(YB[0] - JB[0]) / 2 - .5, .05, (YB[2] - JB[2]) / 2 - .5];
        this.steam ??= BB.createParticles(au, {
          pos: gB,
          half: oB
        }), this.steam.moveTo(gB, oB), this.steam.emit(1)
      }
      updateHums(BB, TB, dB, VB) {
        const yB = new Map;
        for (const lB of dB) "reactor" === lB.kind && lB.level > 0 && Xu(lB.box.ctrl, VB) <= 576 && yB.set(`${pB=lB.box.ctrl,`${pB[0]},${pB[1]},${pB[2]}`}:${lB.level}`, lB);
        var pB;
        for (const [lB, JB] of this.hums) yB.has(lB) || (JB.stop(), this.hums.delete(lB));
        for (const [lB, JB] of yB) {
          if (this.hums.has(lB)) continue;
          const {
            lo: dB,
            hi: VB
          } = MY(JB.box), yB = [(dB[0] + VB[0]) / 2, dB[1], (dB[2] + VB[2]) / 2], pB = BB.playSound(TB, "rocketEngineLoop", .08 + .06 * JB.level, .55, {
            xp: yB,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          pB && this.hums.set(lB, pB)
        }
      }
    }

    function Xu(BB, TB) {
      return (BB[0] - TB[0]) ** 2 + (BB[1] - TB[1]) ** 2 + (BB[2] - TB[2]) ** 2
    }
    class Wu {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      Qv(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const VB = [BB.baf2BombAt[0], BB.baf2BombAt[1], BB.baf2BombAt[2]],
          yB = BB.baf2BombR;
        if (BB.baf2BombBoom) {
          const BB = Math.hypot(TB[0] - VB[0], TB[1] - VB[1], TB[2] - VB[2]);
          this.yH({
            fuse: null,
            blast: {
              at: VB,
              r: yB,
              receivedAt: dB,
              distance: BB,
              flash: BB <= 3 * yB
            }
          })
        } else this.yH({
          ...this.snapshot,
          fuse: BB.baf2BombMs > 0 ? {
            at: VB,
            r: yB,
            endsAt: dB + BB.baf2BombMs
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
      yH(BB) {
        this.snapshot = BB;
        for (const TB of this.listeners) TB()
      }
    }
    const hu = (0, VB.memo)((function(BB) {
      var TB;
      let {
        store: dB
      } = BB;
      const {
        t: yB
      } = (0, iy.z)(), [pB, lB] = (0, VB.useState)((() => dB.get())), [JB, YB] = (0, VB.useState)((() => performance.now()));
      (0, VB.useEffect)((() => (lB(dB.get()), dB.subscribe((() => {
        lB(dB.get()), YB(performance.now())
      })))), [dB]);
      const {
        fuse: gB,
        blast: oB
      } = pB;
      (0, VB.useEffect)((() => {
        if (!gB) return;
        const BB = setInterval((() => {
          YB(performance.now())
        }), 250);
        return () => {
          clearInterval(BB)
        }
      }), [gB]);
      const [kB, LB] = (0, VB.useState)(!1);
      (0, VB.useEffect)((() => {
        if (null === oB || void 0 === oB || !oB.flash) return;
        LB(!0);
        const BB = setTimeout((() => {
          LB(!1)
        }), 2500);
        return () => {
          clearTimeout(BB)
        }
      }), [oB]);
      const OB = gB ? function(BB, TB) {
        return BB.endsAt <= TB ? 0 : Math.ceil((BB.endsAt - TB) / 1e3)
      }(gB, JB) : 0;
      return (0, mp.jsxs)(mp.Fragment, {
        children: [OB > 0 && (0, mp.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: yB("buildAFactory2Game:bombCountdown", {
            amount: String(OB),
            radius: String(null !== (TB = null === gB || void 0 === gB ? void 0 : gB.r) && void 0 !== TB ? TB : 0)
          })
        }), kB && (0, mp.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Cu(BB) {
      const TB = Math.min(4, Math.max(1, BB / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * BB / 4)),
        capSpread: Math.min(5 * BB / 8, 24 * TB),
        capThick: 6 * TB,
        stemHalfWidth: 3 * TB,
        puffScale: TB
      }
    }
    class Gu {
      constructor() {
        this.Dg = !1
      }
      hold(BB) {
        BB.getCameraFar() < 1e3 && (BB.setCameraFar(1e3), this.Dg = !0)
      }
      release(BB) {
        this.Dg && (this.Dg = !1, BB.setCameraFar(null))
      }
    }
    const qu = 1 / .6,
      xu = [.2, .1, .2],
      ju = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Au = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: UJ.e.Standard,
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
      bu = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: UJ.e.Standard,
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
      nu = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: UJ.e.Standard,
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
      eu = {
        texture: iu,
        Kk: Math.ceil(120) + 4,
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
        blendMode: UJ.e.Add
      };
    class BH {
      constructor(BB) {
        this.store = BB, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Gu, this.timers = []
      }
      onAfterRender(BB, TB) {
        const dB = performance.now(),
          VB = 0 === this.lastMs ? 0 : Math.min(dB - this.lastMs, 250) / 1e3;
        this.lastMs = dB;
        const {
          fuse: yB,
          blast: pB
        } = this.store.get();
        null !== pB && pB !== this.shownBlast && (this.shownBlast = pB, this.startBlast(BB, TB, pB, dB));
        const lB = BB.particlesEnabled();
        null !== yB && yB.endsAt > dB && lB ? this.emitBeacon(BB, yB, VB, dB) : this.beaconBudget = 0, null !== this.cloud && (dB - this.cloud.startMs > 33e3 ? this.disposeCloud(BB) : (this.far.hold(BB), lB && this.emitCloud(BB, VB, dB)))
      }
      dispose(BB) {
        var TB;
        null === (TB = this.beacon) || void 0 === TB || TB.dispose(), this.beacon = null, this.disposeCloud(BB);
        for (const dB of this.timers) clearTimeout(dB);
        this.timers.length = 0
      }
      emitBeacon(BB, TB, dB, VB) {
        const yB = TB.endsAt - VB < 5e3 ? 350 : 1e3,
          pB = .5 + .5 * Math.sin(2 * Math.PI * VB / yB);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * pB * dB, 4), this.beaconBudget < 1) return;
        const lB = Math.floor(this.beaconBudget);
        this.beaconBudget -= lB;
        const [JB, YB, gB] = TB.at, oB = [JB + .5, YB + 1.1, gB + .5];
        this.beacon ??= BB.createParticles(eu, {
          pos: oB,
          half: xu
        }), this.beacon.moveTo(oB), this.beacon.emit(lB)
      }
      startBlast(BB, TB, dB, VB) {
        var yB;
        null === (yB = this.beacon) || void 0 === yB || yB.dispose(), this.beacon = null, this.disposeCloud(BB);
        const pB = (0, zJ.isMobile)() ? .5 : 1;
        this.streams = [Au, bu, nu].map((BB => {
          const TB = Math.round(BB.count * pB);
          return {
            spec: BB,
            particles: null,
            rate: TB / ((BB.toMs - BB.fromMs) / 1e3),
            budget: 0,
            left: TB
          }
        })), this.cloud = {
          blast: dB,
          startMs: VB
        };
        const lB = Math.max(.25, 1 - dB.distance / (6 * dB.r)),
          JB = dB.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [dB, VB, yB] of ju) dH(BB, TB, dB, lB * VB, yB)
        }), JB))
      }
      emitCloud(BB, TB, dB) {
        const {
          blast: VB,
          startMs: yB
        } = this.cloud, pB = dB - yB, [lB, JB, YB] = VB.at, gB = Cu(VB.r);
        for (const oB of this.streams) {
          const {
            spec: dB
          } = oB;
          if (oB.left <= 0 || pB < dB.fromMs) continue;
          oB.budget += oB.rate * TB;
          const yB = Math.min(Math.floor(oB.budget), oB.left);
          if (yB < 1) continue;
          oB.budget -= yB, oB.left -= yB;
          const kB = oB.particles ??= this.createStream(BB, dB, VB);
          if (dB === Au) {
            const BB = gB.stemHalfWidth;
            kB.moveTo([lB, JB + 1, YB], [BB, 1, BB])
          } else if (dB === bu) {
            const BB = gB.capSpread * Math.min(1, (pB - dB.fromMs) / 3e3),
              TB = Math.sqrt(Math.random()),
              VB = 2 * Math.random() * Math.PI,
              yB = Math.cos(VB) * TB,
              oB = Math.sin(VB) * TB,
              LB = lB + yB * BB,
              OB = YB + oB * BB,
              DB = gB.capThick,
              uB = JB + gB.capHeight + DB * (1 - TB * TB) * 2;
            kB.setDirections([.7 * yB, .05, .7 * oB], [yB, .2, oB]), kB.moveTo([LB, uB, OB], [DB, DB, DB])
          } else {
            this.ringAngle += 2.39996;
            const BB = Math.cos(this.ringAngle),
              TB = Math.sin(this.ringAngle);
            kB.setDirections([BB, .05, TB], [BB, .1, TB]), kB.moveTo([lB + 2 * BB, JB + .5, YB + 2 * TB], [0, .5, 0])
          }
          kB.emit(yB)
        }
      }
      createStream(BB, TB, dB) {
        const {
          r: VB
        } = dB, yB = Math.max(TB.life[0], VB / 25), pB = TB === nu ? [.9 * yB, yB] : TB.life, lB = Cu(VB), JB = TB === nu ? 1 : lB.puffScale, YB = {
          texture: iu,
          Kk: TB.count + 4,
          minLifeTime: pB[0] / qu,
          maxLifeTime: pB[1] / qu,
          minSize: TB.size[0] * JB,
          maxSize: TB.size[1] * JB,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, TB.gravity * qu * qu, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: TB.from[0],
            maxColor: TB.from[1]
          }, {
            timeFraction: .6,
            minColor: TH(TB.from[0], TB.to[0]),
            maxColor: TH(TB.from[1], TB.to[1])
          }, {
            timeFraction: 1,
            minColor: TB.to[0],
            maxColor: TB.to[1]
          }],
          blendMode: TB.blend
        };
        if (TB === Au) {
          const BB = lB.capHeight / ((pB[0] + pB[1]) / 2);
          YB.minEmitPower = .9 * BB * qu, YB.maxEmitPower = 1.05 * BB * qu, YB.dir1 = [-.1, 1, -.1], YB.dir2 = [.1, 1, .1]
        } else TB === bu ? (YB.minEmitPower = 1.2, YB.maxEmitPower = 2, YB.dir1 = [-1, .05, -1], YB.dir2 = [1, .2, 1]) : (YB.minEmitPower = 39.583333333333336, YB.maxEmitPower = 41.66666666666667, YB.dir1 = [1, 0, 0], YB.dir2 = [1, 0, 0]);
        return BB.createParticles(YB, {
          pos: dB.at
        })
      }
      disposeCloud(BB) {
        for (const dB of this.streams) {
          var TB;
          null === (TB = dB.particles) || void 0 === TB || TB.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(BB)
      }
    }

    function TH(BB, TB) {
      return [(BB[0] + TB[0]) / 2, (BB[1] + TB[1]) / 2, (BB[2] + TB[2]) / 2, .75 * BB[3]]
    }

    function dH(BB, TB, dB, VB, yB) {
      try {
        BB.playSound(TB, dB, VB, yB)
      } catch (pB) {
        console.error(pB)
      }
    }
    const VH = {
        Kk: 720,
        perS: 100
      },
      yH = {
        Kk: 320,
        perS: 44
      };
    class pH {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(BB, TB) {
        this.zone = {
          centre: [...BB.centre],
          r: BB.r,
          band: BB.band ? [BB.band[0], BB.band[1]] : void 0
        }, this.endsAt = TB
      }
      stop() {
        this.zone = null
      }
      Qv(BB, TB) {
        const {
          baf2FalloutMs: dB,
          baf2FalloutAt: VB,
          baf2FalloutR: yB,
          baf2FalloutY: pB
        } = BB;
        dB > 0 && VB && void 0 !== yB ? this.start({
          centre: VB,
          r: yB,
          band: pB
        }, TB + dB) : this.stop()
      }
      perS(BB, TB, dB) {
        const VB = this.zone;
        if (!VB) return 0;
        const yB = this.endsAt - BB;
        return yB <= 0 ? (this.zone = null, 0) : VB.band && (TB[1] < VB.band[0] || TB[1] > VB.band[1]) || Math.hypot(TB[0] - VB.centre[0], TB[2] - VB.centre[2]) > VB.r ? 0 : dB.perS * Math.min(1, yB / 5e3)
      }
    }
    const lH = [5, 7],
      JH = [24, 8, 24],
      YH = .5,
      gH = 1 / .6,
      oH = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class kH {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, zJ.isMobile)();
        this.state = new pH, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(BB) {
          return BB ? yH : VH
        }(BB)
      }
      startFallout(BB, TB) {
        this.state.start(BB, TB)
      }
      stopFallout() {
        this.state.stop()
      }
      Qv(BB) {
        this.state.Qv(BB, performance.now())
      }
      onAfterRender(BB, TB) {
        var dB;
        const VB = performance.now(),
          yB = 0 === this.lastMs ? 0 : Math.min(VB - this.lastMs, 250) / 1e3;
        this.lastMs = VB;
        const pB = this.state.perS(VB, TB, this.tier);
        if (pB <= 0 || !BB.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + pB * yB, pB / 4);
        const lB = Math.floor(this.budget);
        if (lB < 1) return;
        this.budget -= lB;
        const JB = this.at;
        JB[0] = TB[0], JB[1] = TB[1] + 12, JB[2] = TB[2];
        const YB = null !== (dB = this.systems) && void 0 !== dB ? dB : this.create(BB, JB),
          gB = this.amounts;
        gB[0] = 0, gB[1] = 0;
        for (let oB = 0; oB < lB; oB++) gB[Math.random() < .3 ? 1 : 0]++;
        for (let oB = 0; oB < YB.length; oB++) gB[oB] > 0 && (YB[oB].moveTo(JB, JH), YB[oB].emit(gB[oB]))
      }
      dispose() {
        for (const TB of null !== (BB = this.systems) && void 0 !== BB ? BB : []) {
          var BB;
          TB.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(BB, TB) {
        return this.systems = oH.map((dB => {
          let {
            rgba: [VB, yB, pB, lB],
            share: JB
          } = dB;
          const YB = {
            texture: "square_particle",
            Kk: Math.ceil(this.tier.Kk * JB),
            minLifeTime: lH[0] / gH,
            maxLifeTime: lH[1] / gH,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [YH, -1, YH],
            colorGradients: [{
              timeFraction: 0,
              minColor: [VB, yB, pB, 0]
            }, {
              timeFraction: .15,
              minColor: [VB, yB, pB, lB]
            }, {
              timeFraction: .8,
              minColor: [VB, yB, pB, lB]
            }, {
              timeFraction: 1,
              minColor: [VB, yB, pB, 0]
            }],
            blendMode: UJ.e.Standard
          };
          return BB.createParticles(YB, {
            pos: TB,
            half: JH
          })
        })), this.systems
      }
    }
    const LH = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function OH(BB) {
      const TB = /\|rot(\d)/.exec(BB);
      return LH[TB ? Number(TB[1]) : 1]
    }
    var DH = dB(568),
      uH = dB(37420);
    const HH = new Set(DH.j);

    function EH(BB) {
      if (-2 !== BB.count) return null;
      const TB = hB(BB.item);
      return null !== TB && HH.has(TB) ? TB : null
    }

    function vH(BB) {
      const {
        width: TB,
        height: dB
      } = (0, uH.d)(BB).hitBoxDimensions;
      return .55 / Math.max(TB, dB)
    }

    function mH(BB, TB, dB) {
      if (!dB) return !1;
      const VB = BB[0] + .5 - TB[0],
        yB = BB[1] + .5 - TB[1],
        pB = BB[2] + .5 - TB[2];
      return VB * VB + yB * yB + pB * pB <= 576
    }

    function iH(BB, TB) {
      return Math.atan2(BB[0], BB[2]) + Math.PI + TB
    }

    function NH(BB, TB) {
      const dB = 2 * Math.PI;
      return (BB + dB * TB / 1e4) % dB
    }
    class tH {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = BB, this.now = TB, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = BB.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(BB, TB) {
        if (0 === this.farms.size) return;
        const dB = this.now(),
          VB = Number.isNaN(this.frameMs) ? 0 : Math.min(dB - this.frameMs, 100);
        this.frameMs = dB, dB - this.checkedMs >= 1e3 && (this.checkedMs = dB, this.check(BB, TB));
        for (const yB of this.farms.values()) yB.shown && yB.running && null !== yB.model && VB > 0 && (yB.spin = NH(yB.spin, VB), yB.model.setPose(yB.feet, iH(yB.front, yB.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const BB of this.farms.values()) this.drop(BB);
        this.farms.clear()
      }
      sync() {
        const BB = new Set;
        for (const TB of this.labels.list()) {
          const dB = EH(TB);
          if (null === dB) continue;
          BB.add(TB.key);
          const VB = this.farms.get(TB.key);
          if ((null === VB || void 0 === VB ? void 0 : VB.mob) === dB) continue;
          VB && this.drop(VB);
          const [yB, pB, lB] = TB.pos;
          this.farms.set(TB.key, {
            pos: TB.pos,
            feet: [yB + .5, pB + 1, lB + .5],
            mob: dB,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [TB, dB] of this.farms) BB.has(TB) || (this.drop(dB), this.farms.delete(TB));
        this.checkedMs = -1 / 0
      }
      check(BB, TB) {
        for (const dB of this.farms.values()) {
          const [VB, yB, pB] = dB.pos, lB = MD(BB, dB.pos);
          null !== lB && sd(lB) === SB && mH(dB.pos, TB, "Air" === MD(BB, [VB, yB + 1, pB])) ? (dB.running = lB.endsWith("|Running"), dB.front = OH(lB), null === dB.model && (dB.model = BB.createMobModel(dB.mob, vH(dB.mob)), null === dB.model) || (dB.model.setPose(dB.feet, iH(dB.front, dB.spin)), dB.shown || (dB.model.setVisible(!0), dB.shown = !0))) : (dB.shown && null !== dB.model && dB.model.setVisible(!1), dB.shown = !1)
        }
      }
      drop(BB) {
        var TB;
        null === (TB = BB.model) || void 0 === TB || TB.dispose(), BB.model = null, BB.shown = !1
      }
    }
    class fH {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(BB) {
        var TB;
        this.island = BB.baf2ColIsland, this.islandSite = (TB = BB.baf2ColSite) && 8 === TB.length ? {
          spawnXZ: [TB[0], TB[1]],
          coreXZ: [TB[2], TB[3]],
          minXZ: [TB[4], TB[5]],
          maxXZ: [TB[6], TB[7]]
        } : null, this.views = BB.baf2ColList.map((BB => ({
          entry: By(BB)
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
        var TB;
        return null === (TB = this.views.find((TB => {
          let {
            entry: dB
          } = TB;
          return dB.focus[0] === BB[0] && dB.focus[1] === BB[1] + 1 && dB.focus[2] === BB[2]
        }))) || void 0 === TB ? void 0 : TB.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(BB, TB) {
        return IY(this.entries(), BB, TB)
      }
      lookSource() {
        return {
          handles: BB => lV(BB) >= 0 || JV(BB),
          line: (BB, TB) => this.lookLine(BB, TB),
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
    const sH = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((BB => BB / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((BB => [BB, BB + 1, BB + 2, BB, BB + 2, BB + 3]))
    };

    function MH(BB, TB, dB, VB, yB, pB, lB) {
      let JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const YB = Math.cos(JB),
        gB = Math.sin(JB),
        oB = BB.positions.length / 3,
        {
          positions: kB,
          indices: LB
        } = sH;
      for (let OB = 0; OB < kB.length; OB += 3) {
        const JB = kB[OB] * yB,
          oB = kB[OB + 2] * lB;
        BB.positions.push(TB + JB * YB + oB * gB, dB + kB[OB + 1] * pB, VB - JB * gB + oB * YB)
      }
      for (const OB of LB) BB.indices.push(oB + OB)
    }

    function zH(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return TB < 1 ? {
        rgb: BB,
        alpha: TB
      } : {
        rgb: BB,
        alpha: 1,
        opaque: !0
      }
    }
    class wH {
      constructor(BB, TB) {
        this.style = BB, this.perSource = TB, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(BB) {
        this.sources = BB, 0 === BB.length && (this.budget = 0)
      }
      dL(BB, TB, dB) {
        const VB = this.sources.length;
        if (0 !== VB) {
          var yB, pB;
          this.budget = Math.min(this.budget + (yB = VB, pB = this.perSource, Math.min(yB * pB, xY) * TB), 2);
          for (let TB = 0; TB < VB && this.budget >= 1; TB++) {
            const TB = this.sources[this.cursor % VB];
            this.cursor = (this.cursor + 1) % VB;
            if (!(Math.max(Math.abs(TB.x - dB[0]), Math.abs(TB.y - dB[1]), Math.abs(TB.z - dB[2])) > 32)) return this.puff(BB, TB), void this.budget--
          }
        }
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.dispose(), this.particles = null, this.sources = []
      }
      puff(BB, TB) {
        let {
          x: dB,
          y: VB,
          z: yB,
          h: pB,
          faces: lB
        } = TB;
        const JB = function(BB, TB, dB, VB, yB) {
            const [pB, lB, JB] = yB[Math.floor(Math.random() * yB.length)], YB = .04, gB = (BB, TB, dB) => BB > 0 ? TB + dB + YB : BB < 0 ? TB - YB : TB + .1, oB = (BB, TB, dB) => BB > 0 ? TB + dB + YB : BB < 0 ? TB - YB : TB + dB - .1, kB = [gB(pB, BB, 1), gB(lB, TB, VB), gB(JB, dB, 1)], LB = [oB(pB, BB, 1), oB(lB, TB, VB), oB(JB, dB, 1)];
            return {
              pos: [(kB[0] + LB[0]) / 2, (kB[1] + LB[1]) / 2, (kB[2] + LB[2]) / 2],
              half: [(LB[0] - kB[0]) / 2, (LB[1] - kB[1]) / 2, (LB[2] - kB[2]) / 2],
              out: [pB, lB, JB]
            }
          }(dB, VB, yB, pB, lB),
          {
            style: YB
          } = this,
          gB = this.particles ??= BB.createParticles(tu(YB, Math.ceil(YB.count * xY * YB.life[1]) + 4), JB);
        gB.moveTo(JB.pos, JB.half);
        const [oB, kB, LB] = JB.out, OB = YB.spread;
        gB.setDirections([oB - OB, .6 + kB, LB - OB], [oB + OB, 1 + kB, LB + OB]), gB.emit(YB.count)
      }
    }
    const UH = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class FH {
      constructor() {
        this.green = new wH(AY.green, GY), this.pink = new wH(AY.pink, qY), this.colliders = [], this.lastMs = 0
      }
      setSources(BB) {
        this.colliders = BB;
        const TB = [],
          dB = [];
        for (const VB of BB) {
          const [BB, yB, pB] = VB.focus;
          TB.push({
            x: BB,
            y: yB - 1,
            z: pB,
            h: 2,
            faces: UH
          });
          for (let TB = 0; TB < 4; TB++) {
            if (!VB.live[TB]) continue;
            const [BB, yB, pB] = oV(VB.focus, TB, BV.LASER_D), [lB, , JB] = gV[TB], YB = UH.filter((BB => BB[0] !== lB || BB[2] !== JB || 0 !== BB[1]));
            dB.push({
              x: BB,
              y: yB,
              z: pB,
              h: 1,
              faces: YB
            })
          }
        }
        this.green.setSources(TB), this.pink.setSources(dB)
      }
      onAfterRender(BB) {
        const TB = performance.now(),
          dB = 0 === this.lastMs ? 0 : Math.min(TB - this.lastMs, 250) / 1e3;
        if (this.lastMs = TB, 0 === this.colliders.length || !BB.particlesEnabled()) return;
        const VB = BB.getCameraPosition();
        this.green.dL(BB, dB, VB), this.pink.dL(BB, dB, VB)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const KH = 1.04,
      rH = zH([1, 120 / 255, 220 / 255]),
      IH = zH([1, .25, .25], .35);
    class cH {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new FH
      }
      onAfterRender(BB) {
        this.store.version() !== this.builtVersion && this.rebuild(BB);
        const TB = performance.now();
        for (const dB of this.beams) {
          const VB = 1 + .35 * Math.sin(TB / 700 * Math.PI * 2 + dB.phase);
          BB.setGameMesh(dB.mesh, {
            scale: [dB.alongX ? 1 : VB, VB, dB.alongX ? VB : 1]
          })
        }
        this.glow.onAfterRender(BB)
      }
      dispose(BB) {
        this.clear(BB), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(BB) {
        this.clear(BB), this.builtVersion = this.store.version();
        const TB = [];
        for (const {
            entry: dB
          }
          of this.store.colliders()) dB.on && dB.live.some(Boolean) && (this.addBeams(BB, dB), TB.push(dB)), dB.blockers.length > 0 && this.addMarkers(BB, dB);
        this.glow.setSources(TB)
      }
      addBeams(BB, TB) {
        const [dB, VB, yB] = TB.focus, pB = CY - .25, lB = (.25 + CY) / 2;
        for (let JB = 0; JB < 4; JB++) {
          if (!TB.live[JB]) continue;
          const [YB, , gB] = gV[JB], oB = 0 !== YB, kB = {
            positions: [],
            indices: []
          };
          MH(kB, 0, 0, 0, oB ? pB : .2, .2, oB ? .2 : pB);
          const LB = [dB + .5 + YB * lB, VB + .5, yB + .5 + gB * lB],
            OB = BB.createGameMesh(kB, rH, LB);
          this.meshes.push(OB), this.beams.push({
            mesh: OB,
            alongX: oB,
            phase: JB * Math.PI / 2
          })
        }
      }
      addMarkers(BB, TB) {
        const dB = TB.blockers[0],
          VB = {
            positions: [],
            indices: []
          };
        for (const [yB, pB, lB] of TB.blockers) MH(VB, yB - dB[0] + .5, pB - dB[1] + .5, lB - dB[2] + .5, KH, KH, KH);
        this.meshes.push(BB.createGameMesh(VB, IH, dB))
      }
      clear(BB) {
        for (const TB of this.meshes) BB.disposeGameMesh(TB);
        this.meshes = [], this.beams = []
      }
    }
    const SH = [.56, .83, 1],
      PH = [1, .73, .08],
      QH = [1, .25, .25],
      RH = [.85, .85, .85],
      aH = [.3, .45, .6];

    function ZH(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const lB = yB / 2,
        JB = yB + pB;
      for (const YB of [-lB, lB])
        for (const yB of [-lB, lB]) MH(BB, TB, dB + YB, VB + yB, JB, pB, pB), MH(BB, TB + YB, dB, VB + yB, pB, JB, pB), MH(BB, TB + YB, dB + yB, VB, pB, pB, JB)
    }

    function XH(BB) {
      return TB => BB.isBlockInLoadedChunk(TB[0], TB[1], TB[2]) && 0 === BB.getBlockId(TB[0], TB[1], TB[2])
    }

    function WH(BB) {
      return BB.map((BB => {
        let {
          free: TB,
          blocked: dB,
          gaps: VB,
          supports: yB
        } = BB;
        return `${TB.join(";")}|${dB.join(";")}|${VB.join(";")}|${yB.join(";")}`
      })).join("/")
    }

    function hH(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const pB = TB[0],
        lB = {
          positions: [],
          indices: []
        };
      for (const [JB, YB, gB] of TB) ZH(lB, JB - pB[0] + .5, YB - pB[1] + .5, gB - pB[2] + .5, VB, yB);
      return BB.createGameMesh(lB, dB, pB)
    }
    class CH {
      constructor(BB) {
        this.store = BB, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(BB, TB, dB) {
        var VB;
        const yB = null === (VB = BB.gdB(TB)) || void 0 === VB ? void 0 : VB.name;
        if (yB !== dV && yB !== TV) return void("" !== this.shownKey && this.show(BB, "", []));
        const pB = performance.now();
        if (pB - this.lastCheckMs >= 200 && (this.lastCheckMs = pB, yB === dV ? this.check(BB, dB) : this.preview(BB, dB)), this.pulses.length > 0) {
          const TB = 1 + .12 * Math.sin(pB / 1e3 * 1.25 * Math.PI * 2),
            dB = [TB, TB, TB];
          for (const VB of this.pulses) BB.setGameMesh(VB, {
            scale: dB
          })
        }
      }
      dispose(BB) {
        this.clear(BB), this.shownKey = ""
      }
      check(BB, TB) {
        const dB = XH(BB),
          VB = [];
        for (const {
            entry: pB
          }
          of this.store.colliders()) {
          pB.focus.every(((BB, dB) => Math.abs(BB + .5 - TB[dB]) <= BV.GHOST_REACH)) && VB.push(hY(pB, dB))
        }
        const yB = WH(VB);
        yB !== this.shownKey && this.show(BB, yB, VB)
      }
      preview(BB, TB) {
        const dB = BB.getTargetedBlock(),
          VB = dB ? [dB.ck[0], dB.ck[1], dB.ck[2]] : null,
          yB = null !== VB && VB.every(((BB, dB) => Math.abs(BB + .5 - TB[dB]) <= 8)),
          pB = this.store.site(),
          lB = yB && pB ? function(BB, TB, dB) {
            const VB = YV(BB);
            if (!VB.every(TB)) return null;
            const yB = OV(BB, dB);
            return {
              column: VB,
              spots: hY({
                focus: VB[1],
                lasers: [!1, !1, !1, !1],
                open: yB,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, TB),
              fits: yB.filter(Boolean).length >= BV.MIN_SPOTS
            }
          }(VB, XH(BB), pB) : null,
          JB = lB ? [lB.spots] : [],
          YB = lB ? `preview ${VB.join(",")}|${lB.fits}|${WH(JB)}` : "";
        var gB, oB;
        YB !== this.shownKey && this.show(BB, YB, JB, null !== (gB = null === lB || void 0 === lB ? void 0 : lB.column) && void 0 !== gB ? gB : [], null === (oB = null === lB || void 0 === lB ? void 0 : lB.fits) || void 0 === oB || oB)
      }
      show(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(BB), this.shownKey = TB, VB.length > 0 && this.meshes.push(hH(BB, VB, zH(yB ? RH : QH)));
        for (const {
            free: pB,
            blocked: lB,
            gaps: JB,
            supports: YB
          }
          of dB) {
          for (const [TB, dB, VB] of pB) {
            const yB = {
              positions: [],
              indices: []
            };
            ZH(yB, 0, 0, 0);
            const pB = BB.createGameMesh(yB, zH(SH), [TB + .5, dB + .5, VB + .5]);
            this.meshes.push(pB), this.pulses.push(pB)
          }
          lB.length > 0 && this.meshes.push(hH(BB, lB, zH(PH))), JB.length > 0 && this.meshes.push(hH(BB, JB, zH(QH), 1.06, .07)), YB.length > 0 && this.meshes.push(hH(BB, YB, zH(aH)))
        }
      }
      clear(BB) {
        for (const TB of this.meshes) BB.disposeGameMesh(TB);
        this.meshes = [], this.pulses = []
      }
    }
    class GH {
      constructor() {
        this.stored = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(BB) {
        if (!BB.baf2TermOpen) return !1;
        BB.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [TB, dB] of BB.baf2TermItems) dB > 0 ? this.stored.set(TB, dB) : this.stored.delete(TB);
        if (this.pending = this.pending.filter((TB => TB.seq > BB.baf2TermAcked)), this.silos = BB.baf2TermSilos, this.readOnly = BB.baf2TermReadOnly, this.pocket = !0 === BB.baf2TermPocket, BB.baf2TermReset) this.resort();
        else
          for (const TB of this.stored.keys()) this.order.includes(TB) || this.order.push(TB);
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((BB, TB) => this.amount(TB) - this.amount(BB) || BB.localeCompare(TB))), this.changed()
      }
      take(BB, TB) {
        const dB = function(BB, TB) {
          const dB = "number" === typeof BB ? BB : "one" === BB ? 1 : "stack" === BB ? 99 : TB;
          return Math.min(TB, dB)
        }(BB, this.amount(TB));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: TB,
          amount: dB
        }), this.recents = [TB, ...this.recents.filter((BB => BB !== TB))].slice(0, 6), this.changed(), TT(this.seq, BB, TB)
      }
      amount(BB) {
        var TB;
        let dB = null !== (TB = this.stored.get(BB)) && void 0 !== TB ? TB : 0;
        for (const VB of this.pending) VB.item === BB && (dB -= VB.amount);
        return Math.max(0, dB)
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
    var qH = dB(37363);
    const xH = {
      isBlock: BB => void 0 !== KB.h[BB],
      harvestType: BB => {
        var TB;
        return null === (TB = KB.h[BB]) || void 0 === TB ? void 0 : TB.harvestType
      },
      harvestLevel: BB => {
        var TB;
        return null === (TB = KB.h[BB]) || void 0 === TB ? void 0 : TB.harvestLevel
      },
      dropsNothing: BB => {
        var TB;
        return null === (null === (TB = KB.h[BB]) || void 0 === TB ? void 0 : TB.drops)
      },
      displayName: BB => {
        var TB;
        return null === (TB = ql.k[BB]) || void 0 === TB ? void 0 : TB.displayName
      },
      description: BB => {
        var TB;
        return null === (TB = ql.k[BB]) || void 0 === TB ? void 0 : TB.description
      },
      harvests: BB => {
        var TB;
        return null === (TB = ql.k[BB]) || void 0 === TB ? void 0 : TB.harvests
      },
      level: BB => {
        var TB;
        return null === (TB = ql.k[BB]) || void 0 === TB ? void 0 : TB.level
      }
    };

    function jH(BB, TB, dB) {
      return function(BB, TB, dB, VB) {
        var yB, pB;
        const lB = TB.split("|")[0],
          JB = BB.isBlock(TB) ? TB : BB.isBlock(lB) ? lB : null;
        if (null === JB || "rock" !== BB.harvestType(JB) || BB.dropsNothing(JB) && !rV.has(lB)) return null;
        const YB = dB && "rock" === BB.harvests(dB) ? null !== (yB = BB.level(dB)) && void 0 !== yB ? yB : 0 : null,
          gB = null !== (pB = null !== VB && void 0 !== VB ? VB : BB.harvestLevel(JB)) && void 0 !== pB ? pB : 0;
        return (null !== YB ? gB <= YB : 0 === BB.harvestLevel(JB)) ? null : iV(BB, gB)
      }(xH, BB, TB, dB)
    }

    function AH(BB, TB) {
      return function(BB, TB, dB) {
        if (TB === mV[0]) return [(0, cB.Wd)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, cB.L.whiteUiText)];
        const VB = dB.split("|")[0],
          yB = BB.isBlock(VB) ? BB.displayName(VB) : void 0,
          pB = "string" === typeof yB ? yB : yB && "translationKey" in yB ? `$t(${yB.translationKey})` : VB;
        return [(0, cB.Wd)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: pB
          }
        }, cB.L.whiteUiText), (0, cB.Wd)({
          translationKey: `item:${(0,cB.qe)(TB)}`
        }, cB.L.yellowUiText)]
      }(xH, BB, TB)
    }
    const bH = "buildAFactory2Game:";
    const nH = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function eH(BB) {
      return BB.endsWith(" Ore")
    }
    const BE = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      TE = [],
      dE = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: BE,
        plan: null,
        atomic: TE
      },
      VE = "buildAFactory2Game:",
      yE = new Set(["Splitter", "Sorting Gate"]),
      pE = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class lE {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = BB, this.planAt = TB, this.tierOf = dB, this.rY = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.Dg = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = dE, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(BB, TB, dB) {
        var VB, yB, pB;
        let lB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const JB = null !== (VB = null === (yB = BB.gdB(TB)) || void 0 === yB ? void 0 : yB.name) && void 0 !== VB ? VB : null,
          YB = BB.isPlayerCrouching(TB),
          gB = 0 === dB ? null : this.resolve(BB, dB),
          oB = null !== gB && null !== lB && yE.has(gB.rootName) && function(BB, TB) {
            return pE.some((dB => {
              let [VB, yB] = dB;
              const pB = BB.getBlockId(TB[0] + VB, TB[1], TB[2] + yB);
              return 0 !== pB && "Express Belt" === BB.getMetaInfo(pB).rootName
            }))
          }(BB, lB),
          kB = this.updatePlan(0 === dB ? null : lB),
          LB = this.tierOf(),
          OB = null === lB ? null : (0, qH.f)(dB),
          DB = null !== OB && null !== lB && (0, qH.g)(function(BB) {
            return (TB, dB, VB) => BB.getBlockId(TB, dB, VB)
          }(BB), lB[0], lB[1], lB[2], OB),
          uB = this.readAfloat(BB, dB, lB);
        if (dB === this.rY && DB === this.missesMaker && uB === this.afloat && JB === this.Dg && YB === this.crouching && oB === this.express && LB === this.tier && !kB && (!this.targetsLive || !this.liveMoved(lB))) return;
        this.rY = dB, this.missesMaker = DB, this.afloat = uB, this.Dg = JB, this.crouching = YB, this.express = oB;
        const HB = oB && gB ? function(BB) {
          if (null === BB.info) return null;
          return BB.express ??= {
            ...BB.info,
            detail: `${VE}lookKeepsUpExpress`,
            detailItem: null
          }, BB.express
        }(gB) : null !== gB && DB && null !== OB ? this.besideMaker(gB, dB, OB) : null !== gB && uB ? this.hanging(gB) : null !== (pB = null === gB || void 0 === gB ? void 0 : gB.info) && void 0 !== pB ? pB : null;
        this.tier = LB;
        const EB = gB && HB ? function(BB, TB) {
          var dB, VB;
          const yB = KB.h[BB];
          if (!BB.endsWith(" Ore") || "rock" !== (null === yB || void 0 === yB ? void 0 : yB.harvestType) || 0 === yB.harvestLevel) return null;
          const pB = null !== (dB = yB.harvestLevel) && void 0 !== dB ? dB : 0,
            lB = TB ? ql.k[TB] : void 0;
          if ("rock" === (null === lB || void 0 === lB ? void 0 : lB.harvests) && (null !== (VB = lB.level) && void 0 !== VB ? VB : 0) >= pB) return null;
          const JB = (YB = pB, iV(xH, YB));
          var YB;
          if (null === JB) return null;
          const gB = Ay(JB),
            oB = /^[AEIOU]/.test(JB) ? "An" : "";
          if ("rock" === (null === lB || void 0 === lB ? void 0 : lB.harvests) && TB) return {
            key: `${VE}lookToolTooWeak${oB}`,
            Dg: Ay(TB),
            needed: gB
          };
          return {
            key: JB === mV[0] ? `${VE}lookNeedAnyPickaxe` : `${VE}lookNeedPickaxe${oB}`,
            Dg: null,
            needed: gB
          }
        }(gB.rootName, JB) : null;
        this.targetsLive = !0 === (null === gB || void 0 === gB ? void 0 : gB.live) && null !== lB;
        let vB = null;
        this.targetsLive && gB && lB && this.live && (this.livePos[0] = lB[0], this.livePos[1] = lB[1], this.livePos[2] = lB[2], this.liveVersion = this.live.version(), vB = this.live.line(gB.rootName, lB));
        const mB = null === HB ? BE : function(BB, TB, dB) {
            const VB = function(BB, TB, dB) {
              const VB = zd(BB);
              if (null === VB) return null;
              const yB = `${bH}lookPortMode_${VB}`,
                pB = SV(TB);
              if (pB && dB) return {
                mode: null,
                detail: yB,
                next: `${bH}lookWrenchPickUp`,
                nextState: null
              };
              const lB = wd(BB),
                JB = null === lB ? null : zd(lB);
              return null === JB ? {
                mode: null,
                detail: yB,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: yB,
                next: pB ? `${bH}lookWrenchNext` : `${bH}lookPortWrench`,
                nextState: `${bH}lookPortState_${JB}`
              }
            }(BB, TB, dB);
            if (null !== VB) return VB;
            const yB = AV(BB, TB, dB);
            return null === yB.mode && null === yB.next ? BE : yB
          }(BB.blockIdToBlockName(dB), JB, YB),
          iB = this.plan,
          NB = gB && HB ? this.rowsOf(gB.rootName, LB) : TE,
          tB = this.snapshot;
        if (!(null === HB ? !tB.visible : tB.visible && HB === tB.info && (fB = EB, sB = tB.tool, fB === sB || null !== fB && null !== sB && fB.key === sB.key && fB.Dg === sB.Dg && fB.needed === sB.needed) && function(BB, TB) {
            return BB === TB || null !== BB && null !== TB && BB.key === TB.key && JSON.stringify([BB.params, BB.keys]) === JSON.stringify([TB.params, TB.keys])
          }(vB, tB.live) && function(BB, TB) {
            return BB.mode === TB.mode && BB.detail === TB.detail && BB.next === TB.next && BB.nextState === TB.nextState
          }(mB, tB.wrench) && QD(iB, tB.plan) && NB === tB.atomic)) {
          var fB, sB;
          this.snapshot = null === HB ? {
            ...tB,
            visible: !1
          } : {
            info: HB,
            visible: !0,
            tool: EB,
            live: vB,
            wrench: mB,
            plan: iB,
            atomic: NB
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
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = dE, this.rY = 0, this.Dg = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(BB, TB, dB) {
        if (null === dB || 0 === TB || !JB() || !eH(this.resolve(BB, TB).rootName)) return !1;
        const VB = `${dB[0]},${dB[1]},${dB[2]},${TB}`,
          yB = performance.now();
        return VB === this.afloatKey && yB - this.afloatAt < JE ? this.afloat : (this.afloatKey = VB, this.afloatAt = yB, function(BB, TB) {
          for (const [dB, VB, yB] of nH) {
            const pB = TB(BB[0] + dB, BB[1] + VB, BB[2] + yB);
            if (void 0 === pB || null !== pB && !eH(pB)) return !1
          }
          return !0
        }(dB, ((TB, dB, VB) => function(BB, TB, dB, VB) {
          if (!BB.isBlockInLoadedChunk(TB, dB, VB)) return;
          const yB = BB.getBlockId(TB, dB, VB);
          return 0 === yB ? null : BB.getMetaInfo(yB).rootName
        }(BB, TB, dB, VB))))
      }
      liveMoved(BB) {
        var TB;
        const {
          livePos: dB
        } = this;
        return null === BB || BB[0] !== dB[0] || BB[1] !== dB[1] || BB[2] !== dB[2] || (null === (TB = this.live) || void 0 === TB ? void 0 : TB.version()) !== this.liveVersion
      }
      updatePlan(BB) {
        const TB = null === BB ? "" : BB.join(","),
          dB = performance.now();
        if (TB === this.planPos && dB - this.planMs < 250) return !1;
        this.planPos = TB, this.planMs = dB;
        const VB = null === BB ? null : this.planAt([BB[0], BB[1], BB[2]]),
          yB = !QD(VB, this.plan);
        return this.plan = VB, yB
      }
      besideMaker(BB, TB, dB) {
        let {
          info: VB
        } = BB;
        if (null === VB) return null;
        let yB = this.besideMakerById.get(TB);
        if (void 0 === yB) {
          const BB = "cryo" === dB ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          yB = {
            ...VB,
            detail: `${VE}${BB}`,
            detailItem: null
          }, this.besideMakerById.set(TB, yB)
        }
        return yB
      }
      hanging(BB) {
        let {
          info: TB,
          rootName: dB
        } = BB;
        if (null === TB) return null;
        let VB = this.afloatByRoot.get(dB);
        return void 0 === VB && (VB = {
          ...TB,
          detail: `${VE}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(dB, VB)), VB
      }
      rowsOf(BB, TB) {
        if (null === TB) return TE;
        const dB = `${BB}|${TB}`;
        let VB = this.rowsByKey.get(dB);
        if (void 0 === VB) {
          const yB = function(BB, TB) {
            var dB;
            if (!(BB in zT)) return [];
            const VB = null !== (dB = wT[BB]) && void 0 !== dB ? dB : [],
              yB = new Map;
            for (const lB of Pp(BB, TB))
              if ((VB.includes(lB) || Sp(lB.output) && Ip(lB.output) > AB(BB)) && Ip(lB.output) <= TB) {
                var pB;
                const BB = null !== (pB = yB.get(lB.output)) && void 0 !== pB ? pB : [];
                BB.push(lB.input), yB.set(lB.output, BB)
              } return Rp([...yB], (BB => {
              let [TB] = BB;
              return -Ip(TB)
            })).map((BB => {
              let [TB, dB] = BB;
              return {
                output: TB,
                inputs: dB
              }
            }))
          }(BB, TB);
          VB = yB.length > 0 ? yB : TE, this.rowsByKey.set(dB, VB)
        }
        return VB
      }
      resolve(BB, TB) {
        const {
          rootId: dB,
          rootName: VB
        } = BB.getMetaInfo(TB), yB = (0, Jd.j)(VB) ? TB : dB;
        let pB = this.byRootId.get(yB);
        const lB = JB();
        if (void 0 === pB || pB.nuclear !== lB) {
          var YB;
          const dB = function(BB) {
            return FV(xH, BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BB)
          }(VB, BB.blockIdToBlockName(TB));
          pB = {
            info: dB,
            rootName: VB,
            live: null !== dB && !0 === (null === (YB = this.live) || void 0 === YB ? void 0 : YB.handles(VB)),
            nuclear: lB
          }, this.byRootId.set(yB, pB)
        }
        return pB
      }
    }
    const JE = 500;
    const YE = (0, VB.memo)((function(BB) {
      var TB, dB;
      let {
        store: yB
      } = BB;
      const {
        t: pB
      } = (0, iy.z)(), [lB, JB] = (0, VB.useState)((() => yB.get()));
      (0, VB.useEffect)((() => (JB(yB.get()), yB.subscribe((() => {
        JB(yB.get())
      })))), [yB]);
      const {
        openInGameMenuName: YB,
        openEverythingMenuName: gB,
        isTouchScreen: oB
      } = (0, Oy.m)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: kB,
        tool: LB,
        live: OB,
        wrench: DB,
        atomic: uB
      } = lB, HB = lB.visible && null === YB && null === gB;
      if (null === kB) return null;
      const EB = null !== DB.detail ? pB(DB.detail) : null !== (TB = lB.plan) && void 0 !== TB && TB.ctrl ? pB("buildAFactory2Game:lookPlanCtrl") : null !== kB.detail ? pB(kB.detail, null === kB.detailItem ? void 0 : {
        item: pB(kB.detailItem)
      }) : null;
      return (0, mp.jsxs)("div", {
        className: Hy()("Baf2LookTarget", {
          Visible: HB
        }),
        "aria-hidden": !HB,
        children: [(0, mp.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: pB(kB.name)
        }), null !== lB.plan && (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pB(lB.plan.key, {
            kind: pB(lB.plan.kindKey),
            w: String(lB.plan.w),
            h: String(lB.plan.h),
            d: String(lB.plan.d),
            count: String(lB.plan.count)
          })
        }), void 0 !== (null === (dB = lB.plan) || void 0 === dB ? void 0 : dB.why) && (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: pB(lB.plan.why)
        }), null !== DB.mode && (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pB(DB.mode)
        }), null !== LB ? (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: pB(LB.key, {
            item: pB(LB.needed),
            Dg: null === LB.Dg ? "" : pB(LB.Dg)
          })
        }) : null !== OB ? (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pB(OB.key, bY(pB, OB))
        }) : null !== EB && (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: EB
        }), uB.length > 0 && (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pB("buildAFactory2Game:lookAtomicRecipes", {
            list: uB.map((BB => {
              let {
                output: TB,
                inputs: dB
              } = BB;
              const VB = dB.length > 1 ? ` ${pB("buildAFactory2Game:recipeMore",{count:String(dB.length-1)})}` : "";
              return `${pB(Ay(dB[0]))}${VB} \u2192 ${pB(Ay(TB))}`
            })).join(", ")
          })
        }), null !== DB.next && (0, mp.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: pB(DB.next, {
            state: null === DB.nextState ? "" : pB(DB.nextState),
            use: pB(oB ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var gE = dB(37470);
    const oE = [],
      kE = [
        [0, -1, 0]
      ];

    function LE(BB) {
      const TB = [BB];
      for (let dB = 1; dB <= 4; dB++) dB > 1 && TB.push(`${BB}|meta|rot${dB}`), TB.push(`${BB}|meta|rot${dB}|Running`);
      return TB
    }

    function OE(BB, TB) {
      return [Math.floor(BB[0] / TB), Math.floor(BB[1] / TB), Math.floor(BB[2] / TB)]
    }

    function DE(BB, TB, dB) {
      return `${BB},${TB},${dB}`
    }

    function uE(BB) {
      const TB = BB.split("|")[0];
      if (!dd(TB)) return oE;
      const dB = zT[TB];
      if (xT(dB)) return kE;
      const VB = OH(BB);
      return jT(dB) ? [
        [-VB[0], -VB[1], -VB[2]]
      ] : Ey(dB) ? function(BB, TB) {
        const dB = BB[0] - 2 * TB[0],
          VB = BB[2] - 2 * TB[2],
          yB = [];
        for (let pB = -1; pB <= 1; pB++)
          for (let TB = -1; TB <= 1; TB++) yB.push([dB + pB, BB[1], VB + TB]);
        return yB
      }([0, 0, 0], VB) : oE
    }
    const HE = [.5, .5, .5],
      EE = [.2, .8, .3],
      vE = [.45, 1, .5];
    class mE {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(BB) {
        this.indexed = !0;
        for (const TB of iT)
          for (const dB of LE(TB)) {
            const TB = BB.blockNameToBlockId(dB, !0),
              VB = uE(dB);
            null !== TB && VB.length > 0 && (this.offsetsList.push(VB), this.offsetsIndexById[TB] = this.offsetsList.length)
          }
      }
      onAfterRender(BB, TB) {
        this.indexed || this.index(BB);
        const dB = performance.now();
        if (dB - this.lastCheckMs < 100) return;
        this.lastCheckMs = dB, this.checks++;
        const VB = pD.c.UD,
          [yB, pB, lB] = OE(TB, VB);
        let JB = !1;
        const YB = [];
        let gB = 0;
        for (let oB = yB - 2; oB <= yB + 2; oB++)
          for (let TB = pB - 1; TB <= pB + 1; TB++)
            for (let yB = lB - 2; yB <= lB + 2; yB++) {
              const pB = gB++,
                lB = DE(oB, TB, yB),
                kB = BB.getChunkVersion(oB, TB, yB);
              let LB = this.chunks.get(lB);
              null !== kB ? (LB || (LB = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(lB, LB)), LB.seenAt = this.checks, LB.checkedVersion !== kB && (LB.checkedVersion = kB, JB = !0), LB.scannedVersion !== kB && dB - LB.scannedAt >= 500 && YB.push({
                slot: pB,
                entry: LB,
                origin: [oB * VB, TB * VB, yB * VB]
              })) : (JB ||= void 0 !== LB, this.chunks.delete(lB))
            }
        this.scanDue(BB, YB) && (JB = !0);
        for (const [oB, kB] of this.chunks) kB.seenAt !== this.checks && (JB ||= kB.machines.length > 0, this.chunks.delete(oB));
        for (const oB of this.chunks.values())
          for (const [TB, dB, VB] of oB.cellChunks)(Math.abs(TB - yB) > 2 || Math.abs(dB - pB) > 1 || Math.abs(VB - lB) > 2) && this.watchCellChunk(BB, TB, dB, VB) && (JB = !0);
        for (const [oB, kB] of this.cellChunks) kB.seenAt !== this.checks && this.cellChunks.delete(oB);
        JB && this.refresh(BB)
      }
      dispose(BB) {
        this.clearMeshes(BB), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(BB, TB) {
        const dB = Math.max(TB.findIndex((BB => {
          let {
            slot: TB
          } = BB;
          return TB >= this.scanFrom
        })), 0);
        let VB = 96;
        for (let yB = 0; yB < TB.length; yB++) {
          const {
            slot: pB,
            entry: lB,
            origin: JB
          } = TB[(dB + yB) % TB.length];
          if (VB -= this.scan(BB, lB, JB), VB <= 0) {
            this.scanFrom = pB + 1;
            break
          }
        }
        return TB.length > 0
      }
      scan(BB, TB, dB) {
        let [VB, yB, pB] = dB;
        const lB = pD.c.UD,
          JB = this.hits;
        JB.length = 0;
        const YB = BB.scanBlocks(VB, yB, pB, VB + lB, yB + lB, pB + lB, this.offsetsIndexById, JB),
          gB = [];
        for (let oB = 0; oB < JB.length; oB += 4) gB.push({
          pos: [JB[oB], JB[oB + 1], JB[oB + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[JB[oB + 3]] - 1]
        });
        return TB.machines = gB, TB.cellChunks = function(BB, TB) {
          const dB = new Set,
            VB = [];
          for (const {
              pos: yB,
              offsets: pB
            }
            of BB)
            for (const [BB, lB, JB] of pB) {
              const pB = OE([yB[0] + BB, yB[1] + lB, yB[2] + JB], TB),
                YB = DE(...pB);
              dB.has(YB) || (dB.add(YB), VB.push(pB))
            }
          return VB
        }(gB, lB), TB.scannedVersion = TB.checkedVersion, TB.scannedAt = performance.now(), Math.max(YB, 1)
      }
      watchCellChunk(BB, TB, dB, VB) {
        const yB = DE(TB, dB, VB),
          pB = BB.getChunkVersion(TB, dB, VB),
          lB = this.cellChunks.get(yB);
        return null === pB ? this.cellChunks.delete(yB) : (null === lB || void 0 === lB ? void 0 : lB.version) === pB ? (lB.seenAt = this.checks, !1) : (this.cellChunks.set(yB, {
          version: pB,
          seenAt: this.checks
        }), !0)
      }
      refresh(BB) {
        const TB = function(BB, TB) {
            const dB = new Set,
              VB = [];
            for (const {
                pos: yB,
                offsets: pB
              }
              of BB)
              for (const [BB, lB, JB] of pB) {
                const pB = yB[0] + BB,
                  YB = yB[1] + lB,
                  gB = yB[2] + JB,
                  oB = `${pB},${YB},${gB}`;
                dB.has(oB) || (dB.add(oB), TB(pB, YB, gB) && VB.push([pB, YB, gB]))
              }
            return VB
          }([...this.chunks.values()].flatMap((BB => BB.machines)), ((TB, dB, VB) => BB.isBlockInLoadedChunk(TB, dB, VB) && 0 === BB.getBlockId(TB, dB, VB))),
          dB = TB.join(";");
        dB !== this.shownKey && (this.shownKey = dB, this.clearMeshes(BB), TB.length > 0 && (this.meshes = [this.build(BB, TB, !1), this.build(BB, TB, !0)]))
      }
      build(BB, TB, dB) {
        const VB = TB[0],
          yB = [],
          pB = [];
        for (const [lB, JB, YB] of TB)(0, gE.c)(yB, pB, [lB - VB[0] + .5, JB - VB[1] + .5, YB - VB[2] + .5], HE, dB);
        return BB.createGameMesh({
          positions: yB,
          indices: pB
        }, {
          rgb: dB ? vE : EE,
          alpha: .4
        }, VB)
      }
      clearMeshes(BB) {
        for (const TB of this.meshes) BB.disposeGameMesh(TB);
        this.meshes = []
      }
    }
    const iE = 1 / .6,
      NE = 200,
      tE = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      fE = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      sE = 2 * Math.PI / 3;
    class ME {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE;
        this.style = BB, this.particles = null, this.points = new Float32Array(800), this.budget = NE, this.lastMs = 0
      }
      static blade() {
        return new ME(fE)
      }
      Qv(BB, TB) {
        const dB = Math.min(TB.arcStruck, TB.arcPoints.length);
        this.draw(BB, [TB.arcFrom, ...TB.arcPoints], TB.arcPoints.slice(0, dB))
      }
      onBlade(BB, TB) {
        const [dB, VB, yB] = TB.bladeCentre, [pB, lB] = TB.bladeFacing, JB = dB - 1.5 * pB, YB = yB - 1.5 * lB, gB = Math.atan2(lB, pB), oB = [];
        for (let kB = 0; kB <= 8; kB++) {
          const BB = gB - sE / 2 + sE * kB / 8;
          oB.push([JB + 2.5 * Math.cos(BB), VB, YB + 2.5 * Math.sin(BB)])
        }
        this.draw(BB, oB, TB.bladeStruck)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
      draw(BB, TB, dB) {
        if (!BB.particlesEnabled() || TB.length < 2) return;
        const VB = performance.now();
        this.budget = Math.min(NE, this.budget + (VB - this.lastMs) / 1e3 * NE), this.lastMs = VB;
        const yB = [];
        let pB = 0,
          lB = TB[0];
        for (const EB of TB.slice(1)) {
          const BB = Math.min(48, Math.round(Math.hypot(EB[0] - lB[0], EB[1] - lB[1], EB[2] - lB[2]) * this.style.perBlock));
          yB.push([lB, EB, BB]), pB += BB, lB = EB
        }
        const JB = dB.length;
        pB += 10 * JB;
        const YB = pB > this.budget ? this.budget / pB : 1;
        if (0 === pB || YB * pB < 1) return;
        const gB = TB[0],
          [oB, kB, LB] = gB,
          OB = this.points;
        let DB = 0;
        const uB = (BB, TB, dB, VB) => {
          const yB = 4 * DB;
          OB[yB] = BB - oB, OB[yB + 1] = TB - kB, OB[yB + 2] = dB - LB, OB[yB + 3] = VB, DB++
        };
        yB.forEach(((BB, TB) => {
          let [dB, VB, yB] = BB;
          const pB = Math.min(Math.floor(yB * YB), NE - DB),
            lB = Math.hypot(VB[0] - dB[0], VB[1] - dB[1], VB[2] - dB[2]),
            JB = 0 === TB && lB > 0 ? Math.min(.5, .1 * lB) / lB : 0;
          for (let YB = 0; YB < pB; YB++) {
            const BB = JB + (YB + .5) / pB * (1 - JB);
            uB(dB[0] + (VB[0] - dB[0]) * BB, dB[1] + (VB[1] - dB[1]) * BB, dB[2] + (VB[2] - dB[2]) * BB, .15)
          }
        }));
        const HB = Math.floor(10 * YB);
        for (let EB = 0; EB < JB; EB++) {
          const [BB, TB, VB] = dB[EB];
          for (let dB = 0; dB < HB && DB < NE; dB++) uB(BB, TB, VB, 2.5)
        }
        this.budget -= DB, this.particles ??= BB.createParticles(function(BB) {
          const [TB, dB] = BB.colours;
          return {
            texture: "square_particle",
            Kk: 400,
            minLifeTime: BB.life[0] / iE,
            maxLifeTime: BB.life[1] / iE,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [TB[0], TB[1], TB[2], 1],
              maxColor: [dB[0], dB[1], dB[2], 1]
            }, {
              timeFraction: 1,
              minColor: [TB[0], TB[1], TB[2], 0],
              maxColor: [dB[0], dB[1], dB[2], 0]
            }],
            blendMode: UJ.e.Add
          }
        }(this.style), {
          pos: gB
        }), this.particles.emitPoints(gB, OB, DB)
      }
    }
    const zE = new Set(["Sky Spring"]);

    function wE(BB, TB, dB) {
      const VB = BB.split("|")[0];
      return "Air" !== TB || dB || ! function(BB) {
        const TB = BB.split("|")[0];
        return void 0 !== eT[TB] || zE.has(TB)
      }(VB) ? null : BB
    }
    class UE {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(BB) {
        const TB = BB - this.lastTapAt >= 300;
        return this.lastTapAt = BB, TB
      }
    }
    class FE {
      constructor() {
        this.presses = new UE, this.predicted = null
      }
      tap(BB, TB) {
        const dB = this.presses.isNewPress(TB);
        return dB && (this.predicted = {
          station: BB,
          at: TB
        }), dB
      }
      consumeServerOpen(BB, TB) {
        const dB = this.predicted;
        return !(null === dB || dB.station !== BB || TB - dB.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class KE {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(BB, TB) {
        return BB && (this.thrustAt = TB), TB - this.thrustAt < 200
      }
    }
    const rE = [.1, .05, .1],
      IE = {
        texture: "effect_5",
        Kk: Math.ceil(48),
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
        blendMode: UJ.e.OneOne
      };
    class cE {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new KE, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      Qv(BB, TB) {
        for (const [dB, VB] of TB.baf2JetFlames) BB.isLocalPlayer(dB) || (VB ? this.lit.add(dB) : this.lit.delete(dB))
      }
      onAfterRender(BB, TB) {
        const dB = performance.now(),
          VB = this.hold.lit(this.selfThrusting(BB, TB), dB);
        for (const [yB, pB] of this.flames)(yB === TB ? VB : this.lit.has(yB)) || this.setEmitting(pB, !1), yB === TB || BB.getPositionView(yB) ? !pB.emitting && dB - pB.offAt >= 1300 && (pB.particles.stop(), this.flames.delete(yB)) : (pB.particles.dispose(), this.flames.delete(yB), this.lit.delete(yB));
        VB && this.draw(BB, TB, TB);
        for (const yB of this.lit) this.draw(BB, TB, yB)
      }
      dispose() {
        for (const BB of this.flames.values()) BB.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(BB, TB) {
        var dB;
        const VB = BB.getLocalPlayerMovement();
        return !!VB && (null !== (yB = {
          option: null !== (dB = BB.getClientOption(TB, "jumpHoldThrust")) && void 0 !== dB ? dB : null,
          jumping: VB.jumpHeld,
          onGround: VB.onGround,
          alive: BB.isAlive(TB)
        }).option && yB.option.maxUpSpeed >= 0 && yB.jumping && !yB.onGround && yB.alive);
        var yB
      }
      draw(BB, TB, dB) {
        var VB, yB;
        const pB = this.pos;
        if (!BB.readDrawnPosition(dB, pB)) return;
        const lB = BB.readDrawnPosition(TB, this.camera) ? this.camera : pB;
        if (!((pB[0] - lB[0]) ** 2 + (pB[1] - lB[1]) ** 2 + (pB[2] - lB[2]) ** 2 < 1600) || !BB.particlesEnabled()) {
          const BB = this.flames.get(dB);
          return void(BB && this.setEmitting(BB, !1))
        }
        const JB = null !== (VB = this.flames.get(dB)) && void 0 !== VB ? VB : this.create(BB, dB, pB),
          YB = null !== (yB = BB.getDrawnHeading(dB)) && void 0 !== yB ? yB : 0,
          gB = this.at;
        gB[0] = pB[0] - .35 * Math.sin(YB), gB[1] = pB[1] + 1.05, gB[2] = pB[2] - .35 * Math.cos(YB), JB.particles.moveTo(gB), this.setEmitting(JB, !0)
      }
      setEmitting(BB, TB) {
        BB.emitting !== TB && (BB.emitting = TB, TB || (BB.offAt = performance.now()), BB.particles.setEmitRate(TB ? 60 : 0))
      }
      create(BB, TB, dB) {
        const VB = {
          particles: BB.createParticles(IE, {
            pos: dB,
            half: rE
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(TB, VB), VB
      }
    }

    function SE(BB) {
      return "Reactor Frame" === bd("reactor", BB)
    }

    function PE(BB) {
      return rd("reactor", BB) && !SE(BB) && (BB.startsWith("Reactor Glass") || BB.startsWith("Reactor Port"))
    }
    const QE = "baf2Goal";
    class RE {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [zy.h.subscribe("setDirectionArrow", (BB => {
          let {
            id: TB,
            position: dB
          } = BB;
          TB === QE && (this.goal = dB, this.checkedAt = -1 / 0)
        })), zy.h.subscribe("clearDirectionArrow", (BB => {
          let {
            id: TB
          } = BB;
          null !== TB && TB !== QE || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const BB of this.subs) zy.h.unsubscribe(BB)
      }
      sideOf(BB, TB, dB, VB) {
        const yB = this.goal;
        if (!yB) return 0;
        dB - this.checkedAt > 1e3 && (this.checkedAt = dB, this.open = function(BB, TB) {
          const [dB, VB, yB] = BB.map(Math.floor);
          if (!PE(TB(dB, VB, yB))) return null;
          for (const [pB, lB] of [
              [1, 0],
              [0, 1]
            ]) {
            const BB = TB(dB + pB, VB, yB + lB),
              JB = TB(dB - pB, VB, yB - lB);
            if (SE(JB) && PE(BB)) return [pB, 0, lB];
            if (SE(BB) && PE(JB)) return [0 - pB, 0, 0 - lB]
          }
          return null
        }(yB, ((TB, dB, VB) => BB.blockIdToBlockName(BB.getBlockId(TB, dB, VB)))));
        const pB = this.open;
        if (!pB) return 0;
        const lB = VB(yB);
        if (Math.abs(lB.x - TB.x) > .05 || Math.abs(lB.y - TB.y) > .05) return 0;
        const JB = VB([yB[0] + pB[0], yB[1], yB[2] + pB[2]]).x - lB.x;
        return Math.abs(JB) < .3 ? 0 : JB > 0 ? 1 : -1
      }
    }
    class aE {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new RE, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.ND = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.qE = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((BB => {
          for (const TB of BB) TB.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(TB.target, TB.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.ND || this.clear()
        }, window.addEventListener("resize", this.qE)
      }
      onAfterRender(BB, TB) {
        var dB;
        this.api = BB, this.project = null !== (dB = null === TB || void 0 === TB ? void 0 : TB.projectWorldPosToScreenPos) && void 0 !== dB ? dB : null, this.queued || this.ND || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.ND = !0;
        for (const BB of this.moved.keys()) BB.style.transform = "";
        this.moved.clear();
        for (const BB of this.sideLabels.keys()) BB.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.qE)
      }
      clear() {
        for (const pB of this.moved.keys()) pB.isConnected || this.moved.delete(pB);
        for (const pB of this.sideLabels.keys()) pB.isConnected || this.sideLabels.delete(pB);
        if (0 === this.arrows.length) return;
        const BB = performance.now(),
          TB = BB - this.refreshedAt > 1e3;
        TB && (this.refreshedAt = BB, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const dB = this.trackerBox(),
          VB = this.barsBox(),
          yB = this.toastBox(TB);
        (dB || VB || yB) && TB && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let pB = 0; pB < this.arrows.length; pB++) {
          const TB = this.arrows[pB];
          this.labelOffsets.set(TB, this.runLabelAside(TB, BB));
          const lB = (dB ? this.shiftLeftOf(TB, dB) : 0) || this.shiftOnScreen(TB),
            JB = Math.min(VB ? this.liftAbove(TB, VB, lB) : 0, yB ? this.liftAbove(TB, yB, lB) : 0),
            YB = this.moved.get(TB);
          if (0 !== lB || 0 !== JB) {
            const BB = 0 === JB ? `translateX(${lB}px)` : `translate(${lB}px, ${JB}px)`;
            YB !== BB && (TB.style.transform = BB, this.moved.set(TB, BB))
          } else void 0 !== YB && (TB.style.transform = "", this.moved.delete(TB))
        }
      }
      trackerBox() {
        var BB, TB;
        const dB = null !== (BB = this.tracker) && void 0 !== BB && BB.isConnected ? this.tracker : null !== (TB = this.trackers[0]) && void 0 !== TB ? TB : null;
        if (dB !== this.tracker && this.watch(dB), this.boxStale && dB) {
          var VB, yB, pB;
          this.boxStale = !1;
          const BB = dB.closest(".NoRoom") ? null : dB.getBoundingClientRect(),
            TB = BB && BB.width > 0 ? null === (VB = this.hud) || void 0 === VB ? void 0 : VB.getBoundingClientRect() : void 0,
            lB = BB && TB ? Math.max(BB.top, TB.top) : null !== (yB = null === BB || void 0 === BB ? void 0 : BB.top) && void 0 !== yB ? yB : 0,
            JB = BB && TB ? Math.min(BB.bottom, TB.bottom) : null !== (pB = null === BB || void 0 === BB ? void 0 : BB.bottom) && void 0 !== pB ? pB : 0;
          this.box = BB && BB.width > 0 && JB > lB ? {
            left: BB.left,
            top: lB,
            right: BB.right,
            bottom: JB
          } : null
        }
        return dB ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var BB;
          this.barsStale = !1;
          const TB = null === (BB = this.statBars[0]) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
          this.bars = TB && TB.width > 0 && TB.height > 0 ? {
            left: TB.left,
            top: TB.top,
            right: TB.right,
            bottom: TB.bottom
          } : null
        }
        return this.bars
      }
      toastBox(BB) {
        var TB;
        const dB = null !== (TB = this.toasts[0]) && void 0 !== TB ? TB : null;
        if (dB !== this.toastEl || BB && dB) {
          this.toastEl = dB;
          const BB = null === dB || void 0 === dB ? void 0 : dB.getBoundingClientRect();
          this.toast = BB && BB.width > 0 && BB.height > 0 ? {
            left: BB.left,
            top: BB.top,
            right: BB.right,
            bottom: BB.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(BB, TB, dB) {
        var VB;
        const yB = this.anchorOf(BB);
        if (!yB) return 0;
        const pB = yB.x + dB + (null !== (VB = this.labelOffsets.get(BB)) && void 0 !== VB ? VB : 0),
          {
            halfWidth: lB,
            labelled: JB
          } = this.extentOf(BB),
          YB = yB.y + this.em * (JB ? 6.2 : 3);
        return YB < TB.top - 6 || pB + lB < TB.left - 6 || pB - lB > TB.right + 6 ? 0 : TB.top - 6 - YB
      }
      watch(BB) {
        var TB, dB;
        this.tracker && this.sizes.unobserve(this.tracker), null === (TB = this.hud) || void 0 === TB || TB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = BB, this.hud = null !== (dB = null === BB || void 0 === BB ? void 0 : BB.closest(".Baf2QuestHud")) && void 0 !== dB ? dB : null, this.box = null, this.boxStale = !0, BB && this.sizes.observe(BB), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(BB, TB) {
        var dB;
        const VB = this.anchorOf(BB);
        if (!VB) return 0;
        const {
          y: yB
        } = VB, pB = VB.x + (null !== (dB = this.labelOffsets.get(BB)) && void 0 !== dB ? dB : 0), lB = this.em, {
          halfWidth: JB,
          labelled: YB
        } = this.extentOf(BB), gB = yB - lB, oB = pB + JB;
        return yB + lB * (YB ? 6.2 : 3) < TB.top || gB > TB.bottom || oB < TB.left - 6 || pB - JB > TB.right ? 0 : Math.max(TB.left - 6 - oB, 6 - (pB - JB))
      }
      shiftOnScreen(BB) {
        var TB;
        const dB = this.anchorOf(BB);
        if (!dB) return 0;
        const {
          halfWidth: VB
        } = this.extentOf(BB), yB = dB.x + (null !== (TB = this.labelOffsets.get(BB)) && void 0 !== TB ? TB : 0), pB = yB + VB - (this.innerWidth - 6);
        return pB > 0 ? -pB : Math.max(0, 6 - (yB - VB))
      }
      runLabelAside(BB, TB) {
        var dB;
        let VB = null;
        for (let lB = 0; lB < BB.children.length; lB++) BB.children[lB].classList.contains("DirectionArrowLabel") && (VB = BB.children[lB]);
        if (!VB) return 0;
        const yB = BB.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(BB) : null,
          pB = (yB && this.api ? this.side.sideOf(this.api, {
            x: yB.x / this.innerWidth * 100,
            y: yB.y / this.innerHeight * 100
          }, TB, this.project) : 0) * this.halfWidthOf(VB);
        return pB !== (null !== (dB = this.sideLabels.get(VB)) && void 0 !== dB ? dB : 0) && (VB.style.transform = 0 === pB ? "" : `translateX(-50%) translateX(${pB}px)`, 0 === pB ? this.sideLabels.delete(VB) : this.sideLabels.set(VB, pB)), pB
      }
      extentOf(BB) {
        let TB = this.em,
          dB = !1;
        for (let VB = 0; VB < BB.children.length; VB++) {
          const yB = BB.children[VB],
            pB = yB.classList.contains("DirectionArrowLabel");
          dB ||= pB, (pB || yB.classList.contains("DirectionArrowDistance")) && (TB = Math.max(TB, this.halfWidthOf(yB)))
        }
        return {
          halfWidth: TB,
          labelled: dB
        }
      }
      halfWidthOf(BB) {
        let TB = this.halfWidths.get(BB);
        return void 0 === TB && (TB = BB.offsetWidth / 2, this.halfWidths.set(BB, TB), this.sizes.observe(BB), this.labels.add(BB)), TB
      }
      forgetGoneLabels() {
        for (const BB of this.labels) BB.isConnected || (this.sizes.unobserve(BB), this.halfWidths.delete(BB), this.labels.delete(BB))
      }
      anchorOf(BB) {
        const TB = BB.style.translate,
          dB = this.anchors.get(BB);
        if (dB && dB.translate === TB && dB.innerWidth === this.innerWidth && dB.innerHeight === this.innerHeight) return dB;
        const VB = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(TB);
        if (!VB) return null;
        const yB = {
          translate: TB,
          x: parseFloat(VB[1]) / 100 * this.innerWidth,
          y: parseFloat(VB[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(BB, yB), yB
      }
    }
    const ZE = "Baf2ArrowText";

    function XE(BB, TB) {
      const dB = BB.rows.find((BB => BB.current));
      return IB(BB.tutorial) && null !== dB && void 0 !== dB && dB.item && Qy(dB) && UB(dB.item).includes(TB) ? dB.item : null
    }
    const WE = new class {
      constructor(BB) {
        this.select = BB, this.picks = new Map
      }
      open(BB, TB, dB) {
        const VB = XE(TB, BB);
        null !== VB && this.dO(BB, VB, dB)
      }
      follow(BB, TB) {
        if (JB())
          for (const [dB, {
              item: VB,
              had: yB
            }] of this.picks) {
            const pB = XE(BB, dB);
            pB !== VB && (null !== pB && TB(VB) > yB ? this.dO(dB, pB, TB) : this.picks.delete(dB))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      dO(BB, TB, dB) {
        this.picks.set(BB, {
          item: TB,
          had: dB(TB)
        }), this.select(BB, TB)
      }
    }(wy.n);

    function hE(BB) {
      return TB => {
        let dB = 0;
        for (const VB of BB.getInventoryItems())(null === VB || void 0 === VB ? void 0 : VB.name) === TB && (dB += null === VB.amount ? 1 : Math.max(VB.amount, 0));
        return dB
      }
    }

    function CE(BB, TB, dB, VB) {
      BB.getClientOption(TB, "canCraft") && "inventory" !== Oy.d.get("openInGameMenuName") && (WE.open(dB, VB.get(), hE(BB)), zy.h.yH("toggleMenu", `inventory|${dB}`))
    }
    let GE = null,
      qE = !1;

    function xE(BB) {
      const TB = Ep();
      BB === GE && TB === qE || (GE = BB, qE = TB, (0, wy.q)(function(BB, TB) {
        const dB = new Map;
        for (let VB = BB + 1; VB <= yB.length; VB++) {
          const yB = ap(VB, BB, TB);
          if (yB)
            for (const TB of EB(VB).unlocks) dB.set(TB, {
              ...yB,
              stepsAway: VB - BB
            })
        }
        return dB
      }(BB, TB)))
    }

    function jE() {
      return (0, wy.u)(Rp(Object.keys(wB), Ip)), () => {
        (0, wy.u)([])
      }
    }
    const AE = "buildAFactory2Game:",
      bE = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      nE = {
        on: `${AE}tutorialButtonOn`,
        hud: `${AE}tutorialButtonHud`,
        off: `${AE}tutorialButtonOff`
      },
      eE = {
        on: `${AE}tutorialPickedOn`,
        hud: `${AE}tutorialPickedHud`,
        off: `${AE}tutorialPickedOff`
      };

    function Bv(BB, TB, dB) {
      let VB = null,
        yB = () => {};
      const pB = pB => {
        var lB;
        let {
          tutorial: JB,
          tutorialKnown: YB
        } = pB;
        (null === (lB = VB) || void 0 === lB ? void 0 : lB.tutorial) === JB && VB.tutorialKnown === YB || (VB = {
          tutorial: JB,
          tutorialKnown: YB
        }, yB = (0, ky.v)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: nE[JB],
          icon: {
            kind: "icon",
            name: bE[JB]
          },
          iconOnly: !0,
          disabled: !YB,
          className: "Baf2TutorialButton",
          onClick: () => {
            var VB;
            (VB => {
              const yB = TB.setTutorial(VB);
              BB.send(`baf2tutorial ${VB} ${yB}`), dB.show({
                baf2ToastText: [(0, cB.Wd)({
                  translationKey: eE[VB]
                }, cB.L.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((VB = TB.get().tutorial, rB[(rB.indexOf(VB) + 1) % rB.length]))
          }
        }))
      };
      pB(TB.get());
      const lB = zy.h.subscribe(Uy, pB);
      return () => {
        zy.h.unsubscribe(lB), yB()
      }
    }

    function Tv(BB, TB, dB) {
      var VB, yB;
      const pB = BB.getTargetedBlock();
      if (!pB || ! function(BB, TB, dB) {
          if ("Chest" !== TB) return !1;
          const VB = BB.split("|")[0];
          if (!dd(VB) || 0 === zT[VB].outputSlots.length) return !1;
          const yB = OH(BB);
          return dB[0] === yB[0] && dB[1] === yB[1] && dB[2] === yB[2]
        }(dB, null === (VB = BB.gdB(TB)) || void 0 === VB ? void 0 : VB.name, pB.normal)) return !1;
      const [lB, JB, YB] = pB.ck, gB = BB.getBlockId(lB, JB, YB);
      return 0 === gB || !0 === (null === (yB = KB.h[gB]) || void 0 === yB ? void 0 : yB.canBePlacedOver)
    }
    var dv = dB(35732);
    const Vv = new Set(Yd.c);
    class yv {
      constructor(BB) {
        this.toasts = BB, this.lastAt = -1 / 0
      }
      onAltAction(BB, TB, dB) {
        const VB = BB.getTargetedBlock();
        if (!VB || function(BB) {
            const TB = BB.split("|")[0];
            return dd(TB) || null !== EV(TB) || MB(TB) || Yd.c.includes(TB)
          }(dB) && !Vv.has(dB.split("|")[0])) return;
        const yB = BB.gdB(TB);
        if (!yB || !Vv.has(yB.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const pB = yB.typeObj.id,
          [lB, JB, YB] = VB.ck,
          gB = BB.getBlockId(lB, JB, YB),
          oB = KB.h[gB];
        (0 === gB || null !== oB && void 0 !== oB && oB.DO || null !== oB && void 0 !== oB && oB.canBePlacedOver) && BB.isSolidToPlayerBlockId(pB) && BB.canModifyBlockAt(lB, JB, YB) && BB.FTB(lB, JB, YB, pB) && !BB.FTB(lB, JB, YB, pB, TB) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, cB.Wd)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, cB.L.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class pv {
      constructor(BB) {
        this.show = BB, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(BB, TB, dB) {
        var VB;
        if (!TB) return this.started = null, void this.gatedThisHold.clear();
        if (!BB) return void(this.started = null);
        const yB = `${BB.x},${BB.y},${BB.z},${BB.Dg}`;
        if (yB === this.started) return;
        this.started = yB;
        const pB = KV(BB.y) ? jH(BB.block, BB.Dg, BB.level) : null;
        if (null === pB || this.gatedThisHold.has(yB)) return;
        this.gatedThisHold.add(yB);
        const lB = BB.block.split("|")[0];
        dB - (null !== (VB = this.hintedAt.get(lB)) && void 0 !== VB ? VB : -1 / 0) < 5e3 || (this.hintedAt.set(lB, dB), this.show({
          baf2ToastText: AH(pB, BB.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var lv = dB(33);

    function Jv(BB, TB) {
      const dB = [...BB.baf2CoreBankPaused];
      for (const [yB] of BB.baf2CoreBanked) dB.push(yB);
      for (const lB of yB) {
        for (const {
            item: BB
          }
          of lB.cost) dB.push(BB);
        for (const BB of lB.newDeposits) dB.push(BB.block);
        for (const BB of lB.unlocks) dB.push(BB, FB(BB));
        lB.reward && dB.push(lB.reward);
        for (const {
            item: BB
          }
          of null !== (VB = null === (pB = lB.charge) || void 0 === pB ? void 0 : pB.items) && void 0 !== VB ? VB : []) {
          var VB, pB;
          dB.push(BB)
        }
      }
      return {
        message: BB,
        itemNames: TB([...new Set(dB)])
      }
    }
    const Yv = "baf2MultiblockGuide";
    const gv = new Map;
    const ov = function(BB, TB, dB, yB) {
      let {
        localPlayerId: pB
      } = yB;
      const lB = new oJ,
        JB = new xL,
        gB = new TO,
        oB = new eL(gB),
        kB = (BB, TB) => {
          TB ? oB.observe(BB) : oB.unobserve(BB)
        },
        LB = new nL,
        OB = new pO(kB),
        DB = BB => OB.covers(BB),
        uB = new sO;
      let HB;
      const EB = new Il((BB => {
          HB.sendCommand(BB)
        })),
        vB = () => {
          EB.send("baf2questbook")
        },
        mB = BB => function(BB, TB, dB) {
          const VB = {};
          for (const yB of dB) {
            let dB = gv.get(yB);
            void 0 === dB && (dB = BB.getItemStat(TB, yB, "displayName"), gv.set(yB, dB)), VB[yB] = dB
          }
          return VB
        }(HB, pB, BB),
        iB = new ry(vB),
        NB = new PO((() => Oy.d.get("loadingOverlayVisible"))),
        tB = new XO,
        fB = new yv(NB),
        sB = new pv((BB => {
          NB.show(BB, BB.baf2ToastMs)
        })),
        zB = new bO(kB),
        wB = new tH(zB),
        UB = new vl,
        FB = new GH,
        rB = new Al,
        IB = new yD({
          read: () => !1 !== lv.j.getItem(Yv),
          write: BB => {
            lv.j.setItem(Yv, BB)
          }
        }),
        PB = new KD(IB),
        QB = new cD(IB),
        RB = new du(IB, (BB => function(BB, TB) {
          const dB = qJ(TB.w, TB.h, TB.d),
            VB = new Uint8Array(dB);
          for (let yB = 0; yB < dB; yB++) {
            const dB = MD(BB, Gd(TB, Ad(TB, yB)));
            VB[yB] = null === dB ? 0 : WJ(dB)
          }
          return VB
        }(HB, BB)), qD(EB)),
        aB = new Vu(IB, qD(EB)),
        ZB = new Bu,
        XB = (BB, TB) => {
          let [dB, VB, yB] = BB;
          ZB.answered(TB) || NB.show({
            baf2ToastText: [(0, cB.Wd)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: dB,
                h: VB,
                d: yB
              }
            }, cB.L.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      RB.onSizeNotTaken(XB), aB.onSizeNotTaken(XB);
      const CB = new Ju,
        GB = new Zu(IB),
        qB = new Wu,
        jB = new BH(qB),
        AB = new kH,
        bB = new fH,
        eB = new cH(bB),
        BT = new CH(bB),
        TT = bB.lookSource(),
        dT = new lE({
          handles: BB => TT.handles(BB) || BB === SB,
          line: (BB, TB) => BB === SB ? function(BB, TB, dB) {
            var VB;
            const yB = hB(null === (VB = TB.at(dB)) || void 0 === VB ? void 0 : VB.item);
            return null === yB ? {
              key: `${VE}lookFarmEmpty`
            } : {
              key: BB.blockIdToBlockName(BB.getBlockId(dB[0], dB[1], dB[2])).endsWith("|Running") ? `${VE}lookFarmRunning` : `${VE}lookFarmWaiting`,
              keys: {
                mob: WB(yB)
              }
            }
          }(HB, zB, TB) : TT.line(BB, TB),
          version: () => TT.version() + zB.version()
        }, (BB => PD(IB.all(), BB, (BB => MD(HB, BB)))), (() => iB.get().tier)),
        VT = new su,
        pT = new mE,
        lT = new ME,
        JT = ME.blade(),
        YT = new cE,
        gT = new CO,
        oT = new aE,
        kT = new FE,
        LT = new UE;
      let OT = -1 / 0,
        DT = 0,
        uT = -1 / 0,
        HT = -1 / 0;
      const ET = () => {
          EB.send("baf2islandsclose"), HT = Date.now()
        },
        vT = [];

      function mT(BB) {
        var TB, dB, VB, yB, pB, lB, YB;
        "core" === (null === (TB = JB.get()) || void 0 === TB ? void 0 : TB.kind) && "core" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && EB.send("baf2coreclose"), "power" === (null === (dB = JB.get()) || void 0 === dB ? void 0 : dB.kind) && "power" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && EB.send("baf2powerclose"), "water" === (null === (VB = JB.get()) || void 0 === VB ? void 0 : VB.kind) && "water" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && EB.send(nB.x), "terminal" === (null === (yB = JB.get()) || void 0 === yB ? void 0 : yB.kind) && "terminal" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && EB.send("baf2terminalclose"), "islands" === (null === (pB = JB.get()) || void 0 === pB ? void 0 : pB.kind) && "islands" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && ET();
        const gB = bB.getStatus();
        "collider" === (null === (lB = JB.get()) || void 0 === lB ? void 0 : lB.kind) && "collider" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && gB && EB.send(FY(gB, "close"));
        const oB = BB => "reactor" === BB || "battery" === BB;
        if (oB(null === (YB = JB.get()) || void 0 === YB ? void 0 : YB.kind) && !oB(null === BB || void 0 === BB ? void 0 : BB.kind)) {
          var kB, LB, OB;
          const BB = "reactor" === (null === (kB = JB.get()) || void 0 === kB ? void 0 : kB.kind) ? null === (LB = RB.get()) || void 0 === LB ? void 0 : LB.status.baf2RxAt : null === (OB = aB.get()) || void 0 === OB ? void 0 : OB.status.baf2BatAt;
          BB && EB.send(yT(BB, "close"))
        }
        "quests" === (null === BB || void 0 === BB ? void 0 : BB.kind) && vB(), JB.set(BB), null === BB && tB.release()
      }

      function NT() {
        (0, Ly.g)(), mT(null)
      }
      let tT = new Set,
        fT = !1;
      const sT = {
        onCreate: BB => {
          HB = BB, HB.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const TB of iT) {
            const BB = zT[TB].inputSlots ? MJ(lB) : tJ(TB, lB, UB, EB);
            vT.push((0, oy.g)(TB, BB))
          }
          vT.push((0, Ly.r)((0, VB.createElement)(VB.Fragment, null, (0, VB.createElement)(YO, {
            controller: OB
          }), (0, VB.createElement)(BD, {
            store: zB
          }), (0, VB.createElement)(YE, {
            store: dT
          }), (0, VB.createElement)(cO, {
            store: iB
          }), (0, VB.createElement)(aO, {
            store: NB
          }), (0, VB.createElement)(WO, {
            store: tB
          }), (0, VB.createElement)(qO, {
            store: gT
          }), (0, VB.createElement)(lu, {
            store: CB
          }), (0, VB.createElement)(hu, {
            store: qB
          })), {
            content: (0, VB.createElement)(jL, {
              commands: EB,
              store: JB,
              power: UB,
              water: rB,
              reactor: RB,
              battery: aB,
              collider: bB,
              terminal: FB,
              quests: iB,
              close: Ly.h,
              lD: () => {
                tB.dropHeld(), (0, Ly.g)()
              },
              askIslands: () => {
                HT = -1 / 0, OT = Date.now(), DT = EB.send(xB)
              },
              openSocial: () => {
                (0, Ly.g)(), Oy.d.set({
                  openEverythingMenuName: yd.m.SOCIAL
                })
              },
              showCore: BB => {
                mT({
                  kind: "core",
                  core: BB
                }), EB.send("baf2corereopen")
              }
            }),
            onClose: () => {
              mT(null)
            }
          })), vT.push((0, ky.v)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              mT({
                kind: "quests"
              }), (0, Ly.o)()
            }
          })), vT.push(Bv(EB, iB, NB)), fT = !1, vT.push(vp((() => {
            null !== GE && xE(GE)
          }))), vT.push(jE()), vT.push(function() {
            const BB = zy.h.subscribe(Uy, Gy),
              TB = () => {
                if (Cy) {
                  const BB = Cy;
                  Cy = null, (0, wy.r)(BB)
                }
              },
              dB = zy.h.subscribe("toggleMenu", (BB => {
                "inventory" === (null === BB || void 0 === BB ? void 0 : BB.split("|")[0]) && TB()
              })),
              VB = zy.h.subscribe("appManagerUpdated|openInGameMenuName", (BB => {
                "inventory" === BB && TB()
              }));
            return () => {
              zy.h.unsubscribe(BB), zy.h.unsubscribe(dB), zy.h.unsubscribe(VB)
            }
          }()), vT.push(function(BB) {
            const TB = hE(BB),
              dB = zy.h.subscribe(Uy, (BB => {
                WE.follow(BB, TB)
              }));
            return () => {
              zy.h.unsubscribe(dB), WE.clear()
            }
          }(HB)), vT.push(function() {
            const BB = document.documentElement,
              TB = (0, zO.d)(".InvenBodyRight", [], (() => {
                const TB = document.querySelector(".InvenBodyRight");
                TB && BB.style.setProperty("--baf2-backpack-width", `${TB.offsetWidth}px`)
              }));
            return () => {
              TB(), BB.style.removeProperty("--baf2-backpack-width")
            }
          }()), vT.push(function() {
            const BB = document.documentElement;
            return BB.classList.add(ZE), () => {
              BB.classList.remove(ZE)
            }
          }()), vT.push((() => {
            oB.dispose(), gB.dispose()
          })), uB.start(HB), vT.push((() => {
            uB.dispose(), YT.dispose(), wB.dispose()
          }))
        },
        onClose: () => {
          (0, wy.r)([]), Cy = null, hy = new Set, GE = null, (0, wy.q)(new Map), gv.clear();
          for (const BB of vT) BB();
          iB.dispose(), dT.dispose(), NB.dispose(), tB.dispose(), VT.dispose(), pT.dispose(HB), PB.dispose(HB), QB.dispose(HB), GB.dispose(HB), jB.dispose(HB), qB.dispose(), AB.dispose(), IB.dispose(), RB.dispose(), aB.dispose(), CB.dispose(), lT.dispose(), JT.dispose(), gT.dispose(), eB.dispose(HB), BT.dispose(HB), bB.dispose(), oT.dispose(), EB.clear()
        },
        onAfterRender: (BB, TB) => {
          var dB, VB, yB;
          try {
            uB.onAfterRender(TB)
          } catch (gB) {
            console.error("Error drawing BAF2 belt items", gB)
          }
          try {
            YT.onAfterRender(HB, pB)
          } catch (gB) {
            console.error("Error drawing BAF2 jet flames", gB)
          }
          fT || (fT = !0, EB.send("baf2clientready"));
          const lB = HB.getPositionView(pB);
          OB.onAfterRender(TB, lB, LB), zB.onAfterRender(TB, lB, LB, DB), oB.run(LB), VT.onAfterRender(HB, lB), pT.onAfterRender(HB, lB), wB.onAfterRender(HB, lB), PB.onAfterRender(HB, lB), QB.onAfterRender(HB, pB, lB), GB.onAfterRender(HB, pB, lB), jB.onAfterRender(HB, pB), AB.onAfterRender(HB, lB), iB.onPlayerY(lB[1]), eB.onAfterRender(HB), BT.onAfterRender(HB, pB, lB);
          const YB = HB.getTargetedBlock();
          dT.onAfterRender(HB, pB, null !== (dB = null === YB || void 0 === YB ? void 0 : YB.E_) && void 0 !== dB ? dB : 0, null !== (VB = null === YB || void 0 === YB ? void 0 : YB.position) && void 0 !== VB ? VB : null), oT.onAfterRender(HB, TB), sB.onMining(function(BB, TB) {
            var dB, VB;
            const yB = BB.getMiningBlock();
            if (!yB) return null;
            const pB = (0, KB.f)(BB.getBlockId(yB[0], yB[1], yB[2])),
              lB = null !== (dB = null === (VB = BB.gdB(TB)) || void 0 === VB ? void 0 : VB.name) && void 0 !== dB ? dB : null,
              JB = BB.getItemStat(TB, pB.split("|")[0], "harvestLevel");
            return {
              block: pB,
              x: yB[0],
              y: yB[1],
              z: yB[2],
              Dg: lB,
              level: JB
            }
          }(HB, pB), HB.isMining(), performance.now()), "dropMap" === (null === (yB = JB.get()) || void 0 === yB ? void 0 : yB.kind) && KV(lB[1]) && NT()
        },
        onPlayerChangeBlock: (BB, TB, dB, VB, yB, lB) => {
          BB === pB && function(BB, TB, dB, VB, yB, pB, lB) {
            const JB = wE(pB, lB, BB.isPlayerCrouching(TB));
            if (null === JB) return;
            if (BB.Cw(dB, VB, yB, JB), !BB.getClientOption(TB, "canPickUpItems")) return;
            const YB = eT[JB.split("|")[0]];
            var gB, oB, kB;
            void 0 !== YB && (gB = BB.getInventoryItems(), oB = YB, kB = pD.c.maxItemStackSize, BB.getInventoryFreeSlotCount(TB) > 0 || gB.some((BB => null !== BB && BB.name === oB && null !== BB.amount && BB.amount < kB))) && BB.playSound(TB, (0, dv.c)("pickUp"), .5, 1)
          }(HB, BB, TB, dB, VB, yB, lB)
        },
        onPlayerAltAction: (BB, TB, dB, VB, yB) => {
          var lB, JB;
          if (!HB.getClientOption(pB, "canPickUpItems")) return;
          const YB = null !== (lB = null === (JB = HB.gdB(pB)) || void 0 === JB ? void 0 : JB.name) && void 0 !== lB ? lB : null,
            gB = function(BB, TB) {
              const dB = BB.split("|")[0];
              return MB(dB) && TB !== Ty && "Sky Pack" !== TB ? dB : null
            }(yB, YB);
          if (null !== gB) return void(kT.tap(gB, performance.now()) && CE(HB, pB, gB, iB));
          if (!SV(YB)) return;
          const oB = LT.isNewPress(performance.now()),
            kB = function(BB, TB, dB) {
              return !SV(TB) || dB ? null : CV(BB)
            }(yB, YB, HB.isPlayerCrouching(pB));
          null !== kB && oB && HB.Cw(TB, dB, VB, kB)
        },
        onPlayerAttemptAltAction: (BB, TB, dB, VB, yB) => {
          if (function(BB, TB, dB, VB, yB) {
              "Workbench" === VB.split("|")[0] && BB.getClientOption(dB, "canCraft") && (WE.open("Workbench", yB.get(), hE(BB)), TB.send("baf2station Workbench"))
            }(HB, EB, pB, yB, iB), Tv(HB, pB, yB)) return "preventAction";
          fB.onAltAction(HB, pB, yB)
        },
        onReceivedMessageFromServer: (BB, TB) => {
          if ("baf2MachineStatus" === BB) {
            var dB, VB, yB, gB, oB, kB, LB, DB, vB, fB, sB, MB, wB, KB, cB, SB;
            const BB = TB,
              pB = BB.baf2MachineTaught;
            lB.set(BB.baf2MachinePos, {
              status: BB.baf2MachineStatus,
              power: null !== (dB = BB.baf2MachinePower) && void 0 !== dB ? dB : null,
              opLeftMs: null !== (VB = BB.baf2MachineOpLeftMs) && void 0 !== VB ? VB : null,
              dug: BB.baf2MachineYield ? {
                item: BB.baf2MachineYield,
                name: mB([BB.baf2MachineYield])[BB.baf2MachineYield]
              } : null,
              powerCap: null !== (yB = BB.baf2MachinePowerCap) && void 0 !== yB ? yB : null,
              powerRates: null !== (gB = BB.baf2MachinePowerRates) && void 0 !== gB ? gB : null,
              coupled: !0 === BB.baf2MachineCoupled,
              couplerLevel: null !== (oB = BB.baf2MachineCoupler) && void 0 !== oB ? oB : 1,
              taught: pB,
              taughtName: pB ? mB([pB])[pB] : null,
              tier: null !== (kB = BB.baf2MachineTier) && void 0 !== kB ? kB : null,
              input: null !== (LB = BB.baf2MachineInput) && void 0 !== LB ? LB : null,
              inertCoupler: null !== (DB = BB.baf2MachineInertCoupler) && void 0 !== DB ? DB : null,
              inputShort: null !== (vB = BB.baf2MachineInputShort) && void 0 !== vB ? vB : null,
              field: null !== (fB = BB.baf2MachineField) && void 0 !== fB ? fB : null,
              noSeeds: !0 === BB.baf2MachineNoSeeds,
              fuelFed: !0 === BB.baf2MachineFuelFed,
              fuelFeeds: !0 === BB.baf2MachineFuelFeeds,
              coreFull: !0 === BB.baf2MachineCoreFull,
              waterUnpowered: !0 === BB.baf2MachineWaterUnpowered,
              powerShort: !0 === BB.baf2MachinePowerShort,
              powerWait: !0 === BB.baf2MachinePowerWait,
              reactorPowered: !0 === BB.baf2MachineReactorPowered,
              fuelLeftMs: null !== (sB = BB.baf2MachineFuelLeftMs) && void 0 !== sB ? sB : null,
              burning: null !== (MB = BB.baf2MachineBurning) && void 0 !== MB ? MB : null,
              fuelKeep: null !== (wB = BB.baf2MachineFuelKeep) && void 0 !== wB ? wB : null,
              water: null !== (KB = BB.baf2MachineWater) && void 0 !== KB ? KB : null,
              farm: null !== (cB = BB.baf2MachineFarm) && void 0 !== cB ? cB : null,
              cryo: null !== (SB = BB.baf2MachineCryo) && void 0 !== SB ? SB : null
            })
          } else if ("baf2StationOpen" === BB) {
            const BB = TB.baf2Station;
            kT.consumeServerOpen(BB, performance.now()) || CE(HB, pB, BB, iB)
          } else if ("baf2Power" === BB) {
            const BB = TB;
            UB.set(BB), BB.baf2PowerOpen && (mT({
              kind: "power"
            }), (0, Ly.o)())
          } else if (BB === nB.B) {
            const BB = TB;
            rB.set(BB), BB.baf2WaterOpen && (mT({
              kind: "water"
            }), (0, Ly.o)())
          } else if ("baf2RxPlans" === BB) {
            var PB, QB, XB;
            const BB = TB;
            IB.Qv(BB);
            const dB = new Set(BB.baf2RxPlanList.map((BB => {
              let [TB, dB, VB] = BB;
              return `${TB},${dB},${VB}`
            })));
            CB.retain(dB);
            const VB = null === (PB = JB.get()) || void 0 === PB ? void 0 : PB.kind,
              yB = "reactor" === VB ? null === (QB = RB.get()) || void 0 === QB ? void 0 : QB.status.baf2RxAt : "battery" === VB ? null === (XB = aB.get()) || void 0 === XB ? void 0 : XB.status.baf2BatAt : void 0;
            yB && tT.has(yB.join(",")) && !dB.has(yB.join(",")) && NT(), tT = dB
          } else if ("baf2RxStatus" === BB) {
            const BB = TB;
            RB.set(BB), BB.baf2RxOpen && (mT({
              kind: "reactor"
            }), (0, Ly.o)())
          } else if ("baf2BatStatus" === BB) {
            const BB = TB;
            aB.set(BB), BB.baf2BatOpen && (mT({
              kind: "battery"
            }), (0, Ly.o)())
          } else if ("baf2RxAlarm" === BB) CB.Qv(TB);
          else if ("baf2Bomb" === BB) qB.Qv(TB, HB.getPositionView(pB));
          else if ("baf2Fallout" === BB) AB.Qv(TB);
          else if ("baf2ColBeams" === BB) bB.onBeams(TB);
          else if ("baf2ColStatus" === BB) {
            const BB = TB;
            var WB, hB;
            if (bB.onStatus(BB), BB.baf2ColOpen) bB.onOpen(null !== (WB = null === (hB = HB.gdB(pB)) || void 0 === hB ? void 0 : hB.name) && void 0 !== WB ? WB : null), mT({
              kind: "collider"
            }), (0, Ly.o)()
          } else if ("baf2Terminal" === BB) {
            const BB = TB;
            var GB;
            if (FB.apply(BB)) BB.baf2TermReset && (mT({
              kind: "terminal"
            }), (0, Ly.o)());
            else "terminal" === (null === (GB = JB.get()) || void 0 === GB ? void 0 : GB.kind) && (JB.set(null), (0, Ly.g)())
          } else if ("baf2Core" === BB) {
            var jB;
            const BB = TB;
            if (YB(!0 === BB.baf2CoreNuclear), function(BB, TB) {
                return "core" === (null === BB || void 0 === BB ? void 0 : BB.kind) && TB.baf2CoreTier > BB.core.message.baf2CoreTier
              }(JB.get(), BB)) return void(0, Ly.g)();
            if (BB.baf2CoreRefresh && "core" !== (null === (jB = JB.get()) || void 0 === jB ? void 0 : jB.kind)) return;
            mT({
              kind: "core",
              core: Jv(BB, mB)
            }), BB.baf2CoreRefresh || (0, Ly.o)()
          } else if ("baf2WrenchUndo" === BB) {
            const {
              baf2WrenchPos: BB,
              baf2WrenchBlock: dB
            } = TB;
            HB.Cw(BB[0], BB[1], BB[2], dB)
          } else if ("baf2Toast" === BB) {
            const BB = TB;
            ZB.heard(performance.now(), BB.baf2ToastMs), NB.show(BB)
          } else if ("baf2Area" === BB) tB.arrive(TB, null !== JB.get());
          else if ("baf2Quest" === BB) {
            const BB = TB;
            YB(!0 === BB.baf2QuestNuclear), iB.set(BB, function(BB, TB) {
              var dB, VB, yB, pB, lB;
              const JB = [];
              for (const [, , oB, , , , , , kB, LB] of BB.baf2QuestSteps) null !== oB && JB.push(oB), JB.push(...null !== kB && void 0 !== kB ? kB : [], ...null !== LB && void 0 !== LB ? LB : []);
              BB.baf2QuestReward && JB.push(BB.baf2QuestReward);
              const YB = null === (dB = BB.baf2QuestSide) || void 0 === dB ? void 0 : dB[2][2];
              YB && JB.push(YB), JB.push(...null !== (VB = null === (yB = BB.baf2QuestSide) || void 0 === yB ? void 0 : yB[2][8]) && void 0 !== VB ? VB : [], ...null !== (pB = null === (lB = BB.baf2QuestSide) || void 0 === lB ? void 0 : lB[2][9]) && void 0 !== pB ? pB : []);
              for (const [oB] of null !== (gB = BB.baf2QuestAlso) && void 0 !== gB ? gB : []) {
                var gB;
                JB.push(oB)
              }
              return TB(JB)
            }(BB, mB)), xE(BB.baf2QuestTier)
          } else if ("baf2Route" === BB) ! function(BB, TB) {
            let {
              baf2RouteCells: dB,
              baf2RouteInto: VB
            } = TB;
            0 !== dB.length && VB ? BB.setRouteChevrons({
              cells: dB.map(((BB, TB) => {
                const [yB, , pB] = function(BB, TB, dB) {
                  const VB = dB + 1 < BB.length ? BB[dB + 1] : TB;
                  return [VB[0] - BB[dB][0], 0, VB[2] - BB[dB][2]]
                }(dB, VB, TB);
                return {
                  pos: BB,
                  way: [yB, pB]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : BB.setRouteChevrons(null)
          }(HB, TB);
          else if ("baf2QuestBook" === BB) iB.setBook(TB);
          else if ("baf2Stalls" === BB) OB.set(TB.baf2StallCells);
          else if (BB === Yd.j) uB.onMoves(TB);
          else if (BB === Yd.f) uB.onLines(TB);
          else if ("baf2Labels" === BB) zB.Qv(TB);
          else if ("baf2DropMap" === BB) mT({
            kind: "dropMap",
            dropMap: TB
          }), (0, Ly.o)();
          else if ("baf2Islands" === BB) {
            var eB, BT;
            const BB = TB;
            if (EB.syncIslandEdits(BB.baf2IslandsAnswered), !BB.baf2IslandsOpen && "islands" !== (null === (eB = JB.get()) || void 0 === eB ? void 0 : eB.kind)) return;
            if (BB.baf2IslandsOpen) {
              var TT, dT;
              const TB = Oy.d.get("openEverythingMenuName"),
                dB = EB.sent() >= DT,
                VB = "other" !== (vT = {
                  askedAtMs: OT,
                  askSent: dB,
                  reaskedAtMs: uT,
                  nowMs: Date.now(),
                  panel: null !== (TT = null === (dT = JB.get()) || void 0 === dT ? void 0 : dT.kind) && void 0 !== TT ? TT : null,
                  inGameMenu: Oy.d.get("openInGameMenuName"),
                  everythingMenu: null === TB ? null : TB === yd.m.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== BB.baf2IslandsFocusInvite
                }).everythingMenu && (!!vT.focusInvite || "islands" === vT.panel && "clientGame" === vT.inGameMenu || !(vT.nowMs - vT.reaskedAtMs < Mg) && (vT.askSent && vT.nowMs - vT.askedAtMs < Mg ? "core" === vT.panel && "clientGame" === vT.inGameMenu && null === vT.everythingMenu : "shop" === vT.everythingMenu || null === vT.inGameMenu));
              if (dB && (OT = -1 / 0), uT = -1 / 0, !VB) return void ET()
            }
            const dB = (yT = BB.baf2IslandsOpen, pT = "islands" === (null === (BT = JB.get()) || void 0 === BT ? void 0 : BT.kind), oT = HT, LT = Date.now(), yT && !pT && LT - oT < Mg);
            mT({
              kind: "islands",
              islands: BB,
              arrivedAtMs: Date.now(),
              backToCore: zg(JB.get())
            }), dB && (HT = -1 / 0, uT = Date.now(), EB.send(xB)), BB.baf2IslandsOpen && ("clientGame" !== Oy.d.get("openInGameMenuName") && (0, Dy.f)(), (0, Ly.o)())
          } else if ("baf2CoopTransfer" === BB) {
            var VT;
            const BB = TB;
            BB.baf2TransferOn ? (mT({
              kind: "transfer",
              transfer: BB,
              arrivedAtMs: Date.now()
            }), (0, Ly.o)()) : "transfer" === (null === (VT = JB.get()) || void 0 === VT ? void 0 : VT.kind) && (0, Ly.g)()
          } else "baf2IslandLeft" === BB ? (tB.dropHeld(), null !== JB.get() && NT(), "inventory" === Oy.d.get("openInGameMenuName") && (0, Dy.f)()) : "baf2Arc" === BB ? lT.Qv(HB, TB) : "baf2Blade" === BB ? JT.onBlade(HB, TB) : "baf2JetFlame" === BB ? YT.Qv(HB, TB) : "baf2GearPower" === BB && gT.Qv(TB);
          var yT, pT, oT, LT, vT
        }
      };
      return sT
    }
  },
  37463: (BB, TB, dB) => {
    function VB(BB, TB, dB) {
      const VB = new Set,
        yB = new ResizeObserver(dB),
        pB = () => {
          const TB = new Set(document.querySelectorAll(BB));
          let pB = !1;
          for (const BB of VB) TB.has(BB) || (yB.unobserve(BB), VB.delete(BB), pB = !0);
          for (const BB of TB) VB.has(BB) || (yB.observe(BB), lB.observe(BB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), VB.add(BB));
          pB && dB()
        },
        lB = new MutationObserver((TB => {
          TB.some((BB => "attributes" === BB.type)) && dB(), TB.some((TB => function(BB, TB, dB) {
            if ("childList" !== BB.type) return !1;
            for (const VB of BB.addedNodes)
              if (VB instanceof Element && (VB.matches(TB) || VB.querySelector(TB))) return !0;
            for (const VB of BB.removedNodes)
              if (VB instanceof Element)
                for (const BB of dB)
                  if (VB.contains(BB)) return !0;
            return !1
          }(TB, BB, VB))) && pB()
        }));
      lB.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const JB of TB) yB.observe(JB);
      return window.addEventListener("resize", dB), pB(), dB(), () => {
        yB.disconnect(), lB.disconnect(), window.removeEventListener("resize", dB)
      }
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  37444: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB,
      c: () => pB
    });
    const VB = new WeakMap;

    function yB(BB) {
      let TB = VB.get(BB);
      return TB || (TB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, VB.set(BB, TB)), TB
    }

    function pB(BB, TB) {
      const dB = yB(BB);
      dB.hidden !== TB && (dB.hidden = TB, BB.hidden = TB)
    }

    function lB(BB, TB, dB) {
      const VB = yB(BB);
      VB.x === TB && VB.y === dB || (VB.x = TB, VB.y = dB, BB.style.translate = `${TB}vw ${dB}vh`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);