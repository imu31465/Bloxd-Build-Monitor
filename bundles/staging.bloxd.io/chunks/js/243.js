export const id = 243;
export const ids = [243];
export const modules = {
  38326: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC = ZC(38334);
    const wC = [0, 0, 0];
    class bC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC;
        this.pool = CC, this.origin = zC, this.count = 0, this.free = []
      }
      take() {
        var CC;
        const zC = null !== (CC = this.free.pop()) && void 0 !== CC ? CC : this.count++;
        return zC >= this.pool.HW && this.pool.grow(Math.max(2 * this.pool.HW, zC + 1)), this.hide(zC), zC
      }
      release(CC) {
        this.hide(CC), this.free.push(CC)
      }
      write(CC, zC, ZC, wC) {
        const {
          records: bC
        } = this.pool, {
          origin: nC
        } = this, fC = CC * QC.d;
        bC[fC] = zC - nC[0], bC[fC + 1] = ZC - nC[1], bC[fC + 2] = wC - nC[2], bC[fC + QC.g] = 0, this.pool.markDirty(CC)
      }
      hide(CC) {
        this.pool.records[CC * QC.d + QC.g] = 1, this.pool.markDirty(CC)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class nC {
      constructor(CC, zC, ZC) {
        this.api = CC, this.model = zC, this.initialCapacity = ZC, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(CC) {
        let zC = this.kinds.get(CC);
        if (void 0 === zC) {
          const ZC = this.api.createInstancePool({
            ...this.model,
            item: CC
          }, this.initialCapacity);
          null === ZC || void 0 === ZC || ZC.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zC = ZC && new bC(ZC, this.origin), this.kinds.set(CC, zC)
        }
        return zC
      }
      follow(CC) {
        const {
          origin: zC
        } = this;
        if (Math.abs(CC[0] - zC[0]) <= 512 && Math.abs(CC[1] - zC[1]) <= 512 && Math.abs(CC[2] - zC[2]) <= 512) return !1;
        zC[0] = Math.floor(CC[0]), zC[1] = Math.floor(CC[1]), zC[2] = Math.floor(CC[2]);
        for (const ZC of this.kinds.values()) null === ZC || void 0 === ZC || ZC.pool.setOrigin(zC[0], zC[1], zC[2]);
        return !0
      }
      commit() {
        for (const CC of this.kinds.values()) null === CC || void 0 === CC || CC.commit()
      }
      dispose() {
        for (const CC of this.kinds.values()) null === CC || void 0 === CC || CC.dispose();
        this.kinds.clear()
      }
    }
  },
  38349: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      f: () => fC,
      j: () => oC
    });
    const QC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      wC = [0, 1, 2, 0, 2, 3],
      bC = [4, 5];

    function nC(CC, zC, ZC, QC, wC) {
      for (let nC = 0; nC < 6; nC++) bC.includes(nC) === wC && qC(CC, zC, ZC, QC, nC)
    }

    function fC(CC, zC, ZC, QC) {
      for (let wC = 0; wC < 6; wC++) qC(CC, zC, ZC, QC, wC)
    }

    function oC(CC, zC, ZC, bC, nC) {
      for (let fC = 0; fC < 6; fC++)
        for (const oC of [0, 1]) {
          const [qC, FC, WC] = [oC + 2, oC + 1, (oC + 3) % 4], NC = CC.length / 3;
          for (const [zC, wC] of [
              [oC, FC],
              [qC, FC],
              [qC, WC],
              [oC, WC]
            ])
            for (let oC = 0; oC < 3; oC++) {
              const qC = QC[3 * (4 * fC + zC) + oC],
                FC = QC[3 * (4 * fC + wC) + oC];
              CC.push((qC + (FC - qC) * nC) * bC / 2 + ZC[oC])
            }
          for (const CC of wC) zC.push(NC + CC)
        }
    }

    function qC(CC, zC, ZC, bC, nC) {
      let [fC, oC, qC] = ZC, [FC, WC, NC] = bC;
      const MC = CC.length / 3;
      for (let wC = 4 * nC; wC < 4 * nC + 4; wC++) CC.push(QC[3 * wC] * FC / 2 + fC, QC[3 * wC + 1] * WC / 2 + oC, QC[3 * wC + 2] * NC / 2 + qC);
      for (const QC of wC) zC.push(MC + QC)
    }
  },
  38316: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => iG
    });
    var QC = ZC(48);
    const wC = [{
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
      bC = 10;
    let nC = !0;

    function fC() {
      return nC
    }

    function oC(CC) {
      nC = CC
    }
    const qC = {
      11: "uraniumLine",
      12: "centrifuge",
      13: "reactorOnline",
      14: "cryoCoolant",
      15: "moreLasers"
    };

    function FC() {
      return nC ? wC.length : bC
    }

    function WC(CC) {
      var zC, ZC;
      return null !== (zC = null === (ZC = wC[CC - 1]) || void 0 === ZC ? void 0 : ZC.reactorTier) && void 0 !== zC ? zC : 0
    }

    function NC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WC(CC) > 0;
      return ZC && !nC ? "hidden" : CC <= zC ? "open" : ZC ? zC < 5 ? "hidden" : zC < bC ? "teaser" : "locked" : "locked"
    }

    function MC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const {
        kind: QC,
        n: wC
      } = pC(CC);
      return {
        key: zC[QC],
        params: {
          [QC]: ZC ? String(wC) : wC
        }
      }
    }
    const gC = {
      tier: "coreTierName",
      stage: "coreStageName",
      atomic: "coreAtomicName"
    };

    function SC(CC, zC) {
      return WC(CC) > 0 && zC < bC
    }

    function pC(CC) {
      const zC = WC(CC);
      if (zC > 0) return {
        kind: "atomic",
        n: zC,
        short: `A${zC}`
      };
      const ZC = function(CC) {
        return CC >= 6 && CC <= 10 ? CC - 6 + 1 : 0
      }(CC);
      return ZC > 0 ? {
        kind: "stage",
        n: ZC,
        short: `S${ZC}`
      } : {
        kind: "tier",
        n: CC,
        short: String(CC)
      }
    }

    function PC(CC) {
      return wC[Math.max(1, Math.min(CC, wC.length)) - 1]
    }

    function GC(CC, zC) {
      return CC < zC ? function(CC) {
        var zC;
        return null !== (zC = wC[CC]) && void 0 !== zC ? zC : null
      }(CC) : null
    }
    const RC = "baf2coresubmit",
      AC = "baf2corebankpause",
      xC = "baf2coredeposit",
      JC = "baf2corechargepause";

    function IC(CC) {
      var zC;
      return null !== (zC = CC.baf2CoreOpen) && void 0 !== zC ? zC : bC
    }
    const iC = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];

    function vC(CC) {
      return iC.includes(CC)
    }
    const eC = (CC, zC) => zC.map((zC => [zC, [CC]])),
      hC = Object.fromEntries([...eC("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...eC("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...eC("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator", "Wire Mill", "Press", "Splitter", "Alloy Kiln", "Electric Drill", "Assembler", "Sorting Gate", "Belt Loader", "Storage Silo", "Solar Panel", "Charge Vault", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Fast Belt", "Charging Pad", "Crystal Vat", "Forge Hopper", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Belt Tunnel"]), ...eC("Parts Bench", ["Motor", "Logic Board", "Machine Hull", "Power Coupler", "Voltite Cell", "Star Alloy", "Starframe", "Comet Core"]), ...eC("Tool Bench", ["Recall Beacon", "Wrench", "Iron Hammer", "Ore Lens", "Homing Beacon", "Pull Charm", "Vein Breaker", "Sky Pack", "Starbore Drill", "Arc Caster", "Voltplate Helmet", "Voltplate Chestplate", "Voltplate Gauntlets", "Voltplate Leggings", "Voltplate Boots"]), ...eC("Machine Bench", ["Condenser", "Fluid Pipe", "Fluid Tank", "Centrifuge", "Synthesizer", "Coolant Mixer"]), ...eC("Parts Bench", ["Heat Exchanger", "Containment Plate"]), ...eC("Parts Bench", ["Focus Lens"]), ...eC("Machine Bench", ["Laser", "Collider"]), ...eC("Atomic Bench", ["Graphite Block", "Fuel Rod", "Coolant Channel", "Reactor Frame", "Reactor Glass", "Reactor Port", "Battery Cell", "Reactor Blueprint", "Atomic Bomb", "Nova Bomb"]), ...eC("Tool Bench", ["Jet Chestplate", "Nova Helmet", "Nova Chestplate", "Nova Gauntlets", "Nova Leggings", "Nova Boots", "Nova Blade", "Nova Jet Chestplate", "Nova Multitool"]), ...eC("Machine Bench", ["Express Belt", "Fast Loader", "Dense Silo", "Mob Farm", "Wireless Terminal", "Uranium Glass", "Glow Lamp"]), ...eC("Parts Bench", ["Advanced Coupler", "Nova Coupler"]), ...eC("Tool Bench", ["Mob Cage"]), ...eC("Tool Bench", ["Pocket Terminal"]), ...eC("Tool Bench", ["Comet Beacon"]), ...eC("Tool Bench", ["Nova Wrench"])]);
    new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);

    function KC(CC) {
      var zC;
      return null !== (zC = hC[CC]) && void 0 !== zC ? zC : ["Workbench"]
    }

    function YC(CC) {
      return KC(CC)[0]
    }
    wC.slice(1).map(((CC, zC) => `Core Tier ${zC+2}`));
    var dC = ZC(9194);
    const mC = ["on", "hud", "off"];

    function HC(CC) {
      return "on" === CC
    }
    var EC = ZC(326);
    const lC = "Mob Farm",
      XC = {
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
      cC = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
      uC = {
        1: 20,
        2: 60,
        3: 120
      },
      rC = "baf2farmvoid",
      sC = "Caged ",
      TC = " Spawner Block";

    function aC(CC) {
      return `lifeform:${(0,EC.ke)(CC)}`
    }

    function tC(CC) {
      if (!CC) return null;
      if (CC.startsWith(sC)) {
        const zC = CC.slice(6);
        return cC.includes(zC) ? zC : null
      }
      if (CC.endsWith(TC)) {
        const zC = CC.slice(0, -14);
        return void 0 !== XC[zC] ? zC : null
      }
      return null
    }

    function DC(CC) {
      return !0 === CC.mobFarm
    }

    function jC(CC, zC) {
      return uC[XC[zC]] * CC.opMs / 1e3
    }
    const yC = new Map;
    const LC = "baf2islands",
      UC = "baf2islandnew";

    function BC(CC) {
      const zC = wC.findIndex((zC => zC.unlocks.includes(CC)));
      return zC < 0 ? 1 : zC + 1
    }

    function OC(CC) {
      return Math.floor(CC).toLocaleString("en-US")
    }
    var kC = ZC(38259);
    const VC = "baf2terminaltake",
      Cz = "baf2terminalput",
      zz = ["one", "stack", "fill"];

    function Zz(CC, zC, ZC) {
      return `${VC} ${CC} ${zC} ${ZC}`
    }

    function Qz(CC, zC, ZC) {
      return `${Cz} ${CC} ${zC} ${ZC}`
    }

    function wz(CC) {
      return `${Cz} ${CC}`
    }
    const bz = [
      [`${VC} `, "take"],
      [`${Cz} `, "put"]
    ];

    function nz(CC) {
      const zC = bz.find((zC => {
        let [ZC] = zC;
        return CC.startsWith(ZC)
      }));
      if (!zC) return null;
      const [ZC, QC] = zC, [wC, bC, ...nC] = CC.slice(ZC.length).trim().split(" "), fC = Number(wC);
      if (!Number.isSafeInteger(fC) || fC <= 0) return null;
      if ("put" === QC && void 0 === bC) return {
        kind: "putAll",
        seq: fC
      };
      const oC = function(CC) {
        if (zz.includes(CC)) return CC;
        const zC = Number(CC);
        return /^\d+$/.test(CC) && Number.isSafeInteger(zC) && zC > 0 ? zC : null
      }(null !== bC && void 0 !== bC ? bC : "");
      return null === oC || 0 === nC.length ? null : {
        kind: QC,
        seq: fC,
        mode: oC,
        item: nC.join(" ")
      }
    }

    function fz(CC, zC) {
      const ZC = "number" === typeof CC ? CC : "one" === CC ? 1 : "stack" === CC ? 99 : zC;
      return Math.min(zC, ZC)
    }

    function oz(CC, zC) {
      const ZC = CC => "number" === typeof CC ? CC : "one" === CC ? 1 : 99;
      return "fill" === CC || "fill" === zC ? "fill" : ZC(CC) + ZC(zC)
    }

    function qz(CC, zC) {
      const ZC = nz(CC),
        QC = nz(zC),
        wC = ZC && QC ? function(CC, zC) {
          return "take" === CC.kind || "take" === zC.kind ? "take" === CC.kind && "take" === zC.kind && CC.item === zC.item ? {
            ...zC,
            mode: oz(CC.mode, zC.mode)
          } : null : "putAll" === CC.kind || "putAll" === zC.kind ? {
            kind: "putAll",
            seq: zC.seq
          } : CC.item === zC.item ? {
            ...zC,
            mode: oz(CC.mode, zC.mode)
          } : null
        }(ZC, QC) : null;
      return wC ? "putAll" === (bC = wC).kind ? wz(bC.seq) : "put" === bC.kind ? Qz(bC.seq, bC.mode, bC.item) : Zz(bC.seq, bC.mode, bC.item) : null;
      var bC
    }
    const Fz = "baf2rx";

    function Wz(CC, zC) {
      for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
      return [Fz, CC[0], CC[1], CC[2], zC, ...QC].join(" ")
    }
    const Nz = 2,
      Mz = 4,
      gz = 8,
      Sz = 16,
      pz = 32,
      Pz = 64,
      Gz = 128,
      Rz = 256,
      Az = 512,
      xz = [{
        item: "Raw Voltite",
        chance: .55
      }, {
        item: "Raw Gold",
        chance: .43
      }, {
        item: "Diamond",
        chance: .02
      }],
      Jz = [{
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
    const Iz = "Biomass",
      iz = ["Dandelion", "Poppy", "Red Tulip", "Pink Tulip", "White Tulip", "Orange Tulip", "Daisy", "Bluebell", "Forget-me-not", "Allium", "Azure Bluet", "Lily of the Valley", "Shadow Rose", "Grass", "Tall Grass", "Pine Grass", "Spectral Grass", "Jungle Tall Grass", "Pine Fern", "Autumn Fern", "Dead Bush", "Cactus", "Red Mushroom", "Brown Mushroom", "Vines", "Aspen Sapling", "Maple Sapling", "Jungle Sapling", "Plum Sapling", "Pine Sapling", "Cedar Sapling", "Palm Sapling", "Pear Sapling", "Cherry Sapling", "Spectral Sapling", "Mango Sapling"];

    function vz(CC) {
      return {
        input: Iz,
        inputAmount: 1,
        output: CC,
        outputAmount: 1
      }
    }
    const ez = "baf2synth",
      hz = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthesizer", "Mob Farm", "Coolant Mixer"],
      Kz = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
      Yz = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
      dz = function(CC, zC) {
        return {
          input: CC,
          inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          output: zC,
          outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bonus: arguments.length > 4 ? arguments[4] : void 0
        }
      },
      mz = function(CC, zC) {
        return {
          ...dz(CC, zC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
          nuclear: !0
        }
      },
      Hz = Kz.map((CC => mz(CC, "Biomass", 2))),
      Ez = {
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
          recipes: [dz("Raw Iron", "Iron Grit", 2, 1, {
            item: "Gold Grit",
            chance: .05
          }), dz("Raw Copper", "Copper Grit", 2, 1, {
            item: "Iron Grit",
            chance: .1
          }), dz("Raw Gold", "Gold Grit", 2), dz("Messy Stone", "Sand"), dz("Gravel", "Sand"), dz("Raw Voltite", "Voltite Dust", 2), dz("Moonstone", "Moonstone Dust", 4), dz("Wheat Seeds", "Fertiliser"), dz("Raw Uranium", "Uranium Grit", 2), mz("Mossy Messy Stone", "Sand"), ...Hz],
          couplable: !0
        },
        Smelter: {
          kind: "Smelter",
          opMs: 2e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [dz("Iron Grit", "Iron Bar"), dz("Copper Grit", "Copper Bar"), dz("Gold Grit", "Gold Bar"), dz("Raw Iron", "Iron Bar"), dz("Raw Copper", "Copper Bar"), dz("Raw Gold", "Gold Bar"), dz("Sand", "Glass"), dz("Messy Stone", "Stone"), ...EC.Ac.map((CC => dz(CC, "Charcoal", 1, 4))), dz("Wheat", "Bread", 1, 2), ...Kz.map(((CC, zC) => mz(CC, Yz[zC])))],
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
          recipes: [dz("Iron Bar", "Iron Plate"), dz("Gold Bar", "Gold Plate")],
          powerPerOp: 24
        },
        "Wire Mill": {
          kind: "Wire Mill",
          opMs: 3e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [dz("Copper Bar", "Copper Wire", 3)],
          powerPerOp: 24
        },
        "Alloy Kiln": {
          kind: "Alloy Kiln",
          opMs: 4e3,
          inputSlot: 0,
          fuelSlot: 1,
          outputSlots: [2, 3, 4],
          recipes: [dz("Iron Grit", "Steel Bar", 1, 2)],
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
          recipes: [dz("Raw Iron", "Iron Grit", 3, 1, {
            item: "Gold Grit",
            chance: .05
          }), dz("Raw Copper", "Copper Grit", 3, 1, {
            item: "Iron Grit",
            chance: .1
          }), dz("Raw Gold", "Gold Grit", 3), dz("Raw Voltite", "Voltite Dust", 3), dz("Messy Stone", "Sand", 2), dz("Gravel", "Sand", 2), dz("Moonstone", "Moonstone Dust", 6), dz("Raw Uranium", "Uranium Grit", 3), mz("Mossy Messy Stone", "Sand", 2), ...Hz],
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
          table: xz
        },
        "Crystal Vat": {
          kind: "Crystal Vat",
          opMs: 12e3,
          inputSlot: 0,
          fuelSlot: null,
          outputSlots: [1, 2, 3],
          recipes: [dz("Coal", "Diamond", 1, 24), dz("Voltite Dust", "Moonstone", 1, 12)],
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
        ...kC.g
      },
      lz = {
        Crusher: [dz("Spent Pellet", "Glow Dust"), dz("Wheat Seeds", "Biomass"), dz("Wheat", "Biomass"), dz("Dead Bush", "Biomass"), dz("Dusk Moss", "Biomass"), dz("Rotten Flesh", "Biomass"), dz("Bone", "Biomass", 2)],
        "Shatter Mill": [dz("Spent Pellet", "Glow Dust"), dz("Wheat Seeds", "Biomass"), dz("Wheat", "Biomass"), dz("Dead Bush", "Biomass"), dz("Dusk Moss", "Biomass"), dz("Rotten Flesh", "Biomass"), dz("Bone", "Biomass", 2), ...EC.Ac.map((CC => dz(CC, "Biomass")))],
        Smelter: [dz("Biomass", "Fertiliser", 2)],
        Press: [dz("Coal", "Graphite", 1, 4)]
      },
      Xz = "Power Coupler",
      cz = "Advanced Coupler",
      uz = "Nova Coupler",
      rz = [{
        item: Xz,
        level: 1,
        divisor: 2,
        powerPerS: 8
      }, {
        item: cz,
        level: 2,
        divisor: 4,
        powerPerS: 32
      }, {
        item: uz,
        level: 3,
        divisor: 8,
        powerPerS: 128
      }];
    const sz = new Map;

    function Tz(CC) {
      var zC, ZC;
      return null !== (zC = null !== (ZC = CC.fuelSlot) && void 0 !== ZC ? ZC : CC.couplerSlot) && void 0 !== zC ? zC : null
    }

    function az(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      if (!CC.couplable) throw new Error(`${CC.kind} takes no Power Coupler`);
      let ZC = sz.get(CC);
      ZC || (ZC = [], sz.set(CC, ZC));
      let QC = ZC[zC];
      if (!QC) {
        var wC;
        const {
          divisor: bC,
          powerPerS: nC
        } = rz[zC - 1], fC = CC.opMs / bC, oC = void 0 !== CC.fluidMade || void 0 !== CC.cryoMade ? CC.powerPerOp : nC * fC / 1e3;
        QC = {
          ...CC,
          fuelSlot: null,
          couplerSlot: null !== (wC = Tz(CC)) && void 0 !== wC ? wC : void 0,
          opMs: fC,
          powerPerOp: oC,
          coupled: !0
        }, zC > 1 && (QC = {
          ...QC,
          couplerLevel: zC
        }), ZC[zC] = QC
      }
      return QC
    }
    const tz = new Map;
    const Dz = new Map;

    function jz(CC, zC) {
      if (null === zC || (ZC = zC, !iz.includes(ZC))) return CC;
      var ZC;
      let QC = Dz.get(zC);
      return QC || (QC = {
        ...CC,
        recipes: [vz(zC)]
      }, Dz.set(zC, QC)), QC
    }

    function yz(CC) {
      return !0 === CC.synth
    }
    const Lz = (CC, zC, ZC, QC) => ({
        output: CC,
        outputAmount: zC,
        tier: ZC,
        inputs: QC.map((CC => {
          let [zC, ZC] = CC;
          return {
            item: zC,
            amount: ZC
          }
        }))
      }),
      Uz = Object.fromEntries([Lz("Conveyor Belt", 4, 1, [
        ["Iron Bar", 2]
      ]), Lz("Motor", 1, 2, [
        ["Iron Plate", 2],
        ["Copper Wire", 6],
        ["Iron Bar", 1]
      ]), Lz("Splitter", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Lz("Logic Board", 1, 3, [
        ["Gold Plate", 1],
        ["Copper Wire", 6],
        ["Glass", 1]
      ]), Lz("Machine Hull", 1, 3, [
        ["Steel Bar", 4],
        ["Iron Plate", 2]
      ]), Lz("Power Coupler", 1, 3, [
        ["Logic Board", 1],
        ["Copper Wire", 4],
        ["Iron Plate", 2]
      ]), Lz("Sorting Gate", 2, 3, [
        ["Iron Plate", 2],
        ["Copper Wire", 4]
      ]), Lz("Belt Loader", 1, 3, [
        ["Iron Plate", 2],
        ["Motor", 1]
      ]), Lz("Voltite Cell", 1, 4, [
        ["Voltite Dust", 2],
        ["Steel Bar", 1],
        ["Copper Wire", 4]
      ]), Lz("Fast Belt", 4, 4, [
        ["Conveyor Belt", 4],
        ["Motor", 1],
        ["Steel Bar", 1]
      ]), Lz("Star Alloy", 1, 5, [
        ["Moonstone Dust", 1],
        ["Steel Bar", 2],
        ["Voltite Cell", 1]
      ]), Lz("Starframe", 1, 10, [
        ["Star Alloy", 4],
        ["Machine Hull", 2]
      ]), Lz("Comet Core", 1, 5, [
        ["Comet Shard", 8]
      ]), Lz("Belt Lift", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 2]
      ]), Lz("Belt Drop", 2, 2, [
        ["Conveyor Belt", 2],
        ["Iron Plate", 1]
      ]), Lz("Belt Tunnel", 2, 6, [
        ["Conveyor Belt", 2],
        ["Steel Bar", 4],
        ["Machine Hull", 1]
      ]), Lz("Fluid Pipe", 8, 11, [
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Lz("Fluid Tank", 1, 11, [
        ["Glass", 4],
        ["Iron Plate", 2],
        ["Steel Bar", 1]
      ]), Lz("Heat Exchanger", 1, 11, [
        ["Copper Wire", 4],
        ["Iron Plate", 2],
        ["Glass", 1]
      ]), Lz("Containment Plate", 2, 11, [
        ["Steel Bar", 2],
        ["Star Alloy", 1]
      ]), Lz("Focus Lens", 1, 14, [
        ["Diamond", 3],
        ["Moonstone", 2],
        ["Glass", 2],
        ["Glow Dust", 1]
      ]), Lz("Graphite Block", 1, 12, [
        ["Graphite", 4]
      ]), Lz("Fuel Rod", 1, 12, [
        ["Uranium Pellet", 1],
        ["Graphite", 1],
        ["Steel Bar", 2]
      ]), Lz("Coolant Channel", 1, 12, [
        ["Heat Exchanger", 1],
        ["Steel Bar", 1]
      ]), Lz("Reactor Frame", 4, 12, [
        ["Containment Plate", 1],
        ["Steel Bar", 1]
      ]), Lz("Reactor Glass", 4, 12, [
        ["Glass", 2],
        ["Steel Bar", 1]
      ]), Lz("Reactor Port", 1, 12, [
        ["Containment Plate", 2],
        ["Motor", 1],
        ["Logic Board", 1]
      ]), Lz("Battery Cell", 1, 11, [
        ["Voltite Cell", 1],
        ["Containment Plate", 1],
        ["Logic Board", 1]
      ]), Lz("Advanced Coupler", 1, 13, [
        ["Power Coupler", 1],
        ["Star Alloy", 1],
        ["Logic Board", 2]
      ]), Lz("Nova Coupler", 1, 15, [
        ["Nova Matter", 1],
        ["Star Alloy", 2],
        ["Logic Board", 1]
      ])].map((CC => [CC.output, CC]))),
      Bz = new Map;

    function Oz(CC, zC) {
      let ZC = Ez[CC];
      if (zC.atomic && (ZC = function(CC) {
          const zC = lz[CC.kind];
          if (!zC) return CC;
          let ZC = tz.get(CC.kind);
          if (!ZC) {
            const QC = new Set(zC.map((CC => CC.input))),
              wC = CC.recipes.filter((CC => !QC.has(CC.input)));
            ZC = {
              ...CC,
              recipes: [...wC, ...zC]
            }, tz.set(CC.kind, ZC)
          }
          return ZC
        }(ZC)), ZC.synth) return jz(ZC, zC.taught);
      if (zC.coupled && ZC.couplable) return az(ZC, zC.level);
      const QC = ZC.inputSlots && null !== zC.taught ? Uz[zC.taught] : void 0;
      if (!QC) return ZC;
      const wC = `${CC}|${QC.output}`;
      let bC = Bz.get(wC);
      return bC || (bC = {
        ...ZC,
        bench: QC
      }, Bz.set(wC, bC)), bC
    }
    const kz = ["Diamond", "Moonstone"];

    function Vz(CC) {
      return new Set(CC.flatMap((CC => CC.bonus ? [CC.output, CC.bonus.item] : [CC.output])).filter((CC => !kz.includes(CC))))
    }
    const CZ = Object.values(Ez).flatMap((CC => CC.recipes));
    Vz(CZ.filter((CC => !0 !== CC.nuclear))), Vz([...CZ.filter((CC => !0 === CC.nuclear)), ...Object.values(lz).flat()]);

    function zZ(CC) {
      return null === CC.inputSlot && void 0 === CC.inputSlots && void 0 === CC.powerMade && void 0 === CC.fluidMade && !CC.treeCutter && void 0 === CC.table
    }

    function ZZ(CC) {
      return !0 === CC.treeCutter
    }
    const QZ = ["Voltite Cell"];

    function wZ(CC) {
      var zC, ZC;
      return null !== (zC = null === (ZC = CC.fuels) || void 0 === ZC ? void 0 : ZC.some((CC => QZ.includes(CC)))) && void 0 !== zC && zC
    }
    const bZ = {
        Coal: 32e3,
        Charcoal: 32e3,
        ...Object.fromEntries(EC.Ac.map((CC => [CC, 8e3]))),
        ...Object.fromEntries(EC.kd.map((CC => [CC, 2e3]))),
        "Voltite Cell": 12e4
      },
      nZ = {
        "Coal Deposit": "Coal",
        "Iron Deposit": "Raw Iron",
        "Stone Deposit": "Messy Stone",
        "Copper Deposit": "Raw Copper",
        "Gold Deposit": "Raw Gold",
        "Voltite Deposit": "Raw Voltite",
        "Uranium Deposit": "Raw Uranium"
      },
      fZ = {
        "Uranium Deposit": 4e3
      };

    function oZ(CC) {
      var zC;
      return null !== (zC = Object.keys(nZ).find((zC => nZ[zC] === CC))) && void 0 !== zC ? zC : null
    }

    function qZ(CC) {
      return hz.includes(CC)
    }

    function FZ(CC) {
      return !0 !== CC.nuclear || fC()
    }
    var WZ = ZC(310);
    var NZ = ZC(9279),
      MZ = ZC(9207),
      gZ = ZC(9285),
      SZ = ZC(9274);
    const pZ = "Reactor Controller",
      PZ = "Reactor Port",
      GZ = "Battery Cell",
      RZ = ["fuel", "water", "waste"],
      AZ = {
        fuel: PZ,
        water: "Reactor Port|meta|rot1|Water",
        waste: "Reactor Port|meta|rot1|Waste"
      },
      xZ = {
        1: [0, 0, 1],
        2: [1, 0, 0],
        3: [0, 0, -1],
        4: [-1, 0, 0]
      },
      JZ = {
        reactor: {
          min: 4,
          max: 12
        },
        battery: {
          min: 2,
          max: 12
        }
      },
      IZ = "Reactor Frame",
      iZ = "Reactor Glass",
      vZ = {
        edge: [IZ],
        cap: [iZ, PZ],
        wall: [iZ, PZ],
        inside: ["Fuel Rod", "Graphite Block", "Coolant Channel", "Air"],
        ctrl: [pZ]
      },
      eZ = {
        edge: [GZ],
        cap: [GZ],
        wall: [GZ],
        inside: [GZ],
        ctrl: [GZ]
      },
      hZ = ["edge", "cap", "wall", "inside"],
      KZ = ["Reactor Slag"];

    function YZ(CC) {
      return KZ.includes(dZ(CC))
    }

    function dZ(CC) {
      const zC = CC.indexOf("|");
      return zC < 0 ? CC : CC.slice(0, zC)
    }

    function mZ(CC) {
      return dZ(CC) === pZ ? "reactor" : null
    }

    function HZ(CC) {
      return dZ(CC) !== PZ ? null : CC.endsWith("|Water") ? "water" : CC.endsWith("|Waste") ? "waste" : "fuel"
    }

    function EZ(CC) {
      const zC = HZ(CC);
      return null === zC ? null : cZ(AZ[RZ[(RZ.indexOf(zC) + 1) % RZ.length]], function(CC) {
        return CC.includes(lZ)
      }(CC))
    }
    const lZ = "|meta|rot1|Formed",
      XZ = new Set([IZ, iZ, PZ]);

    function cZ(CC, zC) {
      var ZC;
      const QC = dZ(CC);
      if (!XZ.has(QC)) return CC;
      if (QC !== PZ) return zC ? QC + lZ : QC;
      const wC = null !== (ZC = HZ(CC)) && void 0 !== ZC ? ZC : "fuel";
      return zC ? "fuel" === wC ? QC + lZ : `${QC}${lZ}|${"water"===wC?"Water":"Waste"}` : AZ[wC]
    }

    function uZ(CC, zC) {
      const ZC = QQ(CC, zC);
      if ("Air" === ZC) return !1;
      const QC = "reactor" === CC ? vZ : eZ;
      return hZ.some((CC => QC[CC].includes(ZC))) || "reactor" === CC && KZ.includes(ZC)
    }

    function rZ(CC) {
      return JZ[CC]
    }

    function sZ(CC) {
      var zC;
      return null !== (zC = xZ[CC]) && void 0 !== zC ? zC : xZ[1]
    }

    function TZ(CC) {
      const [zC, , ZC] = sZ(CC);
      return [ZC, 0, -zC]
    }

    function aZ(CC, zC, ZC, QC, wC, bC) {
      return {
        ctrl: [CC[0], CC[1], CC[2]],
        rot: xZ[zC] ? zC : 1,
        w: ZC,
        h: QC,
        d: wC,
        cu: bC[0],
        cv: bC[1]
      }
    }

    function tZ(CC, zC) {
      return "reactor" === CC ? [Math.floor((zC - 1) / 2), 0] : [0, 0]
    }

    function DZ(CC, zC, ZC, QC, wC) {
      let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC.rot;
      if (ZC === CC.w && QC === CC.h && wC === CC.d && bC === CC.rot) return CC;
      const [nC] = tZ(zC, CC.w);
      if (CC.cu === nC && CC.cv <= 1) return aZ(CC.ctrl, bC, ZC, QC, wC, tZ(zC, ZC));
      const fC = (CC, zC) => Math.max(1, Math.min(zC, CC));
      return aZ(CC.ctrl, bC, ZC, QC, wC, [fC(CC.cu, ZC - 2), 0 === CC.cv ? 0 : fC(CC.cv, QC - 2)])
    }
    const jZ = 11,
      yZ = 2 * jZ + 1;
    new Uint8Array(yZ * yZ * yZ);

    function LZ(CC) {
      return CC.w * CC.h * CC.d
    }

    function UZ(CC) {
      const zC = TZ(CC.rot);
      return [CC.ctrl[0] - zC[0] * CC.cu, CC.ctrl[1] - CC.cv, CC.ctrl[2] - zC[2] * CC.cu]
    }

    function BZ(CC) {
      return CC.cv * CC.d * CC.w + CC.cu
    }

    function OZ(CC, zC) {
      const ZC = zC % CC.w,
        QC = Math.floor(zC / CC.w) % CC.d;
      return [ZC, Math.floor(zC / (CC.w * CC.d)), QC]
    }

    function kZ(CC, zC) {
      const [ZC, QC, wC] = OZ(CC, zC), bC = UZ(CC), nC = sZ(CC.rot), fC = TZ(CC.rot);
      return [bC[0] + fC[0] * ZC - nC[0] * wC, bC[1] + QC, bC[2] + fC[2] * ZC - nC[2] * wC]
    }

    function VZ(CC, zC) {
      const ZC = UZ(CC),
        QC = sZ(CC.rot),
        wC = TZ(CC.rot),
        bC = zC[0] - ZC[0],
        nC = zC[2] - ZC[2],
        fC = bC * wC[0] + nC * wC[2],
        oC = -(bC * QC[0] + nC * QC[2]),
        qC = zC[1] - ZC[1];
      return fC < 0 || fC >= CC.w || qC < 0 || qC >= CC.h || oC < 0 || oC >= CC.d ? -1 : (qC * CC.d + oC) * CC.w + fC
    }

    function CQ(CC, zC) {
      if (zC === BZ(CC)) return "ctrl";
      const [ZC, QC, wC] = OZ(CC, zC), bC = 0 === QC || QC === CC.h - 1, nC = Number(0 === ZC || ZC === CC.w - 1) + Number(bC) + Number(0 === wC || wC === CC.d - 1);
      return nC >= 2 ? "edge" : 1 === nC ? bC ? "cap" : "wall" : "inside"
    }

    function zQ(CC, zC) {
      const [ZC, QC, wC] = OZ(CC, zC);
      return 0 === ZC || ZC === CC.w - 1 || 0 === QC || QC === CC.h - 1 || 0 === wC || wC === CC.d - 1 ? -1 : ((QC - 1) * (CC.d - 2) + (wC - 1)) * (CC.w - 2) + (ZC - 1)
    }

    function ZQ(CC, zC) {
      const ZC = CC.w - 2,
        QC = CC.d - 2,
        wC = zC % ZC + 1,
        bC = Math.floor(zC / ZC) % QC + 1;
      return ((Math.floor(zC / (ZC * QC)) + 1) * CC.d + bC) * CC.w + wC
    }

    function QQ(CC, zC) {
      const ZC = dZ(zC);
      return "reactor" === CC && ZC === pZ ? IZ : ZC
    }

    function wQ(CC, zC, ZC) {
      const QC = "ctrl" === zC ? dZ(ZC) : QQ(CC, ZC);
      return ("reactor" === CC ? vZ : eZ)[zC].includes(QC) ? "ok" : "Air" === QC ? "missing" : uZ(CC, ZC) ? "wrong" : "blocked"
    }

    function bQ(CC, zC) {
      return "battery" === CC ? GZ : "inside" === zC ? null : function(CC, zC) {
        if ("inside" === zC || "ctrl" === zC || "battery" === CC) return null;
        return "edge" === zC ? IZ : iZ
      }(CC, zC)
    }
    const nQ = {
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
      fQ = "Collider",
      oQ = "Laser",
      qQ = "Star Alloy",
      FQ = "Glow Dust",
      WQ = [fQ, "_Collider Focus"];

    function NQ(CC) {
      return WQ.indexOf(dZ(CC))
    }

    function MQ(CC) {
      return dZ(CC) === oQ
    }

    function gQ(CC) {
      return [
        [CC[0], CC[1], CC[2]],
        [CC[0], CC[1] + 1, CC[2]]
      ]
    }
    const SQ = [
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [-1, 0, 0]
    ];

    function pQ(CC, zC, ZC) {
      const QC = SQ[zC];
      return [CC[0] + QC[0] * ZC, CC[1], CC[2] + QC[2] * ZC]
    }

    function PQ(CC, zC) {
      if (zC[1] !== CC[1]) return null;
      const ZC = zC[0] - CC[0],
        QC = zC[2] - CC[2];
      if (0 !== ZC === (0 !== QC)) return null;
      const wC = Math.abs(ZC + QC);
      if (wC > nQ.LASER_D) return null;
      return {
        dir: QC < 0 ? 0 : ZC > 0 ? 1 : QC > 0 ? 2 : 3,
        zW: wC
      }
    }

    function GQ(CC, zC, ZC) {
      const QC = zC => Math.abs(CC[0] - zC[0]) <= 1 && Math.abs(CC[1] - zC[1]) <= 1;
      return QC(zC) || QC(ZC)
    }

    function RQ(CC, zC) {
      return function(CC, zC, ZC, QC) {
        return [0, 1, 2, 3].map((wC => {
          for (let bC = 1; bC <= nQ.LASER_D; bC++) {
            const nC = pQ(CC, wC, bC);
            if (GQ([nC[0], nC[2]], zC, ZC) || !QC(nC)) return !1
          }
          return !0
        }))
      }(gQ(CC)[1], zC.spawnXZ, zC.coreXZ, (CC => CC[1] >= NZ.s && CC[1] < NZ.s + NZ.v && CC[0] >= zC.minXZ[0] && CC[0] <= zC.maxXZ[0] && CC[2] >= zC.minXZ[1] && CC[2] <= zC.maxXZ[1]))
    }
    const AQ = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];

    function xQ(CC) {
      return Math.max(48 + 16 * CC, PC(CC).machineAllowance)
    }
    const JQ = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];

    function IQ(CC) {
      const zC = CC.split("|")[0];
      return JQ.includes(zC) ? "Solar Panel" : zC === gZ.b ? "Fluid Pipe" : NQ(zC) >= 0 ? "Collider" : (ZC = zC, AQ.includes(ZC) ? zC : null);
      var ZC
    }
    const iQ = "buildAFactory2Game:solarPanelDescription";
    const vQ = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];

    function eQ(CC, zC) {
      var ZC;
      return null !== (ZC = vQ.find((ZC => {
        var QC;
        return (null !== (QC = CC.level(ZC)) && void 0 !== QC ? QC : 0) >= zC
      }))) && void 0 !== ZC ? ZC : null
    }
    const hQ = "buildAFactory2Game:";
    let KQ = null;
    const YQ = {
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
      dQ = {
        "Mob Farm": "lookFarmEmpty",
        "Dense Silo": "lookDenseSilo",
        "Glow Lamp": "lookGlowLamp"
      },
      mQ = {
        "Forge Hopper": "lookForgeHopperNuclear"
      },
      HQ = {
        "Loot Chest": `${hQ}lookRuinChestName`
      };

    function EQ(CC) {
      return "object" === typeof CC && null !== CC && "translationKey" in CC && "string" === typeof CC.translationKey ? CC.translationKey : null
    }

    function lQ(CC, zC) {
      var ZC;
      return null !== (ZC = EQ(CC.displayName(zC))) && void 0 !== ZC ? ZC : `item:${(0,EC.ke)(zC)}`
    }

    function XQ(CC, zC) {
      var ZC, QC, wC, bC;
      let nC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zC;
      if ("Solar Panel" === IQ(zC)) return {
        name: EQ(CC.displayName("Solar Panel")),
        detail: iQ,
        detailItem: null
      };
      const oC = zC.endsWith(" Ore"),
        qC = (KQ ??= new Set([...Object.keys((0, MZ.j)()), ...Object.keys((0, gZ.q)())].map((CC => CC.split("|")[0]))), KQ).has(zC),
        FC = oC || qC ? null : function(CC) {
          var zC;
          return CC.endsWith(" Log") && !CC.startsWith("Barkless ") ? "lookLog" : CC.endsWith(" Sapling") ? "lookSapling" : CC.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (zC = YQ[CC]) && void 0 !== zC ? zC : null
        }(zC);
      if (!CC.isBlock(zC) || !oC && !qC && null === FC) return null;
      const WC = null !== (ZC = null !== (QC = HQ[zC]) && void 0 !== QC ? QC : EQ(null !== (wC = CC.displayName(nC)) && void 0 !== wC ? wC : CC.displayName(zC))) && void 0 !== ZC ? ZC : `item:${(0,EC.ke)(zC)}`;
      if (null !== FC) return {
        name: WC,
        detail: `${hQ}${FC}`,
        detailItem: null
      };
      const NC = null !== (bC = dQ[zC]) && void 0 !== bC ? bC : fC() ? mQ[zC] : void 0;
      if (qC && void 0 !== NC) return {
        name: WC,
        detail: `${hQ}${NC}`,
        detailItem: null
      };
      const MC = nZ[zC];
      if (void 0 !== MC) return {
        name: WC,
        detail: `${hQ}lookDeposit`,
        detailItem: lQ(CC, MC)
      };
      const gC = CC.harvestLevel(zC);
      if (oC && "rock" === CC.harvestType(zC) && 0 !== gC) {
        const zC = eQ(CC, null !== gC && void 0 !== gC ? gC : 0);
        if (zC === vQ[0]) return {
          name: WC,
          detail: `${hQ}lookAnyPickaxe`,
          detailItem: null
        };
        if (null !== zC) return {
          name: WC,
          detail: `${hQ}lookPickaxe`,
          detailItem: lQ(CC, zC)
        }
      }
      return {
        name: WC,
        detail: EQ(CC.description(zC)),
        detailItem: null
      }
    }

    function cQ(CC) {
      return CC < NZ.s - 24
    }
    const uQ = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
    const rQ = "Wrench",
      sQ = "Nova Wrench";

    function TQ(CC) {
      return CC === rQ || CC === sQ
    }
    const aQ = [...NZ.K, "Belt Lift", "Belt Drop"];
    const tQ = ["Belt Lift", "Belt Drop"],
      DQ = {
        leftRight: "leftFront",
        leftFront: "frontRight",
        frontRight: null
      };

    function jQ(CC) {
      return CC.split("|")[0]
    }

    function yQ(CC) {
      const zC = /\|rot(\d)/.exec(CC);
      return zC ? Number(zC[1]) : 1
    }

    function LQ(CC) {
      return CC % 4 + 1
    }

    function UQ(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return 1 === zC && "" === ZC ? CC : `${CC}|meta|rot${zC}${ZC}`
    }

    function BQ(CC) {
      return jQ(CC) === NZ.B ? (0, NZ.O)(CC) ? "gateRight" : "gateLeft" : (0, NZ.T)(CC)
    }

    function OQ(CC) {
      const zC = jQ(CC),
        ZC = yQ(CC);
      if (NZ.K.includes(zC)) return (0, NZ.L)(zC, LQ(ZC), null);
      if (zC === NZ.j) return (0, NZ.Y)(LQ(ZC), (0, NZ.R)(CC));
      if (zC === NZ.F) {
        const QC = DQ[(0, NZ.T)(CC)];
        return null === QC ? UQ(zC, LQ(ZC)) : UQ(zC, ZC, NZ.G[QC])
      }
      return zC === NZ.B ? (0, NZ.O)(CC) ? UQ(zC, LQ(ZC)) : UQ(zC, ZC, NZ.r) : SZ.d.includes(zC) && !tQ.includes(zC) || qZ(zC) ? UQ(zC, LQ(ZC)) : null
    }

    function kQ(CC) {
      return SZ.d.includes(CC) || qZ(CC) || null !== IQ(CC)
    }

    function VQ(CC) {
      return "Solar Panel" === IQ(CC)
    }
    const Cw = "buildAFactory2Game:",
      zw = {
        leftFront: `${Cw}lookSplitDetail_leftFront`,
        frontRight: `${Cw}lookSplitDetail_frontRight`,
        gateRight: `${Cw}lookGateDetail_gateRight`
      };

    function Zw(CC, zC) {
      var ZC;
      let QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const wC = BQ(CC),
        bC = null === wC ? null : `${Cw}${wC.startsWith("gate")?"lookGateMode_":"lookSplitMode_"}${wC}`,
        nC = null === wC ? null : null !== (ZC = zw[wC]) && void 0 !== ZC ? ZC : null;
      if (TQ(zC) && QC) {
        const ZC = jQ(CC);
        return zC === sQ && fC() && function(CC) {
          return aQ.includes(jQ(CC))
        }(CC) ? {
          mode: bC,
          detail: nC,
          next: `${Cw}lookNovaWrenchRun`,
          nextState: null
        } : {
          mode: bC,
          detail: nC,
          next: kQ(ZC) && !VQ(ZC) ? `${Cw}lookWrenchPickUp` : null,
          nextState: null
        }
      }
      const oC = TQ(zC) ? OQ(CC) : null;
      if (null === oC) return {
        mode: bC,
        detail: nC,
        next: null,
        nextState: null
      };
      const qC = BQ(oC);
      return null === qC || yQ(oC) !== yQ(CC) ? {
        mode: bC,
        detail: nC,
        next: `${Cw}lookWrenchTurn`,
        nextState: null
      } : {
        mode: bC,
        detail: nC,
        next: `${Cw}lookWrenchNext`,
        nextState: `${Cw}lookWrenchState_${qC}`
      }
    }
    const Qw = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
    const ww = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];

    function bw(CC) {
      return [0, 1, 2, 3].map((zC => 0 !== (CC & 1 << zC)))
    }

    function nw(CC) {
      const zC = [];
      for (let ZC = 8; ZC + 2 < CC.length; ZC += 3) zC.push([CC[ZC], CC[ZC + 1], CC[ZC + 2]]);
      return {
        focus: [CC[0], CC[1], CC[2]],
        lasers: bw(CC[3]),
        open: bw(CC[4]),
        live: bw(CC[5]),
        on: 1 === CC[6],
        state: ww[CC[7]],
        blockers: zC
      }
    }
    const fw = "Arc Caster",
      ow = {
        Helmet: "Voltplate Helmet",
        Chestplate: "Voltplate Chestplate",
        Gauntlets: "Voltplate Gauntlets",
        Leggings: "Voltplate Leggings",
        Boots: "Voltplate Boots"
      },
      qw = (Object.values(ow), "Jet Chestplate"),
      Fw = "Nova Jet Chestplate",
      Ww = {
        Helmet: "Nova Helmet",
        Chestplate: "Nova Chestplate",
        Gauntlets: "Nova Gauntlets",
        Leggings: "Nova Leggings",
        Boots: "Nova Boots"
      },
      Nw = Object.values(Ww);

    function Mw(CC, zC, ZC) {
      return Math.min(function(CC) {
        return fC() && WC(CC) >= 5 ? 20 : 10
      }(ZC), Math.floor(function(CC, zC) {
        return Math.max(0, CC) + (fC() ? Math.max(0, zC) : 0)
      }(CC, zC) / 5))
    }

    function gw(CC, zC, ZC) {
      const QC = Mw(zC, ZC, CC),
        wC = WC(CC),
        bC = (wC >= 3 ? 55 : wC >= 1 ? 50 : CC >= 8 ? 45 : 30) + QC,
        nC = Math.max(100 + QC, 2 * bC);
      return {
        arcDamage: bC,
        arcPierce: CC >= 7 ? 2 : 1,
        arcChain: CC >= 10,
        barrierMax: (wC >= 4 ? 100 : wC >= 2 ? 90 : CC >= 9 ? 80 : CC >= 6 ? 60 : 40) + 5 * QC,
        barrierRegenPerS: wC >= 5 ? 20 : CC >= 9 ? 16 : 8,
        novaShieldMax: 150 + 5 * QC,
        novaShieldRegenPerS: 32,
        bladeDamage: nC,
        bladePunch: Math.round(.5 * nC),
        forgeRank: QC
      }
    }
    const Sw = {
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
    var pw = ZC(36699),
      Pw = ZC(36490),
      Gw = ZC(36488),
      Rw = ZC(20),
      Aw = ZC(1557),
      xw = ZC(1002),
      Jw = ZC.n(xw);

    function Iw(CC) {
      return !0 === CC.field
    }
    const iw = new Set(["Iron Bar", "Copper Bar", "Gold Bar", "Steel Bar", "Iron Plate", "Motor", "Logic Board", "Relay Coil", "Machine Hull", "Voltite Cell", "Diamond", "Comet Core", "Fluid Tank", "Uranium Pellet", "Spent Pellet", "Plutonium Pellet", "Heat Exchanger", "Battery Cell", "Containment Plate", "Focus Lens", "Fuel Rod"]);

    function vw(CC) {
      return iw.has(CC) ? `buildAFactory2Game:itemPlural_${(0,EC.ke)(CC)}` : null
    }
    var ew = ZC(1143),
      hw = ZC(1013),
      Kw = ZC(1822),
      Yw = ZC(1811),
      dw = ZC(36690),
      mw = ZC(36693),
      Hw = ZC(28),
      Ew = ZC(36687);
    const lw = "baf2QuestView",
      Xw = "baf2PlayerY",
      uw = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
    class rw {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
        this.requestBook = CC, this.view = {
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
      set(CC, zC) {
        var ZC, QC, wC, bC, nC, fC, oC, qC;
        const FC = JSON.stringify(CC.baf2QuestName) === JSON.stringify(this.view.name),
          WC = new Set(this.view.rows.filter((CC => CC.done)).map((CC => CC.id))),
          NC = new Set(this.view.rows.filter((CC => CC.justFinished)).map((CC => CC.id))),
          MC = CC.baf2QuestSide,
          gC = null !== MC && !0 === CC.baf2QuestSideFocus;
        let SC = !1,
          pC = 0;
        const PC = CC.baf2QuestSteps.map((CC => {
            const zC = Lw(CC, uw.has(CC[0]) ? CC[0] : "" + pC++),
              ZC = FC && zC.done && !WC.has(zC.id);
            return zC.justFinished = ZC || FC && zC.done && NC.has(zC.id), SC ||= ZC, zC
          })),
          GC = yw(PC);
        GC >= 0 && !gC && (PC[GC].current = !0);
        const RC = !FC && null !== CC.baf2QuestName,
          AC = JSON.stringify(MC && [MC[0], MC[1]]),
          xC = AC === JSON.stringify(null !== (ZC = null === (QC = this.view.side) || void 0 === QC ? void 0 : QC.name) && void 0 !== ZC ? ZC : null),
          JC = null !== MC && !this.sidesSeen.has(AC);
        JC && this.sidesSeen.add(AC), this.serverTutorial = null !== (wC = CC.baf2QuestTutorial) && void 0 !== wC ? wC : "on", (null !== (bC = CC.baf2QuestTutorialSeq) && void 0 !== bC ? bC : 0) >= this.pickSeq && this.endPick();
        const IC = !FC || !xC || CC.baf2QuestTier !== this.view.tier;
        this.view = {
          name: CC.baf2QuestName,
          rows: PC,
          reward: CC.baf2QuestReward,
          goal: CC.baf2QuestGoal,
          pulse: this.view.pulse + (SC || RC ? 1 : 0),
          itemNames: zC,
          side: MC && {
            name: [MC[0], MC[1]],
            row: {
              ...Lw(MC[2], "side"),
              current: gC
            },
            goal: null !== (nC = MC[3]) && void 0 !== nC ? nC : null
          },
          sideCameUpAt: JC ? Date.now() : this.view.sideCameUpAt,
          tier: CC.baf2QuestTier,
          core: CC.baf2QuestCore,
          chapters: this.view.chapters,
          also: null !== (fC = CC.baf2QuestAlso) && void 0 !== fC ? fC : [],
          depth: null !== (oC = CC.baf2QuestDepth) && void 0 !== oC ? oC : null,
          tutorial: null !== (qC = this.pickedTutorial) && void 0 !== qC ? qC : this.serverTutorial,
          tutorialKnown: !0
        }, this.bp(), SC && this.scheduleClear(), IC && this.requestBook()
      }
      setTutorial(CC) {
        return this.endPick(), this.pickedTutorial = CC, this.pickSeq = Math.max(this.pickSeq + 1, Date.now()), this.pickTimer = setTimeout((() => {
          this.pickTimer = null, this.pickedTutorial = null, this.view = {
            ...this.view,
            tutorial: this.serverTutorial
          }, this.bp()
        }), 1e4), this.view = {
          ...this.view,
          tutorial: CC
        }, this.bp(), this.pickSeq
      }
      onPlayerY(CC) {
        const zC = Math.floor(CC);
        zC !== this.playerY && (this.playerY = zC, this.view.depth && Hw.o.bp(Xw, zC))
      }
      lastPlayerY() {
        return this.playerY
      }
      setBook(CC) {
        this.view = {
          ...this.view,
          chapters: CC.baf2BookChapters
        }, this.bp()
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
            rows: this.view.rows.map((CC => CC.justFinished ? {
              ...CC,
              justFinished: !1
            } : CC))
          }, this.bp()
        }), 2400)
      }
      bp() {
        Hw.o.bp(lw, this.view, !0)
      }
    }

    function sw(CC, zC) {
      return CC.sideCameUpAt > 0 && zC - CC.sideCameUpAt < 2400
    }

    function Tw(CC) {
      return (null === CC.name || aw(CC)) && null === CC.side && null !== CC.chapters
    }

    function aw(CC) {
      var zC;
      return "quest_forgeOngoing" === (null === (zC = CC.name) || void 0 === zC ? void 0 : zC[0])
    }

    function tw(CC) {
      return CC.filter((CC => !uw.has(CC.key)))
    }

    function Dw(CC) {
      return CC.key.startsWith("stepCraft")
    }

    function jw(CC, zC) {
      const ZC = new Set,
        QC = CC.side ? [...CC.rows, CC.side.row] : CC.rows;
      for (const bC of QC)
        if (!bC.done) {
          !bC.item || zC && !Dw(bC) || ZC.add(bC.item);
          for (const [CC, zC, QC] of null !== (wC = bC.chips) && void 0 !== wC ? wC : []) {
            var wC;
            zC < QC && ZC.add(CC)
          }
        } return ZC
    }

    function yw(CC) {
      const zC = CC.findIndex((CC => !CC.done && !CC.away));
      return zC >= 0 ? zC : CC.findIndex((CC => !CC.done))
    }

    function Lw(CC, zC) {
      let [ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC] = CC;
      return {
        id: zC,
        key: ZC,
        params: QC,
        item: wC,
        amount: bC,
        total: nC,
        done: fC,
        chips: null !== oC && void 0 !== oC ? oC : null,
        current: !1,
        away: !0 === qC,
        madeFor: null !== FC && void 0 !== FC ? FC : [],
        also: null !== WC && void 0 !== WC ? WC : [],
        justFinished: !1
      }
    }
    const Uw = "baf2QuestItems",
      Bw = new Set;
    let Ow = new Set,
      kw = null;

    function Vw(CC) {
      const zC = HC(CC.tutorial),
        ZC = zC ? jw(CC, !0) : Bw;
      "inventory" === Rw.b.get("openInGameMenuName") ? (kw = null, (0, Ew.w)(ZC)) : kw = ZC;
      const QC = zC ? jw(CC, !1) : Bw;
      (0, mw.e)(QC, Ow) || (Ow = QC, Hw.o.bp(Uw, Ow))
    }

    function Cb() {
      return (0, dw.e)(Uw, (() => Ow))
    }
    var zb = ZC(34171),
      Zb = ZC(3276);

    function Qb(CC) {
      const zC = (0, Zb.b)(CC),
        ZC = void 0 === zC ? void 0 : (0, zb.displayNameOf)(zC);
      return "object" === typeof ZC && null !== ZC && "translationKey" in ZC && "string" === typeof ZC.translationKey ? ZC.translationKey : `item:${(0,EC.ke)(CC)}`
    }

    function wb(CC, zC) {
      return CC(Qb(zC))
    }
    const bb = [{
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

    function nb(CC, zC) {
      return [`Deposit Seed (${CC})`, {
        item: nZ[`${CC} Deposit`],
        amount: zC
      }]
    }
    const fb = Object.fromEntries([nb("Coal", 8), nb("Iron", 8), nb("Copper", 8), nb("Gold", 6), nb("Voltite", 4), nb("Uranium", 4)]),
      ob = "Relay Coil",
      qb = new Map;

    function Fb(CC) {
      let zC = qb.get(CC);
      if (!zC) {
        const ZC = Math.max(1, CC);
        zC = bb.filter((CC => {
          var zC;
          return ZC >= CC.fromTier && ZC <= (null !== (zC = CC.untilTier) && void 0 !== zC ? zC : 1 / 0)
        })).map((CC => CC.later && ZC >= CC.later.tier ? {
          ...CC,
          weight: CC.later.weight
        } : CC)), qb.set(CC, zC)
      }
      return zC
    }

    function Wb(CC) {
      return Fb(CC).some((CC => {
        let {
          item: zC
        } = CC;
        return zC === ob
      }))
    }

    function Nb(CC) {
      return CC.startsWith("Deposit Seed (")
    }

    function Mb(CC, zC) {
      const ZC = Fb(CC);
      return zC ? ZC.filter((CC => zC(CC.item))) : ZC
    }

    function gb(CC) {
      return CC.reduce(((CC, zC) => CC + zC.weight), 0)
    }

    function Sb(CC, zC) {
      const ZC = Mb(CC, zC),
        QC = gb(ZC);
      return ZC.map((CC => ({
        find: CC,
        chance: CC.weight / QC
      })))
    }
    const pb = 6e4,
      Pb = new Intl.NumberFormat("en-US");

    function Gb(CC, zC) {
      const ZC = CC >= 10 ? Math.round(CC) : Math.round(10 * CC) / 10;
      return 0 === ZC ? "0" : `${zC}${Pb.format(ZC)}`
    }

    function Rb(CC) {
      return CC < (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e5) ? Pb.format(CC) : CC < 1e6 ? `${CC<1e5?Math.floor(CC/100)/10:Math.floor(CC/1e3)}k` : Math.floor(CC / 1e5) / 10 + "M"
    }

    function Ab(CC) {
      return CC < 0 ? "\u2212" + -CC : String(CC)
    }

    function xb(CC, zC) {
      const ZC = Math.max(1, Math.round(zC));
      if (ZC < 60) return CC("buildAFactory2Game:durationSeconds", {
        seconds: String(ZC)
      });
      const QC = Math.round(ZC / 60);
      if (QC < 60) return CC("buildAFactory2Game:durationMinutes", {
        minutes: String(QC)
      });
      const wC = String(Math.floor(QC / 60));
      return QC % 60 === 0 ? CC("buildAFactory2Game:durationWholeHours", {
        hours: wC
      }) : CC("buildAFactory2Game:durationHours", {
        hours: wC,
        minutes: String(QC % 60)
      })
    }
    var Jb = ZC(2427);
    const Ib = "(max-height: 420px), (max-width: 650px)";

    function ib() {
      return (0, Jb.d)(Ib)
    }
    var vb = ZC(1056);

    function eb(CC, zC) {
      return null !== CC && CC > zC + 1
    }

    function hb(CC) {
      const zC = 100 * CC;
      return String(zC <= 0 || zC >= 1 ? Math.round(zC) : Math.max(.1, Math.round(10 * zC) / 10))
    }

    function Kb(CC) {
      let {
        item: zC,
        amount: ZC
      } = CC;
      return (0, vb.jsxs)("span", {
        className: "Baf2RecipeItem",
        children: [(0, vb.jsx)("span", {
          className: "Baf2RecipeIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: zC,
            amount: 0
          })
        }), ZC > 1 && (0, vb.jsxs)("span", {
          className: "Baf2RecipeAmount",
          children: ["\xd7", ZC]
        })]
      })
    }

    function Yb(CC) {
      let {
        label: zC,
        names: ZC
      } = CC;
      const [wC, bC] = (0, QC.useState)(!1), nC = ZC.join(" / ");
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)("button", {
          type: "button",
          className: "Baf2RecipeMore",
          title: nC,
          "aria-expanded": wC,
          onClick: () => {
            bC(!wC)
          },
          children: zC
        }), wC && (0, vb.jsx)("span", {
          className: "Baf2RecipeAlts",
          children: nC
        })]
      })
    }

    function db(CC) {
      let {
        tier: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), {
        key: QC,
        params: wC
      } = MC(zC, {
        tier: "recipeLockedTier",
        stage: "recipeLockedStage",
        atomic: "recipeLockedAtomic"
      }), bC = ZC(`buildAFactory2Game:${QC}`, wC);
      return (0, vb.jsxs)("span", {
        className: "Baf2TierTag Baf2RecipeLock",
        children: [(0, vb.jsx)(hw.c, {
          name: "lock"
        }), bC]
      })
    }
    const mb = (0, QC.createContext)(null);

    function Hb() {
      const {
        t: CC
      } = (0, ew.y)(), zC = (0, QC.useContext)(mb);
      return (0, QC.useEffect)((() => null === zC || void 0 === zC ? void 0 : zC()), [zC]), (0, vb.jsx)("span", {
        className: "Baf2RecipeQuest",
        role: "img",
        title: CC("buildAFactory2Game:recipeForQuest"),
        "aria-label": CC("buildAFactory2Game:recipeForQuest"),
        children: "!"
      })
    }

    function Eb(CC) {
      let {
        title: zC,
        count: ZC,
        children: wC,
        startOpen: bC = !0
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), [fC, oC] = (0, QC.useState)((() => bC && !ib())), [qC, FC] = (0, QC.useState)(0), WC = (0, QC.useCallback)((() => (FC((CC => CC + 1)), () => {
        FC((CC => CC - 1))
      })), []);
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2Recipes", {
          Open: fC
        }),
        children: [(0, vb.jsxs)("button", {
          type: "button",
          className: "Baf2RecipesToggle SmallTextBold",
          onClick: () => {
            oC(!fC)
          },
          "aria-expanded": fC,
          children: [nC("buildAFactory2Game:recipesToggle", {
            title: zC,
            count: String(ZC)
          }), (0, vb.jsx)("span", {
            className: "Baf2RecipesChevron",
            children: fC ? "\u25be" : "\u25b8"
          })]
        }), fC && (0, vb.jsxs)(mb.Provider, {
          value: WC,
          children: [(0, vb.jsx)("ul", {
            className: "Baf2RecipeList",
            children: wC
          }), qC > 0 && (0, vb.jsxs)("div", {
            className: "Baf2RecipeQuestNote",
            children: [(0, vb.jsx)("span", {
              className: "Baf2RecipeQuest",
              "aria-hidden": "true",
              children: "!"
            }), nC("buildAFactory2Game:recipeForQuest")]
          })]
        })]
      })
    }
    const lb = "buildAFactory2Game:",
      Xb = new Set(["Coal Deposit", "Iron Deposit", "Stone Deposit"]);
    const cb = {
        "Moonstone Dust": "Star Alloy",
        Fertiliser: "Crop Harvester"
      },
      ub = {
        "Uranium Grit": bC,
        "Raw Uranium": bC
      };

    function rb(CC) {
      var zC;
      return null !== (zC = ub[CC]) && void 0 !== zC ? zC : Math.max(BC(CC), cb[CC] ? BC(cb[CC]) : 1, function(CC) {
        const zC = wC.findIndex((zC => zC.cost.some((zC => zC.item === CC))));
        return zC > bC ? zC : 1
      }(CC))
    }

    function sb(CC, zC) {
      return Tb(zC) ? rb(zC) : function(CC) {
        if (Xb.has(CC)) return 1;
        const zC = wC.findIndex((zC => zC.newDeposits.some((zC => {
          let {
            block: ZC
          } = zC;
          return ZC === CC
        }))));
        return zC < 0 ? 1 : zC + 1
      }(CC)
    }

    function Tb(CC) {
      return CC in ub || WC(rb(CC)) > 0
    }

    function ab(CC, zC) {
      return Oz(CC, {
        coupled: !1,
        taught: null,
        atomic: fC() && zC >= 11
      }).recipes
    }

    function tb(CC, zC) {
      const ZC = NC(CC, zC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WC(CC) > 0);
      return "open" === ZC || "locked" === ZC
    }

    function Db(CC, zC) {
      return CC.map(((CC, ZC) => ({
        value: CC,
        idx: ZC,
        tier: zC(CC)
      }))).sort(((CC, zC) => CC.tier - zC.tier || CC.idx - zC.idx)).map((CC => {
        let {
          value: zC
        } = CC;
        return zC
      }))
    }

    function jb(CC, zC, ZC) {
      const QC = NC(CC, zC);
      if ("hidden" === QC || "open" === QC) return null;
      if ("teaser" === QC) return {
        tag: {
          translationKey: `${lb}${ZC?"craftLockAtomicTeaserShort":"craftLockAtomicTeaser"}`
        },
        reason: {
          translationKey: `${lb}recipeLockedAtomicTeaser`
        },
        hideIngredients: !0
      };
      const wC = MC(CC, {
          tier: ZC ? "craftLockTierShort" : "craftLockTier",
          stage: "craftLockStage",
          atomic: "craftLockAtomic"
        }),
        bC = MC(CC, {
          tier: "recipeLockedTier",
          stage: "recipeLockedStage",
          atomic: "recipeLockedAtomic"
        });
      return {
        tag: {
          translationKey: `${lb}${wC.key}`,
          params: wC.params
        },
        reason: {
          translationKey: `${lb}${bC.key}`,
          params: bC.params
        }
      }
    }

    function yb(CC) {
      return !Nb(CC)
    }

    function Lb(CC) {
      let {
        seconds: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)();
      return (0, vb.jsx)(Eb, {
        title: ZC("buildAFactory2Game:recipesCuts", {
          seconds: zC
        }),
        count: 1,
        children: (0, vb.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, vb.jsx)(Kb, {
            item: "Maple Sapling",
            amount: 1
          }), (0, vb.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, vb.jsx)(Kb, {
            item: "Maple Log",
            amount: 1
          }), (0, vb.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZC("buildAFactory2Game:recipeAnyTree")
          })]
        })
      })
    }

    function Ub(CC) {
      let {
        fertilised: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)();
      return (0, vb.jsxs)(Eb, {
        title: ZC("buildAFactory2Game:recipesHarvests"),
        count: 2,
        children: [(0, vb.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(0, vb.jsx)(Kb, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, vb.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, vb.jsx)(Kb, {
            item: "Wheat",
            amount: 1
          }), (0, vb.jsx)(Kb, {
            item: "Wheat Seeds",
            amount: 1
          }), (0, vb.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZC("buildAFactory2Game:recipeField")
          })]
        }), (0, vb.jsxs)("li", {
          className: Jw()("Baf2Recipe", {
            InUse: zC
          }),
          children: [(0, vb.jsx)(Kb, {
            item: "Fertiliser",
            amount: 1
          }), (0, vb.jsx)("span", {
            className: "Baf2RecipeName",
            children: ZC("buildAFactory2Game:recipeFieldFertiliser")
          })]
        })]
      })
    }

    function Bb(CC) {
      let {
        tier: zC,
        seconds: ZC
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = function(CC) {
        return CC >= 5 ? Jz : xz
      }(zC);
      return (0, vb.jsx)(Eb, {
        title: QC("buildAFactory2Game:recipesBringsUp", {
          seconds: ZC
        }),
        count: wC.length,
        children: wC.map((CC => {
          let {
            item: zC,
            chance: ZC
          } = CC;
          return (0, vb.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, vb.jsx)(Kb, {
              item: zC,
              amount: 1
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeName",
              children: wb(QC, zC)
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: QC("buildAFactory2Game:recipeChance", {
                percent: hb(ZC)
              })
            })]
          }, zC)
        }))
      })
    }

    function Ob(CC) {
      let {
        tier: zC,
        seconds: ZC,
        noSeeds: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), bC = Cb(), nC = Sb(zC, QC ? yb : void 0), fC = QC && Sb(zC).length > nC.length, oC = Wb(zC);
      return (0, vb.jsxs)(Eb, {
        title: wC("buildAFactory2Game:recipesRecycles", {
          seconds: ZC
        }),
        count: nC.length,
        children: [nC.map((CC => {
          let {
            find: zC,
            chance: ZC
          } = CC;
          return (0, vb.jsxs)("li", {
            className: "Baf2Recipe",
            children: [bC.has(zC.item) && (0, vb.jsx)(Hb, {}), (0, vb.jsx)(Kb, {
              item: zC.item,
              amount: zC.amount
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeName",
              children: wb(wC, zC.item)
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeBonus",
              children: wC("buildAFactory2Game:recipeChance", {
                percent: hb(ZC)
              })
            })]
          }, zC.item)
        })), fC && (0, vb.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vb.jsx)("span", {
            className: "Baf2RecipeName",
            children: wC("buildAFactory2Game:recipesRecyclerNoSeeds")
          })
        }), oC && (0, vb.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vb.jsx)("span", {
            className: "Baf2RecipeName",
            children: wC("buildAFactory2Game:recipesRecyclerPity", {
              amount: String(2)
            })
          })
        })]
      })
    }

    function kb(CC) {
      let {
        tier: zC,
        seconds: ZC
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = Object.entries(fb).filter((CC => {
        let [, {
          item: ZC
        }] = CC;
        return tb(rb(ZC), zC, Tb(ZC))
      }));
      return (0, vb.jsx)(Eb, {
        title: QC("buildAFactory2Game:recipesRecyclesSeeds", {
          seconds: ZC
        }),
        count: wC.length,
        children: wC.map((CC => {
          let [zC, {
            item: ZC,
            amount: wC
          }] = CC;
          return (0, vb.jsxs)("li", {
            className: "Baf2Recipe",
            children: [(0, vb.jsx)(Kb, {
              item: zC,
              amount: 1
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, vb.jsx)(Kb, {
              item: ZC,
              amount: wC
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeName",
              children: wb(QC, ZC)
            })]
          }, zC)
        }))
      })
    }

    function Vb(CC) {
      let {
        tier: zC,
        seconds: ZC
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = Cb(), bC = Db(Object.entries(nZ).filter((CC => {
        let [ZC, QC] = CC;
        return tb(sb(ZC, QC), zC, Tb(QC))
      })), (CC => {
        let [zC, ZC] = CC;
        return sb(zC, ZC)
      }));
      return (0, vb.jsx)(Eb, {
        title: QC("buildAFactory2Game:recipesDigs", {
          seconds: ZC
        }),
        count: bC.length,
        children: bC.map((CC => {
          let [ZC, bC] = CC;
          const nC = sb(ZC, bC),
            fC = nC > zC ? nC : null,
            oC = fZ[ZC],
            qC = null === fC && wC.has(bC);
          return (0, vb.jsxs)("li", {
            className: Jw()("Baf2Recipe", {
              Locked: null !== fC,
              Far: eb(fC, zC)
            }),
            children: [qC && (0, vb.jsx)(Hb, {}), (0, vb.jsx)(Kb, {
              item: ZC,
              amount: 1
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, vb.jsx)(Kb, {
              item: bC,
              amount: 1
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeName",
              children: wb(QC, bC)
            }), void 0 !== oC && (0, vb.jsx)("span", {
              className: "Baf2RecipeMore",
              children: QC("buildAFactory2Game:recipesDigsFixed", {
                perMin: String(6e4 / oC)
              })
            }), null !== fC && (0, vb.jsx)(db, {
              tier: fC
            })]
          }, ZC)
        }))
      })
    }

    function Cn(CC) {
      var zC;
      let {
        def: ZC,
        seconds: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)();
      return (0, vb.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, vb.jsxs)("li", {
          className: "Baf2Recipe",
          children: [(null !== (zC = ZC.fuels) && void 0 !== zC ? zC : []).map((CC => (0, vb.jsx)(Kb, {
            item: CC,
            amount: 1
          }, CC))), (0, vb.jsx)("span", {
            className: "Baf2RecipeArrow",
            children: "\u2192"
          }), (0, vb.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, vb.jsx)(hw.c, {
              name: "bolt"
            }), wC("buildAFactory2Game:recipePower", {
              power: OC(ZC.powerMade),
              seconds: QC
            })]
          })]
        })
      })
    }

    function zn(CC) {
      let {
        def: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)();
      return (0, vb.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, vb.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vb.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, vb.jsx)(hw.c, {
              name: "bolt"
            }), ZC("buildAFactory2Game:recipeMixer", {
              cryo: Gb((0, kC.C)(zC, zC.cryoMade), "")
            })]
          })
        })
      })
    }

    function Zn(CC) {
      let {
        def: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)();
      return (0, vb.jsx)("ul", {
        className: "Baf2RecipeList Baf2GeneratorRecipe",
        children: (0, vb.jsx)("li", {
          className: "Baf2Recipe",
          children: (0, vb.jsxs)("span", {
            className: "Baf2RecipeName",
            children: [(0, vb.jsx)(hw.c, {
              name: "bolt"
            }), ZC("buildAFactory2Game:recipeCondenser", {
              power: Gb((0, kC.C)(zC, zC.powerPerOp), ""),
              water: Gb((0, kC.C)(zC, zC.fluidMade), "")
            })]
          })
        })
      })
    }

    function Qn(CC) {
      let {
        kind: zC,
        def: ZC,
        input: QC,
        tier: wC,
        noSeeds: bC = !1
      } = CC;
      const nC = String(ZC.opMs / 1e3);
      return ZZ(ZC) ? (0, vb.jsx)(Lb, {
        seconds: nC
      }) : ZC.field ? (0, vb.jsx)(Ub, {
        fertilised: null !== QC
      }) : ZC.table ? (0, vb.jsx)(Bb, {
        tier: wC,
        seconds: nC
      }) : ZC.recycles ? (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)(Ob, {
          tier: wC,
          seconds: nC,
          noSeeds: bC
        }), (0, vb.jsx)(kb, {
          tier: wC,
          seconds: nC
        })]
      }) : zZ(ZC) ? (0, vb.jsx)(Vb, {
        tier: wC,
        seconds: nC
      }) : void 0 !== ZC.fluidMade ? (0, vb.jsx)(Zn, {
        def: ZC
      }) : void 0 !== ZC.cryoMade ? (0, vb.jsx)(zn, {
        def: ZC
      }) : void 0 !== ZC.powerMade ? (0, vb.jsx)(Cn, {
        def: ZC,
        seconds: nC
      }) : (0, vb.jsx)(wn, {
        kind: zC,
        input: QC,
        tier: wC,
        seconds: nC
      })
    }

    function wn(CC) {
      let {
        kind: zC,
        input: ZC,
        tier: QC,
        seconds: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)(), nC = Cb(), fC = Db(function(CC) {
        const zC = new Map;
        for (const wC of CC) {
          var ZC, QC;
          const CC = [wC.output, wC.outputAmount, wC.inputAmount, null === (ZC = wC.bonus) || void 0 === ZC ? void 0 : ZC.item, null === (QC = wC.bonus) || void 0 === QC ? void 0 : QC.chance].join("|"),
            bC = zC.get(CC);
          bC ? bC.inputs.push(wC.input) : zC.set(CC, {
            inputs: [wC.input],
            inputAmount: wC.inputAmount,
            output: wC.output,
            outputAmount: wC.outputAmount,
            bonus: wC.bonus
          })
        }
        return [...zC.values()]
      }(ab(zC, QC).filter(FZ)), (CC => rb(CC.output))).filter((CC => tb(rb(CC.output), QC, Tb(CC.output))));
      return (0, vb.jsx)(Eb, {
        title: bC("buildAFactory2Game:recipesEach", {
          seconds: wC
        }),
        count: fC.length,
        children: fC.map((CC => {
          const zC = null !== ZC && CC.inputs.includes(ZC),
            wC = CC.inputs.length > 3 ? [zC ? ZC : CC.inputs[0]] : CC.inputs,
            fC = rb(CC.output) > QC ? rb(CC.output) : null,
            oC = null === fC && nC.has(CC.output);
          return (0, vb.jsxs)("li", {
            className: Jw()("Baf2Recipe", {
              InUse: zC,
              Locked: null !== fC,
              Far: eb(fC, QC)
            }),
            children: [oC && (0, vb.jsx)(Hb, {}), wC.map(((zC, ZC) => (0, vb.jsxs)("span", {
              className: "Baf2RecipeInput",
              children: [ZC > 0 && (0, vb.jsx)("span", {
                className: "Baf2RecipeOr",
                children: "/"
              }), (0, vb.jsx)(Kb, {
                item: zC,
                amount: CC.inputAmount
              })]
            }, zC))), wC.length < CC.inputs.length && (0, vb.jsx)(Yb, {
              label: bC("buildAFactory2Game:recipeMore", {
                count: String(CC.inputs.length - wC.length)
              }),
              names: CC.inputs.filter((CC => !wC.includes(CC))).map((CC => wb(bC, CC)))
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2192"
            }), (0, vb.jsx)(Kb, {
              item: CC.output,
              amount: CC.outputAmount
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeName",
              children: wb(bC, CC.output)
            }), CC.bonus && (0, vb.jsxs)("span", {
              className: "Baf2RecipeBonus",
              children: [bC("buildAFactory2Game:recipeBonus", {
                percent: hb(CC.bonus.chance)
              }), (0, vb.jsx)(Kb, {
                item: CC.bonus.item,
                amount: 1
              })]
            }), null !== fC && (0, vb.jsx)(db, {
              tier: fC
            })]
          }, `${CC.output}|${CC.inputs[0]}`)
        }))
      })
    }

    function bn(CC) {
      let {
        taught: zC,
        tier: ZC
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = Cb(), bC = Db(Object.values(Uz), (CC => CC.tier)).filter((CC => tb(CC.tier, ZC)));
      return (0, vb.jsx)(Eb, {
        title: QC("buildAFactory2Game:benchCanMake"),
        count: bC.length,
        startOpen: !1,
        children: bC.map((CC => {
          const bC = CC.tier > ZC,
            nC = !bC && wC.has(CC.output);
          return (0, vb.jsxs)("li", {
            className: Jw()("Baf2Recipe", {
              InUse: CC.output === zC,
              Locked: bC,
              Far: eb(bC ? CC.tier : null, ZC)
            }),
            children: [nC && (0, vb.jsx)(Hb, {}), (0, vb.jsx)(Kb, {
              item: CC.output,
              amount: CC.outputAmount
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeName",
              children: wb(QC, CC.output)
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeArrow",
              children: "\u2190"
            }), CC.inputs.map((CC => (0, vb.jsx)(Kb, {
              item: CC.item,
              amount: CC.amount
            }, CC.item))), bC && (0, vb.jsx)(db, {
              tier: CC.tier
            })]
          }, CC.output)
        }))
      })
    }
    var nn, fn, qn, Fn, Wn;
    const Nn = Ez.Generator,
      Mn = ["buildAFactory2Game:powerCoupledName", "buildAFactory2Game:powerCoupledNameAdvanced", "buildAFactory2Game:powerCoupledNameNova"],
      gn = 1e3 * (null !== (nn = Nn.powerMade) && void 0 !== nn ? nn : 0) / Nn.opMs,
      Sn = Math.min(...(null !== (fn = Nn.fuels) && void 0 !== fn ? fn : []).map((CC => bZ[CC]))) / 1e3,
      pn = Ez["Volt Engine"],
      Pn = 1e3 * (null !== (qn = pn.powerMade) && void 0 !== qn ? qn : 0) / pn.opMs,
      Gn = bZ[null !== (Fn = null === (Wn = pn.fuels) || void 0 === Wn ? void 0 : Wn[0]) && void 0 !== Fn ? Fn : ""] / 1e3;

    function Rn(CC) {
      let {
        item: zC,
        label: ZC,
        value: QC,
        note: wC,
        dim: bC
      } = CC;
      return (0, vb.jsxs)("li", {
        className: Jw()("Baf2PowerRow", {
          Dim: bC
        }),
        children: [(0, vb.jsx)("span", {
          className: "Baf2PowerRowIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: zC,
            amount: 0
          })
        }), (0, vb.jsxs)("span", {
          className: "Baf2PowerRowText",
          children: [(0, vb.jsx)("span", {
            className: "Baf2PowerRowLabel",
            children: ZC
          }), wC && (0, vb.jsx)("span", {
            className: "Baf2PowerRowNote",
            children: wC
          })]
        }), (0, vb.jsx)("span", {
          className: "Baf2PowerRowValue",
          children: QC
        })]
      })
    }

    function An(CC, zC, ZC, QC) {
      var wC;
      const bC = void 0 === QC ? Ez[CC] : function(CC, zC) {
          if (null === zC) return CC;
          let ZC = yC.get(zC);
          return ZC || (ZC = {
            ...CC,
            powerPerOp: jC(CC, zC),
            farmMob: zC
          }, yC.set(zC, ZC)), ZC
        }(Ez[CC], QC),
        nC = zC && bC.couplable ? az(bC, ZC) : bC;
      return 1e3 * (null !== (wC = nC.powerPerOp) && void 0 !== wC ? wC : 0) / nC.opMs
    }

    function xn(CC) {
      var zC, ZC, QC, wC, bC, nC, fC, oC;
      let {
        message: qC
      } = CC;
      const {
        t: FC
      } = (0, ew.y)(), WC = (CC, zC) => FC("buildAFactory2Game:powerPerSecond", {
        rate: Gb(CC, zC)
      }), [NC, MC] = qC.baf2PowerGenerators, gC = qC.baf2PowerGeneratorFuel, SC = qC.baf2PowerSunPanels, pC = null !== (zC = qC.baf2PowerSunShare) && void 0 !== zC ? zC : 1, PC = qC.baf2PowerVaults, GC = qC.baf2PowerUsers, [RC, AC] = null !== (ZC = qC.baf2PowerEngines) && void 0 !== ZC ? ZC : [0, 0], xC = null !== (QC = qC.baf2PowerEngineCells) && void 0 !== QC ? QC : 0, JC = null !== (wC = qC.baf2PowerPads) && void 0 !== wC ? wC : 0, IC = null !== (bC = qC.baf2PowerCharge) && void 0 !== bC ? bC : 0, [iC, vC] = null !== (nC = qC.baf2PowerReactors) && void 0 !== nC ? nC : [0, 0], [eC, hC] = null !== (fC = qC.baf2PowerBatteries) && void 0 !== fC ? fC : [0, 0];
      let KC = FC("buildAFactory2Game:powerEngineCells", {
        amount: String(xC)
      });
      xC > 0 && AC > 0 && (KC = FC("buildAFactory2Game:powerEngineCellsTime", {
        amount: String(xC),
        time: xb(FC, xC * Gn / AC)
      }));
      let YC = FC("buildAFactory2Game:powerGeneratorFuel", {
        amount: String(gC)
      });
      gC > 0 && MC > 0 && (YC = FC("buildAFactory2Game:powerGeneratorFuelTime", {
        amount: String(gC),
        time: xb(FC, gC * Sn / MC)
      }));
      const dC = NC + RC + SC + iC;
      return (0, vb.jsxs)("div", {
        className: "Baf2PowerDetails",
        children: [(0, vb.jsxs)("section", {
          children: [(0, vb.jsxs)("h3", {
            children: [FC("buildAFactory2Game:powerMaking"), (0, vb.jsx)("span", {
              children: WC(qC.baf2PowerMadePerS, "+")
            })]
          }), (0, vb.jsxs)("ul", {
            children: [0 === dC && (0, vb.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: FC("buildAFactory2Game:powerNoMakers")
            }), NC > 0 && (0, vb.jsx)(Rn, {
              item: "Generator",
              label: `${wb(FC,"Generator")} \xd7${NC}`,
              note: `${FC("buildAFactory2Game:powerRunning",{amount:String(MC)})} \xb7 ${YC}`,
              value: WC(MC * gn, "+"),
              dim: 0 === MC
            }), RC > 0 && (0, vb.jsx)(Rn, {
              item: "Volt Engine",
              label: `${wb(FC,"Volt Engine")} \xd7${RC}`,
              note: `${FC("buildAFactory2Game:powerRunning",{amount:String(AC)})} \xb7 ${KC}`,
              value: WC(AC * Pn, "+"),
              dim: 0 === AC
            }), SC > 0 && (0, vb.jsx)(Rn, {
              item: "Solar Panel",
              label: `${wb(FC,"Solar Panel")} \xd7${SC}`,
              note: FC(pC < 1 ? "buildAFactory2Game:powerSunNoteNight" : "buildAFactory2Game:powerSunNote", {
                rate: String(4),
                night: String(2)
              }),
              value: WC(4 * SC * pC, "+")
            }), iC > 0 && (0, vb.jsx)(Rn, {
              item: "Reactor Frame",
              label: `${FC("buildAFactory2Game:powerReactors")} \xd7${iC}`,
              note: FC("buildAFactory2Game:powerRunning", {
                amount: String(vC)
              }),
              value: WC(null !== (oC = qC.baf2PowerReactorPerS) && void 0 !== oC ? oC : 0, "+"),
              dim: 0 === vC
            })]
          })]
        }), (0, vb.jsxs)("section", {
          children: [(0, vb.jsxs)("h3", {
            children: [FC("buildAFactory2Game:powerStorage"), (0, vb.jsx)("span", {
              children: OC(qC.baf2PowerCap)
            })]
          }), (PC > 0 || eC > 0) && (0, vb.jsxs)("ul", {
            children: [PC > 0 && (0, vb.jsx)(Rn, {
              item: "Charge Vault",
              label: `${wb(FC,"Charge Vault")} \xd7${PC}`,
              value: `+${OC(8e3*PC)}`
            }), eC > 0 && (0, vb.jsx)(Rn, {
              item: "Battery Cell",
              label: `${FC("buildAFactory2Game:powerBatteries")} \xd7${eC}`,
              value: `+${OC(hC)}`
            })]
          })]
        }), (0, vb.jsxs)("section", {
          children: [(0, vb.jsxs)("h3", {
            children: [FC("buildAFactory2Game:powerUsing"), (0, vb.jsx)("span", {
              children: WC(qC.baf2PowerUsedPerS, "\u2212")
            })]
          }), (0, vb.jsxs)("ul", {
            children: [0 === GC.length && 0 === JC && 0 === IC && (0, vb.jsx)("li", {
              className: "Baf2PowerEmpty",
              children: FC("buildAFactory2Game:powerNoUsers")
            }), GC.map((CC => {
              let [zC, ZC, QC, wC, bC = 1, nC] = CC, fC = ZC ? FC(Mn[bC - 1], {
                name: wb(FC, zC)
              }) : wb(FC, zC);
              return void 0 !== nC && (fC = FC("buildAFactory2Game:powerFarmName", {
                name: fC,
                mob: FC(aC(nC))
              })), (0, vb.jsx)(Rn, {
                item: zC,
                label: `${fC} \xd7${QC}`,
                note: FC("buildAFactory2Game:powerRunning", {
                  amount: String(wC)
                }),
                value: wC > 0 ? WC(wC * An(zC, ZC, bC, nC), "\u2212") : FC("buildAFactory2Game:powerIdle"),
                dim: 0 === wC
              }, `${zC}|${ZC}|${bC}|${nC}`)
            })), JC > 0 && (0, vb.jsx)(Rn, {
              item: "Charging Pad",
              label: `${wb(FC,"Charging Pad")} \xd7${JC}`,
              value: FC("buildAFactory2Game:powerPadRate", {
                amount: String(60)
              })
            }), IC > 0 && (0, vb.jsx)(Rn, {
              item: "Homestead Core",
              label: FC("buildAFactory2Game:powerCharge"),
              value: WC(IC, "\u2212")
            }), qC.baf2PowerStarved > 0 && (0, vb.jsxs)("li", {
              className: "Baf2PowerStarved",
              children: [(0, vb.jsx)(hw.c, {
                name: "triangle-exclamation"
              }), FC("buildAFactory2Game:powerStarved", {
                amount: String(qC.baf2PowerStarved)
              })]
            })]
          })]
        })]
      })
    }
    var Jn = ZC(4469),
      In = ZC(1388);
    class vn {
      constructor() {
        this.message = null, this.listeners = new Set
      }
      set(CC) {
        this.message = CC;
        for (const zC of this.listeners) zC()
      }
      get() {
        return this.message
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
    }
    class en extends vn {}

    function hn(CC, zC) {
      const ZC = () => {
          const ZC = CC.get();
          if (!ZC || !zC) return ZC;
          const [QC, wC, bC] = ZC.baf2PowerAt;
          return QC === zC[0] && wC === zC[1] && bC === zC[2] ? ZC : null
        },
        [wC, bC] = (0, QC.useState)(ZC);
      return (0, QC.useEffect)((() => (bC(ZC()), CC.subscribe((() => {
        bC(ZC())
      })))), [CC, ...null !== zC && void 0 !== zC ? zC : []]), wC
    }

    function Kn(CC) {
      return {
        stored: CC.baf2PowerStored,
        cap: CC.baf2PowerCap,
        madePerS: CC.baf2PowerMadePerS,
        usedPerS: CC.baf2PowerUsedPerS
      }
    }

    function Yn(CC) {
      let {
        stored: zC,
        cap: ZC
      } = CC;
      return (0, vb.jsx)("div", {
        className: "Baf2PowerBar",
        children: (0, vb.jsx)("div", {
          style: {
            width: `${Math.min(100,100*zC/Math.max(1,ZC))}%`
          }
        })
      })
    }

    function dn(CC) {
      let {
        figures: zC,
        labelled: ZC = !1
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = zC.madePerS - zC.usedPerS, {
        text: bC,
        draining: nC
      } = function(CC, zC) {
        let {
          stored: ZC,
          cap: QC,
          madePerS: wC,
          usedPerS: bC
        } = zC;
        const nC = wC - bC;
        return ZC >= QC ? {
          text: CC("buildAFactory2Game:powerFull"),
          draining: !1
        } : nC > .05 ? {
          text: CC("buildAFactory2Game:powerFullIn", {
            time: xb(CC, (QC - ZC) / nC)
          }),
          draining: !1
        } : nC < -.05 ? {
          text: CC("buildAFactory2Game:powerEmptyIn", {
            time: xb(CC, ZC / -nC)
          }),
          draining: !0
        } : {
          text: CC("buildAFactory2Game:powerSteady"),
          draining: !1
        }
      }(QC, zC);
      return (0, vb.jsxs)("div", {
        className: "Baf2PowerHeadline",
        children: [(0, vb.jsx)(Yn, {
          stored: zC.stored,
          cap: zC.cap
        }), (0, vb.jsxs)("div", {
          className: "Baf2PowerNumbers",
          children: [(0, vb.jsx)("span", {
            children: QC(ZC ? "buildAFactory2Game:powerStoredLabelled" : "buildAFactory2Game:powerStored", {
              stored: OC(zC.stored),
              cap: OC(zC.cap)
            })
          }), (0, vb.jsxs)("span", {
            className: Jw()("Baf2PowerNet", {
              Draining: nC
            }),
            children: [QC("buildAFactory2Game:powerPerSecond", {
              rate: Gb(Math.abs(wC), wC < 0 ? "\u2212" : "+")
            }), " \xb7 ", bC]
          })]
        })]
      })
    }

    function mn(CC) {
      let {
        stored: zC,
        cap: ZC,
        rates: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)();
      return QC ? (0, vb.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, vb.jsx)(dn, {
          figures: {
            stored: zC,
            cap: ZC,
            madePerS: QC[0],
            usedPerS: QC[1]
          },
          labelled: !0
        })
      }) : (0, vb.jsx)("div", {
        className: "Baf2PowerStrip",
        children: (0, vb.jsxs)("div", {
          className: "Baf2PowerHeadline",
          children: [(0, vb.jsx)(Yn, {
            stored: zC,
            cap: ZC
          }), (0, vb.jsx)("div", {
            className: "Baf2PowerNumbers",
            children: (0, vb.jsx)("span", {
              children: wC("buildAFactory2Game:powerStoredLabelled", {
                stored: OC(zC),
                cap: OC(ZC)
              })
            })
          })]
        })
      })
    }

    function Hn(CC) {
      let {
        store: zC,
        close: ZC
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = hn(zC);
      return (0, vb.jsx)(Jn.c, {
        close: ZC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2PowerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2PowerTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              children: [(0, vb.jsx)("h2", {
                id: "baf2PowerTitle",
                children: QC("buildAFactory2Game:powerTitle")
              }), (0, vb.jsx)("p", {
                children: QC("buildAFactory2Game:powerSubtitle")
              })]
            }), (0, vb.jsx)(In.k, {
              onClick: ZC
            })]
          }), wC && (0, vb.jsxs)("div", {
            className: "Baf2PowerBody",
            children: [(0, vb.jsx)(dn, {
              figures: Kn(wC)
            }), (0, vb.jsx)(xn, {
              message: wC
            })]
          })]
        })
      })
    }

    function En(CC) {
      var zC;
      let {
        kind: ZC,
        def: wC,
        hQ: bC,
        power: nC,
        stored: fC,
        cap: oC
      } = CC;
      const {
        t: qC
      } = (0, ew.y)(), FC = hn(nC, bC), [WC, NC] = (0, QC.useState)(!1);
      return (0, vb.jsxs)("div", {
        className: "Baf2GeneratorPower",
        children: [(0, vb.jsx)(Qn, {
          kind: ZC,
          def: wC,
          input: null,
          tier: null !== (zC = null === FC || void 0 === FC ? void 0 : FC.baf2PowerTier) && void 0 !== zC ? zC : 1
        }), (0, vb.jsx)("div", {
          className: "Baf2PowerCardTitle SmallTextBold",
          children: qC("buildAFactory2Game:powerTitle")
        }), FC && (0, vb.jsx)(dn, {
          figures: Kn(FC)
        }), !FC && (0, vb.jsx)(mn, {
          stored: fC,
          cap: oC,
          rates: null
        }), FC && (0, vb.jsx)("button", {
          type: "button",
          className: "Baf2PowerDetailsToggle SmallTextBold",
          onClick: () => {
            NC(!WC)
          },
          "aria-expanded": WC,
          children: qC(WC ? "buildAFactory2Game:powerHideDetails" : "buildAFactory2Game:powerDetails")
        }), FC && WC && (0, vb.jsx)(xn, {
          message: FC
        })]
      })
    }
    const Xn = 2500,
      cn = 17500,
      un = `${xC} `;
    const rn = ["plan", "throttle"];

    function sn(CC) {
      if (CC.startsWith(`${ez} `)) return CC.slice(0, CC.lastIndexOf(" "));
      const zC = CC.split(" ");
      return zC[0] === Fz && rn.includes(zC[4]) ? zC.slice(0, 5).join(" ") : null
    }
    class Tn {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.send = CC, this.now = zC, this.tokens = 5, this.refilledAt = void 0, this.pending = [], this.timer = null, this.PwC = 0, this.urgent = 0, this.reserves = 0, this.lastTicket = 0, this.leftTimes = new Map, this.refilledAt = zC()
      }
      enqueue(CC) {
        this.queue(CC, this.nextTicket());
        const zC = this.PwC + this.pending.length;
        return this.flush(), zC
      }
      track(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZC = this.nextTicket();
        if (!zC.urgent) return this.queue(CC, ZC), this.flush(), ZC;
        const {
          supersedes: QC
        } = zC;
        for (let bC = this.pending.length - 1; bC >= this.urgent; bC--) {
          const zC = this.pending[bC];
          (zC.command === CC || null !== QC && void 0 !== QC && QC(zC.command)) && (this.pending.splice(bC, 1), this.markLeft(zC.tickets))
        }
        const wC = this.pending.findIndex((zC => {
          let {
            command: ZC
          } = zC;
          return ZC === CC
        }));
        return -1 !== wC ? this.pending[wC].tickets.push(ZC) : (this.pending.splice(this.urgent, 0, {
          command: CC,
          tickets: [ZC]
        }), this.urgent += 1), this.flush(), ZC
      }
      leftAt(CC) {
        const zC = this.leftTimes.get(CC);
        return void 0 !== zC ? zC : this.pending.some((zC => {
          let {
            tickets: ZC
          } = zC;
          return ZC.includes(CC)
        })) ? null : -1 / 0
      }
      holdReserve() {
        this.reserves += 1;
        let CC = !0;
        return () => {
          CC && (CC = !1, this.reserves -= 1, this.flush())
        }
      }
      isWaitingLast(CC) {
        var zC;
        return (null === (zC = this.pending.at(-1)) || void 0 === zC ? void 0 : zC.command) === CC
      }
      sent() {
        return this.PwC
      }
      clear() {
        for (const {
            tickets: CC
          }
          of this.pending) this.markLeft(CC);
        this.pending.length = 0, this.urgent = 0, null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      nextTicket() {
        return this.lastTicket += 1, this.lastTicket
      }
      markLeft(CC) {
        const zC = this.now();
        for (const ZC of CC) this.leftTimes.set(ZC, zC);
        for (; this.leftTimes.size > 256;) this.leftTimes.delete(this.leftTimes.keys().next().value)
      }
      queue(CC, zC) {
        const ZC = this.pending.length > this.urgent ? this.pending.at(-1) : void 0;
        if ((null === ZC || void 0 === ZC ? void 0 : ZC.command) === CC) return void(! function(CC) {
          return CC === JC || CC.startsWith(`${AC} `) || CC.startsWith(`${rC} `)
        }(CC) ? ZC.tickets.push(zC) : (this.pending.pop(), this.markLeft([...ZC.tickets, zC])));
        const QC = void 0 === ZC ? null : qz(ZC.command, CC);
        if (null !== QC && void 0 !== ZC) return ZC.command = QC, void ZC.tickets.push(zC);
        const wC = sn(CC);
        if (null !== wC && void 0 !== ZC && sn(ZC.command) === wC) return ZC.command = CC, void ZC.tickets.push(zC);
        if (null !== ZC && void 0 !== ZC && ZC.command.startsWith(un) && CC.startsWith(un)) {
          const QC = CC.slice(un.length);
          if (ZC.command.slice(un.length).split(",").includes(QC)) return void ZC.tickets.push(zC);
          const wC = `${ZC.command},${QC}`;
          if (wC.length <= 119) return ZC.command = wC, void ZC.tickets.push(zC)
        }
        this.pending.push({
          command: CC,
          tickets: [zC]
        })
      }
      flush() {
        const CC = this.now();
        for (this.tokens = Math.min(5, this.tokens + (CC - this.refilledAt) / Xn), this.refilledAt = CC; this.pending.length > 0 && this.tokens >= this.tokensNeeded();) {
          this.tokens -= 1, this.PwC += 1, this.urgent > 0 && (this.urgent -= 1);
          const {
            command: CC,
            tickets: zC
          } = this.pending.shift();
          this.markLeft(zC), this.send(CC)
        }
        this.pending.length > 0 && null === this.timer && (this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), Math.ceil((this.tokensNeeded() - this.tokens) * Xn)))
      }
      tokensNeeded() {
        return this.urgent > 0 || 0 === this.reserves ? 1 : 2
      }
    }
    class an {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.queue = void 0, this.islandEdits = {
          count: 0,
          lastAtMs: -1 / 0
        }, this.queue = new Tn(CC, zC)
      }
      send(CC) {
        return this.queue.enqueue(CC)
      }
      sent() {
        return this.queue.sent()
      }
      track(CC, zC) {
        return this.queue.track(CC, zC)
      }
      leftAt(CC) {
        return this.queue.leftAt(CC)
      }
      holdUrgentReserve() {
        return this.queue.holdReserve()
      }
      sendIslandEdit(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        return this.queue.isWaitingLast(CC) || (this.islandEdits.count += 1), this.islandEdits.lastAtMs = zC, this.send(CC), this.islandEdits.count
      }
      syncIslandEdits(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const {
          islandEdits: ZC
        } = this, QC = zC - ZC.lastAtMs < cn;
        ZC.count = QC ? Math.max(ZC.count, CC) : CC
      }
      clear() {
        this.queue.clear()
      }
    }
    const tn = (0, QC.createContext)(null);

    function Dn() {
      const CC = (0, QC.useContext)(tn);
      if (!CC) throw new Error("A Build a Factory 2 panel outside Baf2Menu");
      return CC
    }

    function jn(CC, zC) {
      return null !== zC && void 0 !== zC ? zC : 1 === CC
    }

    function yn(CC, zC) {
      return CC.every((CC => {
        var ZC;
        let [QC, , wC] = CC;
        return !jn(wC, null === (ZC = zC.get(QC)) || void 0 === ZC ? void 0 : ZC.lM)
      }))
    }

    function Ln(CC, zC, ZC) {
      if (0 === CC.size) return CC;
      const QC = new Map(CC);
      for (const [wC, bC] of CC) {
        const CC = zC.find((CC => {
          let [zC] = CC;
          return zC === wC
        }));
        (!CC || bC.lM === (1 === CC[2]) || bC.atMs < ZC) && QC.delete(wC)
      }
      return QC
    }

    function Un(CC) {
      var zC;
      let {
        hQ: ZC,
        input: wC,
        drops: bC,
        seconds: nC
      } = CC;
      const {
        t: fC
      } = (0, ew.y)(), oC = Dn(), [qC, FC] = (0, QC.useState)(new Map);
      (0, QC.useEffect)((() => {
        bC && FC((CC => Ln(CC, bC, Date.now() - cn)))
      }), [bC]), (0, QC.useEffect)((() => {
        const CC = function(CC, zC) {
          let ZC = null;
          for (const {
              atMs: QC
            }
            of CC.values()) ZC = null === ZC ? QC : Math.min(ZC, QC);
          return null === ZC ? null : ZC + zC
        }(qC, cn);
        if (null === CC || !bC) return;
        const zC = setTimeout((() => {
          FC((CC => Ln(CC, bC, Date.now() - cn)))
        }), Math.max(0, CC - Date.now()) + 1);
        return () => {
          clearTimeout(zC)
        }
      }), [qC, bC]);
      const WC = tC(wC),
        NC = null !== WC && null !== bC && yn(bC, qC),
        MC = function(CC, zC, ZC) {
          return null === CC || null === zC || yn(zC, ZC) ? 0 : uC[XC[CC]]
        }(WC, bC, qC);
      return (0, vb.jsxs)(Eb, {
        title: fC("buildAFactory2Game:farmDropsTitle", {
          seconds: nC
        }),
        count: null !== (zC = null === bC || void 0 === bC ? void 0 : bC.length) && void 0 !== zC ? zC : 0,
        children: [MC > 0 && (0, vb.jsx)("li", {
          className: "Baf2Recipe Baf2FarmPower SmallTextLight",
          children: fC("buildAFactory2Game:farmDropsPower", {
            power: String(MC)
          })
        }), (null === WC || !bC) && (0, vb.jsx)("li", {
          className: "Baf2Recipe SmallTextLight",
          children: fC("buildAFactory2Game:farmDropsEmpty")
        }), NC && (0, vb.jsx)("li", {
          className: "Baf2Recipe Baf2FarmWarning SmallTextBold",
          children: fC("buildAFactory2Game:farmDropsAllVoided")
        }), null !== WC && (null === bC || void 0 === bC ? void 0 : bC.map((CC => {
          var zC;
          let [QC, wC, bC] = CC;
          const nC = wC < .1 ? "buildAFactory2Game:farmDropRateLow" : "buildAFactory2Game:farmDropRate",
            WC = jn(bC, null === (zC = qC.get(QC)) || void 0 === zC ? void 0 : zC.lM);
          return (0, vb.jsxs)("li", {
            className: Jw()("Baf2Recipe Baf2FarmDrop", {
              Voided: !WC
            }),
            children: [(0, vb.jsx)(Kb, {
              item: QC,
              amount: 1
            }), (0, vb.jsx)("span", {
              className: "Baf2RecipeName",
              children: wb(fC, QC)
            }), (0, vb.jsx)("span", {
              className: "Baf2FarmRate",
              children: fC(nC, {
                amount: String(wC)
              })
            }), (0, vb.jsx)("button", {
              type: "button",
              className: Jw()("Baf2FarmToggle SmallTextBold", {
                Kept: WC
              }),
              "aria-pressed": WC,
              onClick: () => {
                FC(new Map(qC).set(QC, {
                  lM: !WC,
                  atMs: Date.now()
                })), oC.send(function(CC, zC, ZC, QC) {
                  return `${rC} ${CC} ${zC} ${ZC} ${QC}`
                }(ZC[0], ZC[1], ZC[2], QC))
              },
              children: fC(WC ? "buildAFactory2Game:farmDropKeep" : "buildAFactory2Game:farmDropVoid")
            })]
          }, QC)
        })))]
      })
    }
    var Bn;
    const On = String(null !== (Bn = Ez.Synthesizer.waterPerOp) && void 0 !== Bn ? Bn : 0);

    function kn(CC) {
      let {
        hQ: zC,
        taught: ZC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), bC = Dn(), [nC, fC] = (0, QC.useState)(null);
      (0, QC.useEffect)((() => {
        null !== nC && ZC === nC && fC(null)
      }), [nC, ZC]);
      const oC = null !== nC && void 0 !== nC ? nC : ZC;
      let qC = wC("buildAFactory2Game:synthPick");
      return null !== oC && (qC = wC("buildAFactory2Game:synthGrows", {
        name: wb(wC, oC),
        input: wb(wC, Iz),
        water: On
      })), (0, vb.jsxs)("div", {
        className: "Baf2SynthPicker",
        children: [(0, vb.jsx)("div", {
          className: Jw()("Baf2SynthHeader SmallTextBold", {
            Untaught: null === oC
          }),
          children: qC
        }), (0, vb.jsx)("ul", {
          className: "Baf2SynthGrid",
          children: iz.map(((CC, ZC) => {
            const QC = wb(wC, CC),
              nC = CC === oC;
            return (0, vb.jsx)("li", {
              children: (0, vb.jsx)("button", {
                type: "button",
                className: Jw()("Baf2SynthTile", {
                  Selected: nC
                }),
                title: QC,
                "aria-label": QC,
                "aria-pressed": nC,
                onClick: () => {
                  nC || (fC(CC), bC.send(`${ez} ${zC[0]} ${zC[1]} ${zC[2]} ${ZC}`))
                },
                children: (0, vb.jsx)(Kw.e, {
                  itemName: CC,
                  amount: 0
                })
              })
            }, CC)
          }))
        })]
      })
    }
    const Vn = ["buildAFactory2Game:machineCoupled", "buildAFactory2Game:machineCoupledAdvanced", "buildAFactory2Game:machineCoupledNova"];

    function Cf(CC) {
      let {
        kind: zC,
        tier: ZC,
        coupled: QC,
        level: wC,
        slot: bC
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), oC = BC(Xz);
      if (!QC && null !== ZC && ZC < oC) return (0, vb.jsxs)("div", {
        className: "Baf2UpgradeSocket Locked",
        children: [(0, vb.jsx)("span", {
          className: "Baf2UpgradeLock",
          children: (0, vb.jsx)(hw.c, {
            name: "lock"
          })
        }), (0, vb.jsx)("div", {
          className: "Baf2UpgradeCaption SmallTextLight",
          children: nC("buildAFactory2Game:upgradeLocked")
        }), (0, vb.jsx)("span", {
          className: "Baf2TierTag",
          children: nC("buildAFactory2Game:tierTag", {
            tier: String(oC)
          })
        })]
      });
      const qC = function(CC, zC) {
          if (fC() && "Crusher" !== CC && null !== zC) {
            if (zf(uz, zC)) return {
              item: uz,
              emptyKey: "buildAFactory2Game:upgradeEmptyNova"
            };
            if (zf(cz, zC)) return {
              item: cz,
              emptyKey: "buildAFactory2Game:upgradeEmptyAdvanced"
            }
          }
          return {
            item: Xz,
            emptyKey: "buildAFactory2Game:upgradeEmpty"
          }
        }(zC, ZC),
        FC = nC(QC ? Vn[wC - 1] : qC.emptyKey),
        WC = null !== ZC ? function(CC, zC, ZC, QC) {
          if (!fC() || !ZC || "Crusher" === CC || zC < 10) return null;
          const wC = BC(uz);
          if (QC < 3 && wC > 1 && (2 === QC || zC >= wC)) return {
            tier: wC,
            lockedKey: "buildAFactory2Game:upgradeNovaLocked",
            nextKey: "buildAFactory2Game:upgradeNovaNext"
          };
          const bC = BC(cz);
          if (1 === QC && bC > 1) return {
            tier: bC,
            lockedKey: "buildAFactory2Game:upgradeAdvancedLocked",
            nextKey: "buildAFactory2Game:upgradeAdvancedNext"
          };
          return null
        }(zC, ZC, QC, wC) : null;
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2UpgradeSocket", {
          Fitted: QC
        }),
        children: [(0, vb.jsxs)("div", {
          className: "Baf2UpgradeSlot",
          children: [QC && bC, !QC && (0, vb.jsx)("div", {
            className: "Baf2UpgradeGhost",
            children: (0, vb.jsx)(Kw.e, {
              itemName: qC.item,
              amount: 0
            })
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2UpgradeText",
          children: [(0, vb.jsx)("div", {
            className: "Baf2UpgradeTitle SmallTextBold",
            children: nC("buildAFactory2Game:upgradeTitle")
          }), (0, vb.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: FC
          }), QC && wC >= 2 && "Crusher" === zC && (0, vb.jsx)("div", {
            className: "Baf2UpgradeCaption SmallTextLight",
            children: nC("buildAFactory2Game:couplerCrusherHint")
          }), WC && null !== ZC && ZC < WC.tier && (0, vb.jsxs)("div", {
            className: "Baf2UpgradeNext Locked SmallTextLight",
            children: [(0, vb.jsx)("span", {
              className: "Baf2UpgradeLock",
              children: (0, vb.jsx)(hw.c, {
                name: "lock"
              })
            }), nC(WC.lockedKey), (0, vb.jsx)("span", {
              className: "Baf2TierTag",
              children: nC("buildAFactory2Game:tierTag", {
                tier: String(WC.tier)
              })
            })]
          }), WC && null !== ZC && ZC >= WC.tier && (0, vb.jsx)("div", {
            className: "Baf2UpgradeNext SmallTextLight",
            children: nC(WC.nextKey)
          })]
        })]
      })
    }

    function zf(CC, zC) {
      const ZC = BC(CC);
      return ZC > 1 && zC >= ZC
    }
    var Zf = ZC(36897);
    const Qf = (0, kC.C)(Ez.Condenser, Ez.Condenser.fluidMade),
      wf = .05;
    class bf extends vn {}

    function nf(CC) {
      return Gb(CC, "")
    }

    function ff(CC, zC, ZC) {
      return CC(zC ? "buildAFactory2Game:cryoPerS" : "buildAFactory2Game:waterPerS", {
        rate: ZC
      })
    }

    function of(CC, zC, ZC, QC) {
      return ZC <= wf && QC <= wf ? null : QC <= wf || ZC <= wf ? ff(CC, zC, QC <= wf ? Gb(ZC, "+") : Gb(QC, "\u2212")) : CC(zC ? "buildAFactory2Game:cryoRates" : "buildAFactory2Game:waterRates", {
        made: nf(ZC),
        used: nf(QC)
      })
    }

    function qf(CC, zC) {
      return Math.min(100, 100 * CC / Math.max(1, zC))
    }

    function Ff(CC) {
      let {
        stored: zC,
        cap: ZC,
        netPerS: QC,
        rates: wC,
        cryo: bC
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), fC = function(CC, zC, ZC, QC) {
        return ZC <= 0 ? CC("buildAFactory2Game:waterNoStorage") : zC >= ZC ? CC("buildAFactory2Game:powerFull") : QC > wf ? CC("buildAFactory2Game:powerFullIn", {
          time: xb(CC, (ZC - zC) / QC)
        }) : QC < -.05 ? zC <= 0 ? CC("buildAFactory2Game:waterEmpty") : CC("buildAFactory2Game:powerEmptyIn", {
          time: xb(CC, zC / -QC)
        }) : CC("buildAFactory2Game:powerSteady")
      }(nC, zC, ZC, QC), oC = ZC > 0 && zC < ZC && Math.abs(QC) <= wf, qC = nC(bC ? "buildAFactory2Game:cryoNoFlow" : "buildAFactory2Game:waterNoFlow"), FC = null !== wC ? `${wC} \xb7 ${fC}` : oC ? qC : `${qC} \xb7 ${fC}`;
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)("div", {
          className: "Baf2WaterBar",
          children: (0, vb.jsx)("div", {
            style: {
              width: `${qf(zC,ZC)}%`
            }
          })
        }), (0, vb.jsxs)("div", {
          className: "Baf2WaterNumbers",
          children: [(0, vb.jsx)("span", {
            children: ZC > 0 && nC("buildAFactory2Game:powerStored", {
              stored: (0, kC.M)(zC),
              cap: (0, kC.M)(ZC)
            })
          }), (0, vb.jsx)("span", {
            className: Jw()("Baf2WaterNet", {
              Draining: QC < -.05
            }),
            children: FC
          })]
        })]
      })
    }

    function Wf(CC) {
      let {
        water: zC,
        at: ZC,
        side: QC = null
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), bC = Dn(), [nC, fC, oC] = zC;
      return (0, vb.jsxs)("div", {
        className: "Baf2WaterStrip",
        children: [(0, vb.jsxs)("div", {
          className: "Baf2WaterStripHead",
          children: [(0, vb.jsx)("span", {
            className: "Baf2WaterStripTitle SmallTextBold",
            children: wC(null === QC ? "buildAFactory2Game:waterTitle" : `buildAFactory2Game:${QC}`)
          }), (0, vb.jsx)("button", {
            type: "button",
            className: "Baf2WaterStripOpen SmallTextBold",
            onClick: () => {
              bC.send(`${kC.z} ${ZC[0]} ${ZC[1]} ${ZC[2]}${"cryoOut"===QC?" cryo":""}`)
            },
            children: wC("buildAFactory2Game:waterDetails")
          })]
        }), (0, vb.jsx)(Ff, {
          stored: nC,
          cap: fC,
          netPerS: oC,
          rates: ff(wC, "cryoOut" === QC, Gb(Math.abs(oC), oC < 0 ? "\u2212" : "+")),
          cryo: "cryoOut" === QC
        })]
      })
    }

    function Nf(CC, zC) {
      var ZC, QC, wC;
      const bC = !0 === zC.baf2WaterCryo,
        nC = null !== (ZC = null === (QC = zC.baf2WaterMakers.find((CC => CC[0] === (bC ? kC.c : "Condenser")))) || void 0 === QC ? void 0 : QC[1]) && void 0 !== ZC ? ZC : 0,
        fC = [],
        oC = (zC, ZC, QC) => {
          zC > 0 && fC.push(CC(1 === zC ? ZC : QC, {
            count: String(zC)
          }))
        };
      return bC ? oC(nC, "buildAFactory2Game:cryoMixer", "buildAFactory2Game:cryoMixers") : oC(nC, "buildAFactory2Game:waterCondenser", "buildAFactory2Game:waterCondensers"), oC(null !== (wC = zC.baf2WaterPipes) && void 0 !== wC ? wC : 0, "buildAFactory2Game:waterPipe", "buildAFactory2Game:waterPipes"), oC(zC.baf2WaterTanks, "buildAFactory2Game:waterTank", "buildAFactory2Game:waterTanks"), fC.join(" \xb7 ")
    }

    function Mf(CC, zC) {
      if (!0 === zC.baf2WaterCryo) return function(CC, zC) {
        const ZC = Ez[kC.c];
        switch (zC.baf2WaterThis) {
          case "pipe":
            return {
              text: CC("buildAFactory2Game:cryoThisPipe"), bad: !1
            };
          case "condenserFull":
            return {
              text: CC("buildAFactory2Game:cryoThisMixerFull"), bad: !1
            };
          case "condenserNoPower":
            return {
              text: CC("buildAFactory2Game:cryoThisMixerNoPower"), bad: !0
            };
          case "condenserNoOutlet":
            return {
              text: CC("buildAFactory2Game:cryoThisMixerNoOutlet"), bad: !0
            };
          case "mixerNoInput":
            return {
              text: CC("buildAFactory2Game:cryoThisMixerNoInput"), bad: !0
            };
          case "mixerBadInput":
            return {
              text: CC("buildAFactory2Game:cryoThisMixerBadInput"), bad: !0
            };
          case "mixerNoWater":
            return {
              text: CC("buildAFactory2Game:cryoThisMixerNoWater"), bad: !0
            };
          case "condenser": {
            var QC;
            const [wC, bC] = null !== (QC = zC.baf2WaterThisRates) && void 0 !== QC ? QC : [(0, kC.C)(ZC, ZC.cryoMade), (0, kC.C)(ZC, ZC.powerPerOp)];
            return !0 === zC.baf2WaterDriven ? {
              text: CC("buildAFactory2Game:cryoThisMixerDriven", {
                rate: nf(wC)
              }),
              bad: !1
            } : {
              text: CC("buildAFactory2Game:cryoThisMixer", {
                rate: nf(wC),
                power: nf(bC)
              }),
              bad: !1
            }
          }
          default:
            return {
              text: CC("buildAFactory2Game:cryoThisUser"), bad: !1
            }
        }
      }(CC, zC);
      const ZC = !0 === zC.baf2WaterDriven,
        QC = Ez.Condenser;
      switch (zC.baf2WaterThis) {
        case "pipe":
          return {
            text: CC("buildAFactory2Game:waterThisPipe"), bad: !1
          };
        case "condenserFull":
          return {
            text: CC("buildAFactory2Game:waterThisCondenserFull"), bad: !1
          };
        case "condenserNoPower":
          return {
            text: CC("buildAFactory2Game:waterThisCondenserNoPower"), bad: !0
          };
        case "condenserNoOutlet":
          return {
            text: CC("buildAFactory2Game:waterThisCondenserNoOutlet"), bad: !0
          };
        case "tank":
          return {
            text: CC("buildAFactory2Game:waterThisTank", {
              tank: (0, kC.M)(kC.q),
              cap: (0, kC.M)(zC.baf2WaterCap)
            }), bad: !1
          };
        case "condenser": {
          var wC;
          const [bC, nC] = null !== (wC = zC.baf2WaterThisRates) && void 0 !== wC ? wC : [Qf, (0, kC.C)(QC, QC.powerPerOp)];
          return ZC ? {
            text: CC("buildAFactory2Game:waterThisCondenserDriven", {
              rate: nf(bC)
            }),
            bad: !1
          } : {
            text: CC("buildAFactory2Game:waterThisCondenser", {
              rate: nf(bC),
              power: nf(nC)
            }),
            bad: !1
          }
        }
        default:
          return {
            text: CC("buildAFactory2Game:waterThisUser"), bad: !1
          }
      }
    }

    function gf(CC, zC) {
      const ZC = zC.baf2WaterMakers.some((CC => !0 === CC[5]));
      if (!0 === zC.baf2WaterCryo) {
        const QC = zC.baf2WaterUsedPerS - zC.baf2WaterMadePerS,
          wC = ZC || QC <= wf ? 0 : (0, kC.A)(QC);
        return 0 === wC ? null : wC > 1 ? CC("buildAFactory2Game:cryoNextMixers", {
          mixers: String(wC)
        }) : CC("buildAFactory2Game:cryoNextOne")
      }
      const QC = ZC ? null : function(CC, zC) {
        const ZC = zC - CC;
        return ZC <= wf ? null : Math.ceil(ZC / Qf)
      }(zC.baf2WaterMadePerS, zC.baf2WaterUsedPerS);
      return null === QC ? null : QC > 1 ? CC("buildAFactory2Game:waterNextCondensers", {
        condensers: String(QC)
      }) : CC("buildAFactory2Game:waterNextOne")
    }

    function Sf(CC) {
      let {
        item: zC,
        label: ZC,
        note: QC,
        value: wC,
        dim: bC,
        bad: nC
      } = CC;
      return (0, vb.jsxs)("li", {
        className: Jw()("Baf2WaterRow", {
          Dim: bC,
          Bad: nC
        }),
        children: [(0, vb.jsx)("span", {
          className: "Baf2WaterRowIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: zC,
            amount: 0
          })
        }), (0, vb.jsxs)("span", {
          className: "Baf2WaterRowText",
          children: [(0, vb.jsx)("span", {
            className: "Baf2WaterRowLabel",
            children: ZC
          }), QC && (0, vb.jsx)("span", {
            className: "Baf2WaterRowNote",
            children: QC
          })]
        }), (0, vb.jsx)("span", {
          className: "Baf2WaterRowValue",
          children: wC
        })]
      })
    }

    function pf(CC) {
      return Zf.m[CC] ? CC : "Reactor Port"
    }

    function Pf(CC) {
      let {
        message: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), QC = !0 === zC.baf2WaterCryo, wC = (CC, zC) => ff(ZC, QC, Gb(CC, zC));
      return (0, vb.jsxs)("div", {
        className: "Baf2WaterLists",
        children: [(0, vb.jsxs)("section", {
          children: [(0, vb.jsxs)("h3", {
            children: [ZC("buildAFactory2Game:waterMakes"), (0, vb.jsx)("span", {
              children: wC(zC.baf2WaterMadePerS, "+")
            })]
          }), (0, vb.jsxs)("ul", {
            children: [0 === zC.baf2WaterMakers.length && (0, vb.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZC(QC ? "buildAFactory2Game:cryoNoMakers" : "buildAFactory2Game:waterNoMakers")
            }), zC.baf2WaterMakers.map((CC => {
              let [zC, QC, bC, nC, fC, oC] = CC;
              const qC = ZC("buildAFactory2Game:powerRunning", {
                amount: String(bC)
              });
              let FC = fC > 0 ? ZC("buildAFactory2Game:waterMakerPower", {
                running: qC,
                power: nf(fC)
              }) : qC;
              return oC && (FC = ZC(0 === bC && nC <= 0 ? "buildAFactory2Game:waterMakerNoPower" : "buildAFactory2Game:waterMakerShort")), (0, vb.jsx)(Sf, {
                item: zC,
                label: `${wb(ZC,zC)} \xd7${QC}`,
                note: FC,
                value: bC > 0 || oC && nC > 0 ? wC(nC, "+") : ZC("buildAFactory2Game:powerIdle"),
                dim: 0 === bC && !oC,
                bad: oC
              }, zC)
            }))]
          })]
        }), (0, vb.jsxs)("section", {
          children: [(0, vb.jsxs)("h3", {
            children: [ZC("buildAFactory2Game:waterUses"), (0, vb.jsx)("span", {
              children: wC(zC.baf2WaterUsedPerS, "\u2212")
            })]
          }), (0, vb.jsxs)("ul", {
            children: [0 === zC.baf2WaterUsers.length && (0, vb.jsx)("li", {
              className: "Baf2WaterEmpty",
              children: ZC(QC ? "buildAFactory2Game:cryoNoUsers" : "buildAFactory2Game:waterNoUsers")
            }), zC.baf2WaterUsers.map((CC => {
              let [zC, QC, bC, nC] = CC;
              const fC = Zf.m[zC] ? wb(ZC, zC) : zC;
              return (0, vb.jsx)(Sf, {
                item: pf(zC),
                label: QC > 1 ? `${fC} \xd7${QC}` : fC,
                note: nC ? ZC("buildAFactory2Game:waterPortFirst") : void 0,
                value: bC > 0 ? wC(bC, "\u2212") : ZC("buildAFactory2Game:powerIdle"),
                dim: 0 === bC
              }, zC)
            }))]
          })]
        })]
      })
    }

    function Gf(CC) {
      var zC, ZC, wC, bC, nC;
      let {
        store: fC,
        close: oC
      } = CC;
      const {
        t: qC
      } = (0, ew.y)(), FC = function(CC) {
        const [zC, ZC] = (0, QC.useState)((() => CC.get()));
        return (0, QC.useEffect)((() => (ZC(CC.get()), CC.subscribe((() => {
          ZC(CC.get())
        })))), [CC]), zC
      }(fC), WC = null !== (zC = null === FC || void 0 === FC ? void 0 : FC.baf2WaterStored) && void 0 !== zC ? zC : 0, NC = null !== (ZC = null === FC || void 0 === FC ? void 0 : FC.baf2WaterCap) && void 0 !== ZC ? ZC : 0, MC = null !== (wC = null === FC || void 0 === FC ? void 0 : FC.baf2WaterMadePerS) && void 0 !== wC ? wC : 0, gC = null !== (bC = null === FC || void 0 === FC ? void 0 : FC.baf2WaterUsedPerS) && void 0 !== bC ? bC : 0, SC = null !== (nC = null === FC || void 0 === FC ? void 0 : FC.baf2WaterNetPerS) && void 0 !== nC ? nC : MC - gC, pC = FC && Mf(qC, FC), PC = FC && gf(qC, FC), GC = !0 === (null === FC || void 0 === FC ? void 0 : FC.baf2WaterCryo);
      return (0, vb.jsx)(Jn.c, {
        close: oC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2WaterPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2WaterTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              className: "Baf2WaterTitle",
              children: [null !== FC && NC <= 0 ? (0, vb.jsx)("span", {
                className: "Baf2TankIcon NoTank"
              }) : (0, vb.jsx)("span", {
                className: "Baf2TankIcon",
                children: (0, vb.jsx)(Kw.e, {
                  itemName: GC ? gZ.c : kC.h,
                  amount: 0
                })
              }), (0, vb.jsxs)("div", {
                children: [(0, vb.jsx)("h2", {
                  id: "baf2WaterTitle",
                  children: qC(GC ? "buildAFactory2Game:cryoTitle" : "buildAFactory2Game:waterTitle")
                }), FC && (0, vb.jsx)("p", {
                  children: Nf(qC, FC)
                })]
              })]
            }), (0, vb.jsx)(In.k, {
              onClick: oC
            })]
          }), FC && pC && (0, vb.jsxs)("div", {
            className: "Baf2WaterBody",
            children: [(0, vb.jsx)("div", {
              className: "Baf2WaterHead",
              children: (0, vb.jsx)(Ff, {
                stored: WC,
                cap: NC,
                netPerS: SC,
                cryo: GC,
                rates: of(qC, GC, MC, gC)
              })
            }), (0, vb.jsx)("div", {
              className: Jw()("Baf2WaterThis", {
                Bad: pC.bad
              }),
              children: pC.text
            }), FC.baf2WaterDriven && (0, vb.jsxs)("div", {
              className: "Baf2WaterDriven",
              children: [(0, vb.jsx)(hw.c, {
                name: "bolt"
              }), qC(GC ? "buildAFactory2Game:cryoDriven" : "buildAFactory2Game:waterDriven")]
            }), PC && (0, vb.jsx)("p", {
              className: "Baf2WaterNext",
              children: PC
            }), (0, vb.jsx)(Pf, {
              message: FC
            })]
          })]
        })
      })
    }
    class Rf {
      constructor() {
        this.pos = null, this.view = null, this.updates = 0, this.listeners = new Set
      }
      set(CC, zC) {
        const ZC = this.get(CC);
        ZC && null === zC.opLeftMs && null === zC.fuelLeftMs && zC.status === ZC.status ? zC = {
          ...zC,
          opLeftMs: ZC.opLeftMs,
          fuelLeftMs: ZC.fuelLeftMs,
          burning: ZC.burning
        } : this.updates++, this.pos = CC, this.view = zC;
        for (const QC of this.listeners) QC()
      }
      get(CC) {
        return null !== this.pos && this.pos[0] === CC[0] && this.pos[1] === CC[1] && this.pos[2] === CC[2] ? this.view : null
      }
      forget(CC) {
        null !== this.get(CC) && (this.pos = null, this.view = null)
      }
      get updateCount() {
        return this.updates
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
    }

    function Af(CC, zC, ZC, QC) {
      return "noFuel" === zC && QC && !wZ(Ez[CC]) ? "buildAFactory2Game:machineStatus_noFuelLine" : "outputFull" === zC && !0 === (null === ZC || void 0 === ZC ? void 0 : ZC.coreFull) ? "buildAFactory2Game:machineStatus_outputFullCore" : "noWater" === zC && !0 === (null === ZC || void 0 === ZC ? void 0 : ZC.waterUnpowered) ? "buildAFactory2Game:machineStatus_noWaterPower" : "noPower" === zC && !0 === (null === ZC || void 0 === ZC ? void 0 : ZC.powerShort) ? "buildAFactory2Game:machineStatus_noPowerShort" : "noPower" === zC && !0 === (null === ZC || void 0 === ZC ? void 0 : ZC.powerWait) ? "buildAFactory2Game:machineStatus_noPowerWait" : xf(zC, ZC) ? "buildAFactory2Game:machineStatus_noInputShort" : function(CC, zC) {
        const ZC = Ez[CC];
        if ("noFuel" === zC && void 0 !== ZC.fuels) return wZ(ZC) ? "buildAFactory2Game:machineStatus_noFuelCell" : "buildAFactory2Game:machineStatus_noFuelCoal";
        if (ZC.mobFarm && ("noInput" === zC || "badInput" === zC)) return `buildAFactory2Game:machineStatus_${zC}MobFarm`;
        if ("outputFull" === zC && (void 0 !== ZC.table || ZC.recycles)) return "buildAFactory2Game:machineStatus_outputFullSkyTap";
        if ("notTaught" === zC && yz(ZC)) return "buildAFactory2Game:machineStatus_notTaughtSynth";
        if (void 0 !== ZC.cryoMade && ("noInput" === zC || "noOutlet" === zC || "fluidFull" === zC)) return `buildAFactory2Game:machineStatus_${zC}Mixer`;
        return `buildAFactory2Game:machineStatus_${zC}`
      }(CC, zC)
    }

    function xf(CC, zC) {
      return "noInput" === CC && null !== zC && void 0 !== zC && zC.input && zC.inputShort ? {
        input: zC.input,
        short: zC.inputShort
      } : null
    }

    function Jf(CC) {
      return Iw(CC) ? "buildAFactory2Game:machineInputFertiliser" : void 0 !== CC.cryoMade ? "buildAFactory2Game:machineInputBiomass" : "buildAFactory2Game:machineInput"
    }

    function If(CC) {
      const zC = (0, EC.ke)(CC);
      return `Baf2Pane Baf2Pane${zC.charAt(0).toUpperCase()}${zC.slice(1)}`
    }

    function vf(CC, zC) {
      const [ZC, wC] = (0, QC.useState)((() => CC.get(zC)));
      return (0, QC.useEffect)((() => {
        wC(CC.get(zC));
        const ZC = CC.subscribe((() => {
          wC(CC.get(zC))
        }));
        return () => {
          ZC(), CC.forget(zC)
        }
      }), [CC, ...zC]), ZC
    }

    function ef(CC, zC, ZC, QC) {
      const wC = Ez[CC],
        bC = zC && wC.couplable ? az(wC, ZC) : wC,
        nC = null !== QC && zZ(bC) ? function(CC, zC) {
          var ZC;
          return null !== (ZC = null !== zC && zZ(CC) ? fZ[zC] : void 0) && void 0 !== ZC ? ZC : CC.opMs
        }(bC, oZ(QC)) : bC.opMs;
      return nC === bC.opMs ? bC : {
        ...bC,
        opMs: nC
      }
    }

    function hf(CC) {
      let {
        running: zC,
        opMs: ZC,
        opLeftMs: QC,
        updateCount: wC
      } = CC;
      return (0, vb.jsx)("div", {
        className: Jw()("Baf2MachineProgress", {
          Running: zC
        }),
        children: (0, vb.jsx)("div", {
          className: "Baf2MachineProgressFill",
          style: {
            animationDuration: ZC / 1e3 + "s",
            animationDelay: null === QC ? void 0 : (QC - ZC) / 1e3 + "s"
          }
        }, wC)
      })
    }

    function Kf(CC) {
      let {
        running: zC,
        leftMs: ZC,
        periodMs: QC,
        updateCount: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)(), nC = Math.min(Math.max(null !== ZC && void 0 !== ZC ? ZC : 0, 0), QC), fC = zC && nC > 0, oC = bC("buildAFactory2Game:machineBarFuel");
      return (0, vb.jsx)("div", {
        className: Jw()("Baf2FuelBurn", {
          Draining: fC
        }),
        role: "img",
        title: oC,
        "aria-label": oC,
        children: (0, vb.jsx)("div", {
          className: "Baf2FuelBurnFill",
          style: fC ? {
            animationDuration: QC / 1e3 + "s",
            animationDelay: (nC - QC) / 1e3 + "s"
          } : {
            transform: `scaleY(${nC/QC})`
          }
        }, wC)
      })
    }

    function Yf(CC, zC, ZC) {
      let [QC, wC] = ZC;
      const bC = 1 !== QC ? vw(zC) : null;
      return {
        amount: QC,
        have: wC,
        item: CC(bC || Qb(zC))
      }
    }

    function df(CC) {
      return zZ(CC) ? "buildAFactory2Game:machineBarMining" : ZZ(CC) ? "buildAFactory2Game:machineBarCutting" : void 0 !== CC.powerMade ? "buildAFactory2Game:machineBarPower" : "buildAFactory2Game:machineBarMaking"
    }

    function mf(CC) {
      var zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC;
      let {
        kind: AC,
        hQ: xC,
        store: JC,
        power: IC,
        renderSlot: iC
      } = CC;
      const {
        t: vC
      } = (0, ew.y)(), eC = vf(JC, xC), hC = Ez[AC], KC = null !== (zC = null === eC || void 0 === eC ? void 0 : eC.coupled) && void 0 !== zC && zC, YC = null !== (ZC = null === eC || void 0 === eC ? void 0 : eC.couplerLevel) && void 0 !== ZC ? ZC : 1, dC = ef(AC, KC, YC, null !== (QC = null === eC || void 0 === eC || null === (wC = eC.dug) || void 0 === wC ? void 0 : wC.item) && void 0 !== QC ? QC : null), mC = null !== (bC = null === eC || void 0 === eC ? void 0 : eC.status) && void 0 !== bC ? bC : null, HC = null !== (nC = null === eC || void 0 === eC ? void 0 : eC.power) && void 0 !== nC ? nC : null, EC = null !== (fC = null === eC || void 0 === eC ? void 0 : eC.opLeftMs) && void 0 !== fC ? fC : null, lC = null !== (oC = null === eC || void 0 === eC ? void 0 : eC.dug) && void 0 !== oC ? oC : null, XC = null !== lC && zZ(hC) ? fZ[null !== (qC = oZ(lC.item)) && void 0 !== qC ? qC : ""] : void 0, cC = void 0 === XC ? null : 6e4 / XC, uC = null !== (FC = null === eC || void 0 === eC ? void 0 : eC.powerCap) && void 0 !== FC ? FC : 4e3, rC = null !== (WC = null === eC || void 0 === eC ? void 0 : eC.tier) && void 0 !== WC ? WC : null, sC = void 0 !== dC.powerMade, TC = null !== hC.fuelSlot ? iC(hC.fuelSlot) : null, aC = Tz(hC), tC = !KC && !0 === (null === eC || void 0 === eC ? void 0 : eC.fuelFed), jC = !KC && !0 === (null === eC || void 0 === eC ? void 0 : eC.fuelFeeds), yC = null !== hC.fuelSlot && !KC, LC = null !== (NC = null === eC || void 0 === eC ? void 0 : eC.fuelLeftMs) && void 0 !== NC ? NC : null, UC = function(CC, zC, ZC) {
        var QC;
        const wC = null === zC ? void 0 : bZ[zC];
        return Math.max(null !== (QC = null !== wC && void 0 !== wC ? wC : ZC) && void 0 !== QC ? QC : 0, CC.opMs)
      }(dC, null !== (MC = null === eC || void 0 === eC ? void 0 : eC.burning) && void 0 !== MC ? MC : null, LC), BC = null !== (gC = null === eC || void 0 === eC ? void 0 : eC.fuelKeep) && void 0 !== gC ? gC : null, OC = null === mC ? null : Af(AC, mC, eC, tC), kC = null === mC ? null : xf(mC, eC);
      return (0, vb.jsxs)("div", {
        className: "Baf2MachinePane",
        children: [(0, vb.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, vb.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: vC(Qb(AC))
          }), lC && (0, vb.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [vC("Tree Cutter" === AC ? "buildAFactory2Game:machineCutting" : "buildAFactory2Game:machineDigging"), (0, vb.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, vb.jsx)(Kw.e, {
                itemName: lC.item,
                amount: 0
              })
            }), (0, vb.jsx)(Yw.e, {
              text: lC.name
            })]
          }), null !== cC && (0, vb.jsx)("div", {
            className: "Baf2MachineDugNote SmallTextLight",
            children: vC("buildAFactory2Game:machineDigsFixed", {
              perMin: String(cC)
            })
          }), (null === eC || void 0 === eC ? void 0 : eC.field) && (0, vb.jsxs)("div", {
            className: "Baf2MachineDug SmallTextBold",
            children: [(0, vb.jsx)("span", {
              className: "Baf2MachineDugIcon",
              children: (0, vb.jsx)(Kw.e, {
                itemName: "Wheat",
                amount: 0
              })
            }), vC("buildAFactory2Game:machineField", {
              planted: String(eC.field[0]),
              ripe: String(eC.field[1])
            })]
          }), (0, vb.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, vb.jsxs)("div", {
              className: Jw()("Baf2MachineColumn", {
                Baf2Burns: yC
              }),
              children: [null !== dC.inputSlot && (0, vb.jsxs)("div", {
                className: "Baf2MachineSlot",
                children: [(0, vb.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vC(Jf(dC))
                }), iC(dC.inputSlot)]
              }), null !== hC.fuelSlot && !KC && (0, vb.jsxs)("div", {
                className: Jw()("Baf2MachineSlot", {
                  Baf2FuelFed: tC
                }),
                children: [(0, vb.jsxs)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: [tC && (0, vb.jsx)(hw.c, {
                    name: "fire"
                  }), vC("buildAFactory2Game:machineFuel")]
                }), (0, vb.jsxs)("div", {
                  className: "Baf2FuelSlot",
                  children: [(0, vb.jsx)(Kf, {
                    running: "running" === mC,
                    leftMs: LC,
                    periodMs: UC,
                    updateCount: JC.updateCount
                  }), TC]
                })]
              }), null !== hC.fuelSlot && KC && (0, vb.jsxs)("div", {
                className: "Baf2MachineSlot Baf2FuelNotNeeded",
                children: [(0, vb.jsx)("div", {
                  className: "Baf2MachineLabel SmallTextLight",
                  children: vC("buildAFactory2Game:machineFuel")
                }), (0, vb.jsx)("div", {
                  className: "Baf2FuelNotNeededBox",
                  role: "img",
                  title: vC("buildAFactory2Game:upgradeFuelNotNeeded"),
                  "aria-label": vC("buildAFactory2Game:upgradeFuelNotNeeded"),
                  children: (0, vb.jsx)(hw.c, {
                    name: "bolt"
                  })
                })]
              })]
            }), (0, vb.jsxs)("div", {
              className: "Baf2MachineMeter",
              children: [(0, vb.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vC(df(dC))
              }), (0, vb.jsx)(hf, {
                running: "running" === mC,
                opMs: dC.opMs,
                opLeftMs: EC,
                updateCount: JC.updateCount
              })]
            }), dC.outputSlots.length > 0 && (0, vb.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, vb.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: vC("buildAFactory2Game:machineOutput")
              }), (0, vb.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: dC.outputSlots.map((CC => (0, vb.jsx)("div", {
                  children: iC(CC)
                }, CC)))
              })]
            }), null !== HC && sC && (0, vb.jsx)("div", {
              className: "Baf2MachinePowerStore",
              children: (0, vb.jsx)("div", {
                style: {
                  height: 100 * HC / uC + "%"
                }
              })
            })]
          }), yC && null !== BC && (0, vb.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, vb.jsx)(hw.c, {
              name: "arrows-rotate"
            }), vC(ZZ(dC) ? "buildAFactory2Game:machineFuelKeepCut" : "buildAFactory2Game:machineFuelKeepDig", {
              amount: String(BC)
            })]
          }), (tC || jC) && (0, vb.jsxs)("div", {
            className: "Baf2FuelLine SmallTextLight",
            children: [(0, vb.jsx)(hw.c, {
              name: "fire"
            }), vC(tC ? "buildAFactory2Game:machineFuelFed" : "buildAFactory2Game:machineFuelFeeds")]
          }), hC.couplable && (0, vb.jsx)(Cf, {
            kind: AC,
            tier: rC,
            coupled: KC,
            level: YC,
            slot: aC === hC.fuelSlot ? TC : null !== aC ? iC(aC) : null
          }), null !== HC && !sC && !0 === (null === eC || void 0 === eC ? void 0 : eC.reactorPowered) && (0, vb.jsx)("div", {
            className: "Baf2PowerStrip SmallTextBold",
            children: vC("buildAFactory2Game:machineReactorPowered")
          }), null !== HC && !sC && !0 !== (null === eC || void 0 === eC ? void 0 : eC.reactorPowered) && (0, vb.jsx)(mn, {
            stored: HC,
            cap: uC,
            rates: null !== (SC = null === eC || void 0 === eC ? void 0 : eC.powerRates) && void 0 !== SC ? SC : null
          }), (null === eC || void 0 === eC ? void 0 : eC.water) && (0, vb.jsx)(Wf, {
            water: eC.water,
            at: xC,
            side: eC.cryo ? "waterIn" : null
          }), (null === eC || void 0 === eC ? void 0 : eC.cryo) && (0, vb.jsx)(Wf, {
            water: eC.cryo,
            at: xC,
            side: "cryoOut"
          }), null !== eC && void 0 !== eC && eC.inertCoupler ? (0, vb.jsx)("div", {
            className: "Baf2MachineStatus Stalled SmallTextBold",
            children: vC("buildAFactory2Game:machineStatus_couplerOff", {
              item: wb(vC, eC.inertCoupler)
            })
          }) : null !== OC && (0, vb.jsx)("div", {
            className: Jw()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== mC
            }),
            children: vC(OC, kC ? Yf(vC, kC.input, kC.short) : void 0)
          })]
        }), (0, vb.jsxs)("div", {
          className: Jw()("Baf2MachineSide", {
            Baf2SynthSide: yz(hC)
          }),
          children: [yz(hC) && (0, vb.jsx)(kn, {
            hQ: xC,
            taught: null !== (pC = null === eC || void 0 === eC ? void 0 : eC.taught) && void 0 !== pC ? pC : null
          }, xC.join(",")), sC && (0, vb.jsx)(En, {
            kind: AC,
            def: dC,
            hQ: xC,
            power: IC,
            stored: null !== HC && void 0 !== HC ? HC : 0,
            cap: uC
          }), DC(hC) && (0, vb.jsx)(Un, {
            hQ: xC,
            input: null !== (PC = null === eC || void 0 === eC ? void 0 : eC.input) && void 0 !== PC ? PC : null,
            drops: null !== (GC = null === eC || void 0 === eC ? void 0 : eC.farm) && void 0 !== GC ? GC : null,
            seconds: String(dC.opMs / 1e3)
          }), !sC && !DC(hC) && !yz(hC) && (0, vb.jsx)(Qn, {
            kind: AC,
            def: dC,
            input: null !== (RC = null === eC || void 0 === eC ? void 0 : eC.input) && void 0 !== RC ? RC : null,
            tier: null !== rC && void 0 !== rC ? rC : 1,
            noSeeds: !0 === (null === eC || void 0 === eC ? void 0 : eC.noSeeds)
          })]
        })]
      })
    }

    function Hf(CC, zC, ZC, QC) {
      var wC;
      const bC = Ez[CC],
        nC = [bC.inputSlot, bC.fuelSlot, ...null !== (wC = bC.inputSlots) && void 0 !== wC ? wC : []].filter((CC => null !== CC));
      return {
        render: wC => {
          let {
            hQ: bC,
            renderSlot: nC
          } = wC;
          return (0, vb.jsx)(tn.Provider, {
            value: QC,
            children: (0, vb.jsx)(mf, {
              kind: CC,
              hQ: bC,
              store: zC,
              power: ZC,
              renderSlot: nC
            })
          })
        },
        quickMoveRange: nC.length > 0 ? [Math.min(...nC), Math.max(...nC) + 1] : [0, 0],
        className: If(CC)
      }
    }
    const Ef = "Assembler";

    function lf(CC) {
      var zC, ZC, QC, wC, bC, nC, fC, oC, qC;
      let {
        hQ: FC,
        store: WC,
        renderSlot: NC
      } = CC;
      const {
        t: MC
      } = (0, ew.y)(), gC = vf(WC, FC), SC = null !== (zC = null === gC || void 0 === gC ? void 0 : gC.tier) && void 0 !== zC ? zC : 1, pC = null !== (ZC = null === gC || void 0 === gC ? void 0 : gC.taught) && void 0 !== ZC ? ZC : null, PC = Oz(Ef, {
        coupled: !1,
        taught: pC
      }), GC = null !== (QC = PC.bench) && void 0 !== QC ? QC : null, RC = null !== (wC = null === gC || void 0 === gC ? void 0 : gC.status) && void 0 !== wC ? wC : null, AC = null !== (bC = null === gC || void 0 === gC ? void 0 : gC.power) && void 0 !== bC ? bC : null, xC = null !== (nC = null === gC || void 0 === gC ? void 0 : gC.powerCap) && void 0 !== nC ? nC : 4e3;
      return (0, vb.jsxs)("div", {
        className: "Baf2MachinePane Baf2BenchPane",
        children: [(0, vb.jsxs)("div", {
          className: "Baf2MachineMain",
          children: [(0, vb.jsx)("div", {
            className: "InvenLeftSideHeader SmallTextBold",
            children: MC(Qb(Ef))
          }), GC && (0, vb.jsxs)("div", {
            className: "Baf2BenchMakes SmallTextBold",
            children: [MC("buildAFactory2Game:benchMakes"), (0, vb.jsx)("span", {
              className: "Baf2BenchMakesIcon",
              children: (0, vb.jsx)(Kw.e, {
                itemName: GC.output,
                amount: 0
              })
            }), (null === gC || void 0 === gC ? void 0 : gC.taughtName) && (0, vb.jsx)(Yw.e, {
              text: gC.taughtName
            }), GC.outputAmount > 1 && (0, vb.jsxs)("span", {
              children: ["\xd7", GC.outputAmount]
            })]
          }), !GC && (0, vb.jsx)("div", {
            className: "Baf2BenchMakes Untaught SmallTextBold",
            children: MC("buildAFactory2Game:benchTeachHint")
          }), (0, vb.jsxs)("div", {
            className: "Baf2MachineRow",
            children: [(0, vb.jsx)("div", {
              className: "Baf2BenchInputs",
              children: (null !== (fC = PC.inputSlots) && void 0 !== fC ? fC : []).map(((CC, zC) => {
                const ZC = null === GC || void 0 === GC ? void 0 : GC.inputs[zC];
                return (0, vb.jsxs)("div", {
                  className: Jw()("Baf2BenchInput", {
                    Spare: !ZC
                  }),
                  children: [(0, vb.jsxs)("div", {
                    className: "Baf2BenchSlot",
                    children: [NC(CC), ZC && (0, vb.jsx)("div", {
                      className: "Baf2BenchGhost",
                      children: (0, vb.jsx)(Kw.e, {
                        itemName: ZC.item,
                        amount: 0
                      })
                    })]
                  }), (0, vb.jsx)("div", {
                    className: "Baf2BenchNeed SmallTextLight",
                    children: ZC ? `\xd7${ZC.amount}` : "\xa0"
                  })]
                }, CC)
              }))
            }), (0, vb.jsx)(hf, {
              running: "running" === RC,
              opMs: PC.opMs,
              opLeftMs: null !== (oC = null === gC || void 0 === gC ? void 0 : gC.opLeftMs) && void 0 !== oC ? oC : null,
              updateCount: WC.updateCount
            }), (0, vb.jsxs)("div", {
              className: "Baf2MachineColumn",
              children: [(0, vb.jsx)("div", {
                className: "Baf2MachineLabel SmallTextLight",
                children: MC("buildAFactory2Game:machineOutput")
              }), (0, vb.jsx)("div", {
                className: "Baf2MachineOutputs",
                children: PC.outputSlots.map((CC => (0, vb.jsx)("div", {
                  children: NC(CC)
                }, CC)))
              })]
            })]
          }), null !== AC && (0, vb.jsx)(mn, {
            stored: AC,
            cap: xC,
            rates: null !== (qC = null === gC || void 0 === gC ? void 0 : gC.powerRates) && void 0 !== qC ? qC : null
          }), null !== RC && (0, vb.jsx)("div", {
            className: Jw()("Baf2MachineStatus SmallTextBold", {
              Stalled: "running" !== RC
            }),
            children: MC(Af(Ef, RC, gC, !1))
          }), GC && GC.inputs.length > 1 && (0, vb.jsx)("div", {
            className: "Baf2BenchTip SmallTextLight",
            children: MC("buildAFactory2Game:benchOneBeltEach")
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2MachineSide",
          children: [(0, vb.jsx)(bn, {
            taught: pC,
            tier: SC
          }), GC && (0, vb.jsx)("div", {
            className: "Baf2BenchTeachTip SmallTextLight",
            children: MC("buildAFactory2Game:benchTeachHint")
          })]
        })]
      })
    }

    function Xf(CC) {
      var zC;
      const ZC = null !== (zC = Ez[Ef].inputSlots) && void 0 !== zC ? zC : [];
      return {
        render: zC => {
          let {
            hQ: ZC,
            renderSlot: QC
          } = zC;
          return (0, vb.jsx)(lf, {
            hQ: ZC,
            store: CC,
            renderSlot: QC
          })
        },
        quickMoveRange: [Math.min(...ZC), Math.max(...ZC) + 1],
        className: If(Ef)
      }
    }
    var uf = ZC(77),
      rf = ZC(1076),
      sf = ZC(4179);
    const Tf = 600,
      af = .5,
      tf = 4,
      Df = 1200,
      jf = 140,
      yf = 100,
      Lf = 32,
      Uf = 16,
      Bf = 100.5,
      Of = 90,
      kf = 1.5,
      Vf = 50;

    function Co(CC) {
      switch (dZ(CC)) {
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
    const zo = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function Zo(CC) {
      const zC = Math.ceil(60 * CC / yf);
      return {
        fuel: Math.max(Lf, zC),
        waste: Math.max(Uf, zC)
      }
    }

    function Qo(CC, zC, ZC) {
      const [QC, wC, bC] = [CC - 2, zC - 2, ZC - 2];
      return 2 * (QC * wC + wC * bC + bC * QC) * jf
    }

    function wo(CC, zC, ZC) {
      return Math.max(0, CC - 2) * Math.max(0, zC - 2) * Math.max(0, ZC - 2)
    }

    function bo(CC, zC) {
      const [ZC, QC, wC] = CC, bC = ZC * QC * wC, nC = new Float32Array(bC);
      let fC = 0,
        oC = 0,
        qC = 0,
        FC = 0,
        WC = 0;
      const NC = (CC, bC, nC) => CC < 0 || CC >= ZC || bC < 0 || bC >= QC || nC < 0 || nC >= wC ? 0 : zC[(bC * wC + nC) * ZC + CC];
      for (let pC = 0; pC < QC; pC++)
        for (let CC = 0; CC < wC; CC++)
          for (let QC = 0; QC < ZC; QC++) {
            const bC = (pC * wC + CC) * ZC + QC,
              MC = zC[bC];
            if (1 === MC) {
              fC++;
              let zC = 0;
              for (const [ZC, wC, bC] of zo) {
                const nC = NC(QC + ZC, pC + wC, CC + bC);
                1 !== nC && 2 !== nC || zC++
              }
              nC[bC] = Tf * (1 + af * Math.min(zC, tf)), FC += nC[bC]
            } else if (2 === MC) oC++;
            else if (3 === MC) {
              qC++;
              zo.some((zC => {
                let [ZC, wC, bC] = zC;
                return 1 === NC(QC + ZC, pC + wC, CC + bC)
              })) && (WC += Df)
            }
          }
      const MC = Qo(ZC + 2, QC + 2, wC + 2),
        gC = Math.min(FC, WC, MC),
        SC = fC > 0 ? FC * yf / fC : 0;
      return {
        rods: fC,
        graphite: oC,
        channels: qC,
        fuelHeat: FC,
        cooling: WC,
        size: MC,
        max: gC,
        vol: bC,
        powerPerUnit: SC,
        pelletsPerMin: SC > 0 ? gC / SC * 60 : 0,
        waterPerS: gC * kC.m,
        rodHeat: nC
      }
    }
    const no = 0,
      fo = 1,
      oo = 6,
      qo = 7,
      Fo = 8;

    function Wo(CC, zC) {
      const [ZC, QC, wC] = CC, bC = new Uint8Array(ZC * QC * wC), nC = (CC, bC, nC) => CC < 0 || CC >= ZC || bC < 0 || bC >= QC || nC < 0 || nC >= wC ? 0 : zC[(bC * wC + nC) * ZC + CC];
      for (let fC = 0; fC < QC; fC++)
        for (let CC = 0; CC < wC; CC++)
          for (let QC = 0; QC < ZC; QC++) {
            const oC = (fC * wC + CC) * ZC + QC,
              qC = zC[oC];
            if (1 === qC) {
              let zC = 0;
              for (const [ZC, wC, bC] of zo) {
                const oC = nC(QC + ZC, fC + wC, CC + bC);
                zC += 1 === oC || 2 === oC ? 1 : 0
              }
              bC[oC] = fo + Math.min(zC, tf)
            } else if (3 === qC) {
              const zC = zo.some((zC => {
                let [ZC, wC, bC] = zC;
                return 1 === nC(QC + ZC, fC + wC, CC + bC)
              }));
              bC[oC] = zC ? oo : qo
            } else 2 === qC && (bC[oC] = Fo)
          }
      return bC
    }

    function No(CC) {
      return CC.fuelHeat <= CC.cooling && CC.fuelHeat <= CC.size ? "fuel" : CC.cooling <= CC.size ? "cooling" : "size"
    }
    const Mo = Of;

    function go(CC, zC, ZC) {
      return Math.round(CC * zC * ZC * 25e3 * (1 + .25 * (Math.min(CC, zC, ZC) - 2)))
    }

    function So(CC) {
      return Math.max(0, Math.min(kC.f, CC))
    }

    function po(CC, zC, ZC) {
      const QC = zC * So(ZC);
      return CC <= 0 ? 0 : QC > 0 ? Math.min(200, 100 * CC / QC) : 200
    }

    function Po(CC, zC) {
      const ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? kf : 1;
      return Math.min(CC.fuelHeat * ZC, CC.cooling * So(zC), CC.size * ZC)
    }

    function Go(CC) {
      return 2 + CC / 10
    }
    const Ro = "buildAFactory2Game:";

    function Ao(CC) {
      var zC;
      return null !== (zC = CC.baf2RxMood) && void 0 !== zC ? zC : function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "off";
        const ZC = [
          ["calm", 50],
          ["warm", Mo],
          ["hot", Bf]
        ];
        for (const [QC, wC] of ZC)
          if (CC < wC + (QC === zC ? 3 : 0)) return QC;
        return "alarm"
      }(CC.baf2RxHeat)
    }
    const xo = 120;

    function Jo(CC) {
      const zC = CC.baf2RxState;
      if ("running" === zC && CC.baf2RxHeat > Bf) return {
        label: `${Ro}rxState_tooHot`,
        tone: "bad",
        fix: `${Ro}rxFix_tooHot`
      };
      switch (zC) {
        case "running":
          return {
            label: `${Ro}rxState_running`, tone: "good", fix: null
          };
        case "idle":
          return {
            label: `${Ro}rxState_idle`, tone: "off", fix: `${Ro}rxFix_idle`
          };
        case "scram":
          return {
            label: `${Ro}rxState_scram`, tone: "off", fix: CC.baf2RxHeat < Vf ? `${Ro}rxFix_scramCool` : `${Ro}rxFix_scram`
          };
        case "paused":
        case "unformed":
          return {
            label: `${Ro}rxState_${zC}`, tone: "off", fix: `${Ro}rxFix_${zC}`
          };
        case "melted":
          return {
            label: `${Ro}rxState_melted`, tone: "bad", fix: `${Ro}rxFix_melted`
          };
        default:
          return {
            label: `${Ro}rxState_${zC}`, tone: "warn", fix: `${Ro}rxFix_${zC}`
          }
      }
    }

    function Io(CC) {
      const [zC, ZC, QC] = CC.baf2RxStats;
      return {
        fuelHeat: zC,
        cooling: ZC * (CC.baf2RxCryo ? Math.max(1, So(CC.baf2RxWater / 100)) : 1),
        size: QC
      }
    }

    function io(CC) {
      var zC;
      const ZC = "idle" === CC.baf2RxState || "running" === CC.baf2RxState && CC.baf2RxHeat <= Bf || "scram" === CC.baf2RxState && CC.baf2RxHeat < Vf;
      if (0 === (CC.baf2RxFlags & Az) || !CC.baf2RxFormed || !ZC) return null;
      const {
        fuelHeat: QC,
        cooling: wC,
        size: bC
      } = Io(CC), nC = Math.min(QC, wC, bC), fC = No({
        fuelHeat: QC,
        cooling: wC,
        size: bC
      }), oC = "cooling" === fC && !0 === CC.baf2RxCryoOpen && !CC.baf2RxCryo, qC = null !== (zC = CC.baf2RxCells) && void 0 !== zC ? zC : "", FC = ("fuel" === fC || "cooling" === fC && !0 === CC.baf2RxCryo) && qC.length > 0 && !qC.includes(String(0)), WC = oC ? "Cryo" : "scram" === CC.baf2RxState ? "Off" : "";
      return nC < 12e3 ? {
        key: `${Ro}rxGrow_${FC?"full":fC}${WC}`,
        amount: nC
      } : null
    }

    function vo(CC, zC) {
      return CC[0] === zC[0] && CC[1] === zC[1] && CC[2] === zC[2]
    }

    function eo(CC) {
      return [...CC].sort(((CC, zC) => Number(zC[2] < zC[1]) - Number(CC[2] < CC[1])))
    }

    function ho(CC, zC) {
      return zC.some((zC => {
        let [ZC, QC] = zC;
        return !(QC <= 0) && ["edge", "cap", "wall", "inside"].some((zC => ZC === bQ(CC, zC)))
      }))
    }

    function Ko(CC, zC, ZC) {
      const QC = CC.baf2RxFuel - CC.baf2RxPu > 0 ? ZC : 0;
      return {
        full: CC.baf2RxWaste > zC - 3,
        fullInS: QC > 0 ? Math.max(0, zC - CC.baf2RxWaste) / QC : null
      }
    }
    const Yo = {
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

    function mo(CC) {
      return Ho[CC]
    }
    const Ho = {
      "Reactor Frame": "frame",
      "Reactor Glass": "casing",
      "Battery Cell": "cell",
      "Fuel Rod": "rod",
      "Coolant Channel": "channel",
      "Graphite Block": "graphite"
    };

    function Eo(CC) {
      let [zC, ZC, QC] = CC;
      return Math.ceil(Qo(zC, ZC, QC) * kC.m)
    }

    function Xo(CC, zC) {
      return "battery" === CC ? zC[0] * zC[1] * zC[2] : function(CC) {
        let [zC, ZC, QC] = CC;
        return zC * ZC * QC - Math.max(0, zC - 2) * Math.max(0, ZC - 2) * Math.max(0, QC - 2)
      }(zC) - 1
    }

    function co(CC) {
      const zC = Math.max(0, CC);
      if (zC < 10) return String(Math.round(10 * zC) / 10);
      if (zC < 1e4) return Math.round(zC).toLocaleString("en-US");
      if (zC < 1e6) return `${zC<1e5?(Math.floor(zC/100)/10).toFixed(1):Math.floor(zC/1e3)}k`;
      const ZC = zC / 1e6;
      return `${ZC<10?(Math.floor(100*ZC)/100).toFixed(2):ZC<100?(Math.floor(10*ZC)/10).toFixed(1):Math.floor(ZC)}M`
    }

    function uo(CC) {
      return CC <= 0 ? "0" : CC >= 10 ? String(Math.round(CC)) : CC.toFixed(CC >= 1 ? 1 : 2)
    }

    function ro(CC) {
      const zC = kZ(CC, 0),
        ZC = kZ(CC, LZ(CC) - 1);
      return {
        lo: [Math.min(zC[0], ZC[0]), Math.min(zC[1], ZC[1]), Math.min(zC[2], ZC[2])],
        hi: [Math.max(zC[0], ZC[0]) + 1, Math.max(zC[1], ZC[1]) + 1, Math.max(zC[2], ZC[2]) + 1]
      }
    }

    function so(CC, zC, ZC) {
      const QC = [zC[0] - CC[0], zC[1] - CC[1], zC[2] - CC[2]],
        wC = [(CC[0] + zC[0]) / 2, (CC[1] + zC[1]) / 2, (CC[2] + zC[2]) / 2],
        bC = [];
      for (let nC = 0; nC < 3; nC++) {
        const fC = (nC + 1) % 3,
          oC = (nC + 2) % 3;
        for (const qC of [CC[fC], zC[fC]])
          for (const FC of [CC[oC], zC[oC]]) {
            const CC = [0, 0, 0],
              zC = [ZC, ZC, ZC];
            CC[nC] = wC[nC], zC[nC] = QC[nC] + ZC, CC[fC] = qC, CC[oC] = FC, bC.push([CC, zC])
          }
      }
      return bC
    }
    const To = "buildAFactory2Game:",
      ao = [`${To}colNorth`, `${To}colEast`, `${To}colSouth`, `${To}colWest`];

    function to(CC, zC) {
      const [ZC, QC, wC] = CC.baf2ColAt;
      return `baf2col ${ZC} ${QC} ${wC} ${zC}`
    }

    function Do(CC) {
      return function(CC) {
        if (!Number.isFinite(CC)) return "";
        const zC = Math.max(1, Math.round(CC));
        if (zC < 60) return `${zC}s`;
        const ZC = zC % 60;
        return 0 === ZC ? zC / 60 + "m" : `${Math.floor(zC/60)}m ${ZC}s`
      }(function(CC) {
        const zC = nQ.FOCUS_BY_LASERS[Math.max(0, Math.min(4, CC))];
        return zC > 0 ? nQ.NOVA_FOCUS / zC : 1 / 0
      }(CC))
    }

    function jo(CC) {
      const zC = Math.abs(Math.round(CC));
      return zC < 1e3 ? Math.round(CC).toLocaleString("en-US") : zC < 1e6 ? `${zC<1e5?(CC/1e3).toFixed(1).replace(/\.0$/,""):Math.round(CC/1e3)}k` : `${(CC/1e6).toFixed(zC<1e7?2:1).replace(/\.?0+$/,"")}M`
    }

    function yo(CC, zC, ZC) {
      if (NQ(zC) >= 0) {
        const zC = function(CC, zC) {
          return CC.find((CC => {
            let {
              focus: ZC
            } = CC;
            return ZC[0] === zC[0] && ZC[2] === zC[2] && (zC[1] === ZC[1] || zC[1] === ZC[1] - 1)
          }))
        }(CC, ZC);
        if (!zC) return null;
        const wC = function(CC) {
          let zC = 0,
            ZC = 0;
          for (let QC = 0; QC < 4; QC++) zC += CC.laser[QC] ? 1 : 0, ZC += CC.live[QC] ? 1 : 0;
          return {
            lasers: zC,
            live: ZC,
            focusPerS: nQ.FOCUS_BY_LASERS[ZC],
            drawPerS: nQ.LASER_DRAW * ZC
          }
        }({
          laser: zC.lasers,
          live: zC.live
        });
        if (0 === wC.lasers || "noLasers" === zC.state) return {
          key: `${To}lookColNoLasers`
        };
        if (0 === wC.live) return {
          key: `${To}lookColOff_blocked`
        };
        if (!(zC.on && wC.live > 0) && ("running" !== (QC = zC.state) && "slowed" !== QC)) return {
          key: `${To}lookColOff_${zC.state}`
        };
        if (wC.live < wC.lasers) return {
          key: `${To}lookColLasersSome`,
          params: {
            lasers: String(wC.lasers),
            live: String(wC.live)
          }
        };
        const bC = zC.open.filter(Boolean).length;
        return bC < 4 ? {
          key: `${To}lookColLasersSpots`,
          params: {
            live: String(wC.live),
            spots: String(bC),
            time: Do(wC.live)
          }
        } : {
          key: `${To}lookColLasers`,
          params: {
            live: String(wC.live),
            time: Do(wC.live)
          }
        }
      }
      var QC;
      if (!MQ(zC)) return null;
      const wC = function(CC, zC) {
        for (const ZC of CC) {
          const CC = PQ(ZC.focus, [zC[0], zC[1], zC[2]]);
          if (CC && CC.zW === nQ.LASER_D && ZC.lasers[CC.dir]) return {
            entry: ZC,
            dir: CC.dir
          }
        }
        return null
      }(CC, ZC);
      if (!wC) return {
        key: `${To}lookLaserNoCollider`
      };
      const {
        entry: bC,
        dir: nC
      } = wC;
      return bC.open[nC] ? bC.live[nC] ? {
        key: bC.on ? `${To}lookLaserFiring` : `${To}lookLaserReady`
      } : {
        key: `${To}lookLaserBlocked`
      } : {
        key: `${To}lookLaserClosed`
      }
    }

    function Lo(CC, zC) {
      const ZC = [];
      for (let QC = 1; QC < nQ.LASER_D; QC++) CC & 1 << zC * (nQ.LASER_D - 1) + QC - 1 && ZC.push(QC);
      return ZC
    }
    const Uo = {
      firing: `${To}colSlotFiring`,
      ready: `${To}colSlotReady`,
      blocked: `${To}colSlotBlocked`,
      empty: `${To}colSlotEmpty`,
      closed: `${To}colSlotClosed`
    };

    function Bo(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      const bC = bw(CC),
        nC = bw(zC),
        fC = bw(ZC),
        oC = fC.filter(Boolean).length,
        qC = bC.filter(Boolean).length,
        FC = [0, 1, 2, 3].map((CC => nC[CC] ? bC[CC] ? fC[CC] ? QC ? "firing" : "ready" : "blocked" : (CC => Lo(wC, CC).length > 0)(CC) ? "blocked" : "empty" : "closed")),
        WC = FC.indexOf("blocked"),
        NC = WC < 0 && qC > 0 ? FC.indexOf("empty") : -1;
      return FC.map(((CC, zC) => {
        const ZC = zC === WC ? {
          key: `${To}colSlotClear`
        } : zC === NC ? {
          key: `${To}colSlotAdd`,
          params: {
            time: Do(Math.min(4, oC + 1))
          }
        } : null;
        return {
          dir: zC,
          tone: CC,
          title: {
            key: "blocked" !== CC || bC[zC] ? Uo[CC] : `${To}colSlotGap`,
            keys: {
              dir: ao[zC]
            }
          },
          hint: ZC
        }
      }))
    }

    function Oo(CC) {
      var zC;
      return "noPower" === CC.baf2ColState && CC.baf2ColRxState ? Jo({
        baf2RxState: CC.baf2ColRxState,
        baf2RxFlags: 0,
        baf2RxHeat: null !== (zC = CC.baf2ColRxHeat) && void 0 !== zC ? zC : 0
      }) : null
    }

    function ko(CC) {
      const zC = bw(CC.baf2ColSpots).filter(Boolean).length,
        ZC = bw(CC.baf2ColLive);
      let QC = 0,
        wC = 0;
      return bw(CC.baf2ColLasers).forEach(((CC, zC) => {
        CC && (QC++, wC += ZC[zC] ? 0 : 1)
      })), wC > 0 ? {
        key: `${To}colSubSome`,
        params: {
          blocked: String(wC),
          lasers: String(QC)
        }
      } : zC < 4 ? {
        key: `${To}colSubSpots`,
        params: {
          lasers: String(QC),
          spots: String(zC)
        }
      } : {
        key: `${To}colSub`,
        params: {
          lasers: String(QC)
        }
      }
    }

    function Vo(CC) {
      const zC = Oo(CC);
      if ("idle" === CC.baf2ColRxState && zC) return {
        key: `${To}colState_noPowerIdle`
      };
      if (zC) return {
        key: `${To}colState_noPowerReactor`,
        keys: {
          state: zC.label
        }
      };
      if ("noInput" !== CC.baf2ColState) return {
        key: `${To}colState_${CC.baf2ColState}`
      };
      const ZC = String(Math.max(0, nQ.NOVA_SA - CC.baf2ColSa)),
        QC = String(Math.max(0, nQ.NOVA_GD - CC.baf2ColGd));
      return "0" !== ZC && "0" !== QC ? {
        key: `${To}colState_noInput`,
        params: {
          sa: ZC,
          gd: QC
        }
      } : "0" !== ZC ? {
        key: `${To}colState_noStarAlloy`,
        params: {
          sa: ZC
        }
      } : "0" !== QC ? {
        key: `${To}colState_noGlowDust`,
        params: {
          gd: QC
        }
      } : {
        key: `${To}colState_running`
      }
    }

    function Cq(CC) {
      return CC.baf2ColP < 0 ? `${To}colNext` : function(CC) {
        const zC = CC.baf2ColState;
        return CC.baf2ColP >= 0 && ("blocked" === zC || "noLasers" === zC || "noPower" === zC)
      }(CC) ? `${To}colStalled` : null === zq(CC) ? `${To}colMaking` : `${To}colNovaIn`
    }

    function zq(CC) {
      if (CC.baf2ColP < 0 || CC.baf2ColWant <= 0) return null;
      const zC = CC.baf2ColFocusPerS * Math.min(1, CC.baf2ColDraw / CC.baf2ColWant);
      return zC > 0 ? Math.max(0, nQ.NOVA_FOCUS - CC.baf2ColP) / zC : null
    }

    function Zq(CC, zC) {
      const ZC = [];
      for (let QC = 1; QC <= 3; QC++) {
        const wC = [CC[0], CC[1] - QC, CC[2]];
        if (!zC(wC)) return ZC;
        ZC.push(wC)
      }
      return []
    }

    function Qq(CC, zC) {
      const ZC = {
        free: [],
        blocked: [],
        gaps: [],
        supports: []
      };
      for (let QC = 0; QC < 4; QC++) {
        const wC = QC,
          bC = pQ(CC.focus, wC, nQ.LASER_D);
        if (CC.lasers[QC] || !CC.open[QC] || !zC(bC)) continue;
        const nC = [];
        for (let ZC = 1; ZC < nQ.LASER_D; ZC++) {
          const QC = pQ(CC.focus, wC, ZC);
          zC(QC) || nC.push(QC)
        }
        ZC.supports.push(...Zq(bC, zC)), 0 === nC.length ? ZC.free.push(bC) : (ZC.blocked.push(bC), ZC.gaps.push(...nC))
      }
      return ZC
    }
    const wq = nQ.LASER_D - .25,
      bq = 4,
      nq = 2,
      fq = 16;
    const oq = {
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
        blendMode: sf.d.Standard,
        soft: !0
      },
      qq = {
        green: oq,
        pink: {
          ...oq,
          colours: [
            [255, 60, 170],
            [225, 30, 120]
          ],
          alpha: .95
        }
      };

    function Fq(CC, zC) {
      const ZC = {
        ...zC.params
      };
      for (const [wC, bC] of Object.entries(null !== (QC = zC.keys) && void 0 !== QC ? QC : {})) {
        var QC;
        ZC[wC] = CC(bC)
      }
      return ZC
    }
    const Wq = "buildAFactory2Game:",
      Nq = 2 * nQ.LASER_D + 1,
      Mq = nQ.LASER_D;

    function gq(CC) {
      return CC(`${Wq}colFocusTip`, {
        need: jo(nQ.NOVA_FOCUS)
      })
    }

    function Sq(CC, zC) {
      return CC(zC.key, Fq(CC, zC))
    }

    function pq(CC) {
      const zC = CC.getStatus();
      return {
        status: zC,
        entry: zC ? CC.entryAtRoot(zC.baf2ColAt) : void 0
      }
    }

    function Pq(CC, zC) {
      return {
        left: 100 * (Mq + CC) / Nq + "%",
        top: 100 * (Mq + zC) / Nq + "%"
      }
    }

    function Gq(CC) {
      let {
        status: zC,
        entry: ZC
      } = CC;
      const QC = bw(zC.baf2ColLasers),
        wC = bw(zC.baf2ColSpots),
        bC = bw(zC.baf2ColLive),
        nC = !0 === (null === ZC || void 0 === ZC ? void 0 : ZC.on),
        fC = nQ.LASER_D,
        oC = [];
      for (let MC = 0; MC < 4; MC++) {
        const [CC, , zC] = SQ[MC];
        if (bC[MC]) {
          const ZC = 100 * (fC - 1) / Nq,
            QC = CC + zC > 0 ? 100 * (Mq + 1) / Nq : 100 * (Mq - (fC - 1)) / Nq,
            wC = 100 * (Mq + .35) / Nq,
            bC = 30 / Nq,
            qC = 0 !== CC ? {
              left: `${QC}%`,
              width: `${ZC}%`,
              top: `${wC}%`,
              height: `${bC}%`
            } : {
              top: `${QC}%`,
              height: `${ZC}%`,
              left: `${wC}%`,
              width: `${bC}%`
            };
          oC.push((0, vb.jsx)("i", {
            className: Jw()("Baf2ColDiagramBeam", {
              Off: !nC
            }),
            style: qC
          }, `beam${MC}`))
        }
        const ZC = QC[MC] ? "Baf2ColDiagramLaser" : wC[MC] ? "Baf2ColDiagramGhost" : "Baf2ColDiagramClosed";
        oC.push((0, vb.jsx)("i", {
          className: ZC,
          style: Pq(CC * fC, zC * fC)
        }, `spot${MC}`))
      }
      for (let MC = 0; MC < 4; MC++) {
        if (QC[MC] || !wC[MC]) continue;
        const [CC, , ZC] = SQ[MC];
        for (const QC of Lo(null !== (qC = zC.baf2ColGaps) && void 0 !== qC ? qC : 0, MC)) {
          var qC;
          oC.push((0, vb.jsx)("i", {
            className: "Baf2ColDiagramBlocker",
            style: Pq(CC * QC, ZC * QC)
          }, `gap${MC},${QC}`))
        }
      }
      for (const [MC, , gC] of null !== (FC = null === ZC || void 0 === ZC ? void 0 : ZC.blockers) && void 0 !== FC ? FC : []) {
        var FC, WC, NC;
        const CC = MC - (null !== (WC = null === ZC || void 0 === ZC ? void 0 : ZC.focus[0]) && void 0 !== WC ? WC : 0),
          zC = gC - (null !== (NC = null === ZC || void 0 === ZC ? void 0 : ZC.focus[2]) && void 0 !== NC ? NC : 0);
        oC.push((0, vb.jsx)("i", {
          className: "Baf2ColDiagramBlocker",
          style: Pq(CC, zC)
        }, `block${CC},${zC}`))
      }
      return (0, vb.jsxs)("div", {
        className: "Baf2ColDiagram",
        "aria-hidden": "true",
        children: [oC, (0, vb.jsx)("i", {
          className: "Baf2ColDiagramFocus"
        })]
      })
    }

    function Rq(CC) {
      let {
        status: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), QC = bw(zC.baf2ColLive).filter(Boolean).length;
      return (0, vb.jsxs)("div", {
        className: "Baf2ColLadder",
        children: [(0, vb.jsx)("span", {
          className: "Baf2ColLadderHead",
          title: gq(ZC),
          children: ZC(`${Wq}colLadder`)
        }), (0, vb.jsx)("ul", {
          children: [1, 2, 3, 4].map((CC => (0, vb.jsx)("li", {
            className: Jw()({
              On: CC === QC
            }),
            children: ZC(`${Wq}colLadderChip`, {
              lasers: String(CC),
              time: Do(CC)
            })
          }, CC)))
        })]
      })
    }

    function Aq(CC) {
      let {
        item: zC,
        vq: ZC,
        need: QC,
        cap: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)(), nC = Math.min(ZC, QC);
      return (0, vb.jsxs)("li", {
        className: Jw()("Baf2ColTile", {
          Short: ZC < QC
        }),
        children: [(0, vb.jsx)(xq, {
          item: zC
        }), (0, vb.jsx)("b", {
          className: "Baf2ColTileValue",
          children: bC(`${Wq}colOutOf`, {
            amount: String(nC),
            cap: String(QC)
          })
        }), (0, vb.jsx)("span", {
          className: "Baf2ColBar",
          children: (0, vb.jsx)("i", {
            style: {
              width: 100 * nC / QC + "%"
            }
          })
        }), ZC > QC && (0, vb.jsx)("span", {
          className: "Baf2ColTileSoft",
          children: bC(`${Wq}colIntakeHeld`, {
            amount: String(ZC),
            cap: String(wC)
          })
        })]
      })
    }

    function xq(CC) {
      let {
        item: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)();
      return (0, vb.jsxs)("span", {
        className: "Baf2ColTileHead",
        children: [(0, vb.jsx)("span", {
          className: "Baf2ColItemIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: zC,
            amount: 0
          })
        }), (0, vb.jsx)("span", {
          className: "Baf2ColTileName",
          children: wb(ZC, zC)
        })]
      })
    }

    function Jq(CC) {
      switch (CC.baf2ColState) {
        case "running":
          return "Good";
        case "hold":
          return "Off";
        default:
          return "Warn"
      }
    }

    function Iq(CC) {
      var zC, ZC, wC;
      let {
        store: bC,
        close: nC
      } = CC;
      const {
        t: fC
      } = (0, ew.y)(), oC = Dn(), {
        status: qC,
        entry: FC
      } = function(CC) {
        const [zC, ZC] = (0, QC.useState)((() => pq(CC)));
        return (0, QC.useEffect)((() => (ZC(pq(CC)), CC.subscribe((() => {
          ZC(pq(CC))
        })))), [CC]), zC
      }(bC), [WC, NC] = (0, QC.useState)(null), MC = null === qC || void 0 === qC ? void 0 : qC.baf2ColHold;
      (0, QC.useEffect)((() => {
        NC(null)
      }), [MC]);
      const gC = (0, QC.useRef)({
          p: -1,
          n: 0
        }),
        SC = null !== (zC = null === qC || void 0 === qC ? void 0 : qC.baf2ColP) && void 0 !== zC ? zC : -1;
      SC < gC.current.p && gC.current.n++, gC.current.p = SC;
      const pC = (0, QC.useRef)(null),
        [PC] = (0, QC.useState)((() => {
          return (CC = bC.heldAtOpen()) === qQ || CC === FQ ? {
            key: `${To}colBeltItIn`,
            item: CC
          } : null;
          var CC
        }));
      if (!qC) return null;
      const GC = qC.baf2ColMember,
        RC = qC.baf2ColP >= 0,
        AC = function(CC, zC) {
          if (CC.baf2ColP >= 0 && CC.baf2ColDraw > 0) {
            const zC = CC.baf2ColWant > 0 ? Math.min(1, CC.baf2ColDraw / CC.baf2ColWant) : 0;
            return {
              focus: CC.baf2ColFocusPerS * zC,
              draw: CC.baf2ColDraw,
              beamsOn: !0
            }
          }
          return "running" === CC.baf2ColState && zC && zC.draw > 0 ? {
            ...zC,
            beamsOn: !0
          } : {
            focus: 0,
            draw: 0,
            beamsOn: !1
          }
        }(qC, pC.current);
      pC.current = AC.draw > 0 ? AC : null;
      const xC = "slowed" === qC.baf2ColState || "noPower" === qC.baf2ColState,
        JC = zq(qC),
        IC = null !== WC && void 0 !== WC ? WC : qC.baf2ColHold,
        iC = function(CC) {
          var zC, ZC;
          return "idle" === CC.baf2ColRxState ? null : null !== (zC = null === (ZC = Oo(CC)) || void 0 === ZC ? void 0 : ZC.fix) && void 0 !== zC ? zC : null
        }(qC),
        vC = null === iC && null === PC ? function(CC) {
          var zC;
          const ZC = CC.baf2ColSentTo;
          if (!ZC) return null;
          const QC = null !== (zC = CC.baf2ColSentHeld) && void 0 !== zC ? zC : null;
          return {
            key: null === QC ? `${To}colNovaSentToMachine` : `${To}colNovaSentTo`,
            target: ZC,
            vq: QC
          }
        }(qC) : null,
        eC = RC ? fC(`${Wq}colFocusOf`, {
          focus: jo(qC.baf2ColP),
          need: jo(nQ.NOVA_FOCUS)
        }) : null;
      return (0, vb.jsx)(Jn.c, {
        close: nC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2ColOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2ColliderPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2ColTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              className: "Baf2ColTitle",
              children: [(0, vb.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, vb.jsx)(Kw.e, {
                  itemName: fQ,
                  amount: 0
                })
              }), (0, vb.jsxs)("div", {
                children: [(0, vb.jsx)("h2", {
                  id: "baf2ColTitle",
                  children: wb(fC, fQ)
                }), (0, vb.jsx)("p", {
                  children: Sq(fC, ko(qC))
                })]
              })]
            }), (0, vb.jsx)(In.k, {
              onClick: nC
            })]
          }), (0, vb.jsxs)("div", {
            className: "Baf2ColBody",
            children: [(0, vb.jsxs)("div", {
              className: "Baf2ColMain",
              children: [(0, vb.jsxs)("div", {
                className: "Baf2ColHero",
                children: [(0, vb.jsx)("b", {
                  className: "Baf2ColHeroLine",
                  children: fC(Cq(qC), {
                    time: null === JC ? "" : xb(fC, JC)
                  })
                }), (0, vb.jsx)("span", {
                  className: "Baf2ColBar Big",
                  children: (0, vb.jsx)("i", {
                    style: {
                      width: (RC ? 100 * qC.baf2ColP / nQ.NOVA_FOCUS : 0) + "%"
                    }
                  }, gC.current.n)
                }), (0, vb.jsxs)("div", {
                  className: "Baf2ColRate",
                  children: [(0, vb.jsxs)("span", {
                    title: gq(fC),
                    children: [(0, vb.jsx)("b", {
                      children: jo(AC.focus)
                    }), " ", fC(`${Wq}colFocusPerS`)]
                  }), (0, vb.jsxs)("span", {
                    className: Jw()("Baf2ColDraw", {
                      Short: xC
                    }),
                    children: [(0, vb.jsx)(hw.c, {
                      name: "bolt"
                    }), xC ? fC(`${Wq}colDrawOf`, {
                      draw: jo(qC.baf2ColDraw),
                      want: jo(qC.baf2ColWant)
                    }) : fC(`${Wq}colPowerPerS`, {
                      rate: jo(AC.draw)
                    })]
                  }), null !== eC && (0, vb.jsx)("span", {
                    className: "Soft",
                    children: eC
                  })]
                })]
              }), (0, vb.jsx)("p", {
                className: Jw()("Baf2ColState", Jq(qC)),
                children: Sq(fC, Vo(qC))
              }), null !== iC && (0, vb.jsx)("p", {
                className: "Baf2ColStateFix",
                children: fC(iC)
              }), null === iC && null !== PC && (0, vb.jsx)("p", {
                className: "Baf2ColStateFix",
                children: fC(PC.key, {
                  item: wb(fC, PC.item)
                })
              }), vC && (0, vb.jsx)("p", {
                className: "Baf2ColStateFix",
                children: fC(vC.key, {
                  target: wb(fC, vC.target),
                  amount: String(null !== (ZC = vC.vq) && void 0 !== ZC ? ZC : 0)
                })
              }), (0, vb.jsxs)("ul", {
                className: "Baf2ColTiles",
                children: [(0, vb.jsx)(Aq, {
                  item: qQ,
                  vq: qC.baf2ColSa,
                  need: nQ.NOVA_SA,
                  cap: nQ.SA_CAP
                }), (0, vb.jsx)(Aq, {
                  item: FQ,
                  vq: qC.baf2ColGd,
                  need: nQ.NOVA_GD,
                  cap: nQ.GD_CAP
                }), (0, vb.jsxs)("li", {
                  className: "Baf2ColTile",
                  children: [(0, vb.jsx)(xq, {
                    item: "Nova Matter"
                  }), (0, vb.jsx)("b", {
                    className: "Baf2ColTileValue",
                    children: fC(`${Wq}colNovaHeld`, {
                      amount: String(qC.baf2ColOut),
                      cap: String(nQ.OUT_CAP)
                    })
                  }), GC && (0, vb.jsx)(In.o, {
                    className: "Baf2ColTake",
                    disabled: 0 === qC.baf2ColOut,
                    onClick: () => {
                      oC.send(to(qC, "take"))
                    },
                    children: fC(`${Wq}colTake`)
                  })]
                })]
              }), GC && (0, vb.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": IC,
                className: Jw()("Baf2ColHold", {
                  On: IC
                }),
                onClick: CC => {
                  CC.detail > 0 && CC.currentTarget.blur(), NC(!IC), oC.send(to(qC, "hold " + (IC ? 0 : 1)))
                },
                children: [(0, vb.jsx)("span", {
                  className: "Baf2ColHoldKnob"
                }), (0, vb.jsxs)("span", {
                  className: "Baf2ColHoldText",
                  children: [(0, vb.jsx)("b", {
                    children: fC(`${Wq}colHold`)
                  }), (0, vb.jsx)("span", {
                    children: fC(`${Wq}colHoldNote`)
                  })]
                })]
              })]
            }), (0, vb.jsxs)("div", {
              className: "Baf2ColSide",
              children: [(0, vb.jsx)(Gq, {
                status: qC,
                entry: FC
              }), (0, vb.jsx)("ul", {
                className: "Baf2ColSlots",
                children: Bo(qC.baf2ColLasers, qC.baf2ColSpots, qC.baf2ColLive, AC.beamsOn, null !== (wC = qC.baf2ColGaps) && void 0 !== wC ? wC : 0).map((CC => (0, vb.jsxs)("li", {
                  className: CC.tone,
                  children: [(0, vb.jsx)("b", {
                    children: Sq(fC, CC.title)
                  }), null !== CC.hint && (0, vb.jsx)("span", {
                    children: Sq(fC, CC.hint)
                  })]
                }, CC.dir)))
              }), (0, vb.jsx)(Rq, {
                status: qC
              })]
            })]
          })]
        })
      })
    }
    const iq = "buildAFactory2Game:",
      vq = 36e5,
      eq = 864e5;

    function hq(CC, zC, ZC) {
      return Math.max(0, Math.ceil((CC + zC - Math.max(ZC, CC)) / 1e3))
    }

    function Kq(CC) {
      return CC.trim().replace(/\s+/g, " ").slice(0, 24).trim()
    }

    function Yq(CC) {
      return "Homestead" === CC
    }

    function dq(CC) {
      return function(CC) {
        let zC = 0;
        for (const ZC of CC) {
          const CC = /^Island ([1-9]\d{0,5})$/.exec(ZC);
          CC && (zC = Math.max(zC, Number(CC[1])))
        }
        return `Island ${zC+1}`
      }(CC.map((CC => CC.baf2IslandName)))
    }

    function mq(CC, zC) {
      return function(CC) {
        return `${iq}islandsBlocked${CC[0].toUpperCase()}${CC.slice(1)}`
      }("degraded" === CC && 0 === zC ? "stuck" : CC)
    }

    function Hq(CC) {
      return CC.filter((CC => {
        var zC;
        return !CC.baf2IslandActive && void 0 === CC.baf2IslandUnreadable && void 0 === (null === (zC = CC.baf2IslandCoop) || void 0 === zC ? void 0 : zC.baf2CoopState)
      })).length
    }

    function Eq(CC) {
      return "coopMoving" === CC || "coopUnreachable" === CC
    }

    function lq(CC, zC) {
      const ZC = zC > 0;
      return {
        change: null === CC && !ZC,
        switch: (null === CC || "degraded" === CC || Eq(CC)) && !ZC,
        rename: "loading" !== CC && "degraded" !== CC && "stuck" !== CC
      }
    }

    function Xq(CC, zC) {
      return void 0 === CC || "corrupt" === CC && zC
    }
    const cq = cn;

    function uq(CC, zC, ZC) {
      if (null !== CC && void 0 !== CC && CC.untilGone) {
        var QC;
        return !("dismiss" === CC.untilGone && void 0 === (null === (QC = zC.baf2IslandCoop) || void 0 === QC ? void 0 : QC.baf2CoopState)) && ZC - CC.atMs < 32500
      }
      return void 0 !== CC && ZC - CC.atMs < cq && zC.baf2IslandName === CC.from
    }
    const rq = cn;

    function sq(CC) {
      return "core" === (null === CC || void 0 === CC ? void 0 : CC.kind) ? CC.core : "islands" === (null === CC || void 0 === CC ? void 0 : CC.kind) ? CC.backToCore : void 0
    }

    function Tq(CC) {
      return `\0${CC}\0`
    }

    function aq(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QC = {
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      };
      for (const bC of Object.keys(ZC)) QC[bC] = Tq(bC);
      let wC = Object.keys(QC).length > 0 ? CC(zC, QC) : CC(zC);
      for (const [bC, nC] of Object.entries(ZC)) wC = wC.split(Tq(bC)).join(nC);
      return wC
    }

    function tq(CC, zC) {
      return CC ? zC ? "enabled" : "disabled" : "hidden"
    }
    const Dq = {
      removed: `${iq}islandsCoopRemoved`,
      deleted: `${iq}islandsCoopDeleted`,
      notReady: `${iq}islandsCoopNotReady`,
      gone: `${iq}islandsCoopGone`
    };

    function jq(CC) {
      var zC;
      return "member" !== (null === (zC = CC.baf2IslandCoop) || void 0 === zC ? void 0 : zC.baf2CoopRole) && "newer" !== CC.baf2IslandUnreadable
    }

    function yq(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.baf2IslandActive,
        fC = CC.baf2IslandUnreadable,
        oC = CC.baf2IslandCoop,
        qC = function(CC, zC, ZC) {
          return {
            switch: CC.switch && void 0 === zC,
            delete: CC.change && Xq(zC, ZC)
          }
        }(zC, fC, QC),
        FC = nC && void 0 !== oC && void 0 === oC.baf2CoopState && "coopUnreachable" === bC,
        WC = {
          switch: tq((!nC || FC) && void 0 === fC, FC || qC.switch),
          switchLabel: FC ? "tryAgain" : "switch",
          rename: tq(!0, zC.rename),
          delete: tq(!nC, qC.delete),
          deleteWaits: !nC && Xq(fC, QC),
          people: tq(void 0 !== CC.baf2IslandInvitable || wC && nC && void 0 === fC && void 0 === oC, !0),
          peopleLabel: "invite",
          leave: "hidden",
          dismiss: "hidden",
          unshare: "hidden",
          remove: !1,
          note: null
        },
        NC = !nC && qC.delete;
      if (void 0 === oC) return ZC ? {
        ...WC,
        delete: tq(!nC, !1),
        deleteWaits: !1,
        note: NC ? {
          key: `${iq}islandsCoopKeepOwn`
        } : null
      } : WC;
      const MC = oC.baf2CoopState,
        gC = oC.baf2CoopMembers.length > 1,
        SC = {
          ...WC,
          switch: "hidden",
          rename: "hidden",
          delete: "hidden",
          deleteWaits: !1,
          people: "hidden"
        };
      if (void 0 !== MC && "member" === oC.baf2CoopRole) return {
        ...SC,
        dismiss: tq(!0, zC.rename),
        note: {
          key: Dq[MC],
          names: {
            owner: oC.baf2CoopOwner
          }
        }
      };
      if (void 0 !== MC) {
        let CC = {
          key: `${iq}islandsCoopOwnLost`
        };
        return NC && gC ? CC = {
          key: `${iq}islandsCoopDeleteMembers`
        } : NC && ZC && (CC = {
          key: `${iq}islandsCoopKeepOwn`
        }), {
          ...SC,
          delete: tq(!nC, qC.delete && !gC && !ZC),
          deleteWaits: WC.deleteWaits && !gC && !ZC,
          note: CC
        }
      }
      if ("member" === oC.baf2CoopRole) return {
        ...WC,
        rename: "hidden",
        delete: "hidden",
        deleteWaits: !1,
        people: "hidden",
        leave: tq(!0, nC ? zC.switch : zC.rename)
      };
      const pC = oC.baf2CoopManageHere;
      let PC = null;
      var GC;
      pC || nC ? NC && gC ? PC = {
        key: `${iq}islandsCoopDeleteMembers`
      } : NC && ZC && (PC = {
        key: `${iq}islandsCoopKeepOwn`
      }) : PC = {
        key: null !== (GC = oC.baf2CoopLeft) && void 0 !== GC && GC.length ? `${iq}islandsCoopManageThereClaim` : `${iq}islandsCoopManageThere`
      };
      return {
        ...WC,
        rename: tq(!0, zC.rename && pC),
        delete: tq(!nC, qC.delete && !gC && !ZC),
        deleteWaits: WC.deleteWaits && !gC && !ZC,
        people: "enabled",
        peopleLabel: "players",
        unshare: tq(pC && nC && !gC, zC.change),
        remove: pC,
        note: PC
      }
    }

    function Lq(CC) {
      var zC;
      const ZC = CC.baf2IslandCoop;
      if ("owner" !== (null === ZC || void 0 === ZC ? void 0 : ZC.baf2CoopRole) || void 0 !== ZC.baf2CoopState || null === (zC = ZC.baf2CoopLeft) || void 0 === zC || !zC.length) return null;
      const QC = CC.baf2IslandActive && ZC.baf2CoopManageHere;
      return {
        left: ZC.baf2CoopLeft,
        claim: QC,
        goThere: !QC && ZC.baf2CoopManageHere
      }
    }

    function Uq(CC) {
      return CC.baf2CoopMembers.length >= CC.baf2CoopMax
    }

    function Bq(CC, zC, ZC) {
      return void 0 !== CC && zC < CC.answer && ZC - CC.atMs < cq
    }
    const Oq = "buildAFactory2Game:";

    function kq(CC, zC) {
      return {
        onKeyDown: ZC => {
          ZC.stopPropagation(), ZC.nativeEvent.isComposing || 229 === ZC.nativeEvent.keyCode || ("Enter" === ZC.key ? (ZC.preventDefault(), CC()) : "Escape" === ZC.key && (ZC.preventDefault(), zC()))
        }
      }
    }

    function Vq(CC) {
      return {
        onKeyDown: zC => {
          "Escape" !== zC.key || zC.nativeEvent.isComposing || (zC.preventDefault(), zC.stopPropagation(), CC())
        }
      }
    }

    function CF(CC) {
      CC.currentTarget.select()
    }

    function zF(CC, zC) {
      (0, QC.useEffect)((() => {
        var ZC;
        CC && (null === (ZC = zC.current) || void 0 === ZC || ZC.scrollIntoView({
          block: "nearest"
        }))
      }), [CC, zC])
    }

    function ZF(CC) {
      const [zC, ZC] = (0, QC.useState)(null);
      return (0, QC.useEffect)((() => {
        const zC = document.querySelector(".UiRequests"),
          QC = CC.current;
        if (!zC || !QC || "undefined" === typeof ResizeObserver) return;
        const wC = () => {
          const CC = zC.getBoundingClientRect(),
            wC = QC.getBoundingClientRect(),
            bC = QC.parentElement,
            nC = bC && parseFloat(getComputedStyle(bC).paddingTop) || 0,
            fC = function(CC, zC, ZC, QC) {
              if (!CC || CC.height <= 0 || CC.right <= zC.left || CC.left >= zC.right) return null;
              const wC = Math.max(QC, CC.bottom + 8);
              return {
                marginTop: Math.round(wC - QC),
                maxHeight: Math.max(0, Math.floor(ZC - wC - QC))
              }
            }(CC, wC, window.innerHeight, nC);
          ZC((CC => (null === CC || void 0 === CC ? void 0 : CC.marginTop) === (null === fC || void 0 === fC ? void 0 : fC.marginTop) && (null === CC || void 0 === CC ? void 0 : CC.maxHeight) === (null === fC || void 0 === fC ? void 0 : fC.maxHeight) ? CC : fC))
        };
        wC();
        const bC = new ResizeObserver(wC);
        return bC.observe(zC), window.addEventListener("resize", wC), () => {
          bC.disconnect(), window.removeEventListener("resize", wC)
        }
      }), [CC]), zC
    }

    function QF() {
      (0, QC.useLayoutEffect)((() => (document.documentElement.classList.add("Baf2IslandsOverlayShown"), () => {
        document.documentElement.classList.remove("Baf2IslandsOverlayShown")
      })), [])
    }

    function wF(CC) {
      (0, QC.useEffect)((() => {
        var zC;
        null === (zC = CC.current) || void 0 === zC || zC.focus()
      }), [CC])
    }

    function bF(CC) {
      const [zC, ZC] = (0, QC.useState)(Date.now);
      return (0, QC.useEffect)((() => {
        const zC = window.setInterval((() => {
          ZC(Date.now())
        }), CC);
        return () => {
          window.clearInterval(zC)
        }
      }), [CC]), zC
    }

    function nF(CC) {
      let {
        tier: zC,
        t: ZC
      } = CC;
      const {
        kind: QC,
        short: wC
      } = pC(zC), bC = MC(zC, gC), nC = ZC(`${Oq}${bC.key}`, {
        ...bC.params,
        name: ZC(`${Oq}${PC(zC).nameKey}`)
      });
      return (0, vb.jsxs)("span", {
        className: "Baf2IslandTier",
        children: [(0, vb.jsx)("span", {
          className: Jw()("Baf2IslandTierPip", {
            Stage: "tier" !== QC
          }),
          "aria-hidden": "true",
          children: wC
        }), nC]
      })
    }

    function fF(CC) {
      let {
        note: zC,
        className: ZC,
        t: QC
      } = CC;
      return (0, vb.jsx)("p", {
        className: Jw()("Baf2IslandNote", ZC),
        children: aq(QC, zC.key, zC.names, zC.params)
      })
    }
    const oF = "buildAFactory2Game:";

    function qF(CC) {
      let {
        message: zC,
        arrivedAtMs: ZC,
        close: wC,
        leave: bC
      } = CC;
      const nC = Dn(),
        {
          t: fC
        } = (0, ew.y)(),
        oC = bF(1e3),
        qC = (0, QC.useRef)(null);
      QF(), (0, QC.useEffect)((() => {
        var CC;
        null === (CC = qC.current) || void 0 === CC || CC.focus()
      }), []);
      const FC = hq(ZC, zC.baf2TransferInMs, oC),
        WC = ZC + zC.baf2TransferInMs - 1e3,
        [NC, MC] = (0, QC.useState)(null);
      (0, QC.useEffect)((() => {
        const CC = window.setTimeout((() => {
          MC(WC)
        }), Math.max(0, WC - Date.now()));
        return () => {
          window.clearTimeout(CC)
        }
      }), [WC]);
      const gC = NC === WC || oC >= WC,
        SC = zC.baf2TransferIsland,
        pC = zC.baf2TransferOwner;
      return (0, vb.jsx)(Jn.c, {
        close: wC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, vb.jsxs)("section", {
          ref: qC,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel Baf2TransferPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TransferTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              children: [(0, vb.jsx)("h2", {
                id: "baf2TransferTitle",
                children: void 0 === pC ? aq(fC, `${oF}islandsTransferOwn`, {
                  island: SC
                }) : aq(fC, `${oF}islandsTransfer`, {
                  island: SC,
                  owner: pC
                })
              }), (0, vb.jsx)("p", {
                children: gC ? fC(`${oF}islandsTransferNow`) : fC(`${oF}islandsTransferIn`, {
                  time: xb(fC, FC)
                })
              })]
            }), (0, vb.jsx)(In.k, {
              ariaLabel: fC(`${oF}islandsClose`),
              onClick: wC
            })]
          }), !gC && (0, vb.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [(0, vb.jsx)("p", {
              className: "Baf2TransferNote",
              children: fC(`${oF}islandsTransferNote`)
            }), (0, vb.jsx)("div", {
              className: "Baf2IslandButtons",
              children: (0, vb.jsx)(In.g, {
                onClick: () => {
                  nC.send("baf2coopstay"), bC()
                },
                children: fC(`${oF}islandsTransferStay`)
              })
            })]
          })]
        })
      })
    }
    var FF = ZC(1383),
      WF = ZC(1085),
      NF = ZC.n(WF);
    const MF = new Set(["stepItemForCore", "stepItemInCore", "stepBeltItem", "stepBeltItemCarried", "stepBeltCount", "stepBeltCountCarried", "stepHandOverItem", "stepTakeBars", "stepCharge", "stepChargePower", "stepCraftHxForCondenser", "stepCollectFromAssembler"]);
    const gF = "buildAFactory2Game:",
      SF = {
        "--baf2-quest-step-flash": "1600ms",
        "--baf2-quest-step-pop": "600ms"
      };

    function pF(CC, zC, ZC) {
      return void 0 === zC ? ZC : "string" === typeof zC ? zC : Array.isArray(zC) ? zC.map((zC => "string" === typeof zC ? zC : "translationKey" in zC ? CC(zC.translationKey) : "")).join("") : CC(zC.translationKey)
    }

    function PF(CC) {
      const zC = {};
      for (const [ZC, QC] of Object.entries(null !== CC && void 0 !== CC ? CC : {})) zC[ZC] = QC < 0 ? Ab(QC) : QC.toLocaleString("en-US");
      return zC
    }

    function GF(CC, zC) {
      const ZC = zC ? "touch" : "mouse";
      return {
        use: CC(`${gF}lookUse_${ZC}`),
        Use: CC(`${gF}lookUseStart_${ZC}`)
      }
    }
    const RF = (0, QC.memo)((function(CC) {
      let {
        item: zC
      } = CC;
      return (0, vb.jsx)("span", {
        className: "Baf2QuestStepIcon",
        "aria-hidden": "true",
        children: (0, vb.jsx)(Kw.e, {
          itemName: zC,
          amount: 0
        })
      })
    }));

    function AF(CC) {
      let {
        label: zC,
        percent: ZC,
        progress: QC
      } = CC;
      return (0, vb.jsxs)("span", {
        className: "Baf2QuestStepBar",
        children: [(0, vb.jsx)("span", {
          className: "Baf2QuestProgressBar",
          role: "progressbar",
          "aria-label": `${zC}: ${QC}`,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": ZC,
          children: (0, vb.jsx)("span", {
            className: "Baf2QuestProgressBarFill",
            style: {
              width: `${ZC}%`
            }
          })
        }), (0, vb.jsx)("span", {
          className: "Baf2QuestStepBarLabel",
          children: QC
        })]
      })
    }

    function xF(CC) {
      let {
        chips: zC
      } = CC;
      return (0, vb.jsx)("span", {
        className: "Baf2QuestChips",
        children: zC.map((CC => {
          let [zC, ZC, QC] = CC;
          const wC = ZC >= QC;
          return (0, vb.jsxs)("span", {
            className: Jw()("Baf2QuestChip", {
              Met: wC
            }),
            children: [(0, vb.jsx)(RF, {
              item: zC
            }), (0, vb.jsx)("span", {
              className: "Baf2QuestChipCount",
              children: wC ? `\u2713${QC}` : `${ZC}/${QC}`
            })]
          }, zC)
        }))
      })
    }

    function JF(CC, zC) {
      const {
        key: ZC,
        params: QC
      } = MC(zC, {
        tier: "questChapter",
        stage: "questChapterStage",
        atomic: "questChapterAtomic"
      });
      return CC(`${gF}${ZC}`, {
        ...QC,
        name: CC(`${gF}${PC(zC).nameKey}`)
      })
    }

    function IF(CC) {
      let {
        core: zC,
        t: ZC
      } = CC;
      const [QC, wC] = zC, bC = wC > 0 ? Math.floor(100 * QC / wC) : 100;
      return (0, vb.jsxs)("span", {
        className: "Baf2QuestCore",
        role: "progressbar",
        "aria-label": ZC(`${gF}questCoreLabel`, {
          have: String(QC),
          need: String(wC)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": bC,
        children: [(0, vb.jsx)("span", {
          className: "Baf2QuestCoreText",
          children: ZC(`${gF}questCore`, {
            percent: String(bC)
          })
        }), (0, vb.jsx)("span", {
          className: "Baf2QuestCoreBar",
          children: (0, vb.jsx)("span", {
            className: "Baf2QuestCoreBarFill",
            style: {
              width: `${bC}%`
            }
          })
        })]
      })
    }

    function iF(CC) {
      let {
        rows: zC,
        t: ZC
      } = CC;
      const QC = zC.filter((CC => CC.done)).length;
      return (0, vb.jsx)("span", {
        className: "Baf2QuestSegments",
        role: "progressbar",
        "aria-label": ZC(`${gF}questStepsProgress`, {
          done: String(QC),
          total: String(zC.length)
        }),
        "aria-valuemin": 0,
        "aria-valuemax": zC.length,
        "aria-valuenow": QC,
        children: zC.map((CC => (0, vb.jsx)("span", {
          className: Jw()("Baf2QuestSegment", {
            Done: CC.done,
            Current: CC.current
          })
        }, CC.id)))
      })
    }
    const vF = (0, QC.memo)(hF, eF);

    function eF(CC, zC) {
      const ZC = ZC => CC.view.itemNames[ZC] === zC.view.itemNames[ZC];
      return CC.t === zC.t && CC.extra === zC.extra && (null === CC.row.item || ZC(CC.row.item)) && CC.row.madeFor.every(ZC) && CC.row.also.every(ZC) && NF()(CC.row, zC.row)
    }

    function hF(CC) {
      let {
        row: zC,
        view: ZC,
        t: QC,
        extra: wC
      } = CC;
      const {
        isTouchScreen: bC
      } = (0, Rw.k)(["isTouchScreen"]), nC = zC.item ? function(CC, zC, ZC) {
        return 1 !== ZC && MF.has(CC) ? vw(zC) : null
      }(zC.key, zC.item, zC.total) : null, fC = nC ? QC(nC) : zC.item ? pF(QC, ZC.itemNames[zC.item], zC.item) : "", oC = zC.also.map((CC => pF(QC, ZC.itemNames[CC], CC))), qC = oC.join(", "), FC = function(CC, zC) {
        var ZC;
        return zC.length < 2 ? null !== (ZC = zC[0]) && void 0 !== ZC ? ZC : "" : CC(`${gF}listAnd`, {
          rest: zC.slice(0, -1).join(CC(`${gF}listComma`)),
          last: zC[zC.length - 1]
        })
      }(QC, [fC, ...oC]), WC = QC(`${gF}${zC.key}`, {
        ...GF(QC, bC),
        ...PF(zC.params),
        item: fC,
        also: qC,
        itemList: FC,
        total: String(zC.total)
      }), [NC, ...MC] = WC.split("\n"), gC = zC.total > 1 && !zC.done && !zC.away;
      return (0, vb.jsxs)("li", {
        className: Jw()("Baf2QuestStep", {
          Done: zC.done,
          Current: zC.current,
          JustFinished: zC.justFinished,
          Away: zC.away
        }),
        children: [!zC.done && null !== zC.item && (0, vb.jsx)(RF, {
          item: zC.item
        }), (zC.done || null === zC.item) && (0, vb.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: zC.done ? "\u2713" : "\u25cb"
        }), (0, vb.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, vb.jsx)("strong", {
            children: NC
          }), MC.length > 0 && (0, vb.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: MC.join(" ")
          }), !zC.done && zC.madeFor.length > 0 && (0, vb.jsx)("span", {
            className: "Baf2QuestStepNote",
            children: QC("buildAFactory2Game:questRowFor", {
              items: zC.madeFor.map((CC => pF(QC, ZC.itemNames[CC], CC))).join(" \u2192 ")
            })
          }), gC && (0, vb.jsx)(AF, {
            label: NC,
            percent: Math.round(100 * zC.amount / zC.total),
            progress: `${zC.amount.toLocaleString("en-US")}/${zC.total.toLocaleString("en-US")}`
          }), !zC.done && !zC.away && zC.chips && zC.chips.length > 0 && (0, vb.jsx)(xF, {
            chips: zC.chips
          }), wC]
        })]
      })
    }
    const KF = "buildAFactory2Game:",
      YF = {
        on: "lightbulb",
        hud: "list",
        off: "eye-slash"
      },
      dF = {
        on: `${KF}tutorialButtonOn`,
        hud: `${KF}tutorialButtonHud`,
        off: `${KF}tutorialButtonOff`
      },
      mF = {
        on: `${KF}tutorialPickedOn`,
        hud: `${KF}tutorialPickedHud`,
        off: `${KF}tutorialPickedOff`
      };
    class HF {
      constructor(CC, zC, ZC) {
        this.commands = CC, this.quests = zC, this.toasts = ZC
      }
      next() {
        const CC = function(CC) {
            return mC[(mC.indexOf(CC) + 1) % mC.length]
          }(this.quests.get().tutorial),
          zC = this.quests.setTutorial(CC);
        this.commands.send(`baf2tutorial ${CC} ${zC}`), this.toasts.show({
          baf2ToastText: [(0, EC.Md)({
            translationKey: mF[CC]
          }, EC.H.whiteUiText)],
          baf2ToastMs: 3e3,
          baf2ToastStyle: "baf2ToastInfo"
        })
      }
    }

    function EF(CC, zC) {
      let [ZC, QC] = zC;
      return CC(`${gF}${ZC}`, PF(QC))
    }

    function lF(CC) {
      let [zC, ZC] = CC;
      return zC + JSON.stringify(ZC)
    }

    function XF(CC) {
      let {
        goal: zC,
        t: ZC
      } = CC;
      return zC ? (0, vb.jsx)("span", {
        className: "Baf2BookGoal",
        children: ZC(`${gF}${zC}`)
      }) : null
    }

    function cF(CC) {
      let {
        view: zC,
        t: ZC
      } = CC;
      if (!zC.name) return null;
      const QC = tw(zC.rows);
      return (0, vb.jsxs)("li", {
        className: "Baf2BookQuest Current",
        children: [(0, vb.jsx)("span", {
          className: "Baf2BookEyebrow",
          children: ZC(`${gF}currentQuest`)
        }), (0, vb.jsx)("strong", {
          className: "Baf2BookTitle",
          children: EF(ZC, zC.name)
        }), (0, vb.jsx)(XF, {
          goal: zC.goal,
          t: ZC
        }), QC.length > 1 && (0, vb.jsx)(iF, {
          rows: QC,
          t: ZC
        }), (0, vb.jsx)("ul", {
          className: "Baf2QuestChecklist",
          children: zC.rows.map((CC => (0, vb.jsx)(vF, {
            row: CC,
            view: zC,
            t: ZC
          }, CC.id)))
        }), zC.reward && (0, vb.jsxs)("span", {
          className: "Baf2BookReward",
          children: [ZC(`${gF}questReward`), (0, vb.jsx)(RF, {
            item: zC.reward
          }), pF(ZC, zC.itemNames[zC.reward], zC.reward)]
        })]
      })
    }

    function uF(CC) {
      let {
        quest: zC,
        upcoming: ZC,
        t: QC
      } = CC;
      return (0, vb.jsxs)("li", {
        className: Jw()("Baf2BookQuest", {
          Done: zC[3],
          Upcoming: ZC
        }),
        children: [(0, vb.jsx)("span", {
          className: "Baf2BookMark",
          "aria-hidden": "true",
          children: zC[3] ? "\u2713" : "\u25cb"
        }), (0, vb.jsxs)("span", {
          className: "Baf2BookQuestText",
          children: [(0, vb.jsx)("strong", {
            className: "Baf2BookTitle",
            children: EF(QC, zC)
          }), (0, vb.jsx)(XF, {
            goal: zC[2],
            t: QC
          })]
        })]
      })
    }

    function rF(CC) {
      let {
        done: zC,
        total: ZC,
        t: QC
      } = CC;
      const wC = ZC > 0 ? Math.round(100 * zC / ZC) : 0,
        bC = QC(`${gF}questBookChapterProgress`, {
          done: String(zC),
          total: String(ZC)
        });
      return (0, vb.jsxs)("span", {
        className: "Baf2BookProgress",
        children: [(0, vb.jsx)("span", {
          className: "Baf2BookProgressBar",
          role: "progressbar",
          "aria-label": bC,
          "aria-valuemin": 0,
          "aria-valuemax": ZC,
          "aria-valuenow": zC,
          children: (0, vb.jsx)("span", {
            className: "Baf2BookProgressFill",
            style: {
              width: `${wC}%`
            }
          })
        }), (0, vb.jsx)("span", {
          className: "Baf2BookProgressText",
          children: bC
        })]
      })
    }

    function sF(CC) {
      let {
        view: zC,
        tier: ZC,
        quests: QC,
        t: wC
      } = CC;
      const bC = ZC === zC.tier,
        nC = (null !== QC && void 0 !== QC ? QC : []).filter((CC => !CC[4])),
        fC = (null !== QC && void 0 !== QC ? QC : []).filter((CC => CC[4])),
        oC = nC.filter((CC => CC[3])).length,
        qC = bC && zC.name ? lF(zC.name) : null,
        FC = nC.findIndex((CC => !CC[3] && lF(CC) === qC));
      return (0, vb.jsxs)("div", {
        className: "Baf2BookChapter",
        children: [(0, vb.jsxs)("div", {
          className: "Baf2BookChapterHead",
          children: [(0, vb.jsx)("h3", {
            children: JF(wC, ZC)
          }), nC.length > 0 && (0, vb.jsx)(rF, {
            done: oC,
            total: nC.length,
            t: wC
          }), bC && zC.core && (0, vb.jsx)(IF, {
            core: zC.core,
            t: wC
          })]
        }), (0, vb.jsxs)("ol", {
          className: "Baf2BookQuests",
          children: [null === QC && bC && (0, vb.jsx)(cF, {
            view: zC,
            t: wC
          }), nC.map(((CC, ZC) => ZC === FC ? (0, vb.jsx)(cF, {
            view: zC,
            t: wC
          }, lF(CC)) : (0, vb.jsx)(uF, {
            quest: CC,
            upcoming: !CC[3],
            t: wC
          }, lF(CC))))]
        }), bC && zC.side && (0, vb.jsxs)("div", {
          className: "Baf2BookSide",
          children: [(0, vb.jsx)("span", {
            className: "Baf2BookEyebrow",
            children: wC(`${gF}questSide`)
          }), (0, vb.jsx)("strong", {
            className: "Baf2BookTitle",
            children: EF(wC, zC.side.name)
          }), (0, vb.jsx)(XF, {
            goal: zC.side.goal,
            t: wC
          }), (0, vb.jsx)("ul", {
            className: "Baf2QuestChecklist",
            children: (0, vb.jsx)(vF, {
              row: zC.side.row,
              view: zC,
              t: wC
            })
          })]
        }), fC.length > 0 && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)("h4", {
            className: "Baf2BookSubhead",
            children: wC(`${gF}questBookSidesDone`)
          }), (0, vb.jsx)("ol", {
            className: "Baf2BookQuests",
            children: fC.map((CC => (0, vb.jsx)(uF, {
              quest: CC,
              upcoming: !1,
              t: wC
            }, lF(CC))))
          })]
        })]
      })
    }

    function TF(CC) {
      var zC, ZC, bC;
      let {
        store: nC,
        tutorial: fC,
        close: oC
      } = CC;
      const {
        t: qC
      } = (0, ew.y)(), WC = (0, FF.f)(lw, nC.get()), NC = null !== (zC = WC.tier) && void 0 !== zC ? zC : 1, [MC, gC] = (0, QC.useState)(null), PC = (null === MC || void 0 === MC ? void 0 : MC.at) === NC ? MC.tier : NC, GC = (0, QC.useRef)(null), RC = null !== WC.chapters;
      (0, QC.useEffect)((() => {
        var CC;
        GC.current && (GC.current.scrollTop = 0);
        const zC = null === (CC = GC.current) || void 0 === CC ? void 0 : CC.querySelector(".Baf2BookQuest.Current");
        if (GC.current && zC) {
          const CC = zC.getBoundingClientRect().bottom - GC.current.getBoundingClientRect().bottom;
          CC > 0 && (GC.current.scrollTop += Math.min(CC, zC.getBoundingClientRect().top - GC.current.getBoundingClientRect().top))
        }
      }), [PC, RC]);
      const AC = null === (ZC = WC.chapters) || void 0 === ZC ? void 0 : ZC.find((CC => {
        let [zC] = CC;
        return zC === PC
      }));
      return (0, vb.jsx)(Jn.c, {
        close: oC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2QuestBook",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2QuestBookTitle",
          style: SF,
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsx)("h2", {
              id: "baf2QuestBookTitle",
              children: qC(`${gF}questBookTitle`)
            }), (0, vb.jsx)(In.o, {
              className: "Baf2BookTutorialButton",
              disabled: !WC.tutorialKnown,
              ariaLabel: qC(dF[WC.tutorial]),
              title: qC(dF[WC.tutorial]),
              onClick: () => {
                fC.next()
              },
              children: (0, vb.jsx)(hw.c, {
                name: YF[WC.tutorial]
              })
            }), (0, vb.jsx)(In.k, {
              onClick: oC
            })]
          }), (0, vb.jsx)("ol", {
            className: "Baf2BookChapters",
            "aria-label": qC(`${gF}questBookChapters`),
            "data-pad-initial-area": !0,
            children: wC.slice(0, FC()).map(((CC, zC) => {
              const ZC = zC + 1,
                {
                  kind: QC,
                  short: wC
                } = pC(ZC),
                bC = SC(ZC, NC),
                nC = bC ? qC(`${gF}coreAtomicHidden`) : JF(qC, ZC);
              return (0, vb.jsx)("li", {
                children: (0, vb.jsx)("button", {
                  type: "button",
                  className: Jw()({
                    Stage: "tier" !== QC,
                    Atomic: "atomic" === QC,
                    Current: ZC === NC,
                    Selected: ZC === PC
                  }),
                  disabled: ZC > NC,
                  "aria-pressed": ZC === PC,
                  "aria-label": nC,
                  title: bC ? void 0 : nC,
                  onClick: () => {
                    gC({
                      tier: ZC,
                      at: NC
                    })
                  },
                  children: bC ? "?" : wC
                })
              }, CC.nameKey)
            }))
          }), (0, vb.jsxs)("div", {
            ref: GC,
            className: "Baf2BookBody",
            children: [Tw(WC) && PC === NC && (0, vb.jsx)("p", {
              className: "Baf2BookEmpty",
              children: qC(`${gF}questBookAllDone`)
            }), (0, vb.jsx)(sF, {
              view: WC,
              tier: PC,
              quests: null !== (bC = null === AC || void 0 === AC ? void 0 : AC[1]) && void 0 !== bC ? bC : null,
              t: qC
            })]
          })]
        })
      })
    }
    const aF = "buildAFactory2Game:";

    function tF(CC) {
      let {
        tiers: zC,
        from: ZC,
        tier: QC,
        shown: wC,
        CM: bC
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), fC = zC.map(((CC, zC) => {
        const fC = ZC + zC,
          {
            kind: oC,
            short: qC
          } = pC(fC),
          FC = SC(fC, QC);
        return (0, vb.jsx)("li", {
          children: (0, vb.jsx)("button", {
            type: "button",
            className: Jw()({
              Stage: "tier" !== oC,
              Silhouette: FC,
              Reached: fC <= QC,
              Current: fC === QC,
              Next: fC === QC + 1,
              Selected: fC === wC
            }),
            disabled: FC,
            "aria-pressed": fC === wC,
            "aria-label": FC ? nC(`${aF}coreAtomicHidden`) : void 0,
            title: FC ? void 0 : nC(`${aF}${CC.nameKey}`),
            onClick: () => {
              bC(fC)
            },
            children: FC ? "?" : qC
          })
        }, CC.nameKey)
      }));
      return (0, vb.jsx)(vb.Fragment, {
        children: fC
      })
    }

    function DF(CC) {
      let {
        id: zC,
        label: ZC,
        tiers: QC,
        from: wC,
        ...bC
      } = CC;
      return (0, vb.jsxs)("div", {
        className: "Baf2CoreLadderGroup",
        children: [(0, vb.jsx)("span", {
          id: zC,
          className: "Baf2CoreLadderLabel",
          children: ZC
        }), (0, vb.jsx)("ol", {
          "aria-labelledby": zC,
          children: (0, vb.jsx)(tF, {
            ...bC,
            tiers: QC,
            from: wC
          })
        })]
      })
    }

    function jF(CC) {
      const {
        t: zC
      } = (0, ew.y)(), ZC = wC.findIndex((CC => void 0 !== CC.stage)), QC = wC.findIndex((CC => void 0 !== CC.reactorTier)), bC = ZC < 0 ? wC : wC.slice(0, ZC), nC = ZC < 0 ? [] : wC.slice(ZC, QC < 0 ? void 0 : QC), oC = QC < 0 || !fC() ? [] : wC.slice(QC);
      return (0, vb.jsxs)("div", {
        className: "Baf2CoreLadder",
        children: [(0, vb.jsx)(DF, {
          ...CC,
          id: "baf2CoreTiersLabel",
          label: zC(`${aF}coreTiersLabel`),
          tiers: bC,
          from: 1
        }), nC.length > 0 && (0, vb.jsx)(DF, {
          ...CC,
          id: "baf2CoreStagesLabel",
          label: zC(`${aF}coreStagesLabel`),
          tiers: nC,
          from: ZC + 1
        }), oC.length > 0 && (0, vb.jsx)(DF, {
          ...CC,
          id: "baf2CoreAtomicLabel",
          label: zC(`${aF}coreAtomicLabel`),
          tiers: oC,
          from: QC + 1
        })]
      })
    }
    const yF = "buildAFactory2Game:";

    function LF(CC) {
      let {
        item: zC,
        itemNames: ZC,
        children: QC
      } = CC;
      return (0, vb.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, vb.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: zC,
            amount: 0
          })
        }), (0, vb.jsx)(Yw.e, {
          text: ZC[zC]
        }), QC]
      })
    }

    function UF(CC) {
      const zC = new Map;
      for (const {
          block: QC
        }
        of CC.newDeposits) {
        var ZC;
        zC.set(QC, (null !== (ZC = zC.get(QC)) && void 0 !== ZC ? ZC : 0) + 1)
      }
      return [...zC]
    }

    function BF(CC) {
      let {
        value: zC,
        label: ZC,
        more: QC
      } = CC;
      return (0, vb.jsxs)("li", {
        children: [(0, vb.jsx)("strong", {
          children: zC
        }), (0, vb.jsx)("span", {
          children: ZC
        }), QC > 0 && (0, vb.jsxs)("em", {
          children: ["+", QC]
        })]
      })
    }

    function OF(CC) {
      let {
        items: zC,
        itemNames: ZC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), [bC, nC] = (0, QC.useState)(null), fC = null !== bC && zC.includes(bC) ? bC : null;
      return (0, vb.jsxs)("div", {
        className: "Baf2CoreRecipes",
        children: [(0, vb.jsx)("div", {
          className: "Baf2CoreGainLabel",
          children: wC(`${yF}coreRewardUnlocks`)
        }), (0, vb.jsx)("ul", {
          children: zC.map((CC => (0, vb.jsx)("li", {
            children: (0, vb.jsx)("button", {
              type: "button",
              className: Jw()("Baf2PanelIcon", {
                Picked: CC === fC
              }),
              title: wb(wC, CC),
              "aria-label": wb(wC, CC),
              "aria-pressed": CC === fC,
              onClick: () => {
                nC(CC === fC ? null : CC)
              },
              children: (0, vb.jsx)(Kw.e, {
                itemName: CC,
                amount: 0
              })
            })
          }, CC)))
        }), (0, vb.jsxs)("p", {
          className: "Baf2CoreRecipeName",
          children: [null !== fC && (0, vb.jsxs)(vb.Fragment, {
            children: [(0, vb.jsx)(Yw.e, {
              text: ZC[fC]
            }), " \xb7 ", (0, vb.jsx)(Yw.e, {
              text: ZC[YC(fC)]
            })]
          }), null === fC && wC(`${yF}coreRecipeTap`)]
        })]
      })
    }

    function kF(CC) {
      var zC, ZC;
      let {
        def: QC,
        tier: wC,
        itemNames: bC
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), fC = wC > 1 ? PC(wC - 1) : void 0, oC = Math.round(2 * QC.islandRadius), qC = fC ? Math.round(2 * fC.islandRadius) : oC, FC = wC >= 3 ? xQ(wC) : null;
      return (0, vb.jsxs)("div", {
        className: "Baf2CoreGains",
        children: [(0, vb.jsxs)("ul", {
          className: Jw()("Baf2CoreStats", {
            Four: null !== FC
          }),
          children: [(0, vb.jsx)(BF, {
            value: `${oC}\xd7${oC}`,
            label: nC(`${yF}coreStatIsland`),
            more: oC - qC
          }), (0, vb.jsx)(BF, {
            value: String(QC.machineAllowance),
            label: nC(`${yF}coreStatMachines`),
            more: QC.machineAllowance - (null !== (zC = null === fC || void 0 === fC ? void 0 : fC.machineAllowance) && void 0 !== zC ? zC : QC.machineAllowance)
          }), (0, vb.jsx)(BF, {
            value: String(QC.beltAllowance),
            label: nC(`${yF}coreStatBelts`),
            more: QC.beltAllowance - (null !== (ZC = null === fC || void 0 === fC ? void 0 : fC.beltAllowance) && void 0 !== ZC ? ZC : QC.beltAllowance)
          }), null !== FC && (0, vb.jsx)(BF, {
            value: String(FC),
            label: nC(`${yF}coreStatStorage`),
            more: FC - (fC ? xQ(wC - 1) : FC)
          })]
        }), QC.reward && (0, vb.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, vb.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: nC(`${yF}coreRewardItem`)
          }), (0, vb.jsx)(LF, {
            item: QC.reward,
            itemNames: bC
          })]
        }), QC.newDeposits.length > 0 && (0, vb.jsxs)("div", {
          className: "Baf2CoreGainRow",
          children: [(0, vb.jsx)("div", {
            className: "Baf2CoreGainLabel",
            children: nC(QC.newDeposits.length > 1 ? `${yF}coreRewardDeposits` : `${yF}coreRewardDeposit`)
          }), UF(QC).map((CC => {
            let [zC, ZC] = CC;
            return (0, vb.jsx)(LF, {
              item: zC,
              itemNames: bC,
              children: ZC > 1 && ` \xd7${ZC}`
            }, zC)
          }))]
        }), QC.unlocks.length > 0 && (0, vb.jsx)(OF, {
          items: QC.unlocks,
          itemNames: bC
        }), (0, vb.jsx)(VF, {
          tier: wC
        })]
      })
    }

    function VF(CC) {
      let {
        tier: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), QC = Sw[zC];
      if (!QC) return null;
      const wC = gw(zC, 0, 0).barrierMax !== gw(zC - 1, 0, 0).barrierMax;
      return (0, vb.jsxs)("span", {
        className: "Baf2CoreRewardItem",
        children: [(0, vb.jsx)("span", {
          className: "Baf2PanelIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: wC ? ow.Chestplate : fw,
            amount: 0
          })
        }), ZC(`${yF}gearPerkLine`, {
          perk: ZC(`${yF}${QC}`)
        })]
      })
    }

    function CW(CC, zC) {
      return null === CC ? zC : CC.value
    }

    function zW(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is;
      return null === CC || ZC - CC.atMs >= QC ? null : wC(CC.value, zC) ? CC.armed ? null : CC : CC.armed ? CC : {
        ...CC,
        armed: !0
      }
    }

    function ZW(CC, zC) {
      const ZC = zC.filter((zC => {
        var ZC;
        return !1 !== (null === (ZC = CC.get(zC)) || void 0 === ZC ? void 0 : ZC.value)
      }));
      for (const [QC, wC] of CC) wC.value && !zC.includes(QC) && ZC.push(QC);
      return ZC
    }

    function QW(CC, zC, ZC, wC) {
      const [bC, nC] = (0, QC.useState)((() => new Map)), fC = () => {
        nC((zC => function(CC, zC, ZC, QC) {
          var wC;
          let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object.is,
            nC = null;
          for (const [fC, oC] of CC) {
            const wC = zW(oC, zC(fC), ZC, QC, bC);
            wC !== oC && (nC ??= new Map(CC), null === wC ? nC.delete(fC) : nC.set(fC, wC))
          }
          return null !== (wC = nC) && void 0 !== wC ? wC : CC
        }(zC, CC, Date.now(), ZC, wC)))
      };
      (0, QC.useEffect)((() => {
        fC()
      }), [zC, ZC]), (0, QC.useEffect)((() => {
        if (0 === bC.size) return;
        const CC = Math.min(...[...bC.values()].map((CC => CC.atMs))),
          zC = setTimeout(fC, Math.max(0, CC + ZC - Date.now()) + 1);
        return () => {
          clearTimeout(zC)
        }
      }), [bC, zC, ZC]);
      return [bC, (zC, ZC) => {
        nC((QC => {
          const bC = new Map(QC);
          return bC.set(zC, function(CC, zC, ZC) {
            return {
              value: CC,
              atMs: ZC,
              armed: !(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Object.is)(CC, zC)
            }
          }(ZC, CC(zC), Date.now(), wC)), bC
        }))
      }]
    }
    const wW = "buildAFactory2Game:";

    function bW(CC) {
      let {
        message: zC,
        itemNames: ZC
      } = CC;
      const wC = Dn(),
        {
          t: bC
        } = (0, ew.y)(),
        [nC, fC] = (0, QC.useState)(!1),
        [oC, qC] = function(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cn;
          const [ZC, QC] = QW((zC => CC.includes(zC)), CC, zC, Object.is);
          return [ZW(ZC, CC), QC]
        }(zC.baf2CoreBankPaused),
        FC = new Set(oC),
        WC = [...zC.baf2CoreBanked];
      for (const QC of FC) WC.some((CC => {
        let [zC] = CC;
        return zC === QC
      })) || WC.push([QC, 0]);
      return 0 === WC.length ? null : (0, vb.jsxs)("div", {
        className: "Baf2CoreBank",
        children: [(0, vb.jsxs)("button", {
          type: "button",
          className: "Baf2CoreBankSummary",
          "aria-expanded": nC,
          onClick: () => {
            fC(!nC)
          },
          children: [(0, vb.jsx)("span", {
            className: "Baf2CoreBankTitle",
            children: bC(`${wW}coreBankedLater`)
          }), (0, vb.jsx)("span", {
            className: "Baf2CoreBankIcons",
            children: WC.map((CC => {
              let [zC, ZC] = CC;
              const QC = FC.has(zC);
              return (0, vb.jsxs)("span", {
                className: Jw()({
                  Paused: QC
                }),
                title: QC ? bC(`${wW}coreBankPausedTag`) : void 0,
                children: [(0, vb.jsx)("span", {
                  className: "Baf2PanelIcon",
                  children: (0, vb.jsx)(Kw.e, {
                    itemName: zC,
                    amount: 0
                  })
                }), ZC, QC && (0, vb.jsx)(hw.c, {
                  name: "pause"
                })]
              }, zC)
            }))
          }), (0, vb.jsx)(hw.c, {
            name: nC ? "angle-up" : "angle-down"
          })]
        }), nC && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)("ul", {
            children: WC.map((CC => {
              let [zC, QC] = CC;
              const nC = FC.has(zC);
              return (0, vb.jsxs)("li", {
                children: [(0, vb.jsxs)(LF, {
                  item: zC,
                  itemNames: ZC,
                  children: [(0, vb.jsx)("span", {
                    className: "Baf2CoreBankAmount",
                    children: QC
                  }), nC && (0, vb.jsx)("em", {
                    className: "Baf2CoreBankPausedTag",
                    children: bC(`${wW}coreBankPausedTag`)
                  })]
                }), (0, vb.jsxs)("span", {
                  className: "Baf2CoreBankActions",
                  children: [(0, vb.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton",
                    disabled: 0 === QC,
                    onClick: () => {
                      wC.send(`baf2corewithdraw ${QC} ${zC}`)
                    },
                    children: bC(`${wW}coreTake`)
                  }), (0, vb.jsx)("button", {
                    type: "button",
                    className: "Baf2CoreBankButton Secondary",
                    onClick: () => {
                      wC.send(`${AC} ${zC}`), qC(zC, !nC)
                    },
                    children: bC(nC ? `${wW}coreBankResume` : `${wW}coreBankStop`)
                  })]
                })]
              }, zC)
            }))
          }), (0, vb.jsx)("p", {
            className: "Baf2CoreHint",
            children: bC(`${wW}coreBankNote`)
          })]
        })]
      })
    }
    const nW = "buildAFactory2Game:";

    function fW(CC) {
      const zC = Math.max(0, Math.floor(CC));
      return `${Math.floor(zC/60)}:${String(zC%60).padStart(2,"0")}`
    }

    function oW(CC) {
      let {
        item: zC
      } = CC;
      return (0, vb.jsx)("div", {
        className: "Baf2PanelIcon",
        children: (0, vb.jsx)(Kw.e, {
          itemName: zC,
          amount: 0
        })
      })
    }

    function qW() {
      return (0, vb.jsx)("div", {
        className: "Baf2PanelIcon Baf2CoreChargeBolt",
        children: (0, vb.jsx)(hw.c, {
          name: "bolt"
        })
      })
    }

    function FW(CC) {
      let {
        charge: zC,
        hint: ZC,
        itemNames: QC
      } = CC;
      const wC = Dn(),
        {
          t: bC
        } = (0, ew.y)(),
        [nC, fC, oC, qC, FC, WC, NC] = zC,
        [MC, gC] = function(CC) {
          var zC;
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cn,
            QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
          const [wC, bC] = QW((() => CC), CC, ZC, QC);
          return [CW(null !== (zC = wC.get("")) && void 0 !== zC ? zC : null, CC), CC => {
            bC("", CC)
          }]
        }(NC),
        SC = MC === NC ? WC : !MC,
        pC = qC >= FC,
        PC = nC.find((CC => {
          let [, zC, ZC] = CC;
          return ZC < .9 * zC
        }));
      let GC = `${nW}coreChargeWaiting`,
        RC = {};
      return pC ? GC = `${nW}coreChargeDone` : MC ? GC = `${nW}coreChargeStopped` : SC && ZC ? (GC = `${nW}${ZC[0]}`, RC = {
        item: wb(bC, ZC[1])
      }) : SC && PC ? (GC = `${nW}coreChargeShort`, RC = {
        item: wb(bC, PC[0])
      }) : SC && fC > 0 && !oC ? GC = `${nW}coreChargePower` : SC && (GC = `${nW}coreChargeRunning`), (0, vb.jsxs)("div", {
        className: Jw()("Baf2CoreCharge", {
          Waiting: !SC && !pC,
          Done: pC
        }),
        children: [(0, vb.jsxs)("h4", {
          children: [bC(`${nW}coreChargeTitle`), (0, vb.jsx)("span", {
            children: bC(`${nW}coreChargeProgress`, {
              done: fW(qC),
              need: fW(FC)
            })
          })]
        }), (0, vb.jsx)("div", {
          className: "Baf2CoreChargeProgress",
          children: (0, vb.jsx)("div", {
            style: {
              width: 100 * Math.min(qC, FC) / FC + "%"
            }
          })
        }), (0, vb.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [nC.map((CC => {
            var zC;
            let [ZC, wC, nC] = CC;
            const fC = nC >= .9 * wC;
            return (0, vb.jsxs)("li", {
              className: Jw()({
                Done: fC,
                Short: SC && !fC
              }),
              children: [(0, vb.jsx)(oW, {
                item: ZC
              }), (0, vb.jsxs)("div", {
                className: "Baf2CoreNeedText",
                children: [(0, vb.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, vb.jsx)(Yw.e, {
                    text: null !== (zC = QC[ZC]) && void 0 !== zC ? zC : ZC
                  }), (0, vb.jsx)("span", {
                    children: bC(`${nW}coreChargeItem`, {
                      now: String(nC),
                      need: String(wC)
                    })
                  })]
                }), (0, vb.jsx)("div", {
                  className: "Baf2CoreBar",
                  children: (0, vb.jsx)("div", {
                    style: {
                      width: `${Math.min(100,100*nC/wC)}%`
                    }
                  })
                })]
              })]
            }, ZC)
          })), fC > 0 && (0, vb.jsxs)("li", {
            className: Jw()("Baf2CoreChargePower", {
              Short: SC && !oC
            }),
            children: [(0, vb.jsx)(qW, {}), (0, vb.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, vb.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, vb.jsx)("span", {
                  children: bC(`${nW}coreChargePowerRow`, {
                    power: OC(fC)
                  })
                })
              })
            })]
          })]
        }), (0, vb.jsx)("p", {
          className: "Baf2CoreHint",
          children: bC(GC, RC)
        }), !pC && (SC || MC) && (0, vb.jsx)("button", {
          type: "button",
          className: Jw()("Baf2CoreChargeToggle", {
            Stopped: MC
          }),
          onClick: () => {
            wC.send(JC), gC(!MC)
          },
          children: bC(MC ? `${nW}coreChargeRestart` : `${nW}coreChargeStop`)
        })]
      })
    }

    function WW(CC) {
      let {
        charge: zC,
        reached: ZC,
        itemNames: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)();
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2CoreCharge", {
          Done: ZC
        }),
        children: [(0, vb.jsxs)("h4", {
          children: [wC(`${nW}coreChargeTitle`), (0, vb.jsx)("span", {
            children: wC(`${nW}coreChargeSpecTime`, {
              time: fW(zC.seconds)
            })
          })]
        }), (0, vb.jsxs)("ul", {
          className: "Baf2CoreNeeds",
          children: [zC.items.map((CC => {
            var zC;
            let {
              item: bC,
              amount: nC
            } = CC;
            return (0, vb.jsxs)("li", {
              className: Jw()({
                Done: ZC
              }),
              children: [(0, vb.jsx)(oW, {
                item: bC
              }), (0, vb.jsx)("div", {
                className: "Baf2CoreNeedText",
                children: (0, vb.jsxs)("div", {
                  className: "Baf2CoreNeedName",
                  children: [(0, vb.jsx)(Yw.e, {
                    text: null !== (zC = QC[bC]) && void 0 !== zC ? zC : bC
                  }), (0, vb.jsx)("span", {
                    children: wC(`${nW}coreChargeSpecItem`, {
                      need: String(nC)
                    })
                  })]
                })
              })]
            }, bC)
          })), zC.powerPerS > 0 && (0, vb.jsxs)("li", {
            className: "Baf2CoreChargePower",
            children: [(0, vb.jsx)(qW, {}), (0, vb.jsx)("div", {
              className: "Baf2CoreNeedText",
              children: (0, vb.jsx)("div", {
                className: "Baf2CoreNeedName",
                children: (0, vb.jsx)("span", {
                  children: wC(`${nW}coreChargePowerRow`, {
                    power: OC(zC.powerPerS)
                  })
                })
              })
            })]
          })]
        })]
      })
    }
    const NW = "buildAFactory2Game:";

    function MW(CC) {
      let {
        def: zC,
        reached: ZC,
        banked: QC,
        itemNames: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)();
      return (0, vb.jsx)("ul", {
        className: "Baf2CoreCost",
        children: zC.cost.map((CC => {
          let {
            item: zC,
            amount: nC
          } = CC;
          const fC = ZC ? 0 : QC(zC);
          return (0, vb.jsx)("li", {
            children: (0, vb.jsx)(LF, {
              item: zC,
              itemNames: wC,
              children: (0, vb.jsx)("span", {
                className: "Baf2CoreCostAmount",
                children: fC > 0 ? bC(`${NW}coreBankedFor`, {
                  amount: String(fC),
                  total: String(nC)
                }) : `\xd7${nC}`
              })
            })
          }, zC)
        }))
      })
    }

    function gW(CC, zC) {
      if (zC >= FC()) return CC(`${NW}coreMaxTier`);
      const ZC = qC[zC + 1];
      return ZC && !ZC.startsWith("upgradeCore") ? CC(`${NW}coreGateQuest`, {
        quest: CC(`${NW}quest_${ZC}`)
      }) : CC(`${NW}coreGateClosed`)
    }

    function SW() {
      const {
        t: CC
      } = (0, ew.y)(), zC = Dn(), ZC = (0, QC.useRef)(null), wC = (0, QC.useRef)(Date.now());
      return zF(!0, ZC), (0, vb.jsx)("div", {
        ref: ZC,
        className: "Baf2CoreGrow",
        children: (0, vb.jsx)(In.o, {
          className: "Baf2CoreGrowButton",
          onClick: () => {
            Date.now() - wC.current >= 600 && zC.send(RC)
          },
          children: CC(`${NW}coreGrow`)
        })
      })
    }

    function pW(CC) {
      let {
        message: zC,
        itemNames: ZC,
        next: QC
      } = CC;
      const wC = Dn(),
        {
          t: bC
        } = (0, ew.y)(),
        nC = zC.baf2CoreTier,
        fC = zC.baf2CoreReady,
        oC = zC.baf2CoreNeeds.filter((CC => {
          let [, zC, ZC, QC] = CC;
          return QC > 0 && zC < ZC
        })),
        qC = zC.baf2CoreNeeds.every((CC => {
          let [, zC, ZC] = CC;
          return zC >= ZC
        })),
        FC = zC.baf2CoreKeep;
      return (0, vb.jsxs)("div", {
        className: "Baf2CoreBody",
        children: [(0, vb.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [fC && (0, vb.jsx)(SW, {}), (0, vb.jsx)("h3", {
            children: bC(`${NW}coreBring`)
          }), (0, vb.jsx)("ul", {
            className: "Baf2CoreNeeds",
            children: zC.baf2CoreNeeds.map((CC => {
              let [zC, QC, nC, fC] = CC;
              return (0, vb.jsxs)("li", {
                className: Jw()({
                  Done: QC >= nC
                }),
                children: [(0, vb.jsx)("div", {
                  className: "Baf2PanelIcon",
                  children: (0, vb.jsx)(Kw.e, {
                    itemName: zC,
                    amount: 0
                  })
                }), (0, vb.jsxs)("div", {
                  className: "Baf2CoreNeedText",
                  children: [(0, vb.jsxs)("div", {
                    className: "Baf2CoreNeedName",
                    children: [(0, vb.jsx)(Yw.e, {
                      text: ZC[zC]
                    }), (0, vb.jsxs)("span", {
                      children: [QC, "/", nC]
                    })]
                  }), (0, vb.jsxs)("div", {
                    className: "Baf2CoreBar",
                    children: [(0, vb.jsx)("div", {
                      style: {
                        width: 100 * QC / nC + "%"
                      }
                    }), fC > 0 && (0, vb.jsx)("div", {
                      className: "Baf2CoreBarHeld",
                      style: {
                        width: 100 * fC / nC + "%"
                      }
                    })]
                  })]
                }), fC > 0 && QC < nC && (0, vb.jsx)("button", {
                  type: "button",
                  className: "Baf2CoreDepositButton",
                  onClick: () => {
                    wC.send(`${xC} ${zC}`)
                  },
                  children: bC(`${NW}coreDeposit`, {
                    amount: String(fC)
                  })
                })]
              }, zC)
            }))
          }), zC.baf2CoreCharge && (0, vb.jsx)(FW, {
            charge: zC.baf2CoreCharge,
            hint: zC.baf2CoreChargeHint,
            itemNames: ZC
          }), !fC && oC.length > 1 && (0, vb.jsx)(In.o, {
            className: "Baf2CoreHandOver",
            onClick: () => {
              wC.send(RC)
            },
            children: bC(`${NW}coreHandOver`)
          }), !fC && void 0 !== FC && (0, vb.jsx)("p", {
            className: "Baf2CoreHint",
            children: bC(`${NW}coreKeepRest`, {
              item: wb(bC, FC)
            })
          }), !fC && !qC && 0 === oC.length && void 0 === FC && (0, vb.jsx)("p", {
            className: "Baf2CoreHint",
            children: bC(`${NW}coreNothingHeld`)
          }), (0, vb.jsx)(bW, {
            message: zC,
            itemNames: ZC
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, vb.jsx)("h3", {
            children: bC(`${NW}coreRewards`)
          }), (0, vb.jsx)(kF, {
            def: QC,
            tier: nC + 1,
            itemNames: ZC
          })]
        })]
      })
    }

    function PW(CC) {
      let {
        message: zC,
        itemNames: ZC,
        shown: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), bC = zC.baf2CoreTier, nC = PC(QC), fC = QC <= bC, oC = new Map(zC.baf2CoreBanked), qC = !GC(bC, IC(zC)) && QC === bC;
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2CoreBody", {
          Locked: !fC
        }),
        children: [(0, vb.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, vb.jsx)("h3", {
            children: wC(fC ? `${NW}coreItTook` : `${NW}coreItNeeds`)
          }), 0 === nC.cost.length && (0, vb.jsx)("p", {
            className: "Baf2CoreHint",
            children: wC(`${NW}coreTierStart`)
          }), nC.cost.length > 0 && (0, vb.jsx)(MW, {
            def: nC,
            reached: fC,
            banked: CC => {
              var zC;
              return function(CC, zC, ZC, QC) {
                let wC = CC;
                for (let nC = zC + 2; nC <= ZC; nC++) {
                  var bC;
                  const CC = PC(nC).cost.find((CC => CC.item === QC)),
                    zC = Math.min(wC, null !== (bC = null === CC || void 0 === CC ? void 0 : CC.amount) && void 0 !== bC ? bC : 0);
                  if (nC === ZC) return zC;
                  wC -= zC
                }
                return 0
              }(null !== (zC = oC.get(CC)) && void 0 !== zC ? zC : 0, bC, QC, CC)
            },
            itemNames: ZC
          }), nC.charge && (0, vb.jsx)(WW, {
            charge: nC.charge,
            reached: fC,
            itemNames: ZC
          }), qC && (0, vb.jsxs)(vb.Fragment, {
            children: [(0, vb.jsx)("p", {
              className: "Baf2CoreHint",
              children: gW(wC, bC)
            }), (0, vb.jsx)(bW, {
              message: zC,
              itemNames: ZC
            })]
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2CoreColumn",
          children: [(0, vb.jsx)("h3", {
            children: wC(fC ? `${NW}coreGave` : `${NW}coreLockedRewards`)
          }), (0, vb.jsx)(kF, {
            def: nC,
            tier: QC,
            itemNames: ZC
          })]
        })]
      })
    }

    function GW(CC, zC) {
      const {
        key: ZC,
        params: QC
      } = MC(zC - 1, {
        tier: "coreLockedHint",
        stage: "coreLockedStageHint",
        atomic: "coreLockedAtomicHint"
      });
      return CC(`${NW}${ZC}`, QC)
    }
    const RW = "buildAFactory2Game:",
      AW = {
        coreTierReached: "coreStageReached",
        coreTierNext: "coreStageNext",
        coreTierLocked: "coreStageLocked"
      },
      xW = {
        coreTierReached: "coreAtomicReached",
        coreTierNext: "coreAtomicNext",
        coreTierLocked: "coreAtomicLocked"
      };

    function JW(CC) {
      let {
        view: zC,
        close: ZC,
        askIslands: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)(), [nC, fC] = (0, QC.useState)(!1);
      (0, QC.useEffect)((() => {
        if (!nC) return;
        const CC = window.setTimeout((() => {
          fC(!1)
        }), 5e3);
        return () => {
          window.clearTimeout(CC)
        }
      }), [nC]);
      const {
        message: oC,
        itemNames: qC
      } = zC, FC = oC.baf2CoreTier, WC = PC(FC), NC = GC(FC, IC(oC)), [SC, pC] = oC.baf2CoreMachines, [RC, AC] = oC.baf2CoreBelts, xC = oC.baf2CoreStorage, JC = oC.baf2CoreReady, [iC, vC] = (0, QC.useState)(null), eC = (null === iC || void 0 === iC ? void 0 : iC.at) === FC && iC.ready === JC ? iC.tier : NC ? FC + 1 : FC;
      let hC = "coreTierLocked";
      eC <= FC ? hC = "coreTierReached" : eC === FC + 1 && (hC = "coreTierNext");
      const KC = bC(`${RW}${PC(eC).nameKey}`),
        YC = eC === FC + 1 ? NC : null,
        dC = MC(eC, {
          tier: hC,
          stage: AW[hC],
          atomic: xW[hC]
        }),
        mC = bC(`${RW}${dC.key}`, {
          ...dC.params,
          name: KC
        }),
        HC = MC(FC, gC),
        EC = bC(`${RW}${HC.key}`, {
          ...HC.params,
          name: bC(`${RW}${WC.nameKey}`)
        });
      return (0, vb.jsx)(Jn.c, {
        close: ZC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2CoreOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2CorePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2CoreTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              children: [(0, vb.jsx)("h2", {
                id: "baf2CoreTitle",
                children: bC(`${RW}coreTitle`)
              }), void 0 !== oC.baf2CoreIslandName && (0, vb.jsx)("p", {
                className: "Baf2CoreIsland",
                children: oC.baf2CoreIslandName
              }), (0, vb.jsxs)("p", {
                className: "Baf2CoreStatus",
                children: [(0, vb.jsx)("span", {
                  children: EC
                }), (0, vb.jsx)("span", {
                  className: Jw()({
                    Full: SC >= pC
                  }),
                  children: bC(`${RW}coreMachineCount`, {
                    amount: String(SC),
                    total: String(pC)
                  })
                }), (0, vb.jsx)("span", {
                  className: Jw()({
                    Full: RC >= AC
                  }),
                  children: bC(`${RW}coreBeltCount`, {
                    amount: String(RC),
                    total: String(AC)
                  })
                }), void 0 !== xC && (0, vb.jsx)("span", {
                  className: Jw()({
                    Full: xC[0] >= xC[1]
                  }),
                  children: bC(`${RW}coreStorageCount`, {
                    amount: String(xC[0]),
                    total: String(xC[1])
                  })
                })]
              })]
            }), (0, vb.jsxs)("div", {
              className: "Baf2CoreHeaderActions",
              children: [oC.baf2CoreIslands && (0, vb.jsx)(In.g, {
                className: "Baf2CoreIslandsButton",
                disabled: nC,
                onClick: () => {
                  fC(!0), wC()
                },
                children: bC(`${RW}islandsOpenButton`)
              }), (0, vb.jsx)(In.k, {
                onClick: ZC
              })]
            })]
          }), (0, vb.jsx)(jF, {
            tier: FC,
            shown: eC,
            CM: CC => {
              vC({
                tier: CC,
                at: FC,
                ready: JC
              })
            }
          }), (0, vb.jsxs)("p", {
            className: "Baf2CoreLadderCaption",
            children: [mC, eC > FC + 1 && (0, vb.jsx)("span", {
              className: "Baf2CoreLockedHint",
              children: GW(bC, eC)
            })]
          }), 6 === eC && eC > FC && (0, vb.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: bC(`${RW}coreStagesNote`)
          }), 11 === eC && eC > FC && (0, vb.jsx)("p", {
            className: "Baf2CoreLadderCaption Baf2CoreStagesNote",
            children: bC(`${RW}coreAtomicNote`)
          }), YC && (0, vb.jsx)(pW, {
            message: oC,
            itemNames: qC,
            next: YC
          }), !YC && (0, vb.jsx)(PW, {
            message: oC,
            itemNames: qC,
            shown: eC
          })]
        })
      })
    }
    const IW = {
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
    const iW = [{
      item: "Machine Parts",
      nameKey: "item:machineParts",
      useKey: "buildAFactory2Game:dropSalvageParts"
    }, {
      item: ob,
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

    function vW(CC) {
      return CC.baf2DropCometOreOnly ? "dropCometOre" : CC.baf2DropCometIsotope ? "seed" === CC.baf2DropCometIsotope ? "dropCometIsotopeSeed" : "dropCometIsotope" : "dropCometDistance"
    }

    function eW(CC) {
      let {
        message: zC,
        quests: ZC,
        close: wC,
        leave: bC
      } = CC;
      const nC = Dn(),
        {
          t: fC
        } = (0, ew.y)(),
        oC = (0, FF.f)(lw, ZC.get()),
        qC = function(CC) {
          var zC;
          if (!HC(CC.tutorial)) return null;
          const ZC = CC.rows.find((CC => CC.current)),
            QC = ZC ? IW[ZC.key] : void 0;
          return null !== (zC = null !== QC && void 0 !== QC ? QC : CC.side ? IW[CC.side.row.key] : void 0) && void 0 !== zC ? zC : null
        }(oC),
        FC = null === oC.tier || Wb(oC.tier),
        WC = FC ? iW : iW.filter((CC => {
          let {
            item: zC
          } = CC;
          return zC !== ob
        })),
        [NC, MC] = (0, QC.useState)(null),
        gC = null !== NC && void 0 !== NC ? NC : !zC.baf2DropFoundSalvage && FC,
        SC = zC.baf2DropRuinDistance,
        pC = zC.baf2DropComet,
        PC = zC.baf2DropOldWorks,
        GC = zC.baf2DropGrove,
        RC = function(CC) {
          return 2 + Number(void 0 !== CC.baf2DropComet) + Number(!!CC.baf2DropOwedComet || void 0 !== CC.baf2DropOwedWaitMinutes) + Number(void 0 !== CC.baf2DropDigDistance) + Number(void 0 !== CC.baf2DropOldWorks) + Number(void 0 !== CC.baf2DropGrove)
        }(zC),
        AC = CC => {
          nC.send(function(CC) {
            return `baf2drop ${CC}`
          }(CC)), bC()
        };
      let xC = fC("buildAFactory2Game:dropRuinNone");
      if (null !== SC) {
        let CC = zC.baf2DropRuinUnderground ? "dropRuinUnderground" : "dropRuinSurface";
        zC.baf2DropRuinOldWorks && (CC = "dropRuinOldWorks");
        const ZC = void 0 === zC.baf2DropRuinCluster ? fC("buildAFactory2Game:dropRuinOpen") : fC("buildAFactory2Game:dropRuinCluster", {
          count: String(zC.baf2DropRuinCluster)
        });
        xC = `${fC(`buildAFactory2Game:${CC}`,{distance:String(SC)})} ${ZC}`
      }
      let JC = fC("buildAFactory2Game:dropBelowDescription");
      void 0 !== zC.baf2DropBelowLook && (JC = fC("buildAFactory2Game:dropBelowLook", {
        look: fC(zC.baf2DropBelowLook)
      }));
      const IC = "buildAFactory2Game:wildsRegion_survivorGrove" === zC.baf2DropBelowLook ? "dropGroveMiddle" : "dropGroveDescription",
        iC = xb(fC, 60 * function(CC) {
          const [zC, ZC] = (0, QC.useState)((() => Date.now())), [wC, bC] = (0, QC.useState)(zC);
          return (0, QC.useEffect)((() => {
            const CC = Date.now();
            ZC(CC), bC(CC)
          }), [CC]), (0, QC.useEffect)((() => {
            const CC = window.setInterval((() => {
              bC(Date.now())
            }), 1e4);
            return () => {
              window.clearInterval(CC)
            }
          }), []), Math.max(1, CC.baf2DropRenewMinutes - Math.floor((wC - zC) / 6e4))
        }(zC)),
        vC = function(CC, zC, ZC) {
          return "ruin" === CC && !ZC || "owed" === CC && !zC.baf2DropOwedComet ? null : CC
        }(qC, zC, null !== SC),
        eC = function(CC) {
          for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
          return Jw()("Baf2DropTile", ...ZC, {
            Wanted: vC === CC
          })
        };
      return (0, vb.jsx)(Jn.c, {
        close: wC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay",
        children: (0, vb.jsxs)("section", {
          className: Jw()("Baf2Panel Baf2DropMap", {
            Many: RC >= 5
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2DropMapTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              children: [(0, vb.jsx)("h2", {
                id: "baf2DropMapTitle",
                children: fC("buildAFactory2Game:dropMapTitle")
              }), (0, vb.jsx)("p", {
                children: fC("buildAFactory2Game:dropMapSubtitle")
              })]
            }), (0, vb.jsx)(In.k, {
              onClick: wC
            })]
          }), (0, vb.jsxs)("div", {
            className: "Baf2DropTiles",
            children: [void 0 !== pC && (0, vb.jsxs)(In.y, {
              className: eC("comet", "Baf2DropComet"),
              onClick: () => {
                AC("comet")
              },
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropComet")
              }), (0, vb.jsx)("span", {
                children: fC(`buildAFactory2Game:${vW(zC)}`, {
                  distance: String(pC)
                })
              })]
            }), zC.baf2DropOwedComet && (0, vb.jsxs)(In.y, {
              className: eC("owed", "Baf2DropComet"),
              onClick: () => {
                AC("owed")
              },
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropOwedComet")
              }), (0, vb.jsx)("span", {
                children: zC.baf2DropOwedIsotope ? fC("buildAFactory2Game:dropOwedIsotopeDescription") : fC("buildAFactory2Game:dropOwedCometDescription")
              })]
            }), void 0 !== zC.baf2DropOwedWaitMinutes && (0, vb.jsxs)(In.y, {
              className: eC("owed", "Baf2DropComet"),
              disabled: !0,
              onClick: () => {},
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropOwedComet")
              }), (0, vb.jsx)("span", {
                children: fC("buildAFactory2Game:dropOwedCometWait", {
                  minutes: String(zC.baf2DropOwedWaitMinutes)
                })
              })]
            }), (0, vb.jsxs)(In.g, {
              className: eC("below"),
              onClick: () => {
                AC("below")
              },
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropBelow")
              }), (0, vb.jsx)("span", {
                children: JC
              })]
            }), void 0 !== zC.baf2DropDigDistance && (0, vb.jsxs)(In.t, {
              className: eC("dig"),
              onClick: () => {
                AC("dig")
              },
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropDig")
              }), (0, vb.jsx)("span", {
                children: fC("buildAFactory2Game:dropDigDescription", {
                  distance: String(zC.baf2DropDigDistance),
                  y: Ab(zC.baf2DropDigY)
                })
              })]
            }), void 0 !== GC && (0, vb.jsxs)(In.t, {
              className: eC("grove", "Baf2DropGrove"),
              onClick: () => {
                AC("grove")
              },
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropGrove")
              }), (0, vb.jsx)("span", {
                children: fC(`buildAFactory2Game:${IC}`, {
                  distance: String(GC)
                })
              })]
            }), (0, vb.jsxs)(In.o, {
              className: eC("ruin"),
              disabled: null === SC,
              onClick: () => {
                AC("ruin")
              },
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropRuin")
              }), (0, vb.jsx)("span", {
                children: xC
              })]
            }), void 0 !== PC && (0, vb.jsxs)(In.I, {
              className: eC("works"),
              onClick: () => {
                AC("works")
              },
              children: [(0, vb.jsx)("strong", {
                children: fC("buildAFactory2Game:dropOldWorks")
              }), (0, vb.jsx)("span", {
                children: fC("buildAFactory2Game:dropOldWorksDescription", {
                  distance: String(PC)
                })
              })]
            })]
          }), (0, vb.jsx)("p", {
            className: "Baf2DropRenew",
            children: fC("buildAFactory2Game:dropRenew", {
              time: iC
            })
          }), (0, vb.jsxs)("details", {
            className: "Baf2DropSalvage",
            open: gC,
            onToggle: CC => {
              CC.currentTarget.open !== gC && MC(CC.currentTarget.open)
            },
            children: [(0, vb.jsx)("summary", {
              children: fC("buildAFactory2Game:dropSalvageWhat")
            }), (0, vb.jsx)("p", {
              children: fC("buildAFactory2Game:dropSalvageIntro")
            }), (0, vb.jsx)("ul", {
              children: WC.map((CC => {
                let {
                  item: zC,
                  nameKey: ZC,
                  useKey: QC,
                  params: wC
                } = CC;
                return (0, vb.jsxs)("li", {
                  children: [(0, vb.jsx)("span", {
                    className: "Baf2PanelIcon",
                    children: (0, vb.jsx)(Kw.e, {
                      itemName: zC,
                      amount: 0
                    })
                  }), (0, vb.jsxs)("span", {
                    children: [(0, vb.jsx)("strong", {
                      children: fC(ZC)
                    }), ": ", fC(QC, wC)]
                  })]
                }, zC)
              }))
            })]
          })]
        })
      })
    }
    const hW = "buildAFactory2Game:";

    function KW(CC, zC) {
      return CC.sendIslandEdit(`baf2coopleave ${zC.baf2IslandId}`)
    }

    function YW(CC) {
      let {
        card: zC,
        canRename: ZC,
        done: wC,
        t: bC
      } = CC;
      const nC = Dn(),
        [fC, oC] = (0, QC.useState)(zC.baf2IslandName),
        qC = Kq(fC),
        FC = "" === qC || Yq(qC),
        WC = () => {
          !FC && ZC && (qC !== zC.baf2IslandName ? wC(nC.sendIslandEdit(`baf2islandrename ${zC.baf2IslandId} ${qC}`)) : wC(null))
        },
        NC = () => {
          wC(null)
        };
      return (0, vb.jsxs)("div", {
        className: "Baf2IslandForm",
        ...Vq(NC),
        children: [(0, vb.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [bC(`${hW}islandsRenameLabel`), (0, vb.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: fC,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: CF,
            onChange: CC => {
              oC(CC.target.value)
            },
            ...kq(WC, NC)
          })]
        }), "" === qC && (0, vb.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: bC(`${hW}islandsRenameEmpty`)
        }), Yq(qC) && (0, vb.jsx)("p", {
          className: "Baf2IslandFormNote",
          children: bC(`${hW}islandsNameReserved`)
        }), (0, vb.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, vb.jsx)(In.t, {
            disabled: FC || !ZC,
            onClick: WC,
            children: bC(`${hW}islandsRenameSave`)
          }), (0, vb.jsx)(In.g, {
            onClick: NC,
            children: bC(`${hW}islandsCancel`)
          })]
        })]
      })
    }

    function dW(CC) {
      let {
        card: zC,
        canDelete: ZC,
        done: wC,
        t: bC
      } = CC;
      const nC = Dn(),
        [fC, oC] = (0, QC.useState)(""),
        qC = function(CC, zC) {
          return Kq(CC).toLowerCase() === Kq(zC).toLowerCase()
        }(fC, zC.baf2IslandName),
        FC = () => {
          qC && ZC && wC(nC.sendIslandEdit(`baf2islanddelete ${zC.baf2IslandId}`))
        },
        WC = () => {
          wC(null)
        },
        NC = Tq("name"),
        [MC, gC = ""] = bC(`${hW}islandsDeleteConfirm`, {
          name: NC
        }).split(NC);
      return (0, vb.jsxs)("div", {
        className: "Baf2IslandForm Delete",
        ...Vq(WC),
        children: [(0, vb.jsxs)("label", {
          className: "Baf2IslandFormLabel",
          children: [(0, vb.jsxs)("span", {
            children: [MC, (0, vb.jsx)("strong", {
              children: zC.baf2IslandName
            }), gC]
          }), (0, vb.jsx)("input", {
            type: "text",
            className: "Baf2IslandInput",
            value: fC,
            maxLength: 24,
            autoComplete: "off",
            spellCheck: !1,
            enterKeyHint: "done",
            autoFocus: !0,
            onFocus: CF,
            onChange: CC => {
              oC(CC.target.value)
            },
            ...kq(FC, WC)
          })]
        }), Lq(zC) && (0, vb.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: bC(`${hW}islandsDeleteLeftBack`)
        }), (0, vb.jsxs)("div", {
          className: "Baf2IslandButtons",
          children: [(0, vb.jsx)(In.I, {
            disabled: !qC || !ZC,
            onClick: FC,
            children: bC(`${hW}islandsDeleteForGood`)
          }), (0, vb.jsx)(In.g, {
            onClick: WC,
            children: bC(`${hW}islandsCancel`)
          })]
        })]
      })
    }

    function mW(CC) {
      let {
        members: zC,
        t: ZC
      } = CC;
      const QC = zC.length;
      return (0, vb.jsxs)("p", {
        className: "Baf2IslandMembers",
        children: [(0, vb.jsxs)("span", {
          children: [1 === QC ? ZC(`${hW}islandsPlayersOne`) : ZC(`${hW}islandsPlayers`, {
            count: String(QC)
          }), " "]
        }), zC.map(((CC, zC) => (0, vb.jsxs)("span", {
          className: Jw()("Baf2IslandMember", {
            Here: CC.baf2MemberHere
          }),
          title: CC.baf2MemberHere ? ZC(`${hW}islandsPlayerHere`) : void 0,
          children: [CC.baf2MemberName, zC < QC - 1 ? ", " : ""]
        }, CC.baf2MemberKey)))]
      })
    }

    function HW(CC) {
      let {
        card: zC,
        answered: ZC,
        nowMs: wC,
        t: bC
      } = CC;
      const nC = Dn(),
        [fC, oC] = (0, QC.useState)(new Map),
        qC = Lq(zC);
      if (!qC) return null;
      return (0, vb.jsxs)("div", {
        className: "Baf2IslandLeft",
        children: [(0, vb.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: bC(`${hW}islandsLeftTitle`)
        }), (0, vb.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: qC.left.map((CC => {
            const QC = CC.baf2LeftKey,
              FC = Bq(fC.get(QC), ZC, wC),
              WC = function(CC) {
                return 1 === CC ? [`${iq}islandsLeftItemsOne`] : [`${iq}islandsLeftItems`, {
                  count: String(CC)
                }]
              }(CC.baf2LeftItems);
            return (0, vb.jsx)("li", {
              className: Jw()("Baf2IslandPerson", {
                Pending: FC
              }),
              children: (0, vb.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, vb.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: CC.baf2LeftName
                }), (0, vb.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: bC(WC[0], WC[1])
                }), qC.claim && (0, vb.jsx)(In.t, {
                  className: "Baf2IslandPersonButton",
                  disabled: FC,
                  onClick: () => {
                    (CC => {
                      const ZC = nC.sendIslandEdit(`baf2coopclaim ${zC.baf2IslandId} ${CC}`);
                      oC((zC => new Map(zC).set(CC, {
                        atMs: Date.now(),
                        answer: ZC
                      })))
                    })(QC)
                  },
                  children: bC(`${hW}islandsClaim`)
                })]
              })
            }, QC)
          }))
        }), qC.goThere && (0, vb.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: bC(`${hW}islandsClaimGoThere`)
        })]
      })
    }

    function EW(CC) {
      let {
        card: zC,
        view: ZC,
        blocked: wC,
        maxIslands: bC,
        answered: nC,
        nowMs: fC,
        done: oC,
        openSocial: qC,
        t: FC
      } = CC;
      const WC = Dn(),
        [NC, MC] = (0, QC.useState)(new Map),
        [gC, SC] = (0, QC.useState)(new Map),
        [pC, PC] = (0, QC.useState)(null),
        GC = (0, QC.useRef)(null);
      wF(GC);
      const RC = zC.baf2IslandId,
        AC = zC.baf2IslandCoop,
        xC = null !== AC && void 0 !== AC && AC.baf2CoopMembers.some((CC => CC.baf2MemberKey === pC)) ? pC : null,
        JC = function(CC, zC) {
          const ZC = CC.baf2IslandCoop;
          return ZC && Uq(ZC) || null !== zC ? void 0 : CC.baf2IslandInvitable
        }(zC, wC),
        IC = function(CC, zC) {
          const ZC = CC.baf2IslandCoop;
          return ZC && Uq(ZC) ? {
            key: `${iq}islandsCoopFull`,
            params: {
              max: String(ZC.baf2CoopMax)
            }
          } : void 0 !== CC.baf2IslandInvitable && null === zC || ZC && !ZC.baf2CoopManageHere ? null : "degraded" === zC || "stuck" === zC ? {
            key: `${iq}islandsInviteNotLoaded`
          } : null === zC || function(CC) {
            return "notHome" === CC || "wilds" === CC || "visiting" === CC
          }(zC) || Eq(zC) ? {
            key: `${iq}islandsInviteGoThere`
          } : {
            key: `${iq}islandsInviteBusy`
          }
        }(zC, wC),
        iC = () => {
          var CC;
          PC(null), null === (CC = GC.current) || void 0 === CC || CC.focus()
        };
      return (0, vb.jsxs)("div", {
        ref: GC,
        tabIndex: -1,
        className: "Baf2IslandForm Baf2IslandPeople",
        ...Vq(null === xC ? oC : iC),
        children: [AC && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)("p", {
            className: "Baf2IslandFormTitle",
            children: FC(`${hW}islandsPlayersTitle`, {
              count: String(AC.baf2CoopMembers.length),
              max: String(AC.baf2CoopMax)
            })
          }), (0, vb.jsx)("ul", {
            className: "Baf2IslandPeopleList",
            children: AC.baf2CoopMembers.map(((CC, zC) => {
              const QC = CC.baf2MemberKey,
                wC = Bq(NC.get(QC), nC, fC);
              return (0, vb.jsxs)("li", {
                className: Jw()("Baf2IslandPerson", {
                  Pending: wC
                }),
                children: [(0, vb.jsxs)("div", {
                  className: "Baf2IslandPersonRow",
                  children: [(0, vb.jsx)("span", {
                    className: Jw()("Baf2IslandPersonName", {
                      Here: CC.baf2MemberHere
                    }),
                    children: CC.baf2MemberName
                  }), CC.baf2MemberHere && (0, vb.jsx)("span", {
                    className: "Baf2IslandPersonTag",
                    children: FC(`${hW}islandsPlayerHere`)
                  }), 0 === zC && (0, vb.jsx)("span", {
                    className: "Baf2IslandPersonTag Owner",
                    children: FC(`${hW}islandsPlayerOwner`)
                  }), ZC.remove && zC > 0 && !wC && xC !== QC && (0, vb.jsx)(In.K, {
                    className: "Baf2IslandPersonButton",
                    onClick: () => {
                      var CC;
                      PC(QC), null === (CC = GC.current) || void 0 === CC || CC.focus()
                    },
                    children: FC(`${hW}islandsRemove`)
                  })]
                }), xC === QC && (0, vb.jsxs)("div", {
                  className: "Baf2IslandConfirm",
                  children: [(0, vb.jsx)("p", {
                    children: aq(FC, `${hW}islandsRemoveConfirm`, {
                      player: CC.baf2MemberName
                    })
                  }), (0, vb.jsxs)("div", {
                    className: "Baf2IslandButtons",
                    children: [(0, vb.jsx)(In.I, {
                      onClick: () => {
                        (CC => {
                          const zC = WC.sendIslandEdit(`baf2coopremove ${RC} ${CC.baf2MemberKey}`);
                          MC((ZC => new Map(ZC).set(CC.baf2MemberKey, {
                            atMs: Date.now(),
                            answer: zC
                          }))), iC()
                        })(CC)
                      },
                      children: FC(`${hW}islandsRemoveYes`)
                    }), (0, vb.jsx)(In.g, {
                      onClick: iC,
                      children: FC(`${hW}islandsCancel`)
                    })]
                  })]
                })]
              }, QC)
            }))
          })]
        }), (void 0 !== JC || null !== IC) && (0, vb.jsx)("p", {
          className: "Baf2IslandFormTitle",
          children: FC(`${hW}islandsInviteTitle`)
        }), !AC && (void 0 !== JC || null !== IC) && (0, vb.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: FC(`${hW}islandsInviteShareNote`)
        }), 0 === (null === JC || void 0 === JC ? void 0 : JC.length) && (0, vb.jsx)(lW, {
          openSocial: qC,
          t: FC
        }), void 0 !== JC && JC.length > 0 && (0, vb.jsx)("ul", {
          className: "Baf2IslandPeopleList",
          children: JC.map((CC => {
            const zC = !0 === CC.baf2InvitableSent || Bq(gC.get(CC.baf2InvitableId), nC, fC);
            return (0, vb.jsx)("li", {
              className: "Baf2IslandPerson",
              children: (0, vb.jsxs)("div", {
                className: "Baf2IslandPersonRow",
                children: [(0, vb.jsx)("span", {
                  className: "Baf2IslandPersonName",
                  children: CC.baf2InvitableName
                }), CC.baf2InvitableFull && !zC && (0, vb.jsx)("span", {
                  className: "Baf2IslandPersonTag",
                  children: FC(`${hW}islandsInviteTheirFull`, {
                    max: String(bC)
                  })
                }), (zC || !CC.baf2InvitableFull) && (0, vb.jsx)(In.t, {
                  className: "Baf2IslandPersonButton",
                  disabled: zC,
                  onClick: () => {
                    (CC => {
                      const zC = WC.sendIslandEdit(`baf2coopinvite ${RC} ${CC}`);
                      SC((ZC => new Map(ZC).set(CC, {
                        atMs: Date.now(),
                        answer: zC
                      })))
                    })(CC.baf2InvitableId)
                  },
                  children: FC(zC ? `${hW}islandsInvited` : `${hW}islandsInvite`)
                })]
              })
            }, CC.baf2InvitableId)
          }))
        }), IC && (0, vb.jsx)(fF, {
          note: IC,
          t: FC
        }), (0, vb.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, vb.jsx)(In.g, {
            onClick: oC,
            children: FC(`${hW}islandsDone`)
          })
        })]
      })
    }

    function lW(CC) {
      let {
        openSocial: zC,
        t: ZC
      } = CC;
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)("p", {
          className: "Baf2IslandFormNote Quiet",
          children: ZC(zC ? `${hW}islandsInviteNobody` : `${hW}islandsInviteNobodyGuest`)
        }), zC && (0, vb.jsx)("div", {
          className: "Baf2IslandButtons",
          children: (0, vb.jsx)(In.g, {
            onClick: zC,
            children: ZC("socialBar:social")
          })
        })]
      })
    }

    function XW(CC) {
      let {
        className: zC,
        text: ZC,
        ConfirmButton: wC,
        confirmLabel: bC,
        canConfirm: nC,
        send: fC,
        done: oC,
        t: qC
      } = CC;
      const FC = (0, QC.useRef)(null);
      wF(FC);
      const WC = () => {
        oC(null)
      };
      return (0, vb.jsxs)("div", {
        ref: FC,
        tabIndex: -1,
        className: Jw()("Baf2IslandForm", zC),
        ...Vq(WC),
        children: [(0, vb.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: ZC
        }), (0, vb.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, vb.jsx)(wC, {
            disabled: !nC,
            onClick: () => {
              nC && oC(fC())
            },
            children: bC
          }), (0, vb.jsx)(In.g, {
            onClick: WC,
            children: qC(`${hW}islandsCancel`)
          })]
        })]
      })
    }

    function cW(CC) {
      return "hidden" !== CC
    }

    function uW(CC) {
      var zC, ZC;
      let {
        card: wC,
        keepOwn: bC,
        blocked: nC,
        maxIslands: fC,
        serverNowMs: oC,
        nowMs: qC,
        actions: FC,
        full: WC,
        waits: NC,
        answered: MC,
        mode: gC,
        setMode: SC,
        pending: pC,
        onSent: PC,
        switchTo: GC,
        leave: RC,
        coopOn: AC,
        openSocial: xC,
        t: JC
      } = CC;
      const IC = Dn(),
        iC = wC.baf2IslandActive,
        vC = iC ? null : function(CC, zC) {
          if (CC <= 0) return null;
          const ZC = zC - CC;
          if (ZC < pb) return [`${iq}islandsPlayedJustNow`];
          if (ZC < vq) return [`${iq}islandsPlayedMinutes`, {
            minutes: String(Math.floor(ZC / pb))
          }];
          if (ZC < eq) return [`${iq}islandsPlayedHours`, {
            hours: String(Math.floor(ZC / vq))
          }];
          const QC = Math.floor(ZC / eq);
          return 1 === QC ? [`${iq}islandsPlayedDay`] : [`${iq}islandsPlayedDays`, {
            days: String(QC)
          }]
        }(wC.baf2IslandLastPlayedMs, oC),
        eC = void 0 === (hC = wC.baf2IslandItems) ? null : 0 === hC ? [`${iq}islandsItemsNone`] : 1 === hC ? [`${iq}islandsItemsOne`] : [`${iq}islandsItems`, {
          count: String(hC)
        }];
      var hC;
      const KC = function(CC) {
          return CC ? 1 === CC ? [`${iq}islandsWaitingOne`] : [`${iq}islandsWaiting`, {
            count: String(CC)
          }] : null
        }(wC.baf2IslandWaiting),
        YC = wC.baf2IslandUnreadable,
        dC = wC.baf2IslandCoop,
        mC = yq(wC, FC, bC, WC, AC, nC),
        HC = (0, QC.useRef)(null);
      zF(null !== gC, HC);
      const EC = () => {
          var CC;
          SC(null), null === (CC = HC.current) || void 0 === CC || CC.focus()
        },
        lC = (CC, zC) => {
          EC(), null !== CC && PC(CC, zC)
        },
        XC = (CC, zC) => JC(`${hW}${CC}`, {
          time: xb(JC, zC)
        });
      return (0, vb.jsxs)("li", {
        ref: HC,
        tabIndex: -1,
        className: Jw()("Baf2IslandCard", {
          Active: iC,
          Pending: pC,
          Shared: void 0 !== dC
        }),
        children: [(0, vb.jsxs)("div", {
          className: "Baf2IslandHead",
          children: [(0, vb.jsx)("strong", {
            className: "Baf2IslandName",
            children: wC.baf2IslandName
          }), iC && (0, vb.jsx)("span", {
            className: "Baf2IslandBadge",
            children: JC(`${hW}islandsOnThis`)
          }), dC && (0, vb.jsx)("span", {
            className: "Baf2IslandBadge Shared",
            children: JC(`${hW}islandsShared`)
          })]
        }), "member" === (null === dC || void 0 === dC ? void 0 : dC.baf2CoopRole) && (0, vb.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: aq(JC, `${hW}islandsSharedBy`, {
            owner: dC.baf2CoopOwner
          })
        }), void 0 !== YC && (0, vb.jsx)("p", {
          className: "Baf2IslandUnreadable",
          children: JC("newer" === YC ? `${hW}islandsUnreadable` : `${hW}islandsDamaged`)
        }), "corrupt" === YC && WC && (0, vb.jsx)("p", {
          className: "Baf2IslandStats",
          children: JC(`${hW}islandsDamagedFull`)
        }), void 0 === YC && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(nF, {
            tier: wC.baf2IslandTier,
            t: JC
          }), (0, vb.jsxs)("p", {
            className: "Baf2IslandStats",
            children: [(0, vb.jsx)("span", {
              children: 1 === wC.baf2IslandQuestsDone ? JC(`${hW}islandsQuestsDoneOne`) : JC(`${hW}islandsQuestsDone`, {
                count: String(wC.baf2IslandQuestsDone)
              })
            }), (0, vb.jsx)("span", {
              children: 1 === wC.baf2IslandMachines ? JC(`${hW}islandsMachinesOne`) : JC(`${hW}islandsMachines`, {
                count: String(wC.baf2IslandMachines)
              })
            }), eC && (0, vb.jsx)("span", {
              children: JC(eC[0], eC[1])
            }), KC && (0, vb.jsx)("span", {
              className: "Baf2IslandWaiting",
              children: JC(KC[0], KC[1])
            }), vC && (0, vb.jsx)("span", {
              children: JC(vC[0], vC[1])
            })]
          })]
        }), dC && void 0 === dC.baf2CoopState && "people" !== gC && (0, vb.jsx)(mW, {
          members: dC.baf2CoopMembers,
          t: JC
        }), null === gC && (0, vb.jsx)(HW, {
          card: wC,
          answered: MC,
          nowMs: qC,
          t: JC
        }), mC.note && (0, vb.jsx)(fF, {
          note: mC.note,
          className: Jw()({
            Unreachable: void 0 !== (null === dC || void 0 === dC ? void 0 : dC.baf2CoopState)
          }),
          t: JC
        }), "rename" === gC && (0, vb.jsx)(YW, {
          card: wC,
          canRename: "enabled" === mC.rename,
          done: lC,
          t: JC
        }), "delete" === gC && (0, vb.jsx)(dW, {
          card: wC,
          canDelete: "enabled" === mC.delete,
          done: CC => {
            lC(CC, dC ? "delete" : void 0)
          },
          t: JC
        }), "people" === gC && (0, vb.jsx)(EW, {
          card: wC,
          view: mC,
          blocked: nC,
          maxIslands: fC,
          answered: MC,
          nowMs: qC,
          done: EC,
          openSocial: xC,
          t: JC
        }), "leave" === gC && (0, vb.jsx)(XW, {
          className: "Leave",
          text: aq(JC, `${hW}islandsLeaveConfirm`, {
            island: wC.baf2IslandName,
            owner: null !== (zC = null === (ZC = wC.baf2IslandCoop) || void 0 === ZC ? void 0 : ZC.baf2CoopOwner) && void 0 !== zC ? zC : ""
          }),
          ConfirmButton: In.I,
          confirmLabel: JC(`${hW}islandsLeaveYes`),
          canConfirm: "enabled" === mC.leave,
          send: () => KW(IC, wC),
          done: CC => {
            lC(CC, "leave"), null !== CC && iC && RC()
          },
          t: JC
        }), "unshare" === gC && (0, vb.jsx)(XW, {
          className: "Unshare",
          text: aq(JC, `${hW}islandsStopSharingConfirm`, {
            island: wC.baf2IslandName
          }),
          ConfirmButton: In.t,
          confirmLabel: JC(`${hW}islandsStopSharing`),
          canConfirm: "enabled" === mC.unshare,
          send: () => IC.sendIslandEdit(`baf2coopunshare ${wC.baf2IslandId}`),
          done: CC => {
            lC(CC), null !== CC && RC()
          },
          t: JC
        }), null === gC && !pC && (0, vb.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": wC.baf2IslandName,
          children: [cW(mC.switch) && (0, vb.jsx)(In.t, {
            disabled: "enabled" !== mC.switch,
            onClick: GC,
            children: "tryAgain" === mC.switchLabel ? JC(`${hW}islandsTryAgain`) : NC.switch > 0 ? XC("islandsSwitchIn", NC.switch) : JC(`${hW}islandsSwitch`)
          }), cW(mC.rename) && (0, vb.jsx)(In.g, {
            disabled: "enabled" !== mC.rename,
            onClick: () => {
              SC("rename")
            },
            children: JC(`${hW}islandsRename`)
          }), cW(mC.people) && (0, vb.jsx)(In.g, {
            disabled: "enabled" !== mC.people,
            onClick: () => {
              SC("people")
            },
            children: JC("players" === mC.peopleLabel ? `${hW}islandsPlayersButton` : `${hW}islandsInviteButton`)
          }), cW(mC.unshare) && (0, vb.jsx)(In.g, {
            disabled: "enabled" !== mC.unshare,
            onClick: () => {
              SC("unshare")
            },
            children: JC(`${hW}islandsStopSharing`)
          }), cW(mC.dismiss) && (0, vb.jsx)(In.g, {
            disabled: "enabled" !== mC.dismiss,
            onClick: () => {
              PC(KW(IC, wC), "dismiss"), iC && RC()
            },
            children: JC(`${hW}islandsDismiss`)
          }), cW(mC.leave) && (0, vb.jsx)(In.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== mC.leave,
            onClick: () => {
              SC("leave")
            },
            children: iC && NC.switch > 0 ? XC("islandsLeaveIn", NC.switch) : JC(`${hW}islandsLeave`)
          }), cW(mC.delete) && (0, vb.jsx)(In.K, {
            className: "Baf2IslandDelete",
            disabled: "enabled" !== mC.delete,
            onClick: () => {
              SC("delete")
            },
            children: NC.change > 0 && mC.deleteWaits ? XC("islandsDeleteIn", NC.change) : JC(`${hW}islandsDelete`)
          })]
        })]
      })
    }
    const rW = "buildAFactory2Game:";

    function sW(CC) {
      let {
        invite: zC,
        actions: ZC,
        full: wC,
        maxIslands: bC,
        waitSeconds: nC,
        focus: fC,
        focused: oC,
        join: qC,
        decline: FC,
        t: WC
      } = CC;
      const [NC, MC] = (0, QC.useState)(!1), gC = (0, QC.useRef)(null);
      zF(NC, gC), (0, QC.useEffect)((() => {
        var CC;
        fC && (MC(!0), null === (CC = gC.current) || void 0 === CC || CC.focus(), oC())
      }), [fC, oC]);
      const SC = function(CC, zC, ZC, QC, wC) {
          return ZC ? {
            join: !1,
            note: {
              key: `${iq}islandsJoinTooMany`,
              params: {
                max: String(QC)
              }
            }
          } : CC.baf2InvitePlayers >= wC ? {
            join: !1,
            note: {
              key: `${iq}islandsJoinFull`
            }
          } : {
            join: zC.switch,
            note: null
          }
        }(zC, ZC, wC, bC, 10),
        pC = zC.baf2InviteIsland,
        PC = zC.baf2InvitePlayers,
        GC = () => {
          var CC;
          MC(!1), null === (CC = gC.current) || void 0 === CC || CC.focus()
        },
        RC = nC > 0 && null === SC.note ? WC(`${rW}islandsJoinIn`, {
          time: xb(WC, nC)
        }) : WC(`${rW}islandsJoin`);
      return (0, vb.jsxs)("li", {
        ref: gC,
        tabIndex: -1,
        className: "Baf2IslandCard Invite",
        ...NC ? Vq(GC) : {},
        children: [(0, vb.jsx)("div", {
          className: "Baf2IslandHead",
          children: (0, vb.jsx)("strong", {
            className: "Baf2IslandName",
            children: pC
          })
        }), (0, vb.jsx)("p", {
          className: "Baf2IslandSharedBy",
          children: aq(WC, `${rW}islandsInvitedBy`, {
            owner: zC.baf2InviteOwner
          })
        }), (0, vb.jsx)(nF, {
          tier: zC.baf2InviteTier,
          t: WC
        }), (0, vb.jsx)("p", {
          className: "Baf2IslandStats",
          children: (0, vb.jsx)("span", {
            children: 1 === PC ? WC(`${rW}islandsPlayersCountOne`) : WC(`${rW}islandsPlayersCount`, {
              count: String(PC)
            })
          })
        }), SC.note && (0, vb.jsx)(fF, {
          note: SC.note,
          t: WC
        }), NC && (0, vb.jsx)("p", {
          className: "Baf2IslandConfirmText",
          children: aq(WC, `${rW}islandsJoinConfirm`, {
            island: pC
          })
        }), !NC && (0, vb.jsxs)("div", {
          className: "Baf2IslandButtons",
          role: "group",
          "aria-label": pC,
          children: [(0, vb.jsx)(In.t, {
            disabled: !SC.join,
            onClick: () => {
              var CC;
              MC(!0), null === (CC = gC.current) || void 0 === CC || CC.focus()
            },
            children: RC
          }), (0, vb.jsx)(In.g, {
            onClick: FC,
            children: WC(`${rW}islandsDecline`)
          })]
        }), NC && (0, vb.jsxs)("div", {
          className: "Baf2IslandButtons Stacked",
          children: [(0, vb.jsx)(In.t, {
            disabled: !SC.join,
            onClick: qC,
            children: WC(`${rW}islandsJoinYes`)
          }), (0, vb.jsx)(In.g, {
            onClick: GC,
            children: WC(`${rW}islandsCancel`)
          })]
        })]
      })
    }

    function TW(CC) {
      let {
        invites: zC,
        actions: ZC,
        full: QC,
        maxIslands: wC,
        waitSeconds: bC,
        focus: nC,
        focused: fC,
        leave: oC,
        declined: qC,
        t: FC
      } = CC;
      const WC = Dn();
      return (0, vb.jsxs)("section", {
        className: "Baf2IslandInvites",
        "aria-labelledby": "baf2IslandInvitesTitle",
        children: [(0, vb.jsx)("h3", {
          id: "baf2IslandInvitesTitle",
          children: FC(`${rW}islandsInvitesTitle`)
        }), (0, vb.jsx)("ul", {
          className: "Baf2IslandCards",
          children: zC.map((CC => {
            const zC = CC.baf2InviteId;
            return (0, vb.jsx)(sW, {
              invite: CC,
              actions: ZC,
              full: QC,
              maxIslands: wC,
              waitSeconds: bC,
              focus: nC === zC,
              focused: fC,
              join: () => {
                WC.send(`baf2coopaccept ${zC}`), oC()
              },
              decline: () => {
                WC.send(`baf2coopdecline ${zC}`), qC(zC)
              },
              t: FC
            }, zC)
          }))
        })]
      })
    }
    const aW = "buildAFactory2Game:";

    function tW(CC) {
      let {
        cards: zC,
        activeName: ZC,
        canStart: wC,
        waitSeconds: bC,
        leave: nC,
        t: fC
      } = CC;
      const oC = Dn(),
        [qC, FC] = (0, QC.useState)(!1),
        [WC, NC] = (0, QC.useState)(""),
        MC = (0, QC.useRef)(null);
      zF(qC, MC), (0, QC.useEffect)((() => {
        var CC;
        qC && (null === (CC = MC.current) || void 0 === CC || CC.focus())
      }), [qC]);
      const gC = dq(zC),
        SC = Kq(WC),
        pC = Yq(SC),
        PC = () => {
          wC && !pC && (oC.send("" === SC || SC === gC ? UC : `${UC} ${SC}`), nC())
        },
        GC = () => {
          var CC;
          FC(!1), null === (CC = MC.current) || void 0 === CC || CC.focus()
        };
      return (0, vb.jsxs)("li", {
        ref: MC,
        tabIndex: -1,
        className: "Baf2IslandCard New",
        ...qC ? Vq(GC) : {},
        children: [(0, vb.jsx)("strong", {
          className: "Baf2IslandName",
          children: fC(`${aW}islandsNewTitle`)
        }), !qC && (0, vb.jsx)("p", {
          className: "Baf2IslandStats",
          children: fC(`${aW}islandsNewNote`)
        }), qC && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)("p", {
            className: "Baf2IslandNewConfirm",
            children: aq(fC, `${aW}islandsNewConfirm`, {
              name: ZC
            })
          }), (0, vb.jsxs)("label", {
            className: "Baf2IslandFormLabel",
            children: [fC(`${aW}islandsNewNameLabel`), (0, vb.jsx)("input", {
              type: "text",
              className: "Baf2IslandInput",
              value: WC,
              placeholder: gC,
              maxLength: 24,
              autoComplete: "off",
              spellCheck: !1,
              enterKeyHint: "go",
              onFocus: CF,
              onChange: CC => {
                NC(CC.target.value)
              },
              ...kq(PC, GC)
            })]
          }), pC && (0, vb.jsx)("p", {
            className: "Baf2IslandFormNote",
            children: fC(`${aW}islandsNameReserved`)
          })]
        }), (0, vb.jsxs)("div", {
          className: Jw()("Baf2IslandButtons", {
            Stacked: qC
          }),
          children: [(0, vb.jsx)(In.t, {
            disabled: !wC || qC && pC,
            onClick: () => {
              if (!qC) return NC(gC), void FC(!0);
              PC()
            },
            children: bC > 0 ? fC(`${aW}islandsNewIn`, {
              time: xb(fC, bC)
            }) : fC(qC ? `${aW}islandsNewConfirmButton` : `${aW}islandsNew`)
          }), qC && (0, vb.jsx)(In.g, {
            onClick: GC,
            children: fC(`${aW}islandsCancel`)
          })]
        })]
      })
    }

    function DW(CC) {
      var zC, ZC;
      let {
        message: wC,
        arrivedAtMs: bC,
        close: nC,
        leave: fC,
        openSocial: oC
      } = CC;
      const qC = Dn(),
        {
          t: FC
        } = (0, ew.y)(),
        WC = bF(1e3),
        [NC, MC] = (0, QC.useState)(null),
        [gC, SC] = (0, QC.useState)(new Map),
        [pC, PC] = (0, QC.useState)(new Set),
        GC = wC.baf2IslandCards,
        RC = function(CC, zC, ZC, QC) {
          return (null !== CC && void 0 !== CC ? CC : []).filter((CC => zC + CC.baf2InviteLeftMs > ZC && !QC.has(CC.baf2InviteId)))
        }(wC.baf2IslandsInvites, bC, WC, pC),
        AC = RC.map((CC => CC.baf2InviteId)).join(" "),
        xC = (0, QC.useRef)(null),
        JC = ZF(xC);
      QF(), (0, QC.useEffect)((() => {
        var CC, zC;
        null !== (CC = xC.current) && void 0 !== CC && CC.contains(document.activeElement) || (null === (zC = xC.current) || void 0 === zC || zC.focus())
      }), [wC, AC]), (0, QC.useEffect)((() => {
        SC((CC => function(CC, zC, ZC, QC) {
          const wC = new Map;
          for (const bC of zC) {
            const zC = CC.get(bC.baf2IslandId);
            zC && (void 0 !== zC.untilGone || QC < zC.answer) && uq(zC, bC, ZC) && wC.set(bC.baf2IslandId, zC)
          }
          return wC.size === CC.size ? CC : wC
        }(CC, wC.baf2IslandCards, Date.now(), wC.baf2IslandsAnswered)))
      }), [wC]);
      const IC = hq(bC, wC.baf2IslandsWaitMs, WC),
        iC = wC.baf2IslandsBlocked,
        vC = lq(iC, IC),
        eC = function(CC, zC) {
          const ZC = lq(CC, 0);
          return {
            switch: ZC.switch ? zC : 0,
            change: ZC.change ? zC : 0
          }
        }(iC, IC),
        hC = GC.length >= wC.baf2IslandsMax,
        KC = GC.length > 0,
        YC = function(CC, zC, ZC) {
          return CC + Math.max(0, ZC - zC)
        }(wC.baf2IslandsNowMs, bC, WC),
        dC = null !== (zC = null === (ZC = GC.find((CC => CC.baf2IslandActive))) || void 0 === ZC ? void 0 : ZC.baf2IslandName) && void 0 !== zC ? zC : "",
        mC = function(CC) {
          const zC = CC.filter(jq).length;
          return zC <= 1 && zC < CC.length
        }(GC),
        HC = !0 === wC.baf2IslandsCoop,
        EC = function(CC, zC) {
          const ZC = CC.find((CC => CC.baf2IslandActive)),
            QC = null === ZC || void 0 === ZC ? void 0 : ZC.baf2IslandCoop;
          return ZC && "member" === (null === QC || void 0 === QC ? void 0 : QC.baf2CoopRole) ? {
            key: `${iq}islandsKeepOwnMember`,
            names: {
              owner: QC.baf2CoopOwner,
              island: ZC.baf2IslandName
            }
          } : {
            key: zC ? `${iq}islandsKeepOwn` : `${iq}islandsKeepOwnSolo`
          }
        }(GC, HC),
        [lC, XC] = (0, QC.useState)(null);
      (0, QC.useEffect)((() => {
        void 0 !== wC.baf2IslandsFocusInvite && XC(wC.baf2IslandsFocusInvite)
      }), [wC]);
      const cC = (0, QC.useCallback)((() => {
          XC(null)
        }), []),
        uC = NC ? GC.find((CC => CC.baf2IslandId === NC.id)) : void 0,
        rC = NC && uC && "hidden" !== yq(uC, vC, mC, hC, HC, iC)[NC.mode] ? NC : null;
      return (0, vb.jsx)(Jn.c, {
        close: nC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2IslandsOverlay",
        children: (0, vb.jsxs)("section", {
          ref: xC,
          tabIndex: -1,
          className: "Baf2Panel Baf2IslandsPanel",
          style: JC ? {
            marginTop: `${JC.marginTop}px`,
            maxHeight: `${JC.maxHeight}px`
          } : void 0,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2IslandsTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              children: [(0, vb.jsx)("h2", {
                id: "baf2IslandsTitle",
                children: FC(`${aW}islandsTitle`)
              }), KC && (0, vb.jsx)("p", {
                children: FC(`${aW}islandsSubtitle`, {
                  count: String(GC.length),
                  max: String(wC.baf2IslandsMax)
                })
              })]
            }), (0, vb.jsx)(In.k, {
              ariaLabel: FC(`${aW}islandsClose`),
              onClick: nC
            })]
          }), (0, vb.jsxs)("div", {
            className: "Baf2IslandsBody",
            children: [null !== iC && (0, vb.jsx)("p", {
              className: "Baf2IslandsBlocked",
              children: aq(FC, mq(iC, Hq(GC)), {
                island: dC
              })
            }), KC && RC.length > 0 && (0, vb.jsx)(TW, {
              invites: RC,
              actions: vC,
              full: hC,
              maxIslands: wC.baf2IslandsMax,
              waitSeconds: eC.switch,
              focus: lC,
              focused: cC,
              leave: fC,
              declined: CC => {
                PC((zC => new Set(zC).add(CC)))
              },
              t: FC
            }), KC && (0, vb.jsxs)(vb.Fragment, {
              children: [hC && (0, vb.jsx)("p", {
                className: "Baf2IslandsNote Full",
                children: FC(`${aW}islandsFull`, {
                  max: String(wC.baf2IslandsMax)
                })
              }), (0, vb.jsx)("p", {
                className: "Baf2IslandsNote",
                children: aq(FC, EC.key, EC.names)
              }), (0, vb.jsxs)("ul", {
                className: "Baf2IslandCards",
                children: [GC.map((CC => {
                  const zC = CC.baf2IslandId;
                  return (0, vb.jsx)(uW, {
                    card: CC,
                    keepOwn: mC,
                    coopOn: HC,
                    openSocial: oC,
                    blocked: iC,
                    maxIslands: wC.baf2IslandsMax,
                    serverNowMs: YC,
                    nowMs: WC,
                    actions: vC,
                    full: hC,
                    waits: eC,
                    answered: wC.baf2IslandsAnswered,
                    mode: (null === rC || void 0 === rC ? void 0 : rC.id) === zC ? rC.mode : null,
                    setMode: CC => {
                      MC(null === CC ? null : {
                        id: zC,
                        mode: CC
                      })
                    },
                    pending: uq(gC.get(zC), CC, WC),
                    onSent: (ZC, QC) => {
                      SC((wC => {
                        const bC = {
                          atMs: Date.now(),
                          from: CC.baf2IslandName,
                          answer: ZC
                        };
                        return new Map(wC).set(zC, QC ? {
                          ...bC,
                          untilGone: QC
                        } : bC)
                      }))
                    },
                    leave: fC,
                    switchTo: () => {
                      qC.send(`baf2islandswitch ${zC}`), fC()
                    },
                    t: FC
                  }, zC)
                })), !hC && (0, vb.jsx)(tW, {
                  cards: GC,
                  activeName: dC,
                  canStart: vC.change,
                  waitSeconds: eC.change,
                  leave: fC,
                  t: FC
                })]
              })]
            })]
          })]
        })
      })
    }
    var jW = ZC(4971);
    const yW = {
        all: "buildAFactory2Game:terminalChip_all",
        recent: "buildAFactory2Game:terminalChip_recent",
        lC: "buildAFactory2Game:terminalChip_ores",
        bars: "buildAFactory2Game:terminalChip_bars",
        parts: "buildAFactory2Game:terminalChip_parts",
        nuclear: "buildAFactory2Game:terminalChip_nuclear",
        farm: "buildAFactory2Game:terminalChip_farm",
        other: "buildAFactory2Game:terminalChip_other"
      },
      LW = Object.keys(yW),
      UW = new Set([...Object.keys(Uz), ...[...Ez.Press.recipes, ...Ez["Wire Mill"].recipes].map((CC => CC.output))]),
      BW = /Uranium|Plutonium|Pellet|Glow Dust|Nova|Isotope|Graphite|Coolant|Nuclear/,
      OW = / Ore$|^Raw |^Coal$|Voltite|Diamond|Moonstone|Crystal/,
      kW = / Bar$|Alloy$/,
      VW = /Porkchop|Beef|Mutton|Venison|Steak/,
      CN = /Wheat|Seed|Biomass|Fertiliser|Log$|Sapling|Planks|Wool|Leather|Bone|Moss|Bush|Melon|Carrot|Potato|Pumpkin|Apple|Flower/;
    const zN = (0, QC.memo)((function(CC) {
      let {
        item: zC,
        name: ZC,
        amount: QC,
        selected: wC,
        small: bC,
        onPick: nC
      } = CC;
      return (0, vb.jsxs)("button", {
        type: "button",
        className: Jw()("Baf2TermTile", {
          On: wC,
          Small: bC
        }),
        "aria-label": `${ZC}: ${QC}`,
        "aria-pressed": wC,
        onClick: () => {
          nC(zC)
        },
        children: [(0, vb.jsx)("span", {
          className: "Baf2TermIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: zC,
            amount: 0
          })
        }), (0, vb.jsx)("span", {
          className: "Baf2TermCount",
          children: Rb(QC, 1e4)
        }), !bC && (0, vb.jsx)("span", {
          className: "Baf2TermName",
          children: ZC
        })]
      })
    }));

    function ZN(CC) {
      let {
        store: zC,
        close: ZC,
        send: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)(), {
        isTouchScreen: nC
      } = (0, Rw.k)(["isTouchScreen"]);
      ! function(CC) {
        const [zC, ZC] = (0, QC.useState)(CC.version);
        (0, QC.useEffect)((() => (ZC(CC.version), CC.subscribe((() => {
          ZC(CC.version)
        })))), [CC])
      }(zC);
      const [fC, oC] = (0, QC.useState)("all"), [qC, FC] = (0, QC.useState)(!1), [WC, NC] = (0, QC.useState)(""), [MC, gC] = (0, QC.useState)(""), [SC, pC] = (0, QC.useState)(null), [PC, GC] = (0, QC.useState)(!1), [RC, AC, xC] = function() {
        const CC = (0, QC.useRef)(null),
          [zC, ZC] = (0, QC.useState)(!1),
          wC = () => {
            const zC = CC.current;
            ZC(null !== zC && zC.scrollLeft + zC.clientWidth < zC.scrollWidth - 1)
          };
        return (0, QC.useEffect)(wC), (0, QC.useEffect)((() => {
          const zC = CC.current;
          if (!zC) return;
          const ZC = new ResizeObserver(wC);
          return ZC.observe(zC), () => {
            ZC.disconnect()
          }
        }), []), [CC, zC, wC]
      }(), JC = (0, QC.useMemo)((() => new Map), [bC]), IC = CC => {
        let zC = JC.get(CC);
        return void 0 === zC && (zC = function(CC, zC) {
          const ZC = /^(.+) \((.+)\)$/.exec(CC);
          return ZC ? zC(ZC[2], ZC[1]) : CC
        }(wb(bC, CC), ((CC, zC) => bC("buildAFactory2Game:terminalTileKind", {
          kind: CC,
          base: zC
        }))), JC.set(CC, zC)), zC
      }, iC = zC.isReadOnly(), vC = PC && !iC, eC = zC.recent(), hC = zC.items(), KC = MC.trim().toLowerCase(), YC = vC ? zC.heldItems(SC) : ("recent" === fC ? eC : hC).filter((CC => {
        const zC = IC(CC);
        return ("all" === fC || "recent" === fC || function(CC) {
          return Nb(CC) ? "farm" : BW.test(CC) ? "nuclear" : kW.test(CC) ? "bars" : VW.test(CC) ? "farm" : OW.test(CC) ? "lC" : UW.has(CC) ? "parts" : CN.test(CC) ? "farm" : "other"
        }(CC) === fC) && ("" === KC || zC.toLowerCase().includes(KC)) && ("" === WC || zC.toUpperCase().startsWith(WC))
      })), dC = new Set(hC.map((CC => IC(CC).charAt(0).toUpperCase()))), mC = CC => vC ? zC.heldAmount(CC) : zC.amount(CC), HC = !vC && "recent" !== fC && eC.length > 0, EC = function(CC, zC) {
        return null !== CC && zC.includes(CC) ? CC : null
      }(SC, HC ? [...YC, ...eC] : YC), lC = null === EC ? 0 : zC.amount(EC), XC = null === EC ? 0 : mC(EC), cC = (0, QC.useCallback)((CC => {
        pC((zC => zC === CC ? null : CC))
      }), []), uC = CC => XC > 0 || vC && null === EC && "fill" === CC && YC.length > 0, rC = vC ? [
        ["one", bC("buildAFactory2Game:terminalStoreOne")],
        ["stack", bC("buildAFactory2Game:terminalStoreStack", {
          amount: String(99)
        })],
        ["fill", bC(null === EC ? "buildAFactory2Game:terminalStoreEverything" : "buildAFactory2Game:terminalStoreAll")]
      ] : [
        ["one", bC("buildAFactory2Game:terminalTakeOne")],
        ["stack", bC("buildAFactory2Game:terminalTakeStack", {
          amount: String(99)
        })],
        ["fill", bC("buildAFactory2Game:terminalFill")]
      ], sC = vC ? bC("buildAFactory2Game:terminalStoreEmpty") : "" !== WC ? bC("buildAFactory2Game:terminalEmptyLetter", {
        letter: WC
      }) : "" !== KC ? bC("buildAFactory2Game:terminalEmptySearch", {
        query: MC
      }) : bC("buildAFactory2Game:terminalEmpty");
      return (0, vb.jsx)(Jn.c, {
        close: ZC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2TermOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2TerminalPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2TerminalTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              children: [(0, vb.jsx)("h2", {
                id: "baf2TerminalTitle",
                children: bC(zC.isPocket() ? "item:pocketTerminal" : "item:wirelessTerminal")
              }), (0, vb.jsxs)("p", {
                className: "Baf2TermSubtitle",
                children: [(0, vb.jsx)("span", {
                  className: Jw()({
                    Off: vC
                  }),
                  children: bC("buildAFactory2Game:terminalSubtitle", {
                    count: String(zC.siloCount())
                  })
                }), !iC && (0, vb.jsx)("span", {
                  className: Jw()({
                    Off: !vC
                  }),
                  children: bC("buildAFactory2Game:terminalStoreSubtitle")
                })]
              })]
            }), !iC && (0, vb.jsx)(jW.b, {
              className: "Baf2TermModes",
              options: [{
                value: "take",
                label: bC("buildAFactory2Game:terminalModeTake")
              }, {
                value: "store",
                label: bC("buildAFactory2Game:terminalModeStore")
              }],
              value: vC ? "store" : "take",
              onChange: CC => {
                GC("store" === CC), pC(null)
              },
              ariaLabel: bC("buildAFactory2Game:terminalModes")
            }), (0, vb.jsx)(In.k, {
              onClick: ZC
            })]
          }), (0, vb.jsxs)("div", {
            className: "Baf2TermBody",
            children: [(0, vb.jsxs)("div", {
              className: Jw()("Baf2TermTools", {
                Hidden: vC
              }),
              children: [(0, vb.jsx)("div", {
                ref: RC,
                className: Jw()("Baf2TermChips", {
                  MoreRight: AC
                }),
                onScroll: xC,
                children: qC ? (0, vb.jsxs)(vb.Fragment, {
                  children: [(0, vb.jsx)("button", {
                    type: "button",
                    "aria-label": bC("buildAFactory2Game:terminalCategories"),
                    onClick: () => {
                      FC(!1), NC("")
                    },
                    children: "\u2190"
                  }), [...dC].sort().map((CC => (0, vb.jsx)("button", {
                    type: "button",
                    className: Jw()({
                      On: WC === CC
                    }),
                    onClick: () => {
                      NC(WC === CC ? "" : CC)
                    },
                    children: CC
                  }, CC)))]
                }) : (0, vb.jsxs)(vb.Fragment, {
                  children: [(0, vb.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      FC(!0)
                    },
                    children: bC("buildAFactory2Game:terminalLetters")
                  }), LW.map((CC => (0, vb.jsx)("button", {
                    type: "button",
                    className: Jw()({
                      On: fC === CC
                    }),
                    onClick: () => {
                      oC(CC)
                    },
                    children: bC(yW[CC])
                  }, CC)))]
                })
              }), !nC && (0, vb.jsx)("input", {
                className: "Baf2TermSearch",
                type: "search",
                value: MC,
                placeholder: bC("buildAFactory2Game:terminalSearch"),
                "aria-label": bC("buildAFactory2Game:terminalSearch"),
                onChange: CC => {
                  gC(CC.target.value)
                },
                onKeyDown: CC => {
                  CC.stopPropagation()
                }
              }), (0, vb.jsx)("button", {
                type: "button",
                className: "Baf2TermResort",
                "aria-label": bC("buildAFactory2Game:terminalResort"),
                title: bC("buildAFactory2Game:terminalResort"),
                onClick: () => {
                  zC.resort()
                },
                children: "\u21c5"
              })]
            }), HC && (0, vb.jsxs)("div", {
              className: "Baf2TermRecents",
              children: [(0, vb.jsx)("span", {
                children: bC(yW.recent)
              }), eC.map((CC => (0, vb.jsx)(zN, {
                item: CC,
                name: IC(CC),
                amount: zC.amount(CC),
                selected: EC === CC,
                small: !0,
                onPick: cC
              }, CC)))]
            }), (0, vb.jsx)("div", {
              className: "Baf2TermTiles",
              children: YC.length > 0 ? YC.map((CC => (0, vb.jsx)(zN, {
                item: CC,
                name: IC(CC),
                amount: mC(CC),
                selected: EC === CC,
                onPick: cC
              }, CC))) : (0, vb.jsx)("p", {
                className: "Baf2TermEmpty",
                children: sC
              })
            }), (0, vb.jsxs)("div", {
              className: Jw()("Baf2TermActions", {
                Hidden: vC && 0 === YC.length
              }),
              children: [(0, vb.jsx)("span", {
                className: "Baf2TermPicked",
                children: iC ? (0, vb.jsxs)(vb.Fragment, {
                  children: [null !== EC && lC > 0 ? IC(EC) : bC("buildAFactory2Game:terminalVisiting"), (0, vb.jsx)("small", {
                    children: bC("buildAFactory2Game:terminalVisitorNote")
                  })]
                }) : null !== EC ? (0, vb.jsxs)(vb.Fragment, {
                  children: [IC(EC), (0, vb.jsx)("small", {
                    children: bC("buildAFactory2Game:terminalStored", {
                      amount: lC.toLocaleString()
                    })
                  })]
                }) : bC(vC ? "buildAFactory2Game:terminalStorePick" : "buildAFactory2Game:terminalPick")
              }), !iC && rC.map((CC => {
                let [ZC, QC] = CC;
                const bC = "fill" === ZC ? In.o : In.g;
                return (0, vb.jsx)(bC, {
                  className: "Baf2TermTake",
                  disabled: !uC(ZC),
                  onClick: () => {
                    (CC => {
                      uC(CC) && wC(null === EC ? zC.putAll() : vC ? zC.put(CC, EC) : zC.take(CC, EC))
                    })(ZC)
                  },
                  children: QC
                }, ZC)
              }))]
            })]
          })]
        })
      })
    }

    function QN(CC) {
      let {
        kind: zC,
        icon: ZC,
        label: QC,
        number: wC,
        preview: bC,
        note: nC,
        tone: fC = null,
        share: oC,
        onExplain: qC
      } = CC;
      return (0, vb.jsxs)("button", {
        type: "button",
        className: Jw()("NxLane", zC, {
          Warn: "warn" === fC,
          Danger: "danger" === fC
        }),
        onClick: qC,
        children: [(0, vb.jsxs)("span", {
          className: "NxLaneHead",
          children: [ZC, (0, vb.jsx)("span", {
            className: "NxLaneLabel",
            children: QC
          })]
        }), (0, vb.jsxs)("span", {
          className: "NxLaneNum",
          children: [wC, bC && (0, vb.jsxs)("small", {
            className: "NxLanePreview",
            children: [" \u2192 ", bC]
          })]
        }), (0, vb.jsx)("span", {
          className: "NxLaneNote",
          children: nC
        }), void 0 !== oC && (0, vb.jsx)("i", {
          className: "NxLaneFill",
          style: {
            width: 100 * Math.max(0, Math.min(1, oC)) + "%"
          }
        })]
      })
    }

    function wN(CC) {
      let {
        kind: zC,
        step: ZC,
        short: QC,
        planned: wC
      } = CC;
      return (0, vb.jsx)("i", {
        className: Jw()("NxPipe", zC, `Step${ZC}`, {
          Short: QC,
          Planned: wC
        }),
        "aria-hidden": "true"
      })
    }

    function bN(CC) {
      let {
        max: zC,
        bands: ZC,
        ticks: QC,
        now: wC,
        settle: bC,
        settleTone: nC,
        onExplain: fC
      } = CC;
      const oC = CC => Math.max(0, Math.min(zC, CC)) / zC * 100 + "%";
      let qC = 0;
      return (0, vb.jsxs)("button", {
        type: "button",
        className: "NxGauge",
        onClick: fC,
        children: [(0, vb.jsxs)("span", {
          className: "NxGaugeTrack",
          children: [ZC.map((CC => {
            const zC = {
              bottom: oC(qC),
              height: `calc(${oC(CC.upTo)} - ${oC(qC)})`
            };
            return qC = CC.upTo, (0, vb.jsx)("i", {
              className: Jw()("NxGaugeBand", CC.kind),
              style: zC
            }, CC.kind)
          })), null !== wC && (0, vb.jsx)("i", {
            className: "NxGaugeNow",
            style: {
              bottom: oC(wC)
            }
          }), void 0 !== bC && null !== bC && (0, vb.jsx)("i", {
            className: Jw()("NxGaugeSettle", {
              Bad: "bad" === nC
            }),
            style: {
              bottom: oC(bC)
            }
          })]
        }), (0, vb.jsx)("span", {
          className: "NxGaugeTicks",
          children: QC.map((CC => (0, vb.jsx)("small", {
            style: {
              bottom: oC(CC)
            },
            children: CC
          }, CC)))
        })]
      })
    }

    function nN(CC) {
      const [zC, ZC] = (0, QC.useState)(null), [wC, bC] = (0, QC.useState)((() => {
        try {
          return null === window.localStorage.getItem(CC)
        } catch {
          return !1
        }
      })), nC = (0, QC.useRef)(null);
      (0, QC.useEffect)((() => () => {
        null !== nC.current && clearTimeout(nC.current)
      }), []);
      const fC = (0, QC.useCallback)((zC => {
          ZC(zC), bC(!1);
          try {
            window.localStorage.setItem(CC, "1")
          } catch {}
          null !== nC.current && clearTimeout(nC.current), nC.current = setTimeout((() => {
            nC.current = null, ZC(null)
          }), 5e3)
        }), [CC]),
        oC = (0, QC.useCallback)(((zC, ZC) => {
          const QC = `${CC}:${zC}`;
          try {
            if (null !== window.localStorage.getItem(QC)) return;
            window.localStorage.setItem(QC, "1")
          } catch {
            return
          }
          fC(ZC)
        }), [fC, CC]);
      return {
        explained: zC,
        hinting: wC,
        explain: fC,
        explainOnce: oC
      }
    }

    function fN(CC) {
      let {
        text: zC,
        tone: ZC,
        explained: QC
      } = CC;
      return (0, vb.jsxs)("p", {
        className: Jw()("NxStatus", null === QC ? ZC : "Explain"),
        "aria-live": "polite",
        children: [null !== QC && (0, vb.jsx)("b", {
          className: "NxStatusWhy",
          children: "?"
        }), null !== QC && void 0 !== QC ? QC : zC]
      })
    }
    const oN = [null, "Fuel Rod", "Graphite Block", "Coolant Channel"];

    function qN(CC, zC) {
      const ZC = Number(CC[zC]);
      return 1 === ZC || 2 === ZC || 3 === ZC ? ZC : 0
    }

    function FN(CC) {
      return !!ho("reactor", CC.baf2RxNeed) || void 0 !== CC.baf2RxLayout && CC.baf2RxNeed.some((CC => {
        let [zC, ZC] = CC;
        return ZC > 0 && oN.includes(zC)
      }))
    }
    const WN = "buildAFactory2Game:";

    function NN(CC) {
      let {
        status: zC,
        store: ZC,
        busy: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)();
      return function(CC) {
        return 0 !== (CC.baf2RxFlags & Sz) && (!CC.baf2RxFormed || void 0 !== CC.baf2RxLayout)
      }(zC) ? (0, vb.jsx)(In.o, {
        disabled: !FN(zC) || QC,
        onClick: () => {
          ZC.tap("fill", (() => {
            ZC.send("fill")
          }))
        },
        children: wC(void 0 !== zC.baf2RxLayout ? `${WN}rxFillLayout` : `${WN}rxFill`)
      }) : null
    }

    function MN(CC) {
      let {
        status: zC,
        store: ZC,
        readOnly: wC,
        bare: bC = !1
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), fC = zC.baf2RxLayout, [oC, qC, FC] = zC.baf2RxDims, WC = (0, QC.useMemo)((() => {
        if (void 0 === fC) return 0;
        const CC = Uint8Array.from(fC, ((CC, zC) => qN(fC, zC)));
        return bo([oC - 2, qC - 2, FC - 2], CC).max
      }), [fC, oC, qC, FC]);
      return void 0 === fC ? null : (0, vb.jsxs)("div", {
        className: "Baf2RxRow",
        children: [!bC && (0, vb.jsx)("span", {
          className: "Baf2RxHint",
          children: nC(`${WN}rxLayoutLine`, {
            amount: co(WC)
          })
        }), !wC && (0, vb.jsx)(In.g, {
          onClick: () => {
            ZC.send("layout", 0)
          },
          children: nC(`${WN}rxLayoutHide`)
        })]
      })
    }
    const gN = "buildAFactory2Game:",
      SN = {
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

    function pN(CC) {
      let {
        id: zC,
        title: ZC,
        body: QC,
        bodyParams: wC,
        yes: bC,
        cancel: nC,
        confirm: fC
      } = CC;
      const {
        t: oC
      } = (0, ew.y)();
      return (0, vb.jsxs)("div", {
        className: "Baf2RxConfirm",
        role: "alertdialog",
        "aria-labelledby": zC,
        children: [(0, vb.jsx)("h3", {
          id: zC,
          children: oC(ZC)
        }), (0, vb.jsx)("p", {
          children: oC(QC, wC)
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxActions",
          children: [(0, vb.jsx)(In.i, {
            onClick: nC,
            children: oC(`${gN}rxCancel`)
          }), (0, vb.jsx)(In.I, {
            onClick: fC,
            children: oC(bC)
          })]
        })]
      })
    }

    function PN(CC) {
      const [zC, ZC] = (0, QC.useState)((() => CC.get()));
      return (0, QC.useEffect)((() => (ZC(CC.get()), CC.subscribe((() => {
        ZC(CC.get())
      })))), [CC]), zC
    }

    function GN(CC) {
      let {
        kind: zC,
        cap: ZC,
        busy: wC = !1,
        whyNot: bC = null,
        apart: nC
      } = CC;
      const {
        t: fC
      } = (0, ew.y)(), [oC, qC] = (0, QC.useState)(!1), FC = null !== bC, WC = (0, QC.useRef)(null);
      if ((0, QC.useEffect)((() => {
          FC && qC(!1)
        }), [FC]), (0, QC.useLayoutEffect)((() => {
          var CC;
          const zC = null === (CC = WC.current) || void 0 === CC ? void 0 : CC.firstElementChild;
          FC ? null === zC || void 0 === zC || zC.setAttribute("aria-disabled", "true") : wC || null === zC || void 0 === zC || zC.removeAttribute("aria-disabled")
        })), !oC || FC) return (0, vb.jsx)("span", {
        ref: WC,
        className: "Baf2RxApartWrap",
        children: (0, vb.jsx)(In.i, {
          disabled: wC,
          className: Jw()({
            Baf2RxNotYet: FC
          }),
          onClick: () => {
            bC ? bC() : qC(!0)
          },
          children: fC(`${gN}rxApart`)
        })
      });
      const NC = "battery" === zC,
        MC = void 0 === ZC ? `${gN}batApartConfirmBodyPlan` : `${gN}batApartConfirmBody`;
      return (0, vb.jsx)(pN, {
        id: `baf2ApartTitle_${zC}`,
        title: NC ? `${gN}batApartConfirmTitle` : `${gN}rxApartConfirmTitle`,
        body: NC ? MC : `${gN}rxApartConfirmBody`,
        bodyParams: void 0 === ZC ? void 0 : {
          cap: ZC
        },
        yes: `${gN}rxApart`,
        cancel: () => {
          qC(!1)
        },
        confirm: () => {
          qC(!1), nC()
        }
      })
    }

    function RN(CC) {
      let {
        mood: zC,
        big: ZC
      } = CC;
      const QC = SN[zC],
        wC = [];
      return QC.rows.forEach(((CC, zC) => {
        for (let ZC = 0; ZC < CC.length; ZC++) "." !== CC[ZC] && wC.push((0, vb.jsx)("rect", {
          x: ZC + 1,
          y: zC + 1,
          width: 1,
          height: 1,
          fill: "w" === CC[ZC] ? "#8fd3ff" : QC.colour
        }, `${ZC},${zC}`))
      })), (0, vb.jsxs)("svg", {
        className: Jw()("Baf2RxFace", {
          Big: ZC,
          Alarm: "alarm" === zC
        }),
        viewBox: "0 0 10 10",
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        children: [(0, vb.jsx)("rect", {
          width: 10,
          height: 10,
          fill: "#2f333a"
        }), (0, vb.jsx)("rect", {
          x: 1,
          y: 1,
          width: 8,
          height: 8,
          fill: "#14161b"
        }), wC]
      })
    }

    function AN(CC) {
      return Gb(CC, "+").replace("+", "")
    }

    function xN(CC) {
      let {
        kind: zC,
        dims: ZC,
        cap: QC,
        disabled: wC,
        compact: bC,
        resize: nC
      } = CC;
      const {
        t: fC
      } = (0, ew.y)(), {
        min: oC,
        max: qC
      } = rZ(zC), FC = Math.min(QC, qC), WC = [`${gN}rxWide`, `${gN}rxTall`, `${gN}rxDeep`], NC = {
        w: String(ZC[0]),
        h: String(ZC[1]),
        d: String(ZC[2]),
        blocks: String(Xo(zC, ZC))
      };
      return (0, vb.jsxs)("div", {
        className: "Baf2RxSteppersWrap",
        children: [(0, vb.jsx)("div", {
          className: "Baf2RxSteppers",
          children: ZC.map(((CC, zC) => {
            const bC = QC => {
                const wC = [ZC[0], ZC[1], ZC[2]];
                wC[zC] = CC + QC, nC(wC)
              },
              NC = CC >= FC;
            return (0, vb.jsxs)("div", {
              className: "Baf2RxStepper",
              children: [(0, vb.jsx)("button", {
                type: "button",
                "aria-label": fC(`${gN}rxSmaller`),
                disabled: wC || CC <= oC,
                onClick: () => {
                  bC(-1)
                },
                children: "\u2212"
              }), (0, vb.jsxs)("div", {
                className: "Baf2RxStepperValue",
                children: [CC, (0, vb.jsx)("small", {
                  children: fC(WC[zC])
                })]
              }), (0, vb.jsx)("button", {
                type: "button",
                "aria-label": fC(`${gN}rxBigger`),
                disabled: wC || NC,
                onClick: () => {
                  bC(1)
                },
                children: NC && QC < qC ? "\ud83d\udd12" : "+"
              })]
            }, WC[zC])
          }))
        }), !bC && (0, vb.jsx)("span", {
          className: "Baf2RxHint",
          children: "reactor" === zC ? fC(`${gN}rxSizeLine`, {
            ...NC,
            water: String(Eo(ZC))
          }) : fC(`${gN}batSizeLine`, NC)
        })]
      })
    }

    function JN(CC) {
      let {
        on: zC,
        label: ZC,
        disabled: QC,
        locked: wC,
        pending: bC,
        toggle: nC
      } = CC;
      return (0, vb.jsxs)("button", {
        type: "button",
        role: "switch",
        "aria-checked": zC,
        disabled: QC,
        "aria-disabled": wC || void 0,
        className: Jw()("Baf2RxSwitch", {
          On: zC,
          Locked: wC,
          Pending: bC
        }),
        onClick: nC,
        children: [(0, vb.jsx)("span", {
          className: "Baf2RxKnob"
        }), ZC]
      })
    }
    const IN = "buildAFactory2Game:",
      iN = .95;

    function vN(CC, zC) {
      return 0 !== (CC.baf2RxFlags & zC)
    }

    function eN(CC) {
      return "cryo" === CC ? kC.i : kC.m
    }

    function hN(CC) {
      var zC, ZC, QC, wC, bC, nC, fC, oC, qC;
      return CC.baf2RxCryo ? {
        NM: "cryo",
        usePerS: null !== (wC = CC.baf2RxCryoUse) && void 0 !== wC ? wC : 0,
        needPerS: null !== (bC = CC.baf2RxCryoNeed) && void 0 !== bC ? bC : 0,
        inPerS: null !== (nC = CC.baf2RxCryoIn) && void 0 !== nC ? nC : 0,
        stored: null !== (fC = CC.baf2RxCryoStored) && void 0 !== fC ? fC : 0,
        makersShort: null !== (oC = CC.baf2RxMixersShort) && void 0 !== oC ? oC : 0,
        waterBeside: null !== (qC = CC.baf2RxWaterUse) && void 0 !== qC ? qC : 0,
        pct: CC.baf2RxWater
      } : {
        NM: "water",
        usePerS: null !== (zC = CC.baf2RxWaterUse) && void 0 !== zC ? zC : 0,
        needPerS: null !== (ZC = CC.baf2RxWaterNeed) && void 0 !== ZC ? ZC : 0,
        inPerS: CC.baf2RxWaterIn,
        stored: CC.baf2RxWaterStored,
        makersShort: null !== (QC = CC.baf2RxCondensersShort) && void 0 !== QC ? QC : 0,
        waterBeside: 0,
        pct: CC.baf2RxWater
      }
    }

    function KN(CC) {
      const zC = "running" === CC.baf2RxState || "idle" === CC.baf2RxState;
      return CC.baf2RxFormed && CC.baf2RxTarget !== CC.baf2RxThrottle && zC ? YN(CC, CC.baf2RxTarget) : null
    }

    function YN(CC, zC) {
      const [ZC, QC, wC, , , , bC, , nC] = CC.baf2RxStats, fC = vN(CC, Mz), oC = hN(CC), qC = oC.pct / 100, {
        gen: FC,
        out: WC,
        load: NC
      } = function(CC, zC, ZC, QC) {
        const wC = ZC ? kf : 1,
          bC = Math.min(CC.fuelHeat * wC * Math.max(0, Math.min(1, zC)), CC.size * wC);
        return {
          gen: bC,
          out: bC,
          load: po(bC, CC.cooling, QC)
        }
      }({
        fuelHeat: ZC,
        cooling: QC,
        size: wC
      }, zC / 100, fC, qC), MC = Go(bC || wo(...CC.baf2RxDims)), gC = CC.baf2RxHeat, SC = Math.abs(NC - gC), pC = function(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : kC.m;
        const bC = ZC ? kf : 1,
          nC = Math.min(CC.fuelHeat * bC * zC / 100, CC.size * bC),
          fC = nC,
          oC = CC.fuelHeat * bC,
          qC = CC.cooling * So(QC.pct / 100),
          FC = oC > 0 && qC < CC.size * bC ? Math.floor(100 * qC / oC) : 100,
          WC = nC * wC - QC.inPerS;
        return {
          out: fC,
          hotAbove: FC >= 100 ? null : Math.max(0, FC),
          waterSecs: QC.pct >= 100 && WC > 1e-6 ? Math.max(0, QC.stored) / WC : null
        }
      }({
        fuelHeat: ZC,
        cooling: QC,
        size: wC
      }, zC, fC, {
        pct: oC.pct,
        inPerS: oC.inPerS,
        stored: oC.stored
      }, eN(oC.NM));
      return {
        pct: zC,
        out: WC,
        coolPerS: FC * eN(oC.NM),
        pelletsPerMin: nC > 0 ? WC / nC * 60 : 0,
        settle: NC,
        settleS: SC > 2 ? MC * Math.log(SC / 2) : 0,
        overheatS: NC > 100 && gC < 100 ? MC * Math.log((NC - gC) / (NC - 100)) : null,
        hotAbove: pC.hotAbove,
        coolantSecs: pC.waterSecs
      }
    }

    function dN(CC) {
      return CC.baf2RxThrottle <= 0 && "running" !== CC.baf2RxState ? 0 : YN(CC, CC.baf2RxTarget).pelletsPerMin / 60
    }

    function mN(CC, zC) {
      if (CC <= 0 || zC <= 0) return 0;
      const ZC = CC / zC;
      return ZC < .25 ? 1 : ZC < .5 ? 2 : ZC < .8 ? 3 : 4
    }

    function HN(CC, zC) {
      const ZC = {};
      for (const [QC, wC] of Object.entries(zC.params)) ZC[QC] = "time" === QC ? xb(CC, wC) : "amount" === QC ? co(wC) : String(Math.round(wC));
      return CC(zC.key, ZC)
    }

    function EN(CC, zC) {
      return {
        key: `${IN}${CC}`,
        params: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tone: zC
      }
    }

    function lN(CC) {
      var zC;
      const ZC = vN(CC, Mz),
        QC = "running" === CC.baf2RxState,
        wC = Jo(CC),
        bC = CC.baf2RxHeat;
      var nC;
      if (QC && bC > Bf) return {
        key: null !== (nC = wC.fix) && void 0 !== nC ? nC : `${IN}rxFix_tooHot`,
        params: {},
        tone: "bad"
      };
      const fC = QC ? YN(CC, CC.baf2RxTarget).coolantSecs : null,
        oC = "cryo" === hN(CC).NM;
      if (null !== fC && fC >= 1 && fC <= 30) return EN(oC ? "rxWarnCryo" : "rxWarnWater", "bad");
      const qC = Zo(wo(...CC.baf2RxDims)).waste,
        FC = QC ? Ko(CC, qC, dN(CC)).fullInS : null;
      if (null !== FC && FC <= 120 && CC.baf2RxWaste >= .5 * qC) return EN("rxWarnWaste", "warn");
      if (null !== fC && fC >= 1) return EN(oC ? "rxThrottleCryoOut" : "rxThrottleWaterOut", "warn", {
        time: fC
      });
      const WC = "noWater" === CC.baf2RxState && bC > Bf;
      if (CC.baf2RxDamage >= 1 && !WC) return EN("rxDamagedHeals", "warn", {
        pct: CC.baf2RxDamage
      });
      if (CC.baf2RxCryoCut) return EN("rxFix_cryoCut", "warn");
      const NC = hN(CC);
      if ("noWater" === CC.baf2RxState && "cryo" === NC.NM) return EN("noWater" === CC.baf2RxCryoStarved ? "rxFix_cryoLowWater" : "rxFix_noCryo", "warn");
      const MC = wC.fix === `${IN}rxFix_scramCool` || "idle" === CC.baf2RxState && CC.baf2RxTarget <= 0;
      if (MC && CC.baf2RxFuel <= 0) return EN("rxFix_noFuel", "warn");
      if (MC && CC.baf2RxWaterIn <= 0 && (null !== (zC = CC.baf2RxCryoIn) && void 0 !== zC ? zC : 0) <= 0) return EN("rxFix_noWater", "warn");
      const gC = wC.fix === `${IN}rxFix_scramCool` ? io(CC) : null;
      if (null !== gC) return {
        key: gC.key,
        params: {
          amount: gC.amount
        },
        tone: "info"
      };
      if ("running" !== CC.baf2RxState && "idle" !== CC.baf2RxState && null !== wC.fix) return {
        key: wC.fix,
        params: {},
        tone: "scram" === CC.baf2RxState ? "info" : WC ? "bad" : "warn"
      };
      var SC;
      if ("idle" === CC.baf2RxState && CC.baf2RxTarget <= 0) return {
        key: null !== (SC = wC.fix) && void 0 !== SC ? SC : `${IN}rxFix_idle`,
        params: {},
        tone: "info"
      };
      const pC = CC.baf2RxCryoStarved;
      if ("cryo" === NC.NM && pC && NC.needPerS > 0 && NC.usePerS < iN * NC.needPerS) return EN("noWater" === pC ? "rxFix_cryoLowWater" : "rxFix_cryoLow", "warn");
      const PC = "cryo" === NC.NM,
        GC = NC.needPerS > 0 && NC.usePerS < iN * NC.needPerS;
      if (PC ? GC || NC.makersShort > 0 && NC.pct < 100 : NC.pct < 100) {
        const zC = PC && GC ? Math.floor(100 * NC.usePerS / NC.needPerS) : Math.min(100, NC.pct);
        if (NC.makersShort > 0) {
          return EN(`${PC?"rxCryoShortLine":"rxWaterShortLine"}${1===NC.makersShort?"One":""}${!PC&&CC.baf2RxCryoOpen?"OrCryo":""}`, "warn", {
            pct: zC,
            count: NC.makersShort
          })
        }
        return EN(PC ? "rxCryoShortPipe" : "rxWaterShortPipe", "warn", {
          pct: zC
        })
      }
      const RC = function(CC) {
        const [zC, ZC, QC] = CC.baf2RxStats, wC = hN(CC), bC = Po({
          fuelHeat: zC,
          cooling: ZC,
          size: QC
        }, "cryo" === wC.NM ? kC.f : 1, !0);
        return Math.max(0, bC * eN(wC.NM) - wC.inPerS)
      }(CC);
      if (ZC && RC > 0) return EN("cryo" === NC.NM ? "rxOdShortCryo" : "rxOdShortWater", "warn", {
        rate: Math.ceil(RC)
      });
      if (bC >= Mo) return EN("rxHotLine", "warn");
      const AC = YN(CC, CC.baf2RxTarget);
      var xC;
      if (null !== AC.overheatS) return EN("rxWillOverheat", "bad", {
        pct: CC.baf2RxTarget,
        time: AC.overheatS,
        safe: null !== (xC = AC.hotAbove) && void 0 !== xC ? xC : 100
      });
      if (Math.abs(AC.settle - bC) >= 3) return EN("rxSettling", "info", {
        pct: CC.baf2RxTarget,
        heat: Math.round(AC.settle),
        time: AC.settleS
      });
      const JC = io(CC);
      if (null !== JC) return {
        key: JC.key,
        params: {
          amount: JC.amount
        },
        tone: "info"
      };
      const IC = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return null !== zC && ("running" !== zC || arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] || arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) ? null : 0 === CC.rods ? `${Ro}rxLimitNoRods` : `${Ro}rxLimit_${No(CC)}`
      }({
        rods: CC.baf2RxStats[3],
        ...Io(CC)
      }, CC.baf2RxState, CC.baf2RxOut >= iN * CC.baf2RxMaxNow, !1);
      if (IC === `${IN}rxLimit_size`) {
        const [zC, , ZC, QC] = CC.baf2RxStats, wC = QC > 0 && zC > 0 ? Math.ceil(ZC / (zC / QC) - 1e-9) : QC, bC = CC.baf2RxDims.every((CC => CC >= rZ("reactor").max));
        if (wC < QC) return EN(bC ? "rxLimitSizeRodsMax" : "rxLimitSizeRods", "info", {
          rods: wC,
          have: QC
        });
        if (bC) return EN("rxLimit_sizeMax", "info")
      }
      return null !== IC ? {
        key: IC,
        params: {},
        tone: "info"
      } : EN("rxSteady", "ok", {
        pct: CC.baf2RxTarget
      })
    }

    function XN(CC) {
      var zC;
      if (CC.melted) return EN("rxMeltedBody", "bad");
      if (-1 === CC.bad) return EN("rxFix_noRoom", "warn");
      if (CC.bad > 0) return EN(1 === CC.bad ? "rxBadOne" : "rxBad", "warn", {
        count: CC.bad
      });
      if (CC.left > 0) {
        const zC = 1 === CC.left ? "One" : "";
        return EN(CC.canFill ? `rxPlanLeft${zC}` : `rxPlanLeftNoFill${zC}`, "info", {
          count: CC.left
        })
      }
      if (0 === CC.rods) return EN("rxLimitNoRods", "warn");
      const ZC = null !== (zC = CC.idle) && void 0 !== zC ? zC : 0;
      return ZC > 0 ? EN(1 === ZC ? "rxIdleChannelOne" : "rxIdleChannels", "warn", {
        count: ZC
      }) : EN("rxPlanReady", "ok")
    }

    function cN(CC) {
      return Math.floor(Math.max(0, CC[1] - 1) / 2)
    }

    function uN(CC) {
      if (CC >= fo && CC < oo) {
        const zC = CC - fo;
        return {
          key: 0 === zC ? `${IN}rxWhy_rodAlone` : 1 === zC ? `${IN}rxWhy_rodOne` : `${IN}rxWhy_rod`,
          params: {
            count: String(zC),
            heat: String(Tf * (1 + af * zC))
          }
        }
      }
      return CC === oo ? {
        key: `${IN}rxWhy_channel`,
        params: {
          amount: String(Df)
        }
      } : CC === qo ? {
        key: `${IN}rxWhy_deadChannel`,
        params: {}
      } : CC === Fo ? {
        key: `${IN}rxWhy_graphite`,
        params: {}
      } : {
        key: `${IN}rxWhy_core`,
        params: {}
      }
    }
    const rN = "buildAFactory2Game:";

    function sN(CC, zC) {
      return 0 !== (CC.baf2RxFlags & zC)
    }

    function TN(CC) {
      let {
        status: zC,
        pending: ZC,
        store: QC,
        explain: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)(), nC = sN(zC, Nz), fC = zC.baf2RxTarget, oC = zC.baf2RxThrottle, qC = function(CC) {
        return {
          press: () => {
            CC.throttlePress()
          },
          drag: zC => {
            CC.throttleDrag(zC)
          },
          release: () => {
            CC.throttleRelease()
          }
        }
      }(QC), FC = null === (WC = YN(zC, 100).hotAbove) ? {
        amber: 100,
        red: 100
      } : {
        amber: Math.max(0, WC - 10),
        red: WC
      };
      var WC;
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2RxThrottle", {
          Off: nC
        }),
        onClick: () => {
          nC && wC(`${rN}rxWhy_startFirst`)
        },
        children: [(0, vb.jsx)("span", {
          className: "HideNarrow",
          children: bC(`${rN}rxThrottle`)
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxSlider",
          children: [(0, vb.jsx)("input", {
            type: "range",
            min: 0,
            max: 100,
            step: 1,
            value: fC,
            disabled: nC,
            style: nC ? {
              pointerEvents: "none"
            } : void 0,
            "aria-label": bC(`${rN}rxThrottle`),
            onPointerDown: () => {
              qC.press();
              const CC = () => {
                window.removeEventListener("pointerup", CC), window.removeEventListener("pointercancel", CC), qC.release()
              };
              window.addEventListener("pointerup", CC), window.addEventListener("pointercancel", CC)
            },
            onKeyUp: qC.release,
            onChange: CC => {
              qC.drag(Number(CC.target.value))
            }
          }), (0, vb.jsx)("i", {
            className: "Baf2RxZones",
            style: {
              background: `linear-gradient(90deg, #4cc46a 0 ${FC.amber}%, #ffb020 ${FC.amber}% ${FC.red}%, #ff3b30 ${FC.red}%)`
            },
            "aria-hidden": "true"
          }), (0, vb.jsx)("i", {
            className: "Baf2RxRodTick",
            style: {
              left: `calc(${oC}% + ${8*(1-oC/50)}px)`
            },
            "aria-hidden": "true"
          })]
        }), (0, vb.jsxs)("b", {
          children: [`${fC}%`, (0, vb.jsx)("i", {
            className: Jw()("Baf2RxPendingDot", {
              On: ZC
            }),
            "aria-hidden": "true"
          })]
        })]
      })
    }

    function aN(CC) {
      let {
        status: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), QC = YN(zC, zC.baf2RxTarget), wC = hN(zC).NM, bC = ZC("cryo" === wC ? `${rN}rxRateCryo` : `${rN}rxRateWater`, {
        rate: AN(QC.coolPerS)
      }), nC = ZC(`${rN}rxChain`, {
        pct: String(zC.baf2RxTarget),
        out: co(QC.out),
        heat: String(Math.round(QC.settle)),
        coolant: bC
      }), fC = null !== QC.coolantSecs ? QC.coolantSecs >= 1 ? ZC("cryo" === wC ? `${rN}rxThrottleCryoOut` : `${rN}rxThrottleWaterOut`, {
        time: xb(ZC, QC.coolantSecs)
      }) : ZC("cryo" === wC ? `${rN}rxThrottleCryoDry` : `${rN}rxThrottleWaterDry`) : null;
      return (0, vb.jsxs)("p", {
        className: "Baf2RxChain",
        children: [nC, null !== fC ? (0, vb.jsxs)("span", {
          className: "Baf2RxChainWarn",
          children: [" \xb7 ", fC]
        }) : (0, vb.jsxs)("span", {
          children: [" \xb7 ", ZC(`${rN}rxChainPellets`, {
            amount: uo(QC.pelletsPerMin)
          })]
        })]
      })
    }

    function tN(CC) {
      let {
        view: zC,
        store: ZC,
        explain: wC,
        explainOnce: bC
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), {
        status: fC
      } = zC, [oC, qC] = (0, QC.useState)(!1), FC = sN(fC, Nz), NC = sN(fC, Mz), MC = !sN(fC, pz), gC = fC.baf2RxHeat > 100;
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsxs)("div", {
          className: "Baf2RxCtl",
          children: [(0, vb.jsx)(TN, {
            status: fC,
            pending: zC.throttlePending,
            store: ZC,
            explain: wC
          }), (0, vb.jsx)(JN, {
            on: NC,
            label: NC ? nC(`${rN}rxOdLeft`, {
              time: xb(nC, fC.baf2RxOdLeft)
            }) : nC(`${rN}rxOverdrive`),
            locked: MC,
            pending: 0 !== (zC.pendingFlags & Mz),
            toggle: () => {
              MC ? wC(`${rN}rxOverdriveTier`, {
                amount: String(WC(13))
              }) : NC ? ZC.setFlag(Mz, !1) : zC.odConfirmed ? ZC.setFlag(Mz, !0) : qC(!0)
            }
          }), FC || zC.startGuard ? (0, vb.jsx)(In.t, {
            disabled: zC.busy.has("start") || zC.startGuard,
            onClick: () => {
              ZC.tap("start", (() => {
                ZC.setFlag(Nz, !1)
              }))
            },
            children: nC(zC.startGuard ? `${rN}rxStarting` : `${rN}rxStart`)
          }) : (0, vb.jsx)("span", {
            className: Jw()("Baf2RxScram", {
              Pulse: gC
            }),
            children: (0, vb.jsx)(In.I, {
              onClick: () => {
                ZC.shutDown()
              },
              children: nC(`${rN}rxScram`)
            })
          })]
        }), (0, vb.jsx)(aN, {
          status: fC
        }), oC && (0, vb.jsx)(pN, {
          id: "baf2RxOdTitle",
          title: `${rN}rxOdConfirmTitle`,
          body: `${rN}rxOdConfirmBody`,
          yes: `${rN}rxOdConfirm`,
          cancel: () => {
            qC(!1)
          },
          confirm: () => {
            qC(!1), ZC.tap("odConfirm", (() => {
              ZC.confirmOverdrive(), ZC.setFlag(Mz, !0)
            })), bC(`${rN}rxWhy_overdrive`)
          }
        })]
      })
    }

    function DN(CC) {
      let {
        view: zC,
        store: ZC,
        keepSize: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), {
        status: bC
      } = zC;
      return (0, vb.jsxs)("div", {
        className: "Baf2RxCtl Baf2RxBuild",
        children: [(0, vb.jsx)(xN, {
          kind: "reactor",
          dims: zC.dims,
          cap: bC.baf2RxSizeCap,
          disabled: !1,
          compact: !0,
          resize: CC => {
            ZC.resize(CC)
          }
        }), QC ? (0, vb.jsx)(In.i, {
          onClick: QC,
          children: wC(`${rN}rxKeepSize`)
        }) : (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(JN, {
            on: zC.guide,
            label: wC(`${rN}rxGuide`),
            toggle: () => {
              ZC.toggleGuide()
            }
          }), sN(bC, Gz) && (0, vb.jsx)(JN, {
            on: zC.starter,
            label: wC(`${rN}rxStarter`),
            toggle: () => {
              ZC.toggleStarter()
            }
          }), (0, vb.jsx)(NN, {
            status: bC,
            store: ZC,
            busy: zC.busy.has("fill")
          })]
        })]
      })
    }

    function jN(CC) {
      let {
        need: zC,
        kind: ZC = "reactor",
        explain: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), bC = zC.length <= 3, nC = zC.reduce(((CC, zC) => {
        let [, ZC] = zC;
        return CC + ZC
      }), 0);
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2RxParts", {
          Compact: !bC
        }),
        onClick: () => {
          QC("battery" === ZC ? `${rN}batWhy_store` : `${rN}rxShellHint`)
        },
        children: [nC > 0 && (0, vb.jsx)("span", {
          className: "Baf2RxPartsSize",
          children: 1 === nC ? wC(`${rN}rxBlocksOne`) : wC(`${rN}rxBlocks`, {
            blocks: String(nC)
          })
        }), 0 === zC.length ? (0, vb.jsx)("span", {
          className: "Baf2RxShopHave Ok",
          children: wC("battery" === ZC ? `${rN}batPartsDone` : `${rN}rxShellDone`)
        }) : eo(zC).map((CC => {
          let [zC, ZC, QC] = CC;
          const nC = function(CC) {
            const zC = Ho[CC];
            if (void 0 === zC) return null;
            const [ZC, QC, wC] = Yo[zC].colour.map((CC => Math.round(255 * CC)));
            return `rgb(${ZC}, ${QC}, ${wC})`
          }(zC);
          return (0, vb.jsxs)("span", {
            className: "Baf2RxChip",
            title: wb(wC, zC),
            children: [(0, vb.jsx)("i", {
              className: "Baf2RxShopSwatch",
              style: null === nC ? {
                visibility: "hidden"
              } : {
                background: nC
              },
              title: wC(`${rN}rxShopGhost`)
            }), (0, vb.jsx)("span", {
              className: "Baf2PanelIcon Baf2RxShopIcon",
              children: (0, vb.jsx)(Kw.e, {
                itemName: zC,
                amount: 0
              })
            }), (0, vb.jsx)("span", {
              className: "Baf2RxChipName",
              children: bC ? `${ZC} ${fC=wb(wC,zC),fC.replace(/^(Reactor|Battery) (?=\S)/,"")}` : ZC
            }), QC >= ZC ? (0, vb.jsx)("span", {
              className: "Baf2RxShopHave Ok",
              children: "\u2713"
            }) : (0, vb.jsx)("span", {
              className: "Baf2RxShopHave Short",
              children: bC ? wC(`${rN}rxShopShort`, {
                count: String(ZC - QC)
              }) : "\u2212" + (ZC - QC)
            })]
          }, zC);
          var fC
        }))]
      })
    }
    const yN = "buildAFactory2Game:";

    function LN(CC) {
      var zC, ZC, wC, bC, nC, fC, oC;
      let {
        store: qC,
        close: FC
      } = CC;
      const {
        t: WC
      } = (0, ew.y)(), NC = Dn(), MC = PN(qC), {
        explained: gC,
        explain: SC
      } = nN("baf2RxExplained"), pC = (0, QC.useCallback)(((CC, zC) => {
        SC(WC(CC, zC))
      }), [SC, WC]), PC = null === MC || void 0 === MC ? void 0 : MC.status, GC = !0 === (null === PC || void 0 === PC ? void 0 : PC.baf2BatReadOnly), RC = CC => {
        PC && NC.send(Wz(PC.baf2BatAt, CC))
      }, [AC, xC, JC] = null !== (zC = null === MC || void 0 === MC ? void 0 : MC.dims) && void 0 !== zC ? zC : [0, 0, 0], IC = co(null !== (ZC = null === MC || void 0 === MC ? void 0 : MC.HW) && void 0 !== ZC ? ZC : 0), iC = !0 === (null === PC || void 0 === PC ? void 0 : PC.baf2BatFormed), vC = null !== (wC = null === PC || void 0 === PC ? void 0 : PC.baf2BatStored) && void 0 !== wC ? wC : 0, eC = Math.max(1, null !== (bC = null === PC || void 0 === PC ? void 0 : PC.baf2BatIslandCap) && void 0 !== bC ? bC : 1), hC = Math.min(100, 100 * vC / eC), KC = null === PC || void 0 === PC ? void 0 : PC.baf2BatNetPerS, YC = function(CC, zC, ZC) {
        return ZC > 0 && zC >= ZC ? "full" : void 0 !== CC && CC >= .05 ? "charging" : void 0 !== CC && CC <= -.05 && zC > 0 ? "draining" : "steady"
      }(KC, vC, null !== (nC = null === PC || void 0 === PC ? void 0 : PC.baf2BatIslandCap) && void 0 !== nC ? nC : 0), dC = null !== (fC = null === PC || void 0 === PC ? void 0 : PC.baf2BatMadePerS) && void 0 !== fC ? fC : 0, mC = null !== (oC = null === PC || void 0 === PC ? void 0 : PC.baf2BatUsedPerS) && void 0 !== oC ? oC : 0;
      let HC, EC = {},
        lC = "info";
      if (PC)
        if (iC) "charging" === YC ? (HC = `${yN}batLine_charging`, EC = {
          time: xb(WC, (eC - vC) / Math.max(.05, null !== KC && void 0 !== KC ? KC : 0))
        }, lC = "ok") : "draining" === YC ? (HC = `${yN}batLine_draining`, EC = {
          time: xb(WC, vC / Math.max(.05, -(null !== KC && void 0 !== KC ? KC : 0)))
        }, lC = "warn") : HC = "full" === YC ? `${yN}batLine_full` : vC <= 0 && mC > 0 ? `${yN}batLine_empty` : `${yN}batLine_steady`;
        else {
          var XC;
          const CC = XN({
            left: PC.baf2BatNeed.reduce(((CC, zC) => {
              let [, ZC] = zC;
              return CC + ZC
            }), 0),
            bad: PC.baf2BatBad,
            rods: 1,
            canFill: !0 === PC.baf2BatCanFill,
            melted: !1
          });
          HC = CC.key, EC = {
            count: String(null !== (XC = CC.params.count) && void 0 !== XC ? XC : 0)
          }, lC = CC.tone
        }
      else HC = `${yN}batLine_steady`;
      const cC = Math.max(dC, mC, 1);
      return (0, vb.jsx)(Jn.c, {
        close: FC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel Baf2BatPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2BatTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, vb.jsx)("span", {
                className: "Baf2PanelIcon",
                children: (0, vb.jsx)(Kw.e, {
                  itemName: "Battery Cell",
                  amount: 0
                })
              }), (0, vb.jsxs)("div", {
                children: [(0, vb.jsx)("h2", {
                  id: "baf2BatTitle",
                  children: WC(`${yN}batTitle`)
                }), PC && (0, vb.jsxs)("p", {
                  className: Jw()("Baf2RxSubtitle", {
                    good: iC && "charging" === YC,
                    warn: iC && "draining" === YC
                  }),
                  children: [AC, "\xd7", xC, "\xd7", JC, " \xb7 ", WC(iC ? `${yN}batState_${YC}` : `${yN}rxSubPlanShort`)]
                })]
              })]
            }), (0, vb.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [PC && !GC && (0, vb.jsx)(GN, {
                kind: "battery",
                cap: iC ? IC : void 0,
                busy: null === MC || void 0 === MC ? void 0 : MC.busy.has("apart"),
                apart: () => {
                  qC.tap("apart", (() => {
                    RC("apart")
                  }))
                }
              }), (0, vb.jsx)(In.k, {
                onClick: FC
              })]
            })]
          }), MC && PC && (0, vb.jsxs)("div", {
            className: "Baf2RxBody",
            children: [(0, vb.jsxs)("div", {
              className: Jw()("Baf2RxFlow Baf2BatFlow", {
                Plan: !iC
              }),
              children: [(0, vb.jsx)(QN, {
                kind: "Power",
                label: WC(`${yN}batMade`),
                number: iC ? `\u26a1 ${co(dC)}/s` : "\u2014",
                note: WC(`${yN}batMadeNote`),
                share: iC ? dC / cC : void 0,
                onExplain: () => {
                  pC(`${yN}batWhy_made`)
                }
              }), (0, vb.jsx)(wN, {
                kind: "Power",
                step: iC ? mN(dC, cC) : 0,
                planned: !iC
              }), (0, vb.jsxs)("div", {
                className: "Baf2RxCore Baf2BatCore",
                onClick: () => {
                  pC(`${yN}batWhy_store`)
                },
                children: [(0, vb.jsx)(bN, {
                  max: 100,
                  bands: [{
                    upTo: iC ? hC : 0,
                    kind: "Store"
                  }, {
                    upTo: 100,
                    kind: "Empty"
                  }],
                  ticks: [],
                  now: null
                }), (0, vb.jsxs)("span", {
                  className: "Baf2BatText",
                  children: [(0, vb.jsx)("b", {
                    className: "Baf2BatStored",
                    children: iC ? WC(`${yN}batStoredOf`, {
                      amount: co(vC),
                      cap: co(PC.baf2BatIslandCap)
                    }) : WC(`${yN}batWillHold`, {
                      cap: IC
                    })
                  }), (0, vb.jsx)("span", {
                    children: WC(`${yN}batAdds`, {
                      cap: IC
                    })
                  }), iC && (0, vb.jsx)("small", {
                    children: WC(`${yN}batBreakNote`, {
                      cap: IC
                    })
                  })]
                })]
              }), (0, vb.jsx)(wN, {
                kind: "Power",
                step: iC ? mN(mC, cC) : 0,
                planned: !iC
              }), (0, vb.jsx)(QN, {
                kind: "Power",
                label: WC(`${yN}batUsed`),
                number: iC ? `\u26a1 ${co(mC)}/s` : "\u2014",
                note: WC(`${yN}batUsedNote`),
                share: iC ? mC / cC : void 0,
                onExplain: () => {
                  pC(`${yN}batWhy_used`)
                }
              })]
            }), (0, vb.jsx)(fN, {
              text: WC(HC, EC),
              tone: lC,
              explained: gC
            }), GC ? (0, vb.jsx)("p", {
              className: "Baf2RxHint Baf2RxNotYours",
              children: WC(`${yN}rxNotYours`)
            }) : !iC && (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsxs)("div", {
                className: "Baf2RxCtl Baf2RxBuild",
                children: [(0, vb.jsx)(xN, {
                  kind: "battery",
                  dims: MC.dims,
                  cap: PC.baf2BatSizeCap,
                  disabled: !1,
                  compact: !0,
                  resize: CC => {
                    qC.resize(CC)
                  }
                }), (0, vb.jsx)(JN, {
                  on: MC.guide,
                  label: WC(`${yN}rxGuide`),
                  toggle: () => {
                    qC.toggleGuide()
                  }
                }), PC.baf2BatCanFill && (0, vb.jsx)(In.o, {
                  disabled: !ho("battery", PC.baf2BatNeed) || MC.busy.has("fill"),
                  onClick: () => {
                    qC.tap("fill", (() => {
                      RC("fill")
                    }))
                  },
                  children: WC(`${yN}rxFill`)
                })]
              }), (0, vb.jsx)(jN, {
                need: PC.baf2BatNeed,
                kind: "battery",
                explain: pC
              })]
            })]
          })]
        })
      })
    }
    const UN = "buildAFactory2Game:",
      BN = ["#4d7a12", "#6a9e1a", "#8cc42a", "#acdf3c", "#d2ff63"];

    function ON(CC, zC) {
      return CC === no ? null : zC ? "#4a4440" : CC < oo ? BN[CC - fo] : CC === oo ? "#3fd0f0" : CC === qo ? "#2c3e4c" : "#55585e"
    }

    function kN(CC) {
      let {
        inner: zC,
        looks: ZC,
        layer: QC,
        setLayer: wC,
        glow: bC,
        melted: nC,
        explain: fC
      } = CC;
      const {
        t: oC
      } = (0, ew.y)(), [qC, FC, WC] = zC, NC = Math.max(0, Math.min(FC - 1, QC)), MC = [];
      for (let SC = 0; SC < WC; SC++)
        for (let CC = 0; CC < qC; CC++) {
          var gC;
          const zC = null !== (gC = ZC[(NC * WC + SC) * qC + CC]) && void 0 !== gC ? gC : no,
            QC = ON(zC, nC),
            wC = zC >= fo && zC < oo;
          MC.push(null === QC ? (0, vb.jsx)("circle", {
            cx: CC + .5,
            cy: SC + .5,
            r: .08,
            className: "Baf2RxMapAir"
          }, `${CC},${SC}`) : (0, vb.jsx)("rect", {
            x: CC + .06,
            y: SC + .06,
            width: .88,
            height: .88,
            fill: QC,
            opacity: wC && !nC ? .5 + .5 * bC : 1,
            onClick: CC => {
              CC.stopPropagation();
              const ZC = uN(zC);
              fC(ZC.key, ZC.params)
            }
          }, `${CC},${SC}`))
        }
      return (0, vb.jsxs)("div", {
        className: "Baf2RxMap",
        children: [(0, vb.jsx)("svg", {
          className: Jw()("Baf2RxMapGrid", {
            Melted: nC
          }),
          viewBox: `0 0 ${Math.max(1,qC)} ${Math.max(1,WC)}`,
          shapeRendering: "crispEdges",
          role: "img",
          "aria-label": oC(`${UN}rxWhy_core`),
          onClick: () => {
            fC(`${UN}rxWhy_core`, {})
          },
          children: MC
        }), FC > 1 && (0, vb.jsxs)("div", {
          className: "Baf2RxLayers",
          children: [(0, vb.jsx)("button", {
            type: "button",
            "aria-label": oC(`${UN}rxLayerDown`),
            disabled: NC <= 0,
            onClick: () => {
              wC(NC - 1)
            },
            children: "\u25bc"
          }), (0, vb.jsxs)("span", {
            children: [(0, vb.jsx)("span", {
              className: "HideNarrow",
              children: oC(`${UN}rxLayer`, {
                n: String(NC + 1),
                of: String(FC)
              })
            }), (0, vb.jsx)("span", {
              className: "ShowNarrow",
              children: oC(`${UN}rxLayerShort`, {
                n: String(NC + 1),
                of: String(FC)
              })
            })]
          }), (0, vb.jsx)("button", {
            type: "button",
            "aria-label": oC(`${UN}rxLayerUp`),
            disabled: NC >= FC - 1,
            onClick: () => {
              wC(NC + 1)
            },
            children: "\u25b2"
          })]
        })]
      })
    }
    const VN = "buildAFactory2Game:",
      CM = [{
        upTo: 50,
        kind: "cold"
      }, {
        upTo: Of,
        kind: "warm"
      }, {
        upTo: 100,
        kind: "hot"
      }, {
        upTo: xo,
        kind: "red"
      }],
      zM = [50, Of, 100];

    function ZM(CC) {
      let {
        stats: zC,
        t: ZC,
        explain: QC
      } = CC;
      const wC = No(zC),
        bC = Math.max(1, zC.fuelHeat, zC.cooling, zC.size),
        nC = [
          ["fuel", `${VN}rxBarRods`, zC.fuelHeat],
          ["cooling", `${VN}rxBarCooling`, zC.cooling],
          ["size", `${VN}rxBarSize`, zC.size]
        ];
      return (0, vb.jsxs)("button", {
        type: "button",
        className: "Baf2RxMost",
        onClick: () => {
          QC(`${VN}rxWhy_bars`)
        },
        children: [(0, vb.jsx)("span", {
          className: "Baf2RxMostLine",
          children: ZC(`${VN}rxMost`, {
            amount: co(Math.min(zC.fuelHeat, zC.cooling, zC.size))
          })
        }), (0, vb.jsx)("span", {
          className: "Baf2RxMostBars",
          children: nC.map((CC => {
            let [zC, QC, nC] = CC;
            return (0, vb.jsxs)("span", {
              className: Jw()("Baf2RxMostBar", zC, {
                Low: zC === wC
              }),
              children: [(0, vb.jsx)("small", {
                children: ZC(QC)
              }), (0, vb.jsx)("i", {
                children: (0, vb.jsx)("b", {
                  style: {
                    width: 100 * nC / bC + "%"
                  }
                })
              })]
            }, zC)
          }))
        })]
      })
    }

    function QM(CC) {
      var zC;
      let {
        view: ZC,
        heat: wC,
        settle: bC,
        settleLine: nC,
        settleBad: fC,
        explain: oC
      } = CC;
      const {
        t: qC
      } = (0, ew.y)(), {
        status: FC
      } = ZC, WC = FC.baf2RxAt.join(","), [NC, MC] = (0, QC.useState)((() => cN(ZC.inner)));
      (0, QC.useEffect)((() => {
        MC(cN(ZC.inner))
      }), [WC, ZC.inner[1]]);
      const gC = null !== (zC = ZC.plan) && void 0 !== zC ? zC : Io(FC),
        SC = ZC.plan ? ZC.plan.powerPerUnit : FC.baf2RxStats[8],
        pC = null === wC ? null : "alarm" === (PC = Ao(FC)) ? "red" : "hot" === PC ? "hot" : "warm" === PC ? "warm" : "cold";
      var PC;
      const GC = !FC.baf2RxFormed && function(CC, zC) {
          return 0 !== (CC.baf2RxFlags & zC)
        }(FC, gz),
        RC = FC.baf2RxDamage,
        AC = FC.baf2RxDamageTrend;
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2RxCore", null !== pC && void 0 !== pC ? pC : "plan"),
        children: [(0, vb.jsxs)("div", {
          className: "Baf2RxCoreTop",
          children: [(0, vb.jsx)(kN, {
            inner: ZC.inner,
            looks: ZC.looks,
            layer: NC,
            setLayer: MC,
            glow: FC.baf2RxFormed ? FC.baf2RxThrottle / 100 : 1,
            melted: GC,
            explain: oC
          }), (0, vb.jsxs)("button", {
            type: "button",
            className: "Baf2RxHeatText",
            onClick: () => {
              oC(`${VN}rxWhy_heat`)
            },
            children: [null !== wC ? (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)("b", {
                children: qC(`${VN}rxHeatPct`, {
                  pct: String(wC)
                })
              }), (0, vb.jsx)("span", {
                className: Jw()("Baf2RxBand", pC),
                children: qC(`${VN}rxBand_${pC}`)
              })]
            }) : (0, vb.jsx)("b", {
              children: qC(`${VN}rxHeat`)
            }), null !== nC && (0, vb.jsx)("span", {
              className: Jw()("Baf2RxSettle", {
                Bad: fC
              }),
              children: nC
            }), RC >= 1 && (0, vb.jsxs)("span", {
              className: Jw()("Baf2RxDamage", AC),
              children: [qC(`${VN}rxDamageLine`, {
                pct: String(RC)
              }), " \xb7 ", qC(`${VN}rxDamage_${AC}`), (0, vb.jsx)("i", {
                children: (0, vb.jsx)("b", {
                  style: {
                    width: `${Math.min(100,RC)}%`
                  }
                })
              })]
            })]
          }), (0, vb.jsx)(bN, {
            max: xo,
            bands: CM,
            ticks: zM,
            now: wC,
            settle: bC,
            settleTone: fC ? "bad" : null,
            onExplain: () => {
              oC(`${VN}rxWhy_heat`)
            }
          })]
        }), (0, vb.jsx)(ZM, {
          stats: gC,
          t: qC,
          explain: oC
        }), SC > 0 && (0, vb.jsx)("button", {
          type: "button",
          className: "Baf2RxPerPellet",
          onClick: () => {
            oC(`${VN}rxWhy_perPellet`)
          },
          children: qC(`${VN}rxPerPellet`, {
            amount: co(SC)
          })
        })]
      })
    }

    function wM(CC, zC) {
      var ZC;
      if (!CC.baf2RxStore) return {
        note: zC(`${VN}rxUpTo`, {
          amount: co(CC.baf2RxMaxNow)
        }),
        share: void 0
      };
      const [QC, wC] = CC.baf2RxStore, bC = wC > 0 ? QC / wC : 0, nC = String(Math.floor(100 * bC)), fC = null !== (ZC = CC.baf2RxStoreNetPerS) && void 0 !== ZC ? ZC : 0, oC = function(CC) {
        var zC, ZC;
        const [QC, wC] = null !== (zC = CC.baf2RxStore) && void 0 !== zC ? zC : [0, 0], bC = null !== (ZC = CC.baf2RxStoreNetPerS) && void 0 !== ZC ? ZC : 0;
        return wC > 0 && QC >= wC - 1 ? "running" === CC.baf2RxState ? `${IN}rxStoreFull` : `${IN}rxStoreFullOnly` : bC > .05 ? `${IN}rxStoreLine` : bC < -.05 ? "running" === CC.baf2RxState ? `${IN}rxStoreUsesMore` : `${IN}rxStoreDraining` : `${IN}rxStorePct`
      }(CC);
      return {
        note: zC(oC, oC === `${VN}rxStoreLine` ? {
          pct: nC,
          time: xb(zC, (wC - QC) / fC)
        } : {
          pct: nC
        }),
        share: bC
      }
    }

    function bM(CC) {
      let {
        view: zC,
        explain: ZC,
        preview: QC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), {
        status: bC
      } = zC, nC = Zo(wo(...zC.dims)), fC = dN(bC), oC = Math.min(Math.round(bC.baf2RxFuel), nC.fuel), qC = "running" === bC.baf2RxState, FC = qC ? mN(bC.baf2RxOut, bC.baf2RxMaxNow) : 0, WC = function(CC, zC, ZC) {
        const QC = hN(CC),
          wC = "cryo" === QC.NM,
          bC = ZC ? ZC.coolantSecs : QC.pct >= 100 && CC.baf2RxOut >= 1 ? YN(CC, CC.baf2RxThrottle).coolantSecs : null;
        let nC, fC = !1;
        if (QC.pct < 100) {
          const ZC = 1 === QC.makersShort,
            bC = !wC && CC.baf2RxCryoOpen ? "OrCryo" : "";
          nC = QC.makersShort > 0 ? zC(wC ? `${VN}rxCryoAddMixer${ZC?"":"s"}` : `${VN}rxWaterAddCondenser${ZC?"":"s"}${bC}`, {
            count: String(QC.makersShort)
          }) : zC(`${VN}rxWaterNeeds`, {
            rate: AN(QC.needPerS)
          })
        } else if (null !== bC) nC = zC(`${VN}rxWaterRunsOut`, {
          time: xb(zC, bC)
        });
        else if (QC.waterBeside > 0) nC = zC(`${VN}rxCryoPlusWater`, {
          rate: AN(QC.waterBeside)
        });
        else {
          const CC = function(CC) {
            return CC.inPerS <= 0 ? "rxWaterNoSupply" : CC.stored > 0 ? "rxWaterOkStored" : "rxWaterOk"
          }(QC);
          fC = "rxWaterNoSupply" === CC, nC = zC(`${VN}${CC}`, {
            amount: co(QC.stored)
          })
        }
        return {
          kind: wC ? "Cryo" : "Water",
          label: zC(wC ? `${VN}rxCryo` : `${VN}rxWater`),
          number: `${AN(QC.usePerS)}/s`,
          preview: ZC ? `${AN(ZC.coolPerS)}/s` : null,
          note: nC,
          tone: "noWater" === CC.baf2RxState ? "danger" : fC ? "warn" : (oC = QC.pct, qC = bC, oC < 100 ? "danger" : null === qC ? null : qC < 300 ? "danger" : "warn"),
          share: QC.pct / 100,
          why: wC ? `${VN}rxWhy_cryo` : `${VN}rxWhy_water`,
          short: QC.pct < 100
        };
        var oC, qC
      }(bC, wC, QC), NC = Ko(bC, nC.waste, fC), MC = wM(bC, wC), gC = YN(bC, bC.baf2RxTarget), SC = qC && Math.abs(gC.settle - bC.baf2RxHeat) >= 3, pC = QC ? QC.pelletsPerMin / 60 : null;
      return (0, vb.jsxs)("div", {
        className: "Baf2RxFlow",
        children: [(0, vb.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vb.jsx)(QN, {
            kind: "Fuel",
            label: wC(`${VN}rxFuel`),
            number: String(oC),
            preview: null !== pC && pC > 0 && bC.baf2RxFuel > 0 ? xb(wC, bC.baf2RxFuel / pC) : null,
            note: bC.baf2RxFuel <= 0 ? wC(`${VN}rxFuelEmpty`) : fC > 0 ? wC(`${VN}rxFuelLeft`, {
              time: xb(wC, bC.baf2RxFuel / fC)
            }) : wC(1 === oC ? `${VN}rxFuelPellet` : `${VN}rxFuelPellets`),
            tone: "noFuel" === bC.baf2RxState ? "danger" : bC.baf2RxFuel < 2 ? "warn" : null,
            share: bC.baf2RxFuel / nC.fuel,
            onExplain: () => {
              ZC(`${VN}rxWhy_fuel`)
            }
          }), (0, vb.jsx)(QN, {
            kind: WC.kind,
            label: WC.label,
            number: WC.number,
            preview: WC.preview,
            note: WC.note,
            tone: WC.tone,
            share: WC.share,
            onExplain: () => {
              ZC(WC.why)
            }
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vb.jsx)(wN, {
            kind: "Fuel",
            step: FC,
            short: "noFuel" === bC.baf2RxState
          }), (0, vb.jsx)(wN, {
            kind: WC.kind,
            step: FC,
            short: WC.short || "noWater" === bC.baf2RxState
          })]
        }), (0, vb.jsx)(QM, {
          view: zC,
          heat: bC.baf2RxHeat,
          settle: Math.min(xo, gC.settle),
          settleLine: SC ? wC(`${VN}rxHeatSettles`, {
            pct: String(Math.round(gC.settle)),
            time: xb(wC, gC.settleS)
          }) : null,
          settleBad: gC.settle > 100,
          explain: ZC
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vb.jsx)(wN, {
            kind: "Power",
            step: FC
          }), (0, vb.jsx)(wN, {
            kind: "Waste",
            step: qC && bC.baf2RxFuel - bC.baf2RxPu > 0 ? FC : 0,
            short: NC.full
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vb.jsx)(QN, {
            kind: "Power",
            label: wC(`${VN}rxPowerOut`),
            number: `\u26a1 ${co(bC.baf2RxOut)}/s`,
            preview: QC ? co(QC.out) : null,
            note: MC.note,
            share: MC.share,
            onExplain: () => {
              ZC(`${VN}rxWhy_power`)
            }
          }), (0, vb.jsx)(QN, {
            kind: "Waste",
            label: wC(`${VN}rxWaste`),
            number: `${Math.floor(bC.baf2RxWaste)}/${nC.waste}`,
            note: NC.full ? wC(`${VN}rxWasteFull`) : null !== NC.fullInS ? wC(`${VN}rxWasteFullIn`, {
              time: xb(wC, NC.fullInS)
            }) : wC(`${VN}rxWasteSpent`),
            tone: "wasteFull" === bC.baf2RxState ? "danger" : NC.full ? "warn" : null,
            share: bC.baf2RxWaste / nC.waste,
            onExplain: () => {
              ZC(`${VN}rxWhy_waste`)
            }
          })]
        })]
      })
    }

    function nM(CC) {
      let {
        view: zC,
        explain: ZC
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = zC.plan;
      if (!wC) return null;
      const bC = wC.fuelHeat <= 0 ? null : wC.cooling > 0 ? Math.min(xo, 100 * wC.fuelHeat / wC.cooling) : xo,
        nC = QC(`${VN}rxPlanAtFull`);
      return (0, vb.jsxs)("div", {
        className: "Baf2RxFlow Plan",
        children: [(0, vb.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vb.jsx)(QN, {
            kind: "Fuel",
            label: QC(`${VN}rxFuel`),
            number: QC(`${VN}rxPlanPerMin`, {
              amount: uo(wC.pelletsPerMin)
            }),
            note: QC(`${VN}rxPlanPellets`),
            onExplain: () => {
              ZC(`${VN}rxWhy_fuel`)
            }
          }), (0, vb.jsx)(QN, {
            kind: "Water",
            label: QC(`${VN}rxWater`),
            number: `${AN(wC.waterPerS)}/s`,
            note: zC.status.baf2RxCryoOpen && wC.waterPerS > 0 ? QC(`${VN}rxPlanOrCryo`, {
              rate: AN(Po(wC, kC.f) * kC.i)
            }) : nC,
            onExplain: () => {
              ZC(`${VN}rxWhy_water`)
            }
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vb.jsx)(wN, {
            kind: "Fuel",
            step: 0,
            planned: !0
          }), (0, vb.jsx)(wN, {
            kind: "Water",
            step: 0,
            planned: !0
          })]
        }), (0, vb.jsx)(QM, {
          view: zC,
          heat: null,
          settle: bC,
          settleLine: null === bC ? null : QC(`${VN}rxPlanHeat`, {
            pct: String(Math.round(bC))
          }),
          settleBad: null !== bC && bC > 100,
          explain: ZC
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxPipes",
          children: [(0, vb.jsx)(wN, {
            kind: "Power",
            step: 0,
            planned: !0
          }), (0, vb.jsx)(wN, {
            kind: "Waste",
            step: 0,
            planned: !0
          })]
        }), (0, vb.jsxs)("div", {
          className: "Baf2RxLanes",
          children: [(0, vb.jsx)(QN, {
            kind: "Power",
            label: QC(`${VN}rxPowerOut`),
            number: `\u26a1 ${co(wC.max)}/s`,
            note: nC,
            onExplain: () => {
              ZC(`${VN}rxWhy_power`)
            }
          }), (0, vb.jsx)(QN, {
            kind: "Waste",
            label: QC(`${VN}rxWaste`),
            number: QC(`${VN}rxPlanPerMin`, {
              amount: uo(wC.pelletsPerMin)
            }),
            note: QC(`${VN}rxWasteSpent`),
            onExplain: () => {
              ZC(`${VN}rxWhy_waste`)
            }
          })]
        })]
      })
    }
    const fM = "buildAFactory2Game:",
      oM = {
        key: `${fM}rxWaiting`,
        params: {},
        tone: "info"
      };

    function qM(CC, zC) {
      return 0 !== (CC.baf2RxFlags & zC)
    }

    function FM(CC) {
      var zC, ZC;
      let {
        store: wC,
        close: bC
      } = CC;
      const {
        t: nC
      } = (0, ew.y)(), fC = PN(wC), {
        explained: oC,
        hinting: qC,
        explain: FC,
        explainOnce: WC
      } = nN("baf2RxExplained"), NC = (0, QC.useCallback)(((CC, zC) => {
        FC(nC(CC, zC))
      }), [FC, nC]), MC = (0, QC.useCallback)(((CC, zC) => {
        WC(CC, nC(CC, zC))
      }), [WC, nC]), [gC, SC] = (0, QC.useState)(!1), [pC, PC] = (0, QC.useState)(!1), GC = null === fC || void 0 === fC ? void 0 : fC.status, RC = null === GC || void 0 === GC ? void 0 : GC.baf2RxAt.join(","), AC = !0 === (null === GC || void 0 === GC ? void 0 : GC.baf2RxFormed);
      (0, QC.useEffect)((() => {
        PC(!1), SC(!1)
      }), [RC, AC]), (0, QC.useEffect)((() => (wC.opened(), () => {
        wC.closed()
      })), [wC]);
      const xC = void 0 !== GC && qM(GC, Pz),
        JC = GC ? AC ? Ao(GC) : null !== fC && void 0 !== fC && fC.plan ? function(CC, zC) {
          if (CC <= 0) return "off";
          if (zC <= 0) return "alarm";
          const ZC = 100 * CC / zC;
          return ZC < 50 ? "calm" : ZC < Mo ? "warm" : ZC <= 100 ? "hot" : "alarm"
        }(fC.plan.fuelHeat, fC.plan.cooling) : "off" : "off",
        IC = GC ? Jo(GC) : null,
        iC = fC ? fC.waiting ? oM : AC ? lN(fC.status) : function(CC) {
          var zC, ZC;
          const {
            status: QC
          } = CC;
          return XN({
            left: QC.baf2RxNeed.reduce(((CC, zC) => {
              let [, ZC] = zC;
              return CC + ZC
            }), 0),
            bad: QC.baf2RxBad,
            rods: null !== (zC = null === (ZC = CC.plan) || void 0 === ZC ? void 0 : ZC.rods) && void 0 !== zC ? zC : 0,
            canFill: qM(QC, Sz),
            melted: qM(QC, gz),
            idle: CC.looks.reduce(((CC, zC) => CC + (zC === qo ? 1 : 0)), 0)
          })
        }(fC) : null,
        vC = qC && null !== iC && ("ok" === iC.tone || "info" === iC.tone),
        eC = GC ? function(CC) {
          const zC = 0 !== (CC.baf2RxFlags & Nz),
            ZC = CC.baf2RxHeat < Vf;
          return 0 !== (CC.baf2RxFlags & gz) || ZC && (zC || !CC.baf2RxFormed) ? null : CC.baf2RxFormed && !zC ? {
            key: `${Ro}rxApartScram`,
            params: {}
          } : {
            key: `${Ro}rxApartCooling`,
            params: {
              pct: String(Vf)
            }
          }
        }(GC) : null,
        [hC, KC, YC] = null !== (zC = null === fC || void 0 === fC ? void 0 : fC.dims) && void 0 !== zC ? zC : [0, 0, 0],
        dC = `${hC}\xd7${KC}\xd7${YC}`;
      return (0, vb.jsx)(Jn.c, {
        close: bC,
        togglePointerLock: !1,
        className: "Baf2PanelOverlay Baf2RxOverlay",
        children: (0, vb.jsxs)("section", {
          className: "Baf2Panel Baf2RxPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "baf2RxTitle",
          children: [(0, vb.jsxs)("header", {
            className: "Baf2PanelHeader",
            children: [(0, vb.jsxs)("div", {
              className: "Baf2RxTitle",
              children: [(0, vb.jsx)(RN, {
                mood: JC
              }), (0, vb.jsxs)("div", {
                children: [(0, vb.jsx)("h2", {
                  id: "baf2RxTitle",
                  children: nC(`${fM}rxTitle`)
                }), fC && (0, vb.jsxs)("p", {
                  className: Jw()("Baf2RxSubtitle", AC && (null === IC || void 0 === IC ? void 0 : IC.tone)),
                  children: [AC && !xC ? (0, vb.jsxs)("button", {
                    type: "button",
                    className: "Baf2RxSizeButton",
                    "aria-label": nC(`${fM}rxChangeSize`),
                    onClick: () => {
                      if (!GC) return;
                      const CC = qM(GC, Nz);
                      var zC;
                      (zC = {
                        scram: CC,
                        heat: GC.baf2RxHeat
                      }).scram && zC.heat < Vf ? SC(!0) : NC(CC ? `${fM}rxResizeCooling` : `${fM}rxResizeHot`, {
                        pct: String(Vf)
                      })
                    },
                    children: [dC, " \u270e"]
                  }) : dC, " \xb7 ", nC(AC ? null !== (ZC = null === IC || void 0 === IC ? void 0 : IC.label) && void 0 !== ZC ? ZC : `${fM}rxState_running` : `${fM}rxSubPlanShort`)]
                })]
              })]
            }), (0, vb.jsxs)("div", {
              className: "Baf2RxHeadActions",
              children: [fC && !xC && (0, vb.jsx)(GN, {
                kind: "reactor",
                busy: fC.busy.has("apart"),
                whyNot: eC ? () => {
                  NC(eC.key, eC.params)
                } : null,
                apart: () => {
                  wC.tap("apart", (() => {
                    wC.send("apart")
                  }))
                }
              }), (0, vb.jsx)(In.k, {
                onClick: bC
              })]
            })]
          }), fC && iC && (0, vb.jsxs)("div", {
            className: "Baf2RxBody",
            children: [AC ? (0, vb.jsx)(bM, {
              view: fC,
              explain: NC,
              preview: KN(fC.status)
            }) : (0, vb.jsx)(nM, {
              view: fC,
              explain: NC
            }), (0, vb.jsx)(fN, {
              text: vC ? `${HN(nC,iC)} ${nC(`${fM}rxTapHint`)}` : HN(nC, iC),
              tone: iC.tone,
              explained: oC
            }), xC ? (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)("p", {
                className: "Baf2RxHint Baf2RxNotYours",
                children: nC(`${fM}rxNotYours`)
              }), (0, vb.jsx)(MN, {
                status: fC.status,
                store: wC,
                readOnly: !0
              })]
            }) : AC && !pC ? (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)(tN, {
                view: fC,
                store: wC,
                explain: NC,
                explainOnce: MC
              }), void 0 !== fC.status.baf2RxLayout && FN(fC.status) && (0, vb.jsxs)("div", {
                className: "Baf2RxLayoutRow",
                children: [(0, vb.jsx)(MN, {
                  status: fC.status,
                  store: wC,
                  readOnly: !1,
                  bare: !0
                }), (0, vb.jsx)(NN, {
                  status: fC.status,
                  store: wC,
                  busy: fC.busy.has("fill")
                })]
              })]
            }) : (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)(DN, {
                view: fC,
                store: wC,
                keepSize: AC ? () => {
                  PC(!1)
                } : void 0
              }), vo(fC.dims, fC.status.baf2RxDims) && (0, vb.jsx)(jN, {
                need: fC.status.baf2RxNeed,
                explain: NC
              }), (0, vb.jsx)(MN, {
                status: fC.status,
                store: wC,
                readOnly: !1
              })]
            }), gC && (0, vb.jsx)(pN, {
              id: "baf2ResizeTitle",
              title: `${fM}rxResizeConfirmTitle`,
              body: `${fM}rxResizeConfirmBody`,
              yes: `${fM}rxChangeSize`,
              cancel: () => {
                SC(!1)
              },
              confirm: () => {
                SC(!1), PC(!0)
              }
            })]
          })]
        })
      })
    }
    class WM {
      constructor() {
        this.view = null, this.listeners = new Set
      }
      set(CC) {
        this.view = CC;
        for (const zC of this.listeners) zC()
      }
      get() {
        return this.view
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
    }

    function NM(CC) {
      let {
        commands: zC,
        store: ZC,
        power: wC,
        water: bC,
        reactor: nC,
        battery: fC,
        collider: oC,
        terminal: qC,
        quests: FC,
        tutorial: WC,
        close: NC,
        leave: MC,
        askIslands: gC,
        showCore: SC,
        openSocial: pC
      } = CC;
      const {
        userContext: PC
      } = (0, rf.e)(), GC = uf.featureFlags.useSocialFeatures && PC.isLoggedIn(), [RC, AC] = (0, QC.useState)((() => ZC.get()));
      (0, QC.useEffect)((() => ZC.subscribe((() => {
        AC(ZC.get())
      }))), [ZC]);
      const xC = "islands" === (null === RC || void 0 === RC ? void 0 : RC.kind) ? RC.backToCore : void 0;
      return (0, vb.jsxs)(tn.Provider, {
        value: zC,
        children: ["core" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(JW, {
          view: RC.core,
          close: NC,
          askIslands: gC
        }), "dropMap" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(eW, {
          message: RC.dropMap,
          quests: FC,
          close: NC,
          leave: MC
        }), "islands" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(DW, {
          message: RC.islands,
          arrivedAtMs: RC.arrivedAtMs,
          close: xC ? () => {
            SC(xC)
          } : NC,
          leave: MC,
          openSocial: GC ? pC : null
        }), "quests" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(TF, {
          store: FC,
          tutorial: WC,
          close: NC
        }), "transfer" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(qF, {
          message: RC.transfer,
          arrivedAtMs: RC.arrivedAtMs,
          close: NC,
          leave: MC
        }), "power" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(Hn, {
          store: wC,
          close: NC
        }), "water" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(Gf, {
          store: bC,
          close: NC
        }), "reactor" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(FM, {
          store: nC,
          close: NC
        }), "battery" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(LN, {
          store: fC,
          close: NC
        }), "collider" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(Iq, {
          store: oC,
          close: NC
        }), "terminal" === (null === RC || void 0 === RC ? void 0 : RC.kind) && (0, vb.jsx)(ZN, {
          store: qC,
          close: NC,
          send: CC => {
            zC.send(CC)
          }
        })]
      })
    }
    var MM = ZC(38319);

    function gM(CC, zC) {
      return CC.distSq - zC.distSq
    }
    class SM {
      constructor() {
        this.list = [], this.pool = []
      }
      add(CC, zC, ZC, QC) {
        let wC = this.pool[this.list.length];
        wC || (wC = {
          x: 0,
          y: 0,
          distSq: 0,
          element: zC,
          liftRem: ZC,
          dot: QC
        }, this.pool.push(wC)), wC.x = CC.x, wC.y = CC.y, wC.distSq = CC.distSq, wC.element = zC, wC.liftRem = ZC, wC.dot = QC, this.list.push(wC)
      }
    }
    class pM {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.hud = CC, this.sizes = new WeakMap, this.observer = new ResizeObserver((CC => {
          this.remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
          for (const zC of CC) {
            const CC = zC.borderBoxSize[0];
            "dot" !== zC.target.dataset.crowded && 0 !== CC.inlineSize && 0 !== CC.blockSize && this.sizes.set(zC.target, {
              width: CC.inlineSize,
              height: CC.blockSize
            })
          }
        })), this.remPx = 16, this.lM = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.mG = () => {
          this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
        }, window.addEventListener("resize", this.mG)
      }
      observe(CC) {
        this.observer.observe(CC)
      }
      unobserve(CC) {
        this.observer.unobserve(CC)
      }
      run(CC) {
        const zC = CC.list;
        zC.sort(gM);
        const ZC = this.pxPerVw,
          QC = this.pxPerVh;
        this.lM.length = 0, this.hud && this.lM.push(...this.hud.boxes(performance.now()));
        for (const bC of zC) {
          var wC;
          const CC = this.sizes.get(bC.element);
          let zC = "no";
          if (CC && CC.width > 0) {
            const wC = bC.x * ZC,
              nC = bC.y * QC - bC.liftRem * this.remPx;
            this.fit(wC, nC, CC.width, CC.height) || (zC = bC.dot && this.fit(wC, nC, 1.2 * this.remPx, 1.4 * this.remPx) ? "dot" : "hidden")
          }(null !== (wC = bC.element.dataset.crowded) && void 0 !== wC ? wC : "no") !== zC && ("no" === zC ? delete bC.element.dataset.crowded : bC.element.dataset.crowded = zC), "hidden" !== zC && (0, MM.e)(bC.element, bC.x, bC.y)
        }
        zC.length = 0
      }
      fit(CC, zC, ZC, QC) {
        const wC = CC - ZC / 2,
          bC = CC + ZC / 2,
          nC = zC - QC,
          fC = this.lM;
        for (let oC = 0; oC < fC.length; oC += 4)
          if (wC < fC[oC + 1] - 2 && bC > fC[oC] + 2 && nC < fC[oC + 3] - 2 && zC > fC[oC + 2] + 2) return !1;
        return fC.push(wC, bC, nC, zC), !0
      }
      dispose() {
        this.observer.disconnect(), window.removeEventListener("resize", this.mG)
      }
    }
    const PM = ["Baf2QuestTracker", "BottomLeftIcons", "TopRightIconsContainer"];
    class GM {
      constructor() {
        this.cards = PM.map((CC => document.getElementsByClassName(CC))), this.watched = PM.map((() => null)), this.hud = null, this.list = [], this.stale = !0, this.refreshedAt = -1 / 0, this.onChange = () => {
          this.stale = !0
        }, this.sizes = new ResizeObserver(this.onChange), this.hudStyle = new MutationObserver(this.onChange), window.addEventListener("resize", this.onChange)
      }
      boxes(CC) {
        CC - this.refreshedAt > 1e3 && (this.refreshedAt = CC, this.stale = !0);
        for (let ZC = 0; ZC < this.cards.length; ZC++) {
          var zC;
          const CC = null !== (zC = this.cards[ZC][0]) && void 0 !== zC ? zC : null;
          CC !== this.watched[ZC] && this.watch(ZC, CC)
        }
        return this.stale && (this.stale = !1, this.measure()), this.list
      }
      dispose() {
        for (let CC = 0; CC < this.watched.length; CC++) this.watch(CC, null);
        this.sizes.disconnect(), window.removeEventListener("resize", this.onChange)
      }
      measure() {
        const CC = this.list;
        CC.length = 0;
        for (const zC of this.watched) {
          if (!zC || zC.closest(".NoRoom")) continue;
          const ZC = zC.getBoundingClientRect();
          let QC = ZC.top,
            wC = ZC.bottom;
          if (zC === this.watched[0] && this.hud) {
            const CC = this.hud.getBoundingClientRect();
            QC = Math.max(QC, CC.top), wC = Math.min(wC, CC.bottom)
          }
          ZC.width > 0 && wC > QC && CC.push(ZC.left, ZC.right, QC, wC)
        }
      }
      watch(CC, zC) {
        const ZC = this.watched[CC];
        var QC, wC;
        (ZC && this.sizes.unobserve(ZC), this.watched[CC] = zC, this.stale = !0, zC && this.sizes.observe(zC), 0 === CC) && (null === (QC = this.hud) || void 0 === QC || QC.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.hud = null !== (wC = null === zC || void 0 === zC ? void 0 : zC.closest(".Baf2QuestHud")) && void 0 !== wC ? wC : null, this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        })))
      }
    }
    const RM = [0, 0, 0],
      AM = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function xM(CC, zC, ZC, QC, wC, bC) {
      let [nC, fC, oC] = QC;
      const qC = (nC + .5 - ZC[0]) ** 2 + (fC - ZC[1]) ** 2 + (oC + .5 - ZC[2]) ** 2;
      let FC = null;
      qC <= bC ** 2 && (RM[0] = nC + .5, RM[1] = fC + wC, RM[2] = oC + .5, FC = zC.projectWorldPosToViewport(RM));
      const WC = null !== FC && FC.x > -5 && FC.x < 105 && FC.y > -5 && FC.y < 105;
      return (0, MM.i)(CC, !WC), WC ? (AM.x = FC.x, AM.y = FC.y, AM.distSq = qC, AM) : null
    }
    class JM {
      constructor(CC) {
        this.onElement = CC, this.markers = [], this.keys = new Set, this.elements = new Map, this.refs = new Map, this.listeners = new Set
      }
      set(CC) {
        const zC = [];
        for (let ZC = 0; ZC + 4 < CC.length; ZC += 5) {
          const QC = [CC[ZC], CC[ZC + 1], CC[ZC + 2]];
          zC.push({
            key: QC.join(","),
            pos: QC,
            status: Qw[CC[ZC + 3]],
            kind: hz[CC[ZC + 4]]
          })
        }
        this.markers = zC, this.keys = new Set(zC.map((CC => {
          let {
            key: zC
          } = CC;
          return zC
        }))), this.notify()
      }
      covers(CC) {
        return this.keys.has(CC)
      }
      get() {
        return this.markers
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      bind(CC) {
        let zC = this.refs.get(CC);
        return zC || (zC = zC => {
          const ZC = this.elements.get(CC);
          var QC, wC;
          ZC && (null === (QC = this.onElement) || void 0 === QC || QC.call(this, ZC, !1));
          zC ? (this.elements.set(CC, zC), null === (wC = this.onElement) || void 0 === wC || wC.call(this, zC, !0)) : (this.elements.delete(CC), this.refs.delete(CC))
        }, this.refs.set(CC, zC)), zC
      }
      onAfterRender(CC, zC, ZC) {
        for (const QC of this.markers) {
          const wC = this.elements.get(QC.key);
          if (!wC) continue;
          const bC = xM(wC, CC, zC, QC.pos, 1.05, 24);
          bC && ZC.add(bC, wC, .45, !0)
        }
      }
      notify() {
        for (const CC of this.listeners) CC()
      }
    }
    const IM = {
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
    const iM = (0, QC.memo)((function(CC) {
        let {
          status: zC,
          kind: ZC,
          bindRef: QC
        } = CC;
        const {
          t: wC
        } = (0, ew.y)(), bC = function(CC, zC) {
          var ZC;
          if ("noFuel" === CC) {
            var QC, wC;
            const CC = null === (QC = Ez[zC]) || void 0 === QC || null === (wC = QC.fuels) || void 0 === wC ? void 0 : wC.find((CC => QZ.includes(CC)));
            return null !== CC && void 0 !== CC ? CC : IM.noFuel
          }
          return void 0 !== (null === (ZC = Ez[zC]) || void 0 === ZC ? void 0 : ZC.cryoMade) ? "noOutlet" === CC ? "Fluid Pipe" : "noInput" === CC ? "Biomass" : IM[CC] : IM[CC]
        }(zC, ZC);
        return (0, vb.jsxs)("div", {
          className: Jw()("Baf2StallMarker", zC),
          ref: QC,
          hidden: !0,
          children: [bC && (0, vb.jsx)("div", {
            className: "Baf2StallMarkerIcon",
            children: (0, vb.jsx)(Kw.e, {
              itemName: bC,
              amount: 0
            })
          }), (0, vb.jsx)("span", {
            className: "Baf2StallMarkerBang",
            children: "notTaught" === zC ? "?" : "!"
          }), (0, vb.jsx)("span", {
            className: "Baf2StallMarkerTag SmallTextBold",
            children: wC(`buildAFactory2Game:stallTag_${zC}`)
          })]
        })
      })),
      vM = (0, QC.memo)((function(CC) {
        let {
          controller: zC
        } = CC;
        const [ZC, wC] = (0, QC.useState)((() => zC.get()));
        return (0, QC.useEffect)((() => (wC(zC.get()), zC.subscribe((() => {
          wC(zC.get())
        })))), [zC]), (0, vb.jsx)("div", {
          className: "Baf2StallMarkers",
          children: ZC.map((CC => (0, vb.jsx)(iM, {
            status: CC.status,
            kind: CC.kind,
            bindRef: zC.bind(CC.key)
          }, CC.key)))
        })
      })),
      eM = SZ.k + 150;
    class hM {
      constructor() {
        this.offset = null, this.sampledAt = 0
      }
      sample(CC, zC) {
        const ZC = zC - CC;
        null === this.offset || ZC < this.offset ? this.offset = ZC : this.offset = Math.min(ZC, this.offset + .02 * (zC - this.sampledAt)), this.sampledAt = zC
      }
      toLocal(CC) {
        var zC;
        return CC + (null !== (zC = this.offset) && void 0 !== zC ? zC : 0) + eM
      }
    }
    var KM = ZC(38326);
    const YM = 15 * Math.PI / 180,
      dM = Math.SQRT2,
      mM = [4, 2];

    function HM(CC, zC) {
      const ZC = [1 / 0, 1 / 0, 1 / 0],
        QC = [-1 / 0, -1 / 0, -1 / 0];
      for (const oC of CC)
        for (let CC = 0; CC < 3; CC++) ZC[CC] = Math.min(ZC[CC], oC[CC]), QC[CC] = Math.max(QC[CC], oC[CC]);
      const wC = (ZC[0] + QC[0]) / 2,
        bC = (ZC[1] + QC[1]) / 2,
        nC = (ZC[2] + QC[2]) / 2;
      let fC = 0;
      for (const oC of CC) fC = Math.max(fC, Math.hypot(oC[0] - wC, oC[1] - bC, oC[2] - nC));
      return {
        x: wC,
        y: bC,
        z: nC,
        r: fC + zC
      }
    }

    function EM(CC, zC, ZC) {
      const QC = zC.x - CC.x,
        wC = zC.y - CC.y,
        bC = zC.z - CC.z,
        nC = Math.sqrt(QC * QC + wC * wC + bC * bC);
      if (nC <= zC.r + 8) return 1;
      const fC = zC.r / nC,
        oC = Math.sqrt(1 - fC * fC),
        qC = oC < -CC.cosHalf,
        FC = (QC * CC.dx + wC * CC.dy + bC * CC.dz) / nC;
      if (!qC && FC < CC.cosHalf * oC - CC.sinHalf * fC) return 0;
      const WC = ZC * dM * CC.frameMs * CC.pxPerBlock / (nC - zC.r);
      for (let NC = 0; NC < mM.length; NC++)
        if (WC * mM[NC] <= 1) return mM[NC];
      return 1
    }

    function lM(CC, zC) {
      return {
        name: CC,
        at: zC,
        kind: null,
        slot: -1,
        hidden: !0,
        drawn: NaN
      }
    }
    const XM = [0, 0, 0];

    function cM(CC, zC, ZC) {
      let [, QC, wC, bC, nC, fC] = zC;
      const oC = SZ.h * (null !== nC && void 0 !== nC ? nC : 1),
        qC = [];
      for (let MC = 0; MC < QC.length; MC += 3) qC.push([QC[MC] + .5, QC[MC + 1] + .65, QC[MC + 2] + .5]);
      const FC = [];
      for (let MC = 0; MC < qC.length - 1; MC++) {
        const [CC, zC] = [qC[MC], qC[MC + 1]];
        FC.push([(CC[0] + zC[0]) / 2, (CC[1] + zC[1]) / 2, (CC[2] + zC[2]) / 2])
      }
      const WC = qC.slice(1, -1),
        NC = new Uint8Array(WC.length);
      for (const MC of null !== fC && void 0 !== fC ? fC : []) NC[MC >> 1] |= 1 & MC ? 2 : 1;
      return {
        island: CC,
        length: WC.length,
        loop: bC,
        cellsPerMs: oC,
        edges: FC,
        VS: WC,
        bounds: HM([...FC, ...WC], .3),
        changed: !0,
        culled: !1,
        hide: NC,
        items: wC.map((CC => {
          let [zC, QC] = CC;
          return lM(zC, (0, SZ.D)(zC, QC, ZC, oC).at)
        }))
      }
    }

    function uM(CC, zC) {
      const {
        items: ZC
      } = CC;
      if (0 === ZC.length) return;
      const QC = CC.length / CC.cellsPerMs,
        wC = Math.floor((zC - ZC[0].at) / QC) - 1;
      if (wC > 0)
        for (const bC of ZC) bC.at += wC * QC
    }

    function rM(CC, zC) {
      const ZC = Math.min(Math.floor(zC), CC.length - 1),
        QC = CC.hide[ZC];
      return 0 !== QC && 0 !== (QC & (zC - ZC < .5 ? 1 : 2))
    }

    function sM(CC, zC) {
      const ZC = Math.min(Math.floor(zC), CC.length - 1),
        QC = zC - ZC,
        wC = QC < .5,
        bC = wC ? CC.edges[ZC] : CC.VS[ZC],
        nC = wC ? CC.VS[ZC] : CC.edges[ZC + 1],
        fC = wC ? 2 * QC : 2 * QC - 1;
      XM[0] = bC[0] + (nC[0] - bC[0]) * fC, XM[1] = bC[1] + (nC[1] - bC[1]) * fC, XM[2] = bC[2] + (nC[2] - bC[2]) * fC
    }
    const TM = Math.PI / 4;
    class aM {
      constructor() {
        this.lines = new Map, this.shown = [], this.clock = new hM, this.pending = [], this.pendingHead = 0, this.lastPendingAt = -1 / 0, this.view = {
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
        }, this.frame = 0, this.lastRenderAt = 0, this.frameMs = 1e3 / 60, this.pool = null, this.cameraDir = [NaN, NaN, NaN], this.lastDir = [NaN, NaN, NaN], this.width = 0, this.height = 0, this.mG = () => {
          this.width = window.innerWidth, this.height = window.innerHeight
        }
      }
      onLines(CC) {
        const zC = performance.now();
        this.clock.sample(CC.baf2BeltLinesAt, zC), this.queue(CC.baf2BeltLinesAt, CC, 0, null, null, 0), this.applyDue(zC)
      }
      onMoves(CC) {
        const zC = performance.now(),
          ZC = CC.baf2BeltMovesAt;
        this.clock.sample(ZC, zC);
        for (const [QC, wC, bC, nC] of CC.baf2BeltMoveList) null === wC ? this.queue(ZC - bC, null, QC, null, null, null !== nC && void 0 !== nC ? nC : 0) : this.queue(ZC - bC, null, QC, wC, null !== nC && void 0 !== nC ? nC : null, 0);
        this.applyDue(zC)
      }
      start(CC) {
        this.pool = new KM.c(CC, {
          scale: .3,
          yaw: TM
        }, 64), this.mG(), window.addEventListener("resize", this.mG)
      }
      onAfterRender(CC) {
        const {
          pool: zC
        } = this;
        if (!zC) return;
        const ZC = performance.now(),
          QC = ZC - this.lastRenderAt;
        this.lastRenderAt = ZC, QC < 100 && (this.frameMs += .1 * (QC - this.frameMs));
        const wC = ZC + this.frameMs;
        this.applyDue(wC);
        const bC = CC.cameraPosition,
          nC = zC.follow(bC);
        this.setView(CC, bC);
        const fC = this.frame++;
        for (let oC = 0; oC < this.shown.length; oC++) {
          const CC = this.shown[oC],
            ZC = EM(this.view, CC.bounds, CC.cellsPerMs),
            QC = CC.culled && 0 !== ZC;
          if (CC.culled = 0 === ZC, !nC && !CC.changed && !QC && (0 === ZC || (fC + oC) % ZC !== 0)) continue;
          CC.changed = !1, CC.loop && (uM(CC, wC), (0, SZ.B)(CC.items, CC.length, wC, CC.cellsPerMs));
          let bC = CC.length;
          for (let fC = 0; fC < CC.items.length; fC++) {
            const ZC = CC.items[fC],
              QC = (0, SZ.F)(ZC.at, bC, wC, CC.cellsPerMs);
            if (bC = QC - SZ.r, rM(CC, QC)) {
              null === ZC.kind || ZC.hidden || (ZC.kind.hide(ZC.slot), ZC.hidden = !0);
              continue
            }
            let oC = ZC.kind;
            if (null === oC) {
              if (oC = zC.kindOf(ZC.name), null === oC) continue;
              ZC.kind = oC, ZC.slot = oC.take(), ZC.hidden = !0, ZC.drawn = NaN
            } else if (QC === ZC.drawn && !ZC.hidden && !nC) continue;
            sM(CC, QC), oC.write(ZC.slot, XM[0], XM[1], XM[2]), ZC.hidden = !1, ZC.drawn = QC
          }
        }
        zC.commit()
      }
      dispose() {
        var CC;
        window.removeEventListener("resize", this.mG), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (CC = this.pool) || void 0 === CC || CC.dispose(), this.pool = null
      }
      setView(CC, zC) {
        const {
          cameraDir: ZC,
          lastDir: QC
        } = this, wC = CC.cameraDirection;
        for (let FC = 0; FC < 3; FC++) QC[FC] = ZC[FC], ZC[FC] = wC[FC];
        const bC = ZC[0] * QC[0] + ZC[1] * QC[1] + ZC[2] * QC[2],
          nC = Number.isNaN(bC) ? 0 : Math.acos(Math.min(1, Math.max(-1, bC))),
          {
            width: fC,
            height: oC
          } = this,
          qC = CC.tanHalfFovX;
        ! function(CC, zC, ZC, QC, wC, bC, nC) {
          let fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          CC.x = zC[0], CC.y = zC[1], CC.z = zC[2], CC.dx = ZC[0], CC.dy = ZC[1], CC.dz = ZC[2];
          const oC = Math.min(Math.PI, Math.atan(Math.sqrt(QC * QC + wC * wC)) + YM + fC);
          CC.cosHalf = Math.cos(oC), CC.sinHalf = Math.sin(oC), CC.pxPerBlock = bC / (2 * wC), CC.frameMs = nC
        }(this.view, zC, ZC, qC, qC * oC / fC, oC * window.devicePixelRatio, this.frameMs, nC)
      }
      queue(CC, zC, ZC, QC, wC, bC) {
        const nC = Math.max(this.clock.toLocal(CC), this.lastPendingAt);
        this.lastPendingAt = nC, this.pending.push({
          at: nC,
          lines: zC,
          line: ZC,
          name: QC,
          pos: wC,
          idx: bC
        })
      }
      applyDue(CC) {
        const {
          pending: zC
        } = this;
        for (; this.pendingHead < zC.length && zC[this.pendingHead].at <= CC;) {
          const CC = zC[this.pendingHead++];
          if (CC.lines) this.applyLines(CC.lines, CC.at), CC.lines = null;
          else {
            const zC = this.lines.get(CC.line);
            zC && this.applyMove(zC, CC, CC.at)
          }
        }
        this.pendingHead === zC.length ? (zC.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > zC.length && (zC.splice(0, this.pendingHead), this.pendingHead = 0)
      }
      applyLines(CC, zC) {
        this.clearIsland(CC.baf2BeltIsland);
        for (const ZC of CC.baf2BeltLineList) this.lines.set(ZC[0], cM(CC.baf2BeltIsland, ZC, zC));
        this.shown = [...this.lines.values()]
      }
      applyMove(CC, zC, ZC) {
        let {
          name: QC,
          pos: wC,
          idx: bC
        } = zC;
        CC.changed = !0, CC.loop && (uM(CC, ZC), (0, SZ.B)(CC.items, CC.length, ZC, CC.cellsPerMs)), null !== QC && null !== wC ? (0, SZ.C)(CC.items, CC.length, lM(QC, ZC), wC, ZC, CC.cellsPerMs) : null !== QC ? CC.items.push(lM(QC, ZC)) : CC.items.length > bC && this.release((0, SZ.H)(CC.items, CC.length, ZC, CC.cellsPerMs, bC))
      }
      clearIsland(CC) {
        for (const [zC, ZC] of this.lines)
          if (ZC.island === CC) {
            for (const CC of ZC.items) this.release(CC);
            this.lines.delete(zC)
          }
      }
      release(CC) {
        null !== CC.kind && (CC.kind.release(CC.slot), CC.kind = null, CC.slot = -1, CC.hidden = !0, CC.drawn = NaN)
      }
    }
    var tM = ZC(36483),
      DM = ZC(38341);

    function jM(CC) {
      let {
        depth: zC,
        store: ZC,
        t: wC
      } = CC;
      const bC = function(CC) {
        const [zC, ZC] = (0, QC.useState)(CC.lastPlayerY());
        return (0, FF.c)(Xw, ZC), (0, QC.useEffect)((() => {
          ZC(CC.lastPlayerY())
        }), [CC]), zC
      }(ZC);
      if (null === bC) return null;
      const [nC, fC] = zC, oC = bC > nC ? nC : null !== fC && bC < fC ? fC : null, qC = {
        y: Ab(bC),
        target: null === oC ? "" : Ab(oC)
      };
      return (0, vb.jsx)("span", {
        className: Jw()("Baf2QuestDepth", {
          Reached: null === oC
        }),
        children: wC(`${gF}${null===oC?"questDepthReached":"questDepth"}`, qC)
      })
    }

    function yM(CC) {
      let {
        also: zC,
        view: ZC,
        t: QC
      } = CC;
      return (0, vb.jsxs)("li", {
        className: "Baf2QuestStep Baf2QuestAlso",
        children: [(0, vb.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "+"
        }), (0, vb.jsxs)("span", {
          className: "Baf2QuestStepBody",
          children: [(0, vb.jsx)("strong", {
            children: QC(`${gF}questAlsoDownHere`)
          }), (0, vb.jsx)("span", {
            className: "Baf2QuestChips",
            children: zC.map((CC => {
              let [zC, wC, bC, nC] = CC;
              return (0, vb.jsxs)("span", {
                className: "Baf2QuestChip",
                "aria-label": QC(`${gF}questAlsoItem`, {
                  item: pF(QC, ZC.itemNames[zC], zC),
                  have: String(wC),
                  need: String(bC)
                }),
                children: [(0, vb.jsx)(RF, {
                  item: zC
                }), (0, vb.jsx)("span", {
                  className: "Baf2QuestChipCount",
                  children: `${wC}/${bC}`
                }), null !== nC && (0, vb.jsx)("span", {
                  className: "Baf2QuestChipDepth",
                  children: QC(`${gF}questAlsoDepth`, {
                    y: Ab(nC)
                  })
                })]
              }, zC)
            }))
          })]
        })]
      })
    }
    var LM = ZC(3394);

    function UM(CC) {
      let {
        expanded: zC,
        inventoryOpen: ZC,
        children: wC
      } = CC;
      const bC = (0, QC.useRef)(null);
      return (0, QC.useEffect)((() => {
        const CC = bC.current,
          zC = null === CC || void 0 === CC ? void 0 : CC.closest(".RightElements"),
          QC = null === CC || void 0 === CC ? void 0 : CC.firstElementChild;
        if (!CC || !zC || !QC) return;
        return (0, DM.b)(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner, .TopRightElements, .TouchComponentsButtons .TouchKeyHit, .InventoryWrapper .Inventory", [zC, QC], (() => {
          const wC = [...document.querySelectorAll(".TopRightIconsContainer, .TopRightElementsRight, .CondensedSocialBarInner")];
          if (0 === wC.length) return;
          const bC = Math.max(...wC.map((CC => CC.getBoundingClientRect().bottom))),
            nC = zC.getBoundingClientRect(),
            fC = ZC ? document.querySelector(".InventoryWrapper .Inventory") : null;
          if (fC) {
            const zC = parseFloat(getComputedStyle(QC).marginLeft) + parseFloat(getComputedStyle(QC).marginRight),
              ZC = nC.right - fC.getBoundingClientRect().right - 8 - zC;
            CC.style.setProperty("--baf2-quest-room", `${ZC}px`), CC.classList.toggle("NoRoom", ZC < 150)
          } else CC.style.removeProperty("--baf2-quest-room"), CC.classList.remove("NoRoom");
          const oC = bC - nC.top + 8,
            qC = function(CC, zC, ZC) {
              const QC = zC.getBoundingClientRect(),
                wC = CC.getBoundingClientRect(),
                bC = (0, LM.c)(wC.left, wC.right, QC.top + ZC);
              if (null !== bC && bC < QC.bottom) return bC - QC.top;
              return QC.height - (parseFloat(getComputedStyle(zC).paddingBottom) || 0)
            }(CC, zC, oC) - 8,
            FC = window.innerHeight / 2 - nC.top,
            {
              top: WC,
              maxHeight: NC
            } = function(CC, zC, ZC, QC, wC) {
              const bC = Math.min(ZC, Math.max(0, zC - CC)),
                nC = wC ? CC : Math.max(CC, Math.min(QC - bC / 2, zC - bC));
              return {
                top: nC,
                maxHeight: Math.max(0, zC - nC)
              }
            }(oC, qC, function(CC) {
              const zC = CC.firstElementChild,
                ZC = zC ? zC.scrollHeight - zC.clientHeight : 0;
              return CC.getBoundingClientRect().height + Math.max(0, ZC)
            }(QC), FC, ib());
          CC.style.top = `${WC}px`, CC.style.maxHeight = `${NC}px`
        }))
      }), [ZC]), (0, vb.jsx)("div", {
        ref: bC,
        className: Jw()("Baf2QuestHud", {
          Expanded: zC
        }),
        children: wC
      })
    }

    function BM(CC) {
      let {
        amount: zC,
        t: ZC
      } = CC;
      return (0, vb.jsxs)("li", {
        className: "Baf2QuestStep Done Folded",
        children: [(0, vb.jsx)("span", {
          className: "Baf2QuestStepMark",
          "aria-hidden": "true",
          children: "\u2713"
        }), (0, vb.jsx)("span", {
          className: "Baf2QuestStepBody",
          children: ZC(`${gF}questStepsDone`, {
            amount: String(zC)
          })
        })]
      })
    }

    function OM(CC) {
      let {
        pulse: zC
      } = CC;
      return 0 === zC ? null : (0, vb.jsx)("span", {
        className: "Baf2QuestTrackerPulse",
        "aria-hidden": "true"
      }, zC)
    }

    function kM(CC) {
      var zC;
      let {
        store: ZC
      } = CC;
      const wC = (0, FF.f)(lw, ZC.get()),
        [bC, nC] = (0, QC.useState)(!1),
        {
          t: fC
        } = (0, ew.y)(),
        oC = (0, Jb.f)(Ib),
        {
          openInGameMenuName: qC,
          openEverythingMenuName: FC
        } = (0, Rw.k)(["openInGameMenuName", "openEverythingMenuName"]),
        WC = "inventory" === qC && null === FC,
        NC = null !== qC && !WC || null !== FC;
      if (! function(CC) {
          return null !== CC.name || null !== CC.side
        }(wC) || NC || "off" === wC.tutorial) return null;
      const MC = tw(wC.rows),
        gC = MC.filter((CC => CC.done)).length,
        SC = function(CC, zC) {
          const ZC = yw(CC);
          let QC = 0;
          return CC.filter(((CC, wC) => !!CC.justFinished || !(CC.done || wC < ZC || QC > zC) && (QC++, !0)))
        }(wC.rows, oC ? 0 : 2),
        pC = oC ? SC : function(CC, zC) {
          const ZC = zC.filter((CC => !CC.justFinished));
          if (ZC.length < 2) return [...zC];
          const QC = CC.indexOf(ZC[0]),
            wC = CC.indexOf(ZC[ZC.length - 1]),
            bC = new Set(tw(CC));
          return CC.filter(((CC, ZC) => zC.includes(CC) || CC.done && bC.has(CC) && ZC > QC && ZC < wC))
        }(wC.rows, SC),
        PC = bC ? wC.rows : pC,
        GC = bC || oC ? [] : function(CC, zC) {
          const ZC = new Array(zC.length + 1).fill(0),
            QC = new Set(tw(CC));
          let wC = 0;
          for (const bC of CC) wC < zC.length && bC === zC[wC] ? wC++ : bC.done && QC.has(bC) && ZC[wC]++;
          return ZC
        }(wC.rows, pC),
        RC = bC || pC.length < wC.rows.length || null !== wC.reward,
        AC = aw(wC),
        xC = AC ? fC(`${gF}questLineComplete`) : wC.tier ? JF(fC, wC.tier) : fC(`${gF}currentQuest`),
        JC = function(CC) {
          var zC, ZC;
          if (aw(CC)) return null;
          const QC = null === (zC = CC.chapters) || void 0 === zC ? void 0 : zC.find((zC => {
            let [ZC] = zC;
            return ZC === CC.tier
          }));
          if (!QC) return null;
          const wC = QC[1].filter((CC => !CC[4]));
          if (0 === wC.length) return null;
          const bC = null === (ZC = CC.name) || void 0 === ZC ? void 0 : ZC[0],
            nC = CC => wC.findIndex((zC => zC[0] === bC && (!CC || !zC[3]))),
            fC = nC(!0),
            oC = fC >= 0 ? fC : nC(!1);
          if (oC >= 0) return [oC + 1, wC.length];
          const qC = wC.filter((CC => CC[3])).length;
          return [Math.min(qC + 1, wC.length), wC.length]
        }(wC);
      return (0, vb.jsx)(tM.c, {
        placement: "topRight",
        children: (0, vb.jsx)(UM, {
          expanded: bC,
          inventoryOpen: WC,
          children: (0, vb.jsxs)("div", {
            className: "Baf2QuestTracker",
            style: SF,
            children: [null !== wC.name && (0, vb.jsxs)("div", {
              className: "Baf2QuestTrackerBody",
              children: [(0, vb.jsx)(OM, {
                pulse: wC.pulse
              }), (0, vb.jsx)("div", {
                className: "Baf2QuestTrackerHead",
                children: (0, vb.jsxs)("span", {
                  className: "Baf2QuestEyebrow",
                  children: [xC, JC && (0, vb.jsx)("span", {
                    className: "Baf2QuestPlace",
                    role: "img",
                    "aria-label": fC(`${gF}questPlaceLabel`, {
                      n: String(JC[0]),
                      total: String(JC[1])
                    }),
                    children: fC(`${gF}questPlace`, {
                      n: String(JC[0]),
                      total: String(JC[1])
                    })
                  }), wC.tier && wC.core && !AC && (0, vb.jsx)(IF, {
                    core: wC.core,
                    t: fC
                  })]
                })
              }), (0, vb.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: fC(`${gF}${wC.name[0]}`, PF(wC.name[1]))
              }), (MC.length > 1 || RC) && (0, vb.jsxs)("div", {
                className: "Baf2QuestStepsLine",
                children: [MC.length > 1 && (0, vb.jsx)(iF, {
                  rows: MC,
                  t: fC
                }), RC && (0, vb.jsxs)("button", {
                  type: "button",
                  className: "Baf2QuestToggle",
                  "aria-expanded": bC,
                  onClick: () => {
                    nC(!bC)
                  },
                  children: [(0, vb.jsx)("span", {
                    className: "Baf2QuestToggleCount",
                    children: fC(`${gF}questStepsToggle`, {
                      done: String(gC),
                      total: String(MC.length)
                    })
                  }), (0, vb.jsx)("span", {
                    className: "Baf2QuestToggleChevron",
                    "aria-hidden": "true",
                    children: bC ? "\u25b4" : "\u25be"
                  })]
                })]
              }), (0, vb.jsxs)("ul", {
                className: "Baf2QuestChecklist",
                children: [PC.map(((CC, zC) => {
                  var bC;
                  const nC = CC.current && wC.depth;
                  return (0, vb.jsxs)(QC.Fragment, {
                    children: [(null !== (bC = GC[zC]) && void 0 !== bC ? bC : 0) > 0 && (0, vb.jsx)(BM, {
                      amount: GC[zC],
                      t: fC
                    }), (0, vb.jsx)(vF, {
                      row: CC,
                      view: wC,
                      t: fC,
                      extra: nC && (0, vb.jsx)(jM, {
                        depth: nC,
                        store: ZC,
                        t: fC
                      })
                    })]
                  }, CC.id)
                })), (null !== (zC = GC[PC.length]) && void 0 !== zC ? zC : 0) > 0 && (0, vb.jsx)(BM, {
                  amount: GC[PC.length],
                  t: fC
                }), wC.also.length > 0 && (0, vb.jsx)(yM, {
                  also: wC.also,
                  view: wC,
                  t: fC
                })]
              }), bC && wC.reward && (0, vb.jsxs)("span", {
                className: "Baf2QuestReward",
                children: [fC(`${gF}questReward`), (0, vb.jsx)(RF, {
                  item: wC.reward
                }), pF(fC, wC.itemNames[wC.reward], wC.reward)]
              })]
            }), wC.side && (0, vb.jsxs)("div", {
              className: "Baf2QuestTrackerBody Baf2QuestSideCard",
              children: [sw(wC, Date.now()) && (0, vb.jsx)(OM, {
                pulse: wC.sideCameUpAt
              }), (0, vb.jsx)("span", {
                className: "Baf2QuestEyebrow",
                children: fC(`${gF}questSide`)
              }), (0, vb.jsx)("strong", {
                className: "Baf2QuestTrackerTitle",
                children: fC(`${gF}${wC.side.name[0]}`, PF(wC.side.name[1]))
              }), (0, vb.jsx)("ul", {
                className: "Baf2QuestChecklist",
                children: (0, vb.jsx)(vF, {
                  row: wC.side.row,
                  view: wC,
                  t: fC
                })
              })]
            })]
          })
        })
      })
    }
    const VM = "baf2ToastView";
    class Cg {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
        this.covered = CC, this.view = null, this.nextId = 1, this.holdUntil = 0, this.pending = null, this.timer = null, this.pendingTimer = null, this.covering = null, this.coveredTimer = null
      }
      get() {
        return this.view
      }
      show(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.covered()) return this.covering = {
          message: CC,
          holdMs: zC
        }, void(this.coveredTimer ??= setInterval((() => {
          if (this.covered()) return;
          const CC = this.dropCovered();
          CC && this.show(CC.message, CC.holdMs)
        }), 250));
        const ZC = this.dropCovered();
        null !== ZC && (ZC.holdMs > 0 || "baf2ToastCelebrate" === ZC.message.baf2ToastStyle) && "baf2ToastCelebrate" !== CC.baf2ToastStyle && this.show(ZC.message, ZC.holdMs);
        const QC = this.holdUntil - Date.now();
        if (null !== this.view && !this.view.leaving && "baf2ToastCelebrate" !== CC.baf2ToastStyle && QC > 0) return this.pending = {
          message: CC,
          holdMs: zC
        }, void(this.pendingTimer ??= setTimeout((() => {
          this.pendingTimer = null;
          const CC = this.pending;
          this.pending = null, CC && this.present(CC.message, CC.holdMs)
        }), QC));
        this.present(CC, zC)
      }
      dispose() {
        this.clearTimers(), this.dropCovered(), this.pending = null, this.view = null
      }
      present(CC, zC) {
        this.clearTimers(), this.pending = null;
        const ZC = null !== this.view && !this.view.leaving;
        this.view = {
          id: this.nextId++,
          text: CC.baf2ToastText,
          style: CC.baf2ToastStyle,
          swapped: ZC,
          leaving: !1
        }, this.holdUntil = Date.now() + ("baf2ToastCelebrate" === CC.baf2ToastStyle ? 1500 : zC), this.bp();
        const QC = Math.min(8e3, Math.max(1e3, CC.baf2ToastMs));
        this.timer = setTimeout((() => {
          this.leave()
        }), QC)
      }
      leave() {
        this.view && (this.view = {
          ...this.view,
          leaving: !0
        }, this.bp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.bp()
        }), 200))
      }
      clearTimers() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      dropCovered() {
        null !== this.coveredTimer && (clearInterval(this.coveredTimer), this.coveredTimer = null);
        const CC = this.covering;
        return this.covering = null, CC
      }
      bp() {
        Hw.o.bp(VM, this.view, !0)
      }
    }
    var zg = ZC(60);
    const Zg = {
      baf2ToastInfo: "Info",
      baf2ToastWarn: "Warn",
      baf2ToastGold: "Gold",
      baf2ToastCelebrate: "Celebrate"
    };

    function Qg(CC) {
      let {
        store: zC
      } = CC;
      const ZC = (0, FF.f)(VM, zC.get()),
        {
          openInGameMenuName: QC,
          openEverythingMenuName: wC
        } = (0, Rw.k)(["openInGameMenuName", "openEverythingMenuName"]),
        bC = ZC && (0, vb.jsxs)("div", {
          className: Jw()("Baf2Toast", Zg[ZC.style], {
            Swapped: ZC.swapped,
            Leaving: ZC.leaving
          }),
          role: "status",
          children: ["baf2ToastCelebrate" === ZC.style && (0, vb.jsx)("span", {
            className: "Baf2ToastStar",
            "aria-hidden": "true",
            children: "\u2605"
          }), (0, vb.jsx)("span", {
            className: "Baf2ToastText SmallTextBold",
            children: (0, vb.jsx)(Yw.e, {
              text: ZC.text
            })
          })]
        }, ZC.id);
      return null !== QC && null === wC ? (0, zg.createPortal)((0, vb.jsx)("div", {
        className: "Baf2ToastAboveMenu",
        children: bC
      }), document.body) : (0, vb.jsx)(tM.c, {
        children: bC
      })
    }
    const wg = "baf2AreaView";
    class bg {
      constructor() {
        this.view = null, this.nextId = 1, this.timer = null, this.vq = null
      }
      get() {
        return this.view
      }
      dropHeld() {
        this.vq = null
      }
      arrive(CC, zC) {
        zC && function(CC) {
          return "home" === CC.baf2AreaPlace && void 0 !== CC.baf2AreaNameText
        }(CC) ? this.vq = CC : this.show(CC)
      }
      release() {
        const CC = this.vq;
        null !== CC && this.show(CC)
      }
      show(CC) {
        this.clearTimer(), this.vq = null;
        const zC = void 0 === CC.baf2AreaResetMinutes ? 3800 : 5e3;
        this.view = {
          id: this.nextId++,
          area: CC,
          ms: zC
        }, this.bp(), this.timer = setTimeout((() => {
          this.timer = null, this.view = null, this.bp()
        }), zC)
      }
      dispose() {
        this.clearTimer(), this.vq = null, this.view = null
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
      bp() {
        Hw.o.bp(wg, this.view, !0)
      }
    }

    function ng(CC) {
      var zC;
      let {
        store: ZC
      } = CC;
      const {
        t: QC
      } = (0, ew.y)(), wC = (0, FF.f)(wg, ZC.get());
      if (!wC) return null;
      const {
        area: bC
      } = wC, nC = bC.baf2AreaResetMinutes;
      return (0, vb.jsxs)("div", {
        className: "Baf2AreaBanner",
        "data-baf2-place": bC.baf2AreaPlace,
        style: {
          "--baf2-area-ms": `${wC.ms}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, vb.jsx)("div", {
          className: "Baf2AreaBannerBand",
          "aria-hidden": "true"
        }), bC.baf2AreaHeading && (0, vb.jsx)("span", {
          className: "Baf2AreaBannerHeading",
          children: QC(bC.baf2AreaHeading)
        }), (0, vb.jsx)("strong", {
          className: "Baf2AreaBannerName",
          children: null !== (zC = bC.baf2AreaNameText) && void 0 !== zC ? zC : QC(bC.baf2AreaName)
        }), bC.baf2AreaNote && (0, vb.jsx)("span", {
          className: "Baf2AreaBannerNote",
          children: QC(bC.baf2AreaNote)
        }), void 0 !== nC && (0, vb.jsx)("span", {
          className: "Baf2AreaBannerReset",
          children: QC("buildAFactory2Game:areaWildsReset", {
            time: xb(QC, 60 * nC)
          })
        })]
      }, wC.id)
    }
    const fg = "baf2GearGauge";
    class og {
      constructor() {
        this.view = null, this.lingerTimer = null
      }
      get() {
        return this.view
      }
      fR(CC) {
        var zC;
        if (this.clearLinger(), null === CC.gearPowerKind) return void this.set(null);
        const ZC = "jetpack" === CC.gearPowerKind && (QC = CC.gearChargeState, wC = CC.gearCharge, "flying" === QC || "charging" === QC || "outOfCharge" === QC || "ceiling" === QC || "offPlot" === QC || "noPower" === QC && wC <= 0);
        var QC, wC;
        const bC = !0 === (null === (zC = this.view) || void 0 === zC ? void 0 : zC.jetShown) && "jetpack" === this.view.gauge.gearPowerKind,
          nC = ZC || "jetpack" === CC.gearPowerKind && bC;
        this.set({
          gauge: CC,
          jetShown: nC
        }), nC && !ZC && (this.lingerTimer = setTimeout((() => {
          this.lingerTimer = null, this.view && this.set({
            ...this.view,
            jetShown: !1
          })
        }), 1500))
      }
      dispose() {
        this.clearLinger(), this.view = null
      }
      set(CC) {
        this.view = CC, Hw.o.bp(fg, CC, !0)
      }
      clearLinger() {
        null !== this.lingerTimer && (clearTimeout(this.lingerTimer), this.lingerTimer = null)
      }
    }
    const qg = {
      charging: "buildAFactory2Game:gearJetCharging",
      noPower: "buildAFactory2Game:gearJetNoPower",
      offPlot: "buildAFactory2Game:gearJetOffPlotLine",
      ceiling: "buildAFactory2Game:gearJetCeilingLine"
    };

    function Fg(CC) {
      let {
        store: zC
      } = CC;
      const ZC = (0, FF.f)(fg, zC.get());
      return ZC ? "jetpack" === ZC.gauge.gearPowerKind ? (0, vb.jsx)(Wg, {
        view: ZC
      }) : (0, vb.jsx)(Ng, {
        gauge: ZC.gauge
      }) : null
    }

    function Wg(CC) {
      let {
        view: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), {
        gauge: QC
      } = zC, wC = QC.gearChargeMax > 0 ? Math.max(0, Math.min(1, QC.gearCharge / QC.gearChargeMax)) : 0, bC = qg[QC.gearChargeState], nC = bC ? ZC(bC) : null;
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2JetArc", {
          Shown: zC.jetShown,
          Low: wC < .2,
          Warm: wC >= .2 && wC < .5
        }),
        style: {
          "--baf2-jet-fill": "" + 100 * (1 - wC)
        },
        "aria-hidden": !zC.jetShown,
        children: [(0, vb.jsxs)("svg", {
          viewBox: "-50 -50 100 100",
          children: [(0, vb.jsx)("path", {
            className: "Baf2JetArcTrack",
            d: Mg,
            pathLength: 100
          }), (0, vb.jsx)("path", {
            className: "Baf2JetArcFill",
            d: Mg,
            pathLength: 100
          })]
        }), (0, vb.jsxs)("span", {
          className: "Baf2JetArcPct",
          children: [Math.round(100 * wC), "%"]
        }), nC && (0, vb.jsx)("span", {
          className: "Baf2JetArcLine SmallTextBold",
          children: nC
        })]
      })
    }

    function Ng(CC) {
      let {
        gauge: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), QC = function(CC, zC) {
        switch (zC.gearPowerKind) {
          case "skyPack":
            return CC("buildAFactory2Game:gearSkyPack", {
              charge: zC.gearCharge,
              max: zC.gearChargeMax
            });
          case "arcCaster":
          case "novaBlade":
            return CC("buildAFactory2Game:gearIslandDraw", {
              power: OC(zC.gearIslandPower),
              cost: OC(zC.gearCostPerUse)
            });
          case "barrier":
            return CC("buildAFactory2Game:gearBarrier", {
              shield: Math.round(zC.gearCharge),
              max: zC.gearChargeMax,
              power: OC(zC.gearIslandPower)
            });
          default:
            return null
        }
      }(ZC, zC);
      return null === QC ? null : (0, vb.jsx)(tM.c, {
        children: (0, vb.jsx)("div", {
          className: Jw()("Baf2GearPill SmallTextBold", {
            NoPower: "noPower" === zC.gearChargeState || "outOfCharge" === zC.gearChargeState
          }),
          role: "status",
          children: QC
        })
      })
    }
    const Mg = (() => {
      const CC = CC => {
        const zC = CC * Math.PI / 180;
        return `${(40*Math.cos(zC)).toFixed(2)} ${(40*Math.sin(zC)).toFixed(2)}`
      };
      return `M ${CC(160)} A 40 40 0 1 1 ${CC(380)}`
    })();
    class gg {
      constructor(CC) {
        this.onElement = CC, this.island = null, this.labels = new Map, this.snapshot = [], this.changes = 0, this.elements = new Map, this.refs = new Map, this.countElements = new Map, this.countRefs = new Map, this.countWords = String, this.listeners = new Set
      }
      fR(CC) {
        let zC = CC.baf2LabelsReset || CC.baf2LabelsIsland !== this.island;
        zC && (this.labels.clear(), this.island = CC.baf2LabelsIsland);
        for (const [ZC, QC, wC, bC, nC] of CC.baf2LabelsList) {
          const CC = `${ZC},${QC},${wC}`,
            fC = this.labels.get(CC);
          null === bC ? zC = this.labels.delete(CC) || zC : fC && fC.item === bC && (fC.count === nC || fC.count >= 0 && nC >= 0) ? fC.count !== nC && (fC.count = nC, this.writeCount(CC, nC)) : (this.labels.set(CC, {
            key: CC,
            pos: [ZC, QC, wC],
            item: bC,
            count: nC
          }), this.writeCount(CC, nC), zC = !0)
        }
        if (this.changes++, zC) {
          this.snapshot = [...this.labels.values()];
          for (const CC of this.listeners) CC()
        }
      }
      bindCount(CC) {
        const zC = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bare"}|${CC}`;
        let ZC = this.countRefs.get(zC);
        return ZC || (ZC = ZC => {
          var QC, wC;
          ZC ? (this.countElements.set(zC, ZC), this.writeCount(CC, null !== (QC = null === (wC = this.labels.get(CC)) || void 0 === wC ? void 0 : wC.count) && void 0 !== QC ? QC : -1)) : (this.countElements.delete(zC), this.countRefs.delete(zC))
        }, this.countRefs.set(zC, ZC)), ZC
      }
      setCountWords(CC) {
        this.countWords = CC;
        for (const [zC, ZC] of this.labels) this.writePart(`words|${zC}`, CC(ZC.count), ZC.count)
      }
      writeCount(CC, zC) {
        this.writePart(`bare|${CC}`, Rb(zC), zC), this.countElements.has(`words|${CC}`) && this.writePart(`words|${CC}`, this.countWords(zC), zC)
      }
      writePart(CC, zC, ZC) {
        const QC = this.countElements.get(CC);
        if (!QC || ZC < 0) return;
        const wC = QC.firstChild;
        wC && 3 === wC.nodeType && !wC.nextSibling ? wC.nodeValue !== zC && (wC.nodeValue = zC) : QC.textContent !== zC && (QC.textContent = zC)
      }
      list() {
        return this.snapshot
      }
      at(CC) {
        return this.labels.get(`${CC[0]},${CC[1]},${CC[2]}`)
      }
      version() {
        return this.changes
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      bind(CC) {
        let zC = this.refs.get(CC);
        return zC || (zC = zC => {
          const ZC = this.elements.get(CC);
          var QC, wC;
          ZC && (null === (QC = this.onElement) || void 0 === QC || QC.call(this, ZC, !1));
          zC ? (this.elements.set(CC, zC), null === (wC = this.onElement) || void 0 === wC || wC.call(this, zC, !0)) : (this.elements.delete(CC), this.refs.delete(CC))
        }, this.refs.set(CC, zC)), zC
      }
      onAfterRender(CC, zC, ZC, QC) {
        for (const wC of this.snapshot) {
          const bC = this.elements.get(wC.key);
          if (!bC) continue;
          if (QC(wC.key)) {
            (0, MM.i)(bC, !0);
            continue
          }
          const nC = xM(bC, CC, zC, wC.pos, 1.1, 24);
          nC && ZC.add(nC, bC, 0, !1)
        }
      }
    }
    const Sg = (0, QC.memo)((function(CC) {
        let {
          item: zC
        } = CC;
        return (0, vb.jsx)("div", {
          className: "Baf2IslandLabelIcon",
          children: (0, vb.jsx)(Kw.e, {
            itemName: zC,
            amount: 0
          })
        })
      })),
      pg = (0, QC.memo)((function(CC) {
        let {
          label: zC,
          bindRef: ZC,
          countRef: QC,
          wordsRef: wC
        } = CC;
        return (0, vb.jsxs)("div", {
          className: "Baf2IslandLabel",
          ref: ZC,
          hidden: !0,
          children: [(0, vb.jsx)(Sg, {
            item: zC.item
          }), zC.count >= 0 && (0, vb.jsxs)("span", {
            className: "Baf2IslandLabelCount SmallTextBold",
            children: [(0, vb.jsx)("span", {
              className: "Baf2IslandLabelWords",
              ref: wC
            }), (0, vb.jsx)("span", {
              className: "Baf2IslandLabelBare",
              ref: QC
            })]
          })]
        })
      })),
      Pg = (0, QC.memo)((function(CC) {
        let {
          store: zC
        } = CC;
        const {
          t: ZC
        } = (0, ew.y)(), [wC, bC] = (0, QC.useState)((() => zC.list()));
        return (0, QC.useEffect)((() => (bC(zC.list()), zC.subscribe((() => {
          bC(zC.list())
        })))), [zC]), (0, QC.useEffect)((() => {
          zC.setCountWords((CC => ZC("buildAFactory2Game:labelSiloCount", {
            count: Rb(CC)
          })))
        }), [zC, ZC]), (0, vb.jsx)("div", {
          className: "Baf2IslandLabels",
          children: wC.map((CC => -2 === CC.count ? null : (0, vb.jsx)(pg, {
            label: CC,
            bindRef: zC.bind(CC.key),
            countRef: zC.bindCount(CC.key),
            wordsRef: zC.bindCount(CC.key, "words")
          }, CC.key)))
        })
      })),
      Gg = {
        read: () => !0,
        write: () => {}
      };

    function Rg(CC) {
      return `${CC[0]},${CC[1]},${CC[2]}`
    }

    function Ag(CC) {
      let [zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC] = CC;
      const MC = void 0 === WC || void 0 === NC ? function(CC) {
        return [Math.floor((CC - 1) / 2), 0]
      }(bC) : [WC, NC];
      return {
        kind: 0 === oC ? "reactor" : "battery",
        box: aZ([zC, ZC, QC], wC, bC, nC, fC, MC),
        formed: 1 === qC,
        level: FC
      }
    }
    class xg {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gg;
        this.guideSetting = CC, this.plans = new Map, this.predicted = new Map, this.startersOff = new Set, this.layouts = new Map, this.listeners = new Set, this.version = 0, this.formed = null, this.guide = void 0, this.guide = CC.read()
      }
      fR(CC) {
        var zC;
        const ZC = new Map;
        for (const QC of CC.baf2RxPlanList) {
          const CC = Ag(QC);
          ZC.set(Rg(CC.box.ctrl), CC)
        }
        this.plans = ZC, this.layouts = new Map((null !== (zC = CC.baf2RxLayouts) && void 0 !== zC ? zC : []).map((CC => {
          let [zC, ZC, QC, wC] = CC;
          return [Rg([zC, ZC, QC]), wC]
        }))), this.predicted.clear(), CC.baf2RxFormedAt && (this.formed = {
          ctrl: CC.baf2RxFormedAt,
          receivedAt: performance.now()
        });
        for (const QC of [...this.startersOff]) {
          const CC = ZC.get(QC);
          CC && !CC.formed || this.startersOff.delete(QC)
        }
        this.changed()
      }
      all() {
        return [...this.plans.keys()].map((CC => this.planByKey(CC)))
      }
      planAt(CC) {
        return this.planByKey(Rg(CC))
      }
      predictSize(CC, zC) {
        this.predicted.set(Rg(CC), zC), this.changed()
      }
      unpredict(CC) {
        this.predicted.delete(Rg(CC)) && this.changed()
      }
      lastFormed() {
        return this.formed
      }
      layoutOf(CC) {
        var zC;
        const ZC = Rg(CC);
        return this.predicted.has(ZC) ? null : null !== (zC = this.layouts.get(ZC)) && void 0 !== zC ? zC : null
      }
      showsStarter(CC) {
        return !this.startersOff.has(Rg(CC))
      }
      setStarter(CC, zC) {
        const ZC = Rg(CC);
        zC ? this.startersOff.delete(ZC) : this.startersOff.add(ZC), this.changed()
      }
      guideOn() {
        return this.guide
      }
      setGuide(CC) {
        this.guide = CC, this.guideSetting.write(CC), this.changed()
      }
      getVersion() {
        return this.version
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.plans.clear(), this.predicted.clear(), this.startersOff.clear(), this.layouts.clear(), this.listeners.clear(), this.formed = null
      }
      planByKey(CC) {
        const zC = this.plans.get(CC);
        if (!zC) return null;
        const ZC = this.predicted.get(CC);
        return ZC ? {
          ...zC,
          box: DZ(zC.box, zC.kind, ZC[0], ZC[1], ZC[2])
        } : zC
      }
      changed() {
        this.version++;
        for (const CC of this.listeners) CC()
      }
    }
    var Jg = ZC(184);
    const Ig = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];

    function ig(CC, zC, ZC, QC) {
      const wC = CC.length / 3;
      for (let bC = 0; bC < Ig.length / 3; bC++) CC.push(Ig[3 * bC] * QC[0] / 2 + ZC[0], Ig[3 * bC + 1] * QC[1] / 2 + ZC[1], Ig[3 * bC + 2] * QC[2] / 2 + ZC[2]);
      for (let bC = wC; bC < wC + 24; bC += 4) zC.push(bC, bC + 1, bC + 2, bC, bC + 2, bC + 3)
    }

    function vg(CC, zC, ZC) {
      const QC = zC[0][0],
        wC = [],
        bC = [];
      for (const [nC, fC] of zC) ig(wC, bC, [nC[0] - QC[0], nC[1] - QC[1], nC[2] - QC[2]], fC);
      return CC.createGameMesh({
        positions: wC,
        indices: bC
      }, ZC, QC)
    }

    function eg(CC, zC) {
      const ZC = CC.w - 2,
        QC = CC.d - 2;
      return 1 === function(CC, zC, ZC, QC) {
        const [wC, bC, nC] = CC;
        if (Number(wC <= 2) + Number(bC <= 2) + Number(nC <= 2) >= 2) return function(CC, zC, ZC) {
          return (CC + zC + ZC) % 2 === 0 ? 1 : 3
        }(zC, ZC, QC);
        const [fC, oC] = wC >= bC && wC >= nC ? [ZC, QC] : bC >= nC ? [zC, QC] : [zC, ZC];
        return fC % 2 === 0 && oC % 2 === 0 ? 1 : 3
      }([ZC, CC.h - 2, QC], zC % ZC, Math.floor(zC / (ZC * QC)), Math.floor(zC / ZC) % QC) ? "rod" : "channel"
    }

    function hg(CC, zC, ZC) {
      if ("reactor" !== CC.kind || CC.formed || !zC) return !1;
      const QC = LZ(CC.box);
      for (let wC = 0; wC < QC; wC++) {
        const CC = ZC(wC);
        if (null !== CC && YZ(CC)) return !1
      }
      return !0
    }

    function Kg(CC, zC, ZC, QC, wC) {
      var bC;
      let nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
      const fC = CQ(CC.box, zC),
        oC = wQ(CC.kind, fC, ZC);
      if ("wrong" === oC || "blocked" === oC) return "wrong";
      if (!wC) return null;
      if ("inside" === fC && "reactor" === CC.kind && "Air" === dZ(ZC)) {
        if (null !== nC) {
          var qC;
          const ZC = oN[qN(nC, zQ(CC.box, zC))];
          return ZC && null !== (qC = mo(ZC)) && void 0 !== qC ? qC : null
        }
        if (QC) return eg(CC.box, zQ(CC.box, zC))
      }
      if ("missing" !== oC) return null;
      const FC = bQ(CC.kind, fC);
      return null === FC ? null : null !== (bC = mo(FC)) && void 0 !== bC ? bC : null
    }
    const Yg = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function dg(CC, zC, ZC) {
      const QC = ZC => {
        const QC = zC(kZ(CC.box, ZC));
        return null !== QC && function(CC, zC) {
          return "reactor" !== CC.kind || zC !== BZ(CC.box) && "inside" !== CQ(CC.box, zC)
        }(CC, ZC) && "ok" !== wQ(CC.kind, CQ(CC.box, ZC), QC)
      };
      if (ZC) {
        const bC = VZ(CC.box, [Math.floor(ZC[0]), Math.floor(ZC[1]), Math.floor(ZC[2])]);
        if (bC >= 0 && (QC(bC) || (wC = bC, "reactor" === CC.kind && "inside" === CQ(CC.box, wC) && "Air" === zC(kZ(CC.box, wC))))) return bC
      }
      var wC;
      const bC = LZ(CC.box);
      for (let nC = 0; nC < bC; nC++)
        if (QC(nC)) return nC;
      return -1
    }

    function mg(CC, zC) {
      return Math.floor(zC / (CC.w * CC.d))
    }

    function Hg(CC, zC, ZC) {
      return ZC >= 0 && mg(CC, zC) > mg(CC, ZC)
    }

    function Eg(CC, zC) {
      return zC >= 0 && CC.h >= 3 && mg(CC, zC) === CC.h - 1
    }

    function lg(CC) {
      const zC = dZ(CC);
      return zC === GZ || "Collider" === zC || "Laser" === zC || zC.startsWith("_Collider ")
    }

    function Xg(CC, zC, ZC, QC) {
      if (QC(CC)) return null;
      if (!Yg.every((zC => {
          let [QC, wC, bC] = zC;
          const nC = ZC([CC[0] + QC, CC[1] + wC, CC[2] + bC]);
          return null !== nC && !uZ("reactor", nC) && "reactor" !== mZ(nC)
        }))) return null;
      const wC = rZ("reactor").min,
        bC = aZ([CC[0], CC[1], CC[2]], function(CC, zC) {
          const ZC = zC[0] - (CC[0] + .5),
            QC = zC[2] - (CC[2] + .5);
          return Math.abs(ZC) >= Math.abs(QC) ? ZC >= 0 ? 2 : 4 : QC >= 0 ? 1 : 3
        }(CC, zC), wC, wC, wC, tZ("reactor", wC)),
        nC = BZ(bC);
      let fC = !0;
      for (let oC = 0; oC < LZ(bC) && fC; oC++) {
        if (oC === nC) continue;
        const CC = kZ(bC, oC),
          zC = ZC(CC);
        fC = !QC(CC) && (null === zC || !lg(zC))
      }
      return {
        box: bC,
        fits: fC
      }
    }
    const cg = Yo,
      ug = "baf2Goal",
      rg = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
      ],
      sg = {
        rgb: [1, .93, .45],
        alpha: 1
      },
      Tg = .4;

    function ag(CC, zC) {
      let [ZC, QC, wC] = CC;
      const bC = so([ZC - .02, QC - .02, wC - .02], [ZC + 1.02, QC + 1.02, wC + 1.02], .07);
      return zC && (bC.push([
        [ZC + .5, QC + 1 + .7, wC + .5],
        [.08, 1.4, .08]
      ]), bC.push([
        [ZC + .5, QC + 1 + 1.4 + .2, wC + .5],
        [Tg, Tg, Tg]
      ])), bC
    }

    function tg(CC, zC) {
      let [ZC, QC, wC] = zC;
      return CC.isBlockInLoadedChunk(ZC, QC, wC) ? CC.blockIdToBlockName(CC.getBlockId(ZC, QC, wC)) : null
    }
    let Dg = null;
    const jg = new Set;
    let yg = null;

    function Lg(CC) {
      Dg = CC;
      for (const zC of jg) zC(CC)
    }
    class Ug {
      constructor(CC) {
        var zC;
        this.plans = CC, this.lastCheckMs = -1 / 0, this.lastRescanMs = -1 / 0, this.storeVersion = -1, this.chunkVersions = new Map, this.shownKey = "", this.meshes = [], this.cues = [], this.goal = null, this.startsBattery = !1, this.unwatch = void 0, this.unwatch = (zC = CC => {
          var zC, ZC;
          this.setGoal(null !== (zC = null === CC || void 0 === CC ? void 0 : CC.goal) && void 0 !== zC ? zC : null, null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.startsBattery) && void 0 !== ZC && ZC)
        }, yg ??= [Hw.o.subscribe("setDirectionArrow", (CC => {
          let {
            id: zC,
            position: ZC,
            text: QC
          } = CC;
          zC === ug && Lg({
            goal: [Math.floor(ZC[0]), Math.floor(ZC[1]), Math.floor(ZC[2])],
            startsBattery: JSON.stringify(null !== QC && void 0 !== QC ? QC : null).includes("arrowStartBattery")
          })
        })), Hw.o.subscribe("clearDirectionArrow", (CC => {
          let {
            id: zC
          } = CC;
          null !== zC && zC !== ug || Lg(null)
        }))], jg.add(zC), zC(Dg), () => {
          jg.delete(zC)
        })
      }
      onAfterRender(CC, zC) {
        const ZC = performance.now();
        if (this.cues.length > 0) {
          const zC = .55 + .45 * Math.sin(ZC / 1100 * Math.PI * 2);
          for (const ZC of this.cues) CC.setGameMesh(ZC, {
            visibility: zC
          })
        }
        if (ZC - this.lastCheckMs < 150) return;
        this.lastCheckMs = ZC;
        const QC = this.plans.all().filter((CC => {
            const [ZC, QC, wC] = CC.box.ctrl;
            return (!CC.formed || null !== this.plans.layoutOf(CC.box.ctrl)) && (ZC - zC[0]) ** 2 + (QC - zC[1]) ** 2 + (wC - zC[2]) ** 2 <= 2304
          })),
          wC = function(CC, zC) {
            const ZC = Jg.f.Ig,
              QC = new Map;
            for (const bC of zC) {
              const zC = kZ(bC.box, 0),
                nC = kZ(bC.box, LZ(bC.box) - 1),
                fC = [Math.min(zC[0], nC[0]), Math.min(zC[1], nC[1]), Math.min(zC[2], nC[2])].map((CC => Math.floor(CC / ZC))),
                oC = [Math.max(zC[0], nC[0]), Math.max(zC[1], nC[1]), Math.max(zC[2], nC[2])].map((CC => Math.floor(CC / ZC)));
              for (let ZC = fC[0]; ZC <= oC[0]; ZC++)
                for (let zC = fC[1]; zC <= oC[1]; zC++)
                  for (let bC = fC[2]; bC <= oC[2]; bC++) {
                    var wC;
                    QC.set(`${ZC},${zC},${bC}`, null !== (wC = CC.getChunkVersion(ZC, zC, bC)) && void 0 !== wC ? wC : -1)
                  }
            }
            return QC
          }(CC, QC);
        this.plans.getVersion() === this.storeVersion && (function(CC, zC) {
          if (CC.size !== zC.size) return !1;
          for (const [ZC, QC] of CC)
            if (zC.get(ZC) !== QC) return !1;
          return !0
        }(wC, this.chunkVersions) || ZC - this.lastRescanMs < 600) || (this.lastRescanMs = ZC, this.storeVersion = this.plans.getVersion(), this.chunkVersions = wC, this.redraw(CC, QC))
      }
      dispose(CC) {
        this.unwatch(), Dg = null, this.clearMeshes(CC), this.chunkVersions.clear(), this.shownKey = ""
      }
      setGoal(CC, zC) {
        var ZC;
        (null === CC || void 0 === CC ? void 0 : CC.join()) === (null === (ZC = this.goal) || void 0 === ZC ? void 0 : ZC.join()) && zC === this.startsBattery || (this.goal = CC, this.startsBattery = zC, this.storeVersion = -1)
      }
      redraw(CC, zC) {
        const ZC = zC => tg(CC, zC),
          QC = new Map,
          wC = [],
          bC = this.plans.guideOn();
        for (const qC of zC) {
          const CC = bC && hg(qC, this.plans.showsStarter(qC.box.ctrl), (CC => ZC(kZ(qC.box, CC)))),
            zC = "reactor" === qC.kind ? this.plans.layoutOf(qC.box.ctrl) : null,
            nC = bC && !qC.formed ? dg(qC, ZC, this.goal) : -1;
          nC >= 0 && wC.push([kZ(qC.box, nC), Eg(qC.box, nC)]);
          const fC = LZ(qC.box);
          for (let wC = 0; wC < fC; wC++) {
            const fC = kZ(qC.box, wC),
              oC = ZC(fC),
              FC = null === oC ? null : Kg(qC, wC, oC, CC, bC, zC);
            if (null !== FC) {
              const CC = "wrong" !== FC && Hg(qC.box, wC, nC),
                zC = CC ? `${FC}Dim` : FC;
              let ZC = QC.get(zC);
              ZC || (ZC = {
                draw: {
                  ghost: FC,
                  dim: CC
                },
                list: []
              }, QC.set(zC, ZC)), ZC.list.push(fC)
            }
          }
        }
        if (bC && this.startsBattery && this.goal) {
          const [CC, zC, wC] = this.goal, bC = [];
          for (const [QC, nC, fC] of rg) {
            const oC = [CC + QC, zC + nC, wC + fC];
            "Air" === ZC(oC) && bC.push(oC)
          }
          if (bC.length > 0) {
            var nC;
            const CC = null !== (nC = QC.get("cell")) && void 0 !== nC ? nC : {
              draw: {
                ghost: "cell",
                dim: !1
              },
              list: []
            };
            CC.list.push(...bC), QC.set("cell", CC)
          }
        }
        const fC = [...QC.keys()].sort(),
          oC = [...fC.map((CC => `${CC}:${QC.get(CC).list.join(";")}`)), `cue:${wC.join(";")}`].join("|");
        if (oC !== this.shownKey) {
          this.shownKey = oC, this.clearMeshes(CC);
          for (const zC of fC) {
            const {
              draw: ZC,
              list: wC
            } = QC.get(zC);
            this.meshes.push(this.build(CC, ZC, wC))
          }
          for (const [zC, ZC] of wC) this.cues.push(vg(CC, ag(zC, ZC), sg))
        }
      }
      build(CC, zC, ZC) {
        let {
          ghost: QC,
          dim: wC
        } = zC;
        const {
          size: bC,
          colour: nC,
          alpha: fC
        } = cg[QC], oC = ZC[0], qC = [], FC = [];
        for (const [WC, NC, MC] of ZC) ig(qC, FC, [WC - oC[0] + .5, NC - oC[1] + .5, MC - oC[2] + .5], [bC, bC, bC]);
        return CC.createGameMesh({
          positions: qC,
          indices: FC
        }, {
          rgb: nC,
          alpha: fC * (wC ? .3 : 1)
        }, oC)
      }
      clearMeshes(CC) {
        for (const zC of [...this.meshes, ...this.cues]) CC.disposeGameMesh(zC);
        this.meshes = [], this.cues = []
      }
    }
    const Bg = [.56, .83, 1],
      Og = [1, .3, .25];
    class kg {
      constructor(CC) {
        this.plans = CC, this.meshes = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(CC, zC, ZC) {
        var QC;
        const wC = performance.now();
        if (wC - this.lastCheckMs < 150) return;
        this.lastCheckMs = wC;
        const bC = zC => tg(CC, zC),
          nC = null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name,
          fC = nC && "Reactor Frame" === dZ(nC) ? CC.getTargetedBlock() : null,
          oC = fC ? [fC.wp[0], fC.wp[1], fC.wp[2]] : null,
          qC = null !== oC && "Air" === bC(oC) && oC.every(((CC, zC) => Math.abs(CC + .5 - ZC[zC]) <= 8)) ? Xg(oC, ZC, bC, (CC => this.inPlan(CC))) : null,
          FC = qC ? `${qC.box.ctrl.join()}|${qC.box.rot}|${qC.fits}` : "";
        FC !== this.shownKey && this.show(CC, FC, qC)
      }
      dispose(CC) {
        this.clear(CC), this.shownKey = ""
      }
      inPlan(CC) {
        return this.plans.all().some((zC => VZ(zC.box, CC) >= 0))
      }
      show(CC, zC, ZC) {
        if (this.clear(CC), this.shownKey = zC, !ZC) return;
        const {
          box: QC,
          fits: wC
        } = ZC, bC = wC ? Bg : Og, {
          lo: nC,
          hi: fC
        } = ro(QC);
        this.meshes.push(vg(CC, so(nC, fC, .05), {
          rgb: bC,
          alpha: 1
        }));
        const oC = [],
          qC = kZ(QC, 0)[1];
        for (let FC = 0; FC < QC.w * QC.d; FC++) {
          const [CC, , zC] = kZ(QC, FC);
          oC.push([
            [CC + .5, qC + .02 + .01, zC + .5],
            [.94, .04, .94]
          ])
        }
        this.meshes.push(vg(CC, oC, {
          rgb: bC,
          alpha: .25
        }))
      }
      clear(CC) {
        for (const zC of this.meshes) CC.disposeGameMesh(zC);
        this.meshes = []
      }
    }
    const Vg = "buildAFactory2Game:";

    function CS(CC, zC, ZC) {
      const QC = CC => {
          const [ZC, QC, wC] = CC.box.ctrl;
          return ZC === zC[0] && QC === zC[1] && wC === zC[2]
        },
        wC = CC.find((CC => QC(CC) || VZ(CC.box, zC) >= 0));
      if (!wC) return null;
      const bC = function(CC, zC, ZC) {
        const {
          w: QC,
          h: wC,
          d: bC
        } = CC.box, nC = "reactor" === CC.kind ? `${Vg}rxTitle` : `${Vg}batTitle`;
        if (CC.formed) return {
          key: `${Vg}lookPlanFormed`,
          kindKey: nC,
          w: QC,
          h: wC,
          d: bC,
          count: 0
        };
        let fC = 0,
          oC = 0;
        for (let FC = 0; FC < LZ(CC.box); FC++) {
          const zC = ZC(kZ(CC.box, FC)),
            QC = null === zC ? "ok" : wQ(CC.kind, CQ(CC.box, FC), zC);
          fC += "missing" === QC ? 1 : 0, oC += "wrong" === QC || "blocked" === QC ? 1 : 0
        }
        const qC = function(CC, zC, ZC) {
          if (zC < 0 || null === ZC) return;
          const QC = CQ(CC.box, zC),
            wC = wQ(CC.kind, QC, ZC);
          return "blocked" === wC ? `${Vg}lookWhy_blocked` : "wrong" === wC ? "ctrl" === QC ? `${Vg}lookWhy_ctrl` : `${Vg}lookWhy_reactor_${QC}` : void 0
        }(CC, VZ(CC.box, zC), ZC([zC[0], zC[1], zC[2]]));
        if (fC > 0) return {
          key: `${Vg}lookPlanToBuild`,
          kindKey: nC,
          w: QC,
          h: wC,
          d: bC,
          count: fC,
          why: qC
        };
        if (oC > 0) return {
          key: `${Vg}lookPlanTakeOut`,
          kindKey: nC,
          w: QC,
          h: wC,
          d: bC,
          count: oC,
          why: qC
        };
        return {
          key: "reactor" === CC.kind ? `${Vg}lookPlanNoRods` : `${Vg}lookPlanDone`,
          kindKey: nC,
          w: QC,
          h: wC,
          d: bC,
          count: 0
        }
      }(wC, zC, ZC);
      return "reactor" === wC.kind && QC(wC) ? {
        ...bC,
        ctrl: !0
      } : bC
    }

    function zS(CC, zC) {
      return CC === zC || null !== CC && null !== zC && CC.key === zC.key && CC.kindKey === zC.kindKey && CC.w === zC.w && CC.h === zC.h && CC.d === zC.d && CC.count === zC.count && CC.why === zC.why && CC.ctrl === zC.ctrl
    }

    function ZS() {
      return performance.now()
    }
    class QS {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZS;
        this.ticket = CC, this.sent = zC, this.backstopMs = ZC, this.now = QC, this.queuedAt = void 0, this.queuedAt = QC()
      }
      answered() {
        const CC = this.now(),
          zC = this.sent.leftAt(this.ticket);
        return null !== zC && CC - zC > 4e3 || CC - this.queuedAt > this.backstopMs
      }
      age() {
        return this.now() - this.queuedAt
      }
    }
    class wS {
      constructor() {
        this.echoes = []
      }
      add(CC) {
        this.echoes = this.echoes.filter((CC => !CC.answered())), this.echoes.push(CC)
      }
      answered() {
        var CC, zC;
        return null === (CC = null === (zC = this.echoes.at(-1)) || void 0 === zC ? void 0 : zC.answered()) || void 0 === CC || CC
      }
      agreeCounts() {
        return this.echoes.slice(0, -1).every((CC => CC.answered()))
      }
      age() {
        var CC, zC;
        return null !== (CC = null === (zC = this.echoes.at(-1)) || void 0 === zC ? void 0 : zC.age()) && void 0 !== CC ? CC : null
      }
      clear() {
        this.echoes = []
      }
    }
    class bS {
      constructor(CC) {
        this.send = CC, this.value = null, this.sent = null, this.echoes = new wS, this.down = !1, this.timer = null
      }
      shown(CC) {
        return null === this.value ? CC : this.down || this.value !== this.sent ? this.value : CC === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), CC) : this.value
      }
      pendingFor(CC) {
        return null !== this.value && this.value === this.sent && CC !== this.value ? this.echoes.age() : null
      }
      assume(CC, zC) {
        this.disarm(), this.down = !1, this.value = CC, this.sent = CC, this.echoes.clear(), this.echoes.add(zC)
      }
      press() {
        this.down = !0
      }
      drag(CC) {
        this.value = CC, this.arm(this.down ? 1e3 : 400)
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
      arm(CC) {
        this.disarm(), this.timer = setTimeout((() => {
          this.timer = null, this.flush()
        }), CC)
      }
      disarm() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
    class nS {
      constructor() {
        this.pending = new Map
      }
      set(CC, zC, ZC) {
        var QC;
        const wC = null !== (QC = this.pending.get(CC)) && void 0 !== QC ? QC : {
          on: zC,
          echoes: new wS
        };
        wC.on = zC, wC.echoes.add(ZC), this.pending.set(CC, wC)
      }
      shown(CC) {
        let zC = CC;
        for (const [ZC, {
            on: QC,
            echoes: wC
          }] of this.pending) 0 !== (CC & ZC) === QC && wC.agreeCounts() || wC.answered() ? this.pending.delete(ZC) : zC = QC ? zC | ZC : zC & ~ZC;
        return zC
      }
      pendingMask() {
        let CC = 0;
        for (const zC of this.pending.keys()) CC |= zC;
        return CC
      }
      pendingFor(CC) {
        let zC = null;
        for (const [QC, {
            on: wC,
            echoes: bC
          }] of this.pending) {
          if (void 0 !== CC && 0 !== (CC & QC) === wC) continue;
          const nC = bC.age();
          var ZC;
          if (null !== nC) zC = Math.max(null !== (ZC = zC) && void 0 !== ZC ? ZC : 0, nC)
        }
        return zC
      }
      clear() {
        this.pending.clear()
      }
    }
    class fS {
      constructor() {
        this.dims = null, this.echoes = new wS, this.unmet = null
      }
      shown(CC) {
        var zC;
        return this.dims && (oS(this.dims, CC) && this.echoes.agreeCounts() || this.echoes.answered()) && (oS(this.dims, CC) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (zC = this.dims) && void 0 !== zC ? zC : CC
      }
      takeUnmet() {
        const CC = this.unmet;
        return this.unmet = null, CC
      }
      set(CC, zC) {
        this.dims = CC, this.echoes.add(zC)
      }
      pendingFor(CC) {
        return null === this.dims || CC && oS(this.dims, CC) ? null : this.echoes.age()
      }
      clear() {
        this.dims = null, this.unmet = null, this.echoes.clear()
      }
    }

    function oS(CC, zC) {
      return CC[0] === zC[0] && CC[1] === zC[1] && CC[2] === zC[2]
    }
    class qS {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZS;
        this.now = CC, this.taps = new Map
      }
      tap(CC, zC, ZC) {
        return !this.busy(CC) && (this.taps.set(CC, {
          at: this.now(),
          done: zC
        }), ZC(), !0)
      }
      settle(CC) {
        for (const [zC, ZC] of [...this.taps]) ZC.done(CC) && this.taps.delete(zC)
      }
      busy(CC) {
        const zC = this.taps.get(CC);
        return !!zC && (!(this.now() - zC.at >= 3e3) || (this.taps.delete(CC), !1))
      }
      busyIds() {
        const CC = new Set;
        for (const zC of [...this.taps.keys()]) this.busy(zC) && CC.add(zC);
        return CC
      }
      clear() {
        this.taps.clear()
      }
    }

    function FS(CC) {
      return {
        send: zC => CC.track(zC),
        sendUrgent: (zC, ZC) => CC.track(zC, {
          urgent: !0,
          supersedes: ZC
        }),
        leftAt: zC => CC.leftAt(zC),
        holdReserve: () => CC.holdUrgentReserve(),
        answerMs: cn
      }
    }

    function WS() {
      return performance.now()
    }

    function NS(CC) {
      const zC = CC.baf2RxNeed.map((CC => {
        let [zC, ZC] = CC;
        return [zC, ZC]
      }));
      return JSON.stringify([CC.baf2RxFormed, zC, CC.baf2RxBad, CC.baf2RxCells])
    }

    function MS(CC, zC) {
      const ZC = 0 !== (zC & Nz),
        QC = 0 !== (CC.baf2RxFlags & Nz);
      return !ZC || QC || "running" !== CC.baf2RxState && "idle" !== CC.baf2RxState ? !ZC && QC && "scram" === CC.baf2RxState && CC.baf2RxFuel > 0 ? "idle" : CC.baf2RxState : "scram"
    }

    function gS(CC) {
      return JSON.stringify([CC.baf2BatFormed, CC.baf2BatNeed, CC.baf2BatBad])
    }

    function SS(CC) {
      return CC.join(",")
    }
    class pS {
      constructor() {
        this.listeners = new Set
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      notify() {
        for (const CC of this.listeners) CC()
      }
      clear() {
        this.listeners.clear()
      }
    }
    class PS {
      constructor() {
        this.lastAt = -1 / 0, this.lastUntil = -1 / 0
      }
      heard(CC, zC) {
        this.lastAt = CC, this.lastUntil = CC + zC
      }
      answered(CC) {
        return this.lastAt >= CC || CC < this.lastUntil
      }
    }
    class GS {
      constructor(CC, zC) {
        this.link = CC, this.now = zC, this.hold = new fS, this.picked = null, this.notTaken = null
      }
      shown(CC) {
        const zC = this.hold.shown(CC);
        if (this.hold.takeUnmet() && this.picked) {
          var ZC;
          const {
            plans: zC,
            ctrl: QC,
            at: wC
          } = this.picked;
          this.picked = null, zC.unpredict(QC), null === (ZC = this.notTaken) || void 0 === ZC || ZC.call(this, CC, wC)
        }
        return zC
      }
      pendingFor(CC) {
        return this.hold.pendingFor(CC)
      }
      CM(CC, zC, ZC) {
        CC.predictSize(zC, ZC), this.picked = {
          plans: CC,
          ctrl: zC,
          at: this.now()
        };
        const QC = this.link.send(Wz(zC, "plan", ...ZC));
        this.hold.set(ZC, new QS(QC, this.link, this.link.answerMs, this.now))
      }
      clear() {
        this.hold.clear(), this.picked = null
      }
    }
    class RS {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WS;
        this.plans = CC, this.readInterior = zC, this.link = ZC, this.now = QC, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new nS, this.throttle = void 0, this.oneShots = void 0, this.listeners = new pS, this.redraw = null, this.releaseReserve = null, this.size = new GS(ZC, QC), this.oneShots = new qS(QC), this.throttle = new bS((CC => this.echo(this.link.send(this.command("throttle", CC)))))
      }
      set(CC) {
        !CC.baf2RxOpen && this.raw && SS(this.raw.baf2RxAt) === SS(CC.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(CC), this.bp(CC)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(CC) {
        this.size.notTaken = CC
      }
      resize(CC) {
        this.raw && (this.size.CM(this.plans, this.raw.baf2RxAt, CC), this.bp(this.raw))
      }
      toggleStarter() {
        if (!this.raw) return;
        const CC = this.raw.baf2RxAt;
        this.plans.setStarter(CC, !this.plans.showsStarter(CC)), this.bp(this.raw)
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.raw && this.bp(this.raw)
      }
      confirmOverdrive() {
        this.odConfirmed = !0, this.raw && this.bp(this.raw)
      }
      send(CC) {
        if (this.raw) {
          for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
          this.link.send(this.command(CC, ...ZC))
        }
      }
      tap(CC, zC) {
        this.raw && this.oneShots.tap(CC, function(CC, zC) {
          if ("start" === CC) return CC => 0 === (CC.baf2RxFlags & Nz);
          if ("odConfirm" === CC) return CC => 0 !== (CC.baf2RxFlags & Mz);
          const ZC = NS(zC);
          return CC => NS(CC) !== ZC
        }(CC, this.raw), zC) && ("start" === CC && (this.startedAt = this.now()), this.bp(this.raw))
      }
      shutDown() {
        this.startGuard() || this.setFlag(Nz, !0)
      }
      startGuard() {
        return null !== this.startedAt && this.now() - this.startedAt < 400
      }
      setFlag(CC, zC) {
        if (!this.raw) return;
        const ZC = CC === Nz ? this.command(zC ? "scram" : "start") : this.command("od", zC ? 1 : 0),
          QC = zC && CC === Nz,
          wC = `${Fz} ${this.raw.baf2RxAt.join(" ")} `,
          bC = this.echo(QC ? this.link.sendUrgent(ZC, (CC => {
            const zC = CC.startsWith(wC) ? CC.slice(wC.length).split(" ")[0] : null;
            return "throttle" === zC || "start" === zC
          })) : this.link.send(ZC));
        this.flags.set(CC, zC, bC), QC && this.throttle.assume(0, bC), this.bp(this.raw)
      }
      throttlePress() {
        this.throttle.press()
      }
      throttleDrag(CC) {
        this.throttle.drag(CC), this.raw && this.bp(this.raw)
      }
      throttleRelease() {
        this.throttle.release(), this.raw && this.bp(this.raw)
      }
      subscribe(CC) {
        return this.listeners.subscribe(CC)
      }
      opened() {
        this.releaseReserve ??= this.link.holdReserve()
      }
      closed() {
        var CC;
        this.throttle.release(), null === (CC = this.releaseReserve) || void 0 === CC || CC.call(this), this.releaseReserve = null
      }
      dispose() {
        this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
      }
      command(CC) {
        for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
        return Wz(this.raw.baf2RxAt, CC, ...ZC)
      }
      echo(CC) {
        return new QS(CC, this.link, this.link.answerMs, this.now)
      }
      bp(CC) {
        var zC;
        this.raw = CC;
        const ZC = this.flags.shown(CC.baf2RxFlags),
          QC = {
            ...CC,
            baf2RxFlags: ZC,
            baf2RxTarget: this.throttle.shown(CC.baf2RxTarget),
            baf2RxState: MS(CC, ZC)
          },
          wC = this.size.shown(QC.baf2RxDims),
          bC = this.throttle.pendingFor(),
          nC = [this.throttle.pendingFor(CC.baf2RxTarget), this.flags.pendingFor(CC.baf2RxFlags), this.size.pendingFor(CC.baf2RxDims)].filter((CC => null !== CC)),
          fC = nC.length > 0 ? Math.max(...nC) : null,
          oC = this.oneShots.busyIds(),
          qC = QC.baf2RxAt;
        let FC, WC, NC = null,
          MC = [Math.max(0, wC[0] - 2), Math.max(0, wC[1] - 2), Math.max(0, wC[2] - 2)];
        if (QC.baf2RxFormed) {
          const [CC, zC, ZC] = QC.baf2RxDims;
          MC = [Math.max(0, CC - 2), Math.max(0, zC - 2), Math.max(0, ZC - 2)], FC = Array.from(QC.baf2RxCells, Number), WC = `${MC.join(",")}:${QC.baf2RxCells}`
        } else {
          var gC;
          const CC = null === (gC = this.plans.planAt(qC)) || void 0 === gC ? void 0 : gC.box,
            zC = CC ? DZ(CC, "reactor", ...wC) : aZ(qC, 1, ...wC, tZ("reactor", wC[0])),
            ZC = this.readInterior(zC);
          NC = bo(MC, ZC), FC = ZC, WC = `${MC.join(",")}:${ZC.join("")}`
        }(null === (zC = this.looksOf) || void 0 === zC ? void 0 : zC.key) !== WC && (this.looksOf = {
          key: WC,
          looks: Wo(MC, FC)
        }), this.view = {
          status: QC,
          dims: wC,
          plan: NC,
          inner: MC,
          looks: this.looksOf.looks,
          starter: this.plans.showsStarter(qC),
          odConfirmed: this.odConfirmed || 0 !== (QC.baf2RxFlags & Rz),
          guide: this.plans.guideOn(),
          throttlePending: null !== bC,
          pendingFlags: this.flags.pendingMask(),
          waiting: null !== fC && fC >= 5e3,
          busy: oC,
          startGuard: this.startGuard()
        }, this.listeners.notify(), (null !== fC || oC.size > 0 || this.startGuard()) && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.raw && this.bp(this.raw)
        }), 250))
      }
    }
    class AS {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WS;
        this.plans = CC, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new pS, this.redraw = null, this.size = new GS(zC, ZC), this.oneShots = new qS(ZC)
      }
      set(CC) {
        !CC.baf2BatOpen && this.view && SS(this.view.status.baf2BatAt) === SS(CC.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(CC), this.bp(CC)
      }
      tap(CC, zC) {
        if (!this.view) return;
        const ZC = gS(this.view.status);
        this.oneShots.tap(CC, (CC => gS(CC) !== ZC), zC) && this.bp(this.view.status)
      }
      get() {
        return this.view
      }
      onSizeNotTaken(CC) {
        this.size.notTaken = CC
      }
      resize(CC) {
        this.view && (this.size.CM(this.plans, this.view.status.baf2BatAt, CC), this.bp(this.view.status))
      }
      toggleGuide() {
        this.plans.setGuide(!this.plans.guideOn()), this.view && this.bp(this.view.status)
      }
      subscribe(CC) {
        return this.listeners.subscribe(CC)
      }
      dispose() {
        this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
      }
      bp(CC) {
        const zC = this.size.shown(CC.baf2BatDims),
          ZC = this.oneShots.busyIds();
        this.view = {
          status: CC,
          dims: zC,
          HW: vo(zC, CC.baf2BatDims) ? CC.baf2BatCapacity : go(...zC),
          guide: this.plans.guideOn(),
          busy: ZC
        }, this.listeners.notify(), ZC.size > 0 && null === this.redraw && (this.redraw = setTimeout((() => {
          this.redraw = null, this.view && this.bp(this.view.status)
        }), 250))
      }
    }
    const xS = "buildAFactory2Game:";

    function JS() {
      var CC;
      const zC = document.querySelector(".Baf2PanelOverlay .Baf2PanelHeader");
      if (!zC) return null;
      const ZC = zC.querySelector(".ExitButton");
      return function(CC, zC) {
        const ZC = zC ? zC.left - 8 : CC.right;
        return {
          left: CC.left,
          top: CC.top,
          width: Math.max(0, ZC - CC.left),
          height: CC.height
        }
      }(zC.getBoundingClientRect(), null !== (CC = null === ZC || void 0 === ZC ? void 0 : ZC.getBoundingClientRect()) && void 0 !== CC ? CC : null)
    }
    const IS = (0, QC.memo)((function(CC) {
      let {
        store: zC
      } = CC;
      const {
        t: ZC
      } = (0, ew.y)(), [wC, bC] = (0, QC.useState)((() => zC.get())), [nC, fC] = (0, QC.useState)((() => performance.now()));
      (0, QC.useEffect)((() => (bC(zC.get()), zC.subscribe((() => {
        bC(zC.get()), fC(performance.now())
      })))), [zC]);
      const {
        alarm: oC,
        boomAt: qC
      } = wC, FC = null !== oC && null !== oC.secs, [WC, NC] = (0, QC.useState)(null);
      (0, QC.useEffect)((() => {
        if (!FC) return;
        NC(JS());
        const CC = setInterval((() => {
          fC(performance.now()), NC(JS())
        }), 250);
        return () => {
          clearInterval(CC)
        }
      }), [FC]);
      const [MC, gC] = (0, QC.useState)(!1);
      return (0, QC.useEffect)((() => {
        if (qC === -1 / 0) return;
        gC(!0);
        const CC = setTimeout((() => {
          gC(!1)
        }), 1300);
        return () => {
          clearTimeout(CC)
        }
      }), [qC]), (0, vb.jsxs)(vb.Fragment, {
        children: [null !== oC && (0, vb.jsx)("div", {
          className: "Baf2RxSiren",
          role: "alert",
          children: ZC(oC.hot ? `${xS}rxAlarmSiren` : `${xS}rxAlarmDamaged`, {
            amount: String(oC.damage)
          })
        }), null !== oC && null !== oC.secs && (0, vb.jsx)("div", {
          className: WC ? "Baf2RxCountdown Docked" : "Baf2RxCountdown",
          style: null !== WC && void 0 !== WC ? WC : void 0,
          "aria-live": "assertive",
          children: ZC(`${xS}rxAlarmCountdown`, {
            amount: String((SC = oC.secs, pC = nC - oC.receivedAt, Math.max(1, Math.ceil(SC - pC / 1e3))))
          })
        }), MC && (0, vb.jsx)("div", {
          className: "Baf2RxBoom"
        })]
      });
      var SC, pC
    }));
    class iS {
      constructor() {
        this.byReactor = new Map, this.snapshot = {
          alarm: null,
          boomAt: -1 / 0
        }, this.listeners = new Set
      }
      fR(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const ZC = CC.baf2RxAlarmAt.join(",");
        let QC = this.snapshot.boomAt;
        if (CC.baf2RxAlarmBoom) this.byReactor.delete(ZC), QC = zC;
        else if (CC.baf2RxAlarmDamage <= 0) this.byReactor.delete(ZC);
        else {
          var wC;
          this.byReactor.set(ZC, {
            damage: CC.baf2RxAlarmDamage,
            secs: null !== (wC = CC.baf2RxAlarmSecs) && void 0 !== wC ? wC : null,
            hot: !0 === CC.baf2RxAlarmHot,
            receivedAt: zC
          })
        }
        this.bp(QC)
      }
      retain(CC) {
        let zC = !1;
        for (const ZC of [...this.byReactor.keys()]) CC.has(ZC) || (this.byReactor.delete(ZC), zC = !0);
        zC && this.bp(this.snapshot.boomAt)
      }
      has(CC) {
        return this.byReactor.has(CC)
      }
      get() {
        return this.snapshot
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.listeners.clear(), this.byReactor.clear()
      }
      bp(CC) {
        let zC = null;
        for (const ZC of this.byReactor.values())(!zC || ZC.damage > zC.damage) && (zC = ZC);
        this.snapshot = {
          alarm: zC,
          boomAt: CC
        };
        for (const ZC of this.listeners) ZC()
      }
    }
    const vS = {
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

    function eS(CC) {
      return [CC[0], CC[1], CC[2]]
    }

    function hS(CC) {
      return `${CC[0]},${CC[1]},${CC[2]}`
    }
    class KS {
      constructor(CC) {
        if (this.plans = CC, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
            var CC;
            return {
              active: this.glows.flatMap((CC => {
                let {
                  record: zC
                } = CC;
                return zC ? [zC] : []
              })),
              log: [...null !== (CC = this.devLog) && void 0 !== CC ? CC : []]
            }
          }, this.devLog && "undefined" !== typeof window) {
          window.baf2Glows = this.devAccessor
        }
      }
      glowLog() {
        var CC;
        return null !== (CC = this.devLog) && void 0 !== CC ? CC : []
      }
      check(CC, zC, ZC) {
        const QC = new Set(zC.map((CC => hS(CC.box.ctrl))));
        for (const nC of function(CC, zC) {
            const ZC = [],
              QC = new Map(CC);
            CC.clear();
            for (const wC of zC) {
              const zC = Rg(wC.box.ctrl),
                bC = wC.formed ? wC.level : 0;
              CC.set(zC, bC), bC > 0 && 0 === QC.get(zC) && ZC.push(wC)
            }
            return ZC
          }(this.levels, this.plans.all())) QC.has(hS(nC.box.ctrl)) && this.show(CC, nC, "on", ZC);
        const wC = this.plans.lastFormed();
        if (null === wC || wC.receivedAt <= this.flashedAt) return null;
        this.flashedAt = wC.receivedAt;
        const bC = function(CC, zC) {
          var ZC;
          const QC = Rg(CC);
          return null !== (ZC = zC.find((CC => Rg(CC.box.ctrl) === QC))) && void 0 !== ZC ? ZC : null
        }(wC.ctrl, zC);
        return bC && this.show(CC, bC, "formed", ZC), bC
      }
      fade(CC, zC) {
        0 !== this.glows.length && (this.glows = this.glows.filter((ZC => {
          let {
            mesh: QC,
            glow: wC,
            startMs: bC,
            record: nC
          } = ZC;
          const fC = (zC - bC) / vS[wC].ms;
          return fC >= 1 ? (CC.disposeGameMesh(QC), nC && (nC.endMs = zC), !1) : (CC.setGameMesh(QC, {
            visibility: "formed" === wC ? 1 - fC : Math.sin(Math.PI * fC)
          }), !0)
        })))
      }
      dispose(CC) {
        for (const {
            mesh: ZC
          }
          of this.glows) CC.disposeGameMesh(ZC);
        this.glows = [], this.levels.clear();
        const zC = "undefined" !== typeof window ? window : null;
        (null === zC || void 0 === zC ? void 0 : zC.baf2Glows) === this.devAccessor && delete zC.baf2Glows
      }
      show(CC, zC, ZC, QC) {
        const {
          lo: wC,
          hi: bC
        } = ro(zC.box);
        let nC = null;
        this.devLog && (nC = {
          glow: ZC,
          ctrl: eS(zC.box.ctrl),
          lo: eS(wC),
          hi: eS(bC),
          startMs: QC,
          endMs: null
        }, this.devLog.push(nC), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
          mesh: this.build(CC, ZC, so(wC, bC, vS[ZC].thick)),
          glow: ZC,
          startMs: QC,
          record: nC
        })
      }
      build(CC, zC, ZC) {
        const QC = vg(CC, ZC, {
          rgb: vS[zC].colour,
          alpha: 1
        });
        return CC.setGameMesh(QC, {
          visibility: 0
        }), QC
      }
    }
    const YS = 1 / .6,
      dS = {
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
        blendMode: sf.d.Standard,
        soft: !0
      },
      mS = {
        ...dS,
        size: [.25, .4],
        count: 2
      };

    function HS(CC) {
      return {
        colours: [CC, CC],
        alpha: 1,
        size: [.05, .08],
        life: [.4, .7],
        power: [.8, 1.4],
        lift: -3,
        spread: .6,
        count: 2,
        blendMode: sf.d.Add,
        soft: !1
      }
    }
    const ES = HS([150, 225, 255]),
      lS = HS([185, 145, 255]),
      XS = ["Deep Drill", "Shatter Mill", "Sky Tap"];

    function cS(CC) {
      const zC = Ez[CC];
      return null === zC.fuelSlot || wZ(zC) ? XS.includes(CC) ? lS : ES : dS
    }
    const uS = {
        kind: "smokePuff"
      },
      rS = [.2, .025, .2];

    function sS(CC, zC) {
      const [
        [ZC, QC, wC],
        [bC, nC, fC]
      ] = CC.colours;
      return {
        texture: CC.soft ? uS : "square_particle",
        HW: zC,
        minLifeTime: CC.life[0] / YS,
        maxLifeTime: CC.life[1] / YS,
        minEmitPower: CC.power[0] * YS,
        maxEmitPower: CC.power[1] * YS,
        minSize: CC.size[0],
        maxSize: CC.size[1],
        emitRate: 0,
        gravity: [0, CC.lift * YS * YS, 0],
        dir1: [-CC.spread, 1, -CC.spread],
        dir2: [CC.spread, 1, CC.spread],
        colorGradients: [{
          timeFraction: 0,
          minColor: [ZC, QC, wC, CC.alpha],
          maxColor: [bC, nC, fC, CC.alpha]
        }, {
          timeFraction: 1,
          minColor: [ZC, QC, wC, 0],
          maxColor: [bC, nC, fC, 0]
        }],
        blendMode: CC.blendMode
      }
    }
    class TS {
      constructor(CC) {
        this.fixed = CC, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
      }
      puff(CC, zC, ZC) {
        var QC;
        if (ZC === this.lastFrame) return !1;
        this.lastFrame = ZC;
        const wC = this.at;
        wC[0] = zC[0] + .5, wC[1] = zC[1] + 1.025, wC[2] = zC[2] + .5;
        const bC = null !== (QC = this.fixed) && void 0 !== QC ? QC : fC() ? mS : dS;
        let nC = this.particles.get(bC);
        return nC || (nC = CC.createParticles(function(CC) {
          return sS(CC, Math.ceil(12 * CC.count * CC.life[1]) + CC.count)
        }(bC), {
          pos: wC,
          half: rS
        }), this.particles.set(bC, nC)), nC.moveTo(wC), nC.emit(bC.count), !0
      }
      dispose() {
        for (const CC of this.particles.values()) CC.stop();
        this.particles.clear()
      }
    }
    class aS {
      constructor() {
        this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this.frame = 0
      }
      index(CC) {
        this.indexed = !0;
        for (const zC of hz) {
          const ZC = cS(zC);
          for (let QC = 1; QC <= 4; QC++) {
            const wC = CC.blockNameToBlockId(`${zC}|meta|rot${QC}|Running`, !0);
            if (null === wC) continue;
            let bC = this.pufferIndexByStyle.get(ZC);
            void 0 === bC && (bC = this.pufferList.push(new TS(ZC === dS ? null : ZC)) - 1, this.pufferIndexByStyle.set(ZC, bC)), this.pufferIndexById[wC] = bC + 1
          }
        }
      }
      onAfterRender(CC, zC) {
        this.indexed || this.index(CC);
        const ZC = performance.now(),
          QC = 0 === this.lastMs ? 0 : Math.min(ZC - this.lastMs, 250) / 1e3;
        this.lastMs = ZC, this.frame++, CC.particlesEnabled() ? (this.scan(CC, zC), this.puff(CC, QC)) : this.sources = []
      }
      dispose() {
        for (const CC of this.pufferList) CC.dispose();
        this.sources = [], this.found = []
      }
      scan(CC, zC) {
        0 === this.scanRow && (this.origin = [Math.floor(zC[0]) - 12, Math.floor(zC[1]) - 6, Math.floor(zC[2]) - 12]);
        const ZC = Math.min(this.scanRow + 16, 325),
          [QC, wC, bC] = this.origin,
          nC = this.hits;
        nC.length = 0;
        for (let fC = this.scanRow; fC < ZC; fC++) {
          const zC = QC + fC % 25,
            ZC = wC + Math.floor(fC / 25);
          CC.scanBlocks(zC, ZC, bC, zC + 1, ZC + 1, bC + 25, this.pufferIndexById, nC)
        }
        for (let fC = 0; fC < nC.length; fC += 4) {
          const CC = nC[fC + 3];
          this.found.push({
            pos: [nC[fC], nC[fC + 1], nC[fC + 2]],
            SF: CC,
            puffer: this.pufferList[this.pufferIndexById[CC] - 1]
          })
        }
        this.scanRow = ZC, 325 === ZC && (this.sources = this.found, this.found = [], this.scanRow = 0)
      }
      puff(CC, zC) {
        const ZC = this.sources.length;
        if (0 !== ZC) {
          this.budget = Math.min(this.budget + Math.min(ZC / 1.2, 12) * zC, 2);
          for (let zC = 0; zC < ZC && this.budget >= 1; zC++) {
            const zC = this.sources[this.cursor % ZC];
            this.cursor = (this.cursor + 1) % ZC, CC.getBlockId(zC.pos[0], zC.pos[1], zC.pos[2]) === zC.SF && (zC.puffer.puff(CC, zC.pos, this.frame) && this.budget--)
          }
        } else this.budget = 0
      }
    }
    const tS = {
        ...HS([190, 255, 150]),
        size: [.16, .26],
        life: [.6, 1],
        power: [1, 1.8],
        count: 5
      },
      DS = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ];

    function jS(CC) {
      return 0 === CC.spots.length ? 0 : Math.min(1 * CC.level, 4)
    }

    function yS(CC) {
      return 0 === CC.glass.length ? 0 : Math.min(.75 * CC.level, 3)
    }

    function LS(CC) {
      return `${CC.ctrl.join(",")}:${CC.rot}:${CC.cu},${CC.cv}:${CC.w},${CC.h},${CC.d}`
    }

    function US(CC, zC) {
      const ZC = zC.w - 2,
        QC = zC.h - 2,
        wC = zC.d - 2,
        bC = [];
      for (let nC = 0; nC < ZC * QC * wC; nC++) {
        const fC = nC % ZC,
          oC = Math.floor(nC / ZC) % wC,
          qC = Math.floor(nC / (ZC * wC));
        if (fC > 0 && fC < ZC - 1 && oC > 0 && oC < wC - 1 && qC > 0 && qC < QC - 1) continue;
        const FC = kZ(zC, ZQ(zC, nC)),
          WC = tg(CC, FC);
        if (null !== WC && "Fuel Rod" === dZ(WC))
          for (const zC of DS) {
            const ZC = [FC[0] + zC[0], FC[1] + zC[1], FC[2] + zC[2]];
            OS(CC, ZC) && bC.push(kS(ZC, zC))
          }
      }
      return bC
    }

    function BS(CC, zC) {
      const {
        lo: ZC,
        hi: QC
      } = ro(zC), wC = [];
      for (let bC = ZC[0]; bC < QC[0]; bC++)
        for (let zC = ZC[1]; zC < QC[1]; zC++) {
          const nC = bC === ZC[0] || bC === QC[0] - 1 || zC === ZC[1] || zC === QC[1] - 1 ? 1 : Math.max(1, QC[2] - 1 - ZC[2]);
          for (let fC = ZC[2]; fC < QC[2]; fC += nC) {
            const nC = [bC, zC, fC];
            if (!OS(CC, nC)) continue;
            const oC = bC === ZC[0] ? DS[1] : bC === QC[0] - 1 ? DS[0] : fC === ZC[2] ? DS[5] : fC === QC[2] - 1 ? DS[4] : zC === ZC[1] ? DS[3] : DS[2];
            wC.push(kS(nC, oC))
          }
        }
      return wC
    }

    function OS(CC, zC) {
      const ZC = tg(CC, zC);
      return null !== ZC && "Reactor Glass" === dZ(ZC)
    }

    function kS(CC, zC) {
      return [
        [CC[0] + .5 + .55 * zC[0], CC[1] + .5 + .55 * zC[1], CC[2] + .5 + .55 * zC[2]],
        [0 === zC[0] ? .4 : .02, 0 === zC[1] ? .4 : .02, 0 === zC[2] ? .4 : .02]
      ]
    }
    class VS {
      constructor() {
        this.sparking = [], this.spots = new Map, this.emitter = null, this.lastFrame = -1
      }
      update(CC, zC, ZC, QC) {
        const wC = [],
          bC = new Set;
        for (const qC of zC) {
          var nC, fC, oC;
          const {
            box: zC
          } = qC;
          if ("reactor" !== qC.kind || qC.level <= 0 || (zC.ctrl[0] - ZC[0]) ** 2 + (zC.ctrl[1] - ZC[1]) ** 2 + (zC.ctrl[2] - ZC[2]) ** 2 > 576) continue;
          const FC = LS(zC);
          bC.add(FC);
          let WC = this.spots.get(FC);
          if ((!WC || QC - WC.at > 3e3) && (WC = {
              at: QC,
              spots: US(CC, zC),
              glass: BS(CC, zC)
            }, this.spots.set(FC, WC)), 0 === WC.spots.length && 0 === WC.glass.length) continue;
          const NC = this.sparking.find((CC => CC.key === FC));
          wC.push({
            key: FC,
            level: qC.level,
            spots: WC.spots,
            glass: WC.glass,
            budget: null !== (nC = null === NC || void 0 === NC ? void 0 : NC.budget) && void 0 !== nC ? nC : 0,
            cursor: null !== (fC = null === NC || void 0 === NC ? void 0 : NC.cursor) && void 0 !== fC ? fC : 0,
            glassBudget: null !== (oC = null === NC || void 0 === NC ? void 0 : NC.glassBudget) && void 0 !== oC ? oC : 0
          })
        }
        for (const qC of this.spots.keys()) bC.has(qC) || this.spots.delete(qC);
        this.sparking = wC
      }
      emit(CC, zC, ZC) {
        var QC;
        if (0 === this.sparking.length || !CC.particlesEnabled() || ZC === this.lastFrame) return;
        this.lastFrame = ZC;
        let wC = 0,
          bC = 0;
        for (const gC of this.sparking) wC += jS(gC), bC += yS(gC);
        const nC = wC > 8 ? 8 / wC : 1,
          fC = bC > 6 ? 6 / bC : 1;
        let oC, qC = null,
          FC = null;
        for (const gC of this.sparking) gC.budget = Math.min(gC.budget + jS(gC) * nC * zC, 2), gC.budget >= 1 && (!qC || gC.budget > qC.budget) && (qC = gC), gC.glassBudget = Math.min(gC.glassBudget + yS(gC) * fC * zC, 2), gC.glassBudget >= 1 && (!FC || gC.glassBudget > FC.glassBudget) && (FC = gC);
        if (qC) qC.budget--, oC = qC.spots[qC.cursor++ % qC.spots.length];
        else {
          if (!FC) return;
          FC.glassBudget--, oC = FC.glass[Math.floor(Math.random() * FC.glass.length)]
        }
        const [WC, NC] = oC, MC = null !== (QC = this.emitter) && void 0 !== QC ? QC : this.create(CC, WC, NC);
        MC.moveTo(WC, NC), MC.emit(tS.count)
      }
      dispose() {
        var CC;
        null === (CC = this.emitter) || void 0 === CC || CC.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
      }
      create(CC, zC, ZC) {
        const QC = Math.ceil(14 * tS.count * tS.life[1]) + tS.count;
        return this.emitter = CC.createParticles(sS(tS, QC), {
          pos: zC,
          half: ZC
        }), this.emitter
      }
    }
    const Cp = [2, 3.2],
      zp = 1 / 3,
      Zp = 1 / .6,
      Qp = {
        texture: uS,
        HW: Math.ceil(18 * Cp[1]) + 4,
        minLifeTime: Cp[0] / Zp,
        maxLifeTime: Cp[1] / Zp,
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
        blendMode: sf.d.Standard
      };
    class wp {
      constructor(CC) {
        this.plans = CC, this.lastCheckMs = -1 / 0, this.outline = void 0, this.plumes = [], this.plumeBudget = 0, this.plumeCursor = 0, this.lastMs = 0, this.steam = null, this.hums = new Map, this.sparks = new VS, this.frame = 0, this.outline = new KS(CC)
      }
      onAfterRender(CC, zC, ZC) {
        const QC = performance.now(),
          wC = 0 === this.lastMs ? 0 : Math.min(QC - this.lastMs, 250) / 1e3;
        if (this.lastMs = QC, this.outline.fade(CC, QC), this.puff(CC, wC, ZC), this.sparks.emit(CC, wC, this.frame++), QC - this.lastCheckMs < 150) return;
        this.lastCheckMs = QC;
        const bC = this.plans.all().filter((CC => CC.formed && bp(CC.box.ctrl, ZC) <= 4096));
        this.plumes = bC.filter((CC => "reactor" === CC.kind && CC.level > 0)).map((CC => ({
          box: CC.box,
          level: CC.level
        }))), this.updateHums(CC, zC, bC, ZC), this.sparks.update(CC, bC, ZC, QC), this.chimeFormed(CC, zC, bC, QC)
      }
      dispose(CC) {
        var zC;
        this.outline.dispose(CC), null === (zC = this.steam) || void 0 === zC || zC.dispose(), this.steam = null, this.sparks.dispose();
        for (const ZC of this.hums.values()) ZC.stop();
        this.hums.clear()
      }
      chimeFormed(CC, zC, ZC, QC) {
        const wC = this.outline.check(CC, ZC, QC);
        wC && CC.playSound(zC, "exp_levelup", .6, 1, {
          UQ: [wC.box.ctrl[0] + .5, wC.box.ctrl[1], wC.box.ctrl[2] + .5],
          maxHearDist: 64
        })
      }
      puff(CC, zC, ZC) {
        const QC = this.plumes;
        if (0 === QC.length || !CC.particlesEnabled()) return void(this.plumeBudget = 0);
        const wC = QC.reduce(((CC, zC) => CC + 3 * zC.level), 0);
        if (this.plumeBudget = Math.min(this.plumeBudget + wC * zC, 3), this.plumeBudget < 1) return;
        this.plumeBudget--;
        let bC = this.plumeCursor % (wC / 3);
        this.plumeCursor++;
        let nC = QC[0];
        for (const WC of QC) {
          if (bC < WC.level) {
            nC = WC;
            break
          }
          bC -= WC.level
        }
        const {
          lo: fC,
          hi: oC
        } = ro(nC.box);
        if (function(CC, zC, ZC) {
            const QC = Math.max(CC[0] - ZC[0], 0, ZC[0] - zC[0]),
              wC = Math.max(CC[2] - ZC[2], 0, ZC[2] - zC[2]);
            return Math.hypot(QC, ZC[1] - zC[1], wC)
          }(fC, oC, ZC) < 6 && Math.random() > zp) return;
        const qC = [(fC[0] + oC[0]) / 2, oC[1] + .05, (fC[2] + oC[2]) / 2],
          FC = [(oC[0] - fC[0]) / 2 - .5, .05, (oC[2] - fC[2]) / 2 - .5];
        this.steam ??= CC.createParticles(Qp, {
          pos: qC,
          half: FC
        }), this.steam.moveTo(qC, FC), this.steam.emit(1)
      }
      updateHums(CC, zC, ZC, QC) {
        const wC = new Map;
        for (const nC of ZC) "reactor" === nC.kind && nC.level > 0 && bp(nC.box.ctrl, QC) <= 576 && wC.set(`${bC=nC.box.ctrl,`${bC[0]},${bC[1]},${bC[2]}`}:${nC.level}`, nC);
        var bC;
        for (const [nC, fC] of this.hums) wC.has(nC) || (fC.stop(), this.hums.delete(nC));
        for (const [nC, fC] of wC) {
          if (this.hums.has(nC)) continue;
          const {
            lo: ZC,
            hi: QC
          } = ro(fC.box), wC = [(ZC[0] + QC[0]) / 2, ZC[1], (ZC[2] + QC[2]) / 2], bC = CC.playSound(zC, "rocketEngineLoop", .08 + .06 * fC.level, .55, {
            UQ: wC,
            maxHearDist: 26,
            refDistance: 4
          }, !0);
          bC && this.hums.set(nC, bC)
        }
      }
    }

    function bp(CC, zC) {
      return (CC[0] - zC[0]) ** 2 + (CC[1] - zC[1]) ** 2 + (CC[2] - zC[2]) ** 2
    }
    class np {
      constructor() {
        this.snapshot = {
          fuse: null,
          blast: null
        }, this.listeners = new Set
      }
      fR(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
        const QC = [CC.baf2BombAt[0], CC.baf2BombAt[1], CC.baf2BombAt[2]],
          wC = CC.baf2BombR;
        if (CC.baf2BombBoom) {
          const CC = Math.hypot(zC[0] - QC[0], zC[1] - QC[1], zC[2] - QC[2]);
          this.bp({
            fuse: null,
            blast: {
              at: QC,
              r: wC,
              receivedAt: ZC,
              distance: CC,
              flash: CC <= 3 * wC
            }
          })
        } else this.bp({
          ...this.snapshot,
          fuse: CC.baf2BombMs > 0 ? {
            at: QC,
            r: wC,
            endsAt: ZC + CC.baf2BombMs
          } : null
        })
      }
      get() {
        return this.snapshot
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.listeners.clear(), this.snapshot = {
          fuse: null,
          blast: null
        }
      }
      bp(CC) {
        this.snapshot = CC;
        for (const zC of this.listeners) zC()
      }
    }
    const fp = (0, QC.memo)((function(CC) {
      var zC;
      let {
        store: ZC
      } = CC;
      const {
        t: wC
      } = (0, ew.y)(), [bC, nC] = (0, QC.useState)((() => ZC.get())), [fC, oC] = (0, QC.useState)((() => performance.now()));
      (0, QC.useEffect)((() => (nC(ZC.get()), ZC.subscribe((() => {
        nC(ZC.get()), oC(performance.now())
      })))), [ZC]);
      const {
        fuse: qC,
        blast: FC
      } = bC;
      (0, QC.useEffect)((() => {
        if (!qC) return;
        const CC = setInterval((() => {
          oC(performance.now())
        }), 250);
        return () => {
          clearInterval(CC)
        }
      }), [qC]);
      const [WC, NC] = (0, QC.useState)(!1);
      (0, QC.useEffect)((() => {
        if (null === FC || void 0 === FC || !FC.flash) return;
        NC(!0);
        const CC = setTimeout((() => {
          NC(!1)
        }), 2500);
        return () => {
          clearTimeout(CC)
        }
      }), [FC]);
      const MC = qC ? function(CC, zC) {
        return CC.endsAt <= zC ? 0 : Math.ceil((CC.endsAt - zC) / 1e3)
      }(qC, fC) : 0;
      return (0, vb.jsxs)(vb.Fragment, {
        children: [MC > 0 && (0, vb.jsx)("div", {
          className: "Baf2RxSiren Baf2BombSiren",
          role: "alert",
          children: wC("buildAFactory2Game:bombCountdown", {
            amount: String(MC),
            radius: String(null !== (zC = null === qC || void 0 === qC ? void 0 : qC.r) && void 0 !== zC ? zC : 0)
          })
        }), WC && (0, vb.jsx)("div", {
          className: "Baf2RxBoom Baf2BombFlash"
        })]
      })
    }));

    function op(CC) {
      const zC = Math.min(4, Math.max(1, CC / 32));
      return {
        capHeight: Math.min(160, Math.max(40, 5 * CC / 4)),
        capSpread: Math.min(5 * CC / 8, 24 * zC),
        capThick: 6 * zC,
        stemHalfWidth: 3 * zC,
        puffScale: zC
      }
    }
    class qp {
      constructor() {
        this.vq = !1
      }
      hold(CC) {
        CC.getCameraFar() < 1e3 && (CC.setCameraFar(1e3), this.vq = !0)
      }
      release(CC) {
        this.vq && (this.vq = !1, CC.setCameraFar(null))
      }
    }
    const Fp = 1 / .6,
      Wp = [.2, .1, .2],
      Np = [
        ["cannonFire1", 1, .3],
        ["cannonFire2", .8, .25]
      ],
      Mp = {
        count: 200,
        fromMs: 0,
        toMs: 2e4,
        life: [8, 10],
        size: [3, 5],
        blend: sf.d.Standard,
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
      gp = {
        count: 280,
        fromMs: 2e3,
        toMs: 2e4,
        life: [10, 12],
        size: [7, 11],
        blend: sf.d.Standard,
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
      Sp = {
        count: 100,
        fromMs: 0,
        toMs: 900,
        life: [4, 5.5],
        size: [2, 3.5],
        blend: sf.d.Standard,
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
      pp = {
        texture: uS,
        HW: Math.ceil(120) + 4,
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
        blendMode: sf.d.Add
      };
    class Pp {
      constructor(CC) {
        this.store = CC, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new qp, this.timers = []
      }
      onAfterRender(CC, zC) {
        const ZC = performance.now(),
          QC = 0 === this.lastMs ? 0 : Math.min(ZC - this.lastMs, 250) / 1e3;
        this.lastMs = ZC;
        const {
          fuse: wC,
          blast: bC
        } = this.store.get();
        null !== bC && bC !== this.shownBlast && (this.shownBlast = bC, this.startBlast(CC, zC, bC, ZC));
        const nC = CC.particlesEnabled();
        null !== wC && wC.endsAt > ZC && nC ? this.emitBeacon(CC, wC, QC, ZC) : this.beaconBudget = 0, null !== this.cloud && (ZC - this.cloud.startMs > 33e3 ? this.disposeCloud(CC) : (this.far.hold(CC), nC && this.emitCloud(CC, QC, ZC)))
      }
      dispose(CC) {
        var zC;
        null === (zC = this.beacon) || void 0 === zC || zC.dispose(), this.beacon = null, this.disposeCloud(CC);
        for (const ZC of this.timers) clearTimeout(ZC);
        this.timers.length = 0
      }
      emitBeacon(CC, zC, ZC, QC) {
        const wC = zC.endsAt - QC < 5e3 ? 350 : 1e3,
          bC = .5 + .5 * Math.sin(2 * Math.PI * QC / wC);
        if (this.beaconBudget = Math.min(this.beaconBudget + 40 * bC * ZC, 4), this.beaconBudget < 1) return;
        const nC = Math.floor(this.beaconBudget);
        this.beaconBudget -= nC;
        const [fC, oC, qC] = zC.at, FC = [fC + .5, oC + 1.1, qC + .5];
        this.beacon ??= CC.createParticles(pp, {
          pos: FC,
          half: Wp
        }), this.beacon.moveTo(FC), this.beacon.emit(nC)
      }
      startBlast(CC, zC, ZC, QC) {
        var wC;
        null === (wC = this.beacon) || void 0 === wC || wC.dispose(), this.beacon = null, this.disposeCloud(CC);
        const bC = (0, uf.isMobile)() ? .5 : 1;
        this.streams = [Mp, gp, Sp].map((CC => {
          const zC = Math.round(CC.count * bC);
          return {
            spec: CC,
            particles: null,
            rate: zC / ((CC.toMs - CC.fromMs) / 1e3),
            budget: 0,
            left: zC
          }
        })), this.cloud = {
          blast: ZC,
          startMs: QC
        };
        const nC = Math.max(.25, 1 - ZC.distance / (6 * ZC.r)),
          fC = ZC.distance / 150 * 1e3;
        this.timers.push(setTimeout((() => {
          for (const [ZC, QC, wC] of Np) Rp(CC, zC, ZC, nC * QC, wC)
        }), fC))
      }
      emitCloud(CC, zC, ZC) {
        const {
          blast: QC,
          startMs: wC
        } = this.cloud, bC = ZC - wC, [nC, fC, oC] = QC.at, qC = op(QC.r);
        for (const FC of this.streams) {
          const {
            spec: ZC
          } = FC;
          if (FC.left <= 0 || bC < ZC.fromMs) continue;
          FC.budget += FC.rate * zC;
          const wC = Math.min(Math.floor(FC.budget), FC.left);
          if (wC < 1) continue;
          FC.budget -= wC, FC.left -= wC;
          const WC = FC.particles ??= this.createStream(CC, ZC, QC);
          if (ZC === Mp) {
            const CC = qC.stemHalfWidth;
            WC.moveTo([nC, fC + 1, oC], [CC, 1, CC])
          } else if (ZC === gp) {
            const CC = qC.capSpread * Math.min(1, (bC - ZC.fromMs) / 3e3),
              zC = Math.sqrt(Math.random()),
              QC = 2 * Math.random() * Math.PI,
              wC = Math.cos(QC) * zC,
              FC = Math.sin(QC) * zC,
              NC = nC + wC * CC,
              MC = oC + FC * CC,
              gC = qC.capThick,
              SC = fC + qC.capHeight + gC * (1 - zC * zC) * 2;
            WC.setDirections([.7 * wC, .05, .7 * FC], [wC, .2, FC]), WC.moveTo([NC, SC, MC], [gC, gC, gC])
          } else {
            this.ringAngle += 2.39996;
            const CC = Math.cos(this.ringAngle),
              zC = Math.sin(this.ringAngle);
            WC.setDirections([CC, .05, zC], [CC, .1, zC]), WC.moveTo([nC + 2 * CC, fC + .5, oC + 2 * zC], [0, .5, 0])
          }
          WC.emit(wC)
        }
      }
      createStream(CC, zC, ZC) {
        const {
          r: QC
        } = ZC, wC = Math.max(zC.life[0], QC / 25), bC = zC === Sp ? [.9 * wC, wC] : zC.life, nC = op(QC), fC = zC === Sp ? 1 : nC.puffScale, oC = {
          texture: uS,
          HW: zC.count + 4,
          minLifeTime: bC[0] / Fp,
          maxLifeTime: bC[1] / Fp,
          minSize: zC.size[0] * fC,
          maxSize: zC.size[1] * fC,
          minEmitPower: 0,
          maxEmitPower: 0,
          emitRate: 0,
          gravity: [0, zC.gravity * Fp * Fp, 0],
          colorGradients: [{
            timeFraction: 0,
            minColor: zC.from[0],
            maxColor: zC.from[1]
          }, {
            timeFraction: .6,
            minColor: Gp(zC.from[0], zC.to[0]),
            maxColor: Gp(zC.from[1], zC.to[1])
          }, {
            timeFraction: 1,
            minColor: zC.to[0],
            maxColor: zC.to[1]
          }],
          blendMode: zC.blend
        };
        if (zC === Mp) {
          const CC = nC.capHeight / ((bC[0] + bC[1]) / 2);
          oC.minEmitPower = .9 * CC * Fp, oC.maxEmitPower = 1.05 * CC * Fp, oC.dir1 = [-.1, 1, -.1], oC.dir2 = [.1, 1, .1]
        } else zC === gp ? (oC.minEmitPower = 1.2, oC.maxEmitPower = 2, oC.dir1 = [-1, .05, -1], oC.dir2 = [1, .2, 1]) : (oC.minEmitPower = 39.583333333333336, oC.maxEmitPower = 41.66666666666667, oC.dir1 = [1, 0, 0], oC.dir2 = [1, 0, 0]);
        return CC.createParticles(oC, {
          pos: ZC.at
        })
      }
      disposeCloud(CC) {
        for (const ZC of this.streams) {
          var zC;
          null === (zC = ZC.particles) || void 0 === zC || zC.dispose()
        }
        this.streams = [], this.cloud = null, this.far.release(CC)
      }
    }

    function Gp(CC, zC) {
      return [(CC[0] + zC[0]) / 2, (CC[1] + zC[1]) / 2, (CC[2] + zC[2]) / 2, .75 * CC[3]]
    }

    function Rp(CC, zC, ZC, QC, wC) {
      try {
        CC.playSound(zC, ZC, QC, wC)
      } catch (bC) {
        console.error(bC)
      }
    }
    const Ap = {
        HW: 720,
        perS: 100
      },
      xp = {
        HW: 320,
        perS: 44
      };
    class Jp {
      constructor() {
        this.zone = null, this.endsAt = 0
      }
      start(CC, zC) {
        this.zone = {
          centre: [...CC.centre],
          r: CC.r,
          band: CC.band ? [CC.band[0], CC.band[1]] : void 0
        }, this.endsAt = zC
      }
      stop() {
        this.zone = null
      }
      fR(CC, zC) {
        const {
          baf2FalloutMs: ZC,
          baf2FalloutAt: QC,
          baf2FalloutR: wC,
          baf2FalloutY: bC
        } = CC;
        ZC > 0 && QC && void 0 !== wC ? this.start({
          centre: QC,
          r: wC,
          band: bC
        }, zC + ZC) : this.stop()
      }
      perS(CC, zC, ZC) {
        const QC = this.zone;
        if (!QC) return 0;
        const wC = this.endsAt - CC;
        return wC <= 0 ? (this.zone = null, 0) : QC.band && (zC[1] < QC.band[0] || zC[1] > QC.band[1]) || Math.hypot(zC[0] - QC.centre[0], zC[2] - QC.centre[2]) > QC.r ? 0 : ZC.perS * Math.min(1, wC / 5e3)
      }
    }
    const Ip = [5, 7],
      ip = [24, 8, 24],
      vp = .5,
      ep = 1 / .6,
      hp = [{
        rgba: [150, 150, 140, .85],
        share: .7
      }, {
        rgba: [120, 225, 90, .9],
        share: .3
      }];
    class Kp {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, uf.isMobile)();
        this.state = new Jp, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(CC) {
          return CC ? xp : Ap
        }(CC)
      }
      startFallout(CC, zC) {
        this.state.start(CC, zC)
      }
      stopFallout() {
        this.state.stop()
      }
      fR(CC) {
        this.state.fR(CC, performance.now())
      }
      onAfterRender(CC, zC) {
        var ZC;
        const QC = performance.now(),
          wC = 0 === this.lastMs ? 0 : Math.min(QC - this.lastMs, 250) / 1e3;
        this.lastMs = QC;
        const bC = this.state.perS(QC, zC, this.tier);
        if (bC <= 0 || !CC.particlesEnabled()) return void(this.budget = 0);
        this.budget = Math.min(this.budget + bC * wC, bC / 4);
        const nC = Math.floor(this.budget);
        if (nC < 1) return;
        this.budget -= nC;
        const fC = this.at;
        fC[0] = zC[0], fC[1] = zC[1] + 12, fC[2] = zC[2];
        const oC = null !== (ZC = this.systems) && void 0 !== ZC ? ZC : this.create(CC, fC),
          qC = this.amounts;
        qC[0] = 0, qC[1] = 0;
        for (let FC = 0; FC < nC; FC++) qC[Math.random() < .3 ? 1 : 0]++;
        for (let FC = 0; FC < oC.length; FC++) qC[FC] > 0 && (oC[FC].moveTo(fC, ip), oC[FC].emit(qC[FC]))
      }
      dispose() {
        for (const zC of null !== (CC = this.systems) && void 0 !== CC ? CC : []) {
          var CC;
          zC.dispose()
        }
        this.systems = null, this.state.stop()
      }
      create(CC, zC) {
        return this.systems = hp.map((ZC => {
          let {
            rgba: [QC, wC, bC, nC],
            share: fC
          } = ZC;
          const oC = {
            texture: "square_particle",
            HW: Math.ceil(this.tier.HW * fC),
            minLifeTime: Ip[0] / ep,
            maxLifeTime: Ip[1] / ep,
            minEmitPower: 1.3333333333333335,
            maxEmitPower: 1.3333333333333335,
            minSize: .16,
            maxSize: .36,
            emitRate: 0,
            gravity: [0, 0, 0],
            dir1: [-.5, -1, -.5],
            dir2: [vp, -1, vp],
            colorGradients: [{
              timeFraction: 0,
              minColor: [QC, wC, bC, 0]
            }, {
              timeFraction: .15,
              minColor: [QC, wC, bC, nC]
            }, {
              timeFraction: .8,
              minColor: [QC, wC, bC, nC]
            }, {
              timeFraction: 1,
              minColor: [QC, wC, bC, 0]
            }],
            blendMode: sf.d.Standard
          };
          return CC.createParticles(oC, {
            pos: zC,
            half: ip
          })
        })), this.systems
      }
    }
    const Yp = {
      1: [0, 0, 1],
      2: [1, 0, 0],
      3: [0, 0, -1],
      4: [-1, 0, 0]
    };

    function dp(CC) {
      const zC = /\|rot(\d)/.exec(CC);
      return Yp[zC ? Number(zC[1]) : 1]
    }
    var mp = ZC(597),
      Hp = ZC(38300);
    const Ep = new Set(mp.p);

    function lp(CC) {
      if (-2 !== CC.count) return null;
      const zC = tC(CC.item);
      return null !== zC && Ep.has(zC) ? zC : null
    }

    function Xp(CC) {
      const {
        width: zC,
        height: ZC
      } = (0, Hp.e)(CC).hitBoxDimensions;
      return .55 / Math.max(zC, ZC)
    }

    function cp(CC, zC, ZC) {
      if (!ZC) return !1;
      const QC = CC[0] + .5 - zC[0],
        wC = CC[1] + .5 - zC[1],
        bC = CC[2] + .5 - zC[2];
      return QC * QC + wC * wC + bC * bC <= 576
    }

    function rp(CC, zC) {
      return Math.atan2(CC[0], CC[2]) + Math.PI + zC
    }

    function sp(CC, zC) {
      const ZC = 2 * Math.PI;
      return (CC + ZC * zC / 1e4) % ZC
    }
    class Tp {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
        this.labels = CC, this.now = zC, this.farms = new Map, this.unsubscribe = void 0, this.checkedMs = -1 / 0, this.frameMs = NaN, this.unsubscribe = CC.subscribe((() => {
          this.sync()
        }))
      }
      onAfterRender(CC, zC) {
        if (0 === this.farms.size) return;
        const ZC = this.now(),
          QC = Number.isNaN(this.frameMs) ? 0 : Math.min(ZC - this.frameMs, 100);
        this.frameMs = ZC, ZC - this.checkedMs >= 1e3 && (this.checkedMs = ZC, this.check(CC, zC));
        for (const wC of this.farms.values()) wC.shown && wC.running && null !== wC.model && QC > 0 && (wC.spin = sp(wC.spin, QC), wC.model.setPose(wC.feet, rp(wC.front, wC.spin)))
      }
      dispose() {
        this.unsubscribe();
        for (const CC of this.farms.values()) this.drop(CC);
        this.farms.clear()
      }
      sync() {
        const CC = new Set;
        for (const zC of this.labels.list()) {
          const ZC = lp(zC);
          if (null === ZC) continue;
          CC.add(zC.key);
          const QC = this.farms.get(zC.key);
          if ((null === QC || void 0 === QC ? void 0 : QC.mob) === ZC) continue;
          QC && this.drop(QC);
          const [wC, bC, nC] = zC.pos;
          this.farms.set(zC.key, {
            pos: zC.pos,
            feet: [wC + .5, bC + 1, nC + .5],
            mob: ZC,
            model: null,
            shown: !1,
            running: !1,
            front: [0, 0, 1],
            spin: 0
          })
        }
        for (const [zC, ZC] of this.farms) CC.has(zC) || (this.drop(ZC), this.farms.delete(zC));
        this.checkedMs = -1 / 0
      }
      check(CC, zC) {
        for (const ZC of this.farms.values()) {
          const [QC, wC, bC] = ZC.pos, nC = tg(CC, ZC.pos);
          null !== nC && dZ(nC) === lC && cp(ZC.pos, zC, "Air" === tg(CC, [QC, wC + 1, bC])) ? (ZC.running = nC.endsWith("|Running"), ZC.front = dp(nC), null === ZC.model && (ZC.model = CC.createMobModel(ZC.mob, Xp(ZC.mob)), null === ZC.model) || (ZC.model.setPose(ZC.feet, rp(ZC.front, ZC.spin)), ZC.shown || (ZC.model.setVisible(!0), ZC.shown = !0))) : (ZC.shown && null !== ZC.model && ZC.model.setVisible(!1), ZC.shown = !1)
        }
      }
      drop(CC) {
        var zC;
        null === (zC = CC.model) || void 0 === zC || zC.dispose(), CC.model = null, CC.shown = !1
      }
    }
    class ap {
      constructor() {
        this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
      }
      onBeams(CC) {
        var zC;
        this.island = CC.baf2ColIsland, this.islandSite = (zC = CC.baf2ColSite) && 8 === zC.length ? {
          spawnXZ: [zC[0], zC[1]],
          coreXZ: [zC[2], zC[3]],
          minXZ: [zC[4], zC[5]],
          maxXZ: [zC[6], zC[7]]
        } : null, this.views = CC.baf2ColList.map((CC => ({
          entry: nw(CC)
        }))), this.beamsVersion++, this.emit()
      }
      onStatus(CC) {
        this.status = CC, this.emit()
      }
      onOpen(CC) {
        this.openHeld = CC
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
        return this.views.map((CC => CC.entry))
      }
      entryAtRoot(CC) {
        var zC;
        return null === (zC = this.views.find((zC => {
          let {
            entry: ZC
          } = zC;
          return ZC.focus[0] === CC[0] && ZC.focus[1] === CC[1] + 1 && ZC.focus[2] === CC[2]
        }))) || void 0 === zC ? void 0 : zC.entry
      }
      getStatus() {
        return this.status
      }
      version() {
        return this.beamsVersion
      }
      lookLine(CC, zC) {
        return yo(this.entries(), CC, zC)
      }
      lookSource() {
        return {
          handles: CC => NQ(CC) >= 0 || MQ(CC),
          line: (CC, zC) => this.lookLine(CC, zC),
          version: () => this.beamsVersion
        }
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.listeners.clear(), this.island = null, this.views = [], this.status = null, this.openHeld = null
      }
      emit() {
        for (const CC of this.listeners) CC()
      }
    }
    const tp = {
      positions: [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1].map((CC => CC / 2)),
      indices: [0, 4, 8, 12, 16, 20].flatMap((CC => [CC, CC + 1, CC + 2, CC, CC + 2, CC + 3]))
    };

    function Dp(CC, zC, ZC, QC, wC, bC, nC) {
      let fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
      const oC = Math.cos(fC),
        qC = Math.sin(fC),
        FC = CC.positions.length / 3,
        {
          positions: WC,
          indices: NC
        } = tp;
      for (let MC = 0; MC < WC.length; MC += 3) {
        const fC = WC[MC] * wC,
          FC = WC[MC + 2] * nC;
        CC.positions.push(zC + fC * oC + FC * qC, ZC + WC[MC + 1] * bC, QC - fC * qC + FC * oC)
      }
      for (const MC of NC) CC.indices.push(FC + MC)
    }

    function jp(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return zC < 1 ? {
        rgb: CC,
        alpha: zC
      } : {
        rgb: CC,
        alpha: 1,
        opaque: !0
      }
    }
    class yp {
      constructor(CC, zC) {
        this.style = CC, this.perSource = zC, this.particles = null, this.sources = [], this.budget = 0, this.cursor = 0
      }
      setSources(CC) {
        this.sources = CC, 0 === CC.length && (this.budget = 0)
      }
      ZN(CC, zC, ZC) {
        const QC = this.sources.length;
        if (0 !== QC) {
          var wC, bC;
          this.budget = Math.min(this.budget + (wC = QC, bC = this.perSource, Math.min(wC * bC, fq) * zC), 2);
          for (let zC = 0; zC < QC && this.budget >= 1; zC++) {
            const zC = this.sources[this.cursor % QC];
            this.cursor = (this.cursor + 1) % QC;
            if (!(Math.max(Math.abs(zC.x - ZC[0]), Math.abs(zC.y - ZC[1]), Math.abs(zC.z - ZC[2])) > 32)) return this.puff(CC, zC), void this.budget--
          }
        }
      }
      dispose() {
        var CC;
        null === (CC = this.particles) || void 0 === CC || CC.dispose(), this.particles = null, this.sources = []
      }
      puff(CC, zC) {
        let {
          x: ZC,
          y: QC,
          z: wC,
          h: bC,
          faces: nC
        } = zC;
        const fC = function(CC, zC, ZC, QC, wC) {
            const [bC, nC, fC] = wC[Math.floor(Math.random() * wC.length)], oC = .04, qC = (CC, zC, ZC) => CC > 0 ? zC + ZC + oC : CC < 0 ? zC - oC : zC + .1, FC = (CC, zC, ZC) => CC > 0 ? zC + ZC + oC : CC < 0 ? zC - oC : zC + ZC - .1, WC = [qC(bC, CC, 1), qC(nC, zC, QC), qC(fC, ZC, 1)], NC = [FC(bC, CC, 1), FC(nC, zC, QC), FC(fC, ZC, 1)];
            return {
              pos: [(WC[0] + NC[0]) / 2, (WC[1] + NC[1]) / 2, (WC[2] + NC[2]) / 2],
              half: [(NC[0] - WC[0]) / 2, (NC[1] - WC[1]) / 2, (NC[2] - WC[2]) / 2],
              out: [bC, nC, fC]
            }
          }(ZC, QC, wC, bC, nC),
          {
            style: oC
          } = this,
          qC = this.particles ??= CC.createParticles(sS(oC, Math.ceil(oC.count * fq * oC.life[1]) + 4), fC);
        qC.moveTo(fC.pos, fC.half);
        const [FC, WC, NC] = fC.out, MC = oC.spread;
        qC.setDirections([FC - MC, .6 + WC, NC - MC], [FC + MC, 1 + WC, NC + MC]), qC.emit(oC.count)
      }
    }
    const Lp = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
      [0, 1, 0]
    ];
    class Up {
      constructor() {
        this.green = new yp(qq.green, bq), this.pink = new yp(qq.pink, nq), this.colliders = [], this.lastMs = 0
      }
      setSources(CC) {
        this.colliders = CC;
        const zC = [],
          ZC = [];
        for (const QC of CC) {
          const [CC, wC, bC] = QC.focus;
          zC.push({
            x: CC,
            y: wC - 1,
            z: bC,
            h: 2,
            faces: Lp
          });
          for (let zC = 0; zC < 4; zC++) {
            if (!QC.live[zC]) continue;
            const [CC, wC, bC] = pQ(QC.focus, zC, nQ.LASER_D), [nC, , fC] = SQ[zC], oC = Lp.filter((CC => CC[0] !== nC || CC[2] !== fC || 0 !== CC[1]));
            ZC.push({
              x: CC,
              y: wC,
              z: bC,
              h: 1,
              faces: oC
            })
          }
        }
        this.green.setSources(zC), this.pink.setSources(ZC)
      }
      onAfterRender(CC) {
        const zC = performance.now(),
          ZC = 0 === this.lastMs ? 0 : Math.min(zC - this.lastMs, 250) / 1e3;
        if (this.lastMs = zC, 0 === this.colliders.length || !CC.particlesEnabled()) return;
        const QC = CC.getCameraPosition();
        this.green.ZN(CC, ZC, QC), this.pink.ZN(CC, ZC, QC)
      }
      dispose() {
        this.green.dispose(), this.pink.dispose(), this.colliders = []
      }
    }
    const Bp = 1.04,
      Op = jp([1, 120 / 255, 220 / 255]),
      kp = jp([1, .25, .25], .35);
    class Vp {
      constructor(CC) {
        this.store = CC, this.meshes = [], this.beams = [], this.builtVersion = -1, this.glow = new Up
      }
      onAfterRender(CC) {
        this.store.version() !== this.builtVersion && this.rebuild(CC);
        const zC = performance.now();
        for (const ZC of this.beams) {
          const QC = 1 + .35 * Math.sin(zC / 700 * Math.PI * 2 + ZC.phase);
          CC.setGameMesh(ZC.mesh, {
            scale: [ZC.alongX ? 1 : QC, QC, ZC.alongX ? QC : 1]
          })
        }
        this.glow.onAfterRender(CC)
      }
      dispose(CC) {
        this.clear(CC), this.glow.dispose(), this.builtVersion = -1
      }
      rebuild(CC) {
        this.clear(CC), this.builtVersion = this.store.version();
        const zC = [];
        for (const {
            entry: ZC
          }
          of this.store.colliders()) ZC.on && ZC.live.some(Boolean) && (this.addBeams(CC, ZC), zC.push(ZC)), ZC.blockers.length > 0 && this.addMarkers(CC, ZC);
        this.glow.setSources(zC)
      }
      addBeams(CC, zC) {
        const [ZC, QC, wC] = zC.focus, bC = wq - .25, nC = (.25 + wq) / 2;
        for (let fC = 0; fC < 4; fC++) {
          if (!zC.live[fC]) continue;
          const [oC, , qC] = SQ[fC], FC = 0 !== oC, WC = {
            positions: [],
            indices: []
          };
          Dp(WC, 0, 0, 0, FC ? bC : .2, .2, FC ? .2 : bC);
          const NC = [ZC + .5 + oC * nC, QC + .5, wC + .5 + qC * nC],
            MC = CC.createGameMesh(WC, Op, NC);
          this.meshes.push(MC), this.beams.push({
            mesh: MC,
            alongX: FC,
            phase: fC * Math.PI / 2
          })
        }
      }
      addMarkers(CC, zC) {
        const ZC = zC.blockers[0],
          QC = {
            positions: [],
            indices: []
          };
        for (const [wC, bC, nC] of zC.blockers) Dp(QC, wC - ZC[0] + .5, bC - ZC[1] + .5, nC - ZC[2] + .5, Bp, Bp, Bp);
        this.meshes.push(CC.createGameMesh(QC, kp, ZC))
      }
      clear(CC) {
        for (const zC of this.meshes) CC.disposeGameMesh(zC);
        this.meshes = [], this.beams = []
      }
    }
    const CP = [.56, .83, 1],
      zP = [1, .73, .08],
      ZP = [1, .25, .25],
      QP = [.85, .85, .85],
      wP = [.3, .45, .6];

    function bP(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .9,
        bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .05;
      const nC = wC / 2,
        fC = wC + bC;
      for (const oC of [-nC, nC])
        for (const wC of [-nC, nC]) Dp(CC, zC, ZC + oC, QC + wC, fC, bC, bC), Dp(CC, zC + oC, ZC, QC + wC, bC, fC, bC), Dp(CC, zC + oC, ZC + wC, QC, bC, bC, fC)
    }

    function nP(CC) {
      return zC => CC.isBlockInLoadedChunk(zC[0], zC[1], zC[2]) && 0 === CC.getBlockId(zC[0], zC[1], zC[2])
    }

    function fP(CC) {
      return CC.map((CC => {
        let {
          free: zC,
          blocked: ZC,
          gaps: QC,
          supports: wC
        } = CC;
        return `${zC.join(";")}|${ZC.join(";")}|${QC.join(";")}|${wC.join(";")}`
      })).join("/")
    }

    function oP(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
      const bC = zC[0],
        nC = {
          positions: [],
          indices: []
        };
      for (const [fC, oC, qC] of zC) bP(nC, fC - bC[0] + .5, oC - bC[1] + .5, qC - bC[2] + .5, QC, wC);
      return CC.createGameMesh(nC, ZC, bC)
    }
    class qP {
      constructor(CC) {
        this.store = CC, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
      }
      onAfterRender(CC, zC, ZC) {
        var QC;
        const wC = null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name;
        if (wC !== oQ && wC !== fQ) return void("" !== this.shownKey && this.show(CC, "", []));
        const bC = performance.now();
        if (bC - this.lastCheckMs >= 200 && (this.lastCheckMs = bC, wC === oQ ? this.check(CC, ZC) : this.preview(CC, ZC)), this.pulses.length > 0) {
          const zC = 1 + .12 * Math.sin(bC / 1e3 * 1.25 * Math.PI * 2),
            ZC = [zC, zC, zC];
          for (const QC of this.pulses) CC.setGameMesh(QC, {
            scale: ZC
          })
        }
      }
      dispose(CC) {
        this.clear(CC), this.shownKey = ""
      }
      check(CC, zC) {
        const ZC = nP(CC),
          QC = [];
        for (const {
            entry: bC
          }
          of this.store.colliders()) {
          bC.focus.every(((CC, ZC) => Math.abs(CC + .5 - zC[ZC]) <= nQ.GHOST_REACH)) && QC.push(Qq(bC, ZC))
        }
        const wC = fP(QC);
        wC !== this.shownKey && this.show(CC, wC, QC)
      }
      preview(CC, zC) {
        const ZC = CC.getTargetedBlock(),
          QC = ZC ? [ZC.wp[0], ZC.wp[1], ZC.wp[2]] : null,
          wC = null !== QC && QC.every(((CC, ZC) => Math.abs(CC + .5 - zC[ZC]) <= 8)),
          bC = this.store.site(),
          nC = wC && bC ? function(CC, zC, ZC) {
            const QC = gQ(CC);
            if (!QC.every(zC)) return null;
            const wC = RQ(CC, ZC);
            return {
              column: QC,
              spots: Qq({
                focus: QC[1],
                lasers: [!1, !1, !1, !1],
                open: wC,
                live: [!1, !1, !1, !1],
                on: !1,
                state: "noLasers",
                blockers: []
              }, zC),
              fits: wC.filter(Boolean).length >= nQ.MIN_SPOTS
            }
          }(QC, nP(CC), bC) : null,
          fC = nC ? [nC.spots] : [],
          oC = nC ? `preview ${QC.join(",")}|${nC.fits}|${fP(fC)}` : "";
        var qC, FC;
        oC !== this.shownKey && this.show(CC, oC, fC, null !== (qC = null === nC || void 0 === nC ? void 0 : nC.column) && void 0 !== qC ? qC : [], null === (FC = null === nC || void 0 === nC ? void 0 : nC.fits) || void 0 === FC || FC)
      }
      show(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        this.clear(CC), this.shownKey = zC, QC.length > 0 && this.meshes.push(oP(CC, QC, jp(wC ? QP : ZP)));
        for (const {
            free: bC,
            blocked: nC,
            gaps: fC,
            supports: oC
          }
          of ZC) {
          for (const [zC, ZC, QC] of bC) {
            const wC = {
              positions: [],
              indices: []
            };
            bP(wC, 0, 0, 0);
            const bC = CC.createGameMesh(wC, jp(CP), [zC + .5, ZC + .5, QC + .5]);
            this.meshes.push(bC), this.pulses.push(bC)
          }
          nC.length > 0 && this.meshes.push(oP(CC, nC, jp(zP))), fC.length > 0 && this.meshes.push(oP(CC, fC, jp(ZP), 1.06, .07)), oC.length > 0 && this.meshes.push(oP(CC, oC, jp(wP)))
        }
      }
      clear(CC) {
        for (const zC of this.meshes) CC.disposeGameMesh(zC);
        this.meshes = [], this.pulses = []
      }
    }
    class FP {
      constructor() {
        this.stored = new Map, this.vq = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
      }
      apply(CC) {
        if (!CC.baf2TermOpen) return !1;
        CC.baf2TermReset && (this.stored.clear(), this.pending = []);
        for (const [zC, ZC] of CC.baf2TermItems) ZC > 0 ? this.stored.set(zC, ZC) : this.stored.delete(zC);
        if (CC.baf2TermHeld && (this.vq = new Map(CC.baf2TermHeld)), this.pending = this.pending.filter((zC => zC.seq > CC.baf2TermAcked)), this.silos = CC.baf2TermSilos, this.readOnly = CC.baf2TermReadOnly, this.pocket = !0 === CC.baf2TermPocket, CC.baf2TermReset) this.resort();
        else {
          const CC = new Set(this.order);
          for (const zC of this.stored.keys()) CC.has(zC) || this.order.push(zC)
        }
        return this.changed(), !0
      }
      resort() {
        this.order = [...this.stored.keys()].sort(((CC, zC) => this.amount(zC) - this.amount(CC) || CC.localeCompare(zC))), this.changed()
      }
      take(CC, zC) {
        const ZC = fz(CC, this.amount(zC));
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: zC,
          amount: ZC,
          put: !1
        }), this.recents = [zC, ...this.recents.filter((CC => CC !== zC))].slice(0, 6), this.changed(), Zz(this.seq, CC, zC)
      }
      put(CC, zC) {
        return this.seq++, this.pending.push({
          seq: this.seq,
          item: zC,
          amount: fz(CC, this.heldAmount(zC)),
          put: !0
        }), this.changed(), Qz(this.seq, CC, zC)
      }
      putAll() {
        this.seq++;
        for (const CC of this.heldItems()) this.pending.push({
          seq: this.seq,
          item: CC,
          amount: this.heldAmount(CC),
          put: !0
        });
        return this.changed(), wz(this.seq)
      }
      amount(CC) {
        var zC;
        let ZC = null !== (zC = this.stored.get(CC)) && void 0 !== zC ? zC : 0;
        for (const QC of this.pending) QC.item === CC && (ZC += QC.put ? QC.amount : -QC.amount);
        return Math.max(0, ZC)
      }
      heldAmount(CC) {
        var zC;
        let ZC = null !== (zC = this.vq.get(CC)) && void 0 !== zC ? zC : 0;
        for (const QC of this.pending) QC.put && QC.item === CC && (ZC -= QC.amount);
        return Math.max(0, ZC)
      }
      heldItems() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return this.order.filter((zC => zC === CC || this.heldAmount(zC) > 0))
      }
      items() {
        return this.order.filter((CC => this.amount(CC) > 0))
      }
      recent() {
        return this.recents.filter((CC => this.amount(CC) > 0))
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
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      changed() {
        this.version++;
        for (const CC of this.listeners) CC()
      }
    }
    var WP = ZC(38256);
    const NP = {
      isBlock: CC => void 0 !== dC.g[CC],
      harvestType: CC => {
        var zC;
        return null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.harvestType
      },
      harvestLevel: CC => {
        var zC;
        return null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.harvestLevel
      },
      dropsNothing: CC => {
        var zC;
        return null === (null === (zC = dC.g[CC]) || void 0 === zC ? void 0 : zC.drops)
      },
      displayName: CC => {
        var zC;
        return null === (zC = Zf.m[CC]) || void 0 === zC ? void 0 : zC.displayName
      },
      description: CC => {
        var zC;
        return null === (zC = Zf.m[CC]) || void 0 === zC ? void 0 : zC.description
      },
      harvests: CC => {
        var zC;
        return null === (zC = Zf.m[CC]) || void 0 === zC ? void 0 : zC.harvests
      },
      level: CC => {
        var zC;
        return null === (zC = Zf.m[CC]) || void 0 === zC ? void 0 : zC.level
      }
    };

    function MP(CC, zC, ZC) {
      return function(CC, zC, ZC, QC) {
        var wC, bC;
        const nC = zC.split("|")[0],
          fC = CC.isBlock(zC) ? zC : CC.isBlock(nC) ? nC : null;
        if (null === fC || "rock" !== CC.harvestType(fC) || CC.dropsNothing(fC) && !uQ.has(nC)) return null;
        const oC = ZC && "rock" === CC.harvests(ZC) ? null !== (wC = CC.level(ZC)) && void 0 !== wC ? wC : 0 : null,
          qC = null !== (bC = null !== QC && void 0 !== QC ? QC : CC.harvestLevel(fC)) && void 0 !== bC ? bC : 0;
        return (null !== oC ? qC <= oC : 0 === CC.harvestLevel(fC)) ? null : eQ(CC, qC)
      }(NP, CC, zC, ZC)
    }

    function gP(CC, zC) {
      return function(CC, zC, ZC) {
        if (zC === vQ[0]) return [(0, EC.Md)({
          translationKey: "buildAFactory2Game:toolNeededAny"
        }, EC.H.whiteUiText)];
        const QC = ZC.split("|")[0],
          wC = CC.isBlock(QC) ? CC.displayName(QC) : void 0,
          bC = "string" === typeof wC ? wC : wC && "translationKey" in wC ? `$t(${wC.translationKey})` : QC;
        return [(0, EC.Md)({
          translationKey: "buildAFactory2Game:toolNeeded",
          params: {
            block: bC
          }
        }, EC.H.whiteUiText), (0, EC.Md)({
          translationKey: `item:${(0,EC.ke)(zC)}`
        }, EC.H.yellowUiText)]
      }(NP, CC, zC)
    }
    const SP = "buildAFactory2Game:";
    const pP = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];

    function PP(CC) {
      return CC.endsWith(" Ore")
    }
    const GP = {
        mode: null,
        detail: null,
        next: null,
        nextState: null
      },
      RP = [],
      AP = {
        info: null,
        visible: !1,
        tool: null,
        live: null,
        wrench: GP,
        plan: null,
        atomic: RP
      },
      xP = "buildAFactory2Game:",
      JP = new Set(["Splitter", "Sorting Gate"]),
      IP = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];
    class iP {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
        this.live = CC, this.planAt = zC, this.tierOf = ZC, this.SF = 0, this.missesMaker = !1, this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.afloatByRoot = new Map, this.besideMakerById = new Map, this.vq = null, this.express = !1, this.crouching = !1, this.tier = null, this.snapshot = AP, this.rowsByKey = new Map, this.byRootId = new Map, this.listeners = new Set, this.livePos = [NaN, NaN, NaN], this.liveVersion = -1, this.targetsLive = !1, this.planPos = "", this.planMs = -1 / 0, this.plan = null
      }
      onAfterRender(CC, zC, ZC) {
        var QC, wC, bC;
        let nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const fC = null !== (QC = null === (wC = CC.XzC(zC)) || void 0 === wC ? void 0 : wC.name) && void 0 !== QC ? QC : null,
          oC = CC.isPlayerCrouching(zC),
          qC = 0 === ZC ? null : this.resolve(CC, ZC),
          FC = null !== qC && null !== nC && JP.has(qC.rootName) && function(CC, zC) {
            return IP.some((ZC => {
              let [QC, wC] = ZC;
              const bC = CC.getBlockId(zC[0] + QC, zC[1], zC[2] + wC);
              return 0 !== bC && "Express Belt" === CC.getMetaInfo(bC).rootName
            }))
          }(CC, nC),
          WC = this.updatePlan(0 === ZC ? null : nC),
          NC = this.tierOf(),
          MC = null === nC ? null : (0, WP.f)(ZC),
          gC = null !== MC && null !== nC && (0, WP.g)(function(CC) {
            return (zC, ZC, QC) => CC.getBlockId(zC, ZC, QC)
          }(CC), nC[0], nC[1], nC[2], MC),
          SC = this.readAfloat(CC, ZC, nC);
        if (ZC === this.SF && gC === this.missesMaker && SC === this.afloat && fC === this.vq && oC === this.crouching && FC === this.express && NC === this.tier && !WC && (!this.targetsLive || !this.liveMoved(nC))) return;
        this.SF = ZC, this.missesMaker = gC, this.afloat = SC, this.vq = fC, this.crouching = oC, this.express = FC;
        const pC = FC && qC ? function(CC) {
          if (null === CC.info) return null;
          return CC.express ??= {
            ...CC.info,
            detail: `${xP}lookKeepsUpExpress`,
            detailItem: null
          }, CC.express
        }(qC) : null !== qC && gC && null !== MC ? this.besideMaker(qC, ZC, MC) : null !== qC && SC ? this.hanging(qC) : null !== (bC = null === qC || void 0 === qC ? void 0 : qC.info) && void 0 !== bC ? bC : null;
        this.tier = NC;
        const PC = qC && pC ? function(CC, zC) {
          var ZC, QC;
          const wC = dC.g[CC];
          if (!CC.endsWith(" Ore") || "rock" !== (null === wC || void 0 === wC ? void 0 : wC.harvestType) || 0 === wC.harvestLevel) return null;
          const bC = null !== (ZC = wC.harvestLevel) && void 0 !== ZC ? ZC : 0,
            nC = zC ? Zf.m[zC] : void 0;
          if ("rock" === (null === nC || void 0 === nC ? void 0 : nC.harvests) && (null !== (QC = nC.level) && void 0 !== QC ? QC : 0) >= bC) return null;
          const fC = (oC = bC, eQ(NP, oC));
          var oC;
          if (null === fC) return null;
          const qC = Qb(fC),
            FC = /^[AEIOU]/.test(fC) ? "An" : "";
          if ("rock" === (null === nC || void 0 === nC ? void 0 : nC.harvests) && zC) return {
            key: `${xP}lookToolTooWeak${FC}`,
            vq: Qb(zC),
            needed: qC
          };
          return {
            key: fC === vQ[0] ? `${xP}lookNeedAnyPickaxe` : `${xP}lookNeedPickaxe${FC}`,
            vq: null,
            needed: qC
          }
        }(qC.rootName, fC) : null;
        this.targetsLive = !0 === (null === qC || void 0 === qC ? void 0 : qC.live) && null !== nC;
        let GC = null;
        this.targetsLive && qC && nC && this.live && (this.livePos[0] = nC[0], this.livePos[1] = nC[1], this.livePos[2] = nC[2], this.liveVersion = this.live.version(), GC = this.live.line(qC.rootName, nC));
        const RC = null === pC ? GP : function(CC, zC, ZC) {
            const QC = function(CC, zC, ZC) {
              const QC = HZ(CC);
              if (null === QC) return null;
              const wC = `${SP}lookPortMode_${QC}`,
                bC = TQ(zC);
              if (bC && ZC) return {
                mode: null,
                detail: wC,
                next: `${SP}lookWrenchPickUp`,
                nextState: null
              };
              const nC = EZ(CC),
                fC = null === nC ? null : HZ(nC);
              return null === fC ? {
                mode: null,
                detail: wC,
                next: null,
                nextState: null
              } : {
                mode: null,
                detail: wC,
                next: bC ? `${SP}lookWrenchNext` : `${SP}lookPortWrench`,
                nextState: `${SP}lookPortState_${fC}`
              }
            }(CC, zC, ZC);
            if (null !== QC) return QC;
            const wC = Zw(CC, zC, ZC);
            return null === wC.mode && null === wC.next ? GP : wC
          }(CC.blockIdToBlockName(ZC), fC, oC),
          AC = this.plan,
          xC = qC && pC ? this.rowsOf(qC.rootName, NC) : RP,
          JC = this.snapshot;
        if (!(null === pC ? !JC.visible : JC.visible && pC === JC.info && (IC = PC, iC = JC.tool, IC === iC || null !== IC && null !== iC && IC.key === iC.key && IC.vq === iC.vq && IC.needed === iC.needed) && function(CC, zC) {
            return CC === zC || null !== CC && null !== zC && CC.key === zC.key && JSON.stringify([CC.params, CC.keys]) === JSON.stringify([zC.params, zC.keys])
          }(GC, JC.live) && function(CC, zC) {
            return CC.mode === zC.mode && CC.detail === zC.detail && CC.next === zC.next && CC.nextState === zC.nextState
          }(RC, JC.wrench) && zS(AC, JC.plan) && xC === JC.atomic)) {
          var IC, iC;
          this.snapshot = null === pC ? {
            ...JC,
            visible: !1
          } : {
            info: pC,
            visible: !0,
            tool: PC,
            live: GC,
            wrench: RC,
            plan: AC,
            atomic: xC
          };
          for (const CC of this.listeners) CC()
        }
      }
      get() {
        return this.snapshot
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = AP, this.SF = 0, this.vq = null, this.express = !1, this.crouching = !1, this.targetsLive = !1, this.plan = null, this.planPos = ""
      }
      readAfloat(CC, zC, ZC) {
        if (null === ZC || 0 === zC || !fC() || !PP(this.resolve(CC, zC).rootName)) return !1;
        const QC = `${ZC[0]},${ZC[1]},${ZC[2]},${zC}`,
          wC = performance.now();
        return QC === this.afloatKey && wC - this.afloatAt < vP ? this.afloat : (this.afloatKey = QC, this.afloatAt = wC, function(CC, zC) {
          for (const [ZC, QC, wC] of pP) {
            const bC = zC(CC[0] + ZC, CC[1] + QC, CC[2] + wC);
            if (void 0 === bC || null !== bC && !PP(bC)) return !1
          }
          return !0
        }(ZC, ((zC, ZC, QC) => function(CC, zC, ZC, QC) {
          if (!CC.isBlockInLoadedChunk(zC, ZC, QC)) return;
          const wC = CC.getBlockId(zC, ZC, QC);
          return 0 === wC ? null : CC.getMetaInfo(wC).rootName
        }(CC, zC, ZC, QC))))
      }
      liveMoved(CC) {
        var zC;
        const {
          livePos: ZC
        } = this;
        return null === CC || CC[0] !== ZC[0] || CC[1] !== ZC[1] || CC[2] !== ZC[2] || (null === (zC = this.live) || void 0 === zC ? void 0 : zC.version()) !== this.liveVersion
      }
      updatePlan(CC) {
        const zC = null === CC ? "" : CC.join(","),
          ZC = performance.now();
        if (zC === this.planPos && ZC - this.planMs < 250) return !1;
        this.planPos = zC, this.planMs = ZC;
        const QC = null === CC ? null : this.planAt([CC[0], CC[1], CC[2]]),
          wC = !zS(QC, this.plan);
        return this.plan = QC, wC
      }
      besideMaker(CC, zC, ZC) {
        let {
          info: QC
        } = CC;
        if (null === QC) return null;
        let wC = this.besideMakerById.get(zC);
        if (void 0 === wC) {
          const CC = "cryo" === ZC ? "lookPipeMixerSide" : "lookPipeCondenserSide";
          wC = {
            ...QC,
            detail: `${xP}${CC}`,
            detailItem: null
          }, this.besideMakerById.set(zC, wC)
        }
        return wC
      }
      hanging(CC) {
        let {
          info: zC,
          rootName: ZC
        } = CC;
        if (null === zC) return null;
        let QC = this.afloatByRoot.get(ZC);
        return void 0 === QC && (QC = {
          ...zC,
          detail: `${xP}lookOreAfloat`,
          detailItem: null
        }, this.afloatByRoot.set(ZC, QC)), QC
      }
      rowsOf(CC, zC) {
        if (null === zC) return RP;
        const ZC = `${CC}|${zC}`;
        let QC = this.rowsByKey.get(ZC);
        if (void 0 === QC) {
          const wC = function(CC, zC) {
            var ZC;
            if (!(CC in Ez)) return [];
            const QC = null !== (ZC = lz[CC]) && void 0 !== ZC ? ZC : [],
              wC = new Map;
            for (const nC of ab(CC, zC))
              if ((QC.includes(nC) || Tb(nC.output) && rb(nC.output) > BC(CC)) && rb(nC.output) <= zC) {
                var bC;
                const CC = null !== (bC = wC.get(nC.output)) && void 0 !== bC ? bC : [];
                CC.push(nC.input), wC.set(nC.output, CC)
              } return Db([...wC], (CC => {
              let [zC] = CC;
              return -rb(zC)
            })).map((CC => {
              let [zC, ZC] = CC;
              return {
                output: zC,
                inputs: ZC
              }
            }))
          }(CC, zC);
          QC = wC.length > 0 ? wC : RP, this.rowsByKey.set(ZC, QC)
        }
        return QC
      }
      resolve(CC, zC) {
        const {
          rootId: ZC,
          rootName: QC
        } = CC.getMetaInfo(zC), wC = (0, gZ.h)(QC) ? zC : ZC;
        let bC = this.byRootId.get(wC);
        const nC = fC();
        if (void 0 === bC || bC.nuclear !== nC) {
          var oC;
          const ZC = function(CC) {
            return XQ(NP, CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC)
          }(QC, CC.blockIdToBlockName(zC));
          bC = {
            info: ZC,
            rootName: QC,
            live: null !== ZC && !0 === (null === (oC = this.live) || void 0 === oC ? void 0 : oC.handles(QC)),
            nuclear: nC
          }, this.byRootId.set(wC, bC)
        }
        return bC
      }
    }
    const vP = 500;
    const eP = (0, QC.memo)((function(CC) {
      var zC, ZC;
      let {
        store: wC
      } = CC;
      const {
        t: bC
      } = (0, ew.y)(), [nC, fC] = (0, QC.useState)((() => wC.get()));
      (0, QC.useEffect)((() => (fC(wC.get()), wC.subscribe((() => {
        fC(wC.get())
      })))), [wC]);
      const {
        openInGameMenuName: oC,
        openEverythingMenuName: qC,
        isTouchScreen: FC
      } = (0, Rw.k)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
        info: WC,
        tool: NC,
        live: MC,
        wrench: gC,
        atomic: SC
      } = nC, pC = nC.visible && null === oC && null === qC;
      if (null === WC) return null;
      const PC = null !== gC.detail ? bC(gC.detail) : null !== (zC = nC.plan) && void 0 !== zC && zC.ctrl ? bC("buildAFactory2Game:lookPlanCtrl") : null !== WC.detail ? bC(WC.detail, null === WC.detailItem ? void 0 : {
        item: bC(WC.detailItem)
      }) : null;
      return (0, vb.jsxs)("div", {
        className: Jw()("Baf2LookTarget", {
          Visible: pC
        }),
        "aria-hidden": !pC,
        children: [(0, vb.jsx)("div", {
          className: "Baf2LookTargetName SmallTextBold",
          children: bC(WC.name)
        }), null !== nC.plan && (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: bC(nC.plan.key, {
            kind: bC(nC.plan.kindKey),
            w: String(nC.plan.w),
            h: String(nC.plan.h),
            d: String(nC.plan.d),
            count: String(nC.plan.count)
          })
        }), void 0 !== (null === (ZC = nC.plan) || void 0 === ZC ? void 0 : ZC.why) && (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: bC(nC.plan.why)
        }), null !== gC.mode && (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: bC(gC.mode)
        }), null !== NC ? (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail Warning",
          children: bC(NC.key, {
            item: bC(NC.needed),
            vq: null === NC.vq ? "" : bC(NC.vq)
          })
        }) : null !== MC ? (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: bC(MC.key, Fq(bC, MC))
        }) : null !== PC && (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: PC
        }), SC.length > 0 && (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: bC("buildAFactory2Game:lookAtomicRecipes", {
            list: SC.map((CC => {
              let {
                output: zC,
                inputs: ZC
              } = CC;
              const QC = ZC.length > 1 ? ` ${bC("buildAFactory2Game:recipeMore",{count:String(ZC.length-1)})}` : "";
              return `${bC(Qb(ZC[0]))}${QC} \u2192 ${bC(Qb(zC))}`
            })).join(", ")
          })
        }), null !== gC.next && (0, vb.jsx)("div", {
          className: "Baf2LookTargetDetail",
          children: bC(gC.next, {
            state: null === gC.nextState ? "" : bC(gC.nextState),
            use: bC(FC ? "buildAFactory2Game:lookUse_touch" : "buildAFactory2Game:lookUse_mouse")
          })
        })]
      })
    }));
    var hP = ZC(38349);
    const KP = [],
      YP = [
        [0, -1, 0]
      ];

    function dP(CC) {
      const zC = [CC];
      for (let ZC = 1; ZC <= 4; ZC++) ZC > 1 && zC.push(`${CC}|meta|rot${ZC}`), zC.push(`${CC}|meta|rot${ZC}|Running`);
      return zC
    }

    function mP(CC, zC) {
      return [Math.floor(CC[0] / zC), Math.floor(CC[1] / zC), Math.floor(CC[2] / zC)]
    }

    function HP(CC, zC, ZC) {
      return `${CC},${zC},${ZC}`
    }

    function EP(CC) {
      const zC = CC.split("|")[0];
      if (!qZ(zC)) return KP;
      const ZC = Ez[zC];
      if (zZ(ZC)) return YP;
      const QC = dp(CC);
      return ZZ(ZC) ? [
        [-QC[0], -QC[1], -QC[2]]
      ] : Iw(ZC) ? function(CC, zC) {
        const ZC = CC[0] - 2 * zC[0],
          QC = CC[2] - 2 * zC[2],
          wC = [];
        for (let bC = -1; bC <= 1; bC++)
          for (let zC = -1; zC <= 1; zC++) wC.push([ZC + bC, CC[1], QC + zC]);
        return wC
      }([0, 0, 0], QC) : KP
    }
    const lP = [.5, .5, .5],
      XP = [.2, .8, .3],
      cP = [.45, 1, .5];
    class uP {
      constructor() {
        this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
      }
      index(CC) {
        this.indexed = !0;
        for (const zC of hz)
          for (const ZC of dP(zC)) {
            const zC = CC.blockNameToBlockId(ZC, !0),
              QC = EP(ZC);
            null !== zC && QC.length > 0 && (this.offsetsList.push(QC), this.offsetsIndexById[zC] = this.offsetsList.length)
          }
      }
      onAfterRender(CC, zC) {
        this.indexed || this.index(CC);
        const ZC = performance.now();
        if (ZC - this.lastCheckMs < 100) return;
        this.lastCheckMs = ZC, this.checks++;
        const QC = Jg.f.Ig,
          [wC, bC, nC] = mP(zC, QC);
        let fC = !1;
        const oC = [];
        let qC = 0;
        for (let FC = wC - 2; FC <= wC + 2; FC++)
          for (let zC = bC - 1; zC <= bC + 1; zC++)
            for (let wC = nC - 2; wC <= nC + 2; wC++) {
              const bC = qC++,
                nC = HP(FC, zC, wC),
                WC = CC.getChunkVersion(FC, zC, wC);
              let NC = this.chunks.get(nC);
              null !== WC ? (NC || (NC = {
                checkedVersion: -1,
                scannedVersion: -1,
                scannedAt: -1 / 0,
                machines: [],
                cellChunks: [],
                seenAt: 0
              }, this.chunks.set(nC, NC)), NC.seenAt = this.checks, NC.checkedVersion !== WC && (NC.checkedVersion = WC, fC = !0), NC.scannedVersion !== WC && ZC - NC.scannedAt >= 500 && oC.push({
                slot: bC,
                entry: NC,
                origin: [FC * QC, zC * QC, wC * QC]
              })) : (fC ||= void 0 !== NC, this.chunks.delete(nC))
            }
        this.scanDue(CC, oC) && (fC = !0);
        for (const [FC, WC] of this.chunks) WC.seenAt !== this.checks && (fC ||= WC.machines.length > 0, this.chunks.delete(FC));
        for (const FC of this.chunks.values())
          for (const [zC, ZC, QC] of FC.cellChunks)(Math.abs(zC - wC) > 2 || Math.abs(ZC - bC) > 1 || Math.abs(QC - nC) > 2) && this.watchCellChunk(CC, zC, ZC, QC) && (fC = !0);
        for (const [FC, WC] of this.cellChunks) WC.seenAt !== this.checks && this.cellChunks.delete(FC);
        fC && this.refresh(CC)
      }
      dispose(CC) {
        this.clearMeshes(CC), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
      }
      scanDue(CC, zC) {
        const ZC = Math.max(zC.findIndex((CC => {
          let {
            slot: zC
          } = CC;
          return zC >= this.scanFrom
        })), 0);
        let QC = 96;
        for (let wC = 0; wC < zC.length; wC++) {
          const {
            slot: bC,
            entry: nC,
            origin: fC
          } = zC[(ZC + wC) % zC.length];
          if (QC -= this.scan(CC, nC, fC), QC <= 0) {
            this.scanFrom = bC + 1;
            break
          }
        }
        return zC.length > 0
      }
      scan(CC, zC, ZC) {
        let [QC, wC, bC] = ZC;
        const nC = Jg.f.Ig,
          fC = this.hits;
        fC.length = 0;
        const oC = CC.scanBlocks(QC, wC, bC, QC + nC, wC + nC, bC + nC, this.offsetsIndexById, fC),
          qC = [];
        for (let FC = 0; FC < fC.length; FC += 4) qC.push({
          pos: [fC[FC], fC[FC + 1], fC[FC + 2]],
          offsets: this.offsetsList[this.offsetsIndexById[fC[FC + 3]] - 1]
        });
        return zC.machines = qC, zC.cellChunks = function(CC, zC) {
          const ZC = new Set,
            QC = [];
          for (const {
              pos: wC,
              offsets: bC
            }
            of CC)
            for (const [CC, nC, fC] of bC) {
              const bC = mP([wC[0] + CC, wC[1] + nC, wC[2] + fC], zC),
                oC = HP(...bC);
              ZC.has(oC) || (ZC.add(oC), QC.push(bC))
            }
          return QC
        }(qC, nC), zC.scannedVersion = zC.checkedVersion, zC.scannedAt = performance.now(), Math.max(oC, 1)
      }
      watchCellChunk(CC, zC, ZC, QC) {
        const wC = HP(zC, ZC, QC),
          bC = CC.getChunkVersion(zC, ZC, QC),
          nC = this.cellChunks.get(wC);
        return null === bC ? this.cellChunks.delete(wC) : (null === nC || void 0 === nC ? void 0 : nC.version) === bC ? (nC.seenAt = this.checks, !1) : (this.cellChunks.set(wC, {
          version: bC,
          seenAt: this.checks
        }), !0)
      }
      refresh(CC) {
        const zC = function(CC, zC) {
            const ZC = new Set,
              QC = [];
            for (const {
                pos: wC,
                offsets: bC
              }
              of CC)
              for (const [CC, nC, fC] of bC) {
                const bC = wC[0] + CC,
                  oC = wC[1] + nC,
                  qC = wC[2] + fC,
                  FC = `${bC},${oC},${qC}`;
                ZC.has(FC) || (ZC.add(FC), zC(bC, oC, qC) && QC.push([bC, oC, qC]))
              }
            return QC
          }([...this.chunks.values()].flatMap((CC => CC.machines)), ((zC, ZC, QC) => CC.isBlockInLoadedChunk(zC, ZC, QC) && 0 === CC.getBlockId(zC, ZC, QC))),
          ZC = zC.join(";");
        ZC !== this.shownKey && (this.shownKey = ZC, this.clearMeshes(CC), zC.length > 0 && (this.meshes = [this.build(CC, zC, !1), this.build(CC, zC, !0)]))
      }
      build(CC, zC, ZC) {
        const QC = zC[0],
          wC = [],
          bC = [];
        for (const [nC, fC, oC] of zC)(0, hP.e)(wC, bC, [nC - QC[0] + .5, fC - QC[1] + .5, oC - QC[2] + .5], lP, ZC);
        return CC.createGameMesh({
          positions: wC,
          indices: bC
        }, {
          rgb: ZC ? cP : XP,
          alpha: .4
        }, QC)
      }
      clearMeshes(CC) {
        for (const zC of this.meshes) CC.disposeGameMesh(zC);
        this.meshes = []
      }
    }
    const rP = 1 / .6,
      sP = 200,
      TP = {
        colours: [
          [127, 233, 255],
          [180, 140, 255]
        ],
        life: [.12, .22],
        size: [.12, .2],
        perBlock: 3
      },
      aP = {
        colours: [
          [120, 255, 150],
          [200, 255, 120]
        ],
        life: [.3, .5],
        size: [.25, .4],
        perBlock: 6
      },
      tP = 2 * Math.PI / 3;
    class DP {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TP;
        this.style = CC, this.particles = null, this.points = new Float32Array(800), this.budget = sP, this.lastMs = 0
      }
      static blade() {
        return new DP(aP)
      }
      fR(CC, zC) {
        const ZC = Math.min(zC.arcStruck, zC.arcPoints.length);
        this.draw(CC, [zC.arcFrom, ...zC.arcPoints], zC.arcPoints.slice(0, ZC))
      }
      onBlade(CC, zC) {
        const [ZC, QC, wC] = zC.bladeCentre, [bC, nC] = zC.bladeFacing, fC = ZC - 1.5 * bC, oC = wC - 1.5 * nC, qC = Math.atan2(nC, bC), FC = [];
        for (let WC = 0; WC <= 8; WC++) {
          const CC = qC - tP / 2 + tP * WC / 8;
          FC.push([fC + 2.5 * Math.cos(CC), QC, oC + 2.5 * Math.sin(CC)])
        }
        this.draw(CC, FC, zC.bladeStruck)
      }
      dispose() {
        var CC;
        null === (CC = this.particles) || void 0 === CC || CC.stop(), this.particles = null
      }
      draw(CC, zC, ZC) {
        if (!CC.particlesEnabled() || zC.length < 2) return;
        const QC = performance.now();
        this.budget = Math.min(sP, this.budget + (QC - this.lastMs) / 1e3 * sP), this.lastMs = QC;
        const wC = [];
        let bC = 0,
          nC = zC[0];
        for (const PC of zC.slice(1)) {
          const CC = Math.min(48, Math.round(Math.hypot(PC[0] - nC[0], PC[1] - nC[1], PC[2] - nC[2]) * this.style.perBlock));
          wC.push([nC, PC, CC]), bC += CC, nC = PC
        }
        const fC = ZC.length;
        bC += 10 * fC;
        const oC = bC > this.budget ? this.budget / bC : 1;
        if (0 === bC || oC * bC < 1) return;
        const qC = zC[0],
          [FC, WC, NC] = qC,
          MC = this.points;
        let gC = 0;
        const SC = (CC, zC, ZC, QC) => {
          const wC = 4 * gC;
          MC[wC] = CC - FC, MC[wC + 1] = zC - WC, MC[wC + 2] = ZC - NC, MC[wC + 3] = QC, gC++
        };
        wC.forEach(((CC, zC) => {
          let [ZC, QC, wC] = CC;
          const bC = Math.min(Math.floor(wC * oC), sP - gC),
            nC = Math.hypot(QC[0] - ZC[0], QC[1] - ZC[1], QC[2] - ZC[2]),
            fC = 0 === zC && nC > 0 ? Math.min(.5, .1 * nC) / nC : 0;
          for (let oC = 0; oC < bC; oC++) {
            const CC = fC + (oC + .5) / bC * (1 - fC);
            SC(ZC[0] + (QC[0] - ZC[0]) * CC, ZC[1] + (QC[1] - ZC[1]) * CC, ZC[2] + (QC[2] - ZC[2]) * CC, .15)
          }
        }));
        const pC = Math.floor(10 * oC);
        for (let PC = 0; PC < fC; PC++) {
          const [CC, zC, QC] = ZC[PC];
          for (let ZC = 0; ZC < pC && gC < sP; ZC++) SC(CC, zC, QC, 2.5)
        }
        this.budget -= gC, this.particles ??= CC.createParticles(function(CC) {
          const [zC, ZC] = CC.colours;
          return {
            texture: "square_particle",
            HW: 400,
            minLifeTime: CC.life[0] / rP,
            maxLifeTime: CC.life[1] / rP,
            minSize: CC.size[0],
            maxSize: CC.size[1],
            minEmitPower: 1,
            maxEmitPower: 1,
            emitRate: 0,
            colorGradients: [{
              timeFraction: 0,
              minColor: [zC[0], zC[1], zC[2], 1],
              maxColor: [ZC[0], ZC[1], ZC[2], 1]
            }, {
              timeFraction: 1,
              minColor: [zC[0], zC[1], zC[2], 0],
              maxColor: [ZC[0], ZC[1], ZC[2], 0]
            }],
            blendMode: sf.d.Add
          }
        }(this.style), {
          pos: qC
        }), this.particles.emitPoints(qC, MC, gC)
      }
    }
    const jP = new Set(["Sky Spring"]);

    function yP(CC, zC, ZC) {
      const QC = CC.split("|")[0];
      return "Air" !== zC || ZC || ! function(CC) {
        const zC = CC.split("|")[0];
        return void 0 !== nZ[zC] || jP.has(zC)
      }(QC) ? null : CC
    }
    class LP {
      constructor() {
        this.lastTapAt = -1 / 0
      }
      isNewPress(CC) {
        const zC = CC - this.lastTapAt >= 300;
        return this.lastTapAt = CC, zC
      }
    }
    class UP {
      constructor() {
        this.presses = new LP, this.predicted = null
      }
      tap(CC, zC) {
        const ZC = this.presses.isNewPress(zC);
        return ZC && (this.predicted = {
          station: CC,
          at: zC
        }), ZC
      }
      consumeServerOpen(CC, zC) {
        const ZC = this.predicted;
        return !(null === ZC || ZC.station !== CC || zC - ZC.at > 2e3) && (this.predicted = null, !0)
      }
    }
    class BP {
      constructor() {
        this.thrustAt = -1 / 0
      }
      lit(CC, zC) {
        return CC && (this.thrustAt = zC), zC - this.thrustAt < 200
      }
    }
    const OP = [.1, .05, .1],
      kP = {
        texture: "effect_5",
        HW: Math.ceil(48),
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
        blendMode: sf.d.OneOne
      };
    class VP {
      constructor() {
        this.flames = new Map, this.lit = new Set, this.hold = new BP, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
      }
      fR(CC, zC) {
        for (const [ZC, QC] of zC.baf2JetFlames) CC.isLocalPlayer(ZC) || (QC ? this.lit.add(ZC) : this.lit.delete(ZC))
      }
      onAfterRender(CC, zC) {
        const ZC = performance.now(),
          QC = this.hold.lit(this.selfThrusting(CC, zC), ZC);
        for (const [wC, bC] of this.flames)(wC === zC ? QC : this.lit.has(wC)) || this.setEmitting(bC, !1), wC === zC || CC.getPositionView(wC) ? !bC.emitting && ZC - bC.offAt >= 1300 && (bC.particles.stop(), this.flames.delete(wC)) : (bC.particles.dispose(), this.flames.delete(wC), this.lit.delete(wC));
        QC && this.draw(CC, zC, zC);
        for (const wC of this.lit) this.draw(CC, zC, wC)
      }
      dispose() {
        for (const CC of this.flames.values()) CC.particles.dispose();
        this.flames.clear(), this.lit.clear()
      }
      selfThrusting(CC, zC) {
        var ZC;
        const QC = CC.getLocalPlayerMovement();
        return !!QC && (null !== (wC = {
          option: null !== (ZC = CC.getClientOption(zC, "jumpHoldThrust")) && void 0 !== ZC ? ZC : null,
          jumping: QC.jumpHeld,
          onGround: QC.onGround,
          alive: CC.isAlive(zC)
        }).option && wC.option.maxUpSpeed >= 0 && wC.jumping && !wC.onGround && wC.alive);
        var wC
      }
      draw(CC, zC, ZC) {
        var QC, wC;
        const bC = this.pos;
        if (!CC.readDrawnPosition(ZC, bC)) return;
        const nC = CC.readDrawnPosition(zC, this.camera) ? this.camera : bC;
        if (!((bC[0] - nC[0]) ** 2 + (bC[1] - nC[1]) ** 2 + (bC[2] - nC[2]) ** 2 < 1600) || !CC.particlesEnabled()) {
          const CC = this.flames.get(ZC);
          return void(CC && this.setEmitting(CC, !1))
        }
        const fC = null !== (QC = this.flames.get(ZC)) && void 0 !== QC ? QC : this.create(CC, ZC, bC),
          oC = null !== (wC = CC.getDrawnHeading(ZC)) && void 0 !== wC ? wC : 0,
          qC = this.at;
        qC[0] = bC[0] - .35 * Math.sin(oC), qC[1] = bC[1] + 1.05, qC[2] = bC[2] - .35 * Math.cos(oC), fC.particles.moveTo(qC), this.setEmitting(fC, !0)
      }
      setEmitting(CC, zC) {
        CC.emitting !== zC && (CC.emitting = zC, zC || (CC.offAt = performance.now()), CC.particles.setEmitRate(zC ? 60 : 0))
      }
      create(CC, zC, ZC) {
        const QC = {
          particles: CC.createParticles(kP, {
            pos: ZC,
            half: OP
          }),
          emitting: !1,
          offAt: performance.now()
        };
        return this.flames.set(zC, QC), QC
      }
    }

    function CG(CC) {
      return "Reactor Frame" === QQ("reactor", CC)
    }

    function zG(CC) {
      return uZ("reactor", CC) && !CG(CC) && (CC.startsWith("Reactor Glass") || CC.startsWith("Reactor Port"))
    }
    const ZG = "baf2Goal";
    class QG {
      constructor() {
        this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Hw.o.subscribe("setDirectionArrow", (CC => {
          let {
            id: zC,
            position: ZC
          } = CC;
          zC === ZG && (this.goal = ZC, this.checkedAt = -1 / 0)
        })), Hw.o.subscribe("clearDirectionArrow", (CC => {
          let {
            id: zC
          } = CC;
          null !== zC && zC !== ZG || (this.goal = null, this.open = null)
        }))]
      }
      dispose() {
        for (const CC of this.subs) Hw.o.unsubscribe(CC)
      }
      sideOf(CC, zC, ZC, QC) {
        const wC = this.goal;
        if (!wC) return 0;
        ZC - this.checkedAt > 1e3 && (this.checkedAt = ZC, this.open = function(CC, zC) {
          const [ZC, QC, wC] = CC.map(Math.floor);
          if (!zG(zC(ZC, QC, wC))) return null;
          for (const [bC, nC] of [
              [1, 0],
              [0, 1]
            ]) {
            const CC = zC(ZC + bC, QC, wC + nC),
              fC = zC(ZC - bC, QC, wC - nC);
            if (CG(fC) && zG(CC)) return [bC, 0, nC];
            if (CG(CC) && zG(fC)) return [0 - bC, 0, 0 - nC]
          }
          return null
        }(wC, ((zC, ZC, QC) => CC.blockIdToBlockName(CC.getBlockId(zC, ZC, QC)))));
        const bC = this.open;
        if (!bC) return 0;
        const nC = QC(wC);
        if (Math.abs(nC.x - zC.x) > .05 || Math.abs(nC.y - zC.y) > .05) return 0;
        const fC = QC([wC[0] + bC[0], wC[1], wC[2] + bC[2]]).x - nC.x;
        return Math.abs(fC) < .3 ? 0 : fC > 0 ? 1 : -1
      }
    }
    class wG {
      constructor() {
        this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), this.moved = new Map, this.sideLabels = new Map, this.labelOffsets = new WeakMap, this.side = new QG, this.project = null, this.api = null, this.anchors = new WeakMap, this.halfWidths = new WeakMap, this.labels = new Set, this.queued = !1, this.Sg = !1, this.em = 12, this.refreshedAt = -1 / 0, this.tracker = null, this.hud = null, this.box = null, this.boxStale = !0, this.bars = null, this.barsStale = !0, this.toastEl = null, this.toast = null, this.onChange = () => {
          this.boxStale = !0
        }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.mG = () => {
          this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
        }, this.sizes = new ResizeObserver((CC => {
          for (const zC of CC) zC.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(zC.target, zC.borderBoxSize[0].inlineSize / 2)
        })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
          this.queued = !1, this.Sg || this.clear()
        }, window.addEventListener("resize", this.mG)
      }
      onAfterRender(CC, zC) {
        var ZC;
        this.api = CC, this.project = null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.projectWorldPosToScreenPos) && void 0 !== ZC ? ZC : null, this.queued || this.Sg || (this.queued = !0, queueMicrotask(this.run))
      }
      dispose() {
        this.Sg = !0;
        for (const CC of this.moved.keys()) CC.style.transform = "";
        this.moved.clear();
        for (const CC of this.sideLabels.keys()) CC.style.transform = "";
        this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.mG)
      }
      clear() {
        for (const bC of this.moved.keys()) bC.isConnected || this.moved.delete(bC);
        for (const bC of this.sideLabels.keys()) bC.isConnected || this.sideLabels.delete(bC);
        if (0 === this.arrows.length) return;
        const CC = performance.now(),
          zC = CC - this.refreshedAt > 1e3;
        zC && (this.refreshedAt = CC, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
        const ZC = this.trackerBox(),
          QC = this.barsBox(),
          wC = this.toastBox(zC);
        (ZC || QC || wC) && zC && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
        for (let bC = 0; bC < this.arrows.length; bC++) {
          const zC = this.arrows[bC];
          this.labelOffsets.set(zC, this.runLabelAside(zC, CC));
          const nC = (ZC ? this.shiftLeftOf(zC, ZC) : 0) || this.shiftOnScreen(zC),
            fC = Math.min(QC ? this.liftAbove(zC, QC, nC) : 0, wC ? this.liftAbove(zC, wC, nC) : 0),
            oC = this.moved.get(zC);
          if (0 !== nC || 0 !== fC) {
            const CC = 0 === fC ? `translateX(${nC}px)` : `translate(${nC}px, ${fC}px)`;
            oC !== CC && (zC.style.transform = CC, this.moved.set(zC, CC))
          } else void 0 !== oC && (zC.style.transform = "", this.moved.delete(zC))
        }
      }
      trackerBox() {
        var CC, zC;
        const ZC = null !== (CC = this.tracker) && void 0 !== CC && CC.isConnected ? this.tracker : null !== (zC = this.trackers[0]) && void 0 !== zC ? zC : null;
        if (ZC !== this.tracker && this.watch(ZC), this.boxStale && ZC) {
          var QC, wC, bC;
          this.boxStale = !1;
          const CC = ZC.closest(".NoRoom") ? null : ZC.getBoundingClientRect(),
            zC = CC && CC.width > 0 ? null === (QC = this.hud) || void 0 === QC ? void 0 : QC.getBoundingClientRect() : void 0,
            nC = CC && zC ? Math.max(CC.top, zC.top) : null !== (wC = null === CC || void 0 === CC ? void 0 : CC.top) && void 0 !== wC ? wC : 0,
            fC = CC && zC ? Math.min(CC.bottom, zC.bottom) : null !== (bC = null === CC || void 0 === CC ? void 0 : CC.bottom) && void 0 !== bC ? bC : 0;
          this.box = CC && CC.width > 0 && fC > nC ? {
            left: CC.left,
            top: nC,
            right: CC.right,
            bottom: fC
          } : null
        }
        return ZC ? this.box : null
      }
      barsBox() {
        if (this.barsStale) {
          var CC;
          this.barsStale = !1;
          const zC = null === (CC = this.statBars[0]) || void 0 === CC ? void 0 : CC.getBoundingClientRect();
          this.bars = zC && zC.width > 0 && zC.height > 0 ? {
            left: zC.left,
            top: zC.top,
            right: zC.right,
            bottom: zC.bottom
          } : null
        }
        return this.bars
      }
      toastBox(CC) {
        var zC;
        const ZC = null !== (zC = this.toasts[0]) && void 0 !== zC ? zC : null;
        if (ZC !== this.toastEl || CC && ZC) {
          this.toastEl = ZC;
          const CC = null === ZC || void 0 === ZC ? void 0 : ZC.getBoundingClientRect();
          this.toast = CC && CC.width > 0 && CC.height > 0 ? {
            left: CC.left,
            top: CC.top,
            right: CC.right,
            bottom: CC.bottom
          } : null
        }
        return this.toast
      }
      liftAbove(CC, zC, ZC) {
        var QC;
        const wC = this.anchorOf(CC);
        if (!wC) return 0;
        const bC = wC.x + ZC + (null !== (QC = this.labelOffsets.get(CC)) && void 0 !== QC ? QC : 0),
          {
            halfWidth: nC,
            labelled: fC
          } = this.extentOf(CC),
          oC = wC.y + this.em * (fC ? 6.2 : 3);
        return oC < zC.top - 6 || bC + nC < zC.left - 6 || bC - nC > zC.right + 6 ? 0 : zC.top - 6 - oC
      }
      watch(CC) {
        var zC, ZC;
        this.tracker && this.sizes.unobserve(this.tracker), null === (zC = this.hud) || void 0 === zC || zC.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = CC, this.hud = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.closest(".Baf2QuestHud")) && void 0 !== ZC ? ZC : null, this.box = null, this.boxStale = !0, CC && this.sizes.observe(CC), this.hud && (this.hud.addEventListener("scroll", this.onChange, {
          passive: !0
        }), this.hudStyle.observe(this.hud, {
          attributes: !0,
          attributeFilter: ["style", "class"]
        }))
      }
      shiftLeftOf(CC, zC) {
        var ZC;
        const QC = this.anchorOf(CC);
        if (!QC) return 0;
        const {
          y: wC
        } = QC, bC = QC.x + (null !== (ZC = this.labelOffsets.get(CC)) && void 0 !== ZC ? ZC : 0), nC = this.em, {
          halfWidth: fC,
          labelled: oC
        } = this.extentOf(CC), qC = wC - nC, FC = bC + fC;
        return wC + nC * (oC ? 6.2 : 3) < zC.top || qC > zC.bottom || FC < zC.left - 6 || bC - fC > zC.right ? 0 : Math.max(zC.left - 6 - FC, 6 - (bC - fC))
      }
      shiftOnScreen(CC) {
        var zC;
        const ZC = this.anchorOf(CC);
        if (!ZC) return 0;
        const {
          halfWidth: QC
        } = this.extentOf(CC), wC = ZC.x + (null !== (zC = this.labelOffsets.get(CC)) && void 0 !== zC ? zC : 0), bC = wC + QC - (this.innerWidth - 6);
        return bC > 0 ? -bC : Math.max(0, 6 - (wC - QC))
      }
      runLabelAside(CC, zC) {
        var ZC;
        let QC = null;
        for (let nC = 0; nC < CC.children.length; nC++) CC.children[nC].classList.contains("DirectionArrowLabel") && (QC = CC.children[nC]);
        if (!QC) return 0;
        const wC = CC.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(CC) : null,
          bC = (wC && this.api ? this.side.sideOf(this.api, {
            x: wC.x / this.innerWidth * 100,
            y: wC.y / this.innerHeight * 100
          }, zC, this.project) : 0) * this.halfWidthOf(QC);
        return bC !== (null !== (ZC = this.sideLabels.get(QC)) && void 0 !== ZC ? ZC : 0) && (QC.style.transform = 0 === bC ? "" : `translateX(-50%) translateX(${bC}px)`, 0 === bC ? this.sideLabels.delete(QC) : this.sideLabels.set(QC, bC)), bC
      }
      extentOf(CC) {
        let zC = this.em,
          ZC = !1;
        for (let QC = 0; QC < CC.children.length; QC++) {
          const wC = CC.children[QC],
            bC = wC.classList.contains("DirectionArrowLabel");
          ZC ||= bC, (bC || wC.classList.contains("DirectionArrowDistance")) && (zC = Math.max(zC, this.halfWidthOf(wC)))
        }
        return {
          halfWidth: zC,
          labelled: ZC
        }
      }
      halfWidthOf(CC) {
        let zC = this.halfWidths.get(CC);
        return void 0 === zC && (zC = CC.offsetWidth / 2, this.halfWidths.set(CC, zC), this.sizes.observe(CC), this.labels.add(CC)), zC
      }
      forgetGoneLabels() {
        for (const CC of this.labels) CC.isConnected || (this.sizes.unobserve(CC), this.halfWidths.delete(CC), this.labels.delete(CC))
      }
      anchorOf(CC) {
        const zC = CC.style.translate,
          ZC = this.anchors.get(CC);
        if (ZC && ZC.translate === zC && ZC.innerWidth === this.innerWidth && ZC.innerHeight === this.innerHeight) return ZC;
        const QC = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(zC);
        if (!QC) return null;
        const wC = {
          translate: zC,
          x: parseFloat(QC[1]) / 100 * this.innerWidth,
          y: parseFloat(QC[2]) / 100 * this.innerHeight,
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight
        };
        return this.anchors.set(CC, wC), wC
      }
    }
    const bG = "Baf2ArrowText";

    function nG(CC, zC) {
      const ZC = CC.rows.find((CC => CC.current));
      return HC(CC.tutorial) && null !== ZC && void 0 !== ZC && ZC.item && Dw(ZC) && KC(ZC.item).includes(zC) ? ZC.item : null
    }
    const fG = new class {
      constructor(CC) {
        this.select = CC, this.picks = new Map
      }
      open(CC, zC, ZC) {
        const QC = nG(zC, CC);
        null !== QC && this.CM(CC, QC, ZC)
      }
      follow(CC, zC) {
        if (fC())
          for (const [ZC, {
              item: QC,
              had: wC
            }] of this.picks) {
            const bC = nG(CC, ZC);
            bC !== QC && (null !== bC && zC(QC) > wC ? this.CM(ZC, bC, zC) : this.picks.delete(ZC))
          } else this.picks.clear()
      }
      clear() {
        this.picks.clear()
      }
      CM(CC, zC, ZC) {
        this.picks.set(CC, {
          item: zC,
          had: ZC(zC)
        }), this.select(CC, zC)
      }
    }(Ew.s);

    function oG(CC) {
      return zC => {
        let ZC = 0;
        for (const QC of CC.getInventoryItems())(null === QC || void 0 === QC ? void 0 : QC.name) === zC && (ZC += null === QC.amount ? 1 : Math.max(QC.amount, 0));
        return ZC
      }
    }

    function qG(CC, zC, ZC, QC) {
      CC.getClientOption(zC, "canCraft") && "inventory" !== Rw.b.get("openInGameMenuName") && (fG.open(ZC, QC.get(), oG(CC)), Hw.o.bp("toggleMenu", `inventory|${ZC}`))
    }
    let FG = null,
      WG = !1;

    function NG(CC) {
      const zC = ib();
      CC === FG && zC === WG || (FG = CC, WG = zC, (0, Ew.t)(function(CC, zC) {
        const ZC = new Map;
        for (let QC = CC + 1; QC <= wC.length; QC++) {
          const wC = jb(QC, CC, zC);
          if (wC)
            for (const zC of PC(QC).unlocks) ZC.set(zC, {
              ...wC,
              stepsAway: QC - CC
            })
        }
        return ZC
      }(CC, zC)))
    }

    function MG() {
      return CC = () => {
        null !== FG && NG(FG)
      }, (0, Jb.g)(Ib, CC);
      var CC
    }

    function gG() {
      return (0, Ew.y)(Db(Object.keys(hC), rb)), () => {
        (0, Ew.y)([])
      }
    }

    function SG(CC, zC, ZC) {
      var QC, wC;
      const bC = CC.getTargetedBlock();
      if (!bC || ! function(CC, zC, ZC) {
          if ("Chest" !== zC) return !1;
          const QC = CC.split("|")[0];
          if (!qZ(QC) || 0 === Ez[QC].outputSlots.length) return !1;
          const wC = dp(CC);
          return ZC[0] === wC[0] && ZC[1] === wC[1] && ZC[2] === wC[2]
        }(ZC, null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name, bC.normal)) return !1;
      const [nC, fC, oC] = bC.wp, qC = CC.getBlockId(nC, fC, oC);
      return 0 === qC || !0 === (null === (wC = dC.g[qC]) || void 0 === wC ? void 0 : wC.canBePlacedOver)
    }
    var pG = ZC(36641);
    const PG = new Set(SZ.d);
    class GG {
      constructor(CC) {
        this.toasts = CC, this.lastAt = -1 / 0
      }
      onAltAction(CC, zC, ZC) {
        const QC = CC.getTargetedBlock();
        if (!QC || function(CC) {
            const zC = CC.split("|")[0];
            return qZ(zC) || null !== IQ(zC) || vC(zC) || SZ.d.includes(zC)
          }(ZC) && !PG.has(ZC.split("|")[0])) return;
        const wC = CC.XzC(zC);
        if (!wC || !PG.has(wC.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
        const bC = wC.typeObj.id,
          [nC, fC, oC] = QC.wp,
          qC = CC.getBlockId(nC, fC, oC),
          FC = dC.g[qC];
        (0 === qC || null !== FC && void 0 !== FC && FC.NM || null !== FC && void 0 !== FC && FC.canBePlacedOver) && CC.isSolidToPlayerBlockId(bC) && CC.canModifyBlockAt(nC, fC, oC) && CC.QzC(nC, fC, oC, bC) && !CC.QzC(nC, fC, oC, bC, zC) && (this.lastAt = Date.now(), this.toasts.show({
          baf2ToastText: [(0, EC.Md)({
            translationKey: "buildAFactory2Game:beltStepBack"
          }, EC.H.whiteUiText)],
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastInfo"
        }))
      }
    }
    class RG {
      constructor(CC) {
        this.show = CC, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
      }
      onMining(CC, zC, ZC) {
        var QC;
        if (!zC) return this.started = null, void this.gatedThisHold.clear();
        if (!CC) return void(this.started = null);
        const wC = `${CC.x},${CC.y},${CC.z},${CC.vq}`;
        if (wC === this.started) return;
        this.started = wC;
        const bC = cQ(CC.y) ? MP(CC.block, CC.vq, CC.level) : null;
        if (null === bC || this.gatedThisHold.has(wC)) return;
        this.gatedThisHold.add(wC);
        const nC = CC.block.split("|")[0];
        ZC - (null !== (QC = this.hintedAt.get(nC)) && void 0 !== QC ? QC : -1 / 0) < 5e3 || (this.hintedAt.set(nC, ZC), this.show({
          baf2ToastText: gP(bC, CC.block),
          baf2ToastMs: 2500,
          baf2ToastStyle: "baf2ToastWarn"
        }))
      }
    }
    var AG = ZC(38);

    function xG(CC, zC) {
      const ZC = [...CC.baf2CoreBankPaused];
      for (const [wC] of CC.baf2CoreBanked) ZC.push(wC);
      for (const nC of wC) {
        for (const {
            item: CC
          }
          of nC.cost) ZC.push(CC);
        for (const CC of nC.newDeposits) ZC.push(CC.block);
        for (const CC of nC.unlocks) ZC.push(CC, YC(CC));
        nC.reward && ZC.push(nC.reward);
        for (const {
            item: CC
          }
          of null !== (QC = null === (bC = nC.charge) || void 0 === bC ? void 0 : bC.items) && void 0 !== QC ? QC : []) {
          var QC, bC;
          ZC.push(CC)
        }
      }
      return {
        message: CC,
        itemNames: zC([...new Set(ZC)])
      }
    }
    const JG = "baf2MultiblockGuide";
    const IG = new Map;
    const iG = function(CC, zC, ZC, wC) {
      let {
        localPlayerId: bC
      } = wC;
      const nC = new Rf,
        fC = new WM,
        qC = new GM,
        FC = new pM(qC),
        WC = (CC, zC) => {
          zC ? FC.observe(CC) : FC.unobserve(CC)
        },
        NC = new SM,
        MC = new JM(WC),
        gC = CC => MC.covers(CC),
        SC = new aM;
      let pC;
      const PC = new an((CC => {
          pC.sendCommand(CC)
        })),
        GC = () => {
          PC.send("baf2questbook")
        },
        RC = CC => function(CC, zC, ZC) {
          const QC = {};
          for (const wC of ZC) {
            let ZC = IG.get(wC);
            void 0 === ZC && (ZC = CC.getItemStat(zC, wC, "displayName"), IG.set(wC, ZC)), QC[wC] = ZC
          }
          return QC
        }(pC, bC, CC),
        AC = new rw(GC),
        xC = new Cg((() => Rw.b.get("loadingOverlayVisible"))),
        JC = new HF(PC, AC, xC),
        IC = new bg,
        iC = new GG(xC),
        eC = new RG((CC => {
          xC.show(CC, CC.baf2ToastMs)
        })),
        hC = new gg(WC),
        KC = new Tp(hC),
        YC = new en,
        mC = new FP,
        HC = new bf,
        XC = new xg({
          read: () => !1 !== AG.i.getItem(JG),
          write: CC => {
            AG.i.setItem(JG, CC)
          }
        }),
        cC = new Ug(XC),
        uC = new kg(XC),
        rC = new RS(XC, (CC => function(CC, zC) {
          const ZC = wo(zC.w, zC.h, zC.d),
            QC = new Uint8Array(ZC);
          for (let wC = 0; wC < ZC; wC++) {
            const ZC = tg(CC, kZ(zC, ZQ(zC, wC)));
            QC[wC] = null === ZC ? 0 : Co(ZC)
          }
          return QC
        }(pC, CC)), FS(PC)),
        sC = new AS(XC, FS(PC)),
        TC = new PS,
        DC = (CC, zC) => {
          let [ZC, QC, wC] = CC;
          TC.answered(zC) || xC.show({
            baf2ToastText: [(0, EC.Md)({
              translationKey: "buildAFactory2Game:rxSizeNotTaken",
              params: {
                w: ZC,
                h: QC,
                d: wC
              }
            }, EC.H.whiteUiText)],
            baf2ToastMs: 4e3,
            baf2ToastStyle: "baf2ToastWarn"
          })
        };
      rC.onSizeNotTaken(DC), sC.onSizeNotTaken(DC);
      const jC = new iS,
        yC = new wp(XC),
        UC = new np,
        BC = new Pp(UC),
        OC = new Kp,
        VC = new ap,
        Cz = new Vp(VC),
        zz = new qP(VC),
        Zz = VC.lookSource(),
        Qz = new iP({
          handles: CC => Zz.handles(CC) || CC === lC,
          line: (CC, zC) => CC === lC ? function(CC, zC, ZC) {
            var QC;
            const wC = tC(null === (QC = zC.at(ZC)) || void 0 === QC ? void 0 : QC.item);
            return null === wC ? {
              key: `${xP}lookFarmEmpty`
            } : {
              key: CC.blockIdToBlockName(CC.getBlockId(ZC[0], ZC[1], ZC[2])).endsWith("|Running") ? `${xP}lookFarmRunning` : `${xP}lookFarmWaiting`,
              keys: {
                mob: aC(wC)
              }
            }
          }(pC, hC, zC) : Zz.line(CC, zC),
          version: () => Zz.version() + hC.version()
        }, (CC => CS(XC.all(), CC, (CC => tg(pC, CC)))), (() => AC.get().tier)),
        wz = new aS,
        bz = new uP,
        nz = new DP,
        fz = DP.blade(),
        oz = new VP,
        qz = new og,
        Fz = new wG,
        Nz = new UP,
        Mz = new LP;
      let gz = -1 / 0,
        Sz = 0,
        pz = -1 / 0,
        Pz = -1 / 0;
      const Gz = () => {
          PC.send("baf2islandsclose"), Pz = Date.now()
        },
        Rz = [];

      function Az(CC) {
        var zC, ZC, QC, wC, bC, nC, oC;
        "core" === (null === (zC = fC.get()) || void 0 === zC ? void 0 : zC.kind) && "core" !== (null === CC || void 0 === CC ? void 0 : CC.kind) && PC.send("baf2coreclose"), "power" === (null === (ZC = fC.get()) || void 0 === ZC ? void 0 : ZC.kind) && "power" !== (null === CC || void 0 === CC ? void 0 : CC.kind) && PC.send("baf2powerclose"), "water" === (null === (QC = fC.get()) || void 0 === QC ? void 0 : QC.kind) && "water" !== (null === CC || void 0 === CC ? void 0 : CC.kind) && PC.send(kC.r), "terminal" === (null === (wC = fC.get()) || void 0 === wC ? void 0 : wC.kind) && "terminal" !== (null === CC || void 0 === CC ? void 0 : CC.kind) && PC.send("baf2terminalclose"), "islands" === (null === (bC = fC.get()) || void 0 === bC ? void 0 : bC.kind) && "islands" !== (null === CC || void 0 === CC ? void 0 : CC.kind) && Gz();
        const qC = VC.getStatus();
        "collider" === (null === (nC = fC.get()) || void 0 === nC ? void 0 : nC.kind) && "collider" !== (null === CC || void 0 === CC ? void 0 : CC.kind) && qC && PC.send(to(qC, "close"));
        const FC = CC => "reactor" === CC || "battery" === CC;
        if (FC(null === (oC = fC.get()) || void 0 === oC ? void 0 : oC.kind) && !FC(null === CC || void 0 === CC ? void 0 : CC.kind)) {
          var WC, NC, MC;
          const CC = "reactor" === (null === (WC = fC.get()) || void 0 === WC ? void 0 : WC.kind) ? null === (NC = rC.get()) || void 0 === NC ? void 0 : NC.status.baf2RxAt : null === (MC = sC.get()) || void 0 === MC ? void 0 : MC.status.baf2BatAt;
          CC && PC.send(Wz(CC, "close"))
        }
        "quests" === (null === CC || void 0 === CC ? void 0 : CC.kind) && GC(), fC.set(CC), null === CC && IC.release()
      }

      function xz() {
        (0, Gw.h)(), Az(null)
      }
      let Jz = new Set,
        Iz = !1;
      const iz = {
        onCreate: CC => {
          pC = CC, pC.setGroundArrowStyle({
            width: .6,
            alpha: .5,
            endAtSolidFace: !0
          });
          for (const zC of hz) {
            const CC = Ez[zC].inputSlots ? Xf(nC) : Hf(zC, nC, YC, PC);
            Rz.push((0, pw.e)(zC, CC))
          }
          Rz.push((0, Gw.C)((0, QC.createElement)(QC.Fragment, null, (0, QC.createElement)(vM, {
            controller: MC
          }), (0, QC.createElement)(Pg, {
            store: hC
          }), (0, QC.createElement)(eP, {
            store: Qz
          }), (0, QC.createElement)(kM, {
            store: AC
          }), (0, QC.createElement)(Qg, {
            store: xC
          }), (0, QC.createElement)(ng, {
            store: IC
          }), (0, QC.createElement)(Fg, {
            store: qz
          }), (0, QC.createElement)(IS, {
            store: jC
          }), (0, QC.createElement)(fp, {
            store: UC
          })), {
            content: (0, QC.createElement)(NM, {
              commands: PC,
              store: fC,
              power: YC,
              water: HC,
              reactor: rC,
              battery: sC,
              collider: VC,
              terminal: mC,
              quests: AC,
              tutorial: JC,
              close: Gw.k,
              leave: () => {
                IC.dropHeld(), (0, Gw.h)()
              },
              askIslands: () => {
                Pz = -1 / 0, gz = Date.now(), Sz = PC.send(LC)
              },
              openSocial: () => {
                (0, Gw.h)(), Rw.b.set({
                  openEverythingMenuName: WZ.o.SOCIAL
                })
              },
              showCore: CC => {
                Az({
                  kind: "core",
                  core: CC
                }), PC.send("baf2corereopen")
              }
            }),
            onClose: () => {
              Az(null)
            }
          })), Rz.push((0, Pw.v)({
            id: "baf2Quests",
            labelKey: "buildAFactory2Game:questBookTitle",
            icon: {
              kind: "item",
              name: "Book"
            },
            className: "Baf2QuestsButton",
            onClick: () => {
              Az({
                kind: "quests"
              }), (0, Gw.u)()
            }
          })), Rz.push(function(CC, zC) {
            let ZC = null,
              QC = () => {};
            const wC = zC => {
              var wC;
              let {
                tutorial: bC,
                tutorialKnown: nC
              } = zC;
              (null === (wC = ZC) || void 0 === wC ? void 0 : wC.tutorial) === bC && ZC.tutorialKnown === nC || (ZC = {
                tutorial: bC,
                tutorialKnown: nC
              }, QC = (0, Pw.v)({
                id: "baf2Tutorial",
                order: -1,
                labelKey: dF[bC],
                icon: {
                  kind: "icon",
                  name: YF[bC]
                },
                iconOnly: !0,
                disabled: !nC,
                className: "Baf2TutorialButton",
                onClick: () => {
                  CC.next()
                }
              }))
            };
            wC(zC.get());
            const bC = Hw.o.subscribe(lw, wC);
            return () => {
              Hw.o.unsubscribe(bC), QC()
            }
          }(JC, AC)), Iz = !1, Rz.push(MG()), Rz.push(gG()), Rz.push(function() {
            const CC = Hw.o.subscribe(lw, Vw),
              zC = () => {
                if (kw) {
                  const CC = kw;
                  kw = null, (0, Ew.w)(CC)
                }
              },
              ZC = Hw.o.subscribe("toggleMenu", (CC => {
                "inventory" === (null === CC || void 0 === CC ? void 0 : CC.split("|")[0]) && zC()
              })),
              QC = Hw.o.subscribe("appManagerUpdated|openInGameMenuName", (CC => {
                "inventory" === CC && zC()
              }));
            return () => {
              Hw.o.unsubscribe(CC), Hw.o.unsubscribe(ZC), Hw.o.unsubscribe(QC)
            }
          }()), Rz.push(function(CC) {
            const zC = oG(CC),
              ZC = Hw.o.subscribe(lw, (CC => {
                fG.follow(CC, zC)
              }));
            return () => {
              Hw.o.unsubscribe(ZC), fG.clear()
            }
          }(pC)), Rz.push(function() {
            const CC = document.documentElement,
              zC = (0, DM.b)(".InvenBodyRight", [], (() => {
                const zC = document.querySelector(".InvenBodyRight");
                zC && CC.style.setProperty("--baf2-backpack-width", `${zC.offsetWidth}px`)
              }));
            return () => {
              zC(), CC.style.removeProperty("--baf2-backpack-width")
            }
          }()), Rz.push(function() {
            const CC = document.documentElement;
            return CC.classList.add(bG), () => {
              CC.classList.remove(bG)
            }
          }()), Rz.push((() => {
            FC.dispose(), qC.dispose()
          })), SC.start(pC), Rz.push((() => {
            SC.dispose(), oz.dispose(), KC.dispose()
          }))
        },
        onClose: () => {
          (0, Ew.w)([]), kw = null, Ow = new Set, FG = null, (0, Ew.t)(new Map), IG.clear();
          for (const CC of Rz) CC();
          AC.dispose(), Qz.dispose(), xC.dispose(), IC.dispose(), wz.dispose(), bz.dispose(pC), cC.dispose(pC), uC.dispose(pC), yC.dispose(pC), BC.dispose(pC), UC.dispose(), OC.dispose(), XC.dispose(), rC.dispose(), sC.dispose(), jC.dispose(), nz.dispose(), fz.dispose(), qz.dispose(), Cz.dispose(pC), zz.dispose(pC), VC.dispose(), Fz.dispose(), PC.clear()
        },
        onAfterRender: (CC, zC) => {
          var ZC, QC, wC;
          try {
            SC.onAfterRender(zC)
          } catch (qC) {
            console.error("Error drawing BAF2 belt items", qC)
          }
          try {
            oz.onAfterRender(pC, bC)
          } catch (qC) {
            console.error("Error drawing BAF2 jet flames", qC)
          }
          Iz || (Iz = !0, PC.send("baf2clientready"));
          const nC = pC.getPositionView(bC);
          MC.onAfterRender(zC, nC, NC), hC.onAfterRender(zC, nC, NC, gC), FC.run(NC), wz.onAfterRender(pC, nC), bz.onAfterRender(pC, nC), KC.onAfterRender(pC, nC), cC.onAfterRender(pC, nC), uC.onAfterRender(pC, bC, nC), yC.onAfterRender(pC, bC, nC), BC.onAfterRender(pC, bC), OC.onAfterRender(pC, nC), AC.onPlayerY(nC[1]), Cz.onAfterRender(pC), zz.onAfterRender(pC, bC, nC);
          const oC = pC.getTargetedBlock();
          Qz.onAfterRender(pC, bC, null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.HV) && void 0 !== ZC ? ZC : 0, null !== (QC = null === oC || void 0 === oC ? void 0 : oC.position) && void 0 !== QC ? QC : null), Fz.onAfterRender(pC, zC), eC.onMining(function(CC, zC) {
            var ZC, QC;
            const wC = CC.getMiningBlock();
            if (!wC) return null;
            const bC = (0, dC.e)(CC.getBlockId(wC[0], wC[1], wC[2])),
              nC = null !== (ZC = null === (QC = CC.XzC(zC)) || void 0 === QC ? void 0 : QC.name) && void 0 !== ZC ? ZC : null,
              fC = CC.getItemStat(zC, bC.split("|")[0], "harvestLevel");
            return {
              block: bC,
              x: wC[0],
              y: wC[1],
              z: wC[2],
              vq: nC,
              level: fC
            }
          }(pC, bC), pC.isMining(), performance.now()), "dropMap" === (null === (wC = fC.get()) || void 0 === wC ? void 0 : wC.kind) && cQ(nC[1]) && xz()
        },
        onPlayerChangeBlock: (CC, zC, ZC, QC, wC, nC) => {
          CC === bC && function(CC, zC, ZC, QC, wC, bC, nC) {
            const fC = yP(bC, nC, CC.isPlayerCrouching(zC));
            if (null === fC) return;
            if (CC.TY(ZC, QC, wC, fC), !CC.getClientOption(zC, "canPickUpItems")) return;
            const oC = nZ[fC.split("|")[0]];
            var qC, FC, WC;
            void 0 !== oC && (qC = CC.getInventoryItems(), FC = oC, WC = Jg.f.maxItemStackSize, CC.getInventoryFreeSlotCount(zC) > 0 || qC.some((CC => null !== CC && CC.name === FC && null !== CC.amount && CC.amount < WC))) && CC.playSound(zC, (0, pG.g)("pickUp"), .5, 1)
          }(pC, CC, zC, ZC, QC, wC, nC)
        },
        onPlayerAltAction: (CC, zC, ZC, QC, wC) => {
          var nC, fC;
          if (!pC.getClientOption(bC, "canPickUpItems")) return;
          const oC = null !== (nC = null === (fC = pC.XzC(bC)) || void 0 === fC ? void 0 : fC.name) && void 0 !== nC ? nC : null,
            qC = function(CC, zC) {
              const ZC = CC.split("|")[0];
              return vC(ZC) && zC !== fw && "Sky Pack" !== zC ? ZC : null
            }(wC, oC);
          if (null !== qC) return void(Nz.tap(qC, performance.now()) && qG(pC, bC, qC, AC));
          if (!TQ(oC)) return;
          const FC = Mz.isNewPress(performance.now()),
            WC = function(CC, zC, ZC) {
              return !TQ(zC) || ZC ? null : OQ(CC)
            }(wC, oC, pC.isPlayerCrouching(bC));
          null !== WC && FC && pC.TY(zC, ZC, QC, WC)
        },
        onPlayerAttemptAltAction: (CC, zC, ZC, QC, wC) => {
          if (function(CC, zC, ZC, QC, wC) {
              "Workbench" === QC.split("|")[0] && CC.getClientOption(ZC, "canCraft") && (fG.open("Workbench", wC.get(), oG(CC)), zC.send("baf2station Workbench"))
            }(pC, PC, bC, wC, AC), SG(pC, bC, wC)) return "preventAction";
          iC.onAltAction(pC, bC, wC)
        },
        onReceivedMessageFromServer: (CC, zC) => {
          if ("baf2MachineStatus" === CC) {
            var ZC, QC, wC, qC, FC, WC, NC, gC, GC, JC, iC, vC, eC, KC, dC, EC;
            const CC = zC,
              bC = CC.baf2MachineTaught;
            nC.set(CC.baf2MachinePos, {
              status: CC.baf2MachineStatus,
              power: null !== (ZC = CC.baf2MachinePower) && void 0 !== ZC ? ZC : null,
              opLeftMs: null !== (QC = CC.baf2MachineOpLeftMs) && void 0 !== QC ? QC : null,
              dug: CC.baf2MachineYield ? {
                item: CC.baf2MachineYield,
                name: RC([CC.baf2MachineYield])[CC.baf2MachineYield]
              } : null,
              powerCap: null !== (wC = CC.baf2MachinePowerCap) && void 0 !== wC ? wC : null,
              powerRates: null !== (qC = CC.baf2MachinePowerRates) && void 0 !== qC ? qC : null,
              coupled: !0 === CC.baf2MachineCoupled,
              couplerLevel: null !== (FC = CC.baf2MachineCoupler) && void 0 !== FC ? FC : 1,
              taught: bC,
              taughtName: bC ? RC([bC])[bC] : null,
              tier: null !== (WC = CC.baf2MachineTier) && void 0 !== WC ? WC : null,
              input: null !== (NC = CC.baf2MachineInput) && void 0 !== NC ? NC : null,
              inertCoupler: null !== (gC = CC.baf2MachineInertCoupler) && void 0 !== gC ? gC : null,
              inputShort: null !== (GC = CC.baf2MachineInputShort) && void 0 !== GC ? GC : null,
              field: null !== (JC = CC.baf2MachineField) && void 0 !== JC ? JC : null,
              noSeeds: !0 === CC.baf2MachineNoSeeds,
              fuelFed: !0 === CC.baf2MachineFuelFed,
              fuelFeeds: !0 === CC.baf2MachineFuelFeeds,
              coreFull: !0 === CC.baf2MachineCoreFull,
              waterUnpowered: !0 === CC.baf2MachineWaterUnpowered,
              powerShort: !0 === CC.baf2MachinePowerShort,
              powerWait: !0 === CC.baf2MachinePowerWait,
              reactorPowered: !0 === CC.baf2MachineReactorPowered,
              fuelLeftMs: null !== (iC = CC.baf2MachineFuelLeftMs) && void 0 !== iC ? iC : null,
              burning: null !== (vC = CC.baf2MachineBurning) && void 0 !== vC ? vC : null,
              fuelKeep: null !== (eC = CC.baf2MachineFuelKeep) && void 0 !== eC ? eC : null,
              water: null !== (KC = CC.baf2MachineWater) && void 0 !== KC ? KC : null,
              farm: null !== (dC = CC.baf2MachineFarm) && void 0 !== dC ? dC : null,
              cryo: null !== (EC = CC.baf2MachineCryo) && void 0 !== EC ? EC : null
            })
          } else if ("baf2StationOpen" === CC) {
            const CC = zC.baf2Station;
            Nz.consumeServerOpen(CC, performance.now()) || qG(pC, bC, CC, AC)
          } else if ("baf2Power" === CC) {
            const CC = zC;
            YC.set(CC), CC.baf2PowerOpen && (Az({
              kind: "power"
            }), (0, Gw.u)())
          } else if (CC === kC.w) {
            const CC = zC;
            HC.set(CC), CC.baf2WaterOpen && (Az({
              kind: "water"
            }), (0, Gw.u)())
          } else if ("baf2RxPlans" === CC) {
            var lC, cC, uC;
            const CC = zC;
            XC.fR(CC);
            const ZC = new Set(CC.baf2RxPlanList.map((CC => {
              let [zC, ZC, QC] = CC;
              return `${zC},${ZC},${QC}`
            })));
            jC.retain(ZC);
            const QC = null === (lC = fC.get()) || void 0 === lC ? void 0 : lC.kind,
              wC = "reactor" === QC ? null === (cC = rC.get()) || void 0 === cC ? void 0 : cC.status.baf2RxAt : "battery" === QC ? null === (uC = sC.get()) || void 0 === uC ? void 0 : uC.status.baf2BatAt : void 0;
            wC && Jz.has(wC.join(",")) && !ZC.has(wC.join(",")) && xz(), Jz = ZC
          } else if ("baf2RxStatus" === CC) {
            const CC = zC;
            rC.set(CC), CC.baf2RxOpen && (Az({
              kind: "reactor"
            }), (0, Gw.u)())
          } else if ("baf2BatStatus" === CC) {
            const CC = zC;
            sC.set(CC), CC.baf2BatOpen && (Az({
              kind: "battery"
            }), (0, Gw.u)())
          } else if ("baf2RxAlarm" === CC) jC.fR(zC);
          else if ("baf2Bomb" === CC) UC.fR(zC, pC.getPositionView(bC));
          else if ("baf2Fallout" === CC) OC.fR(zC);
          else if ("baf2ColBeams" === CC) VC.onBeams(zC);
          else if ("baf2ColStatus" === CC) {
            const CC = zC;
            var aC, tC;
            if (VC.onStatus(CC), CC.baf2ColOpen) VC.onOpen(null !== (aC = null === (tC = pC.XzC(bC)) || void 0 === tC ? void 0 : tC.name) && void 0 !== aC ? aC : null), Az({
              kind: "collider"
            }), (0, Gw.u)()
          } else if ("baf2Terminal" === CC) {
            const CC = zC;
            var DC;
            if (mC.apply(CC)) CC.baf2TermReset && (Az({
              kind: "terminal"
            }), (0, Gw.u)());
            else "terminal" === (null === (DC = fC.get()) || void 0 === DC ? void 0 : DC.kind) && (fC.set(null), (0, Gw.h)())
          } else if ("baf2Core" === CC) {
            var yC;
            const CC = zC;
            if (oC(!0 === CC.baf2CoreNuclear), function(CC, zC) {
                return "core" === (null === CC || void 0 === CC ? void 0 : CC.kind) && zC.baf2CoreTier > CC.core.message.baf2CoreTier
              }(fC.get(), CC)) return void(0, Gw.h)();
            if (CC.baf2CoreRefresh && "core" !== (null === (yC = fC.get()) || void 0 === yC ? void 0 : yC.kind)) return;
            Az({
              kind: "core",
              core: xG(CC, RC)
            }), CC.baf2CoreRefresh || (0, Gw.u)()
          } else if ("baf2WrenchUndo" === CC) {
            const {
              baf2WrenchPos: CC,
              baf2WrenchBlock: ZC
            } = zC;
            pC.TY(CC[0], CC[1], CC[2], ZC)
          } else if ("baf2Toast" === CC) {
            const CC = zC;
            TC.heard(performance.now(), CC.baf2ToastMs), xC.show(CC)
          } else if ("baf2Area" === CC) IC.arrive(zC, null !== fC.get());
          else if ("baf2Quest" === CC) {
            const CC = zC;
            oC(!0 === CC.baf2QuestNuclear), AC.set(CC, function(CC, zC) {
              var ZC, QC, wC, bC, nC;
              const fC = [];
              for (const [, , FC, , , , , , WC, NC] of CC.baf2QuestSteps) null !== FC && fC.push(FC), fC.push(...null !== WC && void 0 !== WC ? WC : [], ...null !== NC && void 0 !== NC ? NC : []);
              CC.baf2QuestReward && fC.push(CC.baf2QuestReward);
              const oC = null === (ZC = CC.baf2QuestSide) || void 0 === ZC ? void 0 : ZC[2][2];
              oC && fC.push(oC), fC.push(...null !== (QC = null === (wC = CC.baf2QuestSide) || void 0 === wC ? void 0 : wC[2][8]) && void 0 !== QC ? QC : [], ...null !== (bC = null === (nC = CC.baf2QuestSide) || void 0 === nC ? void 0 : nC[2][9]) && void 0 !== bC ? bC : []);
              for (const [FC] of null !== (qC = CC.baf2QuestAlso) && void 0 !== qC ? qC : []) {
                var qC;
                fC.push(FC)
              }
              return zC(fC)
            }(CC, RC)), NG(CC.baf2QuestTier)
          } else if ("baf2Route" === CC) ! function(CC, zC) {
            let {
              baf2RouteCells: ZC,
              baf2RouteInto: QC
            } = zC;
            0 !== ZC.length && QC ? CC.setRouteChevrons({
              cells: ZC.map(((CC, zC) => {
                const [wC, , bC] = function(CC, zC, ZC) {
                  const QC = ZC + 1 < CC.length ? CC[ZC + 1] : zC;
                  return [QC[0] - CC[ZC][0], 0, QC[2] - CC[ZC][2]]
                }(ZC, QC, zC);
                return {
                  pos: CC,
                  way: [wC, bC]
                }
              })),
              colour: "#ffd640",
              alpha: .8
            }) : CC.setRouteChevrons(null)
          }(pC, zC);
          else if ("baf2QuestBook" === CC) AC.setBook(zC);
          else if ("baf2Stalls" === CC) MC.set(zC.baf2StallCells);
          else if (CC === SZ.o) SC.onMoves(zC);
          else if (CC === SZ.i) SC.onLines(zC);
          else if ("baf2Labels" === CC) hC.fR(zC);
          else if ("baf2DropMap" === CC) Az({
            kind: "dropMap",
            dropMap: zC
          }), (0, Gw.u)();
          else if ("baf2Islands" === CC) {
            var BC, Cz;
            const CC = zC;
            if (PC.syncIslandEdits(CC.baf2IslandsAnswered), !CC.baf2IslandsOpen && "islands" !== (null === (BC = fC.get()) || void 0 === BC ? void 0 : BC.kind)) return;
            if (CC.baf2IslandsOpen) {
              var zz, Zz;
              const zC = Rw.b.get("openEverythingMenuName"),
                ZC = PC.sent() >= Sz,
                QC = "other" !== (Mz = {
                  askedAtMs: gz,
                  askSent: ZC,
                  reaskedAtMs: pz,
                  nowMs: Date.now(),
                  panel: null !== (zz = null === (Zz = fC.get()) || void 0 === Zz ? void 0 : Zz.kind) && void 0 !== zz ? zz : null,
                  inGameMenu: Rw.b.get("openInGameMenuName"),
                  everythingMenu: null === zC ? null : zC === WZ.o.SHOP ? "shop" : "other",
                  focusInvite: void 0 !== CC.baf2IslandsFocusInvite
                }).everythingMenu && (!!Mz.focusInvite || "islands" === Mz.panel && "clientGame" === Mz.inGameMenu || !(Mz.nowMs - Mz.reaskedAtMs < rq) && (Mz.askSent && Mz.nowMs - Mz.askedAtMs < rq ? "core" === Mz.panel && "clientGame" === Mz.inGameMenu && null === Mz.everythingMenu : "shop" === Mz.everythingMenu || null === Mz.inGameMenu));
              if (ZC && (gz = -1 / 0), pz = -1 / 0, !QC) return void Gz()
            }
            const ZC = (wz = CC.baf2IslandsOpen, bz = "islands" === (null === (Cz = fC.get()) || void 0 === Cz ? void 0 : Cz.kind), Fz = Pz, Wz = Date.now(), wz && !bz && Wz - Fz < rq);
            Az({
              kind: "islands",
              islands: CC,
              arrivedAtMs: Date.now(),
              backToCore: sq(fC.get())
            }), ZC && (Pz = -1 / 0, pz = Date.now(), PC.send(LC)), CC.baf2IslandsOpen && ("clientGame" !== Rw.b.get("openInGameMenuName") && (0, Aw.f)(), (0, Gw.u)())
          } else if ("baf2CoopTransfer" === CC) {
            var Qz;
            const CC = zC;
            CC.baf2TransferOn ? (Az({
              kind: "transfer",
              transfer: CC,
              arrivedAtMs: Date.now()
            }), (0, Gw.u)()) : "transfer" === (null === (Qz = fC.get()) || void 0 === Qz ? void 0 : Qz.kind) && (0, Gw.h)()
          } else "baf2IslandLeft" === CC ? (IC.dropHeld(), null !== fC.get() && xz(), "inventory" === Rw.b.get("openInGameMenuName") && (0, Aw.f)()) : "baf2Arc" === CC ? nz.fR(pC, zC) : "baf2Blade" === CC ? fz.onBlade(pC, zC) : "baf2JetFlame" === CC ? oz.fR(pC, zC) : "baf2GearPower" === CC && qz.fR(zC);
          var wz, bz, Fz, Wz, Mz
        }
      };
      return iz
    }
  },
  38341: (CC, zC, ZC) => {
    function QC(CC, zC, ZC) {
      const QC = new Set,
        wC = new ResizeObserver(ZC),
        bC = () => {
          const zC = new Set(document.querySelectorAll(CC));
          let bC = !1;
          for (const CC of QC) zC.has(CC) || (wC.unobserve(CC), QC.delete(CC), bC = !0);
          for (const CC of zC) QC.has(CC) || (wC.observe(CC), nC.observe(CC, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), QC.add(CC));
          bC && ZC()
        },
        nC = new MutationObserver((zC => {
          zC.some((CC => "attributes" === CC.type)) && ZC(), zC.some((zC => function(CC, zC, ZC) {
            if ("childList" !== CC.type) return !1;
            for (const QC of CC.addedNodes)
              if (QC instanceof Element && (QC.matches(zC) || QC.querySelector(zC))) return !0;
            for (const QC of CC.removedNodes)
              if (QC instanceof Element)
                for (const CC of ZC)
                  if (QC.contains(CC)) return !0;
            return !1
          }(zC, CC, QC))) && bC()
        }));
      nC.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const fC of zC) wC.observe(fC);
      return window.addEventListener("resize", ZC), bC(), ZC(), () => {
        wC.disconnect(), nC.disconnect(), window.removeEventListener("resize", ZC)
      }
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38319: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      i: () => bC
    });
    const QC = new WeakMap;

    function wC(CC) {
      let zC = QC.get(CC);
      return zC || (zC = {
        hidden: CC.hidden,
        x: NaN,
        y: NaN
      }, QC.set(CC, zC)), zC
    }

    function bC(CC, zC) {
      const ZC = wC(CC);
      ZC.hidden !== zC && (ZC.hidden = zC, CC.hidden = zC)
    }

    function nC(CC, zC, ZC) {
      const QC = wC(CC);
      QC.x === zC && QC.y === ZC || (QC.x = zC, QC.y = ZC, CC.style.translate = `${zC}vw ${ZC}vh`)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);