export const id = 237;
export const ids = [237];
export const modules = {
  38032: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(38039);
    const qQ = [0, 0, 0];
    class oQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ;
        this.pool = QQ, this.origin = FQ, this.count = 0, this.free = []
      }
      take() {
        var QQ;
        const FQ = null !== (QQ = this.free.pop()) && void 0 !== QQ ? QQ : this.count++;
        return FQ >= this.pool.MH && this.pool.grow(Math.max(2 * this.pool.MH, FQ + 1)), this.hide(FQ), FQ
      }
      release(QQ) {
        this.hide(QQ), this.free.push(QQ)
      }
      write(QQ, FQ, wQ, qQ) {
        const {
          records: oQ
        } = this.pool, {
          origin: DQ
        } = this, kQ = QQ * LQ.d;
        oQ[kQ] = FQ - DQ[0], oQ[kQ + 1] = wQ - DQ[1], oQ[kQ + 2] = qQ - DQ[2], oQ[kQ + LQ.h] = 0, this.pool.markDirty(QQ)
      }
      hide(QQ) {
        this.pool.records[QQ * LQ.d + LQ.h] = 1, this.pool.markDirty(QQ)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class DQ {
      constructor(QQ, FQ, wQ) {
        this.api = QQ, this.model = FQ, this.initialCapacity = wQ, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(QQ) {
        let FQ = this.kinds.get(QQ);
        if (void 0 === FQ) {
          const wQ = this.api.createInstancePool({
            ...this.model,
            item: QQ
          }, this.initialCapacity);
          null === wQ || void 0 === wQ || wQ.setOrigin(this.origin[0], this.origin[1], this.origin[2]), FQ = wQ && new oQ(wQ, this.origin), this.kinds.set(QQ, FQ)
        }
        return FQ
      }
      follow(QQ) {
        const {
          origin: FQ
        } = this;
        if (Math.abs(QQ[0] - FQ[0]) <= 512 && Math.abs(QQ[1] - FQ[1]) <= 512 && Math.abs(QQ[2] - FQ[2]) <= 512) return !1;
        FQ[0] = Math.floor(QQ[0]), FQ[1] = Math.floor(QQ[1]), FQ[2] = Math.floor(QQ[2]);
        for (const wQ of this.kinds.values()) null === wQ || void 0 === wQ || wQ.pool.setOrigin(FQ[0], FQ[1], FQ[2]);
        return !0
      }
      commit() {
        for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.commit()
      }
      dispose() {
        for (const QQ of this.kinds.values()) null === QQ || void 0 === QQ || QQ.dispose();
        this.kinds.clear()
      }
    }
  },
  38046: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      e: () => kQ,
      h: () => vQ
    });
    const LQ = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      qQ = [0, 1, 2, 0, 2, 3],
      oQ = [4, 5];

    function DQ(QQ, FQ, wQ, LQ, qQ) {
      for (let DQ = 0; DQ < 6; DQ++) oQ.includes(DQ) === qQ && mQ(QQ, FQ, wQ, LQ, DQ)
    }

    function kQ(QQ, FQ, wQ, LQ) {
      for (let qQ = 0; qQ < 6; qQ++) mQ(QQ, FQ, wQ, LQ, qQ)
    }

    function vQ(QQ, FQ, wQ, oQ, DQ) {
      for (let kQ = 0; kQ < 6; kQ++)
        for (const vQ of [0, 1]) {
          const [mQ, uQ, HQ] = [vQ + 2, vQ + 1, (vQ + 3) % 4], bQ = QQ.length / 3;
          for (const [FQ, qQ] of [
              [vQ, uQ],
              [mQ, uQ],
              [mQ, HQ],
              [vQ, HQ]
            ])
            for (let vQ = 0; vQ < 3; vQ++) {
              const mQ = LQ[3 * (4 * kQ + FQ) + vQ],
                uQ = LQ[3 * (4 * kQ + qQ) + vQ];
              QQ.push((mQ + (uQ - mQ) * DQ) * oQ / 2 + wQ[vQ])
            }
          for (const QQ of qQ) FQ.push(bQ + QQ)
        }
    }

    function mQ(QQ, FQ, wQ, oQ, DQ) {
      let [kQ, vQ, mQ] = wQ, [uQ, HQ, bQ] = oQ;
      const YQ = QQ.length / 3;
      for (let qQ = 4 * DQ; qQ < 4 * DQ + 4; qQ++) QQ.push(LQ[3 * qQ] * uQ / 2 + kQ, LQ[3 * qQ + 1] * HQ / 2 + vQ, LQ[3 * qQ + 2] * bQ / 2 + mQ);
      for (const LQ of qQ) FQ.push(YQ + LQ)
    }
  },
  38018: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => pM
    });
    var LQ = wQ(53);
    const qQ = [{
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
      oQ = 10;
    let DQ = !0;

    function kQ() {
      return DQ
    }

    function vQ(QQ) {
      DQ = QQ
    }
    const mQ = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function uQ() {
      return DQ ? qQ.length : oQ
    }

    function HQ(QQ) {
      var FQ, wQ;
      return null !== (FQ = null === (wQ = qQ[QQ - 1]) || void 0 === wQ ? void 0 : wQ.reactorTier) && void 0 !== FQ ? FQ : 0
    }

    function bQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HQ(QQ) > 0;
      return wQ && !DQ ? "hidden" : QQ <= FQ ? "open" : wQ ? FQ < 5 ? "hidden" : FQ < oQ ? "teaser" : "locked" : "locked"
    }

    function YQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: LQ,
        n: qQ
      } = tQ(QQ);
      return {
        key: FQ[LQ],
        params: {
          [LQ]: wQ ? String(qQ) : qQ
        }
      }
    }
    const xQ = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function AQ(QQ, FQ) {
      return HQ(QQ) > 0 && FQ < oQ
    }

    function tQ(QQ) {
      const FQ = HQ(QQ);
      if (FQ > 0) return {
        kind: "atomic",
        n: FQ,
        short: `A${FQ}`
      };
      const wQ = function(QQ) {
        return QQ >= 6 && QQ <= 10 ? QQ - 6 + 1 : 0
      }(QQ);
      return wQ > 0 ? {
        kind: "stage",
        n: wQ,
        short: `S${wQ}`
      } : {
        kind: "tier",
        n: QQ,
        short: String(QQ)
      }
    }

    function eQ(QQ) {
      return qQ[Math.max(1, Math.min(QQ, qQ.length)) - 1]
    }

    function MQ(QQ, FQ) {
      return QQ < FQ ? function(QQ) {
        var FQ;
        return null !== (FQ = qQ[QQ]) && void 0 !== FQ ? FQ : null
      }(QQ) : null
    }
    const GQ = "baf2coresubmit",
      pQ = "baf2corebankpause",
      cQ = "baf2coredeposit",
      CQ = "baf2corechargepause";

    function SQ(QQ) {
      var FQ;
      return null !== (FQ = QQ.baf2CoreOpen) && void 0 !== FQ ? FQ : oQ
    }
    const iQ = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function WQ(QQ) {
      return iQ.includes(QQ)
    }
    const RQ = (QQ, FQ) => FQ.map((FQ => [FQ, [QQ]])),
      OQ = Object.fromEntries([...RQ("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...RQ("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...RQ("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...RQ("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...RQ("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...RQ("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...RQ("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...RQ("Parts Bench", ["Focus Lens"]), ...RQ("Machine Bench", ["Laser", "Collider"]), ...RQ("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...RQ("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...RQ("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...RQ("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...RQ("Tool Bench", ["Mob Cage"]), ...RQ("Tool Bench", ["Pocket Terminal"]), ...RQ("Tool Bench", ["Comet Beacon"]), ...RQ("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function sQ(QQ) {
      var FQ;
      return null !== (FQ = OQ[QQ]) && void 0 !== FQ ? FQ : ["Workbench"]
    }

    function rQ(QQ) {
      return sQ(QQ)[0]
    }
    qQ.slice(1).map(((QQ, FQ) => `Core Tier ${FQ+2}`));
    var IQ = wQ(9195);
    const UQ = ["on", "hud", "off"];

    function NQ(QQ) {
      return "on" === QQ
    }
    var TQ = wQ(317);
    const KQ = "Mob Farm",
      zQ = {
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
      lQ = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      jQ = {
        1: 20,
        2: 60,
        3: 120
      },
      aQ = "baf2farmvoid",
      XQ = "Caged ",
      fQ = " Spawner Block";

    function VQ(QQ) {
      return `lifeform:${(0,TQ.He)(QQ)}`
    }

    function hQ(QQ) {
      if (!QQ) return null;
      if (QQ.startsWith(XQ)) {
        const FQ = QQ.slice(6);
        return lQ.includes(FQ) ? FQ : null
      }
      if (QQ.endsWith(fQ)) {
        const FQ = QQ.slice(0, -14);
        return void 0 !== zQ[FQ] ? FQ : null
      }
      return null
    }

    function JQ(QQ) {
      return !0 === QQ.mobFarm
    }

    function EQ(QQ, FQ) {
      return jQ[zQ[FQ]] * QQ.opMs / 1e3
    }
    const nQ = new Map;
    const gQ = "baf2islands",
      PQ = "baf2islandnew";

    function ZQ(QQ) {
      const FQ = qQ.findIndex((FQ => FQ.unlocks.includes(QQ)));
      return FQ < 0 ? 1 : FQ + 1
    }

    function yQ(QQ) {
      return Math.floor(QQ).toLocaleString("en-US")
    }
    var BQ = wQ(37955);
    const dQ = "baf2terminaltake",
      QF = "baf2terminalput",
      FF = ["one", "stack", "fill"];

    function wF(QQ, FQ, wQ) {
      return `${dQ} ${QQ} ${FQ} ${wQ}`
    }

    function LF(QQ, FQ, wQ) {
      return `${QF} ${QQ} ${FQ} ${wQ}`
    }

    function qF(QQ) {
      return `${QF} ${QQ}`
    }
    const oF = [
      [`${dQ} `, "take"],
      [`${QF} `, "put"]
    ];

    function DF(QQ) {
      const FQ = oF.find((FQ => {
        let [wQ] = FQ;
        return QQ.startsWith(wQ)
      }));
      if (!FQ) return null;
      const [wQ, LQ] = FQ, [qQ, oQ, ...DQ] = QQ.slice(wQ.length).trim().split(" "), kQ = Number(qQ);
      if (!Number.isSafeInteger(kQ) || kQ <= 0) return null;
      if ("put" === LQ && void 0 === oQ) return {
        kind: "putAll",
        seq: kQ
      };
      const vQ = function(QQ) {
        if (FF.includes(QQ)) return QQ;
        const FQ = Number(QQ);
        return /^\d+$/.test(QQ) && Number.isSafeInteger(FQ) && FQ > 0 ? FQ : null
      }(null !== oQ && void 0 !== oQ ? oQ : "");
      return null === vQ || 0 === DQ.length ? null : {
        kind: LQ,
        seq: kQ,
        mode: vQ,
        item: DQ.join(" ")
      }
    }

    function kF(QQ, FQ) {
      const wQ = "number" === typeof QQ ? QQ : "one" === QQ ? 1 : "stack" === QQ ? 99 : FQ;
      return Math.min(FQ, wQ)
    }

    function vF(QQ, FQ) {
      const wQ = QQ => "number" === typeof QQ ? QQ : "one" === QQ ? 1 : 99;
      return "fill" === QQ || "fill" === FQ ? "fill" : wQ(QQ) + wQ(FQ)
    }

    function mF(QQ, FQ) {
      const wQ = DF(QQ),
        LQ = DF(FQ),
        qQ = wQ && LQ ? function(QQ, FQ) {
          return "take" === QQ.kind || "take" === FQ.kind ? "take" === QQ.kind && "take" === FQ.kind && QQ.item === FQ.item ? {
            ...FQ,
            mode: vF(QQ.mode, FQ.mode)
          } : null : "putAll" === QQ.kind || "putAll" === FQ.kind ? {
            kind: "putAll",
            seq: FQ.seq
          } : QQ.item === FQ.item ? {
            ...FQ,
            mode: vF(QQ.mode, FQ.mode)
          } : null
        }(wQ, LQ) : null;
      return qQ ? "putAll" === (oQ = qQ).kind ? qF(oQ.seq) : "put" === oQ.kind ? LF(oQ.seq, oQ.mode, oQ.item) : wF(oQ.seq, oQ.mode, oQ.item) : null;
      var oQ
    }
    const uF = "baf2rx";

    function HF(QQ, FQ) {
      for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ];
      return [uF, QQ[0], QQ[1], QQ[2], FQ, ...LQ].join(" ")
    }
    const bF = 2,
      YF = 4,
      xF = 8,
      AF = 16,
      tF = 32,
      eF = 64,
      MF = 128,
      GF = 256,
      pF = 512,
      cF = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      CF = [{
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
    const SF = "Biomass",
      iF = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function WF(QQ) {
      return {
        input: SF,
        inputAmount: 1,
        output: QQ,
        outputAmount: 1
      }
    }
    const RF = "baf2synth",
      OF = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      sF = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      rF = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      IF = function(QQ, FQ) {
        return {
          input: QQ,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: FQ,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      UF = function(QQ, FQ) {
        return {
          ...IF(QQ, FQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      NF = sF.map((QQ => UF(QQ, "Biomass", 2))),
      TF = {
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
          recipes: [IF("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), IF("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), IF("Raw Gold", "Gold Grit", 2), IF("Messy Stone", "Sand"), IF("Gravel", "Sand"), IF("Raw Voltite", "Voltite Dust", 2), IF("Moonstone", "Moonstone Dust", 4), IF("Wheat Seeds", "Fertiliser"), IF("Raw Uranium", "Uranium Grit", 2), UF("Mossy Messy Stone", "Sand"), ...NF],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [IF("Iron Grit", "Iron Bar"), IF("Copper Grit", "Copper Bar"), IF("Gold Grit", "Gold Bar"), IF("Raw Iron", "Iron Bar"), IF("Raw Copper", "Copper Bar"), IF("Raw Gold", "Gold Bar"), IF("Sand", "Glass"), IF("Messy Stone", "Stone"), ...TQ.Zc.map((QQ => IF(QQ, "Charcoal", 1, 4))), IF("Wheat", "Bread", 1, 2), ...sF.map(((QQ, FQ) => UF(QQ, rF[FQ])))],
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
          recipes: [IF("Iron Bar", "Iron Plate"), IF("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [IF("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [IF("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [IF("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), IF("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), IF("Raw Gold", "Gold Grit", 3), IF("Raw Voltite", "Voltite Dust", 3), IF("Messy Stone", "Sand", 2), IF("Gravel", "Sand", 2), IF("Moonstone", "Moonstone Dust", 6), IF("Raw Uranium", "Uranium Grit", 3), UF("Mossy Messy Stone", "Sand", 2), ...NF],
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
          table: cF
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [IF("Coal", "Diamond", 1, 24), IF("Voltite Dust", "Moonstone", 1, 12)],
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
        ...BQ.i
      },
      KF = {
        Crusher: [IF("Spent Pellet", "Glow Dust"), IF("Wheat Seeds", "Biomass"), IF("Wheat", "Biomass"), IF("Dead Bush", "Biomass"), IF("Dusk Moss", "Biomass"), IF("Rotten Flesh", "Biomass"), IF("Bone", "Biomass", 2)],
        "Shatter Mill": [IF("Spent Pellet", "Glow Dust"), IF("Wheat Seeds", "Biomass"), IF("Wheat", "Biomass"), IF("Dead Bush", "Biomass"), IF("Dusk Moss", "Biomass"), IF("Rotten Flesh", "Biomass"), IF("Bone", "Biomass", 2), ...TQ.Zc.map((QQ => IF(QQ, "Biomass")))],
        Smelter: [IF("Biomass", "Fertiliser", 2)],
        Press: [IF("Coal", "Graphite", 1, 4)]
      },
      zF = "Power Coupler",
      lF = "Advanced Coupler",
      jF = "Nova Coupler",
      aF = [{
        item: zF,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: lF,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: jF,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const XF = new Map;

    function fF(QQ) {
      var FQ, wQ;
      return null !== (FQ = null !== (wQ = QQ.fuelSlot) && void 0 !== wQ ? wQ : QQ.couplerSlot) && void 0 !== FQ ? FQ : null
    }

    function VF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!QQ.couplable) throw new Error(`${QQ.kind} takes no Power Coupler`);
      let wQ = XF.get(QQ);
      wQ || (wQ = [], XF.set(QQ, wQ));
      let LQ = wQ[FQ];
      if (!LQ) {
        var qQ;
        const {
          divisor: oQ,
          powerPerS: DQ
        } = aF[FQ - 1], kQ = QQ.opMs / oQ, vQ = void 0 !== QQ.fluidMade || void 0 !== QQ.cryoMade ? QQ.powerPerOp : DQ * kQ / 1e3;
        LQ = {
          ...QQ,
          fuelSlot: null,
          couplerSlot: null !== (qQ = fF(QQ)) && void 0 !== qQ ? qQ : void 0,
          opMs: kQ,
          powerPerOp: vQ,
          coupled: !0
        }, FQ > 1 && (LQ = {
          ...LQ,
          couplerLevel: FQ
        }), wQ[FQ] = LQ
      }
      return LQ
    }
    const hF = new Map;
    const JF = new Map;

    function EF(QQ, FQ) {
      if (null === FQ || (wQ = FQ, !iF.includes(wQ))) return QQ;
      var wQ;
      let LQ = JF.get(FQ);
      return LQ || (LQ = {
        ...QQ,
        recipes: [WF(FQ)]
      }, JF.set(FQ, LQ)), LQ
    }

    function nF(QQ) {
      return !0 === QQ.synth
    }
    const gF = (QQ, FQ, wQ, LQ) => ({
        output: QQ,
        outputAmount: FQ,
        tier: wQ,
        inputs: LQ.map((QQ => {
          let [FQ, wQ] = QQ;
          return {
            item: FQ,
            amount: wQ
          }
        }))
      }),
      PF = Object.fromEntries([gF("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), gF("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), gF("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), gF("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), gF("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), gF("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), gF("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), gF("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), gF("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), gF("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), gF("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), gF("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), gF("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), gF("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), gF("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), gF("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), gF("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), gF("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), gF("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), gF("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), gF("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), gF("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), gF("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), gF("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), gF("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), gF("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), gF("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), gF("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), gF("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), gF("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((QQ => [QQ.output, QQ]))),
      ZF = new Map;

    function yF(QQ, FQ) {
      let wQ = TF[QQ];
      if (FQ.atomic && (wQ = function(QQ) {
          const FQ = KF[QQ.kind];
          if (!FQ) return QQ;
          let wQ = hF.get(QQ.kind);
          if (!wQ) {
            const LQ = new Set(FQ.map((QQ => QQ.input))),
              qQ = QQ.recipes.filter((QQ => !LQ.has(QQ.input)));
            wQ = {
              ...QQ,
              recipes: [...qQ, ...FQ]
            }, hF.set(QQ.kind, wQ)
          }
          return wQ
        }(wQ)), wQ.synth) return EF(wQ, FQ.taught);
      if (FQ.coupled && wQ.couplable) return VF(wQ, FQ.level);
      const LQ = wQ.inputSlots && null !== FQ.taught ? PF[FQ.taught] : void 0;
      if (!LQ) return wQ;
      const qQ = `${QQ}|${LQ.output}`;
      let oQ = ZF.get(qQ);
      return oQ || (oQ = {
        ...wQ,
        bench: LQ
      }, ZF.set(qQ, oQ)), oQ
    }
    const BF = ["Diamond", "Moonstone"];

    function dF(QQ) {
      return new Set(QQ.flatMap((QQ => QQ.bonus ? [QQ.output, QQ.bonus.item] : [QQ.output])).filter((QQ => !BF.includes(QQ))))
    }
    const Qw = Object.values(TF).flatMap((QQ => QQ.recipes));
    dF(Qw.filter((QQ => !0 !== QQ.nuclear))), dF([...Qw.filter((QQ => !0 === QQ.nuclear)), ...Object.values(KF).flat()]);

    function Fw(QQ) {
      return null === QQ.inputSlot && void 0 === QQ.inputSlots && void 0 === QQ.powerMade && void 0 === QQ.fluidMade && !QQ.treeCutter && void 0 === QQ.table
    }

    function ww(QQ) {
      return !0 === QQ.treeCutter
    }
    const Lw = ["Voltite Cell"];

    function qw(QQ) {
      var FQ, wQ;
      return null !== (FQ = null === (wQ = QQ.fuels) || void 0 === wQ ? void 0 : wQ.some((QQ => Lw.includes(QQ)))) && void 0 !== FQ && FQ
    }
    const ow = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(TQ.Zc.map((QQ => [QQ, 8e3]))),
        ...Object.fromEntries(TQ.Ld.map((QQ => [QQ, 2e3]))),
        "Voltite Cell": 12e4
      },
      Dw = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      kw = {
        "Uranium Deposit": 4e3
      };

    function vw(QQ) {
      var FQ;
      return null !== (FQ = Object.keys(Dw).find((FQ => Dw[FQ] === QQ))) && void 0 !== FQ ? FQ : null
    }

    function mw(QQ) {
      return OF.includes(QQ)
    }

    function uw(QQ) {
      return !0 !== QQ.nuclear || kQ()
    }
    var Hw = wQ(307);
    var bw = wQ(9280),
      Yw = wQ(9205),
      xw = wQ(9284),
      Aw = wQ(9275);
    const tw = "Reactor Controller",
      ew = "Reactor Port",
      Mw = "Battery Cell",
      Gw = ["fuel", "water", "waste"],
      pw = {
        fuel: ew,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      Cw = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      Sw = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      iw = "Reactor Frame",
      Ww = "Reactor Glass",
      Rw = {
        edge: [iw],
        cap: [Ww, ew],
        wall: [Ww, ew],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [tw]
      },
      Ow = {
        edge: [Mw],
        cap: [Mw],
        wall: [Mw],
        inside: [Mw],
        ctrl: [Mw]
      },
      sw = ["edge", "cap", "wall", "inside"],
      rw = ["Reactor Slag"];

    function Iw(QQ) {
      return rw.includes(Uw(QQ))
    }

    function Uw(QQ) {
      const FQ = QQ.indexOf("|");
      return FQ < 0 ? QQ : QQ.slice(0, FQ)
    }

    function Nw(QQ) {
      return Uw(QQ) === tw ? "reactor" : null
    }

    function Tw(QQ) {
      return Uw(QQ) !== ew ? null : QQ.endsWith("|Water") ? "water" : QQ.endsWith("|Waste") ? "waste" : "fuel"
    }

    function Kw(QQ) {
      const FQ = Tw(QQ);
      return null === FQ ? null : jw(pw[Gw[(Gw.indexOf(FQ) + 1) % Gw.length]], function(QQ) {
        return QQ.includes(zw)
      }(QQ))
    }
    const zw = "|meta|rot1|Formed",
      lw = new Set([iw, Ww, ew]);

    function jw(QQ, FQ) {
      var wQ;
      const LQ = Uw(QQ);
      if (!lw.has(LQ)) return QQ;
      if (LQ !== ew) return FQ ? LQ + zw : LQ;
      const qQ = null !== (wQ = Tw(QQ)) && void 0 !== wQ ? wQ : "fuel";
      return FQ ? "fuel" === qQ ? LQ + zw : `${LQ}${zw}|${"water"===qQ?"Water":"Waste"}` : pw[qQ]
    }

    function aw(QQ, FQ) {
      const wQ = qL(QQ, FQ);
      if ("Air" === wQ) return !1;
      const LQ = "reactor" === QQ ? Rw : Ow;
      return sw.some((QQ => LQ[QQ].includes(wQ))) || "reactor" === QQ && rw.includes(wQ)
    }

    function Xw(QQ) {
      return Sw[QQ]
    }

    function fw(QQ) {
      var FQ;
      return null !== (FQ = Cw[QQ]) && void 0 !== FQ ? FQ : Cw[1]
    }

    function Vw(QQ) {
      const [FQ, , wQ] = fw(QQ);
      return [wQ, 0, -FQ]
    }

    function hw(QQ, FQ, wQ, LQ, qQ, oQ) {
      return {
        ctrl: [QQ[0], QQ[1], QQ[2]],
        rot: Cw[FQ] ? FQ : 1,
        w: wQ,
        h: LQ,
        d: qQ,
        cu: oQ[0],
        cv: oQ[1]
      }
    }

    function Jw(QQ, FQ) {
      return "reactor" === QQ ? [Math.floor((FQ - 1) / 2), 0] : [0, 0]
    }

    function Ew(QQ, FQ, wQ, LQ, qQ) {
      let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ.rot;
      if (wQ === QQ.w && LQ === QQ.h && qQ === QQ.d && oQ === QQ.rot) return QQ;
      const [DQ] = Jw(FQ, QQ.w);
      if (QQ.cu === DQ && QQ.cv <= 1) return hw(QQ.ctrl, oQ, wQ, LQ, qQ, Jw(FQ, wQ));
      const kQ = (QQ, FQ) => Math.max(1, Math.min(FQ, QQ));
      return hw(QQ.ctrl, oQ, wQ, LQ, qQ, [kQ(QQ.cu, wQ - 2), 0 === QQ.cv ? 0 : kQ(QQ.cv, LQ - 2)])
    }
    const nw = 11,
      gw = 2 * nw + 1;
    new Uint8Array(gw * gw * gw);

    function Pw(QQ) {
      return QQ.w * QQ.h * QQ.d
    }

    function Zw(QQ) {
      const FQ = Vw(QQ.rot);
      return [QQ.ctrl[0] - FQ[0] * QQ.cu, QQ.ctrl[1] - QQ.cv, QQ.ctrl[2] - FQ[2] * QQ.cu]
    }

    function yw(QQ) {
      return QQ.cv * QQ.d * QQ.w + QQ.cu
    }

    function Bw(QQ, FQ) {
      const wQ = FQ % QQ.w,
        LQ = Math.floor(FQ / QQ.w) % QQ.d;
      return [wQ, Math.floor(FQ / (QQ.w * QQ.d)), LQ]
    }

    function dw(QQ, FQ) {
      const [wQ, LQ, qQ] = Bw(QQ, FQ), oQ = Zw(QQ), DQ = fw(QQ.rot), kQ = Vw(QQ.rot);
      return [oQ[0] + kQ[0] * wQ - DQ[0] * qQ, oQ[1] + LQ, oQ[2] + kQ[2] * wQ - DQ[2] * qQ]
    }

    function QL(QQ, FQ) {
      const wQ = Zw(QQ),
        LQ = fw(QQ.rot),
        qQ = Vw(QQ.rot),
        oQ = FQ[0] - wQ[0],
        DQ = FQ[2] - wQ[2],
        kQ = oQ * qQ[0] + DQ * qQ[2],
        vQ = -(oQ * LQ[0] + DQ * LQ[2]),
        mQ = FQ[1] - wQ[1];
      return kQ < 0 || kQ >= QQ.w || mQ < 0 || mQ >= QQ.h || vQ < 0 || vQ >= QQ.d ? -1 : (mQ * QQ.d + vQ) * QQ.w + kQ
    }

    function FL(QQ, FQ) {
      if (FQ === yw(QQ)) return "ctrl";
      const [wQ, LQ, qQ] = Bw(QQ, FQ), oQ = 0 === LQ || LQ === QQ.h - 1, DQ = Number(0 === wQ || wQ === QQ.w - 1) + Number(oQ) + Number(0 === qQ || qQ === QQ.d - 1);
      return DQ >= 2 ? "edge" : 1 === DQ ? oQ ? "cap" : "wall" : "inside"
    }

    function wL(QQ, FQ) {
      const [wQ, LQ, qQ] = Bw(QQ, FQ);
      return 0 === wQ || wQ === QQ.w - 1 || 0 === LQ || LQ === QQ.h - 1 || 0 === qQ || qQ === QQ.d - 1 ? -1 : ((LQ - 1) * (QQ.d - 2) + (qQ - 1)) * (QQ.w - 2) + (wQ - 1)
    }

    function LL(QQ, FQ) {
      const wQ = QQ.w - 2,
        LQ = QQ.d - 2,
        qQ = FQ % wQ + 1,
        oQ = Math.floor(FQ / wQ) % LQ + 1;
      return ((Math.floor(FQ / (wQ * LQ)) + 1) * QQ.d + oQ) * QQ.w + qQ
    }

    function qL(QQ, FQ) {
      const wQ = Uw(FQ);
      return "reactor" === QQ && wQ === tw ? iw : wQ
    }

    function oL(QQ, FQ, wQ) {
      const LQ = "ctrl" === FQ ? Uw(wQ) : qL(QQ, wQ);
      return ("reactor" === QQ ? Rw : Ow)[FQ].includes(LQ) ? "ok" : "Air" === LQ ? "missing" : aw(QQ, wQ) ? "wrong" : "blocked"
    }

    function DL(QQ, FQ) {
      return "battery" === QQ ? Mw : "inside" === FQ ? null : function(QQ, FQ) {
        if ("inside" === FQ || "ctrl" === FQ || "battery" === QQ) return null;
        return "edge" === FQ ? iw : Ww
      }(QQ, FQ)
    }
    const kL = {
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
      vL = "Collider",
      mL = "Laser",
      uL = "Star Alloy",
      HL = "Glow Dust",
      bL = [vL, "_Collider Focus"];

    function YL(QQ) {
      return bL.indexOf(Uw(QQ))
    }

    function xL(QQ) {
      return Uw(QQ) === mL
    }

    function AL(QQ) {
      return [
        [QQ[0], QQ[1], QQ[2]],
        [QQ[0], QQ[1] + 1, QQ[2]]
      ]
    }
    const tL = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function eL(QQ, FQ, wQ) {
      const LQ = tL[FQ];
      return [QQ[0] + LQ[0] * wQ, QQ[1], QQ[2] + LQ[2] * wQ]
    }

    function ML(QQ, FQ) {
      if (FQ[1] !== QQ[1]) return null;
      const wQ = FQ[0] - QQ[0],
        LQ = FQ[2] - QQ[2];
      if (0 !== wQ === (0 !== LQ)) return null;
      const qQ = Math.abs(wQ + LQ);
      if (qQ > kL.LASER_D) return null;
      return {
        dir: LQ < 0 ? 0 : wQ > 0 ? 1 : LQ > 0 ? 2 : 3,
        kD: qQ
      }
    }

    function GL(QQ, FQ, wQ) {
      const LQ = FQ => Math.abs(QQ[0] - FQ[0]) <= 1 && Math.abs(QQ[1] - FQ[1]) <= 1;
      return LQ(FQ) || LQ(wQ)
    }

    function pL(QQ, FQ) {
      return function(QQ, FQ, wQ, LQ) {
        return [0, 1, 2, 3].map((qQ => {
          for (let oQ = 1; oQ <= kL.LASER_D; oQ++) {
            const DQ = eL(QQ, qQ, oQ);
            if (GL([DQ[0], DQ[2]], FQ, wQ) || !LQ(DQ)) return !1
          }
          return !0
        }))
      }(AL(QQ)[1], FQ.spawnXZ, FQ.coreXZ, (QQ => QQ[1] >= bw.p && QQ[1] < bw.p + bw.r && QQ[0] >= FQ.minXZ[0] && QQ[0] <= FQ.maxXZ[0] && QQ[2] >= FQ.minXZ[1] && QQ[2] <= FQ.maxXZ[1]))
    }
    const cL = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function CL(QQ) {
      return Math.max(48 + 16 * QQ, eQ(QQ).machineAllowance)
    }
    const SL = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function iL(QQ) {
      const FQ = QQ.split("|")[0];
      return SL.includes(FQ) ? "Solar Panel" : FQ === xw.e ? "Fluid Pipe" : YL(FQ) >= 0 ? "Collider" : (wQ = FQ, cL.includes(wQ) ? FQ : null);
      var wQ
    }
    const WL = "buildAFactory2Game:solarPanelDescription";
    const RL = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function OL(QQ, FQ) {
      var wQ;
      return null !== (wQ = RL.find((wQ => {
        var LQ;
        return (null !== (LQ = QQ.level(wQ)) && void 0 !== LQ ? LQ : 0) >= FQ
      }))) && void 0 !== wQ ? wQ : null
    }
    const sL = "buildAFactory2Game:";
    let rL = null;
    const IL = {
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
      UL = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      NL = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      TL = {
        "Loot Chest": `${sL}lookRuinChestName`
      };

    function KL(QQ) {
      return "object" === typeof QQ && null !== QQ && "translationKey" in QQ && "string" === typeof QQ.translationKey ? QQ.translationKey : null
    }

    function zL(QQ, FQ) {
      var wQ;
      return null !== (wQ = KL(QQ.displayName(FQ))) && void 0 !== wQ ? wQ : `item:${(0,TQ.He)(FQ)}`
    }

    function lL(QQ, FQ) {
      var wQ, LQ, qQ, oQ;
      let DQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FQ;
      if ("Solar Panel" === iL(FQ)) return {
        name: KL(QQ.displayName("Solar Panel")),
        detail: WL,
        detailItem: null
      };
      const vQ = FQ.endsWith(" Ore"),
        mQ = (rL ??= new Set([...Object.keys((0, Yw.h)()), ...Object.keys((0, xw.p)())].map((QQ => QQ.split("|")[0]))), rL).has(FQ),
        uQ = vQ || mQ ? null : function(QQ) {
          var FQ;
          return QQ.endsWith(" Log") && !QQ.startsWith("Barkless ") ? "lookLog" : QQ.endsWith(" Sapling") ? "lookSapling" : QQ.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (FQ = IL[QQ]) && void 0 !== FQ ? FQ : null
        }(FQ);
      if (!QQ.isBlock(FQ) || !vQ && !mQ && null === uQ) return null;
      const HQ = null !== (wQ = null !== (LQ = TL[FQ]) && void 0 !== LQ ? LQ : KL(null !== (qQ = QQ.displayName(DQ)) && void 0 !== qQ ? qQ : QQ.displayName(FQ))) && void 0 !== wQ ? wQ : `item:${(0,TQ.He)(FQ)}`;
      if (null !== uQ) return {
        name: HQ,
        detail: `${sL}${uQ}`,
        detailItem: null
      };
      const bQ = null !== (oQ = UL[FQ]) && void 0 !== oQ ? oQ : kQ() ? NL[FQ] : void 0;
      if (mQ && void 0 !== bQ) return {
        name: HQ,
        detail: `${sL}${bQ}`,
        detailItem: null
      };
      const YQ = Dw[FQ];
      if (void 0 !== YQ) return {
        name: HQ,
        detail: `${sL}lookDeposit`,
        detailItem: zL(QQ, YQ)
      };
      const xQ = QQ.harvestLevel(FQ);
      if (vQ && "rock" === QQ.harvestType(FQ) && 0 !== xQ) {
        const FQ = OL(QQ, null !== xQ && void 0 !== xQ ? xQ : 0);
        if (FQ === RL[0]) return {
          name: HQ,
          detail: `${sL}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== FQ) return {
          name: HQ,
          detail: `${sL}lookPickaxe`,
          detailItem: zL(QQ, FQ)
        }
      }
      return {
        name: HQ,
        detail: KL(QQ.description(FQ)),
        detailItem: null
      }
    }

    function jL(QQ) {
      return QQ < bw.p - 24
    }
    const aL = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const XL = "Wrench",
      fL = "Nova Wrench";

    function VL(QQ) {
      return QQ === XL || QQ === fL
    }
    const hL = [...bw.M, "Belt Lift", "Belt Drop"];
    const JL = ["Belt Lift", "Belt Drop"],
      EL = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function nL(QQ) {
      return QQ.split("|")[0]
    }

    function gL(QQ) {
      const FQ = /\|rot(\d)/.exec(QQ);
      return FQ ? Number(FQ[1]) : 1
    }

    function PL(QQ) {
      return QQ % 4 + 1
    }

    function ZL(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === FQ && "" === wQ ? QQ : `${QQ}|meta|rot${FQ}${wQ}`
    }

    function yL(QQ) {
      return nL(QQ) === bw.z ? (0, bw.T)(QQ) ? "gateRight" : "gateLeft" : (0, bw.Z)(QQ)
    }

    function BL(QQ) {
      const FQ = nL(QQ),
        wQ = gL(QQ);
      if (bw.M.includes(FQ)) return (0, bw.P)(FQ, PL(wQ), null);
      if (FQ === bw.h) return (0, bw.eb)(PL(wQ), (0, bw.W)(QQ));
      if (FQ === bw.C) {
        const LQ = EL[(0, bw.Z)(QQ)];
        return null === LQ ? ZL(FQ, PL(wQ)) : ZL(FQ, wQ, bw.G[LQ])
      }
      return FQ === bw.z ? (0, bw.T)(QQ) ? ZL(FQ, PL(wQ)) : ZL(FQ, wQ, bw.o) : Aw.d.includes(FQ) && !JL.includes(FQ) || mw(FQ) ? ZL(FQ, PL(wQ)) : null
    }

    function dL(QQ) {
      return Aw.d.includes(QQ) || mw(QQ) || null !== iL(QQ)
    }

    function Qq(QQ) {
      return "Solar Panel" === iL(QQ)
    }
    const Fq = "buildAFactory2Game:",
      wq = {
        leftFront: `${Fq}lookSplitDetail_leftFront`,
        frontRight: `${Fq}lookSplitDetail_frontRight`,
        gateRight: `${Fq}lookGateDetail_gateRight`
      };

    function Lq(QQ, FQ) {
      var wQ;
      let LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const qQ = yL(QQ),
        oQ = null === qQ ? null : `${Fq}${qQ.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${qQ}`,
        DQ = null === qQ ? null : null !== (wQ = wq[qQ]) && void 0 !== wQ ? wQ : null;
      if (VL(FQ) && LQ) {
        const wQ = nL(QQ);
        return FQ === fL && kQ() && function(QQ) {
          return hL.includes(nL(QQ))
        }(QQ) ? {
          mode: oQ,
          detail: DQ,
          next: `${Fq}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: oQ,
          detail: DQ,
          next: dL(wQ) && !Qq(wQ) ? `${Fq}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const vQ = VL(FQ) ? BL(QQ) : null;
      if (null === vQ) return {
        mode: oQ,
        detail: DQ,
        next: null,
        nextState: null
      };
      const mQ = yL(vQ);
      return null === mQ || gL(vQ) !== gL(QQ) ? {
        mode: oQ,
        detail: DQ,
        next: `${Fq}lookWrenchTurn`,
        nextState: null
      } : {
        mode: oQ,
        detail: DQ,
        next: `${Fq}lookWrenchNext`,
        nextState: `${Fq}lookWrenchState_${mQ}`
      }
    }
    const qq = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const oq = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function Dq(QQ) {
      return [0, 1, 2, 3].map((FQ => 0 !== (QQ & 1 << FQ)))
    }

    function kq(QQ) {
      const FQ = [];
      for (let wQ = 8; wQ + 2 < QQ.length; wQ += 3) FQ.push([QQ[wQ], QQ[wQ + 1], QQ[wQ + 2]]);
      return {
        focus: [QQ[0], QQ[1], QQ[2]],
        lasers: Dq(QQ[3]),
        open: Dq(QQ[4]),
        live: Dq(QQ[5]),
        on: 1 === QQ[6],
        state: oq[QQ[7]],
        blockers: FQ
      }
    }
    const vq = "Arc Caster",
      mq = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      uq = (Object.values(mq), "Jet Chestplate"),
      Hq = "Nova Jet Chestplate",
      bq = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Yq = Object.values(bq);

    function xq(QQ, FQ, wQ) {
      return Math.min(function(QQ) {
        return kQ() && HQ(QQ) >= 5 ? 20 : 10
      }(wQ), Math.floor(function(QQ, FQ) {
        return Math.max(0, QQ) + (kQ() ? Math.max(0, FQ) : 0)
      }(QQ, FQ) / 5))
    }

    function Aq(QQ, FQ, wQ) {
      const LQ = xq(FQ, wQ, QQ),
        qQ = HQ(QQ),
        oQ = (qQ >= 3 ? 55 : qQ >= 1 ? 50 : QQ >= 8 ? 45 : 30) + LQ,
        DQ = Math.max(100 + LQ, 2 * oQ);
      return {
        arcDamage: oQ,
        arcPierce: QQ >= 7 ? 2 : 1,
        arcChain: QQ >= 10,
        barrierMax: (qQ >= 4 ? 100 : qQ >= 2 ? 90 : QQ >= 9 ? 80 : QQ >= 6 ? 60 : 40) + 5 * LQ,
        barrierRegenPerS: qQ >= 5 ? 20 : QQ >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * LQ,
        novaShieldRegenPerS: 32,
        bladeDamage: DQ,
        bladePunch: Math.round(.5 * DQ),
        forgeRank: LQ
      }
    }
    const tq = {
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
    var eq = wQ(36458),
      Mq = wQ(36238),
      Gq = wQ(36235),
      pq = wQ(17),
      cq = wQ(1641),
      Cq = wQ(1070),
      Sq = wQ.n(Cq);

    function iq(QQ) {
      return !0 === QQ.field
    }
    const Wq = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function Rq(QQ) {
      return Wq.has(QQ) ? `buildAFactory2Game:itemPlural_${(0,TQ.He)(QQ)}` : null
    }
    var Oq = wQ(1207),
      sq = wQ(1079),
      rq = wQ(1887),
      Iq = wQ(1873),
      Uq = wQ(36445),
      Nq = wQ(36454),
      Tq = wQ(22),
      Kq = wQ(36439);
    const zq = "baf2QuestView",
      lq = "baf2PlayerY",
      jq = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class aq {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = QQ, this.view = {
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
      set(QQ, FQ) {
        var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
        const uQ = JSON.stringify(QQ.baf2QuestName) === JSON.stringify(this.view.name),
          HQ = new Set(this.view.rows.filter((QQ => QQ.done)).map((QQ => QQ.id))),
          bQ = new Set(this.view.rows.filter((QQ => QQ.justFinished)).map((QQ => QQ.id))),
          YQ = QQ.baf2QuestSide,
          xQ = null !== YQ && !0 === QQ.baf2QuestSideFocus;
        let AQ = !1,
          tQ = 0;
        const eQ = QQ.baf2QuestSteps.map((QQ => {
            const FQ = gq(QQ, jq.has(QQ[0]) ? QQ[0] : "" + tQ++),
              wQ = uQ && FQ.done && !HQ.has(FQ.id);
            return FQ.justFinished = wQ || uQ && FQ.done && bQ.has(FQ.id), AQ ||= wQ, FQ
          })),
          MQ = nq(eQ);
        MQ >= 0 && !xQ && (eQ[MQ].current = !0);
        const GQ = !uQ && null !== QQ.baf2QuestName,
          pQ = JSON.stringify(YQ && [YQ[0], YQ[1]]),
          cQ = pQ === JSON.stringify(null !== (wQ = null === (LQ = this.view.side) || void 0 === LQ ? void 0 : LQ.name) && void 0 !== wQ ? wQ : null),
          CQ = null !== YQ && !this.sidesSeen.has(pQ);
        CQ && this.sidesSeen.add(pQ), this.serverTutorial = null !== (qQ = QQ.baf2QuestTutorial) && void 0 !== qQ ? qQ : "on", (null !== (oQ = QQ.baf2QuestTutorialSeq) && void 0 !== oQ ? oQ : 0) >= this.pickSeq && this.endPick();
        const SQ = !uQ || !cQ || QQ.baf2QuestTier !== this.view.tier;
        this.view = {
          name: QQ.baf2QuestName,
          rows: eQ,
          reward: QQ.baf2QuestReward,
          goal: QQ.baf2QuestGoal,
          pulse: this.view.pulse + (AQ || GQ ? 1 : 0),
          itemNames: FQ,
          side: YQ && {
            name: [YQ[0], YQ[1]],
            row: {
              ...gq(YQ[2], "side"),
              current: xQ
            },
            goal: null !== (DQ = YQ[3]) && void 0 !== DQ ? DQ : null
          },
          sideCameUpAt: CQ ? Date.now() : this.view.sideCameUpAt,
          tier: QQ.baf2QuestTier,
          core: QQ.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (kQ = QQ.baf2QuestAlso) && void 0 !== kQ ? kQ : [],
          depth: null !== (vQ = QQ.baf2QuestDepth) && void 0 !== vQ ? vQ : null,
          tutorial: null !== (mQ = this.pickedTutorial) && void 0 !== mQ ? mQ : this.serverTutorial,
          tutorialKnown: !0
        }, this.GA(), AQ && this.scheduleClear(), SQ && this.requestBook()
      }
      setTutorial(QQ) {
        return this.endPick(), this.pickedTutorial = QQ, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.GA()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: QQ
        }, this.GA(), this.pickSeq
      }
      onPlayerY(QQ) {
        const FQ = Math.floor(QQ);
        FQ !== this.playerY && (this.playerY = FQ, this.view.depth && Tq.l.GA(lq, FQ))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(QQ) {
        this.view = {
          ...this.view,
          chapters: QQ.baf2BookChapters
        }, this.GA()
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
            rows: this.view.rows.map((QQ => QQ.justFinished ? {
              ...QQ,
              justFinished: !1
            } : QQ))
          }, this.GA()
        }), 2400)
      }
      GA() {
        Tq.l.GA(zq, this.view, !0)
      }
    }

    function Xq(QQ, FQ) {
      return QQ.sideCameUpAt > 0 && FQ - QQ.sideCameUpAt < 2400
    }

    function fq(QQ) {
      return (null === QQ.name || Vq(QQ)) && null === QQ.side && null !== QQ.chapters
    }

    function Vq(QQ) {
      var FQ;
      return "quest_forgeOngoing" === (null === (FQ = QQ.name) || void 0 === FQ ? void 0 : FQ[0])
    }

    function hq(QQ) {
      return QQ.filter((QQ => !jq.has(QQ.key)))
    }

    function Jq(QQ) {
      return QQ.key.startsWith("stepCraft")
    }

    function Eq(QQ, FQ) {
      const wQ = new Set,
        LQ = QQ.side ? [...QQ.rows, QQ.side.row] : QQ.rows;
      for (const oQ of LQ)
        if (!oQ.done) {
          !oQ.item || FQ && !Jq(oQ) || wQ.add(oQ.item);
          for (const [QQ, FQ, LQ] of null !== (qQ = oQ.chips) && void 0 !== qQ ? qQ : []) {
            var qQ;
            FQ < LQ && wQ.add(QQ)
          }
        } return wQ
    }

    function nq(QQ) {
      const FQ = QQ.findIndex((QQ => !QQ.done && !QQ.away));
      return FQ >= 0 ? FQ : QQ.findIndex((QQ => !QQ.done))
    }

    function gq(QQ, FQ) {
      let [wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ] = QQ;
      return {
        id: FQ,
        key: wQ,
        params: LQ,
        item: qQ,
        amount: oQ,
        total: DQ,
        done: kQ,
        chips: null !== vQ && void 0 !== vQ ? vQ : null,
        current: !1,
        away: !0 === mQ,
        madeFor: null !== uQ && void 0 !== uQ ? uQ : [],
        also: null !== HQ && void 0 !== HQ ? HQ : [],
        justFinished: !1
      }
    }
    const Pq = "baf2QuestItems",
      Zq = new Set;
    let yq = new Set,
      Bq = null;

    function dq(QQ) {
      const FQ = NQ(QQ.tutorial),
        wQ = FQ ? Eq(QQ, !0) : Zq;
      "inventory" === pq.c.get("openInGameMenuName") ? (Bq = null, (0, Kq.w)(wQ)) : Bq = wQ;
      const LQ = FQ ? Eq(QQ, !1) : Zq;
      (0, Nq.b)(LQ, yq) || (yq = LQ, Tq.l.GA(Pq, yq))
    }

    function Qo() {
      return (0, Uq.c)(Pq, (() => yq))
    }
    var Fo = wQ(9125),
      wo = wQ(3149);

    function Lo(QQ) {
      const FQ = (0, wo.c)(QQ),
        wQ = void 0 === FQ ? void 0 : (0, Fo.displayNameOf)(FQ);
      return "object" === typeof wQ && null !== wQ && "translationKey" in wQ && "string" === typeof wQ.translationKey ? wQ.translationKey : `item:${(0,TQ.He)(QQ)}`
    }

    function qo(QQ, FQ) {
      return QQ(Lo(FQ))
    }
    const oo = [{
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

    function Do(QQ, FQ) {
      return [`Deposit Seed (${QQ})`, {
        item: Dw[`${QQ} Deposit`],
        amount: FQ
      }]
    }
    const ko = Object.fromEntries([Do("Coal", 8), Do("Iron", 8), Do("Copper", 8), Do("Gold", 6), Do("Voltite", 4), Do("Uranium", 4)]),
      vo = "Relay Coil",
      mo = new Map;

    function uo(QQ) {
      let FQ = mo.get(QQ);
      if (!FQ) {
        const wQ = Math.max(1, QQ);
        FQ = oo.filter((QQ => {
          var FQ;
          return wQ >= QQ.fromTier && wQ <= (null !== (FQ = QQ.untilTier) && void 0 !== FQ ? FQ : 1 / 0)
        })).map((QQ => QQ.later && wQ >= QQ.later.tier ? {
          ...QQ,
          weight: QQ.later.weight
        } : QQ)), mo.set(QQ, FQ)
      }
      return FQ
    }

    function Ho(QQ) {
      return uo(QQ).some((QQ => {
        let {
          item: FQ
        } = QQ;
        return FQ === vo
      }))
    }

    function bo(QQ) {
      return QQ.startsWith("Deposit Seed (")
    }

    function Yo(QQ, FQ) {
      const wQ = uo(QQ);
      return FQ ? wQ.filter((QQ => FQ(QQ.item))) : wQ
    }

    function xo(QQ) {
      return QQ.reduce(((QQ, FQ) => QQ + FQ.weight), 0)
    }

    function Ao(QQ, FQ) {
      const wQ = Yo(QQ, FQ),
        LQ = xo(wQ);
      return wQ.map((QQ => ({
        find: QQ,
        chance: QQ.weight / LQ
      })))
    }
    const to = 6e4,
      eo = new Intl.NumberFormat("en-US");

    function Mo(QQ, FQ) {
      const wQ = QQ >= 10 ? Math.round(QQ) : Math.round(10 * QQ) / 10;
      return 0 === wQ ? "0" : `${FQ}${eo.format(wQ)}`
    }

    function Go(QQ) {
      return QQ < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? eo.format(QQ) : QQ < 1e6 ? `${QQ<1e5?Math.floor(QQ/100)/10:Math.floor(QQ/1e3)}k` : Math.floor(QQ / 1e5) / 10 + "M"
    }

    function po(QQ) {
      return QQ < 0 ? "\u2212" + -QQ : String(QQ)
    }

    function co(QQ, FQ) {
      const wQ = Math.max(1, Math.round(FQ));
      if (wQ < 60) return QQ("buildAFactory2Game:durationSeconds", {
        seconds: String(wQ)
      });
      const LQ = Math.round(wQ / 60);
      if (LQ < 60) return QQ("buildAFactory2Game:durationMinutes", {
        minutes: String(LQ)
      });
      const qQ = String(Math.floor(LQ / 60));
      return LQ % 60 === 0 ? QQ("buildAFactory2Game:durationWholeHours", {
        hours: qQ
      }) : QQ("buildAFactory2Game:durationHours", {
        hours: qQ,
        minutes: String(LQ % 60)
      })
    }
    const Co = "(max-height: 420px), (max-width: 650px)";

    function So() {
      return "undefined" !== typeof window && window.matchMedia(Co).matches
    }

    function io(QQ) {
      const FQ = window.matchMedia(Co),
        wQ = () => {
          QQ(FQ.matches)
        };
      return FQ.addEventListener("change", wQ), () => {
        FQ.removeEventListener("change", wQ)
      }
    }
    var Wo = wQ(1107);

    function Ro(QQ, FQ) {
      return null !== QQ && QQ > FQ + 1
    }

    function Oo(QQ) {
      const FQ = 100 * QQ;
      return String(FQ <= 0 || FQ >= 1 ? Math.round(FQ) : Math.max(.1, Math.round(10 * FQ) / 10))
    }

    function so(QQ) {
      let {
        item: FQ,
        amount: wQ
      } = QQ;
      return (0, Wo.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: FQ,
            amount: 0
          })
        }), wQ > 1 && (0, Wo.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", wQ]
        })]
      })
    }

    function ro(QQ) {
      let {
        label: FQ,
        names: wQ
      } = QQ;
      const [qQ, oQ] = (0, LQ.useState)(!1), DQ = wQ.join(" / ");
      return (0, Wo.jsxs)(Wo.Fragment, {
        children: [(0, Wo.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: DQ,
          "aria-expanded": qQ,
          onClick: () => {
            oQ(!qQ)
          },
          children: FQ
        }), qQ && (0, Wo.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: DQ
        })]
      })
    }

    function Io(QQ) {
      let {
        tier: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), {
        key: LQ,
        params: qQ
      } = YQ(FQ, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), oQ = wQ(`buildAFactory2Game:${LQ}`, qQ);
      return (0, Wo.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, Wo.jsx)(sq.c, {
          name: "lock"
        }), oQ]
      })
    }
    const Uo = (0, LQ.createContext)(null);

    function No() {
      const {
        t: QQ
      } = (0, Oq.y)(), FQ = (0, LQ.useContext)(Uo);
      return (0, LQ.useEffect)((() => null === FQ || void 0 === FQ ? void 0 : FQ()), [FQ]), (0, Wo.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: QQ("buildAFactory2Game:recipeForQuest"),
        "aria-label": QQ("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function To(QQ) {
      let {
        title: FQ,
        count: wQ,
        children: qQ,
        startOpen: oQ = !0
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), [kQ, vQ] = (0, LQ.useState)((() => oQ && !So())), [mQ, uQ] = (0, LQ.useState)(0), HQ = (0, LQ.useCallback)((() => (uQ((QQ => QQ + 1)), () => {
        uQ((QQ => QQ - 1))
      })), []);
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2Recipes", {
          Open: kQ
        }),
        children: [(0, Wo.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            vQ(!kQ)
          },
          "aria-expanded": kQ,
          children: [DQ("buildAFactory2Game:recipesToggle", {
            title: FQ,
            count: String(wQ)
          }), (0, Wo.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: kQ ? "\u25be" : "\u25b8"
          })]
        }), kQ && (0, Wo.jsxs)(Uo.Provider, {
          value: HQ,
          children: [(0, Wo.jsx)("ul", {
            className: "Baf2RecipeList",
            children: qQ
          }), mQ > 0 && (0, Wo.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, Wo.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), DQ("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const Ko = "buildAFactory2Game:",
      zo = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const jo = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      ao = {
        "Uranium Grit": oQ,
        "Raw Uranium": oQ
      };

    function Xo(QQ) {
      var FQ;
      return null !== (FQ = ao[QQ]) && void 0 !== FQ ? FQ : Math.max(ZQ(QQ), jo[QQ] ? ZQ(jo[QQ]) : 1, function(QQ) {
        const FQ = qQ.findIndex((FQ => FQ.cost.some((FQ => FQ.item === QQ))));
        return FQ > oQ ? FQ : 1
      }(QQ))
    }

    function fo(QQ, FQ) {
      return Vo(FQ) ? Xo(FQ) : function(QQ) {
        if (zo.has(QQ)) return 1;
        const FQ = qQ.findIndex((FQ => FQ.newDeposits.some((FQ => {
          let {
            block: wQ
          } = FQ;
          return wQ === QQ
        }))));
        return FQ < 0 ? 1 : FQ + 1
      }(QQ)
    }

    function Vo(QQ) {
      return QQ in ao || HQ(Xo(QQ)) > 0
    }

    function ho(QQ, FQ) {
      return yF(QQ, {
        coupled: !1,
        taught: null,
        atomic: kQ() && FQ >= 11
      }).recipes
    }

    function Jo(QQ, FQ) {
      const wQ = bQ(QQ, FQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HQ(QQ) > 0);
      return "open" === wQ || "locked" === wQ
    }

    function Eo(QQ, FQ) {
      return QQ.map(((QQ, wQ) => ({
        value: QQ,
        idx: wQ,
        tier: FQ(QQ)
      }))).sort(((QQ, FQ) => QQ.tier - FQ.tier || QQ.idx - FQ.idx)).map((QQ => {
        let {
          value: FQ
        } = QQ;
        return FQ
      }))
    }

    function no(QQ, FQ, wQ) {
      const LQ = bQ(QQ, FQ);
      if ("hidden" === LQ || "open" === LQ) return null;
      if ("teaser" === LQ) return {
        tag: {
          translationKey: `${Ko}${wQ?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${Ko}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const qQ = YQ(QQ, {
          tier: wQ ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        oQ = YQ(QQ, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${Ko}${qQ.key}`,
          params: qQ.params
        },
        reason: {
          translationKey: `${Ko}${oQ.key}`,
          params: oQ.params
        }
      }
    }

    function go(QQ) {
      return !bo(QQ)
    }

    function Po(QQ) {
      let {
        seconds: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)();
      return (0, Wo.jsx)(To, {
        title: wQ("buildAFactory2Game:recipesCuts", {
          seconds: FQ
        }),
        count: 1,
        children: (0, Wo.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Wo.jsx)(so, {
            item: "Maple Sapling",
            amount: 1
          }), (0, Wo.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Wo.jsx)(so, {
            item: "Maple Log",
            amount: 1
          }), (0, Wo.jsx)("span", {
            className: "Baf2RecipeName",
            children: wQ("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Zo(QQ) {
      let {
        fertilised: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)();
      return (0, Wo.jsxs)(To, {
        title: wQ("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, Wo.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, Wo.jsx)(so, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Wo.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Wo.jsx)(so, {
            item: "Wheat",
            amount: 1
          }), (0, Wo.jsx)(so, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, Wo.jsx)("span", {
            className: "Baf2RecipeName",
            children: wQ("buildAFactory2Game:recipeField")
          })]
        }), (0, Wo.jsxs)("li", {
          className: Sq()("Baf2Recipe", {
            InUse: FQ
          }),
          children: [(0, Wo.jsx)(so, {
            item: "Fertiliser",
            amount: 1
          }), (0, Wo.jsx)("span", {
            className: "Baf2RecipeName",
            children: wQ("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function yo(QQ) {
      let {
        tier: FQ,
        seconds: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = function(QQ) {
        return QQ >= 5 ? CF : cF
      }(FQ);
      return (0, Wo.jsx)(To, {
        title: LQ("buildAFactory2Game:recipesBringsUp", {
          seconds: wQ
        }),
        count: qQ.length,
        children: qQ.map((QQ => {
          let {
            item: FQ,
            chance: wQ
          } = QQ;
          return (0, Wo.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Wo.jsx)(so, {
              item: FQ,
              amount: 1
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeName",
              children: qo(LQ, FQ)
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: LQ("buildAFactory2Game:recipeChance", {
                percent: Oo(wQ)
              })
            })]
          }, FQ)
        }))
      })
    }

    function Bo(QQ) {
      let {
        tier: FQ,
        seconds: wQ,
        noSeeds: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), oQ = Qo(), DQ = Ao(FQ, LQ ? go : void 0), kQ = LQ && Ao(FQ).length > DQ.length, vQ = Ho(FQ);
      return (0, Wo.jsxs)(To, {
        title: qQ("buildAFactory2Game:recipesRecycles", {
          seconds: wQ
        }),
        count: DQ.length,
        children: [DQ.map((QQ => {
          let {
            find: FQ,
            chance: wQ
          } = QQ;
          return (0, Wo.jsxs)("li", {
            className: "Baf2Recipe",
            children: [oQ.has(FQ.item) && (0, Wo.jsx)(No, {}), (0, Wo.jsx)(so, {
              item: FQ.item,
              amount: FQ.amount
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeName",
              children: qo(qQ, FQ.item)
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: qQ("buildAFactory2Game:recipeChance", {
                percent: Oo(wQ)
              })
            })]
          }, FQ.item)
        })), kQ && (0, Wo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Wo.jsx)("span", {
            className: "Baf2RecipeName",
            children: qQ("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), vQ && (0, Wo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Wo.jsx)("span", {
            className: "Baf2RecipeName",
            children: qQ("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function QD(QQ) {
      let {
        tier: FQ,
        seconds: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = Object.entries(ko).filter((QQ => {
        let [, {
          item: wQ
        }] = QQ;
        return Jo(Xo(wQ), FQ, Vo(wQ))
      }));
      return (0, Wo.jsx)(To, {
        title: LQ("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: wQ
        }),
        count: qQ.length,
        children: qQ.map((QQ => {
          let [FQ, {
            item: wQ,
            amount: qQ
          }] = QQ;
          return (0, Wo.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, Wo.jsx)(so, {
              item: FQ,
              amount: 1
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Wo.jsx)(so, {
              item: wQ,
              amount: qQ
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeName",
              children: qo(LQ, wQ)
            })]
          }, FQ)
        }))
      })
    }

    function FD(QQ) {
      let {
        tier: FQ,
        seconds: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = Qo(), oQ = Eo(Object.entries(Dw).filter((QQ => {
        let [wQ, LQ] = QQ;
        return Jo(fo(wQ, LQ), FQ, Vo(LQ))
      })), (QQ => {
        let [FQ, wQ] = QQ;
        return fo(FQ, wQ)
      }));
      return (0, Wo.jsx)(To, {
        title: LQ("buildAFactory2Game:recipesDigs", {
          seconds: wQ
        }),
        count: oQ.length,
        children: oQ.map((QQ => {
          let [wQ, oQ] = QQ;
          const DQ = fo(wQ, oQ),
            kQ = DQ > FQ ? DQ : null,
            vQ = kw[wQ],
            mQ = null === kQ && qQ.has(oQ);
          return (0, Wo.jsxs)("li", {
            className: Sq()("Baf2Recipe", {
              Locked: null !== kQ,
              Far: Ro(kQ, FQ)
            }),
            children: [mQ && (0, Wo.jsx)(No, {}), (0, Wo.jsx)(so, {
              item: wQ,
              amount: 1
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Wo.jsx)(so, {
              item: oQ,
              amount: 1
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeName",
              children: qo(LQ, oQ)
            }), void 0 !== vQ && (0, Wo.jsx)("span", {
              className: "Baf2RecipeMore",
              children: LQ("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / vQ)
              })
            }), null !== kQ && (0, Wo.jsx)(Io, {
              tier: kQ
            })]
          }, wQ)
        }))
      })
    }

    function wD(QQ) {
      var FQ;
      let {
        def: wQ,
        seconds: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)();
      return (0, Wo.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Wo.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (FQ = wQ.fuels) && void 0 !== FQ ? FQ : []).map((QQ => (0, Wo.jsx)(so, {
            item: QQ,
            amount: 1
          }, QQ))), (0, Wo.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, Wo.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Wo.jsx)(sq.c, {
              name: "bolt"
            }), qQ("buildAFactory2Game:recipePower", {
              power: yQ(wQ.powerMade),
              seconds: LQ
            })]
          })]
        })
      })
    }

    function LD(QQ) {
      let {
        def: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)();
      return (0, Wo.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Wo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Wo.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Wo.jsx)(sq.c, {
              name: "bolt"
            }), wQ("buildAFactory2Game:recipeMixer", {
              cryo: Mo((0, BQ.K)(FQ, FQ.cryoMade), "")
            })]
          })
        })
      })
    }

    function qD(QQ) {
      let {
        def: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)();
      return (0, Wo.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, Wo.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, Wo.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, Wo.jsx)(sq.c, {
              name: "bolt"
            }), wQ("buildAFactory2Game:recipeCondenser", {
              power: Mo((0, BQ.K)(FQ, FQ.powerPerOp), ""),
              water: Mo((0, BQ.K)(FQ, FQ.fluidMade), "")
            })]
          })
        })
      })
    }

    function oD(QQ) {
      let {
        kind: FQ,
        def: wQ,
        input: LQ,
        tier: qQ,
        noSeeds: oQ = !1
      } = QQ;
      const DQ = String(wQ.opMs / 1e3);
      return ww(wQ) ? (0, Wo.jsx)(Po, {
        seconds: DQ
      }) : wQ.field ? (0, Wo.jsx)(Zo, {
        fertilised: null !== LQ
      }) : wQ.table ? (0, Wo.jsx)(yo, {
        tier: qQ,
        seconds: DQ
      }) : wQ.recycles ? (0, Wo.jsxs)(Wo.Fragment, {
        children: [(0, Wo.jsx)(Bo, {
          tier: qQ,
          seconds: DQ,
          noSeeds: oQ
        }), (0, Wo.jsx)(QD, {
          tier: qQ,
          seconds: DQ
        })]
      }) : Fw(wQ) ? (0, Wo.jsx)(FD, {
        tier: qQ,
        seconds: DQ
      }) : void 0 !== wQ.fluidMade ? (0, Wo.jsx)(qD, {
        def: wQ
      }) : void 0 !== wQ.cryoMade ? (0, Wo.jsx)(LD, {
        def: wQ
      }) : void 0 !== wQ.powerMade ? (0, Wo.jsx)(wD, {
        def: wQ,
        seconds: DQ
      }) : (0, Wo.jsx)(DD, {
        kind: FQ,
        input: LQ,
        tier: qQ,
        seconds: DQ
      })
    }

    function DD(QQ) {
      let {
        kind: FQ,
        input: wQ,
        tier: LQ,
        seconds: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)(), DQ = Qo(), kQ = Eo(function(QQ) {
        const FQ = new Map;
        for (const qQ of QQ) {
          var wQ, LQ;
          const QQ = [qQ.output, qQ.outputAmount, qQ.inputAmount, null === (wQ = qQ.bonus) || void 0 === wQ ? void 0 : wQ.item, null === (LQ = qQ.bonus) || void 0 === LQ ? void 0 : LQ.chance].join("|"),
            oQ = FQ.get(QQ);
          oQ ? oQ.inputs.push(qQ.input) : FQ.set(QQ, {
            inputs: [qQ.input],
            inputAmount: qQ.inputAmount,
            output: qQ.output,
            outputAmount: qQ.outputAmount,
            bonus: qQ.bonus
          })
        }
        return [...FQ.values()]
      }(ho(FQ, LQ).filter(uw)), (QQ => Xo(QQ.output))).filter((QQ => Jo(Xo(QQ.output), LQ, Vo(QQ.output))));
      return (0, Wo.jsx)(To, {
        title: oQ("buildAFactory2Game:recipesEach", {
          seconds: qQ
        }),
        count: kQ.length,
        children: kQ.map((QQ => {
          const FQ = null !== wQ && QQ.inputs.includes(wQ),
            qQ = QQ.inputs.length > 3 ? [FQ ? wQ : QQ.inputs[0]] : QQ.inputs,
            kQ = Xo(QQ.output) > LQ ? Xo(QQ.output) : null,
            vQ = null === kQ && DQ.has(QQ.output);
          return (0, Wo.jsxs)("li", {
            className: Sq()("Baf2Recipe", {
              InUse: FQ,
              Locked: null !== kQ,
              Far: Ro(kQ, LQ)
            }),
            children: [vQ && (0, Wo.jsx)(No, {}), qQ.map(((FQ, wQ) => (0, Wo.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [wQ > 0 && (0, Wo.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, Wo.jsx)(so, {
                item: FQ,
                amount: QQ.inputAmount
              })]
            }, FQ))), qQ.length < QQ.inputs.length && (0, Wo.jsx)(ro, {
              label: oQ("buildAFactory2Game:recipeMore", {
                count: String(QQ.inputs.length - qQ.length)
              }),
              names: QQ.inputs.filter((QQ => !qQ.includes(QQ))).map((QQ => qo(oQ, QQ)))
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, Wo.jsx)(so, {
              item: QQ.output,
              amount: QQ.outputAmount
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeName",
              children: qo(oQ, QQ.output)
            }), QQ.bonus && (0, Wo.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [oQ("buildAFactory2Game:recipeBonus", {
                percent: Oo(QQ.bonus.chance)
              }), (0, Wo.jsx)(so, {
                item: QQ.bonus.item,
                amount: 1
              })]
            }), null !== kQ && (0, Wo.jsx)(Io, {
              tier: kQ
            })]
          }, `${QQ.output}|${QQ.inputs[0]}`)
        }))
      })
    }

    function kD(QQ) {
      let {
        taught: FQ,
        tier: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = Qo(), oQ = Eo(Object.values(PF), (QQ => QQ.tier)).filter((QQ => Jo(QQ.tier, wQ)));
      return (0, Wo.jsx)(To, {
        title: LQ("buildAFactory2Game:benchCanMake"),
        count: oQ.length,
        startOpen: !1,
        children: oQ.map((QQ => {
          const oQ = QQ.tier > wQ,
            DQ = !oQ && qQ.has(QQ.output);
          return (0, Wo.jsxs)("li", {
            className: Sq()("Baf2Recipe", {
              InUse: QQ.output === FQ,
              Locked: oQ,
              Far: Ro(oQ ? QQ.tier : null, wQ)
            }),
            children: [DQ && (0, Wo.jsx)(No, {}), (0, Wo.jsx)(so, {
              item: QQ.output,
              amount: QQ.outputAmount
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeName",
              children: qo(LQ, QQ.output)
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), QQ.inputs.map((QQ => (0, Wo.jsx)(so, {
              item: QQ.item,
              amount: QQ.amount
            }, QQ.item))), oQ && (0, Wo.jsx)(Io, {
              tier: QQ.tier
            })]
          }, QQ.output)
        }))
      })
    }
    var vD, mD, uD, HD, bD;
    const YD = TF.Generator,
      xD = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      AD = 1e3 * (null !== (vD = YD.powerMade) && void 0 !== vD ? vD : 0) / YD.opMs,
      tD = Math.min(...(null !== (mD = YD.fuels) && void 0 !== mD ? mD : []).map((QQ => ow[QQ]))) / 1e3,
      eD = TF["Volt Engine"],
      MD = 1e3 * (null !== (uD = eD.powerMade) && void 0 !== uD ? uD : 0) / eD.opMs,
      GD = ow[null !== (HD = null === (bD = eD.fuels) || void 0 === bD ? void 0 : bD[0]) && void 0 !== HD ? HD : ""] / 1e3;

    function pD(QQ) {
      let {
        item: FQ,
        label: wQ,
        value: LQ,
        note: qQ,
        dim: oQ
      } = QQ;
      return (0, Wo.jsxs)("li", {
        className: Sq()("Baf2PowerRow", {
          Dim: oQ
        }),
        children: [(0, Wo.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: FQ,
            amount: 0
          })
        }), (0, Wo.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, Wo.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: wQ
          }), qQ && (0, Wo.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: qQ
          })]
        }), (0, Wo.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: LQ
        })]
      })
    }

    function cD(QQ, FQ, wQ, LQ) {
      var qQ;
      const oQ = void 0 === LQ ? TF[QQ] : function(QQ, FQ) {
          if (null === FQ) return QQ;
          let wQ = nQ.get(FQ);
          return wQ || (wQ = {
            ...QQ,
            powerPerOp: EQ(QQ, FQ),
            farmMob: FQ
          }, nQ.set(FQ, wQ)), wQ
        }(TF[QQ], LQ),
        DQ = FQ && oQ.couplable ? VF(oQ, wQ) : oQ;
      return 1e3 * (null !== (qQ = DQ.powerPerOp) && void 0 !== qQ ? qQ : 0) / DQ.opMs
    }

    function CD(QQ) {
      var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ;
      let {
        message: mQ
      } = QQ;
      const {
        t: uQ
      } = (0, Oq.y)(), HQ = (QQ, FQ) => uQ("buildAFactory2Game:powerPerSecond", {
        rate: Mo(QQ, FQ)
      }), [bQ, YQ] = mQ.baf2PowerGenerators, xQ = mQ.baf2PowerGeneratorFuel, AQ = mQ.baf2PowerSunPanels, tQ = null !== (FQ = mQ.baf2PowerSunShare) && void 0 !== FQ ? FQ : 1, eQ = mQ.baf2PowerVaults, MQ = mQ.baf2PowerUsers, [GQ, pQ] = null !== (wQ = mQ.baf2PowerEngines) && void 0 !== wQ ? wQ : [0, 0], cQ = null !== (LQ = mQ.baf2PowerEngineCells) && void 0 !== LQ ? LQ : 0, CQ = null !== (qQ = mQ.baf2PowerPads) && void 0 !== qQ ? qQ : 0, SQ = null !== (oQ = mQ.baf2PowerCharge) && void 0 !== oQ ? oQ : 0, [iQ, WQ] = null !== (DQ = mQ.baf2PowerReactors) && void 0 !== DQ ? DQ : [0, 0], [RQ, OQ] = null !== (kQ = mQ.baf2PowerBatteries) && void 0 !== kQ ? kQ : [0, 0];
      let sQ = uQ("buildAFactory2Game:powerEngineCells", {
        amount: String(cQ)
      });
      cQ > 0 && pQ > 0 && (sQ = uQ("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(cQ),
        time: co(uQ, cQ * GD / pQ)
      }));
      let rQ = uQ("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(xQ)
      });
      xQ > 0 && YQ > 0 && (rQ = uQ("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(xQ),
        time: co(uQ, xQ * tD / YQ)
      }));
      const IQ = bQ + GQ + AQ + iQ;
      return (0, Wo.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, Wo.jsxs)("section", {
          children: [(0, Wo.jsxs)("h3", {
            children: [uQ("buildAFactory2Game:powerMaking"), (0, Wo.jsx)("span", {
              children: HQ(mQ.baf2PowerMadePerS, "+")
            })]
          }), (0, Wo.jsxs)("ul", {
            children: [0 === IQ && (0, Wo.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: uQ("buildAFactory2Game:powerNoMakers")
            }), bQ > 0 && (0, Wo.jsx)(pD, {
              item: "Generator",
              label: `${qo(uQ,"Generator")} \xd7${bQ}`,
              note: `${uQ("buildAFactory2Game:powerRunning",{amount:String(YQ)})} \xb7 ${rQ}`,
              value: HQ(YQ * AD, "+"),
              dim: 0 === YQ
            }), GQ > 0 && (0, Wo.jsx)(pD, {
              item: "Volt Engine",
              label: `${qo(uQ,"Volt Engine")} \xd7${GQ}`,
              note: `${uQ("buildAFactory2Game:powerRunning",{amount:String(pQ)})} \xb7 ${sQ}`,
              value: HQ(pQ * MD, "+"),
              dim: 0 === pQ
            }), AQ > 0 && (0, Wo.jsx)(pD, {
              item: "Solar Panel",
              label: `${qo(uQ,"Solar Panel")} \xd7${AQ}`,
              note: uQ(tQ < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: HQ(4 * AQ * tQ, "+")
            }), iQ > 0 && (0, Wo.jsx)(pD, {
              item: "Reactor Frame",
              label: `${uQ("buildAFactory2Game:powerReactors")} \xd7${iQ}`,
              note: uQ("buildAFactory2Game:powerRunning", {
                amount: String(WQ)
              }),
              value: HQ(null !== (vQ = mQ.baf2PowerReactorPerS) && void 0 !== vQ ? vQ : 0, "+"),
              dim: 0 === WQ
            })]
          })]
        }), (0, Wo.jsxs)("section", {
          children: [(0, Wo.jsxs)("h3", {
            children: [uQ("buildAFactory2Game:powerStorage"), (0, Wo.jsx)("span", {
              children: yQ(mQ.baf2PowerCap)
            })]
          }), (eQ > 0 || RQ > 0) && (0, Wo.jsxs)("ul", {
            children: [eQ > 0 && (0, Wo.jsx)(pD, {
              item: "Charge Vault",
              label: `${qo(uQ,"Charge Vault")} \xd7${eQ}`,
              value: `+${yQ(8e3*eQ)}`
            }), RQ > 0 && (0, Wo.jsx)(pD, {
              item: "Battery Cell",
              label: `${uQ("buildAFactory2Game:powerBatteries")} \xd7${RQ}`,
              value: `+${yQ(OQ)}`
            })]
          })]
        }), (0, Wo.jsxs)("section", {
          children: [(0, Wo.jsxs)("h3", {
            children: [uQ("buildAFactory2Game:powerUsing"), (0, Wo.jsx)("span", {
              children: HQ(mQ.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, Wo.jsxs)("ul", {
            children: [0 === MQ.length && 0 === CQ && 0 === SQ && (0, Wo.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: uQ("buildAFactory2Game:powerNoUsers")
            }), MQ.map((QQ => {
              let [FQ, wQ, LQ, qQ, oQ = 1, DQ] = QQ, kQ = wQ ? uQ(xD[oQ - 1], {
                name: qo(uQ, FQ)
              }) : qo(uQ, FQ);
              return void 0 !== DQ && (kQ = uQ("buildAFactory2Game:powerFarmName", {
                name: kQ,
                mob: uQ(VQ(DQ))
              })), (0, Wo.jsx)(pD, {
                item: FQ,
                label: `${kQ} \xd7${LQ}`,
                note: uQ("buildAFactory2Game:powerRunning", {
                  amount: String(qQ)
                }),
                value: qQ > 0 ? HQ(qQ * cD(FQ, wQ, oQ, DQ), "\u2212") : uQ("buildAFactory2Game:powerIdle"),
                dim: 0 === qQ
              }, `${FQ}|${wQ}|${oQ}|${DQ}`)
            })), CQ > 0 && (0, Wo.jsx)(pD, {
              item: "Charging Pad",
              label: `${qo(uQ,"Charging Pad")} \xd7${CQ}`,
              value: uQ("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), SQ > 0 && (0, Wo.jsx)(pD, {
              item: "Homestead Core",
              label: uQ("buildAFactory2Game:powerCharge"),
              value: HQ(SQ, "\u2212")
            }), mQ.baf2PowerStarved > 0 && (0, Wo.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, Wo.jsx)(sq.c, {
                name: "triangle-exclamation"
              }), uQ("buildAFactory2Game:powerStarved", {
                amount: String(mQ.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var SD = wQ(4376),
      iD = wQ(1451);
    class WD {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(QQ) {
        this.message = QQ;
        for (const FQ of this.listeners) FQ()
      }
      get() {
        return this.message
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }
    class RD extends WD {}

    function OD(QQ, FQ) {
      const wQ = () => {
          const wQ = QQ.get();
          if (!wQ || !FQ) return wQ;
          const [LQ, qQ, oQ] = wQ.baf2PowerAt;
          return LQ === FQ[0] && qQ === FQ[1] && oQ === FQ[2] ? wQ : null
        },
        [qQ, oQ] = (0, LQ.useState)(wQ);
      return (0, LQ.useEffect)((() => (oQ(wQ()), QQ.subscribe((() => {
        oQ(wQ())
      })))), [QQ, ...null !== FQ && void 0 !== FQ ? FQ : []]), qQ
    }

    function sD(QQ) {
      return {
        stored: QQ.baf2PowerStored,
        cap: QQ.baf2PowerCap,
        madePerS: QQ.baf2PowerMadePerS,
        usedPerS: QQ.baf2PowerUsedPerS
      }
    }

    function rD(QQ) {
      let {
        stored: FQ,
        cap: wQ
      } = QQ;
      return (0, Wo.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, Wo.jsx)("div", {
          style: {
            width: `${Math.min(100,100*FQ/Math.max(1,wQ))}%`
          }
        })
      })
    }

    function ID(QQ) {
      let {
        figures: FQ,
        labelled: wQ = !1
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = FQ.madePerS - FQ.usedPerS, {
        text: oQ,
        draining: DQ
      } = function(QQ, FQ) {
        let {
          stored: wQ,
          cap: LQ,
          madePerS: qQ,
          usedPerS: oQ
        } = FQ;
        const DQ = qQ - oQ;
        return wQ >= LQ ? {
          text: QQ("buildAFactory2Game:powerFull"),
          draining: !1
        } : DQ > .05 ? {
          text: QQ("buildAFactory2Game:powerFullIn", {
            time: co(QQ, (LQ - wQ) / DQ)
          }),
          draining: !1
        } : DQ < -.05 ? {
          text: QQ("buildAFactory2Game:powerEmptyIn", {
            time: co(QQ, wQ / -DQ)
          }),
          draining: !0
        } : {
          text: QQ("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(LQ, FQ);
      return (0, Wo.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, Wo.jsx)(rD, {
          stored: FQ.stored,
          cap: FQ.cap
        }), (0, Wo.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, Wo.jsx)("span", {
            children: LQ(wQ ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: yQ(FQ.stored),
              cap: yQ(FQ.cap)
            })
          }), (0, Wo.jsxs)("span", {
            className: Sq()("Baf2PowerNet", {
              Draining: DQ
            }),
            children: [LQ("buildAFactory2Game:powerPerSecond", {
              rate: Mo(Math.abs(qQ), qQ < 0 ? "\u2212" : "+")
            }), " \xb7 ", oQ]
          })]
        })]
      })
    }

    function UD(QQ) {
      let {
        stored: FQ,
        cap: wQ,
        rates: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)();
      return LQ ? (0, Wo.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Wo.jsx)(ID, {
          figures: {
            stored: FQ,
            cap: wQ,
            madePerS: LQ[0],
            usedPerS: LQ[1]
          },
          labelled: !0
        })
      }) : (0, Wo.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, Wo.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, Wo.jsx)(rD, {
            stored: FQ,
            cap: wQ
          }), (0, Wo.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, Wo.jsx)("span", {
              children: qQ("buildAFactory2Game:powerStoredLabelled", {
                stored: yQ(FQ),
                cap: yQ(wQ)
              })
            })
          })]
        })
      })
    }

    function ND(QQ) {
      let {
        store: FQ,
        close: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = OD(FQ);
      return (0, Wo.jsx)(SD.d, {
        close: wQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              children: [(0, Wo.jsx)("h2", {
                id: "baf2PowerTitle",
                children: LQ("buildAFactory2Game:powerTitle")
              }), (0, Wo.jsx)("p", {
                children: LQ("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, Wo.jsx)(iD.j, {
              onClick: wQ
            })]
          }), qQ && (0, Wo.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, Wo.jsx)(ID, {
              figures: sD(qQ)
            }), (0, Wo.jsx)(CD, {
              message: qQ
            })]
          })]
        })
      })
    }

    function TD(QQ) {
      var FQ;
      let {
        kind: wQ,
        def: qQ,
        VQ: oQ,
        power: DQ,
        stored: kQ,
        cap: vQ
      } = QQ;
      const {
        t: mQ
      } = (0, Oq.y)(), uQ = OD(DQ, oQ), [HQ, bQ] = (0, LQ.useState)(!1);
      return (0, Wo.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, Wo.jsx)(oD, {
          kind: wQ,
          def: qQ,
          input: null,
          tier: null !== (FQ = null === uQ || void 0 === uQ ? void 0 : uQ.baf2PowerTier) && void 0 !== FQ ? FQ : 1
        }), (0, Wo.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: mQ("buildAFactory2Game:powerTitle")
        }), uQ && (0, Wo.jsx)(ID, {
          figures: sD(uQ)
        }), !uQ && (0, Wo.jsx)(UD, {
          stored: kQ,
          cap: vQ,
          rates: null
        }), uQ && (0, Wo.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            bQ(!HQ)
          },
          "aria-expanded": HQ,
          children: mQ(HQ ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), uQ && HQ && (0, Wo.jsx)(CD, {
          message: uQ
        })]
      })
    }
    const KD = 2500,
      zD = 17500,
      lD = `${cQ} `;
    const jD = ["plan", "throttle"];

    function aD(QQ) {
      if (QQ.startsWith(`${RF} `)) return QQ.slice(0, QQ.lastIndexOf(" "));
      const FQ = QQ.split(" ");
      return FQ[0] === uF && jD.includes(FQ[4]) ? FQ.slice(0, 5).join(" ") : null
    }
    class XD {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = QQ, this.now = FQ, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.fqQ = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = FQ()
      }
      enqueue(QQ) {
        this.queue(QQ, this.nextTicket());
        const FQ = this.fqQ + this.pending.length;
        return this.flush(), FQ
      }
      track(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const wQ = this.nextTicket();
        if (!FQ.urgent) return this.queue(QQ, wQ), this.flush(), wQ;
        const {
          supersedes: LQ
        } = FQ;
        for (let oQ = this.pending.length - 1; oQ >= this.urgent; oQ--) {
          const FQ = this.pending[oQ];
          (FQ.command === QQ || null !== LQ && void 0 !== LQ && LQ(FQ.command)) && (this.pending.splice(oQ, 1), this.markLeft(FQ.tickets))
        }
        const qQ = this.pending.findIndex((FQ => {
          let {
            command: wQ
          } = FQ;
          return wQ === QQ
        }));
        return -1 !== qQ ? this.pending[qQ].tickets.push(wQ) : (this.pending.splice(this.urgent, 0, {
          command: QQ,
          tickets: [wQ]
        }), this.urgent += 1), this.flush(), wQ
      }
      leftAt(QQ) {
        const FQ = this.leftTimes.get(QQ);
        return void 0 !== FQ ? FQ : this.pending.some((FQ => {
          let {
            tickets: wQ
          } = FQ;
          return wQ.includes(QQ)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let QQ = !0;
        return () => {
          QQ && (QQ = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(QQ) {
        var FQ;
        return (null === (FQ = this.pending.at(-1)) || void 0 === FQ ? void 0 : FQ.command) === QQ
      }
      sent() {
        return this.fqQ
      }
      clear() {
        for (const {
            tickets: QQ
          }
          of this.pending) this.markLeft(QQ);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(QQ) {
        const FQ = this.now();
        for (const wQ of QQ) this.leftTimes.set(wQ, FQ);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(QQ, FQ) {
        const wQ = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === wQ || void 0 === wQ ? void 0 : wQ.command) === QQ) return void(! function(QQ) {
          return QQ === CQ || QQ.startsWith(`${pQ} `) || QQ.startsWith(`${aQ} `)
        }(QQ) ? wQ.tickets.push(FQ) : (this.pending.pop(), this.markLeft([...wQ.tickets, FQ])));
        const LQ = void 0 === wQ ? null : mF(wQ.command, QQ);
        if (null !== LQ && void 0 !== wQ) return wQ.command = LQ, void wQ.tickets.push(FQ);
        const qQ = aD(QQ);
        if (null !== qQ && void 0 !== wQ && aD(wQ.command) === qQ) return wQ.command = QQ, void wQ.tickets.push(FQ);
        if (null !== wQ && void 0 !== wQ && wQ.command.startsWith(lD) && QQ.startsWith(lD)) {
          const LQ = QQ.slice(lD.length);
          if (wQ.command.slice(lD.length).split(",").includes(LQ)) return void wQ.tickets.push(FQ);
          const qQ = `${wQ.command},${LQ}`;
          if (qQ.length <= 119) return wQ.command = qQ, void wQ.tickets.push(FQ)
        }
        this.pending.push({
          command: QQ,
          tickets: [FQ]
        })
      }
      flush() {
        const QQ = this.now();
        for (this.tokens = Math.min(5, this.tokens + (QQ - this.refilledAt) / KD), this.refilledAt = QQ; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.fqQ += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: QQ,
            tickets: FQ
          } = this.pending.shift();
          this.markLeft(FQ), this.send(QQ)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * KD)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class fD {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new XD(QQ, FQ)
      }
      send(QQ) {
        return this.queue.enqueue(QQ)
      }
      sent() {
        return this.queue.sent()
      }
      track(QQ, FQ) {
        return this.queue.track(QQ, FQ)
      }
      leftAt(QQ) {
        return this.queue.leftAt(QQ)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(QQ) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = FQ, this.send(QQ), this.islandEdits.count
      }
      syncIslandEdits(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: wQ
        } = this, LQ = FQ - wQ.lastAtMs < zD;
        wQ.count = LQ ? Math.max(wQ.count, QQ) : QQ
      }
      clear() {
        this.queue.clear()
      }
    }
    const VD = (0, LQ.createContext)(null);

    function hD() {
      const QQ = (0, LQ.useContext)(VD);
      if (!QQ) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return QQ
    }

    function JD(QQ, FQ) {
      return null !== FQ && void 0 !== FQ ? FQ : 1 === QQ
    }

    function ED(QQ, FQ) {
      return QQ.every((QQ => {
        var wQ;
        let [LQ, , qQ] = QQ;
        return !JD(qQ, null === (wQ = FQ.get(LQ)) || void 0 === wQ ? void 0 : wQ.iY)
      }))
    }

    function nD(QQ, FQ, wQ) {
      if (0 === QQ.size) return QQ;
      const LQ = new Map(QQ);
      for (const [qQ, oQ] of QQ) {
        const QQ = FQ.find((QQ => {
          let [FQ] = QQ;
          return FQ === qQ
        }));
        (!QQ || oQ.iY === (1 === QQ[2]) || oQ.atMs < wQ) && LQ.delete(qQ)
      }
      return LQ
    }

    function gD(QQ) {
      var FQ;
      let {
        VQ: wQ,
        input: qQ,
        drops: oQ,
        seconds: DQ
      } = QQ;
      const {
        t: kQ
      } = (0, Oq.y)(), vQ = hD(), [mQ, uQ] = (0, LQ.useState)(new Map);
      (0, LQ.useEffect)((() => {
        oQ && uQ((QQ => nD(QQ, oQ, Date.now() - zD)))
      }), [oQ]), (0, LQ.useEffect)((() => {
        const QQ = function(QQ, FQ) {
          let wQ = null;
          for (const {
              atMs: LQ
            }
            of QQ.values()) wQ = null === wQ ? LQ : Math.min(wQ, LQ);
          return null === wQ ? null : wQ + FQ
        }(mQ, zD);
        if (null === QQ || !oQ) return;
        const FQ = setTimeout((() => {
          uQ((QQ => nD(QQ, oQ, Date.now() - zD)))
        }), Math.max(0, QQ - Date.now()) + 1);
        return () => {
          clearTimeout(FQ)
        }
      }), [mQ, oQ]);
      const HQ = hQ(qQ),
        bQ = null !== HQ && null !== oQ && ED(oQ, mQ),
        YQ = function(QQ, FQ, wQ) {
          return null === QQ || null === FQ || ED(FQ, wQ) ? 0 : jQ[zQ[QQ]]
        }(HQ, oQ, mQ);
      return (0, Wo.jsxs)(To, {
        title: kQ("buildAFactory2Game:farmDropsTitle", {
          seconds: DQ
        }),
        count: null !== (FQ = null === oQ || void 0 === oQ ? void 0 : oQ.length) && void 0 !== FQ ? FQ : 0,
        children: [YQ > 0 && (0, Wo.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: kQ("buildAFactory2Game:farmDropsPower", {
            power: String(YQ)
          })
        }), (null === HQ || !oQ) && (0, Wo.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: kQ("buildAFactory2Game:farmDropsEmpty")
        }), bQ && (0, Wo.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: kQ("buildAFactory2Game:farmDropsAllVoided")
        }), null !== HQ && (null === oQ || void 0 === oQ ? void 0 : oQ.map((QQ => {
          var FQ;
          let [LQ, qQ, oQ] = QQ;
          const DQ = qQ < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            HQ = JD(oQ, null === (FQ = mQ.get(LQ)) || void 0 === FQ ? void 0 : FQ.iY);
          return (0, Wo.jsxs)("li", {
            className: Sq()("Baf2Recipe Baf2FarmDrop", {
              Voided: !HQ
            }),
            children: [(0, Wo.jsx)(so, {
              item: LQ,
              amount: 1
            }), (0, Wo.jsx)("span", {
              className: "Baf2RecipeName",
              children: qo(kQ, LQ)
            }), (0, Wo.jsx)("span", {
              className: "Baf2FarmRate",
              children: kQ(DQ, {
                amount: String(qQ)
              })
            }), (0, Wo.jsx)("button", {
              type: "button",
              className: Sq()("Baf2FarmToggle SmallTextBold", {
                Kept: HQ
              }),
              "aria-pressed": HQ,
              onClick: () => {
                uQ(new Map(mQ).set(LQ, {
                  iY: !HQ,
                  atMs: Date.now()
                })), vQ.send(function(QQ, FQ, wQ, LQ) {
                  return `${aQ} ${QQ} ${FQ} ${wQ} ${LQ}`
                }(wQ[0], wQ[1], wQ[2], LQ))
              },
              children: kQ(HQ ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, LQ)
        })))]
      })
    }
    var PD;
    const ZD = String(null !== (PD = TF.Synthesizer.waterPerOp) && void 0 !== PD ? PD : 0);

    function yD(QQ) {
      let {
        VQ: FQ,
        taught: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), oQ = hD(), [DQ, kQ] = (0, LQ.useState)(null);
      (0, LQ.useEffect)((() => {
        null !== DQ && wQ === DQ && kQ(null)
      }), [DQ, wQ]);
      const vQ = null !== DQ && void 0 !== DQ ? DQ : wQ;
      let mQ = qQ("buildAFactory2Game:synthPick");
      return null !== vQ && (mQ = qQ("buildAFactory2Game:synthGrows", {
        name: qo(qQ, vQ),
        input: qo(qQ, SF),
        water: ZD
      })), (0, Wo.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, Wo.jsx)("div", {
          className: Sq()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === vQ
          }),
          children: mQ
        }), (0, Wo.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: iF.map(((QQ, wQ) => {
            const LQ = qo(qQ, QQ),
              DQ = QQ === vQ;
            return (0, Wo.jsx)("li", {
              children: (0, Wo.jsx)("button", {
                type: "button",
                className: Sq()("Baf2SynthTile", {
                  Selected: DQ
                }),
                title: LQ,
                "aria-label": LQ,
                "aria-pressed": DQ,
                onClick: () => {
                  DQ || (kQ(QQ), oQ.send(`${RF} ${FQ[0]} ${FQ[1]} ${FQ[2]} ${wQ}`))
                },
                children: (0, Wo.jsx)(rq.e, {
                  itemName: QQ,
                  amount: 0
                })
              })
            }, QQ)
          }))
        })]
      })
    }
    const BD = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function dD(QQ) {
      let {
        kind: FQ,
        tier: wQ,
        coupled: LQ,
        level: qQ,
        slot: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), vQ = ZQ(zF);
      if (!LQ && null !== wQ && wQ < vQ) return (0, Wo.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, Wo.jsx)(sq.c, {
            name: "lock"
          })
        }), (0, Wo.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: DQ("buildAFactory2Game:upgradeLocked")
        }), (0, Wo.jsx)("span", {
          className: "Baf2TierTag",
          children: DQ("buildAFactory2Game:tierTag", {
            tier: String(vQ)
          })
        })]
      });
      const mQ = function(QQ, FQ) {
          if (kQ() && "Crusher" !== QQ && null !== FQ) {
            if (Qk(jF, FQ)) return {
              item: jF,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (Qk(lF, FQ)) return {
              item: lF,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: zF,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(FQ, wQ),
        uQ = DQ(LQ ? BD[qQ - 1] : mQ.emptyKey),
        HQ = null !== wQ ? function(QQ, FQ, wQ, LQ) {
          if (!kQ() || !wQ || "Crusher" === QQ || FQ < 10) return null;
          const qQ = ZQ(jF);
          if (LQ < 3 && qQ > 1 && (2 === LQ || FQ >= qQ)) return {
            tier: qQ,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const oQ = ZQ(lF);
          if (1 === LQ && oQ > 1) return {
            tier: oQ,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(FQ, wQ, LQ, qQ) : null;
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2UpgradeSocket", {
          Fitted: LQ
        }),
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [LQ && oQ, !LQ && (0, Wo.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, Wo.jsx)(rq.e, {
              itemName: mQ.item,
              amount: 0
            })
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, Wo.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: DQ("buildAFactory2Game:upgradeTitle")
          }), (0, Wo.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: uQ
          }), LQ && qQ >= 2 && "Crusher" === FQ && (0, Wo.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: DQ("buildAFactory2Game:couplerCrusherHint")
          }), HQ && null !== wQ && wQ < HQ.tier && (0, Wo.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, Wo.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, Wo.jsx)(sq.c, {
                name: "lock"
              })
            }), DQ(HQ.lockedKey), (0, Wo.jsx)("span", {
              className: "Baf2TierTag",
              children: DQ("buildAFactory2Game:tierTag", {
                tier: String(HQ.tier)
              })
            })]
          }), HQ && null !== wQ && wQ >= HQ.tier && (0, Wo.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: DQ(HQ.nextKey)
          })]
        })]
      })
    }

    function Qk(QQ, FQ) {
      const wQ = ZQ(QQ);
      return wQ > 1 && FQ >= wQ
    }
    var Fk = wQ(36646);
    const wk = (0, BQ.K)(TF.Condenser, TF.Condenser.fluidMade),
      Lk = .05;
    class qk extends WD {}

    function Dk(QQ) {
      return Mo(QQ, "")
    }

    function kk(QQ, FQ, wQ) {
      return QQ(FQ ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: wQ
      })
    }

    function vk(QQ, FQ, wQ, LQ) {
      return wQ <= Lk && LQ <= Lk ? null : LQ <= Lk || wQ <= Lk ? kk(QQ, FQ, LQ <= Lk ? Mo(wQ, "+") : Mo(LQ, "\u2212")) : QQ(FQ ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: Dk(wQ),
        used: Dk(LQ)
      })
    }

    function mk(QQ, FQ) {
      return Math.min(100, 100 * QQ / Math.max(1, FQ))
    }

    function uk(QQ) {
      let {
        stored: FQ,
        cap: wQ,
        netPerS: LQ,
        rates: qQ,
        cryo: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), kQ = function(QQ, FQ, wQ, LQ) {
        return wQ <= 0 ? QQ("buildAFactory2Game:waterNoStorage") : FQ >= wQ ? QQ("buildAFactory2Game:powerFull") : LQ > Lk ? QQ("buildAFactory2Game:powerFullIn", {
          time: co(QQ, (wQ - FQ) / LQ)
        }) : LQ < -.05 ? FQ <= 0 ? QQ("buildAFactory2Game:waterEmpty") : QQ("buildAFactory2Game:powerEmptyIn", {
          time: co(QQ, FQ / -LQ)
        }) : QQ("buildAFactory2Game:powerSteady")
      }(DQ, FQ, wQ, LQ), vQ = wQ > 0 && FQ < wQ && Math.abs(LQ) <= Lk, mQ = DQ(oQ ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), uQ = null !== qQ ? `${qQ} \xb7 ${kQ}` : vQ ? mQ : `${mQ} \xb7 ${kQ}`;
      return (0, Wo.jsxs)(Wo.Fragment, {
        children: [(0, Wo.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, Wo.jsx)("div", {
            style: {
              width: `${mk(FQ,wQ)}%`
            }
          })
        }), (0, Wo.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, Wo.jsx)("span", {
            children: wQ > 0 && DQ("buildAFactory2Game:powerStored", {
              stored: (0, BQ.U)(FQ),
              cap: (0, BQ.U)(wQ)
            })
          }), (0, Wo.jsx)("span", {
            className: Sq()("Baf2WaterNet", {
              Draining: LQ < -.05
            }),
            children: uQ
          })]
        })]
      })
    }

    function Hk(QQ) {
      let {
        water: FQ,
        at: wQ,
        side: LQ = null
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), oQ = hD(), [DQ, kQ, vQ] = FQ;
      return (0, Wo.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, Wo.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: qQ(null === LQ ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${LQ}`)
          }), (0, Wo.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              oQ.send(`${BQ.E} ${wQ[0]} ${wQ[1]} ${wQ[2]}${"cryoOut"===LQ?" cryo":""}`)
            },
            children: qQ("buildAFactory2Game:waterDetails")
          })]
        }), (0, Wo.jsx)(uk, {
          stored: DQ,
          cap: kQ,
          netPerS: vQ,
          rates: kk(qQ, "cryoOut" === LQ, Mo(Math.abs(vQ), vQ < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === LQ
        })]
      })
    }

    function bk(QQ, FQ) {
      var wQ, LQ, qQ;
      const oQ = !0 === FQ.baf2WaterCryo,
        DQ = null !== (wQ = null === (LQ = FQ.baf2WaterMakers.find((QQ => QQ[0] === (oQ ? BQ.d : "Condenser")))) || void 0 === LQ ? void 0 : LQ[1]) && void 0 !== wQ ? wQ : 0,
        kQ = [],
        vQ = (FQ, wQ, LQ) => {
          FQ > 0 && kQ.push(QQ(1 === FQ ? wQ : LQ, {
            count: String(FQ)
          }))
        };
      return oQ ? vQ(DQ, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : vQ(DQ, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), vQ(null !== (qQ = FQ.baf2WaterPipes) && void 0 !== qQ ? qQ : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), vQ(FQ.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), kQ.join(" \xb7 ")
    }

    function Yk(QQ, FQ) {
      if (!0 === FQ.baf2WaterCryo) return function(QQ, FQ) {
        const wQ = TF[BQ.d];
        switch (FQ.baf2WaterThis) {
          case "pipe":
            return {
              text: QQ("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: QQ("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var LQ;
            const [qQ, oQ] = null !== (LQ = FQ.baf2WaterThisRates) && void 0 !== LQ ? LQ : [(0, BQ.K)(wQ, wQ.cryoMade), (0, BQ.K)(wQ, wQ.powerPerOp)];
            return !0 === FQ.baf2WaterDriven ? {
              text: QQ("buildAFactory2Game:cryoThisMixerDriven", {
                rate: Dk(qQ)
              }),
              bad: !1
            } : {
              text: QQ("buildAFactory2Game:cryoThisMixer", {
                rate: Dk(qQ),
                power: Dk(oQ)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: QQ("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(QQ, FQ);
      const wQ = !0 === FQ.baf2WaterDriven,
        LQ = TF.Condenser;
      switch (FQ.baf2WaterThis) {
        case "pipe":
          return {
            text: QQ("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: QQ("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: QQ("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: QQ("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: QQ("buildAFactory2Game:waterThisTank", {
              tank: (0, BQ.U)(BQ.s),
              cap: (0, BQ.U)(FQ.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var qQ;
          const [oQ, DQ] = null !== (qQ = FQ.baf2WaterThisRates) && void 0 !== qQ ? qQ : [wk, (0, BQ.K)(LQ, LQ.powerPerOp)];
          return wQ ? {
            text: QQ("buildAFactory2Game:waterThisCondenserDriven", {
              rate: Dk(oQ)
            }),
            bad: !1
          } : {
            text: QQ("buildAFactory2Game:waterThisCondenser", {
              rate: Dk(oQ),
              power: Dk(DQ)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: QQ("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function xk(QQ, FQ) {
      const wQ = FQ.baf2WaterMakers.some((QQ => !0 === QQ[5]));
      if (!0 === FQ.baf2WaterCryo) {
        const LQ = FQ.baf2WaterUsedPerS - FQ.baf2WaterMadePerS,
          qQ = wQ || LQ <= Lk ? 0 : (0, BQ.G)(LQ);
        return 0 === qQ ? null : qQ > 1 ? QQ("buildAFactory2Game:cryoNextMixers", {
          mixers: String(qQ)
        }) : QQ("buildAFactory2Game:cryoNextOne")
      }
      const LQ = wQ ? null : function(QQ, FQ) {
        const wQ = FQ - QQ;
        return wQ <= Lk ? null : Math.ceil(wQ / wk)
      }(FQ.baf2WaterMadePerS, FQ.baf2WaterUsedPerS);
      return null === LQ ? null : LQ > 1 ? QQ("buildAFactory2Game:waterNextCondensers", {
        condensers: String(LQ)
      }) : QQ("buildAFactory2Game:waterNextOne")
    }

    function Ak(QQ) {
      let {
        item: FQ,
        label: wQ,
        note: LQ,
        value: qQ,
        dim: oQ,
        bad: DQ
      } = QQ;
      return (0, Wo.jsxs)("li", {
        className: Sq()("Baf2WaterRow", {
          Dim: oQ,
          Bad: DQ
        }),
        children: [(0, Wo.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: FQ,
            amount: 0
          })
        }), (0, Wo.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, Wo.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: wQ
          }), LQ && (0, Wo.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: LQ
          })]
        }), (0, Wo.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: qQ
        })]
      })
    }

    function tk(QQ) {
      return Fk.q[QQ] ? QQ : "Reactor Port"
    }

    function ek(QQ) {
      let {
        message: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), LQ = !0 === FQ.baf2WaterCryo, qQ = (QQ, FQ) => kk(wQ, LQ, Mo(QQ, FQ));
      return (0, Wo.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, Wo.jsxs)("section", {
          children: [(0, Wo.jsxs)("h3", {
            children: [wQ("buildAFactory2Game:waterMakes"), (0, Wo.jsx)("span", {
              children: qQ(FQ.baf2WaterMadePerS, "+")
            })]
          }), (0, Wo.jsxs)("ul", {
            children: [0 === FQ.baf2WaterMakers.length && (0, Wo.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: wQ(LQ ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), FQ.baf2WaterMakers.map((QQ => {
              let [FQ, LQ, oQ, DQ, kQ, vQ] = QQ;
              const mQ = wQ("buildAFactory2Game:powerRunning", {
                amount: String(oQ)
              });
              let uQ = kQ > 0 ? wQ("buildAFactory2Game:waterMakerPower", {
                running: mQ,
                power: Dk(kQ)
              }) : mQ;
              return vQ && (uQ = wQ(0 === oQ && DQ <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, Wo.jsx)(Ak, {
                item: FQ,
                label: `${qo(wQ,FQ)} \xd7${LQ}`,
                note: uQ,
                value: oQ > 0 || vQ && DQ > 0 ? qQ(DQ, "+") : wQ("buildAFactory2Game:powerIdle"),
                dim: 0 === oQ && !vQ,
                bad: vQ
              }, FQ)
            }))]
          })]
        }), (0, Wo.jsxs)("section", {
          children: [(0, Wo.jsxs)("h3", {
            children: [wQ("buildAFactory2Game:waterUses"), (0, Wo.jsx)("span", {
              children: qQ(FQ.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, Wo.jsxs)("ul", {
            children: [0 === FQ.baf2WaterUsers.length && (0, Wo.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: wQ(LQ ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), FQ.baf2WaterUsers.map((QQ => {
              let [FQ, LQ, oQ, DQ] = QQ;
              const kQ = Fk.q[FQ] ? qo(wQ, FQ) : FQ;
              return (0, Wo.jsx)(Ak, {
                item: tk(FQ),
                label: LQ > 1 ? `${kQ} \xd7${LQ}` : kQ,
                note: DQ ? wQ("buildAFactory2Game:waterPortFirst") : void 0,
                value: oQ > 0 ? qQ(oQ, "\u2212") : wQ("buildAFactory2Game:powerIdle"),
                dim: 0 === oQ
              }, FQ)
            }))]
          })]
        })]
      })
    }

    function Mk(QQ) {
      var FQ, wQ, qQ, oQ, DQ;
      let {
        store: kQ,
        close: vQ
      } = QQ;
      const {
        t: mQ
      } = (0, Oq.y)(), uQ = function(QQ) {
        const [FQ, wQ] = (0, LQ.useState)((() => QQ.get()));
        return (0, LQ.useEffect)((() => (wQ(QQ.get()), QQ.subscribe((() => {
          wQ(QQ.get())
        })))), [QQ]), FQ
      }(kQ), HQ = null !== (FQ = null === uQ || void 0 === uQ ? void 0 : uQ.baf2WaterStored) && void 0 !== FQ ? FQ : 0, bQ = null !== (wQ = null === uQ || void 0 === uQ ? void 0 : uQ.baf2WaterCap) && void 0 !== wQ ? wQ : 0, YQ = null !== (qQ = null === uQ || void 0 === uQ ? void 0 : uQ.baf2WaterMadePerS) && void 0 !== qQ ? qQ : 0, xQ = null !== (oQ = null === uQ || void 0 === uQ ? void 0 : uQ.baf2WaterUsedPerS) && void 0 !== oQ ? oQ : 0, AQ = null !== (DQ = null === uQ || void 0 === uQ ? void 0 : uQ.baf2WaterNetPerS) && void 0 !== DQ ? DQ : YQ - xQ, tQ = uQ && Yk(mQ, uQ), eQ = uQ && xk(mQ, uQ), MQ = !0 === (null === uQ || void 0 === uQ ? void 0 : uQ.baf2WaterCryo);
      return (0, Wo.jsx)(SD.d, {
        close: vQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== uQ && bQ <= 0 ? (0, Wo.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, Wo.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, Wo.jsx)(rq.e, {
                  itemName: MQ ? xw.g : BQ.k,
                  amount: 0
                })
              }), (0, Wo.jsxs)("div", {
                children: [(0, Wo.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: mQ(MQ ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), uQ && (0, Wo.jsx)("p", {
                  children: bk(mQ, uQ)
                })]
              })]
            }), (0, Wo.jsx)(iD.j, {
              onClick: vQ
            })]
          }), uQ && tQ && (0, Wo.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, Wo.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, Wo.jsx)(uk, {
                stored: HQ,
                cap: bQ,
                netPerS: AQ,
                cryo: MQ,
                rates: vk(mQ, MQ, YQ, xQ)
              })
            }), (0, Wo.jsx)("div", {
              className: Sq()("Baf2WaterThis", {
                Bad: tQ.bad
              }),
              children: tQ.text
            }), uQ.baf2WaterDriven && (0, Wo.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, Wo.jsx)(sq.c, {
                name: "bolt"
              }), mQ(MQ ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), eQ && (0, Wo.jsx)("p", {
              className: "Baf2WaterNext",
              children: eQ
            }), (0, Wo.jsx)(ek, {
              message: uQ
            })]
          })]
        })
      })
    }
    class Gk {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(QQ, FQ) {
        const wQ = this.get(QQ);
        wQ && null === FQ.opLeftMs && null === FQ.fuelLeftMs && FQ.status === wQ.status ? FQ = {
          ...FQ,
          opLeftMs: wQ.opLeftMs,
          fuelLeftMs: wQ.fuelLeftMs,
          burning: wQ.burning
        } : this.updates++, this.pos = QQ, this.view = FQ;
        for (const LQ of this.listeners) LQ()
      }
      get(QQ) {
        return null !== this.pos && this.pos[0] === QQ[0] && this.pos[1] === QQ[1] && this.pos[2] === QQ[2] ? this.view : null
      }
      forget(QQ) {
        null !== this.get(QQ) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }

    function pk(QQ, FQ, wQ, LQ) {
      return "noFuel" === FQ && LQ && !qw(TF[QQ]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === FQ && !0 === (null === wQ || void 0 === wQ ? void 0 : wQ.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === FQ && !0 === (null === wQ || void 0 === wQ ? void 0 : wQ.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === FQ && !0 === (null === wQ || void 0 === wQ ? void 0 : wQ.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === FQ && !0 === (null === wQ || void 0 === wQ ? void 0 : wQ.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : ck(FQ, wQ) ? "buildAFactory2Game:machineStatus_noInputShort" : function(QQ, FQ) {
        const wQ = TF[QQ];
        if ("noFuel" === FQ && void 0 !== wQ.fuels) return qw(wQ) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (wQ.mobFarm && ("noInput" === FQ || "badInput" === FQ)) return `buildAFactory2Game:machineStatus_${FQ}MobFarm`;
        if ("outputFull" === FQ && (void 0 !== wQ.table || wQ.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === FQ && nF(wQ)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== wQ.cryoMade && ("noInput" === FQ || "noOutlet" === FQ || "fluidFull" === FQ)) return `buildAFactory2Game:machineStatus_${FQ}Mixer`;
        return `buildAFactory2Game:machineStatus_${FQ}`
      }(QQ, FQ)
    }

    function ck(QQ, FQ) {
      return "noInput" === QQ && null !== FQ && void 0 !== FQ && FQ.input && FQ.inputShort ? {
        input: FQ.input,
        short: FQ.inputShort
      } : null
    }

    function Ck(QQ) {
      return iq(QQ) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== QQ.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function Sk(QQ) {
      const FQ = (0, TQ.He)(QQ);
      return `Baf2Pane Baf2Pane${FQ.charAt(0).toUpperCase()}${FQ.slice(1)}`
    }

    function ik(QQ, FQ) {
      const [wQ, qQ] = (0, LQ.useState)((() => QQ.get(FQ)));
      return (0, LQ.useEffect)((() => {
        qQ(QQ.get(FQ));
        const wQ = QQ.subscribe((() => {
          qQ(QQ.get(FQ))
        }));
        return () => {
          wQ(), QQ.forget(FQ)
        }
      }), [QQ, ...FQ]), wQ
    }

    function Wk(QQ, FQ, wQ, LQ) {
      const qQ = TF[QQ],
        oQ = FQ && qQ.couplable ? VF(qQ, wQ) : qQ,
        DQ = null !== LQ && Fw(oQ) ? function(QQ, FQ) {
          var wQ;
          return null !== (wQ = null !== FQ && Fw(QQ) ? kw[FQ] : void 0) && void 0 !== wQ ? wQ : QQ.opMs
        }(oQ, vw(LQ)) : oQ.opMs;
      return DQ === oQ.opMs ? oQ : {
        ...oQ,
        opMs: DQ
      }
    }

    function Rk(QQ) {
      let {
        running: FQ,
        opMs: wQ,
        opLeftMs: LQ,
        updateCount: qQ
      } = QQ;
      return (0, Wo.jsx)("div", {
        className: Sq()("Baf2MachineProgress", {
          Running: FQ
        }),
        children: (0, Wo.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: wQ / 1e3 + "s",
            animationDelay: null === LQ ? void 0 : (LQ - wQ) / 1e3 + "s"
          }
        }, qQ)
      })
    }

    function Ok(QQ) {
      let {
        running: FQ,
        leftMs: wQ,
        periodMs: LQ,
        updateCount: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)(), DQ = Math.min(Math.max(null !== wQ && void 0 !== wQ ? wQ : 0, 0), LQ), kQ = FQ && DQ > 0, vQ = oQ("buildAFactory2Game:machineBarFuel");
      return (0, Wo.jsx)("div", {
        className: Sq()("Baf2FuelBurn", {
          Draining: kQ
        }),
        role: "img",
        title: vQ,
        "aria-label": vQ,
        children: (0, Wo.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: kQ ? {
            animationDuration: LQ / 1e3 + "s",
            animationDelay: (DQ - LQ) / 1e3 + "s"
          } : {
            transform: `scaleY(${DQ/LQ})`
          }
        }, qQ)
      })
    }

    function sk(QQ, FQ, wQ) {
      let [LQ, qQ] = wQ;
      const oQ = 1 !== LQ ? Rq(FQ) : null;
      return {
        amount: LQ,
        have: qQ,
        item: QQ(oQ || Lo(FQ))
      }
    }

    function rk(QQ) {
      return Fw(QQ) ? "buildAFactory2Game:machineBarMining" : ww(QQ) ? "buildAFactory2Game:machineBarCutting" : void 0 !== QQ.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function Ik(QQ) {
      var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ;
      let {
        kind: pQ,
        VQ: cQ,
        store: CQ,
        power: SQ,
        renderSlot: iQ
      } = QQ;
      const {
        t: WQ
      } = (0, Oq.y)(), RQ = ik(CQ, cQ), OQ = TF[pQ], sQ = null !== (FQ = null === RQ || void 0 === RQ ? void 0 : RQ.coupled) && void 0 !== FQ && FQ, rQ = null !== (wQ = null === RQ || void 0 === RQ ? void 0 : RQ.couplerLevel) && void 0 !== wQ ? wQ : 1, IQ = Wk(pQ, sQ, rQ, null !== (LQ = null === RQ || void 0 === RQ || null === (qQ = RQ.dug) || void 0 === qQ ? void 0 : qQ.item) && void 0 !== LQ ? LQ : null), UQ = null !== (oQ = null === RQ || void 0 === RQ ? void 0 : RQ.status) && void 0 !== oQ ? oQ : null, NQ = null !== (DQ = null === RQ || void 0 === RQ ? void 0 : RQ.power) && void 0 !== DQ ? DQ : null, TQ = null !== (kQ = null === RQ || void 0 === RQ ? void 0 : RQ.opLeftMs) && void 0 !== kQ ? kQ : null, KQ = null !== (vQ = null === RQ || void 0 === RQ ? void 0 : RQ.dug) && void 0 !== vQ ? vQ : null, zQ = null !== KQ && Fw(OQ) ? kw[null !== (mQ = vw(KQ.item)) && void 0 !== mQ ? mQ : ""] : void 0, lQ = void 0 === zQ ? null : 6e4 / zQ, jQ = null !== (uQ = null === RQ || void 0 === RQ ? void 0 : RQ.powerCap) && void 0 !== uQ ? uQ : 4e3, aQ = null !== (HQ = null === RQ || void 0 === RQ ? void 0 : RQ.tier) && void 0 !== HQ ? HQ : null, XQ = void 0 !== IQ.powerMade, fQ = null !== OQ.fuelSlot ? iQ(OQ.fuelSlot) : null, VQ = fF(OQ), hQ = !sQ && !0 === (null === RQ || void 0 === RQ ? void 0 : RQ.fuelFed), EQ = !sQ && !0 === (null === RQ || void 0 === RQ ? void 0 : RQ.fuelFeeds), nQ = null !== OQ.fuelSlot && !sQ, gQ = null !== (bQ = null === RQ || void 0 === RQ ? void 0 : RQ.fuelLeftMs) && void 0 !== bQ ? bQ : null, PQ = function(QQ, FQ, wQ) {
        var LQ;
        const qQ = null === FQ ? void 0 : ow[FQ];
        return Math.max(null !== (LQ = null !== qQ && void 0 !== qQ ? qQ : wQ) && void 0 !== LQ ? LQ : 0, QQ.opMs)
      }(IQ, null !== (YQ = null === RQ || void 0 === RQ ? void 0 : RQ.burning) && void 0 !== YQ ? YQ : null, gQ), ZQ = null !== (xQ = null === RQ || void 0 === RQ ? void 0 : RQ.fuelKeep) && void 0 !== xQ ? xQ : null, yQ = null === UQ ? null : pk(pQ, UQ, RQ, hQ), BQ = null === UQ ? null : ck(UQ, RQ);
      return (0, Wo.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Wo.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: WQ(Lo(pQ))
          }), KQ && (0, Wo.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [WQ("Tree Cutter" === pQ ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, Wo.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Wo.jsx)(rq.e, {
                itemName: KQ.item,
                amount: 0
              })
            }), (0, Wo.jsx)(Iq.e, {
              text: KQ.name
            })]
          }), null !== lQ && (0, Wo.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: WQ("buildAFactory2Game:machineDigsFixed", {
              perMin: String(lQ)
            })
          }), (null === RQ || void 0 === RQ ? void 0 : RQ.field) && (0, Wo.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, Wo.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, Wo.jsx)(rq.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), WQ("buildAFactory2Game:machineField", {
              planted: String(RQ.field[0]),
              ripe: String(RQ.field[1])
            })]
          }), (0, Wo.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Wo.jsxs)("div", {
              className: Sq()("Baf2MachineColumn", {
                Baf2Burns: nQ
              }),
              children: [null !== IQ.inputSlot && (0, Wo.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, Wo.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: WQ(Ck(IQ))
                }), iQ(IQ.inputSlot)]
              }), null !== OQ.fuelSlot && !sQ && (0, Wo.jsxs)("div", {
                className: Sq()("Baf2MachineSlot", {
                  Baf2FuelFed: hQ
                }),
                children: [(0, Wo.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [hQ && (0, Wo.jsx)(sq.c, {
                    name: "fire"
                  }), WQ("buildAFactory2Game:machineFuel")]
                }), (0, Wo.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, Wo.jsx)(Ok, {
                    running: "running" === UQ,
                    leftMs: gQ,
                    periodMs: PQ,
                    updateCount: CQ.updateCount
                  }), fQ]
                })]
              }), null !== OQ.fuelSlot && sQ && (0, Wo.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, Wo.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: WQ("buildAFactory2Game:machineFuel")
                }), (0, Wo.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: WQ("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": WQ("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, Wo.jsx)(sq.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, Wo.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, Wo.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: WQ(rk(IQ))
              }), (0, Wo.jsx)(Rk, {
                running: "running" === UQ,
                opMs: IQ.opMs,
                opLeftMs: TQ,
                updateCount: CQ.updateCount
              })]
            }), IQ.outputSlots.length > 0 && (0, Wo.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Wo.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: WQ("buildAFactory2Game:machineOutput")
              }), (0, Wo.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: IQ.outputSlots.map((QQ => (0, Wo.jsx)("div", {
                  children: iQ(QQ)
                }, QQ)))
              })]
            }), null !== NQ && XQ && (0, Wo.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, Wo.jsx)("div", {
                style: {
                  height: 100 * NQ / jQ + "%"
                }
              })
            })]
          }), nQ && null !== ZQ && (0, Wo.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Wo.jsx)(sq.c, {
              name: "arrows-rotate"
            }), WQ(ww(IQ) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(ZQ)
            })]
          }), (hQ || EQ) && (0, Wo.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, Wo.jsx)(sq.c, {
              name: "fire"
            }), WQ(hQ ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), OQ.couplable && (0, Wo.jsx)(dD, {
            kind: pQ,
            tier: aQ,
            coupled: sQ,
            level: rQ,
            slot: VQ === OQ.fuelSlot ? fQ : null !== VQ ? iQ(VQ) : null
          }), null !== NQ && !XQ && !0 === (null === RQ || void 0 === RQ ? void 0 : RQ.reactorPowered) && (0, Wo.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: WQ("buildAFactory2Game:machineReactorPowered")
          }), null !== NQ && !XQ && !0 !== (null === RQ || void 0 === RQ ? void 0 : RQ.reactorPowered) && (0, Wo.jsx)(UD, {
            stored: NQ,
            cap: jQ,
            rates: null !== (AQ = null === RQ || void 0 === RQ ? void 0 : RQ.powerRates) && void 0 !== AQ ? AQ : null
          }), (null === RQ || void 0 === RQ ? void 0 : RQ.water) && (0, Wo.jsx)(Hk, {
            water: RQ.water,
            at: cQ,
            side: RQ.cryo ? "waterIn" : null
          }), (null === RQ || void 0 === RQ ? void 0 : RQ.cryo) && (0, Wo.jsx)(Hk, {
            water: RQ.cryo,
            at: cQ,
            side: "cryoOut"
          }), null !== RQ && void 0 !== RQ && RQ.inertCoupler ? (0, Wo.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: WQ("buildAFactory2Game:machineStatus_couplerOff", {
              item: qo(WQ, RQ.inertCoupler)
            })
          }) : null !== yQ && (0, Wo.jsx)("div", {
            className: Sq()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== UQ
            }),
            children: WQ(yQ, BQ ? sk(WQ, BQ.input, BQ.short) : void 0)
          })]
        }), (0, Wo.jsxs)("div", {
          className: Sq()("Baf2MachineSide", {
            Baf2SynthSide: nF(OQ)
          }),
          children: [nF(OQ) && (0, Wo.jsx)(yD, {
            VQ: cQ,
            taught: null !== (tQ = null === RQ || void 0 === RQ ? void 0 : RQ.taught) && void 0 !== tQ ? tQ : null
          }, cQ.join(",")), XQ && (0, Wo.jsx)(TD, {
            kind: pQ,
            def: IQ,
            VQ: cQ,
            power: SQ,
            stored: null !== NQ && void 0 !== NQ ? NQ : 0,
            cap: jQ
          }), JQ(OQ) && (0, Wo.jsx)(gD, {
            VQ: cQ,
            input: null !== (eQ = null === RQ || void 0 === RQ ? void 0 : RQ.input) && void 0 !== eQ ? eQ : null,
            drops: null !== (MQ = null === RQ || void 0 === RQ ? void 0 : RQ.farm) && void 0 !== MQ ? MQ : null,
            seconds: String(IQ.opMs / 1e3)
          }), !XQ && !JQ(OQ) && !nF(OQ) && (0, Wo.jsx)(oD, {
            kind: pQ,
            def: IQ,
            input: null !== (GQ = null === RQ || void 0 === RQ ? void 0 : RQ.input) && void 0 !== GQ ? GQ : null,
            tier: null !== aQ && void 0 !== aQ ? aQ : 1,
            noSeeds: !0 === (null === RQ || void 0 === RQ ? void 0 : RQ.noSeeds)
          })]
        })]
      })
    }

    function Uk(QQ, FQ, wQ, LQ) {
      var qQ;
      const oQ = TF[QQ],
        DQ = [oQ.inputSlot, oQ.fuelSlot, ...null !== (qQ = oQ.inputSlots) && void 0 !== qQ ? qQ : []].filter((QQ => null !== QQ));
      return {
        render: qQ => {
          let {
            VQ: oQ,
            renderSlot: DQ
          } = qQ;
          return (0, Wo.jsx)(VD.Provider, {
            value: LQ,
            children: (0, Wo.jsx)(Ik, {
              kind: QQ,
              VQ: oQ,
              store: FQ,
              power: wQ,
              renderSlot: DQ
            })
          })
        },
        quickMoveRange: DQ.length > 0 ? [Math.min(...DQ), Math.max(...DQ) + 1] : [0, 0],
        className: Sk(QQ)
      }
    }
    const Nk = "Assembler";

    function Tk(QQ) {
      var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
      let {
        VQ: uQ,
        store: HQ,
        renderSlot: bQ
      } = QQ;
      const {
        t: YQ
      } = (0, Oq.y)(), xQ = ik(HQ, uQ), AQ = null !== (FQ = null === xQ || void 0 === xQ ? void 0 : xQ.tier) && void 0 !== FQ ? FQ : 1, tQ = null !== (wQ = null === xQ || void 0 === xQ ? void 0 : xQ.taught) && void 0 !== wQ ? wQ : null, eQ = yF(Nk, {
        coupled: !1,
        taught: tQ
      }), MQ = null !== (LQ = eQ.bench) && void 0 !== LQ ? LQ : null, GQ = null !== (qQ = null === xQ || void 0 === xQ ? void 0 : xQ.status) && void 0 !== qQ ? qQ : null, pQ = null !== (oQ = null === xQ || void 0 === xQ ? void 0 : xQ.power) && void 0 !== oQ ? oQ : null, cQ = null !== (DQ = null === xQ || void 0 === xQ ? void 0 : xQ.powerCap) && void 0 !== DQ ? DQ : 4e3;
      return (0, Wo.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, Wo.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: YQ(Lo(Nk))
          }), MQ && (0, Wo.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [YQ("buildAFactory2Game:benchMakes"), (0, Wo.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, Wo.jsx)(rq.e, {
                itemName: MQ.output,
                amount: 0
              })
            }), (null === xQ || void 0 === xQ ? void 0 : xQ.taughtName) && (0, Wo.jsx)(Iq.e, {
              text: xQ.taughtName
            }), MQ.outputAmount > 1 && (0, Wo.jsxs)("span", {
              children: ["\xd7", MQ.outputAmount]
            })]
          }), !MQ && (0, Wo.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: YQ("buildAFactory2Game:benchTeachHint")
          }), (0, Wo.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, Wo.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (kQ = eQ.inputSlots) && void 0 !== kQ ? kQ : []).map(((QQ, FQ) => {
                const wQ = null === MQ || void 0 === MQ ? void 0 : MQ.inputs[FQ];
                return (0, Wo.jsxs)("div", {
                  className: Sq()("Baf2BenchInput", {
                    Spare: !wQ
                  }),
                  children: [(0, Wo.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [bQ(QQ), wQ && (0, Wo.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, Wo.jsx)(rq.e, {
                        itemName: wQ.item,
                        amount: 0
                      })
                    })]
                  }), (0, Wo.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: wQ ? `\xd7${wQ.amount}` : "\xa0"
                  })]
                }, QQ)
              }))
            }), (0, Wo.jsx)(Rk, {
              running: "running" === GQ,
              opMs: eQ.opMs,
              opLeftMs: null !== (vQ = null === xQ || void 0 === xQ ? void 0 : xQ.opLeftMs) && void 0 !== vQ ? vQ : null,
              updateCount: HQ.updateCount
            }), (0, Wo.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, Wo.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: YQ("buildAFactory2Game:machineOutput")
              }), (0, Wo.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: eQ.outputSlots.map((QQ => (0, Wo.jsx)("div", {
                  children: bQ(QQ)
                }, QQ)))
              })]
            })]
          }), null !== pQ && (0, Wo.jsx)(UD, {
            stored: pQ,
            cap: cQ,
            rates: null !== (mQ = null === xQ || void 0 === xQ ? void 0 : xQ.powerRates) && void 0 !== mQ ? mQ : null
          }), null !== GQ && (0, Wo.jsx)("div", {
            className: Sq()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== GQ
            }),
            children: YQ(pk(Nk, GQ, xQ, !1))
          }), MQ && MQ.inputs.length > 1 && (0, Wo.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: YQ("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, Wo.jsx)(kD, {
            taught: tQ,
            tier: AQ
          }), MQ && (0, Wo.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: YQ("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Kk(QQ) {
      var FQ;
      const wQ = null !== (FQ = TF[Nk].inputSlots) && void 0 !== FQ ? FQ : [];
      return {
        render: FQ => {
          let {
            VQ: wQ,
            renderSlot: LQ
          } = FQ;
          return (0, Wo.jsx)(Tk, {
            VQ: wQ,
            store: QQ,
            renderSlot: LQ
          })
        },
        quickMoveRange: [Math.min(...wQ), Math.max(...wQ) + 1],
        className: Sk(Nk)
      }
    }
    var zk = wQ(96),
      lk = wQ(1140),
      jk = wQ(4119);
    const ak = 600,
      Xk = .5,
      fk = 4,
      Vk = 1200,
      hk = 140,
      Jk = 100,
      Ek = 32,
      nk = 16,
      gk = 100.5,
      Pk = 90,
      Zk = 1.5,
      yk = 50;

    function Bk(QQ) {
      switch (Uw(QQ)) {
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
    const dk = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Qv(QQ) {
      const FQ = Math.ceil(60 * QQ / Jk);
      return {
        fuel: Math.max(Ek, FQ),
        waste: Math.max(nk, FQ)
      }
    }

    function Fv(QQ, FQ, wQ) {
      const [LQ, qQ, oQ] = [QQ - 2, FQ - 2, wQ - 2];
      return 2 * (LQ * qQ + qQ * oQ + oQ * LQ) * hk
    }

    function wv(QQ, FQ, wQ) {
      return Math.max(0, QQ - 2) * Math.max(0, FQ - 2) * Math.max(0, wQ - 2)
    }

    function Lv(QQ, FQ) {
      const [wQ, LQ, qQ] = QQ, oQ = wQ * LQ * qQ, DQ = new Float32Array(oQ);
      let kQ = 0,
        vQ = 0,
        mQ = 0,
        uQ = 0,
        HQ = 0;
      const bQ = (QQ, oQ, DQ) => QQ < 0 || QQ >= wQ || oQ < 0 || oQ >= LQ || DQ < 0 || DQ >= qQ ? 0 : FQ[(oQ * qQ + DQ) * wQ + QQ];
      for (let tQ = 0; tQ < LQ; tQ++)
        for (let QQ = 0; QQ < qQ; QQ++)
          for (let LQ = 0; LQ < wQ; LQ++) {
            const oQ = (tQ * qQ + QQ) * wQ + LQ,
              YQ = FQ[oQ];
            if (1 === YQ) {
              kQ++;
              let FQ = 0;
              for (const [wQ, qQ, oQ] of dk) {
                const DQ = bQ(LQ + wQ, tQ + qQ, QQ + oQ);
                1 !== DQ && 2 !== DQ || FQ++
              }
              DQ[oQ] = ak * (1 + Xk * Math.min(FQ, fk)), uQ += DQ[oQ]
            } else if (2 === YQ) vQ++;
            else if (3 === YQ) {
              mQ++;
              dk.some((FQ => {
                let [wQ, qQ, oQ] = FQ;
                return 1 === bQ(LQ + wQ, tQ + qQ, QQ + oQ)
              })) && (HQ += Vk)
            }
          }
      const YQ = Fv(wQ + 2, LQ + 2, qQ + 2),
        xQ = Math.min(uQ, HQ, YQ),
        AQ = kQ > 0 ? uQ * Jk / kQ : 0;
      return {
        rods: kQ,
        graphite: vQ,
        channels: mQ,
        fuelHeat: uQ,
        cooling: HQ,
        size: YQ,
        max: xQ,
        vol: oQ,
        powerPerUnit: AQ,
        pelletsPerMin: AQ > 0 ? xQ / AQ * 60 : 0,
        waterPerS: xQ * BQ.o,
        rodHeat: DQ
      }
    }
    const qv = 0,
      ov = 1,
      Dv = 6,
      kv = 7,
      vv = 8;

    function mv(QQ, FQ) {
      const [wQ, LQ, qQ] = QQ, oQ = new Uint8Array(wQ * LQ * qQ), DQ = (QQ, oQ, DQ) => QQ < 0 || QQ >= wQ || oQ < 0 || oQ >= LQ || DQ < 0 || DQ >= qQ ? 0 : FQ[(oQ * qQ + DQ) * wQ + QQ];
      for (let kQ = 0; kQ < LQ; kQ++)
        for (let QQ = 0; QQ < qQ; QQ++)
          for (let LQ = 0; LQ < wQ; LQ++) {
            const vQ = (kQ * qQ + QQ) * wQ + LQ,
              mQ = FQ[vQ];
            if (1 === mQ) {
              let FQ = 0;
              for (const [wQ, qQ, oQ] of dk) {
                const vQ = DQ(LQ + wQ, kQ + qQ, QQ + oQ);
                FQ += 1 === vQ || 2 === vQ ? 1 : 0
              }
              oQ[vQ] = ov + Math.min(FQ, fk)
            } else if (3 === mQ) {
              const FQ = dk.some((FQ => {
                let [wQ, qQ, oQ] = FQ;
                return 1 === DQ(LQ + wQ, kQ + qQ, QQ + oQ)
              }));
              oQ[vQ] = FQ ? Dv : kv
            } else 2 === mQ && (oQ[vQ] = vv)
          }
      return oQ
    }

    function uv(QQ) {
      return QQ.fuelHeat <= QQ.cooling && QQ.fuelHeat <= QQ.size ? "fuel" : QQ.cooling <= QQ.size ? "cooling" : "size"
    }
    const Hv = Pk;

    function bv(QQ, FQ, wQ) {
      return Math.round(QQ * FQ * wQ * 25e3 * (1 + .25 * (Math.min(QQ, FQ, wQ) - 2)))
    }

    function Yv(QQ) {
      return Math.max(0, Math.min(BQ.h, QQ))
    }

    function xv(QQ, FQ, wQ) {
      const LQ = FQ * Yv(wQ);
      return QQ <= 0 ? 0 : LQ > 0 ? Math.min(200, 100 * QQ / LQ) : 200
    }

    function Av(QQ, FQ) {
      const wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Zk : 1;
      return Math.min(QQ.fuelHeat * wQ, QQ.cooling * Yv(FQ), QQ.size * wQ)
    }

    function tv(QQ) {
      return 2 + QQ / 10
    }
    const ev = "buildAFactory2Game:";

    function Mv(QQ) {
      var FQ;
      return null !== (FQ = QQ.baf2RxMood) && void 0 !== FQ ? FQ : function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const wQ = [
          ["calm", 50],
          ["warm", Hv],
          ["hot", gk]
        ];
        for (const [LQ, qQ] of wQ)
          if (QQ < qQ + (LQ === FQ ? 3 : 0)) return LQ;
        return "alarm"
      }(QQ.baf2RxHeat)
    }
    const Gv = 120;

    function pv(QQ) {
      const FQ = QQ.baf2RxState;
      if ("running" === FQ && QQ.baf2RxHeat > gk) return {
        label: `${ev}rxState_tooHot`,
        tone: "bad",
        fix: `${ev}rxFix_tooHot`
      };
      switch (FQ) {
        case "running":
          return {
            label: `${ev}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${ev}rxState_idle`, tone: "off", fix: `${ev}rxFix_idle`
          };
        case "scram":
          return {
            label: `${ev}rxState_scram`, tone: "off", fix: QQ.baf2RxHeat < yk ? `${ev}rxFix_scramCool` : `${ev}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${ev}rxState_${FQ}`, tone: "off", fix: `${ev}rxFix_${FQ}`
          };
        case "melted":
          return {
            label: `${ev}rxState_melted`, tone: "bad", fix: `${ev}rxFix_melted`
          };
        default:
          return {
            label: `${ev}rxState_${FQ}`, tone: "warn", fix: `${ev}rxFix_${FQ}`
          }
      }
    }

    function cv(QQ) {
      const [FQ, wQ, LQ] = QQ.baf2RxStats;
      return {
        fuelHeat: FQ,
        cooling: wQ * (QQ.baf2RxCryo ? Math.max(1, Yv(QQ.baf2RxWater / 100)) : 1),
        size: LQ
      }
    }

    function Cv(QQ) {
      var FQ;
      const wQ = "idle" === QQ.baf2RxState || "running" === QQ.baf2RxState && QQ.baf2RxHeat <= gk || "scram" === QQ.baf2RxState && QQ.baf2RxHeat < yk;
      if (0 === (QQ.baf2RxFlags & pF) || !QQ.baf2RxFormed || !wQ) return null;
      const {
        fuelHeat: LQ,
        cooling: qQ,
        size: oQ
      } = cv(QQ), DQ = Math.min(LQ, qQ, oQ), kQ = uv({
        fuelHeat: LQ,
        cooling: qQ,
        size: oQ
      }), vQ = "cooling" === kQ && !0 === QQ.baf2RxCryoOpen && !QQ.baf2RxCryo, mQ = null !== (FQ = QQ.baf2RxCells) && void 0 !== FQ ? FQ : "", uQ = ("fuel" === kQ || "cooling" === kQ && !0 === QQ.baf2RxCryo) && mQ.length > 0 && !mQ.includes(String(0)), HQ = vQ ? "Cryo" : "scram" === QQ.baf2RxState ? "Off" : "";
      return DQ < 12e3 ? {
        key: `${ev}rxGrow_${uQ?"full":kQ}${HQ}`,
        amount: DQ
      } : null
    }

    function Sv(QQ, FQ) {
      return QQ[0] === FQ[0] && QQ[1] === FQ[1] && QQ[2] === FQ[2]
    }

    function iv(QQ) {
      return [...QQ].sort(((QQ, FQ) => Number(FQ[2] < FQ[1]) - Number(QQ[2] < QQ[1])))
    }

    function Wv(QQ, FQ) {
      return FQ.some((FQ => {
        let [wQ, LQ] = FQ;
        return !(LQ <= 0) && ["edge", "cap", "wall", "inside"].some((FQ => wQ === DL(QQ, FQ)))
      }))
    }

    function Rv(QQ, FQ, wQ) {
      const LQ = QQ.baf2RxFuel - QQ.baf2RxPu > 0 ? wQ : 0;
      return {
        full: QQ.baf2RxWaste > FQ - 3,
        fullInS: LQ > 0 ? Math.max(0, FQ - QQ.baf2RxWaste) / LQ : null
      }
    }
    const Ov = {
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

    function sv(QQ) {
      return rv[QQ]
    }
    const rv = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Iv(QQ) {
      let [FQ, wQ, LQ] = QQ;
      return Math.ceil(Fv(FQ, wQ, LQ) * BQ.o)
    }

    function Uv(QQ, FQ) {
      return "battery" === QQ ? FQ[0] * FQ[1] * FQ[2] : function(QQ) {
        let [FQ, wQ, LQ] = QQ;
        return FQ * wQ * LQ - Math.max(0, FQ - 2) * Math.max(0, wQ - 2) * Math.max(0, LQ - 2)
      }(FQ) - 1
    }

    function Nv(QQ) {
      const FQ = Math.max(0, QQ);
      if (FQ < 10) return String(Math.round(10 * FQ) / 10);
      if (FQ < 1e4) return Math.round(FQ).toLocaleString("en-US");
      if (FQ < 1e6) return `${FQ<1e5?(Math.floor(FQ/100)/10).toFixed(1):Math.floor(FQ/1e3)}k`;
      const wQ = FQ / 1e6;
      return `${wQ<10?(Math.floor(100*wQ)/100).toFixed(2):wQ<100?(Math.floor(10*wQ)/10).toFixed(1):Math.floor(wQ)}M`
    }

    function Tv(QQ) {
      return QQ <= 0 ? "0" : QQ >= 10 ? String(Math.round(QQ)) : QQ.toFixed(QQ >= 1 ? 1 : 2)
    }

    function Kv(QQ) {
      const FQ = dw(QQ, 0),
        wQ = dw(QQ, Pw(QQ) - 1);
      return {
        lo: [Math.min(FQ[0], wQ[0]), Math.min(FQ[1], wQ[1]), Math.min(FQ[2], wQ[2])],
        hi: [Math.max(FQ[0], wQ[0]) + 1, Math.max(FQ[1], wQ[1]) + 1, Math.max(FQ[2], wQ[2]) + 1]
      }
    }

    function zv(QQ, FQ, wQ) {
      const LQ = [FQ[0] - QQ[0], FQ[1] - QQ[1], FQ[2] - QQ[2]],
        qQ = [(QQ[0] + FQ[0]) / 2, (QQ[1] + FQ[1]) / 2, (QQ[2] + FQ[2]) / 2],
        oQ = [];
      for (let DQ = 0; DQ < 3; DQ++) {
        const kQ = (DQ + 1) % 3,
          vQ = (DQ + 2) % 3;
        for (const mQ of [QQ[kQ], FQ[kQ]])
          for (const uQ of [QQ[vQ], FQ[vQ]]) {
            const QQ = [0, 0, 0],
              FQ = [wQ, wQ, wQ];
            QQ[DQ] = qQ[DQ], FQ[DQ] = LQ[DQ] + wQ, QQ[kQ] = mQ, QQ[vQ] = uQ, oQ.push([QQ, FQ])
          }
      }
      return oQ
    }
    const lv = "buildAFactory2Game:",
      jv = [`${lv}colNorth`, `${lv}colEast`, `${lv}colSouth`, `${lv}colWest`];

    function av(QQ, FQ) {
      const [wQ, LQ, qQ] = QQ.baf2ColAt;
      return `baf2col ${wQ} ${LQ} ${qQ} ${FQ}`
    }

    function Xv(QQ) {
      return function(QQ) {
        if (!Number.isFinite(QQ)) return "";
        const FQ = Math.max(1, Math.round(QQ));
        if (FQ < 60) return `${FQ}s`;
        const wQ = FQ % 60;
        return 0 === wQ ? FQ / 60 + "m" : `${Math.floor(FQ/60)}m ${wQ}s`
      }(function(QQ) {
        const FQ = kL.FOCUS_BY_LASERS[Math.max(0, Math.min(4, QQ))];
        return FQ > 0 ? kL.NOVA_FOCUS / FQ : 1 / 0
      }(QQ))
    }

    function fv(QQ) {
      const FQ = Math.abs(Math.round(QQ));
      return FQ < 1e3 ? Math.round(QQ).toLocaleString("en-US") : FQ < 1e6 ? `${FQ<1e5?(QQ/1e3).toFixed(1).replace(/\.0$/,""):Math.round(QQ/1e3)}k` : `${(QQ/1e6).toFixed(FQ<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function Vv(QQ, FQ, wQ) {
      if (YL(FQ) >= 0) {
        const FQ = function(QQ, FQ) {
          return QQ.find((QQ => {
            let {
              focus: wQ
            } = QQ;
            return wQ[0] === FQ[0] && wQ[2] === FQ[2] && (FQ[1] === wQ[1] || FQ[1] === wQ[1] - 1)
          }))
        }(QQ, wQ);
        if (!FQ) return null;
        const qQ = function(QQ) {
          let FQ = 0,
            wQ = 0;
          for (let LQ = 0; LQ < 4; LQ++) FQ += QQ.laser[LQ] ? 1 : 0, wQ += QQ.live[LQ] ? 1 : 0;
          return {
            lasers: FQ,
            live: wQ,
            focusPerS: kL.FOCUS_BY_LASERS[wQ],
            drawPerS: kL.LASER_DRAW * wQ
          }
        }({
          laser: FQ.lasers,
          live: FQ.live
        });
        if (0 === qQ.lasers || "noLasers" === FQ.state) return {
          key: `${lv}lookColNoLasers`
        };
        if (0 === qQ.live) return {
          key: `${lv}lookColOff_blocked`
        };
        if (!(FQ.on && qQ.live > 0) && ("running" !== (LQ = FQ.state) && "slowed" !== LQ)) return {
          key: `${lv}lookColOff_${FQ.state}`
        };
        if (qQ.live < qQ.lasers) return {
          key: `${lv}lookColLasersSome`,
          params: {
            lasers: String(qQ.lasers),
            live: String(qQ.live)
          }
        };
        const oQ = FQ.open.filter(Boolean).length;
        return oQ < 4 ? {
          key: `${lv}lookColLasersSpots`,
          params: {
            live: String(qQ.live),
            spots: String(oQ),
            time: Xv(qQ.live)
          }
        } : {
          key: `${lv}lookColLasers`,
          params: {
            live: String(qQ.live),
            time: Xv(qQ.live)
          }
        }
      }
      var LQ;
      if (!xL(FQ)) return null;
      const qQ = function(QQ, FQ) {
        for (const wQ of QQ) {
          const QQ = ML(wQ.focus, [FQ[0], FQ[1], FQ[2]]);
          if (QQ && QQ.kD === kL.LASER_D && wQ.lasers[QQ.dir]) return {
            entry: wQ,
            dir: QQ.dir
          }
        }
        return null
      }(QQ, wQ);
      if (!qQ) return {
        key: `${lv}lookLaserNoCollider`
      };
      const {
        entry: oQ,
        dir: DQ
      } = qQ;
      return oQ.open[DQ] ? oQ.live[DQ] ? {
        key: oQ.on ? `${lv}lookLaserFiring` : `${lv}lookLaserReady`
      } : {
        key: `${lv}lookLaserBlocked`
      } : {
        key: `${lv}lookLaserClosed`
      }
    }

    function hv(QQ, FQ) {
      const wQ = [];
      for (let LQ = 1; LQ < kL.LASER_D; LQ++) QQ & 1 << FQ * (kL.LASER_D - 1) + LQ - 1 && wQ.push(LQ);
      return wQ
    }
    const Jv = {
      firing: `${lv}colSlotFiring`,
      ready: `${lv}colSlotReady`,
      blocked: `${lv}colSlotBlocked`,
      empty: `${lv}colSlotEmpty`,
      closed: `${lv}colSlotClosed`
    };

    function Ev(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const oQ = Dq(QQ),
        DQ = Dq(FQ),
        kQ = Dq(wQ),
        vQ = kQ.filter(Boolean).length,
        mQ = oQ.filter(Boolean).length,
        uQ = [0, 1, 2, 3].map((QQ => DQ[QQ] ? oQ[QQ] ? kQ[QQ] ? LQ ? "firing" : "ready" : "blocked" : (QQ => hv(qQ, QQ).length > 0)(QQ) ? "blocked" : "empty" : "closed")),
        HQ = uQ.indexOf("blocked"),
        bQ = HQ < 0 && mQ > 0 ? uQ.indexOf("empty") : -1;
      return uQ.map(((QQ, FQ) => {
        const wQ = FQ === HQ ? {
          key: `${lv}colSlotClear`
        } : FQ === bQ ? {
          key: `${lv}colSlotAdd`,
          params: {
            time: Xv(Math.min(4, vQ + 1))
          }
        } : null;
        return {
          dir: FQ,
          tone: QQ,
          title: {
            key: "blocked" !== QQ || oQ[FQ] ? Jv[QQ] : `${lv}colSlotGap`,
            keys: {
              dir: jv[FQ]
            }
          },
          hint: wQ
        }
      }))
    }

    function nv(QQ) {
      var FQ;
      return "noPower" === QQ.baf2ColState && QQ.baf2ColRxState ? pv({
        baf2RxState: QQ.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (FQ = QQ.baf2ColRxHeat) && void 0 !== FQ ? FQ : 0
      }) : null
    }

    function gv(QQ) {
      const FQ = Dq(QQ.baf2ColSpots).filter(Boolean).length,
        wQ = Dq(QQ.baf2ColLive);
      let LQ = 0,
        qQ = 0;
      return Dq(QQ.baf2ColLasers).forEach(((QQ, FQ) => {
        QQ && (LQ++, qQ += wQ[FQ] ? 0 : 1)
      })), qQ > 0 ? {
        key: `${lv}colSubSome`,
        params: {
          blocked: String(qQ),
          lasers: String(LQ)
        }
      } : FQ < 4 ? {
        key: `${lv}colSubSpots`,
        params: {
          lasers: String(LQ),
          spots: String(FQ)
        }
      } : {
        key: `${lv}colSub`,
        params: {
          lasers: String(LQ)
        }
      }
    }

    function Pv(QQ) {
      const FQ = nv(QQ);
      if ("idle" === QQ.baf2ColRxState && FQ) return {
        key: `${lv}colState_noPowerIdle`
      };
      if (FQ) return {
        key: `${lv}colState_noPowerReactor`,
        keys: {
          state: FQ.label
        }
      };
      if ("noInput" !== QQ.baf2ColState) return {
        key: `${lv}colState_${QQ.baf2ColState}`
      };
      const wQ = String(Math.max(0, kL.NOVA_SA - QQ.baf2ColSa)),
        LQ = String(Math.max(0, kL.NOVA_GD - QQ.baf2ColGd));
      return "0" !== wQ && "0" !== LQ ? {
        key: `${lv}colState_noInput`,
        params: {
          sa: wQ,
          gd: LQ
        }
      } : "0" !== wQ ? {
        key: `${lv}colState_noStarAlloy`,
        params: {
          sa: wQ
        }
      } : "0" !== LQ ? {
        key: `${lv}colState_noGlowDust`,
        params: {
          gd: LQ
        }
      } : {
        key: `${lv}colState_running`
      }
    }

    function Zv(QQ) {
      return QQ.baf2ColP < 0 ? `${lv}colNext` : function(QQ) {
        const FQ = QQ.baf2ColState;
        return QQ.baf2ColP >= 0 && ("blocked" === FQ || "noLasers" === FQ || "noPower" === FQ)
      }(QQ) ? `${lv}colStalled` : null === yv(QQ) ? `${lv}colMaking` : `${lv}colNovaIn`
    }

    function yv(QQ) {
      if (QQ.baf2ColP < 0 || QQ.baf2ColWant <= 0) return null;
      const FQ = QQ.baf2ColFocusPerS * Math.min(1, QQ.baf2ColDraw / QQ.baf2ColWant);
      return FQ > 0 ? Math.max(0, kL.NOVA_FOCUS - QQ.baf2ColP) / FQ : null
    }

    function Bv(QQ, FQ) {
      const wQ = [];
      for (let LQ = 1; LQ <= 3; LQ++) {
        const qQ = [QQ[0], QQ[1] - LQ, QQ[2]];
        if (!FQ(qQ)) return wQ;
        wQ.push(qQ)
      }
      return []
    }

    function dv(QQ, FQ) {
      const wQ = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let LQ = 0; LQ < 4; LQ++) {
        const qQ = LQ,
          oQ = eL(QQ.focus, qQ, kL.LASER_D);
        if (QQ.lasers[LQ] || !QQ.open[LQ] || !FQ(oQ)) continue;
        const DQ = [];
        for (let wQ = 1; wQ < kL.LASER_D; wQ++) {
          const LQ = eL(QQ.focus, qQ, wQ);
          FQ(LQ) || DQ.push(LQ)
        }
        wQ.supports.push(...Bv(oQ, FQ)), 0 === DQ.length ? wQ.free.push(oQ) : (wQ.blocked.push(oQ), wQ.gaps.push(...DQ))
      }
      return wQ
    }
    const Qm = kL.LASER_D - .25,
      Fm = 4,
      wm = 2,
      Lm = 16;
    const qm = {
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
        blendMode: jk.f.Standard,
        soft: !0
      },
      om = {
        green: qm,
        pink: {
          ...qm,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Dm(QQ, FQ) {
      const wQ = {
        ...FQ.params
      };
      for (const [qQ, oQ] of Object.entries(null !== (LQ = FQ.keys) && void 0 !== LQ ? LQ : {})) {
        var LQ;
        wQ[qQ] = QQ(oQ)
      }
      return wQ
    }
    const km = "buildAFactory2Game:",
      mm = 2 * kL.LASER_D + 1,
      um = kL.LASER_D;

    function Hm(QQ) {
      return QQ(`${km}colFocusTip`, {
        need: fv(kL.NOVA_FOCUS)
      })
    }

    function bm(QQ, FQ) {
      return QQ(FQ.key, Dm(QQ, FQ))
    }

    function Ym(QQ) {
      const FQ = QQ.getStatus();
      return {
        status: FQ,
        entry: FQ ? QQ.entryAtRoot(FQ.baf2ColAt) : void 0
      }
    }

    function xm(QQ, FQ) {
      return {
        left: 100 * (um + QQ) / mm + "%",
        top: 100 * (um + FQ) / mm + "%"
      }
    }

    function Am(QQ) {
      let {
        status: FQ,
        entry: wQ
      } = QQ;
      const LQ = Dq(FQ.baf2ColLasers),
        qQ = Dq(FQ.baf2ColSpots),
        oQ = Dq(FQ.baf2ColLive),
        DQ = !0 === (null === wQ || void 0 === wQ ? void 0 : wQ.on),
        kQ = kL.LASER_D,
        vQ = [];
      for (let YQ = 0; YQ < 4; YQ++) {
        const [QQ, , FQ] = tL[YQ];
        if (oQ[YQ]) {
          const wQ = 100 * (kQ - 1) / mm,
            LQ = QQ + FQ > 0 ? 100 * (um + 1) / mm : 100 * (um - (kQ - 1)) / mm,
            qQ = 100 * (um + .35) / mm,
            oQ = 30 / mm,
            mQ = 0 !== QQ ? {
              left: `${LQ}%`,
              width: `${wQ}%`,
              top: `${qQ}%`,
              height: `${oQ}%`
            } : {
              top: `${LQ}%`,
              height: `${wQ}%`,
              left: `${qQ}%`,
              width: `${oQ}%`
            };
          vQ.push((0, Wo.jsx)("i", {
            className: Sq()("Baf2ColDiagramBeam", {
              Off: !DQ
            }),
            style: mQ
          }, `beam${YQ}`))
        }
        const wQ = LQ[YQ] ? "Baf2ColDiagramLaser" : qQ[YQ] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        vQ.push((0, Wo.jsx)("i", {
          className: wQ,
          style: xm(QQ * kQ, FQ * kQ)
        }, `spot${YQ}`))
      }
      for (let YQ = 0; YQ < 4; YQ++) {
        if (LQ[YQ] || !qQ[YQ]) continue;
        const [QQ, , wQ] = tL[YQ];
        for (const LQ of hv(null !== (mQ = FQ.baf2ColGaps) && void 0 !== mQ ? mQ : 0, YQ)) {
          var mQ;
          vQ.push((0, Wo.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: xm(QQ * LQ, wQ * LQ)
          }, `gap${YQ},${LQ}`))
        }
      }
      for (const [YQ, , xQ] of null !== (uQ = null === wQ || void 0 === wQ ? void 0 : wQ.blockers) && void 0 !== uQ ? uQ : []) {
        var uQ, HQ, bQ;
        const QQ = YQ - (null !== (HQ = null === wQ || void 0 === wQ ? void 0 : wQ.focus[0]) && void 0 !== HQ ? HQ : 0),
          FQ = xQ - (null !== (bQ = null === wQ || void 0 === wQ ? void 0 : wQ.focus[2]) && void 0 !== bQ ? bQ : 0);
        vQ.push((0, Wo.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: xm(QQ, FQ)
        }, `block${QQ},${FQ}`))
      }
      return (0, Wo.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [vQ, (0, Wo.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function tm(QQ) {
      let {
        status: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), LQ = Dq(FQ.baf2ColLive).filter(Boolean).length;
      return (0, Wo.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: Hm(wQ),
          children: wQ(`${km}colLadder`)
        }), (0, Wo.jsx)("ul", {
          children: [1, 2, 3, 4].map((QQ => (0, Wo.jsx)("li", {
            className: Sq()({
              On: QQ === LQ
            }),
            children: wQ(`${km}colLadderChip`, {
              lasers: String(QQ),
              time: Xv(QQ)
            })
          }, QQ)))
        })]
      })
    }

    function em(QQ) {
      let {
        item: FQ,
        ym: wQ,
        need: LQ,
        cap: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)(), DQ = Math.min(wQ, LQ);
      return (0, Wo.jsxs)("li", {
        className: Sq()("Baf2ColTile", {
          Short: wQ < LQ
        }),
        children: [(0, Wo.jsx)(Mm, {
          item: FQ
        }), (0, Wo.jsx)("b", {
          className: "Baf2ColTileValue",
          children: oQ(`${km}colOutOf`, {
            amount: String(DQ),
            cap: String(LQ)
          })
        }), (0, Wo.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, Wo.jsx)("i", {
            style: {
              width: 100 * DQ / LQ + "%"
            }
          })
        }), wQ > LQ && (0, Wo.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: oQ(`${km}colIntakeHeld`, {
            amount: String(wQ),
            cap: String(qQ)
          })
        })]
      })
    }

    function Mm(QQ) {
      let {
        item: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)();
      return (0, Wo.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: FQ,
            amount: 0
          })
        }), (0, Wo.jsx)("span", {
          className: "Baf2ColTileName",
          children: qo(wQ, FQ)
        })]
      })
    }

    function Gm(QQ) {
      switch (QQ.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function pm(QQ) {
      var FQ, wQ, qQ;
      let {
        store: oQ,
        close: DQ
      } = QQ;
      const {
        t: kQ
      } = (0, Oq.y)(), vQ = hD(), {
        status: mQ,
        entry: uQ
      } = function(QQ) {
        const [FQ, wQ] = (0, LQ.useState)((() => Ym(QQ)));
        return (0, LQ.useEffect)((() => (wQ(Ym(QQ)), QQ.subscribe((() => {
          wQ(Ym(QQ))
        })))), [QQ]), FQ
      }(oQ), [HQ, bQ] = (0, LQ.useState)(null), YQ = null === mQ || void 0 === mQ ? void 0 : mQ.baf2ColHold;
      (0, LQ.useEffect)((() => {
        bQ(null)
      }), [YQ]);
      const xQ = (0, LQ.useRef)({
          p: -1,
          n: 0
        }),
        AQ = null !== (FQ = null === mQ || void 0 === mQ ? void 0 : mQ.baf2ColP) && void 0 !== FQ ? FQ : -1;
      AQ < xQ.current.p && xQ.current.n++, xQ.current.p = AQ;
      const tQ = (0, LQ.useRef)(null),
        [eQ] = (0, LQ.useState)((() => {
          return (QQ = oQ.heldAtOpen()) === uL || QQ === HL ? {
            key: `${lv}colBeltItIn`,
            item: QQ
          } : null;
          var QQ
        }));
      if (!mQ) return null;
      const MQ = mQ.baf2ColMember,
        GQ = mQ.baf2ColP >= 0,
        pQ = function(QQ, FQ) {
          if (QQ.baf2ColP >= 0 && QQ.baf2ColDraw > 0) {
            const FQ = QQ.baf2ColWant > 0 ? Math.min(1, QQ.baf2ColDraw / QQ.baf2ColWant) : 0;
            return {
              focus: QQ.baf2ColFocusPerS * FQ,
              draw: QQ.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === QQ.baf2ColState && FQ && FQ.draw > 0 ? {
            ...FQ,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(mQ, tQ.current);
      tQ.current = pQ.draw > 0 ? pQ : null;
      const cQ = "slowed" === mQ.baf2ColState || "noPower" === mQ.baf2ColState,
        CQ = yv(mQ),
        SQ = null !== HQ && void 0 !== HQ ? HQ : mQ.baf2ColHold,
        iQ = function(QQ) {
          var FQ, wQ;
          return "idle" === QQ.baf2ColRxState ? null : null !== (FQ = null === (wQ = nv(QQ)) || void 0 === wQ ? void 0 : wQ.fix) && void 0 !== FQ ? FQ : null
        }(mQ),
        WQ = null === iQ && null === eQ ? function(QQ) {
          var FQ;
          const wQ = QQ.baf2ColSentTo;
          if (!wQ) return null;
          const LQ = null !== (FQ = QQ.baf2ColSentHeld) && void 0 !== FQ ? FQ : null;
          return {
            key: null === LQ ? `${lv}colNovaSentToMachine` : `${lv}colNovaSentTo`,
            target: wQ,
            ym: LQ
          }
        }(mQ) : null,
        RQ = GQ ? kQ(`${km}colFocusOf`, {
          focus: fv(mQ.baf2ColP),
          need: fv(kL.NOVA_FOCUS)
        }) : null;
      return (0, Wo.jsx)(SD.d, {
        close: DQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, Wo.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Wo.jsx)(rq.e, {
                  itemName: vL,
                  amount: 0
                })
              }), (0, Wo.jsxs)("div", {
                children: [(0, Wo.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: qo(kQ, vL)
                }), (0, Wo.jsx)("p", {
                  children: bm(kQ, gv(mQ))
                })]
              })]
            }), (0, Wo.jsx)(iD.j, {
              onClick: DQ
            })]
          }), (0, Wo.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, Wo.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, Wo.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, Wo.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: kQ(Zv(mQ), {
                    time: null === CQ ? "" : co(kQ, CQ)
                  })
                }), (0, Wo.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, Wo.jsx)("i", {
                    style: {
                      width: (GQ ? 100 * mQ.baf2ColP / kL.NOVA_FOCUS : 0) + "%"
                    }
                  }, xQ.current.n)
                }), (0, Wo.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, Wo.jsxs)("span", {
                    title: Hm(kQ),
                    children: [(0, Wo.jsx)("b", {
                      children: fv(pQ.focus)
                    }), " ", kQ(`${km}colFocusPerS`)]
                  }), (0, Wo.jsxs)("span", {
                    className: Sq()("Baf2ColDraw", {
                      Short: cQ
                    }),
                    children: [(0, Wo.jsx)(sq.c, {
                      name: "bolt"
                    }), cQ ? kQ(`${km}colDrawOf`, {
                      draw: fv(mQ.baf2ColDraw),
                      want: fv(mQ.baf2ColWant)
                    }) : kQ(`${km}colPowerPerS`, {
                      rate: fv(pQ.draw)
                    })]
                  }), null !== RQ && (0, Wo.jsx)("span", {
                    className: "Soft",
                    children: RQ
                  })]
                })]
              }), (0, Wo.jsx)("p", {
                className: Sq()("Baf2ColState", Gm(mQ)),
                children: bm(kQ, Pv(mQ))
              }), null !== iQ && (0, Wo.jsx)("p", {
                className: "Baf2ColStateFix",
                children: kQ(iQ)
              }), null === iQ && null !== eQ && (0, Wo.jsx)("p", {
                className: "Baf2ColStateFix",
                children: kQ(eQ.key, {
                  item: qo(kQ, eQ.item)
                })
              }), WQ && (0, Wo.jsx)("p", {
                className: "Baf2ColStateFix",
                children: kQ(WQ.key, {
                  target: qo(kQ, WQ.target),
                  amount: String(null !== (wQ = WQ.ym) && void 0 !== wQ ? wQ : 0)
                })
              }), (0, Wo.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, Wo.jsx)(em, {
                  item: uL,
                  ym: mQ.baf2ColSa,
                  need: kL.NOVA_SA,
                  cap: kL.SA_CAP
                }), (0, Wo.jsx)(em, {
                  item: HL,
                  ym: mQ.baf2ColGd,
                  need: kL.NOVA_GD,
                  cap: kL.GD_CAP
                }), (0, Wo.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, Wo.jsx)(Mm, {
                    item: "Nova Matter"
                  }), (0, Wo.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: kQ(`${km}colNovaHeld`, {
                      amount: String(mQ.baf2ColOut),
                      cap: String(kL.OUT_CAP)
                    })
                  }), MQ && (0, Wo.jsx)(iD.m, {
                    className: "Baf2ColTake",
                    disabled: 0 === mQ.baf2ColOut,
                    onClick: () => {
                      vQ.send(av(mQ, "take"))
                    },
                    children: kQ(`${km}colTake`)
                  })]
                })]
              }), MQ && (0, Wo.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": SQ,
                className: Sq()("Baf2ColHold", {
                  On: SQ
                }),
                onClick: QQ => {
                  QQ.detail > 0 && QQ.currentTarget.blur(), bQ(!SQ), vQ.send(av(mQ, "hold " + (SQ ? 0 : 1)))
                },
                children: [(0, Wo.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, Wo.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, Wo.jsx)("b", {
                    children: kQ(`${km}colHold`)
                  }), (0, Wo.jsx)("span", {
                    children: kQ(`${km}colHoldNote`)
                  })]
                })]
              })]
            }), (0, Wo.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, Wo.jsx)(Am, {
                status: mQ,
                entry: uQ
              }), (0, Wo.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Ev(mQ.baf2ColLasers, mQ.baf2ColSpots, mQ.baf2ColLive, pQ.beamsOn, null !== (qQ = mQ.baf2ColGaps) && void 0 !== qQ ? qQ : 0).map((QQ => (0, Wo.jsxs)("li", {
                  className: QQ.tone,
                  children: [(0, Wo.jsx)("b", {
                    children: bm(kQ, QQ.title)
                  }), null !== QQ.hint && (0, Wo.jsx)("span", {
                    children: bm(kQ, QQ.hint)
                  })]
                }, QQ.dir)))
              }), (0, Wo.jsx)(tm, {
                status: mQ
              })]
            })]
          })]
        })
      })
    }
    const cm = "buildAFactory2Game:",
      Cm = 36e5,
      Sm = 864e5;

    function im(QQ, FQ, wQ) {
      return Math.max(0, Math.ceil((QQ + FQ - Math.max(wQ, QQ)) / 1e3))
    }

    function Wm(QQ) {
      return QQ.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Rm(QQ) {
      return "Homestead" === QQ
    }

    function Om(QQ) {
      return function(QQ) {
        let FQ = 0;
        for (const wQ of QQ) {
          const QQ = /^Island ([1-9]\d{0,5})$/.exec(wQ);
          QQ && (FQ = Math.max(FQ, Number(QQ[1])))
        }
        return `Island ${FQ+1}`
      }(QQ.map((QQ => QQ.baf2IslandName)))
    }

    function sm(QQ, FQ) {
      return function(QQ) {
        return `${cm}islandsBlocked${QQ[0].toUpperCase()}${QQ.slice(1)}`
      }("degraded" === QQ && 0 === FQ ? "stuck" : QQ)
    }

    function rm(QQ) {
      return QQ.filter((QQ => {
        var FQ;
        return !QQ.baf2IslandActive && void 0 === QQ.baf2IslandUnreadable && void 0 === (null === (FQ = QQ.baf2IslandCoop) || void 0 === FQ ? void 0 : FQ.baf2CoopState)
      })).length
    }

    function Im(QQ) {
      return "coopMoving" === QQ || "coopUnreachable" === QQ
    }

    function Um(QQ, FQ) {
      const wQ = FQ > 0;
      return {
        change: null === QQ && !wQ,
        switch: (null === QQ || "degraded" === QQ || Im(QQ)) && !wQ,
        rename: "loading" !== QQ && "degraded" !== QQ && "stuck" !== QQ
      }
    }

    function Nm(QQ, FQ) {
      return void 0 === QQ || "corrupt" === QQ && FQ
    }
    const Tm = zD;

    function Km(QQ, FQ, wQ) {
      if (null !== QQ && void 0 !== QQ && QQ.untilGone) {
        var LQ;
        return !("dismiss" === QQ.untilGone && void 0 === (null === (LQ = FQ.baf2IslandCoop) || void 0 === LQ ? void 0 : LQ.baf2CoopState)) && wQ - QQ.atMs < 32500
      }
      return void 0 !== QQ && wQ - QQ.atMs < Tm && FQ.baf2IslandName === QQ.from
    }
    const zm = zD;

    function lm(QQ) {
      return "core" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) ? QQ.core : "islands" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) ? QQ.backToCore : void 0
    }

    function jm(QQ) {
      return `\0${QQ}\0`
    }

    function am(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const LQ = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const oQ of Object.keys(wQ)) LQ[oQ] = jm(oQ);
      let qQ = Object.keys(LQ).length > 0 ? QQ(FQ, LQ) : QQ(FQ);
      for (const [oQ, DQ] of Object.entries(wQ)) qQ = qQ.split(jm(oQ)).join(DQ);
      return qQ
    }

    function Xm(QQ, FQ) {
      return QQ ? FQ ? "enabled" : "disabled" : "hidden"
    }
    const fm = {
      removed: `${cm}islandsCoopRemoved`,
      deleted: `${cm}islandsCoopDeleted`,
      notReady: `${cm}islandsCoopNotReady`,
      gone: `${cm}islandsCoopGone`
    };

    function Vm(QQ) {
      var FQ;
      return "member" !== (null === (FQ = QQ.baf2IslandCoop) || void 0 === FQ ? void 0 : FQ.baf2CoopRole) && "newer" !== QQ.baf2IslandUnreadable
    }

    function hm(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = QQ.baf2IslandActive,
        kQ = QQ.baf2IslandUnreadable,
        vQ = QQ.baf2IslandCoop,
        mQ = function(QQ, FQ, wQ) {
          return {
            switch: QQ.switch && void 0 === FQ,
            delete: QQ.change && Nm(FQ, wQ)
          }
        }(FQ, kQ, LQ),
        uQ = DQ && void 0 !== vQ && void 0 === vQ.baf2CoopState && "coopUnreachable" === oQ,
        HQ = {
          switch: Xm((!DQ || uQ) && void 0 === kQ, uQ || mQ.switch),
          switchLabel: uQ ? "tryAgain" : "switch",
          rename: Xm(!0, FQ.rename),
          delete: Xm(!DQ, mQ.delete),
          deleteWaits: !DQ && Nm(kQ, LQ),
          people: Xm(void 0 !== QQ.baf2IslandInvitable || qQ && DQ && void 0 === kQ && void 0 === vQ, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        bQ = !DQ && mQ.delete;
      if (void 0 === vQ) return wQ ? {
        ...HQ,
        delete: Xm(!DQ, !1),
        deleteWaits: !1,
        note: bQ ? {
          key: `${cm}islandsCoopKeepOwn`
        } : null
      } : HQ;
      const YQ = vQ.baf2CoopState,
        xQ = vQ.baf2CoopMembers.length > 1,
        AQ = {
          ...HQ,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== YQ && "member" === vQ.baf2CoopRole) return {
        ...AQ,
        dismiss: Xm(!0, FQ.rename),
        note: {
          key: fm[YQ],
          names: {
            owner: vQ.baf2CoopOwner
          }
        }
      };
      if (void 0 !== YQ) {
        let QQ = {
          key: `${cm}islandsCoopOwnLost`
        };
        return bQ && xQ ? QQ = {
          key: `${cm}islandsCoopDeleteMembers`
        } : bQ && wQ && (QQ = {
          key: `${cm}islandsCoopKeepOwn`
        }), {
          ...AQ,
          delete: Xm(!DQ, mQ.delete && !xQ && !wQ),
          deleteWaits: HQ.deleteWaits && !xQ && !wQ,
          note: QQ
        }
      }
      if ("member" === vQ.baf2CoopRole) return {
        ...HQ,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: Xm(!0, DQ ? FQ.switch : FQ.rename)
      };
      const tQ = vQ.baf2CoopManageHere;
      let eQ = null;
      var MQ;
      tQ || DQ ? bQ && xQ ? eQ = {
        key: `${cm}islandsCoopDeleteMembers`
      } : bQ && wQ && (eQ = {
        key: `${cm}islandsCoopKeepOwn`
      }) : eQ = {
        key: null !== (MQ = vQ.baf2CoopLeft) && void 0 !== MQ && MQ.length ? `${cm}islandsCoopManageThereClaim` : `${cm}islandsCoopManageThere`
      };
      return {
        ...HQ,
        rename: Xm(!0, FQ.rename && tQ),
        delete: Xm(!DQ, mQ.delete && !xQ && !wQ),
        deleteWaits: HQ.deleteWaits && !xQ && !wQ,
        people: "enabled",
        peopleLabel: "players",
        unshare: Xm(tQ && DQ && !xQ, FQ.change),
        remove: tQ,
        note: eQ
      }
    }

    function Jm(QQ) {
      var FQ;
      const wQ = QQ.baf2IslandCoop;
      if ("owner" !== (null === wQ || void 0 === wQ ? void 0 : wQ.baf2CoopRole) || void 0 !== wQ.baf2CoopState || null === (FQ = wQ.baf2CoopLeft) || void 0 === FQ || !FQ.length) return null;
      const LQ = QQ.baf2IslandActive && wQ.baf2CoopManageHere;
      return {
        left: wQ.baf2CoopLeft,
        claim: LQ,
        goThere: !LQ && wQ.baf2CoopManageHere
      }
    }

    function Em(QQ) {
      return QQ.baf2CoopMembers.length >= QQ.baf2CoopMax
    }

    function nm(QQ, FQ, wQ) {
      return void 0 !== QQ && FQ < QQ.answer && wQ - QQ.atMs < Tm
    }
    const gm = "buildAFactory2Game:";

    function Pm(QQ, FQ) {
      return {
        onKeyDown: wQ => {
          wQ.stopPropagation(), wQ.nativeEvent.isComposing || 229 === wQ.nativeEvent.keyCode || ("Enter" === wQ.key ? (wQ.preventDefault(), QQ()) : "Escape" === wQ.key && (wQ.preventDefault(), FQ()))
        }
      }
    }

    function Zm(QQ) {
      return {
        onKeyDown: FQ => {
          "Escape" !== FQ.key || FQ.nativeEvent.isComposing || (FQ.preventDefault(), FQ.stopPropagation(), QQ())
        }
      }
    }

    function ym(QQ) {
      QQ.currentTarget.select()
    }

    function Bm(QQ, FQ) {
      (0, LQ.useEffect)((() => {
        var wQ;
        QQ && (null === (wQ = FQ.current) || void 0 === wQ || wQ.scrollIntoView({
          block: "nearest"
        }))
      }), [QQ, FQ])
    }

    function dm(QQ) {
      const [FQ, wQ] = (0, LQ.useState)(null);
      return (0, LQ.useEffect)((() => {
        const FQ = document.querySelector(".UiRequests"),
          LQ = QQ.current;
        if (!FQ || !LQ || "undefined" === typeof ResizeObserver) return;
        const qQ = () => {
          const QQ = FQ.getBoundingClientRect(),
            qQ = LQ.getBoundingClientRect(),
            oQ = LQ.parentElement,
            DQ = oQ && parseFloat(getComputedStyle(oQ).paddingTop) || 0,
            kQ = function(QQ, FQ, wQ, LQ) {
              if (!QQ || QQ.height <= 0 || QQ.right <= FQ.left || QQ.left >= FQ.right) return null;
              const qQ = Math.max(LQ, QQ.bottom + 8);
              return {
                marginTop: Math.round(qQ - LQ),
                maxHeight: Math.max(0, Math.floor(wQ - qQ - LQ))
              }
            }(QQ, qQ, window.innerHeight, DQ);
          wQ((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.marginTop) === (null === kQ || void 0 === kQ ? void 0 : kQ.marginTop) && (null === QQ || void 0 === QQ ? void 0 : QQ.maxHeight) === (null === kQ || void 0 === kQ ? void 0 : kQ.maxHeight) ? QQ : kQ))
        };
        qQ();
        const oQ = new ResizeObserver(qQ);
        return oQ.observe(FQ), window.addEventListener("resize", qQ), () => {
          oQ.disconnect(), window.removeEventListener("resize", qQ)
        }
      }), [QQ]), FQ
    }

    function Qu() {
      (0, LQ.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function Fu(QQ) {
      (0, LQ.useEffect)((() => {
        var FQ;
        null === (FQ = QQ.current) || void 0 === FQ || FQ.focus()
      }), [QQ])
    }

    function wu(QQ) {
      const [FQ, wQ] = (0, LQ.useState)(Date.now);
      return (0, LQ.useEffect)((() => {
        const FQ = window.setInterval((() => {
          wQ(Date.now())
        }), QQ);
        return () => {
          window.clearInterval(FQ)
        }
      }), [QQ]), FQ
    }

    function Lu(QQ) {
      let {
        tier: FQ,
        t: wQ
      } = QQ;
      const {
        kind: LQ,
        short: qQ
      } = tQ(FQ), oQ = YQ(FQ, xQ), DQ = wQ(`${gm}${oQ.key}`, {
        ...oQ.params,
        name: wQ(`${gm}${eQ(FQ).nameKey}`)
      });
      return (0, Wo.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, Wo.jsx)("span", {
          className: Sq()("Baf2IslandTierPip", {
            Stage: "tier" !== LQ
          }),
          "aria-hidden": "true",
          children: qQ
        }), DQ]
      })
    }

    function qu(QQ) {
      let {
        note: FQ,
        className: wQ,
        t: LQ
      } = QQ;
      return (0, Wo.jsx)("p", {
        className: Sq()("Baf2IslandNote", wQ),
        children: am(LQ, FQ.key, FQ.names, FQ.params)
      })
    }
    const ou = "buildAFactory2Game:";

    function Du(QQ) {
      let {
        message: FQ,
        arrivedAtMs: wQ,
        close: qQ,
        leave: oQ
      } = QQ;
      const DQ = hD(),
        {
          t: kQ
        } = (0, Oq.y)(),
        vQ = wu(1e3),
        mQ = (0, LQ.useRef)(null);
      Qu(), (0, LQ.useEffect)((() => {
        var QQ;
        null === (QQ = mQ.current) || void 0 === QQ || QQ.focus()
      }), []);
      const uQ = im(wQ, FQ.baf2TransferInMs, vQ),
        HQ = wQ + FQ.baf2TransferInMs - 1e3,
        [bQ, YQ] = (0, LQ.useState)(null);
      (0, LQ.useEffect)((() => {
        const QQ = window.setTimeout((() => {
          YQ(HQ)
        }), Math.max(0, HQ - Date.now()));
        return () => {
          window.clearTimeout(QQ)
        }
      }), [HQ]);
      const xQ = bQ === HQ || vQ >= HQ,
        AQ = FQ.baf2TransferIsland,
        tQ = FQ.baf2TransferOwner;
      return (0, Wo.jsx)(SD.d, {
        close: qQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Wo.jsxs)("section", {
          ref: mQ,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              children: [(0, Wo.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === tQ ? am(kQ, `${ou}islandsTransferOwn`, {
                  island: AQ
                }) : am(kQ, `${ou}islandsTransfer`, {
                  island: AQ,
                  owner: tQ
                })
              }), (0, Wo.jsx)("p", {
                children: xQ ? kQ(`${ou}islandsTransferNow`) : kQ(`${ou}islandsTransferIn`, {
                  time: co(kQ, uQ)
                })
              })]
            }), (0, Wo.jsx)(iD.j, {
              ariaLabel: kQ(`${ou}islandsClose`),
              onClick: qQ
            })]
          }), !xQ && (0, Wo.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, Wo.jsx)("p", {
              className: "Baf2TransferNote",
              children: kQ(`${ou}islandsTransferNote`)
            }), (0, Wo.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, Wo.jsx)(iD.f, {
                onClick: () => {
                  DQ.send("baf2coopstay"), oQ()
                },
                children: kQ(`${ou}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var ku = wQ(1447),
      vu = wQ(1153),
      mu = wQ.n(vu);
    const uu = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const Hu = "buildAFactory2Game:",
      bu = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function Yu(QQ, FQ, wQ) {
      return void 0 === FQ ? wQ : "string" === typeof FQ ? FQ : Array.isArray(FQ) ? FQ.map((FQ => "string" === typeof FQ ? FQ : "translationKey" in FQ ? QQ(FQ.translationKey) : "")).join("") : QQ(FQ.translationKey)
    }

    function xu(QQ) {
      const FQ = {};
      for (const [wQ, LQ] of Object.entries(null !== QQ && void 0 !== QQ ? QQ : {})) FQ[wQ] = LQ < 0 ? po(LQ) : LQ.toLocaleString("en-US");
      return FQ
    }

    function Au(QQ, FQ) {
      const wQ = FQ ? "touch" : "mouse";
      return {
        use: QQ(`${Hu}lookUse_${wQ}`),
        Use: QQ(`${Hu}lookUseStart_${wQ}`)
      }
    }
    const tu = (0, LQ.memo)((function(QQ) {
      let {
        item: FQ
      } = QQ;
      return (0, Wo.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, Wo.jsx)(rq.e, {
          itemName: FQ,
          amount: 0
        })
      })
    }));

    function eu(QQ) {
      let {
        label: FQ,
        percent: wQ,
        progress: LQ
      } = QQ;
      return (0, Wo.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${FQ}: ${LQ}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": wQ,
          children: (0, Wo.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${wQ}%`
            }
          })
        }), (0, Wo.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: LQ
        })]
      })
    }

    function Mu(QQ) {
      let {
        chips: FQ
      } = QQ;
      return (0, Wo.jsx)("span", {
        className: "Baf2QuestChips",
        children: FQ.map((QQ => {
          let [FQ, wQ, LQ] = QQ;
          const qQ = wQ >= LQ;
          return (0, Wo.jsxs)("span", {
            className: Sq()("Baf2QuestChip", {
              Met: qQ
            }),
            children: [(0, Wo.jsx)(tu, {
              item: FQ
            }), (0, Wo.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: qQ ? `\u2713${LQ}` : `${wQ}/${LQ}`
            })]
          }, FQ)
        }))
      })
    }

    function Gu(QQ, FQ) {
      const {
        key: wQ,
        params: LQ
      } = YQ(FQ, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return QQ(`${Hu}${wQ}`, {
        ...LQ,
        name: QQ(`${Hu}${eQ(FQ).nameKey}`)
      })
    }

    function pu(QQ) {
      let {
        core: FQ,
        t: wQ
      } = QQ;
      const [LQ, qQ] = FQ, oQ = qQ > 0 ? Math.floor(100 * LQ / qQ) : 100;
      return (0, Wo.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": wQ(`${Hu}questCoreLabel`, {
          have: String(LQ),
          need: String(qQ)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": oQ,
        children: [(0, Wo.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: wQ(`${Hu}questCore`, {
            percent: String(oQ)
          })
        }), (0, Wo.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, Wo.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${oQ}%`
            }
          })
        })]
      })
    }

    function cu(QQ) {
      let {
        rows: FQ,
        t: wQ
      } = QQ;
      const LQ = FQ.filter((QQ => QQ.done)).length;
      return (0, Wo.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": wQ(`${Hu}questStepsProgress`, {
          done: String(LQ),
          total: String(FQ.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": FQ.length,
        "aria-valuenow": LQ,
        children: FQ.map((QQ => (0, Wo.jsx)("span", {
          className: Sq()("Baf2QuestSegment", {
            Done: QQ.done,
            Current: QQ.current
          })
        }, QQ.id)))
      })
    }
    const Cu = (0, LQ.memo)(iu, Su);

    function Su(QQ, FQ) {
      const wQ = wQ => QQ.view.itemNames[wQ] === FQ.view.itemNames[wQ];
      return QQ.t === FQ.t && QQ.extra === FQ.extra && (null === QQ.row.item || wQ(QQ.row.item)) && QQ.row.madeFor.every(wQ) && QQ.row.also.every(wQ) && mu()(QQ.row, FQ.row)
    }

    function iu(QQ) {
      let {
        row: FQ,
        view: wQ,
        t: LQ,
        extra: qQ
      } = QQ;
      const {
        isTouchScreen: oQ
      } = (0, pq.l)(["isTouchScreen"]), DQ = FQ.item ? function(QQ, FQ, wQ) {
        return 1 !== wQ && uu.has(QQ) ? Rq(FQ) : null
      }(FQ.key, FQ.item, FQ.total) : null, kQ = DQ ? LQ(DQ) : FQ.item ? Yu(LQ, wQ.itemNames[FQ.item], FQ.item) : "", vQ = FQ.also.map((QQ => Yu(LQ, wQ.itemNames[QQ], QQ))), mQ = vQ.join(", "), uQ = function(QQ, FQ) {
        var wQ;
        return FQ.length < 2 ? null !== (wQ = FQ[0]) && void 0 !== wQ ? wQ : "" : QQ(`${Hu}listAnd`, {
          rest: FQ.slice(0, -1).join(QQ(`${Hu}listComma`)),
          last: FQ[FQ.length - 1]
        })
      }(LQ, [kQ, ...vQ]), HQ = LQ(`${Hu}${FQ.key}`, {
        ...Au(LQ, oQ),
        ...xu(FQ.params),
        item: kQ,
        also: mQ,
        itemList: uQ,
        total: String(FQ.total)
      }), [bQ, ...YQ] = HQ.split("\n"), xQ = FQ.total > 1 && !FQ.done && !FQ.away;
      return (0, Wo.jsxs)("li", {
        className: Sq()("Baf2QuestStep", {
          Done: FQ.done,
          Current: FQ.current,
          JustFinished: FQ.justFinished,
          Away: FQ.away
        }),
        children: [!FQ.done && null !== FQ.item && (0, Wo.jsx)(tu, {
          item: FQ.item
        }), (FQ.done || null === FQ.item) && (0, Wo.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: FQ.done ? "\u2713" : "\u25cb"
        }), (0, Wo.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Wo.jsx)("strong", {
            children: bQ
          }), YQ.length > 0 && (0, Wo.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: YQ.join(" ")
          }), !FQ.done && FQ.madeFor.length > 0 && (0, Wo.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: LQ("buildAFactory2Game:questRowFor", {
              items: FQ.madeFor.map((QQ => Yu(LQ, wQ.itemNames[QQ], QQ))).join(" \u2192 ")
            })
          }), xQ && (0, Wo.jsx)(eu, {
            label: bQ,
            percent: Math.round(100 * FQ.amount / FQ.total),
            progress: `${FQ.amount.toLocaleString("en-US")}/${FQ.total.toLocaleString("en-US")}`
          }), !FQ.done && !FQ.away && FQ.chips && FQ.chips.length > 0 && (0, Wo.jsx)(Mu, {
            chips: FQ.chips
          }), qQ]
        })]
      })
    }

    function Wu(QQ, FQ) {
      let [wQ, LQ] = FQ;
      return QQ(`${Hu}${wQ}`, xu(LQ))
    }

    function Ru(QQ) {
      let [FQ, wQ] = QQ;
      return FQ + JSON.stringify(wQ)
    }

    function Ou(QQ) {
      let {
        goal: FQ,
        t: wQ
      } = QQ;
      return FQ ? (0, Wo.jsx)("span", {
        className: "Baf2BookGoal",
        children: wQ(`${Hu}${FQ}`)
      }) : null
    }

    function su(QQ) {
      let {
        view: FQ,
        t: wQ
      } = QQ;
      if (!FQ.name) return null;
      const LQ = hq(FQ.rows);
      return (0, Wo.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: wQ(`${Hu}currentQuest`)
        }), (0, Wo.jsx)("strong", {
          className: "Baf2BookTitle",
          children: Wu(wQ, FQ.name)
        }), (0, Wo.jsx)(Ou, {
          goal: FQ.goal,
          t: wQ
        }), LQ.length > 1 && (0, Wo.jsx)(cu, {
          rows: LQ,
          t: wQ
        }), (0, Wo.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: FQ.rows.map((QQ => (0, Wo.jsx)(Cu, {
            row: QQ,
            view: FQ,
            t: wQ
          }, QQ.id)))
        }), FQ.reward && (0, Wo.jsxs)("span", {
          className: "Baf2BookReward",
          children: [wQ(`${Hu}questReward`), (0, Wo.jsx)(tu, {
            item: FQ.reward
          }), Yu(wQ, FQ.itemNames[FQ.reward], FQ.reward)]
        })]
      })
    }

    function ru(QQ) {
      let {
        quest: FQ,
        upcoming: wQ,
        t: LQ
      } = QQ;
      return (0, Wo.jsxs)("li", {
        className: Sq()("Baf2BookQuest", {
          Done: FQ[3],
          Upcoming: wQ
        }),
        children: [(0, Wo.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: FQ[3] ? "\u2713" : "\u25cb"
        }), (0, Wo.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, Wo.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Wu(LQ, FQ)
          }), (0, Wo.jsx)(Ou, {
            goal: FQ[2],
            t: LQ
          })]
        })]
      })
    }

    function Iu(QQ) {
      let {
        done: FQ,
        total: wQ,
        t: LQ
      } = QQ;
      const qQ = wQ > 0 ? Math.round(100 * FQ / wQ) : 0,
        oQ = LQ(`${Hu}questBookChapterProgress`, {
          done: String(FQ),
          total: String(wQ)
        });
      return (0, Wo.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": oQ,
          "aria-valuemin": 0,
          "aria-valuemax": wQ,
          "aria-valuenow": FQ,
          children: (0, Wo.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${qQ}%`
            }
          })
        }), (0, Wo.jsx)("span", {
          className: "Baf2BookProgressText",
          children: oQ
        })]
      })
    }

    function Uu(QQ) {
      let {
        view: FQ,
        tier: wQ,
        quests: LQ,
        t: qQ
      } = QQ;
      const oQ = wQ === FQ.tier,
        DQ = (null !== LQ && void 0 !== LQ ? LQ : []).filter((QQ => !QQ[4])),
        kQ = (null !== LQ && void 0 !== LQ ? LQ : []).filter((QQ => QQ[4])),
        vQ = DQ.filter((QQ => QQ[3])).length,
        mQ = oQ && FQ.name ? Ru(FQ.name) : null,
        uQ = DQ.findIndex((QQ => !QQ[3] && Ru(QQ) === mQ));
      return (0, Wo.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, Wo.jsx)("h3", {
            children: Gu(qQ, wQ)
          }), DQ.length > 0 && (0, Wo.jsx)(Iu, {
            done: vQ,
            total: DQ.length,
            t: qQ
          }), oQ && FQ.core && (0, Wo.jsx)(pu, {
            core: FQ.core,
            t: qQ
          })]
        }), (0, Wo.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === LQ && oQ && (0, Wo.jsx)(su, {
            view: FQ,
            t: qQ
          }), DQ.map(((QQ, wQ) => wQ === uQ ? (0, Wo.jsx)(su, {
            view: FQ,
            t: qQ
          }, Ru(QQ)) : (0, Wo.jsx)(ru, {
            quest: QQ,
            upcoming: !QQ[3],
            t: qQ
          }, Ru(QQ))))]
        }), oQ && FQ.side && (0, Wo.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, Wo.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: qQ(`${Hu}questSide`)
          }), (0, Wo.jsx)("strong", {
            className: "Baf2BookTitle",
            children: Wu(qQ, FQ.side.name)
          }), (0, Wo.jsx)(Ou, {
            goal: FQ.side.goal,
            t: qQ
          }), (0, Wo.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, Wo.jsx)(Cu, {
              row: FQ.side.row,
              view: FQ,
              t: qQ
            })
          })]
        }), kQ.length > 0 && (0, Wo.jsxs)(Wo.Fragment, {
          children: [(0, Wo.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: qQ(`${Hu}questBookSidesDone`)
          }), (0, Wo.jsx)("ol", {
            className: "Baf2BookQuests",
            children: kQ.map((QQ => (0, Wo.jsx)(ru, {
              quest: QQ,
              upcoming: !1,
              t: qQ
            }, Ru(QQ))))
          })]
        })]
      })
    }

    function Nu(QQ) {
      var FQ, wQ, oQ;
      let {
        store: DQ,
        close: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, Oq.y)(), mQ = (0, ku.i)(zq, DQ.get()), HQ = null !== (FQ = mQ.tier) && void 0 !== FQ ? FQ : 1, [bQ, YQ] = (0, LQ.useState)(null), xQ = (null === bQ || void 0 === bQ ? void 0 : bQ.at) === HQ ? bQ.tier : HQ, eQ = (0, LQ.useRef)(null), MQ = null !== mQ.chapters;
      (0, LQ.useEffect)((() => {
        var QQ;
        eQ.current && (eQ.current.scrollTop = 0);
        const FQ = null === (QQ = eQ.current) || void 0 === QQ ? void 0 : QQ.querySelector(".Baf2BookQuest.Current");
        if (eQ.current && FQ) {
          const QQ = FQ.getBoundingClientRect().bottom - eQ.current.getBoundingClientRect().bottom;
          QQ > 0 && (eQ.current.scrollTop += Math.min(QQ, FQ.getBoundingClientRect().top - eQ.current.getBoundingClientRect().top))
        }
      }), [xQ, MQ]);
      const GQ = null === (wQ = mQ.chapters) || void 0 === wQ ? void 0 : wQ.find((QQ => {
        let [FQ] = QQ;
        return FQ === xQ
      }));
      return (0, Wo.jsx)(SD.d, {
        close: kQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: bu,
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: vQ(`${Hu}questBookTitle`)
            }), (0, Wo.jsx)(iD.j, {
              onClick: kQ
            })]
          }), (0, Wo.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": vQ(`${Hu}questBookChapters`),
            children: qQ.slice(0, uQ()).map(((QQ, FQ) => {
              const wQ = FQ + 1,
                {
                  kind: LQ,
                  short: qQ
                } = tQ(wQ),
                oQ = AQ(wQ, HQ),
                DQ = oQ ? vQ(`${Hu}coreAtomicHidden`) : Gu(vQ, wQ);
              return (0, Wo.jsx)("li", {
                children: (0, Wo.jsx)("button", {
                  type: "button",
                  className: Sq()({
                    Stage: "tier" !== LQ,
                    Atomic: "atomic" === LQ,
                    Current: wQ === HQ,
                    Selected: wQ === xQ
                  }),
                  disabled: wQ > HQ,
                  "aria-pressed": wQ === xQ,
                  "aria-label": DQ,
                  title: oQ ? void 0 : DQ,
                  onClick: () => {
                    YQ({
                      tier: wQ,
                      at: HQ
                    })
                  },
                  children: oQ ? "?" : qQ
                })
              }, QQ.nameKey)
            }))
          }), (0, Wo.jsxs)("div", {
            ref: eQ,
            className: "Baf2BookBody",
            children: [fq(mQ) && xQ === HQ && (0, Wo.jsx)("p", {
              className: "Baf2BookEmpty",
              children: vQ(`${Hu}questBookAllDone`)
            }), (0, Wo.jsx)(Uu, {
              view: mQ,
              tier: xQ,
              quests: null !== (oQ = null === GQ || void 0 === GQ ? void 0 : GQ[1]) && void 0 !== oQ ? oQ : null,
              t: vQ
            })]
          })]
        })
      })
    }
    const Tu = "buildAFactory2Game:";

    function Ku(QQ) {
      let {
        tiers: FQ,
        from: wQ,
        tier: LQ,
        shown: qQ,
        Vb: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), kQ = FQ.map(((QQ, FQ) => {
        const kQ = wQ + FQ,
          {
            kind: vQ,
            short: mQ
          } = tQ(kQ),
          uQ = AQ(kQ, LQ);
        return (0, Wo.jsx)("li", {
          children: (0, Wo.jsx)("button", {
            type: "button",
            className: Sq()({
              Stage: "tier" !== vQ,
              Silhouette: uQ,
              Reached: kQ <= LQ,
              Current: kQ === LQ,
              Next: kQ === LQ + 1,
              Selected: kQ === qQ
            }),
            disabled: uQ,
            "aria-pressed": kQ === qQ,
            "aria-label": uQ ? DQ(`${Tu}coreAtomicHidden`) : void 0,
            title: uQ ? void 0 : DQ(`${Tu}${QQ.nameKey}`),
            onClick: () => {
              oQ(kQ)
            },
            children: uQ ? "?" : mQ
          })
        }, QQ.nameKey)
      }));
      return (0, Wo.jsx)(Wo.Fragment, {
        children: kQ
      })
    }

    function zu(QQ) {
      let {
        id: FQ,
        label: wQ,
        tiers: LQ,
        from: qQ,
        ...oQ
      } = QQ;
      return (0, Wo.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, Wo.jsx)("span", {
          id: FQ,
          className: "Baf2CoreLadderLabel",
          children: wQ
        }), (0, Wo.jsx)("ol", {
          "aria-labelledby": FQ,
          children: (0, Wo.jsx)(Ku, {
            ...oQ,
            tiers: LQ,
            from: qQ
          })
        })]
      })
    }

    function lu(QQ) {
      const {
        t: FQ
      } = (0, Oq.y)(), wQ = qQ.findIndex((QQ => void 0 !== QQ.stage)), LQ = qQ.findIndex((QQ => void 0 !== QQ.reactorTier)), oQ = wQ < 0 ? qQ : qQ.slice(0, wQ), DQ = wQ < 0 ? [] : qQ.slice(wQ, LQ < 0 ? void 0 : LQ), vQ = LQ < 0 || !kQ() ? [] : qQ.slice(LQ);
      return (0, Wo.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, Wo.jsx)(zu, {
          ...QQ,
          id: "baf2CoreTiersLabel",
          label: FQ(`${Tu}coreTiersLabel`),
          tiers: oQ,
          from: 1
        }), DQ.length > 0 && (0, Wo.jsx)(zu, {
          ...QQ,
          id: "baf2CoreStagesLabel",
          label: FQ(`${Tu}coreStagesLabel`),
          tiers: DQ,
          from: wQ + 1
        }), vQ.length > 0 && (0, Wo.jsx)(zu, {
          ...QQ,
          id: "baf2CoreAtomicLabel",
          label: FQ(`${Tu}coreAtomicLabel`),
          tiers: vQ,
          from: LQ + 1
        })]
      })
    }
    const ju = "buildAFactory2Game:";

    function au(QQ) {
      let {
        item: FQ,
        itemNames: wQ,
        children: LQ
      } = QQ;
      return (0, Wo.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: FQ,
            amount: 0
          })
        }), (0, Wo.jsx)(Iq.e, {
          text: wQ[FQ]
        }), LQ]
      })
    }

    function Xu(QQ) {
      const FQ = new Map;
      for (const {
          block: LQ
        }
        of QQ.newDeposits) {
        var wQ;
        FQ.set(LQ, (null !== (wQ = FQ.get(LQ)) && void 0 !== wQ ? wQ : 0) + 1)
      }
      return [...FQ]
    }

    function fu(QQ) {
      let {
        value: FQ,
        label: wQ,
        more: LQ
      } = QQ;
      return (0, Wo.jsxs)("li", {
        children: [(0, Wo.jsx)("strong", {
          children: FQ
        }), (0, Wo.jsx)("span", {
          children: wQ
        }), LQ > 0 && (0, Wo.jsxs)("em", {
          children: ["+", LQ]
        })]
      })
    }

    function Vu(QQ) {
      let {
        items: FQ,
        itemNames: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), [oQ, DQ] = (0, LQ.useState)(null), kQ = null !== oQ && FQ.includes(oQ) ? oQ : null;
      return (0, Wo.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, Wo.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: qQ(`${ju}coreRewardUnlocks`)
        }), (0, Wo.jsx)("ul", {
          children: FQ.map((QQ => (0, Wo.jsx)("li", {
            children: (0, Wo.jsx)("button", {
              type: "button",
              className: Sq()("Baf2PanelIcon", {
                Picked: QQ === kQ
              }),
              title: qo(qQ, QQ),
              "aria-label": qo(qQ, QQ),
              "aria-pressed": QQ === kQ,
              onClick: () => {
                DQ(QQ === kQ ? null : QQ)
              },
              children: (0, Wo.jsx)(rq.e, {
                itemName: QQ,
                amount: 0
              })
            })
          }, QQ)))
        }), (0, Wo.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== kQ && (0, Wo.jsxs)(Wo.Fragment, {
            children: [(0, Wo.jsx)(Iq.e, {
              text: wQ[kQ]
            }), " \xb7 ", (0, Wo.jsx)(Iq.e, {
              text: wQ[rQ(kQ)]
            })]
          }), null === kQ && qQ(`${ju}coreRecipeTap`)]
        })]
      })
    }

    function hu(QQ) {
      var FQ, wQ;
      let {
        def: LQ,
        tier: qQ,
        itemNames: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), kQ = qQ > 1 ? eQ(qQ - 1) : void 0, vQ = Math.round(2 * LQ.islandRadius), mQ = kQ ? Math.round(2 * kQ.islandRadius) : vQ, uQ = qQ >= 3 ? CL(qQ) : null;
      return (0, Wo.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, Wo.jsxs)("ul", {
          className: Sq()("Baf2CoreStats", {
            Four: null !== uQ
          }),
          children: [(0, Wo.jsx)(fu, {
            value: `${vQ}\xd7${vQ}`,
            label: DQ(`${ju}coreStatIsland`),
            more: vQ - mQ
          }), (0, Wo.jsx)(fu, {
            value: String(LQ.machineAllowance),
            label: DQ(`${ju}coreStatMachines`),
            more: LQ.machineAllowance - (null !== (FQ = null === kQ || void 0 === kQ ? void 0 : kQ.machineAllowance) && void 0 !== FQ ? FQ : LQ.machineAllowance)
          }), (0, Wo.jsx)(fu, {
            value: String(LQ.beltAllowance),
            label: DQ(`${ju}coreStatBelts`),
            more: LQ.beltAllowance - (null !== (wQ = null === kQ || void 0 === kQ ? void 0 : kQ.beltAllowance) && void 0 !== wQ ? wQ : LQ.beltAllowance)
          }), null !== uQ && (0, Wo.jsx)(fu, {
            value: String(uQ),
            label: DQ(`${ju}coreStatStorage`),
            more: uQ - (kQ ? CL(qQ - 1) : uQ)
          })]
        }), LQ.reward && (0, Wo.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Wo.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: DQ(`${ju}coreRewardItem`)
          }), (0, Wo.jsx)(au, {
            item: LQ.reward,
            itemNames: oQ
          })]
        }), LQ.newDeposits.length > 0 && (0, Wo.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, Wo.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: DQ(LQ.newDeposits.length > 1 ? `${ju}coreRewardDeposits` : `${ju}coreRewardDeposit`)
          }), Xu(LQ).map((QQ => {
            let [FQ, wQ] = QQ;
            return (0, Wo.jsx)(au, {
              item: FQ,
              itemNames: oQ,
              children: wQ > 1 && ` \xd7${wQ}`
            }, FQ)
          }))]
        }), LQ.unlocks.length > 0 && (0, Wo.jsx)(Vu, {
          items: LQ.unlocks,
          itemNames: oQ
        }), (0, Wo.jsx)(Ju, {
          tier: qQ
        })]
      })
    }

    function Ju(QQ) {
      let {
        tier: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), LQ = tq[FQ];
      if (!LQ) return null;
      const qQ = Aq(FQ, 0, 0).barrierMax !== Aq(FQ - 1, 0, 0).barrierMax;
      return (0, Wo.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: qQ ? mq.Chestplate : vq,
            amount: 0
          })
        }), wQ(`${ju}gearPerkLine`, {
          perk: wQ(`${ju}${LQ}`)
        })]
      })
    }

    function Eu(QQ, FQ) {
      return null === QQ ? FQ : QQ.value
    }

    function nu(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === QQ || wQ - QQ.atMs >= LQ ? null : qQ(QQ.value, FQ) ? QQ.armed ? null : QQ : QQ.armed ? QQ : {
        ...QQ,
        armed: !0
      }
    }

    function gu(QQ, FQ) {
      const wQ = FQ.filter((FQ => {
        var wQ;
        return !1 !== (null === (wQ = QQ.get(FQ)) || void 0 === wQ ? void 0 : wQ.value)
      }));
      for (const [LQ, qQ] of QQ) qQ.value && !FQ.includes(LQ) && wQ.push(LQ);
      return wQ
    }

    function Pu(QQ, FQ, wQ, qQ) {
      const [oQ, DQ] = (0, LQ.useState)((() => new Map)), kQ = () => {
        DQ((FQ => function(QQ, FQ, wQ, LQ) {
          var qQ;
          let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            DQ = null;
          for (const [kQ, vQ] of QQ) {
            const qQ = nu(vQ, FQ(kQ), wQ, LQ, oQ);
            qQ !== vQ && (DQ ??= new Map(QQ), null === qQ ? DQ.delete(kQ) : DQ.set(kQ, qQ))
          }
          return null !== (qQ = DQ) && void 0 !== qQ ? qQ : QQ
        }(FQ, QQ, Date.now(), wQ, qQ)))
      };
      (0, LQ.useEffect)((() => {
        kQ()
      }), [FQ, wQ]), (0, LQ.useEffect)((() => {
        if (0 === oQ.size) return;
        const QQ = Math.min(...[...oQ.values()].map((QQ => QQ.atMs))),
          FQ = setTimeout(kQ, Math.max(0, QQ + wQ - Date.now()) + 1);
        return () => {
          clearTimeout(FQ)
        }
      }), [oQ, FQ, wQ]);
      return [oQ, (FQ, wQ) => {
        DQ((LQ => {
          const oQ = new Map(LQ);
          return oQ.set(FQ, function(QQ, FQ, wQ) {
            return {
              value: QQ,
              atMs: wQ,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(QQ, FQ)
            }
          }(wQ, QQ(FQ), Date.now(), qQ)), oQ
        }))
      }]
    }
    const Zu = "buildAFactory2Game:";

    function yu(QQ) {
      let {
        message: FQ,
        itemNames: wQ
      } = QQ;
      const qQ = hD(),
        {
          t: oQ
        } = (0, Oq.y)(),
        [DQ, kQ] = (0, LQ.useState)(!1),
        [vQ, mQ] = function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zD;
          const [wQ, LQ] = Pu((FQ => QQ.includes(FQ)), QQ, FQ, Object.is);
          return [gu(wQ, QQ), LQ]
        }(FQ.baf2CoreBankPaused),
        uQ = new Set(vQ),
        HQ = [...FQ.baf2CoreBanked];
      for (const LQ of uQ) HQ.some((QQ => {
        let [FQ] = QQ;
        return FQ === LQ
      })) || HQ.push([LQ, 0]);
      return 0 === HQ.length ? null : (0, Wo.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, Wo.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": DQ,
          onClick: () => {
            kQ(!DQ)
          },
          children: [(0, Wo.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: oQ(`${Zu}coreBankedLater`)
          }), (0, Wo.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: HQ.map((QQ => {
              let [FQ, wQ] = QQ;
              const LQ = uQ.has(FQ);
              return (0, Wo.jsxs)("span", {
                className: Sq()({
                  Paused: LQ
                }),
                title: LQ ? oQ(`${Zu}coreBankPausedTag`) : void 0,
                children: [(0, Wo.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, Wo.jsx)(rq.e, {
                    itemName: FQ,
                    amount: 0
                  })
                }), wQ, LQ && (0, Wo.jsx)(sq.c, {
                  name: "pause"
                })]
              }, FQ)
            }))
          }), (0, Wo.jsx)(sq.c, {
            name: DQ ? "angle-up" : "angle-down"
          })]
        }), DQ && (0, Wo.jsxs)(Wo.Fragment, {
          children: [(0, Wo.jsx)("ul", {
            children: HQ.map((QQ => {
              let [FQ, LQ] = QQ;
              const DQ = uQ.has(FQ);
              return (0, Wo.jsxs)("li", {
                children: [(0, Wo.jsxs)(au, {
                  item: FQ,
                  itemNames: wQ,
                  children: [(0, Wo.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: LQ
                  }), DQ && (0, Wo.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: oQ(`${Zu}coreBankPausedTag`)
                  })]
                }), (0, Wo.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, Wo.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === LQ,
                    onClick: () => {
                      qQ.send(`baf2corewithdraw ${LQ} ${FQ}`)
                    },
                    children: oQ(`${Zu}coreTake`)
                  }), (0, Wo.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      qQ.send(`${pQ} ${FQ}`), mQ(FQ, !DQ)
                    },
                    children: oQ(DQ ? `${Zu}coreBankResume` : `${Zu}coreBankStop`)
                  })]
                })]
              }, FQ)
            }))
          }), (0, Wo.jsx)("p", {
            className: "Baf2CoreHint",
            children: oQ(`${Zu}coreBankNote`)
          })]
        })]
      })
    }
    const Bu = "buildAFactory2Game:";

    function du(QQ) {
      const FQ = Math.max(0, Math.floor(QQ));
      return `${Math.floor(FQ/60)}:${String(FQ%60).padStart(2,"0")}`
    }

    function QH(QQ) {
      let {
        item: FQ
      } = QQ;
      return (0, Wo.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, Wo.jsx)(rq.e, {
          itemName: FQ,
          amount: 0
        })
      })
    }

    function FH() {
      return (0, Wo.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, Wo.jsx)(sq.c, {
          name: "bolt"
        })
      })
    }

    function wH(QQ) {
      let {
        charge: FQ,
        hint: wQ,
        itemNames: LQ
      } = QQ;
      const qQ = hD(),
        {
          t: oQ
        } = (0, Oq.y)(),
        [DQ, kQ, vQ, mQ, uQ, HQ, bQ] = FQ,
        [YQ, xQ] = function(QQ) {
          var FQ;
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zD,
            LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [qQ, oQ] = Pu((() => QQ), QQ, wQ, LQ);
          return [Eu(null !== (FQ = qQ.get("")) && void 0 !== FQ ? FQ : null, QQ), QQ => {
            oQ("", QQ)
          }]
        }(bQ),
        AQ = YQ === bQ ? HQ : !YQ,
        tQ = mQ >= uQ,
        eQ = DQ.find((QQ => {
          let [, FQ, wQ] = QQ;
          return wQ < .9 * FQ
        }));
      let MQ = `${Bu}coreChargeWaiting`,
        GQ = {};
      return tQ ? MQ = `${Bu}coreChargeDone` : YQ ? MQ = `${Bu}coreChargeStopped` : AQ && wQ ? (MQ = `${Bu}${wQ[0]}`, GQ = {
        item: qo(oQ, wQ[1])
      }) : AQ && eQ ? (MQ = `${Bu}coreChargeShort`, GQ = {
        item: qo(oQ, eQ[0])
      }) : AQ && kQ > 0 && !vQ ? MQ = `${Bu}coreChargePower` : AQ && (MQ = `${Bu}coreChargeRunning`), (0, Wo.jsxs)("div", {
        className: Sq()("Baf2CoreCharge", {
          Waiting: !AQ && !tQ,
          Done: tQ
        }),
        children: [(0, Wo.jsxs)("h4", {
          children: [oQ(`${Bu}coreChargeTitle`), (0, Wo.jsx)("span", {
            children: oQ(`${Bu}coreChargeProgress`, {
              done: du(mQ),
              need: du(uQ)
            })
          })]
        }), (0, Wo.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, Wo.jsx)("div", {
            style: {
              width: 100 * Math.min(mQ, uQ) / uQ + "%"
            }
          })
        }), (0, Wo.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [DQ.map((QQ => {
            var FQ;
            let [wQ, qQ, DQ] = QQ;
            const kQ = DQ >= .9 * qQ;
            return (0, Wo.jsxs)("li", {
              className: Sq()({
                Done: kQ,
                Short: AQ && !kQ
              }),
              children: [(0, Wo.jsx)(QH, {
                item: wQ
              }), (0, Wo.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, Wo.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Wo.jsx)(Iq.e, {
                    text: null !== (FQ = LQ[wQ]) && void 0 !== FQ ? FQ : wQ
                  }), (0, Wo.jsx)("span", {
                    children: oQ(`${Bu}coreChargeItem`, {
                      now: String(DQ),
                      need: String(qQ)
                    })
                  })]
                }), (0, Wo.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, Wo.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*DQ/qQ)}%`
                    }
                  })
                })]
              })]
            }, wQ)
          })), kQ > 0 && (0, Wo.jsxs)("li", {
            className: Sq()("Baf2CoreChargePower", {
              Short: AQ && !vQ
            }),
            children: [(0, Wo.jsx)(FH, {}), (0, Wo.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Wo.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Wo.jsx)("span", {
                  children: oQ(`${Bu}coreChargePowerRow`, {
                    power: yQ(kQ)
                  })
                })
              })
            })]
          })]
        }), (0, Wo.jsx)("p", {
          className: "Baf2CoreHint",
          children: oQ(MQ, GQ)
        }), !tQ && (AQ || YQ) && (0, Wo.jsx)("button", {
          type: "button",
          className: Sq()("Baf2CoreChargeToggle", {
            Stopped: YQ
          }),
          onClick: () => {
            qQ.send(CQ), xQ(!YQ)
          },
          children: oQ(YQ ? `${Bu}coreChargeRestart` : `${Bu}coreChargeStop`)
        })]
      })
    }

    function LH(QQ) {
      let {
        charge: FQ,
        reached: wQ,
        itemNames: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)();
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2CoreCharge", {
          Done: wQ
        }),
        children: [(0, Wo.jsxs)("h4", {
          children: [qQ(`${Bu}coreChargeTitle`), (0, Wo.jsx)("span", {
            children: qQ(`${Bu}coreChargeSpecTime`, {
              time: du(FQ.seconds)
            })
          })]
        }), (0, Wo.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [FQ.items.map((QQ => {
            var FQ;
            let {
              item: oQ,
              amount: DQ
            } = QQ;
            return (0, Wo.jsxs)("li", {
              className: Sq()({
                Done: wQ
              }),
              children: [(0, Wo.jsx)(QH, {
                item: oQ
              }), (0, Wo.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, Wo.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, Wo.jsx)(Iq.e, {
                    text: null !== (FQ = LQ[oQ]) && void 0 !== FQ ? FQ : oQ
                  }), (0, Wo.jsx)("span", {
                    children: qQ(`${Bu}coreChargeSpecItem`, {
                      need: String(DQ)
                    })
                  })]
                })
              })]
            }, oQ)
          })), FQ.powerPerS > 0 && (0, Wo.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, Wo.jsx)(FH, {}), (0, Wo.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, Wo.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, Wo.jsx)("span", {
                  children: qQ(`${Bu}coreChargePowerRow`, {
                    power: yQ(FQ.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const qH = "buildAFactory2Game:";

    function oH(QQ) {
      let {
        def: FQ,
        reached: wQ,
        banked: LQ,
        itemNames: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)();
      return (0, Wo.jsx)("ul", {
        className: "Baf2CoreCost",
        children: FQ.cost.map((QQ => {
          let {
            item: FQ,
            amount: DQ
          } = QQ;
          const kQ = wQ ? 0 : LQ(FQ);
          return (0, Wo.jsx)("li", {
            children: (0, Wo.jsx)(au, {
              item: FQ,
              itemNames: qQ,
              children: (0, Wo.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: kQ > 0 ? oQ(`${qH}coreBankedFor`, {
                  amount: String(kQ),
                  total: String(DQ)
                }) : `\xd7${DQ}`
              })
            })
          }, FQ)
        }))
      })
    }

    function DH(QQ, FQ) {
      if (FQ >= uQ()) return QQ(`${qH}coreMaxTier`);
      const wQ = mQ[FQ + 1];
      return wQ && !wQ.startsWith("upgradeCore") ? QQ(`${qH}coreGateQuest`, {
        quest: QQ(`${qH}quest_${wQ}`)
      }) : QQ(`${qH}coreGateClosed`)
    }

    function kH() {
      const {
        t: QQ
      } = (0, Oq.y)(), FQ = hD(), wQ = (0, LQ.useRef)(null), qQ = (0, LQ.useRef)(Date.now());
      return Bm(!0, wQ), (0, Wo.jsx)("div", {
        ref: wQ,
        className: "Baf2CoreGrow",
        children: (0, Wo.jsx)(iD.m, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - qQ.current >= 600 && FQ.send(GQ)
          },
          children: QQ(`${qH}coreGrow`)
        })
      })
    }

    function vH(QQ) {
      let {
        message: FQ,
        itemNames: wQ,
        next: LQ
      } = QQ;
      const qQ = hD(),
        {
          t: oQ
        } = (0, Oq.y)(),
        DQ = FQ.baf2CoreTier,
        kQ = FQ.baf2CoreReady,
        vQ = FQ.baf2CoreNeeds.filter((QQ => {
          let [, FQ, wQ, LQ] = QQ;
          return LQ > 0 && FQ < wQ
        })),
        mQ = FQ.baf2CoreNeeds.every((QQ => {
          let [, FQ, wQ] = QQ;
          return FQ >= wQ
        })),
        uQ = FQ.baf2CoreKeep;
      return (0, Wo.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [kQ && (0, Wo.jsx)(kH, {}), (0, Wo.jsx)("h3", {
            children: oQ(`${qH}coreBring`)
          }), (0, Wo.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: FQ.baf2CoreNeeds.map((QQ => {
              let [FQ, LQ, DQ, kQ] = QQ;
              return (0, Wo.jsxs)("li", {
                className: Sq()({
                  Done: LQ >= DQ
                }),
                children: [(0, Wo.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, Wo.jsx)(rq.e, {
                    itemName: FQ,
                    amount: 0
                  })
                }), (0, Wo.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, Wo.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, Wo.jsx)(Iq.e, {
                      text: wQ[FQ]
                    }), (0, Wo.jsxs)("span", {
                      children: [LQ, "/", DQ]
                    })]
                  }), (0, Wo.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, Wo.jsx)("div", {
                      style: {
                        width: 100 * LQ / DQ + "%"
                      }
                    }), kQ > 0 && (0, Wo.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * kQ / DQ + "%"
                      }
                    })]
                  })]
                }), kQ > 0 && LQ < DQ && (0, Wo.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    qQ.send(`${cQ} ${FQ}`)
                  },
                  children: oQ(`${qH}coreDeposit`, {
                    amount: String(kQ)
                  })
                })]
              }, FQ)
            }))
          }), FQ.baf2CoreCharge && (0, Wo.jsx)(wH, {
            charge: FQ.baf2CoreCharge,
            hint: FQ.baf2CoreChargeHint,
            itemNames: wQ
          }), !kQ && vQ.length > 1 && (0, Wo.jsx)(iD.m, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              qQ.send(GQ)
            },
            children: oQ(`${qH}coreHandOver`)
          }), !kQ && void 0 !== uQ && (0, Wo.jsx)("p", {
            className: "Baf2CoreHint",
            children: oQ(`${qH}coreKeepRest`, {
              item: qo(oQ, uQ)
            })
          }), !kQ && !mQ && 0 === vQ.length && void 0 === uQ && (0, Wo.jsx)("p", {
            className: "Baf2CoreHint",
            children: oQ(`${qH}coreNothingHeld`)
          }), (0, Wo.jsx)(yu, {
            message: FQ,
            itemNames: wQ
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Wo.jsx)("h3", {
            children: oQ(`${qH}coreRewards`)
          }), (0, Wo.jsx)(hu, {
            def: LQ,
            tier: DQ + 1,
            itemNames: wQ
          })]
        })]
      })
    }

    function mH(QQ) {
      let {
        message: FQ,
        itemNames: wQ,
        shown: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), oQ = FQ.baf2CoreTier, DQ = eQ(LQ), kQ = LQ <= oQ, vQ = new Map(FQ.baf2CoreBanked), mQ = !MQ(oQ, SQ(FQ)) && LQ === oQ;
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2CoreBody", {
          Locked: !kQ
        }),
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Wo.jsx)("h3", {
            children: qQ(kQ ? `${qH}coreItTook` : `${qH}coreItNeeds`)
          }), 0 === DQ.cost.length && (0, Wo.jsx)("p", {
            className: "Baf2CoreHint",
            children: qQ(`${qH}coreTierStart`)
          }), DQ.cost.length > 0 && (0, Wo.jsx)(oH, {
            def: DQ,
            reached: kQ,
            banked: QQ => {
              var FQ;
              return function(QQ, FQ, wQ, LQ) {
                let qQ = QQ;
                for (let DQ = FQ + 2; DQ <= wQ; DQ++) {
                  var oQ;
                  const QQ = eQ(DQ).cost.find((QQ => QQ.item === LQ)),
                    FQ = Math.min(qQ, null !== (oQ = null === QQ || void 0 === QQ ? void 0 : QQ.amount) && void 0 !== oQ ? oQ : 0);
                  if (DQ === wQ) return FQ;
                  qQ -= FQ
                }
                return 0
              }(null !== (FQ = vQ.get(QQ)) && void 0 !== FQ ? FQ : 0, oQ, LQ, QQ)
            },
            itemNames: wQ
          }), DQ.charge && (0, Wo.jsx)(LH, {
            charge: DQ.charge,
            reached: kQ,
            itemNames: wQ
          }), mQ && (0, Wo.jsxs)(Wo.Fragment, {
            children: [(0, Wo.jsx)("p", {
              className: "Baf2CoreHint",
              children: DH(qQ, oQ)
            }), (0, Wo.jsx)(yu, {
              message: FQ,
              itemNames: wQ
            })]
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, Wo.jsx)("h3", {
            children: qQ(kQ ? `${qH}coreGave` : `${qH}coreLockedRewards`)
          }), (0, Wo.jsx)(hu, {
            def: DQ,
            tier: LQ,
            itemNames: wQ
          })]
        })]
      })
    }

    function uH(QQ, FQ) {
      const {
        key: wQ,
        params: LQ
      } = YQ(FQ - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return QQ(`${qH}${wQ}`, LQ)
    }
    const HH = "buildAFactory2Game:",
      bH = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      YH = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function xH(QQ) {
      let {
        view: FQ,
        close: wQ,
        askIslands: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)(), [DQ, kQ] = (0, LQ.useState)(!1);
      (0, LQ.useEffect)((() => {
        if (!DQ) return;
        const QQ = window.setTimeout((() => {
          kQ(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(QQ)
        }
      }), [DQ]);
      const {
        message: vQ,
        itemNames: mQ
      } = FQ, uQ = vQ.baf2CoreTier, HQ = eQ(uQ), bQ = MQ(uQ, SQ(vQ)), [AQ, tQ] = vQ.baf2CoreMachines, [GQ, pQ] = vQ.baf2CoreBelts, cQ = vQ.baf2CoreStorage, CQ = vQ.baf2CoreReady, [iQ, WQ] = (0, LQ.useState)(null), RQ = (null === iQ || void 0 === iQ ? void 0 : iQ.at) === uQ && iQ.ready === CQ ? iQ.tier : bQ ? uQ + 1 : uQ;
      let OQ = "coreTierLocked";
      RQ <= uQ ? OQ = "coreTierReached" : RQ === uQ + 1 && (OQ = "coreTierNext");
      const sQ = oQ(`${HH}${eQ(RQ).nameKey}`),
        rQ = RQ === uQ + 1 ? bQ : null,
        IQ = YQ(RQ, {
          tier: OQ,
          stage: bH[OQ],
          atomic: YH[OQ]
        }),
        UQ = oQ(`${HH}${IQ.key}`, {
          ...IQ.params,
          name: sQ
        }),
        NQ = YQ(uQ, xQ),
        TQ = oQ(`${HH}${NQ.key}`, {
          ...NQ.params,
          name: oQ(`${HH}${HQ.nameKey}`)
        });
      return (0, Wo.jsx)(SD.d, {
        close: wQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              children: [(0, Wo.jsx)("h2", {
                id: "baf2CoreTitle",
                children: oQ(`${HH}coreTitle`)
              }), void 0 !== vQ.baf2CoreIslandName && (0, Wo.jsx)("p", {
                className: "Baf2CoreIsland",
                children: vQ.baf2CoreIslandName
              }), (0, Wo.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, Wo.jsx)("span", {
                  children: TQ
                }), (0, Wo.jsx)("span", {
                  className: Sq()({
                    Full: AQ >= tQ
                  }),
                  children: oQ(`${HH}coreMachineCount`, {
                    amount: String(AQ),
                    total: String(tQ)
                  })
                }), (0, Wo.jsx)("span", {
                  className: Sq()({
                    Full: GQ >= pQ
                  }),
                  children: oQ(`${HH}coreBeltCount`, {
                    amount: String(GQ),
                    total: String(pQ)
                  })
                }), void 0 !== cQ && (0, Wo.jsx)("span", {
                  className: Sq()({
                    Full: cQ[0] >= cQ[1]
                  }),
                  children: oQ(`${HH}coreStorageCount`, {
                    amount: String(cQ[0]),
                    total: String(cQ[1])
                  })
                })]
              })]
            }), (0, Wo.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [vQ.baf2CoreIslands && (0, Wo.jsx)(iD.f, {
                className: "Baf2CoreIslandsButton",
                disabled: DQ,
                onClick: () => {
                  kQ(!0), qQ()
                },
                children: oQ(`${HH}islandsOpenButton`)
              }), (0, Wo.jsx)(iD.j, {
                onClick: wQ
              })]
            })]
          }), (0, Wo.jsx)(lu, {
            tier: uQ,
            shown: RQ,
            Vb: QQ => {
              WQ({
                tier: QQ,
                at: uQ,
                ready: CQ
              })
            }
          }), (0, Wo.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [UQ, RQ > uQ + 1 && (0, Wo.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: uH(oQ, RQ)
            })]
          }), 6 === RQ && RQ > uQ && (0, Wo.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: oQ(`${HH}coreStagesNote`)
          }), 11 === RQ && RQ > uQ && (0, Wo.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: oQ(`${HH}coreAtomicNote`)
          }), rQ && (0, Wo.jsx)(vH, {
            message: vQ,
            itemNames: mQ,
            next: rQ
          }), !rQ && (0, Wo.jsx)(mH, {
            message: vQ,
            itemNames: mQ,
            shown: RQ
          })]
        })
      })
    }
    const AH = {
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
    const tH = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: vo,
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

    function eH(QQ) {
      return QQ.baf2DropCometOreOnly ? "dropCometOre" : QQ.baf2DropCometIsotope ? "seed" === QQ.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function MH(QQ) {
      let {
        message: FQ,
        quests: wQ,
        close: qQ,
        leave: oQ
      } = QQ;
      const DQ = hD(),
        {
          t: kQ
        } = (0, Oq.y)(),
        vQ = (0, ku.i)(zq, wQ.get()),
        mQ = function(QQ) {
          var FQ;
          if (!NQ(QQ.tutorial)) return null;
          const wQ = QQ.rows.find((QQ => QQ.current)),
            LQ = wQ ? AH[wQ.key] : void 0;
          return null !== (FQ = null !== LQ && void 0 !== LQ ? LQ : QQ.side ? AH[QQ.side.row.key] : void 0) && void 0 !== FQ ? FQ : null
        }(vQ),
        uQ = null === vQ.tier || Ho(vQ.tier),
        HQ = uQ ? tH : tH.filter((QQ => {
          let {
            item: FQ
          } = QQ;
          return FQ !== vo
        })),
        [bQ, YQ] = (0, LQ.useState)(null),
        xQ = null !== bQ && void 0 !== bQ ? bQ : !FQ.baf2DropFoundSalvage && uQ,
        AQ = FQ.baf2DropRuinDistance,
        tQ = FQ.baf2DropComet,
        eQ = FQ.baf2DropOldWorks,
        MQ = FQ.baf2DropGrove,
        GQ = function(QQ) {
          return 2 + Number(void 0 !== QQ.baf2DropComet) + Number(!!QQ.baf2DropOwedComet || void 0 !== QQ.baf2DropOwedWaitMinutes) + Number(void 0 !== QQ.baf2DropDigDistance) + Number(void 0 !== QQ.baf2DropOldWorks) + Number(void 0 !== QQ.baf2DropGrove)
        }(FQ),
        pQ = QQ => {
          DQ.send(function(QQ) {
            return `baf2drop ${QQ}`
          }(QQ)), oQ()
        };
      let cQ = kQ("buildAFactory2Game:dropRuinNone");
      if (null !== AQ) {
        let QQ = FQ.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        FQ.baf2DropRuinOldWorks && (QQ = "dropRuinOldWorks");
        const wQ = void 0 === FQ.baf2DropRuinCluster ? kQ("buildAFactory2Game:dropRuinOpen") : kQ("buildAFactory2Game:dropRuinCluster", {
          count: String(FQ.baf2DropRuinCluster)
        });
        cQ = `${kQ(`buildAFactory2Game:${QQ}`,{distance:String(AQ)})} ${wQ}`
      }
      let CQ = kQ("buildAFactory2Game:dropBelowDescription");
      void 0 !== FQ.baf2DropBelowLook && (CQ = kQ("buildAFactory2Game:dropBelowLook", {
        look: kQ(FQ.baf2DropBelowLook)
      }));
      const SQ = "buildAFactory2Game:wildsRegion_survivorGrove" === FQ.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        iQ = co(kQ, 60 * function(QQ) {
          const [FQ, wQ] = (0, LQ.useState)((() => Date.now())), [qQ, oQ] = (0, LQ.useState)(FQ);
          return (0, LQ.useEffect)((() => {
            const QQ = Date.now();
            wQ(QQ), oQ(QQ)
          }), [QQ]), (0, LQ.useEffect)((() => {
            const QQ = window.setInterval((() => {
              oQ(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(QQ)
            }
          }), []), Math.max(1, QQ.baf2DropRenewMinutes - Math.floor((qQ - FQ) / 6e4))
        }(FQ)),
        WQ = function(QQ, FQ, wQ) {
          return "ruin" === QQ && !wQ || "owed" === QQ && !FQ.baf2DropOwedComet ? null : QQ
        }(mQ, FQ, null !== AQ),
        RQ = function(QQ) {
          for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
          return Sq()("Baf2DropTile", ...wQ, {
            Wanted: WQ === QQ
          })
        };
      return (0, Wo.jsx)(SD.d, {
        close: qQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, Wo.jsxs)("section", {
          className: Sq()("Baf2Panel Baf2DropMap", {
            Many: GQ >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              children: [(0, Wo.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: kQ("buildAFactory2Game:dropMapTitle")
              }), (0, Wo.jsx)("p", {
                children: kQ("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, Wo.jsx)(iD.j, {
              onClick: qQ
            })]
          }), (0, Wo.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== tQ && (0, Wo.jsxs)(iD.y, {
              className: RQ("comet", "Baf2DropComet"),
              onClick: () => {
                pQ("comet")
              },
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropComet")
              }), (0, Wo.jsx)("span", {
                children: kQ(`buildAFactory2Game:${eH(FQ)}`, {
                  distance: String(tQ)
                })
              })]
            }), FQ.baf2DropOwedComet && (0, Wo.jsxs)(iD.y, {
              className: RQ("owed", "Baf2DropComet"),
              onClick: () => {
                pQ("owed")
              },
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropOwedComet")
              }), (0, Wo.jsx)("span", {
                children: FQ.baf2DropOwedIsotope ? kQ("buildAFactory2Game:dropOwedIsotopeDescription") : kQ("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== FQ.baf2DropOwedWaitMinutes && (0, Wo.jsxs)(iD.y, {
              className: RQ("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropOwedComet")
              }), (0, Wo.jsx)("span", {
                children: kQ("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(FQ.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, Wo.jsxs)(iD.f, {
              className: RQ("below"),
              onClick: () => {
                pQ("below")
              },
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropBelow")
              }), (0, Wo.jsx)("span", {
                children: CQ
              })]
            }), void 0 !== FQ.baf2DropDigDistance && (0, Wo.jsxs)(iD.s, {
              className: RQ("dig"),
              onClick: () => {
                pQ("dig")
              },
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropDig")
              }), (0, Wo.jsx)("span", {
                children: kQ("buildAFactory2Game:dropDigDescription", {
                  distance: String(FQ.baf2DropDigDistance),
                  y: po(FQ.baf2DropDigY)
                })
              })]
            }), void 0 !== MQ && (0, Wo.jsxs)(iD.s, {
              className: RQ("grove", "Baf2DropGrove"),
              onClick: () => {
                pQ("grove")
              },
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropGrove")
              }), (0, Wo.jsx)("span", {
                children: kQ(`buildAFactory2Game:${SQ}`, {
                  distance: String(MQ)
                })
              })]
            }), (0, Wo.jsxs)(iD.m, {
              className: RQ("ruin"),
              disabled: null === AQ,
              onClick: () => {
                pQ("ruin")
              },
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropRuin")
              }), (0, Wo.jsx)("span", {
                children: cQ
              })]
            }), void 0 !== eQ && (0, Wo.jsxs)(iD.F, {
              className: RQ("works"),
              onClick: () => {
                pQ("works")
              },
              children: [(0, Wo.jsx)("strong", {
                children: kQ("buildAFactory2Game:dropOldWorks")
              }), (0, Wo.jsx)("span", {
                children: kQ("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(eQ)
                })
              })]
            })]
          }), (0, Wo.jsx)("p", {
            className: "Baf2DropRenew",
            children: kQ("buildAFactory2Game:dropRenew", {
              time: iQ
            })
          }), (0, Wo.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: xQ,
            onToggle: QQ => {
              QQ.currentTarget.open !== xQ && YQ(QQ.currentTarget.open)
            },
            children: [(0, Wo.jsx)("summary", {
              children: kQ("buildAFactory2Game:dropSalvageWhat")
            }), (0, Wo.jsx)("p", {
              children: kQ("buildAFactory2Game:dropSalvageIntro")
            }), (0, Wo.jsx)("ul", {
              children: HQ.map((QQ => {
                let {
                  item: FQ,
                  nameKey: wQ,
                  useKey: LQ,
                  params: qQ
                } = QQ;
                return (0, Wo.jsxs)("li", {
                  children: [(0, Wo.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, Wo.jsx)(rq.e, {
                      itemName: FQ,
                      amount: 0
                    })
                  }), (0, Wo.jsxs)("span", {
                    children: [(0, Wo.jsx)("strong", {
                      children: kQ(wQ)
                    }), ": ", kQ(LQ, qQ)]
                  })]
                }, FQ)
              }))
            })]
          })]
        })
      })
    }
    const GH = "buildAFactory2Game:";

    function pH(QQ, FQ) {
      return QQ.sendIslandEdit(`baf2coopleave ${FQ.baf2IslandId}`)
    }

    function cH(QQ) {
      let {
        card: FQ,
        canRename: wQ,
        done: qQ,
        t: oQ
      } = QQ;
      const DQ = hD(),
        [kQ, vQ] = (0, LQ.useState)(FQ.baf2IslandName),
        mQ = Wm(kQ),
        uQ = "" === mQ || Rm(mQ),
        HQ = () => {
          !uQ && wQ && (mQ !== FQ.baf2IslandName ? qQ(DQ.sendIslandEdit(`baf2islandrename ${FQ.baf2IslandId} ${mQ}`)) : qQ(null))
        },
        bQ = () => {
          qQ(null)
        };
      return (0, Wo.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Zm(bQ),
        children: [(0, Wo.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [oQ(`${GH}islandsRenameLabel`), (0, Wo.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: kQ,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ym,
            onChange: QQ => {
              vQ(QQ.target.value)
            },
            ...Pm(HQ, bQ)
          })]
        }), "" === mQ && (0, Wo.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: oQ(`${GH}islandsRenameEmpty`)
        }), Rm(mQ) && (0, Wo.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: oQ(`${GH}islandsNameReserved`)
        }), (0, Wo.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Wo.jsx)(iD.s, {
            disabled: uQ || !wQ,
            onClick: HQ,
            children: oQ(`${GH}islandsRenameSave`)
          }), (0, Wo.jsx)(iD.f, {
            onClick: bQ,
            children: oQ(`${GH}islandsCancel`)
          })]
        })]
      })
    }

    function CH(QQ) {
      let {
        card: FQ,
        canDelete: wQ,
        done: qQ,
        t: oQ
      } = QQ;
      const DQ = hD(),
        [kQ, vQ] = (0, LQ.useState)(""),
        mQ = function(QQ, FQ) {
          return Wm(QQ).toLowerCase() === Wm(FQ).toLowerCase()
        }(kQ, FQ.baf2IslandName),
        uQ = () => {
          mQ && wQ && qQ(DQ.sendIslandEdit(`baf2islanddelete ${FQ.baf2IslandId}`))
        },
        HQ = () => {
          qQ(null)
        },
        bQ = jm("name"),
        [YQ, xQ = ""] = oQ(`${GH}islandsDeleteConfirm`, {
          name: bQ
        }).split(bQ);
      return (0, Wo.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Zm(HQ),
        children: [(0, Wo.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, Wo.jsxs)("span", {
            children: [YQ, (0, Wo.jsx)("strong", {
              children: FQ.baf2IslandName
            }), xQ]
          }), (0, Wo.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: kQ,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: ym,
            onChange: QQ => {
              vQ(QQ.target.value)
            },
            ...Pm(uQ, HQ)
          })]
        }), Jm(FQ) && (0, Wo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: oQ(`${GH}islandsDeleteLeftBack`)
        }), (0, Wo.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, Wo.jsx)(iD.F, {
            disabled: !mQ || !wQ,
            onClick: uQ,
            children: oQ(`${GH}islandsDeleteForGood`)
          }), (0, Wo.jsx)(iD.f, {
            onClick: HQ,
            children: oQ(`${GH}islandsCancel`)
          })]
        })]
      })
    }

    function SH(QQ) {
      let {
        members: FQ,
        t: wQ
      } = QQ;
      const LQ = FQ.length;
      return (0, Wo.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, Wo.jsxs)("span", {
          children: [1 === LQ ? wQ(`${GH}islandsPlayersOne`) : wQ(`${GH}islandsPlayers`, {
            count: String(LQ)
          }), " "]
        }), FQ.map(((QQ, FQ) => (0, Wo.jsxs)("span", {
          className: Sq()("Baf2IslandMember", {
            Here: QQ.baf2MemberHere
          }),
          title: QQ.baf2MemberHere ? wQ(`${GH}islandsPlayerHere`) : void 0,
          children: [QQ.baf2MemberName, FQ < LQ - 1 ? ", " : ""]
        }, QQ.baf2MemberKey)))]
      })
    }

    function iH(QQ) {
      let {
        card: FQ,
        answered: wQ,
        nowMs: qQ,
        t: oQ
      } = QQ;
      const DQ = hD(),
        [kQ, vQ] = (0, LQ.useState)(new Map),
        mQ = Jm(FQ);
      if (!mQ) return null;
      return (0, Wo.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, Wo.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: oQ(`${GH}islandsLeftTitle`)
        }), (0, Wo.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: mQ.left.map((QQ => {
            const LQ = QQ.baf2LeftKey,
              uQ = nm(kQ.get(LQ), wQ, qQ),
              HQ = function(QQ) {
                return 1 === QQ ? [`${cm}islandsLeftItemsOne`] : [`${cm}islandsLeftItems`, {
                  count: String(QQ)
                }]
              }(QQ.baf2LeftItems);
            return (0, Wo.jsx)("li", {
              className: Sq()("Baf2IslandPerson", {
                Pending: uQ
              }),
              children: (0, Wo.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Wo.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: QQ.baf2LeftName
                }), (0, Wo.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: oQ(HQ[0], HQ[1])
                }), mQ.claim && (0, Wo.jsx)(iD.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: uQ,
                  onClick: () => {
                    (QQ => {
                      const wQ = DQ.sendIslandEdit(`baf2coopclaim ${FQ.baf2IslandId} ${QQ}`);
                      vQ((FQ => new Map(FQ).set(QQ, {
                        atMs: Date.now(),
                        answer: wQ
                      })))
                    })(LQ)
                  },
                  children: oQ(`${GH}islandsClaim`)
                })]
              })
            }, LQ)
          }))
        }), mQ.goThere && (0, Wo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: oQ(`${GH}islandsClaimGoThere`)
        })]
      })
    }

    function WH(QQ) {
      let {
        card: FQ,
        view: wQ,
        blocked: qQ,
        maxIslands: oQ,
        answered: DQ,
        nowMs: kQ,
        done: vQ,
        openSocial: mQ,
        t: uQ
      } = QQ;
      const HQ = hD(),
        [bQ, YQ] = (0, LQ.useState)(new Map),
        [xQ, AQ] = (0, LQ.useState)(new Map),
        [tQ, eQ] = (0, LQ.useState)(null),
        MQ = (0, LQ.useRef)(null);
      Fu(MQ);
      const GQ = FQ.baf2IslandId,
        pQ = FQ.baf2IslandCoop,
        cQ = null !== pQ && void 0 !== pQ && pQ.baf2CoopMembers.some((QQ => QQ.baf2MemberKey === tQ)) ? tQ : null,
        CQ = function(QQ, FQ) {
          const wQ = QQ.baf2IslandCoop;
          return wQ && Em(wQ) || null !== FQ ? void 0 : QQ.baf2IslandInvitable
        }(FQ, qQ),
        SQ = function(QQ, FQ) {
          const wQ = QQ.baf2IslandCoop;
          return wQ && Em(wQ) ? {
            key: `${cm}islandsCoopFull`,
            params: {
              max: String(wQ.baf2CoopMax)
            }
          } : void 0 !== QQ.baf2IslandInvitable && null === FQ || wQ && !wQ.baf2CoopManageHere ? null : "degraded" === FQ || "stuck" === FQ ? {
            key: `${cm}islandsInviteNotLoaded`
          } : null === FQ || function(QQ) {
            return "notHome" === QQ || "wilds" === QQ || "visiting" === QQ
          }(FQ) || Im(FQ) ? {
            key: `${cm}islandsInviteGoThere`
          } : {
            key: `${cm}islandsInviteBusy`
          }
        }(FQ, qQ),
        iQ = () => {
          var QQ;
          eQ(null), null === (QQ = MQ.current) || void 0 === QQ || QQ.focus()
        };
      return (0, Wo.jsxs)("div", {
        ref: MQ,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Zm(null === cQ ? vQ : iQ),
        children: [pQ && (0, Wo.jsxs)(Wo.Fragment, {
          children: [(0, Wo.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: uQ(`${GH}islandsPlayersTitle`, {
              count: String(pQ.baf2CoopMembers.length),
              max: String(pQ.baf2CoopMax)
            })
          }), (0, Wo.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: pQ.baf2CoopMembers.map(((QQ, FQ) => {
              const LQ = QQ.baf2MemberKey,
                qQ = nm(bQ.get(LQ), DQ, kQ);
              return (0, Wo.jsxs)("li", {
                className: Sq()("Baf2IslandPerson", {
                  Pending: qQ
                }),
                children: [(0, Wo.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, Wo.jsx)("span", {
                    className: Sq()("Baf2IslandPersonName", {
                      Here: QQ.baf2MemberHere
                    }),
                    children: QQ.baf2MemberName
                  }), QQ.baf2MemberHere && (0, Wo.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: uQ(`${GH}islandsPlayerHere`)
                  }), 0 === FQ && (0, Wo.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: uQ(`${GH}islandsPlayerOwner`)
                  }), wQ.remove && FQ > 0 && !qQ && cQ !== LQ && (0, Wo.jsx)(iD.G, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var QQ;
                      eQ(LQ), null === (QQ = MQ.current) || void 0 === QQ || QQ.focus()
                    },
                    children: uQ(`${GH}islandsRemove`)
                  })]
                }), cQ === LQ && (0, Wo.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, Wo.jsx)("p", {
                    children: am(uQ, `${GH}islandsRemoveConfirm`, {
                      player: QQ.baf2MemberName
                    })
                  }), (0, Wo.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, Wo.jsx)(iD.F, {
                      onClick: () => {
                        (QQ => {
                          const FQ = HQ.sendIslandEdit(`baf2coopremove ${GQ} ${QQ.baf2MemberKey}`);
                          YQ((wQ => new Map(wQ).set(QQ.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: FQ
                          }))), iQ()
                        })(QQ)
                      },
                      children: uQ(`${GH}islandsRemoveYes`)
                    }), (0, Wo.jsx)(iD.f, {
                      onClick: iQ,
                      children: uQ(`${GH}islandsCancel`)
                    })]
                  })]
                })]
              }, LQ)
            }))
          })]
        }), (void 0 !== CQ || null !== SQ) && (0, Wo.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: uQ(`${GH}islandsInviteTitle`)
        }), !pQ && (void 0 !== CQ || null !== SQ) && (0, Wo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: uQ(`${GH}islandsInviteShareNote`)
        }), 0 === (null === CQ || void 0 === CQ ? void 0 : CQ.length) && (0, Wo.jsx)(RH, {
          openSocial: mQ,
          t: uQ
        }), void 0 !== CQ && CQ.length > 0 && (0, Wo.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: CQ.map((QQ => {
            const FQ = !0 === QQ.baf2InvitableSent || nm(xQ.get(QQ.baf2InvitableId), DQ, kQ);
            return (0, Wo.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, Wo.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, Wo.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: QQ.baf2InvitableName
                }), QQ.baf2InvitableFull && !FQ && (0, Wo.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: uQ(`${GH}islandsInviteTheirFull`, {
                    max: String(oQ)
                  })
                }), (FQ || !QQ.baf2InvitableFull) && (0, Wo.jsx)(iD.s, {
                  className: "Baf2IslandPersonButton",
                  disabled: FQ,
                  onClick: () => {
                    (QQ => {
                      const FQ = HQ.sendIslandEdit(`baf2coopinvite ${GQ} ${QQ}`);
                      AQ((wQ => new Map(wQ).set(QQ, {
                        atMs: Date.now(),
                        answer: FQ
                      })))
                    })(QQ.baf2InvitableId)
                  },
                  children: uQ(FQ ? `${GH}islandsInvited` : `${GH}islandsInvite`)
                })]
              })
            }, QQ.baf2InvitableId)
          }))
        }), SQ && (0, Wo.jsx)(qu, {
          note: SQ,
          t: uQ
        }), (0, Wo.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Wo.jsx)(iD.f, {
            onClick: vQ,
            children: uQ(`${GH}islandsDone`)
          })
        })]
      })
    }

    function RH(QQ) {
      let {
        openSocial: FQ,
        t: wQ
      } = QQ;
      return (0, Wo.jsxs)(Wo.Fragment, {
        children: [(0, Wo.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: wQ(FQ ? `${GH}islandsInviteNobody` : `${GH}islandsInviteNobodyGuest`)
        }), FQ && (0, Wo.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, Wo.jsx)(iD.f, {
            onClick: FQ,
            children: wQ("socialBar:social")
          })
        })]
      })
    }

    function OH(QQ) {
      let {
        className: FQ,
        text: wQ,
        ConfirmButton: qQ,
        confirmLabel: oQ,
        canConfirm: DQ,
        send: kQ,
        done: vQ,
        t: mQ
      } = QQ;
      const uQ = (0, LQ.useRef)(null);
      Fu(uQ);
      const HQ = () => {
        vQ(null)
      };
      return (0, Wo.jsxs)("div", {
        ref: uQ,
        tabIndex: -1,
        className: Sq()("Baf2IslandForm", FQ),
        ...Zm(HQ),
        children: [(0, Wo.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: wQ
        }), (0, Wo.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Wo.jsx)(qQ, {
            disabled: !DQ,
            onClick: () => {
              DQ && vQ(kQ())
            },
            children: oQ
          }), (0, Wo.jsx)(iD.f, {
            onClick: HQ,
            children: mQ(`${GH}islandsCancel`)
          })]
        })]
      })
    }

    function sH(QQ) {
      return "hidden" !== QQ
    }

    function rH(QQ) {
      var FQ, wQ;
      let {
        card: qQ,
        keepOwn: oQ,
        blocked: DQ,
        maxIslands: kQ,
        serverNowMs: vQ,
        nowMs: mQ,
        actions: uQ,
        full: HQ,
        waits: bQ,
        answered: YQ,
        mode: xQ,
        setMode: AQ,
        pending: tQ,
        onSent: eQ,
        switchTo: MQ,
        leave: GQ,
        coopOn: pQ,
        openSocial: cQ,
        t: CQ
      } = QQ;
      const SQ = hD(),
        iQ = qQ.baf2IslandActive,
        WQ = iQ ? null : function(QQ, FQ) {
          if (QQ <= 0) return null;
          const wQ = FQ - QQ;
          if (wQ < to) return [`${cm}islandsPlayedJustNow`];
          if (wQ < Cm) return [`${cm}islandsPlayedMinutes`, {
            minutes: String(Math.floor(wQ / to))
          }];
          if (wQ < Sm) return [`${cm}islandsPlayedHours`, {
            hours: String(Math.floor(wQ / Cm))
          }];
          const LQ = Math.floor(wQ / Sm);
          return 1 === LQ ? [`${cm}islandsPlayedDay`] : [`${cm}islandsPlayedDays`, {
            days: String(LQ)
          }]
        }(qQ.baf2IslandLastPlayedMs, vQ),
        RQ = void 0 === (OQ = qQ.baf2IslandItems) ? null : 0 === OQ ? [`${cm}islandsItemsNone`] : 1 === OQ ? [`${cm}islandsItemsOne`] : [`${cm}islandsItems`, {
          count: String(OQ)
        }];
      var OQ;
      const sQ = function(QQ) {
          return QQ ? 1 === QQ ? [`${cm}islandsWaitingOne`] : [`${cm}islandsWaiting`, {
            count: String(QQ)
          }] : null
        }(qQ.baf2IslandWaiting),
        rQ = qQ.baf2IslandUnreadable,
        IQ = qQ.baf2IslandCoop,
        UQ = hm(qQ, uQ, oQ, HQ, pQ, DQ),
        NQ = (0, LQ.useRef)(null);
      Bm(null !== xQ, NQ);
      const TQ = () => {
          var QQ;
          AQ(null), null === (QQ = NQ.current) || void 0 === QQ || QQ.focus()
        },
        KQ = (QQ, FQ) => {
          TQ(), null !== QQ && eQ(QQ, FQ)
        },
        zQ = (QQ, FQ) => CQ(`${GH}${QQ}`, {
          time: co(CQ, FQ)
        });
      return (0, Wo.jsxs)("li", {
        ref: NQ,
        tabIndex: -1,
        className: Sq()("Baf2IslandCard", {
          Active: iQ,
          Pending: tQ,
          Shared: void 0 !== IQ
        }),
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, Wo.jsx)("strong", {
            className: "Baf2IslandName",
            children: qQ.baf2IslandName
          }), iQ && (0, Wo.jsx)("span", {
            className: "Baf2IslandBadge",
            children: CQ(`${GH}islandsOnThis`)
          }), IQ && (0, Wo.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: CQ(`${GH}islandsShared`)
          })]
        }), "member" === (null === IQ || void 0 === IQ ? void 0 : IQ.baf2CoopRole) && (0, Wo.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: am(CQ, `${GH}islandsSharedBy`, {
            owner: IQ.baf2CoopOwner
          })
        }), void 0 !== rQ && (0, Wo.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: CQ("newer" === rQ ? `${GH}islandsUnreadable` : `${GH}islandsDamaged`)
        }), "corrupt" === rQ && HQ && (0, Wo.jsx)("p", {
          className: "Baf2IslandStats",
          children: CQ(`${GH}islandsDamagedFull`)
        }), void 0 === rQ && (0, Wo.jsxs)(Wo.Fragment, {
          children: [(0, Wo.jsx)(Lu, {
            tier: qQ.baf2IslandTier,
            t: CQ
          }), (0, Wo.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, Wo.jsx)("span", {
              children: 1 === qQ.baf2IslandQuestsDone ? CQ(`${GH}islandsQuestsDoneOne`) : CQ(`${GH}islandsQuestsDone`, {
                count: String(qQ.baf2IslandQuestsDone)
              })
            }), (0, Wo.jsx)("span", {
              children: 1 === qQ.baf2IslandMachines ? CQ(`${GH}islandsMachinesOne`) : CQ(`${GH}islandsMachines`, {
                count: String(qQ.baf2IslandMachines)
              })
            }), RQ && (0, Wo.jsx)("span", {
              children: CQ(RQ[0], RQ[1])
            }), sQ && (0, Wo.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: CQ(sQ[0], sQ[1])
            }), WQ && (0, Wo.jsx)("span", {
              children: CQ(WQ[0], WQ[1])
            })]
          })]
        }), IQ && void 0 === IQ.baf2CoopState && "people" !== xQ && (0, Wo.jsx)(SH, {
          members: IQ.baf2CoopMembers,
          t: CQ
        }), null === xQ && (0, Wo.jsx)(iH, {
          card: qQ,
          answered: YQ,
          nowMs: mQ,
          t: CQ
        }), UQ.note && (0, Wo.jsx)(qu, {
          note: UQ.note,
          className: Sq()({
            Unreachable: void 0 !== (null === IQ || void 0 === IQ ? void 0 : IQ.baf2CoopState)
          }),
          t: CQ
        }), "rename" === xQ && (0, Wo.jsx)(cH, {
          card: qQ,
          canRename: "enabled" === UQ.rename,
          done: KQ,
          t: CQ
        }), "delete" === xQ && (0, Wo.jsx)(CH, {
          card: qQ,
          canDelete: "enabled" === UQ.delete,
          done: QQ => {
            KQ(QQ, IQ ? "delete" : void 0)
          },
          t: CQ
        }), "people" === xQ && (0, Wo.jsx)(WH, {
          card: qQ,
          view: UQ,
          blocked: DQ,
          maxIslands: kQ,
          answered: YQ,
          nowMs: mQ,
          done: TQ,
          openSocial: cQ,
          t: CQ
        }), "leave" === xQ && (0, Wo.jsx)(OH, {
          className: "Leave",
          text: am(CQ, `${GH}islandsLeaveConfirm`, {
            island: qQ.baf2IslandName,
            owner: null !== (FQ = null === (wQ = qQ.baf2IslandCoop) || void 0 === wQ ? void 0 : wQ.baf2CoopOwner) && void 0 !== FQ ? FQ : ""
          }),
          ConfirmButton: iD.F,
          confirmLabel: CQ(`${GH}islandsLeaveYes`),
          canConfirm: "enabled" === UQ.leave,
          send: () => pH(SQ, qQ),
          done: QQ => {
            KQ(QQ, "leave"), null !== QQ && iQ && GQ()
          },
          t: CQ
        }), "unshare" === xQ && (0, Wo.jsx)(OH, {
          className: "Unshare",
          text: am(CQ, `${GH}islandsStopSharingConfirm`, {
            island: qQ.baf2IslandName
          }),
          ConfirmButton: iD.s,
          confirmLabel: CQ(`${GH}islandsStopSharing`),
          canConfirm: "enabled" === UQ.unshare,
          send: () => SQ.sendIslandEdit(`baf2coopunshare ${qQ.baf2IslandId}`),
          done: QQ => {
            KQ(QQ), null !== QQ && GQ()
          },
          t: CQ
        }), null === xQ && !tQ && (0, Wo.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": qQ.baf2IslandName,
          children: [sH(UQ.switch) && (0, Wo.jsx)(iD.s, {
            disabled: "enabled" !== UQ.switch,
            onClick: MQ,
            children: "tryAgain" === UQ.switchLabel ? CQ(`${GH}islandsTryAgain`) : bQ.switch > 0 ? zQ("islandsSwitchIn", bQ.switch) : CQ(`${GH}islandsSwitch`)
          }), sH(UQ.rename) && (0, Wo.jsx)(iD.f, {
            disabled: "enabled" !== UQ.rename,
            onClick: () => {
              AQ("rename")
            },
            children: CQ(`${GH}islandsRename`)
          }), sH(UQ.people) && (0, Wo.jsx)(iD.f, {
            disabled: "enabled" !== UQ.people,
            onClick: () => {
              AQ("people")
            },
            children: CQ("players" === UQ.peopleLabel ? `${GH}islandsPlayersButton` : `${GH}islandsInviteButton`)
          }), sH(UQ.unshare) && (0, Wo.jsx)(iD.f, {
            disabled: "enabled" !== UQ.unshare,
            onClick: () => {
              AQ("unshare")
            },
            children: CQ(`${GH}islandsStopSharing`)
          }), sH(UQ.dismiss) && (0, Wo.jsx)(iD.f, {
            disabled: "enabled" !== UQ.dismiss,
            onClick: () => {
              eQ(pH(SQ, qQ), "dismiss"), iQ && GQ()
            },
            children: CQ(`${GH}islandsDismiss`)
          }), sH(UQ.leave) && (0, Wo.jsx)(iD.G, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== UQ.leave,
            onClick: () => {
              AQ("leave")
            },
            children: iQ && bQ.switch > 0 ? zQ("islandsLeaveIn", bQ.switch) : CQ(`${GH}islandsLeave`)
          }), sH(UQ.delete) && (0, Wo.jsx)(iD.G, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== UQ.delete,
            onClick: () => {
              AQ("delete")
            },
            children: bQ.change > 0 && UQ.deleteWaits ? zQ("islandsDeleteIn", bQ.change) : CQ(`${GH}islandsDelete`)
          })]
        })]
      })
    }
    const IH = "buildAFactory2Game:";

    function UH(QQ) {
      let {
        invite: FQ,
        actions: wQ,
        full: qQ,
        maxIslands: oQ,
        waitSeconds: DQ,
        focus: kQ,
        focused: vQ,
        join: mQ,
        decline: uQ,
        t: HQ
      } = QQ;
      const [bQ, YQ] = (0, LQ.useState)(!1), xQ = (0, LQ.useRef)(null);
      Bm(bQ, xQ), (0, LQ.useEffect)((() => {
        var QQ;
        kQ && (YQ(!0), null === (QQ = xQ.current) || void 0 === QQ || QQ.focus(), vQ())
      }), [kQ, vQ]);
      const AQ = function(QQ, FQ, wQ, LQ, qQ) {
          return wQ ? {
            join: !1,
            note: {
              key: `${cm}islandsJoinTooMany`,
              params: {
                max: String(LQ)
              }
            }
          } : QQ.baf2InvitePlayers >= qQ ? {
            join: !1,
            note: {
              key: `${cm}islandsJoinFull`
            }
          } : {
            join: FQ.switch,
            note: null
          }
        }(FQ, wQ, qQ, oQ, 10),
        tQ = FQ.baf2InviteIsland,
        eQ = FQ.baf2InvitePlayers,
        MQ = () => {
          var QQ;
          YQ(!1), null === (QQ = xQ.current) || void 0 === QQ || QQ.focus()
        },
        GQ = DQ > 0 && null === AQ.note ? HQ(`${IH}islandsJoinIn`, {
          time: co(HQ, DQ)
        }) : HQ(`${IH}islandsJoin`);
      return (0, Wo.jsxs)("li", {
        ref: xQ,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...bQ ? Zm(MQ) : {},
        children: [(0, Wo.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, Wo.jsx)("strong", {
            className: "Baf2IslandName",
            children: tQ
          })
        }), (0, Wo.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: am(HQ, `${IH}islandsInvitedBy`, {
            owner: FQ.baf2InviteOwner
          })
        }), (0, Wo.jsx)(Lu, {
          tier: FQ.baf2InviteTier,
          t: HQ
        }), (0, Wo.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, Wo.jsx)("span", {
            children: 1 === eQ ? HQ(`${IH}islandsPlayersCountOne`) : HQ(`${IH}islandsPlayersCount`, {
              count: String(eQ)
            })
          })
        }), AQ.note && (0, Wo.jsx)(qu, {
          note: AQ.note,
          t: HQ
        }), bQ && (0, Wo.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: am(HQ, `${IH}islandsJoinConfirm`, {
            island: tQ
          })
        }), !bQ && (0, Wo.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": tQ,
          children: [(0, Wo.jsx)(iD.s, {
            disabled: !AQ.join,
            onClick: () => {
              var QQ;
              YQ(!0), null === (QQ = xQ.current) || void 0 === QQ || QQ.focus()
            },
            children: GQ
          }), (0, Wo.jsx)(iD.f, {
            onClick: uQ,
            children: HQ(`${IH}islandsDecline`)
          })]
        }), bQ && (0, Wo.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, Wo.jsx)(iD.s, {
            disabled: !AQ.join,
            onClick: mQ,
            children: HQ(`${IH}islandsJoinYes`)
          }), (0, Wo.jsx)(iD.f, {
            onClick: MQ,
            children: HQ(`${IH}islandsCancel`)
          })]
        })]
      })
    }

    function NH(QQ) {
      let {
        invites: FQ,
        actions: wQ,
        full: LQ,
        maxIslands: qQ,
        waitSeconds: oQ,
        focus: DQ,
        focused: kQ,
        leave: vQ,
        declined: mQ,
        t: uQ
      } = QQ;
      const HQ = hD();
      return (0, Wo.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, Wo.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: uQ(`${IH}islandsInvitesTitle`)
        }), (0, Wo.jsx)("ul", {
          className: "Baf2IslandCards",
          children: FQ.map((QQ => {
            const FQ = QQ.baf2InviteId;
            return (0, Wo.jsx)(UH, {
              invite: QQ,
              actions: wQ,
              full: LQ,
              maxIslands: qQ,
              waitSeconds: oQ,
              focus: DQ === FQ,
              focused: kQ,
              join: () => {
                HQ.send(`baf2coopaccept ${FQ}`), vQ()
              },
              decline: () => {
                HQ.send(`baf2coopdecline ${FQ}`), mQ(FQ)
              },
              t: uQ
            }, FQ)
          }))
        })]
      })
    }
    const TH = "buildAFactory2Game:";

    function KH(QQ) {
      let {
        cards: FQ,
        activeName: wQ,
        canStart: qQ,
        waitSeconds: oQ,
        leave: DQ,
        t: kQ
      } = QQ;
      const vQ = hD(),
        [mQ, uQ] = (0, LQ.useState)(!1),
        [HQ, bQ] = (0, LQ.useState)(""),
        YQ = (0, LQ.useRef)(null);
      Bm(mQ, YQ), (0, LQ.useEffect)((() => {
        var QQ;
        mQ && (null === (QQ = YQ.current) || void 0 === QQ || QQ.focus())
      }), [mQ]);
      const xQ = Om(FQ),
        AQ = Wm(HQ),
        tQ = Rm(AQ),
        eQ = () => {
          qQ && !tQ && (vQ.send("" === AQ || AQ === xQ ? PQ : `${PQ} ${AQ}`), DQ())
        },
        MQ = () => {
          var QQ;
          uQ(!1), null === (QQ = YQ.current) || void 0 === QQ || QQ.focus()
        };
      return (0, Wo.jsxs)("li", {
        ref: YQ,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...mQ ? Zm(MQ) : {},
        children: [(0, Wo.jsx)("strong", {
          className: "Baf2IslandName",
          children: kQ(`${TH}islandsNewTitle`)
        }), !mQ && (0, Wo.jsx)("p", {
          className: "Baf2IslandStats",
          children: kQ(`${TH}islandsNewNote`)
        }), mQ && (0, Wo.jsxs)(Wo.Fragment, {
          children: [(0, Wo.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: am(kQ, `${TH}islandsNewConfirm`, {
              name: wQ
            })
          }), (0, Wo.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [kQ(`${TH}islandsNewNameLabel`), (0, Wo.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: HQ,
              placeholder: xQ,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: ym,
              onChange: QQ => {
                bQ(QQ.target.value)
              },
              ...Pm(eQ, MQ)
            })]
          }), tQ && (0, Wo.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: kQ(`${TH}islandsNameReserved`)
          })]
        }), (0, Wo.jsxs)("div", {
          className: Sq()("Baf2IslandButtons", {
            Stacked: mQ
          }),
          children: [(0, Wo.jsx)(iD.s, {
            disabled: !qQ || mQ && tQ,
            onClick: () => {
              if (!mQ) return bQ(xQ), void uQ(!0);
              eQ()
            },
            children: oQ > 0 ? kQ(`${TH}islandsNewIn`, {
              time: co(kQ, oQ)
            }) : kQ(mQ ? `${TH}islandsNewConfirmButton` : `${TH}islandsNew`)
          }), mQ && (0, Wo.jsx)(iD.f, {
            onClick: MQ,
            children: kQ(`${TH}islandsCancel`)
          })]
        })]
      })
    }

    function zH(QQ) {
      var FQ, wQ;
      let {
        message: qQ,
        arrivedAtMs: oQ,
        close: DQ,
        leave: kQ,
        openSocial: vQ
      } = QQ;
      const mQ = hD(),
        {
          t: uQ
        } = (0, Oq.y)(),
        HQ = wu(1e3),
        [bQ, YQ] = (0, LQ.useState)(null),
        [xQ, AQ] = (0, LQ.useState)(new Map),
        [tQ, eQ] = (0, LQ.useState)(new Set),
        MQ = qQ.baf2IslandCards,
        GQ = function(QQ, FQ, wQ, LQ) {
          return (null !== QQ && void 0 !== QQ ? QQ : []).filter((QQ => FQ + QQ.baf2InviteLeftMs > wQ && !LQ.has(QQ.baf2InviteId)))
        }(qQ.baf2IslandsInvites, oQ, HQ, tQ),
        pQ = GQ.map((QQ => QQ.baf2InviteId)).join(" "),
        cQ = (0, LQ.useRef)(null),
        CQ = dm(cQ);
      Qu(), (0, LQ.useEffect)((() => {
        var QQ, FQ;
        null !== (QQ = cQ.current) && void 0 !== QQ && QQ.contains(document.activeElement) || (null === (FQ = cQ.current) || void 0 === FQ || FQ.focus())
      }), [qQ, pQ]), (0, LQ.useEffect)((() => {
        AQ((QQ => function(QQ, FQ, wQ, LQ) {
          const qQ = new Map;
          for (const oQ of FQ) {
            const FQ = QQ.get(oQ.baf2IslandId);
            FQ && (void 0 !== FQ.untilGone || LQ < FQ.answer) && Km(FQ, oQ, wQ) && qQ.set(oQ.baf2IslandId, FQ)
          }
          return qQ.size === QQ.size ? QQ : qQ
        }(QQ, qQ.baf2IslandCards, Date.now(), qQ.baf2IslandsAnswered)))
      }), [qQ]);
      const SQ = im(oQ, qQ.baf2IslandsWaitMs, HQ),
        iQ = qQ.baf2IslandsBlocked,
        WQ = Um(iQ, SQ),
        RQ = function(QQ, FQ) {
          const wQ = Um(QQ, 0);
          return {
            switch: wQ.switch ? FQ : 0,
            change: wQ.change ? FQ : 0
          }
        }(iQ, SQ),
        OQ = MQ.length >= qQ.baf2IslandsMax,
        sQ = MQ.length > 0,
        rQ = function(QQ, FQ, wQ) {
          return QQ + Math.max(0, wQ - FQ)
        }(qQ.baf2IslandsNowMs, oQ, HQ),
        IQ = null !== (FQ = null === (wQ = MQ.find((QQ => QQ.baf2IslandActive))) || void 0 === wQ ? void 0 : wQ.baf2IslandName) && void 0 !== FQ ? FQ : "",
        UQ = function(QQ) {
          const FQ = QQ.filter(Vm).length;
          return FQ <= 1 && FQ < QQ.length
        }(MQ),
        NQ = !0 === qQ.baf2IslandsCoop,
        TQ = function(QQ, FQ) {
          const wQ = QQ.find((QQ => QQ.baf2IslandActive)),
            LQ = null === wQ || void 0 === wQ ? void 0 : wQ.baf2IslandCoop;
          return wQ && "member" === (null === LQ || void 0 === LQ ? void 0 : LQ.baf2CoopRole) ? {
            key: `${cm}islandsKeepOwnMember`,
            names: {
              owner: LQ.baf2CoopOwner,
              island: wQ.baf2IslandName
            }
          } : {
            key: FQ ? `${cm}islandsKeepOwn` : `${cm}islandsKeepOwnSolo`
          }
        }(MQ, NQ),
        [KQ, zQ] = (0, LQ.useState)(null);
      (0, LQ.useEffect)((() => {
        void 0 !== qQ.baf2IslandsFocusInvite && zQ(qQ.baf2IslandsFocusInvite)
      }), [qQ]);
      const lQ = (0, LQ.useCallback)((() => {
          zQ(null)
        }), []),
        jQ = bQ ? MQ.find((QQ => QQ.baf2IslandId === bQ.id)) : void 0,
        aQ = bQ && jQ && "hidden" !== hm(jQ, WQ, UQ, OQ, NQ, iQ)[bQ.mode] ? bQ : null;
      return (0, Wo.jsx)(SD.d, {
        close: DQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, Wo.jsxs)("section", {
          ref: cQ,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: CQ ? {
            marginTop: `${CQ.marginTop}px`,
            maxHeight: `${CQ.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              children: [(0, Wo.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: uQ(`${TH}islandsTitle`)
              }), sQ && (0, Wo.jsx)("p", {
                children: uQ(`${TH}islandsSubtitle`, {
                  count: String(MQ.length),
                  max: String(qQ.baf2IslandsMax)
                })
              })]
            }), (0, Wo.jsx)(iD.j, {
              ariaLabel: uQ(`${TH}islandsClose`),
              onClick: DQ
            })]
          }), (0, Wo.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== iQ && (0, Wo.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: am(uQ, sm(iQ, rm(MQ)), {
                island: IQ
              })
            }), sQ && GQ.length > 0 && (0, Wo.jsx)(NH, {
              invites: GQ,
              actions: WQ,
              full: OQ,
              maxIslands: qQ.baf2IslandsMax,
              waitSeconds: RQ.switch,
              focus: KQ,
              focused: lQ,
              leave: kQ,
              declined: QQ => {
                eQ((FQ => new Set(FQ).add(QQ)))
              },
              t: uQ
            }), sQ && (0, Wo.jsxs)(Wo.Fragment, {
              children: [OQ && (0, Wo.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: uQ(`${TH}islandsFull`, {
                  max: String(qQ.baf2IslandsMax)
                })
              }), (0, Wo.jsx)("p", {
                className: "Baf2IslandsNote",
                children: am(uQ, TQ.key, TQ.names)
              }), (0, Wo.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [MQ.map((QQ => {
                  const FQ = QQ.baf2IslandId;
                  return (0, Wo.jsx)(rH, {
                    card: QQ,
                    keepOwn: UQ,
                    coopOn: NQ,
                    openSocial: vQ,
                    blocked: iQ,
                    maxIslands: qQ.baf2IslandsMax,
                    serverNowMs: rQ,
                    nowMs: HQ,
                    actions: WQ,
                    full: OQ,
                    waits: RQ,
                    answered: qQ.baf2IslandsAnswered,
                    mode: (null === aQ || void 0 === aQ ? void 0 : aQ.id) === FQ ? aQ.mode : null,
                    setMode: QQ => {
                      YQ(null === QQ ? null : {
                        id: FQ,
                        mode: QQ
                      })
                    },
                    pending: Km(xQ.get(FQ), QQ, HQ),
                    onSent: (wQ, LQ) => {
                      AQ((qQ => {
                        const oQ = {
                          atMs: Date.now(),
                          from: QQ.baf2IslandName,
                          answer: wQ
                        };
                        return new Map(qQ).set(FQ, LQ ? {
                          ...oQ,
                          untilGone: LQ
                        } : oQ)
                      }))
                    },
                    leave: kQ,
                    switchTo: () => {
                      mQ.send(`baf2islandswitch ${FQ}`), kQ()
                    },
                    t: uQ
                  }, FQ)
                })), !OQ && (0, Wo.jsx)(KH, {
                  cards: MQ,
                  activeName: IQ,
                  canStart: WQ.change,
                  waitSeconds: RQ.change,
                  leave: kQ,
                  t: uQ
                })]
              })]
            })]
          })]
        })
      })
    }
    var lH = wQ(4867);
    const jH = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        ro: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      aH = Object.keys(jH),
      XH = new Set([...Object.keys(PF), ...[...TF.Press.recipes, ...TF["Wire Mill"].recipes].map((QQ => QQ.output))]),
      fH = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      VH = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      hH = / Bar$|Alloy$/,
      JH = /Porkchop|Beef|Mutton|Venison|Steak/,
      EH = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const nH = (0, LQ.memo)((function(QQ) {
      let {
        item: FQ,
        name: wQ,
        amount: LQ,
        selected: qQ,
        small: oQ,
        onPick: DQ
      } = QQ;
      return (0, Wo.jsxs)("button", {
        type: "button",
        className: Sq()("Baf2TermTile", {
          On: qQ,
          Small: oQ
        }),
        "aria-label": `${wQ}: ${LQ}`,
        "aria-pressed": qQ,
        onClick: () => {
          DQ(FQ)
        },
        children: [(0, Wo.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: FQ,
            amount: 0
          })
        }), (0, Wo.jsx)("span", {
          className: "Baf2TermCount",
          children: Go(LQ, 1e4)
        }), !oQ && (0, Wo.jsx)("span", {
          className: "Baf2TermName",
          children: wQ
        })]
      })
    }));

    function gH(QQ) {
      let {
        store: FQ,
        close: wQ,
        send: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)(), {
        isTouchScreen: DQ
      } = (0, pq.l)(["isTouchScreen"]);
      ! function(QQ) {
        const [FQ, wQ] = (0, LQ.useState)(QQ.version);
        (0, LQ.useEffect)((() => (wQ(QQ.version), QQ.subscribe((() => {
          wQ(QQ.version)
        })))), [QQ])
      }(FQ);
      const [kQ, vQ] = (0, LQ.useState)("all"), [mQ, uQ] = (0, LQ.useState)(!1), [HQ, bQ] = (0, LQ.useState)(""), [YQ, xQ] = (0, LQ.useState)(""), [AQ, tQ] = (0, LQ.useState)(null), [eQ, MQ] = (0, LQ.useState)(!1), [GQ, pQ, cQ] = function() {
        const QQ = (0, LQ.useRef)(null),
          [FQ, wQ] = (0, LQ.useState)(!1),
          qQ = () => {
            const FQ = QQ.current;
            wQ(null !== FQ && FQ.scrollLeft + FQ.clientWidth < FQ.scrollWidth - 1)
          };
        return (0, LQ.useEffect)(qQ), (0, LQ.useEffect)((() => {
          const FQ = QQ.current;
          if (!FQ) return;
          const wQ = new ResizeObserver(qQ);
          return wQ.observe(FQ), () => {
            wQ.disconnect()
          }
        }), []), [QQ, FQ, qQ]
      }(), CQ = (0, LQ.useMemo)((() => new Map), [oQ]), SQ = QQ => {
        let FQ = CQ.get(QQ);
        return void 0 === FQ && (FQ = function(QQ, FQ) {
          const wQ = /^(.+) \((.+)\)$/.exec(QQ);
          return wQ ? FQ(wQ[2], wQ[1]) : QQ
        }(qo(oQ, QQ), ((QQ, FQ) => oQ("buildAFactory2Game:terminalTileKind", {
          kind: QQ,
          base: FQ
        }))), CQ.set(QQ, FQ)), FQ
      }, iQ = FQ.isReadOnly(), WQ = eQ && !iQ, RQ = FQ.recent(), OQ = FQ.items(), sQ = YQ.trim().toLowerCase(), rQ = WQ ? FQ.heldItems(AQ) : ("recent" === kQ ? RQ : OQ).filter((QQ => {
        const FQ = SQ(QQ);
        return ("all" === kQ || "recent" === kQ || function(QQ) {
          return bo(QQ) ? "farm" : fH.test(QQ) ? "nuclear" : hH.test(QQ) ? "bars" : JH.test(QQ) ? "farm" : VH.test(QQ) ? "ro" : XH.has(QQ) ? "parts" : EH.test(QQ) ? "farm" : "other"
        }(QQ) === kQ) && ("" === sQ || FQ.toLowerCase().includes(sQ)) && ("" === HQ || FQ.toUpperCase().startsWith(HQ))
      })), IQ = new Set(OQ.map((QQ => SQ(QQ).charAt(0).toUpperCase()))), UQ = QQ => WQ ? FQ.heldAmount(QQ) : FQ.amount(QQ), NQ = !WQ && "recent" !== kQ && RQ.length > 0, TQ = function(QQ, FQ) {
        return null !== QQ && FQ.includes(QQ) ? QQ : null
      }(AQ, NQ ? [...rQ, ...RQ] : rQ), KQ = null === TQ ? 0 : FQ.amount(TQ), zQ = null === TQ ? 0 : UQ(TQ), lQ = (0, LQ.useCallback)((QQ => {
        tQ((FQ => FQ === QQ ? null : QQ))
      }), []), jQ = QQ => zQ > 0 || WQ && null === TQ && "fill" === QQ && rQ.length > 0, aQ = WQ ? [
        ["one", oQ("buildAFactory2Game:terminalStoreOne")],
        ["stack", oQ("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", oQ(null === TQ ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", oQ("buildAFactory2Game:terminalTakeOne")],
        ["stack", oQ("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", oQ("buildAFactory2Game:terminalFill")]
      ], XQ = WQ ? oQ("buildAFactory2Game:terminalStoreEmpty") : "" !== HQ ? oQ("buildAFactory2Game:terminalEmptyLetter", {
        letter: HQ
      }) : "" !== sQ ? oQ("buildAFactory2Game:terminalEmptySearch", {
        query: YQ
      }) : oQ("buildAFactory2Game:terminalEmpty");
      return (0, Wo.jsx)(SD.d, {
        close: wQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              children: [(0, Wo.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: oQ(FQ.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, Wo.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, Wo.jsx)("span", {
                  className: Sq()({
                    Off: WQ
                  }),
                  children: oQ("buildAFactory2Game:terminalSubtitle", {
                    count: String(FQ.siloCount())
                  })
                }), !iQ && (0, Wo.jsx)("span", {
                  className: Sq()({
                    Off: !WQ
                  }),
                  children: oQ("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !iQ && (0, Wo.jsx)(lH.c, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: oQ("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: oQ("buildAFactory2Game:terminalModeStore")
              }],
              value: WQ ? "store" : "take",
              onChange: QQ => {
                MQ("store" === QQ), tQ(null)
              },
              ariaLabel: oQ("buildAFactory2Game:terminalModes")
            }), (0, Wo.jsx)(iD.j, {
              onClick: wQ
            })]
          }), (0, Wo.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, Wo.jsxs)("div", {
              className: Sq()("Baf2TermTools", {
                Hidden: WQ
              }),
              children: [(0, Wo.jsx)("div", {
                ref: GQ,
                className: Sq()("Baf2TermChips", {
                  MoreRight: pQ
                }),
                onScroll: cQ,
                children: mQ ? (0, Wo.jsxs)(Wo.Fragment, {
                  children: [(0, Wo.jsx)("button", {
                    type: "button",
                    "aria-label": oQ("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      uQ(!1), bQ("")
                    },
                    children: "\u2190"
                  }), [...IQ].sort().map((QQ => (0, Wo.jsx)("button", {
                    type: "button",
                    className: Sq()({
                      On: HQ === QQ
                    }),
                    onClick: () => {
                      bQ(HQ === QQ ? "" : QQ)
                    },
                    children: QQ
                  }, QQ)))]
                }) : (0, Wo.jsxs)(Wo.Fragment, {
                  children: [(0, Wo.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      uQ(!0)
                    },
                    children: oQ("buildAFactory2Game:terminalLetters")
                  }), aH.map((QQ => (0, Wo.jsx)("button", {
                    type: "button",
                    className: Sq()({
                      On: kQ === QQ
                    }),
                    onClick: () => {
                      vQ(QQ)
                    },
                    children: oQ(jH[QQ])
                  }, QQ)))]
                })
              }), !DQ && (0, Wo.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: YQ,
                placeholder: oQ("buildAFactory2Game:terminalSearch"),
                "aria-label": oQ("buildAFactory2Game:terminalSearch"),
                onChange: QQ => {
                  xQ(QQ.target.value)
                },
                onKeyDown: QQ => {
                  QQ.stopPropagation()
                }
              }), (0, Wo.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": oQ("buildAFactory2Game:terminalResort"),
                title: oQ("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  FQ.resort()
                },
                children: "\u21c5"
              })]
            }), NQ && (0, Wo.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, Wo.jsx)("span", {
                children: oQ(jH.recent)
              }), RQ.map((QQ => (0, Wo.jsx)(nH, {
                item: QQ,
                name: SQ(QQ),
                amount: FQ.amount(QQ),
                selected: TQ === QQ,
                small: !0,
                onPick: lQ
              }, QQ)))]
            }), (0, Wo.jsx)("div", {
              className: "Baf2TermTiles",
              children: rQ.length > 0 ? rQ.map((QQ => (0, Wo.jsx)(nH, {
                item: QQ,
                name: SQ(QQ),
                amount: UQ(QQ),
                selected: TQ === QQ,
                onPick: lQ
              }, QQ))) : (0, Wo.jsx)("p", {
                className: "Baf2TermEmpty",
                children: XQ
              })
            }), (0, Wo.jsxs)("div", {
              className: Sq()("Baf2TermActions", {
                Hidden: WQ && 0 === rQ.length
              }),
              children: [(0, Wo.jsx)("span", {
                className: "Baf2TermPicked",
                children: iQ ? (0, Wo.jsxs)(Wo.Fragment, {
                  children: [null !== TQ && KQ > 0 ? SQ(TQ) : oQ("buildAFactory2Game:terminalVisiting"), (0, Wo.jsx)("small", {
                    children: oQ("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== TQ ? (0, Wo.jsxs)(Wo.Fragment, {
                  children: [SQ(TQ), (0, Wo.jsx)("small", {
                    children: oQ("buildAFactory2Game:terminalStored", {
                      amount: KQ.toLocaleString()
                    })
                  })]
                }) : oQ(WQ ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !iQ && aQ.map((QQ => {
                let [wQ, LQ] = QQ;
                const oQ = "fill" === wQ ? iD.m : iD.f;
                return (0, Wo.jsx)(oQ, {
                  className: "Baf2TermTake",
                  disabled: !jQ(wQ),
                  onClick: () => {
                    (QQ => {
                      jQ(QQ) && qQ(null === TQ ? FQ.putAll() : WQ ? FQ.put(QQ, TQ) : FQ.take(QQ, TQ))
                    })(wQ)
                  },
                  children: LQ
                }, wQ)
              }))]
            })]
          })]
        })
      })
    }

    function PH(QQ) {
      let {
        kind: FQ,
        icon: wQ,
        label: LQ,
        number: qQ,
        preview: oQ,
        note: DQ,
        tone: kQ = null,
        share: vQ,
        onExplain: mQ
      } = QQ;
      return (0, Wo.jsxs)("button", {
        type: "button",
        className: Sq()("NxLane", FQ, {
          Warn: "warn" === kQ,
          Danger: "danger" === kQ
        }),
        onClick: mQ,
        children: [(0, Wo.jsxs)("span", {
          className: "NxLaneHead",
          children: [wQ, (0, Wo.jsx)("span", {
            className: "NxLaneLabel",
            children: LQ
          })]
        }), (0, Wo.jsxs)("span", {
          className: "NxLaneNum",
          children: [qQ, oQ && (0, Wo.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", oQ]
          })]
        }), (0, Wo.jsx)("span", {
          className: "NxLaneNote",
          children: DQ
        }), void 0 !== vQ && (0, Wo.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, vQ)) + "%"
          }
        })]
      })
    }

    function ZH(QQ) {
      let {
        kind: FQ,
        step: wQ,
        short: LQ,
        planned: qQ
      } = QQ;
      return (0, Wo.jsx)("i", {
        className: Sq()("NxPipe", FQ, `Step${wQ}`, {
          Short: LQ,
          Planned: qQ
        }),
        "aria-hidden": "true"
      })
    }

    function yH(QQ) {
      let {
        max: FQ,
        bands: wQ,
        ticks: LQ,
        now: qQ,
        settle: oQ,
        settleTone: DQ,
        onExplain: kQ
      } = QQ;
      const vQ = QQ => Math.max(0, Math.min(FQ, QQ)) / FQ * 100 + "%";
      let mQ = 0;
      return (0, Wo.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: kQ,
        children: [(0, Wo.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [wQ.map((QQ => {
            const FQ = {
              bottom: vQ(mQ),
              height: `calc(${vQ(QQ.upTo)} - ${vQ(mQ)})`
            };
            return mQ = QQ.upTo, (0, Wo.jsx)("i", {
              className: Sq()("NxGaugeBand", QQ.kind),
              style: FQ
            }, QQ.kind)
          })), null !== qQ && (0, Wo.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: vQ(qQ)
            }
          }), void 0 !== oQ && null !== oQ && (0, Wo.jsx)("i", {
            className: Sq()("NxGaugeSettle", {
              Bad: "bad" === DQ
            }),
            style: {
              bottom: vQ(oQ)
            }
          })]
        }), (0, Wo.jsx)("span", {
          className: "NxGaugeTicks",
          children: LQ.map((QQ => (0, Wo.jsx)("small", {
            style: {
              bottom: vQ(QQ)
            },
            children: QQ
          }, QQ)))
        })]
      })
    }

    function BH(QQ) {
      const [FQ, wQ] = (0, LQ.useState)(null), [qQ, oQ] = (0, LQ.useState)((() => {
        try {
          return null === window.localStorage.getItem(QQ)
        } catch {
          return !1
        }
      })), DQ = (0, LQ.useRef)(null);
      (0, LQ.useEffect)((() => () => {
        null !== DQ.current && clearTimeout(DQ.current)
      }), []);
      const kQ = (0, LQ.useCallback)((FQ => {
          wQ(FQ), oQ(!1);
          try {
            window.localStorage.setItem(QQ, "1")
          } catch {}
          null !== DQ.current && clearTimeout(DQ.current), DQ.current = setTimeout((() => {
            DQ.current = null, wQ(null)
          }), 5e3)
        }), [QQ]),
        vQ = (0, LQ.useCallback)(((FQ, wQ) => {
          const LQ = `${QQ}:${FQ}`;
          try {
            if (null !== window.localStorage.getItem(LQ)) return;
            window.localStorage.setItem(LQ, "1")
          } catch {
            return
          }
          kQ(wQ)
        }), [kQ, QQ]);
      return {
        explained: FQ,
        hinting: qQ,
        explain: kQ,
        explainOnce: vQ
      }
    }

    function dH(QQ) {
      let {
        text: FQ,
        tone: wQ,
        explained: LQ
      } = QQ;
      return (0, Wo.jsxs)("p", {
        className: Sq()("NxStatus", null === LQ ? wQ : "Explain"),
        "aria-live": "polite",
        children: [null !== LQ && (0, Wo.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== LQ && void 0 !== LQ ? LQ : FQ]
      })
    }
    const Qb = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function Fb(QQ, FQ) {
      const wQ = Number(QQ[FQ]);
      return 1 === wQ || 2 === wQ || 3 === wQ ? wQ : 0
    }

    function wb(QQ) {
      return !!Wv("reactor", QQ.baf2RxNeed) || void 0 !== QQ.baf2RxLayout && QQ.baf2RxNeed.some((QQ => {
        let [FQ, wQ] = QQ;
        return wQ > 0 && Qb.includes(FQ)
      }))
    }
    const Lb = "buildAFactory2Game:";

    function qb(QQ) {
      let {
        status: FQ,
        store: wQ,
        busy: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)();
      return function(QQ) {
        return 0 !== (QQ.baf2RxFlags & AF) && (!QQ.baf2RxFormed || void 0 !== QQ.baf2RxLayout)
      }(FQ) ? (0, Wo.jsx)(iD.m, {
        disabled: !wb(FQ) || LQ,
        onClick: () => {
          wQ.tap("fill", (() => {
            wQ.send("fill")
          }))
        },
        children: qQ(void 0 !== FQ.baf2RxLayout ? `${Lb}rxFillLayout` : `${Lb}rxFill`)
      }) : null
    }

    function ob(QQ) {
      let {
        status: FQ,
        store: wQ,
        readOnly: qQ,
        bare: oQ = !1
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), kQ = FQ.baf2RxLayout, [vQ, mQ, uQ] = FQ.baf2RxDims, HQ = (0, LQ.useMemo)((() => {
        if (void 0 === kQ) return 0;
        const QQ = Uint8Array.from(kQ, ((QQ, FQ) => Fb(kQ, FQ)));
        return Lv([vQ - 2, mQ - 2, uQ - 2], QQ).max
      }), [kQ, vQ, mQ, uQ]);
      return void 0 === kQ ? null : (0, Wo.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!oQ && (0, Wo.jsx)("span", {
          className: "Baf2RxHint",
          children: DQ(`${Lb}rxLayoutLine`, {
            amount: Nv(HQ)
          })
        }), !qQ && (0, Wo.jsx)(iD.f, {
          onClick: () => {
            wQ.send("layout", 0)
          },
          children: DQ(`${Lb}rxLayoutHide`)
        })]
      })
    }
    const Db = "buildAFactory2Game:",
      kb = {
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

    function vb(QQ) {
      let {
        id: FQ,
        title: wQ,
        body: LQ,
        bodyParams: qQ,
        yes: oQ,
        cancel: DQ,
        confirm: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, Oq.y)();
      return (0, Wo.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": FQ,
        children: [(0, Wo.jsx)("h3", {
          id: FQ,
          children: vQ(wQ)
        }), (0, Wo.jsx)("p", {
          children: vQ(LQ, qQ)
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, Wo.jsx)(iD.i, {
            onClick: DQ,
            children: vQ(`${Db}rxCancel`)
          }), (0, Wo.jsx)(iD.F, {
            onClick: kQ,
            children: vQ(oQ)
          })]
        })]
      })
    }

    function mb(QQ) {
      const [FQ, wQ] = (0, LQ.useState)((() => QQ.get()));
      return (0, LQ.useEffect)((() => (wQ(QQ.get()), QQ.subscribe((() => {
        wQ(QQ.get())
      })))), [QQ]), FQ
    }

    function ub(QQ) {
      let {
        kind: FQ,
        cap: wQ,
        busy: qQ = !1,
        whyNot: oQ = null,
        apart: DQ
      } = QQ;
      const {
        t: kQ
      } = (0, Oq.y)(), [vQ, mQ] = (0, LQ.useState)(!1), uQ = null !== oQ, HQ = (0, LQ.useRef)(null);
      if ((0, LQ.useEffect)((() => {
          uQ && mQ(!1)
        }), [uQ]), (0, LQ.useLayoutEffect)((() => {
          var QQ;
          const FQ = null === (QQ = HQ.current) || void 0 === QQ ? void 0 : QQ.firstElementChild;
          uQ ? null === FQ || void 0 === FQ || FQ.setAttribute("aria-disabled", "true") : qQ || null === FQ || void 0 === FQ || FQ.removeAttribute("aria-disabled")
        })), !vQ || uQ) return (0, Wo.jsx)("span", {
        ref: HQ,
        className: "Baf2RxApartWrap",
        children: (0, Wo.jsx)(iD.i, {
          disabled: qQ,
          className: Sq()({
            Baf2RxNotYet: uQ
          }),
          onClick: () => {
            oQ ? oQ() : mQ(!0)
          },
          children: kQ(`${Db}rxApart`)
        })
      });
      const bQ = "battery" === FQ,
        YQ = void 0 === wQ ? `${Db}batApartConfirmBodyPlan` : `${Db}batApartConfirmBody`;
      return (0, Wo.jsx)(vb, {
        id: `baf2ApartTitle_${FQ}`,
        title: bQ ? `${Db}batApartConfirmTitle` : `${Db}rxApartConfirmTitle`,
        body: bQ ? YQ : `${Db}rxApartConfirmBody`,
        bodyParams: void 0 === wQ ? void 0 : {
          cap: wQ
        },
        yes: `${Db}rxApart`,
        cancel: () => {
          mQ(!1)
        },
        confirm: () => {
          mQ(!1), DQ()
        }
      })
    }

    function Hb(QQ) {
      let {
        mood: FQ,
        big: wQ
      } = QQ;
      const LQ = kb[FQ],
        qQ = [];
      return LQ.rows.forEach(((QQ, FQ) => {
        for (let wQ = 0; wQ < QQ.length; wQ++) "." !== QQ[wQ] && qQ.push((0, Wo.jsx)("rect", {
          x: wQ + 1,
          y: FQ + 1,
          width: 1,
          height: 1,
          fill: "w" === QQ[wQ] ? "#8fd3ff" : LQ.colour
        }, `${wQ},${FQ}`))
      })), (0, Wo.jsxs)("svg", {
        className: Sq()("Baf2RxFace", {
          Big: wQ,
          Alarm: "alarm" === FQ
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, Wo.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, Wo.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), qQ]
      })
    }

    function bb(QQ) {
      return Mo(QQ, "+").replace("+", "")
    }

    function Yb(QQ) {
      let {
        kind: FQ,
        dims: wQ,
        cap: LQ,
        disabled: qQ,
        compact: oQ,
        resize: DQ
      } = QQ;
      const {
        t: kQ
      } = (0, Oq.y)(), {
        min: vQ,
        max: mQ
      } = Xw(FQ), uQ = Math.min(LQ, mQ), HQ = [`${Db}rxWide`, `${Db}rxTall`, `${Db}rxDeep`], bQ = {
        w: String(wQ[0]),
        h: String(wQ[1]),
        d: String(wQ[2]),
        blocks: String(Uv(FQ, wQ))
      };
      return (0, Wo.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, Wo.jsx)("div", {
          className: "Baf2RxSteppers",
          children: wQ.map(((QQ, FQ) => {
            const oQ = LQ => {
                const qQ = [wQ[0], wQ[1], wQ[2]];
                qQ[FQ] = QQ + LQ, DQ(qQ)
              },
              bQ = QQ >= uQ;
            return (0, Wo.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, Wo.jsx)("button", {
                type: "button",
                "aria-label": kQ(`${Db}rxSmaller`),
                disabled: qQ || QQ <= vQ,
                onClick: () => {
                  oQ(-1)
                },
                children: "\u2212"
              }), (0, Wo.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [QQ, (0, Wo.jsx)("small", {
                  children: kQ(HQ[FQ])
                })]
              }), (0, Wo.jsx)("button", {
                type: "button",
                "aria-label": kQ(`${Db}rxBigger`),
                disabled: qQ || bQ,
                onClick: () => {
                  oQ(1)
                },
                children: bQ && LQ < mQ ? "\ud83d\udd12" : "+"
              })]
            }, HQ[FQ])
          }))
        }), !oQ && (0, Wo.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === FQ ? kQ(`${Db}rxSizeLine`, {
            ...bQ,
            water: String(Iv(wQ))
          }) : kQ(`${Db}batSizeLine`, bQ)
        })]
      })
    }

    function xb(QQ) {
      let {
        on: FQ,
        label: wQ,
        disabled: LQ,
        locked: qQ,
        pending: oQ,
        toggle: DQ
      } = QQ;
      return (0, Wo.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": FQ,
        disabled: LQ,
        "aria-disabled": qQ || void 0,
        className: Sq()("Baf2RxSwitch", {
          On: FQ,
          Locked: qQ,
          Pending: oQ
        }),
        onClick: DQ,
        children: [(0, Wo.jsx)("span", {
          className: "Baf2RxKnob"
        }), wQ]
      })
    }
    const Ab = "buildAFactory2Game:",
      tb = .95;

    function eb(QQ, FQ) {
      return 0 !== (QQ.baf2RxFlags & FQ)
    }

    function Mb(QQ) {
      return "cryo" === QQ ? BQ.l : BQ.o
    }

    function Gb(QQ) {
      var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
      return QQ.baf2RxCryo ? {
        wY: "cryo",
        usePerS: null !== (qQ = QQ.baf2RxCryoUse) && void 0 !== qQ ? qQ : 0,
        needPerS: null !== (oQ = QQ.baf2RxCryoNeed) && void 0 !== oQ ? oQ : 0,
        inPerS: null !== (DQ = QQ.baf2RxCryoIn) && void 0 !== DQ ? DQ : 0,
        stored: null !== (kQ = QQ.baf2RxCryoStored) && void 0 !== kQ ? kQ : 0,
        makersShort: null !== (vQ = QQ.baf2RxMixersShort) && void 0 !== vQ ? vQ : 0,
        waterBeside: null !== (mQ = QQ.baf2RxWaterUse) && void 0 !== mQ ? mQ : 0,
        pct: QQ.baf2RxWater
      } : {
        wY: "water",
        usePerS: null !== (FQ = QQ.baf2RxWaterUse) && void 0 !== FQ ? FQ : 0,
        needPerS: null !== (wQ = QQ.baf2RxWaterNeed) && void 0 !== wQ ? wQ : 0,
        inPerS: QQ.baf2RxWaterIn,
        stored: QQ.baf2RxWaterStored,
        makersShort: null !== (LQ = QQ.baf2RxCondensersShort) && void 0 !== LQ ? LQ : 0,
        waterBeside: 0,
        pct: QQ.baf2RxWater
      }
    }

    function pb(QQ) {
      const FQ = "running" === QQ.baf2RxState || "idle" === QQ.baf2RxState;
      return QQ.baf2RxFormed && QQ.baf2RxTarget !== QQ.baf2RxThrottle && FQ ? cb(QQ, QQ.baf2RxTarget) : null
    }

    function cb(QQ, FQ) {
      const [wQ, LQ, qQ, , , , oQ, , DQ] = QQ.baf2RxStats, kQ = eb(QQ, YF), vQ = Gb(QQ), mQ = vQ.pct / 100, {
        gen: uQ,
        out: HQ,
        load: bQ
      } = function(QQ, FQ, wQ, LQ) {
        const qQ = wQ ? Zk : 1,
          oQ = Math.min(QQ.fuelHeat * qQ * Math.max(0, Math.min(1, FQ)), QQ.size * qQ);
        return {
          gen: oQ,
          out: oQ,
          load: xv(oQ, QQ.cooling, LQ)
        }
      }({
        fuelHeat: wQ,
        cooling: LQ,
        size: qQ
      }, FQ / 100, kQ, mQ), YQ = tv(oQ || wv(...QQ.baf2RxDims)), xQ = QQ.baf2RxHeat, AQ = Math.abs(bQ - xQ), tQ = function(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : BQ.o;
        const oQ = wQ ? Zk : 1,
          DQ = Math.min(QQ.fuelHeat * oQ * FQ / 100, QQ.size * oQ),
          kQ = DQ,
          vQ = QQ.fuelHeat * oQ,
          mQ = QQ.cooling * Yv(LQ.pct / 100),
          uQ = vQ > 0 && mQ < QQ.size * oQ ? Math.floor(100 * mQ / vQ) : 100,
          HQ = DQ * qQ - LQ.inPerS;
        return {
          out: kQ,
          hotAbove: uQ >= 100 ? null : Math.max(0, uQ),
          waterSecs: LQ.pct >= 100 && HQ > 1e-6 ? Math.max(0, LQ.stored) / HQ : null
        }
      }({
        fuelHeat: wQ,
        cooling: LQ,
        size: qQ
      }, FQ, kQ, {
        pct: vQ.pct,
        inPerS: vQ.inPerS,
        stored: vQ.stored
      }, Mb(vQ.wY));
      return {
        pct: FQ,
        out: HQ,
        coolPerS: uQ * Mb(vQ.wY),
        pelletsPerMin: DQ > 0 ? HQ / DQ * 60 : 0,
        settle: bQ,
        settleS: AQ > 2 ? YQ * Math.log(AQ / 2) : 0,
        overheatS: bQ > 100 && xQ < 100 ? YQ * Math.log((bQ - xQ) / (bQ - 100)) : null,
        hotAbove: tQ.hotAbove,
        coolantSecs: tQ.waterSecs
      }
    }

    function Cb(QQ) {
      return QQ.baf2RxThrottle <= 0 && "running" !== QQ.baf2RxState ? 0 : cb(QQ, QQ.baf2RxTarget).pelletsPerMin / 60
    }

    function Sb(QQ, FQ) {
      if (QQ <= 0 || FQ <= 0) return 0;
      const wQ = QQ / FQ;
      return wQ < .25 ? 1 : wQ < .5 ? 2 : wQ < .8 ? 3 : 4
    }

    function ib(QQ, FQ) {
      const wQ = {};
      for (const [LQ, qQ] of Object.entries(FQ.params)) wQ[LQ] = "time" === LQ ? co(QQ, qQ) : "amount" === LQ ? Nv(qQ) : String(Math.round(qQ));
      return QQ(FQ.key, wQ)
    }

    function Wb(QQ, FQ) {
      return {
        key: `${Ab}${QQ}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: FQ
      }
    }

    function Rb(QQ) {
      var FQ;
      const wQ = eb(QQ, YF),
        LQ = "running" === QQ.baf2RxState,
        qQ = pv(QQ),
        oQ = QQ.baf2RxHeat;
      var DQ;
      if (LQ && oQ > gk) return {
        key: null !== (DQ = qQ.fix) && void 0 !== DQ ? DQ : `${Ab}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const kQ = LQ ? cb(QQ, QQ.baf2RxTarget).coolantSecs : null,
        vQ = "cryo" === Gb(QQ).wY;
      if (null !== kQ && kQ >= 1 && kQ <= 30) return Wb(vQ ? "rxWarnCryo" : "rxWarnWater", "bad");
      const mQ = Qv(wv(...QQ.baf2RxDims)).waste,
        uQ = LQ ? Rv(QQ, mQ, Cb(QQ)).fullInS : null;
      if (null !== uQ && uQ <= 120 && QQ.baf2RxWaste >= .5 * mQ) return Wb("rxWarnWaste", "warn");
      if (null !== kQ && kQ >= 1) return Wb(vQ ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: kQ
      });
      const HQ = "noWater" === QQ.baf2RxState && oQ > gk;
      if (QQ.baf2RxDamage >= 1 && !HQ) return Wb("rxDamagedHeals", "warn", {
        pct: QQ.baf2RxDamage
      });
      if (QQ.baf2RxCryoCut) return Wb("rxFix_cryoCut", "warn");
      const bQ = Gb(QQ);
      if ("noWater" === QQ.baf2RxState && "cryo" === bQ.wY) return Wb("noWater" === QQ.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const YQ = qQ.fix === `${Ab}rxFix_scramCool` || "idle" === QQ.baf2RxState && QQ.baf2RxTarget <= 0;
      if (YQ && QQ.baf2RxFuel <= 0) return Wb("rxFix_noFuel", "warn");
      if (YQ && QQ.baf2RxWaterIn <= 0 && (null !== (FQ = QQ.baf2RxCryoIn) && void 0 !== FQ ? FQ : 0) <= 0) return Wb("rxFix_noWater", "warn");
      const xQ = qQ.fix === `${Ab}rxFix_scramCool` ? Cv(QQ) : null;
      if (null !== xQ) return {
        key: xQ.key,
        params: {
          amount: xQ.amount
        },
        tone: "info"
      };
      if ("running" !== QQ.baf2RxState && "idle" !== QQ.baf2RxState && null !== qQ.fix) return {
        key: qQ.fix,
        params: {},
        tone: "scram" === QQ.baf2RxState ? "info" : HQ ? "bad" : "warn"
      };
      var AQ;
      if ("idle" === QQ.baf2RxState && QQ.baf2RxTarget <= 0) return {
        key: null !== (AQ = qQ.fix) && void 0 !== AQ ? AQ : `${Ab}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const tQ = QQ.baf2RxCryoStarved;
      if ("cryo" === bQ.wY && tQ && bQ.needPerS > 0 && bQ.usePerS < tb * bQ.needPerS) return Wb("noWater" === tQ ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const eQ = "cryo" === bQ.wY,
        MQ = bQ.needPerS > 0 && bQ.usePerS < tb * bQ.needPerS;
      if (eQ ? MQ || bQ.makersShort > 0 && bQ.pct < 100 : bQ.pct < 100) {
        const FQ = eQ && MQ ? Math.floor(100 * bQ.usePerS / bQ.needPerS) : Math.min(100, bQ.pct);
        if (bQ.makersShort > 0) {
          return Wb(`${eQ?"rxCryoShortLine":"rxWaterShortLine"}${1===bQ.makersShort?"One":""}${!eQ&&QQ.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: FQ,
            count: bQ.makersShort
          })
        }
        return Wb(eQ ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: FQ
        })
      }
      const GQ = function(QQ) {
        const [FQ, wQ, LQ] = QQ.baf2RxStats, qQ = Gb(QQ), oQ = Av({
          fuelHeat: FQ,
          cooling: wQ,
          size: LQ
        }, "cryo" === qQ.wY ? BQ.h : 1, !0);
        return Math.max(0, oQ * Mb(qQ.wY) - qQ.inPerS)
      }(QQ);
      if (wQ && GQ > 0) return Wb("cryo" === bQ.wY ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(GQ)
      });
      if (oQ >= Hv) return Wb("rxHotLine", "warn");
      const pQ = cb(QQ, QQ.baf2RxTarget);
      var cQ;
      if (null !== pQ.overheatS) return Wb("rxWillOverheat", "bad", {
        pct: QQ.baf2RxTarget,
        time: pQ.overheatS,
        safe: null !== (cQ = pQ.hotAbove) && void 0 !== cQ ? cQ : 100
      });
      if (Math.abs(pQ.settle - oQ) >= 3) return Wb("rxSettling", "info", {
        pct: QQ.baf2RxTarget,
        heat: Math.round(pQ.settle),
        time: pQ.settleS
      });
      const CQ = Cv(QQ);
      if (null !== CQ) return {
        key: CQ.key,
        params: {
          amount: CQ.amount
        },
        tone: "info"
      };
      const SQ = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== FQ && ("running" !== FQ || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === QQ.rods ? `${ev}rxLimitNoRods` : `${ev}rxLimit_${uv(QQ)}`
      }({
        rods: QQ.baf2RxStats[3],
        ...cv(QQ)
      }, QQ.baf2RxState, QQ.baf2RxOut >= tb * QQ.baf2RxMaxNow, !1);
      if (SQ === `${Ab}rxLimit_size`) {
        const [FQ, , wQ, LQ] = QQ.baf2RxStats, qQ = LQ > 0 && FQ > 0 ? Math.ceil(wQ / (FQ / LQ) - 1e-9) : LQ, oQ = QQ.baf2RxDims.every((QQ => QQ >= Xw("reactor").max));
        if (qQ < LQ) return Wb(oQ ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: qQ,
          have: LQ
        });
        if (oQ) return Wb("rxLimit_sizeMax", "info")
      }
      return null !== SQ ? {
        key: SQ,
        params: {},
        tone: "info"
      } : Wb("rxSteady", "ok", {
        pct: QQ.baf2RxTarget
      })
    }

    function Ob(QQ) {
      var FQ;
      if (QQ.melted) return Wb("rxMeltedBody", "bad");
      if (-1 === QQ.bad) return Wb("rxFix_noRoom", "warn");
      if (QQ.bad > 0) return Wb(1 === QQ.bad ? "rxBadOne" : "rxBad", "warn", {
        count: QQ.bad
      });
      if (QQ.left > 0) {
        const FQ = 1 === QQ.left ? "One" : "";
        return Wb(QQ.canFill ? `rxPlanLeft${FQ}` : `rxPlanLeftNoFill${FQ}`, "info", {
          count: QQ.left
        })
      }
      if (0 === QQ.rods) return Wb("rxLimitNoRods", "warn");
      const wQ = null !== (FQ = QQ.idle) && void 0 !== FQ ? FQ : 0;
      return wQ > 0 ? Wb(1 === wQ ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: wQ
      }) : Wb("rxPlanReady", "ok")
    }

    function sb(QQ) {
      return Math.floor(Math.max(0, QQ[1] - 1) / 2)
    }

    function rb(QQ) {
      if (QQ >= ov && QQ < Dv) {
        const FQ = QQ - ov;
        return {
          key: 0 === FQ ? `${Ab}rxWhy_rodAlone` : 1 === FQ ? `${Ab}rxWhy_rodOne` : `${Ab}rxWhy_rod`,
          params: {
            count: String(FQ),
            heat: String(ak * (1 + Xk * FQ))
          }
        }
      }
      return QQ === Dv ? {
        key: `${Ab}rxWhy_channel`,
        params: {
          amount: String(Vk)
        }
      } : QQ === kv ? {
        key: `${Ab}rxWhy_deadChannel`,
        params: {}
      } : QQ === vv ? {
        key: `${Ab}rxWhy_graphite`,
        params: {}
      } : {
        key: `${Ab}rxWhy_core`,
        params: {}
      }
    }
    const Ib = "buildAFactory2Game:";

    function Ub(QQ, FQ) {
      return 0 !== (QQ.baf2RxFlags & FQ)
    }

    function Nb(QQ) {
      let {
        status: FQ,
        pending: wQ,
        store: LQ,
        explain: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)(), DQ = Ub(FQ, bF), kQ = FQ.baf2RxTarget, vQ = FQ.baf2RxThrottle, mQ = function(QQ) {
        return {
          press: () => {
            QQ.throttlePress()
          },
          drag: FQ => {
            QQ.throttleDrag(FQ)
          },
          release: () => {
            QQ.throttleRelease()
          }
        }
      }(LQ), uQ = null === (HQ = cb(FQ, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, HQ - 10),
        red: HQ
      };
      var HQ;
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2RxThrottle", {
          Off: DQ
        }),
        onClick: () => {
          DQ && qQ(`${Ib}rxWhy_startFirst`)
        },
        children: [(0, Wo.jsx)("span", {
          className: "HideNarrow",
          children: oQ(`${Ib}rxThrottle`)
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, Wo.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: kQ,
            disabled: DQ,
            style: DQ ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": oQ(`${Ib}rxThrottle`),
            onPointerDown: () => {
              mQ.press();
              const QQ = () => {
                window.removeEventListener("pointerup", QQ), window.removeEventListener("pointercancel", QQ), mQ.release()
              };
              window.addEventListener("pointerup", QQ), window.addEventListener("pointercancel", QQ)
            },
            onKeyUp: mQ.release,
            onChange: QQ => {
              mQ.drag(Number(QQ.target.value))
            }
          }), (0, Wo.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${uQ.amber}%, #ffb020 ${uQ.amber}% ${uQ.red}%, #ff3b30 ${uQ.red}%)`
            },
            "aria-hidden": "true"
          }), (0, Wo.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${vQ}% + ${8*(1-vQ/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, Wo.jsxs)("b", {
          children: [`${kQ}%`, (0, Wo.jsx)("i", {
            className: Sq()("Baf2RxPendingDot", {
              On: wQ
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function Tb(QQ) {
      let {
        status: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), LQ = cb(FQ, FQ.baf2RxTarget), qQ = Gb(FQ).wY, oQ = wQ("cryo" === qQ ? `${Ib}rxRateCryo` : `${Ib}rxRateWater`, {
        rate: bb(LQ.coolPerS)
      }), DQ = wQ(`${Ib}rxChain`, {
        pct: String(FQ.baf2RxTarget),
        out: Nv(LQ.out),
        heat: String(Math.round(LQ.settle)),
        coolant: oQ
      }), kQ = null !== LQ.coolantSecs ? LQ.coolantSecs >= 1 ? wQ("cryo" === qQ ? `${Ib}rxThrottleCryoOut` : `${Ib}rxThrottleWaterOut`, {
        time: co(wQ, LQ.coolantSecs)
      }) : wQ("cryo" === qQ ? `${Ib}rxThrottleCryoDry` : `${Ib}rxThrottleWaterDry`) : null;
      return (0, Wo.jsxs)("p", {
        className: "Baf2RxChain",
        children: [DQ, null !== kQ ? (0, Wo.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", kQ]
        }) : (0, Wo.jsxs)("span", {
          children: [" \xb7 ", wQ(`${Ib}rxChainPellets`, {
            amount: Tv(LQ.pelletsPerMin)
          })]
        })]
      })
    }

    function Kb(QQ) {
      let {
        view: FQ,
        store: wQ,
        explain: qQ,
        explainOnce: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), {
        status: kQ
      } = FQ, [vQ, mQ] = (0, LQ.useState)(!1), uQ = Ub(kQ, bF), bQ = Ub(kQ, YF), YQ = !Ub(kQ, tF), xQ = kQ.baf2RxHeat > 100;
      return (0, Wo.jsxs)(Wo.Fragment, {
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, Wo.jsx)(Nb, {
            status: kQ,
            pending: FQ.throttlePending,
            store: wQ,
            explain: qQ
          }), (0, Wo.jsx)(xb, {
            on: bQ,
            label: bQ ? DQ(`${Ib}rxOdLeft`, {
              time: co(DQ, kQ.baf2RxOdLeft)
            }) : DQ(`${Ib}rxOverdrive`),
            locked: YQ,
            pending: 0 !== (FQ.pendingFlags & YF),
            toggle: () => {
              YQ ? qQ(`${Ib}rxOverdriveTier`, {
                amount: String(HQ(13))
              }) : bQ ? wQ.setFlag(YF, !1) : FQ.odConfirmed ? wQ.setFlag(YF, !0) : mQ(!0)
            }
          }), uQ || FQ.startGuard ? (0, Wo.jsx)(iD.s, {
            disabled: FQ.busy.has("start") || FQ.startGuard,
            onClick: () => {
              wQ.tap("start", (() => {
                wQ.setFlag(bF, !1)
              }))
            },
            children: DQ(FQ.startGuard ? `${Ib}rxStarting` : `${Ib}rxStart`)
          }) : (0, Wo.jsx)("span", {
            className: Sq()("Baf2RxScram", {
              Pulse: xQ
            }),
            children: (0, Wo.jsx)(iD.F, {
              onClick: () => {
                wQ.shutDown()
              },
              children: DQ(`${Ib}rxScram`)
            })
          })]
        }), (0, Wo.jsx)(Tb, {
          status: kQ
        }), vQ && (0, Wo.jsx)(vb, {
          id: "baf2RxOdTitle",
          title: `${Ib}rxOdConfirmTitle`,
          body: `${Ib}rxOdConfirmBody`,
          yes: `${Ib}rxOdConfirm`,
          cancel: () => {
            mQ(!1)
          },
          confirm: () => {
            mQ(!1), wQ.tap("odConfirm", (() => {
              wQ.confirmOverdrive(), wQ.setFlag(YF, !0)
            })), oQ(`${Ib}rxWhy_overdrive`)
          }
        })]
      })
    }

    function zb(QQ) {
      let {
        view: FQ,
        store: wQ,
        keepSize: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), {
        status: oQ
      } = FQ;
      return (0, Wo.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, Wo.jsx)(Yb, {
          kind: "reactor",
          dims: FQ.dims,
          cap: oQ.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: QQ => {
            wQ.resize(QQ)
          }
        }), LQ ? (0, Wo.jsx)(iD.i, {
          onClick: LQ,
          children: qQ(`${Ib}rxKeepSize`)
        }) : (0, Wo.jsxs)(Wo.Fragment, {
          children: [(0, Wo.jsx)(xb, {
            on: FQ.guide,
            label: qQ(`${Ib}rxGuide`),
            toggle: () => {
              wQ.toggleGuide()
            }
          }), Ub(oQ, MF) && (0, Wo.jsx)(xb, {
            on: FQ.starter,
            label: qQ(`${Ib}rxStarter`),
            toggle: () => {
              wQ.toggleStarter()
            }
          }), (0, Wo.jsx)(qb, {
            status: oQ,
            store: wQ,
            busy: FQ.busy.has("fill")
          })]
        })]
      })
    }

    function lb(QQ) {
      let {
        need: FQ,
        kind: wQ = "reactor",
        explain: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), oQ = FQ.length <= 3, DQ = FQ.reduce(((QQ, FQ) => {
        let [, wQ] = FQ;
        return QQ + wQ
      }), 0);
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2RxParts", {
          Compact: !oQ
        }),
        onClick: () => {
          LQ("battery" === wQ ? `${Ib}batWhy_store` : `${Ib}rxShellHint`)
        },
        children: [DQ > 0 && (0, Wo.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === DQ ? qQ(`${Ib}rxBlocksOne`) : qQ(`${Ib}rxBlocks`, {
            blocks: String(DQ)
          })
        }), 0 === FQ.length ? (0, Wo.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: qQ("battery" === wQ ? `${Ib}batPartsDone` : `${Ib}rxShellDone`)
        }) : iv(FQ).map((QQ => {
          let [FQ, wQ, LQ] = QQ;
          const DQ = function(QQ) {
            const FQ = rv[QQ];
            if (void 0 === FQ) return null;
            const [wQ, LQ, qQ] = Ov[FQ].colour.map((QQ => Math.round(255 * QQ)));
            return `rgb(${wQ}, ${LQ}, ${qQ})`
          }(FQ);
          return (0, Wo.jsxs)("span", {
            className: "Baf2RxChip",
            title: qo(qQ, FQ),
            children: [(0, Wo.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === DQ ? {
                visibility: "hidden"
              } : {
                background: DQ
              },
              title: qQ(`${Ib}rxShopGhost`)
            }), (0, Wo.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, Wo.jsx)(rq.e, {
                itemName: FQ,
                amount: 0
              })
            }), (0, Wo.jsx)("span", {
              className: "Baf2RxChipName",
              children: oQ ? `${wQ} ${kQ=qo(qQ,FQ),kQ.replace(/^(Reactor|Battery) (?=\S)/,"")}` : wQ
            }), LQ >= wQ ? (0, Wo.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, Wo.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: oQ ? qQ(`${Ib}rxShopShort`, {
                count: String(wQ - LQ)
              }) : "\u2212" + (wQ - LQ)
            })]
          }, FQ);
          var kQ
        }))]
      })
    }
    const jb = "buildAFactory2Game:";

    function ab(QQ) {
      var FQ, wQ, qQ, oQ, DQ, kQ, vQ;
      let {
        store: mQ,
        close: uQ
      } = QQ;
      const {
        t: HQ
      } = (0, Oq.y)(), bQ = hD(), YQ = mb(mQ), {
        explained: xQ,
        explain: AQ
      } = BH("baf2RxExplained"), tQ = (0, LQ.useCallback)(((QQ, FQ) => {
        AQ(HQ(QQ, FQ))
      }), [AQ, HQ]), eQ = null === YQ || void 0 === YQ ? void 0 : YQ.status, MQ = !0 === (null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatReadOnly), GQ = QQ => {
        eQ && bQ.send(HF(eQ.baf2BatAt, QQ))
      }, [pQ, cQ, CQ] = null !== (FQ = null === YQ || void 0 === YQ ? void 0 : YQ.dims) && void 0 !== FQ ? FQ : [0, 0, 0], SQ = Nv(null !== (wQ = null === YQ || void 0 === YQ ? void 0 : YQ.MH) && void 0 !== wQ ? wQ : 0), iQ = !0 === (null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatFormed), WQ = null !== (qQ = null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatStored) && void 0 !== qQ ? qQ : 0, RQ = Math.max(1, null !== (oQ = null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatIslandCap) && void 0 !== oQ ? oQ : 1), OQ = Math.min(100, 100 * WQ / RQ), sQ = null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatNetPerS, rQ = function(QQ, FQ, wQ) {
        return wQ > 0 && FQ >= wQ ? "full" : void 0 !== QQ && QQ >= .05 ? "charging" : void 0 !== QQ && QQ <= -.05 && FQ > 0 ? "draining" : "steady"
      }(sQ, WQ, null !== (DQ = null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatIslandCap) && void 0 !== DQ ? DQ : 0), IQ = null !== (kQ = null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatMadePerS) && void 0 !== kQ ? kQ : 0, UQ = null !== (vQ = null === eQ || void 0 === eQ ? void 0 : eQ.baf2BatUsedPerS) && void 0 !== vQ ? vQ : 0;
      let NQ, TQ = {},
        KQ = "info";
      if (eQ)
        if (iQ) "charging" === rQ ? (NQ = `${jb}batLine_charging`, TQ = {
          time: co(HQ, (RQ - WQ) / Math.max(.05, null !== sQ && void 0 !== sQ ? sQ : 0))
        }, KQ = "ok") : "draining" === rQ ? (NQ = `${jb}batLine_draining`, TQ = {
          time: co(HQ, WQ / Math.max(.05, -(null !== sQ && void 0 !== sQ ? sQ : 0)))
        }, KQ = "warn") : NQ = "full" === rQ ? `${jb}batLine_full` : WQ <= 0 && UQ > 0 ? `${jb}batLine_empty` : `${jb}batLine_steady`;
        else {
          var zQ;
          const QQ = Ob({
            left: eQ.baf2BatNeed.reduce(((QQ, FQ) => {
              let [, wQ] = FQ;
              return QQ + wQ
            }), 0),
            bad: eQ.baf2BatBad,
            rods: 1,
            canFill: !0 === eQ.baf2BatCanFill,
            melted: !1
          });
          NQ = QQ.key, TQ = {
            count: String(null !== (zQ = QQ.params.count) && void 0 !== zQ ? zQ : 0)
          }, KQ = QQ.tone
        }
      else NQ = `${jb}batLine_steady`;
      const lQ = Math.max(IQ, UQ, 1);
      return (0, Wo.jsx)(SD.d, {
        close: uQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Wo.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, Wo.jsx)(rq.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, Wo.jsxs)("div", {
                children: [(0, Wo.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: HQ(`${jb}batTitle`)
                }), eQ && (0, Wo.jsxs)("p", {
                  className: Sq()("Baf2RxSubtitle", {
                    good: iQ && "charging" === rQ,
                    warn: iQ && "draining" === rQ
                  }),
                  children: [pQ, "\xd7", cQ, "\xd7", CQ, " \xb7 ", HQ(iQ ? `${jb}batState_${rQ}` : `${jb}rxSubPlanShort`)]
                })]
              })]
            }), (0, Wo.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [eQ && !MQ && (0, Wo.jsx)(ub, {
                kind: "battery",
                cap: iQ ? SQ : void 0,
                busy: null === YQ || void 0 === YQ ? void 0 : YQ.busy.has("apart"),
                apart: () => {
                  mQ.tap("apart", (() => {
                    GQ("apart")
                  }))
                }
              }), (0, Wo.jsx)(iD.j, {
                onClick: uQ
              })]
            })]
          }), YQ && eQ && (0, Wo.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, Wo.jsxs)("div", {
              className: Sq()("Baf2RxFlow Baf2BatFlow", {
                Plan: !iQ
              }),
              children: [(0, Wo.jsx)(PH, {
                kind: "Power",
                label: HQ(`${jb}batMade`),
                number: iQ ? `\u26a1 ${Nv(IQ)}/s` : "\u2014",
                note: HQ(`${jb}batMadeNote`),
                share: iQ ? IQ / lQ : void 0,
                onExplain: () => {
                  tQ(`${jb}batWhy_made`)
                }
              }), (0, Wo.jsx)(ZH, {
                kind: "Power",
                step: iQ ? Sb(IQ, lQ) : 0,
                planned: !iQ
              }), (0, Wo.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  tQ(`${jb}batWhy_store`)
                },
                children: [(0, Wo.jsx)(yH, {
                  max: 100,
                  bands: [{
                    upTo: iQ ? OQ : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, Wo.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, Wo.jsx)("b", {
                    className: "Baf2BatStored",
                    children: iQ ? HQ(`${jb}batStoredOf`, {
                      amount: Nv(WQ),
                      cap: Nv(eQ.baf2BatIslandCap)
                    }) : HQ(`${jb}batWillHold`, {
                      cap: SQ
                    })
                  }), (0, Wo.jsx)("span", {
                    children: HQ(`${jb}batAdds`, {
                      cap: SQ
                    })
                  }), iQ && (0, Wo.jsx)("small", {
                    children: HQ(`${jb}batBreakNote`, {
                      cap: SQ
                    })
                  })]
                })]
              }), (0, Wo.jsx)(ZH, {
                kind: "Power",
                step: iQ ? Sb(UQ, lQ) : 0,
                planned: !iQ
              }), (0, Wo.jsx)(PH, {
                kind: "Power",
                label: HQ(`${jb}batUsed`),
                number: iQ ? `\u26a1 ${Nv(UQ)}/s` : "\u2014",
                note: HQ(`${jb}batUsedNote`),
                share: iQ ? UQ / lQ : void 0,
                onExplain: () => {
                  tQ(`${jb}batWhy_used`)
                }
              })]
            }), (0, Wo.jsx)(dH, {
              text: HQ(NQ, TQ),
              tone: KQ,
              explained: xQ
            }), MQ ? (0, Wo.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: HQ(`${jb}rxNotYours`)
            }) : !iQ && (0, Wo.jsxs)(Wo.Fragment, {
              children: [(0, Wo.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, Wo.jsx)(Yb, {
                  kind: "battery",
                  dims: YQ.dims,
                  cap: eQ.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: QQ => {
                    mQ.resize(QQ)
                  }
                }), (0, Wo.jsx)(xb, {
                  on: YQ.guide,
                  label: HQ(`${jb}rxGuide`),
                  toggle: () => {
                    mQ.toggleGuide()
                  }
                }), eQ.baf2BatCanFill && (0, Wo.jsx)(iD.m, {
                  disabled: !Wv("battery", eQ.baf2BatNeed) || YQ.busy.has("fill"),
                  onClick: () => {
                    mQ.tap("fill", (() => {
                      GQ("fill")
                    }))
                  },
                  children: HQ(`${jb}rxFill`)
                })]
              }), (0, Wo.jsx)(lb, {
                need: eQ.baf2BatNeed,
                kind: "battery",
                explain: tQ
              })]
            })]
          })]
        })
      })
    }
    const Xb = "buildAFactory2Game:",
      fb = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function Vb(QQ, FQ) {
      return QQ === qv ? null : FQ ? "#4a4440" : QQ < Dv ? fb[QQ - ov] : QQ === Dv ? "#3fd0f0" : QQ === kv ? "#2c3e4c" : "#55585e"
    }

    function hb(QQ) {
      let {
        inner: FQ,
        looks: wQ,
        layer: LQ,
        setLayer: qQ,
        glow: oQ,
        melted: DQ,
        explain: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, Oq.y)(), [mQ, uQ, HQ] = FQ, bQ = Math.max(0, Math.min(uQ - 1, LQ)), YQ = [];
      for (let AQ = 0; AQ < HQ; AQ++)
        for (let QQ = 0; QQ < mQ; QQ++) {
          var xQ;
          const FQ = null !== (xQ = wQ[(bQ * HQ + AQ) * mQ + QQ]) && void 0 !== xQ ? xQ : qv,
            LQ = Vb(FQ, DQ),
            qQ = FQ >= ov && FQ < Dv;
          YQ.push(null === LQ ? (0, Wo.jsx)("circle", {
            cx: QQ + .5,
            cy: AQ + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${QQ},${AQ}`) : (0, Wo.jsx)("rect", {
            x: QQ + .06,
            y: AQ + .06,
            width: .88,
            height: .88,
            fill: LQ,
            opacity: qQ && !DQ ? .5 + .5 * oQ : 1,
            onClick: QQ => {
              QQ.stopPropagation();
              const wQ = rb(FQ);
              kQ(wQ.key, wQ.params)
            }
          }, `${QQ},${AQ}`))
        }
      return (0, Wo.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, Wo.jsx)("svg", {
          className: Sq()("Baf2RxMapGrid", {
            Melted: DQ
          }),
          viewBox: `0 0 ${Math.max(1,mQ)} ${Math.max(1,HQ)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": vQ(`${Xb}rxWhy_core`),
          onClick: () => {
            kQ(`${Xb}rxWhy_core`, {})
          },
          children: YQ
        }), uQ > 1 && (0, Wo.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, Wo.jsx)("button", {
            type: "button",
            "aria-label": vQ(`${Xb}rxLayerDown`),
            disabled: bQ <= 0,
            onClick: () => {
              qQ(bQ - 1)
            },
            children: "\u25bc"
          }), (0, Wo.jsxs)("span", {
            children: [(0, Wo.jsx)("span", {
              className: "HideNarrow",
              children: vQ(`${Xb}rxLayer`, {
                n: String(bQ + 1),
                of: String(uQ)
              })
            }), (0, Wo.jsx)("span", {
              className: "ShowNarrow",
              children: vQ(`${Xb}rxLayerShort`, {
                n: String(bQ + 1),
                of: String(uQ)
              })
            })]
          }), (0, Wo.jsx)("button", {
            type: "button",
            "aria-label": vQ(`${Xb}rxLayerUp`),
            disabled: bQ >= uQ - 1,
            onClick: () => {
              qQ(bQ + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const Jb = "buildAFactory2Game:",
      Eb = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Pk,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: Gv,
        kind: "red"
      }],
      nb = [50, Pk, 100];

    function gb(QQ) {
      let {
        stats: FQ,
        t: wQ,
        explain: LQ
      } = QQ;
      const qQ = uv(FQ),
        oQ = Math.max(1, FQ.fuelHeat, FQ.cooling, FQ.size),
        DQ = [
          ["fuel", `${Jb}rxBarRods`, FQ.fuelHeat],
          ["cooling", `${Jb}rxBarCooling`, FQ.cooling],
          ["size", `${Jb}rxBarSize`, FQ.size]
        ];
      return (0, Wo.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          LQ(`${Jb}rxWhy_bars`)
        },
        children: [(0, Wo.jsx)("span", {
          className: "Baf2RxMostLine",
          children: wQ(`${Jb}rxMost`, {
            amount: Nv(Math.min(FQ.fuelHeat, FQ.cooling, FQ.size))
          })
        }), (0, Wo.jsx)("span", {
          className: "Baf2RxMostBars",
          children: DQ.map((QQ => {
            let [FQ, LQ, DQ] = QQ;
            return (0, Wo.jsxs)("span", {
              className: Sq()("Baf2RxMostBar", FQ, {
                Low: FQ === qQ
              }),
              children: [(0, Wo.jsx)("small", {
                children: wQ(LQ)
              }), (0, Wo.jsx)("i", {
                children: (0, Wo.jsx)("b", {
                  style: {
                    width: 100 * DQ / oQ + "%"
                  }
                })
              })]
            }, FQ)
          }))
        })]
      })
    }

    function Pb(QQ) {
      var FQ;
      let {
        view: wQ,
        heat: qQ,
        settle: oQ,
        settleLine: DQ,
        settleBad: kQ,
        explain: vQ
      } = QQ;
      const {
        t: mQ
      } = (0, Oq.y)(), {
        status: uQ
      } = wQ, HQ = uQ.baf2RxAt.join(","), [bQ, YQ] = (0, LQ.useState)((() => sb(wQ.inner)));
      (0, LQ.useEffect)((() => {
        YQ(sb(wQ.inner))
      }), [HQ, wQ.inner[1]]);
      const xQ = null !== (FQ = wQ.plan) && void 0 !== FQ ? FQ : cv(uQ),
        AQ = wQ.plan ? wQ.plan.powerPerUnit : uQ.baf2RxStats[8],
        tQ = null === qQ ? null : "alarm" === (eQ = Mv(uQ)) ? "red" : "hot" === eQ ? "hot" : "warm" === eQ ? "warm" : "cold";
      var eQ;
      const MQ = !uQ.baf2RxFormed && function(QQ, FQ) {
          return 0 !== (QQ.baf2RxFlags & FQ)
        }(uQ, xF),
        GQ = uQ.baf2RxDamage,
        pQ = uQ.baf2RxDamageTrend;
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2RxCore", null !== tQ && void 0 !== tQ ? tQ : "plan"),
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, Wo.jsx)(hb, {
            inner: wQ.inner,
            looks: wQ.looks,
            layer: bQ,
            setLayer: YQ,
            glow: uQ.baf2RxFormed ? uQ.baf2RxThrottle / 100 : 1,
            melted: MQ,
            explain: vQ
          }), (0, Wo.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              vQ(`${Jb}rxWhy_heat`)
            },
            children: [null !== qQ ? (0, Wo.jsxs)(Wo.Fragment, {
              children: [(0, Wo.jsx)("b", {
                children: mQ(`${Jb}rxHeatPct`, {
                  pct: String(qQ)
                })
              }), (0, Wo.jsx)("span", {
                className: Sq()("Baf2RxBand", tQ),
                children: mQ(`${Jb}rxBand_${tQ}`)
              })]
            }) : (0, Wo.jsx)("b", {
              children: mQ(`${Jb}rxHeat`)
            }), null !== DQ && (0, Wo.jsx)("span", {
              className: Sq()("Baf2RxSettle", {
                Bad: kQ
              }),
              children: DQ
            }), GQ >= 1 && (0, Wo.jsxs)("span", {
              className: Sq()("Baf2RxDamage", pQ),
              children: [mQ(`${Jb}rxDamageLine`, {
                pct: String(GQ)
              }), " \xb7 ", mQ(`${Jb}rxDamage_${pQ}`), (0, Wo.jsx)("i", {
                children: (0, Wo.jsx)("b", {
                  style: {
                    width: `${Math.min(100,GQ)}%`
                  }
                })
              })]
            })]
          }), (0, Wo.jsx)(yH, {
            max: Gv,
            bands: Eb,
            ticks: nb,
            now: qQ,
            settle: oQ,
            settleTone: kQ ? "bad" : null,
            onExplain: () => {
              vQ(`${Jb}rxWhy_heat`)
            }
          })]
        }), (0, Wo.jsx)(gb, {
          stats: xQ,
          t: mQ,
          explain: vQ
        }), AQ > 0 && (0, Wo.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            vQ(`${Jb}rxWhy_perPellet`)
          },
          children: mQ(`${Jb}rxPerPellet`, {
            amount: Nv(AQ)
          })
        })]
      })
    }

    function Zb(QQ, FQ) {
      var wQ;
      if (!QQ.baf2RxStore) return {
        note: FQ(`${Jb}rxUpTo`, {
          amount: Nv(QQ.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [LQ, qQ] = QQ.baf2RxStore, oQ = qQ > 0 ? LQ / qQ : 0, DQ = String(Math.floor(100 * oQ)), kQ = null !== (wQ = QQ.baf2RxStoreNetPerS) && void 0 !== wQ ? wQ : 0, vQ = function(QQ) {
        var FQ, wQ;
        const [LQ, qQ] = null !== (FQ = QQ.baf2RxStore) && void 0 !== FQ ? FQ : [0, 0], oQ = null !== (wQ = QQ.baf2RxStoreNetPerS) && void 0 !== wQ ? wQ : 0;
        return qQ > 0 && LQ >= qQ - 1 ? "running" === QQ.baf2RxState ? `${Ab}rxStoreFull` : `${Ab}rxStoreFullOnly` : oQ > .05 ? `${Ab}rxStoreLine` : oQ < -.05 ? "running" === QQ.baf2RxState ? `${Ab}rxStoreUsesMore` : `${Ab}rxStoreDraining` : `${Ab}rxStorePct`
      }(QQ);
      return {
        note: FQ(vQ, vQ === `${Jb}rxStoreLine` ? {
          pct: DQ,
          time: co(FQ, (qQ - LQ) / kQ)
        } : {
          pct: DQ
        }),
        share: oQ
      }
    }

    function yb(QQ) {
      let {
        view: FQ,
        explain: wQ,
        preview: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), {
        status: oQ
      } = FQ, DQ = Qv(wv(...FQ.dims)), kQ = Cb(oQ), vQ = Math.min(Math.round(oQ.baf2RxFuel), DQ.fuel), mQ = "running" === oQ.baf2RxState, uQ = mQ ? Sb(oQ.baf2RxOut, oQ.baf2RxMaxNow) : 0, HQ = function(QQ, FQ, wQ) {
        const LQ = Gb(QQ),
          qQ = "cryo" === LQ.wY,
          oQ = wQ ? wQ.coolantSecs : LQ.pct >= 100 && QQ.baf2RxOut >= 1 ? cb(QQ, QQ.baf2RxThrottle).coolantSecs : null;
        let DQ, kQ = !1;
        if (LQ.pct < 100) {
          const wQ = 1 === LQ.makersShort,
            oQ = !qQ && QQ.baf2RxCryoOpen ? "OrCryo" : "";
          DQ = LQ.makersShort > 0 ? FQ(qQ ? `${Jb}rxCryoAddMixer${wQ?"":"s"}` : `${Jb}rxWaterAddCondenser${wQ?"":"s"}${oQ}`, {
            count: String(LQ.makersShort)
          }) : FQ(`${Jb}rxWaterNeeds`, {
            rate: bb(LQ.needPerS)
          })
        } else if (null !== oQ) DQ = FQ(`${Jb}rxWaterRunsOut`, {
          time: co(FQ, oQ)
        });
        else if (LQ.waterBeside > 0) DQ = FQ(`${Jb}rxCryoPlusWater`, {
          rate: bb(LQ.waterBeside)
        });
        else {
          const QQ = function(QQ) {
            return QQ.inPerS <= 0 ? "rxWaterNoSupply" : QQ.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(LQ);
          kQ = "rxWaterNoSupply" === QQ, DQ = FQ(`${Jb}${QQ}`, {
            amount: Nv(LQ.stored)
          })
        }
        return {
          kind: qQ ? "Cryo" : "Water",
          label: FQ(qQ ? `${Jb}rxCryo` : `${Jb}rxWater`),
          number: `${bb(LQ.usePerS)}/s`,
          preview: wQ ? `${bb(wQ.coolPerS)}/s` : null,
          note: DQ,
          tone: "noWater" === QQ.baf2RxState ? "danger" : kQ ? "warn" : (vQ = LQ.pct, mQ = oQ, vQ < 100 ? "danger" : null === mQ ? null : mQ < 300 ? "danger" : "warn"),
          share: LQ.pct / 100,
          why: qQ ? `${Jb}rxWhy_cryo` : `${Jb}rxWhy_water`,
          short: LQ.pct < 100
        };
        var vQ, mQ
      }(oQ, qQ, LQ), bQ = Rv(oQ, DQ.waste, kQ), YQ = Zb(oQ, qQ), xQ = cb(oQ, oQ.baf2RxTarget), AQ = mQ && Math.abs(xQ.settle - oQ.baf2RxHeat) >= 3, tQ = LQ ? LQ.pelletsPerMin / 60 : null;
      return (0, Wo.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Wo.jsx)(PH, {
            kind: "Fuel",
            label: qQ(`${Jb}rxFuel`),
            number: String(vQ),
            preview: null !== tQ && tQ > 0 && oQ.baf2RxFuel > 0 ? co(qQ, oQ.baf2RxFuel / tQ) : null,
            note: oQ.baf2RxFuel <= 0 ? qQ(`${Jb}rxFuelEmpty`) : kQ > 0 ? qQ(`${Jb}rxFuelLeft`, {
              time: co(qQ, oQ.baf2RxFuel / kQ)
            }) : qQ(1 === vQ ? `${Jb}rxFuelPellet` : `${Jb}rxFuelPellets`),
            tone: "noFuel" === oQ.baf2RxState ? "danger" : oQ.baf2RxFuel < 2 ? "warn" : null,
            share: oQ.baf2RxFuel / DQ.fuel,
            onExplain: () => {
              wQ(`${Jb}rxWhy_fuel`)
            }
          }), (0, Wo.jsx)(PH, {
            kind: HQ.kind,
            label: HQ.label,
            number: HQ.number,
            preview: HQ.preview,
            note: HQ.note,
            tone: HQ.tone,
            share: HQ.share,
            onExplain: () => {
              wQ(HQ.why)
            }
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Wo.jsx)(ZH, {
            kind: "Fuel",
            step: uQ,
            short: "noFuel" === oQ.baf2RxState
          }), (0, Wo.jsx)(ZH, {
            kind: HQ.kind,
            step: uQ,
            short: HQ.short || "noWater" === oQ.baf2RxState
          })]
        }), (0, Wo.jsx)(Pb, {
          view: FQ,
          heat: oQ.baf2RxHeat,
          settle: Math.min(Gv, xQ.settle),
          settleLine: AQ ? qQ(`${Jb}rxHeatSettles`, {
            pct: String(Math.round(xQ.settle)),
            time: co(qQ, xQ.settleS)
          }) : null,
          settleBad: xQ.settle > 100,
          explain: wQ
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Wo.jsx)(ZH, {
            kind: "Power",
            step: uQ
          }), (0, Wo.jsx)(ZH, {
            kind: "Waste",
            step: mQ && oQ.baf2RxFuel - oQ.baf2RxPu > 0 ? uQ : 0,
            short: bQ.full
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Wo.jsx)(PH, {
            kind: "Power",
            label: qQ(`${Jb}rxPowerOut`),
            number: `\u26a1 ${Nv(oQ.baf2RxOut)}/s`,
            preview: LQ ? Nv(LQ.out) : null,
            note: YQ.note,
            share: YQ.share,
            onExplain: () => {
              wQ(`${Jb}rxWhy_power`)
            }
          }), (0, Wo.jsx)(PH, {
            kind: "Waste",
            label: qQ(`${Jb}rxWaste`),
            number: `${Math.floor(oQ.baf2RxWaste)}/${DQ.waste}`,
            note: bQ.full ? qQ(`${Jb}rxWasteFull`) : null !== bQ.fullInS ? qQ(`${Jb}rxWasteFullIn`, {
              time: co(qQ, bQ.fullInS)
            }) : qQ(`${Jb}rxWasteSpent`),
            tone: "wasteFull" === oQ.baf2RxState ? "danger" : bQ.full ? "warn" : null,
            share: oQ.baf2RxWaste / DQ.waste,
            onExplain: () => {
              wQ(`${Jb}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function Bb(QQ) {
      let {
        view: FQ,
        explain: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = FQ.plan;
      if (!qQ) return null;
      const oQ = qQ.fuelHeat <= 0 ? null : qQ.cooling > 0 ? Math.min(Gv, 100 * qQ.fuelHeat / qQ.cooling) : Gv,
        DQ = LQ(`${Jb}rxPlanAtFull`);
      return (0, Wo.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, Wo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Wo.jsx)(PH, {
            kind: "Fuel",
            label: LQ(`${Jb}rxFuel`),
            number: LQ(`${Jb}rxPlanPerMin`, {
              amount: Tv(qQ.pelletsPerMin)
            }),
            note: LQ(`${Jb}rxPlanPellets`),
            onExplain: () => {
              wQ(`${Jb}rxWhy_fuel`)
            }
          }), (0, Wo.jsx)(PH, {
            kind: "Water",
            label: LQ(`${Jb}rxWater`),
            number: `${bb(qQ.waterPerS)}/s`,
            note: FQ.status.baf2RxCryoOpen && qQ.waterPerS > 0 ? LQ(`${Jb}rxPlanOrCryo`, {
              rate: bb(Av(qQ, BQ.h) * BQ.l)
            }) : DQ,
            onExplain: () => {
              wQ(`${Jb}rxWhy_water`)
            }
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Wo.jsx)(ZH, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, Wo.jsx)(ZH, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, Wo.jsx)(Pb, {
          view: FQ,
          heat: null,
          settle: oQ,
          settleLine: null === oQ ? null : LQ(`${Jb}rxPlanHeat`, {
            pct: String(Math.round(oQ))
          }),
          settleBad: null !== oQ && oQ > 100,
          explain: wQ
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, Wo.jsx)(ZH, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, Wo.jsx)(ZH, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, Wo.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, Wo.jsx)(PH, {
            kind: "Power",
            label: LQ(`${Jb}rxPowerOut`),
            number: `\u26a1 ${Nv(qQ.max)}/s`,
            note: DQ,
            onExplain: () => {
              wQ(`${Jb}rxWhy_power`)
            }
          }), (0, Wo.jsx)(PH, {
            kind: "Waste",
            label: LQ(`${Jb}rxWaste`),
            number: LQ(`${Jb}rxPlanPerMin`, {
              amount: Tv(qQ.pelletsPerMin)
            }),
            note: LQ(`${Jb}rxWasteSpent`),
            onExplain: () => {
              wQ(`${Jb}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const db = "buildAFactory2Game:",
      QY = {
        key: `${db}rxWaiting`,
        params: {},
        tone: "info"
      };

    function FY(QQ, FQ) {
      return 0 !== (QQ.baf2RxFlags & FQ)
    }

    function wY(QQ) {
      var FQ, wQ;
      let {
        store: qQ,
        close: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, Oq.y)(), kQ = mb(qQ), {
        explained: vQ,
        hinting: mQ,
        explain: uQ,
        explainOnce: HQ
      } = BH("baf2RxExplained"), bQ = (0, LQ.useCallback)(((QQ, FQ) => {
        uQ(DQ(QQ, FQ))
      }), [uQ, DQ]), YQ = (0, LQ.useCallback)(((QQ, FQ) => {
        HQ(QQ, DQ(QQ, FQ))
      }), [HQ, DQ]), [xQ, AQ] = (0, LQ.useState)(!1), [tQ, eQ] = (0, LQ.useState)(!1), MQ = null === kQ || void 0 === kQ ? void 0 : kQ.status, GQ = null === MQ || void 0 === MQ ? void 0 : MQ.baf2RxAt.join(","), pQ = !0 === (null === MQ || void 0 === MQ ? void 0 : MQ.baf2RxFormed);
      (0, LQ.useEffect)((() => {
        eQ(!1), AQ(!1)
      }), [GQ, pQ]), (0, LQ.useEffect)((() => (qQ.opened(), () => {
        qQ.closed()
      })), [qQ]);
      const cQ = void 0 !== MQ && FY(MQ, eF),
        CQ = MQ ? pQ ? Mv(MQ) : null !== kQ && void 0 !== kQ && kQ.plan ? function(QQ, FQ) {
          if (QQ <= 0) return "off";
          if (FQ <= 0) return "alarm";
          const wQ = 100 * QQ / FQ;
          return wQ < 50 ? "calm" : wQ < Hv ? "warm" : wQ <= 100 ? "hot" : "alarm"
        }(kQ.plan.fuelHeat, kQ.plan.cooling) : "off" : "off",
        SQ = MQ ? pv(MQ) : null,
        iQ = kQ ? kQ.waiting ? QY : pQ ? Rb(kQ.status) : function(QQ) {
          var FQ, wQ;
          const {
            status: LQ
          } = QQ;
          return Ob({
            left: LQ.baf2RxNeed.reduce(((QQ, FQ) => {
              let [, wQ] = FQ;
              return QQ + wQ
            }), 0),
            bad: LQ.baf2RxBad,
            rods: null !== (FQ = null === (wQ = QQ.plan) || void 0 === wQ ? void 0 : wQ.rods) && void 0 !== FQ ? FQ : 0,
            canFill: FY(LQ, AF),
            melted: FY(LQ, xF),
            idle: QQ.looks.reduce(((QQ, FQ) => QQ + (FQ === kv ? 1 : 0)), 0)
          })
        }(kQ) : null,
        WQ = mQ && null !== iQ && ("ok" === iQ.tone || "info" === iQ.tone),
        RQ = MQ ? function(QQ) {
          const FQ = 0 !== (QQ.baf2RxFlags & bF),
            wQ = QQ.baf2RxHeat < yk;
          return 0 !== (QQ.baf2RxFlags & xF) || wQ && (FQ || !QQ.baf2RxFormed) ? null : QQ.baf2RxFormed && !FQ ? {
            key: `${ev}rxApartScram`,
            params: {}
          } : {
            key: `${ev}rxApartCooling`,
            params: {
              pct: String(yk)
            }
          }
        }(MQ) : null,
        [OQ, sQ, rQ] = null !== (FQ = null === kQ || void 0 === kQ ? void 0 : kQ.dims) && void 0 !== FQ ? FQ : [0, 0, 0],
        IQ = `${OQ}\xd7${sQ}\xd7${rQ}`;
      return (0, Wo.jsx)(SD.d, {
        close: oQ,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, Wo.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, Wo.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, Wo.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, Wo.jsx)(Hb, {
                mood: CQ
              }), (0, Wo.jsxs)("div", {
                children: [(0, Wo.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: DQ(`${db}rxTitle`)
                }), kQ && (0, Wo.jsxs)("p", {
                  className: Sq()("Baf2RxSubtitle", pQ && (null === SQ || void 0 === SQ ? void 0 : SQ.tone)),
                  children: [pQ && !cQ ? (0, Wo.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": DQ(`${db}rxChangeSize`),
                    onClick: () => {
                      if (!MQ) return;
                      const QQ = FY(MQ, bF);
                      var FQ;
                      (FQ = {
                        scram: QQ,
                        heat: MQ.baf2RxHeat
                      }).scram && FQ.heat < yk ? AQ(!0) : bQ(QQ ? `${db}rxResizeCooling` : `${db}rxResizeHot`, {
                        pct: String(yk)
                      })
                    },
                    children: [IQ, " \u270e"]
                  }) : IQ, " \xb7 ", DQ(pQ ? null !== (wQ = null === SQ || void 0 === SQ ? void 0 : SQ.label) && void 0 !== wQ ? wQ : `${db}rxState_running` : `${db}rxSubPlanShort`)]
                })]
              })]
            }), (0, Wo.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [kQ && !cQ && (0, Wo.jsx)(ub, {
                kind: "reactor",
                busy: kQ.busy.has("apart"),
                whyNot: RQ ? () => {
                  bQ(RQ.key, RQ.params)
                } : null,
                apart: () => {
                  qQ.tap("apart", (() => {
                    qQ.send("apart")
                  }))
                }
              }), (0, Wo.jsx)(iD.j, {
                onClick: oQ
              })]
            })]
          }), kQ && iQ && (0, Wo.jsxs)("div", {
            className: "Baf2RxBody",
            children: [pQ ? (0, Wo.jsx)(yb, {
              view: kQ,
              explain: bQ,
              preview: pb(kQ.status)
            }) : (0, Wo.jsx)(Bb, {
              view: kQ,
              explain: bQ
            }), (0, Wo.jsx)(dH, {
              text: WQ ? `${ib(DQ,iQ)} ${DQ(`${db}rxTapHint`)}` : ib(DQ, iQ),
              tone: iQ.tone,
              explained: vQ
            }), cQ ? (0, Wo.jsxs)(Wo.Fragment, {
              children: [(0, Wo.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: DQ(`${db}rxNotYours`)
              }), (0, Wo.jsx)(ob, {
                status: kQ.status,
                store: qQ,
                readOnly: !0
              })]
            }) : pQ && !tQ ? (0, Wo.jsxs)(Wo.Fragment, {
              children: [(0, Wo.jsx)(Kb, {
                view: kQ,
                store: qQ,
                explain: bQ,
                explainOnce: YQ
              }), void 0 !== kQ.status.baf2RxLayout && wb(kQ.status) && (0, Wo.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, Wo.jsx)(ob, {
                  status: kQ.status,
                  store: qQ,
                  readOnly: !1,
                  bare: !0
                }), (0, Wo.jsx)(qb, {
                  status: kQ.status,
                  store: qQ,
                  busy: kQ.busy.has("fill")
                })]
              })]
            }) : (0, Wo.jsxs)(Wo.Fragment, {
              children: [(0, Wo.jsx)(zb, {
                view: kQ,
                store: qQ,
                keepSize: pQ ? () => {
                  eQ(!1)
                } : void 0
              }), Sv(kQ.dims, kQ.status.baf2RxDims) && (0, Wo.jsx)(lb, {
                need: kQ.status.baf2RxNeed,
                explain: bQ
              }), (0, Wo.jsx)(ob, {
                status: kQ.status,
                store: qQ,
                readOnly: !1
              })]
            }), xQ && (0, Wo.jsx)(vb, {
              id: "baf2ResizeTitle",
              title: `${db}rxResizeConfirmTitle`,
              body: `${db}rxResizeConfirmBody`,
              yes: `${db}rxChangeSize`,
              cancel: () => {
                AQ(!1)
              },
              confirm: () => {
                AQ(!1), eQ(!0)
              }
            })]
          })]
        })
      })
    }
    class LY {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(QQ) {
        this.view = QQ;
        for (const FQ of this.listeners) FQ()
      }
      get() {
        return this.view
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
    }

    function qY(QQ) {
      let {
        commands: FQ,
        store: wQ,
        power: qQ,
        water: oQ,
        reactor: DQ,
        battery: kQ,
        collider: vQ,
        terminal: mQ,
        quests: uQ,
        close: HQ,
        leave: bQ,
        askIslands: YQ,
        showCore: xQ,
        openSocial: AQ
      } = QQ;
      const {
        userContext: tQ
      } = (0, lk.e)(), eQ = zk.featureFlags.useSocialFeatures && tQ.isLoggedIn(), [MQ, GQ] = (0, LQ.useState)((() => wQ.get()));
      (0, LQ.useEffect)((() => wQ.subscribe((() => {
        GQ(wQ.get())
      }))), [wQ]);
      const pQ = "islands" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) ? MQ.backToCore : void 0;
      return (0, Wo.jsxs)(VD.Provider, {
        value: FQ,
        children: ["core" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(xH, {
          view: MQ.core,
          close: HQ,
          askIslands: YQ
        }), "dropMap" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(MH, {
          message: MQ.dropMap,
          quests: uQ,
          close: HQ,
          leave: bQ
        }), "islands" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(zH, {
          message: MQ.islands,
          arrivedAtMs: MQ.arrivedAtMs,
          close: pQ ? () => {
            xQ(pQ)
          } : HQ,
          leave: bQ,
          openSocial: eQ ? AQ : null
        }), "quests" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(Nu, {
          store: uQ,
          close: HQ
        }), "transfer" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(Du, {
          message: MQ.transfer,
          arrivedAtMs: MQ.arrivedAtMs,
          close: HQ,
          leave: bQ
        }), "power" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(ND, {
          store: qQ,
          close: HQ
        }), "water" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(Mk, {
          store: oQ,
          close: HQ
        }), "reactor" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(wY, {
          store: DQ,
          close: HQ
        }), "battery" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(ab, {
          store: kQ,
          close: HQ
        }), "collider" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(pm, {
          store: vQ,
          close: HQ
        }), "terminal" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind) && (0, Wo.jsx)(gH, {
          store: mQ,
          close: HQ,
          send: QQ => {
            FQ.send(QQ)
          }
        })]
      })
    }
    var oY = wQ(38026);

    function DY(QQ, FQ) {
      return QQ.distSq - FQ.distSq
    }
    class kY {
      constructor() {
        this.list = [], this.pool = []
      }
      add(QQ, FQ, wQ, LQ) {
        let qQ = this.pool[this.list.length];
        qQ || (qQ = {
          x: 0,
          y: 0,
          distSq: 0,
          element: FQ,
          liftRem: wQ,
          dot: LQ
        }, this.pool.push(qQ)), qQ.x = QQ.x, qQ.y = QQ.y, qQ.distSq = QQ.distSq, qQ.element = FQ, qQ.liftRem = wQ, qQ.dot = LQ, this.list.push(qQ)
      }
    }
    class vY {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = QQ, this.sizes = new WeakMap, this.observer = new ResizeObserver((QQ => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const FQ of QQ) {
            const QQ = FQ.borderBoxSize[0];
            "dot" !== FQ.target.dataset.crowded && 0 !== QQ.inlineSize && 0 !== QQ.blockSize && this.sizes.set(FQ.target, {
              width: QQ.inlineSize,
              height: QQ.blockSize
            })
          }
        })), this.remPx = 16, this.iY = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.aG = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.aG)
      }
      observe(QQ) {
        this.observer.observe(QQ)
      }
      unobserve(QQ) {
        this.observer.unobserve(QQ)
      }
      run(QQ) {
        const FQ = QQ.list;
        FQ.sort(DY);
        const wQ = this.pxPerVw,
          LQ = this.pxPerVh;
        this.iY.length = 0, this.hud && this.iY.push(...this.hud.boxes(performance.now()));
        for (const oQ of FQ) {
          var qQ;
          const QQ = this.sizes.get(oQ.element);
          let FQ = "no";
          if (QQ && QQ.width > 0) {
            const qQ = oQ.x * wQ,
              DQ = oQ.y * LQ - oQ.liftRem * this.remPx;
            this.fit(qQ, DQ, QQ.width, QQ.height) || (FQ = oQ.dot && this.fit(qQ, DQ, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (qQ = oQ.element.dataset.crowded) && void 0 !== qQ ? qQ : "no") !== FQ && ("no" === FQ ? delete oQ.element.dataset.crowded : oQ.element.dataset.crowded = FQ), "hidden" !== FQ && (0, oY.e)(oQ.element, oQ.x, oQ.y)
        }
        FQ.length = 0
      }
      fit(QQ, FQ, wQ, LQ) {
        const qQ = QQ - wQ / 2,
          oQ = QQ + wQ / 2,
          DQ = FQ - LQ,
          kQ = this.iY;
        for (let vQ = 0; vQ < kQ.length; vQ += 4)
          if (qQ < kQ[vQ + 1] - 2 && oQ > kQ[vQ] + 2 && DQ < kQ[vQ + 3] - 2 && FQ > kQ[vQ + 2] + 2) return !1;
        return kQ.push(qQ, oQ, DQ, FQ), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.aG)
      }
    }
    const mY = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class uY {
      constructor() {
        this.cards = mY.map((QQ => document.getElementsByClassName(QQ))), this.watched = mY.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(QQ) {
        QQ - this.refreshedAt > 1e3 && (this.refreshedAt = QQ, this.stale = !0);
        for (let wQ = 0; wQ < this.cards.length; wQ++) {
          var FQ;
          const QQ = null !== (FQ = this.cards[wQ][0]) && void 0 !== FQ ? FQ : null;
          QQ !== this.watched[wQ] && this.watch(wQ, QQ)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let QQ = 0; QQ < this.watched.length; QQ++) this.watch(QQ, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const QQ = this.list;
        QQ.length = 0;
        for (const FQ of this.watched) {
          if (!FQ || FQ.closest(".NoRoom")) continue;
          const wQ = FQ.getBoundingClientRect();
          let LQ = wQ.top,
            qQ = wQ.bottom;
          if (FQ === this.watched[0] && this.hud) {
            const QQ = this.hud.getBoundingClientRect();
            LQ = Math.max(LQ, QQ.top), qQ = Math.min(qQ, QQ.bottom)
          }
          wQ.width > 0 && qQ > LQ && QQ.push(wQ.left, wQ.right, LQ, qQ)
        }
      }
      watch(QQ, FQ) {
        const wQ = this.watched[QQ];
        var LQ, qQ;
        (wQ && this.sizes.unobserve(wQ), this.watched[QQ] = FQ, this.stale = !0, FQ && this.sizes.observe(FQ), 0 === QQ) && (null === (LQ = this.hud) || void 0 === LQ || LQ.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (qQ = null === FQ || void 0 === FQ ? void 0 : FQ.closest(".Baf2QuestHud")) && void 0 !== qQ ? qQ : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const HY = [0, 0, 0],
      bY = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function YY(QQ, FQ, wQ, LQ, qQ, oQ) {
      let [DQ, kQ, vQ] = LQ;
      const mQ = (DQ + .5 - wQ[0]) ** 2 + (kQ - wQ[1]) ** 2 + (vQ + .5 - wQ[2]) ** 2;
      let uQ = null;
      mQ <= oQ ** 2 && (HY[0] = DQ + .5, HY[1] = kQ + qQ, HY[2] = vQ + .5, uQ = FQ.projectWorldPosToViewport(HY));
      const HQ = null !== uQ && uQ.x > -5 && uQ.x < 105 && uQ.y > -5 && uQ.y < 105;
      return (0, oY.g)(QQ, !HQ), HQ ? (bY.x = uQ.x, bY.y = uQ.y, bY.distSq = mQ, bY) : null
    }
    class xY {
      constructor(QQ) {
        this.onElement = QQ, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ + 4 < QQ.length; wQ += 5) {
          const LQ = [QQ[wQ], QQ[wQ + 1], QQ[wQ + 2]];
          FQ.push({
            key: LQ.join(","),
            pos: LQ,
            status: qq[QQ[wQ + 3]],
            kind: OF[QQ[wQ + 4]]
          })
        }
        this.markers = FQ, this.keys = new Set(FQ.map((QQ => {
          let {
            key: FQ
          } = QQ;
          return FQ
        }))), this.notify()
      }
      covers(QQ) {
        return this.keys.has(QQ)
      }
      get() {
        return this.markers
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      bind(QQ) {
        let FQ = this.refs.get(QQ);
        return FQ || (FQ = FQ => {
          const wQ = this.elements.get(QQ);
          var LQ, qQ;
          wQ && (null === (LQ = this.onElement) || void 0 === LQ || LQ.call(this, wQ, !1));
          FQ ? (this.elements.set(QQ, FQ), null === (qQ = this.onElement) || void 0 === qQ || qQ.call(this, FQ, !0)) : (this.elements.delete(QQ), this.refs.delete(QQ))
        }, this.refs.set(QQ, FQ)), FQ
      }
      onAfterRender(QQ, FQ, wQ) {
        for (const LQ of this.markers) {
          const qQ = this.elements.get(LQ.key);
          if (!qQ) continue;
          const oQ = YY(qQ, QQ, FQ, LQ.pos, 1.05, 24);
          oQ && wQ.add(oQ, qQ, .45, !0)
        }
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
    }
    const AY = {
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
    const tY = (0, LQ.memo)((function(QQ) {
        let {
          status: FQ,
          kind: wQ,
          bindRef: LQ
        } = QQ;
        const {
          t: qQ
        } = (0, Oq.y)(), oQ = function(QQ, FQ) {
          var wQ;
          if ("noFuel" === QQ) {
            var LQ, qQ;
            const QQ = null === (LQ = TF[FQ]) || void 0 === LQ || null === (qQ = LQ.fuels) || void 0 === qQ ? void 0 : qQ.find((QQ => Lw.includes(QQ)));
            return null !== QQ && void 0 !== QQ ? QQ : AY.noFuel
          }
          return void 0 !== (null === (wQ = TF[FQ]) || void 0 === wQ ? void 0 : wQ.cryoMade) ? "noOutlet" === QQ ? "Fluid Pipe" : "noInput" === QQ ? "Biomass" : AY[QQ] : AY[QQ]
        }(FQ, wQ);
        return (0, Wo.jsxs)("div", {
          className: Sq()("Baf2StallMarker", FQ),
          ref: LQ,
          hidden: !0,
          children: [oQ && (0, Wo.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, Wo.jsx)(rq.e, {
              itemName: oQ,
              amount: 0
            })
          }), (0, Wo.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === FQ ? "?" : "!"
          }), (0, Wo.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: qQ(`buildAFactory2Game:stallTag_${FQ}`)
          })]
        })
      })),
      eY = (0, LQ.memo)((function(QQ) {
        let {
          controller: FQ
        } = QQ;
        const [wQ, qQ] = (0, LQ.useState)((() => FQ.get()));
        return (0, LQ.useEffect)((() => (qQ(FQ.get()), FQ.subscribe((() => {
          qQ(FQ.get())
        })))), [FQ]), (0, Wo.jsx)("div", {
          className: "Baf2StallMarkers",
          children: wQ.map((QQ => (0, Wo.jsx)(tY, {
            status: QQ.status,
            kind: QQ.kind,
            bindRef: FQ.bind(QQ.key)
          }, QQ.key)))
        })
      })),
      MY = Aw.l + 150;
    class GY {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(QQ, FQ) {
        const wQ = FQ - QQ;
        null === this.offset || wQ < this.offset ? this.offset = wQ : this.offset = Math.min(wQ, this.offset + .02 * (FQ - this.sampledAt)), this.sampledAt = FQ
      }
      toLocal(QQ) {
        var FQ;
        return QQ + (null !== (FQ = this.offset) && void 0 !== FQ ? FQ : 0) + MY
      }
    }
    var pY = wQ(38032);
    const cY = 15 * Math.PI / 180,
      CY = Math.SQRT2,
      SY = [4, 2];

    function iY(QQ, FQ) {
      const wQ = [1 / 0, 1 / 0, 1 / 0],
        LQ = [-1 / 0, -1 / 0, -1 / 0];
      for (const vQ of QQ)
        for (let QQ = 0; QQ < 3; QQ++) wQ[QQ] = Math.min(wQ[QQ], vQ[QQ]), LQ[QQ] = Math.max(LQ[QQ], vQ[QQ]);
      const qQ = (wQ[0] + LQ[0]) / 2,
        oQ = (wQ[1] + LQ[1]) / 2,
        DQ = (wQ[2] + LQ[2]) / 2;
      let kQ = 0;
      for (const vQ of QQ) kQ = Math.max(kQ, Math.hypot(vQ[0] - qQ, vQ[1] - oQ, vQ[2] - DQ));
      return {
        x: qQ,
        y: oQ,
        z: DQ,
        r: kQ + FQ
      }
    }

    function WY(QQ, FQ, wQ) {
      const LQ = FQ.x - QQ.x,
        qQ = FQ.y - QQ.y,
        oQ = FQ.z - QQ.z,
        DQ = Math.sqrt(LQ * LQ + qQ * qQ + oQ * oQ);
      if (DQ <= FQ.r + 8) return 1;
      const kQ = FQ.r / DQ,
        vQ = Math.sqrt(1 - kQ * kQ),
        mQ = vQ < -QQ.cosHalf,
        uQ = (LQ * QQ.dx + qQ * QQ.dy + oQ * QQ.dz) / DQ;
      if (!mQ && uQ < QQ.cosHalf * vQ - QQ.sinHalf * kQ) return 0;
      const HQ = wQ * CY * QQ.frameMs * QQ.pxPerBlock / (DQ - FQ.r);
      for (let bQ = 0; bQ < SY.length; bQ++)
        if (HQ * SY[bQ] <= 1) return SY[bQ];
      return 1
    }

    function RY(QQ, FQ) {
      return {
        name: QQ,
        at: FQ,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const OY = [0, 0, 0];

    function sY(QQ, FQ, wQ) {
      let [, LQ, qQ, oQ, DQ, kQ] = FQ;
      const vQ = Aw.g * (null !== DQ && void 0 !== DQ ? DQ : 1),
        mQ = [];
      for (let YQ = 0; YQ < LQ.length; YQ += 3) mQ.push([LQ[YQ] + .5, LQ[YQ + 1] + .65, LQ[YQ + 2] + .5]);
      const uQ = [];
      for (let YQ = 0; YQ < mQ.length - 1; YQ++) {
        const [QQ, FQ] = [mQ[YQ], mQ[YQ + 1]];
        uQ.push([(QQ[0] + FQ[0]) / 2, (QQ[1] + FQ[1]) / 2, (QQ[2] + FQ[2]) / 2])
      }
      const HQ = mQ.slice(1, -1),
        bQ = new Uint8Array(HQ.length);
      for (const YQ of null !== kQ && void 0 !== kQ ? kQ : []) bQ[YQ >> 1] |= 1 & YQ ? 2 : 1;
      return {
        island: QQ,
        length: HQ.length,
        loop: oQ,
        cellsPerMs: vQ,
        edges: uQ,
        dv: HQ,
        bounds: iY([...uQ, ...HQ], .3),
        changed: !0,
        culled: !1,
        hide: bQ,
        items: qQ.map((QQ => {
          let [FQ, LQ] = QQ;
          return RY(FQ, (0, Aw.D)(FQ, LQ, wQ, vQ).at)
        }))
      }
    }

    function rY(QQ, FQ) {
      const {
        items: wQ
      } = QQ;
      if (0 === wQ.length) return;
      const LQ = QQ.length / QQ.cellsPerMs,
        qQ = Math.floor((FQ - wQ[0].at) / LQ) - 1;
      if (qQ > 0)
        for (const oQ of wQ) oQ.at += qQ * LQ
    }

    function IY(QQ, FQ) {
      const wQ = Math.min(Math.floor(FQ), QQ.length - 1),
        LQ = QQ.hide[wQ];
      return 0 !== LQ && 0 !== (LQ & (FQ - wQ < .5 ? 1 : 2))
    }

    function UY(QQ, FQ) {
      const wQ = Math.min(Math.floor(FQ), QQ.length - 1),
        LQ = FQ - wQ,
        qQ = LQ < .5,
        oQ = qQ ? QQ.edges[wQ] : QQ.dv[wQ],
        DQ = qQ ? QQ.dv[wQ] : QQ.edges[wQ + 1],
        kQ = qQ ? 2 * LQ : 2 * LQ - 1;
      OY[0] = oQ[0] + (DQ[0] - oQ[0]) * kQ, OY[1] = oQ[1] + (DQ[1] - oQ[1]) * kQ, OY[2] = oQ[2] + (DQ[2] - oQ[2]) * kQ
    }
    const NY = Math.PI / 4;
    class TY {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new GY, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.aG = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(QQ) {
        const FQ = performance.now();
        this.clock.sample(QQ.baf2BeltLinesAt, FQ), this.queue(QQ.baf2BeltLinesAt, QQ, 0, null, null, 0), this.applyDue(FQ)
      }
      onMoves(QQ) {
        const FQ = performance.now(),
          wQ = QQ.baf2BeltMovesAt;
        this.clock.sample(wQ, FQ);
        for (const [LQ, qQ, oQ, DQ] of QQ.baf2BeltMoveList) null === qQ ? this.queue(wQ - oQ, null, LQ, null, null, null !== DQ && void 0 !== DQ ? DQ : 0) : this.queue(wQ - oQ, null, LQ, qQ, null !== DQ && void 0 !== DQ ? DQ : null, 0);
        this.applyDue(FQ)
      }
      start(QQ) {
        this.pool = new pY.c(QQ, {
          scale: .3,
          yaw: NY
        }, 64), this.aG(), window.addEventListener("resize", this.aG)
      }
      onAfterRender(QQ) {
        const {
          pool: FQ
        } = this;
        if (!FQ) return;
        const wQ = performance.now(),
          LQ = wQ - this.lastRenderAt;
        this.lastRenderAt = wQ, LQ < 100 && (this.frameMs += .1 * (LQ - this.frameMs));
        const qQ = wQ + this.frameMs;
        this.applyDue(qQ);
        const oQ = QQ.cameraPosition,
          DQ = FQ.follow(oQ);
        this.setView(QQ, oQ);
        const kQ = this.frame++;
        for (let vQ = 0; vQ < this.shown.length; vQ++) {
          const QQ = this.shown[vQ],
            wQ = WY(this.view, QQ.bounds, QQ.cellsPerMs),
            LQ = QQ.culled && 0 !== wQ;
          if (QQ.culled = 0 === wQ, !DQ && !QQ.changed && !LQ && (0 === wQ || (kQ + vQ) % wQ !== 0)) continue;
          QQ.changed = !1, QQ.loop && (rY(QQ, qQ), (0, Aw.z)(QQ.items, QQ.length, qQ, QQ.cellsPerMs));
          let oQ = QQ.length;
          for (let kQ = 0; kQ < QQ.items.length; kQ++) {
            const wQ = QQ.items[kQ],
              LQ = (0, Aw.H)(wQ.at, oQ, qQ, QQ.cellsPerMs);
            if (oQ = LQ - Aw.s, IY(QQ, LQ)) {
              null === wQ.kind || wQ.hidden || (wQ.kind.hide(wQ.slot), wQ.hidden = !0);
              continue
            }
            let vQ = wQ.kind;
            if (null === vQ) {
              if (vQ = FQ.kindOf(wQ.name), null === vQ) continue;
              wQ.kind = vQ, wQ.slot = vQ.take(), wQ.hidden = !0, wQ.drawn = NaN
            } else if (LQ === wQ.drawn && !wQ.hidden && !DQ) continue;
            UY(QQ, LQ), vQ.write(wQ.slot, OY[0], OY[1], OY[2]), wQ.hidden = !1, wQ.drawn = LQ
          }
        }
        FQ.commit()
      }
      dispose() {
        var QQ;
        window.removeEventListener("resize", this.aG), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (QQ = this.pool) || void 0 === QQ || QQ.dispose(), this.pool = null
      }
      setView(QQ, FQ) {
        const {
          cameraDir: wQ,
          lastDir: LQ
        } = this, qQ = QQ.cameraDirection;
        for (let uQ = 0; uQ < 3; uQ++) LQ[uQ] = wQ[uQ], wQ[uQ] = qQ[uQ];
        const oQ = wQ[0] * LQ[0] + wQ[1] * LQ[1] + wQ[2] * LQ[2],
          DQ = Number.isNaN(oQ) ? 0 : Math.acos(Math.min(1, Math.max(-1, oQ))),
          {
            width: kQ,
            height: vQ
          } = this,
          mQ = QQ.tanHalfFovX;
        ! function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
          let kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          QQ.x = FQ[0], QQ.y = FQ[1], QQ.z = FQ[2], QQ.dx = wQ[0], QQ.dy = wQ[1], QQ.dz = wQ[2];
          const vQ = Math.min(Math.PI, Math.atan(Math.sqrt(LQ * LQ + qQ * qQ)) + cY + kQ);
          QQ.cosHalf = Math.cos(vQ), QQ.sinHalf = Math.sin(vQ), QQ.pxPerBlock = oQ / (2 * qQ), QQ.frameMs = DQ
        }(this.view, FQ, wQ, mQ, mQ * vQ / kQ, vQ * window.devicePixelRatio, this.frameMs, DQ)
      }
      queue(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = Math.max(this.clock.toLocal(QQ), this.lastPendingAt);
        this.lastPendingAt = DQ, this.pending.push({
          at: DQ,
          lines: FQ,
          line: wQ,
          name: LQ,
          pos: qQ,
          idx: oQ
        })
      }
      applyDue(QQ) {
        const {
          pending: FQ
        } = this;
        for (; this.pendingHead < FQ.length && FQ[this.pendingHead].at <= QQ;) {
          const QQ = FQ[this.pendingHead++];
          if (QQ.lines) this.applyLines(QQ.lines, QQ.at), QQ.lines = null;
          else {
            const FQ = this.lines.get(QQ.line);
            FQ && this.applyMove(FQ, QQ, QQ.at)
          }
        }
        this.pendingHead === FQ.length ? (FQ.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > FQ.length && (FQ.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(QQ, FQ) {
        this.clearIsland(QQ.baf2BeltIsland);
        for (const wQ of QQ.baf2BeltLineList) this.lines.set(wQ[0], sY(QQ.baf2BeltIsland, wQ, FQ));
        this.shown = [...this.lines.values()]
      }
      applyMove(QQ, FQ, wQ) {
        let {
          name: LQ,
          pos: qQ,
          idx: oQ
        } = FQ;
        QQ.changed = !0, QQ.loop && (rY(QQ, wQ), (0, Aw.z)(QQ.items, QQ.length, wQ, QQ.cellsPerMs)), null !== LQ && null !== qQ ? (0, Aw.B)(QQ.items, QQ.length, RY(LQ, wQ), qQ, wQ, QQ.cellsPerMs) : null !== LQ ? QQ.items.push(RY(LQ, wQ)) : QQ.items.length > oQ && this.release((0, Aw.L)(QQ.items, QQ.length, wQ, QQ.cellsPerMs, oQ))
      }
      clearIsland(QQ) {
        for (const [FQ, wQ] of this.lines)
          if (wQ.island === QQ) {
            for (const QQ of wQ.items) this.release(QQ);
            this.lines.delete(FQ)
          }
      }
      release(QQ) {
        null !== QQ.kind && (QQ.kind.release(QQ.slot), QQ.kind = null, QQ.slot = -1, QQ.hidden = !0, QQ.drawn = NaN)
      }
    }
    var KY = wQ(36228),
      zY = wQ(38044);

    function lY(QQ) {
      let {
        depth: FQ,
        store: wQ,
        t: qQ
      } = QQ;
      const oQ = function(QQ) {
        const [FQ, wQ] = (0, LQ.useState)(QQ.lastPlayerY());
        return (0, ku.g)(lq, wQ), (0, LQ.useEffect)((() => {
          wQ(QQ.lastPlayerY())
        }), [QQ]), FQ
      }(wQ);
      if (null === oQ) return null;
      const [DQ, kQ] = FQ, vQ = oQ > DQ ? DQ : null !== kQ && oQ < kQ ? kQ : null, mQ = {
        y: po(oQ),
        target: null === vQ ? "" : po(vQ)
      };
      return (0, Wo.jsx)("span", {
        className: Sq()("Baf2QuestDepth", {
          Reached: null === vQ
        }),
        children: qQ(`${Hu}${null===vQ?"questDepthReached":"questDepth"}`, mQ)
      })
    }

    function jY(QQ) {
      let {
        also: FQ,
        view: wQ,
        t: LQ
      } = QQ;
      return (0, Wo.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, Wo.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, Wo.jsx)("strong", {
            children: LQ(`${Hu}questAlsoDownHere`)
          }), (0, Wo.jsx)("span", {
            className: "Baf2QuestChips",
            children: FQ.map((QQ => {
              let [FQ, qQ, oQ, DQ] = QQ;
              return (0, Wo.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": LQ(`${Hu}questAlsoItem`, {
                  item: Yu(LQ, wQ.itemNames[FQ], FQ),
                  have: String(qQ),
                  need: String(oQ)
                }),
                children: [(0, Wo.jsx)(tu, {
                  item: FQ
                }), (0, Wo.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${qQ}/${oQ}`
                }), null !== DQ && (0, Wo.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: LQ(`${Hu}questAlsoDepth`, {
                    y: po(DQ)
                  })
                })]
              }, FQ)
            }))
          })]
        })]
      })
    }
    var aY = wQ(3268);

    function XY(QQ) {
      let {
        expanded: FQ,
        inventoryOpen: wQ,
        children: qQ
      } = QQ;
      const oQ = (0, LQ.useRef)(null);
      return (0, LQ.useEffect)((() => {
        const QQ = oQ.current,
          FQ = null === QQ || void 0 === QQ ? void 0 : QQ.closest(".RightElements"),
          LQ = null === QQ || void 0 === QQ ? void 0 : QQ.firstElementChild;
        if (!QQ || !FQ || !LQ) return;
        return (0, zY.e)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [FQ, LQ], (() => {
          const qQ = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === qQ.length) return;
          const oQ = Math.max(...qQ.map((QQ => QQ.getBoundingClientRect().bottom))),
            DQ = FQ.getBoundingClientRect(),
            kQ = wQ ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (kQ) {
            const FQ = parseFloat(getComputedStyle(LQ).marginLeft) + parseFloat(getComputedStyle(LQ).marginRight),
              wQ = DQ.right - kQ.getBoundingClientRect().right - 8 - FQ;
            QQ.style.setProperty("--baf2-quest-room", `${wQ}px`), QQ.classList.toggle("NoRoom", wQ < 150)
          } else QQ.style.removeProperty("--baf2-quest-room"), QQ.classList.remove("NoRoom");
          const vQ = oQ - DQ.top + 8,
            mQ = function(QQ, FQ, wQ) {
              const LQ = FQ.getBoundingClientRect(),
                qQ = QQ.getBoundingClientRect(),
                oQ = (0, aY.f)(qQ.left, qQ.right, LQ.top + wQ);
              if (null !== oQ && oQ < LQ.bottom) return oQ - LQ.top;
              return LQ.height - (parseFloat(getComputedStyle(FQ).paddingBottom) || 0)
            }(QQ, FQ, vQ) - 8,
            uQ = window.innerHeight / 2 - DQ.top,
            {
              top: HQ,
              maxHeight: bQ
            } = function(QQ, FQ, wQ, LQ, qQ) {
              const oQ = Math.min(wQ, Math.max(0, FQ - QQ)),
                DQ = qQ ? QQ : Math.max(QQ, Math.min(LQ - oQ / 2, FQ - oQ));
              return {
                top: DQ,
                maxHeight: Math.max(0, FQ - DQ)
              }
            }(vQ, mQ, function(QQ) {
              const FQ = QQ.firstElementChild,
                wQ = FQ ? FQ.scrollHeight - FQ.clientHeight : 0;
              return QQ.getBoundingClientRect().height + Math.max(0, wQ)
            }(LQ), uQ, So());
          QQ.style.top = `${HQ}px`, QQ.style.maxHeight = `${bQ}px`
        }))
      }), [wQ]), (0, Wo.jsx)("div", {
        ref: oQ,
        className: Sq()("Baf2QuestHud", {
          Expanded: FQ
        }),
        children: qQ
      })
    }

    function fY(QQ) {
      let {
        amount: FQ,
        t: wQ
      } = QQ;
      return (0, Wo.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, Wo.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, Wo.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: wQ(`${Hu}questStepsDone`, {
            amount: String(FQ)
          })
        })]
      })
    }

    function VY(QQ) {
      let {
        pulse: FQ
      } = QQ;
      return 0 === FQ ? null : (0, Wo.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, FQ)
    }

    function hY(QQ) {
      var FQ;
      let {
        store: wQ
      } = QQ;
      const qQ = (0, ku.i)(zq, wQ.get()),
        [oQ, DQ] = (0, LQ.useState)(!1),
        {
          t: kQ
        } = (0, Oq.y)(),
        vQ = function() {
          const [QQ, FQ] = (0, LQ.useState)(So);
          return (0, LQ.useEffect)((() => (FQ(So()), io(FQ))), []), QQ
        }(),
        {
          openInGameMenuName: mQ,
          openEverythingMenuName: uQ
        } = (0, pq.l)(["openInGameMenuName", "openEverythingMenuName"]),
        HQ = "inventory" === mQ && null === uQ,
        bQ = null !== mQ && !HQ || null !== uQ;
      if (! function(QQ) {
          return null !== QQ.name || null !== QQ.side
        }(qQ) || bQ || "off" === qQ.tutorial) return null;
      const YQ = hq(qQ.rows),
        xQ = YQ.filter((QQ => QQ.done)).length,
        AQ = function(QQ, FQ) {
          const wQ = nq(QQ);
          let LQ = 0;
          return QQ.filter(((QQ, qQ) => !!QQ.justFinished || !(QQ.done || qQ < wQ || LQ > FQ) && (LQ++, !0)))
        }(qQ.rows, vQ ? 0 : 2),
        tQ = vQ ? AQ : function(QQ, FQ) {
          const wQ = FQ.filter((QQ => !QQ.justFinished));
          if (wQ.length < 2) return [...FQ];
          const LQ = QQ.indexOf(wQ[0]),
            qQ = QQ.indexOf(wQ[wQ.length - 1]),
            oQ = new Set(hq(QQ));
          return QQ.filter(((QQ, wQ) => FQ.includes(QQ) || QQ.done && oQ.has(QQ) && wQ > LQ && wQ < qQ))
        }(qQ.rows, AQ),
        eQ = oQ ? qQ.rows : tQ,
        MQ = oQ || vQ ? [] : function(QQ, FQ) {
          const wQ = new Array(FQ.length + 1).fill(0),
            LQ = new Set(hq(QQ));
          let qQ = 0;
          for (const oQ of QQ) qQ < FQ.length && oQ === FQ[qQ] ? qQ++ : oQ.done && LQ.has(oQ) && wQ[qQ]++;
          return wQ
        }(qQ.rows, tQ),
        GQ = oQ || tQ.length < qQ.rows.length || null !== qQ.reward,
        pQ = Vq(qQ),
        cQ = pQ ? kQ(`${Hu}questLineComplete`) : qQ.tier ? Gu(kQ, qQ.tier) : kQ(`${Hu}currentQuest`),
        CQ = function(QQ) {
          var FQ, wQ;
          if (Vq(QQ)) return null;
          const LQ = null === (FQ = QQ.chapters) || void 0 === FQ ? void 0 : FQ.find((FQ => {
            let [wQ] = FQ;
            return wQ === QQ.tier
          }));
          if (!LQ) return null;
          const qQ = LQ[1].filter((QQ => !QQ[4]));
          if (0 === qQ.length) return null;
          const oQ = null === (wQ = QQ.name) || void 0 === wQ ? void 0 : wQ[0],
            DQ = QQ => qQ.findIndex((FQ => FQ[0] === oQ && (!QQ || !FQ[3]))),
            kQ = DQ(!0),
            vQ = kQ >= 0 ? kQ : DQ(!1);
          if (vQ >= 0) return [vQ + 1, qQ.length];
          const mQ = qQ.filter((QQ => QQ[3])).length;
          return [Math.min(mQ + 1, qQ.length), qQ.length]
        }(qQ);
      return (0, Wo.jsx)(KY.d, {
        placement: "topRight",
        children: (0, Wo.jsx)(XY, {
          expanded: oQ,
          inventoryOpen: HQ,
          children: (0, Wo.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: bu,
            children: [null !== qQ.name && (0, Wo.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, Wo.jsx)(VY, {
                pulse: qQ.pulse
              }), (0, Wo.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, Wo.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [cQ, CQ && (0, Wo.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": kQ(`${Hu}questPlaceLabel`, {
                      n: String(CQ[0]),
                      total: String(CQ[1])
                    }),
                    children: kQ(`${Hu}questPlace`, {
                      n: String(CQ[0]),
                      total: String(CQ[1])
                    })
                  }), qQ.tier && qQ.core && !pQ && (0, Wo.jsx)(pu, {
                    core: qQ.core,
                    t: kQ
                  })]
                })
              }), (0, Wo.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: kQ(`${Hu}${qQ.name[0]}`, xu(qQ.name[1]))
              }), (YQ.length > 1 || GQ) && (0, Wo.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [YQ.length > 1 && (0, Wo.jsx)(cu, {
                  rows: YQ,
                  t: kQ
                }), GQ && (0, Wo.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": oQ,
                  onClick: () => {
                    DQ(!oQ)
                  },
                  children: [(0, Wo.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: kQ(`${Hu}questStepsToggle`, {
                      done: String(xQ),
                      total: String(YQ.length)
                    })
                  }), (0, Wo.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: oQ ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, Wo.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [eQ.map(((QQ, FQ) => {
                  var oQ;
                  const DQ = QQ.current && qQ.depth;
                  return (0, Wo.jsxs)(LQ.Fragment, {
                    children: [(null !== (oQ = MQ[FQ]) && void 0 !== oQ ? oQ : 0) > 0 && (0, Wo.jsx)(fY, {
                      amount: MQ[FQ],
                      t: kQ
                    }), (0, Wo.jsx)(Cu, {
                      row: QQ,
                      view: qQ,
                      t: kQ,
                      extra: DQ && (0, Wo.jsx)(lY, {
                        depth: DQ,
                        store: wQ,
                        t: kQ
                      })
                    })]
                  }, QQ.id)
                })), (null !== (FQ = MQ[eQ.length]) && void 0 !== FQ ? FQ : 0) > 0 && (0, Wo.jsx)(fY, {
                  amount: MQ[eQ.length],
                  t: kQ
                }), qQ.also.length > 0 && (0, Wo.jsx)(jY, {
                  also: qQ.also,
                  view: qQ,
                  t: kQ
                })]
              }), oQ && qQ.reward && (0, Wo.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [kQ(`${Hu}questReward`), (0, Wo.jsx)(tu, {
                  item: qQ.reward
                }), Yu(kQ, qQ.itemNames[qQ.reward], qQ.reward)]
              })]
            }), qQ.side && (0, Wo.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [Xq(qQ, Date.now()) && (0, Wo.jsx)(VY, {
                pulse: qQ.sideCameUpAt
              }), (0, Wo.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: kQ(`${Hu}questSide`)
              }), (0, Wo.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: kQ(`${Hu}${qQ.side.name[0]}`, xu(qQ.side.name[1]))
              }), (0, Wo.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, Wo.jsx)(Cu, {
                  row: qQ.side.row,
                  view: qQ,
                  t: kQ
                })
              })]
            })]
          })
        })
      })
    }
    const JY = "baf2ToastView";
    class EY {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = QQ, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: QQ,
          holdMs: FQ
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const QQ = this.dropCovered();
          QQ && this.show(QQ.message, QQ.holdMs)
        }), 250));
        const wQ = this.dropCovered();
        null !== wQ && (wQ.holdMs > 0 || "baf2ToastCelebrate" === wQ.message.baf2ToastStyle) && "baf2ToastCelebrate" !== QQ.baf2ToastStyle && this.show(wQ.message, wQ.holdMs);
        const LQ = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== QQ.baf2ToastStyle && LQ > 0) return this.pending = {
          message: QQ,
          holdMs: FQ
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const QQ = this.pending;
          this.pending = null, QQ && this.present(QQ.message, QQ.holdMs)
        }), LQ));
        this.present(QQ, FQ)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(QQ, FQ) {
        this.clearTimers(), this.pending = null;
        const wQ = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: QQ.baf2ToastText,
          style: QQ.baf2ToastStyle,
          swapped: wQ,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === QQ.baf2ToastStyle ? 1500 : FQ), this.GA();
        const LQ = Math.min(8e3, Math.max(1e3, QQ.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), LQ)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.GA(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.GA()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const QQ = this.covering;
        return this.covering = null, QQ
      }
      GA() {
        Tq.l.GA(JY, this.view, !0)
      }
    }
    var nY = wQ(71);
    const gY = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function PY(QQ) {
      let {
        store: FQ
      } = QQ;
      const wQ = (0, ku.i)(JY, FQ.get()),
        {
          openInGameMenuName: LQ,
          openEverythingMenuName: qQ
        } = (0, pq.l)(["openInGameMenuName", "openEverythingMenuName"]),
        oQ = wQ && (0, Wo.jsxs)("div", {
          className: Sq()("Baf2Toast", gY[wQ.style], {
            Swapped: wQ.swapped,
            Leaving: wQ.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === wQ.style && (0, Wo.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, Wo.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, Wo.jsx)(Iq.e, {
              text: wQ.text
            })
          })]
        }, wQ.id);
      return null !== LQ && null === qQ ? (0, nY.createPortal)((0, Wo.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: oQ
      }), document.body) : (0, Wo.jsx)(KY.d, {
        children: oQ
      })
    }
    const ZY = "baf2AreaView";
    class yY {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.ym = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.ym = null
      }
      arrive(QQ, FQ) {
        FQ && function(QQ) {
          return "home" === QQ.baf2AreaPlace && void 0 !== QQ.baf2AreaNameText
        }(QQ) ? this.ym = QQ : this.show(QQ)
      }
      release() {
        const QQ = this.ym;
        null !== QQ && this.show(QQ)
      }
      show(QQ) {
        this.clearTimer(), this.ym = null;
        const FQ = void 0 === QQ.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: QQ,
          ms: FQ
        }, this.GA(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.GA()
        }), FQ)
      }
      dispose() {
        this.clearTimer(), this.ym = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      GA() {
        Tq.l.GA(ZY, this.view, !0)
      }
    }

    function BY(QQ) {
      var FQ;
      let {
        store: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, Oq.y)(), qQ = (0, ku.i)(ZY, wQ.get());
      if (!qQ) return null;
      const {
        area: oQ
      } = qQ, DQ = oQ.baf2AreaResetMinutes;
      return (0, Wo.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": oQ.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${qQ.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Wo.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), oQ.baf2AreaHeading && (0, Wo.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: LQ(oQ.baf2AreaHeading)
        }), (0, Wo.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (FQ = oQ.baf2AreaNameText) && void 0 !== FQ ? FQ : LQ(oQ.baf2AreaName)
        }), oQ.baf2AreaNote && (0, Wo.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: LQ(oQ.baf2AreaNote)
        }), void 0 !== DQ && (0, Wo.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: LQ("buildAFactory2Game:areaWildsReset", {
            time: co(LQ, 60 * DQ)
          })
        })]
      }, qQ.id)
    }
    const dY = "baf2GearGauge";
    class Qx {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      mp(QQ) {
        var FQ;
        if (this.clearLinger(), null === QQ.gearPowerKind) return void this.set(null);
        const wQ = "jetpack" === QQ.gearPowerKind && (LQ = QQ.gearChargeState, qQ = QQ.gearCharge, "flying" === LQ || "charging" === LQ || "outOfCharge" === LQ || "ceiling" === LQ || "offPlot" === LQ || "noPower" === LQ && qQ <= 0);
        var LQ, qQ;
        const oQ = !0 === (null === (FQ = this.view) || void 0 === FQ ? void 0 : FQ.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          DQ = wQ || "jetpack" === QQ.gearPowerKind && oQ;
        this.set({
          gauge: QQ,
          jetShown: DQ
        }), DQ && !wQ && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(QQ) {
        this.view = QQ, Tq.l.GA(dY, QQ, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const Fx = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function wx(QQ) {
      let {
        store: FQ
      } = QQ;
      const wQ = (0, ku.i)(dY, FQ.get());
      return wQ ? "jetpack" === wQ.gauge.gearPowerKind ? (0, Wo.jsx)(Lx, {
        view: wQ
      }) : (0, Wo.jsx)(qx, {
        gauge: wQ.gauge
      }) : null
    }

    function Lx(QQ) {
      let {
        view: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), {
        gauge: LQ
      } = FQ, qQ = LQ.gearChargeMax > 0 ? Math.max(0, Math.min(1, LQ.gearCharge / LQ.gearChargeMax)) : 0, oQ = Fx[LQ.gearChargeState], DQ = oQ ? wQ(oQ) : null;
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2JetArc", {
          Shown: FQ.jetShown,
          Low: qQ < .2,
          Warm: qQ >= .2 && qQ < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - qQ)
        },
        "aria-hidden": !FQ.jetShown,
        children: [(0, Wo.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, Wo.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: ox,
            pathLength: 100
          }), (0, Wo.jsx)("path", {
            className: "Baf2JetArcFill",
            d: ox,
            pathLength: 100
          })]
        }), (0, Wo.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * qQ), "%"]
        }), DQ && (0, Wo.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: DQ
        })]
      })
    }

    function qx(QQ) {
      let {
        gauge: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), LQ = function(QQ, FQ) {
        switch (FQ.gearPowerKind) {
          case "skyPack":
            return QQ("buildAFactory2Game:gearSkyPack", {
              charge: FQ.gearCharge,
              max: FQ.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return QQ("buildAFactory2Game:gearIslandDraw", {
              power: yQ(FQ.gearIslandPower),
              cost: yQ(FQ.gearCostPerUse)
            });
          case "barrier":
            return QQ("buildAFactory2Game:gearBarrier", {
              shield: Math.round(FQ.gearCharge),
              max: FQ.gearChargeMax,
              power: yQ(FQ.gearIslandPower)
            });
          default:
            return null
        }
      }(wQ, FQ);
      return null === LQ ? null : (0, Wo.jsx)(KY.d, {
        children: (0, Wo.jsx)("div", {
          className: Sq()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === FQ.gearChargeState || "outOfCharge" === FQ.gearChargeState
          }),
          role: "status",
          children: LQ
        })
      })
    }
    const ox = (() => {
      const QQ = QQ => {
        const FQ = QQ * Math.PI / 180;
        return `${(40*Math.cos(FQ)).toFixed(2)} ${(40*Math.sin(FQ)).toFixed(2)}`
      };
      return `M ${QQ(160)} A 40 40 0 1 1 ${QQ(380)}`
    })();
    class Dx {
      constructor(QQ) {
        this.onElement = QQ, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      mp(QQ) {
        let FQ = QQ.baf2LabelsReset || QQ.baf2LabelsIsland !== this.island;
        FQ && (this.labels.clear(), this.island = QQ.baf2LabelsIsland);
        for (const [wQ, LQ, qQ, oQ, DQ] of QQ.baf2LabelsList) {
          const QQ = `${wQ},${LQ},${qQ}`,
            kQ = this.labels.get(QQ);
          null === oQ ? FQ = this.labels.delete(QQ) || FQ : kQ && kQ.item === oQ && (kQ.count === DQ || kQ.count >= 0 && DQ >= 0) ? kQ.count !== DQ && (kQ.count = DQ, this.writeCount(QQ, DQ)) : (this.labels.set(QQ, {
            key: QQ,
            pos: [wQ, LQ, qQ],
            item: oQ,
            count: DQ
          }), this.writeCount(QQ, DQ), FQ = !0)
        }
        if (this.changes++, FQ) {
          this.snapshot = [...this.labels.values()];
          for (const QQ of this.listeners) QQ()
        }
      }
      bindCount(QQ) {
        const FQ = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${QQ}`;
        let wQ = this.countRefs.get(FQ);
        return wQ || (wQ = wQ => {
          var LQ, qQ;
          wQ ? (this.countElements.set(FQ, wQ), this.writeCount(QQ, null !== (LQ = null === (qQ = this.labels.get(QQ)) || void 0 === qQ ? void 0 : qQ.count) && void 0 !== LQ ? LQ : -1)) : (this.countElements.delete(FQ), this.countRefs.delete(FQ))
        }, this.countRefs.set(FQ, wQ)), wQ
      }
      setCountWords(QQ) {
        this.countWords = QQ;
        for (const [FQ, wQ] of this.labels) this.writePart(`words|${FQ}`, QQ(wQ.count), wQ.count)
      }
      writeCount(QQ, FQ) {
        this.writePart(`bare|${QQ}`, Go(FQ), FQ), this.countElements.has(`words|${QQ}`) && this.writePart(`words|${QQ}`, this.countWords(FQ), FQ)
      }
      writePart(QQ, FQ, wQ) {
        const LQ = this.countElements.get(QQ);
        if (!LQ || wQ < 0) return;
        const qQ = LQ.firstChild;
        qQ && 3 === qQ.nodeType && !qQ.nextSibling ? qQ.nodeValue !== FQ && (qQ.nodeValue = FQ) : LQ.textContent !== FQ && (LQ.textContent = FQ)
      }
      list() {
        return this.snapshot
      }
      at(QQ) {
        return this.labels.get(`${QQ[0]},${QQ[1]},${QQ[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      bind(QQ) {
        let FQ = this.refs.get(QQ);
        return FQ || (FQ = FQ => {
          const wQ = this.elements.get(QQ);
          var LQ, qQ;
          wQ && (null === (LQ = this.onElement) || void 0 === LQ || LQ.call(this, wQ, !1));
          FQ ? (this.elements.set(QQ, FQ), null === (qQ = this.onElement) || void 0 === qQ || qQ.call(this, FQ, !0)) : (this.elements.delete(QQ), this.refs.delete(QQ))
        }, this.refs.set(QQ, FQ)), FQ
      }
      onAfterRender(QQ, FQ, wQ, LQ) {
        for (const qQ of this.snapshot) {
          const oQ = this.elements.get(qQ.key);
          if (!oQ) continue;
          if (LQ(qQ.key)) {
            (0, oY.g)(oQ, !0);
            continue
          }
          const DQ = YY(oQ, QQ, FQ, qQ.pos, 1.1, 24);
          DQ && wQ.add(DQ, oQ, 0, !1)
        }
      }
    }
    const kx = (0, LQ.memo)((function(QQ) {
        let {
          item: FQ
        } = QQ;
        return (0, Wo.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, Wo.jsx)(rq.e, {
            itemName: FQ,
            amount: 0
          })
        })
      })),
      vx = (0, LQ.memo)((function(QQ) {
        let {
          label: FQ,
          bindRef: wQ,
          countRef: LQ,
          wordsRef: qQ
        } = QQ;
        return (0, Wo.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: wQ,
          hidden: !0,
          children: [(0, Wo.jsx)(kx, {
            item: FQ.item
          }), FQ.count >= 0 && (0, Wo.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, Wo.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: qQ
            }), (0, Wo.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: LQ
            })]
          })]
        })
      })),
      mx = (0, LQ.memo)((function(QQ) {
        let {
          store: FQ
        } = QQ;
        const {
          t: wQ
        } = (0, Oq.y)(), [qQ, oQ] = (0, LQ.useState)((() => FQ.list()));
        return (0, LQ.useEffect)((() => (oQ(FQ.list()), FQ.subscribe((() => {
          oQ(FQ.list())
        })))), [FQ]), (0, LQ.useEffect)((() => {
          FQ.setCountWords((QQ => wQ("buildAFactory2Game:labelSiloCount", {
            count: Go(QQ)
          })))
        }), [FQ, wQ]), (0, Wo.jsx)("div", {
          className: "Baf2IslandLabels",
          children: qQ.map((QQ => -2 === QQ.count ? null : (0, Wo.jsx)(vx, {
            label: QQ,
            bindRef: FQ.bind(QQ.key),
            countRef: FQ.bindCount(QQ.key),
            wordsRef: FQ.bindCount(QQ.key, "words")
          }, QQ.key)))
        })
      })),
      ux = {
        read: () => !0,
        write: () => {}
      };

    function Hx(QQ) {
      return `${QQ[0]},${QQ[1]},${QQ[2]}`
    }

    function bx(QQ) {
      let [FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ] = QQ;
      const YQ = void 0 === HQ || void 0 === bQ ? function(QQ) {
        return [Math.floor((QQ - 1) / 2), 0]
      }(oQ) : [HQ, bQ];
      return {
        kind: 0 === vQ ? "reactor" : "battery",
        box: hw([FQ, wQ, LQ], qQ, oQ, DQ, kQ, YQ),
        formed: 1 === mQ,
        level: uQ
      }
    }
    class Yx {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ux;
        this.guideSetting = QQ, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = QQ.read()
      }
      mp(QQ) {
        var FQ;
        const wQ = new Map;
        for (const LQ of QQ.baf2RxPlanList) {
          const QQ = bx(LQ);
          wQ.set(Hx(QQ.box.ctrl), QQ)
        }
        this.plans = wQ, this.layouts = new Map((null !== (FQ = QQ.baf2RxLayouts) && void 0 !== FQ ? FQ : []).map((QQ => {
          let [FQ, wQ, LQ, qQ] = QQ;
          return [Hx([FQ, wQ, LQ]), qQ]
        }))), this.predicted.clear(), QQ.baf2RxFormedAt && (this.formed = {
          ctrl: QQ.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const LQ of [...this.startersOff]) {
          const QQ = wQ.get(LQ);
          QQ && !QQ.formed || this.startersOff.delete(LQ)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((QQ => this.planByKey(QQ)))
      }
      planAt(QQ) {
        return this.planByKey(Hx(QQ))
      }
      predictSize(QQ, FQ) {
        this.predicted.set(Hx(QQ), FQ), this.changed()
      }
      unpredict(QQ) {
        this.predicted.delete(Hx(QQ)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(QQ) {
        var FQ;
        const wQ = Hx(QQ);
        return this.predicted.has(wQ) ? null : null !== (FQ = this.layouts.get(wQ)) && void 0 !== FQ ? FQ : null
      }
      showsStarter(QQ) {
        return !this.startersOff.has(Hx(QQ))
      }
      setStarter(QQ, FQ) {
        const wQ = Hx(QQ);
        FQ ? this.startersOff.delete(wQ) : this.startersOff.add(wQ), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(QQ) {
        this.guide = QQ, this.guideSetting.write(QQ), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(QQ) {
        const FQ = this.plans.get(QQ);
        if (!FQ) return null;
        const wQ = this.predicted.get(QQ);
        return wQ ? {
          ...FQ,
          box: Ew(FQ.box, FQ.kind, wQ[0], wQ[1], wQ[2])
        } : FQ
      }
      changed() {
        this.version++;
        for (const QQ of this.listeners) QQ()
      }
    }
    var xx = wQ(201);
    const Ax = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function tx(QQ, FQ, wQ, LQ) {
      const qQ = QQ.length / 3;
      for (let oQ = 0; oQ < Ax.length / 3; oQ++) QQ.push(Ax[3 * oQ] * LQ[0] / 2 + wQ[0], Ax[3 * oQ + 1] * LQ[1] / 2 + wQ[1], Ax[3 * oQ + 2] * LQ[2] / 2 + wQ[2]);
      for (let oQ = qQ; oQ < qQ + 24; oQ += 4) FQ.push(oQ, oQ + 1, oQ + 2, oQ, oQ + 2, oQ + 3)
    }

    function ex(QQ, FQ, wQ) {
      const LQ = FQ[0][0],
        qQ = [],
        oQ = [];
      for (const [DQ, kQ] of FQ) tx(qQ, oQ, [DQ[0] - LQ[0], DQ[1] - LQ[1], DQ[2] - LQ[2]], kQ);
      return QQ.createGameMesh({
        positions: qQ,
        indices: oQ
      }, wQ, LQ)
    }

    function Mx(QQ, FQ) {
      const wQ = QQ.w - 2,
        LQ = QQ.d - 2;
      return 1 === function(QQ, FQ, wQ, LQ) {
        const [qQ, oQ, DQ] = QQ;
        if (Number(qQ <= 2) + Number(oQ <= 2) + Number(DQ <= 2) >= 2) return function(QQ, FQ, wQ) {
          return (QQ + FQ + wQ) % 2 === 0 ? 1 : 3
        }(FQ, wQ, LQ);
        const [kQ, vQ] = qQ >= oQ && qQ >= DQ ? [wQ, LQ] : oQ >= DQ ? [FQ, LQ] : [FQ, wQ];
        return kQ % 2 === 0 && vQ % 2 === 0 ? 1 : 3
      }([wQ, QQ.h - 2, LQ], FQ % wQ, Math.floor(FQ / (wQ * LQ)), Math.floor(FQ / wQ) % LQ) ? "rod" : "channel"
    }

    function Gx(QQ, FQ, wQ) {
      if ("reactor" !== QQ.kind || QQ.formed || !FQ) return !1;
      const LQ = Pw(QQ.box);
      for (let qQ = 0; qQ < LQ; qQ++) {
        const QQ = wQ(qQ);
        if (null !== QQ && Iw(QQ)) return !1
      }
      return !0
    }

    function px(QQ, FQ, wQ, LQ, qQ) {
      var oQ;
      let DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const kQ = FL(QQ.box, FQ),
        vQ = oL(QQ.kind, kQ, wQ);
      if ("wrong" === vQ || "blocked" === vQ) return "wrong";
      if (!qQ) return null;
      if ("inside" === kQ && "reactor" === QQ.kind && "Air" === Uw(wQ)) {
        if (null !== DQ) {
          var mQ;
          const wQ = Qb[Fb(DQ, wL(QQ.box, FQ))];
          return wQ && null !== (mQ = sv(wQ)) && void 0 !== mQ ? mQ : null
        }
        if (LQ) return Mx(QQ.box, wL(QQ.box, FQ))
      }
      if ("missing" !== vQ) return null;
      const uQ = DL(QQ.kind, kQ);
      return null === uQ ? null : null !== (oQ = sv(uQ)) && void 0 !== oQ ? oQ : null
    }
    const cx = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Cx(QQ, FQ, wQ) {
      const LQ = wQ => {
        const LQ = FQ(dw(QQ.box, wQ));
        return null !== LQ && function(QQ, FQ) {
          return "reactor" !== QQ.kind || FQ !== yw(QQ.box) && "inside" !== FL(QQ.box, FQ)
        }(QQ, wQ) && "ok" !== oL(QQ.kind, FL(QQ.box, wQ), LQ)
      };
      if (wQ) {
        const oQ = QL(QQ.box, [Math.floor(wQ[0]), Math.floor(wQ[1]), Math.floor(wQ[2])]);
        if (oQ >= 0 && (LQ(oQ) || (qQ = oQ, "reactor" === QQ.kind && "inside" === FL(QQ.box, qQ) && "Air" === FQ(dw(QQ.box, qQ))))) return oQ
      }
      var qQ;
      const oQ = Pw(QQ.box);
      for (let DQ = 0; DQ < oQ; DQ++)
        if (LQ(DQ)) return DQ;
      return -1
    }

    function Sx(QQ, FQ) {
      return Math.floor(FQ / (QQ.w * QQ.d))
    }

    function ix(QQ, FQ, wQ) {
      return wQ >= 0 && Sx(QQ, FQ) > Sx(QQ, wQ)
    }

    function Wx(QQ, FQ) {
      return FQ >= 0 && QQ.h >= 3 && Sx(QQ, FQ) === QQ.h - 1
    }

    function Rx(QQ) {
      const FQ = Uw(QQ);
      return FQ === Mw || "Collider" === FQ || "Laser" === FQ || FQ.startsWith("_Collider ")
    }

    function Ox(QQ, FQ, wQ, LQ) {
      if (LQ(QQ)) return null;
      if (!cx.every((FQ => {
          let [LQ, qQ, oQ] = FQ;
          const DQ = wQ([QQ[0] + LQ, QQ[1] + qQ, QQ[2] + oQ]);
          return null !== DQ && !aw("reactor", DQ) && "reactor" !== Nw(DQ)
        }))) return null;
      const qQ = Xw("reactor").min,
        oQ = hw([QQ[0], QQ[1], QQ[2]], function(QQ, FQ) {
          const wQ = FQ[0] - (QQ[0] + .5),
            LQ = FQ[2] - (QQ[2] + .5);
          return Math.abs(wQ) >= Math.abs(LQ) ? wQ >= 0 ? 2 : 4 : LQ >= 0 ? 1 : 3
        }(QQ, FQ), qQ, qQ, qQ, Jw("reactor", qQ)),
        DQ = yw(oQ);
      let kQ = !0;
      for (let vQ = 0; vQ < Pw(oQ) && kQ; vQ++) {
        if (vQ === DQ) continue;
        const QQ = dw(oQ, vQ),
          FQ = wQ(QQ);
        kQ = !LQ(QQ) && (null === FQ || !Rx(FQ))
      }
      return {
        box: oQ,
        fits: kQ
      }
    }
    const sx = Ov,
      rx = "baf2Goal",
      Ix = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      Ux = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Nx = .4;

    function Tx(QQ, FQ) {
      let [wQ, LQ, qQ] = QQ;
      const oQ = zv([wQ - .02, LQ - .02, qQ - .02], [wQ + 1.02, LQ + 1.02, qQ + 1.02], .07);
      return FQ && (oQ.push([
        [wQ + .5, LQ + 1 + .7, qQ + .5],
        [.08, 1.4, .08]
      ]), oQ.push([
        [wQ + .5, LQ + 1 + 1.4 + .2, qQ + .5],
        [Nx, Nx, Nx]
      ])), oQ
    }

    function Kx(QQ, FQ) {
      let [wQ, LQ, qQ] = FQ;
      return QQ.isBlockInLoadedChunk(wQ, LQ, qQ) ? QQ.blockIdToBlockName(QQ.getBlockId(wQ, LQ, qQ)) : null
    }
    let zx = null;
    const lx = new Set;
    let jx = null;

    function ax(QQ) {
      zx = QQ;
      for (const FQ of lx) FQ(QQ)
    }
    class Xx {
      constructor(QQ) {
        var FQ;
        this.plans = QQ, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (FQ = QQ => {
          var FQ, wQ;
          this.setGoal(null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.goal) && void 0 !== FQ ? FQ : null, null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsBattery) && void 0 !== wQ && wQ)
        }, jx ??= [Tq.l.subscribe("setDirectionArrow", (QQ => {
          let {
            id: FQ,
            position: wQ,
            text: LQ
          } = QQ;
          FQ === rx && ax({
            goal: [Math.floor(wQ[0]), Math.floor(wQ[1]), Math.floor(wQ[2])],
            startsBattery: JSON.stringify(null !== LQ && void 0 !== LQ ? LQ : null).includes("arrowStartBattery")
          })
        })), Tq.l.subscribe("clearDirectionArrow", (QQ => {
          let {
            id: FQ
          } = QQ;
          null !== FQ && FQ !== rx || ax(null)
        }))], lx.add(FQ), FQ(zx), () => {
          lx.delete(FQ)
        })
      }
      onAfterRender(QQ, FQ) {
        const wQ = performance.now();
        if (this.cues.length > 0) {
          const FQ = .55 + .45 * Math.sin(wQ / 1100 * Math.PI * 2);
          for (const wQ of this.cues) QQ.setGameMesh(wQ, {
            visibility: FQ
          })
        }
        if (wQ - this.lastCheckMs < 150) return;
        this.lastCheckMs = wQ;
        const LQ = this.plans.all().filter((QQ => {
            const [wQ, LQ, qQ] = QQ.box.ctrl;
            return (!QQ.formed || null !== this.plans.layoutOf(QQ.box.ctrl)) && (wQ - FQ[0]) ** 2 + (LQ - FQ[1]) ** 2 + (qQ - FQ[2]) ** 2 <= 2304
          })),
          qQ = function(QQ, FQ) {
            const wQ = xx.e.tx,
              LQ = new Map;
            for (const oQ of FQ) {
              const FQ = dw(oQ.box, 0),
                DQ = dw(oQ.box, Pw(oQ.box) - 1),
                kQ = [Math.min(FQ[0], DQ[0]), Math.min(FQ[1], DQ[1]), Math.min(FQ[2], DQ[2])].map((QQ => Math.floor(QQ / wQ))),
                vQ = [Math.max(FQ[0], DQ[0]), Math.max(FQ[1], DQ[1]), Math.max(FQ[2], DQ[2])].map((QQ => Math.floor(QQ / wQ)));
              for (let wQ = kQ[0]; wQ <= vQ[0]; wQ++)
                for (let FQ = kQ[1]; FQ <= vQ[1]; FQ++)
                  for (let oQ = kQ[2]; oQ <= vQ[2]; oQ++) {
                    var qQ;
                    LQ.set(`${wQ},${FQ},${oQ}`, null !== (qQ = QQ.getChunkVersion(wQ, FQ, oQ)) && void 0 !== qQ ? qQ : -1)
                  }
            }
            return LQ
          }(QQ, LQ);
        this.plans.getVersion() === this.storeVersion && (function(QQ, FQ) {
          if (QQ.size !== FQ.size) return !1;
          for (const [wQ, LQ] of QQ)
            if (FQ.get(wQ) !== LQ) return !1;
          return !0
        }(qQ, this.chunkVersions) || wQ - this.lastRescanMs < 600) || (this.lastRescanMs = wQ, this.storeVersion = this.plans.getVersion(), this.chunkVersions = qQ, this.redraw(QQ, LQ))
      }
      dispose(QQ) {
        this.unwatch(), zx = null, this.clearMeshes(QQ), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(QQ, FQ) {
        var wQ;
        (null === QQ || void 0 === QQ ? void 0 : QQ.join()) === (null === (wQ = this.goal) || void 0 === wQ ? void 0 : wQ.join()) && FQ === this.startsBattery || (this.goal = QQ, this.startsBattery = FQ, this.storeVersion = -1)
      }
      redraw(QQ, FQ) {
        const wQ = FQ => Kx(QQ, FQ),
          LQ = new Map,
          qQ = [],
          oQ = this.plans.guideOn();
        for (const mQ of FQ) {
          const QQ = oQ && Gx(mQ, this.plans.showsStarter(mQ.box.ctrl), (QQ => wQ(dw(mQ.box, QQ)))),
            FQ = "reactor" === mQ.kind ? this.plans.layoutOf(mQ.box.ctrl) : null,
            DQ = oQ && !mQ.formed ? Cx(mQ, wQ, this.goal) : -1;
          DQ >= 0 && qQ.push([dw(mQ.box, DQ), Wx(mQ.box, DQ)]);
          const kQ = Pw(mQ.box);
          for (let qQ = 0; qQ < kQ; qQ++) {
            const kQ = dw(mQ.box, qQ),
              vQ = wQ(kQ),
              uQ = null === vQ ? null : px(mQ, qQ, vQ, QQ, oQ, FQ);
            if (null !== uQ) {
              const QQ = "wrong" !== uQ && ix(mQ.box, qQ, DQ),
                FQ = QQ ? `${uQ}Dim` : uQ;
              let wQ = LQ.get(FQ);
              wQ || (wQ = {
                draw: {
                  ghost: uQ,
                  dim: QQ
                },
                list: []
              }, LQ.set(FQ, wQ)), wQ.list.push(kQ)
            }
          }
        }
        if (oQ && this.startsBattery && this.goal) {
          const [QQ, FQ, qQ] = this.goal, oQ = [];
          for (const [LQ, DQ, kQ] of Ix) {
            const vQ = [QQ + LQ, FQ + DQ, qQ + kQ];
            "Air" === wQ(vQ) && oQ.push(vQ)
          }
          if (oQ.length > 0) {
            var DQ;
            const QQ = null !== (DQ = LQ.get("cell")) && void 0 !== DQ ? DQ : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            QQ.list.push(...oQ), LQ.set("cell", QQ)
          }
        }
        const kQ = [...LQ.keys()].sort(),
          vQ = [...kQ.map((QQ => `${QQ}:${LQ.get(QQ).list.join(";")}`)), `cue:${qQ.join(";")}`].join("|");
        if (vQ !== this.shownKey) {
          this.shownKey = vQ, this.clearMeshes(QQ);
          for (const FQ of kQ) {
            const {
              draw: wQ,
              list: qQ
            } = LQ.get(FQ);
            this.meshes.push(this.build(QQ, wQ, qQ))
          }
          for (const [FQ, wQ] of qQ) this.cues.push(ex(QQ, Tx(FQ, wQ), Ux))
        }
      }
      build(QQ, FQ, wQ) {
        let {
          ghost: LQ,
          dim: qQ
        } = FQ;
        const {
          size: oQ,
          colour: DQ,
          alpha: kQ
        } = sx[LQ], vQ = wQ[0], mQ = [], uQ = [];
        for (const [HQ, bQ, YQ] of wQ) tx(mQ, uQ, [HQ - vQ[0] + .5, bQ - vQ[1] + .5, YQ - vQ[2] + .5], [oQ, oQ, oQ]);
        return QQ.createGameMesh({
          positions: mQ,
          indices: uQ
        }, {
          rgb: DQ,
          alpha: kQ * (qQ ? .3 : 1)
        }, vQ)
      }
      clearMeshes(QQ) {
        for (const FQ of [...this.meshes, ...this.cues]) QQ.disposeGameMesh(FQ);
        this.meshes = [], this.cues = []
      }
    }
    const fx = [.56, .83, 1],
      Vx = [1, .3, .25];
    class hx {
      constructor(QQ) {
        this.plans = QQ, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(QQ, FQ, wQ) {
        var LQ;
        const qQ = performance.now();
        if (qQ - this.lastCheckMs < 150) return;
        this.lastCheckMs = qQ;
        const oQ = FQ => Kx(QQ, FQ),
          DQ = null === (LQ = QQ.owQ(FQ)) || void 0 === LQ ? void 0 : LQ.name,
          kQ = DQ && "Reactor Frame" === Uw(DQ) ? QQ.getTargetedBlock() : null,
          vQ = kQ ? [kQ.nY[0], kQ.nY[1], kQ.nY[2]] : null,
          mQ = null !== vQ && "Air" === oQ(vQ) && vQ.every(((QQ, FQ) => Math.abs(QQ + .5 - wQ[FQ]) <= 8)) ? Ox(vQ, wQ, oQ, (QQ => this.inPlan(QQ))) : null,
          uQ = mQ ? `${mQ.box.ctrl.join()}|${mQ.box.rot}|${mQ.fits}` : "";
        uQ !== this.shownKey && this.show(QQ, uQ, mQ)
      }
      dispose(QQ) {
        this.clear(QQ), this.shownKey = ""
      }
      inPlan(QQ) {
        return this.plans.all().some((FQ => QL(FQ.box, QQ) >= 0))
      }
      show(QQ, FQ, wQ) {
        if (this.clear(QQ), this.shownKey = FQ, !wQ) return;
        const {
          box: LQ,
          fits: qQ
        } = wQ, oQ = qQ ? fx : Vx, {
          lo: DQ,
          hi: kQ
        } = Kv(LQ);
        this.meshes.push(ex(QQ, zv(DQ, kQ, .05), {
          rgb: oQ,
          alpha: 1
        }));
        const vQ = [],
          mQ = dw(LQ, 0)[1];
        for (let uQ = 0; uQ < LQ.w * LQ.d; uQ++) {
          const [QQ, , FQ] = dw(LQ, uQ);
          vQ.push([
            [QQ + .5, mQ + .02 + .01, FQ + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(ex(QQ, vQ, {
          rgb: oQ,
          alpha: .25
        }))
      }
      clear(QQ) {
        for (const FQ of this.meshes) QQ.disposeGameMesh(FQ);
        this.meshes = []
      }
    }
    const Jx = "buildAFactory2Game:";

    function Ex(QQ, FQ, wQ) {
      const LQ = QQ => {
          const [wQ, LQ, qQ] = QQ.box.ctrl;
          return wQ === FQ[0] && LQ === FQ[1] && qQ === FQ[2]
        },
        qQ = QQ.find((QQ => LQ(QQ) || QL(QQ.box, FQ) >= 0));
      if (!qQ) return null;
      const oQ = function(QQ, FQ, wQ) {
        const {
          w: LQ,
          h: qQ,
          d: oQ
        } = QQ.box, DQ = "reactor" === QQ.kind ? `${Jx}rxTitle` : `${Jx}batTitle`;
        if (QQ.formed) return {
          key: `${Jx}lookPlanFormed`,
          kindKey: DQ,
          w: LQ,
          h: qQ,
          d: oQ,
          count: 0
        };
        let kQ = 0,
          vQ = 0;
        for (let uQ = 0; uQ < Pw(QQ.box); uQ++) {
          const FQ = wQ(dw(QQ.box, uQ)),
            LQ = null === FQ ? "ok" : oL(QQ.kind, FL(QQ.box, uQ), FQ);
          kQ += "missing" === LQ ? 1 : 0, vQ += "wrong" === LQ || "blocked" === LQ ? 1 : 0
        }
        const mQ = function(QQ, FQ, wQ) {
          if (FQ < 0 || null === wQ) return;
          const LQ = FL(QQ.box, FQ),
            qQ = oL(QQ.kind, LQ, wQ);
          return "blocked" === qQ ? `${Jx}lookWhy_blocked` : "wrong" === qQ ? "ctrl" === LQ ? `${Jx}lookWhy_ctrl` : `${Jx}lookWhy_reactor_${LQ}` : void 0
        }(QQ, QL(QQ.box, FQ), wQ([FQ[0], FQ[1], FQ[2]]));
        if (kQ > 0) return {
          key: `${Jx}lookPlanToBuild`,
          kindKey: DQ,
          w: LQ,
          h: qQ,
          d: oQ,
          count: kQ,
          why: mQ
        };
        if (vQ > 0) return {
          key: `${Jx}lookPlanTakeOut`,
          kindKey: DQ,
          w: LQ,
          h: qQ,
          d: oQ,
          count: vQ,
          why: mQ
        };
        return {
          key: "reactor" === QQ.kind ? `${Jx}lookPlanNoRods` : `${Jx}lookPlanDone`,
          kindKey: DQ,
          w: LQ,
          h: qQ,
          d: oQ,
          count: 0
        }
      }(qQ, FQ, wQ);
      return "reactor" === qQ.kind && LQ(qQ) ? {
        ...oQ,
        ctrl: !0
      } : oQ
    }

    function nx(QQ, FQ) {
      return QQ === FQ || null !== QQ && null !== FQ && QQ.key === FQ.key && QQ.kindKey === FQ.kindKey && QQ.w === FQ.w && QQ.h === FQ.h && QQ.d === FQ.d && QQ.count === FQ.count && QQ.why === FQ.why && QQ.ctrl === FQ.ctrl
    }

    function gx() {
      return performance.now()
    }
    class Px {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gx;
        this.ticket = QQ, this.sent = FQ, this.backstopMs = wQ, this.now = LQ, this.queuedAt = void 0, this.queuedAt = LQ()
      }
      answered() {
        const QQ = this.now(),
          FQ = this.sent.leftAt(this.ticket);
        return null !== FQ && QQ - FQ > 4e3 || QQ - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class Zx {
      constructor() {
        this.echoes = []
      }
      add(QQ) {
        this.echoes = this.echoes.filter((QQ => !QQ.answered())), this.echoes.push(QQ)
      }
      answered() {
        var QQ, FQ;
        return null === (QQ = null === (FQ = this.echoes.at(-1)) || void 0 === FQ ? void 0 : FQ.answered()) || void 0 === QQ || QQ
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((QQ => QQ.answered()))
      }
      age() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.echoes.at(-1)) || void 0 === FQ ? void 0 : FQ.age()) && void 0 !== QQ ? QQ : null
      }
      clear() {
        this.echoes = []
      }
    }
    class yx {
      constructor(QQ) {
        this.send = QQ, this.value = null, this.sent = null, this.echoes = new Zx, this.down = !1, this.timer = null
      }
      shown(QQ) {
        return null === this.value ? QQ : this.down || this.value !== this.sent ? this.value : QQ === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), QQ) : this.value
      }
      pendingFor(QQ) {
        return null !== this.value && this.value === this.sent && QQ !== this.value ? this.echoes.age() : null
      }
      assume(QQ, FQ) {
        this.disarm(), this.down = !1, this.value = QQ, this.sent = QQ, this.echoes.clear(), this.echoes.add(FQ)
      }
      press() {
        this.down = !0
      }
      drag(QQ) {
        this.value = QQ, this.arm(this.down ? 1e3 : 400)
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
      arm(QQ) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), QQ)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class Bx {
      constructor() {
        this.pending = new Map
      }
      set(QQ, FQ, wQ) {
        var LQ;
        const qQ = null !== (LQ = this.pending.get(QQ)) && void 0 !== LQ ? LQ : {
          on: FQ,
          echoes: new Zx
        };
        qQ.on = FQ, qQ.echoes.add(wQ), this.pending.set(QQ, qQ)
      }
      shown(QQ) {
        let FQ = QQ;
        for (const [wQ, {
            on: LQ,
            echoes: qQ
          }] of this.pending) 0 !== (QQ & wQ) === LQ && qQ.agreeCounts() || qQ.answered() ? this.pending.delete(wQ) : FQ = LQ ? FQ | wQ : FQ & ~wQ;
        return FQ
      }
      pendingMask() {
        let QQ = 0;
        for (const FQ of this.pending.keys()) QQ |= FQ;
        return QQ
      }
      pendingFor(QQ) {
        let FQ = null;
        for (const [LQ, {
            on: qQ,
            echoes: oQ
          }] of this.pending) {
          if (void 0 !== QQ && 0 !== (QQ & LQ) === qQ) continue;
          const DQ = oQ.age();
          var wQ;
          if (null !== DQ) FQ = Math.max(null !== (wQ = FQ) && void 0 !== wQ ? wQ : 0, DQ)
        }
        return FQ
      }
      clear() {
        this.pending.clear()
      }
    }
    class dx {
      constructor() {
        this.dims = null, this.echoes = new Zx, this.unmet = null
      }
      shown(QQ) {
        var FQ;
        return this.dims && (QA(this.dims, QQ) && this.echoes.agreeCounts() || this.echoes.answered()) && (QA(this.dims, QQ) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (FQ = this.dims) && void 0 !== FQ ? FQ : QQ
      }
      takeUnmet() {
        const QQ = this.unmet;
        return this.unmet = null, QQ
      }
      set(QQ, FQ) {
        this.dims = QQ, this.echoes.add(FQ)
      }
      pendingFor(QQ) {
        return null === this.dims || QQ && QA(this.dims, QQ) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function QA(QQ, FQ) {
      return QQ[0] === FQ[0] && QQ[1] === FQ[1] && QQ[2] === FQ[2]
    }
    class FA {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gx;
        this.now = QQ, this.taps = new Map
      }
      tap(QQ, FQ, wQ) {
        return !this.busy(QQ) && (this.taps.set(QQ, {
          at: this.now(),
          done: FQ
        }), wQ(), !0)
      }
      settle(QQ) {
        for (const [FQ, wQ] of [...this.taps]) wQ.done(QQ) && this.taps.delete(FQ)
      }
      busy(QQ) {
        const FQ = this.taps.get(QQ);
        return !!FQ && (!(this.now() - FQ.at >= 3e3) || (this.taps.delete(QQ), !1))
      }
      busyIds() {
        const QQ = new Set;
        for (const FQ of [...this.taps.keys()]) this.busy(FQ) && QQ.add(FQ);
        return QQ
      }
      clear() {
        this.taps.clear()
      }
    }

    function wA(QQ) {
      return {
        send: FQ => QQ.track(FQ),
        sendUrgent: (FQ, wQ) => QQ.track(FQ, {
          urgent: !0,
          supersedes: wQ
        }),
        leftAt: FQ => QQ.leftAt(FQ),
        holdReserve: () => QQ.holdUrgentReserve(),
        answerMs: zD
      }
    }

    function LA() {
      return performance.now()
    }

    function qA(QQ) {
      const FQ = QQ.baf2RxNeed.map((QQ => {
        let [FQ, wQ] = QQ;
        return [FQ, wQ]
      }));
      return JSON.stringify([QQ.baf2RxFormed, FQ, QQ.baf2RxBad, QQ.baf2RxCells])
    }

    function oA(QQ, FQ) {
      const wQ = 0 !== (FQ & bF),
        LQ = 0 !== (QQ.baf2RxFlags & bF);
      return !wQ || LQ || "running" !== QQ.baf2RxState && "idle" !== QQ.baf2RxState ? !wQ && LQ && "scram" === QQ.baf2RxState && QQ.baf2RxFuel > 0 ? "idle" : QQ.baf2RxState : "scram"
    }

    function DA(QQ) {
      return JSON.stringify([QQ.baf2BatFormed, QQ.baf2BatNeed, QQ.baf2BatBad])
    }

    function kA(QQ) {
      return QQ.join(",")
    }
    class vA {
      constructor() {
        this.listeners = new Set
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class mA {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(QQ, FQ) {
        this.lastAt = QQ, this.lastUntil = QQ + FQ
      }
      answered(QQ) {
        return this.lastAt >= QQ || QQ < this.lastUntil
      }
    }
    class uA {
      constructor(QQ, FQ) {
        this.link = QQ, this.now = FQ, this.hold = new dx, this.picked = null, this.notTaken = null
      }
      shown(QQ) {
        const FQ = this.hold.shown(QQ);
        if (this.hold.takeUnmet() && this.picked) {
          var wQ;
          const {
            plans: FQ,
            ctrl: LQ,
            at: qQ
          } = this.picked;
          this.picked = null, FQ.unpredict(LQ), null === (wQ = this.notTaken) || void 0 === wQ || wQ.call(this, QQ, qQ)
        }
        return FQ
      }
      pendingFor(QQ) {
        return this.hold.pendingFor(QQ)
      }
      Vb(QQ, FQ, wQ) {
        QQ.predictSize(FQ, wQ), this.picked = {
          plans: QQ,
          ctrl: FQ,
          at: this.now()
        };
        const LQ = this.link.send(HF(FQ, "plan", ...wQ));
        this.hold.set(wQ, new Px(LQ, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class HA {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LA;
        this.plans = QQ, this.readInterior = FQ, this.link = wQ, this.now = LQ, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new Bx, this.throttle = void 0, this.oneShots = void 0, this.listeners = new vA, this.redraw = null, this.releaseReserve = null, this.size = new uA(wQ, LQ), this.oneShots = new FA(LQ), this.throttle = new yx((QQ => this.echo(this.link.send(this.command("throttle", QQ)))))
      }
      set(QQ) {
        !QQ.baf2RxOpen && this.raw && kA(this.raw.baf2RxAt) === kA(QQ.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(QQ), this.GA(QQ)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(QQ) {
        this.size.notTaken = QQ
      }
      resize(QQ) {
        this.raw && (this.size.Vb(this.plans, this.raw.baf2RxAt, QQ), this.GA(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const QQ = this.raw.baf2RxAt;
        this.plans.setStarter(QQ, !this.plans.showsStarter(QQ)), this.GA(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.GA(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.GA(this.raw)
      }
      send(QQ) {
        if (this.raw) {
          for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
          this.link.send(this.command(QQ, ...wQ))
        }
      }
      tap(QQ, FQ) {
        this.raw && this.oneShots.tap(QQ, function(QQ, FQ) {
          if ("start" === QQ) return QQ => 0 === (QQ.baf2RxFlags & bF);
          if ("odConfirm" === QQ) return QQ => 0 !== (QQ.baf2RxFlags & YF);
          const wQ = qA(FQ);
          return QQ => qA(QQ) !== wQ
        }(QQ, this.raw), FQ) && ("start" === QQ && (this.startedAt = this.now()), this.GA(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(bF, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(QQ, FQ) {
        if (!this.raw) return;
        const wQ = QQ === bF ? this.command(FQ ? "scram" : "start") : this.command("od", FQ ? 1 : 0),
          LQ = FQ && QQ === bF,
          qQ = `${uF} ${this.raw.baf2RxAt.join(" ")} `,
          oQ = this.echo(LQ ? this.link.sendUrgent(wQ, (QQ => {
            const FQ = QQ.startsWith(qQ) ? QQ.slice(qQ.length).split(" ")[0] : null;
            return "throttle" === FQ || "start" === FQ
          })) : this.link.send(wQ));
        this.flags.set(QQ, FQ, oQ), LQ && this.throttle.assume(0, oQ), this.GA(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(QQ) {
        this.throttle.drag(QQ), this.raw && this.GA(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.GA(this.raw)
      }
      subscribe(QQ) {
        return this.listeners.subscribe(QQ)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var QQ;
        this.throttle.release(), null === (QQ = this.releaseReserve) || void 0 === QQ || QQ.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(QQ) {
        for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
        return HF(this.raw.baf2RxAt, QQ, ...wQ)
      }
      echo(QQ) {
        return new Px(QQ, this.link, this.link.answerMs, this.now)
      }
      GA(QQ) {
        var FQ;
        this.raw = QQ;
        const wQ = this.flags.shown(QQ.baf2RxFlags),
          LQ = {
            ...QQ,
            baf2RxFlags: wQ,
            baf2RxTarget: this.throttle.shown(QQ.baf2RxTarget),
            baf2RxState: oA(QQ, wQ)
          },
          qQ = this.size.shown(LQ.baf2RxDims),
          oQ = this.throttle.pendingFor(),
          DQ = [this.throttle.pendingFor(QQ.baf2RxTarget), this.flags.pendingFor(QQ.baf2RxFlags), this.size.pendingFor(QQ.baf2RxDims)].filter((QQ => null !== QQ)),
          kQ = DQ.length > 0 ? Math.max(...DQ) : null,
          vQ = this.oneShots.busyIds(),
          mQ = LQ.baf2RxAt;
        let uQ, HQ, bQ = null,
          YQ = [Math.max(0, qQ[0] - 2), Math.max(0, qQ[1] - 2), Math.max(0, qQ[2] - 2)];
        if (LQ.baf2RxFormed) {
          const [QQ, FQ, wQ] = LQ.baf2RxDims;
          YQ = [Math.max(0, QQ - 2), Math.max(0, FQ - 2), Math.max(0, wQ - 2)], uQ = Array.from(LQ.baf2RxCells, Number), HQ = `${YQ.join(",")}:${LQ.baf2RxCells}`
        } else {
          var xQ;
          const QQ = null === (xQ = this.plans.planAt(mQ)) || void 0 === xQ ? void 0 : xQ.box,
            FQ = QQ ? Ew(QQ, "reactor", ...qQ) : hw(mQ, 1, ...qQ, Jw("reactor", qQ[0])),
            wQ = this.readInterior(FQ);
          bQ = Lv(YQ, wQ), uQ = wQ, HQ = `${YQ.join(",")}:${wQ.join("")}`
        }(null === (FQ = this.looksOf) || void 0 === FQ ? void 0 : FQ.key) !== HQ && (this.looksOf = {
          key: HQ,
          looks: mv(YQ, uQ)
        }), this.view = {
          status: LQ,
          dims: qQ,
          plan: bQ,
          inner: YQ,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(mQ),
          odConfirmed: this.odConfirmed || 0 !== (LQ.baf2RxFlags & GF),
          guide: this.plans.guideOn(),
          throttlePending: null !== oQ,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== kQ && kQ >= 5e3,
          busy: vQ,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== kQ || vQ.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.GA(this.raw)
        }), 250))
      }
    }
    class bA {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LA;
        this.plans = QQ, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new vA, this.redraw = null, this.size = new uA(FQ, wQ), this.oneShots = new FA(wQ)
      }
      set(QQ) {
        !QQ.baf2BatOpen && this.view && kA(this.view.status.baf2BatAt) === kA(QQ.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(QQ), this.GA(QQ)
      }
      tap(QQ, FQ) {
        if (!this.view) return;
        const wQ = DA(this.view.status);
        this.oneShots.tap(QQ, (QQ => DA(QQ) !== wQ), FQ) && this.GA(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(QQ) {
        this.size.notTaken = QQ
      }
      resize(QQ) {
        this.view && (this.size.Vb(this.plans, this.view.status.baf2BatAt, QQ), this.GA(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.GA(this.view.status)
      }
      subscribe(QQ) {
        return this.listeners.subscribe(QQ)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      GA(QQ) {
        const FQ = this.size.shown(QQ.baf2BatDims),
          wQ = this.oneShots.busyIds();
        this.view = {
          status: QQ,
          dims: FQ,
          MH: Sv(FQ, QQ.baf2BatDims) ? QQ.baf2BatCapacity : bv(...FQ),
          guide: this.plans.guideOn(),
          busy: wQ
        }, this.listeners.notify(), wQ.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.GA(this.view.status)
        }), 250))
      }
    }
    const YA = "buildAFactory2Game:";

    function xA() {
      var QQ;
      const FQ = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!FQ) return null;
      const wQ = FQ.querySelector(".ExitButton");
      return function(QQ, FQ) {
        const wQ = FQ ? FQ.left - 8 : QQ.right;
        return {
          left: QQ.left,
          top: QQ.top,
          width: Math.max(0, wQ - QQ.left),
          height: QQ.height
        }
      }(FQ.getBoundingClientRect(), null !== (QQ = null === wQ || void 0 === wQ ? void 0 : wQ.getBoundingClientRect()) && void 0 !== QQ ? QQ : null)
    }
    const AA = (0, LQ.memo)((function(QQ) {
      let {
        store: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, Oq.y)(), [qQ, oQ] = (0, LQ.useState)((() => FQ.get())), [DQ, kQ] = (0, LQ.useState)((() => performance.now()));
      (0, LQ.useEffect)((() => (oQ(FQ.get()), FQ.subscribe((() => {
        oQ(FQ.get()), kQ(performance.now())
      })))), [FQ]);
      const {
        alarm: vQ,
        boomAt: mQ
      } = qQ, uQ = null !== vQ && null !== vQ.secs, [HQ, bQ] = (0, LQ.useState)(null);
      (0, LQ.useEffect)((() => {
        if (!uQ) return;
        bQ(xA());
        const QQ = setInterval((() => {
          kQ(performance.now()), bQ(xA())
        }), 250);
        return () => {
          clearInterval(QQ)
        }
      }), [uQ]);
      const [YQ, xQ] = (0, LQ.useState)(!1);
      return (0, LQ.useEffect)((() => {
        if (mQ === -1 / 0) return;
        xQ(!0);
        const QQ = setTimeout((() => {
          xQ(!1)
        }), 1300);
        return () => {
          clearTimeout(QQ)
        }
      }), [mQ]), (0, Wo.jsxs)(Wo.Fragment, {
        children: [null !== vQ && (0, Wo.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: wQ(vQ.hot ? `${YA}rxAlarmSiren` : `${YA}rxAlarmDamaged`, {
            amount: String(vQ.damage)
          })
        }), null !== vQ && null !== vQ.secs && (0, Wo.jsx)("div", {
          className: HQ ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== HQ && void 0 !== HQ ? HQ : void 0,
          "aria-live": "assertive",
          children: wQ(`${YA}rxAlarmCountdown`, {
            amount: String((AQ = vQ.secs, tQ = DQ - vQ.receivedAt, Math.max(1, Math.ceil(AQ - tQ / 1e3))))
          })
        }), YQ && (0, Wo.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var AQ, tQ
    }));
    class tA {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      mp(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const wQ = QQ.baf2RxAlarmAt.join(",");
        let LQ = this.snapshot.boomAt;
        if (QQ.baf2RxAlarmBoom) this.byReactor.delete(wQ), LQ = FQ;
        else if (QQ.baf2RxAlarmDamage <= 0) this.byReactor.delete(wQ);
        else {
          var qQ;
          this.byReactor.set(wQ, {
            damage: QQ.baf2RxAlarmDamage,
            secs: null !== (qQ = QQ.baf2RxAlarmSecs) && void 0 !== qQ ? qQ : null,
            hot: !0 === QQ.baf2RxAlarmHot,
            receivedAt: FQ
          })
        }
        this.GA(LQ)
      }
      retain(QQ) {
        let FQ = !1;
        for (const wQ of [...this.byReactor.keys()]) QQ.has(wQ) || (this.byReactor.delete(wQ), FQ = !0);
        FQ && this.GA(this.snapshot.boomAt)
      }
      has(QQ) {
        return this.byReactor.has(QQ)
      }
      get() {
        return this.snapshot
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      GA(QQ) {
        let FQ = null;
        for (const wQ of this.byReactor.values())(!FQ || wQ.damage > FQ.damage) && (FQ = wQ);
        this.snapshot = {
          alarm: FQ,
          boomAt: QQ
        };
        for (const wQ of this.listeners) wQ()
      }
    }
    const eA = {
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

    function MA(QQ) {
      return [QQ[0], QQ[1], QQ[2]]
    }

    function GA(QQ) {
      return `${QQ[0]},${QQ[1]},${QQ[2]}`
    }
    class pA {
      constructor(QQ) {
        if (this.plans = QQ, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var QQ;
            return {
              active: this.glows.flatMap((QQ => {
                let {
                  record: FQ
                } = QQ;
                return FQ ? [FQ] : []
              })),
              log: [...null !== (QQ = this.devLog) && void 0 !== QQ ? QQ : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var QQ;
        return null !== (QQ = this.devLog) && void 0 !== QQ ? QQ : []
      }
      check(QQ, FQ, wQ) {
        const LQ = new Set(FQ.map((QQ => GA(QQ.box.ctrl))));
        for (const DQ of function(QQ, FQ) {
            const wQ = [],
              LQ = new Map(QQ);
            QQ.clear();
            for (const qQ of FQ) {
              const FQ = Hx(qQ.box.ctrl),
                oQ = qQ.formed ? qQ.level : 0;
              QQ.set(FQ, oQ), oQ > 0 && 0 === LQ.get(FQ) && wQ.push(qQ)
            }
            return wQ
          }(this.levels, this.plans.all())) LQ.has(GA(DQ.box.ctrl)) && this.show(QQ, DQ, "on", wQ);
        const qQ = this.plans.lastFormed();
        if (null === qQ || qQ.receivedAt <= this.flashedAt) return null;
        this.flashedAt = qQ.receivedAt;
        const oQ = function(QQ, FQ) {
          var wQ;
          const LQ = Hx(QQ);
          return null !== (wQ = FQ.find((QQ => Hx(QQ.box.ctrl) === LQ))) && void 0 !== wQ ? wQ : null
        }(qQ.ctrl, FQ);
        return oQ && this.show(QQ, oQ, "formed", wQ), oQ
      }
      fade(QQ, FQ) {
        0 !== this.glows.length && (this.glows = this.glows.filter((wQ => {
          let {
            mesh: LQ,
            glow: qQ,
            startMs: oQ,
            record: DQ
          } = wQ;
          const kQ = (FQ - oQ) / eA[qQ].ms;
          return kQ >= 1 ? (QQ.disposeGameMesh(LQ), DQ && (DQ.endMs = FQ), !1) : (QQ.setGameMesh(LQ, {
            visibility: "formed" === qQ ? 1 - kQ : Math.sin(Math.PI * kQ)
          }), !0)
        })))
      }
      dispose(QQ) {
        for (const {
            mesh: wQ
          }
          of this.glows) QQ.disposeGameMesh(wQ);
        this.glows = [], this.levels.clear();
        const FQ = "undefined" !== typeof window ? window : null;
        (null === FQ || void 0 === FQ ? void 0 : FQ.baf2Glows) === this.devAccessor && delete FQ.baf2Glows
      }
      show(QQ, FQ, wQ, LQ) {
        const {
          lo: qQ,
          hi: oQ
        } = Kv(FQ.box);
        let DQ = null;
        this.devLog && (DQ = {
          glow: wQ,
          ctrl: MA(FQ.box.ctrl),
          lo: MA(qQ),
          hi: MA(oQ),
          startMs: LQ,
          endMs: null
        }, this.devLog.push(DQ), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(QQ, wQ, zv(qQ, oQ, eA[wQ].thick)),
          glow: wQ,
          startMs: LQ,
          record: DQ
        })
      }
      build(QQ, FQ, wQ) {
        const LQ = ex(QQ, wQ, {
          rgb: eA[FQ].colour,
          alpha: 1
        });
        return QQ.setGameMesh(LQ, {
          visibility: 0
        }), LQ
      }
    }
    const cA = 1 / .6,
      CA = {
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
        blendMode: jk.f.Standard,
        soft: !0
      },
      SA = {
        ...CA,
        size: [.25, .4],
        count: 2
      };

    function iA(QQ) {
      return {
        colours: [QQ, QQ],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: jk.f.Add,
        soft: !1
      }
    }
    const WA = iA([150, 225, 255]),
      RA = iA([185, 145, 255]),
      OA = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function sA(QQ) {
      const FQ = TF[QQ];
      return null === FQ.fuelSlot || qw(FQ) ? OA.includes(QQ) ? RA : WA : CA
    }
    const rA = {
        kind: "smokePuff"
      },
      IA = [.2, .025, .2];

    function UA(QQ, FQ) {
      const [
        [wQ, LQ, qQ],
        [oQ, DQ, kQ]
      ] = QQ.colours;
      return {
        texture: QQ.soft ? rA : "square_particle",
        MH: FQ,
        minLifeTime: QQ.life[0] / cA,
        maxLifeTime: QQ.life[1] / cA,
        minEmitPower: QQ.power[0] * cA,
        maxEmitPower: QQ.power[1] * cA,
        minSize: QQ.size[0],
        maxSize: QQ.size[1],
        emitRate: 0,
        gravity: [0, QQ.lift * cA * cA, 0],
        dir1: [-QQ.spread, 1, -QQ.spread],
        dir2: [QQ.spread, 1, QQ.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [wQ, LQ, qQ, QQ.alpha],
          maxColor: [oQ, DQ, kQ, QQ.alpha]
        }, {
          timeFraction: 1,
          minColor: [wQ, LQ, qQ, 0],
          maxColor: [oQ, DQ, kQ, 0]
        }],
        blendMode: QQ.blendMode
      }
    }
    class NA {
      constructor(QQ) {
        this.fixed = QQ, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(QQ, FQ, wQ) {
        var LQ;
        if (wQ === this.lastFrame) return !1;
        this.lastFrame = wQ;
        const qQ = this.at;
        qQ[0] = FQ[0] + .5, qQ[1] = FQ[1] + 1.025, qQ[2] = FQ[2] + .5;
        const oQ = null !== (LQ = this.fixed) && void 0 !== LQ ? LQ : kQ() ? SA : CA;
        let DQ = this.particles.get(oQ);
        return DQ || (DQ = QQ.createParticles(function(QQ) {
          return UA(QQ, Math.ceil(12 * QQ.count * QQ.life[1]) + QQ.count)
        }(oQ), {
          pos: qQ,
          half: IA
        }), this.particles.set(oQ, DQ)), DQ.moveTo(qQ), DQ.emit(oQ.count), !0
      }
      dispose() {
        for (const QQ of this.particles.values()) QQ.stop();
        this.particles.clear()
      }
    }
    class TA {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(QQ) {
        this.indexed = !0;
        for (const FQ of OF) {
          const wQ = sA(FQ);
          for (let LQ = 1; LQ <= 4; LQ++) {
            const qQ = QQ.blockNameToBlockId(`${FQ}|meta|rot${LQ}|Running`, !0);
            if (null === qQ) continue;
            let oQ = this.pufferIndexByStyle.get(wQ);
            void 0 === oQ && (oQ = this.pufferList.push(new NA(wQ === CA ? null : wQ)) - 1, this.pufferIndexByStyle.set(wQ, oQ)), this.pufferIndexById[qQ] = oQ + 1
          }
        }
      }
      onAfterRender(QQ, FQ) {
        this.indexed || this.index(QQ);
        const wQ = performance.now(),
          LQ = 0 === this.lastMs ? 0 : Math.min(wQ - this.lastMs, 250) / 1e3;
        this.lastMs = wQ, this.frame++, QQ.particlesEnabled() ? (this.scan(QQ, FQ), this.puff(QQ, LQ)) : this.sources = []
      }
      dispose() {
        for (const QQ of this.pufferList) QQ.dispose();
        this.sources = [], this.found = []
      }
      scan(QQ, FQ) {
        0 === this.scanRow && (this.origin = [Math.floor(FQ[0]) - 12, Math.floor(FQ[1]) - 6, Math.floor(FQ[2]) - 12]);
        const wQ = Math.min(this.scanRow + 16, 325),
          [LQ, qQ, oQ] = this.origin,
          DQ = this.hits;
        DQ.length = 0;
        for (let kQ = this.scanRow; kQ < wQ; kQ++) {
          const FQ = LQ + kQ % 25,
            wQ = qQ + Math.floor(kQ / 25);
          QQ.scanBlocks(FQ, wQ, oQ, FQ + 1, wQ + 1, oQ + 25, this.pufferIndexById, DQ)
        }
        for (let kQ = 0; kQ < DQ.length; kQ += 4) {
          const QQ = DQ[kQ + 3];
          this.found.push({
            pos: [DQ[kQ], DQ[kQ + 1], DQ[kQ + 2]],
            um: QQ,
            puffer: this.pufferList[this.pufferIndexById[QQ] - 1]
          })
        }
        this.scanRow = wQ, 325 === wQ && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(QQ, FQ) {
        const wQ = this.sources.length;
        if (0 !== wQ) {
          this.budget = Math.min(this.budget + Math.min(wQ / 1.2, 12) * FQ, 2);
          for (let FQ = 0; FQ < wQ && this.budget >= 1; FQ++) {
            const FQ = this.sources[this.cursor % wQ];
            this.cursor = (this.cursor + 1) % wQ, QQ.getBlockId(FQ.pos[0], FQ.pos[1], FQ.pos[2]) === FQ.um && (FQ.puffer.puff(QQ, FQ.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const KA = {
        ...iA([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      zA = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function lA(QQ) {
      return 0 === QQ.spots.length ? 0 : Math.min(1 * QQ.level, 4)
    }

    function jA(QQ) {
      return 0 === QQ.glass.length ? 0 : Math.min(.75 * QQ.level, 3)
    }

    function aA(QQ) {
      return `${QQ.ctrl.join(",")}:${QQ.rot}:${QQ.cu},${QQ.cv}:${QQ.w},${QQ.h},${QQ.d}`
    }

    function XA(QQ, FQ) {
      const wQ = FQ.w - 2,
        LQ = FQ.h - 2,
        qQ = FQ.d - 2,
        oQ = [];
      for (let DQ = 0; DQ < wQ * LQ * qQ; DQ++) {
        const kQ = DQ % wQ,
          vQ = Math.floor(DQ / wQ) % qQ,
          mQ = Math.floor(DQ / (wQ * qQ));
        if (kQ > 0 && kQ < wQ - 1 && vQ > 0 && vQ < qQ - 1 && mQ > 0 && mQ < LQ - 1) continue;
        const uQ = dw(FQ, LL(FQ, DQ)),
          HQ = Kx(QQ, uQ);
        if (null !== HQ && "Fuel Rod" === Uw(HQ))
          for (const FQ of zA) {
            const wQ = [uQ[0] + FQ[0], uQ[1] + FQ[1], uQ[2] + FQ[2]];
            VA(QQ, wQ) && oQ.push(hA(wQ, FQ))
          }
      }
      return oQ
    }

    function fA(QQ, FQ) {
      const {
        lo: wQ,
        hi: LQ
      } = Kv(FQ), qQ = [];
      for (let oQ = wQ[0]; oQ < LQ[0]; oQ++)
        for (let FQ = wQ[1]; FQ < LQ[1]; FQ++) {
          const DQ = oQ === wQ[0] || oQ === LQ[0] - 1 || FQ === wQ[1] || FQ === LQ[1] - 1 ? 1 : Math.max(1, LQ[2] - 1 - wQ[2]);
          for (let kQ = wQ[2]; kQ < LQ[2]; kQ += DQ) {
            const DQ = [oQ, FQ, kQ];
            if (!VA(QQ, DQ)) continue;
            const vQ = oQ === wQ[0] ? zA[1] : oQ === LQ[0] - 1 ? zA[0] : kQ === wQ[2] ? zA[5] : kQ === LQ[2] - 1 ? zA[4] : FQ === wQ[1] ? zA[3] : zA[2];
            qQ.push(hA(DQ, vQ))
          }
        }
      return qQ
    }

    function VA(QQ, FQ) {
      const wQ = Kx(QQ, FQ);
      return null !== wQ && "Reactor Glass" === Uw(wQ)
    }

    function hA(QQ, FQ) {
      return [
        [QQ[0] + .5 + .55 * FQ[0], QQ[1] + .5 + .55 * FQ[1], QQ[2] + .5 + .55 * FQ[2]],
        [0 === FQ[0] ? .4 : .02, 0 === FQ[1] ? .4 : .02, 0 === FQ[2] ? .4 : .02]
      ]
    }
    class JA {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(QQ, FQ, wQ, LQ) {
        const qQ = [],
          oQ = new Set;
        for (const mQ of FQ) {
          var DQ, kQ, vQ;
          const {
            box: FQ
          } = mQ;
          if ("reactor" !== mQ.kind || mQ.level <= 0 || (FQ.ctrl[0] - wQ[0]) ** 2 + (FQ.ctrl[1] - wQ[1]) ** 2 + (FQ.ctrl[2] - wQ[2]) ** 2 > 576) continue;
          const uQ = aA(FQ);
          oQ.add(uQ);
          let HQ = this.spots.get(uQ);
          if ((!HQ || LQ - HQ.at > 3e3) && (HQ = {
              at: LQ,
              spots: XA(QQ, FQ),
              glass: fA(QQ, FQ)
            }, this.spots.set(uQ, HQ)), 0 === HQ.spots.length && 0 === HQ.glass.length) continue;
          const bQ = this.sparking.find((QQ => QQ.key === uQ));
          qQ.push({
            key: uQ,
            level: mQ.level,
            spots: HQ.spots,
            glass: HQ.glass,
            budget: null !== (DQ = null === bQ || void 0 === bQ ? void 0 : bQ.budget) && void 0 !== DQ ? DQ : 0,
            cursor: null !== (kQ = null === bQ || void 0 === bQ ? void 0 : bQ.cursor) && void 0 !== kQ ? kQ : 0,
            glassBudget: null !== (vQ = null === bQ || void 0 === bQ ? void 0 : bQ.glassBudget) && void 0 !== vQ ? vQ : 0
          })
        }
        for (const mQ of this.spots.keys()) oQ.has(mQ) || this.spots.delete(mQ);
        this.sparking = qQ
      }
      emit(QQ, FQ, wQ) {
        var LQ;
        if (0 === this.sparking.length || !QQ.particlesEnabled() || wQ === this.lastFrame) return;
        this.lastFrame = wQ;
        let qQ = 0,
          oQ = 0;
        for (const xQ of this.sparking) qQ += lA(xQ), oQ += jA(xQ);
        const DQ = qQ > 8 ? 8 / qQ : 1,
          kQ = oQ > 6 ? 6 / oQ : 1;
        let vQ, mQ = null,
          uQ = null;
        for (const xQ of this.sparking) xQ.budget = Math.min(xQ.budget + lA(xQ) * DQ * FQ, 2), xQ.budget >= 1 && (!mQ || xQ.budget > mQ.budget) && (mQ = xQ), xQ.glassBudget = Math.min(xQ.glassBudget + jA(xQ) * kQ * FQ, 2), xQ.glassBudget >= 1 && (!uQ || xQ.glassBudget > uQ.glassBudget) && (uQ = xQ);
        if (mQ) mQ.budget--, vQ = mQ.spots[mQ.cursor++ % mQ.spots.length];
        else {
          if (!uQ) return;
          uQ.glassBudget--, vQ = uQ.glass[Math.floor(Math.random() * uQ.glass.length)]
        }
        const [HQ, bQ] = vQ, YQ = null !== (LQ = this.emitter) && void 0 !== LQ ? LQ : this.create(QQ, HQ, bQ);
        YQ.moveTo(HQ, bQ), YQ.emit(KA.count)
      }
      dispose() {
        var QQ;
        null === (QQ = this.emitter) || void 0 === QQ || QQ.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(QQ, FQ, wQ) {
        const LQ = Math.ceil(14 * KA.count * KA.life[1]) + KA.count;
        return this.emitter = QQ.createParticles(UA(KA, LQ), {
          pos: FQ,
          half: wQ
        }), this.emitter
      }
    }
    const EA = [2, 3.2],
      nA = 1 / 3,
      gA = 1 / .6,
      PA = {
        texture: rA,
        MH: Math.ceil(18 * EA[1]) + 4,
        minLifeTime: EA[0] / gA,
        maxLifeTime: EA[1] / gA,
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
        blendMode: jk.f.Standard
      };
    class ZA {
      constructor(QQ) {
        this.plans = QQ, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new JA, this.frame = 0, this.outline = new pA(QQ)
      }
      onAfterRender(QQ, FQ, wQ) {
        const LQ = performance.now(),
          qQ = 0 === this.lastMs ? 0 : Math.min(LQ - this.lastMs, 250) / 1e3;
        if (this.lastMs = LQ, this.outline.fade(QQ, LQ), this.puff(QQ, qQ, wQ), this.sparks.emit(QQ, qQ, this.frame++), LQ - this.lastCheckMs < 150) return;
        this.lastCheckMs = LQ;
        const oQ = this.plans.all().filter((QQ => QQ.formed && yA(QQ.box.ctrl, wQ) <= 4096));
        this.plumes = oQ.filter((QQ => "reactor" === QQ.kind && QQ.level > 0)).map((QQ => ({
          box: QQ.box,
          level: QQ.level
        }))), this.updateHums(QQ, FQ, oQ, wQ), this.sparks.update(QQ, oQ, wQ, LQ), this.chimeFormed(QQ, FQ, oQ, LQ)
      }
      dispose(QQ) {
        var FQ;
        this.outline.dispose(QQ), null === (FQ = this.steam) || void 0 === FQ || FQ.dispose(), this.steam = null, this.sparks.dispose();
        for (const wQ of this.hums.values()) wQ.stop();
        this.hums.clear()
      }
      chimeFormed(QQ, FQ, wQ, LQ) {
        const qQ = this.outline.check(QQ, wQ, LQ);
        qQ && QQ.playSound(FQ, "exp_levelup", .6, 1, {
          BF: [qQ.box.ctrl[0] + .5, qQ.box.ctrl[1], qQ.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(QQ, FQ, wQ) {
        const LQ = this.plumes;
        if (0 === LQ.length || !QQ.particlesEnabled()) return void(this.plumeBudget = 0);
        const qQ = LQ.reduce(((QQ, FQ) => QQ + 3 * FQ.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + qQ * FQ, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let oQ = this.plumeCursor % (qQ / 3);
        this.plumeCursor++;
        let DQ = LQ[0];
        for (const HQ of LQ) {
          if (oQ < HQ.level) {
            DQ = HQ;
            break
          }
          oQ -= HQ.level
        }
        const {
          lo: kQ,
          hi: vQ
        } = Kv(DQ.box);
        if (function(QQ, FQ, wQ) {
            const LQ = Math.max(QQ[0] - wQ[0], 0, wQ[0] - FQ[0]),
              qQ = Math.max(QQ[2] - wQ[2], 0, wQ[2] - FQ[2]);
            return Math.hypot(LQ, wQ[1] - FQ[1], qQ)
          }(kQ, vQ, wQ) < 6 && Math.random() > nA) return;
        const mQ = [(kQ[0] + vQ[0]) / 2, vQ[1] + .05, (kQ[2] + vQ[2]) / 2],
          uQ = [(vQ[0] - kQ[0]) / 2 - .5, .05, (vQ[2] - kQ[2]) / 2 - .5];
        this.steam ??= QQ.createParticles(PA, {
          pos: mQ,
          half: uQ
        }), this.steam.moveTo(mQ, uQ), this.steam.emit(1)
      }
      updateHums(QQ, FQ, wQ, LQ) {
        const qQ = new Map;
        for (const DQ of wQ) "reactor" === DQ.kind && DQ.level > 0 && yA(DQ.box.ctrl, LQ) <= 576 && qQ.set(`${oQ=DQ.box.ctrl,`${oQ[0]},${oQ[1]},${oQ[2]}`}:${DQ.level}`, DQ);
        var oQ;
        for (const [DQ, kQ] of this.hums) qQ.has(DQ) || (kQ.stop(), this.hums.delete(DQ));
        for (const [DQ, kQ] of qQ) {
          if (this.hums.has(DQ)) continue;
          const {
            lo: wQ,
            hi: LQ
          } = Kv(kQ.box), qQ = [(wQ[0] + LQ[0]) / 2, wQ[1], (wQ[2] + LQ[2]) / 2], oQ = QQ.playSound(FQ, "rocketEngineLoop", .08 + .06 * kQ.level, .55, {
            BF: qQ,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          oQ && this.hums.set(DQ, oQ)
        }
      }
    }

    function yA(QQ, FQ) {
      return (QQ[0] - FQ[0]) ** 2 + (QQ[1] - FQ[1]) ** 2 + (QQ[2] - FQ[2]) ** 2
    }
    class BA {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      mp(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const LQ = [QQ.baf2BombAt[0], QQ.baf2BombAt[1], QQ.baf2BombAt[2]],
          qQ = QQ.baf2BombR;
        if (QQ.baf2BombBoom) {
          const QQ = Math.hypot(FQ[0] - LQ[0], FQ[1] - LQ[1], FQ[2] - LQ[2]);
          this.GA({
            fuse: null,
            blast: {
              at: LQ,
              r: qQ,
              receivedAt: wQ,
              distance: QQ,
              flash: QQ <= 3 * qQ
            }
          })
        } else this.GA({
          ...this.snapshot,
          fuse: QQ.baf2BombMs > 0 ? {
            at: LQ,
            r: qQ,
            endsAt: wQ + QQ.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      GA(QQ) {
        this.snapshot = QQ;
        for (const FQ of this.listeners) FQ()
      }
    }
    const dA = (0, LQ.memo)((function(QQ) {
      var FQ;
      let {
        store: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, Oq.y)(), [oQ, DQ] = (0, LQ.useState)((() => wQ.get())), [kQ, vQ] = (0, LQ.useState)((() => performance.now()));
      (0, LQ.useEffect)((() => (DQ(wQ.get()), wQ.subscribe((() => {
        DQ(wQ.get()), vQ(performance.now())
      })))), [wQ]);
      const {
        fuse: mQ,
        blast: uQ
      } = oQ;
      (0, LQ.useEffect)((() => {
        if (!mQ) return;
        const QQ = setInterval((() => {
          vQ(performance.now())
        }), 250);
        return () => {
          clearInterval(QQ)
        }
      }), [mQ]);
      const [HQ, bQ] = (0, LQ.useState)(!1);
      (0, LQ.useEffect)((() => {
        if (null === uQ || void 0 === uQ || !uQ.flash) return;
        bQ(!0);
        const QQ = setTimeout((() => {
          bQ(!1)
        }), 2500);
        return () => {
          clearTimeout(QQ)
        }
      }), [uQ]);
      const YQ = mQ ? function(QQ, FQ) {
        return QQ.endsAt <= FQ ? 0 : Math.ceil((QQ.endsAt - FQ) / 1e3)
      }(mQ, kQ) : 0;
      return (0, Wo.jsxs)(Wo.Fragment, {
        children: [YQ > 0 && (0, Wo.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: qQ("buildAFactory2Game:bombCountdown", {
            amount: String(YQ),
            radius: String(null !== (FQ = null === mQ || void 0 === mQ ? void 0 : mQ.r) && void 0 !== FQ ? FQ : 0)
          })
        }), HQ && (0, Wo.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function Qt(QQ) {
      const FQ = Math.min(4, Math.max(1, QQ / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * QQ / 4)),
        capSpread: Math.min(5 * QQ / 8, 24 * FQ),
        capThick: 6 * FQ,
        stemHalfWidth: 3 * FQ,
        puffScale: FQ
      }
    }
    class Ft {
      constructor() {
        this.ym = !1
      }
      hold(QQ) {
        QQ.getCameraFar() < 1e3 && (QQ.setCameraFar(1e3), this.ym = !0)
      }
      release(QQ) {
        this.ym && (this.ym = !1, QQ.setCameraFar(null))
      }
    }
    const wt = 1 / .6,
      Lt = [.2, .1, .2],
      qt = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      ot = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: jk.f.Standard,
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
      Dt = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: jk.f.Standard,
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
      kt = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: jk.f.Standard,
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
      vt = {
        texture: rA,
        MH: Math.ceil(120) + 4,
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
        blendMode: jk.f.Add
      };
    class mt {
      constructor(QQ) {
        this.store = QQ, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new Ft, this.timers = []
      }
      onAfterRender(QQ, FQ) {
        const wQ = performance.now(),
          LQ = 0 === this.lastMs ? 0 : Math.min(wQ - this.lastMs, 250) / 1e3;
        this.lastMs = wQ;
        const {
          fuse: qQ,
          blast: oQ
        } = this.store.get();
        null !== oQ && oQ !== this.shownBlast && (this.shownBlast = oQ, this.startBlast(QQ, FQ, oQ, wQ));
        const DQ = QQ.particlesEnabled();
        null !== qQ && qQ.endsAt > wQ && DQ ? this.emitBeacon(QQ, qQ, LQ, wQ) : this.beaconBudget = 0, null !== this.cloud && (wQ - this.cloud.startMs > 33e3 ? this.disposeCloud(QQ) : (this.far.hold(QQ), DQ && this.emitCloud(QQ, LQ, wQ)))
      }
      dispose(QQ) {
        var FQ;
        null === (FQ = this.beacon) || void 0 === FQ || FQ.dispose(), this.beacon = null, this.disposeCloud(QQ);
        for (const wQ of this.timers) clearTimeout(wQ);
        this.timers.length = 0
      }
      emitBeacon(QQ, FQ, wQ, LQ) {
        const qQ = FQ.endsAt - LQ < 5e3 ? 350 : 1e3,
          oQ = .5 + .5 * Math.sin(2 * Math.PI * LQ / qQ);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * oQ * wQ, 4), this.beaconBudget < 1) return;
        const DQ = Math.floor(this.beaconBudget);
        this.beaconBudget -= DQ;
        const [kQ, vQ, mQ] = FQ.at, uQ = [kQ + .5, vQ + 1.1, mQ + .5];
        this.beacon ??= QQ.createParticles(vt, {
          pos: uQ,
          half: Lt
        }), this.beacon.moveTo(uQ), this.beacon.emit(DQ)
      }
      startBlast(QQ, FQ, wQ, LQ) {
        var qQ;
        null === (qQ = this.beacon) || void 0 === qQ || qQ.dispose(), this.beacon = null, this.disposeCloud(QQ);
        const oQ = (0, zk.isMobile)() ? .5 : 1;
        this.streams = [ot, Dt, kt].map((QQ => {
          const FQ = Math.round(QQ.count * oQ);
          return {
            spec: QQ,
            particles: null,
            rate: FQ / ((QQ.toMs - QQ.fromMs) / 1e3),
            budget: 0,
            left: FQ
          }
        })), this.cloud = {
          blast: wQ,
          startMs: LQ
        };
        const DQ = Math.max(.25, 1 - wQ.distance / (6 * wQ.r)),
          kQ = wQ.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [wQ, LQ, qQ] of qt) Ht(QQ, FQ, wQ, DQ * LQ, qQ)
        }), kQ))
      }
      emitCloud(QQ, FQ, wQ) {
        const {
          blast: LQ,
          startMs: qQ
        } = this.cloud, oQ = wQ - qQ, [DQ, kQ, vQ] = LQ.at, mQ = Qt(LQ.r);
        for (const uQ of this.streams) {
          const {
            spec: wQ
          } = uQ;
          if (uQ.left <= 0 || oQ < wQ.fromMs) continue;
          uQ.budget += uQ.rate * FQ;
          const qQ = Math.min(Math.floor(uQ.budget), uQ.left);
          if (qQ < 1) continue;
          uQ.budget -= qQ, uQ.left -= qQ;
          const HQ = uQ.particles ??= this.createStream(QQ, wQ, LQ);
          if (wQ === ot) {
            const QQ = mQ.stemHalfWidth;
            HQ.moveTo([DQ, kQ + 1, vQ], [QQ, 1, QQ])
          } else if (wQ === Dt) {
            const QQ = mQ.capSpread * Math.min(1, (oQ - wQ.fromMs) / 3e3),
              FQ = Math.sqrt(Math.random()),
              LQ = 2 * Math.random() * Math.PI,
              qQ = Math.cos(LQ) * FQ,
              uQ = Math.sin(LQ) * FQ,
              bQ = DQ + qQ * QQ,
              YQ = vQ + uQ * QQ,
              xQ = mQ.capThick,
              AQ = kQ + mQ.capHeight + xQ * (1 - FQ * FQ) * 2;
            HQ.setDirections([.7 * qQ, .05, .7 * uQ], [qQ, .2, uQ]), HQ.moveTo([bQ, AQ, YQ], [xQ, xQ, xQ])
          } else {
            this.ringAngle += 2.39996;
            const QQ = Math.cos(this.ringAngle),
              FQ = Math.sin(this.ringAngle);
            HQ.setDirections([QQ, .05, FQ], [QQ, .1, FQ]), HQ.moveTo([DQ + 2 * QQ, kQ + .5, vQ + 2 * FQ], [0, .5, 0])
          }
          HQ.emit(qQ)
        }
      }
      createStream(QQ, FQ, wQ) {
        const {
          r: LQ
        } = wQ, qQ = Math.max(FQ.life[0], LQ / 25), oQ = FQ === kt ? [.9 * qQ, qQ] : FQ.life, DQ = Qt(LQ), kQ = FQ === kt ? 1 : DQ.puffScale, vQ = {
          texture: rA,
          MH: FQ.count + 4,
          minLifeTime: oQ[0] / wt,
          maxLifeTime: oQ[1] / wt,
          minSize: FQ.size[0] * kQ,
          maxSize: FQ.size[1] * kQ,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, FQ.gravity * wt * wt, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: FQ.from[0],
            maxColor: FQ.from[1]
          }, {
            timeFraction: .6,
            minColor: ut(FQ.from[0], FQ.to[0]),
            maxColor: ut(FQ.from[1], FQ.to[1])
          }, {
            timeFraction: 1,
            minColor: FQ.to[0],
            maxColor: FQ.to[1]
          }],
          blendMode: FQ.blend
        };
        if (FQ === ot) {
          const QQ = DQ.capHeight / ((oQ[0] + oQ[1]) / 2);
          vQ.minEmitPower = .9 * QQ * wt, vQ.maxEmitPower = 1.05 * QQ * wt, vQ.dir1 = [-.1, 1, -.1], vQ.dir2 = [.1, 1, .1]
        } else FQ === Dt ? (vQ.minEmitPower = 1.2, vQ.maxEmitPower = 2, vQ.dir1 = [-1, .05, -1], vQ.dir2 = [1, .2, 1]) : (vQ.minEmitPower = 39.583333333333336, vQ.maxEmitPower = 41.66666666666667, vQ.dir1 = [1, 0, 0], vQ.dir2 = [1, 0, 0]);
        return QQ.createParticles(vQ, {
          pos: wQ.at
        })
      }
      disposeCloud(QQ) {
        for (const wQ of this.streams) {
          var FQ;
          null === (FQ = wQ.particles) || void 0 === FQ || FQ.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(QQ)
      }
    }

    function ut(QQ, FQ) {
      return [(QQ[0] + FQ[0]) / 2, (QQ[1] + FQ[1]) / 2, (QQ[2] + FQ[2]) / 2, .75 * QQ[3]]
    }

    function Ht(QQ, FQ, wQ, LQ, qQ) {
      try {
        QQ.playSound(FQ, wQ, LQ, qQ)
      } catch (oQ) {
        console.error(oQ)
      }
    }
    const bt = {
        MH: 720,
        perS: 100
      },
      Yt = {
        MH: 320,
        perS: 44
      };
    class xt {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(QQ, FQ) {
        this.zone = {
          centre: [...QQ.centre],
          r: QQ.r,
          band: QQ.band ? [QQ.band[0], QQ.band[1]] : void 0
        }, this.endsAt = FQ
      }
      stop() {
        this.zone = null
      }
      mp(QQ, FQ) {
        const {
          baf2FalloutMs: wQ,
          baf2FalloutAt: LQ,
          baf2FalloutR: qQ,
          baf2FalloutY: oQ
        } = QQ;
        wQ > 0 && LQ && void 0 !== qQ ? this.start({
          centre: LQ,
          r: qQ,
          band: oQ
        }, FQ + wQ) : this.stop()
      }
      perS(QQ, FQ, wQ) {
        const LQ = this.zone;
        if (!LQ) return 0;
        const qQ = this.endsAt - QQ;
        return qQ <= 0 ? (this.zone = null, 0) : LQ.band && (FQ[1] < LQ.band[0] || FQ[1] > LQ.band[1]) || Math.hypot(FQ[0] - LQ.centre[0], FQ[2] - LQ.centre[2]) > LQ.r ? 0 : wQ.perS * Math.min(1, qQ / 5e3)
      }
    }
    const At = [5, 7],
      tt = [24, 8, 24],
      et = .5,
      Mt = 1 / .6,
      Gt = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class pt {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, zk.isMobile)();
        this.state = new xt, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(QQ) {
          return QQ ? Yt : bt
        }(QQ)
      }
      startFallout(QQ, FQ) {
        this.state.start(QQ, FQ)
      }
      stopFallout() {
        this.state.stop()
      }
      mp(QQ) {
        this.state.mp(QQ, performance.now())
      }
      onAfterRender(QQ, FQ) {
        var wQ;
        const LQ = performance.now(),
          qQ = 0 === this.lastMs ? 0 : Math.min(LQ - this.lastMs, 250) / 1e3;
        this.lastMs = LQ;
        const oQ = this.state.perS(LQ, FQ, this.tier);
        if (oQ <= 0 || !QQ.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + oQ * qQ, oQ / 4);
        const DQ = Math.floor(this.budget);
        if (DQ < 1) return;
        this.budget -= DQ;
        const kQ = this.at;
        kQ[0] = FQ[0], kQ[1] = FQ[1] + 12, kQ[2] = FQ[2];
        const vQ = null !== (wQ = this.systems) && void 0 !== wQ ? wQ : this.create(QQ, kQ),
          mQ = this.amounts;
        mQ[0] = 0, mQ[1] = 0;
        for (let uQ = 0; uQ < DQ; uQ++) mQ[Math.random() < .3 ? 1 : 0]++;
        for (let uQ = 0; uQ < vQ.length; uQ++) mQ[uQ] > 0 && (vQ[uQ].moveTo(kQ, tt), vQ[uQ].emit(mQ[uQ]))
      }
      dispose() {
        for (const FQ of null !== (QQ = this.systems) && void 0 !== QQ ? QQ : []) {
          var QQ;
          FQ.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(QQ, FQ) {
        return this.systems = Gt.map((wQ => {
          let {
            rgba: [LQ, qQ, oQ, DQ],
            share: kQ
          } = wQ;
          const vQ = {
            texture: "square_particle",
            MH: Math.ceil(this.tier.MH * kQ),
            minLifeTime: At[0] / Mt,
            maxLifeTime: At[1] / Mt,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [et, -1, et],
            colorGradients: [{
              timeFraction: 0,
              minColor: [LQ, qQ, oQ, 0]
            }, {
              timeFraction: .15,
              minColor: [LQ, qQ, oQ, DQ]
            }, {
              timeFraction: .8,
              minColor: [LQ, qQ, oQ, DQ]
            }, {
              timeFraction: 1,
              minColor: [LQ, qQ, oQ, 0]
            }],
            blendMode: jk.f.Standard
          };
          return QQ.createParticles(vQ, {
            pos: FQ,
            half: tt
          })
        })), this.systems
      }
    }
    const ct = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function Ct(QQ) {
      const FQ = /\|rot(\d)/.exec(QQ);
      return ct[FQ ? Number(FQ[1]) : 1]
    }
    var St = wQ(617),
      it = wQ(38009);
    const Wt = new Set(St.i);

    function Rt(QQ) {
      if (-2 !== QQ.count) return null;
      const FQ = hQ(QQ.item);
      return null !== FQ && Wt.has(FQ) ? FQ : null
    }

    function Ot(QQ) {
      const {
        width: FQ,
        height: wQ
      } = (0, it.b)(QQ).hitBoxDimensions;
      return .55 / Math.max(FQ, wQ)
    }

    function st(QQ, FQ, wQ) {
      if (!wQ) return !1;
      const LQ = QQ[0] + .5 - FQ[0],
        qQ = QQ[1] + .5 - FQ[1],
        oQ = QQ[2] + .5 - FQ[2];
      return LQ * LQ + qQ * qQ + oQ * oQ <= 576
    }

    function rt(QQ, FQ) {
      return Math.atan2(QQ[0], QQ[2]) + Math.PI + FQ
    }

    function It(QQ, FQ) {
      const wQ = 2 * Math.PI;
      return (QQ + wQ * FQ / 1e4) % wQ
    }
    class Ut {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = QQ, this.now = FQ, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = QQ.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(QQ, FQ) {
        if (0 === this.farms.size) return;
        const wQ = this.now(),
          LQ = Number.isNaN(this.frameMs) ? 0 : Math.min(wQ - this.frameMs, 100);
        this.frameMs = wQ, wQ - this.checkedMs >= 1e3 && (this.checkedMs = wQ, this.check(QQ, FQ));
        for (const qQ of this.farms.values()) qQ.shown && qQ.running && null !== qQ.model && LQ > 0 && (qQ.spin = It(qQ.spin, LQ), qQ.model.setPose(qQ.feet, rt(qQ.front, qQ.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const QQ of this.farms.values()) this.drop(QQ);
        this.farms.clear()
      }
      sync() {
        const QQ = new Set;
        for (const FQ of this.labels.list()) {
          const wQ = Rt(FQ);
          if (null === wQ) continue;
          QQ.add(FQ.key);
          const LQ = this.farms.get(FQ.key);
          if ((null === LQ || void 0 === LQ ? void 0 : LQ.mob) === wQ) continue;
          LQ && this.drop(LQ);
          const [qQ, oQ, DQ] = FQ.pos;
          this.farms.set(FQ.key, {
            pos: FQ.pos,
            feet: [qQ + .5, oQ + 1, DQ + .5],
            mob: wQ,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [FQ, wQ] of this.farms) QQ.has(FQ) || (this.drop(wQ), this.farms.delete(FQ));
        this.checkedMs = -1 / 0
      }
      check(QQ, FQ) {
        for (const wQ of this.farms.values()) {
          const [LQ, qQ, oQ] = wQ.pos, DQ = Kx(QQ, wQ.pos);
          null !== DQ && Uw(DQ) === KQ && st(wQ.pos, FQ, "Air" === Kx(QQ, [LQ, qQ + 1, oQ])) ? (wQ.running = DQ.endsWith("|Running"), wQ.front = Ct(DQ), null === wQ.model && (wQ.model = QQ.createMobModel(wQ.mob, Ot(wQ.mob)), null === wQ.model) || (wQ.model.setPose(wQ.feet, rt(wQ.front, wQ.spin)), wQ.shown || (wQ.model.setVisible(!0), wQ.shown = !0))) : (wQ.shown && null !== wQ.model && wQ.model.setVisible(!1), wQ.shown = !1)
        }
      }
      drop(QQ) {
        var FQ;
        null === (FQ = QQ.model) || void 0 === FQ || FQ.dispose(), QQ.model = null, QQ.shown = !1
      }
    }
    class Nt {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(QQ) {
        var FQ;
        this.island = QQ.baf2ColIsland, this.islandSite = (FQ = QQ.baf2ColSite) && 8 === FQ.length ? {
          spawnXZ: [FQ[0], FQ[1]],
          coreXZ: [FQ[2], FQ[3]],
          minXZ: [FQ[4], FQ[5]],
          maxXZ: [FQ[6], FQ[7]]
        } : null, this.views = QQ.baf2ColList.map((QQ => ({
          entry: kq(QQ)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(QQ) {
        this.status = QQ, this.emit()
      }
      onOpen(QQ) {
        this.openHeld = QQ
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
        return this.views.map((QQ => QQ.entry))
      }
      entryAtRoot(QQ) {
        var FQ;
        return null === (FQ = this.views.find((FQ => {
          let {
            entry: wQ
          } = FQ;
          return wQ.focus[0] === QQ[0] && wQ.focus[1] === QQ[1] + 1 && wQ.focus[2] === QQ[2]
        }))) || void 0 === FQ ? void 0 : FQ.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(QQ, FQ) {
        return Vv(this.entries(), QQ, FQ)
      }
      lookSource() {
        return {
          handles: QQ => YL(QQ) >= 0 || xL(QQ),
          line: (QQ, FQ) => this.lookLine(QQ, FQ),
          version: () => this.beamsVersion
        }
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const QQ of this.listeners) QQ()
      }
    }
    const Tt = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((QQ => QQ / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((QQ => [QQ, QQ + 1, QQ + 2, QQ, QQ + 2, QQ + 3]))
    };

    function Kt(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      let kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const vQ = Math.cos(kQ),
        mQ = Math.sin(kQ),
        uQ = QQ.positions.length / 3,
        {
          positions: HQ,
          indices: bQ
        } = Tt;
      for (let YQ = 0; YQ < HQ.length; YQ += 3) {
        const kQ = HQ[YQ] * qQ,
          uQ = HQ[YQ + 2] * DQ;
        QQ.positions.push(FQ + kQ * vQ + uQ * mQ, wQ + HQ[YQ + 1] * oQ, LQ - kQ * mQ + uQ * vQ)
      }
      for (const YQ of bQ) QQ.indices.push(uQ + YQ)
    }

    function zt(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return FQ < 1 ? {
        rgb: QQ,
        alpha: FQ
      } : {
        rgb: QQ,
        alpha: 1,
        opaque: !0
      }
    }
    class lt {
      constructor(QQ, FQ) {
        this.style = QQ, this.perSource = FQ, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(QQ) {
        this.sources = QQ, 0 === QQ.length && (this.budget = 0)
      }
      fH(QQ, FQ, wQ) {
        const LQ = this.sources.length;
        if (0 !== LQ) {
          var qQ, oQ;
          this.budget = Math.min(this.budget + (qQ = LQ, oQ = this.perSource, Math.min(qQ * oQ, Lm) * FQ), 2);
          for (let FQ = 0; FQ < LQ && this.budget >= 1; FQ++) {
            const FQ = this.sources[this.cursor % LQ];
            this.cursor = (this.cursor + 1) % LQ;
            if (!(Math.max(Math.abs(FQ.x - wQ[0]), Math.abs(FQ.y - wQ[1]), Math.abs(FQ.z - wQ[2])) > 32)) return this.puff(QQ, FQ), void this.budget--
          }
        }
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.dispose(), this.particles = null, this.sources = []
      }
      puff(QQ, FQ) {
        let {
          x: wQ,
          y: LQ,
          z: qQ,
          h: oQ,
          faces: DQ
        } = FQ;
        const kQ = function(QQ, FQ, wQ, LQ, qQ) {
            const [oQ, DQ, kQ] = qQ[Math.floor(Math.random() * qQ.length)], vQ = .04, mQ = (QQ, FQ, wQ) => QQ > 0 ? FQ + wQ + vQ : QQ < 0 ? FQ - vQ : FQ + .1, uQ = (QQ, FQ, wQ) => QQ > 0 ? FQ + wQ + vQ : QQ < 0 ? FQ - vQ : FQ + wQ - .1, HQ = [mQ(oQ, QQ, 1), mQ(DQ, FQ, LQ), mQ(kQ, wQ, 1)], bQ = [uQ(oQ, QQ, 1), uQ(DQ, FQ, LQ), uQ(kQ, wQ, 1)];
            return {
              pos: [(HQ[0] + bQ[0]) / 2, (HQ[1] + bQ[1]) / 2, (HQ[2] + bQ[2]) / 2],
              half: [(bQ[0] - HQ[0]) / 2, (bQ[1] - HQ[1]) / 2, (bQ[2] - HQ[2]) / 2],
              out: [oQ, DQ, kQ]
            }
          }(wQ, LQ, qQ, oQ, DQ),
          {
            style: vQ
          } = this,
          mQ = this.particles ??= QQ.createParticles(UA(vQ, Math.ceil(vQ.count * Lm * vQ.life[1]) + 4), kQ);
        mQ.moveTo(kQ.pos, kQ.half);
        const [uQ, HQ, bQ] = kQ.out, YQ = vQ.spread;
        mQ.setDirections([uQ - YQ, .6 + HQ, bQ - YQ], [uQ + YQ, 1 + HQ, bQ + YQ]), mQ.emit(vQ.count)
      }
    }
    const jt = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Xt {
      constructor() {
        this.green = new lt(om.green, Fm), this.pink = new lt(om.pink, wm), this.colliders = [], this.lastMs = 0
      }
      setSources(QQ) {
        this.colliders = QQ;
        const FQ = [],
          wQ = [];
        for (const LQ of QQ) {
          const [QQ, qQ, oQ] = LQ.focus;
          FQ.push({
            x: QQ,
            y: qQ - 1,
            z: oQ,
            h: 2,
            faces: jt
          });
          for (let FQ = 0; FQ < 4; FQ++) {
            if (!LQ.live[FQ]) continue;
            const [QQ, qQ, oQ] = eL(LQ.focus, FQ, kL.LASER_D), [DQ, , kQ] = tL[FQ], vQ = jt.filter((QQ => QQ[0] !== DQ || QQ[2] !== kQ || 0 !== QQ[1]));
            wQ.push({
              x: QQ,
              y: qQ,
              z: oQ,
              h: 1,
              faces: vQ
            })
          }
        }
        this.green.setSources(FQ), this.pink.setSources(wQ)
      }
      onAfterRender(QQ) {
        const FQ = performance.now(),
          wQ = 0 === this.lastMs ? 0 : Math.min(FQ - this.lastMs, 250) / 1e3;
        if (this.lastMs = FQ, 0 === this.colliders.length || !QQ.particlesEnabled()) return;
        const LQ = QQ.getCameraPosition();
        this.green.fH(QQ, wQ, LQ), this.pink.fH(QQ, wQ, LQ)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const ft = 1.04,
      Vt = zt([1, 120 / 255, 220 / 255]),
      ht = zt([1, .25, .25], .35);
    class Jt {
      constructor(QQ) {
        this.store = QQ, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Xt
      }
      onAfterRender(QQ) {
        this.store.version() !== this.builtVersion && this.rebuild(QQ);
        const FQ = performance.now();
        for (const wQ of this.beams) {
          const LQ = 1 + .35 * Math.sin(FQ / 700 * Math.PI * 2 + wQ.phase);
          QQ.setGameMesh(wQ.mesh, {
            scale: [wQ.alongX ? 1 : LQ, LQ, wQ.alongX ? LQ : 1]
          })
        }
        this.glow.onAfterRender(QQ)
      }
      dispose(QQ) {
        this.clear(QQ), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(QQ) {
        this.clear(QQ), this.builtVersion = this.store.version();
        const FQ = [];
        for (const {
            entry: wQ
          }
          of this.store.colliders()) wQ.on && wQ.live.some(Boolean) && (this.addBeams(QQ, wQ), FQ.push(wQ)), wQ.blockers.length > 0 && this.addMarkers(QQ, wQ);
        this.glow.setSources(FQ)
      }
      addBeams(QQ, FQ) {
        const [wQ, LQ, qQ] = FQ.focus, oQ = Qm - .25, DQ = (.25 + Qm) / 2;
        for (let kQ = 0; kQ < 4; kQ++) {
          if (!FQ.live[kQ]) continue;
          const [vQ, , mQ] = tL[kQ], uQ = 0 !== vQ, HQ = {
            positions: [],
            indices: []
          };
          Kt(HQ, 0, 0, 0, uQ ? oQ : .2, .2, uQ ? .2 : oQ);
          const bQ = [wQ + .5 + vQ * DQ, LQ + .5, qQ + .5 + mQ * DQ],
            YQ = QQ.createGameMesh(HQ, Vt, bQ);
          this.meshes.push(YQ), this.beams.push({
            mesh: YQ,
            alongX: uQ,
            phase: kQ * Math.PI / 2
          })
        }
      }
      addMarkers(QQ, FQ) {
        const wQ = FQ.blockers[0],
          LQ = {
            positions: [],
            indices: []
          };
        for (const [qQ, oQ, DQ] of FQ.blockers) Kt(LQ, qQ - wQ[0] + .5, oQ - wQ[1] + .5, DQ - wQ[2] + .5, ft, ft, ft);
        this.meshes.push(QQ.createGameMesh(LQ, ht, wQ))
      }
      clear(QQ) {
        for (const FQ of this.meshes) QQ.disposeGameMesh(FQ);
        this.meshes = [], this.beams = []
      }
    }
    const Et = [.56, .83, 1],
      nt = [1, .73, .08],
      gt = [1, .25, .25],
      Pt = [.85, .85, .85],
      Zt = [.3, .45, .6];

    function yt(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const DQ = qQ / 2,
        kQ = qQ + oQ;
      for (const vQ of [-DQ, DQ])
        for (const qQ of [-DQ, DQ]) Kt(QQ, FQ, wQ + vQ, LQ + qQ, kQ, oQ, oQ), Kt(QQ, FQ + vQ, wQ, LQ + qQ, oQ, kQ, oQ), Kt(QQ, FQ + vQ, wQ + qQ, LQ, oQ, oQ, kQ)
    }

    function Bt(QQ) {
      return FQ => QQ.isBlockInLoadedChunk(FQ[0], FQ[1], FQ[2]) && 0 === QQ.getBlockId(FQ[0], FQ[1], FQ[2])
    }

    function dt(QQ) {
      return QQ.map((QQ => {
        let {
          free: FQ,
          blocked: wQ,
          gaps: LQ,
          supports: qQ
        } = QQ;
        return `${FQ.join(";")}|${wQ.join(";")}|${LQ.join(";")}|${qQ.join(";")}`
      })).join("/")
    }

    function Qe(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const oQ = FQ[0],
        DQ = {
          positions: [],
          indices: []
        };
      for (const [kQ, vQ, mQ] of FQ) yt(DQ, kQ - oQ[0] + .5, vQ - oQ[1] + .5, mQ - oQ[2] + .5, LQ, qQ);
      return QQ.createGameMesh(DQ, wQ, oQ)
    }
    class Fe {
      constructor(QQ) {
        this.store = QQ, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(QQ, FQ, wQ) {
        var LQ;
        const qQ = null === (LQ = QQ.owQ(FQ)) || void 0 === LQ ? void 0 : LQ.name;
        if (qQ !== mL && qQ !== vL) return void("" !== this.shownKey && this.show(QQ, "", []));
        const oQ = performance.now();
        if (oQ - this.lastCheckMs >= 200 && (this.lastCheckMs = oQ, qQ === mL ? this.check(QQ, wQ) : this.preview(QQ, wQ)), this.pulses.length > 0) {
          const FQ = 1 + .12 * Math.sin(oQ / 1e3 * 1.25 * Math.PI * 2),
            wQ = [FQ, FQ, FQ];
          for (const LQ of this.pulses) QQ.setGameMesh(LQ, {
            scale: wQ
          })
        }
      }
      dispose(QQ) {
        this.clear(QQ), this.shownKey = ""
      }
      check(QQ, FQ) {
        const wQ = Bt(QQ),
          LQ = [];
        for (const {
            entry: oQ
          }
          of this.store.colliders()) {
          oQ.focus.every(((QQ, wQ) => Math.abs(QQ + .5 - FQ[wQ]) <= kL.GHOST_REACH)) && LQ.push(dv(oQ, wQ))
        }
        const qQ = dt(LQ);
        qQ !== this.shownKey && this.show(QQ, qQ, LQ)
      }
      preview(QQ, FQ) {
        const wQ = QQ.getTargetedBlock(),
          LQ = wQ ? [wQ.nY[0], wQ.nY[1], wQ.nY[2]] : null,
          qQ = null !== LQ && LQ.every(((QQ, wQ) => Math.abs(QQ + .5 - FQ[wQ]) <= 8)),
          oQ = this.store.site(),
          DQ = qQ && oQ ? function(QQ, FQ, wQ) {
            const LQ = AL(QQ);
            if (!LQ.every(FQ)) return null;
            const qQ = pL(QQ, wQ);
            return {
              column: LQ,
              spots: dv({
                focus: LQ[1],
                lasers: [!1, !1, !1, !1],
                open: qQ,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, FQ),
              fits: qQ.filter(Boolean).length >= kL.MIN_SPOTS
            }
          }(LQ, Bt(QQ), oQ) : null,
          kQ = DQ ? [DQ.spots] : [],
          vQ = DQ ? `preview ${LQ.join(",")}|${DQ.fits}|${dt(kQ)}` : "";
        var mQ, uQ;
        vQ !== this.shownKey && this.show(QQ, vQ, kQ, null !== (mQ = null === DQ || void 0 === DQ ? void 0 : DQ.column) && void 0 !== mQ ? mQ : [], null === (uQ = null === DQ || void 0 === DQ ? void 0 : DQ.fits) || void 0 === uQ || uQ)
      }
      show(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(QQ), this.shownKey = FQ, LQ.length > 0 && this.meshes.push(Qe(QQ, LQ, zt(qQ ? Pt : gt)));
        for (const {
            free: oQ,
            blocked: DQ,
            gaps: kQ,
            supports: vQ
          }
          of wQ) {
          for (const [FQ, wQ, LQ] of oQ) {
            const qQ = {
              positions: [],
              indices: []
            };
            yt(qQ, 0, 0, 0);
            const oQ = QQ.createGameMesh(qQ, zt(Et), [FQ + .5, wQ + .5, LQ + .5]);
            this.meshes.push(oQ), this.pulses.push(oQ)
          }
          DQ.length > 0 && this.meshes.push(Qe(QQ, DQ, zt(nt))), kQ.length > 0 && this.meshes.push(Qe(QQ, kQ, zt(gt), 1.06, .07)), vQ.length > 0 && this.meshes.push(Qe(QQ, vQ, zt(Zt)))
        }
      }
      clear(QQ) {
        for (const FQ of this.meshes) QQ.disposeGameMesh(FQ);
        this.meshes = [], this.pulses = []
      }
    }
    class we {
      constructor() {
        this.stored = new Map, this.ym = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(QQ) {
        if (!QQ.baf2TermOpen) return !1;
        QQ.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [FQ, wQ] of QQ.baf2TermItems) wQ > 0 ? this.stored.set(FQ, wQ) : this.stored.delete(FQ);
        if (QQ.baf2TermHeld && (this.ym = new Map(QQ.baf2TermHeld)), this.pending = this.pending.filter((FQ => FQ.seq > QQ.baf2TermAcked)), this.silos = QQ.baf2TermSilos, this.readOnly = QQ.baf2TermReadOnly, this.pocket = !0 === QQ.baf2TermPocket, QQ.baf2TermReset) this.resort();
        else {
          const QQ = new Set(this.order);
          for (const FQ of this.stored.keys()) QQ.has(FQ) || this.order.push(FQ)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((QQ, FQ) => this.amount(FQ) - this.amount(QQ) || QQ.localeCompare(FQ))), this.changed()
      }
      take(QQ, FQ) {
        const wQ = kF(QQ, this.amount(FQ));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: FQ,
          amount: wQ,
          put: !1
        }), this.recents = [FQ, ...this.recents.filter((QQ => QQ !== FQ))].slice(0, 6), this.changed(), wF(this.seq, QQ, FQ)
      }
      put(QQ, FQ) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: FQ,
          amount: kF(QQ, this.heldAmount(FQ)),
          put: !0
        }), this.changed(), LF(this.seq, QQ, FQ)
      }
      putAll() {
        this.seq++;
        for (const QQ of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: QQ,
          amount: this.heldAmount(QQ),
          put: !0
        });
        return this.changed(), qF(this.seq)
      }
      amount(QQ) {
        var FQ;
        let wQ = null !== (FQ = this.stored.get(QQ)) && void 0 !== FQ ? FQ : 0;
        for (const LQ of this.pending) LQ.item === QQ && (wQ += LQ.put ? LQ.amount : -LQ.amount);
        return Math.max(0, wQ)
      }
      heldAmount(QQ) {
        var FQ;
        let wQ = null !== (FQ = this.ym.get(QQ)) && void 0 !== FQ ? FQ : 0;
        for (const LQ of this.pending) LQ.put && LQ.item === QQ && (wQ -= LQ.amount);
        return Math.max(0, wQ)
      }
      heldItems() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((FQ => FQ === QQ || this.heldAmount(FQ) > 0))
      }
      items() {
        return this.order.filter((QQ => this.amount(QQ) > 0))
      }
      recent() {
        return this.recents.filter((QQ => this.amount(QQ) > 0))
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
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      changed() {
        this.version++;
        for (const QQ of this.listeners) QQ()
      }
    }
    var Le = wQ(37950);
    const qe = {
      isBlock: QQ => void 0 !== IQ.h[QQ],
      harvestType: QQ => {
        var FQ;
        return null === (FQ = IQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.harvestType
      },
      harvestLevel: QQ => {
        var FQ;
        return null === (FQ = IQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.harvestLevel
      },
      dropsNothing: QQ => {
        var FQ;
        return null === (null === (FQ = IQ.h[QQ]) || void 0 === FQ ? void 0 : FQ.drops)
      },
      displayName: QQ => {
        var FQ;
        return null === (FQ = Fk.q[QQ]) || void 0 === FQ ? void 0 : FQ.displayName
      },
      description: QQ => {
        var FQ;
        return null === (FQ = Fk.q[QQ]) || void 0 === FQ ? void 0 : FQ.description
      },
      harvests: QQ => {
        var FQ;
        return null === (FQ = Fk.q[QQ]) || void 0 === FQ ? void 0 : FQ.harvests
      },
      level: QQ => {
        var FQ;
        return null === (FQ = Fk.q[QQ]) || void 0 === FQ ? void 0 : FQ.level
      }
    };

    function oe(QQ, FQ, wQ) {
      return function(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        const DQ = FQ.split("|")[0],
          kQ = QQ.isBlock(FQ) ? FQ : QQ.isBlock(DQ) ? DQ : null;
        if (null === kQ || "rock" !== QQ.harvestType(kQ) || QQ.dropsNothing(kQ) && !aL.has(DQ)) return null;
        const vQ = wQ && "rock" === QQ.harvests(wQ) ? null !== (qQ = QQ.level(wQ)) && void 0 !== qQ ? qQ : 0 : null,
          mQ = null !== (oQ = null !== LQ && void 0 !== LQ ? LQ : QQ.harvestLevel(kQ)) && void 0 !== oQ ? oQ : 0;
        return (null !== vQ ? mQ <= vQ : 0 === QQ.harvestLevel(kQ)) ? null : OL(QQ, mQ)
      }(qe, QQ, FQ, wQ)
    }

    function De(QQ, FQ) {
      return function(QQ, FQ, wQ) {
        if (FQ === RL[0]) return [(0, TQ.ge)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, TQ.K.whiteUiText)];
        const LQ = wQ.split("|")[0],
          qQ = QQ.isBlock(LQ) ? QQ.displayName(LQ) : void 0,
          oQ = "string" === typeof qQ ? qQ : qQ && "translationKey" in qQ ? `$t(${qQ.translationKey})` : LQ;
        return [(0, TQ.ge)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: oQ
          }
        }, TQ.K.whiteUiText), (0, TQ.ge)({
          translationKey: `item:${(0,TQ.He)(FQ)}`
        }, TQ.K.yellowUiText)]
      }(qe, QQ, FQ)
    }
    const ke = "buildAFactory2Game:";
    const ve = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function me(QQ) {
      return QQ.endsWith(" Ore")
    }
    const ue = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      He = [],
      be = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: ue,
        plan: null,
        atomic: He
      },
      Ye = "buildAFactory2Game:",
      xe = new Set(["Splitter", "Sorting Gate"]),
      Ae = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class te {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = QQ, this.planAt = FQ, this.tierOf = wQ, this.um = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.ym = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = be, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(QQ, FQ, wQ) {
        var LQ, qQ, oQ;
        let DQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const kQ = null !== (LQ = null === (qQ = QQ.owQ(FQ)) || void 0 === qQ ? void 0 : qQ.name) && void 0 !== LQ ? LQ : null,
          vQ = QQ.isPlayerCrouching(FQ),
          mQ = 0 === wQ ? null : this.resolve(QQ, wQ),
          uQ = null !== mQ && null !== DQ && xe.has(mQ.rootName) && function(QQ, FQ) {
            return Ae.some((wQ => {
              let [LQ, qQ] = wQ;
              const oQ = QQ.getBlockId(FQ[0] + LQ, FQ[1], FQ[2] + qQ);
              return 0 !== oQ && "Express Belt" === QQ.getMetaInfo(oQ).rootName
            }))
          }(QQ, DQ),
          HQ = this.updatePlan(0 === wQ ? null : DQ),
          bQ = this.tierOf(),
          YQ = null === DQ ? null : (0, Le.f)(wQ),
          xQ = null !== YQ && null !== DQ && (0, Le.g)(function(QQ) {
            return (FQ, wQ, LQ) => QQ.getBlockId(FQ, wQ, LQ)
          }(QQ), DQ[0], DQ[1], DQ[2], YQ),
          AQ = this.readAfloat(QQ, wQ, DQ);
        if (wQ === this.um && xQ === this.missesMaker && AQ === this.afloat && kQ === this.ym && vQ === this.crouching && uQ === this.express && bQ === this.tier && !HQ && (!this.targetsLive || !this.liveMoved(DQ))) return;
        this.um = wQ, this.missesMaker = xQ, this.afloat = AQ, this.ym = kQ, this.crouching = vQ, this.express = uQ;
        const tQ = uQ && mQ ? function(QQ) {
          if (null === QQ.info) return null;
          return QQ.express ??= {
            ...QQ.info,
            detail: `${Ye}lookKeepsUpExpress`,
            detailItem: null
          }, QQ.express
        }(mQ) : null !== mQ && xQ && null !== YQ ? this.besideMaker(mQ, wQ, YQ) : null !== mQ && AQ ? this.hanging(mQ) : null !== (oQ = null === mQ || void 0 === mQ ? void 0 : mQ.info) && void 0 !== oQ ? oQ : null;
        this.tier = bQ;
        const eQ = mQ && tQ ? function(QQ, FQ) {
          var wQ, LQ;
          const qQ = IQ.h[QQ];
          if (!QQ.endsWith(" Ore") || "rock" !== (null === qQ || void 0 === qQ ? void 0 : qQ.harvestType) || 0 === qQ.harvestLevel) return null;
          const oQ = null !== (wQ = qQ.harvestLevel) && void 0 !== wQ ? wQ : 0,
            DQ = FQ ? Fk.q[FQ] : void 0;
          if ("rock" === (null === DQ || void 0 === DQ ? void 0 : DQ.harvests) && (null !== (LQ = DQ.level) && void 0 !== LQ ? LQ : 0) >= oQ) return null;
          const kQ = (vQ = oQ, OL(qe, vQ));
          var vQ;
          if (null === kQ) return null;
          const mQ = Lo(kQ),
            uQ = /^[AEIOU]/.test(kQ) ? "An" : "";
          if ("rock" === (null === DQ || void 0 === DQ ? void 0 : DQ.harvests) && FQ) return {
            key: `${Ye}lookToolTooWeak${uQ}`,
            ym: Lo(FQ),
            needed: mQ
          };
          return {
            key: kQ === RL[0] ? `${Ye}lookNeedAnyPickaxe` : `${Ye}lookNeedPickaxe${uQ}`,
            ym: null,
            needed: mQ
          }
        }(mQ.rootName, kQ) : null;
        this.targetsLive = !0 === (null === mQ || void 0 === mQ ? void 0 : mQ.live) && null !== DQ;
        let MQ = null;
        this.targetsLive && mQ && DQ && this.live && (this.livePos[0] = DQ[0], this.livePos[1] = DQ[1], this.livePos[2] = DQ[2], this.liveVersion = this.live.version(), MQ = this.live.line(mQ.rootName, DQ));
        const GQ = null === tQ ? ue : function(QQ, FQ, wQ) {
            const LQ = function(QQ, FQ, wQ) {
              const LQ = Tw(QQ);
              if (null === LQ) return null;
              const qQ = `${ke}lookPortMode_${LQ}`,
                oQ = VL(FQ);
              if (oQ && wQ) return {
                mode: null,
                detail: qQ,
                next: `${ke}lookWrenchPickUp`,
                nextState: null
              };
              const DQ = Kw(QQ),
                kQ = null === DQ ? null : Tw(DQ);
              return null === kQ ? {
                mode: null,
                detail: qQ,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: qQ,
                next: oQ ? `${ke}lookWrenchNext` : `${ke}lookPortWrench`,
                nextState: `${ke}lookPortState_${kQ}`
              }
            }(QQ, FQ, wQ);
            if (null !== LQ) return LQ;
            const qQ = Lq(QQ, FQ, wQ);
            return null === qQ.mode && null === qQ.next ? ue : qQ
          }(QQ.blockIdToBlockName(wQ), kQ, vQ),
          pQ = this.plan,
          cQ = mQ && tQ ? this.rowsOf(mQ.rootName, bQ) : He,
          CQ = this.snapshot;
        if (!(null === tQ ? !CQ.visible : CQ.visible && tQ === CQ.info && (SQ = eQ, iQ = CQ.tool, SQ === iQ || null !== SQ && null !== iQ && SQ.key === iQ.key && SQ.ym === iQ.ym && SQ.needed === iQ.needed) && function(QQ, FQ) {
            return QQ === FQ || null !== QQ && null !== FQ && QQ.key === FQ.key && JSON.stringify([QQ.params, QQ.keys]) === JSON.stringify([FQ.params, FQ.keys])
          }(MQ, CQ.live) && function(QQ, FQ) {
            return QQ.mode === FQ.mode && QQ.detail === FQ.detail && QQ.next === FQ.next && QQ.nextState === FQ.nextState
          }(GQ, CQ.wrench) && nx(pQ, CQ.plan) && cQ === CQ.atomic)) {
          var SQ, iQ;
          this.snapshot = null === tQ ? {
            ...CQ,
            visible: !1
          } : {
            info: tQ,
            visible: !0,
            tool: eQ,
            live: MQ,
            wrench: GQ,
            plan: pQ,
            atomic: cQ
          };
          for (const QQ of this.listeners) QQ()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = be, this.um = 0, this.ym = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(QQ, FQ, wQ) {
        if (null === wQ || 0 === FQ || !kQ() || !me(this.resolve(QQ, FQ).rootName)) return !1;
        const LQ = `${wQ[0]},${wQ[1]},${wQ[2]},${FQ}`,
          qQ = performance.now();
        return LQ === this.afloatKey && qQ - this.afloatAt < ee ? this.afloat : (this.afloatKey = LQ, this.afloatAt = qQ, function(QQ, FQ) {
          for (const [wQ, LQ, qQ] of ve) {
            const oQ = FQ(QQ[0] + wQ, QQ[1] + LQ, QQ[2] + qQ);
            if (void 0 === oQ || null !== oQ && !me(oQ)) return !1
          }
          return !0
        }(wQ, ((FQ, wQ, LQ) => function(QQ, FQ, wQ, LQ) {
          if (!QQ.isBlockInLoadedChunk(FQ, wQ, LQ)) return;
          const qQ = QQ.getBlockId(FQ, wQ, LQ);
          return 0 === qQ ? null : QQ.getMetaInfo(qQ).rootName
        }(QQ, FQ, wQ, LQ))))
      }
      liveMoved(QQ) {
        var FQ;
        const {
          livePos: wQ
        } = this;
        return null === QQ || QQ[0] !== wQ[0] || QQ[1] !== wQ[1] || QQ[2] !== wQ[2] || (null === (FQ = this.live) || void 0 === FQ ? void 0 : FQ.version()) !== this.liveVersion
      }
      updatePlan(QQ) {
        const FQ = null === QQ ? "" : QQ.join(","),
          wQ = performance.now();
        if (FQ === this.planPos && wQ - this.planMs < 250) return !1;
        this.planPos = FQ, this.planMs = wQ;
        const LQ = null === QQ ? null : this.planAt([QQ[0], QQ[1], QQ[2]]),
          qQ = !nx(LQ, this.plan);
        return this.plan = LQ, qQ
      }
      besideMaker(QQ, FQ, wQ) {
        let {
          info: LQ
        } = QQ;
        if (null === LQ) return null;
        let qQ = this.besideMakerById.get(FQ);
        if (void 0 === qQ) {
          const QQ = "cryo" === wQ ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          qQ = {
            ...LQ,
            detail: `${Ye}${QQ}`,
            detailItem: null
          }, this.besideMakerById.set(FQ, qQ)
        }
        return qQ
      }
      hanging(QQ) {
        let {
          info: FQ,
          rootName: wQ
        } = QQ;
        if (null === FQ) return null;
        let LQ = this.afloatByRoot.get(wQ);
        return void 0 === LQ && (LQ = {
          ...FQ,
          detail: `${Ye}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(wQ, LQ)), LQ
      }
      rowsOf(QQ, FQ) {
        if (null === FQ) return He;
        const wQ = `${QQ}|${FQ}`;
        let LQ = this.rowsByKey.get(wQ);
        if (void 0 === LQ) {
          const qQ = function(QQ, FQ) {
            var wQ;
            if (!(QQ in TF)) return [];
            const LQ = null !== (wQ = KF[QQ]) && void 0 !== wQ ? wQ : [],
              qQ = new Map;
            for (const DQ of ho(QQ, FQ))
              if ((LQ.includes(DQ) || Vo(DQ.output) && Xo(DQ.output) > ZQ(QQ)) && Xo(DQ.output) <= FQ) {
                var oQ;
                const QQ = null !== (oQ = qQ.get(DQ.output)) && void 0 !== oQ ? oQ : [];
                QQ.push(DQ.input), qQ.set(DQ.output, QQ)
              } return Eo([...qQ], (QQ => {
              let [FQ] = QQ;
              return -Xo(FQ)
            })).map((QQ => {
              let [FQ, wQ] = QQ;
              return {
                output: FQ,
                inputs: wQ
              }
            }))
          }(QQ, FQ);
          LQ = qQ.length > 0 ? qQ : He, this.rowsByKey.set(wQ, LQ)
        }
        return LQ
      }
      resolve(QQ, FQ) {
        const {
          rootId: wQ,
          rootName: LQ
        } = QQ.getMetaInfo(FQ), qQ = (0, xw.l)(LQ) ? FQ : wQ;
        let oQ = this.byRootId.get(qQ);
        const DQ = kQ();
        if (void 0 === oQ || oQ.nuclear !== DQ) {
          var vQ;
          const wQ = function(QQ) {
            return lL(qe, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ)
          }(LQ, QQ.blockIdToBlockName(FQ));
          oQ = {
            info: wQ,
            rootName: LQ,
            live: null !== wQ && !0 === (null === (vQ = this.live) || void 0 === vQ ? void 0 : vQ.handles(LQ)),
            nuclear: DQ
          }, this.byRootId.set(qQ, oQ)
        }
        return oQ
      }
    }
    const ee = 500;
    const Me = (0, LQ.memo)((function(QQ) {
      var FQ, wQ;
      let {
        store: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, Oq.y)(), [DQ, kQ] = (0, LQ.useState)((() => qQ.get()));
      (0, LQ.useEffect)((() => (kQ(qQ.get()), qQ.subscribe((() => {
        kQ(qQ.get())
      })))), [qQ]);
      const {
        openInGameMenuName: vQ,
        openEverythingMenuName: mQ,
        isTouchScreen: uQ
      } = (0, pq.l)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: HQ,
        tool: bQ,
        live: YQ,
        wrench: xQ,
        atomic: AQ
      } = DQ, tQ = DQ.visible && null === vQ && null === mQ;
      if (null === HQ) return null;
      const eQ = null !== xQ.detail ? oQ(xQ.detail) : null !== (FQ = DQ.plan) && void 0 !== FQ && FQ.ctrl ? oQ("buildAFactory2Game:lookPlanCtrl") : null !== HQ.detail ? oQ(HQ.detail, null === HQ.detailItem ? void 0 : {
        item: oQ(HQ.detailItem)
      }) : null;
      return (0, Wo.jsxs)("div", {
        className: Sq()("Baf2LookTarget", {
          Visible: tQ
        }),
        "aria-hidden": !tQ,
        children: [(0, Wo.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: oQ(HQ.name)
        }), null !== DQ.plan && (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oQ(DQ.plan.key, {
            kind: oQ(DQ.plan.kindKey),
            w: String(DQ.plan.w),
            h: String(DQ.plan.h),
            d: String(DQ.plan.d),
            count: String(DQ.plan.count)
          })
        }), void 0 !== (null === (wQ = DQ.plan) || void 0 === wQ ? void 0 : wQ.why) && (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: oQ(DQ.plan.why)
        }), null !== xQ.mode && (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oQ(xQ.mode)
        }), null !== bQ ? (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: oQ(bQ.key, {
            item: oQ(bQ.needed),
            ym: null === bQ.ym ? "" : oQ(bQ.ym)
          })
        }) : null !== YQ ? (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oQ(YQ.key, Dm(oQ, YQ))
        }) : null !== eQ && (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: eQ
        }), AQ.length > 0 && (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oQ("buildAFactory2Game:lookAtomicRecipes", {
            list: AQ.map((QQ => {
              let {
                output: FQ,
                inputs: wQ
              } = QQ;
              const LQ = wQ.length > 1 ? ` ${oQ("buildAFactory2Game:recipeMore",{count:String(wQ.length-1)})}` : "";
              return `${oQ(Lo(wQ[0]))}${LQ} \u2192 ${oQ(Lo(FQ))}`
            })).join(", ")
          })
        }), null !== xQ.next && (0, Wo.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: oQ(xQ.next, {
            state: null === xQ.nextState ? "" : oQ(xQ.nextState),
            use: oQ(uQ ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var Ge = wQ(38046);
    const pe = [],
      ce = [
        [0, -1, 0]
      ];

    function Ce(QQ) {
      const FQ = [QQ];
      for (let wQ = 1; wQ <= 4; wQ++) wQ > 1 && FQ.push(`${QQ}|meta|rot${wQ}`), FQ.push(`${QQ}|meta|rot${wQ}|Running`);
      return FQ
    }

    function Se(QQ, FQ) {
      return [Math.floor(QQ[0] / FQ), Math.floor(QQ[1] / FQ), Math.floor(QQ[2] / FQ)]
    }

    function ie(QQ, FQ, wQ) {
      return `${QQ},${FQ},${wQ}`
    }

    function We(QQ) {
      const FQ = QQ.split("|")[0];
      if (!mw(FQ)) return pe;
      const wQ = TF[FQ];
      if (Fw(wQ)) return ce;
      const LQ = Ct(QQ);
      return ww(wQ) ? [
        [-LQ[0], -LQ[1], -LQ[2]]
      ] : iq(wQ) ? function(QQ, FQ) {
        const wQ = QQ[0] - 2 * FQ[0],
          LQ = QQ[2] - 2 * FQ[2],
          qQ = [];
        for (let oQ = -1; oQ <= 1; oQ++)
          for (let FQ = -1; FQ <= 1; FQ++) qQ.push([wQ + oQ, QQ[1], LQ + FQ]);
        return qQ
      }([0, 0, 0], LQ) : pe
    }
    const Re = [.5, .5, .5],
      Oe = [.2, .8, .3],
      se = [.45, 1, .5];
    class re {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(QQ) {
        this.indexed = !0;
        for (const FQ of OF)
          for (const wQ of Ce(FQ)) {
            const FQ = QQ.blockNameToBlockId(wQ, !0),
              LQ = We(wQ);
            null !== FQ && LQ.length > 0 && (this.offsetsList.push(LQ), this.offsetsIndexById[FQ] = this.offsetsList.length)
          }
      }
      onAfterRender(QQ, FQ) {
        this.indexed || this.index(QQ);
        const wQ = performance.now();
        if (wQ - this.lastCheckMs < 100) return;
        this.lastCheckMs = wQ, this.checks++;
        const LQ = xx.e.tx,
          [qQ, oQ, DQ] = Se(FQ, LQ);
        let kQ = !1;
        const vQ = [];
        let mQ = 0;
        for (let uQ = qQ - 2; uQ <= qQ + 2; uQ++)
          for (let FQ = oQ - 1; FQ <= oQ + 1; FQ++)
            for (let qQ = DQ - 2; qQ <= DQ + 2; qQ++) {
              const oQ = mQ++,
                DQ = ie(uQ, FQ, qQ),
                HQ = QQ.getChunkVersion(uQ, FQ, qQ);
              let bQ = this.chunks.get(DQ);
              null !== HQ ? (bQ || (bQ = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(DQ, bQ)), bQ.seenAt = this.checks, bQ.checkedVersion !== HQ && (bQ.checkedVersion = HQ, kQ = !0), bQ.scannedVersion !== HQ && wQ - bQ.scannedAt >= 500 && vQ.push({
                slot: oQ,
                entry: bQ,
                origin: [uQ * LQ, FQ * LQ, qQ * LQ]
              })) : (kQ ||= void 0 !== bQ, this.chunks.delete(DQ))
            }
        this.scanDue(QQ, vQ) && (kQ = !0);
        for (const [uQ, HQ] of this.chunks) HQ.seenAt !== this.checks && (kQ ||= HQ.machines.length > 0, this.chunks.delete(uQ));
        for (const uQ of this.chunks.values())
          for (const [FQ, wQ, LQ] of uQ.cellChunks)(Math.abs(FQ - qQ) > 2 || Math.abs(wQ - oQ) > 1 || Math.abs(LQ - DQ) > 2) && this.watchCellChunk(QQ, FQ, wQ, LQ) && (kQ = !0);
        for (const [uQ, HQ] of this.cellChunks) HQ.seenAt !== this.checks && this.cellChunks.delete(uQ);
        kQ && this.refresh(QQ)
      }
      dispose(QQ) {
        this.clearMeshes(QQ), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(QQ, FQ) {
        const wQ = Math.max(FQ.findIndex((QQ => {
          let {
            slot: FQ
          } = QQ;
          return FQ >= this.scanFrom
        })), 0);
        let LQ = 96;
        for (let qQ = 0; qQ < FQ.length; qQ++) {
          const {
            slot: oQ,
            entry: DQ,
            origin: kQ
          } = FQ[(wQ + qQ) % FQ.length];
          if (LQ -= this.scan(QQ, DQ, kQ), LQ <= 0) {
            this.scanFrom = oQ + 1;
            break
          }
        }
        return FQ.length > 0
      }
      scan(QQ, FQ, wQ) {
        let [LQ, qQ, oQ] = wQ;
        const DQ = xx.e.tx,
          kQ = this.hits;
        kQ.length = 0;
        const vQ = QQ.scanBlocks(LQ, qQ, oQ, LQ + DQ, qQ + DQ, oQ + DQ, this.offsetsIndexById, kQ),
          mQ = [];
        for (let uQ = 0; uQ < kQ.length; uQ += 4) mQ.push({
          pos: [kQ[uQ], kQ[uQ + 1], kQ[uQ + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[kQ[uQ + 3]] - 1]
        });
        return FQ.machines = mQ, FQ.cellChunks = function(QQ, FQ) {
          const wQ = new Set,
            LQ = [];
          for (const {
              pos: qQ,
              offsets: oQ
            }
            of QQ)
            for (const [QQ, DQ, kQ] of oQ) {
              const oQ = Se([qQ[0] + QQ, qQ[1] + DQ, qQ[2] + kQ], FQ),
                vQ = ie(...oQ);
              wQ.has(vQ) || (wQ.add(vQ), LQ.push(oQ))
            }
          return LQ
        }(mQ, DQ), FQ.scannedVersion = FQ.checkedVersion, FQ.scannedAt = performance.now(), Math.max(vQ, 1)
      }
      watchCellChunk(QQ, FQ, wQ, LQ) {
        const qQ = ie(FQ, wQ, LQ),
          oQ = QQ.getChunkVersion(FQ, wQ, LQ),
          DQ = this.cellChunks.get(qQ);
        return null === oQ ? this.cellChunks.delete(qQ) : (null === DQ || void 0 === DQ ? void 0 : DQ.version) === oQ ? (DQ.seenAt = this.checks, !1) : (this.cellChunks.set(qQ, {
          version: oQ,
          seenAt: this.checks
        }), !0)
      }
      refresh(QQ) {
        const FQ = function(QQ, FQ) {
            const wQ = new Set,
              LQ = [];
            for (const {
                pos: qQ,
                offsets: oQ
              }
              of QQ)
              for (const [QQ, DQ, kQ] of oQ) {
                const oQ = qQ[0] + QQ,
                  vQ = qQ[1] + DQ,
                  mQ = qQ[2] + kQ,
                  uQ = `${oQ},${vQ},${mQ}`;
                wQ.has(uQ) || (wQ.add(uQ), FQ(oQ, vQ, mQ) && LQ.push([oQ, vQ, mQ]))
              }
            return LQ
          }([...this.chunks.values()].flatMap((QQ => QQ.machines)), ((FQ, wQ, LQ) => QQ.isBlockInLoadedChunk(FQ, wQ, LQ) && 0 === QQ.getBlockId(FQ, wQ, LQ))),
          wQ = FQ.join(";");
        wQ !== this.shownKey && (this.shownKey = wQ, this.clearMeshes(QQ), FQ.length > 0 && (this.meshes = [this.build(QQ, FQ, !1), this.build(QQ, FQ, !0)]))
      }
      build(QQ, FQ, wQ) {
        const LQ = FQ[0],
          qQ = [],
          oQ = [];
        for (const [DQ, kQ, vQ] of FQ)(0, Ge.b)(qQ, oQ, [DQ - LQ[0] + .5, kQ - LQ[1] + .5, vQ - LQ[2] + .5], Re, wQ);
        return QQ.createGameMesh({
          positions: qQ,
          indices: oQ
        }, {
          rgb: wQ ? se : Oe,
          alpha: .4
        }, LQ)
      }
      clearMeshes(QQ) {
        for (const FQ of this.meshes) QQ.disposeGameMesh(FQ);
        this.meshes = []
      }
    }
    const Ie = 1 / .6,
      Ue = 200,
      Ne = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      Te = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      Ke = 2 * Math.PI / 3;
    class ze {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne;
        this.style = QQ, this.particles = null, this.points = new Float32Array(800), this.budget = Ue, this.lastMs = 0
      }
      static blade() {
        return new ze(Te)
      }
      mp(QQ, FQ) {
        const wQ = Math.min(FQ.arcStruck, FQ.arcPoints.length);
        this.draw(QQ, [FQ.arcFrom, ...FQ.arcPoints], FQ.arcPoints.slice(0, wQ))
      }
      onBlade(QQ, FQ) {
        const [wQ, LQ, qQ] = FQ.bladeCentre, [oQ, DQ] = FQ.bladeFacing, kQ = wQ - 1.5 * oQ, vQ = qQ - 1.5 * DQ, mQ = Math.atan2(DQ, oQ), uQ = [];
        for (let HQ = 0; HQ <= 8; HQ++) {
          const QQ = mQ - Ke / 2 + Ke * HQ / 8;
          uQ.push([kQ + 2.5 * Math.cos(QQ), LQ, vQ + 2.5 * Math.sin(QQ)])
        }
        this.draw(QQ, uQ, FQ.bladeStruck)
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.stop(), this.particles = null
      }
      draw(QQ, FQ, wQ) {
        if (!QQ.particlesEnabled() || FQ.length < 2) return;
        const LQ = performance.now();
        this.budget = Math.min(Ue, this.budget + (LQ - this.lastMs) / 1e3 * Ue), this.lastMs = LQ;
        const qQ = [];
        let oQ = 0,
          DQ = FQ[0];
        for (const eQ of FQ.slice(1)) {
          const QQ = Math.min(48, Math.round(Math.hypot(eQ[0] - DQ[0], eQ[1] - DQ[1], eQ[2] - DQ[2]) * this.style.perBlock));
          qQ.push([DQ, eQ, QQ]), oQ += QQ, DQ = eQ
        }
        const kQ = wQ.length;
        oQ += 10 * kQ;
        const vQ = oQ > this.budget ? this.budget / oQ : 1;
        if (0 === oQ || vQ * oQ < 1) return;
        const mQ = FQ[0],
          [uQ, HQ, bQ] = mQ,
          YQ = this.points;
        let xQ = 0;
        const AQ = (QQ, FQ, wQ, LQ) => {
          const qQ = 4 * xQ;
          YQ[qQ] = QQ - uQ, YQ[qQ + 1] = FQ - HQ, YQ[qQ + 2] = wQ - bQ, YQ[qQ + 3] = LQ, xQ++
        };
        qQ.forEach(((QQ, FQ) => {
          let [wQ, LQ, qQ] = QQ;
          const oQ = Math.min(Math.floor(qQ * vQ), Ue - xQ),
            DQ = Math.hypot(LQ[0] - wQ[0], LQ[1] - wQ[1], LQ[2] - wQ[2]),
            kQ = 0 === FQ && DQ > 0 ? Math.min(.5, .1 * DQ) / DQ : 0;
          for (let vQ = 0; vQ < oQ; vQ++) {
            const QQ = kQ + (vQ + .5) / oQ * (1 - kQ);
            AQ(wQ[0] + (LQ[0] - wQ[0]) * QQ, wQ[1] + (LQ[1] - wQ[1]) * QQ, wQ[2] + (LQ[2] - wQ[2]) * QQ, .15)
          }
        }));
        const tQ = Math.floor(10 * vQ);
        for (let eQ = 0; eQ < kQ; eQ++) {
          const [QQ, FQ, LQ] = wQ[eQ];
          for (let wQ = 0; wQ < tQ && xQ < Ue; wQ++) AQ(QQ, FQ, LQ, 2.5)
        }
        this.budget -= xQ, this.particles ??= QQ.createParticles(function(QQ) {
          const [FQ, wQ] = QQ.colours;
          return {
            texture: "square_particle",
            MH: 400,
            minLifeTime: QQ.life[0] / Ie,
            maxLifeTime: QQ.life[1] / Ie,
            minSize: QQ.size[0],
            maxSize: QQ.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [FQ[0], FQ[1], FQ[2], 1],
              maxColor: [wQ[0], wQ[1], wQ[2], 1]
            }, {
              timeFraction: 1,
              minColor: [FQ[0], FQ[1], FQ[2], 0],
              maxColor: [wQ[0], wQ[1], wQ[2], 0]
            }],
            blendMode: jk.f.Add
          }
        }(this.style), {
          pos: mQ
        }), this.particles.emitPoints(mQ, YQ, xQ)
      }
    }
    const le = new Set(["Sky Spring"]);

    function je(QQ, FQ, wQ) {
      const LQ = QQ.split("|")[0];
      return "Air" !== FQ || wQ || ! function(QQ) {
        const FQ = QQ.split("|")[0];
        return void 0 !== Dw[FQ] || le.has(FQ)
      }(LQ) ? null : QQ
    }
    class ae {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(QQ) {
        const FQ = QQ - this.lastTapAt >= 300;
        return this.lastTapAt = QQ, FQ
      }
    }
    class Xe {
      constructor() {
        this.presses = new ae, this.predicted = null
      }
      tap(QQ, FQ) {
        const wQ = this.presses.isNewPress(FQ);
        return wQ && (this.predicted = {
          station: QQ,
          at: FQ
        }), wQ
      }
      consumeServerOpen(QQ, FQ) {
        const wQ = this.predicted;
        return !(null === wQ || wQ.station !== QQ || FQ - wQ.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class fe {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(QQ, FQ) {
        return QQ && (this.thrustAt = FQ), FQ - this.thrustAt < 200
      }
    }
    const Ve = [.1, .05, .1],
      he = {
        texture: "effect_5",
        MH: Math.ceil(48),
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
        blendMode: jk.f.OneOne
      };
    class Je {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new fe, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      mp(QQ, FQ) {
        for (const [wQ, LQ] of FQ.baf2JetFlames) QQ.isLocalPlayer(wQ) || (LQ ? this.lit.add(wQ) : this.lit.delete(wQ))
      }
      onAfterRender(QQ, FQ) {
        const wQ = performance.now(),
          LQ = this.hold.lit(this.selfThrusting(QQ, FQ), wQ);
        for (const [qQ, oQ] of this.flames)(qQ === FQ ? LQ : this.lit.has(qQ)) || this.setEmitting(oQ, !1), qQ === FQ || QQ.getPositionView(qQ) ? !oQ.emitting && wQ - oQ.offAt >= 1300 && (oQ.particles.stop(), this.flames.delete(qQ)) : (oQ.particles.dispose(), this.flames.delete(qQ), this.lit.delete(qQ));
        LQ && this.draw(QQ, FQ, FQ);
        for (const qQ of this.lit) this.draw(QQ, FQ, qQ)
      }
      dispose() {
        for (const QQ of this.flames.values()) QQ.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(QQ, FQ) {
        var wQ;
        const LQ = QQ.getLocalPlayerMovement();
        return !!LQ && (null !== (qQ = {
          option: null !== (wQ = QQ.getClientOption(FQ, "jumpHoldThrust")) && void 0 !== wQ ? wQ : null,
          jumping: LQ.jumpHeld,
          onGround: LQ.onGround,
          alive: QQ.isAlive(FQ)
        }).option && qQ.option.maxUpSpeed >= 0 && qQ.jumping && !qQ.onGround && qQ.alive);
        var qQ
      }
      draw(QQ, FQ, wQ) {
        var LQ, qQ;
        const oQ = this.pos;
        if (!QQ.readDrawnPosition(wQ, oQ)) return;
        const DQ = QQ.readDrawnPosition(FQ, this.camera) ? this.camera : oQ;
        if (!((oQ[0] - DQ[0]) ** 2 + (oQ[1] - DQ[1]) ** 2 + (oQ[2] - DQ[2]) ** 2 < 1600) || !QQ.particlesEnabled()) {
          const QQ = this.flames.get(wQ);
          return void(QQ && this.setEmitting(QQ, !1))
        }
        const kQ = null !== (LQ = this.flames.get(wQ)) && void 0 !== LQ ? LQ : this.create(QQ, wQ, oQ),
          vQ = null !== (qQ = QQ.getDrawnHeading(wQ)) && void 0 !== qQ ? qQ : 0,
          mQ = this.at;
        mQ[0] = oQ[0] - .35 * Math.sin(vQ), mQ[1] = oQ[1] + 1.05, mQ[2] = oQ[2] - .35 * Math.cos(vQ), kQ.particles.moveTo(mQ), this.setEmitting(kQ, !0)
      }
      setEmitting(QQ, FQ) {
        QQ.emitting !== FQ && (QQ.emitting = FQ, FQ || (QQ.offAt = performance.now()), QQ.particles.setEmitRate(FQ ? 60 : 0))
      }
      create(QQ, FQ, wQ) {
        const LQ = {
          particles: QQ.createParticles(he, {
            pos: wQ,
            half: Ve
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(FQ, LQ), LQ
      }
    }

    function Ee(QQ) {
      return "Reactor Frame" === qL("reactor", QQ)
    }

    function ne(QQ) {
      return aw("reactor", QQ) && !Ee(QQ) && (QQ.startsWith("Reactor Glass") || QQ.startsWith("Reactor Port"))
    }
    const ge = "baf2Goal";
    class Pe {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Tq.l.subscribe("setDirectionArrow", (QQ => {
          let {
            id: FQ,
            position: wQ
          } = QQ;
          FQ === ge && (this.goal = wQ, this.checkedAt = -1 / 0)
        })), Tq.l.subscribe("clearDirectionArrow", (QQ => {
          let {
            id: FQ
          } = QQ;
          null !== FQ && FQ !== ge || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const QQ of this.subs) Tq.l.unsubscribe(QQ)
      }
      sideOf(QQ, FQ, wQ, LQ) {
        const qQ = this.goal;
        if (!qQ) return 0;
        wQ - this.checkedAt > 1e3 && (this.checkedAt = wQ, this.open = function(QQ, FQ) {
          const [wQ, LQ, qQ] = QQ.map(Math.floor);
          if (!ne(FQ(wQ, LQ, qQ))) return null;
          for (const [oQ, DQ] of [
              [1, 0],
              [0, 1]
            ]) {
            const QQ = FQ(wQ + oQ, LQ, qQ + DQ),
              kQ = FQ(wQ - oQ, LQ, qQ - DQ);
            if (Ee(kQ) && ne(QQ)) return [oQ, 0, DQ];
            if (Ee(QQ) && ne(kQ)) return [0 - oQ, 0, 0 - DQ]
          }
          return null
        }(qQ, ((FQ, wQ, LQ) => QQ.blockIdToBlockName(QQ.getBlockId(FQ, wQ, LQ)))));
        const oQ = this.open;
        if (!oQ) return 0;
        const DQ = LQ(qQ);
        if (Math.abs(DQ.x - FQ.x) > .05 || Math.abs(DQ.y - FQ.y) > .05) return 0;
        const kQ = LQ([qQ[0] + oQ[0], qQ[1], qQ[2] + oQ[2]]).x - DQ.x;
        return Math.abs(kQ) < .3 ? 0 : kQ > 0 ? 1 : -1
      }
    }
    class Ze {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new Pe, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.kx = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.aG = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((QQ => {
          for (const FQ of QQ) FQ.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(FQ.target, FQ.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.kx || this.clear()
        }, window.addEventListener("resize", this.aG)
      }
      onAfterRender(QQ, FQ) {
        var wQ;
        this.api = QQ, this.project = null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.projectWorldPosToScreenPos) && void 0 !== wQ ? wQ : null, this.queued || this.kx || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.kx = !0;
        for (const QQ of this.moved.keys()) QQ.style.transform = "";
        this.moved.clear();
        for (const QQ of this.sideLabels.keys()) QQ.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.aG)
      }
      clear() {
        for (const oQ of this.moved.keys()) oQ.isConnected || this.moved.delete(oQ);
        for (const oQ of this.sideLabels.keys()) oQ.isConnected || this.sideLabels.delete(oQ);
        if (0 === this.arrows.length) return;
        const QQ = performance.now(),
          FQ = QQ - this.refreshedAt > 1e3;
        FQ && (this.refreshedAt = QQ, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const wQ = this.trackerBox(),
          LQ = this.barsBox(),
          qQ = this.toastBox(FQ);
        (wQ || LQ || qQ) && FQ && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let oQ = 0; oQ < this.arrows.length; oQ++) {
          const FQ = this.arrows[oQ];
          this.labelOffsets.set(FQ, this.runLabelAside(FQ, QQ));
          const DQ = (wQ ? this.shiftLeftOf(FQ, wQ) : 0) || this.shiftOnScreen(FQ),
            kQ = Math.min(LQ ? this.liftAbove(FQ, LQ, DQ) : 0, qQ ? this.liftAbove(FQ, qQ, DQ) : 0),
            vQ = this.moved.get(FQ);
          if (0 !== DQ || 0 !== kQ) {
            const QQ = 0 === kQ ? `translateX(${DQ}px)` : `translate(${DQ}px, ${kQ}px)`;
            vQ !== QQ && (FQ.style.transform = QQ, this.moved.set(FQ, QQ))
          } else void 0 !== vQ && (FQ.style.transform = "", this.moved.delete(FQ))
        }
      }
      trackerBox() {
        var QQ, FQ;
        const wQ = null !== (QQ = this.tracker) && void 0 !== QQ && QQ.isConnected ? this.tracker : null !== (FQ = this.trackers[0]) && void 0 !== FQ ? FQ : null;
        if (wQ !== this.tracker && this.watch(wQ), this.boxStale && wQ) {
          var LQ, qQ, oQ;
          this.boxStale = !1;
          const QQ = wQ.closest(".NoRoom") ? null : wQ.getBoundingClientRect(),
            FQ = QQ && QQ.width > 0 ? null === (LQ = this.hud) || void 0 === LQ ? void 0 : LQ.getBoundingClientRect() : void 0,
            DQ = QQ && FQ ? Math.max(QQ.top, FQ.top) : null !== (qQ = null === QQ || void 0 === QQ ? void 0 : QQ.top) && void 0 !== qQ ? qQ : 0,
            kQ = QQ && FQ ? Math.min(QQ.bottom, FQ.bottom) : null !== (oQ = null === QQ || void 0 === QQ ? void 0 : QQ.bottom) && void 0 !== oQ ? oQ : 0;
          this.box = QQ && QQ.width > 0 && kQ > DQ ? {
            left: QQ.left,
            top: DQ,
            right: QQ.right,
            bottom: kQ
          } : null
        }
        return wQ ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var QQ;
          this.barsStale = !1;
          const FQ = null === (QQ = this.statBars[0]) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
          this.bars = FQ && FQ.width > 0 && FQ.height > 0 ? {
            left: FQ.left,
            top: FQ.top,
            right: FQ.right,
            bottom: FQ.bottom
          } : null
        }
        return this.bars
      }
      toastBox(QQ) {
        var FQ;
        const wQ = null !== (FQ = this.toasts[0]) && void 0 !== FQ ? FQ : null;
        if (wQ !== this.toastEl || QQ && wQ) {
          this.toastEl = wQ;
          const QQ = null === wQ || void 0 === wQ ? void 0 : wQ.getBoundingClientRect();
          this.toast = QQ && QQ.width > 0 && QQ.height > 0 ? {
            left: QQ.left,
            top: QQ.top,
            right: QQ.right,
            bottom: QQ.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(QQ, FQ, wQ) {
        var LQ;
        const qQ = this.anchorOf(QQ);
        if (!qQ) return 0;
        const oQ = qQ.x + wQ + (null !== (LQ = this.labelOffsets.get(QQ)) && void 0 !== LQ ? LQ : 0),
          {
            halfWidth: DQ,
            labelled: kQ
          } = this.extentOf(QQ),
          vQ = qQ.y + this.em * (kQ ? 6.2 : 3);
        return vQ < FQ.top - 6 || oQ + DQ < FQ.left - 6 || oQ - DQ > FQ.right + 6 ? 0 : FQ.top - 6 - vQ
      }
      watch(QQ) {
        var FQ, wQ;
        this.tracker && this.sizes.unobserve(this.tracker), null === (FQ = this.hud) || void 0 === FQ || FQ.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = QQ, this.hud = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.closest(".Baf2QuestHud")) && void 0 !== wQ ? wQ : null, this.box = null, this.boxStale = !0, QQ && this.sizes.observe(QQ), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(QQ, FQ) {
        var wQ;
        const LQ = this.anchorOf(QQ);
        if (!LQ) return 0;
        const {
          y: qQ
        } = LQ, oQ = LQ.x + (null !== (wQ = this.labelOffsets.get(QQ)) && void 0 !== wQ ? wQ : 0), DQ = this.em, {
          halfWidth: kQ,
          labelled: vQ
        } = this.extentOf(QQ), mQ = qQ - DQ, uQ = oQ + kQ;
        return qQ + DQ * (vQ ? 6.2 : 3) < FQ.top || mQ > FQ.bottom || uQ < FQ.left - 6 || oQ - kQ > FQ.right ? 0 : Math.max(FQ.left - 6 - uQ, 6 - (oQ - kQ))
      }
      shiftOnScreen(QQ) {
        var FQ;
        const wQ = this.anchorOf(QQ);
        if (!wQ) return 0;
        const {
          halfWidth: LQ
        } = this.extentOf(QQ), qQ = wQ.x + (null !== (FQ = this.labelOffsets.get(QQ)) && void 0 !== FQ ? FQ : 0), oQ = qQ + LQ - (this.innerWidth - 6);
        return oQ > 0 ? -oQ : Math.max(0, 6 - (qQ - LQ))
      }
      runLabelAside(QQ, FQ) {
        var wQ;
        let LQ = null;
        for (let DQ = 0; DQ < QQ.children.length; DQ++) QQ.children[DQ].classList.contains("DirectionArrowLabel") && (LQ = QQ.children[DQ]);
        if (!LQ) return 0;
        const qQ = QQ.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(QQ) : null,
          oQ = (qQ && this.api ? this.side.sideOf(this.api, {
            x: qQ.x / this.innerWidth * 100,
            y: qQ.y / this.innerHeight * 100
          }, FQ, this.project) : 0) * this.halfWidthOf(LQ);
        return oQ !== (null !== (wQ = this.sideLabels.get(LQ)) && void 0 !== wQ ? wQ : 0) && (LQ.style.transform = 0 === oQ ? "" : `translateX(-50%) translateX(${oQ}px)`, 0 === oQ ? this.sideLabels.delete(LQ) : this.sideLabels.set(LQ, oQ)), oQ
      }
      extentOf(QQ) {
        let FQ = this.em,
          wQ = !1;
        for (let LQ = 0; LQ < QQ.children.length; LQ++) {
          const qQ = QQ.children[LQ],
            oQ = qQ.classList.contains("DirectionArrowLabel");
          wQ ||= oQ, (oQ || qQ.classList.contains("DirectionArrowDistance")) && (FQ = Math.max(FQ, this.halfWidthOf(qQ)))
        }
        return {
          halfWidth: FQ,
          labelled: wQ
        }
      }
      halfWidthOf(QQ) {
        let FQ = this.halfWidths.get(QQ);
        return void 0 === FQ && (FQ = QQ.offsetWidth / 2, this.halfWidths.set(QQ, FQ), this.sizes.observe(QQ), this.labels.add(QQ)), FQ
      }
      forgetGoneLabels() {
        for (const QQ of this.labels) QQ.isConnected || (this.sizes.unobserve(QQ), this.halfWidths.delete(QQ), this.labels.delete(QQ))
      }
      anchorOf(QQ) {
        const FQ = QQ.style.translate,
          wQ = this.anchors.get(QQ);
        if (wQ && wQ.translate === FQ && wQ.innerWidth === this.innerWidth && wQ.innerHeight === this.innerHeight) return wQ;
        const LQ = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(FQ);
        if (!LQ) return null;
        const qQ = {
          translate: FQ,
          x: parseFloat(LQ[1]) / 100 * this.innerWidth,
          y: parseFloat(LQ[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(QQ, qQ), qQ
      }
    }
    const ye = "Baf2ArrowText";

    function Be(QQ, FQ) {
      const wQ = QQ.rows.find((QQ => QQ.current));
      return NQ(QQ.tutorial) && null !== wQ && void 0 !== wQ && wQ.item && Jq(wQ) && sQ(wQ.item).includes(FQ) ? wQ.item : null
    }
    const de = new class {
      constructor(QQ) {
        this.select = QQ, this.picks = new Map
      }
      open(QQ, FQ, wQ) {
        const LQ = Be(FQ, QQ);
        null !== LQ && this.Vb(QQ, LQ, wQ)
      }
      follow(QQ, FQ) {
        if (kQ())
          for (const [wQ, {
              item: LQ,
              had: qQ
            }] of this.picks) {
            const oQ = Be(QQ, wQ);
            oQ !== LQ && (null !== oQ && FQ(LQ) > qQ ? this.Vb(wQ, oQ, FQ) : this.picks.delete(wQ))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      Vb(QQ, FQ, wQ) {
        this.picks.set(QQ, {
          item: FQ,
          had: wQ(FQ)
        }), this.select(QQ, FQ)
      }
    }(Kq.t);

    function QM(QQ) {
      return FQ => {
        let wQ = 0;
        for (const LQ of QQ.getInventoryItems())(null === LQ || void 0 === LQ ? void 0 : LQ.name) === FQ && (wQ += null === LQ.amount ? 1 : Math.max(LQ.amount, 0));
        return wQ
      }
    }

    function FM(QQ, FQ, wQ, LQ) {
      QQ.getClientOption(FQ, "canCraft") && "inventory" !== pq.c.get("openInGameMenuName") && (de.open(wQ, LQ.get(), QM(QQ)), Tq.l.GA("toggleMenu", `inventory|${wQ}`))
    }
    let wM = null,
      LM = !1;

    function qM(QQ) {
      const FQ = So();
      QQ === wM && FQ === LM || (wM = QQ, LM = FQ, (0, Kq.u)(function(QQ, FQ) {
        const wQ = new Map;
        for (let LQ = QQ + 1; LQ <= qQ.length; LQ++) {
          const qQ = no(LQ, QQ, FQ);
          if (qQ)
            for (const FQ of eQ(LQ).unlocks) wQ.set(FQ, {
              ...qQ,
              stepsAway: LQ - QQ
            })
        }
        return wQ
      }(QQ, FQ)))
    }

    function oM() {
      return (0, Kq.z)(Eo(Object.keys(OQ), Xo)), () => {
        (0, Kq.z)([])
      }
    }
    const DM = "buildAFactory2Game:",
      kM = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      vM = {
        on: `${DM}tutorialButtonOn`,
        hud: `${DM}tutorialButtonHud`,
        off: `${DM}tutorialButtonOff`
      },
      mM = {
        on: `${DM}tutorialPickedOn`,
        hud: `${DM}tutorialPickedHud`,
        off: `${DM}tutorialPickedOff`
      };

    function uM(QQ, FQ, wQ) {
      let LQ = null,
        qQ = () => {};
      const oQ = oQ => {
        var DQ;
        let {
          tutorial: kQ,
          tutorialKnown: vQ
        } = oQ;
        (null === (DQ = LQ) || void 0 === DQ ? void 0 : DQ.tutorial) === kQ && LQ.tutorialKnown === vQ || (LQ = {
          tutorial: kQ,
          tutorialKnown: vQ
        }, qQ = (0, Mq.u)({
          id: "baf2Tutorial",
          order: -1,
          labelKey: vM[kQ],
          icon: {
            kind: "icon",
            name: kM[kQ]
          },
          iconOnly: !0,
          disabled: !vQ,
          className: "Baf2TutorialButton",
          onClick: () => {
            var LQ;
            (LQ => {
              const qQ = FQ.setTutorial(LQ);
              QQ.send(`baf2tutorial ${LQ} ${qQ}`), wQ.show({
                baf2ToastText: [(0, TQ.ge)({
                  translationKey: mM[LQ]
                }, TQ.K.whiteUiText)],
                baf2ToastMs: 3e3,
                baf2ToastStyle: "baf2ToastInfo"
              })
            })((LQ = FQ.get().tutorial, UQ[(UQ.indexOf(LQ) + 1) % UQ.length]))
          }
        }))
      };
      oQ(FQ.get());
      const DQ = Tq.l.subscribe(zq, oQ);
      return () => {
        Tq.l.unsubscribe(DQ), qQ()
      }
    }

    function HM(QQ, FQ, wQ) {
      var LQ, qQ;
      const oQ = QQ.getTargetedBlock();
      if (!oQ || ! function(QQ, FQ, wQ) {
          if ("Chest" !== FQ) return !1;
          const LQ = QQ.split("|")[0];
          if (!mw(LQ) || 0 === TF[LQ].outputSlots.length) return !1;
          const qQ = Ct(QQ);
          return wQ[0] === qQ[0] && wQ[1] === qQ[1] && wQ[2] === qQ[2]
        }(wQ, null === (LQ = QQ.owQ(FQ)) || void 0 === LQ ? void 0 : LQ.name, oQ.normal)) return !1;
      const [DQ, kQ, vQ] = oQ.nY, mQ = QQ.getBlockId(DQ, kQ, vQ);
      return 0 === mQ || !0 === (null === (qQ = IQ.h[mQ]) || void 0 === qQ ? void 0 : qQ.canBePlacedOver)
    }
    var bM = wQ(36388);
    const YM = new Set(Aw.d);
    class xM {
      constructor(QQ) {
        this.toasts = QQ, this.lastAt = -1 / 0
      }
      onAltAction(QQ, FQ, wQ) {
        const LQ = QQ.getTargetedBlock();
        if (!LQ || function(QQ) {
            const FQ = QQ.split("|")[0];
            return mw(FQ) || null !== iL(FQ) || WQ(FQ) || Aw.d.includes(FQ)
          }(wQ) && !YM.has(wQ.split("|")[0])) return;
        const qQ = QQ.owQ(FQ);
        if (!qQ || !YM.has(qQ.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const oQ = qQ.typeObj.id,
          [DQ, kQ, vQ] = LQ.nY,
          mQ = QQ.getBlockId(DQ, kQ, vQ),
          uQ = IQ.h[mQ];
        (0 === mQ || null !== uQ && void 0 !== uQ && uQ.wY || null !== uQ && void 0 !== uQ && uQ.canBePlacedOver) && QQ.isSolidToPlayerBlockId(oQ) && QQ.canModifyBlockAt(DQ, kQ, vQ) && QQ.RFQ(DQ, kQ, vQ, oQ) && !QQ.RFQ(DQ, kQ, vQ, oQ, FQ) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, TQ.ge)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, TQ.K.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class AM {
      constructor(QQ) {
        this.show = QQ, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(QQ, FQ, wQ) {
        var LQ;
        if (!FQ) return this.started = null, void this.gatedThisHold.clear();
        if (!QQ) return void(this.started = null);
        const qQ = `${QQ.x},${QQ.y},${QQ.z},${QQ.ym}`;
        if (qQ === this.started) return;
        this.started = qQ;
        const oQ = jL(QQ.y) ? oe(QQ.block, QQ.ym, QQ.level) : null;
        if (null === oQ || this.gatedThisHold.has(qQ)) return;
        this.gatedThisHold.add(qQ);
        const DQ = QQ.block.split("|")[0];
        wQ - (null !== (LQ = this.hintedAt.get(DQ)) && void 0 !== LQ ? LQ : -1 / 0) < 5e3 || (this.hintedAt.set(DQ, wQ), this.show({
          baf2ToastText: De(oQ, QQ.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var tM = wQ(27);

    function eM(QQ, FQ) {
      const wQ = [...QQ.baf2CoreBankPaused];
      for (const [qQ] of QQ.baf2CoreBanked) wQ.push(qQ);
      for (const DQ of qQ) {
        for (const {
            item: QQ
          }
          of DQ.cost) wQ.push(QQ);
        for (const QQ of DQ.newDeposits) wQ.push(QQ.block);
        for (const QQ of DQ.unlocks) wQ.push(QQ, rQ(QQ));
        DQ.reward && wQ.push(DQ.reward);
        for (const {
            item: QQ
          }
          of null !== (LQ = null === (oQ = DQ.charge) || void 0 === oQ ? void 0 : oQ.items) && void 0 !== LQ ? LQ : []) {
          var LQ, oQ;
          wQ.push(QQ)
        }
      }
      return {
        message: QQ,
        itemNames: FQ([...new Set(wQ)])
      }
    }
    const MM = "baf2MultiblockGuide";
    const GM = new Map;
    const pM = function(QQ, FQ, wQ, qQ) {
      let {
        localPlayerId: oQ
      } = qQ;
      const DQ = new Gk,
        kQ = new LY,
        mQ = new uY,
        uQ = new vY(mQ),
        HQ = (QQ, FQ) => {
          FQ ? uQ.observe(QQ) : uQ.unobserve(QQ)
        },
        bQ = new kY,
        YQ = new xY(HQ),
        xQ = QQ => YQ.covers(QQ),
        AQ = new TY;
      let tQ;
      const eQ = new fD((QQ => {
          tQ.sendCommand(QQ)
        })),
        MQ = () => {
          eQ.send("baf2questbook")
        },
        GQ = QQ => function(QQ, FQ, wQ) {
          const LQ = {};
          for (const qQ of wQ) {
            let wQ = GM.get(qQ);
            void 0 === wQ && (wQ = QQ.getItemStat(FQ, qQ, "displayName"), GM.set(qQ, wQ)), LQ[qQ] = wQ
          }
          return LQ
        }(tQ, oQ, QQ),
        pQ = new aq(MQ),
        cQ = new EY((() => pq.c.get("loadingOverlayVisible"))),
        CQ = new yY,
        SQ = new xM(cQ),
        iQ = new AM((QQ => {
          cQ.show(QQ, QQ.baf2ToastMs)
        })),
        RQ = new Dx(HQ),
        OQ = new Ut(RQ),
        sQ = new RD,
        rQ = new we,
        UQ = new qk,
        NQ = new Yx({
          read: () => !1 !== tM.i.getItem(MM),
          write: QQ => {
            tM.i.setItem(MM, QQ)
          }
        }),
        zQ = new Xx(NQ),
        lQ = new hx(NQ),
        jQ = new HA(NQ, (QQ => function(QQ, FQ) {
          const wQ = wv(FQ.w, FQ.h, FQ.d),
            LQ = new Uint8Array(wQ);
          for (let qQ = 0; qQ < wQ; qQ++) {
            const wQ = Kx(QQ, dw(FQ, LL(FQ, qQ)));
            LQ[qQ] = null === wQ ? 0 : Bk(wQ)
          }
          return LQ
        }(tQ, QQ)), wA(eQ)),
        aQ = new bA(NQ, wA(eQ)),
        XQ = new mA,
        fQ = (QQ, FQ) => {
          let [wQ, LQ, qQ] = QQ;
          XQ.answered(FQ) || cQ.show({
            baf2ToastText: [(0, TQ.ge)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: wQ,
                h: LQ,
                d: qQ
              }
            }, TQ.K.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      jQ.onSizeNotTaken(fQ), aQ.onSizeNotTaken(fQ);
      const JQ = new tA,
        EQ = new ZA(NQ),
        nQ = new BA,
        PQ = new mt(nQ),
        ZQ = new pt,
        yQ = new Nt,
        dQ = new Jt(yQ),
        QF = new Fe(yQ),
        FF = yQ.lookSource(),
        wF = new te({
          handles: QQ => FF.handles(QQ) || QQ === KQ,
          line: (QQ, FQ) => QQ === KQ ? function(QQ, FQ, wQ) {
            var LQ;
            const qQ = hQ(null === (LQ = FQ.at(wQ)) || void 0 === LQ ? void 0 : LQ.item);
            return null === qQ ? {
              key: `${Ye}lookFarmEmpty`
            } : {
              key: QQ.blockIdToBlockName(QQ.getBlockId(wQ[0], wQ[1], wQ[2])).endsWith("|Running") ? `${Ye}lookFarmRunning` : `${Ye}lookFarmWaiting`,
              keys: {
                mob: VQ(qQ)
              }
            }
          }(tQ, RQ, FQ) : FF.line(QQ, FQ),
          version: () => FF.version() + RQ.version()
        }, (QQ => Ex(NQ.all(), QQ, (QQ => Kx(tQ, QQ)))), (() => pQ.get().tier)),
        LF = new TA,
        qF = new re,
        oF = new ze,
        DF = ze.blade(),
        kF = new Je,
        vF = new Qx,
        mF = new Ze,
        uF = new Xe,
        bF = new ae;
      let YF = -1 / 0,
        xF = 0,
        AF = -1 / 0,
        tF = -1 / 0;
      const eF = () => {
          eQ.send("baf2islandsclose"), tF = Date.now()
        },
        MF = [];

      function GF(QQ) {
        var FQ, wQ, LQ, qQ, oQ, DQ, vQ;
        "core" === (null === (FQ = kQ.get()) || void 0 === FQ ? void 0 : FQ.kind) && "core" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && eQ.send("baf2coreclose"), "power" === (null === (wQ = kQ.get()) || void 0 === wQ ? void 0 : wQ.kind) && "power" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && eQ.send("baf2powerclose"), "water" === (null === (LQ = kQ.get()) || void 0 === LQ ? void 0 : LQ.kind) && "water" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && eQ.send(BQ.v), "terminal" === (null === (qQ = kQ.get()) || void 0 === qQ ? void 0 : qQ.kind) && "terminal" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && eQ.send("baf2terminalclose"), "islands" === (null === (oQ = kQ.get()) || void 0 === oQ ? void 0 : oQ.kind) && "islands" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && eF();
        const mQ = yQ.getStatus();
        "collider" === (null === (DQ = kQ.get()) || void 0 === DQ ? void 0 : DQ.kind) && "collider" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && mQ && eQ.send(av(mQ, "close"));
        const uQ = QQ => "reactor" === QQ || "battery" === QQ;
        if (uQ(null === (vQ = kQ.get()) || void 0 === vQ ? void 0 : vQ.kind) && !uQ(null === QQ || void 0 === QQ ? void 0 : QQ.kind)) {
          var HQ, bQ, YQ;
          const QQ = "reactor" === (null === (HQ = kQ.get()) || void 0 === HQ ? void 0 : HQ.kind) ? null === (bQ = jQ.get()) || void 0 === bQ ? void 0 : bQ.status.baf2RxAt : null === (YQ = aQ.get()) || void 0 === YQ ? void 0 : YQ.status.baf2BatAt;
          QQ && eQ.send(HF(QQ, "close"))
        }
        "quests" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && MQ(), kQ.set(QQ), null === QQ && CQ.release()
      }

      function pF() {
        (0, Gq.f)(), GF(null)
      }
      let cF = new Set,
        CF = !1;
      const SF = {
        onCreate: QQ => {
          tQ = QQ, tQ.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const FQ of OF) {
            const QQ = TF[FQ].inputSlots ? Kk(DQ) : Uk(FQ, DQ, sQ, eQ);
            MF.push((0, eq.e)(FQ, QQ))
          }
          MF.push((0, Gq.u)((0, LQ.createElement)(LQ.Fragment, null, (0, LQ.createElement)(eY, {
            controller: YQ
          }), (0, LQ.createElement)(mx, {
            store: RQ
          }), (0, LQ.createElement)(Me, {
            store: wF
          }), (0, LQ.createElement)(hY, {
            store: pQ
          }), (0, LQ.createElement)(PY, {
            store: cQ
          }), (0, LQ.createElement)(BY, {
            store: CQ
          }), (0, LQ.createElement)(wx, {
            store: vF
          }), (0, LQ.createElement)(AA, {
            store: JQ
          }), (0, LQ.createElement)(dA, {
            store: nQ
          })), {
            content: (0, LQ.createElement)(qY, {
              commands: eQ,
              store: kQ,
              power: sQ,
              water: UQ,
              reactor: jQ,
              battery: aQ,
              collider: yQ,
              terminal: rQ,
              quests: pQ,
              close: Gq.i,
              leave: () => {
                CQ.dropHeld(), (0, Gq.f)()
              },
              askIslands: () => {
                tF = -1 / 0, YF = Date.now(), xF = eQ.send(gQ)
              },
              openSocial: () => {
                (0, Gq.f)(), pq.c.set({
                  openEverythingMenuName: Hw.n.SOCIAL
                })
              },
              showCore: QQ => {
                GF({
                  kind: "core",
                  core: QQ
                }), eQ.send("baf2corereopen")
              }
            }),
            onClose: () => {
              GF(null)
            }
          })), MF.push((0, Mq.u)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              GF({
                kind: "quests"
              }), (0, Gq.o)()
            }
          })), MF.push(uM(eQ, pQ, cQ)), CF = !1, MF.push(io((() => {
            null !== wM && qM(wM)
          }))), MF.push(oM()), MF.push(function() {
            const QQ = Tq.l.subscribe(zq, dq),
              FQ = () => {
                if (Bq) {
                  const QQ = Bq;
                  Bq = null, (0, Kq.w)(QQ)
                }
              },
              wQ = Tq.l.subscribe("toggleMenu", (QQ => {
                "inventory" === (null === QQ || void 0 === QQ ? void 0 : QQ.split("|")[0]) && FQ()
              })),
              LQ = Tq.l.subscribe("appManagerUpdated|openInGameMenuName", (QQ => {
                "inventory" === QQ && FQ()
              }));
            return () => {
              Tq.l.unsubscribe(QQ), Tq.l.unsubscribe(wQ), Tq.l.unsubscribe(LQ)
            }
          }()), MF.push(function(QQ) {
            const FQ = QM(QQ),
              wQ = Tq.l.subscribe(zq, (QQ => {
                de.follow(QQ, FQ)
              }));
            return () => {
              Tq.l.unsubscribe(wQ), de.clear()
            }
          }(tQ)), MF.push(function() {
            const QQ = document.documentElement,
              FQ = (0, zY.e)(".InvenBodyRight", [], (() => {
                const FQ = document.querySelector(".InvenBodyRight");
                FQ && QQ.style.setProperty("--baf2-backpack-width", `${FQ.offsetWidth}px`)
              }));
            return () => {
              FQ(), QQ.style.removeProperty("--baf2-backpack-width")
            }
          }()), MF.push(function() {
            const QQ = document.documentElement;
            return QQ.classList.add(ye), () => {
              QQ.classList.remove(ye)
            }
          }()), MF.push((() => {
            uQ.dispose(), mQ.dispose()
          })), AQ.start(tQ), MF.push((() => {
            AQ.dispose(), kF.dispose(), OQ.dispose()
          }))
        },
        onClose: () => {
          (0, Kq.w)([]), Bq = null, yq = new Set, wM = null, (0, Kq.u)(new Map), GM.clear();
          for (const QQ of MF) QQ();
          pQ.dispose(), wF.dispose(), cQ.dispose(), CQ.dispose(), LF.dispose(), qF.dispose(tQ), zQ.dispose(tQ), lQ.dispose(tQ), EQ.dispose(tQ), PQ.dispose(tQ), nQ.dispose(), ZQ.dispose(), NQ.dispose(), jQ.dispose(), aQ.dispose(), JQ.dispose(), oF.dispose(), DF.dispose(), vF.dispose(), dQ.dispose(tQ), QF.dispose(tQ), yQ.dispose(), mF.dispose(), eQ.clear()
        },
        onAfterRender: (QQ, FQ) => {
          var wQ, LQ, qQ;
          try {
            AQ.onAfterRender(FQ)
          } catch (mQ) {
            console.error("Error drawing BAF2 belt items", mQ)
          }
          try {
            kF.onAfterRender(tQ, oQ)
          } catch (mQ) {
            console.error("Error drawing BAF2 jet flames", mQ)
          }
          CF || (CF = !0, eQ.send("baf2clientready"));
          const DQ = tQ.getPositionView(oQ);
          YQ.onAfterRender(FQ, DQ, bQ), RQ.onAfterRender(FQ, DQ, bQ, xQ), uQ.run(bQ), LF.onAfterRender(tQ, DQ), qF.onAfterRender(tQ, DQ), OQ.onAfterRender(tQ, DQ), zQ.onAfterRender(tQ, DQ), lQ.onAfterRender(tQ, oQ, DQ), EQ.onAfterRender(tQ, oQ, DQ), PQ.onAfterRender(tQ, oQ), ZQ.onAfterRender(tQ, DQ), pQ.onPlayerY(DQ[1]), dQ.onAfterRender(tQ), QF.onAfterRender(tQ, oQ, DQ);
          const vQ = tQ.getTargetedBlock();
          wF.onAfterRender(tQ, oQ, null !== (wQ = null === vQ || void 0 === vQ ? void 0 : vQ.u9) && void 0 !== wQ ? wQ : 0, null !== (LQ = null === vQ || void 0 === vQ ? void 0 : vQ.position) && void 0 !== LQ ? LQ : null), mF.onAfterRender(tQ, FQ), iQ.onMining(function(QQ, FQ) {
            var wQ, LQ;
            const qQ = QQ.getMiningBlock();
            if (!qQ) return null;
            const oQ = (0, IQ.g)(QQ.getBlockId(qQ[0], qQ[1], qQ[2])),
              DQ = null !== (wQ = null === (LQ = QQ.owQ(FQ)) || void 0 === LQ ? void 0 : LQ.name) && void 0 !== wQ ? wQ : null,
              kQ = QQ.getItemStat(FQ, oQ.split("|")[0], "harvestLevel");
            return {
              block: oQ,
              x: qQ[0],
              y: qQ[1],
              z: qQ[2],
              ym: DQ,
              level: kQ
            }
          }(tQ, oQ), tQ.isMining(), performance.now()), "dropMap" === (null === (qQ = kQ.get()) || void 0 === qQ ? void 0 : qQ.kind) && jL(DQ[1]) && pF()
        },
        onPlayerChangeBlock: (QQ, FQ, wQ, LQ, qQ, DQ) => {
          QQ === oQ && function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
            const kQ = je(oQ, DQ, QQ.isPlayerCrouching(FQ));
            if (null === kQ) return;
            if (QQ.KU(wQ, LQ, qQ, kQ), !QQ.getClientOption(FQ, "canPickUpItems")) return;
            const vQ = Dw[kQ.split("|")[0]];
            var mQ, uQ, HQ;
            void 0 !== vQ && (mQ = QQ.getInventoryItems(), uQ = vQ, HQ = xx.e.maxItemStackSize, QQ.getInventoryFreeSlotCount(FQ) > 0 || mQ.some((QQ => null !== QQ && QQ.name === uQ && null !== QQ.amount && QQ.amount < HQ))) && QQ.playSound(FQ, (0, bM.c)("pickUp"), .5, 1)
          }(tQ, QQ, FQ, wQ, LQ, qQ, DQ)
        },
        onPlayerAltAction: (QQ, FQ, wQ, LQ, qQ) => {
          var DQ, kQ;
          if (!tQ.getClientOption(oQ, "canPickUpItems")) return;
          const vQ = null !== (DQ = null === (kQ = tQ.owQ(oQ)) || void 0 === kQ ? void 0 : kQ.name) && void 0 !== DQ ? DQ : null,
            mQ = function(QQ, FQ) {
              const wQ = QQ.split("|")[0];
              return WQ(wQ) && FQ !== vq && "Sky Pack" !== FQ ? wQ : null
            }(qQ, vQ);
          if (null !== mQ) return void(uF.tap(mQ, performance.now()) && FM(tQ, oQ, mQ, pQ));
          if (!VL(vQ)) return;
          const uQ = bF.isNewPress(performance.now()),
            HQ = function(QQ, FQ, wQ) {
              return !VL(FQ) || wQ ? null : BL(QQ)
            }(qQ, vQ, tQ.isPlayerCrouching(oQ));
          null !== HQ && uQ && tQ.KU(FQ, wQ, LQ, HQ)
        },
        onPlayerAttemptAltAction: (QQ, FQ, wQ, LQ, qQ) => {
          if (function(QQ, FQ, wQ, LQ, qQ) {
              "Workbench" === LQ.split("|")[0] && QQ.getClientOption(wQ, "canCraft") && (de.open("Workbench", qQ.get(), QM(QQ)), FQ.send("baf2station Workbench"))
            }(tQ, eQ, oQ, qQ, pQ), HM(tQ, oQ, qQ)) return "preventAction";
          SQ.onAltAction(tQ, oQ, qQ)
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          if ("baf2MachineStatus" === QQ) {
            var wQ, LQ, qQ, mQ, uQ, HQ, bQ, xQ, MQ, SQ, iQ, WQ, OQ, IQ, TQ, KQ;
            const QQ = FQ,
              oQ = QQ.baf2MachineTaught;
            DQ.set(QQ.baf2MachinePos, {
              status: QQ.baf2MachineStatus,
              power: null !== (wQ = QQ.baf2MachinePower) && void 0 !== wQ ? wQ : null,
              opLeftMs: null !== (LQ = QQ.baf2MachineOpLeftMs) && void 0 !== LQ ? LQ : null,
              dug: QQ.baf2MachineYield ? {
                item: QQ.baf2MachineYield,
                name: GQ([QQ.baf2MachineYield])[QQ.baf2MachineYield]
              } : null,
              powerCap: null !== (qQ = QQ.baf2MachinePowerCap) && void 0 !== qQ ? qQ : null,
              powerRates: null !== (mQ = QQ.baf2MachinePowerRates) && void 0 !== mQ ? mQ : null,
              coupled: !0 === QQ.baf2MachineCoupled,
              couplerLevel: null !== (uQ = QQ.baf2MachineCoupler) && void 0 !== uQ ? uQ : 1,
              taught: oQ,
              taughtName: oQ ? GQ([oQ])[oQ] : null,
              tier: null !== (HQ = QQ.baf2MachineTier) && void 0 !== HQ ? HQ : null,
              input: null !== (bQ = QQ.baf2MachineInput) && void 0 !== bQ ? bQ : null,
              inertCoupler: null !== (xQ = QQ.baf2MachineInertCoupler) && void 0 !== xQ ? xQ : null,
              inputShort: null !== (MQ = QQ.baf2MachineInputShort) && void 0 !== MQ ? MQ : null,
              field: null !== (SQ = QQ.baf2MachineField) && void 0 !== SQ ? SQ : null,
              noSeeds: !0 === QQ.baf2MachineNoSeeds,
              fuelFed: !0 === QQ.baf2MachineFuelFed,
              fuelFeeds: !0 === QQ.baf2MachineFuelFeeds,
              coreFull: !0 === QQ.baf2MachineCoreFull,
              waterUnpowered: !0 === QQ.baf2MachineWaterUnpowered,
              powerShort: !0 === QQ.baf2MachinePowerShort,
              powerWait: !0 === QQ.baf2MachinePowerWait,
              reactorPowered: !0 === QQ.baf2MachineReactorPowered,
              fuelLeftMs: null !== (iQ = QQ.baf2MachineFuelLeftMs) && void 0 !== iQ ? iQ : null,
              burning: null !== (WQ = QQ.baf2MachineBurning) && void 0 !== WQ ? WQ : null,
              fuelKeep: null !== (OQ = QQ.baf2MachineFuelKeep) && void 0 !== OQ ? OQ : null,
              water: null !== (IQ = QQ.baf2MachineWater) && void 0 !== IQ ? IQ : null,
              farm: null !== (TQ = QQ.baf2MachineFarm) && void 0 !== TQ ? TQ : null,
              cryo: null !== (KQ = QQ.baf2MachineCryo) && void 0 !== KQ ? KQ : null
            })
          } else if ("baf2StationOpen" === QQ) {
            const QQ = FQ.baf2Station;
            uF.consumeServerOpen(QQ, performance.now()) || FM(tQ, oQ, QQ, pQ)
          } else if ("baf2Power" === QQ) {
            const QQ = FQ;
            sQ.set(QQ), QQ.baf2PowerOpen && (GF({
              kind: "power"
            }), (0, Gq.o)())
          } else if (QQ === BQ.B) {
            const QQ = FQ;
            UQ.set(QQ), QQ.baf2WaterOpen && (GF({
              kind: "water"
            }), (0, Gq.o)())
          } else if ("baf2RxPlans" === QQ) {
            var zQ, lQ, fQ;
            const QQ = FQ;
            NQ.mp(QQ);
            const wQ = new Set(QQ.baf2RxPlanList.map((QQ => {
              let [FQ, wQ, LQ] = QQ;
              return `${FQ},${wQ},${LQ}`
            })));
            JQ.retain(wQ);
            const LQ = null === (zQ = kQ.get()) || void 0 === zQ ? void 0 : zQ.kind,
              qQ = "reactor" === LQ ? null === (lQ = jQ.get()) || void 0 === lQ ? void 0 : lQ.status.baf2RxAt : "battery" === LQ ? null === (fQ = aQ.get()) || void 0 === fQ ? void 0 : fQ.status.baf2BatAt : void 0;
            qQ && cF.has(qQ.join(",")) && !wQ.has(qQ.join(",")) && pF(), cF = wQ
          } else if ("baf2RxStatus" === QQ) {
            const QQ = FQ;
            jQ.set(QQ), QQ.baf2RxOpen && (GF({
              kind: "reactor"
            }), (0, Gq.o)())
          } else if ("baf2BatStatus" === QQ) {
            const QQ = FQ;
            aQ.set(QQ), QQ.baf2BatOpen && (GF({
              kind: "battery"
            }), (0, Gq.o)())
          } else if ("baf2RxAlarm" === QQ) JQ.mp(FQ);
          else if ("baf2Bomb" === QQ) nQ.mp(FQ, tQ.getPositionView(oQ));
          else if ("baf2Fallout" === QQ) ZQ.mp(FQ);
          else if ("baf2ColBeams" === QQ) yQ.onBeams(FQ);
          else if ("baf2ColStatus" === QQ) {
            const QQ = FQ;
            var VQ, hQ;
            if (yQ.onStatus(QQ), QQ.baf2ColOpen) yQ.onOpen(null !== (VQ = null === (hQ = tQ.owQ(oQ)) || void 0 === hQ ? void 0 : hQ.name) && void 0 !== VQ ? VQ : null), GF({
              kind: "collider"
            }), (0, Gq.o)()
          } else if ("baf2Terminal" === QQ) {
            const QQ = FQ;
            var EQ;
            if (rQ.apply(QQ)) QQ.baf2TermReset && (GF({
              kind: "terminal"
            }), (0, Gq.o)());
            else "terminal" === (null === (EQ = kQ.get()) || void 0 === EQ ? void 0 : EQ.kind) && (kQ.set(null), (0, Gq.f)())
          } else if ("baf2Core" === QQ) {
            var PQ;
            const QQ = FQ;
            if (vQ(!0 === QQ.baf2CoreNuclear), function(QQ, FQ) {
                return "core" === (null === QQ || void 0 === QQ ? void 0 : QQ.kind) && FQ.baf2CoreTier > QQ.core.message.baf2CoreTier
              }(kQ.get(), QQ)) return void(0, Gq.f)();
            if (QQ.baf2CoreRefresh && "core" !== (null === (PQ = kQ.get()) || void 0 === PQ ? void 0 : PQ.kind)) return;
            GF({
              kind: "core",
              core: eM(QQ, GQ)
            }), QQ.baf2CoreRefresh || (0, Gq.o)()
          } else if ("baf2WrenchUndo" === QQ) {
            const {
              baf2WrenchPos: QQ,
              baf2WrenchBlock: wQ
            } = FQ;
            tQ.KU(QQ[0], QQ[1], QQ[2], wQ)
          } else if ("baf2Toast" === QQ) {
            const QQ = FQ;
            XQ.heard(performance.now(), QQ.baf2ToastMs), cQ.show(QQ)
          } else if ("baf2Area" === QQ) CQ.arrive(FQ, null !== kQ.get());
          else if ("baf2Quest" === QQ) {
            const QQ = FQ;
            vQ(!0 === QQ.baf2QuestNuclear), pQ.set(QQ, function(QQ, FQ) {
              var wQ, LQ, qQ, oQ, DQ;
              const kQ = [];
              for (const [, , uQ, , , , , , HQ, bQ] of QQ.baf2QuestSteps) null !== uQ && kQ.push(uQ), kQ.push(...null !== HQ && void 0 !== HQ ? HQ : [], ...null !== bQ && void 0 !== bQ ? bQ : []);
              QQ.baf2QuestReward && kQ.push(QQ.baf2QuestReward);
              const vQ = null === (wQ = QQ.baf2QuestSide) || void 0 === wQ ? void 0 : wQ[2][2];
              vQ && kQ.push(vQ), kQ.push(...null !== (LQ = null === (qQ = QQ.baf2QuestSide) || void 0 === qQ ? void 0 : qQ[2][8]) && void 0 !== LQ ? LQ : [], ...null !== (oQ = null === (DQ = QQ.baf2QuestSide) || void 0 === DQ ? void 0 : DQ[2][9]) && void 0 !== oQ ? oQ : []);
              for (const [uQ] of null !== (mQ = QQ.baf2QuestAlso) && void 0 !== mQ ? mQ : []) {
                var mQ;
                kQ.push(uQ)
              }
              return FQ(kQ)
            }(QQ, GQ)), qM(QQ.baf2QuestTier)
          } else if ("baf2Route" === QQ) ! function(QQ, FQ) {
            let {
              baf2RouteCells: wQ,
              baf2RouteInto: LQ
            } = FQ;
            0 !== wQ.length && LQ ? QQ.setRouteChevrons({
              cells: wQ.map(((QQ, FQ) => {
                const [qQ, , oQ] = function(QQ, FQ, wQ) {
                  const LQ = wQ + 1 < QQ.length ? QQ[wQ + 1] : FQ;
                  return [LQ[0] - QQ[wQ][0], 0, LQ[2] - QQ[wQ][2]]
                }(wQ, LQ, FQ);
                return {
                  pos: QQ,
                  way: [qQ, oQ]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : QQ.setRouteChevrons(null)
          }(tQ, FQ);
          else if ("baf2QuestBook" === QQ) pQ.setBook(FQ);
          else if ("baf2Stalls" === QQ) YQ.set(FQ.baf2StallCells);
          else if (QQ === Aw.p) AQ.onMoves(FQ);
          else if (QQ === Aw.h) AQ.onLines(FQ);
          else if ("baf2Labels" === QQ) RQ.mp(FQ);
          else if ("baf2DropMap" === QQ) GF({
            kind: "dropMap",
            dropMap: FQ
          }), (0, Gq.o)();
          else if ("baf2Islands" === QQ) {
            var dQ, QF;
            const QQ = FQ;
            if (eQ.syncIslandEdits(QQ.baf2IslandsAnswered), !QQ.baf2IslandsOpen && "islands" !== (null === (dQ = kQ.get()) || void 0 === dQ ? void 0 : dQ.kind)) return;
            if (QQ.baf2IslandsOpen) {
              var FF, wF;
              const FQ = pq.c.get("openEverythingMenuName"),
                wQ = eQ.sent() >= xF,
                LQ = "other" !== (MF = {
                  askedAtMs: YF,
                  askSent: wQ,
                  reaskedAtMs: AF,
                  nowMs: Date.now(),
                  panel: null !== (FF = null === (wF = kQ.get()) || void 0 === wF ? void 0 : wF.kind) && void 0 !== FF ? FF : null,
                  inGameMenu: pq.c.get("openInGameMenuName"),
                  everythingMenu: null === FQ ? null : FQ === Hw.n.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== QQ.baf2IslandsFocusInvite
                }).everythingMenu && (!!MF.focusInvite || "islands" === MF.panel && "clientGame" === MF.inGameMenu || !(MF.nowMs - MF.reaskedAtMs < zm) && (MF.askSent && MF.nowMs - MF.askedAtMs < zm ? "core" === MF.panel && "clientGame" === MF.inGameMenu && null === MF.everythingMenu : "shop" === MF.everythingMenu || null === MF.inGameMenu));
              if (wQ && (YF = -1 / 0), AF = -1 / 0, !LQ) return void eF()
            }
            const wQ = (qF = QQ.baf2IslandsOpen, mF = "islands" === (null === (QF = kQ.get()) || void 0 === QF ? void 0 : QF.kind), HF = tF, bF = Date.now(), qF && !mF && bF - HF < zm);
            GF({
              kind: "islands",
              islands: QQ,
              arrivedAtMs: Date.now(),
              backToCore: lm(kQ.get())
            }), wQ && (tF = -1 / 0, AF = Date.now(), eQ.send(gQ)), QQ.baf2IslandsOpen && ("clientGame" !== pq.c.get("openInGameMenuName") && (0, cq.f)(), (0, Gq.o)())
          } else if ("baf2CoopTransfer" === QQ) {
            var LF;
            const QQ = FQ;
            QQ.baf2TransferOn ? (GF({
              kind: "transfer",
              transfer: QQ,
              arrivedAtMs: Date.now()
            }), (0, Gq.o)()) : "transfer" === (null === (LF = kQ.get()) || void 0 === LF ? void 0 : LF.kind) && (0, Gq.f)()
          } else "baf2IslandLeft" === QQ ? (CQ.dropHeld(), null !== kQ.get() && pF(), "inventory" === pq.c.get("openInGameMenuName") && (0, cq.f)()) : "baf2Arc" === QQ ? oF.mp(tQ, FQ) : "baf2Blade" === QQ ? DF.onBlade(tQ, FQ) : "baf2JetFlame" === QQ ? kF.mp(tQ, FQ) : "baf2GearPower" === QQ && vF.mp(FQ);
          var qF, mF, HF, bF, MF
        }
      };
      return SF
    }
  },
  38044: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ) {
      const LQ = new Set,
        qQ = new ResizeObserver(wQ),
        oQ = () => {
          const FQ = new Set(document.querySelectorAll(QQ));
          let oQ = !1;
          for (const QQ of LQ) FQ.has(QQ) || (qQ.unobserve(QQ), LQ.delete(QQ), oQ = !0);
          for (const QQ of FQ) LQ.has(QQ) || (qQ.observe(QQ), DQ.observe(QQ, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), LQ.add(QQ));
          oQ && wQ()
        },
        DQ = new MutationObserver((FQ => {
          FQ.some((QQ => "attributes" === QQ.type)) && wQ(), FQ.some((FQ => function(QQ, FQ, wQ) {
            if ("childList" !== QQ.type) return !1;
            for (const LQ of QQ.addedNodes)
              if (LQ instanceof Element && (LQ.matches(FQ) || LQ.querySelector(FQ))) return !0;
            for (const LQ of QQ.removedNodes)
              if (LQ instanceof Element)
                for (const QQ of wQ)
                  if (LQ.contains(QQ)) return !0;
            return !1
          }(FQ, QQ, LQ))) && oQ()
        }));
      DQ.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const kQ of FQ) qQ.observe(kQ);
      return window.addEventListener("resize", wQ), oQ(), wQ(), () => {
        qQ.disconnect(), DQ.disconnect(), window.removeEventListener("resize", wQ)
      }
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  38026: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      g: () => oQ
    });
    const LQ = new WeakMap;

    function qQ(QQ) {
      let FQ = LQ.get(QQ);
      return FQ || (FQ = {
        hidden: QQ.hidden,
        x: NaN,
        y: NaN
      }, LQ.set(QQ, FQ)), FQ
    }

    function oQ(QQ, FQ) {
      const wQ = qQ(QQ);
      wQ.hidden !== FQ && (wQ.hidden = FQ, QQ.hidden = FQ)
    }

    function DQ(QQ, FQ, wQ) {
      const LQ = qQ(QQ);
      LQ.x === FQ && LQ.y === wQ || (LQ.x = FQ, LQ.y = wQ, QQ.style.translate = `${FQ}vw ${wQ}vh`)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);